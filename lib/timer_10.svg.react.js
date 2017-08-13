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
        "timer_10"
      ),
      _react2.default.createElement("path", { d: "M12.891 13.219v-2.531c0-1.086-.107-1.881-.469-2.484-.25-.499-.713-.703-1.406-.703a2.45 2.45 0 0 0-.844.141c-.908.545-1.078 1.593-1.078 3.094v2.484c0 .609 0 1.125.094 1.547s.281.703.422.984c.262.524.664.75 1.406.75.723 0 1.154-.245 1.406-.75.141-.281.281-.563.375-.984s.094-.938.094-1.547zm-5.766-2.203c0-3.006.97-5.109 3.891-5.109 1.216 0 2.243.393 2.813 1.125.713.917 1.031 2.276 1.031 3.984v1.922c0 2.996-.921 5.156-3.844 5.156-2.911 0-3.891-2.16-3.891-5.156v-1.922zm13.313-.563c-.765 0-1.406.313-1.406 1.078 0 .682.366.728.891.938.234.094.563.188.891.234.516.094.891.234 1.313.375s.75.375 1.031.563.469.469.609.75.234.563.234.984c0 1.449-.942 2.064-2.063 2.438-.422.141-.891.188-1.406.188-1.685 0-2.975-.675-3.469-1.828a2.546 2.546 0 0 1-.234-1.031h1.922c0 .998.8 1.406 1.781 1.406.876 0 1.547-.276 1.547-1.078 0-.636-.399-.788-.891-.984-.597-.239-1.636-.426-2.25-.656-.375-.141-.656-.328-.938-.516-.518-.345-.891-.871-.891-1.688 0-1.292.955-2.1 1.969-2.438.422-.141.844-.188 1.359-.188 1.919 0 3.516.897 3.516 2.766h-1.969c0-.576-.368-1.053-.844-1.172-.188-.047-.469-.141-.703-.141zM0 7.734L4.734 6h.281v12H2.999V8.391l-3 1.031V7.734z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;