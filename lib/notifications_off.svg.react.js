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
        "notifications_off"
      ),
      _react2.default.createElement("path", { d: "M18 14.672L9.047 5.25c.234-.094.469-.234.703-.328h.047l.281-.141c.141-.047.281-.047.422-.094v-.703c0-.844.656-1.5 1.5-1.5s1.5.656 1.5 1.5v.703c2.859.703 4.5 3.234 4.5 6.328v3.656zm-6 7.312c-1.125 0-2.016-.844-2.016-1.969h4.031c0 1.125-.891 1.969-2.016 1.969zM7.828 6.141c4.388 4.534 8.797 9.047 13.172 13.594l-1.266 1.266-2.016-2.016H3.984v-.984L6 15.985v-5.016c0-1.266.281-2.438.797-3.422L3.984 4.781 5.25 3.468z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;