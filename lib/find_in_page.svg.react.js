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
        "find_in_page"
      ),
      _react2.default.createElement("path", { d: "M9 12.984c0-1.641 1.359-3 3-3s3 1.359 3 3-1.359 3-3 3-3-1.359-3-3zm11.016 6.61l-3.844-3.844c.516-.797.844-1.734.844-2.766 0-2.766-2.25-4.969-5.016-4.969s-5.016 2.203-5.016 4.969S9.234 18 12 18c1.031 0 1.969-.328 2.766-.844l4.406 4.453a1.946 1.946 0 0 1-1.172.375H6c-1.078 0-2.016-.891-2.016-1.969l.047-16.031c0-1.078.891-1.969 1.969-1.969h8.016l6 6v11.578z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;