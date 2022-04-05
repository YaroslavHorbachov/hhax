import { ComponentFixture, TestBed } from '@angular/core/testing';
import { envMockProvider } from '@hhax/util-testing';
import { UiComponentsModule } from '../ui-components.module';
import { ContainerComponent } from './container.component';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiComponentsModule],
      providers: [envMockProvider],
      declarations: [ContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
