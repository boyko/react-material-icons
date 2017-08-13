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
        "party_mode"
      ),
      _react2.default.createElement("path", { d: "M12 17.016A5.021 5.021 0 0 0 17.016 12a6.97 6.97 0 0 0-.094-.984h-2.109c.094.328.188.656.188.984 0 1.641-1.359 3-3 3H8.017c.938 1.219 2.344 2.016 3.984 2.016zm0-10.032A5.021 5.021 0 0 0 6.984 12c0 .328.047.656.094.984h2.109c-.094-.328-.188-.656-.188-.984 0-1.641 1.359-3 3-3h3.984c-.938-1.219-2.344-2.016-3.984-2.016zm8.016-3c1.078 0 1.969.938 1.969 2.016v12c0 1.078-.891 2.016-1.969 2.016H3.985c-1.078 0-1.969-.938-1.969-2.016V6c0-1.078.891-2.016 1.969-2.016h3.188l1.828-1.969h6l1.828 1.969h3.188z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;