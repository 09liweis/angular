import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { SearchService } from '../../services/search.service';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [
    trigger('searchAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),
        query(':enter', stagger('100ms', [
          animate('0.3s ease-in', keyframes([
            style({opacity: 0, transform: 'translateX(-15%)', offset: 0}),
            style({opacity: .5, transform: 'translateX(15px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateX(0)',     offset: 1.0}),
          ]))]), {optional: true}),
        query(':leave', stagger('100ms', [
          animate('0.3s ease-in', keyframes([
            style({opacity: 1, transform: 'translateX(0)', offset: 0}),
            style({opacity: .5, transform: 'translateX(15px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateX(-15%)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
  ]
})

export class SearchComponent implements OnInit {
  results: Array<any> = [];
  search: string = '';

  constructor(
    private searchService: SearchService,
    private router: Router,
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
  
  onKey(event: any) {
    const search = event.target.value;
    if (search != '') {
      this.results = [];
      this.searchService.getResults(search).subscribe(res => {
        this.results = res.results;
      });
    }
  }
  
  gotoDetail(result: any) {
    this.results = [];
    this.search = '';
    this.router.navigate([result.media_type + '/' + result.id]); 
  }
}