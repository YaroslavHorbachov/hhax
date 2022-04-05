import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiComponentsModule } from '@hhax/ui-components';
import { ENV_TOKEN } from '@hhax/util-env';
import { UtilNgrxModule } from '@hhax/util-ngrx';
import { UtilSharedModule } from '@hhax/util-shared';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UtilNgrxModule, UiComponentsModule, UtilSharedModule],
  providers: [
    {
      provide: ENV_TOKEN,
      useValue: environment,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
