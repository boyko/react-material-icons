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
        "timer_3"
      ),
      _react2.default.createElement("path", { d: "M17.531 10.453c-.747 0-1.453.355-1.453 1.078 0 .641.436.737.938.938.234.094.516.188.844.234.516.094.938.234 1.359.375s.75.375 1.031.563.469.469.609.75.234.563.234.984c0 1.449-.942 2.064-2.063 2.438-.422.141-.938.188-1.453.188-1.659 0-2.935-.692-3.422-1.828a2.546 2.546 0 0 1-.234-1.031h1.875c0 .957.869 1.406 1.828 1.406.876 0 1.547-.276 1.547-1.078 0-.636-.399-.788-.891-.984-.234-.094-.609-.188-.984-.281-.882-.176-1.638-.483-2.25-.891-.494-.329-.844-.912-.844-1.688 0-1.292.955-2.1 1.969-2.438.422-.141.844-.188 1.359-.188 1.919 0 3.516.897 3.516 2.766h-1.969c0-.61-.385-1.045-.891-1.172-.188-.047-.422-.141-.656-.141zm-7.453 1.406c1.159.435 1.969 1.195 1.969 2.719 0 1.2-.415 2.046-1.125 2.578-.658.564-1.615.938-2.813.938-2.197 0-3.938-1.183-3.938-3.375h2.016c0 .539.194 1.072.516 1.313.345.258.822.469 1.406.469 1.269 0 1.969-.66 1.969-1.922 0-1.342-.8-1.922-2.156-1.922H6.703V11.11h1.172c.961 0 1.646-.388 1.922-1.078.094-.234.094-.469.094-.75 0-1.167-.584-1.781-1.781-1.781-.878 0-1.394.35-1.688.938a1.563 1.563 0 0 0-.141.703H4.312c0-1.609 1.076-2.53 2.25-3a5.34 5.34 0 0 1 1.547-.234c2.283 0 3.75 1.101 3.75 3.375 0 1.335-.861 2.118-1.781 2.578z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;