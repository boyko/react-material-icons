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
        "ac_unit"
      ),
      _react2.default.createElement("path", { d: "M21.984 11.016v1.969h-4.172l3.234 3.234-1.406 1.453-4.641-4.688h-2.016V15l4.688 4.641-1.453 1.406-3.234-3.234v4.172h-1.969v-4.172l-3.234 3.234-1.453-1.406L11.016 15v-2.016H9l-4.641 4.688-1.406-1.453 3.234-3.234H2.015v-1.969h4.172L2.953 7.782l1.406-1.453L9 11.017h2.016V9.001L6.328 4.36l1.453-1.406 3.234 3.234V2.016h1.969v4.172l3.234-3.234 1.453 1.406-4.688 4.641v2.016h2.016l4.641-4.688 1.406 1.453-3.234 3.234h4.172z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;