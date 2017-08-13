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
        "exposure_neg_2"
      ),
      _react2.default.createElement("path", { d: "M2.016 11.016h7.969v1.969H2.016v-1.969zm14.437-6c2.423 0 4.031 1.099 4.031 3.516 0 .375-.047.797-.188 1.172s-.281.797-.516 1.172a13.622 13.622 0 0 1-1.875 2.344l-2.859 3.094h5.953v1.688h-8.625v-1.5l4.172-4.547a9.07 9.07 0 0 0 1.453-1.875c.238-.397.328-.728.328-1.313 0-.281 0-.609-.094-.844-.279-.698-.804-1.219-1.781-1.219-1.427 0-2.156.866-2.156 2.297H12.14c0-1.203.485-2.172 1.125-2.813.736-.736 1.727-1.172 3.188-1.172z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;