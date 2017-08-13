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
        "all_inclusive"
      ),
      _react2.default.createElement("path", { d: "M18.609 6.609a5.392 5.392 0 0 1 0 10.782 5.39 5.39 0 0 1-3.844-1.594l-1.266-1.125 1.5-1.313 1.172.984c.703.703 1.547 1.031 2.438 1.031 1.875 0 3.375-1.5 3.375-3.375s-1.5-3.375-3.375-3.375c-.891 0-1.734.328-2.391.984-1.412 1.244-2.835 2.478-4.219 3.75l-2.813 2.484a5.353 5.353 0 0 1-3.797 1.547 5.392 5.392 0 0 1 0-10.782 5.39 5.39 0 0 1 3.844 1.594l1.266 1.125-1.547 1.313-1.125-.984c-.703-.703-1.547-1.031-2.438-1.031-1.875 0-3.375 1.5-3.375 3.375s1.5 3.375 3.375 3.375c.891 0 1.734-.328 2.391-.984 1.412-1.244 2.835-2.478 4.219-3.75l2.813-2.484a5.353 5.353 0 0 1 3.797-1.547z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;