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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"nav-wrapper\">\n    <a href=\"/\" class=\"brand-logo\">Logo</a>\n    <ul id=\"nav-mobile\" class=\"right\">\n        <li><a routerLink=\"/movies/now_playing\">Movies</a></li>\n        <li><a>More Coming Soon</a></li>\n        <li *ngIf=\"sessionId != ''\"><a>{{ username }}</a></li>\n        <li *ngIf=\"sessionId != ''\"><a (click)=\"logout()\">Logout</a></li>\n    </ul>\n  </div>\n</nav>\n<!--The whole content below can be removed with the new code.-->\n<div class=\"row\" *ngIf=\"sessionId == ''\">\n    <form class=\"col s12\">\n        <div class=\"row\">\n            <div class=\"input-field col s12\">\n                <input id=\"username\" name=\"username\" type=\"text\" class=\"validate\" [(ngModel)]=\"username\">\n                <label for=\"username\">Username</label>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"input-field col s12\">\n                <input id=\"password\" name=\"password\" type=\"password\" class=\"validate\" [(ngModel)]=\"password\">\n                <label for=\"password\">Password</label>\n            </div>\n        </div>\n        <a (click)=\"login()\" class=\"waves-effect waves-light btn\">Login</a>\n    </form>\n</div>\n<div>\n  <h1 class=\"text-center\">Welcome to {{title}}!!</h1>\n  <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__movies_movies_component__ = __webpack_require__("../../../../../src/app/movies/movies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__movie_movie_component__ = __webpack_require__("../../../../../src/app/movie/movie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_movie_service__ = __webpack_require__("../../../../../src/app/services/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_8__movies_movies_component__["a" /* MoviesComponent */],
            __WEBPACK_IMPORTED_MODULE_9__movie_movie_component__["a" /* MovieComponent */],
            __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */]
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
                    component: __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */]
                },
                {
                    path: 'movies',
                    component: __WEBPACK_IMPORTED_MODULE_8__movies_movies_component__["a" /* MoviesComponent */]
                },
                {
                    path: 'movies/:type',
                    component: __WEBPACK_IMPORTED_MODULE_8__movies_movies_component__["a" /* MoviesComponent */]
                },
                {
                    path: 'movie/:id',
                    component: __WEBPACK_IMPORTED_MODULE_9__movie_movie_component__["a" /* MovieComponent */]
                },
                {
                    path: 'movie/:id/:section',
                    component: __WEBPACK_IMPORTED_MODULE_9__movie_movie_component__["a" /* MovieComponent */]
                }
            ]),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */],
            __WEBPACK_IMPORTED_MODULE_10__services_movie_service__["a" /* MovieService */],
            __WEBPACK_IMPORTED_MODULE_11__services_session_service__["a" /* SessionService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

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

module.exports = "<div class=\"row\">\n    <form class=\"col s12\">\n        <div class=\"row\">\n            <div class=\"input-field col s12\">\n                <input id=\"username\" type=\"text\" class=\"validate\">\n                <label for=\"username\">Username</label>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"input-field col s12\">\n                <input id=\"password\" type=\"password\" class=\"validate\">\n                <label for=\"password\">Password</label>\n            </div>\n        </div>\n        <a class=\"waves-effect waves-light btn\">Login</a>\n    </form>\n</div>"

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

/***/ "../../../../../src/app/movie/movie.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n    width: 100%;\n}\n\n#header {\n    padding-top: 40px;\n    color: #ffffff;\n    position: relative;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 50% 50%;\n}\n\n.release-date {\n    opacity: 0.6;\n}\n\n.card-content {\n    padding: 10px;\n}\n\n#casts .name {\n    font-weight: bold;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/movie/movie.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"goBack()\">Back</button>\n\n<div id=\"movie\" *ngIf=\"movie\">\n    <div id=\"header\" [ngStyle]=\"{'background-image': 'url(https://image.tmdb.org/t/p/w500' + movie.backdrop_path + ')'}\">\n        <div class=\"container\">\n            <div class=\"info row\">\n                <div class=\"col s4\">\n                    <img src=\"https://image.tmdb.org/t/p/w500{{movie.poster_path}}\" />\n                </div>\n                <div class=\"col s8\">\n                    <h2 class=\"movie-title\">{{ movie.title }} <span class=\"release-date\">({{movie.release_date.substr(0, 4)}})</span></h2>\n                    \n                    <h3>Overview</h3>\n                    <p>{{ movie.overview }}</p>\n                    <div class=\"row\" *ngIf=\"movieCredits\">\n                        <h4>Feature Crew</h4>\n                        <div *ngFor=\"let crew of movieCredits.crew.slice(0, 6)\" class=\"col s4\">\n                            <p>{{ crew.name }}</p>\n                            <p>{{ crew.job }}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"container\">\n        <ul class=\"tabs\">\n            <li class=\"tab col s3\"><a (click)=\"changeSection('reviews')\" [routerLink]=\"['/movie', movie.id, 'reviews']\">Reviews</a></li>\n            <li class=\"tab col s3\"><a (click)=\"changeSection('videos')\" [routerLink]=\"['/movie', movie.id, 'videos']\">Videos</a></li>\n            <li class=\"tab col s3\"><a (click)=\"changeSection('images')\" [routerLink]=\"['/movie', movie.id, 'images']\">Images</a></li>\n            <li class=\"tab col s3\"><a (click)=\"changeSection('casts')\" [routerLink]=\"['/movie', movie.id, 'casts']\">Casts</a></li>\n        </ul>\n    </div>\n    <div class=\"container\" *ngIf=\"!section\">\n        <div id=\"casts\" *ngIf=\"movieCredits\">\n            <h3>Top Billed Casts</h3>\n            <div class=\"row\">\n                <div *ngFor=\"let cast of movieCredits.cast.slice(0, 6)\" class=\"col l2\">\n                    <div class=\"card\">\n                        <div class=\"card-image\">\n                            <img src=\"https://image.tmdb.org/t/p/w500{{cast.profile_path}}\">\n                        </div>\n                        <div class=\"card-content\">\n                            <p class=\"name\">{{ cast.name }}</p>\n                            <span>{{ cast.character }}</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <a [routerLink]=\"['/movie', movie.id, 'casts']\">View full casts</a>\n        </div>\n        <div id=\"videos\" *ngIf=\"movieVideo\">\n            <h3>Videos</h3>\n            <!--<div class=\"row\">-->\n            <!--    <div class=\"col l3\" *ngFor=\"let video of movieVideo.results\">-->\n            <!--        <iframe id=\"ytplayer\" type=\"text/html\" width=\"100%\" height=\"315\"-->\n            <!--            src=\"https://www.youtube.com/embed/{{video.key}}?autoplay=0\"-->\n            <!--            frameborder=\"0\">-->\n            <!--        </iframe>-->\n            <!--    </div>-->\n            <!--</div>-->\n        </div>\n    </div>\n    <div class=\"container\" *ngIf=\"section == 'reviews'\">\n        <div id=\"reviews\" *ngIf=\"movieReviews\">\n            <h3>Reviews</h3>\n            <div class=\"row card\" *ngFor=\"let review of movieReviews.results\">\n                <div class=\"col s2\">\n                    <p>{{ review.author }}</p>\n                </div>\n                <div class=\"col s10\">\n                    <p>{{ review.content }}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"container\" *ngIf=\"section == 'casts'\">\n        <div class=\"row\" *ngIf=\"movieCredits\">\n            <div class=\"col s6\">\n                <div class=\"row\" *ngFor=\"let cast of movieCredits.cast\">\n                    <div class=\"col s4\">\n                        <img *ngIf=\"cast.profile_path\" src=\"https://image.tmdb.org/t/p/w500{{cast.profile_path}}\">\n                    </div>\n                    <div class=\"col s8\">\n                        <p>{{ cast.name }}</p>\n                        <p>{{ cast.character }}</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col s6\">\n                <div class=\"row\" *ngFor=\"let crew of movieCredits.crew\">\n                    <div class=\"col s4\">\n                        <img *ngIf=\"crew.profile_path\" src=\"https://image.tmdb.org/t/p/w500{{crew.profile_path}}\">\n                    </div>\n                    <div class=\"col s8\">\n                        <p>{{ crew.name }}</p>\n                        <p>{{ crew.job }}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"container\" *ngIf=\"section == 'images'\">\n        <div id=\"images\" *ngIf=\"movieImages\">\n            <h3>Posters</h3>\n            <div class=\"row\">\n                <div class=\"col l2\" *ngFor=\"let poster of movieImages.posters\">\n                    <img src=\"https://image.tmdb.org/t/p/w500{{poster.file_path}}\" />\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col l12\" *ngFor=\"let backdrop of movieImages.backdrops\">\n                    <img src=\"https://image.tmdb.org/t/p/w500{{backdrop.file_path}}\" />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/movie/movie.component.ts":
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
    function MovieComponent(movieService, route, location, titleService) {
        this.movieService = movieService;
        this.route = route;
        this.location = location;
        this.titleService = titleService;
    }
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (typeof this.route.snapshot.params['section'] != 'undefined') {
            this.section = this.route.snapshot.params['section'];
        }
        this.route.params.subscribe(function (params) {
            _this.movieService.getMovieDetail(+params['id'])
                .then(function (movie) {
                _this.movie = movie;
                _this.titleService.setTitle(movie.title);
            });
        });
        this.route.params.subscribe(function (params) {
            _this.movieService.getMovieImages(+params['id'])
                .then(function (movieImages) { return _this.movieImages = movieImages; });
        });
        this.route.params.subscribe(function (params) {
            _this.movieService.getMovieCredits(+params['id'])
                .then(function (movieCredits) { return _this.movieCredits = movieCredits; });
        });
        this.route.params.subscribe(function (params) {
            _this.movieService.getMovieVideos(+params['id'])
                .then(function (movieVideo) { return _this.movieVideo = movieVideo; });
        });
        this.route.params.subscribe(function (params) {
            _this.movieService.getMovieReviews(+params['id'])
                .then(function (movieReviews) {
                _this.movieReviews = movieReviews;
                console.log(movieReviews);
            });
        });
    };
    MovieComponent.prototype.goBack = function () {
        this.location.back();
    };
    MovieComponent.prototype.changeSection = function (section) {
        this.section = section;
    };
    return MovieComponent;
}());
MovieComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'movie',
        template: __webpack_require__("../../../../../src/app/movie/movie.component.html"),
        styles: [__webpack_require__("../../../../../src/app/movie/movie.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_movie_service__["a" /* MovieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_movie_service__["a" /* MovieService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* Location */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Title */]) === "function" && _d || Object])
], MovieComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=movie.component.js.map

/***/ }),

