import { Action } from '@ngrx/store'
import { Video } from '../models/video'
import * as VideoActions from '../actions/video.actions'

export const INCREMENT = 'INCREMENT';

const initialState = {
    videos: [],
    count: 0,
    language: 'en',
    country: 'US'
};


export function reducer(state: number = 0, action: Action) {
    switch(action.type) {
        case INCREMENT: {
            console.log(state + 1);
            return state + 1;
        }
        default:
            return state;
    }
}