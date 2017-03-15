webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(28);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ByeByeApp = function () {
	  function ByeByeApp() {
	    _classCallCheck(this, ByeByeApp);
	  }

	  _createClass(ByeByeApp, [{
	    key: 'byebyeRender',
	    value: function byebyeRender() {
	      _reactDom2.default.render(_react2.default.createElement(
	        'h1',
	        null,
	        'Bye Bye!'
	      ), document.getElementById('stop'));
	    }
	  }]);

	  return ByeByeApp;
	}();

	var byebyeApp = new ByeByeApp();
	byebyeApp.byebyeRender();

/***/ }
]);