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
        "mic_off"
      ),
      _react2.default.createElement("path", { d: "M4.266 3L21 19.734 19.734 21l-4.172-4.172c-.75.469-1.688.75-2.578.891V21h-1.969v-3.281c-3.281-.469-6-3.281-6-6.703h1.688c0 3 2.531 5.063 5.297 5.063.797 0 1.594-.188 2.297-.516l-1.641-1.641a2.764 2.764 0 0 1-.656.094 3.02 3.02 0 0 1-3-3v-.75l-6-6zM15 11.156L9 5.203v-.188c0-1.641 1.359-3 3-3s3 1.359 3 3v6.141zm3.984-.14a6.613 6.613 0 0 1-.891 3.281l-1.219-1.266a4.706 4.706 0 0 0 .422-2.016h1.688z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;