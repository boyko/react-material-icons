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
        "leak_remove"
      ),
      _react2.default.createElement("path", { d: "M15.375 11.578c1.641-.984 3.563-1.594 5.625-1.594V12c-1.5 0-2.906.375-4.172 1.031zm4.547 4.547l-1.594-1.594A7.14 7.14 0 0 1 21 14.015v1.969c-.375 0-.75.047-1.078.141zM14.016 3c0 2.063-.609 3.984-1.594 5.625l-1.453-1.453A9.012 9.012 0 0 0 12 3h2.016zM3 4.266L4.266 3 21 19.734 19.734 21l-2.859-2.859A4.926 4.926 0 0 0 15.984 21h-1.969a7.1 7.1 0 0 1 1.453-4.266l-1.453-1.406A8.906 8.906 0 0 0 11.999 21H9.983c0-2.719.984-5.203 2.625-7.125l-2.484-2.484a10.924 10.924 0 0 1-7.125 2.625V12c2.156 0 4.172-.75 5.719-2.016L7.265 8.531a7.093 7.093 0 0 1-4.266 1.453V8.015a4.924 4.924 0 0 0 2.859-.891zM9.984 3a7.14 7.14 0 0 1-.516 2.672L7.874 4.078c.094-.328.141-.703.141-1.078h1.969z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;