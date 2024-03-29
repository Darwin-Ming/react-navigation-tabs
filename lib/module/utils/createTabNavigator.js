function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from 'react';
import { TabRouter, StackActions, SceneView, createNavigator, SwitchActions } from 'react-navigation';
export default function createTabNavigator(TabView) {
  class NavigationView extends React.Component {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "_renderScene", ({
        route
      }) => {
        const {
          screenProps,
          descriptors
        } = this.props;
        const descriptor = descriptors[route.key];
        const TabComponent = descriptor.getComponent();
        return /*#__PURE__*/React.createElement(SceneView, {
          screenProps: screenProps,
          navigation: descriptor.navigation,
          component: TabComponent
        });
      });
      _defineProperty(this, "_renderIcon", ({
        route,
        focused,
        tintColor,
        horizontal = false
      }) => {
        const {
          descriptors
        } = this.props;
        const descriptor = descriptors[route.key];
        const options = descriptor.options;
        if (options.tabBarIcon) {
          return typeof options.tabBarIcon === 'function' ? options.tabBarIcon({
            focused,
            tintColor,
            horizontal
          }) : options.tabBarIcon;
        }
        return null;
      });
      _defineProperty(this, "_getLabelText", ({
        route
      }) => {
        const {
          descriptors
        } = this.props;
        const descriptor = descriptors[route.key];
        const options = descriptor.options;
        if (options.tabBarLabel) {
          return options.tabBarLabel;
        }
        if (typeof options.title === 'string') {
          return options.title;
        }
        return route.routeName;
      });
      _defineProperty(this, "_getAccessibilityLabel", ({
        route
      }) => {
        const {
          descriptors
        } = this.props;
        const descriptor = descriptors[route.key];
        const options = descriptor.options;
        if (typeof options.tabBarAccessibilityLabel !== 'undefined') {
          return options.tabBarAccessibilityLabel;
        }
        const label = this._getLabelText({
          route
        });
        if (typeof label === 'string') {
          const {
            routes
          } = this.props.navigation.state;
          return `${label}, tab, ${routes.indexOf(route) + 1} of ${routes.length}`;
        }
        return undefined;
      });
      _defineProperty(this, "_getTestID", ({
        route
      }) => {
        const {
          descriptors
        } = this.props;
        const descriptor = descriptors[route.key];
        const options = descriptor.options;
        return options.tabBarTestID;
      });
      _defineProperty(this, "_makeDefaultHandler", ({
        route,
        navigation
      }) => () => {
        if (navigation.isFocused()) {
          if (route.hasOwnProperty('index') && route.index > 0) {
            // If current tab has a nested navigator, pop to top
            navigation.dispatch(StackActions.popToTop({
              key: route.key
            }));
          } else {
            navigation.emit('refocus');
          }
        } else {
          this._jumpTo(route.routeName);
        }
      });
      _defineProperty(this, "_handleTabPress", ({
        route
      }) => {
        this._isTabPress = true;

        // After tab press, handleIndexChange will be called synchronously
        // So we reset it in promise callback
        Promise.resolve().then(() => this._isTabPress = false);
        const {
          descriptors
        } = this.props;
        const descriptor = descriptors[route.key];
        const {
          navigation,
          options
        } = descriptor;
        const defaultHandler = this._makeDefaultHandler({
          route,
          navigation
        });
        if (options.tabBarOnPress) {
          options.tabBarOnPress({
            navigation,
            defaultHandler
          });
        } else {
          defaultHandler();
        }
      });
      _defineProperty(this, "_handleTabLongPress", ({
        route
      }) => {
        const {
          descriptors
        } = this.props;
        const descriptor = descriptors[route.key];
        const {
          navigation,
          options
        } = descriptor;
        const defaultHandler = this._makeDefaultHandler({
          route,
          navigation
        });
        if (options.tabBarOnLongPress) {
          options.tabBarOnLongPress({
            navigation,
            defaultHandler
          });
        } else {
          defaultHandler();
        }
      });
      _defineProperty(this, "_handleIndexChange", index => {
        if (this._isTabPress) {
          this._isTabPress = false;
          return;
        }
        this._jumpTo(this.props.navigation.state.routes[index].routeName);
      });
      _defineProperty(this, "_jumpTo", routeName => {
        const {
          navigation
        } = this.props;
        navigation.dispatch(SwitchActions.jumpTo({
          routeName,
          key: navigation.state.key
        }));
      });
      _defineProperty(this, "_isTabPress", false);
    }
    render() {
      const {
        descriptors,
        navigation,
        screenProps,
        navigationConfig
      } = this.props;
      const {
        state
      } = navigation;
      const route = state.routes[state.index];
      const descriptor = descriptors[route.key];
      return (
        /*#__PURE__*/
        // TODO: don't have time to fix it right now
        // @ts-ignore
        React.createElement(TabView, _extends({}, navigationConfig, descriptor.options, {
          getLabelText: this._getLabelText,
          getAccessibilityLabel: this._getAccessibilityLabel,
          getTestID: this._getTestID,
          renderIcon: this._renderIcon,
          renderScene: this._renderScene,
          onIndexChange: this._handleIndexChange,
          onTabPress: this._handleTabPress,
          onTabLongPress: this._handleTabLongPress,
          navigation: navigation,
          descriptors: descriptors,
          screenProps: screenProps
        }))
      );
    }
  }
  return (routes, config = {}) => {
    const router = TabRouter(routes, config);
    return createNavigator(NavigationView, router, config);
  };
}
//# sourceMappingURL=createTabNavigator.js.map