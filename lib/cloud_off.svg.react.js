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
        "cloud_off"
      ),
      _react2.default.createElement("path", { d: "M7.734 9.984H6c-2.203 0-3.984 1.828-3.984 4.031S3.797 17.999 6 17.999h9.75zM3 5.25l1.266-1.266L21 20.718l-1.266 1.266-2.016-1.969H5.999c-3.328 0-6-2.672-6-6 0-3.234 2.578-5.859 5.766-6zm16.359 4.781C21.937 10.219 24 12.375 24 15a4.992 4.992 0 0 1-2.109 4.078l-1.453-1.453A2.979 2.979 0 0 0 21.985 15c0-1.641-1.359-3-3-3h-1.5v-.516A5.461 5.461 0 0 0 12.001 6c-.938 0-1.781.188-2.531.609l-1.5-1.453a7.386 7.386 0 0 1 4.031-1.172c3.656 0 6.656 2.578 7.359 6.047z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;