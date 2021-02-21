import { ServiceModel } from './../../models/carrier';
import { Component, Input } from "@angular/core";
import { Carrier} from "src/app/models/carrier";
import { ServiceOverviewRowModel } from "src/app/models/classes/ServiceOverviewRowModel.model";
import { CarrierIntegrationService } from "src/app/services/carrier-integration-service.service";

@Component({
  selector: 'app-services',
  templateUrl: './carrier-services.component.html',
  styleUrls: ['./carrier-services.component.scss']
})

export class CarrierServices {
  @Input() model:ServiceOverviewRowModel;

  constructor(private carrier: CarrierIntegrationService) { }

  _carrier: Carrier;
  selectedService : ServiceModel ;

  ngOnInit() {
    this._carrier = this.carrier.getCarrierModel();
    console.log(this.carrier.getCarrierModel());
  }



  addNewService() {
    let nextId = 1;
    if (this._carrier.services[0] != null) {
      nextId =this.getNextId(this._carrier.services);
    }

    this._carrier.services.push({
      id: nextId,
      name: "Service " + nextId,
      nameInC3web: "",
      codeInSpec: "",
      nameOnLabel: "",
      routingComponent: "",
      serviceCountries: [],
      serviceAttributes: [],
      ratingComponent: "",
    });
  }

  addNewServiceAttribute() {
    let nextId = 1;
    if (this._carrier.serviceAttributes[0] != null) {
      nextId =this.getNextId(this._carrier.serviceAttributes);
    }
    this._carrier.serviceAttributes.push({
      id: nextId,
      name: "Service attribute " + nextId,
      codeInIntegration: "",
      type: "",
      nameOnLabel: "",
      serviceCountries: [],
      serviceCompatibility: [],
      serviceAttributeValues: []
    });
  }

  getNextId(T): number {
    let lastId = T.length -1;
    let id = T[lastId].id;

    return id+1;
  }

  deleteService(id: number) {
    for (let i = 0; i < this._carrier.services.length; i++) {
      if (this._carrier.services[i].id === id) {
        this._carrier.services.splice(i, 1);
        return;
      }
    };
  }

  deleteServiceAttribute(id: number){
    for (let i = 0; i < this._carrier.serviceAttributes.length; i++) {
      if (this._carrier.serviceAttributes[i].id === id) {
        this._carrier.serviceAttributes.splice(i, 1);
        return;
      }
    };
  }

  returnSelectedService(id: number):ServiceModel{
    for (let i = 0; i < this._carrier.services.length; i++) {
      if(id===this._carrier.services[i].id)
      {
        this.selectedService=this._carrier.services[i];
        return this.selectedService;
      }

    }
  }

  toggleDetails(rowClicked:number){
    this.model.serviceOverviewRows[rowClicked].showDetails = !this.model.serviceOverviewRows[rowClicked].showDetails;
  }

}
