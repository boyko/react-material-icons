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
        "person_pin_circle"
      ),
      _react2.default.createElement("path", { d: "M12 14.016a4.686 4.686 0 0 0 3.984-2.156c0-1.313-2.672-2.063-3.984-2.063s-3.984.75-3.984 2.063A4.686 4.686 0 0 0 12 14.016zm0-10.032c-1.078 0-2.016.938-2.016 2.016 0 1.125.938 2.016 2.016 2.016S14.016 7.125 14.016 6c0-1.078-.938-2.016-2.016-2.016zm0-1.968c3.844 0 6.984 3.141 6.984 6.984 0 5.25-6.984 12.984-6.984 12.984S5.016 14.25 5.016 9c0-3.844 3.141-6.984 6.984-6.984z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;