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
        "hearing"
      ),
      _react2.default.createElement("path", { d: "M11.484 9c0-1.359 1.172-2.484 2.531-2.484S16.499 7.641 16.499 9s-1.125 2.484-2.484 2.484S11.484 10.359 11.484 9zM7.641 2.625A8.96 8.96 0 0 0 5.016 9a8.96 8.96 0 0 0 2.625 6.375l-1.406 1.406C4.266 14.812 3.001 12.047 3.001 9s1.266-5.813 3.234-7.781zm9.375 17.391c1.078 0 1.969-.938 1.969-2.016h2.016a3.98 3.98 0 0 1-3.984 3.984c-.563 0-1.125-.094-1.641-.328-1.359-.703-2.156-1.734-2.766-3.563-.328-.984-.891-1.453-1.688-2.063-.891-.656-1.969-1.5-2.859-3.141-.703-1.266-1.078-2.625-1.078-3.891 0-3.938 3.094-6.984 7.031-6.984S21 5.061 21 8.998h-2.016c0-2.813-2.156-5.016-4.969-5.016S8.999 6.185 8.999 8.998c0 .938.281 2.016.797 2.953.703 1.313 1.547 1.922 2.344 2.531.938.703 1.875 1.453 2.391 3 .516 1.5.984 1.969 1.688 2.344.188.094.516.188.797.188z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;