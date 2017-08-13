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
        "local_florist"
      ),
      _react2.default.createElement("path", { d: "M12 5.484c-1.359 0-2.484 1.172-2.484 2.531s1.125 2.484 2.484 2.484 2.484-1.125 2.484-2.484S13.359 5.484 12 5.484zm-6.422 4.782c0-.984.609-1.828 1.453-2.25-.844-.422-1.453-1.266-1.453-2.25 0-1.359 1.172-2.531 2.531-2.531.516 0 .984.188 1.406.469v-.188c0-1.359 1.125-2.531 2.484-2.531s2.484 1.172 2.484 2.531v.188c.422-.281.891-.469 1.406-.469 1.359 0 2.531 1.172 2.531 2.531 0 .984-.609 1.828-1.453 2.25.844.422 1.453 1.266 1.453 2.25 0 1.359-1.172 2.484-2.531 2.484a2.48 2.48 0 0 1-1.406-.422v.188c0 1.359-1.125 2.484-2.484 2.484s-2.484-1.125-2.484-2.484v-.188a2.483 2.483 0 0 1-1.406.422c-1.359 0-2.531-1.125-2.531-2.484zM12 21.984c-4.969 0-9-4.031-9-9 4.969 0 9 4.031 9 9zm0 0c0-4.969 4.031-9 9-9 0 4.969-4.031 9-9 9z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;