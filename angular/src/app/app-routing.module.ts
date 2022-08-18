import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ng_routes, ng_routing_components } from './routes/ng_routes';

const routes: Routes = ng_routes;
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routing_components = ng_routing_components;