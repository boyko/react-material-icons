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
        "copyright"
      ),
      _react2.default.createElement("path", { d: "M12 20.016c4.406 0 8.016-3.609 8.016-8.016S16.407 3.984 12 3.984 3.984 7.593 3.984 12 7.593 20.016 12 20.016zm0-18c5.531 0 9.984 4.453 9.984 9.984S17.531 21.984 12 21.984 2.016 17.531 2.016 12 6.469 2.016 12 2.016zm-.141 7.125c-1.442 0-1.875 1.276-1.875 2.719v.281c0 1.442.434 2.719 1.875 2.719.88 0 1.641-.537 1.641-1.406h1.781c0 .915-.495 1.603-1.031 2.063-.604.518-1.308.844-2.391.844-2.559 0-3.844-1.691-3.844-4.219v-.281c0-1.212.34-2.318.938-3 .619-.707 1.61-1.266 2.906-1.266 1.038 0 1.904.358 2.438.891.516.516.984 1.312.984 2.297H13.5c0-.234-.047-.422-.141-.609s-.188-.422-.328-.563a1.706 1.706 0 0 0-1.172-.469z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;