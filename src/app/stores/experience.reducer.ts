import { Action, ActionReducer } from '@ngrx/store';
import { Experience } from '../app.state';

export const UPDATE_EXPERIENCE = 'UPDATE_EXPERIENCE';
export const CLEAN_EXPERIENCE = 'CLEAN_EXPERIENCE';

const initialState: Experience = {
  title: 'Experience',
  subtitle: '',
  type: null
};

export const experienceReducer: ActionReducer<Experience> = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case UPDATE_EXPERIENCE:
      return Object.assign({}, state, {
        title: action.title,
        subtitle: action.subtitle,
        type: action.type
      });

    case CLEAN_EXPERIENCE:
      return Object.assign({}, initialState);

    default:
      return state;
  }
};
