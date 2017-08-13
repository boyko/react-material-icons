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
        "g_translate"
      ),
      _react2.default.createElement("path", { d: "M21 20.016V6.985a.96.96 0 0 0-.984-.984h-8.813l1.172 4.031h1.922V9.001h1.078v1.031h3.609v1.031h-1.266c-.328 1.266-1.031 2.484-1.922 3.516l2.719 2.672-.703.75-2.719-2.672-.891.891.797 2.766-2.016 2.016h7.031a.96.96 0 0 0 .984-.984zm-7.031-7.875a8.707 8.707 0 0 0 1.125 1.688c1.219-1.453 1.547-2.766 1.547-2.766h-3.984l.328 1.078h.984zm-.75.75l.609 2.203.563-.516a8.34 8.34 0 0 1-1.172-1.688zm-2.11-2.297c0-.231-.007-.529-.094-.703H7.077v1.547H9.28c-.141.609-.75 1.5-2.109 1.5-1.313 0-2.391-1.125-2.391-2.438s1.078-2.438 2.391-2.438c.75 0 1.219.328 1.5.609l.094.047 1.219-1.172-.094-.047a3.909 3.909 0 0 0-2.719-1.078c-2.25 0-4.078 1.828-4.078 4.078s1.828 4.078 4.078 4.078c2.297 0 3.938-1.641 3.938-3.984zm8.907-5.578c1.078 0 1.969.891 1.969 1.969v13.031a1.981 1.981 0 0 1-1.969 1.969H12l-.984-3H3.985a1.981 1.981 0 0 1-1.969-1.969V3.985c0-1.078.891-1.969 1.969-1.969h6l.891 3h9.141z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;