import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieComponent } from './pages/movie/movie.component';
import { PersonsComponent } from './pages/persons/persons.component';
import { PersonPageComponent } from './pages/person/person.component';
import { NewsComponent } from './pages/news/news.component';
import { TvsComponent } from './pages/tvs/tvs.component';
import { HomeComponent } from './pages/home/home.component';
import { TvComponent } from './pages/tv/tv.component';
import { ImagesComponent } from './pages/images/images.component';

export const routes: Routes = [
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
        path: 'tv/:id/:section',
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
        path: 'persons/:type',
        component: PersonsComponent
    },
    {
        path: 'person/:id',
        component: PersonPageComponent
    },
    {
        path: 'person/:id/:section',
        component: PersonPageComponent
    },
    {
        path: ':type/:id/images',
        component: ImagesComponent
    },
]