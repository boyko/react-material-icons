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
        "settings_input_svideo"
      ),
      _react2.default.createElement("path", { d: "M15.516 15c.844 0 1.5.656 1.5 1.5s-.656 1.5-1.5 1.5-1.5-.656-1.5-1.5.656-1.5 1.5-1.5zm1.968-5.016c.844 0 1.5.656 1.5 1.5s-.656 1.5-1.5 1.5-1.5-.656-1.5-1.5.656-1.5 1.5-1.5zM12 21c4.969 0 9-4.031 9-9s-4.031-9-9-9-9 4.031-9 9 4.031 9 9 9zM12 .984C18.047.984 23.016 5.953 23.016 12S18.047 23.016 12 23.016.984 18.047.984 12 5.953.984 12 .984zM8.484 15c.844 0 1.5.656 1.5 1.5s-.656 1.5-1.5 1.5-1.5-.656-1.5-1.5.656-1.5 1.5-1.5zM15 6.516c0 .844-.656 1.5-1.5 1.5h-3c-.844 0-1.5-.656-1.5-1.5s.656-1.5 1.5-1.5h3c.844 0 1.5.656 1.5 1.5zm-6.984 4.968c0 .844-.656 1.5-1.5 1.5s-1.5-.656-1.5-1.5.656-1.5 1.5-1.5 1.5.656 1.5 1.5z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;