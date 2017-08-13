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
        "domain"
      ),
      _react2.default.createElement("path", { d: "M18 15v2.016h-2.016V15H18zm0-3.984v1.969h-2.016v-1.969H18zm2.016 7.968V9H12v2.016h2.016v1.969H12v2.016h2.016v2.016H12v1.969h8.016zm-10.032-12V5.015H8.015v1.969h1.969zm0 4.032V9H8.015v2.016h1.969zm0 3.984v-2.016H8.015V15h1.969zm0 3.984v-1.969H8.015v1.969h1.969zM6 6.984V5.015H3.984v1.969H6zm0 4.032V9H3.984v2.016H6zM6 15v-2.016H3.984V15H6zm0 3.984v-1.969H3.984v1.969H6zm6-12h9.984V21H2.015V3h9.984v3.984z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;