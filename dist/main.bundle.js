webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    background: rgb(245, 247, 246);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\r\n    <div class=\"navbar-brand\">\r\n        <a class=\"navbar-item\" href=\"/\">\r\n            <img src=\"http://bulma.io/images/bulma-logo.png\" alt=\"Bulma: a modern CSS framework based on Flexbox\" width=\"112\" height=\"28\">\r\n        </a>\r\n        <div class=\"navbar-item\"><a routerLink=\"/movies/now_playing\">Movies</a></div>\r\n        <div class=\"navbar-item\"><a routerLink=\"/news\">News</a></div>\r\n        <div class=\"navbar-item\"><a>More Coming Soon</a></div>\r\n        <div class=\"navbar-item\"><a routerLink=\"/persons/popular\">People</a></div>\r\n        <div class=\"navbar-item\" *ngIf=\"sessionId != ''\"><a>{{ username }}</a></div>\r\n        <div class=\"navbar-item\" *ngIf=\"sessionId != ''\"><a (click)=\"logout()\">Logout</a></div>\r\n    \r\n        <button class=\"button navbar-burger\">\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n        </button>\r\n    </div>\r\n</nav>\r\n\r\n<!--The whole content below can be removed with the new code.-->\r\n<div class=\"row\" *ngIf=\"sessionId == ''\">\r\n    <form class=\"col s12\">\r\n        <div class=\"row\">\r\n            <div class=\"input-field col s12\">\r\n                <input id=\"username\" name=\"username\" type=\"text\" class=\"validate\" [(ngModel)]=\"username\">\r\n                <label for=\"username\">Username</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"input-field col s12\">\r\n                <input id=\"password\" name=\"password\" type=\"password\" class=\"validate\" [(ngModel)]=\"password\">\r\n                <label for=\"password\">Password</label>\r\n            </div>\r\n        </div>\r\n        <a (click)=\"login()\" class=\"waves-effect waves-light btn\">Login</a>\r\n    </form>\r\n</div>\r\n<div class=\"\">\r\n  <h1 class=\"text-center\">Welcome to {{title}}!!</h1>\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
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
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_movies_movies_component__ = __webpack_require__("../../../../../src/app/pages/movies/movies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_movie_movie_component__ = __webpack_require__("../../../../../src/app/pages/movie/movie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_movie_movie_component__ = __webpack_require__("../../../../../src/app/components/movie/movie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_movie_service__ = __webpack_require__("../../../../../src/app/services/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_news_service__ = __webpack_require__("../../../../../src/app/services/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_person_person_component__ = __webpack_require__("../../../../../src/app/components/person/person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_movie_list_movie_list_component__ = __webpack_require__("../../../../../src/app/components/movie-list/movie-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_persons_persons_component__ = __webpack_require__("../../../../../src/app/pages/persons/persons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_person_service__ = __webpack_require__("../../../../../src/app/services/person.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_news_news_component__ = __webpack_require__("../../../../../src/app/pages/news/news.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pages_movies_movies_component__["a" /* MoviesComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pages_movie_movie_component__["a" /* MovieComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_movie_movie_component__["a" /* SingleMovieComponent */],
            __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_person_person_component__["a" /* PersonComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_movie_list_movie_list_component__["a" /* MovieListComponent */],
            __WEBPACK_IMPORTED_MODULE_17__pages_persons_persons_component__["a" /* PersonsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pages_news_news_component__["a" /* NewsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: 'login',
                    component: __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */]
                },
                {
                    path: 'news',
                    component: __WEBPACK_IMPORTED_MODULE_19__pages_news_news_component__["a" /* NewsComponent */]
                },
                {
                    path: 'movies',
                    component: __WEBPACK_IMPORTED_MODULE_8__pages_movies_movies_component__["a" /* MoviesComponent */]
                },
                {
                    path: 'movies/:type',
                    component: __WEBPACK_IMPORTED_MODULE_8__pages_movies_movies_component__["a" /* MoviesComponent */]
                },
                {
                    path: 'movie/:id',
                    component: __WEBPACK_IMPORTED_MODULE_9__pages_movie_movie_component__["a" /* MovieComponent */]
                },
                {
                    path: 'movie/:id/:section',
                    component: __WEBPACK_IMPORTED_MODULE_9__pages_movie_movie_component__["a" /* MovieComponent */]
                },
                {
                    path: 'persons/:type',
                    component: __WEBPACK_IMPORTED_MODULE_17__pages_persons_persons_component__["a" /* PersonsComponent */]
                }
            ]),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */],
            __WEBPACK_IMPORTED_MODULE_11__services_movie_service__["a" /* MovieService */],
            __WEBPACK_IMPORTED_MODULE_18__services_person_service__["a" /* PersonService */],
            __WEBPACK_IMPORTED_MODULE_13__services_news_service__["a" /* NewsService */],
            __WEBPACK_IMPORTED_MODULE_12__services_session_service__["a" /* SessionService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/movie-list/movie-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".movie {\r\n    margin-bottom: 20px;\r\n    border-radius: 5px;\r\n    position: relative;\r\n}\r\n\r\n.rating {\r\n    border: 1px solid;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    background: rgb(255, 255, 255);\r\n}\r\n\r\n.movie .rating {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n}\r\n\r\nimg {\r\n    border-radius: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/movie-list/movie-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns is-mobile is-multiline\" *ngIf=\"movies\">\r\n    <!--<single-movie *ngFor=\"let movie of movies.results\" [movie]=movie></single-movie>-->\r\n    <a *ngFor=\"let movie of movies.results\" class=\"movie column is-6-mobile is-3-tablet is-2-desktop is-2-widescreen is-one-quarter-fullhd\" [routerLink]=\"['/movie', movie.id]\">\r\n        <figure class=\"image\">\r\n            <img src=\"https://image.tmdb.org/t/p/w500{{movie.poster_path}}\" alt=\"{{ movie.title }}\" />\r\n        </figure>\r\n        <span class=\"rating\">{{movie.vote_average}}</span>\r\n    </a>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/movie-list/movie-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_movies__ = __webpack_require__("../../../../../src/app/models/movies.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovieListComponent = (function () {
    function MovieListComponent() {
    }
    MovieListComponent.prototype.ngOnInit = function () {
    };
    return MovieListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_movies__["a" /* Movies */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_movies__["a" /* Movies */]) === "function" && _a || Object)
], MovieListComponent.prototype, "movies", void 0);
MovieListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'movie-list',
        template: __webpack_require__("../../../../../src/app/components/movie-list/movie-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/movie-list/movie-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MovieListComponent);

var _a;
//# sourceMappingURL=movie-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/movie/movie.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/movie/movie.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"movie column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd\" [routerLink]=\"['/movie', movie.id]\">\r\n    <figure class=\"image\">\r\n        <img src=\"https://image.tmdb.org/t/p/w500{{movie.poster_path}}\" alt=\"{{ movie.title }}\" />\r\n    </figure>\r\n    <span class=\"rating\">{{movie.vote_average}}</span>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/movie/movie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_movie__ = __webpack_require__("../../../../../src/app/models/movie.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleMovieComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SingleMovieComponent = (function () {
    function SingleMovieComponent() {
    }
    SingleMovieComponent.prototype.ngOnInit = function () {
    };
    return SingleMovieComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_movie__["a" /* Movie */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_movie__["a" /* Movie */]) === "function" && _a || Object)
], SingleMovieComponent.prototype, "movie", void 0);
SingleMovieComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'single-movie',
        template: __webpack_require__("../../../../../src/app/components/movie/movie.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/movie/movie.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SingleMovieComponent);

var _a;
//# sourceMappingURL=movie.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/person/person.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/person/person.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"column\">\r\n    <div class=\"card\">\r\n        <div class=\"card-image\">\r\n            <img src=\"https://image.tmdb.org/t/p/w500{{cast.profile_path}}\">\r\n        </div>\r\n        <div class=\"card-content\">\r\n            <span class=\"label\">{{ cast.name }}</span>\r\n            <span>{{ cast.character }}</span>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/person/person.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_cast__ = __webpack_require__("../../../../../src/app/models/cast.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonComponent = (function () {
    function PersonComponent() {
    }
    PersonComponent.prototype.ngOnInit = function () {
    };
    return PersonComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_cast__["a" /* Cast */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_cast__["a" /* Cast */]) === "function" && _a || Object)
], PersonComponent.prototype, "cast", void 0);
PersonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'person',
        template: __webpack_require__("../../../../../src/app/components/person/person.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/person/person.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PersonComponent);

var _a;
//# sourceMappingURL=person.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <form class=\"col s12\">\r\n        <div class=\"row\">\r\n            <div class=\"input-field col s12\">\r\n                <input id=\"username\" type=\"text\" class=\"validate\">\r\n                <label for=\"username\">Username</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"input-field col s12\">\r\n                <input id=\"password\" type=\"password\" class=\"validate\">\r\n                <label for=\"password\">Password</label>\r\n            </div>\r\n        </div>\r\n        <a class=\"waves-effect waves-light btn\">Login</a>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/cast.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cast; });
var Cast = (function () {
    function Cast() {
    }
    return Cast;
}());

//# sourceMappingURL=cast.js.map

/***/ }),

