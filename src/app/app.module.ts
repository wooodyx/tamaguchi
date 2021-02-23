import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { TamaHomeComponent } from './pages/home/home.component';
import { TamaNavbarComponent } from './components/navbar/navbar.component';
import { TamaWigDetailComponent } from './components/wig-detail/wig-detail.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';

const COMPONENTS = [
  AppComponent,
  TamaHomeComponent,
  TamaNavbarComponent,
  TamaWigDetailComponent,  
  ContactMeComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    ...COMPONENTS
  ]
})
export class AppModule { }
