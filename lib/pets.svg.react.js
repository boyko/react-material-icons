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
        "pets"
      ),
      _react2.default.createElement("path", { d: "M17.344 14.859c1.313 1.313 2.953 2.719 2.625 4.781-.281 1.031-1.031 2.063-2.344 2.344-.75.141-3.047-.422-5.531-.422h-.188c-2.484 0-4.781.563-5.531.422-1.313-.281-2.063-1.313-2.344-2.344-.281-2.016 1.313-3.469 2.625-4.781.891-1.031 1.594-1.875 2.484-2.906.469-.563 1.031-1.078 1.734-1.313a.867.867 0 0 1 .328-.094c.281-.047.516-.047.797-.047s.563 0 .797.047c.094 0 .234.047.328.094.703.234 1.266.75 1.734 1.313.891 1.031 1.594 1.875 2.484 2.906zm-.328-5.343c0-1.359 1.125-2.531 2.484-2.531s2.484 1.172 2.484 2.531S20.859 12 19.5 12s-2.484-1.125-2.484-2.484zm-4.5-4.032C12.516 4.125 13.641 3 15 3s2.484 1.125 2.484 2.484S16.359 8.015 15 8.015s-2.484-1.172-2.484-2.531zm-6 0C6.516 4.125 7.641 3 9 3s2.484 1.125 2.484 2.484S10.359 8.015 9 8.015 6.516 6.843 6.516 5.484zm-4.5 4.032c0-1.359 1.125-2.531 2.484-2.531s2.484 1.172 2.484 2.531S5.859 12 4.5 12s-2.484-1.125-2.484-2.484z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;