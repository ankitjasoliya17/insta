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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@shopify/polaris/styles.css":
/*!**************************************************!*\
  !*** ./node_modules/@shopify/polaris/styles.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/acceptsinformation.js":
/*!*************************************!*\
  !*** ./pages/acceptsinformation.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris/styles.css */ "./node_modules/@shopify/polaris/styles.css");
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Acceptinformation extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    const allsetting = props.settings;
    console.log(allsetting);

    if (allsetting != false) {
      let info_like = false;
      let info_like_button_name = 'Enable';

      if (allsetting.info_like) {
        if (allsetting.info_like == 'false') {
          info_like = false;
          info_like_button_name = 'Enable';
        } else {
          info_like = true;
          info_like_button_name = 'Disable';
        }
      }

      let info_comment = false;
      let info_comment_button_name = 'Enable';

      if (allsetting.info_comment) {
        if (allsetting.info_comment == 'false') {
          info_comment = false;
          info_comment_button_name = 'Enable';
        } else {
          info_comment = true;
          info_comment_button_name = 'Disable';
        }
      }

      let info_description = false;
      let info_description_button_name = 'Enable';

      if (allsetting.info_description) {
        if (allsetting.info_description == 'false') {
          info_description = false;
          info_description_button_name = 'Enable';
        } else {
          info_description = true;
          info_description_button_name = 'Disable';
        }
      }

      let popup_like = false;
      let popup_like_button_name = 'Enable';

      if (allsetting.popup_like) {
        if (allsetting.popup_like == 'false') {
          popup_like = false;
          popup_like_button_name = 'Enable';
        } else {
          popup_like = true;
          popup_like_button_name = 'Disable';
        }
      }

      let popup_comment = false;
      let popup_comment_button_name = 'Enable';

      if (allsetting.popup_comment) {
        if (allsetting.popup_comment == 'false') {
          popup_comment = false;
          popup_comment_button_name = 'Enable';
        } else {
          popup_comment = true;
          popup_comment_button_name = 'Disable';
        }
      }

      let popup_description = false;
      let popup_description_button_name = 'Enable';

      if (allsetting.popup_description) {
        if (allsetting.popup_description == 'false') {
          popup_description = false;
          popup_description_button_name = 'Enable';
        } else {
          popup_description = true;
          popup_description_button_name = 'Disable';
        }
      }

      this.state = {
        info_like: info_like,
        info_like_status: info_like_button_name,
        info_comment: info_comment,
        info_comment_status: info_comment_button_name,
        info_description: info_description,
        info_description_status: info_description_button_name,
        popup_like: popup_like,
        popup_like_status: popup_like_button_name,
        popup_comment: popup_comment,
        popup_comment_status: popup_comment_button_name,
        popup_description: popup_description,
        popup_description_status: popup_description_button_name,
        button_type: false,
        notification_status: false
      };
    } else {
      this.state = {
        info_like: false,
        info_like_status: 'Enable',
        info_comment: false,
        info_comment_status: 'Enable',
        info_description: false,
        info_description_status: 'Enable',
        popup_like: false,
        popup_like_status: 'Enable',
        popup_comment: false,
        popup_comment_status: 'Enable',
        popup_description: false,
        popup_description_status: 'Enable',
        button_type: false,
        notification_status: false
      };
    }

    this.handleInfoLike = this.handleInfoLike.bind(this);
    this.handleInfoComment = this.handleInfoComment.bind(this);
    this.handleInfoDescription = this.handleInfoDescription.bind(this);
    this.handlePopupLike = this.handlePopupLike.bind(this);
    this.handlePopupComment = this.handlePopupComment.bind(this);
    this.handlePopupDescription = this.handlePopupDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changestatus = this.changestatus.bind(this);
    this.handletoggleActive = this.handletoggleActive.bind(this);
  }

  handleSubmit() {
    this.setState({
      button_type: true
    });
    const search = window.location.search; // could be '?foo=bar'

    const params = new URLSearchParams(search);
    const shop_name = params.get('shop');
    const postdata = {
      option: 2,
      shop: shop_name,
      settings: this.state
    };
    const self = this;
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://localhost:5000/save_settings/', postdata).then(function (response1) {
      self.changestatus();
    }).catch(function (error) {
      console.log(error);
    });
  }

  changestatus() {
    this.setState({
      button_type: false,
      notification_status: true
    });
  }

  handleInfoLike() {
    if (this.state.info_like == false) {
      this.setState({
        info_like: true,
        info_like_status: 'Disable'
      });
    } else {
      this.setState({
        info_like: false,
        info_like_status: 'Enable'
      });
    }
  }

  handleInfoComment() {
    if (this.state.info_comment == false) {
      this.setState({
        info_comment: true,
        info_comment_status: 'Disable'
      });
    } else {
      this.setState({
        info_comment: false,
        info_comment_status: 'Enable'
      });
    }
  }

  handleInfoDescription() {
    if (this.state.info_description == false) {
      this.setState({
        info_description: true,
        info_description_status: 'Disable'
      });
    } else {
      this.setState({
        info_description: false,
        info_description_status: 'Enable'
      });
    }
  }

  handlePopupLike() {
    if (this.state.popup_like == false) {
      this.setState({
        popup_like: true,
        popup_like_status: 'Disable'
      });
    } else {
      this.setState({
        popup_like: false,
        popup_like_status: 'Enable'
      });
    }
  }

  handlePopupComment() {
    if (this.state.popup_comment == false) {
      this.setState({
        popup_comment: true,
        popup_comment_status: 'Disable'
      });
    } else {
      this.setState({
        popup_comment: false,
        popup_comment_status: 'Enable'
      });
    }
  }

  handlePopupDescription() {
    if (this.state.popup_description == false) {
      this.setState({
        popup_description: true,
        popup_description_status: 'Disable'
      });
    } else {
      this.setState({
        popup_description: false,
        popup_description_status: 'Enable'
      });
    }
  }

  handletoggleActive() {
    if (this.state.notification_status == false) {
      this.setState({
        notification_status: true
      });
    } else {
      this.setState({
        notification_status: false
      });
    }
  }

  render() {
    let notification;

    if (this.state.notification_status == true) {
      notification = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Toast"], {
        content: "Save Successfully",
        onDismiss: this.handletoggleActive,
        active: true
      });
    }

    return __jsx("div", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onSubmit: this.handleSubmit
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], null, "Information"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["SettingToggle"], {
      action: {
        content: this.state.info_like_status,
        onAction: this.handleInfoLike
      },
      enabled: this.state.info_like
    }, "Like Count"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["SettingToggle"], {
      action: {
        content: this.state.info_comment_status,
        onAction: this.handleInfoComment
      },
      enabled: this.state.info_comment
    }, "Comment Count"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["SettingToggle"], {
      action: {
        content: this.state.info_description_status,
        onAction: this.handleInfoDescription
      },
      enabled: this.state.info_description
    }, "Description")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], null, "Popup"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["SettingToggle"], {
      action: {
        content: this.state.popup_like_status,
        onAction: this.handlePopupLike
      },
      enabled: this.state.popup_like
    }, "Like Count"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["SettingToggle"], {
      action: {
        content: this.state.popup_comment_status,
        onAction: this.handlePopupComment
      },
      enabled: this.state.popup_comment
    }, "Comment Count"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["SettingToggle"], {
      action: {
        content: this.state.popup_description_status,
        onAction: this.handlePopupDescription
      },
      enabled: this.state.popup_description
    }, "Description")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      submit: true,
      loading: this.state.button_type,
      primary: true
    }, "Submit"))), notification);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Acceptinformation);

