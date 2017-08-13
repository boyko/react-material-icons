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
        "invert_colors_off"
      ),
      _react2.default.createElement("path", { d: "M12 5.109l-2.297 2.25-1.406-1.406L12 2.25l5.672 5.672c2.438 2.438 2.953 6.047 1.594 9L12 9.703V5.109zm0 14.485v-4.828L7.219 9.985A5.883 5.883 0 0 0 6 13.594c0 3.225 2.775 6 6 6zm8.672 1.265l.328.375-1.266 1.266-2.719-2.719a8.003 8.003 0 0 1-5.016 1.781 8.021 8.021 0 0 1-5.672-2.344c-2.906-2.953-3.094-7.547-.563-10.688L2.998 5.764l1.266-1.266C9.725 9.959 15.156 15.451 20.67 20.857z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;