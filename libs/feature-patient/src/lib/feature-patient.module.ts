import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataAccessApiModule } from '@hhax/data-access-api';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientPageComponent } from './components/patient-page/patient-page.component';
import { PatientSearchComponent } from './components/patient-search/patient-search.component';

@NgModule({
  imports: [CommonModule, DataAccessApiModule],
  declarations: [PatientPageComponent, PatientListComponent, PatientSearchComponent],
})
export class FeaturePatientModule {}
