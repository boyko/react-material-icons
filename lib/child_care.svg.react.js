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
        "child_care"
      ),
      _react2.default.createElement("path", { d: "M7.5 14.016h9a4.873 4.873 0 0 1-9 0zm4.5 4.968a6.94 6.94 0 0 0 6.703-5.016c.094 0 .188.047.281.047 1.078 0 2.016-.938 2.016-2.016s-.938-2.016-2.016-2.016c-.094 0-.188.047-.281.047C17.87 7.116 15.188 5.014 12 5.014S6.13 7.115 5.297 10.03c-.094 0-.188-.047-.281-.047-1.078 0-2.016.938-2.016 2.016s.938 2.016 2.016 2.016c.094 0 .188-.047.281-.047A6.941 6.941 0 0 0 12 18.984zm10.922-6.328c-.234 1.5-1.313 2.766-2.766 3.188C18.831 18.615 15.711 21 12 21c-3.698 0-6.821-2.346-8.109-5.156a4.01 4.01 0 0 1-2.813-3.188c-.047-.188-.094-.422-.094-.656s.047-.469.094-.656a4.006 4.006 0 0 1 2.813-3.188C4.407 7.031 5.11 6.047 6.047 5.25A8.924 8.924 0 0 1 12 3a8.949 8.949 0 0 1 8.109 5.156 4.01 4.01 0 0 1 2.813 3.188c.047.188.094.422.094.656s-.047.469-.094.656zM8.25 10.5c0-.703.563-1.266 1.266-1.266s1.219.563 1.219 1.266-.516 1.266-1.219 1.266S8.25 11.203 8.25 10.5zm5.016 0c0-.703.516-1.266 1.219-1.266s1.266.563 1.266 1.266-.563 1.266-1.266 1.266-1.219-.563-1.219-1.266z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;