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
        "picture_as_pdf"
      ),
      _react2.default.createElement("path", { d: "M14.016 11.484v-3H15v3h-.984zM3.984 6v14.016H18v1.969H3.984a1.981 1.981 0 0 1-1.969-1.969V6h1.969zM9 9.516V8.485h.984v1.031H9zm11.484-1.032v-1.5h-3v6h1.5v-1.969h1.5v-1.5h-1.5V8.484h1.5zm-3.984 3v-3c0-.844-.656-1.5-1.5-1.5h-2.484v6H15c.844 0 1.5-.656 1.5-1.5zm-5.016-1.968V8.485c0-.844-.656-1.5-1.5-1.5H7.5v6H9v-1.969h.984c.844 0 1.5-.656 1.5-1.5zm8.532-7.5c1.078 0 1.969.891 1.969 1.969v12c0 1.078-.891 2.016-1.969 2.016h-12C6.938 18.001 6 17.063 6 15.985v-12c0-1.078.938-1.969 2.016-1.969h12z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;