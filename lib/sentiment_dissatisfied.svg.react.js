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
        "sentiment_dissatisfied"
      ),
      _react2.default.createElement("path", { d: "M12 14.016c2.344 0 4.313 1.406 5.109 3.469h-1.641c-.703-1.172-1.969-1.969-3.469-1.969s-2.766.797-3.469 1.969H6.889c.797-2.063 2.766-3.469 5.109-3.469zm0 6c4.406 0 8.016-3.609 8.016-8.016S16.407 3.984 12 3.984 3.984 7.593 3.984 12 7.593 20.016 12 20.016zm0-18c5.531 0 9.984 4.453 9.984 9.984S17.531 21.984 12 21.984 2.016 17.531 2.016 12 6.469 2.016 12 2.016zm-5.016 7.5c0-.844.656-1.5 1.5-1.5s1.5.656 1.5 1.5-.656 1.5-1.5 1.5-1.5-.656-1.5-1.5zm7.032 0c0-.844.656-1.5 1.5-1.5s1.5.656 1.5 1.5-.656 1.5-1.5 1.5-1.5-.656-1.5-1.5z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;