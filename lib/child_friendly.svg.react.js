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
        "child_friendly"
      ),
      _react2.default.createElement("path", { d: "M17.016 20.016c.844 0 1.5-.656 1.5-1.5s-.656-1.5-1.5-1.5-1.5.656-1.5 1.5.656 1.5 1.5 1.5zm-9 0c.844 0 1.5-.656 1.5-1.5s-.656-1.5-1.5-1.5-1.5.656-1.5 1.5.656 1.5 1.5 1.5zm11.297-4.125c.703.656 1.172 1.594 1.172 2.625a3.461 3.461 0 0 1-3.469 3.469 3.494 3.494 0 0 1-3.469-3h-2.109c-.234 1.688-1.641 3-3.422 3-1.922 0-3.516-1.547-3.516-3.469 0-1.313.75-2.484 1.828-3.094-.234-.328-2.109-4.406-2.109-4.406H2.016V9h3.469l.938 2.016h14.578c0 1.828-.656 3.516-1.688 4.875zM12.984 2.016C17.39 2.016 21 5.579 21 9.985h-8.016V2.016z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;