/***/ }),

/***/ "./pages/appereance.js":
/*!*****************************!*\
  !*** ./pages/appereance.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris/styles.css */ "./node_modules/@shopify/polaris/styles.css");
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Postsettings extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    const allsetting = props.settings;

    if (allsetting != false) {
      let widgetcolordata = '';

      if (allsetting.widgetcolor) {
        widgetcolordata = JSON.parse(allsetting.widgetcolor);
      } else {
        widgetcolordata = {
          hue: 300,
          brightness: 1,
          saturation: 0.7,
          alpha: 0.8
        };
      }

      let overlaycolordata = '';

      if (allsetting.overlaycolor) {
        overlaycolordata = JSON.parse(allsetting.overlaycolor);
      } else {
        overlaycolordata = {
          hue: 300,
          brightness: 1,
          saturation: 0.7,
          alpha: 0.8
        };
      }

      let textcolordata = '';

      if (allsetting.textcolor) {
        textcolordata = JSON.parse(allsetting.textcolor);
      } else {
        textcolordata = {
          hue: 300,
          brightness: 1,
          saturation: 0.7,
          alpha: 0.8
        };
      }

      let pbackgroundcolordata = '';

      if (allsetting.pbackgroundcolor) {
        pbackgroundcolordata = JSON.parse(allsetting.pbackgroundcolor);
      } else {
        pbackgroundcolordata = {
          hue: 300,
          brightness: 1,
          saturation: 0.7,
          alpha: 0.8
        };
      }

      let ptextcolordata = '';

      if (allsetting.ptextcolor) {
        ptextcolordata = JSON.parse(allsetting.ptextcolor);
      } else {
        ptextcolordata = {
          hue: 300,
          brightness: 1,
          saturation: 0.7,
          alpha: 0.8
        };
      }

      this.state = {
        widgetcolor: widgetcolordata,
        widgetpopoverActive: false,
        overlaycolor: overlaycolordata,
        overlaypopoverActive: false,
        textcolor: textcolordata,
        textpopoverActive: false,
        pbackgroundcolor: pbackgroundcolordata,
        pbackgroundpopoverActive: false,
        ptextcolor: ptextcolordata,
        ptextpopoverActive: false
      };
    } else {
      this.state = {
        widgetcolor: {
          hue: 300,
          brightness: 1,
          saturation: 0.7,
          alpha: 0.8
        },
        widgetpopoverActive: false,
        overlaycolor: {
          hue: 300,
          brightness: 1,
          saturation: 0.7,
          alpha: 0.8
        },
        overlaypopoverActive: false,
        textcolor: {
          hue: 300,
          brightness: 1,
          saturation: 0.7,
          alpha: 0.8
        },
        textpopoverActive: false,
        pbackgroundcolor: {
          hue: 300,
          brightness: 1,
          saturation: 0.7,
          alpha: 0.8
        },
        pbackgroundpopoverActive: false,
        ptextcolor: {
          hue: 300,
          brightness: 1,
          saturation: 0.7,
          alpha: 0.8
        },
        ptextpopoverActive: false
      };
    }

    this.handlewidgetPopoverOpen = this.handlewidgetPopoverOpen.bind(this);
    this.handlewidgetColorChange = this.handlewidgetColorChange.bind(this);
    this.handlewidgetRgbChange = this.handlewidgetRgbChange.bind(this);
    this.handlewidgetPopoverClose = this.handlewidgetPopoverClose.bind(this);
    this.handleoverlayColorChange = this.handleoverlayColorChange.bind(this);
    this.handleoverlayRgbChange = this.handleoverlayRgbChange.bind(this);
    this.handleoverlayPopoverClose = this.handleoverlayPopoverClose.bind(this);
    this.handleoverlayPopoverOpen = this.handleoverlayPopoverOpen.bind(this);
    this.handletextColorChange = this.handletextColorChange.bind(this);
    this.handletextRgbChange = this.handletextRgbChange.bind(this);
    this.handletextPopoverClose = this.handletextPopoverClose.bind(this);
    this.handletextPopoverOpen = this.handletextPopoverOpen.bind(this);
    this.handlepbackgroundColorChange = this.handlepbackgroundColorChange.bind(this);
    this.handlepbackgroundRgbChange = this.handlepbackgroundRgbChange.bind(this);
    this.handlepbackgroundPopoverClose = this.handlepbackgroundPopoverClose.bind(this);
    this.handlepbackgroundPopoverOpen = this.handlepbackgroundPopoverOpen.bind(this);
    this.handleptextColorChange = this.handleptextColorChange.bind(this);
    this.handleptextRgbChange = this.handleptextRgbChange.bind(this);
    this.handleptextPopoverClose = this.handleptextPopoverClose.bind(this);
    this.handleptextPopoverOpen = this.handleptextPopoverOpen.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.setState({
      button_type: true
    });
    const search = window.location.search; // could be '?foo=bar'

    const params = new URLSearchParams(search);
    const shop_name = params.get('shop');
    const postdata = {
      option: 3,
      shop: shop_name,
      settings: this.state
    };
    const self = this;
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://localhost:5000/save_settings/', postdata).then(function (response1) {
      self.changestatus();
    }).catch(function (error) {
      console.log(error);
    });
  }

  changestatus() {
    this.setState({
      button_type: false,
      notification_status: true
    });
  }

  handlewidgetColorChange(widgetcolor) {
    this.setState({
      widgetcolor
    });
  }

  handlewidgetRgbChange(value) {
    const rgbValues = value.replace(/[^\d*.?\d*,]/g, "").split(",");
    const widgetcolor = Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbToHsb"])({
      red: rgbValues[0],
      green: rgbValues[1],
      blue: rgbValues[2],
      alpha: rgbValues[3]
    });
    this.setState({
      widgetcolor
    });
  }

  handlewidgetPopoverClose() {
    this.setState({
      widgetpopoverActive: false
    });
  }

  handlewidgetPopoverOpen() {
    this.setState({
      widgetpopoverActive: true
    });
  }

  handleoverlayColorChange(overlaycolor) {
    this.setState({
      overlaycolor
    });
  }

  handleoverlayRgbChange(value) {
    const rgbValues = value.replace(/[^\d*.?\d*,]/g, "").split(",");
    console.log(rgbValues);
    const overlaycolor = Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbToHsb"])({
      red: rgbValues[0],
      green: rgbValues[1],
      blue: rgbValues[2],
      alpha: rgbValues[3]
    });
    this.setState({
      overlaycolor
    });
  }

  handleoverlayPopoverClose() {
    this.setState({
      overlaypopoverActive: false
    });
  }

  handleoverlayPopoverOpen() {
    this.setState({
      overlaypopoverActive: true
    });
  }

  handletextColorChange(textcolor) {
    this.setState({
      textcolor
    });
  }

  handletextRgbChange(value) {
    const rgbValues = value.replace(/[^\d*.?\d*,]/g, "").split(",");
    const textcolor = Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbToHsb"])({
      red: rgbValues[0],
      green: rgbValues[1],
      blue: rgbValues[2],
      alpha: rgbValues[3]
    });
    this.setState({
      textcolor
    });
  }

  handletextPopoverClose() {
    this.setState({
      textpopoverActive: false
    });
  }

  handletextPopoverOpen() {
    this.setState({
      textpopoverActive: true
    });
  }

  handlepbackgroundColorChange(pbackgroundcolor) {
    this.setState({
      pbackgroundcolor
    });
  }

  handlepbackgroundRgbChange(value) {
    const rgbValues = value.replace(/[^\d*.?\d*,]/g, "").split(",");
    const pbackgroundcolor = Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbToHsb"])({
      red: rgbValues[0],
      green: rgbValues[1],
      blue: rgbValues[2],
      alpha: rgbValues[3]
    });
    this.setState({
      pbackgroundcolor
    });
  }

  handlepbackgroundPopoverClose() {
    this.setState({
      pbackgroundpopoverActive: false
    });
  }

  handlepbackgroundPopoverOpen() {
    this.setState({
      pbackgroundpopoverActive: true
    });
  }

  handleptextColorChange(ptextcolor) {
    this.setState({
      ptextcolor
    });
  }

  handleptextRgbChange(value) {
    const rgbValues = value.replace(/[^\d*.?\d*,]/g, "").split(",");
    console.log(rgbValues);
    const ptextcolor = Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbToHsb"])({
      red: rgbValues[0],
      green: rgbValues[1],
      blue: rgbValues[2],
      alpha: rgbValues[3]
    });
    this.setState({
      ptextcolor
    });
  }

  handleptextPopoverClose() {
    this.setState({
      ptextpopoverActive: false
    });
  }

  handleptextPopoverOpen() {
    this.setState({
      ptextpopoverActive: true
    });
  }

  render() {
    const {
      widgetcolor,
      widgetpopoverActive
    } = this.state;
    const widgetrgbaColor = Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(widgetcolor));

    const widgetactivator = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.handlewidgetPopoverOpen
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      alignment: "center",
      spacing: "tight"
    }, __jsx("div", {
      style: {
        height: "2rem",
        width: "2rem",
        borderRadius: "0.3rem",
        background: widgetrgbaColor
      }
    }), __jsx("span", null, "Widget color")));

    const {
      overlaycolor,
      overlaypopoverActive
    } = this.state;
    const overlayrgbaColor = Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(overlaycolor));

    const overlayactivator = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.handleoverlayPopoverOpen
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      alignment: "center",
      spacing: "tight"
    }, __jsx("div", {
      style: {
        height: "2rem",
        width: "2rem",
        borderRadius: "0.3rem",
        background: overlayrgbaColor
      }
    }), __jsx("span", null, "Overlay color")));

    const {
      textcolor,
      textpopoverActive
    } = this.state;
    const textrgbaColor = Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(textcolor));

    const textactivator = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.handletextPopoverOpen
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      alignment: "center",
      spacing: "tight"
    }, __jsx("div", {
      style: {
        height: "2rem",
        width: "2rem",
        borderRadius: "0.3rem",
        background: textrgbaColor
      }
    }), __jsx("span", null, "Text color")));

    const {
      pbackgroundcolor,
      pbackgroundpopoverActive
    } = this.state;
    const pbackgroundrgbaColor = Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(pbackgroundcolor));

    const pbackgroundactivator = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.handlepbackgroundPopoverOpen
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      alignment: "center",
      spacing: "tight"
    }, __jsx("div", {
      style: {
        height: "2rem",
        width: "2rem",
        borderRadius: "0.3rem",
        background: pbackgroundrgbaColor
      }
    }), __jsx("span", null, "Background color")));

    const {
      ptextcolor,
      ptextpopoverActive
    } = this.state;
    const ptextrgbaColor = Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(ptextcolor));

    const ptextactivator = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.handleptextPopoverOpen
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      alignment: "center",
      spacing: "tight"
    }, __jsx("div", {
      style: {
        height: "2rem",
        width: "2rem",
        borderRadius: "0.3rem",
        background: ptextrgbaColor
      }
    }), __jsx("span", null, "Text color")));

    let notification;

    if (this.state.notification_status == true) {
      notification = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Toast"], {
        content: "Save Successfully",
        onDismiss: this.handlehsbToRgbtoggleActive,
        active: true
      });
    }

    return __jsx("div", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onSubmit: this.handleSubmit
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], null, "Gallary"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
      active: widgetpopoverActive,
      activator: widgetactivator,
      onClose: this.handlewidgetPopoverClose
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
      onChange: this.handlewidgetColorChange,
      color: widgetcolor,
      allowAlpha: true
    })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: widgetrgbaColor,
      onChange: this.handlewidgetRgbChange
    }))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
      active: overlaypopoverActive,
      activator: overlayactivator,
      onClose: this.handleoverlayPopoverClose
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
      onChange: this.handleoverlayColorChange,
      color: overlaycolor,
      allowAlpha: true
    })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: overlayrgbaColor,
      onChange: this.handleoverlayRgbChange
    }))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
      active: textpopoverActive,
      activator: textactivator,
      onClose: this.handletextPopoverClose
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
      onChange: this.handletextColorChange,
      color: textcolor,
      allowAlpha: true
    })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: textrgbaColor,
      onChange: this.handletextRgbChange
    })))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], null, "Popup"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
      active: pbackgroundpopoverActive,
      activator: pbackgroundactivator,
      onClose: this.handlepbackgroundPopoverClose
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
      onChange: this.handlepbackgroundColorChange,
      color: pbackgroundcolor,
      allowAlpha: true
    })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: pbackgroundrgbaColor,
      onChange: this.handlepbackgroundRgbChange
    }))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
      active: ptextpopoverActive,
      activator: ptextactivator,
      onClose: this.handleptextPopoverClose
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
      onChange: this.handleptextColorChange,
      color: ptextcolor,
      allowAlpha: true
    })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: ptextrgbaColor,
      onChange: this.handleptextRgbChange
    })))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      submit: true,
      loading: this.state.button_type,
      primary: true
    }, "Submit"))), notification);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Postsettings);

