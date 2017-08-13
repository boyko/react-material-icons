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
        "whatshot"
      ),
      _react2.default.createElement("path", { d: "M11.719 18.984a4.741 4.741 0 0 0 4.781-4.781c0-1.406-.188-2.719-.563-4.031-1.031 1.359-2.859 2.203-4.641 2.578s-2.813 1.453-2.813 3.094c0 1.734 1.453 3.141 3.234 3.141zM13.5.656c3.891 3.141 6.516 7.969 6.516 13.359 0 4.406-3.609 7.969-8.016 7.969s-8.016-3.563-8.016-7.969c0-3.375 1.219-6.516 3.234-8.906v.375c0 2.063 1.547 3.703 3.609 3.703s3.422-1.641 3.422-3.703c0-2.156-.75-4.828-.75-4.828z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;