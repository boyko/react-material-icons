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
        "network_locked"
      ),
      _react2.default.createElement("path", { d: "M21 15.984v-1.5c0-.844-.656-1.5-1.5-1.5s-1.5.656-1.5 1.5v1.5h3zm.984 0a1.04 1.04 0 0 1 1.031 1.031v3.984c0 .563-.469.984-1.031.984h-4.969c-.563 0-1.031-.422-1.031-.984v-3.984a1.04 1.04 0 0 1 1.031-1.031v-1.5c0-1.359 1.125-2.484 2.484-2.484s2.484 1.125 2.484 2.484v1.5zm-2.484-6a4.502 4.502 0 0 0-4.5 4.5v.281a3.044 3.044 0 0 0-.984 2.25v3H.985L20.016.984v9.047c-.188 0-.328-.047-.516-.047z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;