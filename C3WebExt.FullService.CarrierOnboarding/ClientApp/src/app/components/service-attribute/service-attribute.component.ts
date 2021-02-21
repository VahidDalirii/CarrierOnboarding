import {Component} from '@angular/core'
import { Carrier } from 'src/app/models/carrier';
import { CarrierIntegrationService } from 'src/app/services/carrier-integration-service.service';

@Component({
  selector: 'app-service-attribute',
  templateUrl : 'service-attribute.component.html',
  styleUrls : ['service-attribute.component.scss']
})

export class ServiceAttribute{
  constructor(private carrier: CarrierIntegrationService) { }

  _carrier: Carrier;
  serviceTypeCountries = "serviceAttribute";

  ngOnInit(){
    this._carrier= this.carrier.getCarrierModel();
    console.log( this.carrier.getCarrierModel());
  }

}
