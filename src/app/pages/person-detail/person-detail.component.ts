import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params }   from '@angular/router';

import {PersonDetail} from '../../models/person/person-detail';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  personDetail: PersonDetail;
 

  constructor(
    private titleService: Title,
    private personService: PersonService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() : void{

    this.route.params.subscribe(params => {
      this.personService.getPersonDetail(+params['id'])
      .then(personDetail => {
        this.personDetail = personDetail;
        this.titleService.setTitle(personDetail.name);
      });
    })
    
  }

}