/***/ }),

/***/ "./pages/facebookpages.js":
/*!********************************!*\
  !*** ./pages/facebookpages.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_instagram__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/instagram */ "./pages/instagram.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function FacebookPageList(props) {
  // this.handleClick = this.handleClick.bind(this);
  const items = props.pages;
  const instatus = props.instastatus;
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const handleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setActive(!active), [active]);
  const handleScrollBottom = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => console.log('Scrolled to bottom'), []);
  const pageclass = "fb_page_model_button";

  function handlepage(page_id) {
    const post_data = {
      page_id: page_id,
      shop: new URLSearchParams(window.location.search).get('shop')
    };
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://localhost:5000/get_insta_account/', post_data).then(function (response1) {
      props.openModal(response1);
    }).catch(function (error) {
      console.log(error);
    });
  } // const handlepage  = useCallback((e) =>
  //
  // // const postdata = {
  // //
  // //     }
  //
  //
  //
  //     , []);


  return __jsx("div", {
    style: {
      height: '50px'
    }
  }, __jsx("div", {
    className: pageclass
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: handleChange,
    primary: true
  }, "Select Facebook Pages")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    open: active,
    title: "Business Pages",
    onScrolledToBottom: handleScrollBottom,
    onClose: handleChange,
    className: "my-own-class"
  }, instatus, items.map((value, index) => {
    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Modal"].Section, {
      key: index,
      className: "my-own-class"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ResourceItem"], {
      id: value.id,
      name: value.category,
      onClick: handlepage.bind(value.id),
      accessibilityLabel: `View details for ${value.category}`
    }, __jsx("h3", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
      variation: "strong"
    }, value.name)), __jsx("div", null, value.category)));
  })));
} // function ResourceListWithSelectionExample(props) {
//
//     const resourceName = {
//         singular: 'Pages',
//         plural: 'Pages',
//     };
//
//     const items = props.pages;
//
//
//     return (
//         <Card>
//             <ResourceList
//                 resourceName={resourceName}
//                 items={items}
//                 renderItem={renderItem}
//             />
//         </Card>
//     );
//
//     function renderItem(item) {
//         const {id, category, name,access_token} = item;
//
//
//         return (
//             <ResourceItem
//                 id={id}
//                 name={category}
//                 url= {`instagram?page_id=${id}&access_token=${access_token}`}
//                 accessibilityLabel={`View details for ${category}`}
//             >
//                 <h3>
//                     <TextStyle variation="strong">{name}</TextStyle>
//                 </h3>
//                 <div>{category}</div>
//             </ResourceItem>
//         );
//     }
// }


