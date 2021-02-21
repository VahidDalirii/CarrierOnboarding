import { componentFactoryName } from '@angular/compiler';
import {Component} from '@angular/core';
import { Carrier } from 'src/app/models/carrier';
import { CarrierIntegrationService } from 'src/app/services/carrier-integration-service.service';

@Component({
  selector: 'app-document',
  templateUrl: 'document.component.html',
  styleUrls: ['document.component.scss']
})

export class Document{
  constructor(private carrier: CarrierIntegrationService) { }

  _carrier: Carrier;
  serviceTypeCountries = "document";

  ngOnInit(){
    this._carrier= this.carrier.getCarrierModel();
    console.log( this.carrier.getCarrierModel());
  }

}
