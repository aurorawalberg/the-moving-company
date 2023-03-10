import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [MsalGuard],
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [MsalGuard],
  },
  {
    path: '',
    component: HomeComponent,
  },
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: !isIframe ? 'enabled' : 'disabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
