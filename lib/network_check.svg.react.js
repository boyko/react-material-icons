"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG = function (_React$Component) {
  _inherits(SVG, _React$Component);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  SVG.prototype.render = function render() {
    return _react2.default.createElement(
      "svg",
      _extends({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" }, this.props),
      _react2.default.createElement(
        "title",
        null,
        "network_check"
      ),
      _react2.default.createElement("path", { d: "M5.016 12.984c2.016-2.016 4.688-2.953 7.313-2.859l-1.313 2.859c-1.453.188-2.906.891-4.031 2.016zm12 2.016a7.987 7.987 0 0 0-1.219-.984l.563-2.906a10.005 10.005 0 0 1 2.625 1.875zM21 11.016a12.535 12.535 0 0 0-4.125-2.766l.516-2.813A15.284 15.284 0 0 1 23.016 9zM.984 9c3.75-3.75 8.906-5.156 13.734-4.313l-1.172 2.672c-3.75-.469-7.688.797-10.547 3.656zm14.907-3.984c.281 0 .516.188.516.469l-2.438 12.891v.047c-.188.891-1.031 1.594-1.969 1.594a2.001 2.001 0 0 1-2.016-2.016c0-.328.094-.703.234-.984l5.203-11.625c.074-.221.214-.375.469-.375z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;