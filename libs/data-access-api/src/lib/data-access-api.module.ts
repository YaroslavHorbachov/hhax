import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PatientClientService } from './services';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [PatientClientService],
})
export class DataAccessApiModule {}
