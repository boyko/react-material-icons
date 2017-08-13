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
        "ring_volume"
      ),
      _react2.default.createElement("path", { d: "M6.422 9.797S2.953 6.328 2.859 6.281l1.406-1.453 3.563 3.563zm6.562-7.781v4.969h-1.969V2.016h1.969zm8.157 4.265c-.094.047-3.563 3.516-3.563 3.516l-1.406-1.406 3.563-3.563zm2.578 10.407c.188.188.281.422.281.703s-.094.516-.281.703l-2.484 2.484c-.188.188-.422.281-.703.281s-.516-.094-.703-.281c-.797-.75-1.688-1.406-2.672-1.875-.328-.141-.563-.516-.563-.891v-3.094c-1.453-.469-3-.703-4.594-.703s-3.141.234-4.594.703v3.094c0 .422-.234.797-.563.938a10.415 10.415 0 0 0-2.672 1.828c-.188.188-.422.281-.703.281s-.516-.094-.703-.281L.281 18.094C.093 17.906 0 17.672 0 17.391s.094-.516.281-.703C3.328 13.782 7.453 12 12 12s8.672 1.781 11.719 4.688z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;