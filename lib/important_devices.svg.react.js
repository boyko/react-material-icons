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
        "important_devices"
      ),
      _react2.default.createElement("path", { d: "M11.953 9H15l-2.484 1.781.938 2.906-2.438-1.828-2.484 1.828.938-2.906L6.986 9h3.047l.984-3zm8.063-6.984c1.078 0 1.969.844 1.969 1.969v5.016h-1.969V3.985h-18v12H15v2.016h-2.016v2.016H15v1.969H6.984v-1.969H9v-2.016H2.016C.891 18.001 0 17.063 0 15.985v-12C0 2.86.891 2.016 2.016 2.016h18zm3 18v-7.031H18v7.031h5.016zm0-9A.96.96 0 0 1 24 12v9a.96.96 0 0 1-.984.984H18a.96.96 0 0 1-.984-.984v-9a.96.96 0 0 1 .984-.984h5.016z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;