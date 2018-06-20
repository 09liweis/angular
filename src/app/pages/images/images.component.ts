import { Component, OnInit } from '@angular/core';
import { MovieImage } from '../../models/movieImage';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}
