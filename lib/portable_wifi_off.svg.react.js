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
        "portable_wifi_off"
      ),
      _react2.default.createElement("path", { d: "M3.281 2.484l.984 1.031 16.734 16.734-1.266 1.266-7.5-7.547h-.047l-.188.047c-1.078 0-2.016-.938-2.016-2.016l.047-.188-1.594-1.594a3.842 3.842 0 0 0-.422 1.781c0 1.5.797 2.766 1.969 3.469l-.984 1.734c-1.781-1.031-3-3-3-5.203 0-1.219.328-2.297.938-3.234L5.53 7.311c-.938 1.313-1.547 2.906-1.547 4.688 0 2.953 1.594 5.531 3.984 6.938l-.984 1.734c-3-1.734-4.969-4.969-4.969-8.672 0-2.297.75-4.453 2.063-6.141L2.014 3.749zM12 3.984a7.8 7.8 0 0 0-3.75.938L6.797 3.469c1.5-.938 3.281-1.453 5.203-1.453A9.962 9.962 0 0 1 21.984 12c0 1.922-.516 3.703-1.453 5.203l-1.5-1.453c.609-1.125.984-2.391.984-3.75 0-4.406-3.609-8.016-8.016-8.016zm5.578 10.266l-1.641-1.641c.047-.188.047-.422.047-.609A3.98 3.98 0 0 0 12 8.016c-.188 0-.422 0-.609.047L9.75 6.422A6.006 6.006 0 0 1 12 6c3.328 0 6 2.672 6 6 0 .797-.141 1.547-.422 2.25z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;