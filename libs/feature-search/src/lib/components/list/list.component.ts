import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AgifyRecord } from '@hhax/data-access-api';

@Component({
  selector: 'hhax-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() public data!: AgifyRecord[] | null;

  @Output() public readonly selectRecord = new EventEmitter<number>();

  public onSelect(id: number): void {
    this.selectRecord.next(id);
  }
}
