import { CountryMultiSelectComponent } from './shared/styles/components/country-multi-select/countryMultiSelect.component';
import { CarrierIntegrationService } from 'src/app/services/carrier-integration-service.service';
import { Label } from './components/label/label.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'ng-sidebar';
import { AngularStickyThingsModule } from '@w11k/angular-sticky-things';
import {
  NgdsAutocompleteSearchMultiModule,
  NgdsFilterHeaderModule,
  NgdsLayoutModule,
  NgdsReactiveInputModule,
  NgdsToastsModule,
} from '@centiro/ng-design-system';

import { AngularIdentityServerModule, AuthInterceptor } from '@centiro/ng-identity-server';

import { AppComponent } from './app.component';
import { BasicCarrierComponent } from './components/basic-carrier-information/basic-carrier-information.component';
import { CarrierServices } from './components/carrier-services/carrier-services.component';
import { AvailableDocuments } from './components/available-documents/available-documents.component';
import { CarrierLabelConfiguration } from './components/carrier-label-configuration/carrier-label-configuration.component';
import { TrackingNumberConfiguration } from './components/tracking-number-configuration/tracking-number-configuration.component';
import { CustomerSetup } from './components/customer-setup/customer-setup.component';
import { CarrierSetupOverview } from './components/carrier-setup-overview/carrier-setup-overview.component';
import { CarrierSetupExport } from './components/carrier-setup-export/carrier-setup-export.component'
import { Service } from './components/service/service.component';
import { ServiceAttribute } from './components/service-attribute/service-attribute.component';
import { AppRoutingModule } from './app-routing.module';
import { Document } from './components/document/document.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

@NgModule({
  declarations: [AppComponent,
    HomeComponent,
    BasicCarrierComponent,
    CarrierServices,
    AvailableDocuments,
    CarrierLabelConfiguration,
    TrackingNumberConfiguration,
    CustomerSetup,
    CarrierSetupOverview,
    CarrierSetupExport,
    Service,
    ServiceAttribute,
    Document,
    Label,
    CountryMultiSelectComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    AngularMultiSelectModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
    ]),
    AppRoutingModule,
    AngularIdentityServerModule,
    SidebarModule.forRoot(),
    AngularStickyThingsModule,
    ReactiveFormsModule,
    NgdsLayoutModule,
    NgdsFilterHeaderModule,
    NgdsToastsModule,
    NgdsAutocompleteSearchMultiModule,
    NgdsReactiveInputModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, CarrierIntegrationService],
  bootstrap: [AppComponent],
})
export class AppModule { }
