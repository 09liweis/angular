import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Movies } from '../models/movies';
import { Movie } from '../models/movie';
import { MovieCredits } from '../models/movieCredits';
import { MovieImage } from '../models/movieImage';
import { MovieVideo } from '../models/movieVideo';

@Injectable()
export class MovieService {
    
    private baseUrl = 'https://api.themoviedb.org/3/movie/';
    private apiKey = '?api_key=8109b23cc9abaf02cf3c699ec62ccc19';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }
    
    getMovies(type: String): Promise<Movies> {
        const moviesUrl = this.baseUrl + type + this.apiKey + '&page=1';
        const movies = this.http.get(moviesUrl)
                        .toPromise()
                        .then(response => response.json() as Movies)
                        .catch(this.handleError);
        return movies;
    }
    
    getMovieDetail(id: number): Promise<Movie> {
        const movieDetail = this.baseUrl + id + this.apiKey;
        return this.http.get(movieDetail)
                        .toPromise()
                        .then(response => response.json() as Movie)
                        .catch(this.handleError);
    }
    
    getMovieImages(id: number): Promise<MovieImage> {
        const movieCredits = this.baseUrl + id + '/images' + this.apiKey;
        return this.http.get(movieCredits)
                    .toPromise()
                    .then(res => res.json() as MovieImage)
                    .catch(this.handleError);
    }
    
    getMovieCredits(id: number): Promise<MovieCredits> {
        const movieCredits = this.baseUrl + id + '/credits' + this.apiKey;
        return this.http.get(movieCredits)
                    .toPromise()
                    .then(res => res.json() as MovieCredits)
                    .catch(this.handleError);
    }
    
    getMovieVideos(id: number): Promise<MovieVideo> {
        const movieVideo = this.baseUrl + id + '/videos' + this.apiKey;
        return this.http.get(movieVideo)
                    .toPromise()
                    .then(res => res.json() as MovieVideo)
                    .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
