import { Component, OnInit, Input } from '@angular/core';
import { Movies } from '../../models/movies';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() type: string;// current type of movie or tv
  @Input() list: string;// movie or tv
  @Input() totalPages: number;
  @Input() currentPage: number;
  @Input() movies: Movies;
  constructor() {
  }

  ngOnInit() {
    console.log(this.list);
  }

}
