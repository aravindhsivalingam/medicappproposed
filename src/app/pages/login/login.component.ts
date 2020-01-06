import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxImageCompressService } from 'ngx-image-compress';


import { AppService } from '../../services/app-service';
import { NotyfService } from 'ng-notyf';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private imageCompress: NgxImageCompressService, private service: AppService, private notyfService: NotyfService,
    private router: Router) { }
  public loginPayload = {
    emailId: '',
    password: '',
    imageUrl: ''
  };
  ngOnInit() {
  }
  ngOnDestroy() {
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

  // Login with UserName and Password
  login() {
    console.log('Login : ', this.loginPayload);
    if (this.loginPayload.emailId !== '' && this.loginPayload.password !== '' && this.loginPayload.imageUrl !== '') {
      this.service.validateUser(this.loginPayload).subscribe((data) => {
        if (data && data['email']) {
          console.log('login Success');
          localStorage.setItem('loggedInUser', JSON.stringify(data));
          setTimeout(() => {
            this.router.navigateByUrl('./dashboard');
          }, 2000);
        } else {
          this.notyfService.error(`${data} ! !`);
        }
      });
    } else {
      this.notyfService.error(`Enter All Data ! !`);
    }
  }

}
