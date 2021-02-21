import {Component} from '@angular/core';
import { Carrier } from 'src/app/models/carrier';
import { CarrierIntegrationService } from 'src/app/services/carrier-integration-service.service';

@Component({
  selector: 'app-overview',
  templateUrl: './carrier-setup-overview.component.html',
  styleUrls: ['./carrier-setup-overview.component.scss']
})

export class CarrierSetupOverview{
  constructor(private carrier: CarrierIntegrationService) { }

  _carrier: Carrier;

  ngOnInit(){
    this._carrier= this.carrier.getCarrierModel();
    console.log( this.carrier.getCarrierModel());
  }
  statuses= ['Ready for export to test','Ready for export to production'];
}
