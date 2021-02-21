import {Component} from '@angular/core';
import { Carrier } from 'src/app/models/carrier';
import { CarrierIntegrationService } from 'src/app/services/carrier-integration-service.service';

@Component({
  selector: 'app-export',
  templateUrl: './carrier-setup-export.component.html',
  styleUrls: ['./carrier-setup-export.component.scss']
})

export class CarrierSetupExport{

  constructor(private carrier: CarrierIntegrationService) { }

  _carrier: Carrier;

  ngOnInit(){
    this._carrier= this.carrier.getCarrierModel();
    console.log( this.carrier.getCarrierModel());
  }

}
