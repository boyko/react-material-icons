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
        "wb_sunny"
      ),
      _react2.default.createElement("path", { d: "M3.563 18.563l1.781-1.828 1.406 1.406-1.781 1.828zm7.453 3.89V19.5h1.969v2.953h-1.969zM12 5.484c3.328 0 6 2.672 6 6s-2.672 6-6 6-6-2.672-6-6 2.672-6 6-6zm8.016 5.016h3v2.016h-3V10.5zm-2.766 7.641l1.406-1.359 1.781 1.781-1.406 1.406zm3.188-13.688l-1.781 1.781-1.406-1.406 1.781-1.781zM12.984.563v2.953h-1.969V.563h1.969zm-9 9.937v2.016h-3V10.5h3zM6.75 4.828L5.344 6.234 3.563 4.453l1.406-1.406z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;