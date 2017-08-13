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
        "local_mall"
      ),
      _react2.default.createElement("path", { d: "M12 12.984c2.766 0 5.016-2.203 5.016-4.969H15c0 1.641-1.359 3-3 3s-3-1.359-3-3H6.984c0 2.766 2.25 4.969 5.016 4.969zM12 3a3.02 3.02 0 0 0-3 3h6c0-1.641-1.359-3-3-3zm6.984 3C20.062 6 21 6.938 21 8.016v12c0 1.078-.938 1.969-2.016 1.969H5.015c-1.078 0-2.016-.891-2.016-1.969v-12C2.999 6.938 3.937 6 5.015 6h1.969C6.984 3.234 9.234.984 12 .984S17.016 3.234 17.016 6h1.969z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;