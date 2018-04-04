webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\n    <div class=\"navbar-brand\">\n        <a class=\"navbar-item\" routerLink=\"/\">Movie Paradise</a>\n        <div class=\"navbar-item\"><a routerLink=\"/movies/now_playing\">Movies</a></div>\n        <div class=\"navbar-item\"><a routerLink=\"/tvs/airing_today/page/1\">Tv Show</a></div>\n        <div class=\"navbar-item\"><a routerLink=\"/persons/popular\">People</a></div>\n        <div class=\"navbar-item\"><a routerLink=\"/news\">News</a></div>\n        <div class=\"navbar-item\"><a>More Coming Soon</a></div>\n        <div class=\"navbar-item\" *ngIf=\"sessionId != ''\"><a>{{ username }}</a></div>\n        <div class=\"navbar-item\" *ngIf=\"sessionId != ''\"><a (click)=\"logout()\">Logout</a></div>\n    \n        <button class=\"button navbar-burger\">\n            <span></span>\n            <span></span>\n            <span></span>\n        </button>\n    </div>\n</nav>\n\n<!--The whole content below can be removed with the new code.-->\n<!--<div class=\"row\" *ngIf=\"sessionId == ''\">-->\n<!--    <form class=\"col s12\">-->\n<!--        <div class=\"row\">-->\n<!--            <div class=\"input-field col s12\">-->\n<!--                <input id=\"username\" name=\"username\" type=\"text\" class=\"validate\" [(ngModel)]=\"username\">-->\n<!--                <label for=\"username\">Username</label>-->\n<!--            </div>-->\n<!--        </div>-->\n<!--        <div class=\"row\">-->\n<!--            <div class=\"input-field col s12\">-->\n<!--                <input id=\"password\" name=\"password\" type=\"password\" class=\"validate\" [(ngModel)]=\"password\">-->\n<!--                <label for=\"password\">Password</label>-->\n<!--            </div>-->\n<!--        </div>-->\n<!--        <a (click)=\"login()\" class=\"waves-effect waves-light btn\">Login</a>-->\n<!--    </form>-->\n<!--</div>-->\n<div class=\"container fluid\">\n  <h1 class=\"text-center\">Welcome to {{title}}!!</h1>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("./src/app/services/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(sessionService) {
        this.sessionService = sessionService;
        this.title = 'Movies Paradise';
        this.username = 'samliweisen';
        this.password = 'kanamemadoka2017';
        this.sessionId = '';
    }
    AppComponent.prototype.login = function () {
        var _this = this;
        this.sessionService.getToken(this.username, this.password).then(function (res) { return _this.sessionId = res.session_id; });
    };
    AppComponent.prototype.logout = function () {
        this.sessionId = '';
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_movies_movies_component__ = __webpack_require__("./src/app/pages/movies/movies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_movie_movie_component__ = __webpack_require__("./src/app/pages/movie/movie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_movie_movie_component__ = __webpack_require__("./src/app/components/movie/movie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_movie_service__ = __webpack_require__("./src/app/services/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_session_service__ = __webpack_require__("./src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_news_service__ = __webpack_require__("./src/app/services/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_tv_service__ = __webpack_require__("./src/app/services/tv.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_person_person_component__ = __webpack_require__("./src/app/components/person/person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_movie_list_movie_list_component__ = __webpack_require__("./src/app/components/movie-list/movie-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_persons_persons_component__ = __webpack_require__("./src/app/pages/persons/persons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_person_service__ = __webpack_require__("./src/app/services/person.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_news_news_component__ = __webpack_require__("./src/app/pages/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_tvs_tvs_component__ = __webpack_require__("./src/app/pages/tvs/tvs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_home_home_component__ = __webpack_require__("./src/app/pages/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_movies_movies_component__["a" /* MoviesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_movie_movie_component__["a" /* MovieComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_movie_movie_component__["a" /* SingleMovieComponent */],
                __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_person_person_component__["a" /* PersonComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_movie_list_movie_list_component__["a" /* MovieListComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_news_news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tvs_tvs_component__["a" /* TvsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_persons_persons_component__["a" /* PersonsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pages_home_home_component__["a" /* HomeComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_21__pages_home_home_component__["a" /* HomeComponent */]
                    },
                    {
                        path: 'login',
                        component: __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */]
                    },
                    {
                        path: 'news',
                        component: __WEBPACK_IMPORTED_MODULE_19__pages_news_news_component__["a" /* NewsComponent */]
                    },
                    {
                        path: 'tvs/:type',
                        component: __WEBPACK_IMPORTED_MODULE_20__pages_tvs_tvs_component__["a" /* TvsComponent */]
                    },
                    {
                        path: 'tvs/:type/page/:page',
                        component: __WEBPACK_IMPORTED_MODULE_20__pages_tvs_tvs_component__["a" /* TvsComponent */]
                    },
                    {
                        path: 'movies',
                        component: __WEBPACK_IMPORTED_MODULE_7__pages_movies_movies_component__["a" /* MoviesComponent */]
                    },
                    {
                        path: 'movies/:type',
                        component: __WEBPACK_IMPORTED_MODULE_7__pages_movies_movies_component__["a" /* MoviesComponent */]
                    },
                    {
                        path: 'movies/:type/page/:page',
                        component: __WEBPACK_IMPORTED_MODULE_7__pages_movies_movies_component__["a" /* MoviesComponent */]
                    },
                    {
                        path: 'movie/:id',
                        component: __WEBPACK_IMPORTED_MODULE_8__pages_movie_movie_component__["a" /* MovieComponent */]
                    },
                    {
                        path: 'movie/:id/:section',
                        component: __WEBPACK_IMPORTED_MODULE_8__pages_movie_movie_component__["a" /* MovieComponent */]
                    },
                    {
                        path: 'persons/:type',
                        component: __WEBPACK_IMPORTED_MODULE_17__pages_persons_persons_component__["a" /* PersonsComponent */]
                    }
                ]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["d" /* Title */],
                __WEBPACK_IMPORTED_MODULE_10__services_movie_service__["a" /* MovieService */],
                __WEBPACK_IMPORTED_MODULE_18__services_person_service__["a" /* PersonService */],
                __WEBPACK_IMPORTED_MODULE_12__services_news_service__["a" /* NewsService */],
                __WEBPACK_IMPORTED_MODULE_13__services_tv_service__["a" /* TvService */],
                __WEBPACK_IMPORTED_MODULE_11__services_session_service__["a" /* SessionService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/movie-list/movie-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/movie-list/movie-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns is-mobile is-multiline\" *ngIf=\"movies\">\n    <single-movie class=\"column is-6-mobile is-3-tablet is-2-desktop is-2-widescreen is-2-fullhd\" *ngFor=\"let movie of movies.results\" [movie]=movie></single-movie>\n</div>\n<nav class=\"pagination is-centered\" role=\"navigation\" aria-label=\"pagination\" *ngIf=\"totalPages\">\n    <a class=\"pagination-previous\">Previous</a>\n    <a class=\"pagination-next\">Next page</a>\n    <ul class=\"pagination-list\">\n        <li *ngFor=\"let page of totalPages\">\n            <a [routerLink]=\"['/',list + 's', type, 'page', (page+1)]\" class=\"pagination-link\" [class.is-current]=\"currentPage == (page+1)\"  aria-current=\"page\">{{page+1}}</a>\n        </li>\n    </ul>\n</nav>"

/***/ }),

/***/ "./src/app/components/movie-list/movie-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_movies__ = __webpack_require__("./src/app/models/movies.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovieListComponent = /** @class */ (function () {
    function MovieListComponent() {
    }
    MovieListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MovieListComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MovieListComponent.prototype, "list", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], MovieListComponent.prototype, "totalPages", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], MovieListComponent.prototype, "currentPage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_movies__["a" /* Movies */])
    ], MovieListComponent.prototype, "movies", void 0);
    MovieListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'movie-list',
            template: __webpack_require__("./src/app/components/movie-list/movie-list.component.html"),
            styles: [__webpack_require__("./src/app/components/movie-list/movie-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MovieListComponent);
    return MovieListComponent;
}());



/***/ }),

