import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TamaHomeComponent } from './pages/home/home.component';
import { TamaComponent } from './tama.component';

const routes: Routes = [
  {
    path: '',
    component: TamaComponent,
    children: [
      {
        path: '',
        component: TamaHomeComponent,
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TamaRoutingModule { }
