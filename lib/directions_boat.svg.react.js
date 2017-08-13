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
        "directions_boat"
      ),
      _react2.default.createElement("path", { d: "M6 6v3.984l6-1.969 6 1.969V6H6zM3.938 18.984l-1.875-6.656c-.224-.672.187-1.109.656-1.266l1.266-.422V5.999c0-1.078.938-2.016 2.016-2.016h3v-3h6v3h3c1.078 0 2.016.938 2.016 2.016v4.641l1.266.422c.47.157.881.592.656 1.266l-1.875 6.656h-.047c-1.594 0-3.047-.844-4.031-1.969-.984 1.125-2.391 1.969-3.984 1.969s-3-.844-3.984-1.969c-.984 1.125-2.438 1.969-4.031 1.969H3.94zM20.016 21h1.969v2.016h-1.969a8.824 8.824 0 0 1-4.031-.984 8.553 8.553 0 0 1-7.969 0 8.827 8.827 0 0 1-4.031.984H2.016V21h1.969c1.406 0 2.813-.469 4.031-1.313 2.438 1.688 5.531 1.688 7.969 0C17.204 20.531 18.61 21 20.016 21z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;