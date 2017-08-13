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
        "language"
      ),
      _react2.default.createElement("path", { d: "M16.359 14.016h3.375c.141-.656.281-1.313.281-2.016s-.141-1.359-.281-2.016h-3.375c.094.656.141 1.313.141 2.016s-.047 1.359-.141 2.016zm-1.781 5.531a8.007 8.007 0 0 0 4.359-3.563h-2.953a15.676 15.676 0 0 1-1.406 3.563zm-.234-5.531c.094-.656.141-1.313.141-2.016s-.047-1.359-.141-2.016H9.656c-.094.656-.141 1.313-.141 2.016s.047 1.359.141 2.016h4.688zM12 19.969c.844-1.219 1.5-2.531 1.922-3.984h-3.844c.422 1.453 1.078 2.766 1.922 3.984zM8.016 8.016a15.676 15.676 0 0 1 1.406-3.563 8.007 8.007 0 0 0-4.359 3.563h2.953zm-2.953 7.968a8.015 8.015 0 0 0 4.359 3.563 15.676 15.676 0 0 1-1.406-3.563H5.063zm-.797-1.968h3.375C7.547 13.36 7.5 12.703 7.5 12s.047-1.359.141-2.016H4.266c-.141.656-.281 1.313-.281 2.016s.141 1.359.281 2.016zM12 4.031c-.844 1.219-1.5 2.531-1.922 3.984h3.844C13.5 6.562 12.844 5.249 12 4.031zm6.938 3.985a8.015 8.015 0 0 0-4.359-3.563 15.676 15.676 0 0 1 1.406 3.563h2.953zm-6.938-6c5.531 0 9.984 4.453 9.984 9.984S17.531 21.984 12 21.984 2.016 17.531 2.016 12 6.469 2.016 12 2.016z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;