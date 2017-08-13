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
        "forward_10"
      ),
      _react2.default.createElement("path", { d: "M13.219 15.188c0 .153.296.328.469.328.094 0 .234 0 .328-.094l.188-.234s.094-.188.094-.281v-2.016s-.094-.188-.094-.281c0-.129-.385-.328-.516-.328-.094 0-.188.047-.281.141l-.188.188s-.141.188-.141.281v2.016s.141.188.141.281zm1.875-.985c0 .281 0 .609-.094.797l-.281.609s-.328.281-.516.281-.422.094-.609.094-.422 0-.609-.094-.281-.188-.469-.281c-.316-.158-.422-.926-.422-1.406V13.5c0-.281 0-.609.094-.797l.328-.609s.281-.281.469-.281.422-.094.609-.094.422 0 .609.094.328.188.516.281.188.328.281.609.094.516.094.797v.703zm-4.172 1.781h-.938v-3.281L9 12.984v-.703l1.781-.563h.141v4.266zm-6.938-3c0-4.406 3.609-7.969 8.016-7.969V.984L17.016 6 12 11.016V6.985c-3.281 0-6 2.719-6 6s2.719 6 6 6 6-2.719 6-6h2.016c0 4.406-3.609 8.016-8.016 8.016s-8.016-3.609-8.016-8.016z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;