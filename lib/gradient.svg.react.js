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
        "gradient"
      ),
      _react2.default.createElement("path", { d: "M18.984 11.016v-6H5.015v6h1.969v1.969H9v2.016h2.016v-2.016h1.969v2.016h2.016v-2.016h2.016v-1.969h1.969zM17.016 18v-2.016H15V18h2.016zm-4.032 0v-2.016h-1.969V18h1.969zM9 18v-2.016H6.984V18H9zm9.984-15C20.062 3 21 3.938 21 5.016v13.969c0 1.078-.938 2.016-2.016 2.016H5.015c-1.078 0-2.016-.938-2.016-2.016V5.016C2.999 3.938 3.937 3 5.015 3h13.969zm-12 6H9v2.016H6.984V9zM15 9h2.016v2.016H15V9zm-3.984 0h1.969v2.016h2.016v1.969h-2.016v-1.969h-1.969v1.969H9v-1.969h2.016V9zm6 3.984V15h1.969v-2.016h-1.969zm-10.032 0H5.015V15h1.969v-2.016z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;