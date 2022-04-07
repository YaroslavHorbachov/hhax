import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Env, ENV_TOKEN } from '@hhax/util-env';
import { Observable } from 'rxjs';

@Injectable()
export class CatAuthInterceptor implements HttpInterceptor {
  constructor(@Inject(ENV_TOKEN) private readonly env: Env) {}

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const cloneRequest = request.clone({
      setHeaders: {
        // Only for MFA application
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        'x-api-key': this.env.catApiKey!,
      },
    });

    return next.handle(cloneRequest);
  }
}
