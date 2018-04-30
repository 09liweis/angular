import { Component, OnInit } from '@angular/core';

import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonPageComponent implements OnInit {

  constructor(
    private personService: PersonService
  ) { }

  ngOnInit() {
    
  }

}
