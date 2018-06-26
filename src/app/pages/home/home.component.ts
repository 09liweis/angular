import { Component, OnInit } from '@angular/core';

import { Movies } from '../../models/movies';
import { MovieService } from '../../services/movie.service';
import { TvService } from '../../services/tv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: Movies;
  tvs: Movies;

  constructor(
    private movieService: MovieService,
    private tvService: TvService
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.movieService.getList('now_playing', 1).subscribe(movies => {
      const list = movies.results.slice(0, 6);
      movies.results = list;
      this.movies = movies;
    });
    
    this.tvService.getList('airing_today', 1).subscribe(tvs => {
      const list = tvs.results.slice(0, 6);
      tvs.results = list;
      this.tvs = tvs;
    });
  }

}
