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
        "local_pizza"
      ),
      _react2.default.createElement("path", { d: "M12 15c1.078 0 2.016-.938 2.016-2.016s-.938-1.969-2.016-1.969-2.016.891-2.016 1.969S10.922 15 12 15zM6.984 6.984C6.984 8.062 7.922 9 9 9s2.016-.938 2.016-2.016S10.078 5.015 9 5.015s-2.016.891-2.016 1.969zM12 2.016c3.563 0 6.797 1.547 9 3.984l-9 15.984L3 6a12.135 12.135 0 0 1 9-3.984z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;