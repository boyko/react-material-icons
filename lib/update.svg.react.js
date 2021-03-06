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
        "update"
      ),
      _react2.default.createElement("path", { d: "M12.516 8.016v4.219l3.469 2.109-.703 1.219-4.266-2.578V8.016h1.5zM21 10.125h-6.797l2.766-2.813c-2.719-2.719-7.172-2.813-9.891-.094s-2.719 7.031 0 9.75 7.172 2.719 9.891 0c1.359-1.359 2.016-2.906 2.016-4.875h2.016c0 1.969-.844 4.547-2.625 6.281-3.516 3.469-9.234 3.469-12.75 0s-3.516-9.094 0-12.563 9.141-3.469 12.656 0l2.719-2.813v7.125z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;