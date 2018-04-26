(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"nav\" role=\"navigation\" aria-label=\"main navigation\">\n    <div class=\"container\">\n        <a id=\"logo\" routerLink=\"/\">Movie Paradise</a>\n        <a class=\"nav__link\" routerLink=\"/movies/now_playing\">Movies</a>\n        <a class=\"nav__link\" routerLink=\"/tvs/airing_today/page/1\">Tv Show</a>\n        <a class=\"nav__link\" routerLink=\"/people/popular\">People</a>\n        <a class=\"nav__link\" routerLink=\"/news\">News</a>\n        <div class=\"navbar-item\" *ngIf=\"sessionId != ''\"><a>{{ username }}</a></div>\n        <div class=\"navbar-item\" *ngIf=\"sessionId != ''\"><a (click)=\"logout()\">Logout</a></div>\n        <div id=\"search\">\n            <input id=\"search__input\" placeholder=\"Search Something\" type=\"text\" (keyup)=\"onKey($event)\" [(ngModel)]=\"search\" />\n            <div id=\"search__results\" *ngIf=\"results\" [@searchAnimation]=\"results.length\">\n                <a class=\"search__result\" *ngFor=\"let result of results\" (click)=\"gotoDetail(result)\">\n                    <figure class=\"search__result-poster\">\n                        <img src=\"https://image.tmdb.org/t/p/w500{{result.poster_path}}\" />\n                        <figcaption>{{result.title ? result.title : result.name}}</figcaption>\n                    </figure>\n                </a>\n            </div>\n        </div>\n    </div>\n</nav>\n\n<!--The whole content below can be removed with the new code.-->\n<!--<div class=\"row\" *ngIf=\"sessionId == ''\">-->\n<!--    <form class=\"col s12\">-->\n<!--        <div class=\"row\">-->\n<!--            <div class=\"input-field col s12\">-->\n<!--                <input id=\"username\" name=\"username\" type=\"text\" class=\"validate\" [(ngModel)]=\"username\">-->\n<!--                <label for=\"username\">Username</label>-->\n<!--            </div>-->\n<!--        </div>-->\n<!--        <div class=\"row\">-->\n<!--            <div class=\"input-field col s12\">-->\n<!--                <input id=\"password\" name=\"password\" type=\"password\" class=\"validate\" [(ngModel)]=\"password\">-->\n<!--                <label for=\"password\">Password</label>-->\n<!--            </div>-->\n<!--        </div>-->\n<!--        <a (click)=\"login()\" class=\"waves-effect waves-light btn\">Login</a>-->\n<!--    </form>-->\n<!--</div>-->\n<main id=\"mainContainer\" class=\"container fluid\">\n  <router-outlet></router-outlet>\n</main>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#nav {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  background-color: rgba(51, 51, 51, 0.95);\n  z-index: 11;\n  padding: 10px 0; }\n\n#logo {\n  display: inline-block;\n  color: #ffffff;\n  margin-right: 10px;\n  font-size: 1.8em; }\n\n.nav__link {\n  display: inline-block;\n  padding: 10px;\n  color: #fcb208;\n  transition: color 0.3s;\n  position: relative; }\n\n.nav__link:before {\n    position: absolute;\n    content: '';\n    width: 0;\n    height: 1px;\n    bottom: 0;\n    left: 0;\n    background-color: #fcb208;\n    transition: width 0.4s ease; }\n\n.nav__link:hover:before {\n    width: 100%; }\n\n#mainContainer {\n  margin-top: 125px; }\n\n#search {\n  display: inline-block;\n  position: relative;\n  width: 300px; }\n\n#search__results {\n  position: absolute;\n  top: 55px;\n  left: 0;\n  width: 100%; }\n\n.search__result {\n  display: block;\n  cursor: pointer;\n  padding: 10px;\n  transition: all 0.2s ease;\n  color: #ffffff;\n  background-color: #232b31; }\n\n.search__result:hover {\n    color: #fcb208; }\n\n.search__result-poster img {\n  display: inline-block;\n  vertical-align: middle;\n  width: 20%; }\n\n.search__result-poster figcaption {\n  display: inline-block;\n  vertical-align: middle; }\n\n#search__input {\n  width: 100%;\n  padding: 10px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(sessionService, searchService, router) {
        this.sessionService = sessionService;
        this.searchService = searchService;
        this.router = router;
        this.title = 'Movies Paradise';
        this.username = 'samliweisen';
        this.password = 'kanamemadoka2017';
        this.sessionId = '';
        this.results = [];
        this.search = '';
    }
    AppComponent.prototype.login = function () {
        var _this = this;
        this.sessionService.getToken(this.username, this.password).then(function (res) { return _this.sessionId = res.session_id; });
    };
    AppComponent.prototype.logout = function () {
        this.sessionId = '';
    };
    AppComponent.prototype.onKey = function (event) {
        var _this = this;
        var search = event.target.value;
        if (search != '') {
            this.results = [];
            this.searchService.getResults(search).then(function (res) {
                _this.results = res.results;
            });
        }
    };
    AppComponent.prototype.gotoDetail = function (result) {
        this.results = [];
        this.search = '';
        if (result.media_type == 'movie') {
            this.router.navigate([result.media_type + '/' + result.id]);
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('searchAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["stagger"])('100ms', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: 'translateX(-15%)', offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: .5, transform: 'translateX(15px)', offset: 0.3 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
                            ]))
                        ]), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["stagger"])('100ms', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: .5, transform: 'translateX(15px)', offset: 0.3 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, transform: 'translateX(-15%)', offset: 1.0 }),
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_movies_movies_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/movies/movies.component */ "./src/app/pages/movies/movies.component.ts");
/* harmony import */ var _pages_movie_movie_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/movie/movie.component */ "./src/app/pages/movie/movie.component.ts");
/* harmony import */ var _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/movie/movie.component */ "./src/app/components/movie/movie.component.ts");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var _services_tv_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/tv.service */ "./src/app/services/tv.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _components_person_person_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/person/person.component */ "./src/app/components/person/person.component.ts");
/* harmony import */ var _components_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/movie-list/movie-list.component */ "./src/app/components/movie-list/movie-list.component.ts");
/* harmony import */ var _pages_persons_persons_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/persons/persons.component */ "./src/app/pages/persons/persons.component.ts");
/* harmony import */ var _services_person_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/person.service */ "./src/app/services/person.service.ts");
/* harmony import */ var _pages_news_news_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/news/news.component */ "./src/app/pages/news/news.component.ts");
/* harmony import */ var _pages_tvs_tvs_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/tvs/tvs.component */ "./src/app/pages/tvs/tvs.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_tv_tv_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/tv/tv.component */ "./src/app/pages/tv/tv.component.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _components_person_list_person_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/person-list/person-list.component */ "./src/app/components/person-list/person-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _pages_movies_movies_component__WEBPACK_IMPORTED_MODULE_8__["MoviesComponent"],
                _pages_movie_movie_component__WEBPACK_IMPORTED_MODULE_9__["MovieComponent"],
                _components_movie_movie_component__WEBPACK_IMPORTED_MODULE_10__["SingleMovieComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                _components_person_person_component__WEBPACK_IMPORTED_MODULE_17__["PersonComponent"],
                _components_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_18__["MovieListComponent"],
                _pages_news_news_component__WEBPACK_IMPORTED_MODULE_21__["NewsComponent"],
                _pages_tvs_tvs_component__WEBPACK_IMPORTED_MODULE_22__["TvsComponent"],
                _pages_persons_persons_component__WEBPACK_IMPORTED_MODULE_19__["PersonsComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"],
                _pages_tv_tv_component__WEBPACK_IMPORTED_MODULE_24__["TvComponent"],
                _components_person_list_person_list_component__WEBPACK_IMPORTED_MODULE_26__["PersonListComponent"],
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    {
                        path: '',
                        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"]
                    },
                    {
                        path: 'login',
                        component: _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"]
                    },
                    {
                        path: 'news',
                        component: _pages_news_news_component__WEBPACK_IMPORTED_MODULE_21__["NewsComponent"]
                    },
                    {
                        path: 'tvs/:type',
                        component: _pages_tvs_tvs_component__WEBPACK_IMPORTED_MODULE_22__["TvsComponent"]
                    },
                    {
                        path: 'tvs/:type/page/:page',
                        component: _pages_tvs_tvs_component__WEBPACK_IMPORTED_MODULE_22__["TvsComponent"]
                    },
                    {
                        path: 'tv/:id',
                        component: _pages_tv_tv_component__WEBPACK_IMPORTED_MODULE_24__["TvComponent"]
                    },
                    {
                        path: 'movies',
                        component: _pages_movies_movies_component__WEBPACK_IMPORTED_MODULE_8__["MoviesComponent"]
                    },
                    {
                        path: 'movies/:type',
                        component: _pages_movies_movies_component__WEBPACK_IMPORTED_MODULE_8__["MoviesComponent"]
                    },
                    {
                        path: 'movies/:type/page/:page',
                        component: _pages_movies_movies_component__WEBPACK_IMPORTED_MODULE_8__["MoviesComponent"]
                    },
                    {
                        path: 'movie/:id',
                        component: _pages_movie_movie_component__WEBPACK_IMPORTED_MODULE_9__["MovieComponent"]
                    },
                    {
                        path: 'movie/:id/:section',
                        component: _pages_movie_movie_component__WEBPACK_IMPORTED_MODULE_9__["MovieComponent"]
                    },
                    {
                        path: 'people/:type',
                        component: _pages_persons_persons_component__WEBPACK_IMPORTED_MODULE_19__["PersonsComponent"]
                    }
                ]),
            ],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"],
                _services_movie_service__WEBPACK_IMPORTED_MODULE_11__["MovieService"],
                _services_person_service__WEBPACK_IMPORTED_MODULE_20__["PersonService"],
                _services_news_service__WEBPACK_IMPORTED_MODULE_13__["NewsService"],
                _services_tv_service__WEBPACK_IMPORTED_MODULE_14__["TvService"],
                _services_session_service__WEBPACK_IMPORTED_MODULE_12__["SessionService"],
                _services_search_service__WEBPACK_IMPORTED_MODULE_15__["SearchService"],
                _services_utils_service__WEBPACK_IMPORTED_MODULE_25__["UtilsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/movie-list/movie-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/movie-list/movie-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns is-mobile is-multiline\" [@moviesAnimation]=\"movies.results.length\" *ngIf=\"movies\">\n    <single-movie class=\"movie__container column is-6-mobile is-3-tablet is-2-desktop is-2-widescreen is-2-fullhd\" *ngFor=\"let movie of movies.results\" [movie]=movie [list]=list></single-movie>\n</div>\n<nav class=\"pagination is-centered\" role=\"navigation\" aria-label=\"pagination\" *ngIf=\"totalPages\">\n    <a class=\"pagination-previous\">Previous</a>\n    <a class=\"pagination-next\">Next</a>\n    <ul class=\"pagination-list\">\n        <li *ngFor=\"let page of totalPages\">\n            <a [routerLink]=\"['/',list + 's', type, 'page', (page+1)]\" class=\"pagination-link\" [class.is-current]=\"currentPage == (page+1)\"  aria-current=\"page\">{{page+1}}</a>\n        </li>\n    </ul>\n</nav>"

/***/ }),

