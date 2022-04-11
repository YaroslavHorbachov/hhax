import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AgifyRecord } from '@hhax/data-access-api';

@Component({
  selector: 'hhax-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent {
  @Input() public data!: AgifyRecord;
}
