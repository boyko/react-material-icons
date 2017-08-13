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
        "cast_connected"
      ),
      _react2.default.createElement("path", { d: "M21 3c1.078 0 2.016.938 2.016 2.016v13.969c0 1.078-.938 2.016-2.016 2.016h-6.984v-2.016H21V5.016H3v3H.984v-3C.984 3.938 1.922 3 3 3h18zM.984 9.984C7.031 9.984 12 14.906 12 21H9.984c0-4.969-4.031-9-9-9V9.984zm18-3v10.031h-5.625c-1.266-3.938-4.406-7.125-8.344-8.391V6.983h13.969zm-18 7.032c3.891 0 7.031 3.094 7.031 6.984H5.999a5.021 5.021 0 0 0-5.016-5.016v-1.969zm0 3.984c1.641 0 3 1.359 3 3h-3v-3z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;