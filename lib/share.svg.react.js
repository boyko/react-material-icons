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
        "share"
      ),
      _react2.default.createElement("path", { d: "M18 16.078c1.594 0 2.906 1.313 2.906 2.906S19.593 21.937 18 21.937s-2.906-1.359-2.906-2.953c0-.234 0-.469.047-.656l-7.078-4.125A3.02 3.02 0 0 1 3 12a3.02 3.02 0 0 1 5.063-2.203l7.031-4.078A3.608 3.608 0 0 1 15 5.016c0-1.641 1.359-3 3-3s3 1.359 3 3-1.359 3-3 3c-.797 0-1.5-.328-2.063-.844l-7.031 4.125c.047.234.094.469.094.703s-.047.469-.094.703l7.125 4.125a2.934 2.934 0 0 1 1.969-.75z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;