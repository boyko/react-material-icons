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
        "videogame_asset"
      ),
      _react2.default.createElement("path", { d: "M19.5 12c.844 0 1.5-.656 1.5-1.5S20.344 9 19.5 9s-1.5.656-1.5 1.5.656 1.5 1.5 1.5zm-3.984 3c.844 0 1.5-.656 1.5-1.5s-.656-1.5-1.5-1.5-1.5.656-1.5 1.5.656 1.5 1.5 1.5zm-4.5-2.016v-1.969h-3v-3H6v3H3v1.969h3v3h2.016v-3h3zM21 6c1.078 0 2.016.938 2.016 2.016v7.969c0 1.078-.938 2.016-2.016 2.016H3c-1.078 0-2.016-.938-2.016-2.016V8.016C.984 6.938 1.922 6 3 6h18z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;