/***/ "../../../../../src/app/models/movie.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Movie; });
var Movie = (function () {
    function Movie() {
    }
    return Movie;
}());

//# sourceMappingURL=movie.js.map

/***/ }),

/***/ "../../../../../src/app/models/movies.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Movies; });
var Movies = (function () {
    function Movies() {
    }
    return Movies;
}());

//# sourceMappingURL=movies.js.map

/***/ }),

/***/ "../../../../../src/app/pages/movie/movie.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\r\n    width: 100%;\r\n}\r\n\r\n#header {\r\n    padding-top: 40px;\r\n    color: #ffffff;\r\n    position: relative;\r\n}\r\n\r\n.backdrop-poster {\r\n    position: relative;\r\n    box-shadow: 0px -66px 5px 5px #000 inset;\r\n}\r\n\r\n.basic-info {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    padding: 10px;\r\n}\r\n\r\n.bg-black {\r\n    background: #06131a;\r\n    color: #ffffff;\r\n}\r\n\r\n.data {\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.label {\r\n    color: #116f8c;\r\n}\r\n\r\n.genre {\r\n    display: inline-block;\r\n    background: #ffffff;\r\n    color: #000000;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    margin: 0 5px 5px 0;\r\n    font-size: 11px;\r\n}\r\n\r\n.release-date {\r\n    opacity: 0.6;\r\n}\r\n\r\n.card-content {\r\n    padding: 10px;\r\n}\r\n\r\n#casts .name {\r\n    font-weight: bold;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/movie/movie.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"goBack()\">Back</button>\r\n\r\n<div id=\"movie\" *ngIf=\"movie\">\r\n    <div id=\"header\">\r\n        <div class=\"backdrop-poster\">\r\n            <img src=\"https://image.tmdb.org/t/p/w1400_and_h450_bestv2/{{movie.backdrop_path}}\" />\r\n            <div class=\"basic-info\">\r\n                <h5 class=\"movie-title\">{{ movie.title }}</h5>\r\n                <span class=\"release-date\">{{movie.release_date.substr(0, 4)}}</span>\r\n                <span class=\"rating\">{{movie.vote_average}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"info columns section\">\r\n            <div class=\"bg-black columns column s6\">\r\n                <div class=\"column is-4\">\r\n                    <img src=\"https://image.tmdb.org/t/p/w500{{movie.poster_path}}\" />\r\n                </div>\r\n                <div class=\"column is-8\">\r\n                    <p>{{movie.tagline}}</p>\r\n                    <p>{{ movie.overview }}</p>\r\n                    <div class=\"genres\">\r\n                        <span class=\"label\">Genres: </span>\r\n                        <span *ngFor=\"let genre of movie.genres\" class=\"genre\">{{genre.name}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"column s6\">\r\n                <div id=\"videos\" *ngIf=\"movieVideo\">\r\n                    <iframe id=\"ytplayer\" type=\"text/html\" width=\"100%\" height=\"315\"\r\n                        [src]=\"getYoutubeEmbed(movieVideo.results[0].key)\"\r\n                        frameborder=\"0\">\r\n                    </iframe>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"columns\">\r\n        <div class=\"bg-black column is-2\">\r\n            <h5>Movie Data</h5>\r\n            <div class=\"data\">\r\n                <h6 class=\"label\">Status:</h6>\r\n                <p>{{movie.status}}</p>\r\n            </div>\r\n            <div class=\"data\">\r\n                <h6 class=\"label\">Release Information:</h6>\r\n                <p>{{movie.release_date}}</p>\r\n            </div>\r\n            <div class=\"data\">\r\n                <h6 class=\"label\">Original Language:</h6>\r\n                <p>{{movie.original_language}}</p>\r\n            </div>\r\n            <div class=\"data\">\r\n                <h6 class=\"label\">Runtime:</h6>\r\n                <p>{{movie.runtime}}</p>\r\n            </div>\r\n            <div class=\"data\">\r\n                <h6 class=\"label\">Revenue:</h6>\r\n                <p>{{movie.revenue}}</p>\r\n            </div>\r\n            <div class=\"data\">\r\n                <h6 class=\"label\">Homepage:</h6>\r\n                <p><a href=\"{{movie.homepage}}\" target=\"_blank\">{{movie.homepage}}</a></p>\r\n            </div>\r\n            <div class=\"data\">\r\n                <h6 class=\"label\">Production Companies:</h6>\r\n                <p *ngFor=\"let company of movie.production_companies\">{{company.name}}</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"column is-10\">\r\n            <div class=\"\" *ngIf=\"!section\">\r\n                <div id=\"casts\" *ngIf=\"movieCredits\">\r\n                    <div class=\"columns\">\r\n                        <h5 class=\"left\">Feature Casts</h5>\r\n                        <a class=\"right\" [routerLink]=\"['/movie', movie.id, 'casts']\">View full casts</a>\r\n                    </div>\r\n                    <div class=\"columns\">\r\n                        <person *ngFor=\"let cast of movieCredits.cast.slice(0, 6)\" [cast]=cast></person>\r\n                    </div>\r\n                </div>\r\n                <div id=\"crews\" *ngIf=\"movieCredits\">\r\n                    <div class=\"columns\">\r\n                        <h5 class=\"left\">Feature Crews</h5>\r\n                        <a class=\"right\" [routerLink]=\"['/movie', movie.id, 'casts']\">View full crews</a>\r\n                    </div>\r\n                    <div class=\"columns\">\r\n                        <person *ngFor=\"let cast of movieCredits.crew.slice(0, 6)\" [cast]=cast></person>\r\n                    </div>\r\n                </div>\r\n                <div id=\"similar-movies\" *ngIf=\"similarMovies\">\r\n                    <div class=\"columns\">\r\n                        <h5 class=\"left\">Similar Movies</h5>\r\n                        <a class=\"right\" [routerLink]=\"['/movie', movie.id, 'similar']\">View All Similar Movies</a>\r\n                    </div>\r\n                    <div class=\"columns\">\r\n                        <movie-list [movies]=(similarMovies)></movie-list>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"\">\r\n        <ul class=\"tabs\">\r\n            <li class=\"tab col s3\"><a (click)=\"changeSection('reviews')\" [routerLink]=\"['/movie', movie.id, 'reviews']\">Reviews</a></li>\r\n            <li class=\"tab col s3\"><a (click)=\"changeSection('videos')\" [routerLink]=\"['/movie', movie.id, 'videos']\">Videos</a></li>\r\n            <li class=\"tab col s3\"><a (click)=\"changeSection('images')\" [routerLink]=\"['/movie', movie.id, 'images']\">Images</a></li>\r\n            <li class=\"tab col s3\"><a (click)=\"changeSection('casts')\" [routerLink]=\"['/movie', movie.id, 'casts']\">Casts</a></li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"container\" *ngIf=\"section == 'reviews'\">\r\n        <div id=\"reviews\" *ngIf=\"movieReviews\">\r\n            <h3>Reviews</h3>\r\n            <div class=\"row card\" *ngFor=\"let review of movieReviews.results\">\r\n                <div class=\"col s2\">\r\n                    <p>{{ review.author }}</p>\r\n                </div>\r\n                <div class=\"col s10\">\r\n                    <p>{{ review.content }}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"container\" *ngIf=\"section == 'casts'\">\r\n        <div class=\"row\" *ngIf=\"movieCredits\">\r\n            <div class=\"col s6\">\r\n                <div class=\"row\" *ngFor=\"let cast of movieCredits.cast\">\r\n                    <div class=\"col s4\">\r\n                        <img *ngIf=\"cast.profile_path\" src=\"https://image.tmdb.org/t/p/w500{{cast.profile_path}}\">\r\n                    </div>\r\n                    <div class=\"col s8\">\r\n                        <p>{{ cast.name }}</p>\r\n                        <p>{{ cast.character }}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col s6\">\r\n                <div class=\"row\" *ngFor=\"let crew of movieCredits.crew\">\r\n                    <div class=\"col s4\">\r\n                        <img *ngIf=\"crew.profile_path\" src=\"https://image.tmdb.org/t/p/w500{{crew.profile_path}}\">\r\n                    </div>\r\n                    <div class=\"col s8\">\r\n                        <p>{{ crew.name }}</p>\r\n                        <p>{{ crew.job }}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"container\" *ngIf=\"section == 'images'\">\r\n        <div id=\"images\" *ngIf=\"movieImages\">\r\n            <h3>Posters</h3>\r\n            <div class=\"row\">\r\n                <div class=\"col l2\" *ngFor=\"let poster of movieImages.posters\">\r\n                    <img src=\"https://image.tmdb.org/t/p/w500{{poster.file_path}}\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col l12\" *ngFor=\"let backdrop of movieImages.backdrops\">\r\n                    <img src=\"https://image.tmdb.org/t/p/w500{{backdrop.file_path}}\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/movie/movie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_movie_service__ = __webpack_require__("../../../../../src/app/services/movie.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieComponent; });
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