class Facebook extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: props.alldata.data,
      allpost: 'noinsta',
      getpost: false
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal(response) {
    this.setState({
      getpost: true,
      allpost: response.data
    });
  }

  render() {
    let fbpagecontent;
    let instacontent;
    let instaconnected;

    if (this.state.allpost == true) {
      instaconnected = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Banner"], {
        title: "Instagram Account Connected Successfully",
        status: "success"
      });
    } else if (this.state.allpost == false) {
      instaconnected = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Banner"], {
        title: "Did not found any Instagram account",
        status: "critical"
      });
    } else {}

    if (this.state.pages != '') {
      fbpagecontent = __jsx(FacebookPageList, {
        openModal: this.openModal,
        pages: this.state.pages,
        instastatus: instaconnected
      });
    } // if(this.state.getpost){
    //
    //     instacontent = (
    //         <Instagram allpost={this.state.allpost} />
    //     )
    // }


    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], null, __jsx("div", {
      className: "fb_page_model"
    }, fbpagecontent));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Facebook);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-facebook-login */ "react-facebook-login");
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_facebookpages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/facebookpages */ "./pages/facebookpages.js");
/* harmony import */ var _pages_instasettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/instasettings */ "./pages/instasettings.js");
/* harmony import */ var _pages_instagram__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/instagram */ "./pages/instagram.js");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    console.log(props);
    super(props);

    _defineProperty(this, "responseFacebook", response => {
      if (response.data != 'undefined') {
        var self = this;
        const search = window.location.search; // could be '?foo=bar'

        const params = new URLSearchParams(search);
        const shop_name = params.get('shop');
        const postdata = {
          shop: shop_name,
          response: response
        };
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://localhost:5000/save_accesstoken/', postdata).then(function (response1) {
          console.log(response1);
          const shopdata = {
            shop: shop_name
          };
          axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://localhost:5000/get_fb_pages/', shopdata).then(function (response) {
            self.setstatus(response);
          }).catch(function (error) {
            console.log(error);
          });
        }).catch(function (error) {
          console.log(error);
        });
      }
    });

    _defineProperty(this, "componentClicked", () => console.log('clieked'));

    this.state = {
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
    this.logoutFacebook = this.logoutFacebook.bind(this);
    this.setnewstatus = this.setnewstatus.bind(this);
  }

  componentDidMount() {
    const search = window.location.search; // could be '?foo=bar'

    const params = new URLSearchParams(search);
    const shop_name = params.get('shop');
    console.log(shop_name); // var shopname = this.shopname();
    // console.log('1111');
    // console.log(shopname);
    // console.log('2222');
    //
    //

    const postdata = {
      shop: shop_name
    }; //

    var self = this;
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://localhost:5000/check_login_account/', postdata).then(function (response1) {
      console.log(response1);
      self.changefbstatus();

      if (response1.data == true) {
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://localhost:5000/get_fb_pages/', postdata).then(function (response) {
          self.changestatus(response);
        }).catch(function (error) {
          console.log(error);
        });
      }
    }).catch(function (error) {
      console.log(error);
    });
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://localhost:5000/get_settings/', postdata).then(function (response1) {
      self.setnewstatus(response1.data);
    }).catch(function (error) {
      console.log(error);
    });
  }

  setnewstatus(data) {
    this.setState({
      allsettings: data
    });
  }

  changefbstatus() {
    this.setState({
      isFBLoggedIn: true
    });
  }

  changestatus(response) {
    this.setState({
      fbpage: true,
      allpages: response.data
    });
  }

  logoutFacebook() {
    console.log('111');
    this.setState({
      isFBLoggedIn: false
    });
  }

  setstatus(response) {
    console.log(response);
    this.setState({
      isFBLoggedIn: true,
      fbpage: true,
      allpages: response.data
    });
  }

  updateState() {
    this.setState({
      post_shown: false
    });
  }

  render() {
    let fbContent;

    if (this.state.isFBLoggedIn) {
      if (this.state.fbpage) {
        fbContent = __jsx("div", null, __jsx(_pages_facebookpages__WEBPACK_IMPORTED_MODULE_3__["default"], {
          alldata: this.state.allpages
        }));
      }
    } else {
      fbContent = __jsx(react_facebook_login__WEBPACK_IMPORTED_MODULE_2___default.a, {
        appId: "591251971460198",
        autoLoad: true,
        fields: "name,email,picture",
        scope: "public_profile,email,manage_pages,read_insights,pages_show_list,instagram_basic",
        onClick: this.componentClicked,
        callback: this.responseFacebook
      });
    }

    let instasettings;

    if (this.state.allsettings != '') {
      instasettings = __jsx(_pages_instasettings__WEBPACK_IMPORTED_MODULE_4__["default"], {
        allsettings: this.state.allsettings
      });
    }

    return __jsx("div", {
      className: "ankit"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_6__["Frame"], null, instasettings, fbContent, __jsx(_pages_instagram__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
  }

}

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function InstaPostList(props) {
  const items1 = props.instapost;
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const handleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setActive(!active), [active]);
  const handleScrollBottom = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => console.log('Scrolled to bottom'), []);
  const pageclass = "insta_post_model";
  return __jsx("div", {
    style: {
      height: '50px'
    }
  }, __jsx("div", {
    className: pageclass
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: handleChange,
    primary: true
  }, "Instagram Post")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    large: true,
    open: active,
    title: "Instagram Post",
    onScrolledToBottom: handleScrollBottom,
    onClose: handleChange,
    className: "insta_post_data"
  }, items1.map((value, index) => {
    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Modal"].Section, {
      key: index,
      className: "insta_post_data",
      oneThird: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
      vertical: true,
      oneThird: true,
      distribution: "fill"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Badge"], null, __jsx("img", {
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

class Instagram extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      instapost: ''
    };
    this.updatedata = this.updatedata.bind(this);
  }

  componentDidMount() {
    const search = window.location.search; // could be '?foo=bar'

    const params = new URLSearchParams(search);
    const shop_name = params.get('shop');
    const postdata = {
      shop: shop_name
    };
    const self = this;
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://localhost:5000/get_insta_post/', postdata).then(function (response1) {
      console.log(response1);
      self.updatedata(response1.data);
    }).catch(function (error) {
      console.log(error);
    });
    const link = document.createElement("link");
    link.href = "../css/posterstyle.css";
    link.async = true;
    document.body.appendChild(link);
    const link1 = document.createElement("link");
    link1.href = "../css/slick.css";
    link1.async = true;
    document.body.appendChild(link1);
    const link2 = document.createElement("link");
    link2.href = "../css/slick-theme.css";
    link2.async = true;
    document.body.appendChild(link2);
    const script = document.createElement("script");
    script.src = "../js/jquery.min.js";
    script.async = true;
    document.body.appendChild(script);
    const script1 = document.createElement("script");
    script1.src = "../js/slick.min.js";
    script1.async = true;
    document.body.appendChild(script1);
  }

  updatedata(resdata) {
    console.log(resdata);
    this.setState({
      instapost: resdata.data
    });
  }

  render() {
    // if(this.state.instapost!=''){
    //     instagrampost = (
    //         <InstaPostList instapost={this.state.instapost} />
    //     );
    // }
    const elements = ['one', 'two', 'three'];
    const instagrampost = [];
    console.log(this.state.instapost);

    if (this.state.instapost != '') {
      const items1 = this.state.instapost;

      for (const [index, value] of items1.entries()) {
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

}

/* harmony default export */ __webpack_exports__["default"] = (Instagram);

/***/ }),

