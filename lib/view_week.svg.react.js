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
        "view_week"
      ),
      _react2.default.createElement("path", { d: "M12.984 5.016c.563 0 1.031.422 1.031.984v12c0 .563-.469.984-1.031.984h-3A.96.96 0 0 1 9 18V6a.96.96 0 0 1 .984-.984h3zm7.032 0A.96.96 0 0 1 21 6v12a.96.96 0 0 1-.984.984h-3c-.563 0-1.031-.422-1.031-.984V6c0-.563.469-.984 1.031-.984h3zM6 5.016A.96.96 0 0 1 6.984 6v12a.96.96 0 0 1-.984.984H3A.96.96 0 0 1 2.016 18V6A.96.96 0 0 1 3 5.016h3z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;