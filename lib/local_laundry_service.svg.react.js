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
        "local_laundry_service"
      ),
      _react2.default.createElement("path", { d: "M12 20.016c3.328 0 6-2.672 6-6s-2.672-6-6-6-6 2.672-6 6 2.672 6 6 6zM6.984 3.984c-.563 0-.984.469-.984 1.031s.422.984.984.984 1.031-.422 1.031-.984-.469-1.031-1.031-1.031zm3 0c-.563 0-.984.469-.984 1.031s.422.984.984.984 1.031-.422 1.031-.984-.469-1.031-1.031-1.031zM18 2.016c1.125 0 2.016.844 2.016 1.969v16.031c0 1.125-.891 1.969-2.016 1.969H6c-1.125 0-2.016-.844-2.016-1.969V3.985c0-1.125.891-1.969 2.016-1.969h12zM9.188 16.828l5.625-5.672c1.547 1.547 1.547 4.125 0 5.672s-4.078 1.547-5.625 0z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;