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
        "replay_30"
      ),
      _react2.default.createElement("path", { d: "M13.406 15.188c0 .177.324.328.516.328.094 0 .188 0 .281-.094l.188-.234s.094-.188.094-.281v-2.016c0-.094-.094-.188-.094-.281 0-.109-.354-.328-.469-.328a.505.505 0 0 0-.328.141l-.188.188s-.094.188-.094.281v2.016s.094.188.094.281zm1.875-.985c0 .281 0 .609-.094.797l-.281.609s-.328.281-.516.281-.422.094-.609.094c-.475 0-.757-.214-1.078-.375-.188-.094-.188-.328-.281-.609s-.141-.516-.141-.797V13.5c0-.281.047-.609.141-.797l.281-.609s.328-.281.516-.281.375-.094.563-.094.422 0 .609.094.328.188.516.281.188.328.281.609.094.516.094.797v.703zM9.984 13.5c.381 0 .703-.232.703-.609v-.188s-.094-.094-.094-.188-.094-.094-.188-.094h-.516s-.094.094-.188.094-.094.094-.094.188v.188H8.576c0-.464.413-1.078.844-1.078.094 0 .375-.094.469-.094.407 0 .826.132 1.125.281.237.119.375.568.375.891v.328s-.094.188-.094.281-.094.188-.188.188-.234.141-.328.234c.188.094.422.188.516.375s.188.422.188.609 0 .422-.094.516-.188.281-.281.375-.328.188-.516.188-.422.094-.609.094-.375 0-.469-.094-.328-.094-.516-.188c-.262-.131-.422-.633-.422-.984h.844v.188s.094.094.094.188.094.094.188.094h.516s.094-.094.188-.094.094-.094.094-.188v-.516s-.094-.094-.094-.188-.094-.094-.188-.094h-.609V13.5h.375zM12 5.016c4.406 0 8.016 3.563 8.016 7.969S16.407 21.001 12 21.001s-8.016-3.609-8.016-8.016H6c0 3.281 2.719 6 6 6s6-2.719 6-6-2.719-6-6-6v4.031L6.984 6 12 .984v4.031z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;