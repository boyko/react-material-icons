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
        "replay_5"
      ),
      _react2.default.createElement("path", { d: "M11.813 13.594c-.084.034-.328.113-.328.188 0 .094-.094.141-.094.141h-.703l.234-2.203h2.391v.703h-1.734l-.094.891s.094 0 .094-.094.141-.047.141-.141.094 0 .188 0h.188c.188 0 .422.047.516.141s.281.188.375.281c.208.208.422.639.422 1.078 0 .188 0 .422-.094.516s-.141.328-.328.516-.281.188-.375.281-.422.094-.609.094-.422 0-.516-.094-.281-.094-.469-.188c-.262-.131-.422-.529-.422-.891h.797c0 .347.248.469.609.469.094 0 .188 0 .281-.094l.234-.188s.094-.188.094-.281v-.609l-.094-.188-.234-.234s-.188-.094-.281-.094h-.188zM12 5.016c4.406 0 8.016 3.563 8.016 7.969S16.407 21.001 12 21.001s-8.016-3.609-8.016-8.016H6c0 3.281 2.719 6 6 6s6-2.719 6-6-2.719-6-6-6v4.031L6.984 6 12 .984v4.031z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;