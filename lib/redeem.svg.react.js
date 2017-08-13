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
        "redeem"
      ),
      _react2.default.createElement("path", { d: "M20.016 14.016v-6h-5.109l2.109 2.813-1.641 1.172C14.248 10.472 13.11 8.953 12 7.407c-1.11 1.546-2.248 3.064-3.375 4.594l-1.641-1.172 2.109-2.813H3.984v6h16.031zm0 4.968v-1.969H3.985v1.969h16.031zM9 3.984c-.563 0-.984.469-.984 1.031s.422.984.984.984.984-.422.984-.984S9.562 3.984 9 3.984zm6 0c-.563 0-.984.469-.984 1.031s.422.984.984.984.984-.422.984-.984-.422-1.031-.984-1.031zM20.016 6c1.125 0 1.969.891 1.969 2.016v10.969c0 1.125-.844 2.016-1.969 2.016H3.985c-1.125 0-1.969-.891-1.969-2.016V8.016C2.016 6.891 2.86 6 3.985 6h2.203C6.094 5.672 6 5.344 6 5.016c0-1.641 1.359-3 3-3 1.031 0 1.922.516 2.484 1.313l.516.703.516-.703c.563-.797 1.453-1.313 2.484-1.313 1.641 0 3 1.359 3 3 0 .328-.094.656-.188.984h2.203z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;