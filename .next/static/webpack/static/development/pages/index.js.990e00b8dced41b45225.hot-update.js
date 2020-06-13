webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-facebook-login */ "./node_modules/react-facebook-login/dist/facebook-login-with-button.js");
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _pages_facebookpages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/facebookpages */ "./pages/facebookpages.js");
/* harmony import */ var _pages_instasettings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/instasettings */ "./pages/instasettings.js");
/* harmony import */ var _pages_instagram__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages/instagram */ "./pages/instagram.js");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







 // import '../css/style.css';
// import '../css/slick.css';
// import '../css/slick-theme.css';
// import '../css/poststyle.css';
// import '../js/jquery.min';
// import '../js/slick.min';

var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    console.log(props);
    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "responseFacebook", function (response) {
      if (response.data != 'undefined') {
        var self = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this);

        var search = window.location.search; // could be '?foo=bar'

        var params = new URLSearchParams(search);
        var shop_name = params.get('shop');
        var postdata = {
          shop: shop_name,
          response: response
        };
        axios__WEBPACK_IMPORTED_MODULE_8___default.a.post('http://localhost:5000/save_accesstoken/', postdata).then(function (response1) {
          console.log(response1);
          var shopdata = {
            shop: shop_name
          };
          axios__WEBPACK_IMPORTED_MODULE_8___default.a.post('http://localhost:5000/get_fb_pages/', shopdata).then(function (response) {
            self.setstatus(response);
          })["catch"](function (error) {
            console.log(error);
          });
        })["catch"](function (error) {
          console.log(error);
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "componentClicked", function () {
      return console.log('clieked');
    });

    _this.state = {
      isFBLoggedIn: true,
      userID: '',
      name: '',
      email: '',
      picture: '',
      allpages: '',
      fbpage: false,
      allsettings: '',
      post_shown: false
    };
    _this.logoutFacebook = _this.logoutFacebook.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.setnewstatus = _this.setnewstatus.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var search = window.location.search; // could be '?foo=bar'

      var params = new URLSearchParams(search);
      var shop_name = params.get('shop');
      console.log(shop_name); // var shopname = this.shopname();
      // console.log('1111');
      // console.log(shopname);
      // console.log('2222');
      //
      //

      var postdata = {
        shop: shop_name
      }; //

      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post('http://localhost:5000/check_login_account/', postdata).then(function (response1) {
        console.log(response1);
        self.changefbstatus();

        if (response1.data == true) {
          axios__WEBPACK_IMPORTED_MODULE_8___default.a.post('http://localhost:5000/get_fb_pages/', postdata).then(function (response) {
            self.changestatus(response);
          })["catch"](function (error) {
            console.log(error);
          });
        }
      })["catch"](function (error) {
        console.log(error);
      });
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post('http://localhost:5000/get_settings/', postdata).then(function (response1) {
        self.setnewstatus(response1.data);
      })["catch"](function (error) {
        console.log(error);
      });
      var script = document.createElement("script");
      script.src = "../js/jquery.min.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, {
    key: "setnewstatus",
    value: function setnewstatus(data) {
      this.setState({
        allsettings: data
      });
    }
  }, {
    key: "changefbstatus",
    value: function changefbstatus() {
      this.setState({
        isFBLoggedIn: true
      });
    }
  }, {
    key: "changestatus",
    value: function changestatus(response) {
      this.setState({
        fbpage: true,
        allpages: response.data
      });
    }
  }, {
    key: "logoutFacebook",
    value: function logoutFacebook() {
      console.log('111');
      this.setState({
        isFBLoggedIn: false
      });
    }
  }, {
    key: "setstatus",
    value: function setstatus(response) {
      console.log(response);
      this.setState({
        isFBLoggedIn: true,
        fbpage: true,
        allpages: response.data
      });
    }
  }, {
    key: "updateState",
    value: function updateState() {
      this.setState({
        post_shown: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var fbContent;

      if (this.state.isFBLoggedIn) {
        if (this.state.fbpage) {
          fbContent = __jsx("div", null, __jsx(_pages_facebookpages__WEBPACK_IMPORTED_MODULE_10__["default"], {
            alldata: this.state.allpages
          }));
        }
      } else {
        fbContent = __jsx(react_facebook_login__WEBPACK_IMPORTED_MODULE_9___default.a, {
          appId: "591251971460198",
          autoLoad: true,
          fields: "name,email,picture",
          scope: "public_profile,email,manage_pages,read_insights,pages_show_list,instagram_basic",
          onClick: this.componentClicked,
          callback: this.responseFacebook
        });
      }

      var instasettings;

      if (this.state.allsettings != '') {
        instasettings = __jsx(_pages_instasettings__WEBPACK_IMPORTED_MODULE_11__["default"], {
          allsettings: this.state.allsettings
        });
      }

      return __jsx("div", {
        className: "ankit"
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_13__["Frame"], null, instasettings, fbContent, __jsx(_pages_instagram__WEBPACK_IMPORTED_MODULE_12__["default"], null)));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./pages/instagram.js":
/*!****************************!*\
  !*** ./pages/instagram.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





function InstaPostList(props) {
  var items1 = props.instapost;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(true),
      active = _useState[0],
      setActive = _useState[1];

  var handleChange = Object(react__WEBPACK_IMPORTED_MODULE_7__["useCallback"])(function () {
    return setActive(!active);
  }, [active]);
  var handleScrollBottom = Object(react__WEBPACK_IMPORTED_MODULE_7__["useCallback"])(function () {
    return console.log('Scrolled to bottom');
  }, []);
  var pageclass = "insta_post_model";
  return __jsx("div", {
    style: {
      height: '50px'
    }
  }, __jsx("div", {
    className: pageclass
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    onClick: handleChange,
    primary: true
  }, "Instagram Post")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
    large: true,
    open: active,
    title: "Instagram Post",
    onScrolledToBottom: handleScrollBottom,
    onClose: handleChange,
    className: "insta_post_data"
  }, items1.map(function (value, index) {
    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Modal"].Section, {
      key: index,
      className: "insta_post_data",
      oneThird: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Stack"], {
      vertical: true,
      oneThird: true,
      distribution: "fill"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Badge"], null, __jsx("img", {
      alt: "",
      width: "100%",
      height: "100%",
      style: {
        objectFit: 'cover',
        objectPosition: 'center'
      },
      src: value.media_url
    }))));
  })));
}

var Instagram = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Instagram, _React$Component);

  var _super = _createSuper(Instagram);

  function Instagram(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Instagram);

    _this = _super.call(this, props);
    _this.state = {
      instapost: ''
    };
    _this.updatedata = _this.updatedata.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Instagram, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var search = window.location.search; // could be '?foo=bar'

      var params = new URLSearchParams(search);
      var shop_name = params.get('shop');
      var postdata = {
        shop: shop_name
      };
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post('http://localhost:5000/get_insta_post/', postdata).then(function (response1) {
        console.log(response1);
        self.updatedata(response1.data);
      })["catch"](function (error) {
        console.log(error);
      });
      var script = document.createElement("script");
      script.src = "../js/jquery.min.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, {
    key: "updatedata",
    value: function updatedata(resdata) {
      console.log(resdata);
      this.setState({
        instapost: resdata.data
      });
    }
  }, {
    key: "render",
    value: function render() {
      // if(this.state.instapost!=''){
      //     instagrampost = (
      //         <InstaPostList instapost={this.state.instapost} />
      //     );
      // }
      var elements = ['one', 'two', 'three'];
      var instagrampost = [];
      console.log(this.state.instapost);

      if (this.state.instapost != '') {
        var items1 = this.state.instapost;

        var _iterator = _createForOfIteratorHelper(items1.entries()),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_step.value, 2),
                index = _step$value[0],
                value = _step$value[1];

            instagrampost.push(__jsx("a", {
              href: "javascript:void(0);",
              className: "dm-insta-url",
              onClick: "document.getElementById('dm-0-insta-feed').style.display='block'"
            }, __jsx("div", {
              className: "dm-insta-img"
            }, __jsx("img", {
              src: value.media_url
            }), __jsx("div", {
              className: "dm-instafeed-overlay"
            }, __jsx("div", {
              className: "dm-like-btn"
            }, __jsx("span", null, __jsx("i", {
              className: "far fa-heart"
            }), "37"), __jsx("p", null, __jsx("i", {
              className: "fas fa-quote-right"
            }), "2"))))));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return __jsx("div", {
        className: "instagram_image"
      }, __jsx("div", {
        className: "dm-insta-feed"
      }, __jsx("div", {
        className: "dm-container"
      }, __jsx("h1", {
        className: "dm-title"
      }, "INSTAGRAM"), __jsx("div", {
        className: "dm-insta-row"
      }, __jsx("div", {
        id: "insta-slider"
      }, instagrampost)))));
    }
  }]);

  return Instagram;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Instagram);

/***/ })

})
//# sourceMappingURL=index.js.990e00b8dced41b45225.hot-update.js.map