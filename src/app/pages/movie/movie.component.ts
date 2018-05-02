import { Component, Input, OnInit, HostListener } from '@angular/core';
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
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: Movie;
  movieCredits: MovieCredits;
  movieImages: MovieImage;
  movieVideo: MovieVideo;
  movieReviews: MovieReviews;
  section: String;
  similarMovies: Movies;
  
  modalOpen: boolean = false;
  currentImage: any = 0;

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
    } else {
      this.section = 'home';
    }
    this.route.params.subscribe(params => {
      //scroll page to top
      window.scrollTo(0, 0);
      
      this.movieService.getDetail(+params['id'])
      .subscribe(movie => {
        this.movie = movie;
        this.titleService.setTitle(movie.title);
      });
      
      this.movieService.getMovieImages(+params['id'])
      .subscribe(movieImages => this.movieImages = movieImages);
      
      this.movieService.getMovieCredits(+params['id'])
      .subscribe(movieCredits => this.movieCredits = movieCredits);
      
      this.movieService.getMovieVideos(+params['id'])
      .subscribe(movieVideo => this.movieVideo = movieVideo);
      
      this.movieService.getMovieReviews(+params['id'])
      .subscribe(movieReviews => {
        this.movieReviews = movieReviews;
      });
      
      this.movieService.getSimilarMovies(+params['id'])
      .subscribe(similarMovies => {
        this.similarMovies = similarMovies;
      });
    });
  }

  changeSection(section): void {
    this.section = section;
  }
  getYoutubeEmbed(key) {
    return this.sanitizier.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + key + '?autoplay=0');
  }
  previewImage(image, index) {
    console.log(index);
    this.currentImage = index;
    this.modalOpen = true;
  }
  closeModal() {
    this.modalOpen = false;
  }
  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if (event.key == 'ArrowRight') {
      if (this.currentImage == this.movieImages.posters.length - 1) {
        this.currentImage = 0
      } else {
        this.currentImage += 1;
      }
    }
    if (event.key == 'ArrowLeft') {
      if (this.currentImage == 0) {
        this.currentImage = this.movieImages.posters.length - 1;
      } else {
        this.currentImage -= 1;
      }
    }
  }

}
