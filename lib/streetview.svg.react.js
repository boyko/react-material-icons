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
        "streetview"
      ),
      _react2.default.createElement("path", { d: "M11.484 6c0 1.781.75 3.422 1.922 4.594l-9.797 9.797C3.234 20.016 3 19.547 3 18.985V5.016C3 3.938 3.938 3 5.016 3h7.219a6.463 6.463 0 0 0-.75 3zm1.5 0c0-2.766 2.25-5.016 5.016-5.016S23.016 3.234 23.016 6s-2.25 5.016-5.016 5.016S12.984 8.766 12.984 6zm-.421 8.344a9.142 9.142 0 0 1 5.438-1.828 9.17 9.17 0 0 1 3 .516v5.953c0 1.078-.938 2.016-2.016 2.016h-6.984v-5.484c0-.469.234-.891.563-1.172z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;