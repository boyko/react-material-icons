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
        "format_shapes"
      ),
      _react2.default.createElement("path", { d: "M10.688 12.75h2.625L12 8.906zm3.046 1.266h-3.516l-.703 1.969H7.874l3.422-9h1.406l3.375 9h-1.594zm5.25-9H21V3h-2.016v2.016zM21 21v-2.016h-2.016V21H21zm-3.984-2.016v-1.969h1.969V6.984h-1.969V5.015H6.985v1.969H5.016v10.031h1.969v1.969h10.031zM5.016 21v-2.016H3V21h2.016zM3 3v2.016h2.016V3H3zm20.016 3.984H21v10.031h2.016v6h-6v-2.016H6.985v2.016h-6v-6h2.016V6.984H.985v-6h6V3h10.031V.984h6v6z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;