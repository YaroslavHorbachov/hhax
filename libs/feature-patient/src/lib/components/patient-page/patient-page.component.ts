import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hhax-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientPageComponent {}
