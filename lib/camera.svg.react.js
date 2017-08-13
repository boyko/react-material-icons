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
        "camera"
      ),
      _react2.default.createElement("path", { d: "M9.844 21.75c1.61-2.78 3.199-5.582 4.828-8.344l3.656 6.328A10.022 10.022 0 0 1 12 21.984c-.75 0-1.453-.094-2.156-.234zM2.438 15h9.703l-3.703 6.328a10.054 10.054 0 0 1-6-6.328zm2.203-9.75c1.687 2.922 3.365 5.853 5.063 8.766h-7.5c-.141-.656-.188-1.313-.188-2.016 0-2.625.984-4.969 2.625-6.75zm17.156 4.734c.141.656.188 1.313.188 2.016a9.867 9.867 0 0 1-2.625 6.75l-4.781-8.25-.281-.516h7.5zM21.563 9H11.86l3.703-6.328a10.054 10.054 0 0 1 6 6.328zM9.422 10.5l-.094.094-3.656-6.328A10.022 10.022 0 0 1 12 2.016c.75 0 1.453.094 2.156.234z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;