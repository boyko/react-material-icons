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
        "traffic"
      ),
      _react2.default.createElement("path", { d: "M12 9c1.125 0 2.016-.938 2.016-2.016 0-1.125-.938-1.969-2.016-1.969-1.125 0-2.016.844-2.016 1.969C9.984 8.062 10.875 9 12 9zm0 5.016c1.125 0 2.016-.938 2.016-2.016S13.078 9.984 12 9.984c-1.125 0-2.016.938-2.016 2.016s.891 2.016 2.016 2.016zm0 4.968c1.125 0 2.016-.891 2.016-1.969s-.938-2.016-2.016-2.016c-1.125 0-2.016.938-2.016 2.016s.891 1.969 2.016 1.969zm8.016-9c0 1.875-1.266 3.422-3 3.891V15h3c0 1.875-1.266 3.375-3 3.844v1.172c0 .563-.469.984-1.031.984H8.016c-.563 0-1.031-.422-1.031-.984v-1.172c-1.734-.469-3-1.969-3-3.844h3v-1.125c-1.734-.469-3-2.016-3-3.891h3V8.859c-1.734-.469-3-1.969-3-3.844h3V3.984c0-.563.469-.984 1.031-.984h7.969c.563 0 1.031.422 1.031.984v1.031h3c0 1.875-1.266 3.375-3 3.844v1.125h3z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;