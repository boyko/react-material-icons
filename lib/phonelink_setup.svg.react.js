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
        "phonelink_setup"
      ),
      _react2.default.createElement("path", { d: "M18.984.984C20.062.984 21 1.922 21 3v18c0 1.078-.938 2.016-2.016 2.016H9c-1.078 0-2.016-.938-2.016-2.016v-3H9v2.016h9.984V3.985H9v2.016H6.984v-3C6.984 1.923 7.922.985 9 .985h9.984zM8.016 14.016c1.078 0 1.969-.938 1.969-2.016s-.891-2.016-1.969-2.016S6 10.922 6 12s.938 2.016 2.016 2.016zm3.797-1.5l1.078.891c.094.094.188.188.094.281l-.984 1.734c-.094.094-.188.094-.281.094L10.407 15c-.281.188-.609.422-.891.516l-.234 1.266c-.094.094-.188.234-.281.234H6.985c-.094 0-.281-.141-.188-.234l-.188-1.266c-.281-.094-.609-.328-.891-.516l-1.406.422c-.094.094-.234-.047-.328-.141L3 13.593c0-.094 0-.188.094-.375l1.125-.797V11.39l-1.125-.797c-.094-.094-.188-.188-.094-.281l.984-1.734c.094-.094.234-.094.328-.094L5.578 9c.281-.188.656-.422.938-.516l.188-1.266c.094-.094.188-.234.281-.234h2.016c.188 0 .281.141.281.234l.234 1.266c.281.094.609.328.891.516l1.313-.422c.094-.094.188.047.281.141l.984 1.688c0 .094 0 .188-.094.281l-1.078.797v1.031z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;