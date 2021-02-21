
import { Country, ServiceAttributeModel } from "../carrier";

export interface IServiceOverviewRow {
  id: number;
  name: string;
  nameInC3web: string;
  codeInSpec: string;
  nameOnLabel: string;
  routingComponent: string;
  serviceCountries: Country[];
  serviceAttributes: ServiceAttributeModel[];
  ratingComponent: string;
}
