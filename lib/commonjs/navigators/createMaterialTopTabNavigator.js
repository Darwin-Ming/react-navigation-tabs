"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNativeTabView = require("react-native-tab-view");
var _createTabNavigator = _interopRequireDefault(require("../utils/createTabNavigator"));
var _MaterialTopTabBar = _interopRequireDefault(require("../views/MaterialTopTabBar"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class MaterialTabView extends React.PureComponent {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "renderTabBar", props => {
      const {
        state
      } = this.props.navigation;
      const route = state.routes[state.index];
      const {
        descriptors
      } = this.props;
      const descriptor = descriptors[route.key];
      const options = descriptor.options;
      const tabBarVisible = options.tabBarVisible == null ? true : options.tabBarVisible;
      const {
        navigation,
        getLabelText,
        getAccessibilityLabel,
        getTestID,
        renderIcon,
        onTabPress,
        onTabLongPress,
        tabBarComponent: TabBarComponent = _MaterialTopTabBar.default,
        tabBarPosition,
        tabBarOptions,
        screenProps
      } = this.props;
      if (TabBarComponent === null || !tabBarVisible) {
        return null;
      }
      return /*#__PURE__*/React.createElement(TabBarComponent, _extends({}, tabBarOptions, props, {
        tabBarPosition: tabBarPosition,
        screenProps: screenProps,
        navigation: navigation,
        getLabelText: getLabelText,
        getAccessibilityLabel: getAccessibilityLabel,
        getTestID: getTestID,
        renderIcon: renderIcon,
        onTabPress: onTabPress,
        onTabLongPress: onTabLongPress
      }));
    });
  }
  render() {
    const {
      /* eslint-disable @typescript-eslint/no-unused-vars */
      getLabelText,
      getAccessibilityLabel,
      getTestID,
      renderIcon,
      onTabPress,
      onTabLongPress,
      screenProps,
      tabBarComponent,
      tabBarOptions,
      /* eslint-enable @typescript-eslint/no-unused-vars */
      lazyPlaceholderComponent,
      pagerComponent,
      navigation,
      descriptors,
      ...rest
    } = this.props;
    const {
      state
    } = navigation;
    const route = state.routes[state.index];
    const descriptor = descriptors[route.key];
    const options = descriptor.options;
    let swipeEnabled =
    // @ts-ignore
    options.swipeEnabled == null ? this.props.swipeEnabled : options.swipeEnabled;
    if (typeof swipeEnabled === 'function') {
      swipeEnabled = swipeEnabled(state);
    }
    return /*#__PURE__*/React.createElement(_reactNativeTabView.TabView, _extends({}, rest, {
      navigationState: navigation.state,
      swipeEnabled: swipeEnabled,
      renderTabBar: this.renderTabBar,
      renderLazyPlaceholder: lazyPlaceholderComponent !== undefined ? props => /*#__PURE__*/React.createElement(lazyPlaceholderComponent, props) : undefined,
      renderPager: pagerComponent !== undefined ? props => /*#__PURE__*/React.createElement(pagerComponent, props) : undefined
    }));
  }
}
var _default = exports.default = (0, _createTabNavigator.default)(MaterialTabView);
//# sourceMappingURL=createMaterialTopTabNavigator.js.map