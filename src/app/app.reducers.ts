import { Effect, Actions } from '@ngrx/effects';
import { FETCH_NEW_CHARACTER, SET_CHARACTER, CustomAction } from './app.actions';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    character: string;
}
const initialAppState: AppState = {
    character: ''
};

function appReducer(state: string = '', action: CustomAction) {
    switch (action.type) {
        case SET_CHARACTER:
            return action.payload;

        default:
            return state;
    }
}

export const reducers: ActionReducerMap<AppState> = {
    character: appReducer
};
