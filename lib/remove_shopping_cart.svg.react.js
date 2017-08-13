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
        "remove_shopping_cart"
      ),
      _react2.default.createElement("path", { d: "M6.984 18C8.062 18 9 18.938 9 20.016s-.938 1.969-2.016 1.969-1.969-.891-1.969-1.969S5.906 18 6.984 18zm8.579-5.016l-9-9h13.453c.563 0 .984.469.984 1.031a.79.79 0 0 1-.141.469l-3.563 6.469a1.973 1.973 0 0 1-1.734 1.031zM7.406 15h5.063l-2.016-2.016H8.109l-.891 1.641-.047.141c0 .141.094.234.234.234zm15.328 7.734L21.468 24l-2.859-2.859c-.375.516-.938.844-1.594.844-1.078 0-2.016-.891-2.016-1.969 0-.656.328-1.266.844-1.641l-1.406-1.359H6.984c-1.078 0-1.969-.938-1.969-2.016 0-.328.094-.656.234-.938l1.359-2.484-2.203-4.641-4.406-4.406 1.266-1.266z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;