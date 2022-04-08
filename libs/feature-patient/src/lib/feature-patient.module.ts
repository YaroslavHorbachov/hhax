import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataAccessApiModule } from '@hhax/data-access-api';
import { PatientListComponent, PatientPageComponent, PatientSearchComponent } from './components';
import { FeaturePatientRoutingModule } from './feature-patient-routing.module';
import { PatientService } from './services';

@NgModule({
  imports: [CommonModule, FeaturePatientRoutingModule, DataAccessApiModule],
  declarations: [PatientPageComponent, PatientListComponent, PatientSearchComponent],
  providers: [PatientService],
})
export class FeaturePatientModule {}
