import { TestBed } from '@angular/core/testing';
import { DataAccessApiModule } from '@hhax/data-access-api';
import { mockEnvProvider } from '@hhax/util-testing';
import { PatientService } from './patient.service';

describe('PatientService', () => {
  let service: PatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [DataAccessApiModule], providers: [PatientService, mockEnvProvider] });
    service = TestBed.inject(PatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
