import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { environment } from '../environments/environment';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { RegisterComponent } from './register/register.component';
import { LinechartComponent} from './linechart/linechart.component';
// import { RegisterComponent } from './register/register.component'; // Angular CLI environment

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // LoginComponent,
    RegisterComponent,
    LinechartComponent,
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