/***/ "./src/app/components/movie-list/movie-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/movie-list/movie-list.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie__container:nth-last-of-type(-n+2) {\n  font-size: 1.5em; }\n"

/***/ }),

/***/ "./src/app/components/movie-list/movie-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/movie-list/movie-list.component.ts ***!
  \***************************************************************/
/*! exports provided: MovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListComponent", function() { return MovieListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _models_movies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/movies */ "./src/app/models/movies.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieListComponent = /** @class */ (function () {
    function MovieListComponent() {
    }
    MovieListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MovieListComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MovieListComponent.prototype, "list", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MovieListComponent.prototype, "totalPages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MovieListComponent.prototype, "currentPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_movies__WEBPACK_IMPORTED_MODULE_2__["Movies"])
    ], MovieListComponent.prototype, "movies", void 0);
    MovieListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'movie-list',
            template: __webpack_require__(/*! ./movie-list.component.html */ "./src/app/components/movie-list/movie-list.component.html"),
            styles: [__webpack_require__(/*! ./movie-list.component.scss */ "./src/app/components/movie-list/movie-list.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('moviesAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('200ms', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(-35%)', offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
                            ]))
                        ]), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('300ms', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(-35%)', offset: 1.0 }),
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], MovieListComponent);
    return MovieListComponent;
}());



