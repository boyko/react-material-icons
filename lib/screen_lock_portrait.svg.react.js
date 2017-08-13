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
        "screen_lock_portrait"
      ),
      _react2.default.createElement("path", { d: "M17.016 18.984V5.015H6.985v13.969h10.031zm0-18c1.078 0 1.969.938 1.969 2.016v18c0 1.078-.891 2.016-1.969 2.016H6.985c-1.078 0-1.969-.938-1.969-2.016V3c0-1.078.891-2.016 1.969-2.016h10.031zm-6.235 9v1.031h2.438V9.984c0-.656-.563-1.172-1.219-1.172s-1.219.516-1.219 1.172zm-.797 6A.96.96 0 0 1 9 15v-3a.96.96 0 0 1 .984-.984V9.985c0-1.078.891-1.969 2.016-1.969 1.078 0 2.016.844 2.016 1.969v1.031A.96.96 0 0 1 15 12v3a.96.96 0 0 1-.984.984H9.985z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;