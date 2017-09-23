import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params }   from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Movie } from '../../models/movie';
import { Movies } from '../../models/movies';
import { TvService } from '../../services/tv.service';

@Component({
  selector: 'tvs',
  templateUrl: './tvs.component.html',
  styleUrls: ['./tvs.component.css']
})
export class TvsComponent implements OnInit {
  
  tvs: Movies;
  selectedLink: String;
  links: Array<String>;
  
  constructor(
    private titleService: Title,
    private tvService: TvService,
    private route: ActivatedRoute,
  ) {}
  
  ngOnInit() {
    this.links = [
      'airing_today',
      'on_the_air',
      'popular',
      'top_rated'
    ];
    this.selectedLink = 'latest';

    this.route.params
    // (+) converts string 'id' to a number
    .switchMap((params: Params) => this.tvService.getTvs(params['type']))
    .subscribe((tvs: Movies) => {
      this.tvs = tvs;
      // set Page title
      var title = this.formateTitle(this.route.snapshot.params['type']);
      this.titleService.setTitle(title);
    });
  }
  
  //need to find out string vs String
  formateTitle(title: string): string {
    // format 'now_playing' to 'Now Playing'
    const result = title.split('_').map(function(word) {
      //make word to Capitalize
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
    return result;
  }

}