var MovieComponent = (function () {
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
    return MovieComponent;
}());
MovieComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'movie',
        template: __webpack_require__("../../../../../src/app/pages/movie/movie.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/movie/movie.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_movie_service__["a" /* MovieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_movie_service__["a" /* MovieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* Location */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["g" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["g" /* DomSanitizer */]) === "function" && _e || Object])
], MovieComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=movie.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/movies/movies.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected {\r\n    background: #cccccc;\r\n}\r\n\r\na.active {\r\n    text-decoration: underline;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/movies/movies.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tabs is-centered\">\r\n    <ul>\r\n        <li class=\"tab col s3\" *ngFor=\"let link of links\"><a [class.is-active]=\"selectedLink == link\" [routerLink]=\"['/movies', link]\" (click)=\"selectedLink=link\">{{formateTitle(link)}}</a></li>\r\n    </ul>\r\n</div>\r\n<div class=\"container fluid\">\r\n    <movie-list [movies]=movies></movie-list>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/movies/movies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_movie_service__ = __webpack_require__("../../../../../src/app/services/movie.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MoviesComponent = (function () {
    function MoviesComponent(titleService, movieService, route) {
        this.titleService = titleService;
        this.movieService = movieService;
        this.route = route;
    }
    MoviesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.links = [
            'now_playing',
            'popular',
            'top_rated',
            'upcoming'
        ];
        this.selectedLink = 'now_playing';
        this.route.params
            .switchMap(function (params) { return _this.movieService.getMovies(params['type']); })
            .subscribe(function (movies) {
            _this.movies = movies;
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
    return MoviesComponent;
}());
MoviesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_11" /* Component */])({
        selector: 'movies',
        template: __webpack_require__("../../../../../src/app/pages/movies/movies.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/movies/movies.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_movie_service__["a" /* MovieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_movie_service__["a" /* MovieService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], MoviesComponent);

var _a, _b, _c;
//# sourceMappingURL=movies.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/news/news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns is-multiline\">\r\n    <a class=\"column is-3\" *ngFor=\"let item of news\" href=\"{{item.link}}\" target=\"_blank\">\r\n        <div class=\"card\">\r\n            <div class=\"card-image\">\r\n                <figure class=\"image\">\r\n                    <img src=\"{{item.featured_image.source}}\" alt=\"Placeholder image\">\r\n                </figure>\r\n            </div>\r\n            <div class=\"card-content\">\r\n                <div class=\"content\">\r\n                    <p [innerHTML]=item.title></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </a>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_news_service__ = __webpack_require__("../../../../../src/app/services/news.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsComponent = (function () {
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
    return NewsComponent;
}());
NewsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'news',
        template: __webpack_require__("../../../../../src/app/pages/news/news.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/news/news.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_news_service__["a" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_news_service__["a" /* NewsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === "function" && _b || Object])
], NewsComponent);

