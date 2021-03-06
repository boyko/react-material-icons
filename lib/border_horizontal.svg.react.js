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
        "border_horizontal"
      ),
      _react2.default.createElement("path", { d: "M18.984 21v-2.016H21V21h-2.016zM15 21v-2.016h2.016V21H15zm-3.984-3.984V15h1.969v2.016h-1.969zM18.984 9V6.984H21V9h-2.016zm0-6H21v2.016h-2.016V3zM3 12.984v-1.969h18v1.969H3zM11.016 21v-2.016h1.969V21h-1.969zm7.968-3.984V15H21v2.016h-2.016zM12.984 3v2.016h-1.969V3h1.969zm0 3.984V9h-1.969V6.984h1.969zM17.016 3v2.016H15V3h2.016zM9 3v2.016H6.984V3H9zM5.016 3v2.016H3V3h2.016zm1.968 18v-2.016H9V21H6.984zM3 17.016V15h2.016v2.016H3zM5.016 6.984V9H3V6.984h2.016zM3 21v-2.016h2.016V21H3z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;