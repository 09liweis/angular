import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { routes } from './routes';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/video.reducer';

import { AppComponent } from './app.component';

import { SingleMovieComponent } from './components/movie/movie.component';
import { MovieService } from './services/movie.service';
import { SessionService } from './services/session.service';
import { NewsService } from './services/news.service';
import { TvService } from './services/tv.service';
import { SearchService } from './services/search.service';
import {PersonService} from './services/person.service';

import { TabsComponent } from './components/tabs/tabs.component';
import { PersonComponent } from './components/person/person.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { LoginComponent } from './login/login.component';

import { MoviesComponent } from './pages/movies/movies.component';
import { MovieComponent } from './pages/movie/movie.component';
import { PersonsComponent } from './pages/persons/persons.component';
import { PersonPageComponent } from './pages/person/person.component';
import { NewsComponent } from './pages/news/news.component';
import { TvsComponent } from './pages/tvs/tvs.component';
import { HomeComponent } from './pages/home/home.component';
import { TvComponent } from './pages/tv/tv.component';

import { UtilsService } from './services/utils.service';

import { FormatTitlePipe } from './pipes/format-title.pipe';
import { ImageComponent } from './components/image/image.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImagesComponent } from './pages/images/images.component';
import { CastsComponent } from './pages/casts/casts.component';

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
    PersonPageComponent,
    TabsComponent,
    FormatTitlePipe,
    ImageComponent,
    GalleryComponent,
    ImagesComponent,
    CastsComponent
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      video: reducer
    }),
    RouterModule.forRoot(routes),
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
