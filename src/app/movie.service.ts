import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Movies } from './movies';
import { Movie } from './movie';

@Injectable()
export class MovieService {
    
    private headers = new Headers({'Content-Type': 'application/json'});
    private popularMovie = 'https://api.themoviedb.org/3/movie/now_playing?api_key=8109b23cc9abaf02cf3c699ec62ccc19&language=en-US&page=1';
    private movieDetail = 'https://api.themoviedb.org/3/movie/4566?api_key=8109b23cc9abaf02cf3c699ec62ccc19&language=en-US';
    
    constructor(private http: Http) { }
    
    getPopularMovie(): Promise<Movies> {
        const movies = this.http.get(this.popularMovie)
                        .toPromise()
                        .then(response => response.json() as Movies)
                        .catch(this.handleError);
        return movies;
    }
    
    getMovieDetail(): Promise<Movie> {
        return this.http.get(this.movieDetail)
                        .toPromise()
                        .then(response => response.json() as Movie)
                        .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
