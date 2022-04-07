// No I prefix for interfaces
// Use readonly as much as possible
export interface Env {
  readonly production: boolean;
  readonly name: string;
  readonly catApiKey?: string;
}
