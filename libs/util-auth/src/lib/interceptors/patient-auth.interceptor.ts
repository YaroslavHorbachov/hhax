import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ENV, MFAEnv } from '@hhax/util-env';
import { Observable } from 'rxjs';

@Injectable()
export class PatientAuthInterceptor implements HttpInterceptor {
  constructor(@Inject(ENV) private readonly env: MFAEnv) {}

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const cloneRequest = request.clone({
      setHeaders: {
        'x-api-key': this.env.patientApiKey,
      },
    });

    return next.handle(cloneRequest);
  }
}
