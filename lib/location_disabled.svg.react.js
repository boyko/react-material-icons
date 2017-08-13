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
        "location_disabled"
      ),
      _react2.default.createElement("path", { d: "M16.266 17.531L6.469 7.734A7.093 7.093 0 0 0 5.016 12 6.942 6.942 0 0 0 12 18.984a7.1 7.1 0 0 0 4.266-1.453zM3 4.266L4.266 3 21 19.734 19.734 21l-2.063-2.063c-1.313 1.078-2.906 1.828-4.688 2.016v2.063h-1.969v-2.063c-4.172-.469-7.5-3.797-7.969-7.969H.982v-1.969h2.063c.188-1.781.938-3.375 2.016-4.688zm17.953 6.75h2.063v1.969h-2.063c-.141 1.125-.469 2.25-.984 3.188l-1.5-1.5a7.14 7.14 0 0 0 .516-2.672 6.942 6.942 0 0 0-6.984-6.984 7.14 7.14 0 0 0-2.672.516l-1.5-1.5a9.331 9.331 0 0 1 3.188-.984V.986h1.969v2.063c4.172.469 7.5 3.797 7.969 7.969z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;