import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app-service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotyfService } from 'ng-notyf';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private service: AppService, private notyfService: NotyfService, private route: ActivatedRoute, private router: Router) { }

  resetPasswordPayload = {
    password: '',
    token: ''
  };
  ngOnInit() {
    this.initData();
  }
  initData() {
    this.route.queryParams.subscribe(params => {
      this.resetPasswordPayload.token = params['token'];
    });
  }
  resetPassword() {
    console.log(this.resetPasswordPayload);
    this.service.resetPassword(this.resetPasswordPayload).subscribe((data) => {
      if (data === 'updated') {
        this.notyfService.success(`Password successfully resetted, Redirecting you to login in 5 seconds`);
        setTimeout(() => {
          this.router.navigateByUrl('/');
        }, 5000);
      } else {
        this.notyfService.error(`${data}`);
      }
    });
  }

}
