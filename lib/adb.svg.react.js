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
        "adb"
      ),
      _react2.default.createElement("path", { d: "M15 9c.563 0 .984-.422.984-.984S15.562 6.985 15 6.985s-.984.469-.984 1.031S14.438 9 15 9zM9 9c.563 0 .984-.422.984-.984S9.562 6.985 9 6.985s-.984.469-.984 1.031S8.438 9 9 9zm7.125-4.641a6.97 6.97 0 0 1 2.859 5.625v1.031H5.015V9.984a6.97 6.97 0 0 1 2.859-5.625L5.765 2.25l.844-.797L8.906 3.75C9.844 3.281 10.875 3 12 3s2.156.281 3.094.75l2.297-2.297.844.797zM5.016 15.984V12h13.969v3.984c0 3.891-3.094 7.031-6.984 7.031s-6.984-3.141-6.984-7.031z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;