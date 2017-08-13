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
        "exposure_zero"
      ),
      _react2.default.createElement("path", { d: "M14.016 10.125c0-1.209-.068-2-.516-2.672-.188-.281-.422-.422-.656-.563s-.516-.188-.844-.188-.609.047-.844.188-.469.281-.656.563c-.447.67-.516 1.464-.516 2.672v2.672c0 1.609.218 2.756 1.172 3.328.234.141.516.188.844.188.786 0 1.163-.291 1.5-.797.416-.624.563-1.613.563-2.719v-2.672h-.047zm-6.141.328c0-3.212 1.002-5.438 4.125-5.438 2.18 0 3.368 1.121 3.844 2.906.188.703.328 1.5.328 2.531v2.063h-.047c0 1.863-.36 3.236-1.125 4.219-.375.422-.797.797-1.313.984s-1.078.281-1.688.281-1.172-.094-1.688-.281-.938-.563-1.313-.984c-.818-.92-1.125-2.403-1.125-4.219v-2.063z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;