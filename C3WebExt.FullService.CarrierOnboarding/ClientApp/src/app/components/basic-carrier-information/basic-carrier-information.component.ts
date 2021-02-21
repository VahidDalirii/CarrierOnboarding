import { CarrierIntegrationService } from './../../services/carrier-integration-service.service';
import { Component, OnInit } from '@angular/core';
import { Carrier } from 'src/app/models/carrier';

@Component({
  selector: 'app-basic-carrier-information',
  templateUrl: './basic-carrier-information.component.html',
  styleUrls: ['./basic-carrier-information.component.scss']
})

export class BasicCarrierComponent {

  constructor(private carrier: CarrierIntegrationService) { }

  selectedItemsList = [];
  checkedValues = [];
  showAddNewBtn: boolean = false;
  buttonName: any = 'Add New';
  newCarrierSupport: string;
  _carrier: Carrier;
  serviceTypeCountries = "operation";

  carrierSupportsDataList = [
    {
      id: '1',
      label: 'EDI',
      isChecked: false
    },
    {
      id: '2',
      label: 'Status',
      isChecked: false
    },
    {
      id: '3',
      label: 'Rating',
      isChecked: false
    },
    {
      id: '4',
      label: 'Leadtime',
      isChecked: false
    },
    {
      id: '5',
      label: 'Booking',
      isChecked: false
    },
    {
      id: '6',
      label: 'Invoice import ',
      isChecked: false
    }
  ]

  ngOnInit(): void {
    this._carrier = this.carrier.getCarrierModel();
    this.updateCarrierSupports();
  }

  updateCarrierSupports() {
    if (this._carrier.carrierSupportList == null)
      this._carrier.carrierSupportList = this.carrierSupportsDataList;
  }

  changeSelection() {
    this.fetchSelectedItems();
  }

  fetchSelectedItems() {
    this.selectedItemsList = this._carrier.carrierSupportList.filter((value, index) => {
      return value.isChecked
    });
  }

  autoGenerateCodeCar() {
    if (this._carrier.carrierName != "")
      this._carrier.codeCar = "std." + this._carrier.carrierName + ".com";
  }

  toggleButtonName() {
    this.showAddNewBtn = !this.showAddNewBtn;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.showAddNewBtn) {
      this.buttonName = "Add";
      this.newCarrierSupport = "";
    }
    else {
      if (this.newCarrierSupport.trim() != "")
        this.addNewSupport();
      this.buttonName = "Add new";
    }

  }

  addNewSupport() {
    let nextId: number = this.carrierSupportsDataList.length + 1;

    this._carrier.carrierSupportList.push({
      id: nextId.toString(),
      label: this.newCarrierSupport,
      isChecked: false
    });
  }
}



