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
        "phonelink_lock"
      ),
      _react2.default.createElement("path", { d: "M9.516 11.016v-1.5c0-.797-.703-1.313-1.5-1.313s-1.5.516-1.5 1.313v1.5h3zm1.265 0c.609 0 1.219.563 1.219 1.266v3.516c0 .609-.609 1.219-1.313 1.219H5.203c-.609 0-1.219-.609-1.219-1.313v-3.516c0-.609.609-1.172 1.219-1.172v-1.5c0-1.406 1.406-2.531 2.813-2.531s2.766 1.125 2.766 2.531v1.5zM18.984.984C20.062.984 21 1.922 21 3v18c0 1.078-.938 2.016-2.016 2.016H9c-1.078 0-2.016-.938-2.016-2.016v-3H9v2.016h9.984V3.985H9v2.016H6.984v-3C6.984 1.923 7.922.985 9 .985h9.984z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;