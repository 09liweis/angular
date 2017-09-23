import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Persons } from '../models/person/persons';
import { Person } from '../models/person/person';

@Injectable()

export class PersonService{
    private baseUrl = 'https://api.themoviedb.org/3/person/';
    private apiKey = '?api_key=8109b23cc9abaf02cf3c699ec62ccc19';
    private headers = new Headers({'Content-Type': 'application/json'});


    constructor(private http: Http){}

    getPopular(type: String): Promise<Persons>{
        const personsUrl = this.baseUrl + type + this.apiKey + '&page=1';
        const persons = this.http.get(personsUrl)
        .toPromise()
        .then(response => response.json() as Persons)
        .catch(this.handleError);
        return persons;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}