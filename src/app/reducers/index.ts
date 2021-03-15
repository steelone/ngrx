import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { countNode, countReducer, CountState } from './count/count.reducer';

export const rootReducer = {};

export interface State {
  [countNode]: CountState;
}

export const reducers: ActionReducerMap<State, any> = {
  [countNode]: countReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
