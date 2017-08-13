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
        "nature_people"
      ),
      _react2.default.createElement("path", { d: "M4.5 11.016c-.844 0-1.5-.656-1.5-1.5s.656-1.5 1.5-1.5 1.5.656 1.5 1.5-.656 1.5-1.5 1.5zm17.672-1.828c0 3.609-2.719 6.516-6.188 6.938v3.891h3v1.969H3v-4.969h-.984v-4.031A.96.96 0 0 1 3 12.002h3a.96.96 0 0 1 .984.984v4.031H6v3h8.016v-3.938c-3.328-.563-5.859-3.422-5.859-6.891 0-3.891 3.141-7.031 7.031-7.031s6.984 3.141 6.984 7.031z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;