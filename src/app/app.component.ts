import { Component, OnInit } from '@angular/core';
import { SessionService } from './services/session.service';
import { Token } from './models/token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Movies Paradise';
  username: string;
  password: string;
  token: Token;
  
  constructor(private sessionService: SessionService) {}
  
  login(): void {
    this.sessionService.getToken().then(res => console.log(res));
  }
}
