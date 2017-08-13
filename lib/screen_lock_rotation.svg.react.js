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
        "screen_lock_rotation"
      ),
      _react2.default.createElement("path", { d: "M16.781 2.484V3h3.422v-.516c0-.938-.75-1.688-1.688-1.688s-1.734.75-1.734 1.688zM15.984 9A.96.96 0 0 1 15 8.016V3.985a.96.96 0 0 1 .984-.984v-.516c0-1.359 1.172-2.484 2.531-2.484s2.484 1.125 2.484 2.484v.516a.96.96 0 0 1 .984.984v4.031a.96.96 0 0 1-.984.984h-5.016zm-7.5 11.484l1.313-1.313 3.797 3.797-.656.047C6.657 23.015 1.5 18.14.985 11.999h1.5a10.557 10.557 0 0 0 6 8.484zM23.25 12.75c.609.563.609 1.547 0 2.156l-6.375 6.328c-.563.609-1.5.609-2.109 0l-12-12c-.609-.563-.609-1.5 0-2.109L9.094.75c.563-.609 1.547-.609 2.156 0l2.438 2.438-1.406 1.406-2.109-2.063-5.672 5.625L15.845 19.5l5.625-5.672-2.203-2.203 1.406-1.406z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;