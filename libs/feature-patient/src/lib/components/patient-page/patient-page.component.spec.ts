import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataAccessApiModule } from '@hhax/data-access-api';
import { mockEnvProvider } from '@hhax/util-testing';
import { PatientService } from '../../services';
import { PatientPageComponent } from './patient-page.component';

describe('PatientPageComponent', () => {
  let component: PatientPageComponent;
  let fixture: ComponentFixture<PatientPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataAccessApiModule, HttpClientTestingModule],
      declarations: [PatientPageComponent],
      providers: [PatientService, mockEnvProvider],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
