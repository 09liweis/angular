import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Movies } from '../models/movies';

@Injectable()
export class SearchService {
    private baseUrl = 'https://api.themoviedb.org/3/search/multi';
    private apiKey = '?api_key=8109b23cc9abaf02cf3c699ec62ccc19';
    private headers = new Headers({'Content-Type': 'application/json'});
    
    constructor(private http: Http) { }
    
    getResults(search: String): Promise<Movies> {
        const searchUrl = this.baseUrl + this.apiKey;
        const results = this.http.get(searchUrl).toPromise().then(res => res.json() as Movies).catch(this.handleError);
        return results;
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
