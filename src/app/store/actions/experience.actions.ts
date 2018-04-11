import { Action } from '@ngrx/store';
import { Experience } from '../models/experience.model';

export const UPDATE_EXPERIENCE = 'UPDATE_EXPERIENCE';
export const CLEAN_EXPERIENCE = 'CLEAN_EXPERIENCE';

export class UpdateExperience implements Action {
  readonly type = UPDATE_EXPERIENCE;

  constructor(public payload: Experience) {}
}

export class CleanExperience implements Action {
  readonly type = CLEAN_EXPERIENCE;
}

export type ExperienceActions = UpdateExperience | CleanExperience;
