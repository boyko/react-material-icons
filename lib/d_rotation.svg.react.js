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
        "d_rotation"
      ),
      _react2.default.createElement("path", { d: "M12 0c6.281 0 11.438 4.828 11.953 10.969h-1.5c-.328-3.75-2.672-6.891-5.953-8.438l-1.359 1.313L11.344.047zm4.547 11.813c0-1.638-.641-2.672-2.203-2.672h-.938v5.766h.891c1.202 0 1.888-.654 2.156-1.594.094-.328.094-.703.094-1.125v-.375zm-2.203-3.797c1.79 0 2.856.906 3.375 2.203.188.469.234 1.031.234 1.594v.375c0 1.238-.355 2.136-.984 2.766s-1.432 1.031-2.672 1.031H12V8.016h2.344zm-4.641 3.89c.717.287 1.313.855 1.313 1.828 0 .375-.094.656-.234.938s-.281.563-.516.75c-.44.352-1.104.563-1.875.563-1.458 0-2.531-.738-2.531-2.203h1.266c0 .724.544 1.172 1.266 1.172.838 0 1.313-.4 1.313-1.266 0-.883-.581-1.266-1.453-1.266h-.75v-1.031h.75c.811 0 1.359-.376 1.359-1.172 0-.775-.414-1.172-1.219-1.172-.677 0-1.172.402-1.172 1.078H5.907c0-.698.354-1.151.703-1.5.465-.372.98-.609 1.781-.609 1.202 0 1.893.458 2.297 1.266.141.281.188.563.188.938 0 .853-.578 1.391-1.172 1.688zM7.5 21.469l1.359-1.313 3.797 3.797L12 24C5.719 24 .562 19.125.047 12.984h1.5c.375 3.75 2.672 6.938 5.953 8.484z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;