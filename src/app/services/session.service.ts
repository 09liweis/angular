import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Token } from '../models/token';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SessionService {
    private baseUrl = 'https://api.themoviedb.org/3/authentication/';
    private apiKey = '?api_key=8109b23cc9abaf02cf3c699ec62ccc19';
    
    constructor(private http: Http) { }
    
    getToken(): Promise<Token> {
        const newTokenUrl = this.baseUrl + 'token/new' + this.apiKey;
        const newToken = this.http.get(newTokenUrl)
                        .toPromise()
                        .then(response => response.json() as Token)
                        .catch(this.handleError);
        return newToken;
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
