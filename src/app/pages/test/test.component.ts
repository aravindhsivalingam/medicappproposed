import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgxImageCompressService } from 'ngx-image-compress';
import { environment } from 'src/environments/environment';
import firebase from 'firebase/app';

import { AppService } from '../../services/app-service';
import { HelperService } from '../../services/helper-service';
import { NotyfService } from 'ng-notyf';

declare var $: any;
declare var grecaptcha: any;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnDestroy {
  constructor(private imageCompress: NgxImageCompressService, private service: AppService, private notyfService: NotyfService,
    private router: Router, private helperService: HelperService) { }
  public loginPayload = {
    emailId: '',
    password: '',
    imageUrl: ''
  };

  public isTwoFactorEnabled = false;
  public otp;
  public windowRef: any;
  public userData;
  public currentStage = 'Step 1';
  public counter = 1;
  public chartTimes = {
    first: '',
    second: ''
  };

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public mbarChartLabels: string[] = ['Without OTP', 'With OTP'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartColors: Array<any> = [
    {
      backgroundColor: '#3c00bd',
      borderColor: 'rgba(105,159,177,1)',
      pointBackgroundColor: 'rgba(105,159,177,1)',
      pointBorderColor: '#fafafa',
      pointHoverBackgroundColor: '#fafafa',
      pointHoverBorderColor: 'rgba(105,159,177)'
    },
    {
      backgroundColor: '#3c00bd',
      borderColor: 'rgba(77,20,96,1)',
      pointBackgroundColor: 'rgba(77,20,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,20,96,1)'
    }
  ];
  public barChartData: any[] = [
    { data: [1, 2], label: 'Login time in milliseconds' }
  ];
  ngOnInit() {
    if (!firebase.apps.length) {
      firebase.initializeApp(environment.firebase);
    }
    this.initData();
    this.refreshData();
  }

  ngOnDestroy() {
    this.helperService.apiResponseTime.unsubscribe();
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
    $('.hide-div').attr('hidden', false);
    $('#spinner-img').attr('hidden', true);
  }
  refreshData() {
    this.helperService.chartTime.subscribe(data => {
      if (this.counter === 1) {
        this.chartTimes.second = data;
        this.barChartData[0].data = [this.chartTimes.first, this.chartTimes.second];
        console.log(this.chartTimes);
        this.counter += 1;
      } else if (this.counter === 2) {
        this.counter = 1;
        this.chartTimes.first = data;
      }
    });
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
        if (this.currentStage === 'Step 2') {
          this.isTwoFactorEnabled = true;
        }
        if (this.isTwoFactorEnabled) {
          // this.sendOTP();
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
  resetFlow() {
    (<any>$('#resultBlock')).collapse('hide');
    (<any>$('#emailForm')).collapse('show');
    this.isTwoFactorEnabled = false;
    this.loginPayload.emailId = '';
    this.loginPayload.password = '';
    this.otp = '';
  }

  goBack() {
    (<any>$('#passwordForm')).collapse('hide');
    (<any>$('#emailForm')).collapse('show');
    this.loginPayload.password = '';
    this.loginPayload.imageUrl = '';
    this.otp = '';
  }

  verifyOTP() {
    const mthis = this;
    // window['confirmationResult'].confirm(this.otp).then(function (result) {
    //   // User signed in successfully.
    //   const user = result.user;
    //   mthis.loginWithOTP();
    //   console.log(user);
    // }).catch(function (error) {
    //   mthis.notyfService.error(`Please check the OTP`);
    // });
    mthis.loginWithOTP();
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
          // this.chartTimes.first = ;
          this.notyfService.success(`Step 1 Testing Completed`);
          setTimeout(() => {
            // Start OTP Validation
            this.currentStage = 'Step 2';
            (<any>$('#passwordForm')).collapse('hide');
            (<any>$('#emailForm')).collapse('show');
            this.loginPayload.emailId = '';
            this.loginPayload.password = '';
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
        // this.chartTimes.second = ;
        this.notyfService.success(`Step 2 Testing Completed`);
        setTimeout(() => {
          this.currentStage = 'Results';
          (<any>$('#passwordForm')).collapse('hide');
          (<any>$('#resultBlock')).collapse('show');
          // Over Validation
        }, 1000);
      } else {
        this.notyfService.error(`${data} ! !`);
      }
    });
  }
}
