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
        "filter_vintage"
      ),
      _react2.default.createElement("path", { d: "M12 15.984c2.203 0 3.984-1.781 3.984-3.984S14.203 8.016 12 8.016 8.016 9.797 8.016 12 9.797 15.984 12 15.984zm-9.703 1.594c0-2.307 1.47-4.787 3.844-5.578-.281-.094-.563-.281-.844-.422-1.922-1.125-3-3.094-3-5.156 1.781-1.031 4.078-1.125 6 0 .281.141.563.328.797.516C9.047 6.61 9 6.329 9 6a6.047 6.047 0 0 1 3-5.203c1.781 1.031 3 3 3 5.203 0 .328-.047.609-.094.938.234-.188.516-.375.797-.516 1.922-1.125 4.219-1.031 6 0 0 2.063-1.078 4.031-3 5.156-.281.141-.563.328-.844.422.281.094.563.281.844.422 1.922 1.125 3 3.094 3 5.156-1.781 1.031-4.078 1.125-6 0a4.635 4.635 0 0 1-.797-.516c.047.328.094.609.094.938a6.047 6.047 0 0 1-3 5.203c-1.781-1.031-3-3-3-5.203 0-.328.047-.609.094-.938a4.635 4.635 0 0 1-.797.516c-1.922 1.125-4.219 1.031-6 0z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;