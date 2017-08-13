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
        "wifi_tethering"
      ),
      _react2.default.createElement("path", { d: "M12 3a9.962 9.962 0 0 1 9.984 9.984c0 3.703-1.969 6.938-4.969 8.672l-1.031-1.734c2.391-1.406 4.031-3.984 4.031-6.938 0-4.406-3.609-7.969-8.016-7.969s-8.016 3.563-8.016 7.969c0 2.953 1.594 5.531 3.984 6.938l-.984 1.734c-3-1.734-4.969-4.969-4.969-8.672A9.962 9.962 0 0 1 11.998 3zm6 9.984a6.047 6.047 0 0 1-3 5.203l-.984-1.734a4.018 4.018 0 0 0 1.969-3.469c0-2.203-1.781-3.984-3.984-3.984s-3.984 1.781-3.984 3.984c0 1.5.797 2.766 1.969 3.469l-.984 1.734c-1.781-1.031-3-3-3-5.203 0-3.328 2.672-6 6-6s6 2.672 6 6zm-6-1.968c1.078 0 2.016.891 2.016 1.969s-.938 2.016-2.016 2.016-2.016-.938-2.016-2.016.938-1.969 2.016-1.969z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;