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
        "hdr_off"
      ),
      _react2.default.createElement("path", { d: "M2.484 2.484C8.832 8.855 15.225 15.18 21.609 21.515l-1.125 1.078-7.594-7.594H9.515v-3.422l-1.5-1.5v4.922h-1.5v-2.484H4.499v2.484h-1.5v-6h1.5v2.016h2.016V8.999h.375L1.406 3.515zm10.5 8.016h-.375l-1.5-1.5h1.875c.797 0 1.5.703 1.5 1.5v1.922l-1.5-1.5V10.5zm4.5 0v.984H19.5V10.5h-2.016zm0 4.5h-.375l-1.125-1.078V9H19.5c.797 0 1.5.703 1.5 1.5v.984c0 .609-.375 1.219-.891 1.406L21 14.999h-1.5l-.891-2.016h-1.125v2.016z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;