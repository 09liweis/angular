import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params }   from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Movie } from '../models/movie';
import { Movies } from '../models/movies';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movies;
  selectedMovie: Movie;
  
  constructor(
    private titleService: Title,
    private movieService: MovieService,
    private route: ActivatedRoute,
  ) {}
  
  ngOnInit(): void {

    this.route.params
    // (+) converts string 'id' to a number
    .switchMap((params: Params) => this.movieService.getMovies(params['type']))
    .subscribe((movies: Movies) => this.movies = movies);
  }
  
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

}
