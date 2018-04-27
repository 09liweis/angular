import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { TvService } from '../../services/tv.service';

@Component({
  selector: 'tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  constructor(
    private tvService: TvService
  ) { }

  ngOnInit() {
  }

}
