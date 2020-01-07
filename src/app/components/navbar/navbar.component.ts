import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { AppService } from '../../services/app-service';
import { HelperService } from 'src/app/services/helper-service';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  public notificationList: any = [];
  public localData: any;
  public searchText: string;
  constructor(location: Location, private element: ElementRef, private router: Router, private service: AppService,
    private helperService: HelperService) {
    this.location = location;
  }

  ngOnInit() {
    this.localData = JSON.parse(localStorage.getItem('loggedInUser'));
    if (this.localData === null) {
      this.router.navigateByUrl('/login');
    } else {
      this.service.getAllNotifications(this.localData.email).subscribe((data) => {
        console.log(data);
        this.notificationList = data;
      });
    }
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    $('#notificationButton').focus(() => { $('#bellBtn').css('color', '#000'); });
    $('#notificationButton').focusout(() => { setTimeout(() => { $('#bellBtn').css('color', '#fff'); }, 200); });
  }
  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }

  removeNotification(id, i) {
    this.service.deleteNotification(id).subscribe(data => {
      if (data.toString().includes('success')) {
        this.notificationList.splice(i, 1);
      }
    });
  }

  logout() {
    localStorage.setItem('loggedInUser', null);
    this.router.navigateByUrl('/login');
  }
  approveRequest(id, i) {
    this.service.changePrivateState(id).subscribe(data => {
      this.service.deleteNotification(id).subscribe(deleteResponse => {
        if (deleteResponse.toString().includes('success')) {
          this.notificationList.splice(i, 1);
        }
      });
      console.log(data);
    });
  }
  changeSearch() {
    this.helperService.searchText(this.searchText);
  }

}
