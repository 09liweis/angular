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

    getList(type: String): Observable<any>{
        const personsUrl = this.baseUrl + type + this.apiKey;
        const persons = this.http.get(personsUrl);
        return persons;
    }

    getSection(id: number, section: string): Observable<any> {
        section = section == '' ? section : '/' + section;
        return this.http.get(this.baseUrl + id + section + this.apiKey);
    }
}