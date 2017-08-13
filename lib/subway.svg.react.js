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
        "subway"
      ),
      _react2.default.createElement("path", { d: "M18 15.891V9c0-2.625-2.672-3-6-3-3 0-6 .375-6 3v6.891a2.62 2.62 0 0 0 2.625 2.625L7.5 19.641v.375h1.688l1.5-1.5h2.813l1.5 1.5h1.5v-.375l-1.125-1.125a2.62 2.62 0 0 0 2.625-2.625zm-.187-13.078c2.672 1.031 4.172 3.234 4.172 6.047v13.125H2.016V8.86c0-2.813 1.5-5.016 4.172-6.047 1.781-.703 3.938-.797 5.813-.797s4.031.094 5.813.797zM7.031 9h9.984v5.016H7.031V9zm.469 6.984c0-.563.422-.984.984-.984s1.031.422 1.031.984-.469 1.031-1.031 1.031-.984-.469-.984-1.031zm6.984 0c0-.563.469-.984 1.031-.984s.984.422.984.984-.422 1.031-.984 1.031-1.031-.469-1.031-1.031z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;