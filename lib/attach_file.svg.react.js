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
        "attach_file"
      ),
      _react2.default.createElement("path", { d: "M16.5 6H18v11.484c0 3.047-2.438 5.531-5.484 5.531s-5.531-2.484-5.531-5.531V5.015c0-2.203 1.828-4.031 4.031-4.031S15 2.812 15 5.015v10.5c0 1.359-1.125 2.484-2.484 2.484s-2.531-1.125-2.531-2.484V5.999h1.5v9.516c0 .563.469.984 1.031.984s.984-.422.984-.984v-10.5c0-1.359-1.125-2.531-2.484-2.531S8.485 3.656 8.485 5.015v12.469c0 2.203 1.828 4.031 4.031 4.031s3.984-1.828 3.984-4.031V6z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;