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
        "movie_filter"
      ),
      _react2.default.createElement("path", { d: "M16.922 11.953l2.063-.938-2.063-.938-.938-2.063-.938 2.063-2.063.938 2.063.938.938 2.063zm-5.672 3.281l2.766-1.219-2.766-1.266-1.266-2.766-1.219 2.766-2.766 1.266 2.766 1.219L9.984 18zM18 3.984h3.984V18c0 1.078-.891 2.016-1.969 2.016H3.984c-1.078 0-1.969-.938-1.969-2.016V6c0-1.078.891-2.016 1.969-2.016h1.031l1.969 3h3l-1.969-3h1.969l2.016 3h3l-2.016-3H15l2.016 3h3z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;