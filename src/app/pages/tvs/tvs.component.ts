import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Movie } from '../../models/movie';
import { Movies } from '../../models/movies';
import { TvService } from '../../services/tv.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'tvs',
  templateUrl: './tvs.component.html',
  styleUrls: ['./tvs.component.css']
})
export class TvsComponent implements OnInit {
  
  tvs: Movies;
  selectedLink: String;
  links: Array<String>;
  currentPage: Number;
  totalPages: Array<Number>;
  list: String;
  type: string;
  
  constructor(
    private titleService: Title,
    private tvService: TvService,
    private route: ActivatedRoute,
    private router: Router,
    private utilsService: UtilsService
  ) {}
  
  ngOnInit() {
    this.list = 'tv';
    this.links = [
      'airing_today',
      'on_the_air',
      'popular',
      'top_rated'
    ];
    this.selectedLink = 'airing_today';

    this.route.params
    // (+) converts string 'id' to a number
    .switchMap((params: Params) => this.tvService.getTvs(params['type'], params['page']))
    .subscribe((tvs: Movies) => {
      this.type = this.route.snapshot.params['type'];
      this.selectedLink = this.route.snapshot.params['type'];
      this.tvs = tvs;
      this.currentPage = tvs.page;
      this.totalPages = Array(tvs.total_pages).fill(1).map((x,i)=>i)
      // set Page title
      var title = this.utilsService.formatTitle(this.route.snapshot.params['type']);
      this.titleService.setTitle('TVs - ' + title);
    });
  }
  
  gotoLink(link) {
    this.selectedLink = link;
    this.tvs.results = [];
    this.router.navigate(['tvs/' + link]); 
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
