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
        "linked_camera"
      ),
      _react2.default.createElement("path", { d: "M15.984 6C17.109 6 18 6.891 18 8.016h1.313a3.34 3.34 0 0 0-3.328-3.328v1.313zM12 18.984c2.766 0 5.016-2.203 5.016-4.969S14.766 8.999 12 8.999s-5.016 2.25-5.016 5.016 2.25 4.969 5.016 4.969zM17.016 9h4.969v11.016a1.981 1.981 0 0 1-1.969 1.969H3.985a1.981 1.981 0 0 1-1.969-1.969v-12C2.016 6.938 2.907 6 3.985 6h3.188l1.828-2.016h6v3c1.125 0 2.016.891 2.016 2.016zm-1.032-5.672V2.015c3.328 0 6 2.672 6 6h-1.313a4.702 4.702 0 0 0-4.688-4.688zM8.813 14.016c0-1.781 1.406-3.234 3.188-3.234s3.188 1.453 3.188 3.234-1.406 3.188-3.188 3.188-3.188-1.406-3.188-3.188z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;