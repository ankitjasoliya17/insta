module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "42Y9":
/***/ (function(module, exports) {

module.exports = require("react-facebook-login");

/***/ }),

/***/ "8lc5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Facebook extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    var result = JSON.parse(props.alldata);
    console.log(result); // this.state = {
    //     allpagesdata:result.data
    // }
  }

  render() {
    // let pageContent;
    return __jsx("div", null, "Hello");
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Facebook);

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iHmL");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("42Y9");
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nj/N");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_facebookpages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("8lc5");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "responseFacebook", response => {
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://localhost:5000/abcd/', response).then(function (response1) {
        self.abcd(response1, response);
      }).catch(function (error) {
        console.log(error);
      });
    });

    _defineProperty(this, "componentClicked", () => console.log('clieked'));

    this.state = {
      isFBLoggedIn: false,
      userID: '',
      name: '',
      email: '',
      picture: '',
      allpages: ''
    }; // This binding is necessary to make `this` work in the callback

    this.logoutFacebook = this.logoutFacebook.bind(this);
    this.abcd = this.abcd.bind(this);
  }

  logoutFacebook() {
    console.log('111');
    this.setState({
      isFBLoggedIn: false
    });
  }

  abcd(response, response1) {
    this.setState({
      isFBLoggedIn: true,
      userID: response1.userID,
      name: response1.name,
      email: response1.email,
      picture: response1.picture.data.url,
      allpages: response.data
    });
  }

  // async componentDidMount() {
  // const url = "http://localhost:5000/abcd/";
  // const response = await fetch(url,);
  // const data = await response.json();
  // console.log(data)
  // axios.post('http://localhost:5000/abcd/', {
  //     code: this.getUrlParameter('code')
  // })
  //     .then(function (response) {
  //         console.log(response);
  //     })
  //     .catch(function (error) {
  //         console.log(error);
  //     });
  // console.log(this.getUrlParameter('code'));
  // fetch("",this.getUrlParameter('code'))
  //     .then(res => res.json())
  //     .then(
  //         (result) => {
  //             console.log(result);
  //         },
  //         // Note: it's important to handle errors here
  //         // instead of a catch() block so that we don't swallow
  //         // exceptions from actual bugs in components.
  //         (error) => {
  //             console.log(error)
  //         }
  //     )
  // }
  // getUrlParameter(sParam) {
  //     var sPageURL = window.location.search.substring(1),
  //         sURLVariables = sPageURL.split('&'),
  //         sParameterName,
  //         i;
  //
  //     for (i = 0; i < sURLVariables.length; i++) {
  //         sParameterName = sURLVariables[i].split('=');
  //
  //         if (sParameterName[0] === sParam) {
  //             return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
  //         }
  //     }
  // };
  render() {
    let fbContent;

    if (this.state.isFBLoggedIn) {
      fbContent = __jsx("div", {
        style: {
          width: '400px',
          margin: 'auto',
          background: '#f4f4f4',
          padding: '20px'
        }
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        onClick: this.logoutFacebook
      }, "Logout"), __jsx("img", {
        src: this.state.picture,
        alt: this.state.picture
      }), __jsx("h2", null, this.state.name), "Email : ", this.state.email, __jsx(_pages_facebookpages__WEBPACK_IMPORTED_MODULE_5__["default"], {
        alldata: this.state.allpages
      }));
    } else {
      fbContent = __jsx(react_facebook_login__WEBPACK_IMPORTED_MODULE_3___default.a, {
        appId: "591251971460198",
        autoLoad: true,
        fields: "name,email,picture",
        onClick: this.componentClicked,
        callback: this.responseFacebook
      });
    }

    return __jsx("div", {
      className: "ankit"
    }, fbContent);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "iHmL":
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ }),

/***/ "nj/N":
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });