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
        "fingerprint"
      ),
      _react2.default.createElement("path", { d: "M14.906 21.984h-.141c-1.594-.422-2.625-1.031-3.703-2.109a7.266 7.266 0 0 1-2.156-5.203c0-1.641 1.359-2.953 3.047-2.953s3.094 1.313 3.094 2.953c0 1.078.891 1.922 2.063 1.922s2.109-.844 2.109-1.922c0-3.75-3.281-6.844-7.266-6.844-2.859 0-5.438 1.594-6.609 4.031-.375.797-.563 1.781-.563 2.813 0 .797.047 2.016.656 3.609.215.644-.725.859-.938.328-.469-1.313-.75-2.578-.75-3.938 0-1.219.234-2.297.703-3.234 1.313-2.813 4.266-4.641 7.5-4.641 4.547 0 8.25 3.563 8.25 7.875 0 1.641-1.406 2.906-3.094 2.906s-3.047-1.266-3.047-2.906c0-1.078-.938-1.969-2.109-1.969s-2.063.891-2.063 1.969c0 1.688.656 3.281 1.875 4.5.938.938 1.875 1.453 3.281 1.828.281.047.375.328.328.609-.047.234-.281.375-.469.375zm-2.484-7.312c0 2.286 1.889 4.266 4.5 4.266.467 0 1.536-.345 1.641.281a.53.53 0 0 1-.422.609c-.563.094-1.078.094-1.219.094-1.172 0-2.25-.281-3.094-.891-1.5-1.031-2.391-2.625-2.391-4.359 0-.281.234-.516.516-.516s.469.234.469.516zM9.75 21.797a.425.425 0 0 1-.328-.141c-.891-.891-1.359-1.453-2.016-2.672-.703-1.219-1.078-2.719-1.078-4.313 0-2.953 2.531-5.391 5.672-5.391s5.672 2.438 5.672 5.391c0 .281-.234.469-.516.469s-.516-.188-.516-.469c0-2.438-2.063-4.406-4.641-4.406s-4.641 1.969-4.641 4.406c0 1.453.281 2.766.891 3.844.656 1.172 1.125 1.641 1.875 2.438a.509.509 0 0 1 0 .703.531.531 0 0 1-.375.141zM3.516 9.703c-.413 0-.651-.368-.422-.75.984-1.406 2.25-2.531 3.75-3.281 3.141-1.641 7.172-1.641 10.313 0a9.96 9.96 0 0 1 3.75 3.234c.141.234.094.563-.141.703s-.563.094-.703-.141c-.891-1.266-2.016-2.203-3.375-2.906-2.859-1.453-6.516-1.5-9.375 0-1.359.703-2.531 1.688-3.422 2.953a.426.426 0 0 1-.375.188zm14.297-5.25c-.094 0-.188 0-.234-.047C15.657 3.422 13.97 3 12.001 3s-3.891.469-5.578 1.406c-.548.329-1.014-.563-.469-.891 1.875-1.031 3.891-1.5 6.047-1.5 2.109 0 3.984.469 6.047 1.5.427.256.244.938-.234.938z" })
    );
  };

  return SVG;
}(_react2.default.Component);

exports.default = SVG;