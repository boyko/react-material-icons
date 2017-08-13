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
        "bluetooth_searching"
      ),
      _react2.default.createElement("path", { d: "M12.891 16.313l-1.875-1.922v3.797zm-1.875-10.5V9.61l1.875-1.922zm4.687 1.875l-4.313 4.313 4.313 4.313-5.719 5.672H9v-7.594l-4.594 4.594L3 17.58l5.578-5.578L3 6.424l1.406-1.406L9 9.612V2.018h.984zm3.844-.985c.938 1.5 1.453 3.328 1.453 5.203 0 1.969-.563 3.75-1.547 5.297l-1.172-1.172c.609-1.219.984-2.578.984-4.031s-.375-2.813-.984-4.031zM14.25 12l2.297-2.297c.281.703.469 1.5.469 2.297s-.188 1.641-.469 2.344z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;