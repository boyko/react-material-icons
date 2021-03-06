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
        "wc"
      ),
      _react2.default.createElement("path", { d: "M16.5 6c-1.125 0-2.016-.891-2.016-2.016s.891-1.969 2.016-1.969 2.016.844 2.016 1.969S17.625 6 16.5 6zm-9 0c-1.125 0-2.016-.891-2.016-2.016S6.375 2.015 7.5 2.015s2.016.844 2.016 1.969S8.625 6 7.5 6zM18 21.984h-3v-6h-3l2.531-7.594c.281-.797 1.078-1.406 1.922-1.406h.094c.844 0 1.641.609 1.922 1.406L21 15.984h-3v6zm-12.516 0v-7.5h-1.5V9c0-1.078.938-2.016 2.016-2.016h3c1.078 0 2.016.938 2.016 2.016v5.484h-1.5v7.5H5.485z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;