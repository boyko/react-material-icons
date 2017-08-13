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
        "panorama_wide_angle"
      ),
      _react2.default.createElement("path", { d: "M12 3.984c2.719 0 5.25.281 7.969.75l.891.141.281.891c.563 2.063.844 4.172.844 6.234s-.281 4.172-.844 6.234l-.281.891-.891.141c-2.719.469-5.25.75-7.969.75s-5.25-.281-7.969-.75l-.891-.141-.281-.891c-.563-2.063-.844-4.172-.844-6.234s.281-4.172.844-6.234l.281-.891.891-.141c2.719-.469 5.25-.75 7.969-.75zM12 6c-2.438 0-4.734.234-7.313.656-.469 1.781-.703 3.563-.703 5.344s.234 3.563.703 5.344C7.265 17.766 9.562 18 12 18s4.734-.234 7.313-.656c.469-1.781.703-3.563.703-5.344s-.234-3.563-.703-5.344C16.735 6.234 14.438 6 12 6z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;