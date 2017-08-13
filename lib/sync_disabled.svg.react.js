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
        "sync_disabled"
      ),
      _react2.default.createElement("path", { d: "M20.016 3.984l-2.391 2.391c1.453 1.453 2.391 3.422 2.391 5.625 0 1.547-.469 3-1.219 4.219l-1.5-1.453c.422-.844.703-1.781.703-2.766 0-1.641-.703-3.141-1.781-4.219l-2.203 2.203v-6h6zM2.859 5.391l1.266-1.266 15.703 15.75-1.266 1.266-2.344-2.344a7.903 7.903 0 0 1-2.25.938v-2.063c.281-.094.563-.234.797-.375L6.702 9.234c-.422.844-.703 1.781-.703 2.766 0 1.641.703 3.141 1.781 4.219l2.203-2.203v6h-6l2.391-2.391C4.921 16.172 3.983 14.203 3.983 12c0-1.547.469-3 1.219-4.219zm7.125.937c-.281.094-.516.234-.75.375l-1.453-1.5c.703-.422 1.406-.75 2.203-.938v2.063z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;