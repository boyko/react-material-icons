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
        "photo_size_select_small"
      ),
      _react2.default.createElement("path", { d: "M6.984 3v2.016H5.015V3h1.969zm4.032 0v2.016H9V3h2.016zM3 11.016v1.969H.984v-1.969H3zM3 3v2.016H.984C.984 4.032 2.015 3 3 3zm15.984 15.984V21h-1.969v-2.016h1.969zm0-15.984v2.016h-1.969V3h1.969zM15 18.984V21h-2.016v-2.016H15zm-12-12V9H.984V6.984H3zM3 21c-1.078 0-2.016-.938-2.016-2.016V15h10.031v6H2.999zM21 3c.984 0 2.016 1.031 2.016 2.016H21V3zm2.016 3.984V9H21V6.984h2.016zM15 3v2.016h-2.016V3H15zm8.016 15.984C23.016 19.968 21.985 21 21 21v-2.016h2.016zm0-7.968v1.969H21v-1.969h2.016zm0 3.984v2.016H21V15h2.016z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;