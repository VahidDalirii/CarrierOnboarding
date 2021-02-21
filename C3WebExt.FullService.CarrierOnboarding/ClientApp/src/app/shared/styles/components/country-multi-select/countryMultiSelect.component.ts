import { Country } from './../../../../models/carrier';
import { Carrier } from 'src/app/models/carrier';
import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { CarrierIntegrationService } from "src/app/services/carrier-integration-service.service";

@Component({
  selector: "app-country-multi-select",
  templateUrl: "country-multi-select.component.html",
  styleUrls: ["country-multi-select.component.scss"],
})


export class CountryMultiSelectComponent implements OnInit {

  @Input()
  public set serviceTypeCountries(serviceTypeCountries: any) {
    this._serviceTypeCountries = serviceTypeCountries;
  }

  constructor(private carrier: CarrierIntegrationService) { }

  _carrier: Carrier;
  dropdownList = [];
  selectedItems: Country[];
  dropdownSettings = {};
  _serviceTypeCountries: any;
  serviceCountries: Country[];

  ngOnInit() {
    this._carrier = this.carrier.getCarrierModel();

    this.dropdownList = [
      { id: 1, itemName: "India" },
      { id: 2, itemName: "Singapore" },
      { id: 3, itemName: "Australia" },
      { id: 4, itemName: "Canada" },
      { id: 5, itemName: "South Korea" },
      { id: 6, itemName: "Germany" },
      { id: 7, itemName: "France" },
      { id: 8, itemName: "Russia" },
      { id: 9, itemName: "Italy" },
      { id: 10, itemName: "Sweden" },
    ];

    if (this._serviceTypeCountries=="operation") {
      this.selectedItems = this._carrier.operationCountries;
    }
    else if (this._serviceTypeCountries=="service") {
      this.selectedItems = this._carrier.serviceCountries;
    }
    else if (this._serviceTypeCountries=="serviceAttribute") {
      this.selectedItems = this._carrier.serviceAttributeCountries;
    }
    else if (this._serviceTypeCountries=="document") {
      this.selectedItems = this._carrier.documentCountries;
    }

    this.dropdownSettings = {
      singleSelection: false,
      text: "Select Countries",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      enableSearchFilter: true,
      classes: "myclass custom-class",
    };
  }
  onItemSelect(item: any) {
    this.updateContriesList();
  }
  OnItemDeSelect(item: any) {
    this.updateContriesList();
  }
  onSelectAll(items: any) {
    this.updateContriesList();
  }
  onDeSelectAll(items: any) {
    this.updateContriesList();
  }

  updateContriesList() {
    if (this._serviceTypeCountries == "operation") {
      this._carrier.operationCountries = [];
      this._carrier.operationCountries = this.selectedItems;
    }
    else if (this._serviceTypeCountries == "service") {
      this._carrier.serviceCountries = [];
      this._carrier.serviceCountries = this.selectedItems;
      this.serviceCountries = this.selectedItems;
    }
    else if (this._serviceTypeCountries == "serviceAttribute") {
      this._carrier.serviceAttributeCountries = [];
      this._carrier.serviceAttributeCountries = this.selectedItems;
    }
    else if (this._serviceTypeCountries == "document") {
      this._carrier.documentCountries = [];
      this._carrier.documentCountries = this.selectedItems;
    }

  }
}
