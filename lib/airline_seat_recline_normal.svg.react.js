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
        "airline_seat_recline_normal"
      ),
      _react2.default.createElement("path", { d: "M20.016 20.063l-1.453 1.453L15.047 18H9.984a3.02 3.02 0 0 1-3-3V9.234c0-1.219 1.031-2.25 2.25-2.25h.047c.695 0 1.284.394 1.641.75l1.406 1.547c1.078 1.172 3.047 2.016 4.688 2.016V13.5c-1.922 0-4.125-1.031-5.531-2.203V15h3.469zM6 15.984c0 1.641 1.359 3 3 3h6V21H9a5.021 5.021 0 0 1-5.016-5.016v-9H6v9zM7.594 5.391c-.797-.797-.797-2.016 0-2.813s2.016-.797 2.813 0 .797 2.016 0 2.813-2.016.797-2.813 0z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;