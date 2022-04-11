import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Env, ENV } from '@hhax/util-env';

@Component({
  selector: 'hhax-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerComponent implements OnInit {
  constructor(@Inject(ENV) private readonly env: Env) {}

  public ngOnInit(): void {
    // Display different env values based on the started application
    console.log(this.env);
  }
}
