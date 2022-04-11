import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ENV, NPPEnv } from '@hhax/util-env';
import { map, Observable } from 'rxjs';
import { AgifyRecord } from '../interfaces';

@Injectable()
export class AgifyClientService {
  constructor(private readonly httpClient: HttpClient, @Inject(ENV) private readonly mfaEnv: NPPEnv) {}

  public load(name: string): Observable<AgifyRecord> {
    const params = new HttpParams({ fromObject: { name } });

    return this.httpClient
      .get<AgifyRecord>(this.mfaEnv.agifyApiUrl, { params })
      .pipe(map((record) => ({ ...record, id: new Date().valueOf() })));
  }
}
