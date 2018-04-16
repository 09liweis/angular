import { Component, OnInit, Input } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

import { Movies } from '../../models/movies';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  animations: [
    trigger('moviesAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('200ms', [
          animate('0.5s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-35%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true}),
        
        query(':leave', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-35%)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
  ]
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
