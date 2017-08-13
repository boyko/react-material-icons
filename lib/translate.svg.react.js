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
        "translate"
      ),
      _react2.default.createElement("path", { d: "M15.891 17.016h3.234l-1.641-4.359zm2.625-7.032l4.5 12H21l-1.125-3h-4.734l-1.125 3H12l4.5-12h2.016zm-5.625 5.063l-.797 2.063L9 14.016l-5.016 4.969-1.406-1.406 5.109-5.016a17.762 17.762 0 0 1-3-4.547h2.016A15.598 15.598 0 0 0 9 11.344 15.312 15.312 0 0 0 12.188 6H.985V3.984h7.031V2.015h1.969v1.969h7.031V6h-2.953c-.75 2.344-1.969 4.594-3.703 6.516l-.047.047z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;