/***/ }),

/***/ "./src/app/components/movie/movie.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/movie/movie.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"movie\" [routerLink]=\"['/', list, movie.id]\">\n    <figure class=\"movie__poster\">\n        <img class=\"movie__image\" [src]=getMoviePoster(movie.poster_path) alt=\"{{ movie.title }}\" />\n        <figcaption class=\"movie_title\">{{movie.title ? movie.title : movie.name}}</figcaption>\n    </figure>\n    <span class=\"movie__rating\">{{movie.vote_average}}</span>\n</a>"

/***/ }),

/***/ "./src/app/components/movie/movie.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/movie/movie.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie {\n  border-radius: 5px;\n  position: relative;\n  display: block;\n  transition: all 0.4s ease; }\n\n.movie__image {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  transition: -webkit-transform 0.4s ease;\n  transition: transform 0.4s ease;\n  transition: transform 0.4s ease, -webkit-transform 0.4s ease;\n  border-radius: 5px; }\n\n.movie__image:hover {\n    -webkit-transform: rotate3d(1, 2, 1, 15deg);\n            transform: rotate3d(1, 2, 1, 15deg); }\n\n.movie__rating {\n  border-radius: 5px;\n  padding: 5px;\n  background-color: #ffb207;\n  color: #ffffff;\n  position: absolute;\n  top: 12px;\n  left: 12px; }\n\n.movie_title {\n  color: #cac1c1;\n  font-size: 1rem; }\n"

/***/ }),

/***/ "./src/app/components/movie/movie.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/movie/movie.component.ts ***!
  \*****************************************************/
/*! exports provided: SingleMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleMovieComponent", function() { return SingleMovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_movie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/movie */ "./src/app/models/movie.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SingleMovieComponent = /** @class */ (function () {
    function SingleMovieComponent(utilsService) {
        this.utilsService = utilsService;
    }
    SingleMovieComponent.prototype.ngOnInit = function () {
    };
    SingleMovieComponent.prototype.getMoviePoster = function (path) {
        return this.utilsService.getImagePath(path);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_movie__WEBPACK_IMPORTED_MODULE_1__["Movie"])
    ], SingleMovieComponent.prototype, "movie", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SingleMovieComponent.prototype, "list", void 0);
    SingleMovieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'single-movie',
            template: __webpack_require__(/*! ./movie.component.html */ "./src/app/components/movie/movie.component.html"),
            styles: [__webpack_require__(/*! ./movie.component.scss */ "./src/app/components/movie/movie.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"]])
    ], SingleMovieComponent);
    return SingleMovieComponent;
}());



/***/ }),

/***/ "./src/app/components/person-list/person-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/person-list/person-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns is-mobile is-multiline\" *ngIf=\"persons\" [@personsAnimation]=\"persons.results.length\">\n  <person class=\"column is-6-mobile is-3-tablet is-2-desktop is-2-widescreen is-2-fullhd\" *ngFor=\"let person of persons.results\" [person]=person></person>\n</div>\n"

/***/ }),

/***/ "./src/app/components/person-list/person-list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/person-list/person-list.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/person-list/person-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/person-list/person-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: PersonListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonListComponent", function() { return PersonListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _models_person_persons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/person/persons */ "./src/app/models/person/persons.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonListComponent = /** @class */ (function () {
    function PersonListComponent() {
    }
    PersonListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_person_persons__WEBPACK_IMPORTED_MODULE_2__["Persons"])
    ], PersonListComponent.prototype, "persons", void 0);
    PersonListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'person-list',
            template: __webpack_require__(/*! ./person-list.component.html */ "./src/app/components/person-list/person-list.component.html"),
            styles: [__webpack_require__(/*! ./person-list.component.scss */ "./src/app/components/person-list/person-list.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('personsAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('200ms', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateX(20%)', offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0.5, transform: 'translateX(-20px)', offset: 0.5 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], PersonListComponent);
    return PersonListComponent;
}());



/***/ }),

/***/ "./src/app/components/person/person.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/person/person.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cast {\n    transition: -webkit-transform 0.3s ease;\n    transition: transform 0.3s ease;\n    transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n}\n.cast:hover {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n}\n.cast__image img {\n    border-radius: 5px;\n    display: block;\n    width: 100%;\n}\n.cast__info {\n    background-color: #ffffff;\n    padding: 10px;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n.cast__name {\n    font-weight: bold;\n    display: block;\n}"

