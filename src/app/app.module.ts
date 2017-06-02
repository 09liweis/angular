import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdGridListModule, MdCardModule } from '@angular/material';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';

import { MovieService } from './movie.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    MdGridListModule,
    MdCardModule,
    RouterModule.forRoot([
      {
        path: '',
        component: MoviesComponent
      },
      {
        path: 'movies',
        component: MoviesComponent
      },
      {
        path: 'movie/:id',
        component: MovieComponent
      }
    ]),
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
