import { Component, OnInit } from '@angular/core';
import { SessionService } from './services/session.service';
import { SearchService } from './services/search.service';
import { Token } from './models/token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Movies Paradise';
  username: string = 'samliweisen';
  password: string = 'kanamemadoka2017';
  token: Token;
  sessionId: string = '';
  search: string;
  
  constructor(
    private sessionService: SessionService,
    private searchService: SearchService
  ) {}
  
  login(): void {
    this.sessionService.getToken(this.username, this.password).then(res => this.sessionId = res.session_id);
  }
  
  logout(): void {
    this.sessionId = '';
  }
  
  onKey(event: any) {
    this.search = event.target.value;
    this.searchService.getResults(this.search).then(res => {
      console.log(res);
    });
  }
}
