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
        "rowing"
      ),
      _react2.default.createElement("path", { d: "M21 21l-3 3-3-3v-1.5l-7.078-7.078c-.328.047-.656.047-.938.047v-2.156c1.641.047 3.609-.844 4.688-2.016l1.406-1.547c.357-.357.945-.75 1.641-.75h.047c1.219 0 2.25 1.031 2.25 2.25v5.766c0 .844-.375 1.594-.938 2.156l-3.563-3.563v-2.297c-.609.516-1.453 1.031-2.297 1.406l6.281 6.281h1.5zM15 .984c1.078 0 2.016.938 2.016 2.016S16.078 5.016 15 5.016 12.984 4.078 12.984 3 13.922.984 15 .984zm-6.516 13.5l2.531 2.531H8.999l-3.516 3.469-1.5-1.5z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;