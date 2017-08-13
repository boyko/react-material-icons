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
        "loyalty"
      ),
      _react2.default.createElement("path", { d: "M17.25 15.281c.469-.469.75-1.078.75-1.781a2.5 2.5 0 0 0-2.484-2.484c-.703 0-1.313.234-1.781.703l-.75.75-.703-.75c-.469-.469-1.078-.703-1.781-.703A2.5 2.5 0 0 0 8.017 13.5c0 .703.234 1.313.703 1.781l4.266 4.266zM5.484 6.984c.844 0 1.5-.656 1.5-1.5s-.656-1.5-1.5-1.5-1.5.656-1.5 1.5.656 1.5 1.5 1.5zm15.938 4.594c.375.375.563.844.563 1.406s-.188 1.031-.563 1.406l-7.031 7.031c-.375.375-.844.563-1.406.563s-1.031-.188-1.406-.563l-9-9c-.375-.375-.563-.844-.563-1.406V3.984c0-1.078.891-1.969 1.969-1.969h7.031c.563 0 1.031.188 1.406.563z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;