import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

import { News } from '../models/news';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NewsService {
    
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: HttpClient) {
    }
    
    getNewsFromRottentomatoes(): Observable<any> {
        const url = 'https://editorial.rottentomatoes.com/wp-json/articles/';
        const news = this.http.get(url);
        return news;
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
