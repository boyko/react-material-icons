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
        "assignment_ind"
      ),
      _react2.default.createElement("path", { d: "M18 18.984v-1.406c0-2.016-3.984-3.094-6-3.094s-6 1.078-6 3.094v1.406h12zm-6-12c-1.641 0-3 1.359-3 3s1.359 3 3 3 3-1.359 3-3-1.359-3-3-3zM12 3c-.563 0-.984.422-.984.984s.422 1.031.984 1.031.984-.469.984-1.031S12.562 3 12 3zm6.984 0C20.062 3 21 3.938 21 5.016v13.969c0 1.078-.938 2.016-2.016 2.016H5.015c-1.078 0-2.016-.938-2.016-2.016V5.016C2.999 3.938 3.937 3 5.015 3h4.172C9.609 1.828 10.687.984 12 .984s2.391.844 2.813 2.016h4.172z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;