import { Injectable } from '@angular/core';
import { Carrier } from 'src/app/models/carrier';

@Injectable({
  providedIn: 'root'
})

export class CarrierIntegrationService{

  carrier= new Carrier;
  
  getCarrierModel(): Carrier{
    return this.carrier;
  }
}
