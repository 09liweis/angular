import { Component, OnInit } from '@angular/core';

import { Movies } from '../../models/movies';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movies;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovies('now_playing', 1).then(movies => {
      const list = movies.results.slice(0, 6);
      movies.results = list;
      this.movies = movies;
    });
  }

}
