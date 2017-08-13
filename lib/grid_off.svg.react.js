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
        "grid_off"
      ),
      _react2.default.createElement("path", { d: "M15.984 20.016h1.453l-1.453-1.453v1.453zm-1.968 0v-3.469l-.563-.563H9.984v4.031h4.031zm-6-6v-3.469l-.563-.563H3.984v4.031h4.031zm0 6v-4.031H3.985v4.031h4.031zM3.984 6.563v1.453h1.453zm6 6v1.453h1.453zM1.266 1.266l21.469 21.469-1.266 1.266-2.016-2.016H3.984a1.981 1.981 0 0 1-1.969-1.969V4.547L-.001 2.531zm14.718 2.718v4.031h4.031V3.984h-4.031zm-7.968 0H6.563L4.547 2.015h15.469c1.078 0 1.969.891 1.969 1.969v15.469l-1.969-2.016v-1.453h-1.453l-2.016-1.969h3.469V9.984h-4.031v3.469l-1.969-2.016V9.984h-1.453l-2.016-1.969h3.469V3.984H9.985v3.469L8.016 5.437V3.984z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;