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
        "link"
      ),
      _react2.default.createElement("path", { d: "M17.016 6.984c2.766 0 4.969 2.25 4.969 5.016s-2.203 5.016-4.969 5.016h-4.031v-1.922h4.031c1.688 0 3.094-1.406 3.094-3.094s-1.406-3.094-3.094-3.094h-4.031V6.984h4.031zm-9 6v-1.969h7.969v1.969H8.016zM3.891 12c0 1.688 1.406 3.094 3.094 3.094h4.031v1.922H6.985c-2.766 0-4.969-2.25-4.969-5.016s2.203-5.016 4.969-5.016h4.031v1.922H6.985c-1.688 0-3.094 1.406-3.094 3.094z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;