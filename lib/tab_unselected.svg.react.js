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
        "tab_unselected"
      ),
      _react2.default.createElement("path", { d: "M17.016 21v-2.016h1.969V21h-1.969zm-4.032 0v-2.016H15V21h-2.016zM21 12.984v-1.969h2.016v1.969H21zM21 21v-2.016h2.016C23.016 20.062 22.078 21 21 21zM5.016 5.016V3h1.969v2.016H5.016zm0 15.984v-2.016h1.969V21H5.016zM9 5.016V3h2.016v2.016H9zm12 12V15h2.016v2.016H21zM21 3c1.078 0 2.016.938 2.016 2.016V9H12.985V3h8.016zM3 21c-1.078 0-2.016-.938-2.016-2.016H3V21zM.984 17.016V15H3v2.016H.984zM9 21v-2.016h2.016V21H9zM.984 5.016C.984 3.938 1.922 3 3 3v2.016H.984zm0 7.968v-1.969H3v1.969H.984zM.984 9V6.984H3V9H.984z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;