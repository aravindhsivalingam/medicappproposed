(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"./src/app/layouts/admin-layout/admin-layout.module.ts",
		"default~layouts-admin-layout-admin-layout-module~layouts-auth-layout-auth-layout-module",
		"layouts-admin-layout-admin-layout-module"
	],
	"./layouts/auth-layout/auth-layout.module": [
		"./src/app/layouts/auth-layout/auth-layout.module.ts",
		"default~layouts-admin-layout-admin-layout-module~layouts-auth-layout-auth-layout-module",
		"layouts-auth-layout-auth-layout-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'argon-dashboard-angular';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth-interceptor */ "./src/app/services/auth-interceptor.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var ng_notyf__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-notyf */ "./node_modules/ng-notyf/index.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/app-service */ "./src/app/services/app-service.ts");
/* harmony import */ var _services_url_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/url-config */ "./src/app/services/url-config.ts");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/helper-service */ "./src/app/services/helper-service.ts");
/* harmony import */ var _pages_login_window_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/login/window.service */ "./src/app/pages/login/window.service.ts");
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
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_11__["ComponentsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                ng_notyf__WEBPACK_IMPORTED_MODULE_12__["NotyfModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_6__["AdminLayoutComponent"],
                _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__["AuthLayoutComponent"]
            ],
            providers: [_services_app_service__WEBPACK_IMPORTED_MODULE_13__["AppService"], _services_url_config__WEBPACK_IMPORTED_MODULE_14__["UrlService"], _services_helper_service__WEBPACK_IMPORTED_MODULE_15__["HelperService"], _pages_login_window_service__WEBPACK_IMPORTED_MODULE_16__["WindowService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptor"], multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    }, {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }
        ]
    }, {
        path: '',
        component: _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
            }
        ]
    }, {
        path: '**',
        redirectTo: 'dashboard'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <div class=\"row align-items-center justify-content-xl-between\">\r\n    <div class=\"col-xl-6\">\r\n      <div class=\"copyright text-center text-xl-left text-muted\">\r\n        &copy; {{ test | date: \"yyyy\" }} <a href=\"https://www.creative-tim.com?ref=ada-footer-admin-layout\" class=\"font-weight-bold ml-1\" target=\"_blank\">Creative Tim</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-6\">\r\n      <ul class=\"nav nav-footer justify-content-center justify-content-xl-end\">\r\n        <li class=\"nav-item\">\r\n          <a href=\"https://www.creative-tim.com?ref=ada-footer-admin-layout\" class=\"nav-link\" target=\"_blank\">Creative Tim</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a href=\"https://www.creative-tim.com/presentation?ref=ada-footer-admin-layout\" class=\"nav-link\" target=\"_blank\">About Us</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a href=\"http://blog.creative-tim.com?ref=ada-footer-admin-layout\" class=\"nav-link\" target=\"_blank\">Blog</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a href=\"https://github.com/creativetimofficial/argon-dashboard-angular/blob/master/LICENSE.md\" class=\"nav-link\" target=\"_blank\">MIT License</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-top navbar-expand-md navbar-dark\" id=\"navbar-main\">\r\n  <div class=\"container-fluid\">\r\n    <!-- Brand -->\r\n    <a class=\"h4 mb-0 text-white text-uppercase d-none d-lg-inline-block\" routerLinkActive=\"active\"\r\n      [routerLink]=\"['/dashboard']\">{{getTitle()}}</a>\r\n    <!-- Form -->\r\n    <form class=\"navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\">\r\n      <div class=\"form-group mb-0\" [ngClass]=\"{ 'focused': focus === true }\">\r\n        <div class=\"input-group input-group-alternative\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"fas fa-search\"></i></span>\r\n          </div>\r\n          <input class=\"form-control\" placeholder=\"Search\" name=\"searchText\" type=\"text\" (focus)=\"focus = true\"\r\n            [(ngModel)]=\"searchText\" (input)=\"changeSearch()\" (blur)=\"focus = false\">\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <!-- User -->\r\n    <ul class=\"navbar-nav align-items-center d-none d-md-flex\">\r\n      <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\" style=\"cursor: pointer;\"\r\n        *ngIf=\"localData.type!=='doctor'\">\r\n        <button id=\"notificationButton\" class=\"btn btn-outline-secondary notification-btn nav-link pr-3\" role=\"button\"\r\n          ngbDropdownToggle>\r\n          <span><i class=\"fas fa-bell\" id=\"bellBtn\"></i></span>\r\n          <span class=\"badge badge-white\">{{notificationList.length>0?notificationList.length:''}}</span>\r\n        </button>\r\n        <div class=\"dropdown-menu-arrow dropdown-menu-right\" ngbDropdownMenu\r\n          style=\"padding: 5px;left: -461px;width: 500px\">\r\n          <span *ngIf=\"notificationList.length>0\">\r\n            <div class=\"alert alert-primary alert-dismissible fade show\" role=\"alert\"\r\n              *ngFor=\"let notification of notificationList;let i = index\" style=\"cursor: default;\">\r\n              <span class=\"alert-inner--icon\"><i class=\"fas fa-user-md\" style=\"font-size:14px;\"></i></span>\r\n              <span class=\"alert-inner--text\"><strong>&emsp;Doctor</strong> is requesting access to\r\n                <a href=\"javascript:void(0)\" class=\"ml-1 badge badge-secondary\">{{notification.prescriptionName}}</a>\r\n              </span>\r\n              <span style=\"display: block;margin-top: 5px;margin-left: 10px;\"><button type=\"button\"\r\n                  class=\"btn btn-success ml-3 btn-sm\" (click)=\"approveRequest(notification,i)\">Approve</button>\r\n                <button type=\"button\" class=\"btn btn-danger ml-2 btn-sm\"\r\n                  (click)=\"removeNotification(notification.id,i)\">Dismiss</button></span>\r\n            </div>\r\n          </span>\r\n          <span *ngIf=\"notificationList && notificationList.length==0\">\r\n            <div class=\"text-center alert alert-info fade show\" role=\"alert\">\r\n              <span class=\"alert-inner--text\" style=\"word-spacing:5px;\"><strong>Hey !,</strong> You're done with your\r\n                notifications</span>\r\n            </div>\r\n            <span class=\"btn btn-primary btn-sm\" style=\"float:right;\" (click)=\"refreshNotifications($event)\"><i\r\n                id=\"refreshIcon\" class=\"fas fa-redo\"></i></span>\r\n          </span>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\" style=\"cursor: pointer;\">\r\n        <a class=\"nav-link pr-0\" role=\"button\" ngbDropdownToggle>\r\n          <div class=\"media align-items-center\">\r\n            <span class=\"avatar avatar-sm rounded-circle\">\r\n              <img alt=\"User profile\" src=\"assets/img/user-logo.png\">\r\n            </span>\r\n            <div class=\"media-body ml-2 d-none d-lg-block\">\r\n              <span class=\"mb-0 text-sm  font-weight-bold\">{{localData.name}}</span>\r\n            </div>\r\n          </div>\r\n        </a>\r\n        <div class=\"dropdown-menu-arrow dropdown-menu-right\" ngbDropdownMenu>\r\n          <div class=\" dropdown-header noti-title\">\r\n            <h6 class=\"text-overflow m-0\">{{localData.type==='doctor'?'Welcome Doctor !':'Warm Greetings !'}}</h6>\r\n          </div>\r\n          <!-- <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\r\n            <i class=\"ni ni-single-02\"></i>\r\n            <span>My profile</span>\r\n          </a> -->\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a href=\"javascript:void(0)\" class=\"dropdown-item\" (click)=\"logout()\">\r\n            <i class=\"ni ni-user-run\"></i>\r\n            <span>Logout</span>\r\n          </a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert {\n  margin: 9px;\n  padding: 16px; }\n\n.notification-btn {\n  padding: 9px 0px 9px 17px;\n  font-size: 18px;\n  line-height: 30px;\n  color: #fff; }\n\n.notification-btn:hover {\n    color: #000 !important; }\n\n.notification-btn:active {\n    color: #000 !important; }\n\n.badge {\n  font-size: 14px;\n  color: #000; }\n\n@-webkit-keyframes rotation {\n  from {\n    -webkit-transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes rotation {\n  from {\n    -webkit-transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg); } }\n\n.spin-icon {\n  -webkit-animation-name: rotation;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n  -webkit-animation-duration: 2s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvRTpcXE1lZGljIFByb2RcXE1lZGljQXBwIFByb3Bvc2VkIFN5c3RlbS9zcmNcXGFwcFxcY29tcG9uZW50c1xcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQUVmO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUpiO0lBTUksc0JBQXNCLEVBQUE7O0FBTjFCO0lBU0ksc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0UsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFFYjtFQUNFO0lBQ0UsK0JBQStCLEVBQUE7RUFFakM7SUFDRSxpQ0FBaUMsRUFBQSxFQUFBOztBQUxyQztFQUNFO0lBQ0UsK0JBQStCLEVBQUE7RUFFakM7SUFDRSxpQ0FBaUMsRUFBQSxFQUFBOztBQUlyQztFQUNFLGdDQUFnQztFQUNoQywyQ0FBMkM7RUFDM0MseUNBQXlDO0VBQ3pDLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0IHtcclxuICBtYXJnaW46IDlweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcbi5ub3RpZmljYXRpb24tYnRuIHtcclxuICBwYWRkaW5nOiA5cHggMHB4IDlweCAxN3B4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICY6YWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5iYWRnZSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcbkBrZXlmcmFtZXMgcm90YXRpb24ge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLnNwaW4taWNvbiB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcm90YXRpb247XHJcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/app-service */ "./src/app/services/app-service.ts");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/helper-service */ "./src/app/services/helper-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router, service, helperService) {
        this.element = element;
        this.router = router;
        this.service = service;
        this.helperService = helperService;
        this.notificationList = [];
        this.location = location;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            $('#notificationButton').focus(function () { $('#bellBtn').css('color', '#000'); });
            $('#notificationButton').focusout(function () { setTimeout(function () { $('#bellBtn').css('color', '#fff'); }, 200); });
        }, 2000);
        this.localData = JSON.parse(localStorage.getItem('loggedInUser'));
        if (this.localData === null) {
            this.router.navigateByUrl('/login');
        }
        else {
            this.service.getAllNotifications(this.localData.email).subscribe(function (data) {
                console.log(data);
                _this.notificationList = data;
            });
        }
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (listTitle) { return listTitle; });
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.refreshNotifications = function (e) {
        var _this = this;
        e.preventDefault();
        $('refreshIcon').addClass('spin-icon');
        this.service.getAllNotifications(this.localData.email).subscribe(function (data) {
            $('refreshIcon').removeClass('spin-icon');
            console.log(data);
            _this.notificationList = data;
        });
    };
    NavbarComponent.prototype.removeNotification = function (id, i) {
        var _this = this;
        this.service.deleteNotification(id).subscribe(function (data) {
            if (data.toString().includes('success')) {
                _this.notificationList.splice(i, 1);
            }
        });
    };
    NavbarComponent.prototype.logout = function () {
        this.service.logout();
        localStorage.setItem('loggedInUser', null);
        this.router.navigateByUrl('/login');
    };
    NavbarComponent.prototype.approveRequest = function (notification, i) {
        var _this = this;
        var payload = {
            id: notification.id,
            loggedInUser: notification.loggedInUser,
            prescriptionName: notification.prescriptionName
        };
        this.service.changePrivateState(payload).subscribe(function (data) {
            _this.service.deleteNotification(notification.id).subscribe(function (deleteResponse) {
                if (deleteResponse.toString().includes('success')) {
                    _this.notificationList.splice(i, 1);
                }
            });
            console.log(data);
        });
    };
    NavbarComponent.prototype.changeSearch = function () {
        this.helperService.searchText(this.searchText);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
            src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-vertical navbar-expand-md navbar-light bg-white\" id=\"sidenav-main\">\r\n  <div class=\"container-fluid\">\r\n    <!-- Toggler -->\r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed=!isCollapsed\"\r\n      aria-controls=\"sidenav-collapse-main\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <!-- Brand -->\r\n    <a class=\"navbar-brand pt-0 mt-2\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\r\n      <img src=\"assets/img/logo.svg\" class=\"navbar-brand-img\" alt=\"...\">\r\n    </a>\r\n    <!-- User -->\r\n    <ul class=\"nav align-items-center d-md-none\">\r\n      <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n        <a class=\"nav-link nav-link-icon\" role=\"button\" ngbDropdownToggle>\r\n          <i class=\"ni ni-bell-55\"></i>\r\n        </a>\r\n        <div class=\"dropdown-menu-arrow dropdown-menu-right\" ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n        <a class=\"nav-link\" role=\"button\" ngbDropdownToggle>\r\n          <div class=\"media align-items-center\">\r\n            <span class=\"avatar avatar-sm rounded-circle\">\r\n              <img alt=\"Image placeholder\" src=\"./assets/img/theme/team-1-800x800.jpg\">\r\n            </span>\r\n          </div>\r\n        </a>\r\n        <div class=\"dropdown-menu-arrow dropdown-menu-right\" ngbDropdownMenu>\r\n          <div class=\" dropdown-header noti-title\">\r\n            <h6 class=\"text-overflow m-0\">Welcome!</h6>\r\n          </div>\r\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\r\n            <i class=\"ni ni-single-02\"></i>\r\n            <span>My profile</span>\r\n          </a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a href=\"#!\" class=\"dropdown-item\">\r\n            <i class=\"ni ni-user-run\"></i>\r\n            <span>Logout</span>\r\n          </a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n    <!-- Collapse -->\r\n    <div class=\"collapse navbar-collapse\" [ngbCollapse]=\"isCollapsed\" id=\"sidenav-collapse-main\">\r\n      <!-- Collapse header -->\r\n      <div class=\"navbar-collapse-header d-md-none\">\r\n        <div class=\"row\">\r\n          <div class=\"col-6 collapse-brand\">\r\n            <a routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\r\n              <img src=\"./assets/img/brand/blue.png\">\r\n            </a>\r\n          </div>\r\n          <div class=\"col-6 collapse-close\">\r\n            <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed=!isCollapsed\">\r\n              <span></span>\r\n              <span></span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Form -->\r\n      <form class=\"mt-4 mb-3 d-md-none\">\r\n        <div class=\"input-group input-group-rounded input-group-merge\">\r\n          <input type=\"search\" class=\"form-control form-control-rounded form-control-prepended\" placeholder=\"Search\"\r\n            aria-label=\"Search\">\r\n          <div class=\"input-group-prepend\">\r\n            <div class=\"input-group-text\">\r\n              <span class=\"fa fa-search\"></span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <!-- Navigation -->\r\n      <ul class=\"navbar-nav\">\r\n        <li *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\r\n          <a routerLinkActive=\"active\" [routerLink]=\"[menuItem.path]\" class=\"nav-link\">\r\n            <i class=\"ni {{menuItem.icon}}\"></i>\r\n            {{menuItem.title}} &nbsp;\r\n            <span *ngIf=\"menuItem.title==='Cart'\">\r\n              <span class=\"badge badge-primary\" id=\"cartCount\">{{prescriptionList.length}}</span>\r\n              <button class=\"btn btn-primary btn-sm ml-3\" *ngIf=\"prescriptionList.length!=0\">Checkout <i\r\n                  class=\"fas fa-arrow-right\"></i></button>\r\n            </span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".shake {\n  -webkit-animation: shake 0.92s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n          animation: shake 0.92s cubic-bezier(0.36, 0.07, 0.19, 0.97) both; }\n\n@-webkit-keyframes shake {\n  10%,\n  90% {\n    transform: translate3d(-1px, 0, 0); }\n  20%,\n  80% {\n    transform: translate3d(2px, 0, 0); }\n  30%,\n  50%,\n  70% {\n    transform: translate3d(-4px, 0, 0); }\n  40%,\n  60% {\n    transform: translate3d(4px, 0, 0); } }\n\n@keyframes shake {\n  10%,\n  90% {\n    transform: translate3d(-1px, 0, 0); }\n  20%,\n  80% {\n    transform: translate3d(2px, 0, 0); }\n  30%,\n  50%,\n  70% {\n    transform: translate3d(-4px, 0, 0); }\n  40%,\n  60% {\n    transform: translate3d(4px, 0, 0); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL0U6XFxNZWRpYyBQcm9kXFxNZWRpY0FwcCBQcm9wb3NlZCBTeXN0ZW0vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNpZGViYXJcXHNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3RUFBZ0U7VUFBaEUsZ0VBQWdFLEVBQUE7O0FBR2xFO0VBQ0U7O0lBRUUsa0NBQWtDLEVBQUE7RUFHcEM7O0lBRUUsaUNBQWlDLEVBQUE7RUFHbkM7OztJQUdFLGtDQUFrQyxFQUFBO0VBR3BDOztJQUVFLGlDQUFpQyxFQUFBLEVBQUE7O0FBbkJyQztFQUNFOztJQUVFLGtDQUFrQyxFQUFBO0VBR3BDOztJQUVFLGlDQUFpQyxFQUFBO0VBR25DOzs7SUFHRSxrQ0FBa0MsRUFBQTtFQUdwQzs7SUFFRSxpQ0FBaUMsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hha2Uge1xyXG4gIGFuaW1hdGlvbjogc2hha2UgMC45MnMgY3ViaWMtYmV6aWVyKDAuMzYsIDAuMDcsIDAuMTksIDAuOTcpIGJvdGg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hha2Uge1xyXG4gIDEwJSxcclxuICA5MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcclxuICB9XHJcblxyXG4gIDIwJSxcclxuICA4MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgMzAlLFxyXG4gIDUwJSxcclxuICA3MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNHB4LCAwLCAwKTtcclxuICB9XHJcblxyXG4gIDQwJSxcclxuICA2MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg0cHgsIDAsIDApO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/app-service */ "./src/app/services/app-service.ts");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/helper-service */ "./src/app/services/helper-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/cart', title: 'Cart', icon: 'fas fa-shopping-cart', class: '' },
    { path: '/user-profile', title: 'Profile', icon: 'far fa-user-circle', class: '' },
    { path: '/test', title: 'Test Login', icon: 'fas fa-chart-line', class: '' }
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router, service, helperService) {
        this.router = router;
        this.service = service;
        this.helperService = helperService;
        this.isCollapsed = true;
        this.prescriptionList = [];
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
        this.router.events.subscribe(function (event) {
            _this.isCollapsed = true;
        });
        this.prescriptionList = JSON.parse(localStorage.getItem('prescriptionInCart')) || [];
        this.helperService.prescriptions.subscribe(function (data) { return _this.prescriptionList = data; });
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Sidenav -->\n<app-sidebar class=\"hide-div\"></app-sidebar>\n<div class=\"main-content hide-div\">\n  <!-- Top navbar -->\n  <app-navbar class=\"hide-div\"></app-navbar>\n  <!-- Pages -->\n  <router-outlet></router-outlet>\n</div>\n<img id=\"spinner-img\" src=\"assets/img/spinner.png\" />"

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#spinner-img {\n  width: 100px;\n  height: 100px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -50px;\n  margin-top: -50px;\n  -webkit-animation: rotation 1s infinite linear;\n          animation: rotation 1s infinite linear; }\n\n@-webkit-keyframes rotation {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(359deg); } }\n\n@keyframes rotation {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(359deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9hZG1pbi1sYXlvdXQvRTpcXE1lZGljIFByb2RcXE1lZGljQXBwIFByb3Bvc2VkIFN5c3RlbS9zcmNcXGFwcFxcbGF5b3V0c1xcYWRtaW4tbGF5b3V0XFxhZG1pbi1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsOENBQXNDO1VBQXRDLHNDQUFzQyxFQUFBOztBQUd4QztFQUNFO0lBQ0UsdUJBQXVCLEVBQUE7RUFFekI7SUFDRSx5QkFBeUIsRUFBQSxFQUFBOztBQUw3QjtFQUNFO0lBQ0UsdUJBQXVCLEVBQUE7RUFFekI7SUFDRSx5QkFBeUIsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9hZG1pbi1sYXlvdXQvYWRtaW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NwaW5uZXItaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNTBweDtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG4gIGFuaW1hdGlvbjogcm90YXRpb24gMXMgaW5maW5pdGUgbGluZWFyO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0aW9uIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
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

var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent() {
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
    };
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-layout',
            template: __webpack_require__(/*! ./admin-layout.component.html */ "./src/app/layouts/admin-layout/admin-layout.component.html"),
            styles: [__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/layouts/admin-layout/admin-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <nav class=\"navbar navbar-top navbar-horizontal navbar-expand-md navbar-dark\">\r\n    <div class=\"container px-4\">\r\n      <a class=\"\" routerLinkActive=\"active\">\r\n        <img src=\"assets/img/logo.svg\" height=\"60px\" class=\"navbar-img\" />\r\n      </a>\r\n      <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed=!isCollapsed\"\r\n        aria-controls=\"sidenav-collapse-main\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" [ngbCollapse]=\"isCollapsed\" id=\"sidenav-collapse-main\">\r\n        <!-- Collapse header -->\r\n        <div class=\"navbar-collapse-header d-md-none\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\r\n                <img src=\"assets/img/brand/blue.png\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed=!isCollapsed\">\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Navbar items -->\r\n        <!-- <ul class=\"navbar-nav ml-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\r\n              <i class=\"ni ni-planet\"></i>\r\n              <span class=\"nav-link-inner--text\">Dashboard</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" routerLinkActive=\"active\" [routerLink]=\"['/register']\">\r\n              <i class=\"ni ni-circle-08\"></i>\r\n              <span class=\"nav-link-inner--text\">Register</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" routerLinkActive=\"active\" [routerLink]=\"['/login']\">\r\n              <i class=\"ni ni-key-25\"></i>\r\n              <span class=\"nav-link-inner--text\">Login</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\">\r\n              <i class=\"ni ni-single-02\"></i>\r\n              <span class=\"nav-link-inner--text\">Profile</span>\r\n            </a>\r\n          </li>\r\n        </ul> -->\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-img {\n  padding: 10px;\n  border-radius: 10px;\n  background-color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9hdXRoLWxheW91dC9FOlxcTWVkaWMgUHJvZFxcTWVkaWNBcHAgUHJvcG9zZWQgU3lzdGVtL3NyY1xcYXBwXFxsYXlvdXRzXFxhdXRoLWxheW91dFxcYXV0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9hdXRoLWxheW91dC9hdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItaW1nIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent(router) {
        this.router = router;
        this.test = new Date();
        this.isCollapsed = true;
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var html = document.getElementsByTagName("html")[0];
        html.classList.add("auth-layout");
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("bg-default");
        this.router.events.subscribe(function (event) {
            _this.isCollapsed = true;
        });
    };
    AuthLayoutComponent.prototype.ngOnDestroy = function () {
        var html = document.getElementsByTagName("html")[0];
        html.classList.remove("auth-layout");
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("bg-default");
    };
    AuthLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth-layout',
            template: __webpack_require__(/*! ./auth-layout.component.html */ "./src/app/layouts/auth-layout/auth-layout.component.html"),
            styles: [__webpack_require__(/*! ./auth-layout.component.scss */ "./src/app/layouts/auth-layout/auth-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/window.service.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/login/window.service.ts ***!
  \***********************************************/
/*! exports provided: WindowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return WindowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WindowService = /** @class */ (function () {
    function WindowService() {
    }
    Object.defineProperty(WindowService.prototype, "windowRef", {
        get: function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    WindowService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], WindowService);
    return WindowService;
}());



/***/ }),

/***/ "./src/app/services/app-service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/app-service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _url_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./url-config */ "./src/app/services/url-config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _encryptService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./encryptService */ "./src/app/services/encryptService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppService = /** @class */ (function () {
    function AppService(http, urlService, encryptService) {
        this.http = http;
        this.urlService = urlService;
        this.encryptService = encryptService;
    }
    AppService.prototype.getHeaders = function () {
        var customHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        return { headers: customHeaders };
    };
    AppService.prototype.createUser = function (payload) {
        return this.http.post(this.urlService.getBaseUrl() + "/createuser", payload, this.getHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    AppService.prototype.validateUser = function (email) {
        return this.http.post(this.urlService.getBaseUrl() + "/validateUser", { emailId: email }, this.getHeaders())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    AppService.prototype.loginUser = function (payload) {
        return this.http.post(this.urlService.getBaseUrl() + "/login", payload, this.getHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    AppService.prototype.loginWithOtp = function (payload) {
        return this.http.post(this.urlService.getBaseUrl() + "/loginWithOtp", payload, this.getHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    AppService.prototype.forgotPassword = function (payload) {
        return this.http.post(this.urlService.getBaseUrl() + "/forgotPassword", payload, this.getHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    AppService.prototype.resetPassword = function (payload) {
        return this.http.post(this.urlService.getBaseUrl() + "/reset", payload, this.getHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    AppService.prototype.getAllPrescriptions = function () {
        return this.http.post(this.urlService.getBaseUrl() + "/getAllPrescriptions", this.getHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    AppService.prototype.getAllPrescriptionsByEmailId = function (emailId) {
        var email = this.encryptService.encrypt(emailId);
        return this.http.post(this.urlService.getBaseUrl() + "/getPrescriptionByEmail", { emailId: email }, this.getHeaders())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    AppService.prototype.getAllNotifications = function (emailId) {
        var email = this.encryptService.encrypt(emailId);
        return this.http.post(this.urlService.getBaseUrl() + "/getNotificationsByEmail", { emailId: email }, this.getHeaders())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    AppService.prototype.getUserInfo = function (emailId) {
        var email = this.encryptService.encrypt(emailId);
        return this.http.post(this.urlService.getBaseUrl() + "/getUserData", { emailId: email }, this.getHeaders())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    AppService.prototype.updateUser = function (payload) {
        return this.http.post(this.urlService.getBaseUrl() + "/updateUser", payload, this.getHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    AppService.prototype.createPrescription = function (payload) {
        return this.http.post(this.urlService.getBaseUrl() + "/createprescription", payload, this.getHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    AppService.prototype.updatePrescription = function (payload) {
        return this.http.put(this.urlService.getBaseUrl() + "/editPrescription", payload, this.getHeaders())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    AppService.prototype.deletePrescription = function (id) {
        return this.http.delete(this.urlService.getBaseUrl() + "/deletePrescriptionById?id=" + id, this.getHeaders())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.toString();
        }));
    };
    AppService.prototype.deleteNotification = function (id) {
        return this.http.delete(this.urlService.getBaseUrl() + "/deleteNotificationById?id=" + id, this.getHeaders())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    AppService.prototype.requestAccess = function (payload) {
        return this.http.put(this.urlService.getBaseUrl() + "/requestPermission", payload, this.getHeaders())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    AppService.prototype.changePrivateState = function (payload) {
        return this.http.put(this.urlService.getBaseUrl() + "/changePrivateState", payload, this.getHeaders())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    AppService.prototype.toggleTwoFactorAuth = function (payload) {
        return this.http.put(this.urlService.getBaseUrl() + "/toggleTwoFactorAuth", { email: payload }, this.getHeaders())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }));
    };
    AppService.prototype.logout = function () {
        if (!firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].apps.length) {
            firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase);
            firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].auth().signOut();
        }
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _url_config__WEBPACK_IMPORTED_MODULE_2__["UrlService"], _encryptService__WEBPACK_IMPORTED_MODULE_6__["EncrpDecrpService"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/services/auth-interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/services/auth-interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper-service */ "./src/app/services/helper-service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(router, helperService) {
        this.router = router;
        this.helperService = helperService;
        this.chartTime = function (param) { };
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        req = req.clone({
            body: __assign({}, req.body, { hello: 'world' }),
        });
        console.log('Req', req);
        var start = performance.now();
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) { return _this.handleResponse(req, event, start); }, function (error) { return _this.handleError(req, error); }));
    };
    AuthInterceptor.prototype.handleResponse = function (req, event, start) {
        // console.log('Handling response for ', req.url, event);
        if (req.url.includes('login') && event.status === 200) {
            this.diffTime = (performance.now() - start);
            this.helperService.apiResponseTime.next(this.diffTime.toFixed(4));
        }
    };
    AuthInterceptor.prototype.handleError = function (req, event) {
        if (event.error.status === 401) {
            console.log('401');
        }
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/services/encryptService.ts":
/*!********************************************!*\
  !*** ./src/app/services/encryptService.ts ***!
  \********************************************/
/*! exports provided: EncrpDecrpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncrpDecrpService", function() { return EncrpDecrpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EncrpDecrpService = /** @class */ (function () {
    function EncrpDecrpService() {
        this.ES = "AAAAB3NzaC1yc2EAAAABJQAAAQB/nAmOjTmezNUDKYvEeIRf2YnwM9/uUG1d0BYs\n  c8/tRtx+RGi7N2lUbp728MXGwdnL9od4cItzky/zVdLZE2cycOa18xBK9cOWmcKS\n  0A8FYBxEQWJ/q9YVUgZbFKfYGaGQxsER+A0w/fX8ALuk78ktP31K69LcQgxIsl7r\n  NzxsoOQKJ/CIxOGMMxczYTiEoLvQhapFQMs3FL96didKr/QbrfB1WT6s3838SEaX\n  fgZvLef1YB2xmfhbT9OXFE3FXvh2UPBfN+ffE7iiayQf/2XR+8j4N4bW30DiPtOQ\n  LGUrH1y5X/rpNZNlWW2+jGIxqZtgWg7lTy3mXy5x836Sj/6L";
    }
    // The set method is use for encrypt the value.
    EncrpDecrpService.prototype.set = function (keys, value) {
        var encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].encrypt(value, keys);
        return encrypted.toString();
    };
    // The get method is use for decrypt the value.
    EncrpDecrpService.prototype.get = function (keys, value) {
        var decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].decrypt(value, keys);
        return decrypted.toString(crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8);
    };
    EncrpDecrpService.prototype.encrypt = function (content) {
        var result = [];
        var passcode = this.ES;
        var passLen = passcode.length;
        for (var i = 0; i < content.length; i++) {
            var passOffset = i % passLen;
            var calAscii = (content.charCodeAt(i) + passcode.charCodeAt(passOffset));
            result.push(calAscii);
        }
        return JSON.stringify(result);
    };
    EncrpDecrpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], EncrpDecrpService);
    return EncrpDecrpService;
}());



/***/ }),

/***/ "./src/app/services/helper-service.ts":
/*!********************************************!*\
  !*** ./src/app/services/helper-service.ts ***!
  \********************************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _url_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./url-config */ "./src/app/services/url-config.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "./node_modules/@ngx-pwa/local-storage/fesm5/ngx-pwa-local-storage.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HelperService = /** @class */ (function () {
    function HelperService(http, urlService, localStorage) {
        this.http = http;
        this.urlService = urlService;
        this.localStorage = localStorage;
        this.prescriptionList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.prescriptions = this.prescriptionList.asObservable();
        this.apiResponseTime = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](' ');
        this.chartTime = this.apiResponseTime.asObservable();
        this.prescriptionInCart = function (prescription) { };
        this.searchText = function (searchText) { };
    }
    HelperService.prototype.setPrescription = function (data) {
        this.prescriptionList.next(data);
    };
    // save client id in local
    HelperService.prototype.setDataInBrowser = function (key, data) {
        this.localStorage.setItem(key, data).subscribe(function (clientdata) {
        }, function (err) {
            console.log(err);
        });
    };
    HelperService.prototype.getDataFromBrowser = function (key, callback) {
        this.localStorage.getItem(key).subscribe(function (data) {
            callback(data);
        }, function (err) {
            console.log(err);
        });
    };
    HelperService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _url_config__WEBPACK_IMPORTED_MODULE_2__["UrlService"], _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__["LocalStorage"]])
    ], HelperService);
    return HelperService;
}());



/***/ }),

/***/ "./src/app/services/url-config.ts":
/*!****************************************!*\
  !*** ./src/app/services/url-config.ts ***!
  \****************************************/
/*! exports provided: UrlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlService", function() { return UrlService; });
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

var UrlService = /** @class */ (function () {
    function UrlService() {
        this.urlList = {
            baseUrl: 'https://medic-server.herokuapp.com',
        };
    }
    // urlList: any = {
    //     baseUrl: 'http://localhost:5678',
    // };
    UrlService.prototype.getBaseUrl = function () {
        return this.urlList.baseUrl;
    };
    UrlService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UrlService);
    return UrlService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyDcT3RGMOV7eIT3DoVfUrJ2Fq4S6vn3nS8',
        authDomain: 'medic-application.firebaseapp.com',
        databaseURL: 'https://medic-application.firebaseio.com',
        projectId: 'medic-application',
        storageBucket: 'medic-application.appspot.com',
        messagingSenderId: '309449077816',
        appId: '1:309449077816:web:72cc2c250461048e9762cd',
        measurementId: 'G-JSQDG7KJSE'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    if (window) {
        window.console.log = function () { };
    }
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Medic Prod\MedicApp Proposed System\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map