import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params }   from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

import { Person } from '../../models/person/person';
import { Persons } from '../../models/person/persons';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
  animations: [
    trigger('personsAnimation', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(':enter', stagger('200ms', [
          animate('0.3s ease', keyframes([
            style({opacity: 0, transform: 'translateX(20%)', offset: 0}),
            style({opacity: 0.5, transform: 'translateX(-20px)', offset: 0.5}),
            style({opacity: 1, transform: 'translateX(0)', offset: 1}),
          ]))
        ]), {optional: true})
      ])
    ])
  ]
})
export class PersonsComponent implements OnInit {

  selectedLink: String;
  links: Array<String>;
  persons: Persons;
  selectedPerson: Person;

  constructor( 
    private titleService: Title,
    private personService: PersonService,
    private route: ActivatedRoute,) { }

  ngOnInit() :void{
    this.links=[
      'popular'
    ];
    this.selectedLink = 'popular';

    this.route.params
    .switchMap((params: Params) => this.personService.getPopular(params['type']))
    .subscribe((persons: Persons) =>{
      this.persons = persons;
    })
  
  }


  
}
