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
        "timeline"
      ),
      _react2.default.createElement("path", { d: "M23.016 8.016c0 1.078-.938 1.969-2.016 1.969-.188 0-.375 0-.516-.047l-3.563 3.563c.047.141.094.328.094.516 0 1.078-.938 1.969-2.016 1.969s-2.016-.891-2.016-1.969c0-.188.047-.375.094-.516l-2.578-2.578c-.141.047-.328.094-.516.094s-.375-.047-.516-.094L4.92 15.47c.047.141.094.328.094.516 0 1.078-.938 2.016-2.016 2.016S.982 17.064.982 15.986s.938-1.969 2.016-1.969c.188 0 .375 0 .516.047l4.547-4.547c-.047-.141-.047-.328-.047-.516 0-1.078.891-2.016 1.969-2.016s2.016.938 2.016 2.016c0 .188 0 .375-.047.516l2.531 2.531c.141-.047.328-.047.516-.047s.375 0 .516.047l3.563-3.516a1.683 1.683 0 0 1-.094-.516C18.984 6.938 19.922 6 21 6s2.016.938 2.016 2.016z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;