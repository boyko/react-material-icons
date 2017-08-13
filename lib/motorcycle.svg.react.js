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
        "motorcycle"
      ),
      _react2.default.createElement("path", { d: "M18.984 17.016c1.641 0 3-1.359 3-3s-1.359-3-3-3-3 1.359-3 3 1.359 3 3 3zM7.828 15H5.015v-2.016h2.813a2.992 2.992 0 0 0-2.813-1.969c-1.641 0-3 1.359-3 3s1.359 3 3 3c1.266 0 2.391-.844 2.813-2.016zm11.625-5.953C22.031 9.235 24 11.344 24 14.016c0 2.813-2.203 4.969-5.016 4.969s-4.969-2.156-4.969-4.969c0-.609.094-1.219.281-1.781l-2.766 2.766H9.889c-.469 2.297-2.438 3.984-4.875 3.984-2.813 0-5.016-2.156-5.016-4.969S2.201 9 5.014 9h11.578l-2.016-2.016h-3.563V5.015h4.406z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;