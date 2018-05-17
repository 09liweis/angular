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

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Video } from '../../models/video';
import { AppState } from '../../app.state';
import * as VideoActions from '../../actions/video.actions';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: Movie;
  credits: MovieCredits;
  images: MovieImage;
  videos: MovieVideo;
  reviews: MovieReviews;
  section: String;
  similar: Movies;
  
  modalOpen: boolean = false;
  currentImage: any = 0;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location,
    private titleService: Title,
    private sanitizier: DomSanitizer,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    if (typeof this.route.snapshot.params['section'] != 'undefined') {
      this.section = this.route.snapshot.params['section'];
    } else {
      this.section = 'home';
    }
    this.route.params.subscribe(params => {
      const movieId = params['id'];
      //scroll page to top
      window.scrollTo(0, 0);
      
      this.movieService.getDetail(+movieId)
      .subscribe(movie => {
        this.movie = movie;
        this.titleService.setTitle(movie.title);
      });
      
      this.movieService.getSection(+movieId, 'images')
      .subscribe(images => this.images = images);
      
      this.movieService.getSection(+movieId, 'credits')
      .subscribe(credtis => this.credits = credtis);
      
      this.movieService.getSection(+movieId, 'videos')
      .subscribe(videos => this.videos = videos);
      
      this.movieService.getSection(+movieId, 'reviews')
      .subscribe(reviews => {
        this.reviews = reviews;
      });
      
      this.movieService.getSection(+movieId, 'similar')
      .subscribe(similar => {
        this.similar = similar;
      });
    });
  }

  changeSection(section): void {
    this.section = section;
  }
  getYoutubeEmbed(key) {
    return this.sanitizier.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + key + '?autoplay=0');
  }
  addVideo() {
    this.store.dispatch(new VideoActions.AddVideo({
      id: this.movie.id,
      title: this.movie.title,
      type: 'movie',
      video: ''
    }));
    this.store.select('videos').subscribe(data => console.log(data) );
  }
  
  previewImage(image, index) {
    this.currentImage = index;
    this.modalOpen = true;
  }
  closeModal() {
    this.modalOpen = false;
  }
  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if (event.key == 'ArrowRight') {
      if (this.currentImage == this.images.posters.length - 1) {
        this.currentImage = 0
      } else {
        this.currentImage += 1;
      }
    }
    if (event.key == 'ArrowLeft') {
      if (this.currentImage == 0) {
        this.currentImage = this.images.posters.length - 1;
      } else {
        this.currentImage -= 1;
      }
    }
  }

}
