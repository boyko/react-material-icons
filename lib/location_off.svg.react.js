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
        "location_off"
      ),
      _react2.default.createElement("path", { d: "M11.719 11.484c2.774 2.742 5.545 5.487 8.297 8.25L18.75 21l-3.375-3.328C13.687 20.156 12 21.985 12 21.985S5.016 14.251 5.016 9.001c0-.516.094-1.031.188-1.547L2.016 4.266 3.282 3l8.344 8.344zM12 6.516c-.75 0-1.359.328-1.828.844L6.938 4.172a7.08 7.08 0 0 1 5.063-2.156A6.942 6.942 0 0 1 18.985 9c0 1.688-.703 3.609-1.688 5.484l-3.609-3.656c.516-.469.797-1.078.797-1.828a2.5 2.5 0 0 0-2.484-2.484z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;