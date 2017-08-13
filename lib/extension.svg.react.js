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
        "extension"
      ),
      _react2.default.createElement("path", { d: "M20.484 11.016c1.359 0 2.531 1.125 2.531 2.484s-1.172 2.484-2.531 2.484h-1.5v4.031a1.981 1.981 0 0 1-1.969 1.969h-3.797v-1.5c0-1.5-1.219-2.672-2.719-2.672S7.78 18.984 7.78 20.484v1.5H3.983a1.981 1.981 0 0 1-1.969-1.969v-3.797h1.5c1.5 0 2.672-1.219 2.672-2.719S5.014 10.78 3.514 10.78h-1.5V6.983c0-1.078.891-1.969 1.969-1.969h4.031v-1.5c0-1.359 1.125-2.531 2.484-2.531s2.484 1.172 2.484 2.531v1.5h4.031c1.078 0 1.969.891 1.969 1.969v4.031h1.5z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;