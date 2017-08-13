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
        "developer_board"
      ),
      _react2.default.createElement("path", { d: "M12 11.016h3.984v6H12v-6zM6 6.984h5.016V12H6V6.984zm6 0h3.984v3H12v-3zm-6 6h5.016v4.031H6v-4.031zm12 6V5.015H3.984v13.969H18zM21.984 9h-1.969v2.016h1.969v1.969h-1.969v2.016h1.969v2.016h-1.969v1.969c0 1.078-.938 2.016-2.016 2.016H3.983c-1.078 0-1.969-.938-1.969-2.016V5.017c0-1.078.891-2.016 1.969-2.016h14.016c1.078 0 2.016.938 2.016 2.016v1.969h1.969v2.016z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;