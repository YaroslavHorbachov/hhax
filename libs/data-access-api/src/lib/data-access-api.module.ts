import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CatClientService } from './services';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [CatClientService],
})
export class DataAccessApiModule {}
