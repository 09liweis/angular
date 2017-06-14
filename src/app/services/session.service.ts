import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Token } from '../models/token';
import { Session } from '../models/session';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SessionService {
    private baseUrl = 'https://api.themoviedb.org/3/authentication/';
    private apiKey = '?api_key=8109b23cc9abaf02cf3c699ec62ccc19';
    
    constructor(private http: Http) { }
    
    getToken(username: string, password: string): Promise<Session> {
        const newTokenUrl = this.baseUrl + 'token/new' + this.apiKey;
        const newToken = this.http.get(newTokenUrl)
                        .toPromise()
                        .then(response => this.validateLogin(username, password, response.json()))
                        .catch(this.handleError);
        return newToken;
    }
    
    validateLogin(username: string, password: string, token: Token): Promise<Token> {
        const data = '&username=' + username + '&password=' + password + '&request_token=' + token.request_token;
        const validateUrl = this.baseUrl + 'token/validate_with_login' + this.apiKey + data;
        const validateToken = this.http.get(validateUrl)
                                .toPromise()
                                .then(response => this.getSession(response.json().request_token))
                                .catch(this.handleError);
        return validateToken;
    }
    
    getSession(request_token: string): Promise<Token> {
        const sessionUrl = this.baseUrl + 'session/new' + this.apiKey + '&request_token=' + request_token;
        const session = this.http.get(sessionUrl)
                                .toPromise()
                                .then(response => response.json() as Token)
                                .catch(this.handleError);
        return session;
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
