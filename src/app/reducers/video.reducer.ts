import { Action } from '@ngrx/store'
import { Video } from '../models/video'
import * as VideoActions from '../actions/video.actions'

// const initialState = {
//     videos: [],
//     count: 0,
//     language: 'en',
//     country: 'US'
// };

const initialState: Video = {
    id: 123455,
    title: 'Movie Title',
    type: 'movie',
    src: 'dfkajsdfladkjf'
}


export function reducer(state: Video[] = [initialState], action: VideoActions.Actions) {
    switch(action.type) {
        case VideoActions.ADD_VIDEO:
            return [...state, action.payload];
        default:
            return state;
    }
}