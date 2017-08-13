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
        "pool"
      ),
      _react2.default.createElement("path", { d: "M14.016 5.484C14.016 4.125 15.141 3 16.5 3s2.484 1.125 2.484 2.484-1.125 2.531-2.484 2.531-2.484-1.172-2.484-2.531zM8.672 12c-.563 0-.797-.141-1.172-.375-.188-.141-.422-.234-.75-.375l3.234-3.234L9 6.985c-1.125-1.125-2.156-1.5-3.984-1.5V3.001c2.484 0 3.938.469 5.484 2.016l6.422 6.375c-.141.094-.281.188-.422.234-.375.234-.609.375-1.172.375s-.75-.141-1.125-.375c-.469-.281-1.078-.609-2.203-.609s-1.734.328-2.203.609c-.375.234-.563.375-1.125.375zm13.312 4.5c-1.125 0-1.688-.375-2.156-.656-.375-.234-.609-.328-1.172-.328s-.75.094-1.125.328c-.469.281-1.078.656-2.203.656s-1.688-.375-2.156-.656c-.375-.234-.609-.328-1.172-.328s-.75.094-1.125.328c-.469.281-1.078.656-2.203.656s-1.688-.375-2.156-.656c-.375-.234-.609-.328-1.172-.328s-.75.094-1.125.328c-.469.281-1.078.656-2.203.656v-2.016c.563 0 .75-.094 1.125-.328.469-.281 1.078-.656 2.203-.656s1.688.375 2.156.656c.375.234.609.328 1.172.328s.75-.094 1.125-.328c.469-.281 1.078-.656 2.203-.656s1.688.375 2.156.656c.375.234.609.328 1.172.328s.75-.094 1.125-.328c.469-.281 1.078-.656 2.203-.656s1.688.375 2.156.656c.375.234.609.328 1.172.328V16.5zm0 4.5c-1.125 0-1.688-.375-2.156-.656-.375-.234-.609-.328-1.172-.328s-.75.094-1.125.328c-.469.281-1.078.656-2.203.656s-1.688-.375-2.156-.656c-.375-.234-.609-.328-1.172-.328s-.75.094-1.125.328c-.469.281-1.078.656-2.203.656s-1.734-.375-2.203-.656c-.375-.234-.563-.328-1.125-.328s-.797.094-1.172.328c-.469.281-1.031.656-2.156.656v-2.016c.563 0 .75-.094 1.125-.328C3.61 18.375 4.219 18 5.344 18s1.688.375 2.156.656c.375.234.609.328 1.172.328s.75-.094 1.125-.328C10.266 18.375 10.875 18 12 18s1.734.375 2.203.656c.375.234.563.328 1.125.328s.797-.094 1.172-.328c.469-.281 1.031-.656 2.156-.656s1.734.375 2.203.656c.375.234.563.328 1.125.328V21z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;