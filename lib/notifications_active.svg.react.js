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
        "notifications_active"
      ),
      _react2.default.createElement("path", { d: "M12 21.984c-1.125 0-2.016-.891-2.016-1.969h3.984c0 1.164-.872 1.969-1.969 1.969zm6-10.968v4.969l2.016 2.016v.984H3.985v-.984l2.016-2.016v-4.969c0-3.094 1.641-5.625 4.5-6.328v-.703c0-.844.656-1.5 1.5-1.5s1.5.656 1.5 1.5v.703c2.859.703 4.5 3.281 4.5 6.328zm1.969-.516c-.141-2.672-1.5-4.969-3.516-6.422l1.406-1.406C20.25 4.5 21.843 7.313 21.984 10.5h-2.016zM7.594 4.078C5.531 5.531 4.172 7.828 4.031 10.5H2.015c.141-3.188 1.734-6 4.125-7.828z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;