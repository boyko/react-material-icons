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
        "surround_sound"
      ),
      _react2.default.createElement("path", { d: "M12 9.984c1.078 0 2.016.938 2.016 2.016s-.938 2.016-2.016 2.016S9.984 13.078 9.984 12 10.922 9.984 12 9.984zm5.672 7.688c1.547-1.547 2.344-3.609 2.344-5.672s-.797-4.125-2.344-5.672l-1.453 1.453C17.391 8.953 18 10.453 18 12s-.563 3.094-1.734 4.266zM12 15.984c2.203 0 3.984-1.781 3.984-3.984S14.203 8.016 12 8.016 8.016 9.797 8.016 12 9.797 15.984 12 15.984zm-4.219.235C6.609 15.047 6 13.547 6 12s.563-3.094 1.734-4.266L6.328 6.328C4.781 7.875 3.984 9.937 3.984 12s.797 4.125 2.344 5.672zM20.016 3.984c1.078 0 1.969.938 1.969 2.016v12c0 1.078-.891 2.016-1.969 2.016H3.985c-1.078 0-1.969-.938-1.969-2.016V6c0-1.078.891-2.016 1.969-2.016h16.031z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;