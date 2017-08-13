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
        "recent_actors"
      ),
      _react2.default.createElement("path", { d: "M12.516 17.016v-.75c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25v.75h9zm-4.5-9.282c-1.219 0-2.25 1.031-2.25 2.25s1.031 2.25 2.25 2.25 2.25-1.031 2.25-2.25-1.031-2.25-2.25-2.25zm6-2.718A.96.96 0 0 1 15 6v12a.96.96 0 0 1-.984.984h-12c-.563 0-1.031-.422-1.031-.984V6c0-.563.469-.984 1.031-.984h12zm3 13.968V5.015h1.969v13.969h-1.969zM21 5.016h2.016v13.969H21V5.016z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;