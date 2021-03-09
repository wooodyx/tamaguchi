import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { TamaHomeComponent } from './pages/home/home.component';
import { TamaNavbarComponent } from './components/navbar/navbar.component';
import { TamaFooterComponent } from './components/footer/footer.component';
import { TamaWigDetailComponent } from './components/wig-detail/wig-detail.component';
import { TamaContactMeComponent } from './pages/contact-me/contact-me.component';
import { TamaPaymentMethodsComponent } from './pages/payment-methods/payment-methods.component';
import { TamaCatalogComponent } from './pages/catalog/catalog.component';
import { TamaWigElementComponent } from './components/wig-element/wig-element.component';

const COMPONENTS = [
  AppComponent,
  TamaHomeComponent,
  TamaNavbarComponent,
  TamaFooterComponent,
  TamaWigDetailComponent,  
  TamaContactMeComponent,
  TamaPaymentMethodsComponent,
  TamaCatalogComponent,
  TamaWigElementComponent,
]

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
