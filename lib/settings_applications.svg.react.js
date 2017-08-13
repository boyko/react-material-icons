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
        "settings_applications"
      ),
      _react2.default.createElement("path", { d: "M17.25 12c0-.234 0-.469-.047-.703l1.5-1.125c.141-.094.141-.328.047-.469l-1.406-2.438c-.094-.141-.281-.188-.422-.141l-1.734.703a5.961 5.961 0 0 0-1.172-.703l-.281-1.828c-.047-.141-.141-.281-.328-.281h-2.813c-.188 0-.281.094-.328.281l-.281 1.875c-.422.188-.797.375-1.172.656l-1.734-.703c-.141-.047-.328.047-.422.188L5.251 9.703c-.094.141-.094.375.047.469l1.5 1.125c-.047.234-.047.469-.047.703s0 .469.047.703l-1.5 1.125c-.141.094-.141.328-.047.469l1.406 2.438c.094.141.281.188.422.141l1.734-.703c.375.281.75.516 1.172.703l.281 1.828c.047.141.141.281.328.281h2.813c.188 0 .281-.094.328-.281l.281-1.875c.422-.188.797-.375 1.172-.656l1.734.703c.141.047.328-.047.422-.188l1.406-2.391c.094-.141.094-.375-.047-.469l-1.5-1.125c.047-.234.047-.469.047-.703zm1.734-9C20.109 3 21 3.938 21 5.016v13.969c0 1.078-.891 2.016-2.016 2.016H5.015c-1.125 0-2.016-.938-2.016-2.016V5.016C2.999 3.938 3.89 3 5.015 3h13.969zM12 9.984c1.078 0 2.016.938 2.016 2.016s-.938 2.016-2.016 2.016S9.984 13.078 9.984 12 10.922 9.984 12 9.984z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;