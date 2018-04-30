import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieComponent } from './pages/movie/movie.component';
import { SingleMovieComponent } from './components/movie/movie.component';

import { MovieService } from './services/movie.service';
import { SessionService } from './services/session.service';
import { NewsService } from './services/news.service';
import { TvService } from './services/tv.service';
import { SearchService } from './services/search.service';
import {PersonService} from './services/person.service';

import { LoginComponent } from './login/login.component';
import { PersonComponent } from './components/person/person.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { PersonsComponent } from './pages/persons/persons.component';
import { PersonComponent } from './pages/person/person.component';

import { NewsComponent } from './pages/news/news.component';
import { TvsComponent } from './pages/tvs/tvs.component';
import { HomeComponent } from './pages/home/home.component';
import { TvComponent } from './pages/tv/tv.component';
import { UtilsService } from './services/utils.service';
import { PersonListComponent } from './components/person-list/person-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    SingleMovieComponent,
    LoginComponent,
    PersonComponent,
    MovieListComponent,
    NewsComponent,
    TvsComponent,
    PersonsComponent,
    HomeComponent,
    TvComponent,
    PersonListComponent,
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path: 'tvs/:type',
        component: TvsComponent
      },
      {
        path: 'tvs/:type/page/:page',
        component: TvsComponent
      },
      {
        path: 'tv/:id',
        component: TvComponent
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
        path: 'movies/:type/page/:page',
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
        path:'people/:type',
        component:PersonsComponent
      }
      
    ]),
  ],
  providers: [
    Title,
    MovieService,
    PersonService,
    NewsService,
    TvService,
    SessionService,
    SearchService,
    UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
