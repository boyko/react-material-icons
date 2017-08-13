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
        "flip"
      ),
      _react2.default.createElement("path", { d: "M18.984 21v-2.016H21C21 20.062 20.062 21 18.984 21zm0-8.016v-1.969H21v1.969h-2.016zM15 5.016V3h2.016v2.016H15zm3.984 12V15H21v2.016h-2.016zm-7.968 6V.985h1.969v22.031h-1.969zM18.984 3C20.062 3 21 3.938 21 5.016h-2.016V3zM3 5.016C3 3.938 3.938 3 5.016 3H9v2.016H5.016v13.969H9v2.016H5.016C3.938 21.001 3 20.063 3 18.985V5.016zM18.984 9V6.984H21V9h-2.016zM15 21v-2.016h2.016V21H15z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;