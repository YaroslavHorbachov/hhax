import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ENV, MFAEnv } from '@hhax/util-env';
import { Observable } from 'rxjs';
import { ApiRoutes } from '../enums/patient-client.enums';
import { Breed } from '../interfaces';

@Injectable()
export class PatientClientService {
  constructor(private readonly httpClient: HttpClient, @Inject(ENV) private readonly mfaEnv: MFAEnv) {}

  public loadBreeds(): Observable<Breed[]> {
    return this.httpClient.get<Breed[]>(this.mfaEnv.patientApiUrl + ApiRoutes.Breeds);
  }
}
