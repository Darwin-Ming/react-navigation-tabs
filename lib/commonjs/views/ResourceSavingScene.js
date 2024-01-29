"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeScreens = require("react-native-screens");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const FAR_FAR_AWAY = 30000; // this should be big enough to move the whole view out of its container

class ResourceSavingScene extends React.Component {
  render() {
    // react-native-screens is buggy on web
    if (_reactNativeScreens.screensEnabled !== null && _reactNativeScreens.screensEnabled !== void 0 && (0, _reactNativeScreens.screensEnabled)() && this.props.enabled && _reactNative.Platform.OS !== 'web') {
      const {
        isVisible,
        ...rest
      } = this.props;
      if (_reactNativeScreens.shouldUseActivityState) {
        return (
          /*#__PURE__*/
          // @ts-expect-error: there was an `active` prop and no `activityState` in older version and stackPresentation was required
          React.createElement(_reactNativeScreens.Screen, _extends({
            activityState: isVisible ? 2 : 0
          }, rest))
        );
      } else {
        return (
          /*#__PURE__*/
          // @ts-expect-error: there was an `active` prop and no `activityState` in older version and stackPresentation was required
          React.createElement(_reactNativeScreens.Screen, _extends({
            active: isVisible ? 1 : 0
          }, rest))
        );
      }
    }
    const {
      isVisible,
      children,
      style,
      ...rest
    } = this.props;
    return /*#__PURE__*/React.createElement(_reactNative.View, _extends({
      style: [styles.container, _reactNative.Platform.OS === 'web' ? {
        display: isVisible ? 'flex' : 'none'
      } : null, style],
      collapsable: false,
      removeClippedSubviews:
      // On iOS, set removeClippedSubviews to true only when not focused
      // This is an workaround for a bug where the clipped view never re-appears
      _reactNative.Platform.OS === 'ios' ? !isVisible : true,
      pointerEvents: isVisible ? 'auto' : 'none'
    }, rest), /*#__PURE__*/React.createElement(_reactNative.View, {
      style: isVisible ? styles.attached : styles.detached
    }, children));
  }
}
exports.default = ResourceSavingScene;
const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden'
  },
  attached: {
    flex: 1
  },
  detached: {
    flex: 1,
    top: FAR_FAR_AWAY
  }
});
//# sourceMappingURL=ResourceSavingScene.js.map