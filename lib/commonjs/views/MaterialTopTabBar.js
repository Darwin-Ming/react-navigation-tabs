"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeTabView = require("react-native-tab-view");
var _reactNativeReanimated = _interopRequireDefault(require("react-native-reanimated"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class TabBarTop extends React.PureComponent {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "_renderLabel", ({
      route,
      focused,
      color
    }) => {
      const {
        showLabel,
        upperCaseLabel,
        labelStyle,
        allowFontScaling
      } = this.props;
      if (showLabel === false) {
        return null;
      }
      const label = this.props.getLabelText({
        route
      });
      if (typeof label === 'string') {
        return /*#__PURE__*/React.createElement(_reactNativeReanimated.default.Text, {
          style: [styles.label, {
            color
          }, labelStyle],
          allowFontScaling: allowFontScaling
        }, upperCaseLabel ? label.toUpperCase() : label);
      }
      if (typeof label === 'function') {
        return label({
          focused,
          tintColor: color
        });
      }
      return label;
    });
    _defineProperty(this, "_renderIcon", ({
      route,
      focused,
      color
    }) => {
      const {
        renderIcon,
        showIcon,
        iconStyle
      } = this.props;
      if (showIcon === false) {
        return null;
      }
      return /*#__PURE__*/React.createElement(_reactNative.View, {
        style: [styles.icon, iconStyle]
      }, renderIcon({
        route,
        focused,
        tintColor: color
      }));
    });
  }
  render() {
    const {
      navigation,
      activeTintColor,
      inactiveTintColor,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      renderIcon,
      getLabelText,
      allowFontScaling,
      showLabel,
      showIcon,
      upperCaseLabel,
      tabBarPosition,
      screenProps,
      iconStyle,
      /* eslint-enable @typescript-eslint/no-unused-vars */
      ...rest
    } = this.props;
    return /*#__PURE__*/React.createElement(_reactNativeTabView.TabBar, _extends({}, rest, {
      activeColor: activeTintColor,
      inactiveColor: inactiveTintColor,
      navigationState: navigation.state,
      renderIcon: this._renderIcon,
      renderLabel: this._renderLabel
    }));
  }
}
exports.default = TabBarTop;
_defineProperty(TabBarTop, "defaultProps", {
  activeTintColor: 'rgba(255, 255, 255, 1)',
  inactiveTintColor: 'rgba(255, 255, 255, 0.7)',
  showIcon: false,
  showLabel: true,
  upperCaseLabel: true,
  allowFontScaling: true
});
const styles = _reactNative.StyleSheet.create({
  icon: {
    height: 24,
    width: 24
  },
  label: {
    textAlign: 'center',
    fontSize: 13,
    margin: 4,
    backgroundColor: 'transparent'
  }
});
//# sourceMappingURL=MaterialTopTabBar.js.map