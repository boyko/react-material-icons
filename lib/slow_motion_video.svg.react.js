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
        "slow_motion_video"
      ),
      _react2.default.createElement("path", { d: "M21.984 12c0 5.156-3.938 9.422-8.953 9.938v-2.016c3.938-.516 6.984-3.891 6.984-7.922s-3.047-7.406-6.984-7.922V2.062c5.016.516 8.953 4.781 8.953 9.938zM5.672 19.734l1.406-1.406a8.36 8.36 0 0 0 3.938 1.594v2.016a9.9 9.9 0 0 1-5.344-2.203zm-1.594-6.75c.188 1.453.75 2.813 1.594 3.891l-1.406 1.453C3.047 16.828 2.25 15 2.063 12.984h2.016zm1.594-5.906a8.36 8.36 0 0 0-1.594 3.938H2.062a9.9 9.9 0 0 1 2.203-5.344zm5.344-3a8.365 8.365 0 0 0-3.938 1.594L5.672 4.266C7.172 3.047 9 2.25 11.016 2.063v2.016zm2.015 5.719L15.984 12a956.636 956.636 0 0 0-6 4.5z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;