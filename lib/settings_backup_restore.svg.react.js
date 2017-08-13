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
        "settings_backup_restore"
      ),
      _react2.default.createElement("path", { d: "M12 3c4.969 0 9 4.031 9 9s-4.031 9-9 9a8.91 8.91 0 0 1-5.484-1.875l1.406-1.406A7.24 7.24 0 0 0 12 18.985c3.891 0 6.984-3.094 6.984-6.984S15.89 5.017 12 5.017s-6.984 3.094-6.984 6.984h3l-4.031 3.984-3.984-3.984h3c0-4.969 4.031-9 9-9zm2.016 9c0 1.078-.938 2.016-2.016 2.016S9.984 13.078 9.984 12 10.922 9.984 12 9.984s2.016.938 2.016 2.016z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;