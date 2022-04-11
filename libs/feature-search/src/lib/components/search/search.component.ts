import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DEFAULT_SEARCH_MAX_LENGTH, DEFAULT_SEARCH_MIN_LENGTH } from '../../constants';

@Component({
  selector: 'hhax-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  constructor(private readonly formBuilder: FormBuilder) {}

  @Output() public readonly search = new EventEmitter<string>();

  public readonly form = this.formBuilder.group({
    name: [
      null,
      [
        Validators.required,
        Validators.minLength(DEFAULT_SEARCH_MIN_LENGTH),
        Validators.maxLength(DEFAULT_SEARCH_MAX_LENGTH),
      ],
    ],
  });

  public onSubmit(): void {
    this.search.emit(this.nameControl.value);
  }

  public get nameControl(): FormControl {
    return this.form.get('name') as FormControl;
  }
}
