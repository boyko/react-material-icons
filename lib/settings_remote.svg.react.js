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
        "settings_remote"
      ),
      _react2.default.createElement("path", { d: "M12 0c3.047 0 5.813 1.219 7.781 3.234L18.375 4.64C16.734 2.999 14.484 2.015 12 2.015s-4.734.984-6.375 2.625L4.219 3.234A11.018 11.018 0 0 1 12 0zM7.031 6.047C8.297 4.781 10.078 3.984 12 3.984s3.703.797 4.969 2.063l-1.406 1.406C14.672 6.562 13.36 6 12 6s-2.672.563-3.563 1.453zM12 15c1.078 0 2.016-.938 2.016-2.016s-.938-1.969-2.016-1.969-2.016.891-2.016 1.969S10.922 15 12 15zm3-6a.96.96 0 0 1 .984.984v12c0 .563-.422 1.031-.984 1.031H9c-.563 0-.984-.469-.984-1.031v-12A.96.96 0 0 1 9 9h6z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;