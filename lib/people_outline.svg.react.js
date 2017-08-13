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
        "people_outline"
      ),
      _react2.default.createElement("path", { d: "M16.5 6.516c-1.078 0-2.016.891-2.016 1.969s.938 2.016 2.016 2.016 2.016-.938 2.016-2.016-.938-1.969-2.016-1.969zm0 5.484c-1.922 0-3.516-1.594-3.516-3.516s1.594-3.469 3.516-3.469 3.516 1.547 3.516 3.469S18.422 12 16.5 12zm-9-5.484c-1.078 0-2.016.891-2.016 1.969s.938 2.016 2.016 2.016 2.016-.938 2.016-2.016S8.578 6.516 7.5 6.516zM7.5 12c-1.922 0-3.516-1.594-3.516-3.516S5.578 5.015 7.5 5.015s3.516 1.547 3.516 3.469S9.422 12 7.5 12zm14.016 5.484v-1.219c0-.563-2.578-1.781-5.016-1.781-1.078 0-2.109.281-3 .563.328.375.516.75.516 1.219v1.219h7.5zm-9 0v-1.219c0-.563-2.578-1.781-5.016-1.781s-5.016 1.219-5.016 1.781v1.219h10.031zm3.984-4.5c2.156 0 6.516 1.125 6.516 3.281v2.719H.985v-2.719c0-2.156 4.359-3.281 6.516-3.281 1.219 0 3.047.375 4.5 1.031 1.453-.656 3.281-1.031 4.5-1.031z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;