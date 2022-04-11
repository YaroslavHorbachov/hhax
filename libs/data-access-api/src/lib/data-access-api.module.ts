import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AgifyClientService, PatientClientService } from './services';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [PatientClientService, AgifyClientService],
})
export class DataAccessApiModule {}
