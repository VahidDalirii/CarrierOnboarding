import { Injectable } from "@angular/core";

@Injectable()

export class Carrier {
  constructor() {
  }
  public id: number;
  public codeCar: string = "";
  public carrierName: string = "";
  public address1?: string = "";
  public address2?: string = "";
  public address3?: string = "";
  public zipCode?: string = "";
  public city?: string = "";
  public isoCountry?: string = "";
  public reference?: string = "";
  public phone?: string = "";
  public fax?: string = "";
  public idEan?: string = "";
  public idEdi?: string = "";
  public idTerminal?: string = "";
  public useSscc: string = "";
  public useUniqueParcelId: string = "";
  public codeSty: string = "";
  public codeLty?: string = "";
  public formatString1?: string = "";
  public formatString2?: string = "";
  public formatString3?: string = "";
  public formatString4?: string = "";
  public formatString5?: string = "";
  public uniqueSenderFields?: string = "";
  public uniqueReveiverFields?: string = "";
  public language: string = "";
  public routing?: string = "";
  public shipmentBasedManifest?: string = "";
  public fileGeneration?: string = "";
  public endOfDayManifest?: string = "";
  public trackingUrl?: string = "";
  public TrackingUrlParcel?: string = "";
  public generalUrl_1?: string = "";
  public defaultOwner?: string = "";
  public type?: string = "";
  public version?: string = "";
  public sequenceLength?: string = "";
  public disclaimer?: string = "";
  public eula?: string = "";
  public multipleAccountNumber?: string = "";
  public ediType?: string = "";
  public services?: ServiceModel[] = [];
  public serviceAttributes?: ServiceAttributeModel[] = [];
  public trackinNumberConfigutration?: TrackingNumberConfigurationModel;

  public carrierSupportList: CarrierSupport[];
  public operationCountries: Country[];
  public serviceCountries: Country[];
  public serviceAttributeCountries: Country[];
  public documentCountries: Country[];
}

export class CarrierSupport {
  id: string;
  label: string;
  isChecked: boolean;
}

export class Country {
  id: number;
  itemName: string;
}

export class ServiceModel {
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

export class ServiceAttributeModel {
  id: number;
  name: string;
  codeInIntegration: string;
  type: string;
  nameOnLabel: string;
  serviceCountries: Country[];
  serviceCompatibility: ServiceModel[];
  serviceAttributeValues: ServiceAttributeValue[];
}

export class ServiceAttributeValue {
  id: number;
  serviceAttributeValue: string;
  specifies: string;
}

export class TrackingNumberConfigurationModel {
  situation: string;
  format: string;
  centiroSettings: CentiroSettings;
  otherSettings: string
}

export class CentiroSettings {
  canRotate: string;
  lenght: number;
}


