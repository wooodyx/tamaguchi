import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { TamaHomeComponent } from './pages/home/home.component';
import { TamaCatalogComponent } from './pages/catalog/catalog.component';
import { TamaContactMeComponent } from './pages/contact-me/contact-me.component';
import { TamaPaymentMethodsComponent } from './pages/payment-methods/payment-methods.component';

const routes: Routes = [
  {
    path: 'home',
    component: TamaHomeComponent
  },
  {
    path: 'catalog',
    component: TamaCatalogComponent
  },
  {
    path: 'payment-method',
    component: TamaPaymentMethodsComponent
  },
  {
    path: 'contact-me',
    component: TamaContactMeComponent
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
