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
        "accessible"
      ),
      _react2.default.createElement("path", { d: "M12.844 18h2.063c-.469 2.297-2.484 3.984-4.922 3.984a4.941 4.941 0 0 1-4.969-4.969c0-2.438 1.688-4.453 3.984-4.922v2.063a3.05 3.05 0 0 0-2.016 2.859c0 1.641 1.359 3 3 3a3.047 3.047 0 0 0 2.859-2.016zm-2.86-8.906c0-1.406 1.564-2.649 3-1.828h.047v.047c.234.094.422.234.609.422l1.313 1.453c.984 1.078 2.484 1.828 4.031 1.828v1.969c-1.734 0-3.656-.844-4.969-1.922v3.422h3c1.078 0 1.969.938 1.969 2.016v5.484h-1.969v-4.969h-5.016c-1.078 0-2.016-.938-2.016-2.016V9.094zm0-5.11c0-1.125.891-1.969 2.016-1.969s2.016.844 2.016 1.969S13.125 6 12 6s-2.016-.891-2.016-2.016z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;