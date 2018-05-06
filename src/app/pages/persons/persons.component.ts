import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params }   from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Person } from '../../models/person/person';
import { Persons } from '../../models/person/persons';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {

  selectedLink: String;
  links: Array<String>;
  persons: Persons;
  selectedPerson: Person;
  list: String = 'person';

  constructor( 
    private titleService: Title,
    private personService: PersonService,
    private route: ActivatedRoute,) { }

  ngOnInit() :void{
    this.links=[
      'popular',
      'latest'
    ];
    this.selectedLink = 'popular';

    this.route.params
    .switchMap((params: Params) => this.personService.getList(params['type']))
    .subscribe((persons: Persons) =>{
      this.persons = persons;
    })
  
  }


  
}
