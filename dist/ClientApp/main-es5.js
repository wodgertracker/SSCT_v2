function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forgot-password/forgot-password.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/forgot-password/forgot-password.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsForgotPasswordForgotPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"displayTable\">\n    <div class=\"displayTableCell\">\n      <div class=\"authBlock\">\n        <h3>Reset Password</h3>\n  \n        <p class=\"text-center\">Please enter your email address to request a password reset.</p>\n  \n        <div class=\"formGroup\">\n          <input type=\"email\" class=\"formControl\" placeholder=\"Email Address\" #passwordResetEmail required>\n        </div>\n  \n        <!-- Calling ForgotPassword from AuthService Api -->\n        <div class=\"formGroup\">\n          <input type=\"submit\" class=\"btn btnPrimary\" value=\"Reset Password\" (click)=\"authService.ForgotPassword(passwordResetEmail.value)\">\n        </div>\n      </div>\n  \n      <div class=\"redirectToLogin\">\n        <span>Go back to ? <span class=\"redirect\" routerLink=\"/sign-in\">Log In</span></span>\n      </div>\n  \n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-up/sign-up.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-up/sign-up.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSignUpSignUpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"displayTable\">\n    <div class=\"displayTableCell\">\n  \n      <div class=\"authBlock\">\n        <h3>Sign Up</h3>\n  \n        <div class=\"formGroup\">\n          <input type=\"email\" class=\"formControl\" placeholder=\"Email Address\" #userEmail required>\n        </div>\n  \n        <div class=\"formGroup\">\n          <input type=\"password\" class=\"formControl\" placeholder=\"Password\" #userPwd required>\n        </div>\n  \n        <div class=\"formGroup\">\n          <input type=\"button\" class=\"btn btnPrimary\" value=\"Sign Up\" (click)=\"authService.SignUp(userEmail.value, userPwd.value)\">\n        </div>\n  \n        <div class=\"formGroup\">\n          <span class=\"or\"><span class=\"orInner\">Or</span></span>\n        </div>\n  \n        <!-- Continue with Google -->\n        <div class=\"formGroup\">\n          <button type=\"button\" class=\"btn googleBtn\" (click)=\"authService.GoogleAuth()\">\n            <i class=\"fab fa-google-plus-g\"></i>\n            Continue with Google\n          </button>\n        </div>\n  \n        <!-- Continue with Facebook -->\n        <div class=\"formGroup\">\n          <button type=\"button\" class=\"btn facebookBtn\" (click)=\"authService.FacebookAuth()\">\n            <i class=\"fab fa-facebook\"></i>\n            Continue with Facebook\n          </button>\n        </div>\n      </div>\n  \n      <div class=\"redirectToLogin\">\n        <span>Already have an account? <span class=\"redirect\" routerLink=\"/sign-in\">Log In</span></span>\n      </div>\n    </div>\n  \n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/verify-email/verify-email.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/verify-email/verify-email.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsVerifyEmailVerifyEmailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"displayTable\">\n    <div class=\"displayTableCell\">\n  \n      <div class=\"authBlock\">\n        <h3>Thank You for Registering</h3>\n  \n        <div class=\"formGroup\" *ngIf=\"authService.userData as user\">\n          <p class=\"text-center\">We have sent a confirmation email to <strong>{{user.email}}</strong>.</p>\n          <p class=\"text-center\">Please check your email and click on the link to verfiy your email address.</p>\n        </div>\n        \n        <!-- Calling SendVerificationMail() method using authService Api -->\n        <div class=\"formGroup\">\n          <button type=\"button\" class=\"btn btnPrimary\" (click)=\"authService.SendVerificationMail()\">\n            <i class=\"fas fa-redo-alt\"></i>\n            Resend Verification Email\n          </button>\n        </div>\n  \n      </div>\n  \n      <div class=\"redirectToLogin\">\n        <span>Go back to?<span class=\"redirect\" routerLink=\"/sign-in\"> Sign in</span></span>\n      </div>\n  \n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/confirm-dialog/confirm-dialog.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/confirm-dialog/confirm-dialog.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreComponentsConfirmDialogConfirmDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<h1 mat-dialog-title>{{data.title}}</h1>\n<mat-dialog-content>\n    {{data.content}}\n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button mat-stroked-button  (click)=\"onCancel()\">Cancel</button>\n    <button mat-stroked-button color=\"warn\" (click)=\"onOk()\" cdkFocusInitial class=\"margin-left--16\">OK</button>\n</mat-dialog-actions>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/dashboard/dashboard.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/dashboard/dashboard.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreComponentsDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"row\" fxLayoutAlign=\"center start\">\n\n  <mat-card fxFlex=\"80\">\n\n    <mat-card-title class=\"text-center\">\n        Welcome to Inventory Management System Dapp On the Ropsten Testnet\n\n    </mat-card-title>\n\n    <mat-card-content class=\"text-center\">\n      Front-end user interface to Inventory Management Escrow Smart Contract\n    </mat-card-content>\n\n    <mat-card-content fxLayout=\"row\" fxLayoutAlign=\"space-around start\">\n\n      <img src=\"./assets/img/seller-256.png\" @dropPoke>\n\n      <img src=\"./assets/img/premium-128.png\" class='margin-top-58' @shakeHands>\n\n      <img src=\"./assets/img/buyer-256.png\" @dropPoke>\n\n    </mat-card-content>\n\n    <mat-card-footer fxLayout=\"row\" fxLayoutAlign=\"space-around start\">\n\n      <div class=\"mat-body-1\">Producer</div>\n\n      <div></div>\n\n      <div class=\"mat-body-1\">Supplier</div>\n\n    </mat-card-footer>\n\n  </mat-card>\n\n</div>\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\"\n  *ngIf=\"{co: ethereumConnected$ | async, in: ethereumInjected$ | async} as o\">\n  <button mat-raised-button class='margin-top-bottom--12' color=\"accent\" *ngIf=\"!o.co && o.in\" (click)=\"onConnect()\">\n    Connect to Blockchain\n  </button>\n  <button mat-raised-button class='margin-top-bottom--12' color=\"warn\" *ngIf=\"o.co && o.in\" (click)=\"onDisconnect()\">\n    Disconnect from Blockchain\n  </button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/nav/nav.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/nav/nav.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreComponentsNavNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"app-container\" >\n  <mat-sidenav-container class=\"sidenav-container\">\n    <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\" [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"(isHandset$ | async) === false\">\n      <mat-toolbar>Menu</mat-toolbar>\n      <mat-nav-list>\n\n        <h3 matSubheader class='margin-top-bottom--12'>\n          <a [routerLink]=\"nav['home'].link\" routerLinkActive=\"active-link\"\n            [routerLinkActiveOptions]=\"{ exact: nav['home'].exact }\">\n            <img src=\"{{nav['home'].img_src}}\">{{nav['home'].name}}\n          </a>\n        </h3>\n        <mat-divider></mat-divider>\n\n        <h3 matSubheader class='margin-top-bottom--12'>\n          <img src=\"{{nav['marketplace'].img_src}}\">{{nav['marketplace'].name}}\n        </h3>\n        <mat-list-item>\n          <a [routerLink]=\"nav['marketplace_all_products'].link\" routerLinkActive=\"active-link\"\n            [routerLinkActiveOptions]=\"{ exact: nav['marketplace_all_products'].exact }\">\n            <img src=\"{{nav['marketplace_all_products'].img_src}}\">{{nav['marketplace_all_products'].name}}\n          </a>\n        </mat-list-item>\n        <mat-list-item>\n          <a [routerLink]=\"nav['marketplace_new_product'].link\" routerLinkActive=\"active-link\"\n            [routerLinkActiveOptions]=\"{ exact: nav['marketplace_new_product'].exact }\">\n            <img src=\"{{nav['marketplace_new_product'].img_src}}\">{{nav['marketplace_new_product'].name}}\n          </a>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n\n      </mat-nav-list>\n    </mat-sidenav>\n    <mat-sidenav-content>\n\n      <mat-toolbar color=\"primary\" fxLayout=\"row\">\n\n        <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\"\n          *ngIf=\"(isHandset$ | async)\">\n          <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n        </button>\n\n        <span fxFlex>\n          <span fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <img src=\"./assets/img/ether-32.png\">\n            Inventory Management DApp\n          </span>\n\n        </span>\n\n        <div fxFlex=\"15\" *ngIf=\"balance$ | async as balance\">\n          <span fxLayout=\"row\" fxLayoutAlign=\"center center\">\n            Balance:\n            <mat-chip-list fxFlexOffset=\"10px\">\n              <mat-chip color=\"accent\" selected>{{balance}}</mat-chip>\n            </mat-chip-list>\n          </span>\n        </div>\n\n        <div fxFlex=\"15\" *ngIf=\"ipfsConnect$ | async as ipfsConnect\">\n          <span fxLayout=\"row\" fxLayoutAlign=\"center center\">\n            IPFS Connect:\n            <div fxFlexOffset=\"10px\" *ngIf=\"ipfsConnect\">🔵</div>\n            <div fxFlexOffset=\"10px\" *ngIf=\"!ipfsConnect\">🔴</div>\n          </span>\n        </div>\n\n      </mat-toolbar>\n\n      <!-- Add Content Here -->\n      <div class=\"context-container\">\n        <router-outlet></router-outlet>\n      </div>\n\n\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n\n  <mat-toolbar fxLayout=\"row\" fxLayoutAlign=\"end center\">\n\n    <div fxFlex=\"15\" *ngIf=\"network$ | async as network\">\n      <span fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        Network:\n        <mat-chip-list fxFlexOffset=\"10px\">\n          <mat-chip color=\"primary\" selected>{{network}}</mat-chip>\n        </mat-chip-list>\n      </span>\n    </div>\n\n    <div fxFlex=\"30\">\n      <span fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <img #blocky>\n        <mat-chip-list fxFlexOffset=\"10px\" *ngIf=\"account$ | async as account\">\n          <mat-chip color=\"primary\" selected>{{account}}</mat-chip>\n        </mat-chip-list>\n      </span>\n\n    </div>\n\n  </mat-toolbar>\n\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/snackbar/snack-bar.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/snackbar/snack-bar.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreComponentsSnackbarSnackBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<mat-card>\n    <mat-card-subtitle>Notification Message</mat-card-subtitle>\n    <mat-card-content>\n        <p [ngClass]=\"{\n            'accent-color': data.color == 'accent',\n            'primary-color': data.color == 'primary',\n            'red-color': data.color == 'warn'\n            }\">\n            {{data.message}}\n        </p>\n    </mat-card-content>\n</mat-card>\n";
    /***/
  },

  /***/
  "./node_modules/webpack/buildin/global.js":
  /*!***********************************!*\
    !*** (webpack)/buildin/global.js ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function node_modulesWebpackBuildinGlobalJs(module, exports) {
    var g; // This works in non-strict mode

    g = function () {
      return this;
    }();

    try {
      // This works if eval is allowed (see CSP)
      g = g || new Function("return this")();
    } catch (e) {
      // This works if the window reference is available
      if (typeof window === "object") g = window;
    } // g can still be undefined, but nothing to do about it...
    // We return undefined, instead of nothing here, so it's
    // easier to handle this case. if(!global) { ...}


    module.exports = g;
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: routes, AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core/components/dashboard/dashboard.component */
    "./src/app/core/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _core_containers_not_found_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./core/containers/not-found-page.component */
    "./src/app/core/containers/not-found-page.component.ts");
    /* harmony import */


    var _core_guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./core/guards */
    "./src/app/core/guards/index.ts");

    var routes = [{
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      component: _core_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }, {
      path: 'market-place',
      // here we use the TypeScript Dynamic Imports in Angular 8
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | market-place-market-place-module */
        "market-place-market-place-module").then(__webpack_require__.bind(null,
        /*! ./market-place/market-place.module */
        "./src/app/market-place/market-place.module.ts")).then(function (mod) {
          return mod.MarketPlaceModule;
        });
      },
      canLoad: [_core_guards__WEBPACK_IMPORTED_MODULE_5__["MetaMaskConnectGuard"], _core_guards__WEBPACK_IMPORTED_MODULE_5__["IpfsConnectGuard"]]
    }, {
      path: '**',
      component: _core_containers_not_found_page_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundPageComponent"]
    }]; // to be able to reload on the same route
    // based on https://github.com/angular/angular/issues/13831

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: true,
        onSameUrlNavigation: 'reload'
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: "\n    <div>\n      <app-nav></app-nav>\n    </div>\n  "
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/sign-up/sign-up.component */
    "./src/app/components/sign-up/sign-up.component.ts");
    /* harmony import */


    var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/forgot-password/forgot-password.component */
    "./src/app/components/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/verify-email/verify-email.component */
    "./src/app/components/verify-email/verify-email.component.ts"); // import { LoginComponent } from './login/login.component';
    // import { RegisterComponent } from './register/register.component'; // Angular CLI environment


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__["SignUpComponent"], _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordComponent"], _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_12__["VerifyEmailComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/forgot-password/forgot-password.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/components/forgot-password/forgot-password.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsForgotPasswordForgotPasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/forgot-password/forgot-password.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/forgot-password/forgot-password.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppComponentsForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _market_place_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../market-place/services/authentication.service */
    "./src/app/market-place/services/authentication.service.ts");

    var ForgotPasswordComponent = /*#__PURE__*/function () {
      function ForgotPasswordComponent(authService) {
        _classCallCheck(this, ForgotPasswordComponent);

        this.authService = authService;
      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent.ctorParameters = function () {
      return [{
        type: _market_place_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    ForgotPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgot-password',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./forgot-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forgot-password/forgot-password.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./forgot-password.component.css */
      "./src/app/components/forgot-password/forgot-password.component.css"))["default"]]
    })], ForgotPasswordComponent);
    /***/
  },

  /***/
  "./src/app/components/sign-up/sign-up.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/sign-up/sign-up.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSignUpSignUpComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/sign-up/sign-up.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/sign-up/sign-up.component.ts ***!
    \*********************************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppComponentsSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _market_place_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../market-place/services/authentication.service */
    "./src/app/market-place/services/authentication.service.ts");

    var SignUpComponent = /*#__PURE__*/function () {
      function SignUpComponent(authService) {
        _classCallCheck(this, SignUpComponent);

        this.authService = authService;
      }

      _createClass(SignUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ctorParameters = function () {
      return [{
        type: _market_place_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    SignUpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-up',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sign-up.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-up/sign-up.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sign-up.component.css */
      "./src/app/components/sign-up/sign-up.component.css"))["default"]]
    })], SignUpComponent);
    /***/
  },

  /***/
  "./src/app/components/verify-email/verify-email.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/verify-email/verify-email.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsVerifyEmailVerifyEmailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmVyaWZ5LWVtYWlsL3ZlcmlmeS1lbWFpbC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/verify-email/verify-email.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/verify-email/verify-email.component.ts ***!
    \*******************************************************************/

  /*! exports provided: VerifyEmailComponent */

  /***/
  function srcAppComponentsVerifyEmailVerifyEmailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function () {
      return VerifyEmailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _market_place_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../market-place/services/authentication.service */
    "./src/app/market-place/services/authentication.service.ts");

    var VerifyEmailComponent = /*#__PURE__*/function () {
      function VerifyEmailComponent(authService) {
        _classCallCheck(this, VerifyEmailComponent);

        this.authService = authService;
      }

      _createClass(VerifyEmailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VerifyEmailComponent;
    }();

    VerifyEmailComponent.ctorParameters = function () {
      return [{
        type: _market_place_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    VerifyEmailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-verify-email',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./verify-email.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/verify-email/verify-email.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./verify-email.component.css */
      "./src/app/components/verify-email/verify-email.component.css"))["default"]]
    })], VerifyEmailComponent);
    /***/
  },

  /***/
  "./src/app/core/components/confirm-dialog/confirm-dialog.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/core/components/confirm-dialog/confirm-dialog.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreComponentsConfirmDialogConfirmDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.margin-left--16 {\n    margin-left: 16px !important\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9jb25maXJtLWRpYWxvZy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubWFyZ2luLWxlZnQtLTE2IHtcbiAgICBtYXJnaW4tbGVmdDogMTZweCAhaW1wb3J0YW50XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/core/components/confirm-dialog/confirm-dialog.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/core/components/confirm-dialog/confirm-dialog.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ConfirmDialogComponent */

  /***/
  function srcAppCoreComponentsConfirmDialogConfirmDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function () {
      return ConfirmDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    var ConfirmDialogComponent = /*#__PURE__*/function () {
      function ConfirmDialogComponent(dialogRef, data) {
        _classCallCheck(this, ConfirmDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(ConfirmDialogComponent, [{
        key: "onCancel",
        value: function onCancel() {
          this.dialogRef.close();
        }
      }, {
        key: "onOk",
        value: function onOk() {
          this.dialogRef.close(this.data.output ? this.data.output : 'Confirmed');
        }
      }]);

      return ConfirmDialogComponent;
    }();

    ConfirmDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    ConfirmDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      selector: 'app-confirm-dialog',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./confirm-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/confirm-dialog/confirm-dialog.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./confirm-dialog.component.css */
      "./src/app/core/components/confirm-dialog/confirm-dialog.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], ConfirmDialogComponent);
    /***/
  },

  /***/
  "./src/app/core/components/dashboard/dashboard.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/core/components/dashboard/dashboard.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreComponentsDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\nimg{\n  max-height:200px;\n  max-width:200px;\n  height:auto;\n  width:auto;\n}\n\n.margin-top-58 {\n  margin-top: 58px !important\n}\n\n.margin-top-bottom--12 {\n  margin: 12px 0px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1ne1xuICBtYXgtaGVpZ2h0OjIwMHB4O1xuICBtYXgtd2lkdGg6MjAwcHg7XG4gIGhlaWdodDphdXRvO1xuICB3aWR0aDphdXRvO1xufVxuXG4ubWFyZ2luLXRvcC01OCB7XG4gIG1hcmdpbi10b3A6IDU4cHggIWltcG9ydGFudFxufVxuXG4ubWFyZ2luLXRvcC1ib3R0b20tLTEyIHtcbiAgbWFyZ2luOiAxMnB4IDBweCAhaW1wb3J0YW50O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/core/components/dashboard/dashboard.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/core/components/dashboard/dashboard.component.ts ***!
    \******************************************************************/

  /*! exports provided: DROP_BUDDY_ANIMATION, SHAKE_HANDS_ANIMATION, DashboardComponent */

  /***/
  function srcAppCoreComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DROP_BUDDY_ANIMATION", function () {
      return DROP_BUDDY_ANIMATION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SHAKE_HANDS_ANIMATION", function () {
      return SHAKE_HANDS_ANIMATION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../store */
    "./src/app/core/store/index.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var DROP_BUDDY_ANIMATION = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('dropPoke', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
      transform: 'translateY(-200px)',
      opacity: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('750ms cubic-bezier(1.000, 0.000, 0.000, 1.000)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
      transform: 'translateY(0)',
      opacity: 1
    }))])]);
    var SHAKE_HANDS_ANIMATION = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('shakeHands', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
      opacity: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('1s 300ms ease-in', // Duration is 1 sec, delay is 300 milliseconds, easing in
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
      opacity: 1
    }))])]);

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(httpClient, store$) {
        var _this = this;

        _classCallCheck(this, DashboardComponent);

        this.httpClient = httpClient;
        this.store$ = store$;

        this.onConnect = function () {
          return _this.store$.dispatch(_store__WEBPACK_IMPORTED_MODULE_4__["Web3GatewayActions"].ethereumConnect());
        };

        this.onDisconnect = function () {
          return _this.store$.dispatch(_store__WEBPACK_IMPORTED_MODULE_4__["Web3GatewayActions"].ethereumDisconnect());
        };
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ethereumInjected$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_4__["getEthereumInjected"]));
          this.ethereumConnected$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_4__["getEthereumConnected"]));
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      animations: [DROP_BUDDY_ANIMATION, SHAKE_HANDS_ANIMATION],
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/dashboard/dashboard.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/core/components/dashboard/dashboard.component.css"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/core/components/nav/nav.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/core/components/nav/nav.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreComponentsNavNavComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.app-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.context-container {\n  margin: 16px;\n}\n\n.sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.mat-toolbar img {\n  margin-right: 6px;\n}\n\n.mat-nav-list img {\n  margin-right: 4px;\n}\n\n.toolbar-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \n   Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto;\n}\n\n.margin-top-bottom--12 {\n  margin: 12px 0px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtpREFDK0M7RUFDL0MsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5hcHAtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5jb250ZXh0LWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMTZweDtcbn1cblxuLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4ubWF0LXRvb2xiYXIgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG5cbi5tYXQtbmF2LWxpc3QgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbi50b29sYmFyLWZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcbiAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4ubWFyZ2luLXRvcC1ib3R0b20tLTEyIHtcbiAgbWFyZ2luOiAxMnB4IDBweCAhaW1wb3J0YW50O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/core/components/nav/nav.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/core/components/nav/nav.component.ts ***!
    \******************************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppCoreComponentsNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var ethereum_blockies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ethereum-blockies */
    "./node_modules/ethereum-blockies/blockies.js");
    /* harmony import */


    var ethereum_blockies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ethereum_blockies__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _store_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../store/reducers */
    "./src/app/core/store/reducers/index.ts");

    var NavComponent = /*#__PURE__*/function () {
      function NavComponent(breakpointObserver, store) {
        _classCallCheck(this, NavComponent);

        this.breakpointObserver = breakpointObserver;
        this.store = store;
        this.nav = {
          home: {
            link: '/dashboard',
            name: 'Home',
            img_src: './assets/img/home-start-32.png',
            exact: true
          },
          marketplace: {
            link: '/market-place',
            name: 'Marketplace',
            img_src: './assets/img/negotiation-64.png',
            exact: true
          },
          marketplace_all_products: {
            link: '/market-place',
            name: 'All Products',
            img_src: './assets/img/contract-list-24.png',
            exact: true
          },
          marketplace_new_product: {
            link: '/market-place/products/make/new',
            name: 'New Product',
            img_src: './assets/img/new-contract-24.png',
            exact: true
          }
        };
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
          return result.matches;
        }));
      }

      _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.network$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_6__["getNetwork"]));
          this.balance$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_6__["getBalance"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (balance) {
            return console.log("Debug: got balance: ".concat(balance));
          }));
          this.ipfsConnect$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_6__["getIpfsConnectStatus"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (ipfs) {
            return console.log("Debug: IPFS connection status: ".concat(ipfs));
          }));
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          this.account$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_6__["getAccount"])).pipe( // filter(account => !!account),
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (account) {
            console.log("Debug: got account: ".concat(account));
            _this2.blockyRef.nativeElement.src = Object(ethereum_blockies__WEBPACK_IMPORTED_MODULE_5__["create"])({
              seed: account,
              size: 8,
              scale: 4
            }).toDataURL();
          }));
        }
      }]);

      return NavComponent;
    }();

    NavComponent.ctorParameters = function () {
      return [{
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('blocky')], NavComponent.prototype, "blockyRef", void 0);
    NavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/nav/nav.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./nav.component.css */
      "./src/app/core/components/nav/nav.component.css"))["default"]]
    })], NavComponent);
    /***/
  },

  /***/
  "./src/app/core/components/snackbar/snack-bar.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/core/components/snackbar/snack-bar.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreComponentsSnackbarSnackBarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/* trying to kill .mat-snack-bar-container padding(14px 24px) */ \n.mat-card {\n    margin: -14px -24px;\n    border: 2px solid white\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL3NuYWNrYmFyL3NuYWNrLWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwrREFBK0Q7QUFDL0Q7SUFDSSxtQkFBbUI7SUFDbkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9zbmFja2Jhci9zbmFjay1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogdHJ5aW5nIHRvIGtpbGwgLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHBhZGRpbmcoMTRweCAyNHB4KSAqLyBcbi5tYXQtY2FyZCB7XG4gICAgbWFyZ2luOiAtMTRweCAtMjRweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZVxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/core/components/snackbar/snack-bar.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/core/components/snackbar/snack-bar.component.ts ***!
    \*****************************************************************/

  /*! exports provided: SnackBarComponent */

  /***/
  function srcAppCoreComponentsSnackbarSnackBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SnackBarComponent", function () {
      return SnackBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var SnackBarComponent = function SnackBarComponent(data) {
      _classCallCheck(this, SnackBarComponent);

      this.data = data;
    };

    SnackBarComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"]]
        }]
      }];
    };

    SnackBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-snack-bar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./snack-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/snackbar/snack-bar.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./snack-bar.component.css */
      "./src/app/core/components/snackbar/snack-bar.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"]))], SnackBarComponent);
    /***/
  },

  /***/
  "./src/app/core/containers/not-found-page.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/core/containers/not-found-page.component.ts ***!
    \*************************************************************/

  /*! exports provided: NotFoundPageComponent */

  /***/
  function srcAppCoreContainersNotFoundPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function () {
      return NotFoundPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotFoundPageComponent = function NotFoundPageComponent() {
      _classCallCheck(this, NotFoundPageComponent);
    };

    NotFoundPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-not-found-page',
      template: "\n    <mat-card>\n      <mat-card-title>404: Not Found</mat-card-title>\n      <mat-card-subtitle>\n        <p>Sorry! This page may not exist yet.</p>\n      </mat-card-subtitle>\n      <mat-card-actions>\n        <button mat-raised-button color=\"warn\" routerLink=\"/\">Back To Home</button>\n      </mat-card-actions>\n    </mat-card>\n  ",
      styles: ["\n      :host {\n        text-align: center;\n      }\n    "]
    })], NotFoundPageComponent);
    /***/
  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: COMPONENTS, CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COMPONENTS", function () {
      return COMPONENTS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./store */
    "./src/app/core/store/index.ts");
    /* harmony import */


    var _store_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./store/reducers */
    "./src/app/core/store/reducers/index.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
    /* harmony import */


    var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngrx/router-store */
    "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/router-store.js");
    /* harmony import */


    var _services_app_error_handler_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/app-error-handler.service */
    "./src/app/core/services/app-error-handler.service.ts");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/nav/nav.component */
    "./src/app/core/components/nav/nav.component.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/core/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_snackbar_snack_bar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/snackbar/snack-bar.component */
    "./src/app/core/components/snackbar/snack-bar.component.ts");
    /* harmony import */


    var _containers_not_found_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./containers/not-found-page.component */
    "./src/app/core/containers/not-found-page.component.ts");
    /* harmony import */


    var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/confirm-dialog/confirm-dialog.component */
    "./src/app/core/components/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */


    var _services_http_error_interceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./services/http-error.interceptor */
    "./src/app/core/services/http-error.interceptor.ts"); // NgRx
    // import { LoaderComponent } from './components/loader/loader.component';


    var COMPONENTS = [_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_15__["NavComponent"], _containers_not_found_page_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundPageComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"], // LoaderComponent, - we don't use it
    _components_snackbar_snack_bar_component__WEBPACK_IMPORTED_MODULE_17__["SnackBarComponent"], _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_19__["ConfirmDialogComponent"]];

    var CoreModule = function CoreModule(parentModule) {
      _classCallCheck(this, CoreModule);

      if (parentModule) {
        throw new Error('CoreModule is already loaded. Import only in AppModule');
      }
    };

    CoreModule.ctorParameters = function () {
      return [{
        type: CoreModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
        }]
      }];
    };

    CoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _shared__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"], _shared__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"], _shared__WEBPACK_IMPORTED_MODULE_13__["AngularCdkModule"],
      /**
       * StoreModule.forRoot is imported once in the root module, accepting a reducer
       * function or object map of reducer functions. If passed an object of
       * reducers
       * In the V9, two of these runtime checks, strictStateImmutability, and strictActionImmutability
       *  are now enabled by default in development,
       * so developers can be assured that their state following immutable practices out of the box.
       */
      _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_store_reducers__WEBPACK_IMPORTED_MODULE_7__["ROOT_REDUCERS"], {
        metaReducers: _store_reducers__WEBPACK_IMPORTED_MODULE_7__["metaReducers"]
      }), // @ngrx/router-store keeps router state up-to-date in the store.
      _ngrx_router_store__WEBPACK_IMPORTED_MODULE_11__["StoreRouterConnectingModule"].forRoot({
        stateKey: 'router',
        routerState: 1
        /* Minimal */

      }),
      /**
       * Store devtools instrument the store retaining past versions of state
       * and recalculating new states. This enables powerful time-travel
       * debugging.
       *
       * To use the debugger, install the Redux Devtools extension for either
       * Chrome or Firefox
       *
       * See: https://github.com/zalmoxisus/redux-devtools-extension
       */
      // Instrumentation must be imported after importing StoreModule (config is optional)
      _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"].instrument({
        name: 'FleaMarket DApp Store State'
      }),
      /**
       * EffectsModule.forRoot() is imported once in the root module and
       * sets up the effects class to be initialized immediately when the
       * application starts.
       *
       * See: https://ngrx.io/guide/effects#registering-root-effects
       */
      _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_6__["effects"])],
      declarations: COMPONENTS,
      exports: COMPONENTS,

      /**
       * An entry component is any component that Angular loads imperatively,
       *  (which means you’re not referencing it in the template)
       * In out case these components will be use in the effects, so they are have to be declared
       * as entry components
       */
      entryComponents: [_components_snackbar_snack_bar_component__WEBPACK_IMPORTED_MODULE_17__["SnackBarComponent"], _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_19__["ConfirmDialogComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatSpinner"]],
      providers: [// register the GlobalErrorHandler provider
      {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"],
        useClass: _services_app_error_handler_service__WEBPACK_IMPORTED_MODULE_12__["AppErrorHandler"]
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
        useClass: _services_http_error_interceptor__WEBPACK_IMPORTED_MODULE_20__["HttpErrorInterceptor"],
        multi: true
      }]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])())], CoreModule);
    /***/
  },

  /***/
  "./src/app/core/guards/index.ts":
  /*!**************************************!*\
    !*** ./src/app/core/guards/index.ts ***!
    \**************************************/

  /*! exports provided: guards, MetaMaskConnectGuard, IpfsConnectGuard */

  /***/
  function srcAppCoreGuardsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "guards", function () {
      return guards;
    });
    /* harmony import */


    var _metamask_connect_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./metamask-connect.guard */
    "./src/app/core/guards/metamask-connect.guard.ts");
    /* harmony import */


    var _ipfs_connect_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ipfs-connect.guard */
    "./src/app/core/guards/ipfs-connect.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MetaMaskConnectGuard", function () {
      return _metamask_connect_guard__WEBPACK_IMPORTED_MODULE_0__["MetaMaskConnectGuard"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IpfsConnectGuard", function () {
      return _ipfs_connect_guard__WEBPACK_IMPORTED_MODULE_1__["IpfsConnectGuard"];
    });

    var guards = [_metamask_connect_guard__WEBPACK_IMPORTED_MODULE_0__["MetaMaskConnectGuard"], _ipfs_connect_guard__WEBPACK_IMPORTED_MODULE_1__["IpfsConnectGuard"]];
    /***/
  },

  /***/
  "./src/app/core/guards/ipfs-connect.guard.ts":
  /*!***************************************************!*\
    !*** ./src/app/core/guards/ipfs-connect.guard.ts ***!
    \***************************************************/

  /*! exports provided: IpfsConnectGuard */

  /***/
  function srcAppCoreGuardsIpfsConnectGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IpfsConnectGuard", function () {
      return IpfsConnectGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../store */
    "./src/app/core/store/index.ts");

    var IpfsConnectGuard = /*#__PURE__*/function () {
      function IpfsConnectGuard(store) {
        _classCallCheck(this, IpfsConnectGuard);

        this.store = store;
      }

      _createClass(IpfsConnectGuard, [{
        key: "canLoad",
        value: function canLoad() {
          var _this3 = this;

          return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_4__["getIpfsConnectStatus"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (connected) {
            if (!connected) {
              _this3.store.dispatch(_store__WEBPACK_IMPORTED_MODULE_4__["ErrorActions"].errorMessage({
                errorMsg: "Unable to detect IPFS node."
              }));

              _this3.store.dispatch(_store__WEBPACK_IMPORTED_MODULE_4__["IpfsDaemonActions"].ipfsConnectRedirect());

              return false;
            }

            return true;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
        }
      }]);

      return IpfsConnectGuard;
    }();

    IpfsConnectGuard.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    IpfsConnectGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], IpfsConnectGuard);
    /***/
  },

  /***/
  "./src/app/core/guards/metamask-connect.guard.ts":
  /*!*******************************************************!*\
    !*** ./src/app/core/guards/metamask-connect.guard.ts ***!
    \*******************************************************/

  /*! exports provided: MetaMaskConnectGuard */

  /***/
  function srcAppCoreGuardsMetamaskConnectGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MetaMaskConnectGuard", function () {
      return MetaMaskConnectGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../store */
    "./src/app/core/store/index.ts");

    var MetaMaskConnectGuard = /*#__PURE__*/function () {
      function MetaMaskConnectGuard(store) {
        _classCallCheck(this, MetaMaskConnectGuard);

        this.store = store;
      }

      _createClass(MetaMaskConnectGuard, [{
        key: "canLoad",
        value: function canLoad() {
          var _this4 = this;

          return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store__WEBPACK_IMPORTED_MODULE_4__["getEthereumConnected"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (connected) {
            if (!connected) {
              _this4.store.dispatch(_store__WEBPACK_IMPORTED_MODULE_4__["ErrorActions"].errorMessage({
                errorMsg: "Unable to detect Ethereum account."
              }));

              _this4.store.dispatch(_store__WEBPACK_IMPORTED_MODULE_4__["Web3GatewayActions"].ethereumConnectRedirect());

              return false;
            }

            return true;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
        }
      }]);

      return MetaMaskConnectGuard;
    }();

    MetaMaskConnectGuard.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    MetaMaskConnectGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MetaMaskConnectGuard);
    /***/
  },

  /***/
  "./src/app/core/models/index.ts":
  /*!**************************************!*\
    !*** ./src/app/core/models/index.ts ***!
    \**************************************/

  /*! exports provided: AppearanceColor */

  /***/
  function srcAppCoreModelsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _snack_bar_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./snack-bar.model */
    "./src/app/core/models/snack-bar.model.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppearanceColor", function () {
      return _snack_bar_model__WEBPACK_IMPORTED_MODULE_0__["AppearanceColor"];
    });
    /***/

  },

  /***/
  "./src/app/core/models/snack-bar.model.ts":
  /*!************************************************!*\
    !*** ./src/app/core/models/snack-bar.model.ts ***!
    \************************************************/

  /*! exports provided: AppearanceColor */

  /***/
  function srcAppCoreModelsSnackBarModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppearanceColor", function () {
      return AppearanceColor;
    });

    var AppearanceColor;

    (function (AppearanceColor) {
      AppearanceColor["Error"] = "warn";
      AppearanceColor["Success"] = "accent";
      AppearanceColor["Info"] = "primary";
    })(AppearanceColor || (AppearanceColor = {}));
    /***/

  },

  /***/
  "./src/app/core/services/app-error-handler.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/core/services/app-error-handler.service.ts ***!
    \************************************************************/

  /*! exports provided: AppErrorHandler */

  /***/
  function srcAppCoreServicesAppErrorHandlerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppErrorHandler", function () {
      return AppErrorHandler;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var serialize_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! serialize-error */
    "./node_modules/serialize-error/index.js");
    /* harmony import */


    var serialize_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(serialize_error__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _snack_bar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./snack-bar.service */
    "./src/app/core/services/snack-bar.service.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models */
    "./src/app/core/models/index.ts"); // https://github.com/tomastrajan/angular-ngrx-material-starter
    // https://medium.com/@aleixsuau/error-handling-angular-859d529fa53a
    // https://medium.com/angular-in-depth/expecting-the-unexpected-best-practices-for-error-handling-in-angular-21c3662ef9e4
    // https://www.tektutorialshub.com/angular/error-handling-in-angular-applications/


    var AppErrorHandler = /*#__PURE__*/function (_angular_core__WEBPAC) {
      _inherits(AppErrorHandler, _angular_core__WEBPAC);

      var _super = _createSuper(AppErrorHandler);

      // Error handling is important and it is loaded first.
      // Because of this we should manually inject the services with Injector.
      function AppErrorHandler(injector) {
        var _this5;

        _classCallCheck(this, AppErrorHandler);

        _this5 = _super.call(this);
        _this5.injector = injector;
        return _this5;
      }

      _createClass(AppErrorHandler, [{
        key: "handleError",
        value: function handleError(error) {
          var notifier = this.injector.get(_snack_bar_service__WEBPACK_IMPORTED_MODULE_4__["SnackBarService"]);
          var message;

          if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
            // Server Error
            message = error.message;
          } else {
            // Client Error
            message = Object(serialize_error__WEBPACK_IMPORTED_MODULE_3__["serializeError"])(error).message;
          }

          notifier.show({
            message: message,
            color: _models__WEBPACK_IMPORTED_MODULE_5__["AppearanceColor"].Error
          }); // continue with the default global error handler

          _get(_getPrototypeOf(AppErrorHandler.prototype), "handleError", this).call(this, error);
        }
      }]);

      return AppErrorHandler;
    }(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]);

    AppErrorHandler.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }];
    };

    AppErrorHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AppErrorHandler);
    /***/
  },

  /***/
  "./src/app/core/services/ethers-web3-provider-service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/core/services/ethers-web3-provider-service.ts ***!
    \***************************************************************/

  /*! exports provided: EthersWeb3ProviderService */

  /***/
  function srcAppCoreServicesEthersWeb3ProviderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EthersWeb3ProviderService", function () {
      return EthersWeb3ProviderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ethers */
    "./node_modules/ethers/dist/ethers.min.js");
    /* harmony import */


    var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _tokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tokens */
    "./src/app/core/services/tokens/index.ts");

    var EthersWeb3ProviderService = /*#__PURE__*/function () {
      function EthersWeb3ProviderService(ethProvider) {
        _classCallCheck(this, EthersWeb3ProviderService);

        this.ethProvider = ethProvider;
        /*
        I didnt want to initialize Web3Provider here, because if MetaMask has not been installed
         the ethereum provider object  windows.ethereum will be null, and call to instantiate
        Web3Provider will throw error. This error wil not be caught because the global error handler is not ready yet
        due the fact that this service is { providedIn: 'root' } and is created during initialization of the app
        */
      } // The following account will never be exposed 


      _createClass(EthersWeb3ProviderService, [{
        key: "getSelectedAddress",
        value: function getSelectedAddress() {
          var web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_2__["ethers"].providers.Web3Provider(this.ethProvider);
          var signer = web3Provider.getSigner();
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(signer.getAddress()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (address) {
            return console.log('account address', address);
          }));
        }
      }, {
        key: "getNetwork",
        value: function getNetwork() {
          var web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_2__["ethers"].providers.Web3Provider(this.ethProvider);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(web3Provider.getNetwork()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (network) {
            return network.name;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (name) {
            return console.log("network name: ".concat(name));
          }));
        }
      }, {
        key: "getBalance",
        value: function getBalance() {
          var web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_2__["ethers"].providers.Web3Provider(this.ethProvider);
          var signer = web3Provider.getSigner(); // getBalance(addressOrName: string | Promise<string>, blockTag?: BlockTag | Promise<BlockTag>): Promise<BigNumber>;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(web3Provider.getBalance(signer.getAddress())).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (weiBalance) {
            return console.log('wei balance', weiBalance);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (weiBalance) {
            return ethers__WEBPACK_IMPORTED_MODULE_2__["utils"].formatEther(weiBalance);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (balance) {
            return console.log('eth balance', balance);
          }));
        }
      }]);

      return EthersWeb3ProviderService;
    }();

    EthersWeb3ProviderService.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_tokens__WEBPACK_IMPORTED_MODULE_5__["EthereumProviderToken"]]
        }]
      }];
    };

    EthersWeb3ProviderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_tokens__WEBPACK_IMPORTED_MODULE_5__["EthereumProviderToken"]))], EthersWeb3ProviderService);
    /***/
  },

  /***/
  "./src/app/core/services/http-error.interceptor.ts":
  /*!*********************************************************!*\
    !*** ./src/app/core/services/http-error.interceptor.ts ***!
    \*********************************************************/

  /*! exports provided: HttpErrorInterceptor */

  /***/
  function srcAppCoreServicesHttpErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function () {
      return HttpErrorInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"); // Passes HttpErrorResponse to application global error handler */


    var HttpErrorInterceptor = /*#__PURE__*/function () {
      function HttpErrorInterceptor(injector) {
        _classCallCheck(this, HttpErrorInterceptor);

        this.injector = injector;
      }

      _createClass(HttpErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this6 = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), // retry one more time
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.log('injector'); // here we inject the global ErrorHandler
            // which will use our custom global error handler AppErrorHandler

            var appErrorHandler = _this6.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]);

            appErrorHandler.handleError(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
          }));
        }
      }]);

      return HttpErrorInterceptor;
    }();

    HttpErrorInterceptor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }];
    };

    HttpErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], HttpErrorInterceptor);
    /***/
  },

  /***/
  "./src/app/core/services/ipfs-daemon.services.ts":
  /*!*******************************************************!*\
    !*** ./src/app/core/services/ipfs-daemon.services.ts ***!
    \*******************************************************/

  /*! exports provided: IpfsDaemonService */

  /***/
  function srcAppCoreServicesIpfsDaemonServicesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IpfsDaemonService", function () {
      return IpfsDaemonService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _tokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tokens */
    "./src/app/core/services/tokens/index.ts");
    /* harmony import */


    var buffer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! buffer */
    "./node_modules/node-libs-browser/node_modules/buffer/index.js");
    /* harmony import */


    var buffer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_6__);

    var IpfsDaemonService = /*#__PURE__*/function () {
      function IpfsDaemonService(ipfs, httpClient) {
        _classCallCheck(this, IpfsDaemonService);

        this.ipfs = ipfs;
        this.httpClient = httpClient;
      }

      _createClass(IpfsDaemonService, [{
        key: "getId",
        value: function getId() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.ipfs.id()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            return console.log("IPFS node id object: ".concat(JSON.stringify(res)));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res.id;
          }));
        }
      }, {
        key: "getVersion",
        value: function getVersion() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.ipfs.version()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            return console.log("IPFS node version object: ".concat(JSON.stringify(res)));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res.version;
          }));
        }
      }, {
        key: "addFile",
        value: function addFile(file) {
          var _this7 = this;

          // based on https://github.com/multiformats/js-cid
          var data = {
            path: file.name,
            content: file
          };
          var options = {
            progress: function progress(prog) {
              return console.log("progress report: ".concat(prog));
            }
          };
          var sz = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["defer"])(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var e_1, _a, res, _b, _c, result;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.prev = 0;
                      _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__asyncValues"])(this.ipfs.add(data, options));

                    case 2:
                      _context.next = 4;
                      return _b.next();

                    case 4:
                      _c = _context.sent;

                      if (_c.done) {
                        _context.next = 10;
                        break;
                      }

                      result = _c.value;
                      res = result;

                    case 8:
                      _context.next = 2;
                      break;

                    case 10:
                      _context.next = 15;
                      break;

                    case 12:
                      _context.prev = 12;
                      _context.t0 = _context["catch"](0);
                      e_1 = {
                        error: _context.t0
                      };

                    case 15:
                      _context.prev = 15;
                      _context.prev = 16;

                      if (!(_c && !_c.done && (_a = _b["return"]))) {
                        _context.next = 20;
                        break;
                      }

                      _context.next = 20;
                      return _a.call(_b);

                    case 20:
                      _context.prev = 20;

                      if (!e_1) {
                        _context.next = 23;
                        break;
                      }

                      throw e_1.error;

                    case 23:
                      return _context.finish(20);

                    case 24:
                      return _context.finish(15);

                    case 25:
                      return _context.abrupt("return", res);

                    case 26:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[0, 12, 15, 25], [16,, 20, 24]]);
            }));
          });
          return sz.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            return console.log("IPFS node response json: ".concat(JSON.stringify(res)));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res.cid.toString();
          }));
        }
      }, {
        key: "getFile",
        value: function getFile(hash) {
          var _this8 = this;

          // based on https://medium.com/@benlesh/rxjs-observable-interop-with-promises-and-async-await-bebb05306875
          var sz = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["defer"])(function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var e_2, _a, chunks, _b, _c, chunk, buff;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      chunks = [];
                      _context2.prev = 1;
                      _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__asyncValues"])(this.ipfs.cat(hash));

                    case 3:
                      _context2.next = 5;
                      return _b.next();

                    case 5:
                      _c = _context2.sent;

                      if (_c.done) {
                        _context2.next = 11;
                        break;
                      }

                      chunk = _c.value;
                      chunks.push(chunk);

                    case 9:
                      _context2.next = 3;
                      break;

                    case 11:
                      _context2.next = 16;
                      break;

                    case 13:
                      _context2.prev = 13;
                      _context2.t0 = _context2["catch"](1);
                      e_2 = {
                        error: _context2.t0
                      };

                    case 16:
                      _context2.prev = 16;
                      _context2.prev = 17;

                      if (!(_c && !_c.done && (_a = _b["return"]))) {
                        _context2.next = 21;
                        break;
                      }

                      _context2.next = 21;
                      return _a.call(_b);

                    case 21:
                      _context2.prev = 21;

                      if (!e_2) {
                        _context2.next = 24;
                        break;
                      }

                      throw e_2.error;

                    case 24:
                      return _context2.finish(21);

                    case 25:
                      return _context2.finish(16);

                    case 26:
                      buff = buffer__WEBPACK_IMPORTED_MODULE_6__["Buffer"].concat(chunks);
                      return _context2.abrupt("return", buff);

                    case 28:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[1, 13, 16, 26], [17,, 21, 25]]);
            }));
          });
          return sz.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (buffer) {
            // based on https://mraddon.blog/2018/07/15/how-to-push-load-image-file-from-to-ipfs-using-javascript-examples-part-iv/
            var byteString = buffer.toString('base64'); // idea based on https://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript

            var url = "data:application/octet-stream;base64,".concat(byteString); // idea based on https://brianflove.com/2017/11/02/angular-http-client-blob/

            return _this8.httpClient.get(url, {
              responseType: 'blob'
            });
          }));
        }
      }]);

      return IpfsDaemonService;
    }();

    IpfsDaemonService.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_tokens__WEBPACK_IMPORTED_MODULE_5__["ipfsToken"]]
        }]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    IpfsDaemonService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_tokens__WEBPACK_IMPORTED_MODULE_5__["ipfsToken"]))], IpfsDaemonService);
    /***/
  },

  /***/
  "./src/app/core/services/snack-bar.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/core/services/snack-bar.service.ts ***!
    \****************************************************/

  /*! exports provided: SnackBarService */

  /***/
  function srcAppCoreServicesSnackBarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SnackBarService", function () {
      return SnackBarService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _components_snackbar_snack_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../components/snackbar/snack-bar.component */
    "./src/app/core/components/snackbar/snack-bar.component.ts");

    var SnackBarService_1;

    var SnackBarService = SnackBarService_1 = /*#__PURE__*/function () {
      function SnackBarService(matSnackBar) {
        _classCallCheck(this, SnackBarService);

        this.matSnackBar = matSnackBar;
      }

      _createClass(SnackBarService, [{
        key: "show",
        value: function show(messageInfo) {
          this.matSnackBar.openFromComponent(_components_snackbar_snack_bar_component__WEBPACK_IMPORTED_MODULE_3__["SnackBarComponent"], {
            data: {
              message: messageInfo.message,
              color: messageInfo.color
            },
            duration: SnackBarService_1.SNACKBAR_DELAY,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
        }
      }]);

      return SnackBarService;
    }();

    SnackBarService.SNACKBAR_DELAY = 7000;

    SnackBarService.ctorParameters = function () {
      return [{
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }];
    };

    SnackBarService = SnackBarService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SnackBarService);
    /***/
  },

  /***/
  "./src/app/core/services/spinner-overlay.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/core/services/spinner-overlay.service.ts ***!
    \**********************************************************/

  /*! exports provided: SpinnerOverlayService */

  /***/
  function srcAppCoreServicesSpinnerOverlayServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerOverlayService", function () {
      return SpinnerOverlayService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"); // cdk


    var SpinnerOverlayService = function SpinnerOverlayService(overlay) {
      var _this9 = this;

      _classCallCheck(this, SpinnerOverlayService);

      this.overlay = overlay;
      this.spin$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();

      this.show = function () {
        return _this9.spin$.next(1);
      };

      this.hide = function () {
        return _this9.spin$.next(-1);
      };

      this.reset = function () {
        return _this9.spin$.next(0);
      };

      this.spinnerTopRef = this.overlay.create({
        hasBackdrop: true,
        positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
      });
      this.spin$.asObservable().pipe(
      /*
      Combines together all values emitted on the source,
      using an accumulator function that knows how to join a new source value
      into the accumulation from the past.
      */
      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["scan"])(function (acc, next) {
        // The (!) operator reverses the logical (true or false)
        // !0 - is true,  (!5) is false
        if (!next) {
          return 0;
        }

        return acc + next >= 0 ? acc + next : 0;
      }, 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (val) {
        return val > 0;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])()).subscribe(function (res) {
        if (res) {
          _this9.spinnerTopRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatSpinner"]));
        } else if (_this9.spinnerTopRef.hasAttached()) {
          _this9.spinnerTopRef.detach();
        }
      });
    };

    SpinnerOverlayService.ctorParameters = function () {
      return [{
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]
      }];
    };

    SpinnerOverlayService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SpinnerOverlayService);
    /***/
  },

  /***/
  "./src/app/core/services/tokens/ethereum-provider-token.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/core/services/tokens/ethereum-provider-token.ts ***!
    \*****************************************************************/

  /*! exports provided: EthereumProviderToken */

  /***/
  function srcAppCoreServicesTokensEthereumProviderTokenTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EthereumProviderToken", function () {
      return EthereumProviderToken;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EthereumProviderToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Ethereum provider', {
      providedIn: 'root',
      factory: function factory() {
        return window.ethereum;
      }
    });
    /***/
  },

  /***/
  "./src/app/core/services/tokens/index.ts":
  /*!***********************************************!*\
    !*** ./src/app/core/services/tokens/index.ts ***!
    \***********************************************/

  /*! exports provided: EthereumProviderToken, windowRefToken, ipfsToken */

  /***/
  function srcAppCoreServicesTokensIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _ethereum_provider_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./ethereum-provider-token */
    "./src/app/core/services/tokens/ethereum-provider-token.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EthereumProviderToken", function () {
      return _ethereum_provider_token__WEBPACK_IMPORTED_MODULE_0__["EthereumProviderToken"];
    });
    /* harmony import */


    var _window_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./window-token */
    "./src/app/core/services/tokens/window-token.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "windowRefToken", function () {
      return _window_token__WEBPACK_IMPORTED_MODULE_1__["windowRefToken"];
    });
    /* harmony import */


    var _ipfs_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ipfs-token */
    "./src/app/core/services/tokens/ipfs-token.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ipfsToken", function () {
      return _ipfs_token__WEBPACK_IMPORTED_MODULE_2__["ipfsToken"];
    });
    /***/

  },

  /***/
  "./src/app/core/services/tokens/ipfs-token.ts":
  /*!****************************************************!*\
    !*** ./src/app/core/services/tokens/ipfs-token.ts ***!
    \****************************************************/

  /*! exports provided: ipfsToken */

  /***/
  function srcAppCoreServicesTokensIpfsTokenTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ipfsToken", function () {
      return ipfsToken;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ipfs_http_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ipfs-http-client */
    "./node_modules/ipfs-http-client/src/index.js");
    /* harmony import */


    var ipfs_http_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ipfs_http_client__WEBPACK_IMPORTED_MODULE_1__);

    var ipfsToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('The IPFS Token', {
      providedIn: 'root',
      // safe to put in the 'root',as it
      // will not throw any error until we call IPFS API
      factory: function factory() {
        return new ipfs_http_client__WEBPACK_IMPORTED_MODULE_1___default.a({
          host: 'ipfs.infura.io',
          port: '5001',
          protocol: 'https'
        });
      }
    });
    /***/
  },

  /***/
  "./src/app/core/services/tokens/window-token.ts":
  /*!******************************************************!*\
    !*** ./src/app/core/services/tokens/window-token.ts ***!
    \******************************************************/

  /*! exports provided: windowRefToken */

  /***/
  function srcAppCoreServicesTokensWindowTokenTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "windowRefToken", function () {
      return windowRefToken;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var windowRefToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Native window object', {
      providedIn: 'root',
      factory: function factory() {
        return window;
      }
    });
    /***/
  },

  /***/
  "./src/app/core/store/actions/error.actions.ts":
  /*!*****************************************************!*\
    !*** ./src/app/core/store/actions/error.actions.ts ***!
    \*****************************************************/

  /*! exports provided: errorMessage */

  /***/
  function srcAppCoreStoreActionsErrorActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "errorMessage", function () {
      return errorMessage;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var errorMessage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Error] Error Message', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/core/store/actions/index.ts":
  /*!*********************************************!*\
    !*** ./src/app/core/store/actions/index.ts ***!
    \*********************************************/

  /*! exports provided: SpinnerActions, ErrorActions, SnackBarActions, Web3GatewayActions, IpfsDaemonActions */

  /***/
  function srcAppCoreStoreActionsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _spinner_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./spinner.actions */
    "./src/app/core/store/actions/spinner.actions.ts");
    /* harmony reexport (module object) */


    __webpack_require__.d(__webpack_exports__, "SpinnerActions", function () {
      return _spinner_actions__WEBPACK_IMPORTED_MODULE_0__;
    });
    /* harmony import */


    var _error_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./error.actions */
    "./src/app/core/store/actions/error.actions.ts");
    /* harmony reexport (module object) */


    __webpack_require__.d(__webpack_exports__, "ErrorActions", function () {
      return _error_actions__WEBPACK_IMPORTED_MODULE_1__;
    });
    /* harmony import */


    var _snack_bar_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./snack-bar.action */
    "./src/app/core/store/actions/snack-bar.action.ts");
    /* harmony reexport (module object) */


    __webpack_require__.d(__webpack_exports__, "SnackBarActions", function () {
      return _snack_bar_action__WEBPACK_IMPORTED_MODULE_2__;
    });
    /* harmony import */


    var _web3_gateway_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./web3-gateway.actions */
    "./src/app/core/store/actions/web3-gateway.actions.ts");
    /* harmony reexport (module object) */


    __webpack_require__.d(__webpack_exports__, "Web3GatewayActions", function () {
      return _web3_gateway_actions__WEBPACK_IMPORTED_MODULE_3__;
    });
    /* harmony import */


    var _ipfs_daemon_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./ipfs-daemon.actions */
    "./src/app/core/store/actions/ipfs-daemon.actions.ts");
    /* harmony reexport (module object) */


    __webpack_require__.d(__webpack_exports__, "IpfsDaemonActions", function () {
      return _ipfs_daemon_actions__WEBPACK_IMPORTED_MODULE_4__;
    });
    /***/

  },

  /***/
  "./src/app/core/store/actions/ipfs-daemon.actions.ts":
  /*!***********************************************************!*\
    !*** ./src/app/core/store/actions/ipfs-daemon.actions.ts ***!
    \***********************************************************/

  /*! exports provided: connectSuccess, ipfsConnectRedirect */

  /***/
  function srcAppCoreStoreActionsIpfsDaemonActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "connectSuccess", function () {
      return connectSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ipfsConnectRedirect", function () {
      return ipfsConnectRedirect;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var connectSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[IPFS/Daemon] Connect Success');
    var ipfsConnectRedirect = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[IPFS/Daemon] IPFS Connect Redirect');
    /***/
  },

  /***/
  "./src/app/core/store/actions/snack-bar.action.ts":
  /*!********************************************************!*\
    !*** ./src/app/core/store/actions/snack-bar.action.ts ***!
    \********************************************************/

  /*! exports provided: open */

  /***/
  function srcAppCoreStoreActionsSnackBarActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "open", function () {
      return open;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var open = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[SnackBar] Open', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/core/store/actions/spinner.actions.ts":
  /*!*******************************************************!*\
    !*** ./src/app/core/store/actions/spinner.actions.ts ***!
    \*******************************************************/

  /*! exports provided: show, hide */

  /***/
  function srcAppCoreStoreActionsSpinnerActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "show", function () {
      return show;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hide", function () {
      return hide;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var show = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Spinner] Show');
    var hide = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Spinner] Hide');
    /***/
  },

  /***/
  "./src/app/core/store/actions/web3-gateway.actions.ts":
  /*!************************************************************!*\
    !*** ./src/app/core/store/actions/web3-gateway.actions.ts ***!
    \************************************************************/

  /*! exports provided: ethereumInject, ethereumInjectSuccess, ethereumConnect, ethereumConnectSuccess, ethereumDisconnect, ethereumDisconnectSuccess, getNetwork, networkSuccess, getAccount, accountSuccess, getBalance, balanceSuccess, ethereumConnectRedirect */

  /***/
  function srcAppCoreStoreActionsWeb3GatewayActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ethereumInject", function () {
      return ethereumInject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ethereumInjectSuccess", function () {
      return ethereumInjectSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ethereumConnect", function () {
      return ethereumConnect;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ethereumConnectSuccess", function () {
      return ethereumConnectSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ethereumDisconnect", function () {
      return ethereumDisconnect;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ethereumDisconnectSuccess", function () {
      return ethereumDisconnectSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getNetwork", function () {
      return getNetwork;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "networkSuccess", function () {
      return networkSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAccount", function () {
      return getAccount;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "accountSuccess", function () {
      return accountSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getBalance", function () {
      return getBalance;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "balanceSuccess", function () {
      return balanceSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ethereumConnectRedirect", function () {
      return ethereumConnectRedirect;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var ethereumInject = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Web3/Gateway] Ethereum Inject');
    var ethereumInjectSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Web3/Gateway] Ethereum Inject Success');
    var ethereumConnect = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Web3/Gateway] Ethereum Connect');
    var ethereumConnectSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Web3/Gateway] Ethereum Connect Success');
    var ethereumDisconnect = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Web3/Gateway] Ethereum Disconnect');
    var ethereumDisconnectSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Web3/Gateway] Ethereum Disconnect Success');
    var getNetwork = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Web3/Gateway] Ethereum Network Request');
    var networkSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Web3/Gateway] Ethereum Network Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var getAccount = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Web3/Gateway] Selected Account Request');
    var accountSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Web3/Gateway] Selected Account Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var getBalance = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Web3/Gateway] Balance Request');
    var balanceSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Web3/Gateway] Balance Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var ethereumConnectRedirect = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Web3/Gateway] Ethereum Connect Redirect');
    /***/
  },

  /***/
  "./src/app/core/store/effects/error.effects.ts":
  /*!*****************************************************!*\
    !*** ./src/app/core/store/effects/error.effects.ts ***!
    \*****************************************************/

  /*! exports provided: ErrorEffects */

  /***/
  function srcAppCoreStoreEffectsErrorEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorEffects", function () {
      return ErrorEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../actions */
    "./src/app/core/store/actions/index.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../models */
    "./src/app/core/models/index.ts");

    var ErrorEffects = function ErrorEffects(actions$) {
      var _this10 = this;

      _classCallCheck(this, ErrorEffects);

      this.actions$ = actions$;
      this.handleError$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
        return _this10.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["ErrorActions"].errorMessage), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) {
          return action.errorMsg;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (errorMsg) {
          return console.error('Got error:', errorMsg);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (errorMsg) {
          var msg = {
            message: errorMsg,
            color: _models__WEBPACK_IMPORTED_MODULE_5__["AppearanceColor"].Error
          };
          return _actions__WEBPACK_IMPORTED_MODULE_4__["SnackBarActions"].open({
            payload: msg
          });
        }));
      });
    };

    ErrorEffects.ctorParameters = function () {
      return [{
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
      }];
    };

    ErrorEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ErrorEffects);
    /***/
  },

  /***/
  "./src/app/core/store/effects/index.ts":
  /*!*********************************************!*\
    !*** ./src/app/core/store/effects/index.ts ***!
    \*********************************************/

  /*! exports provided: effects, ErrorEffects, SnackBarEffects, Web3GatewayEffects, IpfsDaemonEffects, SpinnerEffects */

  /***/
  function srcAppCoreStoreEffectsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "effects", function () {
      return effects;
    });
    /* harmony import */


    var _error_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./error.effects */
    "./src/app/core/store/effects/error.effects.ts");
    /* harmony import */


    var _snack_bar_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./snack-bar.effects */
    "./src/app/core/store/effects/snack-bar.effects.ts");
    /* harmony import */


    var _web3_gateway_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./web3-gateway.effects */
    "./src/app/core/store/effects/web3-gateway.effects.ts");
    /* harmony import */


    var _ipfs_daemon_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ipfs-daemon.effects */
    "./src/app/core/store/effects/ipfs-daemon.effects.ts");
    /* harmony import */


    var _spinner_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./spinner.effects */
    "./src/app/core/store/effects/spinner.effects.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ErrorEffects", function () {
      return _error_effects__WEBPACK_IMPORTED_MODULE_0__["ErrorEffects"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SnackBarEffects", function () {
      return _snack_bar_effects__WEBPACK_IMPORTED_MODULE_1__["SnackBarEffects"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Web3GatewayEffects", function () {
      return _web3_gateway_effects__WEBPACK_IMPORTED_MODULE_2__["Web3GatewayEffects"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IpfsDaemonEffects", function () {
      return _ipfs_daemon_effects__WEBPACK_IMPORTED_MODULE_3__["IpfsDaemonEffects"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SpinnerEffects", function () {
      return _spinner_effects__WEBPACK_IMPORTED_MODULE_4__["SpinnerEffects"];
    });

    var effects = [_error_effects__WEBPACK_IMPORTED_MODULE_0__["ErrorEffects"], _snack_bar_effects__WEBPACK_IMPORTED_MODULE_1__["SnackBarEffects"], _spinner_effects__WEBPACK_IMPORTED_MODULE_4__["SpinnerEffects"], _web3_gateway_effects__WEBPACK_IMPORTED_MODULE_2__["Web3GatewayEffects"], _ipfs_daemon_effects__WEBPACK_IMPORTED_MODULE_3__["IpfsDaemonEffects"]];
    /***/
  },

  /***/
  "./src/app/core/store/effects/ipfs-daemon.effects.ts":
  /*!***********************************************************!*\
    !*** ./src/app/core/store/effects/ipfs-daemon.effects.ts ***!
    \***********************************************************/

  /*! exports provided: IpfsDaemonEffects */

  /***/
  function srcAppCoreStoreEffectsIpfsDaemonEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IpfsDaemonEffects", function () {
      return IpfsDaemonEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var serialize_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! serialize-error */
    "./node_modules/serialize-error/index.js");
    /* harmony import */


    var serialize_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(serialize_error__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_ipfs_daemon_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/ipfs-daemon.services */
    "./src/app/core/services/ipfs-daemon.services.ts");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../actions */
    "./src/app/core/store/actions/index.ts");

    var IpfsDaemonEffects = /*#__PURE__*/function () {
      function IpfsDaemonEffects(ipfsSrv, actions$, router) {
        var _this11 = this;

        _classCallCheck(this, IpfsDaemonEffects);

        this.ipfsSrv = ipfsSrv;
        this.actions$ = actions$;
        this.router = router;
        this.onConnect$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
          return _this11.actions$.pipe(
          /*
          After all the root effects have been added, the root effect dispatches a ROOT_EFFECTS_INIT action.
          You can see this action as a lifecycle hook, which you can use in order to execute some code after
          all your root effects have been added.
          */
          Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ROOT_EFFECTS_INIT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return _this11.ipfsSrv.getVersion().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (version) {
              return console.log("IPFS node version: ".concat(version));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_) {
              return _actions__WEBPACK_IMPORTED_MODULE_8__["IpfsDaemonActions"].connectSuccess();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_this11.handleError(err));
            }));
          }));
        });
        this.connectRedirect$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
          return _this11.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_8__["IpfsDaemonActions"].ipfsConnectRedirect), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (_) {
            _this11.router.navigate(['/']);
          }));
        }, {
          dispatch: false
        });
      }

      _createClass(IpfsDaemonEffects, [{
        key: "handleError",
        value: function handleError(error) {
          var friendlyErrorMessage = Object(serialize_error__WEBPACK_IMPORTED_MODULE_3__["serializeError"])(error).message;
          return _actions__WEBPACK_IMPORTED_MODULE_8__["ErrorActions"].errorMessage({
            errorMsg: friendlyErrorMessage
          });
        }
      }]);

      return IpfsDaemonEffects;
    }();

    IpfsDaemonEffects.ctorParameters = function () {
      return [{
        type: _services_ipfs_daemon_services__WEBPACK_IMPORTED_MODULE_7__["IpfsDaemonService"]
      }, {
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    IpfsDaemonEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], IpfsDaemonEffects);
    /***/
  },

  /***/
  "./src/app/core/store/effects/snack-bar.effects.ts":
  /*!*********************************************************!*\
    !*** ./src/app/core/store/effects/snack-bar.effects.ts ***!
    \*********************************************************/

  /*! exports provided: SnackBarEffects */

  /***/
  function srcAppCoreStoreEffectsSnackBarEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SnackBarEffects", function () {
      return SnackBarEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../actions */
    "./src/app/core/store/actions/index.ts");
    /* harmony import */


    var _services_snack_bar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/snack-bar.service */
    "./src/app/core/services/snack-bar.service.ts");

    var SnackBarEffects = function SnackBarEffects(actions$, notifier) {
      var _this12 = this;

      _classCallCheck(this, SnackBarEffects);

      this.actions$ = actions$;
      this.notifier = notifier;
      this.openSnackbar$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
        return _this12.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_4__["SnackBarActions"].open), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) {
          return action.payload;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (payload) {
          return _this12.notifier.show(payload);
        }));
      }, {
        dispatch: false
      });
    };

    SnackBarEffects.SNACKBAR_DELAY = 7000;

    SnackBarEffects.ctorParameters = function () {
      return [{
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
      }, {
        type: _services_snack_bar_service__WEBPACK_IMPORTED_MODULE_5__["SnackBarService"]
      }];
    };

    SnackBarEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SnackBarEffects);
    /***/
  },

  /***/
  "./src/app/core/store/effects/spinner.effects.ts":
  /*!*******************************************************!*\
    !*** ./src/app/core/store/effects/spinner.effects.ts ***!
    \*******************************************************/

  /*! exports provided: SpinnerEffects */

  /***/
  function srcAppCoreStoreEffectsSpinnerEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerEffects", function () {
      return SpinnerEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../reducers */
    "./src/app/core/store/reducers/index.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _services_spinner_overlay_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/spinner-overlay.service */
    "./src/app/core/services/spinner-overlay.service.ts");

    var SpinnerEffects = function SpinnerEffects(store$, spinner) {
      var _this13 = this;

      _classCallCheck(this, SpinnerEffects);

      this.store$ = store$;
      this.spinner = spinner;
      this.handleSpinner$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
        return _this13.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["getSpinnerShow"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (isShow) {
          return isShow ? _this13.spinner.show() : _this13.spinner.hide();
        }));
      }, {
        dispatch: false
      });
    };

    SpinnerEffects.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
      }, {
        type: _services_spinner_overlay_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerOverlayService"]
      }];
    };

    SpinnerEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SpinnerEffects);
    /***/
  },

  /***/
  "./src/app/core/store/effects/web3-gateway.effects.ts":
  /*!************************************************************!*\
    !*** ./src/app/core/store/effects/web3-gateway.effects.ts ***!
    \************************************************************/

  /*! exports provided: Web3GatewayEffects */

  /***/
  function srcAppCoreStoreEffectsWeb3GatewayEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Web3GatewayEffects", function () {
      return Web3GatewayEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var serialize_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! serialize-error */
    "./node_modules/serialize-error/index.js");
    /* harmony import */


    var serialize_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(serialize_error__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../reducers */
    "./src/app/core/store/reducers/index.ts");
    /* harmony import */


    var _services_tokens__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../services/tokens */
    "./src/app/core/services/tokens/index.ts");
    /* harmony import */


    var _services_ethers_web3_provider_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../services/ethers-web3-provider-service */
    "./src/app/core/services/ethers-web3-provider-service.ts");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../actions */
    "./src/app/core/store/actions/index.ts");
    /* harmony import */


    var ethers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ethers */
    "./node_modules/ethers/dist/ethers.min.js");
    /* harmony import */


    var ethers__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_13__);

    var Web3GatewayEffects = /*#__PURE__*/function () {
      function Web3GatewayEffects(ethProvider, actions$, store$, router, web3ProviderSrv, document) {
        var _this14 = this;

        _classCallCheck(this, Web3GatewayEffects);

        this.ethProvider = ethProvider;
        this.actions$ = actions$;
        this.store$ = store$;
        this.router = router;
        this.web3ProviderSrv = web3ProviderSrv;
        this.document = document; // ethereum.enable() will be Deprecated

        /*
        metaMaskEnable$ = createEffect(() =>
          this.actions$.pipe(
            ofType(Web3ProviderActions.init),
            exhaustMap(() => {
              if ('enable' in this.web3Token) {
                       // ethereum.enable(): Requests the user provides an ethereum address to be identified by.
                // Returns a promise of an array of hex-prefixed ethereum address strings.
                return from(this.web3Token.enable()).pipe(
                  tap((ethAccounts: string[]) =>
                    console.log(
                      'Ethereum provider has been granted access to the following accounts',
                      ethAccounts
                    )
                  ),
                  map((ethAccounts: string[]) => {
                    if (ethAccounts.length === 0) {
                      return ErrorActions.errorMessage({
                        errorMsg: 'Can not get any user accounts'
                      });
                    }
                           return Web3ProviderActions.initSuccess();
                  }),
                         // User denied account access
                  catchError((err: Error) =>
                    of(this.handleError(err), SpinnerActions.hide())
                  )
                );
              }
                     return empty;
            })
          )
        );
        */
        // only allow MetaMask

        /*
        After all the root effects have been added, the root effect dispatches a ROOT_EFFECTS_INIT action.
        You can see this action as a lifecycle hook, which you can use in order to execute some code after
         all your root effects have been added.
        */

        this.ethereumInject$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["createEffect"])(function () {
          return _this14.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["ofType"])(_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["ROOT_EFFECTS_INIT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
            // https://gist.github.com/rekmarks/d318677c8fc89e5f7a2f526e00a0768a
            // Returns true or false, representing whether the user has MetaMask installed.
            if (!_this14.ethProvider || !_this14.ethProvider.isMetaMask) {
              return _actions__WEBPACK_IMPORTED_MODULE_12__["ErrorActions"].errorMessage({
                errorMsg: "Please install MetaMask."
              });
            }

            return _actions__WEBPACK_IMPORTED_MODULE_12__["Web3GatewayActions"].ethereumInjectSuccess();
          }));
        });
        this.ethereumConnect$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["createEffect"])(function () {
          return _this14.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_12__["Web3GatewayActions"].ethereumConnect), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function () {
            // This is equivalent to ethereum.enable()
            // return list of user account
            // currently only ever one: accounts[0]
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(_this14.ethProvider.send('eth_requestAccounts')).pipe( // You now have an array of accounts!
            // Currently only ever one:
            // { id: 1, jsonrpc: "2.0", result: ['0xFDEa65C8e26263F6d9A1B5de9555D2931A33b825']}
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (ethAccounts) {
              if (ethAccounts.length === 0) {
                return _actions__WEBPACK_IMPORTED_MODULE_12__["ErrorActions"].errorMessage({
                  errorMsg: "Can't get any user accounts"
                });
              }

              console.log("Ethereum provider has been granted access to the following account:", ethAccounts[0]);
              return _actions__WEBPACK_IMPORTED_MODULE_12__["Web3GatewayActions"].ethereumConnectSuccess();
            }), // User denied account access
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_this14.handleError(err), _actions__WEBPACK_IMPORTED_MODULE_12__["SpinnerActions"].hide());
            }));
          }));
        });
        this.ethereumDisconnect$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["createEffect"])(function () {
          return _this14.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_12__["Web3GatewayActions"].ethereumDisconnect), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
            /*
             window.ethereum.disable() for logging out of provider
             This future is not implemented yet. See discussion here:
             https://ethereum-magicians.org/t/window-ethereum-disable-for-logging-out-of-provider/3630
             https://ethereum-magicians.org/t/eip-1102-opt-in-provider-access/414/59
            */
            return _actions__WEBPACK_IMPORTED_MODULE_12__["ErrorActions"].errorMessage({
              errorMsg: "This feature is in a suggested proposal yet."
            });
          }));
        });
        this.connectRedirect$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["createEffect"])(function () {
          return _this14.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_12__["Web3GatewayActions"].ethereumConnectRedirect), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (_) {
            _this14.router.navigate(['/']);
          }));
        }, {
          dispatch: false
        });
        this.showSpinner$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["createEffect"])(function () {
          return _this14.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_12__["Web3GatewayActions"].ethereumConnect), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
            return _actions__WEBPACK_IMPORTED_MODULE_12__["SpinnerActions"].show();
          }));
        });
        this.hideSpinner$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["createEffect"])(function () {
          return _this14.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_12__["Web3GatewayActions"].ethereumConnectSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
            return _actions__WEBPACK_IMPORTED_MODULE_12__["SpinnerActions"].hide();
          }));
        });
        this.getAccountInfo$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["createEffect"])(function () {
          return _this14.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_12__["Web3GatewayActions"].ethereumConnectSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return [_actions__WEBPACK_IMPORTED_MODULE_12__["Web3GatewayActions"].getNetwork(), _actions__WEBPACK_IMPORTED_MODULE_12__["Web3GatewayActions"].getAccount(), _actions__WEBPACK_IMPORTED_MODULE_12__["Web3GatewayActions"].getBalance()];
          }));
        });
        this.getAddress$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["createEffect"])(function () {
          return _this14.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_12__["Web3GatewayActions"].getAccount), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return _this14.web3ProviderSrv.getSelectedAddress().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (address) {
              return _actions__WEBPACK_IMPORTED_MODULE_12__["Web3GatewayActions"].accountSuccess({
                address: address
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_this14.handleError(err));
            }));
          }));
        });
        this.getBalance$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["createEffect"])(function () {
          return _this14.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_12__["Web3GatewayActions"].getBalance), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return _this14.web3ProviderSrv.getBalance().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (balance) {
              return _actions__WEBPACK_IMPORTED_MODULE_12__["Web3GatewayActions"].balanceSuccess({
                balance: balance
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_this14.handleError(err));
            }));
          }));
        });
        this.getNetwork$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["createEffect"])(function () {
          return _this14.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_12__["Web3GatewayActions"].getNetwork), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return _this14.web3ProviderSrv.getNetwork().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (network) {
              return _actions__WEBPACK_IMPORTED_MODULE_12__["Web3GatewayActions"].networkSuccess({
                network: network
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_this14.handleError(err));
            }));
          }));
        }); // example of using native events

        /*
        resize$ = createEffect(
          () =>
          fromEvent(window, 'resize').pipe(
            tap(event => console.log( 'event', event) )
            ),
            { dispatch: false }
        );
               // output
        // event, Event {isTrusted: true, type: "resize", target: Window, currentTarget: Window, eventPhase: 2, …}
        */
        // based on https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1193.md#chainchanged
        // and https://gist.github.com/rekmarks/d318677c8fc89e5f7a2f526e00a0768a
        // Note that this event is emitted on:
        // - page load
        // - when log out from MetaMask
        // - when we switch account or network in MetaMask
        // ** If the array of accounts is non-empty, you're already connected.

        this.accountWatcher$ = !!this.ethProvider ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.ethProvider, 'accountsChanged').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_9__["getAccount"]))), // we only want to refresh the browser when:
        // - we logout from MetaMask (accounts.length == 0)
        // - when we switch account to different account (!!currentAccount && currentAccount !== accounts[0])
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              accounts = _ref2[0],
              currentAccount = _ref2[1];

          if (accounts.length === 0) return true;
          /*
          I notice that using ethers.js it returns account in the hex string like this
          0xd64d1cc32225bd5815cfa7a0b8a6aa46e0ef1285
          but from the event 'accountsChanged' it return the same account hex string like this:
          0xd64D1cc32225bD5815cFA7A0B8a6aa46e0eF1285
          !Notice the capital letters. So we should take care of this situation
          */

          var curAdd = currentAccount ? ethers__WEBPACK_IMPORTED_MODULE_13__["utils"].getAddress(currentAccount) : currentAccount;
          var newAdd = accounts[0] ? ethers__WEBPACK_IMPORTED_MODULE_13__["utils"].getAddress(accounts[0]) : accounts[0];

          if (!!curAdd && curAdd !== newAdd) {
            return true;
          }

          return false;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              accounts = _ref4[0],
              currentAccount = _ref4[1];

          // we need to reload browser
          // based onhttps://medium.com/metamask/no-longer-reloading-pages-on-network-change-fbf041942b44
          _this14.document.location.reload();
        })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(1);
        this.accountChanged$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["createEffect"])(function () {
          return _this14.accountWatcher$;
        }, {
          dispatch: false
        });
      }

      _createClass(Web3GatewayEffects, [{
        key: "handleError",
        value: function handleError(error) {
          var friendlyErrorMessage = Object(serialize_error__WEBPACK_IMPORTED_MODULE_2__["serializeError"])(error).message;
          return _actions__WEBPACK_IMPORTED_MODULE_12__["ErrorActions"].errorMessage({
            errorMsg: friendlyErrorMessage
          });
        }
      }]);

      return Web3GatewayEffects;
    }();

    Web3GatewayEffects.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_services_tokens__WEBPACK_IMPORTED_MODULE_10__["EthereumProviderToken"]]
        }]
      }, {
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["Actions"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_ethers_web3_provider_service__WEBPACK_IMPORTED_MODULE_11__["EthersWeb3ProviderService"]
      }, {
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]
        }]
      }];
    };

    Web3GatewayEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_tokens__WEBPACK_IMPORTED_MODULE_10__["EthereumProviderToken"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]))], Web3GatewayEffects);
    /***/
  },

  /***/
  "./src/app/core/store/index.ts":
  /*!*************************************!*\
    !*** ./src/app/core/store/index.ts ***!
    \*************************************/

  /*! exports provided: ROOT_REDUCERS, logger, metaReducers, selectRouterState, selectQueryParams, selectRouteParams, selectRouteData, selectUrl, selectSpinnerState, getSpinnerShow, selectErrorState, getError, selectWeb3GatewayState, getEthereumInjected, getEthereumConnected, getAccount, getNetwork, getBalance, selectIpfsDaemonState, getIpfsConnectStatus, SpinnerActions, ErrorActions, SnackBarActions, Web3GatewayActions, IpfsDaemonActions, effects, ErrorEffects, SnackBarEffects, Web3GatewayEffects, IpfsDaemonEffects, SpinnerEffects */

  /***/
  function srcAppCoreStoreIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./reducers */
    "./src/app/core/store/reducers/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ROOT_REDUCERS", function () {
      return _reducers__WEBPACK_IMPORTED_MODULE_0__["ROOT_REDUCERS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "logger", function () {
      return _reducers__WEBPACK_IMPORTED_MODULE_0__["logger"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "metaReducers", function () {
      return _reducers__WEBPACK_IMPORTED_MODULE_0__["metaReducers"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "selectRouterState", function () {
      return _reducers__WEBPACK_IMPORTED_MODULE_0__["selectRouterState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "selectQueryParams", function () {
      return _reducers__WEBPACK_IMPORTED_MODULE_0__["selectQueryParams"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "selectRouteParams", function () {
      return _reducers__WEBPACK_IMPORTED_MODULE_0__["selectRouteParams"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "selectRouteData", function () {
      return _reducers__WEBPACK_IMPORTED_MODULE_0__["selectRouteData"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "selectUrl", function () {
      return _reducers__WEBPACK_IMPORTED_MODULE_0__["selectUrl"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "selectSpinnerState", function () {
      return _reducers__WEBPACK_IMPORTED_MODULE_0__["selectSpinnerState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getSpinnerShow", function () {
      return _reducers__WEBPACK_IMPORTED_MODULE_0__["getSpinnerShow"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "selectErrorState", function () {
      return _reducers__WEBPACK_IMPORTED_MODULE_0__["selectErrorState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getError", function () {
      return _reducers__WEBPACK_IMPORTED_MODULE_0__["getError"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "selectWeb3GatewayState", function () {
      return _reducers__WEBPACK_IMPORTED_MODULE_0__["selectWeb3GatewayState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getEthereumInjected", function () {
      return _reducers__WEBPACK_IMPORTED_MODULE_0__["getEthereumInjected"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getEthereumConnected", function () {
      return _reducers__WEBPACK_IMPORTED_MODULE_0__["getEthereumConnected"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getAccount", function () {
      return _reducers__WEBPACK_IMPORTED_MODULE_0__["getAccount"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getNetwork", function () {
      return _reducers__WEBPACK_IMPORTED_MODULE_0__["getNetwork"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getBalance", function () {
      return _reducers__WEBPACK_IMPORTED_MODULE_0__["getBalance"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "selectIpfsDaemonState", function () {
      return _reducers__WEBPACK_IMPORTED_MODULE_0__["selectIpfsDaemonState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getIpfsConnectStatus", function () {
      return _reducers__WEBPACK_IMPORTED_MODULE_0__["getIpfsConnectStatus"];
    });
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./actions */
    "./src/app/core/store/actions/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SpinnerActions", function () {
      return _actions__WEBPACK_IMPORTED_MODULE_1__["SpinnerActions"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ErrorActions", function () {
      return _actions__WEBPACK_IMPORTED_MODULE_1__["ErrorActions"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SnackBarActions", function () {
      return _actions__WEBPACK_IMPORTED_MODULE_1__["SnackBarActions"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Web3GatewayActions", function () {
      return _actions__WEBPACK_IMPORTED_MODULE_1__["Web3GatewayActions"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IpfsDaemonActions", function () {
      return _actions__WEBPACK_IMPORTED_MODULE_1__["IpfsDaemonActions"];
    });
    /* harmony import */


    var _effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./effects */
    "./src/app/core/store/effects/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "effects", function () {
      return _effects__WEBPACK_IMPORTED_MODULE_2__["effects"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ErrorEffects", function () {
      return _effects__WEBPACK_IMPORTED_MODULE_2__["ErrorEffects"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SnackBarEffects", function () {
      return _effects__WEBPACK_IMPORTED_MODULE_2__["SnackBarEffects"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Web3GatewayEffects", function () {
      return _effects__WEBPACK_IMPORTED_MODULE_2__["Web3GatewayEffects"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IpfsDaemonEffects", function () {
      return _effects__WEBPACK_IMPORTED_MODULE_2__["IpfsDaemonEffects"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SpinnerEffects", function () {
      return _effects__WEBPACK_IMPORTED_MODULE_2__["SpinnerEffects"];
    });
    /***/

  },

  /***/
  "./src/app/core/store/reducers/error.reducer.ts":
  /*!******************************************************!*\
    !*** ./src/app/core/store/reducers/error.reducer.ts ***!
    \******************************************************/

  /*! exports provided: reducer, getError */

  /***/
  function srcAppCoreStoreReducersErrorReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getError", function () {
      return getError;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actions */
    "./src/app/core/store/actions/index.ts");

    var initialState = {
      error: null
    };
    var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["ErrorActions"].errorMessage, function (state, _ref5) {
      var errorMsg = _ref5.errorMsg;
      return Object.assign(Object.assign({}, state), {
        error: errorMsg
      });
    }));

    var getError = function getError(state) {
      return state.error;
    };
    /***/

  },

  /***/
  "./src/app/core/store/reducers/index.ts":
  /*!**********************************************!*\
    !*** ./src/app/core/store/reducers/index.ts ***!
    \**********************************************/

  /*! exports provided: ROOT_REDUCERS, logger, metaReducers, selectRouterState, selectQueryParams, selectRouteParams, selectRouteData, selectUrl, selectSpinnerState, getSpinnerShow, selectErrorState, getError, selectWeb3GatewayState, getEthereumInjected, getEthereumConnected, getAccount, getNetwork, getBalance, selectIpfsDaemonState, getIpfsConnectStatus */

  /***/
  function srcAppCoreStoreReducersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROOT_REDUCERS", function () {
      return ROOT_REDUCERS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "logger", function () {
      return logger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "metaReducers", function () {
      return metaReducers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectRouterState", function () {
      return selectRouterState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectQueryParams", function () {
      return selectQueryParams;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectRouteParams", function () {
      return selectRouteParams;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectRouteData", function () {
      return selectRouteData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectUrl", function () {
      return selectUrl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectSpinnerState", function () {
      return selectSpinnerState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getSpinnerShow", function () {
      return getSpinnerShow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectErrorState", function () {
      return selectErrorState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getError", function () {
      return getError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectWeb3GatewayState", function () {
      return selectWeb3GatewayState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getEthereumInjected", function () {
      return getEthereumInjected;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getEthereumConnected", function () {
      return getEthereumConnected;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAccount", function () {
      return getAccount;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getNetwork", function () {
      return getNetwork;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getBalance", function () {
      return getBalance;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectIpfsDaemonState", function () {
      return selectIpfsDaemonState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getIpfsConnectStatus", function () {
      return getIpfsConnectStatus;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/router-store */
    "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/router-store.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _spinner_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./spinner.reducer */
    "./src/app/core/store/reducers/spinner.reducer.ts");
    /* harmony import */


    var _error_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./error.reducer */
    "./src/app/core/store/reducers/error.reducer.ts");
    /* harmony import */


    var _web3_gateway_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./web3-gateway.reducer */
    "./src/app/core/store/reducers/web3-gateway.reducer.ts");
    /* harmony import */


    var _ipfs_daemon_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./ipfs-daemon.reducer */
    "./src/app/core/store/reducers/ipfs-daemon.reducer.ts");
    /**
     * Our state is composed of a map of action reducer functions.
     * These reducer functions are called with each dispatched action
     * and the current or initial state and return a new immutable state.
     */


    var ROOT_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('Root reducers token', {
      factory: function factory() {
        return {
          router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_2__["routerReducer"],
          spinner: _spinner_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"],
          error: _error_reducer__WEBPACK_IMPORTED_MODULE_5__["reducer"],
          web3Provider: _web3_gateway_reducer__WEBPACK_IMPORTED_MODULE_6__["reducer"],
          ipfsDaemon: _ipfs_daemon_reducer__WEBPACK_IMPORTED_MODULE_7__["reducer"]
        };
      }
    }); // console.log all actions

    function logger(reducer) {
      return function (state, action) {
        var result = reducer(state, action);
        console.groupCollapsed(action.type);
        console.log('prev state', state);
        console.log('action', action);
        console.log('next state', result);
        console.groupEnd();
        return result;
      };
    }
    /**
     * By default, @ngrx/store uses combineReducers with the reducer map to compose
     * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
     * that will be composed to form the root meta-reducer.
     */


    var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production ? [logger] : [];
    var selectRouterState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('router');

    var _ngrx_router_store__W = _ngrx_router_store__WEBPACK_IMPORTED_MODULE_2__["getSelectors"](selectRouterState),
        selectQueryParams = _ngrx_router_store__W.selectQueryParams,
        selectRouteParams = _ngrx_router_store__W.selectRouteParams,
        selectRouteData = _ngrx_router_store__W.selectRouteData,
        selectUrl = _ngrx_router_store__W.selectUrl;

    var selectSpinnerState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('spinner');
    var getSpinnerShow = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSpinnerState, _spinner_reducer__WEBPACK_IMPORTED_MODULE_4__["getSpinnerShow"]);
    var selectErrorState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('error');
    var getError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectErrorState, _error_reducer__WEBPACK_IMPORTED_MODULE_5__["getError"]);
    var selectWeb3GatewayState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('web3Provider');
    var getEthereumInjected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectWeb3GatewayState, _web3_gateway_reducer__WEBPACK_IMPORTED_MODULE_6__["getEthereumInjected"]);
    var getEthereumConnected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectWeb3GatewayState, _web3_gateway_reducer__WEBPACK_IMPORTED_MODULE_6__["getEthereumConnected"]);
    var getAccount = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectWeb3GatewayState, _web3_gateway_reducer__WEBPACK_IMPORTED_MODULE_6__["getAccount"]);
    var getNetwork = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectWeb3GatewayState, _web3_gateway_reducer__WEBPACK_IMPORTED_MODULE_6__["getNetwork"]);
    var getBalance = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectWeb3GatewayState, _web3_gateway_reducer__WEBPACK_IMPORTED_MODULE_6__["getBalance"]);
    var selectIpfsDaemonState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('ipfsDaemon');
    var getIpfsConnectStatus = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIpfsDaemonState, _ipfs_daemon_reducer__WEBPACK_IMPORTED_MODULE_7__["getIpfsConnectStatus"]);
    /***/
  },

  /***/
  "./src/app/core/store/reducers/ipfs-daemon.reducer.ts":
  /*!************************************************************!*\
    !*** ./src/app/core/store/reducers/ipfs-daemon.reducer.ts ***!
    \************************************************************/

  /*! exports provided: reducer, getIpfsConnectStatus */

  /***/
  function srcAppCoreStoreReducersIpfsDaemonReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getIpfsConnectStatus", function () {
      return getIpfsConnectStatus;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actions */
    "./src/app/core/store/actions/index.ts");

    var initialState = {
      connectStatus: false
    };
    var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["IpfsDaemonActions"].connectSuccess, function (state) {
      return Object.assign(Object.assign({}, state), {
        connectStatus: true
      });
    }));

    var getIpfsConnectStatus = function getIpfsConnectStatus(state) {
      return state.connectStatus;
    };
    /***/

  },

  /***/
  "./src/app/core/store/reducers/spinner.reducer.ts":
  /*!********************************************************!*\
    !*** ./src/app/core/store/reducers/spinner.reducer.ts ***!
    \********************************************************/

  /*! exports provided: reducer, getSpinnerShow */

  /***/
  function srcAppCoreStoreReducersSpinnerReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getSpinnerShow", function () {
      return getSpinnerShow;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actions */
    "./src/app/core/store/actions/index.ts");

    var initialState = {
      show: false
    };
    var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["SpinnerActions"].show, function (state) {
      return Object.assign(Object.assign({}, state), {
        show: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["SpinnerActions"].hide, function (state) {
      return Object.assign(Object.assign({}, state), {
        show: false
      });
    }));

    var getSpinnerShow = function getSpinnerShow(state) {
      return state.show;
    };
    /***/

  },

  /***/
  "./src/app/core/store/reducers/web3-gateway.reducer.ts":
  /*!*************************************************************!*\
    !*** ./src/app/core/store/reducers/web3-gateway.reducer.ts ***!
    \*************************************************************/

  /*! exports provided: reducer, getEthereumInjected, getEthereumConnected, getNetwork, getAccount, getBalance */

  /***/
  function srcAppCoreStoreReducersWeb3GatewayReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getEthereumInjected", function () {
      return getEthereumInjected;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getEthereumConnected", function () {
      return getEthereumConnected;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getNetwork", function () {
      return getNetwork;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAccount", function () {
      return getAccount;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getBalance", function () {
      return getBalance;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actions */
    "./src/app/core/store/actions/index.ts");

    var initialState = {
      ethereumInjected: false,
      ethereumConnected: false,
      ethereumNetwork: null,
      account: null,
      balance: null
    };
    var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["Web3GatewayActions"].ethereumInjectSuccess, function (state) {
      return Object.assign(Object.assign({}, state), {
        ethereumInjected: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["Web3GatewayActions"].ethereumConnectSuccess, function (state) {
      return Object.assign(Object.assign({}, state), {
        ethereumConnected: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["Web3GatewayActions"].networkSuccess, function (state, _ref6) {
      var network = _ref6.network;
      return Object.assign(Object.assign({}, state), {
        ethereumNetwork: network
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["Web3GatewayActions"].accountSuccess, function (state, _ref7) {
      var address = _ref7.address;
      return Object.assign(Object.assign({}, state), {
        account: address
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["Web3GatewayActions"].balanceSuccess, function (state, _ref8) {
      var balance = _ref8.balance;
      return Object.assign(Object.assign({}, state), {
        balance: balance
      });
    }));

    var getEthereumInjected = function getEthereumInjected(state) {
      return state.ethereumInjected;
    };

    var getEthereumConnected = function getEthereumConnected(state) {
      return state.ethereumConnected;
    };

    var getNetwork = function getNetwork(state) {
      return state.ethereumNetwork;
    };

    var getAccount = function getAccount(state) {
      return state.account;
    };

    var getBalance = function getBalance(state) {
      return state.balance;
    };
    /***/

  },

  /***/
  "./src/app/market-place/services/authentication.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/market-place/services/authentication.service.ts ***!
    \*****************************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppMarketPlaceServicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/firebase-auth */
    "./node_modules/firebase/firebase-auth.js");
    /* harmony import */


    var firebase_firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firebase_auth__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(afs, // Inject Firestore service
      afAuth, // Inject Firebase auth service
      router, ngZone // NgZone service to remove outside scope warning
      ) {
        var _this15 = this;

        _classCallCheck(this, AuthService);

        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */

        this.afAuth.authState.subscribe(function (user) {
          if (user) {
            _this15.userData = user;
            localStorage.setItem('user', JSON.stringify(_this15.userData));
            JSON.parse(localStorage.getItem('user'));
          } else {
            localStorage.setItem('user', null);
            JSON.parse(localStorage.getItem('user'));
          }
        });
      } // Sign in with email/password


      _createClass(AuthService, [{
        key: "SignIn",
        value: function SignIn(email, password) {
          var _this16 = this;

          return this.afAuth.signInWithEmailAndPassword(email, password).then(function (result) {
            _this16.ngZone.run(function () {
              _this16.router.navigate(['dashboard']);
            });

            _this16.SetUserData(result.user);
          })["catch"](function (error) {
            window.alert(error.message);
          });
        } // Sign up with email/password

      }, {
        key: "SignUp",
        value: function SignUp(email, password) {
          var _this17 = this;

          return this.afAuth.createUserWithEmailAndPassword(email, password).then(function (result) {
            /* Call the SendVerificaitonMail() function when new user sign
            up and returns promise */
            _this17.SetUserData(result.user);
          })["catch"](function (error) {
            window.alert(error.message);
          });
        } // Reset Forggot password

      }, {
        key: "ForgotPassword",
        value: function ForgotPassword(passwordResetEmail) {
          return this.afAuth.sendPasswordResetEmail(passwordResetEmail).then(function () {
            window.alert('Password reset email sent, check your inbox.');
          })["catch"](function (error) {
            window.alert(error);
          });
        } // Returns true when user is looged in and email is verified

      }, {
        key: "GoogleAuth",
        // Sign in with Google
        value: function GoogleAuth() {
          return this.AuthLogin(new firebase_firebase_auth__WEBPACK_IMPORTED_MODULE_2___default.a.GoogleAuthProvider());
        } // Auth logic to run auth providers

      }, {
        key: "AuthLogin",
        value: function AuthLogin(provider) {
          var _this18 = this;

          return this.afAuth.signInWithPopup(provider).then(function (result) {
            _this18.ngZone.run(function () {
              _this18.router.navigate(['dashboard']);
            });

            _this18.SetUserData(result.user);
          })["catch"](function (error) {
            window.alert(error);
          });
        }
        /* Setting up user data when sign in with username/password,
        sign up with username/password and sign in with social auth
        provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */

      }, {
        key: "SetUserData",
        value: function SetUserData(user) {
          var userRef = this.afs.doc("users/".concat(user.uid));
          var userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
          };
          return userRef.set(userData, {
            merge: true
          });
        } // Sign out 

      }, {
        key: "SignOut",
        value: function SignOut() {
          var _this19 = this;

          return this.afAuth.signOut().then(function () {
            localStorage.removeItem('user');

            _this19.router.navigate(['sign-in']);
          });
        }
      }, {
        key: "isLoggedIn",
        get: function get() {
          var user = JSON.parse(localStorage.getItem('user'));
          return user !== null && user.emailVerified !== false ? true : false;
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] // NgZone service to remove outside scope warning

      }];
    };

    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/shared/angular-cdk/angular-sdk.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/angular-cdk/angular-sdk.module.ts ***!
    \**********************************************************/

  /*! exports provided: AngularCdkModule */

  /***/
  function srcAppSharedAngularCdkAngularSdkModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularCdkModule", function () {
      return AngularCdkModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");

    var CDK_MODULES = [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"]];

    var AngularCdkModule = function AngularCdkModule() {
      _classCallCheck(this, AngularCdkModule);
    };

    AngularCdkModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: CDK_MODULES,
      exports: CDK_MODULES,
      declarations: []
    })], AngularCdkModule);
    /***/
  },

  /***/
  "./src/app/shared/angular-cdk/index.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/angular-cdk/index.ts ***!
    \*********************************************/

  /*! exports provided: AngularCdkModule */

  /***/
  function srcAppSharedAngularCdkIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_sdk_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./angular-sdk.module */
    "./src/app/shared/angular-cdk/angular-sdk.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AngularCdkModule", function () {
      return _angular_sdk_module__WEBPACK_IMPORTED_MODULE_0__["AngularCdkModule"];
    });
    /***/

  },

  /***/
  "./src/app/shared/flex-layout/index.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/flex-layout/index.ts ***!
    \*********************************************/

  /*! exports provided: FlexLayoutModule */

  /***/
  function srcAppSharedFlexLayoutIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FlexLayoutModule", function () {
      return _angular_flex_layout__WEBPACK_IMPORTED_MODULE_0__["FlexLayoutModule"];
    });
    /***/

  },

  /***/
  "./src/app/shared/index.ts":
  /*!*********************************!*\
    !*** ./src/app/shared/index.ts ***!
    \*********************************/

  /*! exports provided: MaterialModule, FlexLayoutModule, AngularCdkModule */

  /***/
  function srcAppSharedIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./material */
    "./src/app/shared/material/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return _material__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"];
    });
    /* harmony import */


    var _flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./flex-layout */
    "./src/app/shared/flex-layout/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FlexLayoutModule", function () {
      return _flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"];
    });
    /* harmony import */


    var _angular_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./angular-cdk */
    "./src/app/shared/angular-cdk/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AngularCdkModule", function () {
      return _angular_cdk__WEBPACK_IMPORTED_MODULE_2__["AngularCdkModule"];
    });
    /***/

  },

  /***/
  "./src/app/shared/material/index.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/material/index.ts ***!
    \******************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppSharedMaterialIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./material.module */
    "./src/app/shared/material/material.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return _material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"];
    });
    /***/

  },

  /***/
  "./src/app/shared/material/material.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/material/material.module.ts ***!
    \****************************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppSharedMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");

    var MAT_MODULES = [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__["MatStepperModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__["MatTooltipModule"]];

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: MAT_MODULES,
      exports: MAT_MODULES,
      declarations: []
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.
    // export const environment = {
    //   production: false,
    //    fleaMarketContractAddress: '0x0f80Aad503240d1d0F7F415D33e8230FcaEDb036' 
    // };


    var environment = {
      production: false,
      fleaMarketContractAddress: '0x0f80Aad503240d1d0F7F415D33e8230FcaEDb036',
      firebase: {
        apiKey: "AIzaSyDBWuw6UUQYc7UooKibmgNG-D1uk5kIXds",
        authDomain: "supply-tracker-89666.firebaseapp.com",
        databaseURL: "https://supply-tracker-89666.firebaseio.com",
        projectId: "supply-tracker-89666",
        storageBucket: "supply-tracker-89666.appspot.com",
        messagingSenderId: "813687406009",
        appId: "1:813687406009:web:0e270ecd2f762f83744a68",
        measurementId: "G-SSMCD3YZ38"
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/admin/Desktop/NCI_4/Software_Project/Version2_SSCT/SSCT/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!**************************************************!*\
    !*** ipfs-utils/src/files/glob-source (ignored) ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map