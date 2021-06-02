(function (React, studio, ReactDOM) {
  'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  var ReactDOM__default = 'default' in ReactDOM ? ReactDOM['default'] : ReactDOM;

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  var factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret_1) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
        'Use PropTypes.checkPropTypes() to call them. ' +
        'Read more at http://fb.me/use-check-prop-types'
      );
      err.name = 'Invariant Violation';
      throw err;
    }  shim.isRequired = shim;
    function getShim() {
      return shim;
    }  // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,

      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };

    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
  });
  var propTypes_1 = propTypes.elementType;

  function toVal(mix) {
  	var k, y, str='';
  	if (mix) {
  		if (typeof mix === 'object') {
  			if (Array.isArray(mix)) {
  				for (k=0; k < mix.length; k++) {
  					if (mix[k] && (y = toVal(mix[k]))) {
  						str && (str += ' ');
  						str += y;
  					}
  				}
  			} else {
  				for (k in mix) {
  					if (mix[k] && (y = toVal(k))) {
  						str && (str += ' ');
  						str += y;
  					}
  				}
  			}
  		} else if (typeof mix !== 'boolean' && !mix.call) {
  			str && (str += ' ');
  			str += mix;
  		}
  	}
  	return str;
  }

  function clsx () {
  	var i=0, x, str='';
  	while (i < arguments.length) {
  		if (x = toVal(arguments[i++])) {
  			str && (str += ' ');
  			str += x;
  		}
  	}
  	return str;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function isPlainObject(item) {
    return item && _typeof(item) === 'object' && item.constructor === Object;
  }
  function deepmerge(target, source) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      clone: true
    };
    var output = options.clone ? _extends({}, target) : target;

    if (isPlainObject(target) && isPlainObject(source)) {
      Object.keys(source).forEach(function (key) {
        // Avoid prototype pollution
        if (key === '__proto__') {
          return;
        }

        if (isPlainObject(source[key]) && key in target) {
          output[key] = deepmerge(target[key], source[key], options);
        } else {
          output[key] = source[key];
        }
      });
    }

    return output;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
  Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
  function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
  var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
  var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
  var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

  var reactIs_production_min = {
  	AsyncMode: AsyncMode,
  	ConcurrentMode: ConcurrentMode,
  	ContextConsumer: ContextConsumer,
  	ContextProvider: ContextProvider,
  	Element: Element,
  	ForwardRef: ForwardRef,
  	Fragment: Fragment,
  	Lazy: Lazy,
  	Memo: Memo,
  	Portal: Portal,
  	Profiler: Profiler,
  	StrictMode: StrictMode,
  	Suspense: Suspense,
  	isAsyncMode: isAsyncMode,
  	isConcurrentMode: isConcurrentMode,
  	isContextConsumer: isContextConsumer,
  	isContextProvider: isContextProvider,
  	isElement: isElement,
  	isForwardRef: isForwardRef,
  	isFragment: isFragment,
  	isLazy: isLazy,
  	isMemo: isMemo,
  	isPortal: isPortal,
  	isProfiler: isProfiler,
  	isStrictMode: isStrictMode,
  	isSuspense: isSuspense,
  	isValidElementType: isValidElementType,
  	typeOf: typeOf
  };

  var reactIs = createCommonjsModule(function (module) {

  {
    module.exports = reactIs_production_min;
  }
  });
  var reactIs_1 = reactIs.isValidElementType;
  var reactIs_2 = reactIs.ForwardRef;
  var reactIs_3 = reactIs.Memo;
  var reactIs_4 = reactIs.isFragment;

  var hasSymbol = typeof Symbol === 'function' && Symbol.for;
  var nested = hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__';

  /**
   * This is the list of the style rule name we use as drop in replacement for the built-in
   * pseudo classes (:checked, :disabled, :focused, etc.).
   *
   * Why do they exist in the first place?
   * These classes are used at a specificity of 2.
   * It allows them to override previously definied styles as well as
   * being untouched by simple user overrides.
   */

  var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected']; // Returns a function which generates unique class names based on counters.
  // When new generator function is created, rule counter is reset.
  // We need to reset the rule counter for SSR for each request.
  //
  // It's inspired by
  // https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js

  function createGenerateClassName() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _options$disableGloba = options.disableGlobal,
        disableGlobal = _options$disableGloba === void 0 ? false : _options$disableGloba,
        _options$productionPr = options.productionPrefix,
        productionPrefix = _options$productionPr === void 0 ? 'jss' : _options$productionPr,
        _options$seed = options.seed,
        seed = _options$seed === void 0 ? '' : _options$seed;
    var seedPrefix = seed === '' ? '' : "".concat(seed, "-");
    var ruleCounter = 0;
    return function (rule, styleSheet) {
      ruleCounter += 1;

      var name = styleSheet.options.name; // Is a global static MUI style?

      if (name && name.indexOf('Mui') === 0 && !styleSheet.options.link && !disableGlobal) {
        // We can use a shorthand class name, we never use the keys to style the components.
        if (pseudoClasses.indexOf(rule.key) !== -1) {
          return "Mui-".concat(rule.key);
        }

        var prefix = "".concat(seedPrefix).concat(name, "-").concat(rule.key);

        if (!styleSheet.options.theme[nested] || seed !== '') {
          return prefix;
        }

        return "".concat(prefix, "-").concat(ruleCounter);
      }

      {
        return "".concat(seedPrefix).concat(productionPrefix).concat(ruleCounter);
      }
    };
  }

  /* eslint-disable no-restricted-syntax */
  function getThemeProps(params) {
    var theme = params.theme,
        name = params.name,
        props = params.props;

    if (!theme || !theme.props || !theme.props[name]) {
      return props;
    } // Resolve default props, code borrow from React source.
    // https://github.com/facebook/react/blob/15a8f031838a553e41c0b66eb1bcf1da8448104d/packages/react/src/ReactElement.js#L221


    var defaultProps = theme.props[name];
    var propName;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }

    return props;
  }

  var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof$1(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof$1(document)) === 'object' && document.nodeType === 9;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var plainObjectConstrurctor = {}.constructor;
  function cloneStyle(style) {
    if (style == null || typeof style !== 'object') return style;
    if (Array.isArray(style)) return style.map(cloneStyle);
    if (style.constructor !== plainObjectConstrurctor) return style;
    var newStyle = {};

    for (var name in style) {
      newStyle[name] = cloneStyle(style[name]);
    }

    return newStyle;
  }

  /**
   * Create a rule instance.
   */

  function createRule(name, decl, options) {
    if (name === void 0) {
      name = 'unnamed';
    }

    var jss = options.jss;
    var declCopy = cloneStyle(decl);
    var rule = jss.plugins.onCreateRule(name, declCopy, options);
    if (rule) return rule; // It is an at-rule and it has no instance.

    if (name[0] === '@') ;

    return null;
  }

  var join = function join(value, by) {
    var result = '';

    for (var i = 0; i < value.length; i++) {
      // Remove !important from the value, it will be readded later.
      if (value[i] === '!important') break;
      if (result) result += by;
      result += value[i];
    }

    return result;
  };
  /**
   * Converts array values to string.
   *
   * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
   * `border: ['1px', '2px']` > `border: 1px, 2px;`
   * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
   * `color: ['red', !important]` > `color: red !important;`
   */


  function toCssValue(value, ignoreImportant) {
    if (ignoreImportant === void 0) {
      ignoreImportant = false;
    }

    if (!Array.isArray(value)) return value;
    var cssValue = ''; // Support space separated values via `[['5px', '10px']]`.

    if (Array.isArray(value[0])) {
      for (var i = 0; i < value.length; i++) {
        if (value[i] === '!important') break;
        if (cssValue) cssValue += ', ';
        cssValue += join(value[i], ' ');
      }
    } else cssValue = join(value, ', '); // Add !important, because it was ignored.


    if (!ignoreImportant && value[value.length - 1] === '!important') {
      cssValue += ' !important';
    }

    return cssValue;
  }

  /**
   * Indent a string.
   * http://jsperf.com/array-join-vs-for
   */
  function indentStr(str, indent) {
    var result = '';

    for (var index = 0; index < indent; index++) {
      result += '  ';
    }

    return result + str;
  }
  /**
   * Converts a Rule to CSS string.
   */


  function toCss(selector, style, options) {
    if (options === void 0) {
      options = {};
    }

    var result = '';
    if (!style) return result;
    var _options = options,
        _options$indent = _options.indent,
        indent = _options$indent === void 0 ? 0 : _options$indent;
    var fallbacks = style.fallbacks;
    if (selector) indent++; // Apply fallbacks first.

    if (fallbacks) {
      // Array syntax {fallbacks: [{prop: value}]}
      if (Array.isArray(fallbacks)) {
        for (var index = 0; index < fallbacks.length; index++) {
          var fallback = fallbacks[index];

          for (var prop in fallback) {
            var value = fallback[prop];

            if (value != null) {
              if (result) result += '\n';
              result += "" + indentStr(prop + ": " + toCssValue(value) + ";", indent);
            }
          }
        }
      } else {
        // Object syntax {fallbacks: {prop: value}}
        for (var _prop in fallbacks) {
          var _value = fallbacks[_prop];

          if (_value != null) {
            if (result) result += '\n';
            result += "" + indentStr(_prop + ": " + toCssValue(_value) + ";", indent);
          }
        }
      }
    }

    for (var _prop2 in style) {
      var _value2 = style[_prop2];

      if (_value2 != null && _prop2 !== 'fallbacks') {
        if (result) result += '\n';
        result += "" + indentStr(_prop2 + ": " + toCssValue(_value2) + ";", indent);
      }
    } // Allow empty style in this case, because properties will be added dynamically.


    if (!result && !options.allowEmpty) return result; // When rule is being stringified before selector was defined.

    if (!selector) return result;
    indent--;
    if (result) result = "\n" + result + "\n";
    return indentStr(selector + " {" + result, indent) + indentStr('}', indent);
  }

  var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
  var nativeEscape = typeof CSS !== 'undefined' && CSS.escape;
  var escape = (function (str) {
    return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, '\\$1');
  });

  var BaseStyleRule =
  /*#__PURE__*/
  function () {
    function BaseStyleRule(key, style, options) {
      this.type = 'style';
      this.key = void 0;
      this.isProcessed = false;
      this.style = void 0;
      this.renderer = void 0;
      this.renderable = void 0;
      this.options = void 0;
      var sheet = options.sheet,
          Renderer = options.Renderer;
      this.key = key;
      this.options = options;
      this.style = style;
      if (sheet) this.renderer = sheet.renderer;else if (Renderer) this.renderer = new Renderer();
    }
    /**
     * Get or set a style property.
     */


    var _proto = BaseStyleRule.prototype;

    _proto.prop = function prop(name, value, options) {
      // It's a getter.
      if (value === undefined) return this.style[name]; // Don't do anything if the value has not changed.

      var force = options ? options.force : false;
      if (!force && this.style[name] === value) return this;
      var newValue = value;

      if (!options || options.process !== false) {
        newValue = this.options.jss.plugins.onChangeValue(value, name, this);
      }

      var isEmpty = newValue == null || newValue === false;
      var isDefined = name in this.style; // Value is empty and wasn't defined before.

      if (isEmpty && !isDefined && !force) return this; // We are going to remove this value.

      var remove = isEmpty && isDefined;
      if (remove) delete this.style[name];else this.style[name] = newValue; // Renderable is defined if StyleSheet option `link` is true.

      if (this.renderable && this.renderer) {
        if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, newValue);
        return this;
      }

      var sheet = this.options.sheet;

      if (sheet && sheet.attached) ;

      return this;
    };

    return BaseStyleRule;
  }();
  var StyleRule =
  /*#__PURE__*/
  function (_BaseStyleRule) {
    _inheritsLoose(StyleRule, _BaseStyleRule);

    function StyleRule(key, style, options) {
      var _this;

      _this = _BaseStyleRule.call(this, key, style, options) || this;
      _this.selectorText = void 0;
      _this.id = void 0;
      _this.renderable = void 0;
      var selector = options.selector,
          scoped = options.scoped,
          sheet = options.sheet,
          generateId = options.generateId;

      if (selector) {
        _this.selectorText = selector;
      } else if (scoped !== false) {
        _this.id = generateId(_assertThisInitialized(_assertThisInitialized(_this)), sheet);
        _this.selectorText = "." + escape(_this.id);
      }

      return _this;
    }
    /**
     * Set selector string.
     * Attention: use this with caution. Most browsers didn't implement
     * selectorText setter, so this may result in rerendering of entire Style Sheet.
     */


    var _proto2 = StyleRule.prototype;

    /**
     * Apply rule to an element inline.
     */
    _proto2.applyTo = function applyTo(renderable) {
      var renderer = this.renderer;

      if (renderer) {
        var json = this.toJSON();

        for (var prop in json) {
          renderer.setProperty(renderable, prop, json[prop]);
        }
      }

      return this;
    }
    /**
     * Returns JSON representation of the rule.
     * Fallbacks are not supported.
     * Useful for inline styles.
     */
    ;

    _proto2.toJSON = function toJSON() {
      var json = {};

      for (var prop in this.style) {
        var value = this.style[prop];
        if (typeof value !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = toCssValue(value);
      }

      return json;
    }
    /**
     * Generates a CSS string.
     */
    ;

    _proto2.toString = function toString(options) {
      var sheet = this.options.sheet;
      var link = sheet ? sheet.options.link : false;
      var opts = link ? _extends({}, options, {
        allowEmpty: true
      }) : options;
      return toCss(this.selectorText, this.style, opts);
    };

    _createClass(StyleRule, [{
      key: "selector",
      set: function set(selector) {
        if (selector === this.selectorText) return;
        this.selectorText = selector;
        var renderer = this.renderer,
            renderable = this.renderable;
        if (!renderable || !renderer) return;
        var hasChanged = renderer.setSelector(renderable, selector); // If selector setter is not implemented, rerender the rule.

        if (!hasChanged) {
          renderer.replaceRule(renderable, this);
        }
      }
      /**
       * Get selector string.
       */
      ,
      get: function get() {
        return this.selectorText;
      }
    }]);

    return StyleRule;
  }(BaseStyleRule);
  var pluginStyleRule = {
    onCreateRule: function onCreateRule(name, style, options) {
      if (name[0] === '@' || options.parent && options.parent.type === 'keyframes') {
        return null;
      }

      return new StyleRule(name, style, options);
    }
  };

  var defaultToStringOptions = {
    indent: 1,
    children: true
  };
  var atRegExp = /@([\w-]+)/;
  /**
   * Conditional rule for @media, @supports
   */

  var ConditionalRule =
  /*#__PURE__*/
  function () {
    function ConditionalRule(key, styles, options) {
      this.type = 'conditional';
      this.at = void 0;
      this.key = void 0;
      this.query = void 0;
      this.rules = void 0;
      this.options = void 0;
      this.isProcessed = false;
      this.renderable = void 0;
      this.key = key; // Key might contain a unique suffix in case the `name` passed by user was duplicate.

      this.query = options.name;
      var atMatch = key.match(atRegExp);
      this.at = atMatch ? atMatch[1] : 'unknown';
      this.options = options;
      this.rules = new RuleList(_extends({}, options, {
        parent: this
      }));

      for (var name in styles) {
        this.rules.add(name, styles[name]);
      }

      this.rules.process();
    }
    /**
     * Get a rule.
     */


    var _proto = ConditionalRule.prototype;

    _proto.getRule = function getRule(name) {
      return this.rules.get(name);
    }
    /**
     * Get index of a rule.
     */
    ;

    _proto.indexOf = function indexOf(rule) {
      return this.rules.indexOf(rule);
    }
    /**
     * Create and register rule, run plugins.
     */
    ;

    _proto.addRule = function addRule(name, style, options) {
      var rule = this.rules.add(name, style, options);
      if (!rule) return null;
      this.options.jss.plugins.onProcessRule(rule);
      return rule;
    }
    /**
     * Generates a CSS string.
     */
    ;

    _proto.toString = function toString(options) {
      if (options === void 0) {
        options = defaultToStringOptions;
      }

      if (options.indent == null) options.indent = defaultToStringOptions.indent;
      if (options.children == null) options.children = defaultToStringOptions.children;

      if (options.children === false) {
        return this.query + " {}";
      }

      var children = this.rules.toString(options);
      return children ? this.query + " {\n" + children + "\n}" : '';
    };

    return ConditionalRule;
  }();
  var keyRegExp = /@media|@supports\s+/;
  var pluginConditionalRule = {
    onCreateRule: function onCreateRule(key, styles, options) {
      return keyRegExp.test(key) ? new ConditionalRule(key, styles, options) : null;
    }
  };

  var defaultToStringOptions$1 = {
    indent: 1,
    children: true
  };
  var nameRegExp = /@keyframes\s+([\w-]+)/;
  /**
   * Rule for @keyframes
   */

  var KeyframesRule =
  /*#__PURE__*/
  function () {
    function KeyframesRule(key, frames, options) {
      this.type = 'keyframes';
      this.at = '@keyframes';
      this.key = void 0;
      this.name = void 0;
      this.id = void 0;
      this.rules = void 0;
      this.options = void 0;
      this.isProcessed = false;
      this.renderable = void 0;
      var nameMatch = key.match(nameRegExp);

      if (nameMatch && nameMatch[1]) {
        this.name = nameMatch[1];
      } else {
        this.name = 'noname';
      }

      this.key = this.type + "-" + this.name;
      this.options = options;
      var scoped = options.scoped,
          sheet = options.sheet,
          generateId = options.generateId;
      this.id = scoped === false ? this.name : escape(generateId(this, sheet));
      this.rules = new RuleList(_extends({}, options, {
        parent: this
      }));

      for (var name in frames) {
        this.rules.add(name, frames[name], _extends({}, options, {
          parent: this
        }));
      }

      this.rules.process();
    }
    /**
     * Generates a CSS string.
     */


    var _proto = KeyframesRule.prototype;

    _proto.toString = function toString(options) {
      if (options === void 0) {
        options = defaultToStringOptions$1;
      }

      if (options.indent == null) options.indent = defaultToStringOptions$1.indent;
      if (options.children == null) options.children = defaultToStringOptions$1.children;

      if (options.children === false) {
        return this.at + " " + this.id + " {}";
      }

      var children = this.rules.toString(options);
      if (children) children = "\n" + children + "\n";
      return this.at + " " + this.id + " {" + children + "}";
    };

    return KeyframesRule;
  }();
  var keyRegExp$1 = /@keyframes\s+/;
  var refRegExp = /\$([\w-]+)/g;

  var findReferencedKeyframe = function findReferencedKeyframe(val, keyframes) {
    if (typeof val === 'string') {
      return val.replace(refRegExp, function (match, name) {
        if (name in keyframes) {
          return keyframes[name];
        }
        return match;
      });
    }

    return val;
  };
  /**
   * Replace the reference for a animation name.
   */


  var replaceRef = function replaceRef(style, prop, keyframes) {
    var value = style[prop];
    var refKeyframe = findReferencedKeyframe(value, keyframes);

    if (refKeyframe !== value) {
      style[prop] = refKeyframe;
    }
  };

  var plugin = {
    onCreateRule: function onCreateRule(key, frames, options) {
      return typeof key === 'string' && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
    },
    // Animation name ref replacer.
    onProcessStyle: function onProcessStyle(style, rule, sheet) {
      if (rule.type !== 'style' || !sheet) return style;
      if ('animation-name' in style) replaceRef(style, 'animation-name', sheet.keyframes);
      if ('animation' in style) replaceRef(style, 'animation', sheet.keyframes);
      return style;
    },
    onChangeValue: function onChangeValue(val, prop, rule) {
      var sheet = rule.options.sheet;

      if (!sheet) {
        return val;
      }

      switch (prop) {
        case 'animation':
          return findReferencedKeyframe(val, sheet.keyframes);

        case 'animation-name':
          return findReferencedKeyframe(val, sheet.keyframes);

        default:
          return val;
      }
    }
  };

  var KeyframeRule =
  /*#__PURE__*/
  function (_BaseStyleRule) {
    _inheritsLoose(KeyframeRule, _BaseStyleRule);

    function KeyframeRule() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _BaseStyleRule.call.apply(_BaseStyleRule, [this].concat(args)) || this;
      _this.renderable = void 0;
      return _this;
    }

    var _proto = KeyframeRule.prototype;

    /**
     * Generates a CSS string.
     */
    _proto.toString = function toString(options) {
      var sheet = this.options.sheet;
      var link = sheet ? sheet.options.link : false;
      var opts = link ? _extends({}, options, {
        allowEmpty: true
      }) : options;
      return toCss(this.key, this.style, opts);
    };

    return KeyframeRule;
  }(BaseStyleRule);
  var pluginKeyframeRule = {
    onCreateRule: function onCreateRule(key, style, options) {
      if (options.parent && options.parent.type === 'keyframes') {
        return new KeyframeRule(key, style, options);
      }

      return null;
    }
  };

  var FontFaceRule =
  /*#__PURE__*/
  function () {
    function FontFaceRule(key, style, options) {
      this.type = 'font-face';
      this.at = '@font-face';
      this.key = void 0;
      this.style = void 0;
      this.options = void 0;
      this.isProcessed = false;
      this.renderable = void 0;
      this.key = key;
      this.style = style;
      this.options = options;
    }
    /**
     * Generates a CSS string.
     */


    var _proto = FontFaceRule.prototype;

    _proto.toString = function toString(options) {
      if (Array.isArray(this.style)) {
        var str = '';

        for (var index = 0; index < this.style.length; index++) {
          str += toCss(this.at, this.style[index]);
          if (this.style[index + 1]) str += '\n';
        }

        return str;
      }

      return toCss(this.at, this.style, options);
    };

    return FontFaceRule;
  }();
  var keyRegExp$2 = /@font-face/;
  var pluginFontFaceRule = {
    onCreateRule: function onCreateRule(key, style, options) {
      return keyRegExp$2.test(key) ? new FontFaceRule(key, style, options) : null;
    }
  };

  var ViewportRule =
  /*#__PURE__*/
  function () {
    function ViewportRule(key, style, options) {
      this.type = 'viewport';
      this.at = '@viewport';
      this.key = void 0;
      this.style = void 0;
      this.options = void 0;
      this.isProcessed = false;
      this.renderable = void 0;
      this.key = key;
      this.style = style;
      this.options = options;
    }
    /**
     * Generates a CSS string.
     */


    var _proto = ViewportRule.prototype;

    _proto.toString = function toString(options) {
      return toCss(this.key, this.style, options);
    };

    return ViewportRule;
  }();
  var pluginViewportRule = {
    onCreateRule: function onCreateRule(key, style, options) {
      return key === '@viewport' || key === '@-ms-viewport' ? new ViewportRule(key, style, options) : null;
    }
  };

  var SimpleRule =
  /*#__PURE__*/
  function () {
    function SimpleRule(key, value, options) {
      this.type = 'simple';
      this.key = void 0;
      this.value = void 0;
      this.options = void 0;
      this.isProcessed = false;
      this.renderable = void 0;
      this.key = key;
      this.value = value;
      this.options = options;
    }
    /**
     * Generates a CSS string.
     */
    // eslint-disable-next-line no-unused-vars


    var _proto = SimpleRule.prototype;

    _proto.toString = function toString(options) {
      if (Array.isArray(this.value)) {
        var str = '';

        for (var index = 0; index < this.value.length; index++) {
          str += this.key + " " + this.value[index] + ";";
          if (this.value[index + 1]) str += '\n';
        }

        return str;
      }

      return this.key + " " + this.value + ";";
    };

    return SimpleRule;
  }();
  var keysMap = {
    '@charset': true,
    '@import': true,
    '@namespace': true
  };
  var pluginSimpleRule = {
    onCreateRule: function onCreateRule(key, value, options) {
      return key in keysMap ? new SimpleRule(key, value, options) : null;
    }
  };

  var plugins = [pluginStyleRule, pluginConditionalRule, plugin, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];

  var defaultUpdateOptions = {
    process: true
  };
  var forceUpdateOptions = {
    force: true,
    process: true
    /**
     * Contains rules objects and allows adding/removing etc.
     * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
     */

  };

  var RuleList =
  /*#__PURE__*/
  function () {
    // Rules registry for access by .get() method.
    // It contains the same rule registered by name and by selector.
    // Original styles object.
    // Used to ensure correct rules order.
    function RuleList(options) {
      this.map = {};
      this.raw = {};
      this.index = [];
      this.counter = 0;
      this.options = void 0;
      this.classes = void 0;
      this.keyframes = void 0;
      this.options = options;
      this.classes = options.classes;
      this.keyframes = options.keyframes;
    }
    /**
     * Create and register rule.
     *
     * Will not render after Style Sheet was rendered the first time.
     */


    var _proto = RuleList.prototype;

    _proto.add = function add(name, decl, ruleOptions) {
      var _this$options = this.options,
          parent = _this$options.parent,
          sheet = _this$options.sheet,
          jss = _this$options.jss,
          Renderer = _this$options.Renderer,
          generateId = _this$options.generateId,
          scoped = _this$options.scoped;

      var options = _extends({
        classes: this.classes,
        parent: parent,
        sheet: sheet,
        jss: jss,
        Renderer: Renderer,
        generateId: generateId,
        scoped: scoped,
        name: name
      }, ruleOptions); // When user uses .createStyleSheet(), duplicate names are not possible, but
      // `sheet.addRule()` opens the door for any duplicate rule name. When this happens
      // we need to make the key unique within this RuleList instance scope.


      var key = name;

      if (name in this.raw) {
        key = name + "-d" + this.counter++;
      } // We need to save the original decl before creating the rule
      // because cache plugin needs to use it as a key to return a cached rule.


      this.raw[key] = decl;

      if (key in this.classes) {
        // E.g. rules inside of @media container
        options.selector = "." + escape(this.classes[key]);
      }

      var rule = createRule(key, decl, options);
      if (!rule) return null;
      this.register(rule);
      var index = options.index === undefined ? this.index.length : options.index;
      this.index.splice(index, 0, rule);
      return rule;
    }
    /**
     * Get a rule.
     */
    ;

    _proto.get = function get(name) {
      return this.map[name];
    }
    /**
     * Delete a rule.
     */
    ;

    _proto.remove = function remove(rule) {
      this.unregister(rule);
      delete this.raw[rule.key];
      this.index.splice(this.index.indexOf(rule), 1);
    }
    /**
     * Get index of a rule.
     */
    ;

    _proto.indexOf = function indexOf(rule) {
      return this.index.indexOf(rule);
    }
    /**
     * Run `onProcessRule()` plugins on every rule.
     */
    ;

    _proto.process = function process() {
      var plugins$$1 = this.options.jss.plugins; // We need to clone array because if we modify the index somewhere else during a loop
      // we end up with very hard-to-track-down side effects.

      this.index.slice(0).forEach(plugins$$1.onProcessRule, plugins$$1);
    }
    /**
     * Register a rule in `.map`, `.classes` and `.keyframes` maps.
     */
    ;

    _proto.register = function register(rule) {
      this.map[rule.key] = rule;

      if (rule instanceof StyleRule) {
        this.map[rule.selector] = rule;
        if (rule.id) this.classes[rule.key] = rule.id;
      } else if (rule instanceof KeyframesRule && this.keyframes) {
        this.keyframes[rule.name] = rule.id;
      }
    }
    /**
     * Unregister a rule.
     */
    ;

    _proto.unregister = function unregister(rule) {
      delete this.map[rule.key];

      if (rule instanceof StyleRule) {
        delete this.map[rule.selector];
        delete this.classes[rule.key];
      } else if (rule instanceof KeyframesRule) {
        delete this.keyframes[rule.name];
      }
    }
    /**
     * Update the function values with a new data.
     */
    ;

    _proto.update = function update() {
      var name;
      var data;
      var options;

      if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
        name = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe

        data = arguments.length <= 1 ? undefined : arguments[1]; // $FlowFixMe

        options = arguments.length <= 2 ? undefined : arguments[2];
      } else {
        data = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe

        options = arguments.length <= 1 ? undefined : arguments[1];
        name = null;
      }

      if (name) {
        this.updateOne(this.map[name], data, options);
      } else {
        for (var index = 0; index < this.index.length; index++) {
          this.updateOne(this.index[index], data, options);
        }
      }
    }
    /**
     * Execute plugins, update rule props.
     */
    ;

    _proto.updateOne = function updateOne(rule, data, options) {
      if (options === void 0) {
        options = defaultUpdateOptions;
      }

      var _this$options2 = this.options,
          plugins$$1 = _this$options2.jss.plugins,
          sheet = _this$options2.sheet; // It is a rules container like for e.g. ConditionalRule.

      if (rule.rules instanceof RuleList) {
        rule.rules.update(data, options);
        return;
      }

      var styleRule = rule;
      var style = styleRule.style;
      plugins$$1.onUpdate(data, rule, sheet, options); // We rely on a new `style` ref in case it was mutated during onUpdate hook.

      if (options.process && style && style !== styleRule.style) {
        // We need to run the plugins in case new `style` relies on syntax plugins.
        plugins$$1.onProcessStyle(styleRule.style, styleRule, sheet); // Update and add props.

        for (var prop in styleRule.style) {
          var nextValue = styleRule.style[prop];
          var prevValue = style[prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
          // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

          if (nextValue !== prevValue) {
            styleRule.prop(prop, nextValue, forceUpdateOptions);
          }
        } // Remove props.


        for (var _prop in style) {
          var _nextValue = styleRule.style[_prop];
          var _prevValue = style[_prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
          // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

          if (_nextValue == null && _nextValue !== _prevValue) {
            styleRule.prop(_prop, null, forceUpdateOptions);
          }
        }
      }
    }
    /**
     * Convert rules to a CSS string.
     */
    ;

    _proto.toString = function toString(options) {
      var str = '';
      var sheet = this.options.sheet;
      var link = sheet ? sheet.options.link : false;

      for (var index = 0; index < this.index.length; index++) {
        var rule = this.index[index];
        var css = rule.toString(options); // No need to render an empty rule.

        if (!css && !link) continue;
        if (str) str += '\n';
        str += css;
      }

      return str;
    };

    return RuleList;
  }();

  var StyleSheet =
  /*#__PURE__*/
  function () {
    function StyleSheet(styles, options) {
      this.options = void 0;
      this.deployed = void 0;
      this.attached = void 0;
      this.rules = void 0;
      this.renderer = void 0;
      this.classes = void 0;
      this.keyframes = void 0;
      this.queue = void 0;
      this.attached = false;
      this.deployed = false;
      this.classes = {};
      this.keyframes = {};
      this.options = _extends({}, options, {
        sheet: this,
        parent: this,
        classes: this.classes,
        keyframes: this.keyframes
      });

      if (options.Renderer) {
        this.renderer = new options.Renderer(this);
      }

      this.rules = new RuleList(this.options);

      for (var name in styles) {
        this.rules.add(name, styles[name]);
      }

      this.rules.process();
    }
    /**
     * Attach renderable to the render tree.
     */


    var _proto = StyleSheet.prototype;

    _proto.attach = function attach() {
      if (this.attached) return this;
      if (this.renderer) this.renderer.attach();
      this.attached = true; // Order is important, because we can't use insertRule API if style element is not attached.

      if (!this.deployed) this.deploy();
      return this;
    }
    /**
     * Remove renderable from render tree.
     */
    ;

    _proto.detach = function detach() {
      if (!this.attached) return this;
      if (this.renderer) this.renderer.detach();
      this.attached = false;
      return this;
    }
    /**
     * Add a rule to the current stylesheet.
     * Will insert a rule also after the stylesheet has been rendered first time.
     */
    ;

    _proto.addRule = function addRule(name, decl, options) {
      var queue = this.queue; // Plugins can create rules.
      // In order to preserve the right order, we need to queue all `.addRule` calls,
      // which happen after the first `rules.add()` call.

      if (this.attached && !queue) this.queue = [];
      var rule = this.rules.add(name, decl, options);
      if (!rule) return null;
      this.options.jss.plugins.onProcessRule(rule);

      if (this.attached) {
        if (!this.deployed) return rule; // Don't insert rule directly if there is no stringified version yet.
        // It will be inserted all together when .attach is called.

        if (queue) queue.push(rule);else {
          this.insertRule(rule);

          if (this.queue) {
            this.queue.forEach(this.insertRule, this);
            this.queue = undefined;
          }
        }
        return rule;
      } // We can't add rules to a detached style node.
      // We will redeploy the sheet once user will attach it.


      this.deployed = false;
      return rule;
    }
    /**
     * Insert rule into the StyleSheet
     */
    ;

    _proto.insertRule = function insertRule(rule) {
      if (this.renderer) {
        this.renderer.insertRule(rule);
      }
    }
    /**
     * Create and add rules.
     * Will render also after Style Sheet was rendered the first time.
     */
    ;

    _proto.addRules = function addRules(styles, options) {
      var added = [];

      for (var name in styles) {
        var rule = this.addRule(name, styles[name], options);
        if (rule) added.push(rule);
      }

      return added;
    }
    /**
     * Get a rule by name.
     */
    ;

    _proto.getRule = function getRule(name) {
      return this.rules.get(name);
    }
    /**
     * Delete a rule by name.
     * Returns `true`: if rule has been deleted from the DOM.
     */
    ;

    _proto.deleteRule = function deleteRule(name) {
      var rule = typeof name === 'object' ? name : this.rules.get(name);
      if (!rule) return false;
      this.rules.remove(rule);

      if (this.attached && rule.renderable && this.renderer) {
        return this.renderer.deleteRule(rule.renderable);
      }

      return true;
    }
    /**
     * Get index of a rule.
     */
    ;

    _proto.indexOf = function indexOf(rule) {
      return this.rules.indexOf(rule);
    }
    /**
     * Deploy pure CSS string to a renderable.
     */
    ;

    _proto.deploy = function deploy() {
      if (this.renderer) this.renderer.deploy();
      this.deployed = true;
      return this;
    }
    /**
     * Update the function values with a new data.
     */
    ;

    _proto.update = function update() {
      var _this$rules;

      (_this$rules = this.rules).update.apply(_this$rules, arguments);

      return this;
    }
    /**
     * Updates a single rule.
     */
    ;

    _proto.updateOne = function updateOne(rule, data, options) {
      this.rules.updateOne(rule, data, options);
      return this;
    }
    /**
     * Convert rules to a CSS string.
     */
    ;

    _proto.toString = function toString(options) {
      return this.rules.toString(options);
    };

    return StyleSheet;
  }();

  var PluginsRegistry =
  /*#__PURE__*/
  function () {
    function PluginsRegistry() {
      this.plugins = {
        internal: [],
        external: []
      };
      this.registry = void 0;
    }

    var _proto = PluginsRegistry.prototype;

    /**
     * Call `onCreateRule` hooks and return an object if returned by a hook.
     */
    _proto.onCreateRule = function onCreateRule(name, decl, options) {
      for (var i = 0; i < this.registry.onCreateRule.length; i++) {
        var rule = this.registry.onCreateRule[i](name, decl, options);
        if (rule) return rule;
      }

      return null;
    }
    /**
     * Call `onProcessRule` hooks.
     */
    ;

    _proto.onProcessRule = function onProcessRule(rule) {
      if (rule.isProcessed) return;
      var sheet = rule.options.sheet;

      for (var i = 0; i < this.registry.onProcessRule.length; i++) {
        this.registry.onProcessRule[i](rule, sheet);
      }

      if (rule.style) this.onProcessStyle(rule.style, rule, sheet);
      rule.isProcessed = true;
    }
    /**
     * Call `onProcessStyle` hooks.
     */
    ;

    _proto.onProcessStyle = function onProcessStyle(style, rule, sheet) {
      for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
        // $FlowFixMe
        rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
      }
    }
    /**
     * Call `onProcessSheet` hooks.
     */
    ;

    _proto.onProcessSheet = function onProcessSheet(sheet) {
      for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
        this.registry.onProcessSheet[i](sheet);
      }
    }
    /**
     * Call `onUpdate` hooks.
     */
    ;

    _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
      for (var i = 0; i < this.registry.onUpdate.length; i++) {
        this.registry.onUpdate[i](data, rule, sheet, options);
      }
    }
    /**
     * Call `onChangeValue` hooks.
     */
    ;

    _proto.onChangeValue = function onChangeValue(value, prop, rule) {
      var processedValue = value;

      for (var i = 0; i < this.registry.onChangeValue.length; i++) {
        processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
      }

      return processedValue;
    }
    /**
     * Register a plugin.
     */
    ;

    _proto.use = function use(newPlugin, options) {
      if (options === void 0) {
        options = {
          queue: 'external'
        };
      }

      var plugins = this.plugins[options.queue]; // Avoids applying same plugin twice, at least based on ref.

      if (plugins.indexOf(newPlugin) !== -1) {
        return;
      }

      plugins.push(newPlugin);
      this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function (registry, plugin) {
        for (var name in plugin) {
          if (name in registry) {
            registry[name].push(plugin[name]);
          }
        }

        return registry;
      }, {
        onCreateRule: [],
        onProcessRule: [],
        onProcessStyle: [],
        onProcessSheet: [],
        onChangeValue: [],
        onUpdate: []
      });
    };

    return PluginsRegistry;
  }();

  /**
   * Sheets registry to access them all at one place.
   */
  var SheetsRegistry =
  /*#__PURE__*/
  function () {
    function SheetsRegistry() {
      this.registry = [];
    }

    var _proto = SheetsRegistry.prototype;

    /**
     * Register a Style Sheet.
     */
    _proto.add = function add(sheet) {
      var registry = this.registry;
      var index = sheet.options.index;
      if (registry.indexOf(sheet) !== -1) return;

      if (registry.length === 0 || index >= this.index) {
        registry.push(sheet);
        return;
      } // Find a position.


      for (var i = 0; i < registry.length; i++) {
        if (registry[i].options.index > index) {
          registry.splice(i, 0, sheet);
          return;
        }
      }
    }
    /**
     * Reset the registry.
     */
    ;

    _proto.reset = function reset() {
      this.registry = [];
    }
    /**
     * Remove a Style Sheet.
     */
    ;

    _proto.remove = function remove(sheet) {
      var index = this.registry.indexOf(sheet);
      this.registry.splice(index, 1);
    }
    /**
     * Convert all attached sheets to a CSS string.
     */
    ;

    _proto.toString = function toString(_temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          attached = _ref.attached,
          options = _objectWithoutPropertiesLoose(_ref, ["attached"]);

      var css = '';

      for (var i = 0; i < this.registry.length; i++) {
        var sheet = this.registry[i];

        if (attached != null && sheet.attached !== attached) {
          continue;
        }

        if (css) css += '\n';
        css += sheet.toString(options);
      }

      return css;
    };

    _createClass(SheetsRegistry, [{
      key: "index",

      /**
       * Current highest index number.
       */
      get: function get() {
        return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
      }
    }]);

    return SheetsRegistry;
  }();

  /**
   * This is a global sheets registry. Only DomRenderer will add sheets to it.
   * On the server one should use an own SheetsRegistry instance and add the
   * sheets to it, because you need to make sure to create a new registry for
   * each request in order to not leak sheets across requests.
   */

  var sheets = new SheetsRegistry();

  /* eslint-disable */
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var globalThis = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();

  var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
  if (globalThis[ns] == null) globalThis[ns] = 0; // Bundle may contain multiple JSS versions at the same time. In order to identify
  // the current version with just one short number and use it for classes generation
  // we use a counter. Also it is more accurate, because user can manually reevaluate
  // the module.

  var moduleId = globalThis[ns]++;

  /**
   * Returns a function which generates unique class names based on counters.
   * When new generator function is created, rule counter is reseted.
   * We need to reset the rule counter for SSR for each request.
   */
  var createGenerateId = function createGenerateId(options) {
    if (options === void 0) {
      options = {};
    }

    var ruleCounter = 0;
    return function (rule, sheet) {
      ruleCounter += 1;

      var jssId = '';
      var prefix = '';

      if (sheet) {
        if (sheet.options.classNamePrefix) {
          prefix = sheet.options.classNamePrefix;
        }

        if (sheet.options.jss.id != null) {
          jssId = String(sheet.options.jss.id);
        }
      }

      if (options.minify) {
        // Using "c" because a number can't be the first char in a class name.
        return "" + (prefix || 'c') + moduleId + jssId + ruleCounter;
      }

      return prefix + rule.key + "-" + moduleId + (jssId ? "-" + jssId : '') + "-" + ruleCounter;
    };
  };

  /**
   * Cache the value from the first time a function is called.
   */
  var memoize = function memoize(fn) {
    var value;
    return function () {
      if (!value) value = fn();
      return value;
    };
  };
  /**
   * Get a style property value.
   */


  function getPropertyValue(cssRule, prop) {
    try {
      // Support CSSTOM.
      if (cssRule.attributeStyleMap) {
        return cssRule.attributeStyleMap.get(prop);
      }

      return cssRule.style.getPropertyValue(prop);
    } catch (err) {
      // IE may throw if property is unknown.
      return '';
    }
  }
  /**
   * Set a style property.
   */


  function setProperty(cssRule, prop, value) {
    try {
      var cssValue = value;

      if (Array.isArray(value)) {
        cssValue = toCssValue(value, true);

        if (value[value.length - 1] === '!important') {
          cssRule.style.setProperty(prop, cssValue, 'important');
          return true;
        }
      } // Support CSSTOM.


      if (cssRule.attributeStyleMap) {
        cssRule.attributeStyleMap.set(prop, cssValue);
      } else {
        cssRule.style.setProperty(prop, cssValue);
      }
    } catch (err) {
      // IE may throw if property is unknown.
      return false;
    }

    return true;
  }
  /**
   * Remove a style property.
   */


  function removeProperty(cssRule, prop) {
    try {
      // Support CSSTOM.
      if (cssRule.attributeStyleMap) {
        cssRule.attributeStyleMap.delete(prop);
      } else {
        cssRule.style.removeProperty(prop);
      }
    } catch (err) {
    }
  }
  /**
   * Set the selector.
   */


  function setSelector(cssRule, selectorText) {
    cssRule.selectorText = selectorText; // Return false if setter was not successful.
    // Currently works in chrome only.

    return cssRule.selectorText === selectorText;
  }
  /**
   * Gets the `head` element upon the first call and caches it.
   * We assume it can't be null.
   */


  var getHead = memoize(function () {
    return document.querySelector('head');
  });
  /**
   * Find attached sheet with an index higher than the passed one.
   */

  function findHigherSheet(registry, options) {
    for (var i = 0; i < registry.length; i++) {
      var sheet = registry[i];

      if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
        return sheet;
      }
    }

    return null;
  }
  /**
   * Find attached sheet with the highest index.
   */


  function findHighestSheet(registry, options) {
    for (var i = registry.length - 1; i >= 0; i--) {
      var sheet = registry[i];

      if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
        return sheet;
      }
    }

    return null;
  }
  /**
   * Find a comment with "jss" inside.
   */


  function findCommentNode(text) {
    var head = getHead();

    for (var i = 0; i < head.childNodes.length; i++) {
      var node = head.childNodes[i];

      if (node.nodeType === 8 && node.nodeValue.trim() === text) {
        return node;
      }
    }

    return null;
  }

  /**
   * Find a node before which we can insert the sheet.
   */
  function findPrevNode(options) {
    var registry = sheets.registry;

    if (registry.length > 0) {
      // Try to insert before the next higher sheet.
      var sheet = findHigherSheet(registry, options);

      if (sheet && sheet.renderer) {
        return {
          parent: sheet.renderer.element.parentNode,
          node: sheet.renderer.element
        };
      } // Otherwise insert after the last attached.


      sheet = findHighestSheet(registry, options);

      if (sheet && sheet.renderer) {
        return {
          parent: sheet.renderer.element.parentNode,
          node: sheet.renderer.element.nextSibling
        };
      }
    } // Try to find a comment placeholder if registry is empty.


    var insertionPoint = options.insertionPoint;

    if (insertionPoint && typeof insertionPoint === 'string') {
      var comment = findCommentNode(insertionPoint);

      if (comment) {
        return {
          parent: comment.parentNode,
          node: comment.nextSibling
        };
      } // If user specifies an insertion point and it can't be found in the document -
    }

    return false;
  }
  /**
   * Insert style element into the DOM.
   */


  function insertStyle(style, options) {
    var insertionPoint = options.insertionPoint;
    var nextNode = findPrevNode(options);

    if (nextNode !== false && nextNode.parent) {
      nextNode.parent.insertBefore(style, nextNode.node);
      return;
    } // Works with iframes and any node types.


    if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
      // https://stackoverflow.com/questions/41328728/force-casting-in-flow
      var insertionPointElement = insertionPoint;
      var parentNode = insertionPointElement.parentNode;
      if (parentNode) parentNode.insertBefore(style, insertionPointElement.nextSibling);
      return;
    }

    getHead().appendChild(style);
  }
  /**
   * Read jss nonce setting from the page if the user has set it.
   */


  var getNonce = memoize(function () {
    var node = document.querySelector('meta[property="csp-nonce"]');
    return node ? node.getAttribute('content') : null;
  });

  var _insertRule = function insertRule(container, rule, index) {
    var maxIndex = container.cssRules.length; // In case previous insertion fails, passed index might be wrong

    if (index === undefined || index > maxIndex) {
      // eslint-disable-next-line no-param-reassign
      index = maxIndex;
    }

    try {
      if ('insertRule' in container) {
        var c = container;
        c.insertRule(rule, index);
      } // Keyframes rule.
      else if ('appendRule' in container) {
          var _c = container;

          _c.appendRule(rule);
        }
    } catch (err) {
      return false;
    }

    return container.cssRules[index];
  };

  var createStyle = function createStyle() {
    var el = document.createElement('style'); // Without it, IE will have a broken source order specificity if we
    // insert rules after we insert the style tag.
    // It seems to kick-off the source order specificity algorithm.

    el.textContent = '\n';
    return el;
  };

  var DomRenderer =
  /*#__PURE__*/
  function () {
    // HTMLStyleElement needs fixing https://github.com/facebook/flow/issues/2696
    function DomRenderer(sheet) {
      this.getPropertyValue = getPropertyValue;
      this.setProperty = setProperty;
      this.removeProperty = removeProperty;
      this.setSelector = setSelector;
      this.element = void 0;
      this.sheet = void 0;
      this.hasInsertedRules = false;
      // There is no sheet when the renderer is used from a standalone StyleRule.
      if (sheet) sheets.add(sheet);
      this.sheet = sheet;

      var _ref = this.sheet ? this.sheet.options : {},
          media = _ref.media,
          meta = _ref.meta,
          element = _ref.element;

      this.element = element || createStyle();
      this.element.setAttribute('data-jss', '');
      if (media) this.element.setAttribute('media', media);
      if (meta) this.element.setAttribute('data-meta', meta);
      var nonce = getNonce();
      if (nonce) this.element.setAttribute('nonce', nonce);
    }
    /**
     * Insert style element into render tree.
     */


    var _proto = DomRenderer.prototype;

    _proto.attach = function attach() {
      // In the case the element node is external and it is already in the DOM.
      if (this.element.parentNode || !this.sheet) return;
      insertStyle(this.element, this.sheet.options); // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
      // most browsers create a new CSSStyleSheet, except of all IEs.

      var deployed = Boolean(this.sheet && this.sheet.deployed);

      if (this.hasInsertedRules && deployed) {
        this.hasInsertedRules = false;
        this.deploy();
      }
    }
    /**
     * Remove style element from render tree.
     */
    ;

    _proto.detach = function detach() {
      var parentNode = this.element.parentNode;
      if (parentNode) parentNode.removeChild(this.element);
    }
    /**
     * Inject CSS string into element.
     */
    ;

    _proto.deploy = function deploy() {
      var sheet = this.sheet;
      if (!sheet) return;

      if (sheet.options.link) {
        this.insertRules(sheet.rules);
        return;
      }

      this.element.textContent = "\n" + sheet.toString() + "\n";
    }
    /**
     * Insert RuleList into an element.
     */
    ;

    _proto.insertRules = function insertRules(rules, nativeParent) {
      for (var i = 0; i < rules.index.length; i++) {
        this.insertRule(rules.index[i], i, nativeParent);
      }
    }
    /**
     * Insert a rule into element.
     */
    ;

    _proto.insertRule = function insertRule(rule, index, nativeParent) {
      if (nativeParent === void 0) {
        nativeParent = this.element.sheet;
      }

      if (rule.rules) {
        var parent = rule;
        var latestNativeParent = nativeParent;

        if (rule.type === 'conditional' || rule.type === 'keyframes') {
          // We need to render the container without children first.
          latestNativeParent = _insertRule(nativeParent, parent.toString({
            children: false
          }), index);

          if (latestNativeParent === false) {
            return false;
          }
        }

        this.insertRules(parent.rules, latestNativeParent);
        return latestNativeParent;
      } // IE keeps the CSSStyleSheet after style node has been reattached,
      // so we need to check if the `renderable` reference the right style sheet and not
      // rerender those rules.


      if (rule.renderable && rule.renderable.parentStyleSheet === this.element.sheet) {
        return rule.renderable;
      }

      var ruleStr = rule.toString();
      if (!ruleStr) return false;

      var nativeRule = _insertRule(nativeParent, ruleStr, index);

      if (nativeRule === false) {
        return false;
      }

      this.hasInsertedRules = true;
      rule.renderable = nativeRule;
      return nativeRule;
    }
    /**
     * Delete a rule.
     */
    ;

    _proto.deleteRule = function deleteRule(cssRule) {
      var sheet = this.element.sheet;
      var index = this.indexOf(cssRule);
      if (index === -1) return false;
      sheet.deleteRule(index);
      return true;
    }
    /**
     * Get index of a CSS Rule.
     */
    ;

    _proto.indexOf = function indexOf(cssRule) {
      var cssRules = this.element.sheet.cssRules;

      for (var index = 0; index < cssRules.length; index++) {
        if (cssRule === cssRules[index]) return index;
      }

      return -1;
    }
    /**
     * Generate a new CSS rule and replace the existing one.
     *
     * Only used for some old browsers because they can't set a selector.
     */
    ;

    _proto.replaceRule = function replaceRule(cssRule, rule) {
      var index = this.indexOf(cssRule);
      if (index === -1) return false;
      this.element.sheet.deleteRule(index);
      return this.insertRule(rule, index);
    }
    /**
     * Get all rules elements.
     */
    ;

    _proto.getRules = function getRules() {
      return this.element.sheet.cssRules;
    };

    return DomRenderer;
  }();

  var instanceCounter = 0;

  var Jss =
  /*#__PURE__*/
  function () {
    function Jss(options) {
      this.id = instanceCounter++;
      this.version = "10.1.1";
      this.plugins = new PluginsRegistry();
      this.options = {
        id: {
          minify: false
        },
        createGenerateId: createGenerateId,
        Renderer: isBrowser ? DomRenderer : null,
        plugins: []
      };
      this.generateId = createGenerateId({
        minify: false
      });

      for (var i = 0; i < plugins.length; i++) {
        this.plugins.use(plugins[i], {
          queue: 'internal'
        });
      }

      this.setup(options);
    }
    /**
     * Prepares various options, applies plugins.
     * Should not be used twice on the same instance, because there is no plugins
     * deduplication logic.
     */


    var _proto = Jss.prototype;

    _proto.setup = function setup(options) {
      if (options === void 0) {
        options = {};
      }

      if (options.createGenerateId) {
        this.options.createGenerateId = options.createGenerateId;
      }

      if (options.id) {
        this.options.id = _extends({}, this.options.id, options.id);
      }

      if (options.createGenerateId || options.id) {
        this.generateId = this.options.createGenerateId(this.options.id);
      }

      if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;

      if ('Renderer' in options) {
        this.options.Renderer = options.Renderer;
      } // eslint-disable-next-line prefer-spread


      if (options.plugins) this.use.apply(this, options.plugins);
      return this;
    }
    /**
     * Create a Style Sheet.
     */
    ;

    _proto.createStyleSheet = function createStyleSheet(styles, options) {
      if (options === void 0) {
        options = {};
      }

      var _options = options,
          index = _options.index;

      if (typeof index !== 'number') {
        index = sheets.index === 0 ? 0 : sheets.index + 1;
      }

      var sheet = new StyleSheet(styles, _extends({}, options, {
        jss: this,
        generateId: options.generateId || this.generateId,
        insertionPoint: this.options.insertionPoint,
        Renderer: this.options.Renderer,
        index: index
      }));
      this.plugins.onProcessSheet(sheet);
      return sheet;
    }
    /**
     * Detach the Style Sheet and remove it from the registry.
     */
    ;

    _proto.removeStyleSheet = function removeStyleSheet(sheet) {
      sheet.detach();
      sheets.remove(sheet);
      return this;
    }
    /**
     * Create a rule without a Style Sheet.
     * [Deprecated] will be removed in the next major version.
     */
    ;

    _proto.createRule = function createRule$$1(name, style, options) {
      if (style === void 0) {
        style = {};
      }

      if (options === void 0) {
        options = {};
      }

      // Enable rule without name for inline styles.
      if (typeof name === 'object') {
        return this.createRule(undefined, name, style);
      }

      var ruleOptions = _extends({}, options, {
        name: name,
        jss: this,
        Renderer: this.options.Renderer
      });

      if (!ruleOptions.generateId) ruleOptions.generateId = this.generateId;
      if (!ruleOptions.classes) ruleOptions.classes = {};
      if (!ruleOptions.keyframes) ruleOptions.keyframes = {};

      var rule = createRule(name, style, ruleOptions);

      if (rule) this.plugins.onProcessRule(rule);
      return rule;
    }
    /**
     * Register plugin. Passed function will be invoked with a rule instance.
     */
    ;

    _proto.use = function use() {
      var _this = this;

      for (var _len = arguments.length, plugins$$1 = new Array(_len), _key = 0; _key < _len; _key++) {
        plugins$$1[_key] = arguments[_key];
      }

      plugins$$1.forEach(function (plugin) {
        _this.plugins.use(plugin);
      });
      return this;
    };

    return Jss;
  }();

  /**
   * Extracts a styles object with only props that contain function values.
   */
  function getDynamicStyles(styles) {
    var to = null;

    for (var key in styles) {
      var value = styles[key];
      var type = typeof value;

      if (type === 'function') {
        if (!to) to = {};
        to[key] = value;
      } else if (type === 'object' && value !== null && !Array.isArray(value)) {
        var extracted = getDynamicStyles(value);

        if (extracted) {
          if (!to) to = {};
          to[key] = extracted;
        }
      }
    }

    return to;
  }

  /**
   * A better abstraction over CSS.
   *
   * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
   * @website https://github.com/cssinjs/jss
   * @license MIT
   */

  /**
   * Export a constant indicating if this browser has CSSTOM support.
   * https://developers.google.com/web/updates/2018/03/cssom
   */
  var hasCSSTOMSupport = typeof CSS !== 'undefined' && CSS && 'number' in CSS;
  /**
   * Creates a new instance of Jss.
   */

  var create = function create(options) {
    return new Jss(options);
  };
  /**
   * A global Jss instance.
   */

  var index = create();

  var now = Date.now();
  var fnValuesNs = "fnValues" + now;
  var fnRuleNs = "fnStyle" + ++now;
  function functionPlugin() {
    return {
      onCreateRule: function onCreateRule(name, decl, options) {
        if (typeof decl !== 'function') return null;
        var rule = createRule(name, {}, options);
        rule[fnRuleNs] = decl;
        return rule;
      },
      onProcessStyle: function onProcessStyle(style, rule) {
        // We need to extract function values from the declaration, so that we can keep core unaware of them.
        // We need to do that only once.
        // We don't need to extract functions on each style update, since this can happen only once.
        // We don't support function values inside of function rules.
        if (fnValuesNs in rule || fnRuleNs in rule) return style;
        var fnValues = {};

        for (var prop in style) {
          var value = style[prop];
          if (typeof value !== 'function') continue;
          delete style[prop];
          fnValues[prop] = value;
        } // $FlowFixMe


        rule[fnValuesNs] = fnValues;
        return style;
      },
      onUpdate: function onUpdate(data, rule, sheet, options) {
        var styleRule = rule;
        var fnRule = styleRule[fnRuleNs]; // If we have a style function, the entire rule is dynamic and style object
        // will be returned from that function.

        if (fnRule) {
          // Empty object will remove all currently defined props
          // in case function rule returns a falsy value.
          styleRule.style = fnRule(data) || {};
        }

        var fnValues = styleRule[fnValuesNs]; // If we have a fn values map, it is a rule with function values.

        if (fnValues) {
          for (var _prop in fnValues) {
            styleRule.prop(_prop, fnValues[_prop](data), options);
          }
        }
      }
    };
  }

  var at = '@global';
  var atPrefix = '@global ';

  var GlobalContainerRule =
  /*#__PURE__*/
  function () {
    function GlobalContainerRule(key, styles, options) {
      this.type = 'global';
      this.at = at;
      this.rules = void 0;
      this.options = void 0;
      this.key = void 0;
      this.isProcessed = false;
      this.key = key;
      this.options = options;
      this.rules = new RuleList(_extends({}, options, {
        parent: this
      }));

      for (var selector in styles) {
        this.rules.add(selector, styles[selector]);
      }

      this.rules.process();
    }
    /**
     * Get a rule.
     */


    var _proto = GlobalContainerRule.prototype;

    _proto.getRule = function getRule(name) {
      return this.rules.get(name);
    }
    /**
     * Create and register rule, run plugins.
     */
    ;

    _proto.addRule = function addRule(name, style, options) {
      var rule = this.rules.add(name, style, options);
      this.options.jss.plugins.onProcessRule(rule);
      return rule;
    }
    /**
     * Get index of a rule.
     */
    ;

    _proto.indexOf = function indexOf(rule) {
      return this.rules.indexOf(rule);
    }
    /**
     * Generates a CSS string.
     */
    ;

    _proto.toString = function toString() {
      return this.rules.toString();
    };

    return GlobalContainerRule;
  }();

  var GlobalPrefixedRule =
  /*#__PURE__*/
  function () {
    function GlobalPrefixedRule(key, style, options) {
      this.type = 'global';
      this.at = at;
      this.options = void 0;
      this.rule = void 0;
      this.isProcessed = false;
      this.key = void 0;
      this.key = key;
      this.options = options;
      var selector = key.substr(atPrefix.length);
      this.rule = options.jss.createRule(selector, style, _extends({}, options, {
        parent: this
      }));
    }

    var _proto2 = GlobalPrefixedRule.prototype;

    _proto2.toString = function toString(options) {
      return this.rule ? this.rule.toString(options) : '';
    };

    return GlobalPrefixedRule;
  }();

  var separatorRegExp = /\s*,\s*/g;

  function addScope(selector, scope) {
    var parts = selector.split(separatorRegExp);
    var scoped = '';

    for (var i = 0; i < parts.length; i++) {
      scoped += scope + " " + parts[i].trim();
      if (parts[i + 1]) scoped += ', ';
    }

    return scoped;
  }

  function handleNestedGlobalContainerRule(rule) {
    var options = rule.options,
        style = rule.style;
    var rules = style ? style[at] : null;
    if (!rules) return;

    for (var name in rules) {
      options.sheet.addRule(name, rules[name], _extends({}, options, {
        selector: addScope(name, rule.selector)
      }));
    }

    delete style[at];
  }

  function handlePrefixedGlobalRule(rule) {
    var options = rule.options,
        style = rule.style;

    for (var prop in style) {
      if (prop[0] !== '@' || prop.substr(0, at.length) !== at) continue;
      var selector = addScope(prop.substr(at.length), rule.selector);
      options.sheet.addRule(selector, style[prop], _extends({}, options, {
        selector: selector
      }));
      delete style[prop];
    }
  }
  /**
   * Convert nested rules to separate, remove them from original styles.
   *
   * @param {Rule} rule
   * @api public
   */


  function jssGlobal() {
    function onCreateRule(name, styles, options) {
      if (!name) return null;

      if (name === at) {
        return new GlobalContainerRule(name, styles, options);
      }

      if (name[0] === '@' && name.substr(0, atPrefix.length) === atPrefix) {
        return new GlobalPrefixedRule(name, styles, options);
      }

      var parent = options.parent;

      if (parent) {
        if (parent.type === 'global' || parent.options.parent && parent.options.parent.type === 'global') {
          options.scoped = false;
        }
      }

      if (options.scoped === false) {
        options.selector = name;
      }

      return null;
    }

    function onProcessRule(rule) {
      if (rule.type !== 'style') return;
      handleNestedGlobalContainerRule(rule);
      handlePrefixedGlobalRule(rule);
    }

    return {
      onCreateRule: onCreateRule,
      onProcessRule: onProcessRule
    };
  }

  var separatorRegExp$1 = /\s*,\s*/g;
  var parentRegExp = /&/g;
  var refRegExp$1 = /\$([\w-]+)/g;
  /**
   * Convert nested rules to separate, remove them from original styles.
   *
   * @param {Rule} rule
   * @api public
   */

  function jssNested() {
    // Get a function to be used for $ref replacement.
    function getReplaceRef(container, sheet) {
      return function (match, key) {
        var rule = container.getRule(key) || sheet && sheet.getRule(key);

        if (rule) {
          rule = rule;
          return rule.selector;
        }
        return key;
      };
    }

    function replaceParentRefs(nestedProp, parentProp) {
      var parentSelectors = parentProp.split(separatorRegExp$1);
      var nestedSelectors = nestedProp.split(separatorRegExp$1);
      var result = '';

      for (var i = 0; i < parentSelectors.length; i++) {
        var parent = parentSelectors[i];

        for (var j = 0; j < nestedSelectors.length; j++) {
          var nested = nestedSelectors[j];
          if (result) result += ', '; // Replace all & by the parent or prefix & with the parent.

          result += nested.indexOf('&') !== -1 ? nested.replace(parentRegExp, parent) : parent + " " + nested;
        }
      }

      return result;
    }

    function getOptions(rule, container, prevOptions) {
      // Options has been already created, now we only increase index.
      if (prevOptions) return _extends({}, prevOptions, {
        index: prevOptions.index + 1
      });
      var nestingLevel = rule.options.nestingLevel;
      nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

      var options = _extends({}, rule.options, {
        nestingLevel: nestingLevel,
        index: container.indexOf(rule) + 1 // We don't need the parent name to be set options for chlid.

      });

      delete options.name;
      return options;
    }

    function onProcessStyle(style, rule, sheet) {
      if (rule.type !== 'style') return style;
      var styleRule = rule;
      var container = styleRule.options.parent;
      var options;
      var replaceRef;

      for (var prop in style) {
        var isNested = prop.indexOf('&') !== -1;
        var isNestedConditional = prop[0] === '@';
        if (!isNested && !isNestedConditional) continue;
        options = getOptions(styleRule, container, options);

        if (isNested) {
          var selector = replaceParentRefs(prop, styleRule.selector); // Lazily create the ref replacer function just once for
          // all nested rules within the sheet.

          if (!replaceRef) replaceRef = getReplaceRef(container, sheet); // Replace all $refs.

          selector = selector.replace(refRegExp$1, replaceRef);
          container.addRule(selector, style[prop], _extends({}, options, {
            selector: selector
          }));
        } else if (isNestedConditional) {
          // Place conditional right after the parent rule to ensure right ordering.
          container.addRule(prop, {}, options) // Flow expects more options but they aren't required
          // And flow doesn't know this will always be a StyleRule which has the addRule method
          // $FlowFixMe
          .addRule(styleRule.key, style[prop], {
            selector: styleRule.selector
          });
        }

        delete style[prop];
      }

      return style;
    }

    return {
      onProcessStyle: onProcessStyle
    };
  }

  /* eslint-disable no-var, prefer-template */
  var uppercasePattern = /[A-Z]/g;
  var msPattern = /^ms-/;
  var cache = {};

  function toHyphenLower(match) {
    return '-' + match.toLowerCase()
  }

  function hyphenateStyleName(name) {
    if (cache.hasOwnProperty(name)) {
      return cache[name]
    }

    var hName = name.replace(uppercasePattern, toHyphenLower);
    return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
  }

  /**
   * Convert camel cased property names to dash separated.
   *
   * @param {Object} style
   * @return {Object}
   */

  function convertCase(style) {
    var converted = {};

    for (var prop in style) {
      var key = prop.indexOf('--') === 0 ? prop : hyphenateStyleName(prop);
      converted[key] = style[prop];
    }

    if (style.fallbacks) {
      if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
    }

    return converted;
  }
  /**
   * Allow camel cased property names by converting them back to dasherized.
   *
   * @param {Rule} rule
   */


  function camelCase() {
    function onProcessStyle(style) {
      if (Array.isArray(style)) {
        // Handle rules like @font-face, which can have multiple styles in an array
        for (var index = 0; index < style.length; index++) {
          style[index] = convertCase(style[index]);
        }

        return style;
      }

      return convertCase(style);
    }

    function onChangeValue(value, prop, rule) {
      if (prop.indexOf('--') === 0) {
        return value;
      }

      var hyphenatedProp = hyphenateStyleName(prop); // There was no camel case in place

      if (prop === hyphenatedProp) return value;
      rule.prop(hyphenatedProp, value); // Core will ignore that property value we set the proper one above.

      return null;
    }

    return {
      onProcessStyle: onProcessStyle,
      onChangeValue: onChangeValue
    };
  }

  var px = hasCSSTOMSupport && CSS ? CSS.px : 'px';
  var ms = hasCSSTOMSupport && CSS ? CSS.ms : 'ms';
  var percent = hasCSSTOMSupport && CSS ? CSS.percent : '%';
  /**
   * Generated jss-plugin-default-unit CSS property units
   *
   * @type object
   */

  var defaultUnits = {
    // Animation properties
    'animation-delay': ms,
    'animation-duration': ms,
    // Background properties
    'background-position': px,
    'background-position-x': px,
    'background-position-y': px,
    'background-size': px,
    // Border Properties
    border: px,
    'border-bottom': px,
    'border-bottom-left-radius': px,
    'border-bottom-right-radius': px,
    'border-bottom-width': px,
    'border-left': px,
    'border-left-width': px,
    'border-radius': px,
    'border-right': px,
    'border-right-width': px,
    'border-top': px,
    'border-top-left-radius': px,
    'border-top-right-radius': px,
    'border-top-width': px,
    'border-width': px,
    // Margin properties
    margin: px,
    'margin-bottom': px,
    'margin-left': px,
    'margin-right': px,
    'margin-top': px,
    // Padding properties
    padding: px,
    'padding-bottom': px,
    'padding-left': px,
    'padding-right': px,
    'padding-top': px,
    // Mask properties
    'mask-position-x': px,
    'mask-position-y': px,
    'mask-size': px,
    // Width and height properties
    height: px,
    width: px,
    'min-height': px,
    'max-height': px,
    'min-width': px,
    'max-width': px,
    // Position properties
    bottom: px,
    left: px,
    top: px,
    right: px,
    // Shadow properties
    'box-shadow': px,
    'text-shadow': px,
    // Column properties
    'column-gap': px,
    'column-rule': px,
    'column-rule-width': px,
    'column-width': px,
    // Font and text properties
    'font-size': px,
    'font-size-delta': px,
    'letter-spacing': px,
    'text-indent': px,
    'text-stroke': px,
    'text-stroke-width': px,
    'word-spacing': px,
    // Motion properties
    motion: px,
    'motion-offset': px,
    // Outline properties
    outline: px,
    'outline-offset': px,
    'outline-width': px,
    // Perspective properties
    perspective: px,
    'perspective-origin-x': percent,
    'perspective-origin-y': percent,
    // Transform properties
    'transform-origin': percent,
    'transform-origin-x': percent,
    'transform-origin-y': percent,
    'transform-origin-z': percent,
    // Transition properties
    'transition-delay': ms,
    'transition-duration': ms,
    // Alignment properties
    'vertical-align': px,
    'flex-basis': px,
    // Some random properties
    'shape-margin': px,
    size: px,
    // Grid properties
    grid: px,
    'grid-gap': px,
    'grid-row-gap': px,
    'grid-column-gap': px,
    'grid-template-rows': px,
    'grid-template-columns': px,
    'grid-auto-rows': px,
    'grid-auto-columns': px,
    // Not existing properties.
    // Used to avoid issues with jss-plugin-expand integration.
    'box-shadow-x': px,
    'box-shadow-y': px,
    'box-shadow-blur': px,
    'box-shadow-spread': px,
    'font-line-height': px,
    'text-shadow-x': px,
    'text-shadow-y': px,
    'text-shadow-blur': px
  };

  /**
   * Clones the object and adds a camel cased property version.
   */
  function addCamelCasedVersion(obj) {
    var regExp = /(-[a-z])/g;

    var replace = function replace(str) {
      return str[1].toUpperCase();
    };

    var newObj = {};

    for (var _key in obj) {
      newObj[_key] = obj[_key];
      newObj[_key.replace(regExp, replace)] = obj[_key];
    }

    return newObj;
  }

  var units = addCamelCasedVersion(defaultUnits);
  /**
   * Recursive deep style passing function
   */

  function iterate(prop, value, options) {
    if (!value) return value;

    if (Array.isArray(value)) {
      for (var i = 0; i < value.length; i++) {
        value[i] = iterate(prop, value[i], options);
      }
    } else if (typeof value === 'object') {
      if (prop === 'fallbacks') {
        for (var innerProp in value) {
          value[innerProp] = iterate(innerProp, value[innerProp], options);
        }
      } else {
        for (var _innerProp in value) {
          value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
        }
      }
    } else if (typeof value === 'number') {
      var unit = options[prop] || units[prop];

      if (unit) {
        return typeof unit === 'function' ? unit(value).toString() : "" + value + unit;
      }

      return value.toString();
    }

    return value;
  }
  /**
   * Add unit to numeric values.
   */


  function defaultUnit(options) {
    if (options === void 0) {
      options = {};
    }

    var camelCasedOptions = addCamelCasedVersion(options);

    function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;

      for (var prop in style) {
        style[prop] = iterate(prop, style[prop], camelCasedOptions);
      }

      return style;
    }

    function onChangeValue(value, prop) {
      return iterate(prop, value, camelCasedOptions);
    }

    return {
      onProcessStyle: onProcessStyle,
      onChangeValue: onChangeValue
    };
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  // Export javascript style and css style vendor prefixes.
  var js = '';
  var css = '';
  var vendor = '';
  var browser = '';
  var isTouch = isBrowser && 'ontouchstart' in document.documentElement; // We should not do anything if required serverside.

  if (isBrowser) {
    // Order matters. We need to check Webkit the last one because
    // other vendors use to add Webkit prefixes to some properties
    var jsCssMap = {
      Moz: '-moz-',
      ms: '-ms-',
      O: '-o-',
      Webkit: '-webkit-'
    };

    var _document$createEleme = document.createElement('p'),
        style = _document$createEleme.style;

    var testProp = 'Transform';

    for (var key in jsCssMap) {
      if (key + testProp in style) {
        js = key;
        css = jsCssMap[key];
        break;
      }
    } // Correctly detect the Edge browser.


    if (js === 'Webkit' && 'msHyphens' in style) {
      js = 'ms';
      css = jsCssMap.ms;
      browser = 'edge';
    } // Correctly detect the Safari browser.


    if (js === 'Webkit' && '-apple-trailing-word' in style) {
      vendor = 'apple';
    }
  }
  /**
   * Vendor prefix string for the current browser.
   *
   * @type {{js: String, css: String, vendor: String, browser: String}}
   * @api public
   */


  var prefix = {
    js: js,
    css: css,
    vendor: vendor,
    browser: browser,
    isTouch: isTouch
  };

  /**
   * Test if a keyframe at-rule should be prefixed or not
   *
   * @param {String} vendor prefix string for the current browser.
   * @return {String}
   * @api public
   */

  function supportedKeyframes(key) {
    // Keyframes is already prefixed. e.g. key = '@-webkit-keyframes a'
    if (key[1] === '-') return key; // No need to prefix IE/Edge. Older browsers will ignore unsupported rules.
    // https://caniuse.com/#search=keyframes

    if (prefix.js === 'ms') return key;
    return "@" + prefix.css + "keyframes" + key.substr(10);
  }

  // https://caniuse.com/#search=appearance

  var appearence = {
    noPrefill: ['appearance'],
    supportedProperty: function supportedProperty(prop) {
      if (prop !== 'appearance') return false;
      if (prefix.js === 'ms') return "-webkit-" + prop;
      return prefix.css + prop;
    }
  };

  // https://caniuse.com/#search=color-adjust

  var colorAdjust = {
    noPrefill: ['color-adjust'],
    supportedProperty: function supportedProperty(prop) {
      if (prop !== 'color-adjust') return false;
      if (prefix.js === 'Webkit') return prefix.css + "print-" + prop;
      return prop;
    }
  };

  var regExp = /[-\s]+(.)?/g;
  /**
   * Replaces the letter with the capital letter
   *
   * @param {String} match
   * @param {String} c
   * @return {String}
   * @api private
   */

  function toUpper(match, c) {
    return c ? c.toUpperCase() : '';
  }
  /**
   * Convert dash separated strings to camel-cased.
   *
   * @param {String} str
   * @return {String}
   * @api private
   */


  function camelize(str) {
    return str.replace(regExp, toUpper);
  }

  /**
   * Convert dash separated strings to pascal cased.
   *
   * @param {String} str
   * @return {String}
   * @api private
   */

  function pascalize(str) {
    return camelize("-" + str);
  }

  // but we can use a longhand property instead.
  // https://caniuse.com/#search=mask

  var mask = {
    noPrefill: ['mask'],
    supportedProperty: function supportedProperty(prop, style) {
      if (!/^mask/.test(prop)) return false;

      if (prefix.js === 'Webkit') {
        var longhand = 'mask-image';

        if (camelize(longhand) in style) {
          return prop;
        }

        if (prefix.js + pascalize(longhand) in style) {
          return prefix.css + prop;
        }
      }

      return prop;
    }
  };

  // https://caniuse.com/#search=text-orientation

  var textOrientation = {
    noPrefill: ['text-orientation'],
    supportedProperty: function supportedProperty(prop) {
      if (prop !== 'text-orientation') return false;

      if (prefix.vendor === 'apple' && !prefix.isTouch) {
        return prefix.css + prop;
      }

      return prop;
    }
  };

  // https://caniuse.com/#search=transform

  var transform = {
    noPrefill: ['transform'],
    supportedProperty: function supportedProperty(prop, style, options) {
      if (prop !== 'transform') return false;

      if (options.transform) {
        return prop;
      }

      return prefix.css + prop;
    }
  };

  // https://caniuse.com/#search=transition

  var transition = {
    noPrefill: ['transition'],
    supportedProperty: function supportedProperty(prop, style, options) {
      if (prop !== 'transition') return false;

      if (options.transition) {
        return prop;
      }

      return prefix.css + prop;
    }
  };

  // https://caniuse.com/#search=writing-mode

  var writingMode = {
    noPrefill: ['writing-mode'],
    supportedProperty: function supportedProperty(prop) {
      if (prop !== 'writing-mode') return false;

      if (prefix.js === 'Webkit' || prefix.js === 'ms' && prefix.browser !== 'edge') {
        return prefix.css + prop;
      }

      return prop;
    }
  };

  // https://caniuse.com/#search=user-select

  var userSelect = {
    noPrefill: ['user-select'],
    supportedProperty: function supportedProperty(prop) {
      if (prop !== 'user-select') return false;

      if (prefix.js === 'Moz' || prefix.js === 'ms' || prefix.vendor === 'apple') {
        return prefix.css + prop;
      }

      return prop;
    }
  };

  // https://caniuse.com/#search=multicolumn
  // https://github.com/postcss/autoprefixer/issues/491
  // https://github.com/postcss/autoprefixer/issues/177

  var breakPropsOld = {
    supportedProperty: function supportedProperty(prop, style) {
      if (!/^break-/.test(prop)) return false;

      if (prefix.js === 'Webkit') {
        var jsProp = "WebkitColumn" + pascalize(prop);
        return jsProp in style ? prefix.css + "column-" + prop : false;
      }

      if (prefix.js === 'Moz') {
        var _jsProp = "page" + pascalize(prop);

        return _jsProp in style ? "page-" + prop : false;
      }

      return false;
    }
  };

  // See https://github.com/postcss/autoprefixer/issues/324.

  var inlineLogicalOld = {
    supportedProperty: function supportedProperty(prop, style) {
      if (!/^(border|margin|padding)-inline/.test(prop)) return false;
      if (prefix.js === 'Moz') return prop;
      var newProp = prop.replace('-inline', '');
      return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
    }
  };

  // Camelization is required because we can't test using.
  // CSS syntax for e.g. in FF.

  var unprefixed = {
    supportedProperty: function supportedProperty(prop, style) {
      return camelize(prop) in style ? prop : false;
    }
  };

  var prefixed = {
    supportedProperty: function supportedProperty(prop, style) {
      var pascalized = pascalize(prop); // Return custom CSS variable without prefixing.

      if (prop[0] === '-') return prop; // Return already prefixed value without prefixing.

      if (prop[0] === '-' && prop[1] === '-') return prop;
      if (prefix.js + pascalized in style) return prefix.css + prop; // Try webkit fallback.

      if (prefix.js !== 'Webkit' && "Webkit" + pascalized in style) return "-webkit-" + prop;
      return false;
    }
  };

  // https://caniuse.com/#search=scroll-snap

  var scrollSnap = {
    supportedProperty: function supportedProperty(prop) {
      if (prop.substring(0, 11) !== 'scroll-snap') return false;

      if (prefix.js === 'ms') {
        return "" + prefix.css + prop;
      }

      return prop;
    }
  };

  // https://caniuse.com/#search=overscroll-behavior

  var overscrollBehavior = {
    supportedProperty: function supportedProperty(prop) {
      if (prop !== 'overscroll-behavior') return false;

      if (prefix.js === 'ms') {
        return prefix.css + "scroll-chaining";
      }

      return prop;
    }
  };

  var propMap = {
    'flex-grow': 'flex-positive',
    'flex-shrink': 'flex-negative',
    'flex-basis': 'flex-preferred-size',
    'justify-content': 'flex-pack',
    order: 'flex-order',
    'align-items': 'flex-align',
    'align-content': 'flex-line-pack' // 'align-self' is handled by 'align-self' plugin.

  }; // Support old flex spec from 2012.

  var flex2012 = {
    supportedProperty: function supportedProperty(prop, style) {
      var newProp = propMap[prop];
      if (!newProp) return false;
      return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
    }
  };

  var propMap$1 = {
    flex: 'box-flex',
    'flex-grow': 'box-flex',
    'flex-direction': ['box-orient', 'box-direction'],
    order: 'box-ordinal-group',
    'align-items': 'box-align',
    'flex-flow': ['box-orient', 'box-direction'],
    'justify-content': 'box-pack'
  };
  var propKeys = Object.keys(propMap$1);

  var prefixCss = function prefixCss(p) {
    return prefix.css + p;
  }; // Support old flex spec from 2009.


  var flex2009 = {
    supportedProperty: function supportedProperty(prop, style, _ref) {
      var multiple = _ref.multiple;

      if (propKeys.indexOf(prop) > -1) {
        var newProp = propMap$1[prop];

        if (!Array.isArray(newProp)) {
          return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
        }

        if (!multiple) return false;

        for (var i = 0; i < newProp.length; i++) {
          if (!(prefix.js + pascalize(newProp[0]) in style)) {
            return false;
          }
        }

        return newProp.map(prefixCss);
      }

      return false;
    }
  };

  // plugins = [
  //   ...plugins,
  //    breakPropsOld,
  //    inlineLogicalOld,
  //    unprefixed,
  //    prefixed,
  //    scrollSnap,
  //    flex2012,
  //    flex2009
  // ]
  // Plugins without 'noPrefill' value, going last.
  // 'flex-*' plugins should be at the bottom.
  // 'flex2009' going after 'flex2012'.
  // 'prefixed' going after 'unprefixed'

  var plugins$1 = [appearence, colorAdjust, mask, textOrientation, transform, transition, writingMode, userSelect, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
  var propertyDetectors = plugins$1.filter(function (p) {
    return p.supportedProperty;
  }).map(function (p) {
    return p.supportedProperty;
  });
  var noPrefill = plugins$1.filter(function (p) {
    return p.noPrefill;
  }).reduce(function (a, p) {
    a.push.apply(a, _toConsumableArray(p.noPrefill));
    return a;
  }, []);

  var el;
  var cache$1 = {};

  if (isBrowser) {
    el = document.createElement('p'); // We test every property on vendor prefix requirement.
    // Once tested, result is cached. It gives us up to 70% perf boost.
    // http://jsperf.com/element-style-object-access-vs-plain-object
    //
    // Prefill cache with known css properties to reduce amount of
    // properties we need to feature test at runtime.
    // http://davidwalsh.name/vendor-prefix

    var computed = window.getComputedStyle(document.documentElement, '');

    for (var key$1 in computed) {
      // eslint-disable-next-line no-restricted-globals
      if (!isNaN(key$1)) cache$1[computed[key$1]] = computed[key$1];
    } // Properties that cannot be correctly detected using the
    // cache prefill method.


    noPrefill.forEach(function (x) {
      return delete cache$1[x];
    });
  }
  /**
   * Test if a property is supported, returns supported property with vendor
   * prefix if required. Returns `false` if not supported.
   *
   * @param {String} prop dash separated
   * @param {Object} [options]
   * @return {String|Boolean}
   * @api public
   */


  function supportedProperty(prop, options) {
    if (options === void 0) {
      options = {};
    }

    // For server-side rendering.
    if (!el) return prop; // Remove cache for benchmark tests or return property from the cache.

    if ( cache$1[prop] != null) {
      return cache$1[prop];
    } // Check if 'transition' or 'transform' natively supported in browser.


    if (prop === 'transition' || prop === 'transform') {
      options[prop] = prop in el.style;
    } // Find a plugin for current prefix property.


    for (var i = 0; i < propertyDetectors.length; i++) {
      cache$1[prop] = propertyDetectors[i](prop, el.style, options); // Break loop, if value found.

      if (cache$1[prop]) break;
    } // Reset styles for current property.
    // Firefox can even throw an error for invalid properties, e.g., "0".


    try {
      el.style[prop] = '';
    } catch (err) {
      return false;
    }

    return cache$1[prop];
  }

  var cache$1$1 = {};
  var transitionProperties = {
    transition: 1,
    'transition-property': 1,
    '-webkit-transition': 1,
    '-webkit-transition-property': 1
  };
  var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
  var el$1;
  /**
   * Returns prefixed value transition/transform if needed.
   *
   * @param {String} match
   * @param {String} p1
   * @param {String} p2
   * @return {String}
   * @api private
   */

  function prefixTransitionCallback(match, p1, p2) {
    if (p1 === 'var') return 'var';
    if (p1 === 'all') return 'all';
    if (p2 === 'all') return ', all';
    var prefixedValue = p1 ? supportedProperty(p1) : ", " + supportedProperty(p2);
    if (!prefixedValue) return p1 || p2;
    return prefixedValue;
  }

  if (isBrowser) el$1 = document.createElement('p');
  /**
   * Returns prefixed value if needed. Returns `false` if value is not supported.
   *
   * @param {String} property
   * @param {String} value
   * @return {String|Boolean}
   * @api public
   */

  function supportedValue(property, value) {
    // For server-side rendering.
    var prefixedValue = value;
    if (!el$1 || property === 'content') return value; // It is a string or a number as a string like '1'.
    // We want only prefixable values here.
    // eslint-disable-next-line no-restricted-globals

    if (typeof prefixedValue !== 'string' || !isNaN(parseInt(prefixedValue, 10))) {
      return prefixedValue;
    } // Create cache key for current value.


    var cacheKey = property + prefixedValue; // Remove cache for benchmark tests or return value from cache.

    if ( cache$1$1[cacheKey] != null) {
      return cache$1$1[cacheKey];
    } // IE can even throw an error in some cases, for e.g. style.content = 'bar'.


    try {
      // Test value as it is.
      el$1.style[property] = prefixedValue;
    } catch (err) {
      // Return false if value not supported.
      cache$1$1[cacheKey] = false;
      return false;
    } // If 'transition' or 'transition-property' property.


    if (transitionProperties[property]) {
      prefixedValue = prefixedValue.replace(transPropsRegExp, prefixTransitionCallback);
    } else if (el$1.style[property] === '') {
      // Value with a vendor prefix.
      prefixedValue = prefix.css + prefixedValue; // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.

      if (prefixedValue === '-ms-flex') el$1.style[property] = '-ms-flexbox'; // Test prefixed value.

      el$1.style[property] = prefixedValue; // Return false if value not supported.

      if (el$1.style[property] === '') {
        cache$1$1[cacheKey] = false;
        return false;
      }
    } // Reset styles for current property.


    el$1.style[property] = ''; // Write current value to cache.

    cache$1$1[cacheKey] = prefixedValue;
    return cache$1$1[cacheKey];
  }

  /**
   * Add vendor prefix to a property name when needed.
   *
   * @api public
   */

  function jssVendorPrefixer() {
    function onProcessRule(rule) {
      if (rule.type === 'keyframes') {
        var atRule = rule;
        atRule.at = supportedKeyframes(atRule.at);
      }
    }

    function prefixStyle(style) {
      for (var prop in style) {
        var value = style[prop];

        if (prop === 'fallbacks' && Array.isArray(value)) {
          style[prop] = value.map(prefixStyle);
          continue;
        }

        var changeProp = false;
        var supportedProp = supportedProperty(prop);
        if (supportedProp && supportedProp !== prop) changeProp = true;
        var changeValue = false;
        var supportedValue$$1 = supportedValue(supportedProp, toCssValue(value));
        if (supportedValue$$1 && supportedValue$$1 !== value) changeValue = true;

        if (changeProp || changeValue) {
          if (changeProp) delete style[prop];
          style[supportedProp || prop] = supportedValue$$1 || value;
        }
      }

      return style;
    }

    function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;
      return prefixStyle(style);
    }

    function onChangeValue(value, prop) {
      return supportedValue(prop, toCssValue(value)) || value;
    }

    return {
      onProcessRule: onProcessRule,
      onProcessStyle: onProcessStyle,
      onChangeValue: onChangeValue
    };
  }

  /**
   * Sort props by length.
   */
  function jssPropsSort() {
    var sort = function sort(prop0, prop1) {
      if (prop0.length === prop1.length) {
        return prop0 > prop1 ? 1 : -1;
      }

      return prop0.length - prop1.length;
    };

    return {
      onProcessStyle: function onProcessStyle(style, rule) {
        if (rule.type !== 'style') return style;
        var newStyle = {};
        var props = Object.keys(style).sort(sort);

        for (var i = 0; i < props.length; i++) {
          newStyle[props[i]] = style[props[i]];
        }

        return newStyle;
      }
    };
  }

  function jssPreset() {
    return {
      plugins: [functionPlugin(), jssGlobal(), jssNested(), camelCase(), defaultUnit(), // Disable the vendor prefixer server-side, it does nothing.
      // This way, we can get a performance boost.
      // In the documentation, we are using `autoprefixer` to solve this problem.
      typeof window === 'undefined' ? null : jssVendorPrefixer(), jssPropsSort()]
    };
  }

  function mergeClasses() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var baseClasses = options.baseClasses,
        newClasses = options.newClasses,
        Component = options.Component;

    if (!newClasses) {
      return baseClasses;
    }

    var nextClasses = _extends({}, baseClasses);

    Object.keys(newClasses).forEach(function (key) {

      if (newClasses[key]) {
        nextClasses[key] = "".concat(baseClasses[key], " ").concat(newClasses[key]);
      }
    });
    return nextClasses;
  }

  // Used https://github.com/thinkloop/multi-key-cache as inspiration
  var multiKeyStore = {
    set: function set(cache, key1, key2, value) {
      var subCache = cache.get(key1);

      if (!subCache) {
        subCache = new Map();
        cache.set(key1, subCache);
      }

      subCache.set(key2, value);
    },
    get: function get(cache, key1, key2) {
      var subCache = cache.get(key1);
      return subCache ? subCache.get(key2) : undefined;
    },
    delete: function _delete(cache, key1, key2) {
      var subCache = cache.get(key1);
      subCache.delete(key2);
    }
  };

  var ThemeContext = React__default.createContext(null);

  function useTheme() {
    return React__default.useContext(ThemeContext);
  }

  var jss = create(jssPreset()); // Use a singleton or the provided one by the context.
  //
  // The counter-based approach doesn't tolerate any mistake.
  // It's much safer to use the same counter everywhere.

  var generateClassName = createGenerateClassName(); // Exported for test purposes

  var sheetsManager = new Map();
  var defaultOptions = {
    disableGeneration: false,
    generateClassName: generateClassName,
    jss: jss,
    sheetsCache: null,
    sheetsManager: sheetsManager,
    sheetsRegistry: null
  };
  var StylesContext = React__default.createContext(defaultOptions);

  /* eslint-disable import/prefer-default-export */
  // Global index counter to preserve source order.
  // We create the style sheet during at the creation of the component,
  // children are handled after the parents, so the order of style elements would be parent->child.
  // It is a problem though when a parent passes a className
  // which needs to override any child's styles.
  // StyleSheet of the child has a higher specificity, because of the source order.
  // So our solution is to render sheets them in the reverse order child->sheet, so
  // that parent has a higher specificity.
  var indexCounter = -1e9;
  function increment() {
    indexCounter += 1;

    return indexCounter;
  }

  // We use the same empty object to ref count the styles that don't need a theme object.
  var noopTheme = {};

  function getStylesCreator(stylesOrCreator) {
    var themingEnabled = typeof stylesOrCreator === 'function';

    return {
      create: function create(theme, name) {
        var styles;

        try {
          styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
        } catch (err) {

          throw err;
        }

        if (!name || !theme.overrides || !theme.overrides[name]) {
          return styles;
        }

        var overrides = theme.overrides[name];

        var stylesWithOverrides = _extends({}, styles);

        Object.keys(overrides).forEach(function (key) {

          stylesWithOverrides[key] = deepmerge(stylesWithOverrides[key], overrides[key]);
        });
        return stylesWithOverrides;
      },
      options: {}
    };
  }

  function getClasses(_ref, classes, Component) {
    var state = _ref.state,
        stylesOptions = _ref.stylesOptions;

    if (stylesOptions.disableGeneration) {
      return classes || {};
    }

    if (!state.cacheClasses) {
      state.cacheClasses = {
        // Cache for the finalized classes value.
        value: null,
        // Cache for the last used classes prop pointer.
        lastProp: null,
        // Cache for the last used rendered classes pointer.
        lastJSS: {}
      };
    } // Tracks if either the rendered classes or classes prop has changed,
    // requiring the generation of a new finalized classes object.


    var generate = false;

    if (state.classes !== state.cacheClasses.lastJSS) {
      state.cacheClasses.lastJSS = state.classes;
      generate = true;
    }

    if (classes !== state.cacheClasses.lastProp) {
      state.cacheClasses.lastProp = classes;
      generate = true;
    }

    if (generate) {
      state.cacheClasses.value = mergeClasses({
        baseClasses: state.cacheClasses.lastJSS,
        newClasses: classes,
        Component: Component
      });
    }

    return state.cacheClasses.value;
  }

  function attach(_ref2, props) {
    var state = _ref2.state,
        theme = _ref2.theme,
        stylesOptions = _ref2.stylesOptions,
        stylesCreator = _ref2.stylesCreator,
        name = _ref2.name;

    if (stylesOptions.disableGeneration) {
      return;
    }

    var sheetManager = multiKeyStore.get(stylesOptions.sheetsManager, stylesCreator, theme);

    if (!sheetManager) {
      sheetManager = {
        refs: 0,
        staticSheet: null,
        dynamicStyles: null
      };
      multiKeyStore.set(stylesOptions.sheetsManager, stylesCreator, theme, sheetManager);
    }

    var options = _extends({}, stylesCreator.options, {}, stylesOptions, {
      theme: theme,
      flip: typeof stylesOptions.flip === 'boolean' ? stylesOptions.flip : theme.direction === 'rtl'
    });

    options.generateId = options.serverGenerateClassName || options.generateClassName;
    var sheetsRegistry = stylesOptions.sheetsRegistry;

    if (sheetManager.refs === 0) {
      var staticSheet;

      if (stylesOptions.sheetsCache) {
        staticSheet = multiKeyStore.get(stylesOptions.sheetsCache, stylesCreator, theme);
      }

      var styles = stylesCreator.create(theme, name);

      if (!staticSheet) {
        staticSheet = stylesOptions.jss.createStyleSheet(styles, _extends({
          link: false
        }, options));
        staticSheet.attach();

        if (stylesOptions.sheetsCache) {
          multiKeyStore.set(stylesOptions.sheetsCache, stylesCreator, theme, staticSheet);
        }
      }

      if (sheetsRegistry) {
        sheetsRegistry.add(staticSheet);
      }

      sheetManager.staticSheet = staticSheet;
      sheetManager.dynamicStyles = getDynamicStyles(styles);
    }

    if (sheetManager.dynamicStyles) {
      var dynamicSheet = stylesOptions.jss.createStyleSheet(sheetManager.dynamicStyles, _extends({
        link: true
      }, options));
      dynamicSheet.update(props);
      dynamicSheet.attach();
      state.dynamicSheet = dynamicSheet;
      state.classes = mergeClasses({
        baseClasses: sheetManager.staticSheet.classes,
        newClasses: dynamicSheet.classes
      });

      if (sheetsRegistry) {
        sheetsRegistry.add(dynamicSheet);
      }
    } else {
      state.classes = sheetManager.staticSheet.classes;
    }

    sheetManager.refs += 1;
  }

  function update(_ref3, props) {
    var state = _ref3.state;

    if (state.dynamicSheet) {
      state.dynamicSheet.update(props);
    }
  }

  function detach(_ref4) {
    var state = _ref4.state,
        theme = _ref4.theme,
        stylesOptions = _ref4.stylesOptions,
        stylesCreator = _ref4.stylesCreator;

    if (stylesOptions.disableGeneration) {
      return;
    }

    var sheetManager = multiKeyStore.get(stylesOptions.sheetsManager, stylesCreator, theme);
    sheetManager.refs -= 1;
    var sheetsRegistry = stylesOptions.sheetsRegistry;

    if (sheetManager.refs === 0) {
      multiKeyStore.delete(stylesOptions.sheetsManager, stylesCreator, theme);
      stylesOptions.jss.removeStyleSheet(sheetManager.staticSheet);

      if (sheetsRegistry) {
        sheetsRegistry.remove(sheetManager.staticSheet);
      }
    }

    if (state.dynamicSheet) {
      stylesOptions.jss.removeStyleSheet(state.dynamicSheet);

      if (sheetsRegistry) {
        sheetsRegistry.remove(state.dynamicSheet);
      }
    }
  }

  function useSynchronousEffect(func, values) {
    var key = React__default.useRef([]);
    var output; // Store "generation" key. Just returns a new object every time

    var currentKey = React__default.useMemo(function () {
      return {};
    }, values); // eslint-disable-line react-hooks/exhaustive-deps
    // "the first render", or "memo dropped the value"

    if (key.current !== currentKey) {
      key.current = currentKey;
      output = func();
    }

    React__default.useEffect(function () {
      return function () {
        if (output) {
          output();
        }
      };
    }, [currentKey] // eslint-disable-line react-hooks/exhaustive-deps
    );
  }

  function makeStyles(stylesOrCreator) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var name = options.name,
        classNamePrefixOption = options.classNamePrefix,
        Component = options.Component,
        _options$defaultTheme = options.defaultTheme,
        defaultTheme = _options$defaultTheme === void 0 ? noopTheme : _options$defaultTheme,
        stylesOptions2 = _objectWithoutProperties(options, ["name", "classNamePrefix", "Component", "defaultTheme"]);

    var stylesCreator = getStylesCreator(stylesOrCreator);
    var classNamePrefix = name || classNamePrefixOption || 'makeStyles';
    stylesCreator.options = {
      index: increment(),
      name: name,
      meta: classNamePrefix,
      classNamePrefix: classNamePrefix
    };
    return function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var theme = useTheme() || defaultTheme;

      var stylesOptions = _extends({}, React__default.useContext(StylesContext), {}, stylesOptions2);

      var instance = React__default.useRef();
      var shouldUpdate = React__default.useRef();
      useSynchronousEffect(function () {
        var current = {
          name: name,
          state: {},
          stylesCreator: stylesCreator,
          stylesOptions: stylesOptions,
          theme: theme
        };
        attach(current, props);
        shouldUpdate.current = false;
        instance.current = current;
        return function () {
          detach(current);
        };
      }, [theme, stylesCreator]);
      React__default.useEffect(function () {
        if (shouldUpdate.current) {
          update(instance.current, props);
        }

        shouldUpdate.current = true;
      });
      return getClasses(instance.current, props.classes, Component);
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */
  var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
  };
  var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
  };
  var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  };
  var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  };
  var TYPE_STATICS = {};
  TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
  TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

  function getStatics(component) {
    // React v16.11 and below
    if (reactIs.isMemo(component)) {
      return MEMO_STATICS;
    } // React v16.12 and above


    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
  }

  var defineProperty = Object.defineProperty;
  var getOwnPropertyNames = Object.getOwnPropertyNames;
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var getPrototypeOf = Object.getPrototypeOf;
  var objectPrototype = Object.prototype;
  function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
      // don't hoist over string (html) components
      if (objectPrototype) {
        var inheritedComponent = getPrototypeOf(sourceComponent);

        if (inheritedComponent && inheritedComponent !== objectPrototype) {
          hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
        }
      }

      var keys = getOwnPropertyNames(sourceComponent);

      if (getOwnPropertySymbols) {
        keys = keys.concat(getOwnPropertySymbols(sourceComponent));
      }

      var targetStatics = getStatics(targetComponent);
      var sourceStatics = getStatics(sourceComponent);

      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];

        if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
          var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

          try {
            // Avoid failures from read-only properties
            defineProperty(targetComponent, key, descriptor);
          } catch (e) {}
        }
      }
    }

    return targetComponent;
  }

  var hoistNonReactStatics_cjs = hoistNonReactStatics;

  // It does not modify the component passed to it;
  // instead, it returns a new component, with a `classes` property.

  var withStyles = function withStyles(stylesOrCreator) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return function (Component) {
      var defaultTheme = options.defaultTheme,
          _options$withTheme = options.withTheme,
          withTheme = _options$withTheme === void 0 ? false : _options$withTheme,
          name = options.name,
          stylesOptions = _objectWithoutProperties(options, ["defaultTheme", "withTheme", "name"]);

      var classNamePrefix = name;

      var useStyles = makeStyles(stylesOrCreator, _extends({
        defaultTheme: defaultTheme,
        Component: Component,
        name: name || Component.displayName,
        classNamePrefix: classNamePrefix
      }, stylesOptions));
      var WithStyles = React__default.forwardRef(function WithStyles(props, ref) {
        var classesProp = props.classes,
            innerRef = props.innerRef,
            other = _objectWithoutProperties(props, ["classes", "innerRef"]); // The wrapper receives only user supplied props, which could be a subset of
        // the actual props Component might receive due to merging with defaultProps.
        // So copying it here would give us the same result in the wrapper as well.


        var classes = useStyles(_extends({}, Component.defaultProps, {}, props));
        var theme;
        var more = other;

        if (typeof name === 'string' || withTheme) {
          // name and withTheme are invariant in the outer scope
          // eslint-disable-next-line react-hooks/rules-of-hooks
          theme = useTheme() || defaultTheme;

          if (name) {
            more = getThemeProps({
              theme: theme,
              name: name,
              props: other
            });
          } // Provide the theme to the wrapped component.
          // So we don't have to use the `withTheme()` Higher-order Component.


          if (withTheme && !more.theme) {
            more.theme = theme;
          }
        }

        return React__default.createElement(Component, _extends({
          ref: innerRef || ref,
          classes: classes
        }, more));
      });

      hoistNonReactStatics_cjs(WithStyles, Component);

      return WithStyles;
    };
  };

  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  var keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

  function createBreakpoints(breakpoints) {
    var _breakpoints$values = breakpoints.values,
        values = _breakpoints$values === void 0 ? {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    } : _breakpoints$values,
        _breakpoints$unit = breakpoints.unit,
        unit = _breakpoints$unit === void 0 ? 'px' : _breakpoints$unit,
        _breakpoints$step = breakpoints.step,
        step = _breakpoints$step === void 0 ? 5 : _breakpoints$step,
        other = _objectWithoutProperties(breakpoints, ["values", "unit", "step"]);

    function up(key) {
      var value = typeof values[key] === 'number' ? values[key] : key;
      return "@media (min-width:".concat(value).concat(unit, ")");
    }

    function down(key) {
      var endIndex = keys.indexOf(key) + 1;
      var upperbound = values[keys[endIndex]];

      if (endIndex === keys.length) {
        // xl down applies to all sizes
        return up('xs');
      }

      var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
      return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
    }

    function between(start, end) {
      var endIndex = keys.indexOf(end);

      if (endIndex === keys.length - 1) {
        return up(start);
      }

      return "@media (min-width:".concat(typeof values[start] === 'number' ? values[start] : start).concat(unit, ") and ") + "(max-width:".concat((endIndex !== -1 && typeof values[keys[endIndex + 1]] === 'number' ? values[keys[endIndex + 1]] : end) - step / 100).concat(unit, ")");
    }

    function only(key) {
      return between(key, key);
    }

    function width(key) {
      return values[key];
    }

    return _extends({
      keys: keys,
      values: values,
      up: up,
      down: down,
      between: between,
      only: only,
      width: width
    }, other);
  }

  function createMixins(breakpoints, spacing, mixins) {
    var _toolbar;

    return _extends({
      gutters: function gutters() {
        var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        // To deprecate in v4.1
        //       warning(
        //         false,
        //         [
        //           'Material-UI: theme.mixins.gutters() is deprecated.',
        //           'You can use the source of the mixin directly:',
        //           `
        // paddingLeft: theme.spacing(2),
        // paddingRight: theme.spacing(2),
        // [theme.breakpoints.up('sm')]: {
        //   paddingLeft: theme.spacing(3),
        //   paddingRight: theme.spacing(3),
        // },
        // `,
        //         ].join('\n'),
        //       );
        return _extends({
          paddingLeft: spacing(2),
          paddingRight: spacing(2)
        }, styles, _defineProperty({}, breakpoints.up('sm'), _extends({
          paddingLeft: spacing(3),
          paddingRight: spacing(3)
        }, styles[breakpoints.up('sm')])));
      },
      toolbar: (_toolbar = {
        minHeight: 56
      }, _defineProperty(_toolbar, "".concat(breakpoints.up('xs'), " and (orientation: landscape)"), {
        minHeight: 48
      }), _defineProperty(_toolbar, breakpoints.up('sm'), {
        minHeight: 64
      }), _toolbar)
    }, mixins);
  }

  var common = {
    black: '#000',
    white: '#fff'
  };

  var grey = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#d5d5d5',
    A200: '#aaaaaa',
    A400: '#303030',
    A700: '#616161'
  };

  var indigo = {
    50: '#e8eaf6',
    100: '#c5cae9',
    200: '#9fa8da',
    300: '#7986cb',
    400: '#5c6bc0',
    500: '#3f51b5',
    600: '#3949ab',
    700: '#303f9f',
    800: '#283593',
    900: '#1a237e',
    A100: '#8c9eff',
    A200: '#536dfe',
    A400: '#3d5afe',
    A700: '#304ffe'
  };

  var pink = {
    50: '#fce4ec',
    100: '#f8bbd0',
    200: '#f48fb1',
    300: '#f06292',
    400: '#ec407a',
    500: '#e91e63',
    600: '#d81b60',
    700: '#c2185b',
    800: '#ad1457',
    900: '#880e4f',
    A100: '#ff80ab',
    A200: '#ff4081',
    A400: '#f50057',
    A700: '#c51162'
  };

  var red = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000'
  };

  var orange = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00'
  };

  var blue = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff'
  };

  var green = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853'
  };

  /* eslint-disable no-use-before-define */

  /**
   * Returns a number whose value is limited to the given range.
   *
   * @param {number} value The value to be clamped
   * @param {number} min The lower boundary of the output range
   * @param {number} max The upper boundary of the output range
   * @returns {number} A number in the range [min, max]
   */
  function clamp(value) {
    var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    return Math.min(Math.max(min, value), max);
  }
  /**
   * Converts a color from CSS hex format to CSS rgb format.
   *
   * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
   * @returns {string} A CSS rgb color string
   */


  function hexToRgb(color) {
    color = color.substr(1);
    var re = new RegExp(".{1,".concat(color.length / 3, "}"), 'g');
    var colors = color.match(re);

    if (colors && colors[0].length === 1) {
      colors = colors.map(function (n) {
        return n + n;
      });
    }

    return colors ? "rgb(".concat(colors.map(function (n) {
      return parseInt(n, 16);
    }).join(', '), ")") : '';
  }
  /**
   * Converts a color from hsl format to rgb format.
   *
   * @param {string} color - HSL color values
   * @returns {string} rgb color values
   */

  function hslToRgb(color) {
    color = decomposeColor(color);
    var _color = color,
        values = _color.values;
    var h = values[0];
    var s = values[1] / 100;
    var l = values[2] / 100;
    var a = s * Math.min(l, 1 - l);

    var f = function f(n) {
      var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 30) % 12;
      return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    };

    var type = 'rgb';
    var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

    if (color.type === 'hsla') {
      type += 'a';
      rgb.push(values[3]);
    }

    return recomposeColor({
      type: type,
      values: rgb
    });
  }
  /**
   * Returns an object with the type and values of a color.
   *
   * Note: Does not support rgb % values.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @returns {object} - A MUI color object: {type: string, values: number[]}
   */

  function decomposeColor(color) {
    // Idempotent
    if (color.type) {
      return color;
    }

    if (color.charAt(0) === '#') {
      return decomposeColor(hexToRgb(color));
    }

    var marker = color.indexOf('(');
    var type = color.substring(0, marker);

    if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
      throw new Error(["Material-UI: unsupported `".concat(color, "` color."), 'We support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().'].join('\n'));
    }

    var values = color.substring(marker + 1, color.length - 1).split(',');
    values = values.map(function (value) {
      return parseFloat(value);
    });
    return {
      type: type,
      values: values
    };
  }
  /**
   * Converts a color object with type and values to a string.
   *
   * @param {object} color - Decomposed color
   * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
   * @param {array} color.values - [n,n,n] or [n,n,n,n]
   * @returns {string} A CSS color string
   */

  function recomposeColor(color) {
    var type = color.type;
    var values = color.values;

    if (type.indexOf('rgb') !== -1) {
      // Only convert the first 3 values to int (i.e. not alpha)
      values = values.map(function (n, i) {
        return i < 3 ? parseInt(n, 10) : n;
      });
    } else if (type.indexOf('hsl') !== -1) {
      values[1] = "".concat(values[1], "%");
      values[2] = "".concat(values[2], "%");
    }

    return "".concat(type, "(").concat(values.join(', '), ")");
  }
  /**
   * Calculates the contrast ratio between two colors.
   *
   * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
   *
   * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @returns {number} A contrast ratio value in the range 0 - 21.
   */

  function getContrastRatio(foreground, background) {
    var lumA = getLuminance(foreground);
    var lumB = getLuminance(background);
    return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
  }
  /**
   * The relative brightness of any point in a color space,
   * normalized to 0 for darkest black and 1 for lightest white.
   *
   * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @returns {number} The relative brightness of the color in the range 0 - 1
   */

  function getLuminance(color) {
    color = decomposeColor(color);
    var rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
    rgb = rgb.map(function (val) {
      val /= 255; // normalized

      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    }); // Truncate at 3 digits

    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
  }
  /**
   * Set the absolute transparency of a color.
   * Any existing alpha values are overwritten.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {number} value - value to set the alpha channel to in the range 0 -1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */

  function fade(color, value) {
    color = decomposeColor(color);
    value = clamp(value);

    if (color.type === 'rgb' || color.type === 'hsl') {
      color.type += 'a';
    }

    color.values[3] = value;
    return recomposeColor(color);
  }
  /**
   * Darkens a color.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {number} coefficient - multiplier in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */

  function darken(color, coefficient) {
    color = decomposeColor(color);
    coefficient = clamp(coefficient);

    if (color.type.indexOf('hsl') !== -1) {
      color.values[2] *= 1 - coefficient;
    } else if (color.type.indexOf('rgb') !== -1) {
      for (var i = 0; i < 3; i += 1) {
        color.values[i] *= 1 - coefficient;
      }
    }

    return recomposeColor(color);
  }
  /**
   * Lightens a color.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {number} coefficient - multiplier in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */

  function lighten(color, coefficient) {
    color = decomposeColor(color);
    coefficient = clamp(coefficient);

    if (color.type.indexOf('hsl') !== -1) {
      color.values[2] += (100 - color.values[2]) * coefficient;
    } else if (color.type.indexOf('rgb') !== -1) {
      for (var i = 0; i < 3; i += 1) {
        color.values[i] += (255 - color.values[i]) * coefficient;
      }
    }

    return recomposeColor(color);
  }

  var light = {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: 'rgba(0, 0, 0, 0.87)',
      // Secondary text.
      secondary: 'rgba(0, 0, 0, 0.54)',
      // Disabled text have even lower visual prominence.
      disabled: 'rgba(0, 0, 0, 0.38)',
      // Text hints.
      hint: 'rgba(0, 0, 0, 0.38)'
    },
    // The color used to divide different elements.
    divider: 'rgba(0, 0, 0, 0.12)',
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: common.white,
      default: grey[50]
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: 'rgba(0, 0, 0, 0.54)',
      // The color of an hovered action.
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: 'rgba(0, 0, 0, 0.26)',
      // The background color of a disabled action.
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
  var dark = {
    text: {
      primary: common.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)'
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: {
      paper: grey[800],
      default: '#303030'
    },
    action: {
      active: common.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };

  function addLightOrDark(intent, direction, shade, tonalOffset) {
    if (!intent[direction]) {
      if (intent.hasOwnProperty(shade)) {
        intent[direction] = intent[shade];
      } else if (direction === 'light') {
        intent.light = lighten(intent.main, tonalOffset);
      } else if (direction === 'dark') {
        intent.dark = darken(intent.main, tonalOffset * 1.5);
      }
    }
  }

  function createPalette(palette) {
    var _palette$primary = palette.primary,
        primary = _palette$primary === void 0 ? {
      light: indigo[300],
      main: indigo[500],
      dark: indigo[700]
    } : _palette$primary,
        _palette$secondary = palette.secondary,
        secondary = _palette$secondary === void 0 ? {
      light: pink.A200,
      main: pink.A400,
      dark: pink.A700
    } : _palette$secondary,
        _palette$error = palette.error,
        error = _palette$error === void 0 ? {
      light: red[300],
      main: red[500],
      dark: red[700]
    } : _palette$error,
        _palette$warning = palette.warning,
        warning = _palette$warning === void 0 ? {
      light: orange[300],
      main: orange[500],
      dark: orange[700]
    } : _palette$warning,
        _palette$info = palette.info,
        info = _palette$info === void 0 ? {
      light: blue[300],
      main: blue[500],
      dark: blue[700]
    } : _palette$info,
        _palette$success = palette.success,
        success = _palette$success === void 0 ? {
      light: green[300],
      main: green[500],
      dark: green[700]
    } : _palette$success,
        _palette$type = palette.type,
        type = _palette$type === void 0 ? 'light' : _palette$type,
        _palette$contrastThre = palette.contrastThreshold,
        contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
        _palette$tonalOffset = palette.tonalOffset,
        tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
        other = _objectWithoutProperties(palette, ["primary", "secondary", "error", "warning", "info", "success", "type", "contrastThreshold", "tonalOffset"]); // Use the same logic as
    // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
    // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54


    function getContrastText(background) {
      var contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

      return contrastText;
    }

    var augmentColor = function augmentColor(color) {
      var mainShade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
      var lightShade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
      var darkShade = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 700;
      color = _extends({}, color);

      if (!color.main && color[mainShade]) {
        color.main = color[mainShade];
      }

      if (!color.main) {
        throw new Error(['Material-UI: the color provided to augmentColor(color) is invalid.', "The color object needs to have a `main` property or a `".concat(mainShade, "` property.")].join('\n'));
      }

      if (typeof color.main !== 'string') {
        throw new Error(['Material-UI: the color provided to augmentColor(color) is invalid.', "`color.main` should be a string, but `".concat(JSON.stringify(color.main), "` was provided instead."), '', 'Did you intend to use one of the following approaches?', '', 'import { green } from "@material-ui/core/colors";', '', 'const theme1 = createMuiTheme({ palette: {', '  primary: green,', '} });', '', 'const theme2 = createMuiTheme({ palette: {', '  primary: { main: green[500] },', '} });'].join('\n'));
      }

      addLightOrDark(color, 'light', lightShade, tonalOffset);
      addLightOrDark(color, 'dark', darkShade, tonalOffset);

      if (!color.contrastText) {
        color.contrastText = getContrastText(color.main);
      }

      return color;
    };

    var types = {
      dark: dark,
      light: light
    };

    var paletteOutput = deepmerge(_extends({
      // A collection of common colors.
      common: common,
      // The palette type, can be light or dark.
      type: type,
      // The colors used to represent primary interface elements for a user.
      primary: augmentColor(primary),
      // The colors used to represent secondary interface elements for a user.
      secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
      // The colors used to represent interface elements that the user should be made aware of.
      error: augmentColor(error),
      // The colors used to represent potentially dangerous actions or important messages.
      warning: augmentColor(warning),
      // The colors used to present information to the user that is neutral and not necessarily important.
      info: augmentColor(info),
      // The colors used to indicate the successful completion of an action that user triggered.
      success: augmentColor(success),
      // The grey colors.
      grey: grey,
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: contrastThreshold,
      // Takes a background color and returns the text color that maximizes the contrast.
      getContrastText: getContrastText,
      // Generate a rich color object.
      augmentColor: augmentColor,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: tonalOffset
    }, types[type]), other);
    return paletteOutput;
  }

  function round(value) {
    return Math.round(value * 1e5) / 1e5;
  }

  var caseAllCaps = {
    textTransform: 'uppercase'
  };
  var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
  /**
   * @see @link{https://material.io/design/typography/the-type-system.html}
   * @see @link{https://material.io/design/typography/understanding-typography.html}
   */

  function createTypography(palette, typography) {
    var _ref = typeof typography === 'function' ? typography(palette) : typography,
        _ref$fontFamily = _ref.fontFamily,
        fontFamily = _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily,
        _ref$fontSize = _ref.fontSize,
        fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
        _ref$fontWeightLight = _ref.fontWeightLight,
        fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
        _ref$fontWeightRegula = _ref.fontWeightRegular,
        fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
        _ref$fontWeightMedium = _ref.fontWeightMedium,
        fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
        _ref$fontWeightBold = _ref.fontWeightBold,
        fontWeightBold = _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold,
        _ref$htmlFontSize = _ref.htmlFontSize,
        htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
        allVariants = _ref.allVariants,
        pxToRem2 = _ref.pxToRem,
        other = _objectWithoutProperties(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);

    var coef = fontSize / 14;

    var pxToRem = pxToRem2 || function (size) {
      return "".concat(size / htmlFontSize * coef, "rem");
    };

    var buildVariant = function buildVariant(fontWeight, size, lineHeight, letterSpacing, casing) {
      return _extends({
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        fontSize: pxToRem(size),
        // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
        lineHeight: lineHeight
      }, fontFamily === defaultFontFamily ? {
        letterSpacing: "".concat(round(letterSpacing / size), "em")
      } : {}, {}, casing, {}, allVariants);
    };

    var variants = {
      h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
      h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
      h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
      h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
      h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
      h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
      subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
      subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
      body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
      body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
      button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
      caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
      overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
    };
    return deepmerge(_extends({
      htmlFontSize: htmlFontSize,
      pxToRem: pxToRem,
      round: round,
      // TODO v5: remove
      fontFamily: fontFamily,
      fontSize: fontSize,
      fontWeightLight: fontWeightLight,
      fontWeightRegular: fontWeightRegular,
      fontWeightMedium: fontWeightMedium,
      fontWeightBold: fontWeightBold
    }, variants), other, {
      clone: false // No need to clone deep

    });
  }

  var shadowKeyUmbraOpacity = 0.2;
  var shadowKeyPenumbraOpacity = 0.14;
  var shadowAmbientShadowOpacity = 0.12;

  function createShadow() {
    return ["".concat(arguments.length <= 0 ? undefined : arguments[0], "px ").concat(arguments.length <= 1 ? undefined : arguments[1], "px ").concat(arguments.length <= 2 ? undefined : arguments[2], "px ").concat(arguments.length <= 3 ? undefined : arguments[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? undefined : arguments[4], "px ").concat(arguments.length <= 5 ? undefined : arguments[5], "px ").concat(arguments.length <= 6 ? undefined : arguments[6], "px ").concat(arguments.length <= 7 ? undefined : arguments[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? undefined : arguments[8], "px ").concat(arguments.length <= 9 ? undefined : arguments[9], "px ").concat(arguments.length <= 10 ? undefined : arguments[10], "px ").concat(arguments.length <= 11 ? undefined : arguments[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")].join(',');
  } // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


  var shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];

  var shape = {
    borderRadius: 4
  };

  function createUnarySpacing(theme) {
    var themeSpacing = theme.spacing || 8;

    if (typeof themeSpacing === 'number') {
      return function (abs) {

        return themeSpacing * abs;
      };
    }

    if (Array.isArray(themeSpacing)) {
      return function (abs) {

        return themeSpacing[abs];
      };
    }

    if (typeof themeSpacing === 'function') {
      return themeSpacing;
    }

    return function () {
      return undefined;
    };
  }

  function createSpacing() {
    var spacingInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;

    // Already transformed.
    if (spacingInput.mui) {
      return spacingInput;
    } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid applied, which aligns both spacing and the overall layout.
    // Smaller components, such as icons and type, can align to a 4dp grid.
    // https://material.io/design/layout/understanding-layout.html#usage


    var transform = createUnarySpacing({
      spacing: spacingInput
    });

    var spacing = function spacing() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (args.length === 0) {
        return transform(1);
      }

      if (args.length === 1) {
        return transform(args[0]);
      }

      return args.map(function (factor) {
        var output = transform(factor);
        return typeof output === 'number' ? "".concat(output, "px") : output;
      }).join(' ');
    }; // Backward compatibility, to remove in v5.


    Object.defineProperty(spacing, 'unit', {
      get: function get() {

        return spacingInput;
      }
    });
    spacing.mui = true;
    return spacing;
  }

  // Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
  // to learn the context in which each easing should be used.
  var easing = {
    // This is the most common easing curve.
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Objects enter the screen at full velocity from off-screen and
    // slowly decelerate to a resting point.
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    // The sharp curve is used by objects that may return to the screen at any time.
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
  }; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
  // to learn when use what timing

  var duration = {
    shortest: 150,
    shorter: 200,
    short: 250,
    // most basic recommended timing
    standard: 300,
    // this is to be used in complex animations
    complex: 375,
    // recommended when something is entering screen
    enteringScreen: 225,
    // recommended when something is leaving screen
    leavingScreen: 195
  };

  function formatMs(milliseconds) {
    return "".concat(Math.round(milliseconds), "ms");
  }
  /**
   * @param {string|Array} props
   * @param {object} param
   * @param {string} param.prop
   * @param {number} param.duration
   * @param {string} param.easing
   * @param {number} param.delay
   */


  var transitions = {
    easing: easing,
    duration: duration,
    create: function create() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _options$duration = options.duration,
          durationOption = _options$duration === void 0 ? duration.standard : _options$duration,
          _options$easing = options.easing,
          easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing,
          _options$delay = options.delay,
          delay = _options$delay === void 0 ? 0 : _options$delay,
          other = _objectWithoutProperties(options, ["duration", "easing", "delay"]);

      return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
        return "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay));
      }).join(',');
    },
    getAutoHeightDuration: function getAutoHeightDuration(height) {
      if (!height) {
        return 0;
      }

      var constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

      return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
    }
  };

  // We need to centralize the zIndex definitions as they work
  // like global values in the browser.
  var zIndex = {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };

  function createMuiTheme() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _options$breakpoints = options.breakpoints,
        breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
        _options$mixins = options.mixins,
        mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
        _options$palette = options.palette,
        paletteInput = _options$palette === void 0 ? {} : _options$palette,
        spacingInput = options.spacing,
        _options$typography = options.typography,
        typographyInput = _options$typography === void 0 ? {} : _options$typography,
        other = _objectWithoutProperties(options, ["breakpoints", "mixins", "palette", "spacing", "typography"]);

    var palette = createPalette(paletteInput);
    var breakpoints = createBreakpoints(breakpointsInput);
    var spacing = createSpacing(spacingInput);
    var muiTheme = deepmerge({
      breakpoints: breakpoints,
      direction: 'ltr',
      mixins: createMixins(breakpoints, spacing, mixinsInput),
      overrides: {},
      // Inject custom styles
      palette: palette,
      props: {},
      // Provide default props
      shadows: shadows,
      typography: createTypography(palette, typographyInput),
      spacing: spacing,
      shape: shape,
      transitions: transitions,
      zIndex: zIndex
    }, other);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    muiTheme = args.reduce(function (acc, argument) {
      return deepmerge(acc, argument);
    }, muiTheme);

    return muiTheme;
  }

  var defaultTheme = createMuiTheme();

  function withStyles$1(stylesOrCreator, options) {
    return withStyles(stylesOrCreator, _extends({
      defaultTheme: defaultTheme
    }, options));
  }

  // TODO v5: consider to make it private
  function setRef(ref, value) {
    if (typeof ref === 'function') {
      ref(value);
    } else if (ref) {
      ref.current = value;
    }
  }

  function useForkRef(refA, refB) {
    /**
     * This will create a new function if the ref props change and are defined.
     * This means react will call the old forkRef with `null` and the new forkRef
     * with the ref. Cleanup naturally emerges from this behavior
     */
    return React.useMemo(function () {
      if (refA == null && refB == null) {
        return null;
      }

      return function (refValue) {
        setRef(refA, refValue);
        setRef(refB, refValue);
      };
    }, [refA, refB]);
  }

  var useEnhancedEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
  /**
   * https://github.com/facebook/react/issues/14099#issuecomment-440013892
   *
   * @param {function} fn
   */

  function useEventCallback(fn) {
    var ref = React.useRef(fn);
    useEnhancedEffect(function () {
      ref.current = fn;
    });
    return React.useCallback(function () {
      return (ref.current).apply(void 0, arguments);
    }, []);
  }

  var useEnhancedEffect$1 = typeof window !== 'undefined' && "production" !== 'test' ? React.useLayoutEffect : React.useEffect;
  /**
   * NoSsr purposely removes components from the subject of Server Side Rendering (SSR).
   *
   * This component can be useful in a variety of situations:
   * - Escape hatch for broken dependencies not supporting SSR.
   * - Improve the time-to-first paint on the client by only rendering above the fold.
   * - Reduce the rendering time on the server.
   * - Under too heavy server load, you can turn on service degradation.
   */

  function NoSsr(props) {
    var children = props.children,
        _props$defer = props.defer,
        defer = _props$defer === void 0 ? false : _props$defer,
        _props$fallback = props.fallback,
        fallback = _props$fallback === void 0 ? null : _props$fallback;

    var _React$useState = React.useState(false),
        mountedState = _React$useState[0],
        setMountedState = _React$useState[1];

    useEnhancedEffect$1(function () {
      if (!defer) {
        setMountedState(true);
      }
    }, [defer]);
    React.useEffect(function () {
      if (defer) {
        setMountedState(true);
      }
    }, [defer]); // We need the Fragment here to force react-docgen to recognise NoSsr as a component.

    return /*#__PURE__*/React.createElement(React.Fragment, null, mountedState ? children : fallback);
  }

  // based on https://github.com/WICG/focus-visible/blob/v4.1.5/src/focus-visible.js
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesWhitelist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };
  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} node
   * @return {boolean}
   */

  function focusTriggersKeyboardModality(node) {
    var type = node.type,
        tagName = node.tagName;

    if (tagName === 'INPUT' && inputTypesWhitelist[type] && !node.readOnly) {
      return true;
    }

    if (tagName === 'TEXTAREA' && !node.readOnly) {
      return true;
    }

    if (node.isContentEditable) {
      return true;
    }

    return false;
  }
  /**
   * Keep track of our keyboard modality state with `hadKeyboardEvent`.
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * @param {KeyboardEvent} event
   */


  function handleKeyDown(event) {
    if (event.metaKey || event.altKey || event.ctrlKey) {
      return;
    }

    hadKeyboardEvent = true;
  }
  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   */


  function handlePointerDown() {
    hadKeyboardEvent = false;
  }

  function handleVisibilityChange() {
    if (this.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }
    }
  }

  function prepare(doc) {
    doc.addEventListener('keydown', handleKeyDown, true);
    doc.addEventListener('mousedown', handlePointerDown, true);
    doc.addEventListener('pointerdown', handlePointerDown, true);
    doc.addEventListener('touchstart', handlePointerDown, true);
    doc.addEventListener('visibilitychange', handleVisibilityChange, true);
  }

  function isFocusVisible(event) {
    var target = event.target;

    try {
      return target.matches(':focus-visible');
    } catch (error) {} // browsers not implementing :focus-visible will throw a SyntaxError
    // we use our own heuristic for those browsers
    // rethrow might be better if it's not the expected error but do we really
    // want to crash if focus-visible malfunctioned?
    // no need for validFocusTarget check. the user does that by attaching it to
    // focusable events only


    return hadKeyboardEvent || focusTriggersKeyboardModality(target);
  }
  /**
   * Should be called if a blur event is fired on a focus-visible element
   */


  function handleBlurVisible() {
    // To detect a tab/window switch, we look for a blur event followed
    // rapidly by a visibility change.
    // If we don't see a visibility change within 100ms, it's probably a
    // regular focus change.
    hadFocusVisibleRecently = true;
    window.clearTimeout(hadFocusVisibleRecentlyTimeout);
    hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
      hadFocusVisibleRecently = false;
    }, 100);
  }

  function useIsFocusVisible() {
    var ref = React.useCallback(function (instance) {
      var node = ReactDOM.findDOMNode(instance);

      if (node != null) {
        prepare(node.ownerDocument);
      }
    }, []);

    return {
      isFocusVisible: isFocusVisible,
      onBlurVisible: handleBlurVisible,
      ref: ref
    };
  }

  var config = {
    disabled: false
  };

  var TransitionGroupContext = React__default.createContext(null);

  var UNMOUNTED = 'unmounted';
  var EXITED = 'exited';
  var ENTERING = 'entering';
  var ENTERED = 'entered';
  var EXITING = 'exiting';
  /**
   * The Transition component lets you describe a transition from one component
   * state to another _over time_ with a simple declarative API. Most commonly
   * it's used to animate the mounting and unmounting of a component, but can also
   * be used to describe in-place transition states as well.
   *
   * ---
   *
   * **Note**: `Transition` is a platform-agnostic base component. If you're using
   * transitions in CSS, you'll probably want to use
   * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
   * instead. It inherits all the features of `Transition`, but contains
   * additional features necessary to play nice with CSS transitions (hence the
   * name of the component).
   *
   * ---
   *
   * By default the `Transition` component does not alter the behavior of the
   * component it renders, it only tracks "enter" and "exit" states for the
   * components. It's up to you to give meaning and effect to those states. For
   * example we can add styles to a component when it enters or exits:
   *
   * ```jsx
   * import { Transition } from 'react-transition-group';
   *
   * const duration = 300;
   *
   * const defaultStyle = {
   *   transition: `opacity ${duration}ms ease-in-out`,
   *   opacity: 0,
   * }
   *
   * const transitionStyles = {
   *   entering: { opacity: 1 },
   *   entered:  { opacity: 1 },
   *   exiting:  { opacity: 0 },
   *   exited:  { opacity: 0 },
   * };
   *
   * const Fade = ({ in: inProp }) => (
   *   <Transition in={inProp} timeout={duration}>
   *     {state => (
   *       <div style={{
   *         ...defaultStyle,
   *         ...transitionStyles[state]
   *       }}>
   *         I'm a fade Transition!
   *       </div>
   *     )}
   *   </Transition>
   * );
   * ```
   *
   * There are 4 main states a Transition can be in:
   *  - `'entering'`
   *  - `'entered'`
   *  - `'exiting'`
   *  - `'exited'`
   *
   * Transition state is toggled via the `in` prop. When `true` the component
   * begins the "Enter" stage. During this stage, the component will shift from
   * its current transition state, to `'entering'` for the duration of the
   * transition and then to the `'entered'` stage once it's complete. Let's take
   * the following example (we'll use the
   * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
   *
   * ```jsx
   * function App() {
   *   const [inProp, setInProp] = useState(false);
   *   return (
   *     <div>
   *       <Transition in={inProp} timeout={500}>
   *         {state => (
   *           // ...
   *         )}
   *       </Transition>
   *       <button onClick={() => setInProp(true)}>
   *         Click to Enter
   *       </button>
   *     </div>
   *   );
   * }
   * ```
   *
   * When the button is clicked the component will shift to the `'entering'` state
   * and stay there for 500ms (the value of `timeout`) before it finally switches
   * to `'entered'`.
   *
   * When `in` is `false` the same thing happens except the state moves from
   * `'exiting'` to `'exited'`.
   */

  var Transition =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Transition, _React$Component);

    function Transition(props, context) {
      var _this;

      _this = _React$Component.call(this, props, context) || this;
      var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

      var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
      var initialStatus;
      _this.appearStatus = null;

      if (props.in) {
        if (appear) {
          initialStatus = EXITED;
          _this.appearStatus = ENTERING;
        } else {
          initialStatus = ENTERED;
        }
      } else {
        if (props.unmountOnExit || props.mountOnEnter) {
          initialStatus = UNMOUNTED;
        } else {
          initialStatus = EXITED;
        }
      }

      _this.state = {
        status: initialStatus
      };
      _this.nextCallback = null;
      return _this;
    }

    Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
      var nextIn = _ref.in;

      if (nextIn && prevState.status === UNMOUNTED) {
        return {
          status: EXITED
        };
      }

      return null;
    }; // getSnapshotBeforeUpdate(prevProps) {
    //   let nextStatus = null
    //   if (prevProps !== this.props) {
    //     const { status } = this.state
    //     if (this.props.in) {
    //       if (status !== ENTERING && status !== ENTERED) {
    //         nextStatus = ENTERING
    //       }
    //     } else {
    //       if (status === ENTERING || status === ENTERED) {
    //         nextStatus = EXITING
    //       }
    //     }
    //   }
    //   return { nextStatus }
    // }


    var _proto = Transition.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.updateStatus(true, this.appearStatus);
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      var nextStatus = null;

      if (prevProps !== this.props) {
        var status = this.state.status;

        if (this.props.in) {
          if (status !== ENTERING && status !== ENTERED) {
            nextStatus = ENTERING;
          }
        } else {
          if (status === ENTERING || status === ENTERED) {
            nextStatus = EXITING;
          }
        }
      }

      this.updateStatus(false, nextStatus);
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.cancelNextCallback();
    };

    _proto.getTimeouts = function getTimeouts() {
      var timeout = this.props.timeout;
      var exit, enter, appear;
      exit = enter = appear = timeout;

      if (timeout != null && typeof timeout !== 'number') {
        exit = timeout.exit;
        enter = timeout.enter; // TODO: remove fallback for next major

        appear = timeout.appear !== undefined ? timeout.appear : enter;
      }

      return {
        exit: exit,
        enter: enter,
        appear: appear
      };
    };

    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
      if (mounting === void 0) {
        mounting = false;
      }

      if (nextStatus !== null) {
        // nextStatus will always be ENTERING or EXITING.
        this.cancelNextCallback();
        var node = ReactDOM__default.findDOMNode(this);

        if (nextStatus === ENTERING) {
          this.performEnter(node, mounting);
        } else {
          this.performExit(node);
        }
      } else if (this.props.unmountOnExit && this.state.status === EXITED) {
        this.setState({
          status: UNMOUNTED
        });
      }
    };

    _proto.performEnter = function performEnter(node, mounting) {
      var _this2 = this;

      var enter = this.props.enter;
      var appearing = this.context ? this.context.isMounting : mounting;
      var timeouts = this.getTimeouts();
      var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
      // if we are mounting and running this it means appear _must_ be set

      if (!mounting && !enter || config.disabled) {
        this.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node);
        });
        return;
      }

      this.props.onEnter(node, appearing);
      this.safeSetState({
        status: ENTERING
      }, function () {
        _this2.props.onEntering(node, appearing);

        _this2.onTransitionEnd(node, enterTimeout, function () {
          _this2.safeSetState({
            status: ENTERED
          }, function () {
            _this2.props.onEntered(node, appearing);
          });
        });
      });
    };

    _proto.performExit = function performExit(node) {
      var _this3 = this;

      var exit = this.props.exit;
      var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

      if (!exit || config.disabled) {
        this.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
        return;
      }

      this.props.onExit(node);
      this.safeSetState({
        status: EXITING
      }, function () {
        _this3.props.onExiting(node);

        _this3.onTransitionEnd(node, timeouts.exit, function () {
          _this3.safeSetState({
            status: EXITED
          }, function () {
            _this3.props.onExited(node);
          });
        });
      });
    };

    _proto.cancelNextCallback = function cancelNextCallback() {
      if (this.nextCallback !== null) {
        this.nextCallback.cancel();
        this.nextCallback = null;
      }
    };

    _proto.safeSetState = function safeSetState(nextState, callback) {
      // This shouldn't be necessary, but there are weird race conditions with
      // setState callbacks and unmounting in testing, so always make sure that
      // we can cancel any pending setState callbacks after we unmount.
      callback = this.setNextCallback(callback);
      this.setState(nextState, callback);
    };

    _proto.setNextCallback = function setNextCallback(callback) {
      var _this4 = this;

      var active = true;

      this.nextCallback = function (event) {
        if (active) {
          active = false;
          _this4.nextCallback = null;
          callback(event);
        }
      };

      this.nextCallback.cancel = function () {
        active = false;
      };

      return this.nextCallback;
    };

    _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
      this.setNextCallback(handler);
      var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

      if (!node || doesNotHaveTimeoutOrListener) {
        setTimeout(this.nextCallback, 0);
        return;
      }

      if (this.props.addEndListener) {
        this.props.addEndListener(node, this.nextCallback);
      }

      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    };

    _proto.render = function render() {
      var status = this.state.status;

      if (status === UNMOUNTED) {
        return null;
      }

      var _this$props = this.props,
          children = _this$props.children,
          childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


      delete childProps.in;
      delete childProps.mountOnEnter;
      delete childProps.unmountOnExit;
      delete childProps.appear;
      delete childProps.enter;
      delete childProps.exit;
      delete childProps.timeout;
      delete childProps.addEndListener;
      delete childProps.onEnter;
      delete childProps.onEntering;
      delete childProps.onEntered;
      delete childProps.onExit;
      delete childProps.onExiting;
      delete childProps.onExited;

      if (typeof children === 'function') {
        // allows for nested Transitions
        return React__default.createElement(TransitionGroupContext.Provider, {
          value: null
        }, children(status, childProps));
      }

      var child = React__default.Children.only(children);
      return (// allows for nested Transitions
        React__default.createElement(TransitionGroupContext.Provider, {
          value: null
        }, React__default.cloneElement(child, childProps))
      );
    };

    return Transition;
  }(React__default.Component);

  Transition.contextType = TransitionGroupContext;
  Transition.propTypes =  {};

  function noop() {}

  Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: noop,
    onEntering: noop,
    onEntered: noop,
    onExit: noop,
    onExiting: noop,
    onExited: noop
  };
  Transition.UNMOUNTED = 0;
  Transition.EXITED = 1;
  Transition.ENTERING = 2;
  Transition.ENTERED = 3;
  Transition.EXITING = 4;

  /**
   * Given `this.props.children`, return an object mapping key to child.
   *
   * @param {*} children `this.props.children`
   * @return {object} Mapping of key to child
   */

  function getChildMapping(children, mapFn) {
    var mapper = function mapper(child) {
      return mapFn && React.isValidElement(child) ? mapFn(child) : child;
    };

    var result = Object.create(null);
    if (children) React.Children.map(children, function (c) {
      return c;
    }).forEach(function (child) {
      // run the map function here instead so that the key is the computed one
      result[child.key] = mapper(child);
    });
    return result;
  }
  /**
   * When you're adding or removing children some may be added or removed in the
   * same render pass. We want to show *both* since we want to simultaneously
   * animate elements in and out. This function takes a previous set of keys
   * and a new set of keys and merges them with its best guess of the correct
   * ordering. In the future we may expose some of the utilities in
   * ReactMultiChild to make this easy, but for now React itself does not
   * directly have this concept of the union of prevChildren and nextChildren
   * so we implement it here.
   *
   * @param {object} prev prev children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @param {object} next next children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @return {object} a key set that contains all keys in `prev` and all keys
   * in `next` in a reasonable order.
   */

  function mergeChildMappings(prev, next) {
    prev = prev || {};
    next = next || {};

    function getValueForKey(key) {
      return key in next ? next[key] : prev[key];
    } // For each key of `next`, the list of keys to insert before that key in
    // the combined list


    var nextKeysPending = Object.create(null);
    var pendingKeys = [];

    for (var prevKey in prev) {
      if (prevKey in next) {
        if (pendingKeys.length) {
          nextKeysPending[prevKey] = pendingKeys;
          pendingKeys = [];
        }
      } else {
        pendingKeys.push(prevKey);
      }
    }

    var i;
    var childMapping = {};

    for (var nextKey in next) {
      if (nextKeysPending[nextKey]) {
        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
          var pendingNextKey = nextKeysPending[nextKey][i];
          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
        }
      }

      childMapping[nextKey] = getValueForKey(nextKey);
    } // Finally, add the keys which didn't appear before any key in `next`


    for (i = 0; i < pendingKeys.length; i++) {
      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }

    return childMapping;
  }

  function getProp(child, prop, props) {
    return props[prop] != null ? props[prop] : child.props[prop];
  }

  function getInitialChildMapping(props, onExited) {
    return getChildMapping(props.children, function (child) {
      return React.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        appear: getProp(child, 'appear', props),
        enter: getProp(child, 'enter', props),
        exit: getProp(child, 'exit', props)
      });
    });
  }
  function getNextChildMapping(nextProps, prevChildMapping, onExited) {
    var nextChildMapping = getChildMapping(nextProps.children);
    var children = mergeChildMappings(prevChildMapping, nextChildMapping);
    Object.keys(children).forEach(function (key) {
      var child = children[key];
      if (!React.isValidElement(child)) return;
      var hasPrev = key in prevChildMapping;
      var hasNext = key in nextChildMapping;
      var prevChild = prevChildMapping[key];
      var isLeaving = React.isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

      if (hasNext && (!hasPrev || isLeaving)) {
        // console.log('entering', key)
        children[key] = React.cloneElement(child, {
          onExited: onExited.bind(null, child),
          in: true,
          exit: getProp(child, 'exit', nextProps),
          enter: getProp(child, 'enter', nextProps)
        });
      } else if (!hasNext && hasPrev && !isLeaving) {
        // item is old (exiting)
        // console.log('leaving', key)
        children[key] = React.cloneElement(child, {
          in: false
        });
      } else if (hasNext && hasPrev && React.isValidElement(prevChild)) {
        // item hasn't changed transition states
        // copy over the last transition props;
        // console.log('unchanged', key)
        children[key] = React.cloneElement(child, {
          onExited: onExited.bind(null, child),
          in: prevChild.props.in,
          exit: getProp(child, 'exit', nextProps),
          enter: getProp(child, 'enter', nextProps)
        });
      }
    });
    return children;
  }

  var values = Object.values || function (obj) {
    return Object.keys(obj).map(function (k) {
      return obj[k];
    });
  };

  var defaultProps = {
    component: 'div',
    childFactory: function childFactory(child) {
      return child;
    }
    /**
     * The `<TransitionGroup>` component manages a set of transition components
     * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
     * components, `<TransitionGroup>` is a state machine for managing the mounting
     * and unmounting of components over time.
     *
     * Consider the example below. As items are removed or added to the TodoList the
     * `in` prop is toggled automatically by the `<TransitionGroup>`.
     *
     * Note that `<TransitionGroup>`  does not define any animation behavior!
     * Exactly _how_ a list item animates is up to the individual transition
     * component. This means you can mix and match animations across different list
     * items.
     */

  };

  var TransitionGroup =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(TransitionGroup, _React$Component);

    function TransitionGroup(props, context) {
      var _this;

      _this = _React$Component.call(this, props, context) || this;

      var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


      _this.state = {
        contextValue: {
          isMounting: true
        },
        handleExited: handleExited,
        firstRender: true
      };
      return _this;
    }

    var _proto = TransitionGroup.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.mounted = true;
      this.setState({
        contextValue: {
          isMounting: false
        }
      });
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.mounted = false;
    };

    TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
      var prevChildMapping = _ref.children,
          handleExited = _ref.handleExited,
          firstRender = _ref.firstRender;
      return {
        children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
        firstRender: false
      };
    };

    _proto.handleExited = function handleExited(child, node) {
      var currentChildMapping = getChildMapping(this.props.children);
      if (child.key in currentChildMapping) return;

      if (child.props.onExited) {
        child.props.onExited(node);
      }

      if (this.mounted) {
        this.setState(function (state) {
          var children = _extends({}, state.children);

          delete children[child.key];
          return {
            children: children
          };
        });
      }
    };

    _proto.render = function render() {
      var _this$props = this.props,
          Component = _this$props.component,
          childFactory = _this$props.childFactory,
          props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

      var contextValue = this.state.contextValue;
      var children = values(this.state.children).map(childFactory);
      delete props.appear;
      delete props.enter;
      delete props.exit;

      if (Component === null) {
        return React__default.createElement(TransitionGroupContext.Provider, {
          value: contextValue
        }, children);
      }

      return React__default.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, React__default.createElement(Component, props, children));
    };

    return TransitionGroup;
  }(React__default.Component);

  TransitionGroup.propTypes =  {};
  TransitionGroup.defaultProps = defaultProps;

  var useEnhancedEffect$2 = typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect;
  /**
   * @ignore - internal component.
   */

  function Ripple(props) {
    var classes = props.classes,
        _props$pulsate = props.pulsate,
        pulsate = _props$pulsate === void 0 ? false : _props$pulsate,
        rippleX = props.rippleX,
        rippleY = props.rippleY,
        rippleSize = props.rippleSize,
        inProp = props.in,
        _props$onExited = props.onExited,
        onExited = _props$onExited === void 0 ? function () {} : _props$onExited,
        timeout = props.timeout;

    var _React$useState = React.useState(false),
        leaving = _React$useState[0],
        setLeaving = _React$useState[1];

    var rippleClassName = clsx(classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
    var rippleStyles = {
      width: rippleSize,
      height: rippleSize,
      top: -(rippleSize / 2) + rippleY,
      left: -(rippleSize / 2) + rippleX
    };
    var childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
    var handleExited = useEventCallback(onExited); // Ripple is used for user feedback (e.g. click or press) so we want to apply styles with the highest priority

    useEnhancedEffect$2(function () {
      if (!inProp) {
        // react-transition-group#onExit
        setLeaving(true); // react-transition-group#onExited

        var timeoutId = setTimeout(handleExited, timeout);
        return function () {
          clearTimeout(timeoutId);
        };
      }

      return undefined;
    }, [handleExited, inProp, timeout]);
    return /*#__PURE__*/React.createElement("span", {
      className: rippleClassName,
      style: rippleStyles
    }, /*#__PURE__*/React.createElement("span", {
      className: childClassName
    }));
  }

  var DURATION = 550;
  var DELAY_RIPPLE = 80;
  var styles = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        overflow: 'hidden',
        pointerEvents: 'none',
        position: 'absolute',
        zIndex: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: 'inherit'
      },

      /* Styles applied to the internal `Ripple` components `ripple` class. */
      ripple: {
        opacity: 0,
        position: 'absolute'
      },

      /* Styles applied to the internal `Ripple` components `rippleVisible` class. */
      rippleVisible: {
        opacity: 0.3,
        transform: 'scale(1)',
        animation: "$enter ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
      },

      /* Styles applied to the internal `Ripple` components `ripplePulsate` class. */
      ripplePulsate: {
        animationDuration: "".concat(theme.transitions.duration.shorter, "ms")
      },

      /* Styles applied to the internal `Ripple` components `child` class. */
      child: {
        opacity: 1,
        display: 'block',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        backgroundColor: 'currentColor'
      },

      /* Styles applied to the internal `Ripple` components `childLeaving` class. */
      childLeaving: {
        opacity: 0,
        animation: "$exit ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
      },

      /* Styles applied to the internal `Ripple` components `childPulsate` class. */
      childPulsate: {
        position: 'absolute',
        left: 0,
        top: 0,
        animation: "$pulsate 2500ms ".concat(theme.transitions.easing.easeInOut, " 200ms infinite")
      },
      '@keyframes enter': {
        '0%': {
          transform: 'scale(0)',
          opacity: 0.1
        },
        '100%': {
          transform: 'scale(1)',
          opacity: 0.3
        }
      },
      '@keyframes exit': {
        '0%': {
          opacity: 1
        },
        '100%': {
          opacity: 0
        }
      },
      '@keyframes pulsate': {
        '0%': {
          transform: 'scale(1)'
        },
        '50%': {
          transform: 'scale(0.92)'
        },
        '100%': {
          transform: 'scale(1)'
        }
      }
    };
  };
  /**
   * @ignore - internal component.
   *
   * TODO v5: Make private
   */

  var TouchRipple = React.forwardRef(function TouchRipple(props, ref) {
    var _props$center = props.center,
        centerProp = _props$center === void 0 ? false : _props$center,
        classes = props.classes,
        className = props.className,
        other = _objectWithoutProperties(props, ["center", "classes", "className"]);

    var _React$useState = React.useState([]),
        ripples = _React$useState[0],
        setRipples = _React$useState[1];

    var nextKey = React.useRef(0);
    var rippleCallback = React.useRef(null);
    React.useEffect(function () {
      if (rippleCallback.current) {
        rippleCallback.current();
        rippleCallback.current = null;
      }
    }, [ripples]); // Used to filter out mouse emulated events on mobile.

    var ignoringMouseDown = React.useRef(false); // We use a timer in order to only show the ripples for touch "click" like events.
    // We don't want to display the ripple for touch scroll events.

    var startTimer = React.useRef(null); // This is the hook called once the previous timeout is ready.

    var startTimerCommit = React.useRef(null);
    var container = React.useRef(null);
    React.useEffect(function () {
      return function () {
        clearTimeout(startTimer.current);
      };
    }, []);
    var startCommit = React.useCallback(function (params) {
      var pulsate = params.pulsate,
          rippleX = params.rippleX,
          rippleY = params.rippleY,
          rippleSize = params.rippleSize,
          cb = params.cb;
      setRipples(function (oldRipples) {
        return [].concat(_toConsumableArray(oldRipples), [/*#__PURE__*/React.createElement(Ripple, {
          key: nextKey.current,
          classes: classes,
          timeout: DURATION,
          pulsate: pulsate,
          rippleX: rippleX,
          rippleY: rippleY,
          rippleSize: rippleSize
        })]);
      });
      nextKey.current += 1;
      rippleCallback.current = cb;
    }, [classes]);
    var start = React.useCallback(function () {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cb = arguments.length > 2 ? arguments[2] : undefined;
      var _options$pulsate = options.pulsate,
          pulsate = _options$pulsate === void 0 ? false : _options$pulsate,
          _options$center = options.center,
          center = _options$center === void 0 ? centerProp || options.pulsate : _options$center,
          _options$fakeElement = options.fakeElement,
          fakeElement = _options$fakeElement === void 0 ? false : _options$fakeElement;

      if (event.type === 'mousedown' && ignoringMouseDown.current) {
        ignoringMouseDown.current = false;
        return;
      }

      if (event.type === 'touchstart') {
        ignoringMouseDown.current = true;
      }

      var element = fakeElement ? null : container.current;
      var rect = element ? element.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      }; // Get the size of the ripple

      var rippleX;
      var rippleY;
      var rippleSize;

      if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
        rippleX = Math.round(rect.width / 2);
        rippleY = Math.round(rect.height / 2);
      } else {
        var clientX = event.clientX ? event.clientX : event.touches[0].clientX;
        var clientY = event.clientY ? event.clientY : event.touches[0].clientY;
        rippleX = Math.round(clientX - rect.left);
        rippleY = Math.round(clientY - rect.top);
      }

      if (center) {
        rippleSize = Math.sqrt((2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3); // For some reason the animation is broken on Mobile Chrome if the size if even.

        if (rippleSize % 2 === 0) {
          rippleSize += 1;
        }
      } else {
        var sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
        var sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
        rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
      } // Touche devices


      if (event.touches) {
        // check that this isn't another touchstart due to multitouch
        // otherwise we will only clear a single timer when unmounting while two
        // are running
        if (startTimerCommit.current === null) {
          // Prepare the ripple effect.
          startTimerCommit.current = function () {
            startCommit({
              pulsate: pulsate,
              rippleX: rippleX,
              rippleY: rippleY,
              rippleSize: rippleSize,
              cb: cb
            });
          }; // Delay the execution of the ripple effect.


          startTimer.current = setTimeout(function () {
            if (startTimerCommit.current) {
              startTimerCommit.current();
              startTimerCommit.current = null;
            }
          }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
        }
      } else {
        startCommit({
          pulsate: pulsate,
          rippleX: rippleX,
          rippleY: rippleY,
          rippleSize: rippleSize,
          cb: cb
        });
      }
    }, [centerProp, startCommit]);
    var pulsate = React.useCallback(function () {
      start({}, {
        pulsate: true
      });
    }, [start]);
    var stop = React.useCallback(function (event, cb) {
      clearTimeout(startTimer.current); // The touch interaction occurs too quickly.
      // We still want to show ripple effect.

      if (event.type === 'touchend' && startTimerCommit.current) {
        event.persist();
        startTimerCommit.current();
        startTimerCommit.current = null;
        startTimer.current = setTimeout(function () {
          stop(event, cb);
        });
        return;
      }

      startTimerCommit.current = null;
      setRipples(function (oldRipples) {
        if (oldRipples.length > 0) {
          return oldRipples.slice(1);
        }

        return oldRipples;
      });
      rippleCallback.current = cb;
    }, []);
    React.useImperativeHandle(ref, function () {
      return {
        pulsate: pulsate,
        start: start,
        stop: stop
      };
    }, [pulsate, start, stop]);
    return /*#__PURE__*/React.createElement("span", _extends({
      className: clsx(classes.root, className),
      ref: container
    }, other), /*#__PURE__*/React.createElement(TransitionGroup, {
      component: null,
      exit: true
    }, ripples));
  });
  var TouchRipple$1 = withStyles$1(styles, {
    flip: false,
    name: 'MuiTouchRipple'
  })(React.memo(TouchRipple));

  var styles$1 = {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      WebkitTapHighlightColor: 'transparent',
      backgroundColor: 'transparent',
      // Reset default value
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0,
      border: 0,
      margin: 0,
      // Remove the margin in Safari
      borderRadius: 0,
      padding: 0,
      // Remove the padding in Firefox
      cursor: 'pointer',
      userSelect: 'none',
      verticalAlign: 'middle',
      '-moz-appearance': 'none',
      // Reset
      '-webkit-appearance': 'none',
      // Reset
      textDecoration: 'none',
      // So we take precedent over the style of a native <a /> element.
      color: 'inherit',
      '&::-moz-focus-inner': {
        borderStyle: 'none' // Remove Firefox dotted outline.

      },
      '&$disabled': {
        pointerEvents: 'none',
        // Disable link interactions
        cursor: 'default'
      }
    },

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Pseudo-class applied to the root element if keyboard focused. */
    focusVisible: {}
  };
  /**
   * `ButtonBase` contains as few styles as possible.
   * It aims to be a simple building block for creating a button.
   * It contains a load of style reset and some focus/ripple logic.
   */

  var ButtonBase = React.forwardRef(function ButtonBase(props, ref) {
    var action = props.action,
        buttonRefProp = props.buttonRef,
        _props$centerRipple = props.centerRipple,
        centerRipple = _props$centerRipple === void 0 ? false : _props$centerRipple,
        children = props.children,
        classes = props.classes,
        className = props.className,
        _props$component = props.component,
        component = _props$component === void 0 ? 'button' : _props$component,
        _props$disabled = props.disabled,
        disabled = _props$disabled === void 0 ? false : _props$disabled,
        _props$disableRipple = props.disableRipple,
        disableRipple = _props$disableRipple === void 0 ? false : _props$disableRipple,
        _props$disableTouchRi = props.disableTouchRipple,
        disableTouchRipple = _props$disableTouchRi === void 0 ? false : _props$disableTouchRi,
        _props$focusRipple = props.focusRipple,
        focusRipple = _props$focusRipple === void 0 ? false : _props$focusRipple,
        focusVisibleClassName = props.focusVisibleClassName,
        onBlur = props.onBlur,
        onClick = props.onClick,
        onFocus = props.onFocus,
        onFocusVisible = props.onFocusVisible,
        onKeyDown = props.onKeyDown,
        onKeyUp = props.onKeyUp,
        onMouseDown = props.onMouseDown,
        onMouseLeave = props.onMouseLeave,
        onMouseUp = props.onMouseUp,
        onTouchEnd = props.onTouchEnd,
        onTouchMove = props.onTouchMove,
        onTouchStart = props.onTouchStart,
        onDragLeave = props.onDragLeave,
        _props$tabIndex = props.tabIndex,
        tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
        TouchRippleProps = props.TouchRippleProps,
        _props$type = props.type,
        type = _props$type === void 0 ? 'button' : _props$type,
        other = _objectWithoutProperties(props, ["action", "buttonRef", "centerRipple", "children", "classes", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "onBlur", "onClick", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "onDragLeave", "tabIndex", "TouchRippleProps", "type"]);

    var buttonRef = React.useRef(null);

    function getButtonNode() {
      // #StrictMode ready
      return ReactDOM.findDOMNode(buttonRef.current);
    }

    var rippleRef = React.useRef(null);

    var _React$useState = React.useState(false),
        focusVisible = _React$useState[0],
        setFocusVisible = _React$useState[1];

    if (disabled && focusVisible) {
      setFocusVisible(false);
    }

    var _useIsFocusVisible = useIsFocusVisible(),
        isFocusVisible = _useIsFocusVisible.isFocusVisible,
        onBlurVisible = _useIsFocusVisible.onBlurVisible,
        focusVisibleRef = _useIsFocusVisible.ref;

    React.useImperativeHandle(action, function () {
      return {
        focusVisible: function focusVisible() {
          setFocusVisible(true);
          buttonRef.current.focus();
        }
      };
    }, []);
    React.useEffect(function () {
      if (focusVisible && focusRipple && !disableRipple) {
        rippleRef.current.pulsate();
      }
    }, [disableRipple, focusRipple, focusVisible]);

    function useRippleHandler(rippleAction, eventCallback) {
      var skipRippleAction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : disableTouchRipple;
      return useEventCallback(function (event) {
        if (eventCallback) {
          eventCallback(event);
        }

        var ignore = skipRippleAction;

        if (!ignore && rippleRef.current) {
          rippleRef.current[rippleAction](event);
        }

        return true;
      });
    }

    var handleMouseDown = useRippleHandler('start', onMouseDown);
    var handleDragLeave = useRippleHandler('stop', onDragLeave);
    var handleMouseUp = useRippleHandler('stop', onMouseUp);
    var handleMouseLeave = useRippleHandler('stop', function (event) {
      if (focusVisible) {
        event.preventDefault();
      }

      if (onMouseLeave) {
        onMouseLeave(event);
      }
    });
    var handleTouchStart = useRippleHandler('start', onTouchStart);
    var handleTouchEnd = useRippleHandler('stop', onTouchEnd);
    var handleTouchMove = useRippleHandler('stop', onTouchMove);
    var handleBlur = useRippleHandler('stop', function (event) {
      if (focusVisible) {
        onBlurVisible(event);
        setFocusVisible(false);
      }

      if (onBlur) {
        onBlur(event);
      }
    }, false);
    var handleFocus = useEventCallback(function (event) {
      // Fix for https://github.com/facebook/react/issues/7769
      if (!buttonRef.current) {
        buttonRef.current = event.currentTarget;
      }

      if (isFocusVisible(event)) {
        setFocusVisible(true);

        if (onFocusVisible) {
          onFocusVisible(event);
        }
      }

      if (onFocus) {
        onFocus(event);
      }
    });

    var isNonNativeButton = function isNonNativeButton() {
      var button = getButtonNode();
      return component && component !== 'button' && !(button.tagName === 'A' && button.href);
    };
    /**
     * IE 11 shim for https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat
     */


    var keydownRef = React.useRef(false);
    var handleKeyDown = useEventCallback(function (event) {
      // Check if key is already down to avoid repeats being counted as multiple activations
      if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === ' ') {
        keydownRef.current = true;
        event.persist();
        rippleRef.current.stop(event, function () {
          rippleRef.current.start(event);
        });
      }

      if (event.target === event.currentTarget && isNonNativeButton() && event.key === ' ') {
        event.preventDefault();
      }

      if (onKeyDown) {
        onKeyDown(event);
      } // Keyboard accessibility for non interactive elements


      if (event.target === event.currentTarget && isNonNativeButton() && event.key === 'Enter' && !disabled) {
        event.preventDefault();

        if (onClick) {
          onClick(event);
        }
      }
    });
    var handleKeyUp = useEventCallback(function (event) {
      // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
      // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
      if (focusRipple && event.key === ' ' && rippleRef.current && focusVisible && !event.defaultPrevented) {
        keydownRef.current = false;
        event.persist();
        rippleRef.current.stop(event, function () {
          rippleRef.current.pulsate(event);
        });
      }

      if (onKeyUp) {
        onKeyUp(event);
      } // Keyboard accessibility for non interactive elements


      if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === ' ' && !event.defaultPrevented) {
        onClick(event);
      }
    });
    var ComponentProp = component;

    if (ComponentProp === 'button' && other.href) {
      ComponentProp = 'a';
    }

    var buttonProps = {};

    if (ComponentProp === 'button') {
      buttonProps.type = type;
      buttonProps.disabled = disabled;
    } else {
      if (ComponentProp !== 'a' || !other.href) {
        buttonProps.role = 'button';
      }

      buttonProps['aria-disabled'] = disabled;
    }

    var handleUserRef = useForkRef(buttonRefProp, ref);
    var handleOwnRef = useForkRef(focusVisibleRef, buttonRef);
    var handleRef = useForkRef(handleUserRef, handleOwnRef);
    return /*#__PURE__*/React.createElement(ComponentProp, _extends({
      className: clsx(classes.root, className, focusVisible && [classes.focusVisible, focusVisibleClassName], disabled && classes.disabled),
      onBlur: handleBlur,
      onClick: onClick,
      onFocus: handleFocus,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      onMouseDown: handleMouseDown,
      onMouseLeave: handleMouseLeave,
      onMouseUp: handleMouseUp,
      onDragLeave: handleDragLeave,
      onTouchEnd: handleTouchEnd,
      onTouchMove: handleTouchMove,
      onTouchStart: handleTouchStart,
      ref: handleRef,
      tabIndex: disabled ? -1 : tabIndex
    }, buttonProps, other), children, /*#__PURE__*/React.createElement(NoSsr, null, !disableRipple && !disabled ?
    /*#__PURE__*/

    /* TouchRipple is only needed client-side, x2 boost on the server. */
    React.createElement(TouchRipple$1, _extends({
      ref: rippleRef,
      center: centerRipple
    }, TouchRippleProps)) : null));
  });
  var ButtonBase$1 = withStyles$1(styles$1, {
    name: 'MuiButtonBase'
  })(ButtonBase);

  // It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
  //
  // A strict capitalization should uppercase the first letter of each word a the sentence.
  // We only handle the first word.
  function capitalize(string) {

    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  var styles$2 = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: _extends({}, theme.typography.button, {
        boxSizing: 'border-box',
        minWidth: 64,
        padding: '6px 16px',
        borderRadius: theme.shape.borderRadius,
        color: theme.palette.text.primary,
        transition: theme.transitions.create(['background-color', 'box-shadow', 'border'], {
          duration: theme.transitions.duration.short
        }),
        '&:hover': {
          textDecoration: 'none',
          backgroundColor: fade(theme.palette.text.primary, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          },
          '&$disabled': {
            backgroundColor: 'transparent'
          }
        },
        '&$disabled': {
          color: theme.palette.action.disabled
        }
      }),

      /* Styles applied to the span element that wraps the children. */
      label: {
        width: '100%',
        // Ensure the correct width for iOS Safari
        display: 'inherit',
        alignItems: 'inherit',
        justifyContent: 'inherit'
      },

      /* Styles applied to the root element if `variant="text"`. */
      text: {
        padding: '6px 8px'
      },

      /* Styles applied to the root element if `variant="text"` and `color="primary"`. */
      textPrimary: {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },

      /* Styles applied to the root element if `variant="text"` and `color="secondary"`. */
      textSecondary: {
        color: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },

      /* Styles applied to the root element if `variant="outlined"`. */
      outlined: {
        padding: '5px 15px',
        border: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'),
        '&$disabled': {
          border: "1px solid ".concat(theme.palette.action.disabledBackground)
        }
      },

      /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
      outlinedPrimary: {
        color: theme.palette.primary.main,
        border: "1px solid ".concat(fade(theme.palette.primary.main, 0.5)),
        '&:hover': {
          border: "1px solid ".concat(theme.palette.primary.main),
          backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },

      /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
      outlinedSecondary: {
        color: theme.palette.secondary.main,
        border: "1px solid ".concat(fade(theme.palette.secondary.main, 0.5)),
        '&:hover': {
          border: "1px solid ".concat(theme.palette.secondary.main),
          backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        },
        '&$disabled': {
          border: "1px solid ".concat(theme.palette.action.disabled)
        }
      },

      /* Styles applied to the root element if `variant="contained"`. */
      contained: {
        color: theme.palette.getContrastText(theme.palette.grey[300]),
        backgroundColor: theme.palette.grey[300],
        boxShadow: theme.shadows[2],
        '&:hover': {
          backgroundColor: theme.palette.grey.A100,
          boxShadow: theme.shadows[4],
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            boxShadow: theme.shadows[2],
            backgroundColor: theme.palette.grey[300]
          },
          '&$disabled': {
            backgroundColor: theme.palette.action.disabledBackground
          }
        },
        '&$focusVisible': {
          boxShadow: theme.shadows[6]
        },
        '&:active': {
          boxShadow: theme.shadows[8]
        },
        '&$disabled': {
          color: theme.palette.action.disabled,
          boxShadow: theme.shadows[0],
          backgroundColor: theme.palette.action.disabledBackground
        }
      },

      /* Styles applied to the root element if `variant="contained"` and `color="primary"`. */
      containedPrimary: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: theme.palette.primary.main
          }
        }
      },

      /* Styles applied to the root element if `variant="contained"` and `color="secondary"`. */
      containedSecondary: {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: theme.palette.secondary.dark,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: theme.palette.secondary.main
          }
        }
      },

      /* Styles applied to the root element if `disableElevation={true}`. */
      disableElevation: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none'
        },
        '&$focusVisible': {
          boxShadow: 'none'
        },
        '&:active': {
          boxShadow: 'none'
        },
        '&$disabled': {
          boxShadow: 'none'
        }
      },

      /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
      focusVisible: {},

      /* Pseudo-class applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Styles applied to the root element if `color="inherit"`. */
      colorInherit: {
        color: 'inherit',
        borderColor: 'currentColor'
      },

      /* Styles applied to the root element if `size="small"` and `variant="text"`. */
      textSizeSmall: {
        padding: '4px 5px',
        fontSize: theme.typography.pxToRem(13)
      },

      /* Styles applied to the root element if `size="large"` and `variant="text"`. */
      textSizeLarge: {
        padding: '8px 11px',
        fontSize: theme.typography.pxToRem(15)
      },

      /* Styles applied to the root element if `size="small"` and `variant="outlined"`. */
      outlinedSizeSmall: {
        padding: '3px 9px',
        fontSize: theme.typography.pxToRem(13)
      },

      /* Styles applied to the root element if `size="large"` and `variant="outlined"`. */
      outlinedSizeLarge: {
        padding: '7px 21px',
        fontSize: theme.typography.pxToRem(15)
      },

      /* Styles applied to the root element if `size="small"` and `variant="contained"`. */
      containedSizeSmall: {
        padding: '4px 10px',
        fontSize: theme.typography.pxToRem(13)
      },

      /* Styles applied to the root element if `size="large"` and `variant="contained"`. */
      containedSizeLarge: {
        padding: '8px 22px',
        fontSize: theme.typography.pxToRem(15)
      },

      /* Styles applied to the root element if `size="small"`. */
      sizeSmall: {},

      /* Styles applied to the root element if `size="large"`. */
      sizeLarge: {},

      /* Styles applied to the root element if `fullWidth={true}`. */
      fullWidth: {
        width: '100%'
      },

      /* Styles applied to the startIcon element if supplied. */
      startIcon: {
        display: 'inherit',
        marginRight: 8,
        marginLeft: -4,
        '&$iconSizeSmall': {
          marginLeft: -2
        }
      },

      /* Styles applied to the endIcon element if supplied. */
      endIcon: {
        display: 'inherit',
        marginRight: -4,
        marginLeft: 8,
        '&$iconSizeSmall': {
          marginRight: -2
        }
      },

      /* Styles applied to the icon element if supplied and `size="small"`. */
      iconSizeSmall: {
        '& > *:first-child': {
          fontSize: 18
        }
      },

      /* Styles applied to the icon element if supplied and `size="medium"`. */
      iconSizeMedium: {
        '& > *:first-child': {
          fontSize: 20
        }
      },

      /* Styles applied to the icon element if supplied and `size="large"`. */
      iconSizeLarge: {
        '& > *:first-child': {
          fontSize: 22
        }
      }
    };
  };
  var Button = React.forwardRef(function Button(props, ref) {
    var children = props.children,
        classes = props.classes,
        className = props.className,
        _props$color = props.color,
        color = _props$color === void 0 ? 'default' : _props$color,
        _props$component = props.component,
        component = _props$component === void 0 ? 'button' : _props$component,
        _props$disabled = props.disabled,
        disabled = _props$disabled === void 0 ? false : _props$disabled,
        _props$disableElevati = props.disableElevation,
        disableElevation = _props$disableElevati === void 0 ? false : _props$disableElevati,
        _props$disableFocusRi = props.disableFocusRipple,
        disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
        endIconProp = props.endIcon,
        focusVisibleClassName = props.focusVisibleClassName,
        _props$fullWidth = props.fullWidth,
        fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
        _props$size = props.size,
        size = _props$size === void 0 ? 'medium' : _props$size,
        startIconProp = props.startIcon,
        _props$type = props.type,
        type = _props$type === void 0 ? 'button' : _props$type,
        _props$variant = props.variant,
        variant = _props$variant === void 0 ? 'text' : _props$variant,
        other = _objectWithoutProperties(props, ["children", "classes", "className", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"]);

    var startIcon = startIconProp && /*#__PURE__*/React.createElement("span", {
      className: clsx(classes.startIcon, classes["iconSize".concat(capitalize(size))])
    }, startIconProp);
    var endIcon = endIconProp && /*#__PURE__*/React.createElement("span", {
      className: clsx(classes.endIcon, classes["iconSize".concat(capitalize(size))])
    }, endIconProp);
    return /*#__PURE__*/React.createElement(ButtonBase$1, _extends({
      className: clsx(classes.root, classes[variant], className, color === 'inherit' ? classes.colorInherit : color !== 'default' && classes["".concat(variant).concat(capitalize(color))], size !== 'medium' && [classes["".concat(variant, "Size").concat(capitalize(size))], classes["size".concat(capitalize(size))]], disableElevation && classes.disableElevation, disabled && classes.disabled, fullWidth && classes.fullWidth),
      component: component,
      disabled: disabled,
      focusRipple: !disableFocusRipple,
      focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
      ref: ref,
      type: type
    }, other), /*#__PURE__*/React.createElement("span", {
      className: classes.label
    }, startIcon, children, endIcon));
  });
  var Button$1 = withStyles$1(styles$2, {
    name: 'MuiButton'
  })(Button);

  function ownerDocument(node) {
    return node && node.ownerDocument || document;
  }

  function getContainer(container) {
    container = typeof container === 'function' ? container() : container; // #StrictMode ready

    return ReactDOM.findDOMNode(container);
  }

  var useEnhancedEffect$3 = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
  /**
   * Portals provide a first-class way to render children into a DOM node
   * that exists outside the DOM hierarchy of the parent component.
   */

  var Portal$1 = React.forwardRef(function Portal(props, ref) {
    var children = props.children,
        container = props.container,
        _props$disablePortal = props.disablePortal,
        disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
        onRendered = props.onRendered;

    var _React$useState = React.useState(null),
        mountNode = _React$useState[0],
        setMountNode = _React$useState[1];

    var handleRef = useForkRef(React.isValidElement(children) ? children.ref : null, ref);
    useEnhancedEffect$3(function () {
      if (!disablePortal) {
        setMountNode(getContainer(container) || document.body);
      }
    }, [container, disablePortal]);
    useEnhancedEffect$3(function () {
      if (mountNode && !disablePortal) {
        setRef(ref, mountNode);
        return function () {
          setRef(ref, null);
        };
      }

      return undefined;
    }, [ref, mountNode, disablePortal]);
    useEnhancedEffect$3(function () {
      if (onRendered && (mountNode || disablePortal)) {
        onRendered();
      }
    }, [onRendered, mountNode, disablePortal]);

    if (disablePortal) {
      if (React.isValidElement(children)) {
        return React.cloneElement(children, {
          ref: handleRef
        });
      }

      return children;
    }

    return mountNode ? ReactDOM.createPortal(children, mountNode) : mountNode;
  });

  /**
   * Safe chained function
   *
   * Will only create a new function if needed,
   * otherwise will pass back existing functions or null.
   *
   * @param {function} functions to chain
   * @returns {function|null}
   */
  function createChainedFunction() {
    for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
      funcs[_key] = arguments[_key];
    }

    return funcs.reduce(function (acc, func) {
      if (func == null) {
        return acc;
      }

      return function chainedFunction() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        acc.apply(this, args);
        func.apply(this, args);
      };
    }, function () {});
  }

  // A change of the browser zoom change the scrollbar size.
  // Credit https://github.com/twbs/bootstrap/blob/3ffe3a5d82f6f561b82ff78d82b32a7d14aed558/js/src/modal.js#L512-L519
  function getScrollbarSize() {
    var scrollDiv = document.createElement('div');
    scrollDiv.style.width = '99px';
    scrollDiv.style.height = '99px';
    scrollDiv.style.position = 'absolute';
    scrollDiv.style.top = '-9999px';
    scrollDiv.style.overflow = 'scroll';
    document.body.appendChild(scrollDiv);
    var scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarSize;
  }

  function ownerWindow(node) {
    var doc = ownerDocument(node);
    return doc.defaultView || window;
  }

  function isOverflowing(container) {
    var doc = ownerDocument(container);

    if (doc.body === container) {
      return ownerWindow(doc).innerWidth > doc.documentElement.clientWidth;
    }

    return container.scrollHeight > container.clientHeight;
  }

  function ariaHidden(node, show) {
    if (show) {
      node.setAttribute('aria-hidden', 'true');
    } else {
      node.removeAttribute('aria-hidden');
    }
  }

  function getPaddingRight(node) {
    return parseInt(window.getComputedStyle(node)['padding-right'], 10) || 0;
  }

  function ariaHiddenSiblings(container, mountNode, currentNode) {
    var nodesToExclude = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var show = arguments.length > 4 ? arguments[4] : undefined;
    var blacklist = [mountNode, currentNode].concat(_toConsumableArray(nodesToExclude));
    var blacklistTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE'];
    [].forEach.call(container.children, function (node) {
      if (node.nodeType === 1 && blacklist.indexOf(node) === -1 && blacklistTagNames.indexOf(node.tagName) === -1) {
        ariaHidden(node, show);
      }
    });
  }

  function findIndexOf(containerInfo, callback) {
    var idx = -1;
    containerInfo.some(function (item, index) {
      if (callback(item)) {
        idx = index;
        return true;
      }

      return false;
    });
    return idx;
  }

  function handleContainer(containerInfo, props) {
    var restoreStyle = [];
    var restorePaddings = [];
    var container = containerInfo.container;
    var fixedNodes;

    if (!props.disableScrollLock) {
      if (isOverflowing(container)) {
        // Compute the size before applying overflow hidden to avoid any scroll jumps.
        var scrollbarSize = getScrollbarSize();
        restoreStyle.push({
          value: container.style.paddingRight,
          key: 'padding-right',
          el: container
        }); // Use computed style, here to get the real padding to add our scrollbar width.

        container.style['padding-right'] = "".concat(getPaddingRight(container) + scrollbarSize, "px"); // .mui-fixed is a global helper.

        fixedNodes = ownerDocument(container).querySelectorAll('.mui-fixed');
        [].forEach.call(fixedNodes, function (node) {
          restorePaddings.push(node.style.paddingRight);
          node.style.paddingRight = "".concat(getPaddingRight(node) + scrollbarSize, "px");
        });
      } // Improve Gatsby support
      // https://css-tricks.com/snippets/css/force-vertical-scrollbar/


      var parent = container.parentElement;
      var scrollContainer = parent.nodeName === 'HTML' && window.getComputedStyle(parent)['overflow-y'] === 'scroll' ? parent : container; // Block the scroll even if no scrollbar is visible to account for mobile keyboard
      // screensize shrink.

      restoreStyle.push({
        value: scrollContainer.style.overflow,
        key: 'overflow',
        el: scrollContainer
      });
      scrollContainer.style.overflow = 'hidden';
    }

    var restore = function restore() {
      if (fixedNodes) {
        [].forEach.call(fixedNodes, function (node, i) {
          if (restorePaddings[i]) {
            node.style.paddingRight = restorePaddings[i];
          } else {
            node.style.removeProperty('padding-right');
          }
        });
      }

      restoreStyle.forEach(function (_ref) {
        var value = _ref.value,
            el = _ref.el,
            key = _ref.key;

        if (value) {
          el.style.setProperty(key, value);
        } else {
          el.style.removeProperty(key);
        }
      });
    };

    return restore;
  }

  function getHiddenSiblings(container) {
    var hiddenSiblings = [];
    [].forEach.call(container.children, function (node) {
      if (node.getAttribute && node.getAttribute('aria-hidden') === 'true') {
        hiddenSiblings.push(node);
      }
    });
    return hiddenSiblings;
  }
  /**
   * @ignore - do not document.
   *
   * Proper state management for containers and the modals in those containers.
   * Simplified, but inspired by react-overlay's ModalManager class.
   * Used by the Modal to ensure proper styling of containers.
   */


  var ModalManager = /*#__PURE__*/function () {
    function ModalManager() {
      _classCallCheck(this, ModalManager);

      // this.modals[modalIndex] = modal
      this.modals = []; // this.containers[containerIndex] = {
      //   modals: [],
      //   container,
      //   restore: null,
      // }

      this.containers = [];
    }

    _createClass(ModalManager, [{
      key: "add",
      value: function add(modal, container) {
        var modalIndex = this.modals.indexOf(modal);

        if (modalIndex !== -1) {
          return modalIndex;
        }

        modalIndex = this.modals.length;
        this.modals.push(modal); // If the modal we are adding is already in the DOM.

        if (modal.modalRef) {
          ariaHidden(modal.modalRef, false);
        }

        var hiddenSiblingNodes = getHiddenSiblings(container);
        ariaHiddenSiblings(container, modal.mountNode, modal.modalRef, hiddenSiblingNodes, true);
        var containerIndex = findIndexOf(this.containers, function (item) {
          return item.container === container;
        });

        if (containerIndex !== -1) {
          this.containers[containerIndex].modals.push(modal);
          return modalIndex;
        }

        this.containers.push({
          modals: [modal],
          container: container,
          restore: null,
          hiddenSiblingNodes: hiddenSiblingNodes
        });
        return modalIndex;
      }
    }, {
      key: "mount",
      value: function mount(modal, props) {
        var containerIndex = findIndexOf(this.containers, function (item) {
          return item.modals.indexOf(modal) !== -1;
        });
        var containerInfo = this.containers[containerIndex];

        if (!containerInfo.restore) {
          containerInfo.restore = handleContainer(containerInfo, props);
        }
      }
    }, {
      key: "remove",
      value: function remove(modal) {
        var modalIndex = this.modals.indexOf(modal);

        if (modalIndex === -1) {
          return modalIndex;
        }

        var containerIndex = findIndexOf(this.containers, function (item) {
          return item.modals.indexOf(modal) !== -1;
        });
        var containerInfo = this.containers[containerIndex];
        containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
        this.modals.splice(modalIndex, 1); // If that was the last modal in a container, clean up the container.

        if (containerInfo.modals.length === 0) {
          // The modal might be closed before it had the chance to be mounted in the DOM.
          if (containerInfo.restore) {
            containerInfo.restore();
          }

          if (modal.modalRef) {
            // In case the modal wasn't in the DOM yet.
            ariaHidden(modal.modalRef, true);
          }

          ariaHiddenSiblings(containerInfo.container, modal.mountNode, modal.modalRef, containerInfo.hiddenSiblingNodes, false);
          this.containers.splice(containerIndex, 1);
        } else {
          // Otherwise make sure the next top modal is visible to a screen reader.
          var nextTop = containerInfo.modals[containerInfo.modals.length - 1]; // as soon as a modal is adding its modalRef is undefined. it can't set
          // aria-hidden because the dom element doesn't exist either
          // when modal was unmounted before modalRef gets null

          if (nextTop.modalRef) {
            ariaHidden(nextTop.modalRef, false);
          }
        }

        return modalIndex;
      }
    }, {
      key: "isTopModal",
      value: function isTopModal(modal) {
        return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
      }
    }]);

    return ModalManager;
  }();

  /* eslint-disable consistent-return, jsx-a11y/no-noninteractive-tabindex */
  /**
   * @ignore - internal component.
   */

  function TrapFocus(props) {
    var children = props.children,
        _props$disableAutoFoc = props.disableAutoFocus,
        disableAutoFocus = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
        _props$disableEnforce = props.disableEnforceFocus,
        disableEnforceFocus = _props$disableEnforce === void 0 ? false : _props$disableEnforce,
        _props$disableRestore = props.disableRestoreFocus,
        disableRestoreFocus = _props$disableRestore === void 0 ? false : _props$disableRestore,
        getDoc = props.getDoc,
        isEnabled = props.isEnabled,
        open = props.open;
    var ignoreNextEnforceFocus = React.useRef();
    var sentinelStart = React.useRef(null);
    var sentinelEnd = React.useRef(null);
    var nodeToRestore = React.useRef();
    var rootRef = React.useRef(null); // can be removed once we drop support for non ref forwarding class components

    var handleOwnRef = React.useCallback(function (instance) {
      // #StrictMode ready
      rootRef.current = ReactDOM.findDOMNode(instance);
    }, []);
    var handleRef = useForkRef(children.ref, handleOwnRef); // ⚠️ You may rely on React.useMemo as a performance optimization, not as a semantic guarantee.
    // https://reactjs.org/docs/hooks-reference.html#usememo

    React.useMemo(function () {
      if (!open || typeof window === 'undefined') {
        return;
      }

      nodeToRestore.current = getDoc().activeElement;
    }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

    React.useEffect(function () {
      if (!open) {
        return;
      }

      var doc = ownerDocument(rootRef.current); // We might render an empty child.

      if (!disableAutoFocus && rootRef.current && !rootRef.current.contains(doc.activeElement)) {
        if (!rootRef.current.hasAttribute('tabIndex')) {

          rootRef.current.setAttribute('tabIndex', -1);
        }

        rootRef.current.focus();
      }

      var contain = function contain() {
        if (disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
          ignoreNextEnforceFocus.current = false;
          return;
        }

        if (rootRef.current && !rootRef.current.contains(doc.activeElement)) {
          rootRef.current.focus();
        }
      };

      var loopFocus = function loopFocus(event) {
        // 9 = Tab
        if (disableEnforceFocus || !isEnabled() || event.keyCode !== 9) {
          return;
        } // Make sure the next tab starts from the right place.


        if (doc.activeElement === rootRef.current) {
          // We need to ignore the next contain as
          // it will try to move the focus back to the rootRef element.
          ignoreNextEnforceFocus.current = true;

          if (event.shiftKey) {
            sentinelEnd.current.focus();
          } else {
            sentinelStart.current.focus();
          }
        }
      };

      doc.addEventListener('focus', contain, true);
      doc.addEventListener('keydown', loopFocus, true); // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area
      // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
      //
      // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
      // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.

      var interval = setInterval(function () {
        contain();
      }, 50);
      return function () {
        clearInterval(interval);
        doc.removeEventListener('focus', contain, true);
        doc.removeEventListener('keydown', loopFocus, true); // restoreLastFocus()

        if (!disableRestoreFocus) {
          // In IE 11 it is possible for document.activeElement to be null resulting
          // in nodeToRestore.current being null.
          // Not all elements in IE 11 have a focus method.
          // Once IE 11 support is dropped the focus() call can be unconditional.
          if (nodeToRestore.current && nodeToRestore.current.focus) {
            nodeToRestore.current.focus();
          }

          nodeToRestore.current = null;
        }
      };
    }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open]);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      tabIndex: 0,
      ref: sentinelStart,
      "data-test": "sentinelStart"
    }), React.cloneElement(children, {
      ref: handleRef
    }), /*#__PURE__*/React.createElement("div", {
      tabIndex: 0,
      ref: sentinelEnd,
      "data-test": "sentinelEnd"
    }));
  }

  var styles$3 = {
    /* Styles applied to the root element. */
    root: {
      zIndex: -1,
      position: 'fixed',
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      WebkitTapHighlightColor: 'transparent'
    },

    /* Styles applied to the root element if `invisible={true}`. */
    invisible: {
      backgroundColor: 'transparent'
    }
  };
  /**
   * @ignore - internal component.
   */

  var SimpleBackdrop = React.forwardRef(function SimpleBackdrop(props, ref) {
    var _props$invisible = props.invisible,
        invisible = _props$invisible === void 0 ? false : _props$invisible,
        open = props.open,
        other = _objectWithoutProperties(props, ["invisible", "open"]);

    return open ? /*#__PURE__*/React.createElement("div", _extends({
      "aria-hidden": true,
      ref: ref
    }, other, {
      style: _extends({}, styles$3.root, {}, invisible ? styles$3.invisible : {}, {}, other.style)
    })) : null;
  });

  function getContainer$1(container) {
    container = typeof container === 'function' ? container() : container;
    return ReactDOM.findDOMNode(container);
  }

  function getHasTransition(props) {
    return props.children ? props.children.props.hasOwnProperty('in') : false;
  } // A modal manager used to track and manage the state of open Modals.
  // Modals don't open on the server so this won't conflict with concurrent requests.


  var defaultManager = new ModalManager();
  var styles$4 = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        position: 'fixed',
        zIndex: theme.zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0
      },

      /* Styles applied to the root element if the `Modal` has exited. */
      hidden: {
        visibility: 'hidden'
      }
    };
  };
  /**
   * Modal is a lower-level construct that is leveraged by the following components:
   *
   * - [Dialog](/api/dialog/)
   * - [Drawer](/api/drawer/)
   * - [Menu](/api/menu/)
   * - [Popover](/api/popover/)
   *
   * If you are creating a modal dialog, you probably want to use the [Dialog](/api/dialog/) component
   * rather than directly using Modal.
   *
   * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
   */

  var Modal = React.forwardRef(function Modal(inProps, ref) {
    var theme = useTheme();
    var props = getThemeProps({
      name: 'MuiModal',
      props: _extends({}, inProps),
      theme: theme
    });

    var _props$BackdropCompon = props.BackdropComponent,
        BackdropComponent = _props$BackdropCompon === void 0 ? SimpleBackdrop : _props$BackdropCompon,
        BackdropProps = props.BackdropProps,
        children = props.children,
        _props$closeAfterTran = props.closeAfterTransition,
        closeAfterTransition = _props$closeAfterTran === void 0 ? false : _props$closeAfterTran,
        container = props.container,
        _props$disableAutoFoc = props.disableAutoFocus,
        disableAutoFocus = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
        _props$disableBackdro = props.disableBackdropClick,
        disableBackdropClick = _props$disableBackdro === void 0 ? false : _props$disableBackdro,
        _props$disableEnforce = props.disableEnforceFocus,
        disableEnforceFocus = _props$disableEnforce === void 0 ? false : _props$disableEnforce,
        _props$disableEscapeK = props.disableEscapeKeyDown,
        disableEscapeKeyDown = _props$disableEscapeK === void 0 ? false : _props$disableEscapeK,
        _props$disablePortal = props.disablePortal,
        disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
        _props$disableRestore = props.disableRestoreFocus,
        disableRestoreFocus = _props$disableRestore === void 0 ? false : _props$disableRestore,
        _props$disableScrollL = props.disableScrollLock,
        disableScrollLock = _props$disableScrollL === void 0 ? false : _props$disableScrollL,
        _props$hideBackdrop = props.hideBackdrop,
        hideBackdrop = _props$hideBackdrop === void 0 ? false : _props$hideBackdrop,
        _props$keepMounted = props.keepMounted,
        keepMounted = _props$keepMounted === void 0 ? false : _props$keepMounted,
        _props$manager = props.manager,
        manager = _props$manager === void 0 ? defaultManager : _props$manager,
        onBackdropClick = props.onBackdropClick,
        onClose = props.onClose,
        onEscapeKeyDown = props.onEscapeKeyDown,
        onRendered = props.onRendered,
        open = props.open,
        other = _objectWithoutProperties(props, ["BackdropComponent", "BackdropProps", "children", "closeAfterTransition", "container", "disableAutoFocus", "disableBackdropClick", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onEscapeKeyDown", "onRendered", "open"]);

    var _React$useState = React.useState(true),
        exited = _React$useState[0],
        setExited = _React$useState[1];

    var modal = React.useRef({});
    var mountNodeRef = React.useRef(null);
    var modalRef = React.useRef(null);
    var handleRef = useForkRef(modalRef, ref);
    var hasTransition = getHasTransition(props);

    var getDoc = function getDoc() {
      return ownerDocument(mountNodeRef.current);
    };

    var getModal = function getModal() {
      modal.current.modalRef = modalRef.current;
      modal.current.mountNode = mountNodeRef.current;
      return modal.current;
    };

    var handleMounted = function handleMounted() {
      manager.mount(getModal(), {
        disableScrollLock: disableScrollLock
      }); // Fix a bug on Chrome where the scroll isn't initially 0.

      modalRef.current.scrollTop = 0;
    };

    var handleOpen = useEventCallback(function () {
      var resolvedContainer = getContainer$1(container) || getDoc().body;
      manager.add(getModal(), resolvedContainer); // The element was already mounted.

      if (modalRef.current) {
        handleMounted();
      }
    });
    var isTopModal = React.useCallback(function () {
      return manager.isTopModal(getModal());
    }, [manager]);
    var handlePortalRef = useEventCallback(function (node) {
      mountNodeRef.current = node;

      if (!node) {
        return;
      }

      if (onRendered) {
        onRendered();
      }

      if (open && isTopModal()) {
        handleMounted();
      } else {
        ariaHidden(modalRef.current, true);
      }
    });
    var handleClose = React.useCallback(function () {
      manager.remove(getModal());
    }, [manager]);
    React.useEffect(function () {
      return function () {
        handleClose();
      };
    }, [handleClose]);
    React.useEffect(function () {
      if (open) {
        handleOpen();
      } else if (!hasTransition || !closeAfterTransition) {
        handleClose();
      }
    }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);

    if (!keepMounted && !open && (!hasTransition || exited)) {
      return null;
    }

    var handleEnter = function handleEnter() {
      setExited(false);
    };

    var handleExited = function handleExited() {
      setExited(true);

      if (closeAfterTransition) {
        handleClose();
      }
    };

    var handleBackdropClick = function handleBackdropClick(event) {
      if (event.target !== event.currentTarget) {
        return;
      }

      if (onBackdropClick) {
        onBackdropClick(event);
      }

      if (!disableBackdropClick && onClose) {
        onClose(event, 'backdropClick');
      }
    };

    var handleKeyDown = function handleKeyDown(event) {
      // The handler doesn't take event.defaultPrevented into account:
      //
      // event.preventDefault() is meant to stop default behaviours like
      // clicking a checkbox to check it, hitting a button to submit a form,
      // and hitting left arrow to move the cursor in a text input etc.
      // Only special HTML elements have these default behaviors.
      if (event.key !== 'Escape' || !isTopModal()) {
        return;
      } // Swallow the event, in case someone is listening for the escape key on the body.


      event.stopPropagation();

      if (onEscapeKeyDown) {
        onEscapeKeyDown(event);
      }

      if (!disableEscapeKeyDown && onClose) {
        onClose(event, 'escapeKeyDown');
      }
    };

    var inlineStyle = styles$4(theme || {
      zIndex: zIndex
    });
    var childProps = {};

    if (children.props.tabIndex === undefined) {
      childProps.tabIndex = children.props.tabIndex || '-1';
    } // It's a Transition like component


    if (hasTransition) {
      childProps.onEnter = createChainedFunction(handleEnter, children.props.onEnter);
      childProps.onExited = createChainedFunction(handleExited, children.props.onExited);
    }

    return /*#__PURE__*/React.createElement(Portal$1, {
      ref: handlePortalRef,
      container: container,
      disablePortal: disablePortal
    }, /*#__PURE__*/React.createElement("div", _extends({
      ref: handleRef,
      onKeyDown: handleKeyDown,
      role: "presentation"
    }, other, {
      style: _extends({}, inlineStyle.root, {}, !open && exited ? inlineStyle.hidden : {}, {}, other.style)
    }), hideBackdrop ? null : /*#__PURE__*/React.createElement(BackdropComponent, _extends({
      open: open,
      onClick: handleBackdropClick
    }, BackdropProps)), /*#__PURE__*/React.createElement(TrapFocus, {
      disableEnforceFocus: disableEnforceFocus,
      disableAutoFocus: disableAutoFocus,
      disableRestoreFocus: disableRestoreFocus,
      getDoc: getDoc,
      isEnabled: isTopModal,
      open: open
    }, React.cloneElement(children, childProps))));
  });

  function useTheme$1() {
    var theme = useTheme() || defaultTheme;

    return theme;
  }

  var reflow = function reflow(node) {
    return node.scrollTop;
  };
  function getTransitionProps(props, options) {
    var timeout = props.timeout,
        _props$style = props.style,
        style = _props$style === void 0 ? {} : _props$style;
    return {
      duration: style.transitionDuration || typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
      delay: style.transitionDelay
    };
  }

  var styles$5 = {
    entering: {
      opacity: 1
    },
    entered: {
      opacity: 1
    }
  };
  var defaultTimeout = {
    enter: duration.enteringScreen,
    exit: duration.leavingScreen
  };
  /**
   * The Fade transition is used by the [Modal](/components/modal/) component.
   * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
   */

  var Fade = React.forwardRef(function Fade(props, ref) {
    var children = props.children,
        inProp = props.in,
        onEnter = props.onEnter,
        onExit = props.onExit,
        style = props.style,
        _props$timeout = props.timeout,
        timeout = _props$timeout === void 0 ? defaultTimeout : _props$timeout,
        other = _objectWithoutProperties(props, ["children", "in", "onEnter", "onExit", "style", "timeout"]);

    var theme = useTheme$1();
    var handleRef = useForkRef(children.ref, ref);

    var handleEnter = function handleEnter(node, isAppearing) {
      reflow(node); // So the animation always start from the start.

      var transitionProps = getTransitionProps({
        style: style,
        timeout: timeout
      }, {
        mode: 'enter'
      });
      node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
      node.style.transition = theme.transitions.create('opacity', transitionProps);

      if (onEnter) {
        onEnter(node, isAppearing);
      }
    };

    var handleExit = function handleExit(node) {
      var transitionProps = getTransitionProps({
        style: style,
        timeout: timeout
      }, {
        mode: 'exit'
      });
      node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
      node.style.transition = theme.transitions.create('opacity', transitionProps);

      if (onExit) {
        onExit(node);
      }
    };

    return /*#__PURE__*/React.createElement(Transition, _extends({
      appear: true,
      in: inProp,
      onEnter: handleEnter,
      onExit: handleExit,
      timeout: timeout
    }, other), function (state, childProps) {
      return React.cloneElement(children, _extends({
        style: _extends({
          opacity: 0,
          visibility: state === 'exited' && !inProp ? 'hidden' : undefined
        }, styles$5[state], {}, style, {}, children.props.style),
        ref: handleRef
      }, childProps));
    });
  });

  var styles$6 = {
    /* Styles applied to the root element. */
    root: {
      // Improve scrollable dialog support.
      zIndex: -1,
      position: 'fixed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      WebkitTapHighlightColor: 'transparent'
    },

    /* Styles applied to the root element if `invisible={true}`. */
    invisible: {
      backgroundColor: 'transparent'
    }
  };
  var Backdrop = React.forwardRef(function Backdrop(props, ref) {
    var children = props.children,
        classes = props.classes,
        className = props.className,
        _props$invisible = props.invisible,
        invisible = _props$invisible === void 0 ? false : _props$invisible,
        open = props.open,
        transitionDuration = props.transitionDuration,
        other = _objectWithoutProperties(props, ["children", "classes", "className", "invisible", "open", "transitionDuration"]);

    return /*#__PURE__*/React.createElement(Fade, _extends({
      in: open,
      timeout: transitionDuration
    }, other), /*#__PURE__*/React.createElement("div", {
      className: clsx(classes.root, className, invisible && classes.invisible),
      "aria-hidden": true,
      ref: ref
    }, children));
  });
  var Backdrop$1 = withStyles$1(styles$6, {
    name: 'MuiBackdrop'
  })(Backdrop);

  var styles$7 = function styles(theme) {
    var elevations = {};
    theme.shadows.forEach(function (shadow, index) {
      elevations["elevation".concat(index)] = {
        boxShadow: shadow
      };
    });
    return _extends({
      /* Styles applied to the root element. */
      root: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        transition: theme.transitions.create('box-shadow')
      },

      /* Styles applied to the root element if `square={false}`. */
      rounded: {
        borderRadius: theme.shape.borderRadius
      },

      /* Styles applied to the root element if `variant="outlined"` */
      outlined: {
        border: "1px solid ".concat(theme.palette.divider)
      }
    }, elevations);
  };
  var Paper = React.forwardRef(function Paper(props, ref) {
    var classes = props.classes,
        className = props.className,
        _props$component = props.component,
        Component = _props$component === void 0 ? 'div' : _props$component,
        _props$square = props.square,
        square = _props$square === void 0 ? false : _props$square,
        _props$elevation = props.elevation,
        elevation = _props$elevation === void 0 ? 1 : _props$elevation,
        _props$variant = props.variant,
        variant = _props$variant === void 0 ? 'elevation' : _props$variant,
        other = _objectWithoutProperties(props, ["classes", "className", "component", "square", "elevation", "variant"]);

    return /*#__PURE__*/React.createElement(Component, _extends({
      className: clsx(classes.root, className, variant === 'outlined' ? classes.outlined : classes["elevation".concat(elevation)], !square && classes.rounded),
      ref: ref
    }, other));
  });
  var Paper$1 = withStyles$1(styles$7, {
    name: 'MuiPaper'
  })(Paper);

  var styles$8 = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        '@media print': {
          // Use !important to override the Modal inline-style.
          position: 'absolute !important'
        }
      },

      /* Styles applied to the container element if `scroll="paper"`. */
      scrollPaper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },

      /* Styles applied to the container element if `scroll="body"`. */
      scrollBody: {
        overflowY: 'auto',
        overflowX: 'hidden',
        textAlign: 'center',
        '&:after': {
          content: '""',
          display: 'inline-block',
          verticalAlign: 'middle',
          height: '100%',
          width: '0'
        }
      },

      /* Styles applied to the container element. */
      container: {
        height: '100%',
        '@media print': {
          height: 'auto'
        },
        // We disable the focus ring for mouse, touch and keyboard users.
        outline: 0
      },

      /* Styles applied to the `Paper` component. */
      paper: {
        margin: 32,
        position: 'relative',
        overflowY: 'auto',
        // Fix IE 11 issue, to remove at some point.
        '@media print': {
          overflowY: 'visible',
          boxShadow: 'none'
        }
      },

      /* Styles applied to the `Paper` component if `scroll="paper"`. */
      paperScrollPaper: {
        display: 'flex',
        flexDirection: 'column',
        maxHeight: 'calc(100% - 64px)'
      },

      /* Styles applied to the `Paper` component if `scroll="body"`. */
      paperScrollBody: {
        display: 'inline-block',
        verticalAlign: 'middle',
        textAlign: 'left' // 'initial' doesn't work on IE 11

      },

      /* Styles applied to the `Paper` component if `maxWidth=false`. */
      paperWidthFalse: {
        maxWidth: 'calc(100% - 64px)'
      },

      /* Styles applied to the `Paper` component if `maxWidth="xs"`. */
      paperWidthXs: {
        maxWidth: Math.max(theme.breakpoints.values.xs, 444),
        '&$paperScrollBody': _defineProperty({}, theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2), {
          maxWidth: 'calc(100% - 64px)'
        })
      },

      /* Styles applied to the `Paper` component if `maxWidth="sm"`. */
      paperWidthSm: {
        maxWidth: theme.breakpoints.values.sm,
        '&$paperScrollBody': _defineProperty({}, theme.breakpoints.down(theme.breakpoints.values.sm + 32 * 2), {
          maxWidth: 'calc(100% - 64px)'
        })
      },

      /* Styles applied to the `Paper` component if `maxWidth="md"`. */
      paperWidthMd: {
        maxWidth: theme.breakpoints.values.md,
        '&$paperScrollBody': _defineProperty({}, theme.breakpoints.down(theme.breakpoints.values.md + 32 * 2), {
          maxWidth: 'calc(100% - 64px)'
        })
      },

      /* Styles applied to the `Paper` component if `maxWidth="lg"`. */
      paperWidthLg: {
        maxWidth: theme.breakpoints.values.lg,
        '&$paperScrollBody': _defineProperty({}, theme.breakpoints.down(theme.breakpoints.values.lg + 32 * 2), {
          maxWidth: 'calc(100% - 64px)'
        })
      },

      /* Styles applied to the `Paper` component if `maxWidth="xl"`. */
      paperWidthXl: {
        maxWidth: theme.breakpoints.values.xl,
        '&$paperScrollBody': _defineProperty({}, theme.breakpoints.down(theme.breakpoints.values.xl + 32 * 2), {
          maxWidth: 'calc(100% - 64px)'
        })
      },

      /* Styles applied to the `Paper` component if `fullWidth={true}`. */
      paperFullWidth: {
        width: 'calc(100% - 64px)'
      },

      /* Styles applied to the `Paper` component if `fullScreen={true}`. */
      paperFullScreen: {
        margin: 0,
        width: '100%',
        maxWidth: '100%',
        height: '100%',
        maxHeight: 'none',
        borderRadius: 0,
        '&$paperScrollBody': {
          margin: 0,
          maxWidth: '100%'
        }
      }
    };
  };
  var defaultTransitionDuration = {
    enter: duration.enteringScreen,
    exit: duration.leavingScreen
  };
  /**
   * Dialogs are overlaid modal paper based components with a backdrop.
   */

  var Dialog = React.forwardRef(function Dialog(props, ref) {
    var BackdropProps = props.BackdropProps,
        children = props.children,
        classes = props.classes,
        className = props.className,
        _props$disableBackdro = props.disableBackdropClick,
        disableBackdropClick = _props$disableBackdro === void 0 ? false : _props$disableBackdro,
        _props$disableEscapeK = props.disableEscapeKeyDown,
        disableEscapeKeyDown = _props$disableEscapeK === void 0 ? false : _props$disableEscapeK,
        _props$fullScreen = props.fullScreen,
        fullScreen = _props$fullScreen === void 0 ? false : _props$fullScreen,
        _props$fullWidth = props.fullWidth,
        fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
        _props$maxWidth = props.maxWidth,
        maxWidth = _props$maxWidth === void 0 ? 'sm' : _props$maxWidth,
        onBackdropClick = props.onBackdropClick,
        onClose = props.onClose,
        onEnter = props.onEnter,
        onEntered = props.onEntered,
        onEntering = props.onEntering,
        onEscapeKeyDown = props.onEscapeKeyDown,
        onExit = props.onExit,
        onExited = props.onExited,
        onExiting = props.onExiting,
        open = props.open,
        _props$PaperComponent = props.PaperComponent,
        PaperComponent = _props$PaperComponent === void 0 ? Paper$1 : _props$PaperComponent,
        _props$PaperProps = props.PaperProps,
        PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
        _props$scroll = props.scroll,
        scroll = _props$scroll === void 0 ? 'paper' : _props$scroll,
        _props$TransitionComp = props.TransitionComponent,
        TransitionComponent = _props$TransitionComp === void 0 ? Fade : _props$TransitionComp,
        _props$transitionDura = props.transitionDuration,
        transitionDuration = _props$transitionDura === void 0 ? defaultTransitionDuration : _props$transitionDura,
        TransitionProps = props.TransitionProps,
        ariaDescribedby = props['aria-describedby'],
        ariaLabelledby = props['aria-labelledby'],
        other = _objectWithoutProperties(props, ["BackdropProps", "children", "classes", "className", "disableBackdropClick", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "onEnter", "onEntered", "onEntering", "onEscapeKeyDown", "onExit", "onExited", "onExiting", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps", "aria-describedby", "aria-labelledby"]);

    var mouseDownTarget = React.useRef();

    var handleMouseDown = function handleMouseDown(event) {
      mouseDownTarget.current = event.target;
    };

    var handleBackdropClick = function handleBackdropClick(event) {
      // Ignore the events not coming from the "backdrop"
      // We don't want to close the dialog when clicking the dialog content.
      if (event.target !== event.currentTarget) {
        return;
      } // Make sure the event starts and ends on the same DOM element.


      if (event.target !== mouseDownTarget.current) {
        return;
      }

      mouseDownTarget.current = null;

      if (onBackdropClick) {
        onBackdropClick(event);
      }

      if (!disableBackdropClick && onClose) {
        onClose(event, 'backdropClick');
      }
    };

    return /*#__PURE__*/React.createElement(Modal, _extends({
      className: clsx(classes.root, className),
      BackdropComponent: Backdrop$1,
      BackdropProps: _extends({
        transitionDuration: transitionDuration
      }, BackdropProps),
      closeAfterTransition: true,
      disableBackdropClick: disableBackdropClick,
      disableEscapeKeyDown: disableEscapeKeyDown,
      onEscapeKeyDown: onEscapeKeyDown,
      onClose: onClose,
      open: open,
      ref: ref
    }, other), /*#__PURE__*/React.createElement(TransitionComponent, _extends({
      appear: true,
      in: open,
      timeout: transitionDuration,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered,
      onExit: onExit,
      onExiting: onExiting,
      onExited: onExited,
      role: "none presentation"
    }, TransitionProps), /*#__PURE__*/React.createElement("div", {
      className: clsx(classes.container, classes["scroll".concat(capitalize(scroll))]),
      onClick: handleBackdropClick,
      onMouseDown: handleMouseDown
    }, /*#__PURE__*/React.createElement(PaperComponent, _extends({
      elevation: 24,
      role: "dialog",
      "aria-describedby": ariaDescribedby,
      "aria-labelledby": ariaLabelledby
    }, PaperProps, {
      className: clsx(classes.paper, classes["paperScroll".concat(capitalize(scroll))], classes["paperWidth".concat(capitalize(String(maxWidth)))], PaperProps.className, fullScreen && classes.paperFullScreen, fullWidth && classes.paperFullWidth)
    }), children))));
  });
  var Dialog$1 = withStyles$1(styles$8, {
    name: 'MuiDialog'
  })(Dialog);

  var styles$9 = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        margin: 0
      },

      /* Styles applied to the root element if `variant="body2"`. */
      body2: theme.typography.body2,

      /* Styles applied to the root element if `variant="body1"`. */
      body1: theme.typography.body1,

      /* Styles applied to the root element if `variant="caption"`. */
      caption: theme.typography.caption,

      /* Styles applied to the root element if `variant="button"`. */
      button: theme.typography.button,

      /* Styles applied to the root element if `variant="h1"`. */
      h1: theme.typography.h1,

      /* Styles applied to the root element if `variant="h2"`. */
      h2: theme.typography.h2,

      /* Styles applied to the root element if `variant="h3"`. */
      h3: theme.typography.h3,

      /* Styles applied to the root element if `variant="h4"`. */
      h4: theme.typography.h4,

      /* Styles applied to the root element if `variant="h5"`. */
      h5: theme.typography.h5,

      /* Styles applied to the root element if `variant="h6"`. */
      h6: theme.typography.h6,

      /* Styles applied to the root element if `variant="subtitle1"`. */
      subtitle1: theme.typography.subtitle1,

      /* Styles applied to the root element if `variant="subtitle2"`. */
      subtitle2: theme.typography.subtitle2,

      /* Styles applied to the root element if `variant="overline"`. */
      overline: theme.typography.overline,

      /* Styles applied to the root element if `variant="srOnly"`. Only accessible to screen readers. */
      srOnly: {
        position: 'absolute',
        height: 1,
        width: 1,
        overflow: 'hidden'
      },

      /* Styles applied to the root element if `align="left"`. */
      alignLeft: {
        textAlign: 'left'
      },

      /* Styles applied to the root element if `align="center"`. */
      alignCenter: {
        textAlign: 'center'
      },

      /* Styles applied to the root element if `align="right"`. */
      alignRight: {
        textAlign: 'right'
      },

      /* Styles applied to the root element if `align="justify"`. */
      alignJustify: {
        textAlign: 'justify'
      },

      /* Styles applied to the root element if `nowrap={true}`. */
      noWrap: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      },

      /* Styles applied to the root element if `gutterBottom={true}`. */
      gutterBottom: {
        marginBottom: '0.35em'
      },

      /* Styles applied to the root element if `paragraph={true}`. */
      paragraph: {
        marginBottom: 16
      },

      /* Styles applied to the root element if `color="inherit"`. */
      colorInherit: {
        color: 'inherit'
      },

      /* Styles applied to the root element if `color="primary"`. */
      colorPrimary: {
        color: theme.palette.primary.main
      },

      /* Styles applied to the root element if `color="secondary"`. */
      colorSecondary: {
        color: theme.palette.secondary.main
      },

      /* Styles applied to the root element if `color="textPrimary"`. */
      colorTextPrimary: {
        color: theme.palette.text.primary
      },

      /* Styles applied to the root element if `color="textSecondary"`. */
      colorTextSecondary: {
        color: theme.palette.text.secondary
      },

      /* Styles applied to the root element if `color="error"`. */
      colorError: {
        color: theme.palette.error.main
      },

      /* Styles applied to the root element if `display="inline"`. */
      displayInline: {
        display: 'inline'
      },

      /* Styles applied to the root element if `display="block"`. */
      displayBlock: {
        display: 'block'
      }
    };
  };
  var defaultVariantMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p'
  };
  var Typography = React.forwardRef(function Typography(props, ref) {
    var _props$align = props.align,
        align = _props$align === void 0 ? 'inherit' : _props$align,
        classes = props.classes,
        className = props.className,
        _props$color = props.color,
        color = _props$color === void 0 ? 'initial' : _props$color,
        component = props.component,
        _props$display = props.display,
        display = _props$display === void 0 ? 'initial' : _props$display,
        _props$gutterBottom = props.gutterBottom,
        gutterBottom = _props$gutterBottom === void 0 ? false : _props$gutterBottom,
        _props$noWrap = props.noWrap,
        noWrap = _props$noWrap === void 0 ? false : _props$noWrap,
        _props$paragraph = props.paragraph,
        paragraph = _props$paragraph === void 0 ? false : _props$paragraph,
        _props$variant = props.variant,
        variant = _props$variant === void 0 ? 'body1' : _props$variant,
        _props$variantMapping = props.variantMapping,
        variantMapping = _props$variantMapping === void 0 ? defaultVariantMapping : _props$variantMapping,
        other = _objectWithoutProperties(props, ["align", "classes", "className", "color", "component", "display", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"]);

    var Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
    return /*#__PURE__*/React.createElement(Component, _extends({
      className: clsx(classes.root, className, variant !== 'inherit' && classes[variant], color !== 'initial' && classes["color".concat(capitalize(color))], noWrap && classes.noWrap, gutterBottom && classes.gutterBottom, paragraph && classes.paragraph, align !== 'inherit' && classes["align".concat(capitalize(align))], display !== 'initial' && classes["display".concat(capitalize(display))]),
      ref: ref
    }, other));
  });
  var Typography$1 = withStyles$1(styles$9, {
    name: 'MuiTypography'
  })(Typography);

  var styles$a = {
    /* Styles applied to the root element. */
    root: {
      margin: 0,
      padding: '16px 24px',
      flex: '0 0 auto'
    }
  };
  var DialogTitle = React.forwardRef(function DialogTitle(props, ref) {
    var children = props.children,
        classes = props.classes,
        className = props.className,
        _props$disableTypogra = props.disableTypography,
        disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
        other = _objectWithoutProperties(props, ["children", "classes", "className", "disableTypography"]);

    return /*#__PURE__*/React.createElement("div", _extends({
      className: clsx(classes.root, className),
      ref: ref
    }, other), disableTypography ? children : /*#__PURE__*/React.createElement(Typography$1, {
      component: "h2",
      variant: "h6"
    }, children));
  });
  var DialogTitle$1 = withStyles$1(styles$a, {
    name: 'MuiDialogTitle'
  })(DialogTitle);

  var styles$b = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        flex: '1 1 auto',
        WebkitOverflowScrolling: 'touch',
        // Add iOS momentum scrolling.
        overflowY: 'auto',
        padding: '8px 24px',
        '&:first-child': {
          // dialog without title
          paddingTop: 20
        }
      },

      /* Styles applied to the root element if `dividers={true}`. */
      dividers: {
        padding: '16px 24px',
        borderTop: "1px solid ".concat(theme.palette.divider),
        borderBottom: "1px solid ".concat(theme.palette.divider)
      }
    };
  };
  var DialogContent = React.forwardRef(function DialogContent(props, ref) {
    var classes = props.classes,
        className = props.className,
        _props$dividers = props.dividers,
        dividers = _props$dividers === void 0 ? false : _props$dividers,
        other = _objectWithoutProperties(props, ["classes", "className", "dividers"]);

    return /*#__PURE__*/React.createElement("div", _extends({
      className: clsx(classes.root, className, dividers && classes.dividers),
      ref: ref
    }, other));
  });
  var DialogContent$1 = withStyles$1(styles$b, {
    name: 'MuiDialogContent'
  })(DialogContent);

  var styles$c = {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      alignItems: 'center',
      padding: 8,
      justifyContent: 'flex-end',
      flex: '0 0 auto'
    },

    /* Styles applied to the root element if `disableSpacing={false}`. */
    spacing: {
      '& > :not(:first-child)': {
        marginLeft: 8
      }
    }
  };
  var DialogActions = React.forwardRef(function DialogActions(props, ref) {
    var _props$disableSpacing = props.disableSpacing,
        disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing,
        classes = props.classes,
        className = props.className,
        other = _objectWithoutProperties(props, ["disableSpacing", "classes", "className"]);

    return /*#__PURE__*/React.createElement("div", _extends({
      className: clsx(classes.root, className, !disableSpacing && classes.spacing),
      ref: ref
    }, other));
  });
  var DialogActions$1 = withStyles$1(styles$c, {
    name: 'MuiDialogActions'
  })(DialogActions);

  /**
   * @ignore - internal component.
   */

  var ListContext = React.createContext({});

  var styles$d = {
    /* Styles applied to the root element. */
    root: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      position: 'relative'
    },

    /* Styles applied to the root element if `disablePadding={false}`. */
    padding: {
      paddingTop: 8,
      paddingBottom: 8
    },

    /* Styles applied to the root element if dense. */
    dense: {},

    /* Styles applied to the root element if a `subheader` is provided. */
    subheader: {
      paddingTop: 0
    }
  };
  var List = React.forwardRef(function List(props, ref) {
    var children = props.children,
        classes = props.classes,
        className = props.className,
        _props$component = props.component,
        Component = _props$component === void 0 ? 'ul' : _props$component,
        _props$dense = props.dense,
        dense = _props$dense === void 0 ? false : _props$dense,
        _props$disablePadding = props.disablePadding,
        disablePadding = _props$disablePadding === void 0 ? false : _props$disablePadding,
        subheader = props.subheader,
        other = _objectWithoutProperties(props, ["children", "classes", "className", "component", "dense", "disablePadding", "subheader"]);

    var context = React.useMemo(function () {
      return {
        dense: dense
      };
    }, [dense]);
    return /*#__PURE__*/React.createElement(ListContext.Provider, {
      value: context
    }, /*#__PURE__*/React.createElement(Component, _extends({
      className: clsx(classes.root, className, dense && classes.dense, !disablePadding && classes.padding, subheader && classes.subheader),
      ref: ref
    }, other), subheader, children));
  });
  var List$1 = withStyles$1(styles$d, {
    name: 'MuiList'
  })(List);

  function isMuiElement(element, muiNames) {
    return React.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
  }

  var styles$e = function styles(theme) {
    return {
      /* Styles applied to the (normally root) `component` element. May be wrapped by a `container`. */
      root: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        textDecoration: 'none',
        width: '100%',
        boxSizing: 'border-box',
        textAlign: 'left',
        paddingTop: 8,
        paddingBottom: 8,
        '&$focusVisible': {
          backgroundColor: theme.palette.action.selected
        },
        '&$selected, &$selected:hover': {
          backgroundColor: theme.palette.action.selected
        },
        '&$disabled': {
          opacity: 0.5
        }
      },

      /* Styles applied to the `container` element if `children` includes `ListItemSecondaryAction`. */
      container: {
        position: 'relative'
      },

      /* Pseudo-class applied to the `component`'s `focusVisibleClassName` prop if `button={true}`. */
      focusVisible: {},

      /* Styles applied to the `component` element if dense. */
      dense: {
        paddingTop: 4,
        paddingBottom: 4
      },

      /* Styles applied to the `component` element if `alignItems="flex-start"`. */
      alignItemsFlexStart: {
        alignItems: 'flex-start'
      },

      /* Pseudo-class applied to the inner `component` element if `disabled={true}`. */
      disabled: {},

      /* Styles applied to the inner `component` element if `divider={true}`. */
      divider: {
        borderBottom: "1px solid ".concat(theme.palette.divider),
        backgroundClip: 'padding-box'
      },

      /* Styles applied to the inner `component` element if `disableGutters={false}`. */
      gutters: {
        paddingLeft: 16,
        paddingRight: 16
      },

      /* Styles applied to the inner `component` element if `button={true}`. */
      button: {
        transition: theme.transitions.create('background-color', {
          duration: theme.transitions.duration.shortest
        }),
        '&:hover': {
          textDecoration: 'none',
          backgroundColor: theme.palette.action.hover,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },

      /* Styles applied to the `component` element if `children` includes `ListItemSecondaryAction`. */
      secondaryAction: {
        // Add some space to avoid collision as `ListItemSecondaryAction`
        // is absolutely positioned.
        paddingRight: 48
      },

      /* Pseudo-class applied to the root element if `selected={true}`. */
      selected: {}
    };
  };
  var useEnhancedEffect$4 = typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect;
  /**
   * Uses an additional container component if `ListItemSecondaryAction` is the last child.
   */

  var ListItem = React.forwardRef(function ListItem(props, ref) {
    var _props$alignItems = props.alignItems,
        alignItems = _props$alignItems === void 0 ? 'center' : _props$alignItems,
        _props$autoFocus = props.autoFocus,
        autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
        _props$button = props.button,
        button = _props$button === void 0 ? false : _props$button,
        childrenProp = props.children,
        classes = props.classes,
        className = props.className,
        componentProp = props.component,
        _props$ContainerCompo = props.ContainerComponent,
        ContainerComponent = _props$ContainerCompo === void 0 ? 'li' : _props$ContainerCompo,
        _props$ContainerProps = props.ContainerProps;
    _props$ContainerProps = _props$ContainerProps === void 0 ? {} : _props$ContainerProps;

    var ContainerClassName = _props$ContainerProps.className,
        ContainerProps = _objectWithoutProperties(_props$ContainerProps, ["className"]),
        _props$dense = props.dense,
        dense = _props$dense === void 0 ? false : _props$dense,
        _props$disabled = props.disabled,
        disabled = _props$disabled === void 0 ? false : _props$disabled,
        _props$disableGutters = props.disableGutters,
        disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
        _props$divider = props.divider,
        divider = _props$divider === void 0 ? false : _props$divider,
        focusVisibleClassName = props.focusVisibleClassName,
        _props$selected = props.selected,
        selected = _props$selected === void 0 ? false : _props$selected,
        other = _objectWithoutProperties(props, ["alignItems", "autoFocus", "button", "children", "classes", "className", "component", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "divider", "focusVisibleClassName", "selected"]);

    var context = React.useContext(ListContext);
    var childContext = {
      dense: dense || context.dense || false,
      alignItems: alignItems
    };
    var listItemRef = React.useRef(null);
    useEnhancedEffect$4(function () {
      if (autoFocus) {
        if (listItemRef.current) {
          listItemRef.current.focus();
        }
      }
    }, [autoFocus]);
    var children = React.Children.toArray(childrenProp);
    var hasSecondaryAction = children.length && isMuiElement(children[children.length - 1], ['ListItemSecondaryAction']);
    var handleOwnRef = React.useCallback(function (instance) {
      // #StrictMode ready
      listItemRef.current = ReactDOM.findDOMNode(instance);
    }, []);
    var handleRef = useForkRef(handleOwnRef, ref);

    var componentProps = _extends({
      className: clsx(classes.root, className, childContext.dense && classes.dense, !disableGutters && classes.gutters, divider && classes.divider, disabled && classes.disabled, button && classes.button, alignItems !== "center" && classes.alignItemsFlexStart, hasSecondaryAction && classes.secondaryAction, selected && classes.selected),
      disabled: disabled
    }, other);

    var Component = componentProp || 'li';

    if (button) {
      componentProps.component = componentProp || 'div';
      componentProps.focusVisibleClassName = clsx(classes.focusVisible, focusVisibleClassName);
      Component = ButtonBase$1;
    }

    if (hasSecondaryAction) {
      // Use div by default.
      Component = !componentProps.component && !componentProp ? 'div' : Component; // Avoid nesting of li > li.

      if (ContainerComponent === 'li') {
        if (Component === 'li') {
          Component = 'div';
        } else if (componentProps.component === 'li') {
          componentProps.component = 'div';
        }
      }

      return /*#__PURE__*/React.createElement(ListContext.Provider, {
        value: childContext
      }, /*#__PURE__*/React.createElement(ContainerComponent, _extends({
        className: clsx(classes.container, ContainerClassName),
        ref: handleRef
      }, ContainerProps), /*#__PURE__*/React.createElement(Component, componentProps, children), children.pop()));
    }

    return /*#__PURE__*/React.createElement(ListContext.Provider, {
      value: childContext
    }, /*#__PURE__*/React.createElement(Component, _extends({
      ref: handleRef
    }, componentProps), children));
  });
  var ListItem$1 = withStyles$1(styles$e, {
    name: 'MuiListItem'
  })(ListItem);

  var styles$f = {
    /* Styles applied to the root element. */
    root: {
      flex: '1 1 auto',
      minWidth: 0,
      marginTop: 4,
      marginBottom: 4
    },

    /* Styles applied to the `Typography` components if primary and secondary are set. */
    multiline: {
      marginTop: 6,
      marginBottom: 6
    },

    /* Styles applied to the `Typography` components if dense. */
    dense: {},

    /* Styles applied to the root element if `inset={true}`. */
    inset: {
      paddingLeft: 56
    },

    /* Styles applied to the primary `Typography` component. */
    primary: {},

    /* Styles applied to the secondary `Typography` component. */
    secondary: {}
  };
  var ListItemText = React.forwardRef(function ListItemText(props, ref) {
    var children = props.children,
        classes = props.classes,
        className = props.className,
        _props$disableTypogra = props.disableTypography,
        disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
        _props$inset = props.inset,
        inset = _props$inset === void 0 ? false : _props$inset,
        primaryProp = props.primary,
        primaryTypographyProps = props.primaryTypographyProps,
        secondaryProp = props.secondary,
        secondaryTypographyProps = props.secondaryTypographyProps,
        other = _objectWithoutProperties(props, ["children", "classes", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"]);

    var _React$useContext = React.useContext(ListContext),
        dense = _React$useContext.dense;

    var primary = primaryProp != null ? primaryProp : children;

    if (primary != null && primary.type !== Typography$1 && !disableTypography) {
      primary = /*#__PURE__*/React.createElement(Typography$1, _extends({
        variant: dense ? 'body2' : 'body1',
        className: classes.primary,
        component: "span",
        display: "block"
      }, primaryTypographyProps), primary);
    }

    var secondary = secondaryProp;

    if (secondary != null && secondary.type !== Typography$1 && !disableTypography) {
      secondary = /*#__PURE__*/React.createElement(Typography$1, _extends({
        variant: "body2",
        className: classes.secondary,
        color: "textSecondary",
        display: "block"
      }, secondaryTypographyProps), secondary);
    }

    return /*#__PURE__*/React.createElement("div", _extends({
      className: clsx(classes.root, className, dense && classes.dense, inset && classes.inset, primary && secondary && classes.multiline),
      ref: ref
    }, other), primary, secondary);
  });
  var ListItemText$1 = withStyles$1(styles$f, {
    name: 'MuiListItemText'
  })(ListItemText);

  var interopRequireDefault = createCommonjsModule(function (module) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  module.exports = _interopRequireDefault;
  });

  unwrapExports(interopRequireDefault);

  var _extends_1 = createCommonjsModule(function (module) {
  function _extends() {
    module.exports = _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  module.exports = _extends;
  });

  var styles$g = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        userSelect: 'none',
        width: '1em',
        height: '1em',
        display: 'inline-block',
        fill: 'currentColor',
        flexShrink: 0,
        fontSize: theme.typography.pxToRem(24),
        transition: theme.transitions.create('fill', {
          duration: theme.transitions.duration.shorter
        })
      },

      /* Styles applied to the root element if `color="primary"`. */
      colorPrimary: {
        color: theme.palette.primary.main
      },

      /* Styles applied to the root element if `color="secondary"`. */
      colorSecondary: {
        color: theme.palette.secondary.main
      },

      /* Styles applied to the root element if `color="action"`. */
      colorAction: {
        color: theme.palette.action.active
      },

      /* Styles applied to the root element if `color="error"`. */
      colorError: {
        color: theme.palette.error.main
      },

      /* Styles applied to the root element if `color="disabled"`. */
      colorDisabled: {
        color: theme.palette.action.disabled
      },

      /* Styles applied to the root element if `fontSize="inherit"`. */
      fontSizeInherit: {
        fontSize: 'inherit'
      },

      /* Styles applied to the root element if `fontSize="small"`. */
      fontSizeSmall: {
        fontSize: theme.typography.pxToRem(20)
      },

      /* Styles applied to the root element if `fontSize="large"`. */
      fontSizeLarge: {
        fontSize: theme.typography.pxToRem(35)
      }
    };
  };
  var SvgIcon = React.forwardRef(function SvgIcon(props, ref) {
    var children = props.children,
        classes = props.classes,
        className = props.className,
        _props$color = props.color,
        color = _props$color === void 0 ? 'inherit' : _props$color,
        _props$component = props.component,
        Component = _props$component === void 0 ? 'svg' : _props$component,
        _props$fontSize = props.fontSize,
        fontSize = _props$fontSize === void 0 ? 'default' : _props$fontSize,
        htmlColor = props.htmlColor,
        titleAccess = props.titleAccess,
        _props$viewBox = props.viewBox,
        viewBox = _props$viewBox === void 0 ? '0 0 24 24' : _props$viewBox,
        other = _objectWithoutProperties(props, ["children", "classes", "className", "color", "component", "fontSize", "htmlColor", "titleAccess", "viewBox"]);

    return /*#__PURE__*/React.createElement(Component, _extends({
      className: clsx(classes.root, className, color !== 'inherit' && classes["color".concat(capitalize(color))], fontSize !== 'default' && classes["fontSize".concat(capitalize(fontSize))]),
      focusable: "false",
      viewBox: viewBox,
      color: htmlColor,
      "aria-hidden": titleAccess ? undefined : 'true',
      role: titleAccess ? 'img' : undefined,
      ref: ref
    }, other), children, titleAccess ? /*#__PURE__*/React.createElement("title", null, titleAccess) : null);
  });
  SvgIcon.muiName = 'SvgIcon';
  var SvgIcon$1 = withStyles$1(styles$g, {
    name: 'MuiSvgIcon'
  })(SvgIcon);

  var createSvgIcon_1 = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createSvgIcon;

  var _extends2 = interopRequireDefault(_extends_1);

  var _react = interopRequireDefault(React__default);

  var _SvgIcon = interopRequireDefault(SvgIcon$1);

  function createSvgIcon(path, displayName) {
    var Component = _react.default.memo(_react.default.forwardRef(function (props, ref) {
      return _react.default.createElement(_SvgIcon.default, (0, _extends2.default)({
        ref: ref
      }, props), path);
    }));

    Component.muiName = _SvgIcon.default.muiName;
    return Component;
  }
  });

  unwrapExports(createSvgIcon_1);

  var MoreVertRounded = createCommonjsModule(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _react = interopRequireDefault(React__default);

  var _createSvgIcon = interopRequireDefault(createSvgIcon_1);

  var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
  }), 'MoreVertRounded');

  exports.default = _default;
  });

  var MoreVertRounded$1 = unwrapExports(MoreVertRounded);

  var styles$h = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        textAlign: 'center',
        flex: '0 0 auto',
        fontSize: theme.typography.pxToRem(24),
        padding: 12,
        borderRadius: '50%',
        overflow: 'visible',
        // Explicitly set the default value to solve a bug on IE 11.
        color: theme.palette.action.active,
        transition: theme.transitions.create('background-color', {
          duration: theme.transitions.duration.shortest
        }),
        '&:hover': {
          backgroundColor: fade(theme.palette.action.active, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        },
        '&$disabled': {
          backgroundColor: 'transparent',
          color: theme.palette.action.disabled
        }
      },

      /* Styles applied to the root element if `edge="start"`. */
      edgeStart: {
        marginLeft: -12,
        '$sizeSmall&': {
          marginLeft: -3
        }
      },

      /* Styles applied to the root element if `edge="end"`. */
      edgeEnd: {
        marginRight: -12,
        '$sizeSmall&': {
          marginRight: -3
        }
      },

      /* Styles applied to the root element if `color="inherit"`. */
      colorInherit: {
        color: 'inherit'
      },

      /* Styles applied to the root element if `color="primary"`. */
      colorPrimary: {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },

      /* Styles applied to the root element if `color="secondary"`. */
      colorSecondary: {
        color: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },

      /* Pseudo-class applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Styles applied to the root element if `size="small"`. */
      sizeSmall: {
        padding: 3,
        fontSize: theme.typography.pxToRem(18)
      },

      /* Styles applied to the children container element. */
      label: {
        width: '100%',
        display: 'flex',
        alignItems: 'inherit',
        justifyContent: 'inherit'
      }
    };
  };
  /**
   * Refer to the [Icons](/components/icons/) section of the documentation
   * regarding the available icon options.
   */

  var IconButton = React.forwardRef(function IconButton(props, ref) {
    var _props$edge = props.edge,
        edge = _props$edge === void 0 ? false : _props$edge,
        children = props.children,
        classes = props.classes,
        className = props.className,
        _props$color = props.color,
        color = _props$color === void 0 ? 'default' : _props$color,
        _props$disabled = props.disabled,
        disabled = _props$disabled === void 0 ? false : _props$disabled,
        _props$disableFocusRi = props.disableFocusRipple,
        disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
        _props$size = props.size,
        size = _props$size === void 0 ? 'medium' : _props$size,
        other = _objectWithoutProperties(props, ["edge", "children", "classes", "className", "color", "disabled", "disableFocusRipple", "size"]);

    return /*#__PURE__*/React.createElement(ButtonBase$1, _extends({
      className: clsx(classes.root, className, color !== 'default' && classes["color".concat(capitalize(color))], disabled && classes.disabled, size === "small" && classes["size".concat(capitalize(size))], {
        'start': classes.edgeStart,
        'end': classes.edgeEnd
      }[edge]),
      centerRipple: true,
      focusRipple: !disableFocusRipple,
      disabled: disabled,
      ref: ref
    }, other), /*#__PURE__*/React.createElement("span", {
      className: classes.label
    }, children));
  });
  var IconButton$1 = withStyles$1(styles$h, {
    name: 'MuiIconButton'
  })(IconButton);

  var styles$i = {
    /* Styles applied to the root element. */
    root: {
      position: 'absolute',
      right: 16,
      top: '50%',
      transform: 'translateY(-50%)'
    }
  };
  /**
   * Must be used as the last child of ListItem to function properly.
   */

  var ListItemSecondaryAction = React.forwardRef(function ListItemSecondaryAction(props, ref) {
    var classes = props.classes,
        className = props.className,
        other = _objectWithoutProperties(props, ["classes", "className"]);

    return /*#__PURE__*/React.createElement("div", _extends({
      className: clsx(classes.root, className),
      ref: ref
    }, other));
  });
  ListItemSecondaryAction.muiName = 'ListItemSecondaryAction';
  var ListItemSecondaryAction$1 = withStyles$1(styles$i, {
    name: 'MuiListItemSecondaryAction'
  })(ListItemSecondaryAction);

  // Corresponds to 10 frames at 60 Hz.
  // A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
  function debounce(func) {
    var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 166;
    var timeout;

    function debounced() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // eslint-disable-next-line consistent-this
      var that = this;

      var later = function later() {
        func.apply(that, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    }

    debounced.clear = function () {
      clearTimeout(timeout);
    };

    return debounced;
  }

  function getScale(value) {
    return "scale(".concat(value, ", ").concat(Math.pow(value, 2), ")");
  }

  var styles$j = {
    entering: {
      opacity: 1,
      transform: getScale(1)
    },
    entered: {
      opacity: 1,
      transform: 'none'
    }
  };
  /**
   * The Grow transition is used by the [Tooltip](/components/tooltips/) and
   * [Popover](/components/popover/) components.
   * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
   */

  var Grow = React.forwardRef(function Grow(props, ref) {
    var children = props.children,
        inProp = props.in,
        onEnter = props.onEnter,
        onExit = props.onExit,
        style = props.style,
        _props$timeout = props.timeout,
        timeout = _props$timeout === void 0 ? 'auto' : _props$timeout,
        other = _objectWithoutProperties(props, ["children", "in", "onEnter", "onExit", "style", "timeout"]);

    var timer = React.useRef();
    var autoTimeout = React.useRef();
    var handleRef = useForkRef(children.ref, ref);
    var theme = useTheme$1();

    var handleEnter = function handleEnter(node, isAppearing) {
      reflow(node); // So the animation always start from the start.

      var _getTransitionProps = getTransitionProps({
        style: style,
        timeout: timeout
      }, {
        mode: 'enter'
      }),
          transitionDuration = _getTransitionProps.duration,
          delay = _getTransitionProps.delay;

      var duration;

      if (timeout === 'auto') {
        duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
        autoTimeout.current = duration;
      } else {
        duration = transitionDuration;
      }

      node.style.transition = [theme.transitions.create('opacity', {
        duration: duration,
        delay: delay
      }), theme.transitions.create('transform', {
        duration: duration * 0.666,
        delay: delay
      })].join(',');

      if (onEnter) {
        onEnter(node, isAppearing);
      }
    };

    var handleExit = function handleExit(node) {
      var _getTransitionProps2 = getTransitionProps({
        style: style,
        timeout: timeout
      }, {
        mode: 'exit'
      }),
          transitionDuration = _getTransitionProps2.duration,
          delay = _getTransitionProps2.delay;

      var duration;

      if (timeout === 'auto') {
        duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
        autoTimeout.current = duration;
      } else {
        duration = transitionDuration;
      }

      node.style.transition = [theme.transitions.create('opacity', {
        duration: duration,
        delay: delay
      }), theme.transitions.create('transform', {
        duration: duration * 0.666,
        delay: delay || duration * 0.333
      })].join(',');
      node.style.opacity = '0';
      node.style.transform = getScale(0.75);

      if (onExit) {
        onExit(node);
      }
    };

    var addEndListener = function addEndListener(_, next) {
      if (timeout === 'auto') {
        timer.current = setTimeout(next, autoTimeout.current || 0);
      }
    };

    React.useEffect(function () {
      return function () {
        clearTimeout(timer.current);
      };
    }, []);
    return /*#__PURE__*/React.createElement(Transition, _extends({
      appear: true,
      in: inProp,
      onEnter: handleEnter,
      onExit: handleExit,
      addEndListener: addEndListener,
      timeout: timeout === 'auto' ? null : timeout
    }, other), function (state, childProps) {
      return React.cloneElement(children, _extends({
        style: _extends({
          opacity: 0,
          transform: getScale(0.75),
          visibility: state === 'exited' && !inProp ? 'hidden' : undefined
        }, styles$j[state], {}, style, {}, children.props.style),
        ref: handleRef
      }, childProps));
    });
  });
  Grow.muiSupportAuto = true;

  function getOffsetTop(rect, vertical) {
    var offset = 0;

    if (typeof vertical === 'number') {
      offset = vertical;
    } else if (vertical === 'center') {
      offset = rect.height / 2;
    } else if (vertical === 'bottom') {
      offset = rect.height;
    }

    return offset;
  }
  function getOffsetLeft(rect, horizontal) {
    var offset = 0;

    if (typeof horizontal === 'number') {
      offset = horizontal;
    } else if (horizontal === 'center') {
      offset = rect.width / 2;
    } else if (horizontal === 'right') {
      offset = rect.width;
    }

    return offset;
  }

  function getTransformOriginValue(transformOrigin) {
    return [transformOrigin.horizontal, transformOrigin.vertical].map(function (n) {
      return typeof n === 'number' ? "".concat(n, "px") : n;
    }).join(' ');
  } // Sum the scrollTop between two elements.


  function getScrollParent(parent, child) {
    var element = child;
    var scrollTop = 0;

    while (element && element !== parent) {
      element = element.parentElement;
      scrollTop += element.scrollTop;
    }

    return scrollTop;
  }

  function getAnchorEl(anchorEl) {
    return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
  }

  var styles$k = {
    /* Styles applied to the root element */
    root: {},

    /* Styles applied to the `Paper` component. */
    paper: {
      position: 'absolute',
      overflowY: 'auto',
      overflowX: 'hidden',
      // So we see the popover when it's empty.
      // It's most likely on issue on userland.
      minWidth: 16,
      minHeight: 16,
      maxWidth: 'calc(100% - 32px)',
      maxHeight: 'calc(100% - 32px)',
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0
    }
  };
  var Popover = React.forwardRef(function Popover(props, ref) {
    var action = props.action,
        anchorEl = props.anchorEl,
        _props$anchorOrigin = props.anchorOrigin,
        anchorOrigin = _props$anchorOrigin === void 0 ? {
      vertical: 'top',
      horizontal: 'left'
    } : _props$anchorOrigin,
        anchorPosition = props.anchorPosition,
        _props$anchorReferenc = props.anchorReference,
        anchorReference = _props$anchorReferenc === void 0 ? 'anchorEl' : _props$anchorReferenc,
        children = props.children,
        classes = props.classes,
        className = props.className,
        containerProp = props.container,
        _props$elevation = props.elevation,
        elevation = _props$elevation === void 0 ? 8 : _props$elevation,
        getContentAnchorEl = props.getContentAnchorEl,
        _props$marginThreshol = props.marginThreshold,
        marginThreshold = _props$marginThreshol === void 0 ? 16 : _props$marginThreshol,
        onEnter = props.onEnter,
        onEntered = props.onEntered,
        onEntering = props.onEntering,
        onExit = props.onExit,
        onExited = props.onExited,
        onExiting = props.onExiting,
        open = props.open,
        _props$PaperProps = props.PaperProps,
        PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
        _props$transformOrigi = props.transformOrigin,
        transformOrigin = _props$transformOrigi === void 0 ? {
      vertical: 'top',
      horizontal: 'left'
    } : _props$transformOrigi,
        _props$TransitionComp = props.TransitionComponent,
        TransitionComponent = _props$TransitionComp === void 0 ? Grow : _props$TransitionComp,
        _props$transitionDura = props.transitionDuration,
        transitionDurationProp = _props$transitionDura === void 0 ? 'auto' : _props$transitionDura,
        _props$TransitionProp = props.TransitionProps,
        TransitionProps = _props$TransitionProp === void 0 ? {} : _props$TransitionProp,
        other = _objectWithoutProperties(props, ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "classes", "className", "container", "elevation", "getContentAnchorEl", "marginThreshold", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"]);

    var paperRef = React.useRef(); // Returns the top/left offset of the position
    // to attach to on the anchor element (or body if none is provided)

    var getAnchorOffset = React.useCallback(function (contentAnchorOffset) {
      if (anchorReference === 'anchorPosition') {

        return anchorPosition;
      }

      var resolvedAnchorEl = getAnchorEl(anchorEl);
      var containerWindow = ownerWindow(resolvedAnchorEl); // If an anchor element wasn't provided, just use the parent body element of this Popover

      var anchorElement = resolvedAnchorEl instanceof containerWindow.Element ? resolvedAnchorEl : ownerDocument(paperRef.current).body;
      var anchorRect = anchorElement.getBoundingClientRect();

      var anchorVertical = contentAnchorOffset === 0 ? anchorOrigin.vertical : 'center';
      return {
        top: anchorRect.top + getOffsetTop(anchorRect, anchorVertical),
        left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
      };
    }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]); // Returns the vertical offset of inner content to anchor the transform on if provided

    var getContentAnchorOffset = React.useCallback(function (element) {
      var contentAnchorOffset = 0;

      if (getContentAnchorEl && anchorReference === 'anchorEl') {
        var contentAnchorEl = getContentAnchorEl(element);

        if (contentAnchorEl && element.contains(contentAnchorEl)) {
          var scrollTop = getScrollParent(element, contentAnchorEl);
          contentAnchorOffset = contentAnchorEl.offsetTop + contentAnchorEl.clientHeight / 2 - scrollTop || 0;
        } // != the default value
      }

      return contentAnchorOffset;
    }, [anchorOrigin.vertical, anchorReference, getContentAnchorEl]); // Return the base transform origin using the element
    // and taking the content anchor offset into account if in use

    var getTransformOrigin = React.useCallback(function (elemRect) {
      var contentAnchorOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return {
        vertical: getOffsetTop(elemRect, transformOrigin.vertical) + contentAnchorOffset,
        horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
      };
    }, [transformOrigin.horizontal, transformOrigin.vertical]);
    var getPositioningStyle = React.useCallback(function (element) {
      // Check if the parent has requested anchoring on an inner content node
      var contentAnchorOffset = getContentAnchorOffset(element);
      var elemRect = {
        width: element.offsetWidth,
        height: element.offsetHeight
      }; // Get the transform origin point on the element itself

      var elemTransformOrigin = getTransformOrigin(elemRect, contentAnchorOffset);

      if (anchorReference === 'none') {
        return {
          top: null,
          left: null,
          transformOrigin: getTransformOriginValue(elemTransformOrigin)
        };
      } // Get the offset of of the anchoring element


      var anchorOffset = getAnchorOffset(contentAnchorOffset); // Calculate element positioning

      var top = anchorOffset.top - elemTransformOrigin.vertical;
      var left = anchorOffset.left - elemTransformOrigin.horizontal;
      var bottom = top + elemRect.height;
      var right = left + elemRect.width; // Use the parent window of the anchorEl if provided

      var containerWindow = ownerWindow(getAnchorEl(anchorEl)); // Window thresholds taking required margin into account

      var heightThreshold = containerWindow.innerHeight - marginThreshold;
      var widthThreshold = containerWindow.innerWidth - marginThreshold; // Check if the vertical axis needs shifting

      if (top < marginThreshold) {
        var diff = top - marginThreshold;
        top -= diff;
        elemTransformOrigin.vertical += diff;
      } else if (bottom > heightThreshold) {
        var _diff = bottom - heightThreshold;

        top -= _diff;
        elemTransformOrigin.vertical += _diff;
      }


      if (left < marginThreshold) {
        var _diff2 = left - marginThreshold;

        left -= _diff2;
        elemTransformOrigin.horizontal += _diff2;
      } else if (right > widthThreshold) {
        var _diff3 = right - widthThreshold;

        left -= _diff3;
        elemTransformOrigin.horizontal += _diff3;
      }

      return {
        top: "".concat(Math.round(top), "px"),
        left: "".concat(Math.round(left), "px"),
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    }, [anchorEl, anchorReference, getAnchorOffset, getContentAnchorOffset, getTransformOrigin, marginThreshold]);
    var setPositioningStyles = React.useCallback(function () {
      var element = paperRef.current;

      if (!element) {
        return;
      }

      var positioning = getPositioningStyle(element);

      if (positioning.top !== null) {
        element.style.top = positioning.top;
      }

      if (positioning.left !== null) {
        element.style.left = positioning.left;
      }

      element.style.transformOrigin = positioning.transformOrigin;
    }, [getPositioningStyle]);

    var handleEntering = function handleEntering(element, isAppearing) {
      if (onEntering) {
        onEntering(element, isAppearing);
      }

      setPositioningStyles();
    };

    var handlePaperRef = React.useCallback(function (instance) {
      // #StrictMode ready
      paperRef.current = ReactDOM.findDOMNode(instance);
    }, []);
    React.useEffect(function () {
      if (open) {
        setPositioningStyles();
      }
    });
    React.useImperativeHandle(action, function () {
      return open ? {
        updatePosition: function updatePosition() {
          setPositioningStyles();
        }
      } : null;
    }, [open, setPositioningStyles]);
    React.useEffect(function () {
      if (!open) {
        return undefined;
      }

      var handleResize = debounce(function () {
        setPositioningStyles();
      });
      window.addEventListener('resize', handleResize);
      return function () {
        handleResize.clear();
        window.removeEventListener('resize', handleResize);
      };
    }, [open, setPositioningStyles]);
    var transitionDuration = transitionDurationProp;

    if (transitionDurationProp === 'auto' && !TransitionComponent.muiSupportAuto) {
      transitionDuration = undefined;
    } // If the container prop is provided, use that
    // If the anchorEl prop is provided, use its parent body element as the container
    // If neither are provided let the Modal take care of choosing the container


    var container = containerProp || (anchorEl ? ownerDocument(getAnchorEl(anchorEl)).body : undefined);
    return /*#__PURE__*/React.createElement(Modal, _extends({
      container: container,
      open: open,
      ref: ref,
      BackdropProps: {
        invisible: true
      },
      className: clsx(classes.root, className)
    }, other), /*#__PURE__*/React.createElement(TransitionComponent, _extends({
      appear: true,
      in: open,
      onEnter: onEnter,
      onEntered: onEntered,
      onExit: onExit,
      onExited: onExited,
      onExiting: onExiting,
      timeout: transitionDuration
    }, TransitionProps, {
      onEntering: createChainedFunction(handleEntering, TransitionProps.onEntering)
    }), /*#__PURE__*/React.createElement(Paper$1, _extends({
      elevation: elevation,
      ref: handlePaperRef
    }, PaperProps, {
      className: clsx(classes.paper, PaperProps.className)
    }), children)));
  });
  var Popover$1 = withStyles$1(styles$k, {
    name: 'MuiPopover'
  })(Popover);

  function nextItem(list, item, disableListWrap) {
    if (list === item) {
      return list.firstChild;
    }

    if (item && item.nextElementSibling) {
      return item.nextElementSibling;
    }

    return disableListWrap ? null : list.firstChild;
  }

  function previousItem(list, item, disableListWrap) {
    if (list === item) {
      return disableListWrap ? list.firstChild : list.lastChild;
    }

    if (item && item.previousElementSibling) {
      return item.previousElementSibling;
    }

    return disableListWrap ? null : list.lastChild;
  }

  function textCriteriaMatches(nextFocus, textCriteria) {
    if (textCriteria === undefined) {
      return true;
    }

    var text = nextFocus.innerText;

    if (text === undefined) {
      // jsdom doesn't support innerText
      text = nextFocus.textContent;
    }

    text = text.trim().toLowerCase();

    if (text.length === 0) {
      return false;
    }

    if (textCriteria.repeating) {
      return text[0] === textCriteria.keys[0];
    }

    return text.indexOf(textCriteria.keys.join('')) === 0;
  }

  function moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
    var wrappedOnce = false;
    var nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);

    while (nextFocus) {
      // Prevent infinite loop.
      if (nextFocus === list.firstChild) {
        if (wrappedOnce) {
          return;
        }

        wrappedOnce = true;
      } // Same logic as useAutocomplete.js


      var nextFocusDisabled = disabledItemsFocusable ? false : nextFocus.disabled || nextFocus.getAttribute('aria-disabled') === 'true';

      if (!nextFocus.hasAttribute('tabindex') || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
        // Move to the next element.
        nextFocus = traversalFunction(list, nextFocus, disableListWrap);
      } else {
        nextFocus.focus();
        return;
      }
    }
  }

  var useEnhancedEffect$5 = typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect;
  /**
   * A permanently displayed menu following https://www.w3.org/TR/wai-aria-practices/#menubutton.
   * It's exposed to help customization of the [`Menu`](/api/menu/) component. If you
   * use it separately you need to move focus into the component manually. Once
   * the focus is placed inside the component it is fully keyboard accessible.
   */

  var MenuList = React.forwardRef(function MenuList(props, ref) {
    var actions = props.actions,
        _props$autoFocus = props.autoFocus,
        autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
        _props$autoFocusItem = props.autoFocusItem,
        autoFocusItem = _props$autoFocusItem === void 0 ? false : _props$autoFocusItem,
        children = props.children,
        className = props.className,
        _props$disabledItemsF = props.disabledItemsFocusable,
        disabledItemsFocusable = _props$disabledItemsF === void 0 ? false : _props$disabledItemsF,
        _props$disableListWra = props.disableListWrap,
        disableListWrap = _props$disableListWra === void 0 ? false : _props$disableListWra,
        onKeyDown = props.onKeyDown,
        _props$variant = props.variant,
        variant = _props$variant === void 0 ? 'selectedMenu' : _props$variant,
        other = _objectWithoutProperties(props, ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"]);

    var listRef = React.useRef(null);
    var textCriteriaRef = React.useRef({
      keys: [],
      repeating: true,
      previousKeyMatched: true,
      lastTime: null
    });
    useEnhancedEffect$5(function () {
      if (autoFocus) {
        listRef.current.focus();
      }
    }, [autoFocus]);
    React.useImperativeHandle(actions, function () {
      return {
        adjustStyleForScrollbar: function adjustStyleForScrollbar(containerElement, theme) {
          // Let's ignore that piece of logic if users are already overriding the width
          // of the menu.
          var noExplicitWidth = !listRef.current.style.width;

          if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
            var scrollbarSize = "".concat(getScrollbarSize(), "px");
            listRef.current.style[theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight'] = scrollbarSize;
            listRef.current.style.width = "calc(100% + ".concat(scrollbarSize, ")");
          }

          return listRef.current;
        }
      };
    }, []);

    var handleKeyDown = function handleKeyDown(event) {
      var list = listRef.current;
      var key = event.key;
      /**
       * @type {Element} - will always be defined since we are in a keydown handler
       * attached to an element. A keydown event is either dispatched to the activeElement
       * or document.body or document.documentElement. Only the first case will
       * trigger this specific handler.
       */

      var currentFocus = ownerDocument(list).activeElement;

      if (key === 'ArrowDown') {
        // Prevent scroll of the page
        event.preventDefault();
        moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
      } else if (key === 'ArrowUp') {
        event.preventDefault();
        moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
      } else if (key === 'Home') {
        event.preventDefault();
        moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
      } else if (key === 'End') {
        event.preventDefault();
        moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
      } else if (key.length === 1) {
        var criteria = textCriteriaRef.current;
        var lowerKey = key.toLowerCase();
        var currTime = performance.now();

        if (criteria.keys.length > 0) {
          // Reset
          if (currTime - criteria.lastTime > 500) {
            criteria.keys = [];
            criteria.repeating = true;
            criteria.previousKeyMatched = true;
          } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
            criteria.repeating = false;
          }
        }

        criteria.lastTime = currTime;
        criteria.keys.push(lowerKey);
        var keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);

        if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, disabledItemsFocusable, nextItem, criteria))) {
          event.preventDefault();
        } else {
          criteria.previousKeyMatched = false;
        }
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    };

    var handleOwnRef = React.useCallback(function (instance) {
      // #StrictMode ready
      listRef.current = ReactDOM.findDOMNode(instance);
    }, []);
    var handleRef = useForkRef(handleOwnRef, ref);
    /**
     * the index of the item should receive focus
     * in a `variant="selectedMenu"` it's the first `selected` item
     * otherwise it's the very first item.
     */

    var activeItemIndex = -1; // since we inject focus related props into children we have to do a lookahead
    // to check if there is a `selected` item. We're looking for the last `selected`
    // item and use the first valid item as a fallback

    React.Children.forEach(children, function (child, index) {
      if (!React.isValidElement(child)) {
        return;
      }

      if (!child.props.disabled) {
        if (variant === 'selectedMenu' && child.props.selected) {
          activeItemIndex = index;
        } else if (activeItemIndex === -1) {
          activeItemIndex = index;
        }
      }
    });
    var items = React.Children.map(children, function (child, index) {
      if (index === activeItemIndex) {
        var newChildProps = {};

        if (autoFocusItem) {
          newChildProps.autoFocus = true;
        }

        if (child.props.tabIndex === undefined && variant === 'selectedMenu') {
          newChildProps.tabIndex = 0;
        }

        return React.cloneElement(child, newChildProps);
      }

      return child;
    });
    return /*#__PURE__*/React.createElement(List$1, _extends({
      role: "menu",
      ref: handleRef,
      className: className,
      onKeyDown: handleKeyDown,
      tabIndex: autoFocus ? 0 : -1
    }, other), items);
  });

  var RTL_ORIGIN = {
    vertical: 'top',
    horizontal: 'right'
  };
  var LTR_ORIGIN = {
    vertical: 'top',
    horizontal: 'left'
  };
  var styles$l = {
    /* Styles applied to the `Paper` component. */
    paper: {
      // specZ: The maximum height of a simple menu should be one or more rows less than the view
      // height. This ensures a tapable area outside of the simple menu with which to dismiss
      // the menu.
      maxHeight: 'calc(100% - 96px)',
      // Add iOS momentum scrolling.
      WebkitOverflowScrolling: 'touch'
    },

    /* Styles applied to the `List` component via `MenuList`. */
    list: {
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0
    }
  };
  var Menu = React.forwardRef(function Menu(props, ref) {
    var _props$autoFocus = props.autoFocus,
        autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus,
        children = props.children,
        classes = props.classes,
        _props$disableAutoFoc = props.disableAutoFocusItem,
        disableAutoFocusItem = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
        _props$MenuListProps = props.MenuListProps,
        MenuListProps = _props$MenuListProps === void 0 ? {} : _props$MenuListProps,
        onClose = props.onClose,
        onEntering = props.onEntering,
        open = props.open,
        _props$PaperProps = props.PaperProps,
        PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
        PopoverClasses = props.PopoverClasses,
        _props$transitionDura = props.transitionDuration,
        transitionDuration = _props$transitionDura === void 0 ? 'auto' : _props$transitionDura,
        _props$variant = props.variant,
        variant = _props$variant === void 0 ? 'selectedMenu' : _props$variant,
        other = _objectWithoutProperties(props, ["autoFocus", "children", "classes", "disableAutoFocusItem", "MenuListProps", "onClose", "onEntering", "open", "PaperProps", "PopoverClasses", "transitionDuration", "variant"]);

    var theme = useTheme$1();
    var autoFocusItem = autoFocus && !disableAutoFocusItem && open;
    var menuListActionsRef = React.useRef(null);
    var contentAnchorRef = React.useRef(null);

    var getContentAnchorEl = function getContentAnchorEl() {
      return contentAnchorRef.current;
    };

    var handleEntering = function handleEntering(element, isAppearing) {
      if (menuListActionsRef.current) {
        menuListActionsRef.current.adjustStyleForScrollbar(element, theme);
      }

      if (onEntering) {
        onEntering(element, isAppearing);
      }
    };

    var handleListKeyDown = function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();

        if (onClose) {
          onClose(event, 'tabKeyDown');
        }
      }
    };
    /**
     * the index of the item should receive focus
     * in a `variant="selectedMenu"` it's the first `selected` item
     * otherwise it's the very first item.
     */


    var activeItemIndex = -1; // since we inject focus related props into children we have to do a lookahead
    // to check if there is a `selected` item. We're looking for the last `selected`
    // item and use the first valid item as a fallback

    React.Children.map(children, function (child, index) {
      if (!React.isValidElement(child)) {
        return;
      }

      if (!child.props.disabled) {
        if (variant !== "menu" && child.props.selected) {
          activeItemIndex = index;
        } else if (activeItemIndex === -1) {
          activeItemIndex = index;
        }
      }
    });
    var items = React.Children.map(children, function (child, index) {
      if (index === activeItemIndex) {
        return React.cloneElement(child, {
          ref: function ref(instance) {
            // #StrictMode ready
            contentAnchorRef.current = ReactDOM.findDOMNode(instance);
            setRef(child.ref, instance);
          }
        });
      }

      return child;
    });
    return /*#__PURE__*/React.createElement(Popover$1, _extends({
      getContentAnchorEl: getContentAnchorEl,
      classes: PopoverClasses,
      onClose: onClose,
      onEntering: handleEntering,
      anchorOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
      transformOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
      PaperProps: _extends({}, PaperProps, {
        classes: _extends({}, PaperProps.classes, {
          root: classes.paper
        })
      }),
      open: open,
      ref: ref,
      transitionDuration: transitionDuration
    }, other), /*#__PURE__*/React.createElement(MenuList, _extends({
      onKeyDown: handleListKeyDown,
      actions: menuListActionsRef,
      autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
      autoFocusItem: autoFocusItem,
      variant: variant
    }, MenuListProps, {
      className: clsx(classes.list, MenuListProps.className)
    }), items));
  });
  var Menu$1 = withStyles$1(styles$l, {
    name: 'MuiMenu'
  })(Menu);

  var styles$m = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: _extends({}, theme.typography.body1, _defineProperty({
        minHeight: 48,
        paddingTop: 6,
        paddingBottom: 6,
        boxSizing: 'border-box',
        width: 'auto',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }, theme.breakpoints.up('sm'), {
        minHeight: 'auto'
      })),
      // TODO v5: remove

      /* Styles applied to the root element if `disableGutters={false}`. */
      gutters: {},

      /* Styles applied to the root element if `selected={true}`. */
      selected: {},

      /* Styles applied to the root element if dense. */
      dense: _extends({}, theme.typography.body2, {
        minHeight: 'auto'
      })
    };
  };
  var MenuItem = React.forwardRef(function MenuItem(props, ref) {
    var classes = props.classes,
        className = props.className,
        _props$component = props.component,
        component = _props$component === void 0 ? 'li' : _props$component,
        _props$disableGutters = props.disableGutters,
        disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
        ListItemClasses = props.ListItemClasses,
        _props$role = props.role,
        role = _props$role === void 0 ? 'menuitem' : _props$role,
        selected = props.selected,
        tabIndexProp = props.tabIndex,
        other = _objectWithoutProperties(props, ["classes", "className", "component", "disableGutters", "ListItemClasses", "role", "selected", "tabIndex"]);

    var tabIndex;

    if (!props.disabled) {
      tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
    }

    return /*#__PURE__*/React.createElement(ListItem$1, _extends({
      button: true,
      role: role,
      tabIndex: tabIndex,
      component: component,
      selected: selected,
      disableGutters: disableGutters,
      classes: _extends({
        dense: classes.dense
      }, ListItemClasses),
      className: clsx(classes.root, className, selected && classes.selected, !disableGutters && classes.gutters),
      ref: ref
    }, other));
  });
  var MenuItem$1 = withStyles$1(styles$m, {
    name: 'MuiMenuItem'
  })(MenuItem);

  var pluck = studio.rxjs.operators.pluck;
  function ItemsList(props) {
    var onItemActionClick = props.onItemActionClick;

    var _useState = React.useState(),
        _useState2 = _slicedToArray(_useState, 2),
        items = _useState2[0],
        setItems = _useState2[1];

    var _useState3 = React.useState(),
        _useState4 = _slicedToArray(_useState3, 2),
        menu = _useState4[0],
        setMenu = _useState4[1];

    React.useEffect(function () {
      studio.util.ajax.get("/studio/api/1/services/api/1/content/get-items-tree.json?site=31x-sidebar-plugin&path=/site/website&depth=1&order=default").pipe(pluck('response', 'item', 'children')).subscribe(setItems);
    }, []);

    var handleMenuClose = function handleMenuClose() {
      return setMenu(null);
    };

    var handleEdit = function handleEdit() {
      var item = menu.item;
      handleMenuClose();
      onItemActionClick === null || onItemActionClick === void 0 ? void 0 : onItemActionClick(item);
      CStudioAuthoring.Operations.editContent(item.contentType, CStudioAuthoringContext.site, "".concat(item.path, "/").concat(item.name), null, "".concat(item.path, "/").concat(item.name), false, {
        success: function success() {
          console.log('Save completed successfully.');
        },
        failure: function failure() {
          console.log('Save failed.');
        },
        callingWindow: window
      });
    };

    var handlePublish = function handlePublish() {
      var item = menu.item;
      handleMenuClose();
      onItemActionClick === null || onItemActionClick === void 0 ? void 0 : onItemActionClick(item);
      CStudioAuthoring.Operations.approveCommon(CStudioAuthoringContext.site, [item], false);
    };

    var handleSubmit = function handleSubmit() {
      var item = menu.item;
      handleMenuClose();
      onItemActionClick === null || onItemActionClick === void 0 ? void 0 : onItemActionClick(item);
      CStudioAuthoring.Operations.submitContent(CStudioAuthoringContext.site, [item]);
    };

    return React__default.createElement(List$1, null, items === null || items === void 0 ? void 0 : items.map(function (item) {
      return React__default.createElement(ListItem$1, {
        key: "".concat(item.path, "/").concat(item.name)
      }, React__default.createElement(ListItemText$1, {
        primary: item.internalName || item.name,
        secondary: "".concat(item.path, "/").concat(item.name)
      }), React__default.createElement(ListItemSecondaryAction$1, null, React__default.createElement(IconButton$1, {
        edge: "end",
        "aria-label": "Options",
        onClick: function onClick(e) {
          return setMenu({
            item: item,
            anchor: e.currentTarget
          });
        }
      }, React__default.createElement(MoreVertRounded$1, null))));
    }), React__default.createElement(Menu$1, {
      open: Boolean(menu),
      anchorEl: menu === null || menu === void 0 ? void 0 : menu.anchor,
      onClose: handleMenuClose
    }, React__default.createElement(MenuItem$1, {
      onClick: handleEdit
    }, "Edit"), React__default.createElement(MenuItem$1, {
      onClick: handlePublish
    }, "Publish (approver, admin)"), React__default.createElement(MenuItem$1, {
      onClick: handleSubmit
    }, "Submit (author)")));
  }

  var makeStyles$1 = studio.mui.makeStyles;
  var useStyles = makeStyles$1(function (theme) {
    return {
      // '@global': {
      //   // May add any global styles here...
      // },
      root: {
        marginBottom: theme.spacing(2)
      }
    };
  });
  function App() {
    var classes = useStyles();

    var _useState = React.useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        open = _useState2[0],
        setOpen = _useState2[1];

    var handleClose = function handleClose() {
      return setOpen(false);
    };

    return React__default.createElement("div", {
      className: classes.root
    }, React__default.createElement(Button$1, {
      color: "primary",
      variant: "contained",
      fullWidth: true,
      onClick: function onClick() {
        return setOpen(true);
      }
    }, "Open popup"), React__default.createElement(Dialog$1, {
      open: open,
      fullWidth: true,
      maxWidth: "sm",
      onClose: handleClose,
      "aria-labelledby": "alert-dialog-title",
      "aria-describedby": "alert-dialog-description"
    }, React__default.createElement(DialogTitle$1, {
      id: "alert-dialog-title"
    }, "Select an option"), React__default.createElement(DialogContent$1, null, React__default.createElement(ItemsList, {
      onItemActionClick: function onItemActionClick() {
        return setOpen(false);
      }
    })), React__default.createElement(DialogActions$1, null, React__default.createElement(Button$1, {
      onClick: handleClose,
      color: "primary"
    }, "Done"))));
  }

  /*
   * Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
   *
   * This program is free software: you can redistribute it and/or modify
   * it under the terms of the GNU General Public License version 3 as published by
   * the Free Software Foundation.
   *
   * This program is distributed in the hope that it will be useful,
   * but WITHOUT ANY WARRANTY; without even the implied warranty of
   * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   * GNU General Public License for more details.
   *
   * You should have received a copy of the GNU General Public License
   * along with this program.  If not, see <http://www.gnu.org/licenses/>.
   */
  CStudioAuthoring.Module.moduleLoaded('popup', {
    initialize: function initialize(config) {
      if (config && config.params) {
        // This is a way you could potentially have multiple widgets under the same plugin
        switch (config.params.widget) {
          case 'popup':
            ReactDOM.render(React.createElement(App), config.containerEl);
            break;

          default:
            console.error('No widget supplied on the config. Skipping initialize request.');
        }
      } else {
        console.error('No config supplied to the sidebar plugin. Skipping initialize request.');
      }
    }
  });

}(window.CrafterCMSNext.React, window.CrafterCMSNext, window.CrafterCMSNext.ReactDOM));