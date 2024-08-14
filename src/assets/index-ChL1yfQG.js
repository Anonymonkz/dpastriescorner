function J0(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const o in n)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(n, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => n[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && n(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function n(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = r(o);
    fetch(o.href, i);
  }
})();
function Ju(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var q0 = { exports: {} },
  fs = {},
  ep = { exports: {} },
  le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $i = Symbol.for("react.element"),
  wg = Symbol.for("react.portal"),
  kg = Symbol.for("react.fragment"),
  Sg = Symbol.for("react.strict_mode"),
  Eg = Symbol.for("react.profiler"),
  Cg = Symbol.for("react.provider"),
  bg = Symbol.for("react.context"),
  jg = Symbol.for("react.forward_ref"),
  $g = Symbol.for("react.suspense"),
  Pg = Symbol.for("react.memo"),
  Ng = Symbol.for("react.lazy"),
  Bd = Symbol.iterator;
function Rg(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Bd && e[Bd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var tp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  rp = Object.assign,
  np = {};
function co(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = np),
    (this.updater = r || tp);
}
co.prototype.isReactComponent = {};
co.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
co.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function op() {}
op.prototype = co.prototype;
function qu(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = np),
    (this.updater = r || tp);
}
var ec = (qu.prototype = new op());
ec.constructor = qu;
rp(ec, co.prototype);
ec.isPureReactComponent = !0;
var zd = Array.isArray,
  ip = Object.prototype.hasOwnProperty,
  tc = { current: null },
  lp = { key: !0, ref: !0, __self: !0, __source: !0 };
function sp(e, t, r) {
  var n,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      ip.call(t, n) && !lp.hasOwnProperty(n) && (o[n] = t[n]);
  var a = arguments.length - 2;
  if (a === 1) o.children = r;
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (n in ((a = e.defaultProps), a)) o[n] === void 0 && (o[n] = a[n]);
  return {
    $$typeof: $i,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: tc.current,
  };
}
function Tg(e, t) {
  return {
    $$typeof: $i,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function rc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === $i;
}
function Lg(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var Hd = /\/+/g;
function ta(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Lg("" + e.key)
    : t.toString(36);
}
function ml(e, t, r, n, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case $i:
          case wg:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = n === "" ? "." + ta(l, 0) : n),
      zd(o)
        ? ((r = ""),
          e != null && (r = e.replace(Hd, "$&/") + "/"),
          ml(o, t, r, "", function (u) {
            return u;
          }))
        : o != null &&
          (rc(o) &&
            (o = Tg(
              o,
              r +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Hd, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (n = n === "" ? "." : n + ":"), zd(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var s = n + ta(i, a);
      l += ml(i, t, r, s, o);
    }
  else if (((s = Rg(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (s = n + ta(i, a++)), (l += ml(i, t, r, s, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function Wi(e, t, r) {
  if (e == null) return e;
  var n = [],
    o = 0;
  return (
    ml(e, n, "", "", function (i) {
      return t.call(r, i, o++);
    }),
    n
  );
}
function Mg(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var it = { current: null },
  hl = { transition: null },
  Dg = {
    ReactCurrentDispatcher: it,
    ReactCurrentBatchConfig: hl,
    ReactCurrentOwner: tc,
  };
function ap() {
  throw Error("act(...) is not supported in production builds of React.");
}
le.Children = {
  map: Wi,
  forEach: function (e, t, r) {
    Wi(
      e,
      function () {
        t.apply(this, arguments);
      },
      r
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Wi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Wi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!rc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
le.Component = co;
le.Fragment = kg;
le.Profiler = Eg;
le.PureComponent = qu;
le.StrictMode = Sg;
le.Suspense = $g;
le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dg;
le.act = ap;
le.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var n = rp({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = tc.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      ip.call(t, s) &&
        !lp.hasOwnProperty(s) &&
        (n[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) n.children = r;
  else if (1 < s) {
    a = Array(s);
    for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
    n.children = a;
  }
  return { $$typeof: $i, type: e.type, key: o, ref: i, props: n, _owner: l };
};
le.createContext = function (e) {
  return (
    (e = {
      $$typeof: bg,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Cg, _context: e }),
    (e.Consumer = e)
  );
};
le.createElement = sp;
le.createFactory = function (e) {
  var t = sp.bind(null, e);
  return (t.type = e), t;
};
le.createRef = function () {
  return { current: null };
};
le.forwardRef = function (e) {
  return { $$typeof: jg, render: e };
};
le.isValidElement = rc;
le.lazy = function (e) {
  return { $$typeof: Ng, _payload: { _status: -1, _result: e }, _init: Mg };
};
le.memo = function (e, t) {
  return { $$typeof: Pg, type: e, compare: t === void 0 ? null : t };
};
le.startTransition = function (e) {
  var t = hl.transition;
  hl.transition = {};
  try {
    e();
  } finally {
    hl.transition = t;
  }
};
le.unstable_act = ap;
le.useCallback = function (e, t) {
  return it.current.useCallback(e, t);
};
le.useContext = function (e) {
  return it.current.useContext(e);
};
le.useDebugValue = function () {};
le.useDeferredValue = function (e) {
  return it.current.useDeferredValue(e);
};
le.useEffect = function (e, t) {
  return it.current.useEffect(e, t);
};
le.useId = function () {
  return it.current.useId();
};
le.useImperativeHandle = function (e, t, r) {
  return it.current.useImperativeHandle(e, t, r);
};
le.useInsertionEffect = function (e, t) {
  return it.current.useInsertionEffect(e, t);
};
le.useLayoutEffect = function (e, t) {
  return it.current.useLayoutEffect(e, t);
};
le.useMemo = function (e, t) {
  return it.current.useMemo(e, t);
};
le.useReducer = function (e, t, r) {
  return it.current.useReducer(e, t, r);
};
le.useRef = function (e) {
  return it.current.useRef(e);
};
le.useState = function (e) {
  return it.current.useState(e);
};
le.useSyncExternalStore = function (e, t, r) {
  return it.current.useSyncExternalStore(e, t, r);
};
le.useTransition = function () {
  return it.current.useTransition();
};
le.version = "18.3.1";
ep.exports = le;
var f = ep.exports;
const D = Ju(f),
  Rl = J0({ __proto__: null, default: D }, [f]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fg = f,
  Og = Symbol.for("react.element"),
  Ig = Symbol.for("react.fragment"),
  _g = Object.prototype.hasOwnProperty,
  Ag = Fg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Bg = { key: !0, ref: !0, __self: !0, __source: !0 };
function up(e, t, r) {
  var n,
    o = {},
    i = null,
    l = null;
  r !== void 0 && (i = "" + r),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (n in t) _g.call(t, n) && !Bg.hasOwnProperty(n) && (o[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n]);
  return {
    $$typeof: Og,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Ag.current,
  };
}
fs.Fragment = Ig;
fs.jsx = up;
fs.jsxs = up;
q0.exports = fs;
var p = q0.exports,
  Ua = {},
  cp = { exports: {} },
  Ct = {},
  dp = { exports: {} },
  fp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, I) {
    var F = M.length;
    M.push(I);
    e: for (; 0 < F; ) {
      var U = (F - 1) >>> 1,
        Z = M[U];
      if (0 < o(Z, I)) (M[U] = I), (M[F] = Z), (F = U);
      else break e;
    }
  }
  function r(M) {
    return M.length === 0 ? null : M[0];
  }
  function n(M) {
    if (M.length === 0) return null;
    var I = M[0],
      F = M.pop();
    if (F !== I) {
      M[0] = F;
      e: for (var U = 0, Z = M.length, ie = Z >>> 1; U < ie; ) {
        var ee = 2 * (U + 1) - 1,
          se = M[ee],
          fe = ee + 1,
          jt = M[fe];
        if (0 > o(se, F))
          fe < Z && 0 > o(jt, se)
            ? ((M[U] = jt), (M[fe] = F), (U = fe))
            : ((M[U] = se), (M[ee] = F), (U = ee));
        else if (fe < Z && 0 > o(jt, F)) (M[U] = jt), (M[fe] = F), (U = fe);
        else break e;
      }
    }
    return I;
  }
  function o(M, I) {
    var F = M.sortIndex - I.sortIndex;
    return F !== 0 ? F : M.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  var s = [],
    u = [],
    c = 1,
    d = null,
    m = 3,
    h = !1,
    y = !1,
    w = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    v = typeof clearTimeout == "function" ? clearTimeout : null,
    g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(M) {
    for (var I = r(u); I !== null; ) {
      if (I.callback === null) n(u);
      else if (I.startTime <= M)
        n(u), (I.sortIndex = I.expirationTime), t(s, I);
      else break;
      I = r(u);
    }
  }
  function E(M) {
    if (((w = !1), x(M), !y))
      if (r(s) !== null) (y = !0), oe($);
      else {
        var I = r(u);
        I !== null && B(E, I.startTime - M);
      }
  }
  function $(M, I) {
    (y = !1), w && ((w = !1), v(j), (j = -1)), (h = !0);
    var F = m;
    try {
      for (
        x(I), d = r(s);
        d !== null && (!(d.expirationTime > I) || (M && !_()));

      ) {
        var U = d.callback;
        if (typeof U == "function") {
          (d.callback = null), (m = d.priorityLevel);
          var Z = U(d.expirationTime <= I);
          (I = e.unstable_now()),
            typeof Z == "function" ? (d.callback = Z) : d === r(s) && n(s),
            x(I);
        } else n(s);
        d = r(s);
      }
      if (d !== null) var ie = !0;
      else {
        var ee = r(u);
        ee !== null && B(E, ee.startTime - I), (ie = !1);
      }
      return ie;
    } finally {
      (d = null), (m = F), (h = !1);
    }
  }
  var S = !1,
    P = null,
    j = -1,
    R = 5,
    L = -1;
  function _() {
    return !(e.unstable_now() - L < R);
  }
  function W() {
    if (P !== null) {
      var M = e.unstable_now();
      L = M;
      var I = !0;
      try {
        I = P(!0, M);
      } finally {
        I ? Y() : ((S = !1), (P = null));
      }
    } else S = !1;
  }
  var Y;
  if (typeof g == "function")
    Y = function () {
      g(W);
    };
  else if (typeof MessageChannel < "u") {
    var K = new MessageChannel(),
      z = K.port2;
    (K.port1.onmessage = W),
      (Y = function () {
        z.postMessage(null);
      });
  } else
    Y = function () {
      k(W, 0);
    };
  function oe(M) {
    (P = M), S || ((S = !0), Y());
  }
  function B(M, I) {
    j = k(function () {
      M(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || h || ((y = !0), oe($));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (R = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(s);
    }),
    (e.unstable_next = function (M) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = m;
      }
      var F = m;
      m = I;
      try {
        return M();
      } finally {
        m = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, I) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var F = m;
      m = M;
      try {
        return I();
      } finally {
        m = F;
      }
    }),
    (e.unstable_scheduleCallback = function (M, I, F) {
      var U = e.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? U + F : U))
          : (F = U),
        M)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = F + Z),
        (M = {
          id: c++,
          callback: I,
          priorityLevel: M,
          startTime: F,
          expirationTime: Z,
          sortIndex: -1,
        }),
        F > U
          ? ((M.sortIndex = F),
            t(u, M),
            r(s) === null &&
              M === r(u) &&
              (w ? (v(j), (j = -1)) : (w = !0), B(E, F - U)))
          : ((M.sortIndex = Z), t(s, M), y || h || ((y = !0), oe($))),
        M
      );
    }),
    (e.unstable_shouldYield = _),
    (e.unstable_wrapCallback = function (M) {
      var I = m;
      return function () {
        var F = m;
        m = I;
        try {
          return M.apply(this, arguments);
        } finally {
          m = F;
        }
      };
    });
})(fp);
dp.exports = fp;
var zg = dp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hg = f,
  Et = zg;
function O(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var pp = new Set(),
  ri = {};
function Sn(e, t) {
  Jn(e, t), Jn(e + "Capture", t);
}
function Jn(e, t) {
  for (ri[e] = t, e = 0; e < t.length; e++) pp.add(t[e]);
}
var lr = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Va = Object.prototype.hasOwnProperty,
  Ug =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ud = {},
  Vd = {};
function Vg(e) {
  return Va.call(Vd, e)
    ? !0
    : Va.call(Ud, e)
    ? !1
    : Ug.test(e)
    ? (Vd[e] = !0)
    : ((Ud[e] = !0), !1);
}
function Wg(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : r !== null
        ? !r.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Qg(e, t, r, n) {
  if (t === null || typeof t > "u" || Wg(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function lt(e, t, r, n, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = o),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var Qe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Qe[e] = new lt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Qe[t] = new lt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Qe[e] = new lt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Qe[e] = new lt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Qe[e] = new lt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Qe[e] = new lt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Qe[e] = new lt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Qe[e] = new lt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Qe[e] = new lt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var nc = /[\-:]([a-z])/g;
function oc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(nc, oc);
    Qe[t] = new lt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(nc, oc);
    Qe[t] = new lt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(nc, oc);
  Qe[t] = new lt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Qe[e] = new lt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Qe.xlinkHref = new lt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Qe[e] = new lt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ic(e, t, r, n) {
  var o = Qe.hasOwnProperty(t) ? Qe[t] : null;
  (o !== null
    ? o.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Qg(t, r, o, n) && (r = null),
    n || o === null
      ? Vg(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
      : o.mustUseProperty
      ? (e[o.propertyName] = r === null ? (o.type === 3 ? !1 : "") : r)
      : ((t = o.attributeName),
        (n = o.attributeNamespace),
        r === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (r = o === 3 || (o === 4 && r === !0) ? "" : "" + r),
            n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var cr = Hg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Qi = Symbol.for("react.element"),
  Ln = Symbol.for("react.portal"),
  Mn = Symbol.for("react.fragment"),
  lc = Symbol.for("react.strict_mode"),
  Wa = Symbol.for("react.profiler"),
  mp = Symbol.for("react.provider"),
  hp = Symbol.for("react.context"),
  sc = Symbol.for("react.forward_ref"),
  Qa = Symbol.for("react.suspense"),
  Ka = Symbol.for("react.suspense_list"),
  ac = Symbol.for("react.memo"),
  wr = Symbol.for("react.lazy"),
  gp = Symbol.for("react.offscreen"),
  Wd = Symbol.iterator;
function jo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Wd && e[Wd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Re = Object.assign,
  ra;
function _o(e) {
  if (ra === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      ra = (t && t[1]) || "";
    }
  return (
    `
` +
    ra +
    e
  );
}
var na = !1;
function oa(e, t) {
  if (!e || na) return "";
  na = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var n = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          n = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      e();
    }
  } catch (u) {
    if (u && n && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = n.stack.split(`
`),
          l = o.length - 1,
          a = i.length - 1;
        1 <= l && 0 <= a && o[l] !== i[a];

      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (o[l] !== i[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || o[l] !== i[a])) {
                var s =
                  `
` + o[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    (na = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? _o(e) : "";
}
function Kg(e) {
  switch (e.tag) {
    case 5:
      return _o(e.type);
    case 16:
      return _o("Lazy");
    case 13:
      return _o("Suspense");
    case 19:
      return _o("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = oa(e.type, !1)), e;
    case 11:
      return (e = oa(e.type.render, !1)), e;
    case 1:
      return (e = oa(e.type, !0)), e;
    default:
      return "";
  }
}
function Ya(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Mn:
      return "Fragment";
    case Ln:
      return "Portal";
    case Wa:
      return "Profiler";
    case lc:
      return "StrictMode";
    case Qa:
      return "Suspense";
    case Ka:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case hp:
        return (e.displayName || "Context") + ".Consumer";
      case mp:
        return (e._context.displayName || "Context") + ".Provider";
      case sc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ac:
        return (
          (t = e.displayName || null), t !== null ? t : Ya(e.type) || "Memo"
        );
      case wr:
        (t = e._payload), (e = e._init);
        try {
          return Ya(e(t));
        } catch {}
    }
  return null;
}
function Yg(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ya(t);
    case 8:
      return t === lc ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Br(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function vp(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Gg(e) {
  var t = vp(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var o = r.get,
      i = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (n = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (l) {
          n = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ki(e) {
  e._valueTracker || (e._valueTracker = Gg(e));
}
function yp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return (
    e && (n = vp(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function Tl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ga(e, t) {
  var r = t.checked;
  return Re({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function Qd(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (r = Br(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function xp(e, t) {
  (t = t.checked), t != null && ic(e, "checked", t, !1);
}
function Xa(e, t) {
  xp(e, t);
  var r = Br(t.value),
    n = t.type;
  if (r != null)
    n === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Za(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && Za(e, t.type, Br(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Kd(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r);
}
function Za(e, t, r) {
  (t !== "number" || Tl(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var Ao = Array.isArray;
function Wn(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < r.length; o++) t["$" + r[o]] = !0;
    for (r = 0; r < e.length; r++)
      (o = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== o && (e[r].selected = o),
        o && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + Br(r), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === r) {
        (e[o].selected = !0), n && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ja(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return Re({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Yd(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(O(92));
      if (Ao(r)) {
        if (1 < r.length) throw Error(O(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: Br(r) };
}
function wp(e, t) {
  var r = Br(t.value),
    n = Br(t.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n);
}
function Gd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function kp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function qa(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? kp(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Yi,
  Sp = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Yi = Yi || document.createElement("div"),
          Yi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Yi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ni(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Vo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Xg = ["Webkit", "ms", "Moz", "O"];
Object.keys(Vo).forEach(function (e) {
  Xg.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Vo[t] = Vo[e]);
  });
});
function Ep(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (Vo.hasOwnProperty(e) && Vo[e])
    ? ("" + t).trim()
    : t + "px";
}
function Cp(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        o = Ep(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, o) : (e[r] = o);
    }
}
var Zg = Re(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function eu(e, t) {
  if (t) {
    if (Zg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function tu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ru = null;
function uc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var nu = null,
  Qn = null,
  Kn = null;
function Xd(e) {
  if ((e = Ri(e))) {
    if (typeof nu != "function") throw Error(O(280));
    var t = e.stateNode;
    t && ((t = vs(t)), nu(e.stateNode, e.type, t));
  }
}
function bp(e) {
  Qn ? (Kn ? Kn.push(e) : (Kn = [e])) : (Qn = e);
}
function jp() {
  if (Qn) {
    var e = Qn,
      t = Kn;
    if (((Kn = Qn = null), Xd(e), t)) for (e = 0; e < t.length; e++) Xd(t[e]);
  }
}
function $p(e, t) {
  return e(t);
}
function Pp() {}
var ia = !1;
function Np(e, t, r) {
  if (ia) return e(t, r);
  ia = !0;
  try {
    return $p(e, t, r);
  } finally {
    (ia = !1), (Qn !== null || Kn !== null) && (Pp(), jp());
  }
}
function oi(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = vs(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
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
      (n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(O(231, t, typeof r));
  return r;
}
var ou = !1;
if (lr)
  try {
    var $o = {};
    Object.defineProperty($o, "passive", {
      get: function () {
        ou = !0;
      },
    }),
      window.addEventListener("test", $o, $o),
      window.removeEventListener("test", $o, $o);
  } catch {
    ou = !1;
  }
function Jg(e, t, r, n, o, i, l, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var Wo = !1,
  Ll = null,
  Ml = !1,
  iu = null,
  qg = {
    onError: function (e) {
      (Wo = !0), (Ll = e);
    },
  };
function ev(e, t, r, n, o, i, l, a, s) {
  (Wo = !1), (Ll = null), Jg.apply(qg, arguments);
}
function tv(e, t, r, n, o, i, l, a, s) {
  if ((ev.apply(this, arguments), Wo)) {
    if (Wo) {
      var u = Ll;
      (Wo = !1), (Ll = null);
    } else throw Error(O(198));
    Ml || ((Ml = !0), (iu = u));
  }
}
function En(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function Rp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Zd(e) {
  if (En(e) !== e) throw Error(O(188));
}
function rv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = En(e)), t === null)) throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var o = r.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((n = o.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === r) return Zd(o), e;
        if (i === n) return Zd(o), t;
        i = i.sibling;
      }
      throw Error(O(188));
    }
    if (r.return !== n.return) (r = o), (n = i);
    else {
      for (var l = !1, a = o.child; a; ) {
        if (a === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        if (a === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = i.child; a; ) {
          if (a === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          if (a === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(O(189));
      }
    }
    if (r.alternate !== n) throw Error(O(190));
  }
  if (r.tag !== 3) throw Error(O(188));
  return r.stateNode.current === r ? e : t;
}
function Tp(e) {
  return (e = rv(e)), e !== null ? Lp(e) : null;
}
function Lp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Lp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Mp = Et.unstable_scheduleCallback,
  Jd = Et.unstable_cancelCallback,
  nv = Et.unstable_shouldYield,
  ov = Et.unstable_requestPaint,
  Me = Et.unstable_now,
  iv = Et.unstable_getCurrentPriorityLevel,
  cc = Et.unstable_ImmediatePriority,
  Dp = Et.unstable_UserBlockingPriority,
  Dl = Et.unstable_NormalPriority,
  lv = Et.unstable_LowPriority,
  Fp = Et.unstable_IdlePriority,
  ps = null,
  Kt = null;
function sv(e) {
  if (Kt && typeof Kt.onCommitFiberRoot == "function")
    try {
      Kt.onCommitFiberRoot(ps, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var At = Math.clz32 ? Math.clz32 : cv,
  av = Math.log,
  uv = Math.LN2;
function cv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((av(e) / uv) | 0)) | 0;
}
var Gi = 64,
  Xi = 4194304;
function Bo(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Fl(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = r & 268435455;
  if (l !== 0) {
    var a = l & ~o;
    a !== 0 ? (n = Bo(a)) : ((i &= l), i !== 0 && (n = Bo(i)));
  } else (l = r & ~o), l !== 0 ? (n = Bo(l)) : i !== 0 && (n = Bo(i));
  if (n === 0) return 0;
  if (
    t !== 0 &&
    t !== n &&
    !(t & o) &&
    ((o = n & -n), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      (r = 31 - At(t)), (o = 1 << r), (n |= e[r]), (t &= ~o);
  return n;
}
function dv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function fv(e, t) {
  for (
    var r = e.suspendedLanes,
      n = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - At(i),
      a = 1 << l,
      s = o[l];
    s === -1
      ? (!(a & r) || a & n) && (o[l] = dv(a, t))
      : s <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function lu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Op() {
  var e = Gi;
  return (Gi <<= 1), !(Gi & 4194240) && (Gi = 64), e;
}
function la(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function Pi(e, t, r) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - At(t)),
    (e[t] = r);
}
function pv(e, t) {
  var r = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var o = 31 - At(r),
      i = 1 << o;
    (t[o] = 0), (n[o] = -1), (e[o] = -1), (r &= ~i);
  }
}
function dc(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - At(r),
      o = 1 << n;
    (o & t) | (e[n] & t) && (e[n] |= t), (r &= ~o);
  }
}
var he = 0;
function Ip(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var _p,
  fc,
  Ap,
  Bp,
  zp,
  su = !1,
  Zi = [],
  Tr = null,
  Lr = null,
  Mr = null,
  ii = new Map(),
  li = new Map(),
  Er = [],
  mv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function qd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Tr = null;
      break;
    case "dragenter":
    case "dragleave":
      Lr = null;
      break;
    case "mouseover":
    case "mouseout":
      Mr = null;
      break;
    case "pointerover":
    case "pointerout":
      ii.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      li.delete(t.pointerId);
  }
}
function Po(e, t, r, n, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Ri(t)), t !== null && fc(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function hv(e, t, r, n, o) {
  switch (t) {
    case "focusin":
      return (Tr = Po(Tr, e, t, r, n, o)), !0;
    case "dragenter":
      return (Lr = Po(Lr, e, t, r, n, o)), !0;
    case "mouseover":
      return (Mr = Po(Mr, e, t, r, n, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return ii.set(i, Po(ii.get(i) || null, e, t, r, n, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), li.set(i, Po(li.get(i) || null, e, t, r, n, o)), !0
      );
  }
  return !1;
}
function Hp(e) {
  var t = tn(e.target);
  if (t !== null) {
    var r = En(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = Rp(r)), t !== null)) {
          (e.blockedOn = t),
            zp(e.priority, function () {
              Ap(r);
            });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function gl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = au(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      (ru = n), r.target.dispatchEvent(n), (ru = null);
    } else return (t = Ri(r)), t !== null && fc(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function ef(e, t, r) {
  gl(e) && r.delete(t);
}
function gv() {
  (su = !1),
    Tr !== null && gl(Tr) && (Tr = null),
    Lr !== null && gl(Lr) && (Lr = null),
    Mr !== null && gl(Mr) && (Mr = null),
    ii.forEach(ef),
    li.forEach(ef);
}
function No(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    su ||
      ((su = !0),
      Et.unstable_scheduleCallback(Et.unstable_NormalPriority, gv)));
}
function si(e) {
  function t(o) {
    return No(o, e);
  }
  if (0 < Zi.length) {
    No(Zi[0], e);
    for (var r = 1; r < Zi.length; r++) {
      var n = Zi[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    Tr !== null && No(Tr, e),
      Lr !== null && No(Lr, e),
      Mr !== null && No(Mr, e),
      ii.forEach(t),
      li.forEach(t),
      r = 0;
    r < Er.length;
    r++
  )
    (n = Er[r]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < Er.length && ((r = Er[0]), r.blockedOn === null); )
    Hp(r), r.blockedOn === null && Er.shift();
}
var Yn = cr.ReactCurrentBatchConfig,
  Ol = !0;
function vv(e, t, r, n) {
  var o = he,
    i = Yn.transition;
  Yn.transition = null;
  try {
    (he = 1), pc(e, t, r, n);
  } finally {
    (he = o), (Yn.transition = i);
  }
}
function yv(e, t, r, n) {
  var o = he,
    i = Yn.transition;
  Yn.transition = null;
  try {
    (he = 4), pc(e, t, r, n);
  } finally {
    (he = o), (Yn.transition = i);
  }
}
function pc(e, t, r, n) {
  if (Ol) {
    var o = au(e, t, r, n);
    if (o === null) ga(e, t, n, Il, r), qd(e, n);
    else if (hv(o, e, t, r, n)) n.stopPropagation();
    else if ((qd(e, n), t & 4 && -1 < mv.indexOf(e))) {
      for (; o !== null; ) {
        var i = Ri(o);
        if (
          (i !== null && _p(i),
          (i = au(e, t, r, n)),
          i === null && ga(e, t, n, Il, r),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && n.stopPropagation();
    } else ga(e, t, n, null, r);
  }
}
var Il = null;
function au(e, t, r, n) {
  if (((Il = null), (e = uc(n)), (e = tn(e)), e !== null))
    if (((t = En(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = Rp(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Il = e), null;
}
function Up(e) {
  switch (e) {
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
      switch (iv()) {
        case cc:
          return 1;
        case Dp:
          return 4;
        case Dl:
        case lv:
          return 16;
        case Fp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var jr = null,
  mc = null,
  vl = null;
function Vp() {
  if (vl) return vl;
  var e,
    t = mc,
    r = t.length,
    n,
    o = "value" in jr ? jr.value : jr.textContent,
    i = o.length;
  for (e = 0; e < r && t[e] === o[e]; e++);
  var l = r - e;
  for (n = 1; n <= l && t[r - n] === o[i - n]; n++);
  return (vl = o.slice(e, 1 < n ? 1 - n : void 0));
}
function yl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ji() {
  return !0;
}
function tf() {
  return !1;
}
function bt(e) {
  function t(r, n, o, i, l) {
    (this._reactName = r),
      (this._targetInst = o),
      (this.type = n),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((r = e[a]), (this[a] = r ? r(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ji
        : tf),
      (this.isPropagationStopped = tf),
      this
    );
  }
  return (
    Re(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = Ji));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = Ji));
      },
      persist: function () {},
      isPersistent: Ji,
    }),
    t
  );
}
var fo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  hc = bt(fo),
  Ni = Re({}, fo, { view: 0, detail: 0 }),
  xv = bt(Ni),
  sa,
  aa,
  Ro,
  ms = Re({}, Ni, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: gc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ro &&
            (Ro && e.type === "mousemove"
              ? ((sa = e.screenX - Ro.screenX), (aa = e.screenY - Ro.screenY))
              : (aa = sa = 0),
            (Ro = e)),
          sa);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : aa;
    },
  }),
  rf = bt(ms),
  wv = Re({}, ms, { dataTransfer: 0 }),
  kv = bt(wv),
  Sv = Re({}, Ni, { relatedTarget: 0 }),
  ua = bt(Sv),
  Ev = Re({}, fo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Cv = bt(Ev),
  bv = Re({}, fo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  jv = bt(bv),
  $v = Re({}, fo, { data: 0 }),
  nf = bt($v),
  Pv = {
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
    MozPrintableKey: "Unidentified",
  },
  Nv = {
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
    224: "Meta",
  },
  Rv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Tv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Rv[e]) ? !!t[e] : !1;
}
function gc() {
  return Tv;
}
var Lv = Re({}, Ni, {
    key: function (e) {
      if (e.key) {
        var t = Pv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = yl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Nv[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: gc,
    charCode: function (e) {
      return e.type === "keypress" ? yl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? yl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Mv = bt(Lv),
  Dv = Re({}, ms, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  of = bt(Dv),
  Fv = Re({}, Ni, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: gc,
  }),
  Ov = bt(Fv),
  Iv = Re({}, fo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _v = bt(Iv),
  Av = Re({}, ms, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Bv = bt(Av),
  zv = [9, 13, 27, 32],
  vc = lr && "CompositionEvent" in window,
  Qo = null;
lr && "documentMode" in document && (Qo = document.documentMode);
var Hv = lr && "TextEvent" in window && !Qo,
  Wp = lr && (!vc || (Qo && 8 < Qo && 11 >= Qo)),
  lf = " ",
  sf = !1;
function Qp(e, t) {
  switch (e) {
    case "keyup":
      return zv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Kp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Dn = !1;
function Uv(e, t) {
  switch (e) {
    case "compositionend":
      return Kp(t);
    case "keypress":
      return t.which !== 32 ? null : ((sf = !0), lf);
    case "textInput":
      return (e = t.data), e === lf && sf ? null : e;
    default:
      return null;
  }
}
function Vv(e, t) {
  if (Dn)
    return e === "compositionend" || (!vc && Qp(e, t))
      ? ((e = Vp()), (vl = mc = jr = null), (Dn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Wp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Wv = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function af(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Wv[e.type] : t === "textarea";
}
function Yp(e, t, r, n) {
  bp(n),
    (t = _l(t, "onChange")),
    0 < t.length &&
      ((r = new hc("onChange", "change", null, r, n)),
      e.push({ event: r, listeners: t }));
}
var Ko = null,
  ai = null;
function Qv(e) {
  im(e, 0);
}
function hs(e) {
  var t = In(e);
  if (yp(t)) return e;
}
function Kv(e, t) {
  if (e === "change") return t;
}
var Gp = !1;
if (lr) {
  var ca;
  if (lr) {
    var da = "oninput" in document;
    if (!da) {
      var uf = document.createElement("div");
      uf.setAttribute("oninput", "return;"),
        (da = typeof uf.oninput == "function");
    }
    ca = da;
  } else ca = !1;
  Gp = ca && (!document.documentMode || 9 < document.documentMode);
}
function cf() {
  Ko && (Ko.detachEvent("onpropertychange", Xp), (ai = Ko = null));
}
function Xp(e) {
  if (e.propertyName === "value" && hs(ai)) {
    var t = [];
    Yp(t, ai, e, uc(e)), Np(Qv, t);
  }
}
function Yv(e, t, r) {
  e === "focusin"
    ? (cf(), (Ko = t), (ai = r), Ko.attachEvent("onpropertychange", Xp))
    : e === "focusout" && cf();
}
function Gv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return hs(ai);
}
function Xv(e, t) {
  if (e === "click") return hs(t);
}
function Zv(e, t) {
  if (e === "input" || e === "change") return hs(t);
}
function Jv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var zt = typeof Object.is == "function" ? Object.is : Jv;
function ui(e, t) {
  if (zt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var o = r[n];
    if (!Va.call(t, o) || !zt(e[o], t[o])) return !1;
  }
  return !0;
}
function df(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ff(e, t) {
  var r = df(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = df(r);
  }
}
function Zp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Zp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Jp() {
  for (var e = window, t = Tl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = Tl(e.document);
  }
  return t;
}
function yc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function qv(e) {
  var t = Jp(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    Zp(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && yc(r)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        "selectionStart" in r)
      )
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = r.textContent.length,
          i = Math.min(n.start, o);
        (n = n.end === void 0 ? i : Math.min(n.end, o)),
          !e.extend && i > n && ((o = n), (n = i), (i = o)),
          (o = ff(r, i));
        var l = ff(r, n);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > n
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var e2 = lr && "documentMode" in document && 11 >= document.documentMode,
  Fn = null,
  uu = null,
  Yo = null,
  cu = !1;
function pf(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  cu ||
    Fn == null ||
    Fn !== Tl(n) ||
    ((n = Fn),
    "selectionStart" in n && yc(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (Yo && ui(Yo, n)) ||
      ((Yo = n),
      (n = _l(uu, "onSelect")),
      0 < n.length &&
        ((t = new hc("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = Fn))));
}
function qi(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var On = {
    animationend: qi("Animation", "AnimationEnd"),
    animationiteration: qi("Animation", "AnimationIteration"),
    animationstart: qi("Animation", "AnimationStart"),
    transitionend: qi("Transition", "TransitionEnd"),
  },
  fa = {},
  qp = {};
lr &&
  ((qp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete On.animationend.animation,
    delete On.animationiteration.animation,
    delete On.animationstart.animation),
  "TransitionEvent" in window || delete On.transitionend.transition);
function gs(e) {
  if (fa[e]) return fa[e];
  if (!On[e]) return e;
  var t = On[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in qp) return (fa[e] = t[r]);
  return e;
}
var em = gs("animationend"),
  tm = gs("animationiteration"),
  rm = gs("animationstart"),
  nm = gs("transitionend"),
  om = new Map(),
  mf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Qr(e, t) {
  om.set(e, t), Sn(t, [e]);
}
for (var pa = 0; pa < mf.length; pa++) {
  var ma = mf[pa],
    t2 = ma.toLowerCase(),
    r2 = ma[0].toUpperCase() + ma.slice(1);
  Qr(t2, "on" + r2);
}
Qr(em, "onAnimationEnd");
Qr(tm, "onAnimationIteration");
Qr(rm, "onAnimationStart");
Qr("dblclick", "onDoubleClick");
Qr("focusin", "onFocus");
Qr("focusout", "onBlur");
Qr(nm, "onTransitionEnd");
Jn("onMouseEnter", ["mouseout", "mouseover"]);
Jn("onMouseLeave", ["mouseout", "mouseover"]);
Jn("onPointerEnter", ["pointerout", "pointerover"]);
Jn("onPointerLeave", ["pointerout", "pointerover"]);
Sn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Sn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Sn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Sn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Sn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var zo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  n2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(zo));
function hf(e, t, r) {
  var n = e.type || "unknown-event";
  (e.currentTarget = r), tv(n, t, void 0, e), (e.currentTarget = null);
}
function im(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      o = n.event;
    n = n.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = n.length - 1; 0 <= l; l--) {
          var a = n[l],
            s = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), s !== i && o.isPropagationStopped())) break e;
          hf(o, a, u), (i = s);
        }
      else
        for (l = 0; l < n.length; l++) {
          if (
            ((a = n[l]),
            (s = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            s !== i && o.isPropagationStopped())
          )
            break e;
          hf(o, a, u), (i = s);
        }
    }
  }
  if (Ml) throw ((e = iu), (Ml = !1), (iu = null), e);
}
function Ee(e, t) {
  var r = t[hu];
  r === void 0 && (r = t[hu] = new Set());
  var n = e + "__bubble";
  r.has(n) || (lm(t, e, 2, !1), r.add(n));
}
function ha(e, t, r) {
  var n = 0;
  t && (n |= 4), lm(r, e, n, t);
}
var el = "_reactListening" + Math.random().toString(36).slice(2);
function ci(e) {
  if (!e[el]) {
    (e[el] = !0),
      pp.forEach(function (r) {
        r !== "selectionchange" && (n2.has(r) || ha(r, !1, e), ha(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[el] || ((t[el] = !0), ha("selectionchange", !1, t));
  }
}
function lm(e, t, r, n) {
  switch (Up(t)) {
    case 1:
      var o = vv;
      break;
    case 4:
      o = yv;
      break;
    default:
      o = pc;
  }
  (r = o.bind(null, t, r, e)),
    (o = void 0),
    !ou ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    n
      ? o !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: o })
        : e.addEventListener(t, r, !0)
      : o !== void 0
      ? e.addEventListener(t, r, { passive: o })
      : e.addEventListener(t, r, !1);
}
function ga(e, t, r, n, o) {
  var i = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var l = n.tag;
      if (l === 3 || l === 4) {
        var a = n.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (l === 4)
          for (l = n.return; l !== null; ) {
            var s = l.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = tn(a)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            n = i = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      n = n.return;
    }
  Np(function () {
    var u = i,
      c = uc(r),
      d = [];
    e: {
      var m = om.get(e);
      if (m !== void 0) {
        var h = hc,
          y = e;
        switch (e) {
          case "keypress":
            if (yl(r) === 0) break e;
          case "keydown":
          case "keyup":
            h = Mv;
            break;
          case "focusin":
            (y = "focus"), (h = ua);
            break;
          case "focusout":
            (y = "blur"), (h = ua);
            break;
          case "beforeblur":
          case "afterblur":
            h = ua;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = rf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = kv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = Ov;
            break;
          case em:
          case tm:
          case rm:
            h = Cv;
            break;
          case nm:
            h = _v;
            break;
          case "scroll":
            h = xv;
            break;
          case "wheel":
            h = Bv;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = jv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = of;
        }
        var w = (t & 4) !== 0,
          k = !w && e === "scroll",
          v = w ? (m !== null ? m + "Capture" : null) : m;
        w = [];
        for (var g = u, x; g !== null; ) {
          x = g;
          var E = x.stateNode;
          if (
            (x.tag === 5 &&
              E !== null &&
              ((x = E),
              v !== null && ((E = oi(g, v)), E != null && w.push(di(g, E, x)))),
            k)
          )
            break;
          g = g.return;
        }
        0 < w.length &&
          ((m = new h(m, y, null, r, c)), d.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          m &&
            r !== ru &&
            (y = r.relatedTarget || r.fromElement) &&
            (tn(y) || y[sr]))
        )
          break e;
        if (
          (h || m) &&
          ((m =
            c.window === c
              ? c
              : (m = c.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          h
            ? ((y = r.relatedTarget || r.toElement),
              (h = u),
              (y = y ? tn(y) : null),
              y !== null &&
                ((k = En(y)), y !== k || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((h = null), (y = u)),
          h !== y)
        ) {
          if (
            ((w = rf),
            (E = "onMouseLeave"),
            (v = "onMouseEnter"),
            (g = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = of),
              (E = "onPointerLeave"),
              (v = "onPointerEnter"),
              (g = "pointer")),
            (k = h == null ? m : In(h)),
            (x = y == null ? m : In(y)),
            (m = new w(E, g + "leave", h, r, c)),
            (m.target = k),
            (m.relatedTarget = x),
            (E = null),
            tn(c) === u &&
              ((w = new w(v, g + "enter", y, r, c)),
              (w.target = x),
              (w.relatedTarget = k),
              (E = w)),
            (k = E),
            h && y)
          )
            t: {
              for (w = h, v = y, g = 0, x = w; x; x = Rn(x)) g++;
              for (x = 0, E = v; E; E = Rn(E)) x++;
              for (; 0 < g - x; ) (w = Rn(w)), g--;
              for (; 0 < x - g; ) (v = Rn(v)), x--;
              for (; g--; ) {
                if (w === v || (v !== null && w === v.alternate)) break t;
                (w = Rn(w)), (v = Rn(v));
              }
              w = null;
            }
          else w = null;
          h !== null && gf(d, m, h, w, !1),
            y !== null && k !== null && gf(d, k, y, w, !0);
        }
      }
      e: {
        if (
          ((m = u ? In(u) : window),
          (h = m.nodeName && m.nodeName.toLowerCase()),
          h === "select" || (h === "input" && m.type === "file"))
        )
          var $ = Kv;
        else if (af(m))
          if (Gp) $ = Zv;
          else {
            $ = Gv;
            var S = Yv;
          }
        else
          (h = m.nodeName) &&
            h.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            ($ = Xv);
        if ($ && ($ = $(e, u))) {
          Yp(d, $, r, c);
          break e;
        }
        S && S(e, m, u),
          e === "focusout" &&
            (S = m._wrapperState) &&
            S.controlled &&
            m.type === "number" &&
            Za(m, "number", m.value);
      }
      switch (((S = u ? In(u) : window), e)) {
        case "focusin":
          (af(S) || S.contentEditable === "true") &&
            ((Fn = S), (uu = u), (Yo = null));
          break;
        case "focusout":
          Yo = uu = Fn = null;
          break;
        case "mousedown":
          cu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (cu = !1), pf(d, r, c);
          break;
        case "selectionchange":
          if (e2) break;
        case "keydown":
        case "keyup":
          pf(d, r, c);
      }
      var P;
      if (vc)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        Dn
          ? Qp(e, r) && (j = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (Wp &&
          r.locale !== "ko" &&
          (Dn || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && Dn && (P = Vp())
            : ((jr = c),
              (mc = "value" in jr ? jr.value : jr.textContent),
              (Dn = !0))),
        (S = _l(u, j)),
        0 < S.length &&
          ((j = new nf(j, e, null, r, c)),
          d.push({ event: j, listeners: S }),
          P ? (j.data = P) : ((P = Kp(r)), P !== null && (j.data = P)))),
        (P = Hv ? Uv(e, r) : Vv(e, r)) &&
          ((u = _l(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new nf("onBeforeInput", "beforeinput", null, r, c)),
            d.push({ event: c, listeners: u }),
            (c.data = P)));
    }
    im(d, t);
  });
}
function di(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function _l(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = oi(e, r)),
      i != null && n.unshift(di(e, i, o)),
      (i = oi(e, t)),
      i != null && n.push(di(e, i, o))),
      (e = e.return);
  }
  return n;
}
function Rn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function gf(e, t, r, n, o) {
  for (var i = t._reactName, l = []; r !== null && r !== n; ) {
    var a = r,
      s = a.alternate,
      u = a.stateNode;
    if (s !== null && s === n) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((s = oi(r, i)), s != null && l.unshift(di(r, s, a)))
        : o || ((s = oi(r, i)), s != null && l.push(di(r, s, a)))),
      (r = r.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var o2 = /\r\n?/g,
  i2 = /\u0000|\uFFFD/g;
function vf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      o2,
      `
`
    )
    .replace(i2, "");
}
function tl(e, t, r) {
  if (((t = vf(t)), vf(e) !== t && r)) throw Error(O(425));
}
function Al() {}
var du = null,
  fu = null;
function pu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var mu = typeof setTimeout == "function" ? setTimeout : void 0,
  l2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  yf = typeof Promise == "function" ? Promise : void 0,
  s2 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof yf < "u"
      ? function (e) {
          return yf.resolve(null).then(e).catch(a2);
        }
      : mu;
function a2(e) {
  setTimeout(function () {
    throw e;
  });
}
function va(e, t) {
  var r = t,
    n = 0;
  do {
    var o = r.nextSibling;
    if ((e.removeChild(r), o && o.nodeType === 8))
      if (((r = o.data), r === "/$")) {
        if (n === 0) {
          e.removeChild(o), si(t);
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = o;
  } while (r);
  si(t);
}
function Dr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function xf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var po = Math.random().toString(36).slice(2),
  Qt = "__reactFiber$" + po,
  fi = "__reactProps$" + po,
  sr = "__reactContainer$" + po,
  hu = "__reactEvents$" + po,
  u2 = "__reactListeners$" + po,
  c2 = "__reactHandles$" + po;
function tn(e) {
  var t = e[Qt];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[sr] || r[Qt])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = xf(e); e !== null; ) {
          if ((r = e[Qt])) return r;
          e = xf(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function Ri(e) {
  return (
    (e = e[Qt] || e[sr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function In(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function vs(e) {
  return e[fi] || null;
}
var gu = [],
  _n = -1;
function Kr(e) {
  return { current: e };
}
function Ce(e) {
  0 > _n || ((e.current = gu[_n]), (gu[_n] = null), _n--);
}
function ke(e, t) {
  _n++, (gu[_n] = e.current), (e.current = t);
}
var zr = {},
  Ze = Kr(zr),
  dt = Kr(!1),
  pn = zr;
function qn(e, t) {
  var r = e.type.contextTypes;
  if (!r) return zr;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in r) o[i] = t[i];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function ft(e) {
  return (e = e.childContextTypes), e != null;
}
function Bl() {
  Ce(dt), Ce(Ze);
}
function wf(e, t, r) {
  if (Ze.current !== zr) throw Error(O(168));
  ke(Ze, t), ke(dt, r);
}
function sm(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
    return r;
  n = n.getChildContext();
  for (var o in n) if (!(o in t)) throw Error(O(108, Yg(e) || "Unknown", o));
  return Re({}, r, n);
}
function zl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || zr),
    (pn = Ze.current),
    ke(Ze, e),
    ke(dt, dt.current),
    !0
  );
}
function kf(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(O(169));
  r
    ? ((e = sm(e, t, pn)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      Ce(dt),
      Ce(Ze),
      ke(Ze, e))
    : Ce(dt),
    ke(dt, r);
}
var tr = null,
  ys = !1,
  ya = !1;
function am(e) {
  tr === null ? (tr = [e]) : tr.push(e);
}
function d2(e) {
  (ys = !0), am(e);
}
function Yr() {
  if (!ya && tr !== null) {
    ya = !0;
    var e = 0,
      t = he;
    try {
      var r = tr;
      for (he = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      (tr = null), (ys = !1);
    } catch (o) {
      throw (tr !== null && (tr = tr.slice(e + 1)), Mp(cc, Yr), o);
    } finally {
      (he = t), (ya = !1);
    }
  }
  return null;
}
var An = [],
  Bn = 0,
  Hl = null,
  Ul = 0,
  $t = [],
  Pt = 0,
  mn = null,
  rr = 1,
  nr = "";
function Zr(e, t) {
  (An[Bn++] = Ul), (An[Bn++] = Hl), (Hl = e), (Ul = t);
}
function um(e, t, r) {
  ($t[Pt++] = rr), ($t[Pt++] = nr), ($t[Pt++] = mn), (mn = e);
  var n = rr;
  e = nr;
  var o = 32 - At(n) - 1;
  (n &= ~(1 << o)), (r += 1);
  var i = 32 - At(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (n & ((1 << l) - 1)).toString(32)),
      (n >>= l),
      (o -= l),
      (rr = (1 << (32 - At(t) + o)) | (r << o) | n),
      (nr = i + e);
  } else (rr = (1 << i) | (r << o) | n), (nr = e);
}
function xc(e) {
  e.return !== null && (Zr(e, 1), um(e, 1, 0));
}
function wc(e) {
  for (; e === Hl; )
    (Hl = An[--Bn]), (An[Bn] = null), (Ul = An[--Bn]), (An[Bn] = null);
  for (; e === mn; )
    (mn = $t[--Pt]),
      ($t[Pt] = null),
      (nr = $t[--Pt]),
      ($t[Pt] = null),
      (rr = $t[--Pt]),
      ($t[Pt] = null);
}
var kt = null,
  xt = null,
  je = !1,
  _t = null;
function cm(e, t) {
  var r = Rt(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function Sf(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (kt = e), (xt = Dr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (kt = e), (xt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = mn !== null ? { id: rr, overflow: nr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = Rt(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (kt = e),
            (xt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function vu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function yu(e) {
  if (je) {
    var t = xt;
    if (t) {
      var r = t;
      if (!Sf(e, t)) {
        if (vu(e)) throw Error(O(418));
        t = Dr(r.nextSibling);
        var n = kt;
        t && Sf(e, t)
          ? cm(n, r)
          : ((e.flags = (e.flags & -4097) | 2), (je = !1), (kt = e));
      }
    } else {
      if (vu(e)) throw Error(O(418));
      (e.flags = (e.flags & -4097) | 2), (je = !1), (kt = e);
    }
  }
}
function Ef(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  kt = e;
}
function rl(e) {
  if (e !== kt) return !1;
  if (!je) return Ef(e), (je = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !pu(e.type, e.memoizedProps))),
    t && (t = xt))
  ) {
    if (vu(e)) throw (dm(), Error(O(418)));
    for (; t; ) cm(e, t), (t = Dr(t.nextSibling));
  }
  if ((Ef(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              xt = Dr(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      xt = null;
    }
  } else xt = kt ? Dr(e.stateNode.nextSibling) : null;
  return !0;
}
function dm() {
  for (var e = xt; e; ) e = Dr(e.nextSibling);
}
function eo() {
  (xt = kt = null), (je = !1);
}
function kc(e) {
  _t === null ? (_t = [e]) : _t.push(e);
}
var f2 = cr.ReactCurrentBatchConfig;
function To(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(O(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(O(147, e));
      var o = n,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var a = o.refs;
            l === null ? delete a[i] : (a[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(O(284));
    if (!r._owner) throw Error(O(290, e));
  }
  return e;
}
function nl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      O(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Cf(e) {
  var t = e._init;
  return t(e._payload);
}
function fm(e) {
  function t(v, g) {
    if (e) {
      var x = v.deletions;
      x === null ? ((v.deletions = [g]), (v.flags |= 16)) : x.push(g);
    }
  }
  function r(v, g) {
    if (!e) return null;
    for (; g !== null; ) t(v, g), (g = g.sibling);
    return null;
  }
  function n(v, g) {
    for (v = new Map(); g !== null; )
      g.key !== null ? v.set(g.key, g) : v.set(g.index, g), (g = g.sibling);
    return v;
  }
  function o(v, g) {
    return (v = _r(v, g)), (v.index = 0), (v.sibling = null), v;
  }
  function i(v, g, x) {
    return (
      (v.index = x),
      e
        ? ((x = v.alternate),
          x !== null
            ? ((x = x.index), x < g ? ((v.flags |= 2), g) : x)
            : ((v.flags |= 2), g))
        : ((v.flags |= 1048576), g)
    );
  }
  function l(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function a(v, g, x, E) {
    return g === null || g.tag !== 6
      ? ((g = ba(x, v.mode, E)), (g.return = v), g)
      : ((g = o(g, x)), (g.return = v), g);
  }
  function s(v, g, x, E) {
    var $ = x.type;
    return $ === Mn
      ? c(v, g, x.props.children, E, x.key)
      : g !== null &&
        (g.elementType === $ ||
          (typeof $ == "object" &&
            $ !== null &&
            $.$$typeof === wr &&
            Cf($) === g.type))
      ? ((E = o(g, x.props)), (E.ref = To(v, g, x)), (E.return = v), E)
      : ((E = bl(x.type, x.key, x.props, null, v.mode, E)),
        (E.ref = To(v, g, x)),
        (E.return = v),
        E);
  }
  function u(v, g, x, E) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== x.containerInfo ||
      g.stateNode.implementation !== x.implementation
      ? ((g = ja(x, v.mode, E)), (g.return = v), g)
      : ((g = o(g, x.children || [])), (g.return = v), g);
  }
  function c(v, g, x, E, $) {
    return g === null || g.tag !== 7
      ? ((g = cn(x, v.mode, E, $)), (g.return = v), g)
      : ((g = o(g, x)), (g.return = v), g);
  }
  function d(v, g, x) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (g = ba("" + g, v.mode, x)), (g.return = v), g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Qi:
          return (
            (x = bl(g.type, g.key, g.props, null, v.mode, x)),
            (x.ref = To(v, null, g)),
            (x.return = v),
            x
          );
        case Ln:
          return (g = ja(g, v.mode, x)), (g.return = v), g;
        case wr:
          var E = g._init;
          return d(v, E(g._payload), x);
      }
      if (Ao(g) || jo(g))
        return (g = cn(g, v.mode, x, null)), (g.return = v), g;
      nl(v, g);
    }
    return null;
  }
  function m(v, g, x, E) {
    var $ = g !== null ? g.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return $ !== null ? null : a(v, g, "" + x, E);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Qi:
          return x.key === $ ? s(v, g, x, E) : null;
        case Ln:
          return x.key === $ ? u(v, g, x, E) : null;
        case wr:
          return ($ = x._init), m(v, g, $(x._payload), E);
      }
      if (Ao(x) || jo(x)) return $ !== null ? null : c(v, g, x, E, null);
      nl(v, x);
    }
    return null;
  }
  function h(v, g, x, E, $) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (v = v.get(x) || null), a(g, v, "" + E, $);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Qi:
          return (v = v.get(E.key === null ? x : E.key) || null), s(g, v, E, $);
        case Ln:
          return (v = v.get(E.key === null ? x : E.key) || null), u(g, v, E, $);
        case wr:
          var S = E._init;
          return h(v, g, x, S(E._payload), $);
      }
      if (Ao(E) || jo(E)) return (v = v.get(x) || null), c(g, v, E, $, null);
      nl(g, E);
    }
    return null;
  }
  function y(v, g, x, E) {
    for (
      var $ = null, S = null, P = g, j = (g = 0), R = null;
      P !== null && j < x.length;
      j++
    ) {
      P.index > j ? ((R = P), (P = null)) : (R = P.sibling);
      var L = m(v, P, x[j], E);
      if (L === null) {
        P === null && (P = R);
        break;
      }
      e && P && L.alternate === null && t(v, P),
        (g = i(L, g, j)),
        S === null ? ($ = L) : (S.sibling = L),
        (S = L),
        (P = R);
    }
    if (j === x.length) return r(v, P), je && Zr(v, j), $;
    if (P === null) {
      for (; j < x.length; j++)
        (P = d(v, x[j], E)),
          P !== null &&
            ((g = i(P, g, j)), S === null ? ($ = P) : (S.sibling = P), (S = P));
      return je && Zr(v, j), $;
    }
    for (P = n(v, P); j < x.length; j++)
      (R = h(P, v, j, x[j], E)),
        R !== null &&
          (e && R.alternate !== null && P.delete(R.key === null ? j : R.key),
          (g = i(R, g, j)),
          S === null ? ($ = R) : (S.sibling = R),
          (S = R));
    return (
      e &&
        P.forEach(function (_) {
          return t(v, _);
        }),
      je && Zr(v, j),
      $
    );
  }
  function w(v, g, x, E) {
    var $ = jo(x);
    if (typeof $ != "function") throw Error(O(150));
    if (((x = $.call(x)), x == null)) throw Error(O(151));
    for (
      var S = ($ = null), P = g, j = (g = 0), R = null, L = x.next();
      P !== null && !L.done;
      j++, L = x.next()
    ) {
      P.index > j ? ((R = P), (P = null)) : (R = P.sibling);
      var _ = m(v, P, L.value, E);
      if (_ === null) {
        P === null && (P = R);
        break;
      }
      e && P && _.alternate === null && t(v, P),
        (g = i(_, g, j)),
        S === null ? ($ = _) : (S.sibling = _),
        (S = _),
        (P = R);
    }
    if (L.done) return r(v, P), je && Zr(v, j), $;
    if (P === null) {
      for (; !L.done; j++, L = x.next())
        (L = d(v, L.value, E)),
          L !== null &&
            ((g = i(L, g, j)), S === null ? ($ = L) : (S.sibling = L), (S = L));
      return je && Zr(v, j), $;
    }
    for (P = n(v, P); !L.done; j++, L = x.next())
      (L = h(P, v, j, L.value, E)),
        L !== null &&
          (e && L.alternate !== null && P.delete(L.key === null ? j : L.key),
          (g = i(L, g, j)),
          S === null ? ($ = L) : (S.sibling = L),
          (S = L));
    return (
      e &&
        P.forEach(function (W) {
          return t(v, W);
        }),
      je && Zr(v, j),
      $
    );
  }
  function k(v, g, x, E) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === Mn &&
        x.key === null &&
        (x = x.props.children),
      typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case Qi:
          e: {
            for (var $ = x.key, S = g; S !== null; ) {
              if (S.key === $) {
                if ((($ = x.type), $ === Mn)) {
                  if (S.tag === 7) {
                    r(v, S.sibling),
                      (g = o(S, x.props.children)),
                      (g.return = v),
                      (v = g);
                    break e;
                  }
                } else if (
                  S.elementType === $ ||
                  (typeof $ == "object" &&
                    $ !== null &&
                    $.$$typeof === wr &&
                    Cf($) === S.type)
                ) {
                  r(v, S.sibling),
                    (g = o(S, x.props)),
                    (g.ref = To(v, S, x)),
                    (g.return = v),
                    (v = g);
                  break e;
                }
                r(v, S);
                break;
              } else t(v, S);
              S = S.sibling;
            }
            x.type === Mn
              ? ((g = cn(x.props.children, v.mode, E, x.key)),
                (g.return = v),
                (v = g))
              : ((E = bl(x.type, x.key, x.props, null, v.mode, E)),
                (E.ref = To(v, g, x)),
                (E.return = v),
                (v = E));
          }
          return l(v);
        case Ln:
          e: {
            for (S = x.key; g !== null; ) {
              if (g.key === S)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === x.containerInfo &&
                  g.stateNode.implementation === x.implementation
                ) {
                  r(v, g.sibling),
                    (g = o(g, x.children || [])),
                    (g.return = v),
                    (v = g);
                  break e;
                } else {
                  r(v, g);
                  break;
                }
              else t(v, g);
              g = g.sibling;
            }
            (g = ja(x, v.mode, E)), (g.return = v), (v = g);
          }
          return l(v);
        case wr:
          return (S = x._init), k(v, g, S(x._payload), E);
      }
      if (Ao(x)) return y(v, g, x, E);
      if (jo(x)) return w(v, g, x, E);
      nl(v, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        g !== null && g.tag === 6
          ? (r(v, g.sibling), (g = o(g, x)), (g.return = v), (v = g))
          : (r(v, g), (g = ba(x, v.mode, E)), (g.return = v), (v = g)),
        l(v))
      : r(v, g);
  }
  return k;
}
var to = fm(!0),
  pm = fm(!1),
  Vl = Kr(null),
  Wl = null,
  zn = null,
  Sc = null;
function Ec() {
  Sc = zn = Wl = null;
}
function Cc(e) {
  var t = Vl.current;
  Ce(Vl), (e._currentValue = t);
}
function xu(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}
function Gn(e, t) {
  (Wl = e),
    (Sc = zn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ut = !0), (e.firstContext = null));
}
function Lt(e) {
  var t = e._currentValue;
  if (Sc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), zn === null)) {
      if (Wl === null) throw Error(O(308));
      (zn = e), (Wl.dependencies = { lanes: 0, firstContext: e });
    } else zn = zn.next = e;
  return t;
}
var rn = null;
function bc(e) {
  rn === null ? (rn = [e]) : rn.push(e);
}
function mm(e, t, r, n) {
  var o = t.interleaved;
  return (
    o === null ? ((r.next = r), bc(t)) : ((r.next = o.next), (o.next = r)),
    (t.interleaved = r),
    ar(e, n)
  );
}
function ar(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
var kr = !1;
function jc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function hm(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function or(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Fr(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), ae & 2)) {
    var o = n.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (n.pending = t),
      ar(e, r)
    );
  }
  return (
    (o = n.interleaved),
    o === null ? ((t.next = t), bc(n)) : ((t.next = o.next), (o.next = t)),
    (n.interleaved = t),
    ar(e, r)
  );
}
function xl(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), dc(e, r);
  }
}
function bf(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var o = null,
      i = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var l = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (r = r.next);
      } while (r !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (r = {
      baseState: n.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t);
}
function Ql(e, t, r, n) {
  var o = e.updateQueue;
  kr = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var s = a,
      u = s.next;
    (s.next = null), l === null ? (i = u) : (l.next = u), (l = s);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== l &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var d = o.baseState;
    (l = 0), (c = u = s = null), (a = i);
    do {
      var m = a.lane,
        h = a.eventTime;
      if ((n & m) === m) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            w = a;
          switch (((m = t), (h = r), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == "function")) {
                d = y.call(h, d, m);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (m = typeof y == "function" ? y.call(h, d, m) : y),
                m == null)
              )
                break e;
              d = Re({}, d, m);
              break e;
            case 2:
              kr = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (m = o.effects),
          m === null ? (o.effects = [a]) : m.push(a));
      } else
        (h = {
          eventTime: h,
          lane: m,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (s = d)) : (c = c.next = h),
          (l |= m);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (m = a),
          (a = m.next),
          (m.next = null),
          (o.lastBaseUpdate = m),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (s = d),
      (o.baseState = s),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (gn |= l), (e.lanes = l), (e.memoizedState = d);
  }
}
function jf(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        o = n.callback;
      if (o !== null) {
        if (((n.callback = null), (n = r), typeof o != "function"))
          throw Error(O(191, o));
        o.call(n);
      }
    }
}
var Ti = {},
  Yt = Kr(Ti),
  pi = Kr(Ti),
  mi = Kr(Ti);
function nn(e) {
  if (e === Ti) throw Error(O(174));
  return e;
}
function $c(e, t) {
  switch ((ke(mi, t), ke(pi, e), ke(Yt, Ti), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : qa(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = qa(t, e));
  }
  Ce(Yt), ke(Yt, t);
}
function ro() {
  Ce(Yt), Ce(pi), Ce(mi);
}
function gm(e) {
  nn(mi.current);
  var t = nn(Yt.current),
    r = qa(t, e.type);
  t !== r && (ke(pi, e), ke(Yt, r));
}
function Pc(e) {
  pi.current === e && (Ce(Yt), Ce(pi));
}
var Pe = Kr(0);
function Kl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var xa = [];
function Nc() {
  for (var e = 0; e < xa.length; e++)
    xa[e]._workInProgressVersionPrimary = null;
  xa.length = 0;
}
var wl = cr.ReactCurrentDispatcher,
  wa = cr.ReactCurrentBatchConfig,
  hn = 0,
  Ne = null,
  _e = null,
  ze = null,
  Yl = !1,
  Go = !1,
  hi = 0,
  p2 = 0;
function Ke() {
  throw Error(O(321));
}
function Rc(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!zt(e[r], t[r])) return !1;
  return !0;
}
function Tc(e, t, r, n, o, i) {
  if (
    ((hn = i),
    (Ne = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (wl.current = e === null || e.memoizedState === null ? v2 : y2),
    (e = r(n, o)),
    Go)
  ) {
    i = 0;
    do {
      if (((Go = !1), (hi = 0), 25 <= i)) throw Error(O(301));
      (i += 1),
        (ze = _e = null),
        (t.updateQueue = null),
        (wl.current = x2),
        (e = r(n, o));
    } while (Go);
  }
  if (
    ((wl.current = Gl),
    (t = _e !== null && _e.next !== null),
    (hn = 0),
    (ze = _e = Ne = null),
    (Yl = !1),
    t)
  )
    throw Error(O(300));
  return e;
}
function Lc() {
  var e = hi !== 0;
  return (hi = 0), e;
}
function Wt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ze === null ? (Ne.memoizedState = ze = e) : (ze = ze.next = e), ze;
}
function Mt() {
  if (_e === null) {
    var e = Ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = _e.next;
  var t = ze === null ? Ne.memoizedState : ze.next;
  if (t !== null) (ze = t), (_e = e);
  else {
    if (e === null) throw Error(O(310));
    (_e = e),
      (e = {
        memoizedState: _e.memoizedState,
        baseState: _e.baseState,
        baseQueue: _e.baseQueue,
        queue: _e.queue,
        next: null,
      }),
      ze === null ? (Ne.memoizedState = ze = e) : (ze = ze.next = e);
  }
  return ze;
}
function gi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ka(e) {
  var t = Mt(),
    r = t.queue;
  if (r === null) throw Error(O(311));
  r.lastRenderedReducer = e;
  var n = _e,
    o = n.baseQueue,
    i = r.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (n.baseQueue = o = i), (r.pending = null);
  }
  if (o !== null) {
    (i = o.next), (n = n.baseState);
    var a = (l = null),
      s = null,
      u = i;
    do {
      var c = u.lane;
      if ((hn & c) === c)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (n = u.hasEagerState ? u.eagerState : e(n, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((a = s = d), (l = n)) : (s = s.next = d),
          (Ne.lanes |= c),
          (gn |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    s === null ? (l = n) : (s.next = a),
      zt(n, t.memoizedState) || (ut = !0),
      (t.memoizedState = n),
      (t.baseState = l),
      (t.baseQueue = s),
      (r.lastRenderedState = n);
  }
  if (((e = r.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Ne.lanes |= i), (gn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function Sa(e) {
  var t = Mt(),
    r = t.queue;
  if (r === null) throw Error(O(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    o = r.pending,
    i = t.memoizedState;
  if (o !== null) {
    r.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    zt(i, t.memoizedState) || (ut = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (r.lastRenderedState = i);
  }
  return [i, n];
}
function vm() {}
function ym(e, t) {
  var r = Ne,
    n = Mt(),
    o = t(),
    i = !zt(n.memoizedState, o);
  if (
    (i && ((n.memoizedState = o), (ut = !0)),
    (n = n.queue),
    Mc(km.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || i || (ze !== null && ze.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      vi(9, wm.bind(null, r, n, o, t), void 0, null),
      He === null)
    )
      throw Error(O(349));
    hn & 30 || xm(r, t, o);
  }
  return o;
}
function xm(e, t, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = Ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ne.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function wm(e, t, r, n) {
  (t.value = r), (t.getSnapshot = n), Sm(t) && Em(e);
}
function km(e, t, r) {
  return r(function () {
    Sm(t) && Em(e);
  });
}
function Sm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !zt(e, r);
  } catch {
    return !0;
  }
}
function Em(e) {
  var t = ar(e, 1);
  t !== null && Bt(t, e, 1, -1);
}
function $f(e) {
  var t = Wt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: gi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = g2.bind(null, Ne, e)),
    [t.memoizedState, e]
  );
}
function vi(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = Ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ne.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function Cm() {
  return Mt().memoizedState;
}
function kl(e, t, r, n) {
  var o = Wt();
  (Ne.flags |= e),
    (o.memoizedState = vi(1 | t, r, void 0, n === void 0 ? null : n));
}
function xs(e, t, r, n) {
  var o = Mt();
  n = n === void 0 ? null : n;
  var i = void 0;
  if (_e !== null) {
    var l = _e.memoizedState;
    if (((i = l.destroy), n !== null && Rc(n, l.deps))) {
      o.memoizedState = vi(t, r, i, n);
      return;
    }
  }
  (Ne.flags |= e), (o.memoizedState = vi(1 | t, r, i, n));
}
function Pf(e, t) {
  return kl(8390656, 8, e, t);
}
function Mc(e, t) {
  return xs(2048, 8, e, t);
}
function bm(e, t) {
  return xs(4, 2, e, t);
}
function jm(e, t) {
  return xs(4, 4, e, t);
}
function $m(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Pm(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), xs(4, 4, $m.bind(null, t, e), r)
  );
}
function Dc() {}
function Nm(e, t) {
  var r = Mt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Rc(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}
function Rm(e, t) {
  var r = Mt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Rc(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function Tm(e, t, r) {
  return hn & 21
    ? (zt(r, t) || ((r = Op()), (Ne.lanes |= r), (gn |= r), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ut = !0)), (e.memoizedState = r));
}
function m2(e, t) {
  var r = he;
  (he = r !== 0 && 4 > r ? r : 4), e(!0);
  var n = wa.transition;
  wa.transition = {};
  try {
    e(!1), t();
  } finally {
    (he = r), (wa.transition = n);
  }
}
function Lm() {
  return Mt().memoizedState;
}
function h2(e, t, r) {
  var n = Ir(e);
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Mm(e))
  )
    Dm(t, r);
  else if (((r = mm(e, t, r, n)), r !== null)) {
    var o = nt();
    Bt(r, e, n, o), Fm(r, t, n);
  }
}
function g2(e, t, r) {
  var n = Ir(e),
    o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (Mm(e)) Dm(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          a = i(l, r);
        if (((o.hasEagerState = !0), (o.eagerState = a), zt(a, l))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), bc(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (r = mm(e, t, o, n)),
      r !== null && ((o = nt()), Bt(r, e, n, o), Fm(r, t, n));
  }
}
function Mm(e) {
  var t = e.alternate;
  return e === Ne || (t !== null && t === Ne);
}
function Dm(e, t) {
  Go = Yl = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t);
}
function Fm(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), dc(e, r);
  }
}
var Gl = {
    readContext: Lt,
    useCallback: Ke,
    useContext: Ke,
    useEffect: Ke,
    useImperativeHandle: Ke,
    useInsertionEffect: Ke,
    useLayoutEffect: Ke,
    useMemo: Ke,
    useReducer: Ke,
    useRef: Ke,
    useState: Ke,
    useDebugValue: Ke,
    useDeferredValue: Ke,
    useTransition: Ke,
    useMutableSource: Ke,
    useSyncExternalStore: Ke,
    useId: Ke,
    unstable_isNewReconciler: !1,
  },
  v2 = {
    readContext: Lt,
    useCallback: function (e, t) {
      return (Wt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Lt,
    useEffect: Pf,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        kl(4194308, 4, $m.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return kl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return kl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = Wt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var n = Wt();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = h2.bind(null, Ne, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Wt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: $f,
    useDebugValue: Dc,
    useDeferredValue: function (e) {
      return (Wt().memoizedState = e);
    },
    useTransition: function () {
      var e = $f(!1),
        t = e[0];
      return (e = m2.bind(null, e[1])), (Wt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = Ne,
        o = Wt();
      if (je) {
        if (r === void 0) throw Error(O(407));
        r = r();
      } else {
        if (((r = t()), He === null)) throw Error(O(349));
        hn & 30 || xm(n, t, r);
      }
      o.memoizedState = r;
      var i = { value: r, getSnapshot: t };
      return (
        (o.queue = i),
        Pf(km.bind(null, n, i, e), [e]),
        (n.flags |= 2048),
        vi(9, wm.bind(null, n, i, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = Wt(),
        t = He.identifierPrefix;
      if (je) {
        var r = nr,
          n = rr;
        (r = (n & ~(1 << (32 - At(n) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = hi++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":");
      } else (r = p2++), (t = ":" + t + "r" + r.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  y2 = {
    readContext: Lt,
    useCallback: Nm,
    useContext: Lt,
    useEffect: Mc,
    useImperativeHandle: Pm,
    useInsertionEffect: bm,
    useLayoutEffect: jm,
    useMemo: Rm,
    useReducer: ka,
    useRef: Cm,
    useState: function () {
      return ka(gi);
    },
    useDebugValue: Dc,
    useDeferredValue: function (e) {
      var t = Mt();
      return Tm(t, _e.memoizedState, e);
    },
    useTransition: function () {
      var e = ka(gi)[0],
        t = Mt().memoizedState;
      return [e, t];
    },
    useMutableSource: vm,
    useSyncExternalStore: ym,
    useId: Lm,
    unstable_isNewReconciler: !1,
  },
  x2 = {
    readContext: Lt,
    useCallback: Nm,
    useContext: Lt,
    useEffect: Mc,
    useImperativeHandle: Pm,
    useInsertionEffect: bm,
    useLayoutEffect: jm,
    useMemo: Rm,
    useReducer: Sa,
    useRef: Cm,
    useState: function () {
      return Sa(gi);
    },
    useDebugValue: Dc,
    useDeferredValue: function (e) {
      var t = Mt();
      return _e === null ? (t.memoizedState = e) : Tm(t, _e.memoizedState, e);
    },
    useTransition: function () {
      var e = Sa(gi)[0],
        t = Mt().memoizedState;
      return [e, t];
    },
    useMutableSource: vm,
    useSyncExternalStore: ym,
    useId: Lm,
    unstable_isNewReconciler: !1,
  };
function Ft(e, t) {
  if (e && e.defaultProps) {
    (t = Re({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function wu(e, t, r, n) {
  (t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : Re({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var ws = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? En(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = nt(),
      o = Ir(e),
      i = or(n, o);
    (i.payload = t),
      r != null && (i.callback = r),
      (t = Fr(e, i, o)),
      t !== null && (Bt(t, e, o, n), xl(t, e, o));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = nt(),
      o = Ir(e),
      i = or(n, o);
    (i.tag = 1),
      (i.payload = t),
      r != null && (i.callback = r),
      (t = Fr(e, i, o)),
      t !== null && (Bt(t, e, o, n), xl(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = nt(),
      n = Ir(e),
      o = or(r, n);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Fr(e, o, n)),
      t !== null && (Bt(t, e, n, r), xl(t, e, n));
  },
};
function Nf(e, t, r, n, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ui(r, n) || !ui(o, i)
      : !0
  );
}
function Om(e, t, r) {
  var n = !1,
    o = zr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Lt(i))
      : ((o = ft(t) ? pn : Ze.current),
        (n = t.contextTypes),
        (i = (n = n != null) ? qn(e, o) : zr)),
    (t = new t(r, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ws),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Rf(e, t, r, n) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && ws.enqueueReplaceState(t, t.state, null);
}
function ku(e, t, r, n) {
  var o = e.stateNode;
  (o.props = r), (o.state = e.memoizedState), (o.refs = {}), jc(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Lt(i))
    : ((i = ft(t) ? pn : Ze.current), (o.context = qn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (wu(e, t, i, r), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && ws.enqueueReplaceState(o, o.state, null),
      Ql(e, r, o, n),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function no(e, t) {
  try {
    var r = "",
      n = t;
    do (r += Kg(n)), (n = n.return);
    while (n);
    var o = r;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Ea(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function Su(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var w2 = typeof WeakMap == "function" ? WeakMap : Map;
function Im(e, t, r) {
  (r = or(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      Zl || ((Zl = !0), (Lu = n)), Su(e, t);
    }),
    r
  );
}
function _m(e, t, r) {
  (r = or(-1, r)), (r.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var o = t.value;
    (r.payload = function () {
      return n(o);
    }),
      (r.callback = function () {
        Su(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (r.callback = function () {
        Su(e, t),
          typeof n != "function" &&
            (Or === null ? (Or = new Set([this])) : Or.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    r
  );
}
function Tf(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new w2();
    var o = new Set();
    n.set(t, o);
  } else (o = n.get(t)), o === void 0 && ((o = new Set()), n.set(t, o));
  o.has(r) || (o.add(r), (e = D2.bind(null, e, t, r)), t.then(e, e));
}
function Lf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Mf(e, t, r, n, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = or(-1, 1)), (t.tag = 2), Fr(r, t, 1))),
          (r.lanes |= 1)),
      e);
}
var k2 = cr.ReactCurrentOwner,
  ut = !1;
function et(e, t, r, n) {
  t.child = e === null ? pm(t, null, r, n) : to(t, e.child, r, n);
}
function Df(e, t, r, n, o) {
  r = r.render;
  var i = t.ref;
  return (
    Gn(t, o),
    (n = Tc(e, t, r, n, i, o)),
    (r = Lc()),
    e !== null && !ut
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        ur(e, t, o))
      : (je && r && xc(t), (t.flags |= 1), et(e, t, n, o), t.child)
  );
}
function Ff(e, t, r, n, o) {
  if (e === null) {
    var i = r.type;
    return typeof i == "function" &&
      !Hc(i) &&
      i.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Am(e, t, i, n, o))
      : ((e = bl(r.type, null, n, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : ui), r(l, n) && e.ref === t.ref)
    )
      return ur(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = _r(i, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Am(e, t, r, n, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ui(i, n) && e.ref === t.ref)
      if (((ut = !1), (t.pendingProps = n = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (ut = !0);
      else return (t.lanes = e.lanes), ur(e, t, o);
  }
  return Eu(e, t, r, n, o);
}
function Bm(e, t, r) {
  var n = t.pendingProps,
    o = n.children,
    i = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ke(Un, gt),
        (gt |= r);
    else {
      if (!(r & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ke(Un, gt),
          (gt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = i !== null ? i.baseLanes : r),
        ke(Un, gt),
        (gt |= n);
    }
  else
    i !== null ? ((n = i.baseLanes | r), (t.memoizedState = null)) : (n = r),
      ke(Un, gt),
      (gt |= n);
  return et(e, t, o, r), t.child;
}
function zm(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Eu(e, t, r, n, o) {
  var i = ft(r) ? pn : Ze.current;
  return (
    (i = qn(t, i)),
    Gn(t, o),
    (r = Tc(e, t, r, n, i, o)),
    (n = Lc()),
    e !== null && !ut
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        ur(e, t, o))
      : (je && n && xc(t), (t.flags |= 1), et(e, t, r, o), t.child)
  );
}
function Of(e, t, r, n, o) {
  if (ft(r)) {
    var i = !0;
    zl(t);
  } else i = !1;
  if ((Gn(t, o), t.stateNode === null))
    Sl(e, t), Om(t, r, n), ku(t, r, n, o), (n = !0);
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var s = l.context,
      u = r.contextType;
    typeof u == "object" && u !== null
      ? (u = Lt(u))
      : ((u = ft(r) ? pn : Ze.current), (u = qn(t, u)));
    var c = r.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== n || s !== u) && Rf(t, l, n, u)),
      (kr = !1);
    var m = t.memoizedState;
    (l.state = m),
      Ql(t, n, l, o),
      (s = t.memoizedState),
      a !== n || m !== s || dt.current || kr
        ? (typeof c == "function" && (wu(t, r, c, n), (s = t.memoizedState)),
          (a = kr || Nf(t, r, a, n, m, s, u))
            ? (d ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = s)),
          (l.props = n),
          (l.state = s),
          (l.context = u),
          (n = a))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (n = !1));
  } else {
    (l = t.stateNode),
      hm(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Ft(t.type, a)),
      (l.props = u),
      (d = t.pendingProps),
      (m = l.context),
      (s = r.contextType),
      typeof s == "object" && s !== null
        ? (s = Lt(s))
        : ((s = ft(r) ? pn : Ze.current), (s = qn(t, s)));
    var h = r.getDerivedStateFromProps;
    (c =
      typeof h == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== d || m !== s) && Rf(t, l, n, s)),
      (kr = !1),
      (m = t.memoizedState),
      (l.state = m),
      Ql(t, n, l, o);
    var y = t.memoizedState;
    a !== d || m !== y || dt.current || kr
      ? (typeof h == "function" && (wu(t, r, h, n), (y = t.memoizedState)),
        (u = kr || Nf(t, r, u, n, m, y, s) || !1)
          ? (c ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(n, y, s),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(n, y, s)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = y)),
        (l.props = n),
        (l.state = y),
        (l.context = s),
        (n = u))
      : (typeof l.componentDidUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return Cu(e, t, r, n, i, o);
}
function Cu(e, t, r, n, o, i) {
  zm(e, t);
  var l = (t.flags & 128) !== 0;
  if (!n && !l) return o && kf(t, r, !1), ur(e, t, i);
  (n = t.stateNode), (k2.current = t);
  var a =
    l && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = to(t, e.child, null, i)), (t.child = to(t, null, a, i)))
      : et(e, t, a, i),
    (t.memoizedState = n.state),
    o && kf(t, r, !0),
    t.child
  );
}
function Hm(e) {
  var t = e.stateNode;
  t.pendingContext
    ? wf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && wf(e, t.context, !1),
    $c(e, t.containerInfo);
}
function If(e, t, r, n, o) {
  return eo(), kc(o), (t.flags |= 256), et(e, t, r, n), t.child;
}
var bu = { dehydrated: null, treeContext: null, retryLane: 0 };
function ju(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Um(e, t, r) {
  var n = t.pendingProps,
    o = Pe.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    a;
  if (
    ((a = l) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ke(Pe, o & 1),
    e === null)
  )
    return (
      yu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = n.children),
          (e = n.fallback),
          i
            ? ((n = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(n & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = Es(l, n, 0, null)),
              (e = cn(e, n, r, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ju(r)),
              (t.memoizedState = bu),
              e)
            : Fc(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return S2(e, t, l, n, a, o, r);
  if (i) {
    (i = n.fallback), (l = t.mode), (o = e.child), (a = o.sibling);
    var s = { mode: "hidden", children: n.children };
    return (
      !(l & 1) && t.child !== o
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = s),
          (t.deletions = null))
        : ((n = _r(o, s)), (n.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = _r(a, i)) : ((i = cn(i, l, r, null)), (i.flags |= 2)),
      (i.return = t),
      (n.return = t),
      (n.sibling = i),
      (t.child = n),
      (n = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? ju(r)
          : {
              baseLanes: l.baseLanes | r,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~r),
      (t.memoizedState = bu),
      n
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (n = _r(i, { mode: "visible", children: n.children })),
    !(t.mode & 1) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  );
}
function Fc(e, t) {
  return (
    (t = Es({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ol(e, t, r, n) {
  return (
    n !== null && kc(n),
    to(t, e.child, null, r),
    (e = Fc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function S2(e, t, r, n, o, i, l) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = Ea(Error(O(422)))), ol(e, t, l, n))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = n.fallback),
        (o = t.mode),
        (n = Es({ mode: "visible", children: n.children }, o, 0, null)),
        (i = cn(i, o, l, null)),
        (i.flags |= 2),
        (n.return = t),
        (i.return = t),
        (n.sibling = i),
        (t.child = n),
        t.mode & 1 && to(t, e.child, null, l),
        (t.child.memoizedState = ju(l)),
        (t.memoizedState = bu),
        i);
  if (!(t.mode & 1)) return ol(e, t, l, null);
  if (o.data === "$!") {
    if (((n = o.nextSibling && o.nextSibling.dataset), n)) var a = n.dgst;
    return (n = a), (i = Error(O(419))), (n = Ea(i, n, void 0)), ol(e, t, l, n);
  }
  if (((a = (l & e.childLanes) !== 0), ut || a)) {
    if (((n = He), n !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (n.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), ar(e, o), Bt(n, e, o, -1));
    }
    return zc(), (n = Ea(Error(O(421)))), ol(e, t, l, n);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = F2.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (xt = Dr(o.nextSibling)),
      (kt = t),
      (je = !0),
      (_t = null),
      e !== null &&
        (($t[Pt++] = rr),
        ($t[Pt++] = nr),
        ($t[Pt++] = mn),
        (rr = e.id),
        (nr = e.overflow),
        (mn = t)),
      (t = Fc(t, n.children)),
      (t.flags |= 4096),
      t);
}
function _f(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), xu(e.return, t, r);
}
function Ca(e, t, r, n, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = n),
      (i.tail = r),
      (i.tailMode = o));
}
function Vm(e, t, r) {
  var n = t.pendingProps,
    o = n.revealOrder,
    i = n.tail;
  if ((et(e, t, n.children, r), (n = Pe.current), n & 2))
    (n = (n & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && _f(e, r, t);
        else if (e.tag === 19) _f(e, r, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((ke(Pe, n), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (r = t.child, o = null; r !== null; )
          (e = r.alternate),
            e !== null && Kl(e) === null && (o = r),
            (r = r.sibling);
        (r = o),
          r === null
            ? ((o = t.child), (t.child = null))
            : ((o = r.sibling), (r.sibling = null)),
          Ca(t, !1, o, r, i);
        break;
      case "backwards":
        for (r = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Kl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = r), (r = o), (o = e);
        }
        Ca(t, !0, r, null, i);
        break;
      case "together":
        Ca(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Sl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ur(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (gn |= t.lanes),
    !(r & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (
      e = t.child, r = _r(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = _r(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function E2(e, t, r) {
  switch (t.tag) {
    case 3:
      Hm(t), eo();
      break;
    case 5:
      gm(t);
      break;
    case 1:
      ft(t.type) && zl(t);
      break;
    case 4:
      $c(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        o = t.memoizedProps.value;
      ke(Vl, n._currentValue), (n._currentValue = o);
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (ke(Pe, Pe.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
          ? Um(e, t, r)
          : (ke(Pe, Pe.current & 1),
            (e = ur(e, t, r)),
            e !== null ? e.sibling : null);
      ke(Pe, Pe.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return Vm(e, t, r);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ke(Pe, Pe.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Bm(e, t, r);
  }
  return ur(e, t, r);
}
var Wm, $u, Qm, Km;
Wm = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
$u = function () {};
Qm = function (e, t, r, n) {
  var o = e.memoizedProps;
  if (o !== n) {
    (e = t.stateNode), nn(Yt.current);
    var i = null;
    switch (r) {
      case "input":
        (o = Ga(e, o)), (n = Ga(e, n)), (i = []);
        break;
      case "select":
        (o = Re({}, o, { value: void 0 })),
          (n = Re({}, n, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Ja(e, o)), (n = Ja(e, n)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof n.onClick == "function" &&
          (e.onclick = Al);
    }
    eu(r, n);
    var l;
    r = null;
    for (u in o)
      if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (l in a) a.hasOwnProperty(l) && (r || (r = {}), (r[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ri.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in n) {
      var s = n[u];
      if (
        ((a = o != null ? o[u] : void 0),
        n.hasOwnProperty(u) && s !== a && (s != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) ||
                (s && s.hasOwnProperty(l)) ||
                (r || (r = {}), (r[l] = ""));
            for (l in s)
              s.hasOwnProperty(l) &&
                a[l] !== s[l] &&
                (r || (r = {}), (r[l] = s[l]));
          } else r || (i || (i = []), i.push(u, r)), (r = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (i = i || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (ri.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && Ee("scroll", e),
                  i || a === s || (i = []))
                : (i = i || []).push(u, s));
    }
    r && (i = i || []).push("style", r);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Km = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function Lo(e, t) {
  if (!je)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), (r = r.sibling);
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function Ye(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags & 14680064),
        (n |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags),
        (n |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= n), (e.childLanes = r), t;
}
function C2(e, t, r) {
  var n = t.pendingProps;
  switch ((wc(t), t.tag)) {
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
      return Ye(t), null;
    case 1:
      return ft(t.type) && Bl(), Ye(t), null;
    case 3:
      return (
        (n = t.stateNode),
        ro(),
        Ce(dt),
        Ce(Ze),
        Nc(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (rl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), _t !== null && (Fu(_t), (_t = null)))),
        $u(e, t),
        Ye(t),
        null
      );
    case 5:
      Pc(t);
      var o = nn(mi.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        Qm(e, t, r, n, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(O(166));
          return Ye(t), null;
        }
        if (((e = nn(Yt.current)), rl(t))) {
          (n = t.stateNode), (r = t.type);
          var i = t.memoizedProps;
          switch (((n[Qt] = t), (n[fi] = i), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              Ee("cancel", n), Ee("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ee("load", n);
              break;
            case "video":
            case "audio":
              for (o = 0; o < zo.length; o++) Ee(zo[o], n);
              break;
            case "source":
              Ee("error", n);
              break;
            case "img":
            case "image":
            case "link":
              Ee("error", n), Ee("load", n);
              break;
            case "details":
              Ee("toggle", n);
              break;
            case "input":
              Qd(n, i), Ee("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!i.multiple }),
                Ee("invalid", n);
              break;
            case "textarea":
              Yd(n, i), Ee("invalid", n);
          }
          eu(r, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var a = i[l];
              l === "children"
                ? typeof a == "string"
                  ? n.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      tl(n.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    n.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      tl(n.textContent, a, e),
                    (o = ["children", "" + a]))
                : ri.hasOwnProperty(l) &&
                  a != null &&
                  l === "onScroll" &&
                  Ee("scroll", n);
            }
          switch (r) {
            case "input":
              Ki(n), Kd(n, i, !0);
              break;
            case "textarea":
              Ki(n), Gd(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (n.onclick = Al);
          }
          (n = o), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = kp(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == "string"
                ? (e = l.createElement(r, { is: n.is }))
                : ((e = l.createElement(r)),
                  r === "select" &&
                    ((l = e),
                    n.multiple
                      ? (l.multiple = !0)
                      : n.size && (l.size = n.size)))
              : (e = l.createElementNS(e, r)),
            (e[Qt] = t),
            (e[fi] = n),
            Wm(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = tu(r, n)), r)) {
              case "dialog":
                Ee("cancel", e), Ee("close", e), (o = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ee("load", e), (o = n);
                break;
              case "video":
              case "audio":
                for (o = 0; o < zo.length; o++) Ee(zo[o], e);
                o = n;
                break;
              case "source":
                Ee("error", e), (o = n);
                break;
              case "img":
              case "image":
              case "link":
                Ee("error", e), Ee("load", e), (o = n);
                break;
              case "details":
                Ee("toggle", e), (o = n);
                break;
              case "input":
                Qd(e, n), (o = Ga(e, n)), Ee("invalid", e);
                break;
              case "option":
                o = n;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!n.multiple }),
                  (o = Re({}, n, { value: void 0 })),
                  Ee("invalid", e);
                break;
              case "textarea":
                Yd(e, n), (o = Ja(e, n)), Ee("invalid", e);
                break;
              default:
                o = n;
            }
            eu(r, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var s = a[i];
                i === "style"
                  ? Cp(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Sp(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (r !== "textarea" || s !== "") && ni(e, s)
                    : typeof s == "number" && ni(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (ri.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && Ee("scroll", e)
                      : s != null && ic(e, i, s, l));
              }
            switch (r) {
              case "input":
                Ki(e), Kd(e, n, !1);
                break;
              case "textarea":
                Ki(e), Gd(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + Br(n.value));
                break;
              case "select":
                (e.multiple = !!n.multiple),
                  (i = n.value),
                  i != null
                    ? Wn(e, !!n.multiple, i, !1)
                    : n.defaultValue != null &&
                      Wn(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Al);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ye(t), null;
    case 6:
      if (e && t.stateNode != null) Km(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(O(166));
        if (((r = nn(mi.current)), nn(Yt.current), rl(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[Qt] = t),
            (i = n.nodeValue !== r) && ((e = kt), e !== null))
          )
            switch (e.tag) {
              case 3:
                tl(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  tl(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[Qt] = t),
            (t.stateNode = n);
      }
      return Ye(t), null;
    case 13:
      if (
        (Ce(Pe),
        (n = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (je && xt !== null && t.mode & 1 && !(t.flags & 128))
          dm(), eo(), (t.flags |= 98560), (i = !1);
        else if (((i = rl(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(O(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(O(317));
            i[Qt] = t;
          } else
            eo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ye(t), (i = !1);
        } else _t !== null && (Fu(_t), (_t = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Pe.current & 1 ? Ae === 0 && (Ae = 3) : zc())),
          t.updateQueue !== null && (t.flags |= 4),
          Ye(t),
          null);
    case 4:
      return (
        ro(), $u(e, t), e === null && ci(t.stateNode.containerInfo), Ye(t), null
      );
    case 10:
      return Cc(t.type._context), Ye(t), null;
    case 17:
      return ft(t.type) && Bl(), Ye(t), null;
    case 19:
      if ((Ce(Pe), (i = t.memoizedState), i === null)) return Ye(t), null;
      if (((n = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (n) Lo(i, !1);
        else {
          if (Ae !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Kl(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Lo(i, !1),
                    n = l.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  (i = r),
                    (e = n),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return ke(Pe, (Pe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Me() > oo &&
            ((t.flags |= 128), (n = !0), Lo(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = Kl(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              Lo(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !je)
            )
              return Ye(t), null;
          } else
            2 * Me() - i.renderingStartTime > oo &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), Lo(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((r = i.last),
            r !== null ? (r.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Me()),
          (t.sibling = null),
          (r = Pe.current),
          ke(Pe, n ? (r & 1) | 2 : r & 1),
          t)
        : (Ye(t), null);
    case 22:
    case 23:
      return (
        Bc(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? gt & 1073741824 && (Ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ye(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function b2(e, t) {
  switch ((wc(t), t.tag)) {
    case 1:
      return (
        ft(t.type) && Bl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ro(),
        Ce(dt),
        Ce(Ze),
        Nc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Pc(t), null;
    case 13:
      if (
        (Ce(Pe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(O(340));
        eo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Ce(Pe), null;
    case 4:
      return ro(), null;
    case 10:
      return Cc(t.type._context), null;
    case 22:
    case 23:
      return Bc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var il = !1,
  Ge = !1,
  j2 = typeof WeakSet == "function" ? WeakSet : Set,
  V = null;
function Hn(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        Le(e, t, n);
      }
    else r.current = null;
}
function Pu(e, t, r) {
  try {
    r();
  } catch (n) {
    Le(e, t, n);
  }
}
var Af = !1;
function $2(e, t) {
  if (((du = Ol), (e = Jp()), yc(e))) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var o = n.anchorOffset,
            i = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, i.nodeType;
          } catch {
            r = null;
            break e;
          }
          var l = 0,
            a = -1,
            s = -1,
            u = 0,
            c = 0,
            d = e,
            m = null;
          t: for (;;) {
            for (
              var h;
              d !== r || (o !== 0 && d.nodeType !== 3) || (a = l + o),
                d !== i || (n !== 0 && d.nodeType !== 3) || (s = l + n),
                d.nodeType === 3 && (l += d.nodeValue.length),
                (h = d.firstChild) !== null;

            )
              (m = d), (d = h);
            for (;;) {
              if (d === e) break t;
              if (
                (m === r && ++u === o && (a = l),
                m === i && ++c === n && (s = l),
                (h = d.nextSibling) !== null)
              )
                break;
              (d = m), (m = d.parentNode);
            }
            d = h;
          }
          r = a === -1 || s === -1 ? null : { start: a, end: s };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (fu = { focusedElem: e, selectionRange: r }, Ol = !1, V = t; V !== null; )
    if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (V = e);
    else
      for (; V !== null; ) {
        t = V;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    k = y.memoizedState,
                    v = t.stateNode,
                    g = v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Ft(t.type, w),
                      k
                    );
                  v.__reactInternalSnapshotBeforeUpdate = g;
                }
                break;
              case 3:
                var x = t.stateNode.containerInfo;
                x.nodeType === 1
                  ? (x.textContent = "")
                  : x.nodeType === 9 &&
                    x.documentElement &&
                    x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (E) {
          Le(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (V = e);
          break;
        }
        V = t.return;
      }
  return (y = Af), (Af = !1), y;
}
function Xo(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var o = (n = n.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Pu(t, r, i);
      }
      o = o.next;
    } while (o !== n);
  }
}
function ks(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function Nu(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ym(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ym(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Qt], delete t[fi], delete t[hu], delete t[u2], delete t[c2])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Gm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Bf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Gm(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ru(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = Al));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Ru(e, t, r), e = e.sibling; e !== null; ) Ru(e, t, r), (e = e.sibling);
}
function Tu(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Tu(e, t, r), e = e.sibling; e !== null; ) Tu(e, t, r), (e = e.sibling);
}
var Ve = null,
  Ot = !1;
function yr(e, t, r) {
  for (r = r.child; r !== null; ) Xm(e, t, r), (r = r.sibling);
}
function Xm(e, t, r) {
  if (Kt && typeof Kt.onCommitFiberUnmount == "function")
    try {
      Kt.onCommitFiberUnmount(ps, r);
    } catch {}
  switch (r.tag) {
    case 5:
      Ge || Hn(r, t);
    case 6:
      var n = Ve,
        o = Ot;
      (Ve = null),
        yr(e, t, r),
        (Ve = n),
        (Ot = o),
        Ve !== null &&
          (Ot
            ? ((e = Ve),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : Ve.removeChild(r.stateNode));
      break;
    case 18:
      Ve !== null &&
        (Ot
          ? ((e = Ve),
            (r = r.stateNode),
            e.nodeType === 8
              ? va(e.parentNode, r)
              : e.nodeType === 1 && va(e, r),
            si(e))
          : va(Ve, r.stateNode));
      break;
    case 4:
      (n = Ve),
        (o = Ot),
        (Ve = r.stateNode.containerInfo),
        (Ot = !0),
        yr(e, t, r),
        (Ve = n),
        (Ot = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ge &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        o = n = n.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && Pu(r, t, l),
            (o = o.next);
        } while (o !== n);
      }
      yr(e, t, r);
      break;
    case 1:
      if (
        !Ge &&
        (Hn(r, t),
        (n = r.stateNode),
        typeof n.componentWillUnmount == "function")
      )
        try {
          (n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount();
        } catch (a) {
          Le(r, t, a);
        }
      yr(e, t, r);
      break;
    case 21:
      yr(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((Ge = (n = Ge) || r.memoizedState !== null), yr(e, t, r), (Ge = n))
        : yr(e, t, r);
      break;
    default:
      yr(e, t, r);
  }
}
function zf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new j2()),
      t.forEach(function (n) {
        var o = O2.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(o, o));
      });
  }
}
function Dt(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var o = r[n];
      try {
        var i = e,
          l = t,
          a = l;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ve = a.stateNode), (Ot = !1);
              break e;
            case 3:
              (Ve = a.stateNode.containerInfo), (Ot = !0);
              break e;
            case 4:
              (Ve = a.stateNode.containerInfo), (Ot = !0);
              break e;
          }
          a = a.return;
        }
        if (Ve === null) throw Error(O(160));
        Xm(i, l, o), (Ve = null), (Ot = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (u) {
        Le(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Zm(t, e), (t = t.sibling);
}
function Zm(e, t) {
  var r = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Dt(t, e), Vt(e), n & 4)) {
        try {
          Xo(3, e, e.return), ks(3, e);
        } catch (w) {
          Le(e, e.return, w);
        }
        try {
          Xo(5, e, e.return);
        } catch (w) {
          Le(e, e.return, w);
        }
      }
      break;
    case 1:
      Dt(t, e), Vt(e), n & 512 && r !== null && Hn(r, r.return);
      break;
    case 5:
      if (
        (Dt(t, e),
        Vt(e),
        n & 512 && r !== null && Hn(r, r.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ni(o, "");
        } catch (w) {
          Le(e, e.return, w);
        }
      }
      if (n & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = r !== null ? r.memoizedProps : i,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && xp(o, i),
              tu(a, l);
            var u = tu(a, i);
            for (l = 0; l < s.length; l += 2) {
              var c = s[l],
                d = s[l + 1];
              c === "style"
                ? Cp(o, d)
                : c === "dangerouslySetInnerHTML"
                ? Sp(o, d)
                : c === "children"
                ? ni(o, d)
                : ic(o, c, d, u);
            }
            switch (a) {
              case "input":
                Xa(o, i);
                break;
              case "textarea":
                wp(o, i);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var h = i.value;
                h != null
                  ? Wn(o, !!i.multiple, h, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Wn(o, !!i.multiple, i.defaultValue, !0)
                      : Wn(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[fi] = i;
          } catch (w) {
            Le(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Dt(t, e), Vt(e), n & 4)) {
        if (e.stateNode === null) throw Error(O(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (w) {
          Le(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Dt(t, e), Vt(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          si(t.containerInfo);
        } catch (w) {
          Le(e, e.return, w);
        }
      break;
    case 4:
      Dt(t, e), Vt(e);
      break;
    case 13:
      Dt(t, e),
        Vt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (_c = Me())),
        n & 4 && zf(e);
      break;
    case 22:
      if (
        ((c = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((Ge = (u = Ge) || c), Dt(t, e), (Ge = u)) : Dt(t, e),
        Vt(e),
        n & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (V = e, c = e.child; c !== null; ) {
            for (d = V = c; V !== null; ) {
              switch (((m = V), (h = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Xo(4, m, m.return);
                  break;
                case 1:
                  Hn(m, m.return);
                  var y = m.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (n = m), (r = m.return);
                    try {
                      (t = n),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (w) {
                      Le(n, r, w);
                    }
                  }
                  break;
                case 5:
                  Hn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Uf(d);
                    continue;
                  }
              }
              h !== null ? ((h.return = m), (V = h)) : Uf(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = d.stateNode),
                      (s = d.memoizedProps.style),
                      (l =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = Ep("display", l)));
              } catch (w) {
                Le(e, e.return, w);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (w) {
                Le(e, e.return, w);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Dt(t, e), Vt(e), n & 4 && zf(e);
      break;
    case 21:
      break;
    default:
      Dt(t, e), Vt(e);
  }
}
function Vt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (Gm(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(O(160));
      }
      switch (n.tag) {
        case 5:
          var o = n.stateNode;
          n.flags & 32 && (ni(o, ""), (n.flags &= -33));
          var i = Bf(e);
          Tu(e, i, o);
          break;
        case 3:
        case 4:
          var l = n.stateNode.containerInfo,
            a = Bf(e);
          Ru(e, a, l);
          break;
        default:
          throw Error(O(161));
      }
    } catch (s) {
      Le(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function P2(e, t, r) {
  (V = e), Jm(e);
}
function Jm(e, t, r) {
  for (var n = (e.mode & 1) !== 0; V !== null; ) {
    var o = V,
      i = o.child;
    if (o.tag === 22 && n) {
      var l = o.memoizedState !== null || il;
      if (!l) {
        var a = o.alternate,
          s = (a !== null && a.memoizedState !== null) || Ge;
        a = il;
        var u = Ge;
        if (((il = l), (Ge = s) && !u))
          for (V = o; V !== null; )
            (l = V),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Vf(o)
                : s !== null
                ? ((s.return = l), (V = s))
                : Vf(o);
        for (; i !== null; ) (V = i), Jm(i), (i = i.sibling);
        (V = o), (il = a), (Ge = u);
      }
      Hf(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (V = i)) : Hf(e);
  }
}
function Hf(e) {
  for (; V !== null; ) {
    var t = V;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ge || ks(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !Ge)
                if (r === null) n.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : Ft(t.type, r.memoizedProps);
                  n.componentDidUpdate(
                    o,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && jf(t, i, n);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                jf(t, l, r);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (r === null && t.flags & 4) {
                r = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && r.focus();
                    break;
                  case "img":
                    s.src && (r.src = s.src);
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
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && si(d);
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
              throw Error(O(163));
          }
        Ge || (t.flags & 512 && Nu(t));
      } catch (m) {
        Le(t, t.return, m);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), (V = r);
      break;
    }
    V = t.return;
  }
}
function Uf(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), (V = r);
      break;
    }
    V = t.return;
  }
}
function Vf(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            ks(4, t);
          } catch (s) {
            Le(t, r, s);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var o = t.return;
            try {
              n.componentDidMount();
            } catch (s) {
              Le(t, o, s);
            }
          }
          var i = t.return;
          try {
            Nu(t);
          } catch (s) {
            Le(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Nu(t);
          } catch (s) {
            Le(t, l, s);
          }
      }
    } catch (s) {
      Le(t, t.return, s);
    }
    if (t === e) {
      V = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (V = a);
      break;
    }
    V = t.return;
  }
}
var N2 = Math.ceil,
  Xl = cr.ReactCurrentDispatcher,
  Oc = cr.ReactCurrentOwner,
  Tt = cr.ReactCurrentBatchConfig,
  ae = 0,
  He = null,
  Ie = null,
  We = 0,
  gt = 0,
  Un = Kr(0),
  Ae = 0,
  yi = null,
  gn = 0,
  Ss = 0,
  Ic = 0,
  Zo = null,
  at = null,
  _c = 0,
  oo = 1 / 0,
  er = null,
  Zl = !1,
  Lu = null,
  Or = null,
  ll = !1,
  $r = null,
  Jl = 0,
  Jo = 0,
  Mu = null,
  El = -1,
  Cl = 0;
function nt() {
  return ae & 6 ? Me() : El !== -1 ? El : (El = Me());
}
function Ir(e) {
  return e.mode & 1
    ? ae & 2 && We !== 0
      ? We & -We
      : f2.transition !== null
      ? (Cl === 0 && (Cl = Op()), Cl)
      : ((e = he),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Up(e.type))),
        e)
    : 1;
}
function Bt(e, t, r, n) {
  if (50 < Jo) throw ((Jo = 0), (Mu = null), Error(O(185)));
  Pi(e, r, n),
    (!(ae & 2) || e !== He) &&
      (e === He && (!(ae & 2) && (Ss |= r), Ae === 4 && Cr(e, We)),
      pt(e, n),
      r === 1 && ae === 0 && !(t.mode & 1) && ((oo = Me() + 500), ys && Yr()));
}
function pt(e, t) {
  var r = e.callbackNode;
  fv(e, t);
  var n = Fl(e, e === He ? We : 0);
  if (n === 0)
    r !== null && Jd(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && Jd(r), t === 1))
      e.tag === 0 ? d2(Wf.bind(null, e)) : am(Wf.bind(null, e)),
        s2(function () {
          !(ae & 6) && Yr();
        }),
        (r = null);
    else {
      switch (Ip(n)) {
        case 1:
          r = cc;
          break;
        case 4:
          r = Dp;
          break;
        case 16:
          r = Dl;
          break;
        case 536870912:
          r = Fp;
          break;
        default:
          r = Dl;
      }
      r = lh(r, qm.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function qm(e, t) {
  if (((El = -1), (Cl = 0), ae & 6)) throw Error(O(327));
  var r = e.callbackNode;
  if (Xn() && e.callbackNode !== r) return null;
  var n = Fl(e, e === He ? We : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = ql(e, n);
  else {
    t = n;
    var o = ae;
    ae |= 2;
    var i = th();
    (He !== e || We !== t) && ((er = null), (oo = Me() + 500), un(e, t));
    do
      try {
        L2();
        break;
      } catch (a) {
        eh(e, a);
      }
    while (!0);
    Ec(),
      (Xl.current = i),
      (ae = o),
      Ie !== null ? (t = 0) : ((He = null), (We = 0), (t = Ae));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = lu(e)), o !== 0 && ((n = o), (t = Du(e, o)))), t === 1)
    )
      throw ((r = yi), un(e, 0), Cr(e, n), pt(e, Me()), r);
    if (t === 6) Cr(e, n);
    else {
      if (
        ((o = e.current.alternate),
        !(n & 30) &&
          !R2(o) &&
          ((t = ql(e, n)),
          t === 2 && ((i = lu(e)), i !== 0 && ((n = i), (t = Du(e, i)))),
          t === 1))
      )
        throw ((r = yi), un(e, 0), Cr(e, n), pt(e, Me()), r);
      switch (((e.finishedWork = o), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          Jr(e, at, er);
          break;
        case 3:
          if (
            (Cr(e, n), (n & 130023424) === n && ((t = _c + 500 - Me()), 10 < t))
          ) {
            if (Fl(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & n) !== n)) {
              nt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = mu(Jr.bind(null, e, at, er), t);
            break;
          }
          Jr(e, at, er);
          break;
        case 4:
          if ((Cr(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, o = -1; 0 < n; ) {
            var l = 31 - At(n);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (n &= ~i);
          }
          if (
            ((n = o),
            (n = Me() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * N2(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = mu(Jr.bind(null, e, at, er), n);
            break;
          }
          Jr(e, at, er);
          break;
        case 5:
          Jr(e, at, er);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return pt(e, Me()), e.callbackNode === r ? qm.bind(null, e) : null;
}
function Du(e, t) {
  var r = Zo;
  return (
    e.current.memoizedState.isDehydrated && (un(e, t).flags |= 256),
    (e = ql(e, t)),
    e !== 2 && ((t = at), (at = r), t !== null && Fu(t)),
    e
  );
}
function Fu(e) {
  at === null ? (at = e) : at.push.apply(at, e);
}
function R2(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var o = r[n],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!zt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      (r.return = t), (t = r);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Cr(e, t) {
  for (
    t &= ~Ic,
      t &= ~Ss,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - At(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function Wf(e) {
  if (ae & 6) throw Error(O(327));
  Xn();
  var t = Fl(e, 0);
  if (!(t & 1)) return pt(e, Me()), null;
  var r = ql(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = lu(e);
    n !== 0 && ((t = n), (r = Du(e, n)));
  }
  if (r === 1) throw ((r = yi), un(e, 0), Cr(e, t), pt(e, Me()), r);
  if (r === 6) throw Error(O(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Jr(e, at, er),
    pt(e, Me()),
    null
  );
}
function Ac(e, t) {
  var r = ae;
  ae |= 1;
  try {
    return e(t);
  } finally {
    (ae = r), ae === 0 && ((oo = Me() + 500), ys && Yr());
  }
}
function vn(e) {
  $r !== null && $r.tag === 0 && !(ae & 6) && Xn();
  var t = ae;
  ae |= 1;
  var r = Tt.transition,
    n = he;
  try {
    if (((Tt.transition = null), (he = 1), e)) return e();
  } finally {
    (he = n), (Tt.transition = r), (ae = t), !(ae & 6) && Yr();
  }
}
function Bc() {
  (gt = Un.current), Ce(Un);
}
function un(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), l2(r)), Ie !== null))
    for (r = Ie.return; r !== null; ) {
      var n = r;
      switch ((wc(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && Bl();
          break;
        case 3:
          ro(), Ce(dt), Ce(Ze), Nc();
          break;
        case 5:
          Pc(n);
          break;
        case 4:
          ro();
          break;
        case 13:
          Ce(Pe);
          break;
        case 19:
          Ce(Pe);
          break;
        case 10:
          Cc(n.type._context);
          break;
        case 22:
        case 23:
          Bc();
      }
      r = r.return;
    }
  if (
    ((He = e),
    (Ie = e = _r(e.current, null)),
    (We = gt = t),
    (Ae = 0),
    (yi = null),
    (Ic = Ss = gn = 0),
    (at = Zo = null),
    rn !== null)
  ) {
    for (t = 0; t < rn.length; t++)
      if (((r = rn[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var o = n.next,
          i = r.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (n.next = l);
        }
        r.pending = n;
      }
    rn = null;
  }
  return e;
}
function eh(e, t) {
  do {
    var r = Ie;
    try {
      if ((Ec(), (wl.current = Gl), Yl)) {
        for (var n = Ne.memoizedState; n !== null; ) {
          var o = n.queue;
          o !== null && (o.pending = null), (n = n.next);
        }
        Yl = !1;
      }
      if (
        ((hn = 0),
        (ze = _e = Ne = null),
        (Go = !1),
        (hi = 0),
        (Oc.current = null),
        r === null || r.return === null)
      ) {
        (Ae = 1), (yi = t), (Ie = null);
        break;
      }
      e: {
        var i = e,
          l = r.return,
          a = r,
          s = t;
        if (
          ((t = We),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var m = c.alternate;
            m
              ? ((c.updateQueue = m.updateQueue),
                (c.memoizedState = m.memoizedState),
                (c.lanes = m.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = Lf(l);
          if (h !== null) {
            (h.flags &= -257),
              Mf(h, l, a, i, t),
              h.mode & 1 && Tf(i, u, t),
              (t = h),
              (s = u);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(s), (t.updateQueue = w);
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Tf(i, u, t), zc();
              break e;
            }
            s = Error(O(426));
          }
        } else if (je && a.mode & 1) {
          var k = Lf(l);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              Mf(k, l, a, i, t),
              kc(no(s, a));
            break e;
          }
        }
        (i = s = no(s, a)),
          Ae !== 4 && (Ae = 2),
          Zo === null ? (Zo = [i]) : Zo.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var v = Im(i, s, t);
              bf(i, v);
              break e;
            case 1:
              a = s;
              var g = i.type,
                x = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof g.getDerivedStateFromError == "function" ||
                  (x !== null &&
                    typeof x.componentDidCatch == "function" &&
                    (Or === null || !Or.has(x))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var E = _m(i, a, t);
                bf(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      nh(r);
    } catch ($) {
      (t = $), Ie === r && r !== null && (Ie = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function th() {
  var e = Xl.current;
  return (Xl.current = Gl), e === null ? Gl : e;
}
function zc() {
  (Ae === 0 || Ae === 3 || Ae === 2) && (Ae = 4),
    He === null || (!(gn & 268435455) && !(Ss & 268435455)) || Cr(He, We);
}
function ql(e, t) {
  var r = ae;
  ae |= 2;
  var n = th();
  (He !== e || We !== t) && ((er = null), un(e, t));
  do
    try {
      T2();
      break;
    } catch (o) {
      eh(e, o);
    }
  while (!0);
  if ((Ec(), (ae = r), (Xl.current = n), Ie !== null)) throw Error(O(261));
  return (He = null), (We = 0), Ae;
}
function T2() {
  for (; Ie !== null; ) rh(Ie);
}
function L2() {
  for (; Ie !== null && !nv(); ) rh(Ie);
}
function rh(e) {
  var t = ih(e.alternate, e, gt);
  (e.memoizedProps = e.pendingProps),
    t === null ? nh(e) : (Ie = t),
    (Oc.current = null);
}
function nh(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = b2(r, t)), r !== null)) {
        (r.flags &= 32767), (Ie = r);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ae = 6), (Ie = null);
        return;
      }
    } else if (((r = C2(r, t, gt)), r !== null)) {
      Ie = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ie = t;
      return;
    }
    Ie = t = e;
  } while (t !== null);
  Ae === 0 && (Ae = 5);
}
function Jr(e, t, r) {
  var n = he,
    o = Tt.transition;
  try {
    (Tt.transition = null), (he = 1), M2(e, t, r, n);
  } finally {
    (Tt.transition = o), (he = n);
  }
  return null;
}
function M2(e, t, r, n) {
  do Xn();
  while ($r !== null);
  if (ae & 6) throw Error(O(327));
  r = e.finishedWork;
  var o = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(O(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = r.lanes | r.childLanes;
  if (
    (pv(e, i),
    e === He && ((Ie = He = null), (We = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      ll ||
      ((ll = !0),
      lh(Dl, function () {
        return Xn(), null;
      })),
    (i = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || i)
  ) {
    (i = Tt.transition), (Tt.transition = null);
    var l = he;
    he = 1;
    var a = ae;
    (ae |= 4),
      (Oc.current = null),
      $2(e, r),
      Zm(r, e),
      qv(fu),
      (Ol = !!du),
      (fu = du = null),
      (e.current = r),
      P2(r),
      ov(),
      (ae = a),
      (he = l),
      (Tt.transition = i);
  } else e.current = r;
  if (
    (ll && ((ll = !1), ($r = e), (Jl = o)),
    (i = e.pendingLanes),
    i === 0 && (Or = null),
    sv(r.stateNode),
    pt(e, Me()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      (o = t[r]), n(o.value, { componentStack: o.stack, digest: o.digest });
  if (Zl) throw ((Zl = !1), (e = Lu), (Lu = null), e);
  return (
    Jl & 1 && e.tag !== 0 && Xn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Mu ? Jo++ : ((Jo = 0), (Mu = e))) : (Jo = 0),
    Yr(),
    null
  );
}
function Xn() {
  if ($r !== null) {
    var e = Ip(Jl),
      t = Tt.transition,
      r = he;
    try {
      if (((Tt.transition = null), (he = 16 > e ? 16 : e), $r === null))
        var n = !1;
      else {
        if (((e = $r), ($r = null), (Jl = 0), ae & 6)) throw Error(O(331));
        var o = ae;
        for (ae |= 4, V = e.current; V !== null; ) {
          var i = V,
            l = i.child;
          if (V.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
                for (V = u; V !== null; ) {
                  var c = V;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xo(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (V = d);
                  else
                    for (; V !== null; ) {
                      c = V;
                      var m = c.sibling,
                        h = c.return;
                      if ((Ym(c), c === u)) {
                        V = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = h), (V = m);
                        break;
                      }
                      V = h;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var k = w.sibling;
                    (w.sibling = null), (w = k);
                  } while (w !== null);
                }
              }
              V = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (V = l);
          else
            e: for (; V !== null; ) {
              if (((i = V), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Xo(9, i, i.return);
                }
              var v = i.sibling;
              if (v !== null) {
                (v.return = i.return), (V = v);
                break e;
              }
              V = i.return;
            }
        }
        var g = e.current;
        for (V = g; V !== null; ) {
          l = V;
          var x = l.child;
          if (l.subtreeFlags & 2064 && x !== null) (x.return = l), (V = x);
          else
            e: for (l = g; V !== null; ) {
              if (((a = V), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ks(9, a);
                  }
                } catch ($) {
                  Le(a, a.return, $);
                }
              if (a === l) {
                V = null;
                break e;
              }
              var E = a.sibling;
              if (E !== null) {
                (E.return = a.return), (V = E);
                break e;
              }
              V = a.return;
            }
        }
        if (
          ((ae = o), Yr(), Kt && typeof Kt.onPostCommitFiberRoot == "function")
        )
          try {
            Kt.onPostCommitFiberRoot(ps, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (he = r), (Tt.transition = t);
    }
  }
  return !1;
}
function Qf(e, t, r) {
  (t = no(r, t)),
    (t = Im(e, t, 1)),
    (e = Fr(e, t, 1)),
    (t = nt()),
    e !== null && (Pi(e, 1, t), pt(e, t));
}
function Le(e, t, r) {
  if (e.tag === 3) Qf(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Qf(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (Or === null || !Or.has(n)))
        ) {
          (e = no(r, e)),
            (e = _m(t, e, 1)),
            (t = Fr(t, e, 1)),
            (e = nt()),
            t !== null && (Pi(t, 1, e), pt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function D2(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t),
    (t = nt()),
    (e.pingedLanes |= e.suspendedLanes & r),
    He === e &&
      (We & r) === r &&
      (Ae === 4 || (Ae === 3 && (We & 130023424) === We && 500 > Me() - _c)
        ? un(e, 0)
        : (Ic |= r)),
    pt(e, t);
}
function oh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Xi), (Xi <<= 1), !(Xi & 130023424) && (Xi = 4194304))
      : (t = 1));
  var r = nt();
  (e = ar(e, t)), e !== null && (Pi(e, t, r), pt(e, r));
}
function F2(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), oh(e, r);
}
function O2(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        o = e.memoizedState;
      o !== null && (r = o.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  n !== null && n.delete(t), oh(e, r);
}
var ih;
ih = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || dt.current) ut = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (ut = !1), E2(e, t, r);
      ut = !!(e.flags & 131072);
    }
  else (ut = !1), je && t.flags & 1048576 && um(t, Ul, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      Sl(e, t), (e = t.pendingProps);
      var o = qn(t, Ze.current);
      Gn(t, r), (o = Tc(null, t, n, e, o, r));
      var i = Lc();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ft(n) ? ((i = !0), zl(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            jc(t),
            (o.updater = ws),
            (t.stateNode = o),
            (o._reactInternals = t),
            ku(t, n, e, r),
            (t = Cu(null, t, n, !0, i, r)))
          : ((t.tag = 0), je && i && xc(t), et(null, t, o, r), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          (Sl(e, t),
          (e = t.pendingProps),
          (o = n._init),
          (n = o(n._payload)),
          (t.type = n),
          (o = t.tag = _2(n)),
          (e = Ft(n, e)),
          o)
        ) {
          case 0:
            t = Eu(null, t, n, e, r);
            break e;
          case 1:
            t = Of(null, t, n, e, r);
            break e;
          case 11:
            t = Df(null, t, n, e, r);
            break e;
          case 14:
            t = Ff(null, t, n, Ft(n.type, e), r);
            break e;
        }
        throw Error(O(306, n, ""));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Ft(n, o)),
        Eu(e, t, n, o, r)
      );
    case 1:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Ft(n, o)),
        Of(e, t, n, o, r)
      );
    case 3:
      e: {
        if ((Hm(t), e === null)) throw Error(O(387));
        (n = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          hm(e, t),
          Ql(t, n, null, r);
        var l = t.memoizedState;
        if (((n = l.element), i.isDehydrated))
          if (
            ((i = {
              element: n,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = no(Error(O(423)), t)), (t = If(e, t, n, r, o));
            break e;
          } else if (n !== o) {
            (o = no(Error(O(424)), t)), (t = If(e, t, n, r, o));
            break e;
          } else
            for (
              xt = Dr(t.stateNode.containerInfo.firstChild),
                kt = t,
                je = !0,
                _t = null,
                r = pm(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((eo(), n === o)) {
            t = ur(e, t, r);
            break e;
          }
          et(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        gm(t),
        e === null && yu(t),
        (n = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        pu(n, o) ? (l = null) : i !== null && pu(n, i) && (t.flags |= 32),
        zm(e, t),
        et(e, t, l, r),
        t.child
      );
    case 6:
      return e === null && yu(t), null;
    case 13:
      return Um(e, t, r);
    case 4:
      return (
        $c(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = to(t, null, n, r)) : et(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Ft(n, o)),
        Df(e, t, n, o, r)
      );
    case 7:
      return et(e, t, t.pendingProps, r), t.child;
    case 8:
      return et(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return et(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          ke(Vl, n._currentValue),
          (n._currentValue = l),
          i !== null)
        )
          if (zt(i.value, l)) {
            if (i.children === o.children && !dt.current) {
              t = ur(e, t, r);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                l = i.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === n) {
                    if (i.tag === 1) {
                      (s = or(-1, r & -r)), (s.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (s.next = s)
                          : ((s.next = c.next), (c.next = s)),
                          (u.pending = s);
                      }
                    }
                    (i.lanes |= r),
                      (s = i.alternate),
                      s !== null && (s.lanes |= r),
                      xu(i.return, r, t),
                      (a.lanes |= r);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(O(341));
                (l.lanes |= r),
                  (a = l.alternate),
                  a !== null && (a.lanes |= r),
                  xu(l, r, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        et(e, t, o.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (n = t.pendingProps.children),
        Gn(t, r),
        (o = Lt(o)),
        (n = n(o)),
        (t.flags |= 1),
        et(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (n = t.type),
        (o = Ft(n, t.pendingProps)),
        (o = Ft(n.type, o)),
        Ff(e, t, n, o, r)
      );
    case 15:
      return Am(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Ft(n, o)),
        Sl(e, t),
        (t.tag = 1),
        ft(n) ? ((e = !0), zl(t)) : (e = !1),
        Gn(t, r),
        Om(t, n, o),
        ku(t, n, o, r),
        Cu(null, t, n, !0, e, r)
      );
    case 19:
      return Vm(e, t, r);
    case 22:
      return Bm(e, t, r);
  }
  throw Error(O(156, t.tag));
};
function lh(e, t) {
  return Mp(e, t);
}
function I2(e, t, r, n) {
  (this.tag = e),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Rt(e, t, r, n) {
  return new I2(e, t, r, n);
}
function Hc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function _2(e) {
  if (typeof e == "function") return Hc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === sc)) return 11;
    if (e === ac) return 14;
  }
  return 2;
}
function _r(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = Rt(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function bl(e, t, r, n, o, i) {
  var l = 2;
  if (((n = e), typeof e == "function")) Hc(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Mn:
        return cn(r.children, o, i, t);
      case lc:
        (l = 8), (o |= 8);
        break;
      case Wa:
        return (
          (e = Rt(12, r, t, o | 2)), (e.elementType = Wa), (e.lanes = i), e
        );
      case Qa:
        return (e = Rt(13, r, t, o)), (e.elementType = Qa), (e.lanes = i), e;
      case Ka:
        return (e = Rt(19, r, t, o)), (e.elementType = Ka), (e.lanes = i), e;
      case gp:
        return Es(r, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case mp:
              l = 10;
              break e;
            case hp:
              l = 9;
              break e;
            case sc:
              l = 11;
              break e;
            case ac:
              l = 14;
              break e;
            case wr:
              (l = 16), (n = null);
              break e;
          }
        throw Error(O(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Rt(l, r, t, o)), (t.elementType = e), (t.type = n), (t.lanes = i), t
  );
}
function cn(e, t, r, n) {
  return (e = Rt(7, e, n, t)), (e.lanes = r), e;
}
function Es(e, t, r, n) {
  return (
    (e = Rt(22, e, n, t)),
    (e.elementType = gp),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ba(e, t, r) {
  return (e = Rt(6, e, null, t)), (e.lanes = r), e;
}
function ja(e, t, r) {
  return (
    (t = Rt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function A2(e, t, r, n, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = la(0)),
    (this.expirationTimes = la(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = la(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Uc(e, t, r, n, o, i, l, a, s) {
  return (
    (e = new A2(e, t, r, a, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Rt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    jc(i),
    e
  );
}
function B2(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ln,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function sh(e) {
  if (!e) return zr;
  e = e._reactInternals;
  e: {
    if (En(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ft(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (ft(r)) return sm(e, r, t);
  }
  return t;
}
function ah(e, t, r, n, o, i, l, a, s) {
  return (
    (e = Uc(r, n, !0, e, o, i, l, a, s)),
    (e.context = sh(null)),
    (r = e.current),
    (n = nt()),
    (o = Ir(r)),
    (i = or(n, o)),
    (i.callback = t ?? null),
    Fr(r, i, o),
    (e.current.lanes = o),
    Pi(e, o, n),
    pt(e, n),
    e
  );
}
function Cs(e, t, r, n) {
  var o = t.current,
    i = nt(),
    l = Ir(o);
  return (
    (r = sh(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = or(i, l)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = Fr(o, t, l)),
    e !== null && (Bt(e, o, l, i), xl(e, o, l)),
    l
  );
}
function es(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Kf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function Vc(e, t) {
  Kf(e, t), (e = e.alternate) && Kf(e, t);
}
function z2() {
  return null;
}
var uh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Wc(e) {
  this._internalRoot = e;
}
bs.prototype.render = Wc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  Cs(e, t, null, null);
};
bs.prototype.unmount = Wc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    vn(function () {
      Cs(null, e, null, null);
    }),
      (t[sr] = null);
  }
};
function bs(e) {
  this._internalRoot = e;
}
bs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Bp();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < Er.length && t !== 0 && t < Er[r].priority; r++);
    Er.splice(r, 0, e), r === 0 && Hp(e);
  }
};
function Qc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function js(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Yf() {}
function H2(e, t, r, n, o) {
  if (o) {
    if (typeof n == "function") {
      var i = n;
      n = function () {
        var u = es(l);
        i.call(u);
      };
    }
    var l = ah(t, n, e, 0, null, !1, !1, "", Yf);
    return (
      (e._reactRootContainer = l),
      (e[sr] = l.current),
      ci(e.nodeType === 8 ? e.parentNode : e),
      vn(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof n == "function") {
    var a = n;
    n = function () {
      var u = es(s);
      a.call(u);
    };
  }
  var s = Uc(e, 0, !1, null, null, !1, !1, "", Yf);
  return (
    (e._reactRootContainer = s),
    (e[sr] = s.current),
    ci(e.nodeType === 8 ? e.parentNode : e),
    vn(function () {
      Cs(t, s, r, n);
    }),
    s
  );
}
function $s(e, t, r, n, o) {
  var i = r._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var s = es(l);
        a.call(s);
      };
    }
    Cs(t, l, e, o);
  } else l = H2(r, t, e, o, n);
  return es(l);
}
_p = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = Bo(t.pendingLanes);
        r !== 0 &&
          (dc(t, r | 1), pt(t, Me()), !(ae & 6) && ((oo = Me() + 500), Yr()));
      }
      break;
    case 13:
      vn(function () {
        var n = ar(e, 1);
        if (n !== null) {
          var o = nt();
          Bt(n, e, 1, o);
        }
      }),
        Vc(e, 1);
  }
};
fc = function (e) {
  if (e.tag === 13) {
    var t = ar(e, 134217728);
    if (t !== null) {
      var r = nt();
      Bt(t, e, 134217728, r);
    }
    Vc(e, 134217728);
  }
};
Ap = function (e) {
  if (e.tag === 13) {
    var t = Ir(e),
      r = ar(e, t);
    if (r !== null) {
      var n = nt();
      Bt(r, e, t, n);
    }
    Vc(e, t);
  }
};
Bp = function () {
  return he;
};
zp = function (e, t) {
  var r = he;
  try {
    return (he = e), t();
  } finally {
    he = r;
  }
};
nu = function (e, t, r) {
  switch (t) {
    case "input":
      if ((Xa(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var o = vs(n);
            if (!o) throw Error(O(90));
            yp(n), Xa(n, o);
          }
        }
      }
      break;
    case "textarea":
      wp(e, r);
      break;
    case "select":
      (t = r.value), t != null && Wn(e, !!r.multiple, t, !1);
  }
};
$p = Ac;
Pp = vn;
var U2 = { usingClientEntryPoint: !1, Events: [Ri, In, vs, bp, jp, Ac] },
  Mo = {
    findFiberByHostInstance: tn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  V2 = {
    bundleType: Mo.bundleType,
    version: Mo.version,
    rendererPackageName: Mo.rendererPackageName,
    rendererConfig: Mo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: cr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Tp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Mo.findFiberByHostInstance || z2,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var sl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!sl.isDisabled && sl.supportsFiber)
    try {
      (ps = sl.inject(V2)), (Kt = sl);
    } catch {}
}
Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U2;
Ct.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Qc(t)) throw Error(O(200));
  return B2(e, t, null, r);
};
Ct.createRoot = function (e, t) {
  if (!Qc(e)) throw Error(O(299));
  var r = !1,
    n = "",
    o = uh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Uc(e, 1, !1, null, null, r, !1, n, o)),
    (e[sr] = t.current),
    ci(e.nodeType === 8 ? e.parentNode : e),
    new Wc(t)
  );
};
Ct.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(O(188))
      : ((e = Object.keys(e).join(",")), Error(O(268, e)));
  return (e = Tp(t)), (e = e === null ? null : e.stateNode), e;
};
Ct.flushSync = function (e) {
  return vn(e);
};
Ct.hydrate = function (e, t, r) {
  if (!js(t)) throw Error(O(200));
  return $s(null, e, t, !0, r);
};
Ct.hydrateRoot = function (e, t, r) {
  if (!Qc(e)) throw Error(O(405));
  var n = (r != null && r.hydratedSources) || null,
    o = !1,
    i = "",
    l = uh;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (o = !0),
      r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (l = r.onRecoverableError)),
    (t = ah(t, null, e, 1, r ?? null, o, !1, i, l)),
    (e[sr] = t.current),
    ci(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (o = r._getVersion),
        (o = o(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, o])
          : t.mutableSourceEagerHydrationData.push(r, o);
  return new bs(t);
};
Ct.render = function (e, t, r) {
  if (!js(t)) throw Error(O(200));
  return $s(null, e, t, !1, r);
};
Ct.unmountComponentAtNode = function (e) {
  if (!js(e)) throw Error(O(40));
  return e._reactRootContainer
    ? (vn(function () {
        $s(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[sr] = null);
        });
      }),
      !0)
    : !1;
};
Ct.unstable_batchedUpdates = Ac;
Ct.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!js(r)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return $s(e, t, r, !1, n);
};
Ct.version = "18.3.1-next-f1338f8080-20240426";
function ch() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ch);
    } catch (e) {
      console.error(e);
    }
}
ch(), (cp.exports = Ct);
var ot = cp.exports;
const W2 = Ju(ot),
  Q2 = J0({ __proto__: null, default: W2 }, [ot]);
var Gf = ot;
(Ua.createRoot = Gf.createRoot), (Ua.hydrateRoot = Gf.hydrateRoot);
/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $e() {
  return (
    ($e = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    $e.apply(this, arguments)
  );
}
var Oe;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Oe || (Oe = {}));
const Xf = "popstate";
function K2(e) {
  e === void 0 && (e = {});
  function t(n, o) {
    let { pathname: i, search: l, hash: a } = n.location;
    return xi(
      "",
      { pathname: i, search: l, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function r(n, o) {
    return typeof o == "string" ? o : yn(o);
  }
  return G2(t, r, null, e);
}
function re(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function io(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Y2() {
  return Math.random().toString(36).substr(2, 8);
}
function Zf(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function xi(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    $e(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Gr(t) : t,
      { state: r, key: (t && t.key) || n || Y2() }
    )
  );
}
function yn(e) {
  let { pathname: t = "/", search: r = "", hash: n = "" } = e;
  return (
    r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
    n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n),
    t
  );
}
function Gr(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
    let n = e.indexOf("?");
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
      e && (t.pathname = e);
  }
  return t;
}
function G2(e, t, r, n) {
  n === void 0 && (n = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = n,
    l = o.history,
    a = Oe.Pop,
    s = null,
    u = c();
  u == null && ((u = 0), l.replaceState($e({}, l.state, { idx: u }), ""));
  function c() {
    return (l.state || { idx: null }).idx;
  }
  function d() {
    a = Oe.Pop;
    let k = c(),
      v = k == null ? null : k - u;
    (u = k), s && s({ action: a, location: w.location, delta: v });
  }
  function m(k, v) {
    a = Oe.Push;
    let g = xi(w.location, k, v);
    u = c() + 1;
    let x = Zf(g, u),
      E = w.createHref(g);
    try {
      l.pushState(x, "", E);
    } catch ($) {
      if ($ instanceof DOMException && $.name === "DataCloneError") throw $;
      o.location.assign(E);
    }
    i && s && s({ action: a, location: w.location, delta: 1 });
  }
  function h(k, v) {
    a = Oe.Replace;
    let g = xi(w.location, k, v);
    u = c();
    let x = Zf(g, u),
      E = w.createHref(g);
    l.replaceState(x, "", E),
      i && s && s({ action: a, location: w.location, delta: 0 });
  }
  function y(k) {
    let v = o.location.origin !== "null" ? o.location.origin : o.location.href,
      g = typeof k == "string" ? k : yn(k);
    return (
      (g = g.replace(/ $/, "%20")),
      re(
        v,
        "No window.location.(origin|href) available to create URL for href: " +
          g
      ),
      new URL(g, v)
    );
  }
  let w = {
    get action() {
      return a;
    },
    get location() {
      return e(o, l);
    },
    listen(k) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Xf, d),
        (s = k),
        () => {
          o.removeEventListener(Xf, d), (s = null);
        }
      );
    },
    createHref(k) {
      return t(o, k);
    },
    createURL: y,
    encodeLocation(k) {
      let v = y(k);
      return { pathname: v.pathname, search: v.search, hash: v.hash };
    },
    push: m,
    replace: h,
    go(k) {
      return l.go(k);
    },
  };
  return w;
}
var we;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(we || (we = {}));
const X2 = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Z2(e) {
  return e.index === !0;
}
function wi(e, t, r, n) {
  return (
    r === void 0 && (r = []),
    n === void 0 && (n = {}),
    e.map((o, i) => {
      let l = [...r, String(i)],
        a = typeof o.id == "string" ? o.id : l.join("-");
      if (
        (re(
          o.index !== !0 || !o.children,
          "Cannot specify children on an index route"
        ),
        re(
          !n[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Z2(o))
      ) {
        let s = $e({}, o, t(o), { id: a });
        return (n[a] = s), s;
      } else {
        let s = $e({}, o, t(o), { id: a, children: void 0 });
        return (
          (n[a] = s), o.children && (s.children = wi(o.children, t, l, n)), s
        );
      }
    })
  );
}
function qr(e, t, r) {
  return r === void 0 && (r = "/"), jl(e, t, r, !1);
}
function jl(e, t, r, n) {
  let o = typeof t == "string" ? Gr(t) : t,
    i = mo(o.pathname || "/", r);
  if (i == null) return null;
  let l = dh(e);
  q2(l);
  let a = null;
  for (let s = 0; a == null && s < l.length; ++s) {
    let u = cy(i);
    a = ay(l[s], u, n);
  }
  return a;
}
function J2(e, t) {
  let { route: r, pathname: n, params: o } = e;
  return { id: r.id, pathname: n, params: o, data: t[r.id], handle: r.handle };
}
function dh(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let o = (i, l, a) => {
    let s = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: l,
      route: i,
    };
    s.relativePath.startsWith("/") &&
      (re(
        s.relativePath.startsWith(n),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(n.length)));
    let u = ir([n, s.relativePath]),
      c = r.concat(s);
    i.children &&
      i.children.length > 0 &&
      (re(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      dh(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: ly(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, l) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, l);
      else for (let s of fh(i.path)) o(i, l, s);
    }),
    t
  );
}
function fh(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t,
    o = r.endsWith("?"),
    i = r.replace(/\?$/, "");
  if (n.length === 0) return o ? [i, ""] : [i];
  let l = fh(n.join("/")),
    a = [];
  return (
    a.push(...l.map((s) => (s === "" ? i : [i, s].join("/")))),
    o && a.push(...l),
    a.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function q2(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : sy(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  );
}
const ey = /^:[\w-]+$/,
  ty = 3,
  ry = 2,
  ny = 1,
  oy = 10,
  iy = -2,
  Jf = (e) => e === "*";
function ly(e, t) {
  let r = e.split("/"),
    n = r.length;
  return (
    r.some(Jf) && (n += iy),
    t && (n += ry),
    r
      .filter((o) => !Jf(o))
      .reduce((o, i) => o + (ey.test(i) ? ty : i === "" ? ny : oy), n)
  );
}
function sy(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, o) => n === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function ay(e, t, r) {
  r === void 0 && (r = !1);
  let { routesMeta: n } = e,
    o = {},
    i = "/",
    l = [];
  for (let a = 0; a < n.length; ++a) {
    let s = n[a],
      u = a === n.length - 1,
      c = i === "/" ? t : t.slice(i.length) || "/",
      d = qf(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: u },
        c
      ),
      m = s.route;
    if (
      (!d &&
        u &&
        r &&
        !n[n.length - 1].route.index &&
        (d = qf(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          c
        )),
      !d)
    )
      return null;
    Object.assign(o, d.params),
      l.push({
        params: o,
        pathname: ir([i, d.pathname]),
        pathnameBase: py(ir([i, d.pathnameBase])),
        route: m,
      }),
      d.pathnameBase !== "/" && (i = ir([i, d.pathnameBase]));
  }
  return l;
}
function qf(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = uy(e.path, e.caseSensitive, e.end),
    o = t.match(r);
  if (!o) return null;
  let i = o[0],
    l = i.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: n.reduce((u, c, d) => {
      let { paramName: m, isOptional: h } = c;
      if (m === "*") {
        let w = a[d] || "";
        l = i.slice(0, i.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const y = a[d];
      return (
        h && !y ? (u[m] = void 0) : (u[m] = (y || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e,
  };
}
function uy(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    io(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let n = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, a, s) => (
            n.push({ paramName: a, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (n.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), n]
  );
}
function cy(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      io(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function mo(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function dy(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: n = "",
    hash: o = "",
  } = typeof e == "string" ? Gr(e) : e;
  return {
    pathname: r ? (r.startsWith("/") ? r : fy(r, t)) : t,
    search: my(n),
    hash: hy(o),
  };
}
function fy(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? r.length > 1 && r.pop() : o !== "." && r.push(o);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function $a(e, t, r, n) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(n) +
      "].  Please separate it out to the ") +
    ("`to." + r + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function ph(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Kc(e, t) {
  let r = ph(e);
  return t
    ? r.map((n, o) => (o === r.length - 1 ? n.pathname : n.pathnameBase))
    : r.map((n) => n.pathnameBase);
}
function Yc(e, t, r, n) {
  n === void 0 && (n = !1);
  let o;
  typeof e == "string"
    ? (o = Gr(e))
    : ((o = $e({}, e)),
      re(
        !o.pathname || !o.pathname.includes("?"),
        $a("?", "pathname", "search", o)
      ),
      re(
        !o.pathname || !o.pathname.includes("#"),
        $a("#", "pathname", "hash", o)
      ),
      re(!o.search || !o.search.includes("#"), $a("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    l = i ? "/" : o.pathname,
    a;
  if (l == null) a = r;
  else {
    let d = t.length - 1;
    if (!n && l.startsWith("..")) {
      let m = l.split("/");
      for (; m[0] === ".."; ) m.shift(), (d -= 1);
      o.pathname = m.join("/");
    }
    a = d >= 0 ? t[d] : "/";
  }
  let s = dy(o, a),
    u = l && l !== "/" && l.endsWith("/"),
    c = (i || l === ".") && r.endsWith("/");
  return !s.pathname.endsWith("/") && (u || c) && (s.pathname += "/"), s;
}
const ir = (e) => e.join("/").replace(/\/\/+/g, "/"),
  py = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  my = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  hy = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Gc {
  constructor(t, r, n, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = r || ""),
      (this.internal = o),
      n instanceof Error
        ? ((this.data = n.toString()), (this.error = n))
        : (this.data = n);
  }
}
function Ps(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const mh = ["post", "put", "patch", "delete"],
  gy = new Set(mh),
  vy = ["get", ...mh],
  yy = new Set(vy),
  xy = new Set([301, 302, 303, 307, 308]),
  wy = new Set([307, 308]),
  Pa = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  ky = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Do = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Xc = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Sy = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  hh = "remix-router-transitions";
function Ey(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    r =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    n = !r;
  re(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let o;
  if (e.mapRouteProperties) o = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let C = e.detectErrorBoundary;
    o = (b) => ({ hasErrorBoundary: C(b) });
  } else o = Sy;
  let i = {},
    l = wi(e.routes, o, void 0, i),
    a,
    s = e.basename || "/",
    u = e.unstable_dataStrategy || Py,
    c = e.unstable_patchRoutesOnMiss,
    d = $e(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      e.future
    ),
    m = null,
    h = new Set(),
    y = null,
    w = null,
    k = null,
    v = e.hydrationData != null,
    g = qr(l, e.history.location, s),
    x = null;
  if (g == null && !c) {
    let C = qe(404, { pathname: e.history.location.pathname }),
      { matches: b, route: N } = u0(l);
    (g = b), (x = { [N.id]: C });
  }
  g &&
    c &&
    !e.hydrationData &&
    ea(g, l, e.history.location.pathname).active &&
    (g = null);
  let E;
  if (!g) (E = !1), (g = []);
  else if (g.some((C) => C.route.lazy)) E = !1;
  else if (!g.some((C) => C.route.loader)) E = !0;
  else if (d.v7_partialHydration) {
    let C = e.hydrationData ? e.hydrationData.loaderData : null,
      b = e.hydrationData ? e.hydrationData.errors : null,
      N = (T) =>
        T.route.loader
          ? typeof T.route.loader == "function" && T.route.loader.hydrate === !0
            ? !1
            : (C && C[T.route.id] !== void 0) || (b && b[T.route.id] !== void 0)
          : !0;
    if (b) {
      let T = g.findIndex((H) => b[H.route.id] !== void 0);
      E = g.slice(0, T + 1).every(N);
    } else E = g.every(N);
  } else E = e.hydrationData != null;
  let $,
    S = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: g,
      initialized: E,
      navigation: Pa,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || x,
      fetchers: new Map(),
      blockers: new Map(),
    },
    P = Oe.Pop,
    j = !1,
    R,
    L = !1,
    _ = new Map(),
    W = null,
    Y = !1,
    K = !1,
    z = [],
    oe = [],
    B = new Map(),
    M = 0,
    I = -1,
    F = new Map(),
    U = new Set(),
    Z = new Map(),
    ie = new Map(),
    ee = new Set(),
    se = new Map(),
    fe = new Map(),
    jt = new Map(),
    So = !1;
  function ng() {
    if (
      ((m = e.history.listen((C) => {
        let { action: b, location: N, delta: T } = C;
        if (So) {
          So = !1;
          return;
        }
        io(
          fe.size === 0 || T != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let H = Od({
          currentLocation: S.location,
          nextLocation: N,
          historyAction: b,
        });
        if (H && T != null) {
          (So = !0),
            e.history.go(T * -1),
            Ai(H, {
              state: "blocked",
              location: N,
              proceed() {
                Ai(H, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: N,
                }),
                  e.history.go(T);
              },
              reset() {
                let Q = new Map(S.blockers);
                Q.set(H, Do), Je({ blockers: Q });
              },
            });
          return;
        }
        return Xr(b, N);
      })),
      r)
    ) {
      zy(t, _);
      let C = () => Hy(t, _);
      t.addEventListener("pagehide", C),
        (W = () => t.removeEventListener("pagehide", C));
    }
    return S.initialized || Xr(Oe.Pop, S.location, { initialHydration: !0 }), $;
  }
  function og() {
    m && m(),
      W && W(),
      h.clear(),
      R && R.abort(),
      S.fetchers.forEach((C, b) => _i(b)),
      S.blockers.forEach((C, b) => Fd(b));
  }
  function ig(C) {
    return h.add(C), () => h.delete(C);
  }
  function Je(C, b) {
    b === void 0 && (b = {}), (S = $e({}, S, C));
    let N = [],
      T = [];
    d.v7_fetcherPersist &&
      S.fetchers.forEach((H, Q) => {
        H.state === "idle" && (ee.has(Q) ? T.push(Q) : N.push(Q));
      }),
      [...h].forEach((H) =>
        H(S, {
          deletedFetchers: T,
          unstable_viewTransitionOpts: b.viewTransitionOpts,
          unstable_flushSync: b.flushSync === !0,
        })
      ),
      d.v7_fetcherPersist &&
        (N.forEach((H) => S.fetchers.delete(H)), T.forEach((H) => _i(H)));
  }
  function jn(C, b, N) {
    var T, H;
    let { flushSync: Q } = N === void 0 ? {} : N,
      q =
        S.actionData != null &&
        S.navigation.formMethod != null &&
        It(S.navigation.formMethod) &&
        S.navigation.state === "loading" &&
        ((T = C.state) == null ? void 0 : T._isRedirect) !== !0,
      A;
    b.actionData
      ? Object.keys(b.actionData).length > 0
        ? (A = b.actionData)
        : (A = null)
      : q
      ? (A = S.actionData)
      : (A = null);
    let te = b.loaderData
        ? s0(S.loaderData, b.loaderData, b.matches || [], b.errors)
        : S.loaderData,
      G = S.blockers;
    G.size > 0 && ((G = new Map(G)), G.forEach((pe, ye) => G.set(ye, Do)));
    let J =
      j === !0 ||
      (S.navigation.formMethod != null &&
        It(S.navigation.formMethod) &&
        ((H = C.state) == null ? void 0 : H._isRedirect) !== !0);
    a && ((l = a), (a = void 0)),
      Y ||
        P === Oe.Pop ||
        (P === Oe.Push
          ? e.history.push(C, C.state)
          : P === Oe.Replace && e.history.replace(C, C.state));
    let ge;
    if (P === Oe.Pop) {
      let pe = _.get(S.location.pathname);
      pe && pe.has(C.pathname)
        ? (ge = { currentLocation: S.location, nextLocation: C })
        : _.has(C.pathname) &&
          (ge = { currentLocation: C, nextLocation: S.location });
    } else if (L) {
      let pe = _.get(S.location.pathname);
      pe
        ? pe.add(C.pathname)
        : ((pe = new Set([C.pathname])), _.set(S.location.pathname, pe)),
        (ge = { currentLocation: S.location, nextLocation: C });
    }
    Je(
      $e({}, b, {
        actionData: A,
        loaderData: te,
        historyAction: P,
        location: C,
        initialized: !0,
        navigation: Pa,
        revalidation: "idle",
        restoreScrollPosition: _d(C, b.matches || S.matches),
        preventScrollReset: J,
        blockers: G,
      }),
      { viewTransitionOpts: ge, flushSync: Q === !0 }
    ),
      (P = Oe.Pop),
      (j = !1),
      (L = !1),
      (Y = !1),
      (K = !1),
      (z = []),
      (oe = []);
  }
  async function Pd(C, b) {
    if (typeof C == "number") {
      e.history.go(C);
      return;
    }
    let N = Ou(
        S.location,
        S.matches,
        s,
        d.v7_prependBasename,
        C,
        d.v7_relativeSplatPath,
        b == null ? void 0 : b.fromRouteId,
        b == null ? void 0 : b.relative
      ),
      {
        path: T,
        submission: H,
        error: Q,
      } = e0(d.v7_normalizeFormMethod, !1, N, b),
      q = S.location,
      A = xi(S.location, T, b && b.state);
    A = $e({}, A, e.history.encodeLocation(A));
    let te = b && b.replace != null ? b.replace : void 0,
      G = Oe.Push;
    te === !0
      ? (G = Oe.Replace)
      : te === !1 ||
        (H != null &&
          It(H.formMethod) &&
          H.formAction === S.location.pathname + S.location.search &&
          (G = Oe.Replace));
    let J =
        b && "preventScrollReset" in b ? b.preventScrollReset === !0 : void 0,
      ge = (b && b.unstable_flushSync) === !0,
      pe = Od({ currentLocation: q, nextLocation: A, historyAction: G });
    if (pe) {
      Ai(pe, {
        state: "blocked",
        location: A,
        proceed() {
          Ai(pe, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: A,
          }),
            Pd(C, b);
        },
        reset() {
          let ye = new Map(S.blockers);
          ye.set(pe, Do), Je({ blockers: ye });
        },
      });
      return;
    }
    return await Xr(G, A, {
      submission: H,
      pendingError: Q,
      preventScrollReset: J,
      replace: b && b.replace,
      enableViewTransition: b && b.unstable_viewTransition,
      flushSync: ge,
    });
  }
  function lg() {
    if (
      (Zs(),
      Je({ revalidation: "loading" }),
      S.navigation.state !== "submitting")
    ) {
      if (S.navigation.state === "idle") {
        Xr(S.historyAction, S.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Xr(P || S.historyAction, S.navigation.location, {
        overrideNavigation: S.navigation,
      });
    }
  }
  async function Xr(C, b, N) {
    R && R.abort(),
      (R = null),
      (P = C),
      (Y = (N && N.startUninterruptedRevalidation) === !0),
      gg(S.location, S.matches),
      (j = (N && N.preventScrollReset) === !0),
      (L = (N && N.enableViewTransition) === !0);
    let T = a || l,
      H = N && N.overrideNavigation,
      Q = qr(T, b, s),
      q = (N && N.flushSync) === !0,
      A = ea(Q, T, b.pathname);
    if ((A.active && A.matches && (Q = A.matches), !Q)) {
      let { error: ce, notFoundMatches: Ue, route: Fe } = Js(b.pathname);
      jn(
        b,
        { matches: Ue, loaderData: {}, errors: { [Fe.id]: ce } },
        { flushSync: q }
      );
      return;
    }
    if (
      S.initialized &&
      !K &&
      Dy(S.location, b) &&
      !(N && N.submission && It(N.submission.formMethod))
    ) {
      jn(b, { matches: Q }, { flushSync: q });
      return;
    }
    R = new AbortController();
    let te = Tn(e.history, b, R.signal, N && N.submission),
      G;
    if (N && N.pendingError)
      G = [Vn(Q).route.id, { type: we.error, error: N.pendingError }];
    else if (N && N.submission && It(N.submission.formMethod)) {
      let ce = await sg(te, b, N.submission, Q, A.active, {
        replace: N.replace,
        flushSync: q,
      });
      if (ce.shortCircuited) return;
      if (ce.pendingActionResult) {
        let [Ue, Fe] = ce.pendingActionResult;
        if (vt(Fe) && Ps(Fe.error) && Fe.error.status === 404) {
          (R = null),
            jn(b, {
              matches: ce.matches,
              loaderData: {},
              errors: { [Ue]: Fe.error },
            });
          return;
        }
      }
      (Q = ce.matches || Q),
        (G = ce.pendingActionResult),
        (H = Na(b, N.submission)),
        (q = !1),
        (A.active = !1),
        (te = Tn(e.history, te.url, te.signal));
    }
    let {
      shortCircuited: J,
      matches: ge,
      loaderData: pe,
      errors: ye,
    } = await ag(
      te,
      b,
      Q,
      A.active,
      H,
      N && N.submission,
      N && N.fetcherSubmission,
      N && N.replace,
      N && N.initialHydration === !0,
      q,
      G
    );
    J ||
      ((R = null),
      jn(b, $e({ matches: ge || Q }, a0(G), { loaderData: pe, errors: ye })));
  }
  async function sg(C, b, N, T, H, Q) {
    Q === void 0 && (Q = {}), Zs();
    let q = Ay(b, N);
    if ((Je({ navigation: q }, { flushSync: Q.flushSync === !0 }), H)) {
      let G = await zi(T, b.pathname, C.signal);
      if (G.type === "aborted") return { shortCircuited: !0 };
      if (G.type === "error") {
        let { boundaryId: J, error: ge } = Bi(b.pathname, G);
        return {
          matches: G.partialMatches,
          pendingActionResult: [J, { type: we.error, error: ge }],
        };
      } else if (G.matches) T = G.matches;
      else {
        let { notFoundMatches: J, error: ge, route: pe } = Js(b.pathname);
        return {
          matches: J,
          pendingActionResult: [pe.id, { type: we.error, error: ge }],
        };
      }
    }
    let A,
      te = Ho(T, b);
    if (!te.route.action && !te.route.lazy)
      A = {
        type: we.error,
        error: qe(405, {
          method: C.method,
          pathname: b.pathname,
          routeId: te.route.id,
        }),
      };
    else if (((A = (await Co("action", C, [te], T))[0]), C.signal.aborted))
      return { shortCircuited: !0 };
    if (ln(A)) {
      let G;
      return (
        Q && Q.replace != null
          ? (G = Q.replace)
          : (G =
              o0(A.response.headers.get("Location"), new URL(C.url), s) ===
              S.location.pathname + S.location.search),
        await Eo(C, A, { submission: N, replace: G }),
        { shortCircuited: !0 }
      );
    }
    if (on(A)) throw qe(400, { type: "defer-action" });
    if (vt(A)) {
      let G = Vn(T, te.route.id);
      return (
        (Q && Q.replace) !== !0 && (P = Oe.Push),
        { matches: T, pendingActionResult: [G.route.id, A] }
      );
    }
    return { matches: T, pendingActionResult: [te.route.id, A] };
  }
  async function ag(C, b, N, T, H, Q, q, A, te, G, J) {
    let ge = H || Na(b, Q),
      pe = Q || q || f0(ge),
      ye = !Y && (!d.v7_partialHydration || !te);
    if (T) {
      if (ye) {
        let Te = Nd(J);
        Je($e({ navigation: ge }, Te !== void 0 ? { actionData: Te } : {}), {
          flushSync: G,
        });
      }
      let ne = await zi(N, b.pathname, C.signal);
      if (ne.type === "aborted") return { shortCircuited: !0 };
      if (ne.type === "error") {
        let { boundaryId: Te, error: ht } = Bi(b.pathname, ne);
        return {
          matches: ne.partialMatches,
          loaderData: {},
          errors: { [Te]: ht },
        };
      } else if (ne.matches) N = ne.matches;
      else {
        let { error: Te, notFoundMatches: ht, route: be } = Js(b.pathname);
        return { matches: ht, loaderData: {}, errors: { [be.id]: Te } };
      }
    }
    let ce = a || l,
      [Ue, Fe] = t0(
        e.history,
        S,
        N,
        pe,
        b,
        d.v7_partialHydration && te === !0,
        d.v7_skipActionErrorRevalidation,
        K,
        z,
        oe,
        ee,
        Z,
        U,
        ce,
        s,
        J
      );
    if (
      (qs(
        (ne) =>
          !(N && N.some((Te) => Te.route.id === ne)) ||
          (Ue && Ue.some((Te) => Te.route.id === ne))
      ),
      (I = ++M),
      Ue.length === 0 && Fe.length === 0)
    ) {
      let ne = Md();
      return (
        jn(
          b,
          $e(
            {
              matches: N,
              loaderData: {},
              errors: J && vt(J[1]) ? { [J[0]]: J[1].error } : null,
            },
            a0(J),
            ne ? { fetchers: new Map(S.fetchers) } : {}
          ),
          { flushSync: G }
        ),
        { shortCircuited: !0 }
      );
    }
    if (ye) {
      let ne = {};
      if (!T) {
        ne.navigation = ge;
        let Te = Nd(J);
        Te !== void 0 && (ne.actionData = Te);
      }
      Fe.length > 0 && (ne.fetchers = ug(Fe)), Je(ne, { flushSync: G });
    }
    Fe.forEach((ne) => {
      B.has(ne.key) && gr(ne.key),
        ne.controller && B.set(ne.key, ne.controller);
    });
    let bo = () => Fe.forEach((ne) => gr(ne.key));
    R && R.signal.addEventListener("abort", bo);
    let { loaderResults: vr, fetcherResults: $n } = await Rd(
      S.matches,
      N,
      Ue,
      Fe,
      C
    );
    if (C.signal.aborted) return { shortCircuited: !0 };
    R && R.signal.removeEventListener("abort", bo),
      Fe.forEach((ne) => B.delete(ne.key));
    let Pn = c0([...vr, ...$n]);
    if (Pn) {
      if (Pn.idx >= Ue.length) {
        let ne = Fe[Pn.idx - Ue.length].key;
        U.add(ne);
      }
      return await Eo(C, Pn.result, { replace: A }), { shortCircuited: !0 };
    }
    let { loaderData: Nn, errors: Ut } = l0(S, N, Ue, vr, J, Fe, $n, se);
    se.forEach((ne, Te) => {
      ne.subscribe((ht) => {
        (ht || ne.done) && se.delete(Te);
      });
    }),
      d.v7_partialHydration &&
        te &&
        S.errors &&
        Object.entries(S.errors)
          .filter((ne) => {
            let [Te] = ne;
            return !Ue.some((ht) => ht.route.id === Te);
          })
          .forEach((ne) => {
            let [Te, ht] = ne;
            Ut = Object.assign(Ut || {}, { [Te]: ht });
          });
    let Hi = Md(),
      Ui = Dd(I),
      Vi = Hi || Ui || Fe.length > 0;
    return $e(
      { matches: N, loaderData: Nn, errors: Ut },
      Vi ? { fetchers: new Map(S.fetchers) } : {}
    );
  }
  function Nd(C) {
    if (C && !vt(C[1])) return { [C[0]]: C[1].data };
    if (S.actionData)
      return Object.keys(S.actionData).length === 0 ? null : S.actionData;
  }
  function ug(C) {
    return (
      C.forEach((b) => {
        let N = S.fetchers.get(b.key),
          T = Fo(void 0, N ? N.data : void 0);
        S.fetchers.set(b.key, T);
      }),
      new Map(S.fetchers)
    );
  }
  function cg(C, b, N, T) {
    if (n)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    B.has(C) && gr(C);
    let H = (T && T.unstable_flushSync) === !0,
      Q = a || l,
      q = Ou(
        S.location,
        S.matches,
        s,
        d.v7_prependBasename,
        N,
        d.v7_relativeSplatPath,
        b,
        T == null ? void 0 : T.relative
      ),
      A = qr(Q, q, s),
      te = ea(A, Q, q);
    if ((te.active && te.matches && (A = te.matches), !A)) {
      Jt(C, b, qe(404, { pathname: q }), { flushSync: H });
      return;
    }
    let {
      path: G,
      submission: J,
      error: ge,
    } = e0(d.v7_normalizeFormMethod, !0, q, T);
    if (ge) {
      Jt(C, b, ge, { flushSync: H });
      return;
    }
    let pe = Ho(A, G);
    if (((j = (T && T.preventScrollReset) === !0), J && It(J.formMethod))) {
      dg(C, b, G, pe, A, te.active, H, J);
      return;
    }
    Z.set(C, { routeId: b, path: G }), fg(C, b, G, pe, A, te.active, H, J);
  }
  async function dg(C, b, N, T, H, Q, q, A) {
    Zs(), Z.delete(C);
    function te(be) {
      if (!be.route.action && !be.route.lazy) {
        let qt = qe(405, { method: A.formMethod, pathname: N, routeId: b });
        return Jt(C, b, qt, { flushSync: q }), !0;
      }
      return !1;
    }
    if (!Q && te(T)) return;
    let G = S.fetchers.get(C);
    hr(C, By(A, G), { flushSync: q });
    let J = new AbortController(),
      ge = Tn(e.history, N, J.signal, A);
    if (Q) {
      let be = await zi(H, N, ge.signal);
      if (be.type === "aborted") return;
      if (be.type === "error") {
        let { error: qt } = Bi(N, be);
        Jt(C, b, qt, { flushSync: q });
        return;
      } else if (be.matches) {
        if (((H = be.matches), (T = Ho(H, N)), te(T))) return;
      } else {
        Jt(C, b, qe(404, { pathname: N }), { flushSync: q });
        return;
      }
    }
    B.set(C, J);
    let pe = M,
      ce = (await Co("action", ge, [T], H))[0];
    if (ge.signal.aborted) {
      B.get(C) === J && B.delete(C);
      return;
    }
    if (d.v7_fetcherPersist && ee.has(C)) {
      if (ln(ce) || vt(ce)) {
        hr(C, xr(void 0));
        return;
      }
    } else {
      if (ln(ce))
        if ((B.delete(C), I > pe)) {
          hr(C, xr(void 0));
          return;
        } else
          return U.add(C), hr(C, Fo(A)), Eo(ge, ce, { fetcherSubmission: A });
      if (vt(ce)) {
        Jt(C, b, ce.error);
        return;
      }
    }
    if (on(ce)) throw qe(400, { type: "defer-action" });
    let Ue = S.navigation.location || S.location,
      Fe = Tn(e.history, Ue, J.signal),
      bo = a || l,
      vr =
        S.navigation.state !== "idle"
          ? qr(bo, S.navigation.location, s)
          : S.matches;
    re(vr, "Didn't find any matches after fetcher action");
    let $n = ++M;
    F.set(C, $n);
    let Pn = Fo(A, ce.data);
    S.fetchers.set(C, Pn);
    let [Nn, Ut] = t0(
      e.history,
      S,
      vr,
      A,
      Ue,
      !1,
      d.v7_skipActionErrorRevalidation,
      K,
      z,
      oe,
      ee,
      Z,
      U,
      bo,
      s,
      [T.route.id, ce]
    );
    Ut.filter((be) => be.key !== C).forEach((be) => {
      let qt = be.key,
        Ad = S.fetchers.get(qt),
        xg = Fo(void 0, Ad ? Ad.data : void 0);
      S.fetchers.set(qt, xg),
        B.has(qt) && gr(qt),
        be.controller && B.set(qt, be.controller);
    }),
      Je({ fetchers: new Map(S.fetchers) });
    let Hi = () => Ut.forEach((be) => gr(be.key));
    J.signal.addEventListener("abort", Hi);
    let { loaderResults: Ui, fetcherResults: Vi } = await Rd(
      S.matches,
      vr,
      Nn,
      Ut,
      Fe
    );
    if (J.signal.aborted) return;
    J.signal.removeEventListener("abort", Hi),
      F.delete(C),
      B.delete(C),
      Ut.forEach((be) => B.delete(be.key));
    let ne = c0([...Ui, ...Vi]);
    if (ne) {
      if (ne.idx >= Nn.length) {
        let be = Ut[ne.idx - Nn.length].key;
        U.add(be);
      }
      return Eo(Fe, ne.result);
    }
    let { loaderData: Te, errors: ht } = l0(
      S,
      S.matches,
      Nn,
      Ui,
      void 0,
      Ut,
      Vi,
      se
    );
    if (S.fetchers.has(C)) {
      let be = xr(ce.data);
      S.fetchers.set(C, be);
    }
    Dd($n),
      S.navigation.state === "loading" && $n > I
        ? (re(P, "Expected pending action"),
          R && R.abort(),
          jn(S.navigation.location, {
            matches: vr,
            loaderData: Te,
            errors: ht,
            fetchers: new Map(S.fetchers),
          }))
        : (Je({
            errors: ht,
            loaderData: s0(S.loaderData, Te, vr, ht),
            fetchers: new Map(S.fetchers),
          }),
          (K = !1));
  }
  async function fg(C, b, N, T, H, Q, q, A) {
    let te = S.fetchers.get(C);
    hr(C, Fo(A, te ? te.data : void 0), { flushSync: q });
    let G = new AbortController(),
      J = Tn(e.history, N, G.signal);
    if (Q) {
      let ce = await zi(H, N, J.signal);
      if (ce.type === "aborted") return;
      if (ce.type === "error") {
        let { error: Ue } = Bi(N, ce);
        Jt(C, b, Ue, { flushSync: q });
        return;
      } else if (ce.matches) (H = ce.matches), (T = Ho(H, N));
      else {
        Jt(C, b, qe(404, { pathname: N }), { flushSync: q });
        return;
      }
    }
    B.set(C, G);
    let ge = M,
      ye = (await Co("loader", J, [T], H))[0];
    if (
      (on(ye) && (ye = (await wh(ye, J.signal, !0)) || ye),
      B.get(C) === G && B.delete(C),
      !J.signal.aborted)
    ) {
      if (ee.has(C)) {
        hr(C, xr(void 0));
        return;
      }
      if (ln(ye))
        if (I > ge) {
          hr(C, xr(void 0));
          return;
        } else {
          U.add(C), await Eo(J, ye);
          return;
        }
      if (vt(ye)) {
        Jt(C, b, ye.error);
        return;
      }
      re(!on(ye), "Unhandled fetcher deferred data"), hr(C, xr(ye.data));
    }
  }
  async function Eo(C, b, N) {
    let {
      submission: T,
      fetcherSubmission: H,
      replace: Q,
    } = N === void 0 ? {} : N;
    b.response.headers.has("X-Remix-Revalidate") && (K = !0);
    let q = b.response.headers.get("Location");
    re(q, "Expected a Location header on the redirect Response"),
      (q = o0(q, new URL(C.url), s));
    let A = xi(S.location, q, { _isRedirect: !0 });
    if (r) {
      let ye = !1;
      if (b.response.headers.has("X-Remix-Reload-Document")) ye = !0;
      else if (Xc.test(q)) {
        const ce = e.history.createURL(q);
        ye = ce.origin !== t.location.origin || mo(ce.pathname, s) == null;
      }
      if (ye) {
        Q ? t.location.replace(q) : t.location.assign(q);
        return;
      }
    }
    R = null;
    let te = Q === !0 ? Oe.Replace : Oe.Push,
      { formMethod: G, formAction: J, formEncType: ge } = S.navigation;
    !T && !H && G && J && ge && (T = f0(S.navigation));
    let pe = T || H;
    if (wy.has(b.response.status) && pe && It(pe.formMethod))
      await Xr(te, A, {
        submission: $e({}, pe, { formAction: q }),
        preventScrollReset: j,
      });
    else {
      let ye = Na(A, T);
      await Xr(te, A, {
        overrideNavigation: ye,
        fetcherSubmission: H,
        preventScrollReset: j,
      });
    }
  }
  async function Co(C, b, N, T) {
    try {
      let H = await Ny(u, C, b, N, T, i, o);
      return await Promise.all(
        H.map((Q, q) => {
          if (Oy(Q)) {
            let A = Q.result;
            return {
              type: we.redirect,
              response: Ly(A, b, N[q].route.id, T, s, d.v7_relativeSplatPath),
            };
          }
          return Ty(Q);
        })
      );
    } catch (H) {
      return N.map(() => ({ type: we.error, error: H }));
    }
  }
  async function Rd(C, b, N, T, H) {
    let [Q, ...q] = await Promise.all([
      N.length ? Co("loader", H, N, b) : [],
      ...T.map((A) => {
        if (A.matches && A.match && A.controller) {
          let te = Tn(e.history, A.path, A.controller.signal);
          return Co("loader", te, [A.match], A.matches).then((G) => G[0]);
        } else
          return Promise.resolve({
            type: we.error,
            error: qe(404, { pathname: A.path }),
          });
      }),
    ]);
    return (
      await Promise.all([
        d0(
          C,
          N,
          Q,
          Q.map(() => H.signal),
          !1,
          S.loaderData
        ),
        d0(
          C,
          T.map((A) => A.match),
          q,
          T.map((A) => (A.controller ? A.controller.signal : null)),
          !0
        ),
      ]),
      { loaderResults: Q, fetcherResults: q }
    );
  }
  function Zs() {
    (K = !0),
      z.push(...qs()),
      Z.forEach((C, b) => {
        B.has(b) && (oe.push(b), gr(b));
      });
  }
  function hr(C, b, N) {
    N === void 0 && (N = {}),
      S.fetchers.set(C, b),
      Je(
        { fetchers: new Map(S.fetchers) },
        { flushSync: (N && N.flushSync) === !0 }
      );
  }
  function Jt(C, b, N, T) {
    T === void 0 && (T = {});
    let H = Vn(S.matches, b);
    _i(C),
      Je(
        { errors: { [H.route.id]: N }, fetchers: new Map(S.fetchers) },
        { flushSync: (T && T.flushSync) === !0 }
      );
  }
  function Td(C) {
    return (
      d.v7_fetcherPersist &&
        (ie.set(C, (ie.get(C) || 0) + 1), ee.has(C) && ee.delete(C)),
      S.fetchers.get(C) || ky
    );
  }
  function _i(C) {
    let b = S.fetchers.get(C);
    B.has(C) && !(b && b.state === "loading" && F.has(C)) && gr(C),
      Z.delete(C),
      F.delete(C),
      U.delete(C),
      ee.delete(C),
      S.fetchers.delete(C);
  }
  function pg(C) {
    if (d.v7_fetcherPersist) {
      let b = (ie.get(C) || 0) - 1;
      b <= 0 ? (ie.delete(C), ee.add(C)) : ie.set(C, b);
    } else _i(C);
    Je({ fetchers: new Map(S.fetchers) });
  }
  function gr(C) {
    let b = B.get(C);
    re(b, "Expected fetch controller: " + C), b.abort(), B.delete(C);
  }
  function Ld(C) {
    for (let b of C) {
      let N = Td(b),
        T = xr(N.data);
      S.fetchers.set(b, T);
    }
  }
  function Md() {
    let C = [],
      b = !1;
    for (let N of U) {
      let T = S.fetchers.get(N);
      re(T, "Expected fetcher: " + N),
        T.state === "loading" && (U.delete(N), C.push(N), (b = !0));
    }
    return Ld(C), b;
  }
  function Dd(C) {
    let b = [];
    for (let [N, T] of F)
      if (T < C) {
        let H = S.fetchers.get(N);
        re(H, "Expected fetcher: " + N),
          H.state === "loading" && (gr(N), F.delete(N), b.push(N));
      }
    return Ld(b), b.length > 0;
  }
  function mg(C, b) {
    let N = S.blockers.get(C) || Do;
    return fe.get(C) !== b && fe.set(C, b), N;
  }
  function Fd(C) {
    S.blockers.delete(C), fe.delete(C);
  }
  function Ai(C, b) {
    let N = S.blockers.get(C) || Do;
    re(
      (N.state === "unblocked" && b.state === "blocked") ||
        (N.state === "blocked" && b.state === "blocked") ||
        (N.state === "blocked" && b.state === "proceeding") ||
        (N.state === "blocked" && b.state === "unblocked") ||
        (N.state === "proceeding" && b.state === "unblocked"),
      "Invalid blocker state transition: " + N.state + " -> " + b.state
    );
    let T = new Map(S.blockers);
    T.set(C, b), Je({ blockers: T });
  }
  function Od(C) {
    let { currentLocation: b, nextLocation: N, historyAction: T } = C;
    if (fe.size === 0) return;
    fe.size > 1 && io(!1, "A router only supports one blocker at a time");
    let H = Array.from(fe.entries()),
      [Q, q] = H[H.length - 1],
      A = S.blockers.get(Q);
    if (
      !(A && A.state === "proceeding") &&
      q({ currentLocation: b, nextLocation: N, historyAction: T })
    )
      return Q;
  }
  function Js(C) {
    let b = qe(404, { pathname: C }),
      N = a || l,
      { matches: T, route: H } = u0(N);
    return qs(), { notFoundMatches: T, route: H, error: b };
  }
  function Bi(C, b) {
    return {
      boundaryId: Vn(b.partialMatches).route.id,
      error: qe(400, {
        type: "route-discovery",
        pathname: C,
        message:
          b.error != null && "message" in b.error ? b.error : String(b.error),
      }),
    };
  }
  function qs(C) {
    let b = [];
    return (
      se.forEach((N, T) => {
        (!C || C(T)) && (N.cancel(), b.push(T), se.delete(T));
      }),
      b
    );
  }
  function hg(C, b, N) {
    if (((y = C), (k = b), (w = N || null), !v && S.navigation === Pa)) {
      v = !0;
      let T = _d(S.location, S.matches);
      T != null && Je({ restoreScrollPosition: T });
    }
    return () => {
      (y = null), (k = null), (w = null);
    };
  }
  function Id(C, b) {
    return (
      (w &&
        w(
          C,
          b.map((T) => J2(T, S.loaderData))
        )) ||
      C.key
    );
  }
  function gg(C, b) {
    if (y && k) {
      let N = Id(C, b);
      y[N] = k();
    }
  }
  function _d(C, b) {
    if (y) {
      let N = Id(C, b),
        T = y[N];
      if (typeof T == "number") return T;
    }
    return null;
  }
  function ea(C, b, N) {
    if (c)
      if (C) {
        let T = C[C.length - 1].route;
        if (T.path && (T.path === "*" || T.path.endsWith("/*")))
          return { active: !0, matches: jl(b, N, s, !0) };
      } else return { active: !0, matches: jl(b, N, s, !0) || [] };
    return { active: !1, matches: null };
  }
  async function zi(C, b, N) {
    let T = C,
      H = T.length > 0 ? T[T.length - 1].route : null;
    for (;;) {
      let Q = a == null,
        q = a || l;
      try {
        await $y(c, b, T, q, i, o, jt, N);
      } catch (J) {
        return { type: "error", error: J, partialMatches: T };
      } finally {
        Q && (l = [...l]);
      }
      if (N.aborted) return { type: "aborted" };
      let A = qr(q, b, s),
        te = !1;
      if (A) {
        let J = A[A.length - 1].route;
        if (J.index) return { type: "success", matches: A };
        if (J.path && J.path.length > 0)
          if (J.path === "*") te = !0;
          else return { type: "success", matches: A };
      }
      let G = jl(q, b, s, !0);
      if (
        !G ||
        T.map((J) => J.route.id).join("-") ===
          G.map((J) => J.route.id).join("-")
      )
        return { type: "success", matches: te ? A : null };
      if (((T = G), (H = T[T.length - 1].route), H.path === "*"))
        return { type: "success", matches: T };
    }
  }
  function vg(C) {
    (i = {}), (a = wi(C, o, void 0, i));
  }
  function yg(C, b) {
    let N = a == null;
    vh(C, b, a || l, i, o), N && ((l = [...l]), Je({}));
  }
  return (
    ($ = {
      get basename() {
        return s;
      },
      get future() {
        return d;
      },
      get state() {
        return S;
      },
      get routes() {
        return l;
      },
      get window() {
        return t;
      },
      initialize: ng,
      subscribe: ig,
      enableScrollRestoration: hg,
      navigate: Pd,
      fetch: cg,
      revalidate: lg,
      createHref: (C) => e.history.createHref(C),
      encodeLocation: (C) => e.history.encodeLocation(C),
      getFetcher: Td,
      deleteFetcher: pg,
      dispose: og,
      getBlocker: mg,
      deleteBlocker: Fd,
      patchRoutes: yg,
      _internalFetchControllers: B,
      _internalActiveDeferreds: se,
      _internalSetRoutes: vg,
    }),
    $
  );
}
function Cy(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Ou(e, t, r, n, o, i, l, a) {
  let s, u;
  if (l) {
    s = [];
    for (let d of t)
      if ((s.push(d), d.route.id === l)) {
        u = d;
        break;
      }
  } else (s = t), (u = t[t.length - 1]);
  let c = Yc(o || ".", Kc(s, i), mo(e.pathname, r) || e.pathname, a === "path");
  return (
    o == null && ((c.search = e.search), (c.hash = e.hash)),
    (o == null || o === "" || o === ".") &&
      u &&
      u.route.index &&
      !Zc(c.search) &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    n &&
      r !== "/" &&
      (c.pathname = c.pathname === "/" ? r : ir([r, c.pathname])),
    yn(c)
  );
}
function e0(e, t, r, n) {
  if (!n || !Cy(n)) return { path: r };
  if (n.formMethod && !_y(n.formMethod))
    return { path: r, error: qe(405, { method: n.formMethod }) };
  let o = () => ({ path: r, error: qe(400, { type: "invalid-body" }) }),
    i = n.formMethod || "get",
    l = e ? i.toUpperCase() : i.toLowerCase(),
    a = yh(r);
  if (n.body !== void 0) {
    if (n.formEncType === "text/plain") {
      if (!It(l)) return o();
      let m =
        typeof n.body == "string"
          ? n.body
          : n.body instanceof FormData || n.body instanceof URLSearchParams
          ? Array.from(n.body.entries()).reduce((h, y) => {
              let [w, k] = y;
              return (
                "" +
                h +
                w +
                "=" +
                k +
                `
`
              );
            }, "")
          : String(n.body);
      return {
        path: r,
        submission: {
          formMethod: l,
          formAction: a,
          formEncType: n.formEncType,
          formData: void 0,
          json: void 0,
          text: m,
        },
      };
    } else if (n.formEncType === "application/json") {
      if (!It(l)) return o();
      try {
        let m = typeof n.body == "string" ? JSON.parse(n.body) : n.body;
        return {
          path: r,
          submission: {
            formMethod: l,
            formAction: a,
            formEncType: n.formEncType,
            formData: void 0,
            json: m,
            text: void 0,
          },
        };
      } catch {
        return o();
      }
    }
  }
  re(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let s, u;
  if (n.formData) (s = Iu(n.formData)), (u = n.formData);
  else if (n.body instanceof FormData) (s = Iu(n.body)), (u = n.body);
  else if (n.body instanceof URLSearchParams) (s = n.body), (u = i0(s));
  else if (n.body == null) (s = new URLSearchParams()), (u = new FormData());
  else
    try {
      (s = new URLSearchParams(n.body)), (u = i0(s));
    } catch {
      return o();
    }
  let c = {
    formMethod: l,
    formAction: a,
    formEncType: (n && n.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (It(c.formMethod)) return { path: r, submission: c };
  let d = Gr(r);
  return (
    t && d.search && Zc(d.search) && s.append("index", ""),
    (d.search = "?" + s),
    { path: yn(d), submission: c }
  );
}
function by(e, t) {
  let r = e;
  if (t) {
    let n = e.findIndex((o) => o.route.id === t);
    n >= 0 && (r = e.slice(0, n));
  }
  return r;
}
function t0(e, t, r, n, o, i, l, a, s, u, c, d, m, h, y, w) {
  let k = w ? (vt(w[1]) ? w[1].error : w[1].data) : void 0,
    v = e.createURL(t.location),
    g = e.createURL(o),
    x = w && vt(w[1]) ? w[0] : void 0,
    E = x ? by(r, x) : r,
    $ = w ? w[1].statusCode : void 0,
    S = l && $ && $ >= 400,
    P = E.filter((R, L) => {
      let { route: _ } = R;
      if (_.lazy) return !0;
      if (_.loader == null) return !1;
      if (i)
        return typeof _.loader != "function" || _.loader.hydrate
          ? !0
          : t.loaderData[_.id] === void 0 &&
              (!t.errors || t.errors[_.id] === void 0);
      if (jy(t.loaderData, t.matches[L], R) || s.some((K) => K === R.route.id))
        return !0;
      let W = t.matches[L],
        Y = R;
      return r0(
        R,
        $e(
          {
            currentUrl: v,
            currentParams: W.params,
            nextUrl: g,
            nextParams: Y.params,
          },
          n,
          {
            actionResult: k,
            actionStatus: $,
            defaultShouldRevalidate: S
              ? !1
              : a ||
                v.pathname + v.search === g.pathname + g.search ||
                v.search !== g.search ||
                gh(W, Y),
          }
        )
      );
    }),
    j = [];
  return (
    d.forEach((R, L) => {
      if (i || !r.some((z) => z.route.id === R.routeId) || c.has(L)) return;
      let _ = qr(h, R.path, y);
      if (!_) {
        j.push({
          key: L,
          routeId: R.routeId,
          path: R.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let W = t.fetchers.get(L),
        Y = Ho(_, R.path),
        K = !1;
      m.has(L)
        ? (K = !1)
        : u.includes(L)
        ? (K = !0)
        : W && W.state !== "idle" && W.data === void 0
        ? (K = a)
        : (K = r0(
            Y,
            $e(
              {
                currentUrl: v,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: g,
                nextParams: r[r.length - 1].params,
              },
              n,
              {
                actionResult: k,
                actionStatus: $,
                defaultShouldRevalidate: S ? !1 : a,
              }
            )
          )),
        K &&
          j.push({
            key: L,
            routeId: R.routeId,
            path: R.path,
            matches: _,
            match: Y,
            controller: new AbortController(),
          });
    }),
    [P, j]
  );
}
function jy(e, t, r) {
  let n = !t || r.route.id !== t.route.id,
    o = e[r.route.id] === void 0;
  return n || o;
}
function gh(e, t) {
  let r = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (r != null && r.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function r0(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t);
    if (typeof r == "boolean") return r;
  }
  return t.defaultShouldRevalidate;
}
async function $y(e, t, r, n, o, i, l, a) {
  let s = [t, ...r.map((u) => u.route.id)].join("-");
  try {
    let u = l.get(s);
    u ||
      ((u = e({
        path: t,
        matches: r,
        patch: (c, d) => {
          a.aborted || vh(c, d, n, o, i);
        },
      })),
      l.set(s, u)),
      u && Fy(u) && (await u);
  } finally {
    l.delete(s);
  }
}
function vh(e, t, r, n, o) {
  if (e) {
    var i;
    let l = n[e];
    re(l, "No route found to patch children into: routeId = " + e);
    let a = wi(
      t,
      o,
      [
        e,
        "patch",
        String(((i = l.children) == null ? void 0 : i.length) || "0"),
      ],
      n
    );
    l.children ? l.children.push(...a) : (l.children = a);
  } else {
    let l = wi(t, o, ["patch", String(r.length || "0")], n);
    r.push(...l);
  }
}
async function n0(e, t, r) {
  if (!e.lazy) return;
  let n = await e.lazy();
  if (!e.lazy) return;
  let o = r[e.id];
  re(o, "No route found in manifest");
  let i = {};
  for (let l in n) {
    let s = o[l] !== void 0 && l !== "hasErrorBoundary";
    io(
      !s,
      'Route "' +
        o.id +
        '" has a static property "' +
        l +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + l + '" will be ignored.')
    ),
      !s && !X2.has(l) && (i[l] = n[l]);
  }
  Object.assign(o, i), Object.assign(o, $e({}, t(o), { lazy: void 0 }));
}
function Py(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function Ny(e, t, r, n, o, i, l, a) {
  let s = n.reduce((d, m) => d.add(m.route.id), new Set()),
    u = new Set(),
    c = await e({
      matches: o.map((d) => {
        let m = s.has(d.route.id);
        return $e({}, d, {
          shouldLoad: m,
          resolve: (y) => (
            u.add(d.route.id),
            m
              ? Ry(t, r, d, i, l, y, a)
              : Promise.resolve({ type: we.data, result: void 0 })
          ),
        });
      }),
      request: r,
      params: o[0].params,
      context: a,
    });
  return (
    o.forEach((d) =>
      re(
        u.has(d.route.id),
        '`match.resolve()` was not called for route id "' +
          d.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.'
      )
    ),
    c.filter((d, m) => s.has(o[m].route.id))
  );
}
async function Ry(e, t, r, n, o, i, l) {
  let a,
    s,
    u = (c) => {
      let d,
        m = new Promise((w, k) => (d = k));
      (s = () => d()), t.signal.addEventListener("abort", s);
      let h = (w) =>
          typeof c != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + r.route.id + "]")
                )
              )
            : c(
                { request: t, params: r.params, context: l },
                ...(w !== void 0 ? [w] : [])
              ),
        y;
      return (
        i
          ? (y = i((w) => h(w)))
          : (y = (async () => {
              try {
                return { type: "data", result: await h() };
              } catch (w) {
                return { type: "error", result: w };
              }
            })()),
        Promise.race([y, m])
      );
    };
  try {
    let c = r.route[e];
    if (r.route.lazy)
      if (c) {
        let d,
          [m] = await Promise.all([
            u(c).catch((h) => {
              d = h;
            }),
            n0(r.route, o, n),
          ]);
        if (d !== void 0) throw d;
        a = m;
      } else if ((await n0(r.route, o, n), (c = r.route[e]), c)) a = await u(c);
      else if (e === "action") {
        let d = new URL(t.url),
          m = d.pathname + d.search;
        throw qe(405, { method: t.method, pathname: m, routeId: r.route.id });
      } else return { type: we.data, result: void 0 };
    else if (c) a = await u(c);
    else {
      let d = new URL(t.url),
        m = d.pathname + d.search;
      throw qe(404, { pathname: m });
    }
    re(
      a.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          r.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (c) {
    return { type: we.error, result: c };
  } finally {
    s && t.signal.removeEventListener("abort", s);
  }
  return a;
}
async function Ty(e) {
  let { result: t, type: r, status: n } = e;
  if (xh(t)) {
    let l;
    try {
      let a = t.headers.get("Content-Type");
      a && /\bapplication\/json\b/.test(a)
        ? t.body == null
          ? (l = null)
          : (l = await t.json())
        : (l = await t.text());
    } catch (a) {
      return { type: we.error, error: a };
    }
    return r === we.error
      ? {
          type: we.error,
          error: new Gc(t.status, t.statusText, l),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: we.data, data: l, statusCode: t.status, headers: t.headers };
  }
  if (r === we.error)
    return { type: we.error, error: t, statusCode: Ps(t) ? t.status : n };
  if (Iy(t)) {
    var o, i;
    return {
      type: we.deferred,
      deferredData: t,
      statusCode: (o = t.init) == null ? void 0 : o.status,
      headers:
        ((i = t.init) == null ? void 0 : i.headers) &&
        new Headers(t.init.headers),
    };
  }
  return { type: we.data, data: t, statusCode: n };
}
function Ly(e, t, r, n, o, i) {
  let l = e.headers.get("Location");
  if (
    (re(
      l,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !Xc.test(l))
  ) {
    let a = n.slice(0, n.findIndex((s) => s.route.id === r) + 1);
    (l = Ou(new URL(t.url), a, o, !0, l, i)), e.headers.set("Location", l);
  }
  return e;
}
function o0(e, t, r) {
  if (Xc.test(e)) {
    let n = e,
      o = n.startsWith("//") ? new URL(t.protocol + n) : new URL(n),
      i = mo(o.pathname, r) != null;
    if (o.origin === t.origin && i) return o.pathname + o.search + o.hash;
  }
  return e;
}
function Tn(e, t, r, n) {
  let o = e.createURL(yh(t)).toString(),
    i = { signal: r };
  if (n && It(n.formMethod)) {
    let { formMethod: l, formEncType: a } = n;
    (i.method = l.toUpperCase()),
      a === "application/json"
        ? ((i.headers = new Headers({ "Content-Type": a })),
          (i.body = JSON.stringify(n.json)))
        : a === "text/plain"
        ? (i.body = n.text)
        : a === "application/x-www-form-urlencoded" && n.formData
        ? (i.body = Iu(n.formData))
        : (i.body = n.formData);
  }
  return new Request(o, i);
}
function Iu(e) {
  let t = new URLSearchParams();
  for (let [r, n] of e.entries())
    t.append(r, typeof n == "string" ? n : n.name);
  return t;
}
function i0(e) {
  let t = new FormData();
  for (let [r, n] of e.entries()) t.append(r, n);
  return t;
}
function My(e, t, r, n, o, i) {
  let l = {},
    a = null,
    s,
    u = !1,
    c = {},
    d = n && vt(n[1]) ? n[1].error : void 0;
  return (
    r.forEach((m, h) => {
      let y = t[h].route.id;
      if (
        (re(!ln(m), "Cannot handle redirect results in processLoaderData"),
        vt(m))
      ) {
        let w = m.error;
        d !== void 0 && ((w = d), (d = void 0)), (a = a || {});
        {
          let k = Vn(e, y);
          a[k.route.id] == null && (a[k.route.id] = w);
        }
        (l[y] = void 0),
          u || ((u = !0), (s = Ps(m.error) ? m.error.status : 500)),
          m.headers && (c[y] = m.headers);
      } else
        on(m)
          ? (o.set(y, m.deferredData),
            (l[y] = m.deferredData.data),
            m.statusCode != null &&
              m.statusCode !== 200 &&
              !u &&
              (s = m.statusCode),
            m.headers && (c[y] = m.headers))
          : ((l[y] = m.data),
            m.statusCode && m.statusCode !== 200 && !u && (s = m.statusCode),
            m.headers && (c[y] = m.headers));
    }),
    d !== void 0 && n && ((a = { [n[0]]: d }), (l[n[0]] = void 0)),
    { loaderData: l, errors: a, statusCode: s || 200, loaderHeaders: c }
  );
}
function l0(e, t, r, n, o, i, l, a) {
  let { loaderData: s, errors: u } = My(t, r, n, o, a);
  for (let c = 0; c < i.length; c++) {
    let { key: d, match: m, controller: h } = i[c];
    re(
      l !== void 0 && l[c] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let y = l[c];
    if (!(h && h.signal.aborted))
      if (vt(y)) {
        let w = Vn(e.matches, m == null ? void 0 : m.route.id);
        (u && u[w.route.id]) || (u = $e({}, u, { [w.route.id]: y.error })),
          e.fetchers.delete(d);
      } else if (ln(y)) re(!1, "Unhandled fetcher revalidation redirect");
      else if (on(y)) re(!1, "Unhandled fetcher deferred data");
      else {
        let w = xr(y.data);
        e.fetchers.set(d, w);
      }
  }
  return { loaderData: s, errors: u };
}
function s0(e, t, r, n) {
  let o = $e({}, t);
  for (let i of r) {
    let l = i.route.id;
    if (
      (t.hasOwnProperty(l)
        ? t[l] !== void 0 && (o[l] = t[l])
        : e[l] !== void 0 && i.route.loader && (o[l] = e[l]),
      n && n.hasOwnProperty(l))
    )
      break;
  }
  return o;
}
function a0(e) {
  return e
    ? vt(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function Vn(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((n) => n.route.id === t) + 1) : [...e])
      .reverse()
      .find((n) => n.route.hasErrorBoundary === !0) || e[0]
  );
}
function u0(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((r) => r.index || !r.path || r.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function qe(e, t) {
  let {
      pathname: r,
      routeId: n,
      method: o,
      type: i,
      message: l,
    } = t === void 0 ? {} : t,
    a = "Unknown Server Error",
    s = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((a = "Bad Request"),
        i === "route-discovery"
          ? (s =
              'Unable to match URL "' +
              r +
              '" - the `unstable_patchRoutesOnMiss()` ' +
              (`function threw the following error:
` +
                l))
          : o && r && n
          ? (s =
              "You made a " +
              o +
              ' request to "' +
              r +
              '" but ' +
              ('did not provide a `loader` for route "' + n + '", ') +
              "so there is no way to handle the request.")
          : i === "defer-action"
          ? (s = "defer() is not supported in actions")
          : i === "invalid-body" && (s = "Unable to encode submission body"))
      : e === 403
      ? ((a = "Forbidden"),
        (s = 'Route "' + n + '" does not match URL "' + r + '"'))
      : e === 404
      ? ((a = "Not Found"), (s = 'No route matches URL "' + r + '"'))
      : e === 405 &&
        ((a = "Method Not Allowed"),
        o && r && n
          ? (s =
              "You made a " +
              o.toUpperCase() +
              ' request to "' +
              r +
              '" but ' +
              ('did not provide an `action` for route "' + n + '", ') +
              "so there is no way to handle the request.")
          : o && (s = 'Invalid request method "' + o.toUpperCase() + '"')),
    new Gc(e || 500, a, new Error(s), !0)
  );
}
function c0(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    if (ln(r)) return { result: r, idx: t };
  }
}
function yh(e) {
  let t = typeof e == "string" ? Gr(e) : e;
  return yn($e({}, t, { hash: "" }));
}
function Dy(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function Fy(e) {
  return typeof e == "object" && e != null && "then" in e;
}
function Oy(e) {
  return xh(e.result) && xy.has(e.result.status);
}
function on(e) {
  return e.type === we.deferred;
}
function vt(e) {
  return e.type === we.error;
}
function ln(e) {
  return (e && e.type) === we.redirect;
}
function Iy(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function xh(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function _y(e) {
  return yy.has(e.toLowerCase());
}
function It(e) {
  return gy.has(e.toLowerCase());
}
async function d0(e, t, r, n, o, i) {
  for (let l = 0; l < r.length; l++) {
    let a = r[l],
      s = t[l];
    if (!s) continue;
    let u = e.find((d) => d.route.id === s.route.id),
      c = u != null && !gh(u, s) && (i && i[s.route.id]) !== void 0;
    if (on(a) && (o || c)) {
      let d = n[l];
      re(d, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await wh(a, d, o).then((m) => {
          m && (r[l] = m || r[l]);
        });
    }
  }
}
async function wh(e, t, r) {
  if ((r === void 0 && (r = !1), !(await e.deferredData.resolveData(t)))) {
    if (r)
      try {
        return { type: we.data, data: e.deferredData.unwrappedData };
      } catch (o) {
        return { type: we.error, error: o };
      }
    return { type: we.data, data: e.deferredData.data };
  }
}
function Zc(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Ho(e, t) {
  let r = typeof t == "string" ? Gr(t).search : t.search;
  if (e[e.length - 1].route.index && Zc(r || "")) return e[e.length - 1];
  let n = ph(e);
  return n[n.length - 1];
}
function f0(e) {
  let {
    formMethod: t,
    formAction: r,
    formEncType: n,
    text: o,
    formData: i,
    json: l,
  } = e;
  if (!(!t || !r || !n)) {
    if (o != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: void 0,
        text: o,
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: i,
        json: void 0,
        text: void 0,
      };
    if (l !== void 0)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: l,
        text: void 0,
      };
  }
}
function Na(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Ay(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Fo(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function By(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function xr(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function zy(e, t) {
  try {
    let r = e.sessionStorage.getItem(hh);
    if (r) {
      let n = JSON.parse(r);
      for (let [o, i] of Object.entries(n || {}))
        i && Array.isArray(i) && t.set(o, new Set(i || []));
    }
  } catch {}
}
function Hy(e, t) {
  if (t.size > 0) {
    let r = {};
    for (let [n, o] of t) r[n] = [...o];
    try {
      e.sessionStorage.setItem(hh, JSON.stringify(r));
    } catch (n) {
      io(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + n + ")."
      );
    }
  }
}
/**
 * React Router v6.25.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ts() {
  return (
    (ts = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ts.apply(this, arguments)
  );
}
const Ns = f.createContext(null),
  kh = f.createContext(null),
  Cn = f.createContext(null),
  Jc = f.createContext(null),
  dr = f.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Sh = f.createContext(null);
function Uy(e, t) {
  let { relative: r } = t === void 0 ? {} : t;
  Li() || re(!1);
  let { basename: n, navigator: o } = f.useContext(Cn),
    { hash: i, pathname: l, search: a } = Ch(e, { relative: r }),
    s = l;
  return (
    n !== "/" && (s = l === "/" ? n : ir([n, l])),
    o.createHref({ pathname: s, search: a, hash: i })
  );
}
function Li() {
  return f.useContext(Jc) != null;
}
function ho() {
  return Li() || re(!1), f.useContext(Jc).location;
}
function Eh(e) {
  f.useContext(Cn).static || f.useLayoutEffect(e);
}
function qc() {
  let { isDataRoute: e } = f.useContext(dr);
  return e ? nx() : Vy();
}
function Vy() {
  Li() || re(!1);
  let e = f.useContext(Ns),
    { basename: t, future: r, navigator: n } = f.useContext(Cn),
    { matches: o } = f.useContext(dr),
    { pathname: i } = ho(),
    l = JSON.stringify(Kc(o, r.v7_relativeSplatPath)),
    a = f.useRef(!1);
  return (
    Eh(() => {
      a.current = !0;
    }),
    f.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          n.go(u);
          return;
        }
        let d = Yc(u, JSON.parse(l), i, c.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : ir([t, d.pathname])),
          (c.replace ? n.replace : n.push)(d, c.state, c);
      },
      [t, n, l, i, e]
    )
  );
}
const Wy = f.createContext(null);
function Qy(e) {
  let t = f.useContext(dr).outlet;
  return t && f.createElement(Wy.Provider, { value: e }, t);
}
function ed() {
  let { matches: e } = f.useContext(dr),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Ch(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { future: n } = f.useContext(Cn),
    { matches: o } = f.useContext(dr),
    { pathname: i } = ho(),
    l = JSON.stringify(Kc(o, n.v7_relativeSplatPath));
  return f.useMemo(() => Yc(e, JSON.parse(l), i, r === "path"), [e, l, i, r]);
}
function Ky(e, t, r, n) {
  Li() || re(!1);
  let { navigator: o } = f.useContext(Cn),
    { matches: i } = f.useContext(dr),
    l = i[i.length - 1],
    a = l ? l.params : {};
  l && l.pathname;
  let s = l ? l.pathnameBase : "/";
  l && l.route;
  let u = ho(),
    c;
  c = u;
  let d = c.pathname || "/",
    m = d;
  if (s !== "/") {
    let w = s.replace(/^\//, "").split("/");
    m = "/" + d.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let h = qr(e, { pathname: m });
  return Jy(
    h &&
      h.map((w) =>
        Object.assign({}, w, {
          params: Object.assign({}, a, w.params),
          pathname: ir([
            s,
            o.encodeLocation
              ? o.encodeLocation(w.pathname).pathname
              : w.pathname,
          ]),
          pathnameBase:
            w.pathnameBase === "/"
              ? s
              : ir([
                  s,
                  o.encodeLocation
                    ? o.encodeLocation(w.pathnameBase).pathname
                    : w.pathnameBase,
                ]),
        })
      ),
    i,
    r,
    n
  );
}
function Yy() {
  let e = rx(),
    t = Ps(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return f.createElement(
    f.Fragment,
    null,
    f.createElement("h2", null, "Unexpected Application Error!"),
    f.createElement("h3", { style: { fontStyle: "italic" } }, t),
    r ? f.createElement("pre", { style: o }, r) : null,
    null
  );
}
const Gy = f.createElement(Yy, null);
class Xy extends f.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location ||
      (r.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : r.error,
          location: r.location,
          revalidation: t.revalidation || r.revalidation,
        };
  }
  componentDidCatch(t, r) {
    console.error(
      "React Router caught the following error during render",
      t,
      r
    );
  }
  render() {
    return this.state.error !== void 0
      ? f.createElement(
          dr.Provider,
          { value: this.props.routeContext },
          f.createElement(Sh.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Zy(e) {
  let { routeContext: t, match: r, children: n } = e,
    o = f.useContext(Ns);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = r.route.id),
    f.createElement(dr.Provider, { value: t }, n)
  );
}
function Jy(e, t, r, n) {
  var o;
  if (
    (t === void 0 && (t = []),
    r === void 0 && (r = null),
    n === void 0 && (n = null),
    e == null)
  ) {
    var i;
    if ((i = r) != null && i.errors) e = r.matches;
    else return null;
  }
  let l = e,
    a = (o = r) == null ? void 0 : o.errors;
  if (a != null) {
    let c = l.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0
    );
    c >= 0 || re(!1), (l = l.slice(0, Math.min(l.length, c + 1)));
  }
  let s = !1,
    u = -1;
  if (r && n && n.v7_partialHydration)
    for (let c = 0; c < l.length; c++) {
      let d = l[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: m, errors: h } = r,
          y =
            d.route.loader &&
            m[d.route.id] === void 0 &&
            (!h || h[d.route.id] === void 0);
        if (d.route.lazy || y) {
          (s = !0), u >= 0 ? (l = l.slice(0, u + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((c, d, m) => {
    let h,
      y = !1,
      w = null,
      k = null;
    r &&
      ((h = a && d.route.id ? a[d.route.id] : void 0),
      (w = d.route.errorElement || Gy),
      s &&
        (u < 0 && m === 0
          ? ((y = !0), (k = null))
          : u === m &&
            ((y = !0), (k = d.route.hydrateFallbackElement || null))));
    let v = t.concat(l.slice(0, m + 1)),
      g = () => {
        let x;
        return (
          h
            ? (x = w)
            : y
            ? (x = k)
            : d.route.Component
            ? (x = f.createElement(d.route.Component, null))
            : d.route.element
            ? (x = d.route.element)
            : (x = c),
          f.createElement(Zy, {
            match: d,
            routeContext: { outlet: c, matches: v, isDataRoute: r != null },
            children: x,
          })
        );
      };
    return r && (d.route.ErrorBoundary || d.route.errorElement || m === 0)
      ? f.createElement(Xy, {
          location: r.location,
          revalidation: r.revalidation,
          component: w,
          error: h,
          children: g(),
          routeContext: { outlet: null, matches: v, isDataRoute: !0 },
        })
      : g();
  }, null);
}
var bh = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(bh || {}),
  rs = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(rs || {});
function qy(e) {
  let t = f.useContext(Ns);
  return t || re(!1), t;
}
function ex(e) {
  let t = f.useContext(kh);
  return t || re(!1), t;
}
function tx(e) {
  let t = f.useContext(dr);
  return t || re(!1), t;
}
function jh(e) {
  let t = tx(),
    r = t.matches[t.matches.length - 1];
  return r.route.id || re(!1), r.route.id;
}
function rx() {
  var e;
  let t = f.useContext(Sh),
    r = ex(rs.UseRouteError),
    n = jh(rs.UseRouteError);
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n];
}
function nx() {
  let { router: e } = qy(bh.UseNavigateStable),
    t = jh(rs.UseNavigateStable),
    r = f.useRef(!1);
  return (
    Eh(() => {
      r.current = !0;
    }),
    f.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          r.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, ts({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function $h(e) {
  return Qy(e.context);
}
function st(e) {
  re(!1);
}
function ox(e) {
  let {
    basename: t = "/",
    children: r = null,
    location: n,
    navigationType: o = Oe.Pop,
    navigator: i,
    static: l = !1,
    future: a,
  } = e;
  Li() && re(!1);
  let s = t.replace(/^\/*/, "/"),
    u = f.useMemo(
      () => ({
        basename: s,
        navigator: i,
        static: l,
        future: ts({ v7_relativeSplatPath: !1 }, a),
      }),
      [s, a, i, l]
    );
  typeof n == "string" && (n = Gr(n));
  let {
      pathname: c = "/",
      search: d = "",
      hash: m = "",
      state: h = null,
      key: y = "default",
    } = n,
    w = f.useMemo(() => {
      let k = mo(c, s);
      return k == null
        ? null
        : {
            location: { pathname: k, search: d, hash: m, state: h, key: y },
            navigationType: o,
          };
    }, [s, c, d, m, h, y, o]);
  return w == null
    ? null
    : f.createElement(
        Cn.Provider,
        { value: u },
        f.createElement(Jc.Provider, { children: r, value: w })
      );
}
new Promise(() => {});
function _u(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return (
    f.Children.forEach(e, (n, o) => {
      if (!f.isValidElement(n)) return;
      let i = [...t, o];
      if (n.type === f.Fragment) {
        r.push.apply(r, _u(n.props.children, i));
        return;
      }
      n.type !== st && re(!1), !n.props.index || !n.props.children || re(!1);
      let l = {
        id: n.props.id || i.join("-"),
        caseSensitive: n.props.caseSensitive,
        element: n.props.element,
        Component: n.props.Component,
        index: n.props.index,
        path: n.props.path,
        loader: n.props.loader,
        action: n.props.action,
        errorElement: n.props.errorElement,
        ErrorBoundary: n.props.ErrorBoundary,
        hasErrorBoundary:
          n.props.ErrorBoundary != null || n.props.errorElement != null,
        shouldRevalidate: n.props.shouldRevalidate,
        handle: n.props.handle,
        lazy: n.props.lazy,
      };
      n.props.children && (l.children = _u(n.props.children, i)), r.push(l);
    }),
    r
  );
}
function ix(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: f.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: f.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: f.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.25.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ki() {
  return (
    (ki = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ki.apply(this, arguments)
  );
}
function lx(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function sx(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function ax(e, t) {
  return e.button === 0 && (!t || t === "_self") && !sx(e);
}
const ux = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  cx = "6";
try {
  window.__reactRouterVersion = cx;
} catch {}
function dx(e, t) {
  return Ey({
    basename: t == null ? void 0 : t.basename,
    future: ki({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: K2({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || fx(),
    routes: e,
    mapRouteProperties: ix,
    unstable_dataStrategy: t == null ? void 0 : t.unstable_dataStrategy,
    unstable_patchRoutesOnMiss:
      t == null ? void 0 : t.unstable_patchRoutesOnMiss,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function fx() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = ki({}, t, { errors: px(t.errors) })), t;
}
function px(e) {
  if (!e) return null;
  let t = Object.entries(e),
    r = {};
  for (let [n, o] of t)
    if (o && o.__type === "RouteErrorResponse")
      r[n] = new Gc(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === "Error") {
      if (o.__subType) {
        let i = window[o.__subType];
        if (typeof i == "function")
          try {
            let l = new i(o.message);
            (l.stack = ""), (r[n] = l);
          } catch {}
      }
      if (r[n] == null) {
        let i = new Error(o.message);
        (i.stack = ""), (r[n] = i);
      }
    } else r[n] = o;
  return r;
}
const mx = f.createContext({ isTransitioning: !1 }),
  hx = f.createContext(new Map()),
  gx = "startTransition",
  p0 = Rl[gx],
  vx = "flushSync",
  m0 = Q2[vx];
function yx(e) {
  p0 ? p0(e) : e();
}
function Oo(e) {
  m0 ? m0(e) : e();
}
class xx {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, r) => {
        (this.resolve = (n) => {
          this.status === "pending" && ((this.status = "resolved"), t(n));
        }),
          (this.reject = (n) => {
            this.status === "pending" && ((this.status = "rejected"), r(n));
          });
      }));
  }
}
function wx(e) {
  let { fallbackElement: t, router: r, future: n } = e,
    [o, i] = f.useState(r.state),
    [l, a] = f.useState(),
    [s, u] = f.useState({ isTransitioning: !1 }),
    [c, d] = f.useState(),
    [m, h] = f.useState(),
    [y, w] = f.useState(),
    k = f.useRef(new Map()),
    { v7_startTransition: v } = n || {},
    g = f.useCallback(
      (P) => {
        v ? yx(P) : P();
      },
      [v]
    ),
    x = f.useCallback(
      (P, j) => {
        let {
          deletedFetchers: R,
          unstable_flushSync: L,
          unstable_viewTransitionOpts: _,
        } = j;
        R.forEach((Y) => k.current.delete(Y)),
          P.fetchers.forEach((Y, K) => {
            Y.data !== void 0 && k.current.set(K, Y.data);
          });
        let W =
          r.window == null ||
          r.window.document == null ||
          typeof r.window.document.startViewTransition != "function";
        if (!_ || W) {
          L ? Oo(() => i(P)) : g(() => i(P));
          return;
        }
        if (L) {
          Oo(() => {
            m && (c && c.resolve(), m.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: _.currentLocation,
                nextLocation: _.nextLocation,
              });
          });
          let Y = r.window.document.startViewTransition(() => {
            Oo(() => i(P));
          });
          Y.finished.finally(() => {
            Oo(() => {
              d(void 0), h(void 0), a(void 0), u({ isTransitioning: !1 });
            });
          }),
            Oo(() => h(Y));
          return;
        }
        m
          ? (c && c.resolve(),
            m.skipTransition(),
            w({
              state: P,
              currentLocation: _.currentLocation,
              nextLocation: _.nextLocation,
            }))
          : (a(P),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: _.currentLocation,
              nextLocation: _.nextLocation,
            }));
      },
      [r.window, m, c, k, g]
    );
  f.useLayoutEffect(() => r.subscribe(x), [r, x]),
    f.useEffect(() => {
      s.isTransitioning && !s.flushSync && d(new xx());
    }, [s]),
    f.useEffect(() => {
      if (c && l && r.window) {
        let P = l,
          j = c.promise,
          R = r.window.document.startViewTransition(async () => {
            g(() => i(P)), await j;
          });
        R.finished.finally(() => {
          d(void 0), h(void 0), a(void 0), u({ isTransitioning: !1 });
        }),
          h(R);
      }
    }, [g, l, c, r.window]),
    f.useEffect(() => {
      c && l && o.location.key === l.location.key && c.resolve();
    }, [c, m, o.location, l]),
    f.useEffect(() => {
      !s.isTransitioning &&
        y &&
        (a(y.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: y.currentLocation,
          nextLocation: y.nextLocation,
        }),
        w(void 0));
    }, [s.isTransitioning, y]),
    f.useEffect(() => {}, []);
  let E = f.useMemo(
      () => ({
        createHref: r.createHref,
        encodeLocation: r.encodeLocation,
        go: (P) => r.navigate(P),
        push: (P, j, R) =>
          r.navigate(P, {
            state: j,
            preventScrollReset: R == null ? void 0 : R.preventScrollReset,
          }),
        replace: (P, j, R) =>
          r.navigate(P, {
            replace: !0,
            state: j,
            preventScrollReset: R == null ? void 0 : R.preventScrollReset,
          }),
      }),
      [r]
    ),
    $ = r.basename || "/",
    S = f.useMemo(
      () => ({ router: r, navigator: E, static: !1, basename: $ }),
      [r, E, $]
    );
  return f.createElement(
    f.Fragment,
    null,
    f.createElement(
      Ns.Provider,
      { value: S },
      f.createElement(
        kh.Provider,
        { value: o },
        f.createElement(
          hx.Provider,
          { value: k.current },
          f.createElement(
            mx.Provider,
            { value: s },
            f.createElement(
              ox,
              {
                basename: $,
                location: o.location,
                navigationType: o.historyAction,
                navigator: E,
                future: { v7_relativeSplatPath: r.future.v7_relativeSplatPath },
              },
              o.initialized || r.future.v7_partialHydration
                ? f.createElement(kx, {
                    routes: r.routes,
                    future: r.future,
                    state: o,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function kx(e) {
  let { routes: t, future: r, state: n } = e;
  return Ky(t, void 0, n, r);
}
const Sx =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Ex = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  de = f.forwardRef(function (t, r) {
    let {
        onClick: n,
        relative: o,
        reloadDocument: i,
        replace: l,
        state: a,
        target: s,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: d,
      } = t,
      m = lx(t, ux),
      { basename: h } = f.useContext(Cn),
      y,
      w = !1;
    if (typeof u == "string" && Ex.test(u) && ((y = u), Sx))
      try {
        let x = new URL(window.location.href),
          E = u.startsWith("//") ? new URL(x.protocol + u) : new URL(u),
          $ = mo(E.pathname, h);
        E.origin === x.origin && $ != null
          ? (u = $ + E.search + E.hash)
          : (w = !0);
      } catch {}
    let k = Uy(u, { relative: o }),
      v = Cx(u, {
        replace: l,
        state: a,
        target: s,
        preventScrollReset: c,
        relative: o,
        unstable_viewTransition: d,
      });
    function g(x) {
      n && n(x), x.defaultPrevented || v(x);
    }
    return f.createElement(
      "a",
      ki({}, m, { href: y || k, onClick: w || i ? n : g, ref: r, target: s })
    );
  });
var h0;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(h0 || (h0 = {}));
var g0;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(g0 || (g0 = {}));
function Cx(e, t) {
  let {
      target: r,
      replace: n,
      state: o,
      preventScrollReset: i,
      relative: l,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    s = qc(),
    u = ho(),
    c = Ch(e, { relative: l });
  return f.useCallback(
    (d) => {
      if (ax(d, r)) {
        d.preventDefault();
        let m = n !== void 0 ? n : yn(u) === yn(c);
        s(e, {
          replace: m,
          state: o,
          preventScrollReset: i,
          relative: l,
          unstable_viewTransition: a,
        });
      }
    },
    [u, s, c, n, o, r, e, i, l, a]
  );
}
const Ph = typeof document < "u" ? D.useLayoutEffect : () => {};
function bx(e) {
  const t = f.useRef(null);
  return (
    Ph(() => {
      t.current = e;
    }, [e]),
    f.useCallback((...r) => {
      const n = t.current;
      return n == null ? void 0 : n(...r);
    }, [])
  );
}
const Mi = (e) => {
    var t;
    return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0
      ? t
      : document;
  },
  sn = (e) =>
    e && "window" in e && e.window === e ? e : Mi(e).defaultView || window;
function Nh(e) {
  var t,
    r,
    n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (r = Nh(e[t])) && (n && (n += " "), (n += r));
    } else for (r in e) e[r] && (n && (n += " "), (n += r));
  return n;
}
function Pr() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
    (e = arguments[r]) && (t = Nh(e)) && (n && (n += " "), (n += t));
  return n;
}
function jx(e) {
  var t;
  return typeof window > "u" || window.navigator == null
    ? !1
    : ((t = window.navigator.userAgentData) === null || t === void 0
        ? void 0
        : t.brands.some((r) => e.test(r.brand))) ||
        e.test(window.navigator.userAgent);
}
function $x(e) {
  var t;
  return typeof window < "u" && window.navigator != null
    ? e.test(
        ((t = window.navigator.userAgentData) === null || t === void 0
          ? void 0
          : t.platform) || window.navigator.platform
      )
    : !1;
}
function Px() {
  return $x(/^Mac/i);
}
function Nx() {
  return jx(/Android/i);
}
function Rx(e) {
  return e.mozInputSource === 0 && e.isTrusted
    ? !0
    : Nx() && e.pointerType
    ? e.type === "click" && e.buttons === 1
    : e.detail === 0 && !e.pointerType;
}
class Tx {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    (this.defaultPrevented = !0), this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), (this.isPropagationStopped = () => !0);
  }
  isPropagationStopped() {
    return !1;
  }
  persist() {}
  constructor(t, r) {
    (this.nativeEvent = r),
      (this.target = r.target),
      (this.currentTarget = r.currentTarget),
      (this.relatedTarget = r.relatedTarget),
      (this.bubbles = r.bubbles),
      (this.cancelable = r.cancelable),
      (this.defaultPrevented = r.defaultPrevented),
      (this.eventPhase = r.eventPhase),
      (this.isTrusted = r.isTrusted),
      (this.timeStamp = r.timeStamp),
      (this.type = t);
  }
}
function Rh(e) {
  let t = f.useRef({ isFocused: !1, observer: null });
  Ph(() => {
    const n = t.current;
    return () => {
      n.observer && (n.observer.disconnect(), (n.observer = null));
    };
  }, []);
  let r = bx((n) => {
    e == null || e(n);
  });
  return f.useCallback(
    (n) => {
      if (
        n.target instanceof HTMLButtonElement ||
        n.target instanceof HTMLInputElement ||
        n.target instanceof HTMLTextAreaElement ||
        n.target instanceof HTMLSelectElement
      ) {
        t.current.isFocused = !0;
        let o = n.target,
          i = (l) => {
            (t.current.isFocused = !1),
              o.disabled && r(new Tx("blur", l)),
              t.current.observer &&
                (t.current.observer.disconnect(), (t.current.observer = null));
          };
        o.addEventListener("focusout", i, { once: !0 }),
          (t.current.observer = new MutationObserver(() => {
            if (t.current.isFocused && o.disabled) {
              var l;
              (l = t.current.observer) === null ||
                l === void 0 ||
                l.disconnect();
              let a =
                o === document.activeElement ? null : document.activeElement;
              o.dispatchEvent(new FocusEvent("blur", { relatedTarget: a })),
                o.dispatchEvent(
                  new FocusEvent("focusout", { bubbles: !0, relatedTarget: a })
                );
            }
          })),
          t.current.observer.observe(o, {
            attributes: !0,
            attributeFilter: ["disabled"],
          });
      }
    },
    [r]
  );
}
function Lx(e) {
  let { isDisabled: t, onFocus: r, onBlur: n, onFocusChange: o } = e;
  const i = f.useCallback(
      (s) => {
        if (s.target === s.currentTarget) return n && n(s), o && o(!1), !0;
      },
      [n, o]
    ),
    l = Rh(i),
    a = f.useCallback(
      (s) => {
        const u = Mi(s.target);
        s.target === s.currentTarget &&
          u.activeElement === s.target &&
          (r && r(s), o && o(!0), l(s));
      },
      [o, r, l]
    );
  return {
    focusProps: {
      onFocus: !t && (r || o || n) ? a : void 0,
      onBlur: !t && (n || o) ? i : void 0,
    },
  };
}
let Di = null,
  Au = new Set(),
  qo = new Map(),
  xn = !1,
  Bu = !1;
const Mx = { Tab: !0, Escape: !0 };
function td(e, t) {
  for (let r of Au) r(e, t);
}
function Dx(e) {
  return !(
    e.metaKey ||
    (!Px() && e.altKey) ||
    e.ctrlKey ||
    e.key === "Control" ||
    e.key === "Shift" ||
    e.key === "Meta"
  );
}
function ns(e) {
  (xn = !0), Dx(e) && ((Di = "keyboard"), td("keyboard", e));
}
function Nt(e) {
  (Di = "pointer"),
    (e.type === "mousedown" || e.type === "pointerdown") &&
      ((xn = !0), td("pointer", e));
}
function Th(e) {
  Rx(e) && ((xn = !0), (Di = "virtual"));
}
function Lh(e) {
  e.target === window ||
    e.target === document ||
    (!xn && !Bu && ((Di = "virtual"), td("virtual", e)), (xn = !1), (Bu = !1));
}
function Mh() {
  (xn = !1), (Bu = !0);
}
function zu(e) {
  if (typeof window > "u" || qo.get(sn(e))) return;
  const t = sn(e),
    r = Mi(e);
  let n = t.HTMLElement.prototype.focus;
  (t.HTMLElement.prototype.focus = function () {
    (xn = !0), n.apply(this, arguments);
  }),
    r.addEventListener("keydown", ns, !0),
    r.addEventListener("keyup", ns, !0),
    r.addEventListener("click", Th, !0),
    t.addEventListener("focus", Lh, !0),
    t.addEventListener("blur", Mh, !1),
    typeof PointerEvent < "u"
      ? (r.addEventListener("pointerdown", Nt, !0),
        r.addEventListener("pointermove", Nt, !0),
        r.addEventListener("pointerup", Nt, !0))
      : (r.addEventListener("mousedown", Nt, !0),
        r.addEventListener("mousemove", Nt, !0),
        r.addEventListener("mouseup", Nt, !0)),
    t.addEventListener(
      "beforeunload",
      () => {
        Dh(e);
      },
      { once: !0 }
    ),
    qo.set(t, { focus: n });
}
const Dh = (e, t) => {
  const r = sn(e),
    n = Mi(e);
  t && n.removeEventListener("DOMContentLoaded", t),
    qo.has(r) &&
      ((r.HTMLElement.prototype.focus = qo.get(r).focus),
      n.removeEventListener("keydown", ns, !0),
      n.removeEventListener("keyup", ns, !0),
      n.removeEventListener("click", Th, !0),
      r.removeEventListener("focus", Lh, !0),
      r.removeEventListener("blur", Mh, !1),
      typeof PointerEvent < "u"
        ? (n.removeEventListener("pointerdown", Nt, !0),
          n.removeEventListener("pointermove", Nt, !0),
          n.removeEventListener("pointerup", Nt, !0))
        : (n.removeEventListener("mousedown", Nt, !0),
          n.removeEventListener("mousemove", Nt, !0),
          n.removeEventListener("mouseup", Nt, !0)),
      qo.delete(r));
};
function Fx(e) {
  const t = Mi(e);
  let r;
  return (
    t.readyState !== "loading"
      ? zu(e)
      : ((r = () => {
          zu(e);
        }),
        t.addEventListener("DOMContentLoaded", r)),
    () => Dh(e, r)
  );
}
typeof document < "u" && Fx();
function Fh() {
  return Di !== "pointer";
}
const Ox = new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset",
]);
function Ix(e, t, r) {
  var n;
  const o =
      typeof window < "u"
        ? sn(r == null ? void 0 : r.target).HTMLInputElement
        : HTMLInputElement,
    i =
      typeof window < "u"
        ? sn(r == null ? void 0 : r.target).HTMLTextAreaElement
        : HTMLTextAreaElement,
    l =
      typeof window < "u"
        ? sn(r == null ? void 0 : r.target).HTMLElement
        : HTMLElement,
    a =
      typeof window < "u"
        ? sn(r == null ? void 0 : r.target).KeyboardEvent
        : KeyboardEvent;
  return (
    (e =
      e ||
      ((r == null ? void 0 : r.target) instanceof o &&
        !Ox.has(
          r == null || (n = r.target) === null || n === void 0 ? void 0 : n.type
        )) ||
      (r == null ? void 0 : r.target) instanceof i ||
      ((r == null ? void 0 : r.target) instanceof l &&
        (r == null ? void 0 : r.target.isContentEditable))),
    !(e && t === "keyboard" && r instanceof a && !Mx[r.key])
  );
}
function _x(e, t, r) {
  zu(),
    f.useEffect(() => {
      let n = (o, i) => {
        Ix(!!(r != null && r.isTextInput), o, i) && e(Fh());
      };
      return (
        Au.add(n),
        () => {
          Au.delete(n);
        }
      );
    }, t);
}
function Ax(e) {
  let {
      isDisabled: t,
      onBlurWithin: r,
      onFocusWithin: n,
      onFocusWithinChange: o,
    } = e,
    i = f.useRef({ isFocusWithin: !1 }),
    l = f.useCallback(
      (u) => {
        i.current.isFocusWithin &&
          !u.currentTarget.contains(u.relatedTarget) &&
          ((i.current.isFocusWithin = !1), r && r(u), o && o(!1));
      },
      [r, o, i]
    ),
    a = Rh(l),
    s = f.useCallback(
      (u) => {
        !i.current.isFocusWithin &&
          document.activeElement === u.target &&
          (n && n(u), o && o(!0), (i.current.isFocusWithin = !0), a(u));
      },
      [n, o, a]
    );
  return t
    ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
    : { focusWithinProps: { onFocus: s, onBlur: l } };
}
let os = !1,
  Ra = 0;
function Hu() {
  (os = !0),
    setTimeout(() => {
      os = !1;
    }, 50);
}
function v0(e) {
  e.pointerType === "touch" && Hu();
}
function Bx() {
  if (!(typeof document > "u"))
    return (
      typeof PointerEvent < "u"
        ? document.addEventListener("pointerup", v0)
        : document.addEventListener("touchend", Hu),
      Ra++,
      () => {
        Ra--,
          !(Ra > 0) &&
            (typeof PointerEvent < "u"
              ? document.removeEventListener("pointerup", v0)
              : document.removeEventListener("touchend", Hu));
      }
    );
}
function Rs(e) {
  let { onHoverStart: t, onHoverChange: r, onHoverEnd: n, isDisabled: o } = e,
    [i, l] = f.useState(!1),
    a = f.useRef({
      isHovered: !1,
      ignoreEmulatedMouseEvents: !1,
      pointerType: "",
      target: null,
    }).current;
  f.useEffect(Bx, []);
  let { hoverProps: s, triggerHoverEnd: u } = f.useMemo(() => {
    let c = (h, y) => {
        if (
          ((a.pointerType = y),
          o ||
            y === "touch" ||
            a.isHovered ||
            !h.currentTarget.contains(h.target))
        )
          return;
        a.isHovered = !0;
        let w = h.currentTarget;
        (a.target = w),
          t && t({ type: "hoverstart", target: w, pointerType: y }),
          r && r(!0),
          l(!0);
      },
      d = (h, y) => {
        if (
          ((a.pointerType = ""),
          (a.target = null),
          y === "touch" || !a.isHovered)
        )
          return;
        a.isHovered = !1;
        let w = h.currentTarget;
        n && n({ type: "hoverend", target: w, pointerType: y }),
          r && r(!1),
          l(!1);
      },
      m = {};
    return (
      typeof PointerEvent < "u"
        ? ((m.onPointerEnter = (h) => {
            (os && h.pointerType === "mouse") || c(h, h.pointerType);
          }),
          (m.onPointerLeave = (h) => {
            !o && h.currentTarget.contains(h.target) && d(h, h.pointerType);
          }))
        : ((m.onTouchStart = () => {
            a.ignoreEmulatedMouseEvents = !0;
          }),
          (m.onMouseEnter = (h) => {
            !a.ignoreEmulatedMouseEvents && !os && c(h, "mouse"),
              (a.ignoreEmulatedMouseEvents = !1);
          }),
          (m.onMouseLeave = (h) => {
            !o && h.currentTarget.contains(h.target) && d(h, "mouse");
          })),
      { hoverProps: m, triggerHoverEnd: d }
    );
  }, [t, r, n, o, a]);
  return (
    f.useEffect(() => {
      o && u({ currentTarget: a.target }, a.pointerType);
    }, [o]),
    { hoverProps: s, isHovered: i }
  );
}
function Ts(e = {}) {
  let { autoFocus: t = !1, isTextInput: r, within: n } = e,
    o = f.useRef({ isFocused: !1, isFocusVisible: t || Fh() }),
    [i, l] = f.useState(!1),
    [a, s] = f.useState(() => o.current.isFocused && o.current.isFocusVisible),
    u = f.useCallback(
      () => s(o.current.isFocused && o.current.isFocusVisible),
      []
    ),
    c = f.useCallback(
      (h) => {
        (o.current.isFocused = h), l(h), u();
      },
      [u]
    );
  _x(
    (h) => {
      (o.current.isFocusVisible = h), u();
    },
    [],
    { isTextInput: r }
  );
  let { focusProps: d } = Lx({ isDisabled: n, onFocusChange: c }),
    { focusWithinProps: m } = Ax({ isDisabled: !n, onFocusWithinChange: c });
  return { isFocused: i, isFocusVisible: a, focusProps: n ? m : d };
}
var zx = Object.defineProperty,
  Hx = (e, t, r) =>
    t in e
      ? zx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Ta = (e, t, r) => (Hx(e, typeof t != "symbol" ? t + "" : t, r), r);
let Ux = class {
    constructor() {
      Ta(this, "current", this.detect()),
        Ta(this, "handoffState", "pending"),
        Ta(this, "currentId", 0);
    }
    set(t) {
      this.current !== t &&
        ((this.handoffState = "pending"),
        (this.currentId = 0),
        (this.current = t));
    }
    reset() {
      this.set(this.detect());
    }
    nextId() {
      return ++this.currentId;
    }
    get isServer() {
      return this.current === "server";
    }
    get isClient() {
      return this.current === "client";
    }
    detect() {
      return typeof window > "u" || typeof document > "u" ? "server" : "client";
    }
    handoff() {
      this.handoffState === "pending" && (this.handoffState = "complete");
    }
    get isHandoffComplete() {
      return this.handoffState === "complete";
    }
  },
  dn = new Ux();
function fr(e) {
  return dn.isServer
    ? null
    : e instanceof Node
    ? e.ownerDocument
    : e != null && e.hasOwnProperty("current") && e.current instanceof Node
    ? e.current.ownerDocument
    : document;
}
function Ls(e) {
  typeof queueMicrotask == "function"
    ? queueMicrotask(e)
    : Promise.resolve()
        .then(e)
        .catch((t) =>
          setTimeout(() => {
            throw t;
          })
        );
}
function Zt() {
  let e = [],
    t = {
      addEventListener(r, n, o, i) {
        return (
          r.addEventListener(n, o, i),
          t.add(() => r.removeEventListener(n, o, i))
        );
      },
      requestAnimationFrame(...r) {
        let n = requestAnimationFrame(...r);
        return t.add(() => cancelAnimationFrame(n));
      },
      nextFrame(...r) {
        return t.requestAnimationFrame(() => t.requestAnimationFrame(...r));
      },
      setTimeout(...r) {
        let n = setTimeout(...r);
        return t.add(() => clearTimeout(n));
      },
      microTask(...r) {
        let n = { current: !0 };
        return (
          Ls(() => {
            n.current && r[0]();
          }),
          t.add(() => {
            n.current = !1;
          })
        );
      },
      style(r, n, o) {
        let i = r.style.getPropertyValue(n);
        return (
          Object.assign(r.style, { [n]: o }),
          this.add(() => {
            Object.assign(r.style, { [n]: i });
          })
        );
      },
      group(r) {
        let n = Zt();
        return r(n), this.add(() => n.dispose());
      },
      add(r) {
        return (
          e.includes(r) || e.push(r),
          () => {
            let n = e.indexOf(r);
            if (n >= 0) for (let o of e.splice(n, 1)) o();
          }
        );
      },
      dispose() {
        for (let r of e.splice(0)) r();
      },
    };
  return t;
}
function bn() {
  let [e] = f.useState(Zt);
  return f.useEffect(() => () => e.dispose(), [e]), e;
}
let ue = (e, t) => {
  dn.isServer ? f.useEffect(e, t) : f.useLayoutEffect(e, t);
};
function pr(e) {
  let t = f.useRef(e);
  return (
    ue(() => {
      t.current = e;
    }, [e]),
    t
  );
}
let X = function (e) {
  let t = pr(e);
  return D.useCallback((...r) => t.current(...r), [t]);
};
function Vx(e) {
  let t = e.width / 2,
    r = e.height / 2;
  return {
    top: e.clientY - r,
    right: e.clientX + t,
    bottom: e.clientY + r,
    left: e.clientX - t,
  };
}
function Wx(e, t) {
  return !(
    !e ||
    !t ||
    e.right < t.left ||
    e.left > t.right ||
    e.bottom < t.top ||
    e.top > t.bottom
  );
}
function Oh({ disabled: e = !1 } = {}) {
  let t = f.useRef(null),
    [r, n] = f.useState(!1),
    o = bn(),
    i = X(() => {
      (t.current = null), n(!1), o.dispose();
    }),
    l = X((a) => {
      if ((o.dispose(), t.current === null)) {
        (t.current = a.currentTarget), n(!0);
        {
          let s = fr(a.currentTarget);
          o.addEventListener(s, "pointerup", i, !1),
            o.addEventListener(
              s,
              "pointermove",
              (u) => {
                if (t.current) {
                  let c = Vx(u);
                  n(Wx(c, t.current.getBoundingClientRect()));
                }
              },
              !1
            ),
            o.addEventListener(s, "pointercancel", i, !1);
        }
      }
    });
  return {
    pressed: r,
    pressProps: e ? {} : { onPointerDown: l, onPointerUp: i, onClick: i },
  };
}
let Qx = f.createContext(void 0);
function Ms() {
  return f.useContext(Qx);
}
function Uu(...e) {
  return Array.from(
    new Set(e.flatMap((t) => (typeof t == "string" ? t.split(" ") : [])))
  )
    .filter(Boolean)
    .join(" ");
}
function mt(e, t, ...r) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...r) : o;
  }
  let n = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t
    )
      .map((o) => `"${o}"`)
      .join(", ")}.`
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(n, mt), n);
}
var Hr = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(Hr || {}),
  Nr = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(Nr || {});
function Se({
  ourProps: e,
  theirProps: t,
  slot: r,
  defaultTag: n,
  features: o,
  visible: i = !0,
  name: l,
  mergeRefs: a,
}) {
  a = a ?? Kx;
  let s = _h(t, e);
  if (i) return al(s, r, n, l, a);
  let u = o ?? 0;
  if (u & 2) {
    let { static: c = !1, ...d } = s;
    if (c) return al(d, r, n, l, a);
  }
  if (u & 1) {
    let { unmount: c = !0, ...d } = s;
    return mt(c ? 0 : 1, {
      0() {
        return null;
      },
      1() {
        return al({ ...d, hidden: !0, style: { display: "none" } }, r, n, l, a);
      },
    });
  }
  return al(s, r, n, l, a);
}
function al(e, t = {}, r, n, o) {
  let {
      as: i = r,
      children: l,
      refName: a = "ref",
      ...s
    } = La(e, ["unmount", "static"]),
    u = e.ref !== void 0 ? { [a]: e.ref } : {},
    c = typeof l == "function" ? l(t) : l;
  "className" in s &&
    s.className &&
    typeof s.className == "function" &&
    (s.className = s.className(t)),
    s["aria-labelledby"] &&
      s["aria-labelledby"] === s.id &&
      (s["aria-labelledby"] = void 0);
  let d = {};
  if (t) {
    let m = !1,
      h = [];
    for (let [y, w] of Object.entries(t))
      typeof w == "boolean" && (m = !0),
        w === !0 && h.push(y.replace(/([A-Z])/g, (k) => `-${k.toLowerCase()}`));
    if (m) {
      d["data-headlessui-state"] = h.join(" ");
      for (let y of h) d[`data-${y}`] = "";
    }
  }
  if (
    i === f.Fragment &&
    (Object.keys(Sr(s)).length > 0 || Object.keys(Sr(d)).length > 0)
  )
    if (!f.isValidElement(c) || (Array.isArray(c) && c.length > 1)) {
      if (Object.keys(Sr(s)).length > 0)
        throw new Error(
          [
            'Passing props on "Fragment"!',
            "",
            `The current component <${n} /> is rendering a "Fragment".`,
            "However we need to passthrough the following props:",
            Object.keys(Sr(s))
              .concat(Object.keys(Sr(d)))
              .map((m) => `  - ${m}`).join(`
`),
            "",
            "You can apply a few solutions:",
            [
              'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
              "Render a single element as the child so that we can forward the props onto that element.",
            ].map((m) => `  - ${m}`).join(`
`),
          ].join(`
`)
        );
    } else {
      let m = c.props,
        h = m == null ? void 0 : m.className,
        y =
          typeof h == "function"
            ? (...v) => Uu(h(...v), s.className)
            : Uu(h, s.className),
        w = y ? { className: y } : {},
        k = _h(c.props, Sr(La(s, ["ref"])));
      for (let v in d) v in k && delete d[v];
      return f.cloneElement(
        c,
        Object.assign({}, k, d, u, { ref: o(c.ref, u.ref) }, w)
      );
    }
  return f.createElement(
    i,
    Object.assign(
      {},
      La(s, ["ref"]),
      i !== f.Fragment && u,
      i !== f.Fragment && d
    ),
    c
  );
}
function Ih() {
  let e = f.useRef([]),
    t = f.useCallback((r) => {
      for (let n of e.current)
        n != null && (typeof n == "function" ? n(r) : (n.current = r));
    }, []);
  return (...r) => {
    if (!r.every((n) => n == null)) return (e.current = r), t;
  };
}
function Kx(...e) {
  return e.every((t) => t == null)
    ? void 0
    : (t) => {
        for (let r of e)
          r != null && (typeof r == "function" ? r(t) : (r.current = t));
      };
}
function _h(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
    r = {};
  for (let n of e)
    for (let o in n)
      o.startsWith("on") && typeof n[o] == "function"
        ? (r[o] != null || (r[o] = []), r[o].push(n[o]))
        : (t[o] = n[o]);
  if (t.disabled || t["aria-disabled"])
    for (let n in r)
      /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(n) &&
        (r[n] = [
          (o) => {
            var i;
            return (i = o == null ? void 0 : o.preventDefault) == null
              ? void 0
              : i.call(o);
          },
        ]);
  for (let n in r)
    Object.assign(t, {
      [n](o, ...i) {
        let l = r[n];
        for (let a of l) {
          if (
            (o instanceof Event ||
              (o == null ? void 0 : o.nativeEvent) instanceof Event) &&
            o.defaultPrevented
          )
            return;
          a(o, ...i);
        }
      },
    });
  return t;
}
function lo(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
    r = {};
  for (let n of e)
    for (let o in n)
      o.startsWith("on") && typeof n[o] == "function"
        ? (r[o] != null || (r[o] = []), r[o].push(n[o]))
        : (t[o] = n[o]);
  for (let n in r)
    Object.assign(t, {
      [n](...o) {
        let i = r[n];
        for (let l of i) l == null || l(...o);
      },
    });
  return t;
}
function ve(e) {
  var t;
  return Object.assign(f.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name,
  });
}
function Sr(e) {
  let t = Object.assign({}, e);
  for (let r in t) t[r] === void 0 && delete t[r];
  return t;
}
function La(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t) n in r && delete r[n];
  return r;
}
function Yx(e, t, r) {
  let [n, o] = f.useState(r),
    i = e !== void 0,
    l = f.useRef(i),
    a = f.useRef(!1),
    s = f.useRef(!1);
  return (
    i && !l.current && !a.current
      ? ((a.current = !0),
        (l.current = i),
        console.error(
          "A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen."
        ))
      : !i &&
        l.current &&
        !s.current &&
        ((s.current = !0),
        (l.current = i),
        console.error(
          "A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen."
        )),
    [i ? e : n, X((u) => (i || o(u), t == null ? void 0 : t(u)))]
  );
}
function Gx(e) {
  let [t] = f.useState(e);
  return t;
}
function Ah(e = {}, t = null, r = []) {
  for (let [n, o] of Object.entries(e)) zh(r, Bh(t, n), o);
  return r;
}
function Bh(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function zh(e, t, r) {
  if (Array.isArray(r))
    for (let [n, o] of r.entries()) zh(e, Bh(t, n.toString()), o);
  else
    r instanceof Date
      ? e.push([t, r.toISOString()])
      : typeof r == "boolean"
      ? e.push([t, r ? "1" : "0"])
      : typeof r == "string"
      ? e.push([t, r])
      : typeof r == "number"
      ? e.push([t, `${r}`])
      : r == null
      ? e.push([t, ""])
      : Ah(r, t, e);
}
function Xx(e) {
  var t, r;
  let n = (t = e == null ? void 0 : e.form) != null ? t : e.closest("form");
  if (n) {
    for (let o of n.elements)
      if (
        o !== e &&
        ((o.tagName === "INPUT" && o.type === "submit") ||
          (o.tagName === "BUTTON" && o.type === "submit") ||
          (o.nodeName === "INPUT" && o.type === "image"))
      ) {
        o.click();
        return;
      }
    (r = n.requestSubmit) == null || r.call(n);
  }
}
let Zx = "span";
var so = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(so || {});
function Jx(e, t) {
  var r;
  let { features: n = 1, ...o } = e,
    i = {
      ref: t,
      "aria-hidden":
        (n & 2) === 2 ? !0 : (r = o["aria-hidden"]) != null ? r : void 0,
      hidden: (n & 4) === 4 ? !0 : void 0,
      style: {
        position: "fixed",
        top: 1,
        left: 1,
        width: 1,
        height: 0,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        borderWidth: "0",
        ...((n & 4) === 4 && (n & 2) !== 2 && { display: "none" }),
      },
    };
  return Se({
    ourProps: i,
    theirProps: o,
    slot: {},
    defaultTag: Zx,
    name: "Hidden",
  });
}
let Si = ve(Jx),
  qx = f.createContext(null);
function ew({ children: e }) {
  let t = f.useContext(qx);
  if (!t) return D.createElement(D.Fragment, null, e);
  let { target: r } = t;
  return r ? ot.createPortal(D.createElement(D.Fragment, null, e), r) : null;
}
function tw({ data: e, form: t, disabled: r, onReset: n, overrides: o }) {
  let [i, l] = f.useState(null),
    a = bn();
  return (
    f.useEffect(() => {
      if (n && i) return a.addEventListener(i, "reset", n);
    }, [i, t, n]),
    D.createElement(
      ew,
      null,
      D.createElement(rw, { setForm: l, formId: t }),
      Ah(e).map(([s, u]) =>
        D.createElement(Si, {
          features: so.Hidden,
          ...Sr({
            key: s,
            as: "input",
            type: "hidden",
            hidden: !0,
            readOnly: !0,
            form: t,
            disabled: r,
            name: s,
            value: u,
            ...o,
          }),
        })
      )
    )
  );
}
function rw({ setForm: e, formId: t }) {
  return (
    f.useEffect(() => {
      if (t) {
        let r = document.getElementById(t);
        r && e(r);
      }
    }, [e, t]),
    t
      ? null
      : D.createElement(Si, {
          features: so.Hidden,
          as: "input",
          type: "hidden",
          hidden: !0,
          readOnly: !0,
          ref: (r) => {
            if (!r) return;
            let n = r.closest("form");
            n && e(n);
          },
        })
  );
}
let nw = f.createContext(void 0);
function Hh() {
  return f.useContext(nw);
}
function Ds(e) {
  let t = e.parentElement,
    r = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (r = t), (t = t.parentElement);
  let n = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return n && ow(r) ? !1 : n;
}
function ow(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let Uh = Symbol();
function Vh(e, t = !0) {
  return Object.assign(e, { [Uh]: t });
}
function De(...e) {
  let t = f.useRef(e);
  f.useEffect(() => {
    t.current = e;
  }, [e]);
  let r = X((n) => {
    for (let o of t.current)
      o != null && (typeof o == "function" ? o(n) : (o.current = n));
  });
  return e.every((n) => n == null || (n == null ? void 0 : n[Uh])) ? void 0 : r;
}
let Fs = f.createContext(null);
Fs.displayName = "DescriptionContext";
function Wh() {
  let e = f.useContext(Fs);
  if (e === null) {
    let t = new Error(
      "You used a <Description /> component, but it is not inside a relevant parent."
    );
    throw (Error.captureStackTrace && Error.captureStackTrace(t, Wh), t);
  }
  return e;
}
function iw() {
  var e, t;
  return (t = (e = f.useContext(Fs)) == null ? void 0 : e.value) != null
    ? t
    : void 0;
}
function Os() {
  let [e, t] = f.useState([]);
  return [
    e.length > 0 ? e.join(" ") : void 0,
    f.useMemo(
      () =>
        function (r) {
          let n = X(
              (i) => (
                t((l) => [...l, i]),
                () =>
                  t((l) => {
                    let a = l.slice(),
                      s = a.indexOf(i);
                    return s !== -1 && a.splice(s, 1), a;
                  })
              )
            ),
            o = f.useMemo(
              () => ({
                register: n,
                slot: r.slot,
                name: r.name,
                props: r.props,
                value: r.value,
              }),
              [n, r.slot, r.name, r.props, r.value]
            );
          return D.createElement(Fs.Provider, { value: o }, r.children);
        },
      [t]
    ),
  ];
}
let lw = "p";
function sw(e, t) {
  let r = f.useId(),
    n = Ms(),
    { id: o = `headlessui-description-${r}`, ...i } = e,
    l = Wh(),
    a = De(t);
  ue(() => l.register(o), [o, l.register]);
  let s = n || !1,
    u = f.useMemo(() => ({ ...l.slot, disabled: s }), [l.slot, s]),
    c = { ref: a, ...l.props, id: o };
  return Se({
    ourProps: c,
    theirProps: i,
    slot: u,
    defaultTag: lw,
    name: l.name || "Description",
  });
}
let aw = ve(sw),
  Qh = Object.assign(aw, {});
var me = ((e) => (
  (e.Space = " "),
  (e.Enter = "Enter"),
  (e.Escape = "Escape"),
  (e.Backspace = "Backspace"),
  (e.Delete = "Delete"),
  (e.ArrowLeft = "ArrowLeft"),
  (e.ArrowUp = "ArrowUp"),
  (e.ArrowRight = "ArrowRight"),
  (e.ArrowDown = "ArrowDown"),
  (e.Home = "Home"),
  (e.End = "End"),
  (e.PageUp = "PageUp"),
  (e.PageDown = "PageDown"),
  (e.Tab = "Tab"),
  e
))(me || {});
let Is = f.createContext(null);
Is.displayName = "LabelContext";
function rd() {
  let e = f.useContext(Is);
  if (e === null) {
    let t = new Error(
      "You used a <Label /> component, but it is not inside a relevant parent."
    );
    throw (Error.captureStackTrace && Error.captureStackTrace(t, rd), t);
  }
  return e;
}
function Kh(e) {
  var t, r, n;
  let o =
    (r = (t = f.useContext(Is)) == null ? void 0 : t.value) != null
      ? r
      : void 0;
  return ((n = void 0) != null ? n : 0) > 0
    ? [o, ...e].filter(Boolean).join(" ")
    : o;
}
function _s({ inherit: e = !1 } = {}) {
  let t = Kh(),
    [r, n] = f.useState([]),
    o = e ? [t, ...r].filter(Boolean) : r;
  return [
    o.length > 0 ? o.join(" ") : void 0,
    f.useMemo(
      () =>
        function (i) {
          let l = X(
              (s) => (
                n((u) => [...u, s]),
                () =>
                  n((u) => {
                    let c = u.slice(),
                      d = c.indexOf(s);
                    return d !== -1 && c.splice(d, 1), c;
                  })
              )
            ),
            a = f.useMemo(
              () => ({
                register: l,
                slot: i.slot,
                name: i.name,
                props: i.props,
                value: i.value,
              }),
              [l, i.slot, i.name, i.props, i.value]
            );
          return D.createElement(Is.Provider, { value: a }, i.children);
        },
      [n]
    ),
  ];
}
let uw = "label";
function cw(e, t) {
  var r;
  let n = f.useId(),
    o = rd(),
    i = Hh(),
    l = Ms(),
    {
      id: a = `headlessui-label-${n}`,
      htmlFor: s = i ?? ((r = o.props) == null ? void 0 : r.htmlFor),
      passive: u = !1,
      ...c
    } = e,
    d = De(t);
  ue(() => o.register(a), [a, o.register]);
  let m = X((k) => {
      let v = k.currentTarget;
      if (
        (v instanceof HTMLLabelElement && k.preventDefault(),
        o.props &&
          "onClick" in o.props &&
          typeof o.props.onClick == "function" &&
          o.props.onClick(k),
        v instanceof HTMLLabelElement)
      ) {
        let g = document.getElementById(v.htmlFor);
        if (g) {
          let x = g.getAttribute("disabled");
          if (x === "true" || x === "") return;
          let E = g.getAttribute("aria-disabled");
          if (E === "true" || E === "") return;
          ((g instanceof HTMLInputElement &&
            (g.type === "radio" || g.type === "checkbox")) ||
            g.role === "radio" ||
            g.role === "checkbox" ||
            g.role === "switch") &&
            g.click(),
            g.focus({ preventScroll: !0 });
        }
      }
    }),
    h = l || !1,
    y = f.useMemo(() => ({ ...o.slot, disabled: h }), [o.slot, h]),
    w = { ref: d, ...o.props, id: a, htmlFor: s, onClick: m };
  return (
    u &&
      ("onClick" in w && (delete w.htmlFor, delete w.onClick),
      "onClick" in c && delete c.onClick),
    Se({
      ourProps: w,
      theirProps: c,
      slot: y,
      defaultTag: s ? uw : "div",
      name: o.name || "Label",
    })
  );
}
let dw = ve(cw),
  fw = Object.assign(dw, {}),
  pw = f.createContext(() => {});
function Yh({ value: e, children: t }) {
  return D.createElement(pw.Provider, { value: e }, t);
}
function mw(e, t) {
  return e !== null &&
    t !== null &&
    typeof e == "object" &&
    typeof t == "object" &&
    "id" in e &&
    "id" in t
    ? e.id === t.id
    : e === t;
}
function hw(e = mw) {
  return f.useCallback(
    (t, r) => {
      if (typeof e == "string") {
        let n = e;
        return (t == null ? void 0 : t[n]) === (r == null ? void 0 : r[n]);
      }
      return e(t, r);
    },
    [e]
  );
}
function gw(e) {
  if (e === null) return { width: 0, height: 0 };
  let { width: t, height: r } = e.getBoundingClientRect();
  return { width: t, height: r };
}
function vw(e, t = !1) {
  let r = e === null ? null : "current" in e ? e.current : e,
    [n, o] = f.useReducer(() => ({}), {}),
    i = f.useMemo(() => gw(r), [r, n]);
  return (
    ue(() => {
      if (!r) return;
      let l = new ResizeObserver(o);
      return (
        l.observe(r),
        () => {
          l.disconnect();
        }
      );
    }, [r]),
    t ? { width: `${i.width}px`, height: `${i.height}px` } : i
  );
}
let yw = class extends Map {
  constructor(t) {
    super(), (this.factory = t);
  }
  get(t) {
    let r = super.get(t);
    return r === void 0 && ((r = this.factory(t)), this.set(t, r)), r;
  }
};
function Gh(e, t) {
  let r = e(),
    n = new Set();
  return {
    getSnapshot() {
      return r;
    },
    subscribe(o) {
      return n.add(o), () => n.delete(o);
    },
    dispatch(o, ...i) {
      let l = t[o].call(r, ...i);
      l && ((r = l), n.forEach((a) => a()));
    },
  };
}
function Xh(e) {
  return f.useSyncExternalStore(e.subscribe, e.getSnapshot, e.getSnapshot);
}
let xw = new yw(() =>
  Gh(() => [], {
    ADD(e) {
      return this.includes(e) ? this : [...this, e];
    },
    REMOVE(e) {
      let t = this.indexOf(e);
      if (t === -1) return this;
      let r = this.slice();
      return r.splice(t, 1), r;
    },
  })
);
function go(e, t) {
  let r = xw.get(t),
    n = f.useId(),
    o = Xh(r);
  if (
    (ue(() => {
      if (e) return r.dispatch("ADD", n), () => r.dispatch("REMOVE", n);
    }, [r, e]),
    !e)
  )
    return !1;
  let i = o.indexOf(n),
    l = o.length;
  return i === -1 && ((i = l), (l += 1)), i === l - 1;
}
let Vu = new Map(),
  ei = new Map();
function y0(e) {
  var t;
  let r = (t = ei.get(e)) != null ? t : 0;
  return (
    ei.set(e, r + 1),
    r !== 0
      ? () => x0(e)
      : (Vu.set(e, {
          "aria-hidden": e.getAttribute("aria-hidden"),
          inert: e.inert,
        }),
        e.setAttribute("aria-hidden", "true"),
        (e.inert = !0),
        () => x0(e))
  );
}
function x0(e) {
  var t;
  let r = (t = ei.get(e)) != null ? t : 1;
  if ((r === 1 ? ei.delete(e) : ei.set(e, r - 1), r !== 1)) return;
  let n = Vu.get(e);
  n &&
    (n["aria-hidden"] === null
      ? e.removeAttribute("aria-hidden")
      : e.setAttribute("aria-hidden", n["aria-hidden"]),
    (e.inert = n.inert),
    Vu.delete(e));
}
function Zh(e, { allowed: t, disallowed: r } = {}) {
  let n = go(e, "inert-others");
  ue(() => {
    var o, i;
    if (!n) return;
    let l = Zt();
    for (let s of (o = r == null ? void 0 : r()) != null ? o : [])
      s && l.add(y0(s));
    let a = (i = t == null ? void 0 : t()) != null ? i : [];
    for (let s of a) {
      if (!s) continue;
      let u = fr(s);
      if (!u) continue;
      let c = s.parentElement;
      for (; c && c !== u.body; ) {
        for (let d of c.children) a.some((m) => d.contains(m)) || l.add(y0(d));
        c = c.parentElement;
      }
    }
    return l.dispose;
  }, [n, t, r]);
}
function nd(e, t, r) {
  let n = pr((o) => {
    let i = o.getBoundingClientRect();
    i.x === 0 && i.y === 0 && i.width === 0 && i.height === 0 && r();
  });
  f.useEffect(() => {
    if (!e) return;
    let o = t === null ? null : t instanceof HTMLElement ? t : t.current;
    if (!o) return;
    let i = Zt();
    if (typeof ResizeObserver < "u") {
      let l = new ResizeObserver(() => n.current(o));
      l.observe(o), i.add(() => l.disconnect());
    }
    if (typeof IntersectionObserver < "u") {
      let l = new IntersectionObserver(() => n.current(o));
      l.observe(o), i.add(() => l.disconnect());
    }
    return () => i.dispose();
  }, [t, n, e]);
}
let is = [
    "[contentEditable=true]",
    "[tabindex]",
    "a[href]",
    "area[href]",
    "button:not([disabled])",
    "iframe",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
  ]
    .map((e) => `${e}:not([tabindex='-1'])`)
    .join(","),
  ww = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var tt = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    (e[(e.AutoFocus = 64)] = "AutoFocus"),
    e
  ))(tt || {}),
  Ei = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(Ei || {}),
  kw = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(kw || {});
function Jh(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(is)).sort((t, r) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (r.tabIndex || Number.MAX_SAFE_INTEGER)
        )
      );
}
function Sw(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(ww)).sort((t, r) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (r.tabIndex || Number.MAX_SAFE_INTEGER)
        )
      );
}
var od = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(od || {});
function id(e, t = 0) {
  var r;
  return e === ((r = fr(e)) == null ? void 0 : r.body)
    ? !1
    : mt(t, {
        0() {
          return e.matches(is);
        },
        1() {
          let n = e;
          for (; n !== null; ) {
            if (n.matches(is)) return !0;
            n = n.parentElement;
          }
          return !1;
        },
      });
}
function qh(e) {
  let t = fr(e);
  Zt().nextFrame(() => {
    t && !id(t.activeElement, 0) && Gt(e);
  });
}
var Ew = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(Ew || {});
typeof window < "u" &&
  typeof document < "u" &&
  (document.addEventListener(
    "keydown",
    (e) => {
      e.metaKey ||
        e.altKey ||
        e.ctrlKey ||
        (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ),
  document.addEventListener(
    "click",
    (e) => {
      e.detail === 1
        ? delete document.documentElement.dataset.headlessuiFocusVisible
        : e.detail === 0 &&
          (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ));
function Gt(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Cw = ["textarea", "input"].join(",");
function bw(e) {
  var t, r;
  return (r =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Cw)) !=
    null
    ? r
    : !1;
}
function ld(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let o = t(r),
      i = t(n);
    if (o === null || i === null) return 0;
    let l = o.compareDocumentPosition(i);
    return l & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : l & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0;
  });
}
function jw(e, t) {
  return Ar(Jh(), t, { relativeTo: e });
}
function Ar(
  e,
  t,
  { sorted: r = !0, relativeTo: n = null, skipElements: o = [] } = {}
) {
  let i = Array.isArray(e)
      ? e.length > 0
        ? e[0].ownerDocument
        : document
      : e.ownerDocument,
    l = Array.isArray(e) ? (r ? ld(e) : e) : t & 64 ? Sw(e) : Jh(e);
  o.length > 0 &&
    l.length > 1 &&
    (l = l.filter(
      (h) =>
        !o.some((y) =>
          y != null && "current" in y
            ? (y == null ? void 0 : y.current) === h
            : y === h
        )
    )),
    (n = n ?? i.activeElement);
  let a = (() => {
      if (t & 5) return 1;
      if (t & 10) return -1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    s = (() => {
      if (t & 1) return 0;
      if (t & 2) return Math.max(0, l.indexOf(n)) - 1;
      if (t & 4) return Math.max(0, l.indexOf(n)) + 1;
      if (t & 8) return l.length - 1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    u = t & 32 ? { preventScroll: !0 } : {},
    c = 0,
    d = l.length,
    m;
  do {
    if (c >= d || c + d <= 0) return 0;
    let h = s + c;
    if (t & 16) h = (h + d) % d;
    else {
      if (h < 0) return 3;
      if (h >= d) return 1;
    }
    (m = l[h]), m == null || m.focus(u), (c += a);
  } while (m !== i.activeElement);
  return t & 6 && bw(m) && m.select(), 2;
}
function e1() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  );
}
function $w() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Pw() {
  return e1() || $w();
}
function Io(e, t, r, n) {
  let o = pr(r);
  f.useEffect(() => {
    if (!e) return;
    function i(l) {
      o.current(l);
    }
    return (
      document.addEventListener(t, i, n),
      () => document.removeEventListener(t, i, n)
    );
  }, [e, t, n]);
}
function t1(e, t, r, n) {
  let o = pr(r);
  f.useEffect(() => {
    if (!e) return;
    function i(l) {
      o.current(l);
    }
    return (
      window.addEventListener(t, i, n),
      () => window.removeEventListener(t, i, n)
    );
  }, [e, t, n]);
}
const w0 = 30;
function r1(e, t, r) {
  let n = go(e, "outside-click"),
    o = pr(r),
    i = f.useCallback(
      function (s, u) {
        if (s.defaultPrevented) return;
        let c = u(s);
        if (c === null || !c.getRootNode().contains(c) || !c.isConnected)
          return;
        let d = (function m(h) {
          return typeof h == "function"
            ? m(h())
            : Array.isArray(h) || h instanceof Set
            ? h
            : [h];
        })(t);
        for (let m of d) {
          if (m === null) continue;
          let h = m instanceof HTMLElement ? m : m.current;
          if (
            (h != null && h.contains(c)) ||
            (s.composed && s.composedPath().includes(h))
          )
            return;
        }
        return (
          !id(c, od.Loose) && c.tabIndex !== -1 && s.preventDefault(),
          o.current(s, c)
        );
      },
      [o]
    ),
    l = f.useRef(null);
  Io(
    n,
    "pointerdown",
    (s) => {
      var u, c;
      l.current =
        ((c = (u = s.composedPath) == null ? void 0 : u.call(s)) == null
          ? void 0
          : c[0]) || s.target;
    },
    !0
  ),
    Io(
      n,
      "mousedown",
      (s) => {
        var u, c;
        l.current =
          ((c = (u = s.composedPath) == null ? void 0 : u.call(s)) == null
            ? void 0
            : c[0]) || s.target;
      },
      !0
    ),
    Io(
      n,
      "click",
      (s) => {
        Pw() || (l.current && (i(s, () => l.current), (l.current = null)));
      },
      !0
    );
  let a = f.useRef({ x: 0, y: 0 });
  Io(
    n,
    "touchstart",
    (s) => {
      (a.current.x = s.touches[0].clientX),
        (a.current.y = s.touches[0].clientY);
    },
    !0
  ),
    Io(
      n,
      "touchend",
      (s) => {
        let u = {
          x: s.changedTouches[0].clientX,
          y: s.changedTouches[0].clientY,
        };
        if (
          !(
            Math.abs(u.x - a.current.x) >= w0 ||
            Math.abs(u.y - a.current.y) >= w0
          )
        )
          return i(s, () =>
            s.target instanceof HTMLElement ? s.target : null
          );
      },
      !0
    ),
    t1(
      n,
      "blur",
      (s) =>
        i(s, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null
        ),
      !0
    );
}
function vo(...e) {
  return f.useMemo(() => fr(...e), [...e]);
}
function n1(e, t, r, n) {
  let o = pr(r);
  f.useEffect(() => {
    e = e ?? window;
    function i(l) {
      o.current(l);
    }
    return e.addEventListener(t, i, n), () => e.removeEventListener(t, i, n);
  }, [e, t, n]);
}
function k0(e) {
  var t;
  if (e.type) return e.type;
  let r = (t = e.as) != null ? t : "button";
  if (typeof r == "string" && r.toLowerCase() === "button") return "button";
}
function o1(e, t) {
  let [r, n] = f.useState(() => k0(e));
  return (
    ue(() => {
      n(k0(e));
    }, [e.type, e.as]),
    ue(() => {
      r ||
        (t.current &&
          t.current instanceof HTMLButtonElement &&
          !t.current.hasAttribute("type") &&
          n("button"));
    }, [r, t]),
    r
  );
}
function Nw() {
  let e;
  return {
    before({ doc: t }) {
      var r;
      let n = t.documentElement,
        o = (r = t.defaultView) != null ? r : window;
      e = Math.max(0, o.innerWidth - n.clientWidth);
    },
    after({ doc: t, d: r }) {
      let n = t.documentElement,
        o = Math.max(0, n.clientWidth - n.offsetWidth),
        i = Math.max(0, e - o);
      r.style(n, "paddingRight", `${i}px`);
    },
  };
}
function Rw() {
  return e1()
    ? {
        before({ doc: e, d: t, meta: r }) {
          function n(o) {
            return r.containers.flatMap((i) => i()).some((i) => i.contains(o));
          }
          t.microTask(() => {
            var o;
            if (
              window.getComputedStyle(e.documentElement).scrollBehavior !==
              "auto"
            ) {
              let a = Zt();
              a.style(e.documentElement, "scrollBehavior", "auto"),
                t.add(() => t.microTask(() => a.dispose()));
            }
            let i = (o = window.scrollY) != null ? o : window.pageYOffset,
              l = null;
            t.addEventListener(
              e,
              "click",
              (a) => {
                if (a.target instanceof HTMLElement)
                  try {
                    let s = a.target.closest("a");
                    if (!s) return;
                    let { hash: u } = new URL(s.href),
                      c = e.querySelector(u);
                    c && !n(c) && (l = c);
                  } catch {}
              },
              !0
            ),
              t.addEventListener(e, "touchstart", (a) => {
                if (a.target instanceof HTMLElement)
                  if (n(a.target)) {
                    let s = a.target;
                    for (; s.parentElement && n(s.parentElement); )
                      s = s.parentElement;
                    t.style(s, "overscrollBehavior", "contain");
                  } else t.style(a.target, "touchAction", "none");
              }),
              t.addEventListener(
                e,
                "touchmove",
                (a) => {
                  if (a.target instanceof HTMLElement) {
                    if (a.target.tagName === "INPUT") return;
                    if (n(a.target)) {
                      let s = a.target;
                      for (
                        ;
                        s.parentElement &&
                        s.dataset.headlessuiPortal !== "" &&
                        !(
                          s.scrollHeight > s.clientHeight ||
                          s.scrollWidth > s.clientWidth
                        );

                      )
                        s = s.parentElement;
                      s.dataset.headlessuiPortal === "" && a.preventDefault();
                    } else a.preventDefault();
                  }
                },
                { passive: !1 }
              ),
              t.add(() => {
                var a;
                let s = (a = window.scrollY) != null ? a : window.pageYOffset;
                i !== s && window.scrollTo(0, i),
                  l &&
                    l.isConnected &&
                    (l.scrollIntoView({ block: "nearest" }), (l = null));
              });
          });
        },
      }
    : {};
}
function Tw() {
  return {
    before({ doc: e, d: t }) {
      t.style(e.documentElement, "overflow", "hidden");
    },
  };
}
function Lw(e) {
  let t = {};
  for (let r of e) Object.assign(t, r(t));
  return t;
}
let an = Gh(() => new Map(), {
  PUSH(e, t) {
    var r;
    let n =
      (r = this.get(e)) != null
        ? r
        : { doc: e, count: 0, d: Zt(), meta: new Set() };
    return n.count++, n.meta.add(t), this.set(e, n), this;
  },
  POP(e, t) {
    let r = this.get(e);
    return r && (r.count--, r.meta.delete(t)), this;
  },
  SCROLL_PREVENT({ doc: e, d: t, meta: r }) {
    let n = { doc: e, d: t, meta: Lw(r) },
      o = [Rw(), Nw(), Tw()];
    o.forEach(({ before: i }) => (i == null ? void 0 : i(n))),
      o.forEach(({ after: i }) => (i == null ? void 0 : i(n)));
  },
  SCROLL_ALLOW({ d: e }) {
    e.dispose();
  },
  TEARDOWN({ doc: e }) {
    this.delete(e);
  },
});
an.subscribe(() => {
  let e = an.getSnapshot(),
    t = new Map();
  for (let [r] of e) t.set(r, r.documentElement.style.overflow);
  for (let r of e.values()) {
    let n = t.get(r.doc) === "hidden",
      o = r.count !== 0;
    ((o && !n) || (!o && n)) &&
      an.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r),
      r.count === 0 && an.dispatch("TEARDOWN", r);
  }
});
function Mw(e, t, r = () => ({ containers: [] })) {
  let n = Xh(an),
    o = t ? n.get(t) : void 0,
    i = o ? o.count > 0 : !1;
  return (
    ue(() => {
      if (!(!t || !e))
        return an.dispatch("PUSH", t, r), () => an.dispatch("POP", t, r);
    }, [e, t]),
    i
  );
}
function i1(e, t, r = () => [document.body]) {
  let n = go(e, "scroll-lock");
  Mw(n, t, (o) => {
    var i;
    return { containers: [...((i = o.containers) != null ? i : []), r] };
  });
}
function S0(e) {
  return [e.screenX, e.screenY];
}
function Dw() {
  let e = f.useRef([-1, -1]);
  return {
    wasMoved(t) {
      let r = S0(t);
      return e.current[0] === r[0] && e.current[1] === r[1]
        ? !1
        : ((e.current = r), !0);
    },
    update(t) {
      e.current = S0(t);
    },
  };
}
function Fw(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called) return (t.called = !0), e(...r);
  };
}
function Ow(e = 0) {
  let [t, r] = f.useState(e),
    n = f.useCallback((s) => r(s), [t]),
    o = f.useCallback((s) => r((u) => u | s), [t]),
    i = f.useCallback((s) => (t & s) === s, [t]),
    l = f.useCallback((s) => r((u) => u & ~s), [r]),
    a = f.useCallback((s) => r((u) => u ^ s), [r]);
  return {
    flags: t,
    setFlag: n,
    addFlag: o,
    hasFlag: i,
    removeFlag: l,
    toggleFlag: a,
  };
}
var Iw = ((e) => (
  (e[(e.None = 0)] = "None"),
  (e[(e.Closed = 1)] = "Closed"),
  (e[(e.Enter = 2)] = "Enter"),
  (e[(e.Leave = 4)] = "Leave"),
  e
))(Iw || {});
function sd(e) {
  let t = {};
  for (let r in e) e[r] === !0 && (t[`data-${r}`] = "");
  return t;
}
function ad(e, t, r, n) {
  let [o, i] = f.useState(r),
    { hasFlag: l, addFlag: a, removeFlag: s } = Ow(e && o ? 3 : 0),
    u = f.useRef(!1),
    c = f.useRef(!1),
    d = bn();
  return (
    ue(
      function m() {
        var h;
        if (!e) return;
        r && i(!0);
        let y = t.current;
        return y
          ? ((h = n == null ? void 0 : n.start) == null || h.call(n, r),
            _w(y, {
              inFlight: u,
              prepare() {
                c.current ? (c.current = !1) : (c.current = u.current),
                  (u.current = !0),
                  !c.current && (r ? (a(3), s(4)) : (a(4), s(2)));
              },
              run() {
                c.current ? (r ? (s(3), a(4)) : (s(4), a(3))) : r ? s(1) : a(1);
              },
              done() {
                var w;
                (c.current &&
                  typeof y.getAnimations == "function" &&
                  y.getAnimations().length > 0) ||
                  ((u.current = !1),
                  s(7),
                  r || i(!1),
                  (w = n == null ? void 0 : n.end) == null || w.call(n, r));
              },
            }))
          : r
          ? (a(3), d.nextFrame(() => m()))
          : void 0;
      },
      [e, r, t, d]
    ),
    e
      ? [
          o,
          { closed: l(1), enter: l(2), leave: l(4), transition: l(2) || l(4) },
        ]
      : [
          r,
          { closed: void 0, enter: void 0, leave: void 0, transition: void 0 },
        ]
  );
}
function _w(e, { prepare: t, run: r, done: n, inFlight: o }) {
  let i = Zt();
  return (
    Bw(e, { prepare: t, inFlight: o }),
    i.nextFrame(() => {
      i.add(Aw(e, n)), r();
    }),
    i.dispose
  );
}
function Aw(e, t) {
  let r = Fw(t),
    n = Zt();
  if (!e) return n.dispose;
  let { transitionDuration: o, transitionDelay: i } = getComputedStyle(e),
    [l, a] = [o, i].map((u) => {
      let [c = 0] = u
        .split(",")
        .filter(Boolean)
        .map((d) => (d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3))
        .sort((d, m) => m - d);
      return c;
    }),
    s = l + a;
  if (s !== 0) {
    let u = n.group((c) => {
      let d = c.setTimeout(() => {
        r(), c.dispose();
      }, s);
      c.addEventListener(e, "transitionrun", (m) => {
        m.target === m.currentTarget &&
          (d(),
          c.addEventListener(e, "transitioncancel", (h) => {
            h.target === h.currentTarget && (r(), u());
          }));
      });
    });
    n.addEventListener(e, "transitionend", (c) => {
      c.target === c.currentTarget && (r(), n.dispose());
    });
  } else r();
  return n.dispose;
}
function Bw(e, { inFlight: t, prepare: r }) {
  if (t != null && t.current) {
    r();
    return;
  }
  let n = e.style.transition;
  (e.style.transition = "none"), r(), e.offsetHeight, (e.style.transition = n);
}
function zw(e, { container: t, accept: r, walk: n }) {
  let o = f.useRef(r),
    i = f.useRef(n);
  f.useEffect(() => {
    (o.current = r), (i.current = n);
  }, [r, n]),
    ue(() => {
      if (!t || !e) return;
      let l = fr(t);
      if (!l) return;
      let a = o.current,
        s = i.current,
        u = Object.assign((d) => a(d), { acceptNode: a }),
        c = l.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, u, !1);
      for (; c.nextNode(); ) s(c.currentNode);
    }, [t, e, o, i]);
}
function ud(e, t) {
  let r = f.useRef([]),
    n = X(e);
  f.useEffect(() => {
    let o = [...r.current];
    for (let [i, l] of t.entries())
      if (r.current[i] !== l) {
        let a = n(t, o);
        return (r.current = t), a;
      }
  }, [n, ...t]);
}
function yo(e) {
  return l1(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function St(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function mr(e) {
  var t;
  return (t = (l1(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function l1(e) {
  return e instanceof Node || e instanceof St(e).Node;
}
function ct(e) {
  return e instanceof Element || e instanceof St(e).Element;
}
function Xt(e) {
  return e instanceof HTMLElement || e instanceof St(e).HTMLElement;
}
function E0(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof St(e).ShadowRoot;
}
function Fi(e) {
  const { overflow: t, overflowX: r, overflowY: n, display: o } = Ht(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + n + r) &&
    !["inline", "contents"].includes(o)
  );
}
function Hw(e) {
  return ["table", "td", "th"].includes(yo(e));
}
function As(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function cd(e) {
  const t = dd(),
    r = Ht(e);
  return (
    r.transform !== "none" ||
    r.perspective !== "none" ||
    (r.containerType ? r.containerType !== "normal" : !1) ||
    (!t && (r.backdropFilter ? r.backdropFilter !== "none" : !1)) ||
    (!t && (r.filter ? r.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((n) =>
      (r.willChange || "").includes(n)
    ) ||
    ["paint", "layout", "strict", "content"].some((n) =>
      (r.contain || "").includes(n)
    )
  );
}
function Uw(e) {
  let t = Ur(e);
  for (; Xt(t) && !ao(t); ) {
    if (As(t)) return null;
    if (cd(t)) return t;
    t = Ur(t);
  }
  return null;
}
function dd() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function ao(e) {
  return ["html", "body", "#document"].includes(yo(e));
}
function Ht(e) {
  return St(e).getComputedStyle(e);
}
function Bs(e) {
  return ct(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Ur(e) {
  if (yo(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (E0(e) && e.host) || mr(e);
  return E0(t) ? t.host : t;
}
function s1(e) {
  const t = Ur(e);
  return ao(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Xt(t) && Fi(t)
    ? t
    : s1(t);
}
function Ci(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = s1(e),
    i = o === ((n = e.ownerDocument) == null ? void 0 : n.body),
    l = St(o);
  return i
    ? t.concat(
        l,
        l.visualViewport || [],
        Fi(o) ? o : [],
        l.frameElement && r ? Ci(l.frameElement) : []
      )
    : t.concat(o, Ci(o, [], r));
}
function Vw() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands)
    ? e.brands
        .map((t) => {
          let { brand: r, version: n } = t;
          return r + "/" + n;
        })
        .join(" ")
    : navigator.userAgent;
}
const Rr = Math.min,
  yt = Math.max,
  ls = Math.round,
  ul = Math.floor,
  Vr = (e) => ({ x: e, y: e }),
  Ww = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Qw = { start: "end", end: "start" };
function C0(e, t, r) {
  return yt(e, Rr(t, r));
}
function xo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Wr(e) {
  return e.split("-")[0];
}
function Oi(e) {
  return e.split("-")[1];
}
function a1(e) {
  return e === "x" ? "y" : "x";
}
function u1(e) {
  return e === "y" ? "height" : "width";
}
function wn(e) {
  return ["top", "bottom"].includes(Wr(e)) ? "y" : "x";
}
function c1(e) {
  return a1(wn(e));
}
function Kw(e, t, r) {
  r === void 0 && (r = !1);
  const n = Oi(e),
    o = c1(e),
    i = u1(o);
  let l =
    o === "x"
      ? n === (r ? "end" : "start")
        ? "right"
        : "left"
      : n === "start"
      ? "bottom"
      : "top";
  return t.reference[i] > t.floating[i] && (l = ss(l)), [l, ss(l)];
}
function Yw(e) {
  const t = ss(e);
  return [Wu(e), t, Wu(t)];
}
function Wu(e) {
  return e.replace(/start|end/g, (t) => Qw[t]);
}
function Gw(e, t, r) {
  const n = ["left", "right"],
    o = ["right", "left"],
    i = ["top", "bottom"],
    l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? (t ? o : n) : t ? n : o;
    case "left":
    case "right":
      return t ? i : l;
    default:
      return [];
  }
}
function Xw(e, t, r, n) {
  const o = Oi(e);
  let i = Gw(Wr(e), r === "start", n);
  return (
    o && ((i = i.map((l) => l + "-" + o)), t && (i = i.concat(i.map(Wu)))), i
  );
}
function ss(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ww[t]);
}
function Zw(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Jw(e) {
  return typeof e != "number"
    ? Zw(e)
    : { top: e, right: e, bottom: e, left: e };
}
function as(e) {
  const { x: t, y: r, width: n, height: o } = e;
  return {
    width: n,
    height: o,
    top: r,
    left: t,
    right: t + n,
    bottom: r + o,
    x: t,
    y: r,
  };
}
function b0(e, t, r) {
  let { reference: n, floating: o } = e;
  const i = wn(t),
    l = c1(t),
    a = u1(l),
    s = Wr(t),
    u = i === "y",
    c = n.x + n.width / 2 - o.width / 2,
    d = n.y + n.height / 2 - o.height / 2,
    m = n[a] / 2 - o[a] / 2;
  let h;
  switch (s) {
    case "top":
      h = { x: c, y: n.y - o.height };
      break;
    case "bottom":
      h = { x: c, y: n.y + n.height };
      break;
    case "right":
      h = { x: n.x + n.width, y: d };
      break;
    case "left":
      h = { x: n.x - o.width, y: d };
      break;
    default:
      h = { x: n.x, y: n.y };
  }
  switch (Oi(t)) {
    case "start":
      h[l] -= m * (r && u ? -1 : 1);
      break;
    case "end":
      h[l] += m * (r && u ? -1 : 1);
      break;
  }
  return h;
}
const qw = async (e, t, r) => {
  const {
      placement: n = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: l,
    } = r,
    a = i.filter(Boolean),
    s = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let u = await l.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: c, y: d } = b0(u, n, s),
    m = n,
    h = {},
    y = 0;
  for (let w = 0; w < a.length; w++) {
    const { name: k, fn: v } = a[w],
      {
        x: g,
        y: x,
        data: E,
        reset: $,
      } = await v({
        x: c,
        y: d,
        initialPlacement: n,
        placement: m,
        strategy: o,
        middlewareData: h,
        rects: u,
        platform: l,
        elements: { reference: e, floating: t },
      });
    (c = g ?? c),
      (d = x ?? d),
      (h = { ...h, [k]: { ...h[k], ...E } }),
      $ &&
        y <= 50 &&
        (y++,
        typeof $ == "object" &&
          ($.placement && (m = $.placement),
          $.rects &&
            (u =
              $.rects === !0
                ? await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : $.rects),
          ({ x: c, y: d } = b0(u, m, s))),
        (w = -1));
  }
  return { x: c, y: d, placement: m, strategy: o, middlewareData: h };
};
async function zs(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: n, y: o, platform: i, rects: l, elements: a, strategy: s } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: c = "viewport",
      elementContext: d = "floating",
      altBoundary: m = !1,
      padding: h = 0,
    } = xo(t, e),
    y = Jw(h),
    k = a[m ? (d === "floating" ? "reference" : "floating") : d],
    v = as(
      await i.getClippingRect({
        element:
          (r = await (i.isElement == null ? void 0 : i.isElement(k))) == null ||
          r
            ? k
            : k.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: s,
      })
    ),
    g =
      d === "floating"
        ? { x: n, y: o, width: l.floating.width, height: l.floating.height }
        : l.reference,
    x = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(a.floating)),
    E = (await (i.isElement == null ? void 0 : i.isElement(x)))
      ? (await (i.getScale == null ? void 0 : i.getScale(x))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    $ = as(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: g,
            offsetParent: x,
            strategy: s,
          })
        : g
    );
  return {
    top: (v.top - $.top + y.top) / E.y,
    bottom: ($.bottom - v.bottom + y.bottom) / E.y,
    left: (v.left - $.left + y.left) / E.x,
    right: ($.right - v.right + y.right) / E.x,
  };
}
const e3 = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "flip",
      options: e,
      async fn(t) {
        var r, n;
        const {
            placement: o,
            middlewareData: i,
            rects: l,
            initialPlacement: a,
            platform: s,
            elements: u,
          } = t,
          {
            mainAxis: c = !0,
            crossAxis: d = !0,
            fallbackPlacements: m,
            fallbackStrategy: h = "bestFit",
            fallbackAxisSideDirection: y = "none",
            flipAlignment: w = !0,
            ...k
          } = xo(e, t);
        if ((r = i.arrow) != null && r.alignmentOffset) return {};
        const v = Wr(o),
          g = wn(a),
          x = Wr(a) === a,
          E = await (s.isRTL == null ? void 0 : s.isRTL(u.floating)),
          $ = m || (x || !w ? [ss(a)] : Yw(a)),
          S = y !== "none";
        !m && S && $.push(...Xw(a, w, y, E));
        const P = [a, ...$],
          j = await zs(t, k),
          R = [];
        let L = ((n = i.flip) == null ? void 0 : n.overflows) || [];
        if ((c && R.push(j[v]), d)) {
          const K = Kw(o, l, E);
          R.push(j[K[0]], j[K[1]]);
        }
        if (
          ((L = [...L, { placement: o, overflows: R }]),
          !R.every((K) => K <= 0))
        ) {
          var _, W;
          const K = (((_ = i.flip) == null ? void 0 : _.index) || 0) + 1,
            z = P[K];
          if (z)
            return {
              data: { index: K, overflows: L },
              reset: { placement: z },
            };
          let oe =
            (W = L.filter((B) => B.overflows[0] <= 0).sort(
              (B, M) => B.overflows[1] - M.overflows[1]
            )[0]) == null
              ? void 0
              : W.placement;
          if (!oe)
            switch (h) {
              case "bestFit": {
                var Y;
                const B =
                  (Y = L.filter((M) => {
                    if (S) {
                      const I = wn(M.placement);
                      return I === g || I === "y";
                    }
                    return !0;
                  })
                    .map((M) => [
                      M.placement,
                      M.overflows
                        .filter((I) => I > 0)
                        .reduce((I, F) => I + F, 0),
                    ])
                    .sort((M, I) => M[1] - I[1])[0]) == null
                    ? void 0
                    : Y[0];
                B && (oe = B);
                break;
              }
              case "initialPlacement":
                oe = a;
                break;
            }
          if (o !== oe) return { reset: { placement: oe } };
        }
        return {};
      },
    }
  );
};
async function t3(e, t) {
  const { placement: r, platform: n, elements: o } = e,
    i = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)),
    l = Wr(r),
    a = Oi(r),
    s = wn(r) === "y",
    u = ["left", "top"].includes(l) ? -1 : 1,
    c = i && s ? -1 : 1,
    d = xo(t, e);
  let {
    mainAxis: m,
    crossAxis: h,
    alignmentAxis: y,
  } = typeof d == "number"
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d };
  return (
    a && typeof y == "number" && (h = a === "end" ? y * -1 : y),
    s ? { x: h * c, y: m * u } : { x: m * u, y: h * c }
  );
}
const r3 = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var r, n;
          const { x: o, y: i, placement: l, middlewareData: a } = t,
            s = await t3(t, e);
          return l === ((r = a.offset) == null ? void 0 : r.placement) &&
            (n = a.arrow) != null &&
            n.alignmentOffset
            ? {}
            : { x: o + s.x, y: i + s.y, data: { ...s, placement: l } };
        },
      }
    );
  },
  n3 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: r, y: n, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: l = !1,
              limiter: a = {
                fn: (k) => {
                  let { x: v, y: g } = k;
                  return { x: v, y: g };
                },
              },
              ...s
            } = xo(e, t),
            u = { x: r, y: n },
            c = await zs(t, s),
            d = wn(Wr(o)),
            m = a1(d);
          let h = u[m],
            y = u[d];
          if (i) {
            const k = m === "y" ? "top" : "left",
              v = m === "y" ? "bottom" : "right",
              g = h + c[k],
              x = h - c[v];
            h = C0(g, h, x);
          }
          if (l) {
            const k = d === "y" ? "top" : "left",
              v = d === "y" ? "bottom" : "right",
              g = y + c[k],
              x = y - c[v];
            y = C0(g, y, x);
          }
          const w = a.fn({ ...t, [m]: h, [d]: y });
          return { ...w, data: { x: w.x - r, y: w.y - n } };
        },
      }
    );
  },
  o3 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          const { placement: r, rects: n, platform: o, elements: i } = t,
            { apply: l = () => {}, ...a } = xo(e, t),
            s = await zs(t, a),
            u = Wr(r),
            c = Oi(r),
            d = wn(r) === "y",
            { width: m, height: h } = n.floating;
          let y, w;
          u === "top" || u === "bottom"
            ? ((y = u),
              (w =
                c ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(i.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((w = u), (y = c === "end" ? "top" : "bottom"));
          const k = h - s.top - s.bottom,
            v = m - s.left - s.right,
            g = Rr(h - s[y], k),
            x = Rr(m - s[w], v),
            E = !t.middlewareData.shift;
          let $ = g,
            S = x;
          if (
            (d ? (S = c || E ? Rr(x, v) : v) : ($ = c || E ? Rr(g, k) : k),
            E && !c)
          ) {
            const j = yt(s.left, 0),
              R = yt(s.right, 0),
              L = yt(s.top, 0),
              _ = yt(s.bottom, 0);
            d
              ? (S = m - 2 * (j !== 0 || R !== 0 ? j + R : yt(s.left, s.right)))
              : ($ =
                  h - 2 * (L !== 0 || _ !== 0 ? L + _ : yt(s.top, s.bottom)));
          }
          await l({ ...t, availableWidth: S, availableHeight: $ });
          const P = await o.getDimensions(i.floating);
          return m !== P.width || h !== P.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function d1(e) {
  const t = Ht(e);
  let r = parseFloat(t.width) || 0,
    n = parseFloat(t.height) || 0;
  const o = Xt(e),
    i = o ? e.offsetWidth : r,
    l = o ? e.offsetHeight : n,
    a = ls(r) !== i || ls(n) !== l;
  return a && ((r = i), (n = l)), { width: r, height: n, $: a };
}
function fd(e) {
  return ct(e) ? e : e.contextElement;
}
function Zn(e) {
  const t = fd(e);
  if (!Xt(t)) return Vr(1);
  const r = t.getBoundingClientRect(),
    { width: n, height: o, $: i } = d1(t);
  let l = (i ? ls(r.width) : r.width) / n,
    a = (i ? ls(r.height) : r.height) / o;
  return (
    (!l || !Number.isFinite(l)) && (l = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: l, y: a }
  );
}
const i3 = Vr(0);
function f1(e) {
  const t = St(e);
  return !dd() || !t.visualViewport
    ? i3
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function l3(e, t, r) {
  return t === void 0 && (t = !1), !r || (t && r !== St(e)) ? !1 : t;
}
function kn(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(),
    i = fd(e);
  let l = Vr(1);
  t && (n ? ct(n) && (l = Zn(n)) : (l = Zn(e)));
  const a = l3(i, r, n) ? f1(i) : Vr(0);
  let s = (o.left + a.x) / l.x,
    u = (o.top + a.y) / l.y,
    c = o.width / l.x,
    d = o.height / l.y;
  if (i) {
    const m = St(i),
      h = n && ct(n) ? St(n) : n;
    let y = m,
      w = y.frameElement;
    for (; w && n && h !== y; ) {
      const k = Zn(w),
        v = w.getBoundingClientRect(),
        g = Ht(w),
        x = v.left + (w.clientLeft + parseFloat(g.paddingLeft)) * k.x,
        E = v.top + (w.clientTop + parseFloat(g.paddingTop)) * k.y;
      (s *= k.x),
        (u *= k.y),
        (c *= k.x),
        (d *= k.y),
        (s += x),
        (u += E),
        (y = St(w)),
        (w = y.frameElement);
    }
  }
  return as({ width: c, height: d, x: s, y: u });
}
function s3(e) {
  let { elements: t, rect: r, offsetParent: n, strategy: o } = e;
  const i = o === "fixed",
    l = mr(n),
    a = t ? As(t.floating) : !1;
  if (n === l || (a && i)) return r;
  let s = { scrollLeft: 0, scrollTop: 0 },
    u = Vr(1);
  const c = Vr(0),
    d = Xt(n);
  if (
    (d || (!d && !i)) &&
    ((yo(n) !== "body" || Fi(l)) && (s = Bs(n)), Xt(n))
  ) {
    const m = kn(n);
    (u = Zn(n)), (c.x = m.x + n.clientLeft), (c.y = m.y + n.clientTop);
  }
  return {
    width: r.width * u.x,
    height: r.height * u.y,
    x: r.x * u.x - s.scrollLeft * u.x + c.x,
    y: r.y * u.y - s.scrollTop * u.y + c.y,
  };
}
function a3(e) {
  return Array.from(e.getClientRects());
}
function p1(e) {
  return kn(mr(e)).left + Bs(e).scrollLeft;
}
function u3(e) {
  const t = mr(e),
    r = Bs(e),
    n = e.ownerDocument.body,
    o = yt(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
    i = yt(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let l = -r.scrollLeft + p1(e);
  const a = -r.scrollTop;
  return (
    Ht(n).direction === "rtl" && (l += yt(t.clientWidth, n.clientWidth) - o),
    { width: o, height: i, x: l, y: a }
  );
}
function c3(e, t) {
  const r = St(e),
    n = mr(e),
    o = r.visualViewport;
  let i = n.clientWidth,
    l = n.clientHeight,
    a = 0,
    s = 0;
  if (o) {
    (i = o.width), (l = o.height);
    const u = dd();
    (!u || (u && t === "fixed")) && ((a = o.offsetLeft), (s = o.offsetTop));
  }
  return { width: i, height: l, x: a, y: s };
}
function d3(e, t) {
  const r = kn(e, !0, t === "fixed"),
    n = r.top + e.clientTop,
    o = r.left + e.clientLeft,
    i = Xt(e) ? Zn(e) : Vr(1),
    l = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    s = o * i.x,
    u = n * i.y;
  return { width: l, height: a, x: s, y: u };
}
function j0(e, t, r) {
  let n;
  if (t === "viewport") n = c3(e, r);
  else if (t === "document") n = u3(mr(e));
  else if (ct(t)) n = d3(t, r);
  else {
    const o = f1(e);
    n = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return as(n);
}
function m1(e, t) {
  const r = Ur(e);
  return r === t || !ct(r) || ao(r)
    ? !1
    : Ht(r).position === "fixed" || m1(r, t);
}
function f3(e, t) {
  const r = t.get(e);
  if (r) return r;
  let n = Ci(e, [], !1).filter((a) => ct(a) && yo(a) !== "body"),
    o = null;
  const i = Ht(e).position === "fixed";
  let l = i ? Ur(e) : e;
  for (; ct(l) && !ao(l); ) {
    const a = Ht(l),
      s = cd(l);
    !s && a.position === "fixed" && (o = null),
      (
        i
          ? !s && !o
          : (!s &&
              a.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (Fi(l) && !s && m1(e, l))
      )
        ? (n = n.filter((c) => c !== l))
        : (o = a),
      (l = Ur(l));
  }
  return t.set(e, n), n;
}
function p3(e) {
  let { element: t, boundary: r, rootBoundary: n, strategy: o } = e;
  const l = [
      ...(r === "clippingAncestors"
        ? As(t)
          ? []
          : f3(t, this._c)
        : [].concat(r)),
      n,
    ],
    a = l[0],
    s = l.reduce((u, c) => {
      const d = j0(t, c, o);
      return (
        (u.top = yt(d.top, u.top)),
        (u.right = Rr(d.right, u.right)),
        (u.bottom = Rr(d.bottom, u.bottom)),
        (u.left = yt(d.left, u.left)),
        u
      );
    }, j0(t, a, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top,
  };
}
function m3(e) {
  const { width: t, height: r } = d1(e);
  return { width: t, height: r };
}
function h3(e, t, r) {
  const n = Xt(t),
    o = mr(t),
    i = r === "fixed",
    l = kn(e, !0, i, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const s = Vr(0);
  if (n || (!n && !i))
    if (((yo(t) !== "body" || Fi(o)) && (a = Bs(t)), n)) {
      const d = kn(t, !0, i, t);
      (s.x = d.x + t.clientLeft), (s.y = d.y + t.clientTop);
    } else o && (s.x = p1(o));
  const u = l.left + a.scrollLeft - s.x,
    c = l.top + a.scrollTop - s.y;
  return { x: u, y: c, width: l.width, height: l.height };
}
function Ma(e) {
  return Ht(e).position === "static";
}
function $0(e, t) {
  return !Xt(e) || Ht(e).position === "fixed"
    ? null
    : t
    ? t(e)
    : e.offsetParent;
}
function h1(e, t) {
  const r = St(e);
  if (As(e)) return r;
  if (!Xt(e)) {
    let o = Ur(e);
    for (; o && !ao(o); ) {
      if (ct(o) && !Ma(o)) return o;
      o = Ur(o);
    }
    return r;
  }
  let n = $0(e, t);
  for (; n && Hw(n) && Ma(n); ) n = $0(n, t);
  return n && ao(n) && Ma(n) && !cd(n) ? r : n || Uw(e) || r;
}
const g3 = async function (e) {
  const t = this.getOffsetParent || h1,
    r = this.getDimensions,
    n = await r(e.floating);
  return {
    reference: h3(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: n.width, height: n.height },
  };
};
function v3(e) {
  return Ht(e).direction === "rtl";
}
const y3 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: s3,
  getDocumentElement: mr,
  getClippingRect: p3,
  getOffsetParent: h1,
  getElementRects: g3,
  getClientRects: a3,
  getDimensions: m3,
  getScale: Zn,
  isElement: ct,
  isRTL: v3,
};
function x3(e, t) {
  let r = null,
    n;
  const o = mr(e);
  function i() {
    var a;
    clearTimeout(n), (a = r) == null || a.disconnect(), (r = null);
  }
  function l(a, s) {
    a === void 0 && (a = !1), s === void 0 && (s = 1), i();
    const { left: u, top: c, width: d, height: m } = e.getBoundingClientRect();
    if ((a || t(), !d || !m)) return;
    const h = ul(c),
      y = ul(o.clientWidth - (u + d)),
      w = ul(o.clientHeight - (c + m)),
      k = ul(u),
      g = {
        rootMargin: -h + "px " + -y + "px " + -w + "px " + -k + "px",
        threshold: yt(0, Rr(1, s)) || 1,
      };
    let x = !0;
    function E($) {
      const S = $[0].intersectionRatio;
      if (S !== s) {
        if (!x) return l();
        S
          ? l(!1, S)
          : (n = setTimeout(() => {
              l(!1, 1e-7);
            }, 1e3));
      }
      x = !1;
    }
    try {
      r = new IntersectionObserver(E, { ...g, root: o.ownerDocument });
    } catch {
      r = new IntersectionObserver(E, g);
    }
    r.observe(e);
  }
  return l(!0), i;
}
function w3(e, t, r, n) {
  n === void 0 && (n = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: l = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: s = !1,
    } = n,
    u = fd(e),
    c = o || i ? [...(u ? Ci(u) : []), ...Ci(t)] : [];
  c.forEach((v) => {
    o && v.addEventListener("scroll", r, { passive: !0 }),
      i && v.addEventListener("resize", r);
  });
  const d = u && a ? x3(u, r) : null;
  let m = -1,
    h = null;
  l &&
    ((h = new ResizeObserver((v) => {
      let [g] = v;
      g &&
        g.target === u &&
        h &&
        (h.unobserve(t),
        cancelAnimationFrame(m),
        (m = requestAnimationFrame(() => {
          var x;
          (x = h) == null || x.observe(t);
        }))),
        r();
    })),
    u && !s && h.observe(u),
    h.observe(t));
  let y,
    w = s ? kn(e) : null;
  s && k();
  function k() {
    const v = kn(e);
    w &&
      (v.x !== w.x ||
        v.y !== w.y ||
        v.width !== w.width ||
        v.height !== w.height) &&
      r(),
      (w = v),
      (y = requestAnimationFrame(k));
  }
  return (
    r(),
    () => {
      var v;
      c.forEach((g) => {
        o && g.removeEventListener("scroll", r),
          i && g.removeEventListener("resize", r);
      }),
        d == null || d(),
        (v = h) == null || v.disconnect(),
        (h = null),
        s && cancelAnimationFrame(y);
    }
  );
}
const Da = zs,
  k3 = r3,
  S3 = n3,
  E3 = e3,
  C3 = o3,
  b3 = (e, t, r) => {
    const n = new Map(),
      o = { platform: y3, ...r },
      i = { ...o.platform, _c: n };
    return qw(e, t, { ...o, platform: i });
  };
var $l = typeof document < "u" ? f.useLayoutEffect : f.useEffect;
function us(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let r, n, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((r = e.length), r !== t.length)) return !1;
      for (n = r; n-- !== 0; ) if (!us(e[n], t[n])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (r = o.length), r !== Object.keys(t).length))
      return !1;
    for (n = r; n-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[n])) return !1;
    for (n = r; n-- !== 0; ) {
      const i = o[n];
      if (!(i === "_owner" && e.$$typeof) && !us(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function g1(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function P0(e, t) {
  const r = g1(e);
  return Math.round(t * r) / r;
}
function N0(e) {
  const t = f.useRef(e);
  return (
    $l(() => {
      t.current = e;
    }),
    t
  );
}
function j3(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: r = "absolute",
      middleware: n = [],
      platform: o,
      elements: { reference: i, floating: l } = {},
      transform: a = !0,
      whileElementsMounted: s,
      open: u,
    } = e,
    [c, d] = f.useState({
      x: 0,
      y: 0,
      strategy: r,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [m, h] = f.useState(n);
  us(m, n) || h(n);
  const [y, w] = f.useState(null),
    [k, v] = f.useState(null),
    g = f.useCallback((B) => {
      B !== S.current && ((S.current = B), w(B));
    }, []),
    x = f.useCallback((B) => {
      B !== P.current && ((P.current = B), v(B));
    }, []),
    E = i || y,
    $ = l || k,
    S = f.useRef(null),
    P = f.useRef(null),
    j = f.useRef(c),
    R = s != null,
    L = N0(s),
    _ = N0(o),
    W = f.useCallback(() => {
      if (!S.current || !P.current) return;
      const B = { placement: t, strategy: r, middleware: m };
      _.current && (B.platform = _.current),
        b3(S.current, P.current, B).then((M) => {
          const I = { ...M, isPositioned: !0 };
          Y.current &&
            !us(j.current, I) &&
            ((j.current = I),
            ot.flushSync(() => {
              d(I);
            }));
        });
    }, [m, t, r, _]);
  $l(() => {
    u === !1 &&
      j.current.isPositioned &&
      ((j.current.isPositioned = !1), d((B) => ({ ...B, isPositioned: !1 })));
  }, [u]);
  const Y = f.useRef(!1);
  $l(
    () => (
      (Y.current = !0),
      () => {
        Y.current = !1;
      }
    ),
    []
  ),
    $l(() => {
      if ((E && (S.current = E), $ && (P.current = $), E && $)) {
        if (L.current) return L.current(E, $, W);
        W();
      }
    }, [E, $, W, L, R]);
  const K = f.useMemo(
      () => ({ reference: S, floating: P, setReference: g, setFloating: x }),
      [g, x]
    ),
    z = f.useMemo(() => ({ reference: E, floating: $ }), [E, $]),
    oe = f.useMemo(() => {
      const B = { position: r, left: 0, top: 0 };
      if (!z.floating) return B;
      const M = P0(z.floating, c.x),
        I = P0(z.floating, c.y);
      return a
        ? {
            ...B,
            transform: "translate(" + M + "px, " + I + "px)",
            ...(g1(z.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: r, left: M, top: I };
    }, [r, a, z.floating, c.x, c.y]);
  return f.useMemo(
    () => ({ ...c, update: W, refs: K, elements: z, floatingStyles: oe }),
    [c, W, K, z, oe]
  );
}
const v1 = (e, t) => ({ ...k3(e), options: [e, t] }),
  $3 = (e, t) => ({ ...S3(e), options: [e, t] }),
  P3 = (e, t) => ({ ...E3(e), options: [e, t] }),
  N3 = (e, t) => ({ ...C3(e), options: [e, t] }),
  y1 = { ...Rl },
  R3 = y1.useInsertionEffect,
  T3 = R3 || ((e) => e());
function x1(e) {
  const t = f.useRef(() => {});
  return (
    T3(() => {
      t.current = e;
    }),
    f.useCallback(function () {
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      return t.current == null ? void 0 : t.current(...n);
    }, [])
  );
}
var Qu = typeof document < "u" ? f.useLayoutEffect : f.useEffect;
let R0 = !1,
  L3 = 0;
const T0 = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + L3++;
function M3() {
  const [e, t] = f.useState(() => (R0 ? T0() : void 0));
  return (
    Qu(() => {
      e == null && t(T0());
    }, []),
    f.useEffect(() => {
      R0 = !0;
    }, []),
    e
  );
}
const D3 = y1.useId,
  F3 = D3 || M3;
function O3() {
  const e = new Map();
  return {
    emit(t, r) {
      var n;
      (n = e.get(t)) == null || n.forEach((o) => o(r));
    },
    on(t, r) {
      e.set(t, [...(e.get(t) || []), r]);
    },
    off(t, r) {
      var n;
      e.set(
        t,
        ((n = e.get(t)) == null ? void 0 : n.filter((o) => o !== r)) || []
      );
    },
  };
}
const I3 = f.createContext(null),
  _3 = f.createContext(null),
  A3 = () => {
    var e;
    return ((e = f.useContext(I3)) == null ? void 0 : e.id) || null;
  },
  B3 = () => f.useContext(_3);
function z3(e) {
  const { open: t = !1, onOpenChange: r, elements: n } = e,
    o = F3(),
    i = f.useRef({}),
    [l] = f.useState(() => O3()),
    a = A3() != null,
    [s, u] = f.useState(n.reference),
    c = x1((h, y, w) => {
      (i.current.openEvent = h ? y : void 0),
        l.emit("openchange", { open: h, event: y, reason: w, nested: a }),
        r == null || r(h, y, w);
    }),
    d = f.useMemo(() => ({ setPositionReference: u }), []),
    m = f.useMemo(
      () => ({
        reference: s || n.reference || null,
        floating: n.floating || null,
        domReference: n.reference,
      }),
      [s, n.reference, n.floating]
    );
  return f.useMemo(
    () => ({
      dataRef: i,
      open: t,
      onOpenChange: c,
      elements: m,
      events: l,
      floatingId: o,
      refs: d,
    }),
    [t, c, m, l, o, d]
  );
}
function H3(e) {
  e === void 0 && (e = {});
  const { nodeId: t } = e,
    r = z3({
      ...e,
      elements: { reference: null, floating: null, ...e.elements },
    }),
    n = e.rootContext || r,
    o = n.elements,
    [i, l] = f.useState(null),
    [a, s] = f.useState(null),
    c = (o == null ? void 0 : o.reference) || i,
    d = f.useRef(null),
    m = B3();
  Qu(() => {
    c && (d.current = c);
  }, [c]);
  const h = j3({ ...e, elements: { ...o, ...(a && { reference: a }) } }),
    y = f.useCallback(
      (x) => {
        const E = ct(x)
          ? {
              getBoundingClientRect: () => x.getBoundingClientRect(),
              contextElement: x,
            }
          : x;
        s(E), h.refs.setReference(E);
      },
      [h.refs]
    ),
    w = f.useCallback(
      (x) => {
        (ct(x) || x === null) && ((d.current = x), l(x)),
          (ct(h.refs.reference.current) ||
            h.refs.reference.current === null ||
            (x !== null && !ct(x))) &&
            h.refs.setReference(x);
      },
      [h.refs]
    ),
    k = f.useMemo(
      () => ({
        ...h.refs,
        setReference: w,
        setPositionReference: y,
        domReference: d,
      }),
      [h.refs, w, y]
    ),
    v = f.useMemo(() => ({ ...h.elements, domReference: c }), [h.elements, c]),
    g = f.useMemo(
      () => ({ ...h, ...n, refs: k, elements: v, nodeId: t }),
      [h, k, v, t, n]
    );
  return (
    Qu(() => {
      n.dataRef.current.floatingContext = g;
      const x = m == null ? void 0 : m.nodesRef.current.find((E) => E.id === t);
      x && (x.context = g);
    }),
    f.useMemo(() => ({ ...h, context: g, refs: k, elements: v }), [h, k, v, g])
  );
}
const L0 = "active",
  M0 = "selected";
function Fa(e, t, r) {
  const n = new Map(),
    o = r === "item";
  let i = e;
  if (o && e) {
    const { [L0]: l, [M0]: a, ...s } = e;
    i = s;
  }
  return {
    ...(r === "floating" && { tabIndex: -1 }),
    ...i,
    ...t
      .map((l) => {
        const a = l ? l[r] : null;
        return typeof a == "function" ? (e ? a(e) : null) : a;
      })
      .concat(e)
      .reduce(
        (l, a) => (
          a &&
            Object.entries(a).forEach((s) => {
              let [u, c] = s;
              if (!(o && [L0, M0].includes(u)))
                if (u.indexOf("on") === 0) {
                  if ((n.has(u) || n.set(u, []), typeof c == "function")) {
                    var d;
                    (d = n.get(u)) == null || d.push(c),
                      (l[u] = function () {
                        for (
                          var m, h = arguments.length, y = new Array(h), w = 0;
                          w < h;
                          w++
                        )
                          y[w] = arguments[w];
                        return (m = n.get(u)) == null
                          ? void 0
                          : m.map((k) => k(...y)).find((k) => k !== void 0);
                      });
                  }
                } else l[u] = c;
            }),
          l
        ),
        {}
      ),
  };
}
function U3(e) {
  e === void 0 && (e = []);
  const t = e.map((a) => (a == null ? void 0 : a.reference)),
    r = e.map((a) => (a == null ? void 0 : a.floating)),
    n = e.map((a) => (a == null ? void 0 : a.item)),
    o = f.useCallback((a) => Fa(a, e, "reference"), t),
    i = f.useCallback((a) => Fa(a, e, "floating"), r),
    l = f.useCallback((a) => Fa(a, e, "item"), n);
  return f.useMemo(
    () => ({ getReferenceProps: o, getFloatingProps: i, getItemProps: l }),
    [o, i, l]
  );
}
function D0(e, t) {
  return {
    ...e,
    rects: { ...e.rects, floating: { ...e.rects.floating, height: t } },
  };
}
const V3 = (e) => ({
  name: "inner",
  options: e,
  async fn(t) {
    const {
        listRef: r,
        overflowRef: n,
        onFallbackChange: o,
        offset: i = 0,
        index: l = 0,
        minItemsVisible: a = 4,
        referenceOverflowThreshold: s = 0,
        scrollRef: u,
        ...c
      } = xo(e, t),
      {
        rects: d,
        elements: { floating: m },
      } = t,
      h = r.current[l];
    if (!h) return {};
    const y = {
        ...t,
        ...(await v1(
          -h.offsetTop -
            m.clientTop -
            d.reference.height / 2 -
            h.offsetHeight / 2 -
            i
        ).fn(t)),
      },
      w = (u == null ? void 0 : u.current) || m,
      k = await Da(D0(y, w.scrollHeight), c),
      v = await Da(y, { ...c, elementContext: "reference" }),
      g = Math.max(0, k.top),
      x = y.y + g,
      E = Math.max(0, w.scrollHeight - g - Math.max(0, k.bottom));
    return (
      (w.style.maxHeight = E + "px"),
      (w.scrollTop = g),
      o &&
        (w.offsetHeight <
          h.offsetHeight * Math.min(a, r.current.length - 1) - 1 ||
        v.top >= -s ||
        v.bottom >= -s
          ? ot.flushSync(() => o(!0))
          : ot.flushSync(() => o(!1))),
      n && (n.current = await Da(D0({ ...y, y: x }, w.offsetHeight), c)),
      { y: x }
    );
  },
});
function W3(e, t) {
  const { open: r, elements: n } = e,
    { enabled: o = !0, overflowRef: i, scrollRef: l, onChange: a } = t,
    s = x1(a),
    u = f.useRef(!1),
    c = f.useRef(null),
    d = f.useRef(null);
  f.useEffect(() => {
    if (!o) return;
    function h(w) {
      if (w.ctrlKey || !y || i.current == null) return;
      const k = w.deltaY,
        v = i.current.top >= -0.5,
        g = i.current.bottom >= -0.5,
        x = y.scrollHeight - y.clientHeight,
        E = k < 0 ? -1 : 1,
        $ = k < 0 ? "max" : "min";
      y.scrollHeight <= y.clientHeight ||
        ((!v && k > 0) || (!g && k < 0)
          ? (w.preventDefault(),
            ot.flushSync(() => {
              s((S) => S + Math[$](k, x * E));
            }))
          : /firefox/i.test(Vw()) && (y.scrollTop += k));
    }
    const y = (l == null ? void 0 : l.current) || n.floating;
    if (r && y)
      return (
        y.addEventListener("wheel", h),
        requestAnimationFrame(() => {
          (c.current = y.scrollTop),
            i.current != null && (d.current = { ...i.current });
        }),
        () => {
          (c.current = null),
            (d.current = null),
            y.removeEventListener("wheel", h);
        }
      );
  }, [o, r, n.floating, i, l, s]);
  const m = f.useMemo(
    () => ({
      onKeyDown() {
        u.current = !0;
      },
      onWheel() {
        u.current = !1;
      },
      onPointerMove() {
        u.current = !1;
      },
      onScroll() {
        const h = (l == null ? void 0 : l.current) || n.floating;
        if (!(!i.current || !h || !u.current)) {
          if (c.current !== null) {
            const y = h.scrollTop - c.current;
            ((i.current.bottom < -0.5 && y < -1) ||
              (i.current.top < -0.5 && y > 1)) &&
              ot.flushSync(() => s((w) => w + y));
          }
          requestAnimationFrame(() => {
            c.current = h.scrollTop;
          });
        }
      },
    }),
    [n.floating, s, i, l]
  );
  return f.useMemo(() => (o ? { floating: m } : {}), [o, m]);
}
let wo = f.createContext({
  styles: void 0,
  setReference: () => {},
  setFloating: () => {},
  getReferenceProps: () => ({}),
  getFloatingProps: () => ({}),
  slot: {},
});
wo.displayName = "FloatingContext";
let pd = f.createContext(null);
pd.displayName = "PlacementContext";
function Q3(e) {
  return f.useMemo(
    () => (e ? (typeof e == "string" ? { to: e } : e) : null),
    [e]
  );
}
function K3() {
  return f.useContext(wo).setReference;
}
function Y3() {
  return f.useContext(wo).getReferenceProps;
}
function G3() {
  let { getFloatingProps: e, slot: t } = f.useContext(wo);
  return f.useCallback(
    (...r) => Object.assign({}, e(...r), { "data-anchor": t.anchor }),
    [e, t]
  );
}
function X3(e = null) {
  e === !1 && (e = null), typeof e == "string" && (e = { to: e });
  let t = f.useContext(pd),
    r = f.useMemo(
      () => e,
      [
        JSON.stringify(
          e,
          typeof HTMLElement < "u"
            ? (o, i) => (i instanceof HTMLElement ? i.outerHTML : i)
            : void 0
        ),
      ]
    );
  ue(() => {
    t == null || t(r ?? null);
  }, [t, r]);
  let n = f.useContext(wo);
  return f.useMemo(
    () => [n.setFloating, e ? n.styles : {}],
    [n.setFloating, e, n.styles]
  );
}
let F0 = 4;
function Z3({ children: e, enabled: t = !0 }) {
  let [r, n] = f.useState(null),
    [o, i] = f.useState(0),
    l = f.useRef(null),
    [a, s] = f.useState(null);
  J3(a);
  let u = t && r !== null && a !== null,
    {
      to: c = "bottom",
      gap: d = 0,
      offset: m = 0,
      padding: h = 0,
      inner: y,
    } = q3(r, a),
    [w, k = "center"] = c.split(" ");
  ue(() => {
    u && i(0);
  }, [u]);
  let {
      refs: v,
      floatingStyles: g,
      context: x,
    } = H3({
      open: u,
      placement:
        w === "selection"
          ? k === "center"
            ? "bottom"
            : `bottom-${k}`
          : k === "center"
          ? `${w}`
          : `${w}-${k}`,
      strategy: "absolute",
      transform: !1,
      middleware: [
        v1({ mainAxis: w === "selection" ? 0 : d, crossAxis: m }),
        $3({ padding: h }),
        w !== "selection" && P3({ padding: h }),
        w === "selection" && y
          ? V3({
              ...y,
              padding: h,
              overflowRef: l,
              offset: o,
              minItemsVisible: F0,
              referenceOverflowThreshold: h,
              onFallbackChange(_) {
                var W, Y;
                if (!_) return;
                let K = x.elements.floating;
                if (!K) return;
                let z =
                    parseFloat(getComputedStyle(K).scrollPaddingBottom) || 0,
                  oe = Math.min(F0, K.childElementCount),
                  B = 0,
                  M = 0;
                for (let I of (Y =
                  (W = x.elements.floating) == null ? void 0 : W.childNodes) !=
                null
                  ? Y
                  : [])
                  if (I instanceof HTMLElement) {
                    let F = I.offsetTop,
                      U = F + I.clientHeight + z,
                      Z = K.scrollTop,
                      ie = Z + K.clientHeight;
                    if (F >= Z && U <= ie) oe--;
                    else {
                      (M = Math.max(0, Math.min(U, ie) - Math.max(F, Z))),
                        (B = I.clientHeight);
                      break;
                    }
                  }
                oe >= 1 &&
                  i((I) => {
                    let F = B * oe - M + z;
                    return I >= F ? I : F;
                  });
              },
            })
          : null,
        N3({
          padding: h,
          apply({ availableWidth: _, availableHeight: W, elements: Y }) {
            Object.assign(Y.floating.style, {
              overflow: "auto",
              maxWidth: `${_}px`,
              maxHeight: `min(var(--anchor-max-height, 100vh), ${W}px)`,
            });
          },
        }),
      ].filter(Boolean),
      whileElementsMounted: w3,
    }),
    [E = w, $ = k] = x.placement.split("-");
  w === "selection" && (E = "selection");
  let S = f.useMemo(
      () => ({ anchor: [E, $].filter(Boolean).join(" ") }),
      [E, $]
    ),
    P = W3(x, { overflowRef: l, onChange: i }),
    { getReferenceProps: j, getFloatingProps: R } = U3([P]),
    L = X((_) => {
      s(_), v.setFloating(_);
    });
  return f.createElement(
    pd.Provider,
    { value: n },
    f.createElement(
      wo.Provider,
      {
        value: {
          setFloating: L,
          setReference: v.setReference,
          styles: g,
          getReferenceProps: j,
          getFloatingProps: R,
          slot: S,
        },
      },
      e
    )
  );
}
function J3(e) {
  ue(() => {
    if (!e) return;
    let t = new MutationObserver(() => {
      let r = window.getComputedStyle(e).maxHeight,
        n = parseFloat(r);
      if (isNaN(n)) return;
      let o = parseInt(r);
      isNaN(o) || (n !== o && (e.style.maxHeight = `${Math.ceil(n)}px`));
    });
    return (
      t.observe(e, { attributes: !0, attributeFilter: ["style"] }),
      () => {
        t.disconnect();
      }
    );
  }, [e]);
}
function q3(e, t) {
  var r, n, o;
  let i = Oa(
      (r = e == null ? void 0 : e.gap) != null ? r : "var(--anchor-gap, 0)",
      t
    ),
    l = Oa(
      (n = e == null ? void 0 : e.offset) != null
        ? n
        : "var(--anchor-offset, 0)",
      t
    ),
    a = Oa(
      (o = e == null ? void 0 : e.padding) != null
        ? o
        : "var(--anchor-padding, 0)",
      t
    );
  return { ...e, gap: i, offset: l, padding: a };
}
function Oa(e, t, r = void 0) {
  let n = bn(),
    o = X((s, u) => {
      if (s == null) return [r, null];
      if (typeof s == "number") return [s, null];
      if (typeof s == "string") {
        if (!u) return [r, null];
        let c = O0(s, u);
        return [
          c,
          (d) => {
            let m = w1(s);
            {
              let h = m.map((y) =>
                window.getComputedStyle(u).getPropertyValue(y)
              );
              n.requestAnimationFrame(function y() {
                n.nextFrame(y);
                let w = !1;
                for (let [v, g] of m.entries()) {
                  let x = window.getComputedStyle(u).getPropertyValue(g);
                  if (h[v] !== x) {
                    (h[v] = x), (w = !0);
                    break;
                  }
                }
                if (!w) return;
                let k = O0(s, u);
                c !== k && (d(k), (c = k));
              });
            }
            return n.dispose;
          },
        ];
      }
      return [r, null];
    }),
    i = f.useMemo(() => o(e, t)[0], [e, t]),
    [l = i, a] = f.useState();
  return (
    ue(() => {
      let [s, u] = o(e, t);
      if ((a(s), !!u)) return u(a);
    }, [e, t]),
    l
  );
}
function w1(e) {
  let t = /var\((.*)\)/.exec(e);
  if (t) {
    let r = t[1].indexOf(",");
    if (r === -1) return [t[1]];
    let n = t[1].slice(0, r).trim(),
      o = t[1].slice(r + 1).trim();
    return o ? [n, ...w1(o)] : [n];
  }
  return [];
}
function O0(e, t) {
  let r = document.createElement("div");
  t.appendChild(r),
    r.style.setProperty("margin-top", "0px", "important"),
    r.style.setProperty("margin-top", e, "important");
  let n = parseFloat(window.getComputedStyle(r).marginTop) || 0;
  return t.removeChild(r), n;
}
let Hs = f.createContext(null);
Hs.displayName = "OpenClosedContext";
var Be = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(Be || {});
function ko() {
  return f.useContext(Hs);
}
function md({ value: e, children: t }) {
  return D.createElement(Hs.Provider, { value: e }, t);
}
function k1({ children: e }) {
  return D.createElement(Hs.Provider, { value: null }, e);
}
function e4(e) {
  function t() {
    document.readyState !== "loading" &&
      (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" &&
    typeof document < "u" &&
    (document.addEventListener("DOMContentLoaded", t), t());
}
let br = [];
e4(() => {
  function e(t) {
    if (
      !(t.target instanceof HTMLElement) ||
      t.target === document.body ||
      br[0] === t.target
    )
      return;
    let r = t.target;
    (r = r.closest(is)),
      br.unshift(r ?? t.target),
      (br = br.filter((n) => n != null && n.isConnected)),
      br.splice(10);
  }
  window.addEventListener("click", e, { capture: !0 }),
    window.addEventListener("mousedown", e, { capture: !0 }),
    window.addEventListener("focus", e, { capture: !0 }),
    document.body.addEventListener("click", e, { capture: !0 }),
    document.body.addEventListener("mousedown", e, { capture: !0 }),
    document.body.addEventListener("focus", e, { capture: !0 });
});
function t4(e) {
  throw new Error("Unexpected object: " + e);
}
var Xe = ((e) => (
  (e[(e.First = 0)] = "First"),
  (e[(e.Previous = 1)] = "Previous"),
  (e[(e.Next = 2)] = "Next"),
  (e[(e.Last = 3)] = "Last"),
  (e[(e.Specific = 4)] = "Specific"),
  (e[(e.Nothing = 5)] = "Nothing"),
  e
))(Xe || {});
function Ia(e, t) {
  let r = t.resolveItems();
  if (r.length <= 0) return null;
  let n = t.resolveActiveIndex(),
    o = n ?? -1;
  switch (e.focus) {
    case 0: {
      for (let i = 0; i < r.length; ++i)
        if (!t.resolveDisabled(r[i], i, r)) return i;
      return n;
    }
    case 1: {
      o === -1 && (o = r.length);
      for (let i = o - 1; i >= 0; --i)
        if (!t.resolveDisabled(r[i], i, r)) return i;
      return n;
    }
    case 2: {
      for (let i = o + 1; i < r.length; ++i)
        if (!t.resolveDisabled(r[i], i, r)) return i;
      return n;
    }
    case 3: {
      for (let i = r.length - 1; i >= 0; --i)
        if (!t.resolveDisabled(r[i], i, r)) return i;
      return n;
    }
    case 4: {
      for (let i = 0; i < r.length; ++i)
        if (t.resolveId(r[i], i, r) === e.id) return i;
      return n;
    }
    case 5:
      return null;
    default:
      t4(e);
  }
}
function S1(e) {
  let t = X(e),
    r = f.useRef(!1);
  f.useEffect(
    () => (
      (r.current = !1),
      () => {
        (r.current = !0),
          Ls(() => {
            r.current && t();
          });
      }
    ),
    [t]
  );
}
function r4() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in Rl
    ? ((t) => t.useSyncExternalStore)(Rl)(
        () => () => {},
        () => !1,
        () => !e
      )
    : !1;
}
function Ii() {
  let e = r4(),
    [t, r] = f.useState(dn.isHandoffComplete);
  return (
    t && dn.isHandoffComplete === !1 && r(!1),
    f.useEffect(() => {
      t !== !0 && r(!0);
    }, [t]),
    f.useEffect(() => dn.handoff(), []),
    e ? !1 : t
  );
}
let E1 = f.createContext(!1);
function n4() {
  return f.useContext(E1);
}
function I0(e) {
  return D.createElement(E1.Provider, { value: e.force }, e.children);
}
function o4(e) {
  let t = n4(),
    r = f.useContext(b1),
    n = vo(e),
    [o, i] = f.useState(() => {
      var l;
      if (!t && r !== null) return (l = r.current) != null ? l : null;
      if (dn.isServer) return null;
      let a = n == null ? void 0 : n.getElementById("headlessui-portal-root");
      if (a) return a;
      if (n === null) return null;
      let s = n.createElement("div");
      return (
        s.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(s)
      );
    });
  return (
    f.useEffect(() => {
      o !== null &&
        ((n != null && n.body.contains(o)) ||
          n == null ||
          n.body.appendChild(o));
    }, [o, n]),
    f.useEffect(() => {
      t || (r !== null && i(r.current));
    }, [r, i, t]),
    o
  );
}
let C1 = f.Fragment,
  i4 = ve(function (e, t) {
    let r = e,
      n = f.useRef(null),
      o = De(
        Vh((c) => {
          n.current = c;
        }),
        t
      ),
      i = vo(n),
      l = o4(n),
      [a] = f.useState(() => {
        var c;
        return dn.isServer
          ? null
          : (c = i == null ? void 0 : i.createElement("div")) != null
          ? c
          : null;
      }),
      s = f.useContext(Ku),
      u = Ii();
    return (
      ue(() => {
        !l ||
          !a ||
          l.contains(a) ||
          (a.setAttribute("data-headlessui-portal", ""), l.appendChild(a));
      }, [l, a]),
      ue(() => {
        if (a && s) return s.register(a);
      }, [s, a]),
      S1(() => {
        var c;
        !l ||
          !a ||
          (a instanceof Node && l.contains(a) && l.removeChild(a),
          l.childNodes.length <= 0 &&
            ((c = l.parentElement) == null || c.removeChild(l)));
      }),
      u
        ? !l || !a
          ? null
          : ot.createPortal(
              Se({
                ourProps: { ref: o },
                theirProps: r,
                slot: {},
                defaultTag: C1,
                name: "Portal",
              }),
              a
            )
        : null
    );
  });
function l4(e, t) {
  let r = De(t),
    { enabled: n = !0, ...o } = e;
  return n
    ? D.createElement(i4, { ...o, ref: r })
    : Se({
        ourProps: { ref: r },
        theirProps: o,
        slot: {},
        defaultTag: C1,
        name: "Portal",
      });
}
let s4 = f.Fragment,
  b1 = f.createContext(null);
function a4(e, t) {
  let { target: r, ...n } = e,
    o = { ref: De(t) };
  return D.createElement(
    b1.Provider,
    { value: r },
    Se({ ourProps: o, theirProps: n, defaultTag: s4, name: "Popover.Group" })
  );
}
let Ku = f.createContext(null);
function u4() {
  let e = f.useContext(Ku),
    t = f.useRef([]),
    r = X((i) => (t.current.push(i), e && e.register(i), () => n(i))),
    n = X((i) => {
      let l = t.current.indexOf(i);
      l !== -1 && t.current.splice(l, 1), e && e.unregister(i);
    }),
    o = f.useMemo(
      () => ({ register: r, unregister: n, portals: t }),
      [r, n, t]
    );
  return [
    t,
    f.useMemo(
      () =>
        function ({ children: i }) {
          return D.createElement(Ku.Provider, { value: o }, i);
        },
      [o]
    ),
  ];
}
let c4 = ve(l4),
  j1 = ve(a4),
  $1 = Object.assign(c4, { Group: j1 });
function d4(e, t = typeof document < "u" ? document.defaultView : null, r) {
  let n = go(e, "escape");
  n1(t, "keydown", (o) => {
    n && (o.defaultPrevented || (o.key === me.Escape && r(o)));
  });
}
function f4() {
  var e;
  let [t] = f.useState(() =>
      typeof window < "u" && typeof window.matchMedia == "function"
        ? window.matchMedia("(pointer: coarse)")
        : null
    ),
    [r, n] = f.useState((e = t == null ? void 0 : t.matches) != null ? e : !1);
  return (
    ue(() => {
      if (!t) return;
      function o(i) {
        n(i.matches);
      }
      return (
        t.addEventListener("change", o),
        () => t.removeEventListener("change", o)
      );
    }, [t]),
    r
  );
}
function p4({ defaultContainers: e = [], portals: t, mainTreeNode: r } = {}) {
  let n = vo(r),
    o = X(() => {
      var i, l;
      let a = [];
      for (let s of e)
        s !== null &&
          (s instanceof HTMLElement
            ? a.push(s)
            : "current" in s &&
              s.current instanceof HTMLElement &&
              a.push(s.current));
      if (t != null && t.current) for (let s of t.current) a.push(s);
      for (let s of (i =
        n == null ? void 0 : n.querySelectorAll("html > *, body > *")) != null
        ? i
        : [])
        s !== document.body &&
          s !== document.head &&
          s instanceof HTMLElement &&
          s.id !== "headlessui-portal-root" &&
          ((r &&
            (s.contains(r) ||
              s.contains(
                (l = r == null ? void 0 : r.getRootNode()) == null
                  ? void 0
                  : l.host
              ))) ||
            a.some((u) => s.contains(u)) ||
            a.push(s));
      return a;
    });
  return {
    resolveContainers: o,
    contains: X((i) => o().some((l) => l.contains(i))),
  };
}
let P1 = f.createContext(null);
function _0({ children: e, node: t }) {
  let [r, n] = f.useState(null),
    o = N1(t ?? r);
  return D.createElement(
    P1.Provider,
    { value: o },
    e,
    o === null &&
      D.createElement(Si, {
        features: so.Hidden,
        ref: (i) => {
          var l, a;
          if (i) {
            for (let s of (a =
              (l = fr(i)) == null
                ? void 0
                : l.querySelectorAll("html > *, body > *")) != null
              ? a
              : [])
              if (
                s !== document.body &&
                s !== document.head &&
                s instanceof HTMLElement &&
                s != null &&
                s.contains(i)
              ) {
                n(s);
                break;
              }
          }
        },
      })
  );
}
function N1(e = null) {
  var t;
  return (t = f.useContext(P1)) != null ? t : e;
}
function hd() {
  let e = f.useRef(!1);
  return (
    ue(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
var Uo = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(Uo || {});
function m4() {
  let e = f.useRef(0);
  return (
    t1(
      !0,
      "keydown",
      (t) => {
        t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
      },
      !0
    ),
    e
  );
}
function R1(e) {
  if (!e) return new Set();
  if (typeof e == "function") return new Set(e());
  let t = new Set();
  for (let r of e.current) r.current instanceof HTMLElement && t.add(r.current);
  return t;
}
let h4 = "div";
var en = ((e) => (
  (e[(e.None = 0)] = "None"),
  (e[(e.InitialFocus = 1)] = "InitialFocus"),
  (e[(e.TabLock = 2)] = "TabLock"),
  (e[(e.FocusLock = 4)] = "FocusLock"),
  (e[(e.RestoreFocus = 8)] = "RestoreFocus"),
  (e[(e.AutoFocus = 16)] = "AutoFocus"),
  e
))(en || {});
function g4(e, t) {
  let r = f.useRef(null),
    n = De(r, t),
    {
      initialFocus: o,
      initialFocusFallback: i,
      containers: l,
      features: a = 15,
      ...s
    } = e;
  Ii() || (a = 0);
  let u = vo(r);
  w4(a, { ownerDocument: u });
  let c = k4(a, {
    ownerDocument: u,
    container: r,
    initialFocus: o,
    initialFocusFallback: i,
  });
  S4(a, {
    ownerDocument: u,
    container: r,
    containers: l,
    previousActiveElement: c,
  });
  let d = m4(),
    m = X((v) => {
      let g = r.current;
      g &&
        ((x) => x())(() => {
          mt(d.current, {
            [Uo.Forwards]: () => {
              Ar(g, tt.First, { skipElements: [v.relatedTarget, i] });
            },
            [Uo.Backwards]: () => {
              Ar(g, tt.Last, { skipElements: [v.relatedTarget, i] });
            },
          });
        });
    }),
    h = go(!!(a & 2), "focus-trap#tab-lock"),
    y = bn(),
    w = f.useRef(!1),
    k = {
      ref: n,
      onKeyDown(v) {
        v.key == "Tab" &&
          ((w.current = !0),
          y.requestAnimationFrame(() => {
            w.current = !1;
          }));
      },
      onBlur(v) {
        if (!(a & 4)) return;
        let g = R1(l);
        r.current instanceof HTMLElement && g.add(r.current);
        let x = v.relatedTarget;
        x instanceof HTMLElement &&
          x.dataset.headlessuiFocusGuard !== "true" &&
          (T1(g, x) ||
            (w.current
              ? Ar(
                  r.current,
                  mt(d.current, {
                    [Uo.Forwards]: () => tt.Next,
                    [Uo.Backwards]: () => tt.Previous,
                  }) | tt.WrapAround,
                  { relativeTo: v.target }
                )
              : v.target instanceof HTMLElement && Gt(v.target)));
      },
    };
  return D.createElement(
    D.Fragment,
    null,
    h &&
      D.createElement(Si, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: m,
        features: so.Focusable,
      }),
    Se({ ourProps: k, theirProps: s, defaultTag: h4, name: "FocusTrap" }),
    h &&
      D.createElement(Si, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: m,
        features: so.Focusable,
      })
  );
}
let v4 = ve(g4),
  y4 = Object.assign(v4, { features: en });
function x4(e = !0) {
  let t = f.useRef(br.slice());
  return (
    ud(
      ([r], [n]) => {
        n === !0 &&
          r === !1 &&
          Ls(() => {
            t.current.splice(0);
          }),
          n === !1 && r === !0 && (t.current = br.slice());
      },
      [e, br, t]
    ),
    X(() => {
      var r;
      return (r = t.current.find((n) => n != null && n.isConnected)) != null
        ? r
        : null;
    })
  );
}
function w4(e, { ownerDocument: t }) {
  let r = !!(e & 8),
    n = x4(r);
  ud(() => {
    r ||
      ((t == null ? void 0 : t.activeElement) ===
        (t == null ? void 0 : t.body) &&
        Gt(n()));
  }, [r]),
    S1(() => {
      r && Gt(n());
    });
}
function k4(
  e,
  { ownerDocument: t, container: r, initialFocus: n, initialFocusFallback: o }
) {
  let i = f.useRef(null),
    l = go(!!(e & 1), "focus-trap#initial-focus"),
    a = hd();
  return (
    ud(() => {
      if (e === 0) return;
      if (!l) {
        o != null && o.current && Gt(o.current);
        return;
      }
      let s = r.current;
      s &&
        Ls(() => {
          if (!a.current) return;
          let u = t == null ? void 0 : t.activeElement;
          if (n != null && n.current) {
            if ((n == null ? void 0 : n.current) === u) {
              i.current = u;
              return;
            }
          } else if (s.contains(u)) {
            i.current = u;
            return;
          }
          if (n != null && n.current) Gt(n.current);
          else {
            if (e & 16) {
              if (Ar(s, tt.First | tt.AutoFocus) !== Ei.Error) return;
            } else if (Ar(s, tt.First) !== Ei.Error) return;
            if (
              o != null &&
              o.current &&
              (Gt(o.current),
              (t == null ? void 0 : t.activeElement) === o.current)
            )
              return;
            console.warn(
              "There are no focusable elements inside the <FocusTrap />"
            );
          }
          i.current = t == null ? void 0 : t.activeElement;
        });
    }, [o, l, e]),
    i
  );
}
function S4(
  e,
  { ownerDocument: t, container: r, containers: n, previousActiveElement: o }
) {
  let i = hd(),
    l = !!(e & 4);
  n1(
    t == null ? void 0 : t.defaultView,
    "focus",
    (a) => {
      if (!l || !i.current) return;
      let s = R1(n);
      r.current instanceof HTMLElement && s.add(r.current);
      let u = o.current;
      if (!u) return;
      let c = a.target;
      c && c instanceof HTMLElement
        ? T1(s, c)
          ? ((o.current = c), Gt(c))
          : (a.preventDefault(), a.stopPropagation(), Gt(u))
        : Gt(o.current);
    },
    !0
  );
}
function T1(e, t) {
  for (let r of e) if (r.contains(t)) return !0;
  return !1;
}
function L1(e) {
  var t;
  return (
    !!(
      e.enter ||
      e.enterFrom ||
      e.enterTo ||
      e.leave ||
      e.leaveFrom ||
      e.leaveTo
    ) ||
    ((t = e.as) != null ? t : D1) !== f.Fragment ||
    D.Children.count(e.children) === 1
  );
}
let Us = f.createContext(null);
Us.displayName = "TransitionContext";
var E4 = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(E4 || {});
function C4() {
  let e = f.useContext(Us);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
function b4() {
  let e = f.useContext(Vs);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
let Vs = f.createContext(null);
Vs.displayName = "NestingContext";
function Ws(e) {
  return "children" in e
    ? Ws(e.children)
    : e.current
        .filter(({ el: t }) => t.current !== null)
        .filter(({ state: t }) => t === "visible").length > 0;
}
function M1(e, t) {
  let r = pr(e),
    n = f.useRef([]),
    o = hd(),
    i = bn(),
    l = X((h, y = Nr.Hidden) => {
      let w = n.current.findIndex(({ el: k }) => k === h);
      w !== -1 &&
        (mt(y, {
          [Nr.Unmount]() {
            n.current.splice(w, 1);
          },
          [Nr.Hidden]() {
            n.current[w].state = "hidden";
          },
        }),
        i.microTask(() => {
          var k;
          !Ws(n) && o.current && ((k = r.current) == null || k.call(r));
        }));
    }),
    a = X((h) => {
      let y = n.current.find(({ el: w }) => w === h);
      return (
        y
          ? y.state !== "visible" && (y.state = "visible")
          : n.current.push({ el: h, state: "visible" }),
        () => l(h, Nr.Unmount)
      );
    }),
    s = f.useRef([]),
    u = f.useRef(Promise.resolve()),
    c = f.useRef({ enter: [], leave: [] }),
    d = X((h, y, w) => {
      s.current.splice(0),
        t &&
          (t.chains.current[y] = t.chains.current[y].filter(([k]) => k !== h)),
        t == null ||
          t.chains.current[y].push([
            h,
            new Promise((k) => {
              s.current.push(k);
            }),
          ]),
        t == null ||
          t.chains.current[y].push([
            h,
            new Promise((k) => {
              Promise.all(c.current[y].map(([v, g]) => g)).then(() => k());
            }),
          ]),
        y === "enter"
          ? (u.current = u.current
              .then(() => (t == null ? void 0 : t.wait.current))
              .then(() => w(y)))
          : w(y);
    }),
    m = X((h, y, w) => {
      Promise.all(c.current[y].splice(0).map(([k, v]) => v))
        .then(() => {
          var k;
          (k = s.current.shift()) == null || k();
        })
        .then(() => w(y));
    });
  return f.useMemo(
    () => ({
      children: n,
      register: a,
      unregister: l,
      onStart: d,
      onStop: m,
      wait: u,
      chains: c,
    }),
    [a, l, n, d, m, c, u]
  );
}
let D1 = f.Fragment,
  F1 = Hr.RenderStrategy;
function j4(e, t) {
  var r, n;
  let {
      transition: o = !0,
      beforeEnter: i,
      afterEnter: l,
      beforeLeave: a,
      afterLeave: s,
      enter: u,
      enterFrom: c,
      enterTo: d,
      entered: m,
      leave: h,
      leaveFrom: y,
      leaveTo: w,
      ...k
    } = e,
    v = f.useRef(null),
    g = L1(e),
    x = De(...(g ? [v, t] : t === null ? [] : [t])),
    E = (r = k.unmount) == null || r ? Nr.Unmount : Nr.Hidden,
    { show: $, appear: S, initial: P } = C4(),
    [j, R] = f.useState($ ? "visible" : "hidden"),
    L = b4(),
    { register: _, unregister: W } = L;
  ue(() => _(v), [_, v]),
    ue(() => {
      if (E === Nr.Hidden && v.current) {
        if ($ && j !== "visible") {
          R("visible");
          return;
        }
        return mt(j, { hidden: () => W(v), visible: () => _(v) });
      }
    }, [j, v, _, W, $, E]);
  let Y = Ii();
  ue(() => {
    if (g && Y && j === "visible" && v.current === null)
      throw new Error(
        "Did you forget to passthrough the `ref` to the actual DOM node?"
      );
  }, [v, j, Y, g]);
  let K = P && !S,
    z = S && $ && P,
    oe = f.useRef(!1),
    B = M1(() => {
      oe.current || (R("hidden"), W(v));
    }, L),
    M = X((ee) => {
      oe.current = !0;
      let se = ee ? "enter" : "leave";
      B.onStart(v, se, (fe) => {
        fe === "enter"
          ? i == null || i()
          : fe === "leave" && (a == null || a());
      });
    }),
    I = X((ee) => {
      let se = ee ? "enter" : "leave";
      (oe.current = !1),
        B.onStop(v, se, (fe) => {
          fe === "enter"
            ? l == null || l()
            : fe === "leave" && (s == null || s());
        }),
        se === "leave" && !Ws(B) && (R("hidden"), W(v));
    });
  f.useEffect(() => {
    (g && o) || (M($), I($));
  }, [$, g, o]);
  let F = !(!o || !g || !Y || K),
    [, U] = ad(F, v, $, { start: M, end: I }),
    Z = Sr({
      ref: x,
      className:
        ((n = Uu(
          k.className,
          z && u,
          z && c,
          U.enter && u,
          U.enter && U.closed && c,
          U.enter && !U.closed && d,
          U.leave && h,
          U.leave && !U.closed && y,
          U.leave && U.closed && w,
          !U.transition && $ && m
        )) == null
          ? void 0
          : n.trim()) || void 0,
      ...sd(U),
    }),
    ie = 0;
  return (
    j === "visible" && (ie |= Be.Open),
    j === "hidden" && (ie |= Be.Closed),
    U.enter && (ie |= Be.Opening),
    U.leave && (ie |= Be.Closing),
    D.createElement(
      Vs.Provider,
      { value: B },
      D.createElement(
        md,
        { value: ie },
        Se({
          ourProps: Z,
          theirProps: k,
          defaultTag: D1,
          features: F1,
          visible: j === "visible",
          name: "Transition.Child",
        })
      )
    )
  );
}
function $4(e, t) {
  let { show: r, appear: n = !1, unmount: o = !0, ...i } = e,
    l = f.useRef(null),
    a = L1(e),
    s = De(...(a ? [l, t] : t === null ? [] : [t]));
  Ii();
  let u = ko();
  if (
    (r === void 0 && u !== null && (r = (u & Be.Open) === Be.Open),
    r === void 0)
  )
    throw new Error(
      "A <Transition /> is used but it is missing a `show={true | false}` prop."
    );
  let [c, d] = f.useState(r ? "visible" : "hidden"),
    m = M1(() => {
      r || d("hidden");
    }),
    [h, y] = f.useState(!0),
    w = f.useRef([r]);
  ue(() => {
    h !== !1 &&
      w.current[w.current.length - 1] !== r &&
      (w.current.push(r), y(!1));
  }, [w, r]);
  let k = f.useMemo(() => ({ show: r, appear: n, initial: h }), [r, n, h]);
  nd(r, l, () => d("hidden")),
    ue(() => {
      r ? d("visible") : !Ws(m) && l.current !== null && d("hidden");
    }, [r, m]);
  let v = { unmount: o },
    g = X(() => {
      var E;
      h && y(!1), (E = e.beforeEnter) == null || E.call(e);
    }),
    x = X(() => {
      var E;
      h && y(!1), (E = e.beforeLeave) == null || E.call(e);
    });
  return D.createElement(
    Vs.Provider,
    { value: m },
    D.createElement(
      Us.Provider,
      { value: k },
      Se({
        ourProps: {
          ...v,
          as: f.Fragment,
          children: D.createElement(O1, {
            ref: s,
            ...v,
            ...i,
            beforeEnter: g,
            beforeLeave: x,
          }),
        },
        theirProps: {},
        defaultTag: f.Fragment,
        features: F1,
        visible: c === "visible",
        name: "Transition",
      })
    )
  );
}
function P4(e, t) {
  let r = f.useContext(Us) !== null,
    n = ko() !== null;
  return D.createElement(
    D.Fragment,
    null,
    !r && n
      ? D.createElement(Yu, { ref: t, ...e })
      : D.createElement(O1, { ref: t, ...e })
  );
}
let Yu = ve($4),
  O1 = ve(j4),
  gd = ve(P4),
  N4 = Object.assign(Yu, { Child: gd, Root: Yu });
var R4 = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(R4 || {}),
  T4 = ((e) => ((e[(e.SetTitleId = 0)] = "SetTitleId"), e))(T4 || {});
let L4 = {
    0(e, t) {
      return e.titleId === t.id ? e : { ...e, titleId: t.id };
    },
  },
  vd = f.createContext(null);
vd.displayName = "DialogContext";
function Qs(e) {
  let t = f.useContext(vd);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(r, Qs), r);
  }
  return t;
}
function M4(e, t) {
  return mt(t.type, L4, e, t);
}
let A0 = ve(function (e, t) {
    let r = f.useId(),
      {
        id: n = `headlessui-dialog-${r}`,
        open: o,
        onClose: i,
        initialFocus: l,
        role: a = "dialog",
        autoFocus: s = !0,
        __demoMode: u = !1,
        unmount: c = !1,
        ...d
      } = e,
      m = f.useRef(!1);
    a = (function () {
      return a === "dialog" || a === "alertdialog"
        ? a
        : (m.current ||
            ((m.current = !0),
            console.warn(
              `Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`
            )),
          "dialog");
    })();
    let h = ko();
    o === void 0 && h !== null && (o = (h & Be.Open) === Be.Open);
    let y = f.useRef(null),
      w = De(y, t),
      k = vo(y),
      v = o ? 0 : 1,
      [g, x] = f.useReducer(M4, {
        titleId: null,
        descriptionId: null,
        panelRef: f.createRef(),
      }),
      E = X(() => i(!1)),
      $ = X((F) => x({ type: 0, id: F })),
      S = Ii() ? v === 0 : !1,
      [P, j] = u4(),
      R = {
        get current() {
          var F;
          return (F = g.panelRef.current) != null ? F : y.current;
        },
      },
      L = N1(),
      { resolveContainers: _ } = p4({
        mainTreeNode: L,
        portals: P,
        defaultContainers: [R],
      }),
      W = h !== null ? (h & Be.Closing) === Be.Closing : !1;
    Zh(u || W ? !1 : S, {
      allowed: X(() => {
        var F, U;
        return [
          (U =
            (F = y.current) == null
              ? void 0
              : F.closest("[data-headlessui-portal]")) != null
            ? U
            : null,
        ];
      }),
      disallowed: X(() => {
        var F;
        return [
          (F =
            L == null
              ? void 0
              : L.closest("body > *:not(#headlessui-portal-root)")) != null
            ? F
            : null,
        ];
      }),
    }),
      r1(S, _, (F) => {
        F.preventDefault(), E();
      }),
      d4(S, k == null ? void 0 : k.defaultView, (F) => {
        F.preventDefault(),
          F.stopPropagation(),
          document.activeElement &&
            "blur" in document.activeElement &&
            typeof document.activeElement.blur == "function" &&
            document.activeElement.blur(),
          E();
      }),
      i1(u || W ? !1 : S, k, _),
      nd(S, y, E);
    let [Y, K] = Os(),
      z = f.useMemo(
        () => [{ dialogState: v, close: E, setTitleId: $, unmount: c }, g],
        [v, g, E, $, c]
      ),
      oe = f.useMemo(() => ({ open: v === 0 }), [v]),
      B = {
        ref: w,
        id: n,
        role: a,
        tabIndex: -1,
        "aria-modal": u ? void 0 : v === 0 ? !0 : void 0,
        "aria-labelledby": g.titleId,
        "aria-describedby": Y,
        unmount: c,
      },
      M = !f4(),
      I = en.None;
    return (
      S &&
        !u &&
        ((I |= en.RestoreFocus),
        (I |= en.TabLock),
        s && (I |= en.AutoFocus),
        M && (I |= en.InitialFocus)),
      D.createElement(
        k1,
        null,
        D.createElement(
          I0,
          { force: !0 },
          D.createElement(
            $1,
            null,
            D.createElement(
              vd.Provider,
              { value: z },
              D.createElement(
                j1,
                { target: y },
                D.createElement(
                  I0,
                  { force: !1 },
                  D.createElement(
                    K,
                    { slot: oe },
                    D.createElement(
                      j,
                      null,
                      D.createElement(
                        y4,
                        {
                          initialFocus: l,
                          initialFocusFallback: y,
                          containers: _,
                          features: I,
                        },
                        D.createElement(
                          Yh,
                          { value: E },
                          Se({
                            ourProps: B,
                            theirProps: d,
                            slot: oe,
                            defaultTag: D4,
                            features: F4,
                            visible: v === 0,
                            name: "Dialog",
                          })
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    );
  }),
  D4 = "div",
  F4 = Hr.RenderStrategy | Hr.Static;
function O4(e, t) {
  let { transition: r = !1, open: n, ...o } = e,
    i = ko(),
    l = e.hasOwnProperty("open") || i !== null,
    a = e.hasOwnProperty("onClose");
  if (!l && !a)
    throw new Error(
      "You have to provide an `open` and an `onClose` prop to the `Dialog` component."
    );
  if (!l)
    throw new Error(
      "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop."
    );
  if (!a)
    throw new Error(
      "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop."
    );
  if (!i && typeof e.open != "boolean")
    throw new Error(
      `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`
    );
  if (typeof e.onClose != "function")
    throw new Error(
      `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`
    );
  return (n !== void 0 || r) && !o.static
    ? D.createElement(
        _0,
        null,
        D.createElement(
          N4,
          { show: n, transition: r, unmount: o.unmount },
          D.createElement(A0, { ref: t, ...o })
        )
      )
    : D.createElement(_0, null, D.createElement(A0, { ref: t, open: n, ...o }));
}
let I4 = "div";
function _4(e, t) {
  let r = f.useId(),
    { id: n = `headlessui-dialog-panel-${r}`, transition: o = !1, ...i } = e,
    [{ dialogState: l, unmount: a }, s] = Qs("Dialog.Panel"),
    u = De(t, s.panelRef),
    c = f.useMemo(() => ({ open: l === 0 }), [l]),
    d = X((h) => {
      h.stopPropagation();
    }),
    m = { ref: u, id: n, onClick: d };
  return D.createElement(
    o ? gd : f.Fragment,
    { ...(o ? { unmount: a } : {}) },
    Se({
      ourProps: m,
      theirProps: i,
      slot: c,
      defaultTag: I4,
      name: "Dialog.Panel",
    })
  );
}
let A4 = "div";
function B4(e, t) {
  let { transition: r = !1, ...n } = e,
    [{ dialogState: o, unmount: i }] = Qs("Dialog.Backdrop"),
    l = f.useMemo(() => ({ open: o === 0 }), [o]),
    a = { ref: t, "aria-hidden": !0 };
  return D.createElement(
    r ? gd : f.Fragment,
    { ...(r ? { unmount: i } : {}) },
    Se({
      ourProps: a,
      theirProps: n,
      slot: l,
      defaultTag: A4,
      name: "Dialog.Backdrop",
    })
  );
}
let z4 = "h2";
function H4(e, t) {
  let r = f.useId(),
    { id: n = `headlessui-dialog-title-${r}`, ...o } = e,
    [{ dialogState: i, setTitleId: l }] = Qs("Dialog.Title"),
    a = De(t);
  f.useEffect(() => (l(n), () => l(null)), [n, l]);
  let s = f.useMemo(() => ({ open: i === 0 }), [i]);
  return Se({
    ourProps: { ref: a, id: n },
    theirProps: o,
    slot: s,
    defaultTag: z4,
    name: "Dialog.Title",
  });
}
let U4 = ve(O4),
  I1 = ve(_4),
  V4 = ve(B4),
  _1 = ve(H4),
  W4 = Object.assign(U4, { Panel: I1, Title: _1, Description: Qh });
var B0;
let Q4 =
  (B0 = D.startTransition) != null
    ? B0
    : function (e) {
        e();
      };
var K4 = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(K4 || {}),
  Y4 = ((e) => (
    (e[(e.ToggleDisclosure = 0)] = "ToggleDisclosure"),
    (e[(e.CloseDisclosure = 1)] = "CloseDisclosure"),
    (e[(e.SetButtonId = 2)] = "SetButtonId"),
    (e[(e.SetPanelId = 3)] = "SetPanelId"),
    (e[(e.LinkPanel = 4)] = "LinkPanel"),
    (e[(e.UnlinkPanel = 5)] = "UnlinkPanel"),
    e
  ))(Y4 || {});
let G4 = {
    0: (e) => ({
      ...e,
      disclosureState: mt(e.disclosureState, { 0: 1, 1: 0 }),
    }),
    1: (e) => (e.disclosureState === 1 ? e : { ...e, disclosureState: 1 }),
    4(e) {
      return e.linkedPanel === !0 ? e : { ...e, linkedPanel: !0 };
    },
    5(e) {
      return e.linkedPanel === !1 ? e : { ...e, linkedPanel: !1 };
    },
    2(e, t) {
      return e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId };
    },
    3(e, t) {
      return e.panelId === t.panelId ? e : { ...e, panelId: t.panelId };
    },
  },
  yd = f.createContext(null);
yd.displayName = "DisclosureContext";
function xd(e) {
  let t = f.useContext(yd);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(r, xd), r);
  }
  return t;
}
let wd = f.createContext(null);
wd.displayName = "DisclosureAPIContext";
function A1(e) {
  let t = f.useContext(wd);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(r, A1), r);
  }
  return t;
}
let kd = f.createContext(null);
kd.displayName = "DisclosurePanelContext";
function X4() {
  return f.useContext(kd);
}
function Z4(e, t) {
  return mt(t.type, G4, e, t);
}
let J4 = f.Fragment;
function q4(e, t) {
  let { defaultOpen: r = !1, ...n } = e,
    o = f.useRef(null),
    i = De(
      t,
      Vh((k) => {
        o.current = k;
      }, e.as === void 0 || e.as === f.Fragment)
    ),
    l = f.useRef(null),
    a = f.useRef(null),
    s = f.useReducer(Z4, {
      disclosureState: r ? 0 : 1,
      linkedPanel: !1,
      buttonRef: a,
      panelRef: l,
      buttonId: null,
      panelId: null,
    }),
    [{ disclosureState: u, buttonId: c }, d] = s,
    m = X((k) => {
      d({ type: 1 });
      let v = fr(o);
      if (!v || !c) return;
      let g = k
        ? k instanceof HTMLElement
          ? k
          : k.current instanceof HTMLElement
          ? k.current
          : v.getElementById(c)
        : v.getElementById(c);
      g == null || g.focus();
    }),
    h = f.useMemo(() => ({ close: m }), [m]),
    y = f.useMemo(() => ({ open: u === 0, close: m }), [u, m]),
    w = { ref: i };
  return D.createElement(
    yd.Provider,
    { value: s },
    D.createElement(
      wd.Provider,
      { value: h },
      D.createElement(
        Yh,
        { value: m },
        D.createElement(
          md,
          { value: mt(u, { 0: Be.Open, 1: Be.Closed }) },
          Se({
            ourProps: w,
            theirProps: n,
            slot: y,
            defaultTag: J4,
            name: "Disclosure",
          })
        )
      )
    )
  );
}
let e5 = "button";
function t5(e, t) {
  let r = f.useId(),
    {
      id: n = `headlessui-disclosure-button-${r}`,
      disabled: o = !1,
      autoFocus: i = !1,
      ...l
    } = e,
    [a, s] = xd("Disclosure.Button"),
    u = X4(),
    c = u === null ? !1 : u === a.panelId,
    d = f.useRef(null),
    m = De(d, t, c ? null : a.buttonRef),
    h = Ih();
  f.useEffect(() => {
    if (!c)
      return (
        s({ type: 2, buttonId: n }),
        () => {
          s({ type: 2, buttonId: null });
        }
      );
  }, [n, s, c]);
  let y = X((L) => {
      var _;
      if (c) {
        if (a.disclosureState === 1) return;
        switch (L.key) {
          case me.Space:
          case me.Enter:
            L.preventDefault(),
              L.stopPropagation(),
              s({ type: 0 }),
              (_ = a.buttonRef.current) == null || _.focus();
            break;
        }
      } else
        switch (L.key) {
          case me.Space:
          case me.Enter:
            L.preventDefault(), L.stopPropagation(), s({ type: 0 });
            break;
        }
    }),
    w = X((L) => {
      switch (L.key) {
        case me.Space:
          L.preventDefault();
          break;
      }
    }),
    k = X((L) => {
      var _;
      Ds(L.currentTarget) ||
        o ||
        (c
          ? (s({ type: 0 }), (_ = a.buttonRef.current) == null || _.focus())
          : s({ type: 0 }));
    }),
    { isFocusVisible: v, focusProps: g } = Ts({ autoFocus: i }),
    { isHovered: x, hoverProps: E } = Rs({ isDisabled: o }),
    { pressed: $, pressProps: S } = Oh({ disabled: o }),
    P = f.useMemo(
      () => ({
        open: a.disclosureState === 0,
        hover: x,
        active: $,
        disabled: o,
        focus: v,
        autofocus: i,
      }),
      [a, x, $, v, o, i]
    ),
    j = o1(e, d),
    R = lo(
      c
        ? {
            ref: m,
            type: j,
            disabled: o || void 0,
            autoFocus: i,
            onKeyDown: y,
            onClick: k,
          }
        : {
            ref: m,
            id: n,
            type: j,
            "aria-expanded": a.disclosureState === 0,
            "aria-controls": a.linkedPanel ? a.panelId : void 0,
            disabled: o || void 0,
            autoFocus: i,
            onKeyDown: y,
            onKeyUp: w,
            onClick: k,
          },
      g,
      E,
      S
    );
  return Se({
    mergeRefs: h,
    ourProps: R,
    theirProps: l,
    slot: P,
    defaultTag: e5,
    name: "Disclosure.Button",
  });
}
let r5 = "div",
  n5 = Hr.RenderStrategy | Hr.Static;
function o5(e, t) {
  let r = f.useId(),
    {
      id: n = `headlessui-disclosure-panel-${r}`,
      transition: o = !1,
      ...i
    } = e,
    [l, a] = xd("Disclosure.Panel"),
    { close: s } = A1("Disclosure.Panel"),
    u = Ih(),
    c = De(t, l.panelRef, (k) => {
      Q4(() => a({ type: k ? 4 : 5 }));
    });
  f.useEffect(
    () => (
      a({ type: 3, panelId: n }),
      () => {
        a({ type: 3, panelId: null });
      }
    ),
    [n, a]
  );
  let d = ko(),
    [m, h] = ad(
      o,
      l.panelRef,
      d !== null ? (d & Be.Open) === Be.Open : l.disclosureState === 0
    ),
    y = f.useMemo(
      () => ({ open: l.disclosureState === 0, close: s }),
      [l.disclosureState, s]
    ),
    w = { ref: c, id: n, ...sd(h) };
  return D.createElement(
    k1,
    null,
    D.createElement(
      kd.Provider,
      { value: l.panelId },
      Se({
        mergeRefs: u,
        ourProps: w,
        theirProps: i,
        slot: y,
        defaultTag: r5,
        features: n5,
        visible: m,
        name: "Disclosure.Panel",
      })
    )
  );
}
let i5 = ve(q4),
  B1 = ve(t5),
  z1 = ve(o5),
  l5 = Object.assign(i5, { Button: B1, Panel: z1 });
function s5(e, t) {
  let r = f.useRef({ left: 0, top: 0 });
  if (
    (ue(() => {
      let o = t.current;
      if (!o) return;
      let i = o.getBoundingClientRect();
      i && (r.current = i);
    }, [e]),
    t.current == null || !e || t.current === document.activeElement)
  )
    return !1;
  let n = t.current.getBoundingClientRect();
  return n.top !== r.current.top || n.left !== r.current.left;
}
let z0 =
  /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function H0(e) {
  var t, r;
  let n = (t = e.innerText) != null ? t : "",
    o = e.cloneNode(!0);
  if (!(o instanceof HTMLElement)) return n;
  let i = !1;
  for (let a of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    a.remove(), (i = !0);
  let l = i ? ((r = o.innerText) != null ? r : "") : n;
  return z0.test(l) && (l = l.replace(z0, "")), l;
}
function a5(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string") return t.trim();
  let r = e.getAttribute("aria-labelledby");
  if (r) {
    let n = r
      .split(" ")
      .map((o) => {
        let i = document.getElementById(o);
        if (i) {
          let l = i.getAttribute("aria-label");
          return typeof l == "string" ? l.trim() : H0(i).trim();
        }
        return null;
      })
      .filter(Boolean);
    if (n.length > 0) return n.join(", ");
  }
  return H0(e).trim();
}
function u5(e) {
  let t = f.useRef(""),
    r = f.useRef("");
  return X(() => {
    let n = e.current;
    if (!n) return "";
    let o = n.innerText;
    if (t.current === o) return r.current;
    let i = a5(n).trim().toLowerCase();
    return (t.current = o), (r.current = i), i;
  });
}
var c5 = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(c5 || {}),
  d5 = ((e) => (
    (e[(e.Pointer = 0)] = "Pointer"), (e[(e.Other = 1)] = "Other"), e
  ))(d5 || {}),
  f5 = ((e) => (
    (e[(e.OpenMenu = 0)] = "OpenMenu"),
    (e[(e.CloseMenu = 1)] = "CloseMenu"),
    (e[(e.GoToItem = 2)] = "GoToItem"),
    (e[(e.Search = 3)] = "Search"),
    (e[(e.ClearSearch = 4)] = "ClearSearch"),
    (e[(e.RegisterItem = 5)] = "RegisterItem"),
    (e[(e.UnregisterItem = 6)] = "UnregisterItem"),
    e
  ))(f5 || {});
function _a(e, t = (r) => r) {
  let r = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null,
    n = ld(t(e.items.slice()), (i) => i.dataRef.current.domRef.current),
    o = r ? n.indexOf(r) : null;
  return o === -1 && (o = null), { items: n, activeItemIndex: o };
}
let p5 = {
    1(e) {
      return e.menuState === 1
        ? e
        : { ...e, activeItemIndex: null, menuState: 1 };
    },
    0(e) {
      return e.menuState === 0 ? e : { ...e, __demoMode: !1, menuState: 0 };
    },
    2: (e, t) => {
      var r, n, o, i, l;
      if (e.menuState === 1) return e;
      let a = {
        ...e,
        searchQuery: "",
        activationTrigger: (r = t.trigger) != null ? r : 1,
        __demoMode: !1,
      };
      if (t.focus === Xe.Nothing) return { ...a, activeItemIndex: null };
      if (t.focus === Xe.Specific)
        return {
          ...a,
          activeItemIndex: e.items.findIndex((c) => c.id === t.id),
        };
      if (t.focus === Xe.Previous) {
        let c = e.activeItemIndex;
        if (c !== null) {
          let d = e.items[c].dataRef.current.domRef,
            m = Ia(t, {
              resolveItems: () => e.items,
              resolveActiveIndex: () => e.activeItemIndex,
              resolveId: (h) => h.id,
              resolveDisabled: (h) => h.dataRef.current.disabled,
            });
          if (m !== null) {
            let h = e.items[m].dataRef.current.domRef;
            if (
              ((n = d.current) == null ? void 0 : n.previousElementSibling) ===
                h.current ||
              ((o = h.current) == null ? void 0 : o.previousElementSibling) ===
                null
            )
              return { ...a, activeItemIndex: m };
          }
        }
      } else if (t.focus === Xe.Next) {
        let c = e.activeItemIndex;
        if (c !== null) {
          let d = e.items[c].dataRef.current.domRef,
            m = Ia(t, {
              resolveItems: () => e.items,
              resolveActiveIndex: () => e.activeItemIndex,
              resolveId: (h) => h.id,
              resolveDisabled: (h) => h.dataRef.current.disabled,
            });
          if (m !== null) {
            let h = e.items[m].dataRef.current.domRef;
            if (
              ((i = d.current) == null ? void 0 : i.nextElementSibling) ===
                h.current ||
              ((l = h.current) == null ? void 0 : l.nextElementSibling) === null
            )
              return { ...a, activeItemIndex: m };
          }
        }
      }
      let s = _a(e),
        u = Ia(t, {
          resolveItems: () => s.items,
          resolveActiveIndex: () => s.activeItemIndex,
          resolveId: (c) => c.id,
          resolveDisabled: (c) => c.dataRef.current.disabled,
        });
      return { ...a, ...s, activeItemIndex: u };
    },
    3: (e, t) => {
      let r = e.searchQuery !== "" ? 0 : 1,
        n = e.searchQuery + t.value.toLowerCase(),
        o = (
          e.activeItemIndex !== null
            ? e.items
                .slice(e.activeItemIndex + r)
                .concat(e.items.slice(0, e.activeItemIndex + r))
            : e.items
        ).find((l) => {
          var a;
          return (
            ((a = l.dataRef.current.textValue) == null
              ? void 0
              : a.startsWith(n)) && !l.dataRef.current.disabled
          );
        }),
        i = o ? e.items.indexOf(o) : -1;
      return i === -1 || i === e.activeItemIndex
        ? { ...e, searchQuery: n }
        : { ...e, searchQuery: n, activeItemIndex: i, activationTrigger: 1 };
    },
    4(e) {
      return e.searchQuery === ""
        ? e
        : { ...e, searchQuery: "", searchActiveItemIndex: null };
    },
    5: (e, t) => {
      let r = _a(e, (n) => [...n, { id: t.id, dataRef: t.dataRef }]);
      return { ...e, ...r };
    },
    6: (e, t) => {
      let r = _a(e, (n) => {
        let o = n.findIndex((i) => i.id === t.id);
        return o !== -1 && n.splice(o, 1), n;
      });
      return { ...e, ...r, activationTrigger: 1 };
    },
  },
  Sd = f.createContext(null);
Sd.displayName = "MenuContext";
function Ks(e) {
  let t = f.useContext(Sd);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(r, Ks), r);
  }
  return t;
}
function m5(e, t) {
  return mt(t.type, p5, e, t);
}
let h5 = f.Fragment;
function g5(e, t) {
  let { __demoMode: r = !1, ...n } = e,
    o = f.useReducer(m5, {
      __demoMode: r,
      menuState: r ? 0 : 1,
      buttonRef: f.createRef(),
      itemsRef: f.createRef(),
      items: [],
      searchQuery: "",
      activeItemIndex: null,
      activationTrigger: 1,
    }),
    [{ menuState: i, itemsRef: l, buttonRef: a }, s] = o,
    u = De(t);
  r1(i === 0, [a, l], (h, y) => {
    var w;
    s({ type: 1 }),
      id(y, od.Loose) ||
        (h.preventDefault(), (w = a.current) == null || w.focus());
  });
  let c = X(() => {
      s({ type: 1 });
    }),
    d = f.useMemo(() => ({ open: i === 0, close: c }), [i, c]),
    m = { ref: u };
  return D.createElement(
    Z3,
    null,
    D.createElement(
      Sd.Provider,
      { value: o },
      D.createElement(
        md,
        { value: mt(i, { 0: Be.Open, 1: Be.Closed }) },
        Se({
          ourProps: m,
          theirProps: n,
          slot: d,
          defaultTag: h5,
          name: "Menu",
        })
      )
    )
  );
}
let v5 = "button";
function y5(e, t) {
  var r;
  let n = f.useId(),
    {
      id: o = `headlessui-menu-button-${n}`,
      disabled: i = !1,
      autoFocus: l = !1,
      ...a
    } = e,
    [s, u] = Ks("Menu.Button"),
    c = Y3(),
    d = De(s.buttonRef, t, K3()),
    m = X((P) => {
      switch (P.key) {
        case me.Space:
        case me.Enter:
        case me.ArrowDown:
          P.preventDefault(),
            P.stopPropagation(),
            ot.flushSync(() => u({ type: 0 })),
            u({ type: 2, focus: Xe.First });
          break;
        case me.ArrowUp:
          P.preventDefault(),
            P.stopPropagation(),
            ot.flushSync(() => u({ type: 0 })),
            u({ type: 2, focus: Xe.Last });
          break;
      }
    }),
    h = X((P) => {
      switch (P.key) {
        case me.Space:
          P.preventDefault();
          break;
      }
    }),
    y = X((P) => {
      var j;
      if (Ds(P.currentTarget)) return P.preventDefault();
      i ||
        (s.menuState === 0
          ? (ot.flushSync(() => u({ type: 1 })),
            (j = s.buttonRef.current) == null || j.focus({ preventScroll: !0 }))
          : (P.preventDefault(), u({ type: 0 })));
    }),
    { isFocusVisible: w, focusProps: k } = Ts({ autoFocus: l }),
    { isHovered: v, hoverProps: g } = Rs({ isDisabled: i }),
    { pressed: x, pressProps: E } = Oh({ disabled: i }),
    $ = f.useMemo(
      () => ({
        open: s.menuState === 0,
        active: x || s.menuState === 0,
        disabled: i,
        hover: v,
        focus: w,
        autofocus: l,
      }),
      [s, v, w, x, i, l]
    ),
    S = lo(
      c(),
      {
        ref: d,
        id: o,
        type: o1(e, s.buttonRef),
        "aria-haspopup": "menu",
        "aria-controls": (r = s.itemsRef.current) == null ? void 0 : r.id,
        "aria-expanded": s.menuState === 0,
        disabled: i || void 0,
        autoFocus: l,
        onKeyDown: m,
        onKeyUp: h,
        onClick: y,
      },
      k,
      g,
      E
    );
  return Se({
    ourProps: S,
    theirProps: a,
    slot: $,
    defaultTag: v5,
    name: "Menu.Button",
  });
}
let x5 = "div",
  w5 = Hr.RenderStrategy | Hr.Static;
function k5(e, t) {
  var r, n;
  let o = f.useId(),
    {
      id: i = `headlessui-menu-items-${o}`,
      anchor: l,
      portal: a = !1,
      modal: s = !0,
      transition: u = !1,
      ...c
    } = e,
    d = Q3(l),
    [m, h] = Ks("Menu.Items"),
    [y, w] = X3(d),
    k = G3(),
    v = De(m.itemsRef, t, d ? y : null),
    g = vo(m.itemsRef);
  d && (a = !0);
  let x = ko(),
    [E, $] = ad(
      u,
      m.itemsRef,
      x !== null ? (x & Be.Open) === Be.Open : m.menuState === 0
    );
  nd(E, m.buttonRef, () => {
    h({ type: 1 });
  });
  let S = m.__demoMode ? !1 : s && m.menuState === 0;
  i1(S, g);
  let P = m.__demoMode ? !1 : s && m.menuState === 0;
  Zh(P, { allowed: X(() => [m.buttonRef.current, m.itemsRef.current]) });
  let j = m.menuState !== 0,
    R = s5(j, m.buttonRef) ? !1 : E;
  f.useEffect(() => {
    let z = m.itemsRef.current;
    z &&
      m.menuState === 0 &&
      z !== (g == null ? void 0 : g.activeElement) &&
      z.focus({ preventScroll: !0 });
  }, [m.menuState, m.itemsRef, g, m.itemsRef.current]),
    zw(m.menuState === 0, {
      container: m.itemsRef.current,
      accept(z) {
        return z.getAttribute("role") === "menuitem"
          ? NodeFilter.FILTER_REJECT
          : z.hasAttribute("role")
          ? NodeFilter.FILTER_SKIP
          : NodeFilter.FILTER_ACCEPT;
      },
      walk(z) {
        z.setAttribute("role", "none");
      },
    });
  let L = bn(),
    _ = X((z) => {
      var oe, B, M;
      switch ((L.dispose(), z.key)) {
        case me.Space:
          if (m.searchQuery !== "")
            return (
              z.preventDefault(),
              z.stopPropagation(),
              h({ type: 3, value: z.key })
            );
        case me.Enter:
          if (
            (z.preventDefault(),
            z.stopPropagation(),
            h({ type: 1 }),
            m.activeItemIndex !== null)
          ) {
            let { dataRef: I } = m.items[m.activeItemIndex];
            (B = (oe = I.current) == null ? void 0 : oe.domRef.current) ==
              null || B.click();
          }
          qh(m.buttonRef.current);
          break;
        case me.ArrowDown:
          return (
            z.preventDefault(),
            z.stopPropagation(),
            h({ type: 2, focus: Xe.Next })
          );
        case me.ArrowUp:
          return (
            z.preventDefault(),
            z.stopPropagation(),
            h({ type: 2, focus: Xe.Previous })
          );
        case me.Home:
        case me.PageUp:
          return (
            z.preventDefault(),
            z.stopPropagation(),
            h({ type: 2, focus: Xe.First })
          );
        case me.End:
        case me.PageDown:
          return (
            z.preventDefault(),
            z.stopPropagation(),
            h({ type: 2, focus: Xe.Last })
          );
        case me.Escape:
          z.preventDefault(),
            z.stopPropagation(),
            ot.flushSync(() => h({ type: 1 })),
            (M = m.buttonRef.current) == null || M.focus({ preventScroll: !0 });
          break;
        case me.Tab:
          z.preventDefault(),
            z.stopPropagation(),
            ot.flushSync(() => h({ type: 1 })),
            jw(m.buttonRef.current, z.shiftKey ? tt.Previous : tt.Next);
          break;
        default:
          z.key.length === 1 &&
            (h({ type: 3, value: z.key }),
            L.setTimeout(() => h({ type: 4 }), 350));
          break;
      }
    }),
    W = X((z) => {
      switch (z.key) {
        case me.Space:
          z.preventDefault();
          break;
      }
    }),
    Y = f.useMemo(() => ({ open: m.menuState === 0 }), [m.menuState]),
    K = lo(d ? k() : {}, {
      "aria-activedescendant":
        m.activeItemIndex === null || (r = m.items[m.activeItemIndex]) == null
          ? void 0
          : r.id,
      "aria-labelledby": (n = m.buttonRef.current) == null ? void 0 : n.id,
      id: i,
      onKeyDown: _,
      onKeyUp: W,
      role: "menu",
      tabIndex: m.menuState === 0 ? 0 : void 0,
      ref: v,
      style: { ...c.style, ...w, "--button-width": vw(m.buttonRef, !0).width },
      ...sd($),
    });
  return D.createElement(
    $1,
    { enabled: a ? e.static || E : !1 },
    Se({
      ourProps: K,
      theirProps: c,
      slot: Y,
      defaultTag: x5,
      features: w5,
      visible: R,
      name: "Menu.Items",
    })
  );
}
let S5 = f.Fragment;
function E5(e, t) {
  let r = f.useId(),
    { id: n = `headlessui-menu-item-${r}`, disabled: o = !1, ...i } = e,
    [l, a] = Ks("Menu.Item"),
    s = l.activeItemIndex !== null ? l.items[l.activeItemIndex].id === n : !1,
    u = f.useRef(null),
    c = De(t, u);
  ue(() => {
    if (!l.__demoMode && l.menuState === 0 && s && l.activationTrigger !== 0)
      return Zt().requestAnimationFrame(() => {
        var R, L;
        (L = (R = u.current) == null ? void 0 : R.scrollIntoView) == null ||
          L.call(R, { block: "nearest" });
      });
  }, [l.__demoMode, u, s, l.menuState, l.activationTrigger, l.activeItemIndex]);
  let d = u5(u),
    m = f.useRef({
      disabled: o,
      domRef: u,
      get textValue() {
        return d();
      },
    });
  ue(() => {
    m.current.disabled = o;
  }, [m, o]),
    ue(
      () => (a({ type: 5, id: n, dataRef: m }), () => a({ type: 6, id: n })),
      [m, n]
    );
  let h = X(() => {
      a({ type: 1 });
    }),
    y = X((R) => {
      if (o) return R.preventDefault();
      a({ type: 1 }), qh(l.buttonRef.current);
    }),
    w = X(() => {
      if (o) return a({ type: 2, focus: Xe.Nothing });
      a({ type: 2, focus: Xe.Specific, id: n });
    }),
    k = Dw(),
    v = X((R) => {
      k.update(R),
        !o && (s || a({ type: 2, focus: Xe.Specific, id: n, trigger: 0 }));
    }),
    g = X((R) => {
      k.wasMoved(R) &&
        (o || s || a({ type: 2, focus: Xe.Specific, id: n, trigger: 0 }));
    }),
    x = X((R) => {
      k.wasMoved(R) && (o || (s && a({ type: 2, focus: Xe.Nothing })));
    }),
    [E, $] = _s(),
    [S, P] = Os(),
    j = f.useMemo(
      () => ({ active: s, focus: s, disabled: o, close: h }),
      [s, o, h]
    );
  return D.createElement(
    $,
    null,
    D.createElement(
      P,
      null,
      Se({
        ourProps: {
          id: n,
          ref: c,
          role: "menuitem",
          tabIndex: o === !0 ? void 0 : -1,
          "aria-disabled": o === !0 ? !0 : void 0,
          "aria-labelledby": E,
          "aria-describedby": S,
          disabled: void 0,
          onClick: y,
          onFocus: w,
          onPointerEnter: v,
          onMouseEnter: v,
          onPointerMove: g,
          onMouseMove: g,
          onPointerLeave: x,
          onMouseLeave: x,
        },
        theirProps: i,
        slot: j,
        defaultTag: S5,
        name: "Menu.Item",
      })
    )
  );
}
let C5 = "div";
function b5(e, t) {
  let [r, n] = _s();
  return D.createElement(
    n,
    null,
    Se({
      ourProps: { ref: t, "aria-labelledby": r, role: "group" },
      theirProps: e,
      slot: {},
      defaultTag: C5,
      name: "Menu.Section",
    })
  );
}
let j5 = "header";
function $5(e, t) {
  let r = f.useId(),
    { id: n = `headlessui-menu-heading-${r}`, ...o } = e,
    i = rd();
  ue(() => i.register(n), [n, i.register]);
  let l = { id: n, ref: t, role: "presentation", ...i.props };
  return Se({
    ourProps: l,
    theirProps: o,
    slot: {},
    defaultTag: j5,
    name: "Menu.Heading",
  });
}
let P5 = "div";
function N5(e, t) {
  return Se({
    ourProps: { ref: t, role: "separator" },
    theirProps: e,
    slot: {},
    defaultTag: P5,
    name: "Menu.Separator",
  });
}
let R5 = ve(g5),
  H1 = ve(y5),
  U1 = ve(k5),
  Pl = ve(E5),
  T5 = ve(b5),
  L5 = ve($5),
  M5 = ve(N5),
  D5 = Object.assign(R5, {
    Button: H1,
    Items: U1,
    Item: Pl,
    Section: T5,
    Heading: L5,
    Separator: M5,
  });
var F5 = ((e) => (
  (e[(e.RegisterOption = 0)] = "RegisterOption"),
  (e[(e.UnregisterOption = 1)] = "UnregisterOption"),
  e
))(F5 || {});
let O5 = {
    0(e, t) {
      let r = [
        ...e.options,
        { id: t.id, element: t.element, propsRef: t.propsRef },
      ];
      return { ...e, options: ld(r, (n) => n.element.current) };
    },
    1(e, t) {
      let r = e.options.slice(),
        n = e.options.findIndex((o) => o.id === t.id);
      return n === -1 ? e : (r.splice(n, 1), { ...e, options: r });
    },
  },
  Ed = f.createContext(null);
Ed.displayName = "RadioGroupDataContext";
function Cd(e) {
  let t = f.useContext(Ed);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(r, Cd), r);
  }
  return t;
}
let bd = f.createContext(null);
bd.displayName = "RadioGroupActionsContext";
function jd(e) {
  let t = f.useContext(bd);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(r, jd), r);
  }
  return t;
}
function I5(e, t) {
  return mt(t.type, O5, e, t);
}
let _5 = "div";
function A5(e, t) {
  let r = f.useId(),
    n = Ms(),
    {
      id: o = `headlessui-radiogroup-${r}`,
      value: i,
      form: l,
      name: a,
      onChange: s,
      by: u,
      disabled: c = n || !1,
      defaultValue: d,
      ...m
    } = e,
    h = hw(u),
    [y, w] = f.useReducer(I5, { options: [] }),
    k = y.options,
    [v, g] = _s(),
    [x, E] = Os(),
    $ = f.useRef(null),
    S = De($, t),
    P = Gx(d),
    [j, R] = Yx(i, s, P),
    L = f.useMemo(() => k.find((F) => !F.propsRef.current.disabled), [k]),
    _ = f.useMemo(() => k.some((F) => h(F.propsRef.current.value, j)), [k, j]),
    W = X((F) => {
      var U;
      if (c || h(F, j)) return !1;
      let Z =
        (U = k.find((ie) => h(ie.propsRef.current.value, F))) == null
          ? void 0
          : U.propsRef.current;
      return Z != null && Z.disabled ? !1 : (R == null || R(F), !0);
    }),
    Y = X((F) => {
      let U = $.current;
      if (!U) return;
      let Z = fr(U),
        ie = k
          .filter((ee) => ee.propsRef.current.disabled === !1)
          .map((ee) => ee.element.current);
      switch (F.key) {
        case me.Enter:
          Xx(F.currentTarget);
          break;
        case me.ArrowLeft:
        case me.ArrowUp:
          if (
            (F.preventDefault(),
            F.stopPropagation(),
            Ar(ie, tt.Previous | tt.WrapAround) === Ei.Success)
          ) {
            let ee = k.find(
              (se) =>
                se.element.current === (Z == null ? void 0 : Z.activeElement)
            );
            ee && W(ee.propsRef.current.value);
          }
          break;
        case me.ArrowRight:
        case me.ArrowDown:
          if (
            (F.preventDefault(),
            F.stopPropagation(),
            Ar(ie, tt.Next | tt.WrapAround) === Ei.Success)
          ) {
            let ee = k.find(
              (se) =>
                se.element.current === (Z == null ? void 0 : Z.activeElement)
            );
            ee && W(ee.propsRef.current.value);
          }
          break;
        case me.Space:
          {
            F.preventDefault(), F.stopPropagation();
            let ee = k.find(
              (se) =>
                se.element.current === (Z == null ? void 0 : Z.activeElement)
            );
            ee && W(ee.propsRef.current.value);
          }
          break;
      }
    }),
    K = X((F) => (w({ type: 0, ...F }), () => w({ type: 1, id: F.id }))),
    z = f.useMemo(
      () => ({
        value: j,
        firstOption: L,
        containsCheckedOption: _,
        disabled: c,
        compare: h,
        ...y,
      }),
      [j, L, _, c, h, y]
    ),
    oe = f.useMemo(() => ({ registerOption: K, change: W }), [K, W]),
    B = {
      ref: S,
      id: o,
      role: "radiogroup",
      "aria-labelledby": v,
      "aria-describedby": x,
      onKeyDown: Y,
    },
    M = f.useMemo(() => ({ value: j }), [j]),
    I = f.useCallback(() => {
      if (P !== void 0) return W(P);
    }, [W, P]);
  return D.createElement(
    E,
    { name: "RadioGroup.Description" },
    D.createElement(
      g,
      { name: "RadioGroup.Label" },
      D.createElement(
        bd.Provider,
        { value: oe },
        D.createElement(
          Ed.Provider,
          { value: z },
          a != null &&
            D.createElement(tw, {
              disabled: c,
              data: { [a]: j || "on" },
              overrides: { type: "radio", checked: j != null },
              form: l,
              onReset: I,
            }),
          Se({
            ourProps: B,
            theirProps: m,
            slot: M,
            defaultTag: _5,
            name: "RadioGroup",
          })
        )
      )
    )
  );
}
let B5 = "div";
function z5(e, t) {
  var r;
  let n = Cd("RadioGroup.Option"),
    o = jd("RadioGroup.Option"),
    i = f.useId(),
    {
      id: l = `headlessui-radiogroup-option-${i}`,
      value: a,
      disabled: s = n.disabled || !1,
      autoFocus: u = !1,
      ...c
    } = e,
    d = f.useRef(null),
    m = De(d, t),
    [h, y] = _s(),
    [w, k] = Os(),
    v = pr({ value: a, disabled: s });
  ue(() => o.registerOption({ id: l, element: d, propsRef: v }), [l, o, d, v]);
  let g = X((_) => {
      var W;
      if (Ds(_.currentTarget)) return _.preventDefault();
      o.change(a) && ((W = d.current) == null || W.focus());
    }),
    x = ((r = n.firstOption) == null ? void 0 : r.id) === l,
    { isFocusVisible: E, focusProps: $ } = Ts({ autoFocus: u }),
    { isHovered: S, hoverProps: P } = Rs({ isDisabled: s }),
    j = n.compare(n.value, a),
    R = lo(
      {
        ref: m,
        id: l,
        role: "radio",
        "aria-checked": j ? "true" : "false",
        "aria-labelledby": h,
        "aria-describedby": w,
        "aria-disabled": s ? !0 : void 0,
        tabIndex: s ? -1 : j || (!n.containsCheckedOption && x) ? 0 : -1,
        onClick: s ? void 0 : g,
        autoFocus: u,
      },
      $,
      P
    ),
    L = f.useMemo(
      () => ({
        checked: j,
        disabled: s,
        active: E,
        hover: S,
        focus: E,
        autofocus: u,
      }),
      [j, s, S, E, u]
    );
  return D.createElement(
    k,
    { name: "RadioGroup.Description" },
    D.createElement(
      y,
      { name: "RadioGroup.Label" },
      Se({
        ourProps: R,
        theirProps: c,
        slot: L,
        defaultTag: B5,
        name: "RadioGroup.Option",
      })
    )
  );
}
let H5 = "span";
function U5(e, t) {
  var r;
  let n = Cd("Radio"),
    o = jd("Radio"),
    i = f.useId(),
    l = Hh(),
    a = Ms(),
    {
      id: s = l || `headlessui-radio-${i}`,
      value: u,
      disabled: c = n.disabled || a || !1,
      autoFocus: d = !1,
      ...m
    } = e,
    h = f.useRef(null),
    y = De(h, t),
    w = Kh(),
    k = iw(),
    v = pr({ value: u, disabled: c });
  ue(() => o.registerOption({ id: s, element: h, propsRef: v }), [s, o, h, v]);
  let g = X((_) => {
      var W;
      if (Ds(_.currentTarget)) return _.preventDefault();
      o.change(u) && ((W = h.current) == null || W.focus());
    }),
    { isFocusVisible: x, focusProps: E } = Ts({ autoFocus: d }),
    { isHovered: $, hoverProps: S } = Rs({ isDisabled: c }),
    P = ((r = n.firstOption) == null ? void 0 : r.id) === s,
    j = n.compare(n.value, u),
    R = lo(
      {
        ref: y,
        id: s,
        role: "radio",
        "aria-checked": j ? "true" : "false",
        "aria-labelledby": w,
        "aria-describedby": k,
        "aria-disabled": c ? !0 : void 0,
        tabIndex: c ? -1 : j || (!n.containsCheckedOption && P) ? 0 : -1,
        autoFocus: d,
        onClick: c ? void 0 : g,
      },
      E,
      S
    ),
    L = f.useMemo(
      () => ({ checked: j, disabled: c, hover: $, focus: x, autofocus: d }),
      [j, c, $, x, d]
    );
  return Se({
    ourProps: R,
    theirProps: m,
    slot: L,
    defaultTag: H5,
    name: "Radio",
  });
}
let V5 = ve(A5),
  W5 = ve(z5),
  V1 = ve(U5),
  Q5 = fw,
  K5 = Qh,
  Y5 = Object.assign(V5, { Option: W5, Radio: V1, Label: Q5, Description: K5 });
function G5({ title: e, titleId: t, ...r }, n) {
  return f.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: n,
        "aria-labelledby": t,
      },
      r
    ),
    e ? f.createElement("title", { id: t }, e) : null,
    f.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
    })
  );
}
const X5 = f.forwardRef(G5);
function Z5({ title: e, titleId: t, ...r }, n) {
  return f.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: n,
        "aria-labelledby": t,
      },
      r
    ),
    e ? f.createElement("title", { id: t }, e) : null,
    f.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
    })
  );
}
const J5 = f.forwardRef(Z5);
function q5({ title: e, titleId: t, ...r }, n) {
  return f.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: n,
        "aria-labelledby": t,
      },
      r
    ),
    e ? f.createElement("title", { id: t }, e) : null,
    f.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M6 18 18 6M6 6l12 12",
    })
  );
}
const W1 = f.forwardRef(q5),
  bi = (e) => typeof e == "number" && !isNaN(e),
  fn = (e) => typeof e == "string",
  wt = (e) => typeof e == "function",
  Nl = (e) => (fn(e) || wt(e) ? e : null),
  Gu = (e) => f.isValidElement(e) || fn(e) || wt(e) || bi(e);
function ek(e, t, r) {
  r === void 0 && (r = 300);
  const { scrollHeight: n, style: o } = e;
  requestAnimationFrame(() => {
    (o.minHeight = "initial"),
      (o.height = n + "px"),
      (o.transition = `all ${r}ms`),
      requestAnimationFrame(() => {
        (o.height = "0"), (o.padding = "0"), (o.margin = "0"), setTimeout(t, r);
      });
  });
}
function Ys(e) {
  let {
    enter: t,
    exit: r,
    appendPosition: n = !1,
    collapse: o = !0,
    collapseDuration: i = 300,
  } = e;
  return function (l) {
    let {
      children: a,
      position: s,
      preventExitTransition: u,
      done: c,
      nodeRef: d,
      isIn: m,
      playToast: h,
    } = l;
    const y = n ? `${t}--${s}` : t,
      w = n ? `${r}--${s}` : r,
      k = f.useRef(0);
    return (
      f.useLayoutEffect(() => {
        const v = d.current,
          g = y.split(" "),
          x = (E) => {
            E.target === d.current &&
              (h(),
              v.removeEventListener("animationend", x),
              v.removeEventListener("animationcancel", x),
              k.current === 0 &&
                E.type !== "animationcancel" &&
                v.classList.remove(...g));
          };
        v.classList.add(...g),
          v.addEventListener("animationend", x),
          v.addEventListener("animationcancel", x);
      }, []),
      f.useEffect(() => {
        const v = d.current,
          g = () => {
            v.removeEventListener("animationend", g), o ? ek(v, c, i) : c();
          };
        m ||
          (u
            ? g()
            : ((k.current = 1),
              (v.className += ` ${w}`),
              v.addEventListener("animationend", g)));
      }, [m]),
      D.createElement(D.Fragment, null, a)
    );
  };
}
function U0(e, t) {
  return e != null
    ? {
        content: e.content,
        containerId: e.props.containerId,
        id: e.props.toastId,
        theme: e.props.theme,
        type: e.props.type,
        data: e.props.data || {},
        isLoading: e.props.isLoading,
        icon: e.props.icon,
        status: t,
      }
    : {};
}
const rt = new Map();
let ji = [];
const Xu = new Set(),
  tk = (e) => Xu.forEach((t) => t(e)),
  Q1 = () => rt.size > 0;
function K1(e, t) {
  var r;
  if (t) return !((r = rt.get(t)) == null || !r.isToastActive(e));
  let n = !1;
  return (
    rt.forEach((o) => {
      o.isToastActive(e) && (n = !0);
    }),
    n
  );
}
function Y1(e, t) {
  Gu(e) &&
    (Q1() || ji.push({ content: e, options: t }),
    rt.forEach((r) => {
      r.buildToast(e, t);
    }));
}
function V0(e, t) {
  rt.forEach((r) => {
    t != null && t != null && t.containerId
      ? (t == null ? void 0 : t.containerId) === r.id &&
        r.toggle(e, t == null ? void 0 : t.id)
      : r.toggle(e, t == null ? void 0 : t.id);
  });
}
function rk(e) {
  const {
    subscribe: t,
    getSnapshot: r,
    setProps: n,
  } = f.useRef(
    (function (i) {
      const l = i.containerId || 1;
      return {
        subscribe(a) {
          const s = (function (c, d, m) {
            let h = 1,
              y = 0,
              w = [],
              k = [],
              v = [],
              g = d;
            const x = new Map(),
              E = new Set(),
              $ = () => {
                (v = Array.from(x.values())), E.forEach((j) => j());
              },
              S = (j) => {
                (k = j == null ? [] : k.filter((R) => R !== j)), $();
              },
              P = (j) => {
                const {
                    toastId: R,
                    onOpen: L,
                    updateId: _,
                    children: W,
                  } = j.props,
                  Y = _ == null;
                j.staleId && x.delete(j.staleId),
                  x.set(R, j),
                  (k = [...k, j.props.toastId].filter((K) => K !== j.staleId)),
                  $(),
                  m(U0(j, Y ? "added" : "updated")),
                  Y && wt(L) && L(f.isValidElement(W) && W.props);
              };
            return {
              id: c,
              props: g,
              observe: (j) => (E.add(j), () => E.delete(j)),
              toggle: (j, R) => {
                x.forEach((L) => {
                  (R != null && R !== L.props.toastId) ||
                    (wt(L.toggle) && L.toggle(j));
                });
              },
              removeToast: S,
              toasts: x,
              clearQueue: () => {
                (y -= w.length), (w = []);
              },
              buildToast: (j, R) => {
                if (
                  ((Z) => {
                    let { containerId: ie, toastId: ee, updateId: se } = Z;
                    const fe = ie ? ie !== c : c !== 1,
                      jt = x.has(ee) && se == null;
                    return fe || jt;
                  })(R)
                )
                  return;
                const {
                    toastId: L,
                    updateId: _,
                    data: W,
                    staleId: Y,
                    delay: K,
                  } = R,
                  z = () => {
                    S(L);
                  },
                  oe = _ == null;
                oe && y++;
                const B = {
                  ...g,
                  style: g.toastStyle,
                  key: h++,
                  ...Object.fromEntries(
                    Object.entries(R).filter((Z) => {
                      let [ie, ee] = Z;
                      return ee != null;
                    })
                  ),
                  toastId: L,
                  updateId: _,
                  data: W,
                  closeToast: z,
                  isIn: !1,
                  className: Nl(R.className || g.toastClassName),
                  bodyClassName: Nl(R.bodyClassName || g.bodyClassName),
                  progressClassName: Nl(
                    R.progressClassName || g.progressClassName
                  ),
                  autoClose:
                    !R.isLoading &&
                    ((M = R.autoClose),
                    (I = g.autoClose),
                    M === !1 || (bi(M) && M > 0) ? M : I),
                  deleteToast() {
                    const Z = x.get(L),
                      { onClose: ie, children: ee } = Z.props;
                    wt(ie) && ie(f.isValidElement(ee) && ee.props),
                      m(U0(Z, "removed")),
                      x.delete(L),
                      y--,
                      y < 0 && (y = 0),
                      w.length > 0 ? P(w.shift()) : $();
                  },
                };
                var M, I;
                (B.closeButton = g.closeButton),
                  R.closeButton === !1 || Gu(R.closeButton)
                    ? (B.closeButton = R.closeButton)
                    : R.closeButton === !0 &&
                      (B.closeButton = !Gu(g.closeButton) || g.closeButton);
                let F = j;
                f.isValidElement(j) && !fn(j.type)
                  ? (F = f.cloneElement(j, {
                      closeToast: z,
                      toastProps: B,
                      data: W,
                    }))
                  : wt(j) && (F = j({ closeToast: z, toastProps: B, data: W }));
                const U = { content: F, props: B, staleId: Y };
                g.limit && g.limit > 0 && y > g.limit && oe
                  ? w.push(U)
                  : bi(K)
                  ? setTimeout(() => {
                      P(U);
                    }, K)
                  : P(U);
              },
              setProps(j) {
                g = j;
              },
              setToggle: (j, R) => {
                x.get(j).toggle = R;
              },
              isToastActive: (j) => k.some((R) => R === j),
              getSnapshot: () => (g.newestOnTop ? v.reverse() : v),
            };
          })(l, i, tk);
          rt.set(l, s);
          const u = s.observe(a);
          return (
            ji.forEach((c) => Y1(c.content, c.options)),
            (ji = []),
            () => {
              u(), rt.delete(l);
            }
          );
        },
        setProps(a) {
          var s;
          (s = rt.get(l)) == null || s.setProps(a);
        },
        getSnapshot() {
          var a;
          return (a = rt.get(l)) == null ? void 0 : a.getSnapshot();
        },
      };
    })(e)
  ).current;
  n(e);
  const o = f.useSyncExternalStore(t, r, r);
  return {
    getToastToRender: function (i) {
      if (!o) return [];
      const l = new Map();
      return (
        o.forEach((a) => {
          const { position: s } = a.props;
          l.has(s) || l.set(s, []), l.get(s).push(a);
        }),
        Array.from(l, (a) => i(a[0], a[1]))
      );
    },
    isToastActive: K1,
    count: o == null ? void 0 : o.length,
  };
}
function nk(e) {
  const [t, r] = f.useState(!1),
    [n, o] = f.useState(!1),
    i = f.useRef(null),
    l = f.useRef({
      start: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      didMove: !1,
    }).current,
    {
      autoClose: a,
      pauseOnHover: s,
      closeToast: u,
      onClick: c,
      closeOnClick: d,
    } = e;
  var m, h;
  function y() {
    r(!0);
  }
  function w() {
    r(!1);
  }
  function k(x) {
    const E = i.current;
    l.canDrag &&
      E &&
      ((l.didMove = !0),
      t && w(),
      (l.delta =
        e.draggableDirection === "x"
          ? x.clientX - l.start
          : x.clientY - l.start),
      l.start !== x.clientX && (l.canCloseOnClick = !1),
      (E.style.transform = `translate3d(${
        e.draggableDirection === "x"
          ? `${l.delta}px, var(--y)`
          : `0, calc(${l.delta}px + var(--y))`
      },0)`),
      (E.style.opacity = "" + (1 - Math.abs(l.delta / l.removalDistance))));
  }
  function v() {
    document.removeEventListener("pointermove", k),
      document.removeEventListener("pointerup", v);
    const x = i.current;
    if (l.canDrag && l.didMove && x) {
      if (((l.canDrag = !1), Math.abs(l.delta) > l.removalDistance))
        return o(!0), e.closeToast(), void e.collapseAll();
      (x.style.transition = "transform 0.2s, opacity 0.2s"),
        x.style.removeProperty("transform"),
        x.style.removeProperty("opacity");
    }
  }
  (h = rt.get(
    (m = { id: e.toastId, containerId: e.containerId, fn: r }).containerId || 1
  )) == null || h.setToggle(m.id, m.fn),
    f.useEffect(() => {
      if (e.pauseOnFocusLoss)
        return (
          document.hasFocus() || w(),
          window.addEventListener("focus", y),
          window.addEventListener("blur", w),
          () => {
            window.removeEventListener("focus", y),
              window.removeEventListener("blur", w);
          }
        );
    }, [e.pauseOnFocusLoss]);
  const g = {
    onPointerDown: function (x) {
      if (e.draggable === !0 || e.draggable === x.pointerType) {
        (l.didMove = !1),
          document.addEventListener("pointermove", k),
          document.addEventListener("pointerup", v);
        const E = i.current;
        (l.canCloseOnClick = !0),
          (l.canDrag = !0),
          (E.style.transition = "none"),
          e.draggableDirection === "x"
            ? ((l.start = x.clientX),
              (l.removalDistance = E.offsetWidth * (e.draggablePercent / 100)))
            : ((l.start = x.clientY),
              (l.removalDistance =
                (E.offsetHeight *
                  (e.draggablePercent === 80
                    ? 1.5 * e.draggablePercent
                    : e.draggablePercent)) /
                100));
      }
    },
    onPointerUp: function (x) {
      const {
        top: E,
        bottom: $,
        left: S,
        right: P,
      } = i.current.getBoundingClientRect();
      x.nativeEvent.type !== "touchend" &&
      e.pauseOnHover &&
      x.clientX >= S &&
      x.clientX <= P &&
      x.clientY >= E &&
      x.clientY <= $
        ? w()
        : y();
    },
  };
  return (
    a && s && ((g.onMouseEnter = w), e.stacked || (g.onMouseLeave = y)),
    d &&
      (g.onClick = (x) => {
        c && c(x), l.canCloseOnClick && u();
      }),
    {
      playToast: y,
      pauseToast: w,
      isRunning: t,
      preventExitTransition: n,
      toastRef: i,
      eventHandlers: g,
    }
  );
}
function ok(e) {
  let {
    delay: t,
    isRunning: r,
    closeToast: n,
    type: o = "default",
    hide: i,
    className: l,
    style: a,
    controlledProgress: s,
    progress: u,
    rtl: c,
    isIn: d,
    theme: m,
  } = e;
  const h = i || (s && u === 0),
    y = {
      ...a,
      animationDuration: `${t}ms`,
      animationPlayState: r ? "running" : "paused",
    };
  s && (y.transform = `scaleX(${u})`);
  const w = Pr(
      "Toastify__progress-bar",
      s
        ? "Toastify__progress-bar--controlled"
        : "Toastify__progress-bar--animated",
      `Toastify__progress-bar-theme--${m}`,
      `Toastify__progress-bar--${o}`,
      { "Toastify__progress-bar--rtl": c }
    ),
    k = wt(l) ? l({ rtl: c, type: o, defaultClassName: w }) : Pr(w, l),
    v = {
      [s && u >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
        s && u < 1
          ? null
          : () => {
              d && n();
            },
    };
  return D.createElement(
    "div",
    { className: "Toastify__progress-bar--wrp", "data-hidden": h },
    D.createElement("div", {
      className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${m} Toastify__progress-bar--${o}`,
    }),
    D.createElement("div", {
      role: "progressbar",
      "aria-hidden": h ? "true" : "false",
      "aria-label": "notification timer",
      className: k,
      style: y,
      ...v,
    })
  );
}
let ik = 1;
const G1 = () => "" + ik++;
function lk(e) {
  return e && (fn(e.toastId) || bi(e.toastId)) ? e.toastId : G1();
}
function ti(e, t) {
  return Y1(e, t), t.toastId;
}
function cs(e, t) {
  return { ...t, type: (t && t.type) || e, toastId: lk(t) };
}
function cl(e) {
  return (t, r) => ti(t, cs(e, r));
}
function xe(e, t) {
  return ti(e, cs("default", t));
}
(xe.loading = (e, t) =>
  ti(
    e,
    cs("default", {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...t,
    })
  )),
  (xe.promise = function (e, t, r) {
    let n,
      { pending: o, error: i, success: l } = t;
    o && (n = fn(o) ? xe.loading(o, r) : xe.loading(o.render, { ...r, ...o }));
    const a = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null,
      },
      s = (c, d, m) => {
        if (d == null) return void xe.dismiss(n);
        const h = { type: c, ...a, ...r, data: m },
          y = fn(d) ? { render: d } : d;
        return (
          n ? xe.update(n, { ...h, ...y }) : xe(y.render, { ...h, ...y }), m
        );
      },
      u = wt(e) ? e() : e;
    return u.then((c) => s("success", l, c)).catch((c) => s("error", i, c)), u;
  }),
  (xe.success = cl("success")),
  (xe.info = cl("info")),
  (xe.error = cl("error")),
  (xe.warning = cl("warning")),
  (xe.warn = xe.warning),
  (xe.dark = (e, t) => ti(e, cs("default", { theme: "dark", ...t }))),
  (xe.dismiss = function (e) {
    (function (t) {
      var r;
      if (Q1()) {
        if (t == null || fn((r = t)) || bi(r))
          rt.forEach((n) => {
            n.removeToast(t);
          });
        else if (t && ("containerId" in t || "id" in t)) {
          const n = rt.get(t.containerId);
          n
            ? n.removeToast(t.id)
            : rt.forEach((o) => {
                o.removeToast(t.id);
              });
        }
      } else ji = ji.filter((n) => t != null && n.options.toastId !== t);
    })(e);
  }),
  (xe.clearWaitingQueue = function (e) {
    e === void 0 && (e = {}),
      rt.forEach((t) => {
        !t.props.limit ||
          (e.containerId && t.id !== e.containerId) ||
          t.clearQueue();
      });
  }),
  (xe.isActive = K1),
  (xe.update = function (e, t) {
    t === void 0 && (t = {});
    const r = ((n, o) => {
      var i;
      let { containerId: l } = o;
      return (i = rt.get(l || 1)) == null ? void 0 : i.toasts.get(n);
    })(e, t);
    if (r) {
      const { props: n, content: o } = r,
        i = { delay: 100, ...n, ...t, toastId: t.toastId || e, updateId: G1() };
      i.toastId !== e && (i.staleId = e);
      const l = i.render || o;
      delete i.render, ti(l, i);
    }
  }),
  (xe.done = (e) => {
    xe.update(e, { progress: 1 });
  }),
  (xe.onChange = function (e) {
    return (
      Xu.add(e),
      () => {
        Xu.delete(e);
      }
    );
  }),
  (xe.play = (e) => V0(!0, e)),
  (xe.pause = (e) => V0(!1, e));
const sk = typeof window < "u" ? f.useLayoutEffect : f.useEffect,
  dl = (e) => {
    let { theme: t, type: r, isLoading: n, ...o } = e;
    return D.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "100%",
      height: "100%",
      fill:
        t === "colored" ? "currentColor" : `var(--toastify-icon-color-${r})`,
      ...o,
    });
  },
  Aa = {
    info: function (e) {
      return D.createElement(
        dl,
        { ...e },
        D.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
        })
      );
    },
    warning: function (e) {
      return D.createElement(
        dl,
        { ...e },
        D.createElement("path", {
          d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
        })
      );
    },
    success: function (e) {
      return D.createElement(
        dl,
        { ...e },
        D.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
        })
      );
    },
    error: function (e) {
      return D.createElement(
        dl,
        { ...e },
        D.createElement("path", {
          d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
        })
      );
    },
    spinner: function () {
      return D.createElement("div", { className: "Toastify__spinner" });
    },
  },
  ak = (e) => {
    const {
        isRunning: t,
        preventExitTransition: r,
        toastRef: n,
        eventHandlers: o,
        playToast: i,
      } = nk(e),
      {
        closeButton: l,
        children: a,
        autoClose: s,
        onClick: u,
        type: c,
        hideProgressBar: d,
        closeToast: m,
        transition: h,
        position: y,
        className: w,
        style: k,
        bodyClassName: v,
        bodyStyle: g,
        progressClassName: x,
        progressStyle: E,
        updateId: $,
        role: S,
        progress: P,
        rtl: j,
        toastId: R,
        deleteToast: L,
        isIn: _,
        isLoading: W,
        closeOnClick: Y,
        theme: K,
      } = e,
      z = Pr(
        "Toastify__toast",
        `Toastify__toast-theme--${K}`,
        `Toastify__toast--${c}`,
        { "Toastify__toast--rtl": j },
        { "Toastify__toast--close-on-click": Y }
      ),
      oe = wt(w)
        ? w({ rtl: j, position: y, type: c, defaultClassName: z })
        : Pr(z, w),
      B = (function (U) {
        let { theme: Z, type: ie, isLoading: ee, icon: se } = U,
          fe = null;
        const jt = { theme: Z, type: ie };
        return (
          se === !1 ||
            (wt(se)
              ? (fe = se({ ...jt, isLoading: ee }))
              : f.isValidElement(se)
              ? (fe = f.cloneElement(se, jt))
              : ee
              ? (fe = Aa.spinner())
              : ((So) => So in Aa)(ie) && (fe = Aa[ie](jt))),
          fe
        );
      })(e),
      M = !!P || !s,
      I = { closeToast: m, type: c, theme: K };
    let F = null;
    return (
      l === !1 ||
        (F = wt(l)
          ? l(I)
          : f.isValidElement(l)
          ? f.cloneElement(l, I)
          : (function (U) {
              let { closeToast: Z, theme: ie, ariaLabel: ee = "close" } = U;
              return D.createElement(
                "button",
                {
                  className: `Toastify__close-button Toastify__close-button--${ie}`,
                  type: "button",
                  onClick: (se) => {
                    se.stopPropagation(), Z(se);
                  },
                  "aria-label": ee,
                },
                D.createElement(
                  "svg",
                  { "aria-hidden": "true", viewBox: "0 0 14 16" },
                  D.createElement("path", {
                    fillRule: "evenodd",
                    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
                  })
                )
              );
            })(I)),
      D.createElement(
        h,
        {
          isIn: _,
          done: L,
          position: y,
          preventExitTransition: r,
          nodeRef: n,
          playToast: i,
        },
        D.createElement(
          "div",
          {
            id: R,
            onClick: u,
            "data-in": _,
            className: oe,
            ...o,
            style: k,
            ref: n,
          },
          D.createElement(
            "div",
            {
              ...(_ && { role: S }),
              className: wt(v) ? v({ type: c }) : Pr("Toastify__toast-body", v),
              style: g,
            },
            B != null &&
              D.createElement(
                "div",
                {
                  className: Pr("Toastify__toast-icon", {
                    "Toastify--animate-icon Toastify__zoom-enter": !W,
                  }),
                },
                B
              ),
            D.createElement("div", null, a)
          ),
          F,
          D.createElement(ok, {
            ...($ && !M ? { key: `pb-${$}` } : {}),
            rtl: j,
            theme: K,
            delay: s,
            isRunning: t,
            isIn: _,
            closeToast: m,
            hide: d,
            type: c,
            style: E,
            className: x,
            controlledProgress: M,
            progress: P || 0,
          })
        )
      )
    );
  },
  Gs = function (e, t) {
    return (
      t === void 0 && (t = !1),
      {
        enter: `Toastify--animate Toastify__${e}-enter`,
        exit: `Toastify--animate Toastify__${e}-exit`,
        appendPosition: t,
      }
    );
  },
  uk = Ys(Gs("bounce", !0));
Ys(Gs("slide", !0));
Ys(Gs("zoom"));
Ys(Gs("flip"));
const ck = {
  position: "top-right",
  transition: uk,
  autoClose: 5e3,
  closeButton: !0,
  pauseOnHover: !0,
  pauseOnFocusLoss: !0,
  draggable: "touch",
  draggablePercent: 80,
  draggableDirection: "x",
  role: "alert",
  theme: "light",
};
function dk(e) {
  let t = { ...ck, ...e };
  const r = e.stacked,
    [n, o] = f.useState(!0),
    i = f.useRef(null),
    { getToastToRender: l, isToastActive: a, count: s } = rk(t),
    { className: u, style: c, rtl: d, containerId: m } = t;
  function h(w) {
    const k = Pr(
      "Toastify__toast-container",
      `Toastify__toast-container--${w}`,
      { "Toastify__toast-container--rtl": d }
    );
    return wt(u)
      ? u({ position: w, rtl: d, defaultClassName: k })
      : Pr(k, Nl(u));
  }
  function y() {
    r && (o(!0), xe.play());
  }
  return (
    sk(() => {
      if (r) {
        var w;
        const k = i.current.querySelectorAll('[data-in="true"]'),
          v = 12,
          g = (w = t.position) == null ? void 0 : w.includes("top");
        let x = 0,
          E = 0;
        Array.from(k)
          .reverse()
          .forEach(($, S) => {
            const P = $;
            P.classList.add("Toastify__toast--stacked"),
              S > 0 && (P.dataset.collapsed = `${n}`),
              P.dataset.pos || (P.dataset.pos = g ? "top" : "bot");
            const j = x * (n ? 0.2 : 1) + (n ? 0 : v * S);
            P.style.setProperty("--y", `${g ? j : -1 * j}px`),
              P.style.setProperty("--g", `${v}`),
              P.style.setProperty("--s", "" + (1 - (n ? E : 0))),
              (x += P.offsetHeight),
              (E += 0.025);
          });
      }
    }, [n, s, r]),
    D.createElement(
      "div",
      {
        ref: i,
        className: "Toastify",
        id: m,
        onMouseEnter: () => {
          r && (o(!1), xe.pause());
        },
        onMouseLeave: y,
      },
      l((w, k) => {
        const v = k.length ? { ...c } : { ...c, pointerEvents: "none" };
        return D.createElement(
          "div",
          { className: h(w), style: v, key: `container-${w}` },
          k.map((g) => {
            let { content: x, props: E } = g;
            return D.createElement(
              ak,
              {
                ...E,
                stacked: r,
                collapseAll: y,
                isIn: a(E.toastId, E.containerId),
                style: E.style,
                key: `toast-${E.key}`,
              },
              x
            );
          })
        );
      })
    )
  );
}
var X1 = { exports: {} },
  Z1 = {},
  J1 = { exports: {} },
  q1 = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uo = f;
function fk(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var pk = typeof Object.is == "function" ? Object.is : fk,
  mk = uo.useState,
  hk = uo.useEffect,
  gk = uo.useLayoutEffect,
  vk = uo.useDebugValue;
function yk(e, t) {
  var r = t(),
    n = mk({ inst: { value: r, getSnapshot: t } }),
    o = n[0].inst,
    i = n[1];
  return (
    gk(
      function () {
        (o.value = r), (o.getSnapshot = t), Ba(o) && i({ inst: o });
      },
      [e, r, t]
    ),
    hk(
      function () {
        return (
          Ba(o) && i({ inst: o }),
          e(function () {
            Ba(o) && i({ inst: o });
          })
        );
      },
      [e]
    ),
    vk(r),
    r
  );
}
function Ba(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !pk(e, r);
  } catch {
    return !0;
  }
}
function xk(e, t) {
  return t();
}
var wk =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? xk
    : yk;
q1.useSyncExternalStore =
  uo.useSyncExternalStore !== void 0 ? uo.useSyncExternalStore : wk;
J1.exports = q1;
var kk = J1.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xs = f,
  Sk = kk;
function Ek(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ck = typeof Object.is == "function" ? Object.is : Ek,
  bk = Sk.useSyncExternalStore,
  jk = Xs.useRef,
  $k = Xs.useEffect,
  Pk = Xs.useMemo,
  Nk = Xs.useDebugValue;
Z1.useSyncExternalStoreWithSelector = function (e, t, r, n, o) {
  var i = jk(null);
  if (i.current === null) {
    var l = { hasValue: !1, value: null };
    i.current = l;
  } else l = i.current;
  i = Pk(
    function () {
      function s(h) {
        if (!u) {
          if (((u = !0), (c = h), (h = n(h)), o !== void 0 && l.hasValue)) {
            var y = l.value;
            if (o(y, h)) return (d = y);
          }
          return (d = h);
        }
        if (((y = d), Ck(c, h))) return y;
        var w = n(h);
        return o !== void 0 && o(y, w) ? y : ((c = h), (d = w));
      }
      var u = !1,
        c,
        d,
        m = r === void 0 ? null : r;
      return [
        function () {
          return s(t());
        },
        m === null
          ? void 0
          : function () {
              return s(m());
            },
      ];
    },
    [t, r, n, o]
  );
  var a = bk(e, i[0], i[1]);
  return (
    $k(
      function () {
        (l.hasValue = !0), (l.value = a);
      },
      [a]
    ),
    Nk(a),
    a
  );
};
X1.exports = Z1;
var Rk = X1.exports;
const Tk = Ju(Rk);
var Lk = {
  BASE_URL: "/dpastriescorner/",
  MODE: "production",
  DEV: !1,
  PROD: !0,
  SSR: !1,
};
const W0 = (e) => {
    let t;
    const r = new Set(),
      n = (c, d) => {
        const m = typeof c == "function" ? c(t) : c;
        if (!Object.is(m, t)) {
          const h = t;
          (t =
            d ?? (typeof m != "object" || m === null)
              ? m
              : Object.assign({}, t, m)),
            r.forEach((y) => y(t, h));
        }
      },
      o = () => t,
      s = {
        setState: n,
        getState: o,
        getInitialState: () => u,
        subscribe: (c) => (r.add(c), () => r.delete(c)),
        destroy: () => {
          (Lk ? "production" : void 0) !== "production" &&
            console.warn(
              "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
            ),
            r.clear();
        },
      },
      u = (t = e(n, o, s));
    return s;
  },
  Mk = (e) => (e ? W0(e) : W0),
  { useDebugValue: Dk } = D,
  { useSyncExternalStoreWithSelector: Fk } = Tk,
  Ok = (e) => e;
function Ik(e, t = Ok, r) {
  const n = Fk(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    r
  );
  return Dk(n), n;
}
const Q0 = (e, t) => {
    const r = Mk(e),
      n = (o, i = t) => Ik(r, o, i);
    return Object.assign(n, r), n;
  },
  _k = (e, t) => (e ? Q0(e, t) : Q0);
/*! js-cookie v3.0.5 | MIT */ function fl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r) e[n] = r[n];
  }
  return e;
}
var Ak = {
  read: function (e) {
    return (
      e[0] === '"' && (e = e.slice(1, -1)),
      e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    );
  },
  write: function (e) {
    return encodeURIComponent(e).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  },
};
function Zu(e, t) {
  function r(o, i, l) {
    if (!(typeof document > "u")) {
      (l = fl({}, t, l)),
        typeof l.expires == "number" &&
          (l.expires = new Date(Date.now() + l.expires * 864e5)),
        l.expires && (l.expires = l.expires.toUTCString()),
        (o = encodeURIComponent(o)
          .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
          .replace(/[()]/g, escape));
      var a = "";
      for (var s in l)
        l[s] &&
          ((a += "; " + s), l[s] !== !0 && (a += "=" + l[s].split(";")[0]));
      return (document.cookie = o + "=" + e.write(i, o) + a);
    }
  }
  function n(o) {
    if (!(typeof document > "u" || (arguments.length && !o))) {
      for (
        var i = document.cookie ? document.cookie.split("; ") : [],
          l = {},
          a = 0;
        a < i.length;
        a++
      ) {
        var s = i[a].split("="),
          u = s.slice(1).join("=");
        try {
          var c = decodeURIComponent(s[0]);
          if (((l[c] = e.read(u, c)), o === c)) break;
        } catch {}
      }
      return o ? l[o] : l;
    }
  }
  return Object.create(
    {
      set: r,
      get: n,
      remove: function (o, i) {
        r(o, "", fl({}, i, { expires: -1 }));
      },
      withAttributes: function (o) {
        return Zu(this.converter, fl({}, this.attributes, o));
      },
      withConverter: function (o) {
        return Zu(fl({}, this.converter, o), this.attributes);
      },
    },
    {
      attributes: { value: Object.freeze(t) },
      converter: { value: Object.freeze(e) },
    }
  );
}
var eg = Zu(Ak, { path: "/" });
function Bk(e, t) {
  if (Object.is(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [n, o] of e) if (!Object.is(o, t.get(n))) return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return !1;
    for (const n of e) if (!t.has(n)) return !1;
    return !0;
  }
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length) return !1;
  for (const n of r)
    if (!Object.prototype.hasOwnProperty.call(t, n) || !Object.is(e[n], t[n]))
      return !1;
  return !0;
}
const zk = () => {
    const e = eg.get("orders");
    return e ? JSON.parse(e) : [];
  },
  za = (e) => {
    eg.set("orders", JSON.stringify(e), { expires: 7 });
  },
  Hk = _k((e) => ({
    orders: zk(),
    setOrders: (t) => {
      e(() => ({ orders: t })), za(t);
    },
    updateOrderQuantity: (t, r, n) =>
      e((o) => {
        const i = o.orders.map((l) =>
          l.id === t && l.flavorId === r ? { ...l, quantity: n } : l
        );
        return za(i), { orders: i };
      }),
    removeOrder: (t, r) =>
      e((n) => {
        const o = n.orders.filter((i) => !(i.id === t && i.flavorId === r));
        return za(o), { orders: o };
      }),
  })),
  $d = (e) => Hk(e, Bk),
  Uk = (e) => (e ? product.category.toLowerCase() : "default"),
  Vk = ({ open: e, setOpen: t }) => {
    const { orders: r, setOrders: n } = $d((s) => s),
      o = ho(),
      i = f.useMemo(() => {
        let s = 0;
        return (
          r.forEach((u) => {
            const { flavorPrice: c, quantity: d } = u;
            if (typeof c == "string") {
              const m = c.replace("₱", "").trim(),
                h = parseInt(m, 10);
              isNaN(h)
                ? console.error("Invalid price format:", c)
                : (s += h * d);
            } else
              console.error("Undefined or invalid flavorPrice for item:", u);
          }),
          s
        );
      }, [r]);
    f.useEffect(() => {
      o.pathname === "/checkout" && t(!1);
    }, [o.pathname, t]);
    const l = (s, u) => {
        const c = [...r],
          d = r.findIndex((h) => h.id === s && h.flavorId === u);
        window.confirm("Are you sure you want to delete this order(s)?") &&
          (c.splice(d, 1), xe.success("Order(s) removed successfully"), n(c));
      },
      a = (s, u, c) => {
        if (c <= 0) return;
        const d = r.map((m) =>
          m.id === s && m.flavorId === u ? { ...m, quantity: c } : m
        );
        n(d);
      };
    return p.jsxs(W4, {
      open: e,
      onClose: t,
      className: "relative z-50",
      children: [
        p.jsx(V4, {
          className:
            "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out",
        }),
        p.jsx("div", {
          className: "fixed inset-0 overflow-hidden",
          children: p.jsx("div", {
            className: "absolute inset-0 overflow-hidden",
            children: p.jsx("div", {
              className:
                "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",
              children: p.jsx(I1, {
                className:
                  "pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out",
                children: p.jsxs("div", {
                  className:
                    "flex h-full flex-col overflow-y-scroll bg-white shadow-xl",
                  children: [
                    p.jsxs("div", {
                      className: "flex-1 overflow-y-auto px-4 py-6 sm:px-6",
                      children: [
                        p.jsxs("div", {
                          className: "flex items-start justify-between",
                          children: [
                            p.jsx(_1, {
                              className: "text-lg font-medium text-gray-900",
                              children: "Shopping cart",
                            }),
                            p.jsx("div", {
                              className: "ml-3 flex h-7 items-center",
                              children: p.jsxs("button", {
                                type: "button",
                                onClick: () => t(!1),
                                className:
                                  "relative -m-2 p-2 text-gray-400 hover:text-gray-500",
                                children: [
                                  p.jsx("span", {
                                    className: "absolute -inset-0.5",
                                  }),
                                  p.jsx("span", {
                                    className: "sr-only",
                                    children: "Close panel",
                                  }),
                                  p.jsx(W1, {
                                    "aria-hidden": "true",
                                    className: "h-6 w-6",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        p.jsx("div", {
                          className: "mt-8",
                          children: p.jsx("div", {
                            className: "flow-root",
                            children: p.jsx("ul", {
                              role: "list",
                              className: "-my-6 divide-y divide-gray-200",
                              children: r.map((s) =>
                                p.jsxs(
                                  "li",
                                  {
                                    className: "flex py-6",
                                    children: [
                                      p.jsx("div", {
                                        className:
                                          "h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200",
                                        children: p.jsx("img", {
                                          alt: s.imageAlt,
                                          src: s.flavorImage,
                                          className:
                                            "h-full w-full object-cover object-center",
                                        }),
                                      }),
                                      p.jsxs("div", {
                                        className: "ml-4 flex flex-1 flex-col",
                                        children: [
                                          p.jsxs("div", {
                                            children: [
                                              p.jsxs("div", {
                                                className:
                                                  "flex justify-between text-base font-medium text-gray-900",
                                                children: [
                                                  p.jsx("h3", {
                                                    children: p.jsx(de, {
                                                      to: `/products/${Uk(
                                                        s.category
                                                      )}/${s.id}`,
                                                      children: s.name,
                                                    }),
                                                  }),
                                                  p.jsx("p", {
                                                    className: "ml-4",
                                                    children:
                                                      parseInt(
                                                        s.flavorPrice.replace(
                                                          "₱",
                                                          ""
                                                        ),
                                                        10
                                                      ) * s.quantity,
                                                  }),
                                                ],
                                              }),
                                              p.jsx("p", {
                                                className:
                                                  "mt-1 text-sm text-gray-500",
                                                children: s.flavorName,
                                              }),
                                            ],
                                          }),
                                          p.jsxs("div", {
                                            className:
                                              "flex flex-1 items-end justify-between text-sm",
                                            children: [
                                              p.jsxs("div", {
                                                className:
                                                  "flex items-center space-x-2",
                                                children: [
                                                  p.jsx("p", {
                                                    className: "text-gray-500",
                                                    children: "Qty:",
                                                  }),
                                                  p.jsxs("div", {
                                                    className:
                                                      "flex items-center border border-gray-300 rounded-md",
                                                    children: [
                                                      p.jsx("button", {
                                                        type: "button",
                                                        className:
                                                          "px-2 py-1 text-gray-600 bg-gray-300 hover:bg-gray-100",
                                                        onClick: () =>
                                                          a(
                                                            s.id,
                                                            s.flavorId,
                                                            s.quantity - 1
                                                          ),
                                                        children: "-",
                                                      }),
                                                      p.jsx("p", {
                                                        className:
                                                          "text-gray-500 px-3 py-1",
                                                        children: s.quantity,
                                                      }),
                                                      p.jsx("button", {
                                                        type: "button",
                                                        className:
                                                          "px-2 py-1 text-gray-600 bg-gray-300 hover:bg-gray-100",
                                                        onClick: () =>
                                                          a(
                                                            s.id,
                                                            s.flavorId,
                                                            s.quantity + 1
                                                          ),
                                                        children: "+",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              p.jsx("div", {
                                                className: "flex",
                                                children: p.jsx("button", {
                                                  type: "button",
                                                  className:
                                                    "font-medium text-indigo-600 hover:text-indigo-500",
                                                  onClick: () =>
                                                    l(s.id, s.flavorId),
                                                  children: "Remove",
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  `${s.id}-${s.flavorId}-${s.flavorName}`
                                )
                              ),
                            }),
                          }),
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      className: "border-t border-gray-200 px-4 py-6 sm:px-6",
                      children: [
                        p.jsxs("div", {
                          className:
                            "flex justify-between text-base font-medium text-gray-900",
                          children: [
                            p.jsx("p", { children: "Subtotal" }),
                            p.jsxs("p", { children: ["₱", i] }),
                          ],
                        }),
                        p.jsx("p", {
                          className: "mt-0.5 text-sm text-gray-500",
                          children:
                            "Shipping and taxes calculated at checkout.",
                        }),
                        p.jsx("div", {
                          className: "mt-6",
                          children: p.jsx(de, {
                            to: "/checkout",
                            className:
                              "flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700",
                            children: "Checkout",
                          }),
                        }),
                        p.jsx("div", {
                          className:
                            "mt-6 flex justify-center text-center text-sm text-gray-500",
                          children: p.jsxs("p", {
                            children: [
                              "or",
                              " ",
                              p.jsxs("button", {
                                type: "button",
                                onClick: () => t(!1),
                                className:
                                  "font-medium text-indigo-600 hover:text-indigo-500",
                                children: [
                                  "Continue Shopping",
                                  p.jsx("span", {
                                    "aria-hidden": "true",
                                    children: " →",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
        }),
      ],
    });
  },
  tg = f.createContext(),
  Wk = ({ children: e }) => {
    const [t, r] = f.useState(() =>
      typeof window < "u" ? localStorage.getItem("theme") === "dark" : !1
    );
    f.useEffect(() => {
      typeof window < "u" &&
        (document.documentElement.classList.toggle("dark", t),
        localStorage.setItem("theme", t ? "dark" : "light"));
    }, [t]);
    const n = (o) => {
      r(o.target.checked);
    };
    return p.jsx(tg.Provider, {
      value: { isDarkMode: t, handleChange: n },
      children: e,
    });
  },
  Qk = () => {
    const e = f.useContext(tg);
    if (e === void 0)
      throw new Error("useTheme must be used within a ThemeProvider");
    return e;
  },
  Kk = [
    { name: "Home", href: "/", current: !1 },
    { name: "Shop", href: "/products", current: !1 },
    { name: "Contact", href: "/contact", current: !1 },
  ],
  Yk = () => {
    const e = ho(),
      [t, r] = f.useState(!1),
      n = Kk.map((l) => ({
        ...l,
        current:
          l.href === "/products"
            ? e.pathname.includes("/products")
            : e.pathname === l.href,
      })),
      { isDarkMode: o, handleChange: i } = Qk();
    return p.jsxs(l5, {
      as: "nav",
      className: "bg-amber-700 dark:bg-orange-300 sticky top-0 z-50",
      children: [
        p.jsx("div", {
          className: "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8",
          children: p.jsxs("div", {
            className: "relative flex h-16 items-center justify-between",
            children: [
              p.jsx("div", {
                className:
                  "absolute inset-y-0 left-0 flex items-center sm:hidden",
                children: p.jsxs(B1, {
                  className:
                    "group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-orange-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                  children: [
                    p.jsx("span", { className: "absolute -inset-0.5" }),
                    p.jsx("span", {
                      className: "sr-only",
                      children: "Open main menu",
                    }),
                    p.jsx(X5, {
                      "aria-hidden": "true",
                      className: "block h-6 w-6 group-data-[open]:hidden",
                    }),
                    p.jsx(W1, {
                      "aria-hidden": "true",
                      className: "hidden h-6 w-6 group-data-[open]:block",
                    }),
                  ],
                }),
              }),
              p.jsxs("div", {
                className:
                  "flex flex-1 items-center justify-center sm:items-stretch sm:justify-evenly",
                children: [
                  p.jsxs("div", {
                    className: "flex flex-shrink-0 items-center",
                    children: [
                      p.jsx("img", {
                        alt: "Your Company",
                        src: "/dpastriescorner/src/assets/logo1.png",
                        className: "w-10 mx-2 h-auto",
                      }),
                      p.jsx("img", {
                        alt: "Your Company",
                        src: "/dpastriescorner/src/assets/logo.png",
                        className: "h-8 w-auto",
                      }),
                    ],
                  }),
                  p.jsx("div", {
                    className: "hidden sm:ml-6 sm:block",
                    children: p.jsxs("div", {
                      className: "flex space-x-4",
                      children: [
                        n.map((l) =>
                          p.jsx(
                            de,
                            {
                              to: l.href,
                              className: K0(
                                l.current
                                  ? "bg-orange-300 dark:bg-amber-700 dark:text-gray-300 text-gray-900"
                                  : "text-gray-300 hover:bg-orange-200 hover:text-gray-900 dark:text-gray-900 dark:hover:bg-amber-500 dark:hover:text-white",
                                "rounded-md px-3 py-2 text-sm font-medium"
                              ),
                              children: l.name,
                            },
                            l.name
                          )
                        ),
                        p.jsxs("label", {
                          className: "inline-flex items-center relative",
                          children: [
                            p.jsx("input", {
                              className: "peer hidden",
                              type: "checkbox",
                              checked: o,
                              onChange: i,
                            }),
                            p.jsx("div", {
                              className:
                                "relative w-[100px] h-[40px] bg-white peer-checked:bg-zinc-500 rounded-full after:absolute after:content-[''] after:w-[33px] after:h-[33px] after:bg-gradient-to-r from-orange-500 to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[4px] after:left-[9px] active:after:w-[50px] peer-checked:after:left-[90px] peer-checked:after:translate-x-[-100%] shadow-sm duration-300 after:duration-300 after:shadow-md",
                            }),
                            p.jsx("svg", {
                              height: "0",
                              width: "100",
                              viewBox: "0 0 24 24",
                              "data-name": "Layer 1",
                              id: "Layer_1",
                              xmlns: "http://www.w3.org/2000/svg",
                              className:
                                "fill-white peer-checked:opacity-60 absolute w-6 h-6 left-[13px]",
                              children: p.jsx("path", {
                                d: "M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z",
                              }),
                            }),
                            p.jsx("svg", {
                              height: "512",
                              width: "512",
                              viewBox: "0 0 24 24",
                              "data-name": "Layer 1",
                              id: "Layer_1",
                              xmlns: "http://www.w3.org/2000/svg",
                              className:
                                "fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-6 h-6 right-[13px]",
                              children: p.jsx("path", {
                                d: "M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              p.jsxs("div", {
                className:
                  "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",
                children: [
                  p.jsxs("button", {
                    onClick: () => r(!0),
                    type: "button",
                    className:
                      "relative rounded-full bg-amber-700 dark:bg-orange-300 p-1 text-gray-100 dark:text-gray-800 hover:text-white focus:outline-none ",
                    children: [
                      p.jsx("span", { className: "absolute -inset-1.5" }),
                      p.jsx("span", { className: "sr-only", children: "Cart" }),
                      p.jsx(J5, {
                        "aria-hidden": "true",
                        className: "h-6 w-6",
                      }),
                    ],
                  }),
                  p.jsxs(D5, {
                    as: "div",
                    className: "relative ml-3",
                    children: [
                      p.jsx("div", {
                        children: p.jsxs(H1, {
                          className:
                            "relative flex rounded-full bg-gray-800 text-sm focus:outline-none  focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",
                          children: [
                            p.jsx("span", { className: "absolute -inset-1.5" }),
                            p.jsx("span", {
                              className: "sr-only",
                              children: "Open user menu",
                            }),
                            p.jsx("img", {
                              alt: "",
                              src: "/dpastriescorner/src/assets/circle-user-solid.svg",
                              className: "h-8 w-8 rounded-full",
                            }),
                          ],
                        }),
                      }),
                      p.jsxs(U1, {
                        transition: !0,
                        className:
                          "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in",
                        children: [
                          p.jsx(Pl, {
                            children: p.jsx(de, {
                              to: "/dashboard",
                              className:
                                "block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100",
                              children: "Your Profile",
                            }),
                          }),
                          p.jsx(Pl, {
                            children: p.jsx(de, {
                              to: "#",
                              className:
                                "block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100",
                              children: "Settings",
                            }),
                          }),
                          p.jsx(Pl, {
                            children: p.jsx(de, {
                              to: "#",
                              className:
                                "block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100",
                              children: "Sign out",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        p.jsx(Vk, { open: t, setOpen: r }),
        p.jsxs(z1, {
          className: "sm:hidden",
          children: [
            p.jsx("div", {
              className: "space-y-1 px-2 pb-3 pt-2",
              children: n.map((l) =>
                p.jsx(
                  de,
                  {
                    to: l.href,
                    className: K0(
                      l.current
                        ? "bg-orange-300 dark:bg-amber-700 dark:text-gray-300 text-gray-900"
                        : "text-gray-300 hover:bg-orange-100 hover:text-white dark:text-gray-900 dark:hover:bg-amber-500 dark:hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    ),
                    children: l.name,
                  },
                  l.name
                )
              ),
            }),
            p.jsxs("label", {
              className: "inline-flex items-center relative",
              children: [
                p.jsx("input", {
                  className: "peer hidden",
                  type: "checkbox",
                  checked: o,
                  onChange: i,
                }),
                p.jsx("div", {
                  className:
                    "ml-4 relative w-[100px] h-[40px] bg-white peer-checked:bg-zinc-500 rounded-full after:absolute after:content-[''] after:w-[33px] after:h-[33px] after:bg-gradient-to-r from-orange-500 to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[4px] after:left-[9px] active:after:w-[50px] peer-checked:after:left-[90px] peer-checked:after:translate-x-[-100%] shadow-sm duration-300 after:duration-300 after:shadow-md",
                }),
                p.jsx("svg", {
                  height: "0",
                  width: "100",
                  viewBox: "0 0 24 24",
                  "data-name": "Layer 1",
                  id: "Layer_1",
                  xmlns: "http://www.w3.org/2000/svg",
                  className:
                    "fill-white peer-checked:opacity-60 absolute w-6 h-6 left-[29px]",
                  children: p.jsx("path", {
                    d: "M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z",
                  }),
                }),
                p.jsx("svg", {
                  height: "512",
                  width: "512",
                  viewBox: "0 0 24 24",
                  "data-name": "Layer 1",
                  id: "Layer_1",
                  xmlns: "http://www.w3.org/2000/svg",
                  className:
                    "fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-6 h-6 right-[13px]",
                  children: p.jsx("path", {
                    d: "M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
function K0(...e) {
  return e.filter(Boolean).join(" ");
}
const Gk = () =>
    p.jsx("footer", {
      className: "bg-orange-300 dark:bg-amber-900",
      children: p.jsxs("div", {
        className: "container p-6 mx-auto",
        children: [
          p.jsxs("div", {
            className: "lg:flex",
            children: [
              p.jsx("div", {
                className: "w-full -mx-6 lg:w-2/5",
                children: p.jsxs("div", {
                  className: "px-6",
                  children: [
                    p.jsx(de, {
                      to: "/",
                      children: p.jsx("img", {
                        className: "w-auto h-10",
                        src: "/dpastriescorner//src/assets/logo1.png",
                        alt: "",
                      }),
                    }),
                    p.jsx("p", {
                      className:
                        "max-w-sm mt-2 text-gray-700 dark:text-gray-400",
                      children:
                        "Follow us on our socials and never miss out on new products, promos, and more.",
                    }),
                    p.jsxs("div", {
                      className: "flex mt-6 -mx-2",
                      children: [
                        p.jsx(de, {
                          to: "https://www.instagram.com/dpastriescorner",
                          target: "_blank",
                          className:
                            "mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400",
                          "aria-label": "Instagram",
                          children: p.jsx("svg", {
                            className: "w-5 h-5 fill-current",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: p.jsx("path", {
                              d: "M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 17 6 C 17.552 6 18 6.448 18 7 C 18 7.552 17.552 8 17 8 C 16.448 8 16 7.552 16 7 C 16 6.448 16.448 6 17 6 z M 12 7 C 14.757 7 17 9.243 17 12 C 17 14.757 14.757 17 12 17 C 9.243 17 7 14.757 7 12 C 7 9.243 9.243 7 12 7 z M 12 9 A 3 3 0 0 0 12 15 A 3 3 0 0 0 12 9 z",
                            }),
                          }),
                        }),
                        p.jsx(de, {
                          to: "https://www.facebook.com/dpastriescorner",
                          target: "_blank",
                          className:
                            "mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400",
                          "aria-label": "Facebook",
                          children: p.jsx("svg", {
                            className: "w-5 h-5 fill-current",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: p.jsx("path", {
                              d: "M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z",
                            }),
                          }),
                        }),
                        p.jsx(de, {
                          to: "https://www.tiktok.com/@itsmedi_018",
                          target: "_blank",
                          className:
                            "mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400",
                          "aria-label": "Tiktok",
                          children: p.jsx("svg", {
                            className: "w-5 h-5 fill-current",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: p.jsx("path", {
                              d: "M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 12 7 L 14 7 C 14 8.005 15.471 9 16 9 L 16 11 C 15.395 11 14.668 10.734156 14 10.285156 L 14 14 C 14 15.654 12.654 17 11 17 C 9.346 17 8 15.654 8 14 C 8 12.346 9.346 11 11 11 L 11 13 C 10.448 13 10 13.449 10 14 C 10 14.551 10.448 15 11 15 C 11.552 15 12 14.551 12 14 L 12 7 z",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              p.jsx("div", {
                className: "mt-6 lg:mt-0 lg:flex-1",
                children: p.jsxs("div", {
                  className:
                    "grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
                  children: [
                    p.jsxs("div", {
                      children: [
                        p.jsx("h3", {
                          className: "text-gray-700 uppercase dark:text-white",
                          children: "About",
                        }),
                        p.jsx(de, {
                          to: "/company",
                          className:
                            "block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline",
                          children: "Company",
                        }),
                        p.jsx(de, {
                          to: "/community",
                          className:
                            "block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline",
                          children: "Community",
                        }),
                        p.jsx(de, {
                          to: "/career",
                          className:
                            "block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline",
                          children: "Careers",
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      children: [
                        p.jsx("h3", {
                          className: "text-gray-700 uppercase dark:text-white",
                          children: "Blog",
                        }),
                        p.jsx(de, {
                          to: "/thebakerblogpost",
                          className:
                            "block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline",
                          children: "The Baker",
                        }),
                        p.jsx(de, {
                          to: "/fhbblogpost",
                          className:
                            "block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline",
                          children: "From Hobby to Business",
                        }),
                        p.jsx(de, {
                          to: "/videos",
                          className:
                            "block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline",
                          children: "Videos",
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      children: [
                        p.jsx("h3", {
                          className: "text-gray-700 uppercase dark:text-white",
                          children: "Products",
                        }),
                        p.jsx(de, {
                          to: "/products/pies",
                          className:
                            "block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline",
                          children: "Pies",
                        }),
                        p.jsx(de, {
                          to: "/products/loaves",
                          className:
                            "block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline",
                          children: "Loaves",
                        }),
                        p.jsx(de, {
                          to: "/products",
                          className:
                            "block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline",
                          children: "More",
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      children: [
                        p.jsx("h3", {
                          className: "text-gray-700 uppercase dark:text-white",
                          children: "Contact",
                        }),
                        p.jsx("span", {
                          className:
                            "block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline",
                          children: "+63 945-798-1968",
                        }),
                        p.jsx("span", {
                          className:
                            "block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline",
                          children: "dianneguerrero23@gmail.com",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          p.jsx("hr", {
            className: "h-px my-6 bg-gray-200 border-none dark:bg-gray-700",
          }),
          p.jsx("div", {
            children: p.jsx("p", {
              className: "text-center text-gray-700 dark:text-gray-400",
              children: "© Luis Guerrero 2024 - All rights reserved",
            }),
          }),
        ],
      }),
    }),
  Xk = () =>
    p.jsx(p.Fragment, {
      children: p.jsxs(Wk, {
        children: [p.jsx(Yk, {}), p.jsx($h, {}), p.jsx(dk, {}), p.jsx(Gk, {})],
      }),
    }),
  Zk = () => {
    let e = qc();
    return p.jsx("section", {
      className: "bg-orange-300 dark:bg-amber-900",
      children: p.jsx("div", {
        className:
          "container flex items-center min-h-screen px-6 py-12 mx-auto",
        children: p.jsxs("div", {
          className: "flex flex-col items-center max-w-sm mx-auto text-center",
          children: [
            p.jsx("p", {
              className:
                "p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800",
              children: p.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: "2",
                stroke: "currentColor",
                className: "w-6 h-6",
                children: p.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z",
                }),
              }),
            }),
            p.jsx("h1", {
              className:
                "mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl",
              children: "Page not found",
            }),
            p.jsx("p", {
              className: "mt-4 text-gray-500 dark:text-gray-400",
              children:
                "The page you are looking for doesn't exist. Here are some helpful links:",
            }),
            p.jsxs("div", {
              className:
                "flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto",
              children: [
                p.jsxs("button", {
                  onClick: () => e(-1),
                  className:
                    "flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700",
                  children: [
                    p.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      strokeWidth: "1.5",
                      stroke: "currentColor",
                      className: "w-5 h-5 rtl:rotate-180",
                      children: p.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18",
                      }),
                    }),
                    p.jsx("span", { children: "Go back" }),
                  ],
                }),
                p.jsx(de, {
                  to: "/",
                  children: p.jsx("button", {
                    className:
                      "w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600",
                    children: "Take me home",
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  Jk = () =>
    p.jsx("section", {
      className: "bg-orange-300 dark:bg-amber-900",
      children: p.jsxs("div", {
        className:
          "container flex flex-col items-center px-4 py-12 mx-auto text-center",
        children: [
          p.jsxs("h2", {
            className:
              "max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white",
            children: [
              "Best place to order your",
              " ",
              p.jsx("span", {
                className: "text-amber-700 dark:text-orange-300",
                children: "pastry.",
              }),
            ],
          }),
          p.jsx("p", {
            className:
              "max-w-4xl mt-6 text-center text-gray-700 dark:text-gray-300",
            children:
              "Enjoy exceptional quality and diverse flavors crafted with care by our passionate baker. From classics like Buko and Egg Pie to unique favorites such as Strawberry, Chocolate, Ube, and Mango flavored products, each pastry promises a delightful experience. Treat yourself to freshness, flavor, and a commitment to customer satisfaction at D' Pastries Corner!",
          }),
          p.jsx("div", {
            className: "inline-flex w-full mt-6 sm:w-auto",
            children: p.jsx(de, {
              to: "/products",
              className:
                "inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80",
              children: "Shop Now",
            }),
          }),
        ],
      }),
    }),
  qk = () =>
    p.jsx("section", {
      className: "bg-orange-300 dark:bg-amber-900",
      children: p.jsxs("div", {
        className: "container px-6 py-10 mx-auto",
        children: [
          p.jsx("h1", {
            className:
              "text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white",
            children: "Our Executive Team",
          }),
          p.jsx("p", {
            className:
              "max-w-2xl mx-auto my-6 text-center text-gray-700 dark:text-gray-300",
            children:
              "Our pastry business is supported by a dedicated team of skilled web developers. Their expertise spans both front-end and back-end development, ensuring our website is intuitive, engaging, robust, and secure. This team is integral to showcasing our delicious creations online.",
          }),
          p.jsxs("div", {
            className:
              "grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-3 xl:grid-cols-3",
            children: [
              p.jsxs("div", {
                className:
                  "flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent",
                children: [
                  p.jsx("img", {
                    className:
                      "object-cover w-32 h-32 rounded-full ring-4 ring-gray-300",
                    src: "/dpastriescorner/src/assets/fs11.jpg",
                    alt: "",
                  }),
                  p.jsx("h1", {
                    className:
                      "mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white",
                    children: "Luis Guerrero",
                  }),
                  p.jsx("p", {
                    className:
                      "mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300",
                    children: "Full Stack Developer",
                  }),
                  p.jsxs("div", {
                    className: "flex mt-3 -mx-2",
                    children: [
                      p.jsx("a", {
                        href: "https://roadmap.sh/u/luis",
                        target: "_blank",
                        className:
                          "mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white",
                        "aria-label": "Roadmap",
                        children: p.jsx("svg", {
                          className: "w-6 h-6 fill-current",
                          viewBox: "0 0 283 283",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: p.jsx("path", {
                            d: "M121.215 210.72c-1.867.56-4.854 1.12-8.96 1.68-3.92.56-8.027.84-12.32.84-4.107 0-7.84-.28-11.2-.84-3.174-.56-5.88-1.68-8.12-3.36s-4.014-3.92-5.32-6.72c-1.12-2.987-1.68-6.813-1.68-11.48v-84c0-4.293.746-7.933 2.24-10.92 1.68-3.173 4.013-5.973 7-8.4s6.626-4.573 10.92-6.44c4.48-2.053 9.24-3.827 14.28-5.32a106.176 106.176 0 0 1 15.68-3.36 95.412 95.412 0 0 1 16.24-1.4c8.96 0 16.053 1.773 21.28 5.32 5.226 3.36 7.84 8.96 7.84 16.8 0 2.613-.374 5.227-1.12 7.84-.747 2.427-1.68 4.667-2.8 6.72a133.1 133.1 0 0 0-12.04.56c-4.107.373-8.12.933-12.04 1.68s-7.654 1.587-11.2 2.52c-3.36.747-6.254 1.68-8.68 2.8v95.48zm45.172-22.4c0-7.84 2.426-14.373 7.28-19.6s11.48-7.84 19.88-7.84 15.026 2.613 19.88 7.84 7.28 11.76 7.28 19.6-2.427 14.373-7.28 19.6-11.48 7.84-19.88 7.84-15.027-2.613-19.88-7.84-7.28-11.76-7.28-19.6z",
                          }),
                        }),
                      }),
                      p.jsx("a", {
                        href: "https://www.facebook.com/luis.guerrero036",
                        target: "_blank",
                        className:
                          "mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white",
                        "aria-label": "Facebook",
                        children: p.jsx("svg", {
                          className: "w-6 h-6 fill-current",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: p.jsx("path", {
                            d: "M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z",
                          }),
                        }),
                      }),
                      p.jsx("a", {
                        href: "https://github.com/Anonymonkz",
                        target: "_blank",
                        className:
                          "mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white",
                        "aria-label": "Github",
                        children: p.jsx("svg", {
                          className: "w-6 h-6 fill-current",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: p.jsx("path", {
                            d: "M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              p.jsxs("div", {
                className:
                  "flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent",
                children: [
                  p.jsx("img", {
                    className:
                      "object-cover w-32 h-32 rounded-full ring-4 ring-gray-300",
                    src: "/dpastriescorner/src/assets/ceo.jpg",
                    alt: "",
                  }),
                  p.jsx("h1", {
                    className:
                      "mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white",
                    children: "Dianne Guerrero",
                  }),
                  p.jsx("p", {
                    className:
                      "mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300",
                    children: "Founder / Business Owner",
                  }),
                  p.jsxs("div", {
                    className: "flex mt-3 -mx-2",
                    children: [
                      p.jsx("a", {
                        href: "https://www.instagram.com/dpastriescorner",
                        target: "_blank",
                        className:
                          "mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white",
                        "aria-label": "Instagram",
                        children: p.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "w-6 h-6 fill-current",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          children: p.jsx("path", {
                            d: "M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 17 6 C 17.552 6 18 6.448 18 7 C 18 7.552 17.552 8 17 8 C 16.448 8 16 7.552 16 7 C 16 6.448 16.448 6 17 6 z M 12 7 C 14.757 7 17 9.243 17 12 C 17 14.757 14.757 17 12 17 C 9.243 17 7 14.757 7 12 C 7 9.243 9.243 7 12 7 z M 12 9 A 3 3 0 0 0 12 15 A 3 3 0 0 0 12 9 z",
                          }),
                        }),
                      }),
                      p.jsx("a", {
                        href: "https://www.facebook.com/dpastriescorner",
                        target: "_blank",
                        className:
                          "mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white",
                        "aria-label": "Facebook",
                        children: p.jsx("svg", {
                          className: "w-6 h-6 fill-current",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: p.jsx("path", {
                            d: "M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z",
                          }),
                        }),
                      }),
                      p.jsx("a", {
                        href: "https://www.tiktok.com/@itsmedi_018",
                        target: "_blank",
                        className:
                          "mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white",
                        "aria-label": "Tiktok",
                        children: p.jsx("svg", {
                          className: "w-6 h-6 fill-current",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: p.jsx("path", {
                            d: "M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 12 7 L 14 7 C 14 8.005 15.471 9 16 9 L 16 11 C 15.395 11 14.668 10.734156 14 10.285156 L 14 14 C 14 15.654 12.654 17 11 17 C 9.346 17 8 15.654 8 14 C 8 12.346 9.346 11 11 11 L 11 13 C 10.448 13 10 13.449 10 14 C 10 14.551 10.448 15 11 15 C 11.552 15 12 14.551 12 14 L 12 7 z",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              p.jsxs("div", {
                className:
                  "flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent",
                children: [
                  p.jsx("img", {
                    className:
                      "object-cover w-32 h-32 rounded-full ring-4 ring-gray-300",
                    src: "/dpastriescorner/src/assets/fs2.png",
                    alt: "",
                  }),
                  p.jsx("h1", {
                    className:
                      "mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white",
                    children: "Ronald Madrid",
                  }),
                  p.jsx("p", {
                    className:
                      "mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300",
                    children: "Full Stack Developer",
                  }),
                  p.jsxs("div", {
                    className: "flex mt-3 -mx-2",
                    children: [
                      p.jsx("a", {
                        href: "https://roadmap.sh/u/slyckster",
                        target: "_blank",
                        className:
                          "mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white",
                        "aria-label": "Roadmap",
                        children: p.jsx("svg", {
                          className: "w-6 h-6 fill-current",
                          viewBox: "0 0 283 283",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: p.jsx("path", {
                            d: "M121.215 210.72c-1.867.56-4.854 1.12-8.96 1.68-3.92.56-8.027.84-12.32.84-4.107 0-7.84-.28-11.2-.84-3.174-.56-5.88-1.68-8.12-3.36s-4.014-3.92-5.32-6.72c-1.12-2.987-1.68-6.813-1.68-11.48v-84c0-4.293.746-7.933 2.24-10.92 1.68-3.173 4.013-5.973 7-8.4s6.626-4.573 10.92-6.44c4.48-2.053 9.24-3.827 14.28-5.32a106.176 106.176 0 0 1 15.68-3.36 95.412 95.412 0 0 1 16.24-1.4c8.96 0 16.053 1.773 21.28 5.32 5.226 3.36 7.84 8.96 7.84 16.8 0 2.613-.374 5.227-1.12 7.84-.747 2.427-1.68 4.667-2.8 6.72a133.1 133.1 0 0 0-12.04.56c-4.107.373-8.12.933-12.04 1.68s-7.654 1.587-11.2 2.52c-3.36.747-6.254 1.68-8.68 2.8v95.48zm45.172-22.4c0-7.84 2.426-14.373 7.28-19.6s11.48-7.84 19.88-7.84 15.026 2.613 19.88 7.84 7.28 11.76 7.28 19.6-2.427 14.373-7.28 19.6-11.48 7.84-19.88 7.84-15.027-2.613-19.88-7.84-7.28-11.76-7.28-19.6z",
                          }),
                        }),
                      }),
                      p.jsx("a", {
                        href: "https://www.facebook.com/RJM.Sniper.X.05",
                        target: "_blank",
                        className:
                          "mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white",
                        "aria-label": "Facebook",
                        children: p.jsx("svg", {
                          className: "w-6 h-6 fill-current",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: p.jsx("path", {
                            d: "M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z",
                          }),
                        }),
                      }),
                      p.jsx("a", {
                        href: "https://github.com/slycksters",
                        target: "_blank",
                        className:
                          "mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white",
                        "aria-label": "Github",
                        children: p.jsx("svg", {
                          className: "w-6 h-6 fill-current",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: p.jsx("path", {
                            d: "M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  e6 = () => p.jsxs(p.Fragment, { children: [p.jsx(qk, {}), p.jsx(Jk, {})] }),
  ds = [
    {
      id: 1,
      name: "Buko Pie",
      imageSrc: "/dpastriescorner/src/assets/prods/bp.jpg",
      images: [
        { src: "/dpastriescorner//src/assets/prods/bp4.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/bp1.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/bp2.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/bp3.jpg", alt: "Buko pie." },
      ],
      imageAlt: "Buko pie.",
      description: "Traditional Filipino coconut pie.",
      details:
        "Our Buko Pie is made with fresh coconut meat and creamy filling.",
      highlights: ["Made with fresh coconut meat", "Creamy filling"],
      flavors: [
        {
          id: 1,
          name: "Plain",
          price: "₱320",
          src: "/dpastriescorner/src/assets/prods/bp.jpg",
          inStock: !0,
        },
      ],
      basePrice: "₱320",
      category: "Pies",
    },
    {
      id: 2,
      name: "Egg Pie",
      imageSrc: "/dpastriescorner/src/assets/prods/ep.jpg",
      images: [
        { src: "/dpastriescorner/src/assets/prods/ep4.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/ep1.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/ep2.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/ep3.jpg", alt: "Buko pie." },
      ],
      imageAlt: "Egg pie.",
      description: "Classic Filipino egg custard pie.",
      details:
        "Our Egg Pie is a creamy and smooth custard pie, perfect for dessert.",
      highlights: ["Creamy and smooth custard", "Perfect for dessert"],
      flavors: [
        {
          id: 1,
          name: "Plain",
          price: "₱300",
          src: "/dpastriescorner/src/assets/prods/ep.jpg",
          inStock: !0,
        },
      ],
      basePrice: "₱300",
      category: "Pies",
    },
    {
      id: 3,
      name: "Chocolate Cake Loaf",
      imageSrc: "/dpastriescorner/src/assets/prods/chcl.jpg",
      images: [
        { src: "/dpastriescorner/src/assets/prods/chcl.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/chcl.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/chcl.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/chcl.jpg", alt: "Buko pie." },
      ],
      imageAlt: "Chocolate cake loaf.",
      description: "Moist chocolate cake in loaf form.",
      details:
        "Our Chocolate Cake Loaf is rich and moist, perfect for chocolate lovers.",
      highlights: ["Rich and moist", "Perfect for chocolate lovers"],
      flavors: [
        {
          id: 1,
          name: "Plain",
          price: "₱160",
          src: "/dpastriescorner/src/assets/prods/chcl.jpg",
          inStock: !0,
        },
        {
          id: 2,
          name: "w/ Whipped Frosting",
          src: "/dpastriescorner/src/assets/prods/chcl.jpg",
          price: "₱180",
          inStock: !0,
        },
        {
          id: 3,
          name: "w/ Chocolate Ganache",
          src: "/dpastriescorner/src/assets/prods/chcl.jpg",
          price: "₱200",
          inStock: !0,
        },
        {
          id: 4,
          name: "w/ Chocolate Chips",
          src: "/dpastriescorner/src/assets/prods/chcl.jpg",
          price: "₱170",
          inStock: !0,
        },
      ],
      basePrice: "₱160",
      category: "Loaves",
    },
    {
      id: 4,
      name: "Carrot Cake Loaf",
      imageSrc: "/dpastriescorner/src/assets/prods/ccl.jpg",
      images: [
        { src: "/dpastriescorner/src/assets/prods/ccl.jpg", alt: "Buko pie." },
        {
          src: "/dpastriescorner/src/assets/prods/cclccf.jpg",
          alt: "Buko pie.",
        },
        { src: "/dpastriescorner/src/assets/prods/ccl.jpg", alt: "Buko pie." },
        {
          src: "/dpastriescorner/src/assets/prods/cclccf.jpg",
          alt: "Buko pie.",
        },
      ],
      imageAlt: "Carrot cake loaf.",
      description: "Moist carrot cake in loaf form.",
      details:
        "Our Carrot Cake Loaf is moist and spiced, topped with cream cheese frosting.",
      highlights: ["Moist and spiced", "Topped with cream cheese frosting"],
      flavors: [
        {
          id: 1,
          name: "Plain",
          price: "₱170",
          inStock: !0,
          src: "/dpastriescorner/src/assets/prods/ccl.jpg",
        },
        {
          id: 2,
          name: "w/ Cream Cheese Frosting",
          price: "₱220",
          inStock: !0,
          src: "/dpastriescorner/src/assets/prods/cclccf.jpg",
        },
      ],
      basePrice: "₱170",
      category: "Loaves",
    },
    {
      id: 5,
      name: "Banana Cake Loaf",
      imageSrc: "/dpastriescorner/src/assets/prods/bcl.jpg",
      images: [
        { src: "/dpastriescorner/src/assets/prods/bcl.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/bcl.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/bcl.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/bcl.jpg", alt: "Buko pie." },
      ],
      imageAlt: "Banana cake loaf.",
      description: "Moist banana cake in loaf form.",
      details:
        "Our Banana Cake Loaf is moist and flavorful, made with ripe bananas.",
      highlights: ["Moist banana cake", "Flavorful"],
      flavors: [
        {
          id: 1,
          name: "Plain",
          price: "₱150",
          src: "/dpastriescorner/src/assets/prods/bcl.jpg",
          inStock: !0,
        },
        {
          id: 2,
          name: "w/ Streusel",
          price: "₱180",
          src: "/dpastriescorner/src/assets/prods/bcls.jpg",
          inStock: !0,
        },
        {
          id: 3,
          name: "w/ Chocolate Chips",
          price: "₱180",
          src: "/dpastriescorner/src/assets/prods/bclcc.jpg",
          inStock: !0,
        },
      ],
      basePrice: "₱150",
      category: "Loaves",
    },
    {
      id: 6,
      name: "Strawberry Cake Loaf",
      imageSrc: "/dpastriescorner/src/assets/prods/scl.jpg",
      images: [
        { src: "/dpastriescorner/src/assets/prods/scl.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/scl.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/scl.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/scl.jpg", alt: "Buko pie." },
      ],
      imageAlt: "Strawberry cake loaf.",
      description: "Moist strawberry cake in loaf form.",
      details:
        "Our Strawberry Cake Loaf is moist and infused with real strawberries.",
      highlights: ["Moist strawberry cake", "Infused with real strawberries"],
      flavors: [
        {
          id: 1,
          name: "Plain",
          price: "₱170",
          src: "/dpastriescorner/src/assets/prods/scl.jpg",
          inStock: !0,
        },
        {
          id: 2,
          name: "w/ Whipped Frosting",
          price: "₱200",
          src: "/dpastriescorner/src/assets/prods/scl.jpg",
          inStock: !0,
        },
        {
          id: 3,
          name: "w/ Chocolate Chips",
          price: "₱190",
          src: "/dpastriescorner/src/assets/prods/scl.jpg",
          inStock: !0,
        },
      ],
      basePrice: "₱170",
      category: "Loaves",
    },
    {
      id: 7,
      name: "Vanilla Cake Loaf",
      imageSrc: "/dpastriescorner/src/assets/prods/vcl.jpg",
      images: [
        { src: "/dpastriescorner/src/assets/prods/vcl.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/vcl.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/vcl.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/vcl.jpg", alt: "Buko pie." },
      ],
      imageAlt: "Vanilla cake loaf.",
      description: "Classic moist vanilla cake in loaf form.",
      details:
        "Our Vanilla Cake Loaf is a classic favorite, moist and aromatic.",
      highlights: ["Classic vanilla flavor", "Moist and aromatic"],
      flavors: [
        {
          id: 1,
          name: "Plain",
          price: "₱150",
          src: "/dpastriescorner/src/assets/prods/vcl.jpg",
          inStock: !0,
        },
        {
          id: 2,
          name: "w/ Whipped Frosting",
          price: "₱180",
          src: "/dpastriescorner/src/assets/prods/vcl.jpg",
          inStock: !0,
        },
      ],
      basePrice: "₱150",
      category: "Loaves",
    },
    {
      id: 8,
      name: "Mocha Cake Loaf",
      imageSrc: "/dpastriescorner/src/assets/prods/mcl.jpg",
      images: [
        { src: "/dpastriescorner/src/assets/prods/mcl.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/mcl.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/mcl.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/mcl.jpg", alt: "Buko pie." },
      ],
      imageAlt: "Mocha cake loaf.",
      description: "Moist mocha-flavored cake in loaf form.",
      details:
        "Our Mocha Cake Loaf is rich in mocha flavor, perfect with coffee.",
      highlights: ["Rich mocha flavor", "Moist texture"],
      flavors: [
        {
          id: 1,
          name: "Plain",
          price: "₱150",
          src: "/dpastriescorner/src/assets/prods/mcl.jpg",
          inStock: !0,
        },
        {
          id: 2,
          name: "w/ Whipped Frosting",
          price: "₱180",
          src: "/dpastriescorner/src/assets/prods/mcl.jpg",
          inStock: !0,
        },
      ],
      basePrice: "₱150",
      category: "Loaves",
    },
    {
      id: 9,
      name: "Ube Cake Loaf",
      imageSrc: "/dpastriescorner/src/assets/prods/ucl.jpg",
      images: [
        { src: "/dpastriescorner/src/assets/prods/ucl.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/ucl.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/ucl.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/ucl.jpg", alt: "Buko pie." },
      ],
      imageAlt: "Ube cake loaf.",
      description: "Moist purple yam cake in loaf form.",
      details:
        "Our Ube Cake Loaf is made with real ube (purple yam), moist and delicious.",
      highlights: ["Made with real ube (purple yam)", "Moist and delicious"],
      flavors: [
        {
          id: 1,
          name: "Plain",
          price: "₱160",
          src: "/dpastriescorner/src/assets/prods/ucl.jpg",
          inStock: !0,
        },
        {
          id: 2,
          name: "w/ Whipped Frosting",
          price: "₱190",
          src: "/dpastriescorner/src/assets/prods/ucl.jpg",
          inStock: !0,
        },
      ],
      basePrice: "₱160",
      category: "Loaves",
    },
    {
      id: 10,
      name: "Chocolate Chip Cookies",
      imageSrc: "/dpastriescorner/src/assets/prods/ccc.jpg",
      images: [
        { src: "/dpastriescorner/src/assets/prods/ccc.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/ccc.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/ccc.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/ccc.jpg", alt: "Buko pie." },
      ],
      imageAlt: "Chocolate chip cookies.",
      description: "Delicious chocolate chip cookies in various sizes.",
      details:
        "Our Chocolate Chip Cookies are packed with chocolate chips, available in different pack sizes.",
      highlights: ["Packed with chocolate chips"],
      flavors: [
        {
          id: 1,
          name: "Palm Size Box 6pcs",
          price: "₱250",
          src: "/dpastriescorner/src/assets/prods/ccc.jpg",
          inStock: !0,
        },
        {
          id: 2,
          name: "Palm Size Box 12pcs",
          price: "₱480",
          src: "/dpastriescorner/src/assets/prods/ccc.jpg",
          inStock: !0,
        },
        {
          id: 3,
          name: "Small Size Box 20pcs",
          price: "₱300",
          src: "/dpastriescorner/src/assets/prods/ccc.jpg",
          inStock: !0,
        },
        {
          id: 4,
          name: "Palm Size 1pc",
          price: "₱40",
          src: "/dpastriescorner/src/assets/prods/ccc.jpg",
          inStock: !0,
        },
        {
          id: 5,
          name: "Small Size 3pcs",
          price: "₱38",
          src: "/dpastriescorner/src/assets/prods/ccc.jpg",
          inStock: !0,
        },
      ],
      basePrice: "₱38",
      category: "Cookies",
    },
    {
      id: 11,
      name: "Strawberry Cookies",
      imageSrc: "/dpastriescorner/src/assets/prods/sc.jpg",
      images: [
        { src: "/dpastriescorner/src/assets/prods/sc.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/sc.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/sc.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/sc.jpg", alt: "Buko pie." },
      ],
      imageAlt: "Strawberry cookies.",
      description:
        "Delicious strawberry cookies with real strawberry preserves.",
      details:
        "Our Strawberry Cookies are made with real DPC (Double Purpose Cream) strawberry preserves, available in various pack sizes.",
      highlights: ["Made with real DPC strawberry preserves"],
      flavors: [
        {
          id: 1,
          name: "Palm Size Box 6pcs",
          price: "₱240",
          src: "/dpastriescorner/src/assets/prods/sc.jpg",
          inStock: !0,
        },
        {
          id: 2,
          name: "Palm Size Box 12pcs",
          price: "₱460",
          src: "/dpastriescorner/src/assets/prods/sc.jpg",
          inStock: !0,
        },
        {
          id: 3,
          name: "Small Size Box 20pcs",
          price: "₱320",
          src: "/dpastriescorner/src/assets/prods/sc.jpg",
          inStock: !0,
        },
        {
          id: 4,
          name: "Palm Size 1pc",
          price: "₱42",
          src: "/dpastriescorner/src/assets/prods/sc.jpg",
          inStock: !0,
        },
        {
          id: 5,
          name: "Small Size 3pcs",
          price: "₱40",
          src: "/dpastriescorner/src/assets/prods/sc.jpg",
          inStock: !0,
        },
      ],
      basePrice: "₱40",
      category: "Cookies",
    },
    {
      id: 12,
      name: "Assorted Cookies",
      imageSrc: "/dpastriescorner/src/assets/prods/ac.jpg",
      images: [
        { src: "/dpastriescorner/src/assets/prods/ac.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/ac.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/ac.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/ac.jpg", alt: "Buko pie." },
      ],
      imageAlt: "Assorted cookies.",
      description: "Assorted cookies in strawberry and chocolate flavors.",
      details:
        "Our Assorted Cookies feature a mix of strawberry and chocolate flavors, available in various pack sizes.",
      highlights: ["Assorted flavors"],
      flavors: [
        {
          id: 1,
          name: "Strawberry and Chocolate Palm Size 6pcs",
          price: "₱280",
          src: "/dpastriescorner/src/assets/prods/ac.jpg",
          inStock: !0,
        },
        {
          id: 2,
          name: "Strawberry and Chocolate Palm Size 12pcs",
          price: "₱540",
          src: "/dpastriescorner/src/assets/prods/ac.jpg",
          inStock: !0,
        },
        {
          id: 3,
          name: "Strawberry and Chocolate Small Size 20pcs",
          price: "₱300",
          src: "/dpastriescorner/src/assets/prods/ac.jpg",
          inStock: !0,
        },
      ],
      basePrice: "₱280",
      category: "Cookies",
    },
    {
      id: 13,
      name: "Mini Cake",
      imageSrc: "/dpastriescorner/src/assets/prods/mc.jpg",
      images: [
        { src: "/dpastriescorner/src/assets/prods/mc.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/mc.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/mc.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/mc.jpg", alt: "Buko pie." },
      ],
      imageAlt: "Mini cake.",
      description: "Mini cake in a box and board format.",
      details:
        "Our Mini Cake is presented in a box and board format, perfect for individual enjoyment or small gatherings.",
      highlights: ["Presented in a box and board format"],
      flavors: [
        {
          id: 1,
          name: "4x3 on box and board",
          price: "₱300",
          src: "/dpastriescorner/src/assets/prods/mc.jpg",
          inStock: !0,
        },
      ],
      basePrice: "₱300",
      category: "Cakes",
    },
    {
      id: 14,
      name: "Bento Cake",
      imageSrc: "/dpastriescorner/src/assets/prods/bc.jpg",
      images: [
        { src: "/dpastriescorner/src/assets/prods/bc.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/bc.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/bc.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/bc.jpg", alt: "Buko pie." },
      ],
      imageAlt: "Bento cake.",
      description: "Cake in a bento box format with liner.",
      details:
        "Our Bento Cake is presented in a bento box format with a liner, perfect for gifts and personal enjoyment.",
      highlights: ["Presented in a bento box format with liner"],
      flavors: [
        {
          id: 1,
          name: "4x2 on bento box w/ liner",
          price: "₱260",
          src: "/dpastriescorner/src/assets/prods/bc.jpg",
          inStock: !0,
        },
      ],
      basePrice: "₱260",
      category: "Cakes",
    },
    {
      id: 15,
      name: "Cake Balls",
      imageSrc: "/dpastriescorner/src/assets/prods/ckb.jpg",
      images: [
        { src: "/dpastriescorner/src/assets/prods/ckb.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/ckb.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/ckb.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/ckb.jpg", alt: "Buko pie." },
      ],
      imageAlt: "Cake balls.",
      description: "Delicious cake balls in various pack sizes.",
      details:
        "Our Cake Balls are soft and moist, available in different pack sizes for sharing or personal enjoyment.",
      highlights: ["Soft and moist"],
      flavors: [
        {
          id: 1,
          name: "Pack of 6",
          price: "₱150",
          src: "/dpastriescorner/src/assets/prods/ckb.jpg",
          inStock: !0,
        },
        {
          id: 2,
          name: "Pack of 12",
          price: "₱280",
          src: "/dpastriescorner/src/assets/prods/ckb.jpg",
          inStock: !0,
        },
      ],
      basePrice: "₱150",
      category: "Cakes",
    },
    {
      id: 16,
      name: "Cupcakes",
      imageSrc: "/dpastriescorner/src/assets/prods/scp.jpg",
      images: [
        { src: "/dpastriescorner/src/assets/prods/cc.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/scp.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/mcp.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/vc.jpg", alt: "Buko pie." },
      ],
      imageAlt: "Cupcakes.",
      description:
        "Classic cupcakes in chocolate, vanilla, strawberry, or mocha flavors.",
      details:
        "Our Cupcakes are classic favorites available in chocolate, vanilla, strawberry, or mocha flavors.",
      highlights: ["Classic cupcakes"],
      flavors: [
        {
          id: 1,
          name: "Chocolate Solo Box w/ Handle",
          price: "₱65",
          src: "/dpastriescorner/src/assets/prods/cc.jpg",
          inStock: !0,
        },
        {
          id: 2,
          name: "Chocolate Box of 6",
          price: "₱250",
          src: "/dpastriescorner/src/assets/prods/cc.jpg",
          inStock: !0,
        },
        {
          id: 3,
          name: "Chocolate Box of 12",
          price: "₱480",
          src: "/dpastriescorner/src/assets/prods/cc.jpg",
          inStock: !0,
        },
        {
          id: 4,
          name: "Vanilla Solo Box w/ Handle",
          price: "₱65",
          src: "/dpastriescorner/src/assets/prods/vc.jpg",
          inStock: !0,
        },
        {
          id: 5,
          name: "Vanilla Box of 6",
          price: "₱250",
          src: "/dpastriescorner/src/assets/prods/vc.jpg",
          inStock: !0,
        },
        {
          id: 6,
          name: "Vanilla Box of 12",
          price: "₱480",
          src: "/dpastriescorner/src/assets/prods/vc.jpg",
          inStock: !0,
        },
        {
          id: 7,
          name: "Strawberry Solo Box w/ Handle",
          price: "₱65",
          src: "/dpastriescorner/src/assets/prods/scp.jpg",
          inStock: !0,
        },
        {
          id: 8,
          name: "Strawberry Box of 6",
          price: "₱250",
          src: "/dpastriescorner/src/assets/prods/scp.jpg",
          inStock: !0,
        },
        {
          id: 9,
          name: "Strawberry Box of 12",
          price: "₱480",
          src: "/dpastriescorner/src/assets/prods/scp.jpg",
          inStock: !0,
        },
        {
          id: 10,
          name: "Mocha Solo Box w/ Handle",
          price: "₱65",
          src: "/dpastriescorner/src/assets/prods/mcp.jpg",
          inStock: !0,
        },
        {
          id: 11,
          name: "Mocha Box of 6",
          price: "₱250",
          src: "/dpastriescorner/src/assets/prods/mcp.jpg",
          inStock: !0,
        },
        {
          id: 12,
          name: "Mocha Box of 12",
          price: "₱480",
          src: "/dpastriescorner/src/assets/prods/mcp.jpg",
          inStock: !0,
        },
      ],
      basePrice: "₱65",
      category: "Cakes",
    },
    {
      id: 17,
      name: "Assorted Cupcakes",
      imageSrc: "/dpastriescorner/src/assets/prods/acp.jpg",
      images: [
        { src: "/dpastriescorner/src/assets/prods/acp.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/acp.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/acp.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/acp.jpg", alt: "Buko pie." },
      ],
      imageAlt: "Assorted cupcakes.",
      description: "Assorted cupcakes in 2-3 flavors.",
      details: "Our Assorted Cupcakes feature a mix of 2-3 flavors per box.",
      highlights: ["Mix of flavors", "Ideal for parties and events"],
      flavors: [
        {
          id: 1,
          name: "Box of 6",
          price: "₱280",
          src: "/dpastriescorner/src/assets/prods/acp.jpg",
          inStock: !0,
        },
        {
          id: 2,
          name: "Box of 12",
          price: "₱540",
          src: "/dpastriescorner/src/assets/prods/acp.jpg",
          inStock: !0,
        },
      ],
      basePrice: "₱280",
      category: "Cakes",
    },
    {
      id: 18,
      name: "Regular Cake",
      imageSrc: "/dpastriescorner/src/assets/prods/rc.jpg",
      images: [
        { src: "/dpastriescorner/src/assets/prods/rc.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/rc.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/rc.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/rc.jpg", alt: "Buko pie." },
      ],
      imageAlt: "Regular cake.",
      description: "Classic round cakes in different sizes.",
      details:
        "Our Regular Cakes are classic round cakes available in different sizes.",
      highlights: ["Classic round cakes", "Available in different sizes"],
      flavors: [
        {
          id: 1,
          name: "6x3 Round",
          price: "₱650",
          src: "/dpastriescorner/src/assets/prods/rc.jpg",
          inStock: !0,
        },
        {
          id: 2,
          name: "8x3 Round",
          price: "₱1000",
          src: "/dpastriescorner/src/assets/prods/rc.jpg",
          inStock: !0,
        },
      ],
      basePrice: "₱650",
      category: "Cakes",
    },
    {
      id: 19,
      name: "Number Cake",
      imageSrc: "/dpastriescorner/src/assets/prods/nc.jpg",
      images: [
        { src: "/dpastriescorner/src/assets/prods/nc.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/nc.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/nc.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/nc.jpg", alt: "Buko pie." },
      ],
      imageAlt: "Number cake.",
      description: "Number-shaped cakes for celebrations.",
      details:
        "Our Number Cakes are shaped like numbers, perfect for birthdays and anniversaries.",
      highlights: ["Number-shaped cakes", "Ideal for celebrations"],
      flavors: [
        {
          id: 1,
          name: "6x2, 1 number",
          price: "₱650",
          src: "/dpastriescorner/src/assets/prods/nc.jpg",
          inStock: !0,
        },
        {
          id: 2,
          name: "6x2, 2 numbers",
          price: "₱1200",
          src: "/dpastriescorner/src/assets/prods/nc.jpg",
          inStock: !0,
        },
        {
          id: 3,
          name: "9x2, 1 number",
          price: "₱950",
          src: "/dpastriescorner/src/assets/prods/nc.jpg",
          inStock: !0,
        },
        {
          id: 4,
          name: "9x2, 2 numbers",
          price: "₱1800",
          src: "/dpastriescorner/src/assets/prods/nc.jpg",
          inStock: !0,
        },
      ],
      basePrice: "₱650",
      category: "Cakes",
    },
    {
      id: 20,
      name: "Cheesecake Cups",
      imageSrc: "/dpastriescorner/src/assets/prods/cccp.jpg",
      images: [
        { src: "/dpastriescorner/src/assets/prods/cccp.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/cccp.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/cccp.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/cccp.jpg", alt: "Buko pie." },
      ],
      imageAlt: "Cheesecake cups.",
      description: "Individual cups of cheesecake in various flavors.",
      details:
        "Our Cheesecake Cups are individual servings of cheesecake, available in different flavors and pack sizes.",
      highlights: ["Individual servings", "Available in different flavors"],
      flavors: [
        {
          id: 1,
          name: "Classic Box of 6",
          price: "₱300",
          src: "/dpastriescorner/src/assets/prods/cccp.jpg",
          inStock: !0,
        },
        {
          id: 2,
          name: "Classic Box of 12",
          price: "₱580",
          src: "/dpastriescorner/src/assets/prods/cccp.jpg",
          inStock: !0,
        },
        {
          id: 3,
          name: "Strawberry Box of 6",
          price: "₱350",
          src: "/dpastriescorner/src/assets/prods/sccp.jpg",
          inStock: !0,
        },
        {
          id: 4,
          name: "Strawberry Box of 12",
          price: "₱680",
          src: "/dpastriescorner/src/assets/prods/sccp.jpg",
          inStock: !0,
        },
        {
          id: 5,
          name: "Blueberry Box of 6",
          price: "₱350",
          src: "/dpastriescorner/src/assets/prods/bcc.jpg",
          inStock: !0,
        },
        {
          id: 6,
          name: "Blueberry Box of 12",
          price: "₱680",
          src: "/dpastriescorner/src/assets/prods/bcc.jpg",
          inStock: !0,
        },
      ],
      basePrice: "₱300",
      category: "Cakes",
    },
    {
      id: 21,
      name: "Bento Cheesecakes",
      imageSrc: "/dpastriescorner/src/assets/prods/bbc.jpg",
      images: [
        { src: "/dpastriescorner/src/assets/prods/cbc.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/bbc.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/sbc.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/bbc.jpg", alt: "Buko pie." },
      ],
      imageAlt: "Bento cheesecakes.",
      description: "Cheesecakes in a bento box format.",
      details:
        "Our Bento Cheesecakes are presented in a bento box format, perfect for gifts and personal enjoyment.",
      highlights: ["Presented in a bento box", "Ideal for gifts"],
      flavors: [
        {
          id: 1,
          name: "Classic Bento Cheesecake 4x2",
          price: "₱350",
          src: "/dpastriescorner/src/assets/prods/cbc.jpg",
          inStock: !0,
        },
        {
          id: 2,
          name: "Strawberry Bento Cheesecake 4x2",
          price: "₱380",
          src: "/dpastriescorner/src/assets/prods/sbc.jpg",
          inStock: !0,
        },
        {
          id: 3,
          name: "Blueberry Bento Cheesecake 4x2",
          price: "₱380",
          src: "/dpastriescorner/src/assets/prods/bbc.jpg",
          inStock: !0,
        },
      ],
      basePrice: "₱350",
      category: "Cakes",
    },
    {
      id: 22,
      name: "Chocolate Crinkles",
      imageSrc: "/dpastriescorner/src/assets/prods/ccr.jpg",
      images: [
        { src: "/dpastriescorner/src/assets/prods/ccr1.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/ccr2.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/ccr3.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/ccr4.jpg", alt: "Buko pie." },
      ],
      imageAlt: "Crinkles.",
      description: "Chocolate crinkles in a pack.",
      details:
        "Our Chocolate Crinkles are soft and chocolatey, perfect for snacking.",
      highlights: ["Soft and chocolatey", "Perfect for snacking"],
      flavors: [
        {
          name: "Chocolate Pack of 10",
          price: "₱150",
          src: "/dpastriescorner/src/assets/prods/ccr1.jpg",
          inStock: !0,
        },
      ],
      basePrice: "₱150",
      category: "Bites",
    },
    {
      id: 23,
      name: "Chocolate Brownies",
      imageSrc: "/dpastriescorner/src/assets/prods/chb.jpg",
      images: [
        { src: "/dpastriescorner/src/assets/prods/chb.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/chb.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/chb.jpg", alt: "Buko pie." },
        { src: "/dpastriescorner/src/assets/prods/chb.jpg", alt: "Buko pie." },
      ],
      imageAlt: "Brownies.",
      description: "Chocolate brownies in different pack sizes.",
      details:
        "Our Chocolate Brownies are rich and fudgy, available in different pack sizes.",
      highlights: ["Rich and fudgy", "Available in different pack sizes"],
      flavors: [
        {
          id: 1,
          name: "Chocolate Box of 6",
          price: "₱200",
          src: "/dpastriescorner/src/assets/prods/chb.jpg",
          inStock: !0,
        },
        {
          id: 2,
          name: "Chocolate Box of 12",
          price: "₱380",
          src: "/dpastriescorner/src/assets/prods/chb.jpg",
          inStock: !0,
        },
        {
          id: 3,
          name: "Bites Chocolate 12pcs",
          price: "₱120",
          src: "/dpastriescorner/src/assets/prods/cbb.jpg",
          inStock: !0,
        },
        {
          id: 4,
          name: "Bites Chocolate 24pcs",
          price: "₱220",
          src: "/dpastriescorner/src/assets/prods/cbb.jpg",
          inStock: !0,
        },
      ],
      basePrice: "₱120",
      category: "Bites",
    },
    {
      id: 24,
      name: "Cake Tubs",
      imageSrc: "/dpastriescorner/src/assets/prods/mct.jpg",
      images: [
        {
          src: "/dpastriescorner/src/assets/prods/sct.jpg",
          alt: "Cake Tub - Strawberry",
        },
        {
          src: "/dpastriescorner/src/assets/prods/uct.jpg",
          alt: "Cake Tub - Ube",
        },
        {
          src: "/dpastriescorner/src/assets/prods/mct.jpg",
          alt: "Cake Tub - Mango",
        },
        {
          src: "/dpastriescorner/src/assets/prods/cct.jpg",
          alt: "Cake Tub - Chocolate",
        },
      ],
      imageAlt: "Cake Tubs.",
      description: "Cake tubs in 250ml size with various flavors.",
      details: "Our Cake Tubs are perfect for individual servings.",
      highlights: ["Available in tubs"],
      flavors: [
        {
          id: 1,
          name: "Strawberry",
          price: "₱100",
          src: "/dpastriescorner/src/assets/prods/sct.jpg",
          inStock: !0,
        },
        {
          id: 2,
          name: "Ube",
          price: "₱100",
          src: "/dpastriescorner/src/assets/prods/uct.jpg",
          inStock: !0,
        },
        {
          id: 3,
          name: "Mango",
          price: "₱100",
          src: "/dpastriescorner/src/assets/prods/mct.jpg",
          inStock: !0,
        },
        {
          id: 4,
          name: "Chocolate",
          price: "₱100",
          src: "/dpastriescorner/src/assets/prods/cct.jpg",
          inStock: !0,
        },
      ],
      basePrice: "₱100",
      category: "Tubs",
    },
    {
      id: 25,
      name: "Cake Cups",
      imageSrc: "/dpastriescorner/src/assets/prods/scc.jpg",
      images: [
        {
          src: "/dpastriescorner/src/assets/prods/scc.jpg",
          alt: "Cake Cup - Strawberry",
        },
        {
          src: "/dpastriescorner/src/assets/prods/ucc.jpg",
          alt: "Cake Cup - Ube",
        },
        {
          src: "/dpastriescorner/src/assets/prods/mcc.jpg",
          alt: "Cake Cup - Mango",
        },
        {
          src: "/dpastriescorner/src/assets/prods/chcc.jpg",
          alt: "Cake Cup - Chocolate",
        },
      ],
      imageAlt: "Cake Cups.",
      description: "Cake cups (S) with various flavors.",
      details: "Our Cake Cups are perfect for a small, delicious treat.",
      highlights: ["Available in cups (S)"],
      flavors: [
        {
          id: 1,
          name: "Strawberry",
          price: "₱35",
          src: "/dpastriescorner/src/assets/prods/scc.jpg",
          inStock: !0,
        },
        {
          id: 2,
          name: "Ube",
          price: "₱35",
          src: "/dpastriescorner/src/assets/prods/ucc.jpg",
          inStock: !0,
        },
        {
          id: 3,
          name: "Mango",
          price: "₱35",
          src: "/dpastriescorner/src/assets/prods/mcc.jpg",
          inStock: !0,
        },
        {
          id: 4,
          name: "Chocolate",
          price: "₱35",
          src: "/dpastriescorner/src/assets/prods/chcc.jpg",
          inStock: !0,
        },
      ],
      basePrice: "₱35",
      category: "Cups",
    },
    {
      id: 26,
      name: "Tiered Cakes",
      imageSrc: "/dpastriescorner/src/assets/prods/tc.jpg",
      images: [
        {
          src: "/dpastriescorner/src/assets/prods/tc.jpg",
          alt: "Tiered Cake.",
        },
        {
          src: "/dpastriescorner/src/assets/prods/tc.jpg",
          alt: "Tiered Cake.",
        },
        {
          src: "/dpastriescorner/src/assets/prods/tc.jpg",
          alt: "Tiered Cake.",
        },
        {
          src: "/dpastriescorner/src/assets/prods/tc.jpg",
          alt: "Tiered Cake.",
        },
      ],
      imageAlt: "Tiered cakes.",
      description: "Tiered cakes with whipped frosting.",
      details:
        "Our Tiered Cakes are available in 2-tier and 3-tier options with whipped frosting.",
      highlights: [
        "Available in 2-tier and 3-tier options",
        "With whipped frosting",
      ],
      flavors: [
        {
          id: 1,
          name: "2 Tier Cake w/ Whipped Frosting",
          price: "₱2500",
          src: "/dpastriescorner/src/assets/prods/tc.jpg",
          inStock: !0,
        },
        {
          id: 2,
          name: "3 Tier Cake w/ Whipped Frosting",
          price: "₱6000",
          src: "/dpastriescorner/src/assets/prods/tc.jpg",
          inStock: !0,
        },
      ],
      basePrice: "₱2500",
      category: "Cakes",
    },
    {
      id: 27,
      name: "Fondant Cakes",
      imageSrc: "/dpastriescorner/src/assets/prods/fc.jpg",
      images: [
        {
          src: "/dpastriescorner/src/assets/prods/fc.jpg",
          alt: "Fondant Cake.",
        },
        {
          src: "/dpastriescorner/src/assets/prods/fc.jpg",
          alt: "Fondant Cake.",
        },
        {
          src: "/dpastriescorner/src/assets/prods/fc.jpg",
          alt: "Fondant Cake.",
        },
        {
          src: "/dpastriescorner/src/assets/prods/fc.jpg",
          alt: "Fondant Cake.",
        },
      ],
      imageAlt: "Fondant cakes.",
      description: "Fondant-covered cakes in different sizes.",
      details:
        "Our Fondant Cakes are covered in fondant icing, available in different sizes.",
      highlights: ["Covered in fondant icing", "Available in different sizes"],
      flavors: [
        {
          id: 1,
          name: "4x3",
          price: "₱500",
          src: "/dpastriescorner/src/assets/prods/fc.jpg",
          inStock: !0,
        },
        {
          id: 2,
          name: "6x3",
          price: "₱1500",
          src: "/dpastriescorner/src/assets/prods/fc.jpg",
          inStock: !0,
        },
        {
          id: 3,
          name: "8x3",
          price: "₱2200",
          src: "/dpastriescorner/src/assets/prods/fc.jpg",
          inStock: !0,
        },
        {
          id: 4,
          name: "10x3",
          price: "₱4000",
          src: "/dpastriescorner/src/assets/prods/fc.jpg",
          inStock: !0,
        },
      ],
      basePrice: "₱500",
      category: "Cakes",
    },
  ],
  Y0 = (e) =>
    e
      ? e
          .split(" ")
          .map((t) => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase())
          .join(" ")
      : "",
  rg = ({ currentCategory: e }) => {
    const { id: t } = ed(),
      r = ds.find((i) => i.id === parseInt(t, 10)),
      n = e ? e.toLowerCase() : r ? r.category.toLowerCase() : "all",
      o = [
        { id: 1, name: "Products", href: "/products" },
        {
          id: 2,
          name: Y0(n === "all" ? "All Products" : n),
          href: `/products/${n}`,
        },
        r && { id: 3, name: Y0(r.name), href: "#" },
      ].filter(Boolean);
    return p.jsx("nav", {
      "aria-label": "Breadcrumb",
      children: p.jsx("ol", {
        role: "list",
        className:
          "mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8",
        children: o.map((i, l) =>
          p.jsx(
            "li",
            {
              className:
                l === o.length - 1
                  ? "text-sm font-medium text-gray-500 hover:text-gray-600"
                  : "",
              children: p.jsx("div", {
                className: "flex items-center",
                children:
                  l < o.length - 1
                    ? p.jsxs(p.Fragment, {
                        children: [
                          p.jsx(de, {
                            to: i.href,
                            className:
                              "mr-2 text-sm font-medium text-gray-900 dark:text-white",
                            children: i.name,
                          }),
                          p.jsx("svg", {
                            fill: "currentColor",
                            width: 16,
                            height: 20,
                            viewBox: "0 0 16 20",
                            "aria-hidden": "true",
                            className: "h-5 w-4 text-gray-300 dark:text-white",
                            children: p.jsx("path", {
                              d: "M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z",
                            }),
                          }),
                        ],
                      })
                    : p.jsx("span", {
                        className: "font-medium text-gray-500",
                        children: i.name,
                      }),
              }),
            },
            i.id
          )
        ),
      }),
    });
  },
  t6 = ["All", "Pies", "Loaves", "Cakes", "Bites", "Tubs", "Cups"],
  r6 = (e) =>
    e
      .split(" ")
      .map((t) => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase())
      .join(" "),
  G0 = () => {
    const { category: e } = ed(),
      t = qc(),
      [r, n] = f.useState("All");
    f.useEffect(() => {
      n(e ? r6(e) : "All");
    }, [e]);
    const o = (l) => {
        const a = l.target.value;
        n(a), t(a === "All" ? "/products" : `/products/${a.toLowerCase()}`);
      },
      i = r === "All" ? ds : ds.filter((l) => l.category === r);
    return p.jsx("div", {
      className: "bg-orange-300 dark:bg-amber-900",
      children: p.jsxs("div", {
        className: "py-6 container mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          p.jsxs("div", {
            className:
              "flex flex-col sm:flex-row justify-between items-center mb-4",
            children: [
              p.jsx("div", {
                className: "mb-4 sm:mb-0",
                children: p.jsx(rg, { currentCategory: r }),
              }),
              p.jsx("div", {
                className: "flex",
                children: p.jsx("select", {
                  className: "px-4 py-2 rounded bg-gray-200 text-gray-700",
                  value: r,
                  onChange: o,
                  children: t6.map((l) =>
                    p.jsx("option", { value: l, children: l }, l)
                  ),
                }),
              }),
            ],
          }),
          p.jsx("div", {
            className:
              "grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8",
            children: i.map((l) =>
              p.jsxs(
                de,
                {
                  to: `/products/${l.category.toLowerCase()}/${l.id}`,
                  className: "group",
                  children: [
                    p.jsx("div", {
                      className:
                        "aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7",
                      children: p.jsx("img", {
                        alt: l.imageAlt,
                        src: l.imageSrc,
                        className:
                          "h-full w-full object-cover object-center group-hover:opacity-75",
                      }),
                    }),
                    p.jsx("h3", {
                      className:
                        "mt-4 text-sm text-gray-700 dark:text-gray-200",
                      children: l.name,
                    }),
                    p.jsx("p", {
                      className:
                        "mt-1 text-lg font-medium text-gray-900 dark:text-gray-200",
                      children: l.basePrice,
                    }),
                  ],
                },
                l.id
              )
            ),
          }),
        ],
      }),
    });
  };
function n6({ title: e, titleId: t, ...r }, n) {
  return f.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: n,
        "aria-labelledby": t,
      },
      r
    ),
    e ? f.createElement("title", { id: t }, e) : null,
    f.createElement("path", {
      fillRule: "evenodd",
      d: "M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z",
      clipRule: "evenodd",
    })
  );
}
const o6 = f.forwardRef(n6),
  pl = { average: 4, totalCount: 1624, href: "#reviews" };
function X0(...e) {
  return e.filter(Boolean).join(" ");
}
const i6 = () => {
    const { id: e } = ed(),
      { orders: t, setOrders: r } = $d((d) => d),
      n = ds.find((d) => d.id === parseInt(e, 10)),
      [o, i] = f.useState(n.flavors[0]),
      [l, a] = f.useState(1),
      s = () => {
        a((d) => d + 1);
      },
      u = () => {
        a((d) => (d > 1 ? d - 1 : 1));
      },
      c = (d, m, h, y) => {
        d.preventDefault();
        const w = [...t],
          k = w.findIndex((g) => g.id === m && g.flavorId === o.id),
          v = {
            id: m,
            name: h,
            imageAlt: y,
            flavorId: o.id,
            flavorName: o.name,
            flavorImage: o.src,
            flavorPrice: o.price,
            quantity: l,
          };
        k > -1 ? (w[k].quantity = w[k].quantity + l) : w.push(v),
          r(w),
          xe.success("Order(s) added successfully");
      };
    return p.jsx("div", {
      className: "bg-orange-300 dark:bg-amber-900",
      children: p.jsxs("div", {
        className: "pt-6",
        children: [
          p.jsx(rg, {}),
          p.jsxs("div", {
            className:
              "mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8",
            children: [
              p.jsx("div", {
                className:
                  "aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block",
                children: p.jsx("img", {
                  alt: n.images[0].alt,
                  src: n.images[0].src,
                  className: "h-full w-full object-cover object-center",
                }),
              }),
              p.jsxs("div", {
                className: "hidden lg:grid lg:grid-cols-1 lg:gap-y-8",
                children: [
                  p.jsx("div", {
                    className:
                      "aspect-h-2 aspect-w-3 overflow-hidden rounded-lg",
                    children: p.jsx("img", {
                      alt: n.images[1].alt,
                      src: n.images[1].src,
                      className: "h-full w-full object-cover object-center",
                    }),
                  }),
                  p.jsx("div", {
                    className:
                      "aspect-h-2 aspect-w-3 overflow-hidden rounded-lg",
                    children: p.jsx("img", {
                      alt: n.images[2].alt,
                      src: n.images[2].src,
                      className: "h-full w-full object-cover object-center",
                    }),
                  }),
                ],
              }),
              p.jsx("div", {
                className:
                  "aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg",
                children: p.jsx("img", {
                  alt: n.images[3].alt,
                  src: n.images[3].src,
                  className: "h-full w-full object-cover object-center",
                }),
              }),
            ],
          }),
          p.jsxs("div", {
            className:
              "mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16",
            children: [
              p.jsx("div", {
                className:
                  "lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8",
                children: p.jsx("h1", {
                  className:
                    "text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl",
                  children: n.name,
                }),
              }),
              p.jsxs("div", {
                className: "mt-4 lg:row-span-3 lg:mt-0",
                children: [
                  p.jsx("h2", {
                    className: "sr-only",
                    children: "Product information",
                  }),
                  p.jsx("p", {
                    className:
                      "text-3xl tracking-tight text-gray-900 dark:text-white",
                    children: o.price,
                  }),
                  p.jsxs("div", {
                    className: "mt-6",
                    children: [
                      p.jsx("h3", {
                        className: "sr-only",
                        children: "Reviews",
                      }),
                      p.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          p.jsx("div", {
                            className: "flex items-center",
                            children: [0, 1, 2, 3, 4].map((d) =>
                              p.jsx(
                                o6,
                                {
                                  "aria-hidden": "true",
                                  className: X0(
                                    pl.average > d
                                      ? "text-gray-900 dark:text-white"
                                      : "text-gray-200 dark:text-gray-700",
                                    "h-5 w-5 flex-shrink-0"
                                  ),
                                },
                                d
                              )
                            ),
                          }),
                          p.jsxs("p", {
                            className: "sr-only",
                            children: [pl.average, " out of 5 stars"],
                          }),
                          p.jsxs(de, {
                            to: pl.href,
                            className:
                              "ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500",
                            children: [pl.totalCount, " reviews"],
                          }),
                        ],
                      }),
                    ],
                  }),
                  p.jsxs("form", {
                    className: "mt-10",
                    children: [
                      p.jsxs("div", {
                        className: "mt-10",
                        children: [
                          p.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                              p.jsx("h3", {
                                className:
                                  "text-sm font-medium text-gray-900 dark:text-white",
                                children: "Variations",
                              }),
                              p.jsx(de, {
                                to: "/src/assets/prods/price.txt",
                                className:
                                  "text-sm font-medium text-indigo-600 hover:text-indigo-500",
                                children: "Prices Guide",
                              }),
                            ],
                          }),
                          p.jsx("fieldset", {
                            "aria-label": "Choose a size",
                            className: "mt-4",
                            children: p.jsx(Y5, {
                              value: o,
                              onChange: i,
                              className:
                                "grid grid-cols-2 gap-4 sm:grid-cols-5 lg:grid-cols-3",
                              children: n.flavors.map((d) =>
                                p.jsxs(
                                  V1,
                                  {
                                    value: d,
                                    disabled: !d.inStock,
                                    className: X0(
                                      d.inStock
                                        ? "cursor-pointer bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm focus:outline-none focus:ring"
                                        : "cursor-not-allowed bg-gray-50 text-gray-200",
                                      "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:flex-1 sm:py-6"
                                    ),
                                    children: [
                                      p.jsx("span", { children: d.name }),
                                      d.inStock
                                        ? p.jsx("span", {
                                            "aria-hidden": "true",
                                            className:
                                              "pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-focus:border-indigo-500",
                                          })
                                        : p.jsx("span", {
                                            "aria-hidden": "true",
                                            className:
                                              "pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200",
                                            children: p.jsx("svg", {
                                              stroke: "currentColor",
                                              viewBox: "0 0 100 100",
                                              preserveAspectRatio: "none",
                                              className:
                                                "absolute inset-0 h-full w-full stroke-2 text-gray-200",
                                              children: p.jsx("line", {
                                                x1: 0,
                                                x2: 100,
                                                y1: 100,
                                                y2: 0,
                                                vectorEffect:
                                                  "non-scaling-stroke",
                                              }),
                                            }),
                                          }),
                                    ],
                                  },
                                  d.name
                                )
                              ),
                            }),
                          }),
                        ],
                      }),
                      p.jsxs("div", {
                        className: "mt-4 flex items-center",
                        children: [
                          p.jsx("button", {
                            type: "button",
                            onClick: u,
                            className:
                              "px-3 py-2 border border-gray-300 rounded-l-md text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700",
                            children: "-",
                          }),
                          p.jsx("span", {
                            className:
                              "px-4 py-2 border-t border-b border-gray-300 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900",
                            children: l,
                          }),
                          p.jsx("button", {
                            type: "button",
                            onClick: s,
                            className:
                              "px-3 py-2 border border-gray-300 rounded-r-md text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700",
                            children: "+",
                          }),
                        ],
                      }),
                      p.jsx("button", {
                        type: "submit",
                        className:
                          "mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                        onClick: (d) => c(d, n.id, n.name, n.imageAlt),
                        children: "Add to Cart",
                      }),
                    ],
                  }),
                ],
              }),
              p.jsxs("div", {
                className:
                  "py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6",
                children: [
                  p.jsxs("div", {
                    children: [
                      p.jsx("h3", {
                        className: "sr-only",
                        children: "Description",
                      }),
                      p.jsx("div", {
                        className: "space-y-6",
                        children: p.jsx("p", {
                          className: "text-base text-gray-900 dark:text-white",
                          children: n.description,
                        }),
                      }),
                    ],
                  }),
                  p.jsxs("div", {
                    className: "mt-10",
                    children: [
                      p.jsx("h3", {
                        className:
                          "text-sm font-medium text-gray-900 dark:text-white",
                        children: "Highlights",
                      }),
                      p.jsx("div", {
                        className: "mt-4",
                        children: p.jsx("ul", {
                          role: "list",
                          className: "list-disc space-y-2 pl-4 text-sm",
                          children: n.highlights.map((d) =>
                            p.jsx(
                              "li",
                              {
                                className: "text-gray-400 dark:text-white",
                                children: p.jsx("span", {
                                  className: "text-gray-600 dark:text-gray-300",
                                  children: d,
                                }),
                              },
                              d
                            )
                          ),
                        }),
                      }),
                    ],
                  }),
                  p.jsxs("div", {
                    className: "mt-10",
                    children: [
                      p.jsx("h2", {
                        className:
                          "text-sm font-medium text-gray-900 dark:text-white",
                        children: "Details",
                      }),
                      p.jsx("div", {
                        className: "mt-4 space-y-6",
                        children: p.jsx("p", {
                          className: "text-sm text-gray-600 dark:text-gray-300",
                          children: n.details,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  l6 = () =>
    p.jsx("section", {
      className: "bg-orange-300 dark:bg-amber-900",
      children: p.jsxs("div", {
        className: "container px-6 py-12 mx-auto",
        children: [
          p.jsxs("div", {
            children: [
              p.jsx("p", {
                className: "font-medium text-blue-500 dark:text-blue-400",
                children: "Contact us",
              }),
              p.jsx("h1", {
                className:
                  "mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white",
                children: "Get in touch",
              }),
              p.jsx("p", {
                className: "mt-3 text-gray-700 dark:text-gray-400",
                children: "Our friendly team would love to hear from you.",
              }),
            ],
          }),
          p.jsxs("div", {
            className: "grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3",
            children: [
              p.jsxs("div", {
                className:
                  "grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1",
                children: [
                  p.jsxs("div", {
                    children: [
                      p.jsx("span", {
                        className:
                          "inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800",
                        children: p.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.5",
                          stroke: "currentColor",
                          className: "w-5 h-5",
                          children: p.jsx("path", {
                            d: "M11.666,2.005C6.62,2.17,2.374,6.251,2.025,11.288c-0.369,5.329,3.442,9.832,8.481,10.589V14.65H8.892 c-0.726,0-1.314-0.588-1.314-1.314v0c0-0.726,0.588-1.314,1.314-1.314h1.613v-1.749c0-2.896,1.411-4.167,3.818-4.167 c0.357,0,0.662,0.008,0.921,0.021c0.636,0.031,1.129,0.561,1.129,1.198v0c0,0.663-0.537,1.2-1.2,1.2h-0.442 c-1.022,0-1.379,0.969-1.379,2.061v1.437h1.87c0.591,0,1.043,0.527,0.953,1.111l-0.108,0.701c-0.073,0.47-0.477,0.817-0.953,0.817 h-1.762v7.247C18.235,21.236,22,17.062,22,12C22,6.366,17.341,1.821,11.666,2.005z",
                          }),
                        }),
                      }),
                      p.jsx("h2", {
                        className:
                          "mt-4 text-base font-medium text-gray-800 dark:text-white",
                        children: "Facebook Page",
                      }),
                      p.jsx("p", {
                        className:
                          "mt-2 text-sm text-gray-700 dark:text-gray-400",
                        children: "For Orders and Inquiries.",
                      }),
                      p.jsx("a", {
                        href: "https://www.facebook.com/dpastriescorner",
                        target: "_blank",
                        children: p.jsx("p", {
                          className:
                            "mt-2 text-sm text-blue-700 dark:text-blue-400",
                          children: "https://www.facebook.com/dpastriescorner",
                        }),
                      }),
                    ],
                  }),
                  p.jsxs("div", {
                    children: [
                      p.jsx("span", {
                        className:
                          "inline-block p-3 text-blue-700 rounded-full bg-blue-100/80 dark:bg-gray-800",
                        children: p.jsxs("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.5",
                          stroke: "currentColor",
                          className: "w-5 h-5",
                          children: [
                            p.jsx("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              d: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z",
                            }),
                            p.jsx("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
                            }),
                          ],
                        }),
                      }),
                      p.jsx("h2", {
                        className:
                          "mt-4 text-base font-medium text-gray-800 dark:text-white",
                        children: "Location",
                      }),
                      p.jsx("p", {
                        className:
                          "mt-2 text-sm text-gray-700 dark:text-gray-400",
                        children: "For Pickup and Delivery.",
                      }),
                      p.jsx("p", {
                        className:
                          "mt-2 text-sm text-blue-500 dark:text-blue-400",
                        children: "150 M. Salud Road Noveleta, Cavite 4105 PH",
                      }),
                    ],
                  }),
                  p.jsxs("div", {
                    children: [
                      p.jsx("span", {
                        className:
                          "inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800",
                        children: p.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.5",
                          stroke: "currentColor",
                          className: "w-5 h-5",
                          children: p.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
                          }),
                        }),
                      }),
                      p.jsx("h2", {
                        className:
                          "mt-4 text-base font-medium text-gray-800 dark:text-white",
                        children: "Phone",
                      }),
                      p.jsx("p", {
                        className:
                          "mt-2 text-sm text-gray-700 dark:text-gray-400",
                        children: "Mon-Fri from 8am to 5pm.",
                      }),
                      p.jsx("p", {
                        className:
                          "mt-2 text-sm text-blue-500 dark:text-blue-400",
                        children: "+63 945-798-1968",
                      }),
                    ],
                  }),
                ],
              }),
              p.jsx("div", {
                className:
                  "overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto",
                children: p.jsx("iframe", {
                  width: "100%",
                  height: "100%",
                  frameBorder: "0",
                  title: "map",
                  marginHeight: "0",
                  marginWidth: "0",
                  scrolling: "no",
                  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d966.0204573534444!2d120.8842971285121!3d14.422446197964998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33962d0061ff38cd%3A0xdda7e272132c822a!2sD'%20Pastries%20Corner!5e0!3m2!1sen!2sph!4v1721223479887!5m2!1sen!2sph",
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  s6 = "/dpastriescorner/src/assets/gcash2-C2xiEvaD.svg",
  a6 = "/dpastriescorner/src/assets/lalamove-DOI38VZD.svg",
  u6 =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%2020010904//EN'%20'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3e%3csvg%20version='1.0'%20xmlns='http://www.w3.org/2000/svg'%20width='100.000000pt'%20height='100.000000pt'%20viewBox='0%200%20100.000000%20100.000000'%20preserveAspectRatio='xMidYMid%20meet'%3e%3cg%20transform='translate(0.000000,100.000000)%20scale(0.100000,-0.100000)'%20fill='%23000000'%20stroke='none'%3e%3cpath%20d='M690%20813%20c-8%20-3%20-22%20-12%20-30%20-19%20-8%20-7%20-42%20-14%20-75%20-16%20-45%20-2%20-60%20-7%20-60%20-18%200%20-11%2014%20-16%2056%20-18%20l57%20-3%206%20-37%20c19%20-117%20-2%20-279%20-46%20-350%20-38%20-62%20-109%20-90%20-142%20-56%20-36%2035%20-6%20182%2043%20212%2025%2015%2027%2039%205%2070%20-14%2020%20-23%2022%20-119%2022%20l-104%200%20-3%2068%20-3%2067%20-125%200%20-125%200%20-3%20-104%20c-1%20-58%20-7%20-111%20-13%20-117%20-21%20-25%203%20-34%2092%20-34%20l91%200%20-32%20-27%20c-33%20-27%20-80%20-94%20-80%20-113%200%20-6%2013%20-17%2029%20-23%2023%20-10%2028%20-16%2021%20-27%20-26%20-41%20-3%20-121%2046%20-159%2077%20-60%20198%20-17%20219%2079%20l7%2030%20117%200%20c116%200%20118%200%20129%20-25%206%20-13%2023%20-27%2037%20-31%2014%20-3%2040%20-21%2059%20-40%2038%20-38%2072%20-49%20121%20-40%2070%2013%20125%2090%20112%20156%20-4%2019%20-2%2030%208%2034%2048%2018%20-18%20119%20-90%20138%20-41%2011%20-43%2013%20-49%2059%20-4%2026%20-22%2078%20-41%20116%20-34%2067%20-34%2068%20-15%2089%2026%2026%2026%2085%202%20107%20-18%2016%20-71%2021%20-102%2010z%20m80%20-63%20c0%20-26%20-4%20-30%20-28%20-30%20-16%200%20-37%207%20-48%2015%20-19%2015%20-19%2015%200%2030%2011%208%2032%2015%2048%2015%2024%200%2028%20-4%2028%20-30z%20m-530%20-140%20l0%20-90%20-90%200%20-90%200%200%2090%200%2090%2090%200%2090%200%200%20-90z%20m486%2048%20c38%20-46%2075%20-130%2077%20-178%202%20-40%200%20-42%20-37%20-55%20-48%20-17%20-91%20-58%20-113%20-107%20-13%20-28%20-23%20-38%20-40%20-38%20l-24%200%2030%2038%20c48%2060%2066%20131%2066%20259%200%2062%203%20113%207%20113%203%200%2019%20-15%2034%20-32z%20m-251%20-109%20c13%20-19%20-6%20-24%20-95%20-24%20-89%200%20-108%205%20-95%2024%208%2015%20182%2015%20190%200z%20m-62%20-115%20c-10%20-28%20-14%20-66%20-11%20-100%203%20-34%201%20-54%20-6%20-54%20-6%200%20-68%2016%20-138%2036%20l-127%2037%2014%2028%20c16%2030%2066%2072%20105%2088%2014%205%2060%2010%20102%2010%20l77%201%20-16%20-46z%20m492%20-48%20c18%20-8%2038%20-24%2045%20-35%2012%20-24%2015%20-23%20-67%20-21%20-78%202%20-126%20-20%20-160%20-71%20-14%20-21%20-29%20-36%20-34%20-33%20-14%208%20-11%2052%205%2082%2041%2079%20129%20112%20211%2078z%20m-697%20-121%20c-23%20-52%2031%20-102%2081%20-76%2011%207%2024%2023%2027%2036%204%2016%2013%2025%2025%2025%2037%200%2012%20-73%20-32%20-96%20-34%20-17%20-60%20-18%20-94%20-2%20-61%2028%20-76%20138%20-19%20138%2022%200%2023%20-2%2012%20-25z%20m726%209%20c23%20-61%20-28%20-134%20-94%20-134%20-33%200%20-71%2023%20-86%2051%20-13%2026%20-12%2030%2010%2056%20l24%2028%20-5%20-27%20c-3%20-18%201%20-32%2016%20-47%2026%20-26%2055%20-27%2081%20-1%2022%2022%2025%2042%2010%2071%20-9%2016%20-7%2019%2014%2019%2013%200%2027%20-7%2030%20-16z%20m-658%20-25%20c10%20-17%20-13%20-36%20-27%20-22%20-12%2012%20-4%2033%2011%2033%205%200%2012%20-5%2016%20-11z%20m580%200%20c10%20-17%20-13%20-36%20-27%20-22%20-12%2012%20-4%2033%2011%2033%205%200%2012%20-5%2016%20-11z'/%3e%3c/g%3e%3c/svg%3e",
  Z0 =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%2020010904//EN'%20'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3e%3csvg%20version='1.0'%20xmlns='http://www.w3.org/2000/svg'%20width='96.000000pt'%20height='96.000000pt'%20viewBox='0%200%2096.000000%2096.000000'%20preserveAspectRatio='xMidYMid%20meet'%3e%3cg%20transform='translate(0.000000,96.000000)%20scale(0.100000,-0.100000)'%20fill='%23000000'%20stroke='none'%3e%3cpath%20d='M145%20815%20c-14%20-13%20-25%20-34%20-25%20-47%200%20-15%2055%20-91%20151%20-212%20116%20-145%20148%20-191%20138%20-198%20-45%20-30%20-44%20-30%20-156%2059%20-59%2047%20-114%2091%20-120%2096%20-10%207%20-13%20-27%20-13%20-167%200%20-174%200%20-177%2025%20-201%2021%20-22%2033%20-25%2090%20-25%2036%200%2065%202%2065%205%200%202%20-8%2020%20-17%2040%20-14%2030%20-22%2035%20-50%2035%20l-33%200%200%2075%20c0%2041%203%2075%206%2075%203%200%2032%20-21%2064%20-47%2047%20-39%2066%20-65%20101%20-136%20l43%20-87%20118%200%20117%200%20-6%2033%20c-3%2017%20-18%2071%20-33%20120%20l-28%2087%2049%200%2049%200%200%2040%200%2040%20-90%200%20-89%200%20-141%20175%20c-77%2096%20-140%20177%20-140%20180%200%203%20122%205%20270%205%20l270%200%200%20-280%200%20-280%20-26%200%20c-24%200%20-26%20-3%20-20%20-31%203%20-17%206%20-35%206%20-40%200%20-5%2016%20-9%2035%20-9%2025%200%2044%208%2060%2025%20l25%2024%200%20311%200%20311%20-25%2024%20-24%2025%20-311%200%20-311%200%20-24%20-25z%20m381%20-587%20l23%20-68%20-43%200%20c-41%200%20-43%201%20-68%2053%20l-26%2054%2041%2027%20c30%2019%2043%2023%2046%2014%202%20-7%2014%20-43%2027%20-80z'/%3e%3cpath%20d='M410%20640%20l32%20-40%2079%200%2079%200%200%2040%200%2040%20-111%200%20-111%200%2032%20-40z'/%3e%3c/g%3e%3c/svg%3e",
  c6 =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%2020010904//EN'%20'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3e%3csvg%20version='1.0'%20xmlns='http://www.w3.org/2000/svg'%20width='100.000000pt'%20height='100.000000pt'%20viewBox='0%200%20100.000000%20100.000000'%20preserveAspectRatio='xMidYMid%20meet'%3e%3cg%20transform='translate(0.000000,100.000000)%20scale(0.100000,-0.100000)'%20fill='%23000000'%20stroke='none'%3e%3cpath%20d='M135%20798%20c-3%20-7%20-4%20-150%20-3%20-318%20l3%20-305%20122%20-3%20122%20-3%203%20-37%203%20-37%20260%200%20260%200%200%20150%200%20150%20-47%203%20-48%203%20-2%20202%20-3%20202%20-333%203%20c-262%202%20-334%200%20-337%20-10z%20m647%20-220%20l3%20-203%2048%20-3%2047%20-3%200%20-125%200%20-124%20-234%200%20-235%200%20-3%2037%20-3%2038%20-122%203%20-123%203%200%20289%200%20290%20310%200%20310%200%202%20-202z'/%3e%3cpath%20d='M354%20696%20c-15%20-12%20-17%20-18%20-8%20-33%2010%20-16%2026%20-18%20119%20-18%2093%200%20109%202%20119%2018%209%2015%207%2021%20-8%2033%20-27%2020%20-195%2020%20-222%200z'/%3e%3cpath%20d='M470%20326%20c0%20-8%20-7%20-16%20-15%20-20%20-24%20-9%20-20%20-111%205%20-136%2018%20-18%2033%20-20%20185%20-20%20152%200%20167%202%20185%2020%2025%2025%2029%20127%205%20136%20-8%204%20-15%2012%20-15%2020%200%2011%20-32%2014%20-175%2014%20-143%200%20-175%20-3%20-175%20-14z%20m214%20-32%20c21%20-20%2021%20-78%200%20-98%20-16%20-17%20-51%20-21%20-71%20-8%20-32%2020%20-32%2094%200%20114%2020%2013%2055%209%2071%20-8z%20m-177%20-40%20c7%20-18%20-17%20-38%20-31%20-24%20-11%2011%20-1%2040%2014%2040%206%200%2013%20-7%2017%20-16z%20m320%20-18%20c-4%20-9%20-13%20-13%20-22%20-10%20-18%207%20-20%2031%20-2%2037%2017%206%2031%20-9%2024%20-27z'/%3e%3c/g%3e%3c/svg%3e",
  d6 = [
    { id: "gcash", label: "GCash", icon: s6 },
    { id: "payment-on-delivery", label: "Payment on Delivery", icon: c6 },
  ],
  Ha = [
    {
      id: "lalamove",
      label: "Lalamove",
      subtext: "+₱200 or more",
      deliveryFee: 200,
      subtextTwo: " May vary on your location",
      icon: a6,
    },
    {
      id: "personal-delivery",
      label: "Personal Delivery",
      subtext: "+₱20 or more",
      deliveryFee: 20,
      subtextTwo: "Within Noveleta and agreed location only",
      icon: u6,
    },
    {
      id: "pickup",
      label: "Pickup",
      subtext: "",
      deliveryFee: 0,
      subtextTwo: "Available only from 2:00 PM - 8:00 PM",
      icon: Z0,
    },
    {
      id: "half-way",
      label: "Half-Way",
      subtext: "+₱100 or more",
      deliveryFee: 50,
      subtextTwo: "Location depends on agreement",
      icon: Z0,
    },
  ],
  f6 = () => {
    const {
        orders: e,
        updateOrderQuantity: t,
        removeOrder: r,
      } = $d((k) => ({
        orders: k.orders,
        updateOrderQuantity: k.updateOrderQuantity,
        removeOrder: k.removeOrder,
      })),
      [n, o] = f.useState(""),
      [i, l] = f.useState(""),
      a = f.useMemo(() => {
        let k = 0;
        return (
          e.forEach((v) => {
            const g = v.flavorPrice
              ? parseInt(v.flavorPrice.replace("₱", ""), 10)
              : 0;
            k += g * v.quantity;
          }),
          k
        );
      }, [e]),
      s = Ha.find((k) => k.id === i),
      u = s ? s.deliveryFee : 0,
      c = a + u;
    f.useEffect(() => {
      if (n === "payment-on-delivery" && i === "lalamove") {
        const k = Ha.find((v) => v.id !== "lalamove");
        k && l(k.id);
      }
    });
    const d = (k) => {
        o(k.target.value);
      },
      m = (k) => {
        l(k.target.value);
      },
      h = (k, v, g) => {
        const x = e.find((E) => E.id === k && E.flavorId === v);
        if (x) {
          const E = x.quantity + g;
          E >= 1 && t(k, v, E);
        }
      },
      y = (k, v) => {
        r(k, v);
      },
      w = (k) => {
        k.preventDefault(),
          console.log(`Select Payment Method: ${n}`),
          console.log(`Select Delivery Method: ${i}`);
      };
    return p.jsx("div", {
      className: "bg-orange-300 dark:bg-amber-900",
      children: p.jsxs("div", {
        className: "container mx-auto p-4",
        children: [
          p.jsx("h1", {
            className: "text-2xl font-bold mb-4",
            children: "Checkout",
          }),
          p.jsxs("form", {
            onSubmit: w,
            children: [
              p.jsxs("div", {
                className: "mb-4",
                children: [
                  p.jsx("h2", {
                    className: "text-lg font-semibold mb-2",
                    children: "Order Summary",
                  }),
                  e.map((k) => {
                    const g =
                      (k.flavorPrice
                        ? parseInt(k.flavorPrice.replace("₱", ""), 10)
                        : 0) * k.quantity;
                    return p.jsxs(
                      "div",
                      {
                        className:
                          "flex items-center mb-4 border-b border-gray-200 pb-4",
                        children: [
                          p.jsx("img", {
                            src: k.flavorImage,
                            alt: k.name,
                            className:
                              "h-24 w-24 object-cover object-center rounded-md border border-gray-200",
                          }),
                          p.jsxs("div", {
                            className: "ml-4 flex flex-1 flex-col",
                            children: [
                              p.jsx("p", {
                                className: "text-lg font-semibold",
                                children: k.name,
                              }),
                              p.jsx("p", {
                                className: "text-sm text-gray-500",
                                children: k.flavorName,
                              }),
                              p.jsxs("div", {
                                className: "flex items-center mb-2",
                                children: [
                                  p.jsx("p", {
                                    className: "text-sm text-gray-500 pr-2",
                                    children: "Qty: ",
                                  }),
                                  p.jsx("button", {
                                    type: "button",
                                    onClick: () => h(k.id, k.flavorId, -1),
                                    className:
                                      "px-3 py-1 border border-gray-300 rounded-l-md bg-gray-100 text-gray-700 hover:bg-gray-200",
                                    children: "-",
                                  }),
                                  p.jsx("input", {
                                    type: "text",
                                    value: k.quantity,
                                    readOnly: !0,
                                    className:
                                      "w-12 text-center border-t border-b border-gray-300",
                                  }),
                                  p.jsx("button", {
                                    type: "button",
                                    onClick: () => h(k.id, k.flavorId, 1),
                                    className:
                                      "px-3 py-1 border border-gray-300 rounded-r-md bg-gray-100 text-gray-700 hover:bg-gray-200",
                                    children: "+",
                                  }),
                                ],
                              }),
                              p.jsxs("p", {
                                className: "text-sm text-gray-500",
                                children: ["Price: ", k.flavorPrice],
                              }),
                              p.jsxs("p", {
                                className: "text-sm text-gray-500",
                                children: ["Order Price: ₱", g],
                              }),
                              p.jsx("button", {
                                type: "button",
                                onClick: () => y(k.id, k.flavorId),
                                className:
                                  "font-medium text-indigo-600 hover:text-indigo-500",
                                children: "Remove",
                              }),
                            ],
                          }),
                        ],
                      },
                      `${k.id}-${k.flavorId}`
                    );
                  }),
                  p.jsxs("div", {
                    className: "font-bold mt-4",
                    children: ["Total: ₱", c],
                  }),
                ],
              }),
              p.jsxs("div", {
                className: "mb-4",
                children: [
                  p.jsx("h2", {
                    className: "text-lg font-semibold mb-2",
                    children: "Payment Method",
                  }),
                  p.jsx("div", {
                    className: "grid gap-4 grid-cols-1 md:grid-cols-2",
                    children: d6.map((k) =>
                      p.jsx(
                        "div",
                        {
                          className: `p-4 border rounded-md shadow-md ${
                            n === k.id
                              ? "border-indigo-600 bg-indigo-50"
                              : "border-gray-300"
                          }`,
                          children: p.jsxs("div", {
                            className: "flex items-center",
                            children: [
                              p.jsx("input", {
                                type: "radio",
                                id: k.id,
                                name: "paymentMethod",
                                value: k.id,
                                checked: n === k.id,
                                onChange: d,
                                className: "mr-2",
                              }),
                              p.jsxs("label", {
                                htmlFor: k.id,
                                className: "flex items-center",
                                children: [
                                  p.jsx("img", {
                                    src: k.icon,
                                    alt: k.label,
                                    className: "h-6 w-6",
                                  }),
                                  p.jsx("span", {
                                    className: "ml-2",
                                    children: k.label,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        k.id
                      )
                    ),
                  }),
                ],
              }),
              p.jsxs("div", {
                className: "mb-4",
                children: [
                  p.jsx("h2", {
                    className: "text-lg font-semibold mb-2",
                    children: "Delivery Method",
                  }),
                  p.jsx("div", {
                    className: "grid gap-4 grid-cols-1 md:grid-cols-2",
                    children: Ha.map((k) =>
                      p.jsxs(
                        "div",
                        {
                          className: `p-4 border rounded-md shadow-md ${
                            i === k.id
                              ? "border-indigo-600 bg-indigo-50"
                              : "border-gray-300"
                          }`,
                          children: [
                            p.jsxs("div", {
                              className: "flex items-center",
                              children: [
                                p.jsx("input", {
                                  type: "radio",
                                  id: k.id,
                                  name: "deliveryMethod",
                                  value: k.id,
                                  disabled:
                                    n === "payment-on-delivery" &&
                                    k.id === "lalamove",
                                  checked: i === k.id,
                                  onChange: m,
                                  className: "mr-2",
                                }),
                                p.jsxs("label", {
                                  htmlFor: k.id,
                                  className: "flex items-center",
                                  children: [
                                    p.jsx("img", {
                                      src: k.icon,
                                      alt: k.label,
                                      className: "h-6 w-6",
                                    }),
                                    p.jsx("span", {
                                      className: "ml-2",
                                      children: k.label,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            k.subtext &&
                              p.jsx("p", {
                                className: "text-sm text-gray-500 mt-1",
                                children: k.subtext,
                              }),
                            k.subtextTwo &&
                              p.jsx("p", {
                                className: "text-sm text-gray-500 mt-1",
                                children: k.subtextTwo,
                              }),
                          ],
                        },
                        k.id
                      )
                    ),
                  }),
                ],
              }),
              p.jsx("button", {
                type: "submit",
                className: "bg-indigo-600 text-white px-4 py-2 rounded",
                children: "Place Order",
              }),
            ],
          }),
        ],
      }),
    });
  },
  p6 = () =>
    p.jsxs("div", {
      className: "flex h-screen",
      children: [
        p.jsxs("aside", {
          className: "w-1/4 bg-gray-800 text-white p-4",
          children: [
            p.jsx("h2", {
              className: "text-lg font-semibold mb-4",
              children: "Dashboard",
            }),
            p.jsxs("ul", {
              children: [
                p.jsx("li", {
                  children: p.jsx(de, {
                    to: "/dashboard/orders",
                    className: "block py-2 hover:bg-gray-700",
                    children: "Order History",
                  }),
                }),
                p.jsx("li", {
                  children: p.jsx(de, {
                    to: "/dashboard/profile",
                    className: "block py-2 hover:bg-gray-700",
                    children: "Profile",
                  }),
                }),
                p.jsx("li", {
                  children: p.jsx(de, {
                    to: "/dashboard/addresses",
                    className: "block py-2 hover:bg-gray-700",
                    children: "Addresses",
                  }),
                }),
                p.jsx("li", {
                  children: p.jsx(de, {
                    to: "/dashboard/payment",
                    className: "block py-2 hover:bg-gray-700",
                    children: "Payment Methods",
                  }),
                }),
              ],
            }),
          ],
        }),
        p.jsx("main", { className: "flex-1 p-4", children: p.jsx($h, {}) }),
      ],
    }),
  m6 = () => {
    const [e, t] = f.useState([]);
    return (
      f.useEffect(() => {
        fetch("/api/orders")
          .then((r) => r.json())
          .then((r) => t(r))
          .catch((r) => console.error("Error fetching orders:", r));
      }, []),
      p.jsxs("div", {
        children: [
          p.jsx("h2", {
            className: "text-2xl font-bold mb-4",
            children: "Order History",
          }),
          e.length === 0
            ? p.jsx("p", { children: "No orders found." })
            : p.jsx("ul", {
                children: e.map((r) =>
                  p.jsxs(
                    "li",
                    {
                      className: "border-b py-2",
                      children: [
                        p.jsxs("p", { children: ["Order ID: ", r.id] }),
                        p.jsxs("p", {
                          children: [
                            "Date: ",
                            new Date(r.date).toLocaleDateString(),
                          ],
                        }),
                        p.jsxs("p", { children: ["Total: ₱", r.total] }),
                      ],
                    },
                    r.id
                  )
                ),
              }),
        ],
      })
    );
  },
  h6 = () => {
    const [e, t] = f.useState({ name: "", email: "" });
    f.useEffect(() => {
      fetch("/api/profile")
        .then((o) => o.json())
        .then((o) => t(o))
        .catch((o) => console.error("Error fetching profile:", o));
    }, []);
    const r = (o) => {
        t({ ...e, [o.target.name]: o.target.value });
      },
      n = (o) => {
        o.preventDefault(),
          fetch("/api/profile", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(e),
          })
            .then((i) => i.json())
            .then(() => alert("Profile updated successfully"))
            .catch((i) => console.error("Error updating profile:", i));
      };
    return p.jsxs("div", {
      children: [
        p.jsx("h2", {
          className: "text-2xl font-bold mb-4",
          children: "Profile",
        }),
        p.jsxs("form", {
          onSubmit: n,
          children: [
            p.jsxs("div", {
              className: "mb-4",
              children: [
                p.jsx("label", { className: "block mb-2", children: "Name" }),
                p.jsx("input", {
                  type: "text",
                  name: "name",
                  value: e.name,
                  onChange: r,
                  className: "border p-2 w-full",
                }),
              ],
            }),
            p.jsxs("div", {
              className: "mb-4",
              children: [
                p.jsx("label", { className: "block mb-2", children: "Email" }),
                p.jsx("input", {
                  type: "email",
                  name: "email",
                  value: e.email,
                  onChange: r,
                  className: "border p-2 w-full",
                }),
              ],
            }),
            p.jsx("button", {
              type: "submit",
              className: "bg-blue-500 text-white p-2 rounded",
              children: "Update Profile",
            }),
          ],
        }),
      ],
    });
  },
  g6 = () => {
    const [e, t] = f.useState([]),
      [r, n] = f.useState("");
    f.useEffect(() => {
      fetch("/api/addresses")
        .then((l) => l.json())
        .then((l) => t(l))
        .catch((l) => console.error("Error fetching addresses:", l));
    }, []);
    const o = () => {
        fetch("/api/addresses", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ address: r }),
        })
          .then((l) => l.json())
          .then((l) => {
            t([...e, l]), n("");
          })
          .catch((l) => console.error("Error adding address:", l));
      },
      i = (l) => {
        fetch(`/api/addresses/${l}`, { method: "DELETE" })
          .then(() => {
            t(e.filter((a) => a.id !== l));
          })
          .catch((a) => console.error("Error removing address:", a));
      };
    return p.jsxs("div", {
      children: [
        p.jsx("h2", {
          className: "text-2xl font-bold mb-4",
          children: "Addresses",
        }),
        p.jsxs("div", {
          className: "mb-4",
          children: [
            p.jsx("input", {
              type: "text",
              value: r,
              onChange: (l) => n(l.target.value),
              placeholder: "New address",
              className: "border p-2 w-full",
            }),
            p.jsx("button", {
              onClick: o,
              className: "bg-blue-500 text-white p-2 mt-2 rounded",
              children: "Add Address",
            }),
          ],
        }),
        p.jsx("ul", {
          children: e.map((l) =>
            p.jsxs(
              "li",
              {
                className: "border-b py-2",
                children: [
                  l.address,
                  p.jsx("button", {
                    onClick: () => i(l.id),
                    className: "text-red-500 hover:underline ml-4",
                    children: "Remove",
                  }),
                ],
              },
              l.id
            )
          ),
        }),
      ],
    });
  },
  v6 = () => {
    const [e, t] = f.useState([]),
      [r, n] = f.useState("");
    f.useEffect(() => {
      fetch("/api/payment-methods")
        .then((l) => l.json())
        .then((l) => t(l))
        .catch((l) => console.error("Error fetching payment methods:", l));
    }, []);
    const o = () => {
        fetch("/api/payment-methods", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ method: r }),
        })
          .then((l) => l.json())
          .then((l) => {
            t([...e, l]), n("");
          })
          .catch((l) => console.error("Error adding payment method:", l));
      },
      i = (l) => {
        fetch(`/api/payment-methods/${l}`, { method: "DELETE" })
          .then(() => {
            t(e.filter((a) => a.id !== l));
          })
          .catch((a) => console.error("Error removing payment method:", a));
      };
    return p.jsxs("div", {
      children: [
        p.jsx("h2", {
          className: "text-2xl font-bold mb-4",
          children: "Payment Methods",
        }),
        p.jsxs("div", {
          className: "mb-4",
          children: [
            p.jsx("input", {
              type: "text",
              value: r,
              onChange: (l) => n(l.target.value),
              placeholder: "New payment method",
              className: "border p-2 w-full",
            }),
            p.jsx("button", {
              onClick: o,
              className: "bg-blue-500 text-white p-2 mt-2 rounded",
              children: "Add Payment Method",
            }),
          ],
        }),
        p.jsx("ul", {
          children: e.map((l) =>
            p.jsxs(
              "li",
              {
                className: "border-b py-2",
                children: [
                  l.method,
                  p.jsx("button", {
                    onClick: () => i(l.id),
                    className: "text-red-500 hover:underline ml-4",
                    children: "Remove",
                  }),
                ],
              },
              l.id
            )
          ),
        }),
      ],
    });
  },
  y6 = dx(
    _u(
      p.jsxs(st, {
        path: "/",
        element: p.jsx(Xk, {}),
        children: [
          p.jsx(st, { index: !0, element: p.jsx(e6, {}) }),
          p.jsx(st, { path: "/products", element: p.jsx(G0, {}) }),
          p.jsx(st, { path: "/products/:category", element: p.jsx(G0, {}) }),
          p.jsx(st, {
            path: "/products/:category/:id",
            element: p.jsx(i6, {}),
          }),
          p.jsx(st, { path: "/contact", element: p.jsx(l6, {}) }),
          p.jsx(st, { path: "/checkout", element: p.jsx(f6, {}) }),
          p.jsxs(st, {
            path: "/dashboard",
            element: p.jsx(p6, {}),
            children: [
              p.jsx(st, { path: "orders", element: p.jsx(m6, {}) }),
              p.jsx(st, { path: "profile", element: p.jsx(h6, {}) }),
              p.jsx(st, { path: "addresses", element: p.jsx(g6, {}) }),
              p.jsx(st, { path: "payment", element: p.jsx(v6, {}) }),
            ],
          }),
          p.jsx(st, { path: "*", element: p.jsx(Zk, {}) }),
        ],
      })
    ),
    { basename: "/dpastriescorner/" }
  ),
  x6 = () => p.jsx(wx, { router: y6 });
Ua.createRoot(document.getElementById("root")).render(
  p.jsx(D.StrictMode, { children: p.jsx(x6, {}) })
);
