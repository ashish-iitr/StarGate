webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-dashboard></app-dashboard>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
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
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__app_services_auth_service__["a" /* AuthService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <img src=\"images/HomepagePhoto-Rev3.jpg\"/>\r\n  <div class=\"homeBlock\">\r\n    <div class=\"pi-img-w pi-img-with-caption pi-img-center pi-text-center\"data-animation-delay=\"500\">\r\n      <div class=\"\">\r\n        <a href=\"/products-services/doorstep\"class=\"pi-img-link\">\r\n          <img src=\"images/DoorstepBlockNew.png\"width=\"200\"height=\"200\"alt=\"\"title=\"\"/>\r\n        </a>\r\n      </div>\r\n      <div class=\"caption\">\r\n        <a href=\"/products-services/doorstep\"class=\"pi-img-caption\">Valet Living Doorstep</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"homeBlock\">\r\n    <div class=\"pi-img-w pi-img-with-caption pi-img-center pi-text-center\"data-animation-delay=\"500\">\r\n      <div class=\"\">\r\n        <a href=\"/products-services/doorstep\"class=\"pi-img-link\">\r\n          <img src=\"images/TurnsBlockNew.png\"width=\"200\"height=\"200\"alt=\"\"title=\"\"/>\r\n        </a>\r\n      </div>\r\n      <div class=\"caption\">\r\n        <a href=\"/products-services/doorstep\"class=\"pi-img-caption\">Valet Living Turns</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"homeBlock\">\r\n    <div class=\"pi-img-w pi-img-with-caption pi-img-center pi-text-center\"data-animation-delay=\"500\">\r\n      <div class=\"\">\r\n        <a href=\"/products-services/doorstep\"class=\"pi-img-link\">\r\n          <img src=\"images/MaintenanceBlockNew.png\"width=\"200\"height=\"200\"alt=\"\"title=\"\"/>\r\n        </a>\r\n      </div>\r\n      <div class=\"caption\">\r\n        <a href=\"/products-services/doorstep\"class=\"pi-img-caption\">Valet Living Maintenance</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"homeBlock\">\r\n    <div class=\"pi-img-w pi-img-with-caption pi-img-center pi-text-center\"data-animation-delay=\"500\">\r\n      <div class=\"\">\r\n        <a href=\"/products-services/doorstep\"class=\"pi-img-link\">\r\n          <img src=\"images/PetBlockNew.png\"width=\"200\"height=\"200\"alt=\"\"title=\"\"/>\r\n        </a>\r\n      </div>\r\n      <div class=\"caption\">\r\n        <a href=\"/products-services/doorstep\"class=\"pi-img-caption\">Valet Living Pet</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container .homeBlock {\n  width: 200px;\n  float: left;\n  margin-right: 27px;\n  margin-left: 48px;\n  z-index: 10;\n  text-align: left;\n  margin-top: -30px;\n  position: relative; }\n  .container .homeBlock .pi-img-caption {\n    text-decoration: none; }\n  .container .homeBlock .caption {\n    padding: 6px 2px 6px 3px;\n    margin-top: 2px;\n    transition: background .25s;\n    -webkit-transition: background .25s; }\n  .container .homeBlock .caption:hover {\n    background: #18ba60; }\n    .container .homeBlock .caption:hover a {\n      color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("./src/app/dashboard/dashboard.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container\">\n        <div  class=\"nd-region\">\n\t\t    <div class = \"container-fluid\">\n\t\t        <div  id=\"Footer\" class=\"row\">               \n\t\t\t\t    <div  id=\"footer\" class=\"col-md-12 \">                      \n\t\t\t\t        <div class=\"region region-footer\">\n\t\t\t\t\t\t\t<div id=\"block-block-3\" class=\"pi-section-white block block-block\" >   \n\t\t\t\t\t\t\t\t<div class = \"block-content clearfix\">\n\t\t\t\t\t\t\t\t\t<div  class = ' row  footerStripe' style = 'margin-top: 10px;'>\n\t\t\t\t\t\t\t\t\t\t<div  class = ' col-sm-10'>\n\t\t\t\t\t\t\t\t\t\t<div  style = 'margin-top: 8px;'><p class=\"rtecenter\"><span style=\"font-size:11px;\"><strong>www.valetliving.com &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;100 South Ashley Drive, Suite 700, Tampa, Florida 33602 &nbsp; &nbsp; Telephone: 813-248-1327 | Toll Free: 1-877-574-2587</strong></span></p></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div  class = ' col-sm-2 pi-text-center' style = ' text-align:center;'>\n\t\t\t\t\t\t\t\t\t\t<span  class = ' pi-small pi-social-icons-simple' style = 'color: #ffffff;'><a href = \"https://www.facebook.com/valetliving/\" class = \"pi-social-icon-facebook\"  style = \"color: #ffffff;\" target = \"_blank\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></span>\n\t\t\t\t\t\t\t\t\t\t<span  class = ' pi-small pi-social-icons-simple' style = 'color: #ffffff;'><a href = \"https://twitter.com/valetliving\" class = \"pi-social-icon-twitter\"  style = \"color: #ffffff;\" target = \"_blank\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></span>\n\t\t\t\t\t\t\t\t\t\t<span  class = ' pi-small pi-social-icons-simple' style = 'color: #ffffff;'><a href = \"https://www.linkedin.com/company/valet-living\" class = \"pi-social-icon-linkedin\"  style = \"color: #ffffff;\" target = \"_blank\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a></span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div> <!-- /.block -->\n\t\t\t\t\t\t</div>         \n\t\t\t\t    </div>                                              \n\t\t    \t</div>\n\t\t    </div>\n      \t</div>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  margin-bottom: 12px; }\n  .footer .footerStripe {\n    width: 1120px;\n    padding: 0px;\n    height: 40px;\n    color: white;\n    background: #8fc767;\n    background: linear-gradient(to right, #8fc767 0%, #26726a 44%); }\n    .footer .footerStripe strong {\n      font-size: 12px; }\n    .footer .footerStripe .fa {\n      font-size: 20px;\n      vertical-align: middle;\n      margin-top: 9px; }\n    .footer .footerStripe span {\n      padding: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("./src/app/footer/footer.component.html"),
        styles: [__webpack_require__("./src/app/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\">\r\n        <img alt=\"Brand\" src=\"images/VLLogoFINAL.png\" />\r\n      </a>\r\n    </div>\r\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li class=\"dropdown\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">About<span class=\"caret\"></span></a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li><a href=\"#\">Client Testimonials</a></li>\r\n            <li role=\"separator\" class=\"divider\"></li>\r\n            <li><a href=\"#\">Leadership</a></li>\r\n            <li role=\"separator\" class=\"divider\"></li>\r\n            <li><a href=\"#\">Partner</a></li>\r\n            <li role=\"separator\" class=\"divider\"></li>\r\n            <li><a href=\"#\">Valet Giving</a></li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"dropdown\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Product & Services<span class=\"caret\"></span></a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li><a href=\"#\">Doorstep</a></li>\r\n            <li role=\"separator\" class=\"divider\"></li>\r\n            <li><a href=\"#\">Turns</a></li>\r\n            <li role=\"separator\" class=\"divider\"></li>\r\n            <li><a href=\"#\">Maintenance</a></li>\r\n            <li role=\"separator\" class=\"divider\"></li>\r\n            <li><a href=\"#\">Pet Waste Stations</a></li>\r\n            <li role=\"separator\" class=\"divider\"></li>\r\n            <li><a href=\"#\">Recycling</a></li>\r\n            <li role=\"separator\" class=\"divider\"></li>\r\n            <li><a href=\"#\">Campus</a></li>\r\n            <li role=\"separator\" class=\"divider\"></li>\r\n            <li><a href=\"#\">Bags</a></li>\r\n          </ul>\r\n        </li>\r\n        <li><a href=\"#about\">News</a></li>\r\n        <li><a href=\"#about\">Careers</a></li>\r\n        <li class=\"dropdown\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Contact <span class=\"caret\"></span></a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li><a href=\"#\">Join Our Mailing List</a></li>\r\n          </ul>\r\n        </li>\r\n        <li>\r\n          <form class=\"navbar-form\" role=\"search\">\r\n            <div class=\"inner-addon left-addon\">\r\n              <i class=\"glyphicon glyphicon-search\"></i>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search..\" name=\"srch-term\" [(ngModel)]=\"srchterm\" (keyup.enter)=\"searchText()\" />\r\n            </div>\r\n          </form>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li class=\"dropdown\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Login<span class=\"caret\"></span></a>\r\n          <ul class=\"dropdown-menu login-dp\">\r\n            <li>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <button (click)=\"SignUpSignInO365()\" class=\"btn btn-primary btn-block\">Login with Office 365</button>\r\n                </div>\r\n                <br />\r\n                <div class=\"col-md-12\">\r\n                  <a type=\"button\" href=\"/Account/SignUpSignInSocial\" class=\"btn btn-success btn-block\">Login with Social Accounts</a>\r\n                  <!--<button (click)=\"SignUpSignInSocial()\" class=\"btn btn-success btn-block\">Login with Social Accounts</button>-->\r\n                </div>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  min-height: 108px;\n  box-shadow: none;\n  border: none;\n  background: none;\n  padding: 3px 100px;\n  text-align: right;\n  /* enable absolute positioning */\n  /* style glyph */ }\n  .navbar .navbar-form input {\n    background: #f8fafa; }\n  .navbar .inner-addon {\n    position: relative; }\n    .navbar .inner-addon .form-control {\n      display: inline; }\n  .navbar .inner-addon .glyphicon {\n    position: absolute;\n    padding: 10px;\n    pointer-events: none;\n    color: #d8d8d8; }\n  .navbar .left-addon input {\n    padding-left: 30px; }\n  .navbar #navbar {\n    margin-top: 38px; }\n  .navbar ul li a {\n    color: #005951; }\n  .navbar .login-dp {\n    min-width: 250px;\n    padding: 14px 14px 0;\n    overflow: hidden;\n    background-color: rgba(255, 255, 255, 0.8);\n    padding: 10px;\n    line-height: 3; }\n  .navbar .navbar-right {\n    margin: 0; }\n    .navbar .navbar-right a {\n      text-decoration: none; }\n  .navbar .dropdown .dropdown-menu {\n    border-top: 3px solid #18ba60; }\n  .navbar .dropdown:hover .dropdown-menu {\n    display: block;\n    margin-top: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(_authService) {
        this._authService = _authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.SignUpSignInSocial = function () {
        this._authService.socialLogin();
    };
    HeaderComponent.prototype.SignUpSignInO365 = function () {
        this._authService.internalLogin();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("./src/app/header/header.component.html"),
        styles: [__webpack_require__("./src/app/header/header.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.internalLogin = function () {
        return this.http.get('/Account/SignUpSignInO365')
            .map(function (response) {
            //login successfull 
            var user = response.json();
            console.log(user);
        })
            .catch(this.handleError);
    };
    AuthService.prototype.socialLogin = function () {
        return this.http.get('/Account/SignUpSignInO365')
            .map(function (response) {
            //login successfull 
            var user = response.json();
            console.log(user);
        })
            .catch(this.handleError);
    };
    AuthService.prototype.signOut = function () {
        return this.http.get('/Account/SignOut')
            .map(function (response) {
            //logout successfull 
        })
            .catch(this.handleError);
    };
    AuthService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map