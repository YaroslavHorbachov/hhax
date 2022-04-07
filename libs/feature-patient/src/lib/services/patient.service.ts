import { Injectable } from '@angular/core';
import { CatClientService } from '@hhax/data-access-api';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private readonly catClientService: CatClientService) {}

  private readonly data$ = this.catClientService.getBreeds(0);
}
