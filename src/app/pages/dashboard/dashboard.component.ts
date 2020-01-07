import { Component, OnInit } from '@angular/core';
import { defaultOptions } from 'ngx-extended-pdf-viewer';
import { AppService } from '../../services/app-service';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper-service';
import { NotyfService } from 'ng-notyf';
declare var $: any;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private service: AppService, private router: Router, private helperService: HelperService,
    private notyfService: NotyfService) {
    defaultOptions.workerSrc = './assets/pdf.worker.js';
  }

  public localData = {
    email: '',
    name: '',
    type: ''
  };
  public stateList = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
    'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
    'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttarakhand', 'Uttar Pradesh',
    'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Lakshadweep',
    'Puducherry'];
  public prescription = {
    id: '',
    prescriptionName: '',
    patientName: '',
    age: '',
    email: '',
    createdUser: '',
    isPrivate: false,
    medicineList: [{
      id: 1,
      name: '',
      quantity: ''
    }],
    address: {
      street: '',
      state: 'Tamil Nadu',
      pincode: ''
    },
    report: {
      fileName: '',
      url: ''
    },
    count: 1
  };
  public pdfUrl = {
    fileName: '',
    url: ''
  };
  public prescriptionList: any;
  public activePrescription: any;
  public searchText: string;
  public prescriptionInCart = [];
  ngOnInit() {
    $('.hide-div').attr('hidden', true);
    $('#spinner-img').attr('hidden', false);
    this.localData = JSON.parse(localStorage.getItem('loggedInUser'));
    this.prescriptionInCart = JSON.parse(localStorage.getItem('prescriptionInCart')) || [];
    if (this.localData !== null) {
      this.prescription.email = this.localData.email;
      this.prescription.createdUser = this.localData.name;
    }
    console.log(this.localData);
    this.initData();
    this.initModal();
    this.refreshData();
  }
  refreshData() {
    this.helperService.prescriptions.subscribe(data => {
      this.prescriptionInCart = data;
      localStorage.setItem('prescriptionInCart', JSON.stringify(this.prescriptionInCart));
      $('#cartCount').addClass('shake');
      setTimeout(() => {
        $('#cartCount').removeClass('shake');
      }, 1000);
    });
    this.helperService.searchText = (data) => {
      if (data !== null && data !== undefined) {
        this.searchText = data;
      }
    };
  }

  initData() {
    if (this.localData == null) {
      this.router.navigateByUrl('/login');
    } else {
      if (this.localData.type === 'client') {
        this.getAllPrescriptionsByEmailId();
      } else if (this.localData.type === 'doctor') {
        this.getAllPrescriptions();
      }
    }
    setInterval(() => {
      $('[data-toggle="tooltip"]').tooltip();
    }, 1000);
  }
  initModal() {
    const mthis = this;
    $('#editPrescriptionModal').on('hidden.bs.modal', function () {
      mthis.emptyPrescriptions();
    });
    $('#newPrescriptionModal').on('hidden.bs.modal', function () {
      mthis.emptyPrescriptions();
    });
    $('#pdfViewerModal').on('hidden.bs.modal', function () {
      this.pdfUrl = { fileName: '', url: '' };
    });
  }
  emptyPrescriptions() {
    this.prescription = {
      id: '',
      prescriptionName: '',
      patientName: '',
      age: '',
      email: '',
      createdUser: '',
      isPrivate: false,
      medicineList: [{
        id: 1,
        name: '',
        quantity: ''
      }],
      address: {
        street: '',
        state: 'Tamil Nadu',
        pincode: ''
      },
      report: {
        fileName: '',
        url: ''
      },
      count: 1
    };
    this.prescription.email = this.localData.email;
    this.prescription.createdUser = this.localData.name;

  }
  getAllPrescriptions() {
    this.service.getAllPrescriptions().subscribe(data => {
      this.prescriptionList = data;
      $('.hide-div').attr('hidden', false);
      $('#spinner-img').attr('hidden', true);
    });
  }
  getAllPrescriptionsByEmailId() {
    this.service.getAllPrescriptionsByEmailId(this.localData.email).subscribe((data) => {
      this.prescriptionList = data;
      console.log(this.prescriptionList);
      $('.hide-div').attr('hidden', false);
      $('#spinner-img').attr('hidden', true);
    });
  }

  openNewPrescription() {
    $('#newPrescriptionModal').modal('show');
  }
  openPdf(prescription) {
    this.pdfUrl = { fileName: prescription.report.fileName, url: prescription.report.url };
    $('#pdfViewerModal').modal('show');
  }

  addNewMedicine() {
    this.prescription.medicineList.push({
      id: this.prescription.medicineList[this.prescription.medicineList.length - 1].id + 1,
      name: '',
      quantity: ''
    });
  }

  removeMedicine(i) {
    this.prescription.medicineList.splice(i, 1);
  }

  numericOnly(event) {
    const patt = /^([0-9])$/;
    return patt.test(event.key);
  }

  changeIsPrivate(e) {
    this.prescription.isPrivate = e.target.checked;
  }

  newPrescription() {
    console.log(this.prescription);
    this.service.createPrescription(this.prescription).subscribe((data) => {
      console.log(data);
      if (data['error'] === undefined) {
        this.notyfService.success('New Prescription Created');
        this.prescriptionList.push(Object.assign({}, data));
        this.prescriptionList = Object.assign([], this.prescriptionList);
        console.log(this.prescriptionList);
      } else {
        this.notyfService.error(data['error']);
      }
    });
  }
  toggleEditPrescriptionModal(data) {
    $('#editPrescriptionModal').modal('show');
    console.log(data);
    this.prescription = Object.assign({}, data);
  }
  toggleAccessModal(prescription) {
    if (this.localData && this.localData.type === 'doctor') {
      $('#requestAccessModal').modal('show');
      this.activePrescription = prescription;
    }
  }
  requestAccess() {
    console.log(this.activePrescription);
    this.service.requestAccess(this.activePrescription).subscribe(data => {
      console.log(data, 'Requested');
      data['type'] === 'error' ? this.notyfService.error(data['msg']) :
        this.notyfService.success(data['msg']);
    });
    this.activePrescription = {};
  }
  editPrescription() {
    this.service.updatePrescription(this.prescription).subscribe(data => {
      const index = _.findIndex(this.prescriptionList, { id: data['id'] });
      this.prescriptionList.splice(index, 1, data);
    });
  }
  toggleDeleteModal(prescription) {
    $('#deletePrescriptionModal').modal('show');
    this.activePrescription = prescription;
  }
  deletePrescription() {
    this.service.deletePrescription(this.activePrescription.id).subscribe(data => {
      const index = _.findIndex(this.prescriptionList, { id: data.substring(7, data.length) });
      this.prescriptionList.splice(index, 1);
      this.prescriptionList = Object.assign([], this.prescriptionList);
      console.log(index, data.substring(7, data.length), this.prescriptionList);
    });
  }

  onFileChange(event) {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (fileEvent: any) => {
      this.prescription.report.fileName = event.target.files[0].name;
      this.prescription.report.url = fileEvent.target.result;
      console.log(this.prescription.report);
    };
  }
  addToCart(prescription) {
    if (_.find(this.prescriptionInCart, { id: prescription.id }) === undefined) {
      this.prescriptionInCart.push(Object.assign({}, prescription));
      this.prescriptionInCart = Object.assign([], this.prescriptionInCart);
    }
    console.log(this.prescriptionInCart);
    // this.helperService.prescriptionInCart(this.prescriptionInCart);
    this.helperService.setPrescription(this.prescriptionInCart);
  }
  getPresence(prescription) {
    if (_.find(this.prescriptionInCart, { id: prescription.id }) === undefined) {
      return false;
    }
    return true;
  }

}
