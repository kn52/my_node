import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as _ngrts from './routes/ng_routes';

const routes: Routes = _ngrts.ng_routes;
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routing_components = _ngrts.ng_routing_components;