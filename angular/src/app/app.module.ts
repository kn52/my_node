import { NgModule } from '@angular/core';
import * as _app from './routes/app_routes';
@NgModule({
  declarations: _app.app_declarations,
  imports: _app.app_imports,
  providers: _app.app_providers,
  bootstrap: _app.app_bootstrap
})

export class AppModule {}
