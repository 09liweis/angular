export class Movie {
    id: number;
    title: string;
    name: string;//for tv
    poster_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: Array<number>;
    original_title: string;
    original_language: string;
    backdrop_path: string;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
    budget: number;
    belongs_to_collection: null;
    homepage: string;
    imdb_id: string;
    production_companies: Array<{name: string, id: number}>;
    production_countries: Array<any>;
    revenue: number;
    runtime: number;
    spoken_languages: Array<any>;
    status: string;
    tagline: string;
    first_air_date: string;
    character: string;
}
