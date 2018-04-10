import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core';
import { storeLogger } from 'ngrx-store-logger';
import { experienceReducer } from './stores/experience.reducer';

const reducers = {
  experience: experienceReducer
};

const reducer = compose(storeLogger(), combineReducers)(reducers);

export function rootReducer(state: any, action: any) {
  return reducer(state, action);
}
