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
        "find_replace"
      ),
      _react2.default.createElement("path", { d: "M16.641 15.141l4.828 4.875-1.453 1.453-4.875-4.828C13.969 17.485 12.563 18 11.016 18a7.056 7.056 0 0 1-4.969-2.063L3.984 18v-6h6l-2.531 2.531c.891.891 2.203 1.453 3.563 1.453 2.438 0 4.406-1.688 4.875-3.984h2.016a6.658 6.658 0 0 1-1.266 3.141zM11.016 6C8.578 6 6.563 7.688 6.094 9.984H4.078c.469-3.375 3.422-6 6.938-6 1.922 0 3.656.797 4.922 2.063l2.063-2.063v6h-6l2.531-2.531A4.999 4.999 0 0 0 11.016 6z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;