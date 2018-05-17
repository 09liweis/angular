import { Routes } from '@angular/router';

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
}
]