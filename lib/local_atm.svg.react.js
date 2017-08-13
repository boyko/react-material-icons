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
        "local_atm"
      ),
      _react2.default.createElement("path", { d: "M20.016 18V6H3.985v12h16.031zm0-14.016c1.125 0 1.969.891 1.969 2.016v12c0 1.125-.844 2.016-1.969 2.016H3.985c-1.125 0-1.969-.891-1.969-2.016V6c0-1.125.844-2.016 1.969-2.016h16.031zm-9 13.032v-1.031H9v-1.969h3.984v-1.031h-3A.96.96 0 0 1 9 12.001v-3a.96.96 0 0 1 .984-.984h1.031V6.986h1.969v1.031H15v1.969h-3.984v1.031h3a.96.96 0 0 1 .984.984v3a.96.96 0 0 1-.984.984h-1.031v1.031h-1.969z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;