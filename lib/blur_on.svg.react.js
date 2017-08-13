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
        "blur_on"
      ),
      _react2.default.createElement("path", { d: "M14.016 8.484c.844 0 1.5.656 1.5 1.5s-.656 1.5-1.5 1.5-1.5-.656-1.5-1.5.656-1.5 1.5-1.5zm0 4.032c.844 0 1.5.656 1.5 1.5s-.656 1.5-1.5 1.5-1.5-.656-1.5-1.5.656-1.5 1.5-1.5zm-4.032 4.5c.563 0 1.031.422 1.031.984s-.469.984-1.031.984S9 18.562 9 18s.422-.984.984-.984zm0-8.532c.844 0 1.5.656 1.5 1.5s-.656 1.5-1.5 1.5-1.5-.656-1.5-1.5.656-1.5 1.5-1.5zm4.032 12c.281 0 .469.234.469.516s-.188.516-.469.516-.516-.234-.516-.516.234-.516.516-.516zm0-3.468c.563 0 .984.422.984.984s-.422.984-.984.984-1.031-.422-1.031-.984.469-.984 1.031-.984zM21 13.5c.281 0 .516.234.516.516s-.234.469-.516.469-.516-.188-.516-.469.234-.516.516-.516zm-3-8.484c.563 0 .984.422.984.984s-.422.984-.984.984-.984-.422-.984-.984.422-.984.984-.984zM18 9c.563 0 .984.422.984.984s-.422 1.031-.984 1.031-.984-.469-.984-1.031S17.438 9 18 9zm0 8.016c.563 0 .984.422.984.984s-.422.984-.984.984-.984-.422-.984-.984.422-.984.984-.984zm0-4.032c.563 0 .984.469.984 1.031s-.422.984-.984.984-.984-.422-.984-.984.422-1.031.984-1.031zm-8.016-.468c.844 0 1.5.656 1.5 1.5s-.656 1.5-1.5 1.5-1.5-.656-1.5-1.5.656-1.5 1.5-1.5zm0-5.532C9.421 6.984 9 6.562 9 6s.422-.984.984-.984 1.031.422 1.031.984-.469.984-1.031.984zm0-3.468c-.281 0-.469-.234-.469-.516s.188-.516.469-.516.516.234.516.516-.234.516-.516.516zm0 16.968c.281 0 .516.234.516.516s-.234.516-.516.516-.469-.234-.469-.516.188-.516.469-.516zM3 13.5c.281 0 .516.234.516.516s-.234.469-.516.469-.516-.188-.516-.469.234-.516.516-.516zm11.016-9.984c-.281 0-.516-.234-.516-.516s.234-.516.516-.516.469.234.469.516-.188.516-.469.516zm0 3.468c-.563 0-1.031-.422-1.031-.984s.469-.984 1.031-.984S15 5.438 15 6s-.422.984-.984.984zM21 10.5c-.281 0-.516-.234-.516-.516s.234-.469.516-.469.516.188.516.469-.234.516-.516.516zM6 5.016c.563 0 .984.422.984.984s-.422.984-.984.984-.984-.422-.984-.984.422-.984.984-.984zm-3 4.5c.281 0 .516.188.516.469s-.234.516-.516.516-.516-.234-.516-.516.234-.469.516-.469zM6 9c.563 0 .984.422.984.984S6.562 11.015 6 11.015s-.984-.469-.984-1.031S5.438 9 6 9zm0 8.016c.563 0 .984.422.984.984s-.422.984-.984.984-.984-.422-.984-.984.422-.984.984-.984zm0-4.032c.563 0 .984.469.984 1.031s-.422.984-.984.984-.984-.422-.984-.984.422-1.031.984-1.031z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;