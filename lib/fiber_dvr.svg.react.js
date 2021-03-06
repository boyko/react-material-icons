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
        "fiber_dvr"
      ),
      _react2.default.createElement("path", { d: "M21 11.484V10.5c0-.844-.656-1.5-1.5-1.5h-3.516v6h1.5v-2.016h1.172L19.5 15H21l-.891-2.109A1.57 1.57 0 0 0 21 11.485zM12.609 15l1.781-6h-1.5l-1.031 3.422L10.875 9h-1.5l1.734 6h1.5zm-4.593-1.5v-3c0-.844-.656-1.5-1.5-1.5H3v6h3.516c.844 0 1.5-.656 1.5-1.5zM21 3c1.125 0 2.016.891 2.016 2.016v13.969c0 1.078-.891 2.016-2.016 2.016H3c-1.125 0-2.016-.938-2.016-2.016V5.016C.984 3.891 1.875 3 3 3h18zM4.5 10.5h2.016v3H4.5v-3zm12.984 0H19.5v.984h-2.016V10.5z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;