/***/ "./src/app/components/movie/movie.component.css":
/***/ (function(module, exports) {

module.exports = ".movie {\n    border-radius: 5px;\n    position: relative;\n    display: block;\n}\n.rating {\n    border-radius: 5px;\n    padding: 5px;\n    background-color: #ffb207;\n    color: #ffffff;\n}\n.movie_title {\n    color: #cac1c1;\n    font-size: 1rem;\n}\n.movie .rating {\n    position: absolute;\n    top: 12px;\n    left: 12px;\n}\n.movie img {\n    border-radius: 5px;\n}"

/***/ }),

/***/ "./src/app/components/movie/movie.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"movie\" [routerLink]=\"['/movie', movie.id]\">\n    <figure class=\"image\">\n        <img src=\"https://image.tmdb.org/t/p/w500{{movie.poster_path}}\" alt=\"{{ movie.title }}\" />\n    </figure>\n    <div class=\"movie_title\">{{movie.title}}</div>\n    <span class=\"rating\">{{movie.vote_average}}</span>\n</a>"

/***/ }),

/***/ "./src/app/components/movie/movie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleMovieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_movie__ = __webpack_require__("./src/app/models/movie.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SingleMovieComponent = /** @class */ (function () {
    function SingleMovieComponent() {
    }
    SingleMovieComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_movie__["a" /* Movie */])
    ], SingleMovieComponent.prototype, "movie", void 0);
    SingleMovieComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'single-movie',
            template: __webpack_require__("./src/app/components/movie/movie.component.html"),
            styles: [__webpack_require__("./src/app/components/movie/movie.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SingleMovieComponent);
    return SingleMovieComponent;
}());



