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
        "person_outline"
      ),
      _react2.default.createElement("path", { d: "M12 12.984c2.672 0 8.016 1.359 8.016 4.031v3H3.985v-3c0-2.672 5.344-4.031 8.016-4.031zm0-9c2.203 0 3.984 1.828 3.984 4.031S14.203 11.999 12 11.999s-3.984-1.781-3.984-3.984S9.797 3.984 12 3.984zm0 10.922c-2.953 0-6.094 1.453-6.094 2.109v1.078h12.188v-1.078c0-.656-3.141-2.109-6.094-2.109zm0-9c-1.172 0-2.109.938-2.109 2.109s.938 2.063 2.109 2.063 2.109-.891 2.109-2.063S13.171 5.906 12 5.906z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;