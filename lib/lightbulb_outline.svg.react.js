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
        "lightbulb_outline"
      ),
      _react2.default.createElement("path", { d: "M14.859 13.078A4.924 4.924 0 0 0 17.015 9c0-2.766-2.25-5.016-5.016-5.016S6.983 6.234 6.983 9c0 1.641.797 3.141 2.156 4.078l.844.609v2.297h4.031v-2.297zM12 2.016c3.844 0 6.984 3.141 6.984 6.984 0 2.391-1.172 4.453-3 5.719v2.297A.96.96 0 0 1 15 18H9a.96.96 0 0 1-.984-.984v-2.297c-1.828-1.266-3-3.328-3-5.719 0-3.844 3.141-6.984 6.984-6.984zM9 21v-.984h6V21a.96.96 0 0 1-.984.984H9.985A.96.96 0 0 1 9.001 21z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;