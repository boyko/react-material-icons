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
        "smoking_rooms"
      ),
      _react2.default.createElement("path", { d: "M16.031 10.219c1.875 0 3.469 1.313 3.469 3.141v1.641H18v-1.313c0-1.313-.938-2.016-1.969-2.016h-1.547c-1.828 0-3.328-1.547-3.328-3.375s1.5-3.328 3.328-3.328v1.5c-1.031 0-1.828.703-1.828 1.734s.797 2.016 1.828 2.016h1.547zm2.813-2.485a5.536 5.536 0 0 1 3.141 5.016V15h-1.5v-2.25c0-2.25-1.734-4.031-3.984-4.031v-1.5c1.031 0 1.828-.844 1.828-1.875s-.797-1.828-1.828-1.828v-1.5a3.34 3.34 0 0 1 3.328 3.328c0 .938-.375 1.781-.984 2.391zM18 15.984h1.5v3H18v-3zm2.484 0h1.5v3h-1.5v-3zm-18.468 0h15v3h-15v-3z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;