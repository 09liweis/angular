import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

import { News } from '../models/news';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NewsService {
    
    private newsAPIKEY = '?apiKey=cf15915623f74a4fb8a6b4c98e2c6c1a';

    constructor(private http: HttpClient) {
    }
    
    getNewsFromRottentomatoes(): Observable<any> {
        return this.http.get('https://editorial.rottentomatoes.com/wp-json/articles/');
    }
    
    getNews(): Observable<any> {
        return this.http.get('https://newsapi.org/v2/sources' + this.newsAPIKEY);
    }
}
