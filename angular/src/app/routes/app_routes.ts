import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routing_components } from '../app-routing.module';
import { AppComponent } from '../app.component';

export const app_declarations = [
    AppComponent,
    routing_components
];

export const app_imports = [
    BrowserModule,
    AppRoutingModule
];

export const app_providers = []; 

export const app_bootstrap = [AppComponent];