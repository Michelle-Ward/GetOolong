/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_components_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/App */ \"./src/components/App.js\");\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3000;\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()(); // ...\n\napp.get('/', (req, res) => {\n  const app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_components_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', (err, data) => {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', `<div id=\"root\">${app}</div>`));\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static('./build'));\napp.listen(PORT, () => {\n  console.log(`Server is listening on port ${PORT}`);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/components/About.js":
/*!*********************************!*\
  !*** ./src/components/About.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_About_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/About.css */ \"./src/style/About.css\");\n/* harmony import */ var _style_About_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_About_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction About() {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    id: \"about\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"hero-banner\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"about-banner-txt\"\n  }, /*#__PURE__*/React.createElement(\"p\", null, \"Get Oolong\"), /*#__PURE__*/React.createElement(\"h1\", null, \"A history of bringing people together\"))), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"about-initial-container\"\n  }, /*#__PURE__*/React.createElement(\"p\", null, \"Vestibulum ullamcorper id lorem a imperdiet. Nunc dui mi, varius ultricies pulvinar et, porttitor et leo. Nam rutrum, quam a feugiat sollicitudin, augue quam cursus metus, eget rutrum sapien sem nec orci. Morbi rutrum molestie urna, non faucibus purus lobortis sit amet. Ut viverra eleifend tellus, pulvinar lobortis lectus rhoncus vitae.\"), /*#__PURE__*/React.createElement(\"p\", null, \"Vestibulum ullamcorper id lorem a imperdiet. Nunc dui mi, varius ultricies pulvinar et, porttitor et leo. Nam rutrum, quam a feugiat sollicitudin, augue quam cursus metus, eget rutrum sapien sem nec orci.\"), /*#__PURE__*/React.createElement(\"img\", null)), /*#__PURE__*/React.createElement(\"h2\", null, \"This is the about section\"), /*#__PURE__*/React.createElement(\"p\", null, \"this will contain more info about the company\"), /*#__PURE__*/React.createElement(\"p\", null, \"we also will have a contact info\"), /*#__PURE__*/React.createElement(\"button\", {\n    type: \"button\"\n  }, \"Contact Us\"));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\n\n//# sourceURL=webpack:///./src/components/About.js?");

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/App.css */ \"./src/style/App.css\");\n/* harmony import */ var _style_App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_App_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _About_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About.js */ \"./src/components/About.js\");\n/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home.js */ \"./src/components/Home.js\");\n/* harmony import */ var _TeaShop_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TeaShop.js */ \"./src/components/TeaShop.js\");\n/* harmony import */ var _FixedHeader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FixedHeader.js */ \"./src/components/FixedHeader.js\");\n\n\n\n\n\n\n\nfunction App() {\n  return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"BrowserRouter\"], null, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"App-main\"\n  }, /*#__PURE__*/React.createElement(_FixedHeader_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), /*#__PURE__*/React.createElement(\"ul\", {\n    className: \"App-links\"\n  }, /*#__PURE__*/React.createElement(\"li\", null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\",\n    className: \"App-link\"\n  }, \"HOME\")), /*#__PURE__*/React.createElement(\"li\", null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/teaShop\",\n    className: \"App-link \"\n  }, \"TEA\")), /*#__PURE__*/React.createElement(\"li\", null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/accessories\",\n    className: \"App-link inner\"\n  }, \"ACCESSORIES\")), /*#__PURE__*/React.createElement(\"li\", null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/sets\",\n    className: \"App-link \"\n  }, \"TEA SETS\")), /*#__PURE__*/React.createElement(\"li\", null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/about\",\n    className: \"App-link \"\n  }, \"ABOUT\")), /*#__PURE__*/React.createElement(\"li\", null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/locator\",\n    className: \"App-link\"\n  }, \"STORE LOCATOR\"))), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/about\"\n  }, /*#__PURE__*/React.createElement(_About_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/TeaShop\"\n  }, /*#__PURE__*/React.createElement(_TeaShop_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/accessories\"\n  }, /*#__PURE__*/React.createElement(_TeaShop_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/sets\"\n  }, /*#__PURE__*/React.createElement(_TeaShop_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/locator\"\n  }, /*#__PURE__*/React.createElement(_TeaShop_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/\"\n  }, /*#__PURE__*/React.createElement(_Home_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null))))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/components/App.js?");

