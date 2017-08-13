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
        "settings_input_antenna"
      ),
      _react2.default.createElement("path", { d: "M12 .984C18.047.984 23.016 5.953 23.016 12H21c0-4.969-4.031-9-9-9s-9 4.031-9 9H.984C.984 5.953 5.953.984 12 .984zm.984 13.313v3.281L16.406 21 15 22.406l-3-3-3 3L7.594 21l3.422-3.422v-3.281A2.478 2.478 0 0 1 9.516 12c0-1.359 1.125-2.484 2.484-2.484s2.484 1.125 2.484 2.484a2.478 2.478 0 0 1-1.5 2.297zM12 5.016A6.942 6.942 0 0 1 18.984 12h-1.969c0-2.766-2.25-5.016-5.016-5.016S6.983 9.234 6.983 12H5.014a6.942 6.942 0 0 1 6.984-6.984z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;