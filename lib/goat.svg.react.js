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
        "goat"
      ),
      _react2.default.createElement("path", { d: "M23.953 9.094c.047.047.047.188 0 .234l-1.172 1.5a.356.356 0 0 1-.188.094l-.703-.141-.328 1.031a.352.352 0 0 1-.609 0l-.656-1.406-1.078-.234-2.203 5.25.797 6.375c0 .141-.094.188-.188.188h-.938c-.094 0-.141-.047-.188-.141l-.938-3.797-.469-.797-1.172 4.594c0 .094-.094.141-.188.141h-.984a.202.202 0 0 1-.188-.188l1.078-6.328H7.31l-1.641 3.094.375 3.188c.047.141-.047.234-.188.234h-.938c-.047 0-.141 0-.188-.094L3.417 17.11l-1.594 1.828.281 2.813c.047.141-.047.234-.188.234H.885c-.094 0-.188-.047-.188-.094l-.609-2.625.984-3.844v-6.75S-.006 8.25-.006 7.266h12.844s2.25.047 4.453-1.547c0 0-.375-1.031.281-1.688 0 0 1.313.938 1.688 1.172.469.281.797-.234.656-.656-.094-.281-.422-1.313-2.109-1.969-.215-.072-.713-.111-.609-.422 0-.094.094-.141.188-.141 2.063.281 3.281 1.969 3.609 2.719.047.094.938.703.844 1.781 0 .141 0 .234.094.328z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;