/***/ "./pages/instasettings.js":
/*!********************************!*\
  !*** ./pages/instasettings.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_postsettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/postsettings */ "./pages/postsettings.js");
/* harmony import */ var _pages_acceptsinformation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/acceptsinformation */ "./pages/acceptsinformation.js");
/* harmony import */ var _pages_appereance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/appereance */ "./pages/appereance.js");
/* harmony import */ var _pages_shop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/shop */ "./pages/shop.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function FittedTabsExample(props) {
  const {
    0: selected,
    1: setSelected
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const handleTabChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(selectedTabIndex => setSelected(selectedTabIndex), []);
  const postsetting = props.allpostsettings;
  const tabs = [{
    id: 'all-post-setting',
    content: 'Gallary Settings',
    accessibilityLabel: 'Gallary Settings',
    panelID: 'all-post-setting-fitted-Ccontent'
  }, {
    id: 'all-accepts-information',
    content: 'Information',
    accessibilityLabel: 'Information',
    panelID: 'all-accepts-information-fitted-Ccontent'
  }, {
    id: 'all-accepts-appereance',
    content: 'Appereance',
    accessibilityLabel: 'Appereance',
    panelID: 'all-accepts-appereance-fitted-Ccontent'
  }, {
    id: 'all-accepts-shop',
    content: 'Shop',
    accessibilityLabel: 'Shop',
    panelID: 'all-accepts-shop-fitted-Ccontent'
  }];
  let tabcontent;

  if (selected == 0) {
    tabcontent = __jsx(_pages_postsettings__WEBPACK_IMPORTED_MODULE_2__["default"], {
      settings: postsetting
    });
  } else if (selected == 1) {
    tabcontent = __jsx(_pages_acceptsinformation__WEBPACK_IMPORTED_MODULE_3__["default"], {
      settings: postsetting
    });
  } else if (selected == 2) {
    tabcontent = __jsx(_pages_appereance__WEBPACK_IMPORTED_MODULE_4__["default"], {
      settings: postsetting
    });
  } else if (selected == 3) {
    tabcontent = __jsx(_pages_shop__WEBPACK_IMPORTED_MODULE_5__["default"], {
      settings: postsetting
    });
  }

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    tabs: tabs,
    selected: selected,
    onSelect: handleTabChange,
    fitted: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"].Section, null, tabcontent)));
}

