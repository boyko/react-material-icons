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
        "directions_walk"
      ),
      _react2.default.createElement("path", { d: "M9.797 8.906L6.984 23.015h2.109l1.828-8.016 2.063 2.016v6H15v-7.5l-2.109-2.016.609-3a7.29 7.29 0 0 0 5.484 2.484v-1.969c-1.922 0-3.469-1.031-4.266-2.438l-1.031-1.594c-.422-.609-.984-.984-1.688-.984-.281 0-.516.094-.797.094L5.999 8.295v4.688h2.016V9.608l1.781-.703zM13.5 5.484c-1.078 0-2.016-.891-2.016-1.969s.938-2.016 2.016-2.016 2.016.938 2.016 2.016-.938 1.969-2.016 1.969z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;