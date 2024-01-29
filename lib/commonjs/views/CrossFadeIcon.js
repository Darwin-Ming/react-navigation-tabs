"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireDefault(require("react-native-reanimated"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
class TabBarIcon extends React.Component {
  render() {
    const {
      route,
      activeOpacity,
      inactiveOpacity,
      activeTintColor,
      inactiveTintColor,
      renderIcon,
      horizontal,
      style
    } = this.props;

    // We render the icon twice at the same position on top of each other:
    // active and inactive one, so we can fade between them.
    return /*#__PURE__*/React.createElement(_reactNative.View, {
      style: style
    }, /*#__PURE__*/React.createElement(_reactNativeReanimated.default.View, {
      style: [styles.icon, {
        opacity: activeOpacity
      }]
    }, renderIcon({
      route,
      focused: true,
      horizontal,
      tintColor: activeTintColor
    })), /*#__PURE__*/React.createElement(_reactNativeReanimated.default.View, {
      style: [styles.icon, {
        opacity: inactiveOpacity
      }]
    }, renderIcon({
      route,
      focused: false,
      horizontal,
      tintColor: inactiveTintColor
    })));
  }
}
exports.default = TabBarIcon;
const styles = _reactNative.StyleSheet.create({
  icon: {
    // We render the icon twice at the same position on top of each other:
    // active and inactive one, so we can fade between them:
    // Cover the whole iconContainer:
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    // Workaround for react-native >= 0.54 layout bug
    minWidth: 25
  }
});
//# sourceMappingURL=CrossFadeIcon.js.map