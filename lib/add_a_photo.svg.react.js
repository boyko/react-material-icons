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
        "add_a_photo"
      ),
      _react2.default.createElement("path", { d: "M9.797 14.016c0-1.781 1.406-3.234 3.188-3.234s3.234 1.453 3.234 3.234-1.453 3.188-3.234 3.188-3.188-1.406-3.188-3.188zm3.187 4.968c2.766 0 5.016-2.203 5.016-4.969s-2.25-5.016-5.016-5.016-4.969 2.25-4.969 5.016 2.203 4.969 4.969 4.969zM6 9.984v-3h3v-3h6.984L17.812 6H21c1.078 0 2.016.938 2.016 2.016v12c0 1.078-.938 1.969-2.016 1.969H5.016C3.938 21.985 3 21.094 3 20.016V9.985h3zm-3-6v-3h2.016v3h3V6h-3v3H3V6H0V3.984h3z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;