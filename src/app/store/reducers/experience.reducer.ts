import { ActionReducer } from '@ngrx/store';
import * as ExperienceActions from '../actions/experience.actions';
import { Experience } from '../models/experience.model';

export type Action = ExperienceActions.ExperienceActions;


const initialState: Experience = {
  title: 'Experience',
  subtitle: '',
  description: null
};

export const experienceReducer: ActionReducer<Experience> = (
  state: Experience = initialState,
  action: Action
) => {
  switch (action.type) {
    case ExperienceActions.UPDATE_EXPERIENCE:
      return Object.assign({}, state, {
        title: action.payload.title,
        subtitle: action.payload.subtitle,
        description: action.payload.description
      });

    case ExperienceActions.CLEAN_EXPERIENCE:
      return Object.assign({}, initialState);

    default:
      return state;
  }
}
