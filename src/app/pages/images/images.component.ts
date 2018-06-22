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
  tabs: Array<any> = [
    {
      link: '',
      title: 'Home'
    },
    {
      link: 'images',
      title: 'Images'
    },
    {
      link: 'casts',
      title: 'Casts'
    }
  ];

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
        if (type == 'person') {
          this.images = images.profiles;
        } else {
          this.images = images.posters.concat(images.backdrops);
        }
      });
    })
  }

}
