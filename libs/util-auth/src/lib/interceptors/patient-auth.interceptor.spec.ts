import { TestBed } from '@angular/core/testing';
import { mockEnvProvider } from '@hhax/util-testing';
import { PatientAuthInterceptor } from './patient-auth.interceptor';

describe('PatientAuthInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientAuthInterceptor, mockEnvProvider],
    });
  });

  it('should be created', () => {
    const interceptor: PatientAuthInterceptor = TestBed.inject(PatientAuthInterceptor);

    expect(interceptor).toBeTruthy();
  });
});
