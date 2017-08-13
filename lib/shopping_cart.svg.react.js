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
        "shopping_cart"
      ),
      _react2.default.createElement("path", { d: "M17.016 18c1.078 0 1.969.938 1.969 2.016s-.891 1.969-1.969 1.969S15 21.094 15 20.016 15.938 18 17.016 18zM.984 2.016h3.281l.938 1.969h14.813c.563 0 .984.469.984 1.031a.79.79 0 0 1-.141.469l-3.563 6.469a1.973 1.973 0 0 1-1.734 1.031H8.109l-.891 1.641-.047.141c0 .141.094.234.234.234h11.578v2.016h-12c-1.078 0-1.969-.938-1.969-2.016 0-.328.094-.656.234-.938l1.359-2.484-3.609-7.594H.982V2.016zm6 15.984C8.062 18 9 18.938 9 20.016s-.938 1.969-2.016 1.969-1.969-.891-1.969-1.969S5.906 18 6.984 18z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;