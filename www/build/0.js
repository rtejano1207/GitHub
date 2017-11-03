webpackJsonp([0],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSearchResultPageModule", function() { return ProfileSearchResultPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_search_result__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfileSearchResultPageModule = (function () {
    function ProfileSearchResultPageModule() {
    }
    return ProfileSearchResultPageModule;
}());
ProfileSearchResultPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profile_search_result__["a" /* ProfileSearchResultPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_search_result__["a" /* ProfileSearchResultPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
        ],
    })
], ProfileSearchResultPageModule);

//# sourceMappingURL=profile-search-result.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileSearchResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_git_hub_service_git_hub_service__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProfileSearchResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfileSearchResultPage = (function () {
    function ProfileSearchResultPage(github, navCtrl, navParams) {
        this.github = github;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfileSearchResultPage.prototype.getUserInformation = function () {
        var _this = this;
        this.github.getUserInformation(this.userName).subscribe(function (data) { return _this.user = data; });
        this.github.getRepositoryInformation(this.userName).subscribe(function (data) { return _this.repositories = data; });
        // this.github.mockGetUserInformation(this.userName).subscribe((data : User) => this.user = data)
        // this.github.mockGetRepositoryInformation(this.userName).subscribe((data : Repository[]) => this.repositories = data)
    };
    ProfileSearchResultPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfileSearchResultPage');
    };
    ProfileSearchResultPage.prototype.ionViewWillLoad = function () {
        this.userName = this.navParams.get("userName");
        if (this.userName) {
            this.getUserInformation();
        }
    };
    return ProfileSearchResultPage;
}());
ProfileSearchResultPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile-search-result',template:/*ion-inline-start:"/home/raymond/Documents/RRT/Steal Deal/practice/Ionic/GitHub/src/pages/profile-search-result/profile-search-result.html"*/'<!--\n  Generated template for the ProfileSearchResultPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n\n  <ion-navbar color="dark">\n    <ion-title>Results</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <search-results [user]="user"></search-results>\n  <repositories *ngFor="let repo of repositories" [repository1]="repo">\n  </repositories>\n</ion-content>\n'/*ion-inline-end:"/home/raymond/Documents/RRT/Steal Deal/practice/Ionic/GitHub/src/pages/profile-search-result/profile-search-result.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_git_hub_service_git_hub_service__["a" /* GitHubServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], ProfileSearchResultPage);

//# sourceMappingURL=profile-search-result.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_results_search_results__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__repositories_repositories__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__search_results_search_results__["a" /* SearchResultsComponent */],
            __WEBPACK_IMPORTED_MODULE_3__repositories_repositories__["a" /* RepositoriesComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__search_results_search_results__["a" /* SearchResultsComponent */],
            __WEBPACK_IMPORTED_MODULE_3__repositories_repositories__["a" /* RepositoriesComponent */]]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the SearchResultsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SearchResultsComponent = (function () {
    function SearchResultsComponent() {
    }
    return SearchResultsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], SearchResultsComponent.prototype, "user", void 0);
SearchResultsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'search-results',template:/*ion-inline-start:"/home/raymond/Documents/RRT/Steal Deal/practice/Ionic/GitHub/src/components/search-results/search-results.html"*/'<!-- Generated template for the SearchResultsComponent component -->\n<ion-item *ngIf="user; else no_results" text-wrap>\n   <ion-avatar item-left>\n    <img [src]="user.avatar_url" alt="">    \n  </ion-avatar>\n  <h2>{{user.name}}</h2>\n  <h3>{{user.company}}</h3>\n  <p>{{user.location}}</p>\n  <p text-wrap>{{user.bio}}</p>\n</ion-item>\n\n<ng-template #no_results>\n  <h2>No Results Found.</h2>\n</ng-template>'/*ion-inline-end:"/home/raymond/Documents/RRT/Steal Deal/practice/Ionic/GitHub/src/components/search-results/search-results.html"*/
    })
], SearchResultsComponent);

//# sourceMappingURL=search-results.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepositoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the RepositoriesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var RepositoriesComponent = (function () {
    function RepositoriesComponent() {
    }
    return RepositoriesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], RepositoriesComponent.prototype, "repository1", void 0);
RepositoriesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'repositories',template:/*ion-inline-start:"/home/raymond/Documents/RRT/Steal Deal/practice/Ionic/GitHub/src/components/repositories/repositories.html"*/'<!-- Generated template for the RepositoriesComponent component -->\n<ion-card>\n  <ion-card-header>\n    <ion-card-title>\n      {{repository1.name}}\n    </ion-card-title>\n  </ion-card-header>\n   <ion-card-content>\n     {{repository1.description}}\n   </ion-card-content>\n</ion-card>'/*ion-inline-end:"/home/raymond/Documents/RRT/Steal Deal/practice/Ionic/GitHub/src/components/repositories/repositories.html"*/
    })
], RepositoriesComponent);

//# sourceMappingURL=repositories.js.map

/***/ })

});
//# sourceMappingURL=0.js.map