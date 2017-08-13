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
        "dns"
      ),
      _react2.default.createElement("path", { d: "M6.984 9C8.062 9 9 8.062 9 6.984s-.938-1.969-2.016-1.969-1.969.891-1.969 1.969S5.906 9 6.984 9zm13.032-6a.96.96 0 0 1 .984.984v6c0 .563-.422 1.031-.984 1.031H3.985c-.563 0-.984-.469-.984-1.031v-6A.96.96 0 0 1 3.985 3h16.031zM6.984 18.984c1.078 0 2.016-.891 2.016-1.969s-.938-2.016-2.016-2.016-1.969.938-1.969 2.016.891 1.969 1.969 1.969zm13.032-6c.563 0 .984.469.984 1.031v6a.96.96 0 0 1-.984.984H3.985a.96.96 0 0 1-.984-.984v-6c0-.563.422-1.031.984-1.031h16.031z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;