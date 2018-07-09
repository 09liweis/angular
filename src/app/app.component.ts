import { Component, OnInit } from '@angular/core';
import { SessionService } from './services/session.service';

import { Token } from './models/token';

import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import { Video } from './models/video';
import { AppState } from './app.state';
import * as VideoActions from './actions/video.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Movies Paradise';
  username: string = 'samliweisen';
  password: string = 'kanamemadoka2017';
  token: Token;
  sessionId: string = '';
  
  
  count: Observable<number>;
  
  menuOpen: Boolean = false;
  
  constructor(
    private sessionService: SessionService,
    
    private store: Store<AppState>
  ) {
    this.store.select('count').subscribe(state => {
      console.log(state);
    });
  }
  
  ngOnInit() {
  }
  
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  
  increment() {
    this.store.dispatch({ type: 'INCREMENT' });
  }
  
  login(): void {
    // this.sessionService.getToken(this.username, this.password).subscribe(res => this.sessionId = res.session_id);
  }
  
  logout(): void {
    this.sessionId = '';
  }
  
}