class Instasettings extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      allsettings: props.allsettings
    };
  }

  render() {
    return __jsx("div", null, __jsx(FittedTabsExample, {
      allpostsettings: this.state.allsettings
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Instasettings);

/***/ }),

/***/ "./pages/postsettings.js":
/*!*******************************!*\
  !*** ./pages/postsettings.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris/styles.css */ "./node_modules/@shopify/polaris/styles.css");
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Postsettings extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    const allsetting = props.settings;

    if (allsetting != false) {
      let colordata = '';

      if (allsetting.color) {
        colordata = JSON.parse(allsetting.color);
      } else {
        colordata = {
          hue: 300,
          brightness: 1,
          saturation: 0.7,
          alpha: 0.8
        };
      }

      let display_border = false;
      let display_border_button_name = 'Enable';

      if (allsetting.display_border) {
        if (allsetting.display_border == 'true') {
          display_border = false;
          display_border_button_name = 'Enable';
        } else {
          display_border = true;
          display_border_button_name = 'Disable';
        }
      }

      let social_sharing = false;
      let social_sharing_button_name = 'Enable';

      if (allsetting.social_sharing) {
        if (allsetting.social_sharing == 'true') {
          social_sharing = false;
          social_sharing_button_name = 'Enable';
        } else {
          social_sharing = true;
          social_sharing_button_name = 'Disable';
        }
      }

      let check_widget = '';

      if (allsetting.check_widget) {
        check_widget = allsetting.check_widget;
      }

      let check_hover = '';

      if (allsetting.check_hover) {
        check_hover = allsetting.check_hover;
      }

      let widget_heading_value = '';

      if (allsetting.widget_heading_value) {
        widget_heading_value = allsetting.widget_heading_value;
      }

      let border_width_value = '';

      if (allsetting.border_width_value) {
        border_width_value = allsetting.border_width_value;
      }

      let layout_row_value = '';

      if (allsetting.layout_row_value) {
        layout_row_value = allsetting.layout_row_value;
      }

      let padding_value = '';

      if (allsetting.padding_value) {
        padding_value = allsetting.padding_value;
      }

      this.state = {
        color: colordata,
        popoverActive: false,
        checkwidget: check_widget,
        checkhover: check_hover,
        display_border: display_border,
        display_border_button_name: display_border_button_name,
        social_sharing: social_sharing,
        social_sharing_button_name: social_sharing_button_name,
        border_width_value: border_width_value,
        widget_heading_value: widget_heading_value,
        layout_column_value: border_width_value,
        layout_row_value: layout_row_value,
        padding_value: padding_value,
        button_type: false,
        notification_status: false
      };
    } else {
      this.state = {
        color: {
          hue: 300,
          brightness: 1,
          saturation: 0.7,
          alpha: 0.8
        },
        popoverActive: false,
        checkwidget: 'grid',
        checkhover: 'zoom_out',
        display_border: false,
        display_border_button_name: 'Enable',
        social_sharing: false,
        social_sharing_button_name: 'Enable',
        border_width_value: '1',
        widget_heading_value: '',
        layout_column_value: '6',
        layout_row_value: '2',
        padding_value: '1',
        button_type: false,
        notification_status: false
      };
    }

    this.handlePopoverOpen = this.handlePopoverOpen.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleRgbChange = this.handleRgbChange.bind(this);
    this.handlePopoverClose = this.handlePopoverClose.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSelectHoveeffect = this.handleSelectHoveeffect.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleToggleSocial = this.handleToggleSocial.bind(this);
    this.handleBorderwidth = this.handleBorderwidth.bind(this);
    this.handleWidgetheading = this.handleWidgetheading.bind(this);
    this.handleLayoutCol = this.handleLayoutCol.bind(this);
    this.handleLayoutRow = this.handleLayoutRow.bind(this);
    this.handlePadding = this.handlePadding.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changestatus = this.changestatus.bind(this);
    this.handletoggleActive = this.handletoggleActive.bind(this);
  }

  handleSubmit() {
    this.setState({
      button_type: true
    });
    const search = window.location.search; // could be '?foo=bar'

    const params = new URLSearchParams(search);
    const shop_name = params.get('shop');
    const postdata = {
      option: 1,
      shop: shop_name,
      settings: this.state
    };
    const self = this;
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://localhost:5000/save_settings/', postdata).then(function (response1) {
      self.changestatus();
    }).catch(function (error) {
      console.log(error);
    });
  }

  changestatus() {
    this.setState({
      button_type: false,
      notification_status: true
    });
  }

  handleColorChange(color) {
    this.setState({
      color
    });
  }

  handleRgbChange(value) {
    const rgbValues = value.replace(/[^\d*.?\d*,]/g, "").split(",");
    console.log(rgbValues);
    const color = Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbToHsb"])({
      red: rgbValues[0],
      green: rgbValues[1],
      blue: rgbValues[2],
      alpha: rgbValues[3]
    });
    this.setState({
      color
    });
  }

  handlePopoverClose() {
    this.setState({
      popoverActive: false
    });
  }

  handlePopoverOpen() {
    this.setState({
      popoverActive: true
    });
  }

  handleSelectChange(value) {
    this.setState({
      checkwidget: value
    });
  }

  handleSelectHoveeffect(value) {
    this.setState({
      checkhover: value
    });
  }

  handleToggle() {
    if (this.state.display_border == false) {
      this.setState({
        display_border: true,
        display_border_button_name: 'Disable'
      });
    } else {
      this.setState({
        display_border: false,
        display_border_button_name: 'Enable'
      });
    }
  }

  handleToggleSocial() {
    if (this.state.social_sharing == false) {
      this.setState({
        social_sharing: true,
        social_sharing_button_name: 'Disable'
      });
    } else {
      this.setState({
        social_sharing: false,
        social_sharing_button_name: 'Enable'
      });
    }
  }

  handleBorderwidth(value) {
    this.setState({
      border_width_value: value
    });
  }

  handleWidgetheading(value) {
    this.setState({
      widget_heading_value: value
    });
  }

  handleLayoutCol(value) {
    this.setState({
      layout_column_value: value
    });
  }

  handleLayoutRow(value) {
    this.setState({
      layout_row_value: value
    });
  }

  handlePadding(value) {
    this.setState({
      padding_value: value
    });
  }

  handletoggleActive() {
    if (this.state.notification_status == false) {
      this.setState({
        notification_status: true
      });
    } else {
      this.setState({
        notification_status: false
      });
    }
  }

  render() {
    const {
      color,
      popoverActive
    } = this.state;
    const rgbaColor = Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(color));

    const activator = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.handlePopoverOpen
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      alignment: "center",
      spacing: "tight"
    }, __jsx("div", {
      style: {
        height: "2rem",
        width: "2rem",
        borderRadius: "0.3rem",
        background: rgbaColor
      }
    }), __jsx("span", null, "Border color")));

    let notification;

    if (this.state.notification_status == true) {
      notification = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Toast"], {
        content: "Save Successfully",
        onDismiss: this.handletoggleActive,
        active: true
      });
    }

    const options = [{
      label: 'Grid',
      value: 'grid'
    }, {
      label: 'List',
      value: 'list'
    }];
    const options1 = [{
      label: 'Zoom Out',
      value: 'zoom_out'
    }, {
      label: 'Zoom In',
      value: 'zoom_in'
    }];
    return __jsx("div", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onSubmit: this.handleSubmit
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      label: "Widget Type",
      options: options,
      onChange: this.handleSelectChange,
      value: this.state.checkwidget
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      label: "Hover Effect",
      options: options1,
      onChange: this.handleSelectHoveeffect,
      value: this.state.checkhover
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["SettingToggle"], {
      action: {
        content: this.state.display_border_button_name,
        onAction: this.handleToggle
      },
      enabled: this.state.display_border
    })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      type: "number",
      label: "Layout Columns",
      value: this.state.layout_column_value,
      onChange: this.handleLayoutCol
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      type: "number",
      label: "Layout Rows",
      value: this.state.layout_row_value,
      onChange: this.handleLayoutRow
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["SettingToggle"], {
      action: {
        content: this.state.social_sharing_button_name,
        onAction: this.handleToggleSocial
      },
      enabled: this.state.social_sharing
    })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      label: "Border Width",
      type: "number",
      value: this.state.border_width_value,
      onChange: this.handleBorderwidth,
      connectedRight: __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Select"], {
        label: "Pixel Unit",
        labelHidden: true,
        value: "PX",
        options: ['PX'],
        onChange: "hello"
      })
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      label: "Widget Heading",
      value: this.state.widget_heading_value,
      onChange: this.handleWidgetheading
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
      active: popoverActive,
      activator: activator,
      onClose: this.handlePopoverClose
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
      onChange: this.handleColorChange,
      color: color,
      allowAlpha: true
    })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: rgbaColor,
      onChange: this.handleRgbChange
    })))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      label: "Padding (Space Beetween Image)",
      type: "number",
      value: this.state.padding_value,
      onChange: this.handlePadding,
      connectedRight: __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Select"], {
        label: "Pixel Unit",
        labelHidden: true,
        value: "PX",
        options: ['PX'],
        onChange: "hello"
      })
    })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      submit: true,
      loading: this.state.button_type,
      primary: true
    }, "Submit"))), notification);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Postsettings);

