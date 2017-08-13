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
        "filter_2"
      ),
      _react2.default.createElement("path", { d: "M17.016 12.984V15h-6v-3.984c0-1.125.891-2.016 1.969-2.016h2.016V6.984h-3.984V5.015h3.984c1.078 0 2.016.844 2.016 1.969V9c0 1.125-.938 2.016-2.016 2.016h-2.016v1.969h4.031zM21 17.016V3H6.984v14.016H21zM21 .984c1.078 0 2.016.938 2.016 2.016v14.016c0 1.078-.938 1.969-2.016 1.969H6.984a1.981 1.981 0 0 1-1.969-1.969V3c0-1.078.891-2.016 1.969-2.016H21zM3 5.016V21h15.984v2.016H3C1.922 23.016.984 22.078.984 21V5.016H3z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;