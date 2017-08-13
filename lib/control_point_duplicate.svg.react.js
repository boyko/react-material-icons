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
        "control_point_duplicate"
      ),
      _react2.default.createElement("path", { d: "M15 18.984c3.844 0 6.984-3.141 6.984-6.984S18.843 5.016 15 5.016 8.016 8.157 8.016 12s3.141 6.984 6.984 6.984zM15 3c4.969 0 9 4.031 9 9s-4.031 9-9 9-9-4.031-9-9 4.031-9 9-9zM2.016 12c0 2.813 1.594 5.203 3.984 6.328v2.156C2.531 19.265 0 15.89 0 12s2.531-7.266 6-8.484v2.156C3.609 6.797 2.016 9.188 2.016 12zm13.968-3.984v3h3v1.969h-3v3h-1.969v-3h-3v-1.969h3v-3h1.969z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;