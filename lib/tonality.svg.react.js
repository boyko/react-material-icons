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
        "tonality"
      ),
      _react2.default.createElement("path", { d: "M19.734 14.016c.094-.328.141-.703.188-1.031h-6.938v1.031h6.75zm-1.5 3c.234-.328.516-.703.703-1.031h-5.953v1.031h5.25zm-5.25 2.906a8.81 8.81 0 0 0 2.906-.938h-2.906v.938zm0-9.938v1.031h6.938c-.047-.328-.094-.703-.188-1.031h-6.75zm0-3v1.031h5.953c-.188-.328-.469-.703-.703-1.031h-5.25zm0-2.906v.938h2.906a8.818 8.818 0 0 0-2.906-.938zm-1.968 15.844V4.078C7.078 4.547 3.985 7.922 3.985 12s3.094 7.453 7.031 7.922zM12 2.016c5.531 0 9.984 4.453 9.984 9.984S17.531 21.984 12 21.984 2.016 17.531 2.016 12 6.469 2.016 12 2.016z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;