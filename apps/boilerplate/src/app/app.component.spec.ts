import { TestBed } from '@angular/core/testing';
import { UiComponentsModule } from '@hhax/ui-components';
import { mockEnvProvider } from '@hhax/util-testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiComponentsModule],
      providers: [mockEnvProvider],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });
});
