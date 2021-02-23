import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TamaRoutingModule } from './tama-routing.module';

// COMPONENTS
import { TamaComponent } from './tama.component';
import { TamaHomeComponent } from './pages/home/home.component';
import { TamaNavbarComponent } from './components/navbar/navbar.component';
import { TamaWigDetailComponent } from './components/wig-detail/wig-detail.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';

const COMPONENTS = [
  TamaComponent,
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
    TamaRoutingModule
  ],
  providers: [],
  bootstrap: [
    ...COMPONENTS
  ]
})
export class TamaModule { }
