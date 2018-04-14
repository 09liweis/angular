import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Title, DomSanitizer } from '@angular/platform-browser';

//Import the switchMap operator to use later with the route parameters Observable.
import 'rxjs/add/operator/switchMap';

import { Movie } from '../../models/movie';
import { Movies } from '../../models/movies';
import { MovieCredits } from '../../models/movieCredits';
import { MovieImage } from '../../models/movieImage';
import { MovieVideo } from '../../models/movieVideo';
import { MovieReviews } from '../../models/movieReviews';
import { MovieService } from '../../services/movie.service';

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
  movieReviews: MovieReviews;
  section: String;
  similarMovies: Movies;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location,
    private titleService: Title,
    private sanitizier: DomSanitizer
  ) { }

  ngOnInit() {
    if (typeof this.route.snapshot.params['section'] != 'undefined') {
      this.section = this.route.snapshot.params['section'];
    }
    this.route.params.subscribe(params => {
      //scroll page to top
      window.scrollTo(0, 0);
      
      this.movieService.getMovieDetail(+params['id'])
      .then(movie => {
        this.movie = movie;
        this.titleService.setTitle(movie.title);
      });
      
      this.movieService.getMovieImages(+params['id'])
      .then(movieImages => this.movieImages = movieImages);
      
      this.movieService.getMovieCredits(+params['id'])
      .then(movieCredits => this.movieCredits = movieCredits);
      
      this.movieService.getMovieVideos(+params['id'])
      .then(movieVideo => this.movieVideo = movieVideo);
      
      this.movieService.getMovieReviews(+params['id'])
      .then(movieReviews => {
        this.movieReviews = movieReviews;
      });
      
      this.movieService.getSimilarMovies(+params['id'])
      .then(similarMovies => {
        this.similarMovies = similarMovies;
      });
    });
  }

  changeSection(section): void {
    this.section = section;
  }
  formateRevenue() {
    
  }
  getYoutubeEmbed(key) {
    return this.sanitizier.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + key + '?autoplay=0');
  }

}
