import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxImageCompressService } from 'ngx-image-compress';
import { environment } from 'src/environments/environment';
import { HelperService } from '../../services/helper-service';
import { WindowService } from './window.service';
import firebase from 'firebase';

// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/firestore';

import { AppService } from '../../services/app-service';
import { NotyfService } from 'ng-notyf';

declare var $: any;
declare var grecaptcha: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private imageCompress: NgxImageCompressService, private service: AppService, private notyfService: NotyfService,
    private router: Router, private winService: WindowService, private helperService: HelperService) { }
  public loginPayload = {
    emailId: '',
    password: '',
    imageUrl: ''
  };

  public isTwoFactorEnabled: false;
  public otp;
  public windowRef: any;
  public userData;
  ngOnInit() {
    if (!firebase.apps.length) {
      firebase.initializeApp(environment.firebase);
    }
    this.initData();
  }

  ngOnDestroy() {
  }

  initData() {
    // this.windowRef = this.winService.windowRef;
    window['recaptchaVerifier'] = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'expired-callback': function () {
        window['recaptchaVerifier'].render().then(function (widgetId) {
          grecaptcha.reset(widgetId);
        });
      }
    });
    window['recaptchaVerifier'].render();
  }
  compressFile() {
    this.imageCompress.uploadFile().then(({ image, orientation }) => {
      this.imageCompress.compressFile(image, orientation, 75, 50).then(
        result => {
          this.loginPayload.imageUrl = result;
          console.log('File Size : ', this.imageCompress.byteCount(this.loginPayload.imageUrl));
        }
      );
    });
  }

  validateUser() {
    this.service.validateUser(this.loginPayload.emailId).subscribe(userData => {
      this.userData = userData;
      console.log(userData);
      if (userData['emailId'] !== undefined) {
        this.isTwoFactorEnabled = userData['isTwoFactorEnabled'];
        if (this.isTwoFactorEnabled) {
          this.sendOTP();
        }
        (<any>$('#emailForm')).collapse('hide');
        (<any>$('#passwordForm')).collapse('show');
      } else {
        this.notyfService.error(`${userData} ! !`);
      }
    });
  }

  // Send to registered Mobile Number
  sendOTP() {
    const phoneNumber = this.userData.phoneNumber;
    const appVerifier = window['recaptchaVerifier'];
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        window['confirmationResult'] = confirmationResult;
      }).catch(function (error) {
        console.log(error);
      });
  }

  goBack() {
    (<any>$('#passwordForm')).collapse('hide');
    (<any>$('#emailForm')).collapse('show');
    this.loginPayload.password = '';
    this.otp = '';
  }

  verifyOTP() {
    const mthis = this;
    window['confirmationResult'].confirm(this.otp).then(function (result) {
      // User signed in successfully.
      const user = result.user;
      mthis.loginWithOTP();
      console.log(user);
    }).catch(function (error) {
      mthis.notyfService.error(`Please check the OTP`);
    });
  }
  checkNumber(event) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      this.notyfService.error(`Enter Number Only`);
      return false;
    }
    return true;
  }

  // Login with UserName and Password
  login() {
    console.log('Login : ', this.loginPayload);
    if (this.loginPayload.emailId !== '' && this.loginPayload.password !== '' && this.loginPayload.imageUrl !== '') {
      this.service.loginUser(this.loginPayload).subscribe((data) => {
        if (data && data['email']) {
          console.log('login Success');
          localStorage.setItem('loggedInUser', JSON.stringify(data));
          this.helperService.setDataInBrowser('loggedInUser', data);
          setTimeout(() => {
            this.router.navigateByUrl('./dashboard');
          }, 1000);
        } else {
          this.loginPayload.imageUrl = '';
          this.notyfService.error(`${data} ! !`);
        }
      });
    } else {
      this.notyfService.error(`Enter All Data ! !`);
    }
  }

  loginWithOTP() {
    this.service.loginWithOtp(this.loginPayload).subscribe((data) => {
      if (data && data['email']) {
        console.log('login Success');
        localStorage.setItem('loggedInUser', JSON.stringify(data));
        setTimeout(() => {
          this.router.navigateByUrl('./dashboard');
        }, 1000);
      } else {
        this.notyfService.error(`${data} ! !`);
      }
    });
  }
}
