import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Video } from '../models/video';

export const ADD_VIDEO = 'ADD_VIDEO';

export class AddVideo implements Action {
    readonly type = ADD_VIDEO;
    constructor(public payload: Video) {}
}

export type Actions = AddVideo;