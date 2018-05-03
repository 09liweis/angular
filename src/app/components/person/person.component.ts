import { Component, OnInit, Input } from '@angular/core';
import { Cast } from '../../models/cast';
import {UtilsService} from '../../services/utils.service';

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input() person: Cast;
  constructor(private utilsService: UtilsService) { }

  ngOnInit() {
  }
  getCastImage(path: string): string {
    return this.utilsService.getImagePath(path);
  }

}
