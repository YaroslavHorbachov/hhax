import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Env, ENV_TOKEN } from '@hhax/util-env';

@Component({
  selector: 'hhax-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerComponent implements OnInit {
  constructor(@Inject(ENV_TOKEN) private readonly env: Env) {}

  public ngOnInit(): void {
    console.log(this.env);
  }
}
