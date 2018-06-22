import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { MovieCredits } from '../../models/movieCredits';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-casts',
  templateUrl: './casts.component.html',
  styleUrls: ['./casts.component.scss']
})
export class CastsComponent implements OnInit {
  credits: MovieCredits;
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
      let endpoint = (type == 'movie') ? 'casts' : 'credits';
      if (type == 'person') {
        endpoint = 'combined_credits';
      }
      this.apiService.getSection(type, +id, endpoint).subscribe(credits => {
        this.credits = credits;
      });
    });
  }

}
