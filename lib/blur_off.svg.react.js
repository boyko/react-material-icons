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
        "blur_off"
      ),
      _react2.default.createElement("path", { d: "M3 13.5c.281 0 .516.234.516.516s-.234.469-.516.469-.516-.188-.516-.469.234-.516.516-.516zm3 3.516c.563 0 .984.422.984.984s-.422.984-.984.984-.984-.422-.984-.984.422-.984.984-.984zm3.984 3.468c.281 0 .516.234.516.516s-.234.516-.516.516-.469-.234-.469-.516.188-.516.469-.516zM3 9.516c.281 0 .516.188.516.469s-.234.516-.516.516-.516-.234-.516-.516.234-.469.516-.469zm3 3.468c.563 0 .984.469.984 1.031s-.422.984-.984.984-.984-.422-.984-.984.422-1.031.984-1.031zm15 .516c.281 0 .516.234.516.516s-.234.469-.516.469-.516-.188-.516-.469.234-.516.516-.516zM9.984 17.016c.563 0 1.031.422 1.031.984s-.469.984-1.031.984S9 18.562 9 18s.422-.984.984-.984zM2.484 5.25L3.75 3.984 20.016 20.25l-1.313 1.266-3.75-3.797A.594.594 0 0 1 15 18c0 .563-.422.984-.984.984s-1.031-.422-1.031-.984.469-.984 1.031-.984a.59.59 0 0 1 .281.047l-2.813-2.813c-.094.703-.75 1.266-1.5 1.266a1.48 1.48 0 0 1-1.5-1.5c0-.75.563-1.406 1.266-1.5L6.937 9.703a.594.594 0 0 1 .047.281c0 .563-.422 1.031-.984 1.031s-.984-.469-.984-1.031S5.438 9 6 9l.281.047zm11.532 15.234c.281 0 .469.234.469.516s-.188.516-.469.516-.516-.234-.516-.516.234-.516.516-.516zM18 6.984c-.563 0-.984-.422-.984-.984s.422-.984.984-.984.984.422.984.984-.422.984-.984.984zm0 4.032c-.563 0-.984-.469-.984-1.031s.422-.984.984-.984.984.422.984.984-.422 1.031-.984 1.031zM18 15c-.563 0-.984-.422-.984-.984s.422-1.031.984-1.031.984.469.984 1.031S18.562 15 18 15zM9.984 6.984C9.421 6.984 9 6.562 9 6s.422-.984.984-.984 1.031.422 1.031.984-.469.984-1.031.984zM21 10.5c-.281 0-.516-.234-.516-.516s.234-.469.516-.469.516.188.516.469-.234.516-.516.516zM9.984 3.516c-.281 0-.469-.234-.469-.516s.188-.516.469-.516.516.234.516.516-.234.516-.516.516zm4.032 0c-.281 0-.516-.234-.516-.516s.234-.516.516-.516.469.234.469.516-.188.516-.469.516zm-.235 7.968a1.492 1.492 0 0 1-1.266-1.266v-.234c0-.844.656-1.5 1.5-1.5s1.5.656 1.5 1.5-.656 1.5-1.5 1.5h-.234zm.235-4.5c-.563 0-1.031-.422-1.031-.984s.469-.984 1.031-.984S15 5.438 15 6s-.422.984-.984.984z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;