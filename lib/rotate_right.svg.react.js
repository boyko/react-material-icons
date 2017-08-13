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
        "rotate_right"
      ),
      _react2.default.createElement("path", { d: "M16.875 15.469a5.509 5.509 0 0 0 1.031-2.484h2.016a8.11 8.11 0 0 1-1.594 3.891zm-3.891 2.437a5.527 5.527 0 0 0 2.484-1.031l1.453 1.453c-1.172.891-2.531 1.406-3.938 1.594v-2.016zm6.938-6.89h-2.016a5.527 5.527 0 0 0-1.031-2.484l1.453-1.406a8.107 8.107 0 0 1 1.594 3.891zm-4.359-5.485l-4.547 4.453V6.093C8.157 6.562 6 9.046 6 11.999s2.156 5.438 5.016 5.906v2.016c-3.938-.469-7.031-3.844-7.031-7.922s3.094-7.453 7.031-7.922V.983z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;