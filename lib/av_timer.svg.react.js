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
        "av_timer"
      ),
      _react2.default.createElement("path", { d: "M6 12c0-.563.422-.984.984-.984s1.031.422 1.031.984-.469.984-1.031.984S6 12.562 6 12zm12 0c0 .563-.422.984-.984.984s-1.031-.422-1.031-.984.469-.984 1.031-.984.984.422.984.984zm-6.984-9H12c4.969 0 9 4.031 9 9s-4.031 9-9 9-9-4.031-9-9c0-2.953 1.406-5.531 3.609-7.172v-.047l6.797 6.797L12 12.984 6.562 7.593a6.91 6.91 0 0 0-1.547 4.406c0 3.891 3.094 6.984 6.984 6.984s6.984-3.094 6.984-6.984c0-3.516-2.625-6.469-6-6.938v1.922h-1.969V2.999zm0 14.016c0-.563.422-1.031.984-1.031s.984.469.984 1.031S12.562 18 12 18s-.984-.422-.984-.984z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;