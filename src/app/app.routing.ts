import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { OrdersComponent } from './orders/orders.component';
import { RegisterComponent } from './register/register.component';
import { TransactionhistoryComponent } from './transactionhistory/transactionhistory.component';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    {path:'register', component:RegisterComponent},
    {path:'transactionhistory', component:TransactionhistoryComponent},
    {path:'orders',component:OrdersComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);