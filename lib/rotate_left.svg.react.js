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
        "rotate_left"
      ),
      _react2.default.createElement("path", { d: "M12.984 4.078c3.938.469 7.031 3.844 7.031 7.922s-3.094 7.453-7.031 7.922v-2.016C15.843 17.437 18 14.953 18 12s-2.156-5.438-5.016-5.906v3.891L8.437 5.532 12.984.985v3.094zm-5.906 14.25l1.453-1.453c.75.563 1.594.891 2.484 1.031v2.016c-1.406-.188-2.766-.703-3.938-1.594zm-.984-5.344c.141.891.469 1.734.984 2.484l-1.406 1.406a8.107 8.107 0 0 1-1.594-3.891h2.016zm1.031-4.453c-.516.75-.891 1.594-1.031 2.484H4.078c.188-1.406.75-2.719 1.641-3.891z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;