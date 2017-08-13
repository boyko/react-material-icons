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
        "thumbs_up_down"
      ),
      _react2.default.createElement("path", { d: "M22.5 9.984c.844 0 1.5.656 1.5 1.5V18c0 .422-.141.797-.422 1.078L18.609 24l-.797-.797a1.13 1.13 0 0 1-.328-.797c.232-1.143.469-2.281.703-3.422h-5.203A.96.96 0 0 1 12 18v-1.266c0-.188.047-.328.094-.516l2.297-5.297c.234-.516.75-.938 1.359-.938h6.75zM12 6v1.266c0 .188-.047.328-.094.516l-2.297 5.297c-.234.516-.75.938-1.359.938H1.5a1.48 1.48 0 0 1-1.5-1.5V6.001c0-.422.141-.797.422-1.078L5.391.001l.797.797c.188.188.328.469.328.797-.232 1.143-.469 2.281-.703 3.422h5.203a.96.96 0 0 1 .984.984z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;