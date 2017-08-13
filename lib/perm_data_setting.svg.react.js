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
        "perm_data_setting"
      ),
      _react2.default.createElement("path", { d: "M18.984 20.484c.844 0 1.5-.656 1.5-1.5s-.656-1.5-1.5-1.5-1.5.656-1.5 1.5.656 1.5 1.5 1.5zm3.704-.984l1.078.797a.288.288 0 0 1 .047.328l-.984 1.734c-.047.094-.234.188-.328.141l-1.219-.516c-.234.188-.563.328-.844.469l-.188 1.359c0 .141-.141.188-.281.188H18c-.141 0-.281-.047-.281-.188l-.188-1.359a4.873 4.873 0 0 1-.844-.469l-1.219.516c-.141.047-.281-.047-.328-.141l-.984-1.734a.288.288 0 0 1 .047-.328l1.078-.797c0-.141-.047-.328-.047-.516s.047-.328.047-.469l-1.078-.844a.288.288 0 0 1-.047-.328l.984-1.734c.047-.094.234-.141.328-.094l1.219.516a8.14 8.14 0 0 1 .844-.516l.188-1.313c0-.141.141-.188.281-.188h1.969c.141 0 .281.047.281.188l.188 1.313c.328.141.563.328.844.516l1.219-.516c.141-.047.281 0 .328.094l.984 1.734a.288.288 0 0 1-.047.328l-1.078.844c.047.141.047.281.047.469s-.047.375-.047.516zm-3.704-8.016c-4.125 0-7.5 3.375-7.5 7.5 0 .328.047.703.094 1.031H0L20.016-.001l-.047 11.578a6.97 6.97 0 0 0-.984-.094z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;