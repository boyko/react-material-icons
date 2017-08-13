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
        "strikethrough_s"
      ),
      _react2.default.createElement("path", { d: "M9.375 13.125c0 1.787 1.132 2.531 2.906 2.531 1.226 0 2.297-.5 2.297-1.688 0-1.121-.595-1.375-1.406-1.781-.141-.047-.375-.141-.563-.188H3V9.983h18v2.016h-3.891c.047.094.141.234.188.328.188.469.328 1.031.328 1.641 0 2.168-1.415 3.257-3.141 3.75a7.726 7.726 0 0 1-2.156.281 7.61 7.61 0 0 1-1.453-.141c-1.027-.205-1.903-.49-2.625-1.031-1.07-.803-1.828-1.871-1.828-3.703h2.953zM14.578 7.5c0-1.443-.919-2.109-2.391-2.109-1.058 0-1.858.34-2.203 1.031a1.495 1.495 0 0 0-.141.656c0 .469.281.891.75 1.219.375.234.75.469 1.406.703H7.405c-.047-.094-.141-.141-.188-.234-.281-.469-.375-1.031-.375-1.688 0-1.347.7-2.313 1.5-2.953C9.305 3.451 10.583 3 12.233 3c1.644 0 3.006.47 3.891 1.266.823.741 1.453 1.779 1.453 3.234h-3z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;