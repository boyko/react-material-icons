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
        "screen_rotation"
      ),
      _react2.default.createElement("path", { d: "M7.5 21.469l1.359-1.313 3.797 3.797L12 24C5.719 24 .562 19.125.047 12.984h1.5c.375 3.75 2.672 6.938 5.953 8.484zm7.313-.281l6.375-6.375-12-12-6.375 6.375zM10.219 1.734l12.047 12.047c.609.563.609 1.5 0 2.109l-6.375 6.375c-.563.609-1.5.609-2.109 0L1.735 10.218c-.609-.563-.609-1.5 0-2.109L8.11 1.734c.563-.609 1.5-.609 2.109 0zm6.281.797l-1.359 1.313L11.344.047 12 0c6.281 0 11.438 4.875 11.953 11.016h-1.5c-.375-3.75-2.672-6.938-5.953-8.484z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;