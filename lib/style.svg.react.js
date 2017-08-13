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
        "style"
      ),
      _react2.default.createElement("path", { d: "M5.859 19.734v-6.328l3.469 8.344H7.875c-1.078 0-2.016-.938-2.016-2.016zM7.875 8.766c.563 0 .984-.469.984-1.031s-.422-.984-.984-.984-.984.422-.984.984.422 1.031.984 1.031zm14.156 7.172c.422 1.031-.047 2.203-1.078 2.625l-7.359 3.047a2.185 2.185 0 0 1-.797.141c-.797 0-1.5-.469-1.828-1.219L6 8.532a2.376 2.376 0 0 1-.141-.797c0-.75.469-1.453 1.219-1.781l7.406-3.047c.281-.094.516-.141.797-.141.75 0 1.453.469 1.781 1.219zm-19.5 3.703a1.947 1.947 0 0 1-1.078-2.578l2.438-5.859v9z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;