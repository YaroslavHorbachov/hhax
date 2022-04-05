import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollManagerDirectiveModule } from './directives';
import { RoutingModule } from './modules';

const modules = [CommonModule, HttpClientModule, BrowserAnimationsModule, RoutingModule];
const directives = [ScrollManagerDirectiveModule];

@NgModule({
  exports: [...modules, ...directives],
})
export class UtilSharedModule {}
