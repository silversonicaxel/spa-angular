import { Action, ActionReducer } from '@ngrx/store';
import { Experience } from '../app.state';

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
    default:
      return state;
  }
};
