import { Component, OnInit, Input } from '@angular/core';
import { Cast } from '../../models/cast';

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() person: Cast;
  constructor() { }

  ngOnInit() {
  }
  getCastImage(path) {
    if (path) {
      return 'https://image.tmdb.org/t/p/w500' + path;
    } else {
      return 'https://netbranding.co.nz/wp-content/uploads/2014/04/avatar-2.png';
    }
  }

}
