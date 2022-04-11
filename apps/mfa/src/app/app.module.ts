import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiComponentsModule } from '@hhax/ui-components';
import { PatientAuthInterceptor } from '@hhax/util-auth';
import { ENV } from '@hhax/util-env';
import { UtilNgrxModule } from '@hhax/util-ngrx';
import { UtilSharedModule } from '@hhax/util-shared';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UtilNgrxModule, UiComponentsModule, UtilSharedModule, AppRoutingModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: PatientAuthInterceptor,
    },
    {
      provide: ENV,
      useValue: environment,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
