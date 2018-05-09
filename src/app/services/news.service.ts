import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

import { News } from '../models/news';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NewsService {

    constructor(private http: HttpClient) {
    }
    
    getNewsFromRottentomatoes(): Observable<any> {
        return this.http.get('https://editorial.rottentomatoes.com/wp-json/articles/');
    }
}
