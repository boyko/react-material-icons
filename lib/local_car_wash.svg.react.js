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
        "local_car_wash"
      ),
      _react2.default.createElement("path", { d: "M5.016 12.984h13.969l-1.5-4.5H6.516zM17.484 18c.844 0 1.5-.656 1.5-1.5s-.656-1.5-1.5-1.5-1.5.656-1.5 1.5.656 1.5 1.5 1.5zM6.516 18c.844 0 1.5-.656 1.5-1.5S7.36 15 6.516 15s-1.5.656-1.5 1.5.656 1.5 1.5 1.5zm12.422-9.984l2.063 6v7.969c0 .563-.422 1.031-.984 1.031h-1.031c-.563 0-.984-.469-.984-1.031v-.984h-12v.984c0 .563-.422 1.031-.984 1.031H3.987c-.563 0-.984-.469-.984-1.031v-7.969l2.063-6c.188-.609.797-1.031 1.453-1.031h10.969c.656 0 1.266.422 1.453 1.031zm-11.954-3a1.48 1.48 0 0 1-1.5-1.5c0-.984 1.5-2.719 1.5-2.719s1.5 1.734 1.5 2.719c0 .844-.656 1.5-1.5 1.5zm5.016 0a1.48 1.48 0 0 1-1.5-1.5c0-.984 1.5-2.719 1.5-2.719s1.5 1.734 1.5 2.719c0 .844-.656 1.5-1.5 1.5zm5.016 0a1.48 1.48 0 0 1-1.5-1.5c0-.984 1.5-2.719 1.5-2.719s1.5 1.734 1.5 2.719c0 .844-.656 1.5-1.5 1.5z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;