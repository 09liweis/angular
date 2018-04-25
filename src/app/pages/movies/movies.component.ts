import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Movie } from '../../models/movie';
import { Movies } from '../../models/movies';
import { MovieService } from '../../services/movie.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  selectedLink: String;
  links: Array<String>;
  movies: Movies;
  selectedMovie: Movie;
  list: String;
  type: string;
  currentPage: Number;
  totalPages: Array<Number>;
  
  constructor(
    private titleService: Title,
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router,
    private utilsService: UtilsService
  ) {}
  
  ngOnInit(): void {
    this.list = 'movie';
    this.links = [
      'now_playing',
      'popular',
      'top_rated',
      'upcoming'
    ];

    this.route.params
    // (+) converts string 'id' to a number
    .switchMap((params: Params) => this.movieService.getMovies(params['type'], params['page']))
    .subscribe((movies: Movies) => {
      this.type = this.route.snapshot.params['type'];
      this.selectedLink = this.route.snapshot.params['type'];
      this.movies = movies;
      this.currentPage = movies.page;
      this.totalPages = Array(movies.total_pages).fill(1).map((x,i)=>i)
      // set Page title
      var title = this.utilsService.formatTitle(this.route.snapshot.params['type']);
      this.titleService.setTitle('Movies - ' + title);
    });
  }
  gotoLink(link) {
    this.selectedLink = link;
    this.movies.results = [];
    this.router.navigate(['movies/' + link]); 
  }
  
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }
  
  formatTitle(title: string): string {
    return this.utilsService.formatTitle(title);
  }

}
