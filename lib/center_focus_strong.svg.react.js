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
        "center_focus_strong"
      ),
      _react2.default.createElement("path", { d: "M18.984 18.984V15H21v3.984C21 20.062 20.062 21 18.984 21H15v-2.016h3.984zm0-15.984C20.062 3 21 3.938 21 5.016V9h-2.016V5.016H15V3h3.984zM5.016 5.016V9H3V5.016C3 3.938 3.938 3 5.016 3H9v2.016H5.016zm0 9.984v3.984H9V21H5.016C3.938 21 3 20.062 3 18.984V15h2.016zM12 8.016c2.203 0 3.984 1.781 3.984 3.984S14.203 15.984 12 15.984 8.016 14.203 8.016 12 9.797 8.016 12 8.016z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;