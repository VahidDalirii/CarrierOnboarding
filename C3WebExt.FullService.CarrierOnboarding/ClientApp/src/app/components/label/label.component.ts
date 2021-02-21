import { Component } from "@angular/core";
import { Carrier } from "src/app/models/carrier";
import { CarrierIntegrationService } from "src/app/services/carrier-integration-service.service";

@Component({
  selector:'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})

export class Label{
  constructor(private carrier: CarrierIntegrationService) { }

  _carrier: Carrier;

  ngOnInit(){
    this._carrier= this.carrier.getCarrierModel();
    console.log( this.carrier.getCarrierModel());
  }

}
