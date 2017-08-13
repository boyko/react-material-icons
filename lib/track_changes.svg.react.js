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
        "track_changes"
      ),
      _react2.default.createElement("path", { d: "M19.078 4.922C20.906 6.75 21.984 9.235 21.984 12c0 5.531-4.453 9.984-9.984 9.984S2.016 17.531 2.016 12 6.469 2.016 12 2.016h.984v8.25A1.973 1.973 0 0 1 14.015 12c0 1.078-.938 2.016-2.016 2.016S9.983 13.078 9.983 12c0-.75.422-1.406 1.031-1.734V8.157c-1.734.469-3 1.969-3 3.844 0 2.203 1.781 3.984 3.984 3.984s3.984-1.781 3.984-3.984c0-1.078-.469-2.063-1.172-2.813l1.406-1.406c1.078 1.078 1.781 2.578 1.781 4.219 0 3.328-2.672 6-6 6s-6-2.672-6-6a5.993 5.993 0 0 1 5.016-5.906V4.079c-3.938.469-7.031 3.844-7.031 7.922 0 4.406 3.609 8.016 8.016 8.016s8.016-3.609 8.016-8.016a8.01 8.01 0 0 0-2.344-5.672z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;