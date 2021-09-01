import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';

// components
import { TamaHomeComponent } from './pages/home/home.component';
import { TamaCatalogComponent } from './pages/catalog/catalog.component';
import { TamaContactMeComponent } from './pages/contact-me/contact-me.component';
import { TamaPaymentMethodsComponent } from './pages/payment-methods/payment-methods.component';

const routes: Routes = [
  {
    path: '',
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
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[
    { 
      provide: LocationStrategy, 
      useClass: HashLocationStrategy 
    }
  ]
})
export class AppRoutingModule { }
