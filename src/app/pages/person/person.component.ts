import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Title, DomSanitizer } from '@angular/platform-browser';

import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonPageComponent implements OnInit {
  public person;

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.personService.getDetail(+params['id']).subscribe(p => {
        this.person = p;
        this.titleService.setTitle(p.name);
      })
    })
  }

}
