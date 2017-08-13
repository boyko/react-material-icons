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
        "usb"
      ),
      _react2.default.createElement("path", { d: "M15 6.984h3.984v4.031H18v1.969A2.001 2.001 0 0 1 15.984 15h-3v3.047c.703.375 1.219 1.125 1.219 1.969 0 1.219-.984 2.203-2.203 2.203s-2.203-.984-2.203-2.203c0-.844.516-1.594 1.219-1.969V15h-3A2.001 2.001 0 0 1 6 12.984v-2.063c-.703-.375-1.219-1.078-1.219-1.922 0-1.219.984-2.203 2.203-2.203s2.203.984 2.203 2.203c0 .844-.469 1.547-1.172 1.922v2.063h3V5.015H8.999l3-4.031 3 4.031h-2.016v7.969h3v-1.969h-.984V6.984z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;