/***/ "../../../../../src/app/movies/movies.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected {\n    background: #cccccc;\n}\n\n.movie {\n    margin-bottom: 20px;\n}\n\nimg {\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/movies/movies.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"tabs\">\n    <li class=\"tab col s3\"><a [routerLink]=\"['/movies', 'now_playing']\">Now Playing</a></li>\n    <li class=\"tab col s3\"><a [routerLink]=\"['/movies', 'popular']\">Popular</a></li>\n    <li class=\"tab col s3\"><a [routerLink]=\"['/movies', 'top_rated']\">Top Rated</a></li>\n    <li class=\"tab col s3\"><a [routerLink]=\"['/movies', 'upcoming']\">Upcoming</a></li>\n</ul>\n<div class=\"row\" *ngIf=\"movies\">\n    <a class=\"movie col s6 m4 l3\" *ngFor=\"let movie of movies.results\" [routerLink]=\"['/movie', movie.id]\">\n        <img src=\"https://image.tmdb.org/t/p/w500{{movie.poster_path}}\" alt=\"{{ movie.title }}\" />\n    </a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/movies/movies.component.ts":
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
        template: __webpack_require__("../../../../../src/app/movies/movies.component.html"),
        styles: [__webpack_require__("../../../../../src/app/movies/movies.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_movie_service__["a" /* MovieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_movie_service__["a" /* MovieService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], MoviesComponent);

var _a, _b, _c;
//# sourceMappingURL=movies.component.js.map

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