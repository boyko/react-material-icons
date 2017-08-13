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
        "dialpad"
      ),
      _react2.default.createElement("path", { d: "M12 .984c1.078 0 2.016.938 2.016 2.016S13.078 5.016 12 5.016 9.984 4.078 9.984 3 10.922.984 12 .984zm0 6c1.078 0 2.016.938 2.016 2.016s-.938 2.016-2.016 2.016S9.984 10.078 9.984 9 10.922 6.984 12 6.984zm6 0c1.078 0 2.016.938 2.016 2.016s-.938 2.016-2.016 2.016-2.016-.938-2.016-2.016.938-2.016 2.016-2.016zm0 6c1.078 0 2.016.938 2.016 2.016s-.938 2.016-2.016 2.016-2.016-.938-2.016-2.016.938-2.016 2.016-2.016zm-6 0c1.078 0 2.016.938 2.016 2.016s-.938 2.016-2.016 2.016S9.984 16.078 9.984 15s.938-2.016 2.016-2.016zm6-7.968c-1.078 0-2.016-.938-2.016-2.016S16.922.984 18 .984s2.016.938 2.016 2.016S19.078 5.016 18 5.016zM6 12.984c1.078 0 2.016.938 2.016 2.016S7.078 17.016 6 17.016 3.984 16.078 3.984 15 4.922 12.984 6 12.984zm0-6c1.078 0 2.016.938 2.016 2.016S7.078 11.016 6 11.016 3.984 10.078 3.984 9 4.922 6.984 6 6.984zm0-6c1.078 0 2.016.938 2.016 2.016S7.078 5.016 6 5.016 3.984 4.078 3.984 3 4.922.984 6 .984zm6 18c1.078 0 2.016.938 2.016 2.016s-.938 2.016-2.016 2.016S9.984 22.078 9.984 21s.938-2.016 2.016-2.016z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;