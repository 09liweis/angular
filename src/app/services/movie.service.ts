import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';

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
    // private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http, private httpClient: HttpClient) { }
    
    getMovies(type: String, page: number): Observable<any> {
        const moviesUrl = this.baseUrl + type + this.apiKey + '&page=' + page;
        const movies = this.httpClient.get(moviesUrl);
        return movies;
    }
    
    getMovieDetail(id: number): Observable<any> {
        const movieDetail = this.baseUrl + id + this.apiKey;
        const movie = this.httpClient.get(movieDetail);
        return movie;
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
    
    getMovieReviews(id: number): Promise<MovieReviews> {
        const movieReviews = this.baseUrl + id +'/reviews' + this.apiKey;
        return this.http.get(movieReviews)
                    .toPromise()
                    .then(res => res.json() as MovieReviews)
                    .catch(this.handleError);
    }
    
    getSimilarMovies(id: number): Promise<Movies> {
        const similarMovies = this.baseUrl + id + '/similar' + this.apiKey;
        return this.http.get(similarMovies)
                    .toPromise()
                    .then(res => res.json() as Movies)
                    .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
