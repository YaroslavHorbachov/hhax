import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgifyClientService, PatientClientService } from './services';

@NgModule({
  imports: [CommonModule],
  providers: [PatientClientService, AgifyClientService],
})
export class DataAccessApiModule {}
