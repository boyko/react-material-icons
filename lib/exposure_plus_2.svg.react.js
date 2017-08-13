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
        "exposure_plus_2"
      ),
      _react2.default.createElement("path", { d: "M8.016 6.984v4.031H12v1.969H8.016v4.031H6v-4.031H2.016v-1.969H6V6.984h2.016zm8.015 9.329h5.953v1.688h-8.625v-1.5l4.172-4.547a9.07 9.07 0 0 0 1.453-1.875c.226-.377.375-.782.375-1.313 0-.656-.234-1.077-.516-1.453-.299-.399-.705-.609-1.406-.609-.722 0-1.281.297-1.641.656-.328.328-.516 1.018-.516 1.641h-2.156c0-1.203.485-2.172 1.125-2.813.375-.375.797-.703 1.359-.891s1.172-.281 1.875-.281c.656 0 1.172.094 1.688.234.469.188.938.375 1.266.703.628.538 1.078 1.453 1.078 2.578 0 .948-.345 1.696-.75 2.344-.234.375-.469.797-.797 1.172s-.703.797-1.078 1.172z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;