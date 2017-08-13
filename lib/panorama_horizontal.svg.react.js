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
        "panorama_horizontal"
      ),
      _react2.default.createElement("path", { d: "M21.422 3.984c.328 0 .563.234.563.656v14.719c0 .422-.234.656-.563.656-.094 0-.188-.047-.281-.094-2.953-1.078-6.047-1.641-9.141-1.641s-6.188.563-9.141 1.641c-.094.047-.188.094-.281.094-.328 0-.563-.281-.563-.656V4.64c0-.422.234-.656.563-.656.094 0 .188.047.281.094C5.812 5.156 8.906 5.719 12 5.719s6.188-.563 9.141-1.641c.094-.047.188-.094.281-.094zm-1.406 2.579C17.438 7.36 14.719 7.688 12 7.688s-5.438-.375-8.016-1.125v10.875c2.578-.75 5.297-1.125 8.016-1.125s5.438.375 8.016 1.125V6.563z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;