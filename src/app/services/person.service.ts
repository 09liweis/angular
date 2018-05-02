import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

import { Persons } from '../models/person/persons';
import { Person } from '../models/person/person';

@Injectable()

export class PersonService{
    private baseUrl = 'https://api.themoviedb.org/3/person/';
    private apiKey = '?api_key=8109b23cc9abaf02cf3c699ec62ccc19';
    private headers = new Headers({'Content-Type': 'application/json'});


    constructor(private http: HttpClient){}

    getPopular(type: String): Observable<any>{
        const personsUrl = this.baseUrl + type + this.apiKey + '&page=1';
        const persons = this.http.get(personsUrl);
        return persons;
    }
    getDetail(id: number): Observable<any> {
        return this.http.get(this.baseUrl + id + this.apiKey);
    }
}