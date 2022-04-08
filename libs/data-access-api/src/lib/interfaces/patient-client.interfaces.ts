/* eslint-disable @typescript-eslint/naming-convention */

import { ApiBoolValues, ApiLevelValues } from '../enums/patient-client.enums';

export interface BreedWeight {
  readonly imperial: string;
  readonly metric: string;
}

export interface BreedImage {
  readonly id: string;
  readonly width: number;
  readonly height: number;
  readonly url: string;
}

export interface Breed {
  readonly weight: BreedWeight;
  readonly id: string;
  readonly name: string;
  readonly cfa_url: string;
  readonly temperament: string;
  readonly origin: string;
  readonly country_codes: string;
  readonly country_code: string;
  readonly description: string;
  readonly indoor: ApiBoolValues;
  readonly alt_names: string;
  readonly adaptability: ApiLevelValues;
  readonly affection_level: ApiLevelValues;
  readonly child_friendly: ApiLevelValues;
  readonly dog_friendly: ApiLevelValues;
  readonly energy_level: ApiLevelValues;
  readonly health_issues: ApiLevelValues;
  readonly intelligence: ApiLevelValues;
  readonly wikipedia_url: string;
  readonly hypoallergenic: ApiBoolValues;
  readonly reference_image_id: string;
  readonly image: BreedImage;
}
