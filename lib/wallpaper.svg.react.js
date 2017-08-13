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
        "wallpaper"
      ),
      _react2.default.createElement("path", { d: "M3.984 12.984v7.031h7.031v1.969H3.984a1.981 1.981 0 0 1-1.969-1.969v-7.031h1.969zm16.032 7.032v-7.031h1.969v7.031a1.981 1.981 0 0 1-1.969 1.969h-7.031v-1.969h7.031zm0-18c1.078 0 1.969.891 1.969 1.969v7.031h-1.969V3.985h-7.031V2.016h7.031zm-3 6.468c0 .844-.656 1.5-1.5 1.5s-1.5-.656-1.5-1.5.656-1.5 1.5-1.5 1.5.656 1.5 1.5zm-7.032 4.5l3 3.703L15 14.015l3 3.984H6zm-6-9v7.031H2.015V3.984c0-1.078.891-1.969 1.969-1.969h7.031v1.969H3.984z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;