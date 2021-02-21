import { Component, Input } from "@angular/core";
import { Carrier } from "src/app/models/carrier";
import { CarrierIntegrationService } from "src/app/services/carrier-integration-service.service";

@Component({
  selector: 'app-carrier-label',
  templateUrl: './carrier-label-configuration.component.html',
  styleUrls: ['./carrier-label-configuration.component.scss']
})

export class CarrierLabelConfiguration{

  constructor(private carrier: CarrierIntegrationService) { }

  _carrier: Carrier;

  ngOnInit(){
    this._carrier= this.carrier.getCarrierModel();
    console.log( this.carrier.getCarrierModel());
  }

}
