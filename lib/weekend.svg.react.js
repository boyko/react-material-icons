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
        "weekend"
      ),
      _react2.default.createElement("path", { d: "M18 5.016c1.078 0 2.016.891 2.016 1.969v2.156c-1.172.422-2.016 1.5-2.016 2.813v2.063H6v-2.063c0-1.313-.844-2.391-2.016-2.813V6.985c0-1.078.938-1.969 2.016-1.969h12zm3 4.968c1.078 0 2.016.938 2.016 2.016v5.016c0 1.078-.938 1.969-2.016 1.969H3c-1.078 0-2.016-.891-2.016-1.969V12c0-1.078.938-2.016 2.016-2.016s2.016.938 2.016 2.016v3h13.969v-3c0-1.078.938-2.016 2.016-2.016z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;