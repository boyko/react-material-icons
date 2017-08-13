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
        "gesture"
      ),
      _react2.default.createElement("path", { d: "M13.875 18.563c.703 0 1.875-.844 2.156-3.516-2.156.563-2.906 2.156-2.906 2.766 0 .469.422.75.75.75zM4.594 6.891L2.86 5.203c.234-.281.469-.563.844-.938.234-.234 1.406-1.266 2.719-1.266.891 0 2.531.703 2.531 2.859 0 1.359-.516 2.156-1.313 3.281-.469.656-1.5 2.438-1.828 3.516-.375 1.078-.141 1.922.328 1.922.422 0 .891-.563 1.125-.844.234-.234 1.734-1.969 2.297-2.719.75-.938 2.672-2.813 4.922-2.813 2.953 0 3.891 2.531 4.031 4.172H21v2.484h-2.438c-.422 4.781-3.094 6.141-4.734 6.141-1.781 0-3.188-1.406-3.188-3.094s1.594-4.734 5.391-5.391c-.094-.797-.141-1.781-1.781-1.781-1.266 0-2.859 1.922-4.078 3.422-1.125 1.359-1.969 2.438-3.047 2.766-2.333.737-3.984-1.324-3.984-3.422C3.141 11.06 5.766 7.592 6 7.17c.281-.469.797-1.313.281-1.5-.328-.141-.984.516-1.688 1.219z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;