/***/ }),

/***/ "./src/app/components/person/person.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/person/person.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cast\">\n    <figure class=\"cast__image\">\n        <img [src]=getCastImage(person.profile_path) alt=\"{{person.name}}\">\n        <figcaption class=\"cast__info\">\n            <span class=\"cast__name\">{{ person.name }}</span>\n            <span *ngIf=\"person.character\">{{ person.character }}</span>\n            <span *ngIf=\"person.job\">{{person.job}}</span>\n        </figcaption>\n    </figure>\n</div>\n"

/***/ }),

/***/ "./src/app/components/person/person.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/person/person.component.ts ***!
  \*******************************************************/
/*! exports provided: PersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function() { return PersonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_cast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/cast */ "./src/app/models/cast.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonComponent = /** @class */ (function () {
    function PersonComponent(utilsService) {
        this.utilsService = utilsService;
    }
    PersonComponent.prototype.ngOnInit = function () {
    };
    PersonComponent.prototype.getCastImage = function (path) {
        return this.utilsService.getImagePath(path);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_cast__WEBPACK_IMPORTED_MODULE_1__["Cast"])
    ], PersonComponent.prototype, "person", void 0);
    PersonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'person',
            template: __webpack_require__(/*! ./person.component.html */ "./src/app/components/person/person.component.html"),
            styles: [__webpack_require__(/*! ./person.component.css */ "./src/app/components/person/person.component.css")]
        }),
        __metadata("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"]])
    ], PersonComponent);
    return PersonComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <form class=\"col s12\">\n        <div class=\"row\">\n            <div class=\"input-field col s12\">\n                <input id=\"username\" type=\"text\" class=\"validate\">\n                <label for=\"username\">Username</label>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"input-field col s12\">\n                <input id=\"password\" type=\"password\" class=\"validate\">\n                <label for=\"password\">Password</label>\n            </div>\n        </div>\n        <a class=\"waves-effect waves-light btn\">Login</a>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/cast.ts":
/*!********************************!*\
  !*** ./src/app/models/cast.ts ***!
  \********************************/
/*! exports provided: Cast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cast", function() { return Cast; });
var Cast = /** @class */ (function () {
    function Cast() {
    }
    return Cast;
}());



/***/ }),

/***/ "./src/app/models/movie.ts":
/*!*********************************!*\
  !*** ./src/app/models/movie.ts ***!
  \*********************************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
var Movie = /** @class */ (function () {
    function Movie() {
    }
    return Movie;
}());



/***/ }),

/***/ "./src/app/models/movies.ts":
/*!**********************************!*\
  !*** ./src/app/models/movies.ts ***!
  \**********************************/
/*! exports provided: Movies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movies", function() { return Movies; });
var Movies = /** @class */ (function () {
    function Movies() {
    }
    return Movies;
}());



/***/ }),

/***/ "./src/app/models/person/persons.ts":
/*!******************************************!*\
  !*** ./src/app/models/person/persons.ts ***!
  \******************************************/
