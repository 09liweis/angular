import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Title, DomSanitizer } from '@angular/platform-browser';

import { Movie } from '../../models/movie';
import { TvService } from '../../services/tv.service';

@Component({
  selector: 'tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  public section: String;
  public tv: Movie;
  public credits;
  public images;
  constructor(
    private tvService: TvService,
    private route: ActivatedRoute,
    private titleService: Title
  ) { }

  ngOnInit() {
    if (typeof this.route.snapshot.params['section'] != 'undefined') {
      this.section = this.route.snapshot.params['section'];
    } else {
      this.section = 'home';
    }
    this.route.params.subscribe(params => {
      const tvId = params['id'];
      this.tvService.getSection(+tvId, '').subscribe(tv => {
        this.tv = tv;
        this.titleService.setTitle(tv.name);
      });
      this.tvService.getSection(+tvId, 'credits').subscribe(credits => {
        this.credits = credits;
      });
      this.tvService.getSection(+tvId, 'images').subscribe(images => {
        this.images = images;
      });
    })
  }
  
  changeSection(section: string): void {
    this.section = section;
  }

}
