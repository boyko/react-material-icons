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
        "import_contacts"
      ),
      _react2.default.createElement("path", { d: "M21 18.516V6.985c-1.078-.328-2.297-.469-3.516-.469-1.688 0-4.125.656-5.484 1.5V19.5c1.359-.844 3.797-1.5 5.484-1.5 1.219 0 2.438.188 3.516.516zM17.484 4.5c2.072 0 4.254.517 5.531 1.5v14.578c0 .234-.281.516-.516.516-.094 0-.141 0-.234-.047-1.406-.75-3.141-1.031-4.781-1.031-1.688 0-4.125.656-5.484 1.5-1.453-1.078-3.516-1.5-5.484-1.5-1.453 0-3.422.422-4.781 1.078-.094 0-.141.047-.234.047-.234 0-.516-.234-.516-.469V6c1.453-1.078 3.563-1.5 5.531-1.5S10.547 4.922 12 6c1.453-1.078 3.516-1.5 5.484-1.5z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;