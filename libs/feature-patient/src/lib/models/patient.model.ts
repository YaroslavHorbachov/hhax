import { Breed, BreedImage, BreedWeight } from '@hhax/data-access-api';

export class PatientModel {
  public readonly weight: BreedWeight;

  public readonly image: BreedImage;

  public readonly description: string;

  constructor(breed: Breed) {
    this.weight = breed.weight;
    this.image = breed.image;
    this.description = breed.description;
  }
}
