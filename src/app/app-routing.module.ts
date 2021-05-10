import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { register } from 'ethers/utils/wordlist';
// import { LoginComponent } from '../app/login/login.component';

import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { NotFoundPageComponent } from './core/containers/not-found-page.component';



import * as guards from './core/guards';
import { LinechartComponent, LoginComponent, RegisterComponent } from './market-place/containers';

export const routes: Routes = [
  { path: '', component:RegisterComponent, 

},
  {
    path:'login',
    component:LoginComponent,
  },
 {
  path:'register',
  component:RegisterComponent,
 },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path:'linechart',
    component:LinechartComponent,
  },

  {
    path: 'market-place',
    // here we use the TypeScript Dynamic Imports in Angular 8
    loadChildren: () => import('./market-place/market-place.module').then(mod => mod.MarketPlaceModule),
    canLoad: [guards.MetaMaskConnectGuard, guards.IpfsConnectGuard],
  },
  { path: '**', component: NotFoundPageComponent }, 

];

// to be able to reload on the same route
// based on https://github.com/angular/angular/issues/13831
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true,  onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}