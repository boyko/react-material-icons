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
        "voicemail"
      ),
      _react2.default.createElement("path", { d: "M18.516 15c1.922 0 3.469-1.594 3.469-3.516s-1.547-3.469-3.469-3.469S15 9.562 15 11.484 16.594 15 18.516 15zM5.484 15C7.406 15 9 13.406 9 11.484S7.406 8.015 5.484 8.015s-3.469 1.547-3.469 3.469S3.562 15 5.484 15zm13.032-9C21.563 6 24 8.438 24 11.484s-2.438 5.531-5.484 5.531H5.485c-3.047 0-5.484-2.484-5.484-5.531S2.439 6 5.485 6s5.531 2.438 5.531 5.484c0 1.313-.469 2.578-1.266 3.516h4.5c-.797-.938-1.266-2.203-1.266-3.516C12.984 8.437 15.468 6 18.515 6z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;