/***/ }),

/***/ "./src/components/FixedHeader.js":
/*!***************************************!*\
  !*** ./src/components/FixedHeader.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_FixedHeader_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/FixedHeader.css */ \"./src/style/FixedHeader.css\");\n/* harmony import */ var _style_FixedHeader_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_FixedHeader_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _OutlineButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OutlineButton.js */ \"./src/components/OutlineButton.js\");\n\n\n\nfunction FixedHeader() {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"fixedhead-container\"\n  }, /*#__PURE__*/React.createElement(\"h1\", {\n    className: \"brand-logo\"\n  }, \"Get Oolong\"), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"fixedHead-buttons\"\n  }, /*#__PURE__*/React.createElement(_OutlineButton_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    text: \"Sign In / Create Account\"\n  }), /*#__PURE__*/React.createElement(_OutlineButton_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    text: \"Cart\"\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FixedHeader);\n\n//# sourceURL=webpack:///./src/components/FixedHeader.js?");

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ItemCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemCard.js */ \"./src/components/ItemCard.js\");\n/* harmony import */ var _PromoSmall_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PromoSmall.js */ \"./src/components/PromoSmall.js\");\n/* harmony import */ var _style_Home_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/Home.css */ \"./src/style/Home.css\");\n/* harmony import */ var _style_Home_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_Home_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_peachtealisting_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/peachtealisting.webp */ \"./src/images/peachtealisting.webp\");\n/* harmony import */ var _images_peachtealisting_webp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_peachtealisting_webp__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_tea_box_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/tea box.webp */ \"./src/images/tea box.webp\");\n/* harmony import */ var _images_tea_box_webp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_tea_box_webp__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _images_rose_tea_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/rose tea.webp */ \"./src/images/rose tea.webp\");\n/* harmony import */ var _images_rose_tea_webp__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_rose_tea_webp__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _images_cinnamon_tea_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/cinnamon tea.jpeg */ \"./src/images/cinnamon tea.jpeg\");\n/* harmony import */ var _images_cinnamon_tea_jpeg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_cinnamon_tea_jpeg__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst fakeListings = [{\n  image: `${_images_peachtealisting_webp__WEBPACK_IMPORTED_MODULE_3___default.a}`,\n  title: 'Peach Passsion',\n  description: 'Aliquam in neque sem. Pellentesque quis porttitor dui, vel venenatis quam. Nam id sodales augue. Donec vel elit eros.'\n}, {\n  image: `${_images_tea_box_webp__WEBPACK_IMPORTED_MODULE_4___default.a}`,\n  title: 'Matcha',\n  description: 'Aliquam in neque sem. Pellentesque quis porttitor dui, vel venenatis quam. Nam id sodales augue. Donec vel elit eros.'\n}, {\n  image: `${_images_rose_tea_webp__WEBPACK_IMPORTED_MODULE_5___default.a}`,\n  title: 'oolong',\n  description: 'Aliquam in neque sem. Pellentesque quis porttitor dui, vel venenatis quam. Nam id sodales augue. Donec vel elit eros.'\n}, {\n  image: `${_images_cinnamon_tea_jpeg__WEBPACK_IMPORTED_MODULE_6___default.a}`,\n  title: 'Cinnamon',\n  description: 'Aliquam in neque sem. Pellentesque quis porttitor dui, vel venenatis quam. Nam id sodales augue. Donec vel elit eros.'\n}];\n\nfunction Home() {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    id: \"home\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"banner-container\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"banner-img\"\n  }), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"banner-txt\"\n  }, /*#__PURE__*/React.createElement(\"h1\", null, \"Freshly Picked For Spring\"), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"banner-byline\"\n  }, /*#__PURE__*/React.createElement(\"p\", null, \"Wave goodbye to winter\", /*#__PURE__*/React.createElement(\"br\", null), \"  with a refreshing collection\"), /*#__PURE__*/React.createElement(\"button\", {\n    className: \"banner-button\"\n  }, \"SHOP NOW\")))), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"promo-banner\"\n  }, /*#__PURE__*/React.createElement(_PromoSmall_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"FREE SET OF COASTERS\",\n    byline: \"with tea purchase\"\n  }), /*#__PURE__*/React.createElement(\"hr\", null), /*#__PURE__*/React.createElement(_PromoSmall_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"SAVE WITH STARTER PACK\",\n    byline: \"includes 2 free mini collections\"\n  })), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"quote-container\"\n  }, /*#__PURE__*/React.createElement(\"h2\", null, \"Come, let us have some tea and continue to talk about happy things\")), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"shop-options\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"tea-option\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"tea-option-btn\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    href: \"/home\"\n  }, \"SHOP TEA\"))), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"set-option\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"set-option-btn\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    href: \"/home\"\n  }, \"SHOP TEA SETS\")))), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"shop-preview\"\n  }, /*#__PURE__*/React.createElement(\"h2\", null, \"DISCOVER THE COMPANY OF TEA\"), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"preview-cards\"\n  }, fakeListings.map(item => /*#__PURE__*/React.createElement(_ItemCard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    image: item.image,\n    title: item.title,\n    description: item.description\n  })))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/components/Home.js?");

