webpackHotUpdate("app",{

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html");
/* harmony import */ var _services_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/component */ "./src/services/component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var HeaderComponent = /** @class */ (function (_super) {
    __extends(HeaderComponent, _super);
    function HeaderComponent(ref) {
        return _super.call(this, ref, _header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]) || this;
    }
    return HeaderComponent;
}(_services_component__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.less */ "./src/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/header/header.component */ "./src/app/header/header.component.ts");
var _a;


var APP_ELEMENT = document.querySelector("#app");
if (APP_ELEMENT) {
    console.log("working");
    new _app_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"](APP_ELEMENT);
}
else {
    (_a = document.querySelector("body")) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML("beforebegin", "<h1 style='color:red'>Main app component didn't found</h1>");
}


/***/ }),

/***/ "./src/services/component.ts":
/*!***********************************!*\
  !*** ./src/services/component.ts ***!
  \***********************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
var Component = /** @class */ (function () {
    function Component(ref, html) {
        this.ref = ref;
        this.html = html;
        ref.insertAdjacentHTML("beforeend", html);
    }
    return Component;
}());



/***/ })

})
//# sourceMappingURL=app.b412a1ddcc55ed2aec9a.hot-update.js.map