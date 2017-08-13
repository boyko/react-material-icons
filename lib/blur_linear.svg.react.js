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
        "blur_linear"
      ),
      _react2.default.createElement("path", { d: "M12.984 17.016c-.563 0-.984-.469-.984-1.031s.422-.984.984-.984 1.031.422 1.031.984-.469 1.031-1.031 1.031zm0-4.032c-.563 0-.984-.422-.984-.984s.422-.984.984-.984 1.031.422 1.031.984-.469.984-1.031.984zm0-3.984C12.421 9 12 8.578 12 8.016s.422-1.031.984-1.031 1.031.469 1.031 1.031S13.546 9 12.984 9zm4.032 3.516c-.281 0-.516-.234-.516-.516s.234-.516.516-.516.469.234.469.516-.188.516-.469.516zm0-4.032c-.281 0-.516-.188-.516-.469s.234-.516.516-.516.469.234.469.516-.188.469-.469.469zM3 3h18v2.016H3V3zm14.016 13.5c-.281 0-.516-.234-.516-.516s.234-.469.516-.469.469.188.469.469-.188.516-.469.516zM9 17.016c-.563 0-.984-.469-.984-1.031s.422-.984.984-.984.984.422.984.984-.422 1.031-.984 1.031zM5.016 13.5c-.844 0-1.5-.656-1.5-1.5s.656-1.5 1.5-1.5 1.5.656 1.5 1.5-.656 1.5-1.5 1.5zm0-3.984c-.844 0-1.5-.656-1.5-1.5s.656-1.5 1.5-1.5 1.5.656 1.5 1.5-.656 1.5-1.5 1.5zM3 21v-2.016h18V21H3zM9 9c-.563 0-.984-.422-.984-.984S8.438 6.985 9 6.985s.984.469.984 1.031S9.562 9 9 9zm0 3.984c-.563 0-.984-.422-.984-.984s.422-.984.984-.984.984.422.984.984-.422.984-.984.984zm-3.984 4.5c-.844 0-1.5-.656-1.5-1.5s.656-1.5 1.5-1.5 1.5.656 1.5 1.5-.656 1.5-1.5 1.5z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;