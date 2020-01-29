import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app-service';
import { NotyfService } from 'ng-notyf';
declare var $: any;

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private service: AppService, private notyf: NotyfService) { }

  public localData: any;
  public profileData = {
    name: '',
    firstName: '',
    lastName: '',
    emailId: '',
    prescriptionLength: '',
    isTwoFactorEnabled: false,
    billingAddress: {
      street: '',
      city: '',
      country: '',
      postalcode: ''
    }
  };

  ngOnInit() {
    $('.hide-div').attr('hidden', true);
    $('#spinner-img').attr('hidden', false);
    this.localData = JSON.parse(localStorage.getItem('loggedInUser'));
    this.service.getUserInfo(this.localData.email).subscribe(data => {
      $('.hide-div').attr('hidden', false);
      $('#spinner-img').attr('hidden', true);
      Object.keys(data).map(d => {
        this.profileData[d] = data[d];
      });
    });
  }

  toggleTwoFactorAuth() {
    this.service.toggleTwoFactorAuth(this.localData.email).subscribe(data => {
      if (data === 'success') {
        this.profileData.isTwoFactorEnabled = !this.profileData.isTwoFactorEnabled;
        this.notyf.success(`Two Factor Authentication turned ${this.profileData.isTwoFactorEnabled ? 'on' : 'off'} Successfully.`);
      }
    });
  }

  updateUser() {
    console.log(this.profileData);
    this.service.updateUser(this.profileData).subscribe(data => {
      this.notyf.success(`Details updated Successfully.`);
    });
  }

}
