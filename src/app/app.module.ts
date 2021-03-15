import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { TamaNavbarComponent } from './components/navbar/navbar.component';
import { TamaFooterComponent } from './components/footer/footer.component';
import { TamaWigDetailComponent } from './components/wig-detail/wig-detail.component';
import { TamaWigElementComponent } from './components/wig-element/wig-element.component';
import { TamaWigCatalogComponent } from './components/wig-catalog/wig-catalog.component';

// PAGES

import { TamaHomeComponent } from './pages/home/home.component';
import { TamaContactMeComponent } from './pages/contact-me/contact-me.component';
import { TamaPaymentMethodsComponent } from './pages/payment-methods/payment-methods.component';
import { TamaCatalogComponent } from './pages/catalog/catalog.component';

const COMPONENTS = [
  AppComponent,
  TamaNavbarComponent,
  TamaFooterComponent,
  TamaWigDetailComponent,
  TamaWigElementComponent,
  TamaWigCatalogComponent
];

const PAGES = [
  TamaHomeComponent,
  TamaContactMeComponent,
  TamaPaymentMethodsComponent,
  TamaCatalogComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PAGES
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
