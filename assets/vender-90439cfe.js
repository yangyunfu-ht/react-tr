function _mergeNamespaces(n2, m2) {
  for (var i2 = 0; i2 < m2.length; i2++) {
    const e2 = m2[i2];
    if (typeof e2 !== "string" && !Array.isArray(e2)) {
      for (const k2 in e2) {
        if (k2 !== "default" && !(k2 in n2)) {
          const d2 = Object.getOwnPropertyDescriptor(e2, k2);
          if (d2) {
            Object.defineProperty(n2, k2, d2.get ? d2 : {
              enumerable: true,
              get: () => e2[k2]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var jsxRuntimeExports = {};
var jsxRuntime = {
  get exports() {
    return jsxRuntimeExports;
  },
  set exports(v2) {
    jsxRuntimeExports = v2;
  }
};
var reactJsxRuntime_production_min = {};
var reactExports = {};
var react = {
  get exports() {
    return reactExports;
  },
  set exports(v2) {
    reactExports = v2;
  }
};
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$5 = Symbol.for("react.element"), n$6 = Symbol.for("react.portal"), p$7 = Symbol.for("react.fragment"), q$6 = Symbol.for("react.strict_mode"), r$4 = Symbol.for("react.profiler"), t$5 = Symbol.for("react.provider"), u$4 = Symbol.for("react.context"), v$5 = Symbol.for("react.forward_ref"), w$3 = Symbol.for("react.suspense"), x$2 = Symbol.for("react.memo"), y$2 = Symbol.for("react.lazy"), z$3 = Symbol.iterator;
function A$3(a2) {
  if (null === a2 || "object" !== typeof a2)
    return null;
  a2 = z$3 && a2[z$3] || a2["@@iterator"];
  return "function" === typeof a2 ? a2 : null;
}
var B$2 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$1 = Object.assign, D$2 = {};
function E$2(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D$2;
  this.updater = e2 || B$2;
}
E$2.prototype.isReactComponent = {};
E$2.prototype.setState = function(a2, b2) {
  if ("object" !== typeof a2 && "function" !== typeof a2 && null != a2)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a2, b2, "setState");
};
E$2.prototype.forceUpdate = function(a2) {
  this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
};
function F$1() {
}
F$1.prototype = E$2.prototype;
function G$2(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D$2;
  this.updater = e2 || B$2;
}
var H$2 = G$2.prototype = new F$1();
H$2.constructor = G$2;
C$1(H$2, E$2.prototype);
H$2.isPureReactComponent = true;
var I$2 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$2 = { key: true, ref: true, __self: true, __source: true };
function M$2(a2, b2, e2) {
  var d2, c2 = {}, k2 = null, h2 = null;
  if (null != b2)
    for (d2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2)
      J.call(b2, d2) && !L$2.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
  var g2 = arguments.length - 2;
  if (1 === g2)
    c2.children = e2;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
      f2[m2] = arguments[m2 + 2];
    c2.children = f2;
  }
  if (a2 && a2.defaultProps)
    for (d2 in g2 = a2.defaultProps, g2)
      void 0 === c2[d2] && (c2[d2] = g2[d2]);
  return { $$typeof: l$5, type: a2, key: k2, ref: h2, props: c2, _owner: K$1.current };
}
function N$2(a2, b2) {
  return { $$typeof: l$5, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner };
}
function O$2(a2) {
  return "object" === typeof a2 && null !== a2 && a2.$$typeof === l$5;
}
function escape$1(a2) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a2.replace(/[=:]/g, function(a3) {
    return b2[a3];
  });
}
var P$2 = /\/+/g;
function Q$2(a2, b2) {
  return "object" === typeof a2 && null !== a2 && null != a2.key ? escape$1("" + a2.key) : b2.toString(36);
}
function R$2(a2, b2, e2, d2, c2) {
  var k2 = typeof a2;
  if ("undefined" === k2 || "boolean" === k2)
    a2 = null;
  var h2 = false;
  if (null === a2)
    h2 = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a2.$$typeof) {
          case l$5:
          case n$6:
            h2 = true;
        }
    }
  if (h2)
    return h2 = a2, c2 = c2(h2), a2 = "" === d2 ? "." + Q$2(h2, 0) : d2, I$2(c2) ? (e2 = "", null != a2 && (e2 = a2.replace(P$2, "$&/") + "/"), R$2(c2, b2, e2, "", function(a3) {
      return a3;
    })) : null != c2 && (O$2(c2) && (c2 = N$2(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$2, "$&/") + "/") + a2)), b2.push(c2)), 1;
  h2 = 0;
  d2 = "" === d2 ? "." : d2 + ":";
  if (I$2(a2))
    for (var g2 = 0; g2 < a2.length; g2++) {
      k2 = a2[g2];
      var f2 = d2 + Q$2(k2, g2);
      h2 += R$2(k2, b2, e2, f2, c2);
    }
  else if (f2 = A$3(a2), "function" === typeof f2)
    for (a2 = f2.call(a2), g2 = 0; !(k2 = a2.next()).done; )
      k2 = k2.value, f2 = d2 + Q$2(k2, g2++), h2 += R$2(k2, b2, e2, f2, c2);
  else if ("object" === k2)
    throw b2 = String(a2), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
  return h2;
}
function S$2(a2, b2, e2) {
  if (null == a2)
    return a2;
  var d2 = [], c2 = 0;
  R$2(a2, d2, "", "", function(a3) {
    return b2.call(e2, a3, c2++);
  });
  return d2;
}
function T$1(a2) {
  if (-1 === a2._status) {
    var b2 = a2._result;
    b2 = b2();
    b2.then(function(b3) {
      if (0 === a2._status || -1 === a2._status)
        a2._status = 1, a2._result = b3;
    }, function(b3) {
      if (0 === a2._status || -1 === a2._status)
        a2._status = 2, a2._result = b3;
    });
    -1 === a2._status && (a2._status = 0, a2._result = b2);
  }
  if (1 === a2._status)
    return a2._result.default;
  throw a2._result;
}
var U$2 = { current: null }, V$1 = { transition: null }, W$2 = { ReactCurrentDispatcher: U$2, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
react_production_min.Children = { map: S$2, forEach: function(a2, b2, e2) {
  S$2(a2, function() {
    b2.apply(this, arguments);
  }, e2);
}, count: function(a2) {
  var b2 = 0;
  S$2(a2, function() {
    b2++;
  });
  return b2;
}, toArray: function(a2) {
  return S$2(a2, function(a3) {
    return a3;
  }) || [];
}, only: function(a2) {
  if (!O$2(a2))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a2;
} };
react_production_min.Component = E$2;
react_production_min.Fragment = p$7;
react_production_min.Profiler = r$4;
react_production_min.PureComponent = G$2;
react_production_min.StrictMode = q$6;
react_production_min.Suspense = w$3;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$2;
react_production_min.cloneElement = function(a2, b2, e2) {
  if (null === a2 || void 0 === a2)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
  var d2 = C$1({}, a2.props), c2 = a2.key, k2 = a2.ref, h2 = a2._owner;
  if (null != b2) {
    void 0 !== b2.ref && (k2 = b2.ref, h2 = K$1.current);
    void 0 !== b2.key && (c2 = "" + b2.key);
    if (a2.type && a2.type.defaultProps)
      var g2 = a2.type.defaultProps;
    for (f2 in b2)
      J.call(b2, f2) && !L$2.hasOwnProperty(f2) && (d2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2)
    d2.children = e2;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g2[m2] = arguments[m2 + 2];
    d2.children = g2;
  }
  return { $$typeof: l$5, type: a2.type, key: c2, ref: k2, props: d2, _owner: h2 };
};
react_production_min.createContext = function(a2) {
  a2 = { $$typeof: u$4, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a2.Provider = { $$typeof: t$5, _context: a2 };
  return a2.Consumer = a2;
};
react_production_min.createElement = M$2;
react_production_min.createFactory = function(a2) {
  var b2 = M$2.bind(null, a2);
  b2.type = a2;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a2) {
  return { $$typeof: v$5, render: a2 };
};
react_production_min.isValidElement = O$2;
react_production_min.lazy = function(a2) {
  return { $$typeof: y$2, _payload: { _status: -1, _result: a2 }, _init: T$1 };
};
react_production_min.memo = function(a2, b2) {
  return { $$typeof: x$2, type: a2, compare: void 0 === b2 ? null : b2 };
};
react_production_min.startTransition = function(a2) {
  var b2 = V$1.transition;
  V$1.transition = {};
  try {
    a2();
  } finally {
    V$1.transition = b2;
  }
};
react_production_min.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
react_production_min.useCallback = function(a2, b2) {
  return U$2.current.useCallback(a2, b2);
};
react_production_min.useContext = function(a2) {
  return U$2.current.useContext(a2);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a2) {
  return U$2.current.useDeferredValue(a2);
};
react_production_min.useEffect = function(a2, b2) {
  return U$2.current.useEffect(a2, b2);
};
react_production_min.useId = function() {
  return U$2.current.useId();
};
react_production_min.useImperativeHandle = function(a2, b2, e2) {
  return U$2.current.useImperativeHandle(a2, b2, e2);
};
react_production_min.useInsertionEffect = function(a2, b2) {
  return U$2.current.useInsertionEffect(a2, b2);
};
react_production_min.useLayoutEffect = function(a2, b2) {
  return U$2.current.useLayoutEffect(a2, b2);
};
react_production_min.useMemo = function(a2, b2) {
  return U$2.current.useMemo(a2, b2);
};
react_production_min.useReducer = function(a2, b2, e2) {
  return U$2.current.useReducer(a2, b2, e2);
};
react_production_min.useRef = function(a2) {
  return U$2.current.useRef(a2);
};
react_production_min.useState = function(a2) {
  return U$2.current.useState(a2);
};
react_production_min.useSyncExternalStore = function(a2, b2, e2) {
  return U$2.current.useSyncExternalStore(a2, b2, e2);
};
react_production_min.useTransition = function() {
  return U$2.current.useTransition();
};
react_production_min.version = "18.2.0";
(function(module) {
  {
    module.exports = react_production_min;
  }
})(react);
const React$6 = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
const React$7 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: React$6
}, [reactExports]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f$3 = reactExports, k$4 = Symbol.for("react.element"), l$4 = Symbol.for("react.fragment"), m$5 = Object.prototype.hasOwnProperty, n$5 = f$3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$6 = { key: true, ref: true, __self: true, __source: true };
function q$5(c2, a2, g2) {
  var b2, d2 = {}, e2 = null, h2 = null;
  void 0 !== g2 && (e2 = "" + g2);
  void 0 !== a2.key && (e2 = "" + a2.key);
  void 0 !== a2.ref && (h2 = a2.ref);
  for (b2 in a2)
    m$5.call(a2, b2) && !p$6.hasOwnProperty(b2) && (d2[b2] = a2[b2]);
  if (c2 && c2.defaultProps)
    for (b2 in a2 = c2.defaultProps, a2)
      void 0 === d2[b2] && (d2[b2] = a2[b2]);
  return { $$typeof: k$4, type: c2, key: e2, ref: h2, props: d2, _owner: n$5.current };
}
reactJsxRuntime_production_min.Fragment = l$4;
reactJsxRuntime_production_min.jsx = q$5;
reactJsxRuntime_production_min.jsxs = q$5;
(function(module) {
  {
    module.exports = reactJsxRuntime_production_min;
  }
})(jsxRuntime);
var reactDomExports = {};
var reactDom = {
  get exports() {
    return reactDomExports;
  },
  set exports(v2) {
    reactDomExports = v2;
  }
};
var reactDom_production_min = {};
var schedulerExports = {};
var scheduler = {
  get exports() {
    return schedulerExports;
  },
  set exports(v2) {
    schedulerExports = v2;
  }
};
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a2, b2) {
    var c2 = a2.length;
    a2.push(b2);
    a:
      for (; 0 < c2; ) {
        var d2 = c2 - 1 >>> 1, e2 = a2[d2];
        if (0 < g2(e2, b2))
          a2[d2] = b2, a2[c2] = e2, c2 = d2;
        else
          break a;
      }
  }
  function h2(a2) {
    return 0 === a2.length ? null : a2[0];
  }
  function k2(a2) {
    if (0 === a2.length)
      return null;
    var b2 = a2[0], c2 = a2.pop();
    if (c2 !== b2) {
      a2[0] = c2;
      a:
        for (var d2 = 0, e2 = a2.length, w2 = e2 >>> 1; d2 < w2; ) {
          var m2 = 2 * (d2 + 1) - 1, C2 = a2[m2], n2 = m2 + 1, x2 = a2[n2];
          if (0 > g2(C2, c2))
            n2 < e2 && 0 > g2(x2, C2) ? (a2[d2] = x2, a2[n2] = c2, d2 = n2) : (a2[d2] = C2, a2[m2] = c2, d2 = m2);
          else if (n2 < e2 && 0 > g2(x2, c2))
            a2[d2] = x2, a2[n2] = c2, d2 = n2;
          else
            break a;
        }
    }
    return b2;
  }
  function g2(a2, b2) {
    var c2 = a2.sortIndex - b2.sortIndex;
    return 0 !== c2 ? c2 : a2.id - b2.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a2) {
    for (var b2 = h2(t2); null !== b2; ) {
      if (null === b2.callback)
        k2(t2);
      else if (b2.startTime <= a2)
        k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
      else
        break;
      b2 = h2(t2);
    }
  }
  function H2(a2) {
    B2 = false;
    G2(a2);
    if (!A2)
      if (null !== h2(r2))
        A2 = true, I2(J2);
      else {
        var b2 = h2(t2);
        null !== b2 && K2(H2, b2.startTime - a2);
      }
  }
  function J2(a2, b2) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c2 = y2;
    try {
      G2(b2);
      for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b2) || a2 && !M2()); ) {
        var d2 = v2.callback;
        if ("function" === typeof d2) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e2 = d2(v2.expirationTime <= b2);
          b2 = exports.unstable_now();
          "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
          G2(b2);
        } else
          k2(r2);
        v2 = h2(r2);
      }
      if (null !== v2)
        var w2 = true;
      else {
        var m2 = h2(t2);
        null !== m2 && K2(H2, m2.startTime - b2);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c2, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a2 = exports.unstable_now();
      Q2 = a2;
      var b2 = true;
      try {
        b2 = O2(true, a2);
      } finally {
        b2 ? S2() : (N2 = false, O2 = null);
      }
    } else
      N2 = false;
  }
  var S2;
  if ("function" === typeof F2)
    S2 = function() {
      F2(R2);
    };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else
    S2 = function() {
      D2(R2, 0);
    };
  function I2(a2) {
    O2 = a2;
    N2 || (N2 = true, S2());
  }
  function K2(a2, b2) {
    L2 = D2(function() {
      a2(exports.unstable_now());
    }, b2);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a2) {
    a2.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a2) {
    0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h2(r2);
  };
  exports.unstable_next = function(a2) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = y2;
    }
    var c2 = y2;
    y2 = b2;
    try {
      return a2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a2, b2) {
    switch (a2) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a2 = 3;
    }
    var c2 = y2;
    y2 = a2;
    try {
      return b2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_scheduleCallback = function(a2, b2, c2) {
    var d2 = exports.unstable_now();
    "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
    switch (a2) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c2 + e2;
    a2 = { id: u2++, callback: b2, priorityLevel: a2, startTime: c2, expirationTime: e2, sortIndex: -1 };
    c2 > d2 ? (a2.sortIndex = c2, f2(t2, a2), null === h2(r2) && a2 === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d2))) : (a2.sortIndex = e2, f2(r2, a2), A2 || z2 || (A2 = true, I2(J2)));
    return a2;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a2) {
    var b2 = y2;
    return function() {
      var c2 = y2;
      y2 = b2;
      try {
        return a2.apply(this, arguments);
      } finally {
        y2 = c2;
      }
    };
  };
})(scheduler_production_min);
(function(module) {
  {
    module.exports = scheduler_production_min;
  }
})(scheduler);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = reactExports, ca = schedulerExports;
function p$5(a2) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a2, b2) {
  ha(a2, b2);
  ha(a2 + "Capture", b2);
}
function ha(a2, b2) {
  ea[a2] = b2;
  for (a2 = 0; a2 < b2.length; a2++)
    da.add(b2[a2]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a2) {
  if (ja.call(ma, a2))
    return true;
  if (ja.call(la, a2))
    return false;
  if (ka.test(a2))
    return ma[a2] = true;
  la[a2] = true;
  return false;
}
function pa(a2, b2, c2, d2) {
  if (null !== c2 && 0 === c2.type)
    return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d2)
        return false;
      if (null !== c2)
        return !c2.acceptsBooleans;
      a2 = a2.toLowerCase().slice(0, 5);
      return "data-" !== a2 && "aria-" !== a2;
    default:
      return false;
  }
}
function qa(a2, b2, c2, d2) {
  if (null === b2 || "undefined" === typeof b2 || pa(a2, b2, c2, d2))
    return true;
  if (d2)
    return false;
  if (null !== c2)
    switch (c2.type) {
      case 3:
        return !b2;
      case 4:
        return false === b2;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
  return false;
}
function v$4(a2, b2, c2, d2, e2, f2, g2) {
  this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
  this.attributeName = d2;
  this.attributeNamespace = e2;
  this.mustUseProperty = c2;
  this.propertyName = a2;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var z$2 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
  z$2[a2] = new v$4(a2, 0, false, a2, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
  var b2 = a2[0];
  z$2[b2] = new v$4(b2, 1, false, a2[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
  z$2[a2] = new v$4(a2, 2, false, a2.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
  z$2[a2] = new v$4(a2, 2, false, a2, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
  z$2[a2] = new v$4(a2, 3, false, a2.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a2) {
  z$2[a2] = new v$4(a2, 3, true, a2, null, false, false);
});
["capture", "download"].forEach(function(a2) {
  z$2[a2] = new v$4(a2, 4, false, a2, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a2) {
  z$2[a2] = new v$4(a2, 6, false, a2, null, false, false);
});
["rowSpan", "start"].forEach(function(a2) {
  z$2[a2] = new v$4(a2, 5, false, a2.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a2) {
  return a2[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
  var b2 = a2.replace(
    ra,
    sa
  );
  z$2[b2] = new v$4(b2, 1, false, a2, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
  var b2 = a2.replace(ra, sa);
  z$2[b2] = new v$4(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
  var b2 = a2.replace(ra, sa);
  z$2[b2] = new v$4(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a2) {
  z$2[a2] = new v$4(a2, 1, false, a2.toLowerCase(), null, false, false);
});
z$2.xlinkHref = new v$4("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a2) {
  z$2[a2] = new v$4(a2, 1, false, a2.toLowerCase(), null, true, true);
});
function ta(a2, b2, c2, d2) {
  var e2 = z$2.hasOwnProperty(b2) ? z$2[b2] : null;
  if (null !== e2 ? 0 !== e2.type : d2 || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1])
    qa(b2, c2, e2, d2) && (c2 = null), d2 || null === e2 ? oa(b2) && (null === c2 ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a2[e2.propertyName] = null === c2 ? 3 === e2.type ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, null === c2 ? a2.removeAttribute(b2) : (e2 = e2.type, c2 = 3 === e2 || 4 === e2 && true === c2 ? "" : "" + c2, d2 ? a2.setAttributeNS(d2, b2, c2) : a2.setAttribute(b2, c2)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a2) {
  if (null === a2 || "object" !== typeof a2)
    return null;
  a2 = Ja && a2[Ja] || a2["@@iterator"];
  return "function" === typeof a2 ? a2 : null;
}
var A$2 = Object.assign, La;
function Ma(a2) {
  if (void 0 === La)
    try {
      throw Error();
    } catch (c2) {
      var b2 = c2.stack.trim().match(/\n( *(at )?)/);
      La = b2 && b2[1] || "";
    }
  return "\n" + La + a2;
}
var Na = false;
function Oa(a2, b2) {
  if (!a2 || Na)
    return "";
  Na = true;
  var c2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2)
      if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (l2) {
          var d2 = l2;
        }
        Reflect.construct(a2, [], b2);
      } else {
        try {
          b2.call();
        } catch (l2) {
          d2 = l2;
        }
        a2.call(b2.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l2) {
        d2 = l2;
      }
      a2();
    }
  } catch (l2) {
    if (l2 && d2 && "string" === typeof l2.stack) {
      for (var e2 = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; )
        h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--)
        if (e2[g2] !== f2[h2]) {
          if (1 !== g2 || 1 !== h2) {
            do
              if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2]) {
                var k2 = "\n" + e2[g2].replace(" at new ", " at ");
                a2.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a2.displayName));
                return k2;
              }
            while (1 <= g2 && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c2;
  }
  return (a2 = a2 ? a2.displayName || a2.name : "") ? Ma(a2) : "";
}
function Pa(a2) {
  switch (a2.tag) {
    case 5:
      return Ma(a2.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a2 = Oa(a2.type, false), a2;
    case 11:
      return a2 = Oa(a2.type.render, false), a2;
    case 1:
      return a2 = Oa(a2.type, true), a2;
    default:
      return "";
  }
}
function Qa(a2) {
  if (null == a2)
    return null;
  if ("function" === typeof a2)
    return a2.displayName || a2.name || null;
  if ("string" === typeof a2)
    return a2;
  switch (a2) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a2)
    switch (a2.$$typeof) {
      case Ca:
        return (a2.displayName || "Context") + ".Consumer";
      case Ba:
        return (a2._context.displayName || "Context") + ".Provider";
      case Da:
        var b2 = a2.render;
        a2 = a2.displayName;
        a2 || (a2 = b2.displayName || b2.name || "", a2 = "" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
        return a2;
      case Ga:
        return b2 = a2.displayName || null, null !== b2 ? b2 : Qa(a2.type) || "Memo";
      case Ha:
        b2 = a2._payload;
        a2 = a2._init;
        try {
          return Qa(a2(b2));
        } catch (c2) {
        }
    }
  return null;
}
function Ra(a2) {
  var b2 = a2.type;
  switch (a2.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b2.displayName || "Context") + ".Consumer";
    case 10:
      return (b2._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a2 = b2.render, a2 = a2.displayName || a2.name || "", b2.displayName || ("" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b2;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b2);
    case 8:
      return b2 === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b2)
        return b2.displayName || b2.name || null;
      if ("string" === typeof b2)
        return b2;
  }
  return null;
}
function Sa(a2) {
  switch (typeof a2) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a2;
    case "object":
      return a2;
    default:
      return "";
  }
}
function Ta(a2) {
  var b2 = a2.type;
  return (a2 = a2.nodeName) && "input" === a2.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
}
function Ua(a2) {
  var b2 = Ta(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d2 = "" + a2[b2];
  if (!a2.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
    var e2 = c2.get, f2 = c2.set;
    Object.defineProperty(a2, b2, { configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a3) {
      d2 = "" + a3;
      f2.call(this, a3);
    } });
    Object.defineProperty(a2, b2, { enumerable: c2.enumerable });
    return { getValue: function() {
      return d2;
    }, setValue: function(a3) {
      d2 = "" + a3;
    }, stopTracking: function() {
      a2._valueTracker = null;
      delete a2[b2];
    } };
  }
}
function Va(a2) {
  a2._valueTracker || (a2._valueTracker = Ua(a2));
}
function Wa(a2) {
  if (!a2)
    return false;
  var b2 = a2._valueTracker;
  if (!b2)
    return true;
  var c2 = b2.getValue();
  var d2 = "";
  a2 && (d2 = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
  a2 = d2;
  return a2 !== c2 ? (b2.setValue(a2), true) : false;
}
function Xa(a2) {
  a2 = a2 || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a2)
    return null;
  try {
    return a2.activeElement || a2.body;
  } catch (b2) {
    return a2.body;
  }
}
function Ya(a2, b2) {
  var c2 = b2.checked;
  return A$2({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a2._wrapperState.initialChecked });
}
function Za(a2, b2) {
  var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
  c2 = Sa(null != b2.value ? b2.value : c2);
  a2._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
}
function ab(a2, b2) {
  b2 = b2.checked;
  null != b2 && ta(a2, "checked", b2, false);
}
function bb(a2, b2) {
  ab(a2, b2);
  var c2 = Sa(b2.value), d2 = b2.type;
  if (null != c2)
    if ("number" === d2) {
      if (0 === c2 && "" === a2.value || a2.value != c2)
        a2.value = "" + c2;
    } else
      a2.value !== "" + c2 && (a2.value = "" + c2);
  else if ("submit" === d2 || "reset" === d2) {
    a2.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? cb(a2, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a2, b2.type, Sa(b2.defaultValue));
  null == b2.checked && null != b2.defaultChecked && (a2.defaultChecked = !!b2.defaultChecked);
}
function db(a2, b2, c2) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d2 = b2.type;
    if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value))
      return;
    b2 = "" + a2._wrapperState.initialValue;
    c2 || b2 === a2.value || (a2.value = b2);
    a2.defaultValue = b2;
  }
  c2 = a2.name;
  "" !== c2 && (a2.name = "");
  a2.defaultChecked = !!a2._wrapperState.initialChecked;
  "" !== c2 && (a2.name = c2);
}
function cb(a2, b2, c2) {
  if ("number" !== b2 || Xa(a2.ownerDocument) !== a2)
    null == c2 ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
}
var eb = Array.isArray;
function fb(a2, b2, c2, d2) {
  a2 = a2.options;
  if (b2) {
    b2 = {};
    for (var e2 = 0; e2 < c2.length; e2++)
      b2["$" + c2[e2]] = true;
    for (c2 = 0; c2 < a2.length; c2++)
      e2 = b2.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e2 && (a2[c2].selected = e2), e2 && d2 && (a2[c2].defaultSelected = true);
  } else {
    c2 = "" + Sa(c2);
    b2 = null;
    for (e2 = 0; e2 < a2.length; e2++) {
      if (a2[e2].value === c2) {
        a2[e2].selected = true;
        d2 && (a2[e2].defaultSelected = true);
        return;
      }
      null !== b2 || a2[e2].disabled || (b2 = a2[e2]);
    }
    null !== b2 && (b2.selected = true);
  }
}
function gb(a2, b2) {
  if (null != b2.dangerouslySetInnerHTML)
    throw Error(p$5(91));
  return A$2({}, b2, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
}
function hb(a2, b2) {
  var c2 = b2.value;
  if (null == c2) {
    c2 = b2.children;
    b2 = b2.defaultValue;
    if (null != c2) {
      if (null != b2)
        throw Error(p$5(92));
      if (eb(c2)) {
        if (1 < c2.length)
          throw Error(p$5(93));
        c2 = c2[0];
      }
      b2 = c2;
    }
    null == b2 && (b2 = "");
    c2 = b2;
  }
  a2._wrapperState = { initialValue: Sa(c2) };
}
function ib(a2, b2) {
  var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
  null != c2 && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), null == b2.defaultValue && a2.defaultValue !== c2 && (a2.defaultValue = c2));
  null != d2 && (a2.defaultValue = "" + d2);
}
function jb(a2) {
  var b2 = a2.textContent;
  b2 === a2._wrapperState.initialValue && "" !== b2 && null !== b2 && (a2.value = b2);
}
function kb(a2) {
  switch (a2) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a2, b2) {
  return null == a2 || "http://www.w3.org/1999/xhtml" === a2 ? kb(b2) : "http://www.w3.org/2000/svg" === a2 && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a2;
}
var mb, nb = function(a2) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a2(b2, c2, d2, e2);
    });
  } : a2;
}(function(a2, b2) {
  if ("http://www.w3.org/2000/svg" !== a2.namespaceURI || "innerHTML" in a2)
    a2.innerHTML = b2;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = mb.firstChild; a2.firstChild; )
      a2.removeChild(a2.firstChild);
    for (; b2.firstChild; )
      a2.appendChild(b2.firstChild);
  }
});
function ob(a2, b2) {
  if (b2) {
    var c2 = a2.firstChild;
    if (c2 && c2 === a2.lastChild && 3 === c2.nodeType) {
      c2.nodeValue = b2;
      return;
    }
  }
  a2.textContent = b2;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a2) {
  qb.forEach(function(b2) {
    b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
    pb[b2] = pb[a2];
  });
});
function rb(a2, b2, c2) {
  return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a2) && pb[a2] ? ("" + b2).trim() : b2 + "px";
}
function sb(a2, b2) {
  a2 = a2.style;
  for (var c2 in b2)
    if (b2.hasOwnProperty(c2)) {
      var d2 = 0 === c2.indexOf("--"), e2 = rb(c2, b2[c2], d2);
      "float" === c2 && (c2 = "cssFloat");
      d2 ? a2.setProperty(c2, e2) : a2[c2] = e2;
    }
}
var tb = A$2({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a2, b2) {
  if (b2) {
    if (tb[a2] && (null != b2.children || null != b2.dangerouslySetInnerHTML))
      throw Error(p$5(137, a2));
    if (null != b2.dangerouslySetInnerHTML) {
      if (null != b2.children)
        throw Error(p$5(60));
      if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML))
        throw Error(p$5(61));
    }
    if (null != b2.style && "object" !== typeof b2.style)
      throw Error(p$5(62));
  }
}
function vb(a2, b2) {
  if (-1 === a2.indexOf("-"))
    return "string" === typeof b2.is;
  switch (a2) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a2) {
  a2 = a2.target || a2.srcElement || window;
  a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
  return 3 === a2.nodeType ? a2.parentNode : a2;
}
var yb = null, zb = null, Ab = null;
function Bb(a2) {
  if (a2 = Cb(a2)) {
    if ("function" !== typeof yb)
      throw Error(p$5(280));
    var b2 = a2.stateNode;
    b2 && (b2 = Db(b2), yb(a2.stateNode, a2.type, b2));
  }
}
function Eb(a2) {
  zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
}
function Fb() {
  if (zb) {
    var a2 = zb, b2 = Ab;
    Ab = zb = null;
    Bb(a2);
    if (b2)
      for (a2 = 0; a2 < b2.length; a2++)
        Bb(b2[a2]);
  }
}
function Gb(a2, b2) {
  return a2(b2);
}
function Hb() {
}
var Ib = false;
function Jb(a2, b2, c2) {
  if (Ib)
    return a2(b2, c2);
  Ib = true;
  try {
    return Gb(a2, b2, c2);
  } finally {
    if (Ib = false, null !== zb || null !== Ab)
      Hb(), Fb();
  }
}
function Kb(a2, b2) {
  var c2 = a2.stateNode;
  if (null === c2)
    return null;
  var d2 = Db(c2);
  if (null === d2)
    return null;
  c2 = d2[b2];
  a:
    switch (b2) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d2 = !d2.disabled) || (a2 = a2.type, d2 = !("button" === a2 || "input" === a2 || "select" === a2 || "textarea" === a2));
        a2 = !d2;
        break a;
      default:
        a2 = false;
    }
  if (a2)
    return null;
  if (c2 && "function" !== typeof c2)
    throw Error(p$5(231, b2, typeof c2));
  return c2;
}
var Lb = false;
if (ia)
  try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", { get: function() {
      Lb = true;
    } });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a2) {
    Lb = false;
  }
function Nb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c2, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a2) {
  Ob = true;
  Pb = a2;
} };
function Tb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else
      throw Error(p$5(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a2) {
  var b2 = a2, c2 = a2;
  if (a2.alternate)
    for (; b2.return; )
      b2 = b2.return;
  else {
    a2 = b2;
    do
      b2 = a2, 0 !== (b2.flags & 4098) && (c2 = b2.return), a2 = b2.return;
    while (a2);
  }
  return 3 === b2.tag ? c2 : null;
}
function Wb(a2) {
  if (13 === a2.tag) {
    var b2 = a2.memoizedState;
    null === b2 && (a2 = a2.alternate, null !== a2 && (b2 = a2.memoizedState));
    if (null !== b2)
      return b2.dehydrated;
  }
  return null;
}
function Xb(a2) {
  if (Vb(a2) !== a2)
    throw Error(p$5(188));
}
function Yb(a2) {
  var b2 = a2.alternate;
  if (!b2) {
    b2 = Vb(a2);
    if (null === b2)
      throw Error(p$5(188));
    return b2 !== a2 ? null : a2;
  }
  for (var c2 = a2, d2 = b2; ; ) {
    var e2 = c2.return;
    if (null === e2)
      break;
    var f2 = e2.alternate;
    if (null === f2) {
      d2 = e2.return;
      if (null !== d2) {
        c2 = d2;
        continue;
      }
      break;
    }
    if (e2.child === f2.child) {
      for (f2 = e2.child; f2; ) {
        if (f2 === c2)
          return Xb(e2), a2;
        if (f2 === d2)
          return Xb(e2), b2;
        f2 = f2.sibling;
      }
      throw Error(p$5(188));
    }
    if (c2.return !== d2.return)
      c2 = e2, d2 = f2;
    else {
      for (var g2 = false, h2 = e2.child; h2; ) {
        if (h2 === c2) {
          g2 = true;
          c2 = e2;
          d2 = f2;
          break;
        }
        if (h2 === d2) {
          g2 = true;
          d2 = e2;
          c2 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = f2;
            d2 = e2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = f2;
            c2 = e2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2)
          throw Error(p$5(189));
      }
    }
    if (c2.alternate !== d2)
      throw Error(p$5(190));
  }
  if (3 !== c2.tag)
    throw Error(p$5(188));
  return c2.stateNode.current === c2 ? a2 : b2;
}
function Zb(a2) {
  a2 = Yb(a2);
  return null !== a2 ? $b(a2) : null;
}
function $b(a2) {
  if (5 === a2.tag || 6 === a2.tag)
    return a2;
  for (a2 = a2.child; null !== a2; ) {
    var b2 = $b(a2);
    if (null !== b2)
      return b2;
    a2 = a2.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B$1 = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a2) {
  if (lc && "function" === typeof lc.onCommitFiberRoot)
    try {
      lc.onCommitFiberRoot(kc, a2, void 0, 128 === (a2.current.flags & 128));
    } catch (b2) {
    }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a2) {
  a2 >>>= 0;
  return 0 === a2 ? 32 : 31 - (pc(a2) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a2) {
  switch (a2 & -a2) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a2 & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a2 & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a2;
  }
}
function uc(a2, b2) {
  var c2 = a2.pendingLanes;
  if (0 === c2)
    return 0;
  var d2 = 0, e2 = a2.suspendedLanes, f2 = a2.pingedLanes, g2 = c2 & 268435455;
  if (0 !== g2) {
    var h2 = g2 & ~e2;
    0 !== h2 ? d2 = tc(h2) : (f2 &= g2, 0 !== f2 && (d2 = tc(f2)));
  } else
    g2 = c2 & ~e2, 0 !== g2 ? d2 = tc(g2) : 0 !== f2 && (d2 = tc(f2));
  if (0 === d2)
    return 0;
  if (0 !== b2 && b2 !== d2 && 0 === (b2 & e2) && (e2 = d2 & -d2, f2 = b2 & -b2, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240)))
    return b2;
  0 !== (d2 & 4) && (d2 |= c2 & 16);
  b2 = a2.entangledLanes;
  if (0 !== b2)
    for (a2 = a2.entanglements, b2 &= d2; 0 < b2; )
      c2 = 31 - oc(b2), e2 = 1 << c2, d2 |= a2[c2], b2 &= ~e2;
  return d2;
}
function vc(a2, b2) {
  switch (a2) {
    case 1:
    case 2:
    case 4:
      return b2 + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b2 + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a2, b2) {
  for (var c2 = a2.suspendedLanes, d2 = a2.pingedLanes, e2 = a2.expirationTimes, f2 = a2.pendingLanes; 0 < f2; ) {
    var g2 = 31 - oc(f2), h2 = 1 << g2, k2 = e2[g2];
    if (-1 === k2) {
      if (0 === (h2 & c2) || 0 !== (h2 & d2))
        e2[g2] = vc(h2, b2);
    } else
      k2 <= b2 && (a2.expiredLanes |= h2);
    f2 &= ~h2;
  }
}
function xc(a2) {
  a2 = a2.pendingLanes & -1073741825;
  return 0 !== a2 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a2 = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a2;
}
function zc(a2) {
  for (var b2 = [], c2 = 0; 31 > c2; c2++)
    b2.push(a2);
  return b2;
}
function Ac(a2, b2, c2) {
  a2.pendingLanes |= b2;
  536870912 !== b2 && (a2.suspendedLanes = 0, a2.pingedLanes = 0);
  a2 = a2.eventTimes;
  b2 = 31 - oc(b2);
  a2[b2] = c2;
}
function Bc(a2, b2) {
  var c2 = a2.pendingLanes & ~b2;
  a2.pendingLanes = b2;
  a2.suspendedLanes = 0;
  a2.pingedLanes = 0;
  a2.expiredLanes &= b2;
  a2.mutableReadLanes &= b2;
  a2.entangledLanes &= b2;
  b2 = a2.entanglements;
  var d2 = a2.eventTimes;
  for (a2 = a2.expirationTimes; 0 < c2; ) {
    var e2 = 31 - oc(c2), f2 = 1 << e2;
    b2[e2] = 0;
    d2[e2] = -1;
    a2[e2] = -1;
    c2 &= ~f2;
  }
}
function Cc(a2, b2) {
  var c2 = a2.entangledLanes |= b2;
  for (a2 = a2.entanglements; c2; ) {
    var d2 = 31 - oc(c2), e2 = 1 << d2;
    e2 & b2 | a2[d2] & b2 && (a2[d2] |= b2);
    c2 &= ~e2;
  }
}
var C = 0;
function Dc(a2) {
  a2 &= -a2;
  return 1 < a2 ? 4 < a2 ? 0 !== (a2 & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a2, b2) {
  switch (a2) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b2.pointerId);
  }
}
function Tc(a2, b2, c2, d2, e2, f2) {
  if (null === a2 || a2.nativeEvent !== f2)
    return a2 = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e2] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a2;
  a2.eventSystemFlags |= d2;
  b2 = a2.targetContainers;
  null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
  return a2;
}
function Uc(a2, b2, c2, d2, e2) {
  switch (b2) {
    case "focusin":
      return Lc = Tc(Lc, a2, b2, c2, d2, e2), true;
    case "dragenter":
      return Mc = Tc(Mc, a2, b2, c2, d2, e2), true;
    case "mouseover":
      return Nc = Tc(Nc, a2, b2, c2, d2, e2), true;
    case "pointerover":
      var f2 = e2.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a2, b2, c2, d2, e2));
      return true;
    case "gotpointercapture":
      return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a2, b2, c2, d2, e2)), true;
  }
  return false;
}
function Vc(a2) {
  var b2 = Wc(a2.target);
  if (null !== b2) {
    var c2 = Vb(b2);
    if (null !== c2) {
      if (b2 = c2.tag, 13 === b2) {
        if (b2 = Wb(c2), null !== b2) {
          a2.blockedOn = b2;
          Ic(a2.priority, function() {
            Gc(c2);
          });
          return;
        }
      } else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
        a2.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a2.blockedOn = null;
}
function Xc(a2) {
  if (null !== a2.blockedOn)
    return false;
  for (var b2 = a2.targetContainers; 0 < b2.length; ) {
    var c2 = Yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
    if (null === c2) {
      c2 = a2.nativeEvent;
      var d2 = new c2.constructor(c2.type, c2);
      wb = d2;
      c2.target.dispatchEvent(d2);
      wb = null;
    } else
      return b2 = Cb(c2), null !== b2 && Fc(b2), a2.blockedOn = c2, false;
    b2.shift();
  }
  return true;
}
function Zc(a2, b2, c2) {
  Xc(a2) && c2.delete(b2);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a2, b2) {
  a2.blockedOn === b2 && (a2.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a2) {
  function b2(b3) {
    return ad(b3, a2);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a2);
    for (var c2 = 1; c2 < Kc.length; c2++) {
      var d2 = Kc[c2];
      d2.blockedOn === a2 && (d2.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a2);
  null !== Mc && ad(Mc, a2);
  null !== Nc && ad(Nc, a2);
  Oc.forEach(b2);
  Pc.forEach(b2);
  for (c2 = 0; c2 < Qc.length; c2++)
    d2 = Qc[c2], d2.blockedOn === a2 && (d2.blockedOn = null);
  for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); )
    Vc(c2), null === c2.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = true;
function ed(a2, b2, c2, d2) {
  var e2 = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 1, fd(a2, b2, c2, d2);
  } finally {
    C = e2, cd.transition = f2;
  }
}
function gd(a2, b2, c2, d2) {
  var e2 = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 4, fd(a2, b2, c2, d2);
  } finally {
    C = e2, cd.transition = f2;
  }
}
function fd(a2, b2, c2, d2) {
  if (dd) {
    var e2 = Yc(a2, b2, c2, d2);
    if (null === e2)
      hd(a2, b2, d2, id, c2), Sc(a2, d2);
    else if (Uc(e2, a2, b2, c2, d2))
      d2.stopPropagation();
    else if (Sc(a2, d2), b2 & 4 && -1 < Rc.indexOf(a2)) {
      for (; null !== e2; ) {
        var f2 = Cb(e2);
        null !== f2 && Ec(f2);
        f2 = Yc(a2, b2, c2, d2);
        null === f2 && hd(a2, b2, d2, id, c2);
        if (f2 === e2)
          break;
        e2 = f2;
      }
      null !== e2 && d2.stopPropagation();
    } else
      hd(a2, b2, d2, null, c2);
  }
}
var id = null;
function Yc(a2, b2, c2, d2) {
  id = null;
  a2 = xb(d2);
  a2 = Wc(a2);
  if (null !== a2)
    if (b2 = Vb(a2), null === b2)
      a2 = null;
    else if (c2 = b2.tag, 13 === c2) {
      a2 = Wb(b2);
      if (null !== a2)
        return a2;
      a2 = null;
    } else if (3 === c2) {
      if (b2.stateNode.current.memoizedState.isDehydrated)
        return 3 === b2.tag ? b2.stateNode.containerInfo : null;
      a2 = null;
    } else
      b2 !== a2 && (a2 = null);
  id = a2;
  return null;
}
function jd(a2) {
  switch (a2) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a2, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
  for (a2 = 0; a2 < c2 && b2[a2] === e2[a2]; a2++)
    ;
  var g2 = c2 - a2;
  for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++)
    ;
  return md = e2.slice(a2, 1 < d2 ? 1 - d2 : void 0);
}
function od(a2) {
  var b2 = a2.keyCode;
  "charCode" in a2 ? (a2 = a2.charCode, 0 === a2 && 13 === b2 && (a2 = 13)) : a2 = b2;
  10 === a2 && (a2 = 13);
  return 32 <= a2 || 13 === a2 ? a2 : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a2) {
  function b2(b3, d2, e2, f2, g2) {
    this._reactName = b3;
    this._targetInst = e2;
    this.type = d2;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c2 in a2)
      a2.hasOwnProperty(c2) && (b3 = a2[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A$2(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a3 = this.nativeEvent;
    a3 && (a3.preventDefault ? a3.preventDefault() : "unknown" !== typeof a3.returnValue && (a3.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a3 = this.nativeEvent;
    a3 && (a3.stopPropagation ? a3.stopPropagation() : "unknown" !== typeof a3.cancelBubble && (a3.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b2;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
  return a2.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A$2({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A$2({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
  return void 0 === a2.relatedTarget ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
}, movementX: function(a2) {
  if ("movementX" in a2)
    return a2.movementX;
  a2 !== yd && (yd && "mousemove" === a2.type ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
  return wd;
}, movementY: function(a2) {
  return "movementY" in a2 ? a2.movementY : xd;
} }), Bd = rd(Ad), Cd = A$2({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A$2({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A$2({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A$2({}, sd, { clipboardData: function(a2) {
  return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A$2({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a2) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Od[a2]) ? !!b2[a2] : false;
}
function zd() {
  return Pd;
}
var Qd = A$2({}, ud, { key: function(a2) {
  if (a2.key) {
    var b2 = Md[a2.key] || a2.key;
    if ("Unidentified" !== b2)
      return b2;
  }
  return "keypress" === a2.type ? (a2 = od(a2), 13 === a2 ? "Enter" : String.fromCharCode(a2)) : "keydown" === a2.type || "keyup" === a2.type ? Nd[a2.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
  return "keypress" === a2.type ? od(a2) : 0;
}, keyCode: function(a2) {
  return "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
}, which: function(a2) {
  return "keypress" === a2.type ? od(a2) : "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
} }), Rd = rd(Qd), Sd = A$2({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A$2({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A$2({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A$2({}, Ad, {
  deltaX: function(a2) {
    return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
  },
  deltaY: function(a2) {
    return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a2, b2) {
  switch (a2) {
    case "keyup":
      return -1 !== $d.indexOf(b2.keyCode);
    case "keydown":
      return 229 !== b2.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a2) {
  a2 = a2.detail;
  return "object" === typeof a2 && "data" in a2 ? a2.data : null;
}
var ie = false;
function je(a2, b2) {
  switch (a2) {
    case "compositionend":
      return he(b2);
    case "keypress":
      if (32 !== b2.which)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a2 = b2.data, a2 === ee && fe ? null : a2;
    default:
      return null;
  }
}
function ke(a2, b2) {
  if (ie)
    return "compositionend" === a2 || !ae && ge(a2, b2) ? (a2 = nd(), md = ld = kd = null, ie = false, a2) : null;
  switch (a2) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length)
          return b2.char;
        if (b2.which)
          return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b2.locale ? null : b2.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return "input" === b2 ? !!le[a2.type] : "textarea" === b2 ? true : false;
}
function ne(a2, b2, c2, d2) {
  Eb(d2);
  b2 = oe(b2, "onChange");
  0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a2.push({ event: c2, listeners: b2 }));
}
var pe = null, qe = null;
function re(a2) {
  se(a2, 0);
}
function te(a2) {
  var b2 = ue(a2);
  if (Wa(b2))
    return a2;
}
function ve(a2, b2) {
  if ("change" === a2)
    return b2;
}
var we = false;
if (ia) {
  var xe;
  if (ia) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = "function" === typeof ze.oninput;
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a2) {
  if ("value" === a2.propertyName && te(qe)) {
    var b2 = [];
    ne(b2, qe, a2, xb(a2));
    Jb(re, b2);
  }
}
function Ce(a2, b2, c2) {
  "focusin" === a2 ? (Ae(), pe = b2, qe = c2, pe.attachEvent("onpropertychange", Be)) : "focusout" === a2 && Ae();
}
function De(a2) {
  if ("selectionchange" === a2 || "keyup" === a2 || "keydown" === a2)
    return te(qe);
}
function Ee(a2, b2) {
  if ("click" === a2)
    return te(b2);
}
function Fe(a2, b2) {
  if ("input" === a2 || "change" === a2)
    return te(b2);
}
function Ge(a2, b2) {
  return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var He = "function" === typeof Object.is ? Object.is : Ge;
function Ie(a2, b2) {
  if (He(a2, b2))
    return true;
  if ("object" !== typeof a2 || null === a2 || "object" !== typeof b2 || null === b2)
    return false;
  var c2 = Object.keys(a2), d2 = Object.keys(b2);
  if (c2.length !== d2.length)
    return false;
  for (d2 = 0; d2 < c2.length; d2++) {
    var e2 = c2[d2];
    if (!ja.call(b2, e2) || !He(a2[e2], b2[e2]))
      return false;
  }
  return true;
}
function Je(a2) {
  for (; a2 && a2.firstChild; )
    a2 = a2.firstChild;
  return a2;
}
function Ke(a2, b2) {
  var c2 = Je(a2);
  a2 = 0;
  for (var d2; c2; ) {
    if (3 === c2.nodeType) {
      d2 = a2 + c2.textContent.length;
      if (a2 <= b2 && d2 >= b2)
        return { node: c2, offset: b2 - a2 };
      a2 = d2;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = Je(c2);
  }
}
function Le(a2, b2) {
  return a2 && b2 ? a2 === b2 ? true : a2 && 3 === a2.nodeType ? false : b2 && 3 === b2.nodeType ? Le(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
}
function Me() {
  for (var a2 = window, b2 = Xa(); b2 instanceof a2.HTMLIFrameElement; ) {
    try {
      var c2 = "string" === typeof b2.contentWindow.location.href;
    } catch (d2) {
      c2 = false;
    }
    if (c2)
      a2 = b2.contentWindow;
    else
      break;
    b2 = Xa(a2.document);
  }
  return b2;
}
function Ne(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 && ("input" === b2 && ("text" === a2.type || "search" === a2.type || "tel" === a2.type || "url" === a2.type || "password" === a2.type) || "textarea" === b2 || "true" === a2.contentEditable);
}
function Oe(a2) {
  var b2 = Me(), c2 = a2.focusedElem, d2 = a2.selectionRange;
  if (b2 !== c2 && c2 && c2.ownerDocument && Le(c2.ownerDocument.documentElement, c2)) {
    if (null !== d2 && Ne(c2)) {
      if (b2 = d2.start, a2 = d2.end, void 0 === a2 && (a2 = b2), "selectionStart" in c2)
        c2.selectionStart = b2, c2.selectionEnd = Math.min(a2, c2.value.length);
      else if (a2 = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a2.getSelection) {
        a2 = a2.getSelection();
        var e2 = c2.textContent.length, f2 = Math.min(d2.start, e2);
        d2 = void 0 === d2.end ? f2 : Math.min(d2.end, e2);
        !a2.extend && f2 > d2 && (e2 = d2, d2 = f2, f2 = e2);
        e2 = Ke(c2, f2);
        var g2 = Ke(
          c2,
          d2
        );
        e2 && g2 && (1 !== a2.rangeCount || a2.anchorNode !== e2.node || a2.anchorOffset !== e2.offset || a2.focusNode !== g2.node || a2.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a2.removeAllRanges(), f2 > d2 ? (a2.addRange(b2), a2.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a2.addRange(b2)));
      }
    }
    b2 = [];
    for (a2 = c2; a2 = a2.parentNode; )
      1 === a2.nodeType && b2.push({ element: a2, left: a2.scrollLeft, top: a2.scrollTop });
    "function" === typeof c2.focus && c2.focus();
    for (c2 = 0; c2 < b2.length; c2++)
      a2 = b2[c2], a2.element.scrollLeft = a2.left, a2.element.scrollTop = a2.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a2, b2, c2) {
  var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
  Te || null == Qe || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Ne(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se && Ie(Se, d2) || (Se = d2, d2 = oe(Re, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a2.push({ event: b2, listeners: d2 }), b2.target = Qe)));
}
function Ve(a2, b2) {
  var c2 = {};
  c2[a2.toLowerCase()] = b2.toLowerCase();
  c2["Webkit" + a2] = "webkit" + b2;
  c2["Moz" + a2] = "moz" + b2;
  return c2;
}
var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a2) {
  if (Xe[a2])
    return Xe[a2];
  if (!We[a2])
    return a2;
  var b2 = We[a2], c2;
  for (c2 in b2)
    if (b2.hasOwnProperty(c2) && c2 in Ye)
      return Xe[a2] = b2[c2];
  return a2;
}
var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a2, b2) {
  df.set(a2, b2);
  fa(b2, [a2]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a2, b2, c2) {
  var d2 = a2.type || "unknown-event";
  a2.currentTarget = c2;
  Ub(d2, b2, void 0, a2);
  a2.currentTarget = null;
}
function se(a2, b2) {
  b2 = 0 !== (b2 & 4);
  for (var c2 = 0; c2 < a2.length; c2++) {
    var d2 = a2[c2], e2 = d2.event;
    d2 = d2.listeners;
    a: {
      var f2 = void 0;
      if (b2)
        for (var g2 = d2.length - 1; 0 <= g2; g2--) {
          var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          nf(e2, h2, l2);
          f2 = k2;
        }
      else
        for (g2 = 0; g2 < d2.length; g2++) {
          h2 = d2[g2];
          k2 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          nf(e2, h2, l2);
          f2 = k2;
        }
    }
  }
  if (Qb)
    throw a2 = Rb, Qb = false, Rb = null, a2;
}
function D$1(a2, b2) {
  var c2 = b2[of];
  void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
  var d2 = a2 + "__bubble";
  c2.has(d2) || (pf(b2, a2, 2, false), c2.add(d2));
}
function qf(a2, b2, c2) {
  var d2 = 0;
  b2 && (d2 |= 4);
  pf(c2, a2, d2, b2);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a2) {
  if (!a2[rf]) {
    a2[rf] = true;
    da.forEach(function(b3) {
      "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a2), qf(b3, true, a2));
    });
    var b2 = 9 === a2.nodeType ? a2 : a2.ownerDocument;
    null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
  }
}
function pf(a2, b2, c2, d2) {
  switch (jd(b2)) {
    case 1:
      var e2 = ed;
      break;
    case 4:
      e2 = gd;
      break;
    default:
      e2 = fd;
  }
  c2 = e2.bind(null, b2, c2, a2);
  e2 = void 0;
  !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
  d2 ? void 0 !== e2 ? a2.addEventListener(b2, c2, { capture: true, passive: e2 }) : a2.addEventListener(b2, c2, true) : void 0 !== e2 ? a2.addEventListener(b2, c2, { passive: e2 }) : a2.addEventListener(b2, c2, false);
}
function hd(a2, b2, c2, d2, e2) {
  var f2 = d2;
  if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2)
    a:
      for (; ; ) {
        if (null === d2)
          return;
        var g2 = d2.tag;
        if (3 === g2 || 4 === g2) {
          var h2 = d2.stateNode.containerInfo;
          if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2)
            break;
          if (4 === g2)
            for (g2 = d2.return; null !== g2; ) {
              var k2 = g2.tag;
              if (3 === k2 || 4 === k2) {
                if (k2 = g2.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2)
                  return;
              }
              g2 = g2.return;
            }
          for (; null !== h2; ) {
            g2 = Wc(h2);
            if (null === g2)
              return;
            k2 = g2.tag;
            if (5 === k2 || 6 === k2) {
              d2 = f2 = g2;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d2 = d2.return;
      }
  Jb(function() {
    var d3 = f2, e3 = xb(c2), g3 = [];
    a: {
      var h3 = df.get(a2);
      if (void 0 !== h3) {
        var k3 = td, n2 = a2;
        switch (a2) {
          case "keypress":
            if (0 === od(c2))
              break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c2.button)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a2, x2 = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
        t2 = [];
        for (var w2 = d3, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2)
            break;
          w2 = w2.return;
        }
        0 < t2.length && (h3 = new k3(h3, n2, null, c2, e3), g3.push({ event: h3, listeners: t2 }));
      }
    }
    if (0 === (b2 & 7)) {
      a: {
        h3 = "mouseover" === a2 || "pointerover" === a2;
        k3 = "mouseout" === a2 || "pointerout" === a2;
        if (h3 && c2 !== wb && (n2 = c2.relatedTarget || c2.fromElement) && (Wc(n2) || n2[uf]))
          break a;
        if (k3 || h3) {
          h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (n2 = c2.relatedTarget || c2.toElement, k3 = d3, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag))
              n2 = null;
          } else
            k3 = null, n2 = d3;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a2 || "pointerover" === a2)
              t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h3 : ue(k3);
            u2 = null == n2 ? h3 : ue(n2);
            h3 = new t2(F2, w2 + "leave", k3, c2, e3);
            h3.target = J2;
            h3.relatedTarget = u2;
            F2 = null;
            Wc(e3) === d3 && (t2 = new t2(x2, w2 + "enter", n2, c2, e3), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2)
              b: {
                t2 = k3;
                x2 = n2;
                w2 = 0;
                for (u2 = t2; u2; u2 = vf(u2))
                  w2++;
                u2 = 0;
                for (F2 = x2; F2; F2 = vf(F2))
                  u2++;
                for (; 0 < w2 - u2; )
                  t2 = vf(t2), w2--;
                for (; 0 < u2 - w2; )
                  x2 = vf(x2), u2--;
                for (; w2--; ) {
                  if (t2 === x2 || null !== x2 && t2 === x2.alternate)
                    break b;
                  t2 = vf(t2);
                  x2 = vf(x2);
                }
                t2 = null;
              }
            else
              t2 = null;
            null !== k3 && wf(g3, h3, k3, t2, false);
            null !== n2 && null !== J2 && wf(g3, J2, n2, t2, true);
          }
        }
      }
      a: {
        h3 = d3 ? ue(d3) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h3.type)
          var na = ve;
        else if (me(h3))
          if (we)
            na = Fe;
          else {
            na = De;
            var xa = Ce;
          }
        else
          (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee);
        if (na && (na = na(a2, d3))) {
          ne(g3, na, c2, e3);
          break a;
        }
        xa && xa(a2, h3, d3);
        "focusout" === a2 && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
      }
      xa = d3 ? ue(d3) : window;
      switch (a2) {
        case "focusin":
          if (me(xa) || "true" === xa.contentEditable)
            Qe = xa, Re = d3, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g3, c2, e3);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g3, c2, e3);
      }
      var $a;
      if (ae)
        b: {
          switch (a2) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
      else
        ie ? ge(a2, c2) && (ba = "onCompositionEnd") : "keydown" === a2 && 229 === c2.keyCode && (ba = "onCompositionStart");
      ba && (de && "ko" !== c2.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d3, ba), 0 < xa.length && (ba = new Ld(ba, a2, null, c2, e3), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c2), null !== $a && (ba.data = $a))));
      if ($a = ce ? je(a2, c2) : ke(a2, c2))
        d3 = oe(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = $a);
    }
    se(g3, b2);
  });
}
function tf(a2, b2, c2) {
  return { instance: a2, listener: b2, currentTarget: c2 };
}
function oe(a2, b2) {
  for (var c2 = b2 + "Capture", d2 = []; null !== a2; ) {
    var e2 = a2, f2 = e2.stateNode;
    5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a2, c2), null != f2 && d2.unshift(tf(a2, f2, e2)), f2 = Kb(a2, b2), null != f2 && d2.push(tf(a2, f2, e2)));
    a2 = a2.return;
  }
  return d2;
}
function vf(a2) {
  if (null === a2)
    return null;
  do
    a2 = a2.return;
  while (a2 && 5 !== a2.tag);
  return a2 ? a2 : null;
}
function wf(a2, b2, c2, d2, e2) {
  for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
    var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
    if (null !== k2 && k2 === d2)
      break;
    5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Kb(c2, f2), null != k2 && g2.unshift(tf(c2, k2, h2))) : e2 || (k2 = Kb(c2, f2), null != k2 && g2.push(tf(c2, k2, h2))));
    c2 = c2.return;
  }
  0 !== g2.length && a2.push({ event: b2, listeners: g2 });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a2) {
  return ("string" === typeof a2 ? a2 : "" + a2).replace(xf, "\n").replace(yf, "");
}
function Af(a2, b2, c2) {
  b2 = zf(b2);
  if (zf(a2) !== b2 && c2)
    throw Error(p$5(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a2, b2) {
  return "textarea" === a2 || "noscript" === a2 || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a2) {
  return Hf.resolve(null).then(a2).catch(If);
} : Ff;
function If(a2) {
  setTimeout(function() {
    throw a2;
  });
}
function Kf(a2, b2) {
  var c2 = b2, d2 = 0;
  do {
    var e2 = c2.nextSibling;
    a2.removeChild(c2);
    if (e2 && 8 === e2.nodeType)
      if (c2 = e2.data, "/$" === c2) {
        if (0 === d2) {
          a2.removeChild(e2);
          bd(b2);
          return;
        }
        d2--;
      } else
        "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d2++;
    c2 = e2;
  } while (c2);
  bd(b2);
}
function Lf(a2) {
  for (; null != a2; a2 = a2.nextSibling) {
    var b2 = a2.nodeType;
    if (1 === b2 || 3 === b2)
      break;
    if (8 === b2) {
      b2 = a2.data;
      if ("$" === b2 || "$!" === b2 || "$?" === b2)
        break;
      if ("/$" === b2)
        return null;
    }
  }
  return a2;
}
function Mf(a2) {
  a2 = a2.previousSibling;
  for (var b2 = 0; a2; ) {
    if (8 === a2.nodeType) {
      var c2 = a2.data;
      if ("$" === c2 || "$!" === c2 || "$?" === c2) {
        if (0 === b2)
          return a2;
        b2--;
      } else
        "/$" === c2 && b2++;
    }
    a2 = a2.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a2) {
  var b2 = a2[Of];
  if (b2)
    return b2;
  for (var c2 = a2.parentNode; c2; ) {
    if (b2 = c2[uf] || c2[Of]) {
      c2 = b2.alternate;
      if (null !== b2.child || null !== c2 && null !== c2.child)
        for (a2 = Mf(a2); null !== a2; ) {
          if (c2 = a2[Of])
            return c2;
          a2 = Mf(a2);
        }
      return b2;
    }
    a2 = c2;
    c2 = a2.parentNode;
  }
  return null;
}
function Cb(a2) {
  a2 = a2[Of] || a2[uf];
  return !a2 || 5 !== a2.tag && 6 !== a2.tag && 13 !== a2.tag && 3 !== a2.tag ? null : a2;
}
function ue(a2) {
  if (5 === a2.tag || 6 === a2.tag)
    return a2.stateNode;
  throw Error(p$5(33));
}
function Db(a2) {
  return a2[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a2) {
  return { current: a2 };
}
function E$1(a2) {
  0 > Tf || (a2.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G$1(a2, b2) {
  Tf++;
  Sf[Tf] = a2.current;
  a2.current = b2;
}
var Vf = {}, H$1 = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a2, b2) {
  var c2 = a2.type.contextTypes;
  if (!c2)
    return Vf;
  var d2 = a2.stateNode;
  if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2)
    return d2.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f2;
  for (f2 in c2)
    e2[f2] = b2[f2];
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Zf(a2) {
  a2 = a2.childContextTypes;
  return null !== a2 && void 0 !== a2;
}
function $f() {
  E$1(Wf);
  E$1(H$1);
}
function ag(a2, b2, c2) {
  if (H$1.current !== Vf)
    throw Error(p$5(168));
  G$1(H$1, b2);
  G$1(Wf, c2);
}
function bg(a2, b2, c2) {
  var d2 = a2.stateNode;
  b2 = b2.childContextTypes;
  if ("function" !== typeof d2.getChildContext)
    return c2;
  d2 = d2.getChildContext();
  for (var e2 in d2)
    if (!(e2 in b2))
      throw Error(p$5(108, Ra(a2) || "Unknown", e2));
  return A$2({}, c2, d2);
}
function cg(a2) {
  a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H$1.current;
  G$1(H$1, a2);
  G$1(Wf, Wf.current);
  return true;
}
function dg(a2, b2, c2) {
  var d2 = a2.stateNode;
  if (!d2)
    throw Error(p$5(169));
  c2 ? (a2 = bg(a2, b2, Xf), d2.__reactInternalMemoizedMergedChildContext = a2, E$1(Wf), E$1(H$1), G$1(H$1, a2)) : E$1(Wf);
  G$1(Wf, c2);
}
var eg = null, fg = false, gg = false;
function hg(a2) {
  null === eg ? eg = [a2] : eg.push(a2);
}
function ig(a2) {
  fg = true;
  hg(a2);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a2 = 0, b2 = C;
    try {
      var c2 = eg;
      for (C = 1; a2 < c2.length; a2++) {
        var d2 = c2[a2];
        do
          d2 = d2(true);
        while (null !== d2);
      }
      eg = null;
      fg = false;
    } catch (e2) {
      throw null !== eg && (eg = eg.slice(a2 + 1)), ac(fc, jg), e2;
    } finally {
      C = b2, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a2, b2) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a2;
  ng = b2;
}
function ug(a2, b2, c2) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a2;
  var d2 = rg;
  a2 = sg;
  var e2 = 32 - oc(d2) - 1;
  d2 &= ~(1 << e2);
  c2 += 1;
  var f2 = 32 - oc(b2) + e2;
  if (30 < f2) {
    var g2 = e2 - e2 % 5;
    f2 = (d2 & (1 << g2) - 1).toString(32);
    d2 >>= g2;
    e2 -= g2;
    rg = 1 << 32 - oc(b2) + e2 | c2 << e2 | d2;
    sg = f2 + a2;
  } else
    rg = 1 << f2 | c2 << e2 | d2, sg = a2;
}
function vg(a2) {
  null !== a2.return && (tg(a2, 1), ug(a2, 1, 0));
}
function wg(a2) {
  for (; a2 === mg; )
    mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a2 === qg; )
    qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I$1 = false, zg = null;
function Ag(a2, b2) {
  var c2 = Bg(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.stateNode = b2;
  c2.return = a2;
  b2 = a2.deletions;
  null === b2 ? (a2.deletions = [c2], a2.flags |= 16) : b2.push(c2);
}
function Cg(a2, b2) {
  switch (a2.tag) {
    case 5:
      var c2 = a2.type;
      b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return null !== b2 ? (a2.stateNode = b2, xg = a2, yg = Lf(b2.firstChild), true) : false;
    case 6:
      return b2 = "" === a2.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a2.stateNode = b2, xg = a2, yg = null, true) : false;
    case 13:
      return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a2.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a2, a2.child = c2, xg = a2, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a2) {
  return 0 !== (a2.mode & 1) && 0 === (a2.flags & 128);
}
function Eg(a2) {
  if (I$1) {
    var b2 = yg;
    if (b2) {
      var c2 = b2;
      if (!Cg(a2, b2)) {
        if (Dg(a2))
          throw Error(p$5(418));
        b2 = Lf(c2.nextSibling);
        var d2 = xg;
        b2 && Cg(a2, b2) ? Ag(d2, c2) : (a2.flags = a2.flags & -4097 | 2, I$1 = false, xg = a2);
      }
    } else {
      if (Dg(a2))
        throw Error(p$5(418));
      a2.flags = a2.flags & -4097 | 2;
      I$1 = false;
      xg = a2;
    }
  }
}
function Fg(a2) {
  for (a2 = a2.return; null !== a2 && 5 !== a2.tag && 3 !== a2.tag && 13 !== a2.tag; )
    a2 = a2.return;
  xg = a2;
}
function Gg(a2) {
  if (a2 !== xg)
    return false;
  if (!I$1)
    return Fg(a2), I$1 = true, false;
  var b2;
  (b2 = 3 !== a2.tag) && !(b2 = 5 !== a2.tag) && (b2 = a2.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a2.type, a2.memoizedProps));
  if (b2 && (b2 = yg)) {
    if (Dg(a2))
      throw Hg(), Error(p$5(418));
    for (; b2; )
      Ag(a2, b2), b2 = Lf(b2.nextSibling);
  }
  Fg(a2);
  if (13 === a2.tag) {
    a2 = a2.memoizedState;
    a2 = null !== a2 ? a2.dehydrated : null;
    if (!a2)
      throw Error(p$5(317));
    a: {
      a2 = a2.nextSibling;
      for (b2 = 0; a2; ) {
        if (8 === a2.nodeType) {
          var c2 = a2.data;
          if ("/$" === c2) {
            if (0 === b2) {
              yg = Lf(a2.nextSibling);
              break a;
            }
            b2--;
          } else
            "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
        }
        a2 = a2.nextSibling;
      }
      yg = null;
    }
  } else
    yg = xg ? Lf(a2.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a2 = yg; a2; )
    a2 = Lf(a2.nextSibling);
}
function Ig() {
  yg = xg = null;
  I$1 = false;
}
function Jg(a2) {
  null === zg ? zg = [a2] : zg.push(a2);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a2, b2) {
  if (a2 && a2.defaultProps) {
    b2 = A$2({}, b2);
    a2 = a2.defaultProps;
    for (var c2 in a2)
      void 0 === b2[c2] && (b2[c2] = a2[c2]);
    return b2;
  }
  return b2;
}
var Mg = Uf(null), Ng = null, Og = null, Pg = null;
function Qg() {
  Pg = Og = Ng = null;
}
function Rg(a2) {
  var b2 = Mg.current;
  E$1(Mg);
  a2._currentValue = b2;
}
function Sg(a2, b2, c2) {
  for (; null !== a2; ) {
    var d2 = a2.alternate;
    (a2.childLanes & b2) !== b2 ? (a2.childLanes |= b2, null !== d2 && (d2.childLanes |= b2)) : null !== d2 && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
    if (a2 === c2)
      break;
    a2 = a2.return;
  }
}
function Tg(a2, b2) {
  Ng = a2;
  Pg = Og = null;
  a2 = a2.dependencies;
  null !== a2 && null !== a2.firstContext && (0 !== (a2.lanes & b2) && (Ug = true), a2.firstContext = null);
}
function Vg(a2) {
  var b2 = a2._currentValue;
  if (Pg !== a2)
    if (a2 = { context: a2, memoizedValue: b2, next: null }, null === Og) {
      if (null === Ng)
        throw Error(p$5(308));
      Og = a2;
      Ng.dependencies = { lanes: 0, firstContext: a2 };
    } else
      Og = Og.next = a2;
  return b2;
}
var Wg = null;
function Xg(a2) {
  null === Wg ? Wg = [a2] : Wg.push(a2);
}
function Yg(a2, b2, c2, d2) {
  var e2 = b2.interleaved;
  null === e2 ? (c2.next = c2, Xg(b2)) : (c2.next = e2.next, e2.next = c2);
  b2.interleaved = c2;
  return Zg(a2, d2);
}
function Zg(a2, b2) {
  a2.lanes |= b2;
  var c2 = a2.alternate;
  null !== c2 && (c2.lanes |= b2);
  c2 = a2;
  for (a2 = a2.return; null !== a2; )
    a2.childLanes |= b2, c2 = a2.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a2, a2 = a2.return;
  return 3 === c2.tag ? c2.stateNode : null;
}
var $g = false;
function ah(a2) {
  a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function bh(a2, b2) {
  a2 = a2.updateQueue;
  b2.updateQueue === a2 && (b2.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
}
function ch(a2, b2) {
  return { eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function dh(a2, b2, c2) {
  var d2 = a2.updateQueue;
  if (null === d2)
    return null;
  d2 = d2.shared;
  if (0 !== (K & 2)) {
    var e2 = d2.pending;
    null === e2 ? b2.next = b2 : (b2.next = e2.next, e2.next = b2);
    d2.pending = b2;
    return Zg(a2, c2);
  }
  e2 = d2.interleaved;
  null === e2 ? (b2.next = b2, Xg(d2)) : (b2.next = e2.next, e2.next = b2);
  d2.interleaved = b2;
  return Zg(a2, c2);
}
function eh(a2, b2, c2) {
  b2 = b2.updateQueue;
  if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
    var d2 = b2.lanes;
    d2 &= a2.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Cc(a2, c2);
  }
}
function fh(a2, b2) {
  var c2 = a2.updateQueue, d2 = a2.alternate;
  if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
    var e2 = null, f2 = null;
    c2 = c2.firstBaseUpdate;
    if (null !== c2) {
      do {
        var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
        null === f2 ? e2 = f2 = g2 : f2 = f2.next = g2;
        c2 = c2.next;
      } while (null !== c2);
      null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
    } else
      e2 = f2 = b2;
    c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
    a2.updateQueue = c2;
    return;
  }
  a2 = c2.lastBaseUpdate;
  null === a2 ? c2.firstBaseUpdate = b2 : a2.next = b2;
  c2.lastBaseUpdate = b2;
}
function gh(a2, b2, c2, d2) {
  var e2 = a2.updateQueue;
  $g = false;
  var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
  if (null !== h2) {
    e2.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    null === g2 ? f2 = l2 : g2.next = l2;
    g2 = k2;
    var m2 = a2.alternate;
    null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g2 && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e2.baseState;
    g2 = 0;
    m2 = l2 = k2 = null;
    h2 = f2;
    do {
      var r2 = h2.lane, y2 = h2.eventTime;
      if ((d2 & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h2.tag,
          payload: h2.payload,
          callback: h2.callback,
          next: null
        });
        a: {
          var n2 = a2, t2 = h2;
          r2 = b2;
          y2 = c2;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2)
                break a;
              q2 = A$2({}, q2, r2);
              break a;
            case 2:
              $g = true;
          }
        }
        null !== h2.callback && 0 !== h2.lane && (a2.flags |= 64, r2 = e2.effects, null === r2 ? e2.effects = [h2] : r2.push(h2));
      } else
        y2 = { eventTime: y2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g2 |= r2;
      h2 = h2.next;
      if (null === h2)
        if (h2 = e2.shared.pending, null === h2)
          break;
        else
          r2 = h2, h2 = r2.next, r2.next = null, e2.lastBaseUpdate = r2, e2.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e2.baseState = k2;
    e2.firstBaseUpdate = l2;
    e2.lastBaseUpdate = m2;
    b2 = e2.shared.interleaved;
    if (null !== b2) {
      e2 = b2;
      do
        g2 |= e2.lane, e2 = e2.next;
      while (e2 !== b2);
    } else
      null === f2 && (e2.shared.lanes = 0);
    hh |= g2;
    a2.lanes = g2;
    a2.memoizedState = q2;
  }
}
function ih(a2, b2, c2) {
  a2 = b2.effects;
  b2.effects = null;
  if (null !== a2)
    for (b2 = 0; b2 < a2.length; b2++) {
      var d2 = a2[b2], e2 = d2.callback;
      if (null !== e2) {
        d2.callback = null;
        d2 = c2;
        if ("function" !== typeof e2)
          throw Error(p$5(191, e2));
        e2.call(d2);
      }
    }
}
var jh = new aa.Component().refs;
function kh(a2, b2, c2, d2) {
  b2 = a2.memoizedState;
  c2 = c2(d2, b2);
  c2 = null === c2 || void 0 === c2 ? b2 : A$2({}, b2, c2);
  a2.memoizedState = c2;
  0 === a2.lanes && (a2.updateQueue.baseState = c2);
}
var nh = { isMounted: function(a2) {
  return (a2 = a2._reactInternals) ? Vb(a2) === a2 : false;
}, enqueueSetState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = L$1(), e2 = lh(a2), f2 = ch(d2, e2);
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = dh(a2, f2, e2);
  null !== b2 && (mh(b2, a2, e2, d2), eh(b2, a2, e2));
}, enqueueReplaceState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = L$1(), e2 = lh(a2), f2 = ch(d2, e2);
  f2.tag = 1;
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = dh(a2, f2, e2);
  null !== b2 && (mh(b2, a2, e2, d2), eh(b2, a2, e2));
}, enqueueForceUpdate: function(a2, b2) {
  a2 = a2._reactInternals;
  var c2 = L$1(), d2 = lh(a2), e2 = ch(c2, d2);
  e2.tag = 2;
  void 0 !== b2 && null !== b2 && (e2.callback = b2);
  b2 = dh(a2, e2, d2);
  null !== b2 && (mh(b2, a2, d2, c2), eh(b2, a2, d2));
} };
function oh(a2, b2, c2, d2, e2, f2, g2) {
  a2 = a2.stateNode;
  return "function" === typeof a2.shouldComponentUpdate ? a2.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie(c2, d2) || !Ie(e2, f2) : true;
}
function ph(a2, b2, c2) {
  var d2 = false, e2 = Vf;
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = Vg(f2) : (e2 = Zf(b2) ? Xf : H$1.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Yf(a2, e2) : Vf);
  b2 = new b2(c2, f2);
  a2.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
  b2.updater = nh;
  a2.stateNode = b2;
  b2._reactInternals = a2;
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e2, a2.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function qh(a2, b2, c2, d2) {
  a2 = b2.state;
  "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
  "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
  b2.state !== a2 && nh.enqueueReplaceState(b2, b2.state, null);
}
function rh(a2, b2, c2, d2) {
  var e2 = a2.stateNode;
  e2.props = c2;
  e2.state = a2.memoizedState;
  e2.refs = jh;
  ah(a2);
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? e2.context = Vg(f2) : (f2 = Zf(b2) ? Xf : H$1.current, e2.context = Yf(a2, f2));
  e2.state = a2.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  "function" === typeof f2 && (kh(a2, b2, f2, c2), e2.state = a2.memoizedState);
  "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && nh.enqueueReplaceState(e2, e2.state, null), gh(a2, c2, e2, d2), e2.state = a2.memoizedState);
  "function" === typeof e2.componentDidMount && (a2.flags |= 4194308);
}
function sh(a2, b2, c2) {
  a2 = c2.ref;
  if (null !== a2 && "function" !== typeof a2 && "object" !== typeof a2) {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (1 !== c2.tag)
          throw Error(p$5(309));
        var d2 = c2.stateNode;
      }
      if (!d2)
        throw Error(p$5(147, a2));
      var e2 = d2, f2 = "" + a2;
      if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2)
        return b2.ref;
      b2 = function(a3) {
        var b3 = e2.refs;
        b3 === jh && (b3 = e2.refs = {});
        null === a3 ? delete b3[f2] : b3[f2] = a3;
      };
      b2._stringRef = f2;
      return b2;
    }
    if ("string" !== typeof a2)
      throw Error(p$5(284));
    if (!c2._owner)
      throw Error(p$5(290, a2));
  }
  return a2;
}
function th(a2, b2) {
  a2 = Object.prototype.toString.call(b2);
  throw Error(p$5(31, "[object Object]" === a2 ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a2));
}
function uh(a2) {
  var b2 = a2._init;
  return b2(a2._payload);
}
function vh(a2) {
  function b2(b3, c3) {
    if (a2) {
      var d3 = b3.deletions;
      null === d3 ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
    }
  }
  function c2(c3, d3) {
    if (!a2)
      return null;
    for (; null !== d3; )
      b2(c3, d3), d3 = d3.sibling;
    return null;
  }
  function d2(a3, b3) {
    for (a3 = /* @__PURE__ */ new Map(); null !== b3; )
      null !== b3.key ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
    return a3;
  }
  function e2(a3, b3) {
    a3 = wh(a3, b3);
    a3.index = 0;
    a3.sibling = null;
    return a3;
  }
  function f2(b3, c3, d3) {
    b3.index = d3;
    if (!a2)
      return b3.flags |= 1048576, c3;
    d3 = b3.alternate;
    if (null !== d3)
      return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
    b3.flags |= 2;
    return c3;
  }
  function g2(b3) {
    a2 && null === b3.alternate && (b3.flags |= 2);
    return b3;
  }
  function h2(a3, b3, c3, d3) {
    if (null === b3 || 6 !== b3.tag)
      return b3 = xh(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function k2(a3, b3, c3, d3) {
    var f3 = c3.type;
    if (f3 === ya)
      return m2(a3, b3, c3.props.children, d3, c3.key);
    if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && uh(f3) === b3.type))
      return d3 = e2(b3, c3.props), d3.ref = sh(a3, b3, c3), d3.return = a3, d3;
    d3 = yh(c3.type, c3.key, c3.props, null, a3.mode, d3);
    d3.ref = sh(a3, b3, c3);
    d3.return = a3;
    return d3;
  }
  function l2(a3, b3, c3, d3) {
    if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation)
      return b3 = zh(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3.children || []);
    b3.return = a3;
    return b3;
  }
  function m2(a3, b3, c3, d3, f3) {
    if (null === b3 || 7 !== b3.tag)
      return b3 = Ah(c3, a3.mode, d3, f3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function q2(a3, b3, c3) {
    if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3)
      return b3 = xh("" + b3, a3.mode, c3), b3.return = a3, b3;
    if ("object" === typeof b3 && null !== b3) {
      switch (b3.$$typeof) {
        case va:
          return c3 = yh(b3.type, b3.key, b3.props, null, a3.mode, c3), c3.ref = sh(a3, null, b3), c3.return = a3, c3;
        case wa:
          return b3 = zh(b3, a3.mode, c3), b3.return = a3, b3;
        case Ha:
          var d3 = b3._init;
          return q2(a3, d3(b3._payload), c3);
      }
      if (eb(b3) || Ka(b3))
        return b3 = Ah(b3, a3.mode, c3, null), b3.return = a3, b3;
      th(a3, b3);
    }
    return null;
  }
  function r2(a3, b3, c3, d3) {
    var e3 = null !== b3 ? b3.key : null;
    if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3)
      return null !== e3 ? null : h2(a3, b3, "" + c3, d3);
    if ("object" === typeof c3 && null !== c3) {
      switch (c3.$$typeof) {
        case va:
          return c3.key === e3 ? k2(a3, b3, c3, d3) : null;
        case wa:
          return c3.key === e3 ? l2(a3, b3, c3, d3) : null;
        case Ha:
          return e3 = c3._init, r2(
            a3,
            b3,
            e3(c3._payload),
            d3
          );
      }
      if (eb(c3) || Ka(c3))
        return null !== e3 ? null : m2(a3, b3, c3, d3, null);
      th(a3, c3);
    }
    return null;
  }
  function y2(a3, b3, c3, d3, e3) {
    if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3)
      return a3 = a3.get(c3) || null, h2(b3, a3, "" + d3, e3);
    if ("object" === typeof d3 && null !== d3) {
      switch (d3.$$typeof) {
        case va:
          return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, k2(b3, a3, d3, e3);
        case wa:
          return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a3, d3, e3);
        case Ha:
          var f3 = d3._init;
          return y2(a3, b3, c3, f3(d3._payload), e3);
      }
      if (eb(d3) || Ka(d3))
        return a3 = a3.get(c3) || null, m2(b3, a3, d3, e3, null);
      th(b3, d3);
    }
    return null;
  }
  function n2(e3, g3, h3, k3) {
    for (var l3 = null, m3 = null, u2 = g3, w2 = g3 = 0, x2 = null; null !== u2 && w2 < h3.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e3, u2, h3[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x2);
        break;
      }
      a2 && u2 && null === n3.alternate && b2(e3, u2);
      g3 = f2(n3, g3, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x2;
    }
    if (w2 === h3.length)
      return c2(e3, u2), I$1 && tg(e3, w2), l3;
    if (null === u2) {
      for (; w2 < h3.length; w2++)
        u2 = q2(e3, h3[w2], k3), null !== u2 && (g3 = f2(u2, g3, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I$1 && tg(e3, w2);
      return l3;
    }
    for (u2 = d2(e3, u2); w2 < h3.length; w2++)
      x2 = y2(u2, e3, w2, h3[w2], k3), null !== x2 && (a2 && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g3 = f2(x2, g3, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
    a2 && u2.forEach(function(a3) {
      return b2(e3, a3);
    });
    I$1 && tg(e3, w2);
    return l3;
  }
  function t2(e3, g3, h3, k3) {
    var l3 = Ka(h3);
    if ("function" !== typeof l3)
      throw Error(p$5(150));
    h3 = l3.call(h3);
    if (null == h3)
      throw Error(p$5(151));
    for (var u2 = l3 = null, m3 = g3, w2 = g3 = 0, x2 = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t3 = r2(e3, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x2);
        break;
      }
      a2 && m3 && null === t3.alternate && b2(e3, m3);
      g3 = f2(t3, g3, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x2;
    }
    if (n3.done)
      return c2(
        e3,
        m3
      ), I$1 && tg(e3, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h3.next())
        n3 = q2(e3, n3.value, k3), null !== n3 && (g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I$1 && tg(e3, w2);
      return l3;
    }
    for (m3 = d2(e3, m3); !n3.done; w2++, n3 = h3.next())
      n3 = y2(m3, e3, w2, n3.value, k3), null !== n3 && (a2 && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a2 && m3.forEach(function(a3) {
      return b2(e3, a3);
    });
    I$1 && tg(e3, w2);
    return l3;
  }
  function J2(a3, d3, f3, h3) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va:
          a: {
            for (var k3 = f3.key, l3 = d3; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l3.tag) {
                    c2(a3, l3.sibling);
                    d3 = e2(l3, f3.props.children);
                    d3.return = a3;
                    a3 = d3;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && uh(k3) === l3.type) {
                  c2(a3, l3.sibling);
                  d3 = e2(l3, f3.props);
                  d3.ref = sh(a3, l3, f3);
                  d3.return = a3;
                  a3 = d3;
                  break a;
                }
                c2(a3, l3);
                break;
              } else
                b2(a3, l3);
              l3 = l3.sibling;
            }
            f3.type === ya ? (d3 = Ah(f3.props.children, a3.mode, h3, f3.key), d3.return = a3, a3 = d3) : (h3 = yh(f3.type, f3.key, f3.props, null, a3.mode, h3), h3.ref = sh(a3, d3, f3), h3.return = a3, a3 = h3);
          }
          return g2(a3);
        case wa:
          a: {
            for (l3 = f3.key; null !== d3; ) {
              if (d3.key === l3)
                if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                  c2(a3, d3.sibling);
                  d3 = e2(d3, f3.children || []);
                  d3.return = a3;
                  a3 = d3;
                  break a;
                } else {
                  c2(a3, d3);
                  break;
                }
              else
                b2(a3, d3);
              d3 = d3.sibling;
            }
            d3 = zh(f3, a3.mode, h3);
            d3.return = a3;
            a3 = d3;
          }
          return g2(a3);
        case Ha:
          return l3 = f3._init, J2(a3, d3, l3(f3._payload), h3);
      }
      if (eb(f3))
        return n2(a3, d3, f3, h3);
      if (Ka(f3))
        return t2(a3, d3, f3, h3);
      th(a3, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a3, d3.sibling), d3 = e2(d3, f3), d3.return = a3, a3 = d3) : (c2(a3, d3), d3 = xh(f3, a3.mode, h3), d3.return = a3, a3 = d3), g2(a3)) : c2(a3, d3);
  }
  return J2;
}
var Bh = vh(true), Ch = vh(false), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
function Hh(a2) {
  if (a2 === Dh)
    throw Error(p$5(174));
  return a2;
}
function Ih(a2, b2) {
  G$1(Gh, b2);
  G$1(Fh, a2);
  G$1(Eh, Dh);
  a2 = b2.nodeType;
  switch (a2) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
      break;
    default:
      a2 = 8 === a2 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = lb(b2, a2);
  }
  E$1(Eh);
  G$1(Eh, b2);
}
function Jh() {
  E$1(Eh);
  E$1(Fh);
  E$1(Gh);
}
function Kh(a2) {
  Hh(Gh.current);
  var b2 = Hh(Eh.current);
  var c2 = lb(b2, a2.type);
  b2 !== c2 && (G$1(Fh, a2), G$1(Eh, c2));
}
function Lh(a2) {
  Fh.current === a2 && (E$1(Eh), E$1(Fh));
}
var M$1 = Uf(0);
function Mh(a2) {
  for (var b2 = a2; null !== b2; ) {
    if (13 === b2.tag) {
      var c2 = b2.memoizedState;
      if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data))
        return b2;
    } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
      if (0 !== (b2.flags & 128))
        return b2;
    } else if (null !== b2.child) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a2)
      break;
    for (; null === b2.sibling; ) {
      if (null === b2.return || b2.return === a2)
        return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var Nh = [];
function Oh() {
  for (var a2 = 0; a2 < Nh.length; a2++)
    Nh[a2]._workInProgressVersionPrimary = null;
  Nh.length = 0;
}
var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N$1 = null, O$1 = null, P$1 = null, Sh = false, Th = false, Uh = 0, Vh = 0;
function Q$1() {
  throw Error(p$5(321));
}
function Wh(a2, b2) {
  if (null === b2)
    return false;
  for (var c2 = 0; c2 < b2.length && c2 < a2.length; c2++)
    if (!He(a2[c2], b2[c2]))
      return false;
  return true;
}
function Xh(a2, b2, c2, d2, e2, f2) {
  Rh = f2;
  N$1 = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  Ph.current = null === a2 || null === a2.memoizedState ? Yh : Zh;
  a2 = c2(d2, e2);
  if (Th) {
    f2 = 0;
    do {
      Th = false;
      Uh = 0;
      if (25 <= f2)
        throw Error(p$5(301));
      f2 += 1;
      P$1 = O$1 = null;
      b2.updateQueue = null;
      Ph.current = $h;
      a2 = c2(d2, e2);
    } while (Th);
  }
  Ph.current = ai;
  b2 = null !== O$1 && null !== O$1.next;
  Rh = 0;
  P$1 = O$1 = N$1 = null;
  Sh = false;
  if (b2)
    throw Error(p$5(300));
  return a2;
}
function bi() {
  var a2 = 0 !== Uh;
  Uh = 0;
  return a2;
}
function ci() {
  var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === P$1 ? N$1.memoizedState = P$1 = a2 : P$1 = P$1.next = a2;
  return P$1;
}
function di() {
  if (null === O$1) {
    var a2 = N$1.alternate;
    a2 = null !== a2 ? a2.memoizedState : null;
  } else
    a2 = O$1.next;
  var b2 = null === P$1 ? N$1.memoizedState : P$1.next;
  if (null !== b2)
    P$1 = b2, O$1 = a2;
  else {
    if (null === a2)
      throw Error(p$5(310));
    O$1 = a2;
    a2 = { memoizedState: O$1.memoizedState, baseState: O$1.baseState, baseQueue: O$1.baseQueue, queue: O$1.queue, next: null };
    null === P$1 ? N$1.memoizedState = P$1 = a2 : P$1 = P$1.next = a2;
  }
  return P$1;
}
function ei(a2, b2) {
  return "function" === typeof b2 ? b2(a2) : b2;
}
function fi(a2) {
  var b2 = di(), c2 = b2.queue;
  if (null === c2)
    throw Error(p$5(311));
  c2.lastRenderedReducer = a2;
  var d2 = O$1, e2 = d2.baseQueue, f2 = c2.pending;
  if (null !== f2) {
    if (null !== e2) {
      var g2 = e2.next;
      e2.next = f2.next;
      f2.next = g2;
    }
    d2.baseQueue = e2 = f2;
    c2.pending = null;
  }
  if (null !== e2) {
    f2 = e2.next;
    d2 = d2.baseState;
    var h2 = g2 = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Rh & m2) === m2)
        null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a2(d2, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h2 = k2 = q2, g2 = d2) : k2 = k2.next = q2;
        N$1.lanes |= m2;
        hh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g2 = d2 : k2.next = h2;
    He(d2, b2.memoizedState) || (Ug = true);
    b2.memoizedState = d2;
    b2.baseState = g2;
    b2.baseQueue = k2;
    c2.lastRenderedState = d2;
  }
  a2 = c2.interleaved;
  if (null !== a2) {
    e2 = a2;
    do
      f2 = e2.lane, N$1.lanes |= f2, hh |= f2, e2 = e2.next;
    while (e2 !== a2);
  } else
    null === e2 && (c2.lanes = 0);
  return [b2.memoizedState, c2.dispatch];
}
function gi(a2) {
  var b2 = di(), c2 = b2.queue;
  if (null === c2)
    throw Error(p$5(311));
  c2.lastRenderedReducer = a2;
  var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
  if (null !== e2) {
    c2.pending = null;
    var g2 = e2 = e2.next;
    do
      f2 = a2(f2, g2.action), g2 = g2.next;
    while (g2 !== e2);
    He(f2, b2.memoizedState) || (Ug = true);
    b2.memoizedState = f2;
    null === b2.baseQueue && (b2.baseState = f2);
    c2.lastRenderedState = f2;
  }
  return [f2, d2];
}
function hi() {
}
function ii(a2, b2) {
  var c2 = N$1, d2 = di(), e2 = b2(), f2 = !He(d2.memoizedState, e2);
  f2 && (d2.memoizedState = e2, Ug = true);
  d2 = d2.queue;
  ji(ki.bind(null, c2, d2, a2), [a2]);
  if (d2.getSnapshot !== b2 || f2 || null !== P$1 && P$1.memoizedState.tag & 1) {
    c2.flags |= 2048;
    li(9, mi.bind(null, c2, d2, e2, b2), void 0, null);
    if (null === R$1)
      throw Error(p$5(349));
    0 !== (Rh & 30) || ni(c2, b2, e2);
  }
  return e2;
}
function ni(a2, b2, c2) {
  a2.flags |= 16384;
  a2 = { getSnapshot: b2, value: c2 };
  b2 = N$1.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, N$1.updateQueue = b2, b2.stores = [a2]) : (c2 = b2.stores, null === c2 ? b2.stores = [a2] : c2.push(a2));
}
function mi(a2, b2, c2, d2) {
  b2.value = c2;
  b2.getSnapshot = d2;
  oi(b2) && pi(a2);
}
function ki(a2, b2, c2) {
  return c2(function() {
    oi(b2) && pi(a2);
  });
}
function oi(a2) {
  var b2 = a2.getSnapshot;
  a2 = a2.value;
  try {
    var c2 = b2();
    return !He(a2, c2);
  } catch (d2) {
    return true;
  }
}
function pi(a2) {
  var b2 = Zg(a2, 1);
  null !== b2 && mh(b2, a2, 1, -1);
}
function qi(a2) {
  var b2 = ci();
  "function" === typeof a2 && (a2 = a2());
  b2.memoizedState = b2.baseState = a2;
  a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a2 };
  b2.queue = a2;
  a2 = a2.dispatch = ri.bind(null, N$1, a2);
  return [b2.memoizedState, a2];
}
function li(a2, b2, c2, d2) {
  a2 = { tag: a2, create: b2, destroy: c2, deps: d2, next: null };
  b2 = N$1.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, N$1.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a2.next = a2 : (d2 = c2.next, c2.next = a2, a2.next = d2, b2.lastEffect = a2));
  return a2;
}
function si() {
  return di().memoizedState;
}
function ti(a2, b2, c2, d2) {
  var e2 = ci();
  N$1.flags |= a2;
  e2.memoizedState = li(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
}
function ui(a2, b2, c2, d2) {
  var e2 = di();
  d2 = void 0 === d2 ? null : d2;
  var f2 = void 0;
  if (null !== O$1) {
    var g2 = O$1.memoizedState;
    f2 = g2.destroy;
    if (null !== d2 && Wh(d2, g2.deps)) {
      e2.memoizedState = li(b2, c2, f2, d2);
      return;
    }
  }
  N$1.flags |= a2;
  e2.memoizedState = li(1 | b2, c2, f2, d2);
}
function vi(a2, b2) {
  return ti(8390656, 8, a2, b2);
}
function ji(a2, b2) {
  return ui(2048, 8, a2, b2);
}
function wi(a2, b2) {
  return ui(4, 2, a2, b2);
}
function xi(a2, b2) {
  return ui(4, 4, a2, b2);
}
function yi(a2, b2) {
  if ("function" === typeof b2)
    return a2 = a2(), b2(a2), function() {
      b2(null);
    };
  if (null !== b2 && void 0 !== b2)
    return a2 = a2(), b2.current = a2, function() {
      b2.current = null;
    };
}
function zi(a2, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
  return ui(4, 4, yi.bind(null, b2, a2), c2);
}
function Ai() {
}
function Bi(a2, b2) {
  var c2 = di();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Wh(b2, d2[1]))
    return d2[0];
  c2.memoizedState = [a2, b2];
  return a2;
}
function Ci(a2, b2) {
  var c2 = di();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Wh(b2, d2[1]))
    return d2[0];
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}
function Di(a2, b2, c2) {
  if (0 === (Rh & 21))
    return a2.baseState && (a2.baseState = false, Ug = true), a2.memoizedState = c2;
  He(c2, b2) || (c2 = yc(), N$1.lanes |= c2, hh |= c2, a2.baseState = true);
  return b2;
}
function Ei(a2, b2) {
  var c2 = C;
  C = 0 !== c2 && 4 > c2 ? c2 : 4;
  a2(true);
  var d2 = Qh.transition;
  Qh.transition = {};
  try {
    a2(false), b2();
  } finally {
    C = c2, Qh.transition = d2;
  }
}
function Fi() {
  return di().memoizedState;
}
function Gi(a2, b2, c2) {
  var d2 = lh(a2);
  c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a2))
    Ii(b2, c2);
  else if (c2 = Yg(a2, b2, c2, d2), null !== c2) {
    var e2 = L$1();
    mh(c2, a2, d2, e2);
    Ji(c2, b2, d2);
  }
}
function ri(a2, b2, c2) {
  var d2 = lh(a2), e2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a2))
    Ii(b2, e2);
  else {
    var f2 = a2.alternate;
    if (0 === a2.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2))
      try {
        var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
        e2.hasEagerState = true;
        e2.eagerState = h2;
        if (He(h2, g2)) {
          var k2 = b2.interleaved;
          null === k2 ? (e2.next = e2, Xg(b2)) : (e2.next = k2.next, k2.next = e2);
          b2.interleaved = e2;
          return;
        }
      } catch (l2) {
      } finally {
      }
    c2 = Yg(a2, b2, e2, d2);
    null !== c2 && (e2 = L$1(), mh(c2, a2, d2, e2), Ji(c2, b2, d2));
  }
}
function Hi(a2) {
  var b2 = a2.alternate;
  return a2 === N$1 || null !== b2 && b2 === N$1;
}
function Ii(a2, b2) {
  Th = Sh = true;
  var c2 = a2.pending;
  null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
  a2.pending = b2;
}
function Ji(a2, b2, c2) {
  if (0 !== (c2 & 4194240)) {
    var d2 = b2.lanes;
    d2 &= a2.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Cc(a2, c2);
  }
}
var ai = { readContext: Vg, useCallback: Q$1, useContext: Q$1, useEffect: Q$1, useImperativeHandle: Q$1, useInsertionEffect: Q$1, useLayoutEffect: Q$1, useMemo: Q$1, useReducer: Q$1, useRef: Q$1, useState: Q$1, useDebugValue: Q$1, useDeferredValue: Q$1, useTransition: Q$1, useMutableSource: Q$1, useSyncExternalStore: Q$1, useId: Q$1, unstable_isNewReconciler: false }, Yh = { readContext: Vg, useCallback: function(a2, b2) {
  ci().memoizedState = [a2, void 0 === b2 ? null : b2];
  return a2;
}, useContext: Vg, useEffect: vi, useImperativeHandle: function(a2, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
  return ti(
    4194308,
    4,
    yi.bind(null, b2, a2),
    c2
  );
}, useLayoutEffect: function(a2, b2) {
  return ti(4194308, 4, a2, b2);
}, useInsertionEffect: function(a2, b2) {
  return ti(4, 2, a2, b2);
}, useMemo: function(a2, b2) {
  var c2 = ci();
  b2 = void 0 === b2 ? null : b2;
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}, useReducer: function(a2, b2, c2) {
  var d2 = ci();
  b2 = void 0 !== c2 ? c2(b2) : b2;
  d2.memoizedState = d2.baseState = b2;
  a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2 };
  d2.queue = a2;
  a2 = a2.dispatch = Gi.bind(null, N$1, a2);
  return [d2.memoizedState, a2];
}, useRef: function(a2) {
  var b2 = ci();
  a2 = { current: a2 };
  return b2.memoizedState = a2;
}, useState: qi, useDebugValue: Ai, useDeferredValue: function(a2) {
  return ci().memoizedState = a2;
}, useTransition: function() {
  var a2 = qi(false), b2 = a2[0];
  a2 = Ei.bind(null, a2[1]);
  ci().memoizedState = a2;
  return [b2, a2];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a2, b2, c2) {
  var d2 = N$1, e2 = ci();
  if (I$1) {
    if (void 0 === c2)
      throw Error(p$5(407));
    c2 = c2();
  } else {
    c2 = b2();
    if (null === R$1)
      throw Error(p$5(349));
    0 !== (Rh & 30) || ni(d2, b2, c2);
  }
  e2.memoizedState = c2;
  var f2 = { value: c2, getSnapshot: b2 };
  e2.queue = f2;
  vi(ki.bind(
    null,
    d2,
    f2,
    a2
  ), [a2]);
  d2.flags |= 2048;
  li(9, mi.bind(null, d2, f2, c2, b2), void 0, null);
  return c2;
}, useId: function() {
  var a2 = ci(), b2 = R$1.identifierPrefix;
  if (I$1) {
    var c2 = sg;
    var d2 = rg;
    c2 = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c2;
    b2 = ":" + b2 + "R" + c2;
    c2 = Uh++;
    0 < c2 && (b2 += "H" + c2.toString(32));
    b2 += ":";
  } else
    c2 = Vh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
  return a2.memoizedState = b2;
}, unstable_isNewReconciler: false }, Zh = {
  readContext: Vg,
  useCallback: Bi,
  useContext: Vg,
  useEffect: ji,
  useImperativeHandle: zi,
  useInsertionEffect: wi,
  useLayoutEffect: xi,
  useMemo: Ci,
  useReducer: fi,
  useRef: si,
  useState: function() {
    return fi(ei);
  },
  useDebugValue: Ai,
  useDeferredValue: function(a2) {
    var b2 = di();
    return Di(b2, O$1.memoizedState, a2);
  },
  useTransition: function() {
    var a2 = fi(ei)[0], b2 = di().memoizedState;
    return [a2, b2];
  },
  useMutableSource: hi,
  useSyncExternalStore: ii,
  useId: Fi,
  unstable_isNewReconciler: false
}, $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
  return gi(ei);
}, useDebugValue: Ai, useDeferredValue: function(a2) {
  var b2 = di();
  return null === O$1 ? b2.memoizedState = a2 : Di(b2, O$1.memoizedState, a2);
}, useTransition: function() {
  var a2 = gi(ei)[0], b2 = di().memoizedState;
  return [a2, b2];
}, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
function Ki(a2, b2) {
  try {
    var c2 = "", d2 = b2;
    do
      c2 += Pa(d2), d2 = d2.return;
    while (d2);
    var e2 = c2;
  } catch (f2) {
    e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a2, source: b2, stack: e2, digest: null };
}
function Li(a2, b2, c2) {
  return { value: a2, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
}
function Mi(a2, b2) {
  try {
    console.error(b2.value);
  } catch (c2) {
    setTimeout(function() {
      throw c2;
    });
  }
}
var Ni = "function" === typeof WeakMap ? WeakMap : Map;
function Oi(a2, b2, c2) {
  c2 = ch(-1, c2);
  c2.tag = 3;
  c2.payload = { element: null };
  var d2 = b2.value;
  c2.callback = function() {
    Pi || (Pi = true, Qi = d2);
    Mi(a2, b2);
  };
  return c2;
}
function Ri(a2, b2, c2) {
  c2 = ch(-1, c2);
  c2.tag = 3;
  var d2 = a2.type.getDerivedStateFromError;
  if ("function" === typeof d2) {
    var e2 = b2.value;
    c2.payload = function() {
      return d2(e2);
    };
    c2.callback = function() {
      Mi(a2, b2);
    };
  }
  var f2 = a2.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
    Mi(a2, b2);
    "function" !== typeof d2 && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
    var c3 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
  });
  return c2;
}
function Ti(a2, b2, c2) {
  var d2 = a2.pingCache;
  if (null === d2) {
    d2 = a2.pingCache = new Ni();
    var e2 = /* @__PURE__ */ new Set();
    d2.set(b2, e2);
  } else
    e2 = d2.get(b2), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d2.set(b2, e2));
  e2.has(c2) || (e2.add(c2), a2 = Ui.bind(null, a2, b2, c2), b2.then(a2, a2));
}
function Vi(a2) {
  do {
    var b2;
    if (b2 = 13 === a2.tag)
      b2 = a2.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
    if (b2)
      return a2;
    a2 = a2.return;
  } while (null !== a2);
  return null;
}
function Wi(a2, b2, c2, d2, e2) {
  if (0 === (a2.mode & 1))
    return a2 === b2 ? a2.flags |= 65536 : (a2.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = ch(-1, 1), b2.tag = 2, dh(c2, b2, 1))), c2.lanes |= 1), a2;
  a2.flags |= 65536;
  a2.lanes = e2;
  return a2;
}
var Xi = ua.ReactCurrentOwner, Ug = false;
function Yi(a2, b2, c2, d2) {
  b2.child = null === a2 ? Ch(b2, null, c2, d2) : Bh(b2, a2.child, c2, d2);
}
function Zi(a2, b2, c2, d2, e2) {
  c2 = c2.render;
  var f2 = b2.ref;
  Tg(b2, e2);
  d2 = Xh(a2, b2, c2, d2, f2, e2);
  c2 = bi();
  if (null !== a2 && !Ug)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, $i(a2, b2, e2);
  I$1 && c2 && vg(b2);
  b2.flags |= 1;
  Yi(a2, b2, d2, e2);
  return b2.child;
}
function aj(a2, b2, c2, d2, e2) {
  if (null === a2) {
    var f2 = c2.type;
    if ("function" === typeof f2 && !bj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps)
      return b2.tag = 15, b2.type = f2, cj(a2, b2, f2, d2, e2);
    a2 = yh(c2.type, null, d2, b2, b2.mode, e2);
    a2.ref = b2.ref;
    a2.return = b2;
    return b2.child = a2;
  }
  f2 = a2.child;
  if (0 === (a2.lanes & e2)) {
    var g2 = f2.memoizedProps;
    c2 = c2.compare;
    c2 = null !== c2 ? c2 : Ie;
    if (c2(g2, d2) && a2.ref === b2.ref)
      return $i(a2, b2, e2);
  }
  b2.flags |= 1;
  a2 = wh(f2, d2);
  a2.ref = b2.ref;
  a2.return = b2;
  return b2.child = a2;
}
function cj(a2, b2, c2, d2, e2) {
  if (null !== a2) {
    var f2 = a2.memoizedProps;
    if (Ie(f2, d2) && a2.ref === b2.ref)
      if (Ug = false, b2.pendingProps = d2 = f2, 0 !== (a2.lanes & e2))
        0 !== (a2.flags & 131072) && (Ug = true);
      else
        return b2.lanes = a2.lanes, $i(a2, b2, e2);
  }
  return dj(a2, b2, c2, d2, e2);
}
function ej(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.children, f2 = null !== a2 ? a2.memoizedState : null;
  if ("hidden" === d2.mode)
    if (0 === (b2.mode & 1))
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G$1(fj, gj), gj |= c2;
    else {
      if (0 === (c2 & 1073741824))
        return a2 = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a2, cachePool: null, transitions: null }, b2.updateQueue = null, G$1(fj, gj), gj |= a2, null;
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d2 = null !== f2 ? f2.baseLanes : c2;
      G$1(fj, gj);
      gj |= d2;
    }
  else
    null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G$1(fj, gj), gj |= d2;
  Yi(a2, b2, e2, c2);
  return b2.child;
}
function hj(a2, b2) {
  var c2 = b2.ref;
  if (null === a2 && null !== c2 || null !== a2 && a2.ref !== c2)
    b2.flags |= 512, b2.flags |= 2097152;
}
function dj(a2, b2, c2, d2, e2) {
  var f2 = Zf(c2) ? Xf : H$1.current;
  f2 = Yf(b2, f2);
  Tg(b2, e2);
  c2 = Xh(a2, b2, c2, d2, f2, e2);
  d2 = bi();
  if (null !== a2 && !Ug)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, $i(a2, b2, e2);
  I$1 && d2 && vg(b2);
  b2.flags |= 1;
  Yi(a2, b2, c2, e2);
  return b2.child;
}
function ij(a2, b2, c2, d2, e2) {
  if (Zf(c2)) {
    var f2 = true;
    cg(b2);
  } else
    f2 = false;
  Tg(b2, e2);
  if (null === b2.stateNode)
    jj(a2, b2), ph(b2, c2, d2), rh(b2, c2, d2, e2), d2 = true;
  else if (null === a2) {
    var g2 = b2.stateNode, h2 = b2.memoizedProps;
    g2.props = h2;
    var k2 = g2.context, l2 = c2.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = Vg(l2) : (l2 = Zf(c2) ? Xf : H$1.current, l2 = Yf(b2, l2));
    var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && qh(b2, g2, d2, l2);
    $g = false;
    var r2 = b2.memoizedState;
    g2.state = r2;
    gh(b2, d2, g2, e2);
    k2 = b2.memoizedState;
    h2 !== d2 || r2 !== k2 || Wf.current || $g ? ("function" === typeof m2 && (kh(b2, c2, m2, d2), k2 = b2.memoizedState), (h2 = $g || oh(b2, c2, h2, d2, r2, k2, l2)) ? (q2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), d2 = false);
  } else {
    g2 = b2.stateNode;
    bh(a2, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : Lg(b2.type, h2);
    g2.props = l2;
    q2 = b2.pendingProps;
    r2 = g2.context;
    k2 = c2.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = Vg(k2) : (k2 = Zf(c2) ? Xf : H$1.current, k2 = Yf(b2, k2));
    var y2 = c2.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && qh(b2, g2, d2, k2);
    $g = false;
    r2 = b2.memoizedState;
    g2.state = r2;
    gh(b2, d2, g2, e2);
    var n2 = b2.memoizedState;
    h2 !== q2 || r2 !== n2 || Wf.current || $g ? ("function" === typeof y2 && (kh(b2, c2, y2, d2), n2 = b2.memoizedState), (l2 = $g || oh(b2, c2, l2, d2, r2, n2, k2) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d2, n2, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, n2, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = n2), g2.props = d2, g2.state = n2, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), d2 = false);
  }
  return kj(a2, b2, c2, d2, f2, e2);
}
function kj(a2, b2, c2, d2, e2, f2) {
  hj(a2, b2);
  var g2 = 0 !== (b2.flags & 128);
  if (!d2 && !g2)
    return e2 && dg(b2, c2, false), $i(a2, b2, f2);
  d2 = b2.stateNode;
  Xi.current = b2;
  var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
  b2.flags |= 1;
  null !== a2 && g2 ? (b2.child = Bh(b2, a2.child, null, f2), b2.child = Bh(b2, null, h2, f2)) : Yi(a2, b2, h2, f2);
  b2.memoizedState = d2.state;
  e2 && dg(b2, c2, true);
  return b2.child;
}
function lj(a2) {
  var b2 = a2.stateNode;
  b2.pendingContext ? ag(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a2, b2.context, false);
  Ih(a2, b2.containerInfo);
}
function mj(a2, b2, c2, d2, e2) {
  Ig();
  Jg(e2);
  b2.flags |= 256;
  Yi(a2, b2, c2, d2);
  return b2.child;
}
var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
function oj(a2) {
  return { baseLanes: a2, cachePool: null, transitions: null };
}
function pj(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = M$1.current, f2 = false, g2 = 0 !== (b2.flags & 128), h2;
  (h2 = g2) || (h2 = null !== a2 && null === a2.memoizedState ? false : 0 !== (e2 & 2));
  if (h2)
    f2 = true, b2.flags &= -129;
  else if (null === a2 || null !== a2.memoizedState)
    e2 |= 1;
  G$1(M$1, e2 & 1);
  if (null === a2) {
    Eg(b2);
    a2 = b2.memoizedState;
    if (null !== a2 && (a2 = a2.dehydrated, null !== a2))
      return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a2.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
    g2 = d2.children;
    a2 = d2.fallback;
    return f2 ? (d2 = b2.mode, f2 = b2.child, g2 = { mode: "hidden", children: g2 }, 0 === (d2 & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = qj(g2, d2, 0, null), a2 = Ah(a2, d2, c2, null), f2.return = b2, a2.return = b2, f2.sibling = a2, b2.child = f2, b2.child.memoizedState = oj(c2), b2.memoizedState = nj, a2) : rj(b2, g2);
  }
  e2 = a2.memoizedState;
  if (null !== e2 && (h2 = e2.dehydrated, null !== h2))
    return sj(a2, b2, g2, d2, h2, e2, c2);
  if (f2) {
    f2 = d2.fallback;
    g2 = b2.mode;
    e2 = a2.child;
    h2 = e2.sibling;
    var k2 = { mode: "hidden", children: d2.children };
    0 === (g2 & 1) && b2.child !== e2 ? (d2 = b2.child, d2.childLanes = 0, d2.pendingProps = k2, b2.deletions = null) : (d2 = wh(e2, k2), d2.subtreeFlags = e2.subtreeFlags & 14680064);
    null !== h2 ? f2 = wh(h2, f2) : (f2 = Ah(f2, g2, c2, null), f2.flags |= 2);
    f2.return = b2;
    d2.return = b2;
    d2.sibling = f2;
    b2.child = d2;
    d2 = f2;
    f2 = b2.child;
    g2 = a2.child.memoizedState;
    g2 = null === g2 ? oj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
    f2.memoizedState = g2;
    f2.childLanes = a2.childLanes & ~c2;
    b2.memoizedState = nj;
    return d2;
  }
  f2 = a2.child;
  a2 = f2.sibling;
  d2 = wh(f2, { mode: "visible", children: d2.children });
  0 === (b2.mode & 1) && (d2.lanes = c2);
  d2.return = b2;
  d2.sibling = null;
  null !== a2 && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a2], b2.flags |= 16) : c2.push(a2));
  b2.child = d2;
  b2.memoizedState = null;
  return d2;
}
function rj(a2, b2) {
  b2 = qj({ mode: "visible", children: b2 }, a2.mode, 0, null);
  b2.return = a2;
  return a2.child = b2;
}
function tj(a2, b2, c2, d2) {
  null !== d2 && Jg(d2);
  Bh(b2, a2.child, null, c2);
  a2 = rj(b2, b2.pendingProps.children);
  a2.flags |= 2;
  b2.memoizedState = null;
  return a2;
}
function sj(a2, b2, c2, d2, e2, f2, g2) {
  if (c2) {
    if (b2.flags & 256)
      return b2.flags &= -257, d2 = Li(Error(p$5(422))), tj(a2, b2, g2, d2);
    if (null !== b2.memoizedState)
      return b2.child = a2.child, b2.flags |= 128, null;
    f2 = d2.fallback;
    e2 = b2.mode;
    d2 = qj({ mode: "visible", children: d2.children }, e2, 0, null);
    f2 = Ah(f2, e2, g2, null);
    f2.flags |= 2;
    d2.return = b2;
    f2.return = b2;
    d2.sibling = f2;
    b2.child = d2;
    0 !== (b2.mode & 1) && Bh(b2, a2.child, null, g2);
    b2.child.memoizedState = oj(g2);
    b2.memoizedState = nj;
    return f2;
  }
  if (0 === (b2.mode & 1))
    return tj(a2, b2, g2, null);
  if ("$!" === e2.data) {
    d2 = e2.nextSibling && e2.nextSibling.dataset;
    if (d2)
      var h2 = d2.dgst;
    d2 = h2;
    f2 = Error(p$5(419));
    d2 = Li(f2, d2, void 0);
    return tj(a2, b2, g2, d2);
  }
  h2 = 0 !== (g2 & a2.childLanes);
  if (Ug || h2) {
    d2 = R$1;
    if (null !== d2) {
      switch (g2 & -g2) {
        case 4:
          e2 = 2;
          break;
        case 16:
          e2 = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e2 = 32;
          break;
        case 536870912:
          e2 = 268435456;
          break;
        default:
          e2 = 0;
      }
      e2 = 0 !== (e2 & (d2.suspendedLanes | g2)) ? 0 : e2;
      0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, Zg(a2, e2), mh(d2, a2, e2, -1));
    }
    uj();
    d2 = Li(Error(p$5(421)));
    return tj(a2, b2, g2, d2);
  }
  if ("$?" === e2.data)
    return b2.flags |= 128, b2.child = a2.child, b2 = vj.bind(null, a2), e2._reactRetry = b2, null;
  a2 = f2.treeContext;
  yg = Lf(e2.nextSibling);
  xg = b2;
  I$1 = true;
  zg = null;
  null !== a2 && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a2.id, sg = a2.overflow, qg = b2);
  b2 = rj(b2, d2.children);
  b2.flags |= 4096;
  return b2;
}
function wj(a2, b2, c2) {
  a2.lanes |= b2;
  var d2 = a2.alternate;
  null !== d2 && (d2.lanes |= b2);
  Sg(a2.return, b2, c2);
}
function xj(a2, b2, c2, d2, e2) {
  var f2 = a2.memoizedState;
  null === f2 ? a2.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e2);
}
function yj(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
  Yi(a2, b2, d2.children, c2);
  d2 = M$1.current;
  if (0 !== (d2 & 2))
    d2 = d2 & 1 | 2, b2.flags |= 128;
  else {
    if (null !== a2 && 0 !== (a2.flags & 128))
      a:
        for (a2 = b2.child; null !== a2; ) {
          if (13 === a2.tag)
            null !== a2.memoizedState && wj(a2, c2, b2);
          else if (19 === a2.tag)
            wj(a2, c2, b2);
          else if (null !== a2.child) {
            a2.child.return = a2;
            a2 = a2.child;
            continue;
          }
          if (a2 === b2)
            break a;
          for (; null === a2.sibling; ) {
            if (null === a2.return || a2.return === b2)
              break a;
            a2 = a2.return;
          }
          a2.sibling.return = a2.return;
          a2 = a2.sibling;
        }
    d2 &= 1;
  }
  G$1(M$1, d2);
  if (0 === (b2.mode & 1))
    b2.memoizedState = null;
  else
    switch (e2) {
      case "forwards":
        c2 = b2.child;
        for (e2 = null; null !== c2; )
          a2 = c2.alternate, null !== a2 && null === Mh(a2) && (e2 = c2), c2 = c2.sibling;
        c2 = e2;
        null === c2 ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
        xj(b2, false, e2, c2, f2);
        break;
      case "backwards":
        c2 = null;
        e2 = b2.child;
        for (b2.child = null; null !== e2; ) {
          a2 = e2.alternate;
          if (null !== a2 && null === Mh(a2)) {
            b2.child = e2;
            break;
          }
          a2 = e2.sibling;
          e2.sibling = c2;
          c2 = e2;
          e2 = a2;
        }
        xj(b2, true, c2, null, f2);
        break;
      case "together":
        xj(b2, false, null, null, void 0);
        break;
      default:
        b2.memoizedState = null;
    }
  return b2.child;
}
function jj(a2, b2) {
  0 === (b2.mode & 1) && null !== a2 && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
}
function $i(a2, b2, c2) {
  null !== a2 && (b2.dependencies = a2.dependencies);
  hh |= b2.lanes;
  if (0 === (c2 & b2.childLanes))
    return null;
  if (null !== a2 && b2.child !== a2.child)
    throw Error(p$5(153));
  if (null !== b2.child) {
    a2 = b2.child;
    c2 = wh(a2, a2.pendingProps);
    b2.child = c2;
    for (c2.return = b2; null !== a2.sibling; )
      a2 = a2.sibling, c2 = c2.sibling = wh(a2, a2.pendingProps), c2.return = b2;
    c2.sibling = null;
  }
  return b2.child;
}
function zj(a2, b2, c2) {
  switch (b2.tag) {
    case 3:
      lj(b2);
      Ig();
      break;
    case 5:
      Kh(b2);
      break;
    case 1:
      Zf(b2.type) && cg(b2);
      break;
    case 4:
      Ih(b2, b2.stateNode.containerInfo);
      break;
    case 10:
      var d2 = b2.type._context, e2 = b2.memoizedProps.value;
      G$1(Mg, d2._currentValue);
      d2._currentValue = e2;
      break;
    case 13:
      d2 = b2.memoizedState;
      if (null !== d2) {
        if (null !== d2.dehydrated)
          return G$1(M$1, M$1.current & 1), b2.flags |= 128, null;
        if (0 !== (c2 & b2.child.childLanes))
          return pj(a2, b2, c2);
        G$1(M$1, M$1.current & 1);
        a2 = $i(a2, b2, c2);
        return null !== a2 ? a2.sibling : null;
      }
      G$1(M$1, M$1.current & 1);
      break;
    case 19:
      d2 = 0 !== (c2 & b2.childLanes);
      if (0 !== (a2.flags & 128)) {
        if (d2)
          return yj(a2, b2, c2);
        b2.flags |= 128;
      }
      e2 = b2.memoizedState;
      null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
      G$1(M$1, M$1.current);
      if (d2)
        break;
      else
        return null;
    case 22:
    case 23:
      return b2.lanes = 0, ej(a2, b2, c2);
  }
  return $i(a2, b2, c2);
}
var Aj, Bj, Cj, Dj;
Aj = function(a2, b2) {
  for (var c2 = b2.child; null !== c2; ) {
    if (5 === c2.tag || 6 === c2.tag)
      a2.appendChild(c2.stateNode);
    else if (4 !== c2.tag && null !== c2.child) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2)
      break;
    for (; null === c2.sibling; ) {
      if (null === c2.return || c2.return === b2)
        return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
Bj = function() {
};
Cj = function(a2, b2, c2, d2) {
  var e2 = a2.memoizedProps;
  if (e2 !== d2) {
    a2 = b2.stateNode;
    Hh(Eh.current);
    var f2 = null;
    switch (c2) {
      case "input":
        e2 = Ya(a2, e2);
        d2 = Ya(a2, d2);
        f2 = [];
        break;
      case "select":
        e2 = A$2({}, e2, { value: void 0 });
        d2 = A$2({}, d2, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e2 = gb(a2, e2);
        d2 = gb(a2, d2);
        f2 = [];
        break;
      default:
        "function" !== typeof e2.onClick && "function" === typeof d2.onClick && (a2.onclick = Bf);
    }
    ub(c2, d2);
    var g2;
    c2 = null;
    for (l2 in e2)
      if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2])
        if ("style" === l2) {
          var h2 = e2[l2];
          for (g2 in h2)
            h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
        } else
          "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d2) {
      var k2 = d2[l2];
      h2 = null != e2 ? e2[l2] : void 0;
      if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2))
        if ("style" === l2)
          if (h2) {
            for (g2 in h2)
              !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
            for (g2 in k2)
              k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
          } else
            c2 || (f2 || (f2 = []), f2.push(
              l2,
              c2
            )), c2 = k2;
        else
          "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D$1("scroll", a2), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c2 && (f2 = f2 || []).push("style", c2);
    var l2 = f2;
    if (b2.updateQueue = l2)
      b2.flags |= 4;
  }
};
Dj = function(a2, b2, c2, d2) {
  c2 !== d2 && (b2.flags |= 4);
};
function Ej(a2, b2) {
  if (!I$1)
    switch (a2.tailMode) {
      case "hidden":
        b2 = a2.tail;
        for (var c2 = null; null !== b2; )
          null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
        null === c2 ? a2.tail = null : c2.sibling = null;
        break;
      case "collapsed":
        c2 = a2.tail;
        for (var d2 = null; null !== c2; )
          null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
        null === d2 ? b2 || null === a2.tail ? a2.tail = null : a2.tail.sibling = null : d2.sibling = null;
    }
}
function S$1(a2) {
  var b2 = null !== a2.alternate && a2.alternate.child === a2.child, c2 = 0, d2 = 0;
  if (b2)
    for (var e2 = a2.child; null !== e2; )
      c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a2, e2 = e2.sibling;
  else
    for (e2 = a2.child; null !== e2; )
      c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a2, e2 = e2.sibling;
  a2.subtreeFlags |= d2;
  a2.childLanes = c2;
  return b2;
}
function Fj(a2, b2, c2) {
  var d2 = b2.pendingProps;
  wg(b2);
  switch (b2.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S$1(b2), null;
    case 1:
      return Zf(b2.type) && $f(), S$1(b2), null;
    case 3:
      d2 = b2.stateNode;
      Jh();
      E$1(Wf);
      E$1(H$1);
      Oh();
      d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
      if (null === a2 || null === a2.child)
        Gg(b2) ? b2.flags |= 4 : null === a2 || a2.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Gj(zg), zg = null));
      Bj(a2, b2);
      S$1(b2);
      return null;
    case 5:
      Lh(b2);
      var e2 = Hh(Gh.current);
      c2 = b2.type;
      if (null !== a2 && null != b2.stateNode)
        Cj(a2, b2, c2, d2, e2), a2.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      else {
        if (!d2) {
          if (null === b2.stateNode)
            throw Error(p$5(166));
          S$1(b2);
          return null;
        }
        a2 = Hh(Eh.current);
        if (Gg(b2)) {
          d2 = b2.stateNode;
          c2 = b2.type;
          var f2 = b2.memoizedProps;
          d2[Of] = b2;
          d2[Pf] = f2;
          a2 = 0 !== (b2.mode & 1);
          switch (c2) {
            case "dialog":
              D$1("cancel", d2);
              D$1("close", d2);
              break;
            case "iframe":
            case "object":
            case "embed":
              D$1("load", d2);
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < lf.length; e2++)
                D$1(lf[e2], d2);
              break;
            case "source":
              D$1("error", d2);
              break;
            case "img":
            case "image":
            case "link":
              D$1(
                "error",
                d2
              );
              D$1("load", d2);
              break;
            case "details":
              D$1("toggle", d2);
              break;
            case "input":
              Za(d2, f2);
              D$1("invalid", d2);
              break;
            case "select":
              d2._wrapperState = { wasMultiple: !!f2.multiple };
              D$1("invalid", d2);
              break;
            case "textarea":
              hb(d2, f2), D$1("invalid", d2);
          }
          ub(c2, f2);
          e2 = null;
          for (var g2 in f2)
            if (f2.hasOwnProperty(g2)) {
              var h2 = f2[g2];
              "children" === g2 ? "string" === typeof h2 ? d2.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d2.textContent, h2, a2), e2 = ["children", h2]) : "number" === typeof h2 && d2.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
                d2.textContent,
                h2,
                a2
              ), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g2) && null != h2 && "onScroll" === g2 && D$1("scroll", d2);
            }
          switch (c2) {
            case "input":
              Va(d2);
              db(d2, f2, true);
              break;
            case "textarea":
              Va(d2);
              jb(d2);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d2.onclick = Bf);
          }
          d2 = e2;
          b2.updateQueue = d2;
          null !== d2 && (b2.flags |= 4);
        } else {
          g2 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a2 && (a2 = kb(c2));
          "http://www.w3.org/1999/xhtml" === a2 ? "script" === c2 ? (a2 = g2.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : "string" === typeof d2.is ? a2 = g2.createElement(c2, { is: d2.is }) : (a2 = g2.createElement(c2), "select" === c2 && (g2 = a2, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a2 = g2.createElementNS(a2, c2);
          a2[Of] = b2;
          a2[Pf] = d2;
          Aj(a2, b2, false, false);
          b2.stateNode = a2;
          a: {
            g2 = vb(c2, d2);
            switch (c2) {
              case "dialog":
                D$1("cancel", a2);
                D$1("close", a2);
                e2 = d2;
                break;
              case "iframe":
              case "object":
              case "embed":
                D$1("load", a2);
                e2 = d2;
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < lf.length; e2++)
                  D$1(lf[e2], a2);
                e2 = d2;
                break;
              case "source":
                D$1("error", a2);
                e2 = d2;
                break;
              case "img":
              case "image":
              case "link":
                D$1(
                  "error",
                  a2
                );
                D$1("load", a2);
                e2 = d2;
                break;
              case "details":
                D$1("toggle", a2);
                e2 = d2;
                break;
              case "input":
                Za(a2, d2);
                e2 = Ya(a2, d2);
                D$1("invalid", a2);
                break;
              case "option":
                e2 = d2;
                break;
              case "select":
                a2._wrapperState = { wasMultiple: !!d2.multiple };
                e2 = A$2({}, d2, { value: void 0 });
                D$1("invalid", a2);
                break;
              case "textarea":
                hb(a2, d2);
                e2 = gb(a2, d2);
                D$1("invalid", a2);
                break;
              default:
                e2 = d2;
            }
            ub(c2, e2);
            h2 = e2;
            for (f2 in h2)
              if (h2.hasOwnProperty(f2)) {
                var k2 = h2[f2];
                "style" === f2 ? sb(a2, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a2, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a2, k2) : "number" === typeof k2 && ob(a2, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D$1("scroll", a2) : null != k2 && ta(a2, f2, k2, g2));
              }
            switch (c2) {
              case "input":
                Va(a2);
                db(a2, d2, false);
                break;
              case "textarea":
                Va(a2);
                jb(a2);
                break;
              case "option":
                null != d2.value && a2.setAttribute("value", "" + Sa(d2.value));
                break;
              case "select":
                a2.multiple = !!d2.multiple;
                f2 = d2.value;
                null != f2 ? fb(a2, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(
                  a2,
                  !!d2.multiple,
                  d2.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e2.onClick && (a2.onclick = Bf);
            }
            switch (c2) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d2 = !!d2.autoFocus;
                break a;
              case "img":
                d2 = true;
                break a;
              default:
                d2 = false;
            }
          }
          d2 && (b2.flags |= 4);
        }
        null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      }
      S$1(b2);
      return null;
    case 6:
      if (a2 && null != b2.stateNode)
        Dj(a2, b2, a2.memoizedProps, d2);
      else {
        if ("string" !== typeof d2 && null === b2.stateNode)
          throw Error(p$5(166));
        c2 = Hh(Gh.current);
        Hh(Eh.current);
        if (Gg(b2)) {
          d2 = b2.stateNode;
          c2 = b2.memoizedProps;
          d2[Of] = b2;
          if (f2 = d2.nodeValue !== c2) {
            if (a2 = xg, null !== a2)
              switch (a2.tag) {
                case 3:
                  Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
                  break;
                case 5:
                  true !== a2.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
              }
          }
          f2 && (b2.flags |= 4);
        } else
          d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[Of] = b2, b2.stateNode = d2;
      }
      S$1(b2);
      return null;
    case 13:
      E$1(M$1);
      d2 = b2.memoizedState;
      if (null === a2 || null !== a2.memoizedState && null !== a2.memoizedState.dehydrated) {
        if (I$1 && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128))
          Hg(), Ig(), b2.flags |= 98560, f2 = false;
        else if (f2 = Gg(b2), null !== d2 && null !== d2.dehydrated) {
          if (null === a2) {
            if (!f2)
              throw Error(p$5(318));
            f2 = b2.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2)
              throw Error(p$5(317));
            f2[Of] = b2;
          } else
            Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
          S$1(b2);
          f2 = false;
        } else
          null !== zg && (Gj(zg), zg = null), f2 = true;
        if (!f2)
          return b2.flags & 65536 ? b2 : null;
      }
      if (0 !== (b2.flags & 128))
        return b2.lanes = c2, b2;
      d2 = null !== d2;
      d2 !== (null !== a2 && null !== a2.memoizedState) && d2 && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a2 || 0 !== (M$1.current & 1) ? 0 === T && (T = 3) : uj()));
      null !== b2.updateQueue && (b2.flags |= 4);
      S$1(b2);
      return null;
    case 4:
      return Jh(), Bj(a2, b2), null === a2 && sf(b2.stateNode.containerInfo), S$1(b2), null;
    case 10:
      return Rg(b2.type._context), S$1(b2), null;
    case 17:
      return Zf(b2.type) && $f(), S$1(b2), null;
    case 19:
      E$1(M$1);
      f2 = b2.memoizedState;
      if (null === f2)
        return S$1(b2), null;
      d2 = 0 !== (b2.flags & 128);
      g2 = f2.rendering;
      if (null === g2)
        if (d2)
          Ej(f2, false);
        else {
          if (0 !== T || null !== a2 && 0 !== (a2.flags & 128))
            for (a2 = b2.child; null !== a2; ) {
              g2 = Mh(a2);
              if (null !== g2) {
                b2.flags |= 128;
                Ej(f2, false);
                d2 = g2.updateQueue;
                null !== d2 && (b2.updateQueue = d2, b2.flags |= 4);
                b2.subtreeFlags = 0;
                d2 = c2;
                for (c2 = b2.child; null !== c2; )
                  f2 = c2, a2 = d2, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a2 = g2.dependencies, f2.dependencies = null === a2 ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c2 = c2.sibling;
                G$1(M$1, M$1.current & 1 | 2);
                return b2.child;
              }
              a2 = a2.sibling;
            }
          null !== f2.tail && B$1() > Hj && (b2.flags |= 128, d2 = true, Ej(f2, false), b2.lanes = 4194304);
        }
      else {
        if (!d2)
          if (a2 = Mh(g2), null !== a2) {
            if (b2.flags |= 128, d2 = true, c2 = a2.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Ej(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I$1)
              return S$1(b2), null;
          } else
            2 * B$1() - f2.renderingStartTime > Hj && 1073741824 !== c2 && (b2.flags |= 128, d2 = true, Ej(f2, false), b2.lanes = 4194304);
        f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
      }
      if (null !== f2.tail)
        return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B$1(), b2.sibling = null, c2 = M$1.current, G$1(M$1, d2 ? c2 & 1 | 2 : c2 & 1), b2;
      S$1(b2);
      return null;
    case 22:
    case 23:
      return Ij(), d2 = null !== b2.memoizedState, null !== a2 && null !== a2.memoizedState !== d2 && (b2.flags |= 8192), d2 && 0 !== (b2.mode & 1) ? 0 !== (gj & 1073741824) && (S$1(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S$1(b2), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p$5(156, b2.tag));
}
function Jj(a2, b2) {
  wg(b2);
  switch (b2.tag) {
    case 1:
      return Zf(b2.type) && $f(), a2 = b2.flags, a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 3:
      return Jh(), E$1(Wf), E$1(H$1), Oh(), a2 = b2.flags, 0 !== (a2 & 65536) && 0 === (a2 & 128) ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 5:
      return Lh(b2), null;
    case 13:
      E$1(M$1);
      a2 = b2.memoizedState;
      if (null !== a2 && null !== a2.dehydrated) {
        if (null === b2.alternate)
          throw Error(p$5(340));
        Ig();
      }
      a2 = b2.flags;
      return a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 19:
      return E$1(M$1), null;
    case 4:
      return Jh(), null;
    case 10:
      return Rg(b2.type._context), null;
    case 22:
    case 23:
      return Ij(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kj = false, U$1 = false, Lj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
function Mj(a2, b2) {
  var c2 = a2.ref;
  if (null !== c2)
    if ("function" === typeof c2)
      try {
        c2(null);
      } catch (d2) {
        W$1(a2, b2, d2);
      }
    else
      c2.current = null;
}
function Nj(a2, b2, c2) {
  try {
    c2();
  } catch (d2) {
    W$1(a2, b2, d2);
  }
}
var Oj = false;
function Pj(a2, b2) {
  Cf = dd;
  a2 = Me();
  if (Ne(a2)) {
    if ("selectionStart" in a2)
      var c2 = { start: a2.selectionStart, end: a2.selectionEnd };
    else
      a: {
        c2 = (c2 = a2.ownerDocument) && c2.defaultView || window;
        var d2 = c2.getSelection && c2.getSelection();
        if (d2 && 0 !== d2.rangeCount) {
          c2 = d2.anchorNode;
          var e2 = d2.anchorOffset, f2 = d2.focusNode;
          d2 = d2.focusOffset;
          try {
            c2.nodeType, f2.nodeType;
          } catch (F2) {
            c2 = null;
            break a;
          }
          var g2 = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a2, r2 = null;
          b:
            for (; ; ) {
              for (var y2; ; ) {
                q2 !== c2 || 0 !== e2 && 3 !== q2.nodeType || (h2 = g2 + e2);
                q2 !== f2 || 0 !== d2 && 3 !== q2.nodeType || (k2 = g2 + d2);
                3 === q2.nodeType && (g2 += q2.nodeValue.length);
                if (null === (y2 = q2.firstChild))
                  break;
                r2 = q2;
                q2 = y2;
              }
              for (; ; ) {
                if (q2 === a2)
                  break b;
                r2 === c2 && ++l2 === e2 && (h2 = g2);
                r2 === f2 && ++m2 === d2 && (k2 = g2);
                if (null !== (y2 = q2.nextSibling))
                  break;
                q2 = r2;
                r2 = q2.parentNode;
              }
              q2 = y2;
            }
          c2 = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
        } else
          c2 = null;
      }
    c2 = c2 || { start: 0, end: 0 };
  } else
    c2 = null;
  Df = { focusedElem: a2, selectionRange: c2 };
  dd = false;
  for (V = b2; null !== V; )
    if (b2 = V, a2 = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a2)
      a2.return = b2, V = a2;
    else
      for (; null !== V; ) {
        b2 = V;
        try {
          var n2 = b2.alternate;
          if (0 !== (b2.flags & 1024))
            switch (b2.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n2) {
                  var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Lg(b2.type, t2), J2);
                  x2.__reactInternalSnapshotBeforeUpdate = w2;
                }
                break;
              case 3:
                var u2 = b2.stateNode.containerInfo;
                1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p$5(163));
            }
        } catch (F2) {
          W$1(b2, b2.return, F2);
        }
        a2 = b2.sibling;
        if (null !== a2) {
          a2.return = b2.return;
          V = a2;
          break;
        }
        V = b2.return;
      }
  n2 = Oj;
  Oj = false;
  return n2;
}
function Qj(a2, b2, c2) {
  var d2 = b2.updateQueue;
  d2 = null !== d2 ? d2.lastEffect : null;
  if (null !== d2) {
    var e2 = d2 = d2.next;
    do {
      if ((e2.tag & a2) === a2) {
        var f2 = e2.destroy;
        e2.destroy = void 0;
        void 0 !== f2 && Nj(b2, c2, f2);
      }
      e2 = e2.next;
    } while (e2 !== d2);
  }
}
function Rj(a2, b2) {
  b2 = b2.updateQueue;
  b2 = null !== b2 ? b2.lastEffect : null;
  if (null !== b2) {
    var c2 = b2 = b2.next;
    do {
      if ((c2.tag & a2) === a2) {
        var d2 = c2.create;
        c2.destroy = d2();
      }
      c2 = c2.next;
    } while (c2 !== b2);
  }
}
function Sj(a2) {
  var b2 = a2.ref;
  if (null !== b2) {
    var c2 = a2.stateNode;
    switch (a2.tag) {
      case 5:
        a2 = c2;
        break;
      default:
        a2 = c2;
    }
    "function" === typeof b2 ? b2(a2) : b2.current = a2;
  }
}
function Tj(a2) {
  var b2 = a2.alternate;
  null !== b2 && (a2.alternate = null, Tj(b2));
  a2.child = null;
  a2.deletions = null;
  a2.sibling = null;
  5 === a2.tag && (b2 = a2.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
  a2.stateNode = null;
  a2.return = null;
  a2.dependencies = null;
  a2.memoizedProps = null;
  a2.memoizedState = null;
  a2.pendingProps = null;
  a2.stateNode = null;
  a2.updateQueue = null;
}
function Uj(a2) {
  return 5 === a2.tag || 3 === a2.tag || 4 === a2.tag;
}
function Vj(a2) {
  a:
    for (; ; ) {
      for (; null === a2.sibling; ) {
        if (null === a2.return || Uj(a2.return))
          return null;
        a2 = a2.return;
      }
      a2.sibling.return = a2.return;
      for (a2 = a2.sibling; 5 !== a2.tag && 6 !== a2.tag && 18 !== a2.tag; ) {
        if (a2.flags & 2)
          continue a;
        if (null === a2.child || 4 === a2.tag)
          continue a;
        else
          a2.child.return = a2, a2 = a2.child;
      }
      if (!(a2.flags & 2))
        return a2.stateNode;
    }
}
function Wj(a2, b2, c2) {
  var d2 = a2.tag;
  if (5 === d2 || 6 === d2)
    a2 = a2.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a2, b2) : c2.insertBefore(a2, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a2, c2)) : (b2 = c2, b2.appendChild(a2)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
  else if (4 !== d2 && (a2 = a2.child, null !== a2))
    for (Wj(a2, b2, c2), a2 = a2.sibling; null !== a2; )
      Wj(a2, b2, c2), a2 = a2.sibling;
}
function Xj(a2, b2, c2) {
  var d2 = a2.tag;
  if (5 === d2 || 6 === d2)
    a2 = a2.stateNode, b2 ? c2.insertBefore(a2, b2) : c2.appendChild(a2);
  else if (4 !== d2 && (a2 = a2.child, null !== a2))
    for (Xj(a2, b2, c2), a2 = a2.sibling; null !== a2; )
      Xj(a2, b2, c2), a2 = a2.sibling;
}
var X$1 = null, Yj = false;
function Zj(a2, b2, c2) {
  for (c2 = c2.child; null !== c2; )
    ak(a2, b2, c2), c2 = c2.sibling;
}
function ak(a2, b2, c2) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount)
    try {
      lc.onCommitFiberUnmount(kc, c2);
    } catch (h2) {
    }
  switch (c2.tag) {
    case 5:
      U$1 || Mj(c2, b2);
    case 6:
      var d2 = X$1, e2 = Yj;
      X$1 = null;
      Zj(a2, b2, c2);
      X$1 = d2;
      Yj = e2;
      null !== X$1 && (Yj ? (a2 = X$1, c2 = c2.stateNode, 8 === a2.nodeType ? a2.parentNode.removeChild(c2) : a2.removeChild(c2)) : X$1.removeChild(c2.stateNode));
      break;
    case 18:
      null !== X$1 && (Yj ? (a2 = X$1, c2 = c2.stateNode, 8 === a2.nodeType ? Kf(a2.parentNode, c2) : 1 === a2.nodeType && Kf(a2, c2), bd(a2)) : Kf(X$1, c2.stateNode));
      break;
    case 4:
      d2 = X$1;
      e2 = Yj;
      X$1 = c2.stateNode.containerInfo;
      Yj = true;
      Zj(a2, b2, c2);
      X$1 = d2;
      Yj = e2;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U$1 && (d2 = c2.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
        e2 = d2 = d2.next;
        do {
          var f2 = e2, g2 = f2.destroy;
          f2 = f2.tag;
          void 0 !== g2 && (0 !== (f2 & 2) ? Nj(c2, b2, g2) : 0 !== (f2 & 4) && Nj(c2, b2, g2));
          e2 = e2.next;
        } while (e2 !== d2);
      }
      Zj(a2, b2, c2);
      break;
    case 1:
      if (!U$1 && (Mj(c2, b2), d2 = c2.stateNode, "function" === typeof d2.componentWillUnmount))
        try {
          d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
        } catch (h2) {
          W$1(c2, b2, h2);
        }
      Zj(a2, b2, c2);
      break;
    case 21:
      Zj(a2, b2, c2);
      break;
    case 22:
      c2.mode & 1 ? (U$1 = (d2 = U$1) || null !== c2.memoizedState, Zj(a2, b2, c2), U$1 = d2) : Zj(a2, b2, c2);
      break;
    default:
      Zj(a2, b2, c2);
  }
}
function bk(a2) {
  var b2 = a2.updateQueue;
  if (null !== b2) {
    a2.updateQueue = null;
    var c2 = a2.stateNode;
    null === c2 && (c2 = a2.stateNode = new Lj());
    b2.forEach(function(b3) {
      var d2 = ck.bind(null, a2, b3);
      c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
    });
  }
}
function dk(a2, b2) {
  var c2 = b2.deletions;
  if (null !== c2)
    for (var d2 = 0; d2 < c2.length; d2++) {
      var e2 = c2[d2];
      try {
        var f2 = a2, g2 = b2, h2 = g2;
        a:
          for (; null !== h2; ) {
            switch (h2.tag) {
              case 5:
                X$1 = h2.stateNode;
                Yj = false;
                break a;
              case 3:
                X$1 = h2.stateNode.containerInfo;
                Yj = true;
                break a;
              case 4:
                X$1 = h2.stateNode.containerInfo;
                Yj = true;
                break a;
            }
            h2 = h2.return;
          }
        if (null === X$1)
          throw Error(p$5(160));
        ak(f2, g2, e2);
        X$1 = null;
        Yj = false;
        var k2 = e2.alternate;
        null !== k2 && (k2.return = null);
        e2.return = null;
      } catch (l2) {
        W$1(e2, b2, l2);
      }
    }
  if (b2.subtreeFlags & 12854)
    for (b2 = b2.child; null !== b2; )
      ek(b2, a2), b2 = b2.sibling;
}
function ek(a2, b2) {
  var c2 = a2.alternate, d2 = a2.flags;
  switch (a2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      dk(b2, a2);
      fk(a2);
      if (d2 & 4) {
        try {
          Qj(3, a2, a2.return), Rj(3, a2);
        } catch (t2) {
          W$1(a2, a2.return, t2);
        }
        try {
          Qj(5, a2, a2.return);
        } catch (t2) {
          W$1(a2, a2.return, t2);
        }
      }
      break;
    case 1:
      dk(b2, a2);
      fk(a2);
      d2 & 512 && null !== c2 && Mj(c2, c2.return);
      break;
    case 5:
      dk(b2, a2);
      fk(a2);
      d2 & 512 && null !== c2 && Mj(c2, c2.return);
      if (a2.flags & 32) {
        var e2 = a2.stateNode;
        try {
          ob(e2, "");
        } catch (t2) {
          W$1(a2, a2.return, t2);
        }
      }
      if (d2 & 4 && (e2 = a2.stateNode, null != e2)) {
        var f2 = a2.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f2, h2 = a2.type, k2 = a2.updateQueue;
        a2.updateQueue = null;
        if (null !== k2)
          try {
            "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
            vb(h2, g2);
            var l2 = vb(h2, f2);
            for (g2 = 0; g2 < k2.length; g2 += 2) {
              var m2 = k2[g2], q2 = k2[g2 + 1];
              "style" === m2 ? sb(e2, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q2) : "children" === m2 ? ob(e2, q2) : ta(e2, m2, q2, l2);
            }
            switch (h2) {
              case "input":
                bb(e2, f2);
                break;
              case "textarea":
                ib(e2, f2);
                break;
              case "select":
                var r2 = e2._wrapperState.wasMultiple;
                e2._wrapperState.wasMultiple = !!f2.multiple;
                var y2 = f2.value;
                null != y2 ? fb(e2, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                  e2,
                  !!f2.multiple,
                  f2.defaultValue,
                  true
                ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e2[Pf] = f2;
          } catch (t2) {
            W$1(a2, a2.return, t2);
          }
      }
      break;
    case 6:
      dk(b2, a2);
      fk(a2);
      if (d2 & 4) {
        if (null === a2.stateNode)
          throw Error(p$5(162));
        e2 = a2.stateNode;
        f2 = a2.memoizedProps;
        try {
          e2.nodeValue = f2;
        } catch (t2) {
          W$1(a2, a2.return, t2);
        }
      }
      break;
    case 3:
      dk(b2, a2);
      fk(a2);
      if (d2 & 4 && null !== c2 && c2.memoizedState.isDehydrated)
        try {
          bd(b2.containerInfo);
        } catch (t2) {
          W$1(a2, a2.return, t2);
        }
      break;
    case 4:
      dk(b2, a2);
      fk(a2);
      break;
    case 13:
      dk(b2, a2);
      fk(a2);
      e2 = a2.child;
      e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (gk = B$1()));
      d2 & 4 && bk(a2);
      break;
    case 22:
      m2 = null !== c2 && null !== c2.memoizedState;
      a2.mode & 1 ? (U$1 = (l2 = U$1) || m2, dk(b2, a2), U$1 = l2) : dk(b2, a2);
      fk(a2);
      if (d2 & 8192) {
        l2 = null !== a2.memoizedState;
        if ((a2.stateNode.isHidden = l2) && !m2 && 0 !== (a2.mode & 1))
          for (V = a2, m2 = a2.child; null !== m2; ) {
            for (q2 = V = m2; null !== V; ) {
              r2 = V;
              y2 = r2.child;
              switch (r2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qj(4, r2, r2.return);
                  break;
                case 1:
                  Mj(r2, r2.return);
                  var n2 = r2.stateNode;
                  if ("function" === typeof n2.componentWillUnmount) {
                    d2 = r2;
                    c2 = r2.return;
                    try {
                      b2 = d2, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                    } catch (t2) {
                      W$1(d2, c2, t2);
                    }
                  }
                  break;
                case 5:
                  Mj(r2, r2.return);
                  break;
                case 22:
                  if (null !== r2.memoizedState) {
                    hk(q2);
                    continue;
                  }
              }
              null !== y2 ? (y2.return = r2, V = y2) : hk(q2);
            }
            m2 = m2.sibling;
          }
        a:
          for (m2 = null, q2 = a2; ; ) {
            if (5 === q2.tag) {
              if (null === m2) {
                m2 = q2;
                try {
                  e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g2));
                } catch (t2) {
                  W$1(a2, a2.return, t2);
                }
              }
            } else if (6 === q2.tag) {
              if (null === m2)
                try {
                  q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                } catch (t2) {
                  W$1(a2, a2.return, t2);
                }
            } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a2) && null !== q2.child) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a2)
              break a;
            for (; null === q2.sibling; ) {
              if (null === q2.return || q2.return === a2)
                break a;
              m2 === q2 && (m2 = null);
              q2 = q2.return;
            }
            m2 === q2 && (m2 = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
      }
      break;
    case 19:
      dk(b2, a2);
      fk(a2);
      d2 & 4 && bk(a2);
      break;
    case 21:
      break;
    default:
      dk(
        b2,
        a2
      ), fk(a2);
  }
}
function fk(a2) {
  var b2 = a2.flags;
  if (b2 & 2) {
    try {
      a: {
        for (var c2 = a2.return; null !== c2; ) {
          if (Uj(c2)) {
            var d2 = c2;
            break a;
          }
          c2 = c2.return;
        }
        throw Error(p$5(160));
      }
      switch (d2.tag) {
        case 5:
          var e2 = d2.stateNode;
          d2.flags & 32 && (ob(e2, ""), d2.flags &= -33);
          var f2 = Vj(a2);
          Xj(a2, f2, e2);
          break;
        case 3:
        case 4:
          var g2 = d2.stateNode.containerInfo, h2 = Vj(a2);
          Wj(a2, h2, g2);
          break;
        default:
          throw Error(p$5(161));
      }
    } catch (k2) {
      W$1(a2, a2.return, k2);
    }
    a2.flags &= -3;
  }
  b2 & 4096 && (a2.flags &= -4097);
}
function ik(a2, b2, c2) {
  V = a2;
  jk(a2);
}
function jk(a2, b2, c2) {
  for (var d2 = 0 !== (a2.mode & 1); null !== V; ) {
    var e2 = V, f2 = e2.child;
    if (22 === e2.tag && d2) {
      var g2 = null !== e2.memoizedState || Kj;
      if (!g2) {
        var h2 = e2.alternate, k2 = null !== h2 && null !== h2.memoizedState || U$1;
        h2 = Kj;
        var l2 = U$1;
        Kj = g2;
        if ((U$1 = k2) && !l2)
          for (V = e2; null !== V; )
            g2 = V, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? kk(e2) : null !== k2 ? (k2.return = g2, V = k2) : kk(e2);
        for (; null !== f2; )
          V = f2, jk(f2), f2 = f2.sibling;
        V = e2;
        Kj = h2;
        U$1 = l2;
      }
      lk(a2);
    } else
      0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V = f2) : lk(a2);
  }
}
function lk(a2) {
  for (; null !== V; ) {
    var b2 = V;
    if (0 !== (b2.flags & 8772)) {
      var c2 = b2.alternate;
      try {
        if (0 !== (b2.flags & 8772))
          switch (b2.tag) {
            case 0:
            case 11:
            case 15:
              U$1 || Rj(5, b2);
              break;
            case 1:
              var d2 = b2.stateNode;
              if (b2.flags & 4 && !U$1)
                if (null === c2)
                  d2.componentDidMount();
                else {
                  var e2 = b2.elementType === b2.type ? c2.memoizedProps : Lg(b2.type, c2.memoizedProps);
                  d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
                }
              var f2 = b2.updateQueue;
              null !== f2 && ih(b2, f2, d2);
              break;
            case 3:
              var g2 = b2.updateQueue;
              if (null !== g2) {
                c2 = null;
                if (null !== b2.child)
                  switch (b2.child.tag) {
                    case 5:
                      c2 = b2.child.stateNode;
                      break;
                    case 1:
                      c2 = b2.child.stateNode;
                  }
                ih(b2, g2, c2);
              }
              break;
            case 5:
              var h2 = b2.stateNode;
              if (null === c2 && b2.flags & 4) {
                c2 = h2;
                var k2 = b2.memoizedProps;
                switch (b2.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c2.focus();
                    break;
                  case "img":
                    k2.src && (c2.src = k2.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (null === b2.memoizedState) {
                var l2 = b2.alternate;
                if (null !== l2) {
                  var m2 = l2.memoizedState;
                  if (null !== m2) {
                    var q2 = m2.dehydrated;
                    null !== q2 && bd(q2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p$5(163));
          }
        U$1 || b2.flags & 512 && Sj(b2);
      } catch (r2) {
        W$1(b2, b2.return, r2);
      }
    }
    if (b2 === a2) {
      V = null;
      break;
    }
    c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V = c2;
      break;
    }
    V = b2.return;
  }
}
function hk(a2) {
  for (; null !== V; ) {
    var b2 = V;
    if (b2 === a2) {
      V = null;
      break;
    }
    var c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V = c2;
      break;
    }
    V = b2.return;
  }
}
function kk(a2) {
  for (; null !== V; ) {
    var b2 = V;
    try {
      switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          var c2 = b2.return;
          try {
            Rj(4, b2);
          } catch (k2) {
            W$1(b2, c2, k2);
          }
          break;
        case 1:
          var d2 = b2.stateNode;
          if ("function" === typeof d2.componentDidMount) {
            var e2 = b2.return;
            try {
              d2.componentDidMount();
            } catch (k2) {
              W$1(b2, e2, k2);
            }
          }
          var f2 = b2.return;
          try {
            Sj(b2);
          } catch (k2) {
            W$1(b2, f2, k2);
          }
          break;
        case 5:
          var g2 = b2.return;
          try {
            Sj(b2);
          } catch (k2) {
            W$1(b2, g2, k2);
          }
      }
    } catch (k2) {
      W$1(b2, b2.return, k2);
    }
    if (b2 === a2) {
      V = null;
      break;
    }
    var h2 = b2.sibling;
    if (null !== h2) {
      h2.return = b2.return;
      V = h2;
      break;
    }
    V = b2.return;
  }
}
var mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K = 0, R$1 = null, Y = null, Z$1 = 0, gj = 0, fj = Uf(0), T = 0, qk = null, hh = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = false, Qi = null, Si = null, wk = false, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
function L$1() {
  return 0 !== (K & 6) ? B$1() : -1 !== Bk ? Bk : Bk = B$1();
}
function lh(a2) {
  if (0 === (a2.mode & 1))
    return 1;
  if (0 !== (K & 2) && 0 !== Z$1)
    return Z$1 & -Z$1;
  if (null !== Kg.transition)
    return 0 === Ck && (Ck = yc()), Ck;
  a2 = C;
  if (0 !== a2)
    return a2;
  a2 = window.event;
  a2 = void 0 === a2 ? 16 : jd(a2.type);
  return a2;
}
function mh(a2, b2, c2, d2) {
  if (50 < zk)
    throw zk = 0, Ak = null, Error(p$5(185));
  Ac(a2, c2, d2);
  if (0 === (K & 2) || a2 !== R$1)
    a2 === R$1 && (0 === (K & 2) && (rk |= c2), 4 === T && Dk(a2, Z$1)), Ek(a2, d2), 1 === c2 && 0 === K && 0 === (b2.mode & 1) && (Hj = B$1() + 500, fg && jg());
}
function Ek(a2, b2) {
  var c2 = a2.callbackNode;
  wc(a2, b2);
  var d2 = uc(a2, a2 === R$1 ? Z$1 : 0);
  if (0 === d2)
    null !== c2 && bc(c2), a2.callbackNode = null, a2.callbackPriority = 0;
  else if (b2 = d2 & -d2, a2.callbackPriority !== b2) {
    null != c2 && bc(c2);
    if (1 === b2)
      0 === a2.tag ? ig(Fk.bind(null, a2)) : hg(Fk.bind(null, a2)), Jf(function() {
        0 === (K & 6) && jg();
      }), c2 = null;
    else {
      switch (Dc(d2)) {
        case 1:
          c2 = fc;
          break;
        case 4:
          c2 = gc;
          break;
        case 16:
          c2 = hc;
          break;
        case 536870912:
          c2 = jc;
          break;
        default:
          c2 = hc;
      }
      c2 = Gk(c2, Hk.bind(null, a2));
    }
    a2.callbackPriority = b2;
    a2.callbackNode = c2;
  }
}
function Hk(a2, b2) {
  Bk = -1;
  Ck = 0;
  if (0 !== (K & 6))
    throw Error(p$5(327));
  var c2 = a2.callbackNode;
  if (Ik() && a2.callbackNode !== c2)
    return null;
  var d2 = uc(a2, a2 === R$1 ? Z$1 : 0);
  if (0 === d2)
    return null;
  if (0 !== (d2 & 30) || 0 !== (d2 & a2.expiredLanes) || b2)
    b2 = Jk(a2, d2);
  else {
    b2 = d2;
    var e2 = K;
    K |= 2;
    var f2 = Kk();
    if (R$1 !== a2 || Z$1 !== b2)
      vk = null, Hj = B$1() + 500, Lk(a2, b2);
    do
      try {
        Mk();
        break;
      } catch (h2) {
        Nk(a2, h2);
      }
    while (1);
    Qg();
    nk.current = f2;
    K = e2;
    null !== Y ? b2 = 0 : (R$1 = null, Z$1 = 0, b2 = T);
  }
  if (0 !== b2) {
    2 === b2 && (e2 = xc(a2), 0 !== e2 && (d2 = e2, b2 = Ok(a2, e2)));
    if (1 === b2)
      throw c2 = qk, Lk(a2, 0), Dk(a2, d2), Ek(a2, B$1()), c2;
    if (6 === b2)
      Dk(a2, d2);
    else {
      e2 = a2.current.alternate;
      if (0 === (d2 & 30) && !Pk(e2) && (b2 = Jk(a2, d2), 2 === b2 && (f2 = xc(a2), 0 !== f2 && (d2 = f2, b2 = Ok(a2, f2))), 1 === b2))
        throw c2 = qk, Lk(a2, 0), Dk(a2, d2), Ek(a2, B$1()), c2;
      a2.finishedWork = e2;
      a2.finishedLanes = d2;
      switch (b2) {
        case 0:
        case 1:
          throw Error(p$5(345));
        case 2:
          Qk(a2, uk, vk);
          break;
        case 3:
          Dk(a2, d2);
          if ((d2 & 130023424) === d2 && (b2 = gk + 500 - B$1(), 10 < b2)) {
            if (0 !== uc(a2, 0))
              break;
            e2 = a2.suspendedLanes;
            if ((e2 & d2) !== d2) {
              L$1();
              a2.pingedLanes |= a2.suspendedLanes & e2;
              break;
            }
            a2.timeoutHandle = Ff(Qk.bind(null, a2, uk, vk), b2);
            break;
          }
          Qk(a2, uk, vk);
          break;
        case 4:
          Dk(a2, d2);
          if ((d2 & 4194240) === d2)
            break;
          b2 = a2.eventTimes;
          for (e2 = -1; 0 < d2; ) {
            var g2 = 31 - oc(d2);
            f2 = 1 << g2;
            g2 = b2[g2];
            g2 > e2 && (e2 = g2);
            d2 &= ~f2;
          }
          d2 = e2;
          d2 = B$1() - d2;
          d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * mk(d2 / 1960)) - d2;
          if (10 < d2) {
            a2.timeoutHandle = Ff(Qk.bind(null, a2, uk, vk), d2);
            break;
          }
          Qk(a2, uk, vk);
          break;
        case 5:
          Qk(a2, uk, vk);
          break;
        default:
          throw Error(p$5(329));
      }
    }
  }
  Ek(a2, B$1());
  return a2.callbackNode === c2 ? Hk.bind(null, a2) : null;
}
function Ok(a2, b2) {
  var c2 = tk;
  a2.current.memoizedState.isDehydrated && (Lk(a2, b2).flags |= 256);
  a2 = Jk(a2, b2);
  2 !== a2 && (b2 = uk, uk = c2, null !== b2 && Gj(b2));
  return a2;
}
function Gj(a2) {
  null === uk ? uk = a2 : uk.push.apply(uk, a2);
}
function Pk(a2) {
  for (var b2 = a2; ; ) {
    if (b2.flags & 16384) {
      var c2 = b2.updateQueue;
      if (null !== c2 && (c2 = c2.stores, null !== c2))
        for (var d2 = 0; d2 < c2.length; d2++) {
          var e2 = c2[d2], f2 = e2.getSnapshot;
          e2 = e2.value;
          try {
            if (!He(f2(), e2))
              return false;
          } catch (g2) {
            return false;
          }
        }
    }
    c2 = b2.child;
    if (b2.subtreeFlags & 16384 && null !== c2)
      c2.return = b2, b2 = c2;
    else {
      if (b2 === a2)
        break;
      for (; null === b2.sibling; ) {
        if (null === b2.return || b2.return === a2)
          return true;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return true;
}
function Dk(a2, b2) {
  b2 &= ~sk;
  b2 &= ~rk;
  a2.suspendedLanes |= b2;
  a2.pingedLanes &= ~b2;
  for (a2 = a2.expirationTimes; 0 < b2; ) {
    var c2 = 31 - oc(b2), d2 = 1 << c2;
    a2[c2] = -1;
    b2 &= ~d2;
  }
}
function Fk(a2) {
  if (0 !== (K & 6))
    throw Error(p$5(327));
  Ik();
  var b2 = uc(a2, 0);
  if (0 === (b2 & 1))
    return Ek(a2, B$1()), null;
  var c2 = Jk(a2, b2);
  if (0 !== a2.tag && 2 === c2) {
    var d2 = xc(a2);
    0 !== d2 && (b2 = d2, c2 = Ok(a2, d2));
  }
  if (1 === c2)
    throw c2 = qk, Lk(a2, 0), Dk(a2, b2), Ek(a2, B$1()), c2;
  if (6 === c2)
    throw Error(p$5(345));
  a2.finishedWork = a2.current.alternate;
  a2.finishedLanes = b2;
  Qk(a2, uk, vk);
  Ek(a2, B$1());
  return null;
}
function Rk(a2, b2) {
  var c2 = K;
  K |= 1;
  try {
    return a2(b2);
  } finally {
    K = c2, 0 === K && (Hj = B$1() + 500, fg && jg());
  }
}
function Sk(a2) {
  null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
  var b2 = K;
  K |= 1;
  var c2 = pk.transition, d2 = C;
  try {
    if (pk.transition = null, C = 1, a2)
      return a2();
  } finally {
    C = d2, pk.transition = c2, K = b2, 0 === (K & 6) && jg();
  }
}
function Ij() {
  gj = fj.current;
  E$1(fj);
}
function Lk(a2, b2) {
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  var c2 = a2.timeoutHandle;
  -1 !== c2 && (a2.timeoutHandle = -1, Gf(c2));
  if (null !== Y)
    for (c2 = Y.return; null !== c2; ) {
      var d2 = c2;
      wg(d2);
      switch (d2.tag) {
        case 1:
          d2 = d2.type.childContextTypes;
          null !== d2 && void 0 !== d2 && $f();
          break;
        case 3:
          Jh();
          E$1(Wf);
          E$1(H$1);
          Oh();
          break;
        case 5:
          Lh(d2);
          break;
        case 4:
          Jh();
          break;
        case 13:
          E$1(M$1);
          break;
        case 19:
          E$1(M$1);
          break;
        case 10:
          Rg(d2.type._context);
          break;
        case 22:
        case 23:
          Ij();
      }
      c2 = c2.return;
    }
  R$1 = a2;
  Y = a2 = wh(a2.current, null);
  Z$1 = gj = b2;
  T = 0;
  qk = null;
  sk = rk = hh = 0;
  uk = tk = null;
  if (null !== Wg) {
    for (b2 = 0; b2 < Wg.length; b2++)
      if (c2 = Wg[b2], d2 = c2.interleaved, null !== d2) {
        c2.interleaved = null;
        var e2 = d2.next, f2 = c2.pending;
        if (null !== f2) {
          var g2 = f2.next;
          f2.next = e2;
          d2.next = g2;
        }
        c2.pending = d2;
      }
    Wg = null;
  }
  return a2;
}
function Nk(a2, b2) {
  do {
    var c2 = Y;
    try {
      Qg();
      Ph.current = ai;
      if (Sh) {
        for (var d2 = N$1.memoizedState; null !== d2; ) {
          var e2 = d2.queue;
          null !== e2 && (e2.pending = null);
          d2 = d2.next;
        }
        Sh = false;
      }
      Rh = 0;
      P$1 = O$1 = N$1 = null;
      Th = false;
      Uh = 0;
      ok.current = null;
      if (null === c2 || null === c2.return) {
        T = 1;
        qk = b2;
        Y = null;
        break;
      }
      a: {
        var f2 = a2, g2 = c2.return, h2 = c2, k2 = b2;
        b2 = Z$1;
        h2.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h2, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Vi(g2);
          if (null !== y2) {
            y2.flags &= -257;
            Wi(y2, g2, h2, f2, b2);
            y2.mode & 1 && Ti(f2, l2, b2);
            b2 = y2;
            k2 = l2;
            var n2 = b2.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b2.updateQueue = t2;
            } else
              n2.add(k2);
            break a;
          } else {
            if (0 === (b2 & 1)) {
              Ti(f2, l2, b2);
              uj();
              break a;
            }
            k2 = Error(p$5(426));
          }
        } else if (I$1 && h2.mode & 1) {
          var J2 = Vi(g2);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Wi(J2, g2, h2, f2, b2);
            Jg(Ki(k2, h2));
            break a;
          }
        }
        f2 = k2 = Ki(k2, h2);
        4 !== T && (T = 2);
        null === tk ? tk = [f2] : tk.push(f2);
        f2 = g2;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b2 &= -b2;
              f2.lanes |= b2;
              var x2 = Oi(f2, k2, b2);
              fh(f2, x2);
              break a;
            case 1:
              h2 = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Si || !Si.has(u2)))) {
                f2.flags |= 65536;
                b2 &= -b2;
                f2.lanes |= b2;
                var F2 = Ri(f2, h2, b2);
                fh(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Tk(c2);
    } catch (na) {
      b2 = na;
      Y === c2 && null !== c2 && (Y = c2 = c2.return);
      continue;
    }
    break;
  } while (1);
}
function Kk() {
  var a2 = nk.current;
  nk.current = ai;
  return null === a2 ? ai : a2;
}
function uj() {
  if (0 === T || 3 === T || 2 === T)
    T = 4;
  null === R$1 || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R$1, Z$1);
}
function Jk(a2, b2) {
  var c2 = K;
  K |= 2;
  var d2 = Kk();
  if (R$1 !== a2 || Z$1 !== b2)
    vk = null, Lk(a2, b2);
  do
    try {
      Uk();
      break;
    } catch (e2) {
      Nk(a2, e2);
    }
  while (1);
  Qg();
  K = c2;
  nk.current = d2;
  if (null !== Y)
    throw Error(p$5(261));
  R$1 = null;
  Z$1 = 0;
  return T;
}
function Uk() {
  for (; null !== Y; )
    Vk(Y);
}
function Mk() {
  for (; null !== Y && !cc(); )
    Vk(Y);
}
function Vk(a2) {
  var b2 = Wk(a2.alternate, a2, gj);
  a2.memoizedProps = a2.pendingProps;
  null === b2 ? Tk(a2) : Y = b2;
  ok.current = null;
}
function Tk(a2) {
  var b2 = a2;
  do {
    var c2 = b2.alternate;
    a2 = b2.return;
    if (0 === (b2.flags & 32768)) {
      if (c2 = Fj(c2, b2, gj), null !== c2) {
        Y = c2;
        return;
      }
    } else {
      c2 = Jj(c2, b2);
      if (null !== c2) {
        c2.flags &= 32767;
        Y = c2;
        return;
      }
      if (null !== a2)
        a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null;
      else {
        T = 6;
        Y = null;
        return;
      }
    }
    b2 = b2.sibling;
    if (null !== b2) {
      Y = b2;
      return;
    }
    Y = b2 = a2;
  } while (null !== b2);
  0 === T && (T = 5);
}
function Qk(a2, b2, c2) {
  var d2 = C, e2 = pk.transition;
  try {
    pk.transition = null, C = 1, Xk(a2, b2, c2, d2);
  } finally {
    pk.transition = e2, C = d2;
  }
  return null;
}
function Xk(a2, b2, c2, d2) {
  do
    Ik();
  while (null !== xk);
  if (0 !== (K & 6))
    throw Error(p$5(327));
  c2 = a2.finishedWork;
  var e2 = a2.finishedLanes;
  if (null === c2)
    return null;
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  if (c2 === a2.current)
    throw Error(p$5(177));
  a2.callbackNode = null;
  a2.callbackPriority = 0;
  var f2 = c2.lanes | c2.childLanes;
  Bc(a2, f2);
  a2 === R$1 && (Y = R$1 = null, Z$1 = 0);
  0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || wk || (wk = true, Gk(hc, function() {
    Ik();
    return null;
  }));
  f2 = 0 !== (c2.flags & 15990);
  if (0 !== (c2.subtreeFlags & 15990) || f2) {
    f2 = pk.transition;
    pk.transition = null;
    var g2 = C;
    C = 1;
    var h2 = K;
    K |= 4;
    ok.current = null;
    Pj(a2, c2);
    ek(c2, a2);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a2.current = c2;
    ik(c2);
    dc();
    K = h2;
    C = g2;
    pk.transition = f2;
  } else
    a2.current = c2;
  wk && (wk = false, xk = a2, yk = e2);
  f2 = a2.pendingLanes;
  0 === f2 && (Si = null);
  mc(c2.stateNode);
  Ek(a2, B$1());
  if (null !== b2)
    for (d2 = a2.onRecoverableError, c2 = 0; c2 < b2.length; c2++)
      e2 = b2[c2], d2(e2.value, { componentStack: e2.stack, digest: e2.digest });
  if (Pi)
    throw Pi = false, a2 = Qi, Qi = null, a2;
  0 !== (yk & 1) && 0 !== a2.tag && Ik();
  f2 = a2.pendingLanes;
  0 !== (f2 & 1) ? a2 === Ak ? zk++ : (zk = 0, Ak = a2) : zk = 0;
  jg();
  return null;
}
function Ik() {
  if (null !== xk) {
    var a2 = Dc(yk), b2 = pk.transition, c2 = C;
    try {
      pk.transition = null;
      C = 16 > a2 ? 16 : a2;
      if (null === xk)
        var d2 = false;
      else {
        a2 = xk;
        xk = null;
        yk = 0;
        if (0 !== (K & 6))
          throw Error(p$5(331));
        var e2 = K;
        K |= 4;
        for (V = a2.current; null !== V; ) {
          var f2 = V, g2 = f2.child;
          if (0 !== (V.flags & 16)) {
            var h2 = f2.deletions;
            if (null !== h2) {
              for (var k2 = 0; k2 < h2.length; k2++) {
                var l2 = h2[k2];
                for (V = l2; null !== V; ) {
                  var m2 = V;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2)
                    q2.return = m2, V = q2;
                  else
                    for (; null !== V; ) {
                      m2 = V;
                      var r2 = m2.sibling, y2 = m2.return;
                      Tj(m2);
                      if (m2 === l2) {
                        V = null;
                        break;
                      }
                      if (null !== r2) {
                        r2.return = y2;
                        V = r2;
                        break;
                      }
                      V = y2;
                    }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g2)
            g2.return = f2, V = g2;
          else
            b:
              for (; null !== V; ) {
                f2 = V;
                if (0 !== (f2.flags & 2048))
                  switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, f2, f2.return);
                  }
                var x2 = f2.sibling;
                if (null !== x2) {
                  x2.return = f2.return;
                  V = x2;
                  break b;
                }
                V = f2.return;
              }
        }
        var w2 = a2.current;
        for (V = w2; null !== V; ) {
          g2 = V;
          var u2 = g2.child;
          if (0 !== (g2.subtreeFlags & 2064) && null !== u2)
            u2.return = g2, V = u2;
          else
            b:
              for (g2 = w2; null !== V; ) {
                h2 = V;
                if (0 !== (h2.flags & 2048))
                  try {
                    switch (h2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rj(9, h2);
                    }
                  } catch (na) {
                    W$1(h2, h2.return, na);
                  }
                if (h2 === g2) {
                  V = null;
                  break b;
                }
                var F2 = h2.sibling;
                if (null !== F2) {
                  F2.return = h2.return;
                  V = F2;
                  break b;
                }
                V = h2.return;
              }
        }
        K = e2;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot)
          try {
            lc.onPostCommitFiberRoot(kc, a2);
          } catch (na) {
          }
        d2 = true;
      }
      return d2;
    } finally {
      C = c2, pk.transition = b2;
    }
  }
  return false;
}
function Yk(a2, b2, c2) {
  b2 = Ki(c2, b2);
  b2 = Oi(a2, b2, 1);
  a2 = dh(a2, b2, 1);
  b2 = L$1();
  null !== a2 && (Ac(a2, 1, b2), Ek(a2, b2));
}
function W$1(a2, b2, c2) {
  if (3 === a2.tag)
    Yk(a2, a2, c2);
  else
    for (; null !== b2; ) {
      if (3 === b2.tag) {
        Yk(b2, a2, c2);
        break;
      } else if (1 === b2.tag) {
        var d2 = b2.stateNode;
        if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Si || !Si.has(d2))) {
          a2 = Ki(c2, a2);
          a2 = Ri(b2, a2, 1);
          b2 = dh(b2, a2, 1);
          a2 = L$1();
          null !== b2 && (Ac(b2, 1, a2), Ek(b2, a2));
          break;
        }
      }
      b2 = b2.return;
    }
}
function Ui(a2, b2, c2) {
  var d2 = a2.pingCache;
  null !== d2 && d2.delete(b2);
  b2 = L$1();
  a2.pingedLanes |= a2.suspendedLanes & c2;
  R$1 === a2 && (Z$1 & c2) === c2 && (4 === T || 3 === T && (Z$1 & 130023424) === Z$1 && 500 > B$1() - gk ? Lk(a2, 0) : sk |= c2);
  Ek(a2, b2);
}
function Zk(a2, b2) {
  0 === b2 && (0 === (a2.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c2 = L$1();
  a2 = Zg(a2, b2);
  null !== a2 && (Ac(a2, b2, c2), Ek(a2, c2));
}
function vj(a2) {
  var b2 = a2.memoizedState, c2 = 0;
  null !== b2 && (c2 = b2.retryLane);
  Zk(a2, c2);
}
function ck(a2, b2) {
  var c2 = 0;
  switch (a2.tag) {
    case 13:
      var d2 = a2.stateNode;
      var e2 = a2.memoizedState;
      null !== e2 && (c2 = e2.retryLane);
      break;
    case 19:
      d2 = a2.stateNode;
      break;
    default:
      throw Error(p$5(314));
  }
  null !== d2 && d2.delete(b2);
  Zk(a2, c2);
}
var Wk;
Wk = function(a2, b2, c2) {
  if (null !== a2)
    if (a2.memoizedProps !== b2.pendingProps || Wf.current)
      Ug = true;
    else {
      if (0 === (a2.lanes & c2) && 0 === (b2.flags & 128))
        return Ug = false, zj(a2, b2, c2);
      Ug = 0 !== (a2.flags & 131072) ? true : false;
    }
  else
    Ug = false, I$1 && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      var d2 = b2.type;
      jj(a2, b2);
      a2 = b2.pendingProps;
      var e2 = Yf(b2, H$1.current);
      Tg(b2, c2);
      e2 = Xh(null, b2, d2, a2, e2, c2);
      var f2 = bi();
      b2.flags |= 1;
      "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d2) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, ah(b2), e2.updater = nh, b2.stateNode = e2, e2._reactInternals = b2, rh(b2, d2, a2, c2), b2 = kj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I$1 && f2 && vg(b2), Yi(null, b2, e2, c2), b2 = b2.child);
      return b2;
    case 16:
      d2 = b2.elementType;
      a: {
        jj(a2, b2);
        a2 = b2.pendingProps;
        e2 = d2._init;
        d2 = e2(d2._payload);
        b2.type = d2;
        e2 = b2.tag = $k(d2);
        a2 = Lg(d2, a2);
        switch (e2) {
          case 0:
            b2 = dj(null, b2, d2, a2, c2);
            break a;
          case 1:
            b2 = ij(null, b2, d2, a2, c2);
            break a;
          case 11:
            b2 = Zi(null, b2, d2, a2, c2);
            break a;
          case 14:
            b2 = aj(null, b2, d2, Lg(d2.type, a2), c2);
            break a;
        }
        throw Error(p$5(
          306,
          d2,
          ""
        ));
      }
      return b2;
    case 0:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), dj(a2, b2, d2, e2, c2);
    case 1:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), ij(a2, b2, d2, e2, c2);
    case 3:
      a: {
        lj(b2);
        if (null === a2)
          throw Error(p$5(387));
        d2 = b2.pendingProps;
        f2 = b2.memoizedState;
        e2 = f2.element;
        bh(a2, b2);
        gh(b2, d2, null, c2);
        var g2 = b2.memoizedState;
        d2 = g2.element;
        if (f2.isDehydrated)
          if (f2 = { element: d2, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
            e2 = Ki(Error(p$5(423)), b2);
            b2 = mj(a2, b2, d2, c2, e2);
            break a;
          } else if (d2 !== e2) {
            e2 = Ki(Error(p$5(424)), b2);
            b2 = mj(a2, b2, d2, c2, e2);
            break a;
          } else
            for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I$1 = true, zg = null, c2 = Ch(b2, null, d2, c2), b2.child = c2; c2; )
              c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
        else {
          Ig();
          if (d2 === e2) {
            b2 = $i(a2, b2, c2);
            break a;
          }
          Yi(a2, b2, d2, c2);
        }
        b2 = b2.child;
      }
      return b2;
    case 5:
      return Kh(b2), null === a2 && Eg(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = null !== a2 ? a2.memoizedProps : null, g2 = e2.children, Ef(d2, e2) ? g2 = null : null !== f2 && Ef(d2, f2) && (b2.flags |= 32), hj(a2, b2), Yi(a2, b2, g2, c2), b2.child;
    case 6:
      return null === a2 && Eg(b2), null;
    case 13:
      return pj(a2, b2, c2);
    case 4:
      return Ih(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a2 ? b2.child = Bh(b2, null, d2, c2) : Yi(a2, b2, d2, c2), b2.child;
    case 11:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), Zi(a2, b2, d2, e2, c2);
    case 7:
      return Yi(a2, b2, b2.pendingProps, c2), b2.child;
    case 8:
      return Yi(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 12:
      return Yi(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 10:
      a: {
        d2 = b2.type._context;
        e2 = b2.pendingProps;
        f2 = b2.memoizedProps;
        g2 = e2.value;
        G$1(Mg, d2._currentValue);
        d2._currentValue = g2;
        if (null !== f2)
          if (He(f2.value, g2)) {
            if (f2.children === e2.children && !Wf.current) {
              b2 = $i(a2, b2, c2);
              break a;
            }
          } else
            for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
              var h2 = f2.dependencies;
              if (null !== h2) {
                g2 = f2.child;
                for (var k2 = h2.firstContext; null !== k2; ) {
                  if (k2.context === d2) {
                    if (1 === f2.tag) {
                      k2 = ch(-1, c2 & -c2);
                      k2.tag = 2;
                      var l2 = f2.updateQueue;
                      if (null !== l2) {
                        l2 = l2.shared;
                        var m2 = l2.pending;
                        null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                        l2.pending = k2;
                      }
                    }
                    f2.lanes |= c2;
                    k2 = f2.alternate;
                    null !== k2 && (k2.lanes |= c2);
                    Sg(
                      f2.return,
                      c2,
                      b2
                    );
                    h2.lanes |= c2;
                    break;
                  }
                  k2 = k2.next;
                }
              } else if (10 === f2.tag)
                g2 = f2.type === b2.type ? null : f2.child;
              else if (18 === f2.tag) {
                g2 = f2.return;
                if (null === g2)
                  throw Error(p$5(341));
                g2.lanes |= c2;
                h2 = g2.alternate;
                null !== h2 && (h2.lanes |= c2);
                Sg(g2, c2, b2);
                g2 = f2.sibling;
              } else
                g2 = f2.child;
              if (null !== g2)
                g2.return = f2;
              else
                for (g2 = f2; null !== g2; ) {
                  if (g2 === b2) {
                    g2 = null;
                    break;
                  }
                  f2 = g2.sibling;
                  if (null !== f2) {
                    f2.return = g2.return;
                    g2 = f2;
                    break;
                  }
                  g2 = g2.return;
                }
              f2 = g2;
            }
        Yi(a2, b2, e2.children, c2);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e2 = b2.type, d2 = b2.pendingProps.children, Tg(b2, c2), e2 = Vg(e2), d2 = d2(e2), b2.flags |= 1, Yi(a2, b2, d2, c2), b2.child;
    case 14:
      return d2 = b2.type, e2 = Lg(d2, b2.pendingProps), e2 = Lg(d2.type, e2), aj(a2, b2, d2, e2, c2);
    case 15:
      return cj(a2, b2, b2.type, b2.pendingProps, c2);
    case 17:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), jj(a2, b2), b2.tag = 1, Zf(d2) ? (a2 = true, cg(b2)) : a2 = false, Tg(b2, c2), ph(b2, d2, e2), rh(b2, d2, e2, c2), kj(null, b2, d2, true, a2, c2);
    case 19:
      return yj(a2, b2, c2);
    case 22:
      return ej(a2, b2, c2);
  }
  throw Error(p$5(156, b2.tag));
};
function Gk(a2, b2) {
  return ac(a2, b2);
}
function al(a2, b2, c2, d2) {
  this.tag = a2;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d2;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a2, b2, c2, d2) {
  return new al(a2, b2, c2, d2);
}
function bj(a2) {
  a2 = a2.prototype;
  return !(!a2 || !a2.isReactComponent);
}
function $k(a2) {
  if ("function" === typeof a2)
    return bj(a2) ? 1 : 0;
  if (void 0 !== a2 && null !== a2) {
    a2 = a2.$$typeof;
    if (a2 === Da)
      return 11;
    if (a2 === Ga)
      return 14;
  }
  return 2;
}
function wh(a2, b2) {
  var c2 = a2.alternate;
  null === c2 ? (c2 = Bg(a2.tag, b2, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b2, c2.type = a2.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
  c2.flags = a2.flags & 14680064;
  c2.childLanes = a2.childLanes;
  c2.lanes = a2.lanes;
  c2.child = a2.child;
  c2.memoizedProps = a2.memoizedProps;
  c2.memoizedState = a2.memoizedState;
  c2.updateQueue = a2.updateQueue;
  b2 = a2.dependencies;
  c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c2.sibling = a2.sibling;
  c2.index = a2.index;
  c2.ref = a2.ref;
  return c2;
}
function yh(a2, b2, c2, d2, e2, f2) {
  var g2 = 2;
  d2 = a2;
  if ("function" === typeof a2)
    bj(a2) && (g2 = 1);
  else if ("string" === typeof a2)
    g2 = 5;
  else
    a:
      switch (a2) {
        case ya:
          return Ah(c2.children, e2, f2, b2);
        case za:
          g2 = 8;
          e2 |= 8;
          break;
        case Aa:
          return a2 = Bg(12, c2, b2, e2 | 2), a2.elementType = Aa, a2.lanes = f2, a2;
        case Ea:
          return a2 = Bg(13, c2, b2, e2), a2.elementType = Ea, a2.lanes = f2, a2;
        case Fa:
          return a2 = Bg(19, c2, b2, e2), a2.elementType = Fa, a2.lanes = f2, a2;
        case Ia:
          return qj(c2, e2, f2, b2);
        default:
          if ("object" === typeof a2 && null !== a2)
            switch (a2.$$typeof) {
              case Ba:
                g2 = 10;
                break a;
              case Ca:
                g2 = 9;
                break a;
              case Da:
                g2 = 11;
                break a;
              case Ga:
                g2 = 14;
                break a;
              case Ha:
                g2 = 16;
                d2 = null;
                break a;
            }
          throw Error(p$5(130, null == a2 ? a2 : typeof a2, ""));
      }
  b2 = Bg(g2, c2, b2, e2);
  b2.elementType = a2;
  b2.type = d2;
  b2.lanes = f2;
  return b2;
}
function Ah(a2, b2, c2, d2) {
  a2 = Bg(7, a2, d2, b2);
  a2.lanes = c2;
  return a2;
}
function qj(a2, b2, c2, d2) {
  a2 = Bg(22, a2, d2, b2);
  a2.elementType = Ia;
  a2.lanes = c2;
  a2.stateNode = { isHidden: false };
  return a2;
}
function xh(a2, b2, c2) {
  a2 = Bg(6, a2, null, b2);
  a2.lanes = c2;
  return a2;
}
function zh(a2, b2, c2) {
  b2 = Bg(4, null !== a2.children ? a2.children : [], a2.key, b2);
  b2.lanes = c2;
  b2.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
  return b2;
}
function bl(a2, b2, c2, d2, e2) {
  this.tag = b2;
  this.containerInfo = a2;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d2;
  this.onRecoverableError = e2;
  this.mutableSourceEagerHydrationData = null;
}
function cl(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  a2 = new bl(a2, b2, c2, h2, k2);
  1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
  f2 = Bg(3, null, null, b2);
  a2.current = f2;
  f2.stateNode = a2;
  f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  ah(f2);
  return a2;
}
function dl(a2, b2, c2) {
  var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d2 ? null : "" + d2, children: a2, containerInfo: b2, implementation: c2 };
}
function el(a2) {
  if (!a2)
    return Vf;
  a2 = a2._reactInternals;
  a: {
    if (Vb(a2) !== a2 || 1 !== a2.tag)
      throw Error(p$5(170));
    var b2 = a2;
    do {
      switch (b2.tag) {
        case 3:
          b2 = b2.stateNode.context;
          break a;
        case 1:
          if (Zf(b2.type)) {
            b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b2 = b2.return;
    } while (null !== b2);
    throw Error(p$5(171));
  }
  if (1 === a2.tag) {
    var c2 = a2.type;
    if (Zf(c2))
      return bg(a2, c2, b2);
  }
  return b2;
}
function fl(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  a2 = cl(c2, d2, true, a2, e2, f2, g2, h2, k2);
  a2.context = el(null);
  c2 = a2.current;
  d2 = L$1();
  e2 = lh(c2);
  f2 = ch(d2, e2);
  f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
  dh(c2, f2, e2);
  a2.current.lanes = e2;
  Ac(a2, e2, d2);
  Ek(a2, d2);
  return a2;
}
function gl(a2, b2, c2, d2) {
  var e2 = b2.current, f2 = L$1(), g2 = lh(e2);
  c2 = el(c2);
  null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
  b2 = ch(f2, g2);
  b2.payload = { element: a2 };
  d2 = void 0 === d2 ? null : d2;
  null !== d2 && (b2.callback = d2);
  a2 = dh(e2, b2, g2);
  null !== a2 && (mh(a2, e2, g2, f2), eh(a2, e2, g2));
  return g2;
}
function hl(a2) {
  a2 = a2.current;
  if (!a2.child)
    return null;
  switch (a2.child.tag) {
    case 5:
      return a2.child.stateNode;
    default:
      return a2.child.stateNode;
  }
}
function il(a2, b2) {
  a2 = a2.memoizedState;
  if (null !== a2 && null !== a2.dehydrated) {
    var c2 = a2.retryLane;
    a2.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
  }
}
function jl(a2, b2) {
  il(a2, b2);
  (a2 = a2.alternate) && il(a2, b2);
}
function kl() {
  return null;
}
var ll = "function" === typeof reportError ? reportError : function(a2) {
  console.error(a2);
};
function ml(a2) {
  this._internalRoot = a2;
}
nl.prototype.render = ml.prototype.render = function(a2) {
  var b2 = this._internalRoot;
  if (null === b2)
    throw Error(p$5(409));
  gl(a2, b2, null, null);
};
nl.prototype.unmount = ml.prototype.unmount = function() {
  var a2 = this._internalRoot;
  if (null !== a2) {
    this._internalRoot = null;
    var b2 = a2.containerInfo;
    Sk(function() {
      gl(null, a2, null, null);
    });
    b2[uf] = null;
  }
};
function nl(a2) {
  this._internalRoot = a2;
}
nl.prototype.unstable_scheduleHydration = function(a2) {
  if (a2) {
    var b2 = Hc();
    a2 = { blockedOn: null, target: a2, priority: b2 };
    for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++)
      ;
    Qc.splice(c2, 0, a2);
    0 === c2 && Vc(a2);
  }
};
function ol(a2) {
  return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType);
}
function pl(a2) {
  return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType && (8 !== a2.nodeType || " react-mount-point-unstable " !== a2.nodeValue));
}
function ql() {
}
function rl(a2, b2, c2, d2, e2) {
  if (e2) {
    if ("function" === typeof d2) {
      var f2 = d2;
      d2 = function() {
        var a3 = hl(g2);
        f2.call(a3);
      };
    }
    var g2 = fl(b2, d2, a2, 0, null, false, false, "", ql);
    a2._reactRootContainer = g2;
    a2[uf] = g2.current;
    sf(8 === a2.nodeType ? a2.parentNode : a2);
    Sk();
    return g2;
  }
  for (; e2 = a2.lastChild; )
    a2.removeChild(e2);
  if ("function" === typeof d2) {
    var h2 = d2;
    d2 = function() {
      var a3 = hl(k2);
      h2.call(a3);
    };
  }
  var k2 = cl(a2, 0, false, null, null, false, false, "", ql);
  a2._reactRootContainer = k2;
  a2[uf] = k2.current;
  sf(8 === a2.nodeType ? a2.parentNode : a2);
  Sk(function() {
    gl(b2, k2, c2, d2);
  });
  return k2;
}
function sl(a2, b2, c2, d2, e2) {
  var f2 = c2._reactRootContainer;
  if (f2) {
    var g2 = f2;
    if ("function" === typeof e2) {
      var h2 = e2;
      e2 = function() {
        var a3 = hl(g2);
        h2.call(a3);
      };
    }
    gl(b2, g2, a2, e2);
  } else
    g2 = rl(c2, b2, a2, e2, d2);
  return hl(g2);
}
Ec = function(a2) {
  switch (a2.tag) {
    case 3:
      var b2 = a2.stateNode;
      if (b2.current.memoizedState.isDehydrated) {
        var c2 = tc(b2.pendingLanes);
        0 !== c2 && (Cc(b2, c2 | 1), Ek(b2, B$1()), 0 === (K & 6) && (Hj = B$1() + 500, jg()));
      }
      break;
    case 13:
      Sk(function() {
        var b3 = Zg(a2, 1);
        if (null !== b3) {
          var c3 = L$1();
          mh(b3, a2, 1, c3);
        }
      }), jl(a2, 1);
  }
};
Fc = function(a2) {
  if (13 === a2.tag) {
    var b2 = Zg(a2, 134217728);
    if (null !== b2) {
      var c2 = L$1();
      mh(b2, a2, 134217728, c2);
    }
    jl(a2, 134217728);
  }
};
Gc = function(a2) {
  if (13 === a2.tag) {
    var b2 = lh(a2), c2 = Zg(a2, b2);
    if (null !== c2) {
      var d2 = L$1();
      mh(c2, a2, b2, d2);
    }
    jl(a2, b2);
  }
};
Hc = function() {
  return C;
};
Ic = function(a2, b2) {
  var c2 = C;
  try {
    return C = a2, b2();
  } finally {
    C = c2;
  }
};
yb = function(a2, b2, c2) {
  switch (b2) {
    case "input":
      bb(a2, c2);
      b2 = c2.name;
      if ("radio" === c2.type && null != b2) {
        for (c2 = a2; c2.parentNode; )
          c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c2.length; b2++) {
          var d2 = c2[b2];
          if (d2 !== a2 && d2.form === a2.form) {
            var e2 = Db(d2);
            if (!e2)
              throw Error(p$5(90));
            Wa(d2);
            bb(d2, e2);
          }
        }
      }
      break;
    case "textarea":
      ib(a2, c2);
      break;
    case "select":
      b2 = c2.value, null != b2 && fb(a2, !!c2.multiple, b2, false);
  }
};
Gb = Rk;
Hb = Sk;
var tl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Rk] }, ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
  a2 = Zb(a2);
  return null === a2 ? null : a2.stateNode;
}, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wl.isDisabled && wl.supportsFiber)
    try {
      kc = wl.inject(vl), lc = wl;
    } catch (a2) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
reactDom_production_min.createPortal = function(a2, b2) {
  var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!ol(b2))
    throw Error(p$5(200));
  return dl(a2, b2, null, c2);
};
reactDom_production_min.createRoot = function(a2, b2) {
  if (!ol(a2))
    throw Error(p$5(299));
  var c2 = false, d2 = "", e2 = ll;
  null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d2 = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e2 = b2.onRecoverableError));
  b2 = cl(a2, 1, false, null, null, c2, false, d2, e2);
  a2[uf] = b2.current;
  sf(8 === a2.nodeType ? a2.parentNode : a2);
  return new ml(b2);
};
reactDom_production_min.findDOMNode = function(a2) {
  if (null == a2)
    return null;
  if (1 === a2.nodeType)
    return a2;
  var b2 = a2._reactInternals;
  if (void 0 === b2) {
    if ("function" === typeof a2.render)
      throw Error(p$5(188));
    a2 = Object.keys(a2).join(",");
    throw Error(p$5(268, a2));
  }
  a2 = Zb(b2);
  a2 = null === a2 ? null : a2.stateNode;
  return a2;
};
reactDom_production_min.flushSync = function(a2) {
  return Sk(a2);
};
reactDom_production_min.hydrate = function(a2, b2, c2) {
  if (!pl(b2))
    throw Error(p$5(200));
  return sl(null, a2, b2, true, c2);
};
reactDom_production_min.hydrateRoot = function(a2, b2, c2) {
  if (!ol(a2))
    throw Error(p$5(405));
  var d2 = null != c2 && c2.hydratedSources || null, e2 = false, f2 = "", g2 = ll;
  null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e2 = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
  b2 = fl(b2, null, a2, 1, null != c2 ? c2 : null, e2, false, f2, g2);
  a2[uf] = b2.current;
  sf(a2);
  if (d2)
    for (a2 = 0; a2 < d2.length; a2++)
      c2 = d2[a2], e2 = c2._getVersion, e2 = e2(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e2] : b2.mutableSourceEagerHydrationData.push(
        c2,
        e2
      );
  return new nl(b2);
};
reactDom_production_min.render = function(a2, b2, c2) {
  if (!pl(b2))
    throw Error(p$5(200));
  return sl(null, a2, b2, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a2) {
  if (!pl(a2))
    throw Error(p$5(40));
  return a2._reactRootContainer ? (Sk(function() {
    sl(null, null, a2, false, function() {
      a2._reactRootContainer = null;
      a2[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Rk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a2, b2, c2, d2) {
  if (!pl(c2))
    throw Error(p$5(200));
  if (null == a2 || void 0 === a2._reactInternals)
    throw Error(p$5(38));
  return sl(a2, b2, c2, false, d2);
};
reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";
(function(module) {
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    module.exports = reactDom_production_min;
  }
})(reactDom);
var createRoot;
var m$4 = reactDomExports;
{
  createRoot = m$4.createRoot;
  m$4.hydrateRoot;
}
/**
 * @remix-run/router v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$4() {
  _extends$4 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4.apply(this, arguments);
}
var Action;
(function(Action2) {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
})(Action || (Action = {}));
const PopStateEventType = "popstate";
function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createBrowserLocation(window2, globalHistory) {
    let {
      pathname,
      search,
      hash
    } = window2.location;
    return createLocation(
      "",
      {
        pathname,
        search,
        hash
      },
      // state defaults to `null` because `window.history.state` does
      globalHistory.state && globalHistory.state.usr || null,
      globalHistory.state && globalHistory.state.key || "default"
    );
  }
  function createBrowserHref(window2, to) {
    return typeof to === "string" ? to : createPath(to);
  }
  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
function invariant$v(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
function getHistoryState(location, index) {
  return {
    usr: location.state,
    key: location.key,
    idx: index
  };
}
function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }
  let location = _extends$4({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });
  return location;
}
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }
  let {
    window: window2 = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window2.history;
  let action = Action.Pop;
  let listener = null;
  let index = getIndex();
  if (index == null) {
    index = 0;
    globalHistory.replaceState(_extends$4({}, globalHistory.state, {
      idx: index
    }), "");
  }
  function getIndex() {
    let state = globalHistory.state || {
      idx: null
    };
    return state.idx;
  }
  function handlePop() {
    action = Action.Pop;
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;
    if (listener) {
      listener({
        action,
        location: history.location,
        delta
      });
    }
  }
  function push(to, state) {
    action = Action.Push;
    let location = createLocation(history.location, to, state);
    if (validateLocation)
      validateLocation(location, to);
    index = getIndex() + 1;
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      window2.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 1
      });
    }
  }
  function replace2(to, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to, state);
    if (validateLocation)
      validateLocation(location, to);
    index = getIndex();
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 0
      });
    }
  }
  function createURL(to) {
    let base = window2.location.origin !== "null" ? window2.location.origin : window2.location.href;
    let href = typeof to === "string" ? to : createPath(to);
    invariant$v(base, "No window.location.(origin|href) available to create URL for href: " + href);
    return new URL(href, base);
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window2, globalHistory);
    },
    listen(fn2) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window2.addEventListener(PopStateEventType, handlePop);
      listener = fn2;
      return () => {
        window2.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to) {
      return createHref(window2, to);
    },
    createURL,
    encodeLocation(to) {
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },
    push,
    replace: replace2,
    go(n2) {
      return globalHistory.go(n2);
    }
  };
  return history;
}
var ResultType;
(function(ResultType2) {
  ResultType2["data"] = "data";
  ResultType2["deferred"] = "deferred";
  ResultType2["redirect"] = "redirect";
  ResultType2["error"] = "error";
})(ResultType || (ResultType = {}));
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i2 = 0; matches == null && i2 < branches.length; ++i2) {
    matches = matchRouteBranch(
      branches[i2],
      // Incoming pathnames are generally encoded from either window.location
      // or from router.navigate, but we want to match against the unencoded
      // paths in the route definitions.  Memory router locations won't be
      // encoded here but there also shouldn't be anything to decode so this
      // should be a safe operation.  This avoids needing matchRoutes to be
      // history-aware.
      safelyDecodeURI(pathname)
    );
  }
  return matches;
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === void 0 ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant$v(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant$v(
        // Our types know better, but runtime JS may not!
        // @ts-expect-error
        route.index !== true,
        "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')
      );
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  routes.forEach((route, index) => {
    var _route$path;
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded);
      }
    }
  });
  return branches;
}
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0)
    return [];
  let [first, ...rest] = segments;
  let isOptional = first.endsWith("?");
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  result.push(...restExploded.map((subpath) => subpath === "" ? required : [required, subpath].join("/")));
  if (isOptional) {
    result.push(...restExploded);
  }
  return result.map((exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
  branches.sort((a2, b2) => a2.score !== b2.score ? b2.score - a2.score : compareIndexes(a2.routesMeta.map((meta) => meta.childrenIndex), b2.routesMeta.map((meta) => meta.childrenIndex)));
}
const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = (s2) => s2 === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s2) => !isSplat(s2)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a2, b2) {
  let siblings = a2.length === b2.length && a2.slice(0, -1).every((n2, i2) => n2 === b2[i2]);
  return siblings ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a2[a2.length - 1] - b2[b2.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i2 = 0; i2 < routesMeta.length; ++i2) {
    let meta = routesMeta[i2];
    let end = i2 === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match)
      return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match)
    return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index) => {
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (_2, paramName) => {
    paramNames.push(paramName);
    return "/([^\\/]+)";
  });
  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (end) {
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    regexpSource += "(?:(?=\\/|$))";
  } else
    ;
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, paramNames];
}
function safelyDecodeURI(value) {
  try {
    return decodeURI(value);
  } catch (error) {
    warning(false, 'The URL path "' + value + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + error + ")."));
    return value;
  }
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    warning(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ")."));
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e2) {
    }
  }
}
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1)
        segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  let to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends$4({}, toArg);
    invariant$v(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant$v(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant$v(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  if (isPathRelative || toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
const normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
const normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
const validMutationMethodsArr = ["post", "put", "patch", "delete"];
["get", ...validMutationMethodsArr];
/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$3() {
  _extends$3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3.apply(this, arguments);
}
function isPolyfill(x2, y2) {
  return x2 === y2 && (x2 !== 0 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
}
const is = typeof Object.is === "function" ? Object.is : isPolyfill;
const {
  useState,
  useEffect,
  useLayoutEffect,
  useDebugValue
} = React$7;
function useSyncExternalStore$2(subscribe, getSnapshot, getServerSnapshot) {
  const value = getSnapshot();
  const [{
    inst
  }, forceUpdate] = useState({
    inst: {
      value,
      getSnapshot
    }
  });
  useLayoutEffect(() => {
    inst.value = value;
    inst.getSnapshot = getSnapshot;
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({
        inst
      });
    }
  }, [subscribe, value, getSnapshot]);
  useEffect(() => {
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({
        inst
      });
    }
    const handleStoreChange = () => {
      if (checkIfSnapshotChanged(inst)) {
        forceUpdate({
          inst
        });
      }
    };
    return subscribe(handleStoreChange);
  }, [subscribe]);
  useDebugValue(value);
  return value;
}
function checkIfSnapshotChanged(inst) {
  const latestGetSnapshot = inst.getSnapshot;
  const prevValue = inst.value;
  try {
    const nextValue = latestGetSnapshot();
    return !is(prevValue, nextValue);
  } catch (error) {
    return true;
  }
}
function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
  return getSnapshot();
}
const canUseDOM$1 = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
const isServerEnvironment = !canUseDOM$1;
const shim$1 = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore$2;
"useSyncExternalStore" in React$7 ? ((module) => module.useSyncExternalStore)(React$7) : shim$1;
const DataRouterContext = /* @__PURE__ */ reactExports.createContext(null);
const DataRouterStateContext = /* @__PURE__ */ reactExports.createContext(null);
const NavigationContext = /* @__PURE__ */ reactExports.createContext(null);
const LocationContext = /* @__PURE__ */ reactExports.createContext(null);
const RouteContext = /* @__PURE__ */ reactExports.createContext({
  outlet: null,
  matches: []
});
const RouteErrorContext = /* @__PURE__ */ reactExports.createContext(null);
function useHref(to, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ? invariant$v(false) : void 0;
  let {
    basename,
    navigator: navigator2
  } = reactExports.useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to, {
    relative
  });
  let joinedPathname = pathname;
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
  }
  return navigator2.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
function useInRouterContext() {
  return reactExports.useContext(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? invariant$v(false) : void 0;
  return reactExports.useContext(LocationContext).location;
}
function useNavigate() {
  !useInRouterContext() ? invariant$v(false) : void 0;
  let {
    basename,
    navigator: navigator2
  } = reactExports.useContext(NavigationContext);
  let {
    matches
  } = reactExports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map((match) => match.pathnameBase));
  let activeRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    activeRef.current = true;
  });
  let navigate = reactExports.useCallback(function(to, options) {
    if (options === void 0) {
      options = {};
    }
    if (!activeRef.current)
      return;
    if (typeof to === "number") {
      navigator2.go(to);
      return;
    }
    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
    if (basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    (!!options.replace ? navigator2.replace : navigator2.push)(path, options.state, options);
  }, [basename, navigator2, routePathnamesJson, locationPathname]);
  return navigate;
}
const OutletContext = /* @__PURE__ */ reactExports.createContext(null);
function useOutlet(context) {
  let outlet = reactExports.useContext(RouteContext).outlet;
  if (outlet) {
    return /* @__PURE__ */ reactExports.createElement(OutletContext.Provider, {
      value: context
    }, outlet);
  }
  return outlet;
}
function useResolvedPath(to, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    matches
  } = reactExports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map((match) => match.pathnameBase));
  return reactExports.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}
function useRoutes(routes, locationArg) {
  !useInRouterContext() ? invariant$v(false) : void 0;
  let {
    navigator: navigator2
  } = reactExports.useContext(NavigationContext);
  let dataRouterStateContext = reactExports.useContext(DataRouterStateContext);
  let {
    matches: parentMatches
  } = reactExports.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  routeMatch && routeMatch.route;
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant$v(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes(routes, {
    pathname: remainingPathname
  });
  let renderedMatches = _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([
      parentPathnameBase,
      // Re-encode pathnames that were decoded inside matchRoutes
      navigator2.encodeLocation ? navigator2.encodeLocation(match.pathname).pathname : match.pathname
    ]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
      parentPathnameBase,
      // Re-encode pathnames that were decoded inside matchRoutes
      navigator2.encodeLocation ? navigator2.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
    ])
  })), parentMatches, dataRouterStateContext || void 0);
  if (locationArg && renderedMatches) {
    return /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
      value: {
        location: _extends$3({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: Action.Pop
      }
    }, renderedMatches);
  }
  return renderedMatches;
}
function DefaultErrorElement() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let devInfo = null;
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ reactExports.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /* @__PURE__ */ reactExports.createElement("pre", {
    style: preStyles
  }, stack) : null, devInfo);
}
class RenderErrorBoundary extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location) {
      return {
        error: props.error,
        location: props.location
      };
    }
    return {
      error: props.error || state.error,
      location: state.location
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ reactExports.createElement(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref;
  let dataRouterContext = reactExports.useContext(DataRouterContext);
  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && match.route.errorElement) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (matches == null) {
    if (dataRouterState != null && dataRouterState.errors) {
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;
  let errors = dataRouterState == null ? void 0 : dataRouterState.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex((m2) => m2.route.id && (errors == null ? void 0 : errors[m2.route.id]));
    !(errorIndex >= 0) ? invariant$v(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }
  return renderedMatches.reduceRight((outlet, match, index) => {
    let error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null;
    let errorElement = dataRouterState ? match.route.errorElement || /* @__PURE__ */ reactExports.createElement(DefaultErrorElement, null) : null;
    let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
    let getChildren = () => /* @__PURE__ */ reactExports.createElement(RenderedRoute, {
      match,
      routeContext: {
        outlet,
        matches: matches2
      }
    }, error ? errorElement : match.route.element !== void 0 ? match.route.element : outlet);
    return dataRouterState && (match.route.errorElement || index === 0) ? /* @__PURE__ */ reactExports.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      component: errorElement,
      error,
      children: getChildren(),
      routeContext: {
        outlet: null,
        matches: matches2
      }
    }) : getChildren();
  }, null);
}
var DataRouterHook$1;
(function(DataRouterHook2) {
  DataRouterHook2["UseBlocker"] = "useBlocker";
  DataRouterHook2["UseRevalidator"] = "useRevalidator";
})(DataRouterHook$1 || (DataRouterHook$1 = {}));
var DataRouterStateHook$1;
(function(DataRouterStateHook2) {
  DataRouterStateHook2["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook2["UseActionData"] = "useActionData";
  DataRouterStateHook2["UseRouteError"] = "useRouteError";
  DataRouterStateHook2["UseNavigation"] = "useNavigation";
  DataRouterStateHook2["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook2["UseMatches"] = "useMatches";
  DataRouterStateHook2["UseRevalidator"] = "useRevalidator";
})(DataRouterStateHook$1 || (DataRouterStateHook$1 = {}));
function useDataRouterState(hookName) {
  let state = reactExports.useContext(DataRouterStateContext);
  !state ? invariant$v(false) : void 0;
  return state;
}
function useRouteContext(hookName) {
  let route = reactExports.useContext(RouteContext);
  !route ? invariant$v(false) : void 0;
  return route;
}
function useCurrentRouteId(hookName) {
  let route = useRouteContext();
  let thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id ? invariant$v(false) : void 0;
  return thisRoute.route.id;
}
function useRouteError() {
  var _state$errors;
  let error = reactExports.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook$1.UseRouteError);
  let routeId = useCurrentRouteId(DataRouterStateHook$1.UseRouteError);
  if (error) {
    return error;
  }
  return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
function Outlet(props) {
  return useOutlet(props.context);
}
function Router(_ref4) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator: navigator2,
    static: staticProp = false
  } = _ref4;
  !!useInRouterContext() ? invariant$v(false) : void 0;
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = reactExports.useMemo(() => ({
    basename,
    navigator: navigator2,
    static: staticProp
  }), [basename, navigator2, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let location = reactExports.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key
    };
  }, [basename, pathname, search, hash, state, key]);
  if (location == null) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
    children,
    value: {
      location,
      navigationType
    }
  }));
}
var AwaitRenderStatus;
(function(AwaitRenderStatus2) {
  AwaitRenderStatus2[AwaitRenderStatus2["pending"] = 0] = "pending";
  AwaitRenderStatus2[AwaitRenderStatus2["success"] = 1] = "success";
  AwaitRenderStatus2[AwaitRenderStatus2["error"] = 2] = "error";
})(AwaitRenderStatus || (AwaitRenderStatus = {}));
new Promise(() => {
});
/**
 * React Router DOM v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && // Ignore everything but left clicks
  (!target || target === "_self") && // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event);
}
const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"];
function BrowserRouter(_ref) {
  let {
    basename,
    children,
    window: window2
  } = _ref;
  let historyRef = reactExports.useRef();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({
      window: window2,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setState] = reactExports.useState({
    action: history.action,
    location: history.location
  });
  reactExports.useLayoutEffect(() => history.listen(setState), [history]);
  return /* @__PURE__ */ reactExports.createElement(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const Link = /* @__PURE__ */ reactExports.forwardRef(function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    relative,
    reloadDocument,
    replace: replace2,
    state,
    target,
    to,
    preventScrollReset
  } = _ref4, rest = _objectWithoutPropertiesLoose$1(_ref4, _excluded);
  let absoluteHref;
  let isExternal = false;
  if (isBrowser && typeof to === "string" && /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(to)) {
    absoluteHref = to;
    let currentUrl = new URL(window.location.href);
    let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
    if (targetUrl.origin === currentUrl.origin) {
      to = targetUrl.pathname + targetUrl.search + targetUrl.hash;
    } else {
      isExternal = true;
    }
  }
  let href = useHref(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace: replace2,
    state,
    target,
    preventScrollReset,
    relative
  });
  function handleClick(event) {
    if (onClick)
      onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ reactExports.createElement("a", _extends$2({}, rest, {
      href: absoluteHref || href,
      onClick: isExternal || reloadDocument ? onClick : handleClick,
      ref,
      target
    }))
  );
});
var DataRouterHook;
(function(DataRouterHook2) {
  DataRouterHook2["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook2["UseSubmitImpl"] = "useSubmitImpl";
  DataRouterHook2["UseFetcher"] = "useFetcher";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function(DataRouterStateHook2) {
  DataRouterStateHook2["UseFetchers"] = "useFetchers";
  DataRouterStateHook2["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to, {
    relative
  });
  return reactExports.useCallback((event) => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault();
      let replace2 = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
      navigate(to, {
        replace: replace2,
        state,
        preventScrollReset,
        relative
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative]);
}
var shimExports = {};
var shim = {
  get exports() {
    return shimExports;
  },
  set exports(v2) {
    shimExports = v2;
  }
};
var useSyncExternalStoreShim_production_min = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e$2 = reactExports;
function h$4(a2, b2) {
  return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var k$3 = "function" === typeof Object.is ? Object.is : h$4, l$3 = e$2.useState, m$3 = e$2.useEffect, n$4 = e$2.useLayoutEffect, p$4 = e$2.useDebugValue;
function q$4(a2, b2) {
  var d2 = b2(), f2 = l$3({ inst: { value: d2, getSnapshot: b2 } }), c2 = f2[0].inst, g2 = f2[1];
  n$4(function() {
    c2.value = d2;
    c2.getSnapshot = b2;
    r$3(c2) && g2({ inst: c2 });
  }, [a2, d2, b2]);
  m$3(function() {
    r$3(c2) && g2({ inst: c2 });
    return a2(function() {
      r$3(c2) && g2({ inst: c2 });
    });
  }, [a2]);
  p$4(d2);
  return d2;
}
function r$3(a2) {
  var b2 = a2.getSnapshot;
  a2 = a2.value;
  try {
    var d2 = b2();
    return !k$3(a2, d2);
  } catch (f2) {
    return true;
  }
}
function t$4(a2, b2) {
  return b2();
}
var u$3 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t$4 : q$4;
useSyncExternalStoreShim_production_min.useSyncExternalStore = void 0 !== e$2.useSyncExternalStore ? e$2.useSyncExternalStore : u$3;
(function(module) {
  {
    module.exports = useSyncExternalStoreShim_production_min;
  }
})(shim);
var withSelectorExports = {};
var withSelector = {
  get exports() {
    return withSelectorExports;
  },
  set exports(v2) {
    withSelectorExports = v2;
  }
};
var withSelector_production_min = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h$3 = reactExports, n$3 = shimExports;
function p$3(a2, b2) {
  return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var q$3 = "function" === typeof Object.is ? Object.is : p$3, r$2 = n$3.useSyncExternalStore, t$3 = h$3.useRef, u$2 = h$3.useEffect, v$3 = h$3.useMemo, w$2 = h$3.useDebugValue;
withSelector_production_min.useSyncExternalStoreWithSelector = function(a2, b2, e2, l2, g2) {
  var c2 = t$3(null);
  if (null === c2.current) {
    var f2 = { hasValue: false, value: null };
    c2.current = f2;
  } else
    f2 = c2.current;
  c2 = v$3(function() {
    function a3(a4) {
      if (!c3) {
        c3 = true;
        d3 = a4;
        a4 = l2(a4);
        if (void 0 !== g2 && f2.hasValue) {
          var b3 = f2.value;
          if (g2(b3, a4))
            return k2 = b3;
        }
        return k2 = a4;
      }
      b3 = k2;
      if (q$3(d3, a4))
        return b3;
      var e3 = l2(a4);
      if (void 0 !== g2 && g2(b3, e3))
        return b3;
      d3 = a4;
      return k2 = e3;
    }
    var c3 = false, d3, k2, m2 = void 0 === e2 ? null : e2;
    return [function() {
      return a3(b2());
    }, null === m2 ? void 0 : function() {
      return a3(m2());
    }];
  }, [b2, e2, l2, g2]);
  var d2 = r$2(a2, c2[0], c2[1]);
  u$2(function() {
    f2.hasValue = true;
    f2.value = d2;
  }, [d2]);
  w$2(d2);
  return d2;
};
(function(module) {
  {
    module.exports = withSelector_production_min;
  }
})(withSelector);
function defaultNoopBatch(callback) {
  callback();
}
let batch = defaultNoopBatch;
const setBatch = (newBatch) => batch = newBatch;
const getBatch = () => batch;
const ReactReduxContext = /* @__PURE__ */ reactExports.createContext(null);
function useReduxContext() {
  const contextValue = reactExports.useContext(ReactReduxContext);
  return contextValue;
}
const notInitialized = () => {
  throw new Error("uSES not initialized!");
};
let useSyncExternalStoreWithSelector = notInitialized;
const initializeUseSelector = (fn2) => {
  useSyncExternalStoreWithSelector = fn2;
};
const refEquality = (a2, b2) => a2 === b2;
function createSelectorHook(context = ReactReduxContext) {
  const useReduxContext$1 = context === ReactReduxContext ? useReduxContext : () => reactExports.useContext(context);
  return function useSelector2(selector, equalityFn = refEquality) {
    const {
      store,
      subscription,
      getServerState
    } = useReduxContext$1();
    const selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store.getState, getServerState || store.getState, selector, equalityFn);
    reactExports.useDebugValue(selectedState);
    return selectedState;
  };
}
const useSelector = /* @__PURE__ */ createSelectorHook();
var reactIsExports$1 = {};
var reactIs$2 = {
  get exports() {
    return reactIsExports$1;
  },
  set exports(v2) {
    reactIsExports$1 = v2;
  }
};
var reactIs_production_min$1 = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$2 = "function" === typeof Symbol && Symbol.for, c$2 = b$2 ? Symbol.for("react.element") : 60103, d$2 = b$2 ? Symbol.for("react.portal") : 60106, e$1 = b$2 ? Symbol.for("react.fragment") : 60107, f$2 = b$2 ? Symbol.for("react.strict_mode") : 60108, g$2 = b$2 ? Symbol.for("react.profiler") : 60114, h$2 = b$2 ? Symbol.for("react.provider") : 60109, k$2 = b$2 ? Symbol.for("react.context") : 60110, l$2 = b$2 ? Symbol.for("react.async_mode") : 60111, m$2 = b$2 ? Symbol.for("react.concurrent_mode") : 60111, n$2 = b$2 ? Symbol.for("react.forward_ref") : 60112, p$2 = b$2 ? Symbol.for("react.suspense") : 60113, q$2 = b$2 ? Symbol.for("react.suspense_list") : 60120, r$1 = b$2 ? Symbol.for("react.memo") : 60115, t$2 = b$2 ? Symbol.for("react.lazy") : 60116, v$2 = b$2 ? Symbol.for("react.block") : 60121, w$1 = b$2 ? Symbol.for("react.fundamental") : 60117, x$1 = b$2 ? Symbol.for("react.responder") : 60118, y$1 = b$2 ? Symbol.for("react.scope") : 60119;
function z$1(a2) {
  if ("object" === typeof a2 && null !== a2) {
    var u2 = a2.$$typeof;
    switch (u2) {
      case c$2:
        switch (a2 = a2.type, a2) {
          case l$2:
          case m$2:
          case e$1:
          case g$2:
          case f$2:
          case p$2:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k$2:
              case n$2:
              case t$2:
              case r$1:
              case h$2:
                return a2;
              default:
                return u2;
            }
        }
      case d$2:
        return u2;
    }
  }
}
function A$1(a2) {
  return z$1(a2) === m$2;
}
reactIs_production_min$1.AsyncMode = l$2;
reactIs_production_min$1.ConcurrentMode = m$2;
reactIs_production_min$1.ContextConsumer = k$2;
reactIs_production_min$1.ContextProvider = h$2;
reactIs_production_min$1.Element = c$2;
reactIs_production_min$1.ForwardRef = n$2;
reactIs_production_min$1.Fragment = e$1;
reactIs_production_min$1.Lazy = t$2;
reactIs_production_min$1.Memo = r$1;
reactIs_production_min$1.Portal = d$2;
reactIs_production_min$1.Profiler = g$2;
reactIs_production_min$1.StrictMode = f$2;
reactIs_production_min$1.Suspense = p$2;
reactIs_production_min$1.isAsyncMode = function(a2) {
  return A$1(a2) || z$1(a2) === l$2;
};
reactIs_production_min$1.isConcurrentMode = A$1;
reactIs_production_min$1.isContextConsumer = function(a2) {
  return z$1(a2) === k$2;
};
reactIs_production_min$1.isContextProvider = function(a2) {
  return z$1(a2) === h$2;
};
reactIs_production_min$1.isElement = function(a2) {
  return "object" === typeof a2 && null !== a2 && a2.$$typeof === c$2;
};
reactIs_production_min$1.isForwardRef = function(a2) {
  return z$1(a2) === n$2;
};
reactIs_production_min$1.isFragment = function(a2) {
  return z$1(a2) === e$1;
};
reactIs_production_min$1.isLazy = function(a2) {
  return z$1(a2) === t$2;
};
reactIs_production_min$1.isMemo = function(a2) {
  return z$1(a2) === r$1;
};
reactIs_production_min$1.isPortal = function(a2) {
  return z$1(a2) === d$2;
};
reactIs_production_min$1.isProfiler = function(a2) {
  return z$1(a2) === g$2;
};
reactIs_production_min$1.isStrictMode = function(a2) {
  return z$1(a2) === f$2;
};
reactIs_production_min$1.isSuspense = function(a2) {
  return z$1(a2) === p$2;
};
reactIs_production_min$1.isValidElementType = function(a2) {
  return "string" === typeof a2 || "function" === typeof a2 || a2 === e$1 || a2 === m$2 || a2 === g$2 || a2 === f$2 || a2 === p$2 || a2 === q$2 || "object" === typeof a2 && null !== a2 && (a2.$$typeof === t$2 || a2.$$typeof === r$1 || a2.$$typeof === h$2 || a2.$$typeof === k$2 || a2.$$typeof === n$2 || a2.$$typeof === w$1 || a2.$$typeof === x$1 || a2.$$typeof === y$1 || a2.$$typeof === v$2);
};
reactIs_production_min$1.typeOf = z$1;
(function(module) {
  {
    module.exports = reactIs_production_min$1;
  }
})(reactIs$2);
var reactIs$1 = reactIsExports$1;
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs$1.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs$1.Memo] = MEMO_STATICS;
var reactIsExports = {};
var reactIs = {
  get exports() {
    return reactIsExports;
  },
  set exports(v2) {
    reactIsExports = v2;
  }
};
var reactIs_production_min = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1 = Symbol.for("react.element"), c$1 = Symbol.for("react.portal"), d$1 = Symbol.for("react.fragment"), e = Symbol.for("react.strict_mode"), f$1 = Symbol.for("react.profiler"), g$1 = Symbol.for("react.provider"), h$1 = Symbol.for("react.context"), k$1 = Symbol.for("react.server_context"), l$1 = Symbol.for("react.forward_ref"), m$1 = Symbol.for("react.suspense"), n$1 = Symbol.for("react.suspense_list"), p$1 = Symbol.for("react.memo"), q$1 = Symbol.for("react.lazy"), t$1 = Symbol.for("react.offscreen"), u$1;
u$1 = Symbol.for("react.module.reference");
function v$1(a2) {
  if ("object" === typeof a2 && null !== a2) {
    var r2 = a2.$$typeof;
    switch (r2) {
      case b$1:
        switch (a2 = a2.type, a2) {
          case d$1:
          case f$1:
          case e:
          case m$1:
          case n$1:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k$1:
              case h$1:
              case l$1:
              case q$1:
              case p$1:
              case g$1:
                return a2;
              default:
                return r2;
            }
        }
      case c$1:
        return r2;
    }
  }
}
reactIs_production_min.ContextConsumer = h$1;
reactIs_production_min.ContextProvider = g$1;
reactIs_production_min.Element = b$1;
reactIs_production_min.ForwardRef = l$1;
reactIs_production_min.Fragment = d$1;
reactIs_production_min.Lazy = q$1;
reactIs_production_min.Memo = p$1;
reactIs_production_min.Portal = c$1;
reactIs_production_min.Profiler = f$1;
reactIs_production_min.StrictMode = e;
reactIs_production_min.Suspense = m$1;
reactIs_production_min.SuspenseList = n$1;
reactIs_production_min.isAsyncMode = function() {
  return false;
};
reactIs_production_min.isConcurrentMode = function() {
  return false;
};
reactIs_production_min.isContextConsumer = function(a2) {
  return v$1(a2) === h$1;
};
reactIs_production_min.isContextProvider = function(a2) {
  return v$1(a2) === g$1;
};
reactIs_production_min.isElement = function(a2) {
  return "object" === typeof a2 && null !== a2 && a2.$$typeof === b$1;
};
reactIs_production_min.isForwardRef = function(a2) {
  return v$1(a2) === l$1;
};
reactIs_production_min.isFragment = function(a2) {
  return v$1(a2) === d$1;
};
reactIs_production_min.isLazy = function(a2) {
  return v$1(a2) === q$1;
};
reactIs_production_min.isMemo = function(a2) {
  return v$1(a2) === p$1;
};
reactIs_production_min.isPortal = function(a2) {
  return v$1(a2) === c$1;
};
reactIs_production_min.isProfiler = function(a2) {
  return v$1(a2) === f$1;
};
reactIs_production_min.isStrictMode = function(a2) {
  return v$1(a2) === e;
};
reactIs_production_min.isSuspense = function(a2) {
  return v$1(a2) === m$1;
};
reactIs_production_min.isSuspenseList = function(a2) {
  return v$1(a2) === n$1;
};
reactIs_production_min.isValidElementType = function(a2) {
  return "string" === typeof a2 || "function" === typeof a2 || a2 === d$1 || a2 === f$1 || a2 === e || a2 === m$1 || a2 === n$1 || a2 === t$1 || "object" === typeof a2 && null !== a2 && (a2.$$typeof === q$1 || a2.$$typeof === p$1 || a2.$$typeof === g$1 || a2.$$typeof === h$1 || a2.$$typeof === l$1 || a2.$$typeof === u$1 || void 0 !== a2.getModuleId) ? true : false;
};
reactIs_production_min.typeOf = v$1;
(function(module) {
  {
    module.exports = reactIs_production_min;
  }
})(reactIs);
function createListenerCollection() {
  const batch2 = getBatch();
  let first = null;
  let last = null;
  return {
    clear() {
      first = null;
      last = null;
    },
    notify() {
      batch2(() => {
        let listener = first;
        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get() {
      let listeners = [];
      let listener = first;
      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }
      return listeners;
    },
    subscribe(callback) {
      let isSubscribed = true;
      let listener = last = {
        callback,
        next: null,
        prev: last
      };
      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }
      return function unsubscribe() {
        if (!isSubscribed || first === null)
          return;
        isSubscribed = false;
        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }
        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}
const nullListeners = {
  notify() {
  },
  get: () => []
};
function createSubscription(store, parentSub) {
  let unsubscribe;
  let listeners = nullListeners;
  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }
  function notifyNestedSubs() {
    listeners.notify();
  }
  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }
  function isSubscribed() {
    return Boolean(unsubscribe);
  }
  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }
  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = void 0;
      listeners.clear();
      listeners = nullListeners;
    }
  }
  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe,
    tryUnsubscribe,
    getListeners: () => listeners
  };
  return subscription;
}
const canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
const useIsomorphicLayoutEffect = canUseDOM ? reactExports.useLayoutEffect : reactExports.useEffect;
function Provider({
  store,
  context,
  children,
  serverState
}) {
  const contextValue = reactExports.useMemo(() => {
    const subscription = createSubscription(store);
    return {
      store,
      subscription,
      getServerState: serverState ? () => serverState : void 0
    };
  }, [store, serverState]);
  const previousState = reactExports.useMemo(() => store.getState(), [store]);
  useIsomorphicLayoutEffect(() => {
    const {
      subscription
    } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();
    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }
    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = void 0;
    };
  }, [contextValue, previousState]);
  const Context = context || ReactReduxContext;
  return /* @__PURE__ */ React$6.createElement(Context.Provider, {
    value: contextValue
  }, children);
}
function createStoreHook(context = ReactReduxContext) {
  const useReduxContext$1 = (
    // @ts-ignore
    context === ReactReduxContext ? useReduxContext : () => reactExports.useContext(context)
  );
  return function useStore2() {
    const {
      store
    } = useReduxContext$1();
    return store;
  };
}
const useStore = /* @__PURE__ */ createStoreHook();
function createDispatchHook(context = ReactReduxContext) {
  const useStore$1 = (
    // @ts-ignore
    context === ReactReduxContext ? useStore : createStoreHook(context)
  );
  return function useDispatch2() {
    const store = useStore$1();
    return store.dispatch;
  };
}
const useDispatch = /* @__PURE__ */ createDispatchHook();
initializeUseSelector(withSelectorExports.useSyncExternalStoreWithSelector);
setBatch(reactDomExports.unstable_batchedUpdates);
function n(n2) {
  for (var r2 = arguments.length, t2 = Array(r2 > 1 ? r2 - 1 : 0), e2 = 1; e2 < r2; e2++)
    t2[e2 - 1] = arguments[e2];
  throw Error("[Immer] minified error nr: " + n2 + (t2.length ? " " + t2.map(function(n3) {
    return "'" + n3 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function r(n2) {
  return !!n2 && !!n2[Q];
}
function t(n2) {
  var r2;
  return !!n2 && (function(n3) {
    if (!n3 || "object" != typeof n3)
      return false;
    var r3 = Object.getPrototypeOf(n3);
    if (null === r3)
      return true;
    var t2 = Object.hasOwnProperty.call(r3, "constructor") && r3.constructor;
    return t2 === Object || "function" == typeof t2 && Function.toString.call(t2) === Z;
  }(n2) || Array.isArray(n2) || !!n2[L] || !!(null === (r2 = n2.constructor) || void 0 === r2 ? void 0 : r2[L]) || s(n2) || v(n2));
}
function i(n2, r2, t2) {
  void 0 === t2 && (t2 = false), 0 === o(n2) ? (t2 ? Object.keys : nn)(n2).forEach(function(e2) {
    t2 && "symbol" == typeof e2 || r2(e2, n2[e2], n2);
  }) : n2.forEach(function(t3, e2) {
    return r2(e2, t3, n2);
  });
}
function o(n2) {
  var r2 = n2[Q];
  return r2 ? r2.i > 3 ? r2.i - 4 : r2.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v(n2) ? 3 : 0;
}
function u(n2, r2) {
  return 2 === o(n2) ? n2.has(r2) : Object.prototype.hasOwnProperty.call(n2, r2);
}
function a(n2, r2) {
  return 2 === o(n2) ? n2.get(r2) : n2[r2];
}
function f(n2, r2, t2) {
  var e2 = o(n2);
  2 === e2 ? n2.set(r2, t2) : 3 === e2 ? n2.add(t2) : n2[r2] = t2;
}
function c(n2, r2) {
  return n2 === r2 ? 0 !== n2 || 1 / n2 == 1 / r2 : n2 != n2 && r2 != r2;
}
function s(n2) {
  return X && n2 instanceof Map;
}
function v(n2) {
  return q && n2 instanceof Set;
}
function p(n2) {
  return n2.o || n2.t;
}
function l(n2) {
  if (Array.isArray(n2))
    return Array.prototype.slice.call(n2);
  var r2 = rn(n2);
  delete r2[Q];
  for (var t2 = nn(r2), e2 = 0; e2 < t2.length; e2++) {
    var i2 = t2[e2], o2 = r2[i2];
    false === o2.writable && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r2[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
  }
  return Object.create(Object.getPrototypeOf(n2), r2);
}
function d(n2, e2) {
  return void 0 === e2 && (e2 = false), y(n2) || r(n2) || !t(n2) || (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h), Object.freeze(n2), e2 && i(n2, function(n3, r2) {
    return d(r2, true);
  }, true)), n2;
}
function h() {
  n(2);
}
function y(n2) {
  return null == n2 || "object" != typeof n2 || Object.isFrozen(n2);
}
function b(r2) {
  var t2 = tn[r2];
  return t2 || n(18, r2), t2;
}
function m(n2, r2) {
  tn[n2] || (tn[n2] = r2);
}
function _() {
  return U;
}
function j(n2, r2) {
  r2 && (b("Patches"), n2.u = [], n2.s = [], n2.v = r2);
}
function O(n2) {
  g(n2), n2.p.forEach(S), n2.p = null;
}
function g(n2) {
  n2 === U && (U = n2.l);
}
function w(n2) {
  return U = { p: [], l: U, h: n2, m: true, _: 0 };
}
function S(n2) {
  var r2 = n2[Q];
  0 === r2.i || 1 === r2.i ? r2.j() : r2.O = true;
}
function P(r2, e2) {
  e2._ = e2.p.length;
  var i2 = e2.p[0], o2 = void 0 !== r2 && r2 !== i2;
  return e2.h.g || b("ES5").S(e2, r2, o2), o2 ? (i2[Q].P && (O(e2), n(4)), t(r2) && (r2 = M(e2, r2), e2.l || x(e2, r2)), e2.u && b("Patches").M(i2[Q].t, r2, e2.u, e2.s)) : r2 = M(e2, i2, []), O(e2), e2.u && e2.v(e2.u, e2.s), r2 !== H ? r2 : void 0;
}
function M(n2, r2, t2) {
  if (y(r2))
    return r2;
  var e2 = r2[Q];
  if (!e2)
    return i(r2, function(i2, o3) {
      return A(n2, e2, r2, i2, o3, t2);
    }, true), r2;
  if (e2.A !== n2)
    return r2;
  if (!e2.P)
    return x(n2, e2.t, true), e2.t;
  if (!e2.I) {
    e2.I = true, e2.A._--;
    var o2 = 4 === e2.i || 5 === e2.i ? e2.o = l(e2.k) : e2.o, u2 = o2, a2 = false;
    3 === e2.i && (u2 = new Set(o2), o2.clear(), a2 = true), i(u2, function(r3, i2) {
      return A(n2, e2, o2, r3, i2, t2, a2);
    }), x(n2, o2, false), t2 && n2.u && b("Patches").N(e2, t2, n2.u, n2.s);
  }
  return e2.o;
}
function A(e2, i2, o2, a2, c2, s2, v2) {
  if (r(c2)) {
    var p2 = M(e2, c2, s2 && i2 && 3 !== i2.i && !u(i2.R, a2) ? s2.concat(a2) : void 0);
    if (f(o2, a2, p2), !r(p2))
      return;
    e2.m = false;
  } else
    v2 && o2.add(c2);
  if (t(c2) && !y(c2)) {
    if (!e2.h.D && e2._ < 1)
      return;
    M(e2, c2), i2 && i2.A.l || x(e2, c2);
  }
}
function x(n2, r2, t2) {
  void 0 === t2 && (t2 = false), !n2.l && n2.h.D && n2.m && d(r2, t2);
}
function z(n2, r2) {
  var t2 = n2[Q];
  return (t2 ? p(t2) : n2)[r2];
}
function I(n2, r2) {
  if (r2 in n2)
    for (var t2 = Object.getPrototypeOf(n2); t2; ) {
      var e2 = Object.getOwnPropertyDescriptor(t2, r2);
      if (e2)
        return e2;
      t2 = Object.getPrototypeOf(t2);
    }
}
function k(n2) {
  n2.P || (n2.P = true, n2.l && k(n2.l));
}
function E(n2) {
  n2.o || (n2.o = l(n2.t));
}
function N(n2, r2, t2) {
  var e2 = s(r2) ? b("MapSet").F(r2, t2) : v(r2) ? b("MapSet").T(r2, t2) : n2.g ? function(n3, r3) {
    var t3 = Array.isArray(n3), e3 = { i: t3 ? 1 : 0, A: r3 ? r3.A : _(), P: false, I: false, R: {}, l: r3, t: n3, k: null, o: null, j: null, C: false }, i2 = e3, o2 = en;
    t3 && (i2 = [e3], o2 = on);
    var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f2 = u2.proxy;
    return e3.k = f2, e3.j = a2, f2;
  }(r2, t2) : b("ES5").J(r2, t2);
  return (t2 ? t2.A : _()).p.push(e2), e2;
}
function R(e2) {
  return r(e2) || n(22, e2), function n2(r2) {
    if (!t(r2))
      return r2;
    var e3, u2 = r2[Q], c2 = o(r2);
    if (u2) {
      if (!u2.P && (u2.i < 4 || !b("ES5").K(u2)))
        return u2.t;
      u2.I = true, e3 = D(r2, c2), u2.I = false;
    } else
      e3 = D(r2, c2);
    return i(e3, function(r3, t2) {
      u2 && a(u2.t, r3) === t2 || f(e3, r3, n2(t2));
    }), 3 === c2 ? new Set(e3) : e3;
  }(e2);
}
function D(n2, r2) {
  switch (r2) {
    case 2:
      return new Map(n2);
    case 3:
      return Array.from(n2);
  }
  return l(n2);
}
function F() {
  function t2(n2, r2) {
    var t3 = s2[n2];
    return t3 ? t3.enumerable = r2 : s2[n2] = t3 = { configurable: true, enumerable: r2, get: function() {
      var r3 = this[Q];
      return en.get(r3, n2);
    }, set: function(r3) {
      var t4 = this[Q];
      en.set(t4, n2, r3);
    } }, t3;
  }
  function e2(n2) {
    for (var r2 = n2.length - 1; r2 >= 0; r2--) {
      var t3 = n2[r2][Q];
      if (!t3.P)
        switch (t3.i) {
          case 5:
            a2(t3) && k(t3);
            break;
          case 4:
            o2(t3) && k(t3);
        }
    }
  }
  function o2(n2) {
    for (var r2 = n2.t, t3 = n2.k, e3 = nn(t3), i2 = e3.length - 1; i2 >= 0; i2--) {
      var o3 = e3[i2];
      if (o3 !== Q) {
        var a3 = r2[o3];
        if (void 0 === a3 && !u(r2, o3))
          return true;
        var f2 = t3[o3], s3 = f2 && f2[Q];
        if (s3 ? s3.t !== a3 : !c(f2, a3))
          return true;
      }
    }
    var v2 = !!r2[Q];
    return e3.length !== nn(r2).length + (v2 ? 0 : 1);
  }
  function a2(n2) {
    var r2 = n2.k;
    if (r2.length !== n2.t.length)
      return true;
    var t3 = Object.getOwnPropertyDescriptor(r2, r2.length - 1);
    if (t3 && !t3.get)
      return true;
    for (var e3 = 0; e3 < r2.length; e3++)
      if (!r2.hasOwnProperty(e3))
        return true;
    return false;
  }
  var s2 = {};
  m("ES5", { J: function(n2, r2) {
    var e3 = Array.isArray(n2), i2 = function(n3, r3) {
      if (n3) {
        for (var e4 = Array(r3.length), i3 = 0; i3 < r3.length; i3++)
          Object.defineProperty(e4, "" + i3, t2(i3, true));
        return e4;
      }
      var o4 = rn(r3);
      delete o4[Q];
      for (var u2 = nn(o4), a3 = 0; a3 < u2.length; a3++) {
        var f2 = u2[a3];
        o4[f2] = t2(f2, n3 || !!o4[f2].enumerable);
      }
      return Object.create(Object.getPrototypeOf(r3), o4);
    }(e3, n2), o3 = { i: e3 ? 5 : 4, A: r2 ? r2.A : _(), P: false, I: false, R: {}, l: r2, t: n2, k: i2, o: null, O: false, C: false };
    return Object.defineProperty(i2, Q, { value: o3, writable: true }), i2;
  }, S: function(n2, t3, o3) {
    o3 ? r(t3) && t3[Q].A === n2 && e2(n2.p) : (n2.u && function n3(r2) {
      if (r2 && "object" == typeof r2) {
        var t4 = r2[Q];
        if (t4) {
          var e3 = t4.t, o4 = t4.k, f2 = t4.R, c2 = t4.i;
          if (4 === c2)
            i(o4, function(r3) {
              r3 !== Q && (void 0 !== e3[r3] || u(e3, r3) ? f2[r3] || n3(o4[r3]) : (f2[r3] = true, k(t4)));
            }), i(e3, function(n4) {
              void 0 !== o4[n4] || u(o4, n4) || (f2[n4] = false, k(t4));
            });
          else if (5 === c2) {
            if (a2(t4) && (k(t4), f2.length = true), o4.length < e3.length)
              for (var s3 = o4.length; s3 < e3.length; s3++)
                f2[s3] = false;
            else
              for (var v2 = e3.length; v2 < o4.length; v2++)
                f2[v2] = true;
            for (var p2 = Math.min(o4.length, e3.length), l2 = 0; l2 < p2; l2++)
              o4.hasOwnProperty(l2) || (f2[l2] = true), void 0 === f2[l2] && n3(o4[l2]);
          }
        }
      }
    }(n2.p[0]), e2(n2.p));
  }, K: function(n2) {
    return 4 === n2.i ? o2(n2) : a2(n2);
  } });
}
var G, U, W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"), X = "undefined" != typeof Map, q = "undefined" != typeof Set, B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect, H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G), L = W ? Symbol.for("immer-draftable") : "__$immer_draftable", Q = W ? Symbol.for("immer-state") : "__$immer_state", Z = "" + Object.prototype.constructor, nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n2) {
  return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
} : Object.getOwnPropertyNames, rn = Object.getOwnPropertyDescriptors || function(n2) {
  var r2 = {};
  return nn(n2).forEach(function(t2) {
    r2[t2] = Object.getOwnPropertyDescriptor(n2, t2);
  }), r2;
}, tn = {}, en = { get: function(n2, r2) {
  if (r2 === Q)
    return n2;
  var e2 = p(n2);
  if (!u(e2, r2))
    return function(n3, r3, t2) {
      var e3, i3 = I(r3, t2);
      return i3 ? "value" in i3 ? i3.value : null === (e3 = i3.get) || void 0 === e3 ? void 0 : e3.call(n3.k) : void 0;
    }(n2, e2, r2);
  var i2 = e2[r2];
  return n2.I || !t(i2) ? i2 : i2 === z(n2.t, r2) ? (E(n2), n2.o[r2] = N(n2.A.h, i2, n2)) : i2;
}, has: function(n2, r2) {
  return r2 in p(n2);
}, ownKeys: function(n2) {
  return Reflect.ownKeys(p(n2));
}, set: function(n2, r2, t2) {
  var e2 = I(p(n2), r2);
  if (null == e2 ? void 0 : e2.set)
    return e2.set.call(n2.k, t2), true;
  if (!n2.P) {
    var i2 = z(p(n2), r2), o2 = null == i2 ? void 0 : i2[Q];
    if (o2 && o2.t === t2)
      return n2.o[r2] = t2, n2.R[r2] = false, true;
    if (c(t2, i2) && (void 0 !== t2 || u(n2.t, r2)))
      return true;
    E(n2), k(n2);
  }
  return n2.o[r2] === t2 && (void 0 !== t2 || r2 in n2.o) || Number.isNaN(t2) && Number.isNaN(n2.o[r2]) || (n2.o[r2] = t2, n2.R[r2] = true), true;
}, deleteProperty: function(n2, r2) {
  return void 0 !== z(n2.t, r2) || r2 in n2.t ? (n2.R[r2] = false, E(n2), k(n2)) : delete n2.R[r2], n2.o && delete n2.o[r2], true;
}, getOwnPropertyDescriptor: function(n2, r2) {
  var t2 = p(n2), e2 = Reflect.getOwnPropertyDescriptor(t2, r2);
  return e2 ? { writable: true, configurable: 1 !== n2.i || "length" !== r2, enumerable: e2.enumerable, value: t2[r2] } : e2;
}, defineProperty: function() {
  n(11);
}, getPrototypeOf: function(n2) {
  return Object.getPrototypeOf(n2.t);
}, setPrototypeOf: function() {
  n(12);
} }, on = {};
i(en, function(n2, r2) {
  on[n2] = function() {
    return arguments[0] = arguments[0][0], r2.apply(this, arguments);
  };
}), on.deleteProperty = function(r2, t2) {
  return on.set.call(this, r2, t2, void 0);
}, on.set = function(r2, t2, e2) {
  return en.set.call(this, r2[0], t2, e2, r2[0]);
};
var un = function() {
  function e2(r2) {
    var e3 = this;
    this.g = B, this.D = true, this.produce = function(r3, i3, o2) {
      if ("function" == typeof r3 && "function" != typeof i3) {
        var u2 = i3;
        i3 = r3;
        var a2 = e3;
        return function(n2) {
          var r4 = this;
          void 0 === n2 && (n2 = u2);
          for (var t2 = arguments.length, e4 = Array(t2 > 1 ? t2 - 1 : 0), o3 = 1; o3 < t2; o3++)
            e4[o3 - 1] = arguments[o3];
          return a2.produce(n2, function(n3) {
            var t3;
            return (t3 = i3).call.apply(t3, [r4, n3].concat(e4));
          });
        };
      }
      var f2;
      if ("function" != typeof i3 && n(6), void 0 !== o2 && "function" != typeof o2 && n(7), t(r3)) {
        var c2 = w(e3), s2 = N(e3, r3, void 0), v2 = true;
        try {
          f2 = i3(s2), v2 = false;
        } finally {
          v2 ? O(c2) : g(c2);
        }
        return "undefined" != typeof Promise && f2 instanceof Promise ? f2.then(function(n2) {
          return j(c2, o2), P(n2, c2);
        }, function(n2) {
          throw O(c2), n2;
        }) : (j(c2, o2), P(f2, c2));
      }
      if (!r3 || "object" != typeof r3) {
        if (void 0 === (f2 = i3(r3)) && (f2 = r3), f2 === H && (f2 = void 0), e3.D && d(f2, true), o2) {
          var p2 = [], l2 = [];
          b("Patches").M(r3, f2, p2, l2), o2(p2, l2);
        }
        return f2;
      }
      n(21, r3);
    }, this.produceWithPatches = function(n2, r3) {
      if ("function" == typeof n2)
        return function(r4) {
          for (var t3 = arguments.length, i4 = Array(t3 > 1 ? t3 - 1 : 0), o3 = 1; o3 < t3; o3++)
            i4[o3 - 1] = arguments[o3];
          return e3.produceWithPatches(r4, function(r5) {
            return n2.apply(void 0, [r5].concat(i4));
          });
        };
      var t2, i3, o2 = e3.produce(n2, r3, function(n3, r4) {
        t2 = n3, i3 = r4;
      });
      return "undefined" != typeof Promise && o2 instanceof Promise ? o2.then(function(n3) {
        return [n3, t2, i3];
      }) : [o2, t2, i3];
    }, "boolean" == typeof (null == r2 ? void 0 : r2.useProxies) && this.setUseProxies(r2.useProxies), "boolean" == typeof (null == r2 ? void 0 : r2.autoFreeze) && this.setAutoFreeze(r2.autoFreeze);
  }
  var i2 = e2.prototype;
  return i2.createDraft = function(e3) {
    t(e3) || n(8), r(e3) && (e3 = R(e3));
    var i3 = w(this), o2 = N(this, e3, void 0);
    return o2[Q].C = true, g(i3), o2;
  }, i2.finishDraft = function(r2, t2) {
    var e3 = r2 && r2[Q];
    var i3 = e3.A;
    return j(i3, t2), P(void 0, i3);
  }, i2.setAutoFreeze = function(n2) {
    this.D = n2;
  }, i2.setUseProxies = function(r2) {
    r2 && !B && n(20), this.g = r2;
  }, i2.applyPatches = function(n2, t2) {
    var e3;
    for (e3 = t2.length - 1; e3 >= 0; e3--) {
      var i3 = t2[e3];
      if (0 === i3.path.length && "replace" === i3.op) {
        n2 = i3.value;
        break;
      }
    }
    e3 > -1 && (t2 = t2.slice(e3 + 1));
    var o2 = b("Patches").$;
    return r(n2) ? o2(n2, t2) : this.produce(n2, function(n3) {
      return o2(n3, t2);
    });
  }, e2;
}(), an = new un(), fn = an.produce;
an.produceWithPatches.bind(an);
an.setAutoFreeze.bind(an);
an.setUseProxies.bind(an);
an.applyPatches.bind(an);
an.createDraft.bind(an);
an.finishDraft.bind(an);
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _defineProperty$i(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = null != arguments[i2] ? arguments[i2] : {};
    i2 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty$i(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or use the non-minified dev environment for full errors. ";
}
var $$observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
var randomString = function randomString2() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
function isPlainObject$2(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto;
}
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(formatProdErrorMessage(0));
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(formatProdErrorMessage(1));
    }
    return enhancer(createStore)(reducer, preloadedState);
  }
  if (typeof reducer !== "function") {
    throw new Error(formatProdErrorMessage(2));
  }
  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(3));
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(formatProdErrorMessage(4));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(5));
    }
    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(formatProdErrorMessage(6));
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject$2(action)) {
      throw new Error(formatProdErrorMessage(7));
    }
    if (typeof action.type === "undefined") {
      throw new Error(formatProdErrorMessage(8));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(9));
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    var listeners = currentListeners = nextListeners;
    for (var i2 = 0; i2 < listeners.length; i2++) {
      var listener = listeners[i2];
      listener();
    }
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(formatProdErrorMessage(10));
    }
    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  function observable() {
    var _ref;
    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe2(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(formatProdErrorMessage(11));
        }
        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }
        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      }
    }, _ref[$$observable] = function() {
      return this;
    }, _ref;
  }
  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function(key) {
    var reducer = reducers[key];
    var initialState = reducer(void 0, {
      type: ActionTypes.INIT
    });
    if (typeof initialState === "undefined") {
      throw new Error(formatProdErrorMessage(12));
    }
    if (typeof reducer(void 0, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === "undefined") {
      throw new Error(formatProdErrorMessage(13));
    }
  });
}
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i2 = 0; i2 < reducerKeys.length; i2++) {
    var key = reducerKeys[i2];
    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);
  var shapeAssertionError;
  try {
    assertReducerShape(finalReducers);
  } catch (e2) {
    shapeAssertionError = e2;
  }
  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }
    if (shapeAssertionError) {
      throw shapeAssertionError;
    }
    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === "undefined") {
        action && action.type;
        throw new Error(formatProdErrorMessage(14));
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  if (funcs.length === 0) {
    return function(arg) {
      return arg;
    };
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(function(a2, b2) {
    return function() {
      return a2(b2.apply(void 0, arguments));
    };
  });
}
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }
  return function(createStore2) {
    return function() {
      var store = createStore2.apply(void 0, arguments);
      var _dispatch = function dispatch() {
        throw new Error(formatProdErrorMessage(15));
      };
      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function(middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2(_objectSpread2({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}
function createThunkMiddleware(extraArgument) {
  var middleware = function middleware2(_ref) {
    var dispatch = _ref.dispatch, getState = _ref.getState;
    return function(next) {
      return function(action) {
        if (typeof action === "function") {
          return action(dispatch, getState, extraArgument);
        }
        return next(action);
      };
    };
  };
  return middleware;
}
var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
const thunkMiddleware = thunk;
var __extends = globalThis && globalThis.__extends || function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p2 in b3)
        if (Object.prototype.hasOwnProperty.call(b3, p2))
          d3[p2] = b3[p2];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    if (typeof b2 !== "function" && b2 !== null)
      throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __generator = globalThis && globalThis.__generator || function(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t2[0] & 1)
      throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f2, y2, t2, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (_2)
      try {
        if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
          return t2;
        if (y2 = 0, t2)
          op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
            break;
          case 4:
            _2.label++;
            return { value: op[1], done: false };
          case 5:
            _2.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _2.ops.pop();
            _2.trys.pop();
            continue;
          default:
            if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _2 = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
              _2.label = op[1];
              break;
            }
            if (op[0] === 6 && _2.label < t2[1]) {
              _2.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _2.label < t2[2]) {
              _2.label = t2[2];
              _2.ops.push(op);
              break;
            }
            if (t2[2])
              _2.ops.pop();
            _2.trys.pop();
            continue;
        }
        op = body.call(thisArg, _2);
      } catch (e2) {
        op = [6, e2];
        y2 = 0;
      } finally {
        f2 = t2 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __spreadArray = globalThis && globalThis.__spreadArray || function(to, from) {
  for (var i2 = 0, il2 = from.length, j2 = to.length; i2 < il2; i2++, j2++)
    to[j2] = from[i2];
  return to;
};
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = function(obj, key, value) {
  return key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
};
var __spreadValues = function(a2, b2) {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var _i = 0, _c = __getOwnPropSymbols(b2); _i < _c.length; _i++) {
      var prop = _c[_i];
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = function(a2, b2) {
  return __defProps(a2, __getOwnPropDescs(b2));
};
var __async = function(__this, __arguments, generator) {
  return new Promise(function(resolve, reject) {
    var fulfilled = function(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = function(value) {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = function(x2) {
      return x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    };
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length === 0)
    return void 0;
  if (typeof arguments[0] === "object")
    return compose;
  return compose.apply(null, arguments);
};
function isPlainObject$1(value) {
  if (typeof value !== "object" || value === null)
    return false;
  var proto = Object.getPrototypeOf(value);
  if (proto === null)
    return true;
  var baseProto = proto;
  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }
  return proto === baseProto;
}
var MiddlewareArray = (
  /** @class */
  function(_super) {
    __extends(MiddlewareArray2, _super);
    function MiddlewareArray2() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var _this = _super.apply(this, args) || this;
      Object.setPrototypeOf(_this, MiddlewareArray2.prototype);
      return _this;
    }
    Object.defineProperty(MiddlewareArray2, Symbol.species, {
      get: function() {
        return MiddlewareArray2;
      },
      enumerable: false,
      configurable: true
    });
    MiddlewareArray2.prototype.concat = function() {
      var arr = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
      }
      return _super.prototype.concat.apply(this, arr);
    };
    MiddlewareArray2.prototype.prepend = function() {
      var arr = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
      }
      if (arr.length === 1 && Array.isArray(arr[0])) {
        return new (MiddlewareArray2.bind.apply(MiddlewareArray2, __spreadArray([void 0], arr[0].concat(this))))();
      }
      return new (MiddlewareArray2.bind.apply(MiddlewareArray2, __spreadArray([void 0], arr.concat(this))))();
    };
    return MiddlewareArray2;
  }(Array)
);
function freezeDraftable(val) {
  return t(val) ? fn(val, function() {
  }) : val;
}
function isBoolean$1(x2) {
  return typeof x2 === "boolean";
}
function curryGetDefaultMiddleware() {
  return function curriedGetDefaultMiddleware(options) {
    return getDefaultMiddleware(options);
  };
}
function getDefaultMiddleware(options) {
  if (options === void 0) {
    options = {};
  }
  var _c = options.thunk, thunk2 = _c === void 0 ? true : _c;
  options.immutableCheck;
  options.serializableCheck;
  var middlewareArray = new MiddlewareArray();
  if (thunk2) {
    if (isBoolean$1(thunk2)) {
      middlewareArray.push(thunkMiddleware);
    } else {
      middlewareArray.push(thunkMiddleware.withExtraArgument(thunk2.extraArgument));
    }
  }
  return middlewareArray;
}
var IS_PRODUCTION = true;
function configureStore(options) {
  var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();
  var _c = options || {}, _d = _c.reducer, reducer = _d === void 0 ? void 0 : _d, _e = _c.middleware, middleware = _e === void 0 ? curriedGetDefaultMiddleware() : _e, _f = _c.devTools, devTools = _f === void 0 ? true : _f, _g = _c.preloadedState, preloadedState = _g === void 0 ? void 0 : _g, _h = _c.enhancers, enhancers = _h === void 0 ? void 0 : _h;
  var rootReducer;
  if (typeof reducer === "function") {
    rootReducer = reducer;
  } else if (isPlainObject$1(reducer)) {
    rootReducer = combineReducers(reducer);
  } else {
    throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
  }
  var finalMiddleware = middleware;
  if (typeof finalMiddleware === "function") {
    finalMiddleware = finalMiddleware(curriedGetDefaultMiddleware);
  }
  var middlewareEnhancer = applyMiddleware.apply(void 0, finalMiddleware);
  var finalCompose = compose;
  if (devTools) {
    finalCompose = composeWithDevTools(__spreadValues({
      trace: !IS_PRODUCTION
    }, typeof devTools === "object" && devTools));
  }
  var storeEnhancers = [middlewareEnhancer];
  if (Array.isArray(enhancers)) {
    storeEnhancers = __spreadArray([middlewareEnhancer], enhancers);
  } else if (typeof enhancers === "function") {
    storeEnhancers = enhancers(storeEnhancers);
  }
  var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
  return createStore(rootReducer, preloadedState, composedEnhancer);
}
function createAction(type, prepareAction) {
  function actionCreator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (prepareAction) {
      var prepared = prepareAction.apply(void 0, args);
      if (!prepared) {
        throw new Error("prepareAction did not return an object");
      }
      return __spreadValues(__spreadValues({
        type,
        payload: prepared.payload
      }, "meta" in prepared && { meta: prepared.meta }), "error" in prepared && { error: prepared.error });
    }
    return { type, payload: args[0] };
  }
  actionCreator.toString = function() {
    return "" + type;
  };
  actionCreator.type = type;
  actionCreator.match = function(action) {
    return action.type === type;
  };
  return actionCreator;
}
function executeReducerBuilderCallback(builderCallback) {
  var actionsMap = {};
  var actionMatchers = [];
  var defaultCaseReducer;
  var builder = {
    addCase: function(typeOrActionCreator, reducer) {
      var type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
      if (type in actionsMap) {
        throw new Error("addCase cannot be called with two reducers for the same action type");
      }
      actionsMap[type] = reducer;
      return builder;
    },
    addMatcher: function(matcher, reducer) {
      actionMatchers.push({ matcher, reducer });
      return builder;
    },
    addDefaultCase: function(reducer) {
      defaultCaseReducer = reducer;
      return builder;
    }
  };
  builderCallback(builder);
  return [actionsMap, actionMatchers, defaultCaseReducer];
}
function isStateFunction(x2) {
  return typeof x2 === "function";
}
function createReducer(initialState, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
  if (actionMatchers === void 0) {
    actionMatchers = [];
  }
  var _c = typeof mapOrBuilderCallback === "function" ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer], actionsMap = _c[0], finalActionMatchers = _c[1], finalDefaultCaseReducer = _c[2];
  var getInitialState;
  if (isStateFunction(initialState)) {
    getInitialState = function() {
      return freezeDraftable(initialState());
    };
  } else {
    var frozenInitialState_1 = freezeDraftable(initialState);
    getInitialState = function() {
      return frozenInitialState_1;
    };
  }
  function reducer(state, action) {
    if (state === void 0) {
      state = getInitialState();
    }
    var caseReducers = __spreadArray([
      actionsMap[action.type]
    ], finalActionMatchers.filter(function(_c2) {
      var matcher = _c2.matcher;
      return matcher(action);
    }).map(function(_c2) {
      var reducer2 = _c2.reducer;
      return reducer2;
    }));
    if (caseReducers.filter(function(cr) {
      return !!cr;
    }).length === 0) {
      caseReducers = [finalDefaultCaseReducer];
    }
    return caseReducers.reduce(function(previousState, caseReducer) {
      if (caseReducer) {
        if (r(previousState)) {
          var draft = previousState;
          var result = caseReducer(draft, action);
          if (result === void 0) {
            return previousState;
          }
          return result;
        } else if (!t(previousState)) {
          var result = caseReducer(previousState, action);
          if (result === void 0) {
            if (previousState === null) {
              return previousState;
            }
            throw Error("A case reducer on a non-draftable value must not return undefined");
          }
          return result;
        } else {
          return fn(previousState, function(draft2) {
            return caseReducer(draft2, action);
          });
        }
      }
      return previousState;
    }, state);
  }
  reducer.getInitialState = getInitialState;
  return reducer;
}
function getType2(slice, actionKey) {
  return slice + "/" + actionKey;
}
function createSlice(options) {
  var name = options.name;
  if (!name) {
    throw new Error("`name` is a required option for createSlice");
  }
  if (typeof process !== "undefined" && false) {
    if (options.initialState === void 0) {
      console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    }
  }
  var initialState = typeof options.initialState == "function" ? options.initialState : freezeDraftable(options.initialState);
  var reducers = options.reducers || {};
  var reducerNames = Object.keys(reducers);
  var sliceCaseReducersByName = {};
  var sliceCaseReducersByType = {};
  var actionCreators = {};
  reducerNames.forEach(function(reducerName) {
    var maybeReducerWithPrepare = reducers[reducerName];
    var type = getType2(name, reducerName);
    var caseReducer;
    var prepareCallback;
    if ("reducer" in maybeReducerWithPrepare) {
      caseReducer = maybeReducerWithPrepare.reducer;
      prepareCallback = maybeReducerWithPrepare.prepare;
    } else {
      caseReducer = maybeReducerWithPrepare;
    }
    sliceCaseReducersByName[reducerName] = caseReducer;
    sliceCaseReducersByType[type] = caseReducer;
    actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
  });
  function buildReducer() {
    var _c = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers], _d = _c[0], extraReducers = _d === void 0 ? {} : _d, _e = _c[1], actionMatchers = _e === void 0 ? [] : _e, _f = _c[2], defaultCaseReducer = _f === void 0 ? void 0 : _f;
    var finalCaseReducers = __spreadValues(__spreadValues({}, extraReducers), sliceCaseReducersByType);
    return createReducer(initialState, function(builder) {
      for (var key in finalCaseReducers) {
        builder.addCase(key, finalCaseReducers[key]);
      }
      for (var _i = 0, actionMatchers_1 = actionMatchers; _i < actionMatchers_1.length; _i++) {
        var m2 = actionMatchers_1[_i];
        builder.addMatcher(m2.matcher, m2.reducer);
      }
      if (defaultCaseReducer) {
        builder.addDefaultCase(defaultCaseReducer);
      }
    });
  }
  var _reducer;
  return {
    name,
    reducer: function(state, action) {
      if (!_reducer)
        _reducer = buildReducer();
      return _reducer(state, action);
    },
    actions: actionCreators,
    caseReducers: sliceCaseReducersByName,
    getInitialState: function() {
      if (!_reducer)
        _reducer = buildReducer();
      return _reducer.getInitialState();
    }
  };
}
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = function(size) {
  if (size === void 0) {
    size = 21;
  }
  var id2 = "";
  var i2 = size;
  while (i2--) {
    id2 += urlAlphabet[Math.random() * 64 | 0];
  }
  return id2;
};
var commonProperties = [
  "name",
  "message",
  "stack",
  "code"
];
var RejectWithValue = (
  /** @class */
  function() {
    function RejectWithValue2(payload, meta) {
      this.payload = payload;
      this.meta = meta;
    }
    return RejectWithValue2;
  }()
);
var FulfillWithMeta = (
  /** @class */
  function() {
    function FulfillWithMeta2(payload, meta) {
      this.payload = payload;
      this.meta = meta;
    }
    return FulfillWithMeta2;
  }()
);
var miniSerializeError = function(value) {
  if (typeof value === "object" && value !== null) {
    var simpleError = {};
    for (var _i = 0, commonProperties_1 = commonProperties; _i < commonProperties_1.length; _i++) {
      var property = commonProperties_1[_i];
      if (typeof value[property] === "string") {
        simpleError[property] = value[property];
      }
    }
    return simpleError;
  }
  return { message: String(value) };
};
(function() {
  function createAsyncThunk2(typePrefix, payloadCreator, options) {
    var fulfilled = createAction(typePrefix + "/fulfilled", function(payload, requestId, arg, meta) {
      return {
        payload,
        meta: __spreadProps(__spreadValues({}, meta || {}), {
          arg,
          requestId,
          requestStatus: "fulfilled"
        })
      };
    });
    var pending = createAction(typePrefix + "/pending", function(requestId, arg, meta) {
      return {
        payload: void 0,
        meta: __spreadProps(__spreadValues({}, meta || {}), {
          arg,
          requestId,
          requestStatus: "pending"
        })
      };
    });
    var rejected = createAction(typePrefix + "/rejected", function(error, requestId, arg, payload, meta) {
      return {
        payload,
        error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
        meta: __spreadProps(__spreadValues({}, meta || {}), {
          arg,
          requestId,
          rejectedWithValue: !!payload,
          requestStatus: "rejected",
          aborted: (error == null ? void 0 : error.name) === "AbortError",
          condition: (error == null ? void 0 : error.name) === "ConditionError"
        })
      };
    });
    var AC = typeof AbortController !== "undefined" ? AbortController : (
      /** @class */
      function() {
        function class_1() {
          this.signal = {
            aborted: false,
            addEventListener: function() {
            },
            dispatchEvent: function() {
              return false;
            },
            onabort: function() {
            },
            removeEventListener: function() {
            },
            reason: void 0,
            throwIfAborted: function() {
            }
          };
        }
        class_1.prototype.abort = function() {
        };
        return class_1;
      }()
    );
    function actionCreator(arg) {
      return function(dispatch, getState, extra) {
        var requestId = (options == null ? void 0 : options.idGenerator) ? options.idGenerator(arg) : nanoid();
        var abortController = new AC();
        var abortReason;
        function abort(reason) {
          abortReason = reason;
          abortController.abort();
        }
        var promise2 = function() {
          return __async(this, null, function() {
            var _a, _b, finalAction, conditionResult, abortedPromise, err_1, skipDispatch;
            return __generator(this, function(_c) {
              switch (_c.label) {
                case 0:
                  _c.trys.push([0, 4, , 5]);
                  conditionResult = (_a = options == null ? void 0 : options.condition) == null ? void 0 : _a.call(options, arg, { getState, extra });
                  if (!isThenable(conditionResult))
                    return [3, 2];
                  return [4, conditionResult];
                case 1:
                  conditionResult = _c.sent();
                  _c.label = 2;
                case 2:
                  if (conditionResult === false || abortController.signal.aborted) {
                    throw {
                      name: "ConditionError",
                      message: "Aborted due to condition callback returning false."
                    };
                  }
                  abortedPromise = new Promise(function(_2, reject) {
                    return abortController.signal.addEventListener("abort", function() {
                      return reject({
                        name: "AbortError",
                        message: abortReason || "Aborted"
                      });
                    });
                  });
                  dispatch(pending(requestId, arg, (_b = options == null ? void 0 : options.getPendingMeta) == null ? void 0 : _b.call(options, { requestId, arg }, { getState, extra })));
                  return [4, Promise.race([
                    abortedPromise,
                    Promise.resolve(payloadCreator(arg, {
                      dispatch,
                      getState,
                      extra,
                      requestId,
                      signal: abortController.signal,
                      abort,
                      rejectWithValue: function(value, meta) {
                        return new RejectWithValue(value, meta);
                      },
                      fulfillWithValue: function(value, meta) {
                        return new FulfillWithMeta(value, meta);
                      }
                    })).then(function(result) {
                      if (result instanceof RejectWithValue) {
                        throw result;
                      }
                      if (result instanceof FulfillWithMeta) {
                        return fulfilled(result.payload, requestId, arg, result.meta);
                      }
                      return fulfilled(result, requestId, arg);
                    })
                  ])];
                case 3:
                  finalAction = _c.sent();
                  return [3, 5];
                case 4:
                  err_1 = _c.sent();
                  finalAction = err_1 instanceof RejectWithValue ? rejected(null, requestId, arg, err_1.payload, err_1.meta) : rejected(err_1, requestId, arg);
                  return [3, 5];
                case 5:
                  skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
                  if (!skipDispatch) {
                    dispatch(finalAction);
                  }
                  return [2, finalAction];
              }
            });
          });
        }();
        return Object.assign(promise2, {
          abort,
          requestId,
          arg,
          unwrap: function() {
            return promise2.then(unwrapResult);
          }
        });
      };
    }
    return Object.assign(actionCreator, {
      pending,
      rejected,
      fulfilled,
      typePrefix
    });
  }
  createAsyncThunk2.withTypes = function() {
    return createAsyncThunk2;
  };
  return createAsyncThunk2;
})();
function unwrapResult(action) {
  if (action.meta && action.meta.rejectedWithValue) {
    throw action.payload;
  }
  if (action.error) {
    throw action.error;
  }
  return action.payload;
}
function isThenable(value) {
  return value !== null && typeof value === "object" && typeof value.then === "function";
}
var alm = "listenerMiddleware";
createAction(alm + "/add");
createAction(alm + "/removeAll");
createAction(alm + "/remove");
var promise;
typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : globalThis) : function(cb2) {
  return (promise || (promise = Promise.resolve())).then(cb2).catch(function(err) {
    return setTimeout(function() {
      throw err;
    }, 0);
  });
};
F();
var clipboardExports = {};
var clipboard$1 = {
  get exports() {
    return clipboardExports;
  },
  set exports(v2) {
    clipboardExports = v2;
  }
};
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function(module, exports) {
  (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
    return (
      /******/
      function() {
        var __webpack_modules__ = {
          /***/
          686: (
            /***/
            function(__unused_webpack_module, __webpack_exports__, __webpack_require__2) {
              __webpack_require__2.d(__webpack_exports__, {
                "default": function() {
                  return (
                    /* binding */
                    clipboard2
                  );
                }
              });
              var tiny_emitter = __webpack_require__2(279);
              var tiny_emitter_default = /* @__PURE__ */ __webpack_require__2.n(tiny_emitter);
              var listen = __webpack_require__2(370);
              var listen_default = /* @__PURE__ */ __webpack_require__2.n(listen);
              var src_select = __webpack_require__2(817);
              var select_default = /* @__PURE__ */ __webpack_require__2.n(src_select);
              function command(type) {
                try {
                  return document.execCommand(type);
                } catch (err) {
                  return false;
                }
              }
              var ClipboardActionCut = function ClipboardActionCut2(target) {
                var selectedText = select_default()(target);
                command("cut");
                return selectedText;
              };
              var actions_cut = ClipboardActionCut;
              function createFakeElement(value) {
                var isRTL = document.documentElement.getAttribute("dir") === "rtl";
                var fakeElement = document.createElement("textarea");
                fakeElement.style.fontSize = "12pt";
                fakeElement.style.border = "0";
                fakeElement.style.padding = "0";
                fakeElement.style.margin = "0";
                fakeElement.style.position = "absolute";
                fakeElement.style[isRTL ? "right" : "left"] = "-9999px";
                var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                fakeElement.style.top = "".concat(yPosition, "px");
                fakeElement.setAttribute("readonly", "");
                fakeElement.value = value;
                return fakeElement;
              }
              var fakeCopyAction = function fakeCopyAction2(value, options) {
                var fakeElement = createFakeElement(value);
                options.container.appendChild(fakeElement);
                var selectedText = select_default()(fakeElement);
                command("copy");
                fakeElement.remove();
                return selectedText;
              };
              var ClipboardActionCopy = function ClipboardActionCopy2(target) {
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                  container: document.body
                };
                var selectedText = "";
                if (typeof target === "string") {
                  selectedText = fakeCopyAction(target, options);
                } else if (target instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(target === null || target === void 0 ? void 0 : target.type)) {
                  selectedText = fakeCopyAction(target.value, options);
                } else {
                  selectedText = select_default()(target);
                  command("copy");
                }
                return selectedText;
              };
              var actions_copy = ClipboardActionCopy;
              function _typeof2(obj) {
                "@babel/helpers - typeof";
                if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                  _typeof2 = function _typeof3(obj2) {
                    return typeof obj2;
                  };
                } else {
                  _typeof2 = function _typeof3(obj2) {
                    return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                  };
                }
                return _typeof2(obj);
              }
              var ClipboardActionDefault = function ClipboardActionDefault2() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _options$action = options.action, action = _options$action === void 0 ? "copy" : _options$action, container = options.container, target = options.target, text = options.text;
                if (action !== "copy" && action !== "cut") {
                  throw new Error('Invalid "action" value, use either "copy" or "cut"');
                }
                if (target !== void 0) {
                  if (target && _typeof2(target) === "object" && target.nodeType === 1) {
                    if (action === "copy" && target.hasAttribute("disabled")) {
                      throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    }
                    if (action === "cut" && (target.hasAttribute("readonly") || target.hasAttribute("disabled"))) {
                      throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
                    }
                  } else {
                    throw new Error('Invalid "target" value, use a valid Element');
                  }
                }
                if (text) {
                  return actions_copy(text, {
                    container
                  });
                }
                if (target) {
                  return action === "cut" ? actions_cut(target) : actions_copy(target, {
                    container
                  });
                }
              };
              var actions_default = ClipboardActionDefault;
              function clipboard_typeof(obj) {
                "@babel/helpers - typeof";
                if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                  clipboard_typeof = function _typeof3(obj2) {
                    return typeof obj2;
                  };
                } else {
                  clipboard_typeof = function _typeof3(obj2) {
                    return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                  };
                }
                return clipboard_typeof(obj);
              }
              function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                  throw new TypeError("Cannot call a class as a function");
                }
              }
              function _defineProperties(target, props) {
                for (var i2 = 0; i2 < props.length; i2++) {
                  var descriptor = props[i2];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor)
                    descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              function _createClass(Constructor, protoProps, staticProps) {
                if (protoProps)
                  _defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                  _defineProperties(Constructor, staticProps);
                return Constructor;
              }
              function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                  throw new TypeError("Super expression must either be null or a function");
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
                if (superClass)
                  _setPrototypeOf(subClass, superClass);
              }
              function _setPrototypeOf(o2, p2) {
                _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p3) {
                  o3.__proto__ = p3;
                  return o3;
                };
                return _setPrototypeOf(o2, p2);
              }
              function _createSuper(Derived) {
                var hasNativeReflectConstruct = _isNativeReflectConstruct();
                return function _createSuperInternal() {
                  var Super = _getPrototypeOf(Derived), result;
                  if (hasNativeReflectConstruct) {
                    var NewTarget = _getPrototypeOf(this).constructor;
                    result = Reflect.construct(Super, arguments, NewTarget);
                  } else {
                    result = Super.apply(this, arguments);
                  }
                  return _possibleConstructorReturn(this, result);
                };
              }
              function _possibleConstructorReturn(self2, call) {
                if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) {
                  return call;
                }
                return _assertThisInitialized2(self2);
              }
              function _assertThisInitialized2(self2) {
                if (self2 === void 0) {
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return self2;
              }
              function _isNativeReflectConstruct() {
                if (typeof Reflect === "undefined" || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if (typeof Proxy === "function")
                  return true;
                try {
                  Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                  }));
                  return true;
                } catch (e2) {
                  return false;
                }
              }
              function _getPrototypeOf(o2) {
                _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o3) {
                  return o3.__proto__ || Object.getPrototypeOf(o3);
                };
                return _getPrototypeOf(o2);
              }
              function getAttributeValue(suffix, element) {
                var attribute = "data-clipboard-".concat(suffix);
                if (!element.hasAttribute(attribute)) {
                  return;
                }
                return element.getAttribute(attribute);
              }
              var Clipboard2 = /* @__PURE__ */ function(_Emitter) {
                _inherits(Clipboard3, _Emitter);
                var _super = _createSuper(Clipboard3);
                function Clipboard3(trigger, options) {
                  var _this;
                  _classCallCheck(this, Clipboard3);
                  _this = _super.call(this);
                  _this.resolveOptions(options);
                  _this.listenClick(trigger);
                  return _this;
                }
                _createClass(Clipboard3, [{
                  key: "resolveOptions",
                  value: function resolveOptions() {
                    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    this.action = typeof options.action === "function" ? options.action : this.defaultAction;
                    this.target = typeof options.target === "function" ? options.target : this.defaultTarget;
                    this.text = typeof options.text === "function" ? options.text : this.defaultText;
                    this.container = clipboard_typeof(options.container) === "object" ? options.container : document.body;
                  }
                  /**
                   * Adds a click event listener to the passed trigger.
                   * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
                   */
                }, {
                  key: "listenClick",
                  value: function listenClick(trigger) {
                    var _this2 = this;
                    this.listener = listen_default()(trigger, "click", function(e2) {
                      return _this2.onClick(e2);
                    });
                  }
                  /**
                   * Defines a new `ClipboardAction` on each click event.
                   * @param {Event} e
                   */
                }, {
                  key: "onClick",
                  value: function onClick(e2) {
                    var trigger = e2.delegateTarget || e2.currentTarget;
                    var action = this.action(trigger) || "copy";
                    var text = actions_default({
                      action,
                      container: this.container,
                      target: this.target(trigger),
                      text: this.text(trigger)
                    });
                    this.emit(text ? "success" : "error", {
                      action,
                      text,
                      trigger,
                      clearSelection: function clearSelection() {
                        if (trigger) {
                          trigger.focus();
                        }
                        window.getSelection().removeAllRanges();
                      }
                    });
                  }
                  /**
                   * Default `action` lookup function.
                   * @param {Element} trigger
                   */
                }, {
                  key: "defaultAction",
                  value: function defaultAction(trigger) {
                    return getAttributeValue("action", trigger);
                  }
                  /**
                   * Default `target` lookup function.
                   * @param {Element} trigger
                   */
                }, {
                  key: "defaultTarget",
                  value: function defaultTarget(trigger) {
                    var selector = getAttributeValue("target", trigger);
                    if (selector) {
                      return document.querySelector(selector);
                    }
                  }
                  /**
                   * Allow fire programmatically a copy action
                   * @param {String|HTMLElement} target
                   * @param {Object} options
                   * @returns Text copied.
                   */
                }, {
                  key: "defaultText",
                  /**
                   * Default `text` lookup function.
                   * @param {Element} trigger
                   */
                  value: function defaultText(trigger) {
                    return getAttributeValue("text", trigger);
                  }
                  /**
                   * Destroy lifecycle.
                   */
                }, {
                  key: "destroy",
                  value: function destroy() {
                    this.listener.destroy();
                  }
                }], [{
                  key: "copy",
                  value: function copy(target) {
                    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                      container: document.body
                    };
                    return actions_copy(target, options);
                  }
                  /**
                   * Allow fire programmatically a cut action
                   * @param {String|HTMLElement} target
                   * @returns Text cutted.
                   */
                }, {
                  key: "cut",
                  value: function cut2(target) {
                    return actions_cut(target);
                  }
                  /**
                   * Returns the support of the given action, or all actions if no action is
                   * given.
                   * @param {String} [action]
                   */
                }, {
                  key: "isSupported",
                  value: function isSupported() {
                    var action = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"];
                    var actions = typeof action === "string" ? [action] : action;
                    var support = !!document.queryCommandSupported;
                    actions.forEach(function(action2) {
                      support = support && !!document.queryCommandSupported(action2);
                    });
                    return support;
                  }
                }]);
                return Clipboard3;
              }(tiny_emitter_default());
              var clipboard2 = Clipboard2;
            }
          ),
          /***/
          828: (
            /***/
            function(module2) {
              var DOCUMENT_NODE_TYPE = 9;
              if (typeof Element !== "undefined" && !Element.prototype.matches) {
                var proto = Element.prototype;
                proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
              }
              function closest(element, selector) {
                while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
                  if (typeof element.matches === "function" && element.matches(selector)) {
                    return element;
                  }
                  element = element.parentNode;
                }
              }
              module2.exports = closest;
            }
          ),
          /***/
          438: (
            /***/
            function(module2, __unused_webpack_exports, __webpack_require__2) {
              var closest = __webpack_require__2(828);
              function _delegate(element, selector, type, callback, useCapture) {
                var listenerFn = listener.apply(this, arguments);
                element.addEventListener(type, listenerFn, useCapture);
                return {
                  destroy: function() {
                    element.removeEventListener(type, listenerFn, useCapture);
                  }
                };
              }
              function delegate(elements, selector, type, callback, useCapture) {
                if (typeof elements.addEventListener === "function") {
                  return _delegate.apply(null, arguments);
                }
                if (typeof type === "function") {
                  return _delegate.bind(null, document).apply(null, arguments);
                }
                if (typeof elements === "string") {
                  elements = document.querySelectorAll(elements);
                }
                return Array.prototype.map.call(elements, function(element) {
                  return _delegate(element, selector, type, callback, useCapture);
                });
              }
              function listener(element, selector, type, callback) {
                return function(e2) {
                  e2.delegateTarget = closest(e2.target, selector);
                  if (e2.delegateTarget) {
                    callback.call(element, e2);
                  }
                };
              }
              module2.exports = delegate;
            }
          ),
          /***/
          879: (
            /***/
            function(__unused_webpack_module, exports2) {
              exports2.node = function(value) {
                return value !== void 0 && value instanceof HTMLElement && value.nodeType === 1;
              };
              exports2.nodeList = function(value) {
                var type = Object.prototype.toString.call(value);
                return value !== void 0 && (type === "[object NodeList]" || type === "[object HTMLCollection]") && "length" in value && (value.length === 0 || exports2.node(value[0]));
              };
              exports2.string = function(value) {
                return typeof value === "string" || value instanceof String;
              };
              exports2.fn = function(value) {
                var type = Object.prototype.toString.call(value);
                return type === "[object Function]";
              };
            }
          ),
          /***/
          370: (
            /***/
            function(module2, __unused_webpack_exports, __webpack_require__2) {
              var is2 = __webpack_require__2(879);
              var delegate = __webpack_require__2(438);
              function listen(target, type, callback) {
                if (!target && !type && !callback) {
                  throw new Error("Missing required arguments");
                }
                if (!is2.string(type)) {
                  throw new TypeError("Second argument must be a String");
                }
                if (!is2.fn(callback)) {
                  throw new TypeError("Third argument must be a Function");
                }
                if (is2.node(target)) {
                  return listenNode(target, type, callback);
                } else if (is2.nodeList(target)) {
                  return listenNodeList(target, type, callback);
                } else if (is2.string(target)) {
                  return listenSelector(target, type, callback);
                } else {
                  throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                }
              }
              function listenNode(node, type, callback) {
                node.addEventListener(type, callback);
                return {
                  destroy: function() {
                    node.removeEventListener(type, callback);
                  }
                };
              }
              function listenNodeList(nodeList, type, callback) {
                Array.prototype.forEach.call(nodeList, function(node) {
                  node.addEventListener(type, callback);
                });
                return {
                  destroy: function() {
                    Array.prototype.forEach.call(nodeList, function(node) {
                      node.removeEventListener(type, callback);
                    });
                  }
                };
              }
              function listenSelector(selector, type, callback) {
                return delegate(document.body, selector, type, callback);
              }
              module2.exports = listen;
            }
          ),
          /***/
          817: (
            /***/
            function(module2) {
              function select(element) {
                var selectedText;
                if (element.nodeName === "SELECT") {
                  element.focus();
                  selectedText = element.value;
                } else if (element.nodeName === "INPUT" || element.nodeName === "TEXTAREA") {
                  var isReadOnly = element.hasAttribute("readonly");
                  if (!isReadOnly) {
                    element.setAttribute("readonly", "");
                  }
                  element.select();
                  element.setSelectionRange(0, element.value.length);
                  if (!isReadOnly) {
                    element.removeAttribute("readonly");
                  }
                  selectedText = element.value;
                } else {
                  if (element.hasAttribute("contenteditable")) {
                    element.focus();
                  }
                  var selection = window.getSelection();
                  var range = document.createRange();
                  range.selectNodeContents(element);
                  selection.removeAllRanges();
                  selection.addRange(range);
                  selectedText = selection.toString();
                }
                return selectedText;
              }
              module2.exports = select;
            }
          ),
          /***/
          279: (
            /***/
            function(module2) {
              function E2() {
              }
              E2.prototype = {
                on: function(name, callback, ctx) {
                  var e2 = this.e || (this.e = {});
                  (e2[name] || (e2[name] = [])).push({
                    fn: callback,
                    ctx
                  });
                  return this;
                },
                once: function(name, callback, ctx) {
                  var self2 = this;
                  function listener() {
                    self2.off(name, listener);
                    callback.apply(ctx, arguments);
                  }
                  listener._ = callback;
                  return this.on(name, listener, ctx);
                },
                emit: function(name) {
                  var data = [].slice.call(arguments, 1);
                  var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
                  var i2 = 0;
                  var len = evtArr.length;
                  for (i2; i2 < len; i2++) {
                    evtArr[i2].fn.apply(evtArr[i2].ctx, data);
                  }
                  return this;
                },
                off: function(name, callback) {
                  var e2 = this.e || (this.e = {});
                  var evts = e2[name];
                  var liveEvents = [];
                  if (evts && callback) {
                    for (var i2 = 0, len = evts.length; i2 < len; i2++) {
                      if (evts[i2].fn !== callback && evts[i2].fn._ !== callback)
                        liveEvents.push(evts[i2]);
                    }
                  }
                  liveEvents.length ? e2[name] = liveEvents : delete e2[name];
                  return this;
                }
              };
              module2.exports = E2;
              module2.exports.TinyEmitter = E2;
            }
          )
          /******/
        };
        var __webpack_module_cache__ = {};
        function __webpack_require__(moduleId) {
          if (__webpack_module_cache__[moduleId]) {
            return __webpack_module_cache__[moduleId].exports;
          }
          var module2 = __webpack_module_cache__[moduleId] = {
            /******/
            // no module.id needed
            /******/
            // no module.loaded needed
            /******/
            exports: {}
            /******/
          };
          __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
          return module2.exports;
        }
        !function() {
          __webpack_require__.n = function(module2) {
            var getter = module2 && module2.__esModule ? (
              /******/
              function() {
                return module2["default"];
              }
            ) : (
              /******/
              function() {
                return module2;
              }
            );
            __webpack_require__.d(getter, { a: getter });
            return getter;
          };
        }();
        !function() {
          __webpack_require__.d = function(exports2, definition) {
            for (var key in definition) {
              if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
                Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
              }
            }
          };
        }();
        !function() {
          __webpack_require__.o = function(obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
          };
        }();
        return __webpack_require__(686);
      }().default
    );
  });
})(clipboard$1);
const Clipboard = /* @__PURE__ */ getDefaultExportFromCjs(clipboardExports);
var immutableExports = {};
var immutable = {
  get exports() {
    return immutableExports;
  },
  set exports(v2) {
    immutableExports = v2;
  }
};
(function(module, exports) {
  (function(global2, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
    var SLICE$0 = Array.prototype.slice;
    function createClass(ctor, superClass) {
      if (superClass) {
        ctor.prototype = Object.create(superClass.prototype);
      }
      ctor.prototype.constructor = ctor;
    }
    function Iterable(value) {
      return isIterable(value) ? value : Seq(value);
    }
    createClass(KeyedIterable, Iterable);
    function KeyedIterable(value) {
      return isKeyed(value) ? value : KeyedSeq(value);
    }
    createClass(IndexedIterable, Iterable);
    function IndexedIterable(value) {
      return isIndexed(value) ? value : IndexedSeq(value);
    }
    createClass(SetIterable, Iterable);
    function SetIterable(value) {
      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
    }
    function isIterable(maybeIterable) {
      return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
    }
    function isKeyed(maybeKeyed) {
      return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
    }
    function isIndexed(maybeIndexed) {
      return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
    }
    function isAssociative(maybeAssociative) {
      return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
    }
    function isOrdered(maybeOrdered) {
      return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
    }
    Iterable.isIterable = isIterable;
    Iterable.isKeyed = isKeyed;
    Iterable.isIndexed = isIndexed;
    Iterable.isAssociative = isAssociative;
    Iterable.isOrdered = isOrdered;
    Iterable.Keyed = KeyedIterable;
    Iterable.Indexed = IndexedIterable;
    Iterable.Set = SetIterable;
    var IS_ITERABLE_SENTINEL = "@@__IMMUTABLE_ITERABLE__@@";
    var IS_KEYED_SENTINEL = "@@__IMMUTABLE_KEYED__@@";
    var IS_INDEXED_SENTINEL = "@@__IMMUTABLE_INDEXED__@@";
    var IS_ORDERED_SENTINEL = "@@__IMMUTABLE_ORDERED__@@";
    var DELETE = "delete";
    var SHIFT = 5;
    var SIZE = 1 << SHIFT;
    var MASK = SIZE - 1;
    var NOT_SET = {};
    var CHANGE_LENGTH = { value: false };
    var DID_ALTER = { value: false };
    function MakeRef(ref) {
      ref.value = false;
      return ref;
    }
    function SetRef(ref) {
      ref && (ref.value = true);
    }
    function OwnerID() {
    }
    function arrCopy(arr, offset) {
      offset = offset || 0;
      var len = Math.max(0, arr.length - offset);
      var newArr = new Array(len);
      for (var ii2 = 0; ii2 < len; ii2++) {
        newArr[ii2] = arr[ii2 + offset];
      }
      return newArr;
    }
    function ensureSize(iter) {
      if (iter.size === void 0) {
        iter.size = iter.__iterate(returnTrue3);
      }
      return iter.size;
    }
    function wrapIndex(iter, index) {
      if (typeof index !== "number") {
        var uint32Index = index >>> 0;
        if ("" + uint32Index !== index || uint32Index === 4294967295) {
          return NaN;
        }
        index = uint32Index;
      }
      return index < 0 ? ensureSize(iter) + index : index;
    }
    function returnTrue3() {
      return true;
    }
    function wholeSlice(begin, end, size) {
      return (begin === 0 || size !== void 0 && begin <= -size) && (end === void 0 || size !== void 0 && end >= size);
    }
    function resolveBegin(begin, size) {
      return resolveIndex(begin, size, 0);
    }
    function resolveEnd(end, size) {
      return resolveIndex(end, size, size);
    }
    function resolveIndex(index, size, defaultIndex) {
      return index === void 0 ? defaultIndex : index < 0 ? Math.max(0, size + index) : size === void 0 ? index : Math.min(size, index);
    }
    var ITERATE_KEYS = 0;
    var ITERATE_VALUES = 1;
    var ITERATE_ENTRIES = 2;
    var REAL_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = "@@iterator";
    var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;
    function Iterator(next) {
      this.next = next;
    }
    Iterator.prototype.toString = function() {
      return "[Iterator]";
    };
    Iterator.KEYS = ITERATE_KEYS;
    Iterator.VALUES = ITERATE_VALUES;
    Iterator.ENTRIES = ITERATE_ENTRIES;
    Iterator.prototype.inspect = Iterator.prototype.toSource = function() {
      return this.toString();
    };
    Iterator.prototype[ITERATOR_SYMBOL] = function() {
      return this;
    };
    function iteratorValue(type, k2, v2, iteratorResult) {
      var value = type === 0 ? k2 : type === 1 ? v2 : [k2, v2];
      iteratorResult ? iteratorResult.value = value : iteratorResult = {
        value,
        done: false
      };
      return iteratorResult;
    }
    function iteratorDone() {
      return { value: void 0, done: true };
    }
    function hasIterator(maybeIterable) {
      return !!getIteratorFn(maybeIterable);
    }
    function isIterator(maybeIterator) {
      return maybeIterator && typeof maybeIterator.next === "function";
    }
    function getIterator(iterable) {
      var iteratorFn = getIteratorFn(iterable);
      return iteratorFn && iteratorFn.call(iterable);
    }
    function getIteratorFn(iterable) {
      var iteratorFn = iterable && (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL] || iterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === "function") {
        return iteratorFn;
      }
    }
    function isArrayLike(value) {
      return value && typeof value.length === "number";
    }
    createClass(Seq, Iterable);
    function Seq(value) {
      return value === null || value === void 0 ? emptySequence() : isIterable(value) ? value.toSeq() : seqFromValue(value);
    }
    Seq.of = function() {
      return Seq(arguments);
    };
    Seq.prototype.toSeq = function() {
      return this;
    };
    Seq.prototype.toString = function() {
      return this.__toString("Seq {", "}");
    };
    Seq.prototype.cacheResult = function() {
      if (!this._cache && this.__iterateUncached) {
        this._cache = this.entrySeq().toArray();
        this.size = this._cache.length;
      }
      return this;
    };
    Seq.prototype.__iterate = function(fn2, reverse) {
      return seqIterate(this, fn2, reverse, true);
    };
    Seq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, true);
    };
    createClass(KeyedSeq, Seq);
    function KeyedSeq(value) {
      return value === null || value === void 0 ? emptySequence().toKeyedSeq() : isIterable(value) ? isKeyed(value) ? value.toSeq() : value.fromEntrySeq() : keyedSeqFromValue(value);
    }
    KeyedSeq.prototype.toKeyedSeq = function() {
      return this;
    };
    createClass(IndexedSeq, Seq);
    function IndexedSeq(value) {
      return value === null || value === void 0 ? emptySequence() : !isIterable(value) ? indexedSeqFromValue(value) : isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
    }
    IndexedSeq.of = function() {
      return IndexedSeq(arguments);
    };
    IndexedSeq.prototype.toIndexedSeq = function() {
      return this;
    };
    IndexedSeq.prototype.toString = function() {
      return this.__toString("Seq [", "]");
    };
    IndexedSeq.prototype.__iterate = function(fn2, reverse) {
      return seqIterate(this, fn2, reverse, false);
    };
    IndexedSeq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, false);
    };
    createClass(SetSeq, Seq);
    function SetSeq(value) {
      return (value === null || value === void 0 ? emptySequence() : !isIterable(value) ? indexedSeqFromValue(value) : isKeyed(value) ? value.entrySeq() : value).toSetSeq();
    }
    SetSeq.of = function() {
      return SetSeq(arguments);
    };
    SetSeq.prototype.toSetSeq = function() {
      return this;
    };
    Seq.isSeq = isSeq;
    Seq.Keyed = KeyedSeq;
    Seq.Set = SetSeq;
    Seq.Indexed = IndexedSeq;
    var IS_SEQ_SENTINEL = "@@__IMMUTABLE_SEQ__@@";
    Seq.prototype[IS_SEQ_SENTINEL] = true;
    createClass(ArraySeq, IndexedSeq);
    function ArraySeq(array) {
      this._array = array;
      this.size = array.length;
    }
    ArraySeq.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
    };
    ArraySeq.prototype.__iterate = function(fn2, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      for (var ii2 = 0; ii2 <= maxIndex; ii2++) {
        if (fn2(array[reverse ? maxIndex - ii2 : ii2], ii2, this) === false) {
          return ii2 + 1;
        }
      }
      return ii2;
    };
    ArraySeq.prototype.__iterator = function(type, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      var ii2 = 0;
      return new Iterator(
        function() {
          return ii2 > maxIndex ? iteratorDone() : iteratorValue(type, ii2, array[reverse ? maxIndex - ii2++ : ii2++]);
        }
      );
    };
    createClass(ObjectSeq, KeyedSeq);
    function ObjectSeq(object) {
      var keys = Object.keys(object);
      this._object = object;
      this._keys = keys;
      this.size = keys.length;
    }
    ObjectSeq.prototype.get = function(key, notSetValue) {
      if (notSetValue !== void 0 && !this.has(key)) {
        return notSetValue;
      }
      return this._object[key];
    };
    ObjectSeq.prototype.has = function(key) {
      return this._object.hasOwnProperty(key);
    };
    ObjectSeq.prototype.__iterate = function(fn2, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      for (var ii2 = 0; ii2 <= maxIndex; ii2++) {
        var key = keys[reverse ? maxIndex - ii2 : ii2];
        if (fn2(object[key], key, this) === false) {
          return ii2 + 1;
        }
      }
      return ii2;
    };
    ObjectSeq.prototype.__iterator = function(type, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      var ii2 = 0;
      return new Iterator(function() {
        var key = keys[reverse ? maxIndex - ii2 : ii2];
        return ii2++ > maxIndex ? iteratorDone() : iteratorValue(type, key, object[key]);
      });
    };
    ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;
    createClass(IterableSeq, IndexedSeq);
    function IterableSeq(iterable) {
      this._iterable = iterable;
      this.size = iterable.length || iterable.size;
    }
    IterableSeq.prototype.__iterateUncached = function(fn2, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn2, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      var iterations = 0;
      if (isIterator(iterator)) {
        var step;
        while (!(step = iterator.next()).done) {
          if (fn2(step.value, iterations++, this) === false) {
            break;
          }
        }
      }
      return iterations;
    };
    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      if (!isIterator(iterator)) {
        return new Iterator(iteratorDone);
      }
      var iterations = 0;
      return new Iterator(function() {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, iterations++, step.value);
      });
    };
    createClass(IteratorSeq, IndexedSeq);
    function IteratorSeq(iterator) {
      this._iterator = iterator;
      this._iteratorCache = [];
    }
    IteratorSeq.prototype.__iterateUncached = function(fn2, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn2, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      while (iterations < cache.length) {
        if (fn2(cache[iterations], iterations++, this) === false) {
          return iterations;
        }
      }
      var step;
      while (!(step = iterator.next()).done) {
        var val = step.value;
        cache[iterations] = val;
        if (fn2(val, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };
    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      return new Iterator(function() {
        if (iterations >= cache.length) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          cache[iterations] = step.value;
        }
        return iteratorValue(type, iterations, cache[iterations++]);
      });
    };
    function isSeq(maybeSeq) {
      return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
    }
    var EMPTY_SEQ;
    function emptySequence() {
      return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
    }
    function keyedSeqFromValue(value) {
      var seq = Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() : isIterator(value) ? new IteratorSeq(value).fromEntrySeq() : hasIterator(value) ? new IterableSeq(value).fromEntrySeq() : typeof value === "object" ? new ObjectSeq(value) : void 0;
      if (!seq) {
        throw new TypeError(
          "Expected Array or iterable object of [k, v] entries, or keyed object: " + value
        );
      }
      return seq;
    }
    function indexedSeqFromValue(value) {
      var seq = maybeIndexedSeqFromValue(value);
      if (!seq) {
        throw new TypeError(
          "Expected Array or iterable object of values: " + value
        );
      }
      return seq;
    }
    function seqFromValue(value) {
      var seq = maybeIndexedSeqFromValue(value) || typeof value === "object" && new ObjectSeq(value);
      if (!seq) {
        throw new TypeError(
          "Expected Array or iterable object of values, or keyed object: " + value
        );
      }
      return seq;
    }
    function maybeIndexedSeqFromValue(value) {
      return isArrayLike(value) ? new ArraySeq(value) : isIterator(value) ? new IteratorSeq(value) : hasIterator(value) ? new IterableSeq(value) : void 0;
    }
    function seqIterate(seq, fn2, reverse, useKeys) {
      var cache = seq._cache;
      if (cache) {
        var maxIndex = cache.length - 1;
        for (var ii2 = 0; ii2 <= maxIndex; ii2++) {
          var entry = cache[reverse ? maxIndex - ii2 : ii2];
          if (fn2(entry[1], useKeys ? entry[0] : ii2, seq) === false) {
            return ii2 + 1;
          }
        }
        return ii2;
      }
      return seq.__iterateUncached(fn2, reverse);
    }
    function seqIterator(seq, type, reverse, useKeys) {
      var cache = seq._cache;
      if (cache) {
        var maxIndex = cache.length - 1;
        var ii2 = 0;
        return new Iterator(function() {
          var entry = cache[reverse ? maxIndex - ii2 : ii2];
          return ii2++ > maxIndex ? iteratorDone() : iteratorValue(type, useKeys ? entry[0] : ii2 - 1, entry[1]);
        });
      }
      return seq.__iteratorUncached(type, reverse);
    }
    function fromJS2(json, converter) {
      return converter ? fromJSWith(converter, json, "", { "": json }) : fromJSDefault(json);
    }
    function fromJSWith(converter, json, key, parentJSON) {
      if (Array.isArray(json)) {
        return converter.call(parentJSON, key, IndexedSeq(json).map(function(v2, k2) {
          return fromJSWith(converter, v2, k2, json);
        }));
      }
      if (isPlainObj(json)) {
        return converter.call(parentJSON, key, KeyedSeq(json).map(function(v2, k2) {
          return fromJSWith(converter, v2, k2, json);
        }));
      }
      return json;
    }
    function fromJSDefault(json) {
      if (Array.isArray(json)) {
        return IndexedSeq(json).map(fromJSDefault).toList();
      }
      if (isPlainObj(json)) {
        return KeyedSeq(json).map(fromJSDefault).toMap();
      }
      return json;
    }
    function isPlainObj(value) {
      return value && (value.constructor === Object || value.constructor === void 0);
    }
    function is2(valueA, valueB) {
      if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
        return true;
      }
      if (!valueA || !valueB) {
        return false;
      }
      if (typeof valueA.valueOf === "function" && typeof valueB.valueOf === "function") {
        valueA = valueA.valueOf();
        valueB = valueB.valueOf();
        if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
          return true;
        }
        if (!valueA || !valueB) {
          return false;
        }
      }
      if (typeof valueA.equals === "function" && typeof valueB.equals === "function" && valueA.equals(valueB)) {
        return true;
      }
      return false;
    }
    function deepEqual(a2, b2) {
      if (a2 === b2) {
        return true;
      }
      if (!isIterable(b2) || a2.size !== void 0 && b2.size !== void 0 && a2.size !== b2.size || a2.__hash !== void 0 && b2.__hash !== void 0 && a2.__hash !== b2.__hash || isKeyed(a2) !== isKeyed(b2) || isIndexed(a2) !== isIndexed(b2) || isOrdered(a2) !== isOrdered(b2)) {
        return false;
      }
      if (a2.size === 0 && b2.size === 0) {
        return true;
      }
      var notAssociative = !isAssociative(a2);
      if (isOrdered(a2)) {
        var entries = a2.entries();
        return b2.every(function(v2, k2) {
          var entry = entries.next().value;
          return entry && is2(entry[1], v2) && (notAssociative || is2(entry[0], k2));
        }) && entries.next().done;
      }
      var flipped = false;
      if (a2.size === void 0) {
        if (b2.size === void 0) {
          if (typeof a2.cacheResult === "function") {
            a2.cacheResult();
          }
        } else {
          flipped = true;
          var _2 = a2;
          a2 = b2;
          b2 = _2;
        }
      }
      var allEqual = true;
      var bSize = b2.__iterate(function(v2, k2) {
        if (notAssociative ? !a2.has(v2) : flipped ? !is2(v2, a2.get(k2, NOT_SET)) : !is2(a2.get(k2, NOT_SET), v2)) {
          allEqual = false;
          return false;
        }
      });
      return allEqual && a2.size === bSize;
    }
    createClass(Repeat2, IndexedSeq);
    function Repeat2(value, times) {
      if (!(this instanceof Repeat2)) {
        return new Repeat2(value, times);
      }
      this._value = value;
      this.size = times === void 0 ? Infinity : Math.max(0, times);
      if (this.size === 0) {
        if (EMPTY_REPEAT) {
          return EMPTY_REPEAT;
        }
        EMPTY_REPEAT = this;
      }
    }
    Repeat2.prototype.toString = function() {
      if (this.size === 0) {
        return "Repeat []";
      }
      return "Repeat [ " + this._value + " " + this.size + " times ]";
    };
    Repeat2.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._value : notSetValue;
    };
    Repeat2.prototype.includes = function(searchValue) {
      return is2(this._value, searchValue);
    };
    Repeat2.prototype.slice = function(begin, end) {
      var size = this.size;
      return wholeSlice(begin, end, size) ? this : new Repeat2(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
    };
    Repeat2.prototype.reverse = function() {
      return this;
    };
    Repeat2.prototype.indexOf = function(searchValue) {
      if (is2(this._value, searchValue)) {
        return 0;
      }
      return -1;
    };
    Repeat2.prototype.lastIndexOf = function(searchValue) {
      if (is2(this._value, searchValue)) {
        return this.size;
      }
      return -1;
    };
    Repeat2.prototype.__iterate = function(fn2, reverse) {
      for (var ii2 = 0; ii2 < this.size; ii2++) {
        if (fn2(this._value, ii2, this) === false) {
          return ii2 + 1;
        }
      }
      return ii2;
    };
    Repeat2.prototype.__iterator = function(type, reverse) {
      var this$0 = this;
      var ii2 = 0;
      return new Iterator(
        function() {
          return ii2 < this$0.size ? iteratorValue(type, ii2++, this$0._value) : iteratorDone();
        }
      );
    };
    Repeat2.prototype.equals = function(other) {
      return other instanceof Repeat2 ? is2(this._value, other._value) : deepEqual(other);
    };
    var EMPTY_REPEAT;
    function invariant2(condition, error) {
      if (!condition)
        throw new Error(error);
    }
    createClass(Range, IndexedSeq);
    function Range(start, end, step) {
      if (!(this instanceof Range)) {
        return new Range(start, end, step);
      }
      invariant2(step !== 0, "Cannot step a Range by 0");
      start = start || 0;
      if (end === void 0) {
        end = Infinity;
      }
      step = step === void 0 ? 1 : Math.abs(step);
      if (end < start) {
        step = -step;
      }
      this._start = start;
      this._end = end;
      this._step = step;
      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
      if (this.size === 0) {
        if (EMPTY_RANGE) {
          return EMPTY_RANGE;
        }
        EMPTY_RANGE = this;
      }
    }
    Range.prototype.toString = function() {
      if (this.size === 0) {
        return "Range []";
      }
      return "Range [ " + this._start + "..." + this._end + (this._step > 1 ? " by " + this._step : "") + " ]";
    };
    Range.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._start + wrapIndex(this, index) * this._step : notSetValue;
    };
    Range.prototype.includes = function(searchValue) {
      var possibleIndex = (searchValue - this._start) / this._step;
      return possibleIndex >= 0 && possibleIndex < this.size && possibleIndex === Math.floor(possibleIndex);
    };
    Range.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      begin = resolveBegin(begin, this.size);
      end = resolveEnd(end, this.size);
      if (end <= begin) {
        return new Range(0, 0);
      }
      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
    };
    Range.prototype.indexOf = function(searchValue) {
      var offsetValue = searchValue - this._start;
      if (offsetValue % this._step === 0) {
        var index = offsetValue / this._step;
        if (index >= 0 && index < this.size) {
          return index;
        }
      }
      return -1;
    };
    Range.prototype.lastIndexOf = function(searchValue) {
      return this.indexOf(searchValue);
    };
    Range.prototype.__iterate = function(fn2, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      for (var ii2 = 0; ii2 <= maxIndex; ii2++) {
        if (fn2(value, ii2, this) === false) {
          return ii2 + 1;
        }
        value += reverse ? -step : step;
      }
      return ii2;
    };
    Range.prototype.__iterator = function(type, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      var ii2 = 0;
      return new Iterator(function() {
        var v2 = value;
        value += reverse ? -step : step;
        return ii2 > maxIndex ? iteratorDone() : iteratorValue(type, ii2++, v2);
      });
    };
    Range.prototype.equals = function(other) {
      return other instanceof Range ? this._start === other._start && this._end === other._end && this._step === other._step : deepEqual(this, other);
    };
    var EMPTY_RANGE;
    createClass(Collection, Iterable);
    function Collection() {
      throw TypeError("Abstract");
    }
    createClass(KeyedCollection, Collection);
    function KeyedCollection() {
    }
    createClass(IndexedCollection, Collection);
    function IndexedCollection() {
    }
    createClass(SetCollection, Collection);
    function SetCollection() {
    }
    Collection.Keyed = KeyedCollection;
    Collection.Indexed = IndexedCollection;
    Collection.Set = SetCollection;
    var imul = typeof Math.imul === "function" && Math.imul(4294967295, 2) === -2 ? Math.imul : function imul2(a2, b2) {
      a2 = a2 | 0;
      b2 = b2 | 0;
      var c2 = a2 & 65535;
      var d2 = b2 & 65535;
      return c2 * d2 + ((a2 >>> 16) * d2 + c2 * (b2 >>> 16) << 16 >>> 0) | 0;
    };
    function smi(i32) {
      return i32 >>> 1 & 1073741824 | i32 & 3221225471;
    }
    function hash(o2) {
      if (o2 === false || o2 === null || o2 === void 0) {
        return 0;
      }
      if (typeof o2.valueOf === "function") {
        o2 = o2.valueOf();
        if (o2 === false || o2 === null || o2 === void 0) {
          return 0;
        }
      }
      if (o2 === true) {
        return 1;
      }
      var type = typeof o2;
      if (type === "number") {
        var h2 = o2 | 0;
        if (h2 !== o2) {
          h2 ^= o2 * 4294967295;
        }
        while (o2 > 4294967295) {
          o2 /= 4294967295;
          h2 ^= o2;
        }
        return smi(h2);
      }
      if (type === "string") {
        return o2.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o2) : hashString(o2);
      }
      if (typeof o2.hashCode === "function") {
        return o2.hashCode();
      }
      if (type === "object") {
        return hashJSObj(o2);
      }
      if (typeof o2.toString === "function") {
        return hashString(o2.toString());
      }
      throw new Error("Value type " + type + " cannot be hashed.");
    }
    function cachedHashString(string) {
      var hash2 = stringHashCache[string];
      if (hash2 === void 0) {
        hash2 = hashString(string);
        if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
          STRING_HASH_CACHE_SIZE = 0;
          stringHashCache = {};
        }
        STRING_HASH_CACHE_SIZE++;
        stringHashCache[string] = hash2;
      }
      return hash2;
    }
    function hashString(string) {
      var hash2 = 0;
      for (var ii2 = 0; ii2 < string.length; ii2++) {
        hash2 = 31 * hash2 + string.charCodeAt(ii2) | 0;
      }
      return smi(hash2);
    }
    function hashJSObj(obj) {
      var hash2;
      if (usingWeakMap) {
        hash2 = weakMap.get(obj);
        if (hash2 !== void 0) {
          return hash2;
        }
      }
      hash2 = obj[UID_HASH_KEY];
      if (hash2 !== void 0) {
        return hash2;
      }
      if (!canDefineProperty) {
        hash2 = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
        if (hash2 !== void 0) {
          return hash2;
        }
        hash2 = getIENodeHash(obj);
        if (hash2 !== void 0) {
          return hash2;
        }
      }
      hash2 = ++objHashUID;
      if (objHashUID & 1073741824) {
        objHashUID = 0;
      }
      if (usingWeakMap) {
        weakMap.set(obj, hash2);
      } else if (isExtensible !== void 0 && isExtensible(obj) === false) {
        throw new Error("Non-extensible objects are not allowed as keys.");
      } else if (canDefineProperty) {
        Object.defineProperty(obj, UID_HASH_KEY, {
          "enumerable": false,
          "configurable": false,
          "writable": false,
          "value": hash2
        });
      } else if (obj.propertyIsEnumerable !== void 0 && obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
        obj.propertyIsEnumerable = function() {
          return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
        };
        obj.propertyIsEnumerable[UID_HASH_KEY] = hash2;
      } else if (obj.nodeType !== void 0) {
        obj[UID_HASH_KEY] = hash2;
      } else {
        throw new Error("Unable to set a non-enumerable property on object.");
      }
      return hash2;
    }
    var isExtensible = Object.isExtensible;
    var canDefineProperty = function() {
      try {
        Object.defineProperty({}, "@", {});
        return true;
      } catch (e2) {
        return false;
      }
    }();
    function getIENodeHash(node) {
      if (node && node.nodeType > 0) {
        switch (node.nodeType) {
          case 1:
            return node.uniqueID;
          case 9:
            return node.documentElement && node.documentElement.uniqueID;
        }
      }
    }
    var usingWeakMap = typeof WeakMap === "function";
    var weakMap;
    if (usingWeakMap) {
      weakMap = /* @__PURE__ */ new WeakMap();
    }
    var objHashUID = 0;
    var UID_HASH_KEY = "__immutablehash__";
    if (typeof Symbol === "function") {
      UID_HASH_KEY = Symbol(UID_HASH_KEY);
    }
    var STRING_HASH_CACHE_MIN_STRLEN = 16;
    var STRING_HASH_CACHE_MAX_SIZE = 255;
    var STRING_HASH_CACHE_SIZE = 0;
    var stringHashCache = {};
    function assertNotInfinite(size) {
      invariant2(
        size !== Infinity,
        "Cannot perform this action with an infinite size."
      );
    }
    createClass(Map2, KeyedCollection);
    function Map2(value) {
      return value === null || value === void 0 ? emptyMap() : isMap(value) && !isOrdered(value) ? value : emptyMap().withMutations(function(map) {
        var iter = KeyedIterable(value);
        assertNotInfinite(iter.size);
        iter.forEach(function(v2, k2) {
          return map.set(k2, v2);
        });
      });
    }
    Map2.prototype.toString = function() {
      return this.__toString("Map {", "}");
    };
    Map2.prototype.get = function(k2, notSetValue) {
      return this._root ? this._root.get(0, void 0, k2, notSetValue) : notSetValue;
    };
    Map2.prototype.set = function(k2, v2) {
      return updateMap(this, k2, v2);
    };
    Map2.prototype.setIn = function(keyPath, v2) {
      return this.updateIn(keyPath, NOT_SET, function() {
        return v2;
      });
    };
    Map2.prototype.remove = function(k2) {
      return updateMap(this, k2, NOT_SET);
    };
    Map2.prototype.deleteIn = function(keyPath) {
      return this.updateIn(keyPath, function() {
        return NOT_SET;
      });
    };
    Map2.prototype.update = function(k2, notSetValue, updater) {
      return arguments.length === 1 ? k2(this) : this.updateIn([k2], notSetValue, updater);
    };
    Map2.prototype.updateIn = function(keyPath, notSetValue, updater) {
      if (!updater) {
        updater = notSetValue;
        notSetValue = void 0;
      }
      var updatedValue = updateInDeepMap(
        this,
        forceIterator(keyPath),
        notSetValue,
        updater
      );
      return updatedValue === NOT_SET ? void 0 : updatedValue;
    };
    Map2.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._root = null;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return emptyMap();
    };
    Map2.prototype.merge = function() {
      return mergeIntoMapWith(this, void 0, arguments);
    };
    Map2.prototype.mergeWith = function(merger) {
      var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, merger, iters);
    };
    Map2.prototype.mergeIn = function(keyPath) {
      var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m2) {
          return typeof m2.merge === "function" ? m2.merge.apply(m2, iters) : iters[iters.length - 1];
        }
      );
    };
    Map2.prototype.mergeDeep = function() {
      return mergeIntoMapWith(this, deepMerger, arguments);
    };
    Map2.prototype.mergeDeepWith = function(merger) {
      var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
    };
    Map2.prototype.mergeDeepIn = function(keyPath) {
      var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m2) {
          return typeof m2.mergeDeep === "function" ? m2.mergeDeep.apply(m2, iters) : iters[iters.length - 1];
        }
      );
    };
    Map2.prototype.sort = function(comparator) {
      return OrderedMap2(sortFactory(this, comparator));
    };
    Map2.prototype.sortBy = function(mapper, comparator) {
      return OrderedMap2(sortFactory(this, comparator, mapper));
    };
    Map2.prototype.withMutations = function(fn2) {
      var mutable = this.asMutable();
      fn2(mutable);
      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
    };
    Map2.prototype.asMutable = function() {
      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
    };
    Map2.prototype.asImmutable = function() {
      return this.__ensureOwner();
    };
    Map2.prototype.wasAltered = function() {
      return this.__altered;
    };
    Map2.prototype.__iterator = function(type, reverse) {
      return new MapIterator(this, type, reverse);
    };
    Map2.prototype.__iterate = function(fn2, reverse) {
      var this$0 = this;
      var iterations = 0;
      this._root && this._root.iterate(function(entry) {
        iterations++;
        return fn2(entry[1], entry[0], this$0);
      }, reverse);
      return iterations;
    };
    Map2.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeMap(this.size, this._root, ownerID, this.__hash);
    };
    function isMap(maybeMap) {
      return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
    }
    Map2.isMap = isMap;
    var IS_MAP_SENTINEL = "@@__IMMUTABLE_MAP__@@";
    var MapPrototype = Map2.prototype;
    MapPrototype[IS_MAP_SENTINEL] = true;
    MapPrototype[DELETE] = MapPrototype.remove;
    MapPrototype.removeIn = MapPrototype.deleteIn;
    function ArrayMapNode(ownerID, entries) {
      this.ownerID = ownerID;
      this.entries = entries;
    }
    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii2 = 0, len = entries.length; ii2 < len; ii2++) {
        if (is2(key, entries[ii2][0])) {
          return entries[ii2][1];
        }
      }
      return notSetValue;
    };
    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;
      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is2(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;
      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }
      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);
      if (removed && entries.length === 1) {
        return;
      }
      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
        return createNodes(ownerID, entries, key, value);
      }
      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);
      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }
      if (isEditable) {
        this.entries = newEntries;
        return this;
      }
      return new ArrayMapNode(ownerID, newEntries);
    };
    function BitmapIndexedNode(ownerID, bitmap, nodes) {
      this.ownerID = ownerID;
      this.bitmap = bitmap;
      this.nodes = nodes;
    }
    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === void 0) {
        keyHash = hash(key);
      }
      var bit = 1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK);
      var bitmap = this.bitmap;
      return (bitmap & bit) === 0 ? notSetValue : this.nodes[popCount(bitmap & bit - 1)].get(shift + SHIFT, keyHash, key, notSetValue);
    };
    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === void 0) {
        keyHash = hash(key);
      }
      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var bit = 1 << keyHashFrag;
      var bitmap = this.bitmap;
      var exists = (bitmap & bit) !== 0;
      if (!exists && value === NOT_SET) {
        return this;
      }
      var idx = popCount(bitmap & bit - 1);
      var nodes = this.nodes;
      var node = exists ? nodes[idx] : void 0;
      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
      if (newNode === node) {
        return this;
      }
      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
      }
      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
        return nodes[idx ^ 1];
      }
      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
        return newNode;
      }
      var isEditable = ownerID && ownerID === this.ownerID;
      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
      var newNodes = exists ? newNode ? setIn(nodes, idx, newNode, isEditable) : spliceOut(nodes, idx, isEditable) : spliceIn(nodes, idx, newNode, isEditable);
      if (isEditable) {
        this.bitmap = newBitmap;
        this.nodes = newNodes;
        return this;
      }
      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
    };
    function HashArrayMapNode(ownerID, count, nodes) {
      this.ownerID = ownerID;
      this.count = count;
      this.nodes = nodes;
    }
    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === void 0) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var node = this.nodes[idx];
      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
    };
    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === void 0) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var removed = value === NOT_SET;
      var nodes = this.nodes;
      var node = nodes[idx];
      if (removed && !node) {
        return this;
      }
      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
      if (newNode === node) {
        return this;
      }
      var newCount = this.count;
      if (!node) {
        newCount++;
      } else if (!newNode) {
        newCount--;
        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
          return packNodes(ownerID, nodes, newCount, idx);
        }
      }
      var isEditable = ownerID && ownerID === this.ownerID;
      var newNodes = setIn(nodes, idx, newNode, isEditable);
      if (isEditable) {
        this.count = newCount;
        this.nodes = newNodes;
        return this;
      }
      return new HashArrayMapNode(ownerID, newCount, newNodes);
    };
    function HashCollisionNode(ownerID, keyHash, entries) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entries = entries;
    }
    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii2 = 0, len = entries.length; ii2 < len; ii2++) {
        if (is2(key, entries[ii2][0])) {
          return entries[ii2][1];
        }
      }
      return notSetValue;
    };
    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === void 0) {
        keyHash = hash(key);
      }
      var removed = value === NOT_SET;
      if (keyHash !== this.keyHash) {
        if (removed) {
          return this;
        }
        SetRef(didAlter);
        SetRef(didChangeSize);
        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
      }
      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is2(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;
      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }
      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);
      if (removed && len === 2) {
        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
      }
      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);
      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }
      if (isEditable) {
        this.entries = newEntries;
        return this;
      }
      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
    };
    function ValueNode(ownerID, keyHash, entry) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entry = entry;
    }
    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      return is2(key, this.entry[0]) ? this.entry[1] : notSetValue;
    };
    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;
      var keyMatch = is2(key, this.entry[0]);
      if (keyMatch ? value === this.entry[1] : removed) {
        return this;
      }
      SetRef(didAlter);
      if (removed) {
        SetRef(didChangeSize);
        return;
      }
      if (keyMatch) {
        if (ownerID && ownerID === this.ownerID) {
          this.entry[1] = value;
          return this;
        }
        return new ValueNode(ownerID, this.keyHash, [key, value]);
      }
      SetRef(didChangeSize);
      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
    };
    ArrayMapNode.prototype.iterate = HashCollisionNode.prototype.iterate = function(fn2, reverse) {
      var entries = this.entries;
      for (var ii2 = 0, maxIndex = entries.length - 1; ii2 <= maxIndex; ii2++) {
        if (fn2(entries[reverse ? maxIndex - ii2 : ii2]) === false) {
          return false;
        }
      }
    };
    BitmapIndexedNode.prototype.iterate = HashArrayMapNode.prototype.iterate = function(fn2, reverse) {
      var nodes = this.nodes;
      for (var ii2 = 0, maxIndex = nodes.length - 1; ii2 <= maxIndex; ii2++) {
        var node = nodes[reverse ? maxIndex - ii2 : ii2];
        if (node && node.iterate(fn2, reverse) === false) {
          return false;
        }
      }
    };
    ValueNode.prototype.iterate = function(fn2, reverse) {
      return fn2(this.entry);
    };
    createClass(MapIterator, Iterator);
    function MapIterator(map, type, reverse) {
      this._type = type;
      this._reverse = reverse;
      this._stack = map._root && mapIteratorFrame(map._root);
    }
    MapIterator.prototype.next = function() {
      var type = this._type;
      var stack = this._stack;
      while (stack) {
        var node = stack.node;
        var index = stack.index++;
        var maxIndex;
        if (node.entry) {
          if (index === 0) {
            return mapIteratorValue(type, node.entry);
          }
        } else if (node.entries) {
          maxIndex = node.entries.length - 1;
          if (index <= maxIndex) {
            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
          }
        } else {
          maxIndex = node.nodes.length - 1;
          if (index <= maxIndex) {
            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
            if (subNode) {
              if (subNode.entry) {
                return mapIteratorValue(type, subNode.entry);
              }
              stack = this._stack = mapIteratorFrame(subNode, stack);
            }
            continue;
          }
        }
        stack = this._stack = this._stack.__prev;
      }
      return iteratorDone();
    };
    function mapIteratorValue(type, entry) {
      return iteratorValue(type, entry[0], entry[1]);
    }
    function mapIteratorFrame(node, prev) {
      return {
        node,
        index: 0,
        __prev: prev
      };
    }
    function makeMap(size, root, ownerID, hash2) {
      var map = Object.create(MapPrototype);
      map.size = size;
      map._root = root;
      map.__ownerID = ownerID;
      map.__hash = hash2;
      map.__altered = false;
      return map;
    }
    var EMPTY_MAP;
    function emptyMap() {
      return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
    }
    function updateMap(map, k2, v2) {
      var newRoot;
      var newSize;
      if (!map._root) {
        if (v2 === NOT_SET) {
          return map;
        }
        newSize = 1;
        newRoot = new ArrayMapNode(map.__ownerID, [[k2, v2]]);
      } else {
        var didChangeSize = MakeRef(CHANGE_LENGTH);
        var didAlter = MakeRef(DID_ALTER);
        newRoot = updateNode(map._root, map.__ownerID, 0, void 0, k2, v2, didChangeSize, didAlter);
        if (!didAlter.value) {
          return map;
        }
        newSize = map.size + (didChangeSize.value ? v2 === NOT_SET ? -1 : 1 : 0);
      }
      if (map.__ownerID) {
        map.size = newSize;
        map._root = newRoot;
        map.__hash = void 0;
        map.__altered = true;
        return map;
      }
      return newRoot ? makeMap(newSize, newRoot) : emptyMap();
    }
    function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (!node) {
        if (value === NOT_SET) {
          return node;
        }
        SetRef(didAlter);
        SetRef(didChangeSize);
        return new ValueNode(ownerID, keyHash, [key, value]);
      }
      return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
    }
    function isLeafNode(node) {
      return node.constructor === ValueNode || node.constructor === HashCollisionNode;
    }
    function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
      if (node.keyHash === keyHash) {
        return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
      }
      var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
      var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var newNode;
      var nodes = idx1 === idx2 ? [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] : (newNode = new ValueNode(ownerID, keyHash, entry), idx1 < idx2 ? [node, newNode] : [newNode, node]);
      return new BitmapIndexedNode(ownerID, 1 << idx1 | 1 << idx2, nodes);
    }
    function createNodes(ownerID, entries, key, value) {
      if (!ownerID) {
        ownerID = new OwnerID();
      }
      var node = new ValueNode(ownerID, hash(key), [key, value]);
      for (var ii2 = 0; ii2 < entries.length; ii2++) {
        var entry = entries[ii2];
        node = node.update(ownerID, 0, void 0, entry[0], entry[1]);
      }
      return node;
    }
    function packNodes(ownerID, nodes, count, excluding) {
      var bitmap = 0;
      var packedII = 0;
      var packedNodes = new Array(count);
      for (var ii2 = 0, bit = 1, len = nodes.length; ii2 < len; ii2++, bit <<= 1) {
        var node = nodes[ii2];
        if (node !== void 0 && ii2 !== excluding) {
          bitmap |= bit;
          packedNodes[packedII++] = node;
        }
      }
      return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
    }
    function expandNodes(ownerID, nodes, bitmap, including, node) {
      var count = 0;
      var expandedNodes = new Array(SIZE);
      for (var ii2 = 0; bitmap !== 0; ii2++, bitmap >>>= 1) {
        expandedNodes[ii2] = bitmap & 1 ? nodes[count++] : void 0;
      }
      expandedNodes[including] = node;
      return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
    }
    function mergeIntoMapWith(map, merger, iterables) {
      var iters = [];
      for (var ii2 = 0; ii2 < iterables.length; ii2++) {
        var value = iterables[ii2];
        var iter = KeyedIterable(value);
        if (!isIterable(value)) {
          iter = iter.map(function(v2) {
            return fromJS2(v2);
          });
        }
        iters.push(iter);
      }
      return mergeIntoCollectionWith(map, merger, iters);
    }
    function deepMerger(existing, value, key) {
      return existing && existing.mergeDeep && isIterable(value) ? existing.mergeDeep(value) : is2(existing, value) ? existing : value;
    }
    function deepMergerWith(merger) {
      return function(existing, value, key) {
        if (existing && existing.mergeDeepWith && isIterable(value)) {
          return existing.mergeDeepWith(merger, value);
        }
        var nextValue = merger(existing, value, key);
        return is2(existing, nextValue) ? existing : nextValue;
      };
    }
    function mergeIntoCollectionWith(collection, merger, iters) {
      iters = iters.filter(function(x2) {
        return x2.size !== 0;
      });
      if (iters.length === 0) {
        return collection;
      }
      if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
        return collection.constructor(iters[0]);
      }
      return collection.withMutations(function(collection2) {
        var mergeIntoMap = merger ? function(value, key) {
          collection2.update(
            key,
            NOT_SET,
            function(existing) {
              return existing === NOT_SET ? value : merger(existing, value, key);
            }
          );
        } : function(value, key) {
          collection2.set(key, value);
        };
        for (var ii2 = 0; ii2 < iters.length; ii2++) {
          iters[ii2].forEach(mergeIntoMap);
        }
      });
    }
    function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
      var isNotSet = existing === NOT_SET;
      var step = keyPathIter.next();
      if (step.done) {
        var existingValue = isNotSet ? notSetValue : existing;
        var newValue = updater(existingValue);
        return newValue === existingValue ? existing : newValue;
      }
      invariant2(
        isNotSet || existing && existing.set,
        "invalid keyPath"
      );
      var key = step.value;
      var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
      var nextUpdated = updateInDeepMap(
        nextExisting,
        keyPathIter,
        notSetValue,
        updater
      );
      return nextUpdated === nextExisting ? existing : nextUpdated === NOT_SET ? existing.remove(key) : (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
    }
    function popCount(x2) {
      x2 = x2 - (x2 >> 1 & 1431655765);
      x2 = (x2 & 858993459) + (x2 >> 2 & 858993459);
      x2 = x2 + (x2 >> 4) & 252645135;
      x2 = x2 + (x2 >> 8);
      x2 = x2 + (x2 >> 16);
      return x2 & 127;
    }
    function setIn(array, idx, val, canEdit) {
      var newArray = canEdit ? array : arrCopy(array);
      newArray[idx] = val;
      return newArray;
    }
    function spliceIn(array, idx, val, canEdit) {
      var newLen = array.length + 1;
      if (canEdit && idx + 1 === newLen) {
        array[idx] = val;
        return array;
      }
      var newArray = new Array(newLen);
      var after = 0;
      for (var ii2 = 0; ii2 < newLen; ii2++) {
        if (ii2 === idx) {
          newArray[ii2] = val;
          after = -1;
        } else {
          newArray[ii2] = array[ii2 + after];
        }
      }
      return newArray;
    }
    function spliceOut(array, idx, canEdit) {
      var newLen = array.length - 1;
      if (canEdit && idx === newLen) {
        array.pop();
        return array;
      }
      var newArray = new Array(newLen);
      var after = 0;
      for (var ii2 = 0; ii2 < newLen; ii2++) {
        if (ii2 === idx) {
          after = 1;
        }
        newArray[ii2] = array[ii2 + after];
      }
      return newArray;
    }
    var MAX_ARRAY_MAP_SIZE = SIZE / 4;
    var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
    var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;
    createClass(List2, IndexedCollection);
    function List2(value) {
      var empty = emptyList();
      if (value === null || value === void 0) {
        return empty;
      }
      if (isList(value)) {
        return value;
      }
      var iter = IndexedIterable(value);
      var size = iter.size;
      if (size === 0) {
        return empty;
      }
      assertNotInfinite(size);
      if (size > 0 && size < SIZE) {
        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
      }
      return empty.withMutations(function(list) {
        list.setSize(size);
        iter.forEach(function(v2, i2) {
          return list.set(i2, v2);
        });
      });
    }
    List2.of = function() {
      return this(arguments);
    };
    List2.prototype.toString = function() {
      return this.__toString("List [", "]");
    };
    List2.prototype.get = function(index, notSetValue) {
      index = wrapIndex(this, index);
      if (index >= 0 && index < this.size) {
        index += this._origin;
        var node = listNodeFor(this, index);
        return node && node.array[index & MASK];
      }
      return notSetValue;
    };
    List2.prototype.set = function(index, value) {
      return updateList(this, index, value);
    };
    List2.prototype.remove = function(index) {
      return !this.has(index) ? this : index === 0 ? this.shift() : index === this.size - 1 ? this.pop() : this.splice(index, 1);
    };
    List2.prototype.insert = function(index, value) {
      return this.splice(index, 0, value);
    };
    List2.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = this._origin = this._capacity = 0;
        this._level = SHIFT;
        this._root = this._tail = null;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return emptyList();
    };
    List2.prototype.push = function() {
      var values = arguments;
      var oldSize = this.size;
      return this.withMutations(function(list) {
        setListBounds(list, 0, oldSize + values.length);
        for (var ii2 = 0; ii2 < values.length; ii2++) {
          list.set(oldSize + ii2, values[ii2]);
        }
      });
    };
    List2.prototype.pop = function() {
      return setListBounds(this, 0, -1);
    };
    List2.prototype.unshift = function() {
      var values = arguments;
      return this.withMutations(function(list) {
        setListBounds(list, -values.length);
        for (var ii2 = 0; ii2 < values.length; ii2++) {
          list.set(ii2, values[ii2]);
        }
      });
    };
    List2.prototype.shift = function() {
      return setListBounds(this, 1);
    };
    List2.prototype.merge = function() {
      return mergeIntoListWith(this, void 0, arguments);
    };
    List2.prototype.mergeWith = function(merger) {
      var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, merger, iters);
    };
    List2.prototype.mergeDeep = function() {
      return mergeIntoListWith(this, deepMerger, arguments);
    };
    List2.prototype.mergeDeepWith = function(merger) {
      var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, deepMergerWith(merger), iters);
    };
    List2.prototype.setSize = function(size) {
      return setListBounds(this, 0, size);
    };
    List2.prototype.slice = function(begin, end) {
      var size = this.size;
      if (wholeSlice(begin, end, size)) {
        return this;
      }
      return setListBounds(
        this,
        resolveBegin(begin, size),
        resolveEnd(end, size)
      );
    };
    List2.prototype.__iterator = function(type, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      return new Iterator(function() {
        var value = values();
        return value === DONE ? iteratorDone() : iteratorValue(type, index++, value);
      });
    };
    List2.prototype.__iterate = function(fn2, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      var value;
      while ((value = values()) !== DONE) {
        if (fn2(value, index++, this) === false) {
          break;
        }
      }
      return index;
    };
    List2.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        return this;
      }
      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
    };
    function isList(maybeList) {
      return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
    }
    List2.isList = isList;
    var IS_LIST_SENTINEL = "@@__IMMUTABLE_LIST__@@";
    var ListPrototype = List2.prototype;
    ListPrototype[IS_LIST_SENTINEL] = true;
    ListPrototype[DELETE] = ListPrototype.remove;
    ListPrototype.setIn = MapPrototype.setIn;
    ListPrototype.deleteIn = ListPrototype.removeIn = MapPrototype.removeIn;
    ListPrototype.update = MapPrototype.update;
    ListPrototype.updateIn = MapPrototype.updateIn;
    ListPrototype.mergeIn = MapPrototype.mergeIn;
    ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
    ListPrototype.withMutations = MapPrototype.withMutations;
    ListPrototype.asMutable = MapPrototype.asMutable;
    ListPrototype.asImmutable = MapPrototype.asImmutable;
    ListPrototype.wasAltered = MapPrototype.wasAltered;
    function VNode(array, ownerID) {
      this.array = array;
      this.ownerID = ownerID;
    }
    VNode.prototype.removeBefore = function(ownerID, level, index) {
      if (index === level ? 1 << level : this.array.length === 0) {
        return this;
      }
      var originIndex = index >>> level & MASK;
      if (originIndex >= this.array.length) {
        return new VNode([], ownerID);
      }
      var removingFirst = originIndex === 0;
      var newChild;
      if (level > 0) {
        var oldChild = this.array[originIndex];
        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
        if (newChild === oldChild && removingFirst) {
          return this;
        }
      }
      if (removingFirst && !newChild) {
        return this;
      }
      var editable = editableVNode(this, ownerID);
      if (!removingFirst) {
        for (var ii2 = 0; ii2 < originIndex; ii2++) {
          editable.array[ii2] = void 0;
        }
      }
      if (newChild) {
        editable.array[originIndex] = newChild;
      }
      return editable;
    };
    VNode.prototype.removeAfter = function(ownerID, level, index) {
      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
        return this;
      }
      var sizeIndex = index - 1 >>> level & MASK;
      if (sizeIndex >= this.array.length) {
        return this;
      }
      var newChild;
      if (level > 0) {
        var oldChild = this.array[sizeIndex];
        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
          return this;
        }
      }
      var editable = editableVNode(this, ownerID);
      editable.array.splice(sizeIndex + 1);
      if (newChild) {
        editable.array[sizeIndex] = newChild;
      }
      return editable;
    };
    var DONE = {};
    function iterateList(list, reverse) {
      var left = list._origin;
      var right = list._capacity;
      var tailPos = getTailOffset(right);
      var tail = list._tail;
      return iterateNodeOrLeaf(list._root, list._level, 0);
      function iterateNodeOrLeaf(node, level, offset) {
        return level === 0 ? iterateLeaf(node, offset) : iterateNode(node, level, offset);
      }
      function iterateLeaf(node, offset) {
        var array = offset === tailPos ? tail && tail.array : node && node.array;
        var from = offset > left ? 0 : left - offset;
        var to = right - offset;
        if (to > SIZE) {
          to = SIZE;
        }
        return function() {
          if (from === to) {
            return DONE;
          }
          var idx = reverse ? --to : from++;
          return array && array[idx];
        };
      }
      function iterateNode(node, level, offset) {
        var values;
        var array = node && node.array;
        var from = offset > left ? 0 : left - offset >> level;
        var to = (right - offset >> level) + 1;
        if (to > SIZE) {
          to = SIZE;
        }
        return function() {
          do {
            if (values) {
              var value = values();
              if (value !== DONE) {
                return value;
              }
              values = null;
            }
            if (from === to) {
              return DONE;
            }
            var idx = reverse ? --to : from++;
            values = iterateNodeOrLeaf(
              array && array[idx],
              level - SHIFT,
              offset + (idx << level)
            );
          } while (true);
        };
      }
    }
    function makeList(origin, capacity, level, root, tail, ownerID, hash2) {
      var list = Object.create(ListPrototype);
      list.size = capacity - origin;
      list._origin = origin;
      list._capacity = capacity;
      list._level = level;
      list._root = root;
      list._tail = tail;
      list.__ownerID = ownerID;
      list.__hash = hash2;
      list.__altered = false;
      return list;
    }
    var EMPTY_LIST;
    function emptyList() {
      return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
    }
    function updateList(list, index, value) {
      index = wrapIndex(list, index);
      if (index !== index) {
        return list;
      }
      if (index >= list.size || index < 0) {
        return list.withMutations(function(list2) {
          index < 0 ? setListBounds(list2, index).set(0, value) : setListBounds(list2, 0, index + 1).set(index, value);
        });
      }
      index += list._origin;
      var newTail = list._tail;
      var newRoot = list._root;
      var didAlter = MakeRef(DID_ALTER);
      if (index >= getTailOffset(list._capacity)) {
        newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
      } else {
        newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
      }
      if (!didAlter.value) {
        return list;
      }
      if (list.__ownerID) {
        list._root = newRoot;
        list._tail = newTail;
        list.__hash = void 0;
        list.__altered = true;
        return list;
      }
      return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
    }
    function updateVNode(node, ownerID, level, index, value, didAlter) {
      var idx = index >>> level & MASK;
      var nodeHas = node && idx < node.array.length;
      if (!nodeHas && value === void 0) {
        return node;
      }
      var newNode;
      if (level > 0) {
        var lowerNode = node && node.array[idx];
        var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
        if (newLowerNode === lowerNode) {
          return node;
        }
        newNode = editableVNode(node, ownerID);
        newNode.array[idx] = newLowerNode;
        return newNode;
      }
      if (nodeHas && node.array[idx] === value) {
        return node;
      }
      SetRef(didAlter);
      newNode = editableVNode(node, ownerID);
      if (value === void 0 && idx === newNode.array.length - 1) {
        newNode.array.pop();
      } else {
        newNode.array[idx] = value;
      }
      return newNode;
    }
    function editableVNode(node, ownerID) {
      if (ownerID && node && ownerID === node.ownerID) {
        return node;
      }
      return new VNode(node ? node.array.slice() : [], ownerID);
    }
    function listNodeFor(list, rawIndex) {
      if (rawIndex >= getTailOffset(list._capacity)) {
        return list._tail;
      }
      if (rawIndex < 1 << list._level + SHIFT) {
        var node = list._root;
        var level = list._level;
        while (node && level > 0) {
          node = node.array[rawIndex >>> level & MASK];
          level -= SHIFT;
        }
        return node;
      }
    }
    function setListBounds(list, begin, end) {
      if (begin !== void 0) {
        begin = begin | 0;
      }
      if (end !== void 0) {
        end = end | 0;
      }
      var owner = list.__ownerID || new OwnerID();
      var oldOrigin = list._origin;
      var oldCapacity = list._capacity;
      var newOrigin = oldOrigin + begin;
      var newCapacity = end === void 0 ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
      if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
        return list;
      }
      if (newOrigin >= newCapacity) {
        return list.clear();
      }
      var newLevel = list._level;
      var newRoot = list._root;
      var offsetShift = 0;
      while (newOrigin + offsetShift < 0) {
        newRoot = new VNode(newRoot && newRoot.array.length ? [void 0, newRoot] : [], owner);
        newLevel += SHIFT;
        offsetShift += 1 << newLevel;
      }
      if (offsetShift) {
        newOrigin += offsetShift;
        oldOrigin += offsetShift;
        newCapacity += offsetShift;
        oldCapacity += offsetShift;
      }
      var oldTailOffset = getTailOffset(oldCapacity);
      var newTailOffset = getTailOffset(newCapacity);
      while (newTailOffset >= 1 << newLevel + SHIFT) {
        newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
        newLevel += SHIFT;
      }
      var oldTail = list._tail;
      var newTail = newTailOffset < oldTailOffset ? listNodeFor(list, newCapacity - 1) : newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;
      if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
        newRoot = editableVNode(newRoot, owner);
        var node = newRoot;
        for (var level = newLevel; level > SHIFT; level -= SHIFT) {
          var idx = oldTailOffset >>> level & MASK;
          node = node.array[idx] = editableVNode(node.array[idx], owner);
        }
        node.array[oldTailOffset >>> SHIFT & MASK] = oldTail;
      }
      if (newCapacity < oldCapacity) {
        newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
      }
      if (newOrigin >= newTailOffset) {
        newOrigin -= newTailOffset;
        newCapacity -= newTailOffset;
        newLevel = SHIFT;
        newRoot = null;
        newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);
      } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
        offsetShift = 0;
        while (newRoot) {
          var beginIndex = newOrigin >>> newLevel & MASK;
          if (beginIndex !== newTailOffset >>> newLevel & MASK) {
            break;
          }
          if (beginIndex) {
            offsetShift += (1 << newLevel) * beginIndex;
          }
          newLevel -= SHIFT;
          newRoot = newRoot.array[beginIndex];
        }
        if (newRoot && newOrigin > oldOrigin) {
          newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
        }
        if (newRoot && newTailOffset < oldTailOffset) {
          newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
        }
        if (offsetShift) {
          newOrigin -= offsetShift;
          newCapacity -= offsetShift;
        }
      }
      if (list.__ownerID) {
        list.size = newCapacity - newOrigin;
        list._origin = newOrigin;
        list._capacity = newCapacity;
        list._level = newLevel;
        list._root = newRoot;
        list._tail = newTail;
        list.__hash = void 0;
        list.__altered = true;
        return list;
      }
      return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
    }
    function mergeIntoListWith(list, merger, iterables) {
      var iters = [];
      var maxSize = 0;
      for (var ii2 = 0; ii2 < iterables.length; ii2++) {
        var value = iterables[ii2];
        var iter = IndexedIterable(value);
        if (iter.size > maxSize) {
          maxSize = iter.size;
        }
        if (!isIterable(value)) {
          iter = iter.map(function(v2) {
            return fromJS2(v2);
          });
        }
        iters.push(iter);
      }
      if (maxSize > list.size) {
        list = list.setSize(maxSize);
      }
      return mergeIntoCollectionWith(list, merger, iters);
    }
    function getTailOffset(size) {
      return size < SIZE ? 0 : size - 1 >>> SHIFT << SHIFT;
    }
    createClass(OrderedMap2, Map2);
    function OrderedMap2(value) {
      return value === null || value === void 0 ? emptyOrderedMap() : isOrderedMap(value) ? value : emptyOrderedMap().withMutations(function(map) {
        var iter = KeyedIterable(value);
        assertNotInfinite(iter.size);
        iter.forEach(function(v2, k2) {
          return map.set(k2, v2);
        });
      });
    }
    OrderedMap2.of = function() {
      return this(arguments);
    };
    OrderedMap2.prototype.toString = function() {
      return this.__toString("OrderedMap {", "}");
    };
    OrderedMap2.prototype.get = function(k2, notSetValue) {
      var index = this._map.get(k2);
      return index !== void 0 ? this._list.get(index)[1] : notSetValue;
    };
    OrderedMap2.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._map.clear();
        this._list.clear();
        return this;
      }
      return emptyOrderedMap();
    };
    OrderedMap2.prototype.set = function(k2, v2) {
      return updateOrderedMap(this, k2, v2);
    };
    OrderedMap2.prototype.remove = function(k2) {
      return updateOrderedMap(this, k2, NOT_SET);
    };
    OrderedMap2.prototype.wasAltered = function() {
      return this._map.wasAltered() || this._list.wasAltered();
    };
    OrderedMap2.prototype.__iterate = function(fn2, reverse) {
      var this$0 = this;
      return this._list.__iterate(
        function(entry) {
          return entry && fn2(entry[1], entry[0], this$0);
        },
        reverse
      );
    };
    OrderedMap2.prototype.__iterator = function(type, reverse) {
      return this._list.fromEntrySeq().__iterator(type, reverse);
    };
    OrderedMap2.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      var newList = this._list.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        this._list = newList;
        return this;
      }
      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
    };
    function isOrderedMap(maybeOrderedMap) {
      return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
    }
    OrderedMap2.isOrderedMap = isOrderedMap;
    OrderedMap2.prototype[IS_ORDERED_SENTINEL] = true;
    OrderedMap2.prototype[DELETE] = OrderedMap2.prototype.remove;
    function makeOrderedMap(map, list, ownerID, hash2) {
      var omap = Object.create(OrderedMap2.prototype);
      omap.size = map ? map.size : 0;
      omap._map = map;
      omap._list = list;
      omap.__ownerID = ownerID;
      omap.__hash = hash2;
      return omap;
    }
    var EMPTY_ORDERED_MAP;
    function emptyOrderedMap() {
      return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
    }
    function updateOrderedMap(omap, k2, v2) {
      var map = omap._map;
      var list = omap._list;
      var i2 = map.get(k2);
      var has = i2 !== void 0;
      var newMap;
      var newList;
      if (v2 === NOT_SET) {
        if (!has) {
          return omap;
        }
        if (list.size >= SIZE && list.size >= map.size * 2) {
          newList = list.filter(function(entry, idx) {
            return entry !== void 0 && i2 !== idx;
          });
          newMap = newList.toKeyedSeq().map(function(entry) {
            return entry[0];
          }).flip().toMap();
          if (omap.__ownerID) {
            newMap.__ownerID = newList.__ownerID = omap.__ownerID;
          }
        } else {
          newMap = map.remove(k2);
          newList = i2 === list.size - 1 ? list.pop() : list.set(i2, void 0);
        }
      } else {
        if (has) {
          if (v2 === list.get(i2)[1]) {
            return omap;
          }
          newMap = map;
          newList = list.set(i2, [k2, v2]);
        } else {
          newMap = map.set(k2, list.size);
          newList = list.set(list.size, [k2, v2]);
        }
      }
      if (omap.__ownerID) {
        omap.size = newMap.size;
        omap._map = newMap;
        omap._list = newList;
        omap.__hash = void 0;
        return omap;
      }
      return makeOrderedMap(newMap, newList);
    }
    createClass(ToKeyedSequence, KeyedSeq);
    function ToKeyedSequence(indexed, useKeys) {
      this._iter = indexed;
      this._useKeys = useKeys;
      this.size = indexed.size;
    }
    ToKeyedSequence.prototype.get = function(key, notSetValue) {
      return this._iter.get(key, notSetValue);
    };
    ToKeyedSequence.prototype.has = function(key) {
      return this._iter.has(key);
    };
    ToKeyedSequence.prototype.valueSeq = function() {
      return this._iter.valueSeq();
    };
    ToKeyedSequence.prototype.reverse = function() {
      var this$0 = this;
      var reversedSequence = reverseFactory(this, true);
      if (!this._useKeys) {
        reversedSequence.valueSeq = function() {
          return this$0._iter.toSeq().reverse();
        };
      }
      return reversedSequence;
    };
    ToKeyedSequence.prototype.map = function(mapper, context) {
      var this$0 = this;
      var mappedSequence = mapFactory(this, mapper, context);
      if (!this._useKeys) {
        mappedSequence.valueSeq = function() {
          return this$0._iter.toSeq().map(mapper, context);
        };
      }
      return mappedSequence;
    };
    ToKeyedSequence.prototype.__iterate = function(fn2, reverse) {
      var this$0 = this;
      var ii2;
      return this._iter.__iterate(
        this._useKeys ? function(v2, k2) {
          return fn2(v2, k2, this$0);
        } : (ii2 = reverse ? resolveSize(this) : 0, function(v2) {
          return fn2(v2, reverse ? --ii2 : ii2++, this$0);
        }),
        reverse
      );
    };
    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
      if (this._useKeys) {
        return this._iter.__iterator(type, reverse);
      }
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var ii2 = reverse ? resolveSize(this) : 0;
      return new Iterator(function() {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, reverse ? --ii2 : ii2++, step.value, step);
      });
    };
    ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;
    createClass(ToIndexedSequence, IndexedSeq);
    function ToIndexedSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }
    ToIndexedSequence.prototype.includes = function(value) {
      return this._iter.includes(value);
    };
    ToIndexedSequence.prototype.__iterate = function(fn2, reverse) {
      var this$0 = this;
      var iterations = 0;
      return this._iter.__iterate(function(v2) {
        return fn2(v2, iterations++, this$0);
      }, reverse);
    };
    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      return new Iterator(function() {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, iterations++, step.value, step);
      });
    };
    createClass(ToSetSequence, SetSeq);
    function ToSetSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }
    ToSetSequence.prototype.has = function(key) {
      return this._iter.includes(key);
    };
    ToSetSequence.prototype.__iterate = function(fn2, reverse) {
      var this$0 = this;
      return this._iter.__iterate(function(v2) {
        return fn2(v2, v2, this$0);
      }, reverse);
    };
    ToSetSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function() {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, step.value, step.value, step);
      });
    };
    createClass(FromEntriesSequence, KeyedSeq);
    function FromEntriesSequence(entries) {
      this._iter = entries;
      this.size = entries.size;
    }
    FromEntriesSequence.prototype.entrySeq = function() {
      return this._iter.toSeq();
    };
    FromEntriesSequence.prototype.__iterate = function(fn2, reverse) {
      var this$0 = this;
      return this._iter.__iterate(function(entry) {
        if (entry) {
          validateEntry(entry);
          var indexedIterable = isIterable(entry);
          return fn2(
            indexedIterable ? entry.get(1) : entry[1],
            indexedIterable ? entry.get(0) : entry[0],
            this$0
          );
        }
      }, reverse);
    };
    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function() {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          if (entry) {
            validateEntry(entry);
            var indexedIterable = isIterable(entry);
            return iteratorValue(
              type,
              indexedIterable ? entry.get(0) : entry[0],
              indexedIterable ? entry.get(1) : entry[1],
              step
            );
          }
        }
      });
    };
    ToIndexedSequence.prototype.cacheResult = ToKeyedSequence.prototype.cacheResult = ToSetSequence.prototype.cacheResult = FromEntriesSequence.prototype.cacheResult = cacheResultThrough;
    function flipFactory(iterable) {
      var flipSequence = makeSequence(iterable);
      flipSequence._iter = iterable;
      flipSequence.size = iterable.size;
      flipSequence.flip = function() {
        return iterable;
      };
      flipSequence.reverse = function() {
        var reversedSequence = iterable.reverse.apply(this);
        reversedSequence.flip = function() {
          return iterable.reverse();
        };
        return reversedSequence;
      };
      flipSequence.has = function(key) {
        return iterable.includes(key);
      };
      flipSequence.includes = function(key) {
        return iterable.has(key);
      };
      flipSequence.cacheResult = cacheResultThrough;
      flipSequence.__iterateUncached = function(fn2, reverse) {
        var this$0 = this;
        return iterable.__iterate(function(v2, k2) {
          return fn2(k2, v2, this$0) !== false;
        }, reverse);
      };
      flipSequence.__iteratorUncached = function(type, reverse) {
        if (type === ITERATE_ENTRIES) {
          var iterator = iterable.__iterator(type, reverse);
          return new Iterator(function() {
            var step = iterator.next();
            if (!step.done) {
              var k2 = step.value[0];
              step.value[0] = step.value[1];
              step.value[1] = k2;
            }
            return step;
          });
        }
        return iterable.__iterator(
          type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
          reverse
        );
      };
      return flipSequence;
    }
    function mapFactory(iterable, mapper, context) {
      var mappedSequence = makeSequence(iterable);
      mappedSequence.size = iterable.size;
      mappedSequence.has = function(key) {
        return iterable.has(key);
      };
      mappedSequence.get = function(key, notSetValue) {
        var v2 = iterable.get(key, NOT_SET);
        return v2 === NOT_SET ? notSetValue : mapper.call(context, v2, key, iterable);
      };
      mappedSequence.__iterateUncached = function(fn2, reverse) {
        var this$0 = this;
        return iterable.__iterate(
          function(v2, k2, c2) {
            return fn2(mapper.call(context, v2, k2, c2), k2, this$0) !== false;
          },
          reverse
        );
      };
      mappedSequence.__iteratorUncached = function(type, reverse) {
        var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
        return new Iterator(function() {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          var key = entry[0];
          return iteratorValue(
            type,
            key,
            mapper.call(context, entry[1], key, iterable),
            step
          );
        });
      };
      return mappedSequence;
    }
    function reverseFactory(iterable, useKeys) {
      var reversedSequence = makeSequence(iterable);
      reversedSequence._iter = iterable;
      reversedSequence.size = iterable.size;
      reversedSequence.reverse = function() {
        return iterable;
      };
      if (iterable.flip) {
        reversedSequence.flip = function() {
          var flipSequence = flipFactory(iterable);
          flipSequence.reverse = function() {
            return iterable.flip();
          };
          return flipSequence;
        };
      }
      reversedSequence.get = function(key, notSetValue) {
        return iterable.get(useKeys ? key : -1 - key, notSetValue);
      };
      reversedSequence.has = function(key) {
        return iterable.has(useKeys ? key : -1 - key);
      };
      reversedSequence.includes = function(value) {
        return iterable.includes(value);
      };
      reversedSequence.cacheResult = cacheResultThrough;
      reversedSequence.__iterate = function(fn2, reverse) {
        var this$0 = this;
        return iterable.__iterate(function(v2, k2) {
          return fn2(v2, k2, this$0);
        }, !reverse);
      };
      reversedSequence.__iterator = function(type, reverse) {
        return iterable.__iterator(type, !reverse);
      };
      return reversedSequence;
    }
    function filterFactory(iterable, predicate, context, useKeys) {
      var filterSequence = makeSequence(iterable);
      if (useKeys) {
        filterSequence.has = function(key) {
          var v2 = iterable.get(key, NOT_SET);
          return v2 !== NOT_SET && !!predicate.call(context, v2, key, iterable);
        };
        filterSequence.get = function(key, notSetValue) {
          var v2 = iterable.get(key, NOT_SET);
          return v2 !== NOT_SET && predicate.call(context, v2, key, iterable) ? v2 : notSetValue;
        };
      }
      filterSequence.__iterateUncached = function(fn2, reverse) {
        var this$0 = this;
        var iterations = 0;
        iterable.__iterate(function(v2, k2, c2) {
          if (predicate.call(context, v2, k2, c2)) {
            iterations++;
            return fn2(v2, useKeys ? k2 : iterations - 1, this$0);
          }
        }, reverse);
        return iterations;
      };
      filterSequence.__iteratorUncached = function(type, reverse) {
        var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
        var iterations = 0;
        return new Iterator(function() {
          while (true) {
            var step = iterator.next();
            if (step.done) {
              return step;
            }
            var entry = step.value;
            var key = entry[0];
            var value = entry[1];
            if (predicate.call(context, value, key, iterable)) {
              return iteratorValue(type, useKeys ? key : iterations++, value, step);
            }
          }
        });
      };
      return filterSequence;
    }
    function countByFactory(iterable, grouper, context) {
      var groups = Map2().asMutable();
      iterable.__iterate(function(v2, k2) {
        groups.update(
          grouper.call(context, v2, k2, iterable),
          0,
          function(a2) {
            return a2 + 1;
          }
        );
      });
      return groups.asImmutable();
    }
    function groupByFactory(iterable, grouper, context) {
      var isKeyedIter = isKeyed(iterable);
      var groups = (isOrdered(iterable) ? OrderedMap2() : Map2()).asMutable();
      iterable.__iterate(function(v2, k2) {
        groups.update(
          grouper.call(context, v2, k2, iterable),
          function(a2) {
            return a2 = a2 || [], a2.push(isKeyedIter ? [k2, v2] : v2), a2;
          }
        );
      });
      var coerce = iterableClass(iterable);
      return groups.map(function(arr) {
        return reify(iterable, coerce(arr));
      });
    }
    function sliceFactory(iterable, begin, end, useKeys) {
      var originalSize = iterable.size;
      if (begin !== void 0) {
        begin = begin | 0;
      }
      if (end !== void 0) {
        end = end | 0;
      }
      if (wholeSlice(begin, end, originalSize)) {
        return iterable;
      }
      var resolvedBegin = resolveBegin(begin, originalSize);
      var resolvedEnd = resolveEnd(end, originalSize);
      if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
        return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
      }
      var resolvedSize = resolvedEnd - resolvedBegin;
      var sliceSize;
      if (resolvedSize === resolvedSize) {
        sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
      }
      var sliceSeq = makeSequence(iterable);
      sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || void 0;
      if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
        sliceSeq.get = function(index, notSetValue) {
          index = wrapIndex(this, index);
          return index >= 0 && index < sliceSize ? iterable.get(index + resolvedBegin, notSetValue) : notSetValue;
        };
      }
      sliceSeq.__iterateUncached = function(fn2, reverse) {
        var this$0 = this;
        if (sliceSize === 0) {
          return 0;
        }
        if (reverse) {
          return this.cacheResult().__iterate(fn2, reverse);
        }
        var skipped = 0;
        var isSkipping = true;
        var iterations = 0;
        iterable.__iterate(function(v2, k2) {
          if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
            iterations++;
            return fn2(v2, useKeys ? k2 : iterations - 1, this$0) !== false && iterations !== sliceSize;
          }
        });
        return iterations;
      };
      sliceSeq.__iteratorUncached = function(type, reverse) {
        if (sliceSize !== 0 && reverse) {
          return this.cacheResult().__iterator(type, reverse);
        }
        var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
        var skipped = 0;
        var iterations = 0;
        return new Iterator(function() {
          while (skipped++ < resolvedBegin) {
            iterator.next();
          }
          if (++iterations > sliceSize) {
            return iteratorDone();
          }
          var step = iterator.next();
          if (useKeys || type === ITERATE_VALUES) {
            return step;
          } else if (type === ITERATE_KEYS) {
            return iteratorValue(type, iterations - 1, void 0, step);
          } else {
            return iteratorValue(type, iterations - 1, step.value[1], step);
          }
        });
      };
      return sliceSeq;
    }
    function takeWhileFactory(iterable, predicate, context) {
      var takeSequence = makeSequence(iterable);
      takeSequence.__iterateUncached = function(fn2, reverse) {
        var this$0 = this;
        if (reverse) {
          return this.cacheResult().__iterate(fn2, reverse);
        }
        var iterations = 0;
        iterable.__iterate(
          function(v2, k2, c2) {
            return predicate.call(context, v2, k2, c2) && ++iterations && fn2(v2, k2, this$0);
          }
        );
        return iterations;
      };
      takeSequence.__iteratorUncached = function(type, reverse) {
        var this$0 = this;
        if (reverse) {
          return this.cacheResult().__iterator(type, reverse);
        }
        var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
        var iterating = true;
        return new Iterator(function() {
          if (!iterating) {
            return iteratorDone();
          }
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          var k2 = entry[0];
          var v2 = entry[1];
          if (!predicate.call(context, v2, k2, this$0)) {
            iterating = false;
            return iteratorDone();
          }
          return type === ITERATE_ENTRIES ? step : iteratorValue(type, k2, v2, step);
        });
      };
      return takeSequence;
    }
    function skipWhileFactory(iterable, predicate, context, useKeys) {
      var skipSequence = makeSequence(iterable);
      skipSequence.__iterateUncached = function(fn2, reverse) {
        var this$0 = this;
        if (reverse) {
          return this.cacheResult().__iterate(fn2, reverse);
        }
        var isSkipping = true;
        var iterations = 0;
        iterable.__iterate(function(v2, k2, c2) {
          if (!(isSkipping && (isSkipping = predicate.call(context, v2, k2, c2)))) {
            iterations++;
            return fn2(v2, useKeys ? k2 : iterations - 1, this$0);
          }
        });
        return iterations;
      };
      skipSequence.__iteratorUncached = function(type, reverse) {
        var this$0 = this;
        if (reverse) {
          return this.cacheResult().__iterator(type, reverse);
        }
        var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
        var skipping = true;
        var iterations = 0;
        return new Iterator(function() {
          var step, k2, v2;
          do {
            step = iterator.next();
            if (step.done) {
              if (useKeys || type === ITERATE_VALUES) {
                return step;
              } else if (type === ITERATE_KEYS) {
                return iteratorValue(type, iterations++, void 0, step);
              } else {
                return iteratorValue(type, iterations++, step.value[1], step);
              }
            }
            var entry = step.value;
            k2 = entry[0];
            v2 = entry[1];
            skipping && (skipping = predicate.call(context, v2, k2, this$0));
          } while (skipping);
          return type === ITERATE_ENTRIES ? step : iteratorValue(type, k2, v2, step);
        });
      };
      return skipSequence;
    }
    function concatFactory(iterable, values) {
      var isKeyedIterable = isKeyed(iterable);
      var iters = [iterable].concat(values).map(function(v2) {
        if (!isIterable(v2)) {
          v2 = isKeyedIterable ? keyedSeqFromValue(v2) : indexedSeqFromValue(Array.isArray(v2) ? v2 : [v2]);
        } else if (isKeyedIterable) {
          v2 = KeyedIterable(v2);
        }
        return v2;
      }).filter(function(v2) {
        return v2.size !== 0;
      });
      if (iters.length === 0) {
        return iterable;
      }
      if (iters.length === 1) {
        var singleton = iters[0];
        if (singleton === iterable || isKeyedIterable && isKeyed(singleton) || isIndexed(iterable) && isIndexed(singleton)) {
          return singleton;
        }
      }
      var concatSeq = new ArraySeq(iters);
      if (isKeyedIterable) {
        concatSeq = concatSeq.toKeyedSeq();
      } else if (!isIndexed(iterable)) {
        concatSeq = concatSeq.toSetSeq();
      }
      concatSeq = concatSeq.flatten(true);
      concatSeq.size = iters.reduce(
        function(sum, seq) {
          if (sum !== void 0) {
            var size = seq.size;
            if (size !== void 0) {
              return sum + size;
            }
          }
        },
        0
      );
      return concatSeq;
    }
    function flattenFactory(iterable, depth, useKeys) {
      var flatSequence = makeSequence(iterable);
      flatSequence.__iterateUncached = function(fn2, reverse) {
        var iterations = 0;
        var stopped = false;
        function flatDeep(iter, currentDepth) {
          var this$0 = this;
          iter.__iterate(function(v2, k2) {
            if ((!depth || currentDepth < depth) && isIterable(v2)) {
              flatDeep(v2, currentDepth + 1);
            } else if (fn2(v2, useKeys ? k2 : iterations++, this$0) === false) {
              stopped = true;
            }
            return !stopped;
          }, reverse);
        }
        flatDeep(iterable, 0);
        return iterations;
      };
      flatSequence.__iteratorUncached = function(type, reverse) {
        var iterator = iterable.__iterator(type, reverse);
        var stack = [];
        var iterations = 0;
        return new Iterator(function() {
          while (iterator) {
            var step = iterator.next();
            if (step.done !== false) {
              iterator = stack.pop();
              continue;
            }
            var v2 = step.value;
            if (type === ITERATE_ENTRIES) {
              v2 = v2[1];
            }
            if ((!depth || stack.length < depth) && isIterable(v2)) {
              stack.push(iterator);
              iterator = v2.__iterator(type, reverse);
            } else {
              return useKeys ? step : iteratorValue(type, iterations++, v2, step);
            }
          }
          return iteratorDone();
        });
      };
      return flatSequence;
    }
    function flatMapFactory(iterable, mapper, context) {
      var coerce = iterableClass(iterable);
      return iterable.toSeq().map(
        function(v2, k2) {
          return coerce(mapper.call(context, v2, k2, iterable));
        }
      ).flatten(true);
    }
    function interposeFactory(iterable, separator) {
      var interposedSequence = makeSequence(iterable);
      interposedSequence.size = iterable.size && iterable.size * 2 - 1;
      interposedSequence.__iterateUncached = function(fn2, reverse) {
        var this$0 = this;
        var iterations = 0;
        iterable.__iterate(
          function(v2, k2) {
            return (!iterations || fn2(separator, iterations++, this$0) !== false) && fn2(v2, iterations++, this$0) !== false;
          },
          reverse
        );
        return iterations;
      };
      interposedSequence.__iteratorUncached = function(type, reverse) {
        var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
        var iterations = 0;
        var step;
        return new Iterator(function() {
          if (!step || iterations % 2) {
            step = iterator.next();
            if (step.done) {
              return step;
            }
          }
          return iterations % 2 ? iteratorValue(type, iterations++, separator) : iteratorValue(type, iterations++, step.value, step);
        });
      };
      return interposedSequence;
    }
    function sortFactory(iterable, comparator, mapper) {
      if (!comparator) {
        comparator = defaultComparator;
      }
      var isKeyedIterable = isKeyed(iterable);
      var index = 0;
      var entries = iterable.toSeq().map(
        function(v2, k2) {
          return [k2, v2, index++, mapper ? mapper(v2, k2, iterable) : v2];
        }
      ).toArray();
      entries.sort(function(a2, b2) {
        return comparator(a2[3], b2[3]) || a2[2] - b2[2];
      }).forEach(
        isKeyedIterable ? function(v2, i2) {
          entries[i2].length = 2;
        } : function(v2, i2) {
          entries[i2] = v2[1];
        }
      );
      return isKeyedIterable ? KeyedSeq(entries) : isIndexed(iterable) ? IndexedSeq(entries) : SetSeq(entries);
    }
    function maxFactory(iterable, comparator, mapper) {
      if (!comparator) {
        comparator = defaultComparator;
      }
      if (mapper) {
        var entry = iterable.toSeq().map(function(v2, k2) {
          return [v2, mapper(v2, k2, iterable)];
        }).reduce(function(a2, b2) {
          return maxCompare(comparator, a2[1], b2[1]) ? b2 : a2;
        });
        return entry && entry[0];
      } else {
        return iterable.reduce(function(a2, b2) {
          return maxCompare(comparator, a2, b2) ? b2 : a2;
        });
      }
    }
    function maxCompare(comparator, a2, b2) {
      var comp = comparator(b2, a2);
      return comp === 0 && b2 !== a2 && (b2 === void 0 || b2 === null || b2 !== b2) || comp > 0;
    }
    function zipWithFactory(keyIter, zipper, iters) {
      var zipSequence = makeSequence(keyIter);
      zipSequence.size = new ArraySeq(iters).map(function(i2) {
        return i2.size;
      }).min();
      zipSequence.__iterate = function(fn2, reverse) {
        var iterator = this.__iterator(ITERATE_VALUES, reverse);
        var step;
        var iterations = 0;
        while (!(step = iterator.next()).done) {
          if (fn2(step.value, iterations++, this) === false) {
            break;
          }
        }
        return iterations;
      };
      zipSequence.__iteratorUncached = function(type, reverse) {
        var iterators = iters.map(
          function(i2) {
            return i2 = Iterable(i2), getIterator(reverse ? i2.reverse() : i2);
          }
        );
        var iterations = 0;
        var isDone = false;
        return new Iterator(function() {
          var steps;
          if (!isDone) {
            steps = iterators.map(function(i2) {
              return i2.next();
            });
            isDone = steps.some(function(s2) {
              return s2.done;
            });
          }
          if (isDone) {
            return iteratorDone();
          }
          return iteratorValue(
            type,
            iterations++,
            zipper.apply(null, steps.map(function(s2) {
              return s2.value;
            }))
          );
        });
      };
      return zipSequence;
    }
    function reify(iter, seq) {
      return isSeq(iter) ? seq : iter.constructor(seq);
    }
    function validateEntry(entry) {
      if (entry !== Object(entry)) {
        throw new TypeError("Expected [K, V] tuple: " + entry);
      }
    }
    function resolveSize(iter) {
      assertNotInfinite(iter.size);
      return ensureSize(iter);
    }
    function iterableClass(iterable) {
      return isKeyed(iterable) ? KeyedIterable : isIndexed(iterable) ? IndexedIterable : SetIterable;
    }
    function makeSequence(iterable) {
      return Object.create(
        (isKeyed(iterable) ? KeyedSeq : isIndexed(iterable) ? IndexedSeq : SetSeq).prototype
      );
    }
    function cacheResultThrough() {
      if (this._iter.cacheResult) {
        this._iter.cacheResult();
        this.size = this._iter.size;
        return this;
      } else {
        return Seq.prototype.cacheResult.call(this);
      }
    }
    function defaultComparator(a2, b2) {
      return a2 > b2 ? 1 : a2 < b2 ? -1 : 0;
    }
    function forceIterator(keyPath) {
      var iter = getIterator(keyPath);
      if (!iter) {
        if (!isArrayLike(keyPath)) {
          throw new TypeError("Expected iterable or array-like: " + keyPath);
        }
        iter = getIterator(Iterable(keyPath));
      }
      return iter;
    }
    createClass(Record2, KeyedCollection);
    function Record2(defaultValues, name) {
      var hasInitialized;
      var RecordType = function Record3(values) {
        if (values instanceof RecordType) {
          return values;
        }
        if (!(this instanceof RecordType)) {
          return new RecordType(values);
        }
        if (!hasInitialized) {
          hasInitialized = true;
          var keys = Object.keys(defaultValues);
          setProps(RecordTypePrototype, keys);
          RecordTypePrototype.size = keys.length;
          RecordTypePrototype._name = name;
          RecordTypePrototype._keys = keys;
          RecordTypePrototype._defaultValues = defaultValues;
        }
        this._map = Map2(values);
      };
      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
      RecordTypePrototype.constructor = RecordType;
      return RecordType;
    }
    Record2.prototype.toString = function() {
      return this.__toString(recordName(this) + " {", "}");
    };
    Record2.prototype.has = function(k2) {
      return this._defaultValues.hasOwnProperty(k2);
    };
    Record2.prototype.get = function(k2, notSetValue) {
      if (!this.has(k2)) {
        return notSetValue;
      }
      var defaultVal = this._defaultValues[k2];
      return this._map ? this._map.get(k2, defaultVal) : defaultVal;
    };
    Record2.prototype.clear = function() {
      if (this.__ownerID) {
        this._map && this._map.clear();
        return this;
      }
      var RecordType = this.constructor;
      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
    };
    Record2.prototype.set = function(k2, v2) {
      if (!this.has(k2)) {
        throw new Error('Cannot set unknown key "' + k2 + '" on ' + recordName(this));
      }
      var newMap = this._map && this._map.set(k2, v2);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };
    Record2.prototype.remove = function(k2) {
      if (!this.has(k2)) {
        return this;
      }
      var newMap = this._map && this._map.remove(k2);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };
    Record2.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };
    Record2.prototype.__iterator = function(type, reverse) {
      var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_2, k2) {
        return this$0.get(k2);
      }).__iterator(type, reverse);
    };
    Record2.prototype.__iterate = function(fn2, reverse) {
      var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_2, k2) {
        return this$0.get(k2);
      }).__iterate(fn2, reverse);
    };
    Record2.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map && this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return makeRecord(this, newMap, ownerID);
    };
    var RecordPrototype = Record2.prototype;
    RecordPrototype[DELETE] = RecordPrototype.remove;
    RecordPrototype.deleteIn = RecordPrototype.removeIn = MapPrototype.removeIn;
    RecordPrototype.merge = MapPrototype.merge;
    RecordPrototype.mergeWith = MapPrototype.mergeWith;
    RecordPrototype.mergeIn = MapPrototype.mergeIn;
    RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
    RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
    RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
    RecordPrototype.setIn = MapPrototype.setIn;
    RecordPrototype.update = MapPrototype.update;
    RecordPrototype.updateIn = MapPrototype.updateIn;
    RecordPrototype.withMutations = MapPrototype.withMutations;
    RecordPrototype.asMutable = MapPrototype.asMutable;
    RecordPrototype.asImmutable = MapPrototype.asImmutable;
    function makeRecord(likeRecord, map, ownerID) {
      var record = Object.create(Object.getPrototypeOf(likeRecord));
      record._map = map;
      record.__ownerID = ownerID;
      return record;
    }
    function recordName(record) {
      return record._name || record.constructor.name || "Record";
    }
    function setProps(prototype2, names) {
      try {
        names.forEach(setProp.bind(void 0, prototype2));
      } catch (error) {
      }
    }
    function setProp(prototype2, name) {
      Object.defineProperty(prototype2, name, {
        get: function() {
          return this.get(name);
        },
        set: function(value) {
          invariant2(this.__ownerID, "Cannot set on an immutable record.");
          this.set(name, value);
        }
      });
    }
    createClass(Set2, SetCollection);
    function Set2(value) {
      return value === null || value === void 0 ? emptySet() : isSet(value) && !isOrdered(value) ? value : emptySet().withMutations(function(set) {
        var iter = SetIterable(value);
        assertNotInfinite(iter.size);
        iter.forEach(function(v2) {
          return set.add(v2);
        });
      });
    }
    Set2.of = function() {
      return this(arguments);
    };
    Set2.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };
    Set2.prototype.toString = function() {
      return this.__toString("Set {", "}");
    };
    Set2.prototype.has = function(value) {
      return this._map.has(value);
    };
    Set2.prototype.add = function(value) {
      return updateSet(this, this._map.set(value, true));
    };
    Set2.prototype.remove = function(value) {
      return updateSet(this, this._map.remove(value));
    };
    Set2.prototype.clear = function() {
      return updateSet(this, this._map.clear());
    };
    Set2.prototype.union = function() {
      var iters = SLICE$0.call(arguments, 0);
      iters = iters.filter(function(x2) {
        return x2.size !== 0;
      });
      if (iters.length === 0) {
        return this;
      }
      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
        return this.constructor(iters[0]);
      }
      return this.withMutations(function(set) {
        for (var ii2 = 0; ii2 < iters.length; ii2++) {
          SetIterable(iters[ii2]).forEach(function(value) {
            return set.add(value);
          });
        }
      });
    };
    Set2.prototype.intersect = function() {
      var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter) {
        return SetIterable(iter);
      });
      var originalSet = this;
      return this.withMutations(function(set) {
        originalSet.forEach(function(value) {
          if (!iters.every(function(iter) {
            return iter.includes(value);
          })) {
            set.remove(value);
          }
        });
      });
    };
    Set2.prototype.subtract = function() {
      var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter) {
        return SetIterable(iter);
      });
      var originalSet = this;
      return this.withMutations(function(set) {
        originalSet.forEach(function(value) {
          if (iters.some(function(iter) {
            return iter.includes(value);
          })) {
            set.remove(value);
          }
        });
      });
    };
    Set2.prototype.merge = function() {
      return this.union.apply(this, arguments);
    };
    Set2.prototype.mergeWith = function(merger) {
      var iters = SLICE$0.call(arguments, 1);
      return this.union.apply(this, iters);
    };
    Set2.prototype.sort = function(comparator) {
      return OrderedSet2(sortFactory(this, comparator));
    };
    Set2.prototype.sortBy = function(mapper, comparator) {
      return OrderedSet2(sortFactory(this, comparator, mapper));
    };
    Set2.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };
    Set2.prototype.__iterate = function(fn2, reverse) {
      var this$0 = this;
      return this._map.__iterate(function(_2, k2) {
        return fn2(k2, k2, this$0);
      }, reverse);
    };
    Set2.prototype.__iterator = function(type, reverse) {
      return this._map.map(function(_2, k2) {
        return k2;
      }).__iterator(type, reverse);
    };
    Set2.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return this.__make(newMap, ownerID);
    };
    function isSet(maybeSet) {
      return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
    }
    Set2.isSet = isSet;
    var IS_SET_SENTINEL = "@@__IMMUTABLE_SET__@@";
    var SetPrototype = Set2.prototype;
    SetPrototype[IS_SET_SENTINEL] = true;
    SetPrototype[DELETE] = SetPrototype.remove;
    SetPrototype.mergeDeep = SetPrototype.merge;
    SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
    SetPrototype.withMutations = MapPrototype.withMutations;
    SetPrototype.asMutable = MapPrototype.asMutable;
    SetPrototype.asImmutable = MapPrototype.asImmutable;
    SetPrototype.__empty = emptySet;
    SetPrototype.__make = makeSet;
    function updateSet(set, newMap) {
      if (set.__ownerID) {
        set.size = newMap.size;
        set._map = newMap;
        return set;
      }
      return newMap === set._map ? set : newMap.size === 0 ? set.__empty() : set.__make(newMap);
    }
    function makeSet(map, ownerID) {
      var set = Object.create(SetPrototype);
      set.size = map ? map.size : 0;
      set._map = map;
      set.__ownerID = ownerID;
      return set;
    }
    var EMPTY_SET2;
    function emptySet() {
      return EMPTY_SET2 || (EMPTY_SET2 = makeSet(emptyMap()));
    }
    createClass(OrderedSet2, Set2);
    function OrderedSet2(value) {
      return value === null || value === void 0 ? emptyOrderedSet() : isOrderedSet(value) ? value : emptyOrderedSet().withMutations(function(set) {
        var iter = SetIterable(value);
        assertNotInfinite(iter.size);
        iter.forEach(function(v2) {
          return set.add(v2);
        });
      });
    }
    OrderedSet2.of = function() {
      return this(arguments);
    };
    OrderedSet2.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };
    OrderedSet2.prototype.toString = function() {
      return this.__toString("OrderedSet {", "}");
    };
    function isOrderedSet(maybeOrderedSet) {
      return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
    }
    OrderedSet2.isOrderedSet = isOrderedSet;
    var OrderedSetPrototype = OrderedSet2.prototype;
    OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;
    OrderedSetPrototype.__empty = emptyOrderedSet;
    OrderedSetPrototype.__make = makeOrderedSet;
    function makeOrderedSet(map, ownerID) {
      var set = Object.create(OrderedSetPrototype);
      set.size = map ? map.size : 0;
      set._map = map;
      set.__ownerID = ownerID;
      return set;
    }
    var EMPTY_ORDERED_SET;
    function emptyOrderedSet() {
      return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
    }
    createClass(Stack2, IndexedCollection);
    function Stack2(value) {
      return value === null || value === void 0 ? emptyStack() : isStack(value) ? value : emptyStack().unshiftAll(value);
    }
    Stack2.of = function() {
      return this(arguments);
    };
    Stack2.prototype.toString = function() {
      return this.__toString("Stack [", "]");
    };
    Stack2.prototype.get = function(index, notSetValue) {
      var head = this._head;
      index = wrapIndex(this, index);
      while (head && index--) {
        head = head.next;
      }
      return head ? head.value : notSetValue;
    };
    Stack2.prototype.peek = function() {
      return this._head && this._head.value;
    };
    Stack2.prototype.push = function() {
      if (arguments.length === 0) {
        return this;
      }
      var newSize = this.size + arguments.length;
      var head = this._head;
      for (var ii2 = arguments.length - 1; ii2 >= 0; ii2--) {
        head = {
          value: arguments[ii2],
          next: head
        };
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };
    Stack2.prototype.pushAll = function(iter) {
      iter = IndexedIterable(iter);
      if (iter.size === 0) {
        return this;
      }
      assertNotInfinite(iter.size);
      var newSize = this.size;
      var head = this._head;
      iter.reverse().forEach(function(value) {
        newSize++;
        head = {
          value,
          next: head
        };
      });
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };
    Stack2.prototype.pop = function() {
      return this.slice(1);
    };
    Stack2.prototype.unshift = function() {
      return this.push.apply(this, arguments);
    };
    Stack2.prototype.unshiftAll = function(iter) {
      return this.pushAll(iter);
    };
    Stack2.prototype.shift = function() {
      return this.pop.apply(this, arguments);
    };
    Stack2.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._head = void 0;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return emptyStack();
    };
    Stack2.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      var resolvedBegin = resolveBegin(begin, this.size);
      var resolvedEnd = resolveEnd(end, this.size);
      if (resolvedEnd !== this.size) {
        return IndexedCollection.prototype.slice.call(this, begin, end);
      }
      var newSize = this.size - resolvedBegin;
      var head = this._head;
      while (resolvedBegin--) {
        head = head.next;
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };
    Stack2.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeStack(this.size, this._head, ownerID, this.__hash);
    };
    Stack2.prototype.__iterate = function(fn2, reverse) {
      if (reverse) {
        return this.reverse().__iterate(fn2);
      }
      var iterations = 0;
      var node = this._head;
      while (node) {
        if (fn2(node.value, iterations++, this) === false) {
          break;
        }
        node = node.next;
      }
      return iterations;
    };
    Stack2.prototype.__iterator = function(type, reverse) {
      if (reverse) {
        return this.reverse().__iterator(type);
      }
      var iterations = 0;
      var node = this._head;
      return new Iterator(function() {
        if (node) {
          var value = node.value;
          node = node.next;
          return iteratorValue(type, iterations++, value);
        }
        return iteratorDone();
      });
    };
    function isStack(maybeStack) {
      return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
    }
    Stack2.isStack = isStack;
    var IS_STACK_SENTINEL = "@@__IMMUTABLE_STACK__@@";
    var StackPrototype = Stack2.prototype;
    StackPrototype[IS_STACK_SENTINEL] = true;
    StackPrototype.withMutations = MapPrototype.withMutations;
    StackPrototype.asMutable = MapPrototype.asMutable;
    StackPrototype.asImmutable = MapPrototype.asImmutable;
    StackPrototype.wasAltered = MapPrototype.wasAltered;
    function makeStack(size, head, ownerID, hash2) {
      var map = Object.create(StackPrototype);
      map.size = size;
      map._head = head;
      map.__ownerID = ownerID;
      map.__hash = hash2;
      map.__altered = false;
      return map;
    }
    var EMPTY_STACK;
    function emptyStack() {
      return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
    }
    function mixin(ctor, methods) {
      var keyCopier = function(key) {
        ctor.prototype[key] = methods[key];
      };
      Object.keys(methods).forEach(keyCopier);
      Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(methods).forEach(keyCopier);
      return ctor;
    }
    Iterable.Iterator = Iterator;
    mixin(Iterable, {
      // ### Conversion to other types
      toArray: function() {
        assertNotInfinite(this.size);
        var array = new Array(this.size || 0);
        this.valueSeq().__iterate(function(v2, i2) {
          array[i2] = v2;
        });
        return array;
      },
      toIndexedSeq: function() {
        return new ToIndexedSequence(this);
      },
      toJS: function() {
        return this.toSeq().map(
          function(value) {
            return value && typeof value.toJS === "function" ? value.toJS() : value;
          }
        ).__toJS();
      },
      toJSON: function() {
        return this.toSeq().map(
          function(value) {
            return value && typeof value.toJSON === "function" ? value.toJSON() : value;
          }
        ).__toJS();
      },
      toKeyedSeq: function() {
        return new ToKeyedSequence(this, true);
      },
      toMap: function() {
        return Map2(this.toKeyedSeq());
      },
      toObject: function() {
        assertNotInfinite(this.size);
        var object = {};
        this.__iterate(function(v2, k2) {
          object[k2] = v2;
        });
        return object;
      },
      toOrderedMap: function() {
        return OrderedMap2(this.toKeyedSeq());
      },
      toOrderedSet: function() {
        return OrderedSet2(isKeyed(this) ? this.valueSeq() : this);
      },
      toSet: function() {
        return Set2(isKeyed(this) ? this.valueSeq() : this);
      },
      toSetSeq: function() {
        return new ToSetSequence(this);
      },
      toSeq: function() {
        return isIndexed(this) ? this.toIndexedSeq() : isKeyed(this) ? this.toKeyedSeq() : this.toSetSeq();
      },
      toStack: function() {
        return Stack2(isKeyed(this) ? this.valueSeq() : this);
      },
      toList: function() {
        return List2(isKeyed(this) ? this.valueSeq() : this);
      },
      // ### Common JavaScript methods and properties
      toString: function() {
        return "[Iterable]";
      },
      __toString: function(head, tail) {
        if (this.size === 0) {
          return head + tail;
        }
        return head + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + tail;
      },
      // ### ES6 Collection methods (ES6 Array and Map)
      concat: function() {
        var values = SLICE$0.call(arguments, 0);
        return reify(this, concatFactory(this, values));
      },
      includes: function(searchValue) {
        return this.some(function(value) {
          return is2(value, searchValue);
        });
      },
      entries: function() {
        return this.__iterator(ITERATE_ENTRIES);
      },
      every: function(predicate, context) {
        assertNotInfinite(this.size);
        var returnValue = true;
        this.__iterate(function(v2, k2, c2) {
          if (!predicate.call(context, v2, k2, c2)) {
            returnValue = false;
            return false;
          }
        });
        return returnValue;
      },
      filter: function(predicate, context) {
        return reify(this, filterFactory(this, predicate, context, true));
      },
      find: function(predicate, context, notSetValue) {
        var entry = this.findEntry(predicate, context);
        return entry ? entry[1] : notSetValue;
      },
      findEntry: function(predicate, context) {
        var found;
        this.__iterate(function(v2, k2, c2) {
          if (predicate.call(context, v2, k2, c2)) {
            found = [k2, v2];
            return false;
          }
        });
        return found;
      },
      findLastEntry: function(predicate, context) {
        return this.toSeq().reverse().findEntry(predicate, context);
      },
      forEach: function(sideEffect, context) {
        assertNotInfinite(this.size);
        return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
      },
      join: function(separator) {
        assertNotInfinite(this.size);
        separator = separator !== void 0 ? "" + separator : ",";
        var joined = "";
        var isFirst = true;
        this.__iterate(function(v2) {
          isFirst ? isFirst = false : joined += separator;
          joined += v2 !== null && v2 !== void 0 ? v2.toString() : "";
        });
        return joined;
      },
      keys: function() {
        return this.__iterator(ITERATE_KEYS);
      },
      map: function(mapper, context) {
        return reify(this, mapFactory(this, mapper, context));
      },
      reduce: function(reducer, initialReduction, context) {
        assertNotInfinite(this.size);
        var reduction;
        var useFirst;
        if (arguments.length < 2) {
          useFirst = true;
        } else {
          reduction = initialReduction;
        }
        this.__iterate(function(v2, k2, c2) {
          if (useFirst) {
            useFirst = false;
            reduction = v2;
          } else {
            reduction = reducer.call(context, reduction, v2, k2, c2);
          }
        });
        return reduction;
      },
      reduceRight: function(reducer, initialReduction, context) {
        var reversed = this.toKeyedSeq().reverse();
        return reversed.reduce.apply(reversed, arguments);
      },
      reverse: function() {
        return reify(this, reverseFactory(this, true));
      },
      slice: function(begin, end) {
        return reify(this, sliceFactory(this, begin, end, true));
      },
      some: function(predicate, context) {
        return !this.every(not(predicate), context);
      },
      sort: function(comparator) {
        return reify(this, sortFactory(this, comparator));
      },
      values: function() {
        return this.__iterator(ITERATE_VALUES);
      },
      // ### More sequential methods
      butLast: function() {
        return this.slice(0, -1);
      },
      isEmpty: function() {
        return this.size !== void 0 ? this.size === 0 : !this.some(function() {
          return true;
        });
      },
      count: function(predicate, context) {
        return ensureSize(
          predicate ? this.toSeq().filter(predicate, context) : this
        );
      },
      countBy: function(grouper, context) {
        return countByFactory(this, grouper, context);
      },
      equals: function(other) {
        return deepEqual(this, other);
      },
      entrySeq: function() {
        var iterable = this;
        if (iterable._cache) {
          return new ArraySeq(iterable._cache);
        }
        var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
        entriesSequence.fromEntrySeq = function() {
          return iterable.toSeq();
        };
        return entriesSequence;
      },
      filterNot: function(predicate, context) {
        return this.filter(not(predicate), context);
      },
      findLast: function(predicate, context, notSetValue) {
        return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
      },
      first: function() {
        return this.find(returnTrue3);
      },
      flatMap: function(mapper, context) {
        return reify(this, flatMapFactory(this, mapper, context));
      },
      flatten: function(depth) {
        return reify(this, flattenFactory(this, depth, true));
      },
      fromEntrySeq: function() {
        return new FromEntriesSequence(this);
      },
      get: function(searchKey, notSetValue) {
        return this.find(function(_2, key) {
          return is2(key, searchKey);
        }, void 0, notSetValue);
      },
      getIn: function(searchKeyPath, notSetValue) {
        var nested = this;
        var iter = forceIterator(searchKeyPath);
        var step;
        while (!(step = iter.next()).done) {
          var key = step.value;
          nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
          if (nested === NOT_SET) {
            return notSetValue;
          }
        }
        return nested;
      },
      groupBy: function(grouper, context) {
        return groupByFactory(this, grouper, context);
      },
      has: function(searchKey) {
        return this.get(searchKey, NOT_SET) !== NOT_SET;
      },
      hasIn: function(searchKeyPath) {
        return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
      },
      isSubset: function(iter) {
        iter = typeof iter.includes === "function" ? iter : Iterable(iter);
        return this.every(function(value) {
          return iter.includes(value);
        });
      },
      isSuperset: function(iter) {
        iter = typeof iter.isSubset === "function" ? iter : Iterable(iter);
        return iter.isSubset(this);
      },
      keySeq: function() {
        return this.toSeq().map(keyMapper).toIndexedSeq();
      },
      last: function() {
        return this.toSeq().reverse().first();
      },
      max: function(comparator) {
        return maxFactory(this, comparator);
      },
      maxBy: function(mapper, comparator) {
        return maxFactory(this, comparator, mapper);
      },
      min: function(comparator) {
        return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
      },
      minBy: function(mapper, comparator) {
        return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
      },
      rest: function() {
        return this.slice(1);
      },
      skip: function(amount) {
        return this.slice(Math.max(0, amount));
      },
      skipLast: function(amount) {
        return reify(this, this.toSeq().reverse().skip(amount).reverse());
      },
      skipWhile: function(predicate, context) {
        return reify(this, skipWhileFactory(this, predicate, context, true));
      },
      skipUntil: function(predicate, context) {
        return this.skipWhile(not(predicate), context);
      },
      sortBy: function(mapper, comparator) {
        return reify(this, sortFactory(this, comparator, mapper));
      },
      take: function(amount) {
        return this.slice(0, Math.max(0, amount));
      },
      takeLast: function(amount) {
        return reify(this, this.toSeq().reverse().take(amount).reverse());
      },
      takeWhile: function(predicate, context) {
        return reify(this, takeWhileFactory(this, predicate, context));
      },
      takeUntil: function(predicate, context) {
        return this.takeWhile(not(predicate), context);
      },
      valueSeq: function() {
        return this.toIndexedSeq();
      },
      // ### Hashable Object
      hashCode: function() {
        return this.__hash || (this.__hash = hashIterable(this));
      }
      // ### Internal
      // abstract __iterate(fn, reverse)
      // abstract __iterator(type, reverse)
    });
    var IterablePrototype = Iterable.prototype;
    IterablePrototype[IS_ITERABLE_SENTINEL] = true;
    IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
    IterablePrototype.__toJS = IterablePrototype.toArray;
    IterablePrototype.__toStringMapper = quoteString;
    IterablePrototype.inspect = IterablePrototype.toSource = function() {
      return this.toString();
    };
    IterablePrototype.chain = IterablePrototype.flatMap;
    IterablePrototype.contains = IterablePrototype.includes;
    (function() {
      try {
        Object.defineProperty(IterablePrototype, "length", {
          get: function() {
            if (!Iterable.noLengthWarning) {
              var stack;
              try {
                throw new Error();
              } catch (error) {
                stack = error.stack;
              }
              if (stack.indexOf("_wrapObject") === -1) {
                console && console.warn && console.warn(
                  "iterable.length has been deprecated, use iterable.size or iterable.count(). This warning will become a silent error in a future version. " + stack
                );
                return this.size;
              }
            }
          }
        });
      } catch (e2) {
      }
    })();
    mixin(KeyedIterable, {
      // ### More sequential methods
      flip: function() {
        return reify(this, flipFactory(this));
      },
      findKey: function(predicate, context) {
        var entry = this.findEntry(predicate, context);
        return entry && entry[0];
      },
      findLastKey: function(predicate, context) {
        return this.toSeq().reverse().findKey(predicate, context);
      },
      keyOf: function(searchValue) {
        return this.findKey(function(value) {
          return is2(value, searchValue);
        });
      },
      lastKeyOf: function(searchValue) {
        return this.findLastKey(function(value) {
          return is2(value, searchValue);
        });
      },
      mapEntries: function(mapper, context) {
        var this$0 = this;
        var iterations = 0;
        return reify(
          this,
          this.toSeq().map(
            function(v2, k2) {
              return mapper.call(context, [k2, v2], iterations++, this$0);
            }
          ).fromEntrySeq()
        );
      },
      mapKeys: function(mapper, context) {
        var this$0 = this;
        return reify(
          this,
          this.toSeq().flip().map(
            function(k2, v2) {
              return mapper.call(context, k2, v2, this$0);
            }
          ).flip()
        );
      }
    });
    var KeyedIterablePrototype = KeyedIterable.prototype;
    KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
    KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
    KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
    KeyedIterablePrototype.__toStringMapper = function(v2, k2) {
      return JSON.stringify(k2) + ": " + quoteString(v2);
    };
    mixin(IndexedIterable, {
      // ### Conversion to other types
      toKeyedSeq: function() {
        return new ToKeyedSequence(this, false);
      },
      // ### ES6 Collection methods (ES6 Array and Map)
      filter: function(predicate, context) {
        return reify(this, filterFactory(this, predicate, context, false));
      },
      findIndex: function(predicate, context) {
        var entry = this.findEntry(predicate, context);
        return entry ? entry[0] : -1;
      },
      indexOf: function(searchValue) {
        var key = this.toKeyedSeq().keyOf(searchValue);
        return key === void 0 ? -1 : key;
      },
      lastIndexOf: function(searchValue) {
        var key = this.toKeyedSeq().reverse().keyOf(searchValue);
        return key === void 0 ? -1 : key;
      },
      reverse: function() {
        return reify(this, reverseFactory(this, false));
      },
      slice: function(begin, end) {
        return reify(this, sliceFactory(this, begin, end, false));
      },
      splice: function(index, removeNum) {
        var numArgs = arguments.length;
        removeNum = Math.max(removeNum | 0, 0);
        if (numArgs === 0 || numArgs === 2 && !removeNum) {
          return this;
        }
        index = resolveBegin(index, index < 0 ? this.count() : this.size);
        var spliced = this.slice(0, index);
        return reify(
          this,
          numArgs === 1 ? spliced : spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
        );
      },
      // ### More collection methods
      findLastIndex: function(predicate, context) {
        var key = this.toKeyedSeq().findLastKey(predicate, context);
        return key === void 0 ? -1 : key;
      },
      first: function() {
        return this.get(0);
      },
      flatten: function(depth) {
        return reify(this, flattenFactory(this, depth, false));
      },
      get: function(index, notSetValue) {
        index = wrapIndex(this, index);
        return index < 0 || (this.size === Infinity || this.size !== void 0 && index > this.size) ? notSetValue : this.find(function(_2, key) {
          return key === index;
        }, void 0, notSetValue);
      },
      has: function(index) {
        index = wrapIndex(this, index);
        return index >= 0 && (this.size !== void 0 ? this.size === Infinity || index < this.size : this.indexOf(index) !== -1);
      },
      interpose: function(separator) {
        return reify(this, interposeFactory(this, separator));
      },
      interleave: function() {
        var iterables = [this].concat(arrCopy(arguments));
        var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
        var interleaved = zipped.flatten(true);
        if (zipped.size) {
          interleaved.size = zipped.size * iterables.length;
        }
        return reify(this, interleaved);
      },
      last: function() {
        return this.get(-1);
      },
      skipWhile: function(predicate, context) {
        return reify(this, skipWhileFactory(this, predicate, context, false));
      },
      zip: function() {
        var iterables = [this].concat(arrCopy(arguments));
        return reify(this, zipWithFactory(this, defaultZipper, iterables));
      },
      zipWith: function(zipper) {
        var iterables = arrCopy(arguments);
        iterables[0] = this;
        return reify(this, zipWithFactory(this, zipper, iterables));
      }
    });
    IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
    IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;
    mixin(SetIterable, {
      // ### ES6 Collection methods (ES6 Array and Map)
      get: function(value, notSetValue) {
        return this.has(value) ? value : notSetValue;
      },
      includes: function(value) {
        return this.has(value);
      },
      // ### More sequential methods
      keySeq: function() {
        return this.valueSeq();
      }
    });
    SetIterable.prototype.has = IterablePrototype.includes;
    mixin(KeyedSeq, KeyedIterable.prototype);
    mixin(IndexedSeq, IndexedIterable.prototype);
    mixin(SetSeq, SetIterable.prototype);
    mixin(KeyedCollection, KeyedIterable.prototype);
    mixin(IndexedCollection, IndexedIterable.prototype);
    mixin(SetCollection, SetIterable.prototype);
    function keyMapper(v2, k2) {
      return k2;
    }
    function entryMapper(v2, k2) {
      return [k2, v2];
    }
    function not(predicate) {
      return function() {
        return !predicate.apply(this, arguments);
      };
    }
    function neg(predicate) {
      return function() {
        return -predicate.apply(this, arguments);
      };
    }
    function quoteString(value) {
      return typeof value === "string" ? JSON.stringify(value) : value;
    }
    function defaultZipper() {
      return arrCopy(arguments);
    }
    function defaultNegComparator(a2, b2) {
      return a2 < b2 ? 1 : a2 > b2 ? -1 : 0;
    }
    function hashIterable(iterable) {
      if (iterable.size === Infinity) {
        return 0;
      }
      var ordered = isOrdered(iterable);
      var keyed = isKeyed(iterable);
      var h2 = ordered ? 1 : 0;
      var size = iterable.__iterate(
        keyed ? ordered ? function(v2, k2) {
          h2 = 31 * h2 + hashMerge(hash(v2), hash(k2)) | 0;
        } : function(v2, k2) {
          h2 = h2 + hashMerge(hash(v2), hash(k2)) | 0;
        } : ordered ? function(v2) {
          h2 = 31 * h2 + hash(v2) | 0;
        } : function(v2) {
          h2 = h2 + hash(v2) | 0;
        }
      );
      return murmurHashOfSize(size, h2);
    }
    function murmurHashOfSize(size, h2) {
      h2 = imul(h2, 3432918353);
      h2 = imul(h2 << 15 | h2 >>> -15, 461845907);
      h2 = imul(h2 << 13 | h2 >>> -13, 5);
      h2 = (h2 + 3864292196 | 0) ^ size;
      h2 = imul(h2 ^ h2 >>> 16, 2246822507);
      h2 = imul(h2 ^ h2 >>> 13, 3266489909);
      h2 = smi(h2 ^ h2 >>> 16);
      return h2;
    }
    function hashMerge(a2, b2) {
      return a2 ^ b2 + 2654435769 + (a2 << 6) + (a2 >> 2) | 0;
    }
    var Immutable2 = {
      Iterable,
      Seq,
      Collection,
      Map: Map2,
      OrderedMap: OrderedMap2,
      List: List2,
      Stack: Stack2,
      Set: Set2,
      OrderedSet: OrderedSet2,
      Record: Record2,
      Range,
      Repeat: Repeat2,
      is: is2,
      fromJS: fromJS2
    };
    return Immutable2;
  });
})(immutable);
var Immutable$o = immutableExports;
var OrderedMap$6 = Immutable$o.OrderedMap;
var BlockMapBuilder$5 = {
  createFromArray: function createFromArray(blocks) {
    return OrderedMap$6(blocks.map(function(block) {
      return [block.getKey(), block];
    }));
  }
};
var BlockMapBuilder_1 = BlockMapBuilder$5;
function _inheritsLoose$a(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var _require$6 = immutableExports, Map$c = _require$6.Map, OrderedSet$6 = _require$6.OrderedSet, Record$7 = _require$6.Record;
var EMPTY_SET$3 = OrderedSet$6();
var defaultRecord$5 = {
  style: EMPTY_SET$3,
  entity: null
};
var CharacterMetadataRecord = Record$7(defaultRecord$5);
var CharacterMetadata$c = /* @__PURE__ */ function(_CharacterMetadataRec) {
  _inheritsLoose$a(CharacterMetadata2, _CharacterMetadataRec);
  function CharacterMetadata2() {
    return _CharacterMetadataRec.apply(this, arguments) || this;
  }
  var _proto = CharacterMetadata2.prototype;
  _proto.getStyle = function getStyle() {
    return this.get("style");
  };
  _proto.getEntity = function getEntity() {
    return this.get("entity");
  };
  _proto.hasStyle = function hasStyle(style) {
    return this.getStyle().includes(style);
  };
  CharacterMetadata2.applyStyle = function applyStyle(record, style) {
    var withStyle = record.set("style", record.getStyle().add(style));
    return CharacterMetadata2.create(withStyle);
  };
  CharacterMetadata2.removeStyle = function removeStyle(record, style) {
    var withoutStyle = record.set("style", record.getStyle().remove(style));
    return CharacterMetadata2.create(withoutStyle);
  };
  CharacterMetadata2.applyEntity = function applyEntity2(record, entityKey) {
    var withEntity = record.getEntity() === entityKey ? record : record.set("entity", entityKey);
    return CharacterMetadata2.create(withEntity);
  };
  CharacterMetadata2.create = function create2(config) {
    if (!config) {
      return EMPTY;
    }
    var defaultConfig = {
      style: EMPTY_SET$3,
      entity: null
    };
    var configMap = Map$c(defaultConfig).merge(config);
    var existing = pool.get(configMap);
    if (existing) {
      return existing;
    }
    var newCharacter = new CharacterMetadata2(configMap);
    pool = pool.set(configMap, newCharacter);
    return newCharacter;
  };
  CharacterMetadata2.fromJS = function fromJS2(_ref) {
    var style = _ref.style, entity = _ref.entity;
    return new CharacterMetadata2({
      style: Array.isArray(style) ? OrderedSet$6(style) : style,
      entity: Array.isArray(entity) ? OrderedSet$6(entity) : entity
    });
  };
  return CharacterMetadata2;
}(CharacterMetadataRecord);
var EMPTY = new CharacterMetadata$c();
var pool = Map$c([[Map$c(defaultRecord$5), EMPTY]]);
CharacterMetadata$c.EMPTY = EMPTY;
var CharacterMetadata_1 = CharacterMetadata$c;
function findRangesImmutable$5(haystack, areEqualFn, filterFn, foundFn) {
  if (!haystack.size) {
    return;
  }
  var cursor = 0;
  haystack.reduce(function(value, nextValue, nextIndex) {
    if (!areEqualFn(value, nextValue)) {
      if (filterFn(value)) {
        foundFn(cursor, nextIndex);
      }
      cursor = nextIndex;
    }
    return nextValue;
  });
  filterFn(haystack.last()) && foundFn(cursor, haystack.count());
}
var findRangesImmutable_1 = findRangesImmutable$5;
function _inheritsLoose$9(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var CharacterMetadata$b = CharacterMetadata_1;
var findRangesImmutable$4 = findRangesImmutable_1;
var Immutable$n = immutableExports;
var List$d = Immutable$n.List, Map$b = Immutable$n.Map, OrderedSet$5 = Immutable$n.OrderedSet, Record$6 = Immutable$n.Record, Repeat$6 = Immutable$n.Repeat;
var EMPTY_SET$2 = OrderedSet$5();
var defaultRecord$4 = {
  key: "",
  type: "unstyled",
  text: "",
  characterList: List$d(),
  depth: 0,
  data: Map$b()
};
var ContentBlockRecord$2 = Record$6(defaultRecord$4);
var decorateCharacterList$1 = function decorateCharacterList(config) {
  if (!config) {
    return config;
  }
  var characterList = config.characterList, text = config.text;
  if (text && !characterList) {
    config.characterList = List$d(Repeat$6(CharacterMetadata$b.EMPTY, text.length));
  }
  return config;
};
var ContentBlock$7 = /* @__PURE__ */ function(_ContentBlockRecord) {
  _inheritsLoose$9(ContentBlock2, _ContentBlockRecord);
  function ContentBlock2(config) {
    return _ContentBlockRecord.call(this, decorateCharacterList$1(config)) || this;
  }
  var _proto = ContentBlock2.prototype;
  _proto.getKey = function getKey() {
    return this.get("key");
  };
  _proto.getType = function getType() {
    return this.get("type");
  };
  _proto.getText = function getText() {
    return this.get("text");
  };
  _proto.getCharacterList = function getCharacterList() {
    return this.get("characterList");
  };
  _proto.getLength = function getLength() {
    return this.getText().length;
  };
  _proto.getDepth = function getDepth() {
    return this.get("depth");
  };
  _proto.getData = function getData() {
    return this.get("data");
  };
  _proto.getInlineStyleAt = function getInlineStyleAt(offset) {
    var character = this.getCharacterList().get(offset);
    return character ? character.getStyle() : EMPTY_SET$2;
  };
  _proto.getEntityAt = function getEntityAt(offset) {
    var character = this.getCharacterList().get(offset);
    return character ? character.getEntity() : null;
  };
  _proto.findStyleRanges = function findStyleRanges(filterFn, callback) {
    findRangesImmutable$4(this.getCharacterList(), haveEqualStyle$1, filterFn, callback);
  };
  _proto.findEntityRanges = function findEntityRanges(filterFn, callback) {
    findRangesImmutable$4(this.getCharacterList(), haveEqualEntity$1, filterFn, callback);
  };
  return ContentBlock2;
}(ContentBlockRecord$2);
function haveEqualStyle$1(charA, charB) {
  return charA.getStyle() === charB.getStyle();
}
function haveEqualEntity$1(charA, charB) {
  return charA.getEntity() === charB.getEntity();
}
var ContentBlock_1 = ContentBlock$7;
function _inheritsLoose$8(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var CharacterMetadata$a = CharacterMetadata_1;
var findRangesImmutable$3 = findRangesImmutable_1;
var Immutable$m = immutableExports;
var List$c = Immutable$m.List, Map$a = Immutable$m.Map, OrderedSet$4 = Immutable$m.OrderedSet, Record$5 = Immutable$m.Record, Repeat$5 = Immutable$m.Repeat;
var EMPTY_SET$1 = OrderedSet$4();
var defaultRecord$3 = {
  parent: null,
  characterList: List$c(),
  data: Map$a(),
  depth: 0,
  key: "",
  text: "",
  type: "unstyled",
  children: List$c(),
  prevSibling: null,
  nextSibling: null
};
var haveEqualStyle = function haveEqualStyle2(charA, charB) {
  return charA.getStyle() === charB.getStyle();
};
var haveEqualEntity = function haveEqualEntity2(charA, charB) {
  return charA.getEntity() === charB.getEntity();
};
var decorateCharacterList2 = function decorateCharacterList3(config) {
  if (!config) {
    return config;
  }
  var characterList = config.characterList, text = config.text;
  if (text && !characterList) {
    config.characterList = List$c(Repeat$5(CharacterMetadata$a.EMPTY, text.length));
  }
  return config;
};
var ContentBlockNode$c = /* @__PURE__ */ function(_ref) {
  _inheritsLoose$8(ContentBlockNode2, _ref);
  function ContentBlockNode2() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultRecord$3;
    return _ref.call(this, decorateCharacterList2(props)) || this;
  }
  var _proto = ContentBlockNode2.prototype;
  _proto.getKey = function getKey() {
    return this.get("key");
  };
  _proto.getType = function getType() {
    return this.get("type");
  };
  _proto.getText = function getText() {
    return this.get("text");
  };
  _proto.getCharacterList = function getCharacterList() {
    return this.get("characterList");
  };
  _proto.getLength = function getLength() {
    return this.getText().length;
  };
  _proto.getDepth = function getDepth() {
    return this.get("depth");
  };
  _proto.getData = function getData() {
    return this.get("data");
  };
  _proto.getInlineStyleAt = function getInlineStyleAt(offset) {
    var character = this.getCharacterList().get(offset);
    return character ? character.getStyle() : EMPTY_SET$1;
  };
  _proto.getEntityAt = function getEntityAt(offset) {
    var character = this.getCharacterList().get(offset);
    return character ? character.getEntity() : null;
  };
  _proto.getChildKeys = function getChildKeys() {
    return this.get("children");
  };
  _proto.getParentKey = function getParentKey() {
    return this.get("parent");
  };
  _proto.getPrevSiblingKey = function getPrevSiblingKey() {
    return this.get("prevSibling");
  };
  _proto.getNextSiblingKey = function getNextSiblingKey() {
    return this.get("nextSibling");
  };
  _proto.findStyleRanges = function findStyleRanges(filterFn, callback) {
    findRangesImmutable$3(this.getCharacterList(), haveEqualStyle, filterFn, callback);
  };
  _proto.findEntityRanges = function findEntityRanges(filterFn, callback) {
    findRangesImmutable$3(this.getCharacterList(), haveEqualEntity, filterFn, callback);
  };
  return ContentBlockNode2;
}(Record$5(defaultRecord$3));
var ContentBlockNode_1 = ContentBlockNode$c;
var CharacterMetadata$9 = CharacterMetadata_1;
var _require$5 = immutableExports, Map$9 = _require$5.Map;
var ContentStateInlineStyle$1 = {
  add: function add(contentState, selectionState, inlineStyle) {
    return modifyInlineStyle(contentState, selectionState, inlineStyle, true);
  },
  remove: function remove(contentState, selectionState, inlineStyle) {
    return modifyInlineStyle(contentState, selectionState, inlineStyle, false);
  }
};
function modifyInlineStyle(contentState, selectionState, inlineStyle, addOrRemove) {
  var blockMap = contentState.getBlockMap();
  var startKey = selectionState.getStartKey();
  var startOffset = selectionState.getStartOffset();
  var endKey = selectionState.getEndKey();
  var endOffset = selectionState.getEndOffset();
  var newBlocks = blockMap.skipUntil(function(_2, k2) {
    return k2 === startKey;
  }).takeUntil(function(_2, k2) {
    return k2 === endKey;
  }).concat(Map$9([[endKey, blockMap.get(endKey)]])).map(function(block, blockKey) {
    var sliceStart;
    var sliceEnd;
    if (startKey === endKey) {
      sliceStart = startOffset;
      sliceEnd = endOffset;
    } else {
      sliceStart = blockKey === startKey ? startOffset : 0;
      sliceEnd = blockKey === endKey ? endOffset : block.getLength();
    }
    var chars = block.getCharacterList();
    var current;
    while (sliceStart < sliceEnd) {
      current = chars.get(sliceStart);
      chars = chars.set(sliceStart, addOrRemove ? CharacterMetadata$9.applyStyle(current, inlineStyle) : CharacterMetadata$9.removeStyle(current, inlineStyle));
      sliceStart++;
    }
    return block.set("characterList", chars);
  });
  return contentState.merge({
    blockMap: blockMap.merge(newBlocks),
    selectionBefore: selectionState,
    selectionAfter: selectionState
  });
}
var ContentStateInlineStyle_1 = ContentStateInlineStyle$1;
var CharacterMetadata$8 = CharacterMetadata_1;
function applyEntityToContentBlock$1(contentBlock, startArg, end, entityKey) {
  var start = startArg;
  var characterList = contentBlock.getCharacterList();
  while (start < end) {
    characterList = characterList.set(start, CharacterMetadata$8.applyEntity(characterList.get(start), entityKey));
    start++;
  }
  return contentBlock.set("characterList", characterList);
}
var applyEntityToContentBlock_1 = applyEntityToContentBlock$1;
var applyEntityToContentBlock = applyEntityToContentBlock_1;
var Immutable$l = immutableExports;
function applyEntityToContentState$1(contentState, selectionState, entityKey) {
  var blockMap = contentState.getBlockMap();
  var startKey = selectionState.getStartKey();
  var startOffset = selectionState.getStartOffset();
  var endKey = selectionState.getEndKey();
  var endOffset = selectionState.getEndOffset();
  var newBlocks = blockMap.skipUntil(function(_2, k2) {
    return k2 === startKey;
  }).takeUntil(function(_2, k2) {
    return k2 === endKey;
  }).toOrderedMap().merge(Immutable$l.OrderedMap([[endKey, blockMap.get(endKey)]])).map(function(block, blockKey) {
    var sliceStart = blockKey === startKey ? startOffset : 0;
    var sliceEnd = blockKey === endKey ? endOffset : block.getLength();
    return applyEntityToContentBlock(block, sliceStart, sliceEnd, entityKey);
  });
  return contentState.merge({
    blockMap: blockMap.merge(newBlocks),
    selectionBefore: selectionState,
    selectionAfter: selectionState
  });
}
var applyEntityToContentState_1 = applyEntityToContentState$1;
var DraftEntitySegments$1 = {
  getRemovalRange: function getRemovalRange(selectionStart, selectionEnd, text, entityStart, direction) {
    var segments = text.split(" ");
    segments = segments.map(function(segment2, ii2) {
      if (direction === "forward") {
        if (ii2 > 0) {
          return " " + segment2;
        }
      } else if (ii2 < segments.length - 1) {
        return segment2 + " ";
      }
      return segment2;
    });
    var segmentStart = entityStart;
    var segmentEnd;
    var segment;
    var removalStart = null;
    var removalEnd = null;
    for (var jj2 = 0; jj2 < segments.length; jj2++) {
      segment = segments[jj2];
      segmentEnd = segmentStart + segment.length;
      if (selectionStart < segmentEnd && segmentStart < selectionEnd) {
        if (removalStart !== null) {
          removalEnd = segmentEnd;
        } else {
          removalStart = segmentStart;
          removalEnd = segmentEnd;
        }
      } else if (removalStart !== null) {
        break;
      }
      segmentStart = segmentEnd;
    }
    var entityEnd = entityStart + text.length;
    var atStart = removalStart === entityStart;
    var atEnd = removalEnd === entityEnd;
    if (!atStart && atEnd || atStart && !atEnd) {
      if (direction === "forward") {
        if (removalEnd !== entityEnd) {
          removalEnd++;
        }
      } else if (removalStart !== entityStart) {
        removalStart--;
      }
    }
    return {
      start: removalStart,
      end: removalEnd
    };
  }
};
var DraftEntitySegments_1 = DraftEntitySegments$1;
function invariant$u(condition, format) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  if (!condition) {
    var error;
    if (format === void 0) {
      error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    } else {
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function() {
        return String(args[argIndex++]);
      }));
      error.name = "Invariant Violation";
    }
    error.framesToPop = 1;
    throw error;
  }
}
var invariant_1 = invariant$u;
var invariant$t = invariant_1;
function getRangesForDraftEntity$1(block, key) {
  var ranges = [];
  block.findEntityRanges(function(c2) {
    return c2.getEntity() === key;
  }, function(start, end) {
    ranges.push({
      start,
      end
    });
  });
  !!!ranges.length ? invariant$t(false) : void 0;
  return ranges;
}
var getRangesForDraftEntity_1 = getRangesForDraftEntity$1;
var DraftEntitySegments = DraftEntitySegments_1;
var getRangesForDraftEntity = getRangesForDraftEntity_1;
var invariant$s = invariant_1;
function getCharacterRemovalRange$1(entityMap, startBlock, endBlock, selectionState, direction) {
  var start = selectionState.getStartOffset();
  var end = selectionState.getEndOffset();
  var startEntityKey = startBlock.getEntityAt(start);
  var endEntityKey = endBlock.getEntityAt(end - 1);
  if (!startEntityKey && !endEntityKey) {
    return selectionState;
  }
  var newSelectionState = selectionState;
  if (startEntityKey && startEntityKey === endEntityKey) {
    newSelectionState = getEntityRemovalRange(entityMap, startBlock, newSelectionState, direction, startEntityKey, true, true);
  } else if (startEntityKey && endEntityKey) {
    var startSelectionState = getEntityRemovalRange(entityMap, startBlock, newSelectionState, direction, startEntityKey, false, true);
    var endSelectionState = getEntityRemovalRange(entityMap, endBlock, newSelectionState, direction, endEntityKey, false, false);
    newSelectionState = newSelectionState.merge({
      anchorOffset: startSelectionState.getAnchorOffset(),
      focusOffset: endSelectionState.getFocusOffset(),
      isBackward: false
    });
  } else if (startEntityKey) {
    var _startSelectionState = getEntityRemovalRange(entityMap, startBlock, newSelectionState, direction, startEntityKey, false, true);
    newSelectionState = newSelectionState.merge({
      anchorOffset: _startSelectionState.getStartOffset(),
      isBackward: false
    });
  } else if (endEntityKey) {
    var _endSelectionState = getEntityRemovalRange(entityMap, endBlock, newSelectionState, direction, endEntityKey, false, false);
    newSelectionState = newSelectionState.merge({
      focusOffset: _endSelectionState.getEndOffset(),
      isBackward: false
    });
  }
  return newSelectionState;
}
function getEntityRemovalRange(entityMap, block, selectionState, direction, entityKey, isEntireSelectionWithinEntity, isEntityAtStart) {
  var start = selectionState.getStartOffset();
  var end = selectionState.getEndOffset();
  var entity = entityMap.__get(entityKey);
  var mutability = entity.getMutability();
  var sideToConsider = isEntityAtStart ? start : end;
  if (mutability === "MUTABLE") {
    return selectionState;
  }
  var entityRanges = getRangesForDraftEntity(block, entityKey).filter(function(range) {
    return sideToConsider <= range.end && sideToConsider >= range.start;
  });
  !(entityRanges.length == 1) ? invariant$s(false) : void 0;
  var entityRange = entityRanges[0];
  if (mutability === "IMMUTABLE") {
    return selectionState.merge({
      anchorOffset: entityRange.start,
      focusOffset: entityRange.end,
      isBackward: false
    });
  }
  if (!isEntireSelectionWithinEntity) {
    if (isEntityAtStart) {
      end = entityRange.end;
    } else {
      start = entityRange.start;
    }
  }
  var removalRange = DraftEntitySegments.getRemovalRange(start, end, block.getText().slice(entityRange.start, entityRange.end), entityRange.start, direction);
  return selectionState.merge({
    anchorOffset: removalRange.start,
    focusOffset: removalRange.end,
    isBackward: false
  });
}
var getCharacterRemovalRange_1 = getCharacterRemovalRange$1;
var seenKeys = {};
var MULTIPLIER = Math.pow(2, 24);
function generateRandomKey$a() {
  var key;
  while (key === void 0 || seenKeys.hasOwnProperty(key) || !isNaN(+key)) {
    key = Math.floor(Math.random() * MULTIPLIER).toString(32);
  }
  seenKeys[key] = true;
  return key;
}
var generateRandomKey_1 = generateRandomKey$a;
var ContentBlockNode$b = ContentBlockNode_1;
var generateRandomKey$9 = generateRandomKey_1;
var Immutable$k = immutableExports;
var OrderedMap$5 = Immutable$k.OrderedMap;
var randomizeContentBlockNodeKeys = function randomizeContentBlockNodeKeys2(blockMap) {
  var newKeysRef = {};
  var lastRootBlock;
  return OrderedMap$5(blockMap.withMutations(function(blockMapState) {
    blockMapState.forEach(function(block, index) {
      var oldKey = block.getKey();
      var nextKey = block.getNextSiblingKey();
      var prevKey = block.getPrevSiblingKey();
      var childrenKeys = block.getChildKeys();
      var parentKey = block.getParentKey();
      var key = generateRandomKey$9();
      newKeysRef[oldKey] = key;
      if (nextKey) {
        var nextBlock = blockMapState.get(nextKey);
        if (nextBlock) {
          blockMapState.setIn([nextKey, "prevSibling"], key);
        } else {
          blockMapState.setIn([oldKey, "nextSibling"], null);
        }
      }
      if (prevKey) {
        var prevBlock = blockMapState.get(prevKey);
        if (prevBlock) {
          blockMapState.setIn([prevKey, "nextSibling"], key);
        } else {
          blockMapState.setIn([oldKey, "prevSibling"], null);
        }
      }
      if (parentKey && blockMapState.get(parentKey)) {
        var parentBlock = blockMapState.get(parentKey);
        var parentChildrenList = parentBlock.getChildKeys();
        blockMapState.setIn([parentKey, "children"], parentChildrenList.set(parentChildrenList.indexOf(block.getKey()), key));
      } else {
        blockMapState.setIn([oldKey, "parent"], null);
        if (lastRootBlock) {
          blockMapState.setIn([lastRootBlock.getKey(), "nextSibling"], key);
          blockMapState.setIn([oldKey, "prevSibling"], newKeysRef[lastRootBlock.getKey()]);
        }
        lastRootBlock = blockMapState.get(oldKey);
      }
      childrenKeys.forEach(function(childKey) {
        var childBlock = blockMapState.get(childKey);
        if (childBlock) {
          blockMapState.setIn([childKey, "parent"], key);
        } else {
          blockMapState.setIn([oldKey, "children"], block.getChildKeys().filter(function(child) {
            return child !== childKey;
          }));
        }
      });
    });
  }).toArray().map(function(block) {
    return [newKeysRef[block.getKey()], block.set("key", newKeysRef[block.getKey()])];
  }));
};
var randomizeContentBlockKeys = function randomizeContentBlockKeys2(blockMap) {
  return OrderedMap$5(blockMap.toArray().map(function(block) {
    var key = generateRandomKey$9();
    return [key, block.set("key", key)];
  }));
};
var randomizeBlockMapKeys$2 = function randomizeBlockMapKeys(blockMap) {
  var isTreeBasedBlockMap = blockMap.first() instanceof ContentBlockNode$b;
  if (!isTreeBasedBlockMap) {
    return randomizeContentBlockKeys(blockMap);
  }
  return randomizeContentBlockNodeKeys(blockMap);
};
var randomizeBlockMapKeys_1 = randomizeBlockMapKeys$2;
var CharacterMetadata$7 = CharacterMetadata_1;
var findRangesImmutable$2 = findRangesImmutable_1;
var invariant$r = invariant_1;
function removeEntitiesAtEdges$2(contentState, selectionState) {
  var blockMap = contentState.getBlockMap();
  var entityMap = contentState.getEntityMap();
  var updatedBlocks = {};
  var startKey = selectionState.getStartKey();
  var startOffset = selectionState.getStartOffset();
  var startBlock = blockMap.get(startKey);
  var updatedStart = removeForBlock(entityMap, startBlock, startOffset);
  if (updatedStart !== startBlock) {
    updatedBlocks[startKey] = updatedStart;
  }
  var endKey = selectionState.getEndKey();
  var endOffset = selectionState.getEndOffset();
  var endBlock = blockMap.get(endKey);
  if (startKey === endKey) {
    endBlock = updatedStart;
  }
  var updatedEnd = removeForBlock(entityMap, endBlock, endOffset);
  if (updatedEnd !== endBlock) {
    updatedBlocks[endKey] = updatedEnd;
  }
  if (!Object.keys(updatedBlocks).length) {
    return contentState.set("selectionAfter", selectionState);
  }
  return contentState.merge({
    blockMap: blockMap.merge(updatedBlocks),
    selectionAfter: selectionState
  });
}
function getRemovalRange2(characters, entityKey, offset) {
  var removalRange;
  findRangesImmutable$2(
    characters,
    // the list to iterate through
    function(a2, b2) {
      return a2.getEntity() === b2.getEntity();
    },
    // 'isEqual' callback
    function(element) {
      return element.getEntity() === entityKey;
    },
    // 'filter' callback
    function(start, end) {
      if (start <= offset && end >= offset) {
        removalRange = {
          start,
          end
        };
      }
    }
  );
  !(typeof removalRange === "object") ? invariant$r(false) : void 0;
  return removalRange;
}
function removeForBlock(entityMap, block, offset) {
  var chars = block.getCharacterList();
  var charBefore = offset > 0 ? chars.get(offset - 1) : void 0;
  var charAfter = offset < chars.count() ? chars.get(offset) : void 0;
  var entityBeforeCursor = charBefore ? charBefore.getEntity() : void 0;
  var entityAfterCursor = charAfter ? charAfter.getEntity() : void 0;
  if (entityAfterCursor && entityAfterCursor === entityBeforeCursor) {
    var entity = entityMap.__get(entityAfterCursor);
    if (entity.getMutability() !== "MUTABLE") {
      var _getRemovalRange = getRemovalRange2(chars, entityAfterCursor, offset), start = _getRemovalRange.start, end = _getRemovalRange.end;
      var current;
      while (start < end) {
        current = chars.get(start);
        chars = chars.set(start, CharacterMetadata$7.applyEntity(current, null));
        start++;
      }
      return block.set("characterList", chars);
    }
  }
  return block;
}
var removeEntitiesAtEdges_1 = removeEntitiesAtEdges$2;
var randomizeBlockMapKeys$1 = randomizeBlockMapKeys_1;
var removeEntitiesAtEdges$1 = removeEntitiesAtEdges_1;
var getContentStateFragment$4 = function getContentStateFragment(contentState, selectionState) {
  var startKey = selectionState.getStartKey();
  var startOffset = selectionState.getStartOffset();
  var endKey = selectionState.getEndKey();
  var endOffset = selectionState.getEndOffset();
  var contentWithoutEdgeEntities = removeEntitiesAtEdges$1(contentState, selectionState);
  var blockMap = contentWithoutEdgeEntities.getBlockMap();
  var blockKeys = blockMap.keySeq();
  var startIndex = blockKeys.indexOf(startKey);
  var endIndex = blockKeys.indexOf(endKey) + 1;
  return randomizeBlockMapKeys$1(blockMap.slice(startIndex, endIndex).map(function(block, blockKey) {
    var text = block.getText();
    var chars = block.getCharacterList();
    if (startKey === endKey) {
      return block.merge({
        text: text.slice(startOffset, endOffset),
        characterList: chars.slice(startOffset, endOffset)
      });
    }
    if (blockKey === startKey) {
      return block.merge({
        text: text.slice(startOffset),
        characterList: chars.slice(startOffset)
      });
    }
    if (blockKey === endKey) {
      return block.merge({
        text: text.slice(0, endOffset),
        characterList: chars.slice(0, endOffset)
      });
    }
    return block;
  }));
};
var getContentStateFragment_1 = getContentStateFragment$4;
function insertIntoList$2(targetListArg, toInsert, offset) {
  var targetList = targetListArg;
  if (offset === targetList.count()) {
    toInsert.forEach(function(c2) {
      targetList = targetList.push(c2);
    });
  } else if (offset === 0) {
    toInsert.reverse().forEach(function(c2) {
      targetList = targetList.unshift(c2);
    });
  } else {
    var head = targetList.slice(0, offset);
    var tail = targetList.slice(offset);
    targetList = head.concat(toInsert, tail).toList();
  }
  return targetList;
}
var insertIntoList_1 = insertIntoList$2;
var BlockMapBuilder$4 = BlockMapBuilder_1;
var ContentBlockNode$a = ContentBlockNode_1;
var Immutable$j = immutableExports;
var insertIntoList$1 = insertIntoList_1;
var invariant$q = invariant_1;
var randomizeBlockMapKeys2 = randomizeBlockMapKeys_1;
var List$b = Immutable$j.List;
var updateExistingBlock = function updateExistingBlock2(contentState, selectionState, blockMap, fragmentBlock, targetKey, targetOffset) {
  var mergeBlockData2 = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : "REPLACE_WITH_NEW_DATA";
  var targetBlock = blockMap.get(targetKey);
  var text = targetBlock.getText();
  var chars = targetBlock.getCharacterList();
  var finalKey = targetKey;
  var finalOffset = targetOffset + fragmentBlock.getText().length;
  var data = null;
  switch (mergeBlockData2) {
    case "MERGE_OLD_DATA_TO_NEW_DATA":
      data = fragmentBlock.getData().merge(targetBlock.getData());
      break;
    case "REPLACE_WITH_NEW_DATA":
      data = fragmentBlock.getData();
      break;
  }
  var type = targetBlock.getType();
  if (text && type === "unstyled") {
    type = fragmentBlock.getType();
  }
  var newBlock = targetBlock.merge({
    text: text.slice(0, targetOffset) + fragmentBlock.getText() + text.slice(targetOffset),
    characterList: insertIntoList$1(chars, fragmentBlock.getCharacterList(), targetOffset),
    type,
    data
  });
  return contentState.merge({
    blockMap: blockMap.set(targetKey, newBlock),
    selectionBefore: selectionState,
    selectionAfter: selectionState.merge({
      anchorKey: finalKey,
      anchorOffset: finalOffset,
      focusKey: finalKey,
      focusOffset: finalOffset,
      isBackward: false
    })
  });
};
var updateHead = function updateHead2(block, targetOffset, fragment) {
  var text = block.getText();
  var chars = block.getCharacterList();
  var headText = text.slice(0, targetOffset);
  var headCharacters = chars.slice(0, targetOffset);
  var appendToHead = fragment.first();
  return block.merge({
    text: headText + appendToHead.getText(),
    characterList: headCharacters.concat(appendToHead.getCharacterList()),
    type: headText ? block.getType() : appendToHead.getType(),
    data: appendToHead.getData()
  });
};
var updateTail = function updateTail2(block, targetOffset, fragment) {
  var text = block.getText();
  var chars = block.getCharacterList();
  var blockSize = text.length;
  var tailText = text.slice(targetOffset, blockSize);
  var tailCharacters = chars.slice(targetOffset, blockSize);
  var prependToTail = fragment.last();
  return prependToTail.merge({
    text: prependToTail.getText() + tailText,
    characterList: prependToTail.getCharacterList().concat(tailCharacters),
    data: prependToTail.getData()
  });
};
var getRootBlocks = function getRootBlocks2(block, blockMap) {
  var headKey = block.getKey();
  var rootBlock = block;
  var rootBlocks = [];
  if (blockMap.get(headKey)) {
    rootBlocks.push(headKey);
  }
  while (rootBlock && rootBlock.getNextSiblingKey()) {
    var lastSiblingKey = rootBlock.getNextSiblingKey();
    if (!lastSiblingKey) {
      break;
    }
    rootBlocks.push(lastSiblingKey);
    rootBlock = blockMap.get(lastSiblingKey);
  }
  return rootBlocks;
};
var updateBlockMapLinks$3 = function updateBlockMapLinks(blockMap, originalBlockMap, targetBlock, fragmentHeadBlock) {
  return blockMap.withMutations(function(blockMapState) {
    var targetKey = targetBlock.getKey();
    var headKey = fragmentHeadBlock.getKey();
    var targetNextKey = targetBlock.getNextSiblingKey();
    var targetParentKey = targetBlock.getParentKey();
    var fragmentRootBlocks = getRootBlocks(fragmentHeadBlock, blockMap);
    var lastRootFragmentBlockKey = fragmentRootBlocks[fragmentRootBlocks.length - 1];
    if (blockMapState.get(headKey)) {
      blockMapState.setIn([targetKey, "nextSibling"], headKey);
      blockMapState.setIn([headKey, "prevSibling"], targetKey);
    } else {
      blockMapState.setIn([targetKey, "nextSibling"], fragmentHeadBlock.getNextSiblingKey());
      blockMapState.setIn([fragmentHeadBlock.getNextSiblingKey(), "prevSibling"], targetKey);
    }
    blockMapState.setIn([lastRootFragmentBlockKey, "nextSibling"], targetNextKey);
    if (targetNextKey) {
      blockMapState.setIn([targetNextKey, "prevSibling"], lastRootFragmentBlockKey);
    }
    fragmentRootBlocks.forEach(function(blockKey) {
      return blockMapState.setIn([blockKey, "parent"], targetParentKey);
    });
    if (targetParentKey) {
      var targetParent = blockMap.get(targetParentKey);
      var originalTargetParentChildKeys = targetParent.getChildKeys();
      var targetBlockIndex = originalTargetParentChildKeys.indexOf(targetKey);
      var insertionIndex = targetBlockIndex + 1;
      var newChildrenKeysArray = originalTargetParentChildKeys.toArray();
      newChildrenKeysArray.splice.apply(newChildrenKeysArray, [insertionIndex, 0].concat(fragmentRootBlocks));
      blockMapState.setIn([targetParentKey, "children"], List$b(newChildrenKeysArray));
    }
  });
};
var insertFragment$1 = function insertFragment(contentState, selectionState, blockMap, fragment, targetKey, targetOffset) {
  var isTreeBasedBlockMap = blockMap.first() instanceof ContentBlockNode$a;
  var newBlockArr = [];
  var fragmentSize = fragment.size;
  var target = blockMap.get(targetKey);
  var head = fragment.first();
  var tail = fragment.last();
  var finalOffset = tail.getLength();
  var finalKey = tail.getKey();
  var shouldNotUpdateFromFragmentBlock = isTreeBasedBlockMap && (!target.getChildKeys().isEmpty() || !head.getChildKeys().isEmpty());
  blockMap.forEach(function(block, blockKey) {
    if (blockKey !== targetKey) {
      newBlockArr.push(block);
      return;
    }
    if (shouldNotUpdateFromFragmentBlock) {
      newBlockArr.push(block);
    } else {
      newBlockArr.push(updateHead(block, targetOffset, fragment));
    }
    fragment.slice(shouldNotUpdateFromFragmentBlock ? 0 : 1, fragmentSize - 1).forEach(function(fragmentBlock) {
      return newBlockArr.push(fragmentBlock);
    });
    newBlockArr.push(updateTail(block, targetOffset, fragment));
  });
  var updatedBlockMap = BlockMapBuilder$4.createFromArray(newBlockArr);
  if (isTreeBasedBlockMap) {
    updatedBlockMap = updateBlockMapLinks$3(updatedBlockMap, blockMap, target, head);
  }
  return contentState.merge({
    blockMap: updatedBlockMap,
    selectionBefore: selectionState,
    selectionAfter: selectionState.merge({
      anchorKey: finalKey,
      anchorOffset: finalOffset,
      focusKey: finalKey,
      focusOffset: finalOffset,
      isBackward: false
    })
  });
};
var insertFragmentIntoContentState$1 = function insertFragmentIntoContentState(contentState, selectionState, fragmentBlockMap) {
  var mergeBlockData2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "REPLACE_WITH_NEW_DATA";
  !selectionState.isCollapsed() ? invariant$q(false) : void 0;
  var blockMap = contentState.getBlockMap();
  var fragment = randomizeBlockMapKeys2(fragmentBlockMap);
  var targetKey = selectionState.getStartKey();
  var targetOffset = selectionState.getStartOffset();
  var targetBlock = blockMap.get(targetKey);
  if (targetBlock instanceof ContentBlockNode$a) {
    !targetBlock.getChildKeys().isEmpty() ? invariant$q(false) : void 0;
  }
  if (fragment.size === 1) {
    return updateExistingBlock(contentState, selectionState, blockMap, fragment.first(), targetKey, targetOffset, mergeBlockData2);
  }
  return insertFragment$1(contentState, selectionState, blockMap, fragment, targetKey, targetOffset);
};
var insertFragmentIntoContentState_1 = insertFragmentIntoContentState$1;
var Immutable$i = immutableExports;
var insertIntoList = insertIntoList_1;
var invariant$p = invariant_1;
var Repeat$4 = Immutable$i.Repeat;
function insertTextIntoContentState$1(contentState, selectionState, text, characterMetadata) {
  !selectionState.isCollapsed() ? invariant$p(false) : void 0;
  var len = null;
  if (text != null) {
    len = text.length;
  }
  if (len == null || len === 0) {
    return contentState;
  }
  var blockMap = contentState.getBlockMap();
  var key = selectionState.getStartKey();
  var offset = selectionState.getStartOffset();
  var block = blockMap.get(key);
  var blockText = block.getText();
  var newBlock = block.merge({
    text: blockText.slice(0, offset) + text + blockText.slice(offset, block.getLength()),
    characterList: insertIntoList(block.getCharacterList(), Repeat$4(characterMetadata, len).toList(), offset)
  });
  var newOffset = offset + len;
  return contentState.merge({
    blockMap: blockMap.set(key, newBlock),
    selectionAfter: selectionState.merge({
      anchorOffset: newOffset,
      focusOffset: newOffset
    })
  });
}
var insertTextIntoContentState_1 = insertTextIntoContentState$1;
var Immutable$h = immutableExports;
var Map$8 = Immutable$h.Map;
function modifyBlockForContentState$2(contentState, selectionState, operation) {
  var startKey = selectionState.getStartKey();
  var endKey = selectionState.getEndKey();
  var blockMap = contentState.getBlockMap();
  var newBlocks = blockMap.toSeq().skipUntil(function(_2, k2) {
    return k2 === startKey;
  }).takeUntil(function(_2, k2) {
    return k2 === endKey;
  }).concat(Map$8([[endKey, blockMap.get(endKey)]])).map(operation);
  return contentState.merge({
    blockMap: blockMap.merge(newBlocks),
    selectionBefore: selectionState,
    selectionAfter: selectionState
  });
}
var modifyBlockForContentState_1 = modifyBlockForContentState$2;
var ContentBlockNode$9 = ContentBlockNode_1;
var getNextDelimiterBlockKey$2 = function getNextDelimiterBlockKey(block, blockMap) {
  var isExperimentalTreeBlock = block instanceof ContentBlockNode$9;
  if (!isExperimentalTreeBlock) {
    return null;
  }
  var nextSiblingKey = block.getNextSiblingKey();
  if (nextSiblingKey) {
    return nextSiblingKey;
  }
  var parent = block.getParentKey();
  if (!parent) {
    return null;
  }
  var nextNonDescendantBlock = blockMap.get(parent);
  while (nextNonDescendantBlock && !nextNonDescendantBlock.getNextSiblingKey()) {
    var parentKey = nextNonDescendantBlock.getParentKey();
    nextNonDescendantBlock = parentKey ? blockMap.get(parentKey) : null;
  }
  if (!nextNonDescendantBlock) {
    return null;
  }
  return nextNonDescendantBlock.getNextSiblingKey();
};
var getNextDelimiterBlockKey_1 = getNextDelimiterBlockKey$2;
var ContentBlockNode$8 = ContentBlockNode_1;
var getNextDelimiterBlockKey$1 = getNextDelimiterBlockKey_1;
var Immutable$g = immutableExports;
Immutable$g.List;
var Map$7 = Immutable$g.Map;
var transformBlock$2 = function transformBlock(key, blockMap, func) {
  if (!key) {
    return;
  }
  var block = blockMap.get(key);
  if (!block) {
    return;
  }
  blockMap.set(key, func(block));
};
var getAncestorsKeys = function getAncestorsKeys2(blockKey, blockMap) {
  var parents = [];
  if (!blockKey) {
    return parents;
  }
  var blockNode = blockMap.get(blockKey);
  while (blockNode && blockNode.getParentKey()) {
    var parentKey = blockNode.getParentKey();
    if (parentKey) {
      parents.push(parentKey);
    }
    blockNode = parentKey ? blockMap.get(parentKey) : null;
  }
  return parents;
};
var getNextDelimitersBlockKeys = function getNextDelimitersBlockKeys2(block, blockMap) {
  var nextDelimiters = [];
  if (!block) {
    return nextDelimiters;
  }
  var nextDelimiter = getNextDelimiterBlockKey$1(block, blockMap);
  while (nextDelimiter && blockMap.get(nextDelimiter)) {
    var _block = blockMap.get(nextDelimiter);
    nextDelimiters.push(nextDelimiter);
    nextDelimiter = _block.getParentKey() ? getNextDelimiterBlockKey$1(_block, blockMap) : null;
  }
  return nextDelimiters;
};
var getNextValidSibling = function getNextValidSibling2(block, blockMap, originalBlockMap) {
  if (!block) {
    return null;
  }
  var nextValidSiblingKey = originalBlockMap.get(block.getKey()).getNextSiblingKey();
  while (nextValidSiblingKey && !blockMap.get(nextValidSiblingKey)) {
    nextValidSiblingKey = originalBlockMap.get(nextValidSiblingKey).getNextSiblingKey() || null;
  }
  return nextValidSiblingKey;
};
var getPrevValidSibling = function getPrevValidSibling2(block, blockMap, originalBlockMap) {
  if (!block) {
    return null;
  }
  var prevValidSiblingKey = originalBlockMap.get(block.getKey()).getPrevSiblingKey();
  while (prevValidSiblingKey && !blockMap.get(prevValidSiblingKey)) {
    prevValidSiblingKey = originalBlockMap.get(prevValidSiblingKey).getPrevSiblingKey() || null;
  }
  return prevValidSiblingKey;
};
var updateBlockMapLinks$2 = function updateBlockMapLinks2(blockMap, startBlock, endBlock, originalBlockMap) {
  return blockMap.withMutations(function(blocks) {
    transformBlock$2(startBlock.getKey(), blocks, function(block) {
      return block.merge({
        nextSibling: getNextValidSibling(block, blocks, originalBlockMap),
        prevSibling: getPrevValidSibling(block, blocks, originalBlockMap)
      });
    });
    transformBlock$2(endBlock.getKey(), blocks, function(block) {
      return block.merge({
        nextSibling: getNextValidSibling(block, blocks, originalBlockMap),
        prevSibling: getPrevValidSibling(block, blocks, originalBlockMap)
      });
    });
    getAncestorsKeys(startBlock.getKey(), originalBlockMap).forEach(function(parentKey) {
      return transformBlock$2(parentKey, blocks, function(block) {
        return block.merge({
          children: block.getChildKeys().filter(function(key) {
            return blocks.get(key);
          }),
          nextSibling: getNextValidSibling(block, blocks, originalBlockMap),
          prevSibling: getPrevValidSibling(block, blocks, originalBlockMap)
        });
      });
    });
    transformBlock$2(startBlock.getNextSiblingKey(), blocks, function(block) {
      return block.merge({
        prevSibling: startBlock.getPrevSiblingKey()
      });
    });
    transformBlock$2(startBlock.getPrevSiblingKey(), blocks, function(block) {
      return block.merge({
        nextSibling: getNextValidSibling(block, blocks, originalBlockMap)
      });
    });
    transformBlock$2(endBlock.getNextSiblingKey(), blocks, function(block) {
      return block.merge({
        prevSibling: getPrevValidSibling(block, blocks, originalBlockMap)
      });
    });
    transformBlock$2(endBlock.getPrevSiblingKey(), blocks, function(block) {
      return block.merge({
        nextSibling: endBlock.getNextSiblingKey()
      });
    });
    getAncestorsKeys(endBlock.getKey(), originalBlockMap).forEach(function(parentKey) {
      transformBlock$2(parentKey, blocks, function(block) {
        return block.merge({
          children: block.getChildKeys().filter(function(key) {
            return blocks.get(key);
          }),
          nextSibling: getNextValidSibling(block, blocks, originalBlockMap),
          prevSibling: getPrevValidSibling(block, blocks, originalBlockMap)
        });
      });
    });
    getNextDelimitersBlockKeys(endBlock, originalBlockMap).forEach(function(delimiterKey) {
      return transformBlock$2(delimiterKey, blocks, function(block) {
        return block.merge({
          nextSibling: getNextValidSibling(block, blocks, originalBlockMap),
          prevSibling: getPrevValidSibling(block, blocks, originalBlockMap)
        });
      });
    });
    if (blockMap.get(startBlock.getKey()) == null && blockMap.get(endBlock.getKey()) != null && endBlock.getParentKey() === startBlock.getKey() && endBlock.getPrevSiblingKey() == null) {
      var prevSiblingKey = startBlock.getPrevSiblingKey();
      transformBlock$2(endBlock.getKey(), blocks, function(block) {
        return block.merge({
          prevSibling: prevSiblingKey
        });
      });
      transformBlock$2(prevSiblingKey, blocks, function(block) {
        return block.merge({
          nextSibling: endBlock.getKey()
        });
      });
      var prevSibling = prevSiblingKey ? blockMap.get(prevSiblingKey) : null;
      var newParentKey = prevSibling ? prevSibling.getParentKey() : null;
      startBlock.getChildKeys().forEach(function(childKey) {
        transformBlock$2(childKey, blocks, function(block) {
          return block.merge({
            parent: newParentKey
            // set to null if there is no parent
          });
        });
      });
      if (newParentKey != null) {
        var newParent = blockMap.get(newParentKey);
        transformBlock$2(newParentKey, blocks, function(block) {
          return block.merge({
            children: newParent.getChildKeys().concat(startBlock.getChildKeys())
          });
        });
      }
      transformBlock$2(startBlock.getChildKeys().find(function(key) {
        var block = blockMap.get(key);
        return block.getNextSiblingKey() === null;
      }), blocks, function(block) {
        return block.merge({
          nextSibling: startBlock.getNextSiblingKey()
        });
      });
    }
  });
};
var removeRangeFromContentState$1 = function removeRangeFromContentState(contentState, selectionState) {
  if (selectionState.isCollapsed()) {
    return contentState;
  }
  var blockMap = contentState.getBlockMap();
  var startKey = selectionState.getStartKey();
  var startOffset = selectionState.getStartOffset();
  var endKey = selectionState.getEndKey();
  var endOffset = selectionState.getEndOffset();
  var startBlock = blockMap.get(startKey);
  var endBlock = blockMap.get(endKey);
  var isExperimentalTreeBlock = startBlock instanceof ContentBlockNode$8;
  var parentAncestors = [];
  if (isExperimentalTreeBlock) {
    var endBlockchildrenKeys = endBlock.getChildKeys();
    var endBlockAncestors = getAncestorsKeys(endKey, blockMap);
    if (endBlock.getNextSiblingKey()) {
      parentAncestors = parentAncestors.concat(endBlockAncestors);
    }
    if (!endBlockchildrenKeys.isEmpty()) {
      parentAncestors = parentAncestors.concat(endBlockAncestors.concat([endKey]));
    }
    parentAncestors = parentAncestors.concat(getAncestorsKeys(getNextDelimiterBlockKey$1(endBlock, blockMap), blockMap));
  }
  var characterList;
  if (startBlock === endBlock) {
    characterList = removeFromList(startBlock.getCharacterList(), startOffset, endOffset);
  } else {
    characterList = startBlock.getCharacterList().slice(0, startOffset).concat(endBlock.getCharacterList().slice(endOffset));
  }
  var modifiedStart = startBlock.merge({
    text: startBlock.getText().slice(0, startOffset) + endBlock.getText().slice(endOffset),
    characterList
  });
  var shouldDeleteParent = isExperimentalTreeBlock && startOffset === 0 && endOffset === 0 && endBlock.getParentKey() === startKey && endBlock.getPrevSiblingKey() == null;
  var newBlocks = shouldDeleteParent ? Map$7([[startKey, null]]) : blockMap.toSeq().skipUntil(function(_2, k2) {
    return k2 === startKey;
  }).takeUntil(function(_2, k2) {
    return k2 === endKey;
  }).filter(function(_2, k2) {
    return parentAncestors.indexOf(k2) === -1;
  }).concat(Map$7([[endKey, null]])).map(function(_2, k2) {
    return k2 === startKey ? modifiedStart : null;
  });
  var updatedBlockMap = blockMap.merge(newBlocks).filter(function(block) {
    return !!block;
  });
  if (isExperimentalTreeBlock && startBlock !== endBlock) {
    updatedBlockMap = updateBlockMapLinks$2(updatedBlockMap, startBlock, endBlock, blockMap);
  }
  return contentState.merge({
    blockMap: updatedBlockMap,
    selectionBefore: selectionState,
    selectionAfter: selectionState.merge({
      anchorKey: startKey,
      anchorOffset: startOffset,
      focusKey: startKey,
      focusOffset: startOffset,
      isBackward: false
    })
  });
};
var removeFromList = function removeFromList2(targetList, startOffset, endOffset) {
  if (startOffset === 0) {
    while (startOffset < endOffset) {
      targetList = targetList.shift();
      startOffset++;
    }
  } else if (endOffset === targetList.count()) {
    while (endOffset > startOffset) {
      targetList = targetList.pop();
      endOffset--;
    }
  } else {
    var head = targetList.slice(0, startOffset);
    var tail = targetList.slice(endOffset);
    targetList = head.concat(tail).toList();
  }
  return targetList;
};
var removeRangeFromContentState_1 = removeRangeFromContentState$1;
var ContentBlockNode$7 = ContentBlockNode_1;
var generateRandomKey$8 = generateRandomKey_1;
var Immutable$f = immutableExports;
var invariant$o = invariant_1;
var modifyBlockForContentState$1 = modifyBlockForContentState_1;
var List$a = Immutable$f.List, Map$6 = Immutable$f.Map;
var transformBlock$1 = function transformBlock2(key, blockMap, func) {
  if (!key) {
    return;
  }
  var block = blockMap.get(key);
  if (!block) {
    return;
  }
  blockMap.set(key, func(block));
};
var updateBlockMapLinks$1 = function updateBlockMapLinks3(blockMap, originalBlock, belowBlock) {
  return blockMap.withMutations(function(blocks) {
    var originalBlockKey = originalBlock.getKey();
    var belowBlockKey = belowBlock.getKey();
    transformBlock$1(originalBlock.getParentKey(), blocks, function(block) {
      var parentChildrenList = block.getChildKeys();
      var insertionIndex = parentChildrenList.indexOf(originalBlockKey) + 1;
      var newChildrenArray = parentChildrenList.toArray();
      newChildrenArray.splice(insertionIndex, 0, belowBlockKey);
      return block.merge({
        children: List$a(newChildrenArray)
      });
    });
    transformBlock$1(originalBlock.getNextSiblingKey(), blocks, function(block) {
      return block.merge({
        prevSibling: belowBlockKey
      });
    });
    transformBlock$1(originalBlockKey, blocks, function(block) {
      return block.merge({
        nextSibling: belowBlockKey
      });
    });
    transformBlock$1(belowBlockKey, blocks, function(block) {
      return block.merge({
        prevSibling: originalBlockKey
      });
    });
  });
};
var splitBlockInContentState$1 = function splitBlockInContentState(contentState, selectionState) {
  !selectionState.isCollapsed() ? invariant$o(false) : void 0;
  var key = selectionState.getAnchorKey();
  var blockMap = contentState.getBlockMap();
  var blockToSplit = blockMap.get(key);
  var text = blockToSplit.getText();
  if (!text) {
    var blockType = blockToSplit.getType();
    if (blockType === "unordered-list-item" || blockType === "ordered-list-item") {
      return modifyBlockForContentState$1(contentState, selectionState, function(block) {
        return block.merge({
          type: "unstyled",
          depth: 0
        });
      });
    }
  }
  var offset = selectionState.getAnchorOffset();
  var chars = blockToSplit.getCharacterList();
  var keyBelow = generateRandomKey$8();
  var isExperimentalTreeBlock = blockToSplit instanceof ContentBlockNode$7;
  var blockAbove = blockToSplit.merge({
    text: text.slice(0, offset),
    characterList: chars.slice(0, offset)
  });
  var blockBelow = blockAbove.merge({
    key: keyBelow,
    text: text.slice(offset),
    characterList: chars.slice(offset),
    data: Map$6()
  });
  var blocksBefore = blockMap.toSeq().takeUntil(function(v2) {
    return v2 === blockToSplit;
  });
  var blocksAfter = blockMap.toSeq().skipUntil(function(v2) {
    return v2 === blockToSplit;
  }).rest();
  var newBlocks = blocksBefore.concat([[key, blockAbove], [keyBelow, blockBelow]], blocksAfter).toOrderedMap();
  if (isExperimentalTreeBlock) {
    !blockToSplit.getChildKeys().isEmpty() ? invariant$o(false) : void 0;
    newBlocks = updateBlockMapLinks$1(newBlocks, blockAbove, blockBelow);
  }
  return contentState.merge({
    blockMap: newBlocks,
    selectionBefore: selectionState,
    selectionAfter: selectionState.merge({
      anchorKey: keyBelow,
      anchorOffset: 0,
      focusKey: keyBelow,
      focusOffset: 0,
      isBackward: false
    })
  });
};
var splitBlockInContentState_1 = splitBlockInContentState$1;
var CharacterMetadata$6 = CharacterMetadata_1;
var ContentStateInlineStyle = ContentStateInlineStyle_1;
var applyEntityToContentState = applyEntityToContentState_1;
var getCharacterRemovalRange = getCharacterRemovalRange_1;
var getContentStateFragment$3 = getContentStateFragment_1;
var Immutable$e = immutableExports;
var insertFragmentIntoContentState2 = insertFragmentIntoContentState_1;
var insertTextIntoContentState = insertTextIntoContentState_1;
var invariant$n = invariant_1;
var modifyBlockForContentState = modifyBlockForContentState_1;
var removeEntitiesAtEdges = removeEntitiesAtEdges_1;
var removeRangeFromContentState2 = removeRangeFromContentState_1;
var splitBlockInContentState2 = splitBlockInContentState_1;
var OrderedSet$3 = Immutable$e.OrderedSet;
var DraftModifier$e = {
  replaceText: function replaceText(contentState, rangeToReplace, text, inlineStyle, entityKey) {
    var withoutEntities = removeEntitiesAtEdges(contentState, rangeToReplace);
    var withoutText = removeRangeFromContentState2(withoutEntities, rangeToReplace);
    var character = CharacterMetadata$6.create({
      style: inlineStyle || OrderedSet$3(),
      entity: entityKey || null
    });
    return insertTextIntoContentState(withoutText, withoutText.getSelectionAfter(), text, character);
  },
  insertText: function insertText(contentState, targetRange, text, inlineStyle, entityKey) {
    !targetRange.isCollapsed() ? invariant$n(false) : void 0;
    return DraftModifier$e.replaceText(contentState, targetRange, text, inlineStyle, entityKey);
  },
  moveText: function moveText(contentState, removalRange, targetRange) {
    var movedFragment = getContentStateFragment$3(contentState, removalRange);
    var afterRemoval = DraftModifier$e.removeRange(contentState, removalRange, "backward");
    return DraftModifier$e.replaceWithFragment(afterRemoval, targetRange, movedFragment);
  },
  replaceWithFragment: function replaceWithFragment(contentState, targetRange, fragment) {
    var mergeBlockData2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "REPLACE_WITH_NEW_DATA";
    var withoutEntities = removeEntitiesAtEdges(contentState, targetRange);
    var withoutText = removeRangeFromContentState2(withoutEntities, targetRange);
    return insertFragmentIntoContentState2(withoutText, withoutText.getSelectionAfter(), fragment, mergeBlockData2);
  },
  removeRange: function removeRange(contentState, rangeToRemove, removalDirection) {
    var startKey, endKey, startBlock, endBlock;
    if (rangeToRemove.getIsBackward()) {
      rangeToRemove = rangeToRemove.merge({
        anchorKey: rangeToRemove.getFocusKey(),
        anchorOffset: rangeToRemove.getFocusOffset(),
        focusKey: rangeToRemove.getAnchorKey(),
        focusOffset: rangeToRemove.getAnchorOffset(),
        isBackward: false
      });
    }
    startKey = rangeToRemove.getAnchorKey();
    endKey = rangeToRemove.getFocusKey();
    startBlock = contentState.getBlockForKey(startKey);
    endBlock = contentState.getBlockForKey(endKey);
    var startOffset = rangeToRemove.getStartOffset();
    var endOffset = rangeToRemove.getEndOffset();
    var startEntityKey = startBlock.getEntityAt(startOffset);
    var endEntityKey = endBlock.getEntityAt(endOffset - 1);
    if (startKey === endKey) {
      if (startEntityKey && startEntityKey === endEntityKey) {
        var adjustedRemovalRange = getCharacterRemovalRange(contentState.getEntityMap(), startBlock, endBlock, rangeToRemove, removalDirection);
        return removeRangeFromContentState2(contentState, adjustedRemovalRange);
      }
    }
    var withoutEntities = removeEntitiesAtEdges(contentState, rangeToRemove);
    return removeRangeFromContentState2(withoutEntities, rangeToRemove);
  },
  splitBlock: function splitBlock(contentState, selectionState) {
    var withoutEntities = removeEntitiesAtEdges(contentState, selectionState);
    var withoutText = removeRangeFromContentState2(withoutEntities, selectionState);
    return splitBlockInContentState2(withoutText, withoutText.getSelectionAfter());
  },
  applyInlineStyle: function applyInlineStyle(contentState, selectionState, inlineStyle) {
    return ContentStateInlineStyle.add(contentState, selectionState, inlineStyle);
  },
  removeInlineStyle: function removeInlineStyle(contentState, selectionState, inlineStyle) {
    return ContentStateInlineStyle.remove(contentState, selectionState, inlineStyle);
  },
  setBlockType: function setBlockType(contentState, selectionState, blockType) {
    return modifyBlockForContentState(contentState, selectionState, function(block) {
      return block.merge({
        type: blockType,
        depth: 0
      });
    });
  },
  setBlockData: function setBlockData(contentState, selectionState, blockData) {
    return modifyBlockForContentState(contentState, selectionState, function(block) {
      return block.merge({
        data: blockData
      });
    });
  },
  mergeBlockData: function mergeBlockData(contentState, selectionState, blockData) {
    return modifyBlockForContentState(contentState, selectionState, function(block) {
      return block.merge({
        data: block.getData().merge(blockData)
      });
    });
  },
  applyEntity: function applyEntity(contentState, selectionState, entityKey) {
    var withoutEntities = removeEntitiesAtEdges(contentState, selectionState);
    return applyEntityToContentState(withoutEntities, selectionState, entityKey);
  }
};
var DraftModifier_1 = DraftModifier$e;
function getOwnObjectValues$2(obj) {
  return Object.keys(obj).map(function(key) {
    return obj[key];
  });
}
var getOwnObjectValues_1 = getOwnObjectValues$2;
function _objectSpread$a(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty$h(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$h(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var findRangesImmutable$1 = findRangesImmutable_1;
var getOwnObjectValues$1 = getOwnObjectValues_1;
var Immutable$d = immutableExports;
var List$9 = Immutable$d.List, Repeat$3 = Immutable$d.Repeat, Record$4 = Immutable$d.Record;
var returnTrue = function returnTrue2() {
  return true;
};
var defaultLeafRange = {
  start: null,
  end: null
};
var LeafRange = Record$4(defaultLeafRange);
var defaultDecoratorRange = {
  start: null,
  end: null,
  decoratorKey: null,
  leaves: null
};
var DecoratorRange = Record$4(defaultDecoratorRange);
var BlockTree$1 = {
  /**
   * Generate a block tree for a given ContentBlock/decorator pair.
   */
  generate: function generate(contentState, block, decorator) {
    var textLength = block.getLength();
    if (!textLength) {
      return List$9.of(new DecoratorRange({
        start: 0,
        end: 0,
        decoratorKey: null,
        leaves: List$9.of(new LeafRange({
          start: 0,
          end: 0
        }))
      }));
    }
    var leafSets = [];
    var decorations = decorator ? decorator.getDecorations(block, contentState) : List$9(Repeat$3(null, textLength));
    var chars = block.getCharacterList();
    findRangesImmutable$1(decorations, areEqual$1, returnTrue, function(start, end) {
      leafSets.push(new DecoratorRange({
        start,
        end,
        decoratorKey: decorations.get(start),
        leaves: generateLeaves(chars.slice(start, end).toList(), start)
      }));
    });
    return List$9(leafSets);
  },
  fromJS: function fromJS(_ref) {
    var leaves = _ref.leaves, other = _objectWithoutPropertiesLoose(_ref, ["leaves"]);
    return new DecoratorRange(_objectSpread$a({}, other, {
      leaves: leaves != null ? List$9(Array.isArray(leaves) ? leaves : getOwnObjectValues$1(leaves)).map(function(leaf) {
        return LeafRange(leaf);
      }) : null
    }));
  }
};
function generateLeaves(characters, offset) {
  var leaves = [];
  var inlineStyles = characters.map(function(c2) {
    return c2.getStyle();
  }).toList();
  findRangesImmutable$1(inlineStyles, areEqual$1, returnTrue, function(start, end) {
    leaves.push(new LeafRange({
      start: start + offset,
      end: end + offset
    }));
  });
  return List$9(leaves);
}
function areEqual$1(a2, b2) {
  return a2 === b2;
}
var BlockTree_1 = BlockTree$1;
function _inheritsLoose$7(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var Immutable$c = immutableExports;
var Record$3 = Immutable$c.Record;
var DraftEntityInstanceRecord = Record$3({
  type: "TOKEN",
  mutability: "IMMUTABLE",
  data: Object
});
var DraftEntityInstance$2 = /* @__PURE__ */ function(_DraftEntityInstanceR) {
  _inheritsLoose$7(DraftEntityInstance2, _DraftEntityInstanceR);
  function DraftEntityInstance2() {
    return _DraftEntityInstanceR.apply(this, arguments) || this;
  }
  var _proto = DraftEntityInstance2.prototype;
  _proto.getType = function getType() {
    return this.get("type");
  };
  _proto.getMutability = function getMutability() {
    return this.get("mutability");
  };
  _proto.getData = function getData() {
    return this.get("data");
  };
  return DraftEntityInstance2;
}(DraftEntityInstanceRecord);
var DraftEntityInstance_1 = DraftEntityInstance$2;
function uuid$1() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c2) {
    var r2 = Math.random() * 16 | 0;
    var v2 = c2 == "x" ? r2 : r2 & 3 | 8;
    return v2.toString(16);
  });
}
var uuid_1 = uuid$1;
function _objectSpread$9(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty$g(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$g(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DraftEntityInstance$1 = DraftEntityInstance_1;
var Immutable$b = immutableExports;
var invariant$m = invariant_1;
var uuid = uuid_1;
var Map$5 = Immutable$b.Map;
var instances = Map$5();
var instanceKey = uuid();
function logWarning(oldMethodCall, newMethodCall) {
  console.warn("WARNING: " + oldMethodCall + ' will be deprecated soon!\nPlease use "' + newMethodCall + '" instead.');
}
var DraftEntity$4 = {
  /**
   * WARNING: This method will be deprecated soon!
   * Please use 'contentState.getLastCreatedEntityKey' instead.
   * ---
   * Get the random key string from whatever entity was last created.
   * We need this to support the new API, as part of transitioning to put Entity
   * storage in contentState.
   */
  getLastCreatedEntityKey: function getLastCreatedEntityKey() {
    logWarning("DraftEntity.getLastCreatedEntityKey", "contentState.getLastCreatedEntityKey");
    return DraftEntity$4.__getLastCreatedEntityKey();
  },
  /**
   * WARNING: This method will be deprecated soon!
   * Please use 'contentState.createEntity' instead.
   * ---
   * Create a DraftEntityInstance and store it for later retrieval.
   *
   * A random key string will be generated and returned. This key may
   * be used to track the entity's usage in a ContentBlock, and for
   * retrieving data about the entity at render time.
   */
  create: function create(type, mutability, data) {
    logWarning("DraftEntity.create", "contentState.createEntity");
    return DraftEntity$4.__create(type, mutability, data);
  },
  /**
   * WARNING: This method will be deprecated soon!
   * Please use 'contentState.addEntity' instead.
   * ---
   * Add an existing DraftEntityInstance to the DraftEntity map. This is
   * useful when restoring instances from the server.
   */
  add: function add2(instance) {
    logWarning("DraftEntity.add", "contentState.addEntity");
    return DraftEntity$4.__add(instance);
  },
  /**
   * WARNING: This method will be deprecated soon!
   * Please use 'contentState.getEntity' instead.
   * ---
   * Retrieve the entity corresponding to the supplied key string.
   */
  get: function get(key) {
    logWarning("DraftEntity.get", "contentState.getEntity");
    return DraftEntity$4.__get(key);
  },
  /**
   * Get all the entities in the content state.
   */
  __getAll: function __getAll() {
    return instances;
  },
  /**
   * Load the entity map with the given set of entities.
   */
  __loadWithEntities: function __loadWithEntities(entities) {
    instances = entities;
    instanceKey = uuid();
  },
  /**
   * WARNING: This method will be deprecated soon!
   * Please use 'contentState.mergeEntityData' instead.
   * ---
   * Entity instances are immutable. If you need to update the data for an
   * instance, this method will merge your data updates and return a new
   * instance.
   */
  mergeData: function mergeData(key, toMerge) {
    logWarning("DraftEntity.mergeData", "contentState.mergeEntityData");
    return DraftEntity$4.__mergeData(key, toMerge);
  },
  /**
   * WARNING: This method will be deprecated soon!
   * Please use 'contentState.replaceEntityData' instead.
   * ---
   * Completely replace the data for a given instance.
   */
  replaceData: function replaceData(key, newData) {
    logWarning("DraftEntity.replaceData", "contentState.replaceEntityData");
    return DraftEntity$4.__replaceData(key, newData);
  },
  // ***********************************WARNING******************************
  // --- the above public API will be deprecated in the next version of Draft!
  // The methods below this line are private - don't call them directly.
  /**
   * Get the random key string from whatever entity was last created.
   * We need this to support the new API, as part of transitioning to put Entity
   * storage in contentState.
   */
  __getLastCreatedEntityKey: function __getLastCreatedEntityKey() {
    return instanceKey;
  },
  /**
   * Create a DraftEntityInstance and store it for later retrieval.
   *
   * A random key string will be generated and returned. This key may
   * be used to track the entity's usage in a ContentBlock, and for
   * retrieving data about the entity at render time.
   */
  __create: function __create(type, mutability, data) {
    return DraftEntity$4.__add(new DraftEntityInstance$1({
      type,
      mutability,
      data: data || {}
    }));
  },
  /**
   * Add an existing DraftEntityInstance to the DraftEntity map. This is
   * useful when restoring instances from the server.
   */
  __add: function __add(instance) {
    instanceKey = uuid();
    instances = instances.set(instanceKey, instance);
    return instanceKey;
  },
  /**
   * Retrieve the entity corresponding to the supplied key string.
   */
  __get: function __get(key) {
    var instance = instances.get(key);
    !!!instance ? invariant$m(false) : void 0;
    return instance;
  },
  /**
   * Entity instances are immutable. If you need to update the data for an
   * instance, this method will merge your data updates and return a new
   * instance.
   */
  __mergeData: function __mergeData(key, toMerge) {
    var instance = DraftEntity$4.__get(key);
    var newData = _objectSpread$9({}, instance.getData(), toMerge);
    var newInstance = instance.set("data", newData);
    instances = instances.set(key, newInstance);
    return newInstance;
  },
  /**
   * Completely replace the data for a given instance.
   */
  __replaceData: function __replaceData(key, newData) {
    var instance = DraftEntity$4.__get(key);
    var newInstance = instance.set("data", newData);
    instances = instances.set(key, newInstance);
    return newInstance;
  }
};
var DraftEntity_1 = DraftEntity$4;
function _inheritsLoose$6(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var Immutable$a = immutableExports;
var Record$2 = Immutable$a.Record;
var defaultRecord$2 = {
  anchorKey: "",
  anchorOffset: 0,
  focusKey: "",
  focusOffset: 0,
  isBackward: false,
  hasFocus: false
};
var SelectionStateRecord = Record$2(defaultRecord$2);
var SelectionState$4 = /* @__PURE__ */ function(_SelectionStateRecord) {
  _inheritsLoose$6(SelectionState2, _SelectionStateRecord);
  function SelectionState2() {
    return _SelectionStateRecord.apply(this, arguments) || this;
  }
  var _proto = SelectionState2.prototype;
  _proto.serialize = function serialize() {
    return "Anchor: " + this.getAnchorKey() + ":" + this.getAnchorOffset() + ", Focus: " + this.getFocusKey() + ":" + this.getFocusOffset() + ", Is Backward: " + String(this.getIsBackward()) + ", Has Focus: " + String(this.getHasFocus());
  };
  _proto.getAnchorKey = function getAnchorKey() {
    return this.get("anchorKey");
  };
  _proto.getAnchorOffset = function getAnchorOffset() {
    return this.get("anchorOffset");
  };
  _proto.getFocusKey = function getFocusKey() {
    return this.get("focusKey");
  };
  _proto.getFocusOffset = function getFocusOffset() {
    return this.get("focusOffset");
  };
  _proto.getIsBackward = function getIsBackward() {
    return this.get("isBackward");
  };
  _proto.getHasFocus = function getHasFocus() {
    return this.get("hasFocus");
  };
  _proto.hasEdgeWithin = function hasEdgeWithin(blockKey, start, end) {
    var anchorKey = this.getAnchorKey();
    var focusKey = this.getFocusKey();
    if (anchorKey === focusKey && anchorKey === blockKey) {
      var selectionStart = this.getStartOffset();
      var selectionEnd = this.getEndOffset();
      return start <= selectionStart && selectionStart <= end || // selectionStart is between start and end, or
      start <= selectionEnd && selectionEnd <= end;
    }
    if (blockKey !== anchorKey && blockKey !== focusKey) {
      return false;
    }
    var offsetToCheck = blockKey === anchorKey ? this.getAnchorOffset() : this.getFocusOffset();
    return start <= offsetToCheck && end >= offsetToCheck;
  };
  _proto.isCollapsed = function isCollapsed() {
    return this.getAnchorKey() === this.getFocusKey() && this.getAnchorOffset() === this.getFocusOffset();
  };
  _proto.getStartKey = function getStartKey() {
    return this.getIsBackward() ? this.getFocusKey() : this.getAnchorKey();
  };
  _proto.getStartOffset = function getStartOffset() {
    return this.getIsBackward() ? this.getFocusOffset() : this.getAnchorOffset();
  };
  _proto.getEndKey = function getEndKey() {
    return this.getIsBackward() ? this.getAnchorKey() : this.getFocusKey();
  };
  _proto.getEndOffset = function getEndOffset() {
    return this.getIsBackward() ? this.getAnchorOffset() : this.getFocusOffset();
  };
  SelectionState2.createEmpty = function createEmpty(key) {
    return new SelectionState2({
      anchorKey: key,
      anchorOffset: 0,
      focusKey: key,
      focusOffset: 0,
      isBackward: false,
      hasFocus: false
    });
  };
  return SelectionState2;
}(SelectionStateRecord);
var SelectionState_1 = SelectionState$4;
var gkx$8 = function(name) {
  if (typeof window !== "undefined" && window.__DRAFT_GKX) {
    return !!window.__DRAFT_GKX[name];
  }
  return false;
};
var REGEX_BLOCK_DELIMITER = new RegExp("\r", "g");
function sanitizeDraftText$2(input) {
  return input.replace(REGEX_BLOCK_DELIMITER, "");
}
var sanitizeDraftText_1 = sanitizeDraftText$2;
function _objectSpread$8(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty$f(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$f(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inheritsLoose$5(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var BlockMapBuilder$3 = BlockMapBuilder_1;
var CharacterMetadata$5 = CharacterMetadata_1;
var ContentBlock$6 = ContentBlock_1;
var ContentBlockNode$6 = ContentBlockNode_1;
var DraftEntity$3 = DraftEntity_1;
var SelectionState$3 = SelectionState_1;
var generateRandomKey$7 = generateRandomKey_1;
var getOwnObjectValues = getOwnObjectValues_1;
var gkx$7 = gkx$8;
var Immutable$9 = immutableExports;
var sanitizeDraftText$1 = sanitizeDraftText_1;
var List$8 = Immutable$9.List, Record$1 = Immutable$9.Record, Repeat$2 = Immutable$9.Repeat, ImmutableMap = Immutable$9.Map, OrderedMap$4 = Immutable$9.OrderedMap;
var defaultRecord$1 = {
  entityMap: null,
  blockMap: null,
  selectionBefore: null,
  selectionAfter: null
};
var ContentStateRecord = Record$1(defaultRecord$1);
var ContentBlockNodeRecord = gkx$7("draft_tree_data_support") ? ContentBlockNode$6 : ContentBlock$6;
var ContentState$3 = /* @__PURE__ */ function(_ContentStateRecord) {
  _inheritsLoose$5(ContentState2, _ContentStateRecord);
  function ContentState2() {
    return _ContentStateRecord.apply(this, arguments) || this;
  }
  var _proto = ContentState2.prototype;
  _proto.getEntityMap = function getEntityMap() {
    return DraftEntity$3;
  };
  _proto.getBlockMap = function getBlockMap() {
    return this.get("blockMap");
  };
  _proto.getSelectionBefore = function getSelectionBefore() {
    return this.get("selectionBefore");
  };
  _proto.getSelectionAfter = function getSelectionAfter() {
    return this.get("selectionAfter");
  };
  _proto.getBlockForKey = function getBlockForKey(key) {
    var block = this.getBlockMap().get(key);
    return block;
  };
  _proto.getKeyBefore = function getKeyBefore(key) {
    return this.getBlockMap().reverse().keySeq().skipUntil(function(v2) {
      return v2 === key;
    }).skip(1).first();
  };
  _proto.getKeyAfter = function getKeyAfter(key) {
    return this.getBlockMap().keySeq().skipUntil(function(v2) {
      return v2 === key;
    }).skip(1).first();
  };
  _proto.getBlockAfter = function getBlockAfter(key) {
    return this.getBlockMap().skipUntil(function(_2, k2) {
      return k2 === key;
    }).skip(1).first();
  };
  _proto.getBlockBefore = function getBlockBefore(key) {
    return this.getBlockMap().reverse().skipUntil(function(_2, k2) {
      return k2 === key;
    }).skip(1).first();
  };
  _proto.getBlocksAsArray = function getBlocksAsArray() {
    return this.getBlockMap().toArray();
  };
  _proto.getFirstBlock = function getFirstBlock() {
    return this.getBlockMap().first();
  };
  _proto.getLastBlock = function getLastBlock() {
    return this.getBlockMap().last();
  };
  _proto.getPlainText = function getPlainText(delimiter) {
    return this.getBlockMap().map(function(block) {
      return block ? block.getText() : "";
    }).join(delimiter || "\n");
  };
  _proto.getLastCreatedEntityKey = function getLastCreatedEntityKey2() {
    return DraftEntity$3.__getLastCreatedEntityKey();
  };
  _proto.hasText = function hasText() {
    var blockMap = this.getBlockMap();
    return blockMap.size > 1 || // make sure that there are no zero width space chars
    escape(blockMap.first().getText()).replace(/%u200B/g, "").length > 0;
  };
  _proto.createEntity = function createEntity(type, mutability, data) {
    DraftEntity$3.__create(type, mutability, data);
    return this;
  };
  _proto.mergeEntityData = function mergeEntityData(key, toMerge) {
    DraftEntity$3.__mergeData(key, toMerge);
    return this;
  };
  _proto.replaceEntityData = function replaceEntityData(key, newData) {
    DraftEntity$3.__replaceData(key, newData);
    return this;
  };
  _proto.addEntity = function addEntity(instance) {
    DraftEntity$3.__add(instance);
    return this;
  };
  _proto.getEntity = function getEntity(key) {
    return DraftEntity$3.__get(key);
  };
  _proto.getAllEntities = function getAllEntities() {
    return DraftEntity$3.__getAll();
  };
  _proto.loadWithEntities = function loadWithEntities(entities) {
    return DraftEntity$3.__loadWithEntities(entities);
  };
  ContentState2.createFromBlockArray = function createFromBlockArray(blocks, entityMap) {
    var theBlocks = Array.isArray(blocks) ? blocks : blocks.contentBlocks;
    var blockMap = BlockMapBuilder$3.createFromArray(theBlocks);
    var selectionState = blockMap.isEmpty() ? new SelectionState$3() : SelectionState$3.createEmpty(blockMap.first().getKey());
    return new ContentState2({
      blockMap,
      entityMap: entityMap || DraftEntity$3,
      selectionBefore: selectionState,
      selectionAfter: selectionState
    });
  };
  ContentState2.createFromText = function createFromText(text) {
    var delimiter = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /\r\n?|\n/g;
    var strings = text.split(delimiter);
    var blocks = strings.map(function(block) {
      block = sanitizeDraftText$1(block);
      return new ContentBlockNodeRecord({
        key: generateRandomKey$7(),
        text: block,
        type: "unstyled",
        characterList: List$8(Repeat$2(CharacterMetadata$5.EMPTY, block.length))
      });
    });
    return ContentState2.createFromBlockArray(blocks);
  };
  ContentState2.fromJS = function fromJS2(state) {
    return new ContentState2(_objectSpread$8({}, state, {
      blockMap: OrderedMap$4(state.blockMap).map(ContentState2.createContentBlockFromJS),
      selectionBefore: new SelectionState$3(state.selectionBefore),
      selectionAfter: new SelectionState$3(state.selectionAfter)
    }));
  };
  ContentState2.createContentBlockFromJS = function createContentBlockFromJS(block) {
    var characterList = block.characterList;
    return new ContentBlockNodeRecord(_objectSpread$8({}, block, {
      data: ImmutableMap(block.data),
      characterList: characterList != null ? List$8((Array.isArray(characterList) ? characterList : getOwnObjectValues(characterList)).map(function(c2) {
        return CharacterMetadata$5.fromJS(c2);
      })) : void 0
    }));
  };
  return ContentState2;
}(ContentStateRecord);
var ContentState_1 = ContentState$3;
var invariant$l = invariant_1;
var NEUTRAL = "NEUTRAL";
var LTR = "LTR";
var RTL = "RTL";
var globalDir = null;
function isStrong(dir) {
  return dir === LTR || dir === RTL;
}
function getHTMLDir(dir) {
  !isStrong(dir) ? invariant$l(false) : void 0;
  return dir === LTR ? "ltr" : "rtl";
}
function getHTMLDirIfDifferent(dir, otherDir) {
  !isStrong(dir) ? invariant$l(false) : void 0;
  !isStrong(otherDir) ? invariant$l(false) : void 0;
  return dir === otherDir ? null : getHTMLDir(dir);
}
function setGlobalDir(dir) {
  globalDir = dir;
}
function initGlobalDir() {
  setGlobalDir(LTR);
}
function getGlobalDir() {
  if (!globalDir) {
    this.initGlobalDir();
  }
  !globalDir ? invariant$l(false) : void 0;
  return globalDir;
}
var UnicodeBidiDirection$3 = {
  // Values
  NEUTRAL,
  LTR,
  RTL,
  // Helpers
  isStrong,
  getHTMLDir,
  getHTMLDirIfDifferent,
  // Global Direction
  setGlobalDir,
  initGlobalDir,
  getGlobalDir
};
var UnicodeBidiDirection_1 = UnicodeBidiDirection$3;
var UnicodeBidiDirection$2 = UnicodeBidiDirection_1;
var invariant$k = invariant_1;
var RANGE_BY_BIDI_TYPE = {
  L: "A-Za-zªµºÀ-ÖØ-öø-ƺƻƼ-ƿǀ-ǃǄ-ʓʔʕ-ʯʰ-ʸʻ-ˁː-ˑˠ-ˤˮͰ-ͳͶ-ͷͺͻ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ҂Ҋ-ԯԱ-Ֆՙ՚-՟ա-և։ःऄ-हऻऽा-ीॉ-ौॎ-ॏॐक़-ॡ।-॥०-९॰ॱॲ-ঀং-ঃঅ-ঌএ-ঐও-নপ-রলশ-হঽা-ীে-ৈো-ৌৎৗড়-ঢ়য়-ৡ০-৯ৰ-ৱ৴-৹৺ਃਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਾ-ੀਖ਼-ੜਫ਼੦-੯ੲ-ੴઃઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽા-ીૉો-ૌૐૠ-ૡ૦-૯૰ଂ-ଃଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽାୀେ-ୈୋ-ୌୗଡ଼-ଢ଼ୟ-ୡ୦-୯୰ୱ୲-୷ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹா-ிு-ூெ-ைொ-ௌௐௗ௦-௯௰-௲ఁ-ఃఅ-ఌఎ-ఐఒ-నప-హఽు-ౄౘ-ౙౠ-ౡ౦-౯౿ಂ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽಾಿೀ-ೄೆೇ-ೈೊ-ೋೕ-ೖೞೠ-ೡ೦-೯ೱ-ೲം-ഃഅ-ഌഎ-ഐഒ-ഺഽാ-ീെ-ൈൊ-ൌൎൗൠ-ൡ൦-൯൰-൵൹ൺ-ൿං-ඃඅ-ඖක-නඳ-රලව-ෆා-ෑෘ-ෟ෦-෯ෲ-ෳ෴ก-ะา-ำเ-ๅๆ๏๐-๙๚-๛ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆ໐-໙ໜ-ໟༀ༁-༃༄-༒༓༔༕-༗༚-༟༠-༩༪-༳༴༶༸༾-༿ཀ-ཇཉ-ཬཿ྅ྈ-ྌ྾-࿅࿇-࿌࿎-࿏࿐-࿔࿕-࿘࿙-࿚က-ဪါ-ာေးျ-ြဿ၀-၉၊-၏ၐ-ၕၖ-ၗၚ-ၝၡၢ-ၤၥ-ၦၧ-ၭၮ-ၰၵ-ႁႃ-ႄႇ-ႌႎႏ႐-႙ႚ-ႜ႞-႟Ⴀ-ჅჇჍა-ჺ჻ჼჽ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፠-፨፩-፼ᎀ-ᎏᎠ-Ᏼᐁ-ᙬ᙭-᙮ᙯ-ᙿᚁ-ᚚᚠ-ᛪ᛫-᛭ᛮ-ᛰᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱ᜵-᜶ᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳាើ-ៅះ-ៈ។-៖ៗ៘-៚ៜ០-៩᠐-᠙ᠠ-ᡂᡃᡄ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᤣ-ᤦᤩ-ᤫᤰ-ᤱᤳ-ᤸ᥆-᥏ᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧀᧁ-ᧇᧈ-ᧉ᧐-᧙᧚ᨀ-ᨖᨙ-ᨚ᨞-᨟ᨠ-ᩔᩕᩗᩡᩣ-ᩤᩭ-ᩲ᪀-᪉᪐-᪙᪠-᪦ᪧ᪨-᪭ᬄᬅ-ᬳᬵᬻᬽ-ᭁᭃ-᭄ᭅ-ᭋ᭐-᭙᭚-᭠᭡-᭪᭴-᭼ᮂᮃ-ᮠᮡᮦ-ᮧ᮪ᮮ-ᮯ᮰-᮹ᮺ-ᯥᯧᯪ-ᯬᯮ᯲-᯳᯼-᯿ᰀ-ᰣᰤ-ᰫᰴ-ᰵ᰻-᰿᱀-᱉ᱍ-ᱏ᱐-᱙ᱚ-ᱷᱸ-ᱽ᱾-᱿᳀-᳇᳓᳡ᳩ-ᳬᳮ-ᳱᳲ-ᳳᳵ-ᳶᴀ-ᴫᴬ-ᵪᵫ-ᵷᵸᵹ-ᶚᶛ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‎ⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℴℵ-ℸℹℼ-ℿⅅ-ⅉⅎ⅏Ⅰ-ↂↃ-ↄↅ-ↈ⌶-⍺⎕⒜-ⓩ⚬⠀-⣿Ⰰ-Ⱞⰰ-ⱞⱠ-ⱻⱼ-ⱽⱾ-ⳤⳫ-ⳮⳲ-ⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵰ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々〆〇〡-〩〮-〯〱-〵〸-〺〻〼ぁ-ゖゝ-ゞゟァ-ヺー-ヾヿㄅ-ㄭㄱ-ㆎ㆐-㆑㆒-㆕㆖-㆟ㆠ-ㆺㇰ-ㇿ㈀-㈜㈠-㈩㈪-㉇㉈-㉏㉠-㉻㉿㊀-㊉㊊-㊰㋀-㋋㋐-㋾㌀-㍶㍻-㏝㏠-㏾㐀-䶵一-鿌ꀀ-ꀔꀕꀖ-ꒌꓐ-ꓷꓸ-ꓽ꓾-꓿ꔀ-ꘋꘌꘐ-ꘟ꘠-꘩ꘪ-ꘫꙀ-ꙭꙮꚀ-ꚛꚜ-ꚝꚠ-ꛥꛦ-ꛯ꛲-꛷Ꜣ-ꝯꝰꝱ-ꞇ꞉-꞊Ꞌ-ꞎꞐ-ꞭꞰ-Ʇꟷꟸ-ꟹꟺꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꠣ-ꠤꠧ꠰-꠵꠶-꠷ꡀ-ꡳꢀ-ꢁꢂ-ꢳꢴ-ꣃ꣎-꣏꣐-꣙ꣲ-ꣷ꣸-꣺ꣻ꤀-꤉ꤊ-ꤥ꤮-꤯ꤰ-ꥆꥒ-꥓꥟ꥠ-ꥼꦃꦄ-ꦲꦴ-ꦵꦺ-ꦻꦽ-꧀꧁-꧍ꧏ꧐-꧙꧞-꧟ꧠ-ꧤꧦꧧ-ꧯ꧰-꧹ꧺ-ꧾꨀ-ꨨꨯ-ꨰꨳ-ꨴꩀ-ꩂꩄ-ꩋꩍ꩐-꩙꩜-꩟ꩠ-ꩯꩰꩱ-ꩶ꩷-꩹ꩺꩻꩽꩾ-ꪯꪱꪵ-ꪶꪹ-ꪽꫀꫂꫛ-ꫜꫝ꫞-꫟ꫠ-ꫪꫫꫮ-ꫯ꫰-꫱ꫲꫳ-ꫴꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚ꭛ꭜ-ꭟꭤ-ꭥꯀ-ꯢꯣ-ꯤꯦ-ꯧꯩ-ꯪ꯫꯬꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ-豈-舘並-龎ﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚｦ-ｯｰｱ-ﾝﾞ-ﾟﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
  R: "֐־׀׃׆׈-׏א-ת׫-ׯװ-ײ׳-״׵-׿߀-߉ߊ-ߪߴ-ߵߺ߻-߿ࠀ-ࠕࠚࠤࠨ࠮-࠯࠰-࠾࠿ࡀ-ࡘ࡜-࡝࡞࡟-࢟‏יִײַ-ﬨשׁ-זּ﬷טּ-לּ﬽מּ﬿נּ-סּ﭂ףּ-פּ﭅צּ-ﭏ",
  AL: "؈؋؍؛؜؝؞-؟ؠ-ؿـف-ي٭ٮ-ٯٱ-ۓ۔ەۥ-ۦۮ-ۯۺ-ۼ۽-۾ۿ܀-܍܎܏ܐܒ-ܯ݋-݌ݍ-ޥޱ޲-޿ࢠ-ࢲࢳ-ࣣﭐ-ﮱ﮲-﯁﯂-﯒ﯓ-ﴽ﵀-﵏ﵐ-ﶏ﶐-﶑ﶒ-ﷇ﷈-﷏ﷰ-ﷻ﷼﷾-﷿ﹰ-ﹴ﹵ﹶ-ﻼ﻽-﻾"
};
var REGEX_STRONG = new RegExp("[" + RANGE_BY_BIDI_TYPE.L + RANGE_BY_BIDI_TYPE.R + RANGE_BY_BIDI_TYPE.AL + "]");
var REGEX_RTL = new RegExp("[" + RANGE_BY_BIDI_TYPE.R + RANGE_BY_BIDI_TYPE.AL + "]");
function firstStrongChar(str) {
  var match = REGEX_STRONG.exec(str);
  return match == null ? null : match[0];
}
function firstStrongCharDir(str) {
  var strongChar = firstStrongChar(str);
  if (strongChar == null) {
    return UnicodeBidiDirection$2.NEUTRAL;
  }
  return REGEX_RTL.exec(strongChar) ? UnicodeBidiDirection$2.RTL : UnicodeBidiDirection$2.LTR;
}
function resolveBlockDir(str, fallback) {
  fallback = fallback || UnicodeBidiDirection$2.NEUTRAL;
  if (!str.length) {
    return fallback;
  }
  var blockDir = firstStrongCharDir(str);
  return blockDir === UnicodeBidiDirection$2.NEUTRAL ? fallback : blockDir;
}
function getDirection(str, strongFallback) {
  if (!strongFallback) {
    strongFallback = UnicodeBidiDirection$2.getGlobalDir();
  }
  !UnicodeBidiDirection$2.isStrong(strongFallback) ? invariant$k(false) : void 0;
  return resolveBlockDir(str, strongFallback);
}
function isDirectionLTR(str, strongFallback) {
  return getDirection(str, strongFallback) === UnicodeBidiDirection$2.LTR;
}
function isDirectionRTL(str, strongFallback) {
  return getDirection(str, strongFallback) === UnicodeBidiDirection$2.RTL;
}
var UnicodeBidi$2 = {
  firstStrongChar,
  firstStrongCharDir,
  resolveBlockDir,
  getDirection,
  isDirectionLTR,
  isDirectionRTL
};
var UnicodeBidi_1 = UnicodeBidi$2;
function _defineProperty$e(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var UnicodeBidi$1 = UnicodeBidi_1;
var UnicodeBidiDirection$1 = UnicodeBidiDirection_1;
var invariant$j = invariant_1;
var UnicodeBidiService$1 = /* @__PURE__ */ function() {
  function UnicodeBidiService2(defaultDir) {
    _defineProperty$e(this, "_defaultDir", void 0);
    _defineProperty$e(this, "_lastDir", void 0);
    if (!defaultDir) {
      defaultDir = UnicodeBidiDirection$1.getGlobalDir();
    } else {
      !UnicodeBidiDirection$1.isStrong(defaultDir) ? invariant$j(false) : void 0;
    }
    this._defaultDir = defaultDir;
    this.reset();
  }
  var _proto = UnicodeBidiService2.prototype;
  _proto.reset = function reset() {
    this._lastDir = this._defaultDir;
  };
  _proto.getDirection = function getDirection2(str) {
    this._lastDir = UnicodeBidi$1.getDirection(str, this._lastDir);
    return this._lastDir;
  };
  return UnicodeBidiService2;
}();
var UnicodeBidiService_1 = UnicodeBidiService$1;
var nullthrows$c = function nullthrows(x2) {
  if (x2 != null) {
    return x2;
  }
  throw new Error("Got unexpected null or undefined");
};
var nullthrows_1 = nullthrows$c;
var UnicodeBidiService = UnicodeBidiService_1;
var Immutable$8 = immutableExports;
var nullthrows$b = nullthrows_1;
var OrderedMap$3 = Immutable$8.OrderedMap;
var bidiService;
var EditorBidiService$1 = {
  getDirectionMap: function getDirectionMap(content, prevBidiMap) {
    if (!bidiService) {
      bidiService = new UnicodeBidiService();
    } else {
      bidiService.reset();
    }
    var blockMap = content.getBlockMap();
    var nextBidi = blockMap.valueSeq().map(function(block) {
      return nullthrows$b(bidiService).getDirection(block.getText());
    });
    var bidiMap = OrderedMap$3(blockMap.keySeq().zip(nextBidi));
    if (prevBidiMap != null && Immutable$8.is(prevBidiMap, bidiMap)) {
      return prevBidiMap;
    }
    return bidiMap;
  }
};
var EditorBidiService_1 = EditorBidiService$1;
function _objectSpread$7(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty$d(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$d(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var BlockTree = BlockTree_1;
var ContentState$2 = ContentState_1;
var EditorBidiService = EditorBidiService_1;
var SelectionState$2 = SelectionState_1;
var Immutable$7 = immutableExports;
var OrderedSet$2 = Immutable$7.OrderedSet, Record = Immutable$7.Record, Stack = Immutable$7.Stack, OrderedMap$2 = Immutable$7.OrderedMap, List$7 = Immutable$7.List;
var defaultRecord = {
  allowUndo: true,
  currentContent: null,
  decorator: null,
  directionMap: null,
  forceSelection: false,
  inCompositionMode: false,
  inlineStyleOverride: null,
  lastChangeType: null,
  nativelyRenderedContent: null,
  redoStack: Stack(),
  selection: null,
  treeMap: null,
  undoStack: Stack()
};
var EditorStateRecord = Record(defaultRecord);
var EditorState$q = /* @__PURE__ */ function() {
  EditorState2.createEmpty = function createEmpty(decorator) {
    return this.createWithText("", decorator);
  };
  EditorState2.createWithText = function createWithText(text, decorator) {
    return EditorState2.createWithContent(ContentState$2.createFromText(text), decorator);
  };
  EditorState2.createWithContent = function createWithContent(contentState, decorator) {
    if (contentState.getBlockMap().count() === 0) {
      return EditorState2.createEmpty(decorator);
    }
    var firstKey = contentState.getBlockMap().first().getKey();
    return EditorState2.create({
      currentContent: contentState,
      undoStack: Stack(),
      redoStack: Stack(),
      decorator: decorator || null,
      selection: SelectionState$2.createEmpty(firstKey)
    });
  };
  EditorState2.create = function create2(config) {
    var currentContent = config.currentContent, decorator = config.decorator;
    var recordConfig = _objectSpread$7({}, config, {
      treeMap: generateNewTreeMap(currentContent, decorator),
      directionMap: EditorBidiService.getDirectionMap(currentContent)
    });
    return new EditorState2(new EditorStateRecord(recordConfig));
  };
  EditorState2.fromJS = function fromJS2(config) {
    return new EditorState2(new EditorStateRecord(_objectSpread$7({}, config, {
      directionMap: config.directionMap != null ? OrderedMap$2(config.directionMap) : config.directionMap,
      inlineStyleOverride: config.inlineStyleOverride != null ? OrderedSet$2(config.inlineStyleOverride) : config.inlineStyleOverride,
      nativelyRenderedContent: config.nativelyRenderedContent != null ? ContentState$2.fromJS(config.nativelyRenderedContent) : config.nativelyRenderedContent,
      redoStack: config.redoStack != null ? Stack(config.redoStack.map(function(v2) {
        return ContentState$2.fromJS(v2);
      })) : config.redoStack,
      selection: config.selection != null ? new SelectionState$2(config.selection) : config.selection,
      treeMap: config.treeMap != null ? OrderedMap$2(config.treeMap).map(function(v2) {
        return List$7(v2).map(function(v3) {
          return BlockTree.fromJS(v3);
        });
      }) : config.treeMap,
      undoStack: config.undoStack != null ? Stack(config.undoStack.map(function(v2) {
        return ContentState$2.fromJS(v2);
      })) : config.undoStack,
      currentContent: ContentState$2.fromJS(config.currentContent)
    })));
  };
  EditorState2.set = function set(editorState, put) {
    var map = editorState.getImmutable().withMutations(function(state) {
      var existingDecorator = state.get("decorator");
      var decorator = existingDecorator;
      if (put.decorator === null) {
        decorator = null;
      } else if (put.decorator) {
        decorator = put.decorator;
      }
      var newContent = put.currentContent || editorState.getCurrentContent();
      if (decorator !== existingDecorator) {
        var treeMap = state.get("treeMap");
        var newTreeMap;
        if (decorator && existingDecorator) {
          newTreeMap = regenerateTreeForNewDecorator(newContent, newContent.getBlockMap(), treeMap, decorator, existingDecorator);
        } else {
          newTreeMap = generateNewTreeMap(newContent, decorator);
        }
        state.merge({
          decorator,
          treeMap: newTreeMap,
          nativelyRenderedContent: null
        });
        return;
      }
      var existingContent = editorState.getCurrentContent();
      if (newContent !== existingContent) {
        state.set("treeMap", regenerateTreeForNewBlocks(editorState, newContent.getBlockMap(), newContent.getEntityMap(), decorator));
      }
      state.merge(put);
    });
    return new EditorState2(map);
  };
  var _proto = EditorState2.prototype;
  _proto.toJS = function toJS() {
    return this.getImmutable().toJS();
  };
  _proto.getAllowUndo = function getAllowUndo() {
    return this.getImmutable().get("allowUndo");
  };
  _proto.getCurrentContent = function getCurrentContent() {
    return this.getImmutable().get("currentContent");
  };
  _proto.getUndoStack = function getUndoStack() {
    return this.getImmutable().get("undoStack");
  };
  _proto.getRedoStack = function getRedoStack() {
    return this.getImmutable().get("redoStack");
  };
  _proto.getSelection = function getSelection() {
    return this.getImmutable().get("selection");
  };
  _proto.getDecorator = function getDecorator() {
    return this.getImmutable().get("decorator");
  };
  _proto.isInCompositionMode = function isInCompositionMode() {
    return this.getImmutable().get("inCompositionMode");
  };
  _proto.mustForceSelection = function mustForceSelection() {
    return this.getImmutable().get("forceSelection");
  };
  _proto.getNativelyRenderedContent = function getNativelyRenderedContent() {
    return this.getImmutable().get("nativelyRenderedContent");
  };
  _proto.getLastChangeType = function getLastChangeType() {
    return this.getImmutable().get("lastChangeType");
  };
  _proto.getInlineStyleOverride = function getInlineStyleOverride() {
    return this.getImmutable().get("inlineStyleOverride");
  };
  EditorState2.setInlineStyleOverride = function setInlineStyleOverride(editorState, inlineStyleOverride) {
    return EditorState2.set(editorState, {
      inlineStyleOverride
    });
  };
  _proto.getCurrentInlineStyle = function getCurrentInlineStyle() {
    var override = this.getInlineStyleOverride();
    if (override != null) {
      return override;
    }
    var content = this.getCurrentContent();
    var selection = this.getSelection();
    if (selection.isCollapsed()) {
      return getInlineStyleForCollapsedSelection(content, selection);
    }
    return getInlineStyleForNonCollapsedSelection(content, selection);
  };
  _proto.getBlockTree = function getBlockTree(blockKey) {
    return this.getImmutable().getIn(["treeMap", blockKey]);
  };
  _proto.isSelectionAtStartOfContent = function isSelectionAtStartOfContent() {
    var firstKey = this.getCurrentContent().getBlockMap().first().getKey();
    return this.getSelection().hasEdgeWithin(firstKey, 0, 0);
  };
  _proto.isSelectionAtEndOfContent = function isSelectionAtEndOfContent() {
    var content = this.getCurrentContent();
    var blockMap = content.getBlockMap();
    var last = blockMap.last();
    var end = last.getLength();
    return this.getSelection().hasEdgeWithin(last.getKey(), end, end);
  };
  _proto.getDirectionMap = function getDirectionMap2() {
    return this.getImmutable().get("directionMap");
  };
  EditorState2.acceptSelection = function acceptSelection(editorState, selection) {
    return updateSelection(editorState, selection, false);
  };
  EditorState2.forceSelection = function forceSelection(editorState, selection) {
    if (!selection.getHasFocus()) {
      selection = selection.set("hasFocus", true);
    }
    return updateSelection(editorState, selection, true);
  };
  EditorState2.moveSelectionToEnd = function moveSelectionToEnd(editorState) {
    var content = editorState.getCurrentContent();
    var lastBlock = content.getLastBlock();
    var lastKey = lastBlock.getKey();
    var length = lastBlock.getLength();
    return EditorState2.acceptSelection(editorState, new SelectionState$2({
      anchorKey: lastKey,
      anchorOffset: length,
      focusKey: lastKey,
      focusOffset: length,
      isBackward: false
    }));
  };
  EditorState2.moveFocusToEnd = function moveFocusToEnd(editorState) {
    var afterSelectionMove = EditorState2.moveSelectionToEnd(editorState);
    return EditorState2.forceSelection(afterSelectionMove, afterSelectionMove.getSelection());
  };
  EditorState2.push = function push(editorState, contentState, changeType) {
    var forceSelection = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
    if (editorState.getCurrentContent() === contentState) {
      return editorState;
    }
    var directionMap = EditorBidiService.getDirectionMap(contentState, editorState.getDirectionMap());
    if (!editorState.getAllowUndo()) {
      return EditorState2.set(editorState, {
        currentContent: contentState,
        directionMap,
        lastChangeType: changeType,
        selection: contentState.getSelectionAfter(),
        forceSelection,
        inlineStyleOverride: null
      });
    }
    var selection = editorState.getSelection();
    var currentContent = editorState.getCurrentContent();
    var undoStack = editorState.getUndoStack();
    var newContent = contentState;
    if (selection !== currentContent.getSelectionAfter() || mustBecomeBoundary(editorState, changeType)) {
      undoStack = undoStack.push(currentContent);
      newContent = newContent.set("selectionBefore", selection);
    } else if (changeType === "insert-characters" || changeType === "backspace-character" || changeType === "delete-character") {
      newContent = newContent.set("selectionBefore", currentContent.getSelectionBefore());
    }
    var inlineStyleOverride = editorState.getInlineStyleOverride();
    var overrideChangeTypes = ["adjust-depth", "change-block-type", "split-block"];
    if (overrideChangeTypes.indexOf(changeType) === -1) {
      inlineStyleOverride = null;
    }
    var editorStateChanges = {
      currentContent: newContent,
      directionMap,
      undoStack,
      redoStack: Stack(),
      lastChangeType: changeType,
      selection: contentState.getSelectionAfter(),
      forceSelection,
      inlineStyleOverride
    };
    return EditorState2.set(editorState, editorStateChanges);
  };
  EditorState2.undo = function undo(editorState) {
    if (!editorState.getAllowUndo()) {
      return editorState;
    }
    var undoStack = editorState.getUndoStack();
    var newCurrentContent = undoStack.peek();
    if (!newCurrentContent) {
      return editorState;
    }
    var currentContent = editorState.getCurrentContent();
    var directionMap = EditorBidiService.getDirectionMap(newCurrentContent, editorState.getDirectionMap());
    return EditorState2.set(editorState, {
      currentContent: newCurrentContent,
      directionMap,
      undoStack: undoStack.shift(),
      redoStack: editorState.getRedoStack().push(currentContent),
      forceSelection: true,
      inlineStyleOverride: null,
      lastChangeType: "undo",
      nativelyRenderedContent: null,
      selection: currentContent.getSelectionBefore()
    });
  };
  EditorState2.redo = function redo(editorState) {
    if (!editorState.getAllowUndo()) {
      return editorState;
    }
    var redoStack = editorState.getRedoStack();
    var newCurrentContent = redoStack.peek();
    if (!newCurrentContent) {
      return editorState;
    }
    var currentContent = editorState.getCurrentContent();
    var directionMap = EditorBidiService.getDirectionMap(newCurrentContent, editorState.getDirectionMap());
    return EditorState2.set(editorState, {
      currentContent: newCurrentContent,
      directionMap,
      undoStack: editorState.getUndoStack().push(currentContent),
      redoStack: redoStack.shift(),
      forceSelection: true,
      inlineStyleOverride: null,
      lastChangeType: "redo",
      nativelyRenderedContent: null,
      selection: newCurrentContent.getSelectionAfter()
    });
  };
  function EditorState2(immutable2) {
    _defineProperty$d(this, "_immutable", void 0);
    this._immutable = immutable2;
  }
  _proto.getImmutable = function getImmutable() {
    return this._immutable;
  };
  return EditorState2;
}();
function updateSelection(editorState, selection, forceSelection) {
  return EditorState$q.set(editorState, {
    selection,
    forceSelection,
    nativelyRenderedContent: null,
    inlineStyleOverride: null
  });
}
function generateNewTreeMap(contentState, decorator) {
  return contentState.getBlockMap().map(function(block) {
    return BlockTree.generate(contentState, block, decorator);
  }).toOrderedMap();
}
function regenerateTreeForNewBlocks(editorState, newBlockMap, newEntityMap, decorator) {
  var contentState = editorState.getCurrentContent().set("entityMap", newEntityMap);
  var prevBlockMap = contentState.getBlockMap();
  var prevTreeMap = editorState.getImmutable().get("treeMap");
  return prevTreeMap.merge(newBlockMap.toSeq().filter(function(block, key) {
    return block !== prevBlockMap.get(key);
  }).map(function(block) {
    return BlockTree.generate(contentState, block, decorator);
  }));
}
function regenerateTreeForNewDecorator(content, blockMap, previousTreeMap, decorator, existingDecorator) {
  return previousTreeMap.merge(blockMap.toSeq().filter(function(block) {
    return decorator.getDecorations(block, content) !== existingDecorator.getDecorations(block, content);
  }).map(function(block) {
    return BlockTree.generate(content, block, decorator);
  }));
}
function mustBecomeBoundary(editorState, changeType) {
  var lastChangeType = editorState.getLastChangeType();
  return changeType !== lastChangeType || changeType !== "insert-characters" && changeType !== "backspace-character" && changeType !== "delete-character";
}
function getInlineStyleForCollapsedSelection(content, selection) {
  var startKey = selection.getStartKey();
  var startOffset = selection.getStartOffset();
  var startBlock = content.getBlockForKey(startKey);
  if (startOffset > 0) {
    return startBlock.getInlineStyleAt(startOffset - 1);
  }
  if (startBlock.getLength()) {
    return startBlock.getInlineStyleAt(0);
  }
  return lookUpwardForInlineStyle(content, startKey);
}
function getInlineStyleForNonCollapsedSelection(content, selection) {
  var startKey = selection.getStartKey();
  var startOffset = selection.getStartOffset();
  var startBlock = content.getBlockForKey(startKey);
  if (startOffset < startBlock.getLength()) {
    return startBlock.getInlineStyleAt(startOffset);
  }
  if (startOffset > 0) {
    return startBlock.getInlineStyleAt(startOffset - 1);
  }
  return lookUpwardForInlineStyle(content, startKey);
}
function lookUpwardForInlineStyle(content, fromKey) {
  var lastNonEmpty = content.getBlockMap().reverse().skipUntil(function(_2, k2) {
    return k2 === fromKey;
  }).skip(1).skipUntil(function(block, _2) {
    return block.getLength();
  }).first();
  if (lastNonEmpty) {
    return lastNonEmpty.getInlineStyleAt(lastNonEmpty.getLength() - 1);
  }
  return OrderedSet$2();
}
var EditorState_1 = EditorState$q;
var ContentBlockNode$5 = ContentBlockNode_1;
var getNextDelimiterBlockKey2 = getNextDelimiterBlockKey_1;
var Immutable$6 = immutableExports;
var invariant$i = invariant_1;
var OrderedMap$1 = Immutable$6.OrderedMap, List$6 = Immutable$6.List;
var transformBlock3 = function transformBlock4(key, blockMap, func) {
  if (!key) {
    return;
  }
  var block = blockMap.get(key);
  if (!block) {
    return;
  }
  blockMap.set(key, func(block));
};
var updateBlockMapLinks4 = function updateBlockMapLinks5(blockMap, originalBlockToBeMoved, originalTargetBlock, insertionMode, isExperimentalTreeBlock) {
  if (!isExperimentalTreeBlock) {
    return blockMap;
  }
  var isInsertedAfterTarget = insertionMode === "after";
  var originalBlockKey = originalBlockToBeMoved.getKey();
  var originalTargetKey = originalTargetBlock.getKey();
  var originalParentKey = originalBlockToBeMoved.getParentKey();
  var originalNextSiblingKey = originalBlockToBeMoved.getNextSiblingKey();
  var originalPrevSiblingKey = originalBlockToBeMoved.getPrevSiblingKey();
  var newParentKey = originalTargetBlock.getParentKey();
  var newNextSiblingKey = isInsertedAfterTarget ? originalTargetBlock.getNextSiblingKey() : originalTargetKey;
  var newPrevSiblingKey = isInsertedAfterTarget ? originalTargetKey : originalTargetBlock.getPrevSiblingKey();
  return blockMap.withMutations(function(blocks) {
    transformBlock3(originalParentKey, blocks, function(block) {
      var parentChildrenList = block.getChildKeys();
      return block.merge({
        children: parentChildrenList["delete"](parentChildrenList.indexOf(originalBlockKey))
      });
    });
    transformBlock3(originalPrevSiblingKey, blocks, function(block) {
      return block.merge({
        nextSibling: originalNextSiblingKey
      });
    });
    transformBlock3(originalNextSiblingKey, blocks, function(block) {
      return block.merge({
        prevSibling: originalPrevSiblingKey
      });
    });
    transformBlock3(newNextSiblingKey, blocks, function(block) {
      return block.merge({
        prevSibling: originalBlockKey
      });
    });
    transformBlock3(newPrevSiblingKey, blocks, function(block) {
      return block.merge({
        nextSibling: originalBlockKey
      });
    });
    transformBlock3(newParentKey, blocks, function(block) {
      var newParentChildrenList = block.getChildKeys();
      var targetBlockIndex = newParentChildrenList.indexOf(originalTargetKey);
      var insertionIndex = isInsertedAfterTarget ? targetBlockIndex + 1 : targetBlockIndex !== 0 ? targetBlockIndex - 1 : 0;
      var newChildrenArray = newParentChildrenList.toArray();
      newChildrenArray.splice(insertionIndex, 0, originalBlockKey);
      return block.merge({
        children: List$6(newChildrenArray)
      });
    });
    transformBlock3(originalBlockKey, blocks, function(block) {
      return block.merge({
        nextSibling: newNextSiblingKey,
        prevSibling: newPrevSiblingKey,
        parent: newParentKey
      });
    });
  });
};
var moveBlockInContentState$1 = function moveBlockInContentState(contentState, blockToBeMoved, targetBlock, insertionMode) {
  !(insertionMode !== "replace") ? invariant$i(false) : void 0;
  var targetKey = targetBlock.getKey();
  var blockKey = blockToBeMoved.getKey();
  !(blockKey !== targetKey) ? invariant$i(false) : void 0;
  var blockMap = contentState.getBlockMap();
  var isExperimentalTreeBlock = blockToBeMoved instanceof ContentBlockNode$5;
  var blocksToBeMoved = [blockToBeMoved];
  var blockMapWithoutBlocksToBeMoved = blockMap["delete"](blockKey);
  if (isExperimentalTreeBlock) {
    blocksToBeMoved = [];
    blockMapWithoutBlocksToBeMoved = blockMap.withMutations(function(blocks) {
      var nextSiblingKey = blockToBeMoved.getNextSiblingKey();
      var nextDelimiterBlockKey = getNextDelimiterBlockKey2(blockToBeMoved, blocks);
      blocks.toSeq().skipUntil(function(block) {
        return block.getKey() === blockKey;
      }).takeWhile(function(block) {
        var key = block.getKey();
        var isBlockToBeMoved = key === blockKey;
        var hasNextSiblingAndIsNotNextSibling = nextSiblingKey && key !== nextSiblingKey;
        var doesNotHaveNextSiblingAndIsNotDelimiter = !nextSiblingKey && block.getParentKey() && (!nextDelimiterBlockKey || key !== nextDelimiterBlockKey);
        return !!(isBlockToBeMoved || hasNextSiblingAndIsNotNextSibling || doesNotHaveNextSiblingAndIsNotDelimiter);
      }).forEach(function(block) {
        blocksToBeMoved.push(block);
        blocks["delete"](block.getKey());
      });
    });
  }
  var blocksBefore = blockMapWithoutBlocksToBeMoved.toSeq().takeUntil(function(v2) {
    return v2 === targetBlock;
  });
  var blocksAfter = blockMapWithoutBlocksToBeMoved.toSeq().skipUntil(function(v2) {
    return v2 === targetBlock;
  }).skip(1);
  var slicedBlocks = blocksToBeMoved.map(function(block) {
    return [block.getKey(), block];
  });
  var newBlocks = OrderedMap$1();
  if (insertionMode === "before") {
    var blockBefore = contentState.getBlockBefore(targetKey);
    !(!blockBefore || blockBefore.getKey() !== blockToBeMoved.getKey()) ? invariant$i(false) : void 0;
    newBlocks = blocksBefore.concat([].concat(slicedBlocks, [[targetKey, targetBlock]]), blocksAfter).toOrderedMap();
  } else if (insertionMode === "after") {
    var blockAfter = contentState.getBlockAfter(targetKey);
    !(!blockAfter || blockAfter.getKey() !== blockKey) ? invariant$i(false) : void 0;
    newBlocks = blocksBefore.concat([[targetKey, targetBlock]].concat(slicedBlocks), blocksAfter).toOrderedMap();
  }
  return contentState.merge({
    blockMap: updateBlockMapLinks4(newBlocks, blockToBeMoved, targetBlock, insertionMode, isExperimentalTreeBlock),
    selectionBefore: contentState.getSelectionAfter(),
    selectionAfter: contentState.getSelectionAfter().merge({
      anchorKey: blockKey,
      focusKey: blockKey
    })
  });
};
var moveBlockInContentState_1 = moveBlockInContentState$1;
function _objectSpread$6(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty$c(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$c(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var BlockMapBuilder$2 = BlockMapBuilder_1;
var CharacterMetadata$4 = CharacterMetadata_1;
var ContentBlock$5 = ContentBlock_1;
var ContentBlockNode$4 = ContentBlockNode_1;
var DraftModifier$d = DraftModifier_1;
var EditorState$p = EditorState_1;
var generateRandomKey$6 = generateRandomKey_1;
var gkx$6 = gkx$8;
var Immutable$5 = immutableExports;
var moveBlockInContentState2 = moveBlockInContentState_1;
var experimentalTreeDataSupport$5 = gkx$6("draft_tree_data_support");
var ContentBlockRecord$1 = experimentalTreeDataSupport$5 ? ContentBlockNode$4 : ContentBlock$5;
var List$5 = Immutable$5.List, Repeat$1 = Immutable$5.Repeat;
var AtomicBlockUtils$1 = {
  insertAtomicBlock: function insertAtomicBlock(editorState, entityKey, character) {
    var contentState = editorState.getCurrentContent();
    var selectionState = editorState.getSelection();
    var afterRemoval = DraftModifier$d.removeRange(contentState, selectionState, "backward");
    var targetSelection = afterRemoval.getSelectionAfter();
    var afterSplit = DraftModifier$d.splitBlock(afterRemoval, targetSelection);
    var insertionTarget = afterSplit.getSelectionAfter();
    var asAtomicBlock = DraftModifier$d.setBlockType(afterSplit, insertionTarget, "atomic");
    var charData = CharacterMetadata$4.create({
      entity: entityKey
    });
    var atomicBlockConfig = {
      key: generateRandomKey$6(),
      type: "atomic",
      text: character,
      characterList: List$5(Repeat$1(charData, character.length))
    };
    var atomicDividerBlockConfig = {
      key: generateRandomKey$6(),
      type: "unstyled"
    };
    if (experimentalTreeDataSupport$5) {
      atomicBlockConfig = _objectSpread$6({}, atomicBlockConfig, {
        nextSibling: atomicDividerBlockConfig.key
      });
      atomicDividerBlockConfig = _objectSpread$6({}, atomicDividerBlockConfig, {
        prevSibling: atomicBlockConfig.key
      });
    }
    var fragmentArray = [new ContentBlockRecord$1(atomicBlockConfig), new ContentBlockRecord$1(atomicDividerBlockConfig)];
    var fragment = BlockMapBuilder$2.createFromArray(fragmentArray);
    var withAtomicBlock = DraftModifier$d.replaceWithFragment(asAtomicBlock, insertionTarget, fragment);
    var newContent = withAtomicBlock.merge({
      selectionBefore: selectionState,
      selectionAfter: withAtomicBlock.getSelectionAfter().set("hasFocus", true)
    });
    return EditorState$p.push(editorState, newContent, "insert-fragment");
  },
  moveAtomicBlock: function moveAtomicBlock(editorState, atomicBlock, targetRange, insertionMode) {
    var contentState = editorState.getCurrentContent();
    var selectionState = editorState.getSelection();
    var withMovedAtomicBlock;
    if (insertionMode === "before" || insertionMode === "after") {
      var targetBlock = contentState.getBlockForKey(insertionMode === "before" ? targetRange.getStartKey() : targetRange.getEndKey());
      withMovedAtomicBlock = moveBlockInContentState2(contentState, atomicBlock, targetBlock, insertionMode);
    } else {
      var afterRemoval = DraftModifier$d.removeRange(contentState, targetRange, "backward");
      var selectionAfterRemoval = afterRemoval.getSelectionAfter();
      var _targetBlock = afterRemoval.getBlockForKey(selectionAfterRemoval.getFocusKey());
      if (selectionAfterRemoval.getStartOffset() === 0) {
        withMovedAtomicBlock = moveBlockInContentState2(afterRemoval, atomicBlock, _targetBlock, "before");
      } else if (selectionAfterRemoval.getEndOffset() === _targetBlock.getLength()) {
        withMovedAtomicBlock = moveBlockInContentState2(afterRemoval, atomicBlock, _targetBlock, "after");
      } else {
        var afterSplit = DraftModifier$d.splitBlock(afterRemoval, selectionAfterRemoval);
        var selectionAfterSplit = afterSplit.getSelectionAfter();
        var _targetBlock2 = afterSplit.getBlockForKey(selectionAfterSplit.getFocusKey());
        withMovedAtomicBlock = moveBlockInContentState2(afterSplit, atomicBlock, _targetBlock2, "before");
      }
    }
    var newContent = withMovedAtomicBlock.merge({
      selectionBefore: selectionState,
      selectionAfter: withMovedAtomicBlock.getSelectionAfter().set("hasFocus", true)
    });
    return EditorState$p.push(editorState, newContent, "move-block");
  }
};
var AtomicBlockUtils_1 = AtomicBlockUtils$1;
function _defineProperty$b(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var Immutable$4 = immutableExports;
var List$4 = Immutable$4.List;
var DELIMITER = ".";
var CompositeDraftDecorator$1 = /* @__PURE__ */ function() {
  function CompositeDraftDecorator2(decorators) {
    _defineProperty$b(this, "_decorators", void 0);
    this._decorators = decorators.slice();
  }
  var _proto = CompositeDraftDecorator2.prototype;
  _proto.getDecorations = function getDecorations(block, contentState) {
    var decorations = Array(block.getText().length).fill(null);
    this._decorators.forEach(function(decorator, ii2) {
      var counter = 0;
      var strategy = decorator.strategy;
      var callback = function callback2(start, end) {
        if (canOccupySlice(decorations, start, end)) {
          occupySlice(decorations, start, end, ii2 + DELIMITER + counter);
          counter++;
        }
      };
      strategy(block, callback, contentState);
    });
    return List$4(decorations);
  };
  _proto.getComponentForKey = function getComponentForKey(key) {
    var componentKey = parseInt(key.split(DELIMITER)[0], 10);
    return this._decorators[componentKey].component;
  };
  _proto.getPropsForKey = function getPropsForKey(key) {
    var componentKey = parseInt(key.split(DELIMITER)[0], 10);
    return this._decorators[componentKey].props;
  };
  return CompositeDraftDecorator2;
}();
function canOccupySlice(decorations, start, end) {
  for (var ii2 = start; ii2 < end; ii2++) {
    if (decorations[ii2] != null) {
      return false;
    }
  }
  return true;
}
function occupySlice(targetArr, start, end, componentKey) {
  for (var ii2 = start; ii2 < end; ii2++) {
    targetArr[ii2] = componentKey;
  }
}
var CompositeDraftDecorator_1 = CompositeDraftDecorator$1;
function cx$5(classNames) {
  if (typeof classNames == "object") {
    return Object.keys(classNames).filter(function(className) {
      return classNames[className];
    }).map(replace).join(" ");
  }
  return Array.prototype.map.call(arguments, replace).join(" ");
}
function replace(str) {
  return str.replace(/\//g, "-");
}
var cx_1 = cx$5;
var React$5 = reactExports;
var cx$4 = cx_1;
var _require$4 = immutableExports, Map$4 = _require$4.Map;
var UL_WRAP = React$5.createElement("ul", {
  className: cx$4("public/DraftStyleDefault/ul")
});
var OL_WRAP = React$5.createElement("ol", {
  className: cx$4("public/DraftStyleDefault/ol")
});
var PRE_WRAP = React$5.createElement("pre", {
  className: cx$4("public/DraftStyleDefault/pre")
});
var DefaultDraftBlockRenderMap$3 = Map$4({
  "header-one": {
    element: "h1"
  },
  "header-two": {
    element: "h2"
  },
  "header-three": {
    element: "h3"
  },
  "header-four": {
    element: "h4"
  },
  "header-five": {
    element: "h5"
  },
  "header-six": {
    element: "h6"
  },
  section: {
    element: "section"
  },
  article: {
    element: "article"
  },
  "unordered-list-item": {
    element: "li",
    wrapper: UL_WRAP
  },
  "ordered-list-item": {
    element: "li",
    wrapper: OL_WRAP
  },
  blockquote: {
    element: "blockquote"
  },
  atomic: {
    element: "figure"
  },
  "code-block": {
    element: "pre",
    wrapper: PRE_WRAP
  },
  unstyled: {
    element: "div",
    aliasedElements: ["p"]
  }
});
var DefaultDraftBlockRenderMap_1 = DefaultDraftBlockRenderMap$3;
var DefaultDraftInlineStyle$2 = {
  BOLD: {
    fontWeight: "bold"
  },
  CODE: {
    fontFamily: "monospace",
    wordWrap: "break-word"
  },
  ITALIC: {
    fontStyle: "italic"
  },
  STRIKETHROUGH: {
    textDecoration: "line-through"
  },
  UNDERLINE: {
    textDecoration: "underline"
  }
};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i2 = 0; i2 < 10; i2++) {
      test2["_" + String.fromCharCode(i2)] = i2;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s2 = 1; s2 < arguments.length; s2++) {
    from = Object(arguments[s2]);
    for (var key in from) {
      if (hasOwnProperty$2.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i2 = 0; i2 < symbols.length; i2++) {
        if (propIsEnumerable.call(from, symbols[i2])) {
          to[symbols[i2]] = from[symbols[i2]];
        }
      }
    }
  }
  return to;
};
var uaParserExports = {};
var uaParser = {
  get exports() {
    return uaParserExports;
  },
  set exports(v2) {
    uaParserExports = v2;
  }
};
(function(module, exports) {
  (function(window2, undefined$1) {
    var LIBVERSION = "0.7.34", EMPTY2 = "", UNKNOWN2 = "?", FUNC_TYPE = "function", UNDEF_TYPE = "undefined", OBJ_TYPE = "object", STR_TYPE = "string", MAJOR = "major", MODEL = "model", NAME = "name", TYPE = "type", VENDOR = "vendor", VERSION2 = "version", ARCHITECTURE = "architecture", CONSOLE = "console", MOBILE = "mobile", TABLET = "tablet", SMARTTV = "smarttv", WEARABLE = "wearable", EMBEDDED = "embedded", UA_MAX_LENGTH = 350;
    var AMAZON = "Amazon", APPLE = "Apple", ASUS = "ASUS", BLACKBERRY = "BlackBerry", BROWSER = "Browser", CHROME = "Chrome", EDGE = "Edge", FIREFOX = "Firefox", GOOGLE = "Google", HUAWEI = "Huawei", LG = "LG", MICROSOFT = "Microsoft", MOTOROLA = "Motorola", OPERA = "Opera", SAMSUNG = "Samsung", SHARP = "Sharp", SONY = "Sony", XIAOMI = "Xiaomi", ZEBRA = "Zebra", FACEBOOK = "Facebook", CHROMIUM_OS = "Chromium OS", MAC_OS = "Mac OS";
    var extend2 = function(regexes2, extensions) {
      var mergedRegexes = {};
      for (var i2 in regexes2) {
        if (extensions[i2] && extensions[i2].length % 2 === 0) {
          mergedRegexes[i2] = extensions[i2].concat(regexes2[i2]);
        } else {
          mergedRegexes[i2] = regexes2[i2];
        }
      }
      return mergedRegexes;
    }, enumerize = function(arr) {
      var enums = {};
      for (var i2 = 0; i2 < arr.length; i2++) {
        enums[arr[i2].toUpperCase()] = arr[i2];
      }
      return enums;
    }, has = function(str1, str2) {
      return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
    }, lowerize = function(str) {
      return str.toLowerCase();
    }, majorize = function(version) {
      return typeof version === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY2).split(".")[0] : undefined$1;
    }, trim2 = function(str, len) {
      if (typeof str === STR_TYPE) {
        str = str.replace(/^\s\s*/, EMPTY2);
        return typeof len === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
      }
    };
    var rgxMapper = function(ua2, arrays) {
      var i2 = 0, j2, k2, p2, q2, matches, match;
      while (i2 < arrays.length && !matches) {
        var regex = arrays[i2], props = arrays[i2 + 1];
        j2 = k2 = 0;
        while (j2 < regex.length && !matches) {
          if (!regex[j2]) {
            break;
          }
          matches = regex[j2++].exec(ua2);
          if (!!matches) {
            for (p2 = 0; p2 < props.length; p2++) {
              match = matches[++k2];
              q2 = props[p2];
              if (typeof q2 === OBJ_TYPE && q2.length > 0) {
                if (q2.length === 2) {
                  if (typeof q2[1] == FUNC_TYPE) {
                    this[q2[0]] = q2[1].call(this, match);
                  } else {
                    this[q2[0]] = q2[1];
                  }
                } else if (q2.length === 3) {
                  if (typeof q2[1] === FUNC_TYPE && !(q2[1].exec && q2[1].test)) {
                    this[q2[0]] = match ? q2[1].call(this, match, q2[2]) : undefined$1;
                  } else {
                    this[q2[0]] = match ? match.replace(q2[1], q2[2]) : undefined$1;
                  }
                } else if (q2.length === 4) {
                  this[q2[0]] = match ? q2[3].call(this, match.replace(q2[1], q2[2])) : undefined$1;
                }
              } else {
                this[q2] = match ? match : undefined$1;
              }
            }
          }
        }
        i2 += 2;
      }
    }, strMapper = function(str, map) {
      for (var i2 in map) {
        if (typeof map[i2] === OBJ_TYPE && map[i2].length > 0) {
          for (var j2 = 0; j2 < map[i2].length; j2++) {
            if (has(map[i2][j2], str)) {
              return i2 === UNKNOWN2 ? undefined$1 : i2;
            }
          }
        } else if (has(map[i2], str)) {
          return i2 === UNKNOWN2 ? undefined$1 : i2;
        }
      }
      return str;
    };
    var oldSafariMap = {
      "1.0": "/8",
      "1.2": "/1",
      "1.3": "/3",
      "2.0": "/412",
      "2.0.2": "/416",
      "2.0.3": "/417",
      "2.0.4": "/419",
      "?": "/"
    }, windowsVersionMap = {
      "ME": "4.90",
      "NT 3.11": "NT3.51",
      "NT 4.0": "NT4.0",
      "2000": "NT 5.0",
      "XP": ["NT 5.1", "NT 5.2"],
      "Vista": "NT 6.0",
      "7": "NT 6.1",
      "8": "NT 6.2",
      "8.1": "NT 6.3",
      "10": ["NT 6.4", "NT 10.0"],
      "RT": "ARM"
    };
    var regexes = {
      browser: [
        [
          /\b(?:crmo|crios)\/([\w\.]+)/i
          // Chrome for Android/iOS
        ],
        [VERSION2, [NAME, "Chrome"]],
        [
          /edg(?:e|ios|a)?\/([\w\.]+)/i
          // Microsoft Edge
        ],
        [VERSION2, [NAME, "Edge"]],
        [
          // Presto based
          /(opera mini)\/([-\w\.]+)/i,
          // Opera Mini
          /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
          // Opera Mobi/Tablet
          /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
          // Opera
        ],
        [NAME, VERSION2],
        [
          /opios[\/ ]+([\w\.]+)/i
          // Opera mini on iphone >= 8.0
        ],
        [VERSION2, [NAME, OPERA + " Mini"]],
        [
          /\bopr\/([\w\.]+)/i
          // Opera Webkit
        ],
        [VERSION2, [NAME, OPERA]],
        [
          // Mixed
          /(kindle)\/([\w\.]+)/i,
          // Kindle
          /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
          // Lunascape/Maxthon/Netfront/Jasmine/Blazer
          // Trident based
          /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
          // Avant/IEMobile/SlimBrowser
          /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
          // Baidu Browser
          /(?:ms|\()(ie) ([\w\.]+)/i,
          // Internet Explorer
          // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
          /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
          // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
          /(weibo)__([\d\.]+)/i
          // Weibo
        ],
        [NAME, VERSION2],
        [
          /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
          // UCBrowser
        ],
        [VERSION2, [NAME, "UC" + BROWSER]],
        [
          /microm.+\bqbcore\/([\w\.]+)/i,
          // WeChat Desktop for Windows Built-in Browser
          /\bqbcore\/([\w\.]+).+microm/i
        ],
        [VERSION2, [NAME, "WeChat(Win) Desktop"]],
        [
          /micromessenger\/([\w\.]+)/i
          // WeChat
        ],
        [VERSION2, [NAME, "WeChat"]],
        [
          /konqueror\/([\w\.]+)/i
          // Konqueror
        ],
        [VERSION2, [NAME, "Konqueror"]],
        [
          /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
          // IE11
        ],
        [VERSION2, [NAME, "IE"]],
        [
          /yabrowser\/([\w\.]+)/i
          // Yandex
        ],
        [VERSION2, [NAME, "Yandex"]],
        [
          /(avast|avg)\/([\w\.]+)/i
          // Avast/AVG Secure Browser
        ],
        [[NAME, /(.+)/, "$1 Secure " + BROWSER], VERSION2],
        [
          /\bfocus\/([\w\.]+)/i
          // Firefox Focus
        ],
        [VERSION2, [NAME, FIREFOX + " Focus"]],
        [
          /\bopt\/([\w\.]+)/i
          // Opera Touch
        ],
        [VERSION2, [NAME, OPERA + " Touch"]],
        [
          /coc_coc\w+\/([\w\.]+)/i
          // Coc Coc Browser
        ],
        [VERSION2, [NAME, "Coc Coc"]],
        [
          /dolfin\/([\w\.]+)/i
          // Dolphin
        ],
        [VERSION2, [NAME, "Dolphin"]],
        [
          /coast\/([\w\.]+)/i
          // Opera Coast
        ],
        [VERSION2, [NAME, OPERA + " Coast"]],
        [
          /miuibrowser\/([\w\.]+)/i
          // MIUI Browser
        ],
        [VERSION2, [NAME, "MIUI " + BROWSER]],
        [
          /fxios\/([-\w\.]+)/i
          // Firefox for iOS
        ],
        [VERSION2, [NAME, FIREFOX]],
        [
          /\bqihu|(qi?ho?o?|360)browser/i
          // 360
        ],
        [[NAME, "360 " + BROWSER]],
        [
          /(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i
        ],
        [[NAME, /(.+)/, "$1 " + BROWSER], VERSION2],
        [
          // Oculus/Samsung/Sailfish/Huawei Browser
          /(comodo_dragon)\/([\w\.]+)/i
          // Comodo Dragon
        ],
        [[NAME, /_/g, " "], VERSION2],
        [
          /(electron)\/([\w\.]+) safari/i,
          // Electron-based App
          /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
          // Tesla
          /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i
          // QQBrowser/Baidu App/2345 Browser
        ],
        [NAME, VERSION2],
        [
          /(metasr)[\/ ]?([\w\.]+)/i,
          // SouGouBrowser
          /(lbbrowser)/i,
          // LieBao Browser
          /\[(linkedin)app\]/i
          // LinkedIn App for iOS & Android
        ],
        [NAME],
        [
          // WebView
          /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
          // Facebook App for iOS & Android
        ],
        [[NAME, FACEBOOK], VERSION2],
        [
          /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
          // Kakao App
          /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
          // Naver InApp
          /safari (line)\/([\w\.]+)/i,
          // Line App for iOS
          /\b(line)\/([\w\.]+)\/iab/i,
          // Line App for Android
          /(chromium|instagram)[\/ ]([-\w\.]+)/i
          // Chromium/Instagram
        ],
        [NAME, VERSION2],
        [
          /\bgsa\/([\w\.]+) .*safari\//i
          // Google Search Appliance on iOS
        ],
        [VERSION2, [NAME, "GSA"]],
        [
          /headlesschrome(?:\/([\w\.]+)| )/i
          // Chrome Headless
        ],
        [VERSION2, [NAME, CHROME + " Headless"]],
        [
          / wv\).+(chrome)\/([\w\.]+)/i
          // Chrome WebView
        ],
        [[NAME, CHROME + " WebView"], VERSION2],
        [
          /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
          // Android Browser
        ],
        [VERSION2, [NAME, "Android " + BROWSER]],
        [
          /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
          // Chrome/OmniWeb/Arora/Tizen/Nokia
        ],
        [NAME, VERSION2],
        [
          /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i
          // Mobile Safari
        ],
        [VERSION2, [NAME, "Mobile Safari"]],
        [
          /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i
          // Safari & Safari Mobile
        ],
        [VERSION2, NAME],
        [
          /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
          // Safari < 3.0
        ],
        [NAME, [VERSION2, strMapper, oldSafariMap]],
        [
          /(webkit|khtml)\/([\w\.]+)/i
        ],
        [NAME, VERSION2],
        [
          // Gecko based
          /(navigator|netscape\d?)\/([-\w\.]+)/i
          // Netscape
        ],
        [[NAME, "Netscape"], VERSION2],
        [
          /mobile vr; rv:([\w\.]+)\).+firefox/i
          // Firefox Reality
        ],
        [VERSION2, [NAME, FIREFOX + " Reality"]],
        [
          /ekiohf.+(flow)\/([\w\.]+)/i,
          // Flow
          /(swiftfox)/i,
          // Swiftfox
          /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
          // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror/Klar
          /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
          // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
          /(firefox)\/([\w\.]+)/i,
          // Other Firefox-based
          /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
          // Mozilla
          // Other
          /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
          // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir/Obigo/Mosaic/Go/ICE/UP.Browser
          /(links) \(([\w\.]+)/i,
          // Links
          /panasonic;(viera)/i
          // Panasonic Viera
        ],
        [NAME, VERSION2],
        [
          /(cobalt)\/([\w\.]+)/i
          // Cobalt
        ],
        [NAME, [VERSION2, /master.|lts./, ""]]
      ],
      cpu: [
        [
          /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i
          // AMD64 (x64)
        ],
        [[ARCHITECTURE, "amd64"]],
        [
          /(ia32(?=;))/i
          // IA32 (quicktime)
        ],
        [[ARCHITECTURE, lowerize]],
        [
          /((?:i[346]|x)86)[;\)]/i
          // IA32 (x86)
        ],
        [[ARCHITECTURE, "ia32"]],
        [
          /\b(aarch64|arm(v?8e?l?|_?64))\b/i
          // ARM64
        ],
        [[ARCHITECTURE, "arm64"]],
        [
          /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i
          // ARMHF
        ],
        [[ARCHITECTURE, "armhf"]],
        [
          // PocketPC mistakenly identified as PowerPC
          /windows (ce|mobile); ppc;/i
        ],
        [[ARCHITECTURE, "arm"]],
        [
          /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i
          // PowerPC
        ],
        [[ARCHITECTURE, /ower/, EMPTY2, lowerize]],
        [
          /(sun4\w)[;\)]/i
          // SPARC
        ],
        [[ARCHITECTURE, "sparc"]],
        [
          /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
          // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
        ],
        [[ARCHITECTURE, lowerize]]
      ],
      device: [
        [
          //////////////////////////
          // MOBILES & TABLETS
          /////////////////////////
          // Samsung
          /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
        ],
        [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]],
        [
          /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
          /samsung[- ]([-\w]+)/i,
          /sec-(sgh\w+)/i
        ],
        [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]],
        [
          // Apple
          /\((ip(?:hone|od)[\w ]*);/i
          // iPod/iPhone
        ],
        [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]],
        [
          /\((ipad);[-\w\),; ]+apple/i,
          // iPad
          /applecoremedia\/[\w\.]+ \((ipad)/i,
          /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
        ],
        [MODEL, [VENDOR, APPLE], [TYPE, TABLET]],
        [
          /(macintosh);/i
        ],
        [MODEL, [VENDOR, APPLE]],
        [
          // Sharp
          /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
        ],
        [MODEL, [VENDOR, SHARP], [TYPE, MOBILE]],
        [
          // Huawei
          /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
        ],
        [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]],
        [
          /(?:huawei|honor)([-\w ]+)[;\)]/i,
          /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
        ],
        [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]],
        [
          // Xiaomi
          /\b(poco[\w ]+)(?: bui|\))/i,
          // Xiaomi POCO
          /\b; (\w+) build\/hm\1/i,
          // Xiaomi Hongmi 'numeric' models
          /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
          // Xiaomi Hongmi
          /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
          // Xiaomi Redmi
          /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
          // Xiaomi Mi
        ],
        [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, MOBILE]],
        [
          /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i
          // Mi Pad tablets
        ],
        [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, TABLET]],
        [
          // OPPO
          /; (\w+) bui.+ oppo/i,
          /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
        ],
        [MODEL, [VENDOR, "OPPO"], [TYPE, MOBILE]],
        [
          // Vivo
          /vivo (\w+)(?: bui|\))/i,
          /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
        ],
        [MODEL, [VENDOR, "Vivo"], [TYPE, MOBILE]],
        [
          // Realme
          /\b(rmx[12]\d{3})(?: bui|;|\))/i
        ],
        [MODEL, [VENDOR, "Realme"], [TYPE, MOBILE]],
        [
          // Motorola
          /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
          /\bmot(?:orola)?[- ](\w*)/i,
          /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
        ],
        [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]],
        [
          /\b(mz60\d|xoom[2 ]{0,2}) build\//i
        ],
        [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]],
        [
          // LG
          /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
        ],
        [MODEL, [VENDOR, LG], [TYPE, TABLET]],
        [
          /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
          /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
          /\blg-?([\d\w]+) bui/i
        ],
        [MODEL, [VENDOR, LG], [TYPE, MOBILE]],
        [
          // Lenovo
          /(ideatab[-\w ]+)/i,
          /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
        ],
        [MODEL, [VENDOR, "Lenovo"], [TYPE, TABLET]],
        [
          // Nokia
          /(?:maemo|nokia).*(n900|lumia \d+)/i,
          /nokia[-_ ]?([-\w\.]*)/i
        ],
        [[MODEL, /_/g, " "], [VENDOR, "Nokia"], [TYPE, MOBILE]],
        [
          // Google
          /(pixel c)\b/i
          // Google Pixel C
        ],
        [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]],
        [
          /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
          // Google Pixel
        ],
        [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]],
        [
          // Sony
          /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
        ],
        [MODEL, [VENDOR, SONY], [TYPE, MOBILE]],
        [
          /sony tablet [ps]/i,
          /\b(?:sony)?sgp\w+(?: bui|\))/i
        ],
        [[MODEL, "Xperia Tablet"], [VENDOR, SONY], [TYPE, TABLET]],
        [
          // OnePlus
          / (kb2005|in20[12]5|be20[12][59])\b/i,
          /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
        ],
        [MODEL, [VENDOR, "OnePlus"], [TYPE, MOBILE]],
        [
          // Amazon
          /(alexa)webm/i,
          /(kf[a-z]{2}wi)( bui|\))/i,
          // Kindle Fire without Silk
          /(kf[a-z]+)( bui|\)).+silk\//i
          // Kindle Fire HD
        ],
        [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]],
        [
          /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
          // Fire Phone
        ],
        [[MODEL, /(.+)/g, "Fire Phone $1"], [VENDOR, AMAZON], [TYPE, MOBILE]],
        [
          // BlackBerry
          /(playbook);[-\w\),; ]+(rim)/i
          // BlackBerry PlayBook
        ],
        [MODEL, VENDOR, [TYPE, TABLET]],
        [
          /\b((?:bb[a-f]|st[hv])100-\d)/i,
          /\(bb10; (\w+)/i
          // BlackBerry 10
        ],
        [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]],
        [
          // Asus
          /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
        ],
        [MODEL, [VENDOR, ASUS], [TYPE, TABLET]],
        [
          / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
        ],
        [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]],
        [
          // HTC
          /(nexus 9)/i
          // HTC Nexus 9
        ],
        [MODEL, [VENDOR, "HTC"], [TYPE, TABLET]],
        [
          /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
          // HTC
          // ZTE
          /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
          /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
          // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
        ],
        [VENDOR, [MODEL, /_/g, " "], [TYPE, MOBILE]],
        [
          // Acer
          /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
        ],
        [MODEL, [VENDOR, "Acer"], [TYPE, TABLET]],
        [
          // Meizu
          /droid.+; (m[1-5] note) bui/i,
          /\bmz-([-\w]{2,})/i
        ],
        [MODEL, [VENDOR, "Meizu"], [TYPE, MOBILE]],
        [
          // MIXED
          /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
          // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
          /(hp) ([\w ]+\w)/i,
          // HP iPAQ
          /(asus)-?(\w+)/i,
          // Asus
          /(microsoft); (lumia[\w ]+)/i,
          // Microsoft Lumia
          /(lenovo)[-_ ]?([-\w]+)/i,
          // Lenovo
          /(jolla)/i,
          // Jolla
          /(oppo) ?([\w ]+) bui/i
          // OPPO
        ],
        [VENDOR, MODEL, [TYPE, MOBILE]],
        [
          /(kobo)\s(ereader|touch)/i,
          // Kobo
          /(archos) (gamepad2?)/i,
          // Archos
          /(hp).+(touchpad(?!.+tablet)|tablet)/i,
          // HP TouchPad
          /(kindle)\/([\w\.]+)/i,
          // Kindle
          /(nook)[\w ]+build\/(\w+)/i,
          // Nook
          /(dell) (strea[kpr\d ]*[\dko])/i,
          // Dell Streak
          /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
          // Le Pan Tablets
          /(trinity)[- ]*(t\d{3}) bui/i,
          // Trinity Tablets
          /(gigaset)[- ]+(q\w{1,9}) bui/i,
          // Gigaset Tablets
          /(vodafone) ([\w ]+)(?:\)| bui)/i
          // Vodafone
        ],
        [VENDOR, MODEL, [TYPE, TABLET]],
        [
          /(surface duo)/i
          // Surface Duo
        ],
        [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]],
        [
          /droid [\d\.]+; (fp\du?)(?: b|\))/i
          // Fairphone
        ],
        [MODEL, [VENDOR, "Fairphone"], [TYPE, MOBILE]],
        [
          /(u304aa)/i
          // AT&T
        ],
        [MODEL, [VENDOR, "AT&T"], [TYPE, MOBILE]],
        [
          /\bsie-(\w*)/i
          // Siemens
        ],
        [MODEL, [VENDOR, "Siemens"], [TYPE, MOBILE]],
        [
          /\b(rct\w+) b/i
          // RCA Tablets
        ],
        [MODEL, [VENDOR, "RCA"], [TYPE, TABLET]],
        [
          /\b(venue[\d ]{2,7}) b/i
          // Dell Venue Tablets
        ],
        [MODEL, [VENDOR, "Dell"], [TYPE, TABLET]],
        [
          /\b(q(?:mv|ta)\w+) b/i
          // Verizon Tablet
        ],
        [MODEL, [VENDOR, "Verizon"], [TYPE, TABLET]],
        [
          /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i
          // Barnes & Noble Tablet
        ],
        [MODEL, [VENDOR, "Barnes & Noble"], [TYPE, TABLET]],
        [
          /\b(tm\d{3}\w+) b/i
        ],
        [MODEL, [VENDOR, "NuVision"], [TYPE, TABLET]],
        [
          /\b(k88) b/i
          // ZTE K Series Tablet
        ],
        [MODEL, [VENDOR, "ZTE"], [TYPE, TABLET]],
        [
          /\b(nx\d{3}j) b/i
          // ZTE Nubia
        ],
        [MODEL, [VENDOR, "ZTE"], [TYPE, MOBILE]],
        [
          /\b(gen\d{3}) b.+49h/i
          // Swiss GEN Mobile
        ],
        [MODEL, [VENDOR, "Swiss"], [TYPE, MOBILE]],
        [
          /\b(zur\d{3}) b/i
          // Swiss ZUR Tablet
        ],
        [MODEL, [VENDOR, "Swiss"], [TYPE, TABLET]],
        [
          /\b((zeki)?tb.*\b) b/i
          // Zeki Tablets
        ],
        [MODEL, [VENDOR, "Zeki"], [TYPE, TABLET]],
        [
          /\b([yr]\d{2}) b/i,
          /\b(dragon[- ]+touch |dt)(\w{5}) b/i
          // Dragon Touch Tablet
        ],
        [[VENDOR, "Dragon Touch"], MODEL, [TYPE, TABLET]],
        [
          /\b(ns-?\w{0,9}) b/i
          // Insignia Tablets
        ],
        [MODEL, [VENDOR, "Insignia"], [TYPE, TABLET]],
        [
          /\b((nxa|next)-?\w{0,9}) b/i
          // NextBook Tablets
        ],
        [MODEL, [VENDOR, "NextBook"], [TYPE, TABLET]],
        [
          /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i
          // Voice Xtreme Phones
        ],
        [[VENDOR, "Voice"], MODEL, [TYPE, MOBILE]],
        [
          /\b(lvtel\-)?(v1[12]) b/i
          // LvTel Phones
        ],
        [[VENDOR, "LvTel"], MODEL, [TYPE, MOBILE]],
        [
          /\b(ph-1) /i
          // Essential PH-1
        ],
        [MODEL, [VENDOR, "Essential"], [TYPE, MOBILE]],
        [
          /\b(v(100md|700na|7011|917g).*\b) b/i
          // Envizen Tablets
        ],
        [MODEL, [VENDOR, "Envizen"], [TYPE, TABLET]],
        [
          /\b(trio[-\w\. ]+) b/i
          // MachSpeed Tablets
        ],
        [MODEL, [VENDOR, "MachSpeed"], [TYPE, TABLET]],
        [
          /\btu_(1491) b/i
          // Rotor Tablets
        ],
        [MODEL, [VENDOR, "Rotor"], [TYPE, TABLET]],
        [
          /(shield[\w ]+) b/i
          // Nvidia Shield Tablets
        ],
        [MODEL, [VENDOR, "Nvidia"], [TYPE, TABLET]],
        [
          /(sprint) (\w+)/i
          // Sprint Phones
        ],
        [VENDOR, MODEL, [TYPE, MOBILE]],
        [
          /(kin\.[onetw]{3})/i
          // Microsoft Kin
        ],
        [[MODEL, /\./g, " "], [VENDOR, MICROSOFT], [TYPE, MOBILE]],
        [
          /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
          // Zebra
        ],
        [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]],
        [
          /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
        ],
        [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]],
        [
          ///////////////////
          // SMARTTVS
          ///////////////////
          /smart-tv.+(samsung)/i
          // Samsung
        ],
        [VENDOR, [TYPE, SMARTTV]],
        [
          /hbbtv.+maple;(\d+)/i
        ],
        [[MODEL, /^/, "SmartTV"], [VENDOR, SAMSUNG], [TYPE, SMARTTV]],
        [
          /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
          // LG SmartTV
        ],
        [[VENDOR, LG], [TYPE, SMARTTV]],
        [
          /(apple) ?tv/i
          // Apple TV
        ],
        [VENDOR, [MODEL, APPLE + " TV"], [TYPE, SMARTTV]],
        [
          /crkey/i
          // Google Chromecast
        ],
        [[MODEL, CHROME + "cast"], [VENDOR, GOOGLE], [TYPE, SMARTTV]],
        [
          /droid.+aft(\w)( bui|\))/i
          // Fire TV
        ],
        [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]],
        [
          /\(dtv[\);].+(aquos)/i,
          /(aquos-tv[\w ]+)\)/i
          // Sharp
        ],
        [MODEL, [VENDOR, SHARP], [TYPE, SMARTTV]],
        [
          /(bravia[\w ]+)( bui|\))/i
          // Sony
        ],
        [MODEL, [VENDOR, SONY], [TYPE, SMARTTV]],
        [
          /(mitv-\w{5}) bui/i
          // Xiaomi
        ],
        [MODEL, [VENDOR, XIAOMI], [TYPE, SMARTTV]],
        [
          /Hbbtv.*(technisat) (.*);/i
          // TechniSAT
        ],
        [VENDOR, MODEL, [TYPE, SMARTTV]],
        [
          /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
          // Roku
          /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
          // HbbTV devices
        ],
        [[VENDOR, trim2], [MODEL, trim2], [TYPE, SMARTTV]],
        [
          /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
          // SmartTV from Unidentified Vendors
        ],
        [[TYPE, SMARTTV]],
        [
          ///////////////////
          // CONSOLES
          ///////////////////
          /(ouya)/i,
          // Ouya
          /(nintendo) ([wids3utch]+)/i
          // Nintendo
        ],
        [VENDOR, MODEL, [TYPE, CONSOLE]],
        [
          /droid.+; (shield) bui/i
          // Nvidia
        ],
        [MODEL, [VENDOR, "Nvidia"], [TYPE, CONSOLE]],
        [
          /(playstation [345portablevi]+)/i
          // Playstation
        ],
        [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]],
        [
          /\b(xbox(?: one)?(?!; xbox))[\); ]/i
          // Microsoft Xbox
        ],
        [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]],
        [
          ///////////////////
          // WEARABLES
          ///////////////////
          /((pebble))app/i
          // Pebble
        ],
        [VENDOR, MODEL, [TYPE, WEARABLE]],
        [
          /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
          // Apple Watch
        ],
        [MODEL, [VENDOR, APPLE], [TYPE, WEARABLE]],
        [
          /droid.+; (glass) \d/i
          // Google Glass
        ],
        [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]],
        [
          /droid.+; (wt63?0{2,3})\)/i
        ],
        [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]],
        [
          /(quest( 2| pro)?)/i
          // Oculus Quest
        ],
        [MODEL, [VENDOR, FACEBOOK], [TYPE, WEARABLE]],
        [
          ///////////////////
          // EMBEDDED
          ///////////////////
          /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
          // Tesla
        ],
        [VENDOR, [TYPE, EMBEDDED]],
        [
          ////////////////////
          // MIXED (GENERIC)
          ///////////////////
          /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i
          // Android Phones from Unidentified Vendors
        ],
        [MODEL, [TYPE, MOBILE]],
        [
          /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
          // Android Tablets from Unidentified Vendors
        ],
        [MODEL, [TYPE, TABLET]],
        [
          /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
          // Unidentifiable Tablet
        ],
        [[TYPE, TABLET]],
        [
          /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
          // Unidentifiable Mobile
        ],
        [[TYPE, MOBILE]],
        [
          /(android[-\w\. ]{0,9});.+buil/i
          // Generic Android Device
        ],
        [MODEL, [VENDOR, "Generic"]]
      ],
      engine: [
        [
          /windows.+ edge\/([\w\.]+)/i
          // EdgeHTML
        ],
        [VERSION2, [NAME, EDGE + "HTML"]],
        [
          /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
          // Blink
        ],
        [VERSION2, [NAME, "Blink"]],
        [
          /(presto)\/([\w\.]+)/i,
          // Presto
          /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
          // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
          /ekioh(flow)\/([\w\.]+)/i,
          // Flow
          /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
          // KHTML/Tasman/Links
          /(icab)[\/ ]([23]\.[\d\.]+)/i
          // iCab
        ],
        [NAME, VERSION2],
        [
          /rv\:([\w\.]{1,9})\b.+(gecko)/i
          // Gecko
        ],
        [VERSION2, NAME]
      ],
      os: [
        [
          // Windows
          /microsoft (windows) (vista|xp)/i
          // Windows (iTunes)
        ],
        [NAME, VERSION2],
        [
          /(windows) nt 6\.2; (arm)/i,
          // Windows RT
          /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
          // Windows Phone
          /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
        ],
        [NAME, [VERSION2, strMapper, windowsVersionMap]],
        [
          /(win(?=3|9|n)|win 9x )([nt\d\.]+)/i
        ],
        [[NAME, "Windows"], [VERSION2, strMapper, windowsVersionMap]],
        [
          // iOS/macOS
          /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
          // iOS
          /cfnetwork\/.+darwin/i
        ],
        [[VERSION2, /_/g, "."], [NAME, "iOS"]],
        [
          /(mac os x) ?([\w\. ]*)/i,
          /(macintosh|mac_powerpc\b)(?!.+haiku)/i
          // Mac OS
        ],
        [[NAME, MAC_OS], [VERSION2, /_/g, "."]],
        [
          // Mobile OSes
          /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
          // Android-x86/HarmonyOS
        ],
        [VERSION2, NAME],
        [
          // Android/WebOS/QNX/Bada/RIM/Maemo/MeeGo/Sailfish OS
          /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
          /(blackberry)\w*\/([\w\.]*)/i,
          // Blackberry
          /(tizen|kaios)[\/ ]([\w\.]+)/i,
          // Tizen/KaiOS
          /\((series40);/i
          // Series 40
        ],
        [NAME, VERSION2],
        [
          /\(bb(10);/i
          // BlackBerry 10
        ],
        [VERSION2, [NAME, BLACKBERRY]],
        [
          /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i
          // Symbian
        ],
        [VERSION2, [NAME, "Symbian"]],
        [
          /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
          // Firefox OS
        ],
        [VERSION2, [NAME, FIREFOX + " OS"]],
        [
          /web0s;.+rt(tv)/i,
          /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
          // WebOS
        ],
        [VERSION2, [NAME, "webOS"]],
        [
          /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
          // watchOS
        ],
        [VERSION2, [NAME, "watchOS"]],
        [
          // Google Chromecast
          /crkey\/([\d\.]+)/i
          // Google Chromecast
        ],
        [VERSION2, [NAME, CHROME + "cast"]],
        [
          /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
          // Chromium OS
        ],
        [[NAME, CHROMIUM_OS], VERSION2],
        [
          // Smart TVs
          /panasonic;(viera)/i,
          // Panasonic Viera
          /(netrange)mmh/i,
          // Netrange
          /(nettv)\/(\d+\.[\w\.]+)/i,
          // NetTV
          // Console
          /(nintendo|playstation) ([wids345portablevuch]+)/i,
          // Nintendo/Playstation
          /(xbox); +xbox ([^\);]+)/i,
          // Microsoft Xbox (360, One, X, S, Series X, Series S)
          // Other
          /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
          // Joli/Palm
          /(mint)[\/\(\) ]?(\w*)/i,
          // Mint
          /(mageia|vectorlinux)[; ]/i,
          // Mageia/VectorLinux
          /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
          // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
          /(hurd|linux) ?([\w\.]*)/i,
          // Hurd/Linux
          /(gnu) ?([\w\.]*)/i,
          // GNU
          /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
          // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
          /(haiku) (\w+)/i
          // Haiku
        ],
        [NAME, VERSION2],
        [
          /(sunos) ?([\w\.\d]*)/i
          // Solaris
        ],
        [[NAME, "Solaris"], VERSION2],
        [
          /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
          // Solaris
          /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
          // AIX
          /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
          // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX
          /(unix) ?([\w\.]*)/i
          // UNIX
        ],
        [NAME, VERSION2]
      ]
    };
    var UAParser2 = function(ua2, extensions) {
      if (typeof ua2 === OBJ_TYPE) {
        extensions = ua2;
        ua2 = undefined$1;
      }
      if (!(this instanceof UAParser2)) {
        return new UAParser2(ua2, extensions).getResult();
      }
      var _navigator = typeof window2 !== UNDEF_TYPE && window2.navigator ? window2.navigator : undefined$1;
      var _ua = ua2 || (_navigator && _navigator.userAgent ? _navigator.userAgent : EMPTY2);
      var _uach = _navigator && _navigator.userAgentData ? _navigator.userAgentData : undefined$1;
      var _rgxmap = extensions ? extend2(regexes, extensions) : regexes;
      this.getBrowser = function() {
        var _browser = {};
        _browser[NAME] = undefined$1;
        _browser[VERSION2] = undefined$1;
        rgxMapper.call(_browser, _ua, _rgxmap.browser);
        _browser[MAJOR] = majorize(_browser[VERSION2]);
        if (_navigator && _navigator.brave && typeof _navigator.brave.isBrave == FUNC_TYPE) {
          _browser[NAME] = "Brave";
        }
        return _browser;
      };
      this.getCPU = function() {
        var _cpu = {};
        _cpu[ARCHITECTURE] = undefined$1;
        rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
        return _cpu;
      };
      this.getDevice = function() {
        var _device = {};
        _device[VENDOR] = undefined$1;
        _device[MODEL] = undefined$1;
        _device[TYPE] = undefined$1;
        rgxMapper.call(_device, _ua, _rgxmap.device);
        if (!_device[TYPE] && _uach && _uach.mobile) {
          _device[TYPE] = MOBILE;
        }
        if (_device[MODEL] == "Macintosh" && _navigator && typeof _navigator.standalone !== UNDEF_TYPE && _navigator.maxTouchPoints && _navigator.maxTouchPoints > 2) {
          _device[MODEL] = "iPad";
          _device[TYPE] = TABLET;
        }
        return _device;
      };
      this.getEngine = function() {
        var _engine = {};
        _engine[NAME] = undefined$1;
        _engine[VERSION2] = undefined$1;
        rgxMapper.call(_engine, _ua, _rgxmap.engine);
        return _engine;
      };
      this.getOS = function() {
        var _os = {};
        _os[NAME] = undefined$1;
        _os[VERSION2] = undefined$1;
        rgxMapper.call(_os, _ua, _rgxmap.os);
        if (!_os[NAME] && _uach && _uach.platform != "Unknown") {
          _os[NAME] = _uach.platform.replace(/chrome os/i, CHROMIUM_OS).replace(/macos/i, MAC_OS);
        }
        return _os;
      };
      this.getResult = function() {
        return {
          ua: this.getUA(),
          browser: this.getBrowser(),
          engine: this.getEngine(),
          os: this.getOS(),
          device: this.getDevice(),
          cpu: this.getCPU()
        };
      };
      this.getUA = function() {
        return _ua;
      };
      this.setUA = function(ua3) {
        _ua = typeof ua3 === STR_TYPE && ua3.length > UA_MAX_LENGTH ? trim2(ua3, UA_MAX_LENGTH) : ua3;
        return this;
      };
      this.setUA(_ua);
      return this;
    };
    UAParser2.VERSION = LIBVERSION;
    UAParser2.BROWSER = enumerize([NAME, VERSION2, MAJOR]);
    UAParser2.CPU = enumerize([ARCHITECTURE]);
    UAParser2.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
    UAParser2.ENGINE = UAParser2.OS = enumerize([NAME, VERSION2]);
    {
      if (module.exports) {
        exports = module.exports = UAParser2;
      }
      exports.UAParser = UAParser2;
    }
    var $ = typeof window2 !== UNDEF_TYPE && (window2.jQuery || window2.Zepto);
    if ($ && !$.ua) {
      var parser2 = new UAParser2();
      $.ua = parser2.getResult();
      $.ua.get = function() {
        return parser2.getUA();
      };
      $.ua.set = function(ua2) {
        parser2.setUA(ua2);
        var result = parser2.getResult();
        for (var prop in result) {
          $.ua[prop] = result[prop];
        }
      };
    }
  })(typeof window === "object" ? window : commonjsGlobal);
})(uaParser, uaParserExports);
var UAParser = uaParserExports;
var UNKNOWN = "Unknown";
var PLATFORM_MAP = {
  "Mac OS": "Mac OS X"
};
function convertPlatformName(name) {
  return PLATFORM_MAP[name] || name;
}
function getBrowserVersion(version) {
  if (!version) {
    return {
      major: "",
      minor: ""
    };
  }
  var parts = version.split(".");
  return {
    major: parts[0],
    minor: parts[1]
  };
}
var parser = new UAParser();
var results = parser.getResult();
var browserVersionData = getBrowserVersion(results.browser.version);
var uaData = {
  browserArchitecture: results.cpu.architecture || UNKNOWN,
  browserFullVersion: results.browser.version || UNKNOWN,
  browserMinorVersion: browserVersionData.minor || UNKNOWN,
  browserName: results.browser.name || UNKNOWN,
  browserVersion: results.browser.major || UNKNOWN,
  deviceName: results.device.model || UNKNOWN,
  engineName: results.engine.name || UNKNOWN,
  engineVersion: results.engine.version || UNKNOWN,
  platformArchitecture: results.cpu.architecture || UNKNOWN,
  platformName: convertPlatformName(results.os.name) || UNKNOWN,
  platformVersion: results.os.version || UNKNOWN,
  platformFullVersion: results.os.version || UNKNOWN
};
var UserAgentData$1 = uaData;
var invariant$h = invariant_1;
var componentRegex = /\./;
var orRegex = /\|\|/;
var rangeRegex = /\s+\-\s+/;
var modifierRegex = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/;
var numericRegex = /^(\d*)(.*)/;
function checkOrExpression(range, version) {
  var expressions = range.split(orRegex);
  if (expressions.length > 1) {
    return expressions.some(function(range2) {
      return VersionRange$1.contains(range2, version);
    });
  } else {
    range = expressions[0].trim();
    return checkRangeExpression(range, version);
  }
}
function checkRangeExpression(range, version) {
  var expressions = range.split(rangeRegex);
  !(expressions.length > 0 && expressions.length <= 2) ? invariant$h(false) : void 0;
  if (expressions.length === 1) {
    return checkSimpleExpression(expressions[0], version);
  } else {
    var startVersion = expressions[0], endVersion = expressions[1];
    !(isSimpleVersion(startVersion) && isSimpleVersion(endVersion)) ? invariant$h(false) : void 0;
    return checkSimpleExpression(">=" + startVersion, version) && checkSimpleExpression("<=" + endVersion, version);
  }
}
function checkSimpleExpression(range, version) {
  range = range.trim();
  if (range === "") {
    return true;
  }
  var versionComponents = version.split(componentRegex);
  var _getModifierAndCompon = getModifierAndComponents(range), modifier = _getModifierAndCompon.modifier, rangeComponents = _getModifierAndCompon.rangeComponents;
  switch (modifier) {
    case "<":
      return checkLessThan(versionComponents, rangeComponents);
    case "<=":
      return checkLessThanOrEqual(versionComponents, rangeComponents);
    case ">=":
      return checkGreaterThanOrEqual(versionComponents, rangeComponents);
    case ">":
      return checkGreaterThan(versionComponents, rangeComponents);
    case "~":
    case "~>":
      return checkApproximateVersion(versionComponents, rangeComponents);
    default:
      return checkEqual(versionComponents, rangeComponents);
  }
}
function checkLessThan(a2, b2) {
  return compareComponents(a2, b2) === -1;
}
function checkLessThanOrEqual(a2, b2) {
  var result = compareComponents(a2, b2);
  return result === -1 || result === 0;
}
function checkEqual(a2, b2) {
  return compareComponents(a2, b2) === 0;
}
function checkGreaterThanOrEqual(a2, b2) {
  var result = compareComponents(a2, b2);
  return result === 1 || result === 0;
}
function checkGreaterThan(a2, b2) {
  return compareComponents(a2, b2) === 1;
}
function checkApproximateVersion(a2, b2) {
  var lowerBound = b2.slice();
  var upperBound = b2.slice();
  if (upperBound.length > 1) {
    upperBound.pop();
  }
  var lastIndex = upperBound.length - 1;
  var numeric = parseInt(upperBound[lastIndex], 10);
  if (isNumber$1(numeric)) {
    upperBound[lastIndex] = numeric + 1 + "";
  }
  return checkGreaterThanOrEqual(a2, lowerBound) && checkLessThan(a2, upperBound);
}
function getModifierAndComponents(range) {
  var rangeComponents = range.split(componentRegex);
  var matches = rangeComponents[0].match(modifierRegex);
  !matches ? invariant$h(false) : void 0;
  return {
    modifier: matches[1],
    rangeComponents: [matches[2]].concat(rangeComponents.slice(1))
  };
}
function isNumber$1(number) {
  return !isNaN(number) && isFinite(number);
}
function isSimpleVersion(range) {
  return !getModifierAndComponents(range).modifier;
}
function zeroPad(array, length) {
  for (var i2 = array.length; i2 < length; i2++) {
    array[i2] = "0";
  }
}
function normalizeVersions(a2, b2) {
  a2 = a2.slice();
  b2 = b2.slice();
  zeroPad(a2, b2.length);
  for (var i2 = 0; i2 < b2.length; i2++) {
    var matches = b2[i2].match(/^[x*]$/i);
    if (matches) {
      b2[i2] = a2[i2] = "0";
      if (matches[0] === "*" && i2 === b2.length - 1) {
        for (var j2 = i2; j2 < a2.length; j2++) {
          a2[j2] = "0";
        }
      }
    }
  }
  zeroPad(b2, a2.length);
  return [a2, b2];
}
function compareNumeric(a2, b2) {
  var aPrefix = a2.match(numericRegex)[1];
  var bPrefix = b2.match(numericRegex)[1];
  var aNumeric = parseInt(aPrefix, 10);
  var bNumeric = parseInt(bPrefix, 10);
  if (isNumber$1(aNumeric) && isNumber$1(bNumeric) && aNumeric !== bNumeric) {
    return compare$1(aNumeric, bNumeric);
  } else {
    return compare$1(a2, b2);
  }
}
function compare$1(a2, b2) {
  !(typeof a2 === typeof b2) ? invariant$h(false) : void 0;
  if (a2 > b2) {
    return 1;
  } else if (a2 < b2) {
    return -1;
  } else {
    return 0;
  }
}
function compareComponents(a2, b2) {
  var _normalizeVersions = normalizeVersions(a2, b2), aNormalized = _normalizeVersions[0], bNormalized = _normalizeVersions[1];
  for (var i2 = 0; i2 < bNormalized.length; i2++) {
    var result = compareNumeric(aNormalized[i2], bNormalized[i2]);
    if (result) {
      return result;
    }
  }
  return 0;
}
var VersionRange$1 = {
  /**
   * Checks whether `version` satisfies the `range` specification.
   *
   * We support a subset of the expressions defined in
   * https://www.npmjs.org/doc/misc/semver.html:
   *
   *    version   Must match version exactly
   *    =version  Same as just version
   *    >version  Must be greater than version
   *    >=version Must be greater than or equal to version
   *    <version  Must be less than version
   *    <=version Must be less than or equal to version
   *    ~version  Must be at least version, but less than the next significant
   *              revision above version:
   *              "~1.2.3" is equivalent to ">= 1.2.3 and < 1.3"
   *    ~>version Equivalent to ~version
   *    1.2.x     Must match "1.2.x", where "x" is a wildcard that matches
   *              anything
   *    1.2.*     Similar to "1.2.x", but "*" in the trailing position is a
   *              "greedy" wildcard, so will match any number of additional
   *              components:
   *              "1.2.*" will match "1.2.1", "1.2.1.1", "1.2.1.1.1" etc
   *    *         Any version
   *    ""        (Empty string) Same as *
   *    v1 - v2   Equivalent to ">= v1 and <= v2"
   *    r1 || r2  Passes if either r1 or r2 are satisfied
   *
   * @param {string} range
   * @param {string} version
   * @returns {boolean}
   */
  contains: function contains(range, version) {
    return checkOrExpression(range.trim(), version.trim());
  }
};
var VersionRange_1 = VersionRange$1;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
function mapObject$1(object, callback, context) {
  if (!object) {
    return null;
  }
  var result = {};
  for (var name in object) {
    if (hasOwnProperty$1.call(object, name)) {
      result[name] = callback.call(context, object[name], name, object);
    }
  }
  return result;
}
var mapObject_1 = mapObject$1;
function memoizeStringOnly$1(callback) {
  var cache = {};
  return function(string) {
    if (!cache.hasOwnProperty(string)) {
      cache[string] = callback.call(this, string);
    }
    return cache[string];
  };
}
var memoizeStringOnly_1 = memoizeStringOnly$1;
var UserAgentData = UserAgentData$1;
var VersionRange = VersionRange_1;
var mapObject = mapObject_1;
var memoizeStringOnly = memoizeStringOnly_1;
function compare(name, version, query, normalizer) {
  if (name === query) {
    return true;
  }
  if (!query.startsWith(name)) {
    return false;
  }
  var range = query.slice(name.length);
  if (version) {
    range = normalizer ? normalizer(range) : range;
    return VersionRange.contains(range, version);
  }
  return false;
}
function normalizePlatformVersion(version) {
  if (UserAgentData.platformName === "Windows") {
    return version.replace(/^\s*NT/, "");
  }
  return version;
}
var UserAgent$e = {
  /**
   * Check if the User Agent browser matches `query`.
   *
   * `query` should be a string like "Chrome" or "Chrome > 33".
   *
   * Valid browser names include:
   *
   * - ACCESS NetFront
   * - AOL
   * - Amazon Silk
   * - Android
   * - BlackBerry
   * - BlackBerry PlayBook
   * - Chrome
   * - Chrome for iOS
   * - Chrome frame
   * - Facebook PHP SDK
   * - Facebook for iOS
   * - Firefox
   * - IE
   * - IE Mobile
   * - Mobile Safari
   * - Motorola Internet Browser
   * - Nokia
   * - Openwave Mobile Browser
   * - Opera
   * - Opera Mini
   * - Opera Mobile
   * - Safari
   * - UIWebView
   * - Unknown
   * - webOS
   * - etc...
   *
   * An authoritative list can be found in the PHP `BrowserDetector` class and
   * related classes in the same file (see calls to `new UserAgentBrowser` here:
   * https://fburl.com/50728104).
   *
   * @note Function results are memoized
   *
   * @param {string} query Query of the form "Name [range expression]"
   * @return {boolean}
   */
  isBrowser: function isBrowser2(query) {
    return compare(UserAgentData.browserName, UserAgentData.browserFullVersion, query);
  },
  /**
   * Check if the User Agent browser uses a 32 or 64 bit architecture.
   *
   * @note Function results are memoized
   *
   * @param {string} query Query of the form "32" or "64".
   * @return {boolean}
   */
  isBrowserArchitecture: function isBrowserArchitecture(query) {
    return compare(UserAgentData.browserArchitecture, null, query);
  },
  /**
   * Check if the User Agent device matches `query`.
   *
   * `query` should be a string like "iPhone" or "iPad".
   *
   * Valid device names include:
   *
   * - Kindle
   * - Kindle Fire
   * - Unknown
   * - iPad
   * - iPhone
   * - iPod
   * - etc...
   *
   * An authoritative list can be found in the PHP `DeviceDetector` class and
   * related classes in the same file (see calls to `new UserAgentDevice` here:
   * https://fburl.com/50728332).
   *
   * @note Function results are memoized
   *
   * @param {string} query Query of the form "Name"
   * @return {boolean}
   */
  isDevice: function isDevice(query) {
    return compare(UserAgentData.deviceName, null, query);
  },
  /**
   * Check if the User Agent rendering engine matches `query`.
   *
   * `query` should be a string like "WebKit" or "WebKit >= 537".
   *
   * Valid engine names include:
   *
   * - Gecko
   * - Presto
   * - Trident
   * - WebKit
   * - etc...
   *
   * An authoritative list can be found in the PHP `RenderingEngineDetector`
   * class related classes in the same file (see calls to `new
   * UserAgentRenderingEngine` here: https://fburl.com/50728617).
   *
   * @note Function results are memoized
   *
   * @param {string} query Query of the form "Name [range expression]"
   * @return {boolean}
   */
  isEngine: function isEngine(query) {
    return compare(UserAgentData.engineName, UserAgentData.engineVersion, query);
  },
  /**
   * Check if the User Agent platform matches `query`.
   *
   * `query` should be a string like "Windows" or "iOS 5 - 6".
   *
   * Valid platform names include:
   *
   * - Android
   * - BlackBerry OS
   * - Java ME
   * - Linux
   * - Mac OS X
   * - Mac OS X Calendar
   * - Mac OS X Internet Account
   * - Symbian
   * - SymbianOS
   * - Windows
   * - Windows Mobile
   * - Windows Phone
   * - iOS
   * - iOS Facebook Integration Account
   * - iOS Facebook Social Sharing UI
   * - webOS
   * - Chrome OS
   * - etc...
   *
   * An authoritative list can be found in the PHP `PlatformDetector` class and
   * related classes in the same file (see calls to `new UserAgentPlatform`
   * here: https://fburl.com/50729226).
   *
   * @note Function results are memoized
   *
   * @param {string} query Query of the form "Name [range expression]"
   * @return {boolean}
   */
  isPlatform: function isPlatform(query) {
    return compare(UserAgentData.platformName, UserAgentData.platformFullVersion, query, normalizePlatformVersion);
  },
  /**
   * Check if the User Agent platform is a 32 or 64 bit architecture.
   *
   * @note Function results are memoized
   *
   * @param {string} query Query of the form "32" or "64".
   * @return {boolean}
   */
  isPlatformArchitecture: function isPlatformArchitecture(query) {
    return compare(UserAgentData.platformArchitecture, null, query);
  }
};
var UserAgent_1 = mapObject(UserAgent$e, memoizeStringOnly);
function getCorrectDocumentFromNode$4(node) {
  if (!node || !node.ownerDocument) {
    return document;
  }
  return node.ownerDocument;
}
var getCorrectDocumentFromNode_1 = getCorrectDocumentFromNode$4;
function isElement$7(node) {
  if (!node || !node.ownerDocument) {
    return false;
  }
  return node.nodeType === Node.ELEMENT_NODE;
}
var isElement_1 = isElement$7;
var isElement$6 = isElement_1;
function getSelectionOffsetKeyForNode$2(node) {
  if (isElement$6(node)) {
    var castedNode = node;
    var offsetKey = castedNode.getAttribute("data-offset-key");
    if (offsetKey) {
      return offsetKey;
    }
    for (var ii2 = 0; ii2 < castedNode.childNodes.length; ii2++) {
      var childOffsetKey = getSelectionOffsetKeyForNode$2(castedNode.childNodes[ii2]);
      if (childOffsetKey) {
        return childOffsetKey;
      }
    }
  }
  return null;
}
var getSelectionOffsetKeyForNode_1 = getSelectionOffsetKeyForNode$2;
var getCorrectDocumentFromNode$3 = getCorrectDocumentFromNode_1;
var getSelectionOffsetKeyForNode$1 = getSelectionOffsetKeyForNode_1;
function findAncestorOffsetKey$4(node) {
  var searchNode = node;
  while (searchNode && searchNode !== getCorrectDocumentFromNode$3(node).documentElement) {
    var key = getSelectionOffsetKeyForNode$1(searchNode);
    if (key != null) {
      return key;
    }
    searchNode = searchNode.parentNode;
  }
  return null;
}
var findAncestorOffsetKey_1 = findAncestorOffsetKey$4;
function getWindowForNode$2(node) {
  if (!node || !node.ownerDocument || !node.ownerDocument.defaultView) {
    return window;
  }
  return node.ownerDocument.defaultView;
}
var getWindowForNode_1 = getWindowForNode$2;
function _defineProperty$a(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var UserAgent$d = UserAgent_1;
var findAncestorOffsetKey$3 = findAncestorOffsetKey_1;
var getWindowForNode$1 = getWindowForNode_1;
var Immutable$3 = immutableExports;
var invariant$g = invariant_1;
var nullthrows$a = nullthrows_1;
var Map$3 = Immutable$3.Map;
var DOM_OBSERVER_OPTIONS = {
  subtree: true,
  characterData: true,
  childList: true,
  characterDataOldValue: false,
  attributes: false
};
var USE_CHAR_DATA = UserAgent$d.isBrowser("IE <= 11");
var DOMObserver$1 = /* @__PURE__ */ function() {
  function DOMObserver2(container) {
    var _this = this;
    _defineProperty$a(this, "observer", void 0);
    _defineProperty$a(this, "container", void 0);
    _defineProperty$a(this, "mutations", void 0);
    _defineProperty$a(this, "onCharData", void 0);
    this.container = container;
    this.mutations = Map$3();
    var containerWindow = getWindowForNode$1(container);
    if (containerWindow.MutationObserver && !USE_CHAR_DATA) {
      this.observer = new containerWindow.MutationObserver(function(mutations) {
        return _this.registerMutations(mutations);
      });
    } else {
      this.onCharData = function(e2) {
        !(e2.target instanceof Node) ? invariant$g(false) : void 0;
        _this.registerMutation({
          type: "characterData",
          target: e2.target
        });
      };
    }
  }
  var _proto = DOMObserver2.prototype;
  _proto.start = function start() {
    if (this.observer) {
      this.observer.observe(this.container, DOM_OBSERVER_OPTIONS);
    } else {
      this.container.addEventListener("DOMCharacterDataModified", this.onCharData);
    }
  };
  _proto.stopAndFlushMutations = function stopAndFlushMutations() {
    var observer = this.observer;
    if (observer) {
      this.registerMutations(observer.takeRecords());
      observer.disconnect();
    } else {
      this.container.removeEventListener("DOMCharacterDataModified", this.onCharData);
    }
    var mutations = this.mutations;
    this.mutations = Map$3();
    return mutations;
  };
  _proto.registerMutations = function registerMutations(mutations) {
    for (var i2 = 0; i2 < mutations.length; i2++) {
      this.registerMutation(mutations[i2]);
    }
  };
  _proto.getMutationTextContent = function getMutationTextContent(mutation) {
    var type = mutation.type, target = mutation.target, removedNodes = mutation.removedNodes;
    if (type === "characterData") {
      if (target.textContent !== "") {
        if (USE_CHAR_DATA) {
          return target.textContent.replace("\n", "");
        }
        return target.textContent;
      }
    } else if (type === "childList") {
      if (removedNodes && removedNodes.length) {
        return "";
      } else if (target.textContent !== "") {
        return target.textContent;
      }
    }
    return null;
  };
  _proto.registerMutation = function registerMutation(mutation) {
    var textContent = this.getMutationTextContent(mutation);
    if (textContent != null) {
      var offsetKey = nullthrows$a(findAncestorOffsetKey$3(mutation.target));
      this.mutations = this.mutations.set(offsetKey, textContent);
    }
  };
  return DOMObserver2;
}();
var DOMObserver_1 = DOMObserver$1;
var KEY_DELIMITER = "-";
var DraftOffsetKey$4 = {
  encode: function encode(blockKey, decoratorKey, leafKey) {
    return blockKey + KEY_DELIMITER + decoratorKey + KEY_DELIMITER + leafKey;
  },
  decode: function decode(offsetKey) {
    var _offsetKey$split$reve = offsetKey.split(KEY_DELIMITER).reverse(), leafKey = _offsetKey$split$reve[0], decoratorKey = _offsetKey$split$reve[1], blockKeyParts = _offsetKey$split$reve.slice(2);
    return {
      // Recomposes the parts of blockKey after reversing them
      blockKey: blockKeyParts.reverse().join(KEY_DELIMITER),
      decoratorKey: parseInt(decoratorKey, 10),
      leafKey: parseInt(leafKey, 10)
    };
  }
};
var DraftOffsetKey_1 = DraftOffsetKey$4;
var Keys$4 = {
  BACKSPACE: 8,
  TAB: 9,
  RETURN: 13,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  DELETE: 46,
  COMMA: 188,
  PERIOD: 190,
  A: 65,
  Z: 90,
  ZERO: 48,
  NUMPAD_0: 96,
  NUMPAD_9: 105
};
var DraftJsDebugLogging$2 = {
  logBlockedSelectionEvent: function logBlockedSelectionEvent() {
    return null;
  },
  logSelectionStateFailure: function logSelectionStateFailure() {
    return null;
  }
};
function isHTMLElement$4(node) {
  if (!node || !node.ownerDocument) {
    return false;
  }
  if (!node.ownerDocument.defaultView) {
    return node instanceof HTMLElement;
  }
  if (node instanceof node.ownerDocument.defaultView.HTMLElement) {
    return true;
  }
  return false;
}
var isHTMLElement_1 = isHTMLElement$4;
var invariant$f = invariant_1;
var isHTMLElement$3 = isHTMLElement_1;
function getContentEditableContainer$2(editor) {
  var editorNode = editor.editorContainer;
  !editorNode ? invariant$f(false) : void 0;
  !isHTMLElement$3(editorNode.firstChild) ? invariant$f(false) : void 0;
  var htmlElement = editorNode.firstChild;
  return htmlElement;
}
var getContentEditableContainer_1 = getContentEditableContainer$2;
var DraftOffsetKey$3 = DraftOffsetKey_1;
var nullthrows$9 = nullthrows_1;
function getUpdatedSelectionState$2(editorState, anchorKey, anchorOffset, focusKey, focusOffset) {
  var selection = nullthrows$9(editorState.getSelection());
  if (!anchorKey || !focusKey) {
    return selection;
  }
  var anchorPath = DraftOffsetKey$3.decode(anchorKey);
  var anchorBlockKey = anchorPath.blockKey;
  var anchorLeafBlockTree = editorState.getBlockTree(anchorBlockKey);
  var anchorLeaf = anchorLeafBlockTree && anchorLeafBlockTree.getIn([anchorPath.decoratorKey, "leaves", anchorPath.leafKey]);
  var focusPath = DraftOffsetKey$3.decode(focusKey);
  var focusBlockKey = focusPath.blockKey;
  var focusLeafBlockTree = editorState.getBlockTree(focusBlockKey);
  var focusLeaf = focusLeafBlockTree && focusLeafBlockTree.getIn([focusPath.decoratorKey, "leaves", focusPath.leafKey]);
  if (!anchorLeaf || !focusLeaf) {
    return selection;
  }
  var anchorLeafStart = anchorLeaf.get("start");
  var focusLeafStart = focusLeaf.get("start");
  var anchorBlockOffset = anchorLeaf ? anchorLeafStart + anchorOffset : null;
  var focusBlockOffset = focusLeaf ? focusLeafStart + focusOffset : null;
  var areEqual3 = selection.getAnchorKey() === anchorBlockKey && selection.getAnchorOffset() === anchorBlockOffset && selection.getFocusKey() === focusBlockKey && selection.getFocusOffset() === focusBlockOffset;
  if (areEqual3) {
    return selection;
  }
  var isBackward = false;
  if (anchorBlockKey === focusBlockKey) {
    var anchorLeafEnd = anchorLeaf.get("end");
    var focusLeafEnd = focusLeaf.get("end");
    if (focusLeafStart === anchorLeafStart && focusLeafEnd === anchorLeafEnd) {
      isBackward = focusOffset < anchorOffset;
    } else {
      isBackward = focusLeafStart < anchorLeafStart;
    }
  } else {
    var startKey = editorState.getCurrentContent().getBlockMap().keySeq().skipUntil(function(v2) {
      return v2 === anchorBlockKey || v2 === focusBlockKey;
    }).first();
    isBackward = startKey === focusBlockKey;
  }
  return selection.merge({
    anchorKey: anchorBlockKey,
    anchorOffset: anchorBlockOffset,
    focusKey: focusBlockKey,
    focusOffset: focusBlockOffset,
    isBackward
  });
}
var getUpdatedSelectionState_1 = getUpdatedSelectionState$2;
var findAncestorOffsetKey$2 = findAncestorOffsetKey_1;
var getSelectionOffsetKeyForNode = getSelectionOffsetKeyForNode_1;
var getUpdatedSelectionState$1 = getUpdatedSelectionState_1;
var invariant$e = invariant_1;
var isElement$5 = isElement_1;
var nullthrows$8 = nullthrows_1;
function getDraftEditorSelectionWithNodes$2(editorState, root, anchorNode, anchorOffset, focusNode, focusOffset) {
  var anchorIsTextNode = anchorNode.nodeType === Node.TEXT_NODE;
  var focusIsTextNode = focusNode.nodeType === Node.TEXT_NODE;
  if (anchorIsTextNode && focusIsTextNode) {
    return {
      selectionState: getUpdatedSelectionState$1(editorState, nullthrows$8(findAncestorOffsetKey$2(anchorNode)), anchorOffset, nullthrows$8(findAncestorOffsetKey$2(focusNode)), focusOffset),
      needsRecovery: false
    };
  }
  var anchorPoint = null;
  var focusPoint = null;
  var needsRecovery = true;
  if (anchorIsTextNode) {
    anchorPoint = {
      key: nullthrows$8(findAncestorOffsetKey$2(anchorNode)),
      offset: anchorOffset
    };
    focusPoint = getPointForNonTextNode(root, focusNode, focusOffset);
  } else if (focusIsTextNode) {
    focusPoint = {
      key: nullthrows$8(findAncestorOffsetKey$2(focusNode)),
      offset: focusOffset
    };
    anchorPoint = getPointForNonTextNode(root, anchorNode, anchorOffset);
  } else {
    anchorPoint = getPointForNonTextNode(root, anchorNode, anchorOffset);
    focusPoint = getPointForNonTextNode(root, focusNode, focusOffset);
    if (anchorNode === focusNode && anchorOffset === focusOffset) {
      needsRecovery = !!anchorNode.firstChild && anchorNode.firstChild.nodeName !== "BR";
    }
  }
  return {
    selectionState: getUpdatedSelectionState$1(editorState, anchorPoint.key, anchorPoint.offset, focusPoint.key, focusPoint.offset),
    needsRecovery
  };
}
function getFirstLeaf(node) {
  while (node.firstChild && // data-blocks has no offset
  (isElement$5(node.firstChild) && node.firstChild.getAttribute("data-blocks") === "true" || getSelectionOffsetKeyForNode(node.firstChild))) {
    node = node.firstChild;
  }
  return node;
}
function getLastLeaf(node) {
  while (node.lastChild && // data-blocks has no offset
  (isElement$5(node.lastChild) && node.lastChild.getAttribute("data-blocks") === "true" || getSelectionOffsetKeyForNode(node.lastChild))) {
    node = node.lastChild;
  }
  return node;
}
function getPointForNonTextNode(editorRoot, startNode, childOffset) {
  var node = startNode;
  var offsetKey = findAncestorOffsetKey$2(node);
  !(offsetKey != null || editorRoot && (editorRoot === node || editorRoot.firstChild === node)) ? invariant$e(false) : void 0;
  if (editorRoot === node) {
    node = node.firstChild;
    !isElement$5(node) ? invariant$e(false) : void 0;
    var castedNode = node;
    node = castedNode;
    !(node.getAttribute("data-contents") === "true") ? invariant$e(false) : void 0;
    if (childOffset > 0) {
      childOffset = node.childNodes.length;
    }
  }
  if (childOffset === 0) {
    var key = null;
    if (offsetKey != null) {
      key = offsetKey;
    } else {
      var firstLeaf = getFirstLeaf(node);
      key = nullthrows$8(getSelectionOffsetKeyForNode(firstLeaf));
    }
    return {
      key,
      offset: 0
    };
  }
  var nodeBeforeCursor = node.childNodes[childOffset - 1];
  var leafKey = null;
  var textLength = null;
  if (!getSelectionOffsetKeyForNode(nodeBeforeCursor)) {
    leafKey = nullthrows$8(offsetKey);
    textLength = getTextContentLength(nodeBeforeCursor);
  } else {
    var lastLeaf = getLastLeaf(nodeBeforeCursor);
    leafKey = nullthrows$8(getSelectionOffsetKeyForNode(lastLeaf));
    textLength = getTextContentLength(lastLeaf);
  }
  return {
    key: leafKey,
    offset: textLength
  };
}
function getTextContentLength(node) {
  var textContent = node.textContent;
  return textContent === "\n" ? 0 : textContent.length;
}
var getDraftEditorSelectionWithNodes_1 = getDraftEditorSelectionWithNodes$2;
var getDraftEditorSelectionWithNodes$1 = getDraftEditorSelectionWithNodes_1;
function getDraftEditorSelection$2(editorState, root) {
  var selection = root.ownerDocument.defaultView.getSelection();
  var anchorNode = selection.anchorNode, anchorOffset = selection.anchorOffset, focusNode = selection.focusNode, focusOffset = selection.focusOffset, rangeCount = selection.rangeCount;
  if (
    // No active selection.
    rangeCount === 0 || // No selection, ever. As in, the user hasn't selected anything since
    // opening the document.
    anchorNode == null || focusNode == null
  ) {
    return {
      selectionState: editorState.getSelection().set("hasFocus", false),
      needsRecovery: false
    };
  }
  return getDraftEditorSelectionWithNodes$1(editorState, root, anchorNode, anchorOffset, focusNode, focusOffset);
}
var getDraftEditorSelection_1 = getDraftEditorSelection$2;
var DraftJsDebugLogging$1 = DraftJsDebugLogging$2;
var EditorState$o = EditorState_1;
var getContentEditableContainer$1 = getContentEditableContainer_1;
var getDraftEditorSelection$1 = getDraftEditorSelection_1;
function editOnSelect$1(editor) {
  if (editor._blockSelectEvents || editor._latestEditorState !== editor.props.editorState) {
    if (editor._blockSelectEvents) {
      var _editorState = editor.props.editorState;
      var selectionState = _editorState.getSelection();
      DraftJsDebugLogging$1.logBlockedSelectionEvent({
        // For now I don't think we need any other info
        anonymizedDom: "N/A",
        extraParams: JSON.stringify({
          stacktrace: new Error().stack
        }),
        selectionState: JSON.stringify(selectionState.toJS())
      });
    }
    return;
  }
  var editorState = editor.props.editorState;
  var documentSelection = getDraftEditorSelection$1(editorState, getContentEditableContainer$1(editor));
  var updatedSelectionState = documentSelection.selectionState;
  if (updatedSelectionState !== editorState.getSelection()) {
    if (documentSelection.needsRecovery) {
      editorState = EditorState$o.forceSelection(editorState, updatedSelectionState);
    } else {
      editorState = EditorState$o.acceptSelection(editorState, updatedSelectionState);
    }
    editor.update(editorState);
  }
}
var editOnSelect_1 = editOnSelect$1;
function notEmptyKey$2(key) {
  return key != null && key != "";
}
var draftKeyUtils = {
  notEmptyKey: notEmptyKey$2
};
var _require$3 = draftKeyUtils, notEmptyKey$1 = _require$3.notEmptyKey;
function getEntityKeyForSelection$3(contentState, targetSelection) {
  var entityKey;
  if (targetSelection.isCollapsed()) {
    var key = targetSelection.getAnchorKey();
    var offset = targetSelection.getAnchorOffset();
    if (offset > 0) {
      entityKey = contentState.getBlockForKey(key).getEntityAt(offset - 1);
      if (entityKey !== contentState.getBlockForKey(key).getEntityAt(offset)) {
        return null;
      }
      return filterKey(contentState.getEntityMap(), entityKey);
    }
    return null;
  }
  var startKey = targetSelection.getStartKey();
  var startOffset = targetSelection.getStartOffset();
  var startBlock = contentState.getBlockForKey(startKey);
  entityKey = startOffset === startBlock.getLength() ? null : startBlock.getEntityAt(startOffset);
  return filterKey(contentState.getEntityMap(), entityKey);
}
function filterKey(entityMap, entityKey) {
  if (notEmptyKey$1(entityKey)) {
    var entity = entityMap.__get(entityKey);
    return entity.getMutability() === "MUTABLE" ? entityKey : null;
  }
  return null;
}
var getEntityKeyForSelection_1 = getEntityKeyForSelection$3;
var DOMObserver = DOMObserver_1;
var DraftModifier$c = DraftModifier_1;
var DraftOffsetKey$2 = DraftOffsetKey_1;
var EditorState$n = EditorState_1;
var Keys$3 = Keys$4;
var UserAgent$c = UserAgent_1;
var editOnSelect = editOnSelect_1;
var getContentEditableContainer = getContentEditableContainer_1;
var getDraftEditorSelection = getDraftEditorSelection_1;
var getEntityKeyForSelection$2 = getEntityKeyForSelection_1;
var nullthrows$7 = nullthrows_1;
var isIE$2 = UserAgent$c.isBrowser("IE");
var RESOLVE_DELAY = 20;
var resolved = false;
var stillComposing = false;
var domObserver = null;
function startDOMObserver(editor) {
  if (!domObserver) {
    domObserver = new DOMObserver(getContentEditableContainer(editor));
    domObserver.start();
  }
}
var DraftEditorCompositionHandler$1 = {
  /**
   * A `compositionstart` event has fired while we're still in composition
   * mode. Continue the current composition session to prevent a re-render.
   */
  onCompositionStart: function onCompositionStart(editor) {
    stillComposing = true;
    startDOMObserver(editor);
  },
  /**
   * Attempt to end the current composition session.
   *
   * Defer handling because browser will still insert the chars into active
   * element after `compositionend`. If a `compositionstart` event fires
   * before `resolveComposition` executes, our composition session will
   * continue.
   *
   * The `resolved` flag is useful because certain IME interfaces fire the
   * `compositionend` event multiple times, thus queueing up multiple attempts
   * at handling the composition. Since handling the same composition event
   * twice could break the DOM, we only use the first event. Example: Arabic
   * Google Input Tools on Windows 8.1 fires `compositionend` three times.
   */
  onCompositionEnd: function onCompositionEnd(editor) {
    resolved = false;
    stillComposing = false;
    setTimeout(function() {
      if (!resolved) {
        DraftEditorCompositionHandler$1.resolveComposition(editor);
      }
    }, RESOLVE_DELAY);
  },
  onSelect: editOnSelect,
  /**
   * In Safari, keydown events may fire when committing compositions. If
   * the arrow keys are used to commit, prevent default so that the cursor
   * doesn't move, otherwise it will jump back noticeably on re-render.
   */
  onKeyDown: function onKeyDown(editor, e2) {
    if (!stillComposing) {
      DraftEditorCompositionHandler$1.resolveComposition(editor);
      editor._onKeyDown(e2);
      return;
    }
    if (e2.which === Keys$3.RIGHT || e2.which === Keys$3.LEFT) {
      e2.preventDefault();
    }
  },
  /**
   * Keypress events may fire when committing compositions. In Firefox,
   * pressing RETURN commits the composition and inserts extra newline
   * characters that we do not want. `preventDefault` allows the composition
   * to be committed while preventing the extra characters.
   */
  onKeyPress: function onKeyPress(_editor, e2) {
    if (e2.which === Keys$3.RETURN) {
      e2.preventDefault();
    }
  },
  /**
   * Attempt to insert composed characters into the document.
   *
   * If we are still in a composition session, do nothing. Otherwise, insert
   * the characters into the document and terminate the composition session.
   *
   * If no characters were composed -- for instance, the user
   * deleted all composed characters and committed nothing new --
   * force a re-render. We also re-render when the composition occurs
   * at the beginning of a leaf, to ensure that if the browser has
   * created a new text node for the composition, we will discard it.
   *
   * Resetting innerHTML will move focus to the beginning of the editor,
   * so we update to force it back to the correct place.
   */
  resolveComposition: function resolveComposition(editor) {
    if (stillComposing) {
      return;
    }
    var mutations = nullthrows$7(domObserver).stopAndFlushMutations();
    domObserver = null;
    resolved = true;
    var editorState = EditorState$n.set(editor._latestEditorState, {
      inCompositionMode: false
    });
    editor.exitCurrentMode();
    if (!mutations.size) {
      editor.update(editorState);
      return;
    }
    var contentState = editorState.getCurrentContent();
    mutations.forEach(function(composedChars, offsetKey) {
      var _DraftOffsetKey$decod = DraftOffsetKey$2.decode(offsetKey), blockKey = _DraftOffsetKey$decod.blockKey, decoratorKey = _DraftOffsetKey$decod.decoratorKey, leafKey = _DraftOffsetKey$decod.leafKey;
      var _editorState$getBlock = editorState.getBlockTree(blockKey).getIn([decoratorKey, "leaves", leafKey]), start = _editorState$getBlock.start, end = _editorState$getBlock.end;
      var replacementRange = editorState.getSelection().merge({
        anchorKey: blockKey,
        focusKey: blockKey,
        anchorOffset: start,
        focusOffset: end,
        isBackward: false
      });
      var entityKey = getEntityKeyForSelection$2(contentState, replacementRange);
      var currentStyle = contentState.getBlockForKey(blockKey).getInlineStyleAt(start);
      contentState = DraftModifier$c.replaceText(contentState, replacementRange, composedChars, currentStyle, entityKey);
      editorState = EditorState$n.set(editorState, {
        currentContent: contentState
      });
    });
    var documentSelection = getDraftEditorSelection(editorState, getContentEditableContainer(editor));
    var compositionEndSelectionState = documentSelection.selectionState;
    editor.restoreEditorDOM();
    var editorStateWithUpdatedSelection = isIE$2 ? EditorState$n.forceSelection(editorState, compositionEndSelectionState) : EditorState$n.acceptSelection(editorState, compositionEndSelectionState);
    editor.update(EditorState$n.push(editorStateWithUpdatedSelection, contentState, "insert-characters"));
  }
};
var DraftEditorCompositionHandler_1 = DraftEditorCompositionHandler$1;
var DraftEditorDecoratedLeaves_react;
var hasRequiredDraftEditorDecoratedLeaves_react;
function requireDraftEditorDecoratedLeaves_react() {
  if (hasRequiredDraftEditorDecoratedLeaves_react)
    return DraftEditorDecoratedLeaves_react;
  hasRequiredDraftEditorDecoratedLeaves_react = 1;
  var _assign2 = objectAssign;
  function _extends2() {
    _extends2 = _assign2 || function(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends2.apply(this, arguments);
  }
  function _inheritsLoose2(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var DraftOffsetKey2 = DraftOffsetKey_1;
  var React2 = reactExports;
  var UnicodeBidi2 = UnicodeBidi_1;
  var UnicodeBidiDirection2 = UnicodeBidiDirection_1;
  var DraftEditorDecoratedLeaves = /* @__PURE__ */ function(_React$Component) {
    _inheritsLoose2(DraftEditorDecoratedLeaves2, _React$Component);
    function DraftEditorDecoratedLeaves2() {
      return _React$Component.apply(this, arguments) || this;
    }
    var _proto = DraftEditorDecoratedLeaves2.prototype;
    _proto.render = function render() {
      var _this$props = this.props, block = _this$props.block, children = _this$props.children, contentState = _this$props.contentState, decorator = _this$props.decorator, decoratorKey = _this$props.decoratorKey, direction = _this$props.direction, leafSet = _this$props.leafSet, text = _this$props.text;
      var blockKey = block.getKey();
      var leavesForLeafSet = leafSet.get("leaves");
      var DecoratorComponent = decorator.getComponentForKey(decoratorKey);
      var decoratorProps = decorator.getPropsForKey(decoratorKey);
      var decoratorOffsetKey = DraftOffsetKey2.encode(blockKey, parseInt(decoratorKey, 10), 0);
      var decoratedText = text.slice(leavesForLeafSet.first().get("start"), leavesForLeafSet.last().get("end"));
      var dir = UnicodeBidiDirection2.getHTMLDirIfDifferent(UnicodeBidi2.getDirection(decoratedText), direction);
      return React2.createElement(DecoratorComponent, _extends2({}, decoratorProps, {
        contentState,
        decoratedText,
        dir,
        key: decoratorOffsetKey,
        entityKey: block.getEntityAt(leafSet.get("start")),
        offsetKey: decoratorOffsetKey
      }), children);
    };
    return DraftEditorDecoratedLeaves2;
  }(React2.Component);
  DraftEditorDecoratedLeaves_react = DraftEditorDecoratedLeaves;
  return DraftEditorDecoratedLeaves_react;
}
function _assertThisInitialized$3(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _inheritsLoose$4(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
function _defineProperty$9(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var React$4 = reactExports;
var UserAgent$b = UserAgent_1;
var invariant$d = invariant_1;
var isElement$4 = isElement_1;
var useNewlineChar = UserAgent$b.isBrowser("IE <= 11");
function isNewline(node) {
  return useNewlineChar ? node.textContent === "\n" : node.tagName === "BR";
}
var NEWLINE_A = function NEWLINE_A2(ref) {
  return useNewlineChar ? React$4.createElement("span", {
    key: "A",
    "data-text": "true",
    ref
  }, "\n") : React$4.createElement("br", {
    key: "A",
    "data-text": "true",
    ref
  });
};
var NEWLINE_B = function NEWLINE_B2(ref) {
  return useNewlineChar ? React$4.createElement("span", {
    key: "B",
    "data-text": "true",
    ref
  }, "\n") : React$4.createElement("br", {
    key: "B",
    "data-text": "true",
    ref
  });
};
var DraftEditorTextNode$1 = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose$4(DraftEditorTextNode2, _React$Component);
  function DraftEditorTextNode2(props) {
    var _this;
    _this = _React$Component.call(this, props) || this;
    _defineProperty$9(_assertThisInitialized$3(_this), "_forceFlag", void 0);
    _defineProperty$9(_assertThisInitialized$3(_this), "_node", void 0);
    _this._forceFlag = false;
    return _this;
  }
  var _proto = DraftEditorTextNode2.prototype;
  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    var node = this._node;
    var shouldBeNewline = nextProps.children === "";
    !isElement$4(node) ? invariant$d(false) : void 0;
    var elementNode = node;
    if (shouldBeNewline) {
      return !isNewline(elementNode);
    }
    return elementNode.textContent !== nextProps.children;
  };
  _proto.componentDidMount = function componentDidMount() {
    this._forceFlag = !this._forceFlag;
  };
  _proto.componentDidUpdate = function componentDidUpdate() {
    this._forceFlag = !this._forceFlag;
  };
  _proto.render = function render() {
    var _this2 = this;
    if (this.props.children === "") {
      return this._forceFlag ? NEWLINE_A(function(ref) {
        return _this2._node = ref;
      }) : NEWLINE_B(function(ref) {
        return _this2._node = ref;
      });
    }
    return React$4.createElement("span", {
      key: this._forceFlag ? "A" : "B",
      "data-text": "true",
      ref: function ref(_ref) {
        return _this2._node = _ref;
      }
    }, this.props.children);
  };
  return DraftEditorTextNode2;
}(React$4.Component);
var DraftEditorTextNode_react = DraftEditorTextNode$1;
var isElement$3 = isElement_1;
function isHTMLBRElement$2(node) {
  if (!node || !node.ownerDocument) {
    return false;
  }
  return isElement$3(node) && node.nodeName === "BR";
}
var isHTMLBRElement_1 = isHTMLBRElement$2;
function isNode$2(object) {
  var doc = object ? object.ownerDocument || object : document;
  var defaultView = doc.defaultView || window;
  return !!(object && (typeof defaultView.Node === "function" ? object instanceof defaultView.Node : typeof object === "object" && typeof object.nodeType === "number" && typeof object.nodeName === "string"));
}
var isNode_1 = isNode$2;
var isNode$1 = isNode_1;
function isTextNode$1(object) {
  return isNode$1(object) && object.nodeType == 3;
}
var isTextNode_1 = isTextNode$1;
var isTextNode = isTextNode_1;
function containsNode$3(outerNode, innerNode) {
  if (!outerNode || !innerNode) {
    return false;
  } else if (outerNode === innerNode) {
    return true;
  } else if (isTextNode(outerNode)) {
    return false;
  } else if (isTextNode(innerNode)) {
    return containsNode$3(outerNode, innerNode.parentNode);
  } else if ("contains" in outerNode) {
    return outerNode.contains(innerNode);
  } else if (outerNode.compareDocumentPosition) {
    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
  } else {
    return false;
  }
}
var containsNode_1 = containsNode$3;
function getActiveElement$2(doc) {
  doc = doc || (typeof document !== "undefined" ? document : void 0);
  if (typeof doc === "undefined") {
    return null;
  }
  try {
    return doc.activeElement || doc.body;
  } catch (e2) {
    return doc.body;
  }
}
var getActiveElement_1 = getActiveElement$2;
var DraftJsDebugLogging = DraftJsDebugLogging$2;
var UserAgent$a = UserAgent_1;
var containsNode$2 = containsNode_1;
var getActiveElement$1 = getActiveElement_1;
var getCorrectDocumentFromNode$2 = getCorrectDocumentFromNode_1;
var invariant$c = invariant_1;
var isElement$2 = isElement_1;
var isIE$1 = UserAgent$a.isBrowser("IE");
function getAnonymizedDOM(node, getNodeLabels) {
  if (!node) {
    return "[empty]";
  }
  var anonymized = anonymizeTextWithin(node, getNodeLabels);
  if (anonymized.nodeType === Node.TEXT_NODE) {
    return anonymized.textContent;
  }
  !isElement$2(anonymized) ? invariant$c(false) : void 0;
  var castedElement = anonymized;
  return castedElement.outerHTML;
}
function anonymizeTextWithin(node, getNodeLabels) {
  var labels = getNodeLabels !== void 0 ? getNodeLabels(node) : [];
  if (node.nodeType === Node.TEXT_NODE) {
    var length = node.textContent.length;
    return getCorrectDocumentFromNode$2(node).createTextNode("[text " + length + (labels.length ? " | " + labels.join(", ") : "") + "]");
  }
  var clone = node.cloneNode();
  if (clone.nodeType === 1 && labels.length) {
    clone.setAttribute("data-labels", labels.join(", "));
  }
  var childNodes = node.childNodes;
  for (var ii2 = 0; ii2 < childNodes.length; ii2++) {
    clone.appendChild(anonymizeTextWithin(childNodes[ii2], getNodeLabels));
  }
  return clone;
}
function getAnonymizedEditorDOM(node, getNodeLabels) {
  var currentNode = node;
  var castedNode = currentNode;
  while (currentNode) {
    if (isElement$2(currentNode) && castedNode.hasAttribute("contenteditable")) {
      return getAnonymizedDOM(currentNode, getNodeLabels);
    } else {
      currentNode = currentNode.parentNode;
      castedNode = currentNode;
    }
  }
  return "Could not find contentEditable parent of node";
}
function getNodeLength$1(node) {
  return node.nodeValue === null ? node.childNodes.length : node.nodeValue.length;
}
function setDraftEditorSelection$1(selectionState, node, blockKey, nodeStart, nodeEnd) {
  var documentObject = getCorrectDocumentFromNode$2(node);
  if (!containsNode$2(documentObject.documentElement, node)) {
    return;
  }
  var selection = documentObject.defaultView.getSelection();
  var anchorKey = selectionState.getAnchorKey();
  var anchorOffset = selectionState.getAnchorOffset();
  var focusKey = selectionState.getFocusKey();
  var focusOffset = selectionState.getFocusOffset();
  var isBackward = selectionState.getIsBackward();
  if (!selection.extend && isBackward) {
    var tempKey = anchorKey;
    var tempOffset = anchorOffset;
    anchorKey = focusKey;
    anchorOffset = focusOffset;
    focusKey = tempKey;
    focusOffset = tempOffset;
    isBackward = false;
  }
  var hasAnchor = anchorKey === blockKey && nodeStart <= anchorOffset && nodeEnd >= anchorOffset;
  var hasFocus = focusKey === blockKey && nodeStart <= focusOffset && nodeEnd >= focusOffset;
  if (hasAnchor && hasFocus) {
    selection.removeAllRanges();
    addPointToSelection(selection, node, anchorOffset - nodeStart, selectionState);
    addFocusToSelection(selection, node, focusOffset - nodeStart, selectionState);
    return;
  }
  if (!isBackward) {
    if (hasAnchor) {
      selection.removeAllRanges();
      addPointToSelection(selection, node, anchorOffset - nodeStart, selectionState);
    }
    if (hasFocus) {
      addFocusToSelection(selection, node, focusOffset - nodeStart, selectionState);
    }
  } else {
    if (hasFocus) {
      selection.removeAllRanges();
      addPointToSelection(selection, node, focusOffset - nodeStart, selectionState);
    }
    if (hasAnchor) {
      var storedFocusNode = selection.focusNode;
      var storedFocusOffset = selection.focusOffset;
      selection.removeAllRanges();
      addPointToSelection(selection, node, anchorOffset - nodeStart, selectionState);
      addFocusToSelection(selection, storedFocusNode, storedFocusOffset, selectionState);
    }
  }
}
function addFocusToSelection(selection, node, offset, selectionState) {
  var activeElement = getActiveElement$1();
  var extend2 = selection.extend;
  if (extend2 && node != null && containsNode$2(activeElement, node)) {
    if (offset > getNodeLength$1(node)) {
      DraftJsDebugLogging.logSelectionStateFailure({
        anonymizedDom: getAnonymizedEditorDOM(node),
        extraParams: JSON.stringify({
          offset
        }),
        selectionState: JSON.stringify(selectionState.toJS())
      });
    }
    var nodeWasFocus = node === selection.focusNode;
    try {
      if (selection.rangeCount > 0 && selection.extend) {
        selection.extend(node, offset);
      }
    } catch (e2) {
      DraftJsDebugLogging.logSelectionStateFailure({
        anonymizedDom: getAnonymizedEditorDOM(node, function(n2) {
          var labels = [];
          if (n2 === activeElement) {
            labels.push("active element");
          }
          if (n2 === selection.anchorNode) {
            labels.push("selection anchor node");
          }
          if (n2 === selection.focusNode) {
            labels.push("selection focus node");
          }
          return labels;
        }),
        extraParams: JSON.stringify({
          activeElementName: activeElement ? activeElement.nodeName : null,
          nodeIsFocus: node === selection.focusNode,
          nodeWasFocus,
          selectionRangeCount: selection.rangeCount,
          selectionAnchorNodeName: selection.anchorNode ? selection.anchorNode.nodeName : null,
          selectionAnchorOffset: selection.anchorOffset,
          selectionFocusNodeName: selection.focusNode ? selection.focusNode.nodeName : null,
          selectionFocusOffset: selection.focusOffset,
          message: e2 ? "" + e2 : null,
          offset
        }, null, 2),
        selectionState: JSON.stringify(selectionState.toJS(), null, 2)
      });
      throw e2;
    }
  } else {
    if (node && selection.rangeCount > 0) {
      var range = selection.getRangeAt(0);
      range.setEnd(node, offset);
      selection.addRange(range.cloneRange());
    }
  }
}
function addPointToSelection(selection, node, offset, selectionState) {
  var range = getCorrectDocumentFromNode$2(node).createRange();
  if (offset > getNodeLength$1(node)) {
    DraftJsDebugLogging.logSelectionStateFailure({
      anonymizedDom: getAnonymizedEditorDOM(node),
      extraParams: JSON.stringify({
        offset
      }),
      selectionState: JSON.stringify(selectionState.toJS())
    });
  }
  range.setStart(node, offset);
  if (isIE$1) {
    try {
      selection.addRange(range);
    } catch (e2) {
    }
  } else {
    selection.addRange(range);
  }
}
var setDraftEditorSelection_1 = {
  setDraftEditorSelection: setDraftEditorSelection$1,
  addFocusToSelection
};
var _assign$2 = objectAssign;
function _assertThisInitialized$2(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _inheritsLoose$3(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
function _defineProperty$8(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DraftEditorTextNode = DraftEditorTextNode_react;
var React$3 = reactExports;
var invariant$b = invariant_1;
var isHTMLBRElement$1 = isHTMLBRElement_1;
var setDraftEditorSelection = setDraftEditorSelection_1.setDraftEditorSelection;
var DraftEditorLeaf$1 = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose$3(DraftEditorLeaf2, _React$Component);
  function DraftEditorLeaf2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _defineProperty$8(_assertThisInitialized$2(_this), "leaf", void 0);
    return _this;
  }
  var _proto = DraftEditorLeaf2.prototype;
  _proto._setSelection = function _setSelection() {
    var selection = this.props.selection;
    if (selection == null || !selection.getHasFocus()) {
      return;
    }
    var _this$props = this.props, block = _this$props.block, start = _this$props.start, text = _this$props.text;
    var blockKey = block.getKey();
    var end = start + text.length;
    if (!selection.hasEdgeWithin(blockKey, start, end)) {
      return;
    }
    var node = this.leaf;
    !node ? invariant$b(false) : void 0;
    var child = node.firstChild;
    !child ? invariant$b(false) : void 0;
    var targetNode;
    if (child.nodeType === Node.TEXT_NODE) {
      targetNode = child;
    } else if (isHTMLBRElement$1(child)) {
      targetNode = node;
    } else {
      targetNode = child.firstChild;
      !targetNode ? invariant$b(false) : void 0;
    }
    setDraftEditorSelection(selection, targetNode, blockKey, start, end);
  };
  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    var leafNode = this.leaf;
    !leafNode ? invariant$b(false) : void 0;
    var shouldUpdate = leafNode.textContent !== nextProps.text || nextProps.styleSet !== this.props.styleSet || nextProps.forceSelection;
    return shouldUpdate;
  };
  _proto.componentDidUpdate = function componentDidUpdate() {
    this._setSelection();
  };
  _proto.componentDidMount = function componentDidMount() {
    this._setSelection();
  };
  _proto.render = function render() {
    var _this2 = this;
    var block = this.props.block;
    var text = this.props.text;
    if (text.endsWith("\n") && this.props.isLast) {
      text += "\n";
    }
    var _this$props2 = this.props, customStyleMap = _this$props2.customStyleMap, customStyleFn = _this$props2.customStyleFn, offsetKey = _this$props2.offsetKey, styleSet = _this$props2.styleSet;
    var styleObj = styleSet.reduce(function(map, styleName) {
      var mergedStyles = {};
      var style = customStyleMap[styleName];
      if (style !== void 0 && map.textDecoration !== style.textDecoration) {
        mergedStyles.textDecoration = [map.textDecoration, style.textDecoration].join(" ").trim();
      }
      return _assign$2(map, style, mergedStyles);
    }, {});
    if (customStyleFn) {
      var newStyles = customStyleFn(styleSet, block);
      styleObj = _assign$2(styleObj, newStyles);
    }
    return React$3.createElement("span", {
      "data-offset-key": offsetKey,
      ref: function ref(_ref) {
        return _this2.leaf = _ref;
      },
      style: styleObj
    }, React$3.createElement(DraftEditorTextNode, null, text));
  };
  return DraftEditorLeaf2;
}(React$3.Component);
var DraftEditorLeaf_react = DraftEditorLeaf$1;
var DraftEditorNode_react;
var hasRequiredDraftEditorNode_react;
function requireDraftEditorNode_react() {
  if (hasRequiredDraftEditorNode_react)
    return DraftEditorNode_react;
  hasRequiredDraftEditorNode_react = 1;
  function _inheritsLoose2(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var DraftEditorDecoratedLeaves = requireDraftEditorDecoratedLeaves_react();
  var DraftEditorLeaf2 = DraftEditorLeaf_react;
  var DraftOffsetKey2 = DraftOffsetKey_1;
  var Immutable2 = immutableExports;
  var React2 = reactExports;
  var cx2 = cx_1;
  Immutable2.List;
  var DraftEditorNode = /* @__PURE__ */ function(_React$Component) {
    _inheritsLoose2(DraftEditorNode2, _React$Component);
    function DraftEditorNode2() {
      return _React$Component.apply(this, arguments) || this;
    }
    var _proto = DraftEditorNode2.prototype;
    _proto.render = function render() {
      var _this$props = this.props, block = _this$props.block, contentState = _this$props.contentState, customStyleFn = _this$props.customStyleFn, customStyleMap = _this$props.customStyleMap, decorator = _this$props.decorator, direction = _this$props.direction, forceSelection = _this$props.forceSelection, hasSelection = _this$props.hasSelection, selection = _this$props.selection, tree = _this$props.tree;
      var blockKey = block.getKey();
      var text = block.getText();
      var lastLeafSet = tree.size - 1;
      var children = this.props.children || tree.map(function(leafSet, ii2) {
        var decoratorKey = leafSet.get("decoratorKey");
        var leavesForLeafSet = leafSet.get("leaves");
        var lastLeaf = leavesForLeafSet.size - 1;
        var Leaves = leavesForLeafSet.map(function(leaf, jj2) {
          var offsetKey = DraftOffsetKey2.encode(blockKey, ii2, jj2);
          var start = leaf.get("start");
          var end = leaf.get("end");
          return React2.createElement(DraftEditorLeaf2, {
            key: offsetKey,
            offsetKey,
            block,
            start,
            selection: hasSelection ? selection : null,
            forceSelection,
            text: text.slice(start, end),
            styleSet: block.getInlineStyleAt(start),
            customStyleMap,
            customStyleFn,
            isLast: decoratorKey === lastLeafSet && jj2 === lastLeaf
          });
        }).toArray();
        if (!decoratorKey || !decorator) {
          return Leaves;
        }
        return React2.createElement(DraftEditorDecoratedLeaves, {
          block,
          children: Leaves,
          contentState,
          decorator,
          decoratorKey,
          direction,
          leafSet,
          text,
          key: ii2
        });
      }).toArray();
      return React2.createElement("div", {
        "data-offset-key": DraftOffsetKey2.encode(blockKey, 0, 0),
        className: cx2({
          "public/DraftStyleDefault/block": true,
          "public/DraftStyleDefault/ltr": direction === "LTR",
          "public/DraftStyleDefault/rtl": direction === "RTL"
        })
      }, children);
    };
    return DraftEditorNode2;
  }(React2.Component);
  DraftEditorNode_react = DraftEditorNode;
  return DraftEditorNode_react;
}
function _isViewportScrollElement(element, doc) {
  return !!doc && (element === doc.documentElement || element === doc.body);
}
var Scroll$2 = {
  /**
   * @param {DOMElement} element
   * @return {number}
   */
  getTop: function getTop(element) {
    var doc = element.ownerDocument;
    return _isViewportScrollElement(element, doc) ? (
      // In practice, they will either both have the same value,
      // or one will be zero and the other will be the scroll position
      // of the viewport. So we can use `X || Y` instead of `Math.max(X, Y)`
      doc.body.scrollTop || doc.documentElement.scrollTop
    ) : element.scrollTop;
  },
  /**
   * @param {DOMElement} element
   * @param {number} newTop
   */
  setTop: function setTop(element, newTop) {
    var doc = element.ownerDocument;
    if (_isViewportScrollElement(element, doc)) {
      doc.body.scrollTop = doc.documentElement.scrollTop = newTop;
    } else {
      element.scrollTop = newTop;
    }
  },
  /**
   * @param {DOMElement} element
   * @return {number}
   */
  getLeft: function getLeft(element) {
    var doc = element.ownerDocument;
    return _isViewportScrollElement(element, doc) ? doc.body.scrollLeft || doc.documentElement.scrollLeft : element.scrollLeft;
  },
  /**
   * @param {DOMElement} element
   * @param {number} newLeft
   */
  setLeft: function setLeft(element, newLeft) {
    var doc = element.ownerDocument;
    if (_isViewportScrollElement(element, doc)) {
      doc.body.scrollLeft = doc.documentElement.scrollLeft = newLeft;
    } else {
      element.scrollLeft = newLeft;
    }
  }
};
var Scroll_1 = Scroll$2;
var _hyphenPattern = /-(.)/g;
function camelize$1(string) {
  return string.replace(_hyphenPattern, function(_2, character) {
    return character.toUpperCase();
  });
}
var camelize_1 = camelize$1;
var _uppercasePattern = /([A-Z])/g;
function hyphenate$1(string) {
  return string.replace(_uppercasePattern, "-$1").toLowerCase();
}
var hyphenate_1 = hyphenate$1;
var camelize = camelize_1;
var hyphenate = hyphenate_1;
function asString(value) {
  return value == null ? value : String(value);
}
function getStyleProperty$1(node, name) {
  var computedStyle;
  if (window.getComputedStyle) {
    computedStyle = window.getComputedStyle(node, null);
    if (computedStyle) {
      return asString(computedStyle.getPropertyValue(hyphenate(name)));
    }
  }
  if (document.defaultView && document.defaultView.getComputedStyle) {
    computedStyle = document.defaultView.getComputedStyle(node, null);
    if (computedStyle) {
      return asString(computedStyle.getPropertyValue(hyphenate(name)));
    }
    if (name === "display") {
      return "none";
    }
  }
  if (node.currentStyle) {
    if (name === "float") {
      return asString(node.currentStyle.cssFloat || node.currentStyle.styleFloat);
    }
    return asString(node.currentStyle[camelize(name)]);
  }
  return asString(node.style && node.style[camelize(name)]);
}
var getStyleProperty_1 = getStyleProperty$1;
var getStyleProperty = getStyleProperty_1;
function _isNodeScrollable(element, name) {
  var overflow = Style$3.get(element, name);
  return overflow === "auto" || overflow === "scroll";
}
var Style$3 = {
  /**
   * Gets the style property for the supplied node. This will return either the
   * computed style, if available, or the declared style.
   *
   * @param {DOMNode} node
   * @param {string} name Style property name.
   * @return {?string} Style property value.
   */
  get: getStyleProperty,
  /**
   * Determines the nearest ancestor of a node that is scrollable.
   *
   * NOTE: This can be expensive if used repeatedly or on a node nested deeply.
   *
   * @param {?DOMNode} node Node from which to start searching.
   * @return {?DOMWindow|DOMElement} Scroll parent of the supplied node.
   */
  getScrollParent: function getScrollParent(node) {
    if (!node) {
      return null;
    }
    var ownerDocument = node.ownerDocument;
    while (node && node !== ownerDocument.body) {
      if (_isNodeScrollable(node, "overflow") || _isNodeScrollable(node, "overflowY") || _isNodeScrollable(node, "overflowX")) {
        return node;
      }
      node = node.parentNode;
    }
    return ownerDocument.defaultView || ownerDocument.parentWindow;
  }
};
var Style_1 = Style$3;
var containsNode$1 = containsNode_1;
function getElementRect$1(elem) {
  var docElem = elem.ownerDocument.documentElement;
  if (!("getBoundingClientRect" in elem) || !containsNode$1(docElem, elem)) {
    return {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };
  }
  var rect = elem.getBoundingClientRect();
  return {
    left: Math.round(rect.left) - docElem.clientLeft,
    right: Math.round(rect.right) - docElem.clientLeft,
    top: Math.round(rect.top) - docElem.clientTop,
    bottom: Math.round(rect.bottom) - docElem.clientTop
  };
}
var getElementRect_1 = getElementRect$1;
var getElementRect = getElementRect_1;
function getElementPosition$1(element) {
  var rect = getElementRect(element);
  return {
    x: rect.left,
    y: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };
}
var getElementPosition_1 = getElementPosition$1;
var isWebkit = typeof navigator !== "undefined" && navigator.userAgent.indexOf("AppleWebKit") > -1;
function getDocumentScrollElement$1(doc) {
  doc = doc || document;
  if (doc.scrollingElement) {
    return doc.scrollingElement;
  }
  return !isWebkit && doc.compatMode === "CSS1Compat" ? doc.documentElement : doc.body;
}
var getDocumentScrollElement_1 = getDocumentScrollElement$1;
function getUnboundedScrollPosition$1(scrollable) {
  if (scrollable.Window && scrollable instanceof scrollable.Window) {
    return {
      x: scrollable.pageXOffset || scrollable.document.documentElement.scrollLeft,
      y: scrollable.pageYOffset || scrollable.document.documentElement.scrollTop
    };
  }
  return {
    x: scrollable.scrollLeft,
    y: scrollable.scrollTop
  };
}
var getUnboundedScrollPosition_1 = getUnboundedScrollPosition$1;
var getDocumentScrollElement = getDocumentScrollElement_1;
var getUnboundedScrollPosition = getUnboundedScrollPosition_1;
function getScrollPosition$3(scrollable) {
  var documentScrollElement = getDocumentScrollElement(scrollable.ownerDocument || scrollable.document);
  if (scrollable.Window && scrollable instanceof scrollable.Window) {
    scrollable = documentScrollElement;
  }
  var scrollPosition = getUnboundedScrollPosition(scrollable);
  var viewport = scrollable === documentScrollElement ? scrollable.ownerDocument.documentElement : scrollable;
  var xMax = scrollable.scrollWidth - viewport.clientWidth;
  var yMax = scrollable.scrollHeight - viewport.clientHeight;
  scrollPosition.x = Math.max(0, Math.min(scrollPosition.x, xMax));
  scrollPosition.y = Math.max(0, Math.min(scrollPosition.y, yMax));
  return scrollPosition;
}
var getScrollPosition_1 = getScrollPosition$3;
function getViewportWidth() {
  var width;
  if (document.documentElement) {
    width = document.documentElement.clientWidth;
  }
  if (!width && document.body) {
    width = document.body.clientWidth;
  }
  return width || 0;
}
function getViewportHeight() {
  var height;
  if (document.documentElement) {
    height = document.documentElement.clientHeight;
  }
  if (!height && document.body) {
    height = document.body.clientHeight;
  }
  return height || 0;
}
function getViewportDimensions$1() {
  return {
    width: window.innerWidth || getViewportWidth(),
    height: window.innerHeight || getViewportHeight()
  };
}
getViewportDimensions$1.withoutScrollbars = function() {
  return {
    width: getViewportWidth(),
    height: getViewportHeight()
  };
};
var getViewportDimensions_1 = getViewportDimensions$1;
var DraftEditorBlockNode_react;
var hasRequiredDraftEditorBlockNode_react;
function requireDraftEditorBlockNode_react() {
  if (hasRequiredDraftEditorBlockNode_react)
    return DraftEditorBlockNode_react;
  hasRequiredDraftEditorBlockNode_react = 1;
  var _assign2 = objectAssign;
  function _extends2() {
    _extends2 = _assign2 || function(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends2.apply(this, arguments);
  }
  function _assertThisInitialized2(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _inheritsLoose2(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  function _objectSpread3(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      var ownKeys2 = Object.keys(source);
      if (typeof Object.getOwnPropertySymbols === "function") {
        ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }
      ownKeys2.forEach(function(key) {
        _defineProperty2(target, key, source[key]);
      });
    }
    return target;
  }
  function _defineProperty2(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var DraftEditorNode = requireDraftEditorNode_react();
  var DraftOffsetKey2 = DraftOffsetKey_1;
  var React2 = reactExports;
  var Scroll2 = Scroll_1;
  var Style2 = Style_1;
  var getElementPosition2 = getElementPosition_1;
  var getScrollPosition2 = getScrollPosition_1;
  var getViewportDimensions2 = getViewportDimensions_1;
  var Immutable2 = immutableExports;
  var invariant2 = invariant_1;
  var isHTMLElement2 = isHTMLElement_1;
  var SCROLL_BUFFER2 = 10;
  Immutable2.List;
  var isBlockOnSelectionEdge3 = function isBlockOnSelectionEdge4(selection, key) {
    return selection.getAnchorKey() === key || selection.getFocusKey() === key;
  };
  var shouldNotAddWrapperElement = function shouldNotAddWrapperElement2(block, contentState) {
    var nextSiblingKey = block.getNextSiblingKey();
    return nextSiblingKey ? contentState.getBlockForKey(nextSiblingKey).getType() === block.getType() : false;
  };
  var applyWrapperElementToSiblings = function applyWrapperElementToSiblings2(wrapperTemplate, Element2, nodes) {
    var wrappedSiblings = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = void 0;
    try {
      for (var _iterator = nodes.reverse()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var sibling = _step.value;
        if (sibling.type !== Element2) {
          break;
        }
        wrappedSiblings.push(sibling);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
    nodes.splice(nodes.indexOf(wrappedSiblings[0]), wrappedSiblings.length + 1);
    var childrenIs = wrappedSiblings.reverse();
    var key = childrenIs[0].key;
    nodes.push(React2.cloneElement(wrapperTemplate, {
      key: "".concat(key, "-wrap"),
      "data-offset-key": DraftOffsetKey2.encode(key, 0, 0)
    }, childrenIs));
    return nodes;
  };
  var getDraftRenderConfig = function getDraftRenderConfig2(block, blockRenderMap) {
    var configForType = blockRenderMap.get(block.getType()) || blockRenderMap.get("unstyled");
    var wrapperTemplate = configForType.wrapper;
    var Element2 = configForType.element || blockRenderMap.get("unstyled").element;
    return {
      Element: Element2,
      wrapperTemplate
    };
  };
  var getCustomRenderConfig = function getCustomRenderConfig2(block, blockRendererFn2) {
    var customRenderer = blockRendererFn2(block);
    if (!customRenderer) {
      return {};
    }
    var CustomComponent = customRenderer.component, customProps = customRenderer.props, customEditable = customRenderer.editable;
    return {
      CustomComponent,
      customProps,
      customEditable
    };
  };
  var getElementPropsConfig = function getElementPropsConfig2(block, editorKey, offsetKey, blockStyleFn2, customConfig, ref) {
    var elementProps = {
      "data-block": true,
      "data-editor": editorKey,
      "data-offset-key": offsetKey,
      key: block.getKey(),
      ref
    };
    var customClass = blockStyleFn2(block);
    if (customClass) {
      elementProps.className = customClass;
    }
    if (customConfig.customEditable !== void 0) {
      elementProps = _objectSpread3({}, elementProps, {
        contentEditable: customConfig.customEditable,
        suppressContentEditableWarning: true
      });
    }
    return elementProps;
  };
  var DraftEditorBlockNode = /* @__PURE__ */ function(_React$Component) {
    _inheritsLoose2(DraftEditorBlockNode2, _React$Component);
    function DraftEditorBlockNode2() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _defineProperty2(_assertThisInitialized2(_this), "wrapperRef", React2.createRef());
      return _this;
    }
    var _proto = DraftEditorBlockNode2.prototype;
    _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
      var _this$props = this.props, block = _this$props.block, direction = _this$props.direction, tree = _this$props.tree;
      var isContainerNode = !block.getChildKeys().isEmpty();
      var blockHasChanged = block !== nextProps.block || tree !== nextProps.tree || direction !== nextProps.direction || isBlockOnSelectionEdge3(nextProps.selection, nextProps.block.getKey()) && nextProps.forceSelection;
      return isContainerNode || blockHasChanged;
    };
    _proto.componentDidMount = function componentDidMount() {
      var selection = this.props.selection;
      var endKey = selection.getEndKey();
      if (!selection.getHasFocus() || endKey !== this.props.block.getKey()) {
        return;
      }
      var blockNode = this.wrapperRef.current;
      if (!blockNode) {
        return;
      }
      var scrollParent = Style2.getScrollParent(blockNode);
      var scrollPosition = getScrollPosition2(scrollParent);
      var scrollDelta;
      if (scrollParent === window) {
        var nodePosition = getElementPosition2(blockNode);
        var nodeBottom = nodePosition.y + nodePosition.height;
        var viewportHeight = getViewportDimensions2().height;
        scrollDelta = nodeBottom - viewportHeight;
        if (scrollDelta > 0) {
          window.scrollTo(scrollPosition.x, scrollPosition.y + scrollDelta + SCROLL_BUFFER2);
        }
      } else {
        !isHTMLElement2(blockNode) ? invariant2(false) : void 0;
        var htmlBlockNode = blockNode;
        var blockBottom = htmlBlockNode.offsetHeight + htmlBlockNode.offsetTop;
        var scrollBottom = scrollParent.offsetHeight + scrollPosition.y;
        scrollDelta = blockBottom - scrollBottom;
        if (scrollDelta > 0) {
          Scroll2.setTop(scrollParent, Scroll2.getTop(scrollParent) + scrollDelta + SCROLL_BUFFER2);
        }
      }
    };
    _proto.render = function render() {
      var _this2 = this;
      var _this$props2 = this.props, block = _this$props2.block, blockRenderMap = _this$props2.blockRenderMap, blockRendererFn2 = _this$props2.blockRendererFn, blockStyleFn2 = _this$props2.blockStyleFn, contentState = _this$props2.contentState, decorator = _this$props2.decorator, editorKey = _this$props2.editorKey, editorState = _this$props2.editorState, customStyleFn = _this$props2.customStyleFn, customStyleMap = _this$props2.customStyleMap, direction = _this$props2.direction, forceSelection = _this$props2.forceSelection, selection = _this$props2.selection, tree = _this$props2.tree;
      var children = null;
      if (block.children.size) {
        children = block.children.reduce(function(acc, key) {
          var offsetKey2 = DraftOffsetKey2.encode(key, 0, 0);
          var child = contentState.getBlockForKey(key);
          var customConfig2 = getCustomRenderConfig(child, blockRendererFn2);
          var Component2 = customConfig2.CustomComponent || DraftEditorBlockNode2;
          var _getDraftRenderConfig = getDraftRenderConfig(child, blockRenderMap), Element3 = _getDraftRenderConfig.Element, wrapperTemplate = _getDraftRenderConfig.wrapperTemplate;
          var elementProps2 = getElementPropsConfig(child, editorKey, offsetKey2, blockStyleFn2, customConfig2, null);
          var childProps = _objectSpread3({}, _this2.props, {
            tree: editorState.getBlockTree(key),
            blockProps: customConfig2.customProps,
            offsetKey: offsetKey2,
            block: child
          });
          acc.push(React2.createElement(Element3, elementProps2, React2.createElement(Component2, childProps)));
          if (!wrapperTemplate || shouldNotAddWrapperElement(child, contentState)) {
            return acc;
          }
          applyWrapperElementToSiblings(wrapperTemplate, Element3, acc);
          return acc;
        }, []);
      }
      var blockKey = block.getKey();
      var offsetKey = DraftOffsetKey2.encode(blockKey, 0, 0);
      var customConfig = getCustomRenderConfig(block, blockRendererFn2);
      var Component = customConfig.CustomComponent;
      var blockNode = Component != null ? React2.createElement(Component, _extends2({}, this.props, {
        tree: editorState.getBlockTree(blockKey),
        blockProps: customConfig.customProps,
        offsetKey,
        block
      })) : React2.createElement(DraftEditorNode, {
        block,
        children,
        contentState,
        customStyleFn,
        customStyleMap,
        decorator,
        direction,
        forceSelection,
        hasSelection: isBlockOnSelectionEdge3(selection, blockKey),
        selection,
        tree
      });
      if (block.getParentKey()) {
        return blockNode;
      }
      var _getDraftRenderConfig2 = getDraftRenderConfig(block, blockRenderMap), Element2 = _getDraftRenderConfig2.Element;
      var elementProps = getElementPropsConfig(block, editorKey, offsetKey, blockStyleFn2, customConfig, this.wrapperRef);
      return React2.createElement(Element2, elementProps, blockNode);
    };
    return DraftEditorBlockNode2;
  }(React2.Component);
  DraftEditorBlockNode_react = DraftEditorBlockNode;
  return DraftEditorBlockNode_react;
}
var DraftEditorContentsExperimental_react;
var hasRequiredDraftEditorContentsExperimental_react;
function requireDraftEditorContentsExperimental_react() {
  if (hasRequiredDraftEditorContentsExperimental_react)
    return DraftEditorContentsExperimental_react;
  hasRequiredDraftEditorContentsExperimental_react = 1;
  var _assign2 = objectAssign;
  function _extends2() {
    _extends2 = _assign2 || function(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends2.apply(this, arguments);
  }
  function _inheritsLoose2(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var DraftEditorBlockNode = requireDraftEditorBlockNode_react();
  var DraftOffsetKey2 = DraftOffsetKey_1;
  var React2 = reactExports;
  var nullthrows3 = nullthrows_1;
  var DraftEditorContentsExperimental = /* @__PURE__ */ function(_React$Component) {
    _inheritsLoose2(DraftEditorContentsExperimental2, _React$Component);
    function DraftEditorContentsExperimental2() {
      return _React$Component.apply(this, arguments) || this;
    }
    var _proto = DraftEditorContentsExperimental2.prototype;
    _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
      var prevEditorState = this.props.editorState;
      var nextEditorState = nextProps.editorState;
      var prevDirectionMap = prevEditorState.getDirectionMap();
      var nextDirectionMap = nextEditorState.getDirectionMap();
      if (prevDirectionMap !== nextDirectionMap) {
        return true;
      }
      var didHaveFocus = prevEditorState.getSelection().getHasFocus();
      var nowHasFocus = nextEditorState.getSelection().getHasFocus();
      if (didHaveFocus !== nowHasFocus) {
        return true;
      }
      var nextNativeContent = nextEditorState.getNativelyRenderedContent();
      var wasComposing = prevEditorState.isInCompositionMode();
      var nowComposing = nextEditorState.isInCompositionMode();
      if (prevEditorState === nextEditorState || nextNativeContent !== null && nextEditorState.getCurrentContent() === nextNativeContent || wasComposing && nowComposing) {
        return false;
      }
      var prevContent = prevEditorState.getCurrentContent();
      var nextContent = nextEditorState.getCurrentContent();
      var prevDecorator = prevEditorState.getDecorator();
      var nextDecorator = nextEditorState.getDecorator();
      return wasComposing !== nowComposing || prevContent !== nextContent || prevDecorator !== nextDecorator || nextEditorState.mustForceSelection();
    };
    _proto.render = function render() {
      var _this$props = this.props, blockRenderMap = _this$props.blockRenderMap, blockRendererFn2 = _this$props.blockRendererFn, blockStyleFn2 = _this$props.blockStyleFn, customStyleMap = _this$props.customStyleMap, customStyleFn = _this$props.customStyleFn, editorState = _this$props.editorState, editorKey = _this$props.editorKey, textDirectionality = _this$props.textDirectionality;
      var content = editorState.getCurrentContent();
      var selection = editorState.getSelection();
      var forceSelection = editorState.mustForceSelection();
      var decorator = editorState.getDecorator();
      var directionMap = nullthrows3(editorState.getDirectionMap());
      var blocksAsArray = content.getBlocksAsArray();
      var rootBlock = blocksAsArray[0];
      var processedBlocks = [];
      var nodeBlock = rootBlock;
      while (nodeBlock) {
        var blockKey = nodeBlock.getKey();
        var blockProps = {
          blockRenderMap,
          blockRendererFn: blockRendererFn2,
          blockStyleFn: blockStyleFn2,
          contentState: content,
          customStyleFn,
          customStyleMap,
          decorator,
          editorKey,
          editorState,
          forceSelection,
          selection,
          block: nodeBlock,
          direction: textDirectionality ? textDirectionality : directionMap.get(blockKey),
          tree: editorState.getBlockTree(blockKey)
        };
        var configForType = blockRenderMap.get(nodeBlock.getType()) || blockRenderMap.get("unstyled");
        var wrapperTemplate = configForType.wrapper;
        processedBlocks.push({
          /* $FlowFixMe[incompatible-type] (>=0.112.0 site=www,mobile) This
           * comment suppresses an error found when Flow v0.112 was deployed. To
           * see the error delete this comment and run Flow. */
          block: React2.createElement(DraftEditorBlockNode, _extends2({
            key: blockKey
          }, blockProps)),
          wrapperTemplate,
          key: blockKey,
          offsetKey: DraftOffsetKey2.encode(blockKey, 0, 0)
        });
        var nextBlockKey = nodeBlock.getNextSiblingKey();
        nodeBlock = nextBlockKey ? content.getBlockForKey(nextBlockKey) : null;
      }
      var outputBlocks = [];
      for (var ii2 = 0; ii2 < processedBlocks.length; ) {
        var info = processedBlocks[ii2];
        if (info.wrapperTemplate) {
          var blocks = [];
          do {
            blocks.push(processedBlocks[ii2].block);
            ii2++;
          } while (ii2 < processedBlocks.length && processedBlocks[ii2].wrapperTemplate === info.wrapperTemplate);
          var wrapperElement = React2.cloneElement(info.wrapperTemplate, {
            key: info.key + "-wrap",
            "data-offset-key": info.offsetKey
          }, blocks);
          outputBlocks.push(wrapperElement);
        } else {
          outputBlocks.push(info.block);
          ii2++;
        }
      }
      return React2.createElement("div", {
        "data-contents": "true"
      }, outputBlocks);
    };
    return DraftEditorContentsExperimental2;
  }(React2.Component);
  DraftEditorContentsExperimental_react = DraftEditorContentsExperimental;
  return DraftEditorContentsExperimental_react;
}
var _assign$1 = objectAssign;
function _extends$1() {
  _extends$1 = _assign$1 || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function _assertThisInitialized$1(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _inheritsLoose$2(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
function _defineProperty$7(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DraftEditorLeaf = DraftEditorLeaf_react;
var DraftOffsetKey$1 = DraftOffsetKey_1;
var React$2 = reactExports;
var Scroll$1 = Scroll_1;
var Style$2 = Style_1;
var UnicodeBidi = UnicodeBidi_1;
var UnicodeBidiDirection = UnicodeBidiDirection_1;
var cx$3 = cx_1;
var getElementPosition = getElementPosition_1;
var getScrollPosition$2 = getScrollPosition_1;
var getViewportDimensions = getViewportDimensions_1;
var invariant$a = invariant_1;
var isHTMLElement$2 = isHTMLElement_1;
var nullthrows$6 = nullthrows_1;
var SCROLL_BUFFER = 10;
var isBlockOnSelectionEdge = function isBlockOnSelectionEdge2(selection, key) {
  return selection.getAnchorKey() === key || selection.getFocusKey() === key;
};
var DraftEditorBlock$1 = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose$2(DraftEditorBlock2, _React$Component);
  function DraftEditorBlock2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _defineProperty$7(_assertThisInitialized$1(_this), "_node", void 0);
    return _this;
  }
  var _proto = DraftEditorBlock2.prototype;
  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return this.props.block !== nextProps.block || this.props.tree !== nextProps.tree || this.props.direction !== nextProps.direction || isBlockOnSelectionEdge(nextProps.selection, nextProps.block.getKey()) && nextProps.forceSelection;
  };
  _proto.componentDidMount = function componentDidMount() {
    if (this.props.preventScroll) {
      return;
    }
    var selection = this.props.selection;
    var endKey = selection.getEndKey();
    if (!selection.getHasFocus() || endKey !== this.props.block.getKey()) {
      return;
    }
    var blockNode = this._node;
    if (blockNode == null) {
      return;
    }
    var scrollParent = Style$2.getScrollParent(blockNode);
    var scrollPosition = getScrollPosition$2(scrollParent);
    var scrollDelta;
    if (scrollParent === window) {
      var nodePosition = getElementPosition(blockNode);
      var nodeBottom = nodePosition.y + nodePosition.height;
      var viewportHeight = getViewportDimensions().height;
      scrollDelta = nodeBottom - viewportHeight;
      if (scrollDelta > 0) {
        window.scrollTo(scrollPosition.x, scrollPosition.y + scrollDelta + SCROLL_BUFFER);
      }
    } else {
      !isHTMLElement$2(blockNode) ? invariant$a(false) : void 0;
      var blockBottom = blockNode.offsetHeight + blockNode.offsetTop;
      var pOffset = scrollParent.offsetTop + scrollParent.offsetHeight;
      var scrollBottom = pOffset + scrollPosition.y;
      scrollDelta = blockBottom - scrollBottom;
      if (scrollDelta > 0) {
        Scroll$1.setTop(scrollParent, Scroll$1.getTop(scrollParent) + scrollDelta + SCROLL_BUFFER);
      }
    }
  };
  _proto._renderChildren = function _renderChildren() {
    var _this2 = this;
    var block = this.props.block;
    var blockKey = block.getKey();
    var text = block.getText();
    var lastLeafSet = this.props.tree.size - 1;
    var hasSelection = isBlockOnSelectionEdge(this.props.selection, blockKey);
    return this.props.tree.map(function(leafSet, ii2) {
      var leavesForLeafSet = leafSet.get("leaves");
      if (leavesForLeafSet.size === 0) {
        return null;
      }
      var lastLeaf = leavesForLeafSet.size - 1;
      var leaves = leavesForLeafSet.map(function(leaf, jj2) {
        var offsetKey = DraftOffsetKey$1.encode(blockKey, ii2, jj2);
        var start2 = leaf.get("start");
        var end2 = leaf.get("end");
        return React$2.createElement(DraftEditorLeaf, {
          key: offsetKey,
          offsetKey,
          block,
          start: start2,
          selection: hasSelection ? _this2.props.selection : null,
          forceSelection: _this2.props.forceSelection,
          text: text.slice(start2, end2),
          styleSet: block.getInlineStyleAt(start2),
          customStyleMap: _this2.props.customStyleMap,
          customStyleFn: _this2.props.customStyleFn,
          isLast: ii2 === lastLeafSet && jj2 === lastLeaf
        });
      }).toArray();
      var decoratorKey = leafSet.get("decoratorKey");
      if (decoratorKey == null) {
        return leaves;
      }
      if (!_this2.props.decorator) {
        return leaves;
      }
      var decorator = nullthrows$6(_this2.props.decorator);
      var DecoratorComponent = decorator.getComponentForKey(decoratorKey);
      if (!DecoratorComponent) {
        return leaves;
      }
      var decoratorProps = decorator.getPropsForKey(decoratorKey);
      var decoratorOffsetKey = DraftOffsetKey$1.encode(blockKey, ii2, 0);
      var start = leavesForLeafSet.first().get("start");
      var end = leavesForLeafSet.last().get("end");
      var decoratedText = text.slice(start, end);
      var entityKey = block.getEntityAt(leafSet.get("start"));
      var dir = UnicodeBidiDirection.getHTMLDirIfDifferent(UnicodeBidi.getDirection(decoratedText), _this2.props.direction);
      var commonProps = {
        contentState: _this2.props.contentState,
        decoratedText,
        dir,
        start,
        end,
        blockKey,
        entityKey,
        offsetKey: decoratorOffsetKey
      };
      return React$2.createElement(DecoratorComponent, _extends$1({}, decoratorProps, commonProps, {
        key: decoratorOffsetKey
      }), leaves);
    }).toArray();
  };
  _proto.render = function render() {
    var _this3 = this;
    var _this$props = this.props, direction = _this$props.direction, offsetKey = _this$props.offsetKey;
    var className = cx$3({
      "public/DraftStyleDefault/block": true,
      "public/DraftStyleDefault/ltr": direction === "LTR",
      "public/DraftStyleDefault/rtl": direction === "RTL"
    });
    return React$2.createElement("div", {
      "data-offset-key": offsetKey,
      className,
      ref: function ref(_ref) {
        return _this3._node = _ref;
      }
    }, this._renderChildren());
  };
  return DraftEditorBlock2;
}(React$2.Component);
var DraftEditorBlock_react = DraftEditorBlock$1;
var joinClasses_1;
var hasRequiredJoinClasses;
function requireJoinClasses() {
  if (hasRequiredJoinClasses)
    return joinClasses_1;
  hasRequiredJoinClasses = 1;
  function joinClasses(className) {
    var newClassName = className || "";
    var argLength = arguments.length;
    if (argLength > 1) {
      for (var index = 1; index < argLength; index++) {
        var nextClass = arguments[index];
        if (nextClass) {
          newClassName = (newClassName ? newClassName + " " : "") + nextClass;
        }
      }
    }
    return newClassName;
  }
  joinClasses_1 = joinClasses;
  return joinClasses_1;
}
var DraftEditorContentsCore_react;
var hasRequiredDraftEditorContentsCore_react;
function requireDraftEditorContentsCore_react() {
  if (hasRequiredDraftEditorContentsCore_react)
    return DraftEditorContentsCore_react;
  hasRequiredDraftEditorContentsCore_react = 1;
  var _assign2 = objectAssign;
  function _extends2() {
    _extends2 = _assign2 || function(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends2.apply(this, arguments);
  }
  function _objectSpread3(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      var ownKeys2 = Object.keys(source);
      if (typeof Object.getOwnPropertySymbols === "function") {
        ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }
      ownKeys2.forEach(function(key) {
        _defineProperty2(target, key, source[key]);
      });
    }
    return target;
  }
  function _defineProperty2(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inheritsLoose2(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var DraftEditorBlock2 = DraftEditorBlock_react;
  var DraftOffsetKey2 = DraftOffsetKey_1;
  var React2 = reactExports;
  var cx2 = cx_1;
  var joinClasses = requireJoinClasses();
  var nullthrows3 = nullthrows_1;
  var getListItemClasses = function getListItemClasses2(type, depth, shouldResetCount, direction) {
    return cx2({
      "public/DraftStyleDefault/unorderedListItem": type === "unordered-list-item",
      "public/DraftStyleDefault/orderedListItem": type === "ordered-list-item",
      "public/DraftStyleDefault/reset": shouldResetCount,
      "public/DraftStyleDefault/depth0": depth === 0,
      "public/DraftStyleDefault/depth1": depth === 1,
      "public/DraftStyleDefault/depth2": depth === 2,
      "public/DraftStyleDefault/depth3": depth === 3,
      "public/DraftStyleDefault/depth4": depth >= 4,
      "public/DraftStyleDefault/listLTR": direction === "LTR",
      "public/DraftStyleDefault/listRTL": direction === "RTL"
    });
  };
  var DraftEditorContents2 = /* @__PURE__ */ function(_React$Component) {
    _inheritsLoose2(DraftEditorContents3, _React$Component);
    function DraftEditorContents3() {
      return _React$Component.apply(this, arguments) || this;
    }
    var _proto = DraftEditorContents3.prototype;
    _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
      var prevEditorState = this.props.editorState;
      var nextEditorState = nextProps.editorState;
      var prevDirectionMap = prevEditorState.getDirectionMap();
      var nextDirectionMap = nextEditorState.getDirectionMap();
      if (prevDirectionMap !== nextDirectionMap) {
        return true;
      }
      var didHaveFocus = prevEditorState.getSelection().getHasFocus();
      var nowHasFocus = nextEditorState.getSelection().getHasFocus();
      if (didHaveFocus !== nowHasFocus) {
        return true;
      }
      var nextNativeContent = nextEditorState.getNativelyRenderedContent();
      var wasComposing = prevEditorState.isInCompositionMode();
      var nowComposing = nextEditorState.isInCompositionMode();
      if (prevEditorState === nextEditorState || nextNativeContent !== null && nextEditorState.getCurrentContent() === nextNativeContent || wasComposing && nowComposing) {
        return false;
      }
      var prevContent = prevEditorState.getCurrentContent();
      var nextContent = nextEditorState.getCurrentContent();
      var prevDecorator = prevEditorState.getDecorator();
      var nextDecorator = nextEditorState.getDecorator();
      return wasComposing !== nowComposing || prevContent !== nextContent || prevDecorator !== nextDecorator || nextEditorState.mustForceSelection();
    };
    _proto.render = function render() {
      var _this$props = this.props, blockRenderMap = _this$props.blockRenderMap, blockRendererFn2 = _this$props.blockRendererFn, blockStyleFn2 = _this$props.blockStyleFn, customStyleMap = _this$props.customStyleMap, customStyleFn = _this$props.customStyleFn, editorState = _this$props.editorState, editorKey = _this$props.editorKey, preventScroll = _this$props.preventScroll, textDirectionality = _this$props.textDirectionality;
      var content = editorState.getCurrentContent();
      var selection = editorState.getSelection();
      var forceSelection = editorState.mustForceSelection();
      var decorator = editorState.getDecorator();
      var directionMap = nullthrows3(editorState.getDirectionMap());
      var blocksAsArray = content.getBlocksAsArray();
      var processedBlocks = [];
      var currentDepth = null;
      var lastWrapperTemplate = null;
      for (var ii2 = 0; ii2 < blocksAsArray.length; ii2++) {
        var _block = blocksAsArray[ii2];
        var key = _block.getKey();
        var blockType = _block.getType();
        var customRenderer = blockRendererFn2(_block);
        var CustomComponent = void 0, customProps = void 0, customEditable = void 0;
        if (customRenderer) {
          CustomComponent = customRenderer.component;
          customProps = customRenderer.props;
          customEditable = customRenderer.editable;
        }
        var direction = textDirectionality ? textDirectionality : directionMap.get(key);
        var offsetKey = DraftOffsetKey2.encode(key, 0, 0);
        var componentProps = {
          contentState: content,
          block: _block,
          blockProps: customProps,
          blockStyleFn: blockStyleFn2,
          customStyleMap,
          customStyleFn,
          decorator,
          direction,
          forceSelection,
          offsetKey,
          preventScroll,
          selection,
          tree: editorState.getBlockTree(key)
        };
        var configForType = blockRenderMap.get(blockType) || blockRenderMap.get("unstyled");
        var wrapperTemplate = configForType.wrapper;
        var Element2 = configForType.element || blockRenderMap.get("unstyled").element;
        var depth = _block.getDepth();
        var _className = "";
        if (blockStyleFn2) {
          _className = blockStyleFn2(_block);
        }
        if (Element2 === "li") {
          var shouldResetCount = lastWrapperTemplate !== wrapperTemplate || currentDepth === null || depth > currentDepth;
          _className = joinClasses(_className, getListItemClasses(blockType, depth, shouldResetCount, direction));
        }
        var Component = CustomComponent || DraftEditorBlock2;
        var childProps = {
          className: _className,
          "data-block": true,
          "data-editor": editorKey,
          "data-offset-key": offsetKey,
          key
        };
        if (customEditable !== void 0) {
          childProps = _objectSpread3({}, childProps, {
            contentEditable: customEditable,
            suppressContentEditableWarning: true
          });
        }
        var child = React2.createElement(
          Element2,
          childProps,
          /* $FlowFixMe[incompatible-type] (>=0.112.0 site=www,mobile) This
           * comment suppresses an error found when Flow v0.112 was deployed. To
           * see the error delete this comment and run Flow. */
          React2.createElement(Component, _extends2({}, componentProps, {
            key
          }))
        );
        processedBlocks.push({
          block: child,
          wrapperTemplate,
          key,
          offsetKey
        });
        if (wrapperTemplate) {
          currentDepth = _block.getDepth();
        } else {
          currentDepth = null;
        }
        lastWrapperTemplate = wrapperTemplate;
      }
      var outputBlocks = [];
      for (var _ii = 0; _ii < processedBlocks.length; ) {
        var info = processedBlocks[_ii];
        if (info.wrapperTemplate) {
          var blocks = [];
          do {
            blocks.push(processedBlocks[_ii].block);
            _ii++;
          } while (_ii < processedBlocks.length && processedBlocks[_ii].wrapperTemplate === info.wrapperTemplate);
          var wrapperElement = React2.cloneElement(info.wrapperTemplate, {
            key: info.key + "-wrap",
            "data-offset-key": info.offsetKey
          }, blocks);
          outputBlocks.push(wrapperElement);
        } else {
          outputBlocks.push(info.block);
          _ii++;
        }
      }
      return React2.createElement("div", {
        "data-contents": "true"
      }, outputBlocks);
    };
    return DraftEditorContents3;
  }(React2.Component);
  DraftEditorContentsCore_react = DraftEditorContents2;
  return DraftEditorContentsCore_react;
}
var gkx$5 = gkx$8;
var experimentalTreeDataSupport$4 = gkx$5("draft_tree_data_support");
var DraftEditorContents_react = experimentalTreeDataSupport$4 ? requireDraftEditorContentsExperimental_react() : requireDraftEditorContentsCore_react();
var PhotosMimeType$1 = {
  isImage: function isImage(mimeString) {
    return getParts(mimeString)[0] === "image";
  },
  isJpeg: function isJpeg(mimeString) {
    var parts = getParts(mimeString);
    return PhotosMimeType$1.isImage(mimeString) && // see http://fburl.com/10972194
    (parts[1] === "jpeg" || parts[1] === "pjpeg");
  }
};
function getParts(mimeString) {
  return mimeString.split("/");
}
var PhotosMimeType_1 = PhotosMimeType$1;
var invariant$9 = invariant_1;
function toArray$1(obj) {
  var length = obj.length;
  !(!Array.isArray(obj) && (typeof obj === "object" || typeof obj === "function")) ? invariant$9(false) : void 0;
  !(typeof length === "number") ? invariant$9(false) : void 0;
  !(length === 0 || length - 1 in obj) ? invariant$9(false) : void 0;
  !(typeof obj.callee !== "function") ? invariant$9(false) : void 0;
  if (obj.hasOwnProperty) {
    try {
      return Array.prototype.slice.call(obj);
    } catch (e2) {
    }
  }
  var ret = Array(length);
  for (var ii2 = 0; ii2 < length; ii2++) {
    ret[ii2] = obj[ii2];
  }
  return ret;
}
function hasArrayNature(obj) {
  return (
    // not null/false
    !!obj && // arrays are objects, NodeLists are functions in Safari
    (typeof obj == "object" || typeof obj == "function") && // quacks like an array
    "length" in obj && // not window
    !("setInterval" in obj) && // no DOM node should be considered an array-like
    // a 'select' element has 'length' and 'item' properties on IE8
    typeof obj.nodeType != "number" && // a real array
    (Array.isArray(obj) || // arguments
    "callee" in obj || // HTMLCollection/NodeList
    "item" in obj)
  );
}
function createArrayFromMixed$1(obj) {
  if (!hasArrayNature(obj)) {
    return [obj];
  } else if (Array.isArray(obj)) {
    return obj.slice();
  } else {
    return toArray$1(obj);
  }
}
var createArrayFromMixed_1 = createArrayFromMixed$1;
function makeEmptyFunction(arg) {
  return function() {
    return arg;
  };
}
var emptyFunction$1 = function emptyFunction() {
};
emptyFunction$1.thatReturns = makeEmptyFunction;
emptyFunction$1.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction$1.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction$1.thatReturnsNull = makeEmptyFunction(null);
emptyFunction$1.thatReturnsThis = function() {
  return this;
};
emptyFunction$1.thatReturnsArgument = function(arg) {
  return arg;
};
var emptyFunction_1 = emptyFunction$1;
var PhotosMimeType = PhotosMimeType_1;
var createArrayFromMixed = createArrayFromMixed_1;
var emptyFunction2 = emptyFunction_1;
var CR_LF_REGEX = new RegExp("\r\n", "g");
var LF_ONLY = "\n";
var RICH_TEXT_TYPES = {
  "text/rtf": 1,
  "text/html": 1
};
function getFileFromDataTransfer(item) {
  if (item.kind == "file") {
    return item.getAsFile();
  }
}
var DataTransfer$2 = /* @__PURE__ */ function() {
  function DataTransfer2(data) {
    this.data = data;
    this.types = data.types ? createArrayFromMixed(data.types) : [];
  }
  var _proto = DataTransfer2.prototype;
  _proto.isRichText = function isRichText() {
    if (this.getHTML() && this.getText()) {
      return true;
    }
    if (this.isImage()) {
      return false;
    }
    return this.types.some(function(type) {
      return RICH_TEXT_TYPES[type];
    });
  };
  _proto.getText = function getText() {
    var text;
    if (this.data.getData) {
      if (!this.types.length) {
        text = this.data.getData("Text");
      } else if (this.types.indexOf("text/plain") != -1) {
        text = this.data.getData("text/plain");
      }
    }
    return text ? text.replace(CR_LF_REGEX, LF_ONLY) : null;
  };
  _proto.getHTML = function getHTML() {
    if (this.data.getData) {
      if (!this.types.length) {
        return this.data.getData("Text");
      } else if (this.types.indexOf("text/html") != -1) {
        return this.data.getData("text/html");
      }
    }
  };
  _proto.isLink = function isLink() {
    return this.types.some(function(type) {
      return type.indexOf("Url") != -1 || type.indexOf("text/uri-list") != -1 || type.indexOf("text/x-moz-url");
    });
  };
  _proto.getLink = function getLink() {
    if (this.data.getData) {
      if (this.types.indexOf("text/x-moz-url") != -1) {
        var url = this.data.getData("text/x-moz-url").split("\n");
        return url[0];
      }
      return this.types.indexOf("text/uri-list") != -1 ? this.data.getData("text/uri-list") : this.data.getData("url");
    }
    return null;
  };
  _proto.isImage = function isImage2() {
    var isImage3 = this.types.some(function(type2) {
      return type2.indexOf("application/x-moz-file") != -1;
    });
    if (isImage3) {
      return true;
    }
    var items = this.getFiles();
    for (var i2 = 0; i2 < items.length; i2++) {
      var type = items[i2].type;
      if (!PhotosMimeType.isImage(type)) {
        return false;
      }
    }
    return true;
  };
  _proto.getCount = function getCount() {
    if (this.data.hasOwnProperty("items")) {
      return this.data.items.length;
    } else if (this.data.hasOwnProperty("mozItemCount")) {
      return this.data.mozItemCount;
    } else if (this.data.files) {
      return this.data.files.length;
    }
    return null;
  };
  _proto.getFiles = function getFiles() {
    if (this.data.items) {
      return Array.prototype.slice.call(this.data.items).map(getFileFromDataTransfer).filter(emptyFunction2.thatReturnsArgument);
    } else if (this.data.files) {
      return Array.prototype.slice.call(this.data.files);
    } else {
      return [];
    }
  };
  _proto.hasFiles = function hasFiles() {
    return this.getFiles().length > 0;
  };
  return DataTransfer2;
}();
var DataTransfer_1 = DataTransfer$2;
var invariant$8 = invariant_1;
var TEXT_CLIPPING_REGEX = /\.textClipping$/;
var TEXT_TYPES = {
  "text/plain": true,
  "text/html": true,
  "text/rtf": true
};
var TEXT_SIZE_UPPER_BOUND = 5e3;
function getTextContentFromFiles$2(files, callback) {
  var readCount = 0;
  var results2 = [];
  files.forEach(function(file) {
    readFile(file, function(text) {
      readCount++;
      text && results2.push(text.slice(0, TEXT_SIZE_UPPER_BOUND));
      if (readCount == files.length) {
        callback(results2.join("\r"));
      }
    });
  });
}
function readFile(file, callback) {
  if (!commonjsGlobal.FileReader || file.type && !(file.type in TEXT_TYPES)) {
    callback("");
    return;
  }
  if (file.type === "") {
    var _contents = "";
    if (TEXT_CLIPPING_REGEX.test(file.name)) {
      _contents = file.name.replace(TEXT_CLIPPING_REGEX, "");
    }
    callback(_contents);
    return;
  }
  var reader = new FileReader();
  reader.onload = function() {
    var result = reader.result;
    !(typeof result === "string") ? invariant$8(false) : void 0;
    callback(result);
  };
  reader.onerror = function() {
    callback("");
  };
  reader.readAsText(file);
}
var getTextContentFromFiles_1 = getTextContentFromFiles$2;
function isEventHandled$4(value) {
  return value === "handled" || value === true;
}
var isEventHandled_1 = isEventHandled$4;
var DataTransfer$1 = DataTransfer_1;
var DraftModifier$b = DraftModifier_1;
var EditorState$m = EditorState_1;
var findAncestorOffsetKey$1 = findAncestorOffsetKey_1;
var getCorrectDocumentFromNode$1 = getCorrectDocumentFromNode_1;
var getTextContentFromFiles$1 = getTextContentFromFiles_1;
var getUpdatedSelectionState = getUpdatedSelectionState_1;
var getWindowForNode = getWindowForNode_1;
var isEventHandled$3 = isEventHandled_1;
var nullthrows$5 = nullthrows_1;
function getSelectionForEvent(event, editorState) {
  var node = null;
  var offset = null;
  var eventTargetDocument = getCorrectDocumentFromNode$1(event.currentTarget);
  if (typeof eventTargetDocument.caretRangeFromPoint === "function") {
    var dropRange = eventTargetDocument.caretRangeFromPoint(event.x, event.y);
    node = dropRange.startContainer;
    offset = dropRange.startOffset;
  } else if (event.rangeParent) {
    node = event.rangeParent;
    offset = event.rangeOffset;
  } else {
    return null;
  }
  node = nullthrows$5(node);
  offset = nullthrows$5(offset);
  var offsetKey = nullthrows$5(findAncestorOffsetKey$1(node));
  return getUpdatedSelectionState(editorState, offsetKey, offset, offsetKey, offset);
}
var DraftEditorDragHandler$1 = {
  /**
   * Drag originating from input terminated.
   */
  onDragEnd: function onDragEnd(editor) {
    editor.exitCurrentMode();
    endDrag(editor);
  },
  /**
   * Handle data being dropped.
   */
  onDrop: function onDrop(editor, e2) {
    var data = new DataTransfer$1(e2.nativeEvent.dataTransfer);
    var editorState = editor._latestEditorState;
    var dropSelection = getSelectionForEvent(e2.nativeEvent, editorState);
    e2.preventDefault();
    editor._dragCount = 0;
    editor.exitCurrentMode();
    if (dropSelection == null) {
      return;
    }
    var files = data.getFiles();
    if (files.length > 0) {
      if (editor.props.handleDroppedFiles && isEventHandled$3(editor.props.handleDroppedFiles(dropSelection, files))) {
        return;
      }
      getTextContentFromFiles$1(files, function(fileText) {
        fileText && editor.update(insertTextAtSelection(editorState, dropSelection, fileText));
      });
      return;
    }
    var dragType = editor._internalDrag ? "internal" : "external";
    if (editor.props.handleDrop && isEventHandled$3(editor.props.handleDrop(dropSelection, data, dragType)))
      ;
    else if (editor._internalDrag) {
      editor.update(moveText2(editorState, dropSelection));
    } else {
      editor.update(insertTextAtSelection(editorState, dropSelection, data.getText()));
    }
    endDrag(editor);
  }
};
function endDrag(editor) {
  editor._internalDrag = false;
  var editorNode = editor.editorContainer;
  if (editorNode) {
    var mouseUpEvent = new MouseEvent("mouseup", {
      view: getWindowForNode(editorNode),
      bubbles: true,
      cancelable: true
    });
    editorNode.dispatchEvent(mouseUpEvent);
  }
}
function moveText2(editorState, targetSelection) {
  var newContentState = DraftModifier$b.moveText(editorState.getCurrentContent(), editorState.getSelection(), targetSelection);
  return EditorState$m.push(editorState, newContentState, "insert-fragment");
}
function insertTextAtSelection(editorState, selection, text) {
  var newContentState = DraftModifier$b.insertText(editorState.getCurrentContent(), selection, text, editorState.getCurrentInlineStyle());
  return EditorState$m.push(editorState, newContentState, "insert-fragment");
}
var DraftEditorDragHandler_1 = DraftEditorDragHandler$1;
function isSelectionAtLeafStart$1(editorState) {
  var selection = editorState.getSelection();
  var anchorKey = selection.getAnchorKey();
  var blockTree = editorState.getBlockTree(anchorKey);
  var offset = selection.getStartOffset();
  var isAtStart = false;
  blockTree.some(function(leafSet) {
    if (offset === leafSet.get("start")) {
      isAtStart = true;
      return true;
    }
    if (offset < leafSet.get("end")) {
      return leafSet.get("leaves").some(function(leaf) {
        var leafStart = leaf.get("start");
        if (offset === leafStart) {
          isAtStart = true;
          return true;
        }
        return false;
      });
    }
    return false;
  });
  return isAtStart;
}
var isSelectionAtLeafStart_1 = isSelectionAtLeafStart$1;
(function(global2, undefined$1) {
  if (global2.setImmediate) {
    return;
  }
  var nextHandle = 1;
  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global2.document;
  var registerImmediate;
  function setImmediate2(callback) {
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    }
    var args = new Array(arguments.length - 1);
    for (var i2 = 0; i2 < args.length; i2++) {
      args[i2] = arguments[i2 + 1];
    }
    var task = { callback, args };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }
  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }
  function run(task) {
    var callback = task.callback;
    var args = task.args;
    switch (args.length) {
      case 0:
        callback();
        break;
      case 1:
        callback(args[0]);
        break;
      case 2:
        callback(args[0], args[1]);
        break;
      case 3:
        callback(args[0], args[1], args[2]);
        break;
      default:
        callback.apply(undefined$1, args);
        break;
    }
  }
  function runIfPresent(handle) {
    if (currentlyRunningATask) {
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];
      if (task) {
        currentlyRunningATask = true;
        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }
  function installNextTickImplementation() {
    registerImmediate = function(handle) {
      process.nextTick(function() {
        runIfPresent(handle);
      });
    };
  }
  function canUsePostMessage() {
    if (global2.postMessage && !global2.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global2.onmessage;
      global2.onmessage = function() {
        postMessageIsAsynchronous = false;
      };
      global2.postMessage("", "*");
      global2.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }
  function installPostMessageImplementation() {
    var messagePrefix = "setImmediate$" + Math.random() + "$";
    var onGlobalMessage = function(event) {
      if (event.source === global2 && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };
    if (global2.addEventListener) {
      global2.addEventListener("message", onGlobalMessage, false);
    } else {
      global2.attachEvent("onmessage", onGlobalMessage);
    }
    registerImmediate = function(handle) {
      global2.postMessage(messagePrefix + handle, "*");
    };
  }
  function installMessageChannelImplementation() {
    var channel = new MessageChannel();
    channel.port1.onmessage = function(event) {
      var handle = event.data;
      runIfPresent(handle);
    };
    registerImmediate = function(handle) {
      channel.port2.postMessage(handle);
    };
  }
  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;
    registerImmediate = function(handle) {
      var script = doc.createElement("script");
      script.onreadystatechange = function() {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };
      html.appendChild(script);
    };
  }
  function installSetTimeoutImplementation() {
    registerImmediate = function(handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  }
  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global2);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global2;
  if ({}.toString.call(global2.process) === "[object process]") {
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    installPostMessageImplementation();
  } else if (global2.MessageChannel) {
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    installReadyStateChangeImplementation();
  } else {
    installSetTimeoutImplementation();
  }
  attachTo.setImmediate = setImmediate2;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof commonjsGlobal === "undefined" ? commonjsGlobal : commonjsGlobal : self);
var setImmediate$2 = commonjsGlobal.setImmediate;
var DraftModifier$a = DraftModifier_1;
var EditorState$l = EditorState_1;
var UserAgent$9 = UserAgent_1;
var getEntityKeyForSelection$1 = getEntityKeyForSelection_1;
var isEventHandled$2 = isEventHandled_1;
var isSelectionAtLeafStart = isSelectionAtLeafStart_1;
var nullthrows$4 = nullthrows_1;
var setImmediate$1 = setImmediate$2;
var FF_QUICKFIND_CHAR = "'";
var FF_QUICKFIND_LINK_CHAR = "/";
var isFirefox$1 = UserAgent$9.isBrowser("Firefox");
function mustPreventDefaultForCharacter(character) {
  return isFirefox$1 && (character == FF_QUICKFIND_CHAR || character == FF_QUICKFIND_LINK_CHAR);
}
function replaceText2(editorState, text, inlineStyle, entityKey, forceSelection) {
  var contentState = DraftModifier$a.replaceText(editorState.getCurrentContent(), editorState.getSelection(), text, inlineStyle, entityKey);
  return EditorState$l.push(editorState, contentState, "insert-characters", forceSelection);
}
function editOnBeforeInput(editor, e2) {
  if (editor._pendingStateFromBeforeInput !== void 0) {
    editor.update(editor._pendingStateFromBeforeInput);
    editor._pendingStateFromBeforeInput = void 0;
  }
  var editorState = editor._latestEditorState;
  var chars = e2.data;
  if (!chars) {
    return;
  }
  if (editor.props.handleBeforeInput && isEventHandled$2(editor.props.handleBeforeInput(chars, editorState, e2.timeStamp))) {
    e2.preventDefault();
    return;
  }
  var selection = editorState.getSelection();
  var selectionStart = selection.getStartOffset();
  var anchorKey = selection.getAnchorKey();
  if (!selection.isCollapsed()) {
    e2.preventDefault();
    editor.update(replaceText2(editorState, chars, editorState.getCurrentInlineStyle(), getEntityKeyForSelection$1(editorState.getCurrentContent(), editorState.getSelection()), true));
    return;
  }
  var newEditorState = replaceText2(editorState, chars, editorState.getCurrentInlineStyle(), getEntityKeyForSelection$1(editorState.getCurrentContent(), editorState.getSelection()), false);
  var mustPreventNative = false;
  if (!mustPreventNative) {
    mustPreventNative = isSelectionAtLeafStart(editor._latestCommittedEditorState);
  }
  if (!mustPreventNative) {
    var oldBlockTree = editorState.getBlockTree(anchorKey);
    var newBlockTree = newEditorState.getBlockTree(anchorKey);
    mustPreventNative = oldBlockTree.size !== newBlockTree.size || oldBlockTree.zip(newBlockTree).some(function(_ref) {
      var oldLeafSet = _ref[0], newLeafSet = _ref[1];
      var oldStart = oldLeafSet.get("start");
      var adjustedStart = oldStart + (oldStart >= selectionStart ? chars.length : 0);
      var oldEnd = oldLeafSet.get("end");
      var adjustedEnd = oldEnd + (oldEnd >= selectionStart ? chars.length : 0);
      var newStart = newLeafSet.get("start");
      var newEnd = newLeafSet.get("end");
      var newDecoratorKey = newLeafSet.get("decoratorKey");
      return (
        // Different decorators
        oldLeafSet.get("decoratorKey") !== newDecoratorKey || // Different number of inline styles
        oldLeafSet.get("leaves").size !== newLeafSet.get("leaves").size || // Different effective decorator position
        adjustedStart !== newStart || adjustedEnd !== newEnd || // Decorator already existed and its length changed
        newDecoratorKey != null && newEnd - newStart !== oldEnd - oldStart
      );
    });
  }
  if (!mustPreventNative) {
    mustPreventNative = mustPreventDefaultForCharacter(chars);
  }
  if (!mustPreventNative) {
    mustPreventNative = nullthrows$4(newEditorState.getDirectionMap()).get(anchorKey) !== nullthrows$4(editorState.getDirectionMap()).get(anchorKey);
  }
  if (mustPreventNative) {
    e2.preventDefault();
    newEditorState = EditorState$l.set(newEditorState, {
      forceSelection: true
    });
    editor.update(newEditorState);
    return;
  }
  newEditorState = EditorState$l.set(newEditorState, {
    nativelyRenderedContent: newEditorState.getCurrentContent()
  });
  editor._pendingStateFromBeforeInput = newEditorState;
  setImmediate$1(function() {
    if (editor._pendingStateFromBeforeInput !== void 0) {
      editor.update(editor._pendingStateFromBeforeInput);
      editor._pendingStateFromBeforeInput = void 0;
    }
  });
}
var editOnBeforeInput_1 = editOnBeforeInput;
var EditorState$k = EditorState_1;
var containsNode = containsNode_1;
var getActiveElement = getActiveElement_1;
function editOnBlur(editor, e2) {
  var ownerDocument = e2.currentTarget.ownerDocument;
  if (
    // This ESLint rule conflicts with `sketchy-null-bool` flow check
    // eslint-disable-next-line no-extra-boolean-cast
    !Boolean(editor.props.preserveSelectionOnBlur) && getActiveElement(ownerDocument) === ownerDocument.body
  ) {
    var _selection = ownerDocument.defaultView.getSelection();
    var editorNode = editor.editor;
    if (_selection.rangeCount === 1 && containsNode(editorNode, _selection.anchorNode) && containsNode(editorNode, _selection.focusNode)) {
      _selection.removeAllRanges();
    }
  }
  var editorState = editor._latestEditorState;
  var currentSelection = editorState.getSelection();
  if (!currentSelection.getHasFocus()) {
    return;
  }
  var selection = currentSelection.set("hasFocus", false);
  editor.props.onBlur && editor.props.onBlur(e2);
  editor.update(EditorState$k.acceptSelection(editorState, selection));
}
var editOnBlur_1 = editOnBlur;
var EditorState$j = EditorState_1;
function editOnCompositionStart(editor, e2) {
  editor.setMode("composite");
  editor.update(EditorState$j.set(editor._latestEditorState, {
    inCompositionMode: true
  }));
  editor._onCompositionStart(e2);
}
var editOnCompositionStart_1 = editOnCompositionStart;
var getContentStateFragment$2 = getContentStateFragment_1;
function getFragmentFromSelection$2(editorState) {
  var selectionState = editorState.getSelection();
  if (selectionState.isCollapsed()) {
    return null;
  }
  return getContentStateFragment$2(editorState.getCurrentContent(), selectionState);
}
var getFragmentFromSelection_1 = getFragmentFromSelection$2;
var getFragmentFromSelection$1 = getFragmentFromSelection_1;
function editOnCopy(editor, e2) {
  var editorState = editor._latestEditorState;
  var selection = editorState.getSelection();
  if (selection.isCollapsed()) {
    e2.preventDefault();
    return;
  }
  editor.setClipboard(getFragmentFromSelection$1(editor._latestEditorState));
}
var editOnCopy_1 = editOnCopy;
function isInstanceOfNode(target) {
  if (!target || !("ownerDocument" in target)) {
    return false;
  }
  if ("ownerDocument" in target) {
    var node = target;
    if (!node.ownerDocument.defaultView) {
      return node instanceof Node;
    }
    if (node instanceof node.ownerDocument.defaultView.Node) {
      return true;
    }
  }
  return false;
}
var isInstanceOfNode_1 = isInstanceOfNode;
var DraftModifier$9 = DraftModifier_1;
var EditorState$i = EditorState_1;
var Style$1 = Style_1;
var getFragmentFromSelection = getFragmentFromSelection_1;
var getScrollPosition$1 = getScrollPosition_1;
var isNode = isInstanceOfNode_1;
function editOnCut(editor, e2) {
  var editorState = editor._latestEditorState;
  var selection = editorState.getSelection();
  var element = e2.target;
  var scrollPosition;
  if (selection.isCollapsed()) {
    e2.preventDefault();
    return;
  }
  if (isNode(element)) {
    var node = element;
    scrollPosition = getScrollPosition$1(Style$1.getScrollParent(node));
  }
  var fragment = getFragmentFromSelection(editorState);
  editor.setClipboard(fragment);
  editor.setMode("cut");
  setTimeout(function() {
    editor.restoreEditorDOM(scrollPosition);
    editor.exitCurrentMode();
    editor.update(removeFragment(editorState));
  }, 0);
}
function removeFragment(editorState) {
  var newContent = DraftModifier$9.removeRange(editorState.getCurrentContent(), editorState.getSelection(), "forward");
  return EditorState$i.push(editorState, newContent, "remove-range");
}
var editOnCut_1 = editOnCut;
function editOnDragOver(editor, e2) {
  editor.setMode("drag");
  e2.preventDefault();
}
var editOnDragOver_1 = editOnDragOver;
function editOnDragStart(editor) {
  editor._internalDrag = true;
  editor.setMode("drag");
}
var editOnDragStart_1 = editOnDragStart;
var EditorState$h = EditorState_1;
var UserAgent$8 = UserAgent_1;
function editOnFocus(editor, e2) {
  var editorState = editor._latestEditorState;
  var currentSelection = editorState.getSelection();
  if (currentSelection.getHasFocus()) {
    return;
  }
  var selection = currentSelection.set("hasFocus", true);
  editor.props.onFocus && editor.props.onFocus(e2);
  if (UserAgent$8.isBrowser("Chrome < 60.0.3081.0")) {
    editor.update(EditorState$h.forceSelection(editorState, selection));
  } else {
    editor.update(EditorState$h.acceptSelection(editorState, selection));
  }
}
var editOnFocus_1 = editOnFocus;
var invariant$7 = invariant_1;
var SURROGATE_HIGH_START = 55296;
var SURROGATE_HIGH_END = 56319;
var SURROGATE_LOW_START = 56320;
var SURROGATE_LOW_END = 57343;
var SURROGATE_UNITS_REGEX = /[\uD800-\uDFFF]/;
function isCodeUnitInSurrogateRange(codeUnit) {
  return SURROGATE_HIGH_START <= codeUnit && codeUnit <= SURROGATE_LOW_END;
}
function isSurrogatePair(str, index) {
  !(0 <= index && index < str.length) ? invariant$7(false) : void 0;
  if (index + 1 === str.length) {
    return false;
  }
  var first = str.charCodeAt(index);
  var second = str.charCodeAt(index + 1);
  return SURROGATE_HIGH_START <= first && first <= SURROGATE_HIGH_END && SURROGATE_LOW_START <= second && second <= SURROGATE_LOW_END;
}
function hasSurrogateUnit(str) {
  return SURROGATE_UNITS_REGEX.test(str);
}
function getUTF16Length(str, pos) {
  return 1 + isCodeUnitInSurrogateRange(str.charCodeAt(pos));
}
function strlen$1(str) {
  if (!hasSurrogateUnit(str)) {
    return str.length;
  }
  var len = 0;
  for (var pos = 0; pos < str.length; pos += getUTF16Length(str, pos)) {
    len++;
  }
  return len;
}
function substr$2(str, start, length) {
  start = start || 0;
  length = length === void 0 ? Infinity : length || 0;
  if (!hasSurrogateUnit(str)) {
    return str.substr(start, length);
  }
  var size = str.length;
  if (size <= 0 || start > size || length <= 0) {
    return "";
  }
  var posA = 0;
  if (start > 0) {
    for (; start > 0 && posA < size; start--) {
      posA += getUTF16Length(str, posA);
    }
    if (posA >= size) {
      return "";
    }
  } else if (start < 0) {
    for (posA = size; start < 0 && 0 < posA; start++) {
      posA -= getUTF16Length(str, posA - 1);
    }
    if (posA < 0) {
      posA = 0;
    }
  }
  var posB = size;
  if (length < size) {
    for (posB = posA; length > 0 && posB < size; length--) {
      posB += getUTF16Length(str, posB);
    }
  }
  return str.substring(posA, posB);
}
function substring(str, start, end) {
  start = start || 0;
  end = end === void 0 ? Infinity : end || 0;
  if (start < 0) {
    start = 0;
  }
  if (end < 0) {
    end = 0;
  }
  var length = Math.abs(end - start);
  start = start < end ? start : end;
  return substr$2(str, start, length);
}
function getCodePoints(str) {
  var codePoints = [];
  for (var pos = 0; pos < str.length; pos += getUTF16Length(str, pos)) {
    codePoints.push(str.codePointAt(pos));
  }
  return codePoints;
}
var UnicodeUtils$7 = {
  getCodePoints,
  getUTF16Length,
  hasSurrogateUnit,
  isCodeUnitInSurrogateRange,
  isSurrogatePair,
  strlen: strlen$1,
  substring,
  substr: substr$2
};
var UnicodeUtils_1 = UnicodeUtils$7;
function moveSelectionBackward$3(editorState, maxDistance) {
  var selection = editorState.getSelection();
  var content = editorState.getCurrentContent();
  var key = selection.getStartKey();
  var offset = selection.getStartOffset();
  var focusKey = key;
  var focusOffset = 0;
  if (maxDistance > offset) {
    var keyBefore = content.getKeyBefore(key);
    if (keyBefore == null) {
      focusKey = key;
    } else {
      focusKey = keyBefore;
      var blockBefore = content.getBlockForKey(keyBefore);
      focusOffset = blockBefore.getText().length;
    }
  } else {
    focusOffset = offset - maxDistance;
  }
  return selection.merge({
    focusKey,
    focusOffset,
    isBackward: true
  });
}
var moveSelectionBackward_1 = moveSelectionBackward$3;
var DraftModifier$8 = DraftModifier_1;
var gkx$4 = gkx$8;
var experimentalTreeDataSupport$3 = gkx$4("draft_tree_data_support");
function removeTextWithStrategy$5(editorState, strategy, direction) {
  var selection = editorState.getSelection();
  var content = editorState.getCurrentContent();
  var target = selection;
  var anchorKey = selection.getAnchorKey();
  var focusKey = selection.getFocusKey();
  var anchorBlock = content.getBlockForKey(anchorKey);
  if (experimentalTreeDataSupport$3) {
    if (direction === "forward") {
      if (anchorKey !== focusKey) {
        return content;
      }
    }
  }
  if (selection.isCollapsed()) {
    if (direction === "forward") {
      if (editorState.isSelectionAtEndOfContent()) {
        return content;
      }
      if (experimentalTreeDataSupport$3) {
        var isAtEndOfBlock = selection.getAnchorOffset() === content.getBlockForKey(anchorKey).getLength();
        if (isAtEndOfBlock) {
          var anchorBlockSibling = content.getBlockForKey(anchorBlock.nextSibling);
          if (!anchorBlockSibling || anchorBlockSibling.getLength() === 0) {
            return content;
          }
        }
      }
    } else if (editorState.isSelectionAtStartOfContent()) {
      return content;
    }
    target = strategy(editorState);
    if (target === selection) {
      return content;
    }
  }
  return DraftModifier$8.removeRange(content, target, direction);
}
var removeTextWithStrategy_1 = removeTextWithStrategy$5;
var EditorState$g = EditorState_1;
var UnicodeUtils$6 = UnicodeUtils_1;
var moveSelectionBackward$2 = moveSelectionBackward_1;
var removeTextWithStrategy$4 = removeTextWithStrategy_1;
function keyCommandPlainBackspace$2(editorState) {
  var afterRemoval = removeTextWithStrategy$4(editorState, function(strategyState) {
    var selection2 = strategyState.getSelection();
    var content = strategyState.getCurrentContent();
    var key = selection2.getAnchorKey();
    var offset = selection2.getAnchorOffset();
    var charBehind = content.getBlockForKey(key).getText()[offset - 1];
    return moveSelectionBackward$2(strategyState, charBehind ? UnicodeUtils$6.getUTF16Length(charBehind, 0) : 1);
  }, "backward");
  if (afterRemoval === editorState.getCurrentContent()) {
    return editorState;
  }
  var selection = editorState.getSelection();
  return EditorState$g.push(editorState, afterRemoval.set("selectionBefore", selection), selection.isCollapsed() ? "backspace-character" : "remove-range");
}
var keyCommandPlainBackspace_1 = keyCommandPlainBackspace$2;
var DraftModifier$7 = DraftModifier_1;
var DraftOffsetKey = DraftOffsetKey_1;
var EditorState$f = EditorState_1;
var UserAgent$7 = UserAgent_1;
var _require$2 = draftKeyUtils, notEmptyKey = _require$2.notEmptyKey;
var findAncestorOffsetKey = findAncestorOffsetKey_1;
var keyCommandPlainBackspace$1 = keyCommandPlainBackspace_1;
var nullthrows$3 = nullthrows_1;
var isGecko = UserAgent$7.isEngine("Gecko");
var DOUBLE_NEWLINE = "\n\n";
function onInputType(inputType, editorState) {
  switch (inputType) {
    case "deleteContentBackward":
      return keyCommandPlainBackspace$1(editorState);
  }
  return editorState;
}
function editOnInput(editor, e2) {
  if (editor._pendingStateFromBeforeInput !== void 0) {
    editor.update(editor._pendingStateFromBeforeInput);
    editor._pendingStateFromBeforeInput = void 0;
  }
  var castedEditorElement = editor.editor;
  var domSelection = castedEditorElement.ownerDocument.defaultView.getSelection();
  var anchorNode = domSelection.anchorNode, isCollapsed = domSelection.isCollapsed;
  var isNotTextOrElementNode = (anchorNode === null || anchorNode === void 0 ? void 0 : anchorNode.nodeType) !== Node.TEXT_NODE && (anchorNode === null || anchorNode === void 0 ? void 0 : anchorNode.nodeType) !== Node.ELEMENT_NODE;
  if (anchorNode == null || isNotTextOrElementNode) {
    return;
  }
  if (anchorNode.nodeType === Node.TEXT_NODE && (anchorNode.previousSibling !== null || anchorNode.nextSibling !== null)) {
    var span = anchorNode.parentNode;
    if (span == null) {
      return;
    }
    anchorNode.nodeValue = span.textContent;
    for (var child = span.firstChild; child != null; child = child.nextSibling) {
      if (child !== anchorNode) {
        span.removeChild(child);
      }
    }
  }
  var domText = anchorNode.textContent;
  var editorState = editor._latestEditorState;
  var offsetKey = nullthrows$3(findAncestorOffsetKey(anchorNode));
  var _DraftOffsetKey$decod = DraftOffsetKey.decode(offsetKey), blockKey = _DraftOffsetKey$decod.blockKey, decoratorKey = _DraftOffsetKey$decod.decoratorKey, leafKey = _DraftOffsetKey$decod.leafKey;
  var _editorState$getBlock = editorState.getBlockTree(blockKey).getIn([decoratorKey, "leaves", leafKey]), start = _editorState$getBlock.start, end = _editorState$getBlock.end;
  var content = editorState.getCurrentContent();
  var block = content.getBlockForKey(blockKey);
  var modelText = block.getText().slice(start, end);
  if (domText.endsWith(DOUBLE_NEWLINE)) {
    domText = domText.slice(0, -1);
  }
  if (domText === modelText) {
    var inputType = e2.nativeEvent.inputType;
    if (inputType) {
      var newEditorState = onInputType(inputType, editorState);
      if (newEditorState !== editorState) {
        editor.restoreEditorDOM();
        editor.update(newEditorState);
        return;
      }
    }
    return;
  }
  var selection = editorState.getSelection();
  var targetRange = selection.merge({
    anchorOffset: start,
    focusOffset: end,
    isBackward: false
  });
  var entityKey = block.getEntityAt(start);
  var entity = notEmptyKey(entityKey) ? content.getEntity(entityKey) : null;
  var entityType = entity != null ? entity.getMutability() : null;
  var preserveEntity = entityType === "MUTABLE";
  var changeType = preserveEntity ? "spellcheck-change" : "apply-entity";
  var newContent = DraftModifier$7.replaceText(content, targetRange, domText, block.getInlineStyleAt(start), preserveEntity ? block.getEntityAt(start) : null);
  var anchorOffset, focusOffset, startOffset, endOffset;
  if (isGecko) {
    anchorOffset = domSelection.anchorOffset;
    focusOffset = domSelection.focusOffset;
    startOffset = start + Math.min(anchorOffset, focusOffset);
    endOffset = startOffset + Math.abs(anchorOffset - focusOffset);
    anchorOffset = startOffset;
    focusOffset = endOffset;
  } else {
    var charDelta = domText.length - modelText.length;
    startOffset = selection.getStartOffset();
    endOffset = selection.getEndOffset();
    anchorOffset = isCollapsed ? endOffset + charDelta : startOffset;
    focusOffset = endOffset + charDelta;
  }
  var contentWithAdjustedDOMSelection = newContent.merge({
    selectionBefore: content.getSelectionAfter(),
    selectionAfter: selection.merge({
      anchorOffset,
      focusOffset
    })
  });
  editor.update(EditorState$f.push(editorState, contentWithAdjustedDOMSelection, changeType));
}
var editOnInput_1 = editOnInput;
var Keys$2 = Keys$4;
function isSoftNewlineEvent$1(e2) {
  return e2.which === Keys$2.RETURN && (e2.getModifierState("Shift") || e2.getModifierState("Alt") || e2.getModifierState("Control"));
}
var isSoftNewlineEvent_1 = isSoftNewlineEvent$1;
var UserAgent$6 = UserAgent_1;
var isSoftNewlineEvent = isSoftNewlineEvent_1;
var isOSX$1 = UserAgent$6.isPlatform("Mac OS X");
var KeyBindingUtil$3 = {
  /**
   * Check whether the ctrlKey modifier is *not* being used in conjunction with
   * the altKey modifier. If they are combined, the result is an `altGraph`
   * key modifier, which should not be handled by this set of key bindings.
   */
  isCtrlKeyCommand: function isCtrlKeyCommand(e2) {
    return !!e2.ctrlKey && !e2.altKey;
  },
  isOptionKeyCommand: function isOptionKeyCommand(e2) {
    return isOSX$1 && e2.altKey;
  },
  usesMacOSHeuristics: function usesMacOSHeuristics() {
    return isOSX$1;
  },
  hasCommandModifier: function hasCommandModifier(e2) {
    return isOSX$1 ? !!e2.metaKey && !e2.altKey : KeyBindingUtil$3.isCtrlKeyCommand(e2);
  },
  isSoftNewlineEvent
};
var KeyBindingUtil_1 = KeyBindingUtil$3;
var DraftModifier$6 = DraftModifier_1;
var EditorState$e = EditorState_1;
var getContentStateFragment$1 = getContentStateFragment_1;
var nullthrows$2 = nullthrows_1;
var clipboard = null;
var SecondaryClipboard$1 = {
  cut: function cut(editorState) {
    var content = editorState.getCurrentContent();
    var selection = editorState.getSelection();
    var targetRange = null;
    if (selection.isCollapsed()) {
      var anchorKey = selection.getAnchorKey();
      var blockEnd = content.getBlockForKey(anchorKey).getLength();
      if (blockEnd === selection.getAnchorOffset()) {
        var keyAfter = content.getKeyAfter(anchorKey);
        if (keyAfter == null) {
          return editorState;
        }
        targetRange = selection.set("focusKey", keyAfter).set("focusOffset", 0);
      } else {
        targetRange = selection.set("focusOffset", blockEnd);
      }
    } else {
      targetRange = selection;
    }
    targetRange = nullthrows$2(targetRange);
    clipboard = getContentStateFragment$1(content, targetRange);
    var afterRemoval = DraftModifier$6.removeRange(content, targetRange, "forward");
    if (afterRemoval === content) {
      return editorState;
    }
    return EditorState$e.push(editorState, afterRemoval, "remove-range");
  },
  paste: function paste(editorState) {
    if (!clipboard) {
      return editorState;
    }
    var newContent = DraftModifier$6.replaceWithFragment(editorState.getCurrentContent(), editorState.getSelection(), clipboard);
    return EditorState$e.push(editorState, newContent, "insert-fragment");
  }
};
var SecondaryClipboard_1 = SecondaryClipboard$1;
var UserAgent$5 = UserAgent_1;
var invariant$6 = invariant_1;
var isChrome$2 = UserAgent$5.isBrowser("Chrome");
function getRangeClientRectsChrome(range) {
  var tempRange = range.cloneRange();
  var clientRects = [];
  for (var ancestor = range.endContainer; ancestor != null; ancestor = ancestor.parentNode) {
    var atCommonAncestor = ancestor === range.commonAncestorContainer;
    if (atCommonAncestor) {
      tempRange.setStart(range.startContainer, range.startOffset);
    } else {
      tempRange.setStart(tempRange.endContainer, 0);
    }
    var rects = Array.from(tempRange.getClientRects());
    clientRects.push(rects);
    if (atCommonAncestor) {
      var _ref;
      clientRects.reverse();
      return (_ref = []).concat.apply(_ref, clientRects);
    }
    tempRange.setEndBefore(ancestor);
  }
  invariant$6(false);
}
var getRangeClientRects$2 = isChrome$2 ? getRangeClientRectsChrome : function(range) {
  return Array.from(range.getClientRects());
};
var getRangeClientRects_1 = getRangeClientRects$2;
var UnicodeUtils$5 = UnicodeUtils_1;
var getCorrectDocumentFromNode = getCorrectDocumentFromNode_1;
var getRangeClientRects$1 = getRangeClientRects_1;
var invariant$5 = invariant_1;
function getLineHeightPx(element) {
  var computed = getComputedStyle(element);
  var correctDocument = getCorrectDocumentFromNode(element);
  var div = correctDocument.createElement("div");
  div.style.fontFamily = computed.fontFamily;
  div.style.fontSize = computed.fontSize;
  div.style.fontStyle = computed.fontStyle;
  div.style.fontWeight = computed.fontWeight;
  div.style.lineHeight = computed.lineHeight;
  div.style.position = "absolute";
  div.textContent = "M";
  var documentBody = correctDocument.body;
  !documentBody ? invariant$5(false) : void 0;
  documentBody.appendChild(div);
  var rect = div.getBoundingClientRect();
  documentBody.removeChild(div);
  return rect.height;
}
function areRectsOnOneLine(rects, lineHeight) {
  var minTop = Infinity;
  var minBottom = Infinity;
  var maxTop = -Infinity;
  var maxBottom = -Infinity;
  for (var ii2 = 0; ii2 < rects.length; ii2++) {
    var rect = rects[ii2];
    if (rect.width === 0 || rect.width === 1) {
      continue;
    }
    minTop = Math.min(minTop, rect.top);
    minBottom = Math.min(minBottom, rect.bottom);
    maxTop = Math.max(maxTop, rect.top);
    maxBottom = Math.max(maxBottom, rect.bottom);
  }
  return maxTop <= minBottom && maxTop - minTop < lineHeight && maxBottom - minBottom < lineHeight;
}
function getNodeLength(node) {
  switch (node.nodeType) {
    case Node.DOCUMENT_TYPE_NODE:
      return 0;
    case Node.TEXT_NODE:
    case Node.PROCESSING_INSTRUCTION_NODE:
    case Node.COMMENT_NODE:
      return node.length;
    default:
      return node.childNodes.length;
  }
}
function expandRangeToStartOfLine$1(range) {
  !range.collapsed ? invariant$5(false) : void 0;
  range = range.cloneRange();
  var containingElement = range.startContainer;
  if (containingElement.nodeType !== 1) {
    containingElement = containingElement.parentNode;
  }
  var lineHeight = getLineHeightPx(containingElement);
  var bestContainer = range.endContainer;
  var bestOffset = range.endOffset;
  range.setStart(range.startContainer, 0);
  while (areRectsOnOneLine(getRangeClientRects$1(range), lineHeight)) {
    bestContainer = range.startContainer;
    bestOffset = range.startOffset;
    !bestContainer.parentNode ? invariant$5(false) : void 0;
    range.setStartBefore(bestContainer);
    if (bestContainer.nodeType === 1 && getComputedStyle(bestContainer).display !== "inline") {
      break;
    }
  }
  var currentContainer = bestContainer;
  var maxIndexToConsider = bestOffset - 1;
  do {
    var nodeValue = currentContainer.nodeValue;
    var ii2 = maxIndexToConsider;
    for (; ii2 >= 0; ii2--) {
      if (nodeValue != null && ii2 > 0 && UnicodeUtils$5.isSurrogatePair(nodeValue, ii2 - 1)) {
        continue;
      }
      range.setStart(currentContainer, ii2);
      if (areRectsOnOneLine(getRangeClientRects$1(range), lineHeight)) {
        bestContainer = currentContainer;
        bestOffset = ii2;
      } else {
        break;
      }
    }
    if (ii2 === -1 || currentContainer.childNodes.length === 0) {
      break;
    }
    currentContainer = currentContainer.childNodes[ii2];
    maxIndexToConsider = getNodeLength(currentContainer);
  } while (true);
  range.setStart(bestContainer, bestOffset);
  return range;
}
var expandRangeToStartOfLine_1 = expandRangeToStartOfLine$1;
var EditorState$d = EditorState_1;
var expandRangeToStartOfLine = expandRangeToStartOfLine_1;
var getDraftEditorSelectionWithNodes = getDraftEditorSelectionWithNodes_1;
var moveSelectionBackward$1 = moveSelectionBackward_1;
var removeTextWithStrategy$3 = removeTextWithStrategy_1;
function keyCommandBackspaceToStartOfLine$1(editorState, e2) {
  var afterRemoval = removeTextWithStrategy$3(editorState, function(strategyState) {
    var selection = strategyState.getSelection();
    if (selection.isCollapsed() && selection.getAnchorOffset() === 0) {
      return moveSelectionBackward$1(strategyState, 1);
    }
    var ownerDocument = e2.currentTarget.ownerDocument;
    var domSelection = ownerDocument.defaultView.getSelection();
    var range = domSelection.getRangeAt(0);
    range = expandRangeToStartOfLine(range);
    return getDraftEditorSelectionWithNodes(strategyState, null, range.endContainer, range.endOffset, range.startContainer, range.startOffset).selectionState;
  }, "backward");
  if (afterRemoval === editorState.getCurrentContent()) {
    return editorState;
  }
  return EditorState$d.push(editorState, afterRemoval, "remove-range");
}
var keyCommandBackspaceToStartOfLine_1 = keyCommandBackspaceToStartOfLine$1;
var PUNCTUATION = `[.,+*?$|#{}()'\\^\\-\\[\\]\\\\\\/!@%"~=<>_:;・、。〈-】〔-〟：-？！-／［-｀｛-･⸮؟٪-٬؛،؍﴾﴿᠁।၊။‐-‧‰-⁞¡-±´-¸º»¿]`;
var TokenizeUtil$1 = {
  getPunctuation: function getPunctuation() {
    return PUNCTUATION;
  }
};
var TokenizeUtil = TokenizeUtil$1;
var punctuation = TokenizeUtil.getPunctuation();
var CHAMELEON_CHARS = "['‘’]";
var WHITESPACE_AND_PUNCTUATION = "\\s|(?![_])" + punctuation;
var DELETE_STRING = "^(?:" + WHITESPACE_AND_PUNCTUATION + ")*(?:" + CHAMELEON_CHARS + "|(?!" + WHITESPACE_AND_PUNCTUATION + ").)*(?:(?!" + WHITESPACE_AND_PUNCTUATION + ").)";
var DELETE_REGEX = new RegExp(DELETE_STRING);
var BACKSPACE_STRING = "(?:(?!" + WHITESPACE_AND_PUNCTUATION + ").)(?:" + CHAMELEON_CHARS + "|(?!" + WHITESPACE_AND_PUNCTUATION + ").)*(?:" + WHITESPACE_AND_PUNCTUATION + ")*$";
var BACKSPACE_REGEX = new RegExp(BACKSPACE_STRING);
function getRemovableWord(text, isBackward) {
  var matches = isBackward ? BACKSPACE_REGEX.exec(text) : DELETE_REGEX.exec(text);
  return matches ? matches[0] : text;
}
var DraftRemovableWord$2 = {
  getBackward: function getBackward(text) {
    return getRemovableWord(text, true);
  },
  getForward: function getForward(text) {
    return getRemovableWord(text, false);
  }
};
var DraftRemovableWord_1 = DraftRemovableWord$2;
var DraftRemovableWord$1 = DraftRemovableWord_1;
var EditorState$c = EditorState_1;
var moveSelectionBackward = moveSelectionBackward_1;
var removeTextWithStrategy$2 = removeTextWithStrategy_1;
function keyCommandBackspaceWord$1(editorState) {
  var afterRemoval = removeTextWithStrategy$2(editorState, function(strategyState) {
    var selection = strategyState.getSelection();
    var offset = selection.getStartOffset();
    if (offset === 0) {
      return moveSelectionBackward(strategyState, 1);
    }
    var key = selection.getStartKey();
    var content = strategyState.getCurrentContent();
    var text = content.getBlockForKey(key).getText().slice(0, offset);
    var toRemove = DraftRemovableWord$1.getBackward(text);
    return moveSelectionBackward(strategyState, toRemove.length || 1);
  }, "backward");
  if (afterRemoval === editorState.getCurrentContent()) {
    return editorState;
  }
  return EditorState$c.push(editorState, afterRemoval, "remove-range");
}
var keyCommandBackspaceWord_1 = keyCommandBackspaceWord$1;
function moveSelectionForward$2(editorState, maxDistance) {
  var selection = editorState.getSelection();
  var key = selection.getStartKey();
  var offset = selection.getStartOffset();
  var content = editorState.getCurrentContent();
  var focusKey = key;
  var focusOffset;
  var block = content.getBlockForKey(key);
  if (maxDistance > block.getText().length - offset) {
    focusKey = content.getKeyAfter(key);
    focusOffset = 0;
  } else {
    focusOffset = offset + maxDistance;
  }
  return selection.merge({
    focusKey,
    focusOffset
  });
}
var moveSelectionForward_1 = moveSelectionForward$2;
var DraftRemovableWord = DraftRemovableWord_1;
var EditorState$b = EditorState_1;
var moveSelectionForward$1 = moveSelectionForward_1;
var removeTextWithStrategy$1 = removeTextWithStrategy_1;
function keyCommandDeleteWord$1(editorState) {
  var afterRemoval = removeTextWithStrategy$1(editorState, function(strategyState) {
    var selection = strategyState.getSelection();
    var offset = selection.getStartOffset();
    var key = selection.getStartKey();
    var content = strategyState.getCurrentContent();
    var text = content.getBlockForKey(key).getText().slice(offset);
    var toRemove = DraftRemovableWord.getForward(text);
    return moveSelectionForward$1(strategyState, toRemove.length || 1);
  }, "forward");
  if (afterRemoval === editorState.getCurrentContent()) {
    return editorState;
  }
  return EditorState$b.push(editorState, afterRemoval, "remove-range");
}
var keyCommandDeleteWord_1 = keyCommandDeleteWord$1;
var DraftModifier$5 = DraftModifier_1;
var EditorState$a = EditorState_1;
function keyCommandInsertNewline$1(editorState) {
  var contentState = DraftModifier$5.splitBlock(editorState.getCurrentContent(), editorState.getSelection());
  return EditorState$a.push(editorState, contentState, "split-block");
}
var keyCommandInsertNewline_1 = keyCommandInsertNewline$1;
var EditorState$9 = EditorState_1;
function keyCommandMoveSelectionToEndOfBlock$1(editorState) {
  var selection = editorState.getSelection();
  var endKey = selection.getEndKey();
  var content = editorState.getCurrentContent();
  var textLength = content.getBlockForKey(endKey).getLength();
  return EditorState$9.set(editorState, {
    selection: selection.merge({
      anchorKey: endKey,
      anchorOffset: textLength,
      focusKey: endKey,
      focusOffset: textLength,
      isBackward: false
    }),
    forceSelection: true
  });
}
var keyCommandMoveSelectionToEndOfBlock_1 = keyCommandMoveSelectionToEndOfBlock$1;
var EditorState$8 = EditorState_1;
function keyCommandMoveSelectionToStartOfBlock$1(editorState) {
  var selection = editorState.getSelection();
  var startKey = selection.getStartKey();
  return EditorState$8.set(editorState, {
    selection: selection.merge({
      anchorKey: startKey,
      anchorOffset: 0,
      focusKey: startKey,
      focusOffset: 0,
      isBackward: false
    }),
    forceSelection: true
  });
}
var keyCommandMoveSelectionToStartOfBlock_1 = keyCommandMoveSelectionToStartOfBlock$1;
var EditorState$7 = EditorState_1;
var UnicodeUtils$4 = UnicodeUtils_1;
var moveSelectionForward = moveSelectionForward_1;
var removeTextWithStrategy = removeTextWithStrategy_1;
function keyCommandPlainDelete$1(editorState) {
  var afterRemoval = removeTextWithStrategy(editorState, function(strategyState) {
    var selection2 = strategyState.getSelection();
    var content = strategyState.getCurrentContent();
    var key = selection2.getAnchorKey();
    var offset = selection2.getAnchorOffset();
    var charAhead = content.getBlockForKey(key).getText()[offset];
    return moveSelectionForward(strategyState, charAhead ? UnicodeUtils$4.getUTF16Length(charAhead, 0) : 1);
  }, "forward");
  if (afterRemoval === editorState.getCurrentContent()) {
    return editorState;
  }
  var selection = editorState.getSelection();
  return EditorState$7.push(editorState, afterRemoval.set("selectionBefore", selection), selection.isCollapsed() ? "delete-character" : "remove-range");
}
var keyCommandPlainDelete_1 = keyCommandPlainDelete$1;
var DraftModifier$4 = DraftModifier_1;
var EditorState$6 = EditorState_1;
var getContentStateFragment2 = getContentStateFragment_1;
function keyCommandTransposeCharacters$1(editorState) {
  var selection = editorState.getSelection();
  if (!selection.isCollapsed()) {
    return editorState;
  }
  var offset = selection.getAnchorOffset();
  if (offset === 0) {
    return editorState;
  }
  var blockKey = selection.getAnchorKey();
  var content = editorState.getCurrentContent();
  var block = content.getBlockForKey(blockKey);
  var length = block.getLength();
  if (length <= 1) {
    return editorState;
  }
  var removalRange;
  var finalSelection;
  if (offset === length) {
    removalRange = selection.set("anchorOffset", offset - 1);
    finalSelection = selection;
  } else {
    removalRange = selection.set("focusOffset", offset + 1);
    finalSelection = removalRange.set("anchorOffset", offset + 1);
  }
  var movedFragment = getContentStateFragment2(content, removalRange);
  var afterRemoval = DraftModifier$4.removeRange(content, removalRange, "backward");
  var selectionAfter = afterRemoval.getSelectionAfter();
  var targetOffset = selectionAfter.getAnchorOffset() - 1;
  var targetRange = selectionAfter.merge({
    anchorOffset: targetOffset,
    focusOffset: targetOffset
  });
  var afterInsert = DraftModifier$4.replaceWithFragment(afterRemoval, targetRange, movedFragment);
  var newEditorState = EditorState$6.push(editorState, afterInsert, "insert-fragment");
  return EditorState$6.acceptSelection(newEditorState, finalSelection);
}
var keyCommandTransposeCharacters_1 = keyCommandTransposeCharacters$1;
var EditorState$5 = EditorState_1;
function keyCommandUndo$1(e2, editorState, updateFn) {
  var undoneState = EditorState$5.undo(editorState);
  if (editorState.getLastChangeType() === "spellcheck-change") {
    var nativelyRenderedContent = undoneState.getCurrentContent();
    updateFn(EditorState$5.set(undoneState, {
      nativelyRenderedContent
    }));
    return;
  }
  e2.preventDefault();
  if (!editorState.getNativelyRenderedContent()) {
    updateFn(undoneState);
    return;
  }
  updateFn(EditorState$5.set(editorState, {
    nativelyRenderedContent: null
  }));
  setTimeout(function() {
    updateFn(undoneState);
  }, 0);
}
var keyCommandUndo_1 = keyCommandUndo$1;
var DraftModifier$3 = DraftModifier_1;
var EditorState$4 = EditorState_1;
var KeyBindingUtil$2 = KeyBindingUtil_1;
var Keys$1 = Keys$4;
var SecondaryClipboard = SecondaryClipboard_1;
var UserAgent$4 = UserAgent_1;
var isEventHandled$1 = isEventHandled_1;
var keyCommandBackspaceToStartOfLine = keyCommandBackspaceToStartOfLine_1;
var keyCommandBackspaceWord = keyCommandBackspaceWord_1;
var keyCommandDeleteWord = keyCommandDeleteWord_1;
var keyCommandInsertNewline = keyCommandInsertNewline_1;
var keyCommandMoveSelectionToEndOfBlock = keyCommandMoveSelectionToEndOfBlock_1;
var keyCommandMoveSelectionToStartOfBlock = keyCommandMoveSelectionToStartOfBlock_1;
var keyCommandPlainBackspace = keyCommandPlainBackspace_1;
var keyCommandPlainDelete = keyCommandPlainDelete_1;
var keyCommandTransposeCharacters = keyCommandTransposeCharacters_1;
var keyCommandUndo = keyCommandUndo_1;
var isOptionKeyCommand2 = KeyBindingUtil$2.isOptionKeyCommand;
var isChrome$1 = UserAgent$4.isBrowser("Chrome");
function onKeyCommand(command, editorState, e2) {
  switch (command) {
    case "redo":
      return EditorState$4.redo(editorState);
    case "delete":
      return keyCommandPlainDelete(editorState);
    case "delete-word":
      return keyCommandDeleteWord(editorState);
    case "backspace":
      return keyCommandPlainBackspace(editorState);
    case "backspace-word":
      return keyCommandBackspaceWord(editorState);
    case "backspace-to-start-of-line":
      return keyCommandBackspaceToStartOfLine(editorState, e2);
    case "split-block":
      return keyCommandInsertNewline(editorState);
    case "transpose-characters":
      return keyCommandTransposeCharacters(editorState);
    case "move-selection-to-start-of-block":
      return keyCommandMoveSelectionToStartOfBlock(editorState);
    case "move-selection-to-end-of-block":
      return keyCommandMoveSelectionToEndOfBlock(editorState);
    case "secondary-cut":
      return SecondaryClipboard.cut(editorState);
    case "secondary-paste":
      return SecondaryClipboard.paste(editorState);
    default:
      return editorState;
  }
}
function editOnKeyDown(editor, e2) {
  var keyCode = e2.which;
  var editorState = editor._latestEditorState;
  function callDeprecatedHandler(handlerName) {
    var deprecatedHandler = editor.props[handlerName];
    if (deprecatedHandler) {
      deprecatedHandler(e2);
      return true;
    } else {
      return false;
    }
  }
  switch (keyCode) {
    case Keys$1.RETURN:
      e2.preventDefault();
      if (editor.props.handleReturn && isEventHandled$1(editor.props.handleReturn(e2, editorState))) {
        return;
      }
      break;
    case Keys$1.ESC:
      e2.preventDefault();
      if (callDeprecatedHandler("onEscape")) {
        return;
      }
      break;
    case Keys$1.TAB:
      if (callDeprecatedHandler("onTab")) {
        return;
      }
      break;
    case Keys$1.UP:
      if (callDeprecatedHandler("onUpArrow")) {
        return;
      }
      break;
    case Keys$1.RIGHT:
      if (callDeprecatedHandler("onRightArrow")) {
        return;
      }
      break;
    case Keys$1.DOWN:
      if (callDeprecatedHandler("onDownArrow")) {
        return;
      }
      break;
    case Keys$1.LEFT:
      if (callDeprecatedHandler("onLeftArrow")) {
        return;
      }
      break;
    case Keys$1.SPACE:
      if (isChrome$1 && isOptionKeyCommand2(e2)) {
        e2.preventDefault();
      }
  }
  var command = editor.props.keyBindingFn(e2);
  if (command == null || command === "") {
    if (keyCode === Keys$1.SPACE && isChrome$1 && isOptionKeyCommand2(e2)) {
      var contentState = DraftModifier$3.replaceText(editorState.getCurrentContent(), editorState.getSelection(), " ");
      editor.update(EditorState$4.push(editorState, contentState, "insert-characters"));
    }
    return;
  }
  if (command === "undo") {
    keyCommandUndo(e2, editorState, editor.update);
    return;
  }
  e2.preventDefault();
  if (editor.props.handleKeyCommand && isEventHandled$1(editor.props.handleKeyCommand(command, editorState, e2.timeStamp))) {
    return;
  }
  var newState = onKeyCommand(command, editorState, e2);
  if (newState !== editorState) {
    editor.update(newState);
  }
}
var editOnKeyDown_1 = editOnKeyDown;
function _defineProperty$6(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var URI$1 = /* @__PURE__ */ function() {
  function URI2(uri) {
    _defineProperty$6(this, "_uri", void 0);
    this._uri = uri;
  }
  var _proto = URI2.prototype;
  _proto.toString = function toString3() {
    return this._uri;
  };
  return URI2;
}();
var URI_1 = URI$1;
var UserAgent$3 = UserAgent_1;
var invariant$4 = invariant_1;
var isOldIE = UserAgent$3.isBrowser("IE <= 9");
function getSafeBodyFromHTML$2(html) {
  var doc;
  var root = null;
  if (!isOldIE && document.implementation && document.implementation.createHTMLDocument) {
    doc = document.implementation.createHTMLDocument("foo");
    !doc.documentElement ? invariant$4(false) : void 0;
    doc.documentElement.innerHTML = html;
    root = doc.getElementsByTagName("body")[0];
  }
  return root;
}
var getSafeBodyFromHTML_1 = getSafeBodyFromHTML$2;
var isElement$1 = isElement_1;
function isHTMLAnchorElement$1(node) {
  if (!node || !node.ownerDocument) {
    return false;
  }
  return isElement$1(node) && node.nodeName === "A";
}
var isHTMLAnchorElement_1 = isHTMLAnchorElement$1;
var isElement = isElement_1;
function isHTMLImageElement$1(node) {
  if (!node || !node.ownerDocument) {
    return false;
  }
  return isElement(node) && node.nodeName === "IMG";
}
var isHTMLImageElement_1 = isHTMLImageElement$1;
var _knownListItemDepthCl;
function _objectSpread$5(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty$5(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$5(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var CharacterMetadata$3 = CharacterMetadata_1;
var ContentBlock$4 = ContentBlock_1;
var ContentBlockNode$3 = ContentBlockNode_1;
var DefaultDraftBlockRenderMap$2 = DefaultDraftBlockRenderMap_1;
var DraftEntity$2 = DraftEntity_1;
var URI = URI_1;
var cx$2 = cx_1;
var generateRandomKey$5 = generateRandomKey_1;
var getSafeBodyFromHTML$1 = getSafeBodyFromHTML_1;
var gkx$3 = gkx$8;
var _require$1 = immutableExports, List$3 = _require$1.List, Map$2 = _require$1.Map, OrderedSet$1 = _require$1.OrderedSet;
var isHTMLAnchorElement = isHTMLAnchorElement_1;
var isHTMLBRElement = isHTMLBRElement_1;
var isHTMLElement$1 = isHTMLElement_1;
var isHTMLImageElement = isHTMLImageElement_1;
var experimentalTreeDataSupport$2 = gkx$3("draft_tree_data_support");
var NBSP = "&nbsp;";
var SPACE = " ";
var REGEX_CR = new RegExp("\r", "g");
var REGEX_LF = new RegExp("\n", "g");
var REGEX_LEADING_LF = new RegExp("^\n", "g");
var REGEX_NBSP = new RegExp(NBSP, "g");
var REGEX_CARRIAGE = new RegExp("&#13;?", "g");
var REGEX_ZWS = new RegExp("&#8203;?", "g");
var boldValues = ["bold", "bolder", "500", "600", "700", "800", "900"];
var notBoldValues = ["light", "lighter", "normal", "100", "200", "300", "400"];
var anchorAttr = ["className", "href", "rel", "target", "title"];
var imgAttr = ["alt", "className", "height", "src", "width"];
var knownListItemDepthClasses = (_knownListItemDepthCl = {}, _defineProperty$5(_knownListItemDepthCl, cx$2("public/DraftStyleDefault/depth0"), 0), _defineProperty$5(_knownListItemDepthCl, cx$2("public/DraftStyleDefault/depth1"), 1), _defineProperty$5(_knownListItemDepthCl, cx$2("public/DraftStyleDefault/depth2"), 2), _defineProperty$5(_knownListItemDepthCl, cx$2("public/DraftStyleDefault/depth3"), 3), _defineProperty$5(_knownListItemDepthCl, cx$2("public/DraftStyleDefault/depth4"), 4), _knownListItemDepthCl);
var HTMLTagToRawInlineStyleMap = Map$2({
  b: "BOLD",
  code: "CODE",
  del: "STRIKETHROUGH",
  em: "ITALIC",
  i: "ITALIC",
  s: "STRIKETHROUGH",
  strike: "STRIKETHROUGH",
  strong: "BOLD",
  u: "UNDERLINE",
  mark: "HIGHLIGHT"
});
var buildBlockTypeMap = function buildBlockTypeMap2(blockRenderMap) {
  var blockTypeMap = {};
  blockRenderMap.mapKeys(function(blockType, desc) {
    var elements = [desc.element];
    if (desc.aliasedElements !== void 0) {
      elements.push.apply(elements, desc.aliasedElements);
    }
    elements.forEach(function(element) {
      if (blockTypeMap[element] === void 0) {
        blockTypeMap[element] = blockType;
      } else if (typeof blockTypeMap[element] === "string") {
        blockTypeMap[element] = [blockTypeMap[element], blockType];
      } else {
        blockTypeMap[element].push(blockType);
      }
    });
  });
  return Map$2(blockTypeMap);
};
var detectInlineStyle = function detectInlineStyle2(node) {
  if (isHTMLElement$1(node)) {
    var element = node;
    if (element.style.fontFamily.includes("monospace")) {
      return "CODE";
    }
  }
  return null;
};
var getListItemDepth = function getListItemDepth2(node) {
  var depth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  Object.keys(knownListItemDepthClasses).some(function(depthClass) {
    if (node.classList.contains(depthClass)) {
      depth = knownListItemDepthClasses[depthClass];
    }
  });
  return depth;
};
var isValidAnchor = function isValidAnchor2(node) {
  if (!isHTMLAnchorElement(node)) {
    return false;
  }
  var anchorNode = node;
  if (!anchorNode.href || anchorNode.protocol !== "http:" && anchorNode.protocol !== "https:" && anchorNode.protocol !== "mailto:" && anchorNode.protocol !== "tel:") {
    return false;
  }
  try {
    var _2 = new URI(anchorNode.href);
    return true;
  } catch (_3) {
    return false;
  }
};
var isValidImage = function isValidImage2(node) {
  if (!isHTMLImageElement(node)) {
    return false;
  }
  var imageNode = node;
  return !!(imageNode.attributes.getNamedItem("src") && imageNode.attributes.getNamedItem("src").value);
};
var styleFromNodeAttributes = function styleFromNodeAttributes2(node, style) {
  if (!isHTMLElement$1(node)) {
    return style;
  }
  var htmlElement = node;
  var fontWeight = htmlElement.style.fontWeight;
  var fontStyle = htmlElement.style.fontStyle;
  var textDecoration = htmlElement.style.textDecoration;
  return style.withMutations(function(style2) {
    if (boldValues.indexOf(fontWeight) >= 0) {
      style2.add("BOLD");
    } else if (notBoldValues.indexOf(fontWeight) >= 0) {
      style2.remove("BOLD");
    }
    if (fontStyle === "italic") {
      style2.add("ITALIC");
    } else if (fontStyle === "normal") {
      style2.remove("ITALIC");
    }
    if (textDecoration === "underline") {
      style2.add("UNDERLINE");
    }
    if (textDecoration === "line-through") {
      style2.add("STRIKETHROUGH");
    }
    if (textDecoration === "none") {
      style2.remove("UNDERLINE");
      style2.remove("STRIKETHROUGH");
    }
  });
};
var isListNode = function isListNode2(nodeName) {
  return nodeName === "ul" || nodeName === "ol";
};
var ContentBlocksBuilder = /* @__PURE__ */ function() {
  function ContentBlocksBuilder2(blockTypeMap, disambiguate) {
    _defineProperty$5(this, "characterList", List$3());
    _defineProperty$5(this, "currentBlockType", "unstyled");
    _defineProperty$5(this, "currentDepth", 0);
    _defineProperty$5(this, "currentEntity", null);
    _defineProperty$5(this, "currentText", "");
    _defineProperty$5(this, "wrapper", null);
    _defineProperty$5(this, "blockConfigs", []);
    _defineProperty$5(this, "contentBlocks", []);
    _defineProperty$5(this, "entityMap", DraftEntity$2);
    _defineProperty$5(this, "blockTypeMap", void 0);
    _defineProperty$5(this, "disambiguate", void 0);
    this.clear();
    this.blockTypeMap = blockTypeMap;
    this.disambiguate = disambiguate;
  }
  var _proto = ContentBlocksBuilder2.prototype;
  _proto.clear = function clear() {
    this.characterList = List$3();
    this.blockConfigs = [];
    this.currentBlockType = "unstyled";
    this.currentDepth = 0;
    this.currentEntity = null;
    this.currentText = "";
    this.entityMap = DraftEntity$2;
    this.wrapper = null;
    this.contentBlocks = [];
  };
  _proto.addDOMNode = function addDOMNode(node) {
    var _this$blockConfigs;
    this.contentBlocks = [];
    this.currentDepth = 0;
    (_this$blockConfigs = this.blockConfigs).push.apply(_this$blockConfigs, this._toBlockConfigs([node], OrderedSet$1()));
    this._trimCurrentText();
    if (this.currentText !== "") {
      this.blockConfigs.push(this._makeBlockConfig());
    }
    return this;
  };
  _proto.getContentBlocks = function getContentBlocks() {
    if (this.contentBlocks.length === 0) {
      if (experimentalTreeDataSupport$2) {
        this._toContentBlocks(this.blockConfigs);
      } else {
        this._toFlatContentBlocks(this.blockConfigs);
      }
    }
    return {
      contentBlocks: this.contentBlocks,
      entityMap: this.entityMap
    };
  };
  _proto._makeBlockConfig = function _makeBlockConfig() {
    var config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var key = config.key || generateRandomKey$5();
    var block = _objectSpread$5({
      key,
      type: this.currentBlockType,
      text: this.currentText,
      characterList: this.characterList,
      depth: this.currentDepth,
      parent: null,
      children: List$3(),
      prevSibling: null,
      nextSibling: null,
      childConfigs: []
    }, config);
    this.characterList = List$3();
    this.currentBlockType = "unstyled";
    this.currentText = "";
    return block;
  };
  _proto._toBlockConfigs = function _toBlockConfigs(nodes, style) {
    var blockConfigs = [];
    for (var i2 = 0; i2 < nodes.length; i2++) {
      var node = nodes[i2];
      var nodeName = node.nodeName.toLowerCase();
      if (nodeName === "body" || isListNode(nodeName)) {
        this._trimCurrentText();
        if (this.currentText !== "") {
          blockConfigs.push(this._makeBlockConfig());
        }
        var wasCurrentDepth = this.currentDepth;
        var wasWrapper = this.wrapper;
        if (isListNode(nodeName)) {
          this.wrapper = nodeName;
          if (isListNode(wasWrapper)) {
            this.currentDepth++;
          }
        }
        blockConfigs.push.apply(blockConfigs, this._toBlockConfigs(Array.from(node.childNodes), style));
        this.currentDepth = wasCurrentDepth;
        this.wrapper = wasWrapper;
        continue;
      }
      var blockType = this.blockTypeMap.get(nodeName);
      if (blockType !== void 0) {
        this._trimCurrentText();
        if (this.currentText !== "") {
          blockConfigs.push(this._makeBlockConfig());
        }
        var _wasCurrentDepth = this.currentDepth;
        var _wasWrapper = this.wrapper;
        this.wrapper = nodeName === "pre" ? "pre" : this.wrapper;
        if (typeof blockType !== "string") {
          blockType = this.disambiguate(nodeName, this.wrapper) || blockType[0] || "unstyled";
        }
        if (!experimentalTreeDataSupport$2 && isHTMLElement$1(node) && (blockType === "unordered-list-item" || blockType === "ordered-list-item")) {
          var htmlElement = node;
          this.currentDepth = getListItemDepth(htmlElement, this.currentDepth);
        }
        var key = generateRandomKey$5();
        var childConfigs = this._toBlockConfigs(Array.from(node.childNodes), style);
        this._trimCurrentText();
        blockConfigs.push(this._makeBlockConfig({
          key,
          childConfigs,
          type: blockType
        }));
        this.currentDepth = _wasCurrentDepth;
        this.wrapper = _wasWrapper;
        continue;
      }
      if (nodeName === "#text") {
        this._addTextNode(node, style);
        continue;
      }
      if (nodeName === "br") {
        this._addBreakNode(node, style);
        continue;
      }
      if (isValidImage(node)) {
        this._addImgNode(node, style);
        continue;
      }
      if (isValidAnchor(node)) {
        this._addAnchorNode(node, blockConfigs, style);
        continue;
      }
      var newStyle = style;
      if (HTMLTagToRawInlineStyleMap.has(nodeName)) {
        newStyle = newStyle.add(HTMLTagToRawInlineStyleMap.get(nodeName));
      }
      newStyle = styleFromNodeAttributes(node, newStyle);
      var inlineStyle = detectInlineStyle(node);
      if (inlineStyle != null) {
        newStyle = newStyle.add(inlineStyle);
      }
      blockConfigs.push.apply(blockConfigs, this._toBlockConfigs(Array.from(node.childNodes), newStyle));
    }
    return blockConfigs;
  };
  _proto._appendText = function _appendText(text, style) {
    var _this$characterList;
    this.currentText += text;
    var characterMetadata = CharacterMetadata$3.create({
      style,
      entity: this.currentEntity
    });
    this.characterList = (_this$characterList = this.characterList).push.apply(_this$characterList, Array(text.length).fill(characterMetadata));
  };
  _proto._trimCurrentText = function _trimCurrentText() {
    var l2 = this.currentText.length;
    var begin = l2 - this.currentText.trimLeft().length;
    var end = this.currentText.trimRight().length;
    var entity = this.characterList.findEntry(function(characterMetadata) {
      return characterMetadata.getEntity() !== null;
    });
    begin = entity !== void 0 ? Math.min(begin, entity[0]) : begin;
    entity = this.characterList.reverse().findEntry(function(characterMetadata) {
      return characterMetadata.getEntity() !== null;
    });
    end = entity !== void 0 ? Math.max(end, l2 - entity[0]) : end;
    if (begin > end) {
      this.currentText = "";
      this.characterList = List$3();
    } else {
      this.currentText = this.currentText.slice(begin, end);
      this.characterList = this.characterList.slice(begin, end);
    }
  };
  _proto._addTextNode = function _addTextNode(node, style) {
    var text = node.textContent;
    var trimmedText = text.trim();
    if (trimmedText === "" && this.wrapper !== "pre") {
      text = " ";
    }
    if (this.wrapper !== "pre") {
      text = text.replace(REGEX_LEADING_LF, "");
      text = text.replace(REGEX_LF, SPACE);
    }
    this._appendText(text, style);
  };
  _proto._addBreakNode = function _addBreakNode(node, style) {
    if (!isHTMLBRElement(node)) {
      return;
    }
    this._appendText("\n", style);
  };
  _proto._addImgNode = function _addImgNode(node, style) {
    if (!isHTMLImageElement(node)) {
      return;
    }
    var image = node;
    var entityConfig = {};
    imgAttr.forEach(function(attr) {
      var imageAttribute = image.getAttribute(attr);
      if (imageAttribute) {
        entityConfig[attr] = imageAttribute;
      }
    });
    this.currentEntity = this.entityMap.__create("IMAGE", "IMMUTABLE", entityConfig);
    if (gkx$3("draftjs_fix_paste_for_img")) {
      if (image.getAttribute("role") !== "presentation") {
        this._appendText("📷", style);
      }
    } else {
      this._appendText("📷", style);
    }
    this.currentEntity = null;
  };
  _proto._addAnchorNode = function _addAnchorNode(node, blockConfigs, style) {
    if (!isHTMLAnchorElement(node)) {
      return;
    }
    var anchor = node;
    var entityConfig = {};
    anchorAttr.forEach(function(attr) {
      var anchorAttribute = anchor.getAttribute(attr);
      if (anchorAttribute) {
        entityConfig[attr] = anchorAttribute;
      }
    });
    entityConfig.url = new URI(anchor.href).toString();
    this.currentEntity = this.entityMap.__create("LINK", "MUTABLE", entityConfig || {});
    blockConfigs.push.apply(blockConfigs, this._toBlockConfigs(Array.from(node.childNodes), style));
    this.currentEntity = null;
  };
  _proto._toContentBlocks = function _toContentBlocks(blockConfigs) {
    var parent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    var l2 = blockConfigs.length - 1;
    for (var i2 = 0; i2 <= l2; i2++) {
      var config = blockConfigs[i2];
      config.parent = parent;
      config.prevSibling = i2 > 0 ? blockConfigs[i2 - 1].key : null;
      config.nextSibling = i2 < l2 ? blockConfigs[i2 + 1].key : null;
      config.children = List$3(config.childConfigs.map(function(child) {
        return child.key;
      }));
      this.contentBlocks.push(new ContentBlockNode$3(_objectSpread$5({}, config)));
      this._toContentBlocks(config.childConfigs, config.key);
    }
  };
  _proto._hoistContainersInBlockConfigs = function _hoistContainersInBlockConfigs(blockConfigs) {
    var _this = this;
    var hoisted = List$3(blockConfigs).flatMap(function(blockConfig) {
      if (blockConfig.type !== "unstyled" || blockConfig.text !== "") {
        return [blockConfig];
      }
      return _this._hoistContainersInBlockConfigs(blockConfig.childConfigs);
    });
    return hoisted;
  };
  _proto._toFlatContentBlocks = function _toFlatContentBlocks(blockConfigs) {
    var _this2 = this;
    var cleanConfigs = this._hoistContainersInBlockConfigs(blockConfigs);
    cleanConfigs.forEach(function(config) {
      var _this2$_extractTextFr = _this2._extractTextFromBlockConfigs(config.childConfigs), text = _this2$_extractTextFr.text, characterList = _this2$_extractTextFr.characterList;
      _this2.contentBlocks.push(new ContentBlock$4(_objectSpread$5({}, config, {
        text: config.text + text,
        characterList: config.characterList.concat(characterList)
      })));
    });
  };
  _proto._extractTextFromBlockConfigs = function _extractTextFromBlockConfigs(blockConfigs) {
    var l2 = blockConfigs.length - 1;
    var text = "";
    var characterList = List$3();
    for (var i2 = 0; i2 <= l2; i2++) {
      var config = blockConfigs[i2];
      text += config.text;
      characterList = characterList.concat(config.characterList);
      if (text !== "" && config.type !== "unstyled") {
        text += "\n";
        characterList = characterList.push(characterList.last());
      }
      var children = this._extractTextFromBlockConfigs(config.childConfigs);
      text += children.text;
      characterList = characterList.concat(children.characterList);
    }
    return {
      text,
      characterList
    };
  };
  return ContentBlocksBuilder2;
}();
var convertFromHTMLToContentBlocks$1 = function convertFromHTMLToContentBlocks(html) {
  var DOMBuilder = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getSafeBodyFromHTML$1;
  var blockRenderMap = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : DefaultDraftBlockRenderMap$2;
  html = html.trim().replace(REGEX_CR, "").replace(REGEX_NBSP, SPACE).replace(REGEX_CARRIAGE, "").replace(REGEX_ZWS, "");
  var safeBody = DOMBuilder(html);
  if (!safeBody) {
    return null;
  }
  var blockTypeMap = buildBlockTypeMap(blockRenderMap);
  var disambiguate = function disambiguate2(tag, wrapper) {
    if (tag === "li") {
      return wrapper === "ol" ? "ordered-list-item" : "unordered-list-item";
    }
    return null;
  };
  return new ContentBlocksBuilder(blockTypeMap, disambiguate).addDOMNode(safeBody).getContentBlocks();
};
var convertFromHTMLToContentBlocks_1 = convertFromHTMLToContentBlocks$1;
function _objectSpread$4(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty$4(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ContentBlock$3 = ContentBlock_1;
var ContentBlockNode$2 = ContentBlockNode_1;
var convertFromHTMLToContentBlocks2 = convertFromHTMLToContentBlocks_1;
var generateRandomKey$4 = generateRandomKey_1;
var getSafeBodyFromHTML = getSafeBodyFromHTML_1;
var gkx$2 = gkx$8;
var Immutable$2 = immutableExports;
var sanitizeDraftText = sanitizeDraftText_1;
var List$2 = Immutable$2.List, Repeat = Immutable$2.Repeat;
var experimentalTreeDataSupport$1 = gkx$2("draft_tree_data_support");
var ContentBlockRecord = experimentalTreeDataSupport$1 ? ContentBlockNode$2 : ContentBlock$3;
var DraftPasteProcessor$1 = {
  processHTML: function processHTML(html, blockRenderMap) {
    return convertFromHTMLToContentBlocks2(html, getSafeBodyFromHTML, blockRenderMap);
  },
  processText: function processText(textBlocks, character, type) {
    return textBlocks.reduce(function(acc, textLine, index) {
      textLine = sanitizeDraftText(textLine);
      var key = generateRandomKey$4();
      var blockNodeConfig = {
        key,
        type,
        text: textLine,
        characterList: List$2(Repeat(character, textLine.length))
      };
      if (experimentalTreeDataSupport$1 && index !== 0) {
        var prevSiblingIndex = index - 1;
        var previousBlock = acc[prevSiblingIndex] = acc[prevSiblingIndex].merge({
          nextSibling: key
        });
        blockNodeConfig = _objectSpread$4({}, blockNodeConfig, {
          prevSibling: previousBlock.getKey()
        });
      }
      acc.push(new ContentBlockRecord(blockNodeConfig));
      return acc;
    }, []);
  }
};
var DraftPasteProcessor_1 = DraftPasteProcessor$1;
function adjustBlockDepthForContentState$1(contentState, selectionState, adjustment, maxDepth) {
  var startKey = selectionState.getStartKey();
  var endKey = selectionState.getEndKey();
  var blockMap = contentState.getBlockMap();
  var blocks = blockMap.toSeq().skipUntil(function(_2, k2) {
    return k2 === startKey;
  }).takeUntil(function(_2, k2) {
    return k2 === endKey;
  }).concat([[endKey, blockMap.get(endKey)]]).map(function(block) {
    var depth = block.getDepth() + adjustment;
    depth = Math.max(0, Math.min(depth, maxDepth));
    return block.set("depth", depth);
  });
  blockMap = blockMap.merge(blocks);
  return contentState.merge({
    blockMap,
    selectionBefore: selectionState,
    selectionAfter: selectionState
  });
}
var adjustBlockDepthForContentState_1 = adjustBlockDepthForContentState$1;
var DraftModifier$2 = DraftModifier_1;
var EditorState$3 = EditorState_1;
var adjustBlockDepthForContentState = adjustBlockDepthForContentState_1;
var nullthrows$1 = nullthrows_1;
var RichTextEditorUtil$2 = {
  currentBlockContainsLink: function currentBlockContainsLink(editorState) {
    var selection = editorState.getSelection();
    var contentState = editorState.getCurrentContent();
    var entityMap = contentState.getEntityMap();
    return contentState.getBlockForKey(selection.getAnchorKey()).getCharacterList().slice(selection.getStartOffset(), selection.getEndOffset()).some(function(v2) {
      var entity = v2.getEntity();
      return !!entity && entityMap.__get(entity).getType() === "LINK";
    });
  },
  getCurrentBlockType: function getCurrentBlockType(editorState) {
    var selection = editorState.getSelection();
    return editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
  },
  getDataObjectForLinkURL: function getDataObjectForLinkURL(uri) {
    return {
      url: uri.toString()
    };
  },
  handleKeyCommand: function handleKeyCommand(editorState, command, eventTimeStamp) {
    switch (command) {
      case "bold":
        return RichTextEditorUtil$2.toggleInlineStyle(editorState, "BOLD");
      case "italic":
        return RichTextEditorUtil$2.toggleInlineStyle(editorState, "ITALIC");
      case "underline":
        return RichTextEditorUtil$2.toggleInlineStyle(editorState, "UNDERLINE");
      case "code":
        return RichTextEditorUtil$2.toggleCode(editorState);
      case "backspace":
      case "backspace-word":
      case "backspace-to-start-of-line":
        return RichTextEditorUtil$2.onBackspace(editorState);
      case "delete":
      case "delete-word":
      case "delete-to-end-of-block":
        return RichTextEditorUtil$2.onDelete(editorState);
      default:
        return null;
    }
  },
  insertSoftNewline: function insertSoftNewline(editorState) {
    var contentState = DraftModifier$2.insertText(editorState.getCurrentContent(), editorState.getSelection(), "\n", editorState.getCurrentInlineStyle(), null);
    var newEditorState = EditorState$3.push(editorState, contentState, "insert-characters");
    return EditorState$3.forceSelection(newEditorState, contentState.getSelectionAfter());
  },
  /**
   * For collapsed selections at the start of styled blocks, backspace should
   * just remove the existing style.
   */
  onBackspace: function onBackspace(editorState) {
    var selection = editorState.getSelection();
    if (!selection.isCollapsed() || selection.getAnchorOffset() || selection.getFocusOffset()) {
      return null;
    }
    var content = editorState.getCurrentContent();
    var startKey = selection.getStartKey();
    var blockBefore = content.getBlockBefore(startKey);
    if (blockBefore && blockBefore.getType() === "atomic") {
      var blockMap = content.getBlockMap()["delete"](blockBefore.getKey());
      var withoutAtomicBlock = content.merge({
        blockMap,
        selectionAfter: selection
      });
      if (withoutAtomicBlock !== content) {
        return EditorState$3.push(editorState, withoutAtomicBlock, "remove-range");
      }
    }
    var withoutBlockStyle = RichTextEditorUtil$2.tryToRemoveBlockStyle(editorState);
    if (withoutBlockStyle) {
      return EditorState$3.push(editorState, withoutBlockStyle, "change-block-type");
    }
    return null;
  },
  onDelete: function onDelete(editorState) {
    var selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      return null;
    }
    var content = editorState.getCurrentContent();
    var startKey = selection.getStartKey();
    var block = content.getBlockForKey(startKey);
    var length = block.getLength();
    if (selection.getStartOffset() < length) {
      return null;
    }
    var blockAfter = content.getBlockAfter(startKey);
    if (!blockAfter || blockAfter.getType() !== "atomic") {
      return null;
    }
    var atomicBlockTarget = selection.merge({
      focusKey: blockAfter.getKey(),
      focusOffset: blockAfter.getLength()
    });
    var withoutAtomicBlock = DraftModifier$2.removeRange(content, atomicBlockTarget, "forward");
    if (withoutAtomicBlock !== content) {
      return EditorState$3.push(editorState, withoutAtomicBlock, "remove-range");
    }
    return null;
  },
  onTab: function onTab(event, editorState, maxDepth) {
    var selection = editorState.getSelection();
    var key = selection.getAnchorKey();
    if (key !== selection.getFocusKey()) {
      return editorState;
    }
    var content = editorState.getCurrentContent();
    var block = content.getBlockForKey(key);
    var type = block.getType();
    if (type !== "unordered-list-item" && type !== "ordered-list-item") {
      return editorState;
    }
    event.preventDefault();
    var depth = block.getDepth();
    if (!event.shiftKey && depth === maxDepth) {
      return editorState;
    }
    var withAdjustment = adjustBlockDepthForContentState(content, selection, event.shiftKey ? -1 : 1, maxDepth);
    return EditorState$3.push(editorState, withAdjustment, "adjust-depth");
  },
  toggleBlockType: function toggleBlockType(editorState, blockType) {
    var selection = editorState.getSelection();
    var startKey = selection.getStartKey();
    var endKey = selection.getEndKey();
    var content = editorState.getCurrentContent();
    var target = selection;
    if (startKey !== endKey && selection.getEndOffset() === 0) {
      var blockBefore = nullthrows$1(content.getBlockBefore(endKey));
      endKey = blockBefore.getKey();
      target = target.merge({
        anchorKey: startKey,
        anchorOffset: selection.getStartOffset(),
        focusKey: endKey,
        focusOffset: blockBefore.getLength(),
        isBackward: false
      });
    }
    var hasAtomicBlock = content.getBlockMap().skipWhile(function(_2, k2) {
      return k2 !== startKey;
    }).reverse().skipWhile(function(_2, k2) {
      return k2 !== endKey;
    }).some(function(v2) {
      return v2.getType() === "atomic";
    });
    if (hasAtomicBlock) {
      return editorState;
    }
    var typeToSet = content.getBlockForKey(startKey).getType() === blockType ? "unstyled" : blockType;
    return EditorState$3.push(editorState, DraftModifier$2.setBlockType(content, target, typeToSet), "change-block-type");
  },
  toggleCode: function toggleCode(editorState) {
    var selection = editorState.getSelection();
    var anchorKey = selection.getAnchorKey();
    var focusKey = selection.getFocusKey();
    if (selection.isCollapsed() || anchorKey !== focusKey) {
      return RichTextEditorUtil$2.toggleBlockType(editorState, "code-block");
    }
    return RichTextEditorUtil$2.toggleInlineStyle(editorState, "CODE");
  },
  /**
   * Toggle the specified inline style for the selection. If the
   * user's selection is collapsed, apply or remove the style for the
   * internal state. If it is not collapsed, apply the change directly
   * to the document state.
   */
  toggleInlineStyle: function toggleInlineStyle(editorState, inlineStyle) {
    var selection = editorState.getSelection();
    var currentStyle = editorState.getCurrentInlineStyle();
    if (selection.isCollapsed()) {
      return EditorState$3.setInlineStyleOverride(editorState, currentStyle.has(inlineStyle) ? currentStyle.remove(inlineStyle) : currentStyle.add(inlineStyle));
    }
    var content = editorState.getCurrentContent();
    var newContent;
    if (currentStyle.has(inlineStyle)) {
      newContent = DraftModifier$2.removeInlineStyle(content, selection, inlineStyle);
    } else {
      newContent = DraftModifier$2.applyInlineStyle(content, selection, inlineStyle);
    }
    return EditorState$3.push(editorState, newContent, "change-inline-style");
  },
  toggleLink: function toggleLink(editorState, targetSelection, entityKey) {
    var withoutLink = DraftModifier$2.applyEntity(editorState.getCurrentContent(), targetSelection, entityKey);
    return EditorState$3.push(editorState, withoutLink, "apply-entity");
  },
  /**
   * When a collapsed cursor is at the start of a styled block, changes block
   * type to 'unstyled'. Returns null if selection does not meet that criteria.
   */
  tryToRemoveBlockStyle: function tryToRemoveBlockStyle(editorState) {
    var selection = editorState.getSelection();
    var offset = selection.getAnchorOffset();
    if (selection.isCollapsed() && offset === 0) {
      var key = selection.getAnchorKey();
      var content = editorState.getCurrentContent();
      var block = content.getBlockForKey(key);
      var type = block.getType();
      var blockBefore = content.getBlockBefore(key);
      if (type === "code-block" && blockBefore && blockBefore.getType() === "code-block" && blockBefore.getLength() !== 0) {
        return null;
      }
      if (type !== "unstyled") {
        return DraftModifier$2.setBlockType(content, selection, "unstyled");
      }
    }
    return null;
  }
};
var RichTextEditorUtil_1 = RichTextEditorUtil$2;
var NEWLINE_REGEX = /\r\n?|\n/g;
function splitTextIntoTextBlocks$1(text) {
  return text.split(NEWLINE_REGEX);
}
var splitTextIntoTextBlocks_1 = splitTextIntoTextBlocks$1;
var BlockMapBuilder$1 = BlockMapBuilder_1;
var CharacterMetadata$2 = CharacterMetadata_1;
var DataTransfer = DataTransfer_1;
var DraftModifier$1 = DraftModifier_1;
var DraftPasteProcessor = DraftPasteProcessor_1;
var EditorState$2 = EditorState_1;
var RichTextEditorUtil$1 = RichTextEditorUtil_1;
var getEntityKeyForSelection = getEntityKeyForSelection_1;
var getTextContentFromFiles = getTextContentFromFiles_1;
var isEventHandled = isEventHandled_1;
var splitTextIntoTextBlocks = splitTextIntoTextBlocks_1;
function editOnPaste(editor, e2) {
  e2.preventDefault();
  var data = new DataTransfer(e2.clipboardData);
  if (!data.isRichText()) {
    var files = data.getFiles();
    var defaultFileText = data.getText();
    if (files.length > 0) {
      if (editor.props.handlePastedFiles && isEventHandled(editor.props.handlePastedFiles(files))) {
        return;
      }
      getTextContentFromFiles(files, function(fileText) {
        fileText = fileText || defaultFileText;
        if (!fileText) {
          return;
        }
        var editorState2 = editor._latestEditorState;
        var blocks = splitTextIntoTextBlocks(fileText);
        var character2 = CharacterMetadata$2.create({
          style: editorState2.getCurrentInlineStyle(),
          entity: getEntityKeyForSelection(editorState2.getCurrentContent(), editorState2.getSelection())
        });
        var currentBlockType2 = RichTextEditorUtil$1.getCurrentBlockType(editorState2);
        var text2 = DraftPasteProcessor.processText(blocks, character2, currentBlockType2);
        var fragment = BlockMapBuilder$1.createFromArray(text2);
        var withInsertedText = DraftModifier$1.replaceWithFragment(editorState2.getCurrentContent(), editorState2.getSelection(), fragment);
        editor.update(EditorState$2.push(editorState2, withInsertedText, "insert-fragment"));
      });
      return;
    }
  }
  var textBlocks = [];
  var text = data.getText();
  var html = data.getHTML();
  var editorState = editor._latestEditorState;
  if (editor.props.formatPastedText) {
    var _editor$props$formatP = editor.props.formatPastedText(text, html), formattedText = _editor$props$formatP.text, formattedHtml = _editor$props$formatP.html;
    text = formattedText;
    html = formattedHtml;
  }
  if (editor.props.handlePastedText && isEventHandled(editor.props.handlePastedText(text, html, editorState))) {
    return;
  }
  if (text) {
    textBlocks = splitTextIntoTextBlocks(text);
  }
  if (!editor.props.stripPastedStyles) {
    var internalClipboard = editor.getClipboard();
    if (!editor.props.formatPastedText && data.isRichText() && internalClipboard) {
      var _html;
      if (
        // If the editorKey is present in the pasted HTML, it should be safe to
        // assume this is an internal paste.
        ((_html = html) === null || _html === void 0 ? void 0 : _html.indexOf(editor.getEditorKey())) !== -1 || // The copy may have been made within a single block, in which case the
        // editor key won't be part of the paste. In this case, just check
        // whether the pasted text matches the internal clipboard.
        textBlocks.length === 1 && internalClipboard.size === 1 && internalClipboard.first().getText() === text
      ) {
        editor.update(insertFragment2(editor._latestEditorState, internalClipboard));
        return;
      }
    } else if (internalClipboard && data.types.includes("com.apple.webarchive") && !data.types.includes("text/html") && areTextBlocksAndClipboardEqual(textBlocks, internalClipboard)) {
      editor.update(insertFragment2(editor._latestEditorState, internalClipboard));
      return;
    }
    if (html) {
      var htmlFragment = DraftPasteProcessor.processHTML(html, editor.props.blockRenderMap);
      if (htmlFragment) {
        var contentBlocks = htmlFragment.contentBlocks, entityMap = htmlFragment.entityMap;
        if (contentBlocks) {
          var htmlMap = BlockMapBuilder$1.createFromArray(contentBlocks);
          editor.update(insertFragment2(editor._latestEditorState, htmlMap, entityMap));
          return;
        }
      }
    }
    editor.setClipboard(null);
  }
  if (textBlocks.length) {
    var character = CharacterMetadata$2.create({
      style: editorState.getCurrentInlineStyle(),
      entity: getEntityKeyForSelection(editorState.getCurrentContent(), editorState.getSelection())
    });
    var currentBlockType = RichTextEditorUtil$1.getCurrentBlockType(editorState);
    var textFragment = DraftPasteProcessor.processText(textBlocks, character, currentBlockType);
    var textMap = BlockMapBuilder$1.createFromArray(textFragment);
    editor.update(insertFragment2(editor._latestEditorState, textMap));
  }
}
function insertFragment2(editorState, fragment, entityMap) {
  var newContent = DraftModifier$1.replaceWithFragment(editorState.getCurrentContent(), editorState.getSelection(), fragment);
  return EditorState$2.push(editorState, newContent.set("entityMap", entityMap), "insert-fragment");
}
function areTextBlocksAndClipboardEqual(textBlocks, blockMap) {
  return textBlocks.length === blockMap.size && blockMap.valueSeq().every(function(block, ii2) {
    return block.getText() === textBlocks[ii2];
  });
}
var editOnPaste_1 = editOnPaste;
var UserAgent$2 = UserAgent_1;
var onBeforeInput = editOnBeforeInput_1;
var onBlur = editOnBlur_1;
var onCompositionStart2 = editOnCompositionStart_1;
var onCopy = editOnCopy_1;
var onCut = editOnCut_1;
var onDragOver = editOnDragOver_1;
var onDragStart = editOnDragStart_1;
var onFocus = editOnFocus_1;
var onInput = editOnInput_1;
var onKeyDown2 = editOnKeyDown_1;
var onPaste = editOnPaste_1;
var onSelect = editOnSelect_1;
var isChrome = UserAgent$2.isBrowser("Chrome");
var isFirefox = UserAgent$2.isBrowser("Firefox");
var selectionHandler = isChrome || isFirefox ? onSelect : function(e2) {
};
var DraftEditorEditHandler$1 = {
  onBeforeInput,
  onBlur,
  onCompositionStart: onCompositionStart2,
  onCopy,
  onCut,
  onDragOver,
  onDragStart,
  onFocus,
  onInput,
  onKeyDown: onKeyDown2,
  onPaste,
  onSelect,
  // In certain cases, contenteditable on chrome does not fire the onSelect
  // event, causing problems with cursor positioning. Therefore, the selection
  // state update handler is added to more events to ensure that the selection
  // state is always synced with the actual cursor positions.
  onMouseUp: selectionHandler,
  onKeyUp: selectionHandler
};
var DraftEditorEditHandler_1 = DraftEditorEditHandler$1;
var ReactDOMComet = reactDomExports;
var flushControlled$1 = ReactDOMComet.unstable_flushControlled;
var DraftEditorFlushControlled = flushControlled$1;
function _inheritsLoose$1(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var React$1 = reactExports;
var cx$1 = cx_1;
var DraftEditorPlaceholder$1 = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose$1(DraftEditorPlaceholder2, _React$Component);
  function DraftEditorPlaceholder2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = DraftEditorPlaceholder2.prototype;
  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return this.props.text !== nextProps.text || this.props.editorState.getSelection().getHasFocus() !== nextProps.editorState.getSelection().getHasFocus();
  };
  _proto.render = function render() {
    var hasFocus = this.props.editorState.getSelection().getHasFocus();
    var className = cx$1({
      "public/DraftEditorPlaceholder/root": true,
      "public/DraftEditorPlaceholder/hasFocus": hasFocus
    });
    var contentStyle = {
      whiteSpace: "pre-wrap"
    };
    return React$1.createElement("div", {
      className
    }, React$1.createElement("div", {
      className: cx$1("public/DraftEditorPlaceholder/inner"),
      id: this.props.accessibilityID,
      style: contentStyle
    }, this.props.text));
  };
  return DraftEditorPlaceholder2;
}(React$1.Component);
var DraftEditorPlaceholder_react = DraftEditorPlaceholder$1;
var KeyBindingUtil$1 = KeyBindingUtil_1;
var Keys = Keys$4;
var UserAgent$1 = UserAgent_1;
var isOSX = UserAgent$1.isPlatform("Mac OS X");
var shouldFixFirefoxMovement = isOSX && UserAgent$1.isBrowser("Firefox < 29");
var hasCommandModifier2 = KeyBindingUtil$1.hasCommandModifier, isCtrlKeyCommand2 = KeyBindingUtil$1.isCtrlKeyCommand;
function shouldRemoveWord(e2) {
  return isOSX && e2.altKey || isCtrlKeyCommand2(e2);
}
function getZCommand(e2) {
  if (!hasCommandModifier2(e2)) {
    return null;
  }
  return e2.shiftKey ? "redo" : "undo";
}
function getDeleteCommand(e2) {
  if (!isOSX && e2.shiftKey) {
    return null;
  }
  return shouldRemoveWord(e2) ? "delete-word" : "delete";
}
function getBackspaceCommand(e2) {
  if (hasCommandModifier2(e2) && isOSX) {
    return "backspace-to-start-of-line";
  }
  return shouldRemoveWord(e2) ? "backspace-word" : "backspace";
}
function getDefaultKeyBinding$2(e2) {
  switch (e2.keyCode) {
    case 66:
      return hasCommandModifier2(e2) ? "bold" : null;
    case 68:
      return isCtrlKeyCommand2(e2) ? "delete" : null;
    case 72:
      return isCtrlKeyCommand2(e2) ? "backspace" : null;
    case 73:
      return hasCommandModifier2(e2) ? "italic" : null;
    case 74:
      return hasCommandModifier2(e2) ? "code" : null;
    case 75:
      return isOSX && isCtrlKeyCommand2(e2) ? "secondary-cut" : null;
    case 77:
      return isCtrlKeyCommand2(e2) ? "split-block" : null;
    case 79:
      return isCtrlKeyCommand2(e2) ? "split-block" : null;
    case 84:
      return isOSX && isCtrlKeyCommand2(e2) ? "transpose-characters" : null;
    case 85:
      return hasCommandModifier2(e2) ? "underline" : null;
    case 87:
      return isOSX && isCtrlKeyCommand2(e2) ? "backspace-word" : null;
    case 89:
      if (isCtrlKeyCommand2(e2)) {
        return isOSX ? "secondary-paste" : "redo";
      }
      return null;
    case 90:
      return getZCommand(e2) || null;
    case Keys.RETURN:
      return "split-block";
    case Keys.DELETE:
      return getDeleteCommand(e2);
    case Keys.BACKSPACE:
      return getBackspaceCommand(e2);
    case Keys.LEFT:
      return shouldFixFirefoxMovement && hasCommandModifier2(e2) ? "move-selection-to-start-of-block" : null;
    case Keys.RIGHT:
      return shouldFixFirefoxMovement && hasCommandModifier2(e2) ? "move-selection-to-end-of-block" : null;
    default:
      return null;
  }
}
var getDefaultKeyBinding_1 = getDefaultKeyBinding$2;
var _assign = objectAssign;
function _extends() {
  _extends = _assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
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
function _objectSpread$3(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty$3(target, key, source[key]);
    });
  }
  return target;
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _defineProperty$3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var DefaultDraftBlockRenderMap$1 = DefaultDraftBlockRenderMap_1;
var DefaultDraftInlineStyle$1 = DefaultDraftInlineStyle$2;
var DraftEditorCompositionHandler = DraftEditorCompositionHandler_1;
var DraftEditorContents = DraftEditorContents_react;
var DraftEditorDragHandler = DraftEditorDragHandler_1;
var DraftEditorEditHandler = DraftEditorEditHandler_1;
var flushControlled = DraftEditorFlushControlled;
var DraftEditorPlaceholder = DraftEditorPlaceholder_react;
var EditorState$1 = EditorState_1;
var React = reactExports;
var Scroll = Scroll_1;
var Style = Style_1;
var UserAgent = UserAgent_1;
var cx = cx_1;
var generateRandomKey$3 = generateRandomKey_1;
var getDefaultKeyBinding$1 = getDefaultKeyBinding_1;
var getScrollPosition = getScrollPosition_1;
var gkx$1 = gkx$8;
var invariant$3 = invariant_1;
var isHTMLElement = isHTMLElement_1;
var nullthrows2 = nullthrows_1;
var isIE = UserAgent.isBrowser("IE");
var allowSpellCheck = !isIE;
var handlerMap = {
  edit: DraftEditorEditHandler,
  composite: DraftEditorCompositionHandler,
  drag: DraftEditorDragHandler,
  cut: null,
  render: null
};
var didInitODS = false;
var UpdateDraftEditorFlags = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(UpdateDraftEditorFlags2, _React$Component);
  function UpdateDraftEditorFlags2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = UpdateDraftEditorFlags2.prototype;
  _proto.render = function render() {
    return null;
  };
  _proto.componentDidMount = function componentDidMount() {
    this._update();
  };
  _proto.componentDidUpdate = function componentDidUpdate() {
    this._update();
  };
  _proto._update = function _update() {
    var editor = this.props.editor;
    editor._latestEditorState = this.props.editorState;
    editor._blockSelectEvents = true;
  };
  return UpdateDraftEditorFlags2;
}(React.Component);
var DraftEditor$1 = /* @__PURE__ */ function(_React$Component2) {
  _inheritsLoose(DraftEditor2, _React$Component2);
  function DraftEditor2(props) {
    var _this;
    _this = _React$Component2.call(this, props) || this;
    _defineProperty$3(_assertThisInitialized(_this), "_blockSelectEvents", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_clipboard", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_handler", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_dragCount", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_internalDrag", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_editorKey", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_placeholderAccessibilityID", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_latestEditorState", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_latestCommittedEditorState", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_pendingStateFromBeforeInput", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onBeforeInput", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onBlur", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onCharacterData", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onCompositionEnd", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onCompositionStart", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onCopy", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onCut", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onDragEnd", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onDragOver", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onDragStart", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onDrop", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onInput", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onFocus", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onKeyDown", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onKeyPress", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onKeyUp", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onMouseDown", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onMouseUp", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onPaste", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onSelect", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "editor", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "editorContainer", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "focus", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "blur", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "setMode", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "exitCurrentMode", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "restoreEditorDOM", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "setClipboard", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "getClipboard", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "getEditorKey", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "update", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "onDragEnter", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "onDragLeave", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_handleEditorContainerRef", function(node) {
      _this.editorContainer = node;
      _this.editor = node !== null ? node.firstChild : null;
    });
    _defineProperty$3(_assertThisInitialized(_this), "focus", function(scrollPosition) {
      var editorState = _this.props.editorState;
      var alreadyHasFocus = editorState.getSelection().getHasFocus();
      var editorNode = _this.editor;
      if (!editorNode) {
        return;
      }
      var scrollParent = Style.getScrollParent(editorNode);
      var _ref = scrollPosition || getScrollPosition(scrollParent), x2 = _ref.x, y2 = _ref.y;
      !isHTMLElement(editorNode) ? invariant$3(false) : void 0;
      editorNode.focus();
      if (scrollParent === window) {
        window.scrollTo(x2, y2);
      } else {
        Scroll.setTop(scrollParent, y2);
      }
      if (!alreadyHasFocus) {
        _this.update(EditorState$1.forceSelection(editorState, editorState.getSelection()));
      }
    });
    _defineProperty$3(_assertThisInitialized(_this), "blur", function() {
      var editorNode = _this.editor;
      if (!editorNode) {
        return;
      }
      !isHTMLElement(editorNode) ? invariant$3(false) : void 0;
      editorNode.blur();
    });
    _defineProperty$3(_assertThisInitialized(_this), "setMode", function(mode) {
      var _this$props = _this.props, onPaste2 = _this$props.onPaste, onCut2 = _this$props.onCut, onCopy2 = _this$props.onCopy;
      var editHandler = _objectSpread$3({}, handlerMap.edit);
      if (onPaste2) {
        editHandler.onPaste = onPaste2;
      }
      if (onCut2) {
        editHandler.onCut = onCut2;
      }
      if (onCopy2) {
        editHandler.onCopy = onCopy2;
      }
      var handler = _objectSpread$3({}, handlerMap, {
        edit: editHandler
      });
      _this._handler = handler[mode];
    });
    _defineProperty$3(_assertThisInitialized(_this), "exitCurrentMode", function() {
      _this.setMode("edit");
    });
    _defineProperty$3(_assertThisInitialized(_this), "restoreEditorDOM", function(scrollPosition) {
      _this.setState({
        contentsKey: _this.state.contentsKey + 1
      }, function() {
        _this.focus(scrollPosition);
      });
    });
    _defineProperty$3(_assertThisInitialized(_this), "setClipboard", function(clipboard2) {
      _this._clipboard = clipboard2;
    });
    _defineProperty$3(_assertThisInitialized(_this), "getClipboard", function() {
      return _this._clipboard;
    });
    _defineProperty$3(_assertThisInitialized(_this), "update", function(editorState) {
      _this._latestEditorState = editorState;
      _this.props.onChange(editorState);
    });
    _defineProperty$3(_assertThisInitialized(_this), "onDragEnter", function() {
      _this._dragCount++;
    });
    _defineProperty$3(_assertThisInitialized(_this), "onDragLeave", function() {
      _this._dragCount--;
      if (_this._dragCount === 0) {
        _this.exitCurrentMode();
      }
    });
    _this._blockSelectEvents = false;
    _this._clipboard = null;
    _this._handler = null;
    _this._dragCount = 0;
    _this._editorKey = props.editorKey || generateRandomKey$3();
    _this._placeholderAccessibilityID = "placeholder-" + _this._editorKey;
    _this._latestEditorState = props.editorState;
    _this._latestCommittedEditorState = props.editorState;
    _this._onBeforeInput = _this._buildHandler("onBeforeInput");
    _this._onBlur = _this._buildHandler("onBlur");
    _this._onCharacterData = _this._buildHandler("onCharacterData");
    _this._onCompositionEnd = _this._buildHandler("onCompositionEnd");
    _this._onCompositionStart = _this._buildHandler("onCompositionStart");
    _this._onCopy = _this._buildHandler("onCopy");
    _this._onCut = _this._buildHandler("onCut");
    _this._onDragEnd = _this._buildHandler("onDragEnd");
    _this._onDragOver = _this._buildHandler("onDragOver");
    _this._onDragStart = _this._buildHandler("onDragStart");
    _this._onDrop = _this._buildHandler("onDrop");
    _this._onInput = _this._buildHandler("onInput");
    _this._onFocus = _this._buildHandler("onFocus");
    _this._onKeyDown = _this._buildHandler("onKeyDown");
    _this._onKeyPress = _this._buildHandler("onKeyPress");
    _this._onKeyUp = _this._buildHandler("onKeyUp");
    _this._onMouseDown = _this._buildHandler("onMouseDown");
    _this._onMouseUp = _this._buildHandler("onMouseUp");
    _this._onPaste = _this._buildHandler("onPaste");
    _this._onSelect = _this._buildHandler("onSelect");
    _this.getEditorKey = function() {
      return _this._editorKey;
    };
    _this.state = {
      contentsKey: 0
    };
    return _this;
  }
  var _proto2 = DraftEditor2.prototype;
  _proto2._buildHandler = function _buildHandler(eventName) {
    var _this2 = this;
    return function(e2) {
      if (!_this2.props.readOnly) {
        var method = _this2._handler && _this2._handler[eventName];
        if (method) {
          if (flushControlled) {
            flushControlled(function() {
              return method(_this2, e2);
            });
          } else {
            method(_this2, e2);
          }
        }
      }
    };
  };
  _proto2._showPlaceholder = function _showPlaceholder() {
    return !!this.props.placeholder && !this.props.editorState.isInCompositionMode() && !this.props.editorState.getCurrentContent().hasText();
  };
  _proto2._renderPlaceholder = function _renderPlaceholder() {
    if (this._showPlaceholder()) {
      var placeHolderProps = {
        text: nullthrows2(this.props.placeholder),
        editorState: this.props.editorState,
        textAlignment: this.props.textAlignment,
        accessibilityID: this._placeholderAccessibilityID
      };
      return React.createElement(DraftEditorPlaceholder, placeHolderProps);
    }
    return null;
  };
  _proto2._renderARIADescribedBy = function _renderARIADescribedBy() {
    var describedBy = this.props.ariaDescribedBy || "";
    var placeholderID = this._showPlaceholder() ? this._placeholderAccessibilityID : "";
    return describedBy.replace("{{editor_id_placeholder}}", placeholderID) || void 0;
  };
  _proto2.render = function render() {
    var _this$props2 = this.props, blockRenderMap = _this$props2.blockRenderMap, blockRendererFn2 = _this$props2.blockRendererFn, blockStyleFn2 = _this$props2.blockStyleFn, customStyleFn = _this$props2.customStyleFn, customStyleMap = _this$props2.customStyleMap, editorState = _this$props2.editorState, preventScroll = _this$props2.preventScroll, readOnly = _this$props2.readOnly, textAlignment = _this$props2.textAlignment, textDirectionality = _this$props2.textDirectionality;
    var rootClass = cx({
      "DraftEditor/root": true,
      "DraftEditor/alignLeft": textAlignment === "left",
      "DraftEditor/alignRight": textAlignment === "right",
      "DraftEditor/alignCenter": textAlignment === "center"
    });
    var contentStyle = {
      outline: "none",
      // fix parent-draggable Safari bug. #1326
      userSelect: "text",
      WebkitUserSelect: "text",
      whiteSpace: "pre-wrap",
      wordWrap: "break-word"
    };
    var ariaRole = this.props.role || "textbox";
    var ariaExpanded = ariaRole === "combobox" ? !!this.props.ariaExpanded : null;
    var editorContentsProps = {
      blockRenderMap,
      blockRendererFn: blockRendererFn2,
      blockStyleFn: blockStyleFn2,
      customStyleMap: _objectSpread$3({}, DefaultDraftInlineStyle$1, customStyleMap),
      customStyleFn,
      editorKey: this._editorKey,
      editorState,
      preventScroll,
      textDirectionality
    };
    return React.createElement("div", {
      className: rootClass
    }, this._renderPlaceholder(), React.createElement("div", {
      className: cx("DraftEditor/editorContainer"),
      ref: this._handleEditorContainerRef
    }, React.createElement("div", {
      "aria-activedescendant": readOnly ? null : this.props.ariaActiveDescendantID,
      "aria-autocomplete": readOnly ? null : this.props.ariaAutoComplete,
      "aria-controls": readOnly ? null : this.props.ariaControls,
      "aria-describedby": this._renderARIADescribedBy(),
      "aria-expanded": readOnly ? null : ariaExpanded,
      "aria-label": this.props.ariaLabel,
      "aria-labelledby": this.props.ariaLabelledBy,
      "aria-multiline": this.props.ariaMultiline,
      "aria-owns": readOnly ? null : this.props.ariaOwneeID,
      autoCapitalize: this.props.autoCapitalize,
      autoComplete: this.props.autoComplete,
      autoCorrect: this.props.autoCorrect,
      className: cx({
        // Chrome's built-in translation feature mutates the DOM in ways
        // that Draft doesn't expect (ex: adding <font> tags inside
        // DraftEditorLeaf spans) and causes problems. We add notranslate
        // here which makes its autotranslation skip over this subtree.
        notranslate: !readOnly,
        "public/DraftEditor/content": true
      }),
      contentEditable: !readOnly,
      "data-testid": this.props.webDriverTestID,
      onBeforeInput: this._onBeforeInput,
      onBlur: this._onBlur,
      onCompositionEnd: this._onCompositionEnd,
      onCompositionStart: this._onCompositionStart,
      onCopy: this._onCopy,
      onCut: this._onCut,
      onDragEnd: this._onDragEnd,
      onDragEnter: this.onDragEnter,
      onDragLeave: this.onDragLeave,
      onDragOver: this._onDragOver,
      onDragStart: this._onDragStart,
      onDrop: this._onDrop,
      onFocus: this._onFocus,
      onInput: this._onInput,
      onKeyDown: this._onKeyDown,
      onKeyPress: this._onKeyPress,
      onKeyUp: this._onKeyUp,
      onMouseUp: this._onMouseUp,
      onPaste: this._onPaste,
      onSelect: this._onSelect,
      ref: this.props.editorRef,
      role: readOnly ? null : ariaRole,
      spellCheck: allowSpellCheck && this.props.spellCheck,
      style: contentStyle,
      suppressContentEditableWarning: true,
      tabIndex: this.props.tabIndex
    }, React.createElement(UpdateDraftEditorFlags, {
      editor: this,
      editorState
    }), React.createElement(DraftEditorContents, _extends({}, editorContentsProps, {
      key: "contents" + this.state.contentsKey
    })))));
  };
  _proto2.componentDidMount = function componentDidMount() {
    this._blockSelectEvents = false;
    if (!didInitODS && gkx$1("draft_ods_enabled")) {
      didInitODS = true;
    }
    this.setMode("edit");
    if (isIE) {
      if (!this.editor) {
        commonjsGlobal.execCommand("AutoUrlDetect", false, false);
      } else {
        this.editor.ownerDocument.execCommand("AutoUrlDetect", false, false);
      }
    }
  };
  _proto2.componentDidUpdate = function componentDidUpdate() {
    this._blockSelectEvents = false;
    this._latestEditorState = this.props.editorState;
    this._latestCommittedEditorState = this.props.editorState;
  };
  return DraftEditor2;
}(React.Component);
_defineProperty$3(DraftEditor$1, "defaultProps", {
  ariaDescribedBy: "{{editor_id_placeholder}}",
  blockRenderMap: DefaultDraftBlockRenderMap$1,
  blockRendererFn: function blockRendererFn() {
    return null;
  },
  blockStyleFn: function blockStyleFn() {
    return "";
  },
  keyBindingFn: getDefaultKeyBinding$1,
  readOnly: false,
  spellCheck: false,
  stripPastedStyles: false
});
var DraftEditor_react = DraftEditor$1;
var RawDraftContentState$1 = {};
var DraftStringKey$2 = {
  stringify: function stringify(key) {
    return "_" + String(key);
  },
  unstringify: function unstringify(key) {
    return key.slice(1);
  }
};
var DraftStringKey_1 = DraftStringKey$2;
var DraftStringKey$1 = DraftStringKey_1;
var UnicodeUtils$3 = UnicodeUtils_1;
var strlen = UnicodeUtils$3.strlen;
function encodeEntityRanges$1(block, storageMap) {
  var encoded = [];
  block.findEntityRanges(function(character) {
    return !!character.getEntity();
  }, function(start, end) {
    var text = block.getText();
    var key = block.getEntityAt(start);
    encoded.push({
      offset: strlen(text.slice(0, start)),
      length: strlen(text.slice(start, end)),
      // Encode the key as a number for range storage.
      key: Number(storageMap[DraftStringKey$1.stringify(key)])
    });
  });
  return encoded;
}
var encodeEntityRanges_1 = encodeEntityRanges$1;
var UnicodeUtils$2 = UnicodeUtils_1;
var findRangesImmutable = findRangesImmutable_1;
var areEqual = function areEqual2(a2, b2) {
  return a2 === b2;
};
var isTruthy = function isTruthy2(a2) {
  return !!a2;
};
var EMPTY_ARRAY = [];
function getEncodedInlinesForType(block, styleList, styleToEncode) {
  var ranges = [];
  var filteredInlines = styleList.map(function(style) {
    return style.has(styleToEncode);
  }).toList();
  findRangesImmutable(
    filteredInlines,
    areEqual,
    // We only want to keep ranges with nonzero style values.
    isTruthy,
    function(start, end) {
      var text = block.getText();
      ranges.push({
        offset: UnicodeUtils$2.strlen(text.slice(0, start)),
        length: UnicodeUtils$2.strlen(text.slice(start, end)),
        style: styleToEncode
      });
    }
  );
  return ranges;
}
function encodeInlineStyleRanges$1(block) {
  var styleList = block.getCharacterList().map(function(c2) {
    return c2.getStyle();
  }).toList();
  var ranges = styleList.flatten().toSet().map(function(style) {
    return getEncodedInlinesForType(block, styleList, style);
  });
  return Array.prototype.concat.apply(EMPTY_ARRAY, ranges.toJS());
}
var encodeInlineStyleRanges_1 = encodeInlineStyleRanges$1;
function _objectSpread$2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty$2(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ContentBlock$2 = ContentBlock_1;
var ContentBlockNode$1 = ContentBlockNode_1;
var DraftStringKey = DraftStringKey_1;
var encodeEntityRanges = encodeEntityRanges_1;
var encodeInlineStyleRanges = encodeInlineStyleRanges_1;
var invariant$2 = invariant_1;
var createRawBlock = function createRawBlock2(block, entityStorageMap) {
  return {
    key: block.getKey(),
    text: block.getText(),
    type: block.getType(),
    depth: block.getDepth(),
    inlineStyleRanges: encodeInlineStyleRanges(block),
    entityRanges: encodeEntityRanges(block, entityStorageMap),
    data: block.getData().toObject()
  };
};
var insertRawBlock = function insertRawBlock2(block, entityMap, rawBlocks, blockCacheRef) {
  if (block instanceof ContentBlock$2) {
    rawBlocks.push(createRawBlock(block, entityMap));
    return;
  }
  !(block instanceof ContentBlockNode$1) ? invariant$2(false) : void 0;
  var parentKey = block.getParentKey();
  var rawBlock = blockCacheRef[block.getKey()] = _objectSpread$2({}, createRawBlock(block, entityMap), {
    children: []
  });
  if (parentKey) {
    blockCacheRef[parentKey].children.push(rawBlock);
    return;
  }
  rawBlocks.push(rawBlock);
};
var encodeRawBlocks = function encodeRawBlocks2(contentState, rawState) {
  var entityMap = rawState.entityMap;
  var rawBlocks = [];
  var blockCacheRef = {};
  var entityCacheRef = {};
  var entityStorageKey = 0;
  contentState.getBlockMap().forEach(function(block) {
    block.findEntityRanges(function(character) {
      return character.getEntity() !== null;
    }, function(start) {
      var entityKey = block.getEntityAt(start);
      var stringifiedEntityKey = DraftStringKey.stringify(entityKey);
      if (entityCacheRef[stringifiedEntityKey]) {
        return;
      }
      entityCacheRef[stringifiedEntityKey] = entityKey;
      entityMap[stringifiedEntityKey] = "".concat(entityStorageKey);
      entityStorageKey++;
    });
    insertRawBlock(block, entityMap, rawBlocks, blockCacheRef);
  });
  return {
    blocks: rawBlocks,
    entityMap
  };
};
var encodeRawEntityMap = function encodeRawEntityMap2(contentState, rawState) {
  var blocks = rawState.blocks, entityMap = rawState.entityMap;
  var rawEntityMap = {};
  Object.keys(entityMap).forEach(function(key, index) {
    var entity = contentState.getEntity(DraftStringKey.unstringify(key));
    rawEntityMap[index] = {
      type: entity.getType(),
      mutability: entity.getMutability(),
      data: entity.getData()
    };
  });
  return {
    blocks,
    entityMap: rawEntityMap
  };
};
var convertFromDraftStateToRaw$1 = function convertFromDraftStateToRaw(contentState) {
  var rawDraftContentState = {
    entityMap: {},
    blocks: []
  };
  rawDraftContentState = encodeRawBlocks(contentState, rawDraftContentState);
  rawDraftContentState = encodeRawEntityMap(contentState, rawDraftContentState);
  return rawDraftContentState;
};
var convertFromDraftStateToRaw_1 = convertFromDraftStateToRaw$1;
function _objectSpread$1(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var generateRandomKey$2 = generateRandomKey_1;
var invariant$1 = invariant_1;
var traverseInDepthOrder = function traverseInDepthOrder2(blocks, fn2) {
  var stack = [].concat(blocks).reverse();
  while (stack.length) {
    var _block = stack.pop();
    fn2(_block);
    var children = _block.children;
    !Array.isArray(children) ? invariant$1(false) : void 0;
    stack = stack.concat([].concat(children.reverse()));
  }
};
var isListBlock = function isListBlock2(block) {
  if (!(block && block.type)) {
    return false;
  }
  var type = block.type;
  return type === "unordered-list-item" || type === "ordered-list-item";
};
var addDepthToChildren = function addDepthToChildren2(block) {
  if (Array.isArray(block.children)) {
    block.children = block.children.map(function(child) {
      return child.type === block.type ? _objectSpread$1({}, child, {
        depth: (block.depth || 0) + 1
      }) : child;
    });
  }
};
var DraftTreeAdapter$1 = {
  /**
   * Converts from a tree raw state back to draft raw state
   */
  fromRawTreeStateToRawState: function fromRawTreeStateToRawState(draftTreeState) {
    var blocks = draftTreeState.blocks;
    var transformedBlocks = [];
    !Array.isArray(blocks) ? invariant$1(false) : void 0;
    if (!Array.isArray(blocks) || !blocks.length) {
      return draftTreeState;
    }
    traverseInDepthOrder(blocks, function(block) {
      var newBlock = _objectSpread$1({}, block);
      if (isListBlock(block)) {
        newBlock.depth = newBlock.depth || 0;
        addDepthToChildren(block);
        if (block.children != null && block.children.length > 0) {
          return;
        }
      }
      delete newBlock.children;
      transformedBlocks.push(newBlock);
    });
    draftTreeState.blocks = transformedBlocks;
    return _objectSpread$1({}, draftTreeState, {
      blocks: transformedBlocks
    });
  },
  /**
   * Converts from draft raw state to tree draft state
   */
  fromRawStateToRawTreeState: function fromRawStateToRawTreeState(draftState) {
    var transformedBlocks = [];
    var parentStack = [];
    draftState.blocks.forEach(function(block) {
      var isList = isListBlock(block);
      var depth = block.depth || 0;
      var treeBlock = _objectSpread$1({}, block, {
        children: []
      });
      if (!isList) {
        transformedBlocks.push(treeBlock);
        return;
      }
      var lastParent = parentStack[0];
      if (lastParent == null && depth === 0) {
        transformedBlocks.push(treeBlock);
      } else if (lastParent == null || lastParent.depth < depth - 1) {
        var newParent = {
          key: generateRandomKey$2(),
          text: "",
          depth: depth - 1,
          type: block.type,
          children: [],
          entityRanges: [],
          inlineStyleRanges: []
        };
        parentStack.unshift(newParent);
        if (depth === 1) {
          transformedBlocks.push(newParent);
        } else if (lastParent != null) {
          lastParent.children.push(newParent);
        }
        newParent.children.push(treeBlock);
      } else if (lastParent.depth === depth - 1) {
        lastParent.children.push(treeBlock);
      } else {
        while (lastParent != null && lastParent.depth >= depth) {
          parentStack.shift();
          lastParent = parentStack[0];
        }
        if (depth > 0) {
          lastParent.children.push(treeBlock);
        } else {
          transformedBlocks.push(treeBlock);
        }
      }
    });
    return _objectSpread$1({}, draftState, {
      blocks: transformedBlocks
    });
  }
};
var DraftTreeAdapter_1 = DraftTreeAdapter$1;
var CharacterMetadata$1 = CharacterMetadata_1;
var Immutable$1 = immutableExports;
var List$1 = Immutable$1.List;
function createCharacterList$1(inlineStyles, entities) {
  var characterArray = inlineStyles.map(function(style, ii2) {
    var entity = entities[ii2];
    return CharacterMetadata$1.create({
      style,
      entity
    });
  });
  return List$1(characterArray);
}
var createCharacterList_1 = createCharacterList$1;
var UnicodeUtils$1 = UnicodeUtils_1;
var substr$1 = UnicodeUtils$1.substr;
function decodeEntityRanges$1(text, ranges) {
  var entities = Array(text.length).fill(null);
  if (ranges) {
    ranges.forEach(function(range) {
      var start = substr$1(text, 0, range.offset).length;
      var end = start + substr$1(text, range.offset, range.length).length;
      for (var ii2 = start; ii2 < end; ii2++) {
        entities[ii2] = range.key;
      }
    });
  }
  return entities;
}
var decodeEntityRanges_1 = decodeEntityRanges$1;
var UnicodeUtils = UnicodeUtils_1;
var _require = immutableExports, OrderedSet = _require.OrderedSet;
var substr = UnicodeUtils.substr;
var EMPTY_SET = OrderedSet();
function decodeInlineStyleRanges$1(text, ranges) {
  var styles = Array(text.length).fill(EMPTY_SET);
  if (ranges) {
    ranges.forEach(function(range) {
      var cursor = substr(text, 0, range.offset).length;
      var end = cursor + substr(text, range.offset, range.length).length;
      while (cursor < end) {
        styles[cursor] = styles[cursor].add(range.style);
        cursor++;
      }
    });
  }
  return styles;
}
var decodeInlineStyleRanges_1 = decodeInlineStyleRanges$1;
function _objectSpread(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ContentBlock$1 = ContentBlock_1;
var ContentBlockNode = ContentBlockNode_1;
var ContentState$1 = ContentState_1;
var DraftEntity$1 = DraftEntity_1;
var DraftTreeAdapter = DraftTreeAdapter_1;
var SelectionState$1 = SelectionState_1;
var createCharacterList = createCharacterList_1;
var decodeEntityRanges = decodeEntityRanges_1;
var decodeInlineStyleRanges = decodeInlineStyleRanges_1;
var generateRandomKey$1 = generateRandomKey_1;
var gkx = gkx$8;
var Immutable = immutableExports;
var invariant = invariant_1;
var experimentalTreeDataSupport = gkx("draft_tree_data_support");
var List = Immutable.List, Map$1 = Immutable.Map, OrderedMap = Immutable.OrderedMap;
var decodeBlockNodeConfig = function decodeBlockNodeConfig2(block, entityMap) {
  var key = block.key, type = block.type, data = block.data, text = block.text, depth = block.depth;
  var blockNodeConfig = {
    text,
    depth: depth || 0,
    type: type || "unstyled",
    key: key || generateRandomKey$1(),
    data: Map$1(data),
    characterList: decodeCharacterList(block, entityMap)
  };
  return blockNodeConfig;
};
var decodeCharacterList = function decodeCharacterList2(block, entityMap) {
  var text = block.text, rawEntityRanges = block.entityRanges, rawInlineStyleRanges = block.inlineStyleRanges;
  var entityRanges = rawEntityRanges || [];
  var inlineStyleRanges = rawInlineStyleRanges || [];
  return createCharacterList(decodeInlineStyleRanges(text, inlineStyleRanges), decodeEntityRanges(text, entityRanges.filter(function(range) {
    return entityMap.hasOwnProperty(range.key);
  }).map(function(range) {
    return _objectSpread({}, range, {
      key: entityMap[range.key]
    });
  })));
};
var addKeyIfMissing = function addKeyIfMissing2(block) {
  return _objectSpread({}, block, {
    key: block.key || generateRandomKey$1()
  });
};
var updateNodeStack = function updateNodeStack2(stack, nodes, parentRef) {
  var nodesWithParentRef = nodes.map(function(block) {
    return _objectSpread({}, block, {
      parentRef
    });
  });
  return stack.concat(nodesWithParentRef.reverse());
};
var decodeContentBlockNodes = function decodeContentBlockNodes2(blocks, entityMap) {
  return blocks.map(addKeyIfMissing).reduce(function(blockMap, block, index) {
    !Array.isArray(block.children) ? invariant(false) : void 0;
    var children = block.children.map(addKeyIfMissing);
    var contentBlockNode = new ContentBlockNode(_objectSpread({}, decodeBlockNodeConfig(block, entityMap), {
      prevSibling: index === 0 ? null : blocks[index - 1].key,
      nextSibling: index === blocks.length - 1 ? null : blocks[index + 1].key,
      children: List(children.map(function(child) {
        return child.key;
      }))
    }));
    blockMap = blockMap.set(contentBlockNode.getKey(), contentBlockNode);
    var stack = updateNodeStack([], children, contentBlockNode);
    while (stack.length > 0) {
      var node = stack.pop();
      var parentRef = node.parentRef;
      var siblings = parentRef.getChildKeys();
      var _index = siblings.indexOf(node.key);
      var isValidBlock = Array.isArray(node.children);
      if (!isValidBlock) {
        !isValidBlock ? invariant(false) : void 0;
        break;
      }
      var _children = node.children.map(addKeyIfMissing);
      var _contentBlockNode = new ContentBlockNode(_objectSpread({}, decodeBlockNodeConfig(node, entityMap), {
        parent: parentRef.getKey(),
        children: List(_children.map(function(child) {
          return child.key;
        })),
        prevSibling: _index === 0 ? null : siblings.get(_index - 1),
        nextSibling: _index === siblings.size - 1 ? null : siblings.get(_index + 1)
      }));
      blockMap = blockMap.set(_contentBlockNode.getKey(), _contentBlockNode);
      stack = updateNodeStack(stack, _children, _contentBlockNode);
    }
    return blockMap;
  }, OrderedMap());
};
var decodeContentBlocks = function decodeContentBlocks2(blocks, entityMap) {
  return OrderedMap(blocks.map(function(block) {
    var contentBlock = new ContentBlock$1(decodeBlockNodeConfig(block, entityMap));
    return [contentBlock.getKey(), contentBlock];
  }));
};
var decodeRawBlocks = function decodeRawBlocks2(rawState, entityMap) {
  var isTreeRawBlock = rawState.blocks.find(function(block) {
    return Array.isArray(block.children) && block.children.length > 0;
  });
  var rawBlocks = experimentalTreeDataSupport && !isTreeRawBlock ? DraftTreeAdapter.fromRawStateToRawTreeState(rawState).blocks : rawState.blocks;
  if (!experimentalTreeDataSupport) {
    return decodeContentBlocks(isTreeRawBlock ? DraftTreeAdapter.fromRawTreeStateToRawState(rawState).blocks : rawBlocks, entityMap);
  }
  var blockMap = decodeContentBlockNodes(rawBlocks, entityMap);
  return blockMap;
};
var decodeRawEntityMap = function decodeRawEntityMap2(rawState) {
  var rawEntityMap = rawState.entityMap;
  var entityMap = {};
  Object.keys(rawEntityMap).forEach(function(rawEntityKey) {
    var _rawEntityMap$rawEnti = rawEntityMap[rawEntityKey], type = _rawEntityMap$rawEnti.type, mutability = _rawEntityMap$rawEnti.mutability, data = _rawEntityMap$rawEnti.data;
    entityMap[rawEntityKey] = DraftEntity$1.__create(type, mutability, data || {});
  });
  return entityMap;
};
var convertFromRawToDraftState$1 = function convertFromRawToDraftState(rawState) {
  !Array.isArray(rawState.blocks) ? invariant(false) : void 0;
  var entityMap = decodeRawEntityMap(rawState);
  var blockMap = decodeRawBlocks(rawState, entityMap);
  var selectionState = blockMap.isEmpty() ? new SelectionState$1() : SelectionState$1.createEmpty(blockMap.first().getKey());
  return new ContentState$1({
    blockMap,
    entityMap,
    selectionBefore: selectionState,
    selectionAfter: selectionState
  });
};
var convertFromRawToDraftState_1 = convertFromRawToDraftState$1;
var getRangeClientRects = getRangeClientRects_1;
function getRangeBoundingClientRect$1(range) {
  var rects = getRangeClientRects(range);
  var top = 0;
  var right = 0;
  var bottom = 0;
  var left = 0;
  if (rects.length) {
    if (rects.length > 1 && rects[0].width === 0) {
      var _rects$ = rects[1];
      top = _rects$.top;
      right = _rects$.right;
      bottom = _rects$.bottom;
      left = _rects$.left;
    } else {
      var _rects$2 = rects[0];
      top = _rects$2.top;
      right = _rects$2.right;
      bottom = _rects$2.bottom;
      left = _rects$2.left;
    }
    for (var ii2 = 1; ii2 < rects.length; ii2++) {
      var rect = rects[ii2];
      if (rect.height !== 0 && rect.width !== 0) {
        top = Math.min(top, rect.top);
        right = Math.max(right, rect.right);
        bottom = Math.max(bottom, rect.bottom);
        left = Math.min(left, rect.left);
      }
    }
  }
  return {
    top,
    right,
    bottom,
    left,
    width: right - left,
    height: bottom - top
  };
}
var getRangeBoundingClientRect_1 = getRangeBoundingClientRect$1;
var getRangeBoundingClientRect = getRangeBoundingClientRect_1;
function getVisibleSelectionRect$1(global2) {
  var selection = global2.getSelection();
  if (!selection.rangeCount) {
    return null;
  }
  var range = selection.getRangeAt(0);
  var boundingRect = getRangeBoundingClientRect(range);
  var top = boundingRect.top, right = boundingRect.right, bottom = boundingRect.bottom, left = boundingRect.left;
  if (top === 0 && right === 0 && bottom === 0 && left === 0) {
    return null;
  }
  return boundingRect;
}
var getVisibleSelectionRect_1 = getVisibleSelectionRect$1;
var AtomicBlockUtils = AtomicBlockUtils_1;
var BlockMapBuilder = BlockMapBuilder_1;
var CharacterMetadata = CharacterMetadata_1;
var CompositeDraftDecorator = CompositeDraftDecorator_1;
var ContentBlock = ContentBlock_1;
var ContentState = ContentState_1;
var DefaultDraftBlockRenderMap = DefaultDraftBlockRenderMap_1;
var DefaultDraftInlineStyle = DefaultDraftInlineStyle$2;
var DraftEditor = DraftEditor_react;
var DraftEditorBlock = DraftEditorBlock_react;
var DraftEntity = DraftEntity_1;
var DraftModifier = DraftModifier_1;
var DraftEntityInstance = DraftEntityInstance_1;
var EditorState = EditorState_1;
var KeyBindingUtil = KeyBindingUtil_1;
var RawDraftContentState = RawDraftContentState$1;
var RichTextEditorUtil = RichTextEditorUtil_1;
var SelectionState = SelectionState_1;
var convertFromDraftStateToRaw2 = convertFromDraftStateToRaw_1;
var convertFromRawToDraftState2 = convertFromRawToDraftState_1;
var generateRandomKey = generateRandomKey_1;
var getDefaultKeyBinding = getDefaultKeyBinding_1;
var getVisibleSelectionRect = getVisibleSelectionRect_1;
var convertFromHTML = convertFromHTMLToContentBlocks_1;
var DraftPublic = {
  Editor: DraftEditor,
  EditorBlock: DraftEditorBlock,
  EditorState,
  CompositeDecorator: CompositeDraftDecorator,
  Entity: DraftEntity,
  EntityInstance: DraftEntityInstance,
  BlockMapBuilder,
  CharacterMetadata,
  ContentBlock,
  ContentState,
  RawDraftContentState,
  SelectionState,
  AtomicBlockUtils,
  KeyBindingUtil,
  Modifier: DraftModifier,
  RichUtils: RichTextEditorUtil,
  DefaultDraftBlockRenderMap,
  DefaultDraftInlineStyle,
  convertFromHTML,
  convertFromRaw: convertFromRawToDraftState2,
  convertToRaw: convertFromDraftStateToRaw2,
  genKey: generateRandomKey,
  getDefaultKeyBinding,
  getVisibleSelectionRect
};
var Draft$1 = DraftPublic;
const Draft = "";
function bind(fn2, thisArg) {
  return function wrap() {
    return fn2.apply(thisArg, arguments);
  };
}
const { toString } = Object.prototype;
const { getPrototypeOf } = Object;
const kindOf = ((cache) => (thing) => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null));
const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type;
};
const typeOfTest = (type) => (thing) => typeof thing === type;
const { isArray } = Array;
const isUndefined = typeOfTest("undefined");
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
const isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
const isString = typeOfTest("string");
const isFunction = typeOfTest("function");
const isNumber = typeOfTest("number");
const isObject = (thing) => thing !== null && typeof thing === "object";
const isBoolean = (thing) => thing === true || thing === false;
const isPlainObject = (val) => {
  if (kindOf(val) !== "object") {
    return false;
  }
  const prototype2 = getPrototypeOf(val);
  return (prototype2 === null || prototype2 === Object.prototype || Object.getPrototypeOf(prototype2) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
const isDate = kindOfTest("Date");
const isFile = kindOfTest("File");
const isBlob = kindOfTest("Blob");
const isFileList = kindOfTest("FileList");
const isStream = (val) => isObject(val) && isFunction(val.pipe);
const isFormData = (thing) => {
  const pattern = "[object FormData]";
  return thing && (typeof FormData === "function" && thing instanceof FormData || toString.call(thing) === pattern || isFunction(thing.toString) && thing.toString() === pattern);
};
const isURLSearchParams = kindOfTest("URLSearchParams");
const trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function forEach(obj, fn2, { allOwnKeys = false } = {}) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  let i2;
  let l2;
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (i2 = 0, l2 = obj.length; i2 < l2; i2++) {
      fn2.call(null, obj[i2], i2, obj);
    }
  } else {
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;
    for (i2 = 0; i2 < len; i2++) {
      key = keys[i2];
      fn2.call(null, obj[key], key, obj);
    }
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i2 = keys.length;
  let _key;
  while (i2-- > 0) {
    _key = keys[i2];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
const _global = (() => {
  if (typeof globalThis !== "undefined")
    return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
const isContextDefined = (context) => !isUndefined(context) && context !== _global;
function merge() {
  const { caseless } = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };
  for (let i2 = 0, l2 = arguments.length; i2 < l2; i2++) {
    arguments[i2] && forEach(arguments[i2], assignValue);
  }
  return result;
}
const extend = (a2, b2, thisArg, { allOwnKeys } = {}) => {
  forEach(b2, (val, key) => {
    if (thisArg && isFunction(val)) {
      a2[key] = bind(val, thisArg);
    } else {
      a2[key] = val;
    }
  }, { allOwnKeys });
  return a2;
};
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
};
const inherits = (constructor, superConstructor, props, descriptors2) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, "super", {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};
const toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
  let props;
  let i2;
  let prop;
  const merged = {};
  destObj = destObj || {};
  if (sourceObj == null)
    return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i2 = props.length;
    while (i2-- > 0) {
      prop = props[i2];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === void 0 || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};
const toArray = (thing) => {
  if (!thing)
    return null;
  if (isArray(thing))
    return thing;
  let i2 = thing.length;
  if (!isNumber(i2))
    return null;
  const arr = new Array(i2);
  while (i2-- > 0) {
    arr[i2] = thing[i2];
  }
  return arr;
};
const isTypedArray = ((TypedArray) => {
  return (thing) => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
const forEachEntry = (obj, fn2) => {
  const generator = obj && obj[Symbol.iterator];
  const iterator = generator.call(obj);
  let result;
  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn2.call(obj, pair[0], pair[1]);
  }
};
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};
const isHTMLForm = kindOfTest("HTMLFormElement");
const toCamelCase = (str) => {
  return str.toLowerCase().replace(
    /[-_\s]([a-z\d])(\w*)/g,
    function replacer(m2, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};
const hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
const isRegExp = kindOfTest("RegExp");
const reduceDescriptors = (obj, reducer) => {
  const descriptors2 = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors2, (descriptor, name) => {
    if (reducer(descriptor, name, obj) !== false) {
      reducedDescriptors[name] = descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};
const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
      return false;
    }
    const value = obj[name];
    if (!isFunction(value))
      return;
    descriptor.enumerable = false;
    if ("writable" in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name + "'");
      };
    }
  });
};
const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};
  const define = (arr) => {
    arr.forEach((value) => {
      obj[value] = true;
    });
  };
  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
const noop = () => {
};
const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
};
const ALPHA = "abcdefghijklmnopqrstuvwxyz";
const DIGIT = "0123456789";
const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = "";
  const { length } = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length | 0];
  }
  return str;
};
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
const toJSONObject = (obj) => {
  const stack = new Array(10);
  const visit = (source, i2) => {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }
      if (!("toJSON" in source)) {
        stack[i2] = source;
        const target = isArray(source) ? [] : {};
        forEach(source, (value, key) => {
          const reducedValue = visit(value, i2 + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });
        stack[i2] = void 0;
        return target;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
const utils = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject
};
function AxiosError(message, code, config, request, response) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message;
  this.name = "AxiosError";
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}
utils.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const prototype$1 = AxiosError.prototype;
const descriptors = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((code) => {
  descriptors[code] = { value: code };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype$1, "isAxiosError", { value: true });
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype$1);
  utils.toFlatObject(error, axiosError, function filter2(obj) {
    return obj !== Error.prototype;
  }, (prop) => {
    return prop !== "isAxiosError";
  });
  AxiosError.call(axiosError, error.message, code, config, request, response);
  axiosError.cause = error;
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};
const httpAdapter = null;
function isVisitable(thing) {
  return utils.isPlainObject(thing) || utils.isArray(thing);
}
function removeBrackets(key) {
  return utils.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
function renderKey(path, key, dots) {
  if (!path)
    return key;
  return path.concat(key).map(function each(token, i2) {
    token = removeBrackets(token);
    return !dots && i2 ? "[" + token + "]" : token;
  }).join(dots ? "." : "");
}
function isFlatArray(arr) {
  return utils.isArray(arr) && !arr.some(isVisitable);
}
const predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});
function toFormData(obj, formData, options) {
  if (!utils.isObject(obj)) {
    throw new TypeError("target must be an object");
  }
  formData = formData || new FormData();
  options = utils.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    return !utils.isUndefined(source[option]);
  });
  const metaTokens = options.metaTokens;
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
  const useBlob = _Blob && utils.isSpecCompliantForm(formData);
  if (!utils.isFunction(visitor)) {
    throw new TypeError("visitor must be a function");
  }
  function convertValue(value) {
    if (value === null)
      return "";
    if (utils.isDate(value)) {
      return value.toISOString();
    }
    if (!useBlob && utils.isBlob(value)) {
      throw new AxiosError("Blob is not supported. Use a Buffer instead.");
    }
    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
      return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (value && !path && typeof value === "object") {
      if (utils.endsWith(key, "{}")) {
        key = metaTokens ? key : key.slice(0, -2);
        value = JSON.stringify(value);
      } else if (utils.isArray(value) && isFlatArray(value) || (utils.isFileList(value) || utils.endsWith(key, "[]")) && (arr = utils.toArray(value))) {
        key = removeBrackets(key);
        arr.forEach(function each(el2, index) {
          !(utils.isUndefined(el2) || el2 === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
            convertValue(el2)
          );
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  const stack = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path) {
    if (utils.isUndefined(value))
      return;
    if (stack.indexOf(value) !== -1) {
      throw Error("Circular reference detected in " + path.join("."));
    }
    stack.push(value);
    utils.forEach(value, function each(el2, key) {
      const result = !(utils.isUndefined(el2) || el2 === null) && visitor.call(
        formData,
        el2,
        utils.isString(key) ? key.trim() : key,
        path,
        exposedHelpers
      );
      if (result === true) {
        build(el2, path ? path.concat(key) : [key]);
      }
    });
    stack.pop();
  }
  if (!utils.isObject(obj)) {
    throw new TypeError("data must be an object");
  }
  build(obj);
  return formData;
}
function encode$1(str) {
  const charMap = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && toFormData(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype.toString = function toString2(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + "=" + _encode(pair[1]);
  }, "").join("&");
};
function encode2(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url, params, options) {
  if (!params) {
    return url;
  }
  const _encode = options && options.encode || encode2;
  const serializeFn = options && options.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, options).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
}
class InterceptorManager {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id2) {
    if (this.handlers[id2]) {
      this.handlers[id2] = null;
    }
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn2) {
    utils.forEach(this.handlers, function forEachHandler(h2) {
      if (h2 !== null) {
        fn2(h2);
      }
    });
  }
}
const InterceptorManager$1 = InterceptorManager;
const transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};
const URLSearchParams$1 = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams;
const FormData$1 = typeof FormData !== "undefined" ? FormData : null;
const Blob$1 = typeof Blob !== "undefined" ? Blob : null;
const isStandardBrowserEnv = (() => {
  let product;
  if (typeof navigator !== "undefined" && ((product = navigator.product) === "ReactNative" || product === "NativeScript" || product === "NS")) {
    return false;
  }
  return typeof window !== "undefined" && typeof document !== "undefined";
})();
const isStandardBrowserWebWorkerEnv = (() => {
  return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
const platform = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1
  },
  isStandardBrowserEnv,
  isStandardBrowserWebWorkerEnv,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function toURLEncodedForm(data, options) {
  return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform.isNode && utils.isBuffer(value)) {
        this.append(key, value.toString("base64"));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}
function parsePropPath(name) {
  return utils.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
    return match[0] === "[]" ? "" : match[1] || match[0];
  });
}
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i2;
  const len = keys.length;
  let key;
  for (i2 = 0; i2 < len; i2++) {
    key = keys[i2];
    obj[key] = arr[key];
  }
  return obj;
}
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils.isArray(target) ? target.length : name;
    if (isLast) {
      if (utils.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !utils.isObject(target[name])) {
      target[name] = [];
    }
    const result = buildPath(path, value, target[name], index);
    if (result && utils.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
    const obj = {};
    utils.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}
const DEFAULT_CONTENT_TYPE = {
  "Content-Type": void 0
};
function stringifySafely(rawValue, parser2, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser2 || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e2) {
      if (e2.name !== "SyntaxError") {
        throw e2;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
  transitional: transitionalDefaults,
  adapter: ["xhr", "http"],
  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || "";
    const hasJSONContentType = contentType.indexOf("application/json") > -1;
    const isObjectPayload = utils.isObject(data);
    if (isObjectPayload && utils.isHTMLForm(data)) {
      data = new FormData(data);
    }
    const isFormData2 = utils.isFormData(data);
    if (isFormData2) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
    }
    if (utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
      return data.toString();
    }
    let isFileList2;
    if (isObjectPayload) {
      if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }
      if ((isFileList2 = utils.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
        const _FormData = this.env && this.env.FormData;
        return toFormData(
          isFileList2 ? { "files[]": data } : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }
    if (isObjectPayload || hasJSONContentType) {
      headers.setContentType("application/json", false);
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    const transitional2 = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
    const JSONRequested = this.responseType === "json";
    if (data && utils.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e2) {
        if (strictJSONParsing) {
          if (e2.name === "SyntaxError") {
            throw AxiosError.from(e2, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e2;
        }
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*"
    }
  }
};
utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});
utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
const defaults$1 = defaults;
const ignoreDuplicateOf = utils.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]);
const parseHeaders = (rawHeaders) => {
  const parsed = {};
  let key;
  let val;
  let i2;
  rawHeaders && rawHeaders.split("\n").forEach(function parser2(line) {
    i2 = line.indexOf(":");
    key = line.substring(0, i2).trim().toLowerCase();
    val = line.substring(i2 + 1).trim();
    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
      return;
    }
    if (key === "set-cookie") {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    }
  });
  return parsed;
};
const $internals = Symbol("internals");
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return utils.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  const tokens = /* @__PURE__ */ Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
function isValidHeaderName(str) {
  return /^[-_a-zA-Z]+$/.test(str.trim());
}
function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
  if (utils.isFunction(filter2)) {
    return filter2.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!utils.isString(value))
    return;
  if (utils.isString(filter2)) {
    return value.indexOf(filter2) !== -1;
  }
  if (utils.isRegExp(filter2)) {
    return filter2.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w2, char, str) => {
    return char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  const accessorName = utils.toCamelCase(" " + header);
  ["get", "set", "has"].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self2 = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        throw new Error("header name must be a non-empty string");
      }
      const key = utils.findKey(self2, lHeader);
      if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
        self2[key || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) => utils.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    if (utils.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser2) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils.findKey(this, header);
      if (key) {
        const value = this[key];
        if (!parser2) {
          return value;
        }
        if (parser2 === true) {
          return parseTokens(value);
        }
        if (utils.isFunction(parser2)) {
          return parser2.call(this, value, key);
        }
        if (utils.isRegExp(parser2)) {
          return parser2.exec(value);
        }
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(header, matcher) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils.findKey(this, header);
      return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return false;
  }
  delete(header, matcher) {
    const self2 = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key = utils.findKey(self2, _header);
        if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
          delete self2[key];
          deleted = true;
        }
      }
    }
    if (utils.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }
    return deleted;
  }
  clear(matcher) {
    const keys = Object.keys(this);
    let i2 = keys.length;
    let deleted = false;
    while (i2--) {
      const key = keys[i2];
      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }
    return deleted;
  }
  normalize(format) {
    const self2 = this;
    const headers = {};
    utils.forEach(this, (value, header) => {
      const key = utils.findKey(headers, header);
      if (key) {
        self2[key] = normalizeValue(value);
        delete self2[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self2[header];
      }
      self2[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = /* @__PURE__ */ Object.create(null);
    utils.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils.isArray(value) ? value.join(", ") : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    const computed = new this(first);
    targets.forEach((target) => computed.set(target));
    return computed;
  }
  static accessor(header) {
    const internals = this[$internals] = this[$internals] = {
      accessors: {}
    };
    const accessors = internals.accessors;
    const prototype2 = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype2, _header);
        accessors[lHeader] = true;
      }
    }
    utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }
}
AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
utils.freezeMethods(AxiosHeaders.prototype);
utils.freezeMethods(AxiosHeaders);
const AxiosHeaders$1 = AxiosHeaders;
function transformData(fns, response) {
  const config = this || defaults$1;
  const context = response || config;
  const headers = AxiosHeaders$1.from(context.headers);
  let data = context.data;
  utils.forEach(fns, function transform(fn2) {
    data = fn2.call(config, data, headers.normalize(), response ? response.status : void 0);
  });
  headers.normalize();
  return data;
}
function isCancel(value) {
  return !!(value && value.__CANCEL__);
}
function CanceledError(message, config, request) {
  AxiosError.call(this, message == null ? "canceled" : message, AxiosError.ERR_CANCELED, config, request);
  this.name = "CanceledError";
}
utils.inherits(CanceledError, AxiosError, {
  __CANCEL__: true
});
function settle(resolve, reject, response) {
  const validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError(
      "Request failed with status code " + response.status,
      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}
const cookies = platform.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        const cookie = [];
        cookie.push(name + "=" + encodeURIComponent(value));
        if (utils.isNumber(expires)) {
          cookie.push("expires=" + new Date(expires).toGMTString());
        }
        if (utils.isString(path)) {
          cookie.push("path=" + path);
        }
        if (utils.isString(domain)) {
          cookie.push("domain=" + domain);
        }
        if (secure === true) {
          cookie.push("secure");
        }
        document.cookie = cookie.join("; ");
      },
      read: function read(name) {
        const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
        return match ? decodeURIComponent(match[3]) : null;
      },
      remove: function remove2(name) {
        this.write(name, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function nonStandardBrowserEnv() {
    return {
      write: function write() {
      },
      read: function read() {
        return null;
      },
      remove: function remove2() {
      }
    };
  }()
);
function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}
const isURLSameOrigin = platform.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function standardBrowserEnv2() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement("a");
    let originURL;
    function resolveURL(url) {
      let href = url;
      if (msie) {
        urlParsingNode.setAttribute("href", href);
        href = urlParsingNode.href;
      }
      urlParsingNode.setAttribute("href", href);
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
      };
    }
    originURL = resolveURL(window.location.href);
    return function isURLSameOrigin2(requestURL) {
      const parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
      return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function nonStandardBrowserEnv2() {
    return function isURLSameOrigin2() {
      return true;
    };
  }()
);
function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || "";
}
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min = min !== void 0 ? min : 1e3;
  return function push(chunkLength) {
    const now = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    let i2 = tail;
    let bytesCount = 0;
    while (i2 !== head) {
      bytesCount += bytes[i2++];
      i2 = i2 % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min) {
      return;
    }
    const passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
  };
}
function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);
  return (e2) => {
    const loaded = e2.loaded;
    const total = e2.lengthComputable ? e2.total : void 0;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;
    bytesNotified = loaded;
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : void 0,
      bytes: progressBytes,
      rate: rate ? rate : void 0,
      estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
      event: e2
    };
    data[isDownloadStream ? "download" : "upload"] = true;
    listener(data);
  };
}
const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
const xhrAdapter = isXHRAdapterSupported && function(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = AxiosHeaders$1.from(config.headers).normalize();
    const responseType = config.responseType;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }
      if (config.signal) {
        config.signal.removeEventListener("abort", onCanceled);
      }
    }
    if (utils.isFormData(requestData) && (platform.isStandardBrowserEnv || platform.isStandardBrowserWebWorkerEnv)) {
      requestHeaders.setContentType(false);
    }
    let request = new XMLHttpRequest();
    if (config.auth) {
      const username = config.auth.username || "";
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
      requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
    }
    const fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
    request.timeout = config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      const responseHeaders = AxiosHeaders$1.from(
        "getAllResponseHeaders" in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);
      request = null;
    }
    if ("onloadend" in request) {
      request.onloadend = onloadend;
    } else {
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new AxiosError("Request aborted", AxiosError.ECONNABORTED, config, request));
      request = null;
    };
    request.onerror = function handleError() {
      reject(new AxiosError("Network Error", AxiosError.ERR_NETWORK, config, request));
      request = null;
    };
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
      const transitional2 = config.transitional || transitionalDefaults;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new AxiosError(
        timeoutErrorMessage,
        transitional2.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
        config,
        request
      ));
      request = null;
    };
    if (platform.isStandardBrowserEnv) {
      const xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName && cookies.read(config.xsrfCookieName);
      if (xsrfValue) {
        requestHeaders.set(config.xsrfHeaderName, xsrfValue);
      }
    }
    requestData === void 0 && requestHeaders.setContentType(null);
    if ("setRequestHeader" in request) {
      utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request.responseType = config.responseType;
    }
    if (typeof config.onDownloadProgress === "function") {
      request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
    }
    if (typeof config.onUploadProgress === "function" && request.upload) {
      request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
    }
    if (config.cancelToken || config.signal) {
      onCanceled = (cancel) => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };
      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
      }
    }
    const protocol = parseProtocol(fullPath);
    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError("Unsupported protocol " + protocol + ":", AxiosError.ERR_BAD_REQUEST, config));
      return;
    }
    request.send(requestData || null);
  });
};
const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter
};
utils.forEach(knownAdapters, (fn2, value) => {
  if (fn2) {
    try {
      Object.defineProperty(fn2, "name", { value });
    } catch (e2) {
    }
    Object.defineProperty(fn2, "adapterName", { value });
  }
});
const adapters = {
  getAdapter: (adapters2) => {
    adapters2 = utils.isArray(adapters2) ? adapters2 : [adapters2];
    const { length } = adapters2;
    let nameOrAdapter;
    let adapter;
    for (let i2 = 0; i2 < length; i2++) {
      nameOrAdapter = adapters2[i2];
      if (adapter = utils.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) {
        break;
      }
    }
    if (!adapter) {
      if (adapter === false) {
        throw new AxiosError(
          `Adapter ${nameOrAdapter} is not supported by the environment`,
          "ERR_NOT_SUPPORT"
        );
      }
      throw new Error(
        utils.hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`
      );
    }
    if (!utils.isFunction(adapter)) {
      throw new TypeError("adapter is not a function");
    }
    return adapter;
  },
  adapters: knownAdapters
};
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new CanceledError(null, config);
  }
}
function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = AxiosHeaders$1.from(config.headers);
  config.data = transformData.call(
    config,
    config.transformRequest
  );
  if (["post", "put", "patch"].indexOf(config.method) !== -1) {
    config.headers.setContentType("application/x-www-form-urlencoded", false);
  }
  const adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );
    response.headers = AxiosHeaders$1.from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  });
}
const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? thing.toJSON() : thing;
function mergeConfig(config1, config2) {
  config2 = config2 || {};
  const config = {};
  function getMergedValue(target, source, caseless) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge.call({ caseless }, target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }
  function mergeDeepProperties(a2, b2, caseless) {
    if (!utils.isUndefined(b2)) {
      return getMergedValue(a2, b2, caseless);
    } else if (!utils.isUndefined(a2)) {
      return getMergedValue(void 0, a2, caseless);
    }
  }
  function valueFromConfig2(a2, b2) {
    if (!utils.isUndefined(b2)) {
      return getMergedValue(void 0, b2);
    }
  }
  function defaultToConfig2(a2, b2) {
    if (!utils.isUndefined(b2)) {
      return getMergedValue(void 0, b2);
    } else if (!utils.isUndefined(a2)) {
      return getMergedValue(void 0, a2);
    }
  }
  function mergeDirectKeys(a2, b2, prop) {
    if (prop in config2) {
      return getMergedValue(a2, b2);
    } else if (prop in config1) {
      return getMergedValue(void 0, a2);
    }
  }
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a2, b2) => mergeDeepProperties(headersToObject(a2), headersToObject(b2), true)
  };
  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    const merge2 = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge2(config1[prop], config2[prop], prop);
    utils.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
}
const VERSION = "1.3.4";
const validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i2) => {
  validators$1[type] = function validator2(thing) {
    return typeof thing === type || "a" + (i2 < 1 ? "n " : " ") + type;
  };
});
const deprecatedWarnings = {};
validators$1.transitional = function transitional(validator2, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return (value, opt, opts) => {
    if (validator2 === false) {
      throw new AxiosError(
        formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
        AxiosError.ERR_DEPRECATED
      );
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(
        formatMessage(
          opt,
          " has been deprecated since v" + version + " and will be removed in the near future"
        )
      );
    }
    return validator2 ? validator2(value, opt, opts) : true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i2 = keys.length;
  while (i2-- > 0) {
    const opt = keys[i2];
    const validator2 = schema[opt];
    if (validator2) {
      const value = options[opt];
      const result = value === void 0 || validator2(value, opt, options);
      if (result !== true) {
        throw new AxiosError("option " + opt + " must be " + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}
const validator = {
  assertOptions,
  validators: validators$1
};
const validators = validator.validators;
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager$1(),
      response: new InterceptorManager$1()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    if (typeof configOrUrl === "string") {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = mergeConfig(this.defaults, config);
    const { transitional: transitional2, paramsSerializer, headers } = config;
    if (transitional2 !== void 0) {
      validator.assertOptions(transitional2, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }
    if (paramsSerializer !== void 0) {
      validator.assertOptions(paramsSerializer, {
        encode: validators.function,
        serialize: validators.function
      }, true);
    }
    config.method = (config.method || this.defaults.method || "get").toLowerCase();
    let contextHeaders;
    contextHeaders = headers && utils.merge(
      headers.common,
      headers[config.method]
    );
    contextHeaders && utils.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (method) => {
        delete headers[method];
      }
    );
    config.headers = AxiosHeaders$1.concat(contextHeaders, headers);
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise2;
    let i2 = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), void 0];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;
      promise2 = Promise.resolve(config);
      while (i2 < len) {
        promise2 = promise2.then(chain[i2++], chain[i2++]);
      }
      return promise2;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    i2 = 0;
    while (i2 < len) {
      const onFulfilled = requestInterceptorChain[i2++];
      const onRejected = requestInterceptorChain[i2++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise2 = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    i2 = 0;
    len = responseInterceptorChain.length;
    while (i2 < len) {
      promise2 = promise2.then(responseInterceptorChain[i2++], responseInterceptorChain[i2++]);
    }
    return promise2;
  }
  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}
utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData2(method) {
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
utils.forEach(["post", "put", "patch"], function forEachMethodWithData2(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url,
        data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod();
  Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
const Axios$1 = Axios;
class CancelToken {
  constructor(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    const token = this;
    this.promise.then((cancel) => {
      if (!token._listeners)
        return;
      let i2 = token._listeners.length;
      while (i2-- > 0) {
        token._listeners[i2](cancel);
      }
      token._listeners = null;
    });
    this.promise.then = (onfulfilled) => {
      let _resolve;
      const promise2 = new Promise((resolve) => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise2.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise2;
    };
    executor(function cancel(message, config, request) {
      if (token.reason) {
        return;
      }
      token.reason = new CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c2) {
      cancel = c2;
    });
    return {
      token,
      cancel
    };
  }
}
const CancelToken$1 = CancelToken;
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}
function isAxiosError(payload) {
  return utils.isObject(payload) && payload.isAxiosError === true;
}
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});
const HttpStatusCode$1 = HttpStatusCode;
function createInstance(defaultConfig) {
  const context = new Axios$1(defaultConfig);
  const instance = bind(Axios$1.prototype.request, context);
  utils.extend(instance, Axios$1.prototype, context, { allOwnKeys: true });
  utils.extend(instance, context, null, { allOwnKeys: true });
  instance.create = function create2(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
  return instance;
}
const axios = createInstance(defaults$1);
axios.Axios = Axios$1;
axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData;
axios.AxiosError = AxiosError;
axios.Cancel = axios.CanceledError;
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread;
axios.isAxiosError = isAxiosError;
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders$1;
axios.formToJSON = (thing) => formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.HttpStatusCode = HttpStatusCode$1;
axios.default = axios;
const axios$1 = axios;
export {
  BrowserRouter as B,
  Clipboard as C,
  Draft$1 as D,
  Link as L,
  Outlet as O,
  Provider as P,
  configureStore as a,
  useRoutes as b,
  createSlice as c,
  createRoot as d,
  useDispatch as e,
  useSelector as f,
  useNavigate as g,
  axios$1 as h,
  jsxRuntimeExports as j,
  reactExports as r,
  useLocation as u
};
