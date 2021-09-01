import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { TamaNavbarComponent } from './components/navbar/navbar.component';
import { TamaFooterComponent } from './components/footer/footer.component';
import { TamaWigDetailComponent } from './components/wig-detail/wig-detail.component';
import { TamaWigElementComponent } from './components/wig-element/wig-element.component';
import { TamaWigCatalogComponent } from './components/wig-catalog/wig-catalog.component';
import { TamaWelcomeModalComponent } from './components/modals/welcome-modal/welcome-modal.component';
import { TamaCarouselComponent } from './components/carousel/carousel.component';

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
  TamaWigCatalogComponent,
  TamaCarouselComponent
];

const PAGES = [
  TamaHomeComponent,
  TamaContactMeComponent,
  TamaPaymentMethodsComponent,
  TamaCatalogComponent,
];

const MODAL = [ 
  TamaWelcomeModalComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PAGES,
    ...MODAL
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
