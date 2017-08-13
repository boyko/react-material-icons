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
        "attach_money"
      ),
      _react2.default.createElement("path", { d: "M11.813 10.922c2.25.609 4.688 1.5 4.688 4.359 0 2.063-1.547 3.188-3.516 3.563V21h-3v-2.156C8.063 18.422 6.469 17.203 6.329 15h2.203c.094 1.172.891 2.109 2.953 2.109 2.203 0 2.719-1.078 2.719-1.781 0-.938-.516-1.828-3-2.438-2.813-.656-4.688-1.828-4.688-4.125 0-1.922 1.547-3.188 3.469-3.609V3h3v2.203c2.109.516 3.188 2.063 3.234 3.797h-2.203c-.047-1.266-.75-2.109-2.531-2.109-1.688 0-2.672.797-2.672 1.875 0 .938.75 1.547 3 2.156z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;