import { Action } from '@ngrx/store'
import { Video } from './models/video'
import * as VideoActions from './actions/video.actions'

export function reducer(state: Video[] = [], action: VideoActions.Actions) {
    switch(action.type) {
        case VideoActions.ADD_VIDEO:
            return [...state, action.payload];
        default:
            return state;
    }
}