/***/ }),

/***/ "./src/components/ItemCard.js":
/*!************************************!*\
  !*** ./src/components/ItemCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])({\n  root: {\n    width: 300,\n    minWidth: 300,\n    minHeight: 480,\n    maxHeight: 485,\n    margin: 'auto 1rem'\n  },\n  media: {\n    height: 250,\n    width: 300,\n    backgroundSize: 'contain',\n    borderBottom: '1px solid #DED9E2'\n  },\n  primaryText: {\n    fontSize: '2rem',\n    fontFamily: 'Roboto',\n    fontWeight: 'bold',\n    color: '153306'\n  },\n  secondaryText: {\n    fontSize: '1rem',\n    color: 'red',\n    fontFamily: 'Roboto',\n    color: '112905'\n  },\n  cartBtn: {\n    backgroundColor: '#729b79',\n    color: '#f7f4ea',\n    transition: 'all .3s',\n    '&:hover': {\n      backgroundColor: '#f7f4ea',\n      color: '#112905',\n      border: '1px solid #112905'\n    }\n  }\n});\n\nfunction ItemCard(props) {\n  const classes = useStyles();\n  return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Card\"], {\n    className: classes.root,\n    raised: true\n  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"CardMedia\"], {\n    className: classes.media,\n    image: props.image,\n    title: \"product listing image\"\n  }), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"CardContent\"], null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Typography\"], {\n    className: classes.primaryText\n  }, props.title), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Typography\"], {\n    className: classes.secondaryText\n  }, props.description), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"Button\"], {\n    className: classes.cartBtn\n  }, \"Add to Cart\")));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ItemCard);\n\n//# sourceURL=webpack:///./src/components/ItemCard.js?");

/***/ }),

/***/ "./src/components/OutlineButton.js":
/*!*****************************************!*\
  !*** ./src/components/OutlineButton.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OutlineButton; });\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Person */ \"@material-ui/icons/Person\");\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_icons_LocalMall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/LocalMall */ \"@material-ui/icons/LocalMall\");\n/* harmony import */ var _material_ui_icons_LocalMall__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalMall__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"makeStyles\"])({\n  root: {\n    backgroundColor: '#112905',\n    borderRadius: 3,\n    border: '#f7f4ea solid 1px',\n    color: '#f7f4ea',\n    height: 48,\n    padding: '0 30px',\n    transition: 'all .3s',\n    '&:hover': {\n      backgroundColor: '#f7f4ea',\n      color: '#112905'\n    }\n  },\n  label: {\n    textTransform: 'capitalize'\n  }\n});\nfunction OutlineButton(props) {\n  const classes = useStyles();\n  return /*#__PURE__*/React.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    classes: {\n      root: classes.root,\n      // class name, e.g. `classes-nesting-root-x`\n      label: classes.label // class name, e.g. `classes-nesting-label-x`\n\n    }\n  }, props.text === 'Sign In / Create Account' ? /*#__PURE__*/React.createElement(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_2___default.a, null) : '', props.text === 'Cart' ? /*#__PURE__*/React.createElement(_material_ui_icons_LocalMall__WEBPACK_IMPORTED_MODULE_3___default.a, null) : '', props.text);\n}\n\n//# sourceURL=webpack:///./src/components/OutlineButton.js?");

/***/ }),

