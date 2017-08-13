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
        "settings_system_daydream"
      ),
      _react2.default.createElement("path", { d: "M21 19.031V4.968H3v14.063h18zM21 3c1.078 0 2.016.938 2.016 2.016v13.969c0 1.078-.938 2.016-2.016 2.016H3c-1.078 0-2.016-.938-2.016-2.016V5.016C.984 3.938 1.922 3 3 3h18zM9 15.984a3.02 3.02 0 0 1-3-3 2.956 2.956 0 0 1 2.672-2.953h.188c.563-1.172 1.734-2.016 3.141-2.016a3.494 3.494 0 0 1 3.469 3h.047c1.359 0 2.484 1.125 2.484 2.484s-1.125 2.484-2.484 2.484H9.001z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;