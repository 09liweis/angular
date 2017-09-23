import { Component, OnInit, Input } from '@angular/core';
import { Cast } from '../../models/cast';

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() cast: Cast;
  constructor() { }

  ngOnInit() {
  }

}
