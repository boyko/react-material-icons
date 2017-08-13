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
        "fiber_pin"
      ),
      _react2.default.createElement("path", { d: "M20.016 15V9H18.75v3.516L16.266 9H15v6h1.266v-3.516L18.797 15h1.219zm-7.5 0V9h-1.5v6h1.5zM9 11.484V10.5C9 9.656 8.344 9 7.5 9H3.984v6h1.5v-2.016H7.5c.844 0 1.5-.656 1.5-1.5zm11.016-7.5c1.125 0 1.969.891 1.969 2.016v12c0 1.125-.844 2.016-1.969 2.016H3.985c-1.125 0-1.969-.891-1.969-2.016V6c0-1.125.844-2.016 1.969-2.016h16.031zM5.484 10.5H7.5v.984H5.484V10.5z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;