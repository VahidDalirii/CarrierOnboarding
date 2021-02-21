import { ServiceModel } from './../../models/carrier';
import { Component, Input } from "@angular/core";
import { Carrier } from "src/app/models/carrier";
import { CarrierIntegrationService } from "src/app/services/carrier-integration-service.service";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})

export class Service{
  @Input()
  public set selectedService(selectedService: any) {
    this._selectedService = selectedService;
  }

  constructor(private carrier: CarrierIntegrationService) { }

  _carrier: Carrier;
  _selectedService: ServiceModel;
  serviceTypeCountries = "service";

  

  ngOnInit(){
    this._carrier= this.carrier.getCarrierModel();
    console.log( this.carrier.getCarrierModel());
  }

}
