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
        "grain"
      ),
      _react2.default.createElement("path", { d: "M9.984 3.984C11.062 3.984 12 4.922 12 6s-.938 2.016-2.016 2.016S8.015 7.078 8.015 6s.891-2.016 1.969-2.016zm4.032 4.032c1.078 0 1.969.891 1.969 1.969s-.891 2.016-1.969 2.016S12 11.063 12 9.985s.938-1.969 2.016-1.969zM18 12c1.078 0 2.016.938 2.016 2.016s-.938 1.969-2.016 1.969-2.016-.891-2.016-1.969S16.922 12 18 12zm-3.984 3.984c1.078 0 1.969.938 1.969 2.016s-.891 2.016-1.969 2.016S12 19.078 12 18s.938-2.016 2.016-2.016zM18 8.016c-1.078 0-2.016-.938-2.016-2.016S16.922 3.984 18 3.984s2.016.938 2.016 2.016S19.078 8.016 18 8.016zM6 15.984c1.078 0 2.016.938 2.016 2.016S7.078 20.016 6 20.016 3.984 19.078 3.984 18 4.922 15.984 6 15.984zm0-7.968c1.078 0 2.016.891 2.016 1.969S7.078 12.001 6 12.001s-2.016-.938-2.016-2.016S4.922 8.016 6 8.016zM9.984 12c1.078 0 2.016.938 2.016 2.016s-.938 1.969-2.016 1.969-1.969-.891-1.969-1.969S8.906 12 9.984 12z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;