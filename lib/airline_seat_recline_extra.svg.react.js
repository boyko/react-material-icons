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
        "airline_seat_recline_extra"
      ),
      _react2.default.createElement("path", { d: "M16.219 15l5.766 4.5-1.5 1.5-3.797-3H9.844a3.013 3.013 0 0 1-2.953-2.438L5.532 9.656c-.188-1.219.609-2.391 1.828-2.625h.047c.712-.102 1.327.096 1.734.422l1.641 1.266c1.266.984 3.047 1.594 4.688 1.266v2.156c-1.875.328-3.563-.328-5.156-1.219L11.345 15h4.875zm-.235 3.984V21H8.953c-2.484 0-4.594-1.781-4.969-4.219L2.015 6.984h1.969l1.969 9.469a3.026 3.026 0 0 0 3 2.531h7.031zM5.344 5.625c-.891-.656-1.078-1.875-.469-2.766s1.875-1.125 2.766-.516c.891.656 1.125 1.922.516 2.813-.656.891-1.922 1.078-2.813.469z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;