/*! exports provided: Persons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Persons", function() { return Persons; });
var Persons = /** @class */ (function () {
    function Persons() {
    }
    return Persons;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"home__movies\">\n    <h2 class=\"title\">Movies</h2>\n    <movie-list [movies]=movies [type]=type [list]=\"'movie'\" [totalPages]=totalPages [currentPage]=currentPage></movie-list>\n</section>\n\n<section class=\"home__tvs\">\n    <h2 class=\"title\">Tvs</h2>\n    <movie-list [movies]=tvs [type]=type [list]=\"'tv'\" [totalPages]=totalPages [currentPage]=currentPage></movie-list>\n</section>"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var _services_tv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tv.service */ "./src/app/services/tv.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(movieService, tvService) {
        this.movieService = movieService;
        this.tvService = tvService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService.getMovies('now_playing', 1).subscribe(function (movies) {
            var list = movies.results.slice(0, 6);
            movies.results = list;
            _this.movies = movies;
        });
        this.tvService.getTvs('airing_today', 1).subscribe(function (tvs) {
            var list = tvs.results.slice(0, 6);
            tvs.results = list;
            _this.tvs = tvs;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"],
            _services_tv_service__WEBPACK_IMPORTED_MODULE_2__["TvService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/movie/movie.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/movie/movie.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"movie__tabs tab\" *ngIf=\"movie\">\n    <a class=\"tab__link\" (click)=\"changeSection('home')\" [routerLink]=\"['/movie', movie.id]\">Home</a>\n    <a class=\"tab__link\" (click)=\"changeSection('reviews')\" [routerLink]=\"['/movie', movie.id, 'reviews']\">Reviews</a>\n    <a class=\"tab__link\" (click)=\"changeSection('videos')\" [routerLink]=\"['/movie', movie.id, 'videos']\">Videos</a>\n    <a class=\"tab__link\" (click)=\"changeSection('images')\" [routerLink]=\"['/movie', movie.id, 'images']\">Images</a>\n    <a class=\"tab__link\" (click)=\"changeSection('casts')\" [routerLink]=\"['/movie', movie.id, 'casts']\">Casts</a>\n</div>\n<div id=\"movie\" *ngIf=\"movie\">\n    <div class=\"movie__backdrop\" [style.background-image]=\"'url(https://image.tmdb.org/t/p/w1400_and_h450_bestv2/' + movie.backdrop_path + ')'\"></div>\n    <div id=\"movie__header\" *ngIf=\"section == 'home'\">\n        <div class=\"movie__info columns\">\n            <figure class=\"column is-4\">\n                <img src=\"https://image.tmdb.org/t/p/w500{{movie.poster_path}}\" />\n            </figure>\n            <div class=\"column is-8\">\n                <h1>{{movie.title}}</h1>\n                <div class=\"movie__date\">{{movie.release_date}}</div>\n                <div class=\"movie__rating\">{{movie.vote_average}}</div>\n                <p>{{movie.tagline}}</p>\n                <p>{{ movie.overview }}</p>\n                <div class=\"genres\">\n                    <span class=\"label\">Genres: </span>\n                    <span *ngFor=\"let genre of movie.genres\" class=\"genre\">{{genre.name}}</span>\n                </div>\n                <div class=\"columns\">\n                    <div class=\"column\">\n                        <div class=\"data\">\n                            <h6 class=\"label\">Status:</h6>\n                            <p>{{movie.status}}</p>\n                        </div>\n                        <div class=\"data\">\n                            <h6 class=\"label\">Release Information:</h6>\n                            <p>{{movie.release_date}}</p>\n                        </div>\n                        <div class=\"data\">\n                            <h6 class=\"label\">Original Language:</h6>\n                            <p>{{movie.original_language}}</p>\n                        </div>\n                    </div>\n                    <div class=\"column\">\n                        <div class=\"data\">\n                            <h6 class=\"label\">Runtime:</h6>\n                            <p>{{movie.runtime}}</p>\n                        </div>\n                        <div class=\"data\">\n                            <h6 class=\"label\">Revenue:</h6>\n                            <p>{{movie.revenue | currency}}</p>\n                        </div>\n                        <div class=\"data\">\n                            <h6 class=\"label\">Homepage:</h6>\n                            <p><a href=\"{{movie.homepage}}\" target=\"_blank\">{{movie.homepage}}</a></p>\n                        </div>\n                        <div class=\"data\">\n                            <h6 class=\"label\">Production Companies:</h6>\n                            <p *ngFor=\"let company of movie.production_companies\">{{company.name}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--<div class=\"\" *ngIf=\"movieVideo\">-->\n    <!--    <div id=\"videos\" *ngIf=\"movieVideo.results.length != 0\">-->\n    <!--        <iframe id=\"ytplayer\" type=\"text/html\" width=\"100%\" height=\"315\"-->\n    <!--            [src]=\"getYoutubeEmbed(movieVideo.results[0].key)\"-->\n    <!--            frameborder=\"0\">-->\n    <!--        </iframe>-->\n    <!--    </div>-->\n    <!--</div>-->\n    <div class=\"movie__home\" *ngIf=\"section == 'home'\">\n        <div id=\"casts\" *ngIf=\"movieCredits\">\n            <div class=\"columns\">\n                <h5 class=\"column\">Feature Casts</h5>\n                <a class=\"column\" [routerLink]=\"['/movie', movie.id, 'casts']\">View full casts</a>\n            </div>\n            <div class=\"columns\">\n                <person class=\"column is-6-mobile is-3-tablet is-2-desktop is-2-widescreen is-2-fullhd\" *ngFor=\"let cast of movieCredits.cast.slice(0, 6)\" [person]=cast></person>\n            </div>\n        </div>\n        <div id=\"crews\" *ngIf=\"movieCredits\">\n            <div class=\"columns\">\n                <h5 class=\"column\">Feature Crews</h5>\n                <a class=\"column\" [routerLink]=\"['/movie', movie.id, 'casts']\">View full crews</a>\n            </div>\n            <div class=\"columns\">\n                <person class=\"column is-6-mobile is-3-tablet is-2-desktop is-2-widescreen is-2-fullhd\" *ngFor=\"let cast of movieCredits.crew.slice(0, 6)\" [person]=cast></person>\n            </div>\n        </div>\n        <div id=\"similar-movies\" *ngIf=\"similarMovies\">\n            <div class=\"columns\">\n                <h5 class=\"column\">Similar Movies</h5>\n                <a class=\"column\" [routerLink]=\"['/movie', movie.id, 'similar']\">View All Similar Movies</a>\n            </div>\n            <movie-list type=\"movie\" list=\"movie\" [movies]=(similarMovies)></movie-list>\n        </div>\n    </div>\n    <div class=\"container\" *ngIf=\"section == 'reviews'\">\n        <div id=\"reviews\" *ngIf=\"movieReviews\">\n            <h3>Reviews</h3>\n            <div class=\"row card\" *ngFor=\"let review of movieReviews.results\">\n                <div class=\"col s2\">\n                    <p>{{ review.author }}</p>\n                </div>\n                <div class=\"col s10\">\n                    <p>{{ review.content }}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"container\" *ngIf=\"section == 'casts'\">\n        <div class=\"columns is-multiline\" *ngIf=\"movieCredits\">\n            <person class=\"column is-6-mobile is-3-tablet is-2-desktop is-2-widescreen is-2-fullhd\" *ngFor=\"let cast of movieCredits.cast\" [person]=cast></person>\n            <person class=\"column is-6-mobile is-3-tablet is-2-desktop is-2-widescreen is-2-fullhd\" *ngFor=\"let cast of movieCredits.crew\" [person]=cast></person>\n        </div>\n    </div>\n    <div class=\"container\" *ngIf=\"section == 'images'\">\n        <div id=\"images\" *ngIf=\"movieImages\">\n            <div class=\"columns is-mobile is-multiline\">\n                <div class=\"column is-6-mobile is-3-tablet is-2-desktop is-2-widescreen is-2-fullhd\" *ngFor=\"let poster of movieImages.posters; let i = index\">\n                    <img src=\"https://image.tmdb.org/t/p/w500{{poster.file_path}}\" (click)=\"previewImage(poster, i)\" />\n                </div>\n            </div>\n            <div class=\"columns is-mobile is-multiline\">\n                <div class=\"column is-6-mobile is-3-tablet is-2-desktop is-2-widescreen is-2-fullhd\" *ngFor=\"let backdrop of movieImages.backdrops\">\n                    <img src=\"https://image.tmdb.org/t/p/w500{{backdrop.file_path}}\" />\n                </div>\n            </div>\n        </div>\n        <section *ngIf=\"modalOpen\" class=\"movie__imagesModal {{modalOpen ? 'open' : ''}}\" (click)=\"closeModal()\">\n            <img class=\"movie__currentImage\" src=\"https://image.tmdb.org/t/p/w500{{movieImages.posters[currentImage].file_path}}\" />\n        </section>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/movie/movie.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/movie/movie.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#movie {\n  position: relative; }\n\n.movie__backdrop {\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  -webkit-filter: blur(5px);\n  -moz-filter: blur(5px);\n  -o-filter: blur(5px);\n  -ms-filter: blur(5px);\n  filter: blur(5px); }\n\n.movie__home,\n.movie__tabs {\n  position: relative;\n  z-index: 1; }\n\n#movie__header {\n  color: #ffffff;\n  position: relative; }\n\n.movie__info {\n  padding: 5%; }\n\n.label {\n  color: #fcb208; }\n\n.genre {\n  display: inline-block;\n  background: #ffffff;\n  color: #000000;\n  padding: 5px;\n  border-radius: 5px;\n  margin: 0 5px 5px 0;\n  font-size: 11px; }\n\n.movie__imagesModal {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n  transition: all 0.3 ease;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  z-index: 12; }\n\n.movie__imagesModal.open {\n  -webkit-transform: scale(1);\n          transform: scale(1); }\n\n.movie__currentImage {\n  margin: auto; }\n"

/***/ }),

/***/ "./src/app/pages/movie/movie.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/movie/movie.component.ts ***!
  \************************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/movie.service */ "./src/app/services/movie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
        this.modalOpen = false;
        this.currentImage = 0;
    }
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (typeof this.route.snapshot.params['section'] != 'undefined') {
            this.section = this.route.snapshot.params['section'];
        }
        else {
            this.section = 'home';
        }
        this.route.params.subscribe(function (params) {
            //scroll page to top
            window.scrollTo(0, 0);
            _this.movieService.getMovieDetail(+params['id'])
                .subscribe(function (movie) {
                _this.movie = movie;
                _this.titleService.setTitle(movie.title);
            });
            _this.movieService.getMovieImages(+params['id'])
                .subscribe(function (movieImages) { return _this.movieImages = movieImages; });
            _this.movieService.getMovieCredits(+params['id'])
                .subscribe(function (movieCredits) { return _this.movieCredits = movieCredits; });
            _this.movieService.getMovieVideos(+params['id'])
                .subscribe(function (movieVideo) { return _this.movieVideo = movieVideo; });
            _this.movieService.getMovieReviews(+params['id'])
                .subscribe(function (movieReviews) {
                _this.movieReviews = movieReviews;
            });
            _this.movieService.getSimilarMovies(+params['id'])
                .subscribe(function (similarMovies) {
                _this.similarMovies = similarMovies;
            });
        });
    };
    MovieComponent.prototype.changeSection = function (section) {
        this.section = section;
    };
    MovieComponent.prototype.getYoutubeEmbed = function (key) {
        return this.sanitizier.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + key + '?autoplay=0');
    };
    MovieComponent.prototype.previewImage = function (image, index) {
        console.log(index);
        this.currentImage = index;
        this.modalOpen = true;
    };
    MovieComponent.prototype.closeModal = function () {
        this.modalOpen = false;
    };
    MovieComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.key == 'ArrowRight') {
            if (this.currentImage == this.movieImages.posters.length - 1) {
                this.currentImage = 0;
            }
            else {
                this.currentImage += 1;
            }
        }
        if (event.key == 'ArrowLeft') {
            if (this.currentImage == 0) {
                this.currentImage = this.movieImages.posters.length - 1;
            }
            else {
                this.currentImage -= 1;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], MovieComponent.prototype, "handleKeyboardEvent", null);
    MovieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'movie',
            template: __webpack_require__(/*! ./movie.component.html */ "./src/app/pages/movie/movie.component.html"),
            styles: [__webpack_require__(/*! ./movie.component.scss */ "./src/app/pages/movie/movie.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_movie_service__WEBPACK_IMPORTED_MODULE_5__["MovieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], MovieComponent);
    return MovieComponent;
}());



