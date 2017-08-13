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
        "signal_wifi_4_bar_lock"
      ),
      _react2.default.createElement("path", { d: "M15.516 14.484v2.625L12 21.515.422 6.984C.844 6.703 5.297 3 12 3s11.156 3.703 11.578 3.984l-2.063 2.625c-.281-.094-.609-.094-1.031-.094-2.813 0-4.969 2.156-4.969 4.969zm6.468 1.5v-1.5c0-.797-.703-1.5-1.5-1.5s-1.5.703-1.5 1.5v1.5h3zm1.032 0c.516 0 .984.516.984 1.031v3.984c0 .516-.469.984-.984.984H18c-.516 0-.984-.469-.984-.984v-3.984c0-.516.469-1.031.984-1.031v-1.5C18 13.078 19.078 12 20.484 12s2.531 1.078 2.531 2.484v1.5z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;