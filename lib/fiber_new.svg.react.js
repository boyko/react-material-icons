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
        "fiber_new"
      ),
      _react2.default.createElement("path", { d: "M20.484 14.016V9h-1.219v4.5H18.14V9.984h-1.266V13.5h-1.125V9h-1.266v5.016c0 .563.469.984 1.031.984h3.984a.96.96 0 0 0 .984-.984zm-6.984-3.75V9H9.516v6H13.5v-1.266h-2.484v-1.078H13.5V11.39h-2.484v-1.125H13.5zM8.484 15V9H7.265v3.516L4.734 9H3.515v6h1.219v-3.516L7.312 15h1.172zM20.016 3.984c1.125 0 1.969.891 1.969 2.016v12c0 1.125-.844 2.016-1.969 2.016H3.985c-1.125 0-1.969-.891-1.969-2.016V6c0-1.125.844-2.016 1.969-2.016h16.031z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;