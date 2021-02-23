import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TamaHomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: TamaHomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
