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
        "photo_size_select_large"
      ),
      _react2.default.createElement("path", { d: "M3 18.984h9.984l-3.188-4.266-2.484 3.234-1.828-2.156zM.984 11.016H15V21H3c-1.078 0-2.016-.938-2.016-2.016v-7.969zM5.016 3h1.969v2.016H5.016V3zM9 3h2.016v2.016H9V3zM3 3v2.016H.984C.984 4.032 2.015 3 3 3zm14.016 15.984h1.969V21h-1.969v-2.016zm0-15.984h1.969v2.016h-1.969V3zM.984 6.984H3V9H.984V6.984zM21 3c.984 0 2.016 1.031 2.016 2.016H21V3zm0 3.984h2.016V9H21V6.984zM12.984 3H15v2.016h-2.016V3zm10.032 15.984C23.016 19.968 21.985 21 21 21v-2.016h2.016zM21 11.016h2.016v1.969H21v-1.969zM21 15h2.016v2.016H21V15z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;