/***/ }),

/***/ "./src/app/pages/movies/movies.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/movies/movies.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/movies/movies.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/movies/movies.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab\">\n    <a class=\"tab__link\" [class.is-active]=\"selectedLink == link\" *ngFor=\"let link of links\" (click)=\"gotoLink(link)\">{{formatTitle(link)}}</a>\n</div>\n\n<movie-list [movies]=movies [type]=type [list]=list [totalPages]=totalPages [currentPage]=currentPage></movie-list>\n"

/***/ }),

/***/ "./src/app/pages/movies/movies.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/movies/movies.component.ts ***!
  \**************************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(titleService, movieService, route, router, utilsService) {
        this.titleService = titleService;
        this.movieService = movieService;
        this.route = route;
        this.router = router;
        this.utilsService = utilsService;
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
        this.route.params
            .switchMap(function (params) { return _this.movieService.getMovies(params['type'], params['page']); })
            .subscribe(function (movies) {
            _this.type = _this.route.snapshot.params['type'];
            _this.selectedLink = _this.route.snapshot.params['type'];
            _this.movies = movies;
            _this.currentPage = movies.page;
            _this.totalPages = Array(movies.total_pages).fill(1).map(function (x, i) { return i; });
            // set Page title
            var title = _this.utilsService.formatTitle(_this.route.snapshot.params['type']);
            _this.titleService.setTitle('Movies - ' + title);
        });
    };
    MoviesComponent.prototype.gotoLink = function (link) {
        this.selectedLink = link;
        this.movies.results = [];
        this.router.navigate(['movies/' + link]);
    };
    MoviesComponent.prototype.onSelect = function (movie) {
        this.selectedMovie = movie;
    };
    MoviesComponent.prototype.formatTitle = function (title) {
        return this.utilsService.formatTitle(title);
    };
    MoviesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'movies',
            template: __webpack_require__(/*! ./movies.component.html */ "./src/app/pages/movies/movies.component.html"),
            styles: [__webpack_require__(/*! ./movies.component.css */ "./src/app/pages/movies/movies.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"],
            _services_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/app/pages/news/news.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/news/news.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns is-multiline\" *ngIf=\"news\" [@newsAnimation]=\"news.length\">\n    <a class=\"column is-12-mobile is-4-tablet is-3-desktop is-3-widescreen is-3-fullhd\" *ngFor=\"let item of news\" href=\"{{item.link}}\" target=\"_blank\">\n        <div class=\"news\">\n            <figure class=\"news__image\">\n                <img class=\"news__toc\" src=\"{{item.featured_image.source}}\" alt=\"{{item.title}}\">\n            </figure>\n            <figcaption class=\"news__content\">\n                <p [innerHTML]=item.title></p>\n            </figcaption>\n        </div>\n    </a>\n</div>"

/***/ }),

