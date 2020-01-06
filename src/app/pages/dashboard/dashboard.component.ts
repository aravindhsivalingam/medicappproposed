import { Component, OnInit } from '@angular/core';
import { defaultOptions } from 'ngx-extended-pdf-viewer';
import { AppService } from '../../services/app-service';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper-service';
declare var $: any;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private service: AppService, private router: Router, private helperService: HelperService) {
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
    }
  };
  public pdfUrl = {
    fileName: '',
    url: ''
  };
  public prescriptionList: any;
  public activePrescription: any;
  ngOnInit() {
    this.localData = JSON.parse(localStorage.getItem('loggedInUser'));
    if (this.localData !== null) {
      this.prescription.email = this.localData.email;
      this.prescription.createdUser = this.localData.name;
    }
    console.log(this.localData);
    this.initData();
    this.initModal();
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
    setTimeout(() => {
      $('[data-toggle="tooltip"]').tooltip();
    }, 1000);
  }
  initModal() {
    const mthis = this;
    $('#editPrescriptionModal').on('hidden.bs.modal', function () {
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
      }
    };
    this.prescription.email = this.localData.email;
    this.prescription.createdUser = this.localData.name;

  }
  getAllPrescriptions() {
    this.service.getAllPrescriptions().subscribe(data => {
      this.prescriptionList = data;
    });
  }
  getAllPrescriptionsByEmailId() {
    this.service.getAllPrescriptionsByEmailId(this.localData.email).subscribe((data) => {
      this.prescriptionList = data;
      console.log(this.prescriptionList);
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
      this.prescriptionList.push(data);
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
      console.log('Requested');
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
    console.log(prescription);
    this.helperService.prescriptionInCart(prescription);
  }

}
