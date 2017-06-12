import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

//Import the switchMap operator to use later with the route parameters Observable.
import 'rxjs/add/operator/switchMap';

import { Movie } from '../models/movie';
import { MovieCredits } from '../models/movieCredits';
import { MovieImage } from '../models/movieImage';
import { MovieVideo } from '../models/movieVideo';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: Movie;
  movieCredits: MovieCredits;
  movieImages: MovieImage;
  movieVideo: MovieVideo;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieService.getMovieDetail(+params['id'])
      .then(movie => this.movie = movie);
    });
    
    this.route.params.subscribe(params => {
      this.movieService.getMovieImages(+params['id'])
      .then(movieImages => this.movieImages = movieImages);
    });
    
    this.route.params.subscribe(params => {
      this.movieService.getMovieCredits(+params['id'])
      .then(movieCredits => this.movieCredits = movieCredits);
    });
    
    this.route.params.subscribe(params => {
      this.movieService.getMovieVideos(+params['id'])
      .then(movieVideo => this.movieVideo = movieVideo);
    });
  }
  
  goBack(): void {
    this.location.back();
  }

}
