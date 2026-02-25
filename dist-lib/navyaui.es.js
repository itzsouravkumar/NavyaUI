import { clsx as Rt } from "clsx";
import { twMerge as Ct } from "tailwind-merge";
import N, { useState as $, useCallback as _t, useEffect as U, useRef as z } from "react";
import { AnimatePresence as Xe, motion as Y, useMotionValue as wt, useTransform as K, useSpring as fe, useAnimate as jt, stagger as Tt } from "framer-motion";
import Ot from "webgl-fluid";
function ze(...s) {
  return Ct(Rt(s));
}
var je = { exports: {} }, Z = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function St() {
  if (We) return Z;
  We = 1;
  var s = N, i = Symbol.for("react.element"), l = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, f = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(x, u, v) {
    var h, E = {}, y = null, w = null;
    v !== void 0 && (y = "" + v), u.key !== void 0 && (y = "" + u.key), u.ref !== void 0 && (w = u.ref);
    for (h in u) n.call(u, h) && !o.hasOwnProperty(h) && (E[h] = u[h]);
    if (x && x.defaultProps) for (h in u = x.defaultProps, u) E[h] === void 0 && (E[h] = u[h]);
    return { $$typeof: i, type: x, key: y, ref: w, props: E, _owner: f.current };
  }
  return Z.Fragment = l, Z.jsx = p, Z.jsxs = p, Z;
}
var Q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function Mt() {
  return Be || (Be = 1, process.env.NODE_ENV !== "production" && function() {
    var s = N, i = Symbol.for("react.element"), l = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), x = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), P = Symbol.iterator, A = "@@iterator";
    function W(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = P && e[P] || e[A];
      return typeof t == "function" ? t : null;
    }
    var T = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
      {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), c = 1; c < t; c++)
          r[c - 1] = arguments[c];
        F("error", e, r);
      }
    }
    function F(e, t, r) {
      {
        var c = T.ReactDebugCurrentFrame, g = c.getStackAddendum();
        g !== "" && (t += "%s", r = r.concat([g]));
        var b = r.map(function(m) {
          return String(m);
        });
        b.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, b);
      }
    }
    var de = !1, pe = !1, me = !1, ee = !1, ve = !1, te;
    te = Symbol.for("react.module.reference");
    function re(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === n || e === o || ve || e === f || e === v || e === h || ee || e === w || de || pe || me || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === E || e.$$typeof === p || e.$$typeof === x || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function he(e, t, r) {
      var c = e.displayName;
      if (c)
        return c;
      var g = t.displayName || t.name || "";
      return g !== "" ? r + "(" + g + ")" : r;
    }
    function B(e) {
      return e.displayName || "Context";
    }
    function k(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case n:
          return "Fragment";
        case l:
          return "Portal";
        case o:
          return "Profiler";
        case f:
          return "StrictMode";
        case v:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            var t = e;
            return B(t) + ".Consumer";
          case p:
            var r = e;
            return B(r._context) + ".Provider";
          case u:
            return he(e, e.render, "ForwardRef");
          case E:
            var c = e.displayName || null;
            return c !== null ? c : k(e.type) || "Memo";
          case y: {
            var g = e, b = g._payload, m = g._init;
            try {
              return k(m(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, D = 0, G, q, ne, ae, oe, se, I;
    function H() {
    }
    H.__reactDisabledLog = !0;
    function He() {
      {
        if (D === 0) {
          G = console.log, q = console.info, ne = console.warn, ae = console.error, oe = console.group, se = console.groupCollapsed, I = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: H,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        D++;
      }
    }
    function Je() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: G
            }),
            info: S({}, e, {
              value: q
            }),
            warn: S({}, e, {
              value: ne
            }),
            error: S({}, e, {
              value: ae
            }),
            group: S({}, e, {
              value: oe
            }),
            groupCollapsed: S({}, e, {
              value: se
            }),
            groupEnd: S({}, e, {
              value: I
            })
          });
        }
        D < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ge = T.ReactCurrentDispatcher, xe;
    function ie(e, t, r) {
      {
        if (xe === void 0)
          try {
            throw Error();
          } catch (g) {
            var c = g.stack.trim().match(/\n( *(at )?)/);
            xe = c && c[1] || "";
          }
        return `
` + xe + e;
      }
    }
    var ye = !1, le;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      le = new Ke();
    }
    function Te(e, t) {
      if (!e || ye)
        return "";
      {
        var r = le.get(e);
        if (r !== void 0)
          return r;
      }
      var c;
      ye = !0;
      var g = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = ge.current, ge.current = null, He();
      try {
        if (t) {
          var m = function() {
            throw Error();
          };
          if (Object.defineProperty(m.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(m, []);
            } catch (O) {
              c = O;
            }
            Reflect.construct(e, [], m);
          } else {
            try {
              m.call();
            } catch (O) {
              c = O;
            }
            e.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            c = O;
          }
          e();
        }
      } catch (O) {
        if (O && c && typeof O.stack == "string") {
          for (var d = O.stack.split(`
`), j = c.stack.split(`
`), C = d.length - 1, _ = j.length - 1; C >= 1 && _ >= 0 && d[C] !== j[_]; )
            _--;
          for (; C >= 1 && _ >= 0; C--, _--)
            if (d[C] !== j[_]) {
              if (C !== 1 || _ !== 1)
                do
                  if (C--, _--, _ < 0 || d[C] !== j[_]) {
                    var M = `
` + d[C].replace(" at new ", " at ");
                    return e.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", e.displayName)), typeof e == "function" && le.set(e, M), M;
                  }
                while (C >= 1 && _ >= 0);
              break;
            }
        }
      } finally {
        ye = !1, ge.current = b, Je(), Error.prepareStackTrace = g;
      }
      var X = e ? e.displayName || e.name : "", L = X ? ie(X) : "";
      return typeof e == "function" && le.set(e, L), L;
    }
    function Ze(e, t, r) {
      return Te(e, !1);
    }
    function Qe(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ce(e, t, r) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Te(e, Qe(e));
      if (typeof e == "string")
        return ie(e);
      switch (e) {
        case v:
          return ie("Suspense");
        case h:
          return ie("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return Ze(e.render);
          case E:
            return ce(e.type, t, r);
          case y: {
            var c = e, g = c._payload, b = c._init;
            try {
              return ce(b(g), t, r);
            } catch {
            }
          }
        }
      return "";
    }
    var J = Object.prototype.hasOwnProperty, Oe = {}, Se = T.ReactDebugCurrentFrame;
    function ue(e) {
      if (e) {
        var t = e._owner, r = ce(e.type, e._source, t ? t.type : null);
        Se.setExtraStackFrame(r);
      } else
        Se.setExtraStackFrame(null);
    }
    function et(e, t, r, c, g) {
      {
        var b = Function.call.bind(J);
        for (var m in e)
          if (b(e, m)) {
            var d = void 0;
            try {
              if (typeof e[m] != "function") {
                var j = Error((c || "React class") + ": " + r + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw j.name = "Invariant Violation", j;
              }
              d = e[m](t, m, c, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              d = C;
            }
            d && !(d instanceof Error) && (ue(g), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", r, m, typeof d), ue(null)), d instanceof Error && !(d.message in Oe) && (Oe[d.message] = !0, ue(g), R("Failed %s type: %s", r, d.message), ue(null));
          }
      }
    }
    var tt = Array.isArray;
    function be(e) {
      return tt(e);
    }
    function rt(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, r = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return r;
      }
    }
    function nt(e) {
      try {
        return Me(e), !1;
      } catch {
        return !0;
      }
    }
    function Me(e) {
      return "" + e;
    }
    function Pe(e) {
      if (nt(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rt(e)), Me(e);
    }
    var ke = T.ReactCurrentOwner, at = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ie, Ae;
    function ot(e) {
      if (J.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function st(e) {
      if (J.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function it(e, t) {
      typeof e.ref == "string" && ke.current;
    }
    function lt(e, t) {
      {
        var r = function() {
          Ie || (Ie = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: r,
          configurable: !0
        });
      }
    }
    function ct(e, t) {
      {
        var r = function() {
          Ae || (Ae = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: r,
          configurable: !0
        });
      }
    }
    var ut = function(e, t, r, c, g, b, m) {
      var d = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: r,
        props: m,
        // Record the component responsible for creating this element.
        _owner: b
      };
      return d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(d, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.defineProperty(d, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    };
    function ft(e, t, r, c, g) {
      {
        var b, m = {}, d = null, j = null;
        r !== void 0 && (Pe(r), d = "" + r), st(t) && (Pe(t.key), d = "" + t.key), ot(t) && (j = t.ref, it(t, g));
        for (b in t)
          J.call(t, b) && !at.hasOwnProperty(b) && (m[b] = t[b]);
        if (e && e.defaultProps) {
          var C = e.defaultProps;
          for (b in C)
            m[b] === void 0 && (m[b] = C[b]);
        }
        if (d || j) {
          var _ = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          d && lt(m, _), j && ct(m, _);
        }
        return ut(e, d, j, g, c, ke.current, m);
      }
    }
    var Ee = T.ReactCurrentOwner, Ne = T.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var t = e._owner, r = ce(e.type, e._source, t ? t.type : null);
        Ne.setExtraStackFrame(r);
      } else
        Ne.setExtraStackFrame(null);
    }
    var Re;
    Re = !1;
    function Ce(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function $e() {
      {
        if (Ee.current) {
          var e = k(Ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function dt(e) {
      return "";
    }
    var Fe = {};
    function pt(e) {
      {
        var t = $e();
        if (!t) {
          var r = typeof e == "string" ? e : e.displayName || e.name;
          r && (t = `

Check the top-level render call using <` + r + ">.");
        }
        return t;
      }
    }
    function De(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var r = pt(t);
        if (Fe[r])
          return;
        Fe[r] = !0;
        var c = "";
        e && e._owner && e._owner !== Ee.current && (c = " It was passed a child from " + k(e._owner.type) + "."), V(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', r, c), V(null);
      }
    }
    function Le(e, t) {
      {
        if (typeof e != "object")
          return;
        if (be(e))
          for (var r = 0; r < e.length; r++) {
            var c = e[r];
            Ce(c) && De(c, t);
          }
        else if (Ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var g = W(e);
          if (typeof g == "function" && g !== e.entries)
            for (var b = g.call(e), m; !(m = b.next()).done; )
              Ce(m.value) && De(m.value, t);
        }
      }
    }
    function mt(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var r;
        if (typeof t == "function")
          r = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === E))
          r = t.propTypes;
        else
          return;
        if (r) {
          var c = k(t);
          et(r, e.props, "prop", c, e);
        } else if (t.PropTypes !== void 0 && !Re) {
          Re = !0;
          var g = k(t);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", g || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vt(e) {
      {
        for (var t = Object.keys(e.props), r = 0; r < t.length; r++) {
          var c = t[r];
          if (c !== "children" && c !== "key") {
            V(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), V(null);
            break;
          }
        }
        e.ref !== null && (V(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
      }
    }
    var Ye = {};
    function Ue(e, t, r, c, g, b) {
      {
        var m = re(e);
        if (!m) {
          var d = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (d += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = dt();
          j ? d += j : d += $e();
          var C;
          e === null ? C = "null" : be(e) ? C = "array" : e !== void 0 && e.$$typeof === i ? (C = "<" + (k(e.type) || "Unknown") + " />", d = " Did you accidentally export a JSX literal instead of a component?") : C = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", C, d);
        }
        var _ = ft(e, t, r, g, b);
        if (_ == null)
          return _;
        if (m) {
          var M = t.children;
          if (M !== void 0)
            if (c)
              if (be(M)) {
                for (var X = 0; X < M.length; X++)
                  Le(M[X], e);
                Object.freeze && Object.freeze(M);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Le(M, e);
        }
        if (J.call(t, "key")) {
          var L = k(e), O = Object.keys(t).filter(function(Et) {
            return Et !== "key";
          }), _e = O.length > 0 ? "{key: someKey, " + O.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ye[L + _e]) {
            var bt = O.length > 0 ? "{" + O.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, _e, L, bt, L), Ye[L + _e] = !0;
          }
        }
        return e === n ? vt(_) : mt(_), _;
      }
    }
    function ht(e, t, r) {
      return Ue(e, t, r, !0);
    }
    function gt(e, t, r) {
      return Ue(e, t, r, !1);
    }
    var xt = gt, yt = ht;
    Q.Fragment = n, Q.jsx = xt, Q.jsxs = yt;
  }()), Q;
}
process.env.NODE_ENV === "production" ? je.exports = St() : je.exports = Mt();
var a = je.exports;
const Dt = ({
  className: s
}) => {
  const i = [
    "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
    "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
    "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
    "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
    "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
    "M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827",
    "M-331 -245C-331 -245 -263 160 201 287C665 414 733 819 733 819",
    "M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811",
    "M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803",
    "M-310 -269C-310 -269 -242 136 222 263C686 390 754 795 754 795",
    "M-303 -277C-303 -277 -235 128 229 255C693 382 761 787 761 787",
    "M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779",
    "M-289 -293C-289 -293 -221 112 243 239C707 366 775 771 775 771",
    "M-282 -301C-282 -301 -214 104 250 231C714 358 782 763 782 763",
    "M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755"
  ];
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      className: `absolute inset-0 z-0 flex items-center justify-center [mask-repeat:no-repeat] [mask-size:40px] ${s || ""}`.trim(),
      children: /* @__PURE__ */ a.jsx(
        "svg",
        {
          className: "pointer-events-none absolute z-0 h-full w-full",
          width: "100%",
          height: "100%",
          viewBox: "0 0 696 316",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: i.map((l, n) => /* @__PURE__ */ a.jsxs(N.Fragment, { children: [
            /* @__PURE__ */ a.jsx(
              "path",
              {
                d: l,
                stroke: `url(#linearGradient-${n})`,
                strokeOpacity: "0.4",
                strokeWidth: "0.5"
              }
            ),
            /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsxs(
              "linearGradient",
              {
                id: `linearGradient-${n}`,
                gradientUnits: "userSpaceOnUse",
                children: [
                  /* @__PURE__ */ a.jsx("stop", { stopColor: "#18CCFC", stopOpacity: "0" }),
                  /* @__PURE__ */ a.jsx("stop", { stopColor: "#18CCFC" }),
                  /* @__PURE__ */ a.jsx("stop", { offset: "0.325", stopColor: "#6344F5" }),
                  /* @__PURE__ */ a.jsx("stop", { offset: "1", stopColor: "#AE48FF", stopOpacity: "0" }),
                  /* @__PURE__ */ a.jsx(
                    "animate",
                    {
                      attributeName: "x1",
                      from: "-100%",
                      to: "200%",
                      dur: `${3 + n * 0.5}s`,
                      repeatCount: "indefinite"
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    "animate",
                    {
                      attributeName: "x2",
                      from: "0%",
                      to: "300%",
                      dur: `${3 + n * 0.5}s`,
                      repeatCount: "indefinite"
                    }
                  )
                ]
              }
            ) })
          ] }, "beam-" + n))
        }
      )
    }
  );
}, Lt = ({
  words: s,
  duration: i = 3e3,
  className: l
}) => {
  const [n, f] = $(0), [o, p] = $(!1), x = _t(() => {
    f((u) => (u + 1) % s.length), p(!0);
  }, [s.length]);
  return U(() => {
    if (!o) {
      const u = setTimeout(x, i);
      return () => clearTimeout(u);
    }
  }, [o, i, x]), /* @__PURE__ */ a.jsx("span", { className: "inline-block relative", style: { minWidth: "120px" }, children: /* @__PURE__ */ a.jsx(Xe, { mode: "wait", onExitComplete: () => p(!1), children: /* @__PURE__ */ a.jsx(
    Y.span,
    {
      initial: { opacity: 0, y: 20, filter: "blur(8px)" },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      exit: { opacity: 0, y: -20, filter: "blur(8px)" },
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.4
      },
      className: `inline-block whitespace-nowrap ${l || ""}`.trim(),
      children: s[n]
    },
    s[n]
  ) }) });
}, Yt = ({
  items: s,
  desktopClassName: i
}) => {
  const l = wt(1 / 0);
  return /* @__PURE__ */ a.jsx(
    Y.div,
    {
      onMouseMove: (n) => l.set(n.pageX),
      onMouseLeave: () => l.set(1 / 0),
      className: `mx-auto flex h-16 gap-4 items-end rounded-2xl bg-card/80 backdrop-blur-md border border-border px-4 pb-3 ${i || ""}`.trim(),
      children: s.map((n) => /* @__PURE__ */ a.jsx(Pt, { mouseX: l, ...n }, n.title))
    }
  );
};
function Pt({
  mouseX: s,
  title: i,
  icon: l,
  href: n
}) {
  const f = z(null), o = K(s, (W) => {
    var R;
    const T = ((R = f.current) == null ? void 0 : R.getBoundingClientRect()) ?? { x: 0, width: 0 };
    return W - T.x - T.width / 2;
  }), p = K(o, [-150, 0, 150], [40, 80, 40]), x = K(o, [-150, 0, 150], [40, 80, 40]), u = K(o, [-150, 0, 150], [20, 40, 20]), v = K(o, [-150, 0, 150], [20, 40, 20]), h = fe(p, { mass: 0.1, stiffness: 150, damping: 12 }), E = fe(x, { mass: 0.1, stiffness: 150, damping: 12 }), y = fe(u, { mass: 0.1, stiffness: 150, damping: 12 }), w = fe(v, { mass: 0.1, stiffness: 150, damping: 12 }), [P, A] = $(!1);
  return /* @__PURE__ */ a.jsx("a", { href: n, children: /* @__PURE__ */ a.jsxs(
    Y.div,
    {
      ref: f,
      style: { width: h, height: E },
      onMouseEnter: () => A(!0),
      onMouseLeave: () => A(!1),
      className: "aspect-square rounded-full bg-secondary flex items-center justify-center relative",
      children: [
        /* @__PURE__ */ a.jsx(Xe, { children: P && /* @__PURE__ */ a.jsx(
          Y.div,
          {
            initial: { opacity: 0, y: 10, x: "-50%" },
            animate: { opacity: 1, y: 0, x: "-50%" },
            exit: { opacity: 0, y: 2, x: "-50%" },
            className: "px-2 py-0.5 whitespace-pre rounded-md bg-foreground text-background border border-border absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs",
            children: i
          }
        ) }),
        /* @__PURE__ */ a.jsx(
          Y.div,
          {
            style: { width: y, height: w },
            className: "flex items-center justify-center",
            children: l
          }
        )
      ]
    }
  ) });
}
const Ut = ({
  className: s,
  config: i = {}
}) => {
  const l = z(null), [n, f] = N.useState(() => typeof window < "u" ? document.documentElement.classList.contains("dark") : !0);
  return U(() => {
    const o = new MutationObserver(() => {
      f(document.documentElement.classList.contains("dark"));
    });
    return o.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["class"]
    }), () => o.disconnect();
  }, []), U(() => {
    if (!l.current) return;
    const o = {
      IMMEDIATE: !0,
      TRIGGER: "hover",
      SIM_RESOLUTION: 128,
      DYE_RESOLUTION: 1024,
      CAPTURE_RESOLUTION: 512,
      DENSITY_DISSIPATION: 3,
      VELOCITY_DISSIPATION: 2,
      PRESSURE: 0.8,
      PRESSURE_ITERATIONS: 20,
      CURL: 30,
      SPLAT_RADIUS: 0.25,
      SPLAT_FORCE: 6e3,
      SHADING: !0,
      COLORFUL: !0,
      COLOR_UPDATE_SPEED: 10,
      PAUSED: !1,
      BACK_COLOR: n ? { r: 2, g: 2, b: 2 } : { r: 250, g: 250, b: 250 },
      TRANSPARENT: !n,
      BLOOM: !0,
      BLOOM_ITERATIONS: 8,
      BLOOM_RESOLUTION: 256,
      BLOOM_INTENSITY: n ? 0.8 : 0.1,
      BLOOM_THRESHOLD: n ? 0.6 : 0.9,
      BLOOM_SOFT_KNEE: 0.7,
      SUNRAYS: !0,
      SUNRAYS_RESOLUTION: 196,
      SUNRAYS_WEIGHT: n ? 1 : 0.4,
      ...i
    };
    Ot(l.current, o);
    const p = new MouseEvent("mousemove", {
      clientX: window.innerWidth / 2,
      clientY: window.innerHeight / 2
    });
    l.current.dispatchEvent(p);
  }, [i, n]), /* @__PURE__ */ a.jsx(
    "canvas",
    {
      ref: l,
      className: ze("w-full h-full block dark:bg-[#020202] bg-zinc-50", s),
      style: {
        width: "100%",
        height: "100%",
        touchAction: "none"
      }
    }
  );
}, Wt = ({
  items: s,
  direction: i = "left",
  speed: l = "fast",
  pauseOnHover: n = !0,
  className: f
}) => {
  const o = N.useRef(null), p = N.useRef(null);
  U(() => {
    v();
  }, []);
  const [x, u] = $(!1);
  function v() {
    o.current && p.current && (Array.from(p.current.children).forEach((w) => {
      const P = w.cloneNode(!0);
      p.current && p.current.appendChild(P);
    }), h(), E(), u(!0));
  }
  const h = () => {
    o.current && (i === "left" ? o.current.style.setProperty("--animation-direction", "forwards") : o.current.style.setProperty("--animation-direction", "reverse"));
  }, E = () => {
    o.current && (l === "fast" ? o.current.style.setProperty("--animation-duration", "20s") : l === "normal" ? o.current.style.setProperty("--animation-duration", "40s") : o.current.style.setProperty("--animation-duration", "80s"));
  };
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      ref: o,
      className: `scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${f || ""}`.trim(),
      children: /* @__PURE__ */ a.jsx(
        "ul",
        {
          ref: p,
          className: `flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap ${x ? "animate-navyaui-scroll" : ""} ${n ? "hover:[animation-play-state:paused]" : ""}`.trim(),
          children: s.map((y, w) => /* @__PURE__ */ a.jsx(
            "li",
            {
              className: "w-[350px] max-w-full relative rounded-2xl border border-border flex-shrink-0 px-8 py-6 md:w-[450px] bg-card",
              children: /* @__PURE__ */ a.jsxs("blockquote", { children: [
                /* @__PURE__ */ a.jsx("span", { className: "relative z-20 text-sm leading-[1.6] text-foreground font-normal", children: y.quote }),
                /* @__PURE__ */ a.jsx("div", { className: "relative z-20 mt-6 flex flex-row items-center", children: /* @__PURE__ */ a.jsxs("span", { className: "flex flex-col gap-1", children: [
                  /* @__PURE__ */ a.jsx("span", { className: "text-sm leading-[1.6] text-foreground font-normal", children: y.name }),
                  /* @__PURE__ */ a.jsx("span", { className: "text-sm leading-[1.6] text-muted-foreground font-normal", children: y.title })
                ] }) })
              ] })
            },
            y.name + w
          ))
        }
      )
    }
  );
}, Bt = ({
  number: s = 20,
  className: i = ""
}) => {
  const [l, n] = $([]);
  return U(() => {
    const f = new Array(s).fill(!0).map(() => ({
      top: 0,
      left: Math.floor(Math.random() * 800 + -400) + "px",
      animationDelay: Math.random() * 0.6000000000000001 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 2) + "s"
    }));
    n(f);
  }, [s]), /* @__PURE__ */ a.jsx(a.Fragment, { children: l.map((f, o) => /* @__PURE__ */ a.jsx(
    "span",
    {
      className: `animate-navyaui-meteor absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent ${i}`.trim(),
      style: f
    },
    "meteor" + o
  )) });
}, Vt = ({
  children: s,
  duration: i = 2e3,
  className: l,
  containerClassName: n,
  borderRadius: f = "9999px",
  as: o = "button",
  ...p
}) => /* @__PURE__ */ a.jsxs(
  o,
  {
    className: `relative inline-flex h-12 overflow-hidden p-[1px] focus:outline-none ${n || ""}`.trim(),
    style: { borderRadius: f },
    ...p,
    children: [
      /* @__PURE__ */ a.jsx("span", { className: "absolute inset-[-1000%]", children: /* @__PURE__ */ a.jsx(
        Y.span,
        {
          animate: { rotate: 360 },
          transition: { duration: i / 1e3, repeat: 1 / 0, ease: "linear" },
          className: "block h-full w-full",
          style: {
            background: "conic-gradient(from 0deg, transparent 0%, #ffffff 10%, transparent 20%)"
          }
        }
      ) }),
      /* @__PURE__ */ a.jsx(
        "span",
        {
          className: `relative inline-flex h-full w-full items-center justify-center gap-2 rounded-full bg-background px-6 py-2 text-sm font-medium text-foreground backdrop-blur-xl ${l || ""}`.trim(),
          style: { borderRadius: `calc(${f} - 1px)` },
          children: s
        }
      )
    ]
  }
), Xt = ({
  children: s,
  className: i,
  spotlightColor: l = "rgba(120, 119, 198, 0.15)"
}) => {
  const n = z(null), [f, o] = $({ x: 0, y: 0 }), [p, x] = $(0), u = (v) => {
    if (!n.current) return;
    const h = n.current.getBoundingClientRect();
    o({ x: v.clientX - h.left, y: v.clientY - h.top });
  };
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      ref: n,
      onMouseMove: u,
      onMouseEnter: () => x(1),
      onMouseLeave: () => x(0),
      className: `relative overflow-hidden rounded-xl border border-border bg-card p-8 ${i || ""}`.trim(),
      children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500",
            style: {
              opacity: p,
              background: `radial-gradient(600px circle at ${f.x}px ${f.y}px, ${l}, transparent 40%)`
            }
          }
        ),
        s
      ]
    }
  );
}, zt = ({
  words: s,
  className: i,
  filter: l = !0,
  duration: n = 0.5
}) => {
  const [f, o] = jt(), p = s.split(" ");
  return U(() => {
    o(
      "span",
      {
        opacity: 1,
        filter: l ? "blur(0px)" : "none"
      },
      {
        duration: n,
        delay: Tt(0.2)
      }
    );
  }, [f, o, l, n]), /* @__PURE__ */ a.jsx("div", { className: `font-bold ${i || ""}`.trim(), children: /* @__PURE__ */ a.jsx("div", { className: "mt-4", children: /* @__PURE__ */ a.jsx("div", { className: "text-foreground text-2xl leading-snug tracking-wide", ref: f, children: p.map((x, u) => /* @__PURE__ */ a.jsxs(
    Y.span,
    {
      className: "opacity-0",
      style: {
        filter: l ? "blur(10px)" : "none"
      },
      children: [
        x,
        " "
      ]
    },
    x + u
  )) }) }) });
}, Ge = N.createContext({ isMouseEntered: !1 }), Gt = ({
  children: s,
  className: i,
  containerClassName: l
}) => {
  const n = z(null), [f, o] = $(!1), p = (v) => {
    if (!n.current) return;
    const { left: h, top: E, width: y, height: w } = n.current.getBoundingClientRect(), P = (v.clientX - h - y / 2) / 25, A = (v.clientY - E - w / 2) / 25;
    n.current.style.transform = `rotateY(${P}deg) rotateX(${-A}deg)`;
  }, x = () => {
    o(!0), n.current;
  }, u = () => {
    n.current && (o(!1), n.current.style.transform = "rotateY(0deg) rotateX(0deg)");
  };
  return /* @__PURE__ */ a.jsx(Ge.Provider, { value: { isMouseEntered: f }, children: /* @__PURE__ */ a.jsx(
    "div",
    {
      className: `flex items-center justify-center py-20 ${l || ""}`.trim(),
      style: { perspective: "1000px" },
      children: /* @__PURE__ */ a.jsx(
        "div",
        {
          ref: n,
          onMouseEnter: x,
          onMouseMove: p,
          onMouseLeave: u,
          className: `flex items-center justify-center relative transition-all duration-200 ease-linear ${i || ""}`.trim(),
          style: { transformStyle: "preserve-3d" },
          children: s
        }
      )
    }
  ) });
}, qt = ({
  children: s,
  className: i
}) => /* @__PURE__ */ a.jsx(
  "div",
  {
    className: `h-96 w-96 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] ${i || ""}`.trim(),
    children: s
  }
), Ht = ({
  as: s = "div",
  children: i,
  className: l,
  translateX: n = 0,
  translateY: f = 0,
  translateZ: o = 0,
  rotateX: p = 0,
  rotateY: x = 0,
  rotateZ: u = 0,
  ...v
}) => {
  const h = z(null), { isMouseEntered: E } = N.useContext(Ge);
  N.useEffect(() => {
    y();
  }, [E]);
  const y = () => {
    h.current && (E ? h.current.style.transform = `translateX(${n}px) translateY(${f}px) translateZ(${o}px) rotateX(${p}deg) rotateY(${x}deg) rotateZ(${u}deg)` : h.current.style.transform = "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)");
  };
  return /* @__PURE__ */ a.jsx(
    s,
    {
      ref: h,
      className: `w-fit transition duration-200 ease-linear ${l || ""}`.trim(),
      ...v,
      children: i
    }
  );
}, qe = (s, i, l) => Math.min(l, Math.max(i, s)), we = (s, i, l) => s + (i - s) * l, Ve = (s) => {
  const i = s.replace("#", ""), l = i.length === 3 ? i.split("").map((f) => f + f).join("") : i, n = Number.parseInt(l, 16);
  return {
    r: n >> 16 & 255,
    g: n >> 8 & 255,
    b: n & 255
  };
}, kt = (s, i, l, n) => {
  const f = qe(l, 0, 1), o = Ve(s), p = Ve(i), x = Math.round(we(o.r, p.r, f)), u = Math.round(we(o.g, p.g, f)), v = Math.round(we(o.b, p.b, f));
  return `rgba(${x}, ${u}, ${v}, ${n})`;
}, Jt = ({
  className: s,
  lineCount: i = 36,
  speed: l = 0.55,
  strokeWidth: n = 1.5,
  darkColor: f = "#caa0ff",
  lightColor: o = "#8fd6ff",
  backgroundColor: p = "#0f1228"
}) => {
  const x = z(null);
  return U(() => {
    const u = x.current;
    if (!u) return;
    const v = u.getContext("2d");
    if (!v) return;
    let h = 0, E = 0, y = 0, w = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
    const P = () => {
      const T = u.getBoundingClientRect();
      E = T.width, y = T.height, w = Math.max(1, Math.min(window.devicePixelRatio || 1, 2)), u.width = Math.floor(E * w), u.height = Math.floor(y * w), u.style.width = `${E}px`, u.style.height = `${y}px`, v.setTransform(w, 0, 0, w, 0, 0), v.lineCap = "round", v.lineJoin = "round";
    };
    P();
    const A = new ResizeObserver(() => P());
    A.observe(u);
    const W = (T) => {
      const R = T / 1e3 * l, F = Math.max(8, i), de = y * 0.55, pe = Math.max(2.8, Math.min(4.8, y / (F * 1.9))), me = Math.max(14, Math.min(56, y * 0.12)), ee = Math.PI * 2 / Math.max(320, E * 0.72), ve = ee * 1.65, te = E + 100, re = -50, he = Math.max(3.5, E / 160);
      v.fillStyle = p, v.fillRect(0, 0, E, y);
      for (let B = 0; B < F; B += 1) {
        const k = F <= 1 ? 0.5 : B / (F - 1), S = k - 0.5, D = S * pe * F, G = 1 - Math.min(1, Math.abs(S) * 1.6), q = me * (0.35 + G * 0.7), ne = q * 0.22, ae = S * 3.1, oe = Math.sin(R * 0.55 + S * 5.4) * 5.5, se = qe(0.2 + G * 0.55, 0.15, 0.8);
        v.beginPath();
        for (let I = re; I <= te; I += he) {
          const H = de + D + oe + Math.sin(I * ee + R * 1.7 + ae) * q + Math.sin(I * ve - R * 1.15 + S * 2.3) * ne;
          I === re ? v.moveTo(I, H) : v.lineTo(I, H);
        }
        v.strokeStyle = kt(f, o, k, se), v.lineWidth = n, v.stroke();
      }
      h = window.requestAnimationFrame(W);
    };
    return h = window.requestAnimationFrame(W), () => {
      A.disconnect(), window.cancelAnimationFrame(h);
    };
  }, [p, f, o, i, l, n]), /* @__PURE__ */ a.jsx("canvas", { ref: x, className: ze("absolute inset-0 h-full w-full", s), "aria-hidden": "true" });
};
export {
  Dt as BackgroundBeams,
  qt as CardBody,
  Gt as CardContainer,
  Ht as CardItem,
  Lt as FlipWords,
  Yt as FloatingDock,
  Ut as FluidSmokeBackground,
  Wt as InfiniteMovingCards,
  Bt as Meteors,
  Vt as MovingBorder,
  Xt as SpotlightCard,
  zt as TextGenerateEffect,
  Jt as WaveRibbonBackground,
  ze as cn
};
