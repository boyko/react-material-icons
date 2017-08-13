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
        "shopping_basket"
      ),
      _react2.default.createElement("path", { d: "M12 17.016c1.078 0 2.016-.938 2.016-2.016s-.938-2.016-2.016-2.016-2.016.938-2.016 2.016.938 2.016 2.016 2.016zM9 9h6l-3-4.406zm8.203 0h4.781c.563 0 1.031.422 1.031.984-.812 3.235-1.727 6.366-2.578 9.563A1.968 1.968 0 0 1 18.515 21H5.484a1.968 1.968 0 0 1-1.922-1.453l-2.531-9.281c-.047-.094-.047-.188-.047-.281 0-.563.469-.984 1.031-.984h4.781l4.359-6.563c.188-.281.516-.422.844-.422s.656.141.844.422z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;