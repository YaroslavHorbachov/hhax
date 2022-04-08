import { Injectable } from '@angular/core';
import { PatientClientService } from '@hhax/data-access-api';
import {
  asyncScheduler,
  BehaviorSubject,
  catchError,
  defer,
  delay,
  finalize,
  map,
  observeOn,
  of,
  shareReplay,
} from 'rxjs';
import { DEFAULT_API_DELAY } from '../constants';
import { PatientModel } from '../models';

@Injectable()
export class PatientService {
  constructor(private readonly patientClientService: PatientClientService) {}

  private readonly isLoading = new BehaviorSubject<boolean>(false);

  public readonly isLoading$ = this.isLoading.asObservable().pipe(observeOn(asyncScheduler));

  private readonly rawData$ = defer(() => {
    this.setLoading(true);

    return this.patientClientService.loadBreeds().pipe(
      delay(DEFAULT_API_DELAY),
      finalize(() => this.setLoading(false)),
      catchError(() => of([]))
    );
  }).pipe(shareReplay(1));

  public readonly patients$ = this.rawData$.pipe(
    map((rawData) => {
      const models = rawData.map((record) => new PatientModel(record));

      return models;
    })
  );

  public readonly total$ = this.rawData$.pipe(map((breeds) => breeds.length));

  private setLoading(isLoading: boolean): void {
    console.log(isLoading);

    this.isLoading.next(isLoading);
  }
}
