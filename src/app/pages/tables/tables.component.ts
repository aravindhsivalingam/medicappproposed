import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper-service';
import * as _ from 'lodash';
declare var $: any;

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  constructor(private helperService: HelperService) { }

  public prescriptionInCart = [];

  ngOnInit() {
    this.prescriptionInCart = JSON.parse(localStorage.getItem('prescriptionInCart')) || [];
    setTimeout(() => {
      $('[data-toggle="tooltip"]').tooltip();
    }, 1000);
  }

  deletePrescription(index) {
    setTimeout(() => {
      this.prescriptionInCart.splice(index, 1);
      // this.helperService.prescriptionInCart(this.prescriptionInCart);
      this.helperService.setPrescription(this.prescriptionInCart);
    }, 1000);
    localStorage.setItem('prescriptionInCart', JSON.stringify(this.prescriptionInCart));
  }

  checkout() {
    $('#checkoutModal').modal('show');
    setTimeout(() => {
      this.prescriptionInCart = [];
      this.helperService.setPrescription(this.prescriptionInCart);
      localStorage.setItem('prescriptionInCart', JSON.stringify(this.prescriptionInCart));
    }, 2000);
  }

  changeCount(type, id) {
    const index = _.findIndex(this.prescriptionInCart, { id: id });
    const temp = this.prescriptionInCart[index];
    if (type === '+') {
      temp.count++;
    } else {
      temp.count--;
    }
    this.prescriptionInCart.splice(index, 1, temp);
  }

}
