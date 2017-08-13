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
        "visibility_off"
      ),
      _react2.default.createElement("path", { d: "M11.859 9H12c1.641 0 3 1.359 3 3v.188zm-4.312.797c-.328.656-.563 1.406-.563 2.203A5.021 5.021 0 0 0 12 17.016c.797 0 1.547-.234 2.203-.563l-1.547-1.547A2.764 2.764 0 0 1 12 15a3.02 3.02 0 0 1-3-3c0-.234.047-.469.094-.656zM2.016 4.266L3.282 3l17.719 17.719-1.266 1.266c-1.124-1.11-2.256-2.213-3.375-3.328-1.359.563-2.813.844-4.359.844a11.814 11.814 0 0 1-11.016-7.5c.797-1.969 2.109-3.656 3.75-4.969-.914-.914-1.812-1.844-2.719-2.766zM12 6.984c-.656 0-1.266.141-1.828.375L8.016 5.203C9.235 4.734 10.594 4.5 12 4.5c5.016 0 9.234 3.094 10.969 7.5a11.964 11.964 0 0 1-3.422 4.734l-2.906-2.906A4.727 4.727 0 0 0 17.016 12 5.021 5.021 0 0 0 12 6.984z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;