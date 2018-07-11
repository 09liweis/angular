import { Video } from './models/video';

export interface AppState {
  readonly videos: Video[];
  count: number;
}