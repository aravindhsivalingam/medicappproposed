import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app-service';
import { HelperService } from 'src/app/services/helper-service';
declare var $: any;

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/cart', title: 'Cart', icon: 'fas fa-shopping-cart', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  public prescriptionList = [];

  constructor(private router: Router, private service: AppService, private helperService: HelperService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
    this.prescriptionList = JSON.parse(localStorage.getItem('prescriptionInCart')) || [];
    this.helperService.prescriptions.subscribe(data => this.prescriptionList = data);
  }
}
