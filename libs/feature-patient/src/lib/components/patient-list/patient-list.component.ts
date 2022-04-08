import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PatientModel } from '../../models';

@Component({
  selector: 'hhax-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientListComponent {
  @Input() public patients!: PatientModel[] | null;

  @Input() public total!: number | null;
}
