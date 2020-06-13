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

/***/ })

})
//# sourceMappingURL=index.js.bdb1e9f77ef6ca28d77c.hot-update.js.map