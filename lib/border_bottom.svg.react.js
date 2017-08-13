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
        "border_bottom"
      ),
      _react2.default.createElement("path", { d: "M5.016 15v2.016H3V15h2.016zM3 21v-2.016h18V21H3zm2.016-9.984v1.969H3v-1.969h2.016zM18.984 9V6.984H21V9h-2.016zm0-6H21v2.016h-2.016V3zM5.016 6.984V9H3V6.984h2.016zm13.968 10.032V15H21v2.016h-2.016zm0-4.032v-1.969H21v1.969h-2.016zM17.016 3v2.016H15V3h2.016zm-4.032 0v2.016h-1.969V3h1.969zm4.032 8.016v1.969H15v-1.969h2.016zm-4.032-4.032V9h-1.969V6.984h1.969zM5.016 3v2.016H3V3h2.016zm7.968 8.016v1.969h-1.969v-1.969h1.969zM9 3v2.016H6.984V3H9zm3.984 12v2.016h-1.969V15h1.969zM9 11.016v1.969H6.984v-1.969H9z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;