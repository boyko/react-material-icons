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
        "touch_app"
      ),
      _react2.default.createElement("path", { d: "M18.844 15.891a1.5 1.5 0 0 1 .891 1.359v.188l-.75 5.297c-.094.75-.703 1.266-1.453 1.266h-6.797c-.422 0-.75-.141-1.031-.422L4.735 18.61l.797-.797a1.13 1.13 0 0 1 .797-.328c.094 0 .141.047.234.047l3.422.703V7.501c0-.844.656-1.5 1.5-1.5s1.5.656 1.5 1.5v6h.797c.188 0 .328.047.516.094zM9 11.25A4.496 4.496 0 0 1 6.984 7.5C6.984 5.016 9 3 11.484 3s4.5 2.016 4.5 4.5c0 1.547-.75 2.953-1.969 3.75V7.5c0-1.359-1.172-2.484-2.531-2.484S9 6.141 9 7.5v3.75z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;