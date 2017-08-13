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
        "view_comfy"
      ),
      _react2.default.createElement("path", { d: "M18 5.016h3.984V9H18V5.016zm0 13.968V15h3.984v3.984H18zm-5.016 0V15h4.031v3.984h-4.031zm-4.968 0V15H12v3.984H8.016zm-5.016 0V15h3.984v3.984H3zm15-4.968V9.985h3.984v4.031H18zm-5.016-9h4.031V9h-4.031V5.016zM8.016 9V5.016H12V9H8.016zm4.968 5.016V9.985h4.031v4.031h-4.031zm-4.968 0V9.985H12v4.031H8.016zm-5.016 0V9.985h3.984v4.031H3zM3 9V5.016h3.984V9H3z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;