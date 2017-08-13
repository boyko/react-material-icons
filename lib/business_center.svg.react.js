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
        "business_center"
      ),
      _react2.default.createElement("path", { d: "M14.016 6.984V5.015H9.985v1.969h4.031zm6 0c1.078 0 1.969.938 1.969 2.016v3c0 1.078-.891 2.016-1.969 2.016h-6V12H9.985v2.016h-6c-1.125 0-1.969-.891-1.969-2.016V9c0-1.078.891-2.016 1.969-2.016h3.984V5.015l2.016-2.016h3.984l2.016 2.016v1.969h4.031zm-10.032 9h4.031V15h6.984v3.984A2.001 2.001 0 0 1 18.983 21H5.014a2.001 2.001 0 0 1-2.016-2.016V15h6.984v.984z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;