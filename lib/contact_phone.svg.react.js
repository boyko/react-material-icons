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
        "contact_phone"
      ),
      _react2.default.createElement("path", { d: "M17.859 14.016c-.234-.609-.375-1.313-.375-2.016s.141-1.406.375-2.016H19.5L21 8.015l-1.969-2.016c-1.313.984-2.297 2.344-2.766 3.984-.188.656-.281 1.313-.281 2.016s.094 1.359.281 2.016a7.726 7.726 0 0 0 2.766 3.984L21 15.983l-1.5-1.969h-1.641zM14.016 18v-.984c0-2.016-3.984-3.094-6-3.094s-6 1.078-6 3.094V18h12zm-6-12c-1.641 0-3 1.359-3 3s1.359 3 3 3 3-1.359 3-3-1.359-3-3-3zm13.968-3C23.062 3 24 3.938 24 5.016v13.969c0 1.078-.938 2.016-2.016 2.016H2.015c-1.078 0-2.016-.938-2.016-2.016V5.016C-.001 3.938.937 3 2.015 3h19.969z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;