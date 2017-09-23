import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdGridListModule, MdCardModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieComponent } from './pages/movie/movie.component';
import { SingleMovieComponent } from './components/movie/movie.component';

import { MovieService } from './services/movie.service';
import { SessionService } from './services/session.service';
import { LoginComponent } from './login/login.component';
import { PersonComponent } from './components/person/person.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { PersonsComponent } from './pages/persons/persons.component';
import {PersonService} from './services/person.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    SingleMovieComponent,
    LoginComponent,
    PersonComponent,
    MovieListComponent,
    PersonsComponent
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
      },
      {
        path: 'movie/:id/:section',
        component: MovieComponent
      },
      {
        path:'persons/:type',
        component:PersonsComponent
      }
      
    ]),
  ],
  providers: [
    Title,
    MovieService,
    SessionService,
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
