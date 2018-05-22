import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'single-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class SingleMovieComponent implements OnInit {
  @Input() movie: Movie;
  @Input() list: String;

  constructor(private utilsService: UtilsService) { }

  ngOnInit() {
  }
}
