function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from 'react';
import { Dimensions } from 'react-native';
import hoistNonReactStatic from 'hoist-non-react-statics';
export const isOrientationLandscape = ({
  width,
  height
}) => width > height;
export default function withDimensions(WrappedComponent) {
  class EnhancedComponent extends React.Component {
    constructor(props) {
      super(props);
      _defineProperty(this, "handleOrientationChange", ({
        window
      }) => {
        const {
          width,
          height
        } = window;
        this.setState({
          dimensions: {
            width,
            height
          },
          isLandscape: isOrientationLandscape({
            width,
            height
          })
        });
      });
      const {
        width: _width,
        height: _height
      } = Dimensions.get('window');
      this.state = {
        dimensions: {
          width: _width,
          height: _height
        },
        isLandscape: isOrientationLandscape({
          width: _width,
          height: _height
        })
      };
    }
    componentDidMount() {
      this.listener= Dimensions.addEventListener('change', this.handleOrientationChange);
    }
    componentWillUnmount() {
      this.listener.remove()
    }
    render() {
      // @ts-ignore
      return /*#__PURE__*/React.createElement(WrappedComponent, _extends({}, this.props, this.state));
    }
  }

  // @ts-ignore
  _defineProperty(EnhancedComponent, "displayName", `withDimensions(${WrappedComponent.displayName})`);
  return hoistNonReactStatic(EnhancedComponent, WrappedComponent);
}
//# sourceMappingURL=withDimensions.js.map