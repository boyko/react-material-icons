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
        "timer_off"
      ),
      _react2.default.createElement("path", { d: "M12 20.016c1.266 0 2.484-.375 3.516-.984L5.953 9.469a6.922 6.922 0 0 0-.938 3.516c0 3.891 3.094 7.031 6.984 7.031zM3 3.984L20.766 21.75 19.5 23.016l-2.531-2.531c-1.453.938-3.141 1.5-4.969 1.5-4.969 0-9-4.031-9-9 0-1.828.563-3.563 1.5-4.969L1.734 5.25zm8.016 5.438V8.016h1.969v3.422zM15 .984V3H9V.984h6zm4.031 3.563l1.406 1.406-1.406 1.453C20.25 8.953 21 10.875 21 12.984a9.001 9.001 0 0 1-1.5 4.969L18.047 16.5a6.922 6.922 0 0 0 .938-3.516A6.942 6.942 0 0 0 12.001 6a6.741 6.741 0 0 0-3.469.938l-1.5-1.453a8.993 8.993 0 0 1 4.969-1.5c2.109 0 4.078.75 5.625 1.969z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;