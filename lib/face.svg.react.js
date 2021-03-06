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
        "face"
      ),
      _react2.default.createElement("path", { d: "M12 20.016c4.406 0 8.016-3.609 8.016-8.016 0-.797-.141-1.547-.328-2.25-.703.188-1.453.234-2.25.234-3.375 0-6.328-1.641-8.156-4.219a10.179 10.179 0 0 1-5.25 5.391c-.047.281-.047.563-.047.844 0 4.406 3.609 8.016 8.016 8.016zm0-18c5.531 0 9.984 4.453 9.984 9.984S17.531 21.984 12 21.984 2.016 17.531 2.016 12 6.469 2.016 12 2.016zm3 9.75c.703 0 1.266.516 1.266 1.219s-.563 1.266-1.266 1.266-1.266-.563-1.266-1.266.563-1.219 1.266-1.219zm-6 0c.703 0 1.266.516 1.266 1.219S9.703 14.251 9 14.251s-1.266-.563-1.266-1.266.563-1.219 1.266-1.219z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;