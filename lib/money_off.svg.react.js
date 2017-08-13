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
        "money_off"
      ),
      _react2.default.createElement("path", { d: "M5.344 4.078l14.578 14.625-1.266 1.266-2.203-2.25c-.609.563-1.5.938-2.438 1.125V21h-3v-2.156C9.093 18.422 7.452 17.203 7.312 15h2.203c.094 1.172.938 2.109 3 2.109 1.359 0 2.063-.469 2.391-.938l-3.516-3.469c-2.344-.703-3.891-1.875-3.891-3.938L4.077 5.342zm7.172 2.813c-.609 0-1.125.094-1.547.281L9.516 5.719a8.28 8.28 0 0 1 1.5-.563V3h3v2.203c2.109.516 3.141 2.063 3.188 3.797h-2.203c-.047-1.266-.703-2.109-2.484-2.109z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;