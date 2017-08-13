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
        "content_cut"
      ),
      _react2.default.createElement("path", { d: "M18.984 3h3v.984L15 11.015l-2.016-2.016zM12 12.516c.281 0 .516-.234.516-.516s-.234-.516-.516-.516-.516.234-.516.516.234.516.516.516zm-6 7.5c1.078 0 2.016-.891 2.016-2.016S7.078 15.984 6 15.984 3.984 16.875 3.984 18 4.922 20.016 6 20.016zm0-12c1.078 0 2.016-.891 2.016-2.016S7.078 3.984 6 3.984 3.984 4.875 3.984 6 4.922 8.016 6 8.016zm3.656-.375l12.328 12.375V21h-3L12 14.016 9.656 16.36c.234.516.328 1.031.328 1.641 0 2.203-1.781 3.984-3.984 3.984s-3.984-1.781-3.984-3.984S3.797 14.017 6 14.017c.609 0 1.125.094 1.641.328l2.344-2.344-2.344-2.344c-.516.234-1.031.328-1.641.328-2.203 0-3.984-1.781-3.984-3.984S3.797 2.017 6 2.017s3.984 1.781 3.984 3.984c0 .609-.094 1.125-.328 1.641z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;