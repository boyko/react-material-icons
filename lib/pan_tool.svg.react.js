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
        "pan_tool"
      ),
      _react2.default.createElement("path", { d: "M23.016 5.484v14.531c0 2.203-1.828 3.984-4.031 3.984h-7.266a4.042 4.042 0 0 1-2.859-1.172L.985 14.811s1.266-1.219 1.313-1.219a1.27 1.27 0 0 1 .797-.281c.234 0 .422.047.609.141.047 0 4.313 2.438 4.313 2.438V3.984c0-.844.656-1.5 1.5-1.5s1.5.656 1.5 1.5v7.031h.984V1.499c0-.844.656-1.5 1.5-1.5s1.5.656 1.5 1.5v9.516h.984V2.484c0-.844.656-1.5 1.5-1.5s1.5.656 1.5 1.5v8.531h1.031V5.484c0-.844.656-1.5 1.5-1.5s1.5.656 1.5 1.5z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;