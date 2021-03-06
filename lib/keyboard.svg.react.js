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
        "keyboard"
      ),
      _react2.default.createElement("path", { d: "M18.984 9.984V8.015h-1.969v1.969h1.969zm0 3v-1.969h-1.969v1.969h1.969zm-3-3V8.015h-1.969v1.969h1.969zm0 3v-1.969h-1.969v1.969h1.969zm0 4.032V15H8.015v2.016h7.969zm-9-7.032V8.015H5.015v1.969h1.969zm0 3v-1.969H5.015v1.969h1.969zm1.032-1.968v1.969h1.969v-1.969H8.016zm0-3v1.969h1.969V8.016H8.016zm3 3v1.969h1.969v-1.969h-1.969zm0-3v1.969h1.969V8.016h-1.969zm9-3c1.078 0 1.969.891 1.969 1.969v10.031a1.981 1.981 0 0 1-1.969 1.969H3.985a1.981 1.981 0 0 1-1.969-1.969V6.985c0-1.078.891-1.969 1.969-1.969h16.031z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;