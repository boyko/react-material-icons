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
        "cake"
      ),
      _react2.default.createElement("path", { d: "M18 9c1.641 0 3 1.359 3 3v1.547a1.981 1.981 0 0 1-1.969 1.969c-.516 0-.984-.188-1.359-.563l-2.156-2.156-2.156 2.156c-.75.75-2.016.75-2.766 0l-2.109-2.156-2.156 2.156a1.878 1.878 0 0 1-1.359.563 1.981 1.981 0 0 1-1.969-1.969V12c0-1.641 1.359-3 3-3h5.016V6.984h1.969V9h5.016zm-1.406 6.984c.656.656 1.5 1.031 2.438 1.031a3.5 3.5 0 0 0 1.969-.609V21a.96.96 0 0 1-.984.984H3.986A.96.96 0 0 1 3.002 21v-4.594a3.5 3.5 0 0 0 1.969.609c.938 0 1.781-.375 2.438-1.031l1.078-1.078 1.078 1.078c1.313 1.313 3.563 1.313 4.875 0l1.078-1.078zM12 6c-1.078 0-2.016-.938-2.016-2.016 0-.375.141-.75.328-1.031L12 0l1.688 2.953c.188.281.328.656.328 1.031C14.016 5.062 13.125 6 12 6z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;