/***/ "./src/app/pages/news/news.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/news/news.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".news {\n  color: #fcb208;\n  transition: border 0.3s ease;\n  border: 1px solid transparent; }\n  .news:hover {\n    color: #fcb208;\n    border: 1px solid #fcb208; }\n  .news:hover .news__toc {\n      -webkit-transform: scale(1.1);\n              transform: scale(1.1); }\n  .news__image {\n  overflow: hidden; }\n  .news__toc {\n  transition: -webkit-transform 0.2s ease-in-out;\n  transition: transform 0.2s ease-in-out;\n  transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out; }\n  .news__content {\n  padding: 20px; }\n"

/***/ }),

/***/ "./src/app/pages/news/news.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/news/news.component.ts ***!
  \**********************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/news.service */ "./src/app/services/news.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
            .subscribe(function (news) {
            _this.news = news;
            _this.titleService.setTitle('Movie Paradise - News');
        });
    };
    NewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/pages/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.scss */ "./src/app/pages/news/news.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('newsAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('200ms', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.3s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateX(-20%)', offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0.5, transform: 'translateX(20px)', offset: 0.5 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/pages/persons/persons.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/persons/persons.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<person-list [persons]=persons></person-list>"

/***/ }),

/***/ "./src/app/pages/persons/persons.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/persons/persons.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/persons/persons.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/persons/persons.component.ts ***!
  \****************************************************/
/*! exports provided: PersonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonsComponent", function() { return PersonsComponent; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_person_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/person.service */ "./src/app/services/person.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-persons',
            template: __webpack_require__(/*! ./persons.component.html */ "./src/app/pages/persons/persons.component.html"),
            styles: [__webpack_require__(/*! ./persons.component.scss */ "./src/app/pages/persons/persons.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"],
            _services_person_service__WEBPACK_IMPORTED_MODULE_3__["PersonService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PersonsComponent);
    return PersonsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tv/tv.component.css":
/*!*******************************************!*\
  !*** ./src/app/pages/tv/tv.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/tv/tv.component.html":
/*!********************************************!*\
  !*** ./src/app/pages/tv/tv.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  tv works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/tv/tv.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/tv/tv.component.ts ***!
  \******************************************/
/*! exports provided: TvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvComponent", function() { return TvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TvComponent = /** @class */ (function () {
    function TvComponent() {
    }
    TvComponent.prototype.ngOnInit = function () {
    };
    TvComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tv',
            template: __webpack_require__(/*! ./tv.component.html */ "./src/app/pages/tv/tv.component.html"),
            styles: [__webpack_require__(/*! ./tv.component.css */ "./src/app/pages/tv/tv.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TvComponent);
    return TvComponent;
}());



/***/ }),

/***/ "./src/app/pages/tvs/tvs.component.css":
/*!*********************************************!*\
  !*** ./src/app/pages/tvs/tvs.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/tvs/tvs.component.html":
/*!**********************************************!*\
  !*** ./src/app/pages/tvs/tvs.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab\">\n    <a class=\"tab__link\" [class.is-active]=\"selectedLink == link\" *ngFor=\"let link of links\" [routerLink]=\"['/tvs', link]\" (click)=\"gotoLink(link)\">{{formatTitle(link)}}</a>\n</div>\n\n<movie-list [movies]=tvs [type]=type [list]=list [totalPages]=totalPages [currentPage]=currentPage></movie-list>"

/***/ }),

/***/ "./src/app/pages/tvs/tvs.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/tvs/tvs.component.ts ***!
  \********************************************/
