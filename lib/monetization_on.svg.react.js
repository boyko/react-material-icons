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
        "monetization_on"
      ),
      _react2.default.createElement("path", { d: "M13.406 18.094c1.734-.328 3.141-1.313 3.141-3.141 0-2.531-2.203-3.422-4.219-3.938S9.703 9.937 9.703 9.093c0-.938.891-1.641 2.391-1.641 1.594 0 2.156.75 2.203 1.875h1.969c-.047-1.547-.984-2.906-2.859-3.375V3.983h-2.672v1.969c-1.734.375-3.094 1.453-3.094 3.188 0 2.063 1.688 3.047 4.172 3.656 2.25.516 2.672 1.313 2.672 2.156 0 .609-.422 1.594-2.391 1.594-1.828 0-2.578-.844-2.672-1.875H7.453c.094 1.922 1.594 3 3.281 3.375v1.969h2.672v-1.922zM12 2.016c5.531 0 9.984 4.453 9.984 9.984S17.531 21.984 12 21.984 2.016 17.531 2.016 12 6.469 2.016 12 2.016z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;