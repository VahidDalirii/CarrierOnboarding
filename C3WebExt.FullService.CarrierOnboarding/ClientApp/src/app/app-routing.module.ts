import { CarrierSetupExport } from './components/carrier-setup-export/carrier-setup-export.component';
import { CarrierSetupOverview } from './components/carrier-setup-overview/carrier-setup-overview.component';
import { CustomerSetup } from './components/customer-setup/customer-setup.component';
import { TrackingNumberConfiguration } from './components/tracking-number-configuration/tracking-number-configuration.component';
import { CarrierLabelConfiguration } from './components/carrier-label-configuration/carrier-label-configuration.component';
import { BasicCarrierComponent } from './components/basic-carrier-information/basic-carrier-information.component';
import { AvailableDocuments } from './components/available-documents/available-documents.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrierServices } from './components/carrier-services/carrier-services.component';




const routes: Routes = [
  { path: 'basicCarrierComponent', component: BasicCarrierComponent },
  { path: 'carrierServices', component: CarrierServices },
  { path: 'availableDocuments', component: AvailableDocuments },
  { path: 'carrierLabelConfiguration', component: CarrierLabelConfiguration },
  { path: 'trackingNumberConfiguration', component: TrackingNumberConfiguration },
  { path: 'customerSetup', component: CustomerSetup },
  { path: 'carrierSetupOverview', component: CarrierSetupOverview },
  { path: 'carrierSetupExport', component: CarrierSetupExport },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
