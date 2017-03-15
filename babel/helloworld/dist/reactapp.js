'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _hello = require('./hello');

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