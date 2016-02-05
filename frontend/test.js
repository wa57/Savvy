! function(e, t, n) {
    "use strict";

    function r(e) {
        return function() {
            var t, n = arguments[0];
            for (t = "[" + (e ? e + ":" : "") + n + "] http://errors.angularjs.org/1.5.0-rc.2/" + (e ? e + "/" : "") + n, n = 1; n < arguments.length; n++) {
                t = t + (1 == n ? "?" : "&") + "p" + (n - 1) + "=";
                var r, a = encodeURIComponent;
                r = arguments[n], r = "function" == typeof r ? r.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof r ? "undefined" : "string" != typeof r ? JSON.stringify(r) : r, t += a(r)
            }
            return Error(t)
        }
    }

    function a(e) {
        if (null == e || C(e)) return !1;
        if (or(e) || Z(e) || zn && e instanceof zn) return !0;
        var t = "length" in Object(e) && e.length;
        return _(t) && (t >= 0 && (t - 1 in e || e instanceof Array) || "function" == typeof e.item)
    }

    function i(e, t, n) {
        var r, o;
        if (e)
            if (x(e))
                for (r in e) "prototype" == r || "length" == r || "name" == r || e.hasOwnProperty && !e.hasOwnProperty(r) || t.call(n, e[r], r, e);
            else if (or(e) || a(e)) {
            var u = "object" != typeof e;
            for (r = 0, o = e.length; o > r; r++)(u || r in e) && t.call(n, e[r], r, e)
        } else if (e.forEach && e.forEach !== i) e.forEach(t, n, e);
        else if (w(e))
            for (r in e) t.call(n, e[r], r, e);
        else if ("function" == typeof e.hasOwnProperty)
            for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r, e);
        else
            for (r in e) Wn.call(e, r) && t.call(n, e[r], r, e);
        return e
    }

    function o(e, t, n) {
        for (var r = Object.keys(e).sort(), a = 0; a < r.length; a++) t.call(n, e[r[a]], r[a]);
        return r
    }

    function u(e) {
        return function(t, n) {
            e(n, t)
        }
    }

    function s() {
        return ++ir
    }

    function c(e, t, n) {
        for (var r = e.$$hashKey, a = 0, i = t.length; i > a; ++a) {
            var o = t[a];
            if (y(o) || x(o))
                for (var u = Object.keys(o), s = 0, l = u.length; l > s; s++) {
                    var f = u[s],
                        h = o[f];
                    n && y(h) ? S(h) ? e[f] = new Date(h.valueOf()) : E(h) ? e[f] = new RegExp(h) : h.nodeName ? e[f] = h.cloneNode(!0) : N(h) ? e[f] = h.clone() : (y(e[f]) || (e[f] = or(h) ? [] : {}), c(e[f], [h], !0)) : e[f] = h
                }
        }
        return r ? e.$$hashKey = r : delete e.$$hashKey, e
    }

    function l(e) {
        return c(e, Xn.call(arguments, 1), !1)
    }

    function f(e) {
        return c(e, Xn.call(arguments, 1), !0)
    }

    function h(e) {
        return parseInt(e, 10)
    }

    function p(e, t) {
        return l(Object.create(e), t)
    }

    function d() {}

    function g(e) {
        return e
    }

    function $(e) {
        return function() {
            return e
        }
    }

    function m(e) {
        return x(e.toString) && e.toString !== tr
    }

    function v(e) {
        return "undefined" == typeof e
    }

    function b(e) {
        return "undefined" != typeof e
    }

    function y(e) {
        return null !== e && "object" == typeof e
    }

    function w(e) {
        return null !== e && "object" == typeof e && !nr(e)
    }

    function Z(e) {
        return "string" == typeof e
    }

    function _(e) {
        return "number" == typeof e
    }

    function S(e) {
        return "[object Date]" === tr.call(e)
    }

    function x(e) {
        return "function" == typeof e
    }

    function E(e) {
        return "[object RegExp]" === tr.call(e)
    }

    function C(e) {
        return e && e.window === e
    }

    function A(e) {
        return e && e.$evalAsync && e.$watch
    }

    function k(e) {
        return "boolean" == typeof e
    }

    function M(e) {
        return e && _(e.length) && ur.test(tr.call(e))
    }

    function N(e) {
        return !(!e || !(e.nodeName || e.prop && e.attr && e.find))
    }

    function O(e) {
        var t = {};
        e = e.split(",");
        var n;
        for (n = 0; n < e.length; n++) t[e[n]] = !0;
        return t
    }

    function T(e) {
        return Jn(e.nodeName || e[0] && e[0].nodeName)
    }

    function I(e, t) {
        var n = e.indexOf(t);
        return n >= 0 && e.splice(n, 1), n
    }

    function j(e, t) {
        function r(e, t) {
            var n, r = t.$$hashKey;
            if (or(e)) {
                n = 0;
                for (var i = e.length; i > n; n++) t.push(a(e[n]))
            } else if (w(e))
                for (n in e) t[n] = a(e[n]);
            else if (e && "function" == typeof e.hasOwnProperty)
                for (n in e) e.hasOwnProperty(n) && (t[n] = a(e[n]));
            else
                for (n in e) Wn.call(e, n) && (t[n] = a(e[n]));
            return r ? t.$$hashKey = r : delete t.$$hashKey, t
        }

        function a(e) {
            if (!y(e)) return e;
            var t = u.indexOf(e);
            if (-1 !== t) return s[t];
            if (C(e) || A(e)) throw rr("cpws");
            var t = !1,
                a = o(e);
            return a === n && (a = or(e) ? [] : Object.create(nr(e)), t = !0), u.push(e), s.push(a), t ? r(e, a) : a
        }

        function o(e) {
            switch (tr.call(e)) {
                case "[object Int8Array]":
                case "[object Int16Array]":
                case "[object Int32Array]":
                case "[object Float32Array]":
                case "[object Float64Array]":
                case "[object Uint8Array]":
                case "[object Uint8ClampedArray]":
                case "[object Uint16Array]":
                case "[object Uint32Array]":
                    return new e.constructor(a(e.buffer));
                case "[object ArrayBuffer]":
                    if (!e.slice) {
                        var t = new ArrayBuffer(e.byteLength);
                        return new Uint8Array(t).set(new Uint8Array(e)), t
                    }
                    return e.slice(0);
                case "[object Boolean]":
                case "[object Number]":
                case "[object String]":
                case "[object Date]":
                    return new e.constructor(e.valueOf());
                case "[object RegExp]":
                    return t = new RegExp(e.source, e.toString().match(/[^\/]*$/)[0]), t.lastIndex = e.lastIndex, t
            }
            return x(e.cloneNode) ? e.cloneNode(!0) : void 0
        }
        var u = [],
            s = [];
        if (t) {
            if (M(t) || "[object ArrayBuffer]" === tr.call(t)) throw rr("cpta");
            if (e === t) throw rr("cpi");
            return or(t) ? t.length = 0 : i(t, function(e, n) {
                "$$hashKey" !== n && delete t[n]
            }), u.push(e), s.push(t), r(e, t)
        }
        return a(e)
    }

    function P(e, t) {
        if (or(e)) {
            t = t || [];
            for (var n = 0, r = e.length; r > n; n++) t[n] = e[n]
        } else if (y(e))
            for (n in t = t || {}, e)("$" !== n.charAt(0) || "$" !== n.charAt(1)) && (t[n] = e[n]);
        return t || e
    }

    function L(e, t) {
        if (e === t) return !0;
        if (null === e || null === t) return !1;
        if (e !== e && t !== t) return !0;
        var n, r = typeof e;
        if (r == typeof t && "object" == r) {
            if (!or(e)) {
                if (S(e)) return S(t) ? L(e.getTime(), t.getTime()) : !1;
                if (E(e)) return E(t) ? e.toString() == t.toString() : !1;
                if (A(e) || A(t) || C(e) || C(t) || or(t) || S(t) || E(t)) return !1;
                r = ce();
                for (n in e)
                    if ("$" !== n.charAt(0) && !x(e[n])) {
                        if (!L(e[n], t[n])) return !1;
                        r[n] = !0
                    }
                for (n in t)
                    if (!(n in r) && "$" !== n.charAt(0) && b(t[n]) && !x(t[n])) return !1;
                return !0
            }
            if (!or(t)) return !1;
            if ((r = e.length) == t.length) {
                for (n = 0; r > n; n++)
                    if (!L(e[n], t[n])) return !1;
                return !0
            }
        }
        return !1
    }

    function U(e, t, n) {
        return e.concat(Xn.call(t, n))
    }

    function V(e, t) {
        var n = 2 < arguments.length ? Xn.call(arguments, 2) : [];
        return !x(t) || t instanceof RegExp ? t : n.length ? function() {
            return arguments.length ? t.apply(e, U(n, arguments, 0)) : t.apply(e, n)
        } : function() {
            return arguments.length ? t.apply(e, arguments) : t.call(e)
        }
    }

    function R(e, r) {
        var a = r;
        return "string" == typeof e && "$" === e.charAt(0) && "$" === e.charAt(1) ? a = n : C(r) ? a = "$WINDOW" : r && t === r ? a = "$DOCUMENT" : A(r) && (a = "$SCOPE"), a
    }

    function D(e, t) {
        return "undefined" == typeof e ? n : (_(t) || (t = t ? 2 : null), JSON.stringify(e, R, t))
    }

    function B(e) {
        return Z(e) ? JSON.parse(e) : e
    }

    function F(e, t) {
        var n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
        return isNaN(n) ? t : n
    }

    function G(e, t, n) {
        n = n ? -1 : 1;
        var r = F(t, e.getTimezoneOffset());
        return t = e, e = n * (r - e.getTimezoneOffset()), t = new Date(t.getTime()), t.setMinutes(t.getMinutes() + e), t
    }

    function z(e) {
        e = zn(e).clone();
        try {
            e.empty()
        } catch (t) {}
        var n = zn("<div>").append(e).html();
        try {
            return e[0].nodeType === gr ? Jn(n) : n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(e, t) {
                return "<" + Jn(t)
            })
        } catch (r) {
            return Jn(n)
        }
    }

    function H(e) {
        try {
            return decodeURIComponent(e)
        } catch (t) {}
    }

    function q(e) {
        var t = {};
        return i((e || "").split("&"), function(e) {
            var n, r, a;
            e && (r = e = e.replace(/\+/g, "%20"), n = e.indexOf("="), -1 !== n && (r = e.substring(0, n), a = e.substring(n + 1)), r = H(r), b(r) && (a = b(a) ? H(a) : !0, Wn.call(t, r) ? or(t[r]) ? t[r].push(a) : t[r] = [t[r], a] : t[r] = a))
        }), t
    }

    function K(e) {
        var t = [];
        return i(e, function(e, n) {
            or(e) ? i(e, function(e) {
                t.push(J(n, !0) + (!0 === e ? "" : "=" + J(e, !0)))
            }) : t.push(J(n, !0) + (!0 === e ? "" : "=" + J(e, !0)))
        }), t.length ? t.join("&") : ""
    }

    function W(e) {
        return J(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function J(e, t) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, t ? "%20" : "+")
    }

    function Y(e, t) {
        var n, r, a = hr.length;
        for (r = 0; a > r; ++r)
            if (n = hr[r] + t, Z(n = e.getAttribute(n))) return n;
        return null
    }

    function X(e, t) {
        var n, r, a = {};
        i(hr, function(t) {
            t += "app", !n && e.hasAttribute && e.hasAttribute(t) && (n = e, r = e.getAttribute(t))
        }), i(hr, function(t) {
            t += "app";
            var a;
            !n && (a = e.querySelector("[" + t.replace(":", "\\:") + "]")) && (n = a, r = a.getAttribute(t))
        }), n && (a.strictDi = null !== Y(n, "strict-di"), t(n, r ? [r] : [], a))
    }

    function Q(n, r, a) {
        y(a) || (a = {}), a = l({
            strictDi: !1
        }, a);
        var o = function() {
                if (n = zn(n), n.injector()) {
                    var e = n[0] === t ? "document" : z(n);
                    throw rr("btstrpd", e.replace(/</, "&lt;").replace(/>/, "&gt;"))
                }
                return r = r || [], r.unshift(["$provide", function(e) {
                    e.value("$rootElement", n)
                }]), a.debugInfoEnabled && r.push(["$compileProvider", function(e) {
                    e.debugInfoEnabled(!0)
                }]), r.unshift("ng"), e = De(r, a.strictDi), e.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(e, t, n, r) {
                    e.$apply(function() {
                        t.data("$injector", r), n(t)(e)
                    })
                }]), e
            },
            u = /^NG_ENABLE_DEBUG_INFO!/,
            s = /^NG_DEFER_BOOTSTRAP!/;
        return e && u.test(e.name) && (a.debugInfoEnabled = !0, e.name = e.name.replace(u, "")), e && !s.test(e.name) ? o() : (e.name = e.name.replace(s, ""), ar.resumeBootstrap = function(e) {
            return i(e, function(e) {
                r.push(e)
            }), o()
        }, void(x(ar.resumeDeferredBootstrap) && ar.resumeDeferredBootstrap()))
    }

    function ee() {
        e.name = "NG_ENABLE_DEBUG_INFO!" + e.name, e.location.reload()
    }

    function te(e) {
        if (e = ar.element(e).injector(), !e) throw rr("test");
        return e.get("$$testability")
    }

    function ne(e, t) {
        return t = t || "_", e.replace(pr, function(e, n) {
            return (n ? t : "") + e.toLowerCase()
        })
    }

    function re() {
        var t;
        if (!dr) {
            var r = fr();
            (Hn = v(r) ? e.jQuery : r ? e[r] : n) && Hn.fn.on ? (zn = Hn, l(Hn.fn, {
                scope: kr.scope,
                isolateScope: kr.isolateScope,
                controller: kr.controller,
                injector: kr.injector,
                inheritedData: kr.inheritedData
            }), t = Hn.cleanData, Hn.cleanData = function(e) {
                for (var n, r, a = 0; null != (r = e[a]); a++)(n = Hn._data(r, "events")) && n.$destroy && Hn(r).triggerHandler("$destroy");
                t(e)
            }) : zn = $e, ar.element = zn, dr = !0
        }
    }

    function ae(e, t, n) {
        if (!e) throw rr("areq", t || "?", n || "required");
        return e
    }

    function ie(e, t, n) {
        return n && or(e) && (e = e[e.length - 1]), ae(x(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)), e
    }

    function oe(e, t) {
        if ("hasOwnProperty" === e) throw rr("badname", t)
    }

    function ue(e, t, n) {
        if (!t) return e;
        t = t.split(".");
        for (var r, a = e, i = t.length, o = 0; i > o; o++) r = t[o], e && (e = (a = e)[r]);
        return !n && x(e) ? V(a, e) : e
    }

    function se(e) {
        for (var t, n = e[0], r = e[e.length - 1], a = 1; n !== r && (n = n.nextSibling); a++)(t || e[a] !== n) && (t || (t = zn(Xn.call(e, 0, a))), t.push(n));
        return t || e
    }

    function ce() {
        return Object.create(null)
    }

    function le(e) {
        function t(e, t, n) {
            return e[t] || (e[t] = n())
        }
        var n = r("$injector"),
            a = r("ng");
        return e = t(e, "angular", Object), e.$$minErr = e.$$minErr || r, t(e, "module", function() {
            var e = {};
            return function(r, i, o) {
                if ("hasOwnProperty" === r) throw a("badname", "module");
                return i && e.hasOwnProperty(r) && (e[r] = null), t(e, r, function() {
                    function e(e, t, n, r) {
                        return r || (r = a),
                            function() {
                                return r[n || "push"]([e, t, arguments]), l
                            }
                    }

                    function t(e, t) {
                        return function(n, i) {
                            return i && x(i) && (i.$$moduleName = r), a.push([e, t, arguments]), l
                        }
                    }
                    if (!i) throw n("nomod", r);
                    var a = [],
                        u = [],
                        s = [],
                        c = e("$injector", "invoke", "push", u),
                        l = {
                            _invokeQueue: a,
                            _configBlocks: u,
                            _runBlocks: s,
                            requires: i,
                            name: r,
                            provider: t("$provide", "provider"),
                            factory: t("$provide", "factory"),
                            service: t("$provide", "service"),
                            value: e("$provide", "value"),
                            constant: e("$provide", "constant", "unshift"),
                            decorator: t("$provide", "decorator"),
                            animation: t("$animateProvider", "register"),
                            filter: t("$filterProvider", "register"),
                            controller: t("$controllerProvider", "register"),
                            directive: t("$compileProvider", "directive"),
                            component: t("$compileProvider", "component"),
                            config: c,
                            run: function(e) {
                                return s.push(e), this
                            }
                        };
                    return o && c(o), l
                })
            }
        })
    }

    function fe(t) {
        l(t, {
            bootstrap: Q,
            copy: j,
            extend: l,
            merge: f,
            equals: L,
            element: zn,
            forEach: i,
            injector: De,
            noop: d,
            bind: V,
            toJson: D,
            fromJson: B,
            identity: g,
            isUndefined: v,
            isDefined: b,
            isString: Z,
            isFunction: x,
            isObject: y,
            isNumber: _,
            isElement: N,
            isArray: or,
            version: $r,
            isDate: S,
            lowercase: Jn,
            uppercase: Yn,
            callbacks: {
                counter: 0
            },
            getTestability: te,
            $$minErr: r,
            $$csp: lr,
            reloadWithDebugInfo: ee
        }), (qn = le(e))("ng", ["ngLocale"], ["$provide", function(e) {
            e.provider({
                $$sanitizeUri: Xt
            }), e.provider("$compile", Je).directive({
                a: Oa,
                input: Ka,
                textarea: Ka,
                form: Pa,
                script: Li,
                select: Ri,
                style: Bi,
                option: Di,
                ngBind: Ya,
                ngBindHtml: Qa,
                ngBindTemplate: Xa,
                ngClass: ti,
                ngClassEven: ri,
                ngClassOdd: ni,
                ngCloak: ai,
                ngController: ii,
                ngForm: La,
                ngHide: Mi,
                ngIf: si,
                ngInclude: ci,
                ngInit: fi,
                ngNonBindable: _i,
                ngPluralize: Ci,
                ngRepeat: Ai,
                ngShow: ki,
                ngStyle: Ni,
                ngSwitch: Oi,
                ngSwitchWhen: Ti,
                ngSwitchDefault: Ii,
                ngOptions: Ei,
                ngTransclude: Pi,
                ngModel: yi,
                ngList: hi,
                ngChange: ei,
                pattern: Gi,
                ngPattern: Gi,
                required: Fi,
                ngRequired: Fi,
                minlength: Hi,
                ngMinlength: Hi,
                maxlength: zi,
                ngMaxlength: zi,
                ngValue: Ja,
                ngModelOptions: Zi
            }).directive({
                ngInclude: li
            }).directive(Ta).directive(oi), e.provider({
                $anchorScroll: Be,
                $animate: Fr,
                $animateCss: Hr,
                $$animateJs: Dr,
                $$animateQueue: Br,
                $$AnimateRunner: zr,
                $$animateAsyncRun: Gr,
                $browser: qe,
                $cacheFactory: Ke,
                $controller: tt,
                $document: nt,
                $exceptionHandler: rt,
                $filter: pn,
                $$forceReflow: Yr,
                $interpolate: gt,
                $interval: $t,
                $http: ft,
                $httpParamSerializer: it,
                $httpParamSerializerJQLike: ot,
                $httpBackend: pt,
                $xhrFactory: ht,
                $location: At,
                $log: kt,
                $parse: Ht,
                $rootScope: Yt,
                $q: qt,
                $$q: Kt,
                $sce: nn,
                $sceDelegate: tn,
                $sniffer: rn,
                $templateCache: We,
                $templateRequest: an,
                $$testability: on,
                $timeout: un,
                $window: ln,
                $$rAF: Jt,
                $$jqLite: Pe,
                $$HashMap: Tr,
                $$cookieReader: hn
            })
        }])
    }

    function he(e) {
        return e.replace(br, function(e, t, n, r) {
            return r ? n.toUpperCase() : n
        }).replace(yr, "Moz$1")
    }

    function pe(e) {
        return e = e.nodeType, 1 === e || !e || 9 === e
    }

    function de(e, t) {
        var n, r, a = t.createDocumentFragment(),
            o = [];
        if (Sr.test(e)) {
            for (n = n || a.appendChild(t.createElement("div")), r = (xr.exec(e) || ["", ""])[1].toLowerCase(), r = Cr[r] || Cr._default, n.innerHTML = r[1] + e.replace(Er, "<$1></$2>") + r[2], r = r[0]; r--;) n = n.lastChild;
            o = U(o, n.childNodes), n = a.firstChild, n.textContent = ""
        } else o.push(t.createTextNode(e));
        return a.textContent = "", a.innerHTML = "", i(o, function(e) {
            a.appendChild(e)
        }), a
    }

    function ge(e, t) {
        var n = e.parentNode;
        n && n.replaceChild(t, e), t.appendChild(e)
    }

    function $e(e) {
        if (e instanceof $e) return e;
        var n;
        if (Z(e) && (e = sr(e), n = !0), !(this instanceof $e)) {
            if (n && "<" != e.charAt(0)) throw Zr("nosel");
            return new $e(e)
        }
        if (n) {
            n = t;
            var r;
            e = (r = _r.exec(e)) ? [n.createElement(r[1])] : (r = de(e, n)) ? r.childNodes : []
        }
        Ee(this, e)
    }

    function me(e) {
        return e.cloneNode(!0)
    }

    function ve(e, t) {
        if (t || ye(e), e.querySelectorAll)
            for (var n = e.querySelectorAll("*"), r = 0, a = n.length; a > r; r++) ye(n[r])
    }

    function be(e, t, n, r) {
        if (b(r)) throw Zr("offargs");
        var a = (r = we(e)) && r.events,
            o = r && r.handle;
        if (o)
            if (t) {
                var u = function(t) {
                    var r = a[t];
                    b(n) && I(r || [], n), b(n) && r && 0 < r.length || (e.removeEventListener(t, o, !1), delete a[t])
                };
                i(t.split(" "), function(e) {
                    u(e), wr[e] && u(wr[e])
                })
            } else
                for (t in a) "$destroy" !== t && e.removeEventListener(t, o, !1), delete a[t]
    }

    function ye(e, t) {
        var r = e.ng339,
            a = r && mr[r];
        a && (t ? delete a.data[t] : (a.handle && (a.events.$destroy && a.handle({}, "$destroy"), be(e)), delete mr[r], e.ng339 = n))
    }

    function we(e, t) {
        var r = e.ng339,
            r = r && mr[r];
        return t && !r && (e.ng339 = r = ++vr, r = mr[r] = {
            events: {},
            data: {},
            handle: n
        }), r
    }

    function Ze(e, t, n) {
        if (pe(e)) {
            var r = b(n),
                a = !r && t && !y(t),
                i = !t;
            if (e = (e = we(e, !a)) && e.data, r) e[t] = n;
            else {
                if (i) return e;
                if (a) return e && e[t];
                l(e, t)
            }
        }
    }

    function _e(e, t) {
        return e.getAttribute ? -1 < (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ") : !1
    }

    function Se(e, t) {
        t && e.setAttribute && i(t.split(" "), function(t) {
            e.setAttribute("class", sr((" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + sr(t) + " ", " ")))
        })
    }

    function xe(e, t) {
        if (t && e.setAttribute) {
            var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            i(t.split(" "), function(e) {
                e = sr(e), -1 === n.indexOf(" " + e + " ") && (n += e + " ")
            }), e.setAttribute("class", sr(n))
        }
    }

    function Ee(e, t) {
        if (t)
            if (t.nodeType) e[e.length++] = t;
            else {
                var n = t.length;
                if ("number" == typeof n && t.window !== t) {
                    if (n)
                        for (var r = 0; n > r; r++) e[e.length++] = t[r]
                } else e[e.length++] = t
            }
    }

    function Ce(e, t) {
        return Ae(e, "$" + (t || "ngController") + "Controller")
    }

    function Ae(e, t, n) {
        for (9 == e.nodeType && (e = e.documentElement), t = or(t) ? t : [t]; e;) {
            for (var r = 0, a = t.length; a > r; r++)
                if (b(n = zn.data(e, t[r]))) return n;
            e = e.parentNode || 11 === e.nodeType && e.host
        }
    }

    function ke(e) {
        for (ve(e, !0); e.firstChild;) e.removeChild(e.firstChild)
    }

    function Me(e, t) {
        t || ve(e);
        var n = e.parentNode;
        n && n.removeChild(e)
    }

    function Ne(t, n) {
        n = n || e, "complete" === n.document.readyState ? n.setTimeout(t) : zn(n).on("load", t)
    }

    function Oe(e, t) {
        var n = Mr[t.toLowerCase()];
        return n && Nr[T(e)] && n
    }

    function Te(e, t) {
        var n = function(n, r) {
            n.isDefaultPrevented = function() {
                return n.defaultPrevented
            };
            var a = t[r || n.type],
                i = a ? a.length : 0;
            if (i) {
                if (v(n.immediatePropagationStopped)) {
                    var o = n.stopImmediatePropagation;
                    n.stopImmediatePropagation = function() {
                        n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), o && o.call(n)
                    }
                }
                n.isImmediatePropagationStopped = function() {
                    return !0 === n.immediatePropagationStopped
                };
                var u = a.specialHandlerWrapper || Ie;
                i > 1 && (a = P(a));
                for (var s = 0; i > s; s++) n.isImmediatePropagationStopped() || u(e, n, a[s])
            }
        };
        return n.elem = e, n
    }

    function Ie(e, t, n) {
        n.call(e, t)
    }

    function je(e, t, n) {
        var r = t.relatedTarget;
        r && (r === e || Ar.call(e, r)) || n.call(e, t)
    }

    function Pe() {
        this.$get = function() {
            return l($e, {
                hasClass: function(e, t) {
                    return e.attr && (e = e[0]), _e(e, t)
                },
                addClass: function(e, t) {
                    return e.attr && (e = e[0]), xe(e, t)
                },
                removeClass: function(e, t) {
                    return e.attr && (e = e[0]), Se(e, t)
                }
            })
        }
    }

    function Le(e, t) {
        var n = e && e.$$hashKey;
        return n ? ("function" == typeof n && (n = e.$$hashKey()), n) : (n = typeof e, n = "function" == n || "object" == n && null !== e ? e.$$hashKey = n + ":" + (t || s)() : n + ":" + e)
    }

    function Ue(e, t) {
        if (t) {
            var n = 0;
            this.nextUid = function() {
                return ++n
            }
        }
        i(e, this.put, this)
    }

    function Ve(e) {
        return e = e.toString().replace(Ur, ""), e.match(Ir) || e.match(jr)
    }

    function Re(e) {
        return (e = Ve(e)) ? "function(" + (e[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function De(e, t) {
        function r(e) {
            return function(t, n) {
                return y(t) ? void i(t, u(e)) : e(t, n)
            }
        }

        function a(e, t) {
            if (oe(e, "service"), (x(t) || or(t)) && (t = g.instantiate(t)), !t.$get) throw Vr("pget", e);
            return d[e + "Provider"] = t
        }

        function o(e, t) {
            return function() {
                var n = w.invoke(t, this);
                if (v(n)) throw Vr("undef", e);
                return n
            }
        }

        function s(e, t, n) {
            return a(e, {
                $get: !1 !== n ? o(e, t) : t
            })
        }

        function c(e) {
            ae(v(e) || or(e), "modulesToLoad", "not an array");
            var t, n = [];
            return i(e, function(e) {
                function r(e) {
                    var t, n;
                    for (t = 0, n = e.length; n > t; t++) {
                        var r = e[t],
                            a = g.get(r[0]);
                        a[r[1]].apply(a, r[2])
                    }
                }
                if (!p.get(e)) {
                    p.put(e, !0);
                    try {
                        Z(e) ? (t = qn(e), n = n.concat(c(t.requires)).concat(t._runBlocks), r(t._invokeQueue), r(t._configBlocks)) : x(e) ? n.push(g.invoke(e)) : or(e) ? n.push(g.invoke(e)) : ie(e, "module")
                    } catch (a) {
                        throw or(e) && (e = e[e.length - 1]), a.message && a.stack && -1 == a.stack.indexOf(a.message) && (a = a.message + "\n" + a.stack), Vr("modulerr", e, a.stack || a.message || a)
                    }
                }
            }), n
        }

        function l(e, n) {
            function r(t, r) {
                if (e.hasOwnProperty(t)) {
                    if (e[t] === f) throw Vr("cdep", t + " <- " + h.join(" <- "));
                    return e[t]
                }
                try {
                    return h.unshift(t), e[t] = f, e[t] = n(t, r)
                } catch (a) {
                    throw e[t] === f && delete e[t], a
                } finally {
                    h.shift()
                }
            }

            function a(e, n, a) {
                var i = [];
                e = De.$$annotate(e, t, a);
                for (var o = 0, u = e.length; u > o; o++) {
                    var s = e[o];
                    if ("string" != typeof s) throw Vr("itkn", s);
                    i.push(n && n.hasOwnProperty(s) ? n[s] : r(s, a))
                }
                return i
            }
            return {
                invoke: function(e, t, n, r) {
                    return "string" == typeof n && (r = n, n = null), n = a(e, n, r), or(e) && (e = e[e.length - 1]), r = 11 >= Gn ? !1 : "function" == typeof e && /^(?:class\s|constructor\()/.test(Function.prototype.toString.call(e)), r ? (n.unshift(null), new(Function.prototype.bind.apply(e, n))) : e.apply(t, n)
                },
                instantiate: function(e, t, n) {
                    var r = or(e) ? e[e.length - 1] : e;
                    return e = a(e, t, n), e.unshift(null), new(Function.prototype.bind.apply(r, e))
                },
                get: r,
                annotate: De.$$annotate,
                has: function(t) {
                    return d.hasOwnProperty(t + "Provider") || e.hasOwnProperty(t)
                }
            }
        }
        t = !0 === t;
        var f = {},
            h = [],
            p = new Ue([], !0),
            d = {
                $provide: {
                    provider: r(a),
                    factory: r(s),
                    service: r(function(e, t) {
                        return s(e, ["$injector", function(e) {
                            return e.instantiate(t)
                        }])
                    }),
                    value: r(function(e, t) {
                        return s(e, $(t), !1)
                    }),
                    constant: r(function(e, t) {
                        oe(e, "constant"), d[e] = t, m[e] = t
                    }),
                    decorator: function(e, t) {
                        var n = g.get(e + "Provider"),
                            r = n.$get;
                        n.$get = function() {
                            var e = w.invoke(r, n);
                            return w.invoke(t, null, {
                                $delegate: e
                            })
                        }
                    }
                }
            },
            g = d.$injector = l(d, function(e, t) {
                throw ar.isString(t) && h.push(t), Vr("unpr", h.join(" <- "))
            }),
            m = {},
            b = l(m, function(e, t) {
                var r = g.get(e + "Provider", t);
                return w.invoke(r.$get, r, n, e)
            }),
            w = b;
        d.$injectorProvider = {
            $get: $(b)
        };
        var _ = c(e),
            w = b.get("$injector");
        return w.strictDi = t, i(_, function(e) {
            e && w.invoke(e)
        }), w
    }

    function Be() {
        var e = !0;
        this.disableAutoScrolling = function() {
            e = !1
        }, this.$get = ["$window", "$location", "$rootScope", function(t, n, r) {
            function a(e) {
                var t = null;
                return Array.prototype.some.call(e, function(e) {
                    return "a" === T(e) ? (t = e, !0) : void 0
                }), t
            }

            function i(e) {
                if (e) {
                    e.scrollIntoView();
                    var n;
                    n = o.yOffset, x(n) ? n = n() : N(n) ? (n = n[0], n = "fixed" !== t.getComputedStyle(n).position ? 0 : n.getBoundingClientRect().bottom) : _(n) || (n = 0), n && (e = e.getBoundingClientRect().top, t.scrollBy(0, e - n))
                } else t.scrollTo(0, 0)
            }

            function o(e) {
                e = Z(e) ? e : n.hash();
                var t;
                e ? (t = u.getElementById(e)) ? i(t) : (t = a(u.getElementsByName(e))) ? i(t) : "top" === e && i(null) : i(null)
            }
            var u = t.document;
            return e && r.$watch(function() {
                return n.hash()
            }, function(e, t) {
                e === t && "" === e || Ne(function() {
                    r.$evalAsync(o)
                })
            }), o
        }]
    }

    function Fe(e, t) {
        return e || t ? e ? t ? (or(e) && (e = e.join(" ")), or(t) && (t = t.join(" ")), e + " " + t) : e : t : ""
    }

    function Ge(e) {
        Z(e) && (e = e.split(" "));
        var t = ce();
        return i(e, function(e) {
            e.length && (t[e] = !0)
        }), t
    }

    function ze(e) {
        return y(e) ? e : {}
    }

    function He(e, t, n, r) {
        function a(e) {
            try {
                e.apply(null, Xn.call(arguments, 1))
            } finally {
                if ($--, 0 === $)
                    for (; m.length;) try {
                        m.pop()()
                    } catch (t) {
                        n.error(t)
                    }
            }
        }

        function o() {
            _ = null, u(), s()
        }

        function u() {
            e: {
                try {
                    b = f.state;
                    break e
                } catch (e) {}
                b = void 0
            }
            b = v(b) ? null : b,
            L(b, E) && (b = E),
            E = b
        }

        function s() {
            (w !== c.url() || y !== b) && (w = c.url(), y = b, i(S, function(e) {
                e(c.url(), b)
            }))
        }
        var c = this,
            l = e.location,
            f = e.history,
            h = e.setTimeout,
            p = e.clearTimeout,
            g = {};
        c.isMock = !1;
        var $ = 0,
            m = [];
        c.$$completeOutstandingRequest = a, c.$$incOutstandingRequestCount = function() {
            $++
        }, c.notifyWhenNoOutstandingRequests = function(e) {
            0 === $ ? e() : m.push(e)
        };
        var b, y, w = l.href,
            Z = t.find("base"),
            _ = null;
        u(), y = b, c.url = function(t, n, a) {
            if (v(a) && (a = null), l !== e.location && (l = e.location), f !== e.history && (f = e.history), t) {
                var i = y === a;
                if (w === t && (!r.history || i)) return c;
                var o = w && wt(w) === wt(t);
                return w = t, y = a, !r.history || o && i ? ((!o || _) && (_ = t), n ? l.replace(t) : o ? (n = l, a = t.indexOf("#"), a = -1 === a ? "" : t.substr(a), n.hash = a) : l.href = t, l.href !== t && (_ = t)) : (f[n ? "replaceState" : "pushState"](a, "", t), u(), y = b), c
            }
            return _ || l.href.replace(/%27/g, "'")
        }, c.state = function() {
            return b
        };
        var S = [],
            x = !1,
            E = null;
        c.onUrlChange = function(t) {
            return x || (r.history && zn(e).on("popstate", o), zn(e).on("hashchange", o), x = !0), S.push(t), t
        }, c.$$applicationDestroyed = function() {
            zn(e).off("hashchange popstate", o)
        }, c.$$checkUrlChange = s, c.baseHref = function() {
            var e = Z.attr("href");
            return e ? e.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        }, c.defer = function(e, t) {
            var n;
            return $++, n = h(function() {
                delete g[n], a(e)
            }, t || 0), g[n] = !0, n
        }, c.defer.cancel = function(e) {
            return g[e] ? (delete g[e], p(e), a(d), !0) : !1
        }
    }

    function qe() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function(e, t, n, r) {
            return new He(e, r, t, n)
        }]
    }

    function Ke() {
        this.$get = function() {
            function e(e, n) {
                function a(e) {
                    e != h && (p ? p == e && (p = e.n) : p = e, i(e.n, e.p), i(e, h), h = e, h.n = null)
                }

                function i(e, t) {
                    e != t && (e && (e.p = t), t && (t.n = e))
                }
                if (e in t) throw r("$cacheFactory")("iid", e);
                var o = 0,
                    u = l({}, n, {
                        id: e
                    }),
                    s = ce(),
                    c = n && n.capacity || Number.MAX_VALUE,
                    f = ce(),
                    h = null,
                    p = null;
                return t[e] = {
                    put: function(e, t) {
                        if (!v(t)) {
                            if (c < Number.MAX_VALUE) {
                                var n = f[e] || (f[e] = {
                                    key: e
                                });
                                a(n)
                            }
                            return e in s || o++, s[e] = t, o > c && this.remove(p.key), t
                        }
                    },
                    get: function(e) {
                        if (c < Number.MAX_VALUE) {
                            var t = f[e];
                            if (!t) return;
                            a(t)
                        }
                        return s[e]
                    },
                    remove: function(e) {
                        if (c < Number.MAX_VALUE) {
                            var t = f[e];
                            if (!t) return;
                            t == h && (h = t.p), t == p && (p = t.n), i(t.n, t.p), delete f[e]
                        }
                        e in s && (delete s[e], o--)
                    },
                    removeAll: function() {
                        s = ce(), o = 0, f = ce(), h = p = null
                    },
                    destroy: function() {
                        f = u = s = null, delete t[e]
                    },
                    info: function() {
                        return l({}, u, {
                            size: o
                        })
                    }
                }
            }
            var t = {};
            return e.info = function() {
                var e = {};
                return i(t, function(t, n) {
                    e[n] = t.info()
                }), e
            }, e.get = function(e) {
                return t[e]
            }, e
        }
    }

    function We() {
        this.$get = ["$cacheFactory", function(e) {
            return e("templates")
        }]
    }

    function Je(e, r) {
        function a(e, t, n) {
            var r = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
                a = {};
            return i(e, function(e, i) {
                var o = e.match(r);
                if (!o) throw qr("iscp", t, i, e, n ? "controller bindings definition" : "isolate scope definition");
                a[i] = {
                    mode: o[1][0],
                    collection: "*" === o[2],
                    optional: "?" === o[3],
                    attrName: o[4] || i
                }
            }), a
        }

        function o(e) {
            var t = e.charAt(0);
            if (!t || t !== Jn(t)) throw qr("baddir", e);
            if (e !== e.trim()) throw qr("baddir", e)
        }
        var s = {},
            c = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
            f = /(([\w\-]+)(?:\:([^;]+))?;?)/,
            h = O("ngSrc,ngSrcset,src,srcset"),
            m = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
            w = /^(on[a-z]+|formaction)$/;
        this.directive = function S(t, n) {
            return oe(t, "directive"), Z(t) ? (o(t), ae(n, "directiveFactory"), s.hasOwnProperty(t) || (s[t] = [], e.factory(t + "Directive", ["$injector", "$exceptionHandler", function(e, n) {
                var r = [];
                return i(s[t], function(i, o) {
                    try {
                        var u = e.invoke(i);
                        x(u) ? u = {
                            compile: $(u)
                        } : !u.compile && u.link && (u.compile = $(u.link)), u.priority = u.priority || 0, u.index = o, u.name = u.name || t, u.require = u.require || u.controller && u.name, u.restrict = u.restrict || "EA";
                        var s = u,
                            c = u,
                            l = u.name,
                            f = {
                                isolateScope: null,
                                bindToController: null
                            };
                        if (y(c.scope) && (!0 === c.bindToController ? (f.bindToController = a(c.scope, l, !0), f.isolateScope = {}) : f.isolateScope = a(c.scope, l, !1)), y(c.bindToController) && (f.bindToController = a(c.bindToController, l, !0)), y(f.bindToController)) {
                            var h = c.controller,
                                p = c.controllerAs;
                            if (!h) throw qr("noctrl", l);
                            if (!et(h, p)) throw qr("noident", l)
                        }
                        var d = s.$$bindings = f;
                        y(d.isolateScope) && (u.$$isolateBindings = d.isolateScope), u.$$moduleName = i.$$moduleName, r.push(u)
                    } catch (g) {
                        n(g)
                    }
                }), r
            }])), s[t].push(n)) : i(t, u(S)), this
        }, this.component = function(e, t) {
            function n(e) {
                function n(t) {
                    return x(t) || or(t) ? function(n, r) {
                        return e.invoke(t, this, {
                            $element: n,
                            $attrs: r
                        })
                    } : t
                }
                var a = t.template || t.templateUrl ? t.template : "";
                return {
                    controller: r,
                    controllerAs: et(t.controller) || t.controllerAs || "$ctrl",
                    template: n(a),
                    templateUrl: n(t.templateUrl),
                    transclude: t.transclude,
                    scope: {},
                    bindToController: t.bindings || {},
                    restrict: "E",
                    require: t.require
                }
            }
            var r = t.controller || function() {};
            return i(t, function(e, t) {
                "$" === t.charAt(0) && (n[t] = e)
            }), n.$inject = ["$injector"], this.directive(e, n)
        }, this.aHrefSanitizationWhitelist = function(e) {
            return b(e) ? (r.aHrefSanitizationWhitelist(e), this) : r.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function(e) {
            return b(e) ? (r.imgSrcSanitizationWhitelist(e), this) : r.imgSrcSanitizationWhitelist()
        };
        var _ = !0;
        this.debugInfoEnabled = function(e) {
            return b(e) ? (_ = e, this) : _
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function(e, r, a, o, u, $, b, S, E, C) {
            function M(e, t, n) {
                se.innerHTML = "<span " + t + ">", t = se.firstChild.attributes;
                var r = t[0];
                t.removeNamedItem(r.name), r.value = n, e.attributes.setNamedItem(r)
            }

            function N(e, t) {
                try {
                    e.addClass(t)
                } catch (n) {}
            }

            function O(e, n, r, a, i) {
                e instanceof zn || (e = zn(e));
                for (var o = /\S+/, u = 0, s = e.length; s > u; u++) {
                    var c = e[u];
                    c.nodeType === gr && c.nodeValue.match(o) && ge(c, e[u] = t.createElement("span"))
                }
                var l = j(e, n, e, r, a, i);
                O.$$addScopeClass(e);
                var f = null;
                return function(t, n, r) {
                    ae(t, "scope"), i && i.needsNewScope && (t = t.$parent.$new()), r = r || {};
                    var a = r.parentBoundTranscludeFn,
                        o = r.transcludeControllers;
                    if (r = r.futureParentElement, a && a.$$boundTransclude && (a = a.$$boundTransclude), f || (f = (r = r && r[0]) && "foreignobject" !== T(r) && tr.call(r).match(/SVG/) ? "svg" : "html"), r = "html" !== f ? zn(X(f, zn("<div>").append(e).html())) : n ? kr.clone.call(e) : e, o)
                        for (var u in o) r.data("$" + u + "Controller", o[u].instance);
                    return O.$$addScopeInfo(r, t), n && n(r, t), l && l(t, r, r, a), r
                }
            }

            function j(e, t, r, a, i, o) {
                function u(e, r, a, i) {
                    var o, u, s, c, l, f, d;
                    if (h)
                        for (d = Array(r.length), c = 0; c < p.length; c += 3) o = p[c], d[o] = r[o];
                    else d = r;
                    for (c = 0, l = p.length; l > c;) u = d[p[c++]], r = p[c++], o = p[c++], r ? (r.scope ? (s = e.$new(), O.$$addScopeInfo(zn(u), s)) : s = e, f = r.transcludeOnThisElement ? P(e, r.transclude, i) : !r.templateOnThisElement && i ? i : !i && t ? P(e, t) : null, r(o, s, u, a, f)) : o && o(e, u.childNodes, n, i)
                }
                for (var s, c, l, f, h, p = [], d = 0; d < e.length; d++) s = new le, c = U(e[d], [], s, 0 === d ? a : n, i), (o = c.length ? B(c, e[d], s, t, r, null, [], [], o) : null) && o.scope && O.$$addScopeClass(s.$$element), s = o && o.terminal || !(l = e[d].childNodes) || !l.length ? null : j(l, o ? (o.transcludeOnThisElement || !o.templateOnThisElement) && o.transclude : t), (o || s) && (p.push(d, o, s), f = !0, h = h || o), o = null;
                return f ? u : null
            }

            function P(e, t, n) {
                var r, a = function(r, a, i, o, u) {
                        return r || (r = e.$new(!1, u), r.$$transcluded = !0), t(r, a, {
                            parentBoundTranscludeFn: n,
                            transcludeControllers: i,
                            futureParentElement: o
                        })
                    },
                    i = a.$$slots = ce();
                for (r in t.$$slots) i[r] = t.$$slots[r] ? P(e, t.$$slots[r], n) : null;
                return a
            }

            function U(e, t, n, r, a) {
                var i, o = n.$attr;
                switch (e.nodeType) {
                    case 1:
                        G(t, Ye(T(e)), "E", r, a);
                        for (var u, s, l, h = e.attributes, p = 0, d = h && h.length; d > p; p++) {
                            var g = !1,
                                $ = !1;
                            u = h[p], i = u.name, s = sr(u.value), u = Ye(i), (l = de.test(u)) && (i = i.replace(Kr, "").substr(8).replace(/_(.)/g, function(e, t) {
                                return t.toUpperCase()
                            })), (u = u.match($e)) && H(u[1]) && (g = i, $ = i.substr(0, i.length - 5) + "end", i = i.substr(0, i.length - 6)), u = Ye(i.toLowerCase()), o[u] = i, (l || !n.hasOwnProperty(u)) && (n[u] = s, Oe(e, u) && (n[u] = !0)), ee(e, t, s, u, l), G(t, u, "A", r, a, g, $)
                        }
                        if (e = e.className, y(e) && (e = e.animVal), Z(e) && "" !== e)
                            for (; i = f.exec(e);) u = Ye(i[2]), G(t, u, "C", r, a) && (n[u] = sr(i[3])), e = e.substr(i.index + i[0].length);
                        break;
                    case gr:
                        if (11 === Gn)
                            for (; e.parentNode && e.nextSibling && e.nextSibling.nodeType === gr;) e.nodeValue += e.nextSibling.nodeValue, e.parentNode.removeChild(e.nextSibling);
                        Y(t, e.nodeValue);
                        break;
                    case 8:
                        try {
                            (i = c.exec(e.nodeValue)) && (u = Ye(i[1]), G(t, u, "M", r, a) && (n[u] = sr(i[2])))
                        } catch (m) {}
                }
                return t.sort(W), t
            }

            function V(e, t, n) {
                var r = [],
                    a = 0;
                if (t && e.hasAttribute && e.hasAttribute(t)) {
                    do {
                        if (!e) throw qr("uterdir", t, n);
                        1 == e.nodeType && (e.hasAttribute(t) && a++, e.hasAttribute(n) && a--), r.push(e), e = e.nextSibling
                    } while (a > 0)
                } else r.push(e);
                return zn(r)
            }

            function R(e, t, n) {
                return function(r, a, i, o, u) {
                    return a = V(a[0], t, n), e(r, a, i, o, u)
                }
            }

            function D(e, t, n, r, a, i) {
                if (e) return O(t, n, r, a, i);
                var o;
                return function() {
                    return o || (o = O(t, n, r, a, i), t = n = i = null), o.apply(this, arguments)
                }
            }

            function B(e, r, o, u, s, c, f, h, p) {
                function d(e, t, n, r) {
                    e && (n && (e = R(e, n, r)), e.require = _.require, e.directiveName = S, (j === _ || _.$$isolateScope) && (e = re(e, {
                        isolateScope: !0
                    })), f.push(e)), t && (n && (t = R(t, n, r)), t.require = _.require, t.directiveName = S, (j === _ || _.$$isolateScope) && (t = re(t, {
                        isolateScope: !0
                    })), h.push(t))
                }

                function g(e, t, n, r) {
                    var a;
                    if (Z(t)) {
                        var o = t.match(m);
                        t = t.substring(o[0].length);
                        var u = o[1] || o[3],
                            o = "?" === o[2];
                        if ("^^" === u ? n = n.parent() : a = (a = r && r[t]) && a.instance, !a) {
                            var s = "$" + t + "Controller";
                            a = u ? n.inheritedData(s) : n.data(s)
                        }
                        if (!a && !o) throw qr("ctreq", t, e)
                    } else if (or(t))
                        for (a = [], u = 0, o = t.length; o > u; u++) a[u] = g(e, t[u], n, r);
                    else y(t) && (a = {}, i(t, function(t, i) {
                        a[i] = g(e, t, n, r)
                    }));
                    return a || null
                }

                function b(e, t, n, r, a, i) {
                    var o, u = ce();
                    for (o in r) {
                        var s = r[o],
                            c = {
                                $scope: s === j || s.$$isolateScope ? a : i,
                                $element: e,
                                $attrs: t,
                                $transclude: n
                            },
                            l = s.controller;
                        "@" == l && (l = t[s.name]), c = $(l, c, !0, s.controllerAs), u[s.name] = c, H || e.data("$" + s.name + "Controller", c.instance)
                    }
                    return u
                }

                function w(e, t, a, u, s) {
                    function c(e, t, r, a) {
                        var i;
                        if (A(e) || (a = r, r = t, t = e, e = n), H && (i = w), r || (r = H ? _.parent() : _), !a) return s(e, t, i, r, M);
                        var o = s.$$slots[a];
                        if (o) return o(e, t, i, r, M);
                        if (v(o)) throw qr("noslot", a, z(_))
                    }
                    var p, d, $, m, w, Z, _, S;
                    r === a ? (u = o, _ = o.$$element) : (_ = zn(a), u = new le(_, o)), $ = t, j ? m = t.$new(!0) : N && ($ = t.$parent), s && (Z = c, Z.$$boundTransclude = s, Z.isSlotFilled = function(e) {
                        return !!s.$$slots[e]
                    }), I && (w = b(_, u, Z, I, m, t)), j && (O.$$addScopeInfo(_, m, !0, !(P && (P === j || P === j.$$originalDirective))), O.$$addScopeClass(_, !0), m.$$isolateBindings = j.$$isolateBindings, (S = oe(t, u, m, m.$$isolateBindings, j)) && m.$on("$destroy", S));
                    for (d in w) {
                        S = I[d];
                        var E = w[d],
                            C = S.$$bindings.bindToController;
                        E.identifier && C && (p = oe($, u, E.instance, C, S));
                        var k = E();
                        k !== E.instance && (E.instance = k, _.data("$" + S.name + "Controller", k), p && p(), p = oe($, u, E.instance, C, S))
                    }
                    for (i(I, function(e, t) {
                            var n = e.require;
                            e.bindToController && !or(n) && y(n) && l(w[t].instance, g(t, n, _, w))
                        }), i(w, function(e) {
                            x(e.instance.$onInit) && e.instance.$onInit()
                        }), p = 0, d = f.length; d > p; p++) $ = f[p], ie($, $.isolateScope ? m : t, _, u, $.require && g($.directiveName, $.require, _, w), Z);
                    var M = t;
                    for (j && (j.template || null === j.templateUrl) && (M = m), e && e(M, a.childNodes, n, s), p = h.length - 1; p >= 0; p--) $ = h[p], ie($, $.isolateScope ? m : t, _, u, $.require && g($.directiveName, $.require, _, w), Z)
                }
                p = p || {};
                for (var _, S, E, C, k, M = -Number.MAX_VALUE, N = p.newScopeDirective, I = p.controllerDirectives, j = p.newIsolateScopeDirective, P = p.templateDirective, L = p.nonTlbTranscludeDirective, B = !1, G = !1, H = p.hasElementTranscludeDirective, W = o.$$element = zn(r), Y = u, Q = !1, ee = !1, ne = 0, ae = e.length; ae > ne; ne++) {
                    _ = e[ne];
                    var ue = _.$$start,
                        se = _.$$end;
                    if (ue && (W = V(r, ue, se)), E = n, M > _.priority) break;
                    if ((k = _.scope) && (_.templateUrl || (y(k) ? (J("new/isolated scope", j || N, _, W), j = _) : J("new/isolated scope", j, _, W)), N = N || _), S = _.name, !Q && (_.replace && (_.templateUrl || _.template) || _.transclude && !_.$$tlb)) {
                        for (k = ne + 1; Q = e[k++];)
                            if (Q.transclude && !Q.$$tlb || Q.replace && (Q.templateUrl || Q.template)) {
                                ee = !0;
                                break
                            }
                        Q = !0
                    }
                    if (!_.templateUrl && _.controller && (k = _.controller, I = I || ce(), J("'" + S + "' controller", I[S], _, W), I[S] = _), k = _.transclude)
                        if (B = !0, _.$$tlb || (J("transclusion", L, _, W), L = _), "element" == k) H = !0, M = _.priority, E = W, W = o.$$element = zn(t.createComment(" " + S + ": " + o[S] + " ")), r = W[0], te(s, Xn.call(E, 0), r), Y = D(ee, E, u, M, c && c.name, {
                            nonTlbTranscludeDirective: L
                        });
                        else {
                            var fe = ce();
                            if (E = zn(me(r)).contents(), y(k)) {
                                E = [];
                                var he = ce(),
                                    de = ce();
                                i(k, function(e, t) {
                                    var n = "?" === e.charAt(0);
                                    e = n ? e.substring(1) : e, he[e] = t, fe[t] = null, de[t] = n
                                }), i(W.contents(), function(e) {
                                    var t = he[Ye(T(e))];
                                    t ? (de[t] = !0, fe[t] = fe[t] || [], fe[t].push(e)) : E.push(e)
                                }), i(de, function(e, t) {
                                    if (!e) throw qr("reqslot", t)
                                });
                                for (var ge in fe) fe[ge] && (fe[ge] = D(ee, fe[ge], u))
                            }
                            W.empty(), Y = D(ee, E, u, n, n, {
                                needsNewScope: _.$$isolateScope || _.$$newScope
                            }), Y.$$slots = fe
                        }
                    if (_.template)
                        if (G = !0, J("template", P, _, W), P = _, k = x(_.template) ? _.template(W, o) : _.template, k = pe(k), _.replace) {
                            if (c = _, E = Sr.test(k) ? Qe(X(_.templateNamespace, sr(k))) : [], r = E[0], 1 != E.length || 1 !== r.nodeType) throw qr("tplrt", S, "");
                            te(s, W, r), ae = {
                                $attr: {}
                            }, k = U(r, [], ae);
                            var $e = e.splice(ne + 1, e.length - (ne + 1));
                            (j || N) && F(k, j, N), e = e.concat(k).concat($e), q(o, ae), ae = e.length
                        } else W.html(k);
                    if (_.templateUrl) G = !0, J("template", P, _, W), P = _, _.replace && (c = _), w = K(e.splice(ne, e.length - ne), W, o, s, B && Y, f, h, {
                        controllerDirectives: I,
                        newScopeDirective: N !== _ && N,
                        newIsolateScopeDirective: j,
                        templateDirective: P,
                        nonTlbTranscludeDirective: L
                    }), ae = e.length;
                    else if (_.compile) try {
                        C = _.compile(W, o, Y), x(C) ? d(null, C, ue, se) : C && d(C.pre, C.post, ue, se)
                    } catch (ve) {
                        a(ve, z(W))
                    }
                    _.terminal && (w.terminal = !0, M = Math.max(M, _.priority))
                }
                return w.scope = N && !0 === N.scope, w.transcludeOnThisElement = B, w.templateOnThisElement = G, w.transclude = Y, p.hasElementTranscludeDirective = H, w
            }

            function F(e, t, n) {
                for (var r = 0, a = e.length; a > r; r++) e[r] = p(e[r], {
                    $$isolateScope: t,
                    $$newScope: n
                })
            }

            function G(t, n, r, i, o, u, c) {
                if (n === o) return null;
                if (o = null, s.hasOwnProperty(n)) {
                    var l;
                    n = e.get(n + "Directive");
                    for (var f = 0, h = n.length; h > f; f++) try {
                        l = n[f], (v(i) || i > l.priority) && -1 != l.restrict.indexOf(r) && (u && (l = p(l, {
                            $$start: u,
                            $$end: c
                        })), t.push(l), o = l)
                    } catch (d) {
                        a(d)
                    }
                }
                return o
            }

            function H(t) {
                if (s.hasOwnProperty(t))
                    for (var n = e.get(t + "Directive"), r = 0, a = n.length; a > r; r++)
                        if (t = n[r], t.multiElement) return !0;
                return !1
            }

            function q(e, t) {
                var n = t.$attr,
                    r = e.$attr,
                    a = e.$$element;
                i(e, function(r, a) {
                    "$" != a.charAt(0) && (t[a] && t[a] !== r && (r += ("style" === a ? ";" : " ") + t[a]), e.$set(a, r, !0, n[a]))
                }), i(t, function(t, i) {
                    "class" == i ? (N(a, t), e["class"] = (e["class"] ? e["class"] + " " : "") + t) : "style" == i ? (a.attr("style", a.attr("style") + ";" + t), e.style = (e.style ? e.style + ";" : "") + t) : "$" == i.charAt(0) || e.hasOwnProperty(i) || (e[i] = t, r[i] = n[i])
                })
            }

            function K(e, t, n, r, a, u, s, c) {
                var l, f, h = [],
                    d = t[0],
                    g = e.shift(),
                    $ = p(g, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: g
                    }),
                    m = x(g.templateUrl) ? g.templateUrl(t, n) : g.templateUrl,
                    v = g.templateNamespace;
                return t.empty(), o(m).then(function(o) {
                        var p, b;
                        if (o = pe(o), g.replace) {
                            if (o = Sr.test(o) ? Qe(X(v, sr(o))) : [], p = o[0], 1 != o.length || 1 !== p.nodeType) throw qr("tplrt", g.name, m);
                            o = {
                                $attr: {}
                            }, te(r, t, p);
                            var w = U(p, [], o);
                            y(g.scope) && F(w, !0), e = w.concat(e), q(n, o)
                        } else p = d, t.html(o);
                        for (e.unshift($), l = B(e, p, n, a, t, g, u, s, c), i(r, function(e, n) {
                                e == p && (r[n] = t[0])
                            }), f = j(t[0].childNodes, a); h.length;) {
                            o = h.shift(), b = h.shift();
                            var Z = h.shift(),
                                _ = h.shift(),
                                w = t[0];
                            if (!o.$$destroyed) {
                                if (b !== d) {
                                    var S = b.className;
                                    c.hasElementTranscludeDirective && g.replace || (w = me(p)), te(Z, zn(b), w), N(zn(w), S)
                                }
                                b = l.transcludeOnThisElement ? P(o, l.transclude, _) : _, l(f, o, w, r, b)
                            }
                        }
                        h = null
                    }),
                    function(e, t, n, r, a) {
                        e = a, t.$$destroyed || (h ? h.push(t, n, r, e) : (l.transcludeOnThisElement && (e = P(t, l.transclude, a)), l(f, t, n, r, e)))
                    }
            }

            function W(e, t) {
                var n = t.priority - e.priority;
                return 0 !== n ? n : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index
            }

            function J(e, t, n, r) {
                function a(e) {
                    return e ? " (module: " + e + ")" : ""
                }
                if (t) throw qr("multidir", t.name, a(t.$$moduleName), n.name, a(n.$$moduleName), e, z(r))
            }

            function Y(e, t) {
                var n = r(t, !0);
                n && e.push({
                    priority: 0,
                    compile: function(e) {
                        e = e.parent();
                        var t = !!e.length;
                        return t && O.$$addBindingClass(e),
                            function(e, r) {
                                var a = r.parent();
                                t || O.$$addBindingClass(a), O.$$addBindingInfo(a, n.expressions), e.$watch(n, function(e) {
                                    r[0].nodeValue = e
                                })
                            }
                    }
                })
            }

            function X(e, n) {
                switch (e = Jn(e || "html")) {
                    case "svg":
                    case "math":
                        var r = t.createElement("div");
                        return r.innerHTML = "<" + e + ">" + n + "</" + e + ">", r.childNodes[0].childNodes;
                    default:
                        return n
                }
            }

            function Q(e, t) {
                if ("srcdoc" == t) return S.HTML;
                var n = T(e);
                return "xlinkHref" == t || "form" == n && "action" == t || "img" != n && ("src" == t || "ngSrc" == t) ? S.RESOURCE_URL : void 0
            }

            function ee(e, t, n, a, i) {
                var o = Q(e, a);
                i = h[a] || i;
                var u = r(n, !0, o, i);
                if (u) {
                    if ("multiple" === a && "select" === T(e)) throw qr("selmulti", z(e));
                    t.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(e, t, s) {
                                    if (t = s.$$observers || (s.$$observers = ce()), w.test(a)) throw qr("nodomevents");
                                    var c = s[a];
                                    c !== n && (u = c && r(c, !0, o, i), n = c), u && (s[a] = u(e), (t[a] || (t[a] = [])).$$inter = !0, (s.$$observers && s.$$observers[a].$$scope || e).$watch(u, function(e, t) {
                                        "class" === a && e != t ? s.$updateClass(e, t) : s.$set(a, e)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function te(e, n, r) {
                var a, i, o = n[0],
                    u = n.length,
                    s = o.parentNode;
                if (e)
                    for (a = 0, i = e.length; i > a; a++)
                        if (e[a] == o) {
                            e[a++] = r, i = a + u - 1;
                            for (var c = e.length; c > a; a++, i++) c > i ? e[a] = e[i] : delete e[a];
                            e.length -= u - 1, e.context === o && (e.context = r);
                            break
                        }
                for (s && s.replaceChild(r, o), e = t.createDocumentFragment(), a = 0; u > a; a++) e.appendChild(n[a]);
                for (zn.hasData(o) && (zn.data(r, zn.data(o)), zn(o).off("$destroy")), zn.cleanData(e.querySelectorAll("*")), a = 1; u > a; a++) delete n[a];
                n[0] = r, n.length = 1
            }

            function re(e, t) {
                return l(function() {
                    return e.apply(null, arguments)
                }, e, t)
            }

            function ie(e, t, n, r, i, o) {
                try {
                    e(t, n, r, i, o)
                } catch (u) {
                    a(u, z(n))
                }
            }

            function oe(e, t, n, a, o) {
                var s = [];
                return i(a, function(a, i) {
                    var c, l, f, h, p = a.attrName,
                        g = a.optional;
                    switch (a.mode) {
                        case "@":
                            g || Wn.call(t, p) || (n[i] = t[p] = void 0), t.$observe(p, function(e) {
                                Z(e) && (n[i] = e)
                            }), t.$$observers[p].$$scope = e, c = t[p], Z(c) ? n[i] = r(c)(e) : k(c) && (n[i] = c);
                            break;
                        case "=":
                            if (!Wn.call(t, p)) {
                                if (g) break;
                                t[p] = void 0
                            }
                            if (g && !t[p]) break;
                            l = u(t[p]), h = l.literal ? L : function(e, t) {
                                return e === t || e !== e && t !== t
                            }, f = l.assign || function() {
                                throw c = n[i] = l(e), qr("nonassign", t[p], p, o.name)
                            }, c = n[i] = l(e), g = function(t) {
                                return h(t, n[i]) || (h(t, c) ? f(e, t = n[i]) : n[i] = t), c = t
                            }, g.$stateful = !0, g = a.collection ? e.$watchCollection(t[p], g) : e.$watch(u(t[p], g), null, l.literal), s.push(g);
                            break;
                        case "&":
                            if (l = t.hasOwnProperty(p) ? u(t[p]) : d, l === d && g) break;
                            n[i] = function(t) {
                                return l(e, t)
                            }
                    }
                }), s.length && function() {
                    for (var e = 0, t = s.length; t > e; ++e) s[e]()
                }
            }
            var ue = /^\w/,
                se = t.createElement("div"),
                le = function(e, t) {
                    if (t) {
                        var n, r, a, i = Object.keys(t);
                        for (n = 0, r = i.length; r > n; n++) a = i[n], this[a] = t[a]
                    } else this.$attr = {};
                    this.$$element = e
                };
            le.prototype = {
                $normalize: Ye,
                $addClass: function(e) {
                    e && 0 < e.length && E.addClass(this.$$element, e)
                },
                $removeClass: function(e) {
                    e && 0 < e.length && E.removeClass(this.$$element, e)
                },
                $updateClass: function(e, t) {
                    var n = Xe(e, t);
                    n && n.length && E.addClass(this.$$element, n), (n = Xe(t, e)) && n.length && E.removeClass(this.$$element, n)
                },
                $set: function(e, t, n, r) {
                    var o = Oe(this.$$element[0], e),
                        u = Or[e],
                        s = e;
                    if (o ? (this.$$element.prop(e, t), r = o) : u && (this[u] = t, s = u), this[e] = t, r ? this.$attr[e] = r : (r = this.$attr[e]) || (this.$attr[e] = r = ne(e, "-")), o = T(this.$$element), "a" === o && ("href" === e || "xlinkHref" === e) || "img" === o && "src" === e) this[e] = t = C(t, "src" === e);
                    else if ("img" === o && "srcset" === e) {
                        for (var o = "", u = sr(t), c = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, c = /\s/.test(u) ? c : /(,)/, u = u.split(c), c = Math.floor(u.length / 2), l = 0; c > l; l++) var f = 2 * l,
                            o = o + C(sr(u[f]), !0),
                            o = o + (" " + sr(u[f + 1]));
                        u = sr(u[2 * l]).split(/\s/), o += C(sr(u[0]), !0), 2 === u.length && (o += " " + sr(u[1])), this[e] = t = o
                    }!1 !== n && (null === t || v(t) ? this.$$element.removeAttr(r) : ue.test(r) ? this.$$element.attr(r, t) : M(this.$$element[0], r, t)), (e = this.$$observers) && i(e[s], function(e) {
                        try {
                            e(t)
                        } catch (n) {
                            a(n)
                        }
                    })
                },
                $observe: function(e, t) {
                    var n = this,
                        r = n.$$observers || (n.$$observers = ce()),
                        a = r[e] || (r[e] = []);
                    return a.push(t), b.$evalAsync(function() {
                            a.$$inter || !n.hasOwnProperty(e) || v(n[e]) || t(n[e])
                        }),
                        function() {
                            I(a, t)
                        }
                }
            };
            var fe = r.startSymbol(),
                he = r.endSymbol(),
                pe = "{{" == fe && "}}" == he ? g : function(e) {
                    return e.replace(/\{\{/g, fe).replace(/}}/g, he)
                },
                de = /^ngAttr[A-Z]/,
                $e = /^(.+)Start$/;
            return O.$$addBindingInfo = _ ? function(e, t) {
                var n = e.data("$binding") || [];
                or(t) ? n = n.concat(t) : n.push(t), e.data("$binding", n)
            } : d, O.$$addBindingClass = _ ? function(e) {
                N(e, "ng-binding")
            } : d, O.$$addScopeInfo = _ ? function(e, t, n, r) {
                e.data(n ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", t)
            } : d, O.$$addScopeClass = _ ? function(e, t) {
                N(e, t ? "ng-isolate-scope" : "ng-scope")
            } : d, O
        }]
    }

    function Ye(e) {
        return he(e.replace(Kr, ""))
    }

    function Xe(e, t) {
        var n = "",
            r = e.split(/\s+/),
            a = t.split(/\s+/),
            i = 0;
        e: for (; i < r.length; i++) {
            for (var o = r[i], u = 0; u < a.length; u++)
                if (o == a[u]) continue e;
            n += (0 < n.length ? " " : "") + o
        }
        return n
    }

    function Qe(e) {
        e = zn(e);
        var t = e.length;
        if (1 >= t) return e;
        for (; t--;) 8 === e[t].nodeType && Qn.call(e, t, 1);
        return e
    }

    function et(e, t) {
        if (t && Z(t)) return t;
        if (Z(e)) {
            var n = Jr.exec(e);
            if (n) return n[3]
        }
    }

    function tt() {
        var e = {},
            t = !1;
        this.register = function(t, n) {
            oe(t, "controller"), y(t) ? l(e, t) : e[t] = n
        }, this.allowGlobals = function() {
            t = !0
        }, this.$get = ["$injector", "$window", function(a, i) {
            function o(e, t, n, a) {
                if (!e || !y(e.$scope)) throw r("$controller")("noscp", a, t);
                e.$scope[t] = n
            }
            return function(r, u, s, c) {
                var f, h, p;
                if (s = !0 === s, c && Z(c) && (p = c), Z(r)) {
                    if (c = r.match(Jr), !c) throw Wr("ctrlfmt", r);
                    h = c[1], p = p || c[3], r = e.hasOwnProperty(h) ? e[h] : ue(u.$scope, h, !0) || (t ? ue(i, h, !0) : n), ie(r, h, !0)
                }
                return s ? (s = (or(r) ? r[r.length - 1] : r).prototype, f = Object.create(s || null), p && o(u, p, f, h || r.name), l(function() {
                    var e = a.invoke(r, f, u, h);
                    return e !== f && (y(e) || x(e)) && (f = e, p && o(u, p, f, h || r.name)), f
                }, {
                    instance: f,
                    identifier: p
                })) : (f = a.instantiate(r, u, h), p && o(u, p, f, h || r.name), f)
            }
        }]
    }

    function nt() {
        this.$get = ["$window", function(e) {
            return zn(e.document)
        }]
    }

    function rt() {
        this.$get = ["$log", function(e) {
            return function(t, n) {
                e.error.apply(e, arguments)
            }
        }]
    }

    function at(e) {
        return y(e) ? S(e) ? e.toISOString() : D(e) : e
    }

    function it() {
        this.$get = function() {
            return function(e) {
                if (!e) return "";
                var t = [];
                return o(e, function(e, n) {
                    null === e || v(e) || (or(e) ? i(e, function(e, r) {
                        t.push(J(n) + "=" + J(at(e)))
                    }) : t.push(J(n) + "=" + J(at(e))))
                }), t.join("&")
            }
        }
    }

    function ot() {
        this.$get = function() {
            return function(e) {
                function t(e, r, a) {
                    null === e || v(e) || (or(e) ? i(e, function(e, n) {
                        t(e, r + "[" + (y(e) ? n : "") + "]")
                    }) : y(e) && !S(e) ? o(e, function(e, n) {
                        t(e, r + (a ? "" : "[") + n + (a ? "" : "]"))
                    }) : n.push(J(r) + "=" + J(at(e))))
                }
                if (!e) return "";
                var n = [];
                return t(e, "", !0), n.join("&")
            }
        }
    }

    function ut(e, t) {
        if (Z(e)) {
            var n = e.replace(na, "").trim();
            if (n) {
                var r = t("Content-Type");
                (r = r && 0 === r.indexOf(Xr)) || (r = (r = n.match(ea)) && ta[r[0]].test(n)), r && (e = B(n))
            }
        }
        return e
    }

    function st(e) {
        var t, n = ce();
        return Z(e) ? i(e.split("\n"), function(e) {
            t = e.indexOf(":");
            var r = Jn(sr(e.substr(0, t)));
            e = sr(e.substr(t + 1)), r && (n[r] = n[r] ? n[r] + ", " + e : e)
        }) : y(e) && i(e, function(e, t) {
            var r = Jn(t),
                a = sr(e);
            r && (n[r] = n[r] ? n[r] + ", " + a : a)
        }), n
    }

    function ct(e) {
        var t;
        return function(n) {
            return t || (t = st(e)), n ? (n = t[Jn(n)], void 0 === n && (n = null), n) : t
        }
    }

    function lt(e, t, n, r) {
        return x(r) ? r(e, t, n) : (i(r, function(r) {
            e = r(e, t, n)
        }), e)
    }

    function ft() {
        var e = this.defaults = {
                transformResponse: [ut],
                transformRequest: [function(e) {
                    return y(e) && "[object File]" !== tr.call(e) && "[object Blob]" !== tr.call(e) && "[object FormData]" !== tr.call(e) ? D(e) : e
                }],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: P(Qr),
                    put: P(Qr),
                    patch: P(Qr)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                paramSerializer: "$httpParamSerializer"
            },
            t = !1;
        this.useApplyAsync = function(e) {
            return b(e) ? (t = !!e, this) : t
        };
        var a = !0;
        this.useLegacyPromiseExtensions = function(e) {
            return b(e) ? (a = !!e, this) : a
        };
        var o = this.interceptors = [];
        this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function(u, s, c, f, h, p) {
            function d(t) {
                function o(e) {
                    var t = l({}, e);
                    return t.data = lt(e.data, e.headers, e.status, s.transformResponse), e = e.status, e >= 200 && 300 > e ? t : h.reject(t)
                }

                function u(e, t) {
                    var n, r = {};
                    return i(e, function(e, a) {
                        x(e) ? (n = e(t), null != n && (r[a] = n)) : r[a] = e
                    }), r
                }
                if (!y(t)) throw r("$http")("badreq", t);
                if (!Z(t.url)) throw r("$http")("badreq", t.url);
                var s = l({
                    method: "get",
                    transformRequest: e.transformRequest,
                    transformResponse: e.transformResponse,
                    paramSerializer: e.paramSerializer
                }, t);
                s.headers = function(t) {
                    var n, r, a, i = e.headers,
                        o = l({}, t.headers),
                        i = l({}, i.common, i[Jn(t.method)]);
                    e: for (n in i) {
                        r = Jn(n);
                        for (a in o)
                            if (Jn(a) === r) continue e;
                        o[n] = i[n]
                    }
                    return u(o, P(t))
                }(t), s.method = Yn(s.method), s.paramSerializer = Z(s.paramSerializer) ? p.get(s.paramSerializer) : s.paramSerializer;
                var c = [function(t) {
                        var r = t.headers,
                            a = lt(t.data, ct(r), n, t.transformRequest);
                        return v(a) && i(r, function(e, t) {
                            "content-type" === Jn(t) && delete r[t]
                        }), v(t.withCredentials) && !v(e.withCredentials) && (t.withCredentials = e.withCredentials), g(t, a).then(o, o)
                    }, n],
                    f = h.when(s);
                for (i(w, function(e) {
                        (e.request || e.requestError) && c.unshift(e.request, e.requestError), (e.response || e.responseError) && c.push(e.response, e.responseError)
                    }); c.length;) {
                    t = c.shift();
                    var d = c.shift(),
                        f = f.then(t, d)
                }
                return a ? (f.success = function(e) {
                    return ie(e, "fn"), f.then(function(t) {
                        e(t.data, t.status, t.headers, s)
                    }), f
                }, f.error = function(e) {
                    return ie(e, "fn"), f.then(null, function(t) {
                        e(t.data, t.status, t.headers, s)
                    }), f
                }) : (f.success = aa("success"), f.error = aa("error")), f
            }

            function g(r, a) {
                function i(e, n, r, a) {
                    function i() {
                        o(n, e, r, a)
                    }
                    p && (e >= 200 && 300 > e ? p.put(S, [e, n, st(r), a]) : p.remove(S)), t ? f.$applyAsync(i) : (i(), f.$$phase || f.$apply())
                }

                function o(e, t, n, a) {
                    t = t >= -1 ? t : 0, (t >= 200 && 300 > t ? w.resolve : w.reject)({
                        data: e,
                        status: t,
                        headers: ct(n),
                        config: r,
                        statusText: a
                    })
                }

                function c(e) {
                    o(e.data, e.status, P(e.headers()), e.statusText)
                }

                function l() {
                    var e = d.pendingRequests.indexOf(r); - 1 !== e && d.pendingRequests.splice(e, 1)
                }
                var p, g, w = h.defer(),
                    Z = w.promise,
                    _ = r.headers,
                    S = $(r.url, r.paramSerializer(r.params));
                return d.pendingRequests.push(r), Z.then(l, l), !r.cache && !e.cache || !1 === r.cache || "GET" !== r.method && "JSONP" !== r.method || (p = y(r.cache) ? r.cache : y(e.cache) ? e.cache : m), p && (g = p.get(S), b(g) ? g && x(g.then) ? g.then(c, c) : or(g) ? o(g[1], g[0], P(g[2]), g[3]) : o(g, 200, {}, "OK") : p.put(S, Z)), v(g) && ((g = cn(r.url) ? s()[r.xsrfCookieName || e.xsrfCookieName] : n) && (_[r.xsrfHeaderName || e.xsrfHeaderName] = g), u(r.method, S, a, i, _, r.timeout, r.withCredentials, r.responseType)), Z
            }

            function $(e, t) {
                return 0 < t.length && (e += (-1 == e.indexOf("?") ? "?" : "&") + t), e
            }
            var m = c("$http");
            e.paramSerializer = Z(e.paramSerializer) ? p.get(e.paramSerializer) : e.paramSerializer;
            var w = [];
            return i(o, function(e) {
                    w.unshift(Z(e) ? p.get(e) : p.invoke(e))
                }), d.pendingRequests = [],
                function(e) {
                    i(arguments, function(e) {
                        d[e] = function(t, n) {
                            return d(l({}, n || {}, {
                                method: e,
                                url: t
                            }))
                        }
                    })
                }("get", "delete", "head", "jsonp"),
                function(e) {
                    i(arguments, function(e) {
                        d[e] = function(t, n, r) {
                            return d(l({}, r || {}, {
                                method: e,
                                url: t,
                                data: n
                            }))
                        }
                    })
                }("post", "put", "patch"), d.defaults = e, d
        }]
    }

    function ht() {
        this.$get = function() {
            return function() {
                return new e.XMLHttpRequest
            }
        }
    }

    function pt() {
        this.$get = ["$browser", "$window", "$document", "$xhrFactory", function(e, t, n, r) {
            return dt(e, r, e.defer, t.angular.callbacks, n[0])
        }]
    }

    function dt(e, t, n, r, a) {
        function o(e, t, n) {
            var i = a.createElement("script"),
                o = null;
            return i.type = "text/javascript", i.src = e, i.async = !0, o = function(e) {
                i.removeEventListener("load", o, !1), i.removeEventListener("error", o, !1), a.body.removeChild(i), i = null;
                var u = -1,
                    s = "unknown";
                e && ("load" !== e.type || r[t].called || (e = {
                    type: "error"
                }), s = e.type, u = "error" === e.type ? 404 : 200), n && n(u, s)
            }, i.addEventListener("load", o, !1), i.addEventListener("error", o, !1), a.body.appendChild(i), o
        }
        return function(a, u, s, c, l, f, h, p) {
            function g() {
                y && y(), w && w.abort()
            }

            function $(t, r, a, i, o) {
                b(_) && n.cancel(_), y = w = null, t(r, a, i, o), e.$$completeOutstandingRequest(d)
            }
            if (e.$$incOutstandingRequestCount(), u = u || e.url(), "jsonp" == Jn(a)) {
                var m = "_" + (r.counter++).toString(36);
                r[m] = function(e) {
                    r[m].data = e, r[m].called = !0
                };
                var y = o(u.replace("JSON_CALLBACK", "angular.callbacks." + m), m, function(e, t) {
                    $(c, e, r[m].data, "", t), r[m] = d
                })
            } else {
                var w = t(a, u);
                if (w.open(a, u, !0), i(l, function(e, t) {
                        b(e) && w.setRequestHeader(t, e)
                    }), w.onload = function() {
                        var e = w.statusText || "",
                            t = "response" in w ? w.response : w.responseText,
                            n = 1223 === w.status ? 204 : w.status;
                        0 === n && (n = t ? 200 : "file" == sn(u).protocol ? 404 : 0), $(c, n, t, w.getAllResponseHeaders(), e)
                    }, a = function() {
                        $(c, -1, null, null, "")
                    }, w.onerror = a, w.onabort = a, h && (w.withCredentials = !0), p) try {
                    w.responseType = p
                } catch (Z) {
                    if ("json" !== p) throw Z
                }
                w.send(v(s) ? null : s)
            }
            if (f > 0) var _ = n(g, f);
            else f && x(f.then) && f.then(g)
        }
    }

    function gt() {
        var e = "{{",
            t = "}}";
        this.startSymbol = function(t) {
            return t ? (e = t, this) : e
        }, this.endSymbol = function(e) {
            return e ? (t = e, this) : t
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(n, r, a) {
            function i(e) {
                return "\\\\\\" + e
            }

            function o(n) {
                return n.replace(h, e).replace(p, t)
            }

            function u(e, t, n, r) {
                var a;
                return a = e.$watch(function(e) {
                    return a(), r(e)
                }, t, n)
            }

            function s(i, s, h, p) {
                function d(e) {
                    try {
                        var t = e;
                        e = h ? a.getTrusted(h, t) : a.valueOf(t);
                        var n;
                        if (p && !b(e)) n = e;
                        else if (null == e) n = "";
                        else {
                            switch (typeof e) {
                                case "string":
                                    break;
                                case "number":
                                    e = "" + e;
                                    break;
                                default:
                                    e = D(e)
                            }
                            n = e
                        }
                        return n
                    } catch (o) {
                        r(ia.interr(i, o))
                    }
                }
                if (!i.length || -1 === i.indexOf(e)) {
                    var g;
                    return s || (s = o(i), g = $(s), g.exp = i, g.expressions = [], g.$$watchDelegate = u), g
                }
                p = !!p;
                var m, y, w = 0,
                    Z = [],
                    _ = [];
                g = i.length;
                for (var S = [], E = []; g > w;) {
                    if (-1 == (m = i.indexOf(e, w)) || -1 == (y = i.indexOf(t, m + c))) {
                        w !== g && S.push(o(i.substring(w)));
                        break
                    }
                    w !== m && S.push(o(i.substring(w, m))), w = i.substring(m + c, y), Z.push(w), _.push(n(w, d)), w = y + f, E.push(S.length), S.push("")
                }
                if (h && 1 < S.length && ia.throwNoconcat(i), !s || Z.length) {
                    var C = function(e) {
                        for (var t = 0, n = Z.length; n > t; t++) {
                            if (p && v(e[t])) return;
                            S[E[t]] = e[t]
                        }
                        return S.join("")
                    };
                    return l(function(e) {
                        var t = 0,
                            n = Z.length,
                            a = Array(n);
                        try {
                            for (; n > t; t++) a[t] = _[t](e);
                            return C(a)
                        } catch (o) {
                            r(ia.interr(i, o))
                        }
                    }, {
                        exp: i,
                        expressions: Z,
                        $$watchDelegate: function(e, t) {
                            var n;
                            return e.$watchGroup(_, function(r, a) {
                                var i = C(r);
                                x(t) && t.call(this, i, r !== a ? n : i, e), n = i
                            })
                        }
                    })
                }
            }
            var c = e.length,
                f = t.length,
                h = new RegExp(e.replace(/./g, i), "g"),
                p = new RegExp(t.replace(/./g, i), "g");
            return s.startSymbol = function() {
                return e
            }, s.endSymbol = function() {
                return t
            }, s
        }]
    }

    function $t() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function(e, t, n, r, a) {
            function i(i, u, s, c) {
                function l() {
                    f ? i.apply(null, h) : i(g)
                }
                var f = 4 < arguments.length,
                    h = f ? Xn.call(arguments, 4) : [],
                    p = t.setInterval,
                    d = t.clearInterval,
                    g = 0,
                    $ = b(c) && !c,
                    m = ($ ? r : n).defer(),
                    v = m.promise;
                return s = b(s) ? s : 0, v.$$intervalId = p(function() {
                    $ ? a.defer(l) : e.$evalAsync(l), m.notify(g++), s > 0 && g >= s && (m.resolve(g), d(v.$$intervalId), delete o[v.$$intervalId]), $ || e.$apply()
                }, u), o[v.$$intervalId] = m, v
            }
            var o = {};
            return i.cancel = function(e) {
                return e && e.$$intervalId in o ? (o[e.$$intervalId].reject("canceled"), t.clearInterval(e.$$intervalId), delete o[e.$$intervalId], !0) : !1
            }, i
        }]
    }

    function mt(e) {
        e = e.split("/");
        for (var t = e.length; t--;) e[t] = W(e[t]);
        return e.join("/")
    }

    function vt(e, t) {
        var n = sn(e);
        t.$$protocol = n.protocol, t.$$host = n.hostname, t.$$port = h(n.port) || ua[n.protocol] || null
    }

    function bt(e, t) {
        var n = "/" !== e.charAt(0);
        n && (e = "/" + e);
        var r = sn(e);
        t.$$path = decodeURIComponent(n && "/" === r.pathname.charAt(0) ? r.pathname.substring(1) : r.pathname), t.$$search = q(r.search), t.$$hash = decodeURIComponent(r.hash), t.$$path && "/" != t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
    }

    function yt(e, t) {
        return 0 === t.indexOf(e) ? t.substr(e.length) : void 0
    }

    function wt(e) {
        var t = e.indexOf("#");
        return -1 == t ? e : e.substr(0, t)
    }

    function Zt(e) {
        return e.replace(/(#.+)|#$/, "$1")
    }

    function _t(e, t, n) {
        this.$$html5 = !0, n = n || "", vt(e, this), this.$$parse = function(e) {
            var n = yt(t, e);
            if (!Z(n)) throw sa("ipthprfx", e, t);
            bt(n, this), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function() {
            var e = K(this.$$search),
                n = this.$$hash ? "#" + W(this.$$hash) : "";
            this.$$url = mt(this.$$path) + (e ? "?" + e : "") + n, this.$$absUrl = t + this.$$url.substr(1)
        }, this.$$parseLinkUrl = function(r, a) {
            if (a && "#" === a[0]) return this.hash(a.slice(1)), !0;
            var i, o;
            return b(i = yt(e, r)) ? (o = i, o = b(i = yt(n, i)) ? t + (yt("/", i) || i) : e + o) : b(i = yt(t, r)) ? o = t + i : t == r + "/" && (o = t), o && this.$$parse(o), !!o
        }
    }

    function St(e, t, n) {
        vt(e, this), this.$$parse = function(r) {
            var a, i = yt(e, r) || yt(t, r);
            v(i) || "#" !== i.charAt(0) ? this.$$html5 ? a = i : (a = "", v(i) && (e = r, this.replace())) : (a = yt(n, i), v(a) && (a = i)), bt(a, this), r = this.$$path;
            var i = e,
                o = /^\/[A-Z]:(\/.*)/;
            0 === a.indexOf(i) && (a = a.replace(i, "")), o.exec(a) || (r = (a = o.exec(r)) ? a[1] : r), this.$$path = r, this.$$compose()
        }, this.$$compose = function() {
            var t = K(this.$$search),
                r = this.$$hash ? "#" + W(this.$$hash) : "";
            this.$$url = mt(this.$$path) + (t ? "?" + t : "") + r, this.$$absUrl = e + (this.$$url ? n + this.$$url : "")
        }, this.$$parseLinkUrl = function(t, n) {
            return wt(e) == wt(t) ? (this.$$parse(t), !0) : !1
        }
    }

    function xt(e, t, n) {
        this.$$html5 = !0, St.apply(this, arguments), this.$$parseLinkUrl = function(r, a) {
            if (a && "#" === a[0]) return this.hash(a.slice(1)), !0;
            var i, o;
            return e == wt(r) ? i = r : (o = yt(t, r)) ? i = e + n + o : t === r + "/" && (i = t), i && this.$$parse(i), !!i
        }, this.$$compose = function() {
            var t = K(this.$$search),
                r = this.$$hash ? "#" + W(this.$$hash) : "";
            this.$$url = mt(this.$$path) + (t ? "?" + t : "") + r, this.$$absUrl = e + n + this.$$url
        }
    }

    function Et(e) {
        return function() {
            return this[e]
        }
    }

    function Ct(e, t) {
        return function(n) {
            return v(n) ? this[e] : (this[e] = t(n), this.$$compose(), this)
        }
    }

    function At() {
        var e = "",
            t = {
                enabled: !1,
                requireBase: !0,
                rewriteLinks: !0
            };
        this.hashPrefix = function(t) {
            return b(t) ? (e = t, this) : e
        }, this.html5Mode = function(e) {
            return k(e) ? (t.enabled = e, this) : y(e) ? (k(e.enabled) && (t.enabled = e.enabled), k(e.requireBase) && (t.requireBase = e.requireBase), k(e.rewriteLinks) && (t.rewriteLinks = e.rewriteLinks), this) : t
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(n, r, a, i, o) {
            function u(e, t, n) {
                var a = c.url(),
                    i = c.$$state;
                try {
                    r.url(e, t, n), c.$$state = r.state()
                } catch (o) {
                    throw c.url(a), c.$$state = i, o
                }
            }

            function s(e, t) {
                n.$broadcast("$locationChangeSuccess", c.absUrl(), e, c.$$state, t)
            }
            var c, l;
            l = r.baseHref();
            var f, h = r.url();
            if (t.enabled) {
                if (!l && t.requireBase) throw sa("nobase");
                f = h.substring(0, h.indexOf("/", h.indexOf("//") + 2)) + (l || "/"), l = a.history ? _t : xt
            } else f = wt(h), l = St;
            var p = f.substr(0, wt(f).lastIndexOf("/") + 1);
            c = new l(f, p, "#" + e), c.$$parseLinkUrl(h, h), c.$$state = r.state();
            var d = /^\s*(javascript|mailto):/i;
            i.on("click", function(e) {
                if (t.rewriteLinks && !e.ctrlKey && !e.metaKey && !e.shiftKey && 2 != e.which && 2 != e.button) {
                    for (var a = zn(e.target);
                        "a" !== T(a[0]);)
                        if (a[0] === i[0] || !(a = a.parent())[0]) return;
                    var u = a.prop("href"),
                        s = a.attr("href") || a.attr("xlink:href");
                    y(u) && "[object SVGAnimatedString]" === u.toString() && (u = sn(u.animVal).href), d.test(u) || !u || a.attr("target") || e.isDefaultPrevented() || !c.$$parseLinkUrl(u, s) || (e.preventDefault(), c.absUrl() != r.url() && (n.$apply(), o.angular["ff-684208-preventDefault"] = !0))
                }
            }), Zt(c.absUrl()) != Zt(h) && r.url(c.absUrl(), !0);
            var g = !0;
            return r.onUrlChange(function(e, t) {
                v(yt(p, e)) ? o.location.href = e : (n.$evalAsync(function() {
                    var r, a = c.absUrl(),
                        i = c.$$state;
                    e = Zt(e), c.$$parse(e), c.$$state = t, r = n.$broadcast("$locationChangeStart", e, a, t, i).defaultPrevented, c.absUrl() === e && (r ? (c.$$parse(a), c.$$state = i, u(a, !1, i)) : (g = !1, s(a, i)))
                }), n.$$phase || n.$digest())
            }), n.$watch(function() {
                var e = Zt(r.url()),
                    t = Zt(c.absUrl()),
                    i = r.state(),
                    o = c.$$replace,
                    l = e !== t || c.$$html5 && a.history && i !== c.$$state;
                (g || l) && (g = !1, n.$evalAsync(function() {
                    var t = c.absUrl(),
                        r = n.$broadcast("$locationChangeStart", t, e, c.$$state, i).defaultPrevented;
                    c.absUrl() === t && (r ? (c.$$parse(e), c.$$state = i) : (l && u(t, o, i === c.$$state ? null : c.$$state), s(e, i)))
                })), c.$$replace = !1
            }), c
        }]
    }

    function kt() {
        var e = !0,
            t = this;
        this.debugEnabled = function(t) {
            return b(t) ? (e = t, this) : e
        }, this.$get = ["$window", function(n) {
            function r(e) {
                return e instanceof Error && (e.stack ? e = e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)), e
            }

            function a(e) {
                var t = n.console || {},
                    a = t[e] || t.log || d;
                e = !1;
                try {
                    e = !!a.apply
                } catch (o) {}
                return e ? function() {
                    var e = [];
                    return i(arguments, function(t) {
                        e.push(r(t))
                    }), a.apply(t, e)
                } : function(e, t) {
                    a(e, null == t ? "" : t)
                }
            }
            return {
                log: a("log"),
                info: a("info"),
                warn: a("warn"),
                error: a("error"),
                debug: function() {
                    var n = a("debug");
                    return function() {
                        e && n.apply(t, arguments)
                    }
                }()
            }
        }]
    }

    function Mt(e, t) {
        if ("__defineGetter__" === e || "__defineSetter__" === e || "__lookupGetter__" === e || "__lookupSetter__" === e || "__proto__" === e) throw la("isecfld", t);
        return e
    }

    function Nt(e) {
        return e + ""
    }

    function Ot(e, t) {
        if (e) {
            if (e.constructor === e) throw la("isecfn", t);
            if (e.window === e) throw la("isecwindow", t);
            if (e.children && (e.nodeName || e.prop && e.attr && e.find)) throw la("isecdom", t);
            if (e === Object) throw la("isecobj", t)
        }
        return e
    }

    function Tt(e, t) {
        if (e) {
            if (e.constructor === e) throw la("isecfn", t);
            if (e === fa || e === ha || e === pa) throw la("isecff", t)
        }
    }

    function It(e, t) {
        if (e && (e === 0..constructor || e === (!1).constructor || e === "".constructor || e === {}.constructor || e === [].constructor || e === Function.constructor)) throw la("isecaf", t)
    }

    function jt(e, t) {
        return "undefined" != typeof e ? e : t
    }

    function Pt(e, t) {
        return "undefined" == typeof e ? t : "undefined" == typeof t ? e : e + t
    }

    function Lt(e, t) {
        var n, r;
        switch (e.type) {
            case ma.Program:
                n = !0, i(e.body, function(e) {
                    Lt(e.expression, t), n = n && e.expression.constant
                }), e.constant = n;
                break;
            case ma.Literal:
                e.constant = !0, e.toWatch = [];
                break;
            case ma.UnaryExpression:
                Lt(e.argument, t), e.constant = e.argument.constant, e.toWatch = e.argument.toWatch;
                break;
            case ma.BinaryExpression:
                Lt(e.left, t), Lt(e.right, t), e.constant = e.left.constant && e.right.constant, e.toWatch = e.left.toWatch.concat(e.right.toWatch);
                break;
            case ma.LogicalExpression:
                Lt(e.left, t), Lt(e.right, t), e.constant = e.left.constant && e.right.constant, e.toWatch = e.constant ? [] : [e];
                break;
            case ma.ConditionalExpression:
                Lt(e.test, t), Lt(e.alternate, t), Lt(e.consequent, t), e.constant = e.test.constant && e.alternate.constant && e.consequent.constant, e.toWatch = e.constant ? [] : [e];
                break;
            case ma.Identifier:
                e.constant = !1, e.toWatch = [e];
                break;
            case ma.MemberExpression:
                Lt(e.object, t), e.computed && Lt(e.property, t), e.constant = e.object.constant && (!e.computed || e.property.constant), e.toWatch = [e];
                break;
            case ma.CallExpression:
                n = e.filter ? !t(e.callee.name).$stateful : !1, r = [], i(e.arguments, function(e) {
                    Lt(e, t), n = n && e.constant, e.constant || r.push.apply(r, e.toWatch)
                }), e.constant = n, e.toWatch = e.filter && !t(e.callee.name).$stateful ? r : [e];
                break;
            case ma.AssignmentExpression:
                Lt(e.left, t), Lt(e.right, t), e.constant = e.left.constant && e.right.constant, e.toWatch = [e];
                break;
            case ma.ArrayExpression:
                n = !0, r = [], i(e.elements, function(e) {
                    Lt(e, t), n = n && e.constant, e.constant || r.push.apply(r, e.toWatch)
                }), e.constant = n, e.toWatch = r;
                break;
            case ma.ObjectExpression:
                n = !0, r = [], i(e.properties, function(e) {
                    Lt(e.value, t), n = n && e.value.constant, e.value.constant || r.push.apply(r, e.value.toWatch)
                }), e.constant = n, e.toWatch = r;
                break;
            case ma.ThisExpression:
                e.constant = !1, e.toWatch = [];
                break;
            case ma.LocalsExpression:
                e.constant = !1, e.toWatch = []
        }
    }

    function Ut(e) {
        if (1 == e.length) {
            e = e[0].expression;
            var t = e.toWatch;
            return 1 !== t.length ? t : t[0] !== e ? t : n
        }
    }

    function Vt(e) {
        return e.type === ma.Identifier || e.type === ma.MemberExpression
    }

    function Rt(e) {
        return 1 === e.body.length && Vt(e.body[0].expression) ? {
            type: ma.AssignmentExpression,
            left: e.body[0].expression,
            right: {
                type: ma.NGValueParameter
            },
            operator: "="
        } : void 0
    }

    function Dt(e) {
        return 0 === e.body.length || 1 === e.body.length && (e.body[0].expression.type === ma.Literal || e.body[0].expression.type === ma.ArrayExpression || e.body[0].expression.type === ma.ObjectExpression)
    }

    function Bt(e, t) {
        this.astBuilder = e, this.$filter = t
    }

    function Ft(e, t) {
        this.astBuilder = e, this.$filter = t
    }

    function Gt(e) {
        return "constructor" == e
    }

    function zt(e) {
        return x(e.valueOf) ? e.valueOf() : ba.call(e)
    }

    function Ht() {
        var e = ce(),
            t = ce();
        this.$get = ["$filter", function(r) {
            function a(n, a, i) {
                var u, p, v;
                switch (i = i || m, typeof n) {
                    case "string":
                        v = n = n.trim();
                        var b = i ? t : e;
                        if (u = b[v], !u) {
                            ":" === n.charAt(0) && ":" === n.charAt(1) && (p = !0, n = n.substring(2)), u = i ? $ : g;
                            var y = new $a(u);
                            u = new va(y, r, u).parse(n), u.constant ? u.$$watchDelegate = f : p ? u.$$watchDelegate = u.literal ? l : c : u.inputs && (u.$$watchDelegate = s), i && (u = o(u)), b[v] = u
                        }
                        return h(u, a);
                    case "function":
                        return h(n, a);
                    default:
                        return h(d, a)
                }
            }

            function o(e) {
                function t(t, n, r, a) {
                    var i = m;
                    m = !0;
                    try {
                        return e(t, n, r, a)
                    } finally {
                        m = i
                    }
                }
                if (!e) return e;
                t.$$watchDelegate = e.$$watchDelegate, t.assign = o(e.assign), t.constant = e.constant, t.literal = e.literal;
                for (var n = 0; e.inputs && n < e.inputs.length; ++n) e.inputs[n] = o(e.inputs[n]);
                return t
            }

            function u(e, t) {
                return null == e || null == t ? e === t : "object" == typeof e && (e = zt(e), "object" == typeof e) ? !1 : e === t || e !== e && t !== t
            }

            function s(e, t, r, a, i) {
                var o, s = a.inputs;
                if (1 === s.length) {
                    var c = u,
                        s = s[0];
                    return e.$watch(function(e) {
                        var t = s(e);
                        return u(t, c) || (o = a(e, n, n, [t]), c = t && zt(t)), o
                    }, t, r, i)
                }
                for (var l = [], f = [], h = 0, p = s.length; p > h; h++) l[h] = u, f[h] = null;
                return e.$watch(function(e) {
                    for (var t = !1, r = 0, i = s.length; i > r; r++) {
                        var c = s[r](e);
                        (t || (t = !u(c, l[r]))) && (f[r] = c, l[r] = c && zt(c))
                    }
                    return t && (o = a(e, n, n, f)), o
                }, t, r, i)
            }

            function c(e, t, n, r) {
                var a, i;
                return a = e.$watch(function(e) {
                    return r(e)
                }, function(e, n, r) {
                    i = e, x(t) && t.apply(this, arguments), b(e) && r.$$postDigest(function() {
                        b(i) && a()
                    })
                }, n)
            }

            function l(e, t, n, r) {
                function a(e) {
                    var t = !0;
                    return i(e, function(e) {
                        b(e) || (t = !1)
                    }), t
                }
                var o, u;
                return o = e.$watch(function(e) {
                    return r(e)
                }, function(e, n, r) {
                    u = e, x(t) && t.call(this, e, n, r), a(e) && r.$$postDigest(function() {
                        a(u) && o()
                    })
                }, n)
            }

            function f(e, t, n, r) {
                var a;
                return a = e.$watch(function(e) {
                    return a(), r(e)
                }, t, n)
            }

            function h(e, t) {
                if (!t) return e;
                var n = e.$$watchDelegate,
                    r = !1,
                    n = n !== l && n !== c ? function(n, a, i, o) {
                        return i = r && o ? o[0] : e(n, a, i, o), t(i, n, a)
                    } : function(n, r, a, i) {
                        return a = e(n, r, a, i), n = t(a, n, r), b(a) ? n : a
                    };
                return e.$$watchDelegate && e.$$watchDelegate !== s ? n.$$watchDelegate = e.$$watchDelegate : t.$stateful || (n.$$watchDelegate = s, r = !e.inputs, n.inputs = e.inputs ? e.inputs : [e]), n
            }
            var p = lr().noUnsafeEval,
                g = {
                    csp: p,
                    expensiveChecks: !1
                },
                $ = {
                    csp: p,
                    expensiveChecks: !0
                },
                m = !1;
            return a.$$runningExpensiveChecks = function() {
                return m
            }, a
        }]
    }

    function qt() {
        this.$get = ["$rootScope", "$exceptionHandler", function(e, t) {
            return Wt(function(t) {
                e.$evalAsync(t)
            }, t)
        }]
    }

    function Kt() {
        this.$get = ["$browser", "$exceptionHandler", function(e, t) {
            return Wt(function(t) {
                e.defer(t)
            }, t)
        }]
    }

    function Wt(e, t) {
        function a() {
            this.$$state = {
                status: 0
            }
        }

        function o(e, t) {
            return function(n) {
                t.call(e, n)
            }
        }

        function u(r) {
            !r.processScheduled && r.pending && (r.processScheduled = !0, e(function() {
                var e, a, i;
                i = r.pending, r.processScheduled = !1, r.pending = n;
                for (var o = 0, u = i.length; u > o; ++o) {
                    a = i[o][0], e = i[o][r.status];
                    try {
                        x(e) ? a.resolve(e(r.value)) : 1 === r.status ? a.resolve(r.value) : a.reject(r.value)
                    } catch (s) {
                        a.reject(s), t(s)
                    }
                }
            }))
        }

        function s() {
            this.promise = new a
        }
        var c = r("$q", TypeError);
        l(a.prototype, {
            then: function(e, t, n) {
                if (v(e) && v(t) && v(n)) return this;
                var r = new s;
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([r, e, t, n]), 0 < this.$$state.status && u(this.$$state), r.promise
            },
            "catch": function(e) {
                return this.then(null, e)
            },
            "finally": function(e, t) {
                return this.then(function(t) {
                    return h(t, !0, e)
                }, function(t) {
                    return h(t, !1, e)
                }, t)
            }
        }), l(s.prototype, {
            resolve: function(e) {
                this.promise.$$state.status || (e === this.promise ? this.$$reject(c("qcycle", e)) : this.$$resolve(e))
            },
            $$resolve: function(e) {
                function n(e) {
                    s || (s = !0, i.$$resolve(e))
                }

                function r(e) {
                    s || (s = !0, i.$$reject(e))
                }
                var a, i = this,
                    s = !1;
                try {
                    (y(e) || x(e)) && (a = e && e.then), x(a) ? (this.promise.$$state.status = -1, a.call(e, n, r, o(this, this.notify))) : (this.promise.$$state.value = e, this.promise.$$state.status = 1, u(this.promise.$$state))
                } catch (c) {
                    r(c), t(c)
                }
            },
            reject: function(e) {
                this.promise.$$state.status || this.$$reject(e)
            },
            $$reject: function(e) {
                this.promise.$$state.value = e, this.promise.$$state.status = 2, u(this.promise.$$state)
            },
            notify: function(n) {
                var r = this.promise.$$state.pending;
                0 >= this.promise.$$state.status && r && r.length && e(function() {
                    for (var e, a, i = 0, o = r.length; o > i; i++) {
                        a = r[i][0], e = r[i][3];
                        try {
                            a.notify(x(e) ? e(n) : n)
                        } catch (u) {
                            t(u)
                        }
                    }
                })
            }
        });
        var f = function(e, t) {
                var n = new s;
                return t ? n.resolve(e) : n.reject(e), n.promise
            },
            h = function(e, t, n) {
                var r = null;
                try {
                    x(n) && (r = n())
                } catch (a) {
                    return f(a, !1)
                }
                return r && x(r.then) ? r.then(function() {
                    return f(e, t)
                }, function(e) {
                    return f(e, !1)
                }) : f(e, t)
            },
            p = function(e, t, n, r) {
                var a = new s;
                return a.resolve(e), a.promise.then(t, n, r)
            },
            d = function(e) {
                if (!x(e)) throw c("norslvr", e);
                var t = new s;
                return e(function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                }), t.promise
            };
        return d.prototype = a.prototype, d.defer = function() {
            var e = new s;
            return e.resolve = o(e, e.resolve), e.reject = o(e, e.reject), e.notify = o(e, e.notify), e
        }, d.reject = function(e) {
            var t = new s;
            return t.reject(e), t.promise
        }, d.when = p, d.resolve = p, d.all = function(e) {
            var t = new s,
                n = 0,
                r = or(e) ? [] : {};
            return i(e, function(e, a) {
                n++, p(e).then(function(e) {
                    r.hasOwnProperty(a) || (r[a] = e, --n || t.resolve(r))
                }, function(e) {
                    r.hasOwnProperty(a) || t.reject(e)
                })
            }), 0 === n && t.resolve(r), t.promise
        }, d
    }

    function Jt() {
        this.$get = ["$window", "$timeout", function(e, t) {
            var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame,
                r = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame,
                a = !!n,
                i = a ? function(e) {
                    var t = n(e);
                    return function() {
                        r(t)
                    }
                } : function(e) {
                    var n = t(e, 16.66, !1);
                    return function() {
                        t.cancel(n)
                    }
                };
            return i.supported = a, i
        }]
    }

    function Yt() {
        function e(e) {
            function t() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = ++ir, this.$$ChildScope = null
            }
            return t.prototype = e, t
        }
        var t = 10,
            n = r("$rootScope"),
            o = null,
            u = null;
        this.digestTtl = function(e) {
            return arguments.length && (t = e), t
        }, this.$get = ["$exceptionHandler", "$parse", "$browser", function(r, s, c) {
            function l(e) {
                e.currentScope.$$destroyed = !0
            }

            function f(e) {
                9 === Gn && (e.$$childHead && f(e.$$childHead), e.$$nextSibling && f(e.$$nextSibling)), e.$parent = e.$$nextSibling = e.$$prevSibling = e.$$childHead = e.$$childTail = e.$root = e.$$watchers = null
            }

            function h() {
                this.$id = ++ir, this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
            }

            function p(e) {
                if (Z.$$phase) throw n("inprog", Z.$$phase);
                Z.$$phase = e
            }

            function g(e, t) {
                do e.$$watchersCount += t; while (e = e.$parent)
            }

            function $(e, t, n) {
                do e.$$listenerCount[n] -= t, 0 === e.$$listenerCount[n] && delete e.$$listenerCount[n]; while (e = e.$parent)
            }

            function m() {}

            function b() {
                for (; E.length;) try {
                    E.shift()()
                } catch (e) {
                    r(e)
                }
                u = null
            }

            function w() {
                null === u && (u = c.defer(function() {
                    Z.$apply(b)
                }))
            }
            h.prototype = {
                constructor: h,
                $new: function(t, n) {
                    var r;
                    return n = n || this, t ? (r = new h, r.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = e(this)), r = new this.$$ChildScope), r.$parent = n, r.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = r, n.$$childTail = r) : n.$$childHead = n.$$childTail = r, (t || n != this) && r.$on("$destroy", l), r
                },
                $watch: function(e, t, n, r) {
                    var a = s(e);
                    if (a.$$watchDelegate) return a.$$watchDelegate(this, t, n, a, e);
                    var i = this,
                        u = i.$$watchers,
                        c = {
                            fn: t,
                            last: m,
                            get: a,
                            exp: r || e,
                            eq: !!n
                        };
                    return o = null, x(t) || (c.fn = d), u || (u = i.$$watchers = []), u.unshift(c), g(this, 1),
                        function() {
                            0 <= I(u, c) && g(i, -1), o = null
                        }
                },
                $watchGroup: function(e, t) {
                    function n() {
                        s = !1, c ? (c = !1, t(a, a, u)) : t(a, r, u)
                    }
                    var r = Array(e.length),
                        a = Array(e.length),
                        o = [],
                        u = this,
                        s = !1,
                        c = !0;
                    if (!e.length) {
                        var l = !0;
                        return u.$evalAsync(function() {
                                l && t(a, a, u)
                            }),
                            function() {
                                l = !1
                            }
                    }
                    return 1 === e.length ? this.$watch(e[0], function(e, n, i) {
                        a[0] = e, r[0] = n, t(a, e === n ? a : r, i)
                    }) : (i(e, function(e, t) {
                        var i = u.$watch(e, function(e, i) {
                            a[t] = e, r[t] = i, s || (s = !0, u.$evalAsync(n))
                        });
                        o.push(i)
                    }), function() {
                        for (; o.length;) o.shift()()
                    })
                },
                $watchCollection: function(e, t) {
                    function n(e) {
                        r = e;
                        var t, n, o, u;
                        if (!v(r)) {
                            if (y(r))
                                if (a(r))
                                    for (i !== h && (i = h, g = i.length = 0, l++), e = r.length, g !== e && (l++, i.length = g = e), t = 0; e > t; t++) u = i[t], o = r[t], n = u !== u && o !== o, n || u === o || (l++, i[t] = o);
                                else {
                                    i !== p && (i = p = {}, g = 0, l++), e = 0;
                                    for (t in r) Wn.call(r, t) && (e++, o = r[t], u = i[t], t in i ? (n = u !== u && o !== o, n || u === o || (l++, i[t] = o)) : (g++, i[t] = o, l++));
                                    if (g > e)
                                        for (t in l++, i) Wn.call(r, t) || (g--, delete i[t])
                                } else i !== r && (i = r, l++);
                            return l
                        }
                    }
                    n.$stateful = !0;
                    var r, i, o, u = this,
                        c = 1 < t.length,
                        l = 0,
                        f = s(e, n),
                        h = [],
                        p = {},
                        d = !0,
                        g = 0;
                    return this.$watch(f, function() {
                        if (d ? (d = !1, t(r, r, u)) : t(r, o, u), c)
                            if (y(r))
                                if (a(r)) {
                                    o = Array(r.length);
                                    for (var e = 0; e < r.length; e++) o[e] = r[e]
                                } else
                                    for (e in o = {}, r) Wn.call(r, e) && (o[e] = r[e]);
                        else o = r
                    })
                },
                $digest: function() {
                    var e, a, i, s, l, f, h, d, g, $ = t,
                        v = [];
                    p("$digest"), c.$$checkUrlChange(), this === Z && null !== u && (c.defer.cancel(u), b()), o = null;
                    do {
                        for (f = !1, h = this; _.length;) {
                            try {
                                g = _.shift(), g.scope.$eval(g.expression, g.locals)
                            } catch (y) {
                                r(y)
                            }
                            o = null
                        }
                        e: do {
                            if (s = h.$$watchers)
                                for (l = s.length; l--;) try {
                                    if (e = s[l])
                                        if ((a = e.get(h)) === (i = e.last) || (e.eq ? L(a, i) : "number" == typeof a && "number" == typeof i && isNaN(a) && isNaN(i))) {
                                            if (e === o) {
                                                f = !1;
                                                break e
                                            }
                                        } else f = !0, o = e, e.last = e.eq ? j(a, null) : a, e.fn(a, i === m ? a : i, h), 5 > $ && (d = 4 - $, v[d] || (v[d] = []), v[d].push({
                                            msg: x(e.exp) ? "fn: " + (e.exp.name || e.exp.toString()) : e.exp,
                                            newVal: a,
                                            oldVal: i
                                        }))
                                } catch (w) {
                                    r(w)
                                }
                            if (!(s = h.$$watchersCount && h.$$childHead || h !== this && h.$$nextSibling))
                                for (; h !== this && !(s = h.$$nextSibling);) h = h.$parent
                        } while (h = s);
                        if ((f || _.length) && !$--) throw Z.$$phase = null, n("infdig", t, v)
                    } while (f || _.length);
                    for (Z.$$phase = null; S.length;) try {
                        S.shift()()
                    } catch (E) {
                        r(E)
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var e = this.$parent;
                        this.$broadcast("$destroy"), this.$$destroyed = !0, this === Z && c.$$applicationDestroyed(), g(this, -this.$$watchersCount);
                        for (var t in this.$$listenerCount) $(this, this.$$listenerCount[t], t);
                        e && e.$$childHead == this && (e.$$childHead = this.$$nextSibling), e && e.$$childTail == this && (e.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = d, this.$on = this.$watch = this.$watchGroup = function() {
                            return d
                        }, this.$$listeners = {}, this.$$nextSibling = null, f(this)
                    }
                },
                $eval: function(e, t) {
                    return s(e)(this, t)
                },
                $evalAsync: function(e, t) {
                    Z.$$phase || _.length || c.defer(function() {
                        _.length && Z.$digest()
                    }), _.push({
                        scope: this,
                        expression: s(e),
                        locals: t
                    })
                },
                $$postDigest: function(e) {
                    S.push(e)
                },
                $apply: function(e) {
                    try {
                        p("$apply");
                        try {
                            return this.$eval(e)
                        } finally {
                            Z.$$phase = null
                        }
                    } catch (t) {
                        r(t)
                    } finally {
                        try {
                            Z.$digest()
                        } catch (n) {
                            throw r(n), n
                        }
                    }
                },
                $applyAsync: function(e) {
                    function t() {
                        n.$eval(e)
                    }
                    var n = this;
                    e && E.push(t), e = s(e), w()
                },
                $on: function(e, t) {
                    var n = this.$$listeners[e];
                    n || (this.$$listeners[e] = n = []), n.push(t);
                    var r = this;
                    do r.$$listenerCount[e] || (r.$$listenerCount[e] = 0), r.$$listenerCount[e]++; while (r = r.$parent);
                    var a = this;
                    return function() {
                        var r = n.indexOf(t); - 1 !== r && (n[r] = null, $(a, 1, e))
                    }
                },
                $emit: function(e, t) {
                    var n, a, i, o = [],
                        u = this,
                        s = !1,
                        c = {
                            name: e,
                            targetScope: u,
                            stopPropagation: function() {
                                s = !0
                            },
                            preventDefault: function() {
                                c.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        },
                        l = U([c], arguments, 1);
                    do {
                        for (n = u.$$listeners[e] || o, c.currentScope = u, a = 0, i = n.length; i > a; a++)
                            if (n[a]) try {
                                n[a].apply(null, l)
                            } catch (f) {
                                r(f)
                            } else n.splice(a, 1), a--, i--;
                        if (s) return c.currentScope = null, c;
                        u = u.$parent
                    } while (u);
                    return c.currentScope = null, c
                },
                $broadcast: function(e, t) {
                    var n = this,
                        a = this,
                        i = {
                            name: e,
                            targetScope: this,
                            preventDefault: function() {
                                i.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        };
                    if (!this.$$listenerCount[e]) return i;
                    for (var o, u, s = U([i], arguments, 1); n = a;) {
                        for (i.currentScope = n, a = n.$$listeners[e] || [], o = 0, u = a.length; u > o; o++)
                            if (a[o]) try {
                                a[o].apply(null, s)
                            } catch (c) {
                                r(c)
                            } else a.splice(o, 1), o--, u--;
                        if (!(a = n.$$listenerCount[e] && n.$$childHead || n !== this && n.$$nextSibling))
                            for (; n !== this && !(a = n.$$nextSibling);) n = n.$parent
                    }
                    return i.currentScope = null, i
                }
            };
            var Z = new h,
                _ = Z.$$asyncQueue = [],
                S = Z.$$postDigestQueue = [],
                E = Z.$$applyAsyncQueue = [];
            return Z
        }]
    }

    function Xt() {
        var e = /^\s*(https?|ftp|mailto|tel|file):/,
            t = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(t) {
            return b(t) ? (e = t, this) : e
        }, this.imgSrcSanitizationWhitelist = function(e) {
            return b(e) ? (t = e, this) : t
        }, this.$get = function() {
            return function(n, r) {
                var a, i = r ? t : e;
                return a = sn(n).href, "" === a || a.match(i) ? n : "unsafe:" + a
            }
        }
    }

    function Qt(e) {
        if ("self" === e) return e;
        if (Z(e)) {
            if (-1 < e.indexOf("***")) throw ya("iwcard", e);
            return e = cr(e).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + e + "$")
        }
        if (E(e)) return new RegExp("^" + e.source + "$");
        throw ya("imatcher")
    }

    function en(e) {
        var t = [];
        return b(e) && i(e, function(e) {
            t.push(Qt(e))
        }), t
    }

    function tn() {
        this.SCE_CONTEXTS = wa;
        var e = ["self"],
            t = [];
        this.resourceUrlWhitelist = function(t) {
            return arguments.length && (e = en(t)), e
        }, this.resourceUrlBlacklist = function(e) {
            return arguments.length && (t = en(e)), t
        }, this.$get = ["$injector", function(n) {
            function r(e, t) {
                return "self" === e ? cn(t) : !!e.exec(t.href)
            }

            function a(e) {
                var t = function(e) {
                    this.$$unwrapTrustedValue = function() {
                        return e
                    }
                };
                return e && (t.prototype = new e), t.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue()
                }, t.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString()
                }, t
            }
            var i = function(e) {
                throw ya("unsafe")
            };
            n.has("$sanitize") && (i = n.get("$sanitize"));
            var o = a(),
                u = {};
            return u[wa.HTML] = a(o), u[wa.CSS] = a(o), u[wa.URL] = a(o), u[wa.JS] = a(o), u[wa.RESOURCE_URL] = a(u[wa.URL]), {
                trustAs: function(e, t) {
                    var n = u.hasOwnProperty(e) ? u[e] : null;
                    if (!n) throw ya("icontext", e, t);
                    if (null === t || v(t) || "" === t) return t;
                    if ("string" != typeof t) throw ya("itype", e);
                    return new n(t)
                },
                getTrusted: function(n, a) {
                    if (null === a || v(a) || "" === a) return a;
                    var o = u.hasOwnProperty(n) ? u[n] : null;
                    if (o && a instanceof o) return a.$$unwrapTrustedValue();
                    if (n === wa.RESOURCE_URL) {
                        var s, c, o = sn(a.toString()),
                            l = !1;
                        for (s = 0, c = e.length; c > s; s++)
                            if (r(e[s], o)) {
                                l = !0;
                                break
                            }
                        if (l)
                            for (s = 0, c = t.length; c > s; s++)
                                if (r(t[s], o)) {
                                    l = !1;
                                    break
                                }
                        if (l) return a;
                        throw ya("insecurl", a.toString())
                    }
                    if (n === wa.HTML) return i(a);
                    throw ya("unsafe")
                },
                valueOf: function(e) {
                    return e instanceof o ? e.$$unwrapTrustedValue() : e
                }
            }
        }]
    }

    function nn() {
        var e = !0;
        this.enabled = function(t) {
            return arguments.length && (e = !!t), e
        }, this.$get = ["$parse", "$sceDelegate", function(t, n) {
            if (e && 8 > Gn) throw ya("iequirks");
            var r = P(wa);
            r.isEnabled = function() {
                return e
            }, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, e || (r.trustAs = r.getTrusted = function(e, t) {
                return t
            }, r.valueOf = g), r.parseAs = function(e, n) {
                var a = t(n);
                return a.literal && a.constant ? a : t(n, function(t) {
                    return r.getTrusted(e, t)
                })
            };
            var a = r.parseAs,
                o = r.getTrusted,
                u = r.trustAs;
            return i(wa, function(e, t) {
                var n = Jn(t);
                r[he("parse_as_" + n)] = function(t) {
                    return a(e, t)
                }, r[he("get_trusted_" + n)] = function(t) {
                    return o(e, t)
                }, r[he("trust_as_" + n)] = function(t) {
                    return u(e, t)
                }
            }), r
        }]
    }

    function rn() {
        this.$get = ["$window", "$document", function(e, t) {
            var n, r = {},
                a = h((/android (\d+)/.exec(Jn((e.navigator || {}).userAgent)) || [])[1]),
                i = /Boxee/i.test((e.navigator || {}).userAgent),
                o = t[0] || {},
                u = /^(Moz|webkit|ms)(?=[A-Z])/,
                s = o.body && o.body.style,
                c = !1,
                l = !1;
            if (s) {
                for (var f in s)
                    if (c = u.exec(f)) {
                        n = c[0], n = n.substr(0, 1).toUpperCase() + n.substr(1);
                        break
                    }
                n || (n = "WebkitOpacity" in s && "webkit"), c = !!("transition" in s || n + "Transition" in s), l = !!("animation" in s || n + "Animation" in s), !a || c && l || (c = Z(s.webkitTransition), l = Z(s.webkitAnimation))
            }
            return {
                history: !(!e.history || !e.history.pushState || 4 > a || i),
                hasEvent: function(e) {
                    if ("input" === e && 11 >= Gn) return !1;
                    if (v(r[e])) {
                        var t = o.createElement("div");
                        r[e] = "on" + e in t
                    }
                    return r[e]
                },
                csp: lr(),
                vendorPrefix: n,
                transitions: c,
                animations: l,
                android: a
            }
        }]
    }

    function an() {
        var e;
        this.httpOptions = function(t) {
            return t ? (e = t, this) : e
        }, this.$get = ["$templateCache", "$http", "$q", "$sce", function(t, n, r, a) {
            function i(o, u) {
                i.totalPendingRequests++, Z(o) && t.get(o) || (o = a.getTrustedResourceUrl(o));
                var s = n.defaults && n.defaults.transformResponse;
                return or(s) ? s = s.filter(function(e) {
                    return e !== ut
                }) : s === ut && (s = null), n.get(o, l({
                    cache: t,
                    transformResponse: s
                }, e))["finally"](function() {
                    i.totalPendingRequests--
                }).then(function(e) {
                    return t.put(o, e.data), e.data
                }, function(e) {
                    if (!u) throw qr("tpload", o, e.status, e.statusText);
                    return r.reject(e)
                })
            }
            return i.totalPendingRequests = 0, i
        }]
    }

    function on() {
        this.$get = ["$rootScope", "$browser", "$location", function(e, t, n) {
            return {
                findBindings: function(e, t, n) {
                    e = e.getElementsByClassName("ng-binding");
                    var r = [];
                    return i(e, function(e) {
                        var a = ar.element(e).data("$binding");
                        a && i(a, function(a) {
                            n ? new RegExp("(^|\\s)" + cr(t) + "(\\s|\\||$)").test(a) && r.push(e) : -1 != a.indexOf(t) && r.push(e)
                        })
                    }), r
                },
                findModels: function(e, t, n) {
                    for (var r = ["ng-", "data-ng-", "ng\\:"], a = 0; a < r.length; ++a) {
                        var i = e.querySelectorAll("[" + r[a] + "model" + (n ? "=" : "*=") + '"' + t + '"]');
                        if (i.length) return i
                    }
                },
                getLocation: function() {
                    return n.url()
                },
                setLocation: function(t) {
                    t !== n.url() && (n.url(t), e.$digest())
                },
                whenStable: function(e) {
                    t.notifyWhenNoOutstandingRequests(e)
                }
            }
        }]
    }

    function un() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(e, t, n, r, a) {
            function i(i, u, s) {
                x(i) || (s = u, u = i, i = d);
                var c, l = Xn.call(arguments, 3),
                    f = b(s) && !s,
                    h = (f ? r : n).defer(),
                    p = h.promise;
                return c = t.defer(function() {
                    try {
                        h.resolve(i.apply(null, l))
                    } catch (t) {
                        h.reject(t), a(t)
                    } finally {
                        delete o[p.$$timeoutId]
                    }
                    f || e.$apply()
                }, u), p.$$timeoutId = c, o[c] = h, p
            }
            var o = {};
            return i.cancel = function(e) {
                return e && e.$$timeoutId in o ? (o[e.$$timeoutId].reject("canceled"), delete o[e.$$timeoutId], t.defer.cancel(e.$$timeoutId)) : !1
            }, i
        }]
    }

    function sn(e) {
        return Gn && (Za.setAttribute("href", e), e = Za.href), Za.setAttribute("href", e), {
            href: Za.href,
            protocol: Za.protocol ? Za.protocol.replace(/:$/, "") : "",
            host: Za.host,
            search: Za.search ? Za.search.replace(/^\?/, "") : "",
            hash: Za.hash ? Za.hash.replace(/^#/, "") : "",
            hostname: Za.hostname,
            port: Za.port,
            pathname: "/" === Za.pathname.charAt(0) ? Za.pathname : "/" + Za.pathname
        }
    }

    function cn(e) {
        return e = Z(e) ? sn(e) : e, e.protocol === _a.protocol && e.host === _a.host
    }

    function ln() {
        this.$get = $(e)
    }

    function fn(e) {
        function t(e) {
            try {
                return decodeURIComponent(e)
            } catch (t) {
                return e
            }
        }
        var n = e[0] || {},
            r = {},
            a = "";
        return function() {
            var e, i, o, u, s;
            if (e = n.cookie || "", e !== a)
                for (a = e, e = a.split("; "), r = {}, o = 0; o < e.length; o++) i = e[o], u = i.indexOf("="), u > 0 && (s = t(i.substring(0, u)), v(r[s]) && (r[s] = t(i.substring(u + 1))));
            return r
        }
    }

    function hn() {
        this.$get = fn
    }

    function pn(e) {
        function t(n, r) {
            if (y(n)) {
                var a = {};
                return i(n, function(e, n) {
                    a[n] = t(n, e)
                }), a
            }
            return e.factory(n + "Filter", r)
        }
        this.register = t, this.$get = ["$injector", function(e) {
            return function(t) {
                return e.get(t + "Filter")
            }
        }], t("currency", vn), t("date", kn), t("filter", dn), t("json", Mn), t("limitTo", Nn), t("lowercase", Ma), t("number", bn), t("orderBy", On), t("uppercase", Na)
    }

    function dn() {
        return function(e, t, n) {
            if (!a(e)) {
                if (null == e) return e;
                throw r("filter")("notarray", e)
            }
            var i;
            switch (mn(t)) {
                case "function":
                    break;
                case "boolean":
                case "null":
                case "number":
                case "string":
                    i = !0;
                case "object":
                    t = gn(t, n, i);
                    break;
                default:
                    return e
            }
            return Array.prototype.filter.call(e, t)
        }
    }

    function gn(e, t, n) {
        var r = y(e) && "$" in e;
        return !0 === t ? t = L : x(t) || (t = function(e, t) {
                return v(e) ? !1 : null === e || null === t ? e === t : y(t) || y(e) && !m(e) ? !1 : (e = Jn("" + e), t = Jn("" + t), -1 !== e.indexOf(t))
            }),
            function(a) {
                return r && !y(a) ? $n(a, e.$, t, !1) : $n(a, e, t, n)
            }
    }

    function $n(e, t, n, r, a) {
        var i = mn(e),
            o = mn(t);
        if ("string" === o && "!" === t.charAt(0)) return !$n(e, t.substring(1), n, r);
        if (or(e)) return e.some(function(e) {
            return $n(e, t, n, r)
        });
        switch (i) {
            case "object":
                var u;
                if (r) {
                    for (u in e)
                        if ("$" !== u.charAt(0) && $n(e[u], t, n, !0)) return !0;
                    return a ? !1 : $n(e, t, n, !1)
                }
                if ("object" === o) {
                    for (u in t)
                        if (a = t[u], !x(a) && !v(a) && (i = "$" === u, !$n(i ? e : e[u], a, n, i, i))) return !1;
                    return !0
                }
                return n(e, t);
            case "function":
                return !1;
            default:
                return n(e, t)
        }
    }

    function mn(e) {
        return null === e ? "null" : typeof e
    }

    function vn(e) {
        var t = e.NUMBER_FORMATS;
        return function(e, n, r) {
            return v(n) && (n = t.CURRENCY_SYM), v(r) && (r = t.PATTERNS[1].maxFrac), null == e ? e : Zn(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, r).replace(/\u00A4/g, n)
        }
    }

    function bn(e) {
        var t = e.NUMBER_FORMATS;
        return function(e, n) {
            return null == e ? e : Zn(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n)
        }
    }

    function yn(e) {
        var t, n, r, a, i, o = 0;
        for (-1 < (n = e.indexOf(xa)) && (e = e.replace(xa, "")), 0 < (r = e.search(/e/i)) ? (0 > n && (n = r), n += +e.slice(r + 1), e = e.substring(0, r)) : 0 > n && (n = e.length), r = 0; e.charAt(r) == Ea; r++);
        if (r == (i = e.length)) t = [0], n = 1;
        else {
            for (i--; e.charAt(i) == Ea;) i--;
            for (n -= r, t = [], a = 0; i >= r; r++, a++) t[a] = +e.charAt(r)
        }
        return n > Sa && (t = t.splice(0, Sa - 1), o = n - 1, n = 1), {
            d: t,
            e: o,
            i: n
        }
    }

    function wn(e, t, n, r) {
        var a = e.d,
            i = a.length - e.i;
        if (t = v(t) ? Math.min(Math.max(n, i), r) : +t, n = t + e.i, r = a[n], n > 0) a.splice(n);
        else {
            e.i = 1, a.length = n = t + 1;
            for (var o = 0; n > o; o++) a[o] = 0
        }
        for (r >= 5 && a[n - 1]++; t > i; i++) a.push(0);
        (t = a.reduceRight(function(e, t, n, r) {
            return t += e, r[n] = t % 10, Math.floor(t / 10)
        }, 0)) && (a.unshift(t), e.i++)
    }

    function Zn(e, t, n, r, a) {
        if (!Z(e) && !_(e) || isNaN(e)) return "";
        var i = !isFinite(e),
            o = !1,
            u = Math.abs(e) + "",
            s = "";
        if (i) s = "∞";
        else {
            for (o = yn(u), wn(o, a, t.minFrac, t.maxFrac), s = o.d, u = o.i, a = o.e, i = [], o = s.reduce(function(e, t) {
                    return e && !t
                }, !0); 0 > u;) s.unshift(0), u++;
            for (u > 0 ? i = s.splice(u) : (i = s, s = [0]), u = [], s.length > t.lgSize && u.unshift(s.splice(-t.lgSize).join("")); s.length > t.gSize;) u.unshift(s.splice(-t.gSize).join(""));
            s.length && u.unshift(s.join("")), s = u.join(n), i.length && (s += r + i.join("")), a && (s += "e+" + a)
        }
        return 0 > e && !o ? t.negPre + s + t.negSuf : t.posPre + s + t.posSuf
    }

    function _n(e, t, n) {
        var r = "";
        for (0 > e && (r = "-", e = -e), e = "" + e; e.length < t;) e = Ea + e;
        return n && (e = e.substr(e.length - t)), r + e
    }

    function Sn(e, t, n, r) {
        return n = n || 0,
            function(a) {
                return a = a["get" + e](), (n > 0 || a > -n) && (a += n), 0 === a && -12 == n && (a = 12), _n(a, t, r)
            }
    }

    function xn(e, t) {
        return function(n, r) {
            var a = n["get" + e](),
                i = Yn(t ? "SHORT" + e : e);
            return r[i][a]
        }
    }

    function En(e) {
        var t = new Date(e, 0, 1).getDay();
        return new Date(e, 0, (4 >= t ? 5 : 12) - t)
    }

    function Cn(e) {
        return function(t) {
            var n = En(t.getFullYear());
            return t = +new Date(t.getFullYear(), t.getMonth(), t.getDate() + (4 - t.getDay())) - +n, t = 1 + Math.round(t / 6048e5), _n(t, e)
        }
    }

    function An(e, t) {
        return 0 >= e.getFullYear() ? t.ERAS[0] : t.ERAS[1]
    }

    function kn(e) {
        function t(e) {
            var t;
            if (t = e.match(n)) {
                e = new Date(0);
                var r = 0,
                    a = 0,
                    i = t[8] ? e.setUTCFullYear : e.setFullYear,
                    o = t[8] ? e.setUTCHours : e.setHours;
                t[9] && (r = h(t[9] + t[10]), a = h(t[9] + t[11])), i.call(e, h(t[1]), h(t[2]) - 1, h(t[3])), r = h(t[4] || 0) - r, a = h(t[5] || 0) - a, i = h(t[6] || 0), t = Math.round(1e3 * parseFloat("0." + (t[7] || 0))), o.call(e, r, a, i, t)
            }
            return e
        }
        var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(n, r, a) {
            var o, u, s = "",
                c = [];
            if (r = r || "mediumDate", r = e.DATETIME_FORMATS[r] || r, Z(n) && (n = ka.test(n) ? h(n) : t(n)), _(n) && (n = new Date(n)), !S(n) || !isFinite(n.getTime())) return n;
            for (; r;)(u = Aa.exec(r)) ? (c = U(c, u, 1), r = c.pop()) : (c.push(r), r = null);
            var l = n.getTimezoneOffset();
            return a && (l = F(a, n.getTimezoneOffset()), n = G(n, a, !0)), i(c, function(t) {
                o = Ca[t], s += o ? o(n, e.DATETIME_FORMATS, l) : "''" === t ? "'" : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), s
        }
    }

    function Mn() {
        return function(e, t) {
            return v(t) && (t = 2), D(e, t)
        }
    }

    function Nn() {
        return function(e, t, n) {
            return t = 1 / 0 === Math.abs(Number(t)) ? Number(t) : h(t), isNaN(t) ? e : (_(e) && (e = e.toString()), or(e) || Z(e) ? (n = !n || isNaN(n) ? 0 : h(n), n = 0 > n ? Math.max(0, e.length + n) : n, t >= 0 ? e.slice(n, n + t) : 0 === n ? e.slice(t, e.length) : e.slice(Math.max(0, n + t), n)) : e)
        }
    }

    function On(e) {
        function t(t, n) {
            return n = n ? -1 : 1, t.map(function(t) {
                var r = 1,
                    a = g;
                if (x(t)) a = t;
                else if (Z(t) && (("+" == t.charAt(0) || "-" == t.charAt(0)) && (r = "-" == t.charAt(0) ? -1 : 1, t = t.substring(1)), "" !== t && (a = e(t), a.constant))) var i = a(),
                    a = function(e) {
                        return e[i]
                    };
                return {
                    get: a,
                    descending: r * n
                }
            })
        }

        function n(e) {
            switch (typeof e) {
                case "number":
                case "boolean":
                case "string":
                    return !0;
                default:
                    return !1
            }
        }
        return function(e, i, o) {
            if (null == e) return e;
            if (!a(e)) throw r("orderBy")("notarray", e);
            or(i) || (i = [i]), 0 === i.length && (i = ["+"]);
            var u = t(i, o);
            return u.push({
                get: function() {
                    return {}
                },
                descending: o ? -1 : 1
            }), e = Array.prototype.map.call(e, function(e, t) {
                return {
                    value: e,
                    predicateValues: u.map(function(r) {
                        var a = r.get(e);
                        return r = typeof a, null === a ? (r = "string", a = "null") : "string" === r ? a = a.toLowerCase() : "object" === r && ("function" == typeof a.valueOf && (a = a.valueOf(), n(a)) || m(a) && (a = a.toString(), n(a)) || (a = t)), {
                            value: a,
                            type: r
                        }
                    })
                }
            }), e.sort(function(e, t) {
                for (var n = 0, r = 0, a = u.length; a > r; ++r) {
                    var n = e.predicateValues[r],
                        i = t.predicateValues[r],
                        o = 0;
                    if (n.type === i.type ? n.value !== i.value && (o = n.value < i.value ? -1 : 1) : o = n.type < i.type ? -1 : 1, n = o * u[r].descending) break
                }
                return n
            }), e = e.map(function(e) {
                return e.value
            })
        }
    }

    function Tn(e) {
        return x(e) && (e = {
            link: e
        }), e.restrict = e.restrict || "AC", $(e)
    }

    function In(e, t, r, a, o) {
        var u = this,
            s = [];
        u.$error = {}, u.$$success = {}, u.$pending = n, u.$name = o(t.name || t.ngForm || "")(r), u.$dirty = !1, u.$pristine = !0, u.$valid = !0, u.$invalid = !1, u.$submitted = !1, u.$$parentForm = Ia, u.$rollbackViewValue = function() {
            i(s, function(e) {
                e.$rollbackViewValue()
            })
        }, u.$commitViewValue = function() {
            i(s, function(e) {
                e.$commitViewValue()
            })
        }, u.$addControl = function(e) {
            oe(e.$name, "input"), s.push(e), e.$name && (u[e.$name] = e), e.$$parentForm = u
        }, u.$$renameControl = function(e, t) {
            var n = e.$name;
            u[n] === e && delete u[n], u[t] = e, e.$name = t
        }, u.$removeControl = function(e) {
            e.$name && u[e.$name] === e && delete u[e.$name], i(u.$pending, function(t, n) {
                u.$setValidity(n, null, e)
            }), i(u.$error, function(t, n) {
                u.$setValidity(n, null, e)
            }), i(u.$$success, function(t, n) {
                u.$setValidity(n, null, e)
            }), I(s, e), e.$$parentForm = Ia
        }, Bn({
            ctrl: this,
            $element: e,
            set: function(e, t, n) {
                var r = e[t];
                r ? -1 === r.indexOf(n) && r.push(n) : e[t] = [n]
            },
            unset: function(e, t, n) {
                var r = e[t];
                r && (I(r, n), 0 === r.length && delete e[t])
            },
            $animate: a
        }), u.$setDirty = function() {
            a.removeClass(e, gi), a.addClass(e, $i), u.$dirty = !0, u.$pristine = !1, u.$$parentForm.$setDirty()
        }, u.$setPristine = function() {
            a.setClass(e, gi, $i + " ng-submitted"), u.$dirty = !1, u.$pristine = !0, u.$submitted = !1, i(s, function(e) {
                e.$setPristine()
            })
        }, u.$setUntouched = function() {
            i(s, function(e) {
                e.$setUntouched()
            })
        }, u.$setSubmitted = function() {
            a.addClass(e, "ng-submitted"), u.$submitted = !0, u.$$parentForm.$setSubmitted()
        }
    }

    function jn(e) {
        e.$formatters.push(function(t) {
            return e.$isEmpty(t) ? t : t.toString()
        })
    }

    function Pn(e, t, n, r, a, i) {
        var o = Jn(t[0].type);
        if (!a.android) {
            var u = !1;
            t.on("compositionstart", function(e) {
                u = !0
            }), t.on("compositionend", function() {
                u = !1, s()
            })
        }
        var s = function(e) {
            if (c && (i.defer.cancel(c), c = null), !u) {
                var a = t.val();
                e = e && e.type, "password" === o || n.ngTrim && "false" === n.ngTrim || (a = sr(a)), (r.$viewValue !== a || "" === a && r.$$hasNativeValidators) && r.$setViewValue(a, e)
            }
        };
        if (a.hasEvent("input")) t.on("input", s);
        else {
            var c, l = function(e, t, n) {
                c || (c = i.defer(function() {
                    c = null, t && t.value === n || s(e)
                }))
            };
            t.on("keydown", function(e) {
                var t = e.keyCode;
                91 === t || t > 15 && 19 > t || t >= 37 && 40 >= t || l(e, this, this.value)
            }), a.hasEvent("paste") && t.on("paste cut", l)
        }
        t.on("change", s), r.$render = function() {
            var e = r.$isEmpty(r.$viewValue) ? "" : r.$viewValue;
            t.val() !== e && t.val(e)
        }
    }

    function Ln(e, t) {
        return function(n, r) {
            var a, o;
            if (S(n)) return n;
            if (Z(n)) {
                if ('"' == n.charAt(0) && '"' == n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), Ua.test(n)) return new Date(n);
                if (e.lastIndex = 0, a = e.exec(n)) return a.shift(), o = r ? {
                    yyyy: r.getFullYear(),
                    MM: r.getMonth() + 1,
                    dd: r.getDate(),
                    HH: r.getHours(),
                    mm: r.getMinutes(),
                    ss: r.getSeconds(),
                    sss: r.getMilliseconds() / 1e3
                } : {
                    yyyy: 1970,
                    MM: 1,
                    dd: 1,
                    HH: 0,
                    mm: 0,
                    ss: 0,
                    sss: 0
                }, i(a, function(e, n) {
                    n < t.length && (o[t[n]] = +e)
                }), new Date(o.yyyy, o.MM - 1, o.dd, o.HH, o.mm, o.ss || 0, 1e3 * o.sss || 0)
            }
            return NaN
        }
    }

    function Un(e, t, r, a) {
        return function(i, o, u, s, c, l, f) {
            function h(e) {
                return e && !(e.getTime && e.getTime() !== e.getTime())
            }

            function p(e) {
                return b(e) && !S(e) ? r(e) || n : e
            }
            Vn(i, o, u, s), Pn(i, o, u, s, c, l);
            var d, g = s && s.$options && s.$options.timezone;
            if (s.$$parserName = e, s.$parsers.push(function(e) {
                    return s.$isEmpty(e) ? null : t.test(e) ? (e = r(e, d), g && (e = G(e, g)), e) : n
                }), s.$formatters.push(function(e) {
                    if (e && !S(e)) throw vi("datefmt", e);
                    return h(e) ? ((d = e) && g && (d = G(d, g, !0)), f("date")(e, a, g)) : (d = null, "")
                }), b(u.min) || u.ngMin) {
                var $;
                s.$validators.min = function(e) {
                    return !h(e) || v($) || r(e) >= $
                }, u.$observe("min", function(e) {
                    $ = p(e), s.$validate()
                })
            }
            if (b(u.max) || u.ngMax) {
                var m;
                s.$validators.max = function(e) {
                    return !h(e) || v(m) || r(e) <= m
                }, u.$observe("max", function(e) {
                    m = p(e), s.$validate()
                })
            }
        }
    }

    function Vn(e, t, r, a) {
        (a.$$hasNativeValidators = y(t[0].validity)) && a.$parsers.push(function(e) {
            var r = t.prop("validity") || {};
            return r.badInput || r.typeMismatch ? n : e
        })
    }

    function Rn(e, t, n, r, a) {
        if (b(r)) {
            if (e = e(r), !e.constant) throw vi("constexpr", n, r);
            return e(t)
        }
        return a
    }

    function Dn(e, t) {
        return e = "ngClass" + e, ["$animate", function(n) {
            function r(e, t) {
                var n = [],
                    r = 0;
                e: for (; r < e.length; r++) {
                    for (var a = e[r], i = 0; i < t.length; i++)
                        if (a == t[i]) continue e;
                    n.push(a)
                }
                return n
            }

            function a(e) {
                var t = [];
                return or(e) ? (i(e, function(e) {
                    t = t.concat(a(e))
                }), t) : Z(e) ? e.split(" ") : y(e) ? (i(e, function(e, n) {
                    e && (t = t.concat(n.split(" ")))
                }), t) : e
            }
            return {
                restrict: "AC",
                link: function(o, u, s) {
                    function c(e, t) {
                        var n = u.data("$classCounts") || ce(),
                            r = [];
                        return i(e, function(e) {
                            (t > 0 || n[e]) && (n[e] = (n[e] || 0) + t, n[e] === +(t > 0) && r.push(e))
                        }), u.data("$classCounts", n), r.join(" ")
                    }

                    function l(e) {
                        if (!0 === t || o.$index % 2 === t) {
                            var i = a(e || []);
                            if (f) {
                                if (!L(e, f)) {
                                    var l = a(f),
                                        h = r(i, l),
                                        i = r(l, i),
                                        h = c(h, 1),
                                        i = c(i, -1);
                                    h && h.length && n.addClass(u, h), i && i.length && n.removeClass(u, i)
                                }
                            } else {
                                var h = c(i, 1);
                                s.$addClass(h)
                            }
                        }
                        f = P(e)
                    }
                    var f;
                    o.$watch(s[e], l, !0), s.$observe("class", function(t) {
                        l(o.$eval(s[e]))
                    }), "ngClass" !== e && o.$watch("$index", function(n, r) {
                        var i = 1 & n;
                        if (i !== (1 & r)) {
                            var u = a(o.$eval(s[e]));
                            i === t ? (i = c(u, 1), s.$addClass(i)) : (i = c(u, -1), s.$removeClass(i))
                        }
                    })
                }
            }
        }]
    }

    function Bn(e) {
        function t(e, t) {
            t && !o[e] ? (c.addClass(i, e), o[e] = !0) : !t && o[e] && (c.removeClass(i, e), o[e] = !1)
        }

        function r(e, n) {
            e = e ? "-" + ne(e, "-") : "", t(pi + e, !0 === n), t(di + e, !1 === n)
        }
        var a = e.ctrl,
            i = e.$element,
            o = {},
            u = e.set,
            s = e.unset,
            c = e.$animate;
        o[di] = !(o[pi] = i.hasClass(pi)), a.$setValidity = function(e, i, o) {
            v(i) ? (a.$pending || (a.$pending = {}), u(a.$pending, e, o)) : (a.$pending && s(a.$pending, e, o), Fn(a.$pending) && (a.$pending = n)), k(i) ? i ? (s(a.$error, e, o), u(a.$$success, e, o)) : (u(a.$error, e, o), s(a.$$success, e, o)) : (s(a.$error, e, o), s(a.$$success, e, o)), a.$pending ? (t(mi, !0), a.$valid = a.$invalid = n, r("", null)) : (t(mi, !1), a.$valid = Fn(a.$error), a.$invalid = !a.$valid, r("", a.$valid)), i = a.$pending && a.$pending[e] ? n : a.$error[e] ? !1 : a.$$success[e] ? !0 : null, r(e, i), a.$$parentForm.$setValidity(e, i, a)
        }
    }

    function Fn(e) {
        if (e)
            for (var t in e)
                if (e.hasOwnProperty(t)) return !1;
        return !0
    }
    var Gn, zn, Hn, qn, Kn = /^\/(.+)\/([a-z]*)$/,
        Wn = Object.prototype.hasOwnProperty,
        Jn = function(e) {
            return Z(e) ? e.toLowerCase() : e
        },
        Yn = function(e) {
            return Z(e) ? e.toUpperCase() : e
        },
        Xn = [].slice,
        Qn = [].splice,
        er = [].push,
        tr = Object.prototype.toString,
        nr = Object.getPrototypeOf,
        rr = r("ng"),
        ar = e.angular || (e.angular = {}),
        ir = 0;
    Gn = t.documentMode, d.$inject = [], g.$inject = [];
    var or = Array.isArray,
        ur = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,
        sr = function(e) {
            return Z(e) ? e.trim() : e
        },
        cr = function(e) {
            return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        },
        lr = function() {
            if (!b(lr.rules)) {
                var e = t.querySelector("[ng-csp]") || t.querySelector("[data-ng-csp]");
                if (e) {
                    var n = e.getAttribute("ng-csp") || e.getAttribute("data-ng-csp");
                    lr.rules = {
                        noUnsafeEval: !n || -1 !== n.indexOf("no-unsafe-eval"),
                        noInlineStyle: !n || -1 !== n.indexOf("no-inline-style")
                    }
                } else {
                    e = lr;
                    try {
                        new Function(""), n = !1
                    } catch (r) {
                        n = !0
                    }
                    e.rules = {
                        noUnsafeEval: n,
                        noInlineStyle: !1
                    }
                }
            }
            return lr.rules
        },
        fr = function() {
            if (b(fr.name_)) return fr.name_;
            var e, n, r, a, i = hr.length;
            for (n = 0; i > n; ++n)
                if (r = hr[n], e = t.querySelector("[" + r.replace(":", "\\:") + "jq]")) {
                    a = e.getAttribute(r + "jq");
                    break
                }
            return fr.name_ = a
        },
        hr = ["ng-", "data-ng-", "ng:", "x-ng-"],
        pr = /[A-Z]/g,
        dr = !1,
        gr = 3,
        $r = {
            full: "1.5.0-rc.2",
            major: 1,
            minor: 5,
            dot: 0,
            codeName: "controller-requisition"
        };
    $e.expando = "ng339";
    var mr = $e.cache = {},
        vr = 1;
    $e._data = function(e) {
        return this.cache[e[this.expando]] || {}
    };
    var br = /([\:\-\_]+(.))/g,
        yr = /^moz([A-Z])/,
        wr = {
            mouseleave: "mouseout",
            mouseenter: "mouseover"
        },
        Zr = r("jqLite"),
        _r = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Sr = /<|&#?\w+;/,
        xr = /<([\w:-]+)/,
        Er = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Cr = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Cr.optgroup = Cr.option, Cr.tbody = Cr.tfoot = Cr.colgroup = Cr.caption = Cr.thead, Cr.th = Cr.td;
    var Ar = Node.prototype.contains || function(e) {
            return !!(16 & this.compareDocumentPosition(e))
        },
        kr = $e.prototype = {
            ready: function(n) {
                function r() {
                    a || (a = !0, n())
                }
                var a = !1;
                "complete" === t.readyState ? setTimeout(r) : (this.on("DOMContentLoaded", r), $e(e).on("load", r))
            },
            toString: function() {
                var e = [];
                return i(this, function(t) {
                    e.push("" + t)
                }), "[" + e.join(", ") + "]"
            },
            eq: function(e) {
                return zn(e >= 0 ? this[e] : this[this.length + e])
            },
            length: 0,
            push: er,
            sort: [].sort,
            splice: [].splice
        },
        Mr = {};
    i("multiple selected checked disabled readOnly required open".split(" "), function(e) {
        Mr[Jn(e)] = e
    });
    var Nr = {};
    i("input select option textarea button form details".split(" "), function(e) {
        Nr[e] = !0
    });
    var Or = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern"
    };
    i({
        data: Ze,
        removeData: ye,
        hasData: function(e) {
            for (var t in mr[e.ng339]) return !0;
            return !1
        },
        cleanData: function(e) {
            for (var t = 0, n = e.length; n > t; t++) ye(e[t])
        }
    }, function(e, t) {
        $e[t] = e
    }), i({
        data: Ze,
        inheritedData: Ae,
        scope: function(e) {
            return zn.data(e, "$scope") || Ae(e.parentNode || e, ["$isolateScope", "$scope"])
        },
        isolateScope: function(e) {
            return zn.data(e, "$isolateScope") || zn.data(e, "$isolateScopeNoTemplate")
        },
        controller: Ce,
        injector: function(e) {
            return Ae(e, "$injector")
        },
        removeAttr: function(e, t) {
            e.removeAttribute(t)
        },
        hasClass: _e,
        css: function(e, t, n) {
            return t = he(t), b(n) ? void(e.style[t] = n) : e.style[t]
        },
        attr: function(e, t, r) {
            var a = e.nodeType;
            if (a !== gr && 2 !== a && 8 !== a)
                if (a = Jn(t), Mr[a]) {
                    if (!b(r)) return e[t] || (e.attributes.getNamedItem(t) || d).specified ? a : n;
                    r ? (e[t] = !0, e.setAttribute(t, a)) : (e[t] = !1, e.removeAttribute(a))
                } else if (b(r)) e.setAttribute(t, r);
            else if (e.getAttribute) return e = e.getAttribute(t, 2), null === e ? n : e
        },
        prop: function(e, t, n) {
            return b(n) ? void(e[t] = n) : e[t]
        },
        text: function() {
            function e(e, t) {
                if (v(t)) {
                    var n = e.nodeType;
                    return 1 === n || n === gr ? e.textContent : ""
                }
                e.textContent = t
            }
            return e.$dv = "", e
        }(),
        val: function(e, t) {
            if (v(t)) {
                if (e.multiple && "select" === T(e)) {
                    var n = [];
                    return i(e.options, function(e) {
                        e.selected && n.push(e.value || e.text)
                    }), 0 === n.length ? null : n
                }
                return e.value
            }
            e.value = t
        },
        html: function(e, t) {
            return v(t) ? e.innerHTML : (ve(e, !0), void(e.innerHTML = t))
        },
        empty: ke
    }, function(e, t) {
        $e.prototype[t] = function(t, n) {
            var r, a, i = this.length;
            if (e !== ke && v(2 == e.length && e !== _e && e !== Ce ? t : n)) {
                if (y(t)) {
                    for (r = 0; i > r; r++)
                        if (e === Ze) e(this[r], t);
                        else
                            for (a in t) e(this[r], a, t[a]);
                    return this
                }
                for (r = e.$dv, i = v(r) ? Math.min(i, 1) : i, a = 0; i > a; a++) {
                    var o = e(this[a], t, n);
                    r = r ? r + o : o
                }
                return r
            }
            for (r = 0; i > r; r++) e(this[r], t, n);
            return this
        }
    }), i({
        removeData: ye,
        on: function(e, t, r, a) {
            if (b(a)) throw Zr("onargs");
            if (pe(e)) {
                a = we(e, !0);
                var i = a.events,
                    o = a.handle;
                o || (o = a.handle = Te(e, i)), a = 0 <= t.indexOf(" ") ? t.split(" ") : [t];
                for (var u = a.length, s = function(t, n, a) {
                        var u = i[t];
                        u || (u = i[t] = [], u.specialHandlerWrapper = n, "$destroy" === t || a || e.addEventListener(t, o, !1)), u.push(r)
                    }; u--;) t = a[u], wr[t] ? (s(wr[t], je), s(t, n, !0)) : s(t)
            }
        },
        off: be,
        one: function(e, t, n) {
            e = zn(e), e.on(t, function r() {
                e.off(t, n), e.off(t, r)
            }), e.on(t, n)
        },
        replaceWith: function(e, t) {
            var n, r = e.parentNode;
            ve(e), i(new $e(t), function(t) {
                n ? r.insertBefore(t, n.nextSibling) : r.replaceChild(t, e), n = t
            })
        },
        children: function(e) {
            var t = [];
            return i(e.childNodes, function(e) {
                1 === e.nodeType && t.push(e)
            }), t
        },
        contents: function(e) {
            return e.contentDocument || e.childNodes || []
        },
        append: function(e, t) {
            var n = e.nodeType;
            if (1 === n || 11 === n) {
                t = new $e(t);
                for (var n = 0, r = t.length; r > n; n++) e.appendChild(t[n])
            }
        },
        prepend: function(e, t) {
            if (1 === e.nodeType) {
                var n = e.firstChild;
                i(new $e(t), function(t) {
                    e.insertBefore(t, n)
                })
            }
        },
        wrap: function(e, t) {
            ge(e, zn(t).eq(0).clone()[0])
        },
        remove: Me,
        detach: function(e) {
            Me(e, !0)
        },
        after: function(e, t) {
            var n = e,
                r = e.parentNode;
            t = new $e(t);
            for (var a = 0, i = t.length; i > a; a++) {
                var o = t[a];
                r.insertBefore(o, n.nextSibling), n = o
            }
        },
        addClass: xe,
        removeClass: Se,
        toggleClass: function(e, t, n) {
            t && i(t.split(" "), function(t) {
                var r = n;
                v(r) && (r = !_e(e, t)), (r ? xe : Se)(e, t)
            })
        },
        parent: function(e) {
            return (e = e.parentNode) && 11 !== e.nodeType ? e : null
        },
        next: function(e) {
            return e.nextElementSibling
        },
        find: function(e, t) {
            return e.getElementsByTagName ? e.getElementsByTagName(t) : []
        },
        clone: me,
        triggerHandler: function(e, t, n) {
            var r, a, o = t.type || t,
                u = we(e);
            (u = (u = u && u.events) && u[o]) && (r = {
                preventDefault: function() {
                    this.defaultPrevented = !0
                },
                isDefaultPrevented: function() {
                    return !0 === this.defaultPrevented
                },
                stopImmediatePropagation: function() {
                    this.immediatePropagationStopped = !0
                },
                isImmediatePropagationStopped: function() {
                    return !0 === this.immediatePropagationStopped
                },
                stopPropagation: d,
                type: o,
                target: e
            }, t.type && (r = l(r, t)), t = P(u), a = n ? [r].concat(n) : [r], i(t, function(t) {
                r.isImmediatePropagationStopped() || t.apply(e, a)
            }))
        }
    }, function(e, t) {
        $e.prototype[t] = function(t, n, r) {
            for (var a, i = 0, o = this.length; o > i; i++) v(a) ? (a = e(this[i], t, n, r), b(a) && (a = zn(a))) : Ee(a, e(this[i], t, n, r));
            return b(a) ? a : this
        }, $e.prototype.bind = $e.prototype.on, $e.prototype.unbind = $e.prototype.off
    }), Ue.prototype = {
        put: function(e, t) {
            this[Le(e, this.nextUid)] = t
        },
        get: function(e) {
            return this[Le(e, this.nextUid)]
        },
        remove: function(e) {
            var t = this[e = Le(e, this.nextUid)];
            return delete this[e], t
        }
    };
    var Tr = [function() {
            this.$get = [function() {
                return Ue
            }]
        }],
        Ir = /^([^\(]+?)=>/,
        jr = /^[^\(]*\(\s*([^\)]*)\)/m,
        Pr = /,/,
        Lr = /^\s*(_?)(\S+?)\1\s*$/,
        Ur = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
        Vr = r("$injector");
    De.$$annotate = function(e, t, n) {
        var r;
        if ("function" == typeof e) {
            if (!(r = e.$inject)) {
                if (r = [], e.length) {
                    if (t) throw Z(n) && n || (n = e.name || Re(e)), Vr("strictdi", n);
                    t = Ve(e), i(t[1].split(Pr), function(e) {
                        e.replace(Lr, function(e, t, n) {
                            r.push(n)
                        })
                    })
                }
                e.$inject = r
            }
        } else or(e) ? (t = e.length - 1, ie(e[t], "fn"), r = e.slice(0, t)) : ie(e, "fn", !0);
        return r
    };
    var Rr = r("$animate"),
        Dr = function() {
            this.$get = function() {}
        },
        Br = function() {
            var e = new Ue,
                t = [];
            this.$get = ["$$AnimateRunner", "$rootScope", function(n, r) {
                function a(e, t, n) {
                    var r = !1;
                    return t && (t = Z(t) ? t.split(" ") : or(t) ? t : [], i(t, function(t) {
                        t && (r = !0, e[t] = n)
                    })), r
                }

                function o() {
                    i(t, function(t) {
                        var n = e.get(t);
                        if (n) {
                            var r = Ge(t.attr("class")),
                                a = "",
                                o = "";
                            i(n, function(e, t) {
                                e !== !!r[t] && (e ? a += (a.length ? " " : "") + t : o += (o.length ? " " : "") + t)
                            }), i(t, function(e) {
                                a && xe(e, a), o && Se(e, o)
                            }), e.remove(t)
                        }
                    }), t.length = 0
                }
                return {
                    enabled: d,
                    on: d,
                    off: d,
                    pin: d,
                    push: function(i, u, s, c) {
                        return c && c(), s = s || {}, s.from && i.css(s.from), s.to && i.css(s.to), (s.addClass || s.removeClass) && (u = s.addClass,
                            c = s.removeClass, s = e.get(i) || {}, u = a(s, u, !0), c = a(s, c, !1), (u || c) && (e.put(i, s), t.push(i), 1 === t.length && r.$$postDigest(o))), i = new n, i.complete(), i
                    }
                }
            }]
        },
        Fr = ["$provide", function(e) {
            var t = this;
            this.$$registeredAnimations = Object.create(null), this.register = function(n, r) {
                if (n && "." !== n.charAt(0)) throw Rr("notcsel", n);
                var a = n + "-animation";
                t.$$registeredAnimations[n.substr(1)] = a, e.factory(a, r)
            }, this.classNameFilter = function(e) {
                if (1 === arguments.length && (this.$$classNameFilter = e instanceof RegExp ? e : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString())) throw Rr("nongcls", "ng-animate");
                return this.$$classNameFilter
            }, this.$get = ["$$animateQueue", function(e) {
                function t(e, t, n) {
                    if (n) {
                        var r;
                        e: {
                            for (r = 0; r < n.length; r++) {
                                var a = n[r];
                                if (1 === a.nodeType) {
                                    r = a;
                                    break e
                                }
                            }
                            r = void 0
                        }!r || r.parentNode || r.previousElementSibling || (n = null)
                    }
                    n ? n.after(e) : t.prepend(e)
                }
                return {
                    on: e.on,
                    off: e.off,
                    pin: e.pin,
                    enabled: e.enabled,
                    cancel: function(e) {
                        e.end && e.end()
                    },
                    enter: function(n, r, a, i) {
                        return r = r && zn(r), a = a && zn(a), r = r || a.parent(), t(n, r, a), e.push(n, "enter", ze(i))
                    },
                    move: function(n, r, a, i) {
                        return r = r && zn(r), a = a && zn(a), r = r || a.parent(), t(n, r, a), e.push(n, "move", ze(i))
                    },
                    leave: function(t, n) {
                        return e.push(t, "leave", ze(n), function() {
                            t.remove()
                        })
                    },
                    addClass: function(t, n, r) {
                        return r = ze(r), r.addClass = Fe(r.addclass, n), e.push(t, "addClass", r)
                    },
                    removeClass: function(t, n, r) {
                        return r = ze(r), r.removeClass = Fe(r.removeClass, n), e.push(t, "removeClass", r)
                    },
                    setClass: function(t, n, r, a) {
                        return a = ze(a), a.addClass = Fe(a.addClass, n), a.removeClass = Fe(a.removeClass, r), e.push(t, "setClass", a)
                    },
                    animate: function(t, n, r, a, i) {
                        return i = ze(i), i.from = i.from ? l(i.from, n) : n, i.to = i.to ? l(i.to, r) : r, i.tempClasses = Fe(i.tempClasses, a || "ng-inline-animate"), e.push(t, "animate", i)
                    }
                }
            }]
        }],
        Gr = function() {
            this.$get = ["$$rAF", function(e) {
                function t(t) {
                    n.push(t), 1 < n.length || e(function() {
                        for (var e = 0; e < n.length; e++) n[e]();
                        n = []
                    })
                }
                var n = [];
                return function() {
                    var e = !1;
                    return t(function() {
                            e = !0
                        }),
                        function(n) {
                            e ? n() : t(n)
                        }
                }
            }]
        },
        zr = function() {
            this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$document", "$timeout", function(e, t, n, r, a) {
                function o(e) {
                    this.setHost(e);
                    var t = n();
                    this._doneCallbacks = [], this._tick = function(e) {
                        var n = r[0];
                        n && n.hidden ? a(e, 0, !1) : t(e)
                    }, this._state = 0
                }
                return o.chain = function(e, t) {
                    function n() {
                        r === e.length ? t(!0) : e[r](function(e) {
                            !1 === e ? t(!1) : (r++, n())
                        })
                    }
                    var r = 0;
                    n()
                }, o.all = function(e, t) {
                    function n(n) {
                        a = a && n, ++r === e.length && t(a)
                    }
                    var r = 0,
                        a = !0;
                    i(e, function(e) {
                        e.done(n)
                    })
                }, o.prototype = {
                    setHost: function(e) {
                        this.host = e || {}
                    },
                    done: function(e) {
                        2 === this._state ? e() : this._doneCallbacks.push(e)
                    },
                    progress: d,
                    getPromise: function() {
                        if (!this.promise) {
                            var t = this;
                            this.promise = e(function(e, n) {
                                t.done(function(t) {
                                    !1 === t ? n() : e()
                                })
                            })
                        }
                        return this.promise
                    },
                    then: function(e, t) {
                        return this.getPromise().then(e, t)
                    },
                    "catch": function(e) {
                        return this.getPromise()["catch"](e)
                    },
                    "finally": function(e) {
                        return this.getPromise()["finally"](e)
                    },
                    pause: function() {
                        this.host.pause && this.host.pause()
                    },
                    resume: function() {
                        this.host.resume && this.host.resume()
                    },
                    end: function() {
                        this.host.end && this.host.end(), this._resolve(!0)
                    },
                    cancel: function() {
                        this.host.cancel && this.host.cancel(), this._resolve(!1)
                    },
                    complete: function(e) {
                        var t = this;
                        0 === t._state && (t._state = 1, t._tick(function() {
                            t._resolve(e)
                        }))
                    },
                    _resolve: function(e) {
                        2 !== this._state && (i(this._doneCallbacks, function(t) {
                            t(e)
                        }), this._doneCallbacks.length = 0, this._state = 2)
                    }
                }, o
            }]
        },
        Hr = function() {
            this.$get = ["$$rAF", "$q", "$$AnimateRunner", function(e, t, n) {
                return function(t, r) {
                    function a() {
                        return e(function() {
                            i.addClass && (t.addClass(i.addClass), i.addClass = null), i.removeClass && (t.removeClass(i.removeClass), i.removeClass = null), i.to && (t.css(i.to), i.to = null), o || u.complete(), o = !0
                        }), u
                    }
                    var i = r || {};
                    i.$$prepared || (i = j(i)), i.cleanupStyles && (i.from = i.to = null), i.from && (t.css(i.from), i.from = null);
                    var o, u = new n;
                    return {
                        start: a,
                        end: a
                    }
                }
            }]
        },
        qr = r("$compile");
    Je.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Kr = /^((?:x|data)[\:\-_])/i,
        Wr = r("$controller"),
        Jr = /^(\S+)(\s+as\s+([\w$]+))?$/,
        Yr = function() {
            this.$get = ["$document", function(e) {
                return function(t) {
                    return t ? !t.nodeType && t instanceof zn && (t = t[0]) : t = e[0].body, t.offsetWidth + 1
                }
            }]
        },
        Xr = "application/json",
        Qr = {
            "Content-Type": Xr + ";charset=utf-8"
        },
        ea = /^\[|^\{(?!\{)/,
        ta = {
            "[": /]$/,
            "{": /}$/
        },
        na = /^\)\]\}',?\n/,
        ra = r("$http"),
        aa = function(e) {
            return function() {
                throw ra("legacy", e)
            }
        },
        ia = ar.$interpolateMinErr = r("$interpolate");
    ia.throwNoconcat = function(e) {
        throw ia("noconcat", e)
    }, ia.interr = function(e, t) {
        return ia("interr", e, t.toString())
    };
    var oa = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
        ua = {
            http: 80,
            https: 443,
            ftp: 21
        },
        sa = r("$location"),
        ca = {
            $$html5: !1,
            $$replace: !1,
            absUrl: Et("$$absUrl"),
            url: function(e) {
                if (v(e)) return this.$$url;
                var t = oa.exec(e);
                return (t[1] || "" === e) && this.path(decodeURIComponent(t[1])), (t[2] || t[1] || "" === e) && this.search(t[3] || ""), this.hash(t[5] || ""), this
            },
            protocol: Et("$$protocol"),
            host: Et("$$host"),
            port: Et("$$port"),
            path: Ct("$$path", function(e) {
                return e = null !== e ? e.toString() : "", "/" == e.charAt(0) ? e : "/" + e
            }),
            search: function(e, t) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (Z(e) || _(e)) e = e.toString(), this.$$search = q(e);
                        else {
                            if (!y(e)) throw sa("isrcharg");
                            e = j(e, {}), i(e, function(t, n) {
                                null == t && delete e[n]
                            }), this.$$search = e
                        }
                        break;
                    default:
                        v(t) || null === t ? delete this.$$search[e] : this.$$search[e] = t
                }
                return this.$$compose(), this
            },
            hash: Ct("$$hash", function(e) {
                return null !== e ? e.toString() : ""
            }),
            replace: function() {
                return this.$$replace = !0, this
            }
        };
    i([xt, St, _t], function(e) {
        e.prototype = Object.create(ca), e.prototype.state = function(t) {
            if (!arguments.length) return this.$$state;
            if (e !== _t || !this.$$html5) throw sa("nostate");
            return this.$$state = v(t) ? null : t, this
        }
    });
    var la = r("$parse"),
        fa = Function.prototype.call,
        ha = Function.prototype.apply,
        pa = Function.prototype.bind,
        da = ce();
    i("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(e) {
        da[e] = !0
    });
    var ga = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "	",
            v: "\x0B",
            "'": "'",
            '"': '"'
        },
        $a = function(e) {
            this.options = e
        };
    $a.prototype = {
        constructor: $a,
        lex: function(e) {
            for (this.text = e, this.index = 0, this.tokens = []; this.index < this.text.length;)
                if (e = this.text.charAt(this.index), '"' === e || "'" === e) this.readString(e);
                else if (this.isNumber(e) || "." === e && this.isNumber(this.peek())) this.readNumber();
            else if (this.isIdent(e)) this.readIdent();
            else if (this.is(e, "(){}[].,;:?")) this.tokens.push({
                index: this.index,
                text: e
            }), this.index++;
            else if (this.isWhitespace(e)) this.index++;
            else {
                var t = e + this.peek(),
                    n = t + this.peek(2),
                    r = da[t],
                    a = da[n];
                da[e] || r || a ? (e = a ? n : r ? t : e, this.tokens.push({
                    index: this.index,
                    text: e,
                    operator: !0
                }), this.index += e.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
            }
            return this.tokens
        },
        is: function(e, t) {
            return -1 !== t.indexOf(e)
        },
        peek: function(e) {
            return e = e || 1, this.index + e < this.text.length ? this.text.charAt(this.index + e) : !1
        },
        isNumber: function(e) {
            return e >= "0" && "9" >= e && "string" == typeof e
        },
        isWhitespace: function(e) {
            return " " === e || "\r" === e || "	" === e || "\n" === e || "\x0B" === e || " " === e
        },
        isIdent: function(e) {
            return e >= "a" && "z" >= e || e >= "A" && "Z" >= e || "_" === e || "$" === e
        },
        isExpOperator: function(e) {
            return "-" === e || "+" === e || this.isNumber(e)
        },
        throwError: function(e, t, n) {
            throw n = n || this.index, t = b(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n, la("lexerr", e, t, this.text)
        },
        readNumber: function() {
            for (var e = "", t = this.index; this.index < this.text.length;) {
                var n = Jn(this.text.charAt(this.index));
                if ("." == n || this.isNumber(n)) e += n;
                else {
                    var r = this.peek();
                    if ("e" == n && this.isExpOperator(r)) e += n;
                    else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" == e.charAt(e.length - 1)) e += n;
                    else {
                        if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" != e.charAt(e.length - 1)) break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            this.tokens.push({
                index: t,
                text: e,
                constant: !0,
                value: Number(e)
            })
        },
        readIdent: function() {
            for (var e = this.index; this.index < this.text.length;) {
                var t = this.text.charAt(this.index);
                if (!this.isIdent(t) && !this.isNumber(t)) break;
                this.index++
            }
            this.tokens.push({
                index: e,
                text: this.text.slice(e, this.index),
                identifier: !0
            })
        },
        readString: function(e) {
            var t = this.index;
            this.index++;
            for (var n = "", r = e, a = !1; this.index < this.text.length;) {
                var i = this.text.charAt(this.index),
                    r = r + i;
                if (a) "u" === i ? (a = this.text.substring(this.index + 1, this.index + 5), a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"), this.index += 4, n += String.fromCharCode(parseInt(a, 16))) : n += ga[i] || i, a = !1;
                else if ("\\" === i) a = !0;
                else {
                    if (i === e) return this.index++, void this.tokens.push({
                        index: t,
                        text: r,
                        constant: !0,
                        value: n
                    });
                    n += i
                }
                this.index++
            }
            this.throwError("Unterminated quote", t)
        }
    };
    var ma = function(e, t) {
        this.lexer = e, this.options = t
    };
    ma.Program = "Program", ma.ExpressionStatement = "ExpressionStatement", ma.AssignmentExpression = "AssignmentExpression", ma.ConditionalExpression = "ConditionalExpression", ma.LogicalExpression = "LogicalExpression", ma.BinaryExpression = "BinaryExpression", ma.UnaryExpression = "UnaryExpression", ma.CallExpression = "CallExpression", ma.MemberExpression = "MemberExpression", ma.Identifier = "Identifier", ma.Literal = "Literal", ma.ArrayExpression = "ArrayExpression", ma.Property = "Property", ma.ObjectExpression = "ObjectExpression", ma.ThisExpression = "ThisExpression", ma.LocalsExpression = "LocalsExpression", ma.NGValueParameter = "NGValueParameter", ma.prototype = {
        ast: function(e) {
            return this.text = e, this.tokens = this.lexer.lex(e), e = this.program(), 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), e
        },
        program: function() {
            for (var e = [];;)
                if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && e.push(this.expressionStatement()), !this.expect(";")) return {
                    type: ma.Program,
                    body: e
                }
        },
        expressionStatement: function() {
            return {
                type: ma.ExpressionStatement,
                expression: this.filterChain()
            }
        },
        filterChain: function() {
            for (var e = this.expression(); this.expect("|");) e = this.filter(e);
            return e
        },
        expression: function() {
            return this.assignment()
        },
        assignment: function() {
            var e = this.ternary();
            return this.expect("=") && (e = {
                type: ma.AssignmentExpression,
                left: e,
                right: this.assignment(),
                operator: "="
            }), e
        },
        ternary: function() {
            var e, t, n = this.logicalOR();
            return this.expect("?") && (e = this.expression(), this.consume(":")) ? (t = this.expression(), {
                type: ma.ConditionalExpression,
                test: n,
                alternate: e,
                consequent: t
            }) : n
        },
        logicalOR: function() {
            for (var e = this.logicalAND(); this.expect("||");) e = {
                type: ma.LogicalExpression,
                operator: "||",
                left: e,
                right: this.logicalAND()
            };
            return e
        },
        logicalAND: function() {
            for (var e = this.equality(); this.expect("&&");) e = {
                type: ma.LogicalExpression,
                operator: "&&",
                left: e,
                right: this.equality()
            };
            return e
        },
        equality: function() {
            for (var e, t = this.relational(); e = this.expect("==", "!=", "===", "!==");) t = {
                type: ma.BinaryExpression,
                operator: e.text,
                left: t,
                right: this.relational()
            };
            return t
        },
        relational: function() {
            for (var e, t = this.additive(); e = this.expect("<", ">", "<=", ">=");) t = {
                type: ma.BinaryExpression,
                operator: e.text,
                left: t,
                right: this.additive()
            };
            return t
        },
        additive: function() {
            for (var e, t = this.multiplicative(); e = this.expect("+", "-");) t = {
                type: ma.BinaryExpression,
                operator: e.text,
                left: t,
                right: this.multiplicative()
            };
            return t
        },
        multiplicative: function() {
            for (var e, t = this.unary(); e = this.expect("*", "/", "%");) t = {
                type: ma.BinaryExpression,
                operator: e.text,
                left: t,
                right: this.unary()
            };
            return t
        },
        unary: function() {
            var e;
            return (e = this.expect("+", "-", "!")) ? {
                type: ma.UnaryExpression,
                operator: e.text,
                prefix: !0,
                argument: this.unary()
            } : this.primary()
        },
        primary: function() {
            var e;
            this.expect("(") ? (e = this.filterChain(), this.consume(")")) : this.expect("[") ? e = this.arrayDeclaration() : this.expect("{") ? e = this.object() : this.constants.hasOwnProperty(this.peek().text) ? e = j(this.constants[this.consume().text]) : this.peek().identifier ? e = this.identifier() : this.peek().constant ? e = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var t; t = this.expect("(", "[", ".");) "(" === t.text ? (e = {
                type: ma.CallExpression,
                callee: e,
                arguments: this.parseArguments()
            }, this.consume(")")) : "[" === t.text ? (e = {
                type: ma.MemberExpression,
                object: e,
                property: this.expression(),
                computed: !0
            }, this.consume("]")) : "." === t.text ? e = {
                type: ma.MemberExpression,
                object: e,
                property: this.identifier(),
                computed: !1
            } : this.throwError("IMPOSSIBLE");
            return e
        },
        filter: function(e) {
            e = [e];
            for (var t = {
                    type: ma.CallExpression,
                    callee: this.identifier(),
                    arguments: e,
                    filter: !0
                }; this.expect(":");) e.push(this.expression());
            return t
        },
        parseArguments: function() {
            var e = [];
            if (")" !== this.peekToken().text)
                do e.push(this.expression()); while (this.expect(","));
            return e
        },
        identifier: function() {
            var e = this.consume();
            return e.identifier || this.throwError("is not a valid identifier", e), {
                type: ma.Identifier,
                name: e.text
            }
        },
        constant: function() {
            return {
                type: ma.Literal,
                value: this.consume().value
            }
        },
        arrayDeclaration: function() {
            var e = [];
            if ("]" !== this.peekToken().text)
                do {
                    if (this.peek("]")) break;
                    e.push(this.expression())
                } while (this.expect(","));
            return this.consume("]"), {
                type: ma.ArrayExpression,
                elements: e
            }
        },
        object: function() {
            var e, t = [];
            if ("}" !== this.peekToken().text)
                do {
                    if (this.peek("}")) break;
                    e = {
                        type: ma.Property,
                        kind: "init"
                    }, this.peek().constant ? e.key = this.constant() : this.peek().identifier ? e.key = this.identifier() : this.throwError("invalid key", this.peek()), this.consume(":"), e.value = this.expression(), t.push(e)
                } while (this.expect(","));
            return this.consume("}"), {
                type: ma.ObjectExpression,
                properties: t
            }
        },
        throwError: function(e, t) {
            throw la("syntax", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
        },
        consume: function(e) {
            if (0 === this.tokens.length) throw la("ueoe", this.text);
            var t = this.expect(e);
            return t || this.throwError("is unexpected, expecting [" + e + "]", this.peek()), t
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw la("ueoe", this.text);
            return this.tokens[0]
        },
        peek: function(e, t, n, r) {
            return this.peekAhead(0, e, t, n, r)
        },
        peekAhead: function(e, t, n, r, a) {
            if (this.tokens.length > e) {
                e = this.tokens[e];
                var i = e.text;
                if (i === t || i === n || i === r || i === a || !(t || n || r || a)) return e
            }
            return !1
        },
        expect: function(e, t, n, r) {
            return (e = this.peek(e, t, n, r)) ? (this.tokens.shift(), e) : !1
        },
        constants: {
            "true": {
                type: ma.Literal,
                value: !0
            },
            "false": {
                type: ma.Literal,
                value: !1
            },
            "null": {
                type: ma.Literal,
                value: null
            },
            undefined: {
                type: ma.Literal,
                value: n
            },
            "this": {
                type: ma.ThisExpression
            },
            $locals: {
                type: ma.LocalsExpression
            }
        }
    }, Bt.prototype = {
        compile: function(e, t) {
            var r = this,
                a = this.astBuilder.ast(e);
            this.state = {
                nextId: 0,
                filters: {},
                expensiveChecks: t,
                fn: {
                    vars: [],
                    body: [],
                    own: {}
                },
                assign: {
                    vars: [],
                    body: [],
                    own: {}
                },
                inputs: []
            }, Lt(a, r.$filter);
            var o, u = "";
            return this.stage = "assign", (o = Rt(a)) && (this.state.computing = "assign", u = this.nextId(), this.recurse(o, u), this.return_(u), u = "fn.assign=" + this.generateFunction("assign", "s,v,l")), o = Ut(a.body), r.stage = "inputs", i(o, function(e, t) {
                var n = "fn" + t;
                r.state[n] = {
                    vars: [],
                    body: [],
                    own: {}
                }, r.state.computing = n;
                var a = r.nextId();
                r.recurse(e, a), r.return_(a), r.state.inputs.push(n), e.watchId = t
            }), this.state.computing = "fn", this.stage = "main", this.recurse(a), u = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + u + this.watchFns() + "return fn;", u = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", u)(this.$filter, Mt, Ot, Tt, Nt, It, jt, Pt, e), this.state = this.stage = n, u.literal = Dt(a), u.constant = a.constant, u
        },
        USE: "use",
        STRICT: "strict",
        watchFns: function() {
            var e = [],
                t = this.state.inputs,
                n = this;
            return i(t, function(t) {
                e.push("var " + t + "=" + n.generateFunction(t, "s"))
            }), t.length && e.push("fn.inputs=[" + t.join(",") + "];"), e.join("")
        },
        generateFunction: function(e, t) {
            return "function(" + t + "){" + this.varsPrefix(e) + this.body(e) + "};"
        },
        filterPrefix: function() {
            var e = [],
                t = this;
            return i(this.state.filters, function(n, r) {
                e.push(n + "=$filter(" + t.escape(r) + ")")
            }), e.length ? "var " + e.join(",") + ";" : ""
        },
        varsPrefix: function(e) {
            return this.state[e].vars.length ? "var " + this.state[e].vars.join(",") + ";" : ""
        },
        body: function(e) {
            return this.state[e].body.join("")
        },
        recurse: function(e, t, r, a, o, u) {
            var s, c, l, f, h = this;
            if (a = a || d, !u && b(e.watchId)) t = t || this.nextId(), this.if_("i", this.lazyAssign(t, this.computedMember("i", e.watchId)), this.lazyRecurse(e, t, r, a, o, !0));
            else switch (e.type) {
                case ma.Program:
                    i(e.body, function(t, r) {
                        h.recurse(t.expression, n, n, function(e) {
                            c = e
                        }), r !== e.body.length - 1 ? h.current().body.push(c, ";") : h.return_(c)
                    });
                    break;
                case ma.Literal:
                    f = this.escape(e.value), this.assign(t, f), a(f);
                    break;
                case ma.UnaryExpression:
                    this.recurse(e.argument, n, n, function(e) {
                        c = e
                    }), f = e.operator + "(" + this.ifDefined(c, 0) + ")", this.assign(t, f), a(f);
                    break;
                case ma.BinaryExpression:
                    this.recurse(e.left, n, n, function(e) {
                        s = e
                    }), this.recurse(e.right, n, n, function(e) {
                        c = e
                    }), f = "+" === e.operator ? this.plus(s, c) : "-" === e.operator ? this.ifDefined(s, 0) + e.operator + this.ifDefined(c, 0) : "(" + s + ")" + e.operator + "(" + c + ")", this.assign(t, f), a(f);
                    break;
                case ma.LogicalExpression:
                    t = t || this.nextId(), h.recurse(e.left, t), h.if_("&&" === e.operator ? t : h.not(t), h.lazyRecurse(e.right, t)), a(t);
                    break;
                case ma.ConditionalExpression:
                    t = t || this.nextId(), h.recurse(e.test, t), h.if_(t, h.lazyRecurse(e.alternate, t), h.lazyRecurse(e.consequent, t)), a(t);
                    break;
                case ma.Identifier:
                    t = t || this.nextId(), r && (r.context = "inputs" === h.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", e.name) + "?l:s"), r.computed = !1, r.name = e.name), Mt(e.name), h.if_("inputs" === h.stage || h.not(h.getHasOwnProperty("l", e.name)), function() {
                        h.if_("inputs" === h.stage || "s", function() {
                            o && 1 !== o && h.if_(h.not(h.nonComputedMember("s", e.name)), h.lazyAssign(h.nonComputedMember("s", e.name), "{}")), h.assign(t, h.nonComputedMember("s", e.name))
                        })
                    }, t && h.lazyAssign(t, h.nonComputedMember("l", e.name))), (h.state.expensiveChecks || Gt(e.name)) && h.addEnsureSafeObject(t), a(t);
                    break;
                case ma.MemberExpression:
                    s = r && (r.context = this.nextId()) || this.nextId(), t = t || this.nextId(), h.recurse(e.object, s, n, function() {
                        h.if_(h.notNull(s), function() {
                            o && 1 !== o && h.addEnsureSafeAssignContext(s), e.computed ? (c = h.nextId(), h.recurse(e.property, c), h.getStringValue(c), h.addEnsureSafeMemberName(c), o && 1 !== o && h.if_(h.not(h.computedMember(s, c)), h.lazyAssign(h.computedMember(s, c), "{}")), f = h.ensureSafeObject(h.computedMember(s, c)), h.assign(t, f), r && (r.computed = !0, r.name = c)) : (Mt(e.property.name), o && 1 !== o && h.if_(h.not(h.nonComputedMember(s, e.property.name)), h.lazyAssign(h.nonComputedMember(s, e.property.name), "{}")), f = h.nonComputedMember(s, e.property.name), (h.state.expensiveChecks || Gt(e.property.name)) && (f = h.ensureSafeObject(f)), h.assign(t, f), r && (r.computed = !1, r.name = e.property.name))
                        }, function() {
                            h.assign(t, "undefined")
                        }), a(t)
                    }, !!o);
                    break;
                case ma.CallExpression:
                    t = t || this.nextId(), e.filter ? (c = h.filter(e.callee.name), l = [], i(e.arguments, function(e) {
                        var t = h.nextId();
                        h.recurse(e, t), l.push(t)
                    }), f = c + "(" + l.join(",") + ")", h.assign(t, f), a(t)) : (c = h.nextId(), s = {}, l = [], h.recurse(e.callee, c, s, function() {
                        h.if_(h.notNull(c), function() {
                            h.addEnsureSafeFunction(c), i(e.arguments, function(e) {
                                h.recurse(e, h.nextId(), n, function(e) {
                                    l.push(h.ensureSafeObject(e))
                                })
                            }), s.name ? (h.state.expensiveChecks || h.addEnsureSafeObject(s.context), f = h.member(s.context, s.name, s.computed) + "(" + l.join(",") + ")") : f = c + "(" + l.join(",") + ")", f = h.ensureSafeObject(f), h.assign(t, f)
                        }, function() {
                            h.assign(t, "undefined")
                        }), a(t)
                    }));
                    break;
                case ma.AssignmentExpression:
                    if (c = this.nextId(), s = {}, !Vt(e.left)) throw la("lval");
                    this.recurse(e.left, n, s, function() {
                        h.if_(h.notNull(s.context), function() {
                            h.recurse(e.right, c), h.addEnsureSafeObject(h.member(s.context, s.name, s.computed)), h.addEnsureSafeAssignContext(s.context), f = h.member(s.context, s.name, s.computed) + e.operator + c, h.assign(t, f), a(t || f)
                        })
                    }, 1);
                    break;
                case ma.ArrayExpression:
                    l = [], i(e.elements, function(e) {
                        h.recurse(e, h.nextId(), n, function(e) {
                            l.push(e)
                        })
                    }), f = "[" + l.join(",") + "]", this.assign(t, f), a(f);
                    break;
                case ma.ObjectExpression:
                    l = [], i(e.properties, function(e) {
                        h.recurse(e.value, h.nextId(), n, function(t) {
                            l.push(h.escape(e.key.type === ma.Identifier ? e.key.name : "" + e.key.value) + ":" + t)
                        })
                    }), f = "{" + l.join(",") + "}", this.assign(t, f), a(f);
                    break;
                case ma.ThisExpression:
                    this.assign(t, "s"), a("s");
                    break;
                case ma.LocalsExpression:
                    this.assign(t, "l"), a("l");
                    break;
                case ma.NGValueParameter:
                    this.assign(t, "v"), a("v")
            }
        },
        getHasOwnProperty: function(e, t) {
            var n = e + "." + t,
                r = this.current().own;
            return r.hasOwnProperty(n) || (r[n] = this.nextId(!1, e + "&&(" + this.escape(t) + " in " + e + ")")), r[n]
        },
        assign: function(e, t) {
            return e ? (this.current().body.push(e, "=", t, ";"), e) : void 0
        },
        filter: function(e) {
            return this.state.filters.hasOwnProperty(e) || (this.state.filters[e] = this.nextId(!0)), this.state.filters[e]
        },
        ifDefined: function(e, t) {
            return "ifDefined(" + e + "," + this.escape(t) + ")"
        },
        plus: function(e, t) {
            return "plus(" + e + "," + t + ")"
        },
        return_: function(e) {
            this.current().body.push("return ", e, ";")
        },
        if_: function(e, t, n) {
            if (!0 === e) t();
            else {
                var r = this.current().body;
                r.push("if(", e, "){"), t(), r.push("}"), n && (r.push("else{"), n(), r.push("}"))
            }
        },
        not: function(e) {
            return "!(" + e + ")"
        },
        notNull: function(e) {
            return e + "!=null"
        },
        nonComputedMember: function(e, t) {
            return e + "." + t
        },
        computedMember: function(e, t) {
            return e + "[" + t + "]"
        },
        member: function(e, t, n) {
            return n ? this.computedMember(e, t) : this.nonComputedMember(e, t)
        },
        addEnsureSafeObject: function(e) {
            this.current().body.push(this.ensureSafeObject(e), ";")
        },
        addEnsureSafeMemberName: function(e) {
            this.current().body.push(this.ensureSafeMemberName(e), ";")
        },
        addEnsureSafeFunction: function(e) {
            this.current().body.push(this.ensureSafeFunction(e), ";")
        },
        addEnsureSafeAssignContext: function(e) {
            this.current().body.push(this.ensureSafeAssignContext(e), ";")
        },
        ensureSafeObject: function(e) {
            return "ensureSafeObject(" + e + ",text)"
        },
        ensureSafeMemberName: function(e) {
            return "ensureSafeMemberName(" + e + ",text)"
        },
        ensureSafeFunction: function(e) {
            return "ensureSafeFunction(" + e + ",text)"
        },
        getStringValue: function(e) {
            this.assign(e, "getStringValue(" + e + ")")
        },
        ensureSafeAssignContext: function(e) {
            return "ensureSafeAssignContext(" + e + ",text)"
        },
        lazyRecurse: function(e, t, n, r, a, i) {
            var o = this;
            return function() {
                o.recurse(e, t, n, r, a, i)
            }
        },
        lazyAssign: function(e, t) {
            var n = this;
            return function() {
                n.assign(e, t)
            }
        },
        stringEscapeRegex: /[^ a-zA-Z0-9]/g,
        stringEscapeFn: function(e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        },
        escape: function(e) {
            if (Z(e)) return "'" + e.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
            if (_(e)) return e.toString();
            if (!0 === e) return "true";
            if (!1 === e) return "false";
            if (null === e) return "null";
            if ("undefined" == typeof e) return "undefined";
            throw la("esc")
        },
        nextId: function(e, t) {
            var n = "v" + this.state.nextId++;
            return e || this.current().vars.push(n + (t ? "=" + t : "")), n
        },
        current: function() {
            return this.state[this.state.computing]
        }
    }, Ft.prototype = {
        compile: function(e, t) {
            var n = this,
                r = this.astBuilder.ast(e);
            this.expression = e, this.expensiveChecks = t, Lt(r, n.$filter);
            var a, o;
            (a = Rt(r)) && (o = this.recurse(a)), a = Ut(r.body);
            var u;
            a && (u = [], i(a, function(e, t) {
                var r = n.recurse(e);
                e.input = r, u.push(r), e.watchId = t
            }));
            var s = [];
            return i(r.body, function(e) {
                s.push(n.recurse(e.expression))
            }), a = 0 === r.body.length ? function() {} : 1 === r.body.length ? s[0] : function(e, t) {
                var n;
                return i(s, function(r) {
                    n = r(e, t)
                }), n
            }, o && (a.assign = function(e, t, n) {
                return o(e, n, t)
            }), u && (a.inputs = u), a.literal = Dt(r), a.constant = r.constant, a
        },
        recurse: function(e, t, r) {
            var a, o, u, s = this;
            if (e.input) return this.inputs(e.input, e.watchId);
            switch (e.type) {
                case ma.Literal:
                    return this.value(e.value, t);
                case ma.UnaryExpression:
                    return o = this.recurse(e.argument), this["unary" + e.operator](o, t);
                case ma.BinaryExpression:
                    return a = this.recurse(e.left), o = this.recurse(e.right), this["binary" + e.operator](a, o, t);
                case ma.LogicalExpression:
                    return a = this.recurse(e.left), o = this.recurse(e.right), this["binary" + e.operator](a, o, t);
                case ma.ConditionalExpression:
                    return this["ternary?:"](this.recurse(e.test), this.recurse(e.alternate), this.recurse(e.consequent), t);
                case ma.Identifier:
                    return Mt(e.name, s.expression), s.identifier(e.name, s.expensiveChecks || Gt(e.name), t, r, s.expression);
                case ma.MemberExpression:
                    return a = this.recurse(e.object, !1, !!r), e.computed || (Mt(e.property.name, s.expression), o = e.property.name), e.computed && (o = this.recurse(e.property)), e.computed ? this.computedMember(a, o, t, r, s.expression) : this.nonComputedMember(a, o, s.expensiveChecks, t, r, s.expression);
                case ma.CallExpression:
                    return u = [], i(e.arguments, function(e) {
                        u.push(s.recurse(e))
                    }), e.filter && (o = this.$filter(e.callee.name)), e.filter || (o = this.recurse(e.callee, !0)), e.filter ? function(e, r, a, i) {
                        for (var s = [], c = 0; c < u.length; ++c) s.push(u[c](e, r, a, i));
                        return e = o.apply(n, s, i), t ? {
                            context: n,
                            name: n,
                            value: e
                        } : e
                    } : function(e, n, r, a) {
                        var i, c = o(e, n, r, a);
                        if (null != c.value) {
                            Ot(c.context, s.expression), Tt(c.value, s.expression), i = [];
                            for (var l = 0; l < u.length; ++l) i.push(Ot(u[l](e, n, r, a), s.expression));
                            i = Ot(c.value.apply(c.context, i), s.expression)
                        }
                        return t ? {
                            value: i
                        } : i
                    };
                case ma.AssignmentExpression:
                    return a = this.recurse(e.left, !0, 1), o = this.recurse(e.right),
                        function(e, n, r, i) {
                            var u = a(e, n, r, i);
                            return e = o(e, n, r, i), Ot(u.value, s.expression), It(u.context), u.context[u.name] = e, t ? {
                                value: e
                            } : e
                        };
                case ma.ArrayExpression:
                    return u = [], i(e.elements, function(e) {
                            u.push(s.recurse(e))
                        }),
                        function(e, n, r, a) {
                            for (var i = [], o = 0; o < u.length; ++o) i.push(u[o](e, n, r, a));
                            return t ? {
                                value: i
                            } : i
                        };
                case ma.ObjectExpression:
                    return u = [], i(e.properties, function(e) {
                            u.push({
                                key: e.key.type === ma.Identifier ? e.key.name : "" + e.key.value,
                                value: s.recurse(e.value)
                            })
                        }),
                        function(e, n, r, a) {
                            for (var i = {}, o = 0; o < u.length; ++o) i[u[o].key] = u[o].value(e, n, r, a);
                            return t ? {
                                value: i
                            } : i
                        };
                case ma.ThisExpression:
                    return function(e) {
                        return t ? {
                            value: e
                        } : e
                    };
                case ma.LocalsExpression:
                    return function(e, n) {
                        return t ? {
                            value: n
                        } : n
                    };
                case ma.NGValueParameter:
                    return function(e, n, r, a) {
                        return t ? {
                            value: r
                        } : r
                    }
            }
        },
        "unary+": function(e, t) {
            return function(n, r, a, i) {
                return n = e(n, r, a, i), n = b(n) ? +n : 0, t ? {
                    value: n
                } : n
            }
        },
        "unary-": function(e, t) {
            return function(n, r, a, i) {
                return n = e(n, r, a, i), n = b(n) ? -n : 0, t ? {
                    value: n
                } : n
            }
        },
        "unary!": function(e, t) {
            return function(n, r, a, i) {
                return n = !e(n, r, a, i), t ? {
                    value: n
                } : n
            }
        },
        "binary+": function(e, t, n) {
            return function(r, a, i, o) {
                var u = e(r, a, i, o);
                return r = t(r, a, i, o), u = Pt(u, r), n ? {
                    value: u
                } : u
            }
        },
        "binary-": function(e, t, n) {
            return function(r, a, i, o) {
                var u = e(r, a, i, o);
                return r = t(r, a, i, o), u = (b(u) ? u : 0) - (b(r) ? r : 0), n ? {
                    value: u
                } : u
            }
        },
        "binary*": function(e, t, n) {
            return function(r, a, i, o) {
                return r = e(r, a, i, o) * t(r, a, i, o), n ? {
                    value: r
                } : r
            }
        },
        "binary/": function(e, t, n) {
            return function(r, a, i, o) {
                return r = e(r, a, i, o) / t(r, a, i, o), n ? {
                    value: r
                } : r
            }
        },
        "binary%": function(e, t, n) {
            return function(r, a, i, o) {
                return r = e(r, a, i, o) % t(r, a, i, o), n ? {
                    value: r
                } : r
            }
        },
        "binary===": function(e, t, n) {
            return function(r, a, i, o) {
                return r = e(r, a, i, o) === t(r, a, i, o), n ? {
                    value: r
                } : r
            }
        },
        "binary!==": function(e, t, n) {
            return function(r, a, i, o) {
                return r = e(r, a, i, o) !== t(r, a, i, o), n ? {
                    value: r
                } : r
            }
        },
        "binary==": function(e, t, n) {
            return function(r, a, i, o) {
                return r = e(r, a, i, o) == t(r, a, i, o), n ? {
                    value: r
                } : r
            }
        },
        "binary!=": function(e, t, n) {
            return function(r, a, i, o) {
                return r = e(r, a, i, o) != t(r, a, i, o), n ? {
                    value: r
                } : r
            }
        },
        "binary<": function(e, t, n) {
            return function(r, a, i, o) {
                return r = e(r, a, i, o) < t(r, a, i, o), n ? {
                    value: r
                } : r
            }
        },
        "binary>": function(e, t, n) {
            return function(r, a, i, o) {
                return r = e(r, a, i, o) > t(r, a, i, o), n ? {
                    value: r
                } : r
            }
        },
        "binary<=": function(e, t, n) {
            return function(r, a, i, o) {
                return r = e(r, a, i, o) <= t(r, a, i, o), n ? {
                    value: r
                } : r
            }
        },
        "binary>=": function(e, t, n) {
            return function(r, a, i, o) {
                return r = e(r, a, i, o) >= t(r, a, i, o), n ? {
                    value: r
                } : r
            }
        },
        "binary&&": function(e, t, n) {
            return function(r, a, i, o) {
                return r = e(r, a, i, o) && t(r, a, i, o), n ? {
                    value: r
                } : r
            }
        },
        "binary||": function(e, t, n) {
            return function(r, a, i, o) {
                return r = e(r, a, i, o) || t(r, a, i, o), n ? {
                    value: r
                } : r
            }
        },
        "ternary?:": function(e, t, n, r) {
            return function(a, i, o, u) {
                return a = e(a, i, o, u) ? t(a, i, o, u) : n(a, i, o, u), r ? {
                    value: a
                } : a
            }
        },
        value: function(e, t) {
            return function() {
                return t ? {
                    context: n,
                    name: n,
                    value: e
                } : e
            }
        },
        identifier: function(e, t, r, a, i) {
            return function(o, u, s, c) {
                return o = u && e in u ? u : o, a && 1 !== a && o && !o[e] && (o[e] = {}), u = o ? o[e] : n, t && Ot(u, i), r ? {
                    context: o,
                    name: e,
                    value: u
                } : u
            }
        },
        computedMember: function(e, t, n, r, a) {
            return function(i, o, u, s) {
                var c, l, f = e(i, o, u, s);
                return null != f && (c = t(i, o, u, s), c += "", Mt(c, a), r && 1 !== r && (It(f), f && !f[c] && (f[c] = {})), l = f[c], Ot(l, a)), n ? {
                    context: f,
                    name: c,
                    value: l
                } : l
            }
        },
        nonComputedMember: function(e, t, r, a, i, o) {
            return function(u, s, c, l) {
                return u = e(u, s, c, l), i && 1 !== i && (It(u), u && !u[t] && (u[t] = {})), s = null != u ? u[t] : n, (r || Gt(t)) && Ot(s, o), a ? {
                    context: u,
                    name: t,
                    value: s
                } : s
            }
        },
        inputs: function(e, t) {
            return function(n, r, a, i) {
                return i ? i[t] : e(n, r, a)
            }
        }
    };
    var va = function(e, t, n) {
        this.lexer = e, this.$filter = t, this.options = n, this.ast = new ma(this.lexer), this.astCompiler = n.csp ? new Ft(this.ast, t) : new Bt(this.ast, t)
    };
    va.prototype = {
        constructor: va,
        parse: function(e) {
            return this.astCompiler.compile(e, this.options.expensiveChecks)
        }
    };
    var ba = Object.prototype.valueOf,
        ya = r("$sce"),
        wa = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        },
        qr = r("$compile"),
        Za = t.createElement("a"),
        _a = sn(e.location.href);
    fn.$inject = ["$document"], pn.$inject = ["$provide"];
    var Sa = 22,
        xa = ".",
        Ea = "0";
    vn.$inject = ["$locale"], bn.$inject = ["$locale"];
    var Ca = {
            yyyy: Sn("FullYear", 4),
            yy: Sn("FullYear", 2, 0, !0),
            y: Sn("FullYear", 1),
            MMMM: xn("Month"),
            MMM: xn("Month", !0),
            MM: Sn("Month", 2, 1),
            M: Sn("Month", 1, 1),
            dd: Sn("Date", 2),
            d: Sn("Date", 1),
            HH: Sn("Hours", 2),
            H: Sn("Hours", 1),
            hh: Sn("Hours", 2, -12),
            h: Sn("Hours", 1, -12),
            mm: Sn("Minutes", 2),
            m: Sn("Minutes", 1),
            ss: Sn("Seconds", 2),
            s: Sn("Seconds", 1),
            sss: Sn("Milliseconds", 3),
            EEEE: xn("Day"),
            EEE: xn("Day", !0),
            a: function(e, t) {
                return 12 > e.getHours() ? t.AMPMS[0] : t.AMPMS[1]
            },
            Z: function(e, t, n) {
                return e = -1 * n, e = (e >= 0 ? "+" : "") + (_n(Math[e > 0 ? "floor" : "ceil"](e / 60), 2) + _n(Math.abs(e % 60), 2))
            },
            ww: Cn(2),
            w: Cn(1),
            G: An,
            GG: An,
            GGG: An,
            GGGG: function(e, t) {
                return 0 >= e.getFullYear() ? t.ERANAMES[0] : t.ERANAMES[1]
            }
        },
        Aa = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
        ka = /^\-?\d+$/;
    kn.$inject = ["$locale"];
    var Ma = $(Jn),
        Na = $(Yn);
    On.$inject = ["$parse"];
    var Oa = $({
            restrict: "E",
            compile: function(e, t) {
                return t.href || t.xlinkHref ? void 0 : function(e, t) {
                    if ("a" === t[0].nodeName.toLowerCase()) {
                        var n = "[object SVGAnimatedString]" === tr.call(t.prop("href")) ? "xlink:href" : "href";
                        t.on("click", function(e) {
                            t.attr(n) || e.preventDefault()
                        })
                    }
                }
            }
        }),
        Ta = {};
    i(Mr, function(e, t) {
        function n(e, n, a) {
            e.$watch(a[r], function(e) {
                a.$set(t, !!e)
            })
        }
        if ("multiple" != e) {
            var r = Ye("ng-" + t),
                a = n;
            "checked" === e && (a = function(e, t, a) {
                a.ngModel !== a[r] && n(e, t, a)
            }), Ta[r] = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    link: a
                }
            }
        }
    }), i(Or, function(e, t) {
        Ta[t] = function() {
            return {
                priority: 100,
                link: function(e, n, r) {
                    return "ngPattern" === t && "/" == r.ngPattern.charAt(0) && (n = r.ngPattern.match(Kn)) ? void r.$set("ngPattern", new RegExp(n[1], n[2])) : void e.$watch(r[t], function(e) {
                        r.$set(t, e)
                    })
                }
            }
        }
    }), i(["src", "srcset", "href"], function(e) {
        var t = Ye("ng-" + e);
        Ta[t] = function() {
            return {
                priority: 99,
                link: function(n, r, a) {
                    var i = e,
                        o = e;
                    "href" === e && "[object SVGAnimatedString]" === tr.call(r.prop("href")) && (o = "xlinkHref", a.$attr[o] = "xlink:href", i = null), a.$observe(t, function(t) {
                        t ? (a.$set(o, t), Gn && i && r.prop(i, a[o])) : "href" === e && a.$set(o, null)
                    })
                }
            }
        }
    });
    var Ia = {
        $addControl: d,
        $$renameControl: function(e, t) {
            e.$name = t
        },
        $removeControl: d,
        $setValidity: d,
        $setDirty: d,
        $setPristine: d,
        $setSubmitted: d
    };
    In.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var ja = function(e) {
            return ["$timeout", "$parse", function(t, r) {
                function a(e) {
                    return "" === e ? r('this[""]').assign : r(e).assign || d
                }
                return {
                    name: "form",
                    restrict: e ? "EAC" : "E",
                    require: ["form", "^^?form"],
                    controller: In,
                    compile: function(r, i) {
                        r.addClass(gi).addClass(pi);
                        var o = i.name ? "name" : e && i.ngForm ? "ngForm" : !1;
                        return {
                            pre: function(e, r, i, u) {
                                var s = u[0];
                                if (!("action" in i)) {
                                    var c = function(t) {
                                        e.$apply(function() {
                                            s.$commitViewValue(), s.$setSubmitted()
                                        }), t.preventDefault()
                                    };
                                    r[0].addEventListener("submit", c, !1), r.on("$destroy", function() {
                                        t(function() {
                                            r[0].removeEventListener("submit", c, !1)
                                        }, 0, !1)
                                    })
                                }(u[1] || s.$$parentForm).$addControl(s);
                                var f = o ? a(s.$name) : d;
                                o && (f(e, s), i.$observe(o, function(t) {
                                    s.$name !== t && (f(e, n), s.$$parentForm.$$renameControl(s, t), (f = a(s.$name))(e, s))
                                })), r.on("$destroy", function() {
                                    s.$$parentForm.$removeControl(s), f(e, n), l(s, Ia)
                                })
                            }
                        }
                    }
                }
            }]
        },
        Pa = ja(),
        La = ja(!0),
        Ua = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
        Va = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
        Ra = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
        Da = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
        Ba = /^(\d{4})-(\d{2})-(\d{2})$/,
        Fa = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Ga = /^(\d{4})-W(\d\d)$/,
        za = /^(\d{4})-(\d\d)$/,
        Ha = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        qa = {
            text: function(e, t, n, r, a, i) {
                Pn(e, t, n, r, a, i), jn(r)
            },
            date: Un("date", Ba, Ln(Ba, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
            "datetime-local": Un("datetimelocal", Fa, Ln(Fa, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
            time: Un("time", Ha, Ln(Ha, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
            week: Un("week", Ga, function(e, t) {
                if (S(e)) return e;
                if (Z(e)) {
                    Ga.lastIndex = 0;
                    var n = Ga.exec(e);
                    if (n) {
                        var r = +n[1],
                            a = +n[2],
                            i = n = 0,
                            o = 0,
                            u = 0,
                            s = En(r),
                            a = 7 * (a - 1);
                        return t && (n = t.getHours(), i = t.getMinutes(), o = t.getSeconds(), u = t.getMilliseconds()), new Date(r, 0, s.getDate() + a, n, i, o, u)
                    }
                }
                return NaN
            }, "yyyy-Www"),
            month: Un("month", za, Ln(za, ["yyyy", "MM"]), "yyyy-MM"),
            number: function(e, t, r, a, i, o) {
                if (Vn(e, t, r, a), Pn(e, t, r, a, i, o), a.$$parserName = "number", a.$parsers.push(function(e) {
                        return a.$isEmpty(e) ? null : Da.test(e) ? parseFloat(e) : n
                    }), a.$formatters.push(function(e) {
                        if (!a.$isEmpty(e)) {
                            if (!_(e)) throw vi("numfmt", e);
                            e = e.toString()
                        }
                        return e
                    }), b(r.min) || r.ngMin) {
                    var u;
                    a.$validators.min = function(e) {
                        return a.$isEmpty(e) || v(u) || e >= u
                    }, r.$observe("min", function(e) {
                        b(e) && !_(e) && (e = parseFloat(e, 10)), u = _(e) && !isNaN(e) ? e : n, a.$validate()
                    })
                }
                if (b(r.max) || r.ngMax) {
                    var s;
                    a.$validators.max = function(e) {
                        return a.$isEmpty(e) || v(s) || s >= e
                    }, r.$observe("max", function(e) {
                        b(e) && !_(e) && (e = parseFloat(e, 10)), s = _(e) && !isNaN(e) ? e : n, a.$validate()
                    })
                }
            },
            url: function(e, t, n, r, a, i) {
                Pn(e, t, n, r, a, i), jn(r), r.$$parserName = "url", r.$validators.url = function(e, t) {
                    var n = e || t;
                    return r.$isEmpty(n) || Va.test(n)
                }
            },
            email: function(e, t, n, r, a, i) {
                Pn(e, t, n, r, a, i), jn(r), r.$$parserName = "email", r.$validators.email = function(e, t) {
                    var n = e || t;
                    return r.$isEmpty(n) || Ra.test(n)
                }
            },
            radio: function(e, t, n, r) {
                v(n.name) && t.attr("name", ++ir), t.on("click", function(e) {
                    t[0].checked && r.$setViewValue(n.value, e && e.type)
                }), r.$render = function() {
                    t[0].checked = n.value == r.$viewValue
                }, n.$observe("value", r.$render)
            },
            checkbox: function(e, t, n, r, a, i, o, u) {
                var s = Rn(u, e, "ngTrueValue", n.ngTrueValue, !0),
                    c = Rn(u, e, "ngFalseValue", n.ngFalseValue, !1);
                t.on("click", function(e) {
                    r.$setViewValue(t[0].checked, e && e.type)
                }), r.$render = function() {
                    t[0].checked = r.$viewValue
                }, r.$isEmpty = function(e) {
                    return !1 === e
                }, r.$formatters.push(function(e) {
                    return L(e, s)
                }), r.$parsers.push(function(e) {
                    return e ? s : c
                })
            },
            hidden: d,
            button: d,
            submit: d,
            reset: d,
            file: d
        },
        Ka = ["$browser", "$sniffer", "$filter", "$parse", function(e, t, n, r) {
            return {
                restrict: "E",
                require: ["?ngModel"],
                link: {
                    pre: function(a, i, o, u) {
                        u[0] && (qa[Jn(o.type)] || qa.text)(a, i, o, u[0], t, e, n, r)
                    }
                }
            }
        }],
        Wa = /^(true|false|\d+)$/,
        Ja = function() {
            return {
                restrict: "A",
                priority: 100,
                compile: function(e, t) {
                    return Wa.test(t.ngValue) ? function(e, t, n) {
                        n.$set("value", e.$eval(n.ngValue))
                    } : function(e, t, n) {
                        e.$watch(n.ngValue, function(e) {
                            n.$set("value", e)
                        })
                    }
                }
            }
        },
        Ya = ["$compile", function(e) {
            return {
                restrict: "AC",
                compile: function(t) {
                    return e.$$addBindingClass(t),
                        function(t, n, r) {
                            e.$$addBindingInfo(n, r.ngBind), n = n[0], t.$watch(r.ngBind, function(e) {
                                n.textContent = v(e) ? "" : e
                            })
                        }
                }
            }
        }],
        Xa = ["$interpolate", "$compile", function(e, t) {
            return {
                compile: function(n) {
                    return t.$$addBindingClass(n),
                        function(n, r, a) {
                            n = e(r.attr(a.$attr.ngBindTemplate)), t.$$addBindingInfo(r, n.expressions), r = r[0], a.$observe("ngBindTemplate", function(e) {
                                r.textContent = v(e) ? "" : e
                            })
                        }
                }
            }
        }],
        Qa = ["$sce", "$parse", "$compile", function(e, t, n) {
            return {
                restrict: "A",
                compile: function(r, a) {
                    var i = t(a.ngBindHtml),
                        o = t(a.ngBindHtml, function(e) {
                            return (e || "").toString()
                        });
                    return n.$$addBindingClass(r),
                        function(t, r, a) {
                            n.$$addBindingInfo(r, a.ngBindHtml), t.$watch(o, function() {
                                r.html(e.getTrustedHtml(i(t)) || "")
                            })
                        }
                }
            }
        }],
        ei = $({
            restrict: "A",
            require: "ngModel",
            link: function(e, t, n, r) {
                r.$viewChangeListeners.push(function() {
                    e.$eval(n.ngChange)
                })
            }
        }),
        ti = Dn("", !0),
        ni = Dn("Odd", 0),
        ri = Dn("Even", 1),
        ai = Tn({
            compile: function(e, t) {
                t.$set("ngCloak", n), e.removeClass("ng-cloak")
            }
        }),
        ii = [function() {
            return {
                restrict: "A",
                scope: !0,
                controller: "@",
                priority: 500
            }
        }],
        oi = {},
        ui = {
            blur: !0,
            focus: !0
        };
    i("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(e) {
        var t = Ye("ng-" + e);
        oi[t] = ["$parse", "$rootScope", function(n, r) {
            return {
                restrict: "A",
                compile: function(a, i) {
                    var o = n(i[t], null, !0);
                    return function(t, n) {
                        n.on(e, function(n) {
                            var a = function() {
                                o(t, {
                                    $event: n
                                })
                            };
                            ui[e] && r.$$phase ? t.$evalAsync(a) : t.$apply(a)
                        })
                    }
                }
            }
        }]
    });
    var si = ["$animate", function(e) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function(n, r, a, i, o) {
                    var u, s, c;
                    n.$watch(a.ngIf, function(n) {
                        n ? s || o(function(n, i) {
                            s = i, n[n.length++] = t.createComment(" end ngIf: " + a.ngIf + " "), u = {
                                clone: n
                            }, e.enter(n, r.parent(), r)
                        }) : (c && (c.remove(), c = null), s && (s.$destroy(), s = null), u && (c = se(u.clone), e.leave(c).then(function() {
                            c = null
                        }), u = null))
                    })
                }
            }
        }],
        ci = ["$templateRequest", "$anchorScroll", "$animate", function(e, t, n) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: ar.noop,
                compile: function(r, a) {
                    var i = a.ngInclude || a.src,
                        o = a.onload || "",
                        u = a.autoscroll;
                    return function(r, a, s, c, l) {
                        var f, h, p, d = 0,
                            g = function() {
                                h && (h.remove(), h = null), f && (f.$destroy(), f = null), p && (n.leave(p).then(function() {
                                    h = null
                                }), h = p, p = null)
                            };
                        r.$watch(i, function(i) {
                            var s = function() {
                                    !b(u) || u && !r.$eval(u) || t()
                                },
                                h = ++d;
                            i ? (e(i, !0).then(function(e) {
                                if (!r.$$destroyed && h === d) {
                                    var t = r.$new();
                                    c.template = e, e = l(t, function(e) {
                                        g(), n.enter(e, null, a).then(s)
                                    }), f = t, p = e, f.$emit("$includeContentLoaded", i), r.$eval(o)
                                }
                            }, function() {
                                r.$$destroyed || h !== d || (g(), r.$emit("$includeContentError", i))
                            }), r.$emit("$includeContentRequested", i)) : (g(), c.template = null)
                        })
                    }
                }
            }
        }],
        li = ["$compile", function(e) {
            return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function(n, r, a, i) {
                    tr.call(r[0]).match(/SVG/) ? (r.empty(), e(de(i.template, t).childNodes)(n, function(e) {
                        r.append(e)
                    }, {
                        futureParentElement: r
                    })) : (r.html(i.template), e(r.contents())(n))
                }
            }
        }],
        fi = Tn({
            priority: 450,
            compile: function() {
                return {
                    pre: function(e, t, n) {
                        e.$eval(n.ngInit)
                    }
                }
            }
        }),
        hi = function() {
            return {
                restrict: "A",
                priority: 100,
                require: "ngModel",
                link: function(e, t, r, a) {
                    var o = t.attr(r.$attr.ngList) || ", ",
                        u = "false" !== r.ngTrim,
                        s = u ? sr(o) : o;
                    a.$parsers.push(function(e) {
                        if (!v(e)) {
                            var t = [];
                            return e && i(e.split(s), function(e) {
                                e && t.push(u ? sr(e) : e)
                            }), t
                        }
                    }), a.$formatters.push(function(e) {
                        return or(e) ? e.join(o) : n
                    }), a.$isEmpty = function(e) {
                        return !e || !e.length
                    }
                }
            }
        },
        pi = "ng-valid",
        di = "ng-invalid",
        gi = "ng-pristine",
        $i = "ng-dirty",
        mi = "ng-pending",
        vi = r("ngModel"),
        bi = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(e, t, r, a, o, u, s, c, l, f) {
            this.$modelValue = this.$viewValue = Number.NaN, this.$$rawModelValue = n, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = n, this.$name = f(r.name || "", !1)(e), this.$$parentForm = Ia;
            var h, p = o(r.ngModel),
                g = p.assign,
                $ = p,
                m = g,
                y = null,
                w = this;
            this.$$setOptions = function(e) {
                if ((w.$options = e) && e.getterSetter) {
                    var t = o(r.ngModel + "()"),
                        n = o(r.ngModel + "($$$p)");
                    $ = function(e) {
                        var n = p(e);
                        return x(n) && (n = t(e)), n
                    }, m = function(e, t) {
                        x(p(e)) ? n(e, {
                            $$$p: w.$modelValue
                        }) : g(e, w.$modelValue)
                    }
                } else if (!p.assign) throw vi("nonassign", r.ngModel, z(a))
            }, this.$render = d, this.$isEmpty = function(e) {
                return v(e) || "" === e || null === e || e !== e
            }, this.$$updateEmptyClasses = function(e) {
                w.$isEmpty(e) ? (u.removeClass(a, "ng-not-empty"), u.addClass(a, "ng-empty")) : (u.removeClass(a, "ng-empty"), u.addClass(a, "ng-not-empty"))
            };
            var Z = 0;
            Bn({
                ctrl: this,
                $element: a,
                set: function(e, t) {
                    e[t] = !0
                },
                unset: function(e, t) {
                    delete e[t]
                },
                $animate: u
            }), this.$setPristine = function() {
                w.$dirty = !1, w.$pristine = !0, u.removeClass(a, $i), u.addClass(a, gi)
            }, this.$setDirty = function() {
                w.$dirty = !0, w.$pristine = !1, u.removeClass(a, gi), u.addClass(a, $i), w.$$parentForm.$setDirty()
            }, this.$setUntouched = function() {
                w.$touched = !1, w.$untouched = !0, u.setClass(a, "ng-untouched", "ng-touched")
            }, this.$setTouched = function() {
                w.$touched = !0, w.$untouched = !1, u.setClass(a, "ng-touched", "ng-untouched")
            }, this.$rollbackViewValue = function() {
                s.cancel(y), w.$viewValue = w.$$lastCommittedViewValue, w.$render()
            }, this.$validate = function() {
                if (!_(w.$modelValue) || !isNaN(w.$modelValue)) {
                    var e = w.$$rawModelValue,
                        t = w.$valid,
                        r = w.$modelValue,
                        a = w.$options && w.$options.allowInvalid;
                    w.$$runValidators(e, w.$$lastCommittedViewValue, function(i) {
                        a || t === i || (w.$modelValue = i ? e : n, w.$modelValue !== r && w.$$writeModelToScope())
                    })
                }
            }, this.$$runValidators = function(e, t, r) {
                function a() {
                    var n = !0;
                    return i(w.$validators, function(r, a) {
                        var i = r(e, t);
                        n = n && i, u(a, i)
                    }), n ? !0 : (i(w.$asyncValidators, function(e, t) {
                        u(t, null)
                    }), !1)
                }

                function o() {
                    var r = [],
                        a = !0;
                    i(w.$asyncValidators, function(i, o) {
                        var s = i(e, t);
                        if (!s || !x(s.then)) throw vi("nopromise", s);
                        u(o, n), r.push(s.then(function() {
                            u(o, !0)
                        }, function(e) {
                            a = !1, u(o, !1)
                        }))
                    }), r.length ? l.all(r).then(function() {
                        s(a)
                    }, d) : s(!0)
                }

                function u(e, t) {
                    c === Z && w.$setValidity(e, t)
                }

                function s(e) {
                    c === Z && r(e)
                }
                Z++;
                var c = Z;
                (function() {
                    var e = w.$$parserName || "parse";
                    return v(h) ? (u(e, null), !0) : (h || (i(w.$validators, function(e, t) {
                        u(t, null)
                    }), i(w.$asyncValidators, function(e, t) {
                        u(t, null)
                    })), u(e, h), h)
                })() && a() ? o() : s(!1)
            }, this.$commitViewValue = function() {
                var e = w.$viewValue;
                s.cancel(y), (w.$$lastCommittedViewValue !== e || "" === e && w.$$hasNativeValidators) && (w.$$updateEmptyClasses(e), w.$$lastCommittedViewValue = e, w.$pristine && this.$setDirty(), this.$$parseAndValidate())
            }, this.$$parseAndValidate = function() {
                var t = w.$$lastCommittedViewValue;
                if (h = v(t) ? n : !0)
                    for (var r = 0; r < w.$parsers.length; r++)
                        if (t = w.$parsers[r](t), v(t)) {
                            h = !1;
                            break
                        }
                _(w.$modelValue) && isNaN(w.$modelValue) && (w.$modelValue = $(e));
                var a = w.$modelValue,
                    i = w.$options && w.$options.allowInvalid;
                w.$$rawModelValue = t, i && (w.$modelValue = t, w.$modelValue !== a && w.$$writeModelToScope()), w.$$runValidators(t, w.$$lastCommittedViewValue, function(e) {
                    i || (w.$modelValue = e ? t : n, w.$modelValue !== a && w.$$writeModelToScope())
                })
            }, this.$$writeModelToScope = function() {
                m(e, w.$modelValue), i(w.$viewChangeListeners, function(e) {
                    try {
                        e()
                    } catch (n) {
                        t(n)
                    }
                })
            }, this.$setViewValue = function(e, t) {
                w.$viewValue = e, w.$options && !w.$options.updateOnDefault || w.$$debounceViewValueCommit(t)
            }, this.$$debounceViewValueCommit = function(t) {
                var n = 0,
                    r = w.$options;
                r && b(r.debounce) && (r = r.debounce, _(r) ? n = r : _(r[t]) ? n = r[t] : _(r["default"]) && (n = r["default"])), s.cancel(y), n ? y = s(function() {
                    w.$commitViewValue()
                }, n) : c.$$phase ? w.$commitViewValue() : e.$apply(function() {
                    w.$commitViewValue()
                })
            }, e.$watch(function() {
                var t = $(e);
                if (t !== w.$modelValue && (w.$modelValue === w.$modelValue || t === t)) {
                    w.$modelValue = w.$$rawModelValue = t, h = n;
                    for (var r = w.$formatters, a = r.length, i = t; a--;) i = r[a](i);
                    w.$viewValue !== i && (w.$$updateEmptyClasses(i), w.$viewValue = w.$$lastCommittedViewValue = i, w.$render(), w.$$runValidators(t, i, d))
                }
                return t
            })
        }],
        yi = ["$rootScope", function(e) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: bi,
                priority: 1,
                compile: function(t) {
                    return t.addClass(gi).addClass("ng-untouched").addClass(pi), {
                        pre: function(e, t, n, r) {
                            var a = r[0];
                            t = r[1] || a.$$parentForm, a.$$setOptions(r[2] && r[2].$options), t.$addControl(a), n.$observe("name", function(e) {
                                a.$name !== e && a.$$parentForm.$$renameControl(a, e)
                            }), e.$on("$destroy", function() {
                                a.$$parentForm.$removeControl(a)
                            })
                        },
                        post: function(t, n, r, a) {
                            var i = a[0];
                            i.$options && i.$options.updateOn && n.on(i.$options.updateOn, function(e) {
                                i.$$debounceViewValueCommit(e && e.type)
                            }), n.on("blur", function(n) {
                                i.$touched || (e.$$phase ? t.$evalAsync(i.$setTouched) : t.$apply(i.$setTouched))
                            })
                        }
                    }
                }
            }
        }],
        wi = /(\s+|^)default(\s+|$)/,
        Zi = function() {
            return {
                restrict: "A",
                controller: ["$scope", "$attrs", function(e, t) {
                    var n = this;
                    this.$options = j(e.$eval(t.ngModelOptions)), b(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = sr(this.$options.updateOn.replace(wi, function() {
                        return n.$options.updateOnDefault = !0, " "
                    }))) : this.$options.updateOnDefault = !0
                }]
            }
        },
        _i = Tn({
            terminal: !0,
            priority: 1e3
        }),
        Si = r("ngOptions"),
        xi = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
        Ei = ["$compile", "$parse", function(e, n) {
            function r(e, t, r) {
                function i(e, t, n, r, a) {
                    this.selectValue = e, this.viewValue = t, this.label = n, this.group = r, this.disabled = a
                }

                function o(e) {
                    var t;
                    if (!c && a(e)) t = e;
                    else {
                        t = [];
                        for (var n in e) e.hasOwnProperty(n) && "$" !== n.charAt(0) && t.push(n)
                    }
                    return t
                }
                var u = e.match(xi);
                if (!u) throw Si("iexp", e, z(t));
                var s = u[5] || u[7],
                    c = u[6];
                e = / as /.test(u[0]) && u[1];
                var l = u[9];
                t = n(u[2] ? u[1] : s);
                var f = e && n(e) || t,
                    h = l && n(l),
                    p = l ? function(e, t) {
                        return h(r, t)
                    } : function(e) {
                        return Le(e)
                    },
                    d = function(e, t) {
                        return p(e, y(e, t))
                    },
                    g = n(u[2] || u[1]),
                    $ = n(u[3] || ""),
                    m = n(u[4] || ""),
                    v = n(u[8]),
                    b = {},
                    y = c ? function(e, t) {
                        return b[c] = t, b[s] = e, b
                    } : function(e) {
                        return b[s] = e, b
                    };
                return {
                    trackBy: l,
                    getTrackByValue: d,
                    getWatchables: n(v, function(e) {
                        var t = [];
                        e = e || [];
                        for (var n = o(e), a = n.length, i = 0; a > i; i++) {
                            var s = e === n ? i : n[i],
                                c = y(e[s], s),
                                s = p(e[s], c);
                            t.push(s), (u[2] || u[1]) && (s = g(r, c), t.push(s)), u[4] && (c = m(r, c), t.push(c))
                        }
                        return t
                    }),
                    getOptions: function() {
                        for (var e = [], t = {}, n = v(r) || [], a = o(n), u = a.length, s = 0; u > s; s++) {
                            var c = n === a ? s : a[s],
                                h = y(n[c], c),
                                b = f(r, h),
                                c = p(b, h),
                                w = g(r, h),
                                Z = $(r, h),
                                h = m(r, h),
                                b = new i(c, b, w, Z, h);
                            e.push(b), t[c] = b
                        }
                        return {
                            items: e,
                            selectValueMap: t,
                            getOptionFromViewValue: function(e) {
                                return t[d(e)]
                            },
                            getViewValueFromOption: function(e) {
                                return l ? ar.copy(e.viewValue) : e.viewValue
                            }
                        }
                    }
                }
            }
            var o = t.createElement("option"),
                u = t.createElement("optgroup");
            return {
                restrict: "A",
                terminal: !0,
                require: ["select", "ngModel"],
                link: {
                    pre: function(e, t, n, r) {
                        r[0].registerOption = d
                    },
                    post: function(t, n, a, s) {
                        function c(e, t) {
                            e.element = t, t.disabled = e.disabled, e.label !== t.label && (t.label = e.label, t.textContent = e.label), e.value !== t.value && (t.value = e.selectValue)
                        }

                        function l(e, t, n, r) {
                            return t && Jn(t.nodeName) === n ? n = t : (n = r.cloneNode(!1), t ? e.insertBefore(n, t) : e.appendChild(n)), n
                        }

                        function f(e) {
                            for (var t; e;) t = e.nextSibling, Me(e), e = t
                        }

                        function h(e) {
                            var t = d && d[0],
                                n = Z && Z[0];
                            if (t || n)
                                for (; e && (e === t || e === n || 8 === e.nodeType || "option" === T(e) && "" === e.value);) e = e.nextSibling;
                            return e
                        }

                        function p() {
                            var e = _ && g.readValue();
                            _ = S.getOptions();
                            var t = {},
                                r = n[0].firstChild;
                            if (w && n.prepend(d), r = h(r), _.items.forEach(function(e) {
                                    var a, i;
                                    b(e.group) ? (a = t[e.group], a || (a = l(n[0], r, "optgroup", u), r = a.nextSibling, a.label = e.group, a = t[e.group] = {
                                        groupElement: a,
                                        currentOptionElement: a.firstChild
                                    }), i = l(a.groupElement, a.currentOptionElement, "option", o), c(e, i), a.currentOptionElement = i.nextSibling) : (i = l(n[0], r, "option", o), c(e, i), r = i.nextSibling)
                                }), Object.keys(t).forEach(function(e) {
                                    f(t[e].currentOptionElement)
                                }), f(r), $.$render(), !$.$isEmpty(e)) {
                                var a = g.readValue();
                                (S.trackBy || m ? L(e, a) : e === a) || ($.$setViewValue(a), $.$render())
                            }
                        }
                        var d, g = s[0],
                            $ = s[1],
                            m = a.multiple;
                        s = 0;
                        for (var v = n.children(), y = v.length; y > s; s++)
                            if ("" === v[s].value) {
                                d = v.eq(s);
                                break
                            }
                        var w = !!d,
                            Z = zn(o.cloneNode(!1));
                        Z.val("?");
                        var _, S = r(a.ngOptions, n, t);
                        m ? ($.$isEmpty = function(e) {
                            return !e || 0 === e.length
                        }, g.writeValue = function(e) {
                            _.items.forEach(function(e) {
                                e.element.selected = !1
                            }), e && e.forEach(function(e) {
                                (e = _.getOptionFromViewValue(e)) && !e.disabled && (e.element.selected = !0)
                            })
                        }, g.readValue = function() {
                            var e = n.val() || [],
                                t = [];
                            return i(e, function(e) {
                                (e = _.selectValueMap[e]) && !e.disabled && t.push(_.getViewValueFromOption(e))
                            }), t
                        }, S.trackBy && t.$watchCollection(function() {
                            return or($.$viewValue) ? $.$viewValue.map(function(e) {
                                return S.getTrackByValue(e)
                            }) : void 0
                        }, function() {
                            $.$render()
                        })) : (g.writeValue = function(e) {
                            var t = _.getOptionFromViewValue(e);
                            t && !t.disabled ? n[0].value !== t.selectValue && (Z.remove(), w || d.remove(), n[0].value = t.selectValue, t.element.selected = !0, t.element.setAttribute("selected", "selected")) : null === e || w ? (Z.remove(), w || n.prepend(d), n.val(""), d.prop("selected", !0), d.attr("selected", !0)) : (w || d.remove(), n.prepend(Z), n.val("?"), Z.prop("selected", !0), Z.attr("selected", !0))
                        }, g.readValue = function() {
                            var e = _.selectValueMap[n.val()];
                            return e && !e.disabled ? (w || d.remove(), Z.remove(), _.getViewValueFromOption(e)) : null
                        }, S.trackBy && t.$watch(function() {
                            return S.getTrackByValue($.$viewValue)
                        }, function() {
                            $.$render()
                        })), w ? (d.remove(), e(d)(t), d.removeClass("ng-scope")) : d = zn(o.cloneNode(!1)), p(), t.$watchCollection(S.getWatchables, p)
                    }
                }
            }
        }],
        Ci = ["$locale", "$interpolate", "$log", function(e, t, n) {
            var r = /{}/g,
                a = /^when(Minus)?(.+)$/;
            return {
                link: function(o, u, s) {
                    function c(e) {
                        u.text(e || "")
                    }
                    var l, f = s.count,
                        h = s.$attr.when && u.attr(s.$attr.when),
                        p = s.offset || 0,
                        g = o.$eval(h) || {},
                        $ = {},
                        m = t.startSymbol(),
                        b = t.endSymbol(),
                        y = m + f + "-" + p + b,
                        w = ar.noop;
                    i(s, function(e, t) {
                        var n = a.exec(t);
                        n && (n = (n[1] ? "-" : "") + Jn(n[2]), g[n] = u.attr(s.$attr[t]))
                    }), i(g, function(e, n) {
                        $[n] = t(e.replace(r, y))
                    }), o.$watch(f, function(t) {
                        var r = parseFloat(t),
                            a = isNaN(r);
                        a || r in g || (r = e.pluralCat(r - p)), r === l || a && _(l) && isNaN(l) || (w(), a = $[r], v(a) ? (null != t && n.debug("ngPluralize: no rule defined for '" + r + "' in " + h), w = d, c()) : w = o.$watch(a, c), l = r)
                    })
                }
            }
        }],
        Ai = ["$parse", "$animate", function(e, o) {
            var u = r("ngRepeat"),
                s = function(e, t, n, r, a, i, o) {
                    e[n] = r, a && (e[a] = i), e.$index = t, e.$first = 0 === t, e.$last = t === o - 1, e.$middle = !(e.$first || e.$last), e.$odd = !(e.$even = 0 === (1 & t))
                };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1e3,
                terminal: !0,
                $$tlb: !0,
                compile: function(r, c) {
                    var l = c.ngRepeat,
                        f = t.createComment(" end ngRepeat: " + l + " "),
                        h = l.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!h) throw u("iexp", l);
                    var p = h[1],
                        d = h[2],
                        g = h[3],
                        $ = h[4],
                        h = p.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
                    if (!h) throw u("iidexp", p);
                    var m = h[3] || h[1],
                        v = h[2];
                    if (g && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(g) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(g))) throw u("badident", g);
                    var b, y, w, Z, _ = {
                        $id: Le
                    };
                    return $ ? b = e($) : (w = function(e, t) {
                            return Le(t)
                        }, Z = function(e) {
                            return e
                        }),
                        function(e, t, r, c, h) {
                            b && (y = function(t, n, r) {
                                return v && (_[v] = t), _[m] = n, _.$index = r, b(e, _)
                            });
                            var p = ce();
                            e.$watchCollection(d, function(r) {
                                var c, d, $, b, _, S, x, E, C, A, k = t[0],
                                    M = ce();
                                if (g && (e[g] = r), a(r)) E = r, d = y || w;
                                else
                                    for (A in d = y || Z, E = [], r) Wn.call(r, A) && "$" !== A.charAt(0) && E.push(A);
                                for (b = E.length, A = Array(b), c = 0; b > c; c++)
                                    if (_ = r === E ? c : E[c], S = r[_], x = d(_, S, c), p[x]) C = p[x], delete p[x], M[x] = C, A[c] = C;
                                    else {
                                        if (M[x]) throw i(A, function(e) {
                                            e && e.scope && (p[e.id] = e)
                                        }), u("dupes", l, x, S);
                                        A[c] = {
                                            id: x,
                                            scope: n,
                                            clone: n
                                        }, M[x] = !0
                                    }
                                for ($ in p) {
                                    if (C = p[$], x = se(C.clone), o.leave(x), x[0].parentNode)
                                        for (c = 0, d = x.length; d > c; c++) x[c].$$NG_REMOVED = !0;
                                    C.scope.$destroy()
                                }
                                for (c = 0; b > c; c++)
                                    if (_ = r === E ? c : E[c], S = r[_], C = A[c], C.scope) {
                                        $ = k;
                                        do $ = $.nextSibling; while ($ && $.$$NG_REMOVED);
                                        C.clone[0] != $ && o.move(se(C.clone), null, zn(k)), k = C.clone[C.clone.length - 1], s(C.scope, c, m, S, v, _, b)
                                    } else h(function(e, t) {
                                        C.scope = t;
                                        var n = f.cloneNode(!1);
                                        e[e.length++] = n, o.enter(e, null, zn(k)), k = n, C.clone = e, M[C.id] = C, s(C.scope, c, m, S, v, _, b)
                                    });
                                p = M
                            })
                        }
                }
            }
        }],
        ki = ["$animate", function(e) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(t, n, r) {
                    t.$watch(r.ngShow, function(t) {
                        e[t ? "removeClass" : "addClass"](n, "ng-hide", {
                            tempClasses: "ng-hide-animate"
                        })
                    })
                }
            }
        }],
        Mi = ["$animate", function(e) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(t, n, r) {
                    t.$watch(r.ngHide, function(t) {
                        e[t ? "addClass" : "removeClass"](n, "ng-hide", {
                            tempClasses: "ng-hide-animate"
                        })
                    })
                }
            }
        }],
        Ni = Tn(function(e, t, n) {
            e.$watch(n.ngStyle, function(e, n) {
                n && e !== n && i(n, function(e, n) {
                    t.css(n, "")
                }), e && t.css(e)
            }, !0)
        }),
        Oi = ["$animate", function(e) {
            return {
                require: "ngSwitch",
                controller: ["$scope", function() {
                    this.cases = {}
                }],
                link: function(n, r, a, o) {
                    var u = [],
                        s = [],
                        c = [],
                        l = [],
                        f = function(e, t) {
                            return function() {
                                e.splice(t, 1)
                            }
                        };
                    n.$watch(a.ngSwitch || a.on, function(n) {
                        var r, a;
                        for (r = 0, a = c.length; a > r; ++r) e.cancel(c[r]);
                        for (r = c.length = 0, a = l.length; a > r; ++r) {
                            var h = se(s[r].clone);
                            l[r].$destroy(), (c[r] = e.leave(h)).then(f(c, r))
                        }
                        s.length = 0, l.length = 0, (u = o.cases["!" + n] || o.cases["?"]) && i(u, function(n) {
                            n.transclude(function(r, a) {
                                l.push(a);
                                var i = n.element;
                                r[r.length++] = t.createComment(" end ngSwitchWhen: "), s.push({
                                    clone: r
                                }), e.enter(r, i.parent(), i)
                            })
                        })
                    })
                }
            }
        }],
        Ti = Tn({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(e, t, n, r, a) {
                r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [], r.cases["!" + n.ngSwitchWhen].push({
                    transclude: a,
                    element: t
                })
            }
        }),
        Ii = Tn({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(e, t, n, r, a) {
                r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({
                    transclude: a,
                    element: t
                })
            }
        }),
        ji = r("ngTransclude"),
        Pi = Tn({
            restrict: "EAC",
            link: function(e, t, n, r, a) {
                if (n.ngTransclude === n.$attr.ngTransclude && (n.ngTransclude = ""), !a) throw ji("orphan", z(t));
                a(function(e) {
                    e.length && (t.empty(), t.append(e))
                }, null, n.ngTransclude || n.ngTranscludeSlot)
            }
        }),
        Li = ["$templateCache", function(e) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function(t, n) {
                    "text/ng-template" == n.type && e.put(n.id, t[0].text)
                }
            }
        }],
        Ui = {
            $setViewValue: d,
            $render: d
        },
        Vi = ["$element", "$scope", "$attrs", function(e, r, a) {
            var i = this,
                o = new Ue;
            i.ngModelCtrl = Ui, i.unknownOption = zn(t.createElement("option")), i.renderUnknownOption = function(t) {
                t = "? " + Le(t) + " ?", i.unknownOption.val(t), e.prepend(i.unknownOption), e.val(t)
            }, r.$on("$destroy", function() {
                i.renderUnknownOption = d
            }), i.removeUnknownOption = function() {
                i.unknownOption.parent() && i.unknownOption.remove()
            }, i.readValue = function() {
                return i.removeUnknownOption(), e.val()
            }, i.writeValue = function(t) {
                i.hasOption(t) ? (i.removeUnknownOption(), e.val(t), "" === t && i.emptyOption.prop("selected", !0)) : null == t && i.emptyOption ? (i.removeUnknownOption(), e.val("")) : i.renderUnknownOption(t)
            }, i.addOption = function(e, t) {
                oe(e, '"option value"'), "" === e && (i.emptyOption = t);
                var n = o.get(e) || 0;
                o.put(e, n + 1), i.ngModelCtrl.$render(), t[0].hasAttribute("selected") && (t[0].selected = !0)
            }, i.removeOption = function(e) {
                var t = o.get(e);
                t && (1 === t ? (o.remove(e), "" === e && (i.emptyOption = n)) : o.put(e, t - 1))
            }, i.hasOption = function(e) {
                return !!o.get(e)
            }, i.registerOption = function(e, t, n, r, a) {
                if (r) {
                    var o;
                    n.$observe("value", function(e) {
                        b(o) && i.removeOption(o), o = e, i.addOption(e, t)
                    })
                } else a ? e.$watch(a, function(e, r) {
                    n.$set("value", e), r !== e && i.removeOption(r), i.addOption(e, t)
                }) : i.addOption(n.value, t);
                t.on("$destroy", function() {
                    i.removeOption(n.value), i.ngModelCtrl.$render()
                })
            }
        }],
        Ri = function() {
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: Vi,
                priority: 1,
                link: {
                    pre: function(e, t, n, r) {
                        var a = r[1];
                        if (a) {
                            var o = r[0];
                            if (o.ngModelCtrl = a, t.on("change", function() {
                                    e.$apply(function() {
                                        a.$setViewValue(o.readValue())
                                    })
                                }), n.multiple) {
                                o.readValue = function() {
                                    var e = [];
                                    return i(t.find("option"), function(t) {
                                        t.selected && e.push(t.value)
                                    }), e
                                }, o.writeValue = function(e) {
                                    var n = new Ue(e);
                                    i(t.find("option"), function(e) {
                                        e.selected = b(n.get(e.value))
                                    })
                                };
                                var u, s = NaN;
                                e.$watch(function() {
                                    s !== a.$viewValue || L(u, a.$viewValue) || (u = P(a.$viewValue), a.$render()), s = a.$viewValue
                                }), a.$isEmpty = function(e) {
                                    return !e || 0 === e.length
                                }
                            }
                        }
                    },
                    post: function(e, t, n, r) {
                        var a = r[1];
                        if (a) {
                            var i = r[0];
                            a.$render = function() {
                                i.writeValue(a.$viewValue)
                            }
                        }
                    }
                }
            }
        },
        Di = ["$interpolate", function(e) {
            return {
                restrict: "E",
                priority: 100,
                compile: function(t, n) {
                    if (b(n.value)) var r = e(n.value, !0);
                    else {
                        var a = e(t.text(), !0);
                        a || n.$set("value", t.text())
                    }
                    return function(e, t, n) {
                        var i = t.parent();
                        (i = i.data("$selectController") || i.parent().data("$selectController")) && i.registerOption(e, t, n, r, a)
                    }
                }
            }
        }],
        Bi = $({
            restrict: "E",
            terminal: !1
        }),
        Fi = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(e, t, n, r) {
                    r && (n.required = !0, r.$validators.required = function(e, t) {
                        return !n.required || !r.$isEmpty(t)
                    }, n.$observe("required", function() {
                        r.$validate()
                    }))
                }
            }
        },
        Gi = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(e, t, a, i) {
                    if (i) {
                        var o, u = a.ngPattern || a.pattern;
                        a.$observe("pattern", function(e) {
                            if (Z(e) && 0 < e.length && (e = new RegExp("^" + e + "$")), e && !e.test) throw r("ngPattern")("noregexp", u, e, z(t));
                            o = e || n, i.$validate()
                        }), i.$validators.pattern = function(e, t) {
                            return i.$isEmpty(t) || v(o) || o.test(t)
                        }
                    }
                }
            }
        },
        zi = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(e, t, n, r) {
                    if (r) {
                        var a = -1;
                        n.$observe("maxlength", function(e) {
                            e = h(e), a = isNaN(e) ? -1 : e, r.$validate()
                        }), r.$validators.maxlength = function(e, t) {
                            return 0 > a || r.$isEmpty(t) || t.length <= a
                        }
                    }
                }
            }
        },
        Hi = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(e, t, n, r) {
                    if (r) {
                        var a = 0;
                        n.$observe("minlength", function(e) {
                            a = h(e) || 0, r.$validate()
                        }), r.$validators.minlength = function(e, t) {
                            return r.$isEmpty(t) || t.length >= a
                        }
                    }
                }
            }
        };
    e.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : (re(), fe(ar), ar.module("ngLocale", [], ["$provide", function(e) {
        function t(e) {
            e += "";
            var t = e.indexOf(".");
            return -1 == t ? 0 : e.length - t - 1
        }
        e.value("$locale", {
            DATETIME_FORMATS: {
                AMPMS: ["AM", "PM"],
                DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                ERANAMES: ["Before Christ", "Anno Domini"],
                ERAS: ["BC", "AD"],
                FIRSTDAYOFWEEK: 6,
                MONTH: "January February March April May June July August September October November December".split(" "),
                SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                STANDALONEMONTH: "January February March April May June July August September October November December".split(" "),
                WEEKENDRANGE: [5, 6],
                fullDate: "EEEE, MMMM d, y",
                longDate: "MMMM d, y",
                medium: "MMM d, y h:mm:ss a",
                mediumDate: "MMM d, y",
                mediumTime: "h:mm:ss a",
                "short": "M/d/yy h:mm a",
                shortDate: "M/d/yy",
                shortTime: "h:mm a"
            },
            NUMBER_FORMATS: {
                CURRENCY_SYM: "$",
                DECIMAL_SEP: ".",
                GROUP_SEP: ",",
                PATTERNS: [{
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 3,
                    minFrac: 0,
                    minInt: 1,
                    negPre: "-",
                    negSuf: "",
                    posPre: "",
                    posSuf: ""
                }, {
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 2,
                    minFrac: 2,
                    minInt: 1,
                    negPre: "-¤",
                    negSuf: "",
                    posPre: "¤",
                    posSuf: ""
                }]
            },
            id: "en-us",
            localeID: "en_US",
            pluralCat: function(e, r) {
                var a = 0 | e,
                    i = r;
                return n === i && (i = Math.min(t(e), 3)), Math.pow(10, i), 1 == a && 0 == i ? "one" : "other"
            }
        })
    }]), zn(t).ready(function() {
        X(t, Q)
    }))
}(window, document), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'), "undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"),
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            return V(new(V(function() {}, {
                prototype: e
            })), t)
        }

        function a(e) {
            return U(arguments, function(t) {
                t !== e && U(t, function(t, n) {
                    e.hasOwnProperty(n) || (e[n] = t)
                })
            }), e
        }

        function i(e, t) {
            var n = [];
            for (var r in e.path) {
                if (e.path[r] !== t.path[r]) break;
                n.push(e.path[r])
            }
            return n
        }

        function o(e) {
            if (Object.keys) return Object.keys(e);
            var t = [];
            return U(e, function(e, n) {
                t.push(n)
            }), t
        }

        function u(e, t) {
            if (Array.prototype.indexOf) return e.indexOf(t, Number(arguments[2]) || 0);
            var n = e.length >>> 0,
                r = Number(arguments[2]) || 0;
            for (r = 0 > r ? Math.ceil(r) : Math.floor(r), 0 > r && (r += n); n > r; r++)
                if (r in e && e[r] === t) return r;
            return -1
        }

        function s(e, t, n, r) {
            var a, s = i(n, r),
                c = {},
                l = [];
            for (var f in s)
                if (s[f].params && (a = o(s[f].params), a.length))
                    for (var h in a) u(l, a[h]) >= 0 || (l.push(a[h]), c[a[h]] = e[a[h]]);
            return V({}, c, t)
        }

        function c(e, t, n) {
            if (!n) {
                n = [];
                for (var r in e) n.push(r)
            }
            for (var a = 0; a < n.length; a++) {
                var i = n[a];
                if (e[i] != t[i]) return !1
            }
            return !0
        }

        function l(e, t) {
            var n = {};
            return U(e, function(e) {
                n[e] = t[e]
            }), n
        }

        function f(e) {
            var t = {},
                n = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
            return U(n, function(n) {
                n in e && (t[n] = e[n])
            }), t
        }

        function h(e) {
            var t = {},
                n = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
            for (var r in e) - 1 == u(n, r) && (t[r] = e[r]);
            return t
        }

        function p(e, t) {
            var n = L(e),
                r = n ? [] : {};
            return U(e, function(e, a) {
                t(e, a) && (r[n ? r.length : a] = e)
            }), r
        }

        function d(e, t) {
            var n = L(e) ? [] : {};
            return U(e, function(e, r) {
                n[r] = t(e, r)
            }), n
        }

        function g(e, t) {
            var r = 1,
                i = 2,
                s = {},
                c = [],
                l = s,
                f = V(e.when(s), {
                    $$promises: s,
                    $$values: s
                });
            this.study = function(s) {
                function p(e, n) {
                    if (v[n] !== i) {
                        if (m.push(n), v[n] === r) throw m.splice(0, u(m, n)), new Error("Cyclic dependency: " + m.join(" -> "));
                        if (v[n] = r, j(e)) $.push(n, [function() {
                            return t.get(e)
                        }], c);
                        else {
                            var a = t.annotate(e);
                            U(a, function(e) {
                                e !== n && s.hasOwnProperty(e) && p(s[e], e)
                            }), $.push(n, e, a)
                        }
                        m.pop(), v[n] = i
                    }
                }

                function d(e) {
                    return P(e) && e.then && e.$$promises
                }
                if (!P(s)) throw new Error("'invocables' must be an object");
                var g = o(s || {}),
                    $ = [],
                    m = [],
                    v = {};
                return U(s, p), s = m = v = null,
                    function(r, i, o) {
                        function u() {
                            --y || (w || a(b, i.$$values), m.$$values = b, m.$$promises = m.$$promises || !0, delete m.$$inheritedValues, p.resolve(b))
                        }

                        function s(e) {
                            m.$$failure = e, p.reject(e)
                        }

                        function c(n, a, i) {
                            function c(e) {
                                f.reject(e), s(e)
                            }

                            function l() {
                                if (!T(m.$$failure)) try {
                                    f.resolve(t.invoke(a, o, b)), f.promise.then(function(e) {
                                        b[n] = e, u()
                                    }, c)
                                } catch (e) {
                                    c(e)
                                }
                            }
                            var f = e.defer(),
                                h = 0;
                            U(i, function(e) {
                                v.hasOwnProperty(e) && !r.hasOwnProperty(e) && (h++, v[e].then(function(t) {
                                    b[e] = t, --h || l()
                                }, c))
                            }), h || l(), v[n] = f.promise
                        }
                        if (d(r) && o === n && (o = i, i = r, r = null), r) {
                            if (!P(r)) throw new Error("'locals' must be an object")
                        } else r = l;
                        if (i) {
                            if (!d(i)) throw new Error("'parent' must be a promise returned by $resolve.resolve()")
                        } else i = f;
                        var p = e.defer(),
                            m = p.promise,
                            v = m.$$promises = {},
                            b = V({}, r),
                            y = 1 + $.length / 3,
                            w = !1;
                        if (T(i.$$failure)) return s(i.$$failure), m;
                        i.$$inheritedValues && a(b, h(i.$$inheritedValues, g)), V(v, i.$$promises), i.$$values ? (w = a(b, h(i.$$values, g)), m.$$inheritedValues = h(i.$$values, g), u()) : (i.$$inheritedValues && (m.$$inheritedValues = h(i.$$inheritedValues, g)), i.then(u, s));
                        for (var Z = 0, _ = $.length; _ > Z; Z += 3) r.hasOwnProperty($[Z]) ? u() : c($[Z], $[Z + 1], $[Z + 2]);
                        return m
                    }
            }, this.resolve = function(e, t, n, r) {
                return this.study(e)(t, n, r)
            }
        }

        function $(e, t, n) {
            this.fromConfig = function(e, t, n) {
                return T(e.template) ? this.fromString(e.template, t) : T(e.templateUrl) ? this.fromUrl(e.templateUrl, t) : T(e.templateProvider) ? this.fromProvider(e.templateProvider, t, n) : null
            }, this.fromString = function(e, t) {
                return I(e) ? e(t) : e
            }, this.fromUrl = function(n, r) {
                return I(n) && (n = n(r)), null == n ? null : e.get(n, {
                    cache: t,
                    headers: {
                        Accept: "text/html"
                    }
                }).then(function(e) {
                    return e.data
                })
            }, this.fromProvider = function(e, t, r) {
                return n.invoke(e, null, r || {
                    params: t
                })
            }
        }

        function m(e, t, a) {
            function i(t, n, r, a) {
                if ($.push(t), d[t]) return d[t];
                if (!/^\w+(-+\w+)*(?:\[\])?$/.test(t)) throw new Error("Invalid parameter name '" + t + "' in pattern '" + e + "'");
                if (g[t]) throw new Error("Duplicate parameter name '" + t + "' in pattern '" + e + "'");
                return g[t] = new D.Param(t, n, r, a), g[t]
            }

            function o(e, t, n, r) {
                var a = ["", ""],
                    i = e.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
                if (!t) return i;
                switch (n) {
                    case !1:
                        a = ["(", ")" + (r ? "?" : "")];
                        break;
                    case !0:
                        a = ["?(", ")?"];
                        break;
                    default:
                        a = ["(" + n + "|", ")?"]
                }
                return i + a[0] + t + a[1]
            }

            function u(a, i) {
                var o, u, s, c, l;
                return o = a[2] || a[3], l = t.params[o], s = e.substring(h, a.index), u = i ? a[4] : a[4] || ("*" == a[1] ? ".*" : null), c = D.type(u || "string") || r(D.type("string"), {
                    pattern: new RegExp(u, t.caseInsensitive ? "i" : n)
                }), {
                    id: o,
                    regexp: u,
                    segment: s,
                    type: c,
                    cfg: l
                }
            }
            t = V({
                params: {}
            }, P(t) ? t : {});
            var s, c = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
                l = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
                f = "^",
                h = 0,
                p = this.segments = [],
                d = a ? a.params : {},
                g = this.params = a ? a.params.$$new() : new D.ParamSet,
                $ = [];
            this.source = e;
            for (var m, v, b;
                (s = c.exec(e)) && (m = u(s, !1), !(m.segment.indexOf("?") >= 0));) v = i(m.id, m.type, m.cfg, "path"), f += o(m.segment, v.type.pattern.source, v.squash, v.isOptional), p.push(m.segment), h = c.lastIndex;
            b = e.substring(h);
            var y = b.indexOf("?");
            if (y >= 0) {
                var w = this.sourceSearch = b.substring(y);
                if (b = b.substring(0, y), this.sourcePath = e.substring(0, h + y), w.length > 0)
                    for (h = 0; s = l.exec(w);) m = u(s, !0), v = i(m.id, m.type, m.cfg, "search"), h = c.lastIndex
            } else this.sourcePath = e, this.sourceSearch = "";
            f += o(b) + (t.strict === !1 ? "/?" : "") + "$", p.push(b), this.regexp = new RegExp(f, t.caseInsensitive ? "i" : n), this.prefix = p[0], this.$$paramNames = $
        }

        function v(e) {
            V(this, e)
        }

        function b() {
            function e(e) {
                return null != e ? e.toString().replace(/\//g, "%2F") : e
            }

            function a(e) {
                return null != e ? e.toString().replace(/%2F/g, "/") : e
            }

            function i() {
                return {
                    strict: g,
                    caseInsensitive: h
                }
            }

            function s(e) {
                return I(e) || L(e) && I(e[e.length - 1])
            }

            function c() {
                for (; Z.length;) {
                    var e = Z.shift();
                    if (e.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
                    t.extend(y[e.name], f.invoke(e.def))
                }
            }

            function l(e) {
                V(this, e || {})
            }
            D = this;
            var f, h = !1,
                g = !0,
                $ = !1,
                y = {},
                w = !0,
                Z = [],
                _ = {
                    string: {
                        encode: e,
                        decode: a,
                        is: function(e) {
                            return null == e || !T(e) || "string" == typeof e
                        },
                        pattern: /[^\/]*/
                    },
                    "int": {
                        encode: e,
                        decode: function(e) {
                            return parseInt(e, 10)
                        },
                        is: function(e) {
                            return T(e) && this.decode(e.toString()) === e
                        },
                        pattern: /\d+/
                    },
                    bool: {
                        encode: function(e) {
                            return e ? 1 : 0
                        },
                        decode: function(e) {
                            return 0 !== parseInt(e, 10)
                        },
                        is: function(e) {
                            return e === !0 || e === !1
                        },
                        pattern: /0|1/
                    },
                    date: {
                        encode: function(e) {
                            return this.is(e) ? [e.getFullYear(), ("0" + (e.getMonth() + 1)).slice(-2), ("0" + e.getDate()).slice(-2)].join("-") : n
                        },
                        decode: function(e) {
                            if (this.is(e)) return e;
                            var t = this.capture.exec(e);
                            return t ? new Date(t[1], t[2] - 1, t[3]) : n
                        },
                        is: function(e) {
                            return e instanceof Date && !isNaN(e.valueOf())
                        },
                        equals: function(e, t) {
                            return this.is(e) && this.is(t) && e.toISOString() === t.toISOString()
                        },
                        pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                        capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
                    },
                    json: {
                        encode: t.toJson,
                        decode: t.fromJson,
                        is: t.isObject,
                        equals: t.equals,
                        pattern: /[^\/]*/
                    },
                    any: {
                        encode: t.identity,
                        decode: t.identity,
                        equals: t.equals,
                        pattern: /.*/
                    }
                };
            b.$$getDefaultValue = function(e) {
                if (!s(e.value)) return e.value;
                if (!f) throw new Error("Injectable functions cannot be called at configuration time");
                return f.invoke(e.value)
            }, this.caseInsensitive = function(e) {
                return T(e) && (h = e), h
            }, this.strictMode = function(e) {
                return T(e) && (g = e), g
            }, this.defaultSquashPolicy = function(e) {
                if (!T(e)) return $;
                if (e !== !0 && e !== !1 && !j(e)) throw new Error("Invalid squash policy: " + e + ". Valid policies: false, true, arbitrary-string");
                return $ = e, e
            }, this.compile = function(e, t) {
                return new m(e, V(i(), t))
            }, this.isMatcher = function(e) {
                if (!P(e)) return !1;
                var t = !0;
                return U(m.prototype, function(n, r) {
                    I(n) && (t = t && T(e[r]) && I(e[r]))
                }), t
            }, this.type = function(e, t, n) {
                if (!T(t)) return y[e];
                if (y.hasOwnProperty(e)) throw new Error("A type named '" + e + "' has already been defined.");
                return y[e] = new v(V({
                    name: e
                }, t)), n && (Z.push({
                    name: e,
                    def: n
                }), w || c()), this
            }, U(_, function(e, t) {
                y[t] = new v(V({
                    name: t
                }, e))
            }), y = r(y, {}), this.$get = ["$injector", function(e) {
                return f = e, w = !1, c(), U(_, function(e, t) {
                    y[t] || (y[t] = new v(e))
                }), this
            }], this.Param = function(e, t, r, a) {
                function i(e) {
                    var t = P(e) ? o(e) : [],
                        n = -1 === u(t, "value") && -1 === u(t, "type") && -1 === u(t, "squash") && -1 === u(t, "array");
                    return n && (e = {
                        value: e
                    }), e.$$fn = s(e.value) ? e.value : function() {
                        return e.value
                    }, e
                }

                function c(t, n, r) {
                    if (t.type && n) throw new Error("Param '" + e + "' has two type configurations.");
                    return n ? n : t.type ? t.type instanceof v ? t.type : new v(t.type) : "config" === r ? y.any : y.string
                }

                function l() {
                    var t = {
                            array: "search" === a ? "auto" : !1
                        },
                        n = e.match(/\[\]$/) ? {
                            array: !0
                        } : {};
                    return V(t, n, r).array
                }

                function h(e, t) {
                    var n = e.squash;
                    if (!t || n === !1) return !1;
                    if (!T(n) || null == n) return $;
                    if (n === !0 || j(n)) return n;
                    throw new Error("Invalid squash policy: '" + n + "'. Valid policies: false, true, or arbitrary string")
                }

                function g(e, t, r, a) {
                    var i, o, s = [{
                        from: "",
                        to: r || t ? n : ""
                    }, {
                        from: null,
                        to: r || t ? n : ""
                    }];
                    return i = L(e.replace) ? e.replace : [], j(a) && i.push({
                        from: a,
                        to: n
                    }), o = d(i, function(e) {
                        return e.from
                    }), p(s, function(e) {
                        return -1 === u(o, e.from)
                    }).concat(i)
                }

                function m() {
                    if (!f) throw new Error("Injectable functions cannot be called at configuration time");
                    var e = f.invoke(r.$$fn);
                    if (null !== e && e !== n && !Z.type.is(e)) throw new Error("Default value (" + e + ") for parameter '" + Z.id + "' is not an instance of Type (" + Z.type.name + ")");
                    return e
                }

                function b(e) {
                    function t(e) {
                        return function(t) {
                            return t.from === e
                        }
                    }

                    function n(e) {
                        var n = d(p(Z.replace, t(e)), function(e) {
                            return e.to
                        });
                        return n.length ? n[0] : e
                    }
                    return e = n(e), T(e) ? Z.type.$normalize(e) : m()
                }

                function w() {
                    return "{Param:" + e + " " + t + " squash: '" + x + "' optional: " + S + "}"
                }
                var Z = this;
                r = i(r), t = c(r, t, a);
                var _ = l();
                t = _ ? t.$asArray(_, "search" === a) : t, "string" !== t.name || _ || "path" !== a || r.value !== n || (r.value = "");
                var S = r.value !== n,
                    x = h(r, S),
                    E = g(r, _, S, x);
                V(this, {
                    id: e,
                    type: t,
                    location: a,
                    array: _,
                    squash: x,
                    replace: E,
                    isOptional: S,
                    value: b,
                    dynamic: n,
                    config: r,
                    toString: w
                })
            }, l.prototype = {
                $$new: function() {
                    return r(this, V(new l, {
                        $$parent: this
                    }))
                },
                $$keys: function() {
                    for (var e = [], t = [], n = this, r = o(l.prototype); n;) t.push(n), n = n.$$parent;
                    return t.reverse(), U(t, function(t) {
                        U(o(t), function(t) {
                            -1 === u(e, t) && -1 === u(r, t) && e.push(t)
                        })
                    }), e
                },
                $$values: function(e) {
                    var t = {},
                        n = this;
                    return U(n.$$keys(), function(r) {
                        t[r] = n[r].value(e && e[r])
                    }), t
                },
                $$equals: function(e, t) {
                    var n = !0,
                        r = this;
                    return U(r.$$keys(), function(a) {
                        var i = e && e[a],
                            o = t && t[a];
                        r[a].type.equals(i, o) || (n = !1)
                    }), n
                },
                $$validates: function(e) {
                    var r, a, i, o, u, s = this.$$keys();
                    for (r = 0; r < s.length && (a = this[s[r]], i = e[s[r]], i !== n && null !== i || !a.isOptional); r++) {
                        if (o = a.type.$normalize(i), !a.type.is(o)) return !1;
                        if (u = a.type.encode(o), t.isString(u) && !a.type.pattern.exec(u)) return !1
                    }
                    return !0
                },
                $$parent: n
            }, this.ParamSet = l
        }

        function y(e, r) {
            function a(e) {
                var t = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(e.source);
                return null != t ? t[1].replace(/\\(.)/g, "$1") : ""
            }

            function i(e, t) {
                return e.replace(/\$(\$|\d{1,2})/, function(e, n) {
                    return t["$" === n ? 0 : Number(n)]
                })
            }

            function o(e, t, n) {
                if (!n) return !1;
                var r = e.invoke(t, t, {
                    $match: n
                });
                return T(r) ? r : !0
            }

            function u(r, a, i, o) {
                function u(e, t, n) {
                    return "/" === g ? e : t ? g.slice(0, -1) + e : n ? g.slice(1) + e : e
                }

                function h(e) {
                    function t(e) {
                        var t = e(i, r);
                        return t ? (j(t) && r.replace().url(t), !0) : !1
                    }
                    if (!e || !e.defaultPrevented) {
                        d && r.url() === d, d = n;
                        var a, o = c.length;
                        for (a = 0; o > a; a++)
                            if (t(c[a])) return;
                        l && t(l)
                    }
                }

                function p() {
                    return s = s || a.$on("$locationChangeSuccess", h)
                }
                var d, g = o.baseHref(),
                    $ = r.url();
                return f || p(), {
                    sync: function() {
                        h()
                    },
                    listen: function() {
                        return p()
                    },
                    update: function(e) {
                        return e ? void($ = r.url()) : void(r.url() !== $ && (r.url($), r.replace()))
                    },
                    push: function(e, t, a) {
                        var i = e.format(t || {});
                        null !== i && t && t["#"] && (i += "#" + t["#"]), r.url(i), d = a && a.$$avoidResync ? r.url() : n, a && a.replace && r.replace()
                    },
                    href: function(n, a, i) {
                        if (!n.validates(a)) return null;
                        var o = e.html5Mode();
                        t.isObject(o) && (o = o.enabled);
                        var s = n.format(a);
                        if (i = i || {}, o || null === s || (s = "#" + e.hashPrefix() + s), null !== s && a && a["#"] && (s += "#" + a["#"]), s = u(s, o, i.absolute), !i.absolute || !s) return s;
                        var c = !o && s ? "/" : "",
                            l = r.port();
                        return l = 80 === l || 443 === l ? "" : ":" + l, [r.protocol(), "://", r.host(), l, c, s].join("")
                    }
                }
            }
            var s, c = [],
                l = null,
                f = !1;
            this.rule = function(e) {
                if (!I(e)) throw new Error("'rule' must be a function");
                return c.push(e), this
            }, this.otherwise = function(e) {
                if (j(e)) {
                    var t = e;
                    e = function() {
                        return t
                    }
                } else if (!I(e)) throw new Error("'rule' must be a function");
                return l = e, this
            }, this.when = function(e, t) {
                var n, u = j(t);
                if (j(e) && (e = r.compile(e)), !u && !I(t) && !L(t)) throw new Error("invalid 'handler' in when()");
                var s = {
                        matcher: function(e, t) {
                            return u && (n = r.compile(t), t = ["$match", function(e) {
                                return n.format(e)
                            }]), V(function(n, r) {
                                return o(n, t, e.exec(r.path(), r.search()))
                            }, {
                                prefix: j(e.prefix) ? e.prefix : ""
                            })
                        },
                        regex: function(e, t) {
                            if (e.global || e.sticky) throw new Error("when() RegExp must not be global or sticky");
                            return u && (n = t, t = ["$match", function(e) {
                                return i(n, e)
                            }]), V(function(n, r) {
                                return o(n, t, e.exec(r.path()))
                            }, {
                                prefix: a(e)
                            })
                        }
                    },
                    c = {
                        matcher: r.isMatcher(e),
                        regex: e instanceof RegExp
                    };
                for (var l in c)
                    if (c[l]) return this.rule(s[l](e, t));
                throw new Error("invalid 'what' in when()")
            }, this.deferIntercept = function(e) {
                e === n && (e = !0), f = e
            }, this.$get = u, u.$inject = ["$location", "$rootScope", "$injector", "$browser"]
        }

        function w(e, a) {
            function i(e) {
                return 0 === e.indexOf(".") || 0 === e.indexOf("^")
            }

            function h(e, t) {
                if (!e) return n;
                var r = j(e),
                    a = r ? e : e.name,
                    o = i(a);
                if (o) {
                    if (!t) throw new Error("No reference point given for path '" + a + "'");
                    t = h(t);
                    for (var u = a.split("."), s = 0, c = u.length, l = t; c > s; s++)
                        if ("" !== u[s] || 0 !== s) {
                            if ("^" !== u[s]) break;
                            if (!l.parent) throw new Error("Path '" + a + "' not valid for state '" + t.name + "'");
                            l = l.parent
                        } else l = t;
                    u = u.slice(s).join("."), a = l.name + (l.name && u ? "." : "") + u
                }
                var f = x[a];
                return !f || !r && (r || f !== e && f.self !== e) ? n : f
            }

            function p(e, t) {
                E[e] || (E[e] = []), E[e].push(t)
            }

            function g(e) {
                for (var t = E[e] || []; t.length;) $(t.shift())
            }

            function $(t) {
                t = r(t, {
                    self: t,
                    resolve: t.resolve || {},
                    toString: function() {
                        return this.name
                    }
                });
                var n = t.name;
                if (!j(n) || n.indexOf("@") >= 0) throw new Error("State must have a valid name");
                if (x.hasOwnProperty(n)) throw new Error("State '" + n + "'' is already defined");
                var a = -1 !== n.indexOf(".") ? n.substring(0, n.lastIndexOf(".")) : j(t.parent) ? t.parent : P(t.parent) && j(t.parent.name) ? t.parent.name : "";
                if (a && !x[a]) return p(a, t.self);
                for (var i in A) I(A[i]) && (t[i] = A[i](t, A.$delegates[i]));
                return x[n] = t, !t[C] && t.url && e.when(t.url, ["$match", "$stateParams", function(e, n) {
                    S.$current.navigable == t && c(e, n) || S.transitionTo(t, e, {
                        inherit: !0,
                        location: !1
                    })
                }]), g(n), t
            }

            function m(e) {
                return e.indexOf("*") > -1
            }

            function v(e) {
                for (var t = e.split("."), n = S.$current.name.split("."), r = 0, a = t.length; a > r; r++) "*" === t[r] && (n[r] = "*");
                return "**" === t[0] && (n = n.slice(u(n, t[1])), n.unshift("**")), "**" === t[t.length - 1] && (n.splice(u(n, t[t.length - 2]) + 1, Number.MAX_VALUE), n.push("**")), t.length != n.length ? !1 : n.join("") === t.join("")
            }

            function b(e, t) {
                return j(e) && !T(t) ? A[e] : I(t) && j(e) ? (A[e] && !A.$delegates[e] && (A.$delegates[e] = A[e]), A[e] = t, this) : this
            }

            function y(e, t) {
                return P(e) ? t = e : t.name = e, $(t), this
            }

            function w(e, a, i, u, f, p, g, $, b) {
                function y(t, n, r, i) {
                    var o = e.$broadcast("$stateNotFound", t, n, r);
                    if (o.defaultPrevented) return g.update(), k;
                    if (!o.retry) return null;
                    if (i.$retry) return g.update(), M;
                    var u = S.transition = a.when(o.retry);
                    return u.then(function() {
                        return u !== S.transition ? E : (t.options.$retry = !0, S.transitionTo(t.to, t.toParams, t.options))
                    }, function() {
                        return k
                    }), g.update(), u
                }

                function w(e, n, r, o, s, c) {
                    function h() {
                        var n = [];
                        return U(e.views, function(r, a) {
                            var o = r.resolve && r.resolve !== e.resolve ? r.resolve : {};
                            o.$template = [function() {
                                return i.load(a, {
                                    view: r,
                                    locals: s.globals,
                                    params: p,
                                    notify: c.notify
                                }) || ""
                            }], n.push(f.resolve(o, s.globals, s.resolve, e).then(function(n) {
                                if (I(r.controllerProvider) || L(r.controllerProvider)) {
                                    var i = t.extend({}, o, s.globals);
                                    n.$$controller = u.invoke(r.controllerProvider, null, i)
                                } else n.$$controller = r.controller;
                                n.$$state = e, n.$$controllerAs = r.controllerAs, s[a] = n
                            }))
                        }), a.all(n).then(function() {
                            return s.globals
                        })
                    }
                    var p = r ? n : l(e.params.$$keys(), n),
                        d = {
                            $stateParams: p
                        };
                    s.resolve = f.resolve(e.resolve, d, s.resolve, e);
                    var g = [s.resolve.then(function(e) {
                        s.globals = e
                    })];
                    return o && g.push(o), a.all(g).then(h).then(function(e) {
                        return s
                    })
                }
                var E = a.reject(new Error("transition superseded")),
                    A = a.reject(new Error("transition prevented")),
                    k = a.reject(new Error("transition aborted")),
                    M = a.reject(new Error("transition failed"));
                return _.locals = {
                    resolve: null,
                    globals: {
                        $stateParams: {}
                    }
                }, S = {
                    params: {},
                    current: _.self,
                    $current: _,
                    transition: null
                }, S.reload = function(e) {
                    return S.transitionTo(S.current, p, {
                        reload: e || !0,
                        inherit: !1,
                        notify: !0
                    })
                }, S.go = function(e, t, n) {
                    return S.transitionTo(e, t, V({
                        inherit: !0,
                        relative: S.$current
                    }, n))
                }, S.transitionTo = function(t, n, i) {
                    n = n || {}, i = V({
                        location: !0,
                        inherit: !1,
                        relative: null,
                        notify: !0,
                        reload: !1,
                        $retry: !1
                    }, i || {});
                    var o, c = S.$current,
                        f = S.params,
                        d = c.path,
                        $ = h(t, i.relative),
                        m = n["#"];
                    if (!T($)) {
                        var v = {
                                to: t,
                                toParams: n,
                                options: i
                            },
                            b = y(v, c.self, f, i);
                        if (b) return b;
                        if (t = v.to, n = v.toParams, i = v.options, $ = h(t, i.relative), !T($)) {
                            if (!i.relative) throw new Error("No such state '" + t + "'");
                            throw new Error("Could not resolve '" + t + "' from state '" + i.relative + "'")
                        }
                    }
                    if ($[C]) throw new Error("Cannot transition to abstract state '" + t + "'");
                    if (i.inherit && (n = s(p, n || {}, S.$current, $)), !$.params.$$validates(n)) return M;
                    n = $.params.$$values(n), t = $;
                    var x = t.path,
                        k = 0,
                        N = x[k],
                        O = _.locals,
                        I = [];
                    if (i.reload) {
                        if (j(i.reload) || P(i.reload)) {
                            if (P(i.reload) && !i.reload.name) throw new Error("Invalid reload state object");
                            var L = i.reload === !0 ? d[0] : h(i.reload);
                            if (i.reload && !L) throw new Error("No such reload state '" + (j(i.reload) ? i.reload : i.reload.name) + "'");
                            for (; N && N === d[k] && N !== L;) O = I[k] = N.locals, k++, N = x[k]
                        }
                    } else
                        for (; N && N === d[k] && N.ownParams.$$equals(n, f);) O = I[k] = N.locals, k++, N = x[k];
                    if (Z(t, n, c, f, O, i)) return m && (n["#"] = m), S.params = n, R(S.params, p), i.location && t.navigable && t.navigable.url && (g.push(t.navigable.url, n, {
                        $$avoidResync: !0,
                        replace: "replace" === i.location
                    }), g.update(!0)), S.transition = null, a.when(S.current);
                    if (n = l(t.params.$$keys(), n || {}), i.notify && e.$broadcast("$stateChangeStart", t.self, n, c.self, f).defaultPrevented) return e.$broadcast("$stateChangeCancel", t.self, n, c.self, f), g.update(), A;
                    for (var U = a.when(O), D = k; D < x.length; D++, N = x[D]) O = I[D] = r(O), U = w(N, n, N === t, U, O, i);
                    var B = S.transition = U.then(function() {
                        var r, a, o;
                        if (S.transition !== B) return E;
                        for (r = d.length - 1; r >= k; r--) o = d[r], o.self.onExit && u.invoke(o.self.onExit, o.self, o.locals.globals), o.locals = null;
                        for (r = k; r < x.length; r++) a = x[r], a.locals = I[r], a.self.onEnter && u.invoke(a.self.onEnter, a.self, a.locals.globals);
                        return m && (n["#"] = m), S.transition !== B ? E : (S.$current = t, S.current = t.self, S.params = n, R(S.params, p), S.transition = null, i.location && t.navigable && g.push(t.navigable.url, t.navigable.locals.globals.$stateParams, {
                            $$avoidResync: !0,
                            replace: "replace" === i.location
                        }), i.notify && e.$broadcast("$stateChangeSuccess", t.self, n, c.self, f), g.update(!0), S.current)
                    }, function(r) {
                        return S.transition !== B ? E : (S.transition = null, o = e.$broadcast("$stateChangeError", t.self, n, c.self, f, r), o.defaultPrevented || g.update(), a.reject(r))
                    });
                    return B
                }, S.is = function(e, t, r) {
                    r = V({
                        relative: S.$current
                    }, r || {});
                    var a = h(e, r.relative);
                    return T(a) ? S.$current !== a ? !1 : t ? c(a.params.$$values(t), p) : !0 : n
                }, S.includes = function(e, t, r) {
                    if (r = V({
                            relative: S.$current
                        }, r || {}), j(e) && m(e)) {
                        if (!v(e)) return !1;
                        e = S.$current.name
                    }
                    var a = h(e, r.relative);
                    return T(a) ? T(S.$current.includes[a.name]) ? t ? c(a.params.$$values(t), p, o(t)) : !0 : !1 : n
                }, S.href = function(e, t, r) {
                    r = V({
                        lossy: !0,
                        inherit: !0,
                        absolute: !1,
                        relative: S.$current
                    }, r || {});
                    var a = h(e, r.relative);
                    if (!T(a)) return null;
                    r.inherit && (t = s(p, t || {}, S.$current, a));
                    var i = a && r.lossy ? a.navigable : a;
                    return i && i.url !== n && null !== i.url ? g.href(i.url, l(a.params.$$keys().concat("#"), t || {}), {
                        absolute: r.absolute
                    }) : null
                }, S.get = function(e, t) {
                    if (0 === arguments.length) return d(o(x), function(e) {
                        return x[e].self
                    });
                    var n = h(e, t || S.$current);
                    return n && n.self ? n.self : null
                }, S
            }

            function Z(e, t, n, r, a, i) {
                function o(e, t, n) {
                    function r(t) {
                        return "search" != e.params[t].location
                    }
                    var a = e.params.$$keys().filter(r),
                        i = f.apply({}, [e.params].concat(a)),
                        o = new D.ParamSet(i);
                    return o.$$equals(t, n)
                }
                return !i.reload && e === n && (a === n.locals || e.self.reloadOnSearch === !1 && o(n, r, t)) ? !0 : void 0
            }
            var _, S, x = {},
                E = {},
                C = "abstract",
                A = {
                    parent: function(e) {
                        if (T(e.parent) && e.parent) return h(e.parent);
                        var t = /^(.+)\.[^.]+$/.exec(e.name);
                        return t ? h(t[1]) : _
                    },
                    data: function(e) {
                        return e.parent && e.parent.data && (e.data = e.self.data = V({}, e.parent.data, e.data)), e.data
                    },
                    url: function(e) {
                        var t = e.url,
                            n = {
                                params: e.params || {}
                            };
                        if (j(t)) return "^" == t.charAt(0) ? a.compile(t.substring(1), n) : (e.parent.navigable || _).url.concat(t, n);
                        if (!t || a.isMatcher(t)) return t;
                        throw new Error("Invalid url '" + t + "' in state '" + e + "'")
                    },
                    navigable: function(e) {
                        return e.url ? e : e.parent ? e.parent.navigable : null
                    },
                    ownParams: function(e) {
                        var t = e.url && e.url.params || new D.ParamSet;
                        return U(e.params || {}, function(e, n) {
                            t[n] || (t[n] = new D.Param(n, null, e, "config"))
                        }), t
                    },
                    params: function(e) {
                        return e.parent && e.parent.params ? V(e.parent.params.$$new(), e.ownParams) : new D.ParamSet
                    },
                    views: function(e) {
                        var t = {};
                        return U(T(e.views) ? e.views : {
                            "": e
                        }, function(n, r) {
                            r.indexOf("@") < 0 && (r += "@" + e.parent.name), t[r] = n
                        }), t
                    },
                    path: function(e) {
                        return e.parent ? e.parent.path.concat(e) : []
                    },
                    includes: function(e) {
                        var t = e.parent ? V({}, e.parent.includes) : {};
                        return t[e.name] = !0, t
                    },
                    $delegates: {}
                };
            _ = $({
                name: "",
                url: "^",
                views: null,
                "abstract": !0
            }), _.navigable = null, this.decorator = b, this.state = y, this.$get = w, w.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"]
        }

        function Z() {
            function e(e, t) {
                return {
                    load: function(n, r) {
                        var a, i = {
                            template: null,
                            controller: null,
                            view: null,
                            locals: null,
                            notify: !0,
                            async: !0,
                            params: {}
                        };
                        return r = V(i, r), r.view && (a = t.fromConfig(r.view, r.params, r.locals)), a && r.notify && e.$broadcast("$viewContentLoading", r), a
                    }
                }
            }
            this.$get = e, e.$inject = ["$rootScope", "$templateFactory"]
        }

        function _() {
            var e = !1;
            this.useAnchorScroll = function() {
                e = !0
            }, this.$get = ["$anchorScroll", "$timeout", function(t, n) {
                return e ? t : function(e) {
                    return n(function() {
                        e[0].scrollIntoView()
                    }, 0, !1)
                }
            }]
        }

        function S(e, n, r, a) {
            function i() {
                return n.has ? function(e) {
                    return n.has(e) ? n.get(e) : null
                } : function(e) {
                    try {
                        return n.get(e)
                    } catch (t) {
                        return null
                    }
                }
            }

            function o(e, t) {
                var n = function() {
                    return {
                        enter: function(e, t, n) {
                            t.after(e), n()
                        },
                        leave: function(e, t) {
                            e.remove(), t()
                        }
                    }
                };
                if (c) return {
                    enter: function(e, t, n) {
                        var r = c.enter(e, null, t, n);
                        r && r.then && r.then(n)
                    },
                    leave: function(e, t) {
                        var n = c.leave(e, t);
                        n && n.then && n.then(t)
                    }
                };
                if (s) {
                    var r = s && s(t, e);
                    return {
                        enter: function(e, t, n) {
                            r.enter(e, null, t), n()
                        },
                        leave: function(e, t) {
                            r.leave(e), t()
                        }
                    }
                }
                return n()
            }
            var u = i(),
                s = u("$animator"),
                c = u("$animate"),
                l = {
                    restrict: "ECA",
                    terminal: !0,
                    priority: 400,
                    transclude: "element",
                    compile: function(n, i, u) {
                        return function(n, i, s) {
                            function c() {
                                f && (f.remove(), f = null), p && (p.$destroy(), p = null), h && (m.leave(h, function() {
                                    f = null
                                }), f = h, h = null)
                            }

                            function l(o) {
                                var l, f = E(n, s, i, a),
                                    v = f && e.$current && e.$current.locals[f];
                                if (o || v !== d) {
                                    l = n.$new(), d = e.$current.locals[f];
                                    var b = u(l, function(e) {
                                        m.enter(e, i, function() {
                                            p && p.$emit("$viewContentAnimationEnded"), (t.isDefined($) && !$ || n.$eval($)) && r(e)
                                        }), c()
                                    });
                                    h = b, p = l, p.$emit("$viewContentLoaded"), p.$eval(g)
                                }
                            }
                            var f, h, p, d, g = s.onload || "",
                                $ = s.autoscroll,
                                m = o(s, n);
                            n.$on("$stateChangeSuccess", function() {
                                l(!1)
                            }), n.$on("$viewContentLoading", function() {
                                l(!1)
                            }), l(!0)
                        }
                    }
                };
            return l
        }

        function x(e, t, n, r) {
            return {
                restrict: "ECA",
                priority: -400,
                compile: function(a) {
                    var i = a.html();
                    return function(a, o, u) {
                        var s = n.$current,
                            c = E(a, u, o, r),
                            l = s && s.locals[c];
                        if (l) {
                            o.data("$uiView", {
                                name: c,
                                state: l.$$state
                            }), o.html(l.$template ? l.$template : i);
                            var f = e(o.contents());
                            if (l.$$controller) {
                                l.$scope = a, l.$element = o;
                                var h = t(l.$$controller, l);
                                l.$$controllerAs && (a[l.$$controllerAs] = h), o.data("$ngControllerController", h), o.children().data("$ngControllerController", h)
                            }
                            f(a)
                        }
                    }
                }
            }
        }

        function E(e, t, n, r) {
            var a = r(t.uiView || t.name || "")(e),
                i = n.inheritedData("$uiView");
            return a.indexOf("@") >= 0 ? a : a + "@" + (i ? i.state.name : "")
        }

        function C(e, t) {
            var n, r = e.match(/^\s*({[^}]*})\s*$/);
            if (r && (e = t + "(" + r[1] + ")"), n = e.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !n || 4 !== n.length) throw new Error("Invalid state ref '" + e + "'");
            return {
                state: n[1],
                paramExpr: n[3] || null
            }
        }

        function A(e) {
            var t = e.parent().inheritedData("$uiView");
            return t && t.state && t.state.name ? t.state : void 0
        }

        function k(e, n) {
            var r = ["location", "inherit", "reload", "absolute"];
            return {
                restrict: "A",
                require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
                link: function(a, i, o, u) {
                    var s = C(o.uiSref, e.current.name),
                        c = null,
                        l = A(i) || e.$current,
                        f = "[object SVGAnimatedString]" === Object.prototype.toString.call(i.prop("href")) ? "xlink:href" : "href",
                        h = null,
                        p = "A" === i.prop("tagName").toUpperCase(),
                        d = "FORM" === i[0].nodeName,
                        g = d ? "action" : f,
                        $ = !0,
                        m = {
                            relative: l,
                            inherit: !0
                        },
                        v = a.$eval(o.uiSrefOpts) || {};
                    t.forEach(r, function(e) {
                        e in v && (m[e] = v[e])
                    });
                    var b = function(n) {
                        if (n && (c = t.copy(n)), $) {
                            h = e.href(s.state, c, m);
                            var r = u[1] || u[0];
                            return r && r.$$addStateInfo(s.state, c), null === h ? ($ = !1, !1) : void o.$set(g, h)
                        }
                    };
                    s.paramExpr && (a.$watch(s.paramExpr, function(e, t) {
                        e !== c && b(e)
                    }, !0), c = t.copy(a.$eval(s.paramExpr))), b(), d || i.bind("click", function(t) {
                        var r = t.which || t.button;
                        if (!(r > 1 || t.ctrlKey || t.metaKey || t.shiftKey || i.attr("target"))) {
                            var a = n(function() {
                                e.go(s.state, c, m)
                            });
                            t.preventDefault();
                            var o = p && !h ? 1 : 0;
                            t.preventDefault = function() {
                                o-- <= 0 && n.cancel(a)
                            }
                        }
                    })
                }
            }
        }

        function M(e, t, n) {
            return {
                restrict: "A",
                controller: ["$scope", "$element", "$attrs", function(t, r, a) {
                    function i() {
                        o() ? r.addClass(s) : r.removeClass(s)
                    }

                    function o() {
                        for (var e = 0; e < c.length; e++)
                            if (u(c[e].state, c[e].params)) return !0;
                        return !1
                    }

                    function u(t, n) {
                        return "undefined" != typeof a.uiSrefActiveEq ? e.is(t.name, n) : e.includes(t.name, n)
                    }
                    var s, c = [];
                    s = n(a.uiSrefActiveEq || a.uiSrefActive || "", !1)(t), this.$$addStateInfo = function(t, n) {
                        var a = e.get(t, A(r));
                        c.push({
                            state: a || {
                                name: t
                            },
                            params: n
                        }), i()
                    }, t.$on("$stateChangeSuccess", i)
                }]
            }
        }

        function N(e) {
            var t = function(t) {
                return e.is(t)
            };
            return t.$stateful = !0, t
        }

        function O(e) {
            var t = function(t) {
                return e.includes(t)
            };
            return t.$stateful = !0, t
        }
        var T = t.isDefined,
            I = t.isFunction,
            j = t.isString,
            P = t.isObject,
            L = t.isArray,
            U = t.forEach,
            V = t.extend,
            R = t.copy;
        t.module("ui.router.util", ["ng"]), t.module("ui.router.router", ["ui.router.util"]), t.module("ui.router.state", ["ui.router.router", "ui.router.util"]), t.module("ui.router", ["ui.router.state"]), t.module("ui.router.compat", ["ui.router"]), g.$inject = ["$q", "$injector"], t.module("ui.router.util").service("$resolve", g), $.$inject = ["$http", "$templateCache", "$injector"], t.module("ui.router.util").service("$templateFactory", $);
        var D;
        m.prototype.concat = function(e, t) {
            var n = {
                caseInsensitive: D.caseInsensitive(),
                strict: D.strictMode(),
                squash: D.defaultSquashPolicy()
            };
            return new m(this.sourcePath + e + this.sourceSearch, V(n, t), this)
        }, m.prototype.toString = function() {
            return this.source
        }, m.prototype.exec = function(e, t) {
            function n(e) {
                function t(e) {
                    return e.split("").reverse().join("")
                }

                function n(e) {
                    return e.replace(/\\-/g, "-")
                }
                var r = t(e).split(/-(?!\\)/),
                    a = d(r, t);
                return d(a, n).reverse()
            }
            var r = this.regexp.exec(e);
            if (!r) return null;
            t = t || {};
            var a, i, o, u = this.parameters(),
                s = u.length,
                c = this.segments.length - 1,
                l = {};
            if (c !== r.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");
            for (a = 0; c > a; a++) {
                o = u[a];
                var f = this.params[o],
                    h = r[a + 1];
                for (i = 0; i < f.replace; i++) f.replace[i].from === h && (h = f.replace[i].to);
                h && f.array === !0 && (h = n(h)), l[o] = f.value(h)
            }
            for (; s > a; a++) o = u[a], l[o] = this.params[o].value(t[o]);
            return l
        }, m.prototype.parameters = function(e) {
            return T(e) ? this.params[e] || null : this.$$paramNames
        }, m.prototype.validates = function(e) {
            return this.params.$$validates(e)
        }, m.prototype.format = function(e) {
            function t(e) {
                return encodeURIComponent(e).replace(/-/g, function(e) {
                    return "%5C%" + e.charCodeAt(0).toString(16).toUpperCase()
                })
            }
            e = e || {};
            var n = this.segments,
                r = this.parameters(),
                a = this.params;
            if (!this.validates(e)) return null;
            var i, o = !1,
                u = n.length - 1,
                s = r.length,
                c = n[0];
            for (i = 0; s > i; i++) {
                var l = u > i,
                    f = r[i],
                    h = a[f],
                    p = h.value(e[f]),
                    g = h.isOptional && h.type.equals(h.value(), p),
                    $ = g ? h.squash : !1,
                    m = h.type.encode(p);
                if (l) {
                    var v = n[i + 1];
                    if ($ === !1) null != m && (c += L(m) ? d(m, t).join("-") : encodeURIComponent(m)), c += v;
                    else if ($ === !0) {
                        var b = c.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
                        c += v.match(b)[1]
                    } else j($) && (c += $ + v)
                } else {
                    if (null == m || g && $ !== !1) continue;
                    L(m) || (m = [m]), m = d(m, encodeURIComponent).join("&" + f + "="), c += (o ? "&" : "?") + (f + "=" + m), o = !0
                }
            }
            return c
        }, v.prototype.is = function(e, t) {
            return !0
        }, v.prototype.encode = function(e, t) {
            return e
        }, v.prototype.decode = function(e, t) {
            return e
        }, v.prototype.equals = function(e, t) {
            return e == t
        }, v.prototype.$subPattern = function() {
            var e = this.pattern.toString();
            return e.substr(1, e.length - 2)
        }, v.prototype.pattern = /.*/, v.prototype.toString = function() {
            return "{Type:" + this.name + "}"
        }, v.prototype.$normalize = function(e) {
            return this.is(e) ? e : this.decode(e)
        }, v.prototype.$asArray = function(e, t) {
            function r(e, t) {
                function r(e, t) {
                    return function() {
                        return e[t].apply(e, arguments)
                    }
                }

                function a(e) {
                    return L(e) ? e : T(e) ? [e] : []
                }

                function i(e) {
                    switch (e.length) {
                        case 0:
                            return n;
                        case 1:
                            return "auto" === t ? e[0] : e;
                        default:
                            return e
                    }
                }

                function o(e) {
                    return !e
                }

                function u(e, t) {
                    return function(n) {
                        n = a(n);
                        var r = d(n, e);
                        return t === !0 ? 0 === p(r, o).length : i(r)
                    }
                }

                function s(e) {
                    return function(t, n) {
                        var r = a(t),
                            i = a(n);
                        if (r.length !== i.length) return !1;
                        for (var o = 0; o < r.length; o++)
                            if (!e(r[o], i[o])) return !1;
                        return !0
                    }
                }
                this.encode = u(r(e, "encode")), this.decode = u(r(e, "decode")), this.is = u(r(e, "is"), !0), this.equals = s(r(e, "equals")), this.pattern = e.pattern, this.$normalize = u(r(e, "$normalize")), this.name = e.name, this.$arrayMode = t
            }
            if (!e) return this;
            if ("auto" === e && !t) throw new Error("'auto' array mode is for query parameters only");
            return new r(this, e)
        }, t.module("ui.router.util").provider("$urlMatcherFactory", b), t.module("ui.router.util").run(["$urlMatcherFactory", function(e) {}]), y.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], t.module("ui.router.router").provider("$urlRouter", y), w.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], t.module("ui.router.state").value("$stateParams", {}).provider("$state", w), Z.$inject = [], t.module("ui.router.state").provider("$view", Z), t.module("ui.router.state").provider("$uiViewScroll", _), S.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate"], x.$inject = ["$compile", "$controller", "$state", "$interpolate"], t.module("ui.router.state").directive("uiView", S), t.module("ui.router.state").directive("uiView", x), k.$inject = ["$state", "$timeout"], M.$inject = ["$state", "$stateParams", "$interpolate"], t.module("ui.router.state").directive("uiSref", k).directive("uiSrefActive", M).directive("uiSrefActiveEq", M), N.$inject = ["$state"], O.$inject = ["$state"], t.module("ui.router.state").filter("isState", N).filter("includedByState", O)
    }(window, window.angular),
    function() {
        function Y() {
            return function() {}
        }
        var b = "",
            aa = "\x00",
            ba = "\n",
            ca = "\n//# sourceURL=",
            da = "\n;return exports});\n//# sourceURL=",
            k = " ",
            ea = " &#160;",
            fa = " onreadystatechange='goog.onScriptLoad_(this, ",
            ga = " should not be enumerable in Object.prototype.",
            l = '"',
            ha = '");',
            ia = '"></script>',
            ja = "#",
            ka = "$1",
            la = "%s",
            q = "&",
            ma = "&#0;",
            na = "&#101;",
            oa = "&#39;",
            pa = "&amp;",
            qa = "&gt;",
            ra = "&lt;",
            sa = "&quot;",
            ta = "'",
            ua = "(^",
            va = ")' ",
            wa = ")([a-z])",
            xa = ");",
            ya = ", ",
            za = "-",
            Aa = "-$1",
            t = ".",
            Ba = "..",
            Ca = "...",
            Da = "/",
            u = "0",
            Ea = "0,(function(){",
            v = ": ",
            Fa = "<",
            Ga = "</script>",
            Ha = "<br />",
            Ia = "<br>",
            Ja = '<script type="text/javascript" src="',
            Ka = '<script type="text/javascript">',
            La = ">",
            Na = "></script>",
            Oa = "?",
            Pa = "Already loaded ",
            Qa = "American Samoa",
            Ra = "Antigua and Barbuda",
            Sa = "Assertion failed",
            Ta = "BY_WHOLE",
            w = "Bolivia",
            x = "Bosna i Hercegovina",
            Ua = "Botswana",
            Va = "British Virgin Islands",
            Wa = "Cayman Islands",
            Xa = "Christmas Island",
            Ya = "Expected Element but got %s: %s.",
            Za = "Expected array but got %s: %s.",
            $a = "Expected boolean but got %s: %s.",
            ab = "Expected function but got %s: %s.",
            bb = "Expected instanceof %s but got %s.",
            cb = "Expected number but got %s: %s.",
            db = "Expected object but got %s: %s.",
            eb = "Expected string but got %s: %s.",
            fb = "Failure",
            gb = "Falkland Islands",
            y = "Ghana",
            hb = "Guinée équatoriale",
            ib = "Guyane française",
            jb = "HEAD",
            kb = "Honduras",
            lb = "Indonesia",
            mb = "Itoophiyaa",
            nb = "JavaScript",
            ob = "Kalaallit Nunaat",
            pb = "Kiribati",
            qb = "Load packages + dependencies - previous: ",
            rb = "Loading css files: ",
            sb = "LocaleNameConstants",
            tb = "Luxembourg",
            ub = "Madagascar",
            vb = "Marshall Islands",
            z = "Micronesia",
            wb = "Moldova, Republica",
            xb = "Nederlandse Antillen",
            yb = "New Zealand",
            A = "Nigeria",
            zb = "Norfolk Island",
            Ab = "Northern Mariana Islands",
            Bb = "Nouvelle-Calédonie",
            C = "Papua New Guinea",
            Cb = "Paraguay",
            Db = "Philippines",
            Eb = "Polynésie française",
            Fb = "Puerto Rico",
            Gb = "República Dominicana",
            D = "Rwanda",
            Hb = "Rywvaneth Unys",
            Ib = "République centrafricaine",
            Jb = "République démocratique du Congo",
            Kb = "SCRIPT",
            Lb = "Saint Kitts and Nevis",
            Mb = "Saint Vincent and the Grenadines",
            Nb = "Saint-Pierre-et-Miquelon",
            Qb = "Serbia and Montenegro",
            Rb = "Seychelles",
            Sb = "Slovenská republika",
            Tb = "Solomon Islands",
            E = "South Africa",
            Ub = "Svalbard og Jan Mayen",
            Vb = "Swaziland",
            Wb = "São Tomé e Príncipe",
            F = "Sénégal",
            Xb = "Tanzania",
            Yb = "Timor Leste",
            G = "Tokelau",
            Zb = "Turks and Caicos Islands",
            H = "Tuvalu",
            I = "Türkiye",
            $b = "U.S. Virgin Islands",
            ac = "United Kingdom",
            bc = "United States",
            cc = "United States Minor Outlying Islands",
            dc = "Unknown or Invalid Region",
            J = "Vanuatu",
            ec = "Wallis-et-Futuna",
            fc = "[object Array]",
            gc = "[object Function]",
            hc = "[object Window]",
            ic = "\\$1",
            jc = "\\s",
            kc = "\\u",
            lc = "\\x",
            mc = "\\x08",
            nc = "]+",
            K = "_",
            oc = "amp",
            pc = "annotatedtimeline",
            L = "array",
            qc = "base.js",
            rc = "boolean",
            M = "browserchart",
            sc = "call",
            tc = "callback after loading ",
            N = "complete",
            O = "corechart",
            uc = "div",
            vc = "document",
            P = "dygraph",
            wc = "e",
            Q = "en",
            xc = "end loadScript: ",
            yc = "error",
            R = "function",
            zc = "g",
            Ac = "get",
            Bc = "goog.loadModule(",
            Cc = 'goog.loadModule(function(exports) {"use strict";',
            Dc = 'goog.retrieveAndExecModule_("',
            Ec = "goog_",
            Fc = "google.charts.load",
            Gc = "google.charts.load version ",
            Hc = "gt",
            Ic = "head",
            Jc = "href",
            Kc = "id",
            Lc = "iframe",
            S = "imagechart",
            Mc = "javascript",
            Nc = "link",
            Oc = "load",
            Pc = "load-css-",
            Qc = "loadCSSFile: ",
            Rc = "loadScript: ",
            Sc = "loading css failed: ",
            Tc = "lt",
            Uc = "native code",
            Vc = "none",
            Wc = "null",
            Xc = "number",
            Yc = "o",
            T = "object",
            Zc = "onload",
            $c = "quot",
            ad = "rel",
            bd = "removeAttribute",
            cd = "script",
            dd = "splice",
            ed = "string",
            fd = "stylesheet",
            gd = "text/css",
            hd = "text/javascript",
            id = "type",
            U = "ui",
            V = "ui_base",
            jd = "unknown",
            kd = "unknown type name",
            ld = "var ",
            md = "var _evalTest_ = 1;",
            nd = "visualization",
            od = "webfontloader",
            pd = "write",
            qd = "{cssFile}",
            rd = "{language}",
            sd = "{package}",
            td = "{prefix}",
            ud = "{prefix}/{version}/css/{cssFile}",
            vd = "{prefix}/{version}/third_party/{package}",
            wd = "{version}",
            xd = "|[",
            yd = "})",
            zd = "~",
            Ad = "",
            Bd = "Česká republika",
            Cd = "Беларусь",
            Dd = "Кыргызстан",
            Ed = "монгольский",
            Fd = "Հայաստանի Հանրապետութիւն",
            Gd = "افغانستان",
            Hd = "الامارات العربية المتحدة",
            Id = "الصحراء الغربية",
            Jd = "المملكة العربية السعودية",
            Kd = "الولايات المتحدة الأمريكية",
            Ld = "جزر القمر",
            Md = "پاکستان",
            W = "भारत",
            X = "ኢትዮጵያ",
            Nd = "조선 민주주의 인민 공화국",
            Od = "�",
            Z = Z || {};
        Z.global = this, Z.O = function(e) {
            return void 0 !== e
        }, Z.ya = function(e, n, r) {
            e = e.split(t), r = r || Z.global, e[0] in r || !r.execScript || r.execScript(ld + e[0]);
            for (var a; e.length && (a = e.shift());) !e.length && Z.O(n) ? r[a] = n : r = r[a] ? r[a] : r[a] = {}
        }, Z.we = function(e, t) {
            Z.ya(e, t)
        }, Z.I = !0, Z.Cd = Q, Z.ra = !0, Z.ec = !1, Z.Nb = !Z.I, Z.Wa = !1, Z.Ff = function(e) {
            Z.cb(e)
        }, Z.cb = function(e, t) {
            Z.ya(e, t)
        }, Z.mc = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/, Z.Ma = function(e) {
            if (!Z.i(e) || !e || -1 == e.search(Z.mc)) throw Error("Invalid module identifier");
            if (!Z.Kc()) throw Error("Module " + e + " has been loaded incorrectly.");
            if (Z.l.Na) throw Error("goog.module may only be called once per module.");
            Z.l.Na = e
        }, Z.Ma.get = Y(), Z.Ma.He = Y(), Z.l = null, Z.Kc = function() {
            return null != Z.l
        }, Z.Ma.fb = function() {
            Z.l.fb = !0
        }, Z.Yf = function(e) {
            if (Z.Nb) throw e = e || b, Error("Importing test-only code into non-debug environment" + (e ? v + e : t))
        }, Z.Ce = Y(), Z.Oe = function(e) {
            e = e.split(t);
            for (var n, r = Z.global; n = e.shift();) {
                if (!Z.Hc(r[n])) return null;
                r = r[n]
            }
            return r
        }, Z.Te = function(e, t) {
            var n, r = t || Z.global;
            for (n in e) r[n] = e[n]
        }, Z.Jd = function(e, t, n, r) {
            if (Z.Ua) {
                var a;
                e = e.replace(/\\/g, Da);
                for (var i = Z.j, o = 0; a = t[o]; o++) i.S[a] = e, i.Pa[e] = !!r;
                for (r = 0; t = n[r]; r++) e in i.H || (i.H[e] = {}), i.H[e][t] = !0
            }
        }, Z.xg = !1, Z.zd = !0, Z.tf = function(e) {
            Z.global.console && Z.global.console.error(e)
        }, Z.Sf = Y(), Z.G = b, Z.Af = Y(), Z.Id = function() {
            throw Error("unimplemented abstract method")
        }, Z.Kd = function(e) {
            e.Ge = function() {
                return e.ub ? e.ub : (Z.I && (Z.vb[Z.vb.length] = e), e.ub = new e)
            }
        }, Z.vb = [], Z.Vb = !0, Z.cc = Z.I, Z.Uc = {}, Z.Ua = !1, Z.Ua && (Z.j = {
            Pa: {},
            S: {},
            H: {},
            Gb: {},
            qa: {},
            X: {}
        }, Z.sb = function() {
            var e = Z.global.document;
            return "undefined" != typeof e && pd in e
        }, Z.Ac = function() {
            if (Z.O(Z.global.Kb)) Z.G = Z.global.Kb;
            else if (Z.sb())
                for (var e = Z.global.document.getElementsByTagName(Kb), t = e.length - 1; t >= 0; --t) {
                    var n = e[t].src,
                        r = n.lastIndexOf(Oa),
                        r = -1 == r ? n.length : r;
                    if (n.substr(r - 7, 7) == qc) {
                        Z.G = n.substr(0, r - 7);
                        break
                    }
                }
        }, Z.Ga = function(e, t) {
            (Z.global.rd || Z.od)(e, t) && (Z.j.qa[e] = !0)
        }, Z.Ub = !(Z.global.atob || !Z.global.document || !Z.global.document.all), Z.Fc = function(e) {
            Z.Ga(b, Dc + e + ha) && (Z.j.qa[e] = !0)
        }, Z.Qa = [], Z.zg = function(e, t) {
            return Z.Vb && Z.O(Z.global.JSON) ? Bc + Z.global.JSON.stringify(t + ca + e + ba) + xa : Cc + t + da + e + ba
        }, Z.Sc = function() {
            var e = Z.Qa.length;
            if (e > 0) {
                var t = Z.Qa;
                Z.Qa = [];
                for (var n = 0; e > n; n++) Z.zb(t[n])
            }
        }, Z.uf = function(e) {
            Z.wb(e) && Z.nc(e) && Z.zb(Z.G + Z.Fa(e))
        }, Z.wb = function(e) {
            return (e = Z.Fa(e)) && Z.j.Pa[e] ? Z.G + e in Z.j.X : !1
        }, Z.nc = function(e) {
            if ((e = Z.Fa(e)) && e in Z.j.H)
                for (var t in Z.j.H[e])
                    if (!Z.Mc(t) && !Z.wb(t)) return !1;
            return !0
        }, Z.zb = function(e) {
            if (e in Z.j.X) {
                var t = Z.j.X[e];
                delete Z.j.X[e], Z.Ec(t)
            }
        }, Z.sf = function(e) {
            var t = Z.l;
            try {
                Z.l = {
                    Na: void 0
                };
                var n;
                if (Z.xb(e)) n = e.call(Z.global, {});
                else {
                    if (!Z.i(e)) throw Error("Invalid module definition");
                    n = Z.Qc.call(Z.global, e)
                }
                var r = Z.l.Na;
                if (!Z.i(r) || !r) throw Error('Invalid module name "' + r + l);
                Z.l.fb ? Z.cb(r, n) : Z.cc && Object.seal && Object.seal(n), Z.Uc[r] = n
            } finally {
                Z.l = t
            }
        }, Z.Qc = function(a) {
            return eval(a), {}
        }, Z.md = function(e) {
            Z.global.document.write(Ja + e + ia)
        }, Z.pc = function(e) {
            var t = Z.global.document,
                n = t.createElement(cd);
            n.type = hd, n.src = e, n.defer = !1, n.async = !1, t.head.appendChild(n)
        }, Z.od = function(e, t) {
            if (Z.sb()) {
                var n = Z.global.document;
                if (!Z.Wa && n.readyState == N) {
                    if (/\bdeps.js$/.test(e)) return !1;
                    throw Error('Cannot write "' + e + '" after document load')
                }
                var r = Z.Ub;
                return void 0 === t ? r ? (r = fa + ++Z.yb + va, n.write(Ja + e + l + r + Na)) : Z.Wa ? Z.pc(e) : Z.md(e) : n.write(Ka + t + Ga), !0
            }
            return !1
        }, Z.yb = 0, Z.Cf = function(e, t) {
            return e.readyState == N && Z.yb == t && Z.Sc(), !0
        }, Z.Ag = function(e) {
            function t(e) {
                if (!(e in a.qa || e in a.Gb)) {
                    if (a.Gb[e] = !0, e in a.H)
                        for (var i in a.H[e])
                            if (!Z.Mc(i)) {
                                if (!(i in a.S)) throw Error("Undefined nameToPath for " + i);
                                t(a.S[i])
                            }
                    e in r || (r[e] = !0, n.push(e))
                }
            }
            var n = [],
                r = {},
                a = Z.j;
            for (t(e), e = 0; e < n.length; e++) {
                var i = n[e];
                Z.j.qa[i] = !0
            }
            var o = Z.l;
            for (Z.l = null, e = 0; e < n.length; e++) {
                if (!(i = n[e])) throw Z.l = o, Error("Undefined script input");
                a.Pa[i] ? Z.Fc(Z.G + i) : Z.Ga(Z.G + i)
            }
            Z.l = o
        }, Z.Fa = function(e) {
            return e in Z.j.S ? Z.j.S[e] : null
        }, Z.Ac(), Z.global.td || Z.Ga(Z.G + "deps.js")), Z.xf = function(e) {
            e = e.split(Da);
            for (var n = 0; n < e.length;) e[n] == t ? e.splice(n, 1) : n && e[n] == Ba && e[n - 1] && e[n - 1] != Ba ? e.splice(--n, 2) : n++;
            return e.join(Da)
        }, Z.rf = function(e) {
            if (Z.global.Lb) return Z.global.Lb(e);
            var t = new Z.global.XMLHttpRequest;
            return t.open(Ac, e, !1),
                t.send(), t.responseText
        }, Z.Tf = Y(), Z.s = function(e) {
            var t = typeof e;
            if (t == T) {
                if (!e) return Wc;
                if (e instanceof Array) return L;
                if (e instanceof Object) return t;
                var n = Object.prototype.toString.call(e);
                if (n == hc) return T;
                if (n == fc || typeof e.length == Xc && "undefined" != typeof e.splice && "undefined" != typeof e.propertyIsEnumerable && !e.propertyIsEnumerable(dd)) return L;
                if (n == gc || "undefined" != typeof e.call && "undefined" != typeof e.propertyIsEnumerable && !e.propertyIsEnumerable(sc)) return R
            } else if (t == R && "undefined" == typeof e.call) return T;
            return t
        }, Z.hf = function(e) {
            return null === e
        }, Z.Hc = function(e) {
            return null != e
        }, Z.isArray = function(e) {
            return Z.s(e) == L
        }, Z.Ia = function(e) {
            var t = Z.s(e);
            return t == L || t == T && typeof e.length == Xc
        }, Z.cf = function(e) {
            return Z.$(e) && typeof e.getFullYear == R
        }, Z.i = function(e) {
            return typeof e == ed
        }, Z.Gc = function(e) {
            return typeof e == rc
        }, Z.Lc = function(e) {
            return typeof e == Xc
        }, Z.xb = function(e) {
            return Z.s(e) == R
        }, Z.$ = function(e) {
            var t = typeof e;
            return t == T && null != e || t == R
        }, Z.pb = function(e) {
            return e[Z.F] || (e[Z.F] = ++Z.jd)
        }, Z.Ue = function(e) {
            return !!e[Z.F]
        }, Z.ad = function(e) {
            bd in e && e.removeAttribute(Z.F);
            try {
                delete e[Z.F]
            } catch (t) {}
        }, Z.F = "closure_uid_" + (1e9 * Math.random() >>> 0), Z.jd = 0, Z.Ee = Z.pb, Z.Qf = Z.ad, Z.uc = function(e) {
            var t = Z.s(e);
            if (t == T || t == L) {
                if (e.clone) return e.clone();
                var n, t = t == L ? [] : {};
                for (n in e) t[n] = Z.uc(e[n]);
                return t
            }
            return e
        }, Z.tc = function(e, t, n) {
            return e.call.apply(e.bind, arguments)
        }, Z.rc = function(e, t, n) {
            if (!e) throw Error();
            if (2 < arguments.length) {
                var r = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var n = Array.prototype.slice.call(arguments);
                    return Array.prototype.unshift.apply(n, r), e.apply(t, n)
                }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }, Z.bind = function(e, t, n) {
            return Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf(Uc) ? Z.bind = Z.tc : Z.bind = Z.rc, Z.bind.apply(null, arguments)
        }, Z.Yc = function(e, t) {
            var n = Array.prototype.slice.call(arguments, 1);
            return function() {
                var t = n.slice();
                return t.push.apply(t, arguments), e.apply(this, t)
            }
        }, Z.vf = function(e, t) {
            for (var n in t) e[n] = t[n]
        }, Z.now = Z.ra && Date.now || function() {
            return +new Date
        }, Z.Ec = function(e) {
            if (Z.global.execScript) Z.global.execScript(e, nb);
            else {
                if (!Z.global.eval) throw Error("goog.globalEval not available");
                if (null == Z.Y)
                    if (Z.global.eval(md), "undefined" != typeof Z.global._evalTest_) {
                        try {
                            delete Z.global._evalTest_
                        } catch (t) {}
                        Z.Y = !0
                    } else Z.Y = !1;
                if (Z.Y) Z.global.eval(e);
                else {
                    var n = Z.global.document,
                        r = n.createElement(Kb);
                    r.type = hd, r.defer = !1, r.appendChild(n.createTextNode(e)), n.body.appendChild(r), n.body.removeChild(r)
                }
            }
        }, Z.Y = null, Z.De = function(e, t) {
            function n(e) {
                e = e.split(za);
                for (var t = [], n = 0; n < e.length; n++) t.push(r(e[n]));
                return t.join(za)
            }

            function r(e) {
                return Z.eb[e] || e
            }
            var a;
            return a = Z.eb ? Z.xc == Ta ? r : n : function(e) {
                return e
            }, t ? e + za + a(t) : a(e)
        }, Z.Uf = function(e, t) {
            Z.eb = e, Z.xc = t
        }, Z.Ke = function(e, t) {
            return t && (e = e.replace(/\{\$([^}]+)}/g, function(e, n) {
                return n in t ? t[n] : e
            })), e
        }, Z.Le = function(e) {
            return e
        }, Z.Aa = function(e, t) {
            Z.ya(e, t, void 0)
        }, Z.Ae = function(e, t, n) {
            e[t] = n
        }, Z.Ha = function(e, t) {
            function n() {}
            n.prototype = t.prototype, e.oa = t.prototype, e.prototype = new n, e.prototype.constructor = e, e.qc = function(e, n, r) {
                for (var a = Array(arguments.length - 2), i = 2; i < arguments.length; i++) a[i - 2] = arguments[i];
                return t.prototype[n].apply(e, a)
            }
        }, Z.qc = function(e, t, n) {
            var r = arguments.callee.caller;
            if (Z.ec || Z.I && !r) throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
            if (r.oa) {
                for (var a = Array(arguments.length - 1), i = 1; i < arguments.length; i++) a[i - 1] = arguments[i];
                return r.oa.constructor.apply(e, a)
            }
            for (a = Array(arguments.length - 2), i = 2; i < arguments.length; i++) a[i - 2] = arguments[i];
            for (var i = !1, o = e.constructor; o; o = o.oa && o.oa.constructor)
                if (o.prototype[t] === r) i = !0;
                else if (i) return o.prototype[t].apply(e, a);
            if (e[t] === r) return e.constructor.prototype[t].apply(e, a);
            throw Error("goog.base called from a method of one name to a method of a different name")
        }, Z.scope = function(e) {
            e.call(Z.global)
        }, Z.Dd = !1, Z.u = function(e, t) {
            var n = t.constructor,
                r = t.dd;
            return n && n != Object.prototype.constructor || (n = function() {
                throw Error("cannot instantiate an interface (no constructor defined).")
            }), n = Z.u.vc(n, e), e && Z.Ha(n, e), delete t.constructor, delete t.dd, Z.u.Ya(n.prototype, t), null != r && (r instanceof Function ? r(n) : Z.u.Ya(n, r)), n
        }, Z.u.bc = Z.I, Z.u.vc = function(e, t) {
            if (Z.u.bc && Object.seal instanceof Function) {
                if (t && t.prototype && t.prototype[Z.kc]) return e;
                var n = function() {
                    var t = e.apply(this, arguments) || this;
                    return t[Z.F] = t[Z.F], this.constructor === n && Object.seal(t), t
                };
                return n
            }
            return e
        }, Z.u.Xa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), Z.u.Ya = function(e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            for (var r = 0; r < Z.u.Xa.length; r++) n = Z.u.Xa[r], Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }, Z.fg = Y(), Z.kc = "goog_defineClass_legacy_unsealable", Z.debug = {}, Z.debug.Error = function(e) {
            if (Error.captureStackTrace) Error.captureStackTrace(this, Z.debug.Error);
            else {
                var t = Error().stack;
                t && (this.stack = t)
            }
            e && (this.message = String(e))
        }, Z.Ha(Z.debug.Error, Error), Z.debug.Error.prototype.name = "CustomError", Z.gb = {}, Z.gb.$b = {
            Ob: 1,
            pd: 2,
            Hd: 3,
            qd: 4,
            Bd: 5,
            Ad: 6,
            Gd: 7,
            ud: 8,
            wd: 9,
            yd: 10,
            xd: 11,
            Ed: 12
        }, Z.f = {}, Z.f.Va = !1, Z.f.Qb = !1, Z.f.lc = {
            Yb: " "
        }, Z.f.startsWith = function(e, t) {
            return 0 == e.lastIndexOf(t, 0)
        }, Z.f.endsWith = function(e, t) {
            var n = e.length - t.length;
            return n >= 0 && e.indexOf(t, n) == n
        }, Z.f.ke = function(e, t) {
            return 0 == Z.f.bb(t, e.substr(0, t.length))
        }, Z.f.ge = function(e, t) {
            return 0 == Z.f.bb(t, e.substr(e.length - t.length, t.length))
        }, Z.f.je = function(e, t) {
            return e.toLowerCase() == t.toLowerCase()
        }, Z.f.ed = function(e, t) {
            for (var n = e.split(la), r = b, a = Array.prototype.slice.call(arguments, 1); a.length && 1 < n.length;) r += n.shift() + a.shift();
            return r + n.join(la)
        }, Z.f.me = function(e) {
            return e.replace(/[\s\xa0]+/g, k).replace(/^\s+|\s+$/g, b)
        }, Z.f.Ja = function(e) {
            return /^[\s\xa0]*$/.test(e)
        }, Z.f.ef = function(e) {
            return 0 == e.length
        }, Z.f.Ic = Z.f.Ja, Z.f.Jc = function(e) {
            return Z.f.Ja(Z.f.Vc(e))
        }, Z.f.df = Z.f.Jc, Z.f.bf = function(e) {
            return !/[^\t\n\r ]/.test(e)
        }, Z.f.Ze = function(e) {
            return !/[^a-zA-Z]/.test(e)
        }, Z.f.jf = function(e) {
            return !/[^0-9]/.test(e)
        }, Z.f.$e = function(e) {
            return !/[^a-zA-Z0-9]/.test(e)
        }, Z.f.mf = function(e) {
            return e == k
        }, Z.f.nf = function(e) {
            return 1 == e.length && e >= k && zd >= e || e >= Ad && Od >= e
        }, Z.f.dg = function(e) {
            return e.replace(/(\r\n|\r|\n)+/g, k)
        }, Z.f.Zd = function(e) {
            return e.replace(/(\r\n|\r|\n)/g, ba)
        }, Z.f.zf = function(e) {
            return e.replace(/\xa0|\s/g, k)
        }, Z.f.yf = function(e) {
            return e.replace(/\xa0|[ \t]+/g, k)
        }, Z.f.le = function(e) {
            return e.replace(/[\t\r\n ]+/g, k).replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, b)
        }, Z.f.trim = Z.ra && String.prototype.trim ? function(e) {
            return e.trim()
        } : function(e) {
            return e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, b)
        }, Z.f.trimLeft = function(e) {
            return e.replace(/^[\s\xa0]+/, b)
        }, Z.f.trimRight = function(e) {
            return e.replace(/[\s\xa0]+$/, b)
        }, Z.f.bb = function(e, t) {
            var n = String(e).toLowerCase(),
                r = String(t).toLowerCase();
            return r > n ? -1 : n == r ? 0 : 1
        }, Z.f.Bb = /(\.\d+)|(\d+)|(\D+)/g, Z.f.Bf = function(e, t) {
            if (e == t) return 0;
            if (!e) return -1;
            if (!t) return 1;
            for (var n = e.toLowerCase().match(Z.f.Bb), r = t.toLowerCase().match(Z.f.Bb), a = Math.min(n.length, r.length), i = 0; a > i; i++) {
                var o = n[i],
                    u = r[i];
                if (o != u) return n = parseInt(o, 10), !isNaN(n) && (r = parseInt(u, 10), !isNaN(r) && n - r) ? n - r : u > o ? -1 : 1
            }
            return n.length != r.length ? n.length - r.length : t > e ? -1 : 1
        }, Z.f.wg = function(e) {
            return encodeURIComponent(String(e))
        }, Z.f.vg = function(e) {
            return decodeURIComponent(e.replace(/\+/g, k))
        }, Z.f.Wc = function(e, t) {
            return e.replace(/(\r\n|\r|\n)/g, t ? Ha : Ia)
        }, Z.f.qb = function(e) {
            return Z.f.Ib.test(e) ? (-1 != e.indexOf(q) && (e = e.replace(Z.f.Jb, pa)), -1 != e.indexOf(Fa) && (e = e.replace(Z.f.Xb, ra)), -1 != e.indexOf(La) && (e = e.replace(Z.f.Rb, qa)), -1 != e.indexOf(l) && (e = e.replace(Z.f.ac, sa)), -1 != e.indexOf(ta) && (e = e.replace(Z.f.dc, oa)), -1 != e.indexOf(aa) && (e = e.replace(Z.f.Zb, ma)), Z.f.Va && -1 != e.indexOf(wc) && (e = e.replace(Z.f.Pb, na)), e) : e
        }, Z.f.Jb = /&/g, Z.f.Xb = /</g, Z.f.Rb = />/g, Z.f.ac = /"/g, Z.f.dc = /'/g, Z.f.Zb = /\x00/g, Z.f.Pb = /e/g, Z.f.Ib = Z.f.Va ? /[\x00&<>"'e]/ : /[\x00&<>"']/, Z.f.Eb = function(e) {
            return Z.f.contains(e, q) ? !Z.f.Qb && vc in Z.global ? Z.f.Fb(e) : Z.f.kd(e) : e
        }, Z.f.rg = function(e, t) {
            return Z.f.contains(e, q) ? Z.f.Fb(e, t) : e
        }, Z.f.Fb = function(e, t) {
            var n, r = {
                "&amp;": q,
                "&lt;": Fa,
                "&gt;": La,
                "&quot;": l
            };
            return n = t ? t.createElement(uc) : Z.global.document.createElement(uc), e.replace(Z.f.Tb, function(e, t) {
                var a = r[e];
                if (a) return a;
                if (t.charAt(0) == ja) {
                    var i = Number(u + t.substr(1));
                    isNaN(i) || (a = String.fromCharCode(i))
                }
                return a || (n.innerHTML = e + k, a = n.firstChild.nodeValue.slice(0, -1)), r[e] = a
            })
        }, Z.f.kd = function(e) {
            return e.replace(/&([^;]+);/g, function(e, t) {
                switch (t) {
                    case oc:
                        return q;
                    case Tc:
                        return Fa;
                    case Hc:
                        return La;
                    case $c:
                        return l;
                    default:
                        if (t.charAt(0) == ja) {
                            var n = Number(u + t.substr(1));
                            if (!isNaN(n)) return String.fromCharCode(n)
                        }
                        return e
                }
            })
        }, Z.f.Tb = /&([^;\s<&]+);?/g, Z.f.yg = function(e, t) {
            return Z.f.Wc(e.replace(/  /g, ea), t)
        }, Z.f.Ef = function(e) {
            return e.replace(/(^|[\n ]) /g, ka + Z.f.lc.Yb)
        }, Z.f.eg = function(e, t) {
            for (var n = t.length, r = 0; n > r; r++) {
                var a = 1 == n ? t : t.charAt(r);
                if (e.charAt(0) == a && e.charAt(e.length - 1) == a) return e.substring(1, e.length - 1)
            }
            return e
        }, Z.f.truncate = function(e, t, n) {
            return n && (e = Z.f.Eb(e)), e.length > t && (e = e.substring(0, t - 3) + Ca), n && (e = Z.f.qb(e)), e
        }, Z.f.qg = function(e, t, n, r) {
            if (n && (e = Z.f.Eb(e)), r && e.length > t) r > t && (r = t), e = e.substring(0, t - r) + Ca + e.substring(e.length - r);
            else if (e.length > t) {
                r = Math.floor(t / 2);
                var a = e.length - r;
                e = e.substring(0, r + t % 2) + Ca + e.substring(a)
            }
            return n && (e = Z.f.qb(e)), e
        }, Z.f.Ta = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "	": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\"
        }, Z.f.ea = {
            "'": "\\'"
        }, Z.f.quote = function(e) {
            if (e = String(e), e.quote) return e.quote();
            for (var t = [l], n = 0; n < e.length; n++) {
                var r = e.charAt(n),
                    a = r.charCodeAt(0);
                t[n + 1] = Z.f.Ta[r] || (a > 31 && 127 > a ? r : Z.f.hb(r))
            }
            return t.push(l), t.join(b)
        }, Z.f.ze = function(e) {
            for (var t = [], n = 0; n < e.length; n++) t[n] = Z.f.hb(e.charAt(n));
            return t.join(b)
        }, Z.f.hb = function(e) {
            if (e in Z.f.ea) return Z.f.ea[e];
            if (e in Z.f.Ta) return Z.f.ea[e] = Z.f.Ta[e];
            var t = e,
                n = e.charCodeAt(0);
            return n > 31 && 127 > n ? t = e : (256 > n ? (t = lc, (16 > n || n > 256) && (t += u)) : (t = kc, 4096 > n && (t += u)), t += n.toString(16).toUpperCase()), Z.f.ea[e] = t
        }, Z.f.contains = function(e, t) {
            return -1 != e.indexOf(t)
        }, Z.f.fe = function(e, t) {
            return Z.f.contains(e.toLowerCase(), t.toLowerCase())
        }, Z.f.re = function(e, t) {
            return e && t ? e.split(t).length - 1 : 0
        }, Z.f.T = function(e, t, n) {
            var r = e;
            return t >= 0 && t < e.length && n > 0 && (r = e.substr(0, t) + e.substr(t + n, e.length - t - n)), r
        }, Z.f.remove = function(e, t) {
            var n = new RegExp(Z.f.Ra(t), b);
            return e.replace(n, b)
        }, Z.f.Nf = function(e, t) {
            var n = new RegExp(Z.f.Ra(t), zc);
            return e.replace(n, b)
        }, Z.f.Ra = function(e) {
            return String(e).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, ic).replace(/\x08/g, mc)
        }, Z.f.repeat = String.prototype.repeat ? function(e, t) {
            return e.repeat(t)
        } : function(e, t) {
            return Array(t + 1).join(e)
        }, Z.f.Df = function(e, n, r) {
            return e = Z.O(r) ? e.toFixed(r) : String(e), r = e.indexOf(t), -1 == r && (r = e.length), Z.f.repeat(u, Math.max(0, n - r)) + e
        }, Z.f.Vc = function(e) {
            return null == e ? b : String(e)
        }, Z.f.Yd = function(e) {
            return Array.prototype.join.call(arguments, b)
        }, Z.f.Pe = function() {
            return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Z.now()).toString(36)
        }, Z.f.pe = function(e, n) {
            for (var r = 0, a = Z.f.trim(String(e)).split(t), i = Z.f.trim(String(n)).split(t), o = Math.max(a.length, i.length), u = 0; 0 == r && o > u; u++) {
                var s = a[u] || b,
                    c = i[u] || b,
                    l = /(\d*)(\D*)/g,
                    f = /(\d*)(\D*)/g;
                do {
                    var h = l.exec(s) || [b, b, b],
                        p = f.exec(c) || [b, b, b];
                    if (0 == h[0].length && 0 == p[0].length) break;
                    r = Z.f.ua(0 == h[1].length ? 0 : parseInt(h[1], 10), 0 == p[1].length ? 0 : parseInt(p[1], 10)) || Z.f.ua(0 == h[2].length, 0 == p[2].length) || Z.f.ua(h[2], p[2])
                } while (0 == r)
            }
            return r
        }, Z.f.ua = function(e, t) {
            return t > e ? -1 : e > t ? 1 : 0
        }, Z.f.Sb = 4294967296, Z.f.Ve = function(e) {
            for (var t = 0, n = 0; n < e.length; ++n) t = 31 * t + e.charCodeAt(n), t %= Z.f.Sb;
            return t
        }, Z.f.ld = 2147483648 * Math.random() | 0, Z.f.ue = function() {
            return Ec + Z.f.ld++
        }, Z.f.hg = function(e) {
            var t = Number(e);
            return 0 == t && Z.f.Ja(e) ? NaN : t
        }, Z.f.gf = function(e) {
            return /^[a-z]+([A-Z][a-z]*)*$/.test(e)
        }, Z.f.of = function(e) {
            return /^([A-Z][a-z]*)+$/.test(e)
        }, Z.f.gg = function(e) {
            return String(e).replace(/\-([a-z])/g, function(e, t) {
                return t.toUpperCase()
            })
        }, Z.f.og = function(e) {
            return String(e).replace(/([A-Z])/g, Aa).toLowerCase()
        }, Z.f.pg = function(e, t) {
            var n = Z.i(t) ? Z.f.Ra(t) : jc;
            return e.replace(new RegExp(ua + (n ? xd + n + nc : b) + wa, zc), function(e, t, n) {
                return t + n.toUpperCase()
            })
        }, Z.f.$d = function(e) {
            return String(e.charAt(0)).toUpperCase() + String(e.substr(1)).toLowerCase()
        }, Z.f.parseInt = function(e) {
            return isFinite(e) && (e = String(e)), Z.i(e) ? /^\s*-?0x/i.test(e) ? parseInt(e, 16) : parseInt(e, 10) : NaN
        }, Z.f.ag = function(e, t, n) {
            e = e.split(t);
            for (var r = []; n > 0 && e.length;) r.push(e.shift()), n--;
            return e.length && r.push(e.join(t)), r
        }, Z.f.xe = function(e, t) {
            var n = [],
                r = [];
            if (e == t) return 0;
            if (!e.length || !t.length) return Math.max(e.length, t.length);
            for (var a = 0; a < t.length + 1; a++) n[a] = a;
            for (a = 0; a < e.length; a++) {
                r[0] = a + 1;
                for (var i = 0; i < t.length; i++) r[i + 1] = Math.min(r[i] + 1, n[i + 1] + 1, n[i] + (e[a] != t[i]));
                for (i = 0; i < n.length; i++) n[i] = r[i]
            }
            return r[t.length]
        }, Z.g = {}, Z.g.o = Z.I, Z.g.V = function(e, t) {
            t.unshift(e), Z.debug.Error.call(this, Z.f.ed.apply(null, t)), t.shift()
        }, Z.Ha(Z.g.V, Z.debug.Error), Z.g.V.prototype.name = "AssertionError", Z.g.Mb = function(e) {
            throw e
        }, Z.g.xa = Z.g.Mb, Z.g.B = function(e, t, n, r) {
            var a = Sa;
            if (n) var a = a + (v + n),
                i = r;
            else e && (a += v + e, i = t);
            e = new Z.g.V(b + a, i || []), Z.g.xa(e)
        }, Z.g.Vf = function(e) {
            Z.g.o && (Z.g.xa = e)
        }, Z.g.assert = function(e, t, n) {
            return Z.g.o && !e && Z.g.B(b, null, t, Array.prototype.slice.call(arguments, 2)), e
        }, Z.g.Ba = function(e, t) {
            Z.g.o && Z.g.xa(new Z.g.V(fb + (e ? v + e : b), Array.prototype.slice.call(arguments, 1)))
        }, Z.g.Qd = function(e, t, n) {
            return Z.g.o && !Z.Lc(e) && Z.g.B(cb, [Z.s(e), e], t, Array.prototype.slice.call(arguments, 2)), e
        }, Z.g.Td = function(e, t, n) {
            return Z.g.o && !Z.i(e) && Z.g.B(eb, [Z.s(e), e], t, Array.prototype.slice.call(arguments, 2)), e
        }, Z.g.Od = function(e, t, n) {
            return Z.g.o && !Z.xb(e) && Z.g.B(ab, [Z.s(e), e], t, Array.prototype.slice.call(arguments, 2)), e
        }, Z.g.Rd = function(e, t, n) {
            return Z.g.o && !Z.$(e) && Z.g.B(db, [Z.s(e), e], t, Array.prototype.slice.call(arguments, 2)), e
        }, Z.g.Ld = function(e, t, n) {
            return Z.g.o && !Z.isArray(e) && Z.g.B(Za, [Z.s(e), e], t, Array.prototype.slice.call(arguments, 2)), e
        }, Z.g.Md = function(e, t, n) {
            return Z.g.o && !Z.Gc(e) && Z.g.B($a, [Z.s(e), e], t, Array.prototype.slice.call(arguments, 2)), e
        }, Z.g.Nd = function(e, t, n) {
            return !Z.g.o || Z.$(e) && e.nodeType == Z.gb.$b.Ob || Z.g.B(Ya, [Z.s(e), e], t, Array.prototype.slice.call(arguments, 2)), e
        }, Z.g.Pd = function(e, t, n, r) {
            return !Z.g.o || e instanceof t || Z.g.B(bb, [Z.g.ob(t), Z.g.ob(e)], n, Array.prototype.slice.call(arguments, 3)), e
        }, Z.g.Sd = function() {
            for (var e in Object.prototype) Z.g.Ba(e + ga)
        }, Z.g.ob = function(e) {
            return e instanceof Function ? e.displayName || e.name || kd : e instanceof Object ? e.constructor.displayName || e.constructor.name || Object.prototype.toString.call(e) : null === e ? Wc : typeof e
        }, Z.b = {}, Z.A = Z.ra, Z.b.w = !1, Z.b.Zc = function(e) {
            return e[e.length - 1]
        }, Z.b.pf = Z.b.Zc, Z.b.h = Array.prototype, Z.b.indexOf = Z.A && (Z.b.w || Z.b.h.indexOf) ? function(e, t, n) {
            return Z.b.h.indexOf.call(e, t, n)
        } : function(e, t, n) {
            if (n = null == n ? 0 : 0 > n ? Math.max(0, e.length + n) : n, Z.i(e)) return Z.i(t) && 1 == t.length ? e.indexOf(t, n) : -1;
            for (; n < e.length; n++)
                if (n in e && e[n] === t) return n;
            return -1
        }, Z.b.lastIndexOf = Z.A && (Z.b.w || Z.b.h.lastIndexOf) ? function(e, t, n) {
            return Z.b.h.lastIndexOf.call(e, t, null == n ? e.length - 1 : n)
        } : function(e, t, n) {
            if (n = null == n ? e.length - 1 : n, 0 > n && (n = Math.max(0, e.length + n)), Z.i(e)) return Z.i(t) && 1 == t.length ? e.lastIndexOf(t, n) : -1;
            for (; n >= 0; n--)
                if (n in e && e[n] === t) return n;
            return -1
        }, Z.b.forEach = Z.A && (Z.b.w || Z.b.h.forEach) ? function(e, t, n) {
            Z.b.h.forEach.call(e, t, n)
        } : function(e, t, n) {
            for (var r = e.length, a = Z.i(e) ? e.split(b) : e, i = 0; r > i; i++) i in a && t.call(n, a[i], i, e)
        }, Z.b.jb = function(e, t) {
            for (var n = Z.i(e) ? e.split(b) : e, r = e.length - 1; r >= 0; --r) r in n && t.call(void 0, n[r], r, e)
        }, Z.b.filter = Z.A && (Z.b.w || Z.b.h.filter) ? function(e, t, n) {
            return Z.b.h.filter.call(e, t, n)
        } : function(e, t, n) {
            for (var r = e.length, a = [], i = 0, o = Z.i(e) ? e.split(b) : e, u = 0; r > u; u++)
                if (u in o) {
                    var s = o[u];
                    t.call(n, s, u, e) && (a[i++] = s)
                }
            return a
        }, Z.b.map = Z.A && (Z.b.w || Z.b.h.map) ? function(e, t, n) {
            return Z.b.h.map.call(e, t, n)
        } : function(e, t, n) {
            for (var r = e.length, a = Array(r), i = Z.i(e) ? e.split(b) : e, o = 0; r > o; o++) o in i && (a[o] = t.call(n, i[o], o, e));
            return a
        }, Z.b.reduce = Z.A && (Z.b.w || Z.b.h.reduce) ? function(e, t, n, r) {
            return r && (t = Z.bind(t, r)), Z.b.h.reduce.call(e, t, n)
        } : function(e, t, n, r) {
            var a = n;
            return Z.b.forEach(e, function(n, i) {
                a = t.call(r, a, n, i, e)
            }), a
        }, Z.b.reduceRight = Z.A && (Z.b.w || Z.b.h.reduceRight) ? function(e, t, n, r) {
            return r && (t = Z.bind(t, r)), Z.b.h.reduceRight.call(e, t, n)
        } : function(e, t, n, r) {
            var a = n;
            return Z.b.jb(e, function(n, i) {
                a = t.call(r, a, n, i, e)
            }), a
        }, Z.b.some = Z.A && (Z.b.w || Z.b.h.some) ? function(e, t, n) {
            return Z.b.h.some.call(e, t, n)
        } : function(e, t, n) {
            for (var r = e.length, a = Z.i(e) ? e.split(b) : e, i = 0; r > i; i++)
                if (i in a && t.call(n, a[i], i, e)) return !0;
            return !1
        }, Z.b.every = Z.A && (Z.b.w || Z.b.h.every) ? function(e, t, n) {
            return Z.b.h.every.call(e, t, n)
        } : function(e, t, n) {
            for (var r = e.length, a = Z.i(e) ? e.split(b) : e, i = 0; r > i; i++)
                if (i in a && !t.call(n, a[i], i, e)) return !1;
            return !0
        }, Z.b.count = function(e, t, n) {
            var r = 0;
            return Z.b.forEach(e, function(e, a, i) {
                t.call(n, e, a, i) && ++r
            }, n), r
        }, Z.b.find = function(e, t, n) {
            return t = Z.b.ib(e, t, n), 0 > t ? null : Z.i(e) ? e.charAt(t) : e[t]
        }, Z.b.ib = function(e, t, n) {
            for (var r = e.length, a = Z.i(e) ? e.split(b) : e, i = 0; r > i; i++)
                if (i in a && t.call(n, a[i], i, e)) return i;
            return -1
        }, Z.b.Be = function(e, t, n) {
            return t = Z.b.Bc(e, t, n), 0 > t ? null : Z.i(e) ? e.charAt(t) : e[t]
        }, Z.b.Bc = function(e, t, n) {
            for (var r = Z.i(e) ? e.split(b) : e, a = e.length - 1; a >= 0; a--)
                if (a in r && t.call(n, r[a], a, e)) return a;
            return -1
        }, Z.b.contains = function(e, t) {
            return 0 <= Z.b.indexOf(e, t)
        }, Z.b.Ic = function(e) {
            return 0 == e.length
        }, Z.b.clear = function(e) {
            if (!Z.isArray(e))
                for (var t = e.length - 1; t >= 0; t--) delete e[t];
            e.length = 0
        }, Z.b.We = function(e, t) {
            Z.b.contains(e, t) || e.push(t)
        }, Z.b.tb = function(e, t, n) {
            Z.b.splice(e, n, 0, t)
        }, Z.b.Xe = function(e, t, n) {
            Z.Yc(Z.b.splice, e, n, 0).apply(null, t)
        }, Z.b.insertBefore = function(e, t, n) {
            var r;
            2 == arguments.length || 0 > (r = Z.b.indexOf(e, n)) ? e.push(t) : Z.b.tb(e, t, r)
        }, Z.b.remove = function(e, t) {
            var n, r = Z.b.indexOf(e, t);
            return (n = r >= 0) && Z.b.T(e, r), n
        }, Z.b.T = function(e, t) {
            return 1 == Z.b.h.splice.call(e, t, 1).length
        }, Z.b.Rf = function(e, t, n) {
            return t = Z.b.ib(e, t, n), t >= 0 ? (Z.b.T(e, t), !0) : !1
        }, Z.b.Of = function(e, t, n) {
            var r = 0;
            return Z.b.jb(e, function(a, i) {
                t.call(n, a, i, e) && Z.b.T(e, i) && r++
            }), r
        }, Z.b.concat = function(e) {
            return Z.b.h.concat.apply(Z.b.h, arguments)
        }, Z.b.join = function(e) {
            return Z.b.h.concat.apply(Z.b.h, arguments)
        }, Z.b.hd = function(e) {
            var t = e.length;
            if (t > 0) {
                for (var n = Array(t), r = 0; t > r; r++) n[r] = e[r];
                return n
            }
            return []
        }, Z.b.clone = Z.b.hd, Z.b.extend = function(e, t) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                if (Z.Ia(r)) {
                    var a = e.length || 0,
                        i = r.length || 0;
                    e.length = a + i;
                    for (var o = 0; i > o; o++) e[a + o] = r[o]
                } else e.push(r)
            }
        }, Z.b.splice = function(e, t, n, r) {
            return Z.b.h.splice.apply(e, Z.b.slice(arguments, 1))
        }, Z.b.slice = function(e, t, n) {
            return 2 >= arguments.length ? Z.b.h.slice.call(e, t) : Z.b.h.slice.call(e, t, n)
        }, Z.b.Pf = function(e, t, n) {
            function r(e) {
                return Z.$(e) ? Yc + Z.pb(e) : (typeof e).charAt(0) + e
            }
            t = t || e, n = n || r;
            for (var a = {}, i = 0, o = 0; o < e.length;) {
                var u = e[o++],
                    s = n(u);
                Object.prototype.hasOwnProperty.call(a, s) || (a[s] = !0, t[i++] = u)
            }
            t.length = i
        }, Z.b.Za = function(e, t, n) {
            return Z.b.$a(e, n || Z.b.C, !1, t)
        }, Z.b.Wd = function(e, t, n) {
            return Z.b.$a(e, t, !0, void 0, n)
        }, Z.b.$a = function(e, t, n, r, a) {
            for (var i, o = 0, u = e.length; u > o;) {
                var s, c = o + u >> 1;
                s = n ? t.call(a, e[c], c, e) : t(r, e[c]), s > 0 ? o = c + 1 : (u = c, i = !s)
            }
            return i ? o : ~o
        }, Z.b.sort = function(e, t) {
            e.sort(t || Z.b.C)
        }, Z.b.cg = function(e, t) {
            for (var n = 0; n < e.length; n++) e[n] = {
                index: n,
                value: e[n]
            };
            var r = t || Z.b.C;
            for (Z.b.sort(e, function(e, t) {
                    return r(e.value, t.value) || e.index - t.index
                }), n = 0; n < e.length; n++) e[n] = e[n].value
        }, Z.b.cd = function(e, t, n) {
            var r = n || Z.b.C;
            Z.b.sort(e, function(e, n) {
                return r(t(e), t(n))
            })
        }, Z.b.$f = function(e, t, n) {
            Z.b.cd(e, function(e) {
                return e[t]
            }, n)
        }, Z.b.lf = function(e, t, n) {
            t = t || Z.b.C;
            for (var r = 1; r < e.length; r++) {
                var a = t(e[r - 1], e[r]);
                if (a > 0 || 0 == a && n) return !1
            }
            return !0
        }, Z.b.ye = function(e, t, n) {
            if (!Z.Ia(e) || !Z.Ia(t) || e.length != t.length) return !1;
            var r = e.length;
            n = n || Z.b.yc;
            for (var a = 0; r > a; a++)
                if (!n(e[a], t[a])) return !1;
            return !0
        }, Z.b.oe = function(e, t, n) {
            n = n || Z.b.C;
            for (var r = Math.min(e.length, t.length), a = 0; r > a; a++) {
                var i = n(e[a], t[a]);
                if (0 != i) return i
            }
            return Z.b.C(e.length, t.length)
        }, Z.b.C = function(e, t) {
            return e > t ? 1 : t > e ? -1 : 0
        }, Z.b.Ye = function(e, t) {
            return -Z.b.C(e, t)
        }, Z.b.yc = function(e, t) {
            return e === t
        }, Z.b.Ud = function(e, t, n) {
            return n = Z.b.Za(e, t, n), 0 > n ? (Z.b.tb(e, t, -(n + 1)), !0) : !1
        }, Z.b.Vd = function(e, t, n) {
            return t = Z.b.Za(e, t, n), t >= 0 ? Z.b.T(e, t) : !1
        }, Z.b.Xd = function(e, t, n) {
            for (var r = {}, a = 0; a < e.length; a++) {
                var i = e[a],
                    o = t.call(n, i, a, e);
                Z.O(o) && (r[o] || (r[o] = [])).push(i)
            }
            return r
        }, Z.b.jg = function(e, t, n) {
            var r = {};
            return Z.b.forEach(e, function(a, i) {
                r[t.call(n, a, i, e)] = a
            }), r
        }, Z.b.Gf = function(e, t, n) {
            var r = [],
                a = 0,
                i = e;
            if (n = n || 1, void 0 !== t && (a = e, i = t), 0 > n * (i - a)) return [];
            if (n > 0)
                for (e = a; i > e; e += n) r.push(e);
            else
                for (e = a; e > i; e += n) r.push(e);
            return r
        }, Z.b.repeat = function(e, t) {
            for (var n = [], r = 0; t > r; r++) n[r] = e;
            return n
        }, Z.b.Cc = function(e) {
            for (var t = [], n = 0; n < arguments.length; n++) {
                var r = arguments[n];
                if (Z.isArray(r))
                    for (var a = 0; a < r.length; a += 8192)
                        for (var i = Z.b.Cc.apply(null, Z.b.slice(r, a, a + 8192)), o = 0; o < i.length; o++) t.push(i[o]);
                else t.push(r)
            }
            return t
        }, Z.b.rotate = function(e, t) {
            return e.length && (t %= e.length, t > 0 ? Z.b.h.unshift.apply(e, e.splice(-t, t)) : 0 > t && Z.b.h.push.apply(e, e.splice(0, -t))), e
        }, Z.b.wf = function(e, t, n) {
            t = Z.b.h.splice.call(e, t, 1), Z.b.h.splice.call(e, n, 0, t[0])
        }, Z.b.Bg = function(e) {
            if (!arguments.length) return [];
            for (var t = [], n = 0;; n++) {
                for (var r = [], a = 0; a < arguments.length; a++) {
                    var i = arguments[a];
                    if (n >= i.length) return t;
                    r.push(i[n])
                }
                t.push(r)
            }
        }, Z.b.Zf = function(e, t) {
            for (var n = t || Math.random, r = e.length - 1; r > 0; r--) {
                var a = Math.floor(n() * (r + 1)),
                    i = e[r];
                e[r] = e[a], e[a] = i
            }
        }, Z.b.qe = function(e, t) {
            var n = [];
            return Z.b.forEach(t, function(t) {
                n.push(e[t])
            }), n
        }, Z.locale = {}, Z.locale.K = {
            COUNTRY: {
                AD: "Andorra",
                AE: Hd,
                AF: Gd,
                AG: Ra,
                AI: "Anguilla",
                AL: "Shqipëria",
                AM: Fd,
                AN: xb,
                AO: "Angola",
                AQ: "Antarctica",
                AR: "Argentina",
                AS: Qa,
                AT: "Österreich",
                AU: "Australia",
                AW: "Aruba",
                AX: "Åland",
                AZ: "Azərbaycan",
                BA: x,
                BB: "Barbados",
                BD: "বাংলাদেশ",
                BE: "België",
                BF: "Burkina Faso",
                BG: "България",
                BH: "البحرين",
                BI: "Burundi",
                BJ: "Bénin",
                BM: "Bermuda",
                BN: "Brunei",
                BO: w,
                BR: "Brasil",
                BS: "Bahamas",
                BT: "भूटान",
                BV: "Bouvet Island",
                BW: Ua,
                BY: Cd,
                BZ: "Belize",
                CA: "Canada",
                CC: "Cocos (Keeling) Islands",
                CD: Jb,
                CF: Ib,
                CG: "Congo",
                CH: "Schweiz",
                CI: "Côte d’Ivoire",
                CK: "Cook Islands",
                CL: "Chile",
                CM: "Cameroun",
                CN: "中国",
                CO: "Colombia",
                CR: "Costa Rica",
                CS: Qb,
                CU: "Cuba",
                CV: "Cabo Verde",
                CX: Xa,
                CY: "Κύπρος",
                CZ: Bd,
                DD: "East Germany",
                DE: "Deutschland",
                DJ: "Jabuuti",
                DK: "Danmark",
                DM: "Dominica",
                DO: Gb,
                DZ: "الجزائر",
                EC: "Ecuador",
                EE: "Eesti",
                EG: "مصر",
                EH: Id,
                ER: "اريتريا",
                ES: "España",
                ET: X,
                FI: "Suomi",
                FJ: "फिजी",
                FK: gb,
                FM: z,
                FO: "Føroyar",
                FR: "France",
                FX: "Metropolitan France",
                GA: "Gabon",
                GB: ac,
                GD: "Grenada",
                GE: "საქართველო",
                GF: ib,
                GG: "Guernsey",
                GH: y,
                GI: "Gibraltar",
                GL: ob,
                GM: "Gambia",
                GN: "Guinée",
                GP: "Guadeloupe",
                GQ: hb,
                GR: "Ελλάδα",
                GS: "South Georgia and the South Sandwich Islands",
                GT: "Guatemala",
                GU: "Guam",
                GW: "Guiné Bissau",
                GY: "Guyana",
                HK: "香港",
                HM: "Heard Island and McDonald Islands",
                HN: kb,
                HR: "Hrvatska",
                HT: "Haïti",
                HU: "Magyarország",
                ID: lb,
                IE: "Ireland",
                IL: "ישראל",
                IM: "Isle of Man",
                IN: W,
                IO: "British Indian Ocean Territory",
                IQ: "العراق",
                IR: "ایران",
                IS: "Ísland",
                IT: "Italia",
                JE: "Jersey",
                JM: "Jamaica",
                JO: "الأردن",
                JP: "日本",
                KE: "Kenya",
                KG: Dd,
                KH: "កម្ពុជា",
                KI: pb,
                KM: Ld,
                KN: Lb,
                KP: Nd,
                KR: "대한민국",
                KW: "الكويت",
                KY: Wa,
                KZ: "Казахстан",
                LA: "ลาว",
                LB: "لبنان",
                LC: "Saint Lucia",
                LI: "Liechtenstein",
                LK: "இலங்கை",
                LR: "Liberia",
                LS: "Lesotho",
                LT: "Lietuva",
                LU: tb,
                LV: "Latvija",
                LY: "ليبيا",
                MA: "المغرب",
                MC: "Monaco",
                MD: wb,
                ME: "Црна Гора",
                MG: ub,
                MH: vb,
                MK: "Македонија",
                ML: "مالي",
                MM: "Myanmar",
                MN: "蒙古",
                MO: "澳门",
                MP: Ab,
                MQ: "Martinique",
                MR: "موريتانيا",
                MS: "Montserrat",
                MT: "Malta",
                MU: "Mauritius",
                MV: "Maldives",
                MW: "Malawi",
                MX: "México",
                MY: "Malaysia",
                MZ: "Moçambique",
                NA: "Namibia",
                NC: Bb,
                NE: "Niger",
                NF: zb,
                NG: A,
                NI: "Nicaragua",
                NL: "Nederland",
                NO: "Norge",
                NP: "नेपाल",
                NR: "Nauru",
                NT: "Neutral Zone",
                NU: "Niue",
                NZ: yb,
                OM: "عمان",
                PA: "Panamá",
                PE: "Perú",
                PF: Eb,
                PG: C,
                PH: Db,
                PK: Md,
                PL: "Polska",
                PM: Nb,
                PN: "Pitcairn",
                PR: Fb,
                PS: "فلسطين",
                PT: "Portugal",
                PW: "Palau",
                PY: Cb,
                QA: "قطر",
                QO: "Outlying Oceania",
                QU: "European Union",
                RE: "Réunion",
                RO: "România",
                RS: "Србија",
                RU: "Россия",
                RW: D,
                SA: Jd,
                SB: Tb,
                SC: Rb,
                SD: "السودان",
                SE: "Sverige",
                SG: "新加坡",
                SH: "Saint Helena",
                SI: "Slovenija",
                SJ: Ub,
                SK: Sb,
                SL: "Sierra Leone",
                SM: "San Marino",
                SN: F,
                SO: "Somali",
                SR: "Suriname",
                ST: Wb,
                SU: "Union of Soviet Socialist Republics",
                SV: "El Salvador",
                SY: "سوريا",
                SZ: Vb,
                TC: Zb,
                TD: "تشاد",
                TF: "French Southern Territories",
                TG: "Togo",
                TH: "ประเทศไทย",
                TJ: "تاجیکستان",
                TK: G,
                TL: Yb,
                TM: "Туркменистан",
                TN: "تونس",
                TO: "Tonga",
                TR: I,
                TT: "Trinidad y Tobago",
                TV: H,
                TW: "台湾",
                TZ: Xb,
                UA: "Україна",
                UG: "Uganda",
                UM: cc,
                US: bc,
                UY: "Uruguay",
                UZ: "Ўзбекистон",
                VA: "Vaticano",
                VC: Mb,
                VE: "Venezuela",
                VG: Va,
                VI: $b,
                VN: "Việt Nam",
                VU: J,
                WF: ec,
                WS: "Samoa",
                YD: "People's Democratic Republic of Yemen",
                YE: "اليمن",
                YT: "Mayotte",
                ZA: E,
                ZM: "Zambia",
                ZW: "Zimbabwe",
                ZZ: dc,
                aa_DJ: "Jabuuti",
                aa_ER: "Érythrée",
                aa_ER_SAAHO: "Érythrée",
                aa_ET: mb,
                af_NA: "Namibië",
                af_ZA: "Suid-Afrika",
                ak_GH: y,
                am_ET: X,
                ar_AE: Hd,
                ar_BH: "البحرين",
                ar_DJ: "جيبوتي",
                ar_DZ: "الجزائر",
                ar_EG: "مصر",
                ar_EH: Id,
                ar_ER: "اريتريا",
                ar_IL: "اسرائيل",
                ar_IQ: "العراق",
                ar_JO: "الأردن",
                ar_KM: Ld,
                ar_KW: "الكويت",
                ar_LB: "لبنان",
                ar_LY: "ليبيا",
                ar_MA: "المغرب",
                ar_MR: "موريتانيا",
                ar_OM: "عمان",
                ar_PS: "فلسطين",
                ar_QA: "قطر",
                ar_SA: Jd,
                ar_SD: "السودان",
                ar_SY: "سوريا",
                ar_TD: "تشاد",
                ar_TN: "تونس",
                ar_YE: "اليمن",
                as_IN: "ভাৰত",
                ay_BO: w,
                az_AZ: "Azərbaycan",
                az_Cyrl_AZ: "Азәрбајҹан",
                az_Latn_AZ: "Azerbaycan",
                be_BY: Cd,
                bg_BG: "България",
                bi_VU: J,
                bn_BD: "বাংলাদেশ",
                bn_IN: "ভারত",
                bo_CN: "རྒྱ་ནག",
                bo_IN: "རྒྱ་གར་",
                bs_BA: x,
                byn_ER: "ኤርትራ",
                ca_AD: "Andorra",
                ca_ES: "Espanya",
                cch_NG: A,
                ch_GU: "Guam",
                chk_FM: z,
                cop_Arab_EG: "مصر",
                cop_Arab_US: Kd,
                cop_EG: "مصر",
                cop_US: Kd,
                cs_CZ: Bd,
                cy_GB: "Prydain Fawr",
                da_DK: "Danmark",
                da_GL: "Grønland",
                de_AT: "Österreich",
                de_BE: "Belgien",
                de_CH: "Schweiz",
                de_DE: "Deutschland",
                de_LI: "Liechtenstein",
                de_LU: "Luxemburg",
                dv_MV: "Maldives",
                dz_BT: "Bhutan",
                ee_GH: y,
                ee_TG: "Togo",
                efi_NG: A,
                el_CY: "Κύπρος",
                el_GR: "Ελλάδα",
                en_AG: Ra,
                en_AI: "Anguilla",
                en_AS: Qa,
                en_AU: "Australia",
                en_BB: "Barbados",
                en_BE: "Belgium",
                en_BM: "Bermuda",
                en_BS: "Bahamas",
                en_BW: Ua,
                en_BZ: "Belize",
                en_CA: "Canada",
                en_CC: "Cocos Islands",
                en_CK: "Cook Islands",
                en_CM: "Cameroon",
                en_CX: Xa,
                en_DM: "Dominica",
                en_FJ: "Fiji",
                en_FK: gb,
                en_FM: z,
                en_GB: ac,
                en_GD: "Grenada",
                en_GG: "Guernsey",
                en_GH: y,
                en_GI: "Gibraltar",
                en_GM: "Gambia",
                en_GU: "Guam",
                en_GY: "Guyana",
                en_HK: "Hong Kong",
                en_HN: kb,
                en_IE: "Ireland",
                en_IM: "Isle of Man",
                en_IN: "India",
                en_JE: "Jersey",
                en_JM: "Jamaica",
                en_KE: "Kenya",
                en_KI: pb,
                en_KN: Lb,
                en_KY: Wa,
                en_LC: "Saint Lucia",
                en_LR: "Liberia",
                en_LS: "Lesotho",
                en_MH: vb,
                en_MP: Ab,
                en_MS: "Montserrat",
                en_MT: "Malta",
                en_MU: "Mauritius",
                en_MW: "Malawi",
                en_NA: "Namibia",
                en_NF: zb,
                en_NG: A,
                en_NR: "Nauru",
                en_NU: "Niue",
                en_NZ: yb,
                en_PG: C,
                en_PH: Db,
                en_PK: "Pakistan",
                en_PN: "Pitcairn",
                en_PR: Fb,
                en_RW: D,
                en_SB: Tb,
                en_SC: Rb,
                en_SG: "Singapore",
                en_SH: "Saint Helena",
                en_SL: "Sierra Leone",
                en_SZ: Vb,
                en_TC: Zb,
                en_TK: G,
                en_TO: "Tonga",
                en_TT: "Trinidad and Tobago",
                en_TV: H,
                en_TZ: Xb,
                en_UG: "Uganda",
                en_UM: cc,
                en_US: bc,
                en_US_POSIX: bc,
                en_VC: Mb,
                en_VG: Va,
                en_VI: $b,
                en_VU: J,
                en_WS: "Samoa",
                en_ZA: E,
                en_ZM: "Zambia",
                en_ZW: "Zimbabwe",
                es_AR: "Argentina",
                es_BO: w,
                es_CL: "Chile",
                es_CO: "Colombia",
                es_CR: "Costa Rica",
                es_CU: "Cuba",
                es_DO: Gb,
                es_EC: "Ecuador",
                es_ES: "España",
                es_GQ: "Guinea Ecuatorial",
                es_GT: "Guatemala",
                es_HN: kb,
                es_MX: "México",
                es_NI: "Nicaragua",
                es_PA: "Panamá",
                es_PE: "Perú",
                es_PH: "Filipinas",
                es_PR: Fb,
                es_PY: Cb,
                es_SV: "El Salvador",
                es_US: "Estados Unidos",
                es_UY: "Uruguay",
                es_VE: "Venezuela",
                et_EE: "Eesti",
                eu_ES: "Espainia",
                fa_AF: Gd,
                fa_IR: "ایران",
                fi_FI: "Suomi",
                fil_PH: Db,
                fj_FJ: "Fiji",
                fo_FO: "Føroyar",
                fr_BE: "Belgique",
                fr_BF: "Burkina Faso",
                fr_BI: "Burundi",
                fr_BJ: "Bénin",
                fr_CA: "Canada",
                fr_CD: Jb,
                fr_CF: Ib,
                fr_CG: "Congo",
                fr_CH: "Suisse",
                fr_CI: "Côte d’Ivoire",
                fr_CM: "Cameroun",
                fr_DJ: "Djibouti",
                fr_DZ: "Algérie",
                fr_FR: "France",
                fr_GA: "Gabon",
                fr_GF: ib,
                fr_GN: "Guinée",
                fr_GP: "Guadeloupe",
                fr_GQ: hb,
                fr_HT: "Haïti",
                fr_KM: "Comores",
                fr_LU: tb,
                fr_MA: "Maroc",
                fr_MC: "Monaco",
                fr_MG: ub,
                fr_ML: "Mali",
                fr_MQ: "Martinique",
                fr_MU: "Maurice",
                fr_NC: Bb,
                fr_NE: "Niger",
                fr_PF: Eb,
                fr_PM: Nb,
                fr_RE: "Réunion",
                fr_RW: D,
                fr_SC: Rb,
                fr_SN: F,
                fr_SY: "Syrie",
                fr_TD: "Tchad",
                fr_TG: "Togo",
                fr_TN: "Tunisie",
                fr_VU: J,
                fr_WF: ec,
                fr_YT: "Mayotte",
                fur_IT: "Italia",
                ga_IE: "Éire",
                gaa_GH: y,
                gez_ER: "ኤርትራ",
                gez_ET: X,
                gil_KI: pb,
                gl_ES: "España",
                gn_PY: Cb,
                gu_IN: "ભારત",
                gv_GB: Hb,
                ha_Arab_NG: "نيجيريا",
                ha_GH: "غانا",
                ha_Latn_GH: y,
                ha_Latn_NE: "Niger",
                ha_Latn_NG: "Nigéria",
                ha_NE: "النيجر",
                ha_NG: "نيجيريا",
                haw_US: "ʻAmelika Hui Pū ʻIa",
                he_IL: "ישראל",
                hi_IN: W,
                ho_PG: C,
                hr_BA: x,
                hr_HR: "Hrvatska",
                ht_HT: "Haïti",
                hu_HU: "Magyarország",
                hy_AM: Fd,
                hy_AM_REVISED: Fd,
                id_ID: lb,
                ig_NG: A,
                ii_CN: "ꍏꇩ",
                is_IS: "Ísland",
                it_CH: "Svizzera",
                it_IT: "Italia",
                it_SM: "San Marino",
                ja_JP: "日本",
                ka_GE: "საქართველო",
                kaj_NG: A,
                kam_KE: "Kenya",
                kcg_NG: A,
                kfo_NG: "Nigéria",
                kk_KZ: "Қазақстан",
                kl_GL: ob,
                km_KH: "កម្ពុជា",
                kn_IN: "ಭಾರತ",
                ko_KP: Nd,
                ko_KR: "대한민국",
                kok_IN: W,
                kos_FM: z,
                kpe_GN: "Guinée",
                kpe_LR: "Libéria",
                ks_IN: W,
                ku_IQ: "Irak",
                ku_IR: "İran",
                ku_Latn_IQ: "Irak",
                ku_Latn_IR: "İran",
                ku_Latn_SY: "Suriye",
                ku_Latn_TR: I,
                ku_SY: "Suriye",
                ku_TR: I,
                kw_GB: Hb,
                ky_Cyrl_KG: Dd,
                ky_KG: "Kırgızistan",
                la_VA: "Vaticano",
                lb_LU: tb,
                ln_CD: Jb,
                ln_CG: "Kongo",
                lo_LA: "Laos",
                lt_LT: "Lietuva",
                lv_LV: "Latvija",
                mg_MG: ub,
                mh_MH: vb,
                mi_NZ: yb,
                mk_MK: "Македонија",
                ml_IN: "ഇന്ത്യ",
                mn_Cyrl_MN: "Монголия",
                mn_MN: "Монголия",
                mr_IN: W,
                ms_BN: "Brunei",
                ms_MY: "Malaysia",
                ms_SG: "Singapura",
                mt_MT: "Malta",
                my_MM: "Myanmar",
                na_NR: "Nauru",
                nb_NO: "Norge",
                nb_SJ: Ub,
                ne_NP: "नेपाल",
                niu_NU: "Niue",
                nl_AN: xb,
                nl_AW: "Aruba",
                nl_BE: "België",
                nl_NL: "Nederland",
                nl_SR: "Suriname",
                nn_NO: "Noreg",
                nr_ZA: E,
                nso_ZA: E,
                ny_MW: "Malawi",
                om_ET: mb,
                om_KE: "Keeniyaa",
                or_IN: "ଭାରତ",
                pa_Arab_PK: Md,
                pa_Guru_IN: "ਭਾਰਤ",
                pa_IN: "ਭਾਰਤ",
                pa_PK: Md,
                pap_AN: xb,
                pau_PW: "Palau",
                pl_PL: "Polska",
                pon_FM: z,
                ps_AF: Gd,
                pt_AO: "Angola",
                pt_BR: "Brasil",
                pt_CV: "Cabo Verde",
                pt_GW: "Guiné Bissau",
                pt_MZ: "Moçambique",
                pt_PT: "Portugal",
                pt_ST: Wb,
                pt_TL: Yb,
                qu_BO: w,
                qu_PE: "Perú",
                rm_CH: "Schweiz",
                rn_BI: "Burundi",
                ro_MD: wb,
                ro_RO: "România",
                ru_BY: Cd,
                ru_KG: Dd,
                ru_KZ: "Казахстан",
                ru_RU: "Россия",
                ru_UA: "Украина",
                rw_RW: D,
                sa_IN: W,
                sd_Deva_IN: W,
                sd_IN: W,
                se_FI: "Finland",
                se_NO: "Norge",
                sg_CF: Ib,
                sh_BA: "Bosnia and Herzegovina",
                sh_CS: Qb,
                si_LK: "Sri Lanka",
                sid_ET: mb,
                sk_SK: Sb,
                sl_SI: "Slovenija",
                sm_AS: Qa,
                sm_WS: "Samoa",
                so_DJ: "Jabuuti",
                so_ET: "Itoobiya",
                so_KE: "Kiiniya",
                so_SO: "Soomaaliya",
                sq_AL: "Shqipëria",
                sr_BA: "Босна и Херцеговина",
                sr_CS: "Србија и Црна Гора",
                sr_Cyrl_BA: "Босния",
                sr_Cyrl_CS: "Сербия и Черногория",
                sr_Cyrl_ME: "Черногория",
                sr_Cyrl_RS: "Сербия",
                sr_Latn_BA: x,
                sr_Latn_CS: "Srbija i Crna Gora",
                sr_Latn_ME: "Crna Gora",
                sr_Latn_RS: "Srbija",
                sr_ME: "Црна Гора",
                sr_RS: "Србија",
                ss_SZ: Vb,
                ss_ZA: E,
                st_LS: "Lesotho",
                st_ZA: E,
                su_ID: lb,
                sv_AX: "Åland",
                sv_FI: "Finland",
                sv_SE: "Sverige",
                sw_KE: "Kenya",
                sw_TZ: Xb,
                sw_UG: "Uganda",
                swb_KM: Ld,
                syr_SY: "Syria",
                ta_IN: "இந்தியா",
                ta_LK: "இலங்கை",
                ta_SG: "சிங்கப்பூர்",
                te_IN: "భారత దేళం",
                tet_TL: Yb,
                tg_Cyrl_TJ: "Таджикистан",
                tg_TJ: "تاجکستان",
                th_TH: "ประเทศไทย",
                ti_ER: "ኤርትራ",
                ti_ET: X,
                tig_ER: "ኤርትራ",
                tk_TM: "ترکمنستان",
                tkl_TK: G,
                tn_BW: Ua,
                tn_ZA: E,
                to_TO: "Tonga",
                tpi_PG: C,
                tr_CY: "Güney Kıbrıs Rum Kesimi",
                tr_TR: I,
                ts_ZA: E,
                tt_RU: "Россия",
                tvl_TV: H,
                ty_PF: Eb,
                uk_UA: "Україна",
                uli_FM: z,
                und_ZZ: dc,
                ur_IN: "بھارت",
                ur_PK: Md,
                uz_AF: "Afganistan",
                uz_Arab_AF: Gd,
                uz_Cyrl_UZ: "Узбекистан",
                uz_Latn_UZ: "Oʿzbekiston",
                uz_UZ: "Ўзбекистон",
                ve_ZA: E,
                vi_VN: "Việt Nam",
                wal_ET: X,
                wo_Arab_SN: "السنغال",
                wo_Latn_SN: F,
                wo_SN: F,
                xh_ZA: E,
                yap_FM: z,
                yo_NG: A,
                zh_CN: "中国",
                zh_HK: "香港",
                zh_Hans_CN: "中国",
                zh_Hans_SG: "新加坡",
                zh_Hant_HK: "中華人民共和國香港特別行政區",
                zh_Hant_MO: "澳門",
                zh_Hant_TW: "臺灣",
                zh_MO: "澳门",
                zh_SG: "新加坡",
                zh_TW: "台湾",
                zu_ZA: E
            },
            LANGUAGE: {
                aa: "afar",
                ab: "абхазский",
                ace: "Aceh",
                ach: "Acoli",
                ada: "Adangme",
                ady: "адыгейский",
                ae: "Avestan",
                af: "Afrikaans",
                afa: "Afro-Asiatic Language",
                afh: "Afrihili",
                ain: "Ainu",
                ak: "Akan",
                akk: "Akkadian",
                ale: "Aleut",
                alg: "Algonquian Language",
                alt: "Southern Altai",
                am: "አማርኛ",
                an: "Aragonese",
                ang: "Old English",
                anp: "Angika",
                apa: "Apache Language",
                ar: "العربية",
                arc: "Aramaic",
                arn: "Araucanian",
                arp: "Arapaho",
                art: "Artificial Language",
                arw: "Arawak",
                as: "অসমীয়া",
                ast: "asturiano",
                ath: "Athapascan Language",
                aus: "Australian Language",
                av: "аварский",
                awa: "Awadhi",
                ay: "aimara",
                az: "azərbaycanca",
                az_Arab: "ترکی آذربایجانی",
                az_Cyrl: "Азәрбајҹан",
                az_Latn: "Azerice",
                ba: "башкирский",
                bad: "Banda",
                bai: "Bamileke Language",
                bal: "بلوچی",
                ban: "Balin",
                bas: "Basa",
                bat: "Baltic Language",
                be: "беларуская",
                bej: "Beja",
                bem: "Bemba",
                ber: "Berber",
                bg: "български",
                bh: "बिहारी",
                bho: "Bhojpuri",
                bi: "bichelamar ; bislama",
                bik: "Bikol",
                bin: "Bini",
                bla: "Siksika",
                bm: "bambara",
                bn: "বাংলা",
                bnt: "Bantu",
                bo: "པོད་སྐད་",
                br: "breton",
                bra: "Braj",
                bs: "Bosanski",
                btk: "Batak",
                bua: "Buriat",
                bug: "Bugis",
                byn: "ብሊን",
                ca: "català",
                cad: "Caddo",
                cai: "Central American Indian Language",
                car: "Carib",
                cau: "Caucasian Language",
                cch: "Atsam",
                ce: "чеченский",
                ceb: "Cebuano",
                cel: "Celtic Language",
                ch: "Chamorro",
                chb: "Chibcha",
                chg: "Chagatai",
                chk: "Chuukese",
                chm: "марийский (черемисский)",
                chn: "Chinook Jargon",
                cho: "Choctaw",
                chp: "Chipewyan",
                chr: "Cherokee",
                chy: "Cheyenne",
                cmc: "Chamic Language",
                co: "corse",
                cop: "قبطية",
                cop_Arab: "قبطية",
                cpe: "English-based Creole or Pidgin",
                cpf: "French-based Creole or Pidgin",
                cpp: "Portuguese-based Creole or Pidgin",
                cr: "Cree",
                crh: "Crimean Turkish",
                crp: "Creole or Pidgin",
                cs: "čeština",
                csb: "Kashubian",
                cu: "Church Slavic",
                cus: "Cushitic Language",
                cv: "чувашский",
                cy: "Cymraeg",
                da: "dansk",
                dak: "Dakota",
                dar: "даргва",
                day: "Dayak",
                de: "Deutsch",
                del: "Delaware",
                den: "Slave",
                dgr: "Dogrib",
                din: "Dinka",
                doi: "الدوجرى",
                dra: "Dravidian Language",
                dsb: "Lower Sorbian",
                dua: "Duala",
                dum: "Middle Dutch",
                dv: "Divehi",
                dyu: "dioula",
                dz: "རྫོང་ཁ",
                ee: "Ewe",
                efi: "Efik",
                egy: "Ancient Egyptian",
                eka: "Ekajuk",
                el: "Ελληνικά",
                elx: "Elamite",
                en: "English",
                enm: "Middle English",
                eo: "esperanto",
                es: "español",
                et: "eesti",
                eu: "euskara",
                ewo: "Ewondo",
                fa: "فارسی",
                fan: "fang",
                fat: "Fanti",
                ff: "Fulah",
                fi: "suomi",
                fil: "Filipino",
                fiu: "Finno-Ugrian Language",
                fj: "Fijian",
                fo: "føroyskt",
                fon: "Fon",
                fr: "français",
                frm: "Middle French",
                fro: "Old French",
                frr: "Northern Frisian",
                frs: "Eastern Frisian",
                fur: "friulano",
                fy: "Fries",
                ga: "Gaeilge",
                gaa: "Ga",
                gay: "Gayo",
                gba: "Gbaya",
                gd: "Scottish Gaelic",
                gem: "Germanic Language",
                gez: "ግዕዝኛ",
                gil: "Gilbertese",
                gl: "galego",
                gmh: "Middle High German",
                gn: "guaraní",
                goh: "Old High German",
                gon: "Gondi",
                gor: "Gorontalo",
                got: "Gothic",
                grb: "Grebo",
                grc: "Αρχαία Ελληνικά",
                gsw: "Schweizerdeutsch",
                gu: "ગુજરાતી",
                gv: "Gaelg",
                gwi: "Gwichʼin",
                ha: "الهوسا",
                ha_Arab: "الهوسا",
                ha_Latn: "haoussa",
                hai: "Haida",
                haw: "ʻōlelo Hawaiʻi",
                he: "עברית",
                hi: "हिंदी",
                hil: "Hiligaynon",
                him: "Himachali",
                hit: "Hittite",
                hmn: "Hmong",
                ho: "Hiri Motu",
                hr: "hrvatski",
                hsb: "Upper Sorbian",
                ht: "haïtien",
                hu: "magyar",
                hup: "Hupa",
                hy: "Հայերէն",
                hz: "Herero",
                ia: "interlingvao",
                iba: "Iban",
                id: "Bahasa Indonesia",
                ie: "Interlingue",
                ig: "Igbo",
                ii: "ꆈꌠꉙ",
                ijo: "Ijo",
                ik: "Inupiaq",
                ilo: "Iloko",
                inc: "Indic Language",
                ine: "Indo-European Language",
                inh: "ингушский",
                io: "Ido",
                ira: "Iranian Language",
                iro: "Iroquoian Language",
                is: "íslenska",
                it: "italiano",
                iu: "Inuktitut",
                ja: "日本語",
                jbo: "Lojban",
                jpr: "Judeo-Persian",
                jrb: "Judeo-Arabic",
                jv: "Jawa",
                ka: "ქართული",
                kaa: "каракалпакский",
                kab: "kabyle",
                kac: "Kachin",
                kaj: "Jju",
                kam: "Kamba",
                kar: "Karen",
                kaw: "Kawi",
                kbd: "кабардинский",
                kcg: "Tyap",
                kfo: "koro",
                kg: "Kongo",
                kha: "Khasi",
                khi: "Khoisan Language",
                kho: "Khotanese",
                ki: "Kikuyu",
                kj: "Kuanyama",
                kk: "Қазақ",
                kl: "kalaallisut",
                km: "ភាសាខ្មែរ",
                kmb: "quimbundo",
                kn: "ಕನ್ನಡ",
                ko: "한국어",
                kok: "कोंकणी",
                kos: "Kosraean",
                kpe: "kpellé",
                kr: "Kanuri",
                krc: "карачаево-балкарский",
                krl: "карельский",
                kro: "Kru",
                kru: "Kurukh",
                ks: "काश्मिरी",
                ku: "Kürtçe",
                ku_Arab: "الكردية",
                ku_Latn: "Kürtçe",
                kum: "кумыкский",
                kut: "Kutenai",
                kv: "Komi",
                kw: "kernewek",
                ky: "Kırgızca",
                ky_Arab: "القيرغستانية",
                ky_Cyrl: "киргизский",
                la: "latino",
                lad: "לדינו",
                lah: "لاهندا",
                lam: "Lamba",
                lb: "luxembourgeois",
                lez: "лезгинский",
                lg: "Ganda",
                li: "Limburgs",
                ln: "lingala",
                lo: "Lao",
                lol: "mongo",
                loz: "Lozi",
                lt: "lietuvių",
                lu: "luba-katanga",
                lua: "luba-lulua",
                lui: "Luiseno",
                lun: "Lunda",
                luo: "Luo",
                lus: "Lushai",
                lv: "latviešu",
                mad: "Madura",
                mag: "Magahi",
                mai: "Maithili",
                mak: "Makassar",
                man: "Mandingo",
                map: "Austronesian",
                mas: "Masai",
                mdf: "мокша",
                mdr: "Mandar",
                men: "Mende",
                mg: "malgache",
                mga: "Middle Irish",
                mh: "Marshallese",
                mi: "Maori",
                mic: "Micmac",
                min: "Minangkabau",
                mis: "Miscellaneous Language",
                mk: "македонски",
                mkh: "Mon-Khmer Language",
                ml: "മലയാളം",
                mn: Ed,
                mn_Cyrl: Ed,
                mn_Mong: Ed,
                mnc: "Manchu",
                mni: "Manipuri",
                mno: "Manobo Language",
                mo: "Moldavian",
                moh: "Mohawk",
                mos: "moré ; mossi",
                mr: "मराठी",
                ms: "Bahasa Melayu",
                mt: "Malti",
                mul: "Multiple Languages",
                mun: "Munda Language",
                mus: "Creek",
                mwl: "Mirandese",
                mwr: "Marwari",
                my: "Burmese",
                myn: "Mayan Language",
                myv: "эрзя",
                na: "Nauru",
                nah: "Nahuatl",
                nai: "North American Indian Language",
                nap: "napoletano",
                nb: "norsk bokmål",
                nd: "North Ndebele",
                nds: "Low German",
                ne: "नेपाली",
                "new": "Newari",
                ng: "Ndonga",
                nia: "Nias",
                nic: "Niger-Kordofanian Language",
                niu: "Niuean",
                nl: "Nederlands",
                nn: "nynorsk",
                no: "Norwegian",
                nog: "ногайский",
                non: "Old Norse",
                nqo: "N’Ko",
                nr: "South Ndebele",
                nso: "Northern Sotho",
                nub: "Nubian Language",
                nv: "Navajo",
                nwc: "Classical Newari",
                ny: "nianja; chicheua; cheua",
                nym: "Nyamwezi",
                nyn: "Nyankole",
                nyo: "Nyoro",
                nzi: "Nzima",
                oc: "occitan",
                oj: "Ojibwa",
                om: "Oromoo",
                or: "ଓଡ଼ିଆ",
                os: "осетинский",
                osa: "Osage",
                ota: "Ottoman Turkish",
                oto: "Otomian Language",
                pa: "ਪੰਜਾਬੀ",
                pa_Arab: "پنجاب",
                pa_Guru: "ਪੰਜਾਬੀ",
                paa: "Papuan Language",
                pag: "Pangasinan",
                pal: "Pahlavi",
                pam: "Pampanga",
                pap: "Papiamento",
                pau: "Palauan",
                peo: "Old Persian",
                phi: "Philippine Language",
                phn: "Phoenician",
                pi: "บาลี",
                pl: "polski",
                pon: "Pohnpeian",
                pra: "Prakrit Language",
                pro: "Old Provençal",
                ps: "پښتو",
                pt: "português",
                qu: "quechua",
                raj: "Rajasthani",
                rap: "Rapanui",
                rar: "Rarotongan",
                rm: "Rätoromanisch",
                rn: "roundi",
                ro: "română",
                roa: "Romance Language",
                rom: "Romany",
                ru: "русский",
                rup: "Aromanian",
                rw: "rwanda",
                sa: "संस्कृत भाषा",
                sad: "Sandawe",
                sah: "якутский",
                sai: "South American Indian Language",
                sal: "Salishan Language",
                sam: "ארמית שומרונית",
                sas: "Sasak",
                sat: "Santali",
                sc: "Sardinian",
                scn: "siciliano",
                sco: "Scots",
                sd: "सिन्धी",
                sd_Arab: "سندی",
                sd_Deva: "सिन्धी",
                se: "nordsamiska",
                sel: "селькупский",
                sem: "Semitic Language",
                sg: "sangho",
                sga: "Old Irish",
                sgn: "Sign Language",
                sh: "Serbo-Croatian",
                shn: "Shan",
                si: "Sinhalese",
                sid: "Sidamo",
                sio: "Siouan Language",
                sit: "Sino-Tibetan Language",
                sk: "slovenský",
                sl: "slovenščina",
                sla: "Slavic Language",
                sm: "Samoan",
                sma: "sydsamiska",
                smi: "Sami Language",
                smj: "lulesamiska",
                smn: "Inari Sami",
                sms: "Skolt Sami",
                sn: "Shona",
                snk: "soninké",
                so: "Soomaali",
                sog: "Sogdien",
                son: "Songhai",
                sq: "shqipe",
                sr: "Српски",
                sr_Cyrl: "сербский",
                sr_Latn: "Srpski",
                srn: "Sranantongo",
                srr: "sérère",
                ss: "Swati",
                ssa: "Nilo-Saharan Language",
                st: "Sesotho",
                su: "Sundan",
                suk: "Sukuma",
                sus: "soussou",
                sux: "Sumerian",
                sv: "svenska",
                sw: "Kiswahili",
                syc: "Classical Syriac",
                syr: "Syriac",
                ta: "தமிழ்",
                tai: "Tai Language",
                te: "తెలుగు",
                tem: "Timne",
                ter: "Tereno",
                tet: "tétum",
                tg: "تاجک",
                tg_Arab: "تاجک",
                tg_Cyrl: "таджикский",
                th: "ไทย",
                ti: "ትግርኛ",
                tig: "ትግረ",
                tiv: "Tiv",
                tk: "ترکمنی",
                tkl: G,
                tl: "Tagalog",
                tlh: "Klingon",
                tli: "Tlingit",
                tmh: "tamacheq",
                tn: "Tswana",
                to: "Tonga",
                tog: "Nyasa Tonga",
                tpi: "Tok Pisin",
                tr: "Türkçe",
                ts: "Tsonga",
                tsi: "Tsimshian",
                tt: "татарский",
                tum: "Tumbuka",
                tup: "Tupi Language",
                tut: "алтайские (другие)",
                tvl: H,
                tw: "Twi",
                ty: "tahitien",
                tyv: "тувинский",
                udm: "удмуртский",
                ug: "уйгурский",
                uga: "Ugaritic",
                uk: "українська",
                umb: "umbundu",
                und: "English",
                ur: "اردو",
                uz: "Ўзбек",
                uz_Arab: "اۉزبېک",
                uz_Cyrl: "узбекский",
                uz_Latn: "o'zbekcha",
                vai: "Vai",
                ve: "Venda",
                vi: "Tiếng Việt",
                vo: "volapuko",
                vot: "Votic",
                wa: "Wallonisch",
                wak: "Wakashan Language",
                wal: "Walamo",
                war: "Waray",
                was: "Washo",
                wen: "Sorbian Language",
                wo: "wolof",
                wo_Arab: "الولوف",
                wo_Latn: "wolof",
                xal: "калмыцкий",
                xh: "Xhosa",
                yao: "iao",
                yap: "Yapese",
                yi: "יידיש",
                yo: "Yoruba",
                ypk: "Yupik Language",
                za: "Zhuang",
                zap: "Zapotec",
                zen: "Zenaga",
                zh: "中文",
                zh_Hans: "中文",
                zh_Hant: "中文",
                znd: "Zande",
                zu: "Zulu",
                zun: "Zuni",
                zxx: "No linguistic content",
                zza: "Zaza"
            }
        }, Z.locale.Wf = function(e) {
            e = e.replace(/-/g, K), Z.locale.M = e
        }, Z.locale.Ea = function() {
            return Z.locale.M || (Z.locale.M = Q), Z.locale.M
        }, Z.locale.J = {
            vd: "DateTimeConstants",
            Fd: "NumberFormatConstants",
            gc: "TimeZoneConstants",
            Wb: sb,
            hc: "TimeZoneSelectedIds",
            jc: "TimeZoneSelectedShortNames",
            ic: "TimeZoneSelectedLongNames",
            fc: "TimeZoneAllLongNames"
        }, Z.locale.Da = function(e) {
            return (e = e.match(/^\w{2,3}([-_]|$)/)) ? e[0].replace(/[_-]/g, b) : b
        }, Z.locale.kb = function(e) {
            return (e = e.match(/[-_]([a-zA-Z]{2}|\d{3})([-_]|$)/)) ? e[0].replace(/[_-]/g, b) : b
        }, Z.locale.Re = function(e) {
            return e = e.split(/[-_]/g), 1 < e.length && e[1].match(/^[a-zA-Z]{4}$/) ? e[1] : b
        }, Z.locale.Se = function(e) {
            return (e = e.match(/[-_]([a-z]{2,})/)) ? e[1] : b
        }, Z.locale.Me = function(e) {
            var t = Z.locale.Da(e) + K + Z.locale.kb(e);
            return t in Z.locale.K.COUNTRY ? Z.locale.K.COUNTRY[t] : e
        }, Z.locale.Ie = function(e, t) {
            t || (t = Z.locale.mb());
            var n = Z.locale.kb(e);
            return n in t.COUNTRY ? t.COUNTRY[n] : e
        }, Z.locale.Ne = function(e) {
            if (e in Z.locale.K.LANGUAGE) return Z.locale.K.LANGUAGE[e];
            var t = Z.locale.Da(e);
            return t in Z.locale.K.LANGUAGE ? Z.locale.K.LANGUAGE[t] : e
        }, Z.locale.Je = function(e, t) {
            if (t || (t = Z.locale.mb()), e in t.LANGUAGE) return t.LANGUAGE[e];
            var n = Z.locale.Da(e);
            return n in t.LANGUAGE ? t.LANGUAGE[n] : e
        }, Z.locale.L = function(e, t, n) {
            Z.locale.m[t] || (Z.locale.m[t] = {}), Z.locale.m[t][n] = e, Z.locale.M || (Z.locale.M = n)
        }, Z.locale.kf = function(e, t) {
            return e in Z.locale.m && t in Z.locale.m[e]
        }, Z.locale.m = {}, Z.locale.Jf = function(e, t) {
            Z.locale.L(e, Z.locale.J.gc, t)
        }, Z.locale.Hf = function(e, t) {
            Z.locale.L(e, Z.locale.J.Wb, t)
        }, Z.locale.Kf = function(e, t) {
            Z.locale.L(e, Z.locale.J.hc, t)
        }, Z.locale.Mf = function(e, t) {
            Z.locale.L(e, Z.locale.J.jc, t)
        }, Z.locale.Lf = function(e, t) {
            Z.locale.L(e, Z.locale.J.ic, t)
        }, Z.locale.If = function(e, t) {
            Z.locale.L(e, Z.locale.J.fc, t)
        }, Z.locale.mb = function() {
            var e = Z.locale.Ea(),
                e = e ? e : Z.locale.Ea();
            return sb in Z.locale.m ? Z.locale.m.LocaleNameConstants[e] : void 0
        }, Z.locale.Qe = function(e, t) {
            var n = t ? t : Z.locale.Ea();
            return e in Z.locale.m ? n in Z.locale.m[e] ? Z.locale.m[e][n] : (n = n.split(K), 1 < n.length && n[0] in Z.locale.m[e] ? Z.locale.m[e][n[0]] : Z.locale.m[e].en) : void 0
        };
        var google = {
            a: {}
        };
        if (google.a.c = {}, google.a.c.languages = {
                af: !0,
                am: !0,
                az: !0,
                ar: !0,
                arb: "ar",
                bg: !0,
                bn: !0,
                ca: !0,
                cs: !0,
                cmn: "zh",
                da: !0,
                de: !0,
                el: !0,
                en: !0,
                en_gb: !0,
                es: !0,
                es_419: !0,
                et: !0,
                eu: !0,
                fa: !0,
                fi: !0,
                fil: !0,
                fr: !0,
                fr_ca: !0,
                gl: !0,
                ka: !0,
                gu: !0,
                he: "iw",
                hi: !0,
                hr: !0,
                hu: !0,
                hy: !0,
                id: !0,
                "in": Kc,
                is: !0,
                it: !0,
                iw: !0,
                ja: !0,
                ji: "yi",
                jv: !1,
                jw: "jv",
                km: !0,
                kn: !0,
                ko: !0,
                lo: !0,
                lt: !0,
                lv: !0,
                ml: !0,
                mn: !0,
                mo: "ro",
                mr: !0,
                ms: !0,
                nb: "no",
                ne: !0,
                nl: !0,
                no: !0,
                pl: !0,
                pt: "pt_br",
                pt_br: !0,
                pt_pt: !0,
                ro: !0,
                ru: !0,
                si: !0,
                sk: !0,
                sl: !0,
                sr: !0,
                sv: !0,
                sw: !0,
                swh: "sw",
                ta: !0,
                te: !0,
                th: !0,
                tl: "fil",
                tr: !0,
                uk: !0,
                ur: !0,
                vi: !0,
                yi: !1,
                zh: "zh_ch",
                zh_cn: !0,
                zh_hk: !0,
                zh_tw: !0,
                zsm: "ms",
                zu: !0
            }, google.a.c.P = {}, google.a.c.R = jd, google.a.c.log = Y(), google.a.c.error = Y(), google.a.c.Z = !1, google.a.c.N = window, google.a.c.Sa = {
                gstatic: {
                    prefix: "https://www.gstatic.com/charts",
                    debug: "{prefix}/debug/{version}/jsapi_debug_{package}_module.js",
                    compiled: "{prefix}/{version}/js/jsapi_compiled_{package}_module.js",
                    i18n: "{prefix}/{version}/i18n/jsapi_compiled_i18n_{package}_module__{language}.js",
                    css: ud,
                    css_debug: ud,
                    third_party: vd,
                    third_party_gen: vd
                }
            }, google.a.c.v = google.a.c.Sa.gstatic, google.a.c.zc = {
                "default": [],
                format: [],
                ui: ["format", "default"],
                ui_base: ["format", "default"],
                annotatedtimeline: [U],
                annotationchart: [U, "controls", O, "table"],
                areachart: [U, M],
                bar: [U, P, od],
                barchart: [U, M],
                browserchart: [U],
                calendar: [U],
                charteditor: [U, O, S, pc, "gauge", "motionchart", "orgchart", "table"],
                charteditor_base: [V, O, S, pc, "gauge", "motionchart", "orgchart", "table_base"],
                columnchart: [U, M],
                controls: [U],
                controls_base: [V],
                corechart: [U],
                gantt: [U, P],
                gauge: [U],
                geochart: [U],
                geomap: [U],
                geomap_base: [V],
                helloworld: [U],
                imageareachart: [U, S],
                imagebarchart: [U, S],
                imagelinechart: [U, S],
                imagechart: [U],
                imagepiechart: [U, S],
                imagesparkline: [U, S],
                intensitymap: [U],
                line: [U, P, od],
                linechart: [U, M],
                map: [U],
                motionchart: [U],
                orgchart: [U],
                overtimecharts: [U, O],
                piechart: [U, M],
                sankey: ["d3", "d3.sankey", U],
                scatter: [U, P, od],
                scatterchart: [U, M],
                table: [U],
                table_base: [V],
                timeline: [U, P],
                treemap: [U],
                wordtree: [U]
            }, google.a.c.fd = {
                d3: "d3/d3.js",
                "d3.sankey": "d3/d3.sankey.js",
                webfontloader: "webfontloader/webfont.js"
            }, google.a.c.Db = {
                dygraph: "dygraphs/dygraph-tickers-combined.js"
            }, google.a.c.wc = {
                annotatedtimeline: "/annotatedtimeline/annotatedtimeline.css",
                annotationchart: "annotationchart/annotationchart.css",
                charteditor: "charteditor/charteditor.css",
                charteditor_base: "charteditor/charteditor_base.css",
                controls: "controls/controls.css",
                imagesparkline: "imagesparkline/imagesparkline.css",
                intensitymap: "intensitymap/intensitymap.css",
                orgchart: "orgchart/orgchart.css",
                table: "table/table.css",
                table_base: "table/table_base.css",
                ui: ["util/util.css", "core/tooltip.css"],
                ui_base: "util/util_base.css"
            }, google.a.c.va = function(e, t) {
                for (var n = t || {}, r = [], a = 0; a < e.length; a++) {
                    var i = e[a];
                    if (!n[i]) {
                        n[i] = !0;
                        var o = google.a.c.zc[i] || [];
                        0 < o.length && (r = r.concat(google.a.c.va(o, n))), r.push(i)
                    }
                }
                return r
            }, google.a.c.Dc = function(e) {
                for (var t = {}, n = [], r = 0; r < e.length; r++) {
                    var a = google.a.c.wc[e[r]];
                    Z.isArray(a) || (a = [a]);
                    for (var i = 0; i < a.length; i++)(cssFile = a[i]) && !t[cssFile] && (t[cssFile] = !0, n.push(cssFile))
                }
                return n
            }, google.a.c.Xf = function(e, t) {
                if (t)
                    if ("undefined" == typeof e.onload) {
                        var n = !1;
                        e.onreadystatechange = function() {
                            n || (e.readyState && e.readyState !== N ? google.a.c.N.setTimeout(e.onreadystatechange, 0) : (n = !0, delete e.onreadystatechange, google.a.c.N.setTimeout(t, 0)))
                        }
                    } else e.onload = t
            }, google.a.c.Tc = function(e, t) {
                google.a.c.log(Rc + e);
                var n = t.createElement(cd);
                n.type = hd, n.language = Mc, n.async = !1, n.defer = !1;
                var r = t.body || t.head || t.getElementsByTagName(jb).item(0) || t.documentElement;
                r.insertBefore(n, r.lastChild), n.src = e, google.a.c.log(xc + e)
            }, google.a.c.Rc = function(a, c) {
                function d(e) {
                    var t = google.a.c.rb,
                        i = a[e++];
                    if (i) {
                        var o = i,
                            u = google.a.c.fd[i];
                        u ? (o = u, i === od && (t = window.document), i = google.a.c.v.third_party) : google.a.c.Db[i] ? (o = google.a.c.Db[i], i = google.a.c.v.third_party_gen) : i = google.a.c.Z ? n : r ? Ma : p, o = i.replace(td, m).replace(wd, B).replace(rd, r).replace(sd, o), google.a.c.Tc(o, t), d(e)
                    }
                }

                function e() {
                    for (var d = [], e = 0; e < a.length; e++) d.push(Ob[a[e]]);
                    eval(Ea + d.join(b) + yd)(), google.a.c.N.setTimeout(c, 0)
                }
                a = google.a.c.va(a);
                for (var f = [], g = 0; g < a.length; g++) {
                    var h = a[g];
                    google.a.c.P[h] || f.push(h)
                }
                a = f, google.a.c.log(qb + a);
                var m = google.a.c.v.prefix,
                    n = google.a.c.v.debug,
                    p = google.a.c.v.compiled,
                    Ma = google.a.c.v.i18n,
                    B = google.a.c.R,
                    r = google.a.c.Ka;
                r === Q && (r = null);
                var Ob = {},
                    Pb = a.length;
                google.a.c.Xc = function(t, n) {
                    google.a.c.log(tc + t), Ob[t] = n, google.a.c.P[t] = !0, Pb--, 0 === Pb && e()
                }, d(0)
            }, google.a.c.W = function(e) {
                function t() {
                    i = !0;
                    for (var e = r.length, t = 0; e > t; t++) r[t]()
                }

                function n() {
                    o = !0;
                    for (var e = a.length, t = 0; e > t; t++) a[t]()
                }
                var r = [],
                    a = [],
                    i = !1,
                    o = !1;
                google.a.c.W.count || (google.a.c.W.count = 0);
                var u = Pc + google.a.c.W.count++,
                    s = {
                        done: function(e) {
                            return r.push(e), i && e(), s
                        },
                        Ba: function(e) {
                            return a.push(e), o && e(), s
                        }
                    },
                    c = document.createElement(Nc);
                return c.setAttribute(Kc, u), c.setAttribute(ad, fd), c.setAttribute(id, gd), "undefined" != typeof c.addEventListener ? (c.addEventListener(Oc, t, !1), c.addEventListener(yc, n, !1)) : "undefined" != typeof c.attachEvent && c.attachEvent(Zc, function() {
                    var e, r = document.styleSheets.length;
                    try {
                        for (; r--;)
                            if (e = document.styleSheets[r], e.id === u) return void t()
                    } catch (a) {}
                    i || n()
                }), document.getElementsByTagName(Ic)[0].appendChild(c), c.setAttribute(Jc, e), s
            }, google.a.c.Oc = function(e, t) {
                google.a.c.log(Qc + e), google.a.c.W(e).done(t).Ba(function() {
                    google.a.c.error(Sc + e)
                })
            }, google.a.c.Pc = function(e, t) {
                e = google.a.c.va(e);
                var n = google.a.c.Dc(e);
                if (null === n || 0 === n.length) t();
                else {
                    google.a.c.log(rb + n.join(ya));
                    var r = google.a.c.v.prefix,
                        a = google.a.c.v.css;
                    google.a.c.Z && (a = google.a.c.v.css_debug || a);
                    var i = google.a.c.R,
                        o = function(e) {
                            var u, s = n[e];
                            u = e < n.length - 1 ? function() {
                                o(e + 1)
                            } : t, google.a.c.P[s] ? (google.a.c.log(Pa + s), google.a.c.N.setTimeout(u, 0)) : (google.a.c.P[s] = !0, s = a.replace(td, r).replace(wd, i).replace(qd, s), google.a.c.Oc(s, u))
                        };
                    o(0)
                }
            }, google.a.c.Fe = function() {
                var e = google.a.c.D;
                if (!e) {
                    e = google.a.c.D = document.createElement(Lc), google.a.c.D = e, e.name = Fc, (document.body || document.head || document).appendChild(e), e.style.display = Vc;
                    var t = google.a.c.rb = e.contentDocument ? e.contentDocument : e.contentWindow ? e.contentWindow.document : e.document;
                    t.open(), t.writeln(b), t.close()
                }
                return e
            }, google.a.c.Ab = function(e) {
                for (var t = e.replace(/-/g, K).toLowerCase(); Z.i(t);) e = t, t = google.a.c.languages[t], t === e && (t = !1);
                return t || (e.match(/_[^_]+$/) ? (e = e.replace(/_[^_]+$/, b), e = google.a.c.Ab(e)) : e = Q), e
            }, google.a.c.$c = function(e, t) {
                t.log && (google.a.c.log = t.log), t.error && (google.a.c.error = t.error);
                var n = t.debug,
                    r = t.language || b,
                    r = google.a.c.Ab(r);
                e || (e = t.version || jd), (google.a.c.R && google.a.c.R !== e || google.a.c.Ka && google.a.c.Ka !== r || google.a.c.Z !== n) && google.a.c.D && google.a.c.D.parentNode && (google.a.c.D.parentNode.removeChild(google.a.c.D), google.a.c.D = null, google.a.c.P = {}), google.a.c.R = e, google.a.c.Ka = r, google.a.c.Z = n
            }, google.a.c.qf = !1, google.a.c.Cb = !1, google.a.c.ma = !1, google.a.c.loaded = !1, google.a.c.Ca = [], google.a.c.load = function(e, t, n) {
                if (google.a.c.Nc) throw Error("google.charts.load() cannot be called more than once.");
                if (google.a.c.Nc = !0, google.a.c.Cb = !0, google.a.c.ma) google.a.c.U(function() {
                    google.a.c.load(e, t)
                });
                else {
                    google.a.c.loaded = !1, google.a.c.ma = !0, google.a.c.$c(e, t), google.a.c.log(Gc + e), google.a.c.v = n || google.a.c.Sa[e] || google.a.c.Sa.gstatic, google.a.c.D = null, google.a.c.N = window, google.a.c.rb = document;
                    var r = function() {
                            google.a.c.ma = !1, google.a.c.loaded = !0, google.a.c.La()
                        },
                        a = t.packages;
                    google.a.c.U(t.callback), google.a.c.Pc(a, function() {
                        google.a.c.Rc(a, r)
                    })
                }
            }, google.a.c.U = function(e) {
                e && google.a.c.Ca.push(e), google.a.c.loaded && !google.a.c.ma && google.a.c.La()
            }, google.a.c.bd = function(e) {
                if (window.addEventListener) window.addEventListener(Oc, e, !1);
                else if (window.attachEvent) window.attachEvent(Zc, e);
                else {
                    var t = window.onload;
                    window.onload = function(n) {
                        t && t(n), e()
                    }
                }
            }, google.a.c.Hb = document && document.readyState === N, google.a.c.bd(function() {
                google.a.c.Hb = !0, google.a.c.La()
            }), google.a.c.La = function() {
                if (google.a.c.Cb && google.a.c.loaded && (google.a.c.Hb || document.readyState === N))
                    for (; 0 < google.a.c.Ca.length;) google.a.c.Ca.shift()()
            }, google.a.c.Oa = function(e, t) {
                google.a.c.Xc(e, t)
            }, Z.global.google && Z.global.google.charts && Z.global.google.charts.load) throw Error("Google Charts loader.js can only be loaded once.");
        google.a.load = function(e, t, n) {
            e === nd && (e = t, t = n), google.a.c.load(String(e), t || {})
        }, google.a.U = function(e) {
            google.a.c.U(e)
        }, google.a.Oa = function(e, t) {
            google.a.c.Oa(e, t)
        }, Z.Aa(Fc, google.a.load), Z.Aa("google.charts.setOnLoadCallback", google.a.U), Z.Aa("google.charts.packageLoadedCallback", google.a.Oa)
    }();
var app = angular.module("savvy", ["ui.router"]);
app.run(function(e) {
    e.$on("$stateChangeStart", function(t, n, r, a) {
        e.title = "Savvy | " + n.title
    }), google.charts.load("current", {
        packages: ["corechart"]
    })
}), app.config(function(e, t, n, r) {
    t.otherwise("/"), r.strictMode(!1), e.state("home", {
        url: "/",
        templateUrl: "frontend/components/home/home_view.html",
        controller: "home_controller",
        title: "Home"
    }).state("search", {
        url: "/search/:search_term",
        templateUrl: "frontend/components/search/search_view.html",
        controller: "search_controller",
        title: "Search",
        params: {
            search_term: {
                value: null,
                squash: !0
            }
        }
    }).state("submit", {
        url: "/submit",
        templateUrl: "frontend/components/submit/submit_view.html",
        controller: "submit_controller",
        title: "Submit Price",
        data: {
            requireLogin: !0
        }
    }).state("product", {
        url: "/product/:product_id",
        templateUrl: "frontend/components/product/product_view.html",
        controller: "product_controller",
        title: "Product Page",
        params: {
            product_id: {
                value: null,
                squash: !0
            }
        }
    }).state("signup", {
        url: "/signup",
        templateUrl: "frontend/components/signup/signup_view.html",
        controller: "signup_controller",
        title: "Sign Up"
    }).state("login", {
        url: "/login",
        templateUrl: "frontend/components/login/login_view.html",
        controller: "login_controller",
        title: "Login"
    })
}), app.directive("fileread", [function() {
    return {
        scope: {
            fileread: "="
        },
        link: function(e, t, n) {
            t.bind("change", function(t) {
                var n = new FileReader;
                n.onload = function(t) {
                    e.$apply(function() {
                        e.fileread = t.target.result
                    })
                }, n.readAsDataURL(t.target.files[0])
            })
        }
    }
}]), app.directive("handleSubmit", function() {
    return function(e, t, n) {
        var r = t.find("input");
        t.bind("submit", function() {
            r[0].blur()
        })
    }
}), app.directive("ngEnter", function() {
    return function(e, t, n) {
        t.bind("keydown keypress", function(t) {
            13 === t.which && (e.$apply(function() {
                e.$eval(n.ngEnter)
            }), t.preventDefault())
        })
    }
}), app.filter("orderObjectBy", function() {
    return function(e, t, n) {
        var r = [];
        return angular.forEach(e, function(e) {
            r.push(e)
        }), r.sort(function(e, n) {
            return e[t] > n[t] ? 1 : -1
        }), n && r.reverse(), r
    }
}), app.service("stringReplace", function() {
    this.escapeRegExp = function(e) {
        return e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")
    }, this.replaceAll = function(e, t, n) {
        return e.replace(new RegExp(this.escapeRegExp(t), "g"), n)
    }
}), angular.module("savvy").service("ProductService", ["$http", function(e) {
    this.saveProduct = function(t) {
        return e({
            method: "POST",
            url: savvy.api_root + "prices/add",
            data: post_data,
            headers: {
                "Content-Type": "application/json"
            }
        }).success(function(e, t, n, r) {
            $scope.createReceipt(e), $scope.product = {}, $scope.message = "success"
        }).error(function(e, t, n, r) {
            $scope.status = t, $scope.message = "error"
        })
    }, this.searchGoats = function(t) {
        return e.get("/goats/search/" + t)
    }, this.getGoats = function() {
        return e.get("/goats")
    }, this.getGoat = function(t) {
        return e.get("/goat/" + t)
    }
}]), app.controller("home_controller", function(e, t) {}), app.controller("login_controller", function(e) {
    e.data = {}, e.login = function() {
        LoginService.loginUser(e.data.username, e.data.password).success(function(e) {
            $state.go("tab.dash")
        }).error(function(e) {
            console.log("hi")
        })
    }
}), app.controller("nav_controller", function(e, t) {
    e.state = t, e.show_mobile_nav = !1, e.search = function() {
        "" !== e.search_term && e.search_term && t.go("search", {
            search_term: e.search_term
        })
    }, e.showMobileNav = function() {
        e.show_mobile_nav ? e.show_mobile_nav = !1 : e.show_mobile_nav = !0
    }
}), app.controller("product_controller", function(e, t, n) {
    e.product = {}, e.vote = function(e) {}, n.get("/api/v1/products/" + t.product_id).success(function(t, n, r, a) {
        console.log(t), e.product = t
    }), e.initGraph = function() {
        google.charts.setOnLoadCallback(function() {
            var e = google.visualization.arrayToDataTable([
                    ["Date", "Average Price (USD)"],
                    ["2004", 1e3],
                    ["2005", 1170],
                    ["2006", 660],
                    ["2007", 1030]
                ]),
                t = {
                    curveType: "function",
                    legend: {
                        position: "bottom"
                    }
                },
                n = new google.visualization.LineChart(document.getElementById("prices-graph"));
            n.draw(e, t)
        })
    }, e.initMap = function() {
        e.map_status = "loading", navigator.geolocation.getCurrentPosition(function(t) {
            e.map_status = "success";
            for (var n = new google.maps.Map(document.getElementById("map"), {
                    center: {
                        lat: t.coords.latitude,
                        lng: t.coords.longitude
                    },
                    scrollwheel: !1,
                    zoom: 10
                }), r = (new google.maps.Marker({
                    map: n,
                    position: {
                        lat: t.coords.latitude,
                        lng: t.coords.longitude
                    },
                    title: "Hello World!"
                }), 0); 5 > r; r++);
        })
    }, e.initGraph(), e.initMap()
}), app.controller("search_controller", function(e, t, n, r) {
    e.initialize = function() {
        e.initializeData(), e.initializeOptions()
    }, e.initializeData = function() {
        e.search_term = t.search_term, e.message = "processing", n.get("/api/v1/products/search?query=" + e.search_term).success(function(t, n, r, a) {
            e.products = t, e.returned_results_length = e.products.length, e.message = "success"
        }).error(function(t, n, r, a) {
            e.status = n, e.message = "error"
        })
    }, e.initializeOptions = function() {
        e.order_options = [{
            name: "average_price",
            display_name: "Average Price: Low to High",
            order_reverse: !1
        }, {
            name: "average_price",
            display_name: "Average Price: High to Low",
            order_reverse: !0
        }, {
            name: "description",
            display_name: "Product Name: A to Z",
            order_reverse: !1
        }, {
            name: "description",
            display_name: "Product Name: Z to A",
            order_reverse: !0
        }], e.chosen_order_item = e.order_options[0], e.orderBy()
    }, e.orderBy = function() {
        e.order_item = e.chosen_order_item.name, e.order_reverse = e.chosen_order_item.order_reverse
    }, e.initialize()
}), app.controller("signup_controller", function(e, t) {}), app.controller("submit_controller", function(e, t, n, r, a) {
    e.initialize = function() {
        e.initializeData(), e.initializeGooglePlaces()
    }, e.submitPrice = function() {
        e.message = "processing";
        var t = parseInt(100 * e.price.toFixed(2));
        e.product.tags.length > 0 && angular.forEach(e.product.tags, function(t, n) {
            e.product.tags[n] = r.replaceAll(t, " ", "")
        });
        var n = {
            product: e.product,
            business: e.google_places,
            user: e.makeid(),
            price: t,
            product_image: e.image
        };
        $http({
            method: "POST",
            url: "/api/v1/prices/add",
            data: n,
            headers: {
                "Content-Type": "application/json"
            }
        }).success(function(t, n, r, a) {
            e.createReceipt(t), e.product = {}, e.message = "success"
        }).error(function(t, n, r, a) {
            e.status = n, e.message = "error"
        })
    }, e.initializeGooglePlaces = function() {
        var t = new google.maps.LatLngBounds(new google.maps.LatLng(39.952584, -75.165222), new google.maps.LatLng(39.952584, -75.165222)),
            n = document.getElementById("places"),
            r = {
                bounds: t,
                types: ["establishment"]
            };
        autocomplete = new google.maps.places.Autocomplete(n, r), google.maps.event.addListener(autocomplete, "place_changed", function() {
            e.google_places = autocomplete.getPlace(), e.$apply()
        })
    }, e.makeid = function() {
        for (var e = "testuser", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", n = 0; 5 > n; n++) e += t.charAt(Math.floor(Math.random() * t.length));
        return e
    }, e.initializeData = function() {
        e.tag = "", e.product = {
            tags: []
        }, e.image = "", e.receipt = {}, e.message = "", e.messages = {
            tag_message: "",
            save_message: ""
        }, e.google_places = "", e.price = "", document.getElementById("places").value = ""
    }, e.createReceipt = function(t) {
        e.receipt = {
            id: t.id,
            business: e.google_places.formatted_address,
            tags: e.product.tags,
            price: e.price,
            description: e.product.description
        }
    }, e.addTag = function() {
        var t = e.product.tags.indexOf(e.tag);
        return "" == e.tag ? void(e.messages.tag_message = "error-empty-input") : t > -1 ? void(e.messages.tag_message = "error-already-entered") : (e.product.tags.push(e.tag), e.tag = "", void(e.messages.tag_message = ""))
    }, e.initialize()
});
