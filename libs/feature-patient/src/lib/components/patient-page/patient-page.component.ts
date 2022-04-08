import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tap } from 'rxjs';
import { PatientService } from '../../services';

@Component({
  selector: 'hhax-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientPageComponent {
  constructor(private readonly patientService: PatientService) {}

  public readonly patients$ = this.patientService.patients$;

  public readonly isLoading$ = this.patientService.isLoading$.pipe(tap(console.log));

  public readonly total$ = this.patientService.total$;
}
