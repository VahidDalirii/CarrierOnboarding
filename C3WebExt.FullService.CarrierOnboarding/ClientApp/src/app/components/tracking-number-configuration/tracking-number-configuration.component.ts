import { Component, OnChanges } from '@angular/core';
import { Carrier } from 'src/app/models/carrier';
import { CarrierIntegrationService } from 'src/app/services/carrier-integration-service.service';

@Component({
  selector: 'app-tracking-number',
  templateUrl: './tracking-number-configuration.component.html',
  styleUrls: ['./tracking-number-configuration.component.scss']
})

export class TrackingNumberConfiguration {

  constructor(private carrier: CarrierIntegrationService) { }

  _carrier: Carrier;
  selectedSituation: "oneParcel";
  oneParcelText: string;
  multiParcelText: string;
  ssccParcelText: string;

  ngOnInit() {
    this._carrier = this.carrier.getCarrierModel();
    console.log(this.carrier.getCarrierModel());
    console.log(this.selectedSituation);

    /* if (this._carrier.trackinNumberConfigutration === null)
      this.selectedSituation = "oneParcel"; */
    /* else
      this.selectedSituation = this._carrier.trackinNumberConfigutration.situation */
  }

  /* ngOnChanges(){
    this._carrier.trackinNumberConfigutration.situation = this.selectedSituation;
    this._carrier.trackinNumberConfigutration.format = this.getFormatValue();
  } */

  getFormatValue() {
    let formatValue = this.oneParcelText == null
      ? this.multiParcelText == null ?
        this.ssccParcelText == null ? "No format" : this.ssccParcelText
        : this.multiParcelText
      : this.oneParcelText;
    this._carrier.trackinNumberConfigutration.format = formatValue;
  }

  resetTextbox() {
    this.oneParcelText = null;
    this.multiParcelText = null;
    this.ssccParcelText = null;
  }

  /* bindData() {
    this._carrier.trackinNumberConfigutration.situation = this.selectedSituation;
    this.getFormatValue();
  } */
}
