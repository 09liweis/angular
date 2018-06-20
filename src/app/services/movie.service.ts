import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MovieService {
    
    private baseUrl = 'https://api.themoviedb.org/3/movie/';
    private apiKey = '?api_key=8109b23cc9abaf02cf3c699ec62ccc19';

    constructor(private httpClient: HttpClient) { }
    
    getList(type: String, page: number): Observable<any> {
        const moviesUrl = this.baseUrl + type + this.apiKey + '&page=' + page;
        const movies = this.httpClient.get(moviesUrl);
        return movies;
    }
    
    getSection(id: number, section: string): Observable<any> {
        section = section == '' ? section : '/' + section;
        return this.httpClient.get(this.baseUrl + id + section + this.apiKey);
    }
}
