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
        "vpn_lock"
      ),
      _react2.default.createElement("path", { d: "M9.984 20.953v-1.969a1.981 1.981 0 0 1-1.969-1.969v-1.031l-4.828-4.781c-.141.563-.188 1.172-.188 1.781 0 4.078 3.047 7.5 6.984 7.969zM18.938 12h2.016c.047.328.047.656.047.984 0 5.531-4.453 10.031-9.984 10.031S.986 18.515.986 12.984 5.486 3 11.017 3c1.031 0 2.063.188 3 .469V6c0 1.078-.938 2.016-2.016 2.016H9.985v1.969c0 .563-.422 1.031-.984 1.031H6.985v1.969h6a1.04 1.04 0 0 1 1.031 1.031v3H15a2.03 2.03 0 0 1 1.922 1.359c1.313-1.406 2.063-3.328 2.063-5.391 0-.328 0-.656-.047-.984zm2.25-8.016v-.469c0-.938-.75-1.734-1.688-1.734s-1.688.797-1.688 1.734v.469h3.375zm.796 0a1.04 1.04 0 0 1 1.031 1.031v3.984c0 .563-.469.984-1.031.984h-4.969c-.563 0-1.031-.422-1.031-.984V5.015a1.04 1.04 0 0 1 1.031-1.031v-.469c0-1.359 1.125-2.531 2.484-2.531s2.484 1.172 2.484 2.531v.469z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;