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
        "healing"
      ),
      _react2.default.createElement("path", { d: "M16.641 20.344l3.656-3.656-3.656-3.609-3.609 3.656zm-2.625-9.328c-.563 0-1.031.422-1.031.984s.469.984 1.031.984S15 12.562 15 12s-.422-.984-.984-.984zM12 15c.563 0 .984-.422.984-.984s-.422-1.031-.984-1.031-.984.469-.984 1.031.422.984.984.984zm-2.016-2.016c.563 0 1.031-.422 1.031-.984s-.469-.984-1.031-.984S9 11.438 9 12s.422.984.984.984zm-2.671-2.015l3.609-3.656-3.609-3.609L3.657 7.36zM12 9c-.563 0-.984.422-.984.984s.422 1.031.984 1.031.984-.469.984-1.031S12.562 9 12 9zm5.719 3l3.984 3.984a1.02 1.02 0 0 1 0 1.406l-4.313 4.359c-.188.188-.422.281-.703.281s-.563-.094-.75-.281l-3.938-3.984-3.984 3.984a1.02 1.02 0 0 1-1.406 0L2.25 17.39a1.02 1.02 0 0 1 0-1.406L6.234 12 2.25 8.062c-.375-.375-.375-1.078 0-1.453l4.359-4.313c.188-.188.469-.281.703-.281.281 0 .516.094.703.281l3.984 3.984 3.938-3.984c.375-.375 1.078-.375 1.453 0l4.313 4.313c.375.375.375 1.078 0 1.453z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;