/***/ "./src/components/PromoSmall.js":
/*!**************************************!*\
  !*** ./src/components/PromoSmall.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_PromoSmall_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/PromoSmall.css */ \"./src/style/PromoSmall.css\");\n/* harmony import */ var _style_PromoSmall_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_PromoSmall_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction PromoSmall(props) {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"promo-container\"\n  }, /*#__PURE__*/React.createElement(\"h3\", null, props.title), /*#__PURE__*/React.createElement(\"p\", null, props.byline), /*#__PURE__*/React.createElement(\"a\", null, \"Learn More\"));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PromoSmall);\n\n//# sourceURL=webpack:///./src/components/PromoSmall.js?");

/***/ }),

/***/ "./src/components/TeaShop.js":
/*!***********************************!*\
  !*** ./src/components/TeaShop.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction TeaShop() {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    id: \"TeaShop\"\n  }, /*#__PURE__*/React.createElement(\"h2\", null, \"This is where the shop will go\"), /*#__PURE__*/React.createElement(\"p\", null, \"we'll have a short description of our different teas and have links to smaller sub sections\"), /*#__PURE__*/React.createElement(\"table\", null, /*#__PURE__*/React.createElement(\"thead\", null, /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"th\", {\n    colspan: \"2\"\n  }, \"Our teas table\"))), /*#__PURE__*/React.createElement(\"tbody\", null, /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"td\", null, \"loose leaf\"), /*#__PURE__*/React.createElement(\"td\", null, \"tea sets\")))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TeaShop);\n\n//# sourceURL=webpack:///./src/components/TeaShop.js?");

/***/ }),

/***/ "./src/images/cinnamon tea.jpeg":
/*!**************************************!*\
  !*** ./src/images/cinnamon tea.jpeg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/images/cinnamon_tea.jpeg?");

/***/ }),

/***/ "./src/images/peachtealisting.webp":
/*!*****************************************!*\
  !*** ./src/images/peachtealisting.webp ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:4)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/images/peachtealisting.webp?");

/***/ }),

/***/ "./src/images/rose tea.webp":
/*!**********************************!*\
  !*** ./src/images/rose tea.webp ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0000' (1:6)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/images/rose_tea.webp?");

/***/ }),

/***/ "./src/images/tea box.webp":
/*!*********************************!*\
  !*** ./src/images/tea box.webp ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0000' (1:6)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/images/tea_box.webp?");

/***/ }),

/***/ "./src/style/About.css":
/*!*****************************!*\
  !*** ./src/style/About.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (2:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| \\n> .hero-banner {\\n|   background-image: url('../images/womenhandtea.jpeg');\\n|   background-size: cover;\");\n\n//# sourceURL=webpack:///./src/style/About.css?");

/***/ }),

/***/ "./src/style/App.css":
/*!***************************!*\
  !*** ./src/style/App.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '#' (6:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| } */\\n| \\n> #shop  {\\n|   border: blueviolet double 8px;\\n| }\");\n\n//# sourceURL=webpack:///./src/style/App.css?");

/***/ }),

/***/ "./src/style/FixedHeader.css":
/*!***********************************!*\
  !*** ./src/style/FixedHeader.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .fixedhead-container {\\n|   display: flex;\\n|   flex-direction: row;\");\n\n//# sourceURL=webpack:///./src/style/FixedHeader.css?");

/***/ }),

/***/ "./src/style/Home.css":
/*!****************************!*\
  !*** ./src/style/Home.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '#' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> #home {\\n|   width: 100%;\\n|   height: 100%;\");\n\n//# sourceURL=webpack:///./src/style/Home.css?");

/***/ }),

/***/ "./src/style/PromoSmall.css":
/*!**********************************!*\
  !*** ./src/style/PromoSmall.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .promo-container {\\n|   background-color: #C0B9DD;\\n|   color: #f7f4ea;\");\n\n//# sourceURL=webpack:///./src/style/PromoSmall.css?");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core%22?");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Button%22?");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/styles%22?");

/***/ }),

/***/ "@material-ui/icons/LocalMall":
/*!***********************************************!*\
  !*** external "@material-ui/icons/LocalMall" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/LocalMall\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/LocalMall%22?");

/***/ }),

/***/ "@material-ui/icons/Person":
/*!********************************************!*\
  !*** external "@material-ui/icons/Person" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Person\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Person%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });