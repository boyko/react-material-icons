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
        "camera_roll"
      ),
      _react2.default.createElement("path", { d: "M20.016 9V6.984H18V9h2.016zm0 9v-2.016H18V18h2.016zm-4.032-9V6.984h-1.969V9h1.969zm0 9v-2.016h-1.969V18h1.969zM12 9V6.984H9.984V9H12zm0 9v-2.016H9.984V18H12zm2.016-12.984h7.969v15h-7.969c0 1.078-.938 1.969-2.016 1.969H3.984a1.981 1.981 0 0 1-1.969-1.969v-15C2.015 3.938 2.906 3 3.984 3h1.031v-.984c0-.563.422-1.031.984-1.031h3.984a1.04 1.04 0 0 1 1.031 1.031V3h.984c1.078 0 2.016.938 2.016 2.016z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;