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
        "devices_other"
      ),
      _react2.default.createElement("path", { d: "M21 18V9.984h-3.984V18H21zm.984-9.984c.516 0 1.031.469 1.031.984v9.984c0 .516-.516 1.031-1.031 1.031h-6c-.516 0-.984-.516-.984-1.031V9c0-.516.469-.984.984-.984h6zm-10.968 9.468c.844 0 1.5-.656 1.5-1.5s-.656-1.5-1.5-1.5-1.5.656-1.5 1.5.656 1.5 1.5 1.5zM12.984 12v1.781c.609.563 1.031 1.313 1.031 2.203s-.422 1.688-1.031 2.25v1.781H9v-1.781c-.609-.563-.984-1.359-.984-2.25s.375-1.641.984-2.203V12h3.984zM3 6v12h3.984v2.016H3C1.922 20.016.984 19.078.984 18V6c0-1.078.938-2.016 2.016-2.016h18V6H3z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;