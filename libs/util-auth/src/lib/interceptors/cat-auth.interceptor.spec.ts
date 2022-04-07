import { TestBed } from '@angular/core/testing';
import { envMockProvider } from '@hhax/util-testing';
import { CatAuthInterceptor } from './cat-auth.interceptor';

describe('CatAuthInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatAuthInterceptor, envMockProvider],
    });
  });

  it('should be created', () => {
    const interceptor: CatAuthInterceptor = TestBed.inject(CatAuthInterceptor);

    expect(interceptor).toBeTruthy();
  });
});
