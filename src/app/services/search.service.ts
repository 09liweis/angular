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
        
    }
}
