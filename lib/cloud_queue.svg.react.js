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
        "cloud_queue"
      ),
      _react2.default.createElement("path", { d: "M18.984 18c1.641 0 3-1.359 3-3s-1.359-3-3-3h-1.5v-.516A5.461 5.461 0 0 0 12 6a5.499 5.499 0 0 0-5.297 3.984H6c-2.203 0-3.984 1.828-3.984 4.031S3.797 17.999 6 17.999h12.984zm.375-7.969C21.937 10.219 24 12.375 24 15a5.021 5.021 0 0 1-5.016 5.016H6c-3.328 0-6-2.672-6-6 0-3.094 2.344-5.625 5.344-5.953C6.61 5.672 9.094 3.985 12 3.985c3.656 0 6.656 2.578 7.359 6.047z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;