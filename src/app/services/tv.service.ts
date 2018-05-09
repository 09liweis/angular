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
  
    getList(type: String, page: number): Observable<any> {
        const url = this.baseUrl + type + this.apiKey + '&page=' + page;
        const tvs = this.http.get(url);
        return tvs;
    }
    
    getDetail(id: number): Observable<any> {
        const url = this.baseUrl + id + this.apiKey;
        const tv = this.http.get(url);
        return tv;
    }
    getSection(id: number, section:string): Observable<any> {
        return this.http.get(this.baseUrl + id + '/' + section + this.apiKey);
    }
}
