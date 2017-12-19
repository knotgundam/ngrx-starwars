import { ActionReducer, Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

export const SET_CHARACTER = 'SET_CHARACTER';
export const FETCH_NEW_CHARACTER = 'FETCH_NEW_CHARACTER';

export class CustomAction implements Action {
    type: string;
    payload: any;
    constructor(type, payload?) {
        this.type = type;
        this.payload = payload;
    }
}

@Injectable()
export class AppAction {

    setCharacter(name: string): CustomAction {
        return {
            type: SET_CHARACTER,
            payload: name
        };
    }
}
