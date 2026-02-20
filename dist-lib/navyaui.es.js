import { clsx as xr } from "clsx";
import { twMerge as yr } from "tailwind-merge";
import k, { useState as I, useCallback as br, useEffect as X, useRef as G } from "react";
import { AnimatePresence as Ae, motion as $, useMotionValue as Er, useTransform as W, useSpring as J, useAnimate as Rr, stagger as Cr } from "framer-motion";
import _r from "webgl-fluid";
function jr(...l) {
  return yr(xr(l));
}
var ie = { exports: {} }, B = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function wr() {
  if (Ie) return B;
  Ie = 1;
  var l = k, f = Symbol.for("react.element"), u = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, p = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(x, d, R) {
    var m, C = {}, E = null, O = null;
    R !== void 0 && (E = "" + R), d.key !== void 0 && (E = "" + d.key), d.ref !== void 0 && (O = d.ref);
    for (m in d) a.call(d, m) && !s.hasOwnProperty(m) && (C[m] = d[m]);
    if (x && x.defaultProps) for (m in d = x.defaultProps, d) C[m] === void 0 && (C[m] = d[m]);
    return { $$typeof: f, type: x, key: E, ref: O, props: C, _owner: p.current };
  }
  return B.Fragment = u, B.jsx = g, B.jsxs = g, B;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function Or() {
  return Ne || (Ne = 1, process.env.NODE_ENV !== "production" && function() {
    var l = k, f = Symbol.for("react.element"), u = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), x = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), P = Symbol.iterator, D = "@@iterator";
    function Z(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = P && e[P] || e[D];
      return typeof r == "function" ? r : null;
    }
    var S = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          t[o - 1] = arguments[o];
        De("error", e, t);
      }
    }
    function De(e, r, t) {
      {
        var o = S.ReactDebugCurrentFrame, v = o.getStackAddendum();
        v !== "" && (r += "%s", t = t.concat([v]));
        var h = t.map(function(c) {
          return String(c);
        });
        h.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var Fe = !1, Le = !1, Ye = !1, Ue = !1, We = !1, le;
    le = Symbol.for("react.module.reference");
    function Be(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === s || We || e === p || e === R || e === m || Ue || e === O || Fe || Le || Ye || typeof e == "object" && e !== null && (e.$$typeof === E || e.$$typeof === C || e.$$typeof === g || e.$$typeof === x || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === le || e.getModuleId !== void 0));
    }
    function Ve(e, r, t) {
      var o = e.displayName;
      if (o)
        return o;
      var v = r.displayName || r.name || "";
      return v !== "" ? t + "(" + v + ")" : t;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function M(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case a:
          return "Fragment";
        case u:
          return "Portal";
        case s:
          return "Profiler";
        case p:
          return "StrictMode";
        case R:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            var r = e;
            return ue(r) + ".Consumer";
          case g:
            var t = e;
            return ue(t._context) + ".Provider";
          case d:
            return Ve(e, e.render, "ForwardRef");
          case C:
            var o = e.displayName || null;
            return o !== null ? o : M(e.type) || "Memo";
          case E: {
            var v = e, h = v._payload, c = v._init;
            try {
              return M(c(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, Y = 0, ce, fe, de, pe, ve, me, he;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function Xe() {
      {
        if (Y === 0) {
          ce = console.log, fe = console.info, de = console.warn, pe = console.error, ve = console.group, me = console.groupCollapsed, he = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ge,
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
        Y++;
      }
    }
    function Ge() {
      {
        if (Y--, Y === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, e, {
              value: ce
            }),
            info: N({}, e, {
              value: fe
            }),
            warn: N({}, e, {
              value: de
            }),
            error: N({}, e, {
              value: pe
            }),
            group: N({}, e, {
              value: ve
            }),
            groupCollapsed: N({}, e, {
              value: me
            }),
            groupEnd: N({}, e, {
              value: he
            })
          });
        }
        Y < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = S.ReactCurrentDispatcher, ee;
    function z(e, r, t) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (v) {
            var o = v.stack.trim().match(/\n( *(at )?)/);
            ee = o && o[1] || "";
          }
        return `
` + ee + e;
      }
    }
    var re = !1, q;
    {
      var ze = typeof WeakMap == "function" ? WeakMap : Map;
      q = new ze();
    }
    function xe(e, r) {
      if (!e || re)
        return "";
      {
        var t = q.get(e);
        if (t !== void 0)
          return t;
      }
      var o;
      re = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = Q.current, Q.current = null, Xe();
      try {
        if (r) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (w) {
              o = w;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (w) {
              o = w;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (w) {
            o = w;
          }
          e();
        }
      } catch (w) {
        if (w && o && typeof w.stack == "string") {
          for (var i = w.stack.split(`
`), j = o.stack.split(`
`), y = i.length - 1, b = j.length - 1; y >= 1 && b >= 0 && i[y] !== j[b]; )
            b--;
          for (; y >= 1 && b >= 0; y--, b--)
            if (i[y] !== j[b]) {
              if (y !== 1 || b !== 1)
                do
                  if (y--, b--, b < 0 || i[y] !== j[b]) {
                    var T = `
` + i[y].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && q.set(e, T), T;
                  }
                while (y >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        re = !1, Q.current = h, Ge(), Error.prepareStackTrace = v;
      }
      var L = e ? e.displayName || e.name : "", A = L ? z(L) : "";
      return typeof e == "function" && q.set(e, A), A;
    }
    function qe(e, r, t) {
      return xe(e, !1);
    }
    function Ke(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function K(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return xe(e, Ke(e));
      if (typeof e == "string")
        return z(e);
      switch (e) {
        case R:
          return z("Suspense");
        case m:
          return z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return qe(e.render);
          case C:
            return K(e.type, r, t);
          case E: {
            var o = e, v = o._payload, h = o._init;
            try {
              return K(h(v), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, ye = {}, be = S.ReactDebugCurrentFrame;
    function H(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    function He(e, r, t, o, v) {
      {
        var h = Function.call.bind(U);
        for (var c in e)
          if (h(e, c)) {
            var i = void 0;
            try {
              if (typeof e[c] != "function") {
                var j = Error((o || "React class") + ": " + t + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw j.name = "Invariant Violation", j;
              }
              i = e[c](r, c, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              i = y;
            }
            i && !(i instanceof Error) && (H(v), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, c, typeof i), H(null)), i instanceof Error && !(i.message in ye) && (ye[i.message] = !0, H(v), _("Failed %s type: %s", t, i.message), H(null));
          }
      }
    }
    var Je = Array.isArray;
    function te(e) {
      return Je(e);
    }
    function Ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Qe(e) {
      try {
        return Ee(e), !1;
      } catch {
        return !0;
      }
    }
    function Ee(e) {
      return "" + e;
    }
    function Re(e) {
      if (Qe(e))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(e)), Ee(e);
    }
    var Ce = S.ReactCurrentOwner, er = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, je;
    function rr(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function tr(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function nr(e, r) {
      typeof e.ref == "string" && Ce.current;
    }
    function ar(e, r) {
      {
        var t = function() {
          _e || (_e = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function or(e, r) {
      {
        var t = function() {
          je || (je = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var sr = function(e, r, t, o, v, h, c) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: c,
        // Record the component responsible for creating this element.
        _owner: h
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function ir(e, r, t, o, v) {
      {
        var h, c = {}, i = null, j = null;
        t !== void 0 && (Re(t), i = "" + t), tr(r) && (Re(r.key), i = "" + r.key), rr(r) && (j = r.ref, nr(r, v));
        for (h in r)
          U.call(r, h) && !er.hasOwnProperty(h) && (c[h] = r[h]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (h in y)
            c[h] === void 0 && (c[h] = y[h]);
        }
        if (i || j) {
          var b = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && ar(c, b), j && or(c, b);
        }
        return sr(e, i, j, v, o, Ce.current, c);
      }
    }
    var ne = S.ReactCurrentOwner, we = S.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    var ae;
    ae = !1;
    function oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === f;
    }
    function Oe() {
      {
        if (ne.current) {
          var e = M(ne.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function lr(e) {
      return "";
    }
    var Te = {};
    function ur(e) {
      {
        var r = Oe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Se(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ur(r);
        if (Te[t])
          return;
        Te[t] = !0;
        var o = "";
        e && e._owner && e._owner !== ne.current && (o = " It was passed a child from " + M(e._owner.type) + "."), F(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), F(null);
      }
    }
    function Pe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (te(e))
          for (var t = 0; t < e.length; t++) {
            var o = e[t];
            oe(o) && Se(o, r);
          }
        else if (oe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var v = Z(e);
          if (typeof v == "function" && v !== e.entries)
            for (var h = v.call(e), c; !(c = h.next()).done; )
              oe(c.value) && Se(c.value, r);
        }
      }
    }
    function cr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === C))
          t = r.propTypes;
        else
          return;
        if (t) {
          var o = M(r);
          He(t, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !ae) {
          ae = !0;
          var v = M(r);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function fr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var o = r[t];
          if (o !== "children" && o !== "key") {
            F(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    var Me = {};
    function ke(e, r, t, o, v, h) {
      {
        var c = Be(e);
        if (!c) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = lr();
          j ? i += j : i += Oe();
          var y;
          e === null ? y = "null" : te(e) ? y = "array" : e !== void 0 && e.$$typeof === f ? (y = "<" + (M(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, i);
        }
        var b = ir(e, r, t, v, h);
        if (b == null)
          return b;
        if (c) {
          var T = r.children;
          if (T !== void 0)
            if (o)
              if (te(T)) {
                for (var L = 0; L < T.length; L++)
                  Pe(T[L], e);
                Object.freeze && Object.freeze(T);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(T, e);
        }
        if (U.call(r, "key")) {
          var A = M(e), w = Object.keys(r).filter(function(gr) {
            return gr !== "key";
          }), se = w.length > 0 ? "{key: someKey, " + w.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Me[A + se]) {
            var hr = w.length > 0 ? "{" + w.join(": ..., ") + ": ...}" : "{}";
            _(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, se, A, hr, A), Me[A + se] = !0;
          }
        }
        return e === a ? fr(b) : cr(b), b;
      }
    }
    function dr(e, r, t) {
      return ke(e, r, t, !0);
    }
    function pr(e, r, t) {
      return ke(e, r, t, !1);
    }
    var vr = pr, mr = dr;
    V.Fragment = a, V.jsx = vr, V.jsxs = mr;
  }()), V;
}
process.env.NODE_ENV === "production" ? ie.exports = wr() : ie.exports = Or();
var n = ie.exports;
const Nr = ({
  className: l
}) => {
  const f = [
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
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      className: `absolute inset-0 z-0 flex items-center justify-center [mask-repeat:no-repeat] [mask-size:40px] ${l || ""}`.trim(),
      children: /* @__PURE__ */ n.jsx(
        "svg",
        {
          className: "pointer-events-none absolute z-0 h-full w-full",
          width: "100%",
          height: "100%",
          viewBox: "0 0 696 316",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: f.map((u, a) => /* @__PURE__ */ n.jsxs(k.Fragment, { children: [
            /* @__PURE__ */ n.jsx(
              "path",
              {
                d: u,
                stroke: `url(#linearGradient-${a})`,
                strokeOpacity: "0.4",
                strokeWidth: "0.5"
              }
            ),
            /* @__PURE__ */ n.jsx("defs", { children: /* @__PURE__ */ n.jsxs(
              "linearGradient",
              {
                id: `linearGradient-${a}`,
                gradientUnits: "userSpaceOnUse",
                children: [
                  /* @__PURE__ */ n.jsx("stop", { stopColor: "#18CCFC", stopOpacity: "0" }),
                  /* @__PURE__ */ n.jsx("stop", { stopColor: "#18CCFC" }),
                  /* @__PURE__ */ n.jsx("stop", { offset: "0.325", stopColor: "#6344F5" }),
                  /* @__PURE__ */ n.jsx("stop", { offset: "1", stopColor: "#AE48FF", stopOpacity: "0" }),
                  /* @__PURE__ */ n.jsx(
                    "animate",
                    {
                      attributeName: "x1",
                      from: "-100%",
                      to: "200%",
                      dur: `${3 + a * 0.5}s`,
                      repeatCount: "indefinite"
                    }
                  ),
                  /* @__PURE__ */ n.jsx(
                    "animate",
                    {
                      attributeName: "x2",
                      from: "0%",
                      to: "300%",
                      dur: `${3 + a * 0.5}s`,
                      repeatCount: "indefinite"
                    }
                  )
                ]
              }
            ) })
          ] }, "beam-" + a))
        }
      )
    }
  );
}, Ar = ({
  words: l,
  duration: f = 3e3,
  className: u
}) => {
  const [a, p] = I(0), [s, g] = I(!1), x = br(() => {
    p((d) => (d + 1) % l.length), g(!0);
  }, [l.length]);
  return X(() => {
    if (!s) {
      const d = setTimeout(x, f);
      return () => clearTimeout(d);
    }
  }, [s, f, x]), /* @__PURE__ */ n.jsx("span", { className: "inline-block relative", style: { minWidth: "120px" }, children: /* @__PURE__ */ n.jsx(Ae, { mode: "wait", onExitComplete: () => g(!1), children: /* @__PURE__ */ n.jsx(
    $.span,
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
      className: `inline-block whitespace-nowrap ${u || ""}`.trim(),
      children: l[a]
    },
    l[a]
  ) }) });
}, $r = ({
  items: l,
  desktopClassName: f
}) => {
  const u = Er(1 / 0);
  return /* @__PURE__ */ n.jsx(
    $.div,
    {
      onMouseMove: (a) => u.set(a.pageX),
      onMouseLeave: () => u.set(1 / 0),
      className: `mx-auto flex h-16 gap-4 items-end rounded-2xl bg-card/80 backdrop-blur-md border border-border px-4 pb-3 ${f || ""}`.trim(),
      children: l.map((a) => /* @__PURE__ */ n.jsx(Tr, { mouseX: u, ...a }, a.title))
    }
  );
};
function Tr({
  mouseX: l,
  title: f,
  icon: u,
  href: a
}) {
  const p = G(null), s = W(l, (Z) => {
    var _;
    const S = ((_ = p.current) == null ? void 0 : _.getBoundingClientRect()) ?? { x: 0, width: 0 };
    return Z - S.x - S.width / 2;
  }), g = W(s, [-150, 0, 150], [40, 80, 40]), x = W(s, [-150, 0, 150], [40, 80, 40]), d = W(s, [-150, 0, 150], [20, 40, 20]), R = W(s, [-150, 0, 150], [20, 40, 20]), m = J(g, { mass: 0.1, stiffness: 150, damping: 12 }), C = J(x, { mass: 0.1, stiffness: 150, damping: 12 }), E = J(d, { mass: 0.1, stiffness: 150, damping: 12 }), O = J(R, { mass: 0.1, stiffness: 150, damping: 12 }), [P, D] = I(!1);
  return /* @__PURE__ */ n.jsx("a", { href: a, children: /* @__PURE__ */ n.jsxs(
    $.div,
    {
      ref: p,
      style: { width: m, height: C },
      onMouseEnter: () => D(!0),
      onMouseLeave: () => D(!1),
      className: "aspect-square rounded-full bg-secondary flex items-center justify-center relative",
      children: [
        /* @__PURE__ */ n.jsx(Ae, { children: P && /* @__PURE__ */ n.jsx(
          $.div,
          {
            initial: { opacity: 0, y: 10, x: "-50%" },
            animate: { opacity: 1, y: 0, x: "-50%" },
            exit: { opacity: 0, y: 2, x: "-50%" },
            className: "px-2 py-0.5 whitespace-pre rounded-md bg-foreground text-background border border-border absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs",
            children: f
          }
        ) }),
        /* @__PURE__ */ n.jsx(
          $.div,
          {
            style: { width: E, height: O },
            className: "flex items-center justify-center",
            children: u
          }
        )
      ]
    }
  ) });
}
const Dr = ({
  className: l,
  config: f = {}
}) => {
  const u = G(null);
  return X(() => {
    if (!u.current) return;
    const a = {
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
      BACK_COLOR: { r: 2, g: 2, b: 2 },
      TRANSPARENT: !1,
      BLOOM: !0,
      BLOOM_ITERATIONS: 8,
      BLOOM_RESOLUTION: 256,
      BLOOM_INTENSITY: 0.8,
      BLOOM_THRESHOLD: 0.6,
      BLOOM_SOFT_KNEE: 0.7,
      SUNRAYS: !0,
      SUNRAYS_RESOLUTION: 196,
      SUNRAYS_WEIGHT: 1,
      ...f
    };
    _r(u.current, a);
    const p = new MouseEvent("mousemove", {
      clientX: window.innerWidth / 2,
      clientY: window.innerHeight / 2
    });
    u.current.dispatchEvent(p);
  }, [f]), /* @__PURE__ */ n.jsx(
    "canvas",
    {
      ref: u,
      className: jr("w-full h-full block bg-[#020202]", l),
      style: {
        width: "100%",
        height: "100%",
        touchAction: "none"
      }
    }
  );
}, Fr = ({
  items: l,
  direction: f = "left",
  speed: u = "fast",
  pauseOnHover: a = !0,
  className: p
}) => {
  const s = k.useRef(null), g = k.useRef(null);
  X(() => {
    R();
  }, []);
  const [x, d] = I(!1);
  function R() {
    s.current && g.current && (Array.from(g.current.children).forEach((O) => {
      const P = O.cloneNode(!0);
      g.current && g.current.appendChild(P);
    }), m(), C(), d(!0));
  }
  const m = () => {
    s.current && (f === "left" ? s.current.style.setProperty("--animation-direction", "forwards") : s.current.style.setProperty("--animation-direction", "reverse"));
  }, C = () => {
    s.current && (u === "fast" ? s.current.style.setProperty("--animation-duration", "20s") : u === "normal" ? s.current.style.setProperty("--animation-duration", "40s") : s.current.style.setProperty("--animation-duration", "80s"));
  };
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: s,
      className: `scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${p || ""}`.trim(),
      children: /* @__PURE__ */ n.jsx(
        "ul",
        {
          ref: g,
          className: `flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap ${x ? "animate-navyaui-scroll" : ""} ${a ? "hover:[animation-play-state:paused]" : ""}`.trim(),
          children: l.map((E, O) => /* @__PURE__ */ n.jsx(
            "li",
            {
              className: "w-[350px] max-w-full relative rounded-2xl border border-border flex-shrink-0 px-8 py-6 md:w-[450px] bg-card",
              children: /* @__PURE__ */ n.jsxs("blockquote", { children: [
                /* @__PURE__ */ n.jsx("span", { className: "relative z-20 text-sm leading-[1.6] text-foreground font-normal", children: E.quote }),
                /* @__PURE__ */ n.jsx("div", { className: "relative z-20 mt-6 flex flex-row items-center", children: /* @__PURE__ */ n.jsxs("span", { className: "flex flex-col gap-1", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "text-sm leading-[1.6] text-foreground font-normal", children: E.name }),
                  /* @__PURE__ */ n.jsx("span", { className: "text-sm leading-[1.6] text-muted-foreground font-normal", children: E.title })
                ] }) })
              ] })
            },
            E.name + O
          ))
        }
      )
    }
  );
}, Lr = ({
  number: l = 20,
  className: f = ""
}) => {
  const [u, a] = I([]);
  return X(() => {
    const p = new Array(l).fill(!0).map(() => ({
      top: 0,
      left: Math.floor(Math.random() * 800 + -400) + "px",
      animationDelay: Math.random() * 0.6000000000000001 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 2) + "s"
    }));
    a(p);
  }, [l]), /* @__PURE__ */ n.jsx(n.Fragment, { children: u.map((p, s) => /* @__PURE__ */ n.jsx(
    "span",
    {
      className: `animate-navyaui-meteor absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent ${f}`.trim(),
      style: p
    },
    "meteor" + s
  )) });
}, Yr = ({
  children: l,
  duration: f = 2e3,
  className: u,
  containerClassName: a,
  borderRadius: p = "9999px",
  as: s = "button",
  ...g
}) => /* @__PURE__ */ n.jsxs(
  s,
  {
    className: `relative inline-flex h-12 overflow-hidden p-[1px] focus:outline-none ${a || ""}`.trim(),
    style: { borderRadius: p },
    ...g,
    children: [
      /* @__PURE__ */ n.jsx("span", { className: "absolute inset-[-1000%]", children: /* @__PURE__ */ n.jsx(
        $.span,
        {
          animate: { rotate: 360 },
          transition: { duration: f / 1e3, repeat: 1 / 0, ease: "linear" },
          className: "block h-full w-full",
          style: {
            background: "conic-gradient(from 0deg, transparent 0%, #ffffff 10%, transparent 20%)"
          }
        }
      ) }),
      /* @__PURE__ */ n.jsx(
        "span",
        {
          className: `relative inline-flex h-full w-full items-center justify-center gap-2 rounded-full bg-background px-6 py-2 text-sm font-medium text-foreground backdrop-blur-xl ${u || ""}`.trim(),
          style: { borderRadius: `calc(${p} - 1px)` },
          children: l
        }
      )
    ]
  }
), Ur = ({
  children: l,
  className: f,
  spotlightColor: u = "rgba(120, 119, 198, 0.15)"
}) => {
  const a = G(null), [p, s] = I({ x: 0, y: 0 }), [g, x] = I(0), d = (R) => {
    if (!a.current) return;
    const m = a.current.getBoundingClientRect();
    s({ x: R.clientX - m.left, y: R.clientY - m.top });
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      ref: a,
      onMouseMove: d,
      onMouseEnter: () => x(1),
      onMouseLeave: () => x(0),
      className: `relative overflow-hidden rounded-xl border border-border bg-card p-8 ${f || ""}`.trim(),
      children: [
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500",
            style: {
              opacity: g,
              background: `radial-gradient(600px circle at ${p.x}px ${p.y}px, ${u}, transparent 40%)`
            }
          }
        ),
        l
      ]
    }
  );
}, Wr = ({
  words: l,
  className: f,
  filter: u = !0,
  duration: a = 0.5
}) => {
  const [p, s] = Rr(), g = l.split(" ");
  return X(() => {
    s(
      "span",
      {
        opacity: 1,
        filter: u ? "blur(0px)" : "none"
      },
      {
        duration: a,
        delay: Cr(0.2)
      }
    );
  }, [p, s, u, a]), /* @__PURE__ */ n.jsx("div", { className: `font-bold ${f || ""}`.trim(), children: /* @__PURE__ */ n.jsx("div", { className: "mt-4", children: /* @__PURE__ */ n.jsx("div", { className: "text-foreground text-2xl leading-snug tracking-wide", ref: p, children: g.map((x, d) => /* @__PURE__ */ n.jsxs(
    $.span,
    {
      className: "opacity-0",
      style: {
        filter: u ? "blur(10px)" : "none"
      },
      children: [
        x,
        " "
      ]
    },
    x + d
  )) }) }) });
}, $e = k.createContext({ isMouseEntered: !1 }), Br = ({
  children: l,
  className: f,
  containerClassName: u
}) => {
  const a = G(null), [p, s] = I(!1), g = (R) => {
    if (!a.current) return;
    const { left: m, top: C, width: E, height: O } = a.current.getBoundingClientRect(), P = (R.clientX - m - E / 2) / 25, D = (R.clientY - C - O / 2) / 25;
    a.current.style.transform = `rotateY(${P}deg) rotateX(${-D}deg)`;
  }, x = () => {
    s(!0), a.current;
  }, d = () => {
    a.current && (s(!1), a.current.style.transform = "rotateY(0deg) rotateX(0deg)");
  };
  return /* @__PURE__ */ n.jsx($e.Provider, { value: { isMouseEntered: p }, children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: `flex items-center justify-center py-20 ${u || ""}`.trim(),
      style: { perspective: "1000px" },
      children: /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: a,
          onMouseEnter: x,
          onMouseMove: g,
          onMouseLeave: d,
          className: `flex items-center justify-center relative transition-all duration-200 ease-linear ${f || ""}`.trim(),
          style: { transformStyle: "preserve-3d" },
          children: l
        }
      )
    }
  ) });
}, Vr = ({
  children: l,
  className: f
}) => /* @__PURE__ */ n.jsx(
  "div",
  {
    className: `h-96 w-96 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] ${f || ""}`.trim(),
    children: l
  }
), Xr = ({
  as: l = "div",
  children: f,
  className: u,
  translateX: a = 0,
  translateY: p = 0,
  translateZ: s = 0,
  rotateX: g = 0,
  rotateY: x = 0,
  rotateZ: d = 0,
  ...R
}) => {
  const m = G(null), { isMouseEntered: C } = k.useContext($e);
  k.useEffect(() => {
    E();
  }, [C]);
  const E = () => {
    m.current && (C ? m.current.style.transform = `translateX(${a}px) translateY(${p}px) translateZ(${s}px) rotateX(${g}deg) rotateY(${x}deg) rotateZ(${d}deg)` : m.current.style.transform = "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)");
  };
  return /* @__PURE__ */ n.jsx(
    l,
    {
      ref: m,
      className: `w-fit transition duration-200 ease-linear ${u || ""}`.trim(),
      ...R,
      children: f
    }
  );
};
export {
  Nr as BackgroundBeams,
  Vr as CardBody,
  Br as CardContainer,
  Xr as CardItem,
  Ar as FlipWords,
  $r as FloatingDock,
  Dr as FluidSmokeBackground,
  Fr as InfiniteMovingCards,
  Lr as Meteors,
  Yr as MovingBorder,
  Ur as SpotlightCard,
  Wr as TextGenerateEffect,
  jr as cn
};
