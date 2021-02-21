import {Component} from '@angular/core';
import { Carrier } from 'src/app/models/carrier';
import { CarrierIntegrationService } from 'src/app/services/carrier-integration-service.service';

@Component({
  selector: 'app-customer-setup',
  templateUrl: './customer-setup.component.html',
  styleUrls: ['./customer-setup.component.scss']
})

export class CustomerSetup{
  constructor(private carrier: CarrierIntegrationService) { }

  _carrier: Carrier;

  ngOnInit(){
    this._carrier= this.carrier.getCarrierModel();
    console.log( this.carrier.getCarrierModel());
  }

}