/***/ }),

/***/ "./src/app/components/person/person.component.css":
/***/ (function(module, exports) {

module.exports = ".cast__image img {\n    border-radius: 5px;\n}\n.cast__info {\n    background-color: #ffffff;\n    padding: 10px;\n}\n.cast__name {\n    font-weight: bold;\n}"

/***/ }),

/***/ "./src/app/components/person/person.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cast\">\n    <div class=\"cast__image\">\n        <img src=\"https://image.tmdb.org/t/p/w500{{cast.profile_path}}\">\n    </div>\n    <div class=\"cast__info\">\n        <span class=\"cast__name\">{{ cast.name }}</span>\n        <span *ngIf=\"cast.character\">{{ cast.character }}</span>\n        <span *ngIf=\"cast.job\">{{cast.job}}</span>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/person/person.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_cast__ = __webpack_require__("./src/app/models/cast.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonComponent = /** @class */ (function () {
    function PersonComponent() {
    }
    PersonComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_cast__["a" /* Cast */])
    ], PersonComponent.prototype, "cast", void 0);
    PersonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'person',
            template: __webpack_require__("./src/app/components/person/person.component.html"),
            styles: [__webpack_require__("./src/app/components/person/person.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonComponent);
    return PersonComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <form class=\"col s12\">\n        <div class=\"row\">\n            <div class=\"input-field col s12\">\n                <input id=\"username\" type=\"text\" class=\"validate\">\n                <label for=\"username\">Username</label>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"input-field col s12\">\n                <input id=\"password\" type=\"password\" class=\"validate\">\n                <label for=\"password\">Password</label>\n            </div>\n        </div>\n        <a class=\"waves-effect waves-light btn\">Login</a>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/cast.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cast; });
var Cast = /** @class */ (function () {
    function Cast() {
    }
    return Cast;
}());



/***/ }),

/***/ "./src/app/models/movie.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Movie; });
var Movie = /** @class */ (function () {
    function Movie() {
    }
    return Movie;
}());



/***/ }),

