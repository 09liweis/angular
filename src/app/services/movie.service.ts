import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

import { Movies } from '../models/movies';
import { Movie } from '../models/movie';
import { MovieCredits } from '../models/movieCredits';
import { MovieImage } from '../models/movieImage';
import { MovieVideo } from '../models/movieVideo';
import { MovieReviews } from '../models/movieReviews';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MovieService {
    
    private baseUrl = 'https://api.themoviedb.org/3/movie/';
    private apiKey = '?api_key=8109b23cc9abaf02cf3c699ec62ccc19';

    constructor(private httpClient: HttpClient) { }
    
    getMovies(type: String, page: number): Observable<any> {
        const moviesUrl = this.baseUrl + type + this.apiKey + '&page=' + page;
        const movies = this.httpClient.get(moviesUrl);
        return movies;
    }
    
    getDetail(id: number): Observable<any> {
        const movieDetail = this.baseUrl + id + this.apiKey;
        const movie = this.httpClient.get(movieDetail);
        return movie;
    }
    
    getMovieImages(id: number): Observable<any> {
        const movieCredits = this.baseUrl + id + '/images' + this.apiKey;
        return this.httpClient.get(movieCredits)
    }
    
    getMovieCredits(id: number): Observable<any> {
        const movieCredits = this.baseUrl + id + '/credits' + this.apiKey;
        return this.httpClient.get(movieCredits);
    }
    
    getMovieVideos(id: number): Observable<any> {
        const movieVideo = this.baseUrl + id + '/videos' + this.apiKey;
        return this.httpClient.get(movieVideo);
    }
    
    getMovieReviews(id: number): Observable<any> {
        const movieReviews = this.baseUrl + id +'/reviews' + this.apiKey;
        return this.httpClient.get(movieReviews);
    }
    
    getSimilarMovies(id: number): Observable<any> {
        const similarMovies = this.baseUrl + id + '/similar' + this.apiKey;
        return this.httpClient.get(similarMovies);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
