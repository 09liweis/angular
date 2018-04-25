import { Component, OnInit, Input } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

import { Persons } from '../../models/person/persons';

@Component({
  selector: 'person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
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
export class PersonListComponent implements OnInit {
  @Input() persons: Persons;

  constructor() { }

  ngOnInit() {
  }

}
