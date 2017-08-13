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
        "perm_camera_mic"
      ),
      _react2.default.createElement("path", { d: "M14.016 12.984V9c0-1.078-.938-2.016-2.016-2.016S9.984 7.922 9.984 9v3.984C9.984 14.062 10.922 15 12 15s2.016-.938 2.016-2.016zm6-7.968c1.078 0 1.969.891 1.969 1.969v12c0 1.078-.891 2.016-1.969 2.016h-7.031v-2.109c2.813-.469 5.016-2.953 5.016-5.906h-2.016c0 2.203-1.781 4.031-3.984 4.031s-3.984-1.828-3.984-4.031H6.001c0 2.953 2.203 5.438 5.016 5.906v2.109H3.986c-1.078 0-1.969-.938-1.969-2.016v-12c0-1.078.891-1.969 1.969-1.969h3.188L9.002 3h6l1.828 2.016h3.188z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;