import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'single-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class SingleMovieComponent implements OnInit {
  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}
