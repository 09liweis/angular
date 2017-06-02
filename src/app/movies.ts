import { Movie } from './movie'

export class Movies {
    page: number;
    results: Array<Movie>;
    dates: {
        maximum: string,
        minimum: string
    };
    total_pages: number;
    total_results: number;
}
