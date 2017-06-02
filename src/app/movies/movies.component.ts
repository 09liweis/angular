import { Component, OnInit } from '@angular/core';

import { Movie } from '../movie';
import { Movies } from '../movies';
import { MovieService } from '../movie.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movieList: Array<Movie>;
  movies: Movies;
  selectedMovie: Movie;
  
  constructor(private movieService: MovieService) {}
  
  ngOnInit(): void {
    this.movieService.getPopularMovie()
      .then(movies => this.movieList = movies.results);
    
    this.movieService.getMovieDetail()
      .then(movie => this.selectedMovie = movie);
  }
  
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

}