/***/ "./src/app/models/movies.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Movies; });
var Movies = /** @class */ (function () {
    function Movies() {
    }
    return Movies;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<movie-list [movies]=movies [type]=type [list]=list [totalPages]=totalPages [currentPage]=currentPage></movie-list>\n\n<movie-list [movies]=tvs [type]=type [list]=list [totalPages]=totalPages [currentPage]=currentPage></movie-list>"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_movie_service__ = __webpack_require__("./src/app/services/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tv_service__ = __webpack_require__("./src/app/services/tv.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(movieService, tvService) {
        this.movieService = movieService;
        this.tvService = tvService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService.getMovies('now_playing', 1).then(function (movies) {
            var list = movies.results.slice(0, 6);
            movies.results = list;
            _this.movies = movies;
        });
        this.tvService.getTvs('airing_today', 1).then(function (tvs) {
            var list = tvs.results.slice(0, 6);
            tvs.results = list;
            _this.tvs = tvs;
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_movie_service__["a" /* MovieService */],
            __WEBPACK_IMPORTED_MODULE_2__services_tv_service__["a" /* TvService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/movie/movie.component.css":
/***/ (function(module, exports) {

module.exports = "img {\n    width: 100%;\n}\n\n#header {\n    padding-top: 40px;\n    color: #ffffff;\n    position: relative;\n}\n\n.backdrop-poster {\n    position: relative;\n    -webkit-box-shadow: 0px -66px 5px 5px #000 inset;\n            box-shadow: 0px -66px 5px 5px #000 inset;\n}\n\n.basic-info {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    padding: 10px;\n}\n\n.bg-black {\n    background: #06131a;\n    color: #ffffff;\n}\n\n.data {\n    margin-bottom: 50px;\n}\n\n.label {\n    color: #116f8c;\n}\n\n.genre {\n    display: inline-block;\n    background: #ffffff;\n    color: #000000;\n    padding: 5px;\n    border-radius: 5px;\n    margin: 0 5px 5px 0;\n    font-size: 11px;\n}\n\n.release-date {\n    opacity: 0.6;\n}\n\n.card-content {\n    padding: 10px;\n}\n\n#casts .name {\n    font-weight: bold;\n}"

/***/ }),

/***/ "./src/app/pages/movie/movie.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"goBack()\">Back</button>\n\n<div id=\"movie\" *ngIf=\"movie\">\n    <div id=\"header\">\n        <div class=\"backdrop-poster\">\n            <img src=\"https://image.tmdb.org/t/p/w1400_and_h450_bestv2/{{movie.backdrop_path}}\" />\n            <div class=\"basic-info\">\n                <h5 class=\"movie-title\">{{ movie.title }}</h5>\n                <span class=\"release-date\">{{movie.release_date.substr(0, 4)}}</span>\n                <span class=\"rating\">{{movie.vote_average}}</span>\n            </div>\n        </div>\n        <div class=\"info columns section\">\n            <div class=\"bg-black columns column s6\">\n                <div class=\"column is-4\">\n                    <img src=\"https://image.tmdb.org/t/p/w500{{movie.poster_path}}\" />\n                </div>\n                <div class=\"column is-8\">\n                    <p>{{movie.tagline}}</p>\n                    <p>{{ movie.overview }}</p>\n                    <div class=\"genres\">\n                        <span class=\"label\">Genres: </span>\n                        <span *ngFor=\"let genre of movie.genres\" class=\"genre\">{{genre.name}}</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"column s6\">\n                <div id=\"videos\" *ngIf=\"movieVideo\">\n                    <iframe id=\"ytplayer\" type=\"text/html\" width=\"100%\" height=\"315\"\n                        [src]=\"getYoutubeEmbed(movieVideo.results[0].key)\"\n                        frameborder=\"0\">\n                    </iframe>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"columns\">\n        <div class=\"bg-black column is-2\">\n            <h5>Movie Data</h5>\n            <div class=\"data\">\n                <h6 class=\"label\">Status:</h6>\n                <p>{{movie.status}}</p>\n            </div>\n            <div class=\"data\">\n                <h6 class=\"label\">Release Information:</h6>\n                <p>{{movie.release_date}}</p>\n            </div>\n            <div class=\"data\">\n                <h6 class=\"label\">Original Language:</h6>\n                <p>{{movie.original_language}}</p>\n            </div>\n            <div class=\"data\">\n                <h6 class=\"label\">Runtime:</h6>\n                <p>{{movie.runtime}}</p>\n            </div>\n            <div class=\"data\">\n                <h6 class=\"label\">Revenue:</h6>\n                <p>{{movie.revenue}}</p>\n            </div>\n            <div class=\"data\">\n                <h6 class=\"label\">Homepage:</h6>\n                <p><a href=\"{{movie.homepage}}\" target=\"_blank\">{{movie.homepage}}</a></p>\n            </div>\n            <div class=\"data\">\n                <h6 class=\"label\">Production Companies:</h6>\n                <p *ngFor=\"let company of movie.production_companies\">{{company.name}}</p>\n            </div>\n        </div>\n        <div class=\"column is-10\">\n            <div class=\"\" *ngIf=\"!section\">\n                <div id=\"casts\" *ngIf=\"movieCredits\">\n                    <div class=\"columns\">\n                        <h5 class=\"left\">Feature Casts</h5>\n                        <a class=\"right\" [routerLink]=\"['/movie', movie.id, 'casts']\">View full casts</a>\n                    </div>\n                    <div class=\"columns\">\n                        <person class=\"column 6-mobile is-3-tablet is-2-desktop is-2-widescreen is-2-fullhd\" *ngFor=\"let cast of movieCredits.cast.slice(0, 6)\" [cast]=cast></person>\n                    </div>\n                </div>\n                <div id=\"crews\" *ngIf=\"movieCredits\">\n                    <div class=\"columns\">\n                        <h5 class=\"left\">Feature Crews</h5>\n                        <a class=\"right\" [routerLink]=\"['/movie', movie.id, 'casts']\">View full crews</a>\n                    </div>\n                    <div class=\"columns\">\n                        <person class=\"column 6-mobile is-3-tablet is-2-desktop is-2-widescreen is-2-fullhd\" *ngFor=\"let cast of movieCredits.crew.slice(0, 6)\" [cast]=cast></person>\n                    </div>\n                </div>\n                <div id=\"similar-movies\" *ngIf=\"similarMovies\">\n                    <div class=\"columns\">\n                        <h5 class=\"left\">Similar Movies</h5>\n                        <a class=\"right\" [routerLink]=\"['/movie', movie.id, 'similar']\">View All Similar Movies</a>\n                    </div>\n                    <div class=\"columns\">\n                        <movie-list type=\"movie\" list=\"movie\" [movies]=(similarMovies)></movie-list>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"\">\n        <ul class=\"tabs\">\n            <li class=\"tab col s3\"><a (click)=\"changeSection('reviews')\" [routerLink]=\"['/movie', movie.id, 'reviews']\">Reviews</a></li>\n            <li class=\"tab col s3\"><a (click)=\"changeSection('videos')\" [routerLink]=\"['/movie', movie.id, 'videos']\">Videos</a></li>\n            <li class=\"tab col s3\"><a (click)=\"changeSection('images')\" [routerLink]=\"['/movie', movie.id, 'images']\">Images</a></li>\n            <li class=\"tab col s3\"><a (click)=\"changeSection('casts')\" [routerLink]=\"['/movie', movie.id, 'casts']\">Casts</a></li>\n        </ul>\n    </div>\n    <div class=\"container\" *ngIf=\"section == 'reviews'\">\n        <div id=\"reviews\" *ngIf=\"movieReviews\">\n            <h3>Reviews</h3>\n            <div class=\"row card\" *ngFor=\"let review of movieReviews.results\">\n                <div class=\"col s2\">\n                    <p>{{ review.author }}</p>\n                </div>\n                <div class=\"col s10\">\n                    <p>{{ review.content }}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"container\" *ngIf=\"section == 'casts'\">\n        <div class=\"row\" *ngIf=\"movieCredits\">\n            <div class=\"col s6\">\n                <div class=\"row\" *ngFor=\"let cast of movieCredits.cast\">\n                    <div class=\"col s4\">\n                        <img *ngIf=\"cast.profile_path\" src=\"https://image.tmdb.org/t/p/w500{{cast.profile_path}}\">\n                    </div>\n                    <div class=\"col s8\">\n                        <p>{{ cast.name }}</p>\n                        <p>{{ cast.character }}</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col s6\">\n                <div class=\"row\" *ngFor=\"let crew of movieCredits.crew\">\n                    <div class=\"col s4\">\n                        <img *ngIf=\"crew.profile_path\" src=\"https://image.tmdb.org/t/p/w500{{crew.profile_path}}\">\n                    </div>\n                    <div class=\"col s8\">\n                        <p>{{ crew.name }}</p>\n                        <p>{{ crew.job }}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"container\" *ngIf=\"section == 'images'\">\n        <div id=\"images\" *ngIf=\"movieImages\">\n            <h3>Posters</h3>\n            <div class=\"row\">\n                <div class=\"col l2\" *ngFor=\"let poster of movieImages.posters\">\n                    <img src=\"https://image.tmdb.org/t/p/w500{{poster.file_path}}\" />\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col l12\" *ngFor=\"let backdrop of movieImages.backdrops\">\n                    <img src=\"https://image.tmdb.org/t/p/w500{{backdrop.file_path}}\" />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/movie/movie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_movie_service__ = __webpack_require__("./src/app/services/movie.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Import the switchMap operator to use later with the route parameters Observable.


var MovieComponent = /** @class */ (function () {
    function MovieComponent(movieService, route, location, titleService, sanitizier) {
        this.movieService = movieService;
        this.route = route;
        this.location = location;
        this.titleService = titleService;
        this.sanitizier = sanitizier;
    }
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (typeof this.route.snapshot.params['section'] != 'undefined') {
            this.section = this.route.snapshot.params['section'];
        }
        this.route.params.subscribe(function (params) {
            //scroll page to top
            window.scrollTo(0, 0);
            _this.movieService.getMovieDetail(+params['id'])
                .then(function (movie) {
                _this.movie = movie;
                _this.titleService.setTitle(movie.title);
            });
            _this.movieService.getMovieImages(+params['id'])
                .then(function (movieImages) { return _this.movieImages = movieImages; });
            _this.movieService.getMovieCredits(+params['id'])
                .then(function (movieCredits) { return _this.movieCredits = movieCredits; });
            _this.movieService.getMovieVideos(+params['id'])
                .then(function (movieVideo) { return _this.movieVideo = movieVideo; });
            _this.movieService.getMovieReviews(+params['id'])
                .then(function (movieReviews) {
                _this.movieReviews = movieReviews;
            });
            _this.movieService.getSimilarMovies(+params['id'])
                .then(function (similarMovies) {
                _this.similarMovies = similarMovies;
            });
        });
    };
    MovieComponent.prototype.goBack = function () {
        this.location.back();
    };
    MovieComponent.prototype.changeSection = function (section) {
        this.section = section;
    };
    MovieComponent.prototype.getYoutubeEmbed = function (key) {
        return this.sanitizier.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + key + '?autoplay=0');
    };
    MovieComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'movie',
            template: __webpack_require__("./src/app/pages/movie/movie.component.html"),
            styles: [__webpack_require__("./src/app/pages/movie/movie.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_movie_service__["a" /* MovieService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["d" /* Title */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], MovieComponent);
    return MovieComponent;
}());



/***/ }),

/***/ "./src/app/pages/movies/movies.component.css":
/***/ (function(module, exports) {

module.exports = ".selected {\n    background: #cccccc;\n}\n\na.active {\n    text-decoration: underline;\n}"

/***/ }),

/***/ "./src/app/pages/movies/movies.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tabs is-centered\">\n    <ul>\n        <li class=\"tab col s3\" [class.is-active]=\"selectedLink == link\" *ngFor=\"let link of links\"><a [routerLink]=\"['/movies', link]\" (click)=\"selectedLink=link\">{{formateTitle(link)}}</a></li>\n    </ul>\n</div>\n\n<movie-list [movies]=movies [type]=type [list]=list [totalPages]=totalPages [currentPage]=currentPage></movie-list>\n"

/***/ }),

/***/ "./src/app/pages/movies/movies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_movie_service__ = __webpack_require__("./src/app/services/movie.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(titleService, movieService, route) {
        this.titleService = titleService;
        this.movieService = movieService;
        this.route = route;
    }
    MoviesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.list = 'movie';
        this.links = [
            'now_playing',
            'popular',
            'top_rated',
            'upcoming'
        ];
        this.selectedLink = 'now_playing';
        this.route.params
            .switchMap(function (params) { return _this.movieService.getMovies(params['type'], params['page']); })
            .subscribe(function (movies) {
            _this.type = _this.route.snapshot.params['type'];
            _this.selectedLink = _this.route.snapshot.params['type'];
            _this.movies = movies;
            _this.currentPage = movies.page;
            _this.totalPages = Array(movies.total_pages).fill(1).map(function (x, i) { return i; });
            // set Page title
            var title = _this.formateTitle(_this.route.snapshot.params['type']);
            _this.titleService.setTitle(title);
        });
    };
    MoviesComponent.prototype.onSelect = function (movie) {
        this.selectedMovie = movie;
    };
    //need to find out string vs String
    MoviesComponent.prototype.formateTitle = function (title) {
        // format 'now_playing' to 'Now Playing'
        var result = title.split('_').map(function (word) {
            //make word to Capitalize
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
        return result;
    };
    MoviesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'movies',
            template: __webpack_require__("./src/app/pages/movies/movies.component.html"),
            styles: [__webpack_require__("./src/app/pages/movies/movies.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["d" /* Title */],
            __WEBPACK_IMPORTED_MODULE_3__services_movie_service__["a" /* MovieService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/app/pages/news/news.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns is-multiline\">\n    <a class=\"column is-3\" *ngFor=\"let item of news\" href=\"{{item.link}}\" target=\"_blank\">\n        <div class=\"card\">\n            <div class=\"card-image\">\n                <figure class=\"image\">\n                    <img src=\"{{item.featured_image.source}}\" alt=\"Placeholder image\">\n                </figure>\n            </div>\n            <div class=\"card-content\">\n                <div class=\"content\">\n                    <p [innerHTML]=item.title></p>\n                </div>\n            </div>\n        </div>\n    </a>\n</div>"

/***/ }),

/***/ "./src/app/pages/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_news_service__ = __webpack_require__("./src/app/services/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsComponent = /** @class */ (function () {
    function NewsComponent(newsService, titleService) {
        this.newsService = newsService;
        this.titleService = titleService;
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsService.getNewsFromRottentomatoes()
            .then(function (news) {
            _this.news = news;
            _this.titleService.setTitle('Movie Paradise - News');
        });
    };
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'news',
            template: __webpack_require__("./src/app/pages/news/news.component.html"),
            styles: [__webpack_require__("./src/app/pages/news/news.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_news_service__["a" /* NewsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* Title */]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/pages/persons/persons.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/persons/persons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tabs is-centered\">\n  <ul>\n      <li class=\"tab col s3\" *ngFor=\"let link of links\"><a [class.is-active]=\"selectedLink == link\" [routerLink]=\"['/persons', link]\" (click)=\"selectedLink=link\">{{link}}</a></li>\n  </ul>\n</div>\n<div class=\"columns is-mobile is-multiline\" *ngIf=\"persons\">\n  <a *ngFor=\"let p of persons.results\" class=\"column is-6-mobile is-3-tablet is-2-desktop is-2-widescreen\">\n    <figure class=\"image\">\n      <img src=\"https://image.tmdb.org/t/p/w500{{p.profile_path}}\" alt=\"{{ p.name }}\" />\n    </figure>\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/persons/persons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_person_service__ = __webpack_require__("./src/app/services/person.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonsComponent = /** @class */ (function () {
    function PersonsComponent(titleService, personService, route) {
        this.titleService = titleService;
        this.personService = personService;
        this.route = route;
    }
    PersonsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.links = [
            'popular'
        ];
        this.selectedLink = 'popular';
        this.route.params
            .switchMap(function (params) { return _this.personService.getPopular(params['type']); })
            .subscribe(function (persons) {
            _this.persons = persons;
        });
    };
    PersonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-persons',
            template: __webpack_require__("./src/app/pages/persons/persons.component.html"),
            styles: [__webpack_require__("./src/app/pages/persons/persons.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["d" /* Title */],
            __WEBPACK_IMPORTED_MODULE_3__services_person_service__["a" /* PersonService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], PersonsComponent);
    return PersonsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tvs/tvs.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/tvs/tvs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tabs is-centered\">\n    <ul>\n        <li class=\"tab col s3\" [class.is-active]=\"selectedLink == link\" *ngFor=\"let link of links\"><a [routerLink]=\"['/tvs', link]\" (click)=\"selectedLink=link\">{{formateTitle(link)}}</a></li>\n    </ul>\n</div>\n\n<movie-list [movies]=tvs [type]=type [list]=list [totalPages]=totalPages [currentPage]=currentPage></movie-list>"

/***/ }),

/***/ "./src/app/pages/tvs/tvs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tv_service__ = __webpack_require__("./src/app/services/tv.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TvsComponent = /** @class */ (function () {
    function TvsComponent(titleService, tvService, route) {
        this.titleService = titleService;
        this.tvService = tvService;
        this.route = route;
    }
    TvsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.list = 'tv';
        this.links = [
            'airing_today',
            'on_the_air',
            'popular',
            'top_rated'
        ];
        this.selectedLink = 'airing_today';
        this.route.params
            .switchMap(function (params) { return _this.tvService.getTvs(params['type'], params['page']); })
            .subscribe(function (tvs) {
            _this.type = _this.route.snapshot.params['type'];
            _this.selectedLink = _this.route.snapshot.params['type'];
            _this.tvs = tvs;
            _this.currentPage = tvs.page;
            _this.totalPages = Array(tvs.total_pages).fill(1).map(function (x, i) { return i; });
            // set Page title
            var title = _this.formateTitle(_this.route.snapshot.params['type']);
            _this.titleService.setTitle(title);
        });
    };
    //need to find out string vs String
    TvsComponent.prototype.formateTitle = function (title) {
        // format 'now_playing' to 'Now Playing'
        var result = title.split('_').map(function (word) {
            //make word to Capitalize
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
        return result;
    };
    TvsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'tvs',
            template: __webpack_require__("./src/app/pages/tvs/tvs.component.html"),
            styles: [__webpack_require__("./src/app/pages/tvs/tvs.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["d" /* Title */],
            __WEBPACK_IMPORTED_MODULE_3__services_tv_service__["a" /* TvService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], TvsComponent);
    return TvsComponent;
}());



/***/ }),

/***/ "./src/app/services/movie.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
        this.baseUrl = 'https://api.themoviedb.org/3/movie/';
        this.apiKey = '?api_key=8109b23cc9abaf02cf3c699ec62ccc19';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    MovieService.prototype.getMovies = function (type, page) {
        var moviesUrl = this.baseUrl + type + this.apiKey + '&page=' + page;
        var movies = this.http.get(moviesUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return movies;
    };
    MovieService.prototype.getMovieDetail = function (id) {
        var movieDetail = this.baseUrl + id + this.apiKey;
        var movie = this.http.get(movieDetail)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return movie;
    };
    MovieService.prototype.getMovieImages = function (id) {
        var movieCredits = this.baseUrl + id + '/images' + this.apiKey;
        return this.http.get(movieCredits)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MovieService.prototype.getMovieCredits = function (id) {
        var movieCredits = this.baseUrl + id + '/credits' + this.apiKey;
        return this.http.get(movieCredits)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MovieService.prototype.getMovieVideos = function (id) {
        var movieVideo = this.baseUrl + id + '/videos' + this.apiKey;
        return this.http.get(movieVideo)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MovieService.prototype.getMovieReviews = function (id) {
        var movieReviews = this.baseUrl + id + '/reviews' + this.apiKey;
        return this.http.get(movieReviews)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MovieService.prototype.getSimilarMovies = function (id) {
        var similarMovies = this.baseUrl + id + '/similar' + this.apiKey;
        return this.http.get(similarMovies)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MovieService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    MovieService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/app/services/news.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsService = /** @class */ (function () {
    function NewsService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    NewsService.prototype.getNewsFromRottentomatoes = function () {
        var url = 'https://editorial.rottentomatoes.com/wp-json/articles/';
        var news = this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return news;
    };
    NewsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    NewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "./src/app/services/person.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonService = /** @class */ (function () {
    function PersonService(http) {
        this.http = http;
        this.baseUrl = 'https://api.themoviedb.org/3/person/';
        this.apiKey = '?api_key=8109b23cc9abaf02cf3c699ec62ccc19';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    PersonService.prototype.getPopular = function (type) {
        var personsUrl = this.baseUrl + type + this.apiKey + '&page=1';
        var persons = this.http.get(personsUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return persons;
    };
    PersonService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    PersonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PersonService);
    return PersonService;
}());



/***/ }),

/***/ "./src/app/services/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SessionService = /** @class */ (function () {
    function SessionService(http) {
        this.http = http;
        this.baseUrl = 'https://api.themoviedb.org/3/authentication/';
        this.apiKey = '?api_key=8109b23cc9abaf02cf3c699ec62ccc19';
    }
    SessionService.prototype.getToken = function (username, password) {
        var _this = this;
        var newTokenUrl = this.baseUrl + 'token/new' + this.apiKey;
        var newToken = this.http.get(newTokenUrl)
            .toPromise()
            .then(function (response) { return _this.validateLogin(username, password, response.json()); })
            .catch(this.handleError);
        return newToken;
    };
    SessionService.prototype.validateLogin = function (username, password, token) {
        var _this = this;
        var data = '&username=' + username + '&password=' + password + '&request_token=' + token.request_token;
        var validateUrl = this.baseUrl + 'token/validate_with_login' + this.apiKey + data;
        var validateToken = this.http.get(validateUrl)
            .toPromise()
            .then(function (response) { return _this.getSession(response.json().request_token); })
            .catch(this.handleError);
        return validateToken;
    };
    SessionService.prototype.getSession = function (request_token) {
        var sessionUrl = this.baseUrl + 'session/new' + this.apiKey + '&request_token=' + request_token;
        var session = this.http.get(sessionUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return session;
    };
    SessionService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    SessionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/app/services/tv.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TvService = /** @class */ (function () {
    function TvService(http) {
        this.http = http;
        this.baseUrl = 'https://api.themoviedb.org/3/tv/';
        this.apiKey = '?api_key=8109b23cc9abaf02cf3c699ec62ccc19';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    TvService.prototype.getTvs = function (type, page) {
        var url = this.baseUrl + type + this.apiKey + '&page=' + page;
        var tvs = this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        return tvs;
    };
    TvService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    TvService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], TvService);
    return TvService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map