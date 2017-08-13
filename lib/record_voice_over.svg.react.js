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
        "record_voice_over"
      ),
      _react2.default.createElement("path", { d: "M20.063 2.016c3.891 4.031 3.891 10.078 0 13.969l-1.641-1.594c2.766-3.188 2.766-7.781 0-10.781zm-3.282 3.328c2.016 2.203 2.016 5.25 0 7.266l-1.688-1.688a3.306 3.306 0 0 0 0-3.891zM9 15c2.672 0 8.016 1.313 8.016 3.984V21H.985v-2.016C.985 16.312 6.329 15 9.001 15zM5.016 9c0-2.203 1.781-3.984 3.984-3.984S12.984 6.797 12.984 9 11.203 12.984 9 12.984 5.016 11.203 5.016 9z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;