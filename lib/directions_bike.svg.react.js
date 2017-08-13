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
        "directions_bike"
      ),
      _react2.default.createElement("path", { d: "M18.984 20.484c1.922 0 3.516-1.547 3.516-3.469s-1.594-3.516-3.516-3.516-3.469 1.594-3.469 3.516 1.547 3.469 3.469 3.469zm0-8.484C21.797 12 24 14.203 24 17.016s-2.203 4.969-5.016 4.969-4.969-2.156-4.969-4.969S16.171 12 18.984 12zm-8.203-1.5l2.203 2.297v6.188h-1.969v-4.969l-3.234-2.813c-.422-.281-.563-.797-.563-1.406 0-.516.141-.984.563-1.406l2.813-2.813c.281-.422.797-.563 1.406-.563s1.078.141 1.594.563L15.516 7.5c.891.891 2.063 1.5 3.563 1.5v2.016c-2.109 0-3.75-.797-5.063-2.109l-.797-.797zm-5.765 9.984c1.922 0 3.469-1.547 3.469-3.469s-1.547-3.516-3.469-3.516S1.5 15.093 1.5 17.015s1.594 3.469 3.516 3.469zm0-8.484c2.813 0 4.969 2.203 4.969 5.016s-2.156 4.969-4.969 4.969S0 19.829 0 17.016 2.203 12 5.016 12zm10.5-6.516c-1.078 0-2.016-.891-2.016-1.969s.938-2.016 2.016-2.016 1.969.938 1.969 2.016-.891 1.969-1.969 1.969z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;