import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataProvider} from './market-place/services/fake-backend'

import { CoreModule } from './core/core.module';
import {FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { environment } from '../environments/environment';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { RegisterComponent } from './register/register.component';
// import { RegisterComponent } from './register/register.component'; // Angular CLI environment

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule

   

  ],
  providers: [
    DataProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
