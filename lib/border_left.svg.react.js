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
        "border_left"
      ),
      _react2.default.createElement("path", { d: "M15 5.016V3h2.016v2.016H15zm0 7.968v-1.969h2.016v1.969H15zM18.984 21v-2.016H21V21h-2.016zm0-8.016v-1.969H21v1.969h-2.016zm0-9.984H21v2.016h-2.016V3zm0 14.016V15H21v2.016h-2.016zM15 21v-2.016h2.016V21H15zm3.984-12V6.984H21V9h-2.016zM3 21V3h2.016v18H3zm3.984-8.016v-1.969H9v1.969H6.984zm0-7.968V3H9v2.016H6.984zm0 15.984v-2.016H9V21H6.984zm4.032-8.016v-1.969h1.969v1.969h-1.969zm0-3.984V6.984h1.969V9h-1.969zm0-3.984V3h1.969v2.016h-1.969zm0 12V15h1.969v2.016h-1.969zm0 3.984v-2.016h1.969V21h-1.969z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;