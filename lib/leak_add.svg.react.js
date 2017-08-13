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
        "leak_add"
      ),
      _react2.default.createElement("path", { d: "M14.016 21A6.942 6.942 0 0 1 21 14.016v1.969a5.021 5.021 0 0 0-5.016 5.016h-1.969zM18 21c0-1.641 1.359-3 3-3v3h-3zm-8.016 0c0-6.047 4.969-11.016 11.016-11.016V12c-4.969 0-9 4.031-9 9H9.984zm0-18A6.942 6.942 0 0 1 3 9.984V8.015a5.021 5.021 0 0 0 5.016-5.016h1.969zm4.032 0c0 6.047-4.922 11.016-11.016 11.016V12c4.969 0 9-4.031 9-9h2.016zM6 3c0 1.641-1.359 3-3 3V3h3z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;