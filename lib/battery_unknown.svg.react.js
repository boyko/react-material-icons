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
        "battery_unknown"
      ),
      _react2.default.createElement("path", { d: "M14.297 12.703A2.411 2.411 0 0 0 15 11.015c0-1.641-1.359-3-3-3s-3 1.359-3 3h1.5c0-.844.656-1.5 1.5-1.5s1.5.656 1.5 1.5c0 .422-.141.75-.422 1.031l-.938.938c-.469.469-.938 1.172-.938 2.016h1.594c0-.469.375-1.125.844-1.594.281-.281.656-.703.656-.703zm-1.359 5.25v-1.922h-1.875v1.922h1.875zm2.718-13.969c.75 0 1.359.609 1.359 1.359v15.328c0 .75-.609 1.313-1.359 1.313H8.343c-.75 0-1.359-.563-1.359-1.313V5.343c0-.75.609-1.359 1.359-1.359h1.641V2.015h4.031v1.969h1.641z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;