/*! exports provided: TvsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvsComponent", function() { return TvsComponent; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tv_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tv.service */ "./src/app/services/tv.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TvsComponent = /** @class */ (function () {
    function TvsComponent(titleService, tvService, route, router, utilsService) {
        this.titleService = titleService;
        this.tvService = tvService;
        this.route = route;
        this.router = router;
        this.utilsService = utilsService;
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
            var title = _this.utilsService.formatTitle(_this.route.snapshot.params['type']);
            _this.titleService.setTitle('TVs - ' + title);
        });
    };
    TvsComponent.prototype.gotoLink = function (link) {
        this.selectedLink = link;
        this.tvs.results = [];
        this.router.navigate(['tvs/' + link]);
    };
    TvsComponent.prototype.formatTitle = function (title) {
        return this.utilsService.formatTitle(title);
    };
    TvsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'tvs',
            template: __webpack_require__(/*! ./tvs.component.html */ "./src/app/pages/tvs/tvs.component.html"),
            styles: [__webpack_require__(/*! ./tvs.component.css */ "./src/app/pages/tvs/tvs.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"],
            _services_tv_service__WEBPACK_IMPORTED_MODULE_3__["TvService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"]])
    ], TvsComponent);
    return TvsComponent;
}());



/***/ }),

/***/ "./src/app/services/movie.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/movie.service.ts ***!
  \*******************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var MovieService = /** @class */ (function () {
    function MovieService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = 'https://api.themoviedb.org/3/movie/';
        this.apiKey = '?api_key=8109b23cc9abaf02cf3c699ec62ccc19';
    }
    MovieService.prototype.getMovies = function (type, page) {
        var moviesUrl = this.baseUrl + type + this.apiKey + '&page=' + page;
        var movies = this.httpClient.get(moviesUrl);
        return movies;
    };
    MovieService.prototype.getMovieDetail = function (id) {
        var movieDetail = this.baseUrl + id + this.apiKey;
        var movie = this.httpClient.get(movieDetail);
        return movie;
    };
    MovieService.prototype.getMovieImages = function (id) {
        var movieCredits = this.baseUrl + id + '/images' + this.apiKey;
        return this.httpClient.get(movieCredits);
    };
    MovieService.prototype.getMovieCredits = function (id) {
        var movieCredits = this.baseUrl + id + '/credits' + this.apiKey;
        return this.httpClient.get(movieCredits);
    };
    MovieService.prototype.getMovieVideos = function (id) {
        var movieVideo = this.baseUrl + id + '/videos' + this.apiKey;
        return this.httpClient.get(movieVideo);
    };
    MovieService.prototype.getMovieReviews = function (id) {
        var movieReviews = this.baseUrl + id + '/reviews' + this.apiKey;
        return this.httpClient.get(movieReviews);
    };
    MovieService.prototype.getSimilarMovies = function (id) {
        var similarMovies = this.baseUrl + id + '/similar' + this.apiKey;
        return this.httpClient.get(similarMovies);
    };
    MovieService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    MovieService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/app/services/news.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/news.service.ts ***!
  \******************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var NewsService = /** @class */ (function () {
    function NewsService(http) {
        this.http = http;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }
    NewsService.prototype.getNewsFromRottentomatoes = function () {
        var url = 'https://editorial.rottentomatoes.com/wp-json/articles/';
        var news = this.http.get(url);
        return news;
    };
    NewsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    NewsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "./src/app/services/person.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/person.service.ts ***!
  \********************************************/
/*! exports provided: PersonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonService", function() { return PersonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var PersonService = /** @class */ (function () {
    function PersonService(http) {
        this.http = http;
        this.baseUrl = 'https://api.themoviedb.org/3/person/';
        this.apiKey = '?api_key=8109b23cc9abaf02cf3c699ec62ccc19';
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }
    PersonService.prototype.getPopular = function (type) {
        var personsUrl = this.baseUrl + type + this.apiKey + '&page=1';
        var persons = this.http.get(personsUrl);
        return persons;
    };
    PersonService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    PersonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PersonService);
    return PersonService;
}());



/***/ }),

/***/ "./src/app/services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        this.baseUrl = 'https://api.themoviedb.org/3/search/multi';
        this.apiKey = '?api_key=8109b23cc9abaf02cf3c699ec62ccc19';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
    }
    SearchService.prototype.getResults = function (search) {
        var searchUrl = this.baseUrl + this.apiKey + '&query=' + search;
        var results = this.http.get(searchUrl).toPromise().then(function (res) { return res.json(); }).catch(this.handleError);
        return results;
    };
    SearchService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/services/session.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/session.service.ts ***!
  \*********************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/app/services/tv.service.ts":
/*!****************************************!*\
  !*** ./src/app/services/tv.service.ts ***!
  \****************************************/
/*! exports provided: TvService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvService", function() { return TvService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var TvService = /** @class */ (function () {
    function TvService(http) {
        this.http = http;
        this.baseUrl = 'https://api.themoviedb.org/3/tv/';
        this.apiKey = '?api_key=8109b23cc9abaf02cf3c699ec62ccc19';
    }
    TvService.prototype.getTvs = function (type, page) {
        var url = this.baseUrl + type + this.apiKey + '&page=' + page;
        var tvs = this.http.get(url);
        return tvs;
    };
    TvService.prototype.getDetail = function (id) {
        var url = this.baseUrl + id + this.apiKey;
        var tv = this.http.get(url);
        return tv;
    };
    TvService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    TvService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TvService);
    return TvService;
}());



/***/ }),

/***/ "./src/app/services/utils.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/utils.service.ts ***!
  \*******************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UtilsService = /** @class */ (function () {
    function UtilsService() {
    }
    //need to find out string vs String
    UtilsService.prototype.formatTitle = function (title) {
        //formate 'now_playing' to 'Noew Playing'
        return title.split('_').map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    };
    UtilsService.prototype.getImagePath = function (file) {
        if (file) {
            return 'https://image.tmdb.org/t/p/w500' + file;
        }
        else {
            return 'https://netbranding.co.nz/wp-content/uploads/2014/04/avatar-2.png';
        }
    };
    UtilsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UtilsService);
    return UtilsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ubuntu/workspace/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map