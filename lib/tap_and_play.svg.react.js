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
        "tap_and_play"
      ),
      _react2.default.createElement("path", { d: "M17.016 1.031c1.078 0 1.969.891 1.969 1.969v17.016a1.981 1.981 0 0 1-1.969 1.969h-2.109a12.685 12.685 0 0 0-.938-3.984h3.047V5.017H6.985v6c-.656-.281-1.266-.516-1.969-.656V3.002c0-1.078.891-2.016 1.969-2.016zM2.016 12c6.094 0 10.969 4.922 10.969 11.016h-1.969c0-4.969-4.031-9-9-9V12zm0 8.016c1.641 0 3 1.359 3 3h-3v-3zm0-4.032C5.907 15.984 9 19.125 9 23.015H6.984c0-2.766-2.203-5.016-4.969-5.016v-2.016z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;