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
        "developer_mode"
      ),
      _react2.default.createElement("path", { d: "M17.016 18.984v-1.969h1.969v3.984c0 1.078-.891 2.016-1.969 2.016H6.985c-1.078 0-1.969-.938-1.969-2.016v-3.984h1.969v1.969h10.031zm-7.032-3.796l-1.406 1.406L3.984 12l4.594-4.594 1.406 1.406L6.843 12zm5.438 1.406l-1.406-1.406L17.157 12l-3.141-3.188 1.406-1.406L20.016 12zM6.984 5.016v1.969H5.015V3.001c0-1.078.891-2.016 1.969-2.016l10.031.047c1.078 0 1.969.891 1.969 1.969v3.984h-1.969V5.016H6.984z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;