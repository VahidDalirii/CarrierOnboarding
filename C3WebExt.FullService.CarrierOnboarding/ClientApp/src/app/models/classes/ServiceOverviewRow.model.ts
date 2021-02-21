import { Country, ServiceAttributeModel } from "../carrier";
import { IServiceOverviewRow } from "../interfaces/IserviceOverviewRow.interface";

export class ServiceOverwiewRow implements IServiceOverviewRow{
  id: number;
  name: string;
  nameInC3web: string;
  codeInSpec: string;
  nameOnLabel: string;
  routingComponent: string;
  serviceCountries: Country[];
  serviceAttributes: ServiceAttributeModel[];
  ratingComponent: string;

  //GUI-stuff
  checked: boolean;
  showDetails: boolean;

  constructor(row?: IServiceOverviewRow){
    if(row){
      this.id=row.id;
      this.name=row.name;
      this.nameInC3web=row.nameInC3web;
      this.codeInSpec=row.codeInSpec;
      this.nameOnLabel=row.nameOnLabel;
      this.routingComponent=row.routingComponent;
      this.serviceCountries=row.serviceCountries;
      this.serviceAttributes=row.serviceAttributes;
      this.ratingComponent=row.ratingComponent;

      //GUI
      this.checked = false;
      this.showDetails = false;
    }
  }
}
