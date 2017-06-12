import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdGridListModule, MdCardModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';

import { MovieService } from './services/movie.service';
import { SessionService } from './services/session.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    MdGridListModule,
    MdCardModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'movies',
        component: MoviesComponent
      },
      {
        path: 'movies/:type',
        component: MoviesComponent
      },
      {
        path: 'movie/:id',
        component: MovieComponent
      }
    ]),
  ],
  providers: [
    Title,
    MovieService,
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
