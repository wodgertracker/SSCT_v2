import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { environment } from '../environments/environment';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { RegisterComponent } from './register/register.component';
import { LineChartComponent } from './line-chart/line-chart.component';
// import { RegisterComponent } from './register/register.component'; // Angular CLI environment

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // LoginComponent,
    RegisterComponent,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MatProgressSpinnerModule

   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
