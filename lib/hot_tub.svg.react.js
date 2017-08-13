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
        "hot_tub"
      ),
      _react2.default.createElement("path", { d: "M14.672 5.859c1.031.984 1.453 2.344 1.266 3.703l-.047.422h-1.922l.141-.563c.143-.812-.16-1.66-.75-2.25-1.031-1.031-1.5-2.391-1.313-3.75l.047-.422h1.922l-.094.609a2.557 2.557 0 0 0 .656 2.203zm3.984 0c1.031.984 1.5 2.344 1.313 3.703l-.094.422H18l.094-.563a2.557 2.557 0 0 0-.656-2.203l-.094-.047c-1.031-1.031-1.5-2.391-1.313-3.75l.094-.422H18l-.094.609a2.557 2.557 0 0 0 .656 2.203zm.328 14.157v-6h-1.969v6h1.969zm-3.984 0v-6h-2.016v6H15zm-3.984 0v-6H9v6h2.016zm-4.032 0v-6H5.015v6h1.969zM11.156 12h10.828v8.016a1.981 1.981 0 0 1-1.969 1.969H3.984a1.981 1.981 0 0 1-1.969-1.969V12h3v-.75c0-1.219 1.031-2.25 2.25-2.25.721 0 1.32.382 1.688.75l1.359 1.547c.234.281.516.469.844.703zm-6.14-6c0-1.125.844-2.016 1.969-2.016S9.001 4.875 9.001 6 8.11 8.016 6.985 8.016 5.016 7.125 5.016 6z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;