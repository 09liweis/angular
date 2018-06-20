import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { MovieImage } from '../../models/movieImage';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  images: MovieImage;
  id: String;
  type: String;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      const type = params['type'];
      this.id = id;
      this.type = type;
      window.scrollTo(0, 0);
      this.apiService.getSection(type, +id, 'images').subscribe(images => {
        this.images = images.posters.concat(images.backdrops);
      });
    })
  }

}
