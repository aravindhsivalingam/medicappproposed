import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app-service';
import { NotyfService } from 'ng-notyf';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private service: AppService, private notyfService: NotyfService) { }
  public forgotPasswordPayload = {
    emailId: '',
    link: `${window.location.origin}/#/resetPassword`,
  };

  ngOnInit() {
  }

  forgotPassword() {
    console.log(this.forgotPasswordPayload);
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.forgotPasswordPayload.emailId === '') {
      this.notyfService.error(`Email Id cannot be Empty !`);
    } else if (!re.test(String(this.forgotPasswordPayload.emailId).toLowerCase())) {
      this.notyfService.error(`Enter a Valid Email Id ! !`);
    } else {
      this.service.forgotPassword(this.forgotPasswordPayload).subscribe((data) => {
        if (data === 'success') {
          this.notyfService.success(`📧 Mailed your password to ${this.forgotPasswordPayload.emailId}`);
        } else {
          this.notyfService.error(`Error in sending Email`);
        }
      });
    }
  }

}
