import { Video } from './models/video';

export interface AppState {
  videos: Video[];
  count: number;
}