/***/ }),

/***/ "./pages/shop.js":
/*!***********************!*\
  !*** ./pages/shop.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris/styles.css */ "./node_modules/@shopify/polaris/styles.css");
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Postsettings extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    const allsetting = props.settings;

    if (allsetting != false) {
      let shopbackgroundcolordata = '';

      if (allsetting.shopbackgroundcolor) {
        shopbackgroundcolordata = JSON.parse(allsetting.shopbackgroundcolor);
      } else {
        shopbackgroundcolordata = {
          hue: 300,
          brightness: 1,
          saturation: 0.7,
          alpha: 0.8
        };
      }

      let shoptextcolordata = '';

      if (allsetting.shoptextcolor) {
        shoptextcolordata = JSON.parse(allsetting.shoptextcolor);
      } else {
        shoptextcolordata = {
          hue: 300,
          brightness: 1,
          saturation: 0.7,
          alpha: 0.8
        };
      }

      let shop_heading_value = '';

      if (allsetting.shop_heading_value) {
        shop_heading_value = allsetting.shop_heading_value;
      }

      let shop_button = false;
      let shop_button_name = 'Enable';

      if (allsetting.shop_button) {
        if (allsetting.shop_button == 'false') {
          shop_button = false;
          shop_button_name = 'Enable';
        } else {
          shop_button = true;
          shop_button_name = 'Disable';
        }
      }

      this.state = {
        shopbackgroundcolor: shopbackgroundcolordata,
        backgroundpopoverActive: false,
        shoptextcolor: shoptextcolordata,
        textpopoverActive: false,
        shop_button: shop_button,
        shop_button_name: shop_button_name,
        shop_heading_value: shop_heading_value
      };
    } else {
      this.state = {
        shopbackgroundcolor: {
          hue: 300,
          brightness: 1,
          saturation: 0.7,
          alpha: 0.8
        },
        backgroundpopoverActive: false,
        shoptextcolor: {
          hue: 300,
          brightness: 1,
          saturation: 0.7,
          alpha: 0.8
        },
        textpopoverActive: false,
        shop_button: false,
        shop_button_name: 'Enable',
        shop_heading_value: '',
        button_type: false,
        notification_status: false
      };
    }

    this.handlebackgroundColorChange = this.handlebackgroundColorChange.bind(this);
    this.handlebackgroundRgbChange = this.handlebackgroundRgbChange.bind(this);
    this.handlebackgroundPopoverClose = this.handlebackgroundPopoverClose.bind(this);
    this.handlebackgroundPopoverOpen = this.handlebackgroundPopoverOpen.bind(this);
    this.handletextColorChange = this.handletextColorChange.bind(this);
    this.handletextRgbChange = this.handletextRgbChange.bind(this);
    this.handletextPopoverClose = this.handletextPopoverClose.bind(this);
    this.handletextPopoverOpen = this.handletextPopoverOpen.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleShopheading = this.handleShopheading.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.setState({
      button_type: true
    });
    const search = window.location.search; // could be '?foo=bar'

    const params = new URLSearchParams(search);
    const shop_name = params.get('shop');
    const postdata = {
      option: 4,
      shop: shop_name,
      settings: this.state
    };
    const self = this;
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://localhost:5000/save_settings/', postdata).then(function (response1) {
      self.changestatus();
    }).catch(function (error) {
      console.log(error);
    });
  }

  changestatus() {
    this.setState({
      button_type: false,
      notification_status: true
    });
  }

  handlebackgroundColorChange(shopbackgroundcolor) {
    this.setState({
      shopbackgroundcolor
    });
  }

  handlebackgroundRgbChange(value) {
    const rgbValues = value.replace(/[^\d*.?\d*,]/g, "").split(",");
    const shopbackgroundcolor = Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbToHsb"])({
      red: rgbValues[0],
      green: rgbValues[1],
      blue: rgbValues[2],
      alpha: rgbValues[3]
    });
    this.setState({
      shopbackgroundcolor
    });
  }

  handlebackgroundPopoverClose() {
    this.setState({
      backgroundpopoverActive: false
    });
  }

  handlebackgroundPopoverOpen() {
    this.setState({
      backgroundpopoverActive: true
    });
  }

  handletextColorChange(shoptextcolor) {
    this.setState({
      shoptextcolor
    });
  }

  handletextRgbChange(value) {
    const rgbValues = value.replace(/[^\d*.?\d*,]/g, "").split(",");
    console.log(rgbValues);
    const shoptextcolor = Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbToHsb"])({
      red: rgbValues[0],
      green: rgbValues[1],
      blue: rgbValues[2],
      alpha: rgbValues[3]
    });
    this.setState({
      shoptextcolor
    });
  }

  handletextPopoverClose() {
    this.setState({
      textpopoverActive: false
    });
  }

  handletextPopoverOpen() {
    this.setState({
      textpopoverActive: true
    });
  }

  handleShopheading(value) {
    this.setState({
      shop_heading_value: value
    });
  }

  handleToggle() {
    if (this.state.shop_button == false) {
      this.setState({
        shop_button: true,
        shop_button_name: 'Disable'
      });
    } else {
      this.setState({
        shop_button: false,
        shop_button_name: 'Enable'
      });
    }
  }

  render() {
    const {
      shopbackgroundcolor,
      backgroundpopoverActive
    } = this.state;
    const backgroundrgbaColor = Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(shopbackgroundcolor));

    const backgroundactivator = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.handlebackgroundPopoverOpen
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      alignment: "center",
      spacing: "tight"
    }, __jsx("div", {
      style: {
        height: "2rem",
        width: "2rem",
        borderRadius: "0.3rem",
        background: backgroundrgbaColor
      }
    }), __jsx("span", null, "Background color")));

    const {
      shoptextcolor,
      textpopoverActive
    } = this.state;
    const textrgbaColor = Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["rgbString"])(Object(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["hsbToRgb"])(shoptextcolor));

    const textactivator = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.handletextPopoverOpen
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      alignment: "center",
      spacing: "tight"
    }, __jsx("div", {
      style: {
        height: "2rem",
        width: "2rem",
        borderRadius: "0.3rem",
        background: textrgbaColor
      }
    }), __jsx("span", null, "Text color")));

    let notification;

    if (this.state.notification_status == true) {
      notification = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Toast"], {
        content: "Save Successfully",
        onDismiss: this.handlehsbToRgbtoggleActive,
        active: true
      });
    }

    return __jsx("div", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onSubmit: this.handleSubmit
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], null, "Shop Button Settings"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
      active: backgroundpopoverActive,
      activator: backgroundactivator,
      onClose: this.handlebackgroundPopoverClose
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
      onChange: this.handlebackgroundColorChange,
      color: shopbackgroundcolor,
      allowAlpha: true
    })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: backgroundrgbaColor,
      onChange: this.handlebackgroundRgbChange
    }))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
      active: textpopoverActive,
      activator: textactivator,
      onClose: this.handletextPopoverClose
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
      onChange: this.handletextColorChange,
      color: shoptextcolor,
      allowAlpha: true
    })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Popover"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: textrgbaColor,
      onChange: this.handletextRgbChange
    })))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["SettingToggle"], {
      action: {
        content: this.state.shop_button_name,
        onAction: this.handleToggle
      },
      enabled: this.state.shop_button
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      label: "Shop Button Heading",
      value: this.state.shop_heading_value,
      onChange: this.handleShopheading
    })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      submit: true,
      loading: this.state.button_type,
      primary: true
    }, "Submit"))), notification);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Postsettings);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/imac/Downloads/app/insta/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-facebook-login":
/*!***************************************!*\
  !*** external "react-facebook-login" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-facebook-login");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map