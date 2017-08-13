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
        "router"
      ),
      _react2.default.createElement("path", { d: "M15 18v-2.016h-2.016V18H15zm-3.516 0v-2.016H9.515V18h1.969zm-3.468 0v-2.016H6V18h2.016zm10.968-5.016c1.078 0 2.016.938 2.016 2.016v3.984C21 20.062 20.062 21 18.984 21H5.015c-1.078 0-2.016-.938-2.016-2.016V15c0-1.078.938-2.016 2.016-2.016h9.984V9h2.016v3.984h1.969zm.329-6.281l-.797.797c-.703-.703-1.641-.984-2.531-.984s-1.781.281-2.484.984l-.797-.797c.891-.891 2.063-1.406 3.281-1.406s2.438.516 3.328 1.406zm.89-.797c-1.219-1.078-2.719-1.688-4.219-1.688s-2.953.609-4.172 1.688l-.797-.797C12.421 3.703 14.203 3 15.984 3s3.609.703 5.016 2.109z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;