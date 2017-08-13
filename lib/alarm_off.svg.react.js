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
        "alarm_off"
      ),
      _react2.default.createElement("path", { d: "M8.016 3.281l-.844.703-1.453-1.406.891-.703zm8.437 15.094L6.609 8.531a7.08 7.08 0 0 0-1.594 4.453c0 3.891 3.094 7.031 6.984 7.031 1.688 0 3.234-.656 4.453-1.641zM2.906 2.297C9.06 8.44 15.219 14.578 21.375 20.719l-1.266 1.266-2.203-2.203c-1.594 1.359-3.656 2.203-5.906 2.203-4.969 0-9-4.031-9-9 0-2.25.844-4.266 2.203-5.859l-.797-.797-1.125.938-1.406-1.453L3 4.923 1.641 3.564zm19.078 3.422l-1.266 1.547-4.594-3.891 1.266-1.5zM12 6c-.844 0-1.641.141-2.391.422l-1.547-1.5c1.172-.563 2.531-.938 3.938-.938 4.969 0 9 4.031 9 9a9.154 9.154 0 0 1-.891 3.938l-1.547-1.5a7.02 7.02 0 0 0 .422-2.438A6.942 6.942 0 0 0 12 6z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;