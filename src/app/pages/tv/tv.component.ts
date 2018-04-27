import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { Movie } from '../../models/movie';
import { TvService } from '../../services/tv.service';

@Component({
  selector: 'tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  public tv: Movie;
  constructor(
    private tvService: TvService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tvService.getDetail(+params['id']).subscribe(tv => {
        this.tv = tv;
      })
    })
  }

}
