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
        "stop_screen_share"
      ),
      _react2.default.createElement("path", { d: "M6.984 15c.938-1.313 2.109-2.063 3.656-2.438l-1.594-1.594c-1.172 1.125-1.734 2.531-2.063 4.031zM2.391 1.734l19.734 19.734-1.266 1.266-2.719-2.719H-.001v-2.016h3.984a1.951 1.951 0 0 1-1.969-1.969V5.999c0-.609.234-1.078.656-1.453L1.123 2.999zm19.593 14.297c0 .75-.422 1.406-1.031 1.734l-5.531-5.531 1.594-1.5-4.031-3.703V9.14c-.188.047-.328.047-.516.094l-5.25-5.203h12.797c1.078 0 1.969.844 1.969 1.969v10.031zM21.234 18H24v2.016h-.797z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;