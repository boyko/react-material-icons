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
        "my_location"
      ),
      _react2.default.createElement("path", { d: "M12 18.984c3.891 0 6.984-3.094 6.984-6.984S15.89 5.016 12 5.016 5.016 8.11 5.016 12 8.11 18.984 12 18.984zm8.953-7.968h2.063v1.969h-2.063c-.469 4.172-3.797 7.5-7.969 7.969v2.063h-1.969v-2.063c-4.172-.469-7.5-3.797-7.969-7.969H.983v-1.969h2.063c.469-4.172 3.797-7.5 7.969-7.969V.984h1.969v2.063c4.172.469 7.5 3.797 7.969 7.969zm-8.953-3c2.203 0 3.984 1.781 3.984 3.984S14.203 15.984 12 15.984 8.016 14.203 8.016 12 9.797 8.016 12 8.016z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;