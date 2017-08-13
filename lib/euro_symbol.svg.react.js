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
        "euro_symbol"
      ),
      _react2.default.createElement("path", { d: "M15 18.516a6.347 6.347 0 0 0 4.219-1.594L21 18.703C19.406 20.156 17.297 21 15 21a8.999 8.999 0 0 1-8.484-6H3v-2.016h3.047C6 12.656 6 12.328 6 12s0-.656.047-.984H3V9h3.516A9 9 0 0 1 15 3c2.297 0 4.406.844 6 2.297l-1.781 1.781A6.444 6.444 0 0 0 15 5.484c-2.484 0-4.688 1.453-5.766 3.516H15v2.016H8.578c-.047.328-.094.656-.094.984s.047.656.094.984H15V15H9.234c1.078 2.063 3.234 3.516 5.766 3.516z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;