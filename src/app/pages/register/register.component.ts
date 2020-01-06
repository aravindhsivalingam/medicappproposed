import { Component, OnInit } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';
import { AppService } from '../../services/app-service';
import { NotyfService } from 'ng-notyf';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private imageCompress: NgxImageCompressService, private service: AppService, private notyfService: NotyfService,
    private router: Router) { }
  public registerPayload = {
    name: '',
    emailId: '',
    password: '',
    imageUrl: ''
  };
  public passwordStrength = '';
  ngOnInit() {
  }
  compressFile() {
    this.imageCompress.uploadFile().then(({ image, orientation }) => {
      this.imageCompress.compressFile(image, orientation, 75, 50).then(
        result => {
          this.registerPayload.imageUrl = result;
          console.log('File Size : ', this.imageCompress.byteCount(this.registerPayload.imageUrl));
        }
      );
    });
  }

  // Create Account with same Payload
  createUser() {
    console.log('SignUp : ', this.registerPayload);
    if (this.registerPayload.name !== '' && this.registerPayload.emailId !== '' && this.registerPayload.password !== ''
      && this.registerPayload.imageUrl !== '') {
      this.service.createUser(this.registerPayload).subscribe((data) => {
        console.log(data);
        if (data === 'Registration Successful') {
          this.notyfService.success(`Registration Successful ✔️
          Redirecting to Login`);
          setTimeout(() => {
            this.router.navigateByUrl('/');
          }, 5000);
        } else {
          this.notyfService.error(`${data} ! !`);
        }
      });
    } else {
      this.notyfService.error(`Enter All Data ! !`);
    }
  }
  howPassword() {
    if (this.registerPayload.password.length < 6) {
      this.passwordStrength = 'Weak';
    }
    if (this.registerPayload.password.length > 6) {
      this.passwordStrength = 'Medium';
    }
    if (this.registerPayload.password.length > 8) {
      this.passwordStrength = 'Strong';
    }
  }
}
