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
        "rotate_90_degrees_ccw"
      ),
      _react2.default.createElement("path", { d: "M19.359 6.656a8.968 8.968 0 0 1 0 12.703c-1.734 1.781-4.078 2.625-6.375 2.625-1.5 0-2.953-.375-4.313-1.125l1.5-1.453c.891.422 1.828.609 2.813.609a7.07 7.07 0 0 0 4.969-2.063c2.719-2.719 2.719-7.172 0-9.891a7.073 7.073 0 0 0-4.969-2.063v3.234L8.765 5.013 12.984.747v3.234c2.297 0 4.641.891 6.375 2.672zM3.703 12.891l3.656 3.656 3.656-3.656-3.656-3.656zm3.656-6.469l6.469 6.469-6.469 6.469-6.516-6.469z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;