var _a, _b;
//# sourceMappingURL=news.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/persons/persons.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/persons/persons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tabs is-centered\">\r\n  <ul>\r\n      <li class=\"tab col s3\" *ngFor=\"let link of links\"><a [class.is-active]=\"selectedLink == link\" [routerLink]=\"['/persons', link]\" (click)=\"selectedLink=link\">{{link}}</a></li>\r\n  </ul>\r\n</div>\r\n<div class=\"container fluid\">\r\n    <div class=\"columns is-mobile is-multiline\" *ngIf=\"persons\">\r\n  <a *ngFor=\"let p of persons.results\" class=\"column is-6-mobile is-3-tablet is-2-desktop is-2-widescreen\">\r\n    <figure class=\"image\">\r\n      <img src=\"https://image.tmdb.org/t/p/w500{{p.profile_path}}\" alt=\"{{ p.name }}\" />\r\n  </figure>\r\n  </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/persons/persons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_person_service__ = __webpack_require__("../../../../../src/app/services/person.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonsComponent = (function () {
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
    return PersonsComponent;
}());
PersonsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_11" /* Component */])({
        selector: 'app-persons',
        template: __webpack_require__("../../../../../src/app/pages/persons/persons.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/persons/persons.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_person_service__["a" /* PersonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_person_service__["a" /* PersonService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], PersonsComponent);

var _a, _b, _c;
//# sourceMappingURL=persons.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/movie.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieService = (function () {
    function MovieService(http) {
        this.http = http;
        this.baseUrl = 'https://api.themoviedb.org/3/movie/';
        this.apiKey = '?api_key=8109b23cc9abaf02cf3c699ec62ccc19';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    MovieService.prototype.getMovies = function (type) {
        var moviesUrl = this.baseUrl + type + this.apiKey + '&page=1';
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
    return MovieService;
}());
MovieService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MovieService);

var _a;
//# sourceMappingURL=movie.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/news.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsService = (function () {
    function NewsService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
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
    return NewsService;
}());
NewsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], NewsService);

var _a;
//# sourceMappingURL=news.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/person.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonService = (function () {
    function PersonService(http) {
        this.http = http;
        this.baseUrl = 'https://api.themoviedb.org/3/person/';
        this.apiKey = '?api_key=8109b23cc9abaf02cf3c699ec62ccc19';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
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
    return PersonService;
}());
PersonService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PersonService);

var _a;
//# sourceMappingURL=person.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SessionService = (function () {
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
    return SessionService;
}());
SessionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SessionService);

var _a;
//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map