import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

import { Token } from '../models/token';
import { Session } from '../models/session';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SessionService {
    private baseUrl = 'https://api.themoviedb.org/3/authentication/';
    private apiKey = '?api_key=8109b23cc9abaf02cf3c699ec62ccc19';
    
    constructor(private http: HttpClient) { }
    
    getToken(username: string, password: string): Observable<any> {
        const newTokenUrl = this.baseUrl + 'token/new' + this.apiKey;
        const newToken = this.http.get(newTokenUrl);
        // fix this
        // this.validateLogin(username, password, newToken);
        return newToken;
    }
    
    // validateLogin(username: string, password: string, token: Token): Observable<any> {
    //     const data = '&username=' + username + '&password=' + password + '&request_token=' + token.request_token;
    //     const validateUrl = this.baseUrl + 'token/validate_with_login' + this.apiKey + data;
    //     const validateToken = this.http.get(validateUrl);
    //     // fix this
    //     this.getSession(validateToken);
    //     return validateToken;
    // }
    
    // getSession(request_token: string): Observable<any> {
    //     const sessionUrl = this.baseUrl + 'session/new' + this.apiKey + '&request_token=' + request_token;
    //     const session = this.http.get(sessionUrl);
    //     return session;
    // }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
