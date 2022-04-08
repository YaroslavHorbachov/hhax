// No I prefix for interfaces
// Use readonly for each field if it will be not mutated
export interface Env {
  readonly production: boolean;
  readonly name: string;
}

export interface MFAEnv extends Env {
  readonly patientApiKey: string;
  readonly patientApiUrl: string;
}

export interface NPPEnv extends Env {
  readonly agifyApiKey: string;
  readonly agifyApiUrl: string;
}
