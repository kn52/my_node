import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routing_components } from './app-routing.module';
import { AppComponent } from './app.component';
import { ByeComponent } from './bye/bye.component';
@NgModule({
  declarations: [
    AppComponent,
    routing_components,
    ByeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
