!function(t) {
    function e(r) {
        if (n[r])
            return n[r].exports;
        var o = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return t[r].call(o.exports, o, o.exports, e),
        o.loaded = !0,
        o.exports
    }
    var n = {};
    return e.m = t,
    e.c = n,
    e.p = "/",
    e(0)
}(function(t) {
    for (var e in t)
        if (Object.prototype.hasOwnProperty.call(t, e))
            switch (typeof t[e]) {
            case "function":
                break;
            case "object":
                t[e] = function(e) {
                    var n = e.slice(1)
                      , r = t[e[0]];
                    return function(t, e, o) {
                        r.apply(this, [t, e, o].concat(n))
                    }
                }(t[e]);
                break;
            default:
                t[e] = t[t[e]]
            }
    return t
}([function(t, e, n) {
    n(309),
    t.exports = n(125)
}
, function(t, e, n) {
    "use strict";
    function r(t, e, n, r, i, a, u, s) {
        if (o(e),
        !t) {
            var c;
            if (void 0 === e)
                c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var l = [n, r, i, a, u, s]
                  , f = 0;
                c = new Error(e.replace(/%s/g, function() {
                    return l[f++]
                })),
                c.name = "Invariant Violation"
            }
            throw c.framesToPop = 1,
            c
        }
    }
    var o = function(t) {};
    t.exports = r
}
, function(t, e) {
    "use strict";
    function n(t) {
        for (var e = arguments.length - 1, n = "Minified React error #" + t + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + t, r = 0; r < e; r++)
            n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
        n += " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        var o = new Error(n);
        throw o.name = "Invariant Violation",
        o.framesToPop = 1,
        o
    }
    t.exports = n
}
, function(t, e, n) {
    "use strict";
    var r = n(8)
      , o = r;
    t.exports = o
}
, function(t, e) {
    "use strict";
    function n(t) {
        if (null === t || void 0 === t)
            throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(t)
    }
    function r() {
        try {
            if (!Object.assign)
                return !1;
            var t = new String("abc");
            if (t[5] = "de",
            "5" === Object.getOwnPropertyNames(t)[0])
                return !1;
            for (var e = {}, n = 0; n < 10; n++)
                e["_" + String.fromCharCode(n)] = n;
            var r = Object.getOwnPropertyNames(e).map(function(t) {
                return e[t]
            });
            if ("0123456789" !== r.join(""))
                return !1;
            var o = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                o[t] = t
            }),
            "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("")
        } catch (t) {
            return !1
        }
    }
    var o = Object.getOwnPropertySymbols
      , i = Object.prototype.hasOwnProperty
      , a = Object.prototype.propertyIsEnumerable;
    t.exports = r() ? Object.assign : function(t, e) {
        for (var r, u, s = n(t), c = 1; c < arguments.length; c++) {
            r = Object(arguments[c]);
            for (var l in r)
                i.call(r, l) && (s[l] = r[l]);
            if (o) {
                u = o(r);
                for (var f = 0; f < u.length; f++)
                    a.call(r, u[f]) && (s[u[f]] = r[u[f]])
            }
        }
        return s
    }
}
, function(t, e, n) {
    "use strict";
    function r(t, e) {
        return 1 === t.nodeType && t.getAttribute(d) === String(e) || 8 === t.nodeType && t.nodeValue === " react-text: " + e + " " || 8 === t.nodeType && t.nodeValue === " react-empty: " + e + " "
    }
    function o(t) {
        for (var e; e = t._renderedComponent; )
            t = e;
        return t
    }
    function i(t, e) {
        var n = o(t);
        n._hostNode = e,
        e[g] = n
    }
    function a(t) {
        var e = t._hostNode;
        e && (delete e[g],
        t._hostNode = null)
    }
    function u(t, e) {
        if (!(t._flags & v.hasCachedChildNodes)) {
            var n = t._renderedChildren
              , a = e.firstChild;
            t: for (var u in n)
                if (n.hasOwnProperty(u)) {
                    var s = n[u]
                      , c = o(s)._domID;
                    if (0 !== c) {
                        for (; null !== a; a = a.nextSibling)
                            if (r(a, c)) {
                                i(s, a);
                                continue t
                            }
                        f("32", c)
                    }
                }
            t._flags |= v.hasCachedChildNodes
        }
    }
    function s(t) {
        if (t[g])
            return t[g];
        for (var e = []; !t[g]; ) {
            if (e.push(t),
            !t.parentNode)
                return null;
            t = t.parentNode
        }
        for (var n, r; t && (r = t[g]); t = e.pop())
            n = r,
            e.length && u(r, t);
        return n
    }
    function c(t) {
        var e = s(t);
        return null != e && e._hostNode === t ? e : null
    }
    function l(t) {
        if (void 0 === t._hostNode ? f("33") : void 0,
        t._hostNode)
            return t._hostNode;
        for (var e = []; !t._hostNode; )
            e.push(t),
            t._hostParent ? void 0 : f("34"),
            t = t._hostParent;
        for (; e.length; t = e.pop())
            u(t, t._hostNode);
        return t._hostNode
    }
    var f = n(2)
      , p = n(20)
      , h = n(94)
      , d = (n(1),
    p.ID_ATTRIBUTE_NAME)
      , v = h
      , g = "__reactInternalInstance$" + Math.random().toString(36).slice(2)
      , y = {
        getClosestInstanceFromNode: s,
        getInstanceFromNode: c,
        getNodeFromInstance: l,
        precacheChildNodes: u,
        precacheNode: i,
        uncacheNode: a
    };
    t.exports = y
}
, function(t, e) {
    "use strict";
    var n = !("undefined" == typeof window || !window.document || !window.document.createElement)
      , r = {
        canUseDOM: n,
        canUseWorkers: "undefined" != typeof Worker,
        canUseEventListeners: n && !(!window.addEventListener && !window.attachEvent),
        canUseViewport: n && !!window.screen,
        isInWorker: !n
    };
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    var r = null;
    t.exports = {
        debugTool: r
    }
}
, function(t, e) {
    "use strict";
    function n(t) {
        return function() {
            return t
        }
    }
    var r = function() {};
    r.thatReturns = n,
    r.thatReturnsFalse = n(!1),
    r.thatReturnsTrue = n(!0),
    r.thatReturnsNull = n(null),
    r.thatReturnsThis = function() {
        return this
    }
    ,
    r.thatReturnsArgument = function(t) {
        return t
    }
    ,
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    function r() {
        T.ReactReconcileTransaction && w ? void 0 : l("123")
    }
    function o() {
        this.reinitializeTransaction(),
        this.dirtyComponentsLength = null,
        this.callbackQueue = p.getPooled(),
        this.reconcileTransaction = T.ReactReconcileTransaction.getPooled(!0)
    }
    function i(t, e, n, o, i, a) {
        return r(),
        w.batchedUpdates(t, e, n, o, i, a)
    }
    function a(t, e) {
        return t._mountOrder - e._mountOrder
    }
    function u(t) {
        var e = t.dirtyComponentsLength;
        e !== m.length ? l("124", e, m.length) : void 0,
        m.sort(a),
        b++;
        for (var n = 0; n < e; n++) {
            var r = m[n]
              , o = r._pendingCallbacks;
            r._pendingCallbacks = null;
            var i;
            if (d.logTopLevelRenders) {
                var u = r;
                r._currentElement.type.isReactTopLevelWrapper && (u = r._renderedComponent),
                i = "React update: " + u.getName(),
                console.time(i)
            }
            if (v.performUpdateIfNecessary(r, t.reconcileTransaction, b),
            i && console.timeEnd(i),
            o)
                for (var s = 0; s < o.length; s++)
                    t.callbackQueue.enqueue(o[s], r.getPublicInstance())
        }
    }
    function s(t) {
        return r(),
        w.isBatchingUpdates ? (m.push(t),
        void (null == t._updateBatchNumber && (t._updateBatchNumber = b + 1))) : void w.batchedUpdates(s, t)
    }
    function c(t, e) {
        y(w.isBatchingUpdates, "ReactUpdates.asap: Can't enqueue an asap callback in a context whereupdates are not being batched."),
        x.enqueue(t, e),
        _ = !0
    }
    var l = n(2)
      , f = n(4)
      , p = n(92)
      , h = n(15)
      , d = n(97)
      , v = n(21)
      , g = n(39)
      , y = n(1)
      , m = []
      , b = 0
      , x = p.getPooled()
      , _ = !1
      , w = null
      , C = {
        initialize: function() {
            this.dirtyComponentsLength = m.length
        },
        close: function() {
            this.dirtyComponentsLength !== m.length ? (m.splice(0, this.dirtyComponentsLength),
            k()) : m.length = 0
        }
    }
      , E = {
        initialize: function() {
            this.callbackQueue.reset()
        },
        close: function() {
            this.callbackQueue.notifyAll()
        }
    }
      , M = [C, E];
    f(o.prototype, g, {
        getTransactionWrappers: function() {
            return M
        },
        destructor: function() {
            this.dirtyComponentsLength = null,
            p.release(this.callbackQueue),
            this.callbackQueue = null,
            T.ReactReconcileTransaction.release(this.reconcileTransaction),
            this.reconcileTransaction = null
        },
        perform: function(t, e, n) {
            return g.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, t, e, n)
        }
    }),
    h.addPoolingTo(o);
    var k = function() {
        for (; m.length || _; ) {
            if (m.length) {
                var t = o.getPooled();
                t.perform(u, null, t),
                o.release(t)
            }
            if (_) {
                _ = !1;
                var e = x;
                x = p.getPooled(),
                e.notifyAll(),
                p.release(e)
            }
        }
    }
      , S = {
        injectReconcileTransaction: function(t) {
            t ? void 0 : l("126"),
            T.ReactReconcileTransaction = t
        },
        injectBatchingStrategy: function(t) {
            t ? void 0 : l("127"),
            "function" != typeof t.batchedUpdates ? l("128") : void 0,
            "boolean" != typeof t.isBatchingUpdates ? l("129") : void 0,
            w = t
        }
    }
      , T = {
        ReactReconcileTransaction: null,
        batchedUpdates: i,
        enqueueUpdate: s,
        flushBatchedUpdates: k,
        injection: S,
        asap: c
    };
    t.exports = T
}
, function(t, e, n) {
    var r = n(78)
      , o = "object" == typeof self && self && self.Object === Object && self
      , i = r || o || Function("return this")();
    t.exports = i
}
, function(t, e) {
    var n = Array.isArray;
    t.exports = n
}
, function(t, e, n) {
    "use strict";
    function r(t, e, n, r) {
        this.dispatchConfig = t,
        this._targetInst = e,
        this.nativeEvent = n;
        var o = this.constructor.Interface;
        for (var i in o)
            if (o.hasOwnProperty(i)) {
                var u = o[i];
                u ? this[i] = u(n) : "target" === i ? this.target = r : this[i] = n[i]
            }
        var s = null != n.defaultPrevented ? n.defaultPrevented : n.returnValue === !1;
        return s ? this.isDefaultPrevented = a.thatReturnsTrue : this.isDefaultPrevented = a.thatReturnsFalse,
        this.isPropagationStopped = a.thatReturnsFalse,
        this
    }
    var o = n(4)
      , i = n(15)
      , a = n(8)
      , u = (n(3),
    "function" == typeof Proxy,
    ["dispatchConfig", "_targetInst", "nativeEvent", "isDefaultPrevented", "isPropagationStopped", "_dispatchListeners", "_dispatchInstances"])
      , s = {
        type: null,
        target: null,
        currentTarget: a.thatReturnsNull,
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp: function(t) {
            return t.timeStamp || Date.now()
        },
        defaultPrevented: null,
        isTrusted: null
    };
    o(r.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var t = this.nativeEvent;
            t && (t.preventDefault ? t.preventDefault() : "unknown" != typeof t.returnValue && (t.returnValue = !1),
            this.isDefaultPrevented = a.thatReturnsTrue)
        },
        stopPropagation: function() {
            var t = this.nativeEvent;
            t && (t.stopPropagation ? t.stopPropagation() : "unknown" != typeof t.cancelBubble && (t.cancelBubble = !0),
            this.isPropagationStopped = a.thatReturnsTrue)
        },
        persist: function() {
            this.isPersistent = a.thatReturnsTrue
        },
        isPersistent: a.thatReturnsFalse,
        destructor: function() {
            var t = this.constructor.Interface;
            for (var e in t)
                this[e] = null;
            for (var n = 0; n < u.length; n++)
                this[u[n]] = null
        }
    }),
    r.Interface = s,
    r.augmentClass = function(t, e) {
        var n = this
          , r = function() {};
        r.prototype = n.prototype;
        var a = new r;
        o(a, t.prototype),
        t.prototype = a,
        t.prototype.constructor = t,
        t.Interface = o({}, n.Interface, e),
        t.augmentClass = n.augmentClass,
        i.addPoolingTo(t, i.fourArgumentPooler)
    }
    ,
    i.addPoolingTo(r, i.fourArgumentPooler),
    t.exports = r
}
, function(t, e) {
    "use strict";
    var n = {
        current: null
    };
    t.exports = n
}
, function(t, e, n) {
    function r(t, e) {
        var n = i(t, e);
        return o(n) ? n : void 0
    }
    var o = n(172)
      , i = n(195);
    t.exports = r
}
, [326, 2], function(t, e, n) {
    function r(t) {
        return null == t ? void 0 === t ? s : u : c && c in Object(t) ? i(t) : a(t)
    }
    var o = n(32)
      , i = n(192)
      , a = n(219)
      , u = "[object Null]"
      , s = "[object Undefined]"
      , c = o ? o.toStringTag : void 0;
    t.exports = r
}
, function(t, e) {
    function n(t) {
        return null != t && "object" == typeof t
    }
    t.exports = n
}
, function(t, e, n) {
    (function() {
        "use strict";
        var e = {
            "@@functional/placeholder": !0
        }
          , n = function(t, e) {
            switch (t) {
            case 0:
                return function() {
                    return e.apply(this, arguments)
                }
                ;
            case 1:
                return function(t) {
                    return e.apply(this, arguments)
                }
                ;
            case 2:
                return function(t, n) {
                    return e.apply(this, arguments)
                }
                ;
            case 3:
                return function(t, n, r) {
                    return e.apply(this, arguments)
                }
                ;
            case 4:
                return function(t, n, r, o) {
                    return e.apply(this, arguments)
                }
                ;
            case 5:
                return function(t, n, r, o, i) {
                    return e.apply(this, arguments)
                }
                ;
            case 6:
                return function(t, n, r, o, i, a) {
                    return e.apply(this, arguments)
                }
                ;
            case 7:
                return function(t, n, r, o, i, a, u) {
                    return e.apply(this, arguments)
                }
                ;
            case 8:
                return function(t, n, r, o, i, a, u, s) {
                    return e.apply(this, arguments)
                }
                ;
            case 9:
                return function(t, n, r, o, i, a, u, s, c) {
                    return e.apply(this, arguments)
                }
                ;
            case 10:
                return function(t, n, r, o, i, a, u, s, c, l) {
                    return e.apply(this, arguments)
                }
                ;
            default:
                throw new Error("First argument to _arity must be a non-negative integer no greater than ten")
            }
        }
          , r = function(t) {
            return new RegExp(t.source,(t.global ? "g" : "") + (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.sticky ? "y" : "") + (t.unicode ? "u" : ""))
        }
          , o = function(t) {
            return function() {
                return !t.apply(this, arguments)
            }
        }
          , i = function(t, e) {
            t = t || [],
            e = e || [];
            var n, r = t.length, o = e.length, i = [];
            for (n = 0; n < r; )
                i[i.length] = t[n],
                n += 1;
            for (n = 0; n < o; )
                i[i.length] = e[n],
                n += 1;
            return i
        }
          , a = function(t, e, n) {
            for (var r = 0, o = n.length; r < o; ) {
                if (t(e, n[r]))
                    return !0;
                r += 1
            }
            return !1
        }
          , u = function(t) {
            return function e(n) {
                return 0 === arguments.length ? e : null != n && n["@@functional/placeholder"] === !0 ? e : t.apply(this, arguments)
            }
        }
          , s = function(t) {
            return function e(n, r) {
                var o = arguments.length;
                return 0 === o ? e : 1 === o && null != n && n["@@functional/placeholder"] === !0 ? e : 1 === o ? u(function(e) {
                    return t(n, e)
                }) : 2 === o && null != n && n["@@functional/placeholder"] === !0 && null != r && r["@@functional/placeholder"] === !0 ? e : 2 === o && null != n && n["@@functional/placeholder"] === !0 ? u(function(e) {
                    return t(e, r)
                }) : 2 === o && null != r && r["@@functional/placeholder"] === !0 ? u(function(e) {
                    return t(n, e)
                }) : t(n, r)
            }
        }
          , c = function(t) {
            return function e(n, r, o) {
                var i = arguments.length;
                return 0 === i ? e : 1 === i && null != n && n["@@functional/placeholder"] === !0 ? e : 1 === i ? s(function(e, r) {
                    return t(n, e, r)
                }) : 2 === i && null != n && n["@@functional/placeholder"] === !0 && null != r && r["@@functional/placeholder"] === !0 ? e : 2 === i && null != n && n["@@functional/placeholder"] === !0 ? s(function(e, n) {
                    return t(e, r, n)
                }) : 2 === i && null != r && r["@@functional/placeholder"] === !0 ? s(function(e, r) {
                    return t(n, e, r)
                }) : 2 === i ? u(function(e) {
                    return t(n, r, e)
                }) : 3 === i && null != n && n["@@functional/placeholder"] === !0 && null != r && r["@@functional/placeholder"] === !0 && null != o && o["@@functional/placeholder"] === !0 ? e : 3 === i && null != n && n["@@functional/placeholder"] === !0 && null != r && r["@@functional/placeholder"] === !0 ? s(function(e, n) {
                    return t(e, n, o)
                }) : 3 === i && null != n && n["@@functional/placeholder"] === !0 && null != o && o["@@functional/placeholder"] === !0 ? s(function(e, n) {
                    return t(e, r, n)
                }) : 3 === i && null != r && r["@@functional/placeholder"] === !0 && null != o && o["@@functional/placeholder"] === !0 ? s(function(e, r) {
                    return t(n, e, r)
                }) : 3 === i && null != n && n["@@functional/placeholder"] === !0 ? u(function(e) {
                    return t(e, r, o)
                }) : 3 === i && null != r && r["@@functional/placeholder"] === !0 ? u(function(e) {
                    return t(n, e, o)
                }) : 3 === i && null != o && o["@@functional/placeholder"] === !0 ? u(function(e) {
                    return t(n, r, e)
                }) : t(n, r, o)
            }
        }
          , l = function t(e, r, o) {
            return function() {
                for (var i = [], a = 0, u = e, s = 0; s < r.length || a < arguments.length; ) {
                    var c;
                    s < r.length && (null == r[s] || r[s]["@@functional/placeholder"] !== !0 || a >= arguments.length) ? c = r[s] : (c = arguments[a],
                    a += 1),
                    i[s] = c,
                    null != c && c["@@functional/placeholder"] === !0 || (u -= 1),
                    s += 1
                }
                return u <= 0 ? o.apply(this, i) : n(u, t(e, i, o))
            }
        }
          , f = function(t, e) {
            for (var n = 0, r = e.length, o = []; n < r; )
                t(e[n]) && (o[o.length] = e[n]),
                n += 1;
            return o
        }
          , p = function(t) {
            return {
                "@@transducer/value": t,
                "@@transducer/reduced": !0
            }
        }
          , h = function(t) {
            return function(e) {
                return f(function(t) {
                    return "function" == typeof e[t]
                }, t(e))
            }
        }
          , d = function(t, e) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
          , v = function(t) {
            return t
        }
          , g = Array.isArray || function(t) {
            return null != t && t.length >= 0 && "[object Array]" === Object.prototype.toString.call(t)
        }
          , y = Number.isInteger || function(t) {
            return t << 0 === t
        }
          , m = function(t) {
            return "[object Number]" === Object.prototype.toString.call(t)
        }
          , b = function(t) {
            return "[object String]" === Object.prototype.toString.call(t)
        }
          , x = function(t) {
            return "function" == typeof t["@@transducer/step"]
        }
          , _ = function(t, e) {
            for (var n = 0, r = e.length, o = Array(r); n < r; )
                o[n] = t(e[n]),
                n += 1;
            return o
        }
          , w = function(t, e) {
            return function() {
                return e.call(this, t.apply(this, arguments))
            }
        }
          , C = function(t, e) {
            return function() {
                var n = this;
                return t.apply(n, arguments).then(function(t) {
                    return e.call(n, t)
                })
            }
        }
          , E = function(t) {
            return '"' + t.replace(/"/g, '\\"') + '"'
        }
          , M = function(t) {
            return t && t["@@transducer/reduced"] ? t : {
                "@@transducer/value": t,
                "@@transducer/reduced": !0
            }
        }
          , k = function t(e, n, r) {
            switch (arguments.length) {
            case 1:
                return t(e, 0, e.length);
            case 2:
                return t(e, n, e.length);
            default:
                for (var o = [], i = 0, a = Math.max(0, Math.min(e.length, r) - n); i < a; )
                    o[i] = e[n + i],
                    i += 1;
                return o
            }
        }
          , S = function() {
            var t = function(t) {
                return (t < 10 ? "0" : "") + t
            };
            return "function" == typeof Date.prototype.toISOString ? function(t) {
                return t.toISOString()
            }
            : function(e) {
                return e.getUTCFullYear() + "-" + t(e.getUTCMonth() + 1) + "-" + t(e.getUTCDate()) + "T" + t(e.getUTCHours()) + ":" + t(e.getUTCMinutes()) + ":" + t(e.getUTCSeconds()) + "." + (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z"
            }
        }()
          , T = function() {
            function t(t, e) {
                this.xf = e,
                this.pred = t,
                this.lastValue = void 0,
                this.seenFirstValue = !1
            }
            return t.prototype["@@transducer/init"] = function() {
                return this.xf["@@transducer/init"]()
            }
            ,
            t.prototype["@@transducer/result"] = function(t) {
                return this.xf["@@transducer/result"](t)
            }
            ,
            t.prototype["@@transducer/step"] = function(t, e) {
                var n = !1;
                return this.seenFirstValue ? this.pred(this.lastValue, e) && (n = !0) : this.seenFirstValue = !0,
                this.lastValue = e,
                n ? t : this.xf["@@transducer/step"](t, e)
            }
            ,
            s(function(e, n) {
                return new t(e,n)
            })
        }()
          , N = {
            init: function() {
                return this.xf["@@transducer/init"]()
            },
            result: function(t) {
                return this.xf["@@transducer/result"](t)
            }
        }
          , A = function() {
            function t(t, e) {
                this.xf = e,
                this.f = t
            }
            return t.prototype["@@transducer/init"] = N.init,
            t.prototype["@@transducer/result"] = N.result,
            t.prototype["@@transducer/step"] = function(t, e) {
                return this.f(e) ? this.xf["@@transducer/step"](t, e) : t
            }
            ,
            s(function(e, n) {
                return new t(e,n)
            })
        }()
          , O = function() {
            function t(t, e) {
                this.xf = e,
                this.f = t,
                this.found = !1
            }
            return t.prototype["@@transducer/init"] = N.init,
            t.prototype["@@transducer/result"] = function(t) {
                return this.found || (t = this.xf["@@transducer/step"](t, void 0)),
                this.xf["@@transducer/result"](t)
            }
            ,
            t.prototype["@@transducer/step"] = function(t, e) {
                return this.f(e) && (this.found = !0,
                t = M(this.xf["@@transducer/step"](t, e))),
                t
            }
            ,
            s(function(e, n) {
                return new t(e,n)
            })
        }()
          , P = function() {
            function t(t, e) {
                this.xf = e,
                this.f = t,
                this.idx = -1,
                this.found = !1
            }
            return t.prototype["@@transducer/init"] = N.init,
            t.prototype["@@transducer/result"] = function(t) {
                return this.found || (t = this.xf["@@transducer/step"](t, -1)),
                this.xf["@@transducer/result"](t)
            }
            ,
            t.prototype["@@transducer/step"] = function(t, e) {
                return this.idx += 1,
                this.f(e) && (this.found = !0,
                t = M(this.xf["@@transducer/step"](t, this.idx))),
                t
            }
            ,
            s(function(e, n) {
                return new t(e,n)
            })
        }()
          , j = function() {
            function t(t, e) {
                this.xf = e,
                this.f = t
            }
            return t.prototype["@@transducer/init"] = N.init,
            t.prototype["@@transducer/result"] = function(t) {
                return this.xf["@@transducer/result"](this.xf["@@transducer/step"](t, this.last))
            }
            ,
            t.prototype["@@transducer/step"] = function(t, e) {
                return this.f(e) && (this.last = e),
                t
            }
            ,
            s(function(e, n) {
                return new t(e,n)
            })
        }()
          , D = function() {
            function t(t, e) {
                this.xf = e,
                this.f = t,
                this.idx = -1,
                this.lastIdx = -1
            }
            return t.prototype["@@transducer/init"] = N.init,
            t.prototype["@@transducer/result"] = function(t) {
                return this.xf["@@transducer/result"](this.xf["@@transducer/step"](t, this.lastIdx))
            }
            ,
            t.prototype["@@transducer/step"] = function(t, e) {
                return this.idx += 1,
                this.f(e) && (this.lastIdx = this.idx),
                t
            }
            ,
            s(function(e, n) {
                return new t(e,n)
            })
        }()
          , I = function() {
            function t(t, e) {
                this.xf = e,
                this.f = t
            }
            return t.prototype["@@transducer/init"] = N.init,
            t.prototype["@@transducer/result"] = N.result,
            t.prototype["@@transducer/step"] = function(t, e) {
                return this.xf["@@transducer/step"](t, this.f(e))
            }
            ,
            s(function(e, n) {
                return new t(e,n)
            })
        }()
          , R = function() {
            function t(t, e) {
                this.xf = e,
                this.n = t
            }
            return t.prototype["@@transducer/init"] = N.init,
            t.prototype["@@transducer/result"] = N.result,
            t.prototype["@@transducer/step"] = function(t, e) {
                return 0 === this.n ? M(t) : (this.n -= 1,
                this.xf["@@transducer/step"](t, e))
            }
            ,
            s(function(e, n) {
                return new t(e,n)
            })
        }()
          , L = function() {
            function t(t, e) {
                this.xf = e,
                this.f = t
            }
            return t.prototype["@@transducer/init"] = N.init,
            t.prototype["@@transducer/result"] = N.result,
            t.prototype["@@transducer/step"] = function(t, e) {
                return this.f(e) ? this.xf["@@transducer/step"](t, e) : M(t)
            }
            ,
            s(function(e, n) {
                return new t(e,n)
            })
        }()
          , U = function() {
            function t(t) {
                this.f = t
            }
            return t.prototype["@@transducer/init"] = function() {
                throw new Error("init not implemented on XWrap")
            }
            ,
            t.prototype["@@transducer/result"] = function(t) {
                return t
            }
            ,
            t.prototype["@@transducer/step"] = function(t, e) {
                return this.f(t, e)
            }
            ,
            function(e) {
                return new t(e)
            }
        }()
          , F = s(function(t, e) {
            return t + e
        })
          , q = c(function(t, e, n) {
            if (e >= n.length || e < -n.length)
                return n;
            var r = e < 0 ? n.length : 0
              , o = r + e
              , a = i(n);
            return a[o] = t(n[o]),
            a
        })
          , H = u(function(t) {
            return function() {
                return t
            }
        })
          , B = s(function(t, e) {
            for (var n = 0, r = e.length - (t - 1), o = new Array(r >= 0 ? r : 0); n < r; )
                o[n] = k(e, n, n + t),
                n += 1;
            return o
        })
          , z = s(function(t, e) {
            return i(e, [t])
        })
          , W = s(function(t, e) {
            return t.apply(this, e)
        })
          , V = c(function(t, e, n) {
            var r = {};
            for (var o in n)
                r[o] = n[o];
            return r[t] = e,
            r
        })
          , $ = c(function t(e, n, r) {
            switch (e.length) {
            case 0:
                return r;
            case 1:
                return V(e[0], n, r);
            default:
                return V(e[0], t(k(e, 1), n, Object(r[e[0]])), r)
            }
        })
          , Y = s(function(t, e) {
            return n(t.length, function() {
                return t.apply(e, arguments)
            })
        })
          , K = s(function(t, e) {
            return function() {
                return t.apply(this, arguments) && e.apply(this, arguments)
            }
        })
          , X = u(function(t) {
            return function(e, n) {
                return t(e, n) ? -1 : t(n, e) ? 1 : 0
            }
        })
          , J = u(o)
          , G = u(function(t) {
            return function() {
                for (var e = 0; e < t.length; ) {
                    if (t[e][0].apply(this, arguments))
                        return t[e][1].apply(this, arguments);
                    e += 1
                }
            }
        })
          , Q = c(a)
          , Z = s(function(t, e) {
            for (var n = {}, r = e.length, o = 0; o < r; ) {
                var i = t(e[o]);
                n[i] = (d(i, n) ? n[i] : 0) + 1,
                o += 1
            }
            return n
        })
          , tt = s(function(t, e) {
            var n = {};
            return n[t] = e,
            n
        })
          , et = s(function(t, e) {
            return 1 === t ? u(e) : n(t, l(t, [], e))
        })
          , nt = F(-1)
          , rt = s(function(t, e) {
            return null == e ? t : e
        })
          , ot = c(function(t, e, n) {
            for (var r = [], o = 0, i = e.length, a = Q(t); o < i; )
                a(e[o], n) || a(e[o], r) || (r[r.length] = e[o]),
                o += 1;
            return r
        })
          , it = s(function(t, e) {
            var n = {};
            for (var r in e)
                r !== t && (n[r] = e[r]);
            return n
        })
          , at = s(function t(e, n) {
            switch (e.length) {
            case 0:
                return n;
            case 1:
                return it(e[0], n);
            default:
                var r = e[0]
                  , o = k(e, 1);
                return null == n[r] ? n : V(r, t(o, n[r]), n)
            }
        })
          , ut = s(function(t, e) {
            return t / e
        })
          , st = s(function(t, e) {
            for (var n = e.length - 1; n >= 0 && t(e[n]); )
                n -= 1;
            return k(e, 0, n + 1)
        })
          , ct = s(function(t, e) {
            return function() {
                return t.apply(this, arguments) || e.apply(this, arguments)
            }
        })
          , lt = u(function(t) {
            if (null != t && "function" == typeof t.empty)
                return t.empty();
            if (null != t && null != typeof t.constructor && "function" == typeof t.constructor.empty)
                return t.constructor.empty();
            switch (Object.prototype.toString.call(t)) {
            case "[object Array]":
                return [];
            case "[object Object]":
                return {};
            case "[object String]":
                return ""
            }
        })
          , ft = s(function t(e, n) {
            var r, o, i, a = {};
            for (o in n)
                r = e[o],
                i = typeof r,
                a[o] = "function" === i ? r(n[o]) : "object" === i ? t(e[o], n[o]) : n[o];
            return a
        })
          , pt = u(function(t) {
            for (var e = 0, n = t.length, r = {}; e < n; )
                g(t[e]) && t[e].length && (r[t[e][0]] = t[e][1]),
                e += 1;
            return r
        })
          , ht = s(function(t, e) {
            return t > e
        })
          , dt = s(function(t, e) {
            return t >= e
        })
          , vt = s(d)
          , gt = s(function(t, e) {
            return t in e
        })
          , yt = s(function(t, e) {
            return t === e ? 0 !== t || 1 / t === 1 / e : t !== t && e !== e
        })
          , mt = u(v)
          , bt = c(function(t, e, n) {
            return et(Math.max(t.length, e.length, n.length), function() {
                return t.apply(this, arguments) ? e.apply(this, arguments) : n.apply(this, arguments)
            })
        })
          , xt = F(1)
          , _t = c(function(t, e, n) {
            t = t < n.length && t >= 0 ? t : n.length;
            var r = k(n);
            return r.splice(t, 0, e),
            r
        })
          , wt = c(function(t, e, n) {
            return t = t < n.length && t >= 0 ? t : n.length,
            i(i(k(n, 0, t), e), k(n, t))
        })
          , Ct = s(function(t, e) {
            return null != e && e.constructor === t || e instanceof t
        })
          , Et = u(function(t) {
            return !!g(t) || !!t && ("object" == typeof t && (!(t instanceof String) && (1 === t.nodeType ? !!t.length : 0 === t.length || t.length > 0 && (t.hasOwnProperty(0) && t.hasOwnProperty(t.length - 1)))))
        })
          , Mt = u(function(t) {
            return 0 === Object(t).length
        })
          , kt = u(function(t) {
            return null == t
        })
          , St = function() {
            var t = !{
                toString: null
            }.propertyIsEnumerable("toString")
              , e = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"]
              , n = function(t, e) {
                for (var n = 0; n < t.length; ) {
                    if (t[n] === e)
                        return !0;
                    n += 1
                }
                return !1
            };
            return u("function" == typeof Object.keys ? function(t) {
                return Object(t) !== t ? [] : Object.keys(t)
            }
            : function(r) {
                if (Object(r) !== r)
                    return [];
                var o, i, a = [];
                for (o in r)
                    d(o, r) && (a[a.length] = o);
                if (t)
                    for (i = e.length - 1; i >= 0; )
                        o = e[i],
                        d(o, r) && !n(a, o) && (a[a.length] = o),
                        i -= 1;
                return a
            }
            )
        }()
          , Tt = u(function(t) {
            var e, n = [];
            for (e in t)
                n[n.length] = e;
            return n
        })
          , Nt = u(function(t) {
            return null != t && Ct(Number, t.length) ? t.length : NaN
        })
          , At = s(function(t, e) {
            return t < e
        })
          , Ot = s(function(t, e) {
            return t <= e
        })
          , Pt = c(function(t, e, n) {
            for (var r = 0, o = n.length, i = [], a = [e]; r < o; )
                a = t(a[0], n[r]),
                i[r] = a[1],
                r += 1;
            return [a[0], i]
        })
          , jt = c(function(t, e, n) {
            for (var r = n.length - 1, o = [], i = [e]; r >= 0; )
                i = t(i[0], n[r]),
                o[r] = i[1],
                r -= 1;
            return [i[0], o]
        })
          , Dt = s(function(t, e) {
            return e.match(t) || []
        })
          , It = s(function(t, e) {
            return y(t) ? !y(e) || e < 1 ? NaN : (t % e + e) % e : NaN
        })
          , Rt = s(function(t, e) {
            return e > t ? e : t
        })
          , Lt = c(function(t, e, n) {
            return t(n) > t(e) ? n : e
        })
          , Ut = s(function(t, e) {
            for (var n = {}, r = St(t), o = 0; o < r.length; )
                n[r[o]] = t[r[o]],
                o += 1;
            for (r = St(e),
            o = 0; o < r.length; )
                n[r[o]] = e[r[o]],
                o += 1;
            return n
        })
          , Ft = s(function(t, e) {
            return e < t ? e : t
        })
          , qt = c(function(t, e, n) {
            return t(n) < t(e) ? n : e
        })
          , Ht = s(function(t, e) {
            return t % e
        })
          , Bt = s(function(t, e) {
            return t * e
        })
          , zt = s(function(t, e) {
            switch (t) {
            case 0:
                return function() {
                    return e.call(this)
                }
                ;
            case 1:
                return function(t) {
                    return e.call(this, t)
                }
                ;
            case 2:
                return function(t, n) {
                    return e.call(this, t, n)
                }
                ;
            case 3:
                return function(t, n, r) {
                    return e.call(this, t, n, r)
                }
                ;
            case 4:
                return function(t, n, r, o) {
                    return e.call(this, t, n, r, o)
                }
                ;
            case 5:
                return function(t, n, r, o, i) {
                    return e.call(this, t, n, r, o, i)
                }
                ;
            case 6:
                return function(t, n, r, o, i, a) {
                    return e.call(this, t, n, r, o, i, a)
                }
                ;
            case 7:
                return function(t, n, r, o, i, a, u) {
                    return e.call(this, t, n, r, o, i, a, u)
                }
                ;
            case 8:
                return function(t, n, r, o, i, a, u, s) {
                    return e.call(this, t, n, r, o, i, a, u, s)
                }
                ;
            case 9:
                return function(t, n, r, o, i, a, u, s, c) {
                    return e.call(this, t, n, r, o, i, a, u, s, c)
                }
                ;
            case 10:
                return function(t, n, r, o, i, a, u, s, c, l) {
                    return e.call(this, t, n, r, o, i, a, u, s, c, l)
                }
                ;
            default:
                throw new Error("First argument to nAry must be a non-negative integer no greater than ten")
            }
        })
          , Wt = u(function(t) {
            return -t
        })
          , Vt = u(function(t) {
            return !t
        })
          , $t = s(function(t, e) {
            var n = t < 0 ? e.length + t : t;
            return b(e) ? e.charAt(n) : e[n]
        })
          , Yt = u(function(t) {
            return function() {
                return $t(t, arguments)
            }
        })
          , Kt = s(function(t, e) {
            return e.charAt(t < 0 ? e.length + t : t)
        })
          , Xt = s(function(t, e) {
            return e.charCodeAt(t < 0 ? e.length + t : t)
        })
          , Jt = u(function(t) {
            return [t]
        })
          , Gt = u(function(t) {
            var e, n = !1;
            return function() {
                return n ? e : (n = !0,
                e = t.apply(this, arguments))
            }
        })
          , Qt = function() {
            var t = function(e) {
                return {
                    value: e,
                    map: function(n) {
                        return t(n(e))
                    }
                }
            };
            return c(function(e, n, r) {
                return e(function(e) {
                    return t(n(e))
                })(r).value
            })
        }()
          , Zt = s(function(t, e) {
            if (null != e) {
                for (var n = e, r = 0, o = t.length; r < o && null != n; r += 1)
                    n = n[t[r]];
                return n
            }
        })
          , te = s(function(t, e) {
            for (var n = {}, r = 0; r < t.length; )
                t[r]in e && (n[t[r]] = e[t[r]]),
                r += 1;
            return n
        })
          , ee = s(function(t, e) {
            for (var n = {}, r = 0, o = t.length; r < o; ) {
                var i = t[r];
                n[i] = e[i],
                r += 1
            }
            return n
        })
          , ne = s(function(t, e) {
            var n = {};
            for (var r in e)
                t(e[r], r, e) && (n[r] = e[r]);
            return n
        })
          , re = s(function(t, e) {
            return i([t], e)
        })
          , oe = s(function(t, e) {
            return e[t]
        })
          , ie = c(function(t, e, n) {
            return null != n && d(e, n) ? n[e] : t
        })
          , ae = c(function(t, e, n) {
            return t(n[e])
        })
          , ue = s(function(t, e) {
            for (var n = t.length, r = [], o = 0; o < n; )
                r[o] = e[t[o]],
                o += 1;
            return r
        })
          , se = s(function(t, e) {
            if (!m(t) || !m(e))
                throw new TypeError("Both arguments to range must be numbers");
            for (var n = [], r = t; r < e; )
                n.push(r),
                r += 1;
            return n
        })
          , ce = c(function(t, e, n) {
            for (var r = n.length - 1; r >= 0; )
                e = t(e, n[r]),
                r -= 1;
            return e
        })
          , le = u(M)
          , fe = c(function(t, e, n) {
            return i(k(n, 0, Math.min(t, n.length)), k(n, Math.min(n.length, t + e)))
        })
          , pe = c(function(t, e, n) {
            return n.replace(t, e)
        })
          , he = u(function(t) {
            return k(t).reverse()
        })
          , de = c(function(t, e, n) {
            for (var r = 0, o = n.length, i = [e]; r < o; )
                e = t(e, n[r]),
                i[r + 1] = e,
                r += 1;
            return i
        })
          , ve = c(function(t, e, n) {
            return Qt(t, H(e), n)
        })
          , ge = s(function(t, e) {
            return k(e).sort(t)
        })
          , ye = s(function(t, e) {
            return k(e).sort(function(e, n) {
                var r = t(e)
                  , o = t(n);
                return r < o ? -1 : r > o ? 1 : 0
            })
        })
          , me = s(function(t, e) {
            return t - e
        })
          , be = s(function(t, e) {
            for (var n = e.length - 1; n >= 0 && t(e[n]); )
                n -= 1;
            return k(e, n + 1, 1 / 0)
        })
          , xe = s(function(t, e) {
            return t(e),
            e
        })
          , _e = s(function(t, e) {
            return r(t).test(e)
        })
          , we = s(function(t, e) {
            for (var n = Number(e), r = new Array(n), o = 0; o < n; )
                r[o] = t(o),
                o += 1;
            return r
        })
          , Ce = u(function(t) {
            var e = [];
            for (var n in t)
                d(n, t) && (e[e.length] = [n, t[n]]);
            return e
        })
          , Ee = u(function(t) {
            var e = [];
            for (var n in t)
                e[e.length] = [n, t[n]];
            return e
        })
          , Me = function() {
            var t = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
              , e = "​"
              , n = "function" == typeof String.prototype.trim;
            return u(n && !t.trim() && e.trim() ? function(t) {
                return t.trim()
            }
            : function(e) {
                var n = new RegExp("^[" + t + "][" + t + "]*")
                  , r = new RegExp("[" + t + "][" + t + "]*$");
                return e.replace(n, "").replace(r, "")
            }
            )
        }()
          , ke = u(function(t) {
            return null === t ? "Null" : void 0 === t ? "Undefined" : Object.prototype.toString.call(t).slice(8, -1)
        })
          , Se = u(function(t) {
            return function() {
                return t(k(arguments))
            }
        })
          , Te = u(function(t) {
            return zt(1, t)
        })
          , Ne = s(function(t, e) {
            return et(t, function() {
                for (var n, r = 1, o = e, i = 0; r <= t && "function" == typeof o; )
                    n = r === t ? arguments.length : i + o.length,
                    o = o.apply(this, k(arguments, i, n)),
                    r += 1,
                    i = n;
                return o
            })
        })
          , Ae = s(function(t, e) {
            for (var n = t(e), r = []; n && n.length; )
                r[r.length] = n[0],
                n = t(n[1]);
            return r
        })
          , Oe = s(function(t, e) {
            for (var n, r = 0, o = e.length, i = []; r < o; )
                n = e[r],
                a(t, n, i) || (i[i.length] = n),
                r += 1;
            return i
        })
          , Pe = c(function(t, e, n) {
            return q(H(e), t, n)
        })
          , je = u(function(t) {
            for (var e = St(t), n = e.length, r = [], o = 0; o < n; )
                r[o] = t[e[o]],
                o += 1;
            return r
        })
          , De = u(function(t) {
            var e, n = [];
            for (e in t)
                n[n.length] = t[e];
            return n
        })
          , Ie = function() {
            var t = function(t) {
                return {
                    value: t,
                    map: function() {
                        return this
                    }
                }
            };
            return s(function(e, n) {
                return e(t)(n).value
            })
        }()
          , Re = s(function(t, e) {
            for (var n in t)
                if (d(n, t) && !t[n](e[n]))
                    return !1;
            return !0
        })
          , Le = s(function(t, e) {
            return et(t.length, function() {
                return e.apply(this, i([t], arguments))
            })
        })
          , Ue = s(function(t, e) {
            for (var n, r = 0, o = t.length, i = e.length, a = []; r < o; ) {
                for (n = 0; n < i; )
                    a[a.length] = [t[r], e[n]],
                    n += 1;
                r += 1
            }
            return a
        })
          , Fe = s(function(t, e) {
            for (var n = [], r = 0, o = Math.min(t.length, e.length); r < o; )
                n[r] = [t[r], e[r]],
                r += 1;
            return n
        })
          , qe = s(function(t, e) {
            for (var n = 0, r = t.length, o = {}; n < r; )
                o[t[n]] = e[n],
                n += 1;
            return o
        })
          , He = c(function(t, e, n) {
            for (var r = [], o = 0, i = Math.min(e.length, n.length); o < i; )
                r[o] = t(e[o], n[o]),
                o += 1;
            return r
        })
          , Be = H(!1)
          , ze = H(!0)
          , We = function(t, e) {
            return function() {
                var n = arguments.length;
                if (0 === n)
                    return e();
                var r = arguments[n - 1];
                return g(r) || "function" != typeof r[t] ? e.apply(this, arguments) : r[t].apply(r, k(arguments, 0, n - 1))
            }
        }
          , Ve = function t(e, n, o) {
            var i = function(r) {
                for (var i = n.length, a = 0; a < i; ) {
                    if (e === n[a])
                        return o[a];
                    a += 1
                }
                n[a + 1] = e,
                o[a + 1] = r;
                for (var u in e)
                    r[u] = t(e[u], n, o);
                return r
            };
            switch (ke(e)) {
            case "Object":
                return i({});
            case "Array":
                return i([]);
            case "Date":
                return new Date(e);
            case "RegExp":
                return r(e);
            default:
                return e
            }
        }
          , $e = function(t) {
            return function(e) {
                var r = k(arguments, 1);
                return n(Math.max(0, e.length - r.length), function() {
                    return e.apply(this, t(r, arguments))
                })
            }
        }
          , Ye = function(t, e, n) {
            return function() {
                var r = arguments.length;
                if (0 === r)
                    return n();
                var o = arguments[r - 1];
                if (!g(o)) {
                    var i = k(arguments, 0, r - 1);
                    if ("function" == typeof o[t])
                        return o[t].apply(o, i);
                    if (x(o)) {
                        var a = e.apply(null, i);
                        return a(o)
                    }
                }
                return n.apply(this, arguments)
            }
        }
          , Ke = function t(e, n, r, o) {
            var i = ke(e);
            if (i !== ke(n))
                return !1;
            if ("Boolean" === i || "Number" === i || "String" === i)
                return "object" == typeof e ? "object" == typeof n && yt(e.valueOf(), n.valueOf()) : yt(e, n);
            if (yt(e, n))
                return !0;
            if ("RegExp" === i)
                return e.source === n.source && e.global === n.global && e.ignoreCase === n.ignoreCase && e.multiline === n.multiline && e.sticky === n.sticky && e.unicode === n.unicode;
            if (Object(e) === e) {
                if ("Date" === i && e.getTime() !== n.getTime())
                    return !1;
                var a = St(e);
                if (a.length !== St(n).length)
                    return !1;
                for (var u = r.length - 1; u >= 0; ) {
                    if (r[u] === e)
                        return o[u] === n;
                    u -= 1
                }
                for (r[r.length] = e,
                o[o.length] = n,
                u = a.length - 1; u >= 0; ) {
                    var s = a[u];
                    if (!d(s, n) || !t(n[s], e[s], r, o))
                        return !1;
                    u -= 1
                }
                return r.pop(),
                o.pop(),
                !0
            }
            return !1
        }
          , Xe = function(t, e) {
            return null != e && !g(e) && "function" == typeof e[t]
        }
          , Je = function(t) {
            return function e(n) {
                for (var r, o, i, a = [], u = 0, s = n.length; u < s; ) {
                    if (Et(n[u]))
                        for (r = t ? e(n[u]) : n[u],
                        o = 0,
                        i = r.length; o < i; )
                            a[a.length] = r[o],
                            o += 1;
                    else
                        a[a.length] = n[u];
                    u += 1
                }
                return a
            }
        }
          , Ge = function() {
            function t(t, e, n) {
                for (var r = 0, o = n.length; r < o; ) {
                    if (e = t["@@transducer/step"](e, n[r]),
                    e && e["@@transducer/reduced"]) {
                        e = e["@@transducer/value"];
                        break
                    }
                    r += 1
                }
                return t["@@transducer/result"](e)
            }
            function e(t, e, n) {
                for (var r = n.next(); !r.done; ) {
                    if (e = t["@@transducer/step"](e, r.value),
                    e && e["@@transducer/reduced"]) {
                        e = e["@@transducer/value"];
                        break
                    }
                    r = n.next()
                }
                return t["@@transducer/result"](e)
            }
            function n(t, e, n) {
                return t["@@transducer/result"](n.reduce(Y(t["@@transducer/step"], t), e))
            }
            var r = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator";
            return function(o, i, a) {
                if ("function" == typeof o && (o = U(o)),
                Et(a))
                    return t(o, i, a);
                if ("function" == typeof a.reduce)
                    return n(o, i, a);
                if (null != a[r])
                    return e(o, i, a[r]());
                if ("function" == typeof a.next)
                    return e(o, i, a);
                throw new TypeError("reduce: list must be array or iterable")
            }
        }()
          , Qe = function() {
            var t = {
                "@@transducer/init": Array,
                "@@transducer/step": function(t, e) {
                    return i(t, [e])
                },
                "@@transducer/result": v
            }
              , e = {
                "@@transducer/init": String,
                "@@transducer/step": function(t, e) {
                    return t + e
                },
                "@@transducer/result": v
            }
              , n = {
                "@@transducer/init": Object,
                "@@transducer/step": function(t, e) {
                    return Ut(t, Et(e) ? tt(e[0], e[1]) : e)
                },
                "@@transducer/result": v
            };
            return function(r) {
                if (x(r))
                    return r;
                if (Et(r))
                    return t;
                if ("string" == typeof r)
                    return e;
                if ("object" == typeof r)
                    return n;
                throw new Error("Cannot create transformer for " + r)
            }
        }()
          , Ze = function() {
            function t(t, e) {
                this.xf = e,
                this.f = t,
                this.all = !0
            }
            return t.prototype["@@transducer/init"] = N.init,
            t.prototype["@@transducer/result"] = function(t) {
                return this.all && (t = this.xf["@@transducer/step"](t, !0)),
                this.xf["@@transducer/result"](t)
            }
            ,
            t.prototype["@@transducer/step"] = function(t, e) {
                return this.f(e) || (this.all = !1,
                t = M(this.xf["@@transducer/step"](t, !1))),
                t
            }
            ,
            s(function(e, n) {
                return new t(e,n)
            })
        }()
          , tn = function() {
            function t(t, e) {
                this.xf = e,
                this.f = t,
                this.any = !1
            }
            return t.prototype["@@transducer/init"] = N.init,
            t.prototype["@@transducer/result"] = function(t) {
                return this.any || (t = this.xf["@@transducer/step"](t, !1)),
                this.xf["@@transducer/result"](t)
            }
            ,
            t.prototype["@@transducer/step"] = function(t, e) {
                return this.f(e) && (this.any = !0,
                t = M(this.xf["@@transducer/step"](t, !0))),
                t
            }
            ,
            s(function(e, n) {
                return new t(e,n)
            })
        }()
          , en = function() {
            function t(t, e) {
                this.xf = e,
                this.n = t
            }
            return t.prototype["@@transducer/init"] = N.init,
            t.prototype["@@transducer/result"] = N.result,
            t.prototype["@@transducer/step"] = function(t, e) {
                return this.n > 0 ? (this.n -= 1,
                t) : this.xf["@@transducer/step"](t, e)
            }
            ,
            s(function(e, n) {
                return new t(e,n)
            })
        }()
          , nn = function() {
            function t(t, e) {
                this.xf = e,
                this.f = t
            }
            return t.prototype["@@transducer/init"] = N.init,
            t.prototype["@@transducer/result"] = N.result,
            t.prototype["@@transducer/step"] = function(t, e) {
                if (this.f) {
                    if (this.f(e))
                        return t;
                    this.f = null
                }
                return this.xf["@@transducer/step"](t, e)
            }
            ,
            s(function(e, n) {
                return new t(e,n)
            })
        }()
          , rn = function() {
            function t(t, e) {
                this.xf = e,
                this.f = t,
                this.inputs = {}
            }
            return t.prototype["@@transducer/init"] = N.init,
            t.prototype["@@transducer/result"] = function(t) {
                var e;
                for (e in this.inputs)
                    if (d(e, this.inputs) && (t = this.xf["@@transducer/step"](t, this.inputs[e]),
                    t["@@transducer/reduced"])) {
                        t = t["@@transducer/value"];
                        break
                    }
                return this.xf["@@transducer/result"](t)
            }
            ,
            t.prototype["@@transducer/step"] = function(t, e) {
                var n = this.f(e);
                return this.inputs[n] = this.inputs[n] || [n, []],
                this.inputs[n][1] = z(e, this.inputs[n][1]),
                t
            }
            ,
            s(function(e, n) {
                return new t(e,n)
            })
        }()
          , on = u(function(t) {
            return et(t.length, function() {
                var e = 0
                  , n = arguments[0]
                  , r = arguments[arguments.length - 1]
                  , o = k(arguments);
                return o[0] = function() {
                    var t = n.apply(this, i(arguments, [e, r]));
                    return e += 1,
                    t
                }
                ,
                t.apply(this, o)
            })
        })
          , an = s(Ye("all", Ze, function(t, e) {
            for (var n = 0; n < e.length; ) {
                if (!t(e[n]))
                    return !1;
                n += 1
            }
            return !0
        }))
          , un = s(function(t, e) {
            return Xe("and", t) ? t.and(e) : t && e
        })
          , sn = s(Ye("any", tn, function(t, e) {
            for (var n = 0; n < e.length; ) {
                if (t(e[n]))
                    return !0;
                n += 1
            }
            return !1
        }))
          , cn = u(function(t) {
            return zt(2, t)
        })
          , ln = u(function(t) {
            return Ve(t, [], [])
        })
          , fn = s(function(t, e) {
            if (g(e))
                return i(t, e);
            if (Xe("concat", t))
                return t.concat(e);
            throw new TypeError("can't concat " + typeof t)
        })
          , pn = u(function(t) {
            return et(t.length, t)
        })
          , hn = s(Ye("dropWhile", nn, function(t, e) {
            for (var n = 0, r = e.length; n < r && t(e[n]); )
                n += 1;
            return k(e, n)
        }))
          , dn = s(function(t, e) {
            return Xe("equals", t) ? t.equals(e) : Xe("equals", e) ? e.equals(t) : Ke(t, e, [], [])
        })
          , vn = s(Ye("filter", A, f))
          , gn = s(Ye("find", O, function(t, e) {
            for (var n = 0, r = e.length; n < r; ) {
                if (t(e[n]))
                    return e[n];
                n += 1
            }
        }))
          , yn = s(Ye("findIndex", P, function(t, e) {
            for (var n = 0, r = e.length; n < r; ) {
                if (t(e[n]))
                    return n;
                n += 1
            }
            return -1
        }))
          , mn = s(Ye("findLast", j, function(t, e) {
            for (var n = e.length - 1; n >= 0; ) {
                if (t(e[n]))
                    return e[n];
                n -= 1
            }
        }))
          , bn = s(Ye("findLastIndex", D, function(t, e) {
            for (var n = e.length - 1; n >= 0; ) {
                if (t(e[n]))
                    return n;
                n -= 1
            }
            return -1
        }))
          , xn = u(Je(!0))
          , _n = u(function(t) {
            return pn(function(e, n) {
                var r = k(arguments);
                return r[0] = n,
                r[1] = e,
                t.apply(this, r)
            })
        })
          , wn = s(We("forEach", function(t, e) {
            for (var n = e.length, r = 0; r < n; )
                t(e[r]),
                r += 1;
            return e
        }))
          , Cn = u(h(St))
          , En = u(h(Tt))
          , Mn = s(Ye("groupBy", rn, function(t, e) {
            return Ge(function(e, n) {
                var r = t(n);
                return e[r] = z(n, e[r] || (e[r] = [])),
                e
            }, {}, e)
        }))
          , kn = $t(0)
          , Sn = c(function(t, e, n) {
            for (var r = [], o = 0; o < e.length; )
                a(t, e[o], n) && (r[r.length] = e[o]),
                o += 1;
            return Oe(t, r)
        })
          , Tn = s(We("intersperse", function(t, e) {
            for (var n = [], r = 0, o = e.length; r < o; )
                r === o - 1 ? n.push(e[r]) : n.push(e[r], t),
                r += 1;
            return n
        }))
          , Nn = c(function(t, e, n) {
            return x(t) ? Ge(e(t), t["@@transducer/init"](), n) : Ge(e(Qe(t)), t, n)
        })
          , An = u(function(t) {
            for (var e = St(t), n = e.length, r = 0, o = {}; r < n; ) {
                var i = e[r]
                  , a = t[i]
                  , u = d(a, o) ? o[a] : o[a] = [];
                u[u.length] = i,
                r += 1
            }
            return o
        })
          , On = u(function(t) {
            for (var e = St(t), n = e.length, r = 0, o = {}; r < n; ) {
                var i = e[r];
                o[t[i]] = i,
                r += 1
            }
            return o
        })
          , Pn = $t(-1)
          , jn = s(function(t, e) {
            if (Xe("lastIndexOf", e))
                return e.lastIndexOf(t);
            for (var n = e.length - 1; n >= 0; ) {
                if (dn(e[n], t))
                    return n;
                n -= 1
            }
            return -1
        })
          , Dn = s(Ye("map", I, _))
          , In = s(function(t, e) {
            return Ge(function(n, r) {
                return n[r] = t(e[r]),
                n
            }, {}, St(e))
        })
          , Rn = s(function(t, e) {
            return Ge(function(n, r) {
                return n[r] = t(e[r], r, e),
                n
            }, {}, St(e))
        })
          , Ln = s(o(Ye("any", tn, sn)))
          , Un = s(function(t, e) {
            return Xe("or", t) ? t.or(e) : t || e
        })
          , Fn = pn($e(i))
          , qn = pn($e(_n(i)))
          , Hn = s(function(t, e) {
            return Ge(function(e, n) {
                var r = e[t(n) ? 0 : 1];
                return r[r.length] = n,
                e
            }, [[], []], e)
        })
          , Bn = c(function(t, e, n) {
            return dn(Zt(t, n), e)
        })
          , zn = s(function(t, e) {
            return Dn(oe(t), e)
        })
          , Wn = c(function(t, e, n) {
            return ae(dn(e), t, n)
        })
          , Vn = c(function(t, e, n) {
            return ae(Ct(t), e, n)
        })
          , $n = c(Ge)
          , Yn = s(function(t, e) {
            return vn(o(t), e)
        })
          , Kn = s(function(t, e) {
            return we(H(t), e)
        })
          , Xn = c(We("slice", function(t, e, n) {
            return Array.prototype.slice.call(n, t, e)
        }))
          , Jn = s(function(t, e) {
            if (t <= 0)
                throw new Error("First argument to splitEvery must be a positive integer");
            for (var n = [], r = 0; r < e.length; )
                n.push(Xn(r, r += t, e));
            return n
        })
          , Gn = $n(F, 0)
          , Qn = We("tail", Xn(1, 1 / 0))
          , Zn = s(Ye("take", R, function(t, e) {
            return Xn(0, t < 0 ? 1 / 0 : t, e)
        }))
          , tr = s(Ye("takeWhile", L, function(t, e) {
            for (var n = 0, r = e.length; n < r && t(e[n]); )
                n += 1;
            return k(e, 0, n)
        }))
          , er = et(4, function(t, e, n, r) {
            return Ge(t("function" == typeof e ? U(e) : e), n, r)
        })
          , nr = c(function(t, e, n) {
            return Oe(t, i(e, n))
        })
          , rr = Oe(dn)
          , or = u(Je(!1))
          , ir = pn(function(t) {
            var e = k(arguments, 1)
              , r = e.length;
            return pn(n(r, function() {
                for (var n = [], o = 0; o < r; )
                    n[o] = e[o](arguments[o]),
                    o += 1;
                return t.apply(this, n.concat(k(arguments, r)))
            }))
        })
          , ar = s(function(t, e) {
            return Re(In(dn, t), e)
        })
          , ur = function() {
            var t = function(t) {
                return {
                    "@@transducer/init": N.init,
                    "@@transducer/result": function(e) {
                        return t["@@transducer/result"](e)
                    },
                    "@@transducer/step": function(e, n) {
                        var r = t["@@transducer/step"](e, n);
                        return r["@@transducer/reduced"] ? p(r) : r
                    }
                }
            };
            return function(e) {
                var n = t(e);
                return {
                    "@@transducer/init": N.init,
                    "@@transducer/result": function(t) {
                        return n["@@transducer/result"](t)
                    },
                    "@@transducer/step": function(t, e) {
                        return Et(e) ? Ge(n, t, e) : Ge(n, t, [e])
                    }
                }
            }
        }()
          , sr = function(t, e, n) {
            for (var r = n; r < t.length; ) {
                if (dn(t[r], e))
                    return r;
                r += 1
            }
            return -1
        }
          , cr = function(t) {
            return function(e) {
                var r = function() {
                    var n = arguments;
                    return t(function(t) {
                        return t.apply(null, n)
                    }, e)
                };
                return arguments.length > 1 ? r.apply(null, k(arguments, 1)) : n(Math.max.apply(Math, zn("length", e)), r)
            }
        }
          , lr = s(function(t, e) {
            return Dn(t, ur(e))
        })
          , fr = u(cr(an))
          , pr = u(cr(sn))
          , hr = s(function(t, e) {
            return Xe("ap", t) ? t.ap(e) : Ge(function(t, n) {
                return i(t, Dn(n, e))
            }, [], t)
        })
          , dr = pn(function(t) {
            return t.apply(this, k(arguments, 1))
        })
          , vr = s(Ye("chain", lr, function(t, e) {
            return or(Dn(t, e))
        }))
          , gr = c(function(t, e, n) {
            function r(e, n) {
                return hr(Dn(z, t(n)), e)
            }
            return Ge(r, e([]), n)
        })
          , yr = s(function(t, e) {
            if (t > 10)
                throw new Error("Constructor with greater than ten arguments");
            return 0 === t ? function() {
                return new e
            }
            : pn(zt(t, function(t, n, r, o, i, a, u, s, c, l) {
                switch (arguments.length) {
                case 1:
                    return new e(t);
                case 2:
                    return new e(t,n);
                case 3:
                    return new e(t,n,r);
                case 4:
                    return new e(t,n,r,o);
                case 5:
                    return new e(t,n,r,o,i);
                case 6:
                    return new e(t,n,r,o,i,a);
                case 7:
                    return new e(t,n,r,o,i,a,u);
                case 8:
                    return new e(t,n,r,o,i,a,u,s);
                case 9:
                    return new e(t,n,r,o,i,a,u,s,c);
                case 10:
                    return new e(t,n,r,o,i,a,u,s,c,l)
                }
            }))
        })
          , mr = et(3, function(t) {
            var e = k(arguments, 1);
            return et(Math.max.apply(Math, zn("length", e)), function() {
                var n = arguments
                  , r = this;
                return t.apply(r, _(function(t) {
                    return t.apply(r, n)
                }, e))
            })
        })
          , br = s(Ye("drop", en, function(t, e) {
            return Xn(Math.max(0, t), 1 / 0, e)
        }))
          , xr = s(function(t, e) {
            return Zn(t < e.length ? e.length - t : 0, e)
        })
          , _r = s(Ye("dropRepeatsWith", T, function(t, e) {
            var n = []
              , r = 1
              , o = e.length;
            if (0 !== o)
                for (n[0] = e[0]; r < o; )
                    t(Pn(n), e[r]) || (n[n.length] = e[r]),
                    r += 1;
            return n
        }))
          , wr = c(function(t, e, n) {
            return dn(e[t], n[t])
        })
          , Cr = s(function(t, e) {
            return Xe("indexOf", e) ? e.indexOf(t) : sr(e, t, 0)
        })
          , Er = Xn(0, -1)
          , Mr = u(function(t) {
            for (var e = t.length, n = 0; n < e; ) {
                if (sr(t, t[n], n + 1) >= 0)
                    return !1;
                n += 1
            }
            return !0
        })
          , kr = s(function(t, e) {
            return function(n) {
                return function(r) {
                    return Dn(function(t) {
                        return e(t, r)
                    }, n(t(r)))
                }
            }
        })
          , Sr = u(function(t) {
            return kr($t(t), Pe(t))
        })
          , Tr = u(function(t) {
            return kr(oe(t), V(t))
        })
          , Nr = s(function(t, e) {
            var n = et(t, e);
            return et(t, function() {
                return Ge(hr, Dn(n, arguments[0]), k(arguments, 1))
            })
        })
          , Ar = u(function(t) {
            return Gn(t) / t.length
        })
          , Or = u(function(t) {
            var e = t.length;
            if (0 === e)
                return NaN;
            var n = 2 - e % 2
              , r = (e - n) / 2;
            return Ar(k(t).sort(function(t, e) {
                return t < e ? -1 : t > e ? 1 : 0
            }).slice(r, r + n))
        })
          , Pr = u(function(t) {
            return $n(Ut, {}, t)
        })
          , jr = function() {
            if (0 === arguments.length)
                throw new Error("pipe requires at least one argument");
            return et(arguments[0].length, $n(w, arguments[0], Qn(arguments)))
        }
          , Dr = function() {
            if (0 === arguments.length)
                throw new Error("pipeP requires at least one argument");
            return et(arguments[0].length, $n(C, arguments[0], Qn(arguments)))
        }
          , Ir = $n(Bt, 1)
          , Rr = ir(_, ee, mt)
          , Lr = s(function(t, e) {
            return br(t >= 0 ? e.length - t : 0, e)
        })
          , Ur = function(t, e) {
            return sr(e, t, 0) >= 0
        }
          , Fr = function t(e, n) {
            var r = function(r) {
                var o = n.concat([e]);
                return Ur(r, o) ? "<Circular>" : t(r, o)
            }
              , o = function(t, e) {
                return _(function(e) {
                    return E(e) + ": " + r(t[e])
                }, e.slice().sort())
            };
            switch (Object.prototype.toString.call(e)) {
            case "[object Arguments]":
                return "(function() { return arguments; }(" + _(r, e).join(", ") + "))";
            case "[object Array]":
                return "[" + _(r, e).concat(o(e, Yn(_e(/^\d+$/), St(e)))).join(", ") + "]";
            case "[object Boolean]":
                return "object" == typeof e ? "new Boolean(" + r(e.valueOf()) + ")" : e.toString();
            case "[object Date]":
                return "new Date(" + E(S(e)) + ")";
            case "[object Null]":
                return "null";
            case "[object Number]":
                return "object" == typeof e ? "new Number(" + r(e.valueOf()) + ")" : 1 / e === -(1 / 0) ? "-0" : e.toString(10);
            case "[object String]":
                return "object" == typeof e ? "new String(" + r(e.valueOf()) + ")" : E(e);
            case "[object Undefined]":
                return "undefined";
            default:
                return "function" == typeof e.constructor && "Object" !== e.constructor.name && "function" == typeof e.toString && "[object Object]" !== e.toString() ? e.toString() : "{" + o(e, St(e)).join(", ") + "}"
            }
        }
          , qr = gr(mt)
          , Hr = function() {
            if (0 === arguments.length)
                throw new Error("compose requires at least one argument");
            return jr.apply(this, he(arguments))
        }
          , Br = function() {
            return 0 === arguments.length ? mt : Hr.apply(this, Dn(vr, arguments))
        }
          , zr = function() {
            if (0 === arguments.length)
                throw new Error("composeP requires at least one argument");
            return Dr.apply(this, he(arguments))
        }
          , Wr = u(function(t) {
            return yr(t.length, t)
        })
          , Vr = s(Ur)
          , $r = s(function(t, e) {
            for (var n = [], r = 0, o = t.length; r < o; )
                Ur(t[r], e) || Ur(t[r], n) || (n[n.length] = t[r]),
                r += 1;
            return n
        })
          , Yr = u(Ye("dropRepeats", T(dn), _r(dn)))
          , Kr = s(function(t, e) {
            return rr(f(_n(Ur)(t), e))
        })
          , Xr = u(function(t) {
            return Nr(t.length, t)
        })
          , Jr = s(function(t, e) {
            var n = {};
            for (var r in e)
                Ur(r, t) || (n[r] = e[r]);
            return n
        })
          , Gr = function() {
            return Br.apply(this, he(arguments))
        }
          , Qr = u(function(t) {
            return Fr(t, [])
        })
          , Zr = s(Hr(rr, i))
          , to = s(function(t, e) {
            for (var n, r, o = 0, i = [], a = []; o < e.length; )
                r = e[o],
                n = t(r),
                Ur(n, i) || (a.push(r),
                i.push(n)),
                o += 1;
            return a
        })
          , eo = s(function(t, e) {
            return et(t + 1, function() {
                var n = arguments[t];
                if (null != n && Ct(Function, n[e]))
                    return n[e].apply(n, k(arguments, 0, t));
                throw new TypeError(Qr(n) + ' does not have a method named "' + e + '"')
            })
        })
          , no = eo(1, "join")
          , ro = u(function(t) {
            var e = {};
            return function() {
                var n = Qr(arguments);
                return d(n, e) || (e[n] = t.apply(this, arguments)),
                e[n]
            }
        })
          , oo = eo(1, "split")
          , io = eo(0, "toLowerCase")
          , ao = eo(0, "toUpperCase")
          , uo = {
            F: Be,
            T: ze,
            __: e,
            add: F,
            addIndex: on,
            adjust: q,
            all: an,
            allPass: fr,
            always: H,
            and: un,
            any: sn,
            anyPass: pr,
            ap: hr,
            aperture: B,
            append: z,
            apply: W,
            assoc: V,
            assocPath: $,
            binary: cn,
            bind: Y,
            both: K,
            call: dr,
            chain: vr,
            clone: ln,
            commute: qr,
            commuteMap: gr,
            comparator: X,
            complement: J,
            compose: Hr,
            composeK: Br,
            composeP: zr,
            concat: fn,
            cond: G,
            construct: Wr,
            constructN: yr,
            contains: Vr,
            containsWith: Q,
            converge: mr,
            countBy: Z,
            createMapEntry: tt,
            curry: pn,
            curryN: et,
            dec: nt,
            defaultTo: rt,
            difference: $r,
            differenceWith: ot,
            dissoc: it,
            dissocPath: at,
            divide: ut,
            drop: br,
            dropLast: xr,
            dropLastWhile: st,
            dropRepeats: Yr,
            dropRepeatsWith: _r,
            dropWhile: hn,
            either: ct,
            empty: lt,
            eqProps: wr,
            equals: dn,
            evolve: ft,
            filter: vn,
            find: gn,
            findIndex: yn,
            findLast: mn,
            findLastIndex: bn,
            flatten: xn,
            flip: _n,
            forEach: wn,
            fromPairs: pt,
            functions: Cn,
            functionsIn: En,
            groupBy: Mn,
            gt: ht,
            gte: dt,
            has: vt,
            hasIn: gt,
            head: kn,
            identical: yt,
            identity: mt,
            ifElse: bt,
            inc: xt,
            indexOf: Cr,
            init: Er,
            insert: _t,
            insertAll: wt,
            intersection: Kr,
            intersectionWith: Sn,
            intersperse: Tn,
            into: Nn,
            invert: An,
            invertObj: On,
            invoker: eo,
            is: Ct,
            isArrayLike: Et,
            isEmpty: Mt,
            isNil: kt,
            isSet: Mr,
            join: no,
            keys: St,
            keysIn: Tt,
            last: Pn,
            lastIndexOf: jn,
            length: Nt,
            lens: kr,
            lensIndex: Sr,
            lensProp: Tr,
            lift: Xr,
            liftN: Nr,
            lt: At,
            lte: Ot,
            map: Dn,
            mapAccum: Pt,
            mapAccumRight: jt,
            mapObj: In,
            mapObjIndexed: Rn,
            match: Dt,
            mathMod: It,
            max: Rt,
            maxBy: Lt,
            mean: Ar,
            median: Or,
            memoize: ro,
            merge: Ut,
            mergeAll: Pr,
            min: Ft,
            minBy: qt,
            modulo: Ht,
            multiply: Bt,
            nAry: zt,
            negate: Wt,
            none: Ln,
            not: Vt,
            nth: $t,
            nthArg: Yt,
            nthChar: Kt,
            nthCharCode: Xt,
            of: Jt,
            omit: Jr,
            once: Gt,
            or: Un,
            over: Qt,
            partial: Fn,
            partialRight: qn,
            partition: Hn,
            path: Zt,
            pathEq: Bn,
            pick: te,
            pickAll: ee,
            pickBy: ne,
            pipe: jr,
            pipeK: Gr,
            pipeP: Dr,
            pluck: zn,
            prepend: re,
            product: Ir,
            project: Rr,
            prop: oe,
            propEq: Wn,
            propIs: Vn,
            propOr: ie,
            propSatisfies: ae,
            props: ue,
            range: se,
            reduce: $n,
            reduceRight: ce,
            reduced: le,
            reject: Yn,
            remove: fe,
            repeat: Kn,
            replace: pe,
            reverse: he,
            scan: de,
            set: ve,
            slice: Xn,
            sort: ge,
            sortBy: ye,
            split: oo,
            splitEvery: Jn,
            subtract: me,
            sum: Gn,
            tail: Qn,
            take: Zn,
            takeLast: Lr,
            takeLastWhile: be,
            takeWhile: tr,
            tap: xe,
            test: _e,
            times: we,
            toLower: io,
            toPairs: Ce,
            toPairsIn: Ee,
            toString: Qr,
            toUpper: ao,
            transduce: er,
            trim: Me,
            type: ke,
            unapply: Se,
            unary: Te,
            uncurryN: Ne,
            unfold: Ae,
            union: Zr,
            unionWith: nr,
            uniq: rr,
            uniqBy: to,
            uniqWith: Oe,
            unnest: or,
            update: Pe,
            useWith: ir,
            values: je,
            valuesIn: De,
            view: Ie,
            where: Re,
            whereEq: ar,
            wrap: Le,
            xprod: Ue,
            zip: Fe,
            zipObj: qe,
            zipWith: He
        };
        t.exports = uo
    }
    ).call(this)
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        if (g) {
            var e = t.node
              , n = t.children;
            if (n.length)
                for (var r = 0; r < n.length; r++)
                    y(e, n[r], null);
            else
                null != t.html ? f(e, t.html) : null != t.text && h(e, t.text)
        }
    }
    function o(t, e) {
        t.parentNode.replaceChild(e.node, t),
        r(e)
    }
    function i(t, e) {
        g ? t.children.push(e) : t.node.appendChild(e.node)
    }
    function a(t, e) {
        g ? t.html = e : f(t.node, e)
    }
    function u(t, e) {
        g ? t.text = e : h(t.node, e)
    }
    function s() {
        return this.node.nodeName
    }
    function c(t) {
        return {
            node: t,
            children: [],
            html: null,
            text: null,
            toString: s
        }
    }
    var l = n(52)
      , f = n(41)
      , p = n(60)
      , h = n(110)
      , d = 1
      , v = 11
      , g = "undefined" != typeof document && "number" == typeof document.documentMode || "undefined" != typeof navigator && "string" == typeof navigator.userAgent && /\bEdge\/\d/.test(navigator.userAgent)
      , y = p(function(t, e, n) {
        e.node.nodeType === v || e.node.nodeType === d && "object" === e.node.nodeName.toLowerCase() && (null == e.node.namespaceURI || e.node.namespaceURI === l.html) ? (r(e),
        t.insertBefore(e.node, n)) : (t.insertBefore(e.node, n),
        r(e))
    });
    c.insertTreeBefore = y,
    c.replaceChildWithTree = o,
    c.queueChild = i,
    c.queueHTML = a,
    c.queueText = u,
    t.exports = c
}
, function(t, e, n) {
    "use strict";
    function r(t, e) {
        return (t & e) === e
    }
    var o = n(2)
      , i = (n(1),
    {
        MUST_USE_PROPERTY: 1,
        HAS_BOOLEAN_VALUE: 4,
        HAS_NUMERIC_VALUE: 8,
        HAS_POSITIVE_NUMERIC_VALUE: 24,
        HAS_OVERLOADED_BOOLEAN_VALUE: 32,
        injectDOMPropertyConfig: function(t) {
            var e = i
              , n = t.Properties || {}
              , a = t.DOMAttributeNamespaces || {}
              , s = t.DOMAttributeNames || {}
              , c = t.DOMPropertyNames || {}
              , l = t.DOMMutationMethods || {};
            t.isCustomAttribute && u._isCustomAttributeFunctions.push(t.isCustomAttribute);
            for (var f in n) {
                u.properties.hasOwnProperty(f) ? o("48", f) : void 0;
                var p = f.toLowerCase()
                  , h = n[f]
                  , d = {
                    attributeName: p,
                    attributeNamespace: null,
                    propertyName: f,
                    mutationMethod: null,
                    mustUseProperty: r(h, e.MUST_USE_PROPERTY),
                    hasBooleanValue: r(h, e.HAS_BOOLEAN_VALUE),
                    hasNumericValue: r(h, e.HAS_NUMERIC_VALUE),
                    hasPositiveNumericValue: r(h, e.HAS_POSITIVE_NUMERIC_VALUE),
                    hasOverloadedBooleanValue: r(h, e.HAS_OVERLOADED_BOOLEAN_VALUE)
                };
                if (d.hasBooleanValue + d.hasNumericValue + d.hasOverloadedBooleanValue <= 1 ? void 0 : o("50", f),
                s.hasOwnProperty(f)) {
                    var v = s[f];
                    d.attributeName = v
                }
                a.hasOwnProperty(f) && (d.attributeNamespace = a[f]),
                c.hasOwnProperty(f) && (d.propertyName = c[f]),
                l.hasOwnProperty(f) && (d.mutationMethod = l[f]),
                u.properties[f] = d
            }
        }
    })
      , a = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD"
      , u = {
        ID_ATTRIBUTE_NAME: "data-reactid",
        ROOT_ATTRIBUTE_NAME: "data-reactroot",
        ATTRIBUTE_NAME_START_CHAR: a,
        ATTRIBUTE_NAME_CHAR: a + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
        properties: {},
        getPossibleStandardName: null,
        _isCustomAttributeFunctions: [],
        isCustomAttribute: function(t) {
            for (var e = 0; e < u._isCustomAttributeFunctions.length; e++) {
                var n = u._isCustomAttributeFunctions[e];
                if (n(t))
                    return !0
            }
            return !1
        },
        injection: i
    };
    t.exports = u
}
, function(t, e, n) {
    "use strict";
    function r() {
        o.attachRefs(this, this._currentElement)
    }
    var o = n(280)
      , i = (n(7),
    n(3),
    {
        mountComponent: function(t, e, n, o, i, a) {
            var u = t.mountComponent(e, n, o, i, a);
            return t._currentElement && null != t._currentElement.ref && e.getReactMountReady().enqueue(r, t),
            u
        },
        getHostNode: function(t) {
            return t.getHostNode()
        },
        unmountComponent: function(t, e) {
            o.detachRefs(t, t._currentElement),
            t.unmountComponent(e)
        },
        receiveComponent: function(t, e, n, i) {
            var a = t._currentElement;
            if (e !== a || i !== t._context) {
                var u = o.shouldUpdateRefs(a, e);
                u && o.detachRefs(t, a),
                t.receiveComponent(e, n, i),
                u && t._currentElement && null != t._currentElement.ref && n.getReactMountReady().enqueue(r, t)
            }
        },
        performUpdateIfNecessary: function(t, e, n) {
            t._updateBatchNumber === n && t.performUpdateIfNecessary(e)
        }
    });
    t.exports = i
}
, function(t, e, n) {
    "use strict";
    var r = n(4)
      , o = n(113)
      , i = n(316)
      , a = n(317)
      , u = n(23)
      , s = n(318)
      , c = n(319)
      , l = n(320)
      , f = n(324)
      , p = u.createElement
      , h = u.createFactory
      , d = u.cloneElement
      , v = r
      , g = function(t) {
        return t
    }
      , y = {
        Children: {
            map: i.map,
            forEach: i.forEach,
            count: i.count,
            toArray: i.toArray,
            only: f
        },
        Component: o.Component,
        PureComponent: o.PureComponent,
        createElement: p,
        cloneElement: d,
        isValidElement: u.isValidElement,
        PropTypes: s,
        createClass: l,
        createFactory: h,
        createMixin: g,
        DOM: a,
        version: c,
        __spread: v
    };
    t.exports = y
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return void 0 !== t.ref
    }
    function o(t) {
        return void 0 !== t.key
    }
    var i = n(4)
      , a = n(13)
      , u = (n(3),
    n(117),
    Object.prototype.hasOwnProperty)
      , s = n(115)
      , c = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    }
      , l = function(t, e, n, r, o, i, a) {
        var u = {
            $$typeof: s,
            type: t,
            key: e,
            ref: n,
            props: a,
            _owner: i
        };
        return u
    };
    l.createElement = function(t, e, n) {
        var i, s = {}, f = null, p = null, h = null, d = null;
        if (null != e) {
            r(e) && (p = e.ref),
            o(e) && (f = "" + e.key),
            h = void 0 === e.__self ? null : e.__self,
            d = void 0 === e.__source ? null : e.__source;
            for (i in e)
                u.call(e, i) && !c.hasOwnProperty(i) && (s[i] = e[i])
        }
        var v = arguments.length - 2;
        if (1 === v)
            s.children = n;
        else if (v > 1) {
            for (var g = Array(v), y = 0; y < v; y++)
                g[y] = arguments[y + 2];
            s.children = g
        }
        if (t && t.defaultProps) {
            var m = t.defaultProps;
            for (i in m)
                void 0 === s[i] && (s[i] = m[i])
        }
        return l(t, f, p, h, d, a.current, s)
    }
    ,
    l.createFactory = function(t) {
        var e = l.createElement.bind(null, t);
        return e.type = t,
        e
    }
    ,
    l.cloneAndReplaceKey = function(t, e) {
        var n = l(t.type, e, t.ref, t._self, t._source, t._owner, t.props);
        return n
    }
    ,
    l.cloneElement = function(t, e, n) {
        var s, f = i({}, t.props), p = t.key, h = t.ref, d = t._self, v = t._source, g = t._owner;
        if (null != e) {
            r(e) && (h = e.ref,
            g = a.current),
            o(e) && (p = "" + e.key);
            var y;
            t.type && t.type.defaultProps && (y = t.type.defaultProps);
            for (s in e)
                u.call(e, s) && !c.hasOwnProperty(s) && (void 0 === e[s] && void 0 !== y ? f[s] = y[s] : f[s] = e[s])
        }
        var m = arguments.length - 2;
        if (1 === m)
            f.children = n;
        else if (m > 1) {
            for (var b = Array(m), x = 0; x < m; x++)
                b[x] = arguments[x + 2];
            f.children = b
        }
        return l(t.type, p, h, d, v, g, f)
    }
    ,
    l.isValidElement = function(t) {
        return "object" == typeof t && null !== t && t.$$typeof === s
    }
    ,
    t.exports = l
}
, function(t, e, n) {
    "use strict";
    t.exports = n(22)
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return "button" === t || "input" === t || "select" === t || "textarea" === t
    }
    function o(t, e, n) {
        switch (t) {
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
            return !(!n.disabled || !r(e));
        default:
            return !1
        }
    }
    var i = n(2)
      , a = n(53)
      , u = n(54)
      , s = n(58)
      , c = n(103)
      , l = n(104)
      , f = (n(1),
    {})
      , p = null
      , h = function(t, e) {
        t && (u.executeDispatchesInOrder(t, e),
        t.isPersistent() || t.constructor.release(t))
    }
      , d = function(t) {
        return h(t, !0)
    }
      , v = function(t) {
        return h(t, !1)
    }
      , g = function(t) {
        return "." + t._rootNodeID
    }
      , y = {
        injection: {
            injectEventPluginOrder: a.injectEventPluginOrder,
            injectEventPluginsByName: a.injectEventPluginsByName
        },
        putListener: function(t, e, n) {
            "function" != typeof n ? i("94", e, typeof n) : void 0;
            var r = g(t)
              , o = f[e] || (f[e] = {});
            o[r] = n;
            var u = a.registrationNameModules[e];
            u && u.didPutListener && u.didPutListener(t, e, n)
        },
        getListener: function(t, e) {
            var n = f[e];
            if (o(e, t._currentElement.type, t._currentElement.props))
                return null;
            var r = g(t);
            return n && n[r]
        },
        deleteListener: function(t, e) {
            var n = a.registrationNameModules[e];
            n && n.willDeleteListener && n.willDeleteListener(t, e);
            var r = f[e];
            if (r) {
                var o = g(t);
                delete r[o]
            }
        },
        deleteAllListeners: function(t) {
            var e = g(t);
            for (var n in f)
                if (f.hasOwnProperty(n) && f[n][e]) {
                    var r = a.registrationNameModules[n];
                    r && r.willDeleteListener && r.willDeleteListener(t, n),
                    delete f[n][e]
                }
        },
        extractEvents: function(t, e, n, r) {
            for (var o, i = a.plugins, u = 0; u < i.length; u++) {
                var s = i[u];
                if (s) {
                    var l = s.extractEvents(t, e, n, r);
                    l && (o = c(o, l))
                }
            }
            return o
        },
        enqueueEvents: function(t) {
            t && (p = c(p, t))
        },
        processEventQueue: function(t) {
            var e = p;
            p = null,
            t ? l(e, d) : l(e, v),
            p ? i("95") : void 0,
            s.rethrowCaughtError()
        },
        __purge: function() {
            f = {}
        },
        __getListenerBank: function() {
            return f
        }
    };
    t.exports = y
}
, function(t, e, n) {
    "use strict";
    function r(t, e, n) {
        var r = e.dispatchConfig.phasedRegistrationNames[n];
        return y(t, r)
    }
    function o(t, e, n) {
        var o = r(t, n, e);
        o && (n._dispatchListeners = v(n._dispatchListeners, o),
        n._dispatchInstances = v(n._dispatchInstances, t))
    }
    function i(t) {
        t && t.dispatchConfig.phasedRegistrationNames && d.traverseTwoPhase(t._targetInst, o, t)
    }
    function a(t) {
        if (t && t.dispatchConfig.phasedRegistrationNames) {
            var e = t._targetInst
              , n = e ? d.getParentInstance(e) : null;
            d.traverseTwoPhase(n, o, t)
        }
    }
    function u(t, e, n) {
        if (n && n.dispatchConfig.registrationName) {
            var r = n.dispatchConfig.registrationName
              , o = y(t, r);
            o && (n._dispatchListeners = v(n._dispatchListeners, o),
            n._dispatchInstances = v(n._dispatchInstances, t))
        }
    }
    function s(t) {
        t && t.dispatchConfig.registrationName && u(t._targetInst, null, t)
    }
    function c(t) {
        g(t, i)
    }
    function l(t) {
        g(t, a)
    }
    function f(t, e, n, r) {
        d.traverseEnterLeave(n, r, u, t, e)
    }
    function p(t) {
        g(t, s)
    }
    var h = n(25)
      , d = n(54)
      , v = n(103)
      , g = n(104)
      , y = (n(3),
    h.getListener)
      , m = {
        accumulateTwoPhaseDispatches: c,
        accumulateTwoPhaseDispatchesSkipTarget: l,
        accumulateDirectDispatches: p,
        accumulateEnterLeaveDispatches: f
    };
    t.exports = m
}
, function(t, e) {
    "use strict";
    var n = {
        remove: function(t) {
            t._reactInternalInstance = void 0
        },
        get: function(t) {
            return t._reactInternalInstance
        },
        has: function(t) {
            return void 0 !== t._reactInternalInstance
        },
        set: function(t, e) {
            t._reactInternalInstance = e
        }
    };
    t.exports = n
}
, function(t, e, n) {
    "use strict";
    function r(t, e, n, r) {
        return o.call(this, t, e, n, r)
    }
    var o = n(12)
      , i = n(63)
      , a = {
        view: function(t) {
            if (t.view)
                return t.view;
            var e = i(t);
            if (e.window === e)
                return e;
            var n = e.ownerDocument;
            return n ? n.defaultView || n.parentWindow : window
        },
        detail: function(t) {
            return t.detail || 0
        }
    };
    o.augmentClass(r, a),
    t.exports = r
}
, 2, function(t, e, n) {
    "use strict";
    var r = {};
    t.exports = r
}
, function(t, e, n) {
    function r(t) {
        var e = -1
          , n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    var o = n(205)
      , i = n(206)
      , a = n(207)
      , u = n(208)
      , s = n(209);
    r.prototype.clear = o,
    r.prototype.delete = i,
    r.prototype.get = a,
    r.prototype.has = u,
    r.prototype.set = s,
    t.exports = r
}
, function(t, e, n) {
    var r = n(10)
      , o = r.Symbol;
    t.exports = o
}
, function(t, e, n) {
    function r(t, e) {
        for (var n = t.length; n--; )
            if (o(t[n][0], e))
                return n;
        return -1
    }
    var o = n(84);
    t.exports = r
}
, function(t, e, n) {
    function r(t, e) {
        var n = t.__data__;
        return o(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
    }
    var o = n(202);
    t.exports = r
}
, function(t, e, n) {
    var r = n(14)
      , o = r(Object, "create");
    t.exports = o
}
, function(t, e, n) {
    function r(t) {
        if ("string" == typeof t || o(t))
            return t;
        var e = t + "";
        return "0" == e && 1 / t == -i ? "-0" : e
    }
    var o = n(48)
      , i = 1 / 0;
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return Object.prototype.hasOwnProperty.call(t, v) || (t[v] = h++,
        f[t[v]] = {}),
        f[t[v]]
    }
    var o, i = n(4), a = n(53), u = n(272), s = n(102), c = n(304), l = n(64), f = {}, p = !1, h = 0, d = {
        topAbort: "abort",
        topAnimationEnd: c("animationend") || "animationend",
        topAnimationIteration: c("animationiteration") || "animationiteration",
        topAnimationStart: c("animationstart") || "animationstart",
        topBlur: "blur",
        topCanPlay: "canplay",
        topCanPlayThrough: "canplaythrough",
        topChange: "change",
        topClick: "click",
        topCompositionEnd: "compositionend",
        topCompositionStart: "compositionstart",
        topCompositionUpdate: "compositionupdate",
        topContextMenu: "contextmenu",
        topCopy: "copy",
        topCut: "cut",
        topDoubleClick: "dblclick",
        topDrag: "drag",
        topDragEnd: "dragend",
        topDragEnter: "dragenter",
        topDragExit: "dragexit",
        topDragLeave: "dragleave",
        topDragOver: "dragover",
        topDragStart: "dragstart",
        topDrop: "drop",
        topDurationChange: "durationchange",
        topEmptied: "emptied",
        topEncrypted: "encrypted",
        topEnded: "ended",
        topError: "error",
        topFocus: "focus",
        topInput: "input",
        topKeyDown: "keydown",
        topKeyPress: "keypress",
        topKeyUp: "keyup",
        topLoadedData: "loadeddata",
        topLoadedMetadata: "loadedmetadata",
        topLoadStart: "loadstart",
        topMouseDown: "mousedown",
        topMouseMove: "mousemove",
        topMouseOut: "mouseout",
        topMouseOver: "mouseover",
        topMouseUp: "mouseup",
        topPaste: "paste",
        topPause: "pause",
        topPlay: "play",
        topPlaying: "playing",
        topProgress: "progress",
        topRateChange: "ratechange",
        topScroll: "scroll",
        topSeeked: "seeked",
        topSeeking: "seeking",
        topSelectionChange: "selectionchange",
        topStalled: "stalled",
        topSuspend: "suspend",
        topTextInput: "textInput",
        topTimeUpdate: "timeupdate",
        topTouchCancel: "touchcancel",
        topTouchEnd: "touchend",
        topTouchMove: "touchmove",
        topTouchStart: "touchstart",
        topTransitionEnd: c("transitionend") || "transitionend",
        topVolumeChange: "volumechange",
        topWaiting: "waiting",
        topWheel: "wheel"
    }, v = "_reactListenersID" + String(Math.random()).slice(2), g = i({}, u, {
        ReactEventListener: null,
        injection: {
            injectReactEventListener: function(t) {
                t.setHandleTopLevel(g.handleTopLevel),
                g.ReactEventListener = t
            }
        },
        setEnabled: function(t) {
            g.ReactEventListener && g.ReactEventListener.setEnabled(t)
        },
        isEnabled: function() {
            return !(!g.ReactEventListener || !g.ReactEventListener.isEnabled())
        },
        listenTo: function(t, e) {
            for (var n = e, o = r(n), i = a.registrationNameDependencies[t], u = 0; u < i.length; u++) {
                var s = i[u];
                o.hasOwnProperty(s) && o[s] || ("topWheel" === s ? l("wheel") ? g.ReactEventListener.trapBubbledEvent("topWheel", "wheel", n) : l("mousewheel") ? g.ReactEventListener.trapBubbledEvent("topWheel", "mousewheel", n) : g.ReactEventListener.trapBubbledEvent("topWheel", "DOMMouseScroll", n) : "topScroll" === s ? l("scroll", !0) ? g.ReactEventListener.trapCapturedEvent("topScroll", "scroll", n) : g.ReactEventListener.trapBubbledEvent("topScroll", "scroll", g.ReactEventListener.WINDOW_HANDLE) : "topFocus" === s || "topBlur" === s ? (l("focus", !0) ? (g.ReactEventListener.trapCapturedEvent("topFocus", "focus", n),
                g.ReactEventListener.trapCapturedEvent("topBlur", "blur", n)) : l("focusin") && (g.ReactEventListener.trapBubbledEvent("topFocus", "focusin", n),
                g.ReactEventListener.trapBubbledEvent("topBlur", "focusout", n)),
                o.topBlur = !0,
                o.topFocus = !0) : d.hasOwnProperty(s) && g.ReactEventListener.trapBubbledEvent(s, d[s], n),
                o[s] = !0)
            }
        },
        trapBubbledEvent: function(t, e, n) {
            return g.ReactEventListener.trapBubbledEvent(t, e, n)
        },
        trapCapturedEvent: function(t, e, n) {
            return g.ReactEventListener.trapCapturedEvent(t, e, n)
        },
        supportsEventPageXY: function() {
            if (!document.createEvent)
                return !1;
            var t = document.createEvent("MouseEvent");
            return null != t && "pageX"in t
        },
        ensureScrollValueMonitoring: function() {
            if (void 0 === o && (o = g.supportsEventPageXY()),
            !o && !p) {
                var t = s.refreshScrollValues;
                g.ReactEventListener.monitorScrollValue(t),
                p = !0
            }
        }
    });
    t.exports = g
}
, function(t, e, n) {
    "use strict";
    function r(t, e, n, r) {
        return o.call(this, t, e, n, r)
    }
    var o = n(28)
      , i = n(102)
      , a = n(62)
      , u = {
        screenX: null,
        screenY: null,
        clientX: null,
        clientY: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        getModifierState: a,
        button: function(t) {
            var e = t.button;
            return "which"in t ? e : 2 === e ? 2 : 4 === e ? 1 : 0
        },
        buttons: null,
        relatedTarget: function(t) {
            return t.relatedTarget || (t.fromElement === t.srcElement ? t.toElement : t.fromElement)
        },
        pageX: function(t) {
            return "pageX"in t ? t.pageX : t.clientX + i.currentScrollLeft
        },
        pageY: function(t) {
            return "pageY"in t ? t.pageY : t.clientY + i.currentScrollTop
        }
    };
    o.augmentClass(r, u),
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    var r = n(2)
      , o = (n(1),
    {})
      , i = {
        reinitializeTransaction: function() {
            this.transactionWrappers = this.getTransactionWrappers(),
            this.wrapperInitData ? this.wrapperInitData.length = 0 : this.wrapperInitData = [],
            this._isInTransaction = !1
        },
        _isInTransaction: !1,
        getTransactionWrappers: null,
        isInTransaction: function() {
            return !!this._isInTransaction
        },
        perform: function(t, e, n, o, i, a, u, s) {
            this.isInTransaction() ? r("27") : void 0;
            var c, l;
            try {
                this._isInTransaction = !0,
                c = !0,
                this.initializeAll(0),
                l = t.call(e, n, o, i, a, u, s),
                c = !1
            } finally {
                try {
                    if (c)
                        try {
                            this.closeAll(0)
                        } catch (t) {}
                    else
                        this.closeAll(0)
                } finally {
                    this._isInTransaction = !1
                }
            }
            return l
        },
        initializeAll: function(t) {
            for (var e = this.transactionWrappers, n = t; n < e.length; n++) {
                var r = e[n];
                try {
                    this.wrapperInitData[n] = o,
                    this.wrapperInitData[n] = r.initialize ? r.initialize.call(this) : null
                } finally {
                    if (this.wrapperInitData[n] === o)
                        try {
                            this.initializeAll(n + 1)
                        } catch (t) {}
                }
            }
        },
        closeAll: function(t) {
            this.isInTransaction() ? void 0 : r("28");
            for (var e = this.transactionWrappers, n = t; n < e.length; n++) {
                var i, a = e[n], u = this.wrapperInitData[n];
                try {
                    i = !0,
                    u !== o && a.close && a.close.call(this, u),
                    i = !1
                } finally {
                    if (i)
                        try {
                            this.closeAll(n + 1)
                        } catch (t) {}
                }
            }
            this.wrapperInitData.length = 0
        }
    };
    t.exports = i
}
, function(t, e) {
    "use strict";
    function n(t) {
        var e = "" + t
          , n = o.exec(e);
        if (!n)
            return e;
        var r, i = "", a = 0, u = 0;
        for (a = n.index; a < e.length; a++) {
            switch (e.charCodeAt(a)) {
            case 34:
                r = "&quot;";
                break;
            case 38:
                r = "&amp;";
                break;
            case 39:
                r = "&#x27;";
                break;
            case 60:
                r = "&lt;";
                break;
            case 62:
                r = "&gt;";
                break;
            default:
                continue
            }
            u !== a && (i += e.substring(u, a)),
            u = a + 1,
            i += r
        }
        return u !== a ? i + e.substring(u, a) : i
    }
    function r(t) {
        return "boolean" == typeof t || "number" == typeof t ? "" + t : n(t)
    }
    var o = /["'&<>]/;
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    var r, o = n(6), i = n(52), a = /^[ \r\n\t\f]/, u = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/, s = n(60), c = s(function(t, e) {
        if (t.namespaceURI !== i.svg || "innerHTML"in t)
            t.innerHTML = e;
        else {
            r = r || document.createElement("div"),
            r.innerHTML = "<svg>" + e + "</svg>";
            for (var n = r.firstChild; n.firstChild; )
                t.appendChild(n.firstChild)
        }
    });
    if (o.canUseDOM) {
        var l = document.createElement("div");
        l.innerHTML = " ",
        "" === l.innerHTML && (c = function(t, e) {
            if (t.parentNode && t.parentNode.replaceChild(t, t),
            a.test(e) || "<" === e[0] && u.test(e)) {
                t.innerHTML = String.fromCharCode(65279) + e;
                var n = t.firstChild;
                1 === n.data.length ? t.removeChild(n) : n.deleteData(0, 1)
            } else
                t.innerHTML = e
        }
        ),
        l = null
    }
    t.exports = c
}
, function(t, e) {
    "use strict";
    function n(t, e) {
        return t === e ? 0 !== t || 0 !== e || 1 / t === 1 / e : t !== t && e !== e
    }
    function r(t, e) {
        if (n(t, e))
            return !0;
        if ("object" != typeof t || null === t || "object" != typeof e || null === e)
            return !1;
        var r = Object.keys(t)
          , i = Object.keys(e);
        if (r.length !== i.length)
            return !1;
        for (var a = 0; a < r.length; a++)
            if (!o.call(e, r[a]) || !n(t[r[a]], e[r[a]]))
                return !1;
        return !0
    }
    var o = Object.prototype.hasOwnProperty;
    t.exports = r
}
, function(t, e, n) {
    var r = n(14)
      , o = n(10)
      , i = r(o, "Map");
    t.exports = i
}
, function(t, e, n) {
    function r(t) {
        var e = -1
          , n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    var o = n(210)
      , i = n(211)
      , a = n(212)
      , u = n(213)
      , s = n(214);
    r.prototype.clear = o,
    r.prototype.delete = i,
    r.prototype.get = a,
    r.prototype.has = u,
    r.prototype.set = s,
    t.exports = r
}
, function(t, e, n) {
    function r(t, e) {
        if (o(t))
            return !1;
        var n = typeof t;
        return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || (u.test(t) || !a.test(t) || null != e && t in Object(e))
    }
    var o = n(11)
      , i = n(48)
      , a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
      , u = /^\w*$/;
    t.exports = r
}
, function(t, e) {
    function n(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= r
    }
    var r = 9007199254740991;
    t.exports = n
}
, function(t, e) {
    function n(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }
    t.exports = n
}
, function(t, e, n) {
    function r(t) {
        return "symbol" == typeof t || i(t) && o(t) == a
    }
    var o = n(16)
      , i = n(17)
      , a = "[object Symbol]";
    t.exports = r
}
, function(t, e, n) {
    function r(t) {
        return a(t) ? o(t) : i(t)
    }
    var o = n(160)
      , i = n(175)
      , a = n(232);
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    t.exports = n(257)
}
, function(t, e, n) {
    "use strict";
    function r(t, e) {
        return Array.isArray(e) && (e = e[1]),
        e ? e.nextSibling : t.firstChild
    }
    function o(t, e, n) {
        l.insertTreeBefore(t, e, n)
    }
    function i(t, e, n) {
        Array.isArray(e) ? u(t, e[0], e[1], n) : v(t, e, n)
    }
    function a(t, e) {
        if (Array.isArray(e)) {
            var n = e[1];
            e = e[0],
            s(t, e, n),
            t.removeChild(n)
        }
        t.removeChild(e)
    }
    function u(t, e, n, r) {
        for (var o = e; ; ) {
            var i = o.nextSibling;
            if (v(t, o, r),
            o === n)
                break;
            o = i
        }
    }
    function s(t, e, n) {
        for (; ; ) {
            var r = e.nextSibling;
            if (r === n)
                break;
            t.removeChild(r)
        }
    }
    function c(t, e, n) {
        var r = t.parentNode
          , o = t.nextSibling;
        o === e ? n && v(r, document.createTextNode(n), o) : n ? (d(o, n),
        s(r, o, e)) : s(r, t, e)
    }
    var l = n(19)
      , f = n(249)
      , p = (n(5),
    n(7),
    n(60))
      , h = n(41)
      , d = n(110)
      , v = p(function(t, e, n) {
        t.insertBefore(e, n)
    })
      , g = f.dangerouslyReplaceNodeWithMarkup
      , y = {
        dangerouslyReplaceNodeWithMarkup: g,
        replaceDelimitedText: c,
        processUpdates: function(t, e) {
            for (var n = 0; n < e.length; n++) {
                var u = e[n];
                switch (u.type) {
                case "INSERT_MARKUP":
                    o(t, u.content, r(t, u.afterNode));
                    break;
                case "MOVE_EXISTING":
                    i(t, u.fromNode, r(t, u.afterNode));
                    break;
                case "SET_MARKUP":
                    h(t, u.content);
                    break;
                case "TEXT_CONTENT":
                    d(t, u.content);
                    break;
                case "REMOVE_NODE":
                    a(t, u.fromNode)
                }
            }
        }
    };
    t.exports = y
}
, function(t, e) {
    "use strict";
    var n = {
        html: "http://www.w3.org/1999/xhtml",
        mathml: "http://www.w3.org/1998/Math/MathML",
        svg: "http://www.w3.org/2000/svg"
    };
    t.exports = n
}
, function(t, e, n) {
    "use strict";
    function r() {
        if (u)
            for (var t in s) {
                var e = s[t]
                  , n = u.indexOf(t);
                if (n > -1 ? void 0 : a("96", t),
                !c.plugins[n]) {
                    e.extractEvents ? void 0 : a("97", t),
                    c.plugins[n] = e;
                    var r = e.eventTypes;
                    for (var i in r)
                        o(r[i], e, i) ? void 0 : a("98", i, t)
                }
            }
    }
    function o(t, e, n) {
        c.eventNameDispatchConfigs.hasOwnProperty(n) ? a("99", n) : void 0,
        c.eventNameDispatchConfigs[n] = t;
        var r = t.phasedRegistrationNames;
        if (r) {
            for (var o in r)
                if (r.hasOwnProperty(o)) {
                    var u = r[o];
                    i(u, e, n)
                }
            return !0
        }
        return !!t.registrationName && (i(t.registrationName, e, n),
        !0)
    }
    function i(t, e, n) {
        c.registrationNameModules[t] ? a("100", t) : void 0,
        c.registrationNameModules[t] = e,
        c.registrationNameDependencies[t] = e.eventTypes[n].dependencies
    }
    var a = n(2)
      , u = (n(1),
    null)
      , s = {}
      , c = {
        plugins: [],
        eventNameDispatchConfigs: {},
        registrationNameModules: {},
        registrationNameDependencies: {},
        possibleRegistrationNames: null,
        injectEventPluginOrder: function(t) {
            u ? a("101") : void 0,
            u = Array.prototype.slice.call(t),
            r()
        },
        injectEventPluginsByName: function(t) {
            var e = !1;
            for (var n in t)
                if (t.hasOwnProperty(n)) {
                    var o = t[n];
                    s.hasOwnProperty(n) && s[n] === o || (s[n] ? a("102", n) : void 0,
                    s[n] = o,
                    e = !0)
                }
            e && r()
        },
        getPluginModuleForEvent: function(t) {
            var e = t.dispatchConfig;
            if (e.registrationName)
                return c.registrationNameModules[e.registrationName] || null;
            if (void 0 !== e.phasedRegistrationNames) {
                var n = e.phasedRegistrationNames;
                for (var r in n)
                    if (n.hasOwnProperty(r)) {
                        var o = c.registrationNameModules[n[r]];
                        if (o)
                            return o
                    }
            }
            return null
        },
        _resetEventPlugins: function() {
            u = null;
            for (var t in s)
                s.hasOwnProperty(t) && delete s[t];
            c.plugins.length = 0;
            var e = c.eventNameDispatchConfigs;
            for (var n in e)
                e.hasOwnProperty(n) && delete e[n];
            var r = c.registrationNameModules;
            for (var o in r)
                r.hasOwnProperty(o) && delete r[o]
        }
    };
    t.exports = c
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return "topMouseUp" === t || "topTouchEnd" === t || "topTouchCancel" === t
    }
    function o(t) {
        return "topMouseMove" === t || "topTouchMove" === t
    }
    function i(t) {
        return "topMouseDown" === t || "topTouchStart" === t
    }
    function a(t, e, n, r) {
        var o = t.type || "unknown-event";
        t.currentTarget = y.getNodeFromInstance(r),
        e ? v.invokeGuardedCallbackWithCatch(o, n, t) : v.invokeGuardedCallback(o, n, t),
        t.currentTarget = null
    }
    function u(t, e) {
        var n = t._dispatchListeners
          , r = t._dispatchInstances;
        if (Array.isArray(n))
            for (var o = 0; o < n.length && !t.isPropagationStopped(); o++)
                a(t, e, n[o], r[o]);
        else
            n && a(t, e, n, r);
        t._dispatchListeners = null,
        t._dispatchInstances = null
    }
    function s(t) {
        var e = t._dispatchListeners
          , n = t._dispatchInstances;
        if (Array.isArray(e)) {
            for (var r = 0; r < e.length && !t.isPropagationStopped(); r++)
                if (e[r](t, n[r]))
                    return n[r]
        } else if (e && e(t, n))
            return n;
        return null
    }
    function c(t) {
        var e = s(t);
        return t._dispatchInstances = null,
        t._dispatchListeners = null,
        e
    }
    function l(t) {
        var e = t._dispatchListeners
          , n = t._dispatchInstances;
        Array.isArray(e) ? d("103") : void 0,
        t.currentTarget = e ? y.getNodeFromInstance(n) : null;
        var r = e ? e(t) : null;
        return t.currentTarget = null,
        t._dispatchListeners = null,
        t._dispatchInstances = null,
        r
    }
    function f(t) {
        return !!t._dispatchListeners
    }
    var p, h, d = n(2), v = n(58), g = (n(1),
    n(3),
    {
        injectComponentTree: function(t) {
            p = t
        },
        injectTreeTraversal: function(t) {
            h = t
        }
    }), y = {
        isEndish: r,
        isMoveish: o,
        isStartish: i,
        executeDirectDispatch: l,
        executeDispatchesInOrder: u,
        executeDispatchesInOrderStopAtTrue: c,
        hasDispatches: f,
        getInstanceFromNode: function(t) {
            return p.getInstanceFromNode(t)
        },
        getNodeFromInstance: function(t) {
            return p.getNodeFromInstance(t)
        },
        isAncestor: function(t, e) {
            return h.isAncestor(t, e)
        },
        getLowestCommonAncestor: function(t, e) {
            return h.getLowestCommonAncestor(t, e)
        },
        getParentInstance: function(t) {
            return h.getParentInstance(t)
        },
        traverseTwoPhase: function(t, e, n) {
            return h.traverseTwoPhase(t, e, n)
        },
        traverseEnterLeave: function(t, e, n, r, o) {
            return h.traverseEnterLeave(t, e, n, r, o)
        },
        injection: g
    };
    t.exports = y
}
, function(t, e) {
    "use strict";
    function n(t) {
        var e = /[=:]/g
          , n = {
            "=": "=0",
            ":": "=2"
        }
          , r = ("" + t).replace(e, function(t) {
            return n[t]
        });
        return "$" + r
    }
    function r(t) {
        var e = /(=0|=2)/g
          , n = {
            "=0": "=",
            "=2": ":"
        }
          , r = "." === t[0] && "$" === t[1] ? t.substring(2) : t.substring(1);
        return ("" + r).replace(e, function(t) {
            return n[t]
        })
    }
    var o = {
        escape: n,
        unescape: r
    };
    t.exports = o
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        null != t.checkedLink && null != t.valueLink ? u("87") : void 0
    }
    function o(t) {
        r(t),
        null != t.value || null != t.onChange ? u("88") : void 0
    }
    function i(t) {
        r(t),
        null != t.checked || null != t.onChange ? u("89") : void 0
    }
    function a(t) {
        if (t) {
            var e = t.getName();
            if (e)
                return " Check the render method of `" + e + "`."
        }
        return ""
    }
    var u = n(2)
      , s = n(278)
      , c = n(90)
      , l = n(22)
      , f = c(l.isValidElement)
      , p = (n(1),
    n(3),
    {
        button: !0,
        checkbox: !0,
        image: !0,
        hidden: !0,
        radio: !0,
        reset: !0,
        submit: !0
    })
      , h = {
        value: function(t, e, n) {
            return !t[e] || p[t.type] || t.onChange || t.readOnly || t.disabled ? null : new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")
        },
        checked: function(t, e, n) {
            return !t[e] || t.onChange || t.readOnly || t.disabled ? null : new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")
        },
        onChange: f.func
    }
      , d = {}
      , v = {
        checkPropTypes: function(t, e, n) {
            for (var r in h) {
                if (h.hasOwnProperty(r))
                    var o = h[r](e, r, t, "prop", null, s);
                if (o instanceof Error && !(o.message in d)) {
                    d[o.message] = !0;
                    a(n)
                }
            }
        },
        getValue: function(t) {
            return t.valueLink ? (o(t),
            t.valueLink.value) : t.value
        },
        getChecked: function(t) {
            return t.checkedLink ? (i(t),
            t.checkedLink.value) : t.checked
        },
        executeOnChange: function(t, e) {
            return t.valueLink ? (o(t),
            t.valueLink.requestChange(e.target.value)) : t.checkedLink ? (i(t),
            t.checkedLink.requestChange(e.target.checked)) : t.onChange ? t.onChange.call(void 0, e) : void 0
        }
    };
    t.exports = v
}
, function(t, e, n) {
    "use strict";
    var r = n(2)
      , o = (n(1),
    !1)
      , i = {
        replaceNodeWithMarkup: null,
        processChildrenUpdates: null,
        injection: {
            injectEnvironment: function(t) {
                o ? r("104") : void 0,
                i.replaceNodeWithMarkup = t.replaceNodeWithMarkup,
                i.processChildrenUpdates = t.processChildrenUpdates,
                o = !0
            }
        }
    };
    t.exports = i
}
, function(t, e, n) {
    "use strict";
    function r(t, e, n) {
        try {
            e(n)
        } catch (t) {
            null === o && (o = t)
        }
    }
    var o = null
      , i = {
        invokeGuardedCallback: r,
        invokeGuardedCallbackWithCatch: r,
        rethrowCaughtError: function() {
            if (o) {
                var t = o;
                throw o = null,
                t
            }
        }
    };
    t.exports = i
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        s.enqueueUpdate(t)
    }
    function o(t) {
        var e = typeof t;
        if ("object" !== e)
            return e;
        var n = t.constructor && t.constructor.name || e
          , r = Object.keys(t);
        return r.length > 0 && r.length < 20 ? n + " (keys: " + r.join(", ") + ")" : n
    }
    function i(t, e) {
        var n = u.get(t);
        if (!n) {
            return null
        }
        return n
    }
    var a = n(2)
      , u = (n(13),
    n(27))
      , s = (n(7),
    n(9))
      , c = (n(1),
    n(3),
    {
        isMounted: function(t) {
            var e = u.get(t);
            return !!e && !!e._renderedComponent
        },
        enqueueCallback: function(t, e, n) {
            c.validateCallback(e, n);
            var o = i(t);
            return o ? (o._pendingCallbacks ? o._pendingCallbacks.push(e) : o._pendingCallbacks = [e],
            void r(o)) : null
        },
        enqueueCallbackInternal: function(t, e) {
            t._pendingCallbacks ? t._pendingCallbacks.push(e) : t._pendingCallbacks = [e],
            r(t)
        },
        enqueueForceUpdate: function(t) {
            var e = i(t, "forceUpdate");
            e && (e._pendingForceUpdate = !0,
            r(e))
        },
        enqueueReplaceState: function(t, e, n) {
            var o = i(t, "replaceState");
            o && (o._pendingStateQueue = [e],
            o._pendingReplaceState = !0,
            void 0 !== n && null !== n && (c.validateCallback(n, "replaceState"),
            o._pendingCallbacks ? o._pendingCallbacks.push(n) : o._pendingCallbacks = [n]),
            r(o))
        },
        enqueueSetState: function(t, e) {
            var n = i(t, "setState");
            if (n) {
                var o = n._pendingStateQueue || (n._pendingStateQueue = []);
                o.push(e),
                r(n)
            }
        },
        enqueueElementInternal: function(t, e, n) {
            t._pendingElement = e,
            t._context = n,
            r(t)
        },
        validateCallback: function(t, e) {
            t && "function" != typeof t ? a("122", e, o(t)) : void 0
        }
    });
    t.exports = c
}
, function(t, e) {
    "use strict";
    var n = function(t) {
        return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, n, r, o) {
            MSApp.execUnsafeLocalFunction(function() {
                return t(e, n, r, o)
            })
        }
        : t
    };
    t.exports = n
}
, function(t, e) {
    "use strict";
    function n(t) {
        var e, n = t.keyCode;
        return "charCode"in t ? (e = t.charCode,
        0 === e && 13 === n && (e = 13)) : e = n,
        e >= 32 || 13 === e ? e : 0
    }
    t.exports = n
}
, function(t, e) {
    "use strict";
    function n(t) {
        var e = this
          , n = e.nativeEvent;
        if (n.getModifierState)
            return n.getModifierState(t);
        var r = o[t];
        return !!r && !!n[r]
    }
    function r(t) {
        return n
    }
    var o = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    t.exports = r
}
, function(t, e) {
    "use strict";
    function n(t) {
        var e = t.target || t.srcElement || window;
        return e.correspondingUseElement && (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
    }
    t.exports = n
}
, function(t, e, n) {
    "use strict";
    function r(t, e) {
        if (!i.canUseDOM || e && !("addEventListener"in document))
            return !1;
        var n = "on" + t
          , r = n in document;
        if (!r) {
            var a = document.createElement("div");
            a.setAttribute(n, "return;"),
            r = "function" == typeof a[n]
        }
        return !r && o && "wheel" === t && (r = document.implementation.hasFeature("Events.wheel", "3.0")),
        r
    }
    var o, i = n(6);
    i.canUseDOM && (o = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0),
    t.exports = r
}
, function(t, e) {
    "use strict";
    function n(t, e) {
        var n = null === t || t === !1
          , r = null === e || e === !1;
        if (n || r)
            return n === r;
        var o = typeof t
          , i = typeof e;
        return "string" === o || "number" === o ? "string" === i || "number" === i : "object" === i && t.type === e.type && t.key === e.key
    }
    t.exports = n
}
, function(t, e, n) {
    "use strict";
    var r = (n(4),
    n(8))
      , o = (n(3),
    r);
    t.exports = o
}
, function(t, e) {
    "use strict";
    function n(t) {
        return t instanceof Object && Object.keys(t).length > 0
    }
    function r(t) {
        var e = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        return e.test(t)
    }
    function o(t, e) {
        var a = "";
        if ("string" == typeof t)
            t = t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"),
            a += r(t) ? '<a href="' + t + '" class="json-literal-url">"' + t + '"</a>' : '<span class="json-literal-string">"' + t + '"</span>';
        else if ("number" == typeof t)
            a += '<span class="json-literal-numeric">' + t + "</span>";
        else if ("boolean" == typeof t)
            a += '<span class="json-literal-boolean">' + t + "</span>";
        else if (null === t)
            a += '<span class="json-literal">null</span>';
        else if (t instanceof Array)
            if (t.length > 0) {
                a += '[<ol class="json-array">';
                for (var u = 0; u < t.length; ++u)
                    a += "<li>",
                    n(t[u]) && (a += '<a href class="json-toggle"></a>'),
                    a += o(t[u], e),
                    u < t.length - 1 && (a += ","),
                    a += "</li>";
                a += "</ol>]"
            } else
                a += "[]";
        else if ("object" === ("undefined" == typeof t ? "undefined" : i(t))) {
            var s = Object.keys(t).length;
            if (s > 0) {
                a += '{<ul class="json-dict ">';
                for (var c in t)
                    if (t.hasOwnProperty(c)) {
                        a += "<li>";
                        var l = e.withQuotes ? '<span class="property">"' + c + '"</span>' : c;
                        a += n(t[c]) ? '<a href class="json-toggle">' + l + "</a>" : l,
                        a += ": " + o(t[c], e),
                        --s > 0 && (a += ","),
                        a += "</li>"
                    }
                a += "</ul>}"
            } else
                a += "{}"
        }
        return a
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ;
    e.initPlugin = function(t, e, r, i) {
        !function(t, e, r, i) {
            return i = i || {
                collapsed: !1
            },
            t(e).each(function() {
                var e = o(r, i);
                n(r) && (e = '<a href class="json-toggle"></a>' + e),
                t(this).html(e),
                t(this).off("click"),
                t(this).on("click", "span.property", function(e) {
                    t("li").removeClass("copyable"),
                    t(this).parents("li").first().addClass("copyable")
                }),
                t(this).on("click", "a.json-placeholder", function() {
                    return t(this).siblings("a.json-toggle").click(),
                    !1
                })
            })
        }(e, t, r, i)
    }
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return (0,
        o.is)(Function, t) ? t : function() {
            return t
        }
    }
    e.__esModule = !0,
    e.default = r;
    var o = n(18)
}
, function(t, e) {}
, function(t, e, n) {
    "use strict";
    var r = n(8)
      , o = {
        listen: function(t, e, n) {
            return t.addEventListener ? (t.addEventListener(e, n, !1),
            {
                remove: function() {
                    t.removeEventListener(e, n, !1)
                }
            }) : t.attachEvent ? (t.attachEvent("on" + e, n),
            {
                remove: function() {
                    t.detachEvent("on" + e, n)
                }
            }) : void 0
        },
        capture: function(t, e, n) {
            return t.addEventListener ? (t.addEventListener(e, n, !0),
            {
                remove: function() {
                    t.removeEventListener(e, n, !0)
                }
            }) : {
                remove: r
            }
        },
        registerDefault: function() {}
    };
    t.exports = o
}
, function(t, e) {
    "use strict";
    function n(t) {
        try {
            t.focus()
        } catch (t) {}
    }
    t.exports = n
}
, function(t, e) {
    "use strict";
    function n(t) {
        if (t = t || ("undefined" != typeof document ? document : void 0),
        "undefined" == typeof t)
            return null;
        try {
            return t.activeElement || t.body
        } catch (e) {
            return t.body
        }
    }
    t.exports = n
}
, function(t, e, n) {
    function r(t) {
        var e = this.__data__ = new o(t);
        this.size = e.size
    }
    var o = n(31)
      , i = n(223)
      , a = n(224)
      , u = n(225)
      , s = n(226)
      , c = n(227);
    r.prototype.clear = i,
    r.prototype.delete = a,
    r.prototype.get = u,
    r.prototype.has = s,
    r.prototype.set = c,
    t.exports = r
}
, function(t, e, n) {
    function r(t, e) {
        e = o(e, t);
        for (var n = 0, r = e.length; null != t && n < r; )
            t = t[i(e[n++])];
        return n && n == r ? t : void 0
    }
    var o = n(76)
      , i = n(36);
    t.exports = r
}
, function(t, e, n) {
    function r(t, e, n, a, u) {
        return t === e || (null == t || null == e || !i(t) && !i(e) ? t !== t && e !== e : o(t, e, n, a, r, u))
    }
    var o = n(170)
      , i = n(17);
    t.exports = r
}
, function(t, e, n) {
    function r(t, e) {
        return o(t) ? t : i(t, e) ? [t] : a(u(t))
    }
    var o = n(11)
      , i = n(45)
      , a = n(228)
      , u = n(239);
    t.exports = r
}
, function(t, e, n) {
    function r(t, e, n, r, c, l) {
        var f = n & u
          , p = t.length
          , h = e.length;
        if (p != h && !(f && h > p))
            return !1;
        var d = l.get(t);
        if (d && l.get(e))
            return d == e;
        var v = -1
          , g = !0
          , y = n & s ? new o : void 0;
        for (l.set(t, e),
        l.set(e, t); ++v < p; ) {
            var m = t[v]
              , b = e[v];
            if (r)
                var x = f ? r(b, m, v, e, t, l) : r(m, b, v, t, e, l);
            if (void 0 !== x) {
                if (x)
                    continue;
                g = !1;
                break
            }
            if (y) {
                if (!i(e, function(t, e) {
                    if (!a(y, e) && (m === t || c(m, t, n, r, l)))
                        return y.push(e)
                })) {
                    g = !1;
                    break
                }
            } else if (m !== b && !c(m, b, n, r, l)) {
                g = !1;
                break
            }
        }
        return l.delete(t),
        l.delete(e),
        g
    }
    var o = n(156)
      , i = n(163)
      , a = n(183)
      , u = 1
      , s = 2;
    t.exports = r
}
, function(t, e) {
    (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.exports = n
    }
    ).call(e, function() {
        return this
    }())
}
, function(t, e) {
    function n(t, e) {
        var n = typeof t;
        return e = null == e ? r : e,
        !!e && ("number" == n || "symbol" != n && o.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
    var r = 9007199254740991
      , o = /^(?:0|[1-9]\d*)$/;
    t.exports = n
}
, function(t, e, n) {
    function r(t) {
        return t === t && !o(t)
    }
    var o = n(47);
    t.exports = r
}
, function(t, e) {
    function n(t, e) {
        return function(n) {
            return null != n && (n[t] === e && (void 0 !== e || t in Object(n)))
        }
    }
    t.exports = n
}
, function(t, e) {
    function n(t, e) {
        return function(n) {
            return t(e(n))
        }
    }
    t.exports = n
}
, function(t, e) {
    function n(t) {
        if (null != t) {
            try {
                return o.call(t)
            } catch (t) {}
            try {
                return t + ""
            } catch (t) {}
        }
        return ""
    }
    var r = Function.prototype
      , o = r.toString;
    t.exports = n
}
, function(t, e) {
    function n(t, e) {
        return t === e || t !== t && e !== e
    }
    t.exports = n
}
, function(t, e, n) {
    var r = n(169)
      , o = n(17)
      , i = Object.prototype
      , a = i.hasOwnProperty
      , u = i.propertyIsEnumerable
      , s = r(function() {
        return arguments
    }()) ? r : function(t) {
        return o(t) && a.call(t, "callee") && !u.call(t, "callee")
    }
    ;
    t.exports = s
}
, function(t, e, n) {
    (function(t) {
        var r = n(10)
          , o = n(238)
          , i = "object" == typeof e && e && !e.nodeType && e
          , a = i && "object" == typeof t && t && !t.nodeType && t
          , u = a && a.exports === i
          , s = u ? r.Buffer : void 0
          , c = s ? s.isBuffer : void 0
          , l = c || o;
        t.exports = l
    }
    ).call(e, n(118)(t))
}
, function(t, e, n) {
    function r(t) {
        if (!i(t))
            return !1;
        var e = o(t);
        return e == u || e == s || e == a || e == c
    }
    var o = n(16)
      , i = n(47)
      , a = "[object AsyncFunction]"
      , u = "[object Function]"
      , s = "[object GeneratorFunction]"
      , c = "[object Proxy]";
    t.exports = r
}
, function(t, e, n) {
    var r = n(173)
      , o = n(182)
      , i = n(218)
      , a = i && i.isTypedArray
      , u = a ? o(a) : r;
    t.exports = u
}
, function(t, e) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }
    function r() {
        throw new Error("clearTimeout has not been defined")
    }
    function o(t) {
        if (l === setTimeout)
            return setTimeout(t, 0);
        if ((l === n || !l) && setTimeout)
            return l = setTimeout,
            setTimeout(t, 0);
        try {
            return l(t, 0)
        } catch (e) {
            try {
                return l.call(null, t, 0)
            } catch (e) {
                return l.call(this, t, 0)
            }
        }
    }
    function i(t) {
        if (f === clearTimeout)
            return clearTimeout(t);
        if ((f === r || !f) && clearTimeout)
            return f = clearTimeout,
            clearTimeout(t);
        try {
            return f(t)
        } catch (e) {
            try {
                return f.call(null, t)
            } catch (e) {
                return f.call(this, t)
            }
        }
    }
    function a() {
        v && h && (v = !1,
        h.length ? d = h.concat(d) : g = -1,
        d.length && u())
    }
    function u() {
        if (!v) {
            var t = o(a);
            v = !0;
            for (var e = d.length; e; ) {
                for (h = d,
                d = []; ++g < e; )
                    h && h[g].run();
                g = -1,
                e = d.length
            }
            h = null,
            v = !1,
            i(t)
        }
    }
    function s(t, e) {
        this.fun = t,
        this.array = e
    }
    function c() {}
    var l, f, p = t.exports = {};
    !function() {
        try {
            l = "function" == typeof setTimeout ? setTimeout : n
        } catch (t) {
            l = n
        }
        try {
            f = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (t) {
            f = r
        }
    }();
    var h, d = [], v = !1, g = -1;
    p.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
        d.push(new s(t,e)),
        1 !== d.length || v || o(u)
    }
    ,
    s.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    p.title = "browser",
    p.browser = !0,
    p.env = {},
    p.argv = [],
    p.version = "",
    p.versions = {},
    p.on = c,
    p.addListener = c,
    p.once = c,
    p.off = c,
    p.removeListener = c,
    p.removeAllListeners = c,
    p.emit = c,
    p.prependListener = c,
    p.prependOnceListener = c,
    p.listeners = function(t) {
        return []
    }
    ,
    p.binding = function(t) {
        throw new Error("process.binding is not supported")
    }
    ,
    p.cwd = function() {
        return "/"
    }
    ,
    p.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }
    ,
    p.umask = function() {
        return 0
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(242);
    t.exports = function(t) {
        var e = !1;
        return r(t, e)
    }
}
, function(t, e) {
    "use strict";
    function n(t, e) {
        return t + e.charAt(0).toUpperCase() + e.substring(1)
    }
    var r = {
        animationIterationCount: !0,
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
        strokeWidth: !0
    }
      , o = ["Webkit", "ms", "Moz", "O"];
    Object.keys(r).forEach(function(t) {
        o.forEach(function(e) {
            r[n(e, t)] = r[t]
        })
    });
    var i = {
        background: {
            backgroundAttachment: !0,
            backgroundColor: !0,
            backgroundImage: !0,
            backgroundPositionX: !0,
            backgroundPositionY: !0,
            backgroundRepeat: !0
        },
        backgroundPosition: {
            backgroundPositionX: !0,
            backgroundPositionY: !0
        },
        border: {
            borderWidth: !0,
            borderStyle: !0,
            borderColor: !0
        },
        borderBottom: {
            borderBottomWidth: !0,
            borderBottomStyle: !0,
            borderBottomColor: !0
        },
        borderLeft: {
            borderLeftWidth: !0,
            borderLeftStyle: !0,
            borderLeftColor: !0
        },
        borderRight: {
            borderRightWidth: !0,
            borderRightStyle: !0,
            borderRightColor: !0
        },
        borderTop: {
            borderTopWidth: !0,
            borderTopStyle: !0,
            borderTopColor: !0
        },
        font: {
            fontStyle: !0,
            fontVariant: !0,
            fontWeight: !0,
            fontSize: !0,
            lineHeight: !0,
            fontFamily: !0
        },
        outline: {
            outlineWidth: !0,
            outlineStyle: !0,
            outlineColor: !0
        }
    }
      , a = {
        isUnitlessNumber: r,
        shorthandPropertyExpansions: i
    };
    t.exports = a
}
, function(t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    var o = n(2)
      , i = n(15)
      , a = (n(1),
    function() {
        function t(e) {
            r(this, t),
            this._callbacks = null,
            this._contexts = null,
            this._arg = e
        }
        return t.prototype.enqueue = function(t, e) {
            this._callbacks = this._callbacks || [],
            this._callbacks.push(t),
            this._contexts = this._contexts || [],
            this._contexts.push(e)
        }
        ,
        t.prototype.notifyAll = function() {
            var t = this._callbacks
              , e = this._contexts
              , n = this._arg;
            if (t && e) {
                t.length !== e.length ? o("24") : void 0,
                this._callbacks = null,
                this._contexts = null;
                for (var r = 0; r < t.length; r++)
                    t[r].call(e[r], n);
                t.length = 0,
                e.length = 0
            }
        }
        ,
        t.prototype.checkpoint = function() {
            return this._callbacks ? this._callbacks.length : 0
        }
        ,
        t.prototype.rollback = function(t) {
            this._callbacks && this._contexts && (this._callbacks.length = t,
            this._contexts.length = t)
        }
        ,
        t.prototype.reset = function() {
            this._callbacks = null,
            this._contexts = null
        }
        ,
        t.prototype.destructor = function() {
            this.reset()
        }
        ,
        t
    }());
    t.exports = i.addPoolingTo(a)
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return !!c.hasOwnProperty(t) || !s.hasOwnProperty(t) && (u.test(t) ? (c[t] = !0,
        !0) : (s[t] = !0,
        !1))
    }
    function o(t, e) {
        return null == e || t.hasBooleanValue && !e || t.hasNumericValue && isNaN(e) || t.hasPositiveNumericValue && e < 1 || t.hasOverloadedBooleanValue && e === !1
    }
    var i = n(20)
      , a = (n(5),
    n(7),
    n(305))
      , u = (n(3),
    new RegExp("^[" + i.ATTRIBUTE_NAME_START_CHAR + "][" + i.ATTRIBUTE_NAME_CHAR + "]*$"))
      , s = {}
      , c = {}
      , l = {
        createMarkupForID: function(t) {
            return i.ID_ATTRIBUTE_NAME + "=" + a(t)
        },
        setAttributeForID: function(t, e) {
            t.setAttribute(i.ID_ATTRIBUTE_NAME, e)
        },
        createMarkupForRoot: function() {
            return i.ROOT_ATTRIBUTE_NAME + '=""'
        },
        setAttributeForRoot: function(t) {
            t.setAttribute(i.ROOT_ATTRIBUTE_NAME, "")
        },
        createMarkupForProperty: function(t, e) {
            var n = i.properties.hasOwnProperty(t) ? i.properties[t] : null;
            if (n) {
                if (o(n, e))
                    return "";
                var r = n.attributeName;
                return n.hasBooleanValue || n.hasOverloadedBooleanValue && e === !0 ? r + '=""' : r + "=" + a(e)
            }
            return i.isCustomAttribute(t) ? null == e ? "" : t + "=" + a(e) : null
        },
        createMarkupForCustomAttribute: function(t, e) {
            return r(t) && null != e ? t + "=" + a(e) : ""
        },
        setValueForProperty: function(t, e, n) {
            var r = i.properties.hasOwnProperty(e) ? i.properties[e] : null;
            if (r) {
                var a = r.mutationMethod;
                if (a)
                    a(t, n);
                else {
                    if (o(r, n))
                        return void this.deleteValueForProperty(t, e);
                    if (r.mustUseProperty)
                        t[r.propertyName] = n;
                    else {
                        var u = r.attributeName
                          , s = r.attributeNamespace;
                        s ? t.setAttributeNS(s, u, "" + n) : r.hasBooleanValue || r.hasOverloadedBooleanValue && n === !0 ? t.setAttribute(u, "") : t.setAttribute(u, "" + n)
                    }
                }
            } else if (i.isCustomAttribute(e))
                return void l.setValueForAttribute(t, e, n)
        },
        setValueForAttribute: function(t, e, n) {
            if (r(e)) {
                null == n ? t.removeAttribute(e) : t.setAttribute(e, "" + n)
            }
        },
        deleteValueForAttribute: function(t, e) {
            t.removeAttribute(e)
        },
        deleteValueForProperty: function(t, e) {
            var n = i.properties.hasOwnProperty(e) ? i.properties[e] : null;
            if (n) {
                var r = n.mutationMethod;
                if (r)
                    r(t, void 0);
                else if (n.mustUseProperty) {
                    var o = n.propertyName;
                    n.hasBooleanValue ? t[o] = !1 : t[o] = ""
                } else
                    t.removeAttribute(n.attributeName)
            } else
                i.isCustomAttribute(e) && t.removeAttribute(e)
        }
    };
    t.exports = l
}
, function(t, e) {
    "use strict";
    var n = {
        hasCachedChildNodes: 1
    };
    t.exports = n
}
, function(t, e, n) {
    "use strict";
    function r() {
        if (this._rootNodeID && this._wrapperState.pendingUpdate) {
            this._wrapperState.pendingUpdate = !1;
            var t = this._currentElement.props
              , e = u.getValue(t);
            null != e && o(this, Boolean(t.multiple), e)
        }
    }
    function o(t, e, n) {
        var r, o, i = s.getNodeFromInstance(t).options;
        if (e) {
            for (r = {},
            o = 0; o < n.length; o++)
                r["" + n[o]] = !0;
            for (o = 0; o < i.length; o++) {
                var a = r.hasOwnProperty(i[o].value);
                i[o].selected !== a && (i[o].selected = a)
            }
        } else {
            for (r = "" + n,
            o = 0; o < i.length; o++)
                if (i[o].value === r)
                    return void (i[o].selected = !0);
            i.length && (i[0].selected = !0)
        }
    }
    function i(t) {
        var e = this._currentElement.props
          , n = u.executeOnChange(e, t);
        return this._rootNodeID && (this._wrapperState.pendingUpdate = !0),
        c.asap(r, this),
        n
    }
    var a = n(4)
      , u = n(56)
      , s = n(5)
      , c = n(9)
      , l = (n(3),
    !1)
      , f = {
        getHostProps: function(t, e) {
            return a({}, e, {
                onChange: t._wrapperState.onChange,
                value: void 0
            })
        },
        mountWrapper: function(t, e) {
            var n = u.getValue(e);
            t._wrapperState = {
                pendingUpdate: !1,
                initialValue: null != n ? n : e.defaultValue,
                listeners: null,
                onChange: i.bind(t),
                wasMultiple: Boolean(e.multiple)
            },
            void 0 === e.value || void 0 === e.defaultValue || l || (l = !0)
        },
        getSelectValueContext: function(t) {
            return t._wrapperState.initialValue
        },
        postUpdateWrapper: function(t) {
            var e = t._currentElement.props;
            t._wrapperState.initialValue = void 0;
            var n = t._wrapperState.wasMultiple;
            t._wrapperState.wasMultiple = Boolean(e.multiple);
            var r = u.getValue(e);
            null != r ? (t._wrapperState.pendingUpdate = !1,
            o(t, Boolean(e.multiple), r)) : n !== Boolean(e.multiple) && (null != e.defaultValue ? o(t, Boolean(e.multiple), e.defaultValue) : o(t, Boolean(e.multiple), e.multiple ? [] : ""))
        }
    };
    t.exports = f
}
, function(t, e) {
    "use strict";
    var n, r = {
        injectEmptyComponentFactory: function(t) {
            n = t
        }
    }, o = {
        create: function(t) {
            return n(t)
        }
    };
    o.injection = r,
    t.exports = o
}
, function(t, e) {
    "use strict";
    var n = {
        logTopLevelRenders: !1
    };
    t.exports = n
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return u ? void 0 : a("111", t.type),
        new u(t)
    }
    function o(t) {
        return new s(t)
    }
    function i(t) {
        return t instanceof s
    }
    var a = n(2)
      , u = (n(1),
    null)
      , s = null
      , c = {
        injectGenericComponentClass: function(t) {
            u = t
        },
        injectTextComponentClass: function(t) {
            s = t
        }
    }
      , l = {
        createInternalComponent: r,
        createInstanceForText: o,
        isTextComponent: i,
        injection: c
    };
    t.exports = l
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return i(document.documentElement, t)
    }
    var o = n(265)
      , i = n(141)
      , a = n(71)
      , u = n(72)
      , s = {
        hasSelectionCapabilities: function(t) {
            var e = t && t.nodeName && t.nodeName.toLowerCase();
            return e && ("input" === e && "text" === t.type || "textarea" === e || "true" === t.contentEditable)
        },
        getSelectionInformation: function() {
            var t = u();
            return {
                focusedElem: t,
                selectionRange: s.hasSelectionCapabilities(t) ? s.getSelection(t) : null
            }
        },
        restoreSelection: function(t) {
            var e = u()
              , n = t.focusedElem
              , o = t.selectionRange;
            e !== n && r(n) && (s.hasSelectionCapabilities(n) && s.setSelection(n, o),
            a(n))
        },
        getSelection: function(t) {
            var e;
            if ("selectionStart"in t)
                e = {
                    start: t.selectionStart,
                    end: t.selectionEnd
                };
            else if (document.selection && t.nodeName && "input" === t.nodeName.toLowerCase()) {
                var n = document.selection.createRange();
                n.parentElement() === t && (e = {
                    start: -n.moveStart("character", -t.value.length),
                    end: -n.moveEnd("character", -t.value.length)
                })
            } else
                e = o.getOffsets(t);
            return e || {
                start: 0,
                end: 0
            }
        },
        setSelection: function(t, e) {
            var n = e.start
              , r = e.end;
            if (void 0 === r && (r = n),
            "selectionStart"in t)
                t.selectionStart = n,
                t.selectionEnd = Math.min(r, t.value.length);
            else if (document.selection && t.nodeName && "input" === t.nodeName.toLowerCase()) {
                var i = t.createTextRange();
                i.collapse(!0),
                i.moveStart("character", n),
                i.moveEnd("character", r - n),
                i.select()
            } else
                o.setOffsets(t, e)
        }
    };
    t.exports = s
}
, function(t, e, n) {
    "use strict";
    function r(t, e) {
        for (var n = Math.min(t.length, e.length), r = 0; r < n; r++)
            if (t.charAt(r) !== e.charAt(r))
                return r;
        return t.length === e.length ? -1 : n
    }
    function o(t) {
        return t ? t.nodeType === D ? t.documentElement : t.firstChild : null
    }
    function i(t) {
        return t.getAttribute && t.getAttribute(O) || ""
    }
    function a(t, e, n, r, o) {
        var i;
        if (_.logTopLevelRenders) {
            var a = t._currentElement.props.child
              , u = a.type;
            i = "React mount: " + ("string" == typeof u ? u : u.displayName || u.name),
            console.time(i)
        }
        var s = E.mountComponent(t, n, null, b(t, e), o, 0);
        i && console.timeEnd(i),
        t._renderedComponent._topLevelWrapper = t,
        F._mountImageIntoNode(s, e, t, r, n)
    }
    function u(t, e, n, r) {
        var o = k.ReactReconcileTransaction.getPooled(!n && x.useCreateElement);
        o.perform(a, null, t, e, o, n, r),
        k.ReactReconcileTransaction.release(o)
    }
    function s(t, e, n) {
        for (E.unmountComponent(t, n),
        e.nodeType === D && (e = e.documentElement); e.lastChild; )
            e.removeChild(e.lastChild)
    }
    function c(t) {
        var e = o(t);
        if (e) {
            var n = m.getInstanceFromNode(e);
            return !(!n || !n._hostParent)
        }
    }
    function l(t) {
        return !(!t || t.nodeType !== j && t.nodeType !== D && t.nodeType !== I)
    }
    function f(t) {
        var e = o(t)
          , n = e && m.getInstanceFromNode(e);
        return n && !n._hostParent ? n : null
    }
    function p(t) {
        var e = f(t);
        return e ? e._hostContainerInfo._topLevelWrapper : null
    }
    var h = n(2)
      , d = n(19)
      , v = n(20)
      , g = n(22)
      , y = n(37)
      , m = (n(13),
    n(5))
      , b = n(259)
      , x = n(261)
      , _ = n(97)
      , w = n(27)
      , C = (n(7),
    n(275))
      , E = n(21)
      , M = n(59)
      , k = n(9)
      , S = n(30)
      , T = n(108)
      , N = (n(1),
    n(41))
      , A = n(65)
      , O = (n(3),
    v.ID_ATTRIBUTE_NAME)
      , P = v.ROOT_ATTRIBUTE_NAME
      , j = 1
      , D = 9
      , I = 11
      , R = {}
      , L = 1
      , U = function() {
        this.rootID = L++
    };
    U.prototype.isReactComponent = {},
    U.prototype.render = function() {
        return this.props.child
    }
    ,
    U.isReactTopLevelWrapper = !0;
    var F = {
        TopLevelWrapper: U,
        _instancesByReactRootID: R,
        scrollMonitor: function(t, e) {
            e()
        },
        _updateRootComponent: function(t, e, n, r, o) {
            return F.scrollMonitor(r, function() {
                M.enqueueElementInternal(t, e, n),
                o && M.enqueueCallbackInternal(t, o)
            }),
            t
        },
        _renderNewRootComponent: function(t, e, n, r) {
            l(e) ? void 0 : h("37"),
            y.ensureScrollValueMonitoring();
            var o = T(t, !1);
            k.batchedUpdates(u, o, e, n, r);
            var i = o._instance.rootID;
            return R[i] = o,
            o
        },
        renderSubtreeIntoContainer: function(t, e, n, r) {
            return null != t && w.has(t) ? void 0 : h("38"),
            F._renderSubtreeIntoContainer(t, e, n, r)
        },
        _renderSubtreeIntoContainer: function(t, e, n, r) {
            M.validateCallback(r, "ReactDOM.render"),
            g.isValidElement(e) ? void 0 : h("39", "string" == typeof e ? " Instead of passing a string like 'div', pass React.createElement('div') or <div />." : "function" == typeof e ? " Instead of passing a class like Foo, pass React.createElement(Foo) or <Foo />." : null != e && void 0 !== e.props ? " This may be caused by unintentionally loading two independent copies of React." : "");
            var a, u = g.createElement(U, {
                child: e
            });
            if (t) {
                var s = w.get(t);
                a = s._processChildContext(s._context)
            } else
                a = S;
            var l = p(n);
            if (l) {
                var f = l._currentElement
                  , d = f.props.child;
                if (A(d, e)) {
                    var v = l._renderedComponent.getPublicInstance()
                      , y = r && function() {
                        r.call(v)
                    }
                    ;
                    return F._updateRootComponent(l, u, a, n, y),
                    v
                }
                F.unmountComponentAtNode(n)
            }
            var m = o(n)
              , b = m && !!i(m)
              , x = c(n)
              , _ = b && !l && !x
              , C = F._renderNewRootComponent(u, n, _, a)._renderedComponent.getPublicInstance();
            return r && r.call(C),
            C
        },
        render: function(t, e, n) {
            return F._renderSubtreeIntoContainer(null, t, e, n)
        },
        unmountComponentAtNode: function(t) {
            l(t) ? void 0 : h("40");
            var e = p(t);
            if (!e) {
                c(t),
                1 === t.nodeType && t.hasAttribute(P);
                return !1
            }
            return delete R[e._instance.rootID],
            k.batchedUpdates(s, e, t, !1),
            !0
        },
        _mountImageIntoNode: function(t, e, n, i, a) {
            if (l(e) ? void 0 : h("41"),
            i) {
                var u = o(e);
                if (C.canReuseMarkup(t, u))
                    return void m.precacheNode(n, u);
                var s = u.getAttribute(C.CHECKSUM_ATTR_NAME);
                u.removeAttribute(C.CHECKSUM_ATTR_NAME);
                var c = u.outerHTML;
                u.setAttribute(C.CHECKSUM_ATTR_NAME, s);
                var f = t
                  , p = r(f, c)
                  , v = " (client) " + f.substring(p - 20, p + 20) + "\n (server) " + c.substring(p - 20, p + 20);
                e.nodeType === D ? h("42", v) : void 0
            }
            if (e.nodeType === D ? h("43") : void 0,
            a.useCreateElement) {
                for (; e.lastChild; )
                    e.removeChild(e.lastChild);
                d.insertTreeBefore(e, t, null)
            } else
                N(e, t),
                m.precacheNode(n, e.firstChild)
        }
    };
    t.exports = F
}
, function(t, e, n) {
    "use strict";
    var r = n(2)
      , o = n(22)
      , i = (n(1),
    {
        HOST: 0,
        COMPOSITE: 1,
        EMPTY: 2,
        getType: function(t) {
            return null === t || t === !1 ? i.EMPTY : o.isValidElement(t) ? "function" == typeof t.type ? i.COMPOSITE : i.HOST : void r("26", t)
        }
    });
    t.exports = i
}
, function(t, e) {
    "use strict";
    var n = {
        currentScrollLeft: 0,
        currentScrollTop: 0,
        refreshScrollValues: function(t) {
            n.currentScrollLeft = t.x,
            n.currentScrollTop = t.y
        }
    };
    t.exports = n
}
, function(t, e, n) {
    "use strict";
    function r(t, e) {
        return null == e ? o("30") : void 0,
        null == t ? e : Array.isArray(t) ? Array.isArray(e) ? (t.push.apply(t, e),
        t) : (t.push(e),
        t) : Array.isArray(e) ? [t].concat(e) : [t, e]
    }
    var o = n(2);
    n(1);
    t.exports = r
}
, function(t, e) {
    "use strict";
    function n(t, e, n) {
        Array.isArray(t) ? t.forEach(e, n) : t && e.call(n, t)
    }
    t.exports = n
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        for (var e; (e = t._renderedNodeType) === o.COMPOSITE; )
            t = t._renderedComponent;
        return e === o.HOST ? t._renderedComponent : e === o.EMPTY ? null : void 0
    }
    var o = n(101);
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    function r() {
        return !i && o.canUseDOM && (i = "textContent"in document.documentElement ? "textContent" : "innerText"),
        i
    }
    var o = n(6)
      , i = null;
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        var e = t.type
          , n = t.nodeName;
        return n && "input" === n.toLowerCase() && ("checkbox" === e || "radio" === e)
    }
    function o(t) {
        return t._wrapperState.valueTracker
    }
    function i(t, e) {
        t._wrapperState.valueTracker = e
    }
    function a(t) {
        t._wrapperState.valueTracker = null
    }
    function u(t) {
        var e;
        return t && (e = r(t) ? "" + t.checked : t.value),
        e
    }
    var s = n(5)
      , c = {
        _getTrackerFromNode: function(t) {
            return o(s.getInstanceFromNode(t))
        },
        track: function(t) {
            if (!o(t)) {
                var e = s.getNodeFromInstance(t)
                  , n = r(e) ? "checked" : "value"
                  , u = Object.getOwnPropertyDescriptor(e.constructor.prototype, n)
                  , c = "" + e[n];
                e.hasOwnProperty(n) || "function" != typeof u.get || "function" != typeof u.set || (Object.defineProperty(e, n, {
                    enumerable: u.enumerable,
                    configurable: !0,
                    get: function() {
                        return u.get.call(this)
                    },
                    set: function(t) {
                        c = "" + t,
                        u.set.call(this, t)
                    }
                }),
                i(t, {
                    getValue: function() {
                        return c
                    },
                    setValue: function(t) {
                        c = "" + t
                    },
                    stopTracking: function() {
                        a(t),
                        delete e[n]
                    }
                }))
            }
        },
        updateValueIfChanged: function(t) {
            if (!t)
                return !1;
            var e = o(t);
            if (!e)
                return c.track(t),
                !0;
            var n = e.getValue()
              , r = u(s.getNodeFromInstance(t));
            return r !== n && (e.setValue(r),
            !0)
        },
        stopTracking: function(t) {
            var e = o(t);
            e && e.stopTracking()
        }
    };
    t.exports = c
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        if (t) {
            var e = t.getName();
            if (e)
                return " Check the render method of `" + e + "`."
        }
        return ""
    }
    function o(t) {
        return "function" == typeof t && "undefined" != typeof t.prototype && "function" == typeof t.prototype.mountComponent && "function" == typeof t.prototype.receiveComponent
    }
    function i(t, e) {
        var n;
        if (null === t || t === !1)
            n = c.create(i);
        else if ("object" == typeof t) {
            var u = t
              , s = u.type;
            if ("function" != typeof s && "string" != typeof s) {
                var p = "";
                p += r(u._owner),
                a("130", null == s ? s : typeof s, p)
            }
            "string" == typeof u.type ? n = l.createInternalComponent(u) : o(u.type) ? (n = new u.type(u),
            n.getHostNode || (n.getHostNode = n.getNativeNode)) : n = new f(u)
        } else
            "string" == typeof t || "number" == typeof t ? n = l.createInstanceForText(t) : a("131", typeof t);
        return n._mountIndex = 0,
        n._mountImage = null,
        n
    }
    var a = n(2)
      , u = n(4)
      , s = n(256)
      , c = n(96)
      , l = n(98)
      , f = (n(322),
    n(1),
    n(3),
    function(t) {
        this.construct(t)
    }
    );
    u(f.prototype, s, {
        _instantiateReactComponent: i
    }),
    t.exports = i
}
, function(t, e) {
    "use strict";
    function n(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return "input" === e ? !!r[t.type] : "textarea" === e
    }
    var r = {
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
        week: !0
    };
    t.exports = n
}
, function(t, e, n) {
    "use strict";
    var r = n(6)
      , o = n(40)
      , i = n(41)
      , a = function(t, e) {
        if (e) {
            var n = t.firstChild;
            if (n && n === t.lastChild && 3 === n.nodeType)
                return void (n.nodeValue = e)
        }
        t.textContent = e
    };
    r.canUseDOM && ("textContent"in document.documentElement || (a = function(t, e) {
        return 3 === t.nodeType ? void (t.nodeValue = e) : void i(t, o(e))
    }
    )),
    t.exports = a
}
, function(t, e, n) {
    "use strict";
    function r(t, e) {
        return t && "object" == typeof t && null != t.key ? c.escape(t.key) : e.toString(36)
    }
    function o(t, e, n, i) {
        var p = typeof t;
        if ("undefined" !== p && "boolean" !== p || (t = null),
        null === t || "string" === p || "number" === p || "object" === p && t.$$typeof === u)
            return n(i, t, "" === e ? l + r(t, 0) : e),
            1;
        var h, d, v = 0, g = "" === e ? l : e + f;
        if (Array.isArray(t))
            for (var y = 0; y < t.length; y++)
                h = t[y],
                d = g + r(h, y),
                v += o(h, d, n, i);
        else {
            var m = s(t);
            if (m) {
                var b, x = m.call(t);
                if (m !== t.entries)
                    for (var _ = 0; !(b = x.next()).done; )
                        h = b.value,
                        d = g + r(h, _++),
                        v += o(h, d, n, i);
                else
                    for (; !(b = x.next()).done; ) {
                        var w = b.value;
                        w && (h = w[1],
                        d = g + c.escape(w[0]) + f + r(h, 0),
                        v += o(h, d, n, i))
                    }
            } else if ("object" === p) {
                var C = ""
                  , E = String(t);
                a("31", "[object Object]" === E ? "object with keys {" + Object.keys(t).join(", ") + "}" : E, C)
            }
        }
        return v
    }
    function i(t, e, n) {
        return null == t ? 0 : o(t, "", e, n)
    }
    var a = n(2)
      , u = (n(13),
    n(271))
      , s = n(302)
      , c = (n(1),
    n(55))
      , l = (n(3),
    ".")
      , f = ":";
    t.exports = i
}
, function(t, e, n) {
    "use strict";
    function r() {}
    function o(t) {
        try {
            return t.then
        } catch (t) {
            return y = t,
            m
        }
    }
    function i(t, e) {
        try {
            return t(e)
        } catch (t) {
            return y = t,
            m
        }
    }
    function a(t, e, n) {
        try {
            t(e, n)
        } catch (t) {
            return y = t,
            m
        }
    }
    function u(t) {
        if ("object" != typeof this)
            throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof t)
            throw new TypeError("not a function");
        this._45 = 0,
        this._81 = 0,
        this._65 = null,
        this._54 = null,
        t !== r && v(t, this)
    }
    function s(t, e, n) {
        return new t.constructor(function(o, i) {
            var a = new u(r);
            a.then(o, i),
            c(t, new d(e,n,a))
        }
        )
    }
    function c(t, e) {
        for (; 3 === t._81; )
            t = t._65;
        return u._10 && u._10(t),
        0 === t._81 ? 0 === t._45 ? (t._45 = 1,
        void (t._54 = e)) : 1 === t._45 ? (t._45 = 2,
        void (t._54 = [t._54, e])) : void t._54.push(e) : void l(t, e)
    }
    function l(t, e) {
        g(function() {
            var n = 1 === t._81 ? e.onFulfilled : e.onRejected;
            if (null === n)
                return void (1 === t._81 ? f(e.promise, t._65) : p(e.promise, t._65));
            var r = i(n, t._65);
            r === m ? p(e.promise, y) : f(e.promise, r)
        })
    }
    function f(t, e) {
        if (e === t)
            return p(t, new TypeError("A promise cannot be resolved with itself."));
        if (e && ("object" == typeof e || "function" == typeof e)) {
            var n = o(e);
            if (n === m)
                return p(t, y);
            if (n === t.then && e instanceof u)
                return t._81 = 3,
                t._65 = e,
                void h(t);
            if ("function" == typeof n)
                return void v(n.bind(e), t)
        }
        t._81 = 1,
        t._65 = e,
        h(t)
    }
    function p(t, e) {
        t._81 = 2,
        t._65 = e,
        u._97 && u._97(t, e),
        h(t)
    }
    function h(t) {
        if (1 === t._45 && (c(t, t._54),
        t._54 = null),
        2 === t._45) {
            for (var e = 0; e < t._54.length; e++)
                c(t, t._54[e]);
            t._54 = null
        }
    }
    function d(t, e, n) {
        this.onFulfilled = "function" == typeof t ? t : null,
        this.onRejected = "function" == typeof e ? e : null,
        this.promise = n
    }
    function v(t, e) {
        var n = !1
          , r = a(t, function(t) {
            n || (n = !0,
            f(e, t))
        }, function(t) {
            n || (n = !0,
            p(e, t))
        });
        n || r !== m || (n = !0,
        p(e, y))
    }
    var g = n(119)
      , y = null
      , m = {};
    t.exports = u,
    u._10 = null,
    u._97 = null,
    u._61 = r,
    u.prototype.then = function(t, e) {
        if (this.constructor !== u)
            return s(this, t, e);
        var n = new u(r);
        return c(this, new d(t,e,n)),
        n
    }
}
, function(t, e, n) {
    "use strict";
    function r(t, e, n) {
        this.props = t,
        this.context = e,
        this.refs = c,
        this.updater = n || s
    }
    function o(t, e, n) {
        this.props = t,
        this.context = e,
        this.refs = c,
        this.updater = n || s
    }
    function i() {}
    var a = n(29)
      , u = n(4)
      , s = n(116)
      , c = (n(117),
    n(30));
    n(1),
    n(323);
    r.prototype.isReactComponent = {},
    r.prototype.setState = function(t, e) {
        "object" != typeof t && "function" != typeof t && null != t ? a("85") : void 0,
        this.updater.enqueueSetState(this, t),
        e && this.updater.enqueueCallback(this, e, "setState")
    }
    ,
    r.prototype.forceUpdate = function(t) {
        this.updater.enqueueForceUpdate(this),
        t && this.updater.enqueueCallback(this, t, "forceUpdate")
    }
    ;
    i.prototype = r.prototype,
    o.prototype = new i,
    o.prototype.constructor = o,
    u(o.prototype, r.prototype),
    o.prototype.isPureReactComponent = !0,
    t.exports = {
        Component: r,
        PureComponent: o
    }
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        var e = Function.prototype.toString
          , n = Object.prototype.hasOwnProperty
          , r = RegExp("^" + e.call(n).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        try {
            var o = e.call(t);
            return r.test(o)
        } catch (t) {
            return !1
        }
    }
    function o(t) {
        var e = c(t);
        if (e) {
            var n = e.childIDs;
            l(t),
            n.forEach(o)
        }
    }
    function i(t, e, n) {
        return "\n    in " + (t || "Unknown") + (e ? " (at " + e.fileName.replace(/^.*[\\\/]/, "") + ":" + e.lineNumber + ")" : n ? " (created by " + n + ")" : "")
    }
    function a(t) {
        return null == t ? "#empty" : "string" == typeof t || "number" == typeof t ? "#text" : "string" == typeof t.type ? t.type : t.type.displayName || t.type.name || "Unknown"
    }
    function u(t) {
        var e, n = M.getDisplayName(t), r = M.getElement(t), o = M.getOwnerID(t);
        return o && (e = M.getDisplayName(o)),
        i(n, r && r._source, e)
    }
    var s, c, l, f, p, h, d, v = n(29), g = n(13), y = (n(1),
    n(3),
    "function" == typeof Array.from && "function" == typeof Map && r(Map) && null != Map.prototype && "function" == typeof Map.prototype.keys && r(Map.prototype.keys) && "function" == typeof Set && r(Set) && null != Set.prototype && "function" == typeof Set.prototype.keys && r(Set.prototype.keys));
    if (y) {
        var m = new Map
          , b = new Set;
        s = function(t, e) {
            m.set(t, e)
        }
        ,
        c = function(t) {
            return m.get(t)
        }
        ,
        l = function(t) {
            m.delete(t)
        }
        ,
        f = function() {
            return Array.from(m.keys())
        }
        ,
        p = function(t) {
            b.add(t)
        }
        ,
        h = function(t) {
            b.delete(t)
        }
        ,
        d = function() {
            return Array.from(b.keys())
        }
    } else {
        var x = {}
          , _ = {}
          , w = function(t) {
            return "." + t
        }
          , C = function(t) {
            return parseInt(t.substr(1), 10)
        };
        s = function(t, e) {
            var n = w(t);
            x[n] = e
        }
        ,
        c = function(t) {
            var e = w(t);
            return x[e]
        }
        ,
        l = function(t) {
            var e = w(t);
            delete x[e]
        }
        ,
        f = function() {
            return Object.keys(x).map(C)
        }
        ,
        p = function(t) {
            var e = w(t);
            _[e] = !0
        }
        ,
        h = function(t) {
            var e = w(t);
            delete _[e]
        }
        ,
        d = function() {
            return Object.keys(_).map(C)
        }
    }
    var E = []
      , M = {
        onSetChildren: function(t, e) {
            var n = c(t);
            n ? void 0 : v("144"),
            n.childIDs = e;
            for (var r = 0; r < e.length; r++) {
                var o = e[r]
                  , i = c(o);
                i ? void 0 : v("140"),
                null == i.childIDs && "object" == typeof i.element && null != i.element ? v("141") : void 0,
                i.isMounted ? void 0 : v("71"),
                null == i.parentID && (i.parentID = t),
                i.parentID !== t ? v("142", o, i.parentID, t) : void 0
            }
        },
        onBeforeMountComponent: function(t, e, n) {
            var r = {
                element: e,
                parentID: n,
                text: null,
                childIDs: [],
                isMounted: !1,
                updateCount: 0
            };
            s(t, r)
        },
        onBeforeUpdateComponent: function(t, e) {
            var n = c(t);
            n && n.isMounted && (n.element = e)
        },
        onMountComponent: function(t) {
            var e = c(t);
            e ? void 0 : v("144"),
            e.isMounted = !0;
            var n = 0 === e.parentID;
            n && p(t)
        },
        onUpdateComponent: function(t) {
            var e = c(t);
            e && e.isMounted && e.updateCount++
        },
        onUnmountComponent: function(t) {
            var e = c(t);
            if (e) {
                e.isMounted = !1;
                var n = 0 === e.parentID;
                n && h(t)
            }
            E.push(t)
        },
        purgeUnmountedComponents: function() {
            if (!M._preventPurging) {
                for (var t = 0; t < E.length; t++) {
                    var e = E[t];
                    o(e)
                }
                E.length = 0
            }
        },
        isMounted: function(t) {
            var e = c(t);
            return !!e && e.isMounted
        },
        getCurrentStackAddendum: function(t) {
            var e = "";
            if (t) {
                var n = a(t)
                  , r = t._owner;
                e += i(n, t._source, r && r.getName())
            }
            var o = g.current
              , u = o && o._debugID;
            return e += M.getStackAddendumByID(u)
        },
        getStackAddendumByID: function(t) {
            for (var e = ""; t; )
                e += u(t),
                t = M.getParentID(t);
            return e
        },
        getChildIDs: function(t) {
            var e = c(t);
            return e ? e.childIDs : []
        },
        getDisplayName: function(t) {
            var e = M.getElement(t);
            return e ? a(e) : null
        },
        getElement: function(t) {
            var e = c(t);
            return e ? e.element : null
        },
        getOwnerID: function(t) {
            var e = M.getElement(t);
            return e && e._owner ? e._owner._debugID : null
        },
        getParentID: function(t) {
            var e = c(t);
            return e ? e.parentID : null
        },
        getSource: function(t) {
            var e = c(t)
              , n = e ? e.element : null
              , r = null != n ? n._source : null;
            return r
        },
        getText: function(t) {
            var e = M.getElement(t);
            return "string" == typeof e ? e : "number" == typeof e ? "" + e : null
        },
        getUpdateCount: function(t) {
            var e = c(t);
            return e ? e.updateCount : 0
        },
        getRootIDs: d,
        getRegisteredIDs: f,
        pushNonStandardWarningStack: function(t, e) {
            if ("function" == typeof console.reactStack) {
                var n = []
                  , r = g.current
                  , o = r && r._debugID;
                try {
                    for (t && n.push({
                        name: o ? M.getDisplayName(o) : null,
                        fileName: e ? e.fileName : null,
                        lineNumber: e ? e.lineNumber : null
                    }); o; ) {
                        var i = M.getElement(o)
                          , a = M.getParentID(o)
                          , u = M.getOwnerID(o)
                          , s = u ? M.getDisplayName(u) : null
                          , c = i && i._source;
                        n.push({
                            name: s,
                            fileName: c ? c.fileName : null,
                            lineNumber: c ? c.lineNumber : null
                        }),
                        o = a
                    }
                } catch (t) {}
                console.reactStack(n)
            }
        },
        popNonStandardWarningStack: function() {
            "function" == typeof console.reactStackEnd && console.reactStackEnd()
        }
    };
    t.exports = M
}
, function(t, e) {
    "use strict";
    var n = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
    t.exports = n
}
, function(t, e, n) {
    "use strict";
    function r(t, e) {}
    var o = (n(3),
    {
        isMounted: function(t) {
            return !1
        },
        enqueueCallback: function(t, e) {},
        enqueueForceUpdate: function(t) {
            r(t, "forceUpdate")
        },
        enqueueReplaceState: function(t, e) {
            r(t, "replaceState")
        },
        enqueueSetState: function(t, e) {
            r(t, "setState")
        }
    });
    t.exports = o
}
, function(t, e, n) {
    "use strict";
    var r = !1;
    t.exports = r
}
, function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}
        ,
        t.paths = [],
        t.children = [],
        t.webpackPolyfill = 1),
        t
    }
}
, function(t, e) {
    (function(e) {
        "use strict";
        function n(t) {
            u.length || (a(),
            s = !0),
            u[u.length] = t
        }
        function r() {
            for (; c < u.length; ) {
                var t = c;
                if (c += 1,
                u[t].call(),
                c > l) {
                    for (var e = 0, n = u.length - c; e < n; e++)
                        u[e] = u[e + c];
                    u.length -= c,
                    c = 0
                }
            }
            u.length = 0,
            c = 0,
            s = !1
        }
        function o(t) {
            var e = 1
              , n = new p(t)
              , r = document.createTextNode("");
            return n.observe(r, {
                characterData: !0
            }),
            function() {
                e = -e,
                r.data = e
            }
        }
        function i(t) {
            return function() {
                function e() {
                    clearTimeout(n),
                    clearInterval(r),
                    t()
                }
                var n = setTimeout(e, 0)
                  , r = setInterval(e, 50)
            }
        }
        t.exports = n;
        var a, u = [], s = !1, c = 0, l = 1024, f = "undefined" != typeof e ? e : self, p = f.MutationObserver || f.WebKitMutationObserver;
        a = "function" == typeof p ? o(r) : i(r),
        n.requestFlush = a,
        n.makeRequestCallFromTimer = i
    }
    ).call(e, function() {
        return this
    }())
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function i(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function a(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var u = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n),
            r && t(e, r),
            e
        }
    }()
      , s = n(24)
      , c = r(s)
      , l = n(123)
      , f = r(l)
      , p = n(124)
      , h = r(p)
      , d = n(121)
      , v = r(d)
      , g = n(122)
      , y = r(g);
    n(69);
    var m = function(t) {
        function e(t) {
            o(this, e);
            var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            return window.json = t.json,
            n.state = {
                selectedTab: "tree",
                json: t.json,
                selectedJSON: t.json
            },
            n.showLogInConsole(),
            n.locationHashChanged = n.locationHashChanged.bind(n),
            n
        }
        return a(e, t),
        u(e, [{
            key: "sendJSONToContentScript",
            value: function() {
                try {} catch (t) {}
            }
        }, {
            key: "changeTabSelection",
            value: function(t) {
                this.setState({
                    selectedTab: t
                })
            }
        }, {
            key: "changeJSON",
            value: function(t) {
                var e = this;
                this.setState({
                    json: t,
                    selectedJSON: t
                }, function() {
                    window.json = t,
                    e.changeTabSelection("tree")
                })
            }
        }, {
            key: "changeTargetNodeOnChart",
            value: function(t) {
                this.setState({
                    selectedJSON: t
                })
            }
        }, {
            key: "locationHashChanged",
            value: function() {
                window.location.href.includes("downloadJSON=true") && (this.downloadAsJSON(),
                setTimeout(function() {
                    window.location.hash = ""
                }, 2e3))
            }
        }, {
            key: "downloadAsJSON",
            value: function() {
                var t = new Date
                  , e = document.createElement("a");
                e.id = "rb-download-json",
                e.download = "data-" + t.getFullYear() + t.getMonth() + (t.getDate() + 1) + t.getHours() + t.getMinutes() + t.getSeconds() + ".json",
                e.style = "display:none;",
                e.href = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(window.json, null, 2)),
                document.body.appendChild(e),
                e.click(),
                setTimeout(function() {
                    document.body.removeChild(e)
                }, 200)
            }
        }, {
            key: "componentDidMount",
            value: function() {
                window.addEventListener("hashchange", this.locationHashChanged, !1)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                window.removeEventListener("hashchange", this.locationHashChanged, !1)
            }
        }, {
            key: "showLogInConsole",
            value: function() {
                console.log("%cYou have access to JSON data in the console now : %cjson.property_name %cor %cjson['property-name']", "font-size:14px; color: #4fdee5;background:black;padding:8px;", "font-size:14px;color:orange;font-family:monospace;font-weight:bold;background:black;padding:8px;", "font-size:14px;color:white;font-family:monospace;font-weight:bold;background:black;padding:8px;", "font-size:14px;color:orange;font-family:monospace;font-weight:bold;background:black;padding:8px;")
            }
        }, {
            key: "render",
            value: function() {
                return c.default.createElement("div", {
                    className: "App"
                }, c.default.createElement(f.default, {
                    changeTabSelection: this.changeTabSelection.bind(this),
                    selectedTab: this.state.selectedTab
                }), c.default.createElement("div", {
                    className: "tab-container"
                }, "tree" === this.state.selectedTab && c.default.createElement(h.default, {
                    data: this.state.json
                }), "chart" === this.state.selectedTab && c.default.createElement(v.default, {
                    rootData: this.state.json,
                    data: this.state.selectedJSON,
                    changeTargetNodeOnChart: this.changeTargetNodeOnChart.bind(this)
                }), "jsonInput" === this.state.selectedTab && c.default.createElement(y.default, {
                    json: this.state.json,
                    changeJSON: this.changeJSON.bind(this)
                })))
            }
        }]),
        e
    }(s.Component);
    e.default = m
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o(t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = Array(t.length); e < t.length; e++)
                n[e] = t[e];
            return n
        }
        return Array.from(t)
    }
    function i(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function a(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function u(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n),
            r && t(e, r),
            e
        }
    }()
      , c = n(24)
      , l = r(c)
      , f = n(50)
      , p = n(131)
      , h = function(t) {
        function e(t) {
            i(this, e);
            var n = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            return n.state = {
                breadcrumbs: ["response"],
                rootState: t.rootData,
                chartData: t.data,
                positionTop: window.innerHeight / 2
            },
            n
        }
        return u(e, t),
        s(e, [{
            key: "createValidPath",
            value: function(t) {
                var e = t.lastIndexOf("[")
                  , n = t.lastIndexOf("]");
                if (e > -1) {
                    var r = t.substring(e + 1, n);
                    return r
                }
                return t
            }
        }, {
            key: "createNewNodeValue",
            value: function(t) {
                var e = this.props.data
                  , n = [].concat(o(t));
                return 1 == n.length ? this.state.rootState : (n.reverse().splice(0, 1),
                n.forEach(function(t, n) {
                    var r = t.lastIndexOf("[")
                      , o = t.lastIndexOf("]");
                    if (r > -1) {
                        var i = t.substring(r + 1, o);
                        return e = e[i]
                    }
                    e = e[t]
                }),
                e)
            }
        }, {
            key: "generateDataFromBreadcumb",
            value: function(t) {
                var e = this.state.rootState;
                return t.forEach(function(t, n) {
                    e = e[t]
                }),
                e
            }
        }, {
            key: "gotToChart",
            value: function(t) {
                var e = this.state.breadcrumbs.slice(1, t + 1)
                  , n = this.generateDataFromBreadcumb(e)
                  , r = {};
                0 === t ? r = Object.assign({}, n) : r[e[e.length - 1]] = n,
                this.setState({
                    breadcrumbs: this.state.breadcrumbs.slice(0, t + 1)
                }),
                this.props.changeTargetNodeOnChart(r)
            }
        }, {
            key: "renderIngChart",
            value: function() {
                var t = this
                  , e = {
                    state: this.props.data,
                    rootKeyName: "response",
                    onClickText: function(e) {
                        var n = e
                          , r = void 0
                          , o = !1
                          , i = t.createValidPath(e.name);
                        if (t.state.breadcrumbs[t.state.breadcrumbs.length - 1] !== n.name && 1 !== n.depth || t.state.breadcrumbs[t.state.breadcrumbs.length - 1] !== n.name && 1 == n.depth)
                            for (o = !0,
                            r = [e.name]; e.hasOwnProperty("parent") && e.parent.hasOwnProperty("name"); )
                                r.push(t.createValidPath(e.parent.name)),
                                e = e.parent;
                        else
                            r = t.state.breadcrumbs;
                        var a = r
                          , u = t.createNewNodeValue(a)
                          , s = {};
                        if (0 == n.depth ? s = Object.assign({}, u) : s[i] = u,
                        t.props.changeTargetNodeOnChart(s),
                        o)
                            if (0 === n.depth)
                                t.setState({
                                    breadcrumbs: ["response"]
                                });
                            else {
                                var c = t.state.breadcrumbs
                                  , l = [];
                                a.forEach(function(e, n) {
                                    if (c.indexOf(e) === -1) {
                                        var r = t.createValidPath(e);
                                        l.push(r)
                                    }
                                }),
                                t.setState({
                                    breadcrumbs: t.state.breadcrumbs.concat(l.reverse())
                                })
                            }
                    },
                    id: "treeExample",
                    size: window.innerWidth - 100,
                    aspectRatio: .8,
                    isSorted: !1,
                    margin: {
                        top: 50,
                        left: 100
                    },
                    widthBetweenNodesCoeff: 1.5,
                    heightBetweenNodesCoeff: 2,
                    style: {
                        node: {
                            colors: {
                                collapsed: "red",
                                parent: "#01ff70",
                                default: "#1FB3D5"
                            },
                            stroke: "white"
                        },
                        text: {
                            colors: {
                                default: "#FFF",
                                hover: "#3DAAE0"
                            },
                            "font-size": "12px"
                        },
                        link: {
                            stroke: "#05da4c",
                            fill: "none"
                        }
                    },
                    tooltipOptions: {
                        offset: {
                            left: 50,
                            top: -28
                        },
                        indentationSize: 2,
                        style: {
                            background: "#ecf0f1",
                            padding: "0.5rem",
                            color: "#4c648c",
                            "border-radius": "0.3rem",
                            "box-shadow": "5px 5px 6px 1px rgba(0,0,0,.42)",
                            "font-size": "large",
//                            "line-height": "1.3",
                            "font-weight": "normal",
                            "font-family": "monospace"
                        }
                    }
                };
                this.renderChart = (0,
                p.tree)((0,
                f.findDOMNode)(this), e),
                this.renderChart()
            }
        }, {
            key: "componentWillMount",
            value: function() {
                this.prepareComponentState(this.props)
            }
        }, {
            key: "componentWillReceiveProps",
            value: function(t) {
                this.prepareComponentState(t),
                this.renderChart(t.data || t.state)
            }
        }, {
            key: "prepareComponentState",
            value: function(t) {
                this.setState({
                    chartData: t.data
                })
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this.renderIngChart()
            }
        }, {
            key: "render",
            value: function() {
                var t = this;
                return l.default.createElement("div", null, l.default.createElement("div", {
                    className: "breadcumb"
                }, l.default.createElement("ul", null, this.state.breadcrumbs.map(function(e, n) {
                    return l.default.createElement("li", {
                        key: n
                    }, l.default.createElement("a", {
                        href: "#",
                        onClick: t.gotToChart.bind(t, n)
                    }, " ", e, " "))
                }))), l.default.createElement("div", {
                    className: "chart-holder"
                }))
            }
        }]),
        e
    }(c.Component);
    e.default = h
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function i(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function a(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var u = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n),
            r && t(e, r),
            e
        }
    }()
      , s = n(24)
      , c = r(s)
      , l = (n(67),
    function(t) {
        function e(t) {
            o(this, e);
            var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            return n.state = {
                errors: {
                    jsonParseFailed: {
                        status: !1,
                        message: "Failed to parse invalid JSON format"
                    },
                    rawJSON: {
                        status: !1,
                        message: "Field shouldn't be empty"
                    }
                },
                json: JSON.stringify(t.json, null, 4)
            },
            n
        }
        return a(e, t),
        u(e, [{
            key: "parseJSON",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                this.resetErrors();
                var e = t && "string" == typeof t ? t : this.refs.rawJSON.value.trim();
                if (!t && !e)
                    return void this.setState({
                        errors: Object.assign({}, this.state.errors, Object.assign({}, this.state.errors, {
                            rawJSON: Object.assign({}, this.state.errors.rawJSON, {
                                status: !0
                            })
                        }))
                    });
                try {
                    var n = JSON.parse(e);
                    this.props.changeJSON(n)
                } catch (t) {
                    this.setState({
                        errors: Object.assign({}, this.state.errors, Object.assign({}, this.state.errors, {
                            jsonParseFailed: Object.assign({}, this.state.errors.jsonParseFailed, {
                                status: !0
                            })
                        }))
                    })
                }
            }
        }, {
            key: "showFileDialog",
            value: function() {
                var t = document.getElementById("fileInput");
                t && t.click()
            }
        }, {
            key: "handleFileInputChange",
            value: function(t) {
                var e = this
                  , n = t.target.files;
                if (n.length) {
                    var r = new FileReader;
                    r.onload = function(t) {
                        e.parseJSON(t.target.result)
                    }
                    ,
                    r.readAsText(n[0])
                }
            }
        }, {
            key: "resetErrors",
            value: function() {
                this.setState({
                    errors: Object.assign({}, this.state.errors, Object.assign({}, this.state.errors, {
                        jsonParseFailed: Object.assign({}, this.state.errors.jsonParseFailed, {
                            status: !1
                        }),
                        rawJSON: Object.assign({}, this.state.errors.rawJSON, {
                            status: !1
                        })
                    }))
                })
            }
        }, {
            key: "render",
            value: function() {
                
                return c.default.createElement("div", {
                    className: "json-input-section"
                }, c.default.createElement("div", {
                    className: "json-logo"
                }, c.default.createElement("div", null, "{..}")), c.default.createElement("h1", null, "JSON Editor"), this.state.errors.jsonParseFailed.status && c.default.createElement("div", {
                    className: "json-input-error-msg"
                }, this.state.errors.jsonParseFailed.message), this.state.errors.rawJSON.status && c.default.createElement("div", {
                    className: "json-input-error-msg"
                }, this.state.errors.rawJSON.message), c.default.createElement("div", {
                    className: "form-input"
                }, c.default.createElement("textarea", {
                    ref: "rawJSON",
                    defaultValue: this.state.json,
                    className: "json-input",
                    id: "ta-code"
                })), c.default.createElement("input", {
                    className: "d-none",
                    onChange: this.handleFileInputChange.bind(this),
                    accept: "application/json",
                    type: "file",
                    id: "fileInput"
                }), c.default.createElement("div", {
                    className: "form-input save-btn-area"
                }, c.default.createElement("button", {
                    type: "button",
                    className: "btn btn-big btn-white",
                    onClick: this.parseJSON.bind(this)
                }, "Parse JSON"), c.default.createElement("button", {
                    type: "button",
                    className: "btn btn-big btn-white",
                    onClick: this.showFileDialog.bind(this)
                }, "Load a file")))
            }
        }]),
        e
    }(s.Component));
    e.default = l
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function i(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function a(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var u = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n),
            r && t(e, r),
            e
        }
    }()
      , s = n(24)
      , c = r(s);
    n(69);
    var l = "/images/icons/gear.png"
      , f = "iemadiahhbebdklepanmkjenfdebfpfe"
      , p = function(t) {
        function e(t) {
            o(this, e);
            var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            return n.state = {
                selectedPan: t.selectedTab
            },
            n
        }
        return a(e, t),
        u(e, [{
            key: "setActive",
            value: function(t) {
                this.setState({
                    selectedPan: t
                }),
                this.props.changeTabSelection(t)
            }
        }, {
            key: "componentWillMount",
            value: function() {
                this.prepareComponentState(this.props)
            }
        }, {
            key: "componentWillReceiveProps",
            value: function(t) {
                this.prepareComponentState(t)
            }
        }, {
            key: "prepareComponentState",
            value: function(t) {
                this.setState({
                    selectedPan: t.selectedTab
                })
            }
        }, {
            key: "goToOptionPage",
            value: function() {
                window.open(window.optionPageURL)
            }
        }, {
            key: "render",
            value: function() {
                var t = "chrome-extension:" === location.protocol ? l : "chrome-extension://" + f + l;
                return c.default.createElement("div", {
                    className: "action-area"
                }, c.default.createElement("ul", {
                    className: "menus"
                }, c.default.createElement("li", {
                    className: "tree" === this.state.selectedPan ? "active" : ""
                }, c.default.createElement("a", {
                    href: "#",
                    onClick: this.setActive.bind(this, "tree")
                }, "JSON")), c.default.createElement("li", {
                    className: "chart" === this.state.selectedPan ? "active" : ""
                }, c.default.createElement("a", {
                    href: "#",
                    onClick: this.setActive.bind(this, "chart")
                }, "Tree Diagram")), c.default.createElement("li", {
                    className: "jsonInput" === this.state.selectedPan ? "active" : ""
                }, c.default.createElement("a", {
                    href: "#",
                    onClick: this.setActive.bind(this, "jsonInput")
                }, "JSON Editor")), c.default.createElement("li", {
                    className: ""
                },
/*
                c.default.createElement("a", {
                    href: window.optionPageURL || "/options.html",
                    target: "_blank",
                    className: "option-menu",
                    id: "option-menu",
                    title: "Options"
                }, c.default.createElement("img", {
                    id: "option-menu-icon",
                    src: t
                }))
*/
                )))
            }
        }]),
        e
    }(s.Component);
    e.default = p
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function i(t, e) {
        if (!t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function a(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var u = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        return function(e, n, r) {
            return n && t(e.prototype, n),
            r && t(e, r),
            e
        }
    }()
      , s = n(24)
      , c = r(s)
      , l = n(50)
      , f = (r(l),
    n(67));
    n(138);
    var p = n(151)
      , h = function(t) {
        function e(t) {
            o(this, e);
            var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            return n.state = {
                top: 0,
                showCopier: !1,
                actualPath: null,
                value: null,
                data: t.data
            },
            n.changeCopyIconLocation = n.changeCopyIconLocation.bind(n),
            n.toggleSection = n.toggleSection.bind(n),
            n
        }
        return a(e, t),
        u(e, [{
            key: "copy",
            value: function(t, e) {
                t.preventDefault();
                var n = void 0;
                n = "path" === e ? this.state.actualPath : this.state.value;
                var r = void 0
                  , o = void 0
                  , i = void 0;
                r = document.createElement("span"),
                o = document.createRange(),
                r.innerText = n,
                document.body.appendChild(r),
                o.selectNodeContents(r),
                i = window.getSelection(),
                i.removeAllRanges(),
                i.addRange(o),
                document.execCommand("Copy"),
                document.body.removeChild(r)
            }
        }, {
            key: "changeCopyIconLocation",
            value: function(t) {
                var e = this;
                return this.findPath(e, t),
                e.setState({
                    top: p(t.target).offset().top,
                    showCopier: !0
                }),
                !1
            }
        }, {
            key: "getArrayIndex",
            value: function(t) {
                var e = t.lastIndexOf("[")
                  , n = t.lastIndexOf("]");
                return e > -1 ? t.substring(e + 1, n) : t
            }
        }, {
            key: "createValidPath",
            value: function(t) {
                var e = "";
                return t.forEach(function(t, n) {
                    e = 0 === n ? e.concat(t) : t.indexOf("-") > -1 ? e + "['" + t + "']" : isNaN(t) === !1 ? e + "[" + t + "]" : e.concat(".").concat(t)
                }),
                e
            }
        }, {
            key: "findPath",
            value: function(t, e) {
                var n = []
                  , r = p(e.target).parents("li").first().text()
                  , o = r.indexOf(":")
                  , i = r.substring(o + 1)
                  , a = p(e.target).parentsUntil("#json-rb");
                p(a).each(function(e, r) {
                    if ("LI" == p(r).get(0).tagName && "UL" == p(r).parent()[0].tagName) {
                        var o = p(r).find("span.property").eq(0).text();
                        n.push(t.getArrayIndex(o.replace(/\"+/g, "")))
                    }
                    if ("LI" == p(r).get(0).tagName && "OL" == p(r).parent()[0].tagName) {
                        var i = p(r).parent("OL").parent("li").find("span.property").eq(0).text() + "[" + p(r).index() + "]";
                        n.push(t.getArrayIndex(i.replace(/\"+/g, "")))
                    }
                }),
                "," === i[i.length - 1] && (i = i.substring(0, i.length - 1)),
                t.setState({
                    actualPath: t.createValidPath(n.reverse()),
                    value: i
                })
            }
        }, {
            key: "toggleSection",
            value: function(t) {
                t.preventDefault();
                var e = p(t.target).toggleClass("collapsed").siblings("ul.json-dict, ol.json-array");
                if (e.toggle(),
                e.is(":visible"))
                    e.siblings(".json-placeholder").remove();
                else {
                    var n = e.children("li").length
                      , r = n + (n > 1 ? " items" : " item");
                    e.after('<a href class="json-placeholder">' + r + "</a>")
                }
            }
        }, {
            key: "componentDidMount",
            value: function() {
                if (window.json = this.props.data,
                this.$node = p(this.refs.jsonRenderer),
                p) {
                    var t = {
                        collapsed: !1,
                        withQuotes: !0
                    };
                    (0,
                    f.initPlugin)(this.$node, p, this.props.data, t),
                    p(document).on("click", "span.property", this.changeCopyIconLocation),
                    p(document).on("click", "a.json-toggle", this.toggleSection),
                    setTimeout(function() {
                        1 == (window.extensionOptions || {}).collapsed && p.each(p("a.json-toggle"), function(t, e) {
                            t > 0 && p(e).trigger("click")
                        })
                    }, 1e3)
                }
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                p(document).off("click", "span.property", this.changeCopyIconLocation),
                p(document).off("click", "a.json-toggle", this.toggleSection)
            }
        }, {
            key: "render",
            value: function() {
                return window.json = this.props.data,
                c.default.createElement("div", null, c.default.createElement("a", {
                    className: "copier",
                    style: {
                        top: this.state.top,
                        display: this.state.showCopier ? "block" : "none"
                    }
                }, c.default.createElement("ul", {
                    className: "copyMenu"
                }, c.default.createElement("li", null, c.default.createElement("a", {
                    onClick: this.copy.bind(this, event, "path")
                }, "Copy path")), c.default.createElement("li", null, c.default.createElement("a", {
                    onClick: this.copy.bind(this, event, "value")
                }, "Copy Value")))), c.default.createElement("pre", {
                    ref: "jsonRenderer",
                    id: "json-rb"
                }))
            }
        }]),
        e
    }(s.Component);
    e.default = h
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var o = n(24)
      , i = r(o)
      , a = n(50)
      , u = r(a)
      , s = n(120)
      , c = r(s);
    n(137),
    "undefined" != typeof window && (window.React = i.default);
    var l = document.body.textContent;
    try {
        var f = JSON.parse(l.trim());
        window.json = f;
        var navbar = document.createElement("ul");
        navbar.className = "topnav";
        var navbarLi = document.createElement("li");
        var navbarLiA = document.createElement("a");
        navbarLiA.setAttribute("href", "#");
        navbarLiA.innerHTML = "JSON Viewer";
        navbarLi.appendChild(navbarLiA);
        navbar.appendChild(navbarLi);
        
        var p = document.createElement("div");
        p.setAttribute("id", "json-viewer"),
        document.body.innerHTML = "",
        document.body.appendChild(navbar);
        document.body.appendChild(p),
        u.default.render(i.default.createElement(c.default, {
            json: f
        }), document.getElementById("json-viewer"))
    } catch (t) {}
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return t
    }
    function o(t, e, n) {
        function o(t, e) {
            var n = m.hasOwnProperty(e) ? m[e] : null;
            C.hasOwnProperty(e) && s("OVERRIDE_BASE" === n, "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.", e),
            t && s("DEFINE_MANY" === n || "DEFINE_MANY_MERGED" === n, "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", e)
        }
        function i(t, n) {
            if (n) {
                s("function" != typeof n, "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),
                s(!e(n), "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");
                var r = t.prototype
                  , i = r.__reactAutoBindPairs;
                n.hasOwnProperty(c) && x.mixins(t, n.mixins);
                for (var a in n)
                    if (n.hasOwnProperty(a) && a !== c) {
                        var u = n[a]
                          , l = r.hasOwnProperty(a);
                        if (o(l, a),
                        x.hasOwnProperty(a))
                            x[a](t, u);
                        else {
                            var f = m.hasOwnProperty(a)
                              , d = "function" == typeof u
                              , v = d && !f && !l && n.autobind !== !1;
                            if (v)
                                i.push(a, u),
                                r[a] = u;
                            else if (l) {
                                var g = m[a];
                                s(f && ("DEFINE_MANY_MERGED" === g || "DEFINE_MANY" === g), "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.", g, a),
                                "DEFINE_MANY_MERGED" === g ? r[a] = p(r[a], u) : "DEFINE_MANY" === g && (r[a] = h(r[a], u))
                            } else
                                r[a] = u
                        }
                    }
            } else
                ;
        }
        function l(t, e) {
            if (e)
                for (var n in e) {
                    var r = e[n];
                    if (e.hasOwnProperty(n)) {
                        var o = n in x;
                        s(!o, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', n);
                        var i = n in t;
                        if (i) {
                            var a = b.hasOwnProperty(n) ? b[n] : null;
                            return s("DEFINE_MANY_MERGED" === a, "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", n),
                            void (t[n] = p(t[n], r))
                        }
                        t[n] = r
                    }
                }
        }
        function f(t, e) {
            s(t && e && "object" == typeof t && "object" == typeof e, "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");
            for (var n in e)
                e.hasOwnProperty(n) && (s(void 0 === t[n], "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.", n),
                t[n] = e[n]);
            return t
        }
        function p(t, e) {
            return function() {
                var n = t.apply(this, arguments)
                  , r = e.apply(this, arguments);
                if (null == n)
                    return r;
                if (null == r)
                    return n;
                var o = {};
                return f(o, n),
                f(o, r),
                o
            }
        }
        function h(t, e) {
            return function() {
                t.apply(this, arguments),
                e.apply(this, arguments)
            }
        }
        function d(t, e) {
            var n = e.bind(t);
            return n
        }
        function v(t) {
            for (var e = t.__reactAutoBindPairs, n = 0; n < e.length; n += 2) {
                var r = e[n]
                  , o = e[n + 1];
                t[r] = d(t, o)
            }
        }
        function g(t) {
            var e = r(function(t, r, o) {
                this.__reactAutoBindPairs.length && v(this),
                this.props = t,
                this.context = r,
                this.refs = u,
                this.updater = o || n,
                this.state = null;
                var i = this.getInitialState ? this.getInitialState() : null;
                s("object" == typeof i && !Array.isArray(i), "%s.getInitialState(): must return an object or null", e.displayName || "ReactCompositeComponent"),
                this.state = i
            });
            e.prototype = new E,
            e.prototype.constructor = e,
            e.prototype.__reactAutoBindPairs = [],
            y.forEach(i.bind(null, e)),
            i(e, _),
            i(e, t),
            i(e, w),
            e.getDefaultProps && (e.defaultProps = e.getDefaultProps()),
            s(e.prototype.render, "createClass(...): Class specification must implement a `render` method.");
            for (var o in m)
                e.prototype[o] || (e.prototype[o] = null);
            return e
        }
        var y = []
          , m = {
            mixins: "DEFINE_MANY",
            statics: "DEFINE_MANY",
            propTypes: "DEFINE_MANY",
            contextTypes: "DEFINE_MANY",
            childContextTypes: "DEFINE_MANY",
            getDefaultProps: "DEFINE_MANY_MERGED",
            getInitialState: "DEFINE_MANY_MERGED",
            getChildContext: "DEFINE_MANY_MERGED",
            render: "DEFINE_ONCE",
            componentWillMount: "DEFINE_MANY",
            componentDidMount: "DEFINE_MANY",
            componentWillReceiveProps: "DEFINE_MANY",
            shouldComponentUpdate: "DEFINE_ONCE",
            componentWillUpdate: "DEFINE_MANY",
            componentDidUpdate: "DEFINE_MANY",
            componentWillUnmount: "DEFINE_MANY",
            UNSAFE_componentWillMount: "DEFINE_MANY",
            UNSAFE_componentWillReceiveProps: "DEFINE_MANY",
            UNSAFE_componentWillUpdate: "DEFINE_MANY",
            updateComponent: "OVERRIDE_BASE"
        }
          , b = {
            getDerivedStateFromProps: "DEFINE_MANY_MERGED"
        }
          , x = {
            displayName: function(t, e) {
                t.displayName = e
            },
            mixins: function(t, e) {
                if (e)
                    for (var n = 0; n < e.length; n++)
                        i(t, e[n])
            },
            childContextTypes: function(t, e) {
                t.childContextTypes = a({}, t.childContextTypes, e)
            },
            contextTypes: function(t, e) {
                t.contextTypes = a({}, t.contextTypes, e)
            },
            getDefaultProps: function(t, e) {
                t.getDefaultProps ? t.getDefaultProps = p(t.getDefaultProps, e) : t.getDefaultProps = e
            },
            propTypes: function(t, e) {
                t.propTypes = a({}, t.propTypes, e)
            },
            statics: function(t, e) {
                l(t, e)
            },
            autobind: function() {}
        }
          , _ = {
            componentDidMount: function() {
                this.__isMounted = !0
            }
        }
          , w = {
            componentWillUnmount: function() {
                this.__isMounted = !1
            }
        }
          , C = {
            replaceState: function(t, e) {
                this.updater.enqueueReplaceState(this, t, e)
            },
            isMounted: function() {
                return !!this.__isMounted
            }
        }
          , E = function() {};
        return a(E.prototype, t.prototype, C),
        g
    }
    var i, a = n(4), u = n(30), s = n(1), c = "mixins";
    i = {},
    t.exports = o
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0,
    e.tree = void 0;
    var o = n(129)
      , i = r(o);
    e.tree = i.default
}
, function(t, e, n) {
    "use strict";
    function r(t, e) {
        if (t instanceof Array) {
            var n = void 0;
            return n = e ? t.sort() : t
        }
        if (t && "object" === ("undefined" == typeof t ? "undefined" : i(t))) {
            var o = {};
            return Object.keys(t).sort().forEach(function(e) {
                return o[e] = r(t[e])
            }),
            o
        }
        return t
    }
    function o(t) {
        return JSON.stringify(r(t, !0), void 0, 2)
    }
    e.__esModule = !0;
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ;
    e.default = o;
    n(18)
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0;
    var o = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    }
    ;
    e.default = function(t) {
        function e(t, e, n) {
            for (var r = t[e]; r; ) {
                if (r = t[r.parentId],
                !r)
                    return null;
                if (!n || n(r))
                    return r
            }
        }
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , r = (0,
        f.default)(v, n)
          , i = r.id
          , s = r.style
          , l = r.size
          , h = r.aspectRatio
          , g = r.initialZoom
          , y = r.margin
          , m = r.isSorted
          , b = r.widthBetweenNodesCoeff
          , x = r.heightBetweenNodesCoeff
          , _ = r.transitionDuration
          , w = r.blinkDuration
          , C = r.state
          , E = r.rootKeyName
          , M = r.pushMethod
          , k = r.tree
          , S = r.tooltipOptions
          , T = r.onClickText
          , N = l - y.left - y.right
          , A = l * h - y.top - y.bottom
          , O = l
          , P = l * h
          , j = {
            id: i,
            preserveAspectRatio: "xMinYMin slice"
        };
        s.width || (j.width = O),
        s.width && s.height || (j.viewBox = "0 0 " + O + " " + P);
        var D = a.default.select(t)
          , I = a.default.behavior.zoom().scaleExtent([.1, 3]).scale(g)
          , R = D.append("svg").attr(j).style(o({
            cursor: "-webkit-grab"
        }, s)).call(I.on("zoom", function() {
            var t = a.default.event
              , e = t.translate
              , n = t.scale;
            R.attr("transform", "translate(" + e + ")scale(" + n + ")")
        })).append("g").attr({
            transform: "translate(" + (y.left + s.node.radius) + ", " + y.top + ") scale(" + g + ")"
        })
          , L = a.default.layout.tree().size([N, A])
          , U = void 0;
        m && L.sort(function(t, e) {
            return e.name.toLowerCase() < t.name.toLowerCase() ? 1 : -1
        });
        var F = {
            root: {
                id: "root",
                parentId: null,
                x: A / 2,
                y: 0
            }
        };
        return function() {
            function t() {
                var n = a.default.svg.diagonal().projection(function(t) {
                    return [t.y, t.x]
                })
                  , u = Math.max.apply(Math, (0,
                p.getNodeGroupByDepthCount)(U));
                L = L.size([25 * u * x, N]);
                var c = L.nodes(U)
                  , l = L.links(c);
                c.forEach(function(t) {
                    return t.y = t.depth * (7 * i * b)
                });
                var f = c.map(function(t) {
                    return {
                        parentId: t.parent && t.parent.id,
                        id: t.id,
                        x: t.x,
                        y: t.y
                    }
                })
                  , h = {};
                f.forEach(function(t) {
                    return h[t.id] = t
                });
                var v = R.selectAll("g.node").property("__oldData__", function(t) {
                    return t
                }).data(c, function(t) {
                    return t.id || (t.id = ++r)
                })
                  , g = v.enter().append("g").attr({
                    class: "node",
                    transform: function(t) {
                        var n = e(h, t.id, function(t) {
                            return F[t.id]
                        })
                          , r = n && F[n.id] || F.root;
                        return "translate(" + r.y + "," + r.x + ")"
                    }
                }).style({
                    fill: s.text.colors.default,
                    cursor: "pointer"
                }).on({
                    mouseover: function() {
                        a.default.select(this).style({
                            fill: s.text.colors.hover
                        })
                    },
                    mouseout: function() {
                        a.default.select(this).style({
                            fill: s.text.colors.default
                        })
                    }
                });
                S.disabled || g.call((0,
                d.default)(a.default, "tooltip", o({}, S, {
                    root: D
                })).text(function(t, e) {
                    return (0,
                    p.getTooltipString)(t, e, S)
                }).style(S.style));
                var y = g.append("g");
                y.append("circle").attr({
                    class: "nodeCircle",
                    r: 0
                }).on({
                    click: function(e) {
                        a.default.event.defaultPrevented || ((0,
                        p.toggleChildren)(e),
                        t())
                    }
                }),
                y.append("text").attr({
                    class: "nodeText",
                    "text-anchor": "middle",
                    transform: "translate(0,0)",
                    dy: function(t) {
                       return t._children || t.children ? ".8rem" : ".3rem"                        
                    }
                }).style({
                    "fill-opacity": 0
                }).text(function(t) {
                    return t.name
                }).on({
                    click: T
                }),
                v.select("text").text(function(t) {
                    return t.name
                }),
                v.select("circle").style({
                    stroke: "none",
                    "stroke-width": "0",
                    fill: function(t) {                        
                        return t._children ? s.node.colors.collapsed : t.children ? s.node.colors.parent : s.node.colors.default
                    }
                });
                var m = v.transition().duration(_).attr({
                    transform: function(t) {
                        return "translate(" + t.y + "," + t.x + ")"
                    }
                });
                m.select("circle").attr("r", s.node.radius),
                m.select("text").style("fill-opacity", 1).attr({
                    transform: function(t) {
                        var e = (t.children || t._children ? -1 : 1) * (this.getBBox().width / 2 + s.node.radius + 5);
                        return "translate(" + e + ",0)"
                    }
                }),
                v.filter(function(t) {
                    return this.__oldData__ && t.value !== this.__oldData__.value
                }).select("g").style("opacity", "0.3").transition().duration(w).style("opacity", "1");
                var C = v.exit().transition().duration(_).attr({
                    transform: function(t) {
                        var n = e(F, t.id, function(t) {
                            return h[t.id]
                        })
                          , r = n && h[n.id] || h.root;
                        return "translate(" + r.y + "," + r.x + ")"
                    }
                }).remove();
                C.select("circle").attr("r", 0),
                C.select("text").style("fill-opacity", 0);
                var E = R.selectAll("path.link").data(l, function(t) {
                    return t.target.id
                });
                E.enter().insert("path", "g").attr({
                    class: "link",
                    d: function(t) {
                        var r = e(h, t.target.id, function(t) {
                            return F[t.id]
                        })
                          , o = r && F[r.id] || F.root;
                        return n({
                            source: o,
                            target: o
                        })
                    }
                }).style(s.link),
                E.transition().duration(_).attr({
                    d: n
                }),
                E.exit().transition().duration(_).attr({
                    d: function(t) {
                        var r = e(F, t.target.id, function(t) {
                            return h[t.id]
                        })
                          , o = r && h[r.id] || h.root;
                        return n({
                            source: o,
                            target: o
                        })
                    }
                }).remove(),
                v.property("__oldData__", null),
                F = h
            }
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k || C;
            U = k ? n : (0,
            c.default)(n, {
                key: E,
                pushMethod: M
            }),
            !(0,
            u.isEmpty)(U) && U.name || (U = {
                name: "error",
                message: "Please provide a state map or a tree structure"
            });
            var r = 0
              , i = 0;
            (0,
            p.visit)(U, function(t) {
                i = Math.max(t.name.length, i),
                t.id = t.id || "root"
            }, function(t) {
                return t.children && t.children.length > 0 ? t.children.map(function(e) {
                    return e.id = (t.id || "") + "|" + e.name,
                    e
                }) : null
            }),
            t()
        }
    }
    ;
    var i = n(132)
      , a = r(i)
      , u = n(18)
      , s = n(240)
      , c = r(s)
      , l = n(136)
      , f = r(l)
      , p = n(130)
      , h = n(133)
      , d = r(h)
      , v = {
        state: void 0,
        rootKeyName: "state",
        pushMethod: "push",
        tree: void 0,
        id: "d3svg",
        style: {
            node: {
                colors: {
                    default: "#ccc",
                    collapsed: "lightsteelblue",
                    parent: "white"
                },
                radius: 7
            },
            text: {
                colors: {
                    default: "black",
                    hover: "skyblue"
                }
            },
            link: {
                stroke: "#000",
                fill: "none"
            }
        },
        size: 500,
        aspectRatio: 1,
        initialZoom: 1,
        margin: {
            top: 10,
            right: 10,
            bottom: 10,
            left: 50
        },
        isSorted: !1,
        heightBetweenNodesCoeff: 2,
        widthBetweenNodesCoeff: 1,
        transitionDuration: 750,
        blinkDuration: 100,
        onClickText: function() {},
        tooltipOptions: {
            disabled: !1,
            left: void 0,
            right: void 0,
            offset: {
                left: 0,
                top: 0
            },
            style: void 0
        }
    }
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o(t) {
        t.children && (t._children = t.children,
        t._children.forEach(o),
        t.children = null)
    }
    function i(t) {
        t._children && (t.children = t._children,
        t.children.forEach(i),
        t._children = null)
    }
    function a(t) {
        return t.children ? (t._children = t.children,
        t.children = null) : t._children && (t.children = t._children,
        t._children = null),
        t
    }
    function u(t, e, n) {
        if (t) {
            e(t);
            var r = n(t);
            if (r)
                for (var o = r.length, i = 0; i < o; i++)
                    u(r[i], e, n)
        }
    }
    function s(t) {
        var e = [1]
          , n = function t(n) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return n.children && 0 !== n.children.length ? (e.length <= r + 1 && e.push(0),
            e[r + 1] += n.children.length,
            void n.children.forEach(function(e) {
                t(e, r + 1)
            })) : 0
        };
        return n(t),
        e
    }
    function c(t, e, n) {
        var r = n.indentationSize
          , o = void 0 === r ? 4 : r;
        if (!(0,
        l.is)(Object, t))
            return "";
        var i = (0,
        l.join)("&nbsp;&nbsp;")
          , a = (0,
        l.replace)(/\n/g, "<br/>")
          , u = (0,
        l.replace)(/\s{2}/g, i(new Array(o)))
          , s = (0,
        l.pipe)(p.default, a, u)
          , c = t.children || t._children;
        return "undefined" != typeof t.value ? s(t.value) : "undefined" != typeof t.object ? s(t.object) : c && c.length ? "childrenCount: " + c.length : "empty"
    }
    e.__esModule = !0,
    e.collapseChildren = o,
    e.expandChildren = i,
    e.toggleChildren = a,
    e.visit = u,
    e.getNodeGroupByDepthCount = s,
    e.getTooltipString = c;
    var l = n(18)
      , f = n(128)
      , p = r(f)
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        if (t && t.__esModule)
            return t;
        var e = {};
        if (null != t)
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e.default = t,
        e
    }
    e.__esModule = !0,
    e.tree = void 0;
    var o = n(127);
    Object.defineProperty(e, "tree", {
        enumerable: !0,
        get: function() {
            return o.tree
        }
    });
    var i = r(o);
    e.default = i
}
, function(t, e, n) {
    var r, o;
    !function() {
        function i(t) {
            return t && (t.ownerDocument || t.document || t).documentElement
        }
        function a(t) {
            return t && (t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView)
        }
        function u(t, e) {
            return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
        }
        function s(t) {
            return null === t ? NaN : +t
        }
        function c(t) {
            return !isNaN(t)
        }
        function l(t) {
            return {
                left: function(e, n, r, o) {
                    for (arguments.length < 3 && (r = 0),
                    arguments.length < 4 && (o = e.length); r < o; ) {
                        var i = r + o >>> 1;
                        t(e[i], n) < 0 ? r = i + 1 : o = i
                    }
                    return r
                },
                right: function(e, n, r, o) {
                    for (arguments.length < 3 && (r = 0),
                    arguments.length < 4 && (o = e.length); r < o; ) {
                        var i = r + o >>> 1;
                        t(e[i], n) > 0 ? o = i : r = i + 1
                    }
                    return r
                }
            }
        }
        function f(t) {
            return t.length
        }
        function p(t) {
            for (var e = 1; t * e % 1; )
                e *= 10;
            return e
        }
        function h(t, e) {
            for (var n in e)
                Object.defineProperty(t.prototype, n, {
                    value: e[n],
                    enumerable: !1
                })
        }
        function d() {
            this._ = Object.create(null)
        }
        function v(t) {
            return (t += "") === Ea || t[0] === Ma ? Ma + t : t
        }
        function g(t) {
            return (t += "")[0] === Ma ? t.slice(1) : t
        }
        function y(t) {
            return v(t)in this._
        }
        function m(t) {
            return (t = v(t))in this._ && delete this._[t]
        }
        function b() {
            var t = [];
            for (var e in this._)
                t.push(g(e));
            return t
        }
        function x() {
            var t = 0;
            for (var e in this._)
                ++t;
            return t
        }
        function _() {
            for (var t in this._)
                return !1;
            return !0
        }
        function w() {
            this._ = Object.create(null)
        }
        function C(t) {
            return t
        }
        function E(t, e, n) {
            return function() {
                var r = n.apply(e, arguments);
                return r === e ? t : r
            }
        }
        function M(t, e) {
            if (e in t)
                return e;
            e = e.charAt(0).toUpperCase() + e.slice(1);
            for (var n = 0, r = ka.length; n < r; ++n) {
                var o = ka[n] + e;
                if (o in t)
                    return o
            }
        }
        function k() {}
        function S() {}
        function T(t) {
            function e() {
                for (var e, r = n, o = -1, i = r.length; ++o < i; )
                    (e = r[o].on) && e.apply(this, arguments);
                return t
            }
            var n = []
              , r = new d;
            return e.on = function(e, o) {
                var i, a = r.get(e);
                return arguments.length < 2 ? a && a.on : (a && (a.on = null,
                n = n.slice(0, i = n.indexOf(a)).concat(n.slice(i + 1)),
                r.remove(e)),
                o && n.push(r.set(e, {
                    on: o
                })),
                t)
            }
            ,
            e
        }
        function N() {
            ha.event.preventDefault()
        }
        function A() {
            for (var t, e = ha.event; t = e.sourceEvent; )
                e = t;
            return e
        }
        function O(t) {
            for (var e = new S, n = 0, r = arguments.length; ++n < r; )
                e[arguments[n]] = T(e);
            return e.of = function(n, r) {
                return function(o) {
                    try {
                        var i = o.sourceEvent = ha.event;
                        o.target = t,
                        ha.event = o,
                        e[o.type].apply(n, r)
                    } finally {
                        ha.event = i
                    }
                }
            }
            ,
            e
        }
        function P(t) {
            return Ta(t, Pa),
            t
        }
        function j(t) {
            return "function" == typeof t ? t : function() {
                return Na(t, this)
            }
        }
        function D(t) {
            return "function" == typeof t ? t : function() {
                return Aa(t, this)
            }
        }
        function I(t, e) {
            function n() {
                this.removeAttribute(t)
            }
            function r() {
                this.removeAttributeNS(t.space, t.local)
            }
            function o() {
                this.setAttribute(t, e)
            }
            function i() {
                this.setAttributeNS(t.space, t.local, e)
            }
            function a() {
                var n = e.apply(this, arguments);
                null == n ? this.removeAttribute(t) : this.setAttribute(t, n)
            }
            function u() {
                var n = e.apply(this, arguments);
                null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n)
            }
            return t = ha.ns.qualify(t),
            null == e ? t.local ? r : n : "function" == typeof e ? t.local ? u : a : t.local ? i : o
        }
        function R(t) {
            return t.trim().replace(/\s+/g, " ")
        }
        function L(t) {
            return new RegExp("(?:^|\\s+)" + ha.requote(t) + "(?:\\s+|$)","g")
        }
        function U(t) {
            return (t + "").trim().split(/^|\s+/)
        }
        function F(t, e) {
            function n() {
                for (var n = -1; ++n < o; )
                    t[n](this, e)
            }
            function r() {
                for (var n = -1, r = e.apply(this, arguments); ++n < o; )
                    t[n](this, r)
            }
            t = U(t).map(q);
            var o = t.length;
            return "function" == typeof e ? r : n
        }
        function q(t) {
            var e = L(t);
            return function(n, r) {
                if (o = n.classList)
                    return r ? o.add(t) : o.remove(t);
                var o = n.getAttribute("class") || "";
                r ? (e.lastIndex = 0,
                e.test(o) || n.setAttribute("class", R(o + " " + t))) : n.setAttribute("class", R(o.replace(e, " ")))
            }
        }
        function H(t, e, n) {
            function r() {
                this.style.removeProperty(t)
            }
            function o() {
                this.style.setProperty(t, e, n)
            }
            function i() {
                var r = e.apply(this, arguments);
                null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, n)
            }
            return null == e ? r : "function" == typeof e ? i : o
        }
        function B(t, e) {
            function n() {
                delete this[t]
            }
            function r() {
                this[t] = e
            }
            function o() {
                var n = e.apply(this, arguments);
                null == n ? delete this[t] : this[t] = n
            }
            return null == e ? n : "function" == typeof e ? o : r
        }
        function z(t) {
            function e() {
                var e = this.ownerDocument
                  , n = this.namespaceURI;
                return n === ja && e.documentElement.namespaceURI === ja ? e.createElement(t) : e.createElementNS(n, t)
            }
            function n() {
                return this.ownerDocument.createElementNS(t.space, t.local)
            }
            return "function" == typeof t ? t : (t = ha.ns.qualify(t)).local ? n : e
        }
        function W() {
            var t = this.parentNode;
            t && t.removeChild(this)
        }
        function V(t) {
            return {
                __data__: t
            }
        }
        function $(t) {
            return function() {
                return Oa(this, t)
            }
        }
        function Y(t) {
            return arguments.length || (t = u),
            function(e, n) {
                return e && n ? t(e.__data__, n.__data__) : !e - !n
            }
        }
        function K(t, e) {
            for (var n = 0, r = t.length; n < r; n++)
                for (var o, i = t[n], a = 0, u = i.length; a < u; a++)
                    (o = i[a]) && e(o, a, n);
            return t
        }
        function X(t) {
            return Ta(t, Ia),
            t
        }
        function J(t) {
            var e, n;
            return function(r, o, i) {
                var a, u = t[i].update, s = u.length;
                for (i != n && (n = i,
                e = 0),
                o >= e && (e = o + 1); !(a = u[e]) && ++e < s; )
                    ;
                return a
            }
        }
        function G(t, e, n) {
            function r() {
                var e = this[a];
                e && (this.removeEventListener(t, e, e.$),
                delete this[a])
            }
            function o() {
                var o = s(e, va(arguments));
                r.call(this),
                this.addEventListener(t, this[a] = o, o.$ = n),
                o._ = e
            }
            function i() {
                var e, n = new RegExp("^__on([^.]+)" + ha.requote(t) + "$");
                for (var r in this)
                    if (e = r.match(n)) {
                        var o = this[r];
                        this.removeEventListener(e[1], o, o.$),
                        delete this[r]
                    }
            }
            var a = "__on" + t
              , u = t.indexOf(".")
              , s = Q;
            u > 0 && (t = t.slice(0, u));
            var c = Ra.get(t);
            return c && (t = c,
            s = Z),
            u ? e ? o : r : e ? k : i
        }
        function Q(t, e) {
            return function(n) {
                var r = ha.event;
                ha.event = n,
                e[0] = this.__data__;
                try {
                    t.apply(this, e)
                } finally {
                    ha.event = r
                }
            }
        }
        function Z(t, e) {
            var n = Q(t, e);
            return function(t) {
                var e = this
                  , r = t.relatedTarget;
                r && (r === e || 8 & r.compareDocumentPosition(e)) || n.call(e, t)
            }
        }
        function tt(t) {
            var e = ".dragsuppress-" + ++Ua
              , n = "click" + e
              , r = ha.select(a(t)).on("touchmove" + e, N).on("dragstart" + e, N).on("selectstart" + e, N);
            if (null == La && (La = !("onselectstart"in t) && M(t.style, "userSelect")),
            La) {
                var o = i(t).style
                  , u = o[La];
                o[La] = "none"
            }
            return function(t) {
                if (r.on(e, null),
                La && (o[La] = u),
                t) {
                    var i = function() {
                        r.on(n, null)
                    };
                    r.on(n, function() {
                        N(),
                        i()
                    }, !0),
                    setTimeout(i, 0)
                }
            }
        }
        function et(t, e) {
            e.changedTouches && (e = e.changedTouches[0]);
            var n = t.ownerSVGElement || t;
            if (n.createSVGPoint) {
                var r = n.createSVGPoint();
                if (Fa < 0) {
                    var o = a(t);
                    if (o.scrollX || o.scrollY) {
                        n = ha.select("body").append("svg").style({
                            position: "absolute",
                            top: 0,
                            left: 0,
                            margin: 0,
                            padding: 0,
                            border: "none"
                        }, "important");
                        var i = n[0][0].getScreenCTM();
                        Fa = !(i.f || i.e),
                        n.remove()
                    }
                }
                return Fa ? (r.x = e.pageX,
                r.y = e.pageY) : (r.x = e.clientX,
                r.y = e.clientY),
                r = r.matrixTransform(t.getScreenCTM().inverse()),
                [r.x, r.y]
            }
            var u = t.getBoundingClientRect();
            return [e.clientX - u.left - t.clientLeft, e.clientY - u.top - t.clientTop]
        }
        function nt() {
            return ha.event.changedTouches[0].identifier
        }
        function rt(t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0
        }
        function ot(t, e, n) {
            return (e[0] - t[0]) * (n[1] - t[1]) - (e[1] - t[1]) * (n[0] - t[0])
        }
        function it(t) {
            return t > 1 ? 0 : t < -1 ? Ba : Math.acos(t)
        }
        function at(t) {
            return t > 1 ? Va : t < -1 ? -Va : Math.asin(t)
        }
        function ut(t) {
            return ((t = Math.exp(t)) - 1 / t) / 2
        }
        function st(t) {
            return ((t = Math.exp(t)) + 1 / t) / 2
        }
        function ct(t) {
            return ((t = Math.exp(2 * t)) - 1) / (t + 1)
        }
        function lt(t) {
            return (t = Math.sin(t / 2)) * t
        }
        function ft() {}
        function pt(t, e, n) {
            return this instanceof pt ? (this.h = +t,
            this.s = +e,
            void (this.l = +n)) : arguments.length < 2 ? t instanceof pt ? new pt(t.h,t.s,t.l) : kt("" + t, St, pt) : new pt(t,e,n)
        }
        function ht(t, e, n) {
            function r(t) {
                return t > 360 ? t -= 360 : t < 0 && (t += 360),
                t < 60 ? i + (a - i) * t / 60 : t < 180 ? a : t < 240 ? i + (a - i) * (240 - t) / 60 : i
            }
            function o(t) {
                return Math.round(255 * r(t))
            }
            var i, a;
            return t = isNaN(t) ? 0 : (t %= 360) < 0 ? t + 360 : t,
            e = isNaN(e) ? 0 : e < 0 ? 0 : e > 1 ? 1 : e,
            n = n < 0 ? 0 : n > 1 ? 1 : n,
            a = n <= .5 ? n * (1 + e) : n + e - n * e,
            i = 2 * n - a,
            new wt(o(t + 120),o(t),o(t - 120))
        }
        function dt(t, e, n) {
            return this instanceof dt ? (this.h = +t,
            this.c = +e,
            void (this.l = +n)) : arguments.length < 2 ? t instanceof dt ? new dt(t.h,t.c,t.l) : t instanceof gt ? mt(t.l, t.a, t.b) : mt((t = Tt((t = ha.rgb(t)).r, t.g, t.b)).l, t.a, t.b) : new dt(t,e,n)
        }
        function vt(t, e, n) {
            return isNaN(t) && (t = 0),
            isNaN(e) && (e = 0),
            new gt(n,Math.cos(t *= $a) * e,Math.sin(t) * e)
        }
        function gt(t, e, n) {
            return this instanceof gt ? (this.l = +t,
            this.a = +e,
            void (this.b = +n)) : arguments.length < 2 ? t instanceof gt ? new gt(t.l,t.a,t.b) : t instanceof dt ? vt(t.h, t.c, t.l) : Tt((t = wt(t)).r, t.g, t.b) : new gt(t,e,n)
        }
        function yt(t, e, n) {
            var r = (t + 16) / 116
              , o = r + e / 500
              , i = r - n / 200;
            return o = bt(o) * ru,
            r = bt(r) * ou,
            i = bt(i) * iu,
            new wt(_t(3.2404542 * o - 1.5371385 * r - .4985314 * i),_t(-.969266 * o + 1.8760108 * r + .041556 * i),_t(.0556434 * o - .2040259 * r + 1.0572252 * i))
        }
        function mt(t, e, n) {
            return t > 0 ? new dt(Math.atan2(n, e) * Ya,Math.sqrt(e * e + n * n),t) : new dt(NaN,NaN,t)
        }
        function bt(t) {
            return t > .206893034 ? t * t * t : (t - 4 / 29) / 7.787037
        }
        function xt(t) {
            return t > .008856 ? Math.pow(t, 1 / 3) : 7.787037 * t + 4 / 29
        }
        function _t(t) {
            return Math.round(255 * (t <= .00304 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055))
        }
        function wt(t, e, n) {
            return this instanceof wt ? (this.r = ~~t,
            this.g = ~~e,
            void (this.b = ~~n)) : arguments.length < 2 ? t instanceof wt ? new wt(t.r,t.g,t.b) : kt("" + t, wt, ht) : new wt(t,e,n)
        }
        function Ct(t) {
            return new wt(t >> 16,t >> 8 & 255,255 & t)
        }
        function Et(t) {
            return Ct(t) + ""
        }
        function Mt(t) {
            return t < 16 ? "0" + Math.max(0, t).toString(16) : Math.min(255, t).toString(16)
        }
        function kt(t, e, n) {
            var r, o, i, a = 0, u = 0, s = 0;
            if (r = /([a-z]+)\((.*)\)/.exec(t = t.toLowerCase()))
                switch (o = r[2].split(","),
                r[1]) {
                case "hsl":
                    return n(parseFloat(o[0]), parseFloat(o[1]) / 100, parseFloat(o[2]) / 100);
                case "rgb":
                    return e(At(o[0]), At(o[1]), At(o[2]))
                }
            return (i = su.get(t)) ? e(i.r, i.g, i.b) : (null == t || "#" !== t.charAt(0) || isNaN(i = parseInt(t.slice(1), 16)) || (4 === t.length ? (a = (3840 & i) >> 4,
            a |= a >> 4,
            u = 240 & i,
            u |= u >> 4,
            s = 15 & i,
            s |= s << 4) : 7 === t.length && (a = (16711680 & i) >> 16,
            u = (65280 & i) >> 8,
            s = 255 & i)),
            e(a, u, s))
        }
        function St(t, e, n) {
            var r, o, i = Math.min(t /= 255, e /= 255, n /= 255), a = Math.max(t, e, n), u = a - i, s = (a + i) / 2;
            return u ? (o = s < .5 ? u / (a + i) : u / (2 - a - i),
            r = t == a ? (e - n) / u + (e < n ? 6 : 0) : e == a ? (n - t) / u + 2 : (t - e) / u + 4,
            r *= 60) : (r = NaN,
            o = s > 0 && s < 1 ? 0 : r),
            new pt(r,o,s)
        }
        function Tt(t, e, n) {
            t = Nt(t),
            e = Nt(e),
            n = Nt(n);
            var r = xt((.4124564 * t + .3575761 * e + .1804375 * n) / ru)
              , o = xt((.2126729 * t + .7151522 * e + .072175 * n) / ou)
              , i = xt((.0193339 * t + .119192 * e + .9503041 * n) / iu);
            return gt(116 * o - 16, 500 * (r - o), 200 * (o - i))
        }
        function Nt(t) {
            return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
        }
        function At(t) {
            var e = parseFloat(t);
            return "%" === t.charAt(t.length - 1) ? Math.round(2.55 * e) : e
        }
        function Ot(t) {
            return "function" == typeof t ? t : function() {
                return t
            }
        }
        function Pt(t) {
            return function(e, n, r) {
                return 2 === arguments.length && "function" == typeof n && (r = n,
                n = null),
                jt(e, n, t, r)
            }
        }
        function jt(t, e, n, r) {
            function o() {
                var t, e = s.status;
                if (!e && It(s) || e >= 200 && e < 300 || 304 === e) {
                    try {
                        t = n.call(i, s)
                    } catch (t) {
                        return void a.error.call(i, t)
                    }
                    a.load.call(i, t)
                } else
                    a.error.call(i, s)
            }
            var i = {}
              , a = ha.dispatch("beforesend", "progress", "load", "error")
              , u = {}
              , s = new XMLHttpRequest
              , c = null;
            return !this.XDomainRequest || "withCredentials"in s || !/^(http(s)?:)?\/\//.test(t) || (s = new XDomainRequest),
            "onload"in s ? s.onload = s.onerror = o : s.onreadystatechange = function() {
                s.readyState > 3 && o()
            }
            ,
            s.onprogress = function(t) {
                var e = ha.event;
                ha.event = t;
                try {
                    a.progress.call(i, s)
                } finally {
                    ha.event = e
                }
            }
            ,
            i.header = function(t, e) {
                return t = (t + "").toLowerCase(),
                arguments.length < 2 ? u[t] : (null == e ? delete u[t] : u[t] = e + "",
                i)
            }
            ,
            i.mimeType = function(t) {
                return arguments.length ? (e = null == t ? null : t + "",
                i) : e
            }
            ,
            i.responseType = function(t) {
                return arguments.length ? (c = t,
                i) : c
            }
            ,
            i.response = function(t) {
                return n = t,
                i
            }
            ,
            ["get", "post"].forEach(function(t) {
                i[t] = function() {
                    return i.send.apply(i, [t].concat(va(arguments)))
                }
            }),
            i.send = function(n, r, o) {
                if (2 === arguments.length && "function" == typeof r && (o = r,
                r = null),
                s.open(n, t, !0),
                null == e || "accept"in u || (u.accept = e + ",*/*"),
                s.setRequestHeader)
                    for (var l in u)
                        s.setRequestHeader(l, u[l]);
                return null != e && s.overrideMimeType && s.overrideMimeType(e),
                null != c && (s.responseType = c),
                null != o && i.on("error", o).on("load", function(t) {
                    o(null, t)
                }),
                a.beforesend.call(i, s),
                s.send(null == r ? null : r),
                i
            }
            ,
            i.abort = function() {
                return s.abort(),
                i
            }
            ,
            ha.rebind(i, a, "on"),
            null == r ? i : i.get(Dt(r))
        }
        function Dt(t) {
            return 1 === t.length ? function(e, n) {
                t(null == e ? n : null)
            }
            : t
        }
        function It(t) {
            var e = t.responseType;
            return e && "text" !== e ? t.response : t.responseText
        }
        function Rt(t, e, n) {
            var r = arguments.length;
            r < 2 && (e = 0),
            r < 3 && (n = Date.now());
            var o = n + e
              , i = {
                c: t,
                t: o,
                n: null
            };
            return lu ? lu.n = i : cu = i,
            lu = i,
            fu || (pu = clearTimeout(pu),
            fu = 1,
            hu(Lt)),
            i
        }
        function Lt() {
            var t = Ut()
              , e = Ft() - t;
            e > 24 ? (isFinite(e) && (clearTimeout(pu),
            pu = setTimeout(Lt, e)),
            fu = 0) : (fu = 1,
            hu(Lt))
        }
        function Ut() {
            for (var t = Date.now(), e = cu; e; )
                t >= e.t && e.c(t - e.t) && (e.c = null),
                e = e.n;
            return t
        }
        function Ft() {
            for (var t, e = cu, n = 1 / 0; e; )
                e.c ? (e.t < n && (n = e.t),
                e = (t = e).n) : e = t ? t.n = e.n : cu = e.n;
            return lu = t,
            n
        }
        function qt(t, e) {
            return e - (t ? Math.ceil(Math.log(t) / Math.LN10) : 1)
        }
        function Ht(t, e) {
            var n = Math.pow(10, 3 * Ca(8 - e));
            return {
                scale: e > 8 ? function(t) {
                    return t / n
                }
                : function(t) {
                    return t * n
                }
                ,
                symbol: t
            }
        }
        function Bt(t) {
            var e = t.decimal
              , n = t.thousands
              , r = t.grouping
              , o = t.currency
              , i = r && n ? function(t, e) {
                for (var o = t.length, i = [], a = 0, u = r[0], s = 0; o > 0 && u > 0 && (s + u + 1 > e && (u = Math.max(1, e - s)),
                i.push(t.substring(o -= u, o + u)),
                !((s += u + 1) > e)); )
                    u = r[a = (a + 1) % r.length];
                return i.reverse().join(n)
            }
            : C;
            return function(t) {
                var n = vu.exec(t)
                  , r = n[1] || " "
                  , a = n[2] || ">"
                  , u = n[3] || "-"
                  , s = n[4] || ""
                  , c = n[5]
                  , l = +n[6]
                  , f = n[7]
                  , p = n[8]
                  , h = n[9]
                  , d = 1
                  , v = ""
                  , g = ""
                  , y = !1
                  , m = !0;
                switch (p && (p = +p.substring(1)),
                (c || "0" === r && "=" === a) && (c = r = "0",
                a = "="),
                h) {
                case "n":
                    f = !0,
                    h = "g";
                    break;
                case "%":
                    d = 100,
                    g = "%",
                    h = "f";
                    break;
                case "p":
                    d = 100,
                    g = "%",
                    h = "r";
                    break;
                case "b":
                case "o":
                case "x":
                case "X":
                    "#" === s && (v = "0" + h.toLowerCase());
                case "c":
                    m = !1;
                case "d":
                    y = !0,
                    p = 0;
                    break;
                case "s":
                    d = -1,
                    h = "r"
                }
                "$" === s && (v = o[0],
                g = o[1]),
                "r" != h || p || (h = "g"),
                null != p && ("g" == h ? p = Math.max(1, Math.min(21, p)) : "e" != h && "f" != h || (p = Math.max(0, Math.min(20, p)))),
                h = gu.get(h) || zt;
                var b = c && f;
                return function(t) {
                    var n = g;
                    if (y && t % 1)
                        return "";
                    var o = t < 0 || 0 === t && 1 / t < 0 ? (t = -t,
                    "-") : "-" === u ? "" : u;
                    if (d < 0) {
                        var s = ha.formatPrefix(t, p);
                        t = s.scale(t),
                        n = s.symbol + g
                    } else
                        t *= d;
                    t = h(t, p);
                    var x, _, w = t.lastIndexOf(".");
                    if (w < 0) {
                        var C = m ? t.lastIndexOf("e") : -1;
                        C < 0 ? (x = t,
                        _ = "") : (x = t.substring(0, C),
                        _ = t.substring(C))
                    } else
                        x = t.substring(0, w),
                        _ = e + t.substring(w + 1);
                    !c && f && (x = i(x, 1 / 0));
                    var E = v.length + x.length + _.length + (b ? 0 : o.length)
                      , M = E < l ? new Array(E = l - E + 1).join(r) : "";
                    return b && (x = i(M + x, M.length ? l - _.length : 1 / 0)),
                    o += v,
                    t = x + _,
                    ("<" === a ? o + t + M : ">" === a ? M + o + t : "^" === a ? M.substring(0, E >>= 1) + o + t + M.substring(E) : o + (b ? t : M + t)) + n
                }
            }
        }
        function zt(t) {
            return t + ""
        }
        function Wt() {
            this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
        }
        function Vt(t, e, n) {
            function r(e) {
                var n = t(e)
                  , r = i(n, 1);
                return e - n < r - e ? n : r
            }
            function o(n) {
                return e(n = t(new mu(n - 1)), 1),
                n
            }
            function i(t, n) {
                return e(t = new mu(+t), n),
                t
            }
            function a(t, r, i) {
                var a = o(t)
                  , u = [];
                if (i > 1)
                    for (; a < r; )
                        n(a) % i || u.push(new Date(+a)),
                        e(a, 1);
                else
                    for (; a < r; )
                        u.push(new Date(+a)),
                        e(a, 1);
                return u
            }
            function u(t, e, n) {
                try {
                    mu = Wt;
                    var r = new Wt;
                    return r._ = t,
                    a(r, e, n)
                } finally {
                    mu = Date
                }
            }
            t.floor = t,
            t.round = r,
            t.ceil = o,
            t.offset = i,
            t.range = a;
            var s = t.utc = $t(t);
            return s.floor = s,
            s.round = $t(r),
            s.ceil = $t(o),
            s.offset = $t(i),
            s.range = u,
            t
        }
        function $t(t) {
            return function(e, n) {
                try {
                    mu = Wt;
                    var r = new Wt;
                    return r._ = e,
                    t(r, n)._
                } finally {
                    mu = Date
                }
            }
        }
        function Yt(t) {
            function e(t) {
                function e(e) {
                    for (var n, o, i, a = [], u = -1, s = 0; ++u < r; )
                        37 === t.charCodeAt(u) && (a.push(t.slice(s, u)),
                        null != (o = xu[n = t.charAt(++u)]) && (n = t.charAt(++u)),
                        (i = T[n]) && (n = i(e, null == o ? "e" === n ? " " : "0" : o)),
                        a.push(n),
                        s = u + 1);
                    return a.push(t.slice(s, u)),
                    a.join("")
                }
                var r = t.length;
                return e.parse = function(e) {
                    var r = {
                        y: 1900,
                        m: 0,
                        d: 1,
                        H: 0,
                        M: 0,
                        S: 0,
                        L: 0,
                        Z: null
                    }
                      , o = n(r, t, e, 0);
                    if (o != e.length)
                        return null;
                    "p"in r && (r.H = r.H % 12 + 12 * r.p);
                    var i = null != r.Z && mu !== Wt
                      , a = new (i ? Wt : mu);
                    return "j"in r ? a.setFullYear(r.y, 0, r.j) : "W"in r || "U"in r ? ("w"in r || (r.w = "W"in r ? 1 : 0),
                    a.setFullYear(r.y, 0, 1),
                    a.setFullYear(r.y, 0, "W"in r ? (r.w + 6) % 7 + 7 * r.W - (a.getDay() + 5) % 7 : r.w + 7 * r.U - (a.getDay() + 6) % 7)) : a.setFullYear(r.y, r.m, r.d),
                    a.setHours(r.H + (r.Z / 100 | 0), r.M + r.Z % 100, r.S, r.L),
                    i ? a._ : a
                }
                ,
                e.toString = function() {
                    return t
                }
                ,
                e
            }
            function n(t, e, n, r) {
                for (var o, i, a, u = 0, s = e.length, c = n.length; u < s; ) {
                    if (r >= c)
                        return -1;
                    if (o = e.charCodeAt(u++),
                    37 === o) {
                        if (a = e.charAt(u++),
                        i = N[a in xu ? e.charAt(u++) : a],
                        !i || (r = i(t, n, r)) < 0)
                            return -1
                    } else if (o != n.charCodeAt(r++))
                        return -1
                }
                return r
            }
            function r(t, e, n) {
                w.lastIndex = 0;
                var r = w.exec(e.slice(n));
                return r ? (t.w = C.get(r[0].toLowerCase()),
                n + r[0].length) : -1
            }
            function o(t, e, n) {
                x.lastIndex = 0;
                var r = x.exec(e.slice(n));
                return r ? (t.w = _.get(r[0].toLowerCase()),
                n + r[0].length) : -1
            }
            function i(t, e, n) {
                k.lastIndex = 0;
                var r = k.exec(e.slice(n));
                return r ? (t.m = S.get(r[0].toLowerCase()),
                n + r[0].length) : -1
            }
            function a(t, e, n) {
                E.lastIndex = 0;
                var r = E.exec(e.slice(n));
                return r ? (t.m = M.get(r[0].toLowerCase()),
                n + r[0].length) : -1
            }
            function u(t, e, r) {
                return n(t, T.c.toString(), e, r)
            }
            function s(t, e, r) {
                return n(t, T.x.toString(), e, r)
            }
            function c(t, e, r) {
                return n(t, T.X.toString(), e, r)
            }
            function l(t, e, n) {
                var r = b.get(e.slice(n, n += 2).toLowerCase());
                return null == r ? -1 : (t.p = r,
                n)
            }
            var f = t.dateTime
              , p = t.date
              , h = t.time
              , d = t.periods
              , v = t.days
              , g = t.shortDays
              , y = t.months
              , m = t.shortMonths;
            e.utc = function(t) {
                function n(t) {
                    try {
                        mu = Wt;
                        var e = new mu;
                        return e._ = t,
                        r(e)
                    } finally {
                        mu = Date
                    }
                }
                var r = e(t);
                return n.parse = function(t) {
                    try {
                        mu = Wt;
                        var e = r.parse(t);
                        return e && e._
                    } finally {
                        mu = Date
                    }
                }
                ,
                n.toString = r.toString,
                n
            }
            ,
            e.multi = e.utc.multi = he;
            var b = ha.map()
              , x = Xt(v)
              , _ = Jt(v)
              , w = Xt(g)
              , C = Jt(g)
              , E = Xt(y)
              , M = Jt(y)
              , k = Xt(m)
              , S = Jt(m);
            d.forEach(function(t, e) {
                b.set(t.toLowerCase(), e)
            });
            var T = {
                a: function(t) {
                    return g[t.getDay()]
                },
                A: function(t) {
                    return v[t.getDay()]
                },
                b: function(t) {
                    return m[t.getMonth()]
                },
                B: function(t) {
                    return y[t.getMonth()]
                },
                c: e(f),
                d: function(t, e) {
                    return Kt(t.getDate(), e, 2)
                },
                e: function(t, e) {
                    return Kt(t.getDate(), e, 2)
                },
                H: function(t, e) {
                    return Kt(t.getHours(), e, 2)
                },
                I: function(t, e) {
                    return Kt(t.getHours() % 12 || 12, e, 2)
                },
                j: function(t, e) {
                    return Kt(1 + yu.dayOfYear(t), e, 3)
                },
                L: function(t, e) {
                    return Kt(t.getMilliseconds(), e, 3)
                },
                m: function(t, e) {
                    return Kt(t.getMonth() + 1, e, 2)
                },
                M: function(t, e) {
                    return Kt(t.getMinutes(), e, 2)
                },
                p: function(t) {
                    return d[+(t.getHours() >= 12)]
                },
                S: function(t, e) {
                    return Kt(t.getSeconds(), e, 2)
                },
                U: function(t, e) {
                    return Kt(yu.sundayOfYear(t), e, 2)
                },
                w: function(t) {
                    return t.getDay()
                },
                W: function(t, e) {
                    return Kt(yu.mondayOfYear(t), e, 2)
                },
                x: e(p),
                X: e(h),
                y: function(t, e) {
                    return Kt(t.getFullYear() % 100, e, 2)
                },
                Y: function(t, e) {
                    return Kt(t.getFullYear() % 1e4, e, 4)
                },
                Z: fe,
                "%": function() {
                    return "%"
                }
            }
              , N = {
                a: r,
                A: o,
                b: i,
                B: a,
                c: u,
                d: ie,
                e: ie,
                H: ue,
                I: ue,
                j: ae,
                L: le,
                m: oe,
                M: se,
                p: l,
                S: ce,
                U: Qt,
                w: Gt,
                W: Zt,
                x: s,
                X: c,
                y: ee,
                Y: te,
                Z: ne,
                "%": pe
            };
            return e
        }
        function Kt(t, e, n) {
            var r = t < 0 ? "-" : ""
              , o = (r ? -t : t) + ""
              , i = o.length;
            return r + (i < n ? new Array(n - i + 1).join(e) + o : o)
        }
        function Xt(t) {
            return new RegExp("^(?:" + t.map(ha.requote).join("|") + ")","i")
        }
        function Jt(t) {
            for (var e = new d, n = -1, r = t.length; ++n < r; )
                e.set(t[n].toLowerCase(), n);
            return e
        }
        function Gt(t, e, n) {
            _u.lastIndex = 0;
            var r = _u.exec(e.slice(n, n + 1));
            return r ? (t.w = +r[0],
            n + r[0].length) : -1
        }
        function Qt(t, e, n) {
            _u.lastIndex = 0;
            var r = _u.exec(e.slice(n));
            return r ? (t.U = +r[0],
            n + r[0].length) : -1
        }
        function Zt(t, e, n) {
            _u.lastIndex = 0;
            var r = _u.exec(e.slice(n));
            return r ? (t.W = +r[0],
            n + r[0].length) : -1
        }
        function te(t, e, n) {
            _u.lastIndex = 0;
            var r = _u.exec(e.slice(n, n + 4));
            return r ? (t.y = +r[0],
            n + r[0].length) : -1
        }
        function ee(t, e, n) {
            _u.lastIndex = 0;
            var r = _u.exec(e.slice(n, n + 2));
            return r ? (t.y = re(+r[0]),
            n + r[0].length) : -1
        }
        function ne(t, e, n) {
            return /^[+-]\d{4}$/.test(e = e.slice(n, n + 5)) ? (t.Z = -e,
            n + 5) : -1
        }
        function re(t) {
            return t + (t > 68 ? 1900 : 2e3)
        }
        function oe(t, e, n) {
            _u.lastIndex = 0;
            var r = _u.exec(e.slice(n, n + 2));
            return r ? (t.m = r[0] - 1,
            n + r[0].length) : -1
        }
        function ie(t, e, n) {
            _u.lastIndex = 0;
            var r = _u.exec(e.slice(n, n + 2));
            return r ? (t.d = +r[0],
            n + r[0].length) : -1
        }
        function ae(t, e, n) {
            _u.lastIndex = 0;
            var r = _u.exec(e.slice(n, n + 3));
            return r ? (t.j = +r[0],
            n + r[0].length) : -1
        }
        function ue(t, e, n) {
            _u.lastIndex = 0;
            var r = _u.exec(e.slice(n, n + 2));
            return r ? (t.H = +r[0],
            n + r[0].length) : -1
        }
        function se(t, e, n) {
            _u.lastIndex = 0;
            var r = _u.exec(e.slice(n, n + 2));
            return r ? (t.M = +r[0],
            n + r[0].length) : -1
        }
        function ce(t, e, n) {
            _u.lastIndex = 0;
            var r = _u.exec(e.slice(n, n + 2));
            return r ? (t.S = +r[0],
            n + r[0].length) : -1
        }
        function le(t, e, n) {
            _u.lastIndex = 0;
            var r = _u.exec(e.slice(n, n + 3));
            return r ? (t.L = +r[0],
            n + r[0].length) : -1
        }
        function fe(t) {
            var e = t.getTimezoneOffset()
              , n = e > 0 ? "-" : "+"
              , r = Ca(e) / 60 | 0
              , o = Ca(e) % 60;
            return n + Kt(r, "0", 2) + Kt(o, "0", 2)
        }
        function pe(t, e, n) {
            wu.lastIndex = 0;
            var r = wu.exec(e.slice(n, n + 1));
            return r ? n + r[0].length : -1
        }
        function he(t) {
            for (var e = t.length, n = -1; ++n < e; )
                t[n][0] = this(t[n][0]);
            return function(e) {
                for (var n = 0, r = t[n]; !r[1](e); )
                    r = t[++n];
                return r[0](e)
            }
        }
        function de() {}
        function ve(t, e, n) {
            var r = n.s = t + e
              , o = r - t
              , i = r - o;
            n.t = t - i + (e - o)
        }
        function ge(t, e) {
            t && ku.hasOwnProperty(t.type) && ku[t.type](t, e)
        }
        function ye(t, e, n) {
            var r, o = -1, i = t.length - n;
            for (e.lineStart(); ++o < i; )
                r = t[o],
                e.point(r[0], r[1], r[2]);
            e.lineEnd()
        }
        function me(t, e) {
            var n = -1
              , r = t.length;
            for (e.polygonStart(); ++n < r; )
                ye(t[n], e, 1);
            e.polygonEnd()
        }
        function be() {
            function t(t, e) {
                t *= $a,
                e = e * $a / 2 + Ba / 4;
                var n = t - r
                  , a = n >= 0 ? 1 : -1
                  , u = a * n
                  , s = Math.cos(e)
                  , c = Math.sin(e)
                  , l = i * c
                  , f = o * s + l * Math.cos(u)
                  , p = l * a * Math.sin(u);
                Tu.add(Math.atan2(p, f)),
                r = t,
                o = s,
                i = c
            }
            var e, n, r, o, i;
            Nu.point = function(a, u) {
                Nu.point = t,
                r = (e = a) * $a,
                o = Math.cos(u = (n = u) * $a / 2 + Ba / 4),
                i = Math.sin(u)
            }
            ,
            Nu.lineEnd = function() {
                t(e, n)
            }
        }
        function xe(t) {
            var e = t[0]
              , n = t[1]
              , r = Math.cos(n);
            return [r * Math.cos(e), r * Math.sin(e), Math.sin(n)]
        }
        function _e(t, e) {
            return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
        }
        function we(t, e) {
            return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
        }
        function Ce(t, e) {
            t[0] += e[0],
            t[1] += e[1],
            t[2] += e[2]
        }
        function Ee(t, e) {
            return [t[0] * e, t[1] * e, t[2] * e]
        }
        function Me(t) {
            var e = Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
            t[0] /= e,
            t[1] /= e,
            t[2] /= e
        }
        function ke(t) {
            return [Math.atan2(t[1], t[0]), at(t[2])]
        }
        function Se(t, e) {
            return Ca(t[0] - e[0]) < qa && Ca(t[1] - e[1]) < qa
        }
        function Te(t, e) {
            t *= $a;
            var n = Math.cos(e *= $a);
            Ne(n * Math.cos(t), n * Math.sin(t), Math.sin(e))
        }
        function Ne(t, e, n) {
            ++Au,
            Pu += (t - Pu) / Au,
            ju += (e - ju) / Au,
            Du += (n - Du) / Au
        }
        function Ae() {
            function t(t, o) {
                t *= $a;
                var i = Math.cos(o *= $a)
                  , a = i * Math.cos(t)
                  , u = i * Math.sin(t)
                  , s = Math.sin(o)
                  , c = Math.atan2(Math.sqrt((c = n * s - r * u) * c + (c = r * a - e * s) * c + (c = e * u - n * a) * c), e * a + n * u + r * s);
                Ou += c,
                Iu += c * (e + (e = a)),
                Ru += c * (n + (n = u)),
                Lu += c * (r + (r = s)),
                Ne(e, n, r)
            }
            var e, n, r;
            Hu.point = function(o, i) {
                o *= $a;
                var a = Math.cos(i *= $a);
                e = a * Math.cos(o),
                n = a * Math.sin(o),
                r = Math.sin(i),
                Hu.point = t,
                Ne(e, n, r)
            }
        }
        function Oe() {
            Hu.point = Te
        }
        function Pe() {
            function t(t, e) {
                t *= $a;
                var n = Math.cos(e *= $a)
                  , a = n * Math.cos(t)
                  , u = n * Math.sin(t)
                  , s = Math.sin(e)
                  , c = o * s - i * u
                  , l = i * a - r * s
                  , f = r * u - o * a
                  , p = Math.sqrt(c * c + l * l + f * f)
                  , h = r * a + o * u + i * s
                  , d = p && -it(h) / p
                  , v = Math.atan2(p, h);
                Uu += d * c,
                Fu += d * l,
                qu += d * f,
                Ou += v,
                Iu += v * (r + (r = a)),
                Ru += v * (o + (o = u)),
                Lu += v * (i + (i = s)),
                Ne(r, o, i)
            }
            var e, n, r, o, i;
            Hu.point = function(a, u) {
                e = a,
                n = u,
                Hu.point = t,
                a *= $a;
                var s = Math.cos(u *= $a);
                r = s * Math.cos(a),
                o = s * Math.sin(a),
                i = Math.sin(u),
                Ne(r, o, i)
            }
            ,
            Hu.lineEnd = function() {
                t(e, n),
                Hu.lineEnd = Oe,
                Hu.point = Te
            }
        }
        function je(t, e) {
            function n(n, r) {
                return n = t(n, r),
                e(n[0], n[1])
            }
            return t.invert && e.invert && (n.invert = function(n, r) {
                return n = e.invert(n, r),
                n && t.invert(n[0], n[1])
            }
            ),
            n
        }
        function De() {
            return !0
        }
        function Ie(t, e, n, r, o) {
            var i = []
              , a = [];
            if (t.forEach(function(t) {
                if (!((e = t.length - 1) <= 0)) {
                    var e, n = t[0], r = t[e];
                    if (Se(n, r)) {
                        o.lineStart();
                        for (var u = 0; u < e; ++u)
                            o.point((n = t[u])[0], n[1]);
                        return void o.lineEnd()
                    }
                    var s = new Le(n,t,null,!0)
                      , c = new Le(n,null,s,!1);
                    s.o = c,
                    i.push(s),
                    a.push(c),
                    s = new Le(r,t,null,!1),
                    c = new Le(r,null,s,!0),
                    s.o = c,
                    i.push(s),
                    a.push(c)
                }
            }),
            a.sort(e),
            Re(i),
            Re(a),
            i.length) {
                for (var u = 0, s = n, c = a.length; u < c; ++u)
                    a[u].e = s = !s;
                for (var l, f, p = i[0]; ; ) {
                    for (var h = p, d = !0; h.v; )
                        if ((h = h.n) === p)
                            return;
                    l = h.z,
                    o.lineStart();
                    do {
                        if (h.v = h.o.v = !0,
                        h.e) {
                            if (d)
                                for (var u = 0, c = l.length; u < c; ++u)
                                    o.point((f = l[u])[0], f[1]);
                            else
                                r(h.x, h.n.x, 1, o);
                            h = h.n
                        } else {
                            if (d) {
                                l = h.p.z;
                                for (var u = l.length - 1; u >= 0; --u)
                                    o.point((f = l[u])[0], f[1]);
                            } else
                                r(h.x, h.p.x, -1, o);
                            h = h.p
                        }
                        h = h.o,
                        l = h.z,
                        d = !d
                    } while (!h.v);o.lineEnd()
                }
            }
        }
        function Re(t) {
            if (e = t.length) {
                for (var e, n, r = 0, o = t[0]; ++r < e; )
                    o.n = n = t[r],
                    n.p = o,
                    o = n;
                o.n = n = t[0],
                n.p = o
            }
        }
        function Le(t, e, n, r) {
            this.x = t,
            this.z = e,
            this.o = n,
            this.e = r,
            this.v = !1,
            this.n = this.p = null
        }
        function Ue(t, e, n, r) {
            return function(o, i) {
                function a(e, n) {
                    var r = o(e, n);
                    t(e = r[0], n = r[1]) && i.point(e, n)
                }
                function u(t, e) {
                    var n = o(t, e);
                    g.point(n[0], n[1])
                }
                function s() {
                    m.point = u,
                    g.lineStart()
                }
                function c() {
                    m.point = a,
                    g.lineEnd()
                }
                function l(t, e) {
                    v.push([t, e]);
                    var n = o(t, e);
                    x.point(n[0], n[1])
                }
                function f() {
                    x.lineStart(),
                    v = []
                }
                function p() {
                    l(v[0][0], v[0][1]),
                    x.lineEnd();
                    var t, e = x.clean(), n = b.buffer(), r = n.length;
                    if (v.pop(),
                    d.push(v),
                    v = null,
                    r)
                        if (1 & e) {
                            t = n[0];
                            var o, r = t.length - 1, a = -1;
                            if (r > 0) {
                                for (_ || (i.polygonStart(),
                                _ = !0),
                                i.lineStart(); ++a < r; )
                                    i.point((o = t[a])[0], o[1]);
                                i.lineEnd()
                            }
                        } else
                            r > 1 && 2 & e && n.push(n.pop().concat(n.shift())),
                            h.push(n.filter(Fe))
                }
                var h, d, v, g = e(i), y = o.invert(r[0], r[1]), m = {
                    point: a,
                    lineStart: s,
                    lineEnd: c,
                    polygonStart: function() {
                        m.point = l,
                        m.lineStart = f,
                        m.lineEnd = p,
                        h = [],
                        d = []
                    },
                    polygonEnd: function() {
                        m.point = a,
                        m.lineStart = s,
                        m.lineEnd = c,
                        h = ha.merge(h);
                        var t = Ve(y, d);
                        h.length ? (_ || (i.polygonStart(),
                        _ = !0),
                        Ie(h, He, t, n, i)) : t && (_ || (i.polygonStart(),
                        _ = !0),
                        i.lineStart(),
                        n(null, null, 1, i),
                        i.lineEnd()),
                        _ && (i.polygonEnd(),
                        _ = !1),
                        h = d = null
                    },
                    sphere: function() {
                        i.polygonStart(),
                        i.lineStart(),
                        n(null, null, 1, i),
                        i.lineEnd(),
                        i.polygonEnd()
                    }
                }, b = qe(), x = e(b), _ = !1;
                return m
            }
        }
        function Fe(t) {
            return t.length > 1
        }
        function qe() {
            var t, e = [];
            return {
                lineStart: function() {
                    e.push(t = [])
                },
                point: function(e, n) {
                    t.push([e, n])
                },
                lineEnd: k,
                buffer: function() {
                    var n = e;
                    return e = [],
                    t = null,
                    n
                },
                rejoin: function() {
                    e.length > 1 && e.push(e.pop().concat(e.shift()))
                }
            }
        }
        function He(t, e) {
            return ((t = t.x)[0] < 0 ? t[1] - Va - qa : Va - t[1]) - ((e = e.x)[0] < 0 ? e[1] - Va - qa : Va - e[1])
        }
        function Be(t) {
            var e, n = NaN, r = NaN, o = NaN;
            return {
                lineStart: function() {
                    t.lineStart(),
                    e = 1
                },
                point: function(i, a) {
                    var u = i > 0 ? Ba : -Ba
                      , s = Ca(i - n);
                    Ca(s - Ba) < qa ? (t.point(n, r = (r + a) / 2 > 0 ? Va : -Va),
                    t.point(o, r),
                    t.lineEnd(),
                    t.lineStart(),
                    t.point(u, r),
                    t.point(i, r),
                    e = 0) : o !== u && s >= Ba && (Ca(n - o) < qa && (n -= o * qa),
                    Ca(i - u) < qa && (i -= u * qa),
                    r = ze(n, r, i, a),
                    t.point(o, r),
                    t.lineEnd(),
                    t.lineStart(),
                    t.point(u, r),
                    e = 0),
                    t.point(n = i, r = a),
                    o = u
                },
                lineEnd: function() {
                    t.lineEnd(),
                    n = r = NaN
                },
                clean: function() {
                    return 2 - e
                }
            }
        }
        function ze(t, e, n, r) {
            var o, i, a = Math.sin(t - n);
            return Ca(a) > qa ? Math.atan((Math.sin(e) * (i = Math.cos(r)) * Math.sin(n) - Math.sin(r) * (o = Math.cos(e)) * Math.sin(t)) / (o * i * a)) : (e + r) / 2
        }
        function We(t, e, n, r) {
            var o;
            if (null == t)
                o = n * Va,
                r.point(-Ba, o),
                r.point(0, o),
                r.point(Ba, o),
                r.point(Ba, 0),
                r.point(Ba, -o),
                r.point(0, -o),
                r.point(-Ba, -o),
                r.point(-Ba, 0),
                r.point(-Ba, o);
            else if (Ca(t[0] - e[0]) > qa) {
                var i = t[0] < e[0] ? Ba : -Ba;
                o = n * i / 2,
                r.point(-i, o),
                r.point(0, o),
                r.point(i, o)
            } else
                r.point(e[0], e[1])
        }
        function Ve(t, e) {
            var n = t[0]
              , r = t[1]
              , o = [Math.sin(n), -Math.cos(n), 0]
              , i = 0
              , a = 0;
            Tu.reset();
            for (var u = 0, s = e.length; u < s; ++u) {
                var c = e[u]
                  , l = c.length;
                if (l)
                    for (var f = c[0], p = f[0], h = f[1] / 2 + Ba / 4, d = Math.sin(h), v = Math.cos(h), g = 1; ; ) {
                        g === l && (g = 0),
                        t = c[g];
                        var y = t[0]
                          , m = t[1] / 2 + Ba / 4
                          , b = Math.sin(m)
                          , x = Math.cos(m)
                          , _ = y - p
                          , w = _ >= 0 ? 1 : -1
                          , C = w * _
                          , E = C > Ba
                          , M = d * b;
                        if (Tu.add(Math.atan2(M * w * Math.sin(C), v * x + M * Math.cos(C))),
                        i += E ? _ + w * za : _,
                        E ^ p >= n ^ y >= n) {
                            var k = we(xe(f), xe(t));
                            Me(k);
                            var S = we(o, k);
                            Me(S);
                            var T = (E ^ _ >= 0 ? -1 : 1) * at(S[2]);
                            (r > T || r === T && (k[0] || k[1])) && (a += E ^ _ >= 0 ? 1 : -1)
                        }
                        if (!g++)
                            break;
                        p = y,
                        d = b,
                        v = x,
                        f = t
                    }
            }
            return (i < -qa || i < qa && Tu < -qa) ^ 1 & a
        }
        function $e(t) {
            function e(t, e) {
                return Math.cos(t) * Math.cos(e) > i
            }
            function n(t) {
                var n, i, s, c, l;
                return {
                    lineStart: function() {
                        c = s = !1,
                        l = 1
                    },
                    point: function(f, p) {
                        var h, d = [f, p], v = e(f, p), g = a ? v ? 0 : o(f, p) : v ? o(f + (f < 0 ? Ba : -Ba), p) : 0;
                        if (!n && (c = s = v) && t.lineStart(),
                        v !== s && (h = r(n, d),
                        (Se(n, h) || Se(d, h)) && (d[0] += qa,
                        d[1] += qa,
                        v = e(d[0], d[1]))),
                        v !== s)
                            l = 0,
                            v ? (t.lineStart(),
                            h = r(d, n),
                            t.point(h[0], h[1])) : (h = r(n, d),
                            t.point(h[0], h[1]),
                            t.lineEnd()),
                            n = h;
                        else if (u && n && a ^ v) {
                            var y;
                            g & i || !(y = r(d, n, !0)) || (l = 0,
                            a ? (t.lineStart(),
                            t.point(y[0][0], y[0][1]),
                            t.point(y[1][0], y[1][1]),
                            t.lineEnd()) : (t.point(y[1][0], y[1][1]),
                            t.lineEnd(),
                            t.lineStart(),
                            t.point(y[0][0], y[0][1])))
                        }
                        !v || n && Se(n, d) || t.point(d[0], d[1]),
                        n = d,
                        s = v,
                        i = g
                    },
                    lineEnd: function() {
                        s && t.lineEnd(),
                        n = null
                    },
                    clean: function() {
                        return l | (c && s) << 1
                    }
                }
            }
            function r(t, e, n) {
                var r = xe(t)
                  , o = xe(e)
                  , a = [1, 0, 0]
                  , u = we(r, o)
                  , s = _e(u, u)
                  , c = u[0]
                  , l = s - c * c;
                if (!l)
                    return !n && t;
                var f = i * s / l
                  , p = -i * c / l
                  , h = we(a, u)
                  , d = Ee(a, f)
                  , v = Ee(u, p);
                Ce(d, v);
                var g = h
                  , y = _e(d, g)
                  , m = _e(g, g)
                  , b = y * y - m * (_e(d, d) - 1);
                if (!(b < 0)) {
                    var x = Math.sqrt(b)
                      , _ = Ee(g, (-y - x) / m);
                    if (Ce(_, d),
                    _ = ke(_),
                    !n)
                        return _;
                    var w, C = t[0], E = e[0], M = t[1], k = e[1];
                    E < C && (w = C,
                    C = E,
                    E = w);
                    var S = E - C
                      , T = Ca(S - Ba) < qa
                      , N = T || S < qa;
                    if (!T && k < M && (w = M,
                    M = k,
                    k = w),
                    N ? T ? M + k > 0 ^ _[1] < (Ca(_[0] - C) < qa ? M : k) : M <= _[1] && _[1] <= k : S > Ba ^ (C <= _[0] && _[0] <= E)) {
                        var A = Ee(g, (-y + x) / m);
                        return Ce(A, d),
                        [_, ke(A)]
                    }
                }
            }
            function o(e, n) {
                var r = a ? t : Ba - t
                  , o = 0;
                return e < -r ? o |= 1 : e > r && (o |= 2),
                n < -r ? o |= 4 : n > r && (o |= 8),
                o
            }
            var i = Math.cos(t)
              , a = i > 0
              , u = Ca(i) > qa
              , s = xn(t, 6 * $a);
            return Ue(e, n, s, a ? [0, -t] : [-Ba, t - Ba])
        }
        function Ye(t, e, n, r) {
            return function(o) {
                var i, a = o.a, u = o.b, s = a.x, c = a.y, l = u.x, f = u.y, p = 0, h = 1, d = l - s, v = f - c;
                if (i = t - s,
                d || !(i > 0)) {
                    if (i /= d,
                    d < 0) {
                        if (i < p)
                            return;
                        i < h && (h = i)
                    } else if (d > 0) {
                        if (i > h)
                            return;
                        i > p && (p = i)
                    }
                    if (i = n - s,
                    d || !(i < 0)) {
                        if (i /= d,
                        d < 0) {
                            if (i > h)
                                return;
                            i > p && (p = i)
                        } else if (d > 0) {
                            if (i < p)
                                return;
                            i < h && (h = i)
                        }
                        if (i = e - c,
                        v || !(i > 0)) {
                            if (i /= v,
                            v < 0) {
                                if (i < p)
                                    return;
                                i < h && (h = i)
                            } else if (v > 0) {
                                if (i > h)
                                    return;
                                i > p && (p = i)
                            }
                            if (i = r - c,
                            v || !(i < 0)) {
                                if (i /= v,
                                v < 0) {
                                    if (i > h)
                                        return;
                                    i > p && (p = i)
                                } else if (v > 0) {
                                    if (i < p)
                                        return;
                                    i < h && (h = i)
                                }
                                return p > 0 && (o.a = {
                                    x: s + p * d,
                                    y: c + p * v
                                }),
                                h < 1 && (o.b = {
                                    x: s + h * d,
                                    y: c + h * v
                                }),
                                o
                            }
                        }
                    }
                }
            }
        }
        function Ke(t, e, n, r) {
            function o(r, o) {
                return Ca(r[0] - t) < qa ? o > 0 ? 0 : 3 : Ca(r[0] - n) < qa ? o > 0 ? 2 : 1 : Ca(r[1] - e) < qa ? o > 0 ? 1 : 0 : o > 0 ? 3 : 2
            }
            function i(t, e) {
                return a(t.x, e.x)
            }
            function a(t, e) {
                var n = o(t, 1)
                  , r = o(e, 1);
                return n !== r ? n - r : 0 === n ? e[1] - t[1] : 1 === n ? t[0] - e[0] : 2 === n ? t[1] - e[1] : e[0] - t[0]
            }
            return function(u) {
                function s(t) {
                    for (var e = 0, n = g.length, r = t[1], o = 0; o < n; ++o)
                        for (var i, a = 1, u = g[o], s = u.length, c = u[0]; a < s; ++a)
                            i = u[a],
                            c[1] <= r ? i[1] > r && ot(c, i, t) > 0 && ++e : i[1] <= r && ot(c, i, t) < 0 && --e,
                            c = i;
                    return 0 !== e
                }
                function c(i, u, s, c) {
                    var l = 0
                      , f = 0;
                    if (null == i || (l = o(i, s)) !== (f = o(u, s)) || a(i, u) < 0 ^ s > 0) {
                        do
                            c.point(0 === l || 3 === l ? t : n, l > 1 ? r : e);
                        while ((l = (l + s + 4) % 4) !== f)
                    } else
                        c.point(u[0], u[1])
                }
                function l(o, i) {
                    return t <= o && o <= n && e <= i && i <= r
                }
                function f(t, e) {
                    l(t, e) && u.point(t, e)
                }
                function p() {
                    N.point = d,
                    g && g.push(y = []),
                    E = !0,
                    C = !1,
                    _ = w = NaN
                }
                function h() {
                    v && (d(m, b),
                    x && C && S.rejoin(),
                    v.push(S.buffer())),
                    N.point = f,
                    C && u.lineEnd()
                }
                function d(t, e) {
                    t = Math.max(-zu, Math.min(zu, t)),
                    e = Math.max(-zu, Math.min(zu, e));
                    var n = l(t, e);
                    if (g && y.push([t, e]),
                    E)
                        m = t,
                        b = e,
                        x = n,
                        E = !1,
                        n && (u.lineStart(),
                        u.point(t, e));
                    else if (n && C)
                        u.point(t, e);
                    else {
                        var r = {
                            a: {
                                x: _,
                                y: w
                            },
                            b: {
                                x: t,
                                y: e
                            }
                        };
                        T(r) ? (C || (u.lineStart(),
                        u.point(r.a.x, r.a.y)),
                        u.point(r.b.x, r.b.y),
                        n || u.lineEnd(),
                        M = !1) : n && (u.lineStart(),
                        u.point(t, e),
                        M = !1)
                    }
                    _ = t,
                    w = e,
                    C = n
                }
                var v, g, y, m, b, x, _, w, C, E, M, k = u, S = qe(), T = Ye(t, e, n, r), N = {
                    point: f,
                    lineStart: p,
                    lineEnd: h,
                    polygonStart: function() {
                        u = S,
                        v = [],
                        g = [],
                        M = !0
                    },
                    polygonEnd: function() {
                        u = k,
                        v = ha.merge(v);
                        var e = s([t, r])
                          , n = M && e
                          , o = v.length;
                        (n || o) && (u.polygonStart(),
                        n && (u.lineStart(),
                        c(null, null, 1, u),
                        u.lineEnd()),
                        o && Ie(v, i, e, c, u),
                        u.polygonEnd()),
                        v = g = y = null
                    }
                };
                return N
            }
        }
        function Xe(t) {
            var e = 0
              , n = Ba / 3
              , r = pn(t)
              , o = r(e, n);
            return o.parallels = function(t) {
                return arguments.length ? r(e = t[0] * Ba / 180, n = t[1] * Ba / 180) : [e / Ba * 180, n / Ba * 180]
            }
            ,
            o
        }
        function Je(t, e) {
            function n(t, e) {
                var n = Math.sqrt(i - 2 * o * Math.sin(e)) / o;
                return [n * Math.sin(t *= o), a - n * Math.cos(t)]
            }
            var r = Math.sin(t)
              , o = (r + Math.sin(e)) / 2
              , i = 1 + r * (2 * o - r)
              , a = Math.sqrt(i) / o;
            return n.invert = function(t, e) {
                var n = a - e;
                return [Math.atan2(t, n) / o, at((i - (t * t + n * n) * o * o) / (2 * o))]
            }
            ,
            n
        }
        function Ge() {
            function t(t, e) {
                Vu += o * t - r * e,
                r = t,
                o = e
            }
            var e, n, r, o;
            Ju.point = function(i, a) {
                Ju.point = t,
                e = r = i,
                n = o = a
            }
            ,
            Ju.lineEnd = function() {
                t(e, n)
            }
        }
        function Qe(t, e) {
            t < $u && ($u = t),
            t > Ku && (Ku = t),
            e < Yu && (Yu = e),
            e > Xu && (Xu = e)
        }
        function Ze() {
            function t(t, e) {
                a.push("M", t, ",", e, i)
            }
            function e(t, e) {
                a.push("M", t, ",", e),
                u.point = n
            }
            function n(t, e) {
                a.push("L", t, ",", e)
            }
            function r() {
                u.point = t
            }
            function o() {
                a.push("Z")
            }
            var i = tn(4.5)
              , a = []
              , u = {
                point: t,
                lineStart: function() {
                    u.point = e
                },
                lineEnd: r,
                polygonStart: function() {
                    u.lineEnd = o
                },
                polygonEnd: function() {
                    u.lineEnd = r,
                    u.point = t
                },
                pointRadius: function(t) {
                    return i = tn(t),
                    u
                },
                result: function() {
                    if (a.length) {
                        var t = a.join("");
                        return a = [],
                        t
                    }
                }
            };
            return u
        }
        function tn(t) {
            return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
        }
        function en(t, e) {
            Pu += t,
            ju += e,
            ++Du
        }
        function nn() {
            function t(t, r) {
                var o = t - e
                  , i = r - n
                  , a = Math.sqrt(o * o + i * i);
                Iu += a * (e + t) / 2,
                Ru += a * (n + r) / 2,
                Lu += a,
                en(e = t, n = r)
            }
            var e, n;
            Qu.point = function(r, o) {
                Qu.point = t,
                en(e = r, n = o)
            }
        }
        function rn() {
            Qu.point = en
        }
        function on() {
            function t(t, e) {
                var n = t - r
                  , i = e - o
                  , a = Math.sqrt(n * n + i * i);
                Iu += a * (r + t) / 2,
                Ru += a * (o + e) / 2,
                Lu += a,
                a = o * t - r * e,
                Uu += a * (r + t),
                Fu += a * (o + e),
                qu += 3 * a,
                en(r = t, o = e)
            }
            var e, n, r, o;
            Qu.point = function(i, a) {
                Qu.point = t,
                en(e = r = i, n = o = a)
            }
            ,
            Qu.lineEnd = function() {
                t(e, n)
            }
        }
        function an(t) {
            function e(e, n) {
                t.moveTo(e + a, n),
                t.arc(e, n, a, 0, za)
            }
            function n(e, n) {
                t.moveTo(e, n),
                u.point = r
            }
            function r(e, n) {
                t.lineTo(e, n)
            }
            function o() {
                u.point = e
            }
            function i() {
                t.closePath()
            }
            var a = 4.5
              , u = {
                point: e,
                lineStart: function() {
                    u.point = n
                },
                lineEnd: o,
                polygonStart: function() {
                    u.lineEnd = i
                },
                polygonEnd: function() {
                    u.lineEnd = o,
                    u.point = e
                },
                pointRadius: function(t) {
                    return a = t,
                    u
                },
                result: k
            };
            return u
        }
        function un(t) {
            function e(t) {
                return (u ? r : n)(t)
            }
            function n(e) {
                return ln(e, function(n, r) {
                    n = t(n, r),
                    e.point(n[0], n[1])
                })
            }
            function r(e) {
                function n(n, r) {
                    n = t(n, r),
                    e.point(n[0], n[1])
                }
                function r() {
                    b = NaN,
                    E.point = i,
                    e.lineStart()
                }
                function i(n, r) {
                    var i = xe([n, r])
                      , a = t(n, r);
                    o(b, x, m, _, w, C, b = a[0], x = a[1], m = n, _ = i[0], w = i[1], C = i[2], u, e),
                    e.point(b, x)
                }
                function a() {
                    E.point = n,
                    e.lineEnd()
                }
                function s() {
                    r(),
                    E.point = c,
                    E.lineEnd = l
                }
                function c(t, e) {
                    i(f = t, p = e),
                    h = b,
                    d = x,
                    v = _,
                    g = w,
                    y = C,
                    E.point = i
                }
                function l() {
                    o(b, x, m, _, w, C, h, d, f, v, g, y, u, e),
                    E.lineEnd = a,
                    a()
                }
                var f, p, h, d, v, g, y, m, b, x, _, w, C, E = {
                    point: n,
                    lineStart: r,
                    lineEnd: a,
                    polygonStart: function() {
                        e.polygonStart(),
                        E.lineStart = s
                    },
                    polygonEnd: function() {
                        e.polygonEnd(),
                        E.lineStart = r
                    }
                };
                return E
            }
            function o(e, n, r, u, s, c, l, f, p, h, d, v, g, y) {
                var m = l - e
                  , b = f - n
                  , x = m * m + b * b;
                if (x > 4 * i && g--) {
                    var _ = u + h
                      , w = s + d
                      , C = c + v
                      , E = Math.sqrt(_ * _ + w * w + C * C)
                      , M = Math.asin(C /= E)
                      , k = Ca(Ca(C) - 1) < qa || Ca(r - p) < qa ? (r + p) / 2 : Math.atan2(w, _)
                      , S = t(k, M)
                      , T = S[0]
                      , N = S[1]
                      , A = T - e
                      , O = N - n
                      , P = b * A - m * O;
                    (P * P / x > i || Ca((m * A + b * O) / x - .5) > .3 || u * h + s * d + c * v < a) && (o(e, n, r, u, s, c, T, N, k, _ /= E, w /= E, C, g, y),
                    y.point(T, N),
                    o(T, N, k, _, w, C, l, f, p, h, d, v, g, y))
                }
            }
            var i = .5
              , a = Math.cos(30 * $a)
              , u = 16;
            return e.precision = function(t) {
                return arguments.length ? (u = (i = t * t) > 0 && 16,
                e) : Math.sqrt(i)
            }
            ,
            e
        }
        function sn(t) {
            var e = un(function(e, n) {
                return t([e * Ya, n * Ya])
            });
            return function(t) {
                return hn(e(t))
            }
        }
        function cn(t) {
            this.stream = t
        }
        function ln(t, e) {
            return {
                point: e,
                sphere: function() {
                    t.sphere()
                },
                lineStart: function() {
                    t.lineStart()
                },
                lineEnd: function() {
                    t.lineEnd()
                },
                polygonStart: function() {
                    t.polygonStart()
                },
                polygonEnd: function() {
                    t.polygonEnd()
                }
            }
        }
        function fn(t) {
            return pn(function() {
                return t
            })()
        }
        function pn(t) {
            function e(t) {
                return t = u(t[0] * $a, t[1] * $a),
                [t[0] * p + s, c - t[1] * p]
            }
            function n(t) {
                return t = u.invert((t[0] - s) / p, (c - t[1]) / p),
                t && [t[0] * Ya, t[1] * Ya]
            }
            function r() {
                u = je(a = gn(y, m, b), i);
                var t = i(v, g);
                return s = h - t[0] * p,
                c = d + t[1] * p,
                o()
            }
            function o() {
                return l && (l.valid = !1,
                l = null),
                e
            }
            var i, a, u, s, c, l, f = un(function(t, e) {
                return t = i(t, e),
                [t[0] * p + s, c - t[1] * p]
            }), p = 150, h = 480, d = 250, v = 0, g = 0, y = 0, m = 0, b = 0, x = Bu, _ = C, w = null, E = null;
            return e.stream = function(t) {
                return l && (l.valid = !1),
                l = hn(x(a, f(_(t)))),
                l.valid = !0,
                l
            }
            ,
            e.clipAngle = function(t) {
                return arguments.length ? (x = null == t ? (w = t,
                Bu) : $e((w = +t) * $a),
                o()) : w
            }
            ,
            e.clipExtent = function(t) {
                return arguments.length ? (E = t,
                _ = t ? Ke(t[0][0], t[0][1], t[1][0], t[1][1]) : C,
                o()) : E
            }
            ,
            e.scale = function(t) {
                return arguments.length ? (p = +t,
                r()) : p
            }
            ,
            e.translate = function(t) {
                return arguments.length ? (h = +t[0],
                d = +t[1],
                r()) : [h, d]
            }
            ,
            e.center = function(t) {
                return arguments.length ? (v = t[0] % 360 * $a,
                g = t[1] % 360 * $a,
                r()) : [v * Ya, g * Ya]
            }
            ,
            e.rotate = function(t) {
                return arguments.length ? (y = t[0] % 360 * $a,
                m = t[1] % 360 * $a,
                b = t.length > 2 ? t[2] % 360 * $a : 0,
                r()) : [y * Ya, m * Ya, b * Ya]
            }
            ,
            ha.rebind(e, f, "precision"),
            function() {
                return i = t.apply(this, arguments),
                e.invert = i.invert && n,
                r()
            }
        }
        function hn(t) {
            return ln(t, function(e, n) {
                t.point(e * $a, n * $a)
            })
        }
        function dn(t, e) {
            return [t, e]
        }
        function vn(t, e) {
            return [t > Ba ? t - za : t < -Ba ? t + za : t, e]
        }
        function gn(t, e, n) {
            return t ? e || n ? je(mn(t), bn(e, n)) : mn(t) : e || n ? bn(e, n) : vn
        }
        function yn(t) {
            return function(e, n) {
                return e += t,
                [e > Ba ? e - za : e < -Ba ? e + za : e, n]
            }
        }
        function mn(t) {
            var e = yn(t);
            return e.invert = yn(-t),
            e
        }
        function bn(t, e) {
            function n(t, e) {
                var n = Math.cos(e)
                  , u = Math.cos(t) * n
                  , s = Math.sin(t) * n
                  , c = Math.sin(e)
                  , l = c * r + u * o;
                return [Math.atan2(s * i - l * a, u * r - c * o), at(l * i + s * a)]
            }
            var r = Math.cos(t)
              , o = Math.sin(t)
              , i = Math.cos(e)
              , a = Math.sin(e);
            return n.invert = function(t, e) {
                var n = Math.cos(e)
                  , u = Math.cos(t) * n
                  , s = Math.sin(t) * n
                  , c = Math.sin(e)
                  , l = c * i - s * a;
                return [Math.atan2(s * i + c * a, u * r + l * o), at(l * r - u * o)]
            }
            ,
            n
        }
        function xn(t, e) {
            var n = Math.cos(t)
              , r = Math.sin(t);
            return function(o, i, a, u) {
                var s = a * e;
                null != o ? (o = _n(n, o),
                i = _n(n, i),
                (a > 0 ? o < i : o > i) && (o += a * za)) : (o = t + a * za,
                i = t - .5 * s);
                for (var c, l = o; a > 0 ? l > i : l < i; l -= s)
                    u.point((c = ke([n, -r * Math.cos(l), -r * Math.sin(l)]))[0], c[1])
            }
        }
        function _n(t, e) {
            var n = xe(e);
            n[0] -= t,
            Me(n);
            var r = it(-n[1]);
            return ((-n[2] < 0 ? -r : r) + 2 * Math.PI - qa) % (2 * Math.PI)
        }
        function wn(t, e, n) {
            var r = ha.range(t, e - qa, n).concat(e);
            return function(t) {
                return r.map(function(e) {
                    return [t, e]
                })
            }
        }
        function Cn(t, e, n) {
            var r = ha.range(t, e - qa, n).concat(e);
            return function(t) {
                return r.map(function(e) {
                    return [e, t]
                })
            }
        }
        function En(t) {
            return t.source
        }
        function Mn(t) {
            return t.target
        }
        function kn(t, e, n, r) {
            var o = Math.cos(e)
              , i = Math.sin(e)
              , a = Math.cos(r)
              , u = Math.sin(r)
              , s = o * Math.cos(t)
              , c = o * Math.sin(t)
              , l = a * Math.cos(n)
              , f = a * Math.sin(n)
              , p = 2 * Math.asin(Math.sqrt(lt(r - e) + o * a * lt(n - t)))
              , h = 1 / Math.sin(p)
              , d = p ? function(t) {
                var e = Math.sin(t *= p) * h
                  , n = Math.sin(p - t) * h
                  , r = n * s + e * l
                  , o = n * c + e * f
                  , a = n * i + e * u;
                return [Math.atan2(o, r) * Ya, Math.atan2(a, Math.sqrt(r * r + o * o)) * Ya]
            }
            : function() {
                return [t * Ya, e * Ya]
            }
            ;
            return d.distance = p,
            d
        }
        function Sn() {
            function t(t, o) {
                var i = Math.sin(o *= $a)
                  , a = Math.cos(o)
                  , u = Ca((t *= $a) - e)
                  , s = Math.cos(u);
                Zu += Math.atan2(Math.sqrt((u = a * Math.sin(u)) * u + (u = r * i - n * a * s) * u), n * i + r * a * s),
                e = t,
                n = i,
                r = a
            }
            var e, n, r;
            ts.point = function(o, i) {
                e = o * $a,
                n = Math.sin(i *= $a),
                r = Math.cos(i),
                ts.point = t
            }
            ,
            ts.lineEnd = function() {
                ts.point = ts.lineEnd = k
            }
        }
        function Tn(t, e) {
            function n(e, n) {
                var r = Math.cos(e)
                  , o = Math.cos(n)
                  , i = t(r * o);
                return [i * o * Math.sin(e), i * Math.sin(n)]
            }
            return n.invert = function(t, n) {
                var r = Math.sqrt(t * t + n * n)
                  , o = e(r)
                  , i = Math.sin(o)
                  , a = Math.cos(o);
                return [Math.atan2(t * i, r * a), Math.asin(r && n * i / r)]
            }
            ,
            n
        }
        function Nn(t, e) {
            function n(t, e) {
                a > 0 ? e < -Va + qa && (e = -Va + qa) : e > Va - qa && (e = Va - qa);
                var n = a / Math.pow(o(e), i);
                return [n * Math.sin(i * t), a - n * Math.cos(i * t)]
            }
            var r = Math.cos(t)
              , o = function(t) {
                return Math.tan(Ba / 4 + t / 2)
            }
              , i = t === e ? Math.sin(t) : Math.log(r / Math.cos(e)) / Math.log(o(e) / o(t))
              , a = r * Math.pow(o(t), i) / i;
            return i ? (n.invert = function(t, e) {
                var n = a - e
                  , r = rt(i) * Math.sqrt(t * t + n * n);
                return [Math.atan2(t, n) / i, 2 * Math.atan(Math.pow(a / r, 1 / i)) - Va]
            }
            ,
            n) : On
        }
        function An(t, e) {
            function n(t, e) {
                var n = i - e;
                return [n * Math.sin(o * t), i - n * Math.cos(o * t)]
            }
            var r = Math.cos(t)
              , o = t === e ? Math.sin(t) : (r - Math.cos(e)) / (e - t)
              , i = r / o + t;
            return Ca(o) < qa ? dn : (n.invert = function(t, e) {
                var n = i - e;
                return [Math.atan2(t, n) / o, i - rt(o) * Math.sqrt(t * t + n * n)]
            }
            ,
            n)
        }
        function On(t, e) {
            return [t, Math.log(Math.tan(Ba / 4 + e / 2))]
        }
        function Pn(t) {
            var e, n = fn(t), r = n.scale, o = n.translate, i = n.clipExtent;
            return n.scale = function() {
                var t = r.apply(n, arguments);
                return t === n ? e ? n.clipExtent(null) : n : t
            }
            ,
            n.translate = function() {
                var t = o.apply(n, arguments);
                return t === n ? e ? n.clipExtent(null) : n : t
            }
            ,
            n.clipExtent = function(t) {
                var a = i.apply(n, arguments);
                if (a === n) {
                    if (e = null == t) {
                        var u = Ba * r()
                          , s = o();
                        i([[s[0] - u, s[1] - u], [s[0] + u, s[1] + u]])
                    }
                } else
                    e && (a = null);
                return a
            }
            ,
            n.clipExtent(null)
        }
        function jn(t, e) {
            return [Math.log(Math.tan(Ba / 4 + e / 2)), -t]
        }
        function Dn(t) {
            return t[0]
        }
        function In(t) {
            return t[1]
        }
        function Rn(t) {
            for (var e = t.length, n = [0, 1], r = 2, o = 2; o < e; o++) {
                for (; r > 1 && ot(t[n[r - 2]], t[n[r - 1]], t[o]) <= 0; )
                    --r;
                n[r++] = o
            }
            return n.slice(0, r)
        }
        function Ln(t, e) {
            return t[0] - e[0] || t[1] - e[1]
        }
        function Un(t, e, n) {
            return (n[0] - e[0]) * (t[1] - e[1]) < (n[1] - e[1]) * (t[0] - e[0])
        }
        function Fn(t, e, n, r) {
            var o = t[0]
              , i = n[0]
              , a = e[0] - o
              , u = r[0] - i
              , s = t[1]
              , c = n[1]
              , l = e[1] - s
              , f = r[1] - c
              , p = (u * (s - c) - f * (o - i)) / (f * a - u * l);
            return [o + p * a, s + p * l]
        }
        function qn(t) {
            var e = t[0]
              , n = t[t.length - 1];
            return !(e[0] - n[0] || e[1] - n[1])
        }
        function Hn() {
            sr(this),
            this.edge = this.site = this.circle = null
        }
        function Bn(t) {
            var e = ps.pop() || new Hn;
            return e.site = t,
            e
        }
        function zn(t) {
            Zn(t),
            cs.remove(t),
            ps.push(t),
            sr(t)
        }
        function Wn(t) {
            var e = t.circle
              , n = e.x
              , r = e.cy
              , o = {
                x: n,
                y: r
            }
              , i = t.P
              , a = t.N
              , u = [t];
            zn(t);
            for (var s = i; s.circle && Ca(n - s.circle.x) < qa && Ca(r - s.circle.cy) < qa; )
                i = s.P,
                u.unshift(s),
                zn(s),
                s = i;
            u.unshift(s),
            Zn(s);
            for (var c = a; c.circle && Ca(n - c.circle.x) < qa && Ca(r - c.circle.cy) < qa; )
                a = c.N,
                u.push(c),
                zn(c),
                c = a;
            u.push(c),
            Zn(c);
            var l, f = u.length;
            for (l = 1; l < f; ++l)
                c = u[l],
                s = u[l - 1],
                ir(c.edge, s.site, c.site, o);
            s = u[0],
            c = u[f - 1],
            c.edge = rr(s.site, c.site, null, o),
            Qn(s),
            Qn(c)
        }
        function Vn(t) {
            for (var e, n, r, o, i = t.x, a = t.y, u = cs._; u; )
                if (r = $n(u, a) - i,
                r > qa)
                    u = u.L;
                else {
                    if (o = i - Yn(u, a),
                    !(o > qa)) {
                        r > -qa ? (e = u.P,
                        n = u) : o > -qa ? (e = u,
                        n = u.N) : e = n = u;
                        break
                    }
                    if (!u.R) {
                        e = u;
                        break
                    }
                    u = u.R
                }
            var s = Bn(t);
            if (cs.insert(e, s),
            e || n) {
                if (e === n)
                    return Zn(e),
                    n = Bn(e.site),
                    cs.insert(s, n),
                    s.edge = n.edge = rr(e.site, s.site),
                    Qn(e),
                    void Qn(n);
                if (!n)
                    return void (s.edge = rr(e.site, s.site));
                Zn(e),
                Zn(n);
                var c = e.site
                  , l = c.x
                  , f = c.y
                  , p = t.x - l
                  , h = t.y - f
                  , d = n.site
                  , v = d.x - l
                  , g = d.y - f
                  , y = 2 * (p * g - h * v)
                  , m = p * p + h * h
                  , b = v * v + g * g
                  , x = {
                    x: (g * m - h * b) / y + l,
                    y: (p * b - v * m) / y + f
                };
                ir(n.edge, c, d, x),
                s.edge = rr(c, t, null, x),
                n.edge = rr(t, d, null, x),
                Qn(e),
                Qn(n)
            }
        }
        function $n(t, e) {
            var n = t.site
              , r = n.x
              , o = n.y
              , i = o - e;
            if (!i)
                return r;
            var a = t.P;
            if (!a)
                return -(1 / 0);
            n = a.site;
            var u = n.x
              , s = n.y
              , c = s - e;
            if (!c)
                return u;
            var l = u - r
              , f = 1 / i - 1 / c
              , p = l / c;
            return f ? (-p + Math.sqrt(p * p - 2 * f * (l * l / (-2 * c) - s + c / 2 + o - i / 2))) / f + r : (r + u) / 2
        }
        function Yn(t, e) {
            var n = t.N;
            if (n)
                return $n(n, e);
            var r = t.site;
            return r.y === e ? r.x : 1 / 0
        }
        function Kn(t) {
            this.site = t,
            this.edges = []
        }
        function Xn(t) {
            for (var e, n, r, o, i, a, u, s, c, l, f = t[0][0], p = t[1][0], h = t[0][1], d = t[1][1], v = ss, g = v.length; g--; )
                if (i = v[g],
                i && i.prepare())
                    for (u = i.edges,
                    s = u.length,
                    a = 0; a < s; )
                        l = u[a].end(),
                        r = l.x,
                        o = l.y,
                        c = u[++a % s].start(),
                        e = c.x,
                        n = c.y,
                        (Ca(r - e) > qa || Ca(o - n) > qa) && (u.splice(a, 0, new ar(or(i.site, l, Ca(r - f) < qa && d - o > qa ? {
                            x: f,
                            y: Ca(e - f) < qa ? n : d
                        } : Ca(o - d) < qa && p - r > qa ? {
                            x: Ca(n - d) < qa ? e : p,
                            y: d
                        } : Ca(r - p) < qa && o - h > qa ? {
                            x: p,
                            y: Ca(e - p) < qa ? n : h
                        } : Ca(o - h) < qa && r - f > qa ? {
                            x: Ca(n - h) < qa ? e : f,
                            y: h
                        } : null),i.site,null)),
                        ++s)
        }
        function Jn(t, e) {
            return e.angle - t.angle
        }
        function Gn() {
            sr(this),
            this.x = this.y = this.arc = this.site = this.cy = null
        }
        function Qn(t) {
            var e = t.P
              , n = t.N;
            if (e && n) {
                var r = e.site
                  , o = t.site
                  , i = n.site;
                if (r !== i) {
                    var a = o.x
                      , u = o.y
                      , s = r.x - a
                      , c = r.y - u
                      , l = i.x - a
                      , f = i.y - u
                      , p = 2 * (s * f - c * l);
                    if (!(p >= -Ha)) {
                        var h = s * s + c * c
                          , d = l * l + f * f
                          , v = (f * h - c * d) / p
                          , g = (s * d - l * h) / p
                          , f = g + u
                          , y = hs.pop() || new Gn;
                        y.arc = t,
                        y.site = o,
                        y.x = v + a,
                        y.y = f + Math.sqrt(v * v + g * g),
                        y.cy = f,
                        t.circle = y;
                        for (var m = null, b = fs._; b; )
                            if (y.y < b.y || y.y === b.y && y.x <= b.x) {
                                if (!b.L) {
                                    m = b.P;
                                    break
                                }
                                b = b.L
                            } else {
                                if (!b.R) {
                                    m = b;
                                    break
                                }
                                b = b.R
                            }
                        fs.insert(m, y),
                        m || (ls = y)
                    }
                }
            }
        }
        function Zn(t) {
            var e = t.circle;
            e && (e.P || (ls = e.N),
            fs.remove(e),
            hs.push(e),
            sr(e),
            t.circle = null)
        }
        function tr(t) {
            for (var e, n = us, r = Ye(t[0][0], t[0][1], t[1][0], t[1][1]), o = n.length; o--; )
                e = n[o],
                (!er(e, t) || !r(e) || Ca(e.a.x - e.b.x) < qa && Ca(e.a.y - e.b.y) < qa) && (e.a = e.b = null,
                n.splice(o, 1))
        }
        function er(t, e) {
            var n = t.b;
            if (n)
                return !0;
            var r, o, i = t.a, a = e[0][0], u = e[1][0], s = e[0][1], c = e[1][1], l = t.l, f = t.r, p = l.x, h = l.y, d = f.x, v = f.y, g = (p + d) / 2, y = (h + v) / 2;
            if (v === h) {
                if (g < a || g >= u)
                    return;
                if (p > d) {
                    if (i) {
                        if (i.y >= c)
                            return
                    } else
                        i = {
                            x: g,
                            y: s
                        };
                    n = {
                        x: g,
                        y: c
                    }
                } else {
                    if (i) {
                        if (i.y < s)
                            return
                    } else
                        i = {
                            x: g,
                            y: c
                        };
                    n = {
                        x: g,
                        y: s
                    }
                }
            } else if (r = (p - d) / (v - h),
            o = y - r * g,
            r < -1 || r > 1)
                if (p > d) {
                    if (i) {
                        if (i.y >= c)
                            return
                    } else
                        i = {
                            x: (s - o) / r,
                            y: s
                        };
                    n = {
                        x: (c - o) / r,
                        y: c
                    }
                } else {
                    if (i) {
                        if (i.y < s)
                            return
                    } else
                        i = {
                            x: (c - o) / r,
                            y: c
                        };
                    n = {
                        x: (s - o) / r,
                        y: s
                    }
                }
            else if (h < v) {
                if (i) {
                    if (i.x >= u)
                        return
                } else
                    i = {
                        x: a,
                        y: r * a + o
                    };
                n = {
                    x: u,
                    y: r * u + o
                }
            } else {
                if (i) {
                    if (i.x < a)
                        return
                } else
                    i = {
                        x: u,
                        y: r * u + o
                    };
                n = {
                    x: a,
                    y: r * a + o
                }
            }
            return t.a = i,
            t.b = n,
            !0
        }
        function nr(t, e) {
            this.l = t,
            this.r = e,
            this.a = this.b = null
        }
        function rr(t, e, n, r) {
            var o = new nr(t,e);
            return us.push(o),
            n && ir(o, t, e, n),
            r && ir(o, e, t, r),
            ss[t.i].edges.push(new ar(o,t,e)),
            ss[e.i].edges.push(new ar(o,e,t)),
            o
        }
        function or(t, e, n) {
            var r = new nr(t,null);
            return r.a = e,
            r.b = n,
            us.push(r),
            r
        }
        function ir(t, e, n, r) {
            t.a || t.b ? t.l === n ? t.b = r : t.a = r : (t.a = r,
            t.l = e,
            t.r = n)
        }
        function ar(t, e, n) {
            var r = t.a
              , o = t.b;
            this.edge = t,
            this.site = e,
            this.angle = n ? Math.atan2(n.y - e.y, n.x - e.x) : t.l === e ? Math.atan2(o.x - r.x, r.y - o.y) : Math.atan2(r.x - o.x, o.y - r.y)
        }
        function ur() {
            this._ = null
        }
        function sr(t) {
            t.U = t.C = t.L = t.R = t.P = t.N = null
        }
        function cr(t, e) {
            var n = e
              , r = e.R
              , o = n.U;
            o ? o.L === n ? o.L = r : o.R = r : t._ = r,
            r.U = o,
            n.U = r,
            n.R = r.L,
            n.R && (n.R.U = n),
            r.L = n
        }
        function lr(t, e) {
            var n = e
              , r = e.L
              , o = n.U;
            o ? o.L === n ? o.L = r : o.R = r : t._ = r,
            r.U = o,
            n.U = r,
            n.L = r.R,
            n.L && (n.L.U = n),
            r.R = n
        }
        function fr(t) {
            for (; t.L; )
                t = t.L;
            return t
        }
        function pr(t, e) {
            var n, r, o, i = t.sort(hr).pop();
            for (us = [],
            ss = new Array(t.length),
            cs = new ur,
            fs = new ur; ; )
                if (o = ls,
                i && (!o || i.y < o.y || i.y === o.y && i.x < o.x))
                    i.x === n && i.y === r || (ss[i.i] = new Kn(i),
                    Vn(i),
                    n = i.x,
                    r = i.y),
                    i = t.pop();
                else {
                    if (!o)
                        break;
                    Wn(o.arc)
                }
            e && (tr(e),
            Xn(e));
            var a = {
                cells: ss,
                edges: us
            };
            return cs = fs = us = ss = null,
            a
        }
        function hr(t, e) {
            return e.y - t.y || e.x - t.x
        }
        function dr(t, e, n) {
            return (t.x - n.x) * (e.y - t.y) - (t.x - e.x) * (n.y - t.y)
        }
        function vr(t) {
            return t.x
        }
        function gr(t) {
            return t.y
        }
        function yr() {
            return {
                leaf: !0,
                nodes: [],
                point: null,
                x: null,
                y: null
            }
        }
        function mr(t, e, n, r, o, i) {
            if (!t(e, n, r, o, i)) {
                var a = .5 * (n + o)
                  , u = .5 * (r + i)
                  , s = e.nodes;
                s[0] && mr(t, s[0], n, r, a, u),
                s[1] && mr(t, s[1], a, r, o, u),
                s[2] && mr(t, s[2], n, u, a, i),
                s[3] && mr(t, s[3], a, u, o, i)
            }
        }
        function br(t, e, n, r, o, i, a) {
            var u, s = 1 / 0;
            return function t(c, l, f, p, h) {
                if (!(l > i || f > a || p < r || h < o)) {
                    if (d = c.point) {
                        var d, v = e - c.x, g = n - c.y, y = v * v + g * g;
                        if (y < s) {
                            var m = Math.sqrt(s = y);
                            r = e - m,
                            o = n - m,
                            i = e + m,
                            a = n + m,
                            u = d
                        }
                    }
                    for (var b = c.nodes, x = .5 * (l + p), _ = .5 * (f + h), w = e >= x, C = n >= _, E = C << 1 | w, M = E + 4; E < M; ++E)
                        if (c = b[3 & E])
                            switch (3 & E) {
                            case 0:
                                t(c, l, f, x, _);
                                break;
                            case 1:
                                t(c, x, f, p, _);
                                break;
                            case 2:
                                t(c, l, _, x, h);
                                break;
                            case 3:
                                t(c, x, _, p, h)
                            }
                }
            }(t, r, o, i, a),
            u
        }
        function xr(t, e) {
            t = ha.rgb(t),
            e = ha.rgb(e);
            var n = t.r
              , r = t.g
              , o = t.b
              , i = e.r - n
              , a = e.g - r
              , u = e.b - o;
            return function(t) {
                return "#" + Mt(Math.round(n + i * t)) + Mt(Math.round(r + a * t)) + Mt(Math.round(o + u * t))
            }
        }
        function _r(t, e) {
            var n, r = {}, o = {};
            for (n in t)
                n in e ? r[n] = Er(t[n], e[n]) : o[n] = t[n];
            for (n in e)
                n in t || (o[n] = e[n]);
            return function(t) {
                for (n in r)
                    o[n] = r[n](t);
                return o
            }
        }
        function wr(t, e) {
            return t = +t,
            e = +e,
            function(n) {
                return t * (1 - n) + e * n
            }
        }
        function Cr(t, e) {
            var n, r, o, i = vs.lastIndex = gs.lastIndex = 0, a = -1, u = [], s = [];
            for (t += "",
            e += ""; (n = vs.exec(t)) && (r = gs.exec(e)); )
                (o = r.index) > i && (o = e.slice(i, o),
                u[a] ? u[a] += o : u[++a] = o),
                (n = n[0]) === (r = r[0]) ? u[a] ? u[a] += r : u[++a] = r : (u[++a] = null,
                s.push({
                    i: a,
                    x: wr(n, r)
                })),
                i = gs.lastIndex;
            return i < e.length && (o = e.slice(i),
            u[a] ? u[a] += o : u[++a] = o),
            u.length < 2 ? s[0] ? (e = s[0].x,
            function(t) {
                return e(t) + ""
            }
            ) : function() {
                return e
            }
            : (e = s.length,
            function(t) {
                for (var n, r = 0; r < e; ++r)
                    u[(n = s[r]).i] = n.x(t);
                return u.join("")
            }
            )
        }
        function Er(t, e) {
            for (var n, r = ha.interpolators.length; --r >= 0 && !(n = ha.interpolators[r](t, e)); )
                ;
            return n
        }
        function Mr(t, e) {
            var n, r = [], o = [], i = t.length, a = e.length, u = Math.min(t.length, e.length);
            for (n = 0; n < u; ++n)
                r.push(Er(t[n], e[n]));
            for (; n < i; ++n)
                o[n] = t[n];
            for (; n < a; ++n)
                o[n] = e[n];
            return function(t) {
                for (n = 0; n < u; ++n)
                    o[n] = r[n](t);
                return o
            }
        }
        function kr(t) {
            return function(e) {
                return e <= 0 ? 0 : e >= 1 ? 1 : t(e)
            }
        }
        function Sr(t) {
            return function(e) {
                return 1 - t(1 - e)
            }
        }
        function Tr(t) {
            return function(e) {
                return .5 * (e < .5 ? t(2 * e) : 2 - t(2 - 2 * e))
            }
        }
        function Nr(t) {
            return t * t
        }
        function Ar(t) {
            return t * t * t
        }
        function Or(t) {
            if (t <= 0)
                return 0;
            if (t >= 1)
                return 1;
            var e = t * t
              , n = e * t;
            return 4 * (t < .5 ? n : 3 * (t - e) + n - .75)
        }
        function Pr(t) {
            return function(e) {
                return Math.pow(e, t)
            }
        }
        function jr(t) {
            return 1 - Math.cos(t * Va)
        }
        function Dr(t) {
            return Math.pow(2, 10 * (t - 1))
        }
        function Ir(t) {
            return 1 - Math.sqrt(1 - t * t)
        }
        function Rr(t, e) {
            var n;
            return arguments.length < 2 && (e = .45),
            arguments.length ? n = e / za * Math.asin(1 / t) : (t = 1,
            n = e / 4),
            function(r) {
                return 1 + t * Math.pow(2, -10 * r) * Math.sin((r - n) * za / e)
            }
        }
        function Lr(t) {
            return t || (t = 1.70158),
            function(e) {
                return e * e * ((t + 1) * e - t)
            }
        }
        function Ur(t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }
        function Fr(t, e) {
            t = ha.hcl(t),
            e = ha.hcl(e);
            var n = t.h
              , r = t.c
              , o = t.l
              , i = e.h - n
              , a = e.c - r
              , u = e.l - o;
            return isNaN(a) && (a = 0,
            r = isNaN(r) ? e.c : r),
            isNaN(i) ? (i = 0,
            n = isNaN(n) ? e.h : n) : i > 180 ? i -= 360 : i < -180 && (i += 360),
            function(t) {
                return vt(n + i * t, r + a * t, o + u * t) + ""
            }
        }
        function qr(t, e) {
            t = ha.hsl(t),
            e = ha.hsl(e);
            var n = t.h
              , r = t.s
              , o = t.l
              , i = e.h - n
              , a = e.s - r
              , u = e.l - o;
            return isNaN(a) && (a = 0,
            r = isNaN(r) ? e.s : r),
            isNaN(i) ? (i = 0,
            n = isNaN(n) ? e.h : n) : i > 180 ? i -= 360 : i < -180 && (i += 360),
            function(t) {
                return ht(n + i * t, r + a * t, o + u * t) + ""
            }
        }
        function Hr(t, e) {
            t = ha.lab(t),
            e = ha.lab(e);
            var n = t.l
              , r = t.a
              , o = t.b
              , i = e.l - n
              , a = e.a - r
              , u = e.b - o;
            return function(t) {
                return yt(n + i * t, r + a * t, o + u * t) + ""
            }
        }
        function Br(t, e) {
            return e -= t,
            function(n) {
                return Math.round(t + e * n)
            }
        }
        function zr(t) {
            var e = [t.a, t.b]
              , n = [t.c, t.d]
              , r = Vr(e)
              , o = Wr(e, n)
              , i = Vr($r(n, e, -o)) || 0;
            e[0] * n[1] < n[0] * e[1] && (e[0] *= -1,
            e[1] *= -1,
            r *= -1,
            o *= -1),
            this.rotate = (r ? Math.atan2(e[1], e[0]) : Math.atan2(-n[0], n[1])) * Ya,
            this.translate = [t.e, t.f],
            this.scale = [r, i],
            this.skew = i ? Math.atan2(o, i) * Ya : 0
        }
        function Wr(t, e) {
            return t[0] * e[0] + t[1] * e[1]
        }
        function Vr(t) {
            var e = Math.sqrt(Wr(t, t));
            return e && (t[0] /= e,
            t[1] /= e),
            e
        }
        function $r(t, e, n) {
            return t[0] += n * e[0],
            t[1] += n * e[1],
            t
        }
        function Yr(t) {
            return t.length ? t.pop() + "," : ""
        }
        function Kr(t, e, n, r) {
            if (t[0] !== e[0] || t[1] !== e[1]) {
                var o = n.push("translate(", null, ",", null, ")");
                r.push({
                    i: o - 4,
                    x: wr(t[0], e[0])
                }, {
                    i: o - 2,
                    x: wr(t[1], e[1])
                })
            } else
                (e[0] || e[1]) && n.push("translate(" + e + ")")
        }
        function Xr(t, e, n, r) {
            t !== e ? (t - e > 180 ? e += 360 : e - t > 180 && (t += 360),
            r.push({
                i: n.push(Yr(n) + "rotate(", null, ")") - 2,
                x: wr(t, e)
            })) : e && n.push(Yr(n) + "rotate(" + e + ")")
        }
        function Jr(t, e, n, r) {
            t !== e ? r.push({
                i: n.push(Yr(n) + "skewX(", null, ")") - 2,
                x: wr(t, e)
            }) : e && n.push(Yr(n) + "skewX(" + e + ")")
        }
        function Gr(t, e, n, r) {
            if (t[0] !== e[0] || t[1] !== e[1]) {
                var o = n.push(Yr(n) + "scale(", null, ",", null, ")");
                r.push({
                    i: o - 4,
                    x: wr(t[0], e[0])
                }, {
                    i: o - 2,
                    x: wr(t[1], e[1])
                })
            } else
                1 === e[0] && 1 === e[1] || n.push(Yr(n) + "scale(" + e + ")")
        }
        function Qr(t, e) {
            var n = []
              , r = [];
            return t = ha.transform(t),
            e = ha.transform(e),
            Kr(t.translate, e.translate, n, r),
            Xr(t.rotate, e.rotate, n, r),
            Jr(t.skew, e.skew, n, r),
            Gr(t.scale, e.scale, n, r),
            t = e = null,
            function(t) {
                for (var e, o = -1, i = r.length; ++o < i; )
                    n[(e = r[o]).i] = e.x(t);
                return n.join("")
            }
        }
        function Zr(t, e) {
            return e = (e -= t = +t) || 1 / e,
            function(n) {
                return (n - t) / e
            }
        }
        function to(t, e) {
            return e = (e -= t = +t) || 1 / e,
            function(n) {
                return Math.max(0, Math.min(1, (n - t) / e))
            }
        }
        function eo(t) {
            for (var e = t.source, n = t.target, r = ro(e, n), o = [e]; e !== r; )
                e = e.parent,
                o.push(e);
            for (var i = o.length; n !== r; )
                o.splice(i, 0, n),
                n = n.parent;
            return o
        }
        function no(t) {
            for (var e = [], n = t.parent; null != n; )
                e.push(t),
                t = n,
                n = n.parent;
            return e.push(t),
            e
        }
        function ro(t, e) {
            if (t === e)
                return t;
            for (var n = no(t), r = no(e), o = n.pop(), i = r.pop(), a = null; o === i; )
                a = o,
                o = n.pop(),
                i = r.pop();
            return a
        }
        function oo(t) {
            t.fixed |= 2
        }
        function io(t) {
            t.fixed &= -7
        }
        function ao(t) {
            t.fixed |= 4,
            t.px = t.x,
            t.py = t.y
        }
        function uo(t) {
            t.fixed &= -5
        }
        function so(t, e, n) {
            var r = 0
              , o = 0;
            if (t.charge = 0,
            !t.leaf)
                for (var i, a = t.nodes, u = a.length, s = -1; ++s < u; )
                    i = a[s],
                    null != i && (so(i, e, n),
                    t.charge += i.charge,
                    r += i.charge * i.cx,
                    o += i.charge * i.cy);
            if (t.point) {
                t.leaf || (t.point.x += Math.random() - .5,
                t.point.y += Math.random() - .5);
                var c = e * n[t.point.index];
                t.charge += t.pointCharge = c,
                r += c * t.point.x,
                o += c * t.point.y
            }
            t.cx = r / t.charge,
            t.cy = o / t.charge
        }
        function co(t, e) {
            return ha.rebind(t, e, "sort", "children", "value"),
            t.nodes = t,
            t.links = go,
            t
        }
        function lo(t, e) {
            for (var n = [t]; null != (t = n.pop()); )
                if (e(t),
                (o = t.children) && (r = o.length))
                    for (var r, o; --r >= 0; )
                        n.push(o[r])
        }
        function fo(t, e) {
            for (var n = [t], r = []; null != (t = n.pop()); )
                if (r.push(t),
                (i = t.children) && (o = i.length))
                    for (var o, i, a = -1; ++a < o; )
                        n.push(i[a]);
            for (; null != (t = r.pop()); )
                e(t)
        }
        function po(t) {
            return t.children
        }
        function ho(t) {
            return t.value
        }
        function vo(t, e) {
            return e.value - t.value
        }
        function go(t) {
            return ha.merge(t.map(function(t) {
                return (t.children || []).map(function(e) {
                    return {
                        source: t,
                        target: e
                    }
                })
            }))
        }
        function yo(t) {
            return t.x
        }
        function mo(t) {
            return t.y
        }
        function bo(t, e, n) {
            t.y0 = e,
            t.y = n
        }
        function xo(t) {
            return ha.range(t.length)
        }
        function _o(t) {
            for (var e = -1, n = t[0].length, r = []; ++e < n; )
                r[e] = 0;
            return r
        }
        function wo(t) {
            for (var e, n = 1, r = 0, o = t[0][1], i = t.length; n < i; ++n)
                (e = t[n][1]) > o && (r = n,
                o = e);
            return r
        }
        function Co(t) {
            return t.reduce(Eo, 0)
        }
        function Eo(t, e) {
            return t + e[1]
        }
        function Mo(t, e) {
            return ko(t, Math.ceil(Math.log(e.length) / Math.LN2 + 1))
        }
        function ko(t, e) {
            for (var n = -1, r = +t[0], o = (t[1] - r) / e, i = []; ++n <= e; )
                i[n] = o * n + r;
            return i
        }
        function So(t) {
            return [ha.min(t), ha.max(t)]
        }
        function To(t, e) {
            return t.value - e.value
        }
        function No(t, e) {
            var n = t._pack_next;
            t._pack_next = e,
            e._pack_prev = t,
            e._pack_next = n,
            n._pack_prev = e
        }
        function Ao(t, e) {
            t._pack_next = e,
            e._pack_prev = t
        }
        function Oo(t, e) {
            var n = e.x - t.x
              , r = e.y - t.y
              , o = t.r + e.r;
            return .999 * o * o > n * n + r * r
        }
        function Po(t) {
            function e(t) {
                l = Math.min(t.x - t.r, l),
                f = Math.max(t.x + t.r, f),
                p = Math.min(t.y - t.r, p),
                h = Math.max(t.y + t.r, h)
            }
            if ((n = t.children) && (c = n.length)) {
                var n, r, o, i, a, u, s, c, l = 1 / 0, f = -(1 / 0), p = 1 / 0, h = -(1 / 0);
                if (n.forEach(jo),
                r = n[0],
                r.x = -r.r,
                r.y = 0,
                e(r),
                c > 1 && (o = n[1],
                o.x = o.r,
                o.y = 0,
                e(o),
                c > 2))
                    for (i = n[2],
                    Ro(r, o, i),
                    e(i),
                    No(r, i),
                    r._pack_prev = i,
                    No(i, o),
                    o = r._pack_next,
                    a = 3; a < c; a++) {
                        Ro(r, o, i = n[a]);
                        var d = 0
                          , v = 1
                          , g = 1;
                        for (u = o._pack_next; u !== o; u = u._pack_next,
                        v++)
                            if (Oo(u, i)) {
                                d = 1;
                                break
                            }
                        if (1 == d)
                            for (s = r._pack_prev; s !== u._pack_prev && !Oo(s, i); s = s._pack_prev,
                            g++)
                                ;
                        d ? (v < g || v == g && o.r < r.r ? Ao(r, o = u) : Ao(r = s, o),
                        a--) : (No(r, i),
                        o = i,
                        e(i))
                    }
                var y = (l + f) / 2
                  , m = (p + h) / 2
                  , b = 0;
                for (a = 0; a < c; a++)
                    i = n[a],
                    i.x -= y,
                    i.y -= m,
                    b = Math.max(b, i.r + Math.sqrt(i.x * i.x + i.y * i.y));
                t.r = b,
                n.forEach(Do)
            }
        }
        function jo(t) {
            t._pack_next = t._pack_prev = t
        }
        function Do(t) {
            delete t._pack_next,
            delete t._pack_prev
        }
        function Io(t, e, n, r) {
            var o = t.children;
            if (t.x = e += r * t.x,
            t.y = n += r * t.y,
            t.r *= r,
            o)
                for (var i = -1, a = o.length; ++i < a; )
                    Io(o[i], e, n, r)
        }
        function Ro(t, e, n) {
            var r = t.r + n.r
              , o = e.x - t.x
              , i = e.y - t.y;
            if (r && (o || i)) {
                var a = e.r + n.r
                  , u = o * o + i * i;
                a *= a,
                r *= r;
                var s = .5 + (r - a) / (2 * u)
                  , c = Math.sqrt(Math.max(0, 2 * a * (r + u) - (r -= u) * r - a * a)) / (2 * u);
                n.x = t.x + s * o + c * i,
                n.y = t.y + s * i - c * o
            } else
                n.x = t.x + r,
                n.y = t.y
        }
        function Lo(t, e) {
            return t.parent == e.parent ? 1 : 2
        }
        function Uo(t) {
            var e = t.children;
            return e.length ? e[0] : t.t
        }
        function Fo(t) {
            var e, n = t.children;
            return (e = n.length) ? n[e - 1] : t.t
        }
        function qo(t, e, n) {
            var r = n / (e.i - t.i);
            e.c -= r,
            e.s += n,
            t.c += r,
            e.z += n,
            e.m += n
        }
        function Ho(t) {
            for (var e, n = 0, r = 0, o = t.children, i = o.length; --i >= 0; )
                e = o[i],
                e.z += n,
                e.m += n,
                n += e.s + (r += e.c)
        }
        function Bo(t, e, n) {
            return t.a.parent === e.parent ? t.a : n
        }
        function zo(t) {
            return 1 + ha.max(t, function(t) {
                return t.y
            })
        }
        function Wo(t) {
            return t.reduce(function(t, e) {
                return t + e.x
            }, 0) / t.length
        }
        function Vo(t) {
            var e = t.children;
            return e && e.length ? Vo(e[0]) : t
        }
        function $o(t) {
            var e, n = t.children;
            return n && (e = n.length) ? $o(n[e - 1]) : t
        }
        function Yo(t) {
            return {
                x: t.x,
                y: t.y,
                dx: t.dx,
                dy: t.dy
            }
        }
        function Ko(t, e) {
            var n = t.x + e[3]
              , r = t.y + e[0]
              , o = t.dx - e[1] - e[3]
              , i = t.dy - e[0] - e[2];
            return o < 0 && (n += o / 2,
            o = 0),
            i < 0 && (r += i / 2,
            i = 0),
            {
                x: n,
                y: r,
                dx: o,
                dy: i
            }
        }
        function Xo(t) {
            var e = t[0]
              , n = t[t.length - 1];
            return e < n ? [e, n] : [n, e]
        }
        function Jo(t) {
            return t.rangeExtent ? t.rangeExtent() : Xo(t.range())
        }
        function Go(t, e, n, r) {
            var o = n(t[0], t[1])
              , i = r(e[0], e[1]);
            return function(t) {
                return i(o(t))
            }
        }
        function Qo(t, e) {
            var n, r = 0, o = t.length - 1, i = t[r], a = t[o];
            return a < i && (n = r,
            r = o,
            o = n,
            n = i,
            i = a,
            a = n),
            t[r] = e.floor(i),
            t[o] = e.ceil(a),
            t
        }
        function Zo(t) {
            return t ? {
                floor: function(e) {
                    return Math.floor(e / t) * t
                },
                ceil: function(e) {
                    return Math.ceil(e / t) * t
                }
            } : Ss
        }
        function ti(t, e, n, r) {
            var o = []
              , i = []
              , a = 0
              , u = Math.min(t.length, e.length) - 1;
            for (t[u] < t[0] && (t = t.slice().reverse(),
            e = e.slice().reverse()); ++a <= u; )
                o.push(n(t[a - 1], t[a])),
                i.push(r(e[a - 1], e[a]));
            return function(e) {
                var n = ha.bisect(t, e, 1, u) - 1;
                return i[n](o[n](e))
            }
        }
        function ei(t, e, n, r) {
            function o() {
                var o = Math.min(t.length, e.length) > 2 ? ti : Go
                  , s = r ? to : Zr;
                return a = o(t, e, s, n),
                u = o(e, t, s, Er),
                i
            }
            function i(t) {
                return a(t)
            }
            var a, u;
            return i.invert = function(t) {
                return u(t)
            }
            ,
            i.domain = function(e) {
                return arguments.length ? (t = e.map(Number),
                o()) : t
            }
            ,
            i.range = function(t) {
                return arguments.length ? (e = t,
                o()) : e
            }
            ,
            i.rangeRound = function(t) {
                return i.range(t).interpolate(Br)
            }
            ,
            i.clamp = function(t) {
                return arguments.length ? (r = t,
                o()) : r
            }
            ,
            i.interpolate = function(t) {
                return arguments.length ? (n = t,
                o()) : n
            }
            ,
            i.ticks = function(e) {
                return ii(t, e)
            }
            ,
            i.tickFormat = function(e, n) {
                return ai(t, e, n)
            }
            ,
            i.nice = function(e) {
                return ri(t, e),
                o()
            }
            ,
            i.copy = function() {
                return ei(t, e, n, r)
            }
            ,
            o()
        }
        function ni(t, e) {
            return ha.rebind(t, e, "range", "rangeRound", "interpolate", "clamp")
        }
        function ri(t, e) {
            return Qo(t, Zo(oi(t, e)[2])),
            Qo(t, Zo(oi(t, e)[2])),
            t
        }
        function oi(t, e) {
            null == e && (e = 10);
            var n = Xo(t)
              , r = n[1] - n[0]
              , o = Math.pow(10, Math.floor(Math.log(r / e) / Math.LN10))
              , i = e / r * o;
            return i <= .15 ? o *= 10 : i <= .35 ? o *= 5 : i <= .75 && (o *= 2),
            n[0] = Math.ceil(n[0] / o) * o,
            n[1] = Math.floor(n[1] / o) * o + .5 * o,
            n[2] = o,
            n
        }
        function ii(t, e) {
            return ha.range.apply(ha, oi(t, e))
        }
        function ai(t, e, n) {
            var r = oi(t, e);
            if (n) {
                var o = vu.exec(n);
                if (o.shift(),
                "s" === o[8]) {
                    var i = ha.formatPrefix(Math.max(Ca(r[0]), Ca(r[1])));
                    return o[7] || (o[7] = "." + ui(i.scale(r[2]))),
                    o[8] = "f",
                    n = ha.format(o.join("")),
                    function(t) {
                        return n(i.scale(t)) + i.symbol
                    }
                }
                o[7] || (o[7] = "." + si(o[8], r)),
                n = o.join("")
            } else
                n = ",." + ui(r[2]) + "f";
            return ha.format(n)
        }
        function ui(t) {
            return -Math.floor(Math.log(t) / Math.LN10 + .01)
        }
        function si(t, e) {
            var n = ui(e[2]);
            return t in Ts ? Math.abs(n - ui(Math.max(Ca(e[0]), Ca(e[1])))) + +("e" !== t) : n - 2 * ("%" === t)
        }
        function ci(t, e, n, r) {
            function o(t) {
                return (n ? Math.log(t < 0 ? 0 : t) : -Math.log(t > 0 ? 0 : -t)) / Math.log(e)
            }
            function i(t) {
                return n ? Math.pow(e, t) : -Math.pow(e, -t)
            }
            function a(e) {
                return t(o(e))
            }
            return a.invert = function(e) {
                return i(t.invert(e))
            }
            ,
            a.domain = function(e) {
                return arguments.length ? (n = e[0] >= 0,
                t.domain((r = e.map(Number)).map(o)),
                a) : r
            }
            ,
            a.base = function(n) {
                return arguments.length ? (e = +n,
                t.domain(r.map(o)),
                a) : e
            }
            ,
            a.nice = function() {
                var e = Qo(r.map(o), n ? Math : As);
                return t.domain(e),
                r = e.map(i),
                a
            }
            ,
            a.ticks = function() {
                var t = Xo(r)
                  , a = []
                  , u = t[0]
                  , s = t[1]
                  , c = Math.floor(o(u))
                  , l = Math.ceil(o(s))
                  , f = e % 1 ? 2 : e;
                if (isFinite(l - c)) {
                    if (n) {
                        for (; c < l; c++)
                            for (var p = 1; p < f; p++)
                                a.push(i(c) * p);
                        a.push(i(c))
                    } else
                        for (a.push(i(c)); c++ < l; )
                            for (var p = f - 1; p > 0; p--)
                                a.push(i(c) * p);
                    for (c = 0; a[c] < u; c++)
                        ;
                    for (l = a.length; a[l - 1] > s; l--)
                        ;
                    a = a.slice(c, l)
                }
                return a
            }
            ,
            a.tickFormat = function(t, n) {
                if (!arguments.length)
                    return Ns;
                arguments.length < 2 ? n = Ns : "function" != typeof n && (n = ha.format(n));
                var r = Math.max(1, e * t / a.ticks().length);
                return function(t) {
                    var a = t / i(Math.round(o(t)));
                    return a * e < e - .5 && (a *= e),
                    a <= r ? n(t) : ""
                }
            }
            ,
            a.copy = function() {
                return ci(t.copy(), e, n, r)
            }
            ,
            ni(a, t)
        }
        function li(t, e, n) {
            function r(e) {
                return t(o(e))
            }
            var o = fi(e)
              , i = fi(1 / e);
            return r.invert = function(e) {
                return i(t.invert(e))
            }
            ,
            r.domain = function(e) {
                return arguments.length ? (t.domain((n = e.map(Number)).map(o)),
                r) : n
            }
            ,
            r.ticks = function(t) {
                return ii(n, t)
            }
            ,
            r.tickFormat = function(t, e) {
                return ai(n, t, e)
            }
            ,
            r.nice = function(t) {
                return r.domain(ri(n, t))
            }
            ,
            r.exponent = function(a) {
                return arguments.length ? (o = fi(e = a),
                i = fi(1 / e),
                t.domain(n.map(o)),
                r) : e
            }
            ,
            r.copy = function() {
                return li(t.copy(), e, n)
            }
            ,
            ni(r, t)
        }
        function fi(t) {
            return function(e) {
                return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t)
            }
        }
        function pi(t, e) {
            function n(n) {
                return i[((o.get(n) || ("range" === e.t ? o.set(n, t.push(n)) : NaN)) - 1) % i.length]
            }
            function r(e, n) {
                return ha.range(t.length).map(function(t) {
                    return e + n * t
                })
            }
            var o, i, a;
            return n.domain = function(r) {
                if (!arguments.length)
                    return t;
                t = [],
                o = new d;
                for (var i, a = -1, u = r.length; ++a < u; )
                    o.has(i = r[a]) || o.set(i, t.push(i));
                return n[e.t].apply(n, e.a)
            }
            ,
            n.range = function(t) {
                return arguments.length ? (i = t,
                a = 0,
                e = {
                    t: "range",
                    a: arguments
                },
                n) : i
            }
            ,
            n.rangePoints = function(o, u) {
                arguments.length < 2 && (u = 0);
                var s = o[0]
                  , c = o[1]
                  , l = t.length < 2 ? (s = (s + c) / 2,
                0) : (c - s) / (t.length - 1 + u);
                return i = r(s + l * u / 2, l),
                a = 0,
                e = {
                    t: "rangePoints",
                    a: arguments
                },
                n
            }
            ,
            n.rangeRoundPoints = function(o, u) {
                arguments.length < 2 && (u = 0);
                var s = o[0]
                  , c = o[1]
                  , l = t.length < 2 ? (s = c = Math.round((s + c) / 2),
                0) : (c - s) / (t.length - 1 + u) | 0;
                return i = r(s + Math.round(l * u / 2 + (c - s - (t.length - 1 + u) * l) / 2), l),
                a = 0,
                e = {
                    t: "rangeRoundPoints",
                    a: arguments
                },
                n
            }
            ,
            n.rangeBands = function(o, u, s) {
                arguments.length < 2 && (u = 0),
                arguments.length < 3 && (s = u);
                var c = o[1] < o[0]
                  , l = o[c - 0]
                  , f = o[1 - c]
                  , p = (f - l) / (t.length - u + 2 * s);
                return i = r(l + p * s, p),
                c && i.reverse(),
                a = p * (1 - u),
                e = {
                    t: "rangeBands",
                    a: arguments
                },
                n
            }
            ,
            n.rangeRoundBands = function(o, u, s) {
                arguments.length < 2 && (u = 0),
                arguments.length < 3 && (s = u);
                var c = o[1] < o[0]
                  , l = o[c - 0]
                  , f = o[1 - c]
                  , p = Math.floor((f - l) / (t.length - u + 2 * s));
                return i = r(l + Math.round((f - l - (t.length - u) * p) / 2), p),
                c && i.reverse(),
                a = Math.round(p * (1 - u)),
                e = {
                    t: "rangeRoundBands",
                    a: arguments
                },
                n
            }
            ,
            n.rangeBand = function() {
                return a
            }
            ,
            n.rangeExtent = function() {
                return Xo(e.a[0])
            }
            ,
            n.copy = function() {
                return pi(t, e)
            }
            ,
            n.domain(t)
        }
        function hi(t, e) {
            function n() {
                var n = 0
                  , i = e.length;
                for (o = []; ++n < i; )
                    o[n - 1] = ha.quantile(t, n / i);
                return r
            }
            function r(t) {
                if (!isNaN(t = +t))
                    return e[ha.bisect(o, t)]
            }
            var o;
            return r.domain = function(e) {
                return arguments.length ? (t = e.map(s).filter(c).sort(u),
                n()) : t
            }
            ,
            r.range = function(t) {
                return arguments.length ? (e = t,
                n()) : e
            }
            ,
            r.quantiles = function() {
                return o
            }
            ,
            r.invertExtent = function(n) {
                return n = e.indexOf(n),
                n < 0 ? [NaN, NaN] : [n > 0 ? o[n - 1] : t[0], n < o.length ? o[n] : t[t.length - 1]]
            }
            ,
            r.copy = function() {
                return hi(t, e)
            }
            ,
            n()
        }
        function di(t, e, n) {
            function r(e) {
                return n[Math.max(0, Math.min(a, Math.floor(i * (e - t))))]
            }
            function o() {
                return i = n.length / (e - t),
                a = n.length - 1,
                r
            }
            var i, a;
            return r.domain = function(n) {
                return arguments.length ? (t = +n[0],
                e = +n[n.length - 1],
                o()) : [t, e]
            }
            ,
            r.range = function(t) {
                return arguments.length ? (n = t,
                o()) : n
            }
            ,
            r.invertExtent = function(e) {
                return e = n.indexOf(e),
                e = e < 0 ? NaN : e / i + t,
                [e, e + 1 / i]
            }
            ,
            r.copy = function() {
                return di(t, e, n)
            }
            ,
            o()
        }
        function vi(t, e) {
            function n(n) {
                if (n <= n)
                    return e[ha.bisect(t, n)]
            }
            return n.domain = function(e) {
                return arguments.length ? (t = e,
                n) : t
            }
            ,
            n.range = function(t) {
                return arguments.length ? (e = t,
                n) : e
            }
            ,
            n.invertExtent = function(n) {
                return n = e.indexOf(n),
                [t[n - 1], t[n]]
            }
            ,
            n.copy = function() {
                return vi(t, e)
            }
            ,
            n
        }
        function gi(t) {
            function e(t) {
                return +t
            }
            return e.invert = e,
            e.domain = e.range = function(n) {
                return arguments.length ? (t = n.map(e),
                e) : t
            }
            ,
            e.ticks = function(e) {
                return ii(t, e)
            }
            ,
            e.tickFormat = function(e, n) {
                return ai(t, e, n)
            }
            ,
            e.copy = function() {
                return gi(t)
            }
            ,
            e
        }
        function yi() {
            return 0
        }
        function mi(t) {
            return t.innerRadius
        }
        function bi(t) {
            return t.outerRadius
        }
        function xi(t) {
            return t.startAngle
        }
        function _i(t) {
            return t.endAngle
        }
        function wi(t) {
            return t && t.padAngle
        }
        function Ci(t, e, n, r) {
            return (t - n) * e - (e - r) * t > 0 ? 0 : 1
        }
        function Ei(t, e, n, r, o) {
            var i = t[0] - e[0]
              , a = t[1] - e[1]
              , u = (o ? r : -r) / Math.sqrt(i * i + a * a)
              , s = u * a
              , c = -u * i
              , l = t[0] + s
              , f = t[1] + c
              , p = e[0] + s
              , h = e[1] + c
              , d = (l + p) / 2
              , v = (f + h) / 2
              , g = p - l
              , y = h - f
              , m = g * g + y * y
              , b = n - r
              , x = l * h - p * f
              , _ = (y < 0 ? -1 : 1) * Math.sqrt(Math.max(0, b * b * m - x * x))
              , w = (x * y - g * _) / m
              , C = (-x * g - y * _) / m
              , E = (x * y + g * _) / m
              , M = (-x * g + y * _) / m
              , k = w - d
              , S = C - v
              , T = E - d
              , N = M - v;
            return k * k + S * S > T * T + N * N && (w = E,
            C = M),
            [[w - s, C - c], [w * n / b, C * n / b]]
        }
        function Mi(t) {
            function e(e) {
                function a() {
                    c.push("M", i(t(l), u))
                }
                for (var s, c = [], l = [], f = -1, p = e.length, h = Ot(n), d = Ot(r); ++f < p; )
                    o.call(this, s = e[f], f) ? l.push([+h.call(this, s, f), +d.call(this, s, f)]) : l.length && (a(),
                    l = []);
                return l.length && a(),
                c.length ? c.join("") : null
            }
            var n = Dn
              , r = In
              , o = De
              , i = ki
              , a = i.key
              , u = .7;
            return e.x = function(t) {
                return arguments.length ? (n = t,
                e) : n
            }
            ,
            e.y = function(t) {
                return arguments.length ? (r = t,
                e) : r
            }
            ,
            e.defined = function(t) {
                return arguments.length ? (o = t,
                e) : o
            }
            ,
            e.interpolate = function(t) {
                return arguments.length ? (a = "function" == typeof t ? i = t : (i = Rs.get(t) || ki).key,
                e) : a
            }
            ,
            e.tension = function(t) {
                return arguments.length ? (u = t,
                e) : u
            }
            ,
            e
        }
        function ki(t) {
            return t.length > 1 ? t.join("L") : t + "Z"
        }
        function Si(t) {
            return t.join("L") + "Z"
        }
        function Ti(t) {
            for (var e = 0, n = t.length, r = t[0], o = [r[0], ",", r[1]]; ++e < n; )
                o.push("H", (r[0] + (r = t[e])[0]) / 2, "V", r[1]);
            return n > 1 && o.push("H", r[0]),
            o.join("")
        }
        function Ni(t) {
            for (var e = 0, n = t.length, r = t[0], o = [r[0], ",", r[1]]; ++e < n; )
                o.push("V", (r = t[e])[1], "H", r[0]);
            return o.join("")
        }
        function Ai(t) {
            for (var e = 0, n = t.length, r = t[0], o = [r[0], ",", r[1]]; ++e < n; )
                o.push("H", (r = t[e])[0], "V", r[1]);
            return o.join("")
        }
        function Oi(t, e) {
            return t.length < 4 ? ki(t) : t[1] + Di(t.slice(1, -1), Ii(t, e))
        }
        function Pi(t, e) {
            return t.length < 3 ? Si(t) : t[0] + Di((t.push(t[0]),
            t), Ii([t[t.length - 2]].concat(t, [t[1]]), e))
        }
        function ji(t, e) {
            return t.length < 3 ? ki(t) : t[0] + Di(t, Ii(t, e))
        }
        function Di(t, e) {
            if (e.length < 1 || t.length != e.length && t.length != e.length + 2)
                return ki(t);
            var n = t.length != e.length
              , r = ""
              , o = t[0]
              , i = t[1]
              , a = e[0]
              , u = a
              , s = 1;
            if (n && (r += "Q" + (i[0] - 2 * a[0] / 3) + "," + (i[1] - 2 * a[1] / 3) + "," + i[0] + "," + i[1],
            o = t[1],
            s = 2),
            e.length > 1) {
                u = e[1],
                i = t[s],
                s++,
                r += "C" + (o[0] + a[0]) + "," + (o[1] + a[1]) + "," + (i[0] - u[0]) + "," + (i[1] - u[1]) + "," + i[0] + "," + i[1];
                for (var c = 2; c < e.length; c++,
                s++)
                    i = t[s],
                    u = e[c],
                    r += "S" + (i[0] - u[0]) + "," + (i[1] - u[1]) + "," + i[0] + "," + i[1]
            }
            if (n) {
                var l = t[s];
                r += "Q" + (i[0] + 2 * u[0] / 3) + "," + (i[1] + 2 * u[1] / 3) + "," + l[0] + "," + l[1]
            }
            return r
        }
        function Ii(t, e) {
            for (var n, r = [], o = (1 - e) / 2, i = t[0], a = t[1], u = 1, s = t.length; ++u < s; )
                n = i,
                i = a,
                a = t[u],
                r.push([o * (a[0] - n[0]), o * (a[1] - n[1])]);
            return r
        }
        function Ri(t) {
            if (t.length < 3)
                return ki(t);
            var e = 1
              , n = t.length
              , r = t[0]
              , o = r[0]
              , i = r[1]
              , a = [o, o, o, (r = t[1])[0]]
              , u = [i, i, i, r[1]]
              , s = [o, ",", i, "L", qi(Fs, a), ",", qi(Fs, u)];
            for (t.push(t[n - 1]); ++e <= n; )
                r = t[e],
                a.shift(),
                a.push(r[0]),
                u.shift(),
                u.push(r[1]),
                Hi(s, a, u);
            return t.pop(),
            s.push("L", r),
            s.join("")
        }
        function Li(t) {
            if (t.length < 4)
                return ki(t);
            for (var e, n = [], r = -1, o = t.length, i = [0], a = [0]; ++r < 3; )
                e = t[r],
                i.push(e[0]),
                a.push(e[1]);
            for (n.push(qi(Fs, i) + "," + qi(Fs, a)),
            --r; ++r < o; )
                e = t[r],
                i.shift(),
                i.push(e[0]),
                a.shift(),
                a.push(e[1]),
                Hi(n, i, a);
            return n.join("")
        }
        function Ui(t) {
            for (var e, n, r = -1, o = t.length, i = o + 4, a = [], u = []; ++r < 4; )
                n = t[r % o],
                a.push(n[0]),
                u.push(n[1]);
            for (e = [qi(Fs, a), ",", qi(Fs, u)],
            --r; ++r < i; )
                n = t[r % o],
                a.shift(),
                a.push(n[0]),
                u.shift(),
                u.push(n[1]),
                Hi(e, a, u);
            return e.join("")
        }
        function Fi(t, e) {
            var n = t.length - 1;
            if (n)
                for (var r, o, i = t[0][0], a = t[0][1], u = t[n][0] - i, s = t[n][1] - a, c = -1; ++c <= n; )
                    r = t[c],
                    o = c / n,
                    r[0] = e * r[0] + (1 - e) * (i + o * u),
                    r[1] = e * r[1] + (1 - e) * (a + o * s);
            return Ri(t)
        }
        function qi(t, e) {
            return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
        }
        function Hi(t, e, n) {
            t.push("C", qi(Ls, e), ",", qi(Ls, n), ",", qi(Us, e), ",", qi(Us, n), ",", qi(Fs, e), ",", qi(Fs, n))
        }
        function Bi(t, e) {
            return (e[1] - t[1]) / (e[0] - t[0])
        }
        function zi(t) {
            for (var e = 0, n = t.length - 1, r = [], o = t[0], i = t[1], a = r[0] = Bi(o, i); ++e < n; )
                r[e] = (a + (a = Bi(o = i, i = t[e + 1]))) / 2;
            return r[e] = a,
            r
        }
        function Wi(t) {
            for (var e, n, r, o, i = [], a = zi(t), u = -1, s = t.length - 1; ++u < s; )
                e = Bi(t[u], t[u + 1]),
                Ca(e) < qa ? a[u] = a[u + 1] = 0 : (n = a[u] / e,
                r = a[u + 1] / e,
                o = n * n + r * r,
                o > 9 && (o = 3 * e / Math.sqrt(o),
                a[u] = o * n,
                a[u + 1] = o * r));
            for (u = -1; ++u <= s; )
                o = (t[Math.min(s, u + 1)][0] - t[Math.max(0, u - 1)][0]) / (6 * (1 + a[u] * a[u])),
                i.push([o || 0, a[u] * o || 0]);
            return i
        }
        function Vi(t) {
            return t.length < 3 ? ki(t) : t[0] + Di(t, Wi(t))
        }
        function $i(t) {
            for (var e, n, r, o = -1, i = t.length; ++o < i; )
                e = t[o],
                n = e[0],
                r = e[1] - Va,
                e[0] = n * Math.cos(r),
                e[1] = n * Math.sin(r);
            return t
        }
        function Yi(t) {
            function e(e) {
                function s() {
                    v.push("M", u(t(y), f), l, c(t(g.reverse()), f), "Z")
                }
                for (var p, h, d, v = [], g = [], y = [], m = -1, b = e.length, x = Ot(n), _ = Ot(o), w = n === r ? function() {
                    return h
                }
                : Ot(r), C = o === i ? function() {
                    return d
                }
                : Ot(i); ++m < b; )
                    a.call(this, p = e[m], m) ? (g.push([h = +x.call(this, p, m), d = +_.call(this, p, m)]),
                    y.push([+w.call(this, p, m), +C.call(this, p, m)])) : g.length && (s(),
                    g = [],
                    y = []);
                return g.length && s(),
                v.length ? v.join("") : null
            }
            var n = Dn
              , r = Dn
              , o = 0
              , i = In
              , a = De
              , u = ki
              , s = u.key
              , c = u
              , l = "L"
              , f = .7;
            return e.x = function(t) {
                return arguments.length ? (n = r = t,
                e) : r
            }
            ,
            e.x0 = function(t) {
                return arguments.length ? (n = t,
                e) : n
            }
            ,
            e.x1 = function(t) {
                return arguments.length ? (r = t,
                e) : r
            }
            ,
            e.y = function(t) {
                return arguments.length ? (o = i = t,
                e) : i
            }
            ,
            e.y0 = function(t) {
                return arguments.length ? (o = t,
                e) : o
            }
            ,
            e.y1 = function(t) {
                return arguments.length ? (i = t,
                e) : i
            }
            ,
            e.defined = function(t) {
                return arguments.length ? (a = t,
                e) : a
            }
            ,
            e.interpolate = function(t) {
                return arguments.length ? (s = "function" == typeof t ? u = t : (u = Rs.get(t) || ki).key,
                c = u.reverse || u,
                l = u.closed ? "M" : "L",
                e) : s
            }
            ,
            e.tension = function(t) {
                return arguments.length ? (f = t,
                e) : f
            }
            ,
            e
        }
        function Ki(t) {
            return t.radius
        }
        function Xi(t) {
            return [t.x, t.y]
        }
        function Ji(t) {
            return function() {
                var e = t.apply(this, arguments)
                  , n = e[0]
                  , r = e[1] - Va;
                return [n * Math.cos(r), n * Math.sin(r)]
            }
        }
        function Gi() {
            return 64
        }
        function Qi() {
            return "circle"
        }
        function Zi(t) {
            var e = Math.sqrt(t / Ba);
            return "M0," + e + "A" + e + "," + e + " 0 1,1 0," + -e + "A" + e + "," + e + " 0 1,1 0," + e + "Z"
        }
        function ta(t) {
            return function() {
                var e, n, r;
                (e = this[t]) && (r = e[n = e.active]) && (r.timer.c = null,
                r.timer.t = NaN,
                --e.count ? delete e[n] : delete this[t],
                e.active += .5,
                r.event && r.event.interrupt.call(this, this.__data__, r.index))
            }
        }
        function ea(t, e, n) {
            return Ta(t, $s),
            t.namespace = e,
            t.id = n,
            t
        }
        function na(t, e, n, r) {
            var o = t.id
              , i = t.namespace;
            return K(t, "function" == typeof n ? function(t, a, u) {
                t[i][o].tween.set(e, r(n.call(t, t.__data__, a, u)))
            }
            : (n = r(n),
            function(t) {
                t[i][o].tween.set(e, n)
            }
            ))
        }
        function ra(t) {
            return null == t && (t = ""),
            function() {
                this.textContent = t
            }
        }
        function oa(t) {
            return null == t ? "__transition__" : "__transition_" + t + "__"
        }
        function ia(t, e, n, r, o) {
            function i(t) {
                var e = v.delay;
                return c.t = e + s,
                e <= t ? a(t - e) : void (c.c = a)
            }
            function a(n) {
                var o = h.active
                  , i = h[o];
                i && (i.timer.c = null,
                i.timer.t = NaN,
                --h.count,
                delete h[o],
                i.event && i.event.interrupt.call(t, t.__data__, i.index));
                for (var a in h)
                    if (+a < r) {
                        var d = h[a];
                        d.timer.c = null,
                        d.timer.t = NaN,
                        --h.count,
                        delete h[a]
                    }
                c.c = u,
                Rt(function() {
                    return c.c && u(n || 1) && (c.c = null,
                    c.t = NaN),
                    1
                }, 0, s),
                h.active = r,
                v.event && v.event.start.call(t, t.__data__, e),
                p = [],
                v.tween.forEach(function(n, r) {
                    (r = r.call(t, t.__data__, e)) && p.push(r)
                }),
                f = v.ease,
                l = v.duration
            }
            function u(o) {
                for (var i = o / l, a = f(i), u = p.length; u > 0; )
                    p[--u].call(t, a);
                if (i >= 1)
                    return v.event && v.event.end.call(t, t.__data__, e),
                    --h.count ? delete h[r] : delete t[n],
                    1
            }
            var s, c, l, f, p, h = t[n] || (t[n] = {
                active: 0,
                count: 0
            }), v = h[r];
            v || (s = o.time,
            c = Rt(i, 0, s),
            v = h[r] = {
                tween: new d,
                time: s,
                timer: c,
                delay: o.delay,
                duration: o.duration,
                ease: o.ease,
                index: e
            },
            o = null,
            ++h.count)
        }
        function aa(t, e, n) {
            t.attr("transform", function(t) {
                var r = e(t);
                return "translate(" + (isFinite(r) ? r : n(t)) + ",0)"
            })
        }
        function ua(t, e, n) {
            t.attr("transform", function(t) {
                var r = e(t);
                return "translate(0," + (isFinite(r) ? r : n(t)) + ")"
            })
        }
        function sa(t) {
            return t.toISOString()
        }
        function ca(t, e, n) {
            function r(e) {
                return t(e)
            }
            function o(t, n) {
                var r = t[1] - t[0]
                  , o = r / n
                  , i = ha.bisect(ec, o);
                return i == ec.length ? [e.year, oi(t.map(function(t) {
                    return t / 31536e6
                }), n)[2]] : i ? e[o / ec[i - 1] < ec[i] / o ? i - 1 : i] : [oc, oi(t, n)[2]]
            }
            return r.invert = function(e) {
                return la(t.invert(e))
            }
            ,
            r.domain = function(e) {
                return arguments.length ? (t.domain(e),
                r) : t.domain().map(la)
            }
            ,
            r.nice = function(t, e) {
                function n(n) {
                    return !isNaN(n) && !t.range(n, la(+n + 1), e).length
                }
                var i = r.domain()
                  , a = Xo(i)
                  , u = null == t ? o(a, 10) : "number" == typeof t && o(a, t);
                return u && (t = u[0],
                e = u[1]),
                r.domain(Qo(i, e > 1 ? {
                    floor: function(e) {
                        for (; n(e = t.floor(e)); )
                            e = la(e - 1);
                        return e
                    },
                    ceil: function(e) {
                        for (; n(e = t.ceil(e)); )
                            e = la(+e + 1);
                        return e
                    }
                } : t))
            }
            ,
            r.ticks = function(t, e) {
                var n = Xo(r.domain())
                  , i = null == t ? o(n, 10) : "number" == typeof t ? o(n, t) : !t.range && [{
                    range: t
                }, e];
                return i && (t = i[0],
                e = i[1]),
                t.range(n[0], la(+n[1] + 1), e < 1 ? 1 : e)
            }
            ,
            r.tickFormat = function() {
                return n
            }
            ,
            r.copy = function() {
                return ca(t.copy(), e, n)
            }
            ,
            ni(r, t)
        }
        function la(t) {
            return new Date(t)
        }
        function fa(t) {
            return JSON.parse(t.responseText)
        }
        function pa(t) {
            var e = ga.createRange();
            return e.selectNode(ga.body),
            e.createContextualFragment(t.responseText)
        }
        var ha = {
            version: "3.5.17"
        }
          , da = [].slice
          , va = function(t) {
            return da.call(t)
        }
          , ga = this.document;
        if (ga)
            try {
                va(ga.documentElement.childNodes)[0].nodeType
            } catch (t) {
                va = function(t) {
                    for (var e = t.length, n = new Array(e); e--; )
                        n[e] = t[e];
                    return n
                }
            }
        if (Date.now || (Date.now = function() {
            return +new Date
        }
        ),
        ga)
            try {
                ga.createElement("DIV").style.setProperty("opacity", 0, "")
            } catch (t) {
                var ya = this.Element.prototype
                  , ma = ya.setAttribute
                  , ba = ya.setAttributeNS
                  , xa = this.CSSStyleDeclaration.prototype
                  , _a = xa.setProperty;
                ya.setAttribute = function(t, e) {
                    ma.call(this, t, e + "")
                }
                ,
                ya.setAttributeNS = function(t, e, n) {
                    ba.call(this, t, e, n + "")
                }
                ,
                xa.setProperty = function(t, e, n) {
                    _a.call(this, t, e + "", n)
                }
            }
        ha.ascending = u,
        ha.descending = function(t, e) {
            return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
        }
        ,
        ha.min = function(t, e) {
            var n, r, o = -1, i = t.length;
            if (1 === arguments.length) {
                for (; ++o < i; )
                    if (null != (r = t[o]) && r >= r) {
                        n = r;
                        break
                    }
                for (; ++o < i; )
                    null != (r = t[o]) && n > r && (n = r)
            } else {
                for (; ++o < i; )
                    if (null != (r = e.call(t, t[o], o)) && r >= r) {
                        n = r;
                        break
                    }
                for (; ++o < i; )
                    null != (r = e.call(t, t[o], o)) && n > r && (n = r)
            }
            return n
        }
        ,
        ha.max = function(t, e) {
            var n, r, o = -1, i = t.length;
            if (1 === arguments.length) {
                for (; ++o < i; )
                    if (null != (r = t[o]) && r >= r) {
                        n = r;
                        break
                    }
                for (; ++o < i; )
                    null != (r = t[o]) && r > n && (n = r)
            } else {
                for (; ++o < i; )
                    if (null != (r = e.call(t, t[o], o)) && r >= r) {
                        n = r;
                        break
                    }
                for (; ++o < i; )
                    null != (r = e.call(t, t[o], o)) && r > n && (n = r)
            }
            return n
        }
        ,
        ha.extent = function(t, e) {
            var n, r, o, i = -1, a = t.length;
            if (1 === arguments.length) {
                for (; ++i < a; )
                    if (null != (r = t[i]) && r >= r) {
                        n = o = r;
                        break
                    }
                for (; ++i < a; )
                    null != (r = t[i]) && (n > r && (n = r),
                    o < r && (o = r))
            } else {
                for (; ++i < a; )
                    if (null != (r = e.call(t, t[i], i)) && r >= r) {
                        n = o = r;
                        break
                    }
                for (; ++i < a; )
                    null != (r = e.call(t, t[i], i)) && (n > r && (n = r),
                    o < r && (o = r))
            }
            return [n, o]
        }
        ,
        ha.sum = function(t, e) {
            var n, r = 0, o = t.length, i = -1;
            if (1 === arguments.length)
                for (; ++i < o; )
                    c(n = +t[i]) && (r += n);
            else
                for (; ++i < o; )
                    c(n = +e.call(t, t[i], i)) && (r += n);
            return r
        }
        ,
        ha.mean = function(t, e) {
            var n, r = 0, o = t.length, i = -1, a = o;
            if (1 === arguments.length)
                for (; ++i < o; )
                    c(n = s(t[i])) ? r += n : --a;
            else
                for (; ++i < o; )
                    c(n = s(e.call(t, t[i], i))) ? r += n : --a;
            if (a)
                return r / a
        }
        ,
        ha.quantile = function(t, e) {
            var n = (t.length - 1) * e + 1
              , r = Math.floor(n)
              , o = +t[r - 1]
              , i = n - r;
            return i ? o + i * (t[r] - o) : o
        }
        ,
        ha.median = function(t, e) {
            var n, r = [], o = t.length, i = -1;
            if (1 === arguments.length)
                for (; ++i < o; )
                    c(n = s(t[i])) && r.push(n);
            else
                for (; ++i < o; )
                    c(n = s(e.call(t, t[i], i))) && r.push(n);
            if (r.length)
                return ha.quantile(r.sort(u), .5)
        }
        ,
        ha.variance = function(t, e) {
            var n, r, o = t.length, i = 0, a = 0, u = -1, l = 0;
            if (1 === arguments.length)
                for (; ++u < o; )
                    c(n = s(t[u])) && (r = n - i,
                    i += r / ++l,
                    a += r * (n - i));
            else
                for (; ++u < o; )
                    c(n = s(e.call(t, t[u], u))) && (r = n - i,
                    i += r / ++l,
                    a += r * (n - i));
            if (l > 1)
                return a / (l - 1)
        }
        ,
        ha.deviation = function() {
            var t = ha.variance.apply(this, arguments);
            return t ? Math.sqrt(t) : t
        }
        ;
        var wa = l(u);
        ha.bisectLeft = wa.left,
        ha.bisect = ha.bisectRight = wa.right,
        ha.bisector = function(t) {
            return l(1 === t.length ? function(e, n) {
                return u(t(e), n)
            }
            : t)
        }
        ,
        ha.shuffle = function(t, e, n) {
            (i = arguments.length) < 3 && (n = t.length,
            i < 2 && (e = 0));
            for (var r, o, i = n - e; i; )
                o = Math.random() * i-- | 0,
                r = t[i + e],
                t[i + e] = t[o + e],
                t[o + e] = r;
            return t
        }
        ,
        ha.permute = function(t, e) {
            for (var n = e.length, r = new Array(n); n--; )
                r[n] = t[e[n]];
            return r
        }
        ,
        ha.pairs = function(t) {
            for (var e, n = 0, r = t.length - 1, o = t[0], i = new Array(r < 0 ? 0 : r); n < r; )
                i[n] = [e = o, o = t[++n]];
            return i
        }
        ,
        ha.transpose = function(t) {
            if (!(o = t.length))
                return [];
            for (var e = -1, n = ha.min(t, f), r = new Array(n); ++e < n; )
                for (var o, i = -1, a = r[e] = new Array(o); ++i < o; )
                    a[i] = t[i][e];
            return r
        }
        ,
        ha.zip = function() {
            return ha.transpose(arguments)
        }
        ,
        ha.keys = function(t) {
            var e = [];
            for (var n in t)
                e.push(n);
            return e
        }
        ,
        ha.values = function(t) {
            var e = [];
            for (var n in t)
                e.push(t[n]);
            return e
        }
        ,
        ha.entries = function(t) {
            var e = [];
            for (var n in t)
                e.push({
                    key: n,
                    value: t[n]
                });
            return e
        }
        ,
        ha.merge = function(t) {
            for (var e, n, r, o = t.length, i = -1, a = 0; ++i < o; )
                a += t[i].length;
            for (n = new Array(a); --o >= 0; )
                for (r = t[o],
                e = r.length; --e >= 0; )
                    n[--a] = r[e];
            return n
        }
        ;
        var Ca = Math.abs;
        ha.range = function(t, e, n) {
            if (arguments.length < 3 && (n = 1,
            arguments.length < 2 && (e = t,
            t = 0)),
            (e - t) / n === 1 / 0)
                throw new Error("infinite range");
            var r, o = [], i = p(Ca(n)), a = -1;
            if (t *= i,
            e *= i,
            n *= i,
            n < 0)
                for (; (r = t + n * ++a) > e; )
                    o.push(r / i);
            else
                for (; (r = t + n * ++a) < e; )
                    o.push(r / i);
            return o
        }
        ,
        ha.map = function(t, e) {
            var n = new d;
            if (t instanceof d)
                t.forEach(function(t, e) {
                    n.set(t, e)
                });
            else if (Array.isArray(t)) {
                var r, o = -1, i = t.length;
                if (1 === arguments.length)
                    for (; ++o < i; )
                        n.set(o, t[o]);
                else
                    for (; ++o < i; )
                        n.set(e.call(t, r = t[o], o), r)
            } else
                for (var a in t)
                    n.set(a, t[a]);
            return n
        }
        ;
        var Ea = "__proto__"
          , Ma = "\0";
        h(d, {
            has: y,
            get: function(t) {
                return this._[v(t)]
            },
            set: function(t, e) {
                return this._[v(t)] = e
            },
            remove: m,
            keys: b,
            values: function() {
                var t = [];
                for (var e in this._)
                    t.push(this._[e]);
                return t
            },
            entries: function() {
                var t = [];
                for (var e in this._)
                    t.push({
                        key: g(e),
                        value: this._[e]
                    });
                return t
            },
            size: x,
            empty: _,
            forEach: function(t) {
                for (var e in this._)
                    t.call(this, g(e), this._[e])
            }
        }),
        ha.nest = function() {
            function t(e, a, u) {
                if (u >= i.length)
                    return r ? r.call(o, a) : n ? a.sort(n) : a;
                for (var s, c, l, f, p = -1, h = a.length, v = i[u++], g = new d; ++p < h; )
                    (f = g.get(s = v(c = a[p]))) ? f.push(c) : g.set(s, [c]);
                return e ? (c = e(),
                l = function(n, r) {
                    c.set(n, t(e, r, u))
                }
                ) : (c = {},
                l = function(n, r) {
                    c[n] = t(e, r, u)
                }
                ),
                g.forEach(l),
                c
            }
            function e(t, n) {
                if (n >= i.length)
                    return t;
                var r = []
                  , o = a[n++];
                return t.forEach(function(t, o) {
                    r.push({
                        key: t,
                        values: e(o, n)
                    })
                }),
                o ? r.sort(function(t, e) {
                    return o(t.key, e.key)
                }) : r
            }
            var n, r, o = {}, i = [], a = [];
            return o.map = function(e, n) {
                return t(n, e, 0)
            }
            ,
            o.entries = function(n) {
                return e(t(ha.map, n, 0), 0)
            }
            ,
            o.key = function(t) {
                return i.push(t),
                o
            }
            ,
            o.sortKeys = function(t) {
                return a[i.length - 1] = t,
                o
            }
            ,
            o.sortValues = function(t) {
                return n = t,
                o
            }
            ,
            o.rollup = function(t) {
                return r = t,
                o
            }
            ,
            o
        }
        ,
        ha.set = function(t) {
            var e = new w;
            if (t)
                for (var n = 0, r = t.length; n < r; ++n)
                    e.add(t[n]);
            return e
        }
        ,
        h(w, {
            has: y,
            add: function(t) {
                return this._[v(t += "")] = !0,
                t
            },
            remove: m,
            values: b,
            size: x,
            empty: _,
            forEach: function(t) {
                for (var e in this._)
                    t.call(this, g(e))
            }
        }),
        ha.behavior = {},
        ha.rebind = function(t, e) {
            for (var n, r = 1, o = arguments.length; ++r < o; )
                t[n = arguments[r]] = E(t, e, e[n]);
            return t
        }
        ;
        var ka = ["webkit", "ms", "moz", "Moz", "o", "O"];
        ha.dispatch = function() {
            for (var t = new S, e = -1, n = arguments.length; ++e < n; )
                t[arguments[e]] = T(t);
            return t
        }
        ,
        S.prototype.on = function(t, e) {
            var n = t.indexOf(".")
              , r = "";
            if (n >= 0 && (r = t.slice(n + 1),
            t = t.slice(0, n)),
            t)
                return arguments.length < 2 ? this[t].on(r) : this[t].on(r, e);
            if (2 === arguments.length) {
                if (null == e)
                    for (t in this)
                        this.hasOwnProperty(t) && this[t].on(r, null);
                return this
            }
        }
        ,
        ha.event = null,
        ha.requote = function(t) {
            return t.replace(Sa, "\\$&")
        }
        ;
        var Sa = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g
          , Ta = {}.__proto__ ? function(t, e) {
            t.__proto__ = e
        }
        : function(t, e) {
            for (var n in e)
                t[n] = e[n]
        }
          , Na = function(t, e) {
            return e.querySelector(t)
        }
          , Aa = function(t, e) {
            return e.querySelectorAll(t)
        }
          , Oa = function(t, e) {
            var n = t.matches || t[M(t, "matchesSelector")];
            return (Oa = function(t, e) {
                return n.call(t, e)
            }
            )(t, e)
        };
        "function" == typeof Sizzle && (Na = function(t, e) {
            return Sizzle(t, e)[0] || null
        }
        ,
        Aa = Sizzle,
        Oa = Sizzle.matchesSelector),
        ha.selection = function() {
            return ha.select(ga.documentElement)
        }
        ;
        var Pa = ha.selection.prototype = [];
        Pa.select = function(t) {
            var e, n, r, o, i = [];
            t = j(t);
            for (var a = -1, u = this.length; ++a < u; ) {
                i.push(e = []),
                e.parentNode = (r = this[a]).parentNode;
                for (var s = -1, c = r.length; ++s < c; )
                    (o = r[s]) ? (e.push(n = t.call(o, o.__data__, s, a)),
                    n && "__data__"in o && (n.__data__ = o.__data__)) : e.push(null)
            }
            return P(i)
        }
        ,
        Pa.selectAll = function(t) {
            var e, n, r = [];
            t = D(t);
            for (var o = -1, i = this.length; ++o < i; )
                for (var a = this[o], u = -1, s = a.length; ++u < s; )
                    (n = a[u]) && (r.push(e = va(t.call(n, n.__data__, u, o))),
                    e.parentNode = n);
            return P(r)
        }
        ;
        var ja = "http://www.w3.org/1999/xhtml"
          , Da = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: ja,
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
        };
        ha.ns = {
            prefix: Da,
            qualify: function(t) {
                var e = t.indexOf(":")
                  , n = t;
                return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
                Da.hasOwnProperty(n) ? {
                    space: Da[n],
                    local: t
                } : t
            }
        },
        Pa.attr = function(t, e) {
            if (arguments.length < 2) {
                if ("string" == typeof t) {
                    var n = this.node();
                    return t = ha.ns.qualify(t),
                    t.local ? n.getAttributeNS(t.space, t.local) : n.getAttribute(t)
                }
                for (e in t)
                    this.each(I(e, t[e]));
                return this
            }
            return this.each(I(t, e))
        }
        ,
        Pa.classed = function(t, e) {
            if (arguments.length < 2) {
                if ("string" == typeof t) {
                    var n = this.node()
                      , r = (t = U(t)).length
                      , o = -1;
                    if (e = n.classList) {
                        for (; ++o < r; )
                            if (!e.contains(t[o]))
                                return !1
                    } else
                        for (e = n.getAttribute("class"); ++o < r; )
                            if (!L(t[o]).test(e))
                                return !1;
                    return !0
                }
                for (e in t)
                    this.each(F(e, t[e]));
                return this
            }
            return this.each(F(t, e))
        }
        ,
        Pa.style = function(t, e, n) {
            var r = arguments.length;
            if (r < 3) {
                if ("string" != typeof t) {
                    r < 2 && (e = "");
                    for (n in t)
                        this.each(H(n, t[n], e));
                    return this
                }
                if (r < 2) {
                    var o = this.node();
                    return a(o).getComputedStyle(o, null).getPropertyValue(t)
                }
                n = ""
            }
            return this.each(H(t, e, n))
        }
        ,
        Pa.property = function(t, e) {
            if (arguments.length < 2) {
                if ("string" == typeof t)
                    return this.node()[t];
                for (e in t)
                    this.each(B(e, t[e]));
                return this
            }
            return this.each(B(t, e))
        }
        ,
        Pa.text = function(t) {
            return arguments.length ? this.each("function" == typeof t ? function() {
                var e = t.apply(this, arguments);
                this.textContent = null == e ? "" : e
            }
            : null == t ? function() {
                this.textContent = ""
            }
            : function() {
                this.textContent = t
            }
            ) : this.node().textContent
        }
        ,
        Pa.html = function(t) {
            return arguments.length ? this.each("function" == typeof t ? function() {
                var e = t.apply(this, arguments);
                this.innerHTML = null == e ? "" : e
            }
            : null == t ? function() {
                this.innerHTML = ""
            }
            : function() {
                this.innerHTML = t
            }
            ) : this.node().innerHTML
        }
        ,
        Pa.append = function(t) {
            return t = z(t),
            this.select(function() {
                return this.appendChild(t.apply(this, arguments))
            })
        }
        ,
        Pa.insert = function(t, e) {
            return t = z(t),
            e = j(e),
            this.select(function() {
                return this.insertBefore(t.apply(this, arguments), e.apply(this, arguments) || null)
            })
        }
        ,
        Pa.remove = function() {
            return this.each(W)
        }
        ,
        Pa.data = function(t, e) {
            function n(t, n) {
                var r, o, i, a = t.length, l = n.length, f = Math.min(a, l), p = new Array(l), h = new Array(l), v = new Array(a);
                if (e) {
                    var g, y = new d, m = new Array(a);
                    for (r = -1; ++r < a; )
                        (o = t[r]) && (y.has(g = e.call(o, o.__data__, r)) ? v[r] = o : y.set(g, o),
                        m[r] = g);
                    for (r = -1; ++r < l; )
                        (o = y.get(g = e.call(n, i = n[r], r))) ? o !== !0 && (p[r] = o,
                        o.__data__ = i) : h[r] = V(i),
                        y.set(g, !0);
                    for (r = -1; ++r < a; )
                        r in m && y.get(m[r]) !== !0 && (v[r] = t[r])
                } else {
                    for (r = -1; ++r < f; )
                        o = t[r],
                        i = n[r],
                        o ? (o.__data__ = i,
                        p[r] = o) : h[r] = V(i);
                    for (; r < l; ++r)
                        h[r] = V(n[r]);
                    for (; r < a; ++r)
                        v[r] = t[r]
                }
                h.update = p,
                h.parentNode = p.parentNode = v.parentNode = t.parentNode,
                u.push(h),
                s.push(p),
                c.push(v)
            }
            var r, o, i = -1, a = this.length;
            if (!arguments.length) {
                for (t = new Array(a = (r = this[0]).length); ++i < a; )
                    (o = r[i]) && (t[i] = o.__data__);
                return t
            }
            var u = X([])
              , s = P([])
              , c = P([]);
            if ("function" == typeof t)
                for (; ++i < a; )
                    n(r = this[i], t.call(r, r.parentNode.__data__, i));
            else
                for (; ++i < a; )
                    n(r = this[i], t);
            return s.enter = function() {
                return u
            }
            ,
            s.exit = function() {
                return c
            }
            ,
            s
        }
        ,
        Pa.datum = function(t) {
            return arguments.length ? this.property("__data__", t) : this.property("__data__")
        }
        ,
        Pa.filter = function(t) {
            var e, n, r, o = [];
            "function" != typeof t && (t = $(t));
            for (var i = 0, a = this.length; i < a; i++) {
                o.push(e = []),
                e.parentNode = (n = this[i]).parentNode;
                for (var u = 0, s = n.length; u < s; u++)
                    (r = n[u]) && t.call(r, r.__data__, u, i) && e.push(r)
            }
            return P(o)
        }
        ,
        Pa.order = function() {
            for (var t = -1, e = this.length; ++t < e; )
                for (var n, r = this[t], o = r.length - 1, i = r[o]; --o >= 0; )
                    (n = r[o]) && (i && i !== n.nextSibling && i.parentNode.insertBefore(n, i),
                    i = n);
            return this
        }
        ,
        Pa.sort = function(t) {
            t = Y.apply(this, arguments);
            for (var e = -1, n = this.length; ++e < n; )
                this[e].sort(t);
            return this.order()
        }
        ,
        Pa.each = function(t) {
            return K(this, function(e, n, r) {
                t.call(e, e.__data__, n, r)
            })
        }
        ,
        Pa.call = function(t) {
            var e = va(arguments);
            return t.apply(e[0] = this, e),
            this
        }
        ,
        Pa.empty = function() {
            return !this.node()
        }
        ,
        Pa.node = function() {
            for (var t = 0, e = this.length; t < e; t++)
                for (var n = this[t], r = 0, o = n.length; r < o; r++) {
                    var i = n[r];
                    if (i)
                        return i
                }
            return null
        }
        ,
        Pa.size = function() {
            var t = 0;
            return K(this, function() {
                ++t
            }),
            t
        }
        ;
        var Ia = [];
        ha.selection.enter = X,
        ha.selection.enter.prototype = Ia,
        Ia.append = Pa.append,
        Ia.empty = Pa.empty,
        Ia.node = Pa.node,
        Ia.call = Pa.call,
        Ia.size = Pa.size,
        Ia.select = function(t) {
            for (var e, n, r, o, i, a = [], u = -1, s = this.length; ++u < s; ) {
                r = (o = this[u]).update,
                a.push(e = []),
                e.parentNode = o.parentNode;
                for (var c = -1, l = o.length; ++c < l; )
                    (i = o[c]) ? (e.push(r[c] = n = t.call(o.parentNode, i.__data__, c, u)),
                    n.__data__ = i.__data__) : e.push(null)
            }
            return P(a)
        }
        ,
        Ia.insert = function(t, e) {
            return arguments.length < 2 && (e = J(this)),
            Pa.insert.call(this, t, e)
        }
        ,
        ha.select = function(t) {
            var e;
            return "string" == typeof t ? (e = [Na(t, ga)],
            e.parentNode = ga.documentElement) : (e = [t],
            e.parentNode = i(t)),
            P([e])
        }
        ,
        ha.selectAll = function(t) {
            var e;
            return "string" == typeof t ? (e = va(Aa(t, ga)),
            e.parentNode = ga.documentElement) : (e = va(t),
            e.parentNode = null),
            P([e])
        }
        ,
        Pa.on = function(t, e, n) {
            var r = arguments.length;
            if (r < 3) {
                if ("string" != typeof t) {
                    r < 2 && (e = !1);
                    for (n in t)
                        this.each(G(n, t[n], e));
                    return this
                }
                if (r < 2)
                    return (r = this.node()["__on" + t]) && r._;
                n = !1
            }
            return this.each(G(t, e, n))
        }
        ;
        var Ra = ha.map({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        });
        ga && Ra.forEach(function(t) {
            "on" + t in ga && Ra.remove(t)
        });
        var La, Ua = 0;
        ha.mouse = function(t) {
            return et(t, A())
        }
        ;
        var Fa = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
        ha.touch = function(t, e, n) {
            if (arguments.length < 3 && (n = e,
            e = A().changedTouches),
            e)
                for (var r, o = 0, i = e.length; o < i; ++o)
                    if ((r = e[o]).identifier === n)
                        return et(t, r)
        }
        ,
        ha.behavior.drag = function() {
            function t() {
                this.on("mousedown.drag", o).on("touchstart.drag", i)
            }
            function e(t, e, o, i, a) {
                return function() {
                    function u() {
                        var t, n, r = e(p, v);
                        r && (t = r[0] - b[0],
                        n = r[1] - b[1],
                        d |= t | n,
                        b = r,
                        h({
                            type: "drag",
                            x: r[0] + c[0],
                            y: r[1] + c[1],
                            dx: t,
                            dy: n
                        }))
                    }
                    function s() {
                        e(p, v) && (y.on(i + g, null).on(a + g, null),
                        m(d),
                        h({
                            type: "dragend"
                        }))
                    }
                    var c, l = this, f = ha.event.target.correspondingElement || ha.event.target, p = l.parentNode, h = n.of(l, arguments), d = 0, v = t(), g = ".drag" + (null == v ? "" : "-" + v), y = ha.select(o(f)).on(i + g, u).on(a + g, s), m = tt(f), b = e(p, v);
                    r ? (c = r.apply(l, arguments),
                    c = [c.x - b[0], c.y - b[1]]) : c = [0, 0],
                    h({
                        type: "dragstart"
                    })
                }
            }
            var n = O(t, "drag", "dragstart", "dragend")
              , r = null
              , o = e(k, ha.mouse, a, "mousemove", "mouseup")
              , i = e(nt, ha.touch, C, "touchmove", "touchend");
            return t.origin = function(e) {
                return arguments.length ? (r = e,
                t) : r
            }
            ,
            ha.rebind(t, n, "on")
        }
        ,
        ha.touches = function(t, e) {
            return arguments.length < 2 && (e = A().touches),
            e ? va(e).map(function(e) {
                var n = et(t, e);
                return n.identifier = e.identifier,
                n
            }) : []
        }
        ;
        var qa = 1e-6
          , Ha = qa * qa
          , Ba = Math.PI
          , za = 2 * Ba
          , Wa = za - qa
          , Va = Ba / 2
          , $a = Ba / 180
          , Ya = 180 / Ba
          , Ka = Math.SQRT2
          , Xa = 2
          , Ja = 4;
        ha.interpolateZoom = function(t, e) {
            var n, r, o = t[0], i = t[1], a = t[2], u = e[0], s = e[1], c = e[2], l = u - o, f = s - i, p = l * l + f * f;
            if (p < Ha)
                r = Math.log(c / a) / Ka,
                n = function(t) {
                    return [o + t * l, i + t * f, a * Math.exp(Ka * t * r)]
                }
                ;
            else {
                var h = Math.sqrt(p)
                  , d = (c * c - a * a + Ja * p) / (2 * a * Xa * h)
                  , v = (c * c - a * a - Ja * p) / (2 * c * Xa * h)
                  , g = Math.log(Math.sqrt(d * d + 1) - d)
                  , y = Math.log(Math.sqrt(v * v + 1) - v);
                r = (y - g) / Ka,
                n = function(t) {
                    var e = t * r
                      , n = st(g)
                      , u = a / (Xa * h) * (n * ct(Ka * e + g) - ut(g));
                    return [o + u * l, i + u * f, a * n / st(Ka * e + g)]
                }
            }
            return n.duration = 1e3 * r,
            n
        }
        ,
        ha.behavior.zoom = function() {
            function t(t) {
                t.on(A, f).on(Qa + ".zoom", h).on("dblclick.zoom", d).on(D, p)
            }
            function e(t) {
                return [(t[0] - E.x) / E.k, (t[1] - E.y) / E.k]
            }
            function n(t) {
                return [t[0] * E.k + E.x, t[1] * E.k + E.y]
            }
            function r(t) {
                E.k = Math.max(k[0], Math.min(k[1], t))
            }
            function o(t, e) {
                e = n(e),
                E.x += t[0] - e[0],
                E.y += t[1] - e[1]
            }
            function i(e, n, i, a) {
                e.__chart__ = {
                    x: E.x,
                    y: E.y,
                    k: E.k
                },
                r(Math.pow(2, a)),
                o(g = n, i),
                e = ha.select(e),
                S > 0 && (e = e.transition().duration(S)),
                e.call(t.event)
            }
            function u() {
                _ && _.domain(x.range().map(function(t) {
                    return (t - E.x) / E.k
                }).map(x.invert)),
                C && C.domain(w.range().map(function(t) {
                    return (t - E.y) / E.k
                }).map(w.invert))
            }
            function s(t) {
                T++ || t({
                    type: "zoomstart"
                })
            }
            function c(t) {
                u(),
                t({
                    type: "zoom",
                    scale: E.k,
                    translate: [E.x, E.y]
                })
            }
            function l(t) {
                --T || (t({
                    type: "zoomend"
                }),
                g = null)
            }
            function f() {
                function t() {
                    u = 1,
                    o(ha.mouse(r), p),
                    c(i)
                }
                function n() {
                    f.on(P, null).on(j, null),
                    h(u),
                    l(i)
                }
                var r = this
                  , i = I.of(r, arguments)
                  , u = 0
                  , f = ha.select(a(r)).on(P, t).on(j, n)
                  , p = e(ha.mouse(r))
                  , h = tt(r);
                Vs.call(r),
                s(i)
            }
            function p() {
                function t() {
                    var t = ha.touches(d);
                    return h = E.k,
                    t.forEach(function(t) {
                        t.identifier in g && (g[t.identifier] = e(t))
                    }),
                    t
                }
                function n() {
                    var e = ha.event.target;
                    ha.select(e).on(x, a).on(_, u),
                    w.push(e);
                    for (var n = ha.event.changedTouches, r = 0, o = n.length; r < o; ++r)
                        g[n[r].identifier] = null;
                    var s = t()
                      , c = Date.now();
                    if (1 === s.length) {
                        if (c - b < 500) {
                            var l = s[0];
                            i(d, l, g[l.identifier], Math.floor(Math.log(E.k) / Math.LN2) + 1),
                            N()
                        }
                        b = c
                    } else if (s.length > 1) {
                        var l = s[0]
                          , f = s[1]
                          , p = l[0] - f[0]
                          , h = l[1] - f[1];
                        y = p * p + h * h
                    }
                }
                function a() {
                    var t, e, n, i, a = ha.touches(d);
                    Vs.call(d);
                    for (var u = 0, s = a.length; u < s; ++u,
                    i = null)
                        if (n = a[u],
                        i = g[n.identifier]) {
                            if (e)
                                break;
                            t = n,
                            e = i
                        }
                    if (i) {
                        var l = (l = n[0] - t[0]) * l + (l = n[1] - t[1]) * l
                          , f = y && Math.sqrt(l / y);
                        t = [(t[0] + n[0]) / 2, (t[1] + n[1]) / 2],
                        e = [(e[0] + i[0]) / 2, (e[1] + i[1]) / 2],
                        r(f * h)
                    }
                    b = null,
                    o(t, e),
                    c(v)
                }
                function u() {
                    if (ha.event.touches.length) {
                        for (var e = ha.event.changedTouches, n = 0, r = e.length; n < r; ++n)
                            delete g[e[n].identifier];
                        for (var o in g)
                            return void t()
                    }
                    ha.selectAll(w).on(m, null),
                    C.on(A, f).on(D, p),
                    M(),
                    l(v)
                }
                var h, d = this, v = I.of(d, arguments), g = {}, y = 0, m = ".zoom-" + ha.event.changedTouches[0].identifier, x = "touchmove" + m, _ = "touchend" + m, w = [], C = ha.select(d), M = tt(d);
                n(),
                s(v),
                C.on(A, null).on(D, n)
            }
            function h() {
                var t = I.of(this, arguments);
                m ? clearTimeout(m) : (Vs.call(this),
                v = e(g = y || ha.mouse(this)),
                s(t)),
                m = setTimeout(function() {
                    m = null,
                    l(t)
                }, 50),
                N(),
                r(Math.pow(2, .002 * Ga()) * E.k),
                o(g, v),
                c(t)
            }
            function d() {
                var t = ha.mouse(this)
                  , n = Math.log(E.k) / Math.LN2;
                i(this, t, e(t), ha.event.shiftKey ? Math.ceil(n) - 1 : Math.floor(n) + 1)
            }
            var v, g, y, m, b, x, _, w, C, E = {
                x: 0,
                y: 0,
                k: 1
            }, M = [960, 500], k = Za, S = 250, T = 0, A = "mousedown.zoom", P = "mousemove.zoom", j = "mouseup.zoom", D = "touchstart.zoom", I = O(t, "zoomstart", "zoom", "zoomend");
            return Qa || (Qa = "onwheel"in ga ? (Ga = function() {
                return -ha.event.deltaY * (ha.event.deltaMode ? 120 : 1)
            }
            ,
            "wheel") : "onmousewheel"in ga ? (Ga = function() {
                return ha.event.wheelDelta
            }
            ,
            "mousewheel") : (Ga = function() {
                return -ha.event.detail
            }
            ,
            "MozMousePixelScroll")),
            t.event = function(t) {
                t.each(function() {
                    var t = I.of(this, arguments)
                      , e = E;
                    zs ? ha.select(this).transition().each("start.zoom", function() {
                        E = this.__chart__ || {
                            x: 0,
                            y: 0,
                            k: 1
                        },
                        s(t)
                    }).tween("zoom:zoom", function() {
                        var n = M[0]
                          , r = M[1]
                          , o = g ? g[0] : n / 2
                          , i = g ? g[1] : r / 2
                          , a = ha.interpolateZoom([(o - E.x) / E.k, (i - E.y) / E.k, n / E.k], [(o - e.x) / e.k, (i - e.y) / e.k, n / e.k]);
                        return function(e) {
                            var r = a(e)
                              , u = n / r[2];
                            this.__chart__ = E = {
                                x: o - r[0] * u,
                                y: i - r[1] * u,
                                k: u
                            },
                            c(t)
                        }
                    }).each("interrupt.zoom", function() {
                        l(t)
                    }).each("end.zoom", function() {
                        l(t)
                    }) : (this.__chart__ = E,
                    s(t),
                    c(t),
                    l(t))
                })
            }
            ,
            t.translate = function(e) {
                return arguments.length ? (E = {
                    x: +e[0],
                    y: +e[1],
                    k: E.k
                },
                u(),
                t) : [E.x, E.y]
            }
            ,
            t.scale = function(e) {
                return arguments.length ? (E = {
                    x: E.x,
                    y: E.y,
                    k: null
                },
                r(+e),
                u(),
                t) : E.k
            }
            ,
            t.scaleExtent = function(e) {
                return arguments.length ? (k = null == e ? Za : [+e[0], +e[1]],
                t) : k
            }
            ,
            t.center = function(e) {
                return arguments.length ? (y = e && [+e[0], +e[1]],
                t) : y
            }
            ,
            t.size = function(e) {
                return arguments.length ? (M = e && [+e[0], +e[1]],
                t) : M
            }
            ,
            t.duration = function(e) {
                return arguments.length ? (S = +e,
                t) : S
            }
            ,
            t.x = function(e) {
                return arguments.length ? (_ = e,
                x = e.copy(),
                E = {
                    x: 0,
                    y: 0,
                    k: 1
                },
                t) : _
            }
            ,
            t.y = function(e) {
                return arguments.length ? (C = e,
                w = e.copy(),
                E = {
                    x: 0,
                    y: 0,
                    k: 1
                },
                t) : C
            }
            ,
            ha.rebind(t, I, "on")
        }
        ;
        var Ga, Qa, Za = [0, 1 / 0];
        ha.color = ft,
        ft.prototype.toString = function() {
            return this.rgb() + ""
        }
        ,
        ha.hsl = pt;
        var tu = pt.prototype = new ft;
        tu.brighter = function(t) {
            return t = Math.pow(.7, arguments.length ? t : 1),
            new pt(this.h,this.s,this.l / t)
        }
        ,
        tu.darker = function(t) {
            return t = Math.pow(.7, arguments.length ? t : 1),
            new pt(this.h,this.s,t * this.l);
        }
        ,
        tu.rgb = function() {
            return ht(this.h, this.s, this.l)
        }
        ,
        ha.hcl = dt;
        var eu = dt.prototype = new ft;
        eu.brighter = function(t) {
            return new dt(this.h,this.c,Math.min(100, this.l + nu * (arguments.length ? t : 1)))
        }
        ,
        eu.darker = function(t) {
            return new dt(this.h,this.c,Math.max(0, this.l - nu * (arguments.length ? t : 1)))
        }
        ,
        eu.rgb = function() {
            return vt(this.h, this.c, this.l).rgb()
        }
        ,
        ha.lab = gt;
        var nu = 18
          , ru = .95047
          , ou = 1
          , iu = 1.08883
          , au = gt.prototype = new ft;
        au.brighter = function(t) {
            return new gt(Math.min(100, this.l + nu * (arguments.length ? t : 1)),this.a,this.b)
        }
        ,
        au.darker = function(t) {
            return new gt(Math.max(0, this.l - nu * (arguments.length ? t : 1)),this.a,this.b)
        }
        ,
        au.rgb = function() {
            return yt(this.l, this.a, this.b)
        }
        ,
        ha.rgb = wt;
        var uu = wt.prototype = new ft;
        uu.brighter = function(t) {
            t = Math.pow(.7, arguments.length ? t : 1);
            var e = this.r
              , n = this.g
              , r = this.b
              , o = 30;
            return e || n || r ? (e && e < o && (e = o),
            n && n < o && (n = o),
            r && r < o && (r = o),
            new wt(Math.min(255, e / t),Math.min(255, n / t),Math.min(255, r / t))) : new wt(o,o,o)
        }
        ,
        uu.darker = function(t) {
            return t = Math.pow(.7, arguments.length ? t : 1),
            new wt(t * this.r,t * this.g,t * this.b)
        }
        ,
        uu.hsl = function() {
            return St(this.r, this.g, this.b)
        }
        ,
        uu.toString = function() {
            return "#" + Mt(this.r) + Mt(this.g) + Mt(this.b)
        }
        ;
        var su = ha.map({
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        });
        su.forEach(function(t, e) {
            su.set(t, Ct(e))
        }),
        ha.functor = Ot,
        ha.xhr = Pt(C),
        ha.dsv = function(t, e) {
            function n(t, n, i) {
                arguments.length < 3 && (i = n,
                n = null);
                var a = jt(t, e, null == n ? r : o(n), i);
                return a.row = function(t) {
                    return arguments.length ? a.response(null == (n = t) ? r : o(t)) : n
                }
                ,
                a
            }
            function r(t) {
                return n.parse(t.responseText)
            }
            function o(t) {
                return function(e) {
                    return n.parse(e.responseText, t)
                }
            }
            function i(e) {
                return e.map(a).join(t)
            }
            function a(t) {
                return u.test(t) ? '"' + t.replace(/\"/g, '""') + '"' : t
            }
            var u = new RegExp('["' + t + "\n]")
              , s = t.charCodeAt(0);
            return n.parse = function(t, e) {
                var r;
                return n.parseRows(t, function(t, n) {
                    if (r)
                        return r(t, n - 1);
                    var o = new Function("d","return {" + t.map(function(t, e) {
                        return JSON.stringify(t) + ": d[" + e + "]"
                    }).join(",") + "}");
                    r = e ? function(t, n) {
                        return e(o(t), n)
                    }
                    : o
                })
            }
            ,
            n.parseRows = function(t, e) {
                function n() {
                    if (l >= c)
                        return a;
                    if (o)
                        return o = !1,
                        i;
                    var e = l;
                    if (34 === t.charCodeAt(e)) {
                        for (var n = e; n++ < c; )
                            if (34 === t.charCodeAt(n)) {
                                if (34 !== t.charCodeAt(n + 1))
                                    break;
                                ++n
                            }
                        l = n + 2;
                        var r = t.charCodeAt(n + 1);
                        return 13 === r ? (o = !0,
                        10 === t.charCodeAt(n + 2) && ++l) : 10 === r && (o = !0),
                        t.slice(e + 1, n).replace(/""/g, '"')
                    }
                    for (; l < c; ) {
                        var r = t.charCodeAt(l++)
                          , u = 1;
                        if (10 === r)
                            o = !0;
                        else if (13 === r)
                            o = !0,
                            10 === t.charCodeAt(l) && (++l,
                            ++u);
                        else if (r !== s)
                            continue;
                        return t.slice(e, l - u)
                    }
                    return t.slice(e)
                }
                for (var r, o, i = {}, a = {}, u = [], c = t.length, l = 0, f = 0; (r = n()) !== a; ) {
                    for (var p = []; r !== i && r !== a; )
                        p.push(r),
                        r = n();
                    e && null == (p = e(p, f++)) || u.push(p)
                }
                return u
            }
            ,
            n.format = function(e) {
                if (Array.isArray(e[0]))
                    return n.formatRows(e);
                var r = new w
                  , o = [];
                return e.forEach(function(t) {
                    for (var e in t)
                        r.has(e) || o.push(r.add(e))
                }),
                [o.map(a).join(t)].concat(e.map(function(e) {
                    return o.map(function(t) {
                        return a(e[t])
                    }).join(t)
                })).join("\n")
            }
            ,
            n.formatRows = function(t) {
                return t.map(i).join("\n")
            }
            ,
            n
        }
        ,
        ha.csv = ha.dsv(",", "text/csv"),
        ha.tsv = ha.dsv("\t", "text/tab-separated-values");
        var cu, lu, fu, pu, hu = this[M(this, "requestAnimationFrame")] || function(t) {
            setTimeout(t, 17)
        }
        ;
        ha.timer = function() {
            Rt.apply(this, arguments)
        }
        ,
        ha.timer.flush = function() {
            Ut(),
            Ft()
        }
        ,
        ha.round = function(t, e) {
            return e ? Math.round(t * (e = Math.pow(10, e))) / e : Math.round(t)
        }
        ;
        var du = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(Ht);
        ha.formatPrefix = function(t, e) {
            var n = 0;
            return (t = +t) && (t < 0 && (t *= -1),
            e && (t = ha.round(t, qt(t, e))),
            n = 1 + Math.floor(1e-12 + Math.log(t) / Math.LN10),
            n = Math.max(-24, Math.min(24, 3 * Math.floor((n - 1) / 3)))),
            du[8 + n / 3]
        }
        ;
        var vu = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i
          , gu = ha.map({
            b: function(t) {
                return t.toString(2)
            },
            c: function(t) {
                return String.fromCharCode(t)
            },
            o: function(t) {
                return t.toString(8)
            },
            x: function(t) {
                return t.toString(16)
            },
            X: function(t) {
                return t.toString(16).toUpperCase()
            },
            g: function(t, e) {
                return t.toPrecision(e)
            },
            e: function(t, e) {
                return t.toExponential(e)
            },
            f: function(t, e) {
                return t.toFixed(e)
            },
            r: function(t, e) {
                return (t = ha.round(t, qt(t, e))).toFixed(Math.max(0, Math.min(20, qt(t * (1 + 1e-15), e))))
            }
        })
          , yu = ha.time = {}
          , mu = Date;
        Wt.prototype = {
            getDate: function() {
                return this._.getUTCDate()
            },
            getDay: function() {
                return this._.getUTCDay()
            },
            getFullYear: function() {
                return this._.getUTCFullYear()
            },
            getHours: function() {
                return this._.getUTCHours()
            },
            getMilliseconds: function() {
                return this._.getUTCMilliseconds()
            },
            getMinutes: function() {
                return this._.getUTCMinutes()
            },
            getMonth: function() {
                return this._.getUTCMonth()
            },
            getSeconds: function() {
                return this._.getUTCSeconds()
            },
            getTime: function() {
                return this._.getTime()
            },
            getTimezoneOffset: function() {
                return 0
            },
            valueOf: function() {
                return this._.valueOf()
            },
            setDate: function() {
                bu.setUTCDate.apply(this._, arguments)
            },
            setDay: function() {
                bu.setUTCDay.apply(this._, arguments)
            },
            setFullYear: function() {
                bu.setUTCFullYear.apply(this._, arguments)
            },
            setHours: function() {
                bu.setUTCHours.apply(this._, arguments)
            },
            setMilliseconds: function() {
                bu.setUTCMilliseconds.apply(this._, arguments)
            },
            setMinutes: function() {
                bu.setUTCMinutes.apply(this._, arguments)
            },
            setMonth: function() {
                bu.setUTCMonth.apply(this._, arguments)
            },
            setSeconds: function() {
                bu.setUTCSeconds.apply(this._, arguments)
            },
            setTime: function() {
                bu.setTime.apply(this._, arguments)
            }
        };
        var bu = Date.prototype;
        yu.year = Vt(function(t) {
            return t = yu.day(t),
            t.setMonth(0, 1),
            t
        }, function(t, e) {
            t.setFullYear(t.getFullYear() + e)
        }, function(t) {
            return t.getFullYear()
        }),
        yu.years = yu.year.range,
        yu.years.utc = yu.year.utc.range,
        yu.day = Vt(function(t) {
            var e = new mu(2e3,0);
            return e.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()),
            e
        }, function(t, e) {
            t.setDate(t.getDate() + e)
        }, function(t) {
            return t.getDate() - 1
        }),
        yu.days = yu.day.range,
        yu.days.utc = yu.day.utc.range,
        yu.dayOfYear = function(t) {
            var e = yu.year(t);
            return Math.floor((t - e - 6e4 * (t.getTimezoneOffset() - e.getTimezoneOffset())) / 864e5)
        }
        ,
        ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(t, e) {
            e = 7 - e;
            var n = yu[t] = Vt(function(t) {
                return (t = yu.day(t)).setDate(t.getDate() - (t.getDay() + e) % 7),
                t
            }, function(t, e) {
                t.setDate(t.getDate() + 7 * Math.floor(e))
            }, function(t) {
                var n = yu.year(t).getDay();
                return Math.floor((yu.dayOfYear(t) + (n + e) % 7) / 7) - (n !== e)
            });
            yu[t + "s"] = n.range,
            yu[t + "s"].utc = n.utc.range,
            yu[t + "OfYear"] = function(t) {
                var n = yu.year(t).getDay();
                return Math.floor((yu.dayOfYear(t) + (n + e) % 7) / 7)
            }
        }),
        yu.week = yu.sunday,
        yu.weeks = yu.sunday.range,
        yu.weeks.utc = yu.sunday.utc.range,
        yu.weekOfYear = yu.sundayOfYear;
        var xu = {
            "-": "",
            _: " ",
            0: "0"
        }
          , _u = /^\s*\d+/
          , wu = /^%/;
        ha.locale = function(t) {
            return {
                numberFormat: Bt(t),
                timeFormat: Yt(t)
            }
        }
        ;
        var Cu = ha.locale({
            decimal: ".",
            thousands: ",",
            grouping: [3],
            currency: ["$", ""],
            dateTime: "%a %b %e %X %Y",
            date: "%m/%d/%Y",
            time: "%H:%M:%S",
            periods: ["AM", "PM"],
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        });
        ha.format = Cu.numberFormat,
        ha.geo = {},
        de.prototype = {
            s: 0,
            t: 0,
            add: function(t) {
                ve(t, this.t, Eu),
                ve(Eu.s, this.s, this),
                this.s ? this.t += Eu.t : this.s = Eu.t
            },
            reset: function() {
                this.s = this.t = 0
            },
            valueOf: function() {
                return this.s
            }
        };
        var Eu = new de;
        ha.geo.stream = function(t, e) {
            t && Mu.hasOwnProperty(t.type) ? Mu[t.type](t, e) : ge(t, e)
        }
        ;
        var Mu = {
            Feature: function(t, e) {
                ge(t.geometry, e)
            },
            FeatureCollection: function(t, e) {
                for (var n = t.features, r = -1, o = n.length; ++r < o; )
                    ge(n[r].geometry, e)
            }
        }
          , ku = {
            Sphere: function(t, e) {
                e.sphere()
            },
            Point: function(t, e) {
                t = t.coordinates,
                e.point(t[0], t[1], t[2])
            },
            MultiPoint: function(t, e) {
                for (var n = t.coordinates, r = -1, o = n.length; ++r < o; )
                    t = n[r],
                    e.point(t[0], t[1], t[2])
            },
            LineString: function(t, e) {
                ye(t.coordinates, e, 0)
            },
            MultiLineString: function(t, e) {
                for (var n = t.coordinates, r = -1, o = n.length; ++r < o; )
                    ye(n[r], e, 0)
            },
            Polygon: function(t, e) {
                me(t.coordinates, e)
            },
            MultiPolygon: function(t, e) {
                for (var n = t.coordinates, r = -1, o = n.length; ++r < o; )
                    me(n[r], e)
            },
            GeometryCollection: function(t, e) {
                for (var n = t.geometries, r = -1, o = n.length; ++r < o; )
                    ge(n[r], e)
            }
        };
        ha.geo.area = function(t) {
            return Su = 0,
            ha.geo.stream(t, Nu),
            Su
        }
        ;
        var Su, Tu = new de, Nu = {
            sphere: function() {
                Su += 4 * Ba
            },
            point: k,
            lineStart: k,
            lineEnd: k,
            polygonStart: function() {
                Tu.reset(),
                Nu.lineStart = be
            },
            polygonEnd: function() {
                var t = 2 * Tu;
                Su += t < 0 ? 4 * Ba + t : t,
                Nu.lineStart = Nu.lineEnd = Nu.point = k
            }
        };
        ha.geo.bounds = function() {
            function t(t, e) {
                b.push(x = [l = t, p = t]),
                e < f && (f = e),
                e > h && (h = e)
            }
            function e(e, n) {
                var r = xe([e * $a, n * $a]);
                if (y) {
                    var o = we(y, r)
                      , i = [o[1], -o[0], 0]
                      , a = we(i, o);
                    Me(a),
                    a = ke(a);
                    var s = e - d
                      , c = s > 0 ? 1 : -1
                      , v = a[0] * Ya * c
                      , g = Ca(s) > 180;
                    if (g ^ (c * d < v && v < c * e)) {
                        var m = a[1] * Ya;
                        m > h && (h = m)
                    } else if (v = (v + 360) % 360 - 180,
                    g ^ (c * d < v && v < c * e)) {
                        var m = -a[1] * Ya;
                        m < f && (f = m)
                    } else
                        n < f && (f = n),
                        n > h && (h = n);
                    g ? e < d ? u(l, e) > u(l, p) && (p = e) : u(e, p) > u(l, p) && (l = e) : p >= l ? (e < l && (l = e),
                    e > p && (p = e)) : e > d ? u(l, e) > u(l, p) && (p = e) : u(e, p) > u(l, p) && (l = e)
                } else
                    t(e, n);
                y = r,
                d = e
            }
            function n() {
                _.point = e
            }
            function r() {
                x[0] = l,
                x[1] = p,
                _.point = t,
                y = null
            }
            function o(t, n) {
                if (y) {
                    var r = t - d;
                    m += Ca(r) > 180 ? r + (r > 0 ? 360 : -360) : r
                } else
                    v = t,
                    g = n;
                Nu.point(t, n),
                e(t, n)
            }
            function i() {
                Nu.lineStart()
            }
            function a() {
                o(v, g),
                Nu.lineEnd(),
                Ca(m) > qa && (l = -(p = 180)),
                x[0] = l,
                x[1] = p,
                y = null
            }
            function u(t, e) {
                return (e -= t) < 0 ? e + 360 : e
            }
            function s(t, e) {
                return t[0] - e[0]
            }
            function c(t, e) {
                return e[0] <= e[1] ? e[0] <= t && t <= e[1] : t < e[0] || e[1] < t
            }
            var l, f, p, h, d, v, g, y, m, b, x, _ = {
                point: t,
                lineStart: n,
                lineEnd: r,
                polygonStart: function() {
                    _.point = o,
                    _.lineStart = i,
                    _.lineEnd = a,
                    m = 0,
                    Nu.polygonStart()
                },
                polygonEnd: function() {
                    Nu.polygonEnd(),
                    _.point = t,
                    _.lineStart = n,
                    _.lineEnd = r,
                    Tu < 0 ? (l = -(p = 180),
                    f = -(h = 90)) : m > qa ? h = 90 : m < -qa && (f = -90),
                    x[0] = l,
                    x[1] = p
                }
            };
            return function(t) {
                h = p = -(l = f = 1 / 0),
                b = [],
                ha.geo.stream(t, _);
                var e = b.length;
                if (e) {
                    b.sort(s);
                    for (var n, r = 1, o = b[0], i = [o]; r < e; ++r)
                        n = b[r],
                        c(n[0], o) || c(n[1], o) ? (u(o[0], n[1]) > u(o[0], o[1]) && (o[1] = n[1]),
                        u(n[0], o[1]) > u(o[0], o[1]) && (o[0] = n[0])) : i.push(o = n);
                    for (var a, n, d = -(1 / 0), e = i.length - 1, r = 0, o = i[e]; r <= e; o = n,
                    ++r)
                        n = i[r],
                        (a = u(o[1], n[0])) > d && (d = a,
                        l = n[0],
                        p = o[1])
                }
                return b = x = null,
                l === 1 / 0 || f === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[l, f], [p, h]]
            }
        }(),
        ha.geo.centroid = function(t) {
            Au = Ou = Pu = ju = Du = Iu = Ru = Lu = Uu = Fu = qu = 0,
            ha.geo.stream(t, Hu);
            var e = Uu
              , n = Fu
              , r = qu
              , o = e * e + n * n + r * r;
            return o < Ha && (e = Iu,
            n = Ru,
            r = Lu,
            Ou < qa && (e = Pu,
            n = ju,
            r = Du),
            o = e * e + n * n + r * r,
            o < Ha) ? [NaN, NaN] : [Math.atan2(n, e) * Ya, at(r / Math.sqrt(o)) * Ya]
        }
        ;
        var Au, Ou, Pu, ju, Du, Iu, Ru, Lu, Uu, Fu, qu, Hu = {
            sphere: k,
            point: Te,
            lineStart: Ae,
            lineEnd: Oe,
            polygonStart: function() {
                Hu.lineStart = Pe
            },
            polygonEnd: function() {
                Hu.lineStart = Ae
            }
        }, Bu = Ue(De, Be, We, [-Ba, -Ba / 2]), zu = 1e9;
        ha.geo.clipExtent = function() {
            var t, e, n, r, o, i, a = {
                stream: function(t) {
                    return o && (o.valid = !1),
                    o = i(t),
                    o.valid = !0,
                    o
                },
                extent: function(u) {
                    return arguments.length ? (i = Ke(t = +u[0][0], e = +u[0][1], n = +u[1][0], r = +u[1][1]),
                    o && (o.valid = !1,
                    o = null),
                    a) : [[t, e], [n, r]]
                }
            };
            return a.extent([[0, 0], [960, 500]])
        }
        ,
        (ha.geo.conicEqualArea = function() {
            return Xe(Je)
        }
        ).raw = Je,
        ha.geo.albers = function() {
            return ha.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
        }
        ,
        ha.geo.albersUsa = function() {
            function t(t) {
                var i = t[0]
                  , a = t[1];
                return e = null,
                n(i, a),
                e || (r(i, a),
                e) || o(i, a),
                e
            }
            var e, n, r, o, i = ha.geo.albers(), a = ha.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), u = ha.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), s = {
                point: function(t, n) {
                    e = [t, n]
                }
            };
            return t.invert = function(t) {
                var e = i.scale()
                  , n = i.translate()
                  , r = (t[0] - n[0]) / e
                  , o = (t[1] - n[1]) / e;
                return (o >= .12 && o < .234 && r >= -.425 && r < -.214 ? a : o >= .166 && o < .234 && r >= -.214 && r < -.115 ? u : i).invert(t)
            }
            ,
            t.stream = function(t) {
                var e = i.stream(t)
                  , n = a.stream(t)
                  , r = u.stream(t);
                return {
                    point: function(t, o) {
                        e.point(t, o),
                        n.point(t, o),
                        r.point(t, o)
                    },
                    sphere: function() {
                        e.sphere(),
                        n.sphere(),
                        r.sphere()
                    },
                    lineStart: function() {
                        e.lineStart(),
                        n.lineStart(),
                        r.lineStart()
                    },
                    lineEnd: function() {
                        e.lineEnd(),
                        n.lineEnd(),
                        r.lineEnd()
                    },
                    polygonStart: function() {
                        e.polygonStart(),
                        n.polygonStart(),
                        r.polygonStart()
                    },
                    polygonEnd: function() {
                        e.polygonEnd(),
                        n.polygonEnd(),
                        r.polygonEnd()
                    }
                }
            }
            ,
            t.precision = function(e) {
                return arguments.length ? (i.precision(e),
                a.precision(e),
                u.precision(e),
                t) : i.precision()
            }
            ,
            t.scale = function(e) {
                return arguments.length ? (i.scale(e),
                a.scale(.35 * e),
                u.scale(e),
                t.translate(i.translate())) : i.scale()
            }
            ,
            t.translate = function(e) {
                if (!arguments.length)
                    return i.translate();
                var c = i.scale()
                  , l = +e[0]
                  , f = +e[1];
                return n = i.translate(e).clipExtent([[l - .455 * c, f - .238 * c], [l + .455 * c, f + .238 * c]]).stream(s).point,
                r = a.translate([l - .307 * c, f + .201 * c]).clipExtent([[l - .425 * c + qa, f + .12 * c + qa], [l - .214 * c - qa, f + .234 * c - qa]]).stream(s).point,
                o = u.translate([l - .205 * c, f + .212 * c]).clipExtent([[l - .214 * c + qa, f + .166 * c + qa], [l - .115 * c - qa, f + .234 * c - qa]]).stream(s).point,
                t
            }
            ,
            t.scale(1070)
        }
        ;
        var Wu, Vu, $u, Yu, Ku, Xu, Ju = {
            point: k,
            lineStart: k,
            lineEnd: k,
            polygonStart: function() {
                Vu = 0,
                Ju.lineStart = Ge
            },
            polygonEnd: function() {
                Ju.lineStart = Ju.lineEnd = Ju.point = k,
                Wu += Ca(Vu / 2)
            }
        }, Gu = {
            point: Qe,
            lineStart: k,
            lineEnd: k,
            polygonStart: k,
            polygonEnd: k
        }, Qu = {
            point: en,
            lineStart: nn,
            lineEnd: rn,
            polygonStart: function() {
                Qu.lineStart = on
            },
            polygonEnd: function() {
                Qu.point = en,
                Qu.lineStart = nn,
                Qu.lineEnd = rn
            }
        };
        ha.geo.path = function() {
            function t(t) {
                return t && ("function" == typeof u && i.pointRadius(+u.apply(this, arguments)),
                a && a.valid || (a = o(i)),
                ha.geo.stream(t, a)),
                i.result()
            }
            function e() {
                return a = null,
                t
            }
            var n, r, o, i, a, u = 4.5;
            return t.area = function(t) {
                return Wu = 0,
                ha.geo.stream(t, o(Ju)),
                Wu
            }
            ,
            t.centroid = function(t) {
                return Pu = ju = Du = Iu = Ru = Lu = Uu = Fu = qu = 0,
                ha.geo.stream(t, o(Qu)),
                qu ? [Uu / qu, Fu / qu] : Lu ? [Iu / Lu, Ru / Lu] : Du ? [Pu / Du, ju / Du] : [NaN, NaN]
            }
            ,
            t.bounds = function(t) {
                return Ku = Xu = -($u = Yu = 1 / 0),
                ha.geo.stream(t, o(Gu)),
                [[$u, Yu], [Ku, Xu]]
            }
            ,
            t.projection = function(t) {
                return arguments.length ? (o = (n = t) ? t.stream || sn(t) : C,
                e()) : n
            }
            ,
            t.context = function(t) {
                return arguments.length ? (i = null == (r = t) ? new Ze : new an(t),
                "function" != typeof u && i.pointRadius(u),
                e()) : r
            }
            ,
            t.pointRadius = function(e) {
                return arguments.length ? (u = "function" == typeof e ? e : (i.pointRadius(+e),
                +e),
                t) : u
            }
            ,
            t.projection(ha.geo.albersUsa()).context(null)
        }
        ,
        ha.geo.transform = function(t) {
            return {
                stream: function(e) {
                    var n = new cn(e);
                    for (var r in t)
                        n[r] = t[r];
                    return n
                }
            }
        }
        ,
        cn.prototype = {
            point: function(t, e) {
                this.stream.point(t, e)
            },
            sphere: function() {
                this.stream.sphere()
            },
            lineStart: function() {
                this.stream.lineStart()
            },
            lineEnd: function() {
                this.stream.lineEnd()
            },
            polygonStart: function() {
                this.stream.polygonStart()
            },
            polygonEnd: function() {
                this.stream.polygonEnd()
            }
        },
        ha.geo.projection = fn,
        ha.geo.projectionMutator = pn,
        (ha.geo.equirectangular = function() {
            return fn(dn)
        }
        ).raw = dn.invert = dn,
        ha.geo.rotation = function(t) {
            function e(e) {
                return e = t(e[0] * $a, e[1] * $a),
                e[0] *= Ya,
                e[1] *= Ya,
                e
            }
            return t = gn(t[0] % 360 * $a, t[1] * $a, t.length > 2 ? t[2] * $a : 0),
            e.invert = function(e) {
                return e = t.invert(e[0] * $a, e[1] * $a),
                e[0] *= Ya,
                e[1] *= Ya,
                e
            }
            ,
            e
        }
        ,
        vn.invert = dn,
        ha.geo.circle = function() {
            function t() {
                var t = "function" == typeof r ? r.apply(this, arguments) : r
                  , e = gn(-t[0] * $a, -t[1] * $a, 0).invert
                  , o = [];
                return n(null, null, 1, {
                    point: function(t, n) {
                        o.push(t = e(t, n)),
                        t[0] *= Ya,
                        t[1] *= Ya
                    }
                }),
                {
                    type: "Polygon",
                    coordinates: [o]
                }
            }
            var e, n, r = [0, 0], o = 6;
            return t.origin = function(e) {
                return arguments.length ? (r = e,
                t) : r
            }
            ,
            t.angle = function(r) {
                return arguments.length ? (n = xn((e = +r) * $a, o * $a),
                t) : e
            }
            ,
            t.precision = function(r) {
                return arguments.length ? (n = xn(e * $a, (o = +r) * $a),
                t) : o
            }
            ,
            t.angle(90)
        }
        ,
        ha.geo.distance = function(t, e) {
            var n, r = (e[0] - t[0]) * $a, o = t[1] * $a, i = e[1] * $a, a = Math.sin(r), u = Math.cos(r), s = Math.sin(o), c = Math.cos(o), l = Math.sin(i), f = Math.cos(i);
            return Math.atan2(Math.sqrt((n = f * a) * n + (n = c * l - s * f * u) * n), s * l + c * f * u)
        }
        ,
        ha.geo.graticule = function() {
            function t() {
                return {
                    type: "MultiLineString",
                    coordinates: e()
                }
            }
            function e() {
                return ha.range(Math.ceil(i / g) * g, o, g).map(p).concat(ha.range(Math.ceil(c / y) * y, s, y).map(h)).concat(ha.range(Math.ceil(r / d) * d, n, d).filter(function(t) {
                    return Ca(t % g) > qa
                }).map(l)).concat(ha.range(Math.ceil(u / v) * v, a, v).filter(function(t) {
                    return Ca(t % y) > qa
                }).map(f))
            }
            var n, r, o, i, a, u, s, c, l, f, p, h, d = 10, v = d, g = 90, y = 360, m = 2.5;
            return t.lines = function() {
                return e().map(function(t) {
                    return {
                        type: "LineString",
                        coordinates: t
                    }
                })
            }
            ,
            t.outline = function() {
                return {
                    type: "Polygon",
                    coordinates: [p(i).concat(h(s).slice(1), p(o).reverse().slice(1), h(c).reverse().slice(1))]
                }
            }
            ,
            t.extent = function(e) {
                return arguments.length ? t.majorExtent(e).minorExtent(e) : t.minorExtent()
            }
            ,
            t.majorExtent = function(e) {
                return arguments.length ? (i = +e[0][0],
                o = +e[1][0],
                c = +e[0][1],
                s = +e[1][1],
                i > o && (e = i,
                i = o,
                o = e),
                c > s && (e = c,
                c = s,
                s = e),
                t.precision(m)) : [[i, c], [o, s]]
            }
            ,
            t.minorExtent = function(e) {
                return arguments.length ? (r = +e[0][0],
                n = +e[1][0],
                u = +e[0][1],
                a = +e[1][1],
                r > n && (e = r,
                r = n,
                n = e),
                u > a && (e = u,
                u = a,
                a = e),
                t.precision(m)) : [[r, u], [n, a]]
            }
            ,
            t.step = function(e) {
                return arguments.length ? t.majorStep(e).minorStep(e) : t.minorStep()
            }
            ,
            t.majorStep = function(e) {
                return arguments.length ? (g = +e[0],
                y = +e[1],
                t) : [g, y]
            }
            ,
            t.minorStep = function(e) {
                return arguments.length ? (d = +e[0],
                v = +e[1],
                t) : [d, v]
            }
            ,
            t.precision = function(e) {
                return arguments.length ? (m = +e,
                l = wn(u, a, 90),
                f = Cn(r, n, m),
                p = wn(c, s, 90),
                h = Cn(i, o, m),
                t) : m
            }
            ,
            t.majorExtent([[-180, -90 + qa], [180, 90 - qa]]).minorExtent([[-180, -80 - qa], [180, 80 + qa]])
        }
        ,
        ha.geo.greatArc = function() {
            function t() {
                return {
                    type: "LineString",
                    coordinates: [e || r.apply(this, arguments), n || o.apply(this, arguments)]
                }
            }
            var e, n, r = En, o = Mn;
            return t.distance = function() {
                return ha.geo.distance(e || r.apply(this, arguments), n || o.apply(this, arguments))
            }
            ,
            t.source = function(n) {
                return arguments.length ? (r = n,
                e = "function" == typeof n ? null : n,
                t) : r
            }
            ,
            t.target = function(e) {
                return arguments.length ? (o = e,
                n = "function" == typeof e ? null : e,
                t) : o
            }
            ,
            t.precision = function() {
                return arguments.length ? t : 0
            }
            ,
            t
        }
        ,
        ha.geo.interpolate = function(t, e) {
            return kn(t[0] * $a, t[1] * $a, e[0] * $a, e[1] * $a)
        }
        ,
        ha.geo.length = function(t) {
            return Zu = 0,
            ha.geo.stream(t, ts),
            Zu
        }
        ;
        var Zu, ts = {
            sphere: k,
            point: k,
            lineStart: Sn,
            lineEnd: k,
            polygonStart: k,
            polygonEnd: k
        }, es = Tn(function(t) {
            return Math.sqrt(2 / (1 + t))
        }, function(t) {
            return 2 * Math.asin(t / 2)
        });
        (ha.geo.azimuthalEqualArea = function() {
            return fn(es)
        }
        ).raw = es;
        var ns = Tn(function(t) {
            var e = Math.acos(t);
            return e && e / Math.sin(e)
        }, C);
        (ha.geo.azimuthalEquidistant = function() {
            return fn(ns)
        }
        ).raw = ns,
        (ha.geo.conicConformal = function() {
            return Xe(Nn)
        }
        ).raw = Nn,
        (ha.geo.conicEquidistant = function() {
            return Xe(An)
        }
        ).raw = An;
        var rs = Tn(function(t) {
            return 1 / t
        }, Math.atan);
        (ha.geo.gnomonic = function() {
            return fn(rs)
        }
        ).raw = rs,
        On.invert = function(t, e) {
            return [t, 2 * Math.atan(Math.exp(e)) - Va]
        }
        ,
        (ha.geo.mercator = function() {
            return Pn(On)
        }
        ).raw = On;
        var os = Tn(function() {
            return 1
        }, Math.asin);
        (ha.geo.orthographic = function() {
            return fn(os)
        }
        ).raw = os;
        var is = Tn(function(t) {
            return 1 / (1 + t)
        }, function(t) {
            return 2 * Math.atan(t)
        });
        (ha.geo.stereographic = function() {
            return fn(is)
        }
        ).raw = is,
        jn.invert = function(t, e) {
            return [-e, 2 * Math.atan(Math.exp(t)) - Va]
        }
        ,
        (ha.geo.transverseMercator = function() {
            var t = Pn(jn)
              , e = t.center
              , n = t.rotate;
            return t.center = function(t) {
                return t ? e([-t[1], t[0]]) : (t = e(),
                [t[1], -t[0]])
            }
            ,
            t.rotate = function(t) {
                return t ? n([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : (t = n(),
                [t[0], t[1], t[2] - 90])
            }
            ,
            n([0, 0, 90])
        }
        ).raw = jn,
        ha.geom = {},
        ha.geom.hull = function(t) {
            function e(t) {
                if (t.length < 3)
                    return [];
                var e, o = Ot(n), i = Ot(r), a = t.length, u = [], s = [];
                for (e = 0; e < a; e++)
                    u.push([+o.call(this, t[e], e), +i.call(this, t[e], e), e]);
                for (u.sort(Ln),
                e = 0; e < a; e++)
                    s.push([u[e][0], -u[e][1]]);
                var c = Rn(u)
                  , l = Rn(s)
                  , f = l[0] === c[0]
                  , p = l[l.length - 1] === c[c.length - 1]
                  , h = [];
                for (e = c.length - 1; e >= 0; --e)
                    h.push(t[u[c[e]][2]]);
                for (e = +f; e < l.length - p; ++e)
                    h.push(t[u[l[e]][2]]);
                return h
            }
            var n = Dn
              , r = In;
            return arguments.length ? e(t) : (e.x = function(t) {
                return arguments.length ? (n = t,
                e) : n
            }
            ,
            e.y = function(t) {
                return arguments.length ? (r = t,
                e) : r
            }
            ,
            e)
        }
        ,
        ha.geom.polygon = function(t) {
            return Ta(t, as),
            t
        }
        ;
        var as = ha.geom.polygon.prototype = [];
        as.area = function() {
            for (var t, e = -1, n = this.length, r = this[n - 1], o = 0; ++e < n; )
                t = r,
                r = this[e],
                o += t[1] * r[0] - t[0] * r[1];
            return .5 * o
        }
        ,
        as.centroid = function(t) {
            var e, n, r = -1, o = this.length, i = 0, a = 0, u = this[o - 1];
            for (arguments.length || (t = -1 / (6 * this.area())); ++r < o; )
                e = u,
                u = this[r],
                n = e[0] * u[1] - u[0] * e[1],
                i += (e[0] + u[0]) * n,
                a += (e[1] + u[1]) * n;
            return [i * t, a * t]
        }
        ,
        as.clip = function(t) {
            for (var e, n, r, o, i, a, u = qn(t), s = -1, c = this.length - qn(this), l = this[c - 1]; ++s < c; ) {
                for (e = t.slice(),
                t.length = 0,
                o = this[s],
                i = e[(r = e.length - u) - 1],
                n = -1; ++n < r; )
                    a = e[n],
                    Un(a, l, o) ? (Un(i, l, o) || t.push(Fn(i, a, l, o)),
                    t.push(a)) : Un(i, l, o) && t.push(Fn(i, a, l, o)),
                    i = a;
                u && t.push(t[0]),
                l = o
            }
            return t
        }
        ;
        var us, ss, cs, ls, fs, ps = [], hs = [];
        Kn.prototype.prepare = function() {
            for (var t, e = this.edges, n = e.length; n--; )
                t = e[n].edge,
                t.b && t.a || e.splice(n, 1);
            return e.sort(Jn),
            e.length
        }
        ,
        ar.prototype = {
            start: function() {
                return this.edge.l === this.site ? this.edge.a : this.edge.b
            },
            end: function() {
                return this.edge.l === this.site ? this.edge.b : this.edge.a
            }
        },
        ur.prototype = {
            insert: function(t, e) {
                var n, r, o;
                if (t) {
                    if (e.P = t,
                    e.N = t.N,
                    t.N && (t.N.P = e),
                    t.N = e,
                    t.R) {
                        for (t = t.R; t.L; )
                            t = t.L;
                        t.L = e
                    } else
                        t.R = e;
                    n = t
                } else
                    this._ ? (t = fr(this._),
                    e.P = null,
                    e.N = t,
                    t.P = t.L = e,
                    n = t) : (e.P = e.N = null,
                    this._ = e,
                    n = null);
                for (e.L = e.R = null,
                e.U = n,
                e.C = !0,
                t = e; n && n.C; )
                    r = n.U,
                    n === r.L ? (o = r.R,
                    o && o.C ? (n.C = o.C = !1,
                    r.C = !0,
                    t = r) : (t === n.R && (cr(this, n),
                    t = n,
                    n = t.U),
                    n.C = !1,
                    r.C = !0,
                    lr(this, r))) : (o = r.L,
                    o && o.C ? (n.C = o.C = !1,
                    r.C = !0,
                    t = r) : (t === n.L && (lr(this, n),
                    t = n,
                    n = t.U),
                    n.C = !1,
                    r.C = !0,
                    cr(this, r))),
                    n = t.U;
                this._.C = !1
            },
            remove: function(t) {
                t.N && (t.N.P = t.P),
                t.P && (t.P.N = t.N),
                t.N = t.P = null;
                var e, n, r, o = t.U, i = t.L, a = t.R;
                if (n = i ? a ? fr(a) : i : a,
                o ? o.L === t ? o.L = n : o.R = n : this._ = n,
                i && a ? (r = n.C,
                n.C = t.C,
                n.L = i,
                i.U = n,
                n !== a ? (o = n.U,
                n.U = t.U,
                t = n.R,
                o.L = t,
                n.R = a,
                a.U = n) : (n.U = o,
                o = n,
                t = n.R)) : (r = t.C,
                t = n),
                t && (t.U = o),
                !r) {
                    if (t && t.C)
                        return void (t.C = !1);
                    do {
                        if (t === this._)
                            break;
                        if (t === o.L) {
                            if (e = o.R,
                            e.C && (e.C = !1,
                            o.C = !0,
                            cr(this, o),
                            e = o.R),
                            e.L && e.L.C || e.R && e.R.C) {
                                e.R && e.R.C || (e.L.C = !1,
                                e.C = !0,
                                lr(this, e),
                                e = o.R),
                                e.C = o.C,
                                o.C = e.R.C = !1,
                                cr(this, o),
                                t = this._;
                                break
                            }
                        } else if (e = o.L,
                        e.C && (e.C = !1,
                        o.C = !0,
                        lr(this, o),
                        e = o.L),
                        e.L && e.L.C || e.R && e.R.C) {
                            e.L && e.L.C || (e.R.C = !1,
                            e.C = !0,
                            cr(this, e),
                            e = o.L),
                            e.C = o.C,
                            o.C = e.L.C = !1,
                            lr(this, o),
                            t = this._;
                            break
                        }
                        e.C = !0,
                        t = o,
                        o = o.U
                    } while (!t.C);t && (t.C = !1)
                }
            }
        },
        ha.geom.voronoi = function(t) {
            function e(t) {
                var e = new Array(t.length)
                  , r = u[0][0]
                  , o = u[0][1]
                  , i = u[1][0]
                  , a = u[1][1];
                return pr(n(t), u).cells.forEach(function(n, u) {
                    var s = n.edges
                      , c = n.site
                      , l = e[u] = s.length ? s.map(function(t) {
                        var e = t.start();
                        return [e.x, e.y]
                    }) : c.x >= r && c.x <= i && c.y >= o && c.y <= a ? [[r, a], [i, a], [i, o], [r, o]] : [];
                    l.point = t[u]
                }),
                e
            }
            function n(t) {
                return t.map(function(t, e) {
                    return {
                        x: Math.round(i(t, e) / qa) * qa,
                        y: Math.round(a(t, e) / qa) * qa,
                        i: e
                    }
                })
            }
            var r = Dn
              , o = In
              , i = r
              , a = o
              , u = ds;
            return t ? e(t) : (e.links = function(t) {
                return pr(n(t)).edges.filter(function(t) {
                    return t.l && t.r
                }).map(function(e) {
                    return {
                        source: t[e.l.i],
                        target: t[e.r.i]
                    }
                })
            }
            ,
            e.triangles = function(t) {
                var e = [];
                return pr(n(t)).cells.forEach(function(n, r) {
                    for (var o, i, a = n.site, u = n.edges.sort(Jn), s = -1, c = u.length, l = u[c - 1].edge, f = l.l === a ? l.r : l.l; ++s < c; )
                        o = l,
                        i = f,
                        l = u[s].edge,
                        f = l.l === a ? l.r : l.l,
                        r < i.i && r < f.i && dr(a, i, f) < 0 && e.push([t[r], t[i.i], t[f.i]])
                }),
                e
            }
            ,
            e.x = function(t) {
                return arguments.length ? (i = Ot(r = t),
                e) : r
            }
            ,
            e.y = function(t) {
                return arguments.length ? (a = Ot(o = t),
                e) : o
            }
            ,
            e.clipExtent = function(t) {
                return arguments.length ? (u = null == t ? ds : t,
                e) : u === ds ? null : u
            }
            ,
            e.size = function(t) {
                return arguments.length ? e.clipExtent(t && [[0, 0], t]) : u === ds ? null : u && u[1]
            }
            ,
            e)
        }
        ;
        var ds = [[-1e6, -1e6], [1e6, 1e6]];
        ha.geom.delaunay = function(t) {
            return ha.geom.voronoi().triangles(t)
        }
        ,
        ha.geom.quadtree = function(t, e, n, r, o) {
            function i(t) {
                function i(t, e, n, r, o, i, a, u) {
                    if (!isNaN(n) && !isNaN(r))
                        if (t.leaf) {
                            var s = t.x
                              , l = t.y;
                            if (null != s)
                                if (Ca(s - n) + Ca(l - r) < .01)
                                    c(t, e, n, r, o, i, a, u);
                                else {
                                    var f = t.point;
                                    t.x = t.y = t.point = null,
                                    c(t, f, s, l, o, i, a, u),
                                    c(t, e, n, r, o, i, a, u)
                                }
                            else
                                t.x = n,
                                t.y = r,
                                t.point = e
                        } else
                            c(t, e, n, r, o, i, a, u)
                }
                function c(t, e, n, r, o, a, u, s) {
                    var c = .5 * (o + u)
                      , l = .5 * (a + s)
                      , f = n >= c
                      , p = r >= l
                      , h = p << 1 | f;
                    t.leaf = !1,
                    t = t.nodes[h] || (t.nodes[h] = yr()),
                    f ? o = c : u = c,
                    p ? a = l : s = l,
                    i(t, e, n, r, o, a, u, s)
                }
                var l, f, p, h, d, v, g, y, m, b = Ot(u), x = Ot(s);
                if (null != e)
                    v = e,
                    g = n,
                    y = r,
                    m = o;
                else if (y = m = -(v = g = 1 / 0),
                f = [],
                p = [],
                d = t.length,
                a)
                    for (h = 0; h < d; ++h)
                        l = t[h],
                        l.x < v && (v = l.x),
                        l.y < g && (g = l.y),
                        l.x > y && (y = l.x),
                        l.y > m && (m = l.y),
                        f.push(l.x),
                        p.push(l.y);
                else
                    for (h = 0; h < d; ++h) {
                        var _ = +b(l = t[h], h)
                          , w = +x(l, h);
                        _ < v && (v = _),
                        w < g && (g = w),
                        _ > y && (y = _),
                        w > m && (m = w),
                        f.push(_),
                        p.push(w)
                    }
                var C = y - v
                  , E = m - g;
                C > E ? m = g + C : y = v + E;
                var M = yr();
                if (M.add = function(t) {
                    i(M, t, +b(t, ++h), +x(t, h), v, g, y, m)
                }
                ,
                M.visit = function(t) {
                    mr(t, M, v, g, y, m)
                }
                ,
                M.find = function(t) {
                    return br(M, t[0], t[1], v, g, y, m)
                }
                ,
                h = -1,
                null == e) {
                    for (; ++h < d; )
                        i(M, t[h], f[h], p[h], v, g, y, m);
                    --h
                } else
                    t.forEach(M.add);
                return f = p = t = l = null,
                M
            }
            var a, u = Dn, s = In;
            return (a = arguments.length) ? (u = vr,
            s = gr,
            3 === a && (o = n,
            r = e,
            n = e = 0),
            i(t)) : (i.x = function(t) {
                return arguments.length ? (u = t,
                i) : u
            }
            ,
            i.y = function(t) {
                return arguments.length ? (s = t,
                i) : s
            }
            ,
            i.extent = function(t) {
                return arguments.length ? (null == t ? e = n = r = o = null : (e = +t[0][0],
                n = +t[0][1],
                r = +t[1][0],
                o = +t[1][1]),
                i) : null == e ? null : [[e, n], [r, o]]
            }
            ,
            i.size = function(t) {
                return arguments.length ? (null == t ? e = n = r = o = null : (e = n = 0,
                r = +t[0],
                o = +t[1]),
                i) : null == e ? null : [r - e, o - n]
            }
            ,
            i)
        }
        ,
        ha.interpolateRgb = xr,
        ha.interpolateObject = _r,
        ha.interpolateNumber = wr,
        ha.interpolateString = Cr;
        var vs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g
          , gs = new RegExp(vs.source,"g");
        ha.interpolate = Er,
        ha.interpolators = [function(t, e) {
            var n = typeof e;
            return ("string" === n ? su.has(e.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(e) ? xr : Cr : e instanceof ft ? xr : Array.isArray(e) ? Mr : "object" === n && isNaN(e) ? _r : wr)(t, e)
        }
        ],
        ha.interpolateArray = Mr;
        var ys = function() {
            return C
        }
          , ms = ha.map({
            linear: ys,
            poly: Pr,
            quad: function() {
                return Nr
            },
            cubic: function() {
                return Ar
            },
            sin: function() {
                return jr
            },
            exp: function() {
                return Dr
            },
            circle: function() {
                return Ir
            },
            elastic: Rr,
            back: Lr,
            bounce: function() {
                return Ur
            }
        })
          , bs = ha.map({
            in: C,
            out: Sr,
            "in-out": Tr,
            "out-in": function(t) {
                return Tr(Sr(t))
            }
        });
        ha.ease = function(t) {
            var e = t.indexOf("-")
              , n = e >= 0 ? t.slice(0, e) : t
              , r = e >= 0 ? t.slice(e + 1) : "in";
            return n = ms.get(n) || ys,
            r = bs.get(r) || C,
            kr(r(n.apply(null, da.call(arguments, 1))))
        }
        ,
        ha.interpolateHcl = Fr,
        ha.interpolateHsl = qr,
        ha.interpolateLab = Hr,
        ha.interpolateRound = Br,
        ha.transform = function(t) {
            var e = ga.createElementNS(ha.ns.prefix.svg, "g");
            return (ha.transform = function(t) {
                if (null != t) {
                    e.setAttribute("transform", t);
                    var n = e.transform.baseVal.consolidate()
                }
                return new zr(n ? n.matrix : xs)
            }
            )(t)
        }
        ,
        zr.prototype.toString = function() {
            return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
        }
        ;
        var xs = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: 0,
            f: 0
        };
        ha.interpolateTransform = Qr,
        ha.layout = {},
        ha.layout.bundle = function() {
            return function(t) {
                for (var e = [], n = -1, r = t.length; ++n < r; )
                    e.push(eo(t[n]));
                return e
            }
        }
        ,
        ha.layout.chord = function() {
            function t() {
                var t, c, f, p, h, d = {}, v = [], g = ha.range(i), y = [];
                for (n = [],
                r = [],
                t = 0,
                p = -1; ++p < i; ) {
                    for (c = 0,
                    h = -1; ++h < i; )
                        c += o[p][h];
                    v.push(c),
                    y.push(ha.range(i)),
                    t += c
                }
                for (a && g.sort(function(t, e) {
                    return a(v[t], v[e])
                }),
                u && y.forEach(function(t, e) {
                    t.sort(function(t, n) {
                        return u(o[e][t], o[e][n])
                    })
                }),
                t = (za - l * i) / t,
                c = 0,
                p = -1; ++p < i; ) {
                    for (f = c,
                    h = -1; ++h < i; ) {
                        var m = g[p]
                          , b = y[m][h]
                          , x = o[m][b]
                          , _ = c
                          , w = c += x * t;
                        d[m + "-" + b] = {
                            index: m,
                            subindex: b,
                            startAngle: _,
                            endAngle: w,
                            value: x
                        }
                    }
                    r[m] = {
                        index: m,
                        startAngle: f,
                        endAngle: c,
                        value: v[m]
                    },
                    c += l
                }
                for (p = -1; ++p < i; )
                    for (h = p - 1; ++h < i; ) {
                        var C = d[p + "-" + h]
                          , E = d[h + "-" + p];
                        (C.value || E.value) && n.push(C.value < E.value ? {
                            source: E,
                            target: C
                        } : {
                            source: C,
                            target: E
                        })
                    }
                s && e()
            }
            function e() {
                n.sort(function(t, e) {
                    return s((t.source.value + t.target.value) / 2, (e.source.value + e.target.value) / 2)
                })
            }
            var n, r, o, i, a, u, s, c = {}, l = 0;
            return c.matrix = function(t) {
                return arguments.length ? (i = (o = t) && o.length,
                n = r = null,
                c) : o
            }
            ,
            c.padding = function(t) {
                return arguments.length ? (l = t,
                n = r = null,
                c) : l
            }
            ,
            c.sortGroups = function(t) {
                return arguments.length ? (a = t,
                n = r = null,
                c) : a
            }
            ,
            c.sortSubgroups = function(t) {
                return arguments.length ? (u = t,
                n = null,
                c) : u
            }
            ,
            c.sortChords = function(t) {
                return arguments.length ? (s = t,
                n && e(),
                c) : s
            }
            ,
            c.chords = function() {
                return n || t(),
                n
            }
            ,
            c.groups = function() {
                return r || t(),
                r
            }
            ,
            c
        }
        ,
        ha.layout.force = function() {
            function t(t) {
                return function(e, n, r, o) {
                    if (e.point !== t) {
                        var i = e.cx - t.x
                          , a = e.cy - t.y
                          , u = o - n
                          , s = i * i + a * a;
                        if (u * u / y < s) {
                            if (s < v) {
                                var c = e.charge / s;
                                t.px -= i * c,
                                t.py -= a * c
                            }
                            return !0
                        }
                        if (e.point && s && s < v) {
                            var c = e.pointCharge / s;
                            t.px -= i * c,
                            t.py -= a * c
                        }
                    }
                    return !e.charge
                }
            }
            function e(t) {
                t.px = ha.event.x,
                t.py = ha.event.y,
                s.resume()
            }
            var n, r, o, i, a, u, s = {}, c = ha.dispatch("start", "tick", "end"), l = [1, 1], f = .9, p = _s, h = ws, d = -30, v = Cs, g = .1, y = .64, m = [], b = [];
            return s.tick = function() {
                if ((o *= .99) < .005)
                    return n = null,
                    c.end({
                        type: "end",
                        alpha: o = 0
                    }),
                    !0;
                var e, r, s, p, h, v, y, x, _, w = m.length, C = b.length;
                for (r = 0; r < C; ++r)
                    s = b[r],
                    p = s.source,
                    h = s.target,
                    x = h.x - p.x,
                    _ = h.y - p.y,
                    (v = x * x + _ * _) && (v = o * a[r] * ((v = Math.sqrt(v)) - i[r]) / v,
                    x *= v,
                    _ *= v,
                    h.x -= x * (y = p.weight + h.weight ? p.weight / (p.weight + h.weight) : .5),
                    h.y -= _ * y,
                    p.x += x * (y = 1 - y),
                    p.y += _ * y);
                if ((y = o * g) && (x = l[0] / 2,
                _ = l[1] / 2,
                r = -1,
                y))
                    for (; ++r < w; )
                        s = m[r],
                        s.x += (x - s.x) * y,
                        s.y += (_ - s.y) * y;
                if (d)
                    for (so(e = ha.geom.quadtree(m), o, u),
                    r = -1; ++r < w; )
                        (s = m[r]).fixed || e.visit(t(s));
                for (r = -1; ++r < w; )
                    s = m[r],
                    s.fixed ? (s.x = s.px,
                    s.y = s.py) : (s.x -= (s.px - (s.px = s.x)) * f,
                    s.y -= (s.py - (s.py = s.y)) * f);
                c.tick({
                    type: "tick",
                    alpha: o
                })
            }
            ,
            s.nodes = function(t) {
                return arguments.length ? (m = t,
                s) : m
            }
            ,
            s.links = function(t) {
                return arguments.length ? (b = t,
                s) : b
            }
            ,
            s.size = function(t) {
                return arguments.length ? (l = t,
                s) : l
            }
            ,
            s.linkDistance = function(t) {
                return arguments.length ? (p = "function" == typeof t ? t : +t,
                s) : p
            }
            ,
            s.distance = s.linkDistance,
            s.linkStrength = function(t) {
                return arguments.length ? (h = "function" == typeof t ? t : +t,
                s) : h
            }
            ,
            s.friction = function(t) {
                return arguments.length ? (f = +t,
                s) : f
            }
            ,
            s.charge = function(t) {
                return arguments.length ? (d = "function" == typeof t ? t : +t,
                s) : d
            }
            ,
            s.chargeDistance = function(t) {
                return arguments.length ? (v = t * t,
                s) : Math.sqrt(v)
            }
            ,
            s.gravity = function(t) {
                return arguments.length ? (g = +t,
                s) : g
            }
            ,
            s.theta = function(t) {
                return arguments.length ? (y = t * t,
                s) : Math.sqrt(y)
            }
            ,
            s.alpha = function(t) {
                return arguments.length ? (t = +t,
                o ? t > 0 ? o = t : (n.c = null,
                n.t = NaN,
                n = null,
                c.end({
                    type: "end",
                    alpha: o = 0
                })) : t > 0 && (c.start({
                    type: "start",
                    alpha: o = t
                }),
                n = Rt(s.tick)),
                s) : o
            }
            ,
            s.start = function() {
                function t(t, r) {
                    if (!n) {
                        for (n = new Array(o),
                        s = 0; s < o; ++s)
                            n[s] = [];
                        for (s = 0; s < c; ++s) {
                            var i = b[s];
                            n[i.source.index].push(i.target),
                            n[i.target.index].push(i.source)
                        }
                    }
                    for (var a, u = n[e], s = -1, l = u.length; ++s < l; )
                        if (!isNaN(a = u[s][t]))
                            return a;
                    return Math.random() * r
                }
                var e, n, r, o = m.length, c = b.length, f = l[0], v = l[1];
                for (e = 0; e < o; ++e)
                    (r = m[e]).index = e,
                    r.weight = 0;
                for (e = 0; e < c; ++e)
                    r = b[e],
                    "number" == typeof r.source && (r.source = m[r.source]),
                    "number" == typeof r.target && (r.target = m[r.target]),
                    ++r.source.weight,
                    ++r.target.weight;
                for (e = 0; e < o; ++e)
                    r = m[e],
                    isNaN(r.x) && (r.x = t("x", f)),
                    isNaN(r.y) && (r.y = t("y", v)),
                    isNaN(r.px) && (r.px = r.x),
                    isNaN(r.py) && (r.py = r.y);
                if (i = [],
                "function" == typeof p)
                    for (e = 0; e < c; ++e)
                        i[e] = +p.call(this, b[e], e);
                else
                    for (e = 0; e < c; ++e)
                        i[e] = p;
                if (a = [],
                "function" == typeof h)
                    for (e = 0; e < c; ++e)
                        a[e] = +h.call(this, b[e], e);
                else
                    for (e = 0; e < c; ++e)
                        a[e] = h;
                if (u = [],
                "function" == typeof d)
                    for (e = 0; e < o; ++e)
                        u[e] = +d.call(this, m[e], e);
                else
                    for (e = 0; e < o; ++e)
                        u[e] = d;
                return s.resume()
            }
            ,
            s.resume = function() {
                return s.alpha(.1)
            }
            ,
            s.stop = function() {
                return s.alpha(0)
            }
            ,
            s.drag = function() {
                return r || (r = ha.behavior.drag().origin(C).on("dragstart.force", oo).on("drag.force", e).on("dragend.force", io)),
                arguments.length ? void this.on("mouseover.force", ao).on("mouseout.force", uo).call(r) : r
            }
            ,
            ha.rebind(s, c, "on")
        }
        ;
        var _s = 20
          , ws = 1
          , Cs = 1 / 0;
        ha.layout.hierarchy = function() {
            function t(o) {
                var i, a = [o], u = [];
                for (o.depth = 0; null != (i = a.pop()); )
                    if (u.push(i),
                    (c = n.call(t, i, i.depth)) && (s = c.length)) {
                        for (var s, c, l; --s >= 0; )
                            a.push(l = c[s]),
                            l.parent = i,
                            l.depth = i.depth + 1;
                        r && (i.value = 0),
                        i.children = c
                    } else
                        r && (i.value = +r.call(t, i, i.depth) || 0),
                        delete i.children;
                return fo(o, function(t) {
                    var n, o;
                    e && (n = t.children) && n.sort(e),
                    r && (o = t.parent) && (o.value += t.value)
                }),
                u
            }
            var e = vo
              , n = po
              , r = ho;
            return t.sort = function(n) {
                return arguments.length ? (e = n,
                t) : e
            }
            ,
            t.children = function(e) {
                return arguments.length ? (n = e,
                t) : n
            }
            ,
            t.value = function(e) {
                return arguments.length ? (r = e,
                t) : r
            }
            ,
            t.revalue = function(e) {
                return r && (lo(e, function(t) {
                    t.children && (t.value = 0)
                }),
                fo(e, function(e) {
                    var n;
                    e.children || (e.value = +r.call(t, e, e.depth) || 0),
                    (n = e.parent) && (n.value += e.value)
                })),
                e
            }
            ,
            t
        }
        ,
        ha.layout.partition = function() {
            function t(e, n, r, o) {
                var i = e.children;
                if (e.x = n,
                e.y = e.depth * o,
                e.dx = r,
                e.dy = o,
                i && (a = i.length)) {
                    var a, u, s, c = -1;
                    for (r = e.value ? r / e.value : 0; ++c < a; )
                        t(u = i[c], n, s = u.value * r, o),
                        n += s
                }
            }
            function e(t) {
                var n = t.children
                  , r = 0;
                if (n && (o = n.length))
                    for (var o, i = -1; ++i < o; )
                        r = Math.max(r, e(n[i]));
                return 1 + r
            }
            function n(n, i) {
                var a = r.call(this, n, i);
                return t(a[0], 0, o[0], o[1] / e(a[0])),
                a
            }
            var r = ha.layout.hierarchy()
              , o = [1, 1];
            return n.size = function(t) {
                return arguments.length ? (o = t,
                n) : o
            }
            ,
            co(n, r)
        }
        ,
        ha.layout.pie = function() {
            function t(a) {
                var u, s = a.length, c = a.map(function(n, r) {
                    return +e.call(t, n, r)
                }), l = +("function" == typeof r ? r.apply(this, arguments) : r), f = ("function" == typeof o ? o.apply(this, arguments) : o) - l, p = Math.min(Math.abs(f) / s, +("function" == typeof i ? i.apply(this, arguments) : i)), h = p * (f < 0 ? -1 : 1), d = ha.sum(c), v = d ? (f - s * h) / d : 0, g = ha.range(s), y = [];
                return null != n && g.sort(n === Es ? function(t, e) {
                    return c[e] - c[t]
                }
                : function(t, e) {
                    return n(a[t], a[e])
                }
                ),
                g.forEach(function(t) {
                    y[t] = {
                        data: a[t],
                        value: u = c[t],
                        startAngle: l,
                        endAngle: l += u * v + h,
                        padAngle: p
                    }
                }),
                y
            }
            var e = Number
              , n = Es
              , r = 0
              , o = za
              , i = 0;
            return t.value = function(n) {
                return arguments.length ? (e = n,
                t) : e
            }
            ,
            t.sort = function(e) {
                return arguments.length ? (n = e,
                t) : n
            }
            ,
            t.startAngle = function(e) {
                return arguments.length ? (r = e,
                t) : r
            }
            ,
            t.endAngle = function(e) {
                return arguments.length ? (o = e,
                t) : o
            }
            ,
            t.padAngle = function(e) {
                return arguments.length ? (i = e,
                t) : i
            }
            ,
            t
        }
        ;
        var Es = {};
        ha.layout.stack = function() {
            function t(u, s) {
                if (!(p = u.length))
                    return u;
                var c = u.map(function(n, r) {
                    return e.call(t, n, r)
                })
                  , l = c.map(function(e) {
                    return e.map(function(e, n) {
                        return [i.call(t, e, n), a.call(t, e, n)]
                    })
                })
                  , f = n.call(t, l, s);
                c = ha.permute(c, f),
                l = ha.permute(l, f);
                var p, h, d, v, g = r.call(t, l, s), y = c[0].length;
                for (d = 0; d < y; ++d)
                    for (o.call(t, c[0][d], v = g[d], l[0][d][1]),
                    h = 1; h < p; ++h)
                        o.call(t, c[h][d], v += l[h - 1][d][1], l[h][d][1]);
                return u
            }
            var e = C
              , n = xo
              , r = _o
              , o = bo
              , i = yo
              , a = mo;
            return t.values = function(n) {
                return arguments.length ? (e = n,
                t) : e
            }
            ,
            t.order = function(e) {
                return arguments.length ? (n = "function" == typeof e ? e : Ms.get(e) || xo,
                t) : n
            }
            ,
            t.offset = function(e) {
                return arguments.length ? (r = "function" == typeof e ? e : ks.get(e) || _o,
                t) : r
            }
            ,
            t.x = function(e) {
                return arguments.length ? (i = e,
                t) : i
            }
            ,
            t.y = function(e) {
                return arguments.length ? (a = e,
                t) : a
            }
            ,
            t.out = function(e) {
                return arguments.length ? (o = e,
                t) : o
            }
            ,
            t
        }
        ;
        var Ms = ha.map({
            "inside-out": function(t) {
                var e, n, r = t.length, o = t.map(wo), i = t.map(Co), a = ha.range(r).sort(function(t, e) {
                    return o[t] - o[e]
                }), u = 0, s = 0, c = [], l = [];
                for (e = 0; e < r; ++e)
                    n = a[e],
                    u < s ? (u += i[n],
                    c.push(n)) : (s += i[n],
                    l.push(n));
                return l.reverse().concat(c)
            },
            reverse: function(t) {
                return ha.range(t.length).reverse()
            },
            default: xo
        })
          , ks = ha.map({
            silhouette: function(t) {
                var e, n, r, o = t.length, i = t[0].length, a = [], u = 0, s = [];
                for (n = 0; n < i; ++n) {
                    for (e = 0,
                    r = 0; e < o; e++)
                        r += t[e][n][1];
                    r > u && (u = r),
                    a.push(r)
                }
                for (n = 0; n < i; ++n)
                    s[n] = (u - a[n]) / 2;
                return s
            },
            wiggle: function(t) {
                var e, n, r, o, i, a, u, s, c, l = t.length, f = t[0], p = f.length, h = [];
                for (h[0] = s = c = 0,
                n = 1; n < p; ++n) {
                    for (e = 0,
                    o = 0; e < l; ++e)
                        o += t[e][n][1];
                    for (e = 0,
                    i = 0,
                    u = f[n][0] - f[n - 1][0]; e < l; ++e) {
                        for (r = 0,
                        a = (t[e][n][1] - t[e][n - 1][1]) / (2 * u); r < e; ++r)
                            a += (t[r][n][1] - t[r][n - 1][1]) / u;
                        i += a * t[e][n][1]
                    }
                    h[n] = s -= o ? i / o * u : 0,
                    s < c && (c = s)
                }
                for (n = 0; n < p; ++n)
                    h[n] -= c;
                return h
            },
            expand: function(t) {
                var e, n, r, o = t.length, i = t[0].length, a = 1 / o, u = [];
                for (n = 0; n < i; ++n) {
                    for (e = 0,
                    r = 0; e < o; e++)
                        r += t[e][n][1];
                    if (r)
                        for (e = 0; e < o; e++)
                            t[e][n][1] /= r;
                    else
                        for (e = 0; e < o; e++)
                            t[e][n][1] = a
                }
                for (n = 0; n < i; ++n)
                    u[n] = 0;
                return u
            },
            zero: _o
        });
        ha.layout.histogram = function() {
            function t(t, i) {
                for (var a, u, s = [], c = t.map(n, this), l = r.call(this, c, i), f = o.call(this, l, c, i), i = -1, p = c.length, h = f.length - 1, d = e ? 1 : 1 / p; ++i < h; )
                    a = s[i] = [],
                    a.dx = f[i + 1] - (a.x = f[i]),
                    a.y = 0;
                if (h > 0)
                    for (i = -1; ++i < p; )
                        u = c[i],
                        u >= l[0] && u <= l[1] && (a = s[ha.bisect(f, u, 1, h) - 1],
                        a.y += d,
                        a.push(t[i]));
                return s
            }
            var e = !0
              , n = Number
              , r = So
              , o = Mo;
            return t.value = function(e) {
                return arguments.length ? (n = e,
                t) : n
            }
            ,
            t.range = function(e) {
                return arguments.length ? (r = Ot(e),
                t) : r
            }
            ,
            t.bins = function(e) {
                return arguments.length ? (o = "number" == typeof e ? function(t) {
                    return ko(t, e)
                }
                : Ot(e),
                t) : o
            }
            ,
            t.frequency = function(n) {
                return arguments.length ? (e = !!n,
                t) : e
            }
            ,
            t
        }
        ,
        ha.layout.pack = function() {
            function t(t, i) {
                var a = n.call(this, t, i)
                  , u = a[0]
                  , s = o[0]
                  , c = o[1]
                  , l = null == e ? Math.sqrt : "function" == typeof e ? e : function() {
                    return e
                }
                ;
                if (u.x = u.y = 0,
                fo(u, function(t) {
                    t.r = +l(t.value)
                }),
                fo(u, Po),
                r) {
                    var f = r * (e ? 1 : Math.max(2 * u.r / s, 2 * u.r / c)) / 2;
                    fo(u, function(t) {
                        t.r += f
                    }),
                    fo(u, Po),
                    fo(u, function(t) {
                        t.r -= f
                    })
                }
                return Io(u, s / 2, c / 2, e ? 1 : 1 / Math.max(2 * u.r / s, 2 * u.r / c)),
                a
            }
            var e, n = ha.layout.hierarchy().sort(To), r = 0, o = [1, 1];
            return t.size = function(e) {
                return arguments.length ? (o = e,
                t) : o
            }
            ,
            t.radius = function(n) {
                return arguments.length ? (e = null == n || "function" == typeof n ? n : +n,
                t) : e
            }
            ,
            t.padding = function(e) {
                return arguments.length ? (r = +e,
                t) : r
            }
            ,
            co(t, n)
        }
        ,
        ha.layout.tree = function() {
            function t(t, o) {
                var l = a.call(this, t, o)
                  , f = l[0]
                  , p = e(f);
                if (fo(p, n),
                p.parent.m = -p.z,
                lo(p, r),
                c)
                    lo(f, i);
                else {
                    var h = f
                      , d = f
                      , v = f;
                    lo(f, function(t) {
                        t.x < h.x && (h = t),
                        t.x > d.x && (d = t),
                        t.depth > v.depth && (v = t)
                    });
                    var g = u(h, d) / 2 - h.x
                      , y = s[0] / (d.x + u(d, h) / 2 + g)
                      , m = s[1] / (v.depth || 1);
                    lo(f, function(t) {
                        t.x = (t.x + g) * y,
                        t.y = t.depth * m
                    })
                }
                return l
            }
            function e(t) {
                for (var e, n = {
                    A: null,
                    children: [t]
                }, r = [n]; null != (e = r.pop()); )
                    for (var o, i = e.children, a = 0, u = i.length; a < u; ++a)
                        r.push((i[a] = o = {
                            _: i[a],
                            parent: e,
                            children: (o = i[a].children) && o.slice() || [],
                            A: null,
                            a: null,
                            z: 0,
                            m: 0,
                            c: 0,
                            s: 0,
                            t: null,
                            i: a
                        }).a = o);
                return n.children[0]
            }
            function n(t) {
                var e = t.children
                  , n = t.parent.children
                  , r = t.i ? n[t.i - 1] : null;
                if (e.length) {
                    Ho(t);
                    var i = (e[0].z + e[e.length - 1].z) / 2;
                    r ? (t.z = r.z + u(t._, r._),
                    t.m = t.z - i) : t.z = i
                } else
                    r && (t.z = r.z + u(t._, r._));
                t.parent.A = o(t, r, t.parent.A || n[0])
            }
            function r(t) {
                t._.x = t.z + t.parent.m,
                t.m += t.parent.m
            }
            function o(t, e, n) {
                if (e) {
                    for (var r, o = t, i = t, a = e, s = o.parent.children[0], c = o.m, l = i.m, f = a.m, p = s.m; a = Fo(a),
                    o = Uo(o),
                    a && o; )
                        s = Uo(s),
                        i = Fo(i),
                        i.a = t,
                        r = a.z + f - o.z - c + u(a._, o._),
                        r > 0 && (qo(Bo(a, t, n), t, r),
                        c += r,
                        l += r),
                        f += a.m,
                        c += o.m,
                        p += s.m,
                        l += i.m;
                    a && !Fo(i) && (i.t = a,
                    i.m += f - l),
                    o && !Uo(s) && (s.t = o,
                    s.m += c - p,
                    n = t)
                }
                return n
            }
            function i(t) {
                t.x *= s[0],
                t.y = t.depth * s[1]
            }
            var a = ha.layout.hierarchy().sort(null).value(null)
              , u = Lo
              , s = [1, 1]
              , c = null;
            return t.separation = function(e) {
                return arguments.length ? (u = e,
                t) : u
            }
            ,
            t.size = function(e) {
                return arguments.length ? (c = null == (s = e) ? i : null,
                t) : c ? null : s
            }
            ,
            t.nodeSize = function(e) {
                return arguments.length ? (c = null == (s = e) ? null : i,
                t) : c ? s : null
            }
            ,
            co(t, a)
        }
        ,
        ha.layout.cluster = function() {
            function t(t, i) {
                var a, u = e.call(this, t, i), s = u[0], c = 0;
                fo(s, function(t) {
                    var e = t.children;
                    e && e.length ? (t.x = Wo(e),
                    t.y = zo(e)) : (t.x = a ? c += n(t, a) : 0,
                    t.y = 0,
                    a = t)
                });
                var l = Vo(s)
                  , f = $o(s)
                  , p = l.x - n(l, f) / 2
                  , h = f.x + n(f, l) / 2;
                return fo(s, o ? function(t) {
                    t.x = (t.x - s.x) * r[0],
                    t.y = (s.y - t.y) * r[1]
                }
                : function(t) {
                    t.x = (t.x - p) / (h - p) * r[0],
                    t.y = (1 - (s.y ? t.y / s.y : 1)) * r[1]
                }
                ),
                u
            }
            var e = ha.layout.hierarchy().sort(null).value(null)
              , n = Lo
              , r = [1, 1]
              , o = !1;
            return t.separation = function(e) {
                return arguments.length ? (n = e,
                t) : n
            }
            ,
            t.size = function(e) {
                return arguments.length ? (o = null == (r = e),
                t) : o ? null : r
            }
            ,
            t.nodeSize = function(e) {
                return arguments.length ? (o = null != (r = e),
                t) : o ? r : null
            }
            ,
            co(t, e)
        }
        ,
        ha.layout.treemap = function() {
            function t(t, e) {
                for (var n, r, o = -1, i = t.length; ++o < i; )
                    r = (n = t[o]).value * (e < 0 ? 0 : e),
                    n.area = isNaN(r) || r <= 0 ? 0 : r
            }
            function e(n) {
                var i = n.children;
                if (i && i.length) {
                    var a, u, s, c = f(n), l = [], p = i.slice(), d = 1 / 0, v = "slice" === h ? c.dx : "dice" === h ? c.dy : "slice-dice" === h ? 1 & n.depth ? c.dy : c.dx : Math.min(c.dx, c.dy);
                    for (t(p, c.dx * c.dy / n.value),
                    l.area = 0; (s = p.length) > 0; )
                        l.push(a = p[s - 1]),
                        l.area += a.area,
                        "squarify" !== h || (u = r(l, v)) <= d ? (p.pop(),
                        d = u) : (l.area -= l.pop().area,
                        o(l, v, c, !1),
                        v = Math.min(c.dx, c.dy),
                        l.length = l.area = 0,
                        d = 1 / 0);
                    l.length && (o(l, v, c, !0),
                    l.length = l.area = 0),
                    i.forEach(e)
                }
            }
            function n(e) {
                var r = e.children;
                if (r && r.length) {
                    var i, a = f(e), u = r.slice(), s = [];
                    for (t(u, a.dx * a.dy / e.value),
                    s.area = 0; i = u.pop(); )
                        s.push(i),
                        s.area += i.area,
                        null != i.z && (o(s, i.z ? a.dx : a.dy, a, !u.length),
                        s.length = s.area = 0);
                    r.forEach(n)
                }
            }
            function r(t, e) {
                for (var n, r = t.area, o = 0, i = 1 / 0, a = -1, u = t.length; ++a < u; )
                    (n = t[a].area) && (n < i && (i = n),
                    n > o && (o = n));
                return r *= r,
                e *= e,
                r ? Math.max(e * o * d / r, r / (e * i * d)) : 1 / 0
            }
            function o(t, e, n, r) {
                var o, i = -1, a = t.length, u = n.x, c = n.y, l = e ? s(t.area / e) : 0;
                if (e == n.dx) {
                    for ((r || l > n.dy) && (l = n.dy); ++i < a; )
                        o = t[i],
                        o.x = u,
                        o.y = c,
                        o.dy = l,
                        u += o.dx = Math.min(n.x + n.dx - u, l ? s(o.area / l) : 0);
                    o.z = !0,
                    o.dx += n.x + n.dx - u,
                    n.y += l,
                    n.dy -= l
                } else {
                    for ((r || l > n.dx) && (l = n.dx); ++i < a; )
                        o = t[i],
                        o.x = u,
                        o.y = c,
                        o.dx = l,
                        c += o.dy = Math.min(n.y + n.dy - c, l ? s(o.area / l) : 0);
                    o.z = !1,
                    o.dy += n.y + n.dy - c,
                    n.x += l,
                    n.dx -= l
                }
            }
            function i(r) {
                var o = a || u(r)
                  , i = o[0];
                return i.x = i.y = 0,
                i.value ? (i.dx = c[0],
                i.dy = c[1]) : i.dx = i.dy = 0,
                a && u.revalue(i),
                t([i], i.dx * i.dy / i.value),
                (a ? n : e)(i),
                p && (a = o),
                o
            }
            var a, u = ha.layout.hierarchy(), s = Math.round, c = [1, 1], l = null, f = Yo, p = !1, h = "squarify", d = .5 * (1 + Math.sqrt(5));
            return i.size = function(t) {
                return arguments.length ? (c = t,
                i) : c
            }
            ,
            i.padding = function(t) {
                function e(e) {
                    var n = t.call(i, e, e.depth);
                    return null == n ? Yo(e) : Ko(e, "number" == typeof n ? [n, n, n, n] : n)
                }
                function n(e) {
                    return Ko(e, t)
                }
                if (!arguments.length)
                    return l;
                var r;
                return f = null == (l = t) ? Yo : "function" == (r = typeof t) ? e : "number" === r ? (t = [t, t, t, t],
                n) : n,
                i
            }
            ,
            i.round = function(t) {
                return arguments.length ? (s = t ? Math.round : Number,
                i) : s != Number
            }
            ,
            i.sticky = function(t) {
                return arguments.length ? (p = t,
                a = null,
                i) : p
            }
            ,
            i.ratio = function(t) {
                return arguments.length ? (d = t,
                i) : d
            }
            ,
            i.mode = function(t) {
                return arguments.length ? (h = t + "",
                i) : h
            }
            ,
            co(i, u)
        }
        ,
        ha.random = {
            normal: function(t, e) {
                var n = arguments.length;
                return n < 2 && (e = 1),
                n < 1 && (t = 0),
                function() {
                    var n, r, o;
                    do
                        n = 2 * Math.random() - 1,
                        r = 2 * Math.random() - 1,
                        o = n * n + r * r;
                    while (!o || o > 1);return t + e * n * Math.sqrt(-2 * Math.log(o) / o)
                }
            },
            logNormal: function() {
                var t = ha.random.normal.apply(ha, arguments);
                return function() {
                    return Math.exp(t())
                }
            },
            bates: function(t) {
                var e = ha.random.irwinHall(t);
                return function() {
                    return e() / t
                }
            },
            irwinHall: function(t) {
                return function() {
                    for (var e = 0, n = 0; n < t; n++)
                        e += Math.random();
                    return e
                }
            }
        },
        ha.scale = {};
        var Ss = {
            floor: C,
            ceil: C
        };
        ha.scale.linear = function() {
            return ei([0, 1], [0, 1], Er, !1)
        }
        ;
        var Ts = {
            s: 1,
            g: 1,
            p: 1,
            r: 1,
            e: 1
        };
        ha.scale.log = function() {
            return ci(ha.scale.linear().domain([0, 1]), 10, !0, [1, 10])
        }
        ;
        var Ns = ha.format(".0e")
          , As = {
            floor: function(t) {
                return -Math.ceil(-t)
            },
            ceil: function(t) {
                return -Math.floor(-t)
            }
        };
        ha.scale.pow = function() {
            return li(ha.scale.linear(), 1, [0, 1])
        }
        ,
        ha.scale.sqrt = function() {
            return ha.scale.pow().exponent(.5)
        }
        ,
        ha.scale.ordinal = function() {
            return pi([], {
                t: "range",
                a: [[]]
            })
        }
        ,
        ha.scale.category10 = function() {
            return ha.scale.ordinal().range(Os)
        }
        ,
        ha.scale.category20 = function() {
            return ha.scale.ordinal().range(Ps)
        }
        ,
        ha.scale.category20b = function() {
            return ha.scale.ordinal().range(js)
        }
        ,
        ha.scale.category20c = function() {
            return ha.scale.ordinal().range(Ds)
        }
        ;
        var Os = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(Et)
          , Ps = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(Et)
          , js = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(Et)
          , Ds = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(Et);
        ha.scale.quantile = function() {
            return hi([], [])
        }
        ,
        ha.scale.quantize = function() {
            return di(0, 1, [0, 1])
        }
        ,
        ha.scale.threshold = function() {
            return vi([.5], [0, 1])
        }
        ,
        ha.scale.identity = function() {
            return gi([0, 1])
        }
        ,
        ha.svg = {},
        ha.svg.arc = function() {
            function t() {
                var t = Math.max(0, +n.apply(this, arguments))
                  , c = Math.max(0, +r.apply(this, arguments))
                  , l = a.apply(this, arguments) - Va
                  , f = u.apply(this, arguments) - Va
                  , p = Math.abs(f - l)
                  , h = l > f ? 0 : 1;
                if (c < t && (d = c,
                c = t,
                t = d),
                p >= Wa)
                    return e(c, h) + (t ? e(t, 1 - h) : "") + "Z";
                var d, v, g, y, m, b, x, _, w, C, E, M, k = 0, S = 0, T = [];
                if ((y = (+s.apply(this, arguments) || 0) / 2) && (g = i === Is ? Math.sqrt(t * t + c * c) : +i.apply(this, arguments),
                h || (S *= -1),
                c && (S = at(g / c * Math.sin(y))),
                t && (k = at(g / t * Math.sin(y)))),
                c) {
                    m = c * Math.cos(l + S),
                    b = c * Math.sin(l + S),
                    x = c * Math.cos(f - S),
                    _ = c * Math.sin(f - S);
                    var N = Math.abs(f - l - 2 * S) <= Ba ? 0 : 1;
                    if (S && Ci(m, b, x, _) === h ^ N) {
                        var A = (l + f) / 2;
                        m = c * Math.cos(A),
                        b = c * Math.sin(A),
                        x = _ = null
                    }
                } else
                    m = b = 0;
                if (t) {
                    w = t * Math.cos(f - k),
                    C = t * Math.sin(f - k),
                    E = t * Math.cos(l + k),
                    M = t * Math.sin(l + k);
                    var O = Math.abs(l - f + 2 * k) <= Ba ? 0 : 1;
                    if (k && Ci(w, C, E, M) === 1 - h ^ O) {
                        var P = (l + f) / 2;
                        w = t * Math.cos(P),
                        C = t * Math.sin(P),
                        E = M = null
                    }
                } else
                    w = C = 0;
                if (p > qa && (d = Math.min(Math.abs(c - t) / 2, +o.apply(this, arguments))) > .001) {
                    v = t < c ^ h ? 0 : 1;
                    var j = d
                      , D = d;
                    if (p < Ba) {
                        var I = null == E ? [w, C] : null == x ? [m, b] : Fn([m, b], [E, M], [x, _], [w, C])
                          , R = m - I[0]
                          , L = b - I[1]
                          , U = x - I[0]
                          , F = _ - I[1]
                          , q = 1 / Math.sin(Math.acos((R * U + L * F) / (Math.sqrt(R * R + L * L) * Math.sqrt(U * U + F * F))) / 2)
                          , H = Math.sqrt(I[0] * I[0] + I[1] * I[1]);
                        D = Math.min(d, (t - H) / (q - 1)),
                        j = Math.min(d, (c - H) / (q + 1))
                    }
                    if (null != x) {
                        var B = Ei(null == E ? [w, C] : [E, M], [m, b], c, j, h)
                          , z = Ei([x, _], [w, C], c, j, h);
                        d === j ? T.push("M", B[0], "A", j, ",", j, " 0 0,", v, " ", B[1], "A", c, ",", c, " 0 ", 1 - h ^ Ci(B[1][0], B[1][1], z[1][0], z[1][1]), ",", h, " ", z[1], "A", j, ",", j, " 0 0,", v, " ", z[0]) : T.push("M", B[0], "A", j, ",", j, " 0 1,", v, " ", z[0])
                    } else
                        T.push("M", m, ",", b);
                    if (null != E) {
                        var W = Ei([m, b], [E, M], t, -D, h)
                          , V = Ei([w, C], null == x ? [m, b] : [x, _], t, -D, h);
                        d === D ? T.push("L", V[0], "A", D, ",", D, " 0 0,", v, " ", V[1], "A", t, ",", t, " 0 ", h ^ Ci(V[1][0], V[1][1], W[1][0], W[1][1]), ",", 1 - h, " ", W[1], "A", D, ",", D, " 0 0,", v, " ", W[0]) : T.push("L", V[0], "A", D, ",", D, " 0 0,", v, " ", W[0])
                    } else
                        T.push("L", w, ",", C)
                } else
                    T.push("M", m, ",", b),
                    null != x && T.push("A", c, ",", c, " 0 ", N, ",", h, " ", x, ",", _),
                    T.push("L", w, ",", C),
                    null != E && T.push("A", t, ",", t, " 0 ", O, ",", 1 - h, " ", E, ",", M);
                return T.push("Z"),
                T.join("")
            }
            function e(t, e) {
                return "M0," + t + "A" + t + "," + t + " 0 1," + e + " 0," + -t + "A" + t + "," + t + " 0 1," + e + " 0," + t
            }
            var n = mi
              , r = bi
              , o = yi
              , i = Is
              , a = xi
              , u = _i
              , s = wi;
            return t.innerRadius = function(e) {
                return arguments.length ? (n = Ot(e),
                t) : n
            }
            ,
            t.outerRadius = function(e) {
                return arguments.length ? (r = Ot(e),
                t) : r
            }
            ,
            t.cornerRadius = function(e) {
                return arguments.length ? (o = Ot(e),
                t) : o
            }
            ,
            t.padRadius = function(e) {
                return arguments.length ? (i = e == Is ? Is : Ot(e),
                t) : i
            }
            ,
            t.startAngle = function(e) {
                return arguments.length ? (a = Ot(e),
                t) : a
            }
            ,
            t.endAngle = function(e) {
                return arguments.length ? (u = Ot(e),
                t) : u
            }
            ,
            t.padAngle = function(e) {
                return arguments.length ? (s = Ot(e),
                t) : s
            }
            ,
            t.centroid = function() {
                var t = (+n.apply(this, arguments) + +r.apply(this, arguments)) / 2
                  , e = (+a.apply(this, arguments) + +u.apply(this, arguments)) / 2 - Va;
                return [Math.cos(e) * t, Math.sin(e) * t]
            }
            ,
            t
        }
        ;
        var Is = "auto";
        ha.svg.line = function() {
            return Mi(C)
        }
        ;
        var Rs = ha.map({
            linear: ki,
            "linear-closed": Si,
            step: Ti,
            "step-before": Ni,
            "step-after": Ai,
            basis: Ri,
            "basis-open": Li,
            "basis-closed": Ui,
            bundle: Fi,
            cardinal: ji,
            "cardinal-open": Oi,
            "cardinal-closed": Pi,
            monotone: Vi
        });
        Rs.forEach(function(t, e) {
            e.key = t,
            e.closed = /-closed$/.test(t)
        });
        var Ls = [0, 2 / 3, 1 / 3, 0]
          , Us = [0, 1 / 3, 2 / 3, 0]
          , Fs = [0, 1 / 6, 2 / 3, 1 / 6];
        ha.svg.line.radial = function() {
            var t = Mi($i);
            return t.radius = t.x,
            delete t.x,
            t.angle = t.y,
            delete t.y,
            t
        }
        ,
        Ni.reverse = Ai,
        Ai.reverse = Ni,
        ha.svg.area = function() {
            return Yi(C)
        }
        ,
        ha.svg.area.radial = function() {
            var t = Yi($i);
            return t.radius = t.x,
            delete t.x,
            t.innerRadius = t.x0,
            delete t.x0,
            t.outerRadius = t.x1,
            delete t.x1,
            t.angle = t.y,
            delete t.y,
            t.startAngle = t.y0,
            delete t.y0,
            t.endAngle = t.y1,
            delete t.y1,
            t
        }
        ,
        ha.svg.chord = function() {
            function t(t, u) {
                var s = e(this, i, t, u)
                  , c = e(this, a, t, u);
                return "M" + s.p0 + r(s.r, s.p1, s.a1 - s.a0) + (n(s, c) ? o(s.r, s.p1, s.r, s.p0) : o(s.r, s.p1, c.r, c.p0) + r(c.r, c.p1, c.a1 - c.a0) + o(c.r, c.p1, s.r, s.p0)) + "Z"
            }
            function e(t, e, n, r) {
                var o = e.call(t, n, r)
                  , i = u.call(t, o, r)
                  , a = s.call(t, o, r) - Va
                  , l = c.call(t, o, r) - Va;
                return {
                    r: i,
                    a0: a,
                    a1: l,
                    p0: [i * Math.cos(a), i * Math.sin(a)],
                    p1: [i * Math.cos(l), i * Math.sin(l)]
                }
            }
            function n(t, e) {
                return t.a0 == e.a0 && t.a1 == e.a1
            }
            function r(t, e, n) {
                return "A" + t + "," + t + " 0 " + +(n > Ba) + ",1 " + e
            }
            function o(t, e, n, r) {
                return "Q 0,0 " + r
            }
            var i = En
              , a = Mn
              , u = Ki
              , s = xi
              , c = _i;
            return t.radius = function(e) {
                return arguments.length ? (u = Ot(e),
                t) : u
            }
            ,
            t.source = function(e) {
                return arguments.length ? (i = Ot(e),
                t) : i
            }
            ,
            t.target = function(e) {
                return arguments.length ? (a = Ot(e),
                t) : a
            }
            ,
            t.startAngle = function(e) {
                return arguments.length ? (s = Ot(e),
                t) : s
            }
            ,
            t.endAngle = function(e) {
                return arguments.length ? (c = Ot(e),
                t) : c
            }
            ,
            t
        }
        ,
        ha.svg.diagonal = function() {
            function t(t, o) {
                var i = e.call(this, t, o)
                  , a = n.call(this, t, o)
                  , u = (i.y + a.y) / 2
                  , s = [i, {
                    x: i.x,
                    y: u
                }, {
                    x: a.x,
                    y: u
                }, a];
                return s = s.map(r),
                "M" + s[0] + "C" + s[1] + " " + s[2] + " " + s[3]
            }
            var e = En
              , n = Mn
              , r = Xi;
            return t.source = function(n) {
                return arguments.length ? (e = Ot(n),
                t) : e
            }
            ,
            t.target = function(e) {
                return arguments.length ? (n = Ot(e),
                t) : n
            }
            ,
            t.projection = function(e) {
                return arguments.length ? (r = e,
                t) : r
            }
            ,
            t
        }
        ,
        ha.svg.diagonal.radial = function() {
            var t = ha.svg.diagonal()
              , e = Xi
              , n = t.projection;
            return t.projection = function(t) {
                return arguments.length ? n(Ji(e = t)) : e
            }
            ,
            t
        }
        ,
        ha.svg.symbol = function() {
            function t(t, r) {
                return (qs.get(e.call(this, t, r)) || Zi)(n.call(this, t, r))
            }
            var e = Qi
              , n = Gi;
            return t.type = function(n) {
                return arguments.length ? (e = Ot(n),
                t) : e
            }
            ,
            t.size = function(e) {
                return arguments.length ? (n = Ot(e),
                t) : n
            }
            ,
            t
        }
        ;
        var qs = ha.map({
            circle: Zi,
            cross: function(t) {
                var e = Math.sqrt(t / 5) / 2;
                return "M" + -3 * e + "," + -e + "H" + -e + "V" + -3 * e + "H" + e + "V" + -e + "H" + 3 * e + "V" + e + "H" + e + "V" + 3 * e + "H" + -e + "V" + e + "H" + -3 * e + "Z"
            },
            diamond: function(t) {
                var e = Math.sqrt(t / (2 * Bs))
                  , n = e * Bs;
                return "M0," + -e + "L" + n + ",0 0," + e + " " + -n + ",0Z"
            },
            square: function(t) {
                var e = Math.sqrt(t) / 2;
                return "M" + -e + "," + -e + "L" + e + "," + -e + " " + e + "," + e + " " + -e + "," + e + "Z"
            },
            "triangle-down": function(t) {
                var e = Math.sqrt(t / Hs)
                  , n = e * Hs / 2;
                return "M0," + n + "L" + e + "," + -n + " " + -e + "," + -n + "Z"
            },
            "triangle-up": function(t) {
                var e = Math.sqrt(t / Hs)
                  , n = e * Hs / 2;
                return "M0," + -n + "L" + e + "," + n + " " + -e + "," + n + "Z"
            }
        });
        ha.svg.symbolTypes = qs.keys();
        var Hs = Math.sqrt(3)
          , Bs = Math.tan(30 * $a);
        Pa.transition = function(t) {
            for (var e, n, r = zs || ++Ys, o = oa(t), i = [], a = Ws || {
                time: Date.now(),
                ease: Or,
                delay: 0,
                duration: 150
            }, u = -1, s = this.length; ++u < s; ) {
                i.push(e = []);
                for (var c = this[u], l = -1, f = c.length; ++l < f; )
                    (n = c[l]) && ia(n, l, o, r, a),
                    e.push(n)
            }
            return ea(i, o, r)
        }
        ,
        Pa.interrupt = function(t) {
            return this.each(null == t ? Vs : ta(oa(t)))
        }
        ;
        var zs, Ws, Vs = ta(oa()), $s = [], Ys = 0;
        $s.call = Pa.call,
        $s.empty = Pa.empty,
        $s.node = Pa.node,
        $s.size = Pa.size,
        ha.transition = function(t, e) {
            return t && t.transition ? zs ? t.transition(e) : t : ha.selection().transition(t)
        }
        ,
        ha.transition.prototype = $s,
        $s.select = function(t) {
            var e, n, r, o = this.id, i = this.namespace, a = [];
            t = j(t);
            for (var u = -1, s = this.length; ++u < s; ) {
                a.push(e = []);
                for (var c = this[u], l = -1, f = c.length; ++l < f; )
                    (r = c[l]) && (n = t.call(r, r.__data__, l, u)) ? ("__data__"in r && (n.__data__ = r.__data__),
                    ia(n, l, i, o, r[i][o]),
                    e.push(n)) : e.push(null)
            }
            return ea(a, i, o)
        }
        ,
        $s.selectAll = function(t) {
            var e, n, r, o, i, a = this.id, u = this.namespace, s = [];
            t = D(t);
            for (var c = -1, l = this.length; ++c < l; )
                for (var f = this[c], p = -1, h = f.length; ++p < h; )
                    if (r = f[p]) {
                        i = r[u][a],
                        n = t.call(r, r.__data__, p, c),
                        s.push(e = []);
                        for (var d = -1, v = n.length; ++d < v; )
                            (o = n[d]) && ia(o, d, u, a, i),
                            e.push(o)
                    }
            return ea(s, u, a)
        }
        ,
        $s.filter = function(t) {
            var e, n, r, o = [];
            "function" != typeof t && (t = $(t));
            for (var i = 0, a = this.length; i < a; i++) {
                o.push(e = []);
                for (var n = this[i], u = 0, s = n.length; u < s; u++)
                    (r = n[u]) && t.call(r, r.__data__, u, i) && e.push(r)
            }
            return ea(o, this.namespace, this.id)
        }
        ,
        $s.tween = function(t, e) {
            var n = this.id
              , r = this.namespace;
            return arguments.length < 2 ? this.node()[r][n].tween.get(t) : K(this, null == e ? function(e) {
                e[r][n].tween.remove(t)
            }
            : function(o) {
                o[r][n].tween.set(t, e)
            }
            )
        }
        ,
        $s.attr = function(t, e) {
            function n() {
                this.removeAttribute(u)
            }
            function r() {
                this.removeAttributeNS(u.space, u.local)
            }
            function o(t) {
                return null == t ? n : (t += "",
                function() {
                    var e, n = this.getAttribute(u);
                    return n !== t && (e = a(n, t),
                    function(t) {
                        this.setAttribute(u, e(t))
                    }
                    )
                }
                )
            }
            function i(t) {
                return null == t ? r : (t += "",
                function() {
                    var e, n = this.getAttributeNS(u.space, u.local);
                    return n !== t && (e = a(n, t),
                    function(t) {
                        this.setAttributeNS(u.space, u.local, e(t))
                    }
                    )
                }
                )
            }
            if (arguments.length < 2) {
                for (e in t)
                    this.attr(e, t[e]);
                return this
            }
            var a = "transform" == t ? Qr : Er
              , u = ha.ns.qualify(t);
            return na(this, "attr." + t, e, u.local ? i : o)
        }
        ,
        $s.attrTween = function(t, e) {
            function n(t, n) {
                var r = e.call(this, t, n, this.getAttribute(o));
                return r && function(t) {
                    this.setAttribute(o, r(t))
                }
            }
            function r(t, n) {
                var r = e.call(this, t, n, this.getAttributeNS(o.space, o.local));
                return r && function(t) {
                    this.setAttributeNS(o.space, o.local, r(t))
                }
            }
            var o = ha.ns.qualify(t);
            return this.tween("attr." + t, o.local ? r : n)
        }
        ,
        $s.style = function(t, e, n) {
            function r() {
                this.style.removeProperty(t)
            }
            function o(e) {
                return null == e ? r : (e += "",
                function() {
                    var r, o = a(this).getComputedStyle(this, null).getPropertyValue(t);
                    return o !== e && (r = Er(o, e),
                    function(e) {
                        this.style.setProperty(t, r(e), n)
                    }
                    )
                }
                )
            }
            var i = arguments.length;
            if (i < 3) {
                if ("string" != typeof t) {
                    i < 2 && (e = "");
                    for (n in t)
                        this.style(n, t[n], e);
                    return this
                }
                n = ""
            }
            return na(this, "style." + t, e, o)
        }
        ,
        $s.styleTween = function(t, e, n) {
            function r(r, o) {
                var i = e.call(this, r, o, a(this).getComputedStyle(this, null).getPropertyValue(t));
                return i && function(e) {
                    this.style.setProperty(t, i(e), n)
                }
            }
            return arguments.length < 3 && (n = ""),
            this.tween("style." + t, r)
        }
        ,
        $s.text = function(t) {
            return na(this, "text", t, ra)
        }
        ,
        $s.remove = function() {
            var t = this.namespace;
            return this.each("end.transition", function() {
                var e;
                this[t].count < 2 && (e = this.parentNode) && e.removeChild(this)
            })
        }
        ,
        $s.ease = function(t) {
            var e = this.id
              , n = this.namespace;
            return arguments.length < 1 ? this.node()[n][e].ease : ("function" != typeof t && (t = ha.ease.apply(ha, arguments)),
            K(this, function(r) {
                r[n][e].ease = t
            }))
        }
        ,
        $s.delay = function(t) {
            var e = this.id
              , n = this.namespace;
            return arguments.length < 1 ? this.node()[n][e].delay : K(this, "function" == typeof t ? function(r, o, i) {
                r[n][e].delay = +t.call(r, r.__data__, o, i)
            }
            : (t = +t,
            function(r) {
                r[n][e].delay = t
            }
            ))
        }
        ,
        $s.duration = function(t) {
            var e = this.id
              , n = this.namespace;
            return arguments.length < 1 ? this.node()[n][e].duration : K(this, "function" == typeof t ? function(r, o, i) {
                r[n][e].duration = Math.max(1, t.call(r, r.__data__, o, i))
            }
            : (t = Math.max(1, t),
            function(r) {
                r[n][e].duration = t
            }
            ))
        }
        ,
        $s.each = function(t, e) {
            var n = this.id
              , r = this.namespace;
            if (arguments.length < 2) {
                var o = Ws
                  , i = zs;
                try {
                    zs = n,
                    K(this, function(e, o, i) {
                        Ws = e[r][n],
                        t.call(e, e.__data__, o, i)
                    })
                } finally {
                    Ws = o,
                    zs = i
                }
            } else
                K(this, function(o) {
                    var i = o[r][n];
                    (i.event || (i.event = ha.dispatch("start", "end", "interrupt"))).on(t, e)
                });
            return this
        }
        ,
        $s.transition = function() {
            for (var t, e, n, r, o = this.id, i = ++Ys, a = this.namespace, u = [], s = 0, c = this.length; s < c; s++) {
                u.push(t = []);
                for (var e = this[s], l = 0, f = e.length; l < f; l++)
                    (n = e[l]) && (r = n[a][o],
                    ia(n, l, a, i, {
                        time: r.time,
                        ease: r.ease,
                        delay: r.delay + r.duration,
                        duration: r.duration
                    })),
                    t.push(n)
            }
            return ea(u, a, i)
        }
        ,
        ha.svg.axis = function() {
            function t(t) {
                t.each(function() {
                    var t, c = ha.select(this), l = this.__chart__ || n, f = this.__chart__ = n.copy(), p = null == s ? f.ticks ? f.ticks.apply(f, u) : f.domain() : s, h = null == e ? f.tickFormat ? f.tickFormat.apply(f, u) : C : e, d = c.selectAll(".tick").data(p, f), v = d.enter().insert("g", ".domain").attr("class", "tick").style("opacity", qa), g = ha.transition(d.exit()).style("opacity", qa).remove(), y = ha.transition(d.order()).style("opacity", 1), m = Math.max(o, 0) + a, b = Jo(f), x = c.selectAll(".domain").data([0]), _ = (x.enter().append("path").attr("class", "domain"),
                    ha.transition(x));
                    v.append("line"),
                    v.append("text");
                    var w, E, M, k, S = v.select("line"), T = y.select("line"), N = d.select("text").text(h), A = v.select("text"), O = y.select("text"), P = "top" === r || "left" === r ? -1 : 1;
                    if ("bottom" === r || "top" === r ? (t = aa,
                    w = "x",
                    M = "y",
                    E = "x2",
                    k = "y2",
                    N.attr("dy", P < 0 ? "0em" : ".71em").style("text-anchor", "middle"),
                    _.attr("d", "M" + b[0] + "," + P * i + "V0H" + b[1] + "V" + P * i)) : (t = ua,
                    w = "y",
                    M = "x",
                    E = "y2",
                    k = "x2",
                    N.attr("dy", ".32em").style("text-anchor", P < 0 ? "end" : "start"),
                    _.attr("d", "M" + P * i + "," + b[0] + "H0V" + b[1] + "H" + P * i)),
                    S.attr(k, P * o),
                    A.attr(M, P * m),
                    T.attr(E, 0).attr(k, P * o),
                    O.attr(w, 0).attr(M, P * m),
                    f.rangeBand) {
                        var j = f
                          , D = j.rangeBand() / 2;
                        l = f = function(t) {
                            return j(t) + D
                        }
                    } else
                        l.rangeBand ? l = f : g.call(t, f, l);
                    v.call(t, l, f),
                    y.call(t, f, f)
                })
            }
            var e, n = ha.scale.linear(), r = Ks, o = 6, i = 6, a = 3, u = [10], s = null;
            return t.scale = function(e) {
                return arguments.length ? (n = e,
                t) : n
            }
            ,
            t.orient = function(e) {
                return arguments.length ? (r = e in Xs ? e + "" : Ks,
                t) : r
            }
            ,
            t.ticks = function() {
                return arguments.length ? (u = va(arguments),
                t) : u
            }
            ,
            t.tickValues = function(e) {
                return arguments.length ? (s = e,
                t) : s
            }
            ,
            t.tickFormat = function(n) {
                return arguments.length ? (e = n,
                t) : e
            }
            ,
            t.tickSize = function(e) {
                var n = arguments.length;
                return n ? (o = +e,
                i = +arguments[n - 1],
                t) : o
            }
            ,
            t.innerTickSize = function(e) {
                return arguments.length ? (o = +e,
                t) : o
            }
            ,
            t.outerTickSize = function(e) {
                return arguments.length ? (i = +e,
                t) : i
            }
            ,
            t.tickPadding = function(e) {
                return arguments.length ? (a = +e,
                t) : a
            }
            ,
            t.tickSubdivide = function() {
                return arguments.length && t
            }
            ,
            t
        }
        ;
        var Ks = "bottom"
          , Xs = {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1
        };
        ha.svg.brush = function() {
            function t(i) {
                i.each(function() {
                    var i = ha.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", o).on("touchstart.brush", o)
                      , a = i.selectAll(".background").data([0]);
                    a.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"),
                    i.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                    var u = i.selectAll(".resize").data(v, C);
                    u.exit().remove(),
                    u.enter().append("g").attr("class", function(t) {
                        return "resize " + t
                    }).style("cursor", function(t) {
                        return Js[t]
                    }).append("rect").attr("x", function(t) {
                        return /[ew]$/.test(t) ? -3 : null
                    }).attr("y", function(t) {
                        return /^[ns]/.test(t) ? -3 : null
                    }).attr("width", 6).attr("height", 6).style("visibility", "hidden"),
                    u.style("display", t.empty() ? "none" : null);
                    var s, f = ha.transition(i), p = ha.transition(a);
                    c && (s = Jo(c),
                    p.attr("x", s[0]).attr("width", s[1] - s[0]),
                    n(f)),
                    l && (s = Jo(l),
                    p.attr("y", s[0]).attr("height", s[1] - s[0]),
                    r(f)),
                    e(f)
                })
            }
            function e(t) {
                t.selectAll(".resize").attr("transform", function(t) {
                    return "translate(" + f[+/e$/.test(t)] + "," + p[+/^s/.test(t)] + ")"
                })
            }
            function n(t) {
                t.select(".extent").attr("x", f[0]),
                t.selectAll(".extent,.n>rect,.s>rect").attr("width", f[1] - f[0])
            }
            function r(t) {
                t.select(".extent").attr("y", p[0]),
                t.selectAll(".extent,.e>rect,.w>rect").attr("height", p[1] - p[0])
            }
            function o() {
                function o() {
                    32 == ha.event.keyCode && (T || (b = null,
                    O[0] -= f[1],
                    O[1] -= p[1],
                    T = 2),
                    N())
                }
                function v() {
                    32 == ha.event.keyCode && 2 == T && (O[0] += f[1],
                    O[1] += p[1],
                    T = 0,
                    N())
                }
                function g() {
                    var t = ha.mouse(_)
                      , o = !1;
                    x && (t[0] += x[0],
                    t[1] += x[1]),
                    T || (ha.event.altKey ? (b || (b = [(f[0] + f[1]) / 2, (p[0] + p[1]) / 2]),
                    O[0] = f[+(t[0] < b[0])],
                    O[1] = p[+(t[1] < b[1])]) : b = null),
                    k && y(t, c, 0) && (n(E),
                    o = !0),
                    S && y(t, l, 1) && (r(E),
                    o = !0),
                    o && (e(E),
                    C({
                        type: "brush",
                        mode: T ? "move" : "resize"
                    }))
                }
                function y(t, e, n) {
                    var r, o, a = Jo(e), s = a[0], c = a[1], l = O[n], v = n ? p : f, g = v[1] - v[0];
                    if (T && (s -= l,
                    c -= g + l),
                    r = (n ? d : h) ? Math.max(s, Math.min(c, t[n])) : t[n],
                    T ? o = (r += l) + g : (b && (l = Math.max(s, Math.min(c, 2 * b[n] - r))),
                    l < r ? (o = r,
                    r = l) : o = l),
                    v[0] != r || v[1] != o)
                        return n ? u = null : i = null,
                        v[0] = r,
                        v[1] = o,
                        !0
                }
                function m() {
                    g(),
                    E.style("pointer-events", "all").selectAll(".resize").style("display", t.empty() ? "none" : null),
                    ha.select("body").style("cursor", null),
                    P.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null),
                    A(),
                    C({
                        type: "brushend"
                    })
                }
                var b, x, _ = this, w = ha.select(ha.event.target), C = s.of(_, arguments), E = ha.select(_), M = w.datum(), k = !/^(n|s)$/.test(M) && c, S = !/^(e|w)$/.test(M) && l, T = w.classed("extent"), A = tt(_), O = ha.mouse(_), P = ha.select(a(_)).on("keydown.brush", o).on("keyup.brush", v);
                if (ha.event.changedTouches ? P.on("touchmove.brush", g).on("touchend.brush", m) : P.on("mousemove.brush", g).on("mouseup.brush", m),
                E.interrupt().selectAll("*").interrupt(),
                T)
                    O[0] = f[0] - O[0],
                    O[1] = p[0] - O[1];
                else if (M) {
                    var j = +/w$/.test(M)
                      , D = +/^n/.test(M);
                    x = [f[1 - j] - O[0], p[1 - D] - O[1]],
                    O[0] = f[j],
                    O[1] = p[D]
                } else
                    ha.event.altKey && (b = O.slice());
                E.style("pointer-events", "none").selectAll(".resize").style("display", null),
                ha.select("body").style("cursor", w.style("cursor")),
                C({
                    type: "brushstart"
                }),
                g()
            }
            var i, u, s = O(t, "brushstart", "brush", "brushend"), c = null, l = null, f = [0, 0], p = [0, 0], h = !0, d = !0, v = Gs[0];
            return t.event = function(t) {
                t.each(function() {
                    var t = s.of(this, arguments)
                      , e = {
                        x: f,
                        y: p,
                        i: i,
                        j: u
                    }
                      , n = this.__chart__ || e;
                    this.__chart__ = e,
                    zs ? ha.select(this).transition().each("start.brush", function() {
                        i = n.i,
                        u = n.j,
                        f = n.x,
                        p = n.y,
                        t({
                            type: "brushstart"
                        })
                    }).tween("brush:brush", function() {
                        var n = Mr(f, e.x)
                          , r = Mr(p, e.y);
                        return i = u = null,
                        function(o) {
                            f = e.x = n(o),
                            p = e.y = r(o),
                            t({
                                type: "brush",
                                mode: "resize"
                            })
                        }
                    }).each("end.brush", function() {
                        i = e.i,
                        u = e.j,
                        t({
                            type: "brush",
                            mode: "resize"
                        }),
                        t({
                            type: "brushend"
                        })
                    }) : (t({
                        type: "brushstart"
                    }),
                    t({
                        type: "brush",
                        mode: "resize"
                    }),
                    t({
                        type: "brushend"
                    }))
                })
            }
            ,
            t.x = function(e) {
                return arguments.length ? (c = e,
                v = Gs[!c << 1 | !l],
                t) : c
            }
            ,
            t.y = function(e) {
                return arguments.length ? (l = e,
                v = Gs[!c << 1 | !l],
                t) : l
            }
            ,
            t.clamp = function(e) {
                return arguments.length ? (c && l ? (h = !!e[0],
                d = !!e[1]) : c ? h = !!e : l && (d = !!e),
                t) : c && l ? [h, d] : c ? h : l ? d : null
            }
            ,
            t.extent = function(e) {
                var n, r, o, a, s;
                return arguments.length ? (c && (n = e[0],
                r = e[1],
                l && (n = n[0],
                r = r[0]),
                i = [n, r],
                c.invert && (n = c(n),
                r = c(r)),
                r < n && (s = n,
                n = r,
                r = s),
                n == f[0] && r == f[1] || (f = [n, r])),
                l && (o = e[0],
                a = e[1],
                c && (o = o[1],
                a = a[1]),
                u = [o, a],
                l.invert && (o = l(o),
                a = l(a)),
                a < o && (s = o,
                o = a,
                a = s),
                o == p[0] && a == p[1] || (p = [o, a])),
                t) : (c && (i ? (n = i[0],
                r = i[1]) : (n = f[0],
                r = f[1],
                c.invert && (n = c.invert(n),
                r = c.invert(r)),
                r < n && (s = n,
                n = r,
                r = s))),
                l && (u ? (o = u[0],
                a = u[1]) : (o = p[0],
                a = p[1],
                l.invert && (o = l.invert(o),
                a = l.invert(a)),
                a < o && (s = o,
                o = a,
                a = s))),
                c && l ? [[n, o], [r, a]] : c ? [n, r] : l && [o, a])
            }
            ,
            t.clear = function() {
                return t.empty() || (f = [0, 0],
                p = [0, 0],
                i = u = null),
                t
            }
            ,
            t.empty = function() {
                return !!c && f[0] == f[1] || !!l && p[0] == p[1]
            }
            ,
            ha.rebind(t, s, "on")
        }
        ;
        var Js = {
            n: "ns-resize",
            e: "ew-resize",
            s: "ns-resize",
            w: "ew-resize",
            nw: "nwse-resize",
            ne: "nesw-resize",
            se: "nwse-resize",
            sw: "nesw-resize"
        }
          , Gs = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []]
          , Qs = yu.format = Cu.timeFormat
          , Zs = Qs.utc
          , tc = Zs("%Y-%m-%dT%H:%M:%S.%LZ");
        Qs.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? sa : tc,
        sa.parse = function(t) {
            var e = new Date(t);
            return isNaN(e) ? null : e
        }
        ,
        sa.toString = tc.toString,
        yu.second = Vt(function(t) {
            return new mu(1e3 * Math.floor(t / 1e3))
        }, function(t, e) {
            t.setTime(t.getTime() + 1e3 * Math.floor(e))
        }, function(t) {
            return t.getSeconds()
        }),
        yu.seconds = yu.second.range,
        yu.seconds.utc = yu.second.utc.range,
        yu.minute = Vt(function(t) {
            return new mu(6e4 * Math.floor(t / 6e4))
        }, function(t, e) {
            t.setTime(t.getTime() + 6e4 * Math.floor(e))
        }, function(t) {
            return t.getMinutes()
        }),
        yu.minutes = yu.minute.range,
        yu.minutes.utc = yu.minute.utc.range,
        yu.hour = Vt(function(t) {
            var e = t.getTimezoneOffset() / 60;
            return new mu(36e5 * (Math.floor(t / 36e5 - e) + e))
        }, function(t, e) {
            t.setTime(t.getTime() + 36e5 * Math.floor(e))
        }, function(t) {
            return t.getHours()
        }),
        yu.hours = yu.hour.range,
        yu.hours.utc = yu.hour.utc.range,
        yu.month = Vt(function(t) {
            return t = yu.day(t),
            t.setDate(1),
            t
        }, function(t, e) {
            t.setMonth(t.getMonth() + e)
        }, function(t) {
            return t.getMonth()
        }),
        yu.months = yu.month.range,
        yu.months.utc = yu.month.utc.range;
        var ec = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6]
          , nc = [[yu.second, 1], [yu.second, 5], [yu.second, 15], [yu.second, 30], [yu.minute, 1], [yu.minute, 5], [yu.minute, 15], [yu.minute, 30], [yu.hour, 1], [yu.hour, 3], [yu.hour, 6], [yu.hour, 12], [yu.day, 1], [yu.day, 2], [yu.week, 1], [yu.month, 1], [yu.month, 3], [yu.year, 1]]
          , rc = Qs.multi([[".%L", function(t) {
            return t.getMilliseconds()
        }
        ], [":%S", function(t) {
            return t.getSeconds()
        }
        ], ["%I:%M", function(t) {
            return t.getMinutes()
        }
        ], ["%I %p", function(t) {
            return t.getHours()
        }
        ], ["%a %d", function(t) {
            return t.getDay() && 1 != t.getDate()
        }
        ], ["%b %d", function(t) {
            return 1 != t.getDate()
        }
        ], ["%B", function(t) {
            return t.getMonth()
        }
        ], ["%Y", De]])
          , oc = {
            range: function(t, e, n) {
                return ha.range(Math.ceil(t / n) * n, +e, n).map(la)
            },
            floor: C,
            ceil: C
        };
        nc.year = yu.year,
        yu.scale = function() {
            return ca(ha.scale.linear(), nc, rc)
        }
        ;
        var ic = nc.map(function(t) {
            return [t[0].utc, t[1]]
        })
          , ac = Zs.multi([[".%L", function(t) {
            return t.getUTCMilliseconds()
        }
        ], [":%S", function(t) {
            return t.getUTCSeconds()
        }
        ], ["%I:%M", function(t) {
            return t.getUTCMinutes()
        }
        ], ["%I %p", function(t) {
            return t.getUTCHours()
        }
        ], ["%a %d", function(t) {
            return t.getUTCDay() && 1 != t.getUTCDate()
        }
        ], ["%b %d", function(t) {
            return 1 != t.getUTCDate()
        }
        ], ["%B", function(t) {
            return t.getUTCMonth()
        }
        ], ["%Y", De]]);
        ic.year = yu.year.utc,
        yu.scale.utc = function() {
            return ca(ha.scale.linear(), ic, ac)
        }
        ,
        ha.text = Pt(function(t) {
            return t.responseText
        }),
        ha.json = function(t, e) {
            return jt(t, "application/json", fa, e)
        }
        ,
        ha.html = function(t, e) {
            return jt(t, "text/html", pa, e)
        }
        ,
        ha.xml = Pt(function(t) {
            return t.responseXML
        }),
        this.d3 = ha,
        r = ha,
        o = "function" == typeof r ? r.call(e, n, e, t) : r,
        !(void 0 !== o && (t.exports = o))
    }()
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o(t) {
        function e(e) {
            e.on({
                "mouseover.tip": function(e) {
                    var r = t.mouse(b)
                      , o = r[0]
                      , a = r[1]
                      , f = u || o + c.left
                      , p = s || a - c.top;
                    m.selectAll("div." + n).remove(),
                    y = m.append("div").attr(l(n)(d)).style(i({
                        position: "absolute",
                        "z-index": 1001,
                        left: f + "px",
                        top: p + "px"
                    }, g)).html(function() {
                        return v(e)
                    })
                },
                "mousemove.tip": function(e) {
                    var n = t.mouse(b)
                      , r = n[0]
                      , o = n[1]
                      , i = u || r + c.left
                      , a = s || o - c.top;
                    y.style({
                        left: i + "px",
                        top: a + "px"
                    }).html(function() {
                        return v(e)
                    })
                },
                "mouseout.tip": function() {
                    return y.remove()
                }
            })
        }
        var n = arguments.length <= 1 || void 0 === arguments[1] ? "tooltip" : arguments[1]
          , r = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2]
          , o = i({}, p, r)
          , u = o.left
          , s = o.top
          , c = o.offset
          , h = o.root
          , d = {
            class: n
        }
          , v = function() {
            return ""
        }
          , g = {}
          , y = void 0
          , m = h || t.select("body")
          , b = m.node();
        return e.attr = function(t) {
            return (0,
            a.is)(Object, t) && (d = i({}, d, t)),
            this
        }
        ,
        e.style = function(t) {
            return (0,
            a.is)(Object, t) && (g = i({}, g, t)),
            this
        }
        ,
        e.text = function(t) {
            return v = f(t),
            this
        }
        ,
        e
    }
    var i = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    }
    ;
    e.__esModule = !0,
    e.default = o;
    var a = n(18)
      , u = n(134)
      , s = r(u)
      , c = s.default.default || s.default
      , l = c.prependClass
      , f = c.functor
      , p = {
        left: void 0,
        top: void 0,
        offset: {
            left: 0,
            top: 0
        },
        root: void 0
    }
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0;
    var o = n(135)
      , i = r(o)
      , a = n(68)
      , u = r(a);
    e.default = {
        prependClass: i.default,
        functor: u.default
    }
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o(t) {
        return (0,
        a.mapObjIndexed)(function(e, n) {
            if ("class" === n) {
                var r = function() {
                    var n = (0,
                    s.default)(e);
                    return {
                        v: function(e, r) {
                            var o = n(e, r);
                            return o !== t ? (0,
                            a.join)(" ", [t, o]) : o
                        }
                    }
                }();
                if ("object" === ("undefined" == typeof r ? "undefined" : i(r)))
                    return r.v
            }
            return e
        })
    }
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
    }
    ;
    e.__esModule = !0,
    e.default = o;
    var a = n(18)
      , u = n(68)
      , s = r(u)
}
, function(t, e, n) {
    var r, o;
    !function(i, a) {
        r = a,
        o = "function" == typeof r ? r.call(e, n, e, t) : r,
        !(void 0 !== o && (t.exports = o))
    }(this, function() {
        return function t(e, n) {
            var r = Array.isArray(n)
              , o = r && [] || {};
            return r ? (e = e || [],
            o = o.concat(e),
            n.forEach(function(n, r) {
                "undefined" == typeof o[r] ? o[r] = n : "object" == typeof n ? o[r] = t(e[r], n) : e.indexOf(n) === -1 && o.push(n)
            })) : (e && "object" == typeof e && Object.keys(e).forEach(function(t) {
                o[t] = e[t]
            }),
            Object.keys(n).forEach(function(r) {
                "object" == typeof n[r] && n[r] && e[r] ? o[r] = t(e[r], n[r]) : o[r] = n[r]
            })),
            o
        }
    })
}
, 69, 69, function(t, e) {
    "use strict";
    function n(t) {
        return t.replace(r, function(t, e) {
            return e.toUpperCase()
        })
    }
    var r = /-(.)/g;
    t.exports = n
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return o(t.replace(i, "ms-"))
    }
    var o = n(139)
      , i = /^-ms-/;
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    function r(t, e) {
        return !(!t || !e) && (t === e || !o(t) && (o(e) ? r(t, e.parentNode) : "contains"in t ? t.contains(e) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(e))))
    }
    var o = n(149);
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        var e = t.length;
        if (Array.isArray(t) || "object" != typeof t && "function" != typeof t ? a(!1) : void 0,
        "number" != typeof e ? a(!1) : void 0,
        0 === e || e - 1 in t ? void 0 : a(!1),
        "function" == typeof t.callee ? a(!1) : void 0,
        t.hasOwnProperty)
            try {
                return Array.prototype.slice.call(t)
            } catch (t) {}
        for (var n = Array(e), r = 0; r < e; r++)
            n[r] = t[r];
        return n
    }
    function o(t) {
        return !!t && ("object" == typeof t || "function" == typeof t) && "length"in t && !("setInterval"in t) && "number" != typeof t.nodeType && (Array.isArray(t) || "callee"in t || "item"in t)
    }
    function i(t) {
        return o(t) ? Array.isArray(t) ? t.slice() : r(t) : [t]
    }
    var a = n(1);
    t.exports = i
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        var e = t.match(l);
        return e && e[1].toLowerCase()
    }
    function o(t, e) {
        var n = c;
        c ? void 0 : s(!1);
        var o = r(t)
          , i = o && u(o);
        if (i) {
            n.innerHTML = i[1] + t + i[2];
            for (var l = i[0]; l--; )
                n = n.lastChild
        } else
            n.innerHTML = t;
        var f = n.getElementsByTagName("script");
        f.length && (e ? void 0 : s(!1),
        a(f).forEach(e));
        for (var p = Array.from(n.childNodes); n.lastChild; )
            n.removeChild(n.lastChild);
        return p
    }
    var i = n(6)
      , a = n(142)
      , u = n(144)
      , s = n(1)
      , c = i.canUseDOM ? document.createElement("div") : null
      , l = /^\s*<(\w+)/;
    t.exports = o
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return a ? void 0 : i(!1),
        p.hasOwnProperty(t) || (t = "*"),
        u.hasOwnProperty(t) || ("*" === t ? a.innerHTML = "<link />" : a.innerHTML = "<" + t + "></" + t + ">",
        u[t] = !a.firstChild),
        u[t] ? p[t] : null
    }
    var o = n(6)
      , i = n(1)
      , a = o.canUseDOM ? document.createElement("div") : null
      , u = {}
      , s = [1, '<select multiple="true">', "</select>"]
      , c = [1, "<table>", "</table>"]
      , l = [3, "<table><tbody><tr>", "</tr></tbody></table>"]
      , f = [1, '<svg xmlns="http://www.w3.org/2000/svg">', "</svg>"]
      , p = {
        "*": [1, "?<div>", "</div>"],
        area: [1, "<map>", "</map>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        param: [1, "<object>", "</object>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        optgroup: s,
        option: s,
        caption: c,
        colgroup: c,
        tbody: c,
        tfoot: c,
        thead: c,
        td: l,
        th: l
    }
      , h = ["circle", "clipPath", "defs", "ellipse", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "text", "tspan"];
    h.forEach(function(t) {
        p[t] = f,
        u[t] = !0
    }),
    t.exports = r
}
, function(t, e) {
    "use strict";
    function n(t) {
        return t.Window && t instanceof t.Window ? {
            x: t.pageXOffset || t.document.documentElement.scrollLeft,
            y: t.pageYOffset || t.document.documentElement.scrollTop
        } : {
            x: t.scrollLeft,
            y: t.scrollTop
        }
    }
    t.exports = n
}
, function(t, e) {
    "use strict";
    function n(t) {
        return t.replace(r, "-$1").toLowerCase()
    }
    var r = /([A-Z])/g;
    t.exports = n
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return o(t).replace(i, "-ms-")
    }
    var o = n(146)
      , i = /^ms-/;
    t.exports = r
}
, function(t, e) {
    "use strict";
    function n(t) {
        var e = t ? t.ownerDocument || t : document
          , n = e.defaultView || window;
        return !(!t || !("function" == typeof n.Node ? t instanceof n.Node : "object" == typeof t && "number" == typeof t.nodeType && "string" == typeof t.nodeName))
    }
    t.exports = n
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return o(t) && 3 == t.nodeType
    }
    var o = n(148);
    t.exports = r
}
, function(t, e) {
    "use strict";
    function n(t) {
        var e = {};
        return function(n) {
            return e.hasOwnProperty(n) || (e[n] = t.call(this, n)),
            e[n]
        }
    }
    t.exports = n
}
, function(t, e, n) {
    var r, o;
    !function(e, n) {
        "use strict";
        "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(t) {
            if (!t.document)
                throw new Error("jQuery requires a window with a document");
            return n(t)
        }
        : n(e)
    }("undefined" != typeof window ? window : this, function(n, i) {
        "use strict";
        function a(t, e, n) {
            n = n || Mt;
            var r, o, i = n.createElement("script");
            if (i.text = t,
            e)
                for (r in kt)
                    o = e[r] || e.getAttribute && e.getAttribute(r),
                    o && i.setAttribute(r, o);
            n.head.appendChild(i).parentNode.removeChild(i)
        }
        function u(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? yt[mt.call(t)] || "object" : typeof t
        }
        function s(t) {
            var e = !!t && "length"in t && t.length
              , n = u(t);
            return !Ct(t) && !Et(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }
        function c(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }
        function l(t, e, n) {
            return Ct(e) ? Tt.grep(t, function(t, r) {
                return !!e.call(t, r, t) !== n
            }) : e.nodeType ? Tt.grep(t, function(t) {
                return t === e !== n
            }) : "string" != typeof e ? Tt.grep(t, function(t) {
                return gt.call(e, t) > -1 !== n
            }) : Tt.filter(e, t, n)
        }
        function f(t, e) {
            for (; (t = t[e]) && 1 !== t.nodeType; )
                ;
            return t
        }
        function p(t) {
            var e = {};
            return Tt.each(t.match(Ft) || [], function(t, n) {
                e[n] = !0
            }),
            e
        }
        function h(t) {
            return t
        }
        function d(t) {
            throw t
        }
        function v(t, e, n, r) {
            var o;
            try {
                t && Ct(o = t.promise) ? o.call(t).done(e).fail(n) : t && Ct(o = t.then) ? o.call(t, e, n) : e.apply(void 0, [t].slice(r))
            } catch (t) {
                n.apply(void 0, [t])
            }
        }
        function g() {
            Mt.removeEventListener("DOMContentLoaded", g),
            n.removeEventListener("load", g),
            Tt.ready()
        }
        function y(t, e) {
            return e.toUpperCase()
        }
        function m(t) {
            return t.replace(zt, "ms-").replace(Wt, y)
        }
        function b() {
            this.expando = Tt.expando + b.uid++
        }
        function x(t) {
            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Kt.test(t) ? JSON.parse(t) : t)
        }
        function _(t, e, n) {
            var r;
            if (void 0 === n && 1 === t.nodeType)
                if (r = "data-" + e.replace(Xt, "-$&").toLowerCase(),
                n = t.getAttribute(r),
                "string" == typeof n) {
                    try {
                        n = x(n)
                    } catch (t) {}
                    Yt.set(t, e, n)
                } else
                    n = void 0;
            return n
        }
        function w(t, e, n, r) {
            var o, i, a = 20, u = r ? function() {
                return r.cur()
            }
            : function() {
                return Tt.css(t, e, "")
            }
            , s = u(), c = n && n[3] || (Tt.cssNumber[e] ? "" : "px"), l = t.nodeType && (Tt.cssNumber[e] || "px" !== c && +s) && Gt.exec(Tt.css(t, e));
            if (l && l[3] !== c) {
                for (s /= 2,
                c = c || l[3],
                l = +s || 1; a--; )
                    Tt.style(t, e, l + c),
                    (1 - i) * (1 - (i = u() / s || .5)) <= 0 && (a = 0),
                    l /= i;
                l *= 2,
                Tt.style(t, e, l + c),
                n = n || []
            }
            return n && (l = +l || +s || 0,
            o = n[1] ? l + (n[1] + 1) * n[2] : +n[2],
            r && (r.unit = c,
            r.start = l,
            r.end = o)),
            o
        }
        function C(t) {
            var e, n = t.ownerDocument, r = t.nodeName, o = re[r];
            return o ? o : (e = n.body.appendChild(n.createElement(r)),
            o = Tt.css(e, "display"),
            e.parentNode.removeChild(e),
            "none" === o && (o = "block"),
            re[r] = o,
            o)
        }
        function E(t, e) {
            for (var n, r, o = [], i = 0, a = t.length; i < a; i++)
                r = t[i],
                r.style && (n = r.style.display,
                e ? ("none" === n && (o[i] = $t.get(r, "display") || null,
                o[i] || (r.style.display = "")),
                "" === r.style.display && ne(r) && (o[i] = C(r))) : "none" !== n && (o[i] = "none",
                $t.set(r, "display", n)));
            for (i = 0; i < a; i++)
                null != o[i] && (t[i].style.display = o[i]);
            return t
        }
        function M(t, e) {
            var n;
            return n = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [],
            void 0 === e || e && c(t, e) ? Tt.merge([t], n) : n
        }
        function k(t, e) {
            for (var n = 0, r = t.length; n < r; n++)
                $t.set(t[n], "globalEval", !e || $t.get(e[n], "globalEval"))
        }
        function S(t, e, n, r, o) {
            for (var i, a, s, c, l, f, p = e.createDocumentFragment(), h = [], d = 0, v = t.length; d < v; d++)
                if (i = t[d],
                i || 0 === i)
                    if ("object" === u(i))
                        Tt.merge(h, i.nodeType ? [i] : i);
                    else if (se.test(i)) {
                        for (a = a || p.appendChild(e.createElement("div")),
                        s = (ie.exec(i) || ["", ""])[1].toLowerCase(),
                        c = ue[s] || ue._default,
                        a.innerHTML = c[1] + Tt.htmlPrefilter(i) + c[2],
                        f = c[0]; f--; )
                            a = a.lastChild;
                        Tt.merge(h, a.childNodes),
                        a = p.firstChild,
                        a.textContent = ""
                    } else
                        h.push(e.createTextNode(i));
            for (p.textContent = "",
            d = 0; i = h[d++]; )
                if (r && Tt.inArray(i, r) > -1)
                    o && o.push(i);
                else if (l = te(i),
                a = M(p.appendChild(i), "script"),
                l && k(a),
                n)
                    for (f = 0; i = a[f++]; )
                        ae.test(i.type || "") && n.push(i);
            return p
        }
        function T() {
            return !0
        }
        function N() {
            return !1
        }
        function A(t, e) {
            return t === O() == ("focus" === e)
        }
        function O() {
            try {
                return Mt.activeElement
            } catch (t) {}
        }
        function P(t, e, n, r, o, i) {
            var a, u;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n,
                n = void 0);
                for (u in e)
                    P(t, u, n, r, e[u], i);
                return t
            }
            if (null == r && null == o ? (o = n,
            r = n = void 0) : null == o && ("string" == typeof n ? (o = r,
            r = void 0) : (o = r,
            r = n,
            n = void 0)),
            o === !1)
                o = N;
            else if (!o)
                return t;
            return 1 === i && (a = o,
            o = function(t) {
                return Tt().off(t),
                a.apply(this, arguments)
            }
            ,
            o.guid = a.guid || (a.guid = Tt.guid++)),
            t.each(function() {
                Tt.event.add(this, e, o, r, n)
            })
        }
        function j(t, e, n) {
            return n ? ($t.set(t, e, !1),
            void Tt.event.add(t, e, {
                namespace: !1,
                handler: function(t) {
                    var r, o, i = $t.get(this, e);
                    if (1 & t.isTrigger && this[e]) {
                        if (i.length)
                            (Tt.event.special[e] || {}).delegateType && t.stopPropagation();
                        else if (i = ht.call(arguments),
                        $t.set(this, e, i),
                        r = n(this, e),
                        this[e](),
                        o = $t.get(this, e),
                        i !== o || r ? $t.set(this, e, !1) : o = {},
                        i !== o)
                            return t.stopImmediatePropagation(),
                            t.preventDefault(),
                            o.value
                    } else
                        i.length && ($t.set(this, e, {
                            value: Tt.event.trigger(Tt.extend(i[0], Tt.Event.prototype), i.slice(1), this)
                        }),
                        t.stopImmediatePropagation())
                }
            })) : void (void 0 === $t.get(t, e) && Tt.event.add(t, e, T))
        }
        function D(t, e) {
            return c(t, "table") && c(11 !== e.nodeType ? e : e.firstChild, "tr") ? Tt(t).children("tbody")[0] || t : t
        }
        function I(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type,
            t
        }
        function R(t) {
            return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"),
            t
        }
        function L(t, e) {
            var n, r, o, i, a, u, s;
            if (1 === e.nodeType) {
                if ($t.hasData(t) && (i = $t.get(t),
                s = i.events)) {
                    $t.remove(e, "handle events");
                    for (o in s)
                        for (n = 0,
                        r = s[o].length; n < r; n++)
                            Tt.event.add(e, o, s[o][n])
                }
                Yt.hasData(t) && (a = Yt.access(t),
                u = Tt.extend({}, a),
                Yt.set(e, u))
            }
        }
        function U(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && oe.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }
        function F(t, e, n, r) {
            e = dt(e);
            var o, i, u, s, c, l, f = 0, p = t.length, h = p - 1, d = e[0], v = Ct(d);
            if (v || p > 1 && "string" == typeof d && !wt.checkClone && he.test(d))
                return t.each(function(o) {
                    var i = t.eq(o);
                    v && (e[0] = d.call(this, o, i.html())),
                    F(i, e, n, r)
                });
            if (p && (o = S(e, t[0].ownerDocument, !1, t, r),
            i = o.firstChild,
            1 === o.childNodes.length && (o = i),
            i || r)) {
                for (u = Tt.map(M(o, "script"), I),
                s = u.length; f < p; f++)
                    c = o,
                    f !== h && (c = Tt.clone(c, !0, !0),
                    s && Tt.merge(u, M(c, "script"))),
                    n.call(t[f], c, f);
                if (s)
                    for (l = u[u.length - 1].ownerDocument,
                    Tt.map(u, R),
                    f = 0; f < s; f++)
                        c = u[f],
                        ae.test(c.type || "") && !$t.access(c, "globalEval") && Tt.contains(l, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? Tt._evalUrl && !c.noModule && Tt._evalUrl(c.src, {
                            nonce: c.nonce || c.getAttribute("nonce")
                        }, l) : a(c.textContent.replace(de, ""), c, l))
            }
            return t
        }
        function q(t, e, n) {
            for (var r, o = e ? Tt.filter(e, t) : t, i = 0; null != (r = o[i]); i++)
                n || 1 !== r.nodeType || Tt.cleanData(M(r)),
                r.parentNode && (n && te(r) && k(M(r, "script")),
                r.parentNode.removeChild(r));
            return t
        }
        function H(t, e, n) {
            var r, o, i, a, u = t.style;
            return n = n || ge(t),
            n && (a = n.getPropertyValue(e) || n[e],
            "" !== a || te(t) || (a = Tt.style(t, e)),
            !wt.pixelBoxStyles() && ve.test(a) && me.test(e) && (r = u.width,
            o = u.minWidth,
            i = u.maxWidth,
            u.minWidth = u.maxWidth = u.width = a,
            a = n.width,
            u.width = r,
            u.minWidth = o,
            u.maxWidth = i)),
            void 0 !== a ? a + "" : a
        }
        function B(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }
        function z(t) {
            for (var e = t[0].toUpperCase() + t.slice(1), n = be.length; n--; )
                if (t = be[n] + e,
                t in xe)
                    return t
        }
        function W(t) {
            var e = Tt.cssProps[t] || _e[t];
            return e ? e : t in xe ? t : _e[t] = z(t) || t
        }
        function V(t, e, n) {
            var r = Gt.exec(e);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e
        }
        function $(t, e, n, r, o, i) {
            var a = "width" === e ? 1 : 0
              , u = 0
              , s = 0;
            if (n === (r ? "border" : "content"))
                return 0;
            for (; a < 4; a += 2)
                "margin" === n && (s += Tt.css(t, n + Qt[a], !0, o)),
                r ? ("content" === n && (s -= Tt.css(t, "padding" + Qt[a], !0, o)),
                "margin" !== n && (s -= Tt.css(t, "border" + Qt[a] + "Width", !0, o))) : (s += Tt.css(t, "padding" + Qt[a], !0, o),
                "padding" !== n ? s += Tt.css(t, "border" + Qt[a] + "Width", !0, o) : u += Tt.css(t, "border" + Qt[a] + "Width", !0, o));
            return !r && i >= 0 && (s += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - i - s - u - .5)) || 0),
            s
        }
        function Y(t, e, n) {
            var r = ge(t)
              , o = !wt.boxSizingReliable() || n
              , i = o && "border-box" === Tt.css(t, "boxSizing", !1, r)
              , a = i
              , u = H(t, e, r)
              , s = "offset" + e[0].toUpperCase() + e.slice(1);
            if (ve.test(u)) {
                if (!n)
                    return u;
                u = "auto"
            }
            return (!wt.boxSizingReliable() && i || !wt.reliableTrDimensions() && c(t, "tr") || "auto" === u || !parseFloat(u) && "inline" === Tt.css(t, "display", !1, r)) && t.getClientRects().length && (i = "border-box" === Tt.css(t, "boxSizing", !1, r),
            a = s in t,
            a && (u = t[s])),
            u = parseFloat(u) || 0,
            u + $(t, e, n || (i ? "border" : "content"), a, r, u) + "px"
        }
        function K(t, e, n, r, o) {
            return new K.prototype.init(t,e,n,r,o)
        }
        function X() {
            Se && (Mt.hidden === !1 && n.requestAnimationFrame ? n.requestAnimationFrame(X) : n.setTimeout(X, Tt.fx.interval),
            Tt.fx.tick())
        }
        function J() {
            return n.setTimeout(function() {
                ke = void 0
            }),
            ke = Date.now()
        }
        function G(t, e) {
            var n, r = 0, o = {
                height: t
            };
            for (e = e ? 1 : 0; r < 4; r += 2 - e)
                n = Qt[r],
                o["margin" + n] = o["padding" + n] = t;
            return e && (o.opacity = o.width = t),
            o
        }
        function Q(t, e, n) {
            for (var r, o = (et.tweeners[e] || []).concat(et.tweeners["*"]), i = 0, a = o.length; i < a; i++)
                if (r = o[i].call(n, e, t))
                    return r
        }
        function Z(t, e, n) {
            var r, o, i, a, u, s, c, l, f = "width"in e || "height"in e, p = this, h = {}, d = t.style, v = t.nodeType && ne(t), g = $t.get(t, "fxshow");
            n.queue || (a = Tt._queueHooks(t, "fx"),
            null == a.unqueued && (a.unqueued = 0,
            u = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || u()
            }
            ),
            a.unqueued++,
            p.always(function() {
                p.always(function() {
                    a.unqueued--,
                    Tt.queue(t, "fx").length || a.empty.fire()
                })
            }));
            for (r in e)
                if (o = e[r],
                Te.test(o)) {
                    if (delete e[r],
                    i = i || "toggle" === o,
                    o === (v ? "hide" : "show")) {
                        if ("show" !== o || !g || void 0 === g[r])
                            continue;
                        v = !0
                    }
                    h[r] = g && g[r] || Tt.style(t, r)
                }
            if (s = !Tt.isEmptyObject(e),
            s || !Tt.isEmptyObject(h)) {
                f && 1 === t.nodeType && (n.overflow = [d.overflow, d.overflowX, d.overflowY],
                c = g && g.display,
                null == c && (c = $t.get(t, "display")),
                l = Tt.css(t, "display"),
                "none" === l && (c ? l = c : (E([t], !0),
                c = t.style.display || c,
                l = Tt.css(t, "display"),
                E([t]))),
                ("inline" === l || "inline-block" === l && null != c) && "none" === Tt.css(t, "float") && (s || (p.done(function() {
                    d.display = c
                }),
                null == c && (l = d.display,
                c = "none" === l ? "" : l)),
                d.display = "inline-block")),
                n.overflow && (d.overflow = "hidden",
                p.always(function() {
                    d.overflow = n.overflow[0],
                    d.overflowX = n.overflow[1],
                    d.overflowY = n.overflow[2]
                })),
                s = !1;
                for (r in h)
                    s || (g ? "hidden"in g && (v = g.hidden) : g = $t.access(t, "fxshow", {
                        display: c
                    }),
                    i && (g.hidden = !v),
                    v && E([t], !0),
                    p.done(function() {
                        v || E([t]),
                        $t.remove(t, "fxshow");
                        for (r in h)
                            Tt.style(t, r, h[r])
                    })),
                    s = Q(v ? g[r] : 0, r, p),
                    r in g || (g[r] = s.start,
                    v && (s.end = s.start,
                    s.start = 0))
            }
        }
        function tt(t, e) {
            var n, r, o, i, a;
            for (n in t)
                if (r = m(n),
                o = e[r],
                i = t[n],
                Array.isArray(i) && (o = i[1],
                i = t[n] = i[0]),
                n !== r && (t[r] = i,
                delete t[n]),
                a = Tt.cssHooks[r],
                a && "expand"in a) {
                    i = a.expand(i),
                    delete t[r];
                    for (n in i)
                        n in t || (t[n] = i[n],
                        e[n] = o)
                } else
                    e[r] = o
        }
        function et(t, e, n) {
            var r, o, i = 0, a = et.prefilters.length, u = Tt.Deferred().always(function() {
                delete s.elem
            }), s = function() {
                if (o)
                    return !1;
                for (var e = ke || J(), n = Math.max(0, c.startTime + c.duration - e), r = n / c.duration || 0, i = 1 - r, a = 0, s = c.tweens.length; a < s; a++)
                    c.tweens[a].run(i);
                return u.notifyWith(t, [c, i, n]),
                i < 1 && s ? n : (s || u.notifyWith(t, [c, 1, 0]),
                u.resolveWith(t, [c]),
                !1)
            }, c = u.promise({
                elem: t,
                props: Tt.extend({}, e),
                opts: Tt.extend(!0, {
                    specialEasing: {},
                    easing: Tt.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: ke || J(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var r = Tt.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(r),
                    r
                },
                stop: function(e) {
                    var n = 0
                      , r = e ? c.tweens.length : 0;
                    if (o)
                        return this;
                    for (o = !0; n < r; n++)
                        c.tweens[n].run(1);
                    return e ? (u.notifyWith(t, [c, 1, 0]),
                    u.resolveWith(t, [c, e])) : u.rejectWith(t, [c, e]),
                    this
                }
            }), l = c.props;
            for (tt(l, c.opts.specialEasing); i < a; i++)
                if (r = et.prefilters[i].call(c, t, l, c.opts))
                    return Ct(r.stop) && (Tt._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
                    r;
            return Tt.map(l, Q, c),
            Ct(c.opts.start) && c.opts.start.call(t, c),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
            Tt.fx.timer(Tt.extend(s, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })),
            c
        }
        function nt(t) {
            var e = t.match(Ft) || [];
            return e.join(" ")
        }
        function rt(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }
        function ot(t) {
            return Array.isArray(t) ? t : "string" == typeof t ? t.match(Ft) || [] : []
        }
        function it(t, e, n, r) {
            var o;
            if (Array.isArray(e))
                Tt.each(e, function(e, o) {
                    n || qe.test(t) ? r(t, o) : it(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, r)
                });
            else if (n || "object" !== u(e))
                r(t, e);
            else
                for (o in e)
                    it(t + "[" + o + "]", e[o], n, r)
        }
        function at(t) {
            return function(e, n) {
                "string" != typeof e && (n = e,
                e = "*");
                var r, o = 0, i = e.toLowerCase().match(Ft) || [];
                if (Ct(n))
                    for (; r = i[o++]; )
                        "+" === r[0] ? (r = r.slice(1) || "*",
                        (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
            }
        }
        function ut(t, e, n, r) {
            function o(u) {
                var s;
                return i[u] = !0,
                Tt.each(t[u] || [], function(t, u) {
                    var c = u(e, n, r);
                    return "string" != typeof c || a || i[c] ? a ? !(s = c) : void 0 : (e.dataTypes.unshift(c),
                    o(c),
                    !1)
                }),
                s
            }
            var i = {}
              , a = t === Qe;
            return o(e.dataTypes[0]) || !i["*"] && o("*")
        }
        function st(t, e) {
            var n, r, o = Tt.ajaxSettings.flatOptions || {};
            for (n in e)
                void 0 !== e[n] && ((o[n] ? t : r || (r = {}))[n] = e[n]);
            return r && Tt.extend(!0, t, r),
            t
        }
        function ct(t, e, n) {
            for (var r, o, i, a, u = t.contents, s = t.dataTypes; "*" === s[0]; )
                s.shift(),
                void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
            if (r)
                for (o in u)
                    if (u[o] && u[o].test(r)) {
                        s.unshift(o);
                        break
                    }
            if (s[0]in n)
                i = s[0];
            else {
                for (o in n) {
                    if (!s[0] || t.converters[o + " " + s[0]]) {
                        i = o;
                        break
                    }
                    a || (a = o)
                }
                i = i || a
            }
            if (i)
                return i !== s[0] && s.unshift(i),
                n[i]
        }
        function lt(t, e, n, r) {
            var o, i, a, u, s, c = {}, l = t.dataTypes.slice();
            if (l[1])
                for (a in t.converters)
                    c[a.toLowerCase()] = t.converters[a];
            for (i = l.shift(); i; )
                if (t.responseFields[i] && (n[t.responseFields[i]] = e),
                !s && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                s = i,
                i = l.shift())
                    if ("*" === i)
                        i = s;
                    else if ("*" !== s && s !== i) {
                        if (a = c[s + " " + i] || c["* " + i],
                        !a)
                            for (o in c)
                                if (u = o.split(" "),
                                u[1] === i && (a = c[s + " " + u[0]] || c["* " + u[0]])) {
                                    a === !0 ? a = c[o] : c[o] !== !0 && (i = u[0],
                                    l.unshift(u[1]));
                                    break
                                }
                        if (a !== !0)
                            if (a && t.throws)
                                e = a(e);
                            else
                                try {
                                    e = a(e)
                                } catch (t) {
                                    return {
                                        state: "parsererror",
                                        error: a ? t : "No conversion from " + s + " to " + i
                                    }
                                }
                    }
            return {
                state: "success",
                data: e
            }
        }
        var ft = []
          , pt = Object.getPrototypeOf
          , ht = ft.slice
          , dt = ft.flat ? function(t) {
            return ft.flat.call(t)
        }
        : function(t) {
            return ft.concat.apply([], t)
        }
          , vt = ft.push
          , gt = ft.indexOf
          , yt = {}
          , mt = yt.toString
          , bt = yt.hasOwnProperty
          , xt = bt.toString
          , _t = xt.call(Object)
          , wt = {}
          , Ct = function(t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        }
          , Et = function(t) {
            return null != t && t === t.window
        }
          , Mt = n.document
          , kt = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        }
          , St = "3.5.1"
          , Tt = function(t, e) {
            return new Tt.fn.init(t,e)
        };
        Tt.fn = Tt.prototype = {
            jquery: St,
            constructor: Tt,
            length: 0,
            toArray: function() {
                return ht.call(this)
            },
            get: function(t) {
                return null == t ? ht.call(this) : t < 0 ? this[t + this.length] : this[t]
            },
            pushStack: function(t) {
                var e = Tt.merge(this.constructor(), t);
                return e.prevObject = this,
                e
            },
            each: function(t) {
                return Tt.each(this, t)
            },
            map: function(t) {
                return this.pushStack(Tt.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(ht.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            even: function() {
                return this.pushStack(Tt.grep(this, function(t, e) {
                    return (e + 1) % 2
                }))
            },
            odd: function() {
                return this.pushStack(Tt.grep(this, function(t, e) {
                    return e % 2
                }))
            },
            eq: function(t) {
                var e = this.length
                  , n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: vt,
            sort: ft.sort,
            splice: ft.splice
        },
        Tt.extend = Tt.fn.extend = function() {
            var t, e, n, r, o, i, a = arguments[0] || {}, u = 1, s = arguments.length, c = !1;
            for ("boolean" == typeof a && (c = a,
            a = arguments[u] || {},
            u++),
            "object" == typeof a || Ct(a) || (a = {}),
            u === s && (a = this,
            u--); u < s; u++)
                if (null != (t = arguments[u]))
                    for (e in t)
                        r = t[e],
                        "__proto__" !== e && a !== r && (c && r && (Tt.isPlainObject(r) || (o = Array.isArray(r))) ? (n = a[e],
                        i = o && !Array.isArray(n) ? [] : o || Tt.isPlainObject(n) ? n : {},
                        o = !1,
                        a[e] = Tt.extend(c, i, r)) : void 0 !== r && (a[e] = r));
            return a
        }
        ,
        Tt.extend({
            expando: "jQuery" + (St + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isPlainObject: function(t) {
                var e, n;
                return !(!t || "[object Object]" !== mt.call(t)) && (!(e = pt(t)) || (n = bt.call(e, "constructor") && e.constructor,
                "function" == typeof n && xt.call(n) === _t))
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t)
                    return !1;
                return !0
            },
            globalEval: function(t, e, n) {
                a(t, {
                    nonce: e && e.nonce
                }, n)
            },
            each: function(t, e) {
                var n, r = 0;
                if (s(t))
                    for (n = t.length; r < n && e.call(t[r], r, t[r]) !== !1; r++)
                        ;
                else
                    for (r in t)
                        if (e.call(t[r], r, t[r]) === !1)
                            break;
                return t
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (s(Object(t)) ? Tt.merge(n, "string" == typeof t ? [t] : t) : vt.call(n, t)),
                n
            },
            inArray: function(t, e, n) {
                return null == e ? -1 : gt.call(e, t, n)
            },
            merge: function(t, e) {
                for (var n = +e.length, r = 0, o = t.length; r < n; r++)
                    t[o++] = e[r];
                return t.length = o,
                t
            },
            grep: function(t, e, n) {
                for (var r, o = [], i = 0, a = t.length, u = !n; i < a; i++)
                    r = !e(t[i], i),
                    r !== u && o.push(t[i]);
                return o
            },
            map: function(t, e, n) {
                var r, o, i = 0, a = [];
                if (s(t))
                    for (r = t.length; i < r; i++)
                        o = e(t[i], i, n),
                        null != o && a.push(o);
                else
                    for (i in t)
                        o = e(t[i], i, n),
                        null != o && a.push(o);
                return dt(a)
            },
            guid: 1,
            support: wt
        }),
        "function" == typeof Symbol && (Tt.fn[Symbol.iterator] = ft[Symbol.iterator]),
        Tt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            yt["[object " + e + "]"] = e.toLowerCase()
        });
        var Nt = function(t) {
            function e(t, e, n, r) {
                var o, i, a, u, s, c, l, p = e && e.ownerDocument, d = e ? e.nodeType : 9;
                if (n = n || [],
                "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d)
                    return n;
                if (!r && (P(e),
                e = e || j,
                I)) {
                    if (11 !== d && (s = bt.exec(t)))
                        if (o = s[1]) {
                            if (9 === d) {
                                if (!(a = e.getElementById(o)))
                                    return n;
                                if (a.id === o)
                                    return n.push(a),
                                    n
                            } else if (p && (a = p.getElementById(o)) && F(e, a) && a.id === o)
                                return n.push(a),
                                n
                        } else {
                            if (s[2])
                                return Z.apply(n, e.getElementsByTagName(t)),
                                n;
                            if ((o = s[3]) && w.getElementsByClassName && e.getElementsByClassName)
                                return Z.apply(n, e.getElementsByClassName(o)),
                                n
                        }
                    if (w.qsa && !Y[t + " "] && (!R || !R.test(t)) && (1 !== d || "object" !== e.nodeName.toLowerCase())) {
                        if (l = t,
                        p = e,
                        1 === d && (ft.test(t) || lt.test(t))) {
                            for (p = xt.test(t) && f(e.parentNode) || e,
                            p === e && w.scope || ((u = e.getAttribute("id")) ? u = u.replace(Ct, Et) : e.setAttribute("id", u = q)),
                            c = k(t),
                            i = c.length; i--; )
                                c[i] = (u ? "#" + u : ":scope") + " " + h(c[i]);
                            l = c.join(",")
                        }
                        try {
                            return Z.apply(n, p.querySelectorAll(l)),
                            n
                        } catch (e) {
                            Y(t, !0)
                        } finally {
                            u === q && e.removeAttribute("id")
                        }
                    }
                }
                return T(t.replace(st, "$1"), e, n, r)
            }
            function n() {
                function t(n, r) {
                    return e.push(n + " ") > C.cacheLength && delete t[e.shift()],
                    t[n + " "] = r
                }
                var e = [];
                return t
            }
            function r(t) {
                return t[q] = !0,
                t
            }
            function o(t) {
                var e = j.createElement("fieldset");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e),
                    e = null
                }
            }
            function i(t, e) {
                for (var n = t.split("|"), r = n.length; r--; )
                    C.attrHandle[n[r]] = e
            }
            function a(t, e) {
                var n = e && t
                  , r = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (r)
                    return r;
                if (n)
                    for (; n = n.nextSibling; )
                        if (n === e)
                            return -1;
                return t ? 1 : -1
            }
            function u(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }
            function s(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }
            function c(t) {
                return function(e) {
                    return "form"in e ? e.parentNode && e.disabled === !1 ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && kt(e) === t : e.disabled === t : "label"in e && e.disabled === t
                }
            }
            function l(t) {
                return r(function(e) {
                    return e = +e,
                    r(function(n, r) {
                        for (var o, i = t([], n.length, e), a = i.length; a--; )
                            n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                    })
                })
            }
            function f(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }
            function p() {}
            function h(t) {
                for (var e = 0, n = t.length, r = ""; e < n; e++)
                    r += t[e].value;
                return r
            }
            function d(t, e, n) {
                var r = e.dir
                  , o = e.next
                  , i = o || r
                  , a = n && "parentNode" === i
                  , u = z++;
                return e.first ? function(e, n, o) {
                    for (; e = e[r]; )
                        if (1 === e.nodeType || a)
                            return t(e, n, o);
                    return !1
                }
                : function(e, n, s) {
                    var c, l, f, p = [B, u];
                    if (s) {
                        for (; e = e[r]; )
                            if ((1 === e.nodeType || a) && t(e, n, s))
                                return !0
                    } else
                        for (; e = e[r]; )
                            if (1 === e.nodeType || a)
                                if (f = e[q] || (e[q] = {}),
                                l = f[e.uniqueID] || (f[e.uniqueID] = {}),
                                o && o === e.nodeName.toLowerCase())
                                    e = e[r] || e;
                                else {
                                    if ((c = l[i]) && c[0] === B && c[1] === u)
                                        return p[2] = c[2];
                                    if (l[i] = p,
                                    p[2] = t(e, n, s))
                                        return !0
                                }
                    return !1
                }
            }
            function v(t) {
                return t.length > 1 ? function(e, n, r) {
                    for (var o = t.length; o--; )
                        if (!t[o](e, n, r))
                            return !1;
                    return !0
                }
                : t[0]
            }
            function g(t, n, r) {
                for (var o = 0, i = n.length; o < i; o++)
                    e(t, n[o], r);
                return r
            }
            function y(t, e, n, r, o) {
                for (var i, a = [], u = 0, s = t.length, c = null != e; u < s; u++)
                    (i = t[u]) && (n && !n(i, r, o) || (a.push(i),
                    c && e.push(u)));
                return a
            }
            function m(t, e, n, o, i, a) {
                return o && !o[q] && (o = m(o)),
                i && !i[q] && (i = m(i, a)),
                r(function(r, a, u, s) {
                    var c, l, f, p = [], h = [], d = a.length, v = r || g(e || "*", u.nodeType ? [u] : u, []), m = !t || !r && e ? v : y(v, p, t, u, s), b = n ? i || (r ? t : d || o) ? [] : a : m;
                    if (n && n(m, b, u, s),
                    o)
                        for (c = y(b, h),
                        o(c, [], u, s),
                        l = c.length; l--; )
                            (f = c[l]) && (b[h[l]] = !(m[h[l]] = f));
                    if (r) {
                        if (i || t) {
                            if (i) {
                                for (c = [],
                                l = b.length; l--; )
                                    (f = b[l]) && c.push(m[l] = f);
                                i(null, b = [], c, s)
                            }
                            for (l = b.length; l--; )
                                (f = b[l]) && (c = i ? et(r, f) : p[l]) > -1 && (r[c] = !(a[c] = f))
                        }
                    } else
                        b = y(b === a ? b.splice(d, b.length) : b),
                        i ? i(null, a, b, s) : Z.apply(a, b)
                })
            }
            function b(t) {
                for (var e, n, r, o = t.length, i = C.relative[t[0].type], a = i || C.relative[" "], u = i ? 1 : 0, s = d(function(t) {
                    return t === e
                }, a, !0), c = d(function(t) {
                    return et(e, t) > -1
                }, a, !0), l = [function(t, n, r) {
                    var o = !i && (r || n !== N) || ((e = n).nodeType ? s(t, n, r) : c(t, n, r));
                    return e = null,
                    o
                }
                ]; u < o; u++)
                    if (n = C.relative[t[u].type])
                        l = [d(v(l), n)];
                    else {
                        if (n = C.filter[t[u].type].apply(null, t[u].matches),
                        n[q]) {
                            for (r = ++u; r < o && !C.relative[t[r].type]; r++)
                                ;
                            return m(u > 1 && v(l), u > 1 && h(t.slice(0, u - 1).concat({
                                value: " " === t[u - 2].type ? "*" : ""
                            })).replace(st, "$1"), n, u < r && b(t.slice(u, r)), r < o && b(t = t.slice(r)), r < o && h(t))
                        }
                        l.push(n)
                    }
                return v(l)
            }
            function x(t, n) {
                var o = n.length > 0
                  , i = t.length > 0
                  , a = function(r, a, u, s, c) {
                    var l, f, p, h = 0, d = "0", v = r && [], g = [], m = N, b = r || i && C.find.TAG("*", c), x = B += null == m ? 1 : Math.random() || .1, _ = b.length;
                    for (c && (N = a == j || a || c); d !== _ && null != (l = b[d]); d++) {
                        if (i && l) {
                            for (f = 0,
                            a || l.ownerDocument == j || (P(l),
                            u = !I); p = t[f++]; )
                                if (p(l, a || j, u)) {
                                    s.push(l);
                                    break
                                }
                            c && (B = x)
                        }
                        o && ((l = !p && l) && h--,
                        r && v.push(l))
                    }
                    if (h += d,
                    o && d !== h) {
                        for (f = 0; p = n[f++]; )
                            p(v, g, a, u);
                        if (r) {
                            if (h > 0)
                                for (; d--; )
                                    v[d] || g[d] || (g[d] = G.call(s));
                            g = y(g)
                        }
                        Z.apply(s, g),
                        c && !r && g.length > 0 && h + n.length > 1 && e.uniqueSort(s)
                    }
                    return c && (B = x,
                    N = m),
                    v
                };
                return o ? r(a) : a
            }
            var _, w, C, E, M, k, S, T, N, A, O, P, j, D, I, R, L, U, F, q = "sizzle" + 1 * new Date, H = t.document, B = 0, z = 0, W = n(), V = n(), $ = n(), Y = n(), K = function(t, e) {
                return t === e && (O = !0),
                0
            }, X = {}.hasOwnProperty, J = [], G = J.pop, Q = J.push, Z = J.push, tt = J.slice, et = function(t, e) {
                for (var n = 0, r = t.length; n < r; n++)
                    if (t[n] === e)
                        return n;
                return -1
            }, nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", rt = "[\\x20\\t\\r\\n\\f]", ot = "(?:\\\\[\\da-fA-F]{1,6}" + rt + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", it = "\\[" + rt + "*(" + ot + ")(?:" + rt + "*([*^$|!~]?=)" + rt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + rt + "*\\]", at = ":(" + ot + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)", ut = new RegExp(rt + "+","g"), st = new RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$","g"), ct = new RegExp("^" + rt + "*," + rt + "*"), lt = new RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"), ft = new RegExp(rt + "|>"), pt = new RegExp(at), ht = new RegExp("^" + ot + "$"), dt = {
                ID: new RegExp("^#(" + ot + ")"),
                CLASS: new RegExp("^\\.(" + ot + ")"),
                TAG: new RegExp("^(" + ot + "|[*])"),
                ATTR: new RegExp("^" + it),
                PSEUDO: new RegExp("^" + at),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)","i"),
                bool: new RegExp("^(?:" + nt + ")$","i"),
                needsContext: new RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)","i")
            }, vt = /HTML$/i, gt = /^(?:input|select|textarea|button)$/i, yt = /^h\d$/i, mt = /^[^{]+\{\s*\[native \w/, bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, xt = /[+~]/, _t = new RegExp("\\\\[\\da-fA-F]{1,6}" + rt + "?|\\\\([^\\r\\n\\f])","g"), wt = function(t, e) {
                var n = "0x" + t.slice(1) - 65536;
                return e ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            }, Ct = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, Et = function(t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            }, Mt = function() {
                P()
            }, kt = d(function(t) {
                return t.disabled === !0 && "fieldset" === t.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
            try {
                Z.apply(J = tt.call(H.childNodes), H.childNodes),
                J[H.childNodes.length].nodeType
            } catch (t) {
                Z = {
                    apply: J.length ? function(t, e) {
                        Q.apply(t, tt.call(e))
                    }
                    : function(t, e) {
                        for (var n = t.length, r = 0; t[n++] = e[r++]; )
                            ;
                        t.length = n - 1
                    }
                }
            }
            w = e.support = {},
            M = e.isXML = function(t) {
                var e = t.namespaceURI
                  , n = (t.ownerDocument || t).documentElement;
                return !vt.test(e || n && n.nodeName || "HTML")
            }
            ,
            P = e.setDocument = function(t) {
                var e, n, r = t ? t.ownerDocument || t : H;
                return r != j && 9 === r.nodeType && r.documentElement ? (j = r,
                D = j.documentElement,
                I = !M(j),
                H != j && (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Mt, !1) : n.attachEvent && n.attachEvent("onunload", Mt)),
                w.scope = o(function(t) {
                    return D.appendChild(t).appendChild(j.createElement("div")),
                    "undefined" != typeof t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
                }),
                w.attributes = o(function(t) {
                    return t.className = "i",
                    !t.getAttribute("className")
                }),
                w.getElementsByTagName = o(function(t) {
                    return t.appendChild(j.createComment("")),
                    !t.getElementsByTagName("*").length
                }),
                w.getElementsByClassName = mt.test(j.getElementsByClassName),
                w.getById = o(function(t) {
                    return D.appendChild(t).id = q,
                    !j.getElementsByName || !j.getElementsByName(q).length
                }),
                w.getById ? (C.filter.ID = function(t) {
                    var e = t.replace(_t, wt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }
                ,
                C.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && I) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }
                ) : (C.filter.ID = function(t) {
                    var e = t.replace(_t, wt);
                    return function(t) {
                        var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }
                ,
                C.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && I) {
                        var n, r, o, i = e.getElementById(t);
                        if (i) {
                            if (n = i.getAttributeNode("id"),
                            n && n.value === t)
                                return [i];
                            for (o = e.getElementsByName(t),
                            r = 0; i = o[r++]; )
                                if (n = i.getAttributeNode("id"),
                                n && n.value === t)
                                    return [i]
                        }
                        return []
                    }
                }
                ),
                C.find.TAG = w.getElementsByTagName ? function(t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
                }
                : function(t, e) {
                    var n, r = [], o = 0, i = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = i[o++]; )
                            1 === n.nodeType && r.push(n);
                        return r
                    }
                    return i
                }
                ,
                C.find.CLASS = w.getElementsByClassName && function(t, e) {
                    if ("undefined" != typeof e.getElementsByClassName && I)
                        return e.getElementsByClassName(t)
                }
                ,
                L = [],
                R = [],
                (w.qsa = mt.test(j.querySelectorAll)) && (o(function(t) {
                    var e;
                    D.appendChild(t).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    t.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=" + rt + "*(?:''|\"\")"),
                    t.querySelectorAll("[selected]").length || R.push("\\[" + rt + "*(?:value|" + nt + ")"),
                    t.querySelectorAll("[id~=" + q + "-]").length || R.push("~="),
                    e = j.createElement("input"),
                    e.setAttribute("name", ""),
                    t.appendChild(e),
                    t.querySelectorAll("[name='']").length || R.push("\\[" + rt + "*name" + rt + "*=" + rt + "*(?:''|\"\")"),
                    t.querySelectorAll(":checked").length || R.push(":checked"),
                    t.querySelectorAll("a#" + q + "+*").length || R.push(".#.+[+~]"),
                    t.querySelectorAll("\\\f"),
                    R.push("[\\r\\n\\f]")
                }),
                o(function(t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = j.createElement("input");
                    e.setAttribute("type", "hidden"),
                    t.appendChild(e).setAttribute("name", "D"),
                    t.querySelectorAll("[name=d]").length && R.push("name" + rt + "*[*^$|!~]?="),
                    2 !== t.querySelectorAll(":enabled").length && R.push(":enabled", ":disabled"),
                    D.appendChild(t).disabled = !0,
                    2 !== t.querySelectorAll(":disabled").length && R.push(":enabled", ":disabled"),
                    t.querySelectorAll("*,:x"),
                    R.push(",.*:")
                })),
                (w.matchesSelector = mt.test(U = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && o(function(t) {
                    w.disconnectedMatch = U.call(t, "*"),
                    U.call(t, "[s!='']:x"),
                    L.push("!=", at)
                }),
                R = R.length && new RegExp(R.join("|")),
                L = L.length && new RegExp(L.join("|")),
                e = mt.test(D.compareDocumentPosition),
                F = e || mt.test(D.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t
                      , r = e && e.parentNode;
                    return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
                }
                : function(t, e) {
                    if (e)
                        for (; e = e.parentNode; )
                            if (e === t)
                                return !0;
                    return !1
                }
                ,
                K = e ? function(t, e) {
                    if (t === e)
                        return O = !0,
                        0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n ? n : (n = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1,
                    1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t == j || t.ownerDocument == H && F(H, t) ? -1 : e == j || e.ownerDocument == H && F(H, e) ? 1 : A ? et(A, t) - et(A, e) : 0 : 4 & n ? -1 : 1)
                }
                : function(t, e) {
                    if (t === e)
                        return O = !0,
                        0;
                    var n, r = 0, o = t.parentNode, i = e.parentNode, u = [t], s = [e];
                    if (!o || !i)
                        return t == j ? -1 : e == j ? 1 : o ? -1 : i ? 1 : A ? et(A, t) - et(A, e) : 0;
                    if (o === i)
                        return a(t, e);
                    for (n = t; n = n.parentNode; )
                        u.unshift(n);
                    for (n = e; n = n.parentNode; )
                        s.unshift(n);
                    for (; u[r] === s[r]; )
                        r++;
                    return r ? a(u[r], s[r]) : u[r] == H ? -1 : s[r] == H ? 1 : 0
                }
                ,
                j) : j
            }
            ,
            e.matches = function(t, n) {
                return e(t, null, null, n)
            }
            ,
            e.matchesSelector = function(t, n) {
                if (P(t),
                w.matchesSelector && I && !Y[n + " "] && (!L || !L.test(n)) && (!R || !R.test(n)))
                    try {
                        var r = U.call(t, n);
                        if (r || w.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                            return r
                    } catch (t) {
                        Y(n, !0)
                    }
                return e(n, j, null, [t]).length > 0
            }
            ,
            e.contains = function(t, e) {
                return (t.ownerDocument || t) != j && P(t),
                F(t, e)
            }
            ,
            e.attr = function(t, e) {
                (t.ownerDocument || t) != j && P(t);
                var n = C.attrHandle[e.toLowerCase()]
                  , r = n && X.call(C.attrHandle, e.toLowerCase()) ? n(t, e, !I) : void 0;
                return void 0 !== r ? r : w.attributes || !I ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
            }
            ,
            e.escape = function(t) {
                return (t + "").replace(Ct, Et)
            }
            ,
            e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }
            ,
            e.uniqueSort = function(t) {
                var e, n = [], r = 0, o = 0;
                if (O = !w.detectDuplicates,
                A = !w.sortStable && t.slice(0),
                t.sort(K),
                O) {
                    for (; e = t[o++]; )
                        e === t[o] && (r = n.push(o));
                    for (; r--; )
                        t.splice(n[r], 1)
                }
                return A = null,
                t
            }
            ,
            E = e.getText = function(t) {
                var e, n = "", r = 0, o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent)
                            return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling)
                            n += E(t)
                    } else if (3 === o || 4 === o)
                        return t.nodeValue
                } else
                    for (; e = t[r++]; )
                        n += E(e);
                return n
            }
            ,
            C = e.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: dt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(_t, wt),
                        t[3] = (t[3] || t[4] || t[5] || "").replace(_t, wt),
                        "~=" === t[2] && (t[3] = " " + t[3] + " "),
                        t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(),
                        "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]),
                        t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                        t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
                        t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && pt.test(n) && (e = k(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e),
                        t[2] = n.slice(0, e)),
                        t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(_t, wt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        }
                        : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = W[t + " "];
                        return e || (e = new RegExp("(^|" + rt + ")" + t + "(" + rt + "|$)")) && W(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, r) {
                        return function(o) {
                            var i = e.attr(o, t);
                            return null == i ? "!=" === n : !n || (i += "",
                            "=" === n ? i === r : "!=" === n ? i !== r : "^=" === n ? r && 0 === i.indexOf(r) : "*=" === n ? r && i.indexOf(r) > -1 : "$=" === n ? r && i.slice(-r.length) === r : "~=" === n ? (" " + i.replace(ut, " ") + " ").indexOf(r) > -1 : "|=" === n && (i === r || i.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function(t, e, n, r, o) {
                        var i = "nth" !== t.slice(0, 3)
                          , a = "last" !== t.slice(-4)
                          , u = "of-type" === e;
                        return 1 === r && 0 === o ? function(t) {
                            return !!t.parentNode
                        }
                        : function(e, n, s) {
                            var c, l, f, p, h, d, v = i !== a ? "nextSibling" : "previousSibling", g = e.parentNode, y = u && e.nodeName.toLowerCase(), m = !s && !u, b = !1;
                            if (g) {
                                if (i) {
                                    for (; v; ) {
                                        for (p = e; p = p[v]; )
                                            if (u ? p.nodeName.toLowerCase() === y : 1 === p.nodeType)
                                                return !1;
                                        d = v = "only" === t && !d && "nextSibling"
                                    }
                                    return !0
                                }
                                if (d = [a ? g.firstChild : g.lastChild],
                                a && m) {
                                    for (p = g,
                                    f = p[q] || (p[q] = {}),
                                    l = f[p.uniqueID] || (f[p.uniqueID] = {}),
                                    c = l[t] || [],
                                    h = c[0] === B && c[1],
                                    b = h && c[2],
                                    p = h && g.childNodes[h]; p = ++h && p && p[v] || (b = h = 0) || d.pop(); )
                                        if (1 === p.nodeType && ++b && p === e) {
                                            l[t] = [B, h, b];
                                            break
                                        }
                                } else if (m && (p = e,
                                f = p[q] || (p[q] = {}),
                                l = f[p.uniqueID] || (f[p.uniqueID] = {}),
                                c = l[t] || [],
                                h = c[0] === B && c[1],
                                b = h),
                                b === !1)
                                    for (; (p = ++h && p && p[v] || (b = h = 0) || d.pop()) && ((u ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++b || (m && (f = p[q] || (p[q] = {}),
                                    l = f[p.uniqueID] || (f[p.uniqueID] = {}),
                                    l[t] = [B, b]),
                                    p !== e)); )
                                        ;
                                return b -= o,
                                b === r || b % r === 0 && b / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, n) {
                        var o, i = C.pseudos[t] || C.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return i[q] ? i(n) : i.length > 1 ? (o = [t, t, "", n],
                        C.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function(t, e) {
                            for (var r, o = i(t, n), a = o.length; a--; )
                                r = et(t, o[a]),
                                t[r] = !(e[r] = o[a])
                        }) : function(t) {
                            return i(t, 0, o)
                        }
                        ) : i
                    }
                },
                pseudos: {
                    not: r(function(t) {
                        var e = []
                          , n = []
                          , o = S(t.replace(st, "$1"));
                        return o[q] ? r(function(t, e, n, r) {
                            for (var i, a = o(t, null, r, []), u = t.length; u--; )
                                (i = a[u]) && (t[u] = !(e[u] = i))
                        }) : function(t, r, i) {
                            return e[0] = t,
                            o(e, null, i, n),
                            e[0] = null,
                            !n.pop()
                        }
                    }),
                    has: r(function(t) {
                        return function(n) {
                            return e(t, n).length > 0
                        }
                    }),
                    contains: r(function(t) {
                        return t = t.replace(_t, wt),
                        function(e) {
                            return (e.textContent || E(e)).indexOf(t) > -1
                        }
                    }),
                    lang: r(function(t) {
                        return ht.test(t || "") || e.error("unsupported lang: " + t),
                        t = t.replace(_t, wt).toLowerCase(),
                        function(e) {
                            var n;
                            do
                                if (n = I ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                    return n = n.toLowerCase(),
                                    n === t || 0 === n.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);return !1
                        }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === D
                    },
                    focus: function(t) {
                        return t === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: c(!1),
                    disabled: c(!0),
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex,
                        t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !C.pseudos.empty(t)
                    },
                    header: function(t) {
                        return yt.test(t.nodeName)
                    },
                    input: function(t) {
                        return gt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: l(function() {
                        return [0]
                    }),
                    last: l(function(t, e) {
                        return [e - 1]
                    }),
                    eq: l(function(t, e, n) {
                        return [n < 0 ? n + e : n]
                    }),
                    even: l(function(t, e) {
                        for (var n = 0; n < e; n += 2)
                            t.push(n);
                        return t
                    }),
                    odd: l(function(t, e) {
                        for (var n = 1; n < e; n += 2)
                            t.push(n);
                        return t
                    }),
                    lt: l(function(t, e, n) {
                        for (var r = n < 0 ? n + e : n > e ? e : n; --r >= 0; )
                            t.push(r);
                        return t
                    }),
                    gt: l(function(t, e, n) {
                        for (var r = n < 0 ? n + e : n; ++r < e; )
                            t.push(r);
                        return t
                    })
                }
            },
            C.pseudos.nth = C.pseudos.eq;
            for (_ in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                C.pseudos[_] = u(_);
            for (_ in {
                submit: !0,
                reset: !0
            })
                C.pseudos[_] = s(_);
            return p.prototype = C.filters = C.pseudos,
            C.setFilters = new p,
            k = e.tokenize = function(t, n) {
                var r, o, i, a, u, s, c, l = V[t + " "];
                if (l)
                    return n ? 0 : l.slice(0);
                for (u = t,
                s = [],
                c = C.preFilter; u; ) {
                    r && !(o = ct.exec(u)) || (o && (u = u.slice(o[0].length) || u),
                    s.push(i = [])),
                    r = !1,
                    (o = lt.exec(u)) && (r = o.shift(),
                    i.push({
                        value: r,
                        type: o[0].replace(st, " ")
                    }),
                    u = u.slice(r.length));
                    for (a in C.filter)
                        !(o = dt[a].exec(u)) || c[a] && !(o = c[a](o)) || (r = o.shift(),
                        i.push({
                            value: r,
                            type: a,
                            matches: o
                        }),
                        u = u.slice(r.length));
                    if (!r)
                        break
                }
                return n ? u.length : u ? e.error(t) : V(t, s).slice(0)
            }
            ,
            S = e.compile = function(t, e) {
                var n, r = [], o = [], i = $[t + " "];
                if (!i) {
                    for (e || (e = k(t)),
                    n = e.length; n--; )
                        i = b(e[n]),
                        i[q] ? r.push(i) : o.push(i);
                    i = $(t, x(o, r)),
                    i.selector = t
                }
                return i
            }
            ,
            T = e.select = function(t, e, n, r) {
                var o, i, a, u, s, c = "function" == typeof t && t, l = !r && k(t = c.selector || t);
                if (n = n || [],
                1 === l.length) {
                    if (i = l[0] = l[0].slice(0),
                    i.length > 2 && "ID" === (a = i[0]).type && 9 === e.nodeType && I && C.relative[i[1].type]) {
                        if (e = (C.find.ID(a.matches[0].replace(_t, wt), e) || [])[0],
                        !e)
                            return n;
                        c && (e = e.parentNode),
                        t = t.slice(i.shift().value.length)
                    }
                    for (o = dt.needsContext.test(t) ? 0 : i.length; o-- && (a = i[o],
                    !C.relative[u = a.type]); )
                        if ((s = C.find[u]) && (r = s(a.matches[0].replace(_t, wt), xt.test(i[0].type) && f(e.parentNode) || e))) {
                            if (i.splice(o, 1),
                            t = r.length && h(i),
                            !t)
                                return Z.apply(n, r),
                                n;
                            break
                        }
                }
                return (c || S(t, l))(r, e, !I, n, !e || xt.test(t) && f(e.parentNode) || e),
                n
            }
            ,
            w.sortStable = q.split("").sort(K).join("") === q,
            w.detectDuplicates = !!O,
            P(),
            w.sortDetached = o(function(t) {
                return 1 & t.compareDocumentPosition(j.createElement("fieldset"))
            }),
            o(function(t) {
                return t.innerHTML = "<a href='#'></a>",
                "#" === t.firstChild.getAttribute("href")
            }) || i("type|href|height|width", function(t, e, n) {
                if (!n)
                    return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }),
            w.attributes && o(function(t) {
                return t.innerHTML = "<input/>",
                t.firstChild.setAttribute("value", ""),
                "" === t.firstChild.getAttribute("value")
            }) || i("value", function(t, e, n) {
                if (!n && "input" === t.nodeName.toLowerCase())
                    return t.defaultValue
            }),
            o(function(t) {
                return null == t.getAttribute("disabled")
            }) || i(nt, function(t, e, n) {
                var r;
                if (!n)
                    return t[e] === !0 ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
            }),
            e
        }(n);
        Tt.find = Nt,
        Tt.expr = Nt.selectors,
        Tt.expr[":"] = Tt.expr.pseudos,
        Tt.uniqueSort = Tt.unique = Nt.uniqueSort,
        Tt.text = Nt.getText,
        Tt.isXMLDoc = Nt.isXML,
        Tt.contains = Nt.contains,
        Tt.escapeSelector = Nt.escape;
        var At = function(t, e, n) {
            for (var r = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
                if (1 === t.nodeType) {
                    if (o && Tt(t).is(n))
                        break;
                    r.push(t)
                }
            return r
        }
          , Ot = function(t, e) {
            for (var n = []; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && n.push(t);
            return n
        }
          , Pt = Tt.expr.match.needsContext
          , jt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        Tt.filter = function(t, e, n) {
            var r = e[0];
            return n && (t = ":not(" + t + ")"),
            1 === e.length && 1 === r.nodeType ? Tt.find.matchesSelector(r, t) ? [r] : [] : Tt.find.matches(t, Tt.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }
        ,
        Tt.fn.extend({
            find: function(t) {
                var e, n, r = this.length, o = this;
                if ("string" != typeof t)
                    return this.pushStack(Tt(t).filter(function() {
                        for (e = 0; e < r; e++)
                            if (Tt.contains(o[e], this))
                                return !0
                    }));
                for (n = this.pushStack([]),
                e = 0; e < r; e++)
                    Tt.find(t, o[e], n);
                return r > 1 ? Tt.uniqueSort(n) : n
            },
            filter: function(t) {
                return this.pushStack(l(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(l(this, t || [], !0))
            },
            is: function(t) {
                return !!l(this, "string" == typeof t && Pt.test(t) ? Tt(t) : t || [], !1).length
            }
        });
        var Dt, It = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Rt = Tt.fn.init = function(t, e, n) {
            var r, o;
            if (!t)
                return this;
            if (n = n || Dt,
            "string" == typeof t) {
                if (r = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : It.exec(t),
                !r || !r[1] && e)
                    return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (r[1]) {
                    if (e = e instanceof Tt ? e[0] : e,
                    Tt.merge(this, Tt.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : Mt, !0)),
                    jt.test(r[1]) && Tt.isPlainObject(e))
                        for (r in e)
                            Ct(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                    return this
                }
                return o = Mt.getElementById(r[2]),
                o && (this[0] = o,
                this.length = 1),
                this
            }
            return t.nodeType ? (this[0] = t,
            this.length = 1,
            this) : Ct(t) ? void 0 !== n.ready ? n.ready(t) : t(Tt) : Tt.makeArray(t, this)
        }
        ;
        Rt.prototype = Tt.fn,
        Dt = Tt(Mt);
        var Lt = /^(?:parents|prev(?:Until|All))/
          , Ut = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        Tt.fn.extend({
            has: function(t) {
                var e = Tt(t, this)
                  , n = e.length;
                return this.filter(function() {
                    for (var t = 0; t < n; t++)
                        if (Tt.contains(this, e[t]))
                            return !0
                })
            },
            closest: function(t, e) {
                var n, r = 0, o = this.length, i = [], a = "string" != typeof t && Tt(t);
                if (!Pt.test(t))
                    for (; r < o; r++)
                        for (n = this[r]; n && n !== e; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Tt.find.matchesSelector(n, t))) {
                                i.push(n);
                                break
                            }
                return this.pushStack(i.length > 1 ? Tt.uniqueSort(i) : i)
            },
            index: function(t) {
                return t ? "string" == typeof t ? gt.call(Tt(t), this[0]) : gt.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(Tt.uniqueSort(Tt.merge(this.get(), Tt(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }),
        Tt.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return At(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return At(t, "parentNode", n)
            },
            next: function(t) {
                return f(t, "nextSibling")
            },
            prev: function(t) {
                return f(t, "previousSibling")
            },
            nextAll: function(t) {
                return At(t, "nextSibling")
            },
            prevAll: function(t) {
                return At(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return At(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return At(t, "previousSibling", n)
            },
            siblings: function(t) {
                return Ot((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return Ot(t.firstChild)
            },
            contents: function(t) {
                return null != t.contentDocument && pt(t.contentDocument) ? t.contentDocument : (c(t, "template") && (t = t.content || t),
                Tt.merge([], t.childNodes))
            }
        }, function(t, e) {
            Tt.fn[t] = function(n, r) {
                var o = Tt.map(this, e, n);
                return "Until" !== t.slice(-5) && (r = n),
                r && "string" == typeof r && (o = Tt.filter(r, o)),
                this.length > 1 && (Ut[t] || Tt.uniqueSort(o),
                Lt.test(t) && o.reverse()),
                this.pushStack(o)
            }
        });
        var Ft = /[^\x20\t\r\n\f]+/g;
        Tt.Callbacks = function(t) {
            t = "string" == typeof t ? p(t) : Tt.extend({}, t);
            var e, n, r, o, i = [], a = [], s = -1, c = function() {
                for (o = o || t.once,
                r = e = !0; a.length; s = -1)
                    for (n = a.shift(); ++s < i.length; )
                        i[s].apply(n[0], n[1]) === !1 && t.stopOnFalse && (s = i.length,
                        n = !1);
                t.memory || (n = !1),
                e = !1,
                o && (i = n ? [] : "")
            }, l = {
                add: function() {
                    return i && (n && !e && (s = i.length - 1,
                    a.push(n)),
                    function e(n) {
                        Tt.each(n, function(n, r) {
                            Ct(r) ? t.unique && l.has(r) || i.push(r) : r && r.length && "string" !== u(r) && e(r)
                        })
                    }(arguments),
                    n && !e && c()),
                    this
                },
                remove: function() {
                    return Tt.each(arguments, function(t, e) {
                        for (var n; (n = Tt.inArray(e, i, n)) > -1; )
                            i.splice(n, 1),
                            n <= s && s--
                    }),
                    this
                },
                has: function(t) {
                    return t ? Tt.inArray(t, i) > -1 : i.length > 0
                },
                empty: function() {
                    return i && (i = []),
                    this
                },
                disable: function() {
                    return o = a = [],
                    i = n = "",
                    this
                },
                disabled: function() {
                    return !i
                },
                lock: function() {
                    return o = a = [],
                    n || e || (i = n = ""),
                    this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(t, n) {
                    return o || (n = n || [],
                    n = [t, n.slice ? n.slice() : n],
                    a.push(n),
                    e || c()),
                    this
                },
                fire: function() {
                    return l.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!r
                }
            };
            return l
        }
        ,
        Tt.extend({
            Deferred: function(t) {
                var e = [["notify", "progress", Tt.Callbacks("memory"), Tt.Callbacks("memory"), 2], ["resolve", "done", Tt.Callbacks("once memory"), Tt.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", Tt.Callbacks("once memory"), Tt.Callbacks("once memory"), 1, "rejected"]]
                  , r = "pending"
                  , o = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments),
                        this
                    },
                    catch: function(t) {
                        return o.then(null, t)
                    },
                    pipe: function() {
                        var t = arguments;
                        return Tt.Deferred(function(n) {
                            Tt.each(e, function(e, r) {
                                var o = Ct(t[r[4]]) && t[r[4]];
                                i[r[1]](function() {
                                    var t = o && o.apply(this, arguments);
                                    t && Ct(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, o ? [t] : arguments)
                                })
                            }),
                            t = null
                        }).promise()
                    },
                    then: function(t, r, o) {
                        function i(t, e, r, o) {
                            return function() {
                                var u = this
                                  , s = arguments
                                  , c = function() {
                                    var n, c;
                                    if (!(t < a)) {
                                        if (n = r.apply(u, s),
                                        n === e.promise())
                                            throw new TypeError("Thenable self-resolution");
                                        c = n && ("object" == typeof n || "function" == typeof n) && n.then,
                                        Ct(c) ? o ? c.call(n, i(a, e, h, o), i(a, e, d, o)) : (a++,
                                        c.call(n, i(a, e, h, o), i(a, e, d, o), i(a, e, h, e.notifyWith))) : (r !== h && (u = void 0,
                                        s = [n]),
                                        (o || e.resolveWith)(u, s))
                                    }
                                }
                                  , l = o ? c : function() {
                                    try {
                                        c()
                                    } catch (n) {
                                        Tt.Deferred.exceptionHook && Tt.Deferred.exceptionHook(n, l.stackTrace),
                                        t + 1 >= a && (r !== d && (u = void 0,
                                        s = [n]),
                                        e.rejectWith(u, s))
                                    }
                                }
                                ;
                                t ? l() : (Tt.Deferred.getStackHook && (l.stackTrace = Tt.Deferred.getStackHook()),
                                n.setTimeout(l))
                            }
                        }
                        var a = 0;
                        return Tt.Deferred(function(n) {
                            e[0][3].add(i(0, n, Ct(o) ? o : h, n.notifyWith)),
                            e[1][3].add(i(0, n, Ct(t) ? t : h)),
                            e[2][3].add(i(0, n, Ct(r) ? r : d))
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? Tt.extend(t, o) : o
                    }
                }
                  , i = {};
                return Tt.each(e, function(t, n) {
                    var a = n[2]
                      , u = n[5];
                    o[n[1]] = a.add,
                    u && a.add(function() {
                        r = u
                    }, e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock),
                    a.add(n[3].fire),
                    i[n[0]] = function() {
                        return i[n[0] + "With"](this === i ? void 0 : this, arguments),
                        this
                    }
                    ,
                    i[n[0] + "With"] = a.fireWith
                }),
                o.promise(i),
                t && t.call(i, i),
                i
            },
            when: function(t) {
                var e = arguments.length
                  , n = e
                  , r = Array(n)
                  , o = ht.call(arguments)
                  , i = Tt.Deferred()
                  , a = function(t) {
                    return function(n) {
                        r[t] = this,
                        o[t] = arguments.length > 1 ? ht.call(arguments) : n,
                        --e || i.resolveWith(r, o)
                    }
                };
                if (e <= 1 && (v(t, i.done(a(n)).resolve, i.reject, !e),
                "pending" === i.state() || Ct(o[n] && o[n].then)))
                    return i.then();
                for (; n--; )
                    v(o[n], a(n), i.reject);
                return i.promise()
            }
        });
        var qt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        Tt.Deferred.exceptionHook = function(t, e) {
            n.console && n.console.warn && t && qt.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
        }
        ,
        Tt.readyException = function(t) {
            n.setTimeout(function() {
                throw t
            })
        }
        ;
        var Ht = Tt.Deferred();
        Tt.fn.ready = function(t) {
            return Ht.then(t).catch(function(t) {
                Tt.readyException(t)
            }),
            this
        }
        ,
        Tt.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(t) {
                (t === !0 ? --Tt.readyWait : Tt.isReady) || (Tt.isReady = !0,
                t !== !0 && --Tt.readyWait > 0 || Ht.resolveWith(Mt, [Tt]))
            }
        }),
        Tt.ready.then = Ht.then,
        "complete" === Mt.readyState || "loading" !== Mt.readyState && !Mt.documentElement.doScroll ? n.setTimeout(Tt.ready) : (Mt.addEventListener("DOMContentLoaded", g),
        n.addEventListener("load", g));
        var Bt = function(t, e, n, r, o, i, a) {
            var s = 0
              , c = t.length
              , l = null == n;
            if ("object" === u(n)) {
                o = !0;
                for (s in n)
                    Bt(t, e, s, n[s], !0, i, a)
            } else if (void 0 !== r && (o = !0,
            Ct(r) || (a = !0),
            l && (a ? (e.call(t, r),
            e = null) : (l = e,
            e = function(t, e, n) {
                return l.call(Tt(t), n)
            }
            )),
            e))
                for (; s < c; s++)
                    e(t[s], n, a ? r : r.call(t[s], s, e(t[s], n)));
            return o ? t : l ? e.call(t) : c ? e(t[0], n) : i
        }
          , zt = /^-ms-/
          , Wt = /-([a-z])/g
          , Vt = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
        b.uid = 1,
        b.prototype = {
            cache: function(t) {
                var e = t[this.expando];
                return e || (e = {},
                Vt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))),
                e
            },
            set: function(t, e, n) {
                var r, o = this.cache(t);
                if ("string" == typeof e)
                    o[m(e)] = n;
                else
                    for (r in e)
                        o[m(r)] = e[r];
                return o
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][m(e)]
            },
            access: function(t, e, n) {
                return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n),
                void 0 !== n ? n : e)
            },
            remove: function(t, e) {
                var n, r = t[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== e) {
                        Array.isArray(e) ? e = e.map(m) : (e = m(e),
                        e = e in r ? [e] : e.match(Ft) || []),
                        n = e.length;
                        for (; n--; )
                            delete r[e[n]]
                    }
                    (void 0 === e || Tt.isEmptyObject(r)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !Tt.isEmptyObject(e)
            }
        };
        var $t = new b
          , Yt = new b
          , Kt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , Xt = /[A-Z]/g;
        Tt.extend({
            hasData: function(t) {
                return Yt.hasData(t) || $t.hasData(t)
            },
            data: function(t, e, n) {
                return Yt.access(t, e, n)
            },
            removeData: function(t, e) {
                Yt.remove(t, e)
            },
            _data: function(t, e, n) {
                return $t.access(t, e, n)
            },
            _removeData: function(t, e) {
                $t.remove(t, e)
            }
        }),
        Tt.fn.extend({
            data: function(t, e) {
                var n, r, o, i = this[0], a = i && i.attributes;
                if (void 0 === t) {
                    if (this.length && (o = Yt.get(i),
                    1 === i.nodeType && !$t.get(i, "hasDataAttrs"))) {
                        for (n = a.length; n--; )
                            a[n] && (r = a[n].name,
                            0 === r.indexOf("data-") && (r = m(r.slice(5)),
                            _(i, r, o[r])));
                        $t.set(i, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function() {
                    Yt.set(this, t)
                }) : Bt(this, function(e) {
                    var n;
                    if (i && void 0 === e) {
                        if (n = Yt.get(i, t),
                        void 0 !== n)
                            return n;
                        if (n = _(i, t),
                        void 0 !== n)
                            return n
                    } else
                        this.each(function() {
                            Yt.set(this, t, e)
                        })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    Yt.remove(this, t)
                })
            }
        }),
        Tt.extend({
            queue: function(t, e, n) {
                var r;
                if (t)
                    return e = (e || "fx") + "queue",
                    r = $t.get(t, e),
                    n && (!r || Array.isArray(n) ? r = $t.access(t, e, Tt.makeArray(n)) : r.push(n)),
                    r || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = Tt.queue(t, e)
                  , r = n.length
                  , o = n.shift()
                  , i = Tt._queueHooks(t, e)
                  , a = function() {
                    Tt.dequeue(t, e)
                };
                "inprogress" === o && (o = n.shift(),
                r--),
                o && ("fx" === e && n.unshift("inprogress"),
                delete i.stop,
                o.call(t, a, i)),
                !r && i && i.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return $t.get(t, n) || $t.access(t, n, {
                    empty: Tt.Callbacks("once memory").add(function() {
                        $t.remove(t, [e + "queue", n])
                    })
                })
            }
        }),
        Tt.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t,
                t = "fx",
                n--),
                arguments.length < n ? Tt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = Tt.queue(this, t, e);
                    Tt._queueHooks(this, t),
                    "fx" === t && "inprogress" !== n[0] && Tt.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    Tt.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, r = 1, o = Tt.Deferred(), i = this, a = this.length, u = function() {
                    --r || o.resolveWith(i, [i])
                };
                for ("string" != typeof t && (e = t,
                t = void 0),
                t = t || "fx"; a--; )
                    n = $t.get(i[a], t + "queueHooks"),
                    n && n.empty && (r++,
                    n.empty.add(u));
                return u(),
                o.promise(e)
            }
        });
        var Jt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , Gt = new RegExp("^(?:([+-])=|)(" + Jt + ")([a-z%]*)$","i")
          , Qt = ["Top", "Right", "Bottom", "Left"]
          , Zt = Mt.documentElement
          , te = function(t) {
            return Tt.contains(t.ownerDocument, t)
        }
          , ee = {
            composed: !0
        };
        Zt.getRootNode && (te = function(t) {
            return Tt.contains(t.ownerDocument, t) || t.getRootNode(ee) === t.ownerDocument
        }
        );
        var ne = function(t, e) {
            return t = e || t,
            "none" === t.style.display || "" === t.style.display && te(t) && "none" === Tt.css(t, "display")
        }
          , re = {};
        Tt.fn.extend({
            show: function() {
                return E(this, !0)
            },
            hide: function() {
                return E(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    ne(this) ? Tt(this).show() : Tt(this).hide()
                })
            }
        });
        var oe = /^(?:checkbox|radio)$/i
          , ie = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
          , ae = /^$|^module$|\/(?:java|ecma)script/i;
        !function() {
            var t = Mt.createDocumentFragment()
              , e = t.appendChild(Mt.createElement("div"))
              , n = Mt.createElement("input");
            n.setAttribute("type", "radio"),
            n.setAttribute("checked", "checked"),
            n.setAttribute("name", "t"),
            e.appendChild(n),
            wt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
            e.innerHTML = "<textarea>x</textarea>",
            wt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue,
            e.innerHTML = "<option></option>",
            wt.option = !!e.lastChild
        }();
        var ue = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        ue.tbody = ue.tfoot = ue.colgroup = ue.caption = ue.thead,
        ue.th = ue.td,
        wt.option || (ue.optgroup = ue.option = [1, "<select multiple='multiple'>", "</select>"]);
        var se = /<|&#?\w+;/
          , ce = /^key/
          , le = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
          , fe = /^([^.]*)(?:\.(.+)|)/;
        Tt.event = {
            global: {},
            add: function(t, e, n, r, o) {
                var i, a, u, s, c, l, f, p, h, d, v, g = $t.get(t);
                if (Vt(t))
                    for (n.handler && (i = n,
                    n = i.handler,
                    o = i.selector),
                    o && Tt.find.matchesSelector(Zt, o),
                    n.guid || (n.guid = Tt.guid++),
                    (s = g.events) || (s = g.events = Object.create(null)),
                    (a = g.handle) || (a = g.handle = function(e) {
                        return "undefined" != typeof Tt && Tt.event.triggered !== e.type ? Tt.event.dispatch.apply(t, arguments) : void 0
                    }
                    ),
                    e = (e || "").match(Ft) || [""],
                    c = e.length; c--; )
                        u = fe.exec(e[c]) || [],
                        h = v = u[1],
                        d = (u[2] || "").split(".").sort(),
                        h && (f = Tt.event.special[h] || {},
                        h = (o ? f.delegateType : f.bindType) || h,
                        f = Tt.event.special[h] || {},
                        l = Tt.extend({
                            type: h,
                            origType: v,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext: o && Tt.expr.match.needsContext.test(o),
                            namespace: d.join(".")
                        }, i),
                        (p = s[h]) || (p = s[h] = [],
                        p.delegateCount = 0,
                        f.setup && f.setup.call(t, r, d, a) !== !1 || t.addEventListener && t.addEventListener(h, a)),
                        f.add && (f.add.call(t, l),
                        l.handler.guid || (l.handler.guid = n.guid)),
                        o ? p.splice(p.delegateCount++, 0, l) : p.push(l),
                        Tt.event.global[h] = !0)
            },
            remove: function(t, e, n, r, o) {
                var i, a, u, s, c, l, f, p, h, d, v, g = $t.hasData(t) && $t.get(t);
                if (g && (s = g.events)) {
                    for (e = (e || "").match(Ft) || [""],
                    c = e.length; c--; )
                        if (u = fe.exec(e[c]) || [],
                        h = v = u[1],
                        d = (u[2] || "").split(".").sort(),
                        h) {
                            for (f = Tt.event.special[h] || {},
                            h = (r ? f.delegateType : f.bindType) || h,
                            p = s[h] || [],
                            u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            a = i = p.length; i--; )
                                l = p[i],
                                !o && v !== l.origType || n && n.guid !== l.guid || u && !u.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (p.splice(i, 1),
                                l.selector && p.delegateCount--,
                                f.remove && f.remove.call(t, l));
                            a && !p.length && (f.teardown && f.teardown.call(t, d, g.handle) !== !1 || Tt.removeEvent(t, h, g.handle),
                            delete s[h])
                        } else
                            for (h in s)
                                Tt.event.remove(t, h + e[c], n, r, !0);
                    Tt.isEmptyObject(s) && $t.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                var e, n, r, o, i, a, u = new Array(arguments.length), s = Tt.event.fix(t), c = ($t.get(this, "events") || Object.create(null))[s.type] || [], l = Tt.event.special[s.type] || {};
                for (u[0] = s,
                e = 1; e < arguments.length; e++)
                    u[e] = arguments[e];
                if (s.delegateTarget = this,
                !l.preDispatch || l.preDispatch.call(this, s) !== !1) {
                    for (a = Tt.event.handlers.call(this, s, c),
                    e = 0; (o = a[e++]) && !s.isPropagationStopped(); )
                        for (s.currentTarget = o.elem,
                        n = 0; (i = o.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                            s.rnamespace && i.namespace !== !1 && !s.rnamespace.test(i.namespace) || (s.handleObj = i,
                            s.data = i.data,
                            r = ((Tt.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u),
                            void 0 !== r && (s.result = r) === !1 && (s.preventDefault(),
                            s.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, s),
                    s.result
                }
            },
            handlers: function(t, e) {
                var n, r, o, i, a, u = [], s = e.delegateCount, c = t.target;
                if (s && c.nodeType && !("click" === t.type && t.button >= 1))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== t.type || c.disabled !== !0)) {
                            for (i = [],
                            a = {},
                            n = 0; n < s; n++)
                                r = e[n],
                                o = r.selector + " ",
                                void 0 === a[o] && (a[o] = r.needsContext ? Tt(o, this).index(c) > -1 : Tt.find(o, this, null, [c]).length),
                                a[o] && i.push(r);
                            i.length && u.push({
                                elem: c,
                                handlers: i
                            })
                        }
                return c = this,
                s < e.length && u.push({
                    elem: c,
                    handlers: e.slice(s)
                }),
                u
            },
            addProp: function(t, e) {
                Object.defineProperty(Tt.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: Ct(e) ? function() {
                        if (this.originalEvent)
                            return e(this.originalEvent)
                    }
                    : function() {
                        if (this.originalEvent)
                            return this.originalEvent[t]
                    }
                    ,
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function(t) {
                return t[Tt.expando] ? t : new Tt.Event(t)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(t) {
                        var e = this || t;
                        return oe.test(e.type) && e.click && c(e, "input") && j(e, "click", T),
                        !1
                    },
                    trigger: function(t) {
                        var e = this || t;
                        return oe.test(e.type) && e.click && c(e, "input") && j(e, "click"),
                        !0
                    },
                    _default: function(t) {
                        var e = t.target;
                        return oe.test(e.type) && e.click && c(e, "input") && $t.get(e, "click") || c(e, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        },
        Tt.removeEvent = function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }
        ,
        Tt.Event = function(t, e) {
            return this instanceof Tt.Event ? (t && t.type ? (this.originalEvent = t,
            this.type = t.type,
            this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? T : N,
            this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target,
            this.currentTarget = t.currentTarget,
            this.relatedTarget = t.relatedTarget) : this.type = t,
            e && Tt.extend(this, e),
            this.timeStamp = t && t.timeStamp || Date.now(),
            void (this[Tt.expando] = !0)) : new Tt.Event(t,e)
        }
        ,
        Tt.Event.prototype = {
            constructor: Tt.Event,
            isDefaultPrevented: N,
            isPropagationStopped: N,
            isImmediatePropagationStopped: N,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = T,
                t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = T,
                t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = T,
                t && !this.isSimulated && t.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        Tt.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(t) {
                var e = t.button;
                return null == t.which && ce.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && le.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, Tt.event.addProp),
        Tt.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            Tt.event.special[t] = {
                setup: function() {
                    return j(this, t, A),
                    !1
                },
                trigger: function() {
                    return j(this, t),
                    !0
                },
                delegateType: e
            }
        }),
        Tt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            Tt.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, r = this, o = t.relatedTarget, i = t.handleObj;
                    return o && (o === r || Tt.contains(r, o)) || (t.type = i.origType,
                    n = i.handler.apply(this, arguments),
                    t.type = e),
                    n
                }
            }
        }),
        Tt.fn.extend({
            on: function(t, e, n, r) {
                return P(this, t, e, n, r)
            },
            one: function(t, e, n, r) {
                return P(this, t, e, n, r, 1)
            },
            off: function(t, e, n) {
                var r, o;
                if (t && t.preventDefault && t.handleObj)
                    return r = t.handleObj,
                    Tt(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                    this;
                if ("object" == typeof t) {
                    for (o in t)
                        this.off(o, e, t[o]);
                    return this
                }
                return e !== !1 && "function" != typeof e || (n = e,
                e = void 0),
                n === !1 && (n = N),
                this.each(function() {
                    Tt.event.remove(this, t, n, e)
                })
            }
        });
        var pe = /<script|<style|<link/i
          , he = /checked\s*(?:[^=]|=\s*.checked.)/i
          , de = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        Tt.extend({
            htmlPrefilter: function(t) {
                return t
            },
            clone: function(t, e, n) {
                var r, o, i, a, u = t.cloneNode(!0), s = te(t);
                if (!(wt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || Tt.isXMLDoc(t)))
                    for (a = M(u),
                    i = M(t),
                    r = 0,
                    o = i.length; r < o; r++)
                        U(i[r], a[r]);
                if (e)
                    if (n)
                        for (i = i || M(t),
                        a = a || M(u),
                        r = 0,
                        o = i.length; r < o; r++)
                            L(i[r], a[r]);
                    else
                        L(t, u);
                return a = M(u, "script"),
                a.length > 0 && k(a, !s && M(t, "script")),
                u
            },
            cleanData: function(t) {
                for (var e, n, r, o = Tt.event.special, i = 0; void 0 !== (n = t[i]); i++)
                    if (Vt(n)) {
                        if (e = n[$t.expando]) {
                            if (e.events)
                                for (r in e.events)
                                    o[r] ? Tt.event.remove(n, r) : Tt.removeEvent(n, r, e.handle);
                            n[$t.expando] = void 0
                        }
                        n[Yt.expando] && (n[Yt.expando] = void 0)
                    }
            }
        }),
        Tt.fn.extend({
            detach: function(t) {
                return q(this, t, !0)
            },
            remove: function(t) {
                return q(this, t)
            },
            text: function(t) {
                return Bt(this, function(t) {
                    return void 0 === t ? Tt.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return F(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = D(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return F(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = D(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return F(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return F(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++)
                    1 === t.nodeType && (Tt.cleanData(M(t, !1)),
                    t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t,
                e = null == e ? t : e,
                this.map(function() {
                    return Tt.clone(this, t, e)
                })
            },
            html: function(t) {
                return Bt(this, function(t) {
                    var e = this[0] || {}
                      , n = 0
                      , r = this.length;
                    if (void 0 === t && 1 === e.nodeType)
                        return e.innerHTML;
                    if ("string" == typeof t && !pe.test(t) && !ue[(ie.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = Tt.htmlPrefilter(t);
                        try {
                            for (; n < r; n++)
                                e = this[n] || {},
                                1 === e.nodeType && (Tt.cleanData(M(e, !1)),
                                e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return F(this, arguments, function(e) {
                    var n = this.parentNode;
                    Tt.inArray(this, t) < 0 && (Tt.cleanData(M(this)),
                    n && n.replaceChild(e, this))
                }, t)
            }
        }),
        Tt.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            Tt.fn[t] = function(t) {
                for (var n, r = [], o = Tt(t), i = o.length - 1, a = 0; a <= i; a++)
                    n = a === i ? this : this.clone(!0),
                    Tt(o[a])[e](n),
                    vt.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var ve = new RegExp("^(" + Jt + ")(?!px)[a-z%]+$","i")
          , ge = function(t) {
            var e = t.ownerDocument.defaultView;
            return e && e.opener || (e = n),
            e.getComputedStyle(t)
        }
          , ye = function(t, e, n) {
            var r, o, i = {};
            for (o in e)
                i[o] = t.style[o],
                t.style[o] = e[o];
            r = n.call(t);
            for (o in e)
                t.style[o] = i[o];
            return r
        }
          , me = new RegExp(Qt.join("|"),"i");
        !function() {
            function t() {
                if (l) {
                    c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                    l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                    Zt.appendChild(c).appendChild(l);
                    var t = n.getComputedStyle(l);
                    r = "1%" !== t.top,
                    s = 12 === e(t.marginLeft),
                    l.style.right = "60%",
                    a = 36 === e(t.right),
                    o = 36 === e(t.width),
                    l.style.position = "absolute",
                    i = 12 === e(l.offsetWidth / 3),
                    Zt.removeChild(c),
                    l = null
                }
            }
            function e(t) {
                return Math.round(parseFloat(t))
            }
            var r, o, i, a, u, s, c = Mt.createElement("div"), l = Mt.createElement("div");
            l.style && (l.style.backgroundClip = "content-box",
            l.cloneNode(!0).style.backgroundClip = "",
            wt.clearCloneStyle = "content-box" === l.style.backgroundClip,
            Tt.extend(wt, {
                boxSizingReliable: function() {
                    return t(),
                    o
                },
                pixelBoxStyles: function() {
                    return t(),
                    a
                },
                pixelPosition: function() {
                    return t(),
                    r
                },
                reliableMarginLeft: function() {
                    return t(),
                    s
                },
                scrollboxSize: function() {
                    return t(),
                    i
                },
                reliableTrDimensions: function() {
                    var t, e, r, o;
                    return null == u && (t = Mt.createElement("table"),
                    e = Mt.createElement("tr"),
                    r = Mt.createElement("div"),
                    t.style.cssText = "position:absolute;left:-11111px",
                    e.style.height = "1px",
                    r.style.height = "9px",
                    Zt.appendChild(t).appendChild(e).appendChild(r),
                    o = n.getComputedStyle(e),
                    u = parseInt(o.height) > 3,
                    Zt.removeChild(t)),
                    u
                }
            }))
        }();
        var be = ["Webkit", "Moz", "ms"]
          , xe = Mt.createElement("div").style
          , _e = {}
          , we = /^(none|table(?!-c[ea]).+)/
          , Ce = /^--/
          , Ee = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , Me = {
            letterSpacing: "0",
            fontWeight: "400"
        };
        Tt.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = H(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(t, e, n, r) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, i, a, u = m(e), s = Ce.test(e), c = t.style;
                    return s || (e = W(u)),
                    a = Tt.cssHooks[e] || Tt.cssHooks[u],
                    void 0 === n ? a && "get"in a && void 0 !== (o = a.get(t, !1, r)) ? o : c[e] : (i = typeof n,
                    "string" === i && (o = Gt.exec(n)) && o[1] && (n = w(t, e, o),
                    i = "number"),
                    null != n && n === n && ("number" !== i || s || (n += o && o[3] || (Tt.cssNumber[u] ? "" : "px")),
                    wt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"),
                    a && "set"in a && void 0 === (n = a.set(t, n, r)) || (s ? c.setProperty(e, n) : c[e] = n)),
                    void 0)
                }
            },
            css: function(t, e, n, r) {
                var o, i, a, u = m(e), s = Ce.test(e);
                return s || (e = W(u)),
                a = Tt.cssHooks[e] || Tt.cssHooks[u],
                a && "get"in a && (o = a.get(t, !0, n)),
                void 0 === o && (o = H(t, e, r)),
                "normal" === o && e in Me && (o = Me[e]),
                "" === n || n ? (i = parseFloat(o),
                n === !0 || isFinite(i) ? i || 0 : o) : o
            }
        }),
        Tt.each(["height", "width"], function(t, e) {
            Tt.cssHooks[e] = {
                get: function(t, n, r) {
                    if (n)
                        return !we.test(Tt.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Y(t, e, r) : ye(t, Ee, function() {
                            return Y(t, e, r)
                        })
                },
                set: function(t, n, r) {
                    var o, i = ge(t), a = !wt.scrollboxSize() && "absolute" === i.position, u = a || r, s = u && "border-box" === Tt.css(t, "boxSizing", !1, i), c = r ? $(t, e, r, s, i) : 0;
                    return s && a && (c -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(i[e]) - $(t, e, "border", !1, i) - .5)),
                    c && (o = Gt.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n,
                    n = Tt.css(t, e)),
                    V(t, n, c)
                }
            }
        }),
        Tt.cssHooks.marginLeft = B(wt.reliableMarginLeft, function(t, e) {
            if (e)
                return (parseFloat(H(t, "marginLeft")) || t.getBoundingClientRect().left - ye(t, {
                    marginLeft: 0
                }, function() {
                    return t.getBoundingClientRect().left
                })) + "px"
        }),
        Tt.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            Tt.cssHooks[t + e] = {
                expand: function(n) {
                    for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                        o[t + Qt[r] + e] = i[r] || i[r - 2] || i[0];
                    return o
                }
            },
            "margin" !== t && (Tt.cssHooks[t + e].set = V)
        }),
        Tt.fn.extend({
            css: function(t, e) {
                return Bt(this, function(t, e, n) {
                    var r, o, i = {}, a = 0;
                    if (Array.isArray(e)) {
                        for (r = ge(t),
                        o = e.length; a < o; a++)
                            i[e[a]] = Tt.css(t, e[a], !1, r);
                        return i
                    }
                    return void 0 !== n ? Tt.style(t, e, n) : Tt.css(t, e)
                }, t, e, arguments.length > 1)
            }
        }),
        Tt.Tween = K,
        K.prototype = {
            constructor: K,
            init: function(t, e, n, r, o, i) {
                this.elem = t,
                this.prop = n,
                this.easing = o || Tt.easing._default,
                this.options = e,
                this.start = this.now = this.cur(),
                this.end = r,
                this.unit = i || (Tt.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = K.propHooks[this.prop];
                return t && t.get ? t.get(this) : K.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = K.propHooks[this.prop];
                return this.options.duration ? this.pos = e = Tt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
                this.now = (this.end - this.start) * e + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : K.propHooks._default.set(this),
                this
            }
        },
        K.prototype.init.prototype = K.prototype,
        K.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = Tt.css(t.elem, t.prop, ""),
                    e && "auto" !== e ? e : 0)
                },
                set: function(t) {
                    Tt.fx.step[t.prop] ? Tt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !Tt.cssHooks[t.prop] && null == t.elem.style[W(t.prop)] ? t.elem[t.prop] = t.now : Tt.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        },
        K.propHooks.scrollTop = K.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        },
        Tt.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        },
        Tt.fx = K.prototype.init,
        Tt.fx.step = {};
        var ke, Se, Te = /^(?:toggle|show|hide)$/, Ne = /queueHooks$/;
        Tt.Animation = Tt.extend(et, {
            tweeners: {
                "*": [function(t, e) {
                    var n = this.createTween(t, e);
                    return w(n.elem, t, Gt.exec(e), n),
                    n
                }
                ]
            },
            tweener: function(t, e) {
                Ct(t) ? (e = t,
                t = ["*"]) : t = t.match(Ft);
                for (var n, r = 0, o = t.length; r < o; r++)
                    n = t[r],
                    et.tweeners[n] = et.tweeners[n] || [],
                    et.tweeners[n].unshift(e)
            },
            prefilters: [Z],
            prefilter: function(t, e) {
                e ? et.prefilters.unshift(t) : et.prefilters.push(t)
            }
        }),
        Tt.speed = function(t, e, n) {
            var r = t && "object" == typeof t ? Tt.extend({}, t) : {
                complete: n || !n && e || Ct(t) && t,
                duration: t,
                easing: n && e || e && !Ct(e) && e
            };
            return Tt.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in Tt.fx.speeds ? r.duration = Tt.fx.speeds[r.duration] : r.duration = Tt.fx.speeds._default),
            null != r.queue && r.queue !== !0 || (r.queue = "fx"),
            r.old = r.complete,
            r.complete = function() {
                Ct(r.old) && r.old.call(this),
                r.queue && Tt.dequeue(this, r.queue)
            }
            ,
            r
        }
        ,
        Tt.fn.extend({
            fadeTo: function(t, e, n, r) {
                return this.filter(ne).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, r)
            },
            animate: function(t, e, n, r) {
                var o = Tt.isEmptyObject(t)
                  , i = Tt.speed(e, n, r)
                  , a = function() {
                    var e = et(this, Tt.extend({}, t), i);
                    (o || $t.get(this, "finish")) && e.stop(!0)
                };
                return a.finish = a,
                o || i.queue === !1 ? this.each(a) : this.queue(i.queue, a)
            },
            stop: function(t, e, n) {
                var r = function(t) {
                    var e = t.stop;
                    delete t.stop,
                    e(n)
                };
                return "string" != typeof t && (n = e,
                e = t,
                t = void 0),
                e && this.queue(t || "fx", []),
                this.each(function() {
                    var e = !0
                      , o = null != t && t + "queueHooks"
                      , i = Tt.timers
                      , a = $t.get(this);
                    if (o)
                        a[o] && a[o].stop && r(a[o]);
                    else
                        for (o in a)
                            a[o] && a[o].stop && Ne.test(o) && r(a[o]);
                    for (o = i.length; o--; )
                        i[o].elem !== this || null != t && i[o].queue !== t || (i[o].anim.stop(n),
                        e = !1,
                        i.splice(o, 1));
                    !e && n || Tt.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"),
                this.each(function() {
                    var e, n = $t.get(this), r = n[t + "queue"], o = n[t + "queueHooks"], i = Tt.timers, a = r ? r.length : 0;
                    for (n.finish = !0,
                    Tt.queue(this, t, []),
                    o && o.stop && o.stop.call(this, !0),
                    e = i.length; e--; )
                        i[e].elem === this && i[e].queue === t && (i[e].anim.stop(!0),
                        i.splice(e, 1));
                    for (e = 0; e < a; e++)
                        r[e] && r[e].finish && r[e].finish.call(this);
                    delete n.finish
                })
            }
        }),
        Tt.each(["toggle", "show", "hide"], function(t, e) {
            var n = Tt.fn[e];
            Tt.fn[e] = function(t, r, o) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(G(e, !0), t, r, o)
            }
        }),
        Tt.each({
            slideDown: G("show"),
            slideUp: G("hide"),
            slideToggle: G("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            Tt.fn[t] = function(t, n, r) {
                return this.animate(e, t, n, r)
            }
        }),
        Tt.timers = [],
        Tt.fx.tick = function() {
            var t, e = 0, n = Tt.timers;
            for (ke = Date.now(); e < n.length; e++)
                t = n[e],
                t() || n[e] !== t || n.splice(e--, 1);
            n.length || Tt.fx.stop(),
            ke = void 0
        }
        ,
        Tt.fx.timer = function(t) {
            Tt.timers.push(t),
            Tt.fx.start()
        }
        ,
        Tt.fx.interval = 13,
        Tt.fx.start = function() {
            Se || (Se = !0,
            X())
        }
        ,
        Tt.fx.stop = function() {
            Se = null
        }
        ,
        Tt.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        Tt.fn.delay = function(t, e) {
            return t = Tt.fx ? Tt.fx.speeds[t] || t : t,
            e = e || "fx",
            this.queue(e, function(e, r) {
                var o = n.setTimeout(e, t);
                r.stop = function() {
                    n.clearTimeout(o)
                }
            })
        }
        ,
        function() {
            var t = Mt.createElement("input")
              , e = Mt.createElement("select")
              , n = e.appendChild(Mt.createElement("option"));
            t.type = "checkbox",
            wt.checkOn = "" !== t.value,
            wt.optSelected = n.selected,
            t = Mt.createElement("input"),
            t.value = "t",
            t.type = "radio",
            wt.radioValue = "t" === t.value
        }();
        var Ae, Oe = Tt.expr.attrHandle;
        Tt.fn.extend({
            attr: function(t, e) {
                return Bt(this, Tt.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    Tt.removeAttr(this, t)
                })
            }
        }),
        Tt.extend({
            attr: function(t, e, n) {
                var r, o, i = t.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                    return "undefined" == typeof t.getAttribute ? Tt.prop(t, e, n) : (1 === i && Tt.isXMLDoc(t) || (o = Tt.attrHooks[e.toLowerCase()] || (Tt.expr.match.bool.test(e) ? Ae : void 0)),
                    void 0 !== n ? null === n ? void Tt.removeAttr(t, e) : o && "set"in o && void 0 !== (r = o.set(t, n, e)) ? r : (t.setAttribute(e, n + ""),
                    n) : o && "get"in o && null !== (r = o.get(t, e)) ? r : (r = Tt.find.attr(t, e),
                    null == r ? void 0 : r))
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!wt.radioValue && "radio" === e && c(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e),
                            n && (t.value = n),
                            e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var n, r = 0, o = e && e.match(Ft);
                if (o && 1 === t.nodeType)
                    for (; n = o[r++]; )
                        t.removeAttribute(n)
            }
        }),
        Ae = {
            set: function(t, e, n) {
                return e === !1 ? Tt.removeAttr(t, n) : t.setAttribute(n, n),
                n
            }
        },
        Tt.each(Tt.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = Oe[e] || Tt.find.attr;
            Oe[e] = function(t, e, r) {
                var o, i, a = e.toLowerCase();
                return r || (i = Oe[a],
                Oe[a] = o,
                o = null != n(t, e, r) ? a : null,
                Oe[a] = i),
                o
            }
        });
        var Pe = /^(?:input|select|textarea|button)$/i
          , je = /^(?:a|area)$/i;
        Tt.fn.extend({
            prop: function(t, e) {
                return Bt(this, Tt.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[Tt.propFix[t] || t]
                })
            }
        }),
        Tt.extend({
            prop: function(t, e, n) {
                var r, o, i = t.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                    return 1 === i && Tt.isXMLDoc(t) || (e = Tt.propFix[e] || e,
                    o = Tt.propHooks[e]),
                    void 0 !== n ? o && "set"in o && void 0 !== (r = o.set(t, n, e)) ? r : t[e] = n : o && "get"in o && null !== (r = o.get(t, e)) ? r : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = Tt.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Pe.test(t.nodeName) || je.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }),
        wt.optSelected || (Tt.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex,
                null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex,
                e.parentNode && e.parentNode.selectedIndex)
            }
        }),
        Tt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            Tt.propFix[this.toLowerCase()] = this
        }),
        Tt.fn.extend({
            addClass: function(t) {
                var e, n, r, o, i, a, u, s = 0;
                if (Ct(t))
                    return this.each(function(e) {
                        Tt(this).addClass(t.call(this, e, rt(this)))
                    });
                if (e = ot(t),
                e.length)
                    for (; n = this[s++]; )
                        if (o = rt(n),
                        r = 1 === n.nodeType && " " + nt(o) + " ") {
                            for (a = 0; i = e[a++]; )
                                r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                            u = nt(r),
                            o !== u && n.setAttribute("class", u)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, r, o, i, a, u, s = 0;
                if (Ct(t))
                    return this.each(function(e) {
                        Tt(this).removeClass(t.call(this, e, rt(this)))
                    });
                if (!arguments.length)
                    return this.attr("class", "");
                if (e = ot(t),
                e.length)
                    for (; n = this[s++]; )
                        if (o = rt(n),
                        r = 1 === n.nodeType && " " + nt(o) + " ") {
                            for (a = 0; i = e[a++]; )
                                for (; r.indexOf(" " + i + " ") > -1; )
                                    r = r.replace(" " + i + " ", " ");
                            u = nt(r),
                            o !== u && n.setAttribute("class", u)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t
                  , r = "string" === n || Array.isArray(t);
                return "boolean" == typeof e && r ? e ? this.addClass(t) : this.removeClass(t) : Ct(t) ? this.each(function(n) {
                    Tt(this).toggleClass(t.call(this, n, rt(this), e), e)
                }) : this.each(function() {
                    var e, o, i, a;
                    if (r)
                        for (o = 0,
                        i = Tt(this),
                        a = ot(t); e = a[o++]; )
                            i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                    else
                        void 0 !== t && "boolean" !== n || (e = rt(this),
                        e && $t.set(this, "__className__", e),
                        this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : $t.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, n, r = 0;
                for (e = " " + t + " "; n = this[r++]; )
                    if (1 === n.nodeType && (" " + nt(rt(n)) + " ").indexOf(e) > -1)
                        return !0;
                return !1
            }
        });
        var De = /\r/g;
        Tt.fn.extend({
            val: function(t) {
                var e, n, r, o = this[0];
                {
                    if (arguments.length)
                        return r = Ct(t),
                        this.each(function(n) {
                            var o;
                            1 === this.nodeType && (o = r ? t.call(this, n, Tt(this).val()) : t,
                            null == o ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = Tt.map(o, function(t) {
                                return null == t ? "" : t + ""
                            })),
                            e = Tt.valHooks[this.type] || Tt.valHooks[this.nodeName.toLowerCase()],
                            e && "set"in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                        });
                    if (o)
                        return e = Tt.valHooks[o.type] || Tt.valHooks[o.nodeName.toLowerCase()],
                        e && "get"in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value,
                        "string" == typeof n ? n.replace(De, "") : null == n ? "" : n)
                }
            }
        }),
        Tt.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = Tt.find.attr(t, "value");
                        return null != e ? e : nt(Tt.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        var e, n, r, o = t.options, i = t.selectedIndex, a = "select-one" === t.type, u = a ? null : [], s = a ? i + 1 : o.length;
                        for (r = i < 0 ? s : a ? i : 0; r < s; r++)
                            if (n = o[r],
                            (n.selected || r === i) && !n.disabled && (!n.parentNode.disabled || !c(n.parentNode, "optgroup"))) {
                                if (e = Tt(n).val(),
                                a)
                                    return e;
                                u.push(e)
                            }
                        return u
                    },
                    set: function(t, e) {
                        for (var n, r, o = t.options, i = Tt.makeArray(e), a = o.length; a--; )
                            r = o[a],
                            (r.selected = Tt.inArray(Tt.valHooks.option.get(r), i) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1),
                        i
                    }
                }
            }
        }),
        Tt.each(["radio", "checkbox"], function() {
            Tt.valHooks[this] = {
                set: function(t, e) {
                    if (Array.isArray(e))
                        return t.checked = Tt.inArray(Tt(t).val(), e) > -1
                }
            },
            wt.checkOn || (Tt.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            }
            )
        }),
        wt.focusin = "onfocusin"in n;
        var Ie = /^(?:focusinfocus|focusoutblur)$/
          , Re = function(t) {
            t.stopPropagation()
        };
        Tt.extend(Tt.event, {
            trigger: function(t, e, r, o) {
                var i, a, u, s, c, l, f, p, h = [r || Mt], d = bt.call(t, "type") ? t.type : t, v = bt.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = p = u = r = r || Mt,
                3 !== r.nodeType && 8 !== r.nodeType && !Ie.test(d + Tt.event.triggered) && (d.indexOf(".") > -1 && (v = d.split("."),
                d = v.shift(),
                v.sort()),
                c = d.indexOf(":") < 0 && "on" + d,
                t = t[Tt.expando] ? t : new Tt.Event(d,"object" == typeof t && t),
                t.isTrigger = o ? 2 : 3,
                t.namespace = v.join("."),
                t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                t.result = void 0,
                t.target || (t.target = r),
                e = null == e ? [t] : Tt.makeArray(e, [t]),
                f = Tt.event.special[d] || {},
                o || !f.trigger || f.trigger.apply(r, e) !== !1)) {
                    if (!o && !f.noBubble && !Et(r)) {
                        for (s = f.delegateType || d,
                        Ie.test(s + d) || (a = a.parentNode); a; a = a.parentNode)
                            h.push(a),
                            u = a;
                        u === (r.ownerDocument || Mt) && h.push(u.defaultView || u.parentWindow || n)
                    }
                    for (i = 0; (a = h[i++]) && !t.isPropagationStopped(); )
                        p = a,
                        t.type = i > 1 ? s : f.bindType || d,
                        l = ($t.get(a, "events") || Object.create(null))[t.type] && $t.get(a, "handle"),
                        l && l.apply(a, e),
                        l = c && a[c],
                        l && l.apply && Vt(a) && (t.result = l.apply(a, e),
                        t.result === !1 && t.preventDefault());
                    return t.type = d,
                    o || t.isDefaultPrevented() || f._default && f._default.apply(h.pop(), e) !== !1 || !Vt(r) || c && Ct(r[d]) && !Et(r) && (u = r[c],
                    u && (r[c] = null),
                    Tt.event.triggered = d,
                    t.isPropagationStopped() && p.addEventListener(d, Re),
                    r[d](),
                    t.isPropagationStopped() && p.removeEventListener(d, Re),
                    Tt.event.triggered = void 0,
                    u && (r[c] = u)),
                    t.result
                }
            },
            simulate: function(t, e, n) {
                var r = Tt.extend(new Tt.Event, n, {
                    type: t,
                    isSimulated: !0
                });
                Tt.event.trigger(r, null, e)
            }
        }),
        Tt.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    Tt.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                if (n)
                    return Tt.event.trigger(t, e, n, !0)
            }
        }),
        wt.focusin || Tt.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                Tt.event.simulate(e, t.target, Tt.event.fix(t))
            };
            Tt.event.special[e] = {
                setup: function() {
                    var r = this.ownerDocument || this.document || this
                      , o = $t.access(r, e);
                    o || r.addEventListener(t, n, !0),
                    $t.access(r, e, (o || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this.document || this
                      , o = $t.access(r, e) - 1;
                    o ? $t.access(r, e, o) : (r.removeEventListener(t, n, !0),
                    $t.remove(r, e))
                }
            }
        });
        var Le = n.location
          , Ue = {
            guid: Date.now()
        }
          , Fe = /\?/;
        Tt.parseXML = function(t) {
            var e;
            if (!t || "string" != typeof t)
                return null;
            try {
                e = (new n.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || Tt.error("Invalid XML: " + t),
            e
        }
        ;
        var qe = /\[\]$/
          , He = /\r?\n/g
          , Be = /^(?:submit|button|image|reset|file)$/i
          , ze = /^(?:input|select|textarea|keygen)/i;
        Tt.param = function(t, e) {
            var n, r = [], o = function(t, e) {
                var n = Ct(e) ? e() : e;
                r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (null == t)
                return "";
            if (Array.isArray(t) || t.jquery && !Tt.isPlainObject(t))
                Tt.each(t, function() {
                    o(this.name, this.value)
                });
            else
                for (n in t)
                    it(n, t[n], e, o);
            return r.join("&")
        }
        ,
        Tt.fn.extend({
            serialize: function() {
                return Tt.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = Tt.prop(this, "elements");
                    return t ? Tt.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !Tt(this).is(":disabled") && ze.test(this.nodeName) && !Be.test(t) && (this.checked || !oe.test(t))
                }).map(function(t, e) {
                    var n = Tt(this).val();
                    return null == n ? null : Array.isArray(n) ? Tt.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(He, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(He, "\r\n")
                    }
                }).get()
            }
        });
        var We = /%20/g
          , Ve = /#.*$/
          , $e = /([?&])_=[^&]*/
          , Ye = /^(.*?):[ \t]*([^\r\n]*)$/gm
          , Ke = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
          , Xe = /^(?:GET|HEAD)$/
          , Je = /^\/\//
          , Ge = {}
          , Qe = {}
          , Ze = "*/".concat("*")
          , tn = Mt.createElement("a");
        tn.href = Le.href,
        Tt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Le.href,
                type: "GET",
                isLocal: Ke.test(Le.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ze,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": Tt.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? st(st(t, Tt.ajaxSettings), e) : st(Tt.ajaxSettings, t)
            },
            ajaxPrefilter: at(Ge),
            ajaxTransport: at(Qe),
            ajax: function(t, e) {
                function r(t, e, r, u) {
                    var c, p, h, x, _, w = e;
                    l || (l = !0,
                    s && n.clearTimeout(s),
                    o = void 0,
                    a = u || "",
                    C.readyState = t > 0 ? 4 : 0,
                    c = t >= 200 && t < 300 || 304 === t,
                    r && (x = ct(d, C, r)),
                    !c && Tt.inArray("script", d.dataTypes) > -1 && (d.converters["text script"] = function() {}
                    ),
                    x = lt(d, x, C, c),
                    c ? (d.ifModified && (_ = C.getResponseHeader("Last-Modified"),
                    _ && (Tt.lastModified[i] = _),
                    _ = C.getResponseHeader("etag"),
                    _ && (Tt.etag[i] = _)),
                    204 === t || "HEAD" === d.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = x.state,
                    p = x.data,
                    h = x.error,
                    c = !h)) : (h = w,
                    !t && w || (w = "error",
                    t < 0 && (t = 0))),
                    C.status = t,
                    C.statusText = (e || w) + "",
                    c ? y.resolveWith(v, [p, w, C]) : y.rejectWith(v, [C, w, h]),
                    C.statusCode(b),
                    b = void 0,
                    f && g.trigger(c ? "ajaxSuccess" : "ajaxError", [C, d, c ? p : h]),
                    m.fireWith(v, [C, w]),
                    f && (g.trigger("ajaxComplete", [C, d]),
                    --Tt.active || Tt.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t,
                t = void 0),
                e = e || {};
                var o, i, a, u, s, c, l, f, p, h, d = Tt.ajaxSetup({}, e), v = d.context || d, g = d.context && (v.nodeType || v.jquery) ? Tt(v) : Tt.event, y = Tt.Deferred(), m = Tt.Callbacks("once memory"), b = d.statusCode || {}, x = {}, _ = {}, w = "canceled", C = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (l) {
                            if (!u)
                                for (u = {}; e = Ye.exec(a); )
                                    u[e[1].toLowerCase() + " "] = (u[e[1].toLowerCase() + " "] || []).concat(e[2]);
                            e = u[t.toLowerCase() + " "]
                        }
                        return null == e ? null : e.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return l ? a : null
                    },
                    setRequestHeader: function(t, e) {
                        return null == l && (t = _[t.toLowerCase()] = _[t.toLowerCase()] || t,
                        x[t] = e),
                        this
                    },
                    overrideMimeType: function(t) {
                        return null == l && (d.mimeType = t),
                        this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (l)
                                C.always(t[C.status]);
                            else
                                for (e in t)
                                    b[e] = [b[e], t[e]];
                        return this
                    },
                    abort: function(t) {
                        var e = t || w;
                        return o && o.abort(e),
                        r(0, e),
                        this
                    }
                };
                if (y.promise(C),
                d.url = ((t || d.url || Le.href) + "").replace(Je, Le.protocol + "//"),
                d.type = e.method || e.type || d.method || d.type,
                d.dataTypes = (d.dataType || "*").toLowerCase().match(Ft) || [""],
                null == d.crossDomain) {
                    c = Mt.createElement("a");
                    try {
                        c.href = d.url,
                        c.href = c.href,
                        d.crossDomain = tn.protocol + "//" + tn.host != c.protocol + "//" + c.host
                    } catch (t) {
                        d.crossDomain = !0
                    }
                }
                if (d.data && d.processData && "string" != typeof d.data && (d.data = Tt.param(d.data, d.traditional)),
                ut(Ge, d, e, C),
                l)
                    return C;
                f = Tt.event && d.global,
                f && 0 === Tt.active++ && Tt.event.trigger("ajaxStart"),
                d.type = d.type.toUpperCase(),
                d.hasContent = !Xe.test(d.type),
                i = d.url.replace(Ve, ""),
                d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(We, "+")) : (h = d.url.slice(i.length),
                d.data && (d.processData || "string" == typeof d.data) && (i += (Fe.test(i) ? "&" : "?") + d.data,
                delete d.data),
                d.cache === !1 && (i = i.replace($e, "$1"),
                h = (Fe.test(i) ? "&" : "?") + "_=" + Ue.guid++ + h),
                d.url = i + h),
                d.ifModified && (Tt.lastModified[i] && C.setRequestHeader("If-Modified-Since", Tt.lastModified[i]),
                Tt.etag[i] && C.setRequestHeader("If-None-Match", Tt.etag[i])),
                (d.data && d.hasContent && d.contentType !== !1 || e.contentType) && C.setRequestHeader("Content-Type", d.contentType),
                C.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Ze + "; q=0.01" : "") : d.accepts["*"]);
                for (p in d.headers)
                    C.setRequestHeader(p, d.headers[p]);
                if (d.beforeSend && (d.beforeSend.call(v, C, d) === !1 || l))
                    return C.abort();
                if (w = "abort",
                m.add(d.complete),
                C.done(d.success),
                C.fail(d.error),
                o = ut(Qe, d, e, C)) {
                    if (C.readyState = 1,
                    f && g.trigger("ajaxSend", [C, d]),
                    l)
                        return C;
                    d.async && d.timeout > 0 && (s = n.setTimeout(function() {
                        C.abort("timeout")
                    }, d.timeout));
                    try {
                        l = !1,
                        o.send(x, r)
                    } catch (t) {
                        if (l)
                            throw t;
                        r(-1, t)
                    }
                } else
                    r(-1, "No Transport");
                return C
            },
            getJSON: function(t, e, n) {
                return Tt.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return Tt.get(t, void 0, e, "script")
            }
        }),
        Tt.each(["get", "post"], function(t, e) {
            Tt[e] = function(t, n, r, o) {
                return Ct(n) && (o = o || r,
                r = n,
                n = void 0),
                Tt.ajax(Tt.extend({
                    url: t,
                    type: e,
                    dataType: o,
                    data: n,
                    success: r
                }, Tt.isPlainObject(t) && t))
            }
        }),
        Tt.ajaxPrefilter(function(t) {
            var e;
            for (e in t.headers)
                "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
        }),
        Tt._evalUrl = function(t, e, n) {
            return Tt.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(t) {
                    Tt.globalEval(t, e, n)
                }
            })
        }
        ,
        Tt.fn.extend({
            wrapAll: function(t) {
                var e;
                return this[0] && (Ct(t) && (t = t.call(this[0])),
                e = Tt(t, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && e.insertBefore(this[0]),
                e.map(function() {
                    for (var t = this; t.firstElementChild; )
                        t = t.firstElementChild;
                    return t
                }).append(this)),
                this
            },
            wrapInner: function(t) {
                return Ct(t) ? this.each(function(e) {
                    Tt(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = Tt(this)
                      , n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = Ct(t);
                return this.each(function(n) {
                    Tt(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function(t) {
                return this.parent(t).not("body").each(function() {
                    Tt(this).replaceWith(this.childNodes)
                }),
                this
            }
        }),
        Tt.expr.pseudos.hidden = function(t) {
            return !Tt.expr.pseudos.visible(t)
        }
        ,
        Tt.expr.pseudos.visible = function(t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }
        ,
        Tt.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (t) {}
        }
        ;
        var en = {
            0: 200,
            1223: 204
        }
          , nn = Tt.ajaxSettings.xhr();
        wt.cors = !!nn && "withCredentials"in nn,
        wt.ajax = nn = !!nn,
        Tt.ajaxTransport(function(t) {
            var e, r;
            if (wt.cors || nn && !t.crossDomain)
                return {
                    send: function(o, i) {
                        var a, u = t.xhr();
                        if (u.open(t.type, t.url, t.async, t.username, t.password),
                        t.xhrFields)
                            for (a in t.xhrFields)
                                u[a] = t.xhrFields[a];
                        t.mimeType && u.overrideMimeType && u.overrideMimeType(t.mimeType),
                        t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                        for (a in o)
                            u.setRequestHeader(a, o[a]);
                        e = function(t) {
                            return function() {
                                e && (e = r = u.onload = u.onerror = u.onabort = u.ontimeout = u.onreadystatechange = null,
                                "abort" === t ? u.abort() : "error" === t ? "number" != typeof u.status ? i(0, "error") : i(u.status, u.statusText) : i(en[u.status] || u.status, u.statusText, "text" !== (u.responseType || "text") || "string" != typeof u.responseText ? {
                                    binary: u.response
                                } : {
                                    text: u.responseText
                                }, u.getAllResponseHeaders()))
                            }
                        }
                        ,
                        u.onload = e(),
                        r = u.onerror = u.ontimeout = e("error"),
                        void 0 !== u.onabort ? u.onabort = r : u.onreadystatechange = function() {
                            4 === u.readyState && n.setTimeout(function() {
                                e && r()
                            })
                        }
                        ,
                        e = e("abort");
                        try {
                            u.send(t.hasContent && t.data || null)
                        } catch (t) {
                            if (e)
                                throw t
                        }
                    },
                    abort: function() {
                        e && e()
                    }
                }
        }),
        Tt.ajaxPrefilter(function(t) {
            t.crossDomain && (t.contents.script = !1)
        }),
        Tt.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return Tt.globalEval(t),
                    t
                }
            }
        }),
        Tt.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1),
            t.crossDomain && (t.type = "GET")
        }),
        Tt.ajaxTransport("script", function(t) {
            if (t.crossDomain || t.scriptAttrs) {
                var e, n;
                return {
                    send: function(r, o) {
                        e = Tt("<script>").attr(t.scriptAttrs || {}).prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function(t) {
                            e.remove(),
                            n = null,
                            t && o("error" === t.type ? 404 : 200, t.type)
                        }
                        ),
                        Mt.head.appendChild(e[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var rn = []
          , on = /(=)\?(?=&|$)|\?\?/;
        Tt.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = rn.pop() || Tt.expando + "_" + Ue.guid++;
                return this[t] = !0,
                t
            }
        }),
        Tt.ajaxPrefilter("json jsonp", function(t, e, r) {
            var o, i, a, u = t.jsonp !== !1 && (on.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && on.test(t.data) && "data");
            if (u || "jsonp" === t.dataTypes[0])
                return o = t.jsonpCallback = Ct(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                u ? t[u] = t[u].replace(on, "$1" + o) : t.jsonp !== !1 && (t.url += (Fe.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
                t.converters["script json"] = function() {
                    return a || Tt.error(o + " was not called"),
                    a[0]
                }
                ,
                t.dataTypes[0] = "json",
                i = n[o],
                n[o] = function() {
                    a = arguments
                }
                ,
                r.always(function() {
                    void 0 === i ? Tt(n).removeProp(o) : n[o] = i,
                    t[o] && (t.jsonpCallback = e.jsonpCallback,
                    rn.push(o)),
                    a && Ct(i) && i(a[0]),
                    a = i = void 0
                }),
                "script"
        }),
        wt.createHTMLDocument = function() {
            var t = Mt.implementation.createHTMLDocument("").body;
            return t.innerHTML = "<form></form><form></form>",
            2 === t.childNodes.length
        }(),
        Tt.parseHTML = function(t, e, n) {
            if ("string" != typeof t)
                return [];
            "boolean" == typeof e && (n = e,
            e = !1);
            var r, o, i;
            return e || (wt.createHTMLDocument ? (e = Mt.implementation.createHTMLDocument(""),
            r = e.createElement("base"),
            r.href = Mt.location.href,
            e.head.appendChild(r)) : e = Mt),
            o = jt.exec(t),
            i = !n && [],
            o ? [e.createElement(o[1])] : (o = S([t], e, i),
            i && i.length && Tt(i).remove(),
            Tt.merge([], o.childNodes))
        }
        ,
        Tt.fn.load = function(t, e, n) {
            var r, o, i, a = this, u = t.indexOf(" ");
            return u > -1 && (r = nt(t.slice(u)),
            t = t.slice(0, u)),
            Ct(e) ? (n = e,
            e = void 0) : e && "object" == typeof e && (o = "POST"),
            a.length > 0 && Tt.ajax({
                url: t,
                type: o || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                i = arguments,
                a.html(r ? Tt("<div>").append(Tt.parseHTML(t)).find(r) : t)
            }).always(n && function(t, e) {
                a.each(function() {
                    n.apply(this, i || [t.responseText, e, t])
                })
            }
            ),
            this
        }
        ,
        Tt.expr.pseudos.animated = function(t) {
            return Tt.grep(Tt.timers, function(e) {
                return t === e.elem
            }).length
        }
        ,
        Tt.offset = {
            setOffset: function(t, e, n) {
                var r, o, i, a, u, s, c, l = Tt.css(t, "position"), f = Tt(t), p = {};
                "static" === l && (t.style.position = "relative"),
                u = f.offset(),
                i = Tt.css(t, "top"),
                s = Tt.css(t, "left"),
                c = ("absolute" === l || "fixed" === l) && (i + s).indexOf("auto") > -1,
                c ? (r = f.position(),
                a = r.top,
                o = r.left) : (a = parseFloat(i) || 0,
                o = parseFloat(s) || 0),
                Ct(e) && (e = e.call(t, n, Tt.extend({}, u))),
                null != e.top && (p.top = e.top - u.top + a),
                null != e.left && (p.left = e.left - u.left + o),
                "using"in e ? e.using.call(t, p) : ("number" == typeof p.top && (p.top += "px"),
                "number" == typeof p.left && (p.left += "px"),
                f.css(p))
            }
        },
        Tt.fn.extend({
            offset: function(t) {
                if (arguments.length)
                    return void 0 === t ? this : this.each(function(e) {
                        Tt.offset.setOffset(this, t, e)
                    });
                var e, n, r = this[0];
                if (r)
                    return r.getClientRects().length ? (e = r.getBoundingClientRect(),
                    n = r.ownerDocument.defaultView,
                    {
                        top: e.top + n.pageYOffset,
                        left: e.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    }
            },
            position: function() {
                if (this[0]) {
                    var t, e, n, r = this[0], o = {
                        top: 0,
                        left: 0
                    };
                    if ("fixed" === Tt.css(r, "position"))
                        e = r.getBoundingClientRect();
                    else {
                        for (e = this.offset(),
                        n = r.ownerDocument,
                        t = r.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === Tt.css(t, "position"); )
                            t = t.parentNode;
                        t && t !== r && 1 === t.nodeType && (o = Tt(t).offset(),
                        o.top += Tt.css(t, "borderTopWidth", !0),
                        o.left += Tt.css(t, "borderLeftWidth", !0))
                    }
                    return {
                        top: e.top - o.top - Tt.css(r, "marginTop", !0),
                        left: e.left - o.left - Tt.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === Tt.css(t, "position"); )
                        t = t.offsetParent;
                    return t || Zt
                })
            }
        }),
        Tt.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = "pageYOffset" === e;
            Tt.fn[t] = function(r) {
                return Bt(this, function(t, r, o) {
                    var i;
                    return Et(t) ? i = t : 9 === t.nodeType && (i = t.defaultView),
                    void 0 === o ? i ? i[e] : t[r] : void (i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : t[r] = o)
                }, t, r, arguments.length)
            }
        }),
        Tt.each(["top", "left"], function(t, e) {
            Tt.cssHooks[e] = B(wt.pixelPosition, function(t, n) {
                if (n)
                    return n = H(t, e),
                    ve.test(n) ? Tt(t).position()[e] + "px" : n
            })
        }),
        Tt.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            Tt.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, r) {
                Tt.fn[r] = function(o, i) {
                    var a = arguments.length && (n || "boolean" != typeof o)
                      , u = n || (o === !0 || i === !0 ? "margin" : "border");
                    return Bt(this, function(e, n, o) {
                        var i;
                        return Et(e) ? 0 === r.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement,
                        Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === o ? Tt.css(e, n, u) : Tt.style(e, n, o, u)
                    }, e, a ? o : void 0, a)
                }
            })
        }),
        Tt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            Tt.fn[e] = function(t) {
                return this.on(e, t)
            }
        }),
        Tt.fn.extend({
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, r) {
                return this.on(e, t, n, r)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            },
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }),
        Tt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
            Tt.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        });
        var an = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        Tt.proxy = function(t, e) {
            var n, r, o;
            if ("string" == typeof e && (n = t[e],
            e = t,
            t = n),
            Ct(t))
                return r = ht.call(arguments, 2),
                o = function() {
                    return t.apply(e || this, r.concat(ht.call(arguments)))
                }
                ,
                o.guid = t.guid = t.guid || Tt.guid++,
                o
        }
        ,
        Tt.holdReady = function(t) {
            t ? Tt.readyWait++ : Tt.ready(!0)
        }
        ,
        Tt.isArray = Array.isArray,
        Tt.parseJSON = JSON.parse,
        Tt.nodeName = c,
        Tt.isFunction = Ct,
        Tt.isWindow = Et,
        Tt.camelCase = m,
        Tt.type = u,
        Tt.now = Date.now,
        Tt.isNumeric = function(t) {
            var e = Tt.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }
        ,
        Tt.trim = function(t) {
            return null == t ? "" : (t + "").replace(an, "")
        }
        ,
        r = [],
        o = function() {
            return Tt
        }
        .apply(e, r),
        !(void 0 !== o && (t.exports = o));
        var un = n.jQuery
          , sn = n.$;
        return Tt.noConflict = function(t) {
            return n.$ === Tt && (n.$ = sn),
            t && n.jQuery === Tt && (n.jQuery = un),
            Tt
        }
        ,
        "undefined" == typeof i && (n.jQuery = n.$ = Tt),
        Tt
    })
}
, function(t, e, n) {
    var r = n(14)
      , o = n(10)
      , i = r(o, "DataView");
    t.exports = i
}
, function(t, e, n) {
    function r(t) {
        var e = -1
          , n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    var o = n(197)
      , i = n(198)
      , a = n(199)
      , u = n(200)
      , s = n(201);
    r.prototype.clear = o,
    r.prototype.delete = i,
    r.prototype.get = a,
    r.prototype.has = u,
    r.prototype.set = s,
    t.exports = r
}
, function(t, e, n) {
    var r = n(14)
      , o = n(10)
      , i = r(o, "Promise");
    t.exports = i
}
, function(t, e, n) {
    var r = n(14)
      , o = n(10)
      , i = r(o, "Set");
    t.exports = i
}
, function(t, e, n) {
    function r(t) {
        var e = -1
          , n = null == t ? 0 : t.length;
        for (this.__data__ = new o; ++e < n; )
            this.add(t[e])
    }
    var o = n(44)
      , i = n(220)
      , a = n(221);
    r.prototype.add = r.prototype.push = i,
    r.prototype.has = a,
    t.exports = r
}
, function(t, e, n) {
    var r = n(10)
      , o = r.Uint8Array;
    t.exports = o
}
, function(t, e, n) {
    var r = n(14)
      , o = n(10)
      , i = r(o, "WeakMap");
    t.exports = i
}
, function(t, e) {
    function n(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, o = 0, i = []; ++n < r; ) {
            var a = t[n];
            e(a, n, t) && (i[o++] = a)
        }
        return i
    }
    t.exports = n
}
, function(t, e, n) {
    function r(t, e) {
        var n = a(t)
          , r = !n && i(t)
          , l = !n && !r && u(t)
          , p = !n && !r && !l && c(t)
          , h = n || r || l || p
          , d = h ? o(t.length, String) : []
          , v = d.length;
        for (var g in t)
            !e && !f.call(t, g) || h && ("length" == g || l && ("offset" == g || "parent" == g) || p && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || s(g, v)) || d.push(g);
        return d
    }
    var o = n(180)
      , i = n(85)
      , a = n(11)
      , u = n(86)
      , s = n(79)
      , c = n(88)
      , l = Object.prototype
      , f = l.hasOwnProperty;
    t.exports = r
}
, function(t, e) {
    function n(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, o = Array(r); ++n < r; )
            o[n] = e(t[n], n, t);
        return o
    }
    t.exports = n
}
, function(t, e) {
    function n(t, e) {
        for (var n = -1, r = e.length, o = t.length; ++n < r; )
            t[o + n] = e[n];
        return t
    }
    t.exports = n
}
, function(t, e) {
    function n(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
            if (e(t[n], n, t))
                return !0;
        return !1
    }
    t.exports = n
}
, function(t, e, n) {
    function r(t, e, n) {
        "__proto__" == e && o ? o(t, e, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : t[e] = n
    }
    var o = n(186);
    t.exports = r
}
, function(t, e, n) {
    var r = n(185)
      , o = r();
    t.exports = o
}
, function(t, e, n) {
    function r(t, e) {
        return t && o(t, e, i)
    }
    var o = n(165)
      , i = n(49);
    t.exports = r
}
, function(t, e, n) {
    function r(t, e, n) {
        var r = e(t);
        return i(t) ? r : o(r, n(t))
    }
    var o = n(162)
      , i = n(11);
    t.exports = r
}
, function(t, e) {
    function n(t, e) {
        return null != t && e in Object(t)
    }
    t.exports = n
}
, function(t, e, n) {
    function r(t) {
        return i(t) && o(t) == a
    }
    var o = n(16)
      , i = n(17)
      , a = "[object Arguments]";
    t.exports = r
}
, function(t, e, n) {
    function r(t, e, n, r, g, m) {
        var b = c(t)
          , x = c(e)
          , _ = b ? d : s(t)
          , w = x ? d : s(e);
        _ = _ == h ? v : _,
        w = w == h ? v : w;
        var C = _ == v
          , E = w == v
          , M = _ == w;
        if (M && l(t)) {
            if (!l(e))
                return !1;
            b = !0,
            C = !1
        }
        if (M && !C)
            return m || (m = new o),
            b || f(t) ? i(t, e, n, r, g, m) : a(t, e, _, n, r, g, m);
        if (!(n & p)) {
            var k = C && y.call(t, "__wrapped__")
              , S = E && y.call(e, "__wrapped__");
            if (k || S) {
                var T = k ? t.value() : t
                  , N = S ? e.value() : e;
                return m || (m = new o),
                g(T, N, n, r, m)
            }
        }
        return !!M && (m || (m = new o),
        u(t, e, n, r, g, m))
    }
    var o = n(73)
      , i = n(77)
      , a = n(187)
      , u = n(188)
      , s = n(194)
      , c = n(11)
      , l = n(86)
      , f = n(88)
      , p = 1
      , h = "[object Arguments]"
      , d = "[object Array]"
      , v = "[object Object]"
      , g = Object.prototype
      , y = g.hasOwnProperty;
    t.exports = r
}
, function(t, e, n) {
    function r(t, e, n, r) {
        var s = n.length
          , c = s
          , l = !r;
        if (null == t)
            return !c;
        for (t = Object(t); s--; ) {
            var f = n[s];
            if (l && f[2] ? f[1] !== t[f[0]] : !(f[0]in t))
                return !1
        }
        for (; ++s < c; ) {
            f = n[s];
            var p = f[0]
              , h = t[p]
              , d = f[1];
            if (l && f[2]) {
                if (void 0 === h && !(p in t))
                    return !1
            } else {
                var v = new o;
                if (r)
                    var g = r(h, d, p, t, e, v);
                if (!(void 0 === g ? i(d, h, a | u, r, v) : g))
                    return !1
            }
        }
        return !0
    }
    var o = n(73)
      , i = n(75)
      , a = 1
      , u = 2;
    t.exports = r
}
, function(t, e, n) {
    function r(t) {
        if (!a(t) || i(t))
            return !1;
        var e = o(t) ? d : c;
        return e.test(u(t))
    }
    var o = n(87)
      , i = n(203)
      , a = n(47)
      , u = n(83)
      , s = /[\\^$.*+?()[\]{}|]/g
      , c = /^\[object .+?Constructor\]$/
      , l = Function.prototype
      , f = Object.prototype
      , p = l.toString
      , h = f.hasOwnProperty
      , d = RegExp("^" + p.call(h).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = r
}
, function(t, e, n) {
    function r(t) {
        return a(t) && i(t.length) && !!O[o(t)]
    }
    var o = n(16)
      , i = n(46)
      , a = n(17)
      , u = "[object Arguments]"
      , s = "[object Array]"
      , c = "[object Boolean]"
      , l = "[object Date]"
      , f = "[object Error]"
      , p = "[object Function]"
      , h = "[object Map]"
      , d = "[object Number]"
      , v = "[object Object]"
      , g = "[object RegExp]"
      , y = "[object Set]"
      , m = "[object String]"
      , b = "[object WeakMap]"
      , x = "[object ArrayBuffer]"
      , _ = "[object DataView]"
      , w = "[object Float32Array]"
      , C = "[object Float64Array]"
      , E = "[object Int8Array]"
      , M = "[object Int16Array]"
      , k = "[object Int32Array]"
      , S = "[object Uint8Array]"
      , T = "[object Uint8ClampedArray]"
      , N = "[object Uint16Array]"
      , A = "[object Uint32Array]"
      , O = {};
    O[w] = O[C] = O[E] = O[M] = O[k] = O[S] = O[T] = O[N] = O[A] = !0,
    O[u] = O[s] = O[x] = O[c] = O[_] = O[l] = O[f] = O[p] = O[h] = O[d] = O[v] = O[g] = O[y] = O[m] = O[b] = !1,
    t.exports = r
}
, function(t, e, n) {
    function r(t) {
        return "function" == typeof t ? t : null == t ? a : "object" == typeof t ? u(t) ? i(t[0], t[1]) : o(t) : s(t)
    }
    var o = n(176)
      , i = n(177)
      , a = n(231)
      , u = n(11)
      , s = n(236);
    t.exports = r
}
, function(t, e, n) {
    function r(t) {
        if (!o(t))
            return i(t);
        var e = [];
        for (var n in Object(t))
            u.call(t, n) && "constructor" != n && e.push(n);
        return e
    }
    var o = n(204)
      , i = n(217)
      , a = Object.prototype
      , u = a.hasOwnProperty;
    t.exports = r
}
, function(t, e, n) {
    function r(t) {
        var e = i(t);
        return 1 == e.length && e[0][2] ? a(e[0][0], e[0][1]) : function(n) {
            return n === t || o(n, t, e)
        }
    }
    var o = n(171)
      , i = n(190)
      , a = n(81);
    t.exports = r
}
, function(t, e, n) {
    function r(t, e) {
        return u(t) && s(e) ? c(l(t), e) : function(n) {
            var r = i(n, t);
            return void 0 === r && r === e ? a(n, t) : o(e, r, f | p)
        }
    }
    var o = n(75)
      , i = n(229)
      , a = n(230)
      , u = n(45)
      , s = n(80)
      , c = n(81)
      , l = n(36)
      , f = 1
      , p = 2;
    t.exports = r
}
, function(t, e) {
    function n(t) {
        return function(e) {
            return null == e ? void 0 : e[t]
        }
    }
    t.exports = n
}
, function(t, e, n) {
    function r(t) {
        return function(e) {
            return o(e, t)
        }
    }
    var o = n(74);
    t.exports = r
}
, function(t, e) {
    function n(t, e) {
        for (var n = -1, r = Array(t); ++n < t; )
            r[n] = e(n);
        return r
    }
    t.exports = n
}
, function(t, e, n) {
    function r(t) {
        if ("string" == typeof t)
            return t;
        if (a(t))
            return i(t, r) + "";
        if (u(t))
            return l ? l.call(t) : "";
        var e = t + "";
        return "0" == e && 1 / t == -s ? "-0" : e
    }
    var o = n(32)
      , i = n(161)
      , a = n(11)
      , u = n(48)
      , s = 1 / 0
      , c = o ? o.prototype : void 0
      , l = c ? c.toString : void 0;
    t.exports = r
}
, function(t, e) {
    function n(t) {
        return function(e) {
            return t(e)
        }
    }
    t.exports = n
}
, function(t, e) {
    function n(t, e) {
        return t.has(e)
    }
    t.exports = n
}
, function(t, e, n) {
    var r = n(10)
      , o = r["__core-js_shared__"];
    t.exports = o
}
, function(t, e) {
    function n(t) {
        return function(e, n, r) {
            for (var o = -1, i = Object(e), a = r(e), u = a.length; u--; ) {
                var s = a[t ? u : ++o];
                if (n(i[s], s, i) === !1)
                    break
            }
            return e
        }
    }
    t.exports = n
}
, function(t, e, n) {
    var r = n(14)
      , o = function() {
        try {
            var t = r(Object, "defineProperty");
            return t({}, "", {}),
            t
        } catch (t) {}
    }();
    t.exports = o
}
, function(t, e, n) {
    function r(t, e, n, r, o, C, M) {
        switch (n) {
        case w:
            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
                return !1;
            t = t.buffer,
            e = e.buffer;
        case _:
            return !(t.byteLength != e.byteLength || !C(new i(t), new i(e)));
        case p:
        case h:
        case g:
            return a(+t, +e);
        case d:
            return t.name == e.name && t.message == e.message;
        case y:
        case b:
            return t == e + "";
        case v:
            var k = s;
        case m:
            var S = r & l;
            if (k || (k = c),
            t.size != e.size && !S)
                return !1;
            var T = M.get(t);
            if (T)
                return T == e;
            r |= f,
            M.set(t, e);
            var N = u(k(t), k(e), r, o, C, M);
            return M.delete(t),
            N;
        case x:
            if (E)
                return E.call(t) == E.call(e)
        }
        return !1
    }
    var o = n(32)
      , i = n(157)
      , a = n(84)
      , u = n(77)
      , s = n(215)
      , c = n(222)
      , l = 1
      , f = 2
      , p = "[object Boolean]"
      , h = "[object Date]"
      , d = "[object Error]"
      , v = "[object Map]"
      , g = "[object Number]"
      , y = "[object RegExp]"
      , m = "[object Set]"
      , b = "[object String]"
      , x = "[object Symbol]"
      , _ = "[object ArrayBuffer]"
      , w = "[object DataView]"
      , C = o ? o.prototype : void 0
      , E = C ? C.valueOf : void 0;
    t.exports = r
}
, function(t, e, n) {
    function r(t, e, n, r, a, s) {
        var c = n & i
          , l = o(t)
          , f = l.length
          , p = o(e)
          , h = p.length;
        if (f != h && !c)
            return !1;
        for (var d = f; d--; ) {
            var v = l[d];
            if (!(c ? v in e : u.call(e, v)))
                return !1
        }
        var g = s.get(t);
        if (g && s.get(e))
            return g == e;
        var y = !0;
        s.set(t, e),
        s.set(e, t);
        for (var m = c; ++d < f; ) {
            v = l[d];
            var b = t[v]
              , x = e[v];
            if (r)
                var _ = c ? r(x, b, v, e, t, s) : r(b, x, v, t, e, s);
            if (!(void 0 === _ ? b === x || a(b, x, n, r, s) : _)) {
                y = !1;
                break
            }
            m || (m = "constructor" == v)
        }
        if (y && !m) {
            var w = t.constructor
              , C = e.constructor;
            w != C && "constructor"in t && "constructor"in e && !("function" == typeof w && w instanceof w && "function" == typeof C && C instanceof C) && (y = !1)
        }
        return s.delete(t),
        s.delete(e),
        y
    }
    var o = n(189)
      , i = 1
      , a = Object.prototype
      , u = a.hasOwnProperty;
    t.exports = r
}
, function(t, e, n) {
    function r(t) {
        return o(t, a, i)
    }
    var o = n(167)
      , i = n(193)
      , a = n(49);
    t.exports = r
}
, function(t, e, n) {
    function r(t) {
        for (var e = i(t), n = e.length; n--; ) {
            var r = e[n]
              , a = t[r];
            e[n] = [r, a, o(a)]
        }
        return e
    }
    var o = n(80)
      , i = n(49);
    t.exports = r
}
, function(t, e, n) {
    var r = n(82)
      , o = r(Object.getPrototypeOf, Object);
    t.exports = o
}
, function(t, e, n) {
    function r(t) {
        var e = a.call(t, s)
          , n = t[s];
        try {
            t[s] = void 0;
            var r = !0
        } catch (t) {}
        var o = u.call(t);
        return r && (e ? t[s] = n : delete t[s]),
        o
    }
    var o = n(32)
      , i = Object.prototype
      , a = i.hasOwnProperty
      , u = i.toString
      , s = o ? o.toStringTag : void 0;
    t.exports = r
}
, function(t, e, n) {
    var r = n(159)
      , o = n(237)
      , i = Object.prototype
      , a = i.propertyIsEnumerable
      , u = Object.getOwnPropertySymbols
      , s = u ? function(t) {
        return null == t ? [] : (t = Object(t),
        r(u(t), function(e) {
            return a.call(t, e)
        }))
    }
    : o;
    t.exports = s
}
, function(t, e, n) {
    var r = n(152)
      , o = n(43)
      , i = n(154)
      , a = n(155)
      , u = n(158)
      , s = n(16)
      , c = n(83)
      , l = "[object Map]"
      , f = "[object Object]"
      , p = "[object Promise]"
      , h = "[object Set]"
      , d = "[object WeakMap]"
      , v = "[object DataView]"
      , g = c(r)
      , y = c(o)
      , m = c(i)
      , b = c(a)
      , x = c(u)
      , _ = s;
    (r && _(new r(new ArrayBuffer(1))) != v || o && _(new o) != l || i && _(i.resolve()) != p || a && _(new a) != h || u && _(new u) != d) && (_ = function(t) {
        var e = s(t)
          , n = e == f ? t.constructor : void 0
          , r = n ? c(n) : "";
        if (r)
            switch (r) {
            case g:
                return v;
            case y:
                return l;
            case m:
                return p;
            case b:
                return h;
            case x:
                return d
            }
        return e
    }
    ),
    t.exports = _
}
, function(t, e) {
    function n(t, e) {
        return null == t ? void 0 : t[e]
    }
    t.exports = n
}
, function(t, e, n) {
    function r(t, e, n) {
        e = o(e, t);
        for (var r = -1, l = e.length, f = !1; ++r < l; ) {
            var p = c(e[r]);
            if (!(f = null != t && n(t, p)))
                break;
            t = t[p]
        }
        return f || ++r != l ? f : (l = null == t ? 0 : t.length,
        !!l && s(l) && u(p, l) && (a(t) || i(t)))
    }
    var o = n(76)
      , i = n(85)
      , a = n(11)
      , u = n(79)
      , s = n(46)
      , c = n(36);
    t.exports = r
}
, function(t, e, n) {
    function r() {
        this.__data__ = o ? o(null) : {},
        this.size = 0
    }
    var o = n(35);
    t.exports = r
}
, function(t, e) {
    function n(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0,
        e
    }
    t.exports = n
}
, function(t, e, n) {
    function r(t) {
        var e = this.__data__;
        if (o) {
            var n = e[t];
            return n === i ? void 0 : n
        }
        return u.call(e, t) ? e[t] : void 0
    }
    var o = n(35)
      , i = "__lodash_hash_undefined__"
      , a = Object.prototype
      , u = a.hasOwnProperty;
    t.exports = r
}
, function(t, e, n) {
    function r(t) {
        var e = this.__data__;
        return o ? void 0 !== e[t] : a.call(e, t)
    }
    var o = n(35)
      , i = Object.prototype
      , a = i.hasOwnProperty;
    t.exports = r
}
, function(t, e, n) {
    function r(t, e) {
        var n = this.__data__;
        return this.size += this.has(t) ? 0 : 1,
        n[t] = o && void 0 === e ? i : e,
        this
    }
    var o = n(35)
      , i = "__lodash_hash_undefined__";
    t.exports = r
}
, function(t, e) {
    function n(t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
    }
    t.exports = n
}
, function(t, e, n) {
    function r(t) {
        return !!i && i in t
    }
    var o = n(184)
      , i = function() {
        var t = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : ""
    }();
    t.exports = r
}
, function(t, e) {
    function n(t) {
        var e = t && t.constructor
          , n = "function" == typeof e && e.prototype || r;
        return t === n
    }
    var r = Object.prototype;
    t.exports = n
}
, function(t, e) {
    function n() {
        this.__data__ = [],
        this.size = 0
    }
    t.exports = n
}
, function(t, e, n) {
    function r(t) {
        var e = this.__data__
          , n = o(e, t);
        if (n < 0)
            return !1;
        var r = e.length - 1;
        return n == r ? e.pop() : a.call(e, n, 1),
        --this.size,
        !0
    }
    var o = n(33)
      , i = Array.prototype
      , a = i.splice;
    t.exports = r
}
, function(t, e, n) {
    function r(t) {
        var e = this.__data__
          , n = o(e, t);
        return n < 0 ? void 0 : e[n][1]
    }
    var o = n(33);
    t.exports = r
}
, function(t, e, n) {
    function r(t) {
        return o(this.__data__, t) > -1
    }
    var o = n(33);
    t.exports = r
}
, function(t, e, n) {
    function r(t, e) {
        var n = this.__data__
          , r = o(n, t);
        return r < 0 ? (++this.size,
        n.push([t, e])) : n[r][1] = e,
        this
    }
    var o = n(33);
    t.exports = r
}
, function(t, e, n) {
    function r() {
        this.size = 0,
        this.__data__ = {
            hash: new o,
            map: new (a || i),
            string: new o
        }
    }
    var o = n(153)
      , i = n(31)
      , a = n(43);
    t.exports = r
}
, function(t, e, n) {
    function r(t) {
        var e = o(this, t).delete(t);
        return this.size -= e ? 1 : 0,
        e
    }
    var o = n(34);
    t.exports = r
}
, function(t, e, n) {
    function r(t) {
        return o(this, t).get(t)
    }
    var o = n(34);
    t.exports = r
}
, function(t, e, n) {
    function r(t) {
        return o(this, t).has(t)
    }
    var o = n(34);
    t.exports = r
}
, function(t, e, n) {
    function r(t, e) {
        var n = o(this, t)
          , r = n.size;
        return n.set(t, e),
        this.size += n.size == r ? 0 : 1,
        this
    }
    var o = n(34);
    t.exports = r
}
, function(t, e) {
    function n(t) {
        var e = -1
          , n = Array(t.size);
        return t.forEach(function(t, r) {
            n[++e] = [r, t]
        }),
        n
    }
    t.exports = n
}
, function(t, e, n) {
    function r(t) {
        var e = o(t, function(t) {
            return n.size === i && n.clear(),
            t
        })
          , n = e.cache;
        return e
    }
    var o = n(235)
      , i = 500;
    t.exports = r
}
, function(t, e, n) {
    var r = n(82)
      , o = r(Object.keys, Object);
    t.exports = o
}
, function(t, e, n) {
    (function(t) {
        var r = n(78)
          , o = "object" == typeof e && e && !e.nodeType && e
          , i = o && "object" == typeof t && t && !t.nodeType && t
          , a = i && i.exports === o
          , u = a && r.process
          , s = function() {
            try {
                var t = i && i.require && i.require("util").types;
                return t ? t : u && u.binding && u.binding("util")
            } catch (t) {}
        }();
        t.exports = s
    }
    ).call(e, n(118)(t))
}
, function(t, e) {
    function n(t) {
        return o.call(t)
    }
    var r = Object.prototype
      , o = r.toString;
    t.exports = n
}
, function(t, e) {
    function n(t) {
        return this.__data__.set(t, r),
        this
    }
    var r = "__lodash_hash_undefined__";
    t.exports = n
}
, function(t, e) {
    function n(t) {
        return this.__data__.has(t)
    }
    t.exports = n
}
, function(t, e) {
    function n(t) {
        var e = -1
          , n = Array(t.size);
        return t.forEach(function(t) {
            n[++e] = t
        }),
        n
    }
    t.exports = n
}
, function(t, e, n) {
    function r() {
        this.__data__ = new o,
        this.size = 0
    }
    var o = n(31);
    t.exports = r
}
, function(t, e) {
    function n(t) {
        var e = this.__data__
          , n = e.delete(t);
        return this.size = e.size,
        n
    }
    t.exports = n
}
, function(t, e) {
    function n(t) {
        return this.__data__.get(t)
    }
    t.exports = n
}
, function(t, e) {
    function n(t) {
        return this.__data__.has(t)
    }
    t.exports = n
}
, function(t, e, n) {
    function r(t, e) {
        var n = this.__data__;
        if (n instanceof o) {
            var r = n.__data__;
            if (!i || r.length < u - 1)
                return r.push([t, e]),
                this.size = ++n.size,
                this;
            n = this.__data__ = new a(r)
        }
        return n.set(t, e),
        this.size = n.size,
        this
    }
    var o = n(31)
      , i = n(43)
      , a = n(44)
      , u = 200;
    t.exports = r
}
, function(t, e, n) {
    var r = n(216)
      , o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
      , i = /\\(\\)?/g
      , a = r(function(t) {
        var e = [];
        return 46 === t.charCodeAt(0) && e.push(""),
        t.replace(o, function(t, n, r, o) {
            e.push(r ? o.replace(i, "$1") : n || t)
        }),
        e
    });
    t.exports = a
}
, function(t, e, n) {
    function r(t, e, n) {
        var r = null == t ? void 0 : o(t, e);
        return void 0 === r ? n : r
    }
    var o = n(74);
    t.exports = r
}
, function(t, e, n) {
    function r(t, e) {
        return null != t && i(t, e, o)
    }
    var o = n(168)
      , i = n(196);
    t.exports = r
}
, function(t, e) {
    function n(t) {
        return t
    }
    t.exports = n
}
, function(t, e, n) {
    function r(t) {
        return null != t && i(t.length) && !o(t)
    }
    var o = n(87)
      , i = n(46);
    t.exports = r
}
, function(t, e, n) {
    function r(t) {
        if (!a(t) || o(t) != u)
            return !1;
        var e = i(t);
        if (null === e)
            return !0;
        var n = f.call(e, "constructor") && e.constructor;
        return "function" == typeof n && n instanceof n && l.call(n) == p
    }
    var o = n(16)
      , i = n(191)
      , a = n(17)
      , u = "[object Object]"
      , s = Function.prototype
      , c = Object.prototype
      , l = s.toString
      , f = c.hasOwnProperty
      , p = l.call(Object);
    t.exports = r
}
, function(t, e, n) {
    function r(t, e) {
        var n = {};
        return e = a(e, 3),
        i(t, function(t, r, i) {
            o(n, r, e(t, r, i))
        }),
        n
    }
    var o = n(164)
      , i = n(166)
      , a = n(174);
    t.exports = r
}
, function(t, e, n) {
    function r(t, e) {
        if ("function" != typeof t || null != e && "function" != typeof e)
            throw new TypeError(i);
        var n = function() {
            var r = arguments
              , o = e ? e.apply(this, r) : r[0]
              , i = n.cache;
            if (i.has(o))
                return i.get(o);
            var a = t.apply(this, r);
            return n.cache = i.set(o, a) || i,
            a
        };
        return n.cache = new (r.Cache || o),
        n
    }
    var o = n(44)
      , i = "Expected a function";
    r.Cache = o,
    t.exports = r
}
, function(t, e, n) {
    function r(t) {
        return a(t) ? o(u(t)) : i(t)
    }
    var o = n(178)
      , i = n(179)
      , a = n(45)
      , u = n(36);
    t.exports = r
}
, function(t, e) {
    function n() {
        return []
    }
    t.exports = n
}
, function(t, e) {
    function n() {
        return !1
    }
    t.exports = n
}
, function(t, e, n) {
    function r(t) {
        return null == t ? "" : o(t)
    }
    var o = n(181);
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    function o(t, e, n) {
        if (t) {
            e(t);
            var r = n(t);
            if (r)
                for (var i = r.length, a = 0; a < i; a++)
                    o(r[a], e, n)
        }
    }
    function i(t, e) {
        var n = null;
        return o(t, function(t) {
            t.name === e && (n = t)
        }, function(t) {
            return t.children
        }),
        n
    }
    function a(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
            name: e.key || "state",
            children: []
        };
        if (!(0,
        l.default)(t) && t && !t.toJS)
            return {};
        var r = e.key
          , o = void 0 === r ? "state" : r
          , u = e.pushMethod
          , c = void 0 === u ? "push" : u
          , f = i(n, o);
        return null === f ? {} : ((0,
        p.default)(t && t.toJS ? t.toJS() : t, function(t, e) {
            var r = t && t.toJS ? t.toJS() : t
              , o = {
                name: e
            };
            if ((0,
            s.default)(r)) {
                o.children = [];
                for (var i = 0; i < r.length; i++) {
                    var u;
                    o.children[c]((u = {
                        name: e + "[" + i + "]"
                    },
                    u[(0,
                    l.default)(r[i]) ? "object" : "value"] = r[i],
                    u))
                }
            } else
                (0,
                l.default)(r) ? o.children = [] : o.value = r;
            f.children[c](o),
            a(r, {
                key: e,
                pushMethod: c
            }, n)
        }),
        n)
    }
    e.__esModule = !0,
    e.default = a;
    var u = n(11)
      , s = r(u)
      , c = n(233)
      , l = r(c)
      , f = n(234)
      , p = r(f)
}
, function(t, e, n) {
    "use strict";
    function r(t, e, n, r, o) {}
    r.resetWarningCache = function() {}
    ,
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    function r() {
        return null
    }
    var o = n(308)
      , i = n(4)
      , a = n(243)
      , u = n(241)
      , s = Function.call.bind(Object.prototype.hasOwnProperty)
      , c = function() {};
    t.exports = function(t, e) {
        function n(t) {
            var e = t && (O && t[O] || t[P]);
            if ("function" == typeof e)
                return e
        }
        function l(t, e) {
            return t === e ? 0 !== t || 1 / t === 1 / e : t !== t && e !== e
        }
        function f(t) {
            this.message = t,
            this.stack = ""
        }
        function p(t) {
            function n(n, r, o, i, u, s, c) {
                if (i = i || j,
                s = s || o,
                c !== a) {
                    if (e) {
                        var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                        throw l.name = "Invariant Violation",
                        l
                    }
                }
                return null == r[o] ? n ? new f(null === r[o] ? "The " + u + " `" + s + "` is marked as required " + ("in `" + i + "`, but its value is `null`.") : "The " + u + " `" + s + "` is marked as required in " + ("`" + i + "`, but its value is `undefined`.")) : null : t(r, o, i, u, s)
            }
            var r = n.bind(null, !1);
            return r.isRequired = n.bind(null, !0),
            r
        }
        function h(t) {
            function e(e, n, r, o, i, a) {
                var u = e[n]
                  , s = S(u);
                if (s !== t) {
                    var c = T(u);
                    return new f("Invalid " + o + " `" + i + "` of type " + ("`" + c + "` supplied to `" + r + "`, expected ") + ("`" + t + "`."))
                }
                return null
            }
            return p(e)
        }
        function d() {
            return p(r)
        }
        function v(t) {
            function e(e, n, r, o, i) {
                if ("function" != typeof t)
                    return new f("Property `" + i + "` of component `" + r + "` has invalid PropType notation inside arrayOf.");
                var u = e[n];
                if (!Array.isArray(u)) {
                    var s = S(u);
                    return new f("Invalid " + o + " `" + i + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected an array."))
                }
                for (var c = 0; c < u.length; c++) {
                    var l = t(u, c, r, o, i + "[" + c + "]", a);
                    if (l instanceof Error)
                        return l
                }
                return null
            }
            return p(e)
        }
        function g() {
            function e(e, n, r, o, i) {
                var a = e[n];
                if (!t(a)) {
                    var u = S(a);
                    return new f("Invalid " + o + " `" + i + "` of type " + ("`" + u + "` supplied to `" + r + "`, expected a single ReactElement."))
                }
                return null
            }
            return p(e)
        }
        function y() {
            function t(t, e, n, r, i) {
                var a = t[e];
                if (!o.isValidElementType(a)) {
                    var u = S(a);
                    return new f("Invalid " + r + " `" + i + "` of type " + ("`" + u + "` supplied to `" + n + "`, expected a single ReactElement type."))
                }
                return null
            }
            return p(t)
        }
        function m(t) {
            function e(e, n, r, o, i) {
                if (!(e[n]instanceof t)) {
                    var a = t.name || j
                      , u = A(e[n]);
                    return new f("Invalid " + o + " `" + i + "` of type " + ("`" + u + "` supplied to `" + r + "`, expected ") + ("instance of `" + a + "`."))
                }
                return null
            }
            return p(e)
        }
        function b(t) {
            function e(e, n, r, o, i) {
                for (var a = e[n], u = 0; u < t.length; u++)
                    if (l(a, t[u]))
                        return null;
                var s = JSON.stringify(t, function(t, e) {
                    var n = T(e);
                    return "symbol" === n ? String(e) : e
                });
                return new f("Invalid " + o + " `" + i + "` of value `" + String(a) + "` " + ("supplied to `" + r + "`, expected one of " + s + "."))
            }
            return Array.isArray(t) ? p(e) : r
        }
        function x(t) {
            function e(e, n, r, o, i) {
                if ("function" != typeof t)
                    return new f("Property `" + i + "` of component `" + r + "` has invalid PropType notation inside objectOf.");
                var u = e[n]
                  , c = S(u);
                if ("object" !== c)
                    return new f("Invalid " + o + " `" + i + "` of type " + ("`" + c + "` supplied to `" + r + "`, expected an object."));
                for (var l in u)
                    if (s(u, l)) {
                        var p = t(u, l, r, o, i + "." + l, a);
                        if (p instanceof Error)
                            return p
                    }
                return null
            }
            return p(e)
        }
        function _(t) {
            function e(e, n, r, o, i) {
                for (var u = 0; u < t.length; u++) {
                    var s = t[u];
                    if (null == s(e, n, r, o, i, a))
                        return null
                }
                return new f("Invalid " + o + " `" + i + "` supplied to " + ("`" + r + "`."))
            }
            if (!Array.isArray(t))
                return r;
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                if ("function" != typeof o)
                    return c("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + N(o) + " at index " + n + "."),
                    r
            }
            return p(e)
        }
        function w() {
            function t(t, e, n, r, o) {
                return M(t[e]) ? null : new f("Invalid " + r + " `" + o + "` supplied to " + ("`" + n + "`, expected a ReactNode."))
            }
            return p(t)
        }
        function C(t) {
            function e(e, n, r, o, i) {
                var u = e[n]
                  , s = S(u);
                if ("object" !== s)
                    return new f("Invalid " + o + " `" + i + "` of type `" + s + "` " + ("supplied to `" + r + "`, expected `object`."));
                for (var c in t) {
                    var l = t[c];
                    if (l) {
                        var p = l(u, c, r, o, i + "." + c, a);
                        if (p)
                            return p
                    }
                }
                return null
            }
            return p(e)
        }
        function E(t) {
            function e(e, n, r, o, u) {
                var s = e[n]
                  , c = S(s);
                if ("object" !== c)
                    return new f("Invalid " + o + " `" + u + "` of type `" + c + "` " + ("supplied to `" + r + "`, expected `object`."));
                var l = i({}, e[n], t);
                for (var p in l) {
                    var h = t[p];
                    if (!h)
                        return new f("Invalid " + o + " `" + u + "` key `" + p + "` supplied to `" + r + "`.\nBad object: " + JSON.stringify(e[n], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(t), null, "  "));
                    var d = h(s, p, r, o, u + "." + p, a);
                    if (d)
                        return d
                }
                return null
            }
            return p(e)
        }
        function M(e) {
            switch (typeof e) {
            case "number":
            case "string":
            case "undefined":
                return !0;
            case "boolean":
                return !e;
            case "object":
                if (Array.isArray(e))
                    return e.every(M);
                if (null === e || t(e))
                    return !0;
                var r = n(e);
                if (!r)
                    return !1;
                var o, i = r.call(e);
                if (r !== e.entries) {
                    for (; !(o = i.next()).done; )
                        if (!M(o.value))
                            return !1
                } else
                    for (; !(o = i.next()).done; ) {
                        var a = o.value;
                        if (a && !M(a[1]))
                            return !1
                    }
                return !0;
            default:
                return !1
            }
        }
        function k(t, e) {
            return "symbol" === t || !!e && ("Symbol" === e["@@toStringTag"] || "function" == typeof Symbol && e instanceof Symbol)
        }
        function S(t) {
            var e = typeof t;
            return Array.isArray(t) ? "array" : t instanceof RegExp ? "object" : k(e, t) ? "symbol" : e
        }
        function T(t) {
            if ("undefined" == typeof t || null === t)
                return "" + t;
            var e = S(t);
            if ("object" === e) {
                if (t instanceof Date)
                    return "date";
                if (t instanceof RegExp)
                    return "regexp"
            }
            return e
        }
        function N(t) {
            var e = T(t);
            switch (e) {
            case "array":
            case "object":
                return "an " + e;
            case "boolean":
            case "date":
            case "regexp":
                return "a " + e;
            default:
                return e
            }
        }
        function A(t) {
            return t.constructor && t.constructor.name ? t.constructor.name : j
        }
        var O = "function" == typeof Symbol && Symbol.iterator
          , P = "@@iterator"
          , j = "<<anonymous>>"
          , D = {
            array: h("array"),
            bool: h("boolean"),
            func: h("function"),
            number: h("number"),
            object: h("object"),
            string: h("string"),
            symbol: h("symbol"),
            any: d(),
            arrayOf: v,
            element: g(),
            elementType: y(),
            instanceOf: m,
            node: w(),
            objectOf: x,
            oneOf: b,
            oneOfType: _,
            shape: C,
            exact: E
        };
        return f.prototype = Error.prototype,
        D.checkPropTypes = u,
        D.resetWarningCache = u.resetWarningCache,
        D.PropTypes = D,
        D
    }
}
, function(t, e) {
    "use strict";
    var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    t.exports = n
}
, function(t, e) {
    "use strict";
    var n = {
        Properties: {
            "aria-current": 0,
            "aria-details": 0,
            "aria-disabled": 0,
            "aria-hidden": 0,
            "aria-invalid": 0,
            "aria-keyshortcuts": 0,
            "aria-label": 0,
            "aria-roledescription": 0,
            "aria-autocomplete": 0,
            "aria-checked": 0,
            "aria-expanded": 0,
            "aria-haspopup": 0,
            "aria-level": 0,
            "aria-modal": 0,
            "aria-multiline": 0,
            "aria-multiselectable": 0,
            "aria-orientation": 0,
            "aria-placeholder": 0,
            "aria-pressed": 0,
            "aria-readonly": 0,
            "aria-required": 0,
            "aria-selected": 0,
            "aria-sort": 0,
            "aria-valuemax": 0,
            "aria-valuemin": 0,
            "aria-valuenow": 0,
            "aria-valuetext": 0,
            "aria-atomic": 0,
            "aria-busy": 0,
            "aria-live": 0,
            "aria-relevant": 0,
            "aria-dropeffect": 0,
            "aria-grabbed": 0,
            "aria-activedescendant": 0,
            "aria-colcount": 0,
            "aria-colindex": 0,
            "aria-colspan": 0,
            "aria-controls": 0,
            "aria-describedby": 0,
            "aria-errormessage": 0,
            "aria-flowto": 0,
            "aria-labelledby": 0,
            "aria-owns": 0,
            "aria-posinset": 0,
            "aria-rowcount": 0,
            "aria-rowindex": 0,
            "aria-rowspan": 0,
            "aria-setsize": 0
        },
        DOMAttributeNames: {},
        DOMPropertyNames: {}
    };
    t.exports = n
}
, function(t, e, n) {
    "use strict";
    var r = n(5)
      , o = n(71)
      , i = {
        focusDOMComponent: function() {
            o(r.getNodeFromInstance(this))
        }
    };
    t.exports = i
}
, function(t, e, n) {
    "use strict";
    function r() {
        var t = window.opera;
        return "object" == typeof t && "function" == typeof t.version && parseInt(t.version(), 10) <= 12
    }
    function o(t) {
        return (t.ctrlKey || t.altKey || t.metaKey) && !(t.ctrlKey && t.altKey)
    }
    function i(t) {
        switch (t) {
        case "topCompositionStart":
            return k.compositionStart;
        case "topCompositionEnd":
            return k.compositionEnd;
        case "topCompositionUpdate":
            return k.compositionUpdate
        }
    }
    function a(t, e) {
        return "topKeyDown" === t && e.keyCode === b
    }
    function u(t, e) {
        switch (t) {
        case "topKeyUp":
            return m.indexOf(e.keyCode) !== -1;
        case "topKeyDown":
            return e.keyCode !== b;
        case "topKeyPress":
        case "topMouseDown":
        case "topBlur":
            return !0;
        default:
            return !1
        }
    }
    function s(t) {
        var e = t.detail;
        return "object" == typeof e && "data"in e ? e.data : null
    }
    function c(t, e, n, r) {
        var o, c;
        if (x ? o = i(t) : T ? u(t, n) && (o = k.compositionEnd) : a(t, n) && (o = k.compositionStart),
        !o)
            return null;
        C && (T || o !== k.compositionStart ? o === k.compositionEnd && T && (c = T.getData()) : T = v.getPooled(r));
        var l = g.getPooled(o, e, n, r);
        if (c)
            l.data = c;
        else {
            var f = s(n);
            null !== f && (l.data = f)
        }
        return h.accumulateTwoPhaseDispatches(l),
        l
    }
    function l(t, e) {
        switch (t) {
        case "topCompositionEnd":
            return s(e);
        case "topKeyPress":
            var n = e.which;
            return n !== E ? null : (S = !0,
            M);
        case "topTextInput":
            var r = e.data;
            return r === M && S ? null : r;
        default:
            return null
        }
    }
    function f(t, e) {
        if (T) {
            if ("topCompositionEnd" === t || !x && u(t, e)) {
                var n = T.getData();
                return v.release(T),
                T = null,
                n
            }
            return null
        }
        switch (t) {
        case "topPaste":
            return null;
        case "topKeyPress":
            return e.which && !o(e) ? String.fromCharCode(e.which) : null;
        case "topCompositionEnd":
            return C ? null : e.data;
        default:
            return null
        }
    }
    function p(t, e, n, r) {
        var o;
        if (o = w ? l(t, n) : f(t, n),
        !o)
            return null;
        var i = y.getPooled(k.beforeInput, e, n, r);
        return i.data = o,
        h.accumulateTwoPhaseDispatches(i),
        i
    }
    var h = n(26)
      , d = n(6)
      , v = n(252)
      , g = n(289)
      , y = n(292)
      , m = [9, 13, 27, 32]
      , b = 229
      , x = d.canUseDOM && "CompositionEvent"in window
      , _ = null;
    d.canUseDOM && "documentMode"in document && (_ = document.documentMode);
    var w = d.canUseDOM && "TextEvent"in window && !_ && !r()
      , C = d.canUseDOM && (!x || _ && _ > 8 && _ <= 11)
      , E = 32
      , M = String.fromCharCode(E)
      , k = {
        beforeInput: {
            phasedRegistrationNames: {
                bubbled: "onBeforeInput",
                captured: "onBeforeInputCapture"
            },
            dependencies: ["topCompositionEnd", "topKeyPress", "topTextInput", "topPaste"]
        },
        compositionEnd: {
            phasedRegistrationNames: {
                bubbled: "onCompositionEnd",
                captured: "onCompositionEndCapture"
            },
            dependencies: ["topBlur", "topCompositionEnd", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown"]
        },
        compositionStart: {
            phasedRegistrationNames: {
                bubbled: "onCompositionStart",
                captured: "onCompositionStartCapture"
            },
            dependencies: ["topBlur", "topCompositionStart", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown"]
        },
        compositionUpdate: {
            phasedRegistrationNames: {
                bubbled: "onCompositionUpdate",
                captured: "onCompositionUpdateCapture"
            },
            dependencies: ["topBlur", "topCompositionUpdate", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown"]
        }
    }
      , S = !1
      , T = null
      , N = {
        eventTypes: k,
        extractEvents: function(t, e, n, r) {
            return [c(t, e, n, r), p(t, e, n, r)]
        }
    };
    t.exports = N
}
, function(t, e, n) {
    "use strict";
    var r = n(91)
      , o = n(6)
      , i = (n(7),
    n(140),
    n(298))
      , a = n(147)
      , u = n(150)
      , s = (n(3),
    u(function(t) {
        return a(t)
    }))
      , c = !1
      , l = "cssFloat";
    if (o.canUseDOM) {
        var f = document.createElement("div").style;
        try {
            f.font = ""
        } catch (t) {
            c = !0
        }
        void 0 === document.documentElement.style.cssFloat && (l = "styleFloat")
    }
    var p = {
        createMarkupForStyles: function(t, e) {
            var n = "";
            for (var r in t)
                if (t.hasOwnProperty(r)) {
                    var o = 0 === r.indexOf("--")
                      , a = t[r];
                    null != a && (n += s(r) + ":",
                    n += i(r, a, e, o) + ";")
                }
            return n || null
        },
        setValueForStyles: function(t, e, n) {
            var o = t.style;
            for (var a in e)
                if (e.hasOwnProperty(a)) {
                    var u = 0 === a.indexOf("--")
                      , s = i(a, e[a], n, u);
                    if ("float" !== a && "cssFloat" !== a || (a = l),
                    u)
                        o.setProperty(a, s);
                    else if (s)
                        o[a] = s;
                    else {
                        var f = c && r.shorthandPropertyExpansions[a];
                        if (f)
                            for (var p in f)
                                o[p] = "";
                        else
                            o[a] = ""
                    }
                }
        }
    };
    t.exports = p
}
, function(t, e, n) {
    "use strict";
    function r(t, e, n) {
        var r = k.getPooled(O.change, t, e, n);
        return r.type = "change",
        w.accumulateTwoPhaseDispatches(r),
        r
    }
    function o(t) {
        var e = t.nodeName && t.nodeName.toLowerCase();
        return "select" === e || "input" === e && "file" === t.type
    }
    function i(t) {
        var e = r(j, t, T(t));
        M.batchedUpdates(a, e)
    }
    function a(t) {
        _.enqueueEvents(t),
        _.processEventQueue(!1)
    }
    function u(t, e) {
        P = t,
        j = e,
        P.attachEvent("onchange", i)
    }
    function s() {
        P && (P.detachEvent("onchange", i),
        P = null,
        j = null)
    }
    function c(t, e) {
        var n = S.updateValueIfChanged(t)
          , r = e.simulated === !0 && R._allowSimulatedPassThrough;
        if (n || r)
            return t
    }
    function l(t, e) {
        if ("topChange" === t)
            return e
    }
    function f(t, e, n) {
        "topFocus" === t ? (s(),
        u(e, n)) : "topBlur" === t && s()
    }
    function p(t, e) {
        P = t,
        j = e,
        P.attachEvent("onpropertychange", d)
    }
    function h() {
        P && (P.detachEvent("onpropertychange", d),
        P = null,
        j = null)
    }
    function d(t) {
        "value" === t.propertyName && c(j, t) && i(t)
    }
    function v(t, e, n) {
        "topFocus" === t ? (h(),
        p(e, n)) : "topBlur" === t && h()
    }
    function g(t, e, n) {
        if ("topSelectionChange" === t || "topKeyUp" === t || "topKeyDown" === t)
            return c(j, n)
    }
    function y(t) {
        var e = t.nodeName;
        return e && "input" === e.toLowerCase() && ("checkbox" === t.type || "radio" === t.type)
    }
    function m(t, e, n) {
        if ("topClick" === t)
            return c(e, n)
    }
    function b(t, e, n) {
        if ("topInput" === t || "topChange" === t)
            return c(e, n)
    }
    function x(t, e) {
        if (null != t) {
            var n = t._wrapperState || e._wrapperState;
            if (n && n.controlled && "number" === e.type) {
                var r = "" + e.value;
                e.getAttribute("value") !== r && e.setAttribute("value", r)
            }
        }
    }
    var _ = n(25)
      , w = n(26)
      , C = n(6)
      , E = n(5)
      , M = n(9)
      , k = n(12)
      , S = n(107)
      , T = n(63)
      , N = n(64)
      , A = n(109)
      , O = {
        change: {
            phasedRegistrationNames: {
                bubbled: "onChange",
                captured: "onChangeCapture"
            },
            dependencies: ["topBlur", "topChange", "topClick", "topFocus", "topInput", "topKeyDown", "topKeyUp", "topSelectionChange"]
        }
    }
      , P = null
      , j = null
      , D = !1;
    C.canUseDOM && (D = N("change") && (!document.documentMode || document.documentMode > 8));
    var I = !1;
    C.canUseDOM && (I = N("input") && (!document.documentMode || document.documentMode > 9));
    var R = {
        eventTypes: O,
        _allowSimulatedPassThrough: !0,
        _isInputEventSupported: I,
        extractEvents: function(t, e, n, i) {
            var a, u, s = e ? E.getNodeFromInstance(e) : window;
            if (o(s) ? D ? a = l : u = f : A(s) ? I ? a = b : (a = g,
            u = v) : y(s) && (a = m),
            a) {
                var c = a(t, e, n);
                if (c) {
                    var p = r(c, n, i);
                    return p
                }
            }
            u && u(t, s, e),
            "topBlur" === t && x(e, s)
        }
    };
    t.exports = R
}
, function(t, e, n) {
    "use strict";
    var r = n(2)
      , o = n(19)
      , i = n(6)
      , a = n(143)
      , u = n(8)
      , s = (n(1),
    {
        dangerouslyReplaceNodeWithMarkup: function(t, e) {
            if (i.canUseDOM ? void 0 : r("56"),
            e ? void 0 : r("57"),
            "HTML" === t.nodeName ? r("58") : void 0,
            "string" == typeof e) {
                var n = a(e, u)[0];
                t.parentNode.replaceChild(n, t)
            } else
                o.replaceChildWithTree(t, e)
        }
    });
    t.exports = s
}
, function(t, e) {
    "use strict";
    var n = ["ResponderEventPlugin", "SimpleEventPlugin", "TapEventPlugin", "EnterLeaveEventPlugin", "ChangeEventPlugin", "SelectEventPlugin", "BeforeInputEventPlugin"];
    t.exports = n
}
, function(t, e, n) {
    "use strict";
    var r = n(26)
      , o = n(5)
      , i = n(38)
      , a = {
        mouseEnter: {
            registrationName: "onMouseEnter",
            dependencies: ["topMouseOut", "topMouseOver"]
        },
        mouseLeave: {
            registrationName: "onMouseLeave",
            dependencies: ["topMouseOut", "topMouseOver"]
        }
    }
      , u = {
        eventTypes: a,
        extractEvents: function(t, e, n, u) {
            if ("topMouseOver" === t && (n.relatedTarget || n.fromElement))
                return null;
            if ("topMouseOut" !== t && "topMouseOver" !== t)
                return null;
            var s;
            if (u.window === u)
                s = u;
            else {
                var c = u.ownerDocument;
                s = c ? c.defaultView || c.parentWindow : window
            }
            var l, f;
            if ("topMouseOut" === t) {
                l = e;
                var p = n.relatedTarget || n.toElement;
                f = p ? o.getClosestInstanceFromNode(p) : null
            } else
                l = null,
                f = e;
            if (l === f)
                return null;
            var h = null == l ? s : o.getNodeFromInstance(l)
              , d = null == f ? s : o.getNodeFromInstance(f)
              , v = i.getPooled(a.mouseLeave, l, n, u);
            v.type = "mouseleave",
            v.target = h,
            v.relatedTarget = d;
            var g = i.getPooled(a.mouseEnter, f, n, u);
            return g.type = "mouseenter",
            g.target = d,
            g.relatedTarget = h,
            r.accumulateEnterLeaveDispatches(v, g, l, f),
            [v, g]
        }
    };
    t.exports = u
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        this._root = t,
        this._startText = this.getText(),
        this._fallbackText = null
    }
    var o = n(4)
      , i = n(15)
      , a = n(106);
    o(r.prototype, {
        destructor: function() {
            this._root = null,
            this._startText = null,
            this._fallbackText = null
        },
        getText: function() {
            return "value"in this._root ? this._root.value : this._root[a()];
        },
        getData: function() {
            if (this._fallbackText)
                return this._fallbackText;
            var t, e, n = this._startText, r = n.length, o = this.getText(), i = o.length;
            for (t = 0; t < r && n[t] === o[t]; t++)
                ;
            var a = r - t;
            for (e = 1; e <= a && n[r - e] === o[i - e]; e++)
                ;
            var u = e > 1 ? 1 - e : void 0;
            return this._fallbackText = o.slice(t, u),
            this._fallbackText
        }
    }),
    i.addPoolingTo(r),
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    var r = n(20)
      , o = r.injection.MUST_USE_PROPERTY
      , i = r.injection.HAS_BOOLEAN_VALUE
      , a = r.injection.HAS_NUMERIC_VALUE
      , u = r.injection.HAS_POSITIVE_NUMERIC_VALUE
      , s = r.injection.HAS_OVERLOADED_BOOLEAN_VALUE
      , c = {
        isCustomAttribute: RegExp.prototype.test.bind(new RegExp("^(data|aria)-[" + r.ATTRIBUTE_NAME_CHAR + "]*$")),
        Properties: {
            accept: 0,
            acceptCharset: 0,
            accessKey: 0,
            action: 0,
            allowFullScreen: i,
            allowTransparency: 0,
            alt: 0,
            as: 0,
            async: i,
            autoComplete: 0,
            autoPlay: i,
            capture: i,
            cellPadding: 0,
            cellSpacing: 0,
            charSet: 0,
            challenge: 0,
            checked: o | i,
            cite: 0,
            classID: 0,
            className: 0,
            cols: u,
            colSpan: 0,
            content: 0,
            contentEditable: 0,
            contextMenu: 0,
            controls: i,
            controlsList: 0,
            coords: 0,
            crossOrigin: 0,
            data: 0,
            dateTime: 0,
            default: i,
            defer: i,
            dir: 0,
            disabled: i,
            download: s,
            draggable: 0,
            encType: 0,
            form: 0,
            formAction: 0,
            formEncType: 0,
            formMethod: 0,
            formNoValidate: i,
            formTarget: 0,
            frameBorder: 0,
            headers: 0,
            height: 0,
            hidden: i,
            high: 0,
            href: 0,
            hrefLang: 0,
            htmlFor: 0,
            httpEquiv: 0,
            icon: 0,
            id: 0,
            inputMode: 0,
            integrity: 0,
            is: 0,
            keyParams: 0,
            keyType: 0,
            kind: 0,
            label: 0,
            lang: 0,
            list: 0,
            loop: i,
            low: 0,
            manifest: 0,
            marginHeight: 0,
            marginWidth: 0,
            max: 0,
            maxLength: 0,
            media: 0,
            mediaGroup: 0,
            method: 0,
            min: 0,
            minLength: 0,
            multiple: o | i,
            muted: o | i,
            name: 0,
            nonce: 0,
            noValidate: i,
            open: i,
            optimum: 0,
            pattern: 0,
            placeholder: 0,
            playsInline: i,
            poster: 0,
            preload: 0,
            profile: 0,
            radioGroup: 0,
            readOnly: i,
            referrerPolicy: 0,
            rel: 0,
            required: i,
            reversed: i,
            role: 0,
            rows: u,
            rowSpan: a,
            sandbox: 0,
            scope: 0,
            scoped: i,
            scrolling: 0,
            seamless: i,
            selected: o | i,
            shape: 0,
            size: u,
            sizes: 0,
            span: u,
            spellCheck: 0,
            src: 0,
            srcDoc: 0,
            srcLang: 0,
            srcSet: 0,
            start: a,
            step: 0,
            style: 0,
            summary: 0,
            tabIndex: 0,
            target: 0,
            title: 0,
            type: 0,
            useMap: 0,
            value: 0,
            width: 0,
            wmode: 0,
            wrap: 0,
            about: 0,
            datatype: 0,
            inlist: 0,
            prefix: 0,
            property: 0,
            resource: 0,
            typeof: 0,
            vocab: 0,
            autoCapitalize: 0,
            autoCorrect: 0,
            autoSave: 0,
            color: 0,
            itemProp: 0,
            itemScope: i,
            itemType: 0,
            itemID: 0,
            itemRef: 0,
            results: 0,
            security: 0,
            unselectable: 0
        },
        DOMAttributeNames: {
            acceptCharset: "accept-charset",
            className: "class",
            htmlFor: "for",
            httpEquiv: "http-equiv"
        },
        DOMPropertyNames: {},
        DOMMutationMethods: {
            value: function(t, e) {
                return null == e ? t.removeAttribute("value") : void ("number" !== t.type || t.hasAttribute("value") === !1 ? t.setAttribute("value", "" + e) : t.validity && !t.validity.badInput && t.ownerDocument.activeElement !== t && t.setAttribute("value", "" + e))
            }
        }
    };
    t.exports = c
}
, function(t, e, n) {
    (function(e) {
        "use strict";
        function r(t, e, n, r) {
            var o = void 0 === t[n];
            null != e && o && (t[n] = i(e, !0))
        }
        var o = n(21)
          , i = n(108)
          , a = (n(55),
        n(65))
          , u = n(111)
          , s = (n(3),
        {
            instantiateChildren: function(t, e, n, o) {
                if (null == t)
                    return null;
                var i = {};
                return u(t, r, i),
                i
            },
            updateChildren: function(t, e, n, r, u, s, c, l, f) {
                if (e || t) {
                    var p, h;
                    for (p in e)
                        if (e.hasOwnProperty(p)) {
                            h = t && t[p];
                            var d = h && h._currentElement
                              , v = e[p];
                            if (null != h && a(d, v))
                                o.receiveComponent(h, v, u, l),
                                e[p] = h;
                            else {
                                h && (r[p] = o.getHostNode(h),
                                o.unmountComponent(h, !1));
                                var g = i(v, !0);
                                e[p] = g;
                                var y = o.mountComponent(g, u, s, c, l, f);
                                n.push(y)
                            }
                        }
                    for (p in t)
                        !t.hasOwnProperty(p) || e && e.hasOwnProperty(p) || (h = t[p],
                        r[p] = o.getHostNode(h),
                        o.unmountComponent(h, !1))
                }
            },
            unmountChildren: function(t, e) {
                for (var n in t)
                    if (t.hasOwnProperty(n)) {
                        var r = t[n];
                        o.unmountComponent(r, e)
                    }
            }
        });
        t.exports = s
    }
    ).call(e, n(89))
}
, function(t, e, n) {
    "use strict";
    var r = n(51)
      , o = n(262)
      , i = {
        processChildrenUpdates: o.dangerouslyProcessChildrenUpdates,
        replaceNodeWithMarkup: r.dangerouslyReplaceNodeWithMarkup
    };
    t.exports = i
}
, function(t, e, n) {
    "use strict";
    function r(t) {}
    function o(t, e) {}
    function i(t) {
        return !(!t.prototype || !t.prototype.isReactComponent)
    }
    function a(t) {
        return !(!t.prototype || !t.prototype.isPureReactComponent)
    }
    var u = n(2)
      , s = n(4)
      , c = n(22)
      , l = n(57)
      , f = n(13)
      , p = n(58)
      , h = n(27)
      , d = (n(7),
    n(101))
      , v = n(21)
      , g = n(30)
      , y = (n(1),
    n(42))
      , m = n(65)
      , b = (n(3),
    {
        ImpureClass: 0,
        PureClass: 1,
        StatelessFunctional: 2
    });
    r.prototype.render = function() {
        var t = h.get(this)._currentElement.type
          , e = t(this.props, this.context, this.updater);
        return o(t, e),
        e
    }
    ;
    var x = 1
      , _ = {
        construct: function(t) {
            this._currentElement = t,
            this._rootNodeID = 0,
            this._compositeType = null,
            this._instance = null,
            this._hostParent = null,
            this._hostContainerInfo = null,
            this._updateBatchNumber = null,
            this._pendingElement = null,
            this._pendingStateQueue = null,
            this._pendingReplaceState = !1,
            this._pendingForceUpdate = !1,
            this._renderedNodeType = null,
            this._renderedComponent = null,
            this._context = null,
            this._mountOrder = 0,
            this._topLevelWrapper = null,
            this._pendingCallbacks = null,
            this._calledComponentWillUnmount = !1
        },
        mountComponent: function(t, e, n, s) {
            this._context = s,
            this._mountOrder = x++,
            this._hostParent = e,
            this._hostContainerInfo = n;
            var l, f = this._currentElement.props, p = this._processContext(s), d = this._currentElement.type, v = t.getUpdateQueue(), y = i(d), m = this._constructComponent(y, f, p, v);
            y || null != m && null != m.render ? a(d) ? this._compositeType = b.PureClass : this._compositeType = b.ImpureClass : (l = m,
            o(d, l),
            null === m || m === !1 || c.isValidElement(m) ? void 0 : u("105", d.displayName || d.name || "Component"),
            m = new r(d),
            this._compositeType = b.StatelessFunctional);
            m.props = f,
            m.context = p,
            m.refs = g,
            m.updater = v,
            this._instance = m,
            h.set(m, this);
            var _ = m.state;
            void 0 === _ && (m.state = _ = null),
            "object" != typeof _ || Array.isArray(_) ? u("106", this.getName() || "ReactCompositeComponent") : void 0,
            this._pendingStateQueue = null,
            this._pendingReplaceState = !1,
            this._pendingForceUpdate = !1;
            var w;
            return w = m.unstable_handleError ? this.performInitialMountWithErrorHandling(l, e, n, t, s) : this.performInitialMount(l, e, n, t, s),
            m.componentDidMount && t.getReactMountReady().enqueue(m.componentDidMount, m),
            w
        },
        _constructComponent: function(t, e, n, r) {
            return this._constructComponentWithoutOwner(t, e, n, r)
        },
        _constructComponentWithoutOwner: function(t, e, n, r) {
            var o = this._currentElement.type;
            return t ? new o(e,n,r) : o(e, n, r)
        },
        performInitialMountWithErrorHandling: function(t, e, n, r, o) {
            var i, a = r.checkpoint();
            try {
                i = this.performInitialMount(t, e, n, r, o)
            } catch (u) {
                r.rollback(a),
                this._instance.unstable_handleError(u),
                this._pendingStateQueue && (this._instance.state = this._processPendingState(this._instance.props, this._instance.context)),
                a = r.checkpoint(),
                this._renderedComponent.unmountComponent(!0),
                r.rollback(a),
                i = this.performInitialMount(t, e, n, r, o)
            }
            return i
        },
        performInitialMount: function(t, e, n, r, o) {
            var i = this._instance
              , a = 0;
            i.componentWillMount && (i.componentWillMount(),
            this._pendingStateQueue && (i.state = this._processPendingState(i.props, i.context))),
            void 0 === t && (t = this._renderValidatedComponent());
            var u = d.getType(t);
            this._renderedNodeType = u;
            var s = this._instantiateReactComponent(t, u !== d.EMPTY);
            this._renderedComponent = s;
            var c = v.mountComponent(s, r, e, n, this._processChildContext(o), a);
            return c
        },
        getHostNode: function() {
            return v.getHostNode(this._renderedComponent)
        },
        unmountComponent: function(t) {
            if (this._renderedComponent) {
                var e = this._instance;
                if (e.componentWillUnmount && !e._calledComponentWillUnmount)
                    if (e._calledComponentWillUnmount = !0,
                    t) {
                        var n = this.getName() + ".componentWillUnmount()";
                        p.invokeGuardedCallback(n, e.componentWillUnmount.bind(e))
                    } else
                        e.componentWillUnmount();
                this._renderedComponent && (v.unmountComponent(this._renderedComponent, t),
                this._renderedNodeType = null,
                this._renderedComponent = null,
                this._instance = null),
                this._pendingStateQueue = null,
                this._pendingReplaceState = !1,
                this._pendingForceUpdate = !1,
                this._pendingCallbacks = null,
                this._pendingElement = null,
                this._context = null,
                this._rootNodeID = 0,
                this._topLevelWrapper = null,
                h.remove(e)
            }
        },
        _maskContext: function(t) {
            var e = this._currentElement.type
              , n = e.contextTypes;
            if (!n)
                return g;
            var r = {};
            for (var o in n)
                r[o] = t[o];
            return r
        },
        _processContext: function(t) {
            var e = this._maskContext(t);
            return e
        },
        _processChildContext: function(t) {
            var e, n = this._currentElement.type, r = this._instance;
            if (r.getChildContext && (e = r.getChildContext()),
            e) {
                "object" != typeof n.childContextTypes ? u("107", this.getName() || "ReactCompositeComponent") : void 0;
                for (var o in e)
                    o in n.childContextTypes ? void 0 : u("108", this.getName() || "ReactCompositeComponent", o);
                return s({}, t, e)
            }
            return t
        },
        _checkContextTypes: function(t, e, n) {},
        receiveComponent: function(t, e, n) {
            var r = this._currentElement
              , o = this._context;
            this._pendingElement = null,
            this.updateComponent(e, r, t, o, n)
        },
        performUpdateIfNecessary: function(t) {
            null != this._pendingElement ? v.receiveComponent(this, this._pendingElement, t, this._context) : null !== this._pendingStateQueue || this._pendingForceUpdate ? this.updateComponent(t, this._currentElement, this._currentElement, this._context, this._context) : this._updateBatchNumber = null
        },
        updateComponent: function(t, e, n, r, o) {
            var i = this._instance;
            null == i ? u("136", this.getName() || "ReactCompositeComponent") : void 0;
            var a, s = !1;
            this._context === o ? a = i.context : (a = this._processContext(o),
            s = !0);
            var c = e.props
              , l = n.props;
            e !== n && (s = !0),
            s && i.componentWillReceiveProps && i.componentWillReceiveProps(l, a);
            var f = this._processPendingState(l, a)
              , p = !0;
            this._pendingForceUpdate || (i.shouldComponentUpdate ? p = i.shouldComponentUpdate(l, f, a) : this._compositeType === b.PureClass && (p = !y(c, l) || !y(i.state, f))),
            this._updateBatchNumber = null,
            p ? (this._pendingForceUpdate = !1,
            this._performComponentUpdate(n, l, f, a, t, o)) : (this._currentElement = n,
            this._context = o,
            i.props = l,
            i.state = f,
            i.context = a)
        },
        _processPendingState: function(t, e) {
            var n = this._instance
              , r = this._pendingStateQueue
              , o = this._pendingReplaceState;
            if (this._pendingReplaceState = !1,
            this._pendingStateQueue = null,
            !r)
                return n.state;
            if (o && 1 === r.length)
                return r[0];
            for (var i = s({}, o ? r[0] : n.state), a = o ? 1 : 0; a < r.length; a++) {
                var u = r[a];
                s(i, "function" == typeof u ? u.call(n, i, t, e) : u)
            }
            return i
        },
        _performComponentUpdate: function(t, e, n, r, o, i) {
            var a, u, s, c = this._instance, l = Boolean(c.componentDidUpdate);
            l && (a = c.props,
            u = c.state,
            s = c.context),
            c.componentWillUpdate && c.componentWillUpdate(e, n, r),
            this._currentElement = t,
            this._context = i,
            c.props = e,
            c.state = n,
            c.context = r,
            this._updateRenderedComponent(o, i),
            l && o.getReactMountReady().enqueue(c.componentDidUpdate.bind(c, a, u, s), c)
        },
        _updateRenderedComponent: function(t, e) {
            var n = this._renderedComponent
              , r = n._currentElement
              , o = this._renderValidatedComponent()
              , i = 0;
            if (m(r, o))
                v.receiveComponent(n, o, t, this._processChildContext(e));
            else {
                var a = v.getHostNode(n);
                v.unmountComponent(n, !1);
                var u = d.getType(o);
                this._renderedNodeType = u;
                var s = this._instantiateReactComponent(o, u !== d.EMPTY);
                this._renderedComponent = s;
                var c = v.mountComponent(s, t, this._hostParent, this._hostContainerInfo, this._processChildContext(e), i);
                this._replaceNodeWithMarkup(a, c, n)
            }
        },
        _replaceNodeWithMarkup: function(t, e, n) {
            l.replaceNodeWithMarkup(t, e, n)
        },
        _renderValidatedComponentWithoutOwnerOrContext: function() {
            var t, e = this._instance;
            return t = e.render()
        },
        _renderValidatedComponent: function() {
            var t;
            if (this._compositeType !== b.StatelessFunctional) {
                f.current = this;
                try {
                    t = this._renderValidatedComponentWithoutOwnerOrContext()
                } finally {
                    f.current = null
                }
            } else
                t = this._renderValidatedComponentWithoutOwnerOrContext();
            return null === t || t === !1 || c.isValidElement(t) ? void 0 : u("109", this.getName() || "ReactCompositeComponent"),
            t
        },
        attachRef: function(t, e) {
            var n = this.getPublicInstance();
            null == n ? u("110") : void 0;
            var r = e.getPublicInstance()
              , o = n.refs === g ? n.refs = {} : n.refs;
            o[t] = r
        },
        detachRef: function(t) {
            var e = this.getPublicInstance().refs;
            delete e[t]
        },
        getName: function() {
            var t = this._currentElement.type
              , e = this._instance && this._instance.constructor;
            return t.displayName || e && e.displayName || t.name || e && e.name || null
        },
        getPublicInstance: function() {
            var t = this._instance;
            return this._compositeType === b.StatelessFunctional ? null : t
        },
        _instantiateReactComponent: null
    };
    t.exports = _
}
, function(t, e, n) {
    "use strict";
    var r = n(5)
      , o = n(270)
      , i = n(100)
      , a = n(21)
      , u = n(9)
      , s = n(283)
      , c = n(299)
      , l = n(105)
      , f = n(306);
    n(3);
    o.inject();
    var p = {
        findDOMNode: c,
        render: i.render,
        unmountComponentAtNode: i.unmountComponentAtNode,
        version: s,
        unstable_batchedUpdates: u.batchedUpdates,
        unstable_renderSubtreeIntoContainer: f
    };
    "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject && __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
        ComponentTree: {
            getClosestInstanceFromNode: r.getClosestInstanceFromNode,
            getNodeFromInstance: function(t) {
                return t._renderedComponent && (t = l(t)),
                t ? r.getNodeFromInstance(t) : null
            }
        },
        Mount: i,
        Reconciler: a
    });
    t.exports = p
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        if (t) {
            var e = t._currentElement._owner || null;
            if (e) {
                var n = e.getName();
                if (n)
                    return " This DOM node was rendered by `" + n + "`."
            }
        }
        return ""
    }
    function o(t, e) {
        e && (J[t._tag] && (null != e.children || null != e.dangerouslySetInnerHTML ? g("137", t._tag, t._currentElement._owner ? " Check the render method of " + t._currentElement._owner.getName() + "." : "") : void 0),
        null != e.dangerouslySetInnerHTML && (null != e.children ? g("60") : void 0,
        "object" == typeof e.dangerouslySetInnerHTML && W in e.dangerouslySetInnerHTML ? void 0 : g("61")),
        null != e.style && "object" != typeof e.style ? g("62", r(t)) : void 0)
    }
    function i(t, e, n, r) {
        if (!(r instanceof D)) {
            var o = t._hostContainerInfo
              , i = o._node && o._node.nodeType === $
              , u = i ? o._node : o._ownerDocument;
            q(e, u),
            r.getReactMountReady().enqueue(a, {
                inst: t,
                registrationName: e,
                listener: n
            })
        }
    }
    function a() {
        var t = this;
        E.putListener(t.inst, t.registrationName, t.listener)
    }
    function u() {
        var t = this;
        N.postMountWrapper(t)
    }
    function s() {
        var t = this;
        P.postMountWrapper(t)
    }
    function c() {
        var t = this;
        A.postMountWrapper(t)
    }
    function l() {
        R.track(this)
    }
    function f() {
        var t = this;
        t._rootNodeID ? void 0 : g("63");
        var e = F(t);
        switch (e ? void 0 : g("64"),
        t._tag) {
        case "iframe":
        case "object":
            t._wrapperState.listeners = [k.trapBubbledEvent("topLoad", "load", e)];
            break;
        case "video":
        case "audio":
            t._wrapperState.listeners = [];
            for (var n in Y)
                Y.hasOwnProperty(n) && t._wrapperState.listeners.push(k.trapBubbledEvent(n, Y[n], e));
            break;
        case "source":
            t._wrapperState.listeners = [k.trapBubbledEvent("topError", "error", e)];
            break;
        case "img":
            t._wrapperState.listeners = [k.trapBubbledEvent("topError", "error", e), k.trapBubbledEvent("topLoad", "load", e)];
            break;
        case "form":
            t._wrapperState.listeners = [k.trapBubbledEvent("topReset", "reset", e), k.trapBubbledEvent("topSubmit", "submit", e)];
            break;
        case "input":
        case "select":
        case "textarea":
            t._wrapperState.listeners = [k.trapBubbledEvent("topInvalid", "invalid", e)]
        }
    }
    function p() {
        O.postUpdateWrapper(this)
    }
    function h(t) {
        Z.call(Q, t) || (G.test(t) ? void 0 : g("65", t),
        Q[t] = !0)
    }
    function d(t, e) {
        return t.indexOf("-") >= 0 || null != e.is
    }
    function v(t) {
        var e = t.type;
        h(e),
        this._currentElement = t,
        this._tag = e.toLowerCase(),
        this._namespaceURI = null,
        this._renderedChildren = null,
        this._previousStyle = null,
        this._previousStyleCopy = null,
        this._hostNode = null,
        this._hostParent = null,
        this._rootNodeID = 0,
        this._domID = 0,
        this._hostContainerInfo = null,
        this._wrapperState = null,
        this._topLevelWrapper = null,
        this._flags = 0
    }
    var g = n(2)
      , y = n(4)
      , m = n(245)
      , b = n(247)
      , x = n(19)
      , _ = n(52)
      , w = n(20)
      , C = n(93)
      , E = n(25)
      , M = n(53)
      , k = n(37)
      , S = n(94)
      , T = n(5)
      , N = n(263)
      , A = n(264)
      , O = n(95)
      , P = n(267)
      , j = (n(7),
    n(276))
      , D = n(281)
      , I = (n(8),
    n(40))
      , R = (n(1),
    n(64),
    n(42),
    n(107))
      , L = (n(66),
    n(3),
    S)
      , U = E.deleteListener
      , F = T.getNodeFromInstance
      , q = k.listenTo
      , H = M.registrationNameModules
      , B = {
        string: !0,
        number: !0
    }
      , z = "style"
      , W = "__html"
      , V = {
        children: null,
        dangerouslySetInnerHTML: null,
        suppressContentEditableWarning: null
    }
      , $ = 11
      , Y = {
        topAbort: "abort",
        topCanPlay: "canplay",
        topCanPlayThrough: "canplaythrough",
        topDurationChange: "durationchange",
        topEmptied: "emptied",
        topEncrypted: "encrypted",
        topEnded: "ended",
        topError: "error",
        topLoadedData: "loadeddata",
        topLoadedMetadata: "loadedmetadata",
        topLoadStart: "loadstart",
        topPause: "pause",
        topPlay: "play",
        topPlaying: "playing",
        topProgress: "progress",
        topRateChange: "ratechange",
        topSeeked: "seeked",
        topSeeking: "seeking",
        topStalled: "stalled",
        topSuspend: "suspend",
        topTimeUpdate: "timeupdate",
        topVolumeChange: "volumechange",
        topWaiting: "waiting"
    }
      , K = {
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
        wbr: !0
    }
      , X = {
        listing: !0,
        pre: !0,
        textarea: !0
    }
      , J = y({
        menuitem: !0
    }, K)
      , G = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/
      , Q = {}
      , Z = {}.hasOwnProperty
      , tt = 1;
    v.displayName = "ReactDOMComponent",
    v.Mixin = {
        mountComponent: function(t, e, n, r) {
            this._rootNodeID = tt++,
            this._domID = n._idCounter++,
            this._hostParent = e,
            this._hostContainerInfo = n;
            var i = this._currentElement.props;
            switch (this._tag) {
            case "audio":
            case "form":
            case "iframe":
            case "img":
            case "link":
            case "object":
            case "source":
            case "video":
                this._wrapperState = {
                    listeners: null
                },
                t.getReactMountReady().enqueue(f, this);
                break;
            case "input":
                N.mountWrapper(this, i, e),
                i = N.getHostProps(this, i),
                t.getReactMountReady().enqueue(l, this),
                t.getReactMountReady().enqueue(f, this);
                break;
            case "option":
                A.mountWrapper(this, i, e),
                i = A.getHostProps(this, i);
                break;
            case "select":
                O.mountWrapper(this, i, e),
                i = O.getHostProps(this, i),
                t.getReactMountReady().enqueue(f, this);
                break;
            case "textarea":
                P.mountWrapper(this, i, e),
                i = P.getHostProps(this, i),
                t.getReactMountReady().enqueue(l, this),
                t.getReactMountReady().enqueue(f, this)
            }
            o(this, i);
            var a, p;
            null != e ? (a = e._namespaceURI,
            p = e._tag) : n._tag && (a = n._namespaceURI,
            p = n._tag),
            (null == a || a === _.svg && "foreignobject" === p) && (a = _.html),
            a === _.html && ("svg" === this._tag ? a = _.svg : "math" === this._tag && (a = _.mathml)),
            this._namespaceURI = a;
            var h;
            if (t.useCreateElement) {
                var d, v = n._ownerDocument;
                if (a === _.html)
                    if ("script" === this._tag) {
                        var g = v.createElement("div")
                          , y = this._currentElement.type;
                        g.innerHTML = "<" + y + "></" + y + ">",
                        d = g.removeChild(g.firstChild)
                    } else
                        d = i.is ? v.createElement(this._currentElement.type, i.is) : v.createElement(this._currentElement.type);
                else
                    d = v.createElementNS(a, this._currentElement.type);
                T.precacheNode(this, d),
                this._flags |= L.hasCachedChildNodes,
                this._hostParent || C.setAttributeForRoot(d),
                this._updateDOMProperties(null, i, t);
                var b = x(d);
                this._createInitialChildren(t, i, r, b),
                h = b
            } else {
                var w = this._createOpenTagMarkupAndPutListeners(t, i)
                  , E = this._createContentMarkup(t, i, r);
                h = !E && K[this._tag] ? w + "/>" : w + ">" + E + "</" + this._currentElement.type + ">"
            }
            switch (this._tag) {
            case "input":
                t.getReactMountReady().enqueue(u, this),
                i.autoFocus && t.getReactMountReady().enqueue(m.focusDOMComponent, this);
                break;
            case "textarea":
                t.getReactMountReady().enqueue(s, this),
                i.autoFocus && t.getReactMountReady().enqueue(m.focusDOMComponent, this);
                break;
            case "select":
                i.autoFocus && t.getReactMountReady().enqueue(m.focusDOMComponent, this);
                break;
            case "button":
                i.autoFocus && t.getReactMountReady().enqueue(m.focusDOMComponent, this);
                break;
            case "option":
                t.getReactMountReady().enqueue(c, this)
            }
            return h
        },
        _createOpenTagMarkupAndPutListeners: function(t, e) {
            var n = "<" + this._currentElement.type;
            for (var r in e)
                if (e.hasOwnProperty(r)) {
                    var o = e[r];
                    if (null != o)
                        if (H.hasOwnProperty(r))
                            o && i(this, r, o, t);
                        else {
                            r === z && (o && (o = this._previousStyleCopy = y({}, e.style)),
                            o = b.createMarkupForStyles(o, this));
                            var a = null;
                            null != this._tag && d(this._tag, e) ? V.hasOwnProperty(r) || (a = C.createMarkupForCustomAttribute(r, o)) : a = C.createMarkupForProperty(r, o),
                            a && (n += " " + a)
                        }
                }
            return t.renderToStaticMarkup ? n : (this._hostParent || (n += " " + C.createMarkupForRoot()),
            n += " " + C.createMarkupForID(this._domID))
        },
        _createContentMarkup: function(t, e, n) {
            var r = ""
              , o = e.dangerouslySetInnerHTML;
            if (null != o)
                null != o.__html && (r = o.__html);
            else {
                var i = B[typeof e.children] ? e.children : null
                  , a = null != i ? null : e.children;
                if (null != i)
                    r = I(i);
                else if (null != a) {
                    var u = this.mountChildren(a, t, n);
                    r = u.join("")
                }
            }
            return X[this._tag] && "\n" === r.charAt(0) ? "\n" + r : r
        },
        _createInitialChildren: function(t, e, n, r) {
            var o = e.dangerouslySetInnerHTML;
            if (null != o)
                null != o.__html && x.queueHTML(r, o.__html);
            else {
                var i = B[typeof e.children] ? e.children : null
                  , a = null != i ? null : e.children;
                if (null != i)
                    "" !== i && x.queueText(r, i);
                else if (null != a)
                    for (var u = this.mountChildren(a, t, n), s = 0; s < u.length; s++)
                        x.queueChild(r, u[s])
            }
        },
        receiveComponent: function(t, e, n) {
            var r = this._currentElement;
            this._currentElement = t,
            this.updateComponent(e, r, t, n)
        },
        updateComponent: function(t, e, n, r) {
            var i = e.props
              , a = this._currentElement.props;
            switch (this._tag) {
            case "input":
                i = N.getHostProps(this, i),
                a = N.getHostProps(this, a);
                break;
            case "option":
                i = A.getHostProps(this, i),
                a = A.getHostProps(this, a);
                break;
            case "select":
                i = O.getHostProps(this, i),
                a = O.getHostProps(this, a);
                break;
            case "textarea":
                i = P.getHostProps(this, i),
                a = P.getHostProps(this, a)
            }
            switch (o(this, a),
            this._updateDOMProperties(i, a, t),
            this._updateDOMChildren(i, a, t, r),
            this._tag) {
            case "input":
                N.updateWrapper(this),
                R.updateValueIfChanged(this);
                break;
            case "textarea":
                P.updateWrapper(this);
                break;
            case "select":
                t.getReactMountReady().enqueue(p, this)
            }
        },
        _updateDOMProperties: function(t, e, n) {
            var r, o, a;
            for (r in t)
                if (!e.hasOwnProperty(r) && t.hasOwnProperty(r) && null != t[r])
                    if (r === z) {
                        var u = this._previousStyleCopy;
                        for (o in u)
                            u.hasOwnProperty(o) && (a = a || {},
                            a[o] = "");
                        this._previousStyleCopy = null
                    } else
                        H.hasOwnProperty(r) ? t[r] && U(this, r) : d(this._tag, t) ? V.hasOwnProperty(r) || C.deleteValueForAttribute(F(this), r) : (w.properties[r] || w.isCustomAttribute(r)) && C.deleteValueForProperty(F(this), r);
            for (r in e) {
                var s = e[r]
                  , c = r === z ? this._previousStyleCopy : null != t ? t[r] : void 0;
                if (e.hasOwnProperty(r) && s !== c && (null != s || null != c))
                    if (r === z)
                        if (s ? s = this._previousStyleCopy = y({}, s) : this._previousStyleCopy = null,
                        c) {
                            for (o in c)
                                !c.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (a = a || {},
                                a[o] = "");
                            for (o in s)
                                s.hasOwnProperty(o) && c[o] !== s[o] && (a = a || {},
                                a[o] = s[o])
                        } else
                            a = s;
                    else if (H.hasOwnProperty(r))
                        s ? i(this, r, s, n) : c && U(this, r);
                    else if (d(this._tag, e))
                        V.hasOwnProperty(r) || C.setValueForAttribute(F(this), r, s);
                    else if (w.properties[r] || w.isCustomAttribute(r)) {
                        var l = F(this);
                        null != s ? C.setValueForProperty(l, r, s) : C.deleteValueForProperty(l, r)
                    }
            }
            a && b.setValueForStyles(F(this), a, this)
        },
        _updateDOMChildren: function(t, e, n, r) {
            var o = B[typeof t.children] ? t.children : null
              , i = B[typeof e.children] ? e.children : null
              , a = t.dangerouslySetInnerHTML && t.dangerouslySetInnerHTML.__html
              , u = e.dangerouslySetInnerHTML && e.dangerouslySetInnerHTML.__html
              , s = null != o ? null : t.children
              , c = null != i ? null : e.children
              , l = null != o || null != a
              , f = null != i || null != u;
            null != s && null == c ? this.updateChildren(null, n, r) : l && !f && this.updateTextContent(""),
            null != i ? o !== i && this.updateTextContent("" + i) : null != u ? a !== u && this.updateMarkup("" + u) : null != c && this.updateChildren(c, n, r)
        },
        getHostNode: function() {
            return F(this)
        },
        unmountComponent: function(t) {
            switch (this._tag) {
            case "audio":
            case "form":
            case "iframe":
            case "img":
            case "link":
            case "object":
            case "source":
            case "video":
                var e = this._wrapperState.listeners;
                if (e)
                    for (var n = 0; n < e.length; n++)
                        e[n].remove();
                break;
            case "input":
            case "textarea":
                R.stopTracking(this);
                break;
            case "html":
            case "head":
            case "body":
                g("66", this._tag)
            }
            this.unmountChildren(t),
            T.uncacheNode(this),
            E.deleteAllListeners(this),
            this._rootNodeID = 0,
            this._domID = 0,
            this._wrapperState = null
        },
        getPublicInstance: function() {
            return F(this)
        }
    },
    y(v.prototype, v.Mixin, j.Mixin),
    t.exports = v
}
, function(t, e, n) {
    "use strict";
    function r(t, e) {
        var n = {
            _topLevelWrapper: t,
            _idCounter: 1,
            _ownerDocument: e ? e.nodeType === o ? e : e.ownerDocument : null,
            _node: e,
            _tag: e ? e.nodeName.toLowerCase() : null,
            _namespaceURI: e ? e.namespaceURI : null
        };
        return n
    }
    var o = (n(66),
    9);
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    var r = n(4)
      , o = n(19)
      , i = n(5)
      , a = function(t) {
        this._currentElement = null,
        this._hostNode = null,
        this._hostParent = null,
        this._hostContainerInfo = null,
        this._domID = 0
    };
    r(a.prototype, {
        mountComponent: function(t, e, n, r) {
            var a = n._idCounter++;
            this._domID = a,
            this._hostParent = e,
            this._hostContainerInfo = n;
            var u = " react-empty: " + this._domID + " ";
            if (t.useCreateElement) {
                var s = n._ownerDocument
                  , c = s.createComment(u);
                return i.precacheNode(this, c),
                o(c)
            }
            return t.renderToStaticMarkup ? "" : "<!--" + u + "-->"
        },
        receiveComponent: function() {},
        getHostNode: function() {
            return i.getNodeFromInstance(this)
        },
        unmountComponent: function() {
            i.uncacheNode(this)
        }
    }),
    t.exports = a
}
, function(t, e) {
    "use strict";
    var n = {
        useCreateElement: !0,
        useFiber: !1
    };
    t.exports = n
}
, function(t, e, n) {
    "use strict";
    var r = n(51)
      , o = n(5)
      , i = {
        dangerouslyProcessChildrenUpdates: function(t, e) {
            var n = o.getNodeFromInstance(t);
            r.processUpdates(n, e)
        }
    };
    t.exports = i
}
, function(t, e, n) {
    "use strict";
    function r() {
        this._rootNodeID && p.updateWrapper(this)
    }
    function o(t) {
        var e = "checkbox" === t.type || "radio" === t.type;
        return e ? null != t.checked : null != t.value
    }
    function i(t) {
        var e = this._currentElement.props
          , n = c.executeOnChange(e, t);
        f.asap(r, this);
        var o = e.name;
        if ("radio" === e.type && null != o) {
            for (var i = l.getNodeFromInstance(this), u = i; u.parentNode; )
                u = u.parentNode;
            for (var s = u.querySelectorAll("input[name=" + JSON.stringify("" + o) + '][type="radio"]'), p = 0; p < s.length; p++) {
                var h = s[p];
                if (h !== i && h.form === i.form) {
                    var d = l.getInstanceFromNode(h);
                    d ? void 0 : a("90"),
                    f.asap(r, d)
                }
            }
        }
        return n
    }
    var a = n(2)
      , u = n(4)
      , s = n(93)
      , c = n(56)
      , l = n(5)
      , f = n(9)
      , p = (n(1),
    n(3),
    {
        getHostProps: function(t, e) {
            var n = c.getValue(e)
              , r = c.getChecked(e)
              , o = u({
                type: void 0,
                step: void 0,
                min: void 0,
                max: void 0
            }, e, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: null != n ? n : t._wrapperState.initialValue,
                checked: null != r ? r : t._wrapperState.initialChecked,
                onChange: t._wrapperState.onChange
            });
            return o
        },
        mountWrapper: function(t, e) {
            var n = e.defaultValue;
            t._wrapperState = {
                initialChecked: null != e.checked ? e.checked : e.defaultChecked,
                initialValue: null != e.value ? e.value : n,
                listeners: null,
                onChange: i.bind(t),
                controlled: o(e)
            }
        },
        updateWrapper: function(t) {
            var e = t._currentElement.props
              , n = e.checked;
            null != n && s.setValueForProperty(l.getNodeFromInstance(t), "checked", n || !1);
            var r = l.getNodeFromInstance(t)
              , o = c.getValue(e);
            if (null != o)
                if (0 === o && "" === r.value)
                    r.value = "0";
                else if ("number" === e.type) {
                    var i = parseFloat(r.value, 10) || 0;
                    (o != i || o == i && r.value != o) && (r.value = "" + o)
                } else
                    r.value !== "" + o && (r.value = "" + o);
            else
                null == e.value && null != e.defaultValue && r.defaultValue !== "" + e.defaultValue && (r.defaultValue = "" + e.defaultValue),
                null == e.checked && null != e.defaultChecked && (r.defaultChecked = !!e.defaultChecked)
        },
        postMountWrapper: function(t) {
            var e = t._currentElement.props
              , n = l.getNodeFromInstance(t);
            switch (e.type) {
            case "submit":
            case "reset":
                break;
            case "color":
            case "date":
            case "datetime":
            case "datetime-local":
            case "month":
            case "time":
            case "week":
                n.value = "",
                n.value = n.defaultValue;
                break;
            default:
                n.value = n.value
            }
            var r = n.name;
            "" !== r && (n.name = ""),
            n.defaultChecked = !n.defaultChecked,
            n.defaultChecked = !n.defaultChecked,
            "" !== r && (n.name = r)
        }
    });
    t.exports = p
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        var e = "";
        return i.Children.forEach(t, function(t) {
            null != t && ("string" == typeof t || "number" == typeof t ? e += t : s || (s = !0))
        }),
        e
    }
    var o = n(4)
      , i = n(22)
      , a = n(5)
      , u = n(95)
      , s = (n(3),
    !1)
      , c = {
        mountWrapper: function(t, e, n) {
            var o = null;
            if (null != n) {
                var i = n;
                "optgroup" === i._tag && (i = i._hostParent),
                null != i && "select" === i._tag && (o = u.getSelectValueContext(i))
            }
            var a = null;
            if (null != o) {
                var s;
                if (s = null != e.value ? e.value + "" : r(e.children),
                a = !1,
                Array.isArray(o)) {
                    for (var c = 0; c < o.length; c++)
                        if ("" + o[c] === s) {
                            a = !0;
                            break
                        }
                } else
                    a = "" + o === s
            }
            t._wrapperState = {
                selected: a
            }
        },
        postMountWrapper: function(t) {
            var e = t._currentElement.props;
            if (null != e.value) {
                var n = a.getNodeFromInstance(t);
                n.setAttribute("value", e.value)
            }
        },
        getHostProps: function(t, e) {
            var n = o({
                selected: void 0,
                children: void 0
            }, e);
            null != t._wrapperState.selected && (n.selected = t._wrapperState.selected);
            var i = r(e.children);
            return i && (n.children = i),
            n
        }
    };
    t.exports = c
}
, function(t, e, n) {
    "use strict";
    function r(t, e, n, r) {
        return t === n && e === r
    }
    function o(t) {
        var e = document.selection
          , n = e.createRange()
          , r = n.text.length
          , o = n.duplicate();
        o.moveToElementText(t),
        o.setEndPoint("EndToStart", n);
        var i = o.text.length
          , a = i + r;
        return {
            start: i,
            end: a
        }
    }
    function i(t) {
        var e = window.getSelection && window.getSelection();
        if (!e || 0 === e.rangeCount)
            return null;
        var n = e.anchorNode
          , o = e.anchorOffset
          , i = e.focusNode
          , a = e.focusOffset
          , u = e.getRangeAt(0);
        try {
            u.startContainer.nodeType,
            u.endContainer.nodeType
        } catch (t) {
            return null
        }
        var s = r(e.anchorNode, e.anchorOffset, e.focusNode, e.focusOffset)
          , c = s ? 0 : u.toString().length
          , l = u.cloneRange();
        l.selectNodeContents(t),
        l.setEnd(u.startContainer, u.startOffset);
        var f = r(l.startContainer, l.startOffset, l.endContainer, l.endOffset)
          , p = f ? 0 : l.toString().length
          , h = p + c
          , d = document.createRange();
        d.setStart(n, o),
        d.setEnd(i, a);
        var v = d.collapsed;
        return {
            start: v ? h : p,
            end: v ? p : h
        }
    }
    function a(t, e) {
        var n, r, o = document.selection.createRange().duplicate();
        void 0 === e.end ? (n = e.start,
        r = n) : e.start > e.end ? (n = e.end,
        r = e.start) : (n = e.start,
        r = e.end),
        o.moveToElementText(t),
        o.moveStart("character", n),
        o.setEndPoint("EndToStart", o),
        o.moveEnd("character", r - n),
        o.select()
    }
    function u(t, e) {
        if (window.getSelection) {
            var n = window.getSelection()
              , r = t[l()].length
              , o = Math.min(e.start, r)
              , i = void 0 === e.end ? o : Math.min(e.end, r);
            if (!n.extend && o > i) {
                var a = i;
                i = o,
                o = a
            }
            var u = c(t, o)
              , s = c(t, i);
            if (u && s) {
                var f = document.createRange();
                f.setStart(u.node, u.offset),
                n.removeAllRanges(),
                o > i ? (n.addRange(f),
                n.extend(s.node, s.offset)) : (f.setEnd(s.node, s.offset),
                n.addRange(f))
            }
        }
    }
    var s = n(6)
      , c = n(303)
      , l = n(106)
      , f = s.canUseDOM && "selection"in document && !("getSelection"in window)
      , p = {
        getOffsets: f ? o : i,
        setOffsets: f ? a : u
    };
    t.exports = p
}
, function(t, e, n) {
    "use strict";
    var r = n(2)
      , o = n(4)
      , i = n(51)
      , a = n(19)
      , u = n(5)
      , s = n(40)
      , c = (n(1),
    n(66),
    function(t) {
        this._currentElement = t,
        this._stringText = "" + t,
        this._hostNode = null,
        this._hostParent = null,
        this._domID = 0,
        this._mountIndex = 0,
        this._closingComment = null,
        this._commentNodes = null
    }
    );
    o(c.prototype, {
        mountComponent: function(t, e, n, r) {
            var o = n._idCounter++
              , i = " react-text: " + o + " "
              , c = " /react-text ";
            if (this._domID = o,
            this._hostParent = e,
            t.useCreateElement) {
                var l = n._ownerDocument
                  , f = l.createComment(i)
                  , p = l.createComment(c)
                  , h = a(l.createDocumentFragment());
                return a.queueChild(h, a(f)),
                this._stringText && a.queueChild(h, a(l.createTextNode(this._stringText))),
                a.queueChild(h, a(p)),
                u.precacheNode(this, f),
                this._closingComment = p,
                h
            }
            var d = s(this._stringText);
            return t.renderToStaticMarkup ? d : "<!--" + i + "-->" + d + "<!--" + c + "-->"
        },
        receiveComponent: function(t, e) {
            if (t !== this._currentElement) {
                this._currentElement = t;
                var n = "" + t;
                if (n !== this._stringText) {
                    this._stringText = n;
                    var r = this.getHostNode();
                    i.replaceDelimitedText(r[0], r[1], n)
                }
            }
        },
        getHostNode: function() {
            var t = this._commentNodes;
            if (t)
                return t;
            if (!this._closingComment)
                for (var e = u.getNodeFromInstance(this), n = e.nextSibling; ; ) {
                    if (null == n ? r("67", this._domID) : void 0,
                    8 === n.nodeType && " /react-text " === n.nodeValue) {
                        this._closingComment = n;
                        break
                    }
                    n = n.nextSibling
                }
            return t = [this._hostNode, this._closingComment],
            this._commentNodes = t,
            t
        },
        unmountComponent: function() {
            this._closingComment = null,
            this._commentNodes = null,
            u.uncacheNode(this)
        }
    }),
    t.exports = c
}
, function(t, e, n) {
    "use strict";
    function r() {
        this._rootNodeID && l.updateWrapper(this)
    }
    function o(t) {
        var e = this._currentElement.props
          , n = u.executeOnChange(e, t);
        return c.asap(r, this),
        n
    }
    var i = n(2)
      , a = n(4)
      , u = n(56)
      , s = n(5)
      , c = n(9)
      , l = (n(1),
    n(3),
    {
        getHostProps: function(t, e) {
            null != e.dangerouslySetInnerHTML ? i("91") : void 0;
            var n = a({}, e, {
                value: void 0,
                defaultValue: void 0,
                children: "" + t._wrapperState.initialValue,
                onChange: t._wrapperState.onChange
            });
            return n
        },
        mountWrapper: function(t, e) {
            var n = u.getValue(e)
              , r = n;
            if (null == n) {
                var a = e.defaultValue
                  , s = e.children;
                null != s && (null != a ? i("92") : void 0,
                Array.isArray(s) && (s.length <= 1 ? void 0 : i("93"),
                s = s[0]),
                a = "" + s),
                null == a && (a = ""),
                r = a
            }
            t._wrapperState = {
                initialValue: "" + r,
                listeners: null,
                onChange: o.bind(t)
            }
        },
        updateWrapper: function(t) {
            var e = t._currentElement.props
              , n = s.getNodeFromInstance(t)
              , r = u.getValue(e);
            if (null != r) {
                var o = "" + r;
                o !== n.value && (n.value = o),
                null == e.defaultValue && (n.defaultValue = o)
            }
            null != e.defaultValue && (n.defaultValue = e.defaultValue)
        },
        postMountWrapper: function(t) {
            var e = s.getNodeFromInstance(t)
              , n = e.textContent;
            n === t._wrapperState.initialValue && (e.value = n)
        }
    });
    t.exports = l
}
, function(t, e, n) {
    "use strict";
    function r(t, e) {
        "_hostNode"in t ? void 0 : s("33"),
        "_hostNode"in e ? void 0 : s("33");
        for (var n = 0, r = t; r; r = r._hostParent)
            n++;
        for (var o = 0, i = e; i; i = i._hostParent)
            o++;
        for (; n - o > 0; )
            t = t._hostParent,
            n--;
        for (; o - n > 0; )
            e = e._hostParent,
            o--;
        for (var a = n; a--; ) {
            if (t === e)
                return t;
            t = t._hostParent,
            e = e._hostParent
        }
        return null
    }
    function o(t, e) {
        "_hostNode"in t ? void 0 : s("35"),
        "_hostNode"in e ? void 0 : s("35");
        for (; e; ) {
            if (e === t)
                return !0;
            e = e._hostParent
        }
        return !1
    }
    function i(t) {
        return "_hostNode"in t ? void 0 : s("36"),
        t._hostParent
    }
    function a(t, e, n) {
        for (var r = []; t; )
            r.push(t),
            t = t._hostParent;
        var o;
        for (o = r.length; o-- > 0; )
            e(r[o], "captured", n);
        for (o = 0; o < r.length; o++)
            e(r[o], "bubbled", n)
    }
    function u(t, e, n, o, i) {
        for (var a = t && e ? r(t, e) : null, u = []; t && t !== a; )
            u.push(t),
            t = t._hostParent;
        for (var s = []; e && e !== a; )
            s.push(e),
            e = e._hostParent;
        var c;
        for (c = 0; c < u.length; c++)
            n(u[c], "bubbled", o);
        for (c = s.length; c-- > 0; )
            n(s[c], "captured", i)
    }
    var s = n(2);
    n(1);
    t.exports = {
        isAncestor: o,
        getLowestCommonAncestor: r,
        getParentInstance: i,
        traverseTwoPhase: a,
        traverseEnterLeave: u
    }
}
, function(t, e, n) {
    "use strict";
    function r() {
        this.reinitializeTransaction()
    }
    var o = n(4)
      , i = n(9)
      , a = n(39)
      , u = n(8)
      , s = {
        initialize: u,
        close: function() {
            p.isBatchingUpdates = !1
        }
    }
      , c = {
        initialize: u,
        close: i.flushBatchedUpdates.bind(i)
    }
      , l = [c, s];
    o(r.prototype, a, {
        getTransactionWrappers: function() {
            return l
        }
    });
    var f = new r
      , p = {
        isBatchingUpdates: !1,
        batchedUpdates: function(t, e, n, r, o, i) {
            var a = p.isBatchingUpdates;
            return p.isBatchingUpdates = !0,
            a ? t(e, n, r, o, i) : f.perform(t, null, e, n, r, o, i)
        }
    };
    t.exports = p
}
, function(t, e, n) {
    "use strict";
    function r() {
        C || (C = !0,
        m.EventEmitter.injectReactEventListener(y),
        m.EventPluginHub.injectEventPluginOrder(u),
        m.EventPluginUtils.injectComponentTree(p),
        m.EventPluginUtils.injectTreeTraversal(d),
        m.EventPluginHub.injectEventPluginsByName({
            SimpleEventPlugin: w,
            EnterLeaveEventPlugin: s,
            ChangeEventPlugin: a,
            SelectEventPlugin: _,
            BeforeInputEventPlugin: i
        }),
        m.HostComponent.injectGenericComponentClass(f),
        m.HostComponent.injectTextComponentClass(v),
        m.DOMProperty.injectDOMPropertyConfig(o),
        m.DOMProperty.injectDOMPropertyConfig(c),
        m.DOMProperty.injectDOMPropertyConfig(x),
        m.EmptyComponent.injectEmptyComponentFactory(function(t) {
            return new h(t)
        }),
        m.Updates.injectReconcileTransaction(b),
        m.Updates.injectBatchingStrategy(g),
        m.Component.injectEnvironment(l))
    }
    var o = n(244)
      , i = n(246)
      , a = n(248)
      , u = n(250)
      , s = n(251)
      , c = n(253)
      , l = n(255)
      , f = n(258)
      , p = n(5)
      , h = n(260)
      , d = n(268)
      , v = n(266)
      , g = n(269)
      , y = n(273)
      , m = n(274)
      , b = n(279)
      , x = n(284)
      , _ = n(285)
      , w = n(286)
      , C = !1;
    t.exports = {
        inject: r
    }
}
, 115, function(t, e, n) {
    "use strict";
    function r(t) {
        o.enqueueEvents(t),
        o.processEventQueue(!1)
    }
    var o = n(25)
      , i = {
        handleTopLevel: function(t, e, n, i) {
            var a = o.extractEvents(t, e, n, i);
            r(a)
        }
    };
    t.exports = i
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        for (; t._hostParent; )
            t = t._hostParent;
        var e = f.getNodeFromInstance(t)
          , n = e.parentNode;
        return f.getClosestInstanceFromNode(n)
    }
    function o(t, e) {
        this.topLevelType = t,
        this.nativeEvent = e,
        this.ancestors = []
    }
    function i(t) {
        var e = h(t.nativeEvent)
          , n = f.getClosestInstanceFromNode(e)
          , o = n;
        do
            t.ancestors.push(o),
            o = o && r(o);
        while (o);for (var i = 0; i < t.ancestors.length; i++)
            n = t.ancestors[i],
            v._handleTopLevel(t.topLevelType, n, t.nativeEvent, h(t.nativeEvent))
    }
    function a(t) {
        var e = d(window);
        t(e)
    }
    var u = n(4)
      , s = n(70)
      , c = n(6)
      , l = n(15)
      , f = n(5)
      , p = n(9)
      , h = n(63)
      , d = n(145);
    u(o.prototype, {
        destructor: function() {
            this.topLevelType = null,
            this.nativeEvent = null,
            this.ancestors.length = 0
        }
    }),
    l.addPoolingTo(o, l.twoArgumentPooler);
    var v = {
        _enabled: !0,
        _handleTopLevel: null,
        WINDOW_HANDLE: c.canUseDOM ? window : null,
        setHandleTopLevel: function(t) {
            v._handleTopLevel = t
        },
        setEnabled: function(t) {
            v._enabled = !!t
        },
        isEnabled: function() {
            return v._enabled
        },
        trapBubbledEvent: function(t, e, n) {
            return n ? s.listen(n, e, v.dispatchEvent.bind(null, t)) : null
        },
        trapCapturedEvent: function(t, e, n) {
            return n ? s.capture(n, e, v.dispatchEvent.bind(null, t)) : null
        },
        monitorScrollValue: function(t) {
            var e = a.bind(null, t);
            s.listen(window, "scroll", e)
        },
        dispatchEvent: function(t, e) {
            if (v._enabled) {
                var n = o.getPooled(t, e);
                try {
                    p.batchedUpdates(i, n)
                } finally {
                    o.release(n)
                }
            }
        }
    };
    t.exports = v
}
, function(t, e, n) {
    "use strict";
    var r = n(20)
      , o = n(25)
      , i = n(54)
      , a = n(57)
      , u = n(96)
      , s = n(37)
      , c = n(98)
      , l = n(9)
      , f = {
        Component: a.injection,
        DOMProperty: r.injection,
        EmptyComponent: u.injection,
        EventPluginHub: o.injection,
        EventPluginUtils: i.injection,
        EventEmitter: s.injection,
        HostComponent: c.injection,
        Updates: l.injection
    };
    t.exports = f
}
, function(t, e, n) {
    "use strict";
    var r = n(297)
      , o = /\/?>/
      , i = /^<\!\-\-/
      , a = {
        CHECKSUM_ATTR_NAME: "data-react-checksum",
        addChecksumToMarkup: function(t) {
            var e = r(t);
            return i.test(t) ? t : t.replace(o, " " + a.CHECKSUM_ATTR_NAME + '="' + e + '"$&')
        },
        canReuseMarkup: function(t, e) {
            var n = e.getAttribute(a.CHECKSUM_ATTR_NAME);
            n = n && parseInt(n, 10);
            var o = r(t);
            return o === n
        }
    };
    t.exports = a
}
, function(t, e, n) {
    "use strict";
    function r(t, e, n) {
        return {
            type: "INSERT_MARKUP",
            content: t,
            fromIndex: null,
            fromNode: null,
            toIndex: n,
            afterNode: e
        }
    }
    function o(t, e, n) {
        return {
            type: "MOVE_EXISTING",
            content: null,
            fromIndex: t._mountIndex,
            fromNode: p.getHostNode(t),
            toIndex: n,
            afterNode: e
        }
    }
    function i(t, e) {
        return {
            type: "REMOVE_NODE",
            content: null,
            fromIndex: t._mountIndex,
            fromNode: e,
            toIndex: null,
            afterNode: null
        }
    }
    function a(t) {
        return {
            type: "SET_MARKUP",
            content: t,
            fromIndex: null,
            fromNode: null,
            toIndex: null,
            afterNode: null
        }
    }
    function u(t) {
        return {
            type: "TEXT_CONTENT",
            content: t,
            fromIndex: null,
            fromNode: null,
            toIndex: null,
            afterNode: null
        }
    }
    function s(t, e) {
        return e && (t = t || [],
        t.push(e)),
        t
    }
    function c(t, e) {
        f.processChildrenUpdates(t, e)
    }
    var l = n(2)
      , f = n(57)
      , p = (n(27),
    n(7),
    n(13),
    n(21))
      , h = n(254)
      , d = (n(8),
    n(300))
      , v = (n(1),
    {
        Mixin: {
            _reconcilerInstantiateChildren: function(t, e, n) {
                return h.instantiateChildren(t, e, n)
            },
            _reconcilerUpdateChildren: function(t, e, n, r, o, i) {
                var a, u = 0;
                return a = d(e, u),
                h.updateChildren(t, a, n, r, o, this, this._hostContainerInfo, i, u),
                a
            },
            mountChildren: function(t, e, n) {
                var r = this._reconcilerInstantiateChildren(t, e, n);
                this._renderedChildren = r;
                var o = []
                  , i = 0;
                for (var a in r)
                    if (r.hasOwnProperty(a)) {
                        var u = r[a]
                          , s = 0
                          , c = p.mountComponent(u, e, this, this._hostContainerInfo, n, s);
                        u._mountIndex = i++,
                        o.push(c)
                    }
                return o
            },
            updateTextContent: function(t) {
                var e = this._renderedChildren;
                h.unmountChildren(e, !1);
                for (var n in e)
                    e.hasOwnProperty(n) && l("118");
                var r = [u(t)];
                c(this, r)
            },
            updateMarkup: function(t) {
                var e = this._renderedChildren;
                h.unmountChildren(e, !1);
                for (var n in e)
                    e.hasOwnProperty(n) && l("118");
                var r = [a(t)];
                c(this, r)
            },
            updateChildren: function(t, e, n) {
                this._updateChildren(t, e, n)
            },
            _updateChildren: function(t, e, n) {
                var r = this._renderedChildren
                  , o = {}
                  , i = []
                  , a = this._reconcilerUpdateChildren(r, t, i, o, e, n);
                if (a || r) {
                    var u, l = null, f = 0, h = 0, d = 0, v = null;
                    for (u in a)
                        if (a.hasOwnProperty(u)) {
                            var g = r && r[u]
                              , y = a[u];
                            g === y ? (l = s(l, this.moveChild(g, v, f, h)),
                            h = Math.max(g._mountIndex, h),
                            g._mountIndex = f) : (g && (h = Math.max(g._mountIndex, h)),
                            l = s(l, this._mountChildAtIndex(y, i[d], v, f, e, n)),
                            d++),
                            f++,
                            v = p.getHostNode(y)
                        }
                    for (u in o)
                        o.hasOwnProperty(u) && (l = s(l, this._unmountChild(r[u], o[u])));
                    l && c(this, l),
                    this._renderedChildren = a
                }
            },
            unmountChildren: function(t) {
                var e = this._renderedChildren;
                h.unmountChildren(e, t),
                this._renderedChildren = null
            },
            moveChild: function(t, e, n, r) {
                if (t._mountIndex < r)
                    return o(t, e, n)
            },
            createChild: function(t, e, n) {
                return r(n, e, t._mountIndex)
            },
            removeChild: function(t, e) {
                return i(t, e)
            },
            _mountChildAtIndex: function(t, e, n, r, o, i) {
                return t._mountIndex = r,
                this.createChild(t, n, e)
            },
            _unmountChild: function(t, e) {
                var n = this.removeChild(t, e);
                return t._mountIndex = null,
                n
            }
        }
    });
    t.exports = v
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return !(!t || "function" != typeof t.attachRef || "function" != typeof t.detachRef)
    }
    var o = n(2)
      , i = (n(1),
    {
        addComponentAsRefTo: function(t, e, n) {
            r(n) ? void 0 : o("119"),
            n.attachRef(e, t)
        },
        removeComponentAsRefFrom: function(t, e, n) {
            r(n) ? void 0 : o("120");
            var i = n.getPublicInstance();
            i && i.refs[e] === t.getPublicInstance() && n.detachRef(e)
        }
    });
    t.exports = i
}
, function(t, e) {
    "use strict";
    var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    t.exports = n
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        this.reinitializeTransaction(),
        this.renderToStaticMarkup = !1,
        this.reactMountReady = i.getPooled(null),
        this.useCreateElement = t
    }
    var o = n(4)
      , i = n(92)
      , a = n(15)
      , u = n(37)
      , s = n(99)
      , c = (n(7),
    n(39))
      , l = n(59)
      , f = {
        initialize: s.getSelectionInformation,
        close: s.restoreSelection
    }
      , p = {
        initialize: function() {
            var t = u.isEnabled();
            return u.setEnabled(!1),
            t
        },
        close: function(t) {
            u.setEnabled(t)
        }
    }
      , h = {
        initialize: function() {
            this.reactMountReady.reset()
        },
        close: function() {
            this.reactMountReady.notifyAll()
        }
    }
      , d = [f, p, h]
      , v = {
        getTransactionWrappers: function() {
            return d
        },
        getReactMountReady: function() {
            return this.reactMountReady
        },
        getUpdateQueue: function() {
            return l
        },
        checkpoint: function() {
            return this.reactMountReady.checkpoint()
        },
        rollback: function(t) {
            this.reactMountReady.rollback(t)
        },
        destructor: function() {
            i.release(this.reactMountReady),
            this.reactMountReady = null
        }
    };
    o(r.prototype, c, v),
    a.addPoolingTo(r),
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    function r(t, e, n) {
        "function" == typeof t ? t(e.getPublicInstance()) : i.addComponentAsRefTo(e, t, n)
    }
    function o(t, e, n) {
        "function" == typeof t ? t(null) : i.removeComponentAsRefFrom(e, t, n)
    }
    var i = n(277)
      , a = {};
    a.attachRefs = function(t, e) {
        if (null !== e && "object" == typeof e) {
            var n = e.ref;
            null != n && r(n, t, e._owner)
        }
    }
    ,
    a.shouldUpdateRefs = function(t, e) {
        var n = null
          , r = null;
        null !== t && "object" == typeof t && (n = t.ref,
        r = t._owner);
        var o = null
          , i = null;
        return null !== e && "object" == typeof e && (o = e.ref,
        i = e._owner),
        n !== o || "string" == typeof o && i !== r
    }
    ,
    a.detachRefs = function(t, e) {
        if (null !== e && "object" == typeof e) {
            var n = e.ref;
            null != n && o(n, t, e._owner)
        }
    }
    ,
    t.exports = a
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        this.reinitializeTransaction(),
        this.renderToStaticMarkup = t,
        this.useCreateElement = !1,
        this.updateQueue = new u(this)
    }
    var o = n(4)
      , i = n(15)
      , a = n(39)
      , u = (n(7),
    n(282))
      , s = []
      , c = {
        enqueue: function() {}
    }
      , l = {
        getTransactionWrappers: function() {
            return s
        },
        getReactMountReady: function() {
            return c
        },
        getUpdateQueue: function() {
            return this.updateQueue
        },
        destructor: function() {},
        checkpoint: function() {},
        rollback: function() {}
    };
    o(r.prototype, a, l),
    i.addPoolingTo(r),
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    function r(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(t, e) {}
    var i = n(59)
      , a = (n(3),
    function() {
        function t(e) {
            r(this, t),
            this.transaction = e
        }
        return t.prototype.isMounted = function(t) {
            return !1
        }
        ,
        t.prototype.enqueueCallback = function(t, e, n) {
            this.transaction.isInTransaction() && i.enqueueCallback(t, e, n)
        }
        ,
        t.prototype.enqueueForceUpdate = function(t) {
            this.transaction.isInTransaction() ? i.enqueueForceUpdate(t) : o(t, "forceUpdate")
        }
        ,
        t.prototype.enqueueReplaceState = function(t, e) {
            this.transaction.isInTransaction() ? i.enqueueReplaceState(t, e) : o(t, "replaceState")
        }
        ,
        t.prototype.enqueueSetState = function(t, e) {
            this.transaction.isInTransaction() ? i.enqueueSetState(t, e) : o(t, "setState")
        }
        ,
        t
    }());
    t.exports = a
}
, function(t, e) {
    "use strict";
    t.exports = "15.6.2"
}
, function(t, e) {
    "use strict";
    var n = {
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace"
    }
      , r = {
        accentHeight: "accent-height",
        accumulate: 0,
        additive: 0,
        alignmentBaseline: "alignment-baseline",
        allowReorder: "allowReorder",
        alphabetic: 0,
        amplitude: 0,
        arabicForm: "arabic-form",
        ascent: 0,
        attributeName: "attributeName",
        attributeType: "attributeType",
        autoReverse: "autoReverse",
        azimuth: 0,
        baseFrequency: "baseFrequency",
        baseProfile: "baseProfile",
        baselineShift: "baseline-shift",
        bbox: 0,
        begin: 0,
        bias: 0,
        by: 0,
        calcMode: "calcMode",
        capHeight: "cap-height",
        clip: 0,
        clipPath: "clip-path",
        clipRule: "clip-rule",
        clipPathUnits: "clipPathUnits",
        colorInterpolation: "color-interpolation",
        colorInterpolationFilters: "color-interpolation-filters",
        colorProfile: "color-profile",
        colorRendering: "color-rendering",
        contentScriptType: "contentScriptType",
        contentStyleType: "contentStyleType",
        cursor: 0,
        cx: 0,
        cy: 0,
        d: 0,
        decelerate: 0,
        descent: 0,
        diffuseConstant: "diffuseConstant",
        direction: 0,
        display: 0,
        divisor: 0,
        dominantBaseline: "dominant-baseline",
        dur: 0,
        dx: 0,
        dy: 0,
        edgeMode: "edgeMode",
        elevation: 0,
        enableBackground: "enable-background",
        end: 0,
        exponent: 0,
        externalResourcesRequired: "externalResourcesRequired",
        fill: 0,
        fillOpacity: "fill-opacity",
        fillRule: "fill-rule",
        filter: 0,
        filterRes: "filterRes",
        filterUnits: "filterUnits",
        floodColor: "flood-color",
        floodOpacity: "flood-opacity",
        focusable: 0,
        fontFamily: "font-family",
        fontSize: "font-size",
        fontSizeAdjust: "font-size-adjust",
        fontStretch: "font-stretch",
        fontStyle: "font-style",
        fontVariant: "font-variant",
        fontWeight: "font-weight",
        format: 0,
        from: 0,
        fx: 0,
        fy: 0,
        g1: 0,
        g2: 0,
        glyphName: "glyph-name",
        glyphOrientationHorizontal: "glyph-orientation-horizontal",
        glyphOrientationVertical: "glyph-orientation-vertical",
        glyphRef: "glyphRef",
        gradientTransform: "gradientTransform",
        gradientUnits: "gradientUnits",
        hanging: 0,
        horizAdvX: "horiz-adv-x",
        horizOriginX: "horiz-origin-x",
        ideographic: 0,
        imageRendering: "image-rendering",
        in: 0,
        in2: 0,
        intercept: 0,
        k: 0,
        k1: 0,
        k2: 0,
        k3: 0,
        k4: 0,
        kernelMatrix: "kernelMatrix",
        kernelUnitLength: "kernelUnitLength",
        kerning: 0,
        keyPoints: "keyPoints",
        keySplines: "keySplines",
        keyTimes: "keyTimes",
        lengthAdjust: "lengthAdjust",
        letterSpacing: "letter-spacing",
        lightingColor: "lighting-color",
        limitingConeAngle: "limitingConeAngle",
        local: 0,
        markerEnd: "marker-end",
        markerMid: "marker-mid",
        markerStart: "marker-start",
        markerHeight: "markerHeight",
        markerUnits: "markerUnits",
        markerWidth: "markerWidth",
        mask: 0,
        maskContentUnits: "maskContentUnits",
        maskUnits: "maskUnits",
        mathematical: 0,
        mode: 0,
        numOctaves: "numOctaves",
        offset: 0,
        opacity: 0,
        operator: 0,
        order: 0,
        orient: 0,
        orientation: 0,
        origin: 0,
        overflow: 0,
        overlinePosition: "overline-position",
        overlineThickness: "overline-thickness",
        paintOrder: "paint-order",
        panose1: "panose-1",
        pathLength: "pathLength",
        patternContentUnits: "patternContentUnits",
        patternTransform: "patternTransform",
        patternUnits: "patternUnits",
        pointerEvents: "pointer-events",
        points: 0,
        pointsAtX: "pointsAtX",
        pointsAtY: "pointsAtY",
        pointsAtZ: "pointsAtZ",
        preserveAlpha: "preserveAlpha",
        preserveAspectRatio: "preserveAspectRatio",
        primitiveUnits: "primitiveUnits",
        r: 0,
        radius: 0,
        refX: "refX",
        refY: "refY",
        renderingIntent: "rendering-intent",
        repeatCount: "repeatCount",
        repeatDur: "repeatDur",
        requiredExtensions: "requiredExtensions",
        requiredFeatures: "requiredFeatures",
        restart: 0,
        result: 0,
        rotate: 0,
        rx: 0,
        ry: 0,
        scale: 0,
        seed: 0,
        shapeRendering: "shape-rendering",
        slope: 0,
        spacing: 0,
        specularConstant: "specularConstant",
        specularExponent: "specularExponent",
        speed: 0,
        spreadMethod: "spreadMethod",
        startOffset: "startOffset",
        stdDeviation: "stdDeviation",
        stemh: 0,
        stemv: 0,
        stitchTiles: "stitchTiles",
        stopColor: "stop-color",
        stopOpacity: "stop-opacity",
        strikethroughPosition: "strikethrough-position",
        strikethroughThickness: "strikethrough-thickness",
        string: 0,
        stroke: 0,
        strokeDasharray: "stroke-dasharray",
        strokeDashoffset: "stroke-dashoffset",
        strokeLinecap: "stroke-linecap",
        strokeLinejoin: "stroke-linejoin",
        strokeMiterlimit: "stroke-miterlimit",
        strokeOpacity: "stroke-opacity",
        strokeWidth: "stroke-width",
        surfaceScale: "surfaceScale",
        systemLanguage: "systemLanguage",
        tableValues: "tableValues",
        targetX: "targetX",
        targetY: "targetY",
        textAnchor: "text-anchor",
        textDecoration: "text-decoration",
        textRendering: "text-rendering",
        textLength: "textLength",
        to: 0,
        transform: 0,
        u1: 0,
        u2: 0,
        underlinePosition: "underline-position",
        underlineThickness: "underline-thickness",
        unicode: 0,
        unicodeBidi: "unicode-bidi",
        unicodeRange: "unicode-range",
        unitsPerEm: "units-per-em",
        vAlphabetic: "v-alphabetic",
        vHanging: "v-hanging",
        vIdeographic: "v-ideographic",
        vMathematical: "v-mathematical",
        values: 0,
        vectorEffect: "vector-effect",
        version: 0,
        vertAdvY: "vert-adv-y",
        vertOriginX: "vert-origin-x",
        vertOriginY: "vert-origin-y",
        viewBox: "viewBox",
        viewTarget: "viewTarget",
        visibility: 0,
        widths: 0,
        wordSpacing: "word-spacing",
        writingMode: "writing-mode",
        x: 0,
        xHeight: "x-height",
        x1: 0,
        x2: 0,
        xChannelSelector: "xChannelSelector",
        xlinkActuate: "xlink:actuate",
        xlinkArcrole: "xlink:arcrole",
        xlinkHref: "xlink:href",
        xlinkRole: "xlink:role",
        xlinkShow: "xlink:show",
        xlinkTitle: "xlink:title",
        xlinkType: "xlink:type",
        xmlBase: "xml:base",
        xmlns: 0,
        xmlnsXlink: "xmlns:xlink",
        xmlLang: "xml:lang",
        xmlSpace: "xml:space",
        y: 0,
        y1: 0,
        y2: 0,
        yChannelSelector: "yChannelSelector",
        z: 0,
        zoomAndPan: "zoomAndPan"
    }
      , o = {
        Properties: {},
        DOMAttributeNamespaces: {
            xlinkActuate: n.xlink,
            xlinkArcrole: n.xlink,
            xlinkHref: n.xlink,
            xlinkRole: n.xlink,
            xlinkShow: n.xlink,
            xlinkTitle: n.xlink,
            xlinkType: n.xlink,
            xmlBase: n.xml,
            xmlLang: n.xml,
            xmlSpace: n.xml
        },
        DOMAttributeNames: {}
    };
    Object.keys(r).forEach(function(t) {
        o.Properties[t] = 0,
        r[t] && (o.DOMAttributeNames[t] = r[t])
    }),
    t.exports = o
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        if ("selectionStart"in t && s.hasSelectionCapabilities(t))
            return {
                start: t.selectionStart,
                end: t.selectionEnd
            };
        if (window.getSelection) {
            var e = window.getSelection();
            return {
                anchorNode: e.anchorNode,
                anchorOffset: e.anchorOffset,
                focusNode: e.focusNode,
                focusOffset: e.focusOffset
            }
        }
        if (document.selection) {
            var n = document.selection.createRange();
            return {
                parentElement: n.parentElement(),
                text: n.text,
                top: n.boundingTop,
                left: n.boundingLeft
            }
        }
    }
    function o(t, e) {
        if (m || null == v || v !== l())
            return null;
        var n = r(v);
        if (!y || !p(y, n)) {
            y = n;
            var o = c.getPooled(d.select, g, t, e);
            return o.type = "select",
            o.target = v,
            i.accumulateTwoPhaseDispatches(o),
            o
        }
        return null
    }
    var i = n(26)
      , a = n(6)
      , u = n(5)
      , s = n(99)
      , c = n(12)
      , l = n(72)
      , f = n(109)
      , p = n(42)
      , h = a.canUseDOM && "documentMode"in document && document.documentMode <= 11
      , d = {
        select: {
            phasedRegistrationNames: {
                bubbled: "onSelect",
                captured: "onSelectCapture"
            },
            dependencies: ["topBlur", "topContextMenu", "topFocus", "topKeyDown", "topKeyUp", "topMouseDown", "topMouseUp", "topSelectionChange"]
        }
    }
      , v = null
      , g = null
      , y = null
      , m = !1
      , b = !1
      , x = {
        eventTypes: d,
        extractEvents: function(t, e, n, r) {
            if (!b)
                return null;
            var i = e ? u.getNodeFromInstance(e) : window;
            switch (t) {
            case "topFocus":
                (f(i) || "true" === i.contentEditable) && (v = i,
                g = e,
                y = null);
                break;
            case "topBlur":
                v = null,
                g = null,
                y = null;
                break;
            case "topMouseDown":
                m = !0;
                break;
            case "topContextMenu":
            case "topMouseUp":
                return m = !1,
                o(n, r);
            case "topSelectionChange":
                if (h)
                    break;
            case "topKeyDown":
            case "topKeyUp":
                return o(n, r)
            }
            return null
        },
        didPutListener: function(t, e, n) {
            "onSelect" === e && (b = !0)
        }
    };
    t.exports = x
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return "." + t._rootNodeID
    }
    function o(t) {
        return "button" === t || "input" === t || "select" === t || "textarea" === t
    }
    var i = n(2)
      , a = n(70)
      , u = n(26)
      , s = n(5)
      , c = n(287)
      , l = n(288)
      , f = n(12)
      , p = n(291)
      , h = n(293)
      , d = n(38)
      , v = n(290)
      , g = n(294)
      , y = n(295)
      , m = n(28)
      , b = n(296)
      , x = n(8)
      , _ = n(61)
      , w = (n(1),
    {})
      , C = {};
    ["abort", "animationEnd", "animationIteration", "animationStart", "blur", "canPlay", "canPlayThrough", "click", "contextMenu", "copy", "cut", "doubleClick", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "focus", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "progress", "rateChange", "reset", "scroll", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchMove", "touchStart", "transitionEnd", "volumeChange", "waiting", "wheel"].forEach(function(t) {
        var e = t[0].toUpperCase() + t.slice(1)
          , n = "on" + e
          , r = "top" + e
          , o = {
            phasedRegistrationNames: {
                bubbled: n,
                captured: n + "Capture"
            },
            dependencies: [r]
        };
        w[t] = o,
        C[r] = o
    });
    var E = {}
      , M = {
        eventTypes: w,
        extractEvents: function(t, e, n, r) {
            var o = C[t];
            if (!o)
                return null;
            var a;
            switch (t) {
            case "topAbort":
            case "topCanPlay":
            case "topCanPlayThrough":
            case "topDurationChange":
            case "topEmptied":
            case "topEncrypted":
            case "topEnded":
            case "topError":
            case "topInput":
            case "topInvalid":
            case "topLoad":
            case "topLoadedData":
            case "topLoadedMetadata":
            case "topLoadStart":
            case "topPause":
            case "topPlay":
            case "topPlaying":
            case "topProgress":
            case "topRateChange":
            case "topReset":
            case "topSeeked":
            case "topSeeking":
            case "topStalled":
            case "topSubmit":
            case "topSuspend":
            case "topTimeUpdate":
            case "topVolumeChange":
            case "topWaiting":
                a = f;
                break;
            case "topKeyPress":
                if (0 === _(n))
                    return null;
            case "topKeyDown":
            case "topKeyUp":
                a = h;
                break;
            case "topBlur":
            case "topFocus":
                a = p;
                break;
            case "topClick":
                if (2 === n.button)
                    return null;
            case "topDoubleClick":
            case "topMouseDown":
            case "topMouseMove":
            case "topMouseUp":
            case "topMouseOut":
            case "topMouseOver":
            case "topContextMenu":
                a = d;
                break;
            case "topDrag":
            case "topDragEnd":
            case "topDragEnter":
            case "topDragExit":
            case "topDragLeave":
            case "topDragOver":
            case "topDragStart":
            case "topDrop":
                a = v;
                break;
            case "topTouchCancel":
            case "topTouchEnd":
            case "topTouchMove":
            case "topTouchStart":
                a = g;
                break;
            case "topAnimationEnd":
            case "topAnimationIteration":
            case "topAnimationStart":
                a = c;
                break;
            case "topTransitionEnd":
                a = y;
                break;
            case "topScroll":
                a = m;
                break;
            case "topWheel":
                a = b;
                break;
            case "topCopy":
            case "topCut":
            case "topPaste":
                a = l
            }
            a ? void 0 : i("86", t);
            var s = a.getPooled(o, e, n, r);
            return u.accumulateTwoPhaseDispatches(s),
            s
        },
        didPutListener: function(t, e, n) {
            if ("onClick" === e && !o(t._tag)) {
                var i = r(t)
                  , u = s.getNodeFromInstance(t);
                E[i] || (E[i] = a.listen(u, "click", x))
            }
        },
        willDeleteListener: function(t, e) {
            if ("onClick" === e && !o(t._tag)) {
                var n = r(t);
                E[n].remove(),
                delete E[n]
            }
        }
    };
    t.exports = M
}
, function(t, e, n) {
    "use strict";
    function r(t, e, n, r) {
        return o.call(this, t, e, n, r)
    }
    var o = n(12)
      , i = {
        animationName: null,
        elapsedTime: null,
        pseudoElement: null
    };
    o.augmentClass(r, i),
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    function r(t, e, n, r) {
        return o.call(this, t, e, n, r)
    }
    var o = n(12)
      , i = {
        clipboardData: function(t) {
            return "clipboardData"in t ? t.clipboardData : window.clipboardData
        }
    };
    o.augmentClass(r, i),
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    function r(t, e, n, r) {
        return o.call(this, t, e, n, r)
    }
    var o = n(12)
      , i = {
        data: null
    };
    o.augmentClass(r, i),
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    function r(t, e, n, r) {
        return o.call(this, t, e, n, r)
    }
    var o = n(38)
      , i = {
        dataTransfer: null
    };
    o.augmentClass(r, i),
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    function r(t, e, n, r) {
        return o.call(this, t, e, n, r)
    }
    var o = n(28)
      , i = {
        relatedTarget: null
    };
    o.augmentClass(r, i),
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    function r(t, e, n, r) {
        return o.call(this, t, e, n, r)
    }
    var o = n(12)
      , i = {
        data: null
    };
    o.augmentClass(r, i),
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    function r(t, e, n, r) {
        return o.call(this, t, e, n, r)
    }
    var o = n(28)
      , i = n(61)
      , a = n(301)
      , u = n(62)
      , s = {
        key: a,
        location: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        repeat: null,
        locale: null,
        getModifierState: u,
        charCode: function(t) {
            return "keypress" === t.type ? i(t) : 0
        },
        keyCode: function(t) {
            return "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0
        },
        which: function(t) {
            return "keypress" === t.type ? i(t) : "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0
        }
    };
    o.augmentClass(r, s),
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    function r(t, e, n, r) {
        return o.call(this, t, e, n, r)
    }
    var o = n(28)
      , i = n(62)
      , a = {
        touches: null,
        targetTouches: null,
        changedTouches: null,
        altKey: null,
        metaKey: null,
        ctrlKey: null,
        shiftKey: null,
        getModifierState: i
    };
    o.augmentClass(r, a),
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    function r(t, e, n, r) {
        return o.call(this, t, e, n, r)
    }
    var o = n(12)
      , i = {
        propertyName: null,
        elapsedTime: null,
        pseudoElement: null
    };
    o.augmentClass(r, i),
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    function r(t, e, n, r) {
        return o.call(this, t, e, n, r)
    }
    var o = n(38)
      , i = {
        deltaX: function(t) {
            return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
        },
        deltaY: function(t) {
            return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
        },
        deltaZ: null,
        deltaMode: null
    };
    o.augmentClass(r, i),
    t.exports = r
}
, function(t, e) {
    "use strict";
    function n(t) {
        for (var e = 1, n = 0, o = 0, i = t.length, a = i & -4; o < a; ) {
            for (var u = Math.min(o + 4096, a); o < u; o += 4)
                n += (e += t.charCodeAt(o)) + (e += t.charCodeAt(o + 1)) + (e += t.charCodeAt(o + 2)) + (e += t.charCodeAt(o + 3));
            e %= r,
            n %= r
        }
        for (; o < i; o++)
            n += e += t.charCodeAt(o);
        return e %= r,
        n %= r,
        e | n << 16
    }
    var r = 65521;
    t.exports = n
}
, function(t, e, n) {
    "use strict";
    function r(t, e, n, r) {
        var o = null == e || "boolean" == typeof e || "" === e;
        if (o)
            return "";
        var a = isNaN(e);
        if (r || a || 0 === e || i.hasOwnProperty(t) && i[t])
            return "" + e;
        if ("string" == typeof e) {
            e = e.trim()
        }
        return e + "px"
    }
    var o = n(91)
      , i = (n(3),
    o.isUnitlessNumber);
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        if (null == t)
            return null;
        if (1 === t.nodeType)
            return t;
        var e = a.get(t);
        return e ? (e = u(e),
        e ? i.getNodeFromInstance(e) : null) : void ("function" == typeof t.render ? o("44") : o("45", Object.keys(t)))
    }
    var o = n(2)
      , i = (n(13),
    n(5))
      , a = n(27)
      , u = n(105);
    n(1),
    n(3);
    t.exports = r
}
, function(t, e, n) {
    (function(e) {
        "use strict";
        function r(t, e, n, r) {
            if (t && "object" == typeof t) {
                var o = t
                  , i = void 0 === o[n];
                i && null != e && (o[n] = e)
            }
        }
        function o(t, e) {
            if (null == t)
                return t;
            var n = {};
            return i(t, r, n),
            n
        }
        var i = (n(55),
        n(111));
        n(3);
        t.exports = o
    }
    ).call(e, n(89))
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        if (t.key) {
            var e = i[t.key] || t.key;
            if ("Unidentified" !== e)
                return e
        }
        if ("keypress" === t.type) {
            var n = o(t);
            return 13 === n ? "Enter" : String.fromCharCode(n)
        }
        return "keydown" === t.type || "keyup" === t.type ? a[t.keyCode] || "Unidentified" : ""
    }
    var o = n(61)
      , i = {
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
    }
      , a = {
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
    };
    t.exports = r
}
, function(t, e) {
    "use strict";
    function n(t) {
        var e = t && (r && t[r] || t[o]);
        if ("function" == typeof e)
            return e
    }
    var r = "function" == typeof Symbol && Symbol.iterator
      , o = "@@iterator";
    t.exports = n
}
, function(t, e) {
    "use strict";
    function n(t) {
        for (; t && t.firstChild; )
            t = t.firstChild;
        return t
    }
    function r(t) {
        for (; t; ) {
            if (t.nextSibling)
                return t.nextSibling;
            t = t.parentNode
        }
    }
    function o(t, e) {
        for (var o = n(t), i = 0, a = 0; o; ) {
            if (3 === o.nodeType) {
                if (a = i + o.textContent.length,
                i <= e && a >= e)
                    return {
                        node: o,
                        offset: e - i
                    };
                i = a
            }
            o = n(r(o))
        }
    }
    t.exports = o
}
, function(t, e, n) {
    "use strict";
    function r(t, e) {
        var n = {};
        return n[t.toLowerCase()] = e.toLowerCase(),
        n["Webkit" + t] = "webkit" + e,
        n["Moz" + t] = "moz" + e,
        n["ms" + t] = "MS" + e,
        n["O" + t] = "o" + e.toLowerCase(),
        n
    }
    function o(t) {
        if (u[t])
            return u[t];
        if (!a[t])
            return t;
        var e = a[t];
        for (var n in e)
            if (e.hasOwnProperty(n) && n in s)
                return u[t] = e[n];
        return ""
    }
    var i = n(6)
      , a = {
        animationend: r("Animation", "AnimationEnd"),
        animationiteration: r("Animation", "AnimationIteration"),
        animationstart: r("Animation", "AnimationStart"),
        transitionend: r("Transition", "TransitionEnd")
    }
      , u = {}
      , s = {};
    i.canUseDOM && (s = document.createElement("div").style,
    "AnimationEvent"in window || (delete a.animationend.animation,
    delete a.animationiteration.animation,
    delete a.animationstart.animation),
    "TransitionEvent"in window || delete a.transitionend.transition),
    t.exports = o
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return '"' + o(t) + '"'
    }
    var o = n(40);
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    var r = n(100);
    t.exports = r.renderSubtreeIntoContainer
}
, function(t, e) {
    "use strict";
    function n(t) {
        if ("object" == typeof t && null !== t) {
            var e = t.$$typeof;
            switch (e) {
            case i:
                switch (t = t.type) {
                case p:
                case h:
                case u:
                case c:
                case s:
                case v:
                    return t;
                default:
                    switch (t = t && t.$$typeof) {
                    case f:
                    case d:
                    case m:
                    case y:
                    case l:
                        return t;
                    default:
                        return e
                    }
                }
            case a:
                return e
            }
        }
    }
    function r(t) {
        return n(t) === h
    }
    var o = "function" == typeof Symbol && Symbol.for
      , i = o ? Symbol.for("react.element") : 60103
      , a = o ? Symbol.for("react.portal") : 60106
      , u = o ? Symbol.for("react.fragment") : 60107
      , s = o ? Symbol.for("react.strict_mode") : 60108
      , c = o ? Symbol.for("react.profiler") : 60114
      , l = o ? Symbol.for("react.provider") : 60109
      , f = o ? Symbol.for("react.context") : 60110
      , p = o ? Symbol.for("react.async_mode") : 60111
      , h = o ? Symbol.for("react.concurrent_mode") : 60111
      , d = o ? Symbol.for("react.forward_ref") : 60112
      , v = o ? Symbol.for("react.suspense") : 60113
      , g = o ? Symbol.for("react.suspense_list") : 60120
      , y = o ? Symbol.for("react.memo") : 60115
      , m = o ? Symbol.for("react.lazy") : 60116
      , b = o ? Symbol.for("react.block") : 60121
      , x = o ? Symbol.for("react.fundamental") : 60117
      , _ = o ? Symbol.for("react.responder") : 60118
      , w = o ? Symbol.for("react.scope") : 60119;
    e.AsyncMode = p,
    e.ConcurrentMode = h,
    e.ContextConsumer = f,
    e.ContextProvider = l,
    e.Element = i,
    e.ForwardRef = d,
    e.Fragment = u,
    e.Lazy = m,
    e.Memo = y,
    e.Portal = a,
    e.Profiler = c,
    e.StrictMode = s,
    e.Suspense = v,
    e.isAsyncMode = function(t) {
        return r(t) || n(t) === p
    }
    ,
    e.isConcurrentMode = r,
    e.isContextConsumer = function(t) {
        return n(t) === f
    }
    ,
    e.isContextProvider = function(t) {
        return n(t) === l
    }
    ,
    e.isElement = function(t) {
        return "object" == typeof t && null !== t && t.$$typeof === i
    }
    ,
    e.isForwardRef = function(t) {
        return n(t) === d
    }
    ,
    e.isFragment = function(t) {
        return n(t) === u
    }
    ,
    e.isLazy = function(t) {
        return n(t) === m
    }
    ,
    e.isMemo = function(t) {
        return n(t) === y
    }
    ,
    e.isPortal = function(t) {
        return n(t) === a
    }
    ,
    e.isProfiler = function(t) {
        return n(t) === c
    }
    ,
    e.isStrictMode = function(t) {
        return n(t) === s
    }
    ,
    e.isSuspense = function(t) {
        return n(t) === v
    }
    ,
    e.isValidElementType = function(t) {
        return "string" == typeof t || "function" == typeof t || t === u || t === h || t === c || t === s || t === v || t === g || "object" == typeof t && null !== t && (t.$$typeof === m || t.$$typeof === y || t.$$typeof === l || t.$$typeof === f || t.$$typeof === d || t.$$typeof === x || t.$$typeof === _ || t.$$typeof === w || t.$$typeof === b)
    }
    ,
    e.typeOf = n
}
, function(t, e, n) {
    "use strict";
    t.exports = n(307)
}
, function(t, e, n) {
    "undefined" == typeof Promise && (n(312).enable(),
    window.Promise = n(311)),
    n(313),
    Object.assign = n(310)
}
, function(t, e) {
    "use strict";
    function n(t) {
        if (null === t || void 0 === t)
            throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(t)
    }
    function r() {
        try {
            if (!Object.assign)
                return !1;
            var t = new String("abc");
            if (t[5] = "de",
            "5" === Object.getOwnPropertyNames(t)[0])
                return !1;
            for (var e = {}, n = 0; n < 10; n++)
                e["_" + String.fromCharCode(n)] = n;
            var r = Object.getOwnPropertyNames(e).map(function(t) {
                return e[t]
            });
            if ("0123456789" !== r.join(""))
                return !1;
            var o = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                o[t] = t
            }),
            "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("")
        } catch (t) {
            return !1
        }
    }
    var o = Object.prototype.hasOwnProperty
      , i = Object.prototype.propertyIsEnumerable;
    t.exports = r() ? Object.assign : function(t, e) {
        for (var r, a, u = n(t), s = 1; s < arguments.length; s++) {
            r = Object(arguments[s]);
            for (var c in r)
                o.call(r, c) && (u[c] = r[c]);
            if (Object.getOwnPropertySymbols) {
                a = Object.getOwnPropertySymbols(r);
                for (var l = 0; l < a.length; l++)
                    i.call(r, a[l]) && (u[a[l]] = r[a[l]])
            }
        }
        return u
    }
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        var e = new o(o._61);
        return e._81 = 1,
        e._65 = t,
        e
    }
    var o = n(112);
    t.exports = o;
    var i = r(!0)
      , a = r(!1)
      , u = r(null)
      , s = r(void 0)
      , c = r(0)
      , l = r("");
    o.resolve = function(t) {
        if (t instanceof o)
            return t;
        if (null === t)
            return u;
        if (void 0 === t)
            return s;
        if (t === !0)
            return i;
        if (t === !1)
            return a;
        if (0 === t)
            return c;
        if ("" === t)
            return l;
        if ("object" == typeof t || "function" == typeof t)
            try {
                var e = t.then;
                if ("function" == typeof e)
                    return new o(e.bind(t))
            } catch (t) {
                return new o(function(e, n) {
                    n(t)
                }
                )
            }
        return r(t)
    }
    ,
    o.all = function(t) {
        var e = Array.prototype.slice.call(t);
        return new o(function(t, n) {
            function r(a, u) {
                if (u && ("object" == typeof u || "function" == typeof u)) {
                    if (u instanceof o && u.then === o.prototype.then) {
                        for (; 3 === u._81; )
                            u = u._65;
                        return 1 === u._81 ? r(a, u._65) : (2 === u._81 && n(u._65),
                        void u.then(function(t) {
                            r(a, t)
                        }, n))
                    }
                    var s = u.then;
                    if ("function" == typeof s) {
                        var c = new o(s.bind(u));
                        return void c.then(function(t) {
                            r(a, t)
                        }, n)
                    }
                }
                e[a] = u,
                0 === --i && t(e)
            }
            if (0 === e.length)
                return t([]);
            for (var i = e.length, a = 0; a < e.length; a++)
                r(a, e[a])
        }
        )
    }
    ,
    o.reject = function(t) {
        return new o(function(e, n) {
            n(t)
        }
        )
    }
    ,
    o.race = function(t) {
        return new o(function(e, n) {
            t.forEach(function(t) {
                o.resolve(t).then(e, n)
            })
        }
        )
    }
    ,
    o.prototype.catch = function(t) {
        return this.then(null, t)
    }
}
, function(t, e, n) {
    "use strict";
    function r() {
        c = !1,
        u._10 = null,
        u._97 = null
    }
    function o(t) {
        function e(e) {
            (t.allRejections || a(f[e].error, t.whitelist || s)) && (f[e].displayId = l++,
            t.onUnhandled ? (f[e].logged = !0,
            t.onUnhandled(f[e].displayId, f[e].error)) : (f[e].logged = !0,
            i(f[e].displayId, f[e].error)))
        }
        function n(e) {
            f[e].logged && (t.onHandled ? t.onHandled(f[e].displayId, f[e].error) : f[e].onUnhandled || (console.warn("Promise Rejection Handled (id: " + f[e].displayId + "):"),
            console.warn('  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' + f[e].displayId + ".")))
        }
        t = t || {},
        c && r(),
        c = !0;
        var o = 0
          , l = 0
          , f = {};
        u._10 = function(t) {
            2 === t._81 && f[t._72] && (f[t._72].logged ? n(t._72) : clearTimeout(f[t._72].timeout),
            delete f[t._72])
        }
        ,
        u._97 = function(t, n) {
            0 === t._45 && (t._72 = o++,
            f[t._72] = {
                displayId: null,
                error: n,
                timeout: setTimeout(e.bind(null, t._72), a(n, s) ? 100 : 2e3),
                logged: !1
            })
        }
    }
    function i(t, e) {
        console.warn("Possible Unhandled Promise Rejection (id: " + t + "):");
        var n = (e && (e.stack || e)) + "";
        n.split("\n").forEach(function(t) {
            console.warn("  " + t)
        })
    }
    function a(t, e) {
        return e.some(function(e) {
            return t instanceof e
        })
    }
    var u = n(112)
      , s = [ReferenceError, TypeError, RangeError]
      , c = !1;
    e.disable = r,
    e.enable = o
}
, function(t, e) {
    !function(t) {
        "use strict";
        function e(t) {
            if ("string" != typeof t && (t = String(t)),
            /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))
                throw new TypeError("Invalid character in header field name");
            return t.toLowerCase()
        }
        function n(t) {
            return "string" != typeof t && (t = String(t)),
            t
        }
        function r(t) {
            var e = {
                next: function() {
                    var e = t.shift();
                    return {
                        done: void 0 === e,
                        value: e
                    }
                }
            };
            return v.iterable && (e[Symbol.iterator] = function() {
                return e
            }
            ),
            e
        }
        function o(t) {
            this.map = {},
            t instanceof o ? t.forEach(function(t, e) {
                this.append(e, t)
            }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                this.append(e, t[e])
            }, this)
        }
        function i(t) {
            return t.bodyUsed ? Promise.reject(new TypeError("Already read")) : void (t.bodyUsed = !0)
        }
        function a(t) {
            return new Promise(function(e, n) {
                t.onload = function() {
                    e(t.result)
                }
                ,
                t.onerror = function() {
                    n(t.error)
                }
            }
            )
        }
        function u(t) {
            var e = new FileReader;
            return e.readAsArrayBuffer(t),
            a(e)
        }
        function s(t) {
            var e = new FileReader;
            return e.readAsText(t),
            a(e)
        }
        function c() {
            return this.bodyUsed = !1,
            this._initBody = function(t) {
                if (this._bodyInit = t,
                "string" == typeof t)
                    this._bodyText = t;
                else if (v.blob && Blob.prototype.isPrototypeOf(t))
                    this._bodyBlob = t;
                else if (v.formData && FormData.prototype.isPrototypeOf(t))
                    this._bodyFormData = t;
                else if (v.searchParams && URLSearchParams.prototype.isPrototypeOf(t))
                    this._bodyText = t.toString();
                else if (t) {
                    if (!v.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t))
                        throw new Error("unsupported BodyInit type")
                } else
                    this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : v.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
            }
            ,
            v.blob ? (this.blob = function() {
                var t = i(this);
                if (t)
                    return t;
                if (this._bodyBlob)
                    return Promise.resolve(this._bodyBlob);
                if (this._bodyFormData)
                    throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }
            ,
            this.arrayBuffer = function() {
                return this.blob().then(u)
            }
            ,
            this.text = function() {
                var t = i(this);
                if (t)
                    return t;
                if (this._bodyBlob)
                    return s(this._bodyBlob);
                if (this._bodyFormData)
                    throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }
            ) : this.text = function() {
                var t = i(this);
                return t ? t : Promise.resolve(this._bodyText)
            }
            ,
            v.formData && (this.formData = function() {
                return this.text().then(p)
            }
            ),
            this.json = function() {
                return this.text().then(JSON.parse)
            }
            ,
            this
        }
        function l(t) {
            var e = t.toUpperCase();
            return g.indexOf(e) > -1 ? e : t
        }
        function f(t, e) {
            e = e || {};
            var n = e.body;
            if (f.prototype.isPrototypeOf(t)) {
                if (t.bodyUsed)
                    throw new TypeError("Already read");
                this.url = t.url,
                this.credentials = t.credentials,
                e.headers || (this.headers = new o(t.headers)),
                this.method = t.method,
                this.mode = t.mode,
                n || (n = t._bodyInit,
                t.bodyUsed = !0)
            } else
                this.url = t;
            if (this.credentials = e.credentials || this.credentials || "omit",
            !e.headers && this.headers || (this.headers = new o(e.headers)),
            this.method = l(e.method || this.method || "GET"),
            this.mode = e.mode || this.mode || null,
            this.referrer = null,
            ("GET" === this.method || "HEAD" === this.method) && n)
                throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(n)
        }
        function p(t) {
            var e = new FormData;
            return t.trim().split("&").forEach(function(t) {
                if (t) {
                    var n = t.split("=")
                      , r = n.shift().replace(/\+/g, " ")
                      , o = n.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(r), decodeURIComponent(o))
                }
            }),
            e
        }
        function h(t) {
            var e = new o
              , n = (t.getAllResponseHeaders() || "").trim().split("\n");
            return n.forEach(function(t) {
                var n = t.trim().split(":")
                  , r = n.shift().trim()
                  , o = n.join(":").trim();
                e.append(r, o)
            }),
            e
        }
        function d(t, e) {
            e || (e = {}),
            this.type = "default",
            this.status = e.status,
            this.ok = this.status >= 200 && this.status < 300,
            this.statusText = e.statusText,
            this.headers = e.headers instanceof o ? e.headers : new o(e.headers),
            this.url = e.url || "",
            this._initBody(t)
        }
        if (!t.fetch) {
            var v = {
                searchParams: "URLSearchParams"in t,
                iterable: "Symbol"in t && "iterator"in Symbol,
                blob: "FileReader"in t && "Blob"in t && function() {
                    try {
                        return new Blob,
                        !0
                    } catch (t) {
                        return !1
                    }
                }(),
                formData: "FormData"in t,
                arrayBuffer: "ArrayBuffer"in t
            };
            o.prototype.append = function(t, r) {
                t = e(t),
                r = n(r);
                var o = this.map[t];
                o || (o = [],
                this.map[t] = o),
                o.push(r)
            }
            ,
            o.prototype.delete = function(t) {
                delete this.map[e(t)]
            }
            ,
            o.prototype.get = function(t) {
                var n = this.map[e(t)];
                return n ? n[0] : null
            }
            ,
            o.prototype.getAll = function(t) {
                return this.map[e(t)] || []
            }
            ,
            o.prototype.has = function(t) {
                return this.map.hasOwnProperty(e(t))
            }
            ,
            o.prototype.set = function(t, r) {
                this.map[e(t)] = [n(r)]
            }
            ,
            o.prototype.forEach = function(t, e) {
                Object.getOwnPropertyNames(this.map).forEach(function(n) {
                    this.map[n].forEach(function(r) {
                        t.call(e, r, n, this)
                    }, this)
                }, this)
            }
            ,
            o.prototype.keys = function() {
                var t = [];
                return this.forEach(function(e, n) {
                    t.push(n)
                }),
                r(t)
            }
            ,
            o.prototype.values = function() {
                var t = [];
                return this.forEach(function(e) {
                    t.push(e)
                }),
                r(t)
            }
            ,
            o.prototype.entries = function() {
                var t = [];
                return this.forEach(function(e, n) {
                    t.push([n, e])
                }),
                r(t)
            }
            ,
            v.iterable && (o.prototype[Symbol.iterator] = o.prototype.entries);
            var g = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            f.prototype.clone = function() {
                return new f(this)
            }
            ,
            c.call(f.prototype),
            c.call(d.prototype),
            d.prototype.clone = function() {
                return new d(this._bodyInit,{
                    status: this.status,
                    statusText: this.statusText,
                    headers: new o(this.headers),
                    url: this.url
                })
            }
            ,
            d.error = function() {
                var t = new d(null,{
                    status: 0,
                    statusText: ""
                });
                return t.type = "error",
                t
            }
            ;
            var y = [301, 302, 303, 307, 308];
            d.redirect = function(t, e) {
                if (y.indexOf(e) === -1)
                    throw new RangeError("Invalid status code");
                return new d(null,{
                    status: e,
                    headers: {
                        location: t
                    }
                })
            }
            ,
            t.Headers = o,
            t.Request = f,
            t.Response = d,
            t.fetch = function(t, e) {
                return new Promise(function(n, r) {
                    function o() {
                        return "responseURL"in a ? a.responseURL : /^X-Request-URL:/m.test(a.getAllResponseHeaders()) ? a.getResponseHeader("X-Request-URL") : void 0
                    }
                    var i;
                    i = f.prototype.isPrototypeOf(t) && !e ? t : new f(t,e);
                    var a = new XMLHttpRequest;
                    a.onload = function() {
                        var t = {
                            status: a.status,
                            statusText: a.statusText,
                            headers: h(a),
                            url: o()
                        }
                          , e = "response"in a ? a.response : a.responseText;
                        n(new d(e,t))
                    }
                    ,
                    a.onerror = function() {
                        r(new TypeError("Network request failed"))
                    }
                    ,
                    a.ontimeout = function() {
                        r(new TypeError("Network request failed"))
                    }
                    ,
                    a.open(i.method, i.url, !0),
                    "include" === i.credentials && (a.withCredentials = !0),
                    "responseType"in a && v.blob && (a.responseType = "blob"),
                    i.headers.forEach(function(t, e) {
                        a.setRequestHeader(e, t)
                    }),
                    a.send("undefined" == typeof i._bodyInit ? null : i._bodyInit)
                }
                )
            }
            ,
            t.fetch.polyfill = !0
        }
    }("undefined" != typeof self ? self : this)
}
, 55, [326, 29], function(t, e, n) {
    "use strict";
    function r(t) {
        return ("" + t).replace(x, "$&/")
    }
    function o(t, e) {
        this.func = t,
        this.context = e,
        this.count = 0
    }
    function i(t, e, n) {
        var r = t.func
          , o = t.context;
        r.call(o, e, t.count++)
    }
    function a(t, e, n) {
        if (null == t)
            return t;
        var r = o.getPooled(e, n);
        y(t, i, r),
        o.release(r)
    }
    function u(t, e, n, r) {
        this.result = t,
        this.keyPrefix = e,
        this.func = n,
        this.context = r,
        this.count = 0
    }
    function s(t, e, n) {
        var o = t.result
          , i = t.keyPrefix
          , a = t.func
          , u = t.context
          , s = a.call(u, e, t.count++);
        Array.isArray(s) ? c(s, o, n, g.thatReturnsArgument) : null != s && (v.isValidElement(s) && (s = v.cloneAndReplaceKey(s, i + (!s.key || e && e.key === s.key ? "" : r(s.key) + "/") + n)),
        o.push(s))
    }
    function c(t, e, n, o, i) {
        var a = "";
        null != n && (a = r(n) + "/");
        var c = u.getPooled(e, a, o, i);
        y(t, s, c),
        u.release(c)
    }
    function l(t, e, n) {
        if (null == t)
            return t;
        var r = [];
        return c(t, r, null, e, n),
        r
    }
    function f(t, e, n) {
        return null
    }
    function p(t, e) {
        return y(t, f, null)
    }
    function h(t) {
        var e = [];
        return c(t, e, null, g.thatReturnsArgument),
        e
    }
    var d = n(315)
      , v = n(23)
      , g = n(8)
      , y = n(325)
      , m = d.twoArgumentPooler
      , b = d.fourArgumentPooler
      , x = /\/+/g;
    o.prototype.destructor = function() {
        this.func = null,
        this.context = null,
        this.count = 0
    }
    ,
    d.addPoolingTo(o, m),
    u.prototype.destructor = function() {
        this.result = null,
        this.keyPrefix = null,
        this.func = null,
        this.context = null,
        this.count = 0
    }
    ,
    d.addPoolingTo(u, b);
    var _ = {
        forEach: a,
        map: l,
        mapIntoWithKeyPrefixInternal: c,
        count: p,
        toArray: h
    };
    t.exports = _
}
, function(t, e, n) {
    "use strict";
    var r = n(23)
      , o = r.createFactory
      , i = {
        a: o("a"),
        abbr: o("abbr"),
        address: o("address"),
        area: o("area"),
        article: o("article"),
        aside: o("aside"),
        audio: o("audio"),
        b: o("b"),
        base: o("base"),
        bdi: o("bdi"),
        bdo: o("bdo"),
        big: o("big"),
        blockquote: o("blockquote"),
        body: o("body"),
        br: o("br"),
        button: o("button"),
        canvas: o("canvas"),
        caption: o("caption"),
        cite: o("cite"),
        code: o("code"),
        col: o("col"),
        colgroup: o("colgroup"),
        data: o("data"),
        datalist: o("datalist"),
        dd: o("dd"),
        del: o("del"),
        details: o("details"),
        dfn: o("dfn"),
        dialog: o("dialog"),
        div: o("div"),
        dl: o("dl"),
        dt: o("dt"),
        em: o("em"),
        embed: o("embed"),
        fieldset: o("fieldset"),
        figcaption: o("figcaption"),
        figure: o("figure"),
        footer: o("footer"),
        form: o("form"),
        h1: o("h1"),
        h2: o("h2"),
        h3: o("h3"),
        h4: o("h4"),
        h5: o("h5"),
        h6: o("h6"),
        head: o("head"),
        header: o("header"),
        hgroup: o("hgroup"),
        hr: o("hr"),
        html: o("html"),
        i: o("i"),
        iframe: o("iframe"),
        img: o("img"),
        input: o("input"),
        ins: o("ins"),
        kbd: o("kbd"),
        keygen: o("keygen"),
        label: o("label"),
        legend: o("legend"),
        li: o("li"),
        link: o("link"),
        main: o("main"),
        map: o("map"),
        mark: o("mark"),
        menu: o("menu"),
        menuitem: o("menuitem"),
        meta: o("meta"),
        meter: o("meter"),
        nav: o("nav"),
        noscript: o("noscript"),
        object: o("object"),
        ol: o("ol"),
        optgroup: o("optgroup"),
        option: o("option"),
        output: o("output"),
        p: o("p"),
        param: o("param"),
        picture: o("picture"),
        pre: o("pre"),
        progress: o("progress"),
        q: o("q"),
        rp: o("rp"),
        rt: o("rt"),
        ruby: o("ruby"),
        s: o("s"),
        samp: o("samp"),
        script: o("script"),
        section: o("section"),
        select: o("select"),
        small: o("small"),
        source: o("source"),
        span: o("span"),
        strong: o("strong"),
        style: o("style"),
        sub: o("sub"),
        summary: o("summary"),
        sup: o("sup"),
        table: o("table"),
        tbody: o("tbody"),
        td: o("td"),
        textarea: o("textarea"),
        tfoot: o("tfoot"),
        th: o("th"),
        thead: o("thead"),
        time: o("time"),
        title: o("title"),
        tr: o("tr"),
        track: o("track"),
        u: o("u"),
        ul: o("ul"),
        var: o("var"),
        video: o("video"),
        wbr: o("wbr"),
        circle: o("circle"),
        clipPath: o("clipPath"),
        defs: o("defs"),
        ellipse: o("ellipse"),
        g: o("g"),
        image: o("image"),
        line: o("line"),
        linearGradient: o("linearGradient"),
        mask: o("mask"),
        path: o("path"),
        pattern: o("pattern"),
        polygon: o("polygon"),
        polyline: o("polyline"),
        radialGradient: o("radialGradient"),
        rect: o("rect"),
        stop: o("stop"),
        svg: o("svg"),
        text: o("text"),
        tspan: o("tspan")
    };
    t.exports = i
}
, function(t, e, n) {
    "use strict";
    var r = n(23)
      , o = r.isValidElement
      , i = n(90);
    t.exports = i(o)
}
, 283, function(t, e, n) {
    "use strict";
    var r = n(113)
      , o = r.Component
      , i = n(23)
      , a = i.isValidElement
      , u = n(116)
      , s = n(126);
    t.exports = s(o, a, u)
}
, 302, function(t, e) {
    "use strict";
    function n() {
        return r++
    }
    var r = 1;
    t.exports = n
}
, function(t, e, n) {
    "use strict";
    var r = function() {};
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        return i.isValidElement(t) ? void 0 : o("143"),
        t
    }
    var o = n(29)
      , i = n(23);
    n(1);
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    function r(t, e) {
        return t && "object" == typeof t && null != t.key ? c.escape(t.key) : e.toString(36)
    }
    function o(t, e, n, i) {
        var p = typeof t;
        if ("undefined" !== p && "boolean" !== p || (t = null),
        null === t || "string" === p || "number" === p || "object" === p && t.$$typeof === u)
            return n(i, t, "" === e ? l + r(t, 0) : e),
            1;
        var h, d, v = 0, g = "" === e ? l : e + f;
        if (Array.isArray(t))
            for (var y = 0; y < t.length; y++)
                h = t[y],
                d = g + r(h, y),
                v += o(h, d, n, i);
        else {
            var m = s(t);
            if (m) {
                var b, x = m.call(t);
                if (m !== t.entries)
                    for (var _ = 0; !(b = x.next()).done; )
                        h = b.value,
                        d = g + r(h, _++),
                        v += o(h, d, n, i);
                else
                    for (; !(b = x.next()).done; ) {
                        var w = b.value;
                        w && (h = w[1],
                        d = g + c.escape(w[0]) + f + r(h, 0),
                        v += o(h, d, n, i))
                    }
            } else if ("object" === p) {
                var C = ""
                  , E = String(t);
                a("31", "[object Object]" === E ? "object with keys {" + Object.keys(t).join(", ") + "}" : E, C)
            }
        }
        return v
    }
    function i(t, e, n) {
        return null == t ? 0 : o(t, "", e, n)
    }
    var a = n(29)
      , u = (n(13),
    n(115))
      , s = n(321)
      , c = (n(1),
    n(314))
      , l = (n(3),
    ".")
      , f = ":";
    t.exports = i
}
, function(t, e, n, r) {
    "use strict";
    var o = n(r)
      , i = (n(1),
    function(t) {
        var e = this;
        if (e.instancePool.length) {
            var n = e.instancePool.pop();
            return e.call(n, t),
            n
        }
        return new e(t)
    }
    )
      , a = function(t, e) {
        var n = this;
        if (n.instancePool.length) {
            var r = n.instancePool.pop();
            return n.call(r, t, e),
            r
        }
        return new n(t,e)
    }
      , u = function(t, e, n) {
        var r = this;
        if (r.instancePool.length) {
            var o = r.instancePool.pop();
            return r.call(o, t, e, n),
            o
        }
        return new r(t,e,n)
    }
      , s = function(t, e, n, r) {
        var o = this;
        if (o.instancePool.length) {
            var i = o.instancePool.pop();
            return o.call(i, t, e, n, r),
            i
        }
        return new o(t,e,n,r)
    }
      , c = function(t) {
        var e = this;
        t instanceof e ? void 0 : o("25"),
        t.destructor(),
        e.instancePool.length < e.poolSize && e.instancePool.push(t)
    }
      , l = 10
      , f = i
      , p = function(t, e) {
        var n = t;
        return n.instancePool = [],
        n.getPooled = e || f,
        n.poolSize || (n.poolSize = l),
        n.release = c,
        n
    }
      , h = {
        addPoolingTo: p,
        oneArgumentPooler: i,
        twoArgumentPooler: a,
        threeArgumentPooler: u,
        fourArgumentPooler: s
    };
    t.exports = h
}
]));
//# sourceMappingURL=main.c753971a.js.map
