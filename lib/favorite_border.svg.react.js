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
        "favorite_border"
      ),
      _react2.default.createElement("path", { d: "M12.094 18.563c4.781-4.313 7.922-7.172 7.922-10.078 0-2.016-1.5-3.469-3.516-3.469-1.547 0-3.047.984-3.563 2.344h-1.875c-.516-1.359-2.016-2.344-3.563-2.344-2.016 0-3.516 1.453-3.516 3.469 0 2.906 3.141 5.766 7.922 10.078l.094.094zM16.5 3c3.094 0 5.484 2.391 5.484 5.484 0 3.797-3.375 6.844-8.531 11.531L12 21.328l-1.453-1.266c-5.156-4.688-8.531-7.781-8.531-11.578C2.016 5.39 4.407 3 7.5 3c1.734 0 3.422.844 4.5 2.109C13.078 3.843 14.766 3 16.5 3z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;