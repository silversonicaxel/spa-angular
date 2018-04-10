export interface AppState {
  experience: Experience;
}

export interface Experience {
  title: string;
  subtitle?: string;
  type: string;
}
