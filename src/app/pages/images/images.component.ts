import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { MovieImage } from '../../models/movieImage';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  images: MovieImage;
  id: String;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const movieId = params['id'];
      this.id = movieId;
      window.scrollTo(0, 0);
      this.movieService.getSection(+movieId, 'images').subscribe(images => {
        this.images = images.posters.concat(images.backdrops);
      });
    })
  }

}
