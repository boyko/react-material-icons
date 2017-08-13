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
        "settings_power"
      ),
      _react2.default.createElement("path", { d: "M15 24v-2.016h2.016V24H15zm1.547-19.547c2.063 1.453 3.469 3.844 3.469 6.563 0 4.406-3.609 7.969-8.016 7.969s-8.016-3.563-8.016-7.969c0-2.719 1.406-5.109 3.469-6.563l1.406 1.406A6.063 6.063 0 0 0 6 11.015c0 3.328 2.672 6 6 6s6-2.672 6-6a5.966 5.966 0 0 0-2.906-5.109zm-3.563-2.437V12h-1.969V2.016h1.969zM11.016 24v-2.016h1.969V24h-1.969zm-4.032 0v-2.016H9V24H6.984z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;