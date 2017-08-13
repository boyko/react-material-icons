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
        "settings"
      ),
      _react2.default.createElement("path", { d: "M12 15.516c1.922 0 3.516-1.594 3.516-3.516S13.922 8.484 12 8.484 8.484 10.078 8.484 12s1.594 3.516 3.516 3.516zm7.453-2.532l2.109 1.641c.188.141.234.422.094.656L19.64 18.75c-.141.234-.375.281-.609.188l-2.484-.984c-.516.375-1.078.75-1.688.984l-.375 2.625c-.047.234-.234.422-.469.422H9.984c-.234 0-.422-.188-.469-.422l-.375-2.625a6.145 6.145 0 0 1-1.688-.984l-2.484.984c-.234.094-.469.047-.609-.188l-2.016-3.469c-.141-.234-.094-.516.094-.656l2.109-1.641c-.047-.328-.047-.656-.047-.984s0-.656.047-.984L2.437 9.375c-.188-.141-.234-.422-.094-.656L4.359 5.25c.141-.234.375-.281.609-.188l2.484.984c.516-.375 1.078-.75 1.688-.984l.375-2.625c.047-.234.234-.422.469-.422h4.031c.234 0 .422.188.469.422l.375 2.625a6.145 6.145 0 0 1 1.688.984l2.484-.984c.234-.094.469-.047.609.188l2.016 3.469c.141.234.094.516-.094.656l-2.109 1.641c.047.328.047.656.047.984s0 .656-.047.984z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;