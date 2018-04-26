import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

import { Movies } from '../models/movies';
import { Movie } from '../models/movie';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TvService {
    
    private baseUrl = 'https://api.themoviedb.org/3/tv/';
    private apiKey = '?api_key=8109b23cc9abaf02cf3c699ec62ccc19';

    constructor(private http: HttpClient) { }
  
    getTvs(type: String, page: number): Observable<any> {
        const url = this.baseUrl + type + this.apiKey + '&page=' + page;
        const tvs = this.http.get(url);
        return tvs;
    }
    
    getDetail(id: number) {
        const url = this.baseUrl + id + this.apiKey;
        const tv = this.http.get(url);
        return tv;
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
