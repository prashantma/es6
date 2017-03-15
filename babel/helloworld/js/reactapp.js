webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(28);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _hello = __webpack_require__(166);

	var _hello2 = _interopRequireDefault(_hello);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ReactHelloApp = function () {
	  function ReactHelloApp() {
	    _classCallCheck(this, ReactHelloApp);
	  }

	  _createClass(ReactHelloApp, [{
	    key: 'helloRender',
	    value: function helloRender() {
	      _reactDom2.default.render(_react2.default.createElement(_hello2.default, { name: 'Prashant' }), document.getElementById('root'));
	    }
	  }]);

	  return ReactHelloApp;
	}();

	var reactHelloApp = new ReactHelloApp();
	reactHelloApp.helloRender();

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**************************************************************************
	 * ********* ALWAYS PUT 'use strict'; *************************************
	 * ********* ADD "export" and "default" IN CLASS DECLARATION **************
	 * ********* USE BRACKETS AROUND return JSX, use strict'; WIILL CATCH *****
	 **************************************************************************/

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Hello = function (_React$Component) {
	    _inherits(Hello, _React$Component);

	    function Hello(props) {
	        _classCallCheck(this, Hello);

	        return _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).call(this, props));
	    }

	    _createClass(Hello, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'h1',
	                null,
	                'Hello, world - by ',
	                this.props.name,
	                '!'
	            );
	        }
	    }]);

	    return Hello;
	}(_react2.default.Component);

	exports.default = Hello;

/***/ }

});