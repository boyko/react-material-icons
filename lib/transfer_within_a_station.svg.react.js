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
        "transfer_within_a_station"
      ),
      _react2.default.createElement("path", { d: "M5.766 8.906L3 23.015h2.109l1.734-8.016 2.156 2.016v6h2.016v-7.547l-2.063-2.063.609-3c1.313 1.594 3.234 2.578 5.438 2.578v-1.969c-1.828 0-3.469-1.031-4.359-2.484l-.938-1.594c-.328-.609-.984-.938-1.688-.938-.234 0-.516.047-.75.141l-5.25 2.156v4.688h1.969V9.655l1.781-.75zm3.75-3.422c-1.078 0-2.016-.891-2.016-1.969s.938-2.016 2.016-2.016 1.969.938 1.969 2.016-.891 1.969-1.969 1.969zm9.984 14.25V18l2.484 2.484-2.484 2.531v-1.781h-5.484v-1.5H19.5zm-3-4.218h5.484v1.5H16.5v1.734l-2.484-2.484 2.484-2.531v1.781z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;