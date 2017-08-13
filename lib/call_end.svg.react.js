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
        "call_end"
      ),
      _react2.default.createElement("path", { d: "M12 9c-1.594 0-3.141.234-4.594.703v3.094c0 .375-.234.797-.563.938a10.415 10.415 0 0 0-2.672 1.828c-.188.188-.422.281-.703.281s-.516-.094-.703-.281L.281 13.079C.093 12.891 0 12.657 0 12.376s.094-.516.281-.703C3.328 8.767 7.453 6.985 12 6.985s8.672 1.781 11.719 4.688c.188.188.281.422.281.703s-.094.516-.281.703l-2.484 2.484c-.188.188-.422.281-.703.281s-.516-.094-.703-.281a10.415 10.415 0 0 0-2.672-1.828.945.945 0 0 1-.563-.891V9.75C15.141 9.281 13.594 9 12 9z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;