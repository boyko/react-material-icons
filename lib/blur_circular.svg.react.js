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
        "blur_circular"
      ),
      _react2.default.createElement("path", { d: "M14.016 12.984c.563 0 .984.469.984 1.031s-.422.984-.984.984-1.031-.422-1.031-.984.469-1.031 1.031-1.031zm0 3.516c.281 0 .469.234.469.516s-.188.469-.469.469-.516-.188-.516-.469.234-.516.516-.516zM12 20.016c4.406 0 8.016-3.609 8.016-8.016S16.407 3.984 12 3.984 3.984 7.593 3.984 12 7.593 20.016 12 20.016zm0-18c5.531 0 9.984 4.453 9.984 9.984S17.531 21.984 12 21.984 2.016 17.531 2.016 12 6.469 2.016 12 2.016zm5.016 7.5c.281 0 .469.188.469.469s-.188.516-.469.516-.516-.234-.516-.516.234-.469.516-.469zm0 3.984c.281 0 .469.234.469.516s-.188.469-.469.469-.516-.188-.516-.469.234-.516.516-.516zm-3-6c-.281 0-.516-.234-.516-.516s.234-.469.516-.469.469.188.469.469-.188.516-.469.516zm0 1.5c.563 0 .984.422.984.984s-.422 1.031-.984 1.031-1.031-.469-1.031-1.031S13.454 9 14.016 9zM9.984 7.5c-.281 0-.469-.234-.469-.516s.188-.469.469-.469.516.188.516.469-.234.516-.516.516zm-3 6c.281 0 .516.234.516.516s-.234.469-.516.469-.469-.188-.469-.469.188-.516.469-.516zm3 3c.281 0 .516.234.516.516s-.234.469-.516.469-.469-.188-.469-.469.188-.516.469-.516zm-3-6.984c.281 0 .516.188.516.469s-.234.516-.516.516-.469-.234-.469-.516.188-.469.469-.469zm3 3.468c.563 0 1.031.469 1.031 1.031s-.469.984-1.031.984S9 14.577 9 14.015s.422-1.031.984-1.031zm0-3.984c.563 0 1.031.422 1.031.984s-.469 1.031-1.031 1.031S9 10.546 9 9.984 9.422 9 9.984 9z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;