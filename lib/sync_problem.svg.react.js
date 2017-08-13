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
        "sync_problem"
      ),
      _react2.default.createElement("path", { d: "M11.016 12.984v-6h1.969v6h-1.969zm9.984-9l-2.344 2.391C20.109 7.828 21 9.797 21 12c0 3.75-2.531 6.844-6 7.734v-2.063c2.344-.797 3.984-3.047 3.984-5.672A5.952 5.952 0 0 0 17.25 7.78L15 9.983v-6h6zm-9.984 13.032V15h1.969v2.016h-1.969zM3 12c0-3.75 2.531-6.844 6-7.734v2.063c-2.344.797-3.984 3.047-3.984 5.672 0 1.641.656 3.141 1.734 4.219L9 14.017v6H3l2.344-2.391C3.891 16.173 3 14.204 3 12.001z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;