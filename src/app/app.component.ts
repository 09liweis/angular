import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { SessionService } from './services/session.service';
import { SearchService } from './services/search.service';
import { Token } from './models/token';

import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
export class AppComponent {
  title: string = 'Movies Paradise';
  username: string = 'samliweisen';
  password: string = 'kanamemadoka2017';
  token: Token;
  sessionId: string = '';
  results: Array<any> = [];
  search: string = '';
  
  constructor(
    private sessionService: SessionService,
    private searchService: SearchService,
    private router: Router
  ) {}
  
  login(): void {
    this.sessionService.getToken(this.username, this.password).then(res => this.sessionId = res.session_id);
  }
  
  logout(): void {
    this.sessionId = '';
  }
  
  onKey(event: any) {
    const search = event.target.value;
    if (search != '') {
      this.results = [];
      this.searchService.getResults(search).then(res => {
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
