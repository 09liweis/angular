import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { News } from '../models/news';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class NewsService {
    
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }
    
    getNewsFromRottentomatoes(): Promise<News[]> {
        const url = 'https://editorial.rottentomatoes.com/wp-json/articles/';
        const news = this.http.get(url)
                        .toPromise()
                        .then(response => response.json() as News[])
                        .catch(this.handleError);
        return news;
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
