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
        "smoke_free"
      ),
      _react2.default.createElement("path", { d: "M17.016 15.938l-2.953-2.953h2.953v2.953zm-2.532-7.219c-1.828 0-3.328-1.547-3.328-3.375s1.5-3.328 3.328-3.328v1.5c-1.031 0-1.828.703-1.828 1.734s.797 2.016 1.828 2.016h1.547c1.875 0 3.469 1.359 3.469 3.141v1.594H18v-1.266c0-1.313-.938-2.016-1.969-2.016h-1.547zm4.36-3.844c1.875.891 3.141 2.813 3.141 5.063v2.063h-1.5V9.938c0-2.25-1.734-4.078-3.984-4.078v-1.5c1.031 0 1.828-.844 1.828-1.875h1.5c0 .938-.375 1.781-.984 2.391zM18 12.984h1.5v3H18v-3zm2.484 0h1.5v3h-1.5v-3zM2.016 6l1.219-1.266L20.251 21.75l-1.266 1.266-6.984-7.031H2.017v-3h6.984z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;