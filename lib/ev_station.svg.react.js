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
        "ev_station"
      ),
      _react2.default.createElement("path", { d: "M8.016 18L12 11.016H9.984V6L6 13.5h2.016V18zM18 9.984c.563 0 .984-.422.984-.984s-.422-.984-.984-.984-.984.422-.984.984.422.984.984.984zm1.781-2.765c.469.469.703 1.078.703 1.781v9.516C20.484 19.875 19.359 21 18 21s-2.484-1.125-2.484-2.484V13.5h-1.5V21H3.985V5.016C3.985 3.938 4.923 3 6.001 3h6c1.078 0 2.016.938 2.016 2.016V12h.984c1.078 0 2.016.938 2.016 2.016v4.5c0 .563.422.984.984.984s.984-.422.984-.984v-7.219a2.298 2.298 0 0 1-.984.188 2.5 2.5 0 0 1-2.484-2.484c0-1.078.656-1.969 1.594-2.344l-2.109-2.109 1.078-1.031z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;