import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { HttpClientModule } from '@angular/common/http';
import { GetCustomerServiceService } from './service/get-customer-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GetCustomerServiceService],
  bootstrap: [CustomerComponent]
})
export class AppModule { }
