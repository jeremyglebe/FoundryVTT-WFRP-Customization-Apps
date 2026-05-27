//#region src/module/constants.ts
var e = "wfrp4e-customizer-apps", t = "wfrp4e";
//#endregion
//#region node_modules/@vue/shared/dist/shared.esm-bundler.js
/* @__NO_SIDE_EFFECTS__ */
function n(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var r = {}, i = [], a = () => {}, o = () => !1, s = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), c = (e) => e.startsWith("onUpdate:"), l = Object.assign, u = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, d = Object.prototype.hasOwnProperty, f = (e, t) => d.call(e, t), p = Array.isArray, m = (e) => C(e) === "[object Map]", h = (e) => C(e) === "[object Set]", g = (e) => C(e) === "[object Date]", _ = (e) => typeof e == "function", v = (e) => typeof e == "string", y = (e) => typeof e == "symbol", b = (e) => typeof e == "object" && !!e, x = (e) => (b(e) || _(e)) && _(e.then) && _(e.catch), S = Object.prototype.toString, C = (e) => S.call(e), w = (e) => C(e).slice(8, -1), T = (e) => C(e) === "[object Object]", E = (e) => v(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, D = /* @__PURE__ */ n(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), O = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, ee = /-\w/g, k = O((e) => e.replace(ee, (e) => e.slice(1).toUpperCase())), te = /\B([A-Z])/g, ne = O((e) => e.replace(te, "-$1").toLowerCase()), re = O((e) => e.charAt(0).toUpperCase() + e.slice(1)), ie = O((e) => e ? `on${re(e)}` : ""), A = (e, t) => !Object.is(e, t), j = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, ae = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, oe = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, se = (e) => {
	let t = v(e) ? Number(e) : NaN;
	return isNaN(t) ? e : t;
}, ce, le = () => ce ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function ue(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = v(r) ? me(r) : ue(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	} else if (v(e) || b(e)) return e;
}
var de = /;(?![^(]*\))/g, fe = /:([^]+)/, pe = /\/\*[^]*?\*\//g;
function me(e) {
	let t = {};
	return e.replace(pe, "").split(de).forEach((e) => {
		if (e) {
			let n = e.split(fe);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function M(e) {
	let t = "";
	if (v(e)) t = e;
	else if (p(e)) for (let n = 0; n < e.length; n++) {
		let r = M(e[n]);
		r && (t += r + " ");
	}
	else if (b(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var he = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ge = /* @__PURE__ */ n(he);
he + "";
function _e(e) {
	return !!e || e === "";
}
function ve(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = ye(e[r], t[r]);
	return n;
}
function ye(e, t) {
	if (e === t) return !0;
	let n = g(e), r = g(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = y(e), r = y(t), n || r) return e === t;
	if (n = p(e), r = p(t), n || r) return n && r ? ve(e, t) : !1;
	if (n = b(e), r = b(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !ye(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
function be(e, t) {
	return e.findIndex((e) => ye(e, t));
}
var xe = (e) => !!(e && e.__v_isRef === !0), N = (e) => v(e) ? e : e == null ? "" : p(e) || b(e) && (e.toString === S || !_(e.toString)) ? xe(e) ? N(e.value) : JSON.stringify(e, Se, 2) : String(e), Se = (e, t) => xe(t) ? Se(e, t.value) : m(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Ce(t, r) + " =>"] = n, e), {}) } : h(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Ce(e)) } : y(t) ? Ce(t) : b(t) && !p(t) && !T(t) ? String(t) : t, Ce = (e, t = "") => y(e) ? `Symbol(${e.description ?? t})` : e, P, we = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && P && (P.active ? (this.parent = P, this.index = (P.scopes ||= []).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = !0;
			let e, t;
			if (this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].pause();
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1;
			let e, t;
			if (this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].resume();
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = P;
			try {
				return P = this, e();
			} finally {
				P = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = P, P = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (P === this) P = this.prevScope;
			else {
				let e = P;
				for (; e;) {
					if (e.prevScope === this) {
						e.prevScope = this.prevScope;
						break;
					}
					e = e.prevScope;
				}
			}
			this.prevScope = void 0;
		}
	}
	stop(e) {
		if (this._active) {
			this._active = !1;
			let t, n;
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
};
function Te(e) {
	return new we(e);
}
function Ee() {
	return P;
}
function De(e, t = !1) {
	P && P.cleanups.push(e);
}
var F, Oe = /* @__PURE__ */ new WeakSet(), ke = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, P && (P.active ? P.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Oe.has(this) && (Oe.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ne(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, Ke(this), Ie(this);
		let e = F, t = He;
		F = this, He = !0;
		try {
			return this.fn();
		} finally {
			Le(this), F = e, He = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Be(e);
			this.deps = this.depsTail = void 0, Ke(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Oe.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Re(this) && this.run();
	}
	get dirty() {
		return Re(this);
	}
}, Ae = 0, je, Me;
function Ne(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Me, Me = e;
		return;
	}
	e.next = je, je = e;
}
function Pe() {
	Ae++;
}
function Fe() {
	if (--Ae > 0) return;
	if (Me) {
		let e = Me;
		for (Me = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; je;) {
		let t = je;
		for (je = void 0; t;) {
			let n = t.next;
			if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
				t.trigger();
			} catch (t) {
				e ||= t;
			}
			t = n;
		}
	}
	if (e) throw e;
}
function Ie(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Le(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Be(r), Ve(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Re(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (ze(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function ze(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === qe) || (e.globalVersion = qe, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Re(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = F, r = He;
	F = e, He = !0;
	try {
		Ie(e);
		let n = e.fn(e._value);
		(t.version === 0 || A(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		F = n, He = r, Le(e), e.flags &= -3;
	}
}
function Be(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Be(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ve(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var He = !0, Ue = [];
function We() {
	Ue.push(He), He = !1;
}
function Ge() {
	let e = Ue.pop();
	He = e === void 0 ? !0 : e;
}
function Ke(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = F;
		F = void 0;
		try {
			t();
		} finally {
			F = e;
		}
	}
}
var qe = 0, Je = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, Ye = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!F || !He || F === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== F) t = this.activeLink = new Je(F, this), F.deps ? (t.prevDep = F.depsTail, F.depsTail.nextDep = t, F.depsTail = t) : F.deps = F.depsTail = t, Xe(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = F.depsTail, t.nextDep = void 0, F.depsTail.nextDep = t, F.depsTail = t, F.deps === t && (F.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, qe++, this.notify(e);
	}
	notify(e) {
		Pe();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Fe();
		}
	}
};
function Xe(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) Xe(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var Ze = /* @__PURE__ */ new WeakMap(), Qe = /* @__PURE__ */ Symbol(""), $e = /* @__PURE__ */ Symbol(""), et = /* @__PURE__ */ Symbol("");
function tt(e, t, n) {
	if (He && F) {
		let t = Ze.get(e);
		t || Ze.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new Ye()), r.map = t, r.key = n), r.track();
	}
}
function nt(e, t, n, r, i, a) {
	let o = Ze.get(e);
	if (!o) {
		qe++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Pe(), t === "clear") o.forEach(s);
	else {
		let i = p(e), a = i && E(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === et || !y(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(et)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(Qe)), m(e) && s(o.get($e)));
				break;
			case "delete":
				i || (s(o.get(Qe)), m(e) && s(o.get($e)));
				break;
			case "set":
				m(e) && s(o.get(Qe));
				break;
		}
	}
	Fe();
}
function rt(e, t) {
	let n = Ze.get(e);
	return n && n.get(t);
}
function it(e) {
	let t = /* @__PURE__ */ I(e);
	return t === e ? t : (tt(t, "iterate", et), /* @__PURE__ */ Wt(e) ? t : t.map(qt));
}
function at(e) {
	return tt(e = /* @__PURE__ */ I(e), "iterate", et), e;
}
function ot(e, t) {
	return /* @__PURE__ */ Ut(e) ? Jt(/* @__PURE__ */ Ht(e) ? qt(t) : t) : qt(t);
}
var st = {
	__proto__: null,
	[Symbol.iterator]() {
		return ct(this, Symbol.iterator, (e) => ot(this, e));
	},
	concat(...e) {
		return it(this).concat(...e.map((e) => p(e) ? it(e) : e));
	},
	entries() {
		return ct(this, "entries", (e) => (e[1] = ot(this, e[1]), e));
	},
	every(e, t) {
		return ut(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return ut(this, "filter", e, t, (e) => e.map((e) => ot(this, e)), arguments);
	},
	find(e, t) {
		return ut(this, "find", e, t, (e) => ot(this, e), arguments);
	},
	findIndex(e, t) {
		return ut(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return ut(this, "findLast", e, t, (e) => ot(this, e), arguments);
	},
	findLastIndex(e, t) {
		return ut(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return ut(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return ft(this, "includes", e);
	},
	indexOf(...e) {
		return ft(this, "indexOf", e);
	},
	join(e) {
		return it(this).join(e);
	},
	lastIndexOf(...e) {
		return ft(this, "lastIndexOf", e);
	},
	map(e, t) {
		return ut(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return pt(this, "pop");
	},
	push(...e) {
		return pt(this, "push", e);
	},
	reduce(e, ...t) {
		return dt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return dt(this, "reduceRight", e, t);
	},
	shift() {
		return pt(this, "shift");
	},
	some(e, t) {
		return ut(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return pt(this, "splice", e);
	},
	toReversed() {
		return it(this).toReversed();
	},
	toSorted(e) {
		return it(this).toSorted(e);
	},
	toSpliced(...e) {
		return it(this).toSpliced(...e);
	},
	unshift(...e) {
		return pt(this, "unshift", e);
	},
	values() {
		return ct(this, "values", (e) => ot(this, e));
	}
};
function ct(e, t, n) {
	let r = at(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ Wt(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var lt = Array.prototype;
function ut(e, t, n, r, i, a) {
	let o = at(e), s = o !== e && !/* @__PURE__ */ Wt(e), c = o[t];
	if (c !== lt[t]) {
		let t = c.apply(e, a);
		return s ? qt(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, ot(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function dt(e, t, n, r) {
	let i = at(e), a = i !== e && !/* @__PURE__ */ Wt(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = ot(e, t)), n.call(this, t, ot(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? ot(e, c) : c;
}
function ft(e, t, n) {
	let r = /* @__PURE__ */ I(e);
	tt(r, "iterate", et);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Gt(n[0]) ? (n[0] = /* @__PURE__ */ I(n[0]), r[t](...n)) : i;
}
function pt(e, t, n = []) {
	We(), Pe();
	let r = (/* @__PURE__ */ I(e))[t].apply(e, n);
	return Fe(), Ge(), r;
}
var mt = /* @__PURE__ */ n("__proto__,__v_isRef,__isVue"), ht = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(y));
function gt(e) {
	y(e) || (e = String(e));
	let t = /* @__PURE__ */ I(this);
	return tt(t, "has", e), t.hasOwnProperty(e);
}
var _t = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Ft : Pt : i ? Nt : Mt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = p(e);
		if (!r) {
			let e;
			if (a && (e = st[t])) return e;
			if (t === "hasOwnProperty") return gt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ L(e) ? e : n);
		if ((y(t) ? ht.has(t) : mt(t)) || (r || tt(e, "get", t), i)) return o;
		if (/* @__PURE__ */ L(o)) {
			let e = a && E(t) ? o : o.value;
			return r && b(e) ? /* @__PURE__ */ Bt(e) : e;
		}
		return b(o) ? r ? /* @__PURE__ */ Bt(o) : /* @__PURE__ */ Rt(o) : o;
	}
}, vt = class extends _t {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = p(e) && E(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Ut(i);
			if (!/* @__PURE__ */ Wt(n) && !/* @__PURE__ */ Ut(n) && (i = /* @__PURE__ */ I(i), n = /* @__PURE__ */ I(n)), !a && /* @__PURE__ */ L(i) && !/* @__PURE__ */ L(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : f(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ L(e) ? e : r);
		return e === /* @__PURE__ */ I(r) && (o ? A(n, i) && nt(e, "set", t, n, i) : nt(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = f(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && nt(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!y(t) || !ht.has(t)) && tt(e, "has", t), n;
	}
	ownKeys(e) {
		return tt(e, "iterate", p(e) ? "length" : Qe), Reflect.ownKeys(e);
	}
}, yt = class extends _t {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, bt = /* @__PURE__ */ new vt(), xt = /* @__PURE__ */ new yt(), St = /* @__PURE__ */ new vt(!0), Ct = (e) => e, wt = (e) => Reflect.getPrototypeOf(e);
function Tt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ I(i), o = m(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, u = i[e](...r), d = n ? Ct : t ? Jt : qt;
		return !t && tt(a, "iterate", c ? $e : Qe), l(Object.create(u), { next() {
			let { value: e, done: t } = u.next();
			return t ? {
				value: e,
				done: t
			} : {
				value: s ? [d(e[0]), d(e[1])] : d(e),
				done: t
			};
		} });
	};
}
function Et(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Dt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ I(r), a = /* @__PURE__ */ I(n);
			e || (A(n, a) && tt(i, "get", n), tt(i, "get", a));
			let { has: o } = wt(i), s = t ? Ct : e ? Jt : qt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && tt(/* @__PURE__ */ I(t), "iterate", Qe), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ I(n), i = /* @__PURE__ */ I(t);
			return e || (A(t, i) && tt(r, "has", t), tt(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ I(a), s = t ? Ct : e ? Jt : qt;
			return !e && tt(o, "iterate", Qe), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return l(n, e ? {
		add: Et("add"),
		set: Et("set"),
		delete: Et("delete"),
		clear: Et("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ I(this), r = wt(n), i = /* @__PURE__ */ I(e), a = !t && !/* @__PURE__ */ Wt(e) && !/* @__PURE__ */ Ut(e) ? i : e;
			return r.has.call(n, a) || A(e, a) && r.has.call(n, e) || A(i, a) && r.has.call(n, i) || (n.add(a), nt(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ Wt(n) && !/* @__PURE__ */ Ut(n) && (n = /* @__PURE__ */ I(n));
			let r = /* @__PURE__ */ I(this), { has: i, get: a } = wt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ I(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? A(n, s) && nt(r, "set", e, n, s) : nt(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ I(this), { has: n, get: r } = wt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ I(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && nt(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ I(this), t = e.size !== 0, n = e.clear();
			return t && nt(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Tt(r, e, t);
	}), n;
}
function Ot(e, t) {
	let n = Dt(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(f(n, r) && r in t ? n : t, r, i);
}
var kt = { get: /* @__PURE__ */ Ot(!1, !1) }, At = { get: /* @__PURE__ */ Ot(!1, !0) }, jt = { get: /* @__PURE__ */ Ot(!0, !1) }, Mt = /* @__PURE__ */ new WeakMap(), Nt = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap(), Ft = /* @__PURE__ */ new WeakMap();
function It(e) {
	switch (e) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
function Lt(e) {
	return e.__v_skip || !Object.isExtensible(e) ? 0 : It(w(e));
}
/* @__NO_SIDE_EFFECTS__ */
function Rt(e) {
	return /* @__PURE__ */ Ut(e) ? e : Vt(e, !1, bt, kt, Mt);
}
/* @__NO_SIDE_EFFECTS__ */
function zt(e) {
	return Vt(e, !1, St, At, Nt);
}
/* @__NO_SIDE_EFFECTS__ */
function Bt(e) {
	return Vt(e, !0, xt, jt, Pt);
}
function Vt(e, t, n, r, i) {
	if (!b(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
	let a = Lt(e);
	if (a === 0) return e;
	let o = i.get(e);
	if (o) return o;
	let s = new Proxy(e, a === 2 ? r : n);
	return i.set(e, s), s;
}
/* @__NO_SIDE_EFFECTS__ */
function Ht(e) {
	return /* @__PURE__ */ Ut(e) ? /* @__PURE__ */ Ht(e.__v_raw) : !!(e && e.__v_isReactive);
}
/* @__NO_SIDE_EFFECTS__ */
function Ut(e) {
	return !!(e && e.__v_isReadonly);
}
/* @__NO_SIDE_EFFECTS__ */
function Wt(e) {
	return !!(e && e.__v_isShallow);
}
/* @__NO_SIDE_EFFECTS__ */
function Gt(e) {
	return e ? !!e.__v_raw : !1;
}
/* @__NO_SIDE_EFFECTS__ */
function I(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ I(t) : e;
}
function Kt(e) {
	return !f(e, "__v_skip") && Object.isExtensible(e) && ae(e, "__v_skip", !0), e;
}
var qt = (e) => b(e) ? /* @__PURE__ */ Rt(e) : e, Jt = (e) => b(e) ? /* @__PURE__ */ Bt(e) : e;
/* @__NO_SIDE_EFFECTS__ */
function L(e) {
	return e ? e.__v_isRef === !0 : !1;
}
/* @__NO_SIDE_EFFECTS__ */
function R(e) {
	return Yt(e, !1);
}
function Yt(e, t) {
	return /* @__PURE__ */ L(e) ? e : new Xt(e, t);
}
var Xt = class {
	constructor(e, t) {
		this.dep = new Ye(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ I(e), this._value = t ? e : qt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Wt(e) || /* @__PURE__ */ Ut(e);
		e = n ? e : /* @__PURE__ */ I(e), A(e, t) && (this._rawValue = e, this._value = n ? e : qt(e), this.dep.trigger());
	}
};
function z(e) {
	return /* @__PURE__ */ L(e) ? e.value : e;
}
var Zt = {
	get: (e, t, n) => t === "__v_raw" ? e : z(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ L(i) && !/* @__PURE__ */ L(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function Qt(e) {
	return /* @__PURE__ */ Ht(e) ? e : new Proxy(e, Zt);
}
/* @__NO_SIDE_EFFECTS__ */
function $t(e) {
	let t = p(e) ? Array(e.length) : {};
	for (let n in e) t[n] = rn(e, n);
	return t;
}
var en = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = y(t) ? t : String(t), this._raw = /* @__PURE__ */ I(e);
		let r = !0, i = e;
		if (!p(e) || y(this._key) || !E(this._key)) do
			r = !/* @__PURE__ */ Gt(i) || /* @__PURE__ */ Wt(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = z(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ L(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ L(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return rt(this._raw, this._key);
	}
}, tn = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
/* @__NO_SIDE_EFFECTS__ */
function nn(e, t, n) {
	return /* @__PURE__ */ L(e) ? e : _(e) ? new tn(e) : b(e) && arguments.length > 1 ? rn(e, t, n) : /* @__PURE__ */ R(e);
}
function rn(e, t, n) {
	return new en(e, t, n);
}
var an = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new Ye(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = qe - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && F !== this) return Ne(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return ze(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
/* @__NO_SIDE_EFFECTS__ */
function on(e, t, n = !1) {
	let r, i;
	return _(e) ? r = e : (r = e.get, i = e.set), new an(r, i, n);
}
var sn = {}, cn = /* @__PURE__ */ new WeakMap(), ln = void 0;
function un(e, t = !1, n = ln) {
	if (n) {
		let t = cn.get(n);
		t || cn.set(n, t = []), t.push(e);
	}
}
function dn(e, t, n = r) {
	let { immediate: i, deep: o, once: s, scheduler: c, augmentJob: l, call: d } = n, f = (e) => o ? e : /* @__PURE__ */ Wt(e) || o === !1 || o === 0 ? fn(e, 1) : fn(e), m, h, g, v, y = !1, b = !1;
	if (/* @__PURE__ */ L(e) ? (h = () => e.value, y = /* @__PURE__ */ Wt(e)) : /* @__PURE__ */ Ht(e) ? (h = () => f(e), y = !0) : p(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Ht(e) || /* @__PURE__ */ Wt(e)), h = () => e.map((e) => {
		if (/* @__PURE__ */ L(e)) return e.value;
		if (/* @__PURE__ */ Ht(e)) return f(e);
		if (_(e)) return d ? d(e, 2) : e();
	})) : h = _(e) ? t ? d ? () => d(e, 2) : e : () => {
		if (g) {
			We();
			try {
				g();
			} finally {
				Ge();
			}
		}
		let t = ln;
		ln = m;
		try {
			return d ? d(e, 3, [v]) : e(v);
		} finally {
			ln = t;
		}
	} : a, t && o) {
		let e = h, t = o === !0 ? Infinity : o;
		h = () => fn(e(), t);
	}
	let x = Ee(), S = () => {
		m.stop(), x && x.active && u(x.effects, m);
	};
	if (s && t) {
		let e = t;
		t = (...t) => {
			e(...t), S();
		};
	}
	let C = b ? Array(e.length).fill(sn) : sn, w = (e) => {
		if (!(!(m.flags & 1) || !m.dirty && !e)) if (t) {
			let e = m.run();
			if (o || y || (b ? e.some((e, t) => A(e, C[t])) : A(e, C))) {
				g && g();
				let n = ln;
				ln = m;
				try {
					let n = [
						e,
						C === sn ? void 0 : b && C[0] === sn ? [] : C,
						v
					];
					C = e, d ? d(t, 3, n) : t(...n);
				} finally {
					ln = n;
				}
			}
		} else m.run();
	};
	return l && l(w), m = new ke(h), m.scheduler = c ? () => c(w, !1) : w, v = (e) => un(e, !1, m), g = m.onStop = () => {
		let e = cn.get(m);
		if (e) {
			if (d) d(e, 4);
			else for (let t of e) t();
			cn.delete(m);
		}
	}, t ? i ? w(!0) : C = m.run() : c ? c(w.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function fn(e, t = Infinity, n) {
	if (t <= 0 || !b(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ L(e)) fn(e.value, t, n);
	else if (p(e)) for (let r = 0; r < e.length; r++) fn(e[r], t, n);
	else if (h(e) || m(e)) e.forEach((e) => {
		fn(e, t, n);
	});
	else if (T(e)) {
		for (let r in e) fn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && fn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function pn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		hn(e, t, n);
	}
}
function mn(e, t, n, r) {
	if (_(e)) {
		let i = pn(e, t, n, r);
		return i && x(i) && i.catch((e) => {
			hn(e, t, n);
		}), i;
	}
	if (p(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(mn(e[a], t, n, r));
		return i;
	}
}
function hn(e, t, n, i = !0) {
	let a = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || r;
	if (t) {
		let r = t.parent, i = t.proxy, a = `https://vuejs.org/error-reference/#runtime-${n}`;
		for (; r;) {
			let t = r.ec;
			if (t) {
				for (let n = 0; n < t.length; n++) if (t[n](e, i, a) === !1) return;
			}
			r = r.parent;
		}
		if (o) {
			We(), pn(o, null, 10, [
				e,
				i,
				a
			]), Ge();
			return;
		}
	}
	gn(e, n, a, i, s);
}
function gn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var _n = [], vn = -1, yn = [], bn = null, xn = 0, Sn = /* @__PURE__ */ Promise.resolve(), Cn = null;
function wn(e) {
	let t = Cn || Sn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function Tn(e) {
	let t = vn + 1, n = _n.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = _n[r], a = jn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function En(e) {
	if (!(e.flags & 1)) {
		let t = jn(e), n = _n[_n.length - 1];
		!n || !(e.flags & 2) && t >= jn(n) ? _n.push(e) : _n.splice(Tn(t), 0, e), e.flags |= 1, Dn();
	}
}
function Dn() {
	Cn ||= Sn.then(Mn);
}
function On(e) {
	p(e) ? yn.push(...e) : bn && e.id === -1 ? bn.splice(xn + 1, 0, e) : e.flags & 1 || (yn.push(e), e.flags |= 1), Dn();
}
function kn(e, t, n = vn + 1) {
	for (; n < _n.length; n++) {
		let t = _n[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			_n.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function An(e) {
	if (yn.length) {
		let e = [...new Set(yn)].sort((e, t) => jn(e) - jn(t));
		if (yn.length = 0, bn) {
			bn.push(...e);
			return;
		}
		for (bn = e, xn = 0; xn < bn.length; xn++) {
			let e = bn[xn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		bn = null, xn = 0;
	}
}
var jn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Mn(e) {
	try {
		for (vn = 0; vn < _n.length; vn++) {
			let e = _n[vn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), pn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; vn < _n.length; vn++) {
			let e = _n[vn];
			e && (e.flags &= -2);
		}
		vn = -1, _n.length = 0, An(e), Cn = null, (_n.length || yn.length) && Mn(e);
	}
}
var Nn = null, Pn = null;
function Fn(e) {
	let t = Nn;
	return Nn = e, Pn = e && e.type.__scopeId || null, t;
}
function In(e, t = Nn, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && ra(-1);
		let i = Fn(t), a;
		try {
			a = e(...n);
		} finally {
			Fn(i), r._d && ra(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function B(e, t) {
	if (Nn === null) return e;
	let n = Ra(Nn), i = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [a, o, s, c = r] = t[e];
		a && (_(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && fn(o), i.push({
			dir: a,
			instance: n,
			value: o,
			oldValue: void 0,
			arg: s,
			modifiers: c
		}));
	}
	return e;
}
function Ln(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (We(), mn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Ge());
	}
}
function Rn(e, t) {
	if (Sa) {
		let n = Sa.provides, r = Sa.parent && Sa.parent.provides;
		r === n && (n = Sa.provides = Object.create(r)), n[e] = t;
	}
}
function zn(e, t, n = !1) {
	let r = Ca();
	if (r || oi) {
		let i = oi ? oi._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && _(t) ? t.call(r && r.proxy) : t;
	}
}
function Bn() {
	return !!(Ca() || oi);
}
var Vn = /* @__PURE__ */ Symbol.for("v-scx"), Hn = () => zn(Vn);
function Un(e, t, n) {
	return Wn(e, t, n);
}
function Wn(e, t, n = r) {
	let { immediate: i, deep: o, flush: s, once: c } = n, u = l({}, n), d = t && i || !t && s !== "post", f;
	if (ka) {
		if (s === "sync") {
			let e = Hn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = a, e.resume = a, e.pause = a, e;
		}
	}
	let p = Sa;
	u.call = (e, t, n) => mn(e, p, t, n);
	let m = !1;
	s === "post" ? u.scheduler = (e) => {
		Ri(e, p && p.suspense);
	} : s !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : En(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = dn(e, t, u);
	return ka && (f ? f.push(h) : d && h()), h;
}
function Gn(e, t, n) {
	let r = this.proxy, i = v(e) ? e.includes(".") ? Kn(r, e) : () => r[e] : e.bind(r, r), a;
	_(t) ? a = t : (a = t.handler, n = t);
	let o = Ea(this), s = Wn(i, a.bind(r), n);
	return o(), s;
}
function Kn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var qn = /* @__PURE__ */ Symbol("_vte"), Jn = (e) => e.__isTeleport, Yn = /* @__PURE__ */ Symbol("_leaveCb"), Xn = /* @__PURE__ */ Symbol("_enterCb");
function Zn() {
	let e = {
		isMounted: !1,
		isLeaving: !1,
		isUnmounting: !1,
		leavingVNodes: /* @__PURE__ */ new Map()
	};
	return Tr(() => {
		e.isMounted = !0;
	}), Or(() => {
		e.isUnmounting = !0;
	}), e;
}
var Qn = [Function, Array], $n = {
	mode: String,
	appear: Boolean,
	persisted: Boolean,
	onBeforeEnter: Qn,
	onEnter: Qn,
	onAfterEnter: Qn,
	onEnterCancelled: Qn,
	onBeforeLeave: Qn,
	onLeave: Qn,
	onAfterLeave: Qn,
	onLeaveCancelled: Qn,
	onBeforeAppear: Qn,
	onAppear: Qn,
	onAfterAppear: Qn,
	onAppearCancelled: Qn
}, er = (e) => {
	let t = e.subTree;
	return t.component ? er(t.component) : t;
}, tr = {
	name: "BaseTransition",
	props: $n,
	setup(e, { slots: t }) {
		let n = Ca(), r = Zn();
		return () => {
			let i = t.default && lr(t.default(), !0), a = i && i.length ? nr(i) : n.subTree ? J() : void 0;
			if (!a) return;
			let o = /* @__PURE__ */ I(e), { mode: s } = o;
			if (r.isLeaving) return or(a);
			let c = sr(a);
			if (!c) return or(a);
			let l = ar(c, o, r, n, (e) => l = e);
			c.type !== U && cr(c, l);
			let u = n.subTree && sr(n.subTree);
			if (u && u.type !== U && !sa(u, c) && er(n).type !== U) {
				let e = ar(u, o, r, n);
				if (cr(u, e), s === "out-in" && c.type !== U) return r.isLeaving = !0, e.afterLeave = () => {
					r.isLeaving = !1, n.job.flags & 8 || n.update(), delete e.afterLeave, u = void 0;
				}, or(a);
				s === "in-out" && c.type !== U ? e.delayLeave = (e, t, n) => {
					let i = ir(r, u);
					i[String(u.key)] = u, e[Yn] = () => {
						t(), e[Yn] = void 0, delete l.delayedLeave, u = void 0;
					}, l.delayedLeave = () => {
						n(), delete l.delayedLeave, u = void 0;
					};
				} : u = void 0;
			} else u &&= void 0;
			return a;
		};
	}
};
function nr(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== U) {
			t = n;
			break;
		}
	}
	return t;
}
var rr = tr;
function ir(e, t) {
	let { leavingVNodes: n } = e, r = n.get(t.type);
	return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function ar(e, t, n, r, i) {
	let { appear: a, mode: o, persisted: s = !1, onBeforeEnter: c, onEnter: l, onAfterEnter: u, onEnterCancelled: d, onBeforeLeave: f, onLeave: m, onAfterLeave: h, onLeaveCancelled: g, onBeforeAppear: _, onAppear: v, onAfterAppear: y, onAppearCancelled: b } = t, x = String(e.key), S = ir(n, e), C = (e, t) => {
		e && mn(e, r, 9, t);
	}, w = (e, t) => {
		let n = t[1];
		C(e, t), p(e) ? e.every((e) => e.length <= 1) && n() : e.length <= 1 && n();
	}, T = {
		mode: o,
		persisted: s,
		beforeEnter(t) {
			let r = c;
			if (!n.isMounted) if (a) r = _ || c;
			else return;
			t[Yn] && t[Yn](!0);
			let i = S[x];
			i && sa(e, i) && i.el[Yn] && i.el[Yn](), C(r, [t]);
		},
		enter(t) {
			if (S[x] === e) return;
			let r = l, i = u, o = d;
			if (!n.isMounted) if (a) r = v || l, i = y || u, o = b || d;
			else return;
			let s = !1;
			t[Xn] = (e) => {
				s || (s = !0, C(e ? o : i, [t]), T.delayedLeave && T.delayedLeave(), t[Xn] = void 0);
			};
			let c = t[Xn].bind(null, !1);
			r ? w(r, [t, c]) : c();
		},
		leave(t, r) {
			let i = String(e.key);
			if (t[Xn] && t[Xn](!0), n.isUnmounting) return r();
			C(f, [t]);
			let a = !1;
			t[Yn] = (n) => {
				a || (a = !0, r(), C(n ? g : h, [t]), t[Yn] = void 0, S[i] === e && delete S[i]);
			};
			let o = t[Yn].bind(null, !1);
			S[i] = e, m ? w(m, [t, o]) : o();
		},
		clone(e) {
			let a = ar(e, t, n, r, i);
			return i && i(a), a;
		}
	};
	return T;
}
function or(e) {
	if (_r(e)) return e = fa(e), e.children = null, e;
}
function sr(e) {
	if (!_r(e)) return Jn(e.type) && e.children ? nr(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && _(n.default)) return n.default();
	}
}
function cr(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, cr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function lr(e, t = !1, n) {
	let r = [], i = 0;
	for (let a = 0; a < e.length; a++) {
		let o = e[a], s = n == null ? o.key : String(n) + String(o.key == null ? a : o.key);
		o.type === H ? (o.patchFlag & 128 && i++, r = r.concat(lr(o.children, t, s))) : (t || o.type !== U) && r.push(s == null ? o : fa(o, { key: s }));
	}
	if (i > 1) for (let e = 0; e < r.length; e++) r[e].patchFlag = -2;
	return r;
}
/* @__NO_SIDE_EFFECTS__ */
function ur(e, t) {
	return _(e) ? /* @__PURE__ */ l({ name: e.name }, t, { setup: e }) : e;
}
function dr(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function fr(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var pr = /* @__PURE__ */ new WeakMap();
function mr(e, t, n, i, a = !1) {
	if (p(e)) {
		e.forEach((e, r) => mr(e, t && (p(t) ? t[r] : t), n, i, a));
		return;
	}
	if (gr(i) && !a) {
		i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && mr(e, t, n, i.component.subTree);
		return;
	}
	let s = i.shapeFlag & 4 ? Ra(i.component) : i.el, c = a ? null : s, { i: l, r: d } = e, m = t && t.r, h = l.refs === r ? l.refs = {} : l.refs, g = l.setupState, y = /* @__PURE__ */ I(g), b = g === r ? o : (e) => fr(h, e) ? !1 : f(y, e), x = (e, t) => !(t && fr(h, t));
	if (m != null && m !== d) {
		if (hr(t), v(m)) h[m] = null, b(m) && (g[m] = null);
		else if (/* @__PURE__ */ L(m)) {
			let e = t;
			x(m, e.k) && (m.value = null), e.k && (h[e.k] = null);
		}
	}
	if (_(d)) pn(d, l, 12, [c, h]);
	else {
		let t = v(d), r = /* @__PURE__ */ L(d);
		if (t || r) {
			let i = () => {
				if (e.f) {
					let n = t ? b(d) ? g[d] : h[d] : x(d) || !e.k ? d.value : h[e.k];
					if (a) p(n) && u(n, s);
					else if (p(n)) n.includes(s) || n.push(s);
					else if (t) h[d] = [s], b(d) && (g[d] = h[d]);
					else {
						let t = [s];
						x(d, e.k) && (d.value = t), e.k && (h[e.k] = t);
					}
				} else t ? (h[d] = c, b(d) && (g[d] = c)) : r && (x(d, e.k) && (d.value = c), e.k && (h[e.k] = c));
			};
			if (c) {
				let t = () => {
					i(), pr.delete(e);
				};
				t.id = -1, pr.set(e, t), Ri(t, n);
			} else hr(e), i();
		}
	}
}
function hr(e) {
	let t = pr.get(e);
	t && (t.flags |= 8, pr.delete(e));
}
le().requestIdleCallback, le().cancelIdleCallback;
var gr = (e) => !!e.type.__asyncLoader, _r = (e) => e.type.__isKeepAlive;
function vr(e, t) {
	br(e, "a", t);
}
function yr(e, t) {
	br(e, "da", t);
}
function br(e, t, n = Sa) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (Sr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) _r(e.parent.vnode) && xr(r, t, n, e), e = e.parent;
	}
}
function xr(e, t, n, r) {
	let i = Sr(t, e, r, !0);
	kr(() => {
		u(r[t], i);
	}, n);
}
function Sr(e, t, n = Sa, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			We();
			let i = Ea(n), a = mn(t, n, e, r);
			return i(), Ge(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var Cr = (e) => (t, n = Sa) => {
	(!ka || e === "sp") && Sr(e, (...e) => t(...e), n);
}, wr = Cr("bm"), Tr = Cr("m"), Er = Cr("bu"), Dr = Cr("u"), Or = Cr("bum"), kr = Cr("um"), Ar = Cr("sp"), jr = Cr("rtg"), Mr = Cr("rtc");
function Nr(e, t = Sa) {
	Sr("ec", e, t);
}
var Pr = /* @__PURE__ */ Symbol.for("v-ndc");
function V(e, t, n, r) {
	let i, a = n && n[r], o = p(e);
	if (o || v(e)) {
		let n = o && /* @__PURE__ */ Ht(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ Wt(e), s = /* @__PURE__ */ Ut(e), e = at(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Jt(qt(e[n])) : qt(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		i = Array(e);
		for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
	} else if (b(e)) if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
	else {
		let n = Object.keys(e);
		i = Array(n.length);
		for (let r = 0, o = n.length; r < o; r++) {
			let o = n[r];
			i[r] = t(e[o], o, r, a && a[r]);
		}
	}
	else i = [];
	return n && (n[r] = i), i;
}
function Fr(e, t, n = {}, r, i) {
	if (Nn.ce || Nn.parent && gr(Nn.parent) && Nn.parent.ce) {
		let e = Object.keys(n).length > 0;
		return t !== "default" && (n.name = t), W(), aa(H, null, [q("slot", n, r && r())], e ? -2 : 64);
	}
	let a = e[t];
	a && a._c && (a._d = !1), W();
	let o = a && Ir(a(n)), s = n.key || o && o.key, c = aa(H, { key: (s && !y(s) ? s : `_${t}`) + (!o && r ? "_fb" : "") }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), a && a._c && (a._d = !0), c;
}
function Ir(e) {
	return e.some((e) => oa(e) ? !(e.type === U || e.type === H && !Ir(e.children)) : !0) ? e : null;
}
var Lr = (e) => e ? Oa(e) ? Ra(e) : Lr(e.parent) : null, Rr = /* @__PURE__ */ l(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Lr(e.parent),
	$root: (e) => Lr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => qr(e),
	$forceUpdate: (e) => e.f ||= () => {
		En(e.update);
	},
	$nextTick: (e) => e.n ||= wn.bind(e.proxy),
	$watch: (e) => Gn.bind(e)
}), zr = (e, t) => e !== r && !e.__isScriptSetup && f(e, t), Br = {
	get({ _: e }, t) {
		if (t === "__v_skip") return !0;
		let { ctx: n, setupState: i, data: a, props: o, accessCache: s, type: c, appContext: l } = e;
		if (t[0] !== "$") {
			let e = s[t];
			if (e !== void 0) switch (e) {
				case 1: return i[t];
				case 2: return a[t];
				case 4: return n[t];
				case 3: return o[t];
			}
			else if (zr(i, t)) return s[t] = 1, i[t];
			else if (a !== r && f(a, t)) return s[t] = 2, a[t];
			else if (f(o, t)) return s[t] = 3, o[t];
			else if (n !== r && f(n, t)) return s[t] = 4, n[t];
			else Hr && (s[t] = 0);
		}
		let u = Rr[t], d, p;
		if (u) return t === "$attrs" && tt(e.attrs, "get", ""), u(e);
		if ((d = c.__cssModules) && (d = d[t])) return d;
		if (n !== r && f(n, t)) return s[t] = 4, n[t];
		if (p = l.config.globalProperties, f(p, t)) return p[t];
	},
	set({ _: e }, t, n) {
		let { data: i, setupState: a, ctx: o } = e;
		return zr(a, t) ? (a[t] = n, !0) : i !== r && f(i, t) ? (i[t] = n, !0) : f(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(n[c] || e !== r && c[0] !== "$" && f(e, c) || zr(t, c) || f(o, c) || f(i, c) || f(Rr, c) || f(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? f(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Vr(e) {
	return p(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Hr = !0;
function Ur(e) {
	let t = qr(e), n = e.proxy, r = e.ctx;
	Hr = !1, t.beforeCreate && Gr(t.beforeCreate, e, "bc");
	let { data: i, computed: o, methods: s, watch: c, provide: l, inject: u, created: d, beforeMount: f, mounted: m, beforeUpdate: h, updated: g, activated: v, deactivated: y, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: w, render: T, renderTracked: E, renderTriggered: D, errorCaptured: O, serverPrefetch: ee, expose: k, inheritAttrs: te, components: ne, directives: re, filters: ie } = t;
	if (u && Wr(u, r, null), s) for (let e in s) {
		let t = s[e];
		_(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		b(t) && (e.data = /* @__PURE__ */ Rt(t));
	}
	if (Hr = !0, o) for (let e in o) {
		let t = o[e], i = Y({
			get: _(t) ? t.bind(n, n) : _(t.get) ? t.get.bind(n, n) : a,
			set: !_(t) && _(t.set) ? t.set.bind(n) : a
		});
		Object.defineProperty(r, e, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		});
	}
	if (c) for (let e in c) Kr(c[e], r, n, e);
	if (l) {
		let e = _(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Rn(t, e[t]);
		});
	}
	d && Gr(d, e, "c");
	function A(e, t) {
		p(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (A(wr, f), A(Tr, m), A(Er, h), A(Dr, g), A(vr, v), A(yr, y), A(Nr, O), A(Mr, E), A(jr, D), A(Or, S), A(kr, w), A(Ar, ee), p(k)) if (k.length) {
		let t = e.exposed ||= {};
		k.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	T && e.render === a && (e.render = T), te != null && (e.inheritAttrs = te), ne && (e.components = ne), re && (e.directives = re), ee && dr(e);
}
function Wr(e, t, n = a) {
	p(e) && (e = Qr(e));
	for (let n in e) {
		let r = e[n], i;
		i = b(r) ? "default" in r ? zn(r.from || n, r.default, !0) : zn(r.from || n) : zn(r), /* @__PURE__ */ L(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Gr(e, t, n) {
	mn(p(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Kr(e, t, n, r) {
	let i = r.includes(".") ? Kn(n, r) : () => n[r];
	if (v(e)) {
		let n = t[e];
		_(n) && Un(i, n);
	} else if (_(e)) Un(i, e.bind(n));
	else if (b(e)) if (p(e)) e.forEach((e) => Kr(e, t, n, r));
	else {
		let r = _(e.handler) ? e.handler.bind(n) : t[e.handler];
		_(r) && Un(i, r, e);
	}
}
function qr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Jr(c, e, o, !0)), Jr(c, t, o)), b(t) && a.set(t, c), c;
}
function Jr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Jr(e, a, n, !0), i && i.forEach((t) => Jr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Yr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Yr = {
	data: Xr,
	props: ti,
	emits: ti,
	methods: ei,
	computed: ei,
	beforeCreate: $r,
	created: $r,
	beforeMount: $r,
	mounted: $r,
	beforeUpdate: $r,
	updated: $r,
	beforeDestroy: $r,
	beforeUnmount: $r,
	destroyed: $r,
	unmounted: $r,
	activated: $r,
	deactivated: $r,
	errorCaptured: $r,
	serverPrefetch: $r,
	components: ei,
	directives: ei,
	watch: ni,
	provide: Xr,
	inject: Zr
};
function Xr(e, t) {
	return t ? e ? function() {
		return l(_(e) ? e.call(this, this) : e, _(t) ? t.call(this, this) : t);
	} : t : e;
}
function Zr(e, t) {
	return ei(Qr(e), Qr(t));
}
function Qr(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function $r(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function ei(e, t) {
	return e ? l(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ti(e, t) {
	return e ? p(e) && p(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : l(/* @__PURE__ */ Object.create(null), Vr(e), Vr(t ?? {})) : t;
}
function ni(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = l(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = $r(e[r], t[r]);
	return n;
}
function ri() {
	return {
		app: null,
		config: {
			isNativeTag: o,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var ii = 0;
function ai(e, t) {
	return function(n, r = null) {
		_(n) || (n = l({}, n)), r != null && !b(r) && (r = null);
		let i = ri(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: ii++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Va,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && _(e.install) ? (a.add(e), e.install(c, ...t)) : _(e) && (a.add(e), e(c, ...t))), c;
			},
			mixin(e) {
				return i.mixins.includes(e) || i.mixins.push(e), c;
			},
			component(e, t) {
				return t ? (i.components[e] = t, c) : i.components[e];
			},
			directive(e, t) {
				return t ? (i.directives[e] = t, c) : i.directives[e];
			},
			mount(a, o, l) {
				if (!s) {
					let u = c._ceVNode || q(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, Ra(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (mn(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = oi;
				oi = c;
				try {
					return e();
				} finally {
					oi = t;
				}
			}
		};
		return c;
	};
}
var oi = null, si = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${k(t)}Modifiers`] || e[`${ne(t)}Modifiers`];
function ci(e, t, ...n) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || r, a = n, o = t.startsWith("update:"), s = o && si(i, t.slice(7));
	s && (s.trim && (a = n.map((e) => v(e) ? e.trim() : e)), s.number && (a = n.map(oe)));
	let c, l = i[c = ie(t)] || i[c = ie(k(t))];
	!l && o && (l = i[c = ie(ne(t))]), l && mn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, mn(u, e, 6, a);
	}
}
var li = /* @__PURE__ */ new WeakMap();
function di(e, t, n = !1) {
	let r = n ? li : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!_(e)) {
		let r = (e) => {
			let n = di(e, t, !0);
			n && (s = !0, l(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (b(e) && r.set(e, null), null) : (p(a) ? a.forEach((e) => o[e] = null) : l(o, a), b(e) && r.set(e, o), o);
}
function fi(e, t) {
	return !e || !s(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), f(e, t[0].toLowerCase() + t.slice(1)) || f(e, ne(t)) || f(e, t));
}
function pi(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Fn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = ma(u.call(t, e, d, f, m, p, h)), y = s;
		} else {
			let e = t;
			v = ma(e.length > 1 ? e(f, {
				attrs: s,
				slots: o,
				emit: l
			}) : e(f, null)), y = t.props ? s : mi(s);
		}
	} catch (t) {
		$i.length = 0, hn(t, e, 1), v = q(U);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(c) && (y = hi(y, a)), b = fa(b, y, !1, !0));
	}
	return n.dirs && (b = fa(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && cr(b, n.transition), v = b, Fn(_), v;
}
var mi = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || s(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, hi = (e, t) => {
	let n = {};
	for (let r in e) (!c(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function gi(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? _i(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (vi(o, r, n) && !fi(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? _i(r, o, l) : !0 : !!o;
	return !1;
}
function _i(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (vi(t, e, a) && !fi(n, a)) return !0;
	}
	return !1;
}
function vi(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && b(r) && b(i) ? !ye(r, i) : r !== i;
}
function yi({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var bi = {}, xi = () => Object.create(bi), Si = (e) => Object.getPrototypeOf(e) === bi;
function Ci(e, t, n, r = !1) {
	let i = {}, a = xi();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), Ti(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ zt(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function wi(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ I(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (fi(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (f(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = k(o);
					i[t] = Ei(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		Ti(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !f(t, a) && ((r = ne(a)) === a || !f(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Ei(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !f(t, e)) && (delete a[e], l = !0);
	}
	l && nt(e.attrs, "set", "");
}
function Ti(e, t, n, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (t) for (let r in t) {
		if (D(r)) continue;
		let l = t[r], u;
		a && f(a, u = k(r)) ? !o || !o.includes(u) ? n[u] = l : (c ||= {})[u] = l : fi(e.emitsOptions, r) || (!(r in i) || l !== i[r]) && (i[r] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ I(n), i = c || r;
		for (let r = 0; r < o.length; r++) {
			let s = o[r];
			n[s] = Ei(a, t, s, i[s], e, !f(i, s));
		}
	}
	return s;
}
function Ei(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = f(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && _(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = Ea(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === ne(n)) && (r = !0));
	}
	return r;
}
var Di = /* @__PURE__ */ new WeakMap();
function Oi(e, t, n = !1) {
	let a = n ? Di : t.propsCache, o = a.get(e);
	if (o) return o;
	let s = e.props, c = {}, u = [], d = !1;
	if (!_(e)) {
		let r = (e) => {
			d = !0;
			let [n, r] = Oi(e, t, !0);
			l(c, n), r && u.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!s && !d) return b(e) && a.set(e, i), i;
	if (p(s)) for (let e = 0; e < s.length; e++) {
		let t = k(s[e]);
		ki(t) && (c[t] = r);
	}
	else if (s) for (let e in s) {
		let t = k(e);
		if (ki(t)) {
			let n = s[e], r = c[t] = p(n) || _(n) ? { type: n } : l({}, n), i = r.type, a = !1, o = !0;
			if (p(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = _(t) && t.name;
				if (n === "Boolean") {
					a = !0;
					break;
				} else n === "String" && (o = !1);
			}
			else a = _(i) && i.name === "Boolean";
			r[0] = a, r[1] = o, (a || f(r, "default")) && u.push(t);
		}
	}
	let m = [c, u];
	return b(e) && a.set(e, m), m;
}
function ki(e) {
	return e[0] !== "$" && !D(e);
}
var Ai = (e) => e === "_" || e === "_ctx" || e === "$stable", ji = (e) => p(e) ? e.map(ma) : [ma(e)], Mi = (e, t, n) => {
	if (t._n) return t;
	let r = In((...e) => ji(t(...e)), n);
	return r._c = !1, r;
}, Ni = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Ai(n)) continue;
		let i = e[n];
		if (_(i)) t[n] = Mi(n, i, r);
		else if (i != null) {
			let e = ji(i);
			t[n] = () => e;
		}
	}
}, Pi = (e, t) => {
	let n = ji(t);
	e.slots.default = () => n;
}, Fi = (e, t, n) => {
	for (let r in t) (n || !Ai(r)) && (e[r] = t[r]);
}, Ii = (e, t, n) => {
	let r = e.slots = xi();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Fi(r, t, n), n && ae(r, "_", e, !0)) : Ni(t, r);
	} else t && Pi(e, t);
}, Li = (e, t, n) => {
	let { vnode: i, slots: a } = e, o = !0, s = r;
	if (i.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? o = !1 : Fi(a, t, n) : (o = !t.$stable, Ni(t, a)), s = t;
	} else t && (Pi(e, t), s = { default: 1 });
	if (o) for (let e in a) !Ai(e) && s[e] == null && delete a[e];
}, Ri = Xi;
function zi(e) {
	return Bi(e);
}
function Bi(e, t) {
	let n = le();
	n.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = a, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !sa(e, t) && (r = ge(e), fe(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case Zi:
				y(e, t, n, r);
				break;
			case U:
				b(e, t, n, r);
				break;
			case Qi:
				e ?? x(t, n, r, o);
				break;
			case H:
				ne(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? re(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, ye);
		}
		u != null && i ? mr(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && mr(e.ref, null, a, e, !0);
	}, y = (e, t, n, r) => {
		if (e == null) o(t.el = u(t.children), n, r);
		else {
			let n = t.el = e.el;
			t.children !== e.children && f(n, t.children);
		}
	}, b = (e, t, n, r) => {
		e == null ? o(t.el = d(t.children || ""), n, r) : t.el = e.el;
	}, x = (e, t, n, r) => {
		[e.el, e.anchor] = _(e.children, t, n, r, e.el, e.anchor);
	}, S = ({ el: e, anchor: t }, n, r) => {
		let i;
		for (; e && e !== t;) i = h(e), o(e, n, r), e = i;
		o(t, n, r);
	}, C = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, w = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) T(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), ee(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, T = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && O(e.children, d, null, r, i, Vi(e, a), s, u), _ && Ln(e, null, r, "created"), E(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !D(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && va(f, r, e);
		}
		_ && Ln(e, null, r, "beforeMount");
		let v = Ui(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Ri(() => {
			try {
				f && va(f, r, e), v && g.enter(d), _ && Ln(e, null, r, "mounted");
			} finally {}
		}, i);
	}, E = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Yi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				E(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, O = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? ha(e[l]) : ma(e[l]), t, n, r, i, a, o, s);
	}, ee = (e, t, n, i, a, o, s) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || r, h = t.props || r, g;
		if (n && Hi(n, !1), (g = h.onVnodeBeforeUpdate) && va(g, n, t, e), f && Ln(t, e, n, "beforeUpdate"), n && Hi(n, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? k(e.dynamicChildren, d, l, n, i, Vi(t, a), o) : s || se(e, t, l, null, n, i, Vi(t, a), o, !1), u > 0) {
			if (u & 16) te(l, m, h, n, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let r = e[t], i = m[r], o = h[r];
					(o !== i || r === "value") && c(l, r, i, o, a, n);
				}
			}
			u & 1 && e.children !== t.children && p(l, t.children);
		} else !s && d == null && te(l, m, h, n, a);
		((g = h.onVnodeUpdated) || f) && Ri(() => {
			g && va(g, n, t, e), f && Ln(t, e, n, "updated");
		}, i);
	}, k = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === H || !sa(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
		}
	}, te = (e, t, n, i, a) => {
		if (t !== n) {
			if (t !== r) for (let r in t) !D(r) && !(r in n) && c(e, r, t[r], null, a, i);
			for (let r in n) {
				if (D(r)) continue;
				let o = n[r], s = t[r];
				o !== s && r !== "value" && c(e, r, s, o, a, i);
			}
			"value" in n && c(e, "value", t.value, n.value, a);
		}
	}, ne = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), O(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (k(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Wi(e, t, !0)) : se(e, t, n, f, i, a, s, c, l);
	}, re = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ie(t, n, r, i, a, o, c) : A(e, t, c);
	}, ie = (e, t, n, r, i, a, o) => {
		let s = e.component = xa(e, r, i);
		if (_r(e) && (s.ctx.renderer = ye), Aa(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ae, o), !e.el) {
				let r = s.subTree = q(U);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else ae(s, e, t, n, i, a, o);
	}, A = (e, t, n) => {
		let r = t.component = e.component;
		if (gi(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			oe(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, ae = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Ki(e);
					if (n) {
						t && (t.el = c.el, oe(e, t, o)), n.asyncDep.then(() => {
							Ri(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Hi(e, !1), t ? (t.el = c.el, oe(e, t, o)) : t = c, n && j(n), (d = t.props && t.props.onVnodeBeforeUpdate) && va(d, s, t, c), Hi(e, !0);
				let f = pi(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), ge(p), e, i, a), t.el = f.el, u === null && yi(e, f.el), r && Ri(r, i), (d = t.props && t.props.onVnodeUpdated) && Ri(() => va(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = gr(t);
				if (Hi(e, !1), l && j(l), !m && (o = c && c.onVnodeBeforeMount) && va(o, d, t), Hi(e, !0), s && xe) {
					let t = () => {
						e.subTree = pi(e), xe(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = pi(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Ri(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Ri(() => va(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && gr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Ri(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new ke(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => En(u), Hi(e, !0), l();
	}, oe = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, wi(e, t.props, r, n), Li(e, t.children, n), We(), kn(e), Ge();
	}, se = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				ue(l, d, n, r, i, a, o, s, c);
				return;
			} else if (f & 256) {
				ce(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && he(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? ue(l, d, n, r, i, a, o, s, c) : he(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && O(d, n, r, i, a, o, s, c));
	}, ce = (e, t, n, r, a, o, s, c, l) => {
		e ||= i, t ||= i;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let r = t[p] = l ? ha(t[p]) : ma(t[p]);
			v(e[p], r, n, null, a, o, s, c, l);
		}
		u > d ? he(e, a, o, !0, !1, f) : O(t, n, r, a, o, s, c, l, f);
	}, ue = (e, t, n, r, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], i = t[u] = l ? ha(t[u]) : ma(t[u]);
			if (sa(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], i = t[p] = l ? ha(t[p]) : ma(t[p]);
			if (sa(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, i = e < d ? t[e].el : r;
				for (; u <= p;) v(null, t[u] = l ? ha(t[u]) : ma(t[u]), n, i, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) fe(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? ha(t[u]) : ma(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let r = e[u];
				if (y >= b) {
					fe(r, a, o, !0);
					continue;
				}
				let i;
				if (r.key != null) i = g.get(r.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && sa(r, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? fe(r, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(r, t[i], n, null, a, o, s, c, l), y++);
			}
			let w = x ? Gi(C) : i;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, i = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Ji(f) : r;
				C[u] === 0 ? v(null, i, n, p, a, o, s, c, l) : x && (_ < 0 || u !== w[_] ? de(i, n, p, 2) : _--);
			}
		}
	}, de = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			de(e.component.subTree, t, n, r);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, r);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, ye);
			return;
		}
		if (c === H) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) de(u[e], t, n, r);
			o(e.anchor, t, n);
			return;
		}
		if (c === Qi) {
			S(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) if (r === 0) l.beforeEnter(a), o(a, t, n), Ri(() => l.enter(a), i);
		else {
			let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? s(a) : o(a, t, n);
			}, d = () => {
				a._isLeaving && a[Yn](!0), r(a, () => {
					u(), c && c();
				});
			};
			i ? i(a, u, d) : d();
		}
		else o(a, t, n);
	}, fe = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (We(), mr(s, null, n, e, !0), Ge()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !gr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && va(_, t, e), u & 6) M(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Ln(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, ye, r) : l && !l.hasOnce && (a !== H || d > 0 && d & 64) ? he(l, t, n, !1, !0) : (a === H && d & 384 || !i && u & 16) && he(c, t, n), r && pe(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Ri(() => {
			_ && va(_, t, e), h && Ln(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, pe = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === H) {
			me(n, r);
			return;
		}
		if (t === Qi) {
			C(e);
			return;
		}
		let a = () => {
			s(n), i && !i.persisted && i.afterLeave && i.afterLeave();
		};
		if (e.shapeFlag & 1 && i && !i.persisted) {
			let { leave: t, delayLeave: r } = i, o = () => t(n, a);
			r ? r(e.el, a, o) : o();
		} else a();
	}, me = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, M = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		qi(c), qi(l), r && j(r), i.stop(), a && (a.flags |= 8, fe(o, e, t, n)), s && Ri(s, t), Ri(() => {
			e.isUnmounted = !0;
		}, t);
	}, he = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) fe(e[o], t, n, r, i);
	}, ge = (e) => {
		if (e.shapeFlag & 6) return ge(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[qn];
		return n ? h(n) : t;
	}, _e = !1, ve = (e, t, n) => {
		let r;
		e == null ? t._vnode && (fe(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, _e ||= (_e = !0, kn(r), An(), !1);
	}, ye = {
		p: v,
		um: fe,
		m: de,
		r: pe,
		mt: ie,
		mc: O,
		pc: se,
		pbc: k,
		n: ge,
		o: e
	}, be, xe;
	return t && ([be, xe] = t(ye)), {
		render: ve,
		hydrate: be,
		createApp: ai(ve, be)
	};
}
function Vi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Hi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ui(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Wi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (p(r) && p(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = ha(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Wi(t, a)), a.type === Zi && (a.patchFlag === -1 && (a = i[e] = ha(a)), a.el = t.el), a.type === U && !a.el && (a.el = t.el);
	}
}
function Gi(e) {
	let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
	for (r = 0; r < c; r++) {
		let c = e[r];
		if (c !== 0) {
			if (i = n[n.length - 1], e[i] < c) {
				t[r] = i, n.push(r);
				continue;
			}
			for (a = 0, o = n.length - 1; a < o;) s = a + o >> 1, e[n[s]] < c ? a = s + 1 : o = s;
			c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
		}
	}
	for (a = n.length, o = n[a - 1]; a-- > 0;) n[a] = o, o = t[o];
	return n;
}
function Ki(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Ki(t);
}
function qi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Ji(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? Ji(t.subTree) : null;
}
var Yi = (e) => e.__isSuspense;
function Xi(e, t) {
	t && t.pendingBranch ? p(e) ? t.effects.push(...e) : t.effects.push(e) : On(e);
}
var H = /* @__PURE__ */ Symbol.for("v-fgt"), Zi = /* @__PURE__ */ Symbol.for("v-txt"), U = /* @__PURE__ */ Symbol.for("v-cmt"), Qi = /* @__PURE__ */ Symbol.for("v-stc"), $i = [], ea = null;
function W(e = !1) {
	$i.push(ea = e ? null : []);
}
function ta() {
	$i.pop(), ea = $i[$i.length - 1] || null;
}
var na = 1;
function ra(e, t = !1) {
	na += e, e < 0 && ea && t && (ea.hasOnce = !0);
}
function ia(e) {
	return e.dynamicChildren = na > 0 ? ea || i : null, ta(), na > 0 && ea && ea.push(e), e;
}
function G(e, t, n, r, i, a) {
	return ia(K(e, t, n, r, i, a, !0));
}
function aa(e, t, n, r, i) {
	return ia(q(e, t, n, r, i, !0));
}
function oa(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function sa(e, t) {
	return e.type === t.type && e.key === t.key;
}
var ca = ({ key: e }) => e ?? null, la = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : v(e) || /* @__PURE__ */ L(e) || _(e) ? {
	i: Nn,
	r: e,
	k: t,
	f: !!n
} : e);
function K(e, t = null, n = null, r = 0, i = null, a = e === H ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && ca(t),
		ref: t && la(t),
		scopeId: Pn,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: a,
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null,
		ctx: Nn
	};
	return s ? (ga(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= v(n) ? 8 : 16), na > 0 && !o && ea && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && ea.push(c), c;
}
var q = ua;
function ua(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === Pr) && (e = U), oa(e)) {
		let r = fa(e, t, !0);
		return n && ga(r, n), na > 0 && !a && ea && (r.shapeFlag & 6 ? ea[ea.indexOf(e)] = r : ea.push(r)), r.patchFlag = -2, r;
	}
	if (za(e) && (e = e.__vccOpts), t) {
		t = da(t);
		let { class: e, style: n } = t;
		e && !v(e) && (t.class = M(e)), b(n) && (/* @__PURE__ */ Gt(n) && !p(n) && (n = l({}, n)), t.style = ue(n));
	}
	let o = v(e) ? 1 : Yi(e) ? 128 : Jn(e) ? 64 : b(e) ? 4 : _(e) ? 2 : 0;
	return K(e, t, n, r, i, o, a, !0);
}
function da(e) {
	return e ? /* @__PURE__ */ Gt(e) || Si(e) ? l({}, e) : e : null;
}
function fa(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? _a(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && ca(l),
		ref: t && t.ref ? n && a ? p(a) ? a.concat(la(t)) : [a, la(t)] : la(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== H ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && fa(e.ssContent),
		ssFallback: e.ssFallback && fa(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && cr(u, c.clone(u)), u;
}
function pa(e = " ", t = 0) {
	return q(Zi, null, e, t);
}
function J(e = "", t = !1) {
	return t ? (W(), aa(U, null, e)) : q(U, null, e);
}
function ma(e) {
	return e == null || typeof e == "boolean" ? q(U) : p(e) ? q(H, null, e.slice()) : oa(e) ? ha(e) : q(Zi, null, String(e));
}
function ha(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : fa(e);
}
function ga(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (p(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), ga(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !Si(t) ? t._ctx = Nn : r === 3 && Nn && (Nn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else _(t) ? (t = {
		default: t,
		_ctx: Nn
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [pa(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function _a(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = M([t.class, r.class]));
		else if (e === "style") t.style = ue([t.style, r.style]);
		else if (s(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(p(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !c(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function va(e, t, n, r = null) {
	mn(e, t, 7, [n, r]);
}
var ya = ri(), ba = 0;
function xa(e, t, n) {
	let i = e.type, a = (t ? t.appContext : e.appContext) || ya, o = {
		uid: ba++,
		vnode: e,
		type: i,
		parent: t,
		appContext: a,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new we(!0),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: t ? t.provides : Object.create(a.provides),
		ids: t ? t.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: Oi(i, a),
		emitsOptions: di(i, a),
		emit: null,
		emitted: null,
		propsDefaults: r,
		inheritAttrs: i.inheritAttrs,
		ctx: r,
		data: r,
		props: r,
		attrs: r,
		slots: r,
		refs: r,
		setupState: r,
		setupContext: null,
		suspense: n,
		suspenseId: n ? n.pendingId : 0,
		asyncDep: null,
		asyncResolved: !1,
		isMounted: !1,
		isUnmounted: !1,
		isDeactivated: !1,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = ci.bind(null, o), e.ce && e.ce(o), o;
}
var Sa = null, Ca = () => Sa || Nn, wa, Ta;
{
	let e = le(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	wa = t("__VUE_INSTANCE_SETTERS__", (e) => Sa = e), Ta = t("__VUE_SSR_SETTERS__", (e) => ka = e);
}
var Ea = (e) => {
	let t = Sa;
	return wa(e), e.scope.on(), () => {
		e.scope.off(), wa(t);
	};
}, Da = () => {
	Sa && Sa.scope.off(), wa(null);
};
function Oa(e) {
	return e.vnode.shapeFlag & 4;
}
var ka = !1;
function Aa(e, t = !1, n = !1) {
	t && Ta(t);
	let { props: r, children: i } = e.vnode, a = Oa(e);
	Ci(e, r, a, t), Ii(e, i, n || t);
	let o = a ? ja(e, t) : void 0;
	return t && Ta(!1), o;
}
function ja(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Br);
	let { setup: r } = n;
	if (r) {
		We();
		let n = e.setupContext = r.length > 1 ? La(e) : null, i = Ea(e), a = pn(r, e, 0, [e.props, n]), o = x(a);
		if (Ge(), i(), (o || e.sp) && !gr(e) && dr(e), o) {
			if (a.then(Da, Da), t) return a.then((n) => {
				Ma(e, n, t);
			}).catch((t) => {
				hn(t, e, 0);
			});
			e.asyncDep = a;
		} else Ma(e, a, t);
	} else Fa(e, t);
}
function Ma(e, t, n) {
	_(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : b(t) && (e.setupState = Qt(t)), Fa(e, n);
}
var Na, Pa;
function Fa(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && Na && !r.render) {
			let t = r.template || qr(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r;
				r.render = Na(t, l(l({
					isCustomElement: n,
					delimiters: a
				}, i), o));
			}
		}
		e.render = r.render || a, Pa && Pa(e);
	}
	{
		let t = Ea(e);
		We();
		try {
			Ur(e);
		} finally {
			Ge(), t();
		}
	}
}
var Ia = { get(e, t) {
	return tt(e, "get", ""), e[t];
} };
function La(e) {
	return {
		attrs: new Proxy(e.attrs, Ia),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Ra(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(Qt(Kt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Rr) return Rr[n](e);
		},
		has(e, t) {
			return t in e || t in Rr;
		}
	}) : e.proxy;
}
function za(e) {
	return _(e) && "__vccOpts" in e;
}
var Y = (e, t) => /* @__PURE__ */ on(e, t, ka);
function Ba(e, t, n) {
	try {
		ra(-1);
		let r = arguments.length;
		return r === 2 ? b(t) && !p(t) ? oa(t) ? q(e, null, [t]) : q(e, t) : q(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && oa(n) && (n = [n]), q(e, t, n));
	} finally {
		ra(1);
	}
}
var Va = "3.5.34", Ha = void 0, Ua = typeof window < "u" && window.trustedTypes;
if (Ua) try {
	Ha = /* @__PURE__ */ Ua.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Wa = Ha ? (e) => Ha.createHTML(e) : (e) => e, Ga = "http://www.w3.org/2000/svg", Ka = "http://www.w3.org/1998/Math/MathML", qa = typeof document < "u" ? document : null, Ja = qa && /* @__PURE__ */ qa.createElement("template"), Ya = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? qa.createElementNS(Ga, e) : t === "mathml" ? qa.createElementNS(Ka, e) : n ? qa.createElement(e, { is: n }) : qa.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => qa.createTextNode(e),
	createComment: (e) => qa.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => qa.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			Ja.innerHTML = Wa(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Ja.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Xa = "transition", Za = "animation", Qa = /* @__PURE__ */ Symbol("_vtc"), $a = {
	name: String,
	type: String,
	css: {
		type: Boolean,
		default: !0
	},
	duration: [
		String,
		Number,
		Object
	],
	enterFromClass: String,
	enterActiveClass: String,
	enterToClass: String,
	appearFromClass: String,
	appearActiveClass: String,
	appearToClass: String,
	leaveFromClass: String,
	leaveActiveClass: String,
	leaveToClass: String
}, eo = /* @__PURE__ */ l({}, $n, $a), to = /* @__PURE__ */ ((e) => (e.displayName = "Transition", e.props = eo, e))((e, { slots: t }) => Ba(rr, io(e), t)), no = (e, t = []) => {
	p(e) ? e.forEach((e) => e(...t)) : e && e(...t);
}, ro = (e) => e ? p(e) ? e.some((e) => e.length > 1) : e.length > 1 : !1;
function io(e) {
	let t = {};
	for (let n in e) n in $a || (t[n] = e[n]);
	if (e.css === !1) return t;
	let { name: n = "v", type: r, duration: i, enterFromClass: a = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: s = `${n}-enter-to`, appearFromClass: c = a, appearActiveClass: u = o, appearToClass: d = s, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: p = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, h = ao(i), g = h && h[0], _ = h && h[1], { onBeforeEnter: v, onEnter: y, onEnterCancelled: b, onLeave: x, onLeaveCancelled: S, onBeforeAppear: C = v, onAppear: w = y, onAppearCancelled: T = b } = t, E = (e, t, n, r) => {
		e._enterCancelled = r, co(e, t ? d : s), co(e, t ? u : o), n && n();
	}, D = (e, t) => {
		e._isLeaving = !1, co(e, f), co(e, m), co(e, p), t && t();
	}, O = (e) => (t, n) => {
		let i = e ? w : y, o = () => E(t, e, n);
		no(i, [t, o]), lo(() => {
			co(t, e ? c : a), so(t, e ? d : s), ro(i) || fo(t, r, g, o);
		});
	};
	return l(t, {
		onBeforeEnter(e) {
			no(v, [e]), so(e, a), so(e, o);
		},
		onBeforeAppear(e) {
			no(C, [e]), so(e, c), so(e, u);
		},
		onEnter: O(!1),
		onAppear: O(!0),
		onLeave(e, t) {
			e._isLeaving = !0;
			let n = () => D(e, t);
			so(e, f), e._enterCancelled ? (so(e, p), go(e)) : (go(e), so(e, p)), lo(() => {
				e._isLeaving && (co(e, f), so(e, m), ro(x) || fo(e, r, _, n));
			}), no(x, [e, n]);
		},
		onEnterCancelled(e) {
			E(e, !1, void 0, !0), no(b, [e]);
		},
		onAppearCancelled(e) {
			E(e, !0, void 0, !0), no(T, [e]);
		},
		onLeaveCancelled(e) {
			D(e), no(S, [e]);
		}
	});
}
function ao(e) {
	if (e == null) return null;
	if (b(e)) return [oo(e.enter), oo(e.leave)];
	{
		let t = oo(e);
		return [t, t];
	}
}
function oo(e) {
	return se(e);
}
function so(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e[Qa] || (e[Qa] = /* @__PURE__ */ new Set())).add(t);
}
function co(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
	let n = e[Qa];
	n && (n.delete(t), n.size || (e[Qa] = void 0));
}
function lo(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
var uo = 0;
function fo(e, t, n, r) {
	let i = e._endId = ++uo, a = () => {
		i === e._endId && r();
	};
	if (n != null) return setTimeout(a, n);
	let { type: o, timeout: s, propCount: c } = po(e, t);
	if (!o) return r();
	let l = o + "end", u = 0, d = () => {
		e.removeEventListener(l, f), a();
	}, f = (t) => {
		t.target === e && ++u >= c && d();
	};
	setTimeout(() => {
		u < c && d();
	}, s + 1), e.addEventListener(l, f);
}
function po(e, t) {
	let n = window.getComputedStyle(e), r = (e) => (n[e] || "").split(", "), i = r(`${Xa}Delay`), a = r(`${Xa}Duration`), o = mo(i, a), s = r(`${Za}Delay`), c = r(`${Za}Duration`), l = mo(s, c), u = null, d = 0, f = 0;
	t === Xa ? o > 0 && (u = Xa, d = o, f = a.length) : t === Za ? l > 0 && (u = Za, d = l, f = c.length) : (d = Math.max(o, l), u = d > 0 ? o > l ? Xa : Za : null, f = u ? u === Xa ? a.length : c.length : 0);
	let p = u === Xa && /\b(?:transform|all)(?:,|$)/.test(r(`${Xa}Property`).toString());
	return {
		type: u,
		timeout: d,
		propCount: f,
		hasTransform: p
	};
}
function mo(e, t) {
	for (; e.length < t.length;) e = e.concat(e);
	return Math.max(...t.map((t, n) => ho(t) + ho(e[n])));
}
function ho(e) {
	return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function go(e) {
	return (e ? e.ownerDocument : document).body.offsetHeight;
}
function _o(e, t, n) {
	let r = e[Qa];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var vo = /* @__PURE__ */ Symbol("_vod"), yo = /* @__PURE__ */ Symbol("_vsh"), bo = /* @__PURE__ */ Symbol(""), xo = /(?:^|;)\s*display\s*:/;
function So(e, t, n) {
	let r = e.style, i = v(n), a = !1;
	if (n && !i) {
		if (t) if (v(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? wo(r, t, "");
		}
		else for (let e in t) n[e] ?? wo(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? wo(r, i, "") : Oo(e, i, !v(t) && t ? t[i] : void 0, o) || wo(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[bo];
			e && (n += ";" + e), r.cssText = n, a = xo.test(n);
		}
	} else t && e.removeAttribute("style");
	vo in e && (e[vo] = a ? r.display : "", e[yo] && (r.display = "none"));
}
var Co = /\s*!important$/;
function wo(e, t, n) {
	if (p(n)) n.forEach((n) => wo(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = Do(e, t);
		Co.test(n) ? e.setProperty(ne(r), n.replace(Co, ""), "important") : e[r] = n;
	}
}
var To = [
	"Webkit",
	"Moz",
	"ms"
], Eo = {};
function Do(e, t) {
	let n = Eo[t];
	if (n) return n;
	let r = k(t);
	if (r !== "filter" && r in e) return Eo[t] = r;
	r = re(r);
	for (let n = 0; n < To.length; n++) {
		let i = To[n] + r;
		if (i in e) return Eo[t] = i;
	}
	return t;
}
function Oo(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && v(r) && n === r;
}
var ko = "http://www.w3.org/1999/xlink";
function Ao(e, t, n, r, i, a = ge(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ko, t.slice(6, t.length)) : e.setAttributeNS(ko, t, n) : n == null || a && !_e(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : y(n) ? String(n) : n);
}
function jo(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Wa(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		(r !== i || !("_value" in e)) && (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = _e(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function Mo(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function No(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Po = /* @__PURE__ */ Symbol("_vei");
function Fo(e, t, n, r, i = null) {
	let a = e[Po] || (e[Po] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Lo(t);
		r ? Mo(e, n, a[t] = Vo(r, i), s) : o && (No(e, n, o, s), a[t] = void 0);
	}
}
var Io = /(?:Once|Passive|Capture)$/;
function Lo(e) {
	let t;
	if (Io.test(e)) {
		t = {};
		let n;
		for (; n = e.match(Io);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : ne(e.slice(2)), t];
}
var Ro = 0, zo = /* @__PURE__ */ Promise.resolve(), Bo = () => Ro ||= (zo.then(() => Ro = 0), Date.now());
function Vo(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		mn(Ho(e, n.value), t, 5, [e]);
	};
	return n.value = e, n.attached = Bo(), n;
}
function Ho(e, t) {
	if (p(t)) {
		let n = e.stopImmediatePropagation;
		return e.stopImmediatePropagation = () => {
			n.call(e), e._stopped = !0;
		}, t.map((e) => (t) => !t._stopped && e && e(t));
	} else return t;
}
var Uo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Wo = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? _o(e, r, o) : t === "style" ? So(e, n, r) : s(t) ? c(t) || Fo(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Go(e, t, r, o)) ? (jo(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ao(e, t, r, o, a, t !== "value")) : e._isVueCE && (Ko(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !v(r))) ? jo(e, k(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ao(e, t, r, o));
};
function Go(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Uo(t) && _(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Uo(t) && v(n) ? !1 : t in e;
}
function Ko(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = k(t);
	return Array.isArray(n) ? n.some((e) => k(e) === r) : Object.keys(n).some((e) => k(e) === r);
}
var qo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return p(t) ? (e) => j(t, e) : t;
};
function Jo(e) {
	e.target.composing = !0;
}
function Yo(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var Xo = /* @__PURE__ */ Symbol("_assign");
function Zo(e, t, n) {
	return t && (e = e.trim()), n && (e = oe(e)), e;
}
var Qo = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[Xo] = qo(i);
		let a = r || i.props && i.props.type === "number";
		Mo(e, t ? "change" : "input", (t) => {
			t.target.composing || e[Xo](Zo(e.value, n, a));
		}), (n || a) && Mo(e, "change", () => {
			e.value = Zo(e.value, n, a);
		}), t || (Mo(e, "compositionstart", Jo), Mo(e, "compositionend", Yo), Mo(e, "change", Yo));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[Xo] = qo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? oe(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, $o = {
	deep: !0,
	created(e, t, n) {
		e[Xo] = qo(n), Mo(e, "change", () => {
			let t = e._modelValue, n = rs(e), r = e.checked, i = e[Xo];
			if (p(t)) {
				let e = be(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (h(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(is(e, r));
		});
	},
	mounted: es,
	beforeUpdate(e, t, n) {
		e[Xo] = qo(n), es(e, t, n);
	}
};
function es(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (p(t)) i = be(t, r.props.value) > -1;
	else if (h(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = ye(t, is(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var ts = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = h(t);
		Mo(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? oe(rs(e)) : rs(e));
			e[Xo](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, wn(() => {
				e._assigning = !1;
			});
		}), e[Xo] = qo(r);
	},
	mounted(e, { value: t }) {
		ns(e, t);
	},
	beforeUpdate(e, t, n) {
		e[Xo] = qo(n);
	},
	updated(e, { value: t }) {
		e._assigning || ns(e, t);
	}
};
function ns(e, t) {
	let n = e.multiple, r = p(t);
	if (!(n && !r && !h(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = rs(a);
			if (n) if (r) {
				let e = typeof o;
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = be(t, o) > -1;
			} else a.selected = t.has(o);
			else if (ye(rs(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function rs(e) {
	return "_value" in e ? e._value : e.value;
}
function is(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var as = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], os = {
	stop: (e) => e.stopPropagation(),
	prevent: (e) => e.preventDefault(),
	self: (e) => e.target !== e.currentTarget,
	ctrl: (e) => !e.ctrlKey,
	shift: (e) => !e.shiftKey,
	alt: (e) => !e.altKey,
	meta: (e) => !e.metaKey,
	left: (e) => "button" in e && e.button !== 0,
	middle: (e) => "button" in e && e.button !== 1,
	right: (e) => "button" in e && e.button !== 2,
	exact: (e, t) => as.some((n) => e[`${n}Key`] && !t.includes(n))
}, ss = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = os[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, cs = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, ls = (e, t) => {
	let n = e._withKeys ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = ne(n.key);
		if (t.some((e) => e === r || cs[e] === r)) return e(n);
	}));
}, us = /* @__PURE__ */ l({ patchProp: Wo }, Ya), ds;
function fs() {
	return ds ||= zi(us);
}
var ps = ((...e) => {
	let t = fs().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = hs(e);
		if (!r) return;
		let i = t._component;
		!_(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, ms(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function ms(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function hs(e) {
	return v(e) ? document.querySelector(e) : e;
}
//#endregion
//#region node_modules/pinia/dist/pinia.mjs
var gs = typeof window < "u", _s, vs = (e) => _s = e, ys = Symbol();
function bs(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var xs;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(xs ||= {});
var Ss = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Cs(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function ws(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		ks(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function Ts(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function Es(e) {
	try {
		e.dispatchEvent(new MouseEvent("click"));
	} catch {
		let t = new MouseEvent("click", {
			bubbles: !0,
			cancelable: !0,
			view: window,
			detail: 0,
			screenX: 80,
			screenY: 20,
			clientX: 80,
			clientY: 20,
			ctrlKey: !1,
			altKey: !1,
			shiftKey: !1,
			metaKey: !1,
			button: 0,
			relatedTarget: null
		});
		e.dispatchEvent(t);
	}
}
var Ds = typeof navigator == "object" ? navigator : { userAgent: "" }, Os = /Macintosh/.test(Ds.userAgent) && /AppleWebKit/.test(Ds.userAgent) && !/Safari/.test(Ds.userAgent), ks = gs ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Os ? As : "msSaveOrOpenBlob" in Ds ? js : Ms : () => {};
function As(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? Es(r) : Ts(r.href) ? ws(e, t, n) : (r.target = "_blank", Es(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		Es(r);
	}, 0));
}
function js(e, t = "download", n) {
	if (typeof e == "string") if (Ts(e)) ws(e, t, n);
	else {
		let t = document.createElement("a");
		t.href = e, t.target = "_blank", setTimeout(function() {
			Es(t);
		});
	}
	else navigator.msSaveOrOpenBlob(Cs(e, n), t);
}
function Ms(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return ws(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(Ss.HTMLElement)) || "safari" in Ss, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || Os) && typeof FileReader < "u") {
		let t = new FileReader();
		t.onloadend = function() {
			let e = t.result;
			if (typeof e != "string") throw r = null, Error("Wrong reader.result type");
			e = o ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = e : location.assign(e), r = null;
		}, t.readAsDataURL(e);
	} else {
		let t = URL.createObjectURL(e);
		r ? r.location.assign(t) : location.href = t, r = null, setTimeout(function() {
			URL.revokeObjectURL(t);
		}, 4e4);
	}
}
var { assign: Ns } = Object;
function Ps() {
	let e = Te(!0), t = e.run(() => /* @__PURE__ */ R({})), n = [], r = [], i = Kt({
		install(e) {
			vs(i), i._a = e, e.provide(ys, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
		},
		use(e) {
			return this._a ? n.push(e) : r.push(e), this;
		},
		_p: n,
		_a: null,
		_e: e,
		_s: /* @__PURE__ */ new Map(),
		state: t
	});
	return i;
}
var Fs = () => {};
function Is(e, t, n, r = Fs) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && Ee() && De(i), i;
}
function Ls(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var Rs = (e) => e(), zs = Symbol(), Bs = Symbol();
function Vs(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		bs(i) && bs(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ L(r) && !/* @__PURE__ */ Ht(r) ? e[n] = Vs(i, r) : e[n] = r;
	}
	return e;
}
var Hs = Symbol();
function Us(e) {
	return !bs(e) || !Object.prototype.hasOwnProperty.call(e, Hs);
}
var { assign: Ws } = Object;
function Gs(e) {
	return !!(/* @__PURE__ */ L(e) && e.effect);
}
function Ks(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), Ws(/* @__PURE__ */ $t(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Kt(Y(() => {
			vs(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = qs(e, l, t, n, r, !0), c;
}
function qs(e, t, n = {}, r, i, a) {
	let o, s = Ws({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = r.state.value[e];
	!a && !p && (r.state.value[e] = {});
	let m;
	function h(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: xs.patchFunction,
			storeId: e,
			events: void 0
		}) : (Vs(r.state.value[e], t), n = {
			type: xs.patchObject,
			payload: t,
			storeId: e,
			events: void 0
		});
		let i = m = Symbol();
		wn().then(() => {
			m === i && (l = !0);
		}), u = !0, Ls(d, n, r.state.value[e]);
	}
	let g = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			Ws(e, t);
		});
	} : Fs;
	function _() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let v = (t, n = "") => {
		if (zs in t) return t[Bs] = n, t;
		let i = function() {
			vs(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			Ls(f, {
				args: n,
				name: i[Bs],
				store: y,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : y, n);
			} catch (e) {
				throw Ls(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (Ls(a, e), e)).catch((e) => (Ls(o, e), Promise.reject(e))) : (Ls(a, l), l);
		};
		return i[zs] = !0, i[Bs] = n, i;
	}, y = /* @__PURE__ */ Rt({
		_p: r,
		$id: e,
		$onAction: Is.bind(null, f),
		$patch: h,
		$reset: g,
		$subscribe(t, n = {}) {
			let i = Is(d, t, n.detached, () => a()), a = o.run(() => Un(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: xs.direct,
					events: void 0
				}, r);
			}, Ws({}, c, n)));
			return i;
		},
		$dispose: _
	});
	r._s.set(e, y);
	let b = (r._a && r._a.runWithContext || Rs)(() => r._e.run(() => (o = Te()).run(() => t({ action: v }))));
	for (let t in b) {
		let n = b[t];
		/* @__PURE__ */ L(n) && !Gs(n) || /* @__PURE__ */ Ht(n) ? a || (p && Us(n) && (/* @__PURE__ */ L(n) ? n.value = p[t] : Vs(n, p[t])), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = v(n, t), s.actions[t] = n);
	}
	return Ws(y, b), Ws(/* @__PURE__ */ I(y), b), Object.defineProperty(y, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			h((t) => {
				Ws(t, e);
			});
		}
	}), r._p.forEach((e) => {
		Ws(y, o.run(() => e({
			store: y,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), p && a && n.hydrate && n.hydrate(y.$state, p), l = !0, u = !0, y;
}
function Js(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Bn();
		return n ||= o ? zn(ys, null) : null, n && vs(n), n = _s, n._s.has(e) || (i ? qs(e, t, r, n) : Ks(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
function Ys(e) {
	let t = /* @__PURE__ */ I(e), n = {};
	for (let r in t) {
		let i = t[r];
		i.effect ? n[r] = Y({
			get: () => e[r],
			set(t) {
				e[r] = t;
			}
		}) : (/* @__PURE__ */ L(i) || /* @__PURE__ */ Ht(i)) && (n[r] = /* @__PURE__ */ nn(e, r));
	}
	return n;
}
//#endregion
//#region src/functions/npc-builder/create-default-trait-config.ts
function Xs() {
	return {
		attackType: "melee",
		bonusCharacteristic: "",
		damage: !1,
		defaultDifficulty: "challenging",
		dice: "",
		rollable: !1,
		skill: "",
		sl: !0,
		specification: ""
	};
}
//#endregion
//#region src/functions/npc-builder/default-npc-builder-settings.ts
function Zs() {
	return {
		allowBaseActorCharacteristics: !1,
		allowBaseActorSkills: !1,
		allowBaseActorTalents: !1,
		allowBaseActorTraits: !0,
		allowBaseActorTrappings: !0,
		askForLinkedSkillSpecializations: !1,
		autoSelectGrantedSpells: !0,
		baseActorFolderUuid: "",
		includeSpeciesInName: !1,
		lowerCareerMode: "prompt",
		outputActorFolderUuid: "",
		quickTraitFolderUuid: "",
		searchCompendiumPortraitAssets: !0,
		searchFoundryPortraitAssets: !1,
		searchWebPortraitAssets: !1
	};
}
//#endregion
//#region src/functions/npc-builder/magic-grants.ts
var Qs = /\(([^)]+)\)/, $s = [
	"beasts",
	"death",
	"fire",
	"heavens",
	"metal",
	"life",
	"light",
	"shadow"
], ec = [
	"daemonology",
	"necromancy",
	"nurgle",
	"slaanesh",
	"tzeentch",
	"undivided"
];
function tc(e, t) {
	let n = e.trim(), r = n.toLocaleLowerCase();
	return r === "petty magic" ? cc({
		kind: "petty-magic",
		rawLore: "Petty Magic",
		source: t,
		sourceName: n
	}) : r.startsWith("arcane magic") ? cc({
		kind: "arcane-magic",
		rawLore: lc(n),
		source: t,
		sourceName: n
	}) : r.startsWith("spellcaster") ? cc({
		kind: "spellcaster",
		rawLore: lc(n),
		source: t,
		sourceName: n
	}) : null;
}
function nc(e) {
	return e.trim().replace(/^any\s+/i, "").replace(/^arcane\s+lore\s+of\s+/i, "").replace(/^arcane\s+lore$/i, "").replace(/^lore\s+of\s+/i, "").replace(/\s+/g, " ").toLocaleLowerCase();
}
function rc(e) {
	return `${e.source}:${e.kind}:${e.sourceName}:${e.rawLore}`;
}
function ic(e, t) {
	return {
		...e,
		isAmbiguous: !1,
		normalizedLore: nc(t),
		rawLore: t.trim()
	};
}
function ac(e) {
	let t = nc(e);
	return t === "petty" ? "petty" : $s.includes(t) ? "eight-wind" : ec.includes(t) ? "dark" : "other";
}
function oc(e, t) {
	if (e.kind === "petty-magic") return t.filter((e) => e.category === "petty");
	let n = e.rawLore.trim().toLocaleLowerCase();
	return n.includes("dark") ? t.filter((e) => e.category === "dark") : n.includes("eight winds") ? t.filter((e) => e.category === "eight-wind") : t.filter((e) => e.category !== "petty");
}
function sc(e) {
	let t = e.trim().toLocaleLowerCase();
	return !t || t === "any" || t.includes("any ");
}
function cc(e) {
	let t = e.rawLore.trim();
	return {
		isAmbiguous: sc(t),
		kind: e.kind,
		normalizedLore: nc(t),
		rawLore: t,
		resolutionKey: rc({
			kind: e.kind,
			rawLore: t,
			source: e.source,
			sourceName: e.sourceName
		}),
		source: e.source,
		sourceName: e.sourceName
	};
}
function lc(e) {
	return Qs.exec(e)?.[1]?.trim() ?? "";
}
//#endregion
//#region src/functions/npc-builder/skill-specialization.ts
function uc(e, t, n) {
	return `${e}:${hc(t)}:${n}`;
}
function dc(e, t) {
	let n = e.trim(), r = t.trim();
	return r ? `${n} (${r})` : n;
}
function fc(e) {
	let t = /^(?<base>.+?)\s*\((?<specialization>[^)]+)\)\s*$/.exec(e.trim());
	if (!t?.groups) return null;
	let n = t.groups.base?.trim() ?? "", r = t.groups.specialization?.trim() ?? "";
	return !n || !r || pc(e) ? null : {
		baseName: n,
		originalName: e,
		specialization: r
	};
}
function pc(e) {
	let t = /^(?<base>.+?)\s*\((?<specialization>[^)]+)\)\s*$/.exec(e.trim());
	if (!t?.groups) return null;
	let n = t.groups.base?.trim() ?? "", r = t.groups.specialization?.trim() ?? "", i = _c(r);
	return !n || !r || !gc(r, i) ? null : {
		baseName: n,
		options: i,
		originalName: e,
		specialization: r
	};
}
function mc(e, t) {
	let n = /* @__PURE__ */ new Map();
	return t.map((t) => {
		let r = hc(t), i = n.get(r) ?? 0;
		return n.set(r, i + 1), {
			occurrence: i,
			originalName: t,
			resolutionKey: uc(e, t, i)
		};
	});
}
function hc(e) {
	return e.trim().replace(/\s+/g, " ").toLocaleLowerCase();
}
function gc(e, t) {
	return e.trim().toLocaleLowerCase() === "any" || t.length > 1;
}
function _c(e) {
	return e.split(/\s+or\s+/i).map((e) => e.trim()).filter(Boolean);
}
//#endregion
//#region src/functions/npc-builder/trapping-resolution.ts
function vc(e, t = "trapping") {
	return {
		candidates: [],
		searchTerms: Sc(e),
		selectedCandidateUuid: "",
		selectedItemType: t,
		selectedName: e.trim(),
		status: "fallback"
	};
}
function yc(e) {
	return {
		candidates: [{
			itemType: e.itemType,
			matchKind: "exact",
			name: e.name,
			searchTerm: e.name,
			sourceLabel: "Dropped item",
			uuid: e.uuid
		}],
		searchTerms: [e.name],
		selectedCandidateUuid: e.uuid,
		selectedItemType: e.itemType,
		selectedName: e.name,
		status: "matched"
	};
}
function bc(e) {
	return {
		candidates: [],
		searchTerms: Sc(e),
		selectedCandidateUuid: "",
		selectedItemType: "trapping",
		selectedName: e.trim(),
		status: "unresolved"
	};
}
function xc(e, t) {
	let n = Sc(e), r = wc(n, t), i = r.filter((e) => e.matchKind === "exact");
	return i.length === 1 ? Ec("matched", n, i[0]) : i.length > 1 ? Ec("ambiguous", n, i[0], { candidates: r }) : r.length ? {
		candidates: r,
		searchTerms: n,
		selectedCandidateUuid: "",
		selectedItemType: "trapping",
		selectedName: e.trim(),
		status: "ambiguous"
	} : vc(e);
}
function Sc(e) {
	let t = e.split(/\s+or\s+/i).map((e) => e.trim()).filter(Boolean);
	return t.length ? Ac(t) : [e.trim()].filter(Boolean);
}
function Cc(e, t) {
	if (Dc(e) === Dc(t)) return "exact";
	let n = Oc(e), r = Oc(t);
	if (!n || !r) return null;
	if (n === r || n.includes(r) || r.includes(n)) return "near";
	let i = n.split(" "), a = r.split(" ");
	return i.every((e) => a.includes(e)) ? "near" : null;
}
function wc(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) for (let e of t) {
		let t = Cc(r, e.name);
		t && n.get(e.uuid)?.matchKind !== "exact" && n.set(e.uuid, {
			itemType: e.itemType,
			matchKind: t,
			name: e.name,
			searchTerm: r,
			sourceLabel: e.sourceLabel,
			uuid: e.uuid
		});
	}
	return [...n.values()].sort(Tc);
}
function Tc(e, t) {
	return e.matchKind === t.matchKind ? e.name.localeCompare(t.name) : e.matchKind === "exact" ? -1 : 1;
}
function Ec(e, t, n, r = {}) {
	return {
		candidates: r.candidates ?? (n ? [n] : []),
		searchTerms: t,
		selectedCandidateUuid: n?.uuid ?? "",
		selectedItemType: n?.itemType ?? "trapping",
		selectedName: n?.name ?? "",
		status: e
	};
}
function Dc(e) {
	return e.trim().toLocaleLowerCase().replace(/\s+/g, " ");
}
function Oc(e) {
	return Dc(e).replace(/&/g, " and ").replace(/[()[\],.;:]/g, " ").replace(/\b(a|an|the|some|pair of|pairs of)\b/g, " ").split(/\s+/).map(kc).filter(Boolean).join(" ");
}
function kc(e) {
	return e.endsWith("ies") && e.length > 4 ? `${e.slice(0, -3)}y` : e.endsWith("s") && !e.endsWith("ss") && e.length > 3 ? e.slice(0, -1) : e;
}
function Ac(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/state/npc-builder-store.ts
var jc = Zs(), Mc = {
	advancements: [],
	optionalTraits: [],
	traits: [],
	trappings: []
}, Nc = 5;
function Pc(e, t) {
	return `${e}:${Rc(t)}`;
}
function Fc(e) {
	let t = Number(e.level ?? 1);
	return Number.isFinite(t) ? Math.max(1, Math.floor(t)) * Nc : Nc;
}
function Ic(e) {
	return e.level === null ? `${e.name} level baseline` : `${e.name} level ${e.level} baseline`;
}
function Lc(e, t) {
	return e === "characteristic" ? t.allowBaseActorCharacteristics : e === "skill" ? t.allowBaseActorSkills : t.allowBaseActorTalents;
}
function Rc(e) {
	return e.trim().toLocaleLowerCase();
}
function zc(e) {
	return Number.isFinite(e) ? Math.max(1, Math.floor(e)) : 1;
}
function Bc(e, t) {
	return {
		...Xs(),
		...e,
		...t
	};
}
function Vc(e) {
	return e === "auto-add-all" || e === "never" || e === "prompt";
}
function Hc(e) {
	return {
		allowBaseActorCharacteristics: e.allowBaseActorCharacteristics ?? !0,
		allowBaseActorSkills: e.allowBaseActorSkills ?? !0,
		allowBaseActorTalents: e.allowBaseActorTalents ?? !0,
		allowBaseActorTraits: e.allowBaseActorTraits ?? !0,
		allowBaseActorTrappings: e.allowBaseActorTrappings ?? !0,
		askForLinkedSkillSpecializations: e.askForLinkedSkillSpecializations ?? !1,
		autoSelectGrantedSpells: e.autoSelectGrantedSpells ?? !0,
		baseActorFolderUuid: typeof e.baseActorFolderUuid == "string" ? e.baseActorFolderUuid : "",
		includeSpeciesInName: e.includeSpeciesInName ?? !1,
		lowerCareerMode: Vc(e.lowerCareerMode) ? e.lowerCareerMode : "prompt",
		outputActorFolderUuid: typeof e.outputActorFolderUuid == "string" ? e.outputActorFolderUuid : "",
		quickTraitFolderUuid: typeof e.quickTraitFolderUuid == "string" ? e.quickTraitFolderUuid : "",
		searchCompendiumPortraitAssets: e.searchCompendiumPortraitAssets ?? !0,
		searchFoundryPortraitAssets: e.searchFoundryPortraitAssets ?? !0,
		searchWebPortraitAssets: e.searchWebPortraitAssets ?? !1
	};
}
var Uc = Js("npc-builder", () => {
	let e = /* @__PURE__ */ R(""), t = /* @__PURE__ */ R([]), n = /* @__PURE__ */ R({}), r = /* @__PURE__ */ R({ ...Mc }), i = /* @__PURE__ */ R([]), a = /* @__PURE__ */ R([]), o = /* @__PURE__ */ R([]), s = /* @__PURE__ */ R([]), c = /* @__PURE__ */ R([]), l = /* @__PURE__ */ R([]), u = /* @__PURE__ */ R(""), d = /* @__PURE__ */ R({ ...jc }), f = /* @__PURE__ */ R(""), p = /* @__PURE__ */ R({}), m = /* @__PURE__ */ R([]), h = /* @__PURE__ */ R([]), g = /* @__PURE__ */ R({}), _ = /* @__PURE__ */ R({}), v = /* @__PURE__ */ R({}), y = /* @__PURE__ */ R({}), b = /* @__PURE__ */ R({}), x = Y(() => i.value.find((e) => e.uuid === f.value) ?? null), S = Y(() => a.value.at(-1) ?? null), C = Y(() => {
		let e = S.value?.name, t = d.value.includeSpeciesInName && x.value?.species ? x.value.species : "";
		return e && t ? `${t} ${e}` : e || (x.value ? `${x.value.name} NPC` : "New NPC");
	}), w = Y(() => e.value.trim() || C.value), T = Y(() => S.value?.img || x.value?.prototypeTokenImg || x.value?.img || ""), E = Y(() => u.value || T.value), D = Y(() => {
		let e = {
			characteristics: 0,
			skills: 0,
			talents: 0,
			trappings: 0
		};
		for (let t of a.value) e.characteristics += t.grants.characteristics.length * t.quantity, e.skills += t.grants.skills.length * t.quantity, e.talents += t.grants.talents.length * t.quantity, e.trappings += t.grants.trappings.length * t.quantity;
		return e;
	}), O = Y(() => {
		let e = /* @__PURE__ */ new Map();
		for (let t of r.value.advancements) {
			if (!Lc(t.kind, d.value)) continue;
			let n = Pc(t.kind, t.name);
			e.set(n, {
				baseValue: t.current,
				careerValue: 0,
				current: 0,
				includedFromBase: !0,
				includedFromCareer: !1,
				kind: t.kind,
				name: t.name,
				sources: []
			});
		}
		return oe(e, "characteristic"), oe(e, "skill"), oe(e, "talent"), [...e.values()].map((e) => {
			let t = Pc(e.kind, e.name), r = n.value[t] ?? e.careerValue;
			return {
				...e,
				current: Math.max(0, Math.floor(r))
			};
		}).sort((e, t) => e.kind === t.kind ? e.name.localeCompare(t.name) : e.kind.localeCompare(t.kind));
	}), ee = Y(() => {
		let e = /* @__PURE__ */ new Map();
		if (d.value.allowBaseActorTrappings) for (let t of r.value.trappings) e.set(`base:${t.uuid || Rc(t.name)}`, {
			ignored: !1,
			itemType: t.itemType,
			key: `base:${t.uuid || Rc(t.name)}`,
			name: t.name,
			quantity: t.quantity,
			resolution: yc({
				itemType: t.itemType,
				name: t.name,
				uuid: t.uuid
			}),
			source: "base",
			sourceUuid: t.uuid
		});
		for (let t of a.value) for (let n of t.grants.trappings) {
			let r = `career:${Rc(n)}`, i = e.get(r);
			if (i) {
				i.quantity += t.quantity;
				continue;
			}
			e.set(r, {
				ignored: !1,
				itemType: "trapping",
				key: r,
				name: n,
				quantity: t.quantity,
				resolution: b.value[r] ?? bc(n),
				source: "career",
				sourceUuid: ""
			});
		}
		for (let t of s.value) e.set(t.key, { ...t });
		return [...e.values()].map((e) => {
			let t = y.value[e.key];
			return {
				...e,
				ignored: t?.ignored ?? e.ignored,
				quantity: zc(t?.quantity ?? e.quantity),
				resolution: b.value[e.key] ?? e.resolution
			};
		}).sort((e, t) => e.source === t.source ? e.name.localeCompare(t.name) : e.source.localeCompare(t.source));
	}), k = Y(() => {
		let e = /* @__PURE__ */ new Map();
		if (d.value.allowBaseActorTraits) for (let t of r.value.traits) {
			let n = `base:${t.uuid || Rc(t.name)}`;
			e.set(n, {
				config: t.config,
				ignored: !1,
				key: n,
				name: t.name,
				source: "base",
				sourceUuid: t.uuid
			});
		}
		for (let t of o.value) Ke(e, t.name) || e.set(t.key, { ...t });
		return [...e.values()].map((e) => ({
			...e,
			config: Bc(e.config, v.value[e.key])
		})).sort((e, t) => e.source === t.source ? e.name.localeCompare(t.name) : e.source.localeCompare(t.source));
	}), te = Y(() => {
		let e = /* @__PURE__ */ new Map();
		for (let t of O.value) {
			if (t.kind !== "talent" || t.current <= 0) continue;
			let n = tc(t.name, "talent");
			n && e.set(n.resolutionKey, Ge(n));
		}
		for (let t of k.value) {
			let n = tc(t.name, "trait");
			n && e.set(n.resolutionKey, Ge(n));
		}
		return [...e.values()];
	}), ne = Y(() => te.value.length > 0), re = Y(() => {
		let e = /* @__PURE__ */ new Map();
		for (let t of m.value) e.set(t.key, {
			...t,
			selected: _.value[t.key] ?? d.value.autoSelectGrantedSpells
		});
		for (let t of h.value) e.set(t.key, {
			...t,
			selected: _.value[t.key] ?? t.selected
		});
		return [...e.values()].sort((e, t) => e.loreName === t.loreName ? e.name.localeCompare(t.name) : e.loreName.localeCompare(t.loreName));
	}), ie = Y(() => re.value.filter((e) => e.selected)), A = Y(() => [...r.value.optionalTraits].map((e) => ({
		config: e.config,
		img: e.img,
		name: e.name,
		uuid: e.uuid
	})).sort((e, t) => e.name.localeCompare(t.name)));
	function j(e) {
		let t = a.value.find((t) => t.uuid === e.uuid);
		if (t) {
			t.quantity = zc(t.quantity + 1);
			return;
		}
		a.value.push({
			...e,
			quantity: 1
		});
	}
	function ae(e) {
		return a.value.some((t) => t.uuid === e.uuid) ? !1 : (a.value.push({
			...e,
			quantity: 1
		}), !0);
	}
	function oe(e, t) {
		if (t === "talent") {
			ce(e);
			return;
		}
		se(e, t);
	}
	function se(e, t) {
		let n = /* @__PURE__ */ new Map();
		for (let e of a.value) {
			let r = M(P(e, t)), i = Fc(e) / Nc, a = Math.max(0, zc(e.quantity) - 1) * Nc;
			for (let o of r) {
				let r = Pc(t, o), s = n.get(r);
				if (s) {
					i > s.highestLevel && (s.highestLevel = i, s.highestLevelSource = Ic(e)), a > 0 && s.extraSources.push({
						count: a,
						label: `${e.name} extra time`
					});
					continue;
				}
				n.set(r, {
					extraSources: ue(e.name, a),
					highestLevel: i,
					highestLevelSource: Ic(e),
					name: o
				});
			}
		}
		for (let r of n.values()) le(e, {
			careerValue: r.highestLevel * Nc + de(r.extraSources),
			kind: t,
			name: r.name,
			sources: [{
				count: r.highestLevel * Nc,
				label: r.highestLevelSource
			}, ...r.extraSources]
		});
	}
	function ce(e) {
		let t = /* @__PURE__ */ new Map();
		for (let e of a.value) {
			let n = M(P(e, "talent")), r = Math.max(0, zc(e.quantity) - 1);
			for (let i of n) {
				let n = Pc("talent", i), a = t.get(n);
				if (a) {
					r > 0 && a.extraSources.push({
						count: r,
						label: `${e.name} extra time`
					});
					continue;
				}
				t.set(n, {
					extraSources: ue(e.name, r),
					firstSource: `${e.name} first instance`,
					name: i
				});
			}
		}
		for (let n of t.values()) le(e, {
			careerValue: 1 + de(n.extraSources),
			kind: "talent",
			name: n.name,
			sources: [{
				count: 1,
				label: n.firstSource
			}, ...n.extraSources]
		});
	}
	function le(e, t) {
		let n = Pc(t.kind, t.name), r = e.get(n);
		if (r) {
			r.careerValue = t.careerValue, r.includedFromCareer = !0, r.sources = t.sources;
			return;
		}
		e.set(n, {
			baseValue: 0,
			careerValue: t.careerValue,
			current: t.careerValue,
			includedFromBase: !1,
			includedFromCareer: !0,
			kind: t.kind,
			name: t.name,
			sources: t.sources
		});
	}
	function ue(e, t) {
		return t <= 0 ? [] : [{
			count: t,
			label: `${e} extra time`
		}];
	}
	function de(e) {
		let t = 0;
		for (let n of e) t += n.count;
		return t;
	}
	function fe(e) {
		s.value.some((t) => t.key === e.key) || s.value.push(e);
	}
	function pe(e) {
		let t = He(e.name), n = Ve(e.name);
		if (n) {
			Fe(n, !0);
			return;
		}
		if (t) {
			Pe(t, !0);
			return;
		}
		Le(e);
	}
	function me(e) {
		let t = m.value.find((t) => We(t, e));
		if (t) {
			_.value[t.key] = !0;
			return;
		}
		h.value.some((t) => t.key === e.key) || h.value.push({
			...e,
			selected: !0
		});
	}
	function M(e) {
		let t = /* @__PURE__ */ new Set(), n = [];
		for (let r of e) {
			let e = Rc(r);
			!e || t.has(e) || (t.add(e), n.push(r));
		}
		return n;
	}
	function he() {
		r.value = {
			advancements: [],
			optionalTraits: [],
			traits: [],
			trappings: []
		}, n.value = {}, v.value = {}, y.value = {}, b.value = {};
	}
	function ge(e) {
		return p.value[e] ?? "";
	}
	function _e(e) {
		r.value = {
			advancements: [...e.advancements],
			optionalTraits: [...e.optionalTraits],
			traits: [...e.traits],
			trappings: [...e.trappings]
		}, n.value = {}, v.value = {}, y.value = {};
	}
	function ve(e) {
		i.value = [...e].sort((e, t) => e.name.localeCompare(t.name)), f.value && !i.value.some((e) => e.uuid === f.value) && (f.value = "", he());
	}
	function ye(e) {
		d.value = Hc(e);
	}
	function be(e) {
		t.value = [...e].sort((e, t) => e.name.localeCompare(t.name)), d.value.baseActorFolderUuid && !t.value.some((e) => e.uuid === d.value.baseActorFolderUuid) && (d.value.baseActorFolderUuid = ""), d.value.outputActorFolderUuid && !t.value.some((e) => e.uuid === d.value.outputActorFolderUuid) && (d.value.outputActorFolderUuid = "");
	}
	function xe(e) {
		c.value = [...e].sort((e, t) => e.name.localeCompare(t.name)), d.value.quickTraitFolderUuid && !c.value.some((e) => e.uuid === d.value.quickTraitFolderUuid) && (d.value.quickTraitFolderUuid = "");
	}
	function N(e) {
		l.value = [...e].sort((e, t) => e.name.localeCompare(t.name));
	}
	function Se(e) {
		m.value = e.map((e) => ({
			...e,
			selected: _.value[e.key] ?? d.value.autoSelectGrantedSpells
		}));
	}
	function Ce(e, t) {
		let n = e + t, r = a.value[e];
		!r || n < 0 || n >= a.value.length || (a.value.splice(e, 1), a.value.splice(n, 0, r));
	}
	function P(e, t) {
		return t === "characteristic" ? e.grants.characteristics : t === "skill" ? mc(e.uuid, e.grants.skills).map((e) => p.value[e.resolutionKey] || e.originalName) : e.grants.talents;
	}
	function we(e) {
		let [t] = a.value.splice(e, 1);
		t && Qe(t.uuid);
	}
	function Te(e) {
		s.value = s.value.filter((t) => t.key !== e), delete y.value[e], delete b.value[e];
	}
	function Ee(e) {
		o.value = o.value.filter((t) => t.key !== e), delete v.value[e];
	}
	function De(e) {
		h.value = h.value.filter((t) => t.key !== e), delete _.value[e];
	}
	function F() {
		e.value = "", a.value = [], o.value = [], s.value = [], h.value = [], m.value = [], g.value = {}, u.value = "", p.value = {}, _.value = {}, f.value = "", he();
	}
	function Oe(e) {
		i.value.some((t) => t.uuid === e.uuid) || i.value.push(e), ke(e.uuid);
	}
	function ke(e) {
		let t = e.trim();
		f.value !== t && (u.value = ""), f.value = t;
	}
	function Ae(e) {
		u.value = e;
	}
	function je(e, t) {
		let r = Pc(e.kind, e.name), i = Number.isFinite(t) ? t : 0;
		n.value[r] = Math.max(0, Math.floor(i));
	}
	function Me(e, t) {
		let n = a.value[e];
		n && (n.quantity = zc(t));
	}
	function Ne(e, t) {
		let n = t.trim();
		if (!n) {
			delete p.value[e];
			return;
		}
		p.value[e] = n;
	}
	function Pe(e, t) {
		Ie("quick", e, t);
	}
	function Fe(e, t) {
		Ie("optional", e, t);
	}
	function Ie(e, t, n) {
		let r = `${e}:${t.uuid || Rc(t.name)}`;
		if (!n) {
			Ee(r);
			return;
		}
		o.value.find((e) => e.key === r) || Le({
			config: t.config,
			ignored: !1,
			key: r,
			name: t.name,
			source: e,
			sourceUuid: t.uuid
		});
	}
	function Le(e) {
		k.value.some((t) => Ue(t.name, e.name)) || o.value.some((t) => t.key === e.key) || o.value.push(e);
	}
	function Re(e, t) {
		v.value[e] = {
			...v.value[e],
			...t
		};
	}
	function ze(e, t) {
		_.value[e] = t;
	}
	function Be(e, t) {
		let n = t.trim();
		if (!n) {
			delete g.value[e];
			return;
		}
		g.value[e] = n;
	}
	function Ve(e) {
		return A.value.find((t) => Ue(t.name, e));
	}
	function He(e) {
		return l.value.find((t) => Ue(t.name, e));
	}
	function Ue(e, t) {
		return Rc(e) === Rc(t);
	}
	function We(e, t) {
		return e.sourceUuid && e.sourceUuid === t.sourceUuid ? !0 : Ue(e.name, t.name);
	}
	function Ge(e) {
		let t = g.value[e.resolutionKey];
		return t ? ic(e, t) : e;
	}
	function Ke(e, t) {
		return [...e.values()].some((e) => Ue(e.name, t));
	}
	function qe(e, t) {
		y.value[e] = {
			...y.value[e],
			ignored: t
		};
	}
	function Je(e, t) {
		y.value[e] = {
			...y.value[e],
			quantity: zc(t)
		};
	}
	function Ye(e, t) {
		let n = ee.value.find((t) => t.key === e), r = n?.resolution.candidates.find((e) => e.uuid === t);
		!n || !r || (b.value[e] = {
			...n.resolution,
			selectedCandidateUuid: r.uuid,
			selectedItemType: r.itemType,
			selectedName: r.name,
			status: n.resolution.status === "matched" ? "matched" : "ambiguous"
		});
	}
	function Xe(e) {
		let t = ee.value.find((t) => t.key === e);
		if (!t) return;
		let n = vc(t.name, t.itemType);
		b.value[e] = {
			...n,
			candidates: t.resolution.candidates,
			searchTerms: t.resolution.searchTerms
		};
	}
	function Ze(e, t) {
		b.value[e] = t;
	}
	function Qe(e) {
		let t = `${e}:`;
		for (let e of Object.keys(p.value)) e.startsWith(t) && delete p.value[e];
	}
	return {
		actorName: e,
		actorFolders: t,
		addCareer: j,
		addCareerIfMissing: ae,
		addCustomSpell: me,
		addCustomTrait: pe,
		addCustomTrapping: fe,
		advancements: O,
		baseActorDraftData: r,
		baseActors: i,
		careers: a,
		clearBaseDraftData: he,
		customSpells: h,
		customTraits: o,
		customTrappings: s,
		finalActorName: w,
		finalCareer: S,
		finalPortraitPath: E,
		grantTotals: D,
		hasMagicAccess: ne,
		getSkillGrantResolution: ge,
		hydrateActorFolders: be,
		hydrateBaseActorDraftData: _e,
		hydrateBaseActors: ve,
		hydrateItemFolders: xe,
		hydrateDetectedSpells: Se,
		hydrateQuickTraits: N,
		hydrateSettings: ye,
		itemFolders: c,
		magicGrants: te,
		magicLoreResolutions: g,
		moveCareer: Ce,
		optionalTraits: A,
		quickTraits: l,
		removeCareer: we,
		removeCustomSpell: De,
		removeCustomTrait: Ee,
		removeCustomTrapping: Te,
		resetDraft: F,
		selectBaseActor: Oe,
		selectBaseActorUuid: ke,
		selectPortrait: Ae,
		selectTrappingResolutionCandidate: Ye,
		selectedBaseActor: x,
		selectedBaseActorUuid: f,
		selectedPortraitPath: u,
		setAdvancementCurrent: je,
		setCareerQuantity: Me,
		setMagicGrantLoreResolution: Be,
		setTrappingFallback: Xe,
		setOptionalTraitSelected: Fe,
		setQuickTraitSelected: Pe,
		setSkillGrantResolution: Ne,
		setSpellSelected: ze,
		setTraitConfig: Re,
		setTrappingIgnored: qe,
		setTrappingQuantity: Je,
		setTrappingResolution: Ze,
		settings: d,
		selectedSpells: ie,
		suggestedActorName: C,
		spells: re,
		traits: k,
		trappings: ee
	};
}), Wc = { class: "sub-view__header" }, Gc = /* @__PURE__ */ ur({
	__name: "SubView",
	props: {
		open: { type: Boolean },
		title: {}
	},
	emits: ["close"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ R(null), a = /* @__PURE__ */ R(null), o = null, s = 0;
		Un(() => n.open, async (e) => {
			if (e) {
				await wn(), o = c(a.value), s = o?.scrollTop ?? 0, o && (o.scrollTop = 0), i.value && (i.value.scrollTop = 0);
				return;
			}
			o && (o.scrollTop = s), o = null, s = 0;
		});
		function c(e) {
			let t = e?.parentElement ?? null;
			for (; t;) {
				if (l(t)) return t;
				t = t.parentElement;
			}
			return null;
		}
		function l(e) {
			let t = window.getComputedStyle(e).overflowY;
			return e.scrollHeight > e.clientHeight && (t === "auto" || t === "scroll" || t === "overlay");
		}
		return (t, n) => (W(), aa(to, { name: "sub-view" }, {
			default: In(() => [e.open ? (W(), G("section", {
				key: 0,
				ref_key: "rootElement",
				ref: a,
				class: "sub-view",
				role: "dialog",
				"aria-modal": "true"
			}, [K("div", Wc, [K("h2", null, N(e.title), 1), K("button", {
				type: "button",
				class: "sub-view__close",
				onClick: n[0] ||= (e) => r("close")
			}, " Close ")]), K("div", {
				ref_key: "bodyElement",
				ref: i,
				class: "sub-view__body"
			}, [Fr(t.$slots, "default", {}, void 0, !0)], 512)], 512)) : J("", !0)]),
			_: 3
		}));
	}
}), Kc = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, qc = /* @__PURE__ */ Kc(Gc, [["__scopeId", "data-v-2a7b49f7"]]), Jc = { class: "npc-builder__stack" }, Yc = { class: "npc-builder__panel" }, Xc = { class: "npc-builder__table" }, Zc = ["value", "onInput"], Qc = { class: "npc-builder__panel" }, $c = { class: "npc-builder__table" }, el = {
	key: 0,
	class: "npc-builder__badge"
}, tl = ["value", "onInput"], nl = { class: "npc-builder__panel" }, rl = { class: "npc-builder__table" }, il = ["value", "onInput"], al = /* @__PURE__ */ ur({
	__name: "NpcBuilderAdvancementsTab",
	setup(e) {
		let t = Uc(), { advancements: n } = Ys(t), r = Y(() => n.value.filter((e) => e.kind === "characteristic")), i = Y(() => n.value.filter((e) => e.kind === "skill")), a = Y(() => n.value.filter((e) => e.kind === "talent"));
		function o(e) {
			return e.sources.length ? e.sources.map((e) => `${e.label} +${e.count}`).join(", ") : e.includedFromBase ? "Base actor" : "-";
		}
		function s(e) {
			return pc(e) !== null;
		}
		function c(e, n) {
			let r = n.target;
			r && t.setAdvancementCurrent(e, Number(r.value));
		}
		return (e, t) => (W(), G("section", Jc, [
			K("section", Yc, [t[1] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "1"), K("h2", null, "Characteristics")], -1), K("div", Xc, [t[0] ||= K("div", { class: "npc-builder__table-head" }, [
				K("span", null, "Name"),
				K("span", null, "Base"),
				K("span", null, "Career"),
				K("span", null, "Apply"),
				K("span", null, "Sources")
			], -1), (W(!0), G(H, null, V(r.value, (e) => (W(), G("label", {
				key: `${e.kind}:${e.name}`,
				class: "npc-builder__advance-row"
			}, [
				K("strong", null, N(e.name), 1),
				K("span", null, N(e.baseValue), 1),
				K("span", null, N(e.careerValue), 1),
				K("input", {
					value: e.current,
					min: "0",
					type: "number",
					onInput: (t) => c(e, t)
				}, null, 40, Zc),
				K("span", null, N(o(e)), 1)
			]))), 128))])]),
			K("section", Qc, [t[3] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "2"), K("h2", null, "Skills")], -1), K("div", $c, [t[2] ||= K("div", { class: "npc-builder__table-head" }, [
				K("span", null, "Name"),
				K("span", null, "Base"),
				K("span", null, "Career"),
				K("span", null, "Apply"),
				K("span", null, "Sources")
			], -1), (W(!0), G(H, null, V(i.value, (e) => (W(), G("label", {
				key: `${e.kind}:${e.name}`,
				class: "npc-builder__advance-row"
			}, [
				K("strong", null, [pa(N(e.name) + " ", 1), s(e.name) ? (W(), G("span", el, " Needs specialization ")) : J("", !0)]),
				K("span", null, N(e.baseValue), 1),
				K("span", null, N(e.careerValue), 1),
				K("input", {
					value: e.current,
					min: "0",
					type: "number",
					onInput: (t) => c(e, t)
				}, null, 40, tl),
				K("span", null, N(o(e)), 1)
			]))), 128))])]),
			K("section", nl, [t[5] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "3"), K("h2", null, "Talents")], -1), K("div", rl, [t[4] ||= K("div", { class: "npc-builder__table-head" }, [
				K("span", null, "Name"),
				K("span", null, "Base"),
				K("span", null, "Career"),
				K("span", null, "Apply"),
				K("span", null, "Sources")
			], -1), (W(!0), G(H, null, V(a.value, (e) => (W(), G("label", {
				key: `${e.kind}:${e.name}`,
				class: "npc-builder__advance-row"
			}, [
				K("strong", null, N(e.name), 1),
				K("span", null, N(e.baseValue), 1),
				K("span", null, N(e.careerValue), 1),
				K("input", {
					value: e.current,
					min: "0",
					type: "number",
					onInput: (t) => c(e, t)
				}, null, 40, il),
				K("span", null, N(o(e)), 1)
			]))), 128))])])
		]));
	}
}), ol = new Set([
	"and",
	"any",
	"the",
	"with",
	"without",
	"of",
	"or",
	"npc"
]);
function sl(e) {
	let t = [];
	for (let n of [...e.careers].reverse()) n.img && t.push({
		img: n.img,
		key: `career:${n.uuid}`,
		label: `${n.name} icon`,
		source: "career"
	});
	return e.selectedBaseActor?.img && t.push({
		img: e.selectedBaseActor.img,
		key: `base-actor:${e.selectedBaseActor.uuid}`,
		label: `${e.selectedBaseActor.name} image`,
		source: "base-actor"
	}), e.selectedBaseActor?.prototypeTokenImg && e.selectedBaseActor.prototypeTokenImg !== e.selectedBaseActor.img && t.push({
		img: e.selectedBaseActor.prototypeTokenImg,
		key: `base-token:${e.selectedBaseActor.uuid}`,
		label: `${e.selectedBaseActor.name} token`,
		source: "base-token"
	}), fl(t);
}
function cl(e, t) {
	let n = pl(e);
	return n ? t.some((e) => pl(e.img) === n) : !1;
}
function ll(e) {
	let t = [];
	for (let n of e.careers) t.push(n.name, n.careerGroup);
	return e.selectedBaseActor && t.push(e.selectedBaseActor.name, e.selectedBaseActor.species), _l(t.flatMap((e) => gl(e)).filter((e) => e.length >= 3 && !ol.has(e)));
}
function ul(e, t) {
	return dl(ml(e), t);
}
function dl(e, t) {
	let n = hl(e);
	return n ? t.some((e) => n.includes(e)) : !1;
}
function fl(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.img.trim().toLocaleLowerCase();
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
function pl(e) {
	return e.trim().toLocaleLowerCase();
}
function ml(e) {
	return (e.split(/[\\/]/).at(-1) ?? e).replace(/\.[^.]+$/, "");
}
function hl(e) {
	return e.trim().toLocaleLowerCase().replace(/[_-]/g, " ").replace(/[()[\],.;:]/g, " ").replace(/\s+/g, " ");
}
function gl(e) {
	let t = hl(e);
	return [t, ...t.split(" ")].filter(Boolean);
}
function _l(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/view/components/DocumentDrop.vue?vue&type=script&setup=true&lang.ts
var vl = ["onKeydown"], yl = { key: 0 }, bl = { class: "document-drop__actions" }, xl = /* @__PURE__ */ Kc(/* @__PURE__ */ ur({
	__name: "DocumentDrop",
	props: {
		description: {},
		title: {},
		variant: {}
	},
	emits: ["dropData"],
	setup(e, { emit: t }) {
		let n = t, r = /* @__PURE__ */ R(!1), i = /* @__PURE__ */ R(!1), a = /* @__PURE__ */ R(!1), o = /* @__PURE__ */ R("auto"), s = /* @__PURE__ */ R("");
		function c(e) {
			let t = e.currentTarget, n = e.relatedTarget;
			t instanceof Node && n instanceof Node && t.contains(n) || (r.value = !1);
		}
		function l(e) {
			e.preventDefault(), r.value = !1, n("dropData", e.dataTransfer?.getData("text/plain") ?? "");
		}
		function u() {
			i.value = !0;
		}
		function d() {
			i.value = !1, m();
		}
		function f() {
			let e = _(s.value, o.value);
			e && (n("dropData", e), s.value = "", d());
		}
		function p() {
			a.value || (a.value = !0, document.addEventListener("click", h, !0));
		}
		function m() {
			a.value && (a.value = !1, document.removeEventListener("click", h, !0));
		}
		function h(e) {
			let t = e.target;
			if (!(t instanceof Element)) return;
			let r = g(t);
			r && (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), n("dropData", r), d());
		}
		function g(e) {
			let t = e.closest("[data-uuid], [data-document-uuid], [data-entry-uuid], [data-document-id]");
			if (!t) return "";
			let n = t.dataset.uuid || t.dataset.documentUuid || t.dataset.entryUuid || "";
			if (n) return v(n);
			let r = t.dataset.documentId, i = b(t);
			return !r || !i ? "" : JSON.stringify({
				id: r,
				type: i
			});
		}
		function _(e, t) {
			let n = e.trim();
			if (!n) return "";
			if (S(n)) return n;
			let r = y(n), i = t === "auto" ? x(r) : t;
			return i ? C(r) ? JSON.stringify({
				type: i,
				uuid: r
			}) : JSON.stringify({
				id: r,
				type: i
			}) : "";
		}
		function v(e) {
			let t = x(e);
			return t ? JSON.stringify({
				type: t,
				uuid: e
			}) : "";
		}
		function y(e) {
			return /@UUID\[([^\]]+)\]/.exec(e)?.[1]?.trim() ?? e;
		}
		function b(e) {
			let t = e.dataset.documentName || e.dataset.type || e.closest("[data-document-name]")?.dataset.documentName || "";
			return t === "Actor" || t === "Item" ? t : e.closest("#actors") ? "Actor" : e.closest("#items") ? "Item" : "";
		}
		function x(e) {
			return /^Actor\./i.test(e) || /\.actors(\.|$)/i.test(e) ? "Actor" : /^Item\./i.test(e) || /\.items(\.|$)/i.test(e) || o.value === "auto" ? "Item" : o.value;
		}
		function S(e) {
			if (!e.startsWith("{")) return !1;
			try {
				return typeof JSON.parse(e).type == "string";
			} catch {
				return !1;
			}
		}
		function C(e) {
			return /^(Actor|Item|Compendium)\./i.test(e);
		}
		return Or(() => {
			m();
		}), (t, n) => (W(), G("div", {
			class: M(["document-drop", {
				"document-drop--compact": e.variant === "compact",
				"is-hovering": r.value,
				"is-manual-open": i.value
			}]),
			role: "button",
			tabindex: "0",
			onClick: u,
			onDragenter: n[3] ||= ss((e) => r.value = !0, ["prevent"]),
			onDragover: n[4] ||= ss((e) => r.value = !0, ["prevent"]),
			onDragleave: c,
			onDrop: l,
			onKeydown: [ls(ss(u, ["prevent"]), ["enter"]), ls(ss(u, ["prevent"]), ["space"])]
		}, [
			K("strong", null, N(e.title), 1),
			e.description ? (W(), G("span", yl, N(e.description), 1)) : J("", !0),
			Fr(t.$slots, "default", {}, void 0, !0),
			i.value ? (W(), G("form", {
				key: 1,
				class: "document-drop__manual",
				onClick: n[2] ||= ss(() => {}, ["stop"]),
				onSubmit: ss(f, ["prevent"])
			}, [
				K("label", null, [n[6] ||= K("span", null, "Document type", -1), B(K("select", { "onUpdate:modelValue": n[0] ||= (e) => o.value = e }, [...n[5] ||= [
					K("option", { value: "auto" }, "Auto", -1),
					K("option", { value: "Item" }, "Item", -1),
					K("option", { value: "Actor" }, "Actor", -1)
				]], 512), [[ts, o.value]])]),
				K("label", null, [n[7] ||= K("span", null, "UUID or drop JSON", -1), B(K("input", {
					"onUpdate:modelValue": n[1] ||= (e) => s.value = e,
					placeholder: "Compendium.package.pack.id",
					type: "text"
				}, null, 512), [[Qo, s.value]])]),
				K("div", bl, [
					n[8] ||= K("button", { type: "submit" }, "Use", -1),
					K("button", {
						type: "button",
						onClick: p
					}, N(a.value ? "Waiting..." : "Pick Next Click"), 1),
					K("button", {
						type: "button",
						onClick: d
					}, "Cancel")
				])
			], 32)) : J("", !0)
		], 42, vl));
	}
}), [["__scopeId", "data-v-018b4f39"]]), Sl = { class: "npc-builder__layout" }, Cl = { class: "npc-builder__column" }, wl = { class: "npc-builder__panel" }, Tl = { class: "npc-builder__field" }, El = { class: "npc-builder__field" }, Dl = ["disabled"], Ol = { value: "" }, kl = ["value"], Al = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, jl = {
	key: 1,
	class: "npc-builder__source"
}, Ml = { class: "npc-builder__thumbnail" }, Nl = ["src"], Pl = { key: 1 }, Fl = { class: "npc-builder__panel" }, Il = {
	key: 0,
	class: "npc-builder__careers"
}, Ll = { class: "npc-builder__thumbnail" }, Rl = ["src"], zl = { key: 1 }, Bl = { class: "npc-builder__career-copy" }, Vl = { class: "npc-builder__grant-list" }, Hl = ["value", "onInput"], Ul = { class: "npc-builder__career-actions" }, Wl = ["disabled", "onClick"], Gl = ["disabled", "onClick"], Kl = ["onClick"], ql = {
	key: 1,
	class: "npc-builder__empty"
}, Jl = { class: "npc-builder__summary" }, Yl = { class: "npc-builder__preview" }, Xl = ["disabled"], Zl = ["src"], Ql = { key: 1 }, $l = { key: 2 }, eu = {
	key: 0,
	class: "npc-builder__portrait-path"
}, tu = { key: 0 }, nu = ["title"], ru = {
	key: 1,
	class: "npc-builder__portrait-gallery"
}, iu = { key: 0 }, au = { key: 1 }, ou = {
	key: 0,
	class: "npc-builder__portrait-progress"
}, su = ["value"], cu = { class: "npc-builder__portrait-strip" }, lu = [
	"aria-label",
	"title",
	"onClick"
], uu = ["src"], du = { class: "npc-builder__field" }, fu = ["placeholder"], pu = {
	key: 2,
	class: "npc-builder__quick-traits"
}, mu = ["onClick"], hu = {
	key: 3,
	class: "npc-builder__quick-traits"
}, gu = ["onClick"], _u = { class: "npc-builder__portrait-gallery-view" }, vu = { class: "npc-builder__portrait-gallery-summary" }, yu = { key: 0 }, bu = { key: 1 }, xu = { class: "npc-builder__portrait-grid" }, Su = ["title", "onClick"], Cu = { class: "npc-builder__portrait-grid-image" }, wu = ["src"], Tu = /* @__PURE__ */ ur({
	__name: "NpcBuilderBuildTab",
	props: {
		bridge: {},
		isLoadingActors: { type: Boolean },
		isLoadingBaseDraft: { type: Boolean }
	},
	emits: ["careerDrop"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Uc(), { actorName: a, advancements: o, baseActors: s, careers: c, finalActorName: l, finalCareer: u, finalPortraitPath: d, grantTotals: f, optionalTraits: p, quickTraits: m, selectedBaseActor: h, selectedBaseActorUuid: g, selectedPortraitPath: _, selectedSpells: v, settings: y, suggestedActorName: b, traits: x, trappings: S } = Ys(i), C = /* @__PURE__ */ R(""), w = /* @__PURE__ */ R([]), T = /* @__PURE__ */ R(""), E = /* @__PURE__ */ R(!1), D = /* @__PURE__ */ R(!1), O = /* @__PURE__ */ R(null), ee = 0, k = Y(() => {
			let e = C.value.trim().toLocaleLowerCase();
			return e ? s.value.filter((t) => t.name.toLocaleLowerCase().includes(e)) : s.value;
		}), te = Y({
			get: () => g.value,
			set: (e) => {
				i.selectBaseActorUuid(e);
			}
		}), ne = Y(() => {
			let e = new Set(p.value.map((e) => he(e.name)));
			return m.value.filter((t) => !e.has(he(t.name)));
		}), re = Y(() => {
			let e = 0;
			for (let t of c.value) e += t.quantity;
			return e;
		}), ie = Y(() => S.value.filter((e) => !e.ignored)), A = Y(() => sl({
			careers: c.value,
			selectedBaseActor: h.value
		})), j = Y(() => fl([...A.value, ...w.value])), ae = Y(() => j.value.slice(0, 10)), oe = Y(() => Math.max(0, j.value.length - ae.value.length)), se = Y(() => j.value.find((e) => e.img === d.value)?.key ?? ""), ce = Y(() => j.value.find((e) => e.img === d.value) ?? null), le = Y(() => {
			let e = O.value;
			return e ? e.maxDirectories <= 0 ? e.phase === "ready" ? 100 : 4 : Math.min(100, Math.round(e.directoriesVisited / e.maxDirectories * 100)) : 0;
		}), ue = Y(() => {
			let e = O.value;
			return e ? e.phase === "ready" ? `${e.candidatesFound} options found` : e.phase === "filesystem" ? e.maxDirectories <= 0 ? `${e.directoriesVisited} directories - ${e.currentLocation}` : `${e.directoriesVisited}/${e.maxDirectories} directories - ${e.currentLocation}` : e.currentLocation : "";
		});
		Un(() => [
			h.value?.uuid ?? "",
			y.value.searchCompendiumPortraitAssets,
			y.value.searchFoundryPortraitAssets,
			c.value.map((e) => e.uuid).join("|")
		], () => {
			P();
		}, { immediate: !0 }), Un([
			j,
			_,
			D
		], () => {
			_.value && !D.value && !cl(_.value, j.value) && i.selectPortrait("");
		}, { immediate: !0 });
		function de(e) {
			return pe(e);
		}
		function fe(e) {
			return pe(e);
		}
		function pe(e) {
			return x.value.some((t) => me(t.name, e.name));
		}
		function me(e, t) {
			return he(e) === he(t);
		}
		function he(e) {
			return e.trim().toLocaleLowerCase();
		}
		function ge(e, t) {
			let n = t.target;
			n && i.setCareerQuantity(e, Number(n.value));
		}
		function _e(e) {
			let t = e.slice(0, 3).join(", "), n = e.length - 3;
			return e.length ? n > 0 ? `${t}, +${n}` : t : "-";
		}
		function ve(e) {
			return e.split(/\s+/).map((e) => e.at(0)).filter(Boolean).slice(0, 2).join("").toLocaleUpperCase();
		}
		function ye(e) {
			i.setQuickTraitSelected(e, !de(e));
		}
		function be(e) {
			i.setOptionalTraitSelected(e, !fe(e));
		}
		function xe(e) {
			i.selectPortrait(e.img);
		}
		function Se(e) {
			xe(e), E.value = !1;
		}
		function Ce(e) {
			return `${e.label}\n${e.img}`;
		}
		async function P() {
			let e = ee + 1;
			if (ee = e, !y.value.searchCompendiumPortraitAssets && !y.value.searchFoundryPortraitAssets) {
				w.value = [], O.value = null;
				return;
			}
			if (!h.value && !c.value.length) {
				w.value = [], O.value = null;
				return;
			}
			D.value = !0, w.value = [], O.value = {
				candidatesFound: 0,
				currentLocation: "Preparing portrait search",
				directoriesVisited: 0,
				maxDirectories: 0,
				phase: "world-documents"
			};
			try {
				let t = await n.bridge.listFoundryPortraitCandidates({
					careers: c.value,
					includeCompendiumAssets: y.value.searchCompendiumPortraitAssets,
					includeFilePickerAssets: y.value.searchFoundryPortraitAssets,
					selectedBaseActor: h.value
				}, (t) => {
					ee === e && (O.value = t);
				});
				ee === e && (w.value = t);
			} catch (t) {
				ee === e && (T.value = Te(t));
			} finally {
				ee === e && (D.value = !1);
			}
		}
		async function we(e) {
			T.value = "";
			try {
				i.selectBaseActor(await n.bridge.resolveActorDrop(e));
			} catch (e) {
				T.value = Te(e);
			}
		}
		function Te(e) {
			return e instanceof Error ? e.message : "The NPC Builder could not resolve that Actor drop.";
		}
		return (t, n) => (W(), G("section", Sl, [
			K("div", Cl, [K("section", wl, [
				n[9] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "1"), K("h2", null, "Base Actor")], -1),
				K("label", Tl, [n[7] ||= K("span", null, "Search world actors", -1), B(K("input", {
					"onUpdate:modelValue": n[0] ||= (e) => C.value = e,
					placeholder: "Filter actors",
					type: "search"
				}, null, 512), [[Qo, C.value]])]),
				K("label", El, [n[8] ||= K("span", null, "Base statblock", -1), B(K("select", {
					"onUpdate:modelValue": n[1] ||= (e) => te.value = e,
					disabled: e.isLoadingActors
				}, [K("option", Ol, N(e.isLoadingActors ? "Loading actors..." : "Choose an actor"), 1), (W(!0), G(H, null, V(k.value, (e) => (W(), G("option", {
					key: e.uuid,
					value: e.uuid
				}, N(e.name), 9, kl))), 128))], 8, Dl), [[ts, te.value]])]),
				q(xl, {
					class: "npc-builder__drop",
					description: "Use any world Actor as the starting statblock.",
					title: "Drop Actor",
					onDropData: we
				}),
				T.value ? (W(), G("p", Al, N(T.value), 1)) : J("", !0),
				z(h) ? (W(), G("article", jl, [K("div", Ml, [z(h).img ? (W(), G("img", {
					key: 0,
					src: z(h).img,
					alt: ""
				}, null, 8, Nl)) : (W(), G("span", Pl, N(ve(z(h).name)), 1))]), K("div", null, [K("strong", null, N(z(h).name), 1), K("span", null, [
					pa(N(z(h).species || "Species not found") + " ", 1),
					z(h).type ? (W(), G(H, { key: 0 }, [pa(" - " + N(z(h).type), 1)], 64)) : J("", !0),
					e.isLoadingBaseDraft ? (W(), G(H, { key: 1 }, [pa("loading...")], 64)) : J("", !0)
				])])])) : J("", !0)
			]), K("section", Fl, [
				n[15] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "2"), K("h2", null, "Career Queue")], -1),
				q(xl, {
					class: "npc-builder__drop npc-builder__drop--career",
					description: "The last queued career drives the preview image.",
					title: "Drop Career Items",
					onDropData: n[2] ||= (e) => r("careerDrop", e)
				}),
				z(c).length ? (W(), G("ol", Il, [(W(!0), G(H, null, V(z(c), (e, t) => (W(), G("li", { key: e.uuid }, [
					K("div", Ll, [e.img ? (W(), G("img", {
						key: 0,
						src: e.img,
						alt: ""
					}, null, 8, Rl)) : (W(), G("span", zl, N(ve(e.name)), 1))]),
					K("div", Bl, [
						K("strong", null, N(e.name), 1),
						K("span", null, [pa(N(e.careerGroup || "Career") + " ", 1), e.level === null ? J("", !0) : (W(), G(H, { key: 0 }, [pa(" level " + N(e.level), 1)], 64))]),
						K("dl", Vl, [
							K("div", null, [n[10] ||= K("dt", null, "Characteristics", -1), K("dd", null, N(_e(e.grants.characteristics)), 1)]),
							K("div", null, [n[11] ||= K("dt", null, "Skills", -1), K("dd", null, N(_e(e.grants.skills)), 1)]),
							K("div", null, [n[12] ||= K("dt", null, "Talents", -1), K("dd", null, N(_e(e.grants.talents)), 1)]),
							K("div", null, [n[13] ||= K("dt", null, "Trappings", -1), K("dd", null, N(_e(e.grants.trappings)), 1)])
						])
					]),
					K("label", null, [n[14] ||= K("span", null, "Qty", -1), K("input", {
						value: e.quantity,
						min: "1",
						type: "number",
						onInput: (e) => ge(t, e)
					}, null, 40, Hl)]),
					K("div", Ul, [
						K("button", {
							disabled: t === 0,
							title: "Move career earlier",
							type: "button",
							onClick: (e) => z(i).moveCareer(t, -1)
						}, " Up ", 8, Wl),
						K("button", {
							disabled: t === z(c).length - 1,
							title: "Move career later",
							type: "button",
							onClick: (e) => z(i).moveCareer(t, 1)
						}, " Down ", 8, Gl),
						K("button", {
							type: "button",
							onClick: (e) => z(i).removeCareer(t)
						}, " Remove ", 8, Kl)
					])
				]))), 128))])) : (W(), G("p", ql, "No careers queued yet."))
			])]),
			K("aside", Jl, [K("section", Yl, [
				K("button", {
					class: "npc-builder__portrait",
					disabled: !j.value.length,
					title: "Open portrait gallery",
					type: "button",
					onClick: n[3] ||= (e) => E.value = !0
				}, [z(d) ? (W(), G("img", {
					key: 0,
					src: z(d),
					alt: ""
				}, null, 8, Zl)) : z(u) ? (W(), G("strong", Ql, N(ve(z(u).name)), 1)) : (W(), G("span", $l, "No portrait selected"))], 8, Xl),
				z(d) ? (W(), G("p", eu, [ce.value ? (W(), G("strong", tu, N(ce.value.label), 1)) : J("", !0), K("span", { title: z(d) }, N(z(d)), 9, nu)])) : J("", !0),
				j.value.length || D.value ? (W(), G("section", ru, [
					K("div", null, [n[16] ||= K("h2", null, "Portrait", -1), D.value ? (W(), G("span", iu, "Finding assets...")) : (W(), G("span", au, N(j.value.length) + " options", 1))]),
					D.value && O.value ? (W(), G("div", ou, [K("progress", {
						value: le.value,
						max: "100"
					}, null, 8, su), K("span", null, N(ue.value), 1)])) : J("", !0),
					K("div", cu, [(W(!0), G(H, null, V(ae.value, (e) => (W(), G("button", {
						key: e.key,
						"aria-label": Ce(e),
						class: M({ "is-active": e.key === se.value }),
						title: Ce(e),
						type: "button",
						onClick: (t) => xe(e)
					}, [K("img", {
						src: e.img,
						alt: ""
					}, null, 8, uu)], 10, lu))), 128)), oe.value > 0 ? (W(), G("button", {
						key: 0,
						class: "npc-builder__portrait-more",
						type: "button",
						onClick: n[4] ||= (e) => E.value = !0
					}, " +" + N(oe.value), 1)) : J("", !0)])
				])) : J("", !0),
				K("label", du, [n[17] ||= K("span", null, "NPC name", -1), B(K("input", {
					"onUpdate:modelValue": n[5] ||= (e) => /* @__PURE__ */ L(a) ? a.value = e : null,
					placeholder: z(b),
					type: "text"
				}, null, 8, fu), [[Qo, z(a)]])]),
				z(p).length ? (W(), G("section", pu, [K("div", null, [n[18] ||= K("h2", null, "Optional Traits", -1), K("span", null, N(z(p).length) + " from base statblock", 1)]), (W(!0), G(H, null, V(z(p), (e) => (W(), G("button", {
					key: e.uuid,
					class: M({ "is-active": fe(e) }),
					type: "button",
					onClick: (t) => be(e)
				}, N(e.name), 11, mu))), 128))])) : J("", !0),
				ne.value.length ? (W(), G("section", hu, [K("div", null, [n[19] ||= K("h2", null, "Quick Traits", -1), K("span", null, N(ne.value.length) + " configured", 1)]), (W(!0), G(H, null, V(ne.value, (e) => (W(), G("button", {
					key: e.uuid,
					class: M({ "is-active": de(e) }),
					type: "button",
					onClick: (t) => ye(e)
				}, N(e.name), 11, gu))), 128))])) : J("", !0),
				K("dl", null, [
					K("div", null, [n[20] ||= K("dt", null, "Build name", -1), K("dd", null, N(z(l)), 1)]),
					K("div", null, [n[21] ||= K("dt", null, "Base actor", -1), K("dd", null, N(z(h)?.name ?? "Not selected"), 1)]),
					K("div", null, [n[22] ||= K("dt", null, "Final career", -1), K("dd", null, N(z(u)?.name ?? "Not queued"), 1)]),
					K("div", null, [n[23] ||= K("dt", null, "Career items", -1), K("dd", null, N(re.value), 1)]),
					K("div", null, [n[24] ||= K("dt", null, "Apply", -1), K("dd", null, N(z(o).length) + " advance rows, " + N(ie.value.length) + " trappings, " + N(z(x).length) + " traits, " + N(z(v).length) + " spells ", 1)]),
					K("div", null, [n[25] ||= K("dt", null, "Extracted grants", -1), K("dd", null, N(z(f).characteristics) + " characteristics, " + N(z(f).skills) + " skills, " + N(z(f).talents) + " talents, " + N(z(f).trappings) + " trappings ", 1)])
				])
			])]),
			q(qc, {
				open: E.value,
				title: "Portrait Gallery",
				onClose: n[6] ||= (e) => E.value = !1
			}, {
				default: In(() => [K("div", _u, [K("div", vu, [K("strong", null, N(j.value.length) + " portrait options", 1), D.value ? (W(), G("span", yu, "Finding assets...")) : (W(), G("span", bu, "Click an image to use it for the generated NPC."))]), K("div", xu, [(W(!0), G(H, null, V(j.value, (e) => (W(), G("button", {
					key: e.key,
					class: M({ "is-active": e.key === se.value }),
					title: Ce(e),
					type: "button",
					onClick: (t) => Se(e)
				}, [K("span", Cu, [K("img", {
					src: e.img,
					alt: ""
				}, null, 8, wu)]), K("span", null, N(e.label), 1)], 10, Su))), 128))])])]),
				_: 1
			}, 8, ["open"])
		]));
	}
}), Eu = { class: "npc-builder__settings" }, Du = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, Ou = {
	key: 1,
	class: "npc-builder__message"
}, ku = { class: "npc-builder__panel" }, Au = { class: "npc-builder__folder-setting" }, ju = { class: "npc-builder__field" }, Mu = ["value"], Nu = { class: "npc-builder__field" }, Pu = ["disabled"], Fu = { class: "npc-builder__folder-setting" }, Iu = { class: "npc-builder__field" }, Lu = ["value"], Ru = { class: "npc-builder__field" }, zu = ["disabled"], Bu = { class: "npc-builder__panel" }, Vu = { class: "npc-builder__folder-setting" }, Hu = { class: "npc-builder__field" }, Uu = ["value"], Wu = { class: "npc-builder__field" }, Gu = ["disabled"], Ku = ["disabled"], qu = { class: "npc-builder__panel" }, Ju = { class: "npc-builder__check" }, Yu = { class: "npc-builder__panel" }, Xu = { class: "npc-builder__check" }, Zu = { class: "npc-builder__check" }, Qu = { class: "npc-builder__check" }, $u = { class: "npc-builder__panel" }, ed = { class: "npc-builder__check" }, td = { class: "npc-builder__check" }, nd = { class: "npc-builder__check" }, rd = { class: "npc-builder__check" }, id = { class: "npc-builder__check" }, ad = { class: "npc-builder__panel" }, od = { class: "npc-builder__check" }, sd = { class: "npc-builder__panel" }, cd = { class: "npc-builder__field" }, ld = { class: "npc-builder__check" }, ud = ["disabled"], dd = ["disabled"], fd = /* @__PURE__ */ ur({
	__name: "NpcBuilderSettingsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Uc(), { actorFolders: r, itemFolders: i, settings: a } = Ys(n), o = /* @__PURE__ */ R(""), s = /* @__PURE__ */ R(""), c = /* @__PURE__ */ R(!1), l = /* @__PURE__ */ R(""), u = /* @__PURE__ */ R(""), d = /* @__PURE__ */ R("");
		async function f() {
			await h({
				ensureFolder: t.bridge.ensureActorFolder,
				name: o.value,
				refresh: g,
				setFolderUuid: (e) => {
					a.value.baseActorFolderUuid = e;
				}
			});
		}
		async function p() {
			await h({
				ensureFolder: t.bridge.ensureActorFolder,
				name: l.value,
				refresh: g,
				setFolderUuid: (e) => {
					a.value.outputActorFolderUuid = e;
				}
			});
		}
		async function m() {
			await h({
				ensureFolder: t.bridge.ensureItemFolder,
				name: u.value,
				refresh: _,
				setFolderUuid: (e) => {
					a.value.quickTraitFolderUuid = e;
				}
			}), await y();
		}
		async function h(e) {
			c.value = !0, s.value = "", d.value = "";
			try {
				let r = await e.ensureFolder(e.name);
				await e.refresh(), e.setFolderUuid(r.uuid), n.hydrateSettings(await t.bridge.saveSettings(b())), d.value = `Using folder "${r.name}".`;
			} catch (e) {
				s.value = w(e);
			} finally {
				c.value = !1;
			}
		}
		async function g() {
			n.hydrateActorFolders(await t.bridge.listActorFolders());
		}
		async function _() {
			n.hydrateItemFolders(await t.bridge.listItemFolders());
		}
		async function v() {
			n.hydrateBaseActors(await t.bridge.listBaseActors(a.value));
		}
		async function y() {
			n.hydrateQuickTraits(await t.bridge.listQuickTraits(a.value));
		}
		function b() {
			return {
				allowBaseActorCharacteristics: a.value.allowBaseActorCharacteristics,
				allowBaseActorSkills: a.value.allowBaseActorSkills,
				allowBaseActorTalents: a.value.allowBaseActorTalents,
				allowBaseActorTraits: a.value.allowBaseActorTraits,
				allowBaseActorTrappings: a.value.allowBaseActorTrappings,
				askForLinkedSkillSpecializations: a.value.askForLinkedSkillSpecializations,
				autoSelectGrantedSpells: a.value.autoSelectGrantedSpells,
				baseActorFolderUuid: a.value.baseActorFolderUuid,
				includeSpeciesInName: a.value.includeSpeciesInName,
				lowerCareerMode: a.value.lowerCareerMode,
				outputActorFolderUuid: a.value.outputActorFolderUuid,
				quickTraitFolderUuid: a.value.quickTraitFolderUuid,
				searchCompendiumPortraitAssets: a.value.searchCompendiumPortraitAssets,
				searchFoundryPortraitAssets: a.value.searchFoundryPortraitAssets,
				searchWebPortraitAssets: a.value.searchWebPortraitAssets
			};
		}
		async function x() {
			c.value = !0, s.value = "", d.value = "";
			try {
				n.hydrateSettings(await t.bridge.saveSettings(b())), n.hydrateQuickTraits(await t.bridge.importRecommendedQuickTraits(a.value)), d.value = "Recommended quick traits imported.";
			} catch (e) {
				s.value = w(e);
			} finally {
				c.value = !1;
			}
		}
		async function S() {
			c.value = !0, s.value = "", d.value = "";
			try {
				n.hydrateSettings(await t.bridge.saveSettings(b())), await Promise.all([v(), y()]), d.value = "Settings saved.";
			} catch (e) {
				s.value = w(e);
			} finally {
				c.value = !1;
			}
		}
		async function C() {
			c.value = !0, s.value = "", d.value = "";
			try {
				n.hydrateSettings(await t.bridge.saveSettings(Zs())), await Promise.all([v(), y()]), d.value = "Settings reset to defaults.";
			} catch (e) {
				s.value = w(e);
			} finally {
				c.value = !1;
			}
		}
		function w(e) {
			return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
		}
		return (e, t) => (W(), G("section", Eu, [
			s.value ? (W(), G("p", Du, N(s.value), 1)) : d.value ? (W(), G("p", Ou, N(d.value), 1)) : J("", !0),
			K("section", ku, [
				t[24] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "1"), K("h2", null, "Actor Sources")], -1),
				K("section", Au, [
					K("label", ju, [t[19] ||= K("span", null, "Base actor folder", -1), B(K("select", { "onUpdate:modelValue": t[0] ||= (e) => z(a).baseActorFolderUuid = e }, [t[18] ||= K("option", { value: "" }, "All world actors", -1), (W(!0), G(H, null, V(z(r), (e) => (W(), G("option", {
						key: e.uuid,
						value: e.uuid
					}, N(e.name), 9, Mu))), 128))], 512), [[ts, z(a).baseActorFolderUuid]])]),
					K("label", Nu, [t[20] ||= K("span", null, "Create or use by name", -1), B(K("input", {
						"onUpdate:modelValue": t[1] ||= (e) => o.value = e,
						placeholder: "Folder name",
						type: "text"
					}, null, 512), [[Qo, o.value]])]),
					K("button", {
						disabled: c.value || !o.value.trim(),
						type: "button",
						onClick: f
					}, " Save ", 8, Pu)
				]),
				K("section", Fu, [
					K("label", Iu, [t[22] ||= K("span", null, "Output actor folder", -1), B(K("select", { "onUpdate:modelValue": t[2] ||= (e) => z(a).outputActorFolderUuid = e }, [t[21] ||= K("option", { value: "" }, "Foundry default location", -1), (W(!0), G(H, null, V(z(r), (e) => (W(), G("option", {
						key: e.uuid,
						value: e.uuid
					}, N(e.name), 9, Lu))), 128))], 512), [[ts, z(a).outputActorFolderUuid]])]),
					K("label", Ru, [t[23] ||= K("span", null, "Create or use by name", -1), B(K("input", {
						"onUpdate:modelValue": t[3] ||= (e) => l.value = e,
						placeholder: "Folder name",
						type: "text"
					}, null, 512), [[Qo, l.value]])]),
					K("button", {
						disabled: c.value || !l.value.trim(),
						type: "button",
						onClick: p
					}, " Save ", 8, zu)
				])
			]),
			K("section", Bu, [
				t[28] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "2"), K("h2", null, "Quick Traits")], -1),
				K("section", Vu, [
					K("label", Hu, [t[26] ||= K("span", null, "Quick traits folder", -1), B(K("select", { "onUpdate:modelValue": t[4] ||= (e) => z(a).quickTraitFolderUuid = e }, [t[25] ||= K("option", { value: "" }, "No quick traits folder", -1), (W(!0), G(H, null, V(z(i), (e) => (W(), G("option", {
						key: e.uuid,
						value: e.uuid
					}, N(e.name), 9, Uu))), 128))], 512), [[ts, z(a).quickTraitFolderUuid]])]),
					K("label", Wu, [t[27] ||= K("span", null, "Create or use by name", -1), B(K("input", {
						"onUpdate:modelValue": t[5] ||= (e) => u.value = e,
						placeholder: "Folder name",
						type: "text"
					}, null, 512), [[Qo, u.value]])]),
					K("button", {
						disabled: c.value || !u.value.trim(),
						type: "button",
						onClick: m
					}, " Save ", 8, Gu)
				]),
				K("button", {
					disabled: c.value || !z(a).quickTraitFolderUuid,
					type: "button",
					onClick: x
				}, " Import Recommended Quick Traits ", 8, Ku)
			]),
			K("section", qu, [t[30] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "3"), K("h2", null, "Default Naming")], -1), K("label", Ju, [B(K("input", {
				"onUpdate:modelValue": t[6] ||= (e) => z(a).includeSpeciesInName = e,
				type: "checkbox"
			}, null, 512), [[$o, z(a).includeSpeciesInName]]), t[29] ||= K("span", null, "Include species in suggested names", -1)])]),
			K("section", Yu, [
				t[34] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "4"), K("h2", null, "Portrait Suggestions")], -1),
				K("label", Xu, [B(K("input", {
					"onUpdate:modelValue": t[7] ||= (e) => z(a).searchFoundryPortraitAssets = e,
					type: "checkbox"
				}, null, 512), [[$o, z(a).searchFoundryPortraitAssets]]), t[31] ||= K("span", null, "Search the Foundry file picker for portrait suggestions", -1)]),
				K("label", Zu, [B(K("input", {
					"onUpdate:modelValue": t[8] ||= (e) => z(a).searchCompendiumPortraitAssets = e,
					type: "checkbox"
				}, null, 512), [[$o, z(a).searchCompendiumPortraitAssets]]), t[32] ||= K("span", null, "Search Actor and Item compendiums for portrait suggestions", -1)]),
				K("label", Qu, [B(K("input", {
					"onUpdate:modelValue": t[9] ||= (e) => z(a).searchWebPortraitAssets = e,
					disabled: "",
					type: "checkbox"
				}, null, 512), [[$o, z(a).searchWebPortraitAssets]]), t[33] ||= K("span", null, "Search the web for portrait suggestions (later)", -1)])
			]),
			K("section", $u, [
				t[40] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "5"), K("h2", null, "Base Actor Features")], -1),
				K("label", ed, [B(K("input", {
					"onUpdate:modelValue": t[10] ||= (e) => z(a).allowBaseActorCharacteristics = e,
					type: "checkbox"
				}, null, 512), [[$o, z(a).allowBaseActorCharacteristics]]), t[35] ||= K("span", null, "Show base actor characteristics", -1)]),
				K("label", td, [B(K("input", {
					"onUpdate:modelValue": t[11] ||= (e) => z(a).allowBaseActorSkills = e,
					type: "checkbox"
				}, null, 512), [[$o, z(a).allowBaseActorSkills]]), t[36] ||= K("span", null, "Show base actor skills", -1)]),
				K("label", nd, [B(K("input", {
					"onUpdate:modelValue": t[12] ||= (e) => z(a).allowBaseActorTalents = e,
					type: "checkbox"
				}, null, 512), [[$o, z(a).allowBaseActorTalents]]), t[37] ||= K("span", null, "Show base actor talents", -1)]),
				K("label", rd, [B(K("input", {
					"onUpdate:modelValue": t[13] ||= (e) => z(a).allowBaseActorTrappings = e,
					type: "checkbox"
				}, null, 512), [[$o, z(a).allowBaseActorTrappings]]), t[38] ||= K("span", null, "Show base actor trappings", -1)]),
				K("label", id, [B(K("input", {
					"onUpdate:modelValue": t[14] ||= (e) => z(a).allowBaseActorTraits = e,
					type: "checkbox"
				}, null, 512), [[$o, z(a).allowBaseActorTraits]]), t[39] ||= K("span", null, "Show base actor traits", -1)])
			]),
			K("section", ad, [t[42] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "6"), K("h2", null, "Magic and Spells")], -1), K("label", od, [B(K("input", {
				"onUpdate:modelValue": t[15] ||= (e) => z(a).autoSelectGrantedSpells = e,
				type: "checkbox"
			}, null, 512), [[$o, z(a).autoSelectGrantedSpells]]), t[41] ||= K("span", null, "Select detected Lore spells by default", -1)])]),
			K("section", sd, [
				t[46] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "7"), K("h2", null, "Other Settings")], -1),
				K("label", cd, [t[44] ||= K("span", null, "Lower career handling", -1), B(K("select", { "onUpdate:modelValue": t[16] ||= (e) => z(a).lowerCareerMode = e }, [...t[43] ||= [
					K("option", { value: "prompt" }, "Prompt when candidates are found", -1),
					K("option", { value: "auto-add-all" }, " Automatically add all lower-tier matches ", -1),
					K("option", { value: "never" }, "Only add dropped careers", -1)
				]], 512), [[ts, z(a).lowerCareerMode]])]),
				K("label", ld, [B(K("input", {
					"onUpdate:modelValue": t[17] ||= (e) => z(a).askForLinkedSkillSpecializations = e,
					type: "checkbox"
				}, null, 512), [[$o, z(a).askForLinkedSkillSpecializations]]), t[45] ||= K("span", null, "Resolve linked career skill repeats separately", -1)]),
				K("button", {
					disabled: c.value,
					type: "button",
					onClick: S
				}, " Save Settings ", 8, ud),
				K("button", {
					disabled: c.value,
					type: "button",
					onClick: C
				}, " Reset to Defaults ", 8, dd)
			])
		]));
	}
}), pd = { class: "npc-builder__subview-stack" }, md = { class: "npc-builder__field" }, hd = ["onUpdate:modelValue"], gd = ["value"], _d = { class: "npc-builder__subview-actions" }, vd = /* @__PURE__ */ ur({
	__name: "MagicLoreResolutionPromptContent",
	props: { prompt: {} },
	emits: ["applyLores", "keepUnresolved"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (W(), G("div", pd, [
			r[4] ||= K("p", null, " Choose concrete magic Lores for ambiguous grants before automatic spells are detected. Unresolved grants can still use manually dropped spells. ", -1),
			(W(!0), G(H, null, V(e.prompt.rows, (e) => (W(), G("section", {
				key: e.resolutionKey,
				class: "npc-builder__resolution-row"
			}, [K("div", null, [K("strong", null, N(e.grantLabel), 1), K("small", null, N(e.sourceLabel) + " - " + N(e.rawLore || "Any Lore"), 1)]), K("label", md, [r[3] ||= K("span", null, "Lore", -1), B(K("select", { "onUpdate:modelValue": (t) => e.selectedLore = t }, [r[2] ||= K("option", { value: "" }, "Leave unresolved", -1), (W(!0), G(H, null, V(e.options, (e) => (W(), G("option", {
				key: e.key,
				value: e.value
			}, N(e.label) + N(e.wind && e.wind !== "None" ? ` (${e.wind})` : ""), 9, gd))), 128))], 8, hd), [[ts, e.selectedLore]])])]))), 128)),
			K("div", _d, [K("button", {
				type: "button",
				onClick: r[0] ||= (e) => n("keepUnresolved")
			}, " Keep Unresolved "), K("button", {
				type: "button",
				onClick: r[1] ||= (e) => n("applyLores")
			}, "Apply Lores")])
		]));
	}
}), yd = { class: "npc-builder__stack" }, bd = { class: "npc-builder__panel" }, xd = {
	key: 0,
	class: "npc-builder__empty"
}, Sd = {
	key: 1,
	class: "npc-builder__magic-grants"
}, Cd = { key: 0 }, wd = { key: 1 }, Td = {
	key: 2,
	class: "npc-builder__panel-actions"
}, Ed = ["disabled"], Dd = { class: "npc-builder__panel" }, Od = { class: "npc-builder__panel-actions" }, kd = ["disabled"], Ad = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, jd = {
	key: 1,
	class: "npc-builder__message npc-builder__message--error"
}, Md = {
	key: 2,
	class: "npc-builder__table"
}, Nd = ["checked", "onChange"], Pd = { class: "npc-builder__spell-name" }, Fd = { class: "npc-builder__spell-icon" }, Id = ["src"], Ld = ["onClick"], Rd = { key: 1 }, zd = {
	key: 3,
	class: "npc-builder__empty"
}, Bd = /* @__PURE__ */ ur({
	__name: "NpcBuilderSpellsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Uc(), { magicGrants: r, spells: i, selectedSpells: a } = Ys(n), o = /* @__PURE__ */ R(""), s = /* @__PURE__ */ R(!1), c = /* @__PURE__ */ R(!1), l = /* @__PURE__ */ R([]), u = /* @__PURE__ */ R(null), d = 0, f = Y(() => r.value.filter((e) => e.isAmbiguous)), p = Y(() => r.value.length - f.value.length);
		Tr(() => {
			b(), y();
		}), Un(() => r.value.map((e) => `${e.kind}:${e.sourceName}:${e.rawLore}`).sort().join("|"), () => {
			y();
		});
		function m(e) {
			return e.kind === "arcane-magic" ? "Arcane Magic" : e.kind === "petty-magic" ? "Petty Magic" : "Spellcaster";
		}
		function h(e) {
			return e.source === "talent" ? "Talent" : "Trait";
		}
		function g(e) {
			return e.source === "custom" ? "Dropped" : e.sourceLabel;
		}
		function _(e) {
			return `${m(e)} from ${e.sourceName}`;
		}
		function v(e, t) {
			let r = t.target;
			r && n.setSpellSelected(e.key, r.checked);
		}
		async function y() {
			let e = d + 1;
			if (d = e, !r.value.length) {
				n.hydrateDetectedSpells([]);
				return;
			}
			s.value = !0, o.value = "";
			try {
				let i = await t.bridge.listSpellsForMagicGrants(r.value);
				d === e && n.hydrateDetectedSpells(i);
			} catch (t) {
				d === e && (o.value = T(t));
			} finally {
				d === e && (s.value = !1);
			}
		}
		async function b() {
			if (!(l.value.length || c.value)) {
				c.value = !0;
				try {
					l.value = await t.bridge.listMagicLoreOptions();
				} catch (e) {
					o.value = T(e);
				} finally {
					c.value = !1;
				}
			}
		}
		async function x() {
			o.value = "", await b(), u.value = { rows: f.value.map((e) => ({
				grantLabel: _(e),
				options: oc(e, l.value),
				rawLore: e.rawLore,
				resolutionKey: e.resolutionKey,
				selectedLore: "",
				sourceLabel: h(e)
			})) };
		}
		function S() {
			let e = u.value;
			if (e) {
				for (let t of e.rows) n.setMagicGrantLoreResolution(t.resolutionKey, t.selectedLore);
				u.value = null, y();
			}
		}
		function C() {
			u.value = null;
		}
		async function w(e) {
			o.value = "";
			try {
				n.addCustomSpell(await t.bridge.resolveSpellDrop(e));
			} catch (e) {
				o.value = T(e);
			}
		}
		function T(e) {
			return e instanceof Error ? e.message : "The NPC Builder could not finish that spell action.";
		}
		return (e, t) => (W(), G("section", yd, [
			q(qc, {
				open: u.value !== null,
				title: "Resolve Magic Lores",
				onClose: C
			}, {
				default: In(() => [u.value ? (W(), aa(vd, {
					key: 0,
					prompt: u.value,
					onApplyLores: S,
					onKeepUnresolved: C
				}, null, 8, ["prompt"])) : J("", !0)]),
				_: 1
			}, 8, ["open"]),
			K("section", bd, [
				t[0] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "1"), K("h2", null, "Magic Access")], -1),
				z(r).length ? (W(), G("div", Sd, [(W(!0), G(H, null, V(z(r), (e) => (W(), G("article", { key: `${e.source}:${e.sourceName}:${e.rawLore}` }, [
					K("strong", null, N(m(e)), 1),
					K("span", null, N(h(e)) + " - " + N(e.sourceName), 1),
					e.isAmbiguous ? (W(), G("small", Cd, " Needs Lore resolution before automatic spells can be found. ")) : (W(), G("small", wd, " Lore: " + N(e.rawLore || e.normalizedLore), 1))
				]))), 128))])) : (W(), G("p", xd, " No magic-enabling Talent or Trait is selected. ")),
				f.value.length ? (W(), G("div", Td, [K("button", {
					disabled: c.value,
					type: "button",
					onClick: x
				}, N(c.value ? "Loading Lores..." : "Resolve Lores"), 9, Ed)])) : J("", !0)
			]),
			K("section", Dd, [
				t[2] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "2"), K("h2", null, "Spells")], -1),
				q(xl, {
					class: "npc-builder__drop npc-builder__drop--career",
					description: "Add a specific Spell item regardless of detected Lores.",
					title: "Drop Spell Items",
					onDropData: w
				}),
				K("div", Od, [K("button", {
					disabled: s.value || !p.value,
					type: "button",
					onClick: y
				}, N(s.value ? "Finding spells..." : "Refresh Spells"), 9, kd), K("span", null, N(z(a).length) + " selected / " + N(z(i).length) + " found ", 1)]),
				o.value ? (W(), G("p", Ad, N(o.value), 1)) : J("", !0),
				f.value.length ? (W(), G("p", jd, N(f.value.length) + " magic grant" + N(f.value.length === 1 ? "" : "s") + " still need Lore resolution. You can still drop specific spells for now. ", 1)) : J("", !0),
				z(i).length ? (W(), G("div", Md, [t[1] ||= K("div", { class: "npc-builder__table-head npc-builder__table-head--spells" }, [
					K("span", null, "Use"),
					K("span", null, "Spell"),
					K("span", null, "Lore"),
					K("span", null, "Source"),
					K("span")
				], -1), (W(!0), G(H, null, V(z(i), (e) => (W(), G("article", {
					key: e.key,
					class: "npc-builder__spell-row"
				}, [
					K("input", {
						checked: e.selected,
						type: "checkbox",
						onChange: (t) => v(e, t)
					}, null, 40, Nd),
					K("div", Pd, [K("span", Fd, [e.img ? (W(), G("img", {
						key: 0,
						src: e.img,
						alt: ""
					}, null, 8, Id)) : J("", !0)]), K("strong", null, N(e.name), 1)]),
					K("span", null, N(e.loreName || "Unknown"), 1),
					K("span", null, N(g(e)), 1),
					e.source === "custom" ? (W(), G("button", {
						key: 0,
						type: "button",
						onClick: (t) => z(n).removeCustomSpell(e.key)
					}, " Remove ", 8, Ld)) : (W(), G("span", Rd))
				]))), 128))])) : (W(), G("p", zd, " No matching spells found yet. Drop specific spells here, or resolve a non-ambiguous magic Lore. "))
			])
		]));
	}
}), Vd = { class: "npc-builder__stack" }, Hd = { class: "npc-builder__panel" }, Ud = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, Wd = { class: "npc-builder__table" }, Gd = { class: "npc-builder__trait-name" }, Kd = { key: 0 }, qd = { key: 1 }, Jd = { class: "npc-builder__trait-config" }, Yd = { class: "npc-builder__mini-field" }, Xd = ["value", "onInput"], Zd = {
	key: 0,
	class: "npc-builder__mini-field"
}, Qd = ["value", "onChange"], $d = ["value"], ef = {
	key: 1,
	class: "npc-builder__mini-field"
}, tf = ["value", "onInput"], nf = ["onClick"], rf = { key: 1 }, af = /* @__PURE__ */ ur({
	__name: "NpcBuilderTraitsTab",
	props: {
		bridge: {},
		difficultyOptions: {}
	},
	setup(e) {
		let t = e, n = Uc(), { traits: r } = Ys(n), i = /* @__PURE__ */ R("");
		function a(e) {
			return e.source === "base" ? "Base" : e.source === "quick" ? "Quick" : e.source === "optional" ? "Optional" : "Custom";
		}
		function o(e) {
			e.source !== "base" && n.removeCustomTrait(e.key);
		}
		function s(e, t, r) {
			let i = r.target;
			i && n.setTraitConfig(e.key, { [t]: i.value });
		}
		async function c(e) {
			i.value = "";
			try {
				n.addCustomTrait(await t.bridge.resolveTraitDrop(e));
			} catch (e) {
				i.value = l(e);
			}
		}
		function l(e) {
			return e instanceof Error ? e.message : "The NPC Builder could not resolve that Trait drop.";
		}
		return (t, n) => (W(), G("section", Vd, [K("section", Hd, [
			n[3] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "1"), K("h2", null, "Traits")], -1),
			q(xl, {
				class: "npc-builder__drop npc-builder__drop--career",
				description: "Add creature traits or NPC trait items.",
				title: "Drop Trait Items",
				onDropData: c
			}),
			i.value ? (W(), G("p", Ud, N(i.value), 1)) : J("", !0),
			K("div", Wd, [n[2] ||= K("div", { class: "npc-builder__table-head npc-builder__table-head--traits" }, [
				K("span", null, "Name"),
				K("span", null, "Source"),
				K("span", null, "Config"),
				K("span")
			], -1), (W(!0), G(H, null, V(z(r), (t) => (W(), G("article", {
				key: t.key,
				class: "npc-builder__trait-row"
			}, [
				K("div", Gd, [
					K("strong", null, N(t.name), 1),
					t.config.rollable ? (W(), G("span", Kd, "Rollable")) : J("", !0),
					t.config.damage ? (W(), G("span", qd, "Damage")) : J("", !0)
				]),
				K("span", null, N(a(t)), 1),
				K("div", Jd, [
					K("label", Yd, [K("span", null, N(t.config.damage ? "Damage" : "Specification"), 1), K("input", {
						value: t.config.specification,
						placeholder: "None",
						type: "text",
						onInput: (e) => s(t, "specification", e)
					}, null, 40, Xd)]),
					t.config.rollable && !t.config.damage ? (W(), G("label", Zd, [n[0] ||= K("span", null, "Difficulty", -1), K("select", {
						value: t.config.defaultDifficulty,
						onChange: (e) => s(t, "defaultDifficulty", e)
					}, [(W(!0), G(H, null, V(e.difficultyOptions, (e) => (W(), G("option", {
						key: e.value,
						value: e.value
					}, N(e.label), 9, $d))), 128))], 40, Qd)])) : J("", !0),
					t.config.damage && t.config.dice ? (W(), G("label", ef, [n[1] ||= K("span", null, "Dice", -1), K("input", {
						value: t.config.dice,
						placeholder: "Optional",
						type: "text",
						onInput: (e) => s(t, "dice", e)
					}, null, 40, tf)])) : J("", !0)
				]),
				t.source === "base" ? (W(), G("span", rf)) : (W(), G("button", {
					key: 0,
					type: "button",
					onClick: (e) => o(t)
				}, " Remove ", 8, nf))
			]))), 128))])
		])]));
	}
}), of = { class: "npc-builder__stack" }, sf = { class: "npc-builder__panel" }, cf = { class: "npc-builder__panel-actions" }, lf = ["disabled"], uf = { key: 0 }, df = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, ff = { class: "npc-builder__table" }, pf = ["checked", "onChange"], mf = { class: "npc-builder__trapping-name" }, hf = { key: 0 }, gf = { class: "npc-builder__trapping-resolution" }, _f = ["value", "onChange"], vf = {
	key: 0,
	value: ""
}, yf = ["value"], bf = { key: 1 }, xf = ["value", "onInput"], Sf = ["onClick"], Cf = { key: 1 }, wf = "__blank-item__", Tf = /* @__PURE__ */ ur({
	__name: "NpcBuilderTrappingsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Uc(), { trappings: r } = Ys(n), i = /* @__PURE__ */ R(""), a = /* @__PURE__ */ R(!1), o = Y(() => r.value.filter((e) => !e.ignored && e.resolution.status === "unresolved"));
		Tr(() => {
			g();
		});
		function s(e) {
			return e.source === "base" ? "Base" : e.source === "career" ? "Career" : "Custom";
		}
		function c(e, t) {
			let r = t.target;
			r && n.setTrappingQuantity(e, Number(r.value));
		}
		function l(e, t) {
			let r = t.target;
			r && n.setTrappingIgnored(e, !r.checked);
		}
		function u(e) {
			return e.resolution.status === "matched" ? `Matched ${e.resolution.selectedName}` : e.resolution.status === "fallback" ? `Blank ${e.resolution.selectedName || e.name}` : e.resolution.candidates.length ? "Choose a match" : "Needs resolution";
		}
		function d(e) {
			return e.resolution.status === "fallback" ? wf : e.resolution.selectedCandidateUuid;
		}
		function f(e) {
			return e.source === "career";
		}
		function p(e) {
			return e.resolution.candidates.length > 0 || f(e);
		}
		function m(e) {
			return e.resolution.searchTerms.length <= 1 ? "" : `Options: ${e.resolution.searchTerms.join(" / ")}`;
		}
		function h(e, t) {
			let r = t.target;
			if (r?.value) {
				if (r.value === wf) {
					n.setTrappingFallback(e);
					return;
				}
				n.selectTrappingResolutionCandidate(e, r.value);
			}
		}
		async function g() {
			if (o.value.length) {
				a.value = !0, i.value = "";
				try {
					for (let e of o.value) n.setTrappingResolution(e.key, await t.bridge.resolveTrapping(e.name));
				} catch (e) {
					i.value = v(e);
				} finally {
					a.value = !1;
				}
			}
		}
		async function _(e) {
			i.value = "";
			try {
				n.addCustomTrapping(await t.bridge.resolveTrappingDrop(e));
			} catch (e) {
				i.value = v(e);
			}
		}
		function v(e) {
			return e instanceof Error ? e.message : "The NPC Builder could not resolve that Trapping drop.";
		}
		return (e, t) => (W(), G("section", of, [K("section", sf, [
			t[1] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "1"), K("h2", null, "Trappings")], -1),
			q(xl, {
				class: "npc-builder__drop npc-builder__drop--career",
				description: "Add weapons, armour, containers, or any other item.",
				title: "Drop Trapping Items",
				onDropData: _
			}),
			K("div", cf, [K("button", {
				disabled: a.value || !o.value.length,
				type: "button",
				onClick: g
			}, N(a.value ? "Resolving..." : "Resolve Trappings"), 9, lf), o.value.length ? (W(), G("span", uf, N(o.value.length) + " unresolved ", 1)) : J("", !0)]),
			i.value ? (W(), G("p", df, N(i.value), 1)) : J("", !0),
			K("div", ff, [t[0] ||= K("div", { class: "npc-builder__table-head npc-builder__table-head--traps" }, [
				K("span", null, "Use"),
				K("span", null, "Name"),
				K("span", null, "Resolution"),
				K("span", null, "Type"),
				K("span", null, "Qty"),
				K("span", null, "Source"),
				K("span")
			], -1), (W(!0), G(H, null, V(z(r), (e) => (W(), G("article", {
				key: e.key,
				class: M(["npc-builder__trapping-row", { "is-ignored": e.ignored }])
			}, [
				K("input", {
					checked: !e.ignored,
					type: "checkbox",
					onChange: (t) => l(e.key, t)
				}, null, 40, pf),
				K("div", mf, [K("strong", null, N(e.name), 1), m(e) ? (W(), G("span", hf, N(m(e)), 1)) : J("", !0)]),
				K("div", gf, [p(e) ? (W(), G("select", {
					key: 0,
					value: d(e),
					onChange: (t) => h(e.key, t)
				}, [
					e.resolution.candidates.length ? (W(), G("option", vf, " Choose match ")) : J("", !0),
					(W(!0), G(H, null, V(e.resolution.candidates, (e) => (W(), G("option", {
						key: e.uuid,
						value: e.uuid
					}, N(e.name) + " (" + N(e.sourceLabel) + ") ", 9, yf))), 128)),
					f(e) ? (W(), G("option", {
						key: 1,
						value: wf
					}, " Blank Item ")) : J("", !0)
				], 40, _f)) : (W(), G("span", bf, N(u(e)), 1))]),
				K("span", null, N(e.resolution.selectedItemType || e.itemType || "trapping"), 1),
				K("input", {
					value: e.quantity,
					min: "1",
					type: "number",
					onInput: (t) => c(e.key, t)
				}, null, 40, xf),
				K("span", null, N(s(e)), 1),
				e.source === "custom" ? (W(), G("button", {
					key: 0,
					type: "button",
					onClick: (t) => z(n).removeCustomTrapping(e.key)
				}, " Remove ", 8, Sf)) : (W(), G("span", Cf))
			], 2))), 128))])
		])]));
	}
}), Ef = { class: "npc-builder__subview-stack" }, Df = [
	"checked",
	"disabled",
	"onChange"
], Of = { class: "npc-builder__subview-actions" }, kf = /* @__PURE__ */ ur({
	__name: "LowerCareerPromptContent",
	props: {
		candidateGroups: {},
		isCareerQueued: { type: Function },
		isLowerCareerSelected: { type: Function },
		prompt: {}
	},
	emits: [
		"addDroppedOnly",
		"addSelected",
		"lowerCareerSelected"
	],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (W(), G("div", Ef, [
			K("p", null, N(e.prompt.droppedCareer.name) + " appears to belong to the " + N(e.prompt.droppedCareer.careerGroup) + " career track. The following lower-tier candidates were found. ", 1),
			(W(!0), G(H, null, V(e.candidateGroups, (t) => (W(), G("section", {
				key: t.level,
				class: "npc-builder__candidate-group"
			}, [K("h3", null, "Tier " + N(t.level || "Unknown"), 1), (W(!0), G(H, null, V(t.candidates, (t) => (W(), G("label", {
				key: t.uuid,
				class: M(["npc-builder__candidate-row", { "is-queued": e.isCareerQueued(t.uuid) }])
			}, [K("input", {
				checked: e.isCareerQueued(t.uuid) || e.isLowerCareerSelected(t.uuid),
				disabled: e.isCareerQueued(t.uuid),
				type: "checkbox",
				onChange: (e) => n("lowerCareerSelected", t, e)
			}, null, 40, Df), K("span", null, [K("strong", null, N(t.name), 1), K("small", null, [pa(N(t.careerGroup || "Career") + " ", 1), e.isCareerQueued(t.uuid) ? (W(), G(H, { key: 0 }, [pa(" already queued ")], 64)) : J("", !0)])])], 2))), 128))]))), 128)),
			K("div", Of, [K("button", {
				type: "button",
				onClick: r[0] ||= (e) => n("addDroppedOnly")
			}, " Add Dropped Only "), K("button", {
				type: "button",
				onClick: r[1] ||= (e) => n("addSelected")
			}, "Add Selected")])
		]));
	}
}), Af = { class: "npc-builder__subview-stack" }, jf = { class: "npc-builder__field" }, Mf = ["onUpdate:modelValue"], Nf = ["value"], Pf = ["onUpdate:modelValue", "placeholder"], Ff = {
	key: 0,
	class: "npc-builder__suggestions"
}, If = { key: 0 }, Lf = ["onClick"], Rf = {
	key: 0,
	class: "npc-builder__linked-note"
}, zf = { class: "npc-builder__subview-actions" }, Bf = /* @__PURE__ */ ur({
	__name: "SkillResolutionPromptContent",
	props: {
		getSkillResolutionLabel: { type: Function },
		prompt: {},
		usesFreeformSkillSpecialization: { type: Function }
	},
	emits: [
		"addWithoutResolving",
		"applySpecializations",
		"chooseSkillSpecialization"
	],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (W(), G("div", Af, [
			r[4] ||= K("p", null, " Some Career skills need a specialization before they become concrete WFRP skills. Blank rows can be left unresolved and edited later. ", -1),
			(W(!0), G(H, null, V(e.prompt.rows, (t) => (W(), G("section", {
				key: t.resolutionKey,
				class: "npc-builder__resolution-row"
			}, [
				K("div", null, [K("strong", null, N(e.getSkillResolutionLabel(t)), 1), K("small", null, N(t.careerLabel), 1)]),
				K("label", jf, [r[3] ||= K("span", null, "Specialization", -1), t.options.length > 1 ? B((W(), G("select", {
					key: 0,
					"onUpdate:modelValue": (e) => t.resolvedSpecialization = e
				}, [r[2] ||= K("option", { value: "" }, "Leave unresolved", -1), (W(!0), G(H, null, V(t.options, (e) => (W(), G("option", {
					key: e,
					value: e
				}, N(e), 9, Nf))), 128))], 8, Mf)), [[ts, t.resolvedSpecialization]]) : B((W(), G("input", {
					key: 1,
					"onUpdate:modelValue": (e) => t.resolvedSpecialization = e,
					placeholder: t.suggestedSpecializations.length ? "Type or choose below" : t.specialization,
					type: "text"
				}, null, 8, Pf)), [[Qo, t.resolvedSpecialization]])]),
				e.usesFreeformSkillSpecialization(t) ? (W(), G("div", Ff, [t.isLoadingSuggestions ? (W(), G("small", If, "Finding known choices.")) : J("", !0), (W(!0), G(H, null, V(t.suggestedSpecializations, (e) => (W(), G("button", {
					key: `${t.resolutionKey}:${e}`,
					type: "button",
					onClick: (r) => n("chooseSkillSpecialization", t, e)
				}, N(e), 9, Lf))), 128))])) : J("", !0)
			]))), 128)),
			e.prompt.linkedRows.length ? (W(), G("div", Rf, N(e.prompt.linkedRows.length) + " linked skill specialization" + N(e.prompt.linkedRows.length === 1 ? "" : "s") + " will reuse earlier choices from this career chain. ", 1)) : J("", !0),
			K("div", zf, [K("button", {
				type: "button",
				onClick: r[0] ||= (e) => n("addWithoutResolving")
			}, " Add Without Resolving "), K("button", {
				type: "button",
				onClick: r[1] ||= (e) => n("applySpecializations")
			}, " Apply Specializations ")])
		]));
	}
}), Vf = { class: "npc-builder" }, Hf = { class: "npc-builder__header" }, Uf = { class: "npc-builder__header-actions" }, Wf = {
	"aria-label": "NPC Builder sections",
	class: "npc-builder__tabs"
}, Gf = ["disabled"], Kf = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, qf = {
	key: 1,
	class: "npc-builder__message"
}, Jf = /* @__PURE__ */ ur({
	__name: "NpcBuilderApp",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Uc(), { advancements: r, careers: i, finalActorName: a, finalPortraitPath: o, hasMagicAccess: s, selectedSpells: c, selectedBaseActor: l, selectedBaseActorUuid: u, settings: d, traits: f, trappings: p } = Ys(n), m = /* @__PURE__ */ R("builder"), h = /* @__PURE__ */ R(""), g = /* @__PURE__ */ R(""), _ = /* @__PURE__ */ R(!1), v = /* @__PURE__ */ R(!1), y = /* @__PURE__ */ R(!1), b = /* @__PURE__ */ R(!1), x = /* @__PURE__ */ R(null), S = /* @__PURE__ */ R(null), C = /* @__PURE__ */ R([]), w = Y(() => !!(l.value && i.value.length && !_.value && !v.value)), T = Y(() => {
			let e = x.value;
			if (!e) return [];
			let t = /* @__PURE__ */ new Map();
			for (let n of e.candidates) {
				let e = n.level ?? 0, r = t.get(e) ?? [];
				r.push(n), t.set(e, r);
			}
			return [...t.entries()].sort(([e], [t]) => e - t).map(([e, t]) => ({
				candidates: [...t].sort((e, t) => e.name.localeCompare(t.name)),
				level: e
			}));
		});
		Tr(async () => {
			y.value = !0;
			try {
				let [e, r, i, a] = await Promise.all([
					t.bridge.loadSettings(),
					t.bridge.listActorFolders(),
					t.bridge.listItemFolders(),
					t.bridge.listTraitDifficultyOptions()
				]);
				n.hydrateSettings(e), n.hydrateActorFolders(r), n.hydrateItemFolders(i), C.value = a, await Promise.all([ee(), k()]);
			} catch (e) {
				g.value = ge(e);
			} finally {
				y.value = !1;
			}
		}), Un(u, async (e) => {
			if (g.value = "", !e) {
				n.clearBaseDraftData();
				return;
			}
			b.value = !0;
			try {
				n.hydrateBaseActorDraftData(await t.bridge.loadBaseActorDraftData(e));
			} catch (e) {
				g.value = ge(e), n.clearBaseDraftData();
			} finally {
				b.value = !1;
			}
		});
		async function E() {
			if (!l.value || !i.value.length) return;
			_.value = !0, g.value = "", h.value = "Building actor from the selected draft.";
			let e = {
				actorName: a.value,
				advancements: r.value,
				baseActorUuid: l.value.uuid,
				careers: i.value,
				portraitPath: o.value,
				settings: d.value,
				spells: c.value,
				traits: f.value,
				trappings: p.value
			};
			try {
				h.value = `Created ${(await t.bridge.buildNpc(e)).name}.`, n.resetDraft(), m.value = "builder";
			} catch (e) {
				g.value = ge(e), h.value = "";
			} finally {
				_.value = !1;
			}
		}
		async function D(e) {
			await ie(e, async (e) => {
				await O(await t.bridge.resolveCareerDrop(e));
			});
		}
		async function O(e) {
			if (d.value.lowerCareerMode === "never") {
				te([{
					career: e,
					mode: "add-or-increment"
				}], {
					enableLinkedSkillResolution: !1,
					message: ""
				});
				return;
			}
			v.value = !0, h.value = "Checking for lower-tier career candidates.";
			try {
				let n = await t.bridge.findLowerCareerCandidates(e), r = n.filter((e) => !de(e.uuid));
				if (!r.length) {
					te([{
						career: e,
						mode: "add-or-increment"
					}], {
						enableLinkedSkillResolution: !1,
						message: ""
					}), h.value = "";
					return;
				}
				if (d.value.lowerCareerMode === "auto-add-all") {
					te([...r.map((e) => ({
						career: e,
						mode: "add-if-missing"
					})), {
						career: e,
						mode: "add-or-increment"
					}], {
						enableLinkedSkillResolution: !d.value.askForLinkedSkillSpecializations,
						message: `Added ${r.length} lower-tier career candidate${r.length === 1 ? "" : "s"}.`
					});
					return;
				}
				x.value = {
					candidates: n,
					droppedCareer: e,
					selectedUuids: r.map((e) => e.uuid)
				}, h.value = "";
			} finally {
				v.value = !1;
			}
		}
		async function ee() {
			n.hydrateBaseActors(await t.bridge.listBaseActors(d.value));
		}
		async function k() {
			n.hydrateQuickTraits(await t.bridge.listQuickTraits(d.value));
		}
		function te(e, t) {
			let n = j(e, t);
			if (n.rows.length) {
				S.value = n, oe(S.value);
				return;
			}
			se(e, t.message);
		}
		function ne() {
			let e = x.value;
			if (!e) return;
			let t = e.candidates.filter((t) => e.selectedUuids.includes(t.uuid));
			x.value = null, te([...t.map((e) => ({
				career: e,
				mode: "add-if-missing"
			})), {
				career: e.droppedCareer,
				mode: "add-or-increment"
			}], {
				enableLinkedSkillResolution: !d.value.askForLinkedSkillSpecializations,
				message: t.length > 0 ? `Added ${t.length} lower-tier career candidate${t.length === 1 ? "" : "s"}.` : ""
			});
		}
		function re() {
			let e = x.value;
			e && (x.value = null, te([{
				career: e.droppedCareer,
				mode: "add-or-increment"
			}], {
				enableLinkedSkillResolution: !1,
				message: ""
			}));
		}
		async function ie(e, t) {
			g.value = "";
			try {
				await t(e);
			} catch (e) {
				g.value = ge(e);
			}
		}
		function A() {
			let e = S.value;
			if (e) {
				for (let t of e.rows) {
					let e = t.resolvedSpecialization.trim() ? dc(t.baseName, t.resolvedSpecialization) : "";
					n.setSkillGrantResolution(t.resolutionKey, e);
				}
				for (let t of e.linkedRows) n.setSkillGrantResolution(t.resolutionKey, n.getSkillGrantResolution(t.linkedFromKey));
				S.value = null, se(e.entries, e.message);
			}
		}
		function j(e, t) {
			let n = /* @__PURE__ */ new Map(), r = [], i = [];
			for (let a of e) {
				let e = /* @__PURE__ */ new Map();
				for (let o of mc(a.career.uuid, a.career.grants.skills)) {
					let s = pc(o.originalName);
					if (!s) continue;
					let c = hc(o.originalName), l = n.get(c) ?? [], u = e.get(c) ?? 0, d = t.enableLinkedSkillResolution && l[u] ? l[u] : "";
					if (e.set(c, u + 1), d) {
						r.push({
							linkedFromKey: d,
							resolutionKey: o.resolutionKey
						});
						continue;
					}
					i.push({
						baseName: s.baseName,
						careerLabel: ce(a.career),
						isLoadingSuggestions: !1,
						occurrence: o.occurrence,
						options: s.options,
						originalName: s.originalName,
						resolvedSpecialization: le(s),
						resolutionKey: o.resolutionKey,
						specialization: s.specialization,
						suggestedSpecializations: []
					}), l[u] = o.resolutionKey, n.set(c, l);
				}
			}
			return {
				entries: e,
				linkedRows: r,
				message: t.message,
				rows: i
			};
		}
		function ae() {
			let e = S.value;
			e && (S.value = null, se(e.entries, e.message));
		}
		async function oe(e) {
			await Promise.all(e.rows.map(async (e) => {
				if (pe(e)) {
					e.isLoadingSuggestions = !0;
					try {
						e.suggestedSpecializations = await t.bridge.listSkillSpecializations(e.baseName);
					} catch {
						e.suggestedSpecializations = [];
					} finally {
						e.isLoadingSuggestions = !1;
					}
				}
			}));
		}
		function se(e, t) {
			for (let t of e) {
				if (t.mode === "add-if-missing") {
					n.addCareerIfMissing(t.career);
					continue;
				}
				n.addCareer(t.career);
			}
			h.value = t;
		}
		function ce(e) {
			return e.level === null ? e.name : `${e.name}, tier ${e.level}`;
		}
		function le(e) {
			return e.specialization.trim().toLocaleLowerCase() === "any" ? "" : e.options[0] ?? "";
		}
		function ue(e) {
			return e.occurrence > 0 ? `${e.originalName}, choice ${e.occurrence + 1}` : e.originalName;
		}
		function de(e) {
			return i.value.some((t) => t.uuid === e);
		}
		function fe(e) {
			return x.value?.selectedUuids.includes(e) ?? !1;
		}
		function pe(e) {
			return e.options.length <= 1 && e.specialization.trim().toLocaleLowerCase() === "any";
		}
		function me(e, t) {
			e.resolvedSpecialization = t;
		}
		function he(e, t) {
			let n = x.value, r = t.target;
			if (!(!n || !r || de(e.uuid))) {
				if (r.checked) {
					n.selectedUuids = [...new Set([...n.selectedUuids, e.uuid])];
					return;
				}
				n.selectedUuids = n.selectedUuids.filter((t) => t !== e.uuid);
			}
		}
		function ge(e) {
			return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
		}
		return (e, n) => (W(), G("main", Vf, [
			K("header", Hf, [n[6] ||= K("div", null, [K("p", null, "WFRP4e Customizer"), K("h1", null, "NPC Builder")], -1), K("div", Uf, [K("nav", Wf, [
				K("button", {
					class: M({ "is-active": m.value === "builder" }),
					type: "button",
					onClick: n[0] ||= (e) => m.value = "builder"
				}, " Build ", 2),
				K("button", {
					class: M({ "is-active": m.value === "advancements" }),
					type: "button",
					onClick: n[1] ||= (e) => m.value = "advancements"
				}, " Advances ", 2),
				K("button", {
					class: M({ "is-active": m.value === "trappings" }),
					type: "button",
					onClick: n[2] ||= (e) => m.value = "trappings"
				}, " Trappings ", 2),
				K("button", {
					class: M({ "is-active": m.value === "traits" }),
					type: "button",
					onClick: n[3] ||= (e) => m.value = "traits"
				}, " Traits ", 2),
				z(s) || z(c).length ? (W(), G("button", {
					key: 0,
					class: M({ "is-active": m.value === "spells" }),
					type: "button",
					onClick: n[4] ||= (e) => m.value = "spells"
				}, " Spells ", 2)) : J("", !0),
				K("button", {
					class: M({ "is-active": m.value === "settings" }),
					type: "button",
					onClick: n[5] ||= (e) => m.value = "settings"
				}, " Settings ", 2)
			]), K("button", {
				disabled: !w.value,
				type: "button",
				onClick: E
			}, " Build NPC ", 8, Gf)])]),
			q(qc, {
				open: x.value !== null,
				title: "Add Lower-Tier Careers?",
				onClose: re
			}, {
				default: In(() => [x.value ? (W(), aa(kf, {
					key: 0,
					"candidate-groups": T.value,
					"is-career-queued": de,
					"is-lower-career-selected": fe,
					prompt: x.value,
					onAddDroppedOnly: re,
					onAddSelected: ne,
					onLowerCareerSelected: he
				}, null, 8, ["candidate-groups", "prompt"])) : J("", !0)]),
				_: 1
			}, 8, ["open"]),
			q(qc, {
				open: S.value !== null,
				title: "Resolve Skill Specializations",
				onClose: ae
			}, {
				default: In(() => [S.value ? (W(), aa(Bf, {
					key: 0,
					"get-skill-resolution-label": ue,
					prompt: S.value,
					"uses-freeform-skill-specialization": pe,
					onAddWithoutResolving: ae,
					onApplySpecializations: A,
					onChooseSkillSpecialization: me
				}, null, 8, ["prompt"])) : J("", !0)]),
				_: 1
			}, 8, ["open"]),
			g.value ? (W(), G("p", Kf, N(g.value), 1)) : h.value ? (W(), G("p", qf, N(h.value), 1)) : J("", !0),
			m.value === "settings" ? (W(), aa(fd, {
				key: 2,
				bridge: t.bridge
			}, null, 8, ["bridge"])) : m.value === "advancements" ? (W(), aa(al, { key: 3 })) : m.value === "trappings" ? (W(), aa(Tf, {
				key: 4,
				bridge: t.bridge
			}, null, 8, ["bridge"])) : m.value === "traits" ? (W(), aa(af, {
				key: 5,
				bridge: t.bridge,
				"difficulty-options": C.value
			}, null, 8, ["bridge", "difficulty-options"])) : m.value === "spells" ? (W(), aa(Bd, {
				key: 6,
				bridge: t.bridge
			}, null, 8, ["bridge"])) : (W(), aa(Tu, {
				key: 7,
				bridge: t.bridge,
				"is-loading-actors": y.value,
				"is-loading-base-draft": b.value,
				onCareerDrop: D
			}, null, 8, [
				"bridge",
				"is-loading-actors",
				"is-loading-base-draft"
			]))
		]));
	}
}), Yf = Ps(), Xf = class extends foundry.applications.api.ApplicationV2 {
	#e;
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("wfrp4e-customizer-vue-root", "root"), n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("wfrp4e-customizer-vue-app", "vue-app"), t.replaceChildren(e);
		let r = this.getVueProps() ?? {};
		this.#e = ps(this.getVueComponent(), r), this.#e.use(Yf), this.#e.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#e?.unmount(), this.#e = void 0;
	}
}, X = {
	Agility: "ag",
	BallisticSkill: "bs",
	Dexterity: "dex",
	Fellowship: "fel",
	Initiative: "i",
	Intelligence: "int",
	Strength: "s",
	Toughness: "t",
	WeaponSkill: "ws",
	Willpower: "wp"
}, Zf = {
	[X.Agility]: "Agility",
	[X.BallisticSkill]: "Ballistic Skill",
	[X.Dexterity]: "Dexterity",
	[X.Fellowship]: "Fellowship",
	[X.Initiative]: "Initiative",
	[X.Intelligence]: "Intelligence",
	[X.Strength]: "Strength",
	[X.Toughness]: "Toughness",
	[X.WeaponSkill]: "Weapon Skill",
	[X.Willpower]: "Willpower"
}, Qf = {
	agility: X.Agility,
	"ballistic skill": X.BallisticSkill,
	dexterity: X.Dexterity,
	fellowship: X.Fellowship,
	initiative: X.Initiative,
	intelligence: X.Intelligence,
	strength: X.Strength,
	toughness: X.Toughness,
	"weapon skill": X.WeaponSkill,
	willpower: X.Willpower
};
function $f(e) {
	return e in Zf;
}
//#endregion
//#region src/shared/object-readers.ts
function ep(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function Z(e, t) {
	let n = e;
	for (let e of t) {
		if (!ep(n) || !(e in n)) return;
		n = n[e];
	}
	return n;
}
function Q(e, t) {
	let n = Z(e, t);
	return typeof n == "string" ? n.trim() : "";
}
function tp(e, t) {
	let n = Z(e, t);
	return Array.isArray(n) ? n.filter((e) => typeof e == "string") : [];
}
function np(e, t, n = 0) {
	for (let n of t) {
		let t = Number(Z(e, n));
		if (Number.isFinite(t)) return t;
	}
	return n;
}
function rp(e, t, n = !1) {
	for (let n of t) {
		let t = Z(e, n);
		if (typeof t == "boolean") return t;
	}
	return n;
}
function ip(e) {
	return Array.isArray(e) ? e.flatMap(ip) : typeof e == "string" ? e.split(/[,;\n\r]/).map((e) => e.trim()).filter(Boolean) : ep(e) ? Object.values(e).flatMap(ip) : [];
}
function ap(e, t, n) {
	let r = e;
	for (let e of t.slice(0, -1)) {
		let t = r[e];
		ep(t) || (r[e] = {}), r = r[e];
	}
	r[t[t.length - 1] ?? ""] = n;
}
//#endregion
//#region src/functions/npc-builder/extract-career-grants.ts
var op = {
	characteristics: [],
	skills: [],
	talents: [],
	trappings: []
};
function sp(e) {
	return {
		characteristics: cp(e),
		skills: lp(e),
		talents: dp(e, [["talents", "value"], ["talents"]]),
		trappings: dp(e, [["trappings", "value"], ["trappings"]])
	};
}
function cp(e) {
	let t = dp(e, [["characteristics", "value"], ["characteristics"]]);
	if (t.length) return t.map(up);
	let n = Z(e, ["characteristics"]);
	if (!ep(n)) return [];
	let r = [];
	for (let [e, t] of Object.entries(n)) t && r.push(up(e));
	return pp(r);
}
function lp(e) {
	return dp(e, [["skills", "value"], ["skills"]], { preserveDuplicates: !0 });
}
function up(e) {
	let t = e.trim().toLocaleLowerCase();
	if ($f(t)) return Zf[t];
	let n = Qf[t];
	return n ? Zf[n] : e.trim();
}
function dp(e, t, n = {}) {
	for (let r of t) {
		let t = ip(Z(e, r));
		if (t.length) return n.preserveDuplicates ? fp(t) : pp(t);
	}
	return [];
}
function fp(e) {
	return e.map((e) => e.trim()).filter(Boolean);
}
function pp(e) {
	return [...new Set(fp(e))].sort((e, t) => e.localeCompare(t));
}
Object.freeze(op);
//#endregion
//#region src/module/foundry/document-guards.ts
function mp(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Actor";
}
function hp(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Item";
}
function gp(e, t = "Expected a Foundry Actor.") {
	if (!mp(e)) throw Error(t);
	return e;
}
function _p(e, t = "Expected a Foundry Item.") {
	if (!hp(e)) throw Error(t);
	return e;
}
function vp(e, t, n = `Expected a Foundry ${t} Item.`) {
	let r = _p(e, n);
	if (r.type !== t) throw Error(n);
	return r;
}
//#endregion
//#region src/module/wfrp4e/career-index.ts
var yp = /* @__PURE__ */ new Map(), bp = "idle", xp = null;
function Sp() {
	return xp || (bp = "indexing", yp.clear(), xp = wp().then(() => {
		bp = "ready";
	}).catch((e) => {
		bp = "error", e instanceof Error && e.message, console.warn("wfrp4e-customizer-apps | Career indexing failed.", e);
	}), xp);
}
async function Cp(e) {
	return bp === "idle" && Sp(), !e.careerGroup || e.level === null ? [] : [...yp.values()].filter((t) => kp(t, e)).sort(jp);
}
async function wp() {
	Dp(), await Np();
	for (let e of game.packs ?? []) {
		if (!Op(e) || !e.getDocuments) continue;
		let t = await e.getDocuments();
		for (let e of t) hp(e) && e.type === "career" && yp.set(e.uuid, Mp(e));
		await Np();
	}
}
function Tp(e) {
	return Q(e.system, ["careergroup", "value"]);
}
function Ep(e) {
	let t = Z(e.system, ["level", "value"]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
function Dp() {
	for (let e of game.items?.contents ?? []) e.type === "career" && yp.set(e.uuid, Mp(e));
}
function Op(e) {
	return e.documentName === "Item";
}
function kp(e, t) {
	return e.uuid !== t.uuid && e.level !== null && t.level !== null && e.level < t.level && Ap(e.careerGroup) === Ap(t.careerGroup);
}
function Ap(e) {
	return e.trim().toLocaleLowerCase();
}
function jp(e, t) {
	let n = e.level ?? 0, r = t.level ?? 0;
	return n === r ? e.name.localeCompare(t.name) : n - r;
}
function Mp(e) {
	return {
		careerGroup: Tp(e),
		grants: sp(e.system),
		img: e.img ?? "",
		level: Ep(e),
		name: e.name,
		uuid: e.uuid
	};
}
function Np() {
	return new Promise((e) => {
		globalThis.setTimeout(e, 0);
	});
}
//#endregion
//#region src/module/wfrp4e/skill-specializations.ts
var Pp = /* @__PURE__ */ new Map(), Fp = "idle", Ip = null;
async function Lp(e) {
	let t = hc(e);
	return t ? (Fp === "idle" && Rp(), Ip && await Ip, [...Pp.get(t) ?? []].sort((e, t) => e.localeCompare(t))) : [];
}
function Rp() {
	return Ip || (Fp = "indexing", Pp.clear(), Ip = zp().then(() => {
		Fp = "ready";
	}).catch((e) => {
		Fp = "error", e instanceof Error && e.message, console.warn("wfrp4e-customizer-apps | Skill specialization indexing failed.", e);
	}), Ip);
}
async function zp() {
	Vp(), await Up();
	for (let e of game.packs ?? []) {
		if (!Hp(e) || !e.getDocuments) continue;
		let t = await e.getDocuments();
		for (let e of t) hp(e) && Bp(e);
		await Up();
	}
}
function Bp(e) {
	if (e.type !== "skill") return;
	let t = fc(e.name);
	if (!t) return;
	let n = hc(t.baseName), r = Pp.get(n) ?? /* @__PURE__ */ new Set();
	r.add(t.specialization), Pp.set(n, r);
}
function Vp() {
	for (let e of game.items?.contents ?? []) Bp(e);
}
function Hp(e) {
	return e.documentName === "Item";
}
function Up() {
	return new Promise((e) => {
		globalThis.setTimeout(e, 0);
	});
}
//#endregion
//#region src/module/foundry/item-sources.ts
function Wp(e, t) {
	return {
		img: "systems/wfrp4e/icons/blank.png",
		name: e,
		system: {},
		type: t
	};
}
function Gp(e, t, n) {
	let r = e ? e.toObject() : Wp(t, n);
	return delete r._id, r;
}
function Kp(e, t, n) {
	return e.items?.contents.find((e) => e.type === n && Yp(e.name, t)) ?? null;
}
function qp(e, t, n) {
	return e.items?.contents.find((e) => t && e.uuid === t ? !0 : Yp(e.name, n)) ?? null;
}
function Jp(e, t) {
	return game.items?.contents.find((n) => t.includes(n.type) && Yp(n.name, e)) ?? null;
}
function Yp(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/wfrp4e/item-lookup.ts
async function Xp(e, t) {
	return await game.wfrp4e?.utility?.findItem?.(e, t) || Jp(e, t);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/advancements.ts
async function Zp(e, t) {
	let n = {}, r = [], i = [];
	for (let a of t) {
		let t = Math.max(0, Math.floor(a.current));
		if (t <= 0) continue;
		let o = a.baseValue + t;
		if (a.kind === "characteristic") {
			em(n, a, o);
			continue;
		}
		let s = Kp(e, a.name, a.kind);
		if (s) {
			r.push({
				_id: s.id,
				"system.advances.value": o
			});
			continue;
		}
		let c = Gp(await Xp(a.name, [a.kind]), a.name, a.kind);
		c.type = a.kind, ap(c, [
			"system",
			"advances",
			"value"
		], o), i.push(c);
	}
	Object.keys(n).length && await e.update(n), r.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", r), i.length && await e.createEmbeddedDocuments("Item", i);
}
function Qp(e) {
	let t = [];
	for (let [n, r] of Object.entries(Zf)) {
		let i = np(e.system, [[
			"characteristics",
			n,
			"advances",
			"value"
		], [
			"characteristics",
			n,
			"advances"
		]]);
		t.push({
			current: i,
			kind: "characteristic",
			name: r
		});
	}
	return t;
}
function $p(e, t) {
	return e.items?.contents.filter((e) => e.type === t).map((e) => ({
		current: np(e.system, [["advances", "value"], ["advances"]]),
		kind: t,
		name: e.name
	})) ?? [];
}
function em(e, t, n) {
	let r = Qf[t.name.trim().toLocaleLowerCase()];
	r && (e[`system.characteristics.${r}.advances`] = n);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/drop-data.ts
function tm(e) {
	try {
		return JSON.parse(e);
	} catch {
		throw Error("Foundry drop data could not be read.");
	}
}
//#endregion
//#region src/functions/npc-builder/recommended-quick-traits.ts
var nm = [
	"Armour",
	"Big",
	"Brute",
	"Champion",
	"Clever",
	"Easily Confused",
	"Elite",
	"Fast",
	"Fear",
	"Frenzy",
	"Grim",
	"Hardy",
	"Leader",
	"Magical",
	"Null",
	"Painless",
	"Ranged",
	"Size",
	"Stealthy",
	"Stupid",
	"Tough",
	"Weapon"
];
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/folders.ts
async function rm(e) {
	return um(await lm(e, "Actor"));
}
async function im(e) {
	return um(await lm(e, "Item"));
}
function am() {
	return game.folders.contents.filter((e) => e.type === "Actor").map(um).sort((e, t) => e.name.localeCompare(t.name));
}
function om() {
	return game.folders.contents.filter((e) => e.type === "Item").map(um).sort((e, t) => e.name.localeCompare(t.name));
}
function sm(e) {
	return e ? game.folders.contents.find((t) => t.uuid === e) ?? null : null;
}
function cm(e) {
	let t = sm(e);
	return t?.type === "Item" ? t : null;
}
async function lm(e, t) {
	let n = e.trim();
	if (!n) throw Error("Enter a folder name first.");
	let r = game.folders.contents.find((e) => e.type === t && dm(e.name, n));
	if (r) return r;
	let i = await Folder.create({
		name: n,
		type: t
	});
	if (!i) throw Error("Foundry did not create the folder.");
	return i;
}
function um(e) {
	return {
		name: e.name,
		uuid: e.uuid
	};
}
function dm(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits.ts
var fm = [
	{
		label: "Very Easy",
		value: "veasy"
	},
	{
		label: "Easy",
		value: "easy"
	},
	{
		label: "Average",
		value: "average"
	},
	{
		label: "Challenging",
		value: "challenging"
	},
	{
		label: "Difficult",
		value: "difficult"
	},
	{
		label: "Hard",
		value: "hard"
	},
	{
		label: "Very Hard",
		value: "vhard"
	},
	{
		label: "Futile",
		value: "futile"
	},
	{
		label: "Impossible",
		value: "impossible"
	}
];
async function pm(e, t) {
	let n = [], r = [], i = [];
	for (let a of t) {
		let t = a.source === "base" ? qp(e, a.sourceUuid, a.name) : Kp(e, a.name, "trait");
		if (a.ignored) {
			t && i.push(t.id);
			continue;
		}
		if (t) {
			n.push(Cm(t.id, a.config));
			continue;
		}
		let o = Gp(a.sourceUuid ? await Om(a.sourceUuid) : await Xp(a.name, ["trait"]), a.name, "trait");
		o.type = "trait", ap(o, ["system", "disabled"], !1), Sm(o, a.config), r.push(o);
	}
	i.length && e.deleteEmbeddedDocuments && await e.deleteEmbeddedDocuments("Item", i), n.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", n), r.length && await e.createEmbeddedDocuments("Item", r);
}
async function mm(e) {
	let t = cm(e.quickTraitFolderUuid);
	if (!t) throw Error("Choose a Quick Traits item folder before importing traits.");
	let n = new Set(Dm(e).map((e) => e.name.trim().toLocaleLowerCase()));
	for (let e of nm) {
		if (n.has(e.trim().toLocaleLowerCase())) continue;
		let r = Gp(await Xp(e, ["trait"]), e, "trait");
		r.folder = t.id, r.type = "trait", await Item.create(r);
	}
	return ui.notifications?.info("Imported recommended quick traits."), hm(e);
}
async function hm(e) {
	return Dm(e).map(Am).sort((e, t) => e.name.localeCompare(t.name));
}
async function gm() {
	let e = Z(game.wfrp4e?.config, ["difficultyLabels"]);
	if (!ep(e)) return fm;
	let t = Object.entries(e).filter((e) => {
		let [t, n] = e;
		return !!t.trim() && typeof n == "string";
	}).map(([e, t]) => ({
		label: t,
		value: e
	}));
	return t.length ? t : fm;
}
function _m(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && !wm(e)).map(km) ?? [];
}
function vm(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && wm(e)).map(km) ?? [];
}
function ym(e) {
	Array.isArray(e.items) && (e.items = e.items.filter((e) => {
		if (typeof e != "object" || !e) return !0;
		let t = e;
		return t.type !== "trait" || !Tm(t);
	}));
}
async function bm(e) {
	let t = tm(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Trait item here.");
	let n = vp(await fromUuid(t.uuid), "trait", "Drop a Foundry Trait item here.");
	return {
		config: xm(n),
		ignored: !1,
		key: `custom:${n.uuid}`,
		name: n.name,
		source: "custom",
		sourceUuid: n.uuid
	};
}
function xm(e) {
	return {
		...Xs(),
		attackType: jm(e.system, ["rollable", "attackType"]) || "melee",
		bonusCharacteristic: jm(e.system, ["rollable", "bonusCharacteristic"]),
		damage: rp(e.system, [["rollable", "damage"]]),
		defaultDifficulty: jm(e.system, ["rollable", "defaultDifficulty"]) || "challenging",
		dice: jm(e.system, ["rollable", "dice"]),
		rollable: rp(e.system, [["rollable", "value"]]),
		skill: jm(e.system, ["rollable", "skill"]),
		sl: rp(e.system, [["rollable", "SL"]], !0),
		specification: jm(e.system, ["specification", "value"])
	};
}
function Sm(e, t) {
	ap(e, [
		"system",
		"specification",
		"value"
	], t.specification), t.rollable && !t.damage && ap(e, [
		"system",
		"rollable",
		"defaultDifficulty"
	], t.defaultDifficulty), t.damage && t.dice && ap(e, [
		"system",
		"rollable",
		"dice"
	], t.dice);
}
function Cm(e, t) {
	return {
		_id: e,
		"system.specification.value": t.specification,
		...t.rollable && !t.damage ? { "system.rollable.defaultDifficulty": t.defaultDifficulty } : {},
		...t.damage && t.dice ? { "system.rollable.dice": t.dice } : {}
	};
}
function wm(e) {
	return rp(e.system, [["disabled"], ["disabled", "value"]]);
}
function Tm(e) {
	return rp(e.system, [["disabled"], ["disabled", "value"]]);
}
function Em(e, t) {
	return t.quickTraitFolderUuid ? e.folder?.uuid === t.quickTraitFolderUuid : !1;
}
function Dm(e) {
	return game.items?.contents.filter((t) => t.type === "trait" && Em(t, e)) ?? [];
}
async function Om(e) {
	let t = await fromUuid(e);
	return hp(t) ? t : null;
}
function km(e) {
	return {
		config: xm(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
function Am(e) {
	return {
		config: xm(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
function jm(e, t) {
	let n = Z(e, t);
	return typeof n == "string" ? n.trim() : typeof n == "number" ? String(n) : "";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/trappings.ts
var Mm = [
	"ammunition",
	"armour",
	"container",
	"money",
	"trapping",
	"weapon"
];
async function Nm(e, t) {
	let n = [], r = [], i = [];
	for (let a of t) {
		let t = a.source === "base" ? qp(e, a.sourceUuid, a.name) : null;
		if (a.ignored) {
			t && i.push(t.id);
			continue;
		}
		if (t) {
			n.push({
				_id: t.id,
				"system.quantity.value": a.quantity
			});
			continue;
		}
		let o = await zm(a), s = a.resolution.selectedItemType || a.itemType || "trapping", c = Gp(o, a.resolution.selectedName || a.name, s);
		c.type = s || c.type || "trapping", ap(c, [
			"system",
			"quantity",
			"value"
		], a.quantity), r.push(c);
	}
	i.length && e.deleteEmbeddedDocuments && await e.deleteEmbeddedDocuments("Item", i), n.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", n), r.length && await e.createEmbeddedDocuments("Item", r);
}
async function Pm(e) {
	return xc(e, await Bm());
}
async function Fm(e) {
	let t = tm(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Item here.");
	let n = _p(await fromUuid(t.uuid), "Drop a Foundry Item here.");
	return {
		ignored: !1,
		itemType: n.type,
		key: `custom:${n.uuid}`,
		name: n.name,
		quantity: Lm(n),
		resolution: yc({
			itemType: n.type,
			name: n.name,
			uuid: n.uuid
		}),
		source: "custom",
		sourceUuid: n.uuid
	};
}
function Im(e) {
	let t = Rm();
	return e.items?.contents.filter((e) => t.includes(e.type)).map((e) => ({
		itemType: e.type,
		name: e.name,
		quantity: Lm(e),
		uuid: e.uuid
	})) ?? [];
}
function Lm(e) {
	return np(e.system, [["quantity", "value"], ["quantity"]]) || 1;
}
function Rm() {
	let e = tp(game.wfrp4e?.config, ["trappingItems"]);
	return e.length ? e : Mm;
}
async function zm(e) {
	if (e.sourceUuid) {
		let t = await fromUuid(e.sourceUuid);
		return hp(t) ? t : null;
	}
	if (e.resolution.selectedCandidateUuid) {
		let t = await fromUuid(e.resolution.selectedCandidateUuid);
		return hp(t) ? t : null;
	}
	return e.resolution.status === "fallback" ? null : Xp(e.resolution.selectedName || e.name, Rm());
}
async function Bm() {
	let e = [], t = Rm();
	for (let n of game.items?.contents ?? []) t.includes(n.type) && e.push(Wm(n, "World"));
	for (let n of game.packs ?? []) {
		if (!Um(n)) continue;
		let r = await Vm(n, t);
		if (r.length) {
			e.push(...r);
			continue;
		}
		if (!n.getDocuments) continue;
		let i = await n.getDocuments();
		for (let r of i) hp(r) && t.includes(r.type) && e.push(Wm(r, n.title ?? "Compendium"));
	}
	return e;
}
async function Vm(e, t) {
	return e.getIndex ? ((await e.getIndex({ fields: ["name", "type"] })).contents ?? []).filter((n) => !!(n.name && n.type && Hm(e, n) && t.includes(n.type))).map((t) => ({
		itemType: t.type ?? "trapping",
		name: t.name ?? "",
		sourceLabel: e.title ?? "Compendium",
		uuid: Hm(e, t)
	})) : [];
}
function Hm(e, t) {
	return t.uuid ? t.uuid : t._id && e.getUuid ? e.getUuid(t._id) : "";
}
function Um(e) {
	return e.documentName === "Item";
}
function Wm(e, t) {
	return {
		itemType: e.type,
		name: e.name,
		sourceLabel: t,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/actors.ts
function Gm(e) {
	return game.actors.contents.filter((t) => Zm(t, e)).map(Jm);
}
async function Km(e) {
	let t = gp(await fromUuid(e));
	return {
		advancements: [
			...Qp(t),
			...$p(t, "skill"),
			...$p(t, "talent")
		],
		optionalTraits: vm(t),
		traits: _m(t),
		trappings: Im(t)
	};
}
async function qm(e) {
	let t = tm(e);
	if (t.type !== "Actor") throw Error("Drop a Foundry Actor here.");
	let n = null;
	return t.uuid ? n = await fromUuid(t.uuid) : t.id && (n = game.actors.get(t.id)), Jm(gp(n));
}
function Jm(e) {
	return {
		img: e.img ?? "",
		name: e.name,
		prototypeTokenImg: Xm(e),
		species: Ym(e),
		type: e.type,
		uuid: e.uuid
	};
}
function Ym(e) {
	return Q(e.system, [
		"details",
		"species",
		"value"
	]) || Q(e.system, ["details", "species"]) || Q(e.system, [
		"details",
		"race",
		"value"
	]) || Q(e.system, [
		"details",
		"ancestry",
		"value"
	]);
}
function Xm(e) {
	return Q(e, [
		"prototypeToken",
		"texture",
		"src"
	]) || Q(e.toObject(), [
		"prototypeToken",
		"texture",
		"src"
	]);
}
function Zm(e, t) {
	return t.baseActorFolderUuid ? e.folder?.uuid === t.baseActorFolderUuid : !0;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic.ts
var Qm = "spell", $m = new Set($s), eh = new Set(ec), th = "[WFRP Customizer Apps][Spell Lookup]";
async function nh(e, t) {
	let n = [];
	for (let r of t) {
		if (!r.selected || Kp(e, r.name, Qm)) continue;
		let t = Gp(r.sourceUuid ? await zh(r.sourceUuid) : null, r.name, Qm);
		t.type = Qm, n.push(t);
	}
	n.length && await e.createEmbeddedDocuments("Item", n);
}
async function rh(e) {
	let t = sh(e, oh());
	if ($("Grant resolution start", {
		grants: e.map((e) => ({
			isAmbiguous: e.isAmbiguous,
			kind: e.kind,
			rawLore: e.rawLore,
			sourceName: e.sourceName
		})),
		resolvedProfiles: t.map((e) => ({
			key: e.key,
			matchTerms: e.matchTerms,
			name: e.name,
			wind: e.wind
		}))
	}), !t.length) return [];
	let n = await ch(), r = /* @__PURE__ */ new Map(), i = [];
	for (let e of n) {
		let n = gh(e, t);
		if (!n) {
			i.length < 20 && i.push({
				loreTerms: vh(e.system),
				name: e.name,
				sourceLabel: e.sourceLabel,
				uuid: e.uuid
			});
			continue;
		}
		let a = `detected:${e.uuid || e.name}`;
		r.set(a, {
			img: e.img,
			key: a,
			loreKey: n.key,
			loreName: n.name,
			name: e.name,
			selected: !1,
			source: "detected",
			sourceLabel: e.sourceLabel,
			sourceUuid: e.uuid
		});
	}
	return $("Grant resolution complete", {
		candidateCount: n.length,
		matchedSpellCount: r.size,
		matchedSpellSamples: [...r.values()].slice(0, 10).map((e) => ({
			loreName: e.loreName,
			name: e.name,
			sourceLabel: e.sourceLabel,
			sourceUuid: e.sourceUuid
		})),
		unmatchedLoreSamples: i
	}), [...r.values()].sort((e, t) => e.loreName === t.loreName ? e.name.localeCompare(t.name) : e.loreName.localeCompare(t.loreName));
}
async function ih(e) {
	let t = tm(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Spell item here.");
	let n = vp(await fromUuid(t.uuid), Qm, "Drop a Foundry Spell item here."), r = gh(Ah(n, "Dropped"), [...oh(), Sh()]) ?? Ch(vh(n.system)[0] ?? "");
	return {
		img: n.img ?? "",
		key: `custom:${n.uuid}`,
		loreKey: r.key,
		loreName: r.name,
		name: n.name,
		selected: !0,
		source: "custom",
		sourceLabel: "Dropped",
		sourceUuid: n.uuid
	};
}
async function ah() {
	return oh().map((e) => ({
		category: ac(e.key),
		key: e.key,
		label: e.name,
		value: e.name,
		wind: e.wind
	})).sort((e, t) => e.category === t.category ? e.label.localeCompare(t.label) : e.category.localeCompare(t.category));
}
function oh() {
	let e = Z(game.wfrp4e?.config, ["magicLores"]), t = Z(game.wfrp4e?.config, ["magicWind"]), n = [];
	if (!ep(e)) return [Sh()];
	for (let [r, i] of Object.entries(e)) {
		let e = Th(i) || r, a = wh(t, r);
		n.push({
			key: r,
			matchTerms: xh(r, e, a),
			name: e,
			wind: a
		});
	}
	return n.some((e) => e.key === "petty") || n.push(Sh()), n;
}
function sh(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) {
		if (r.isAmbiguous) continue;
		if (r.kind === "petty-magic") {
			let e = bh("petty magic", t);
			e && n.set(e.key, e);
			continue;
		}
		let e = bh(r.rawLore, t);
		e && n.set(e.key, e);
	}
	return [...n.values()];
}
async function ch() {
	let e = [], t = [...game.packs ?? []];
	$("Candidate lookup start", {
		itemPacks: t.filter(Oh).length,
		totalPacks: t.length,
		warhammerUtilityAvailable: !!Fh(),
		worldItems: game.items?.contents.length ?? 0
	});
	let n = await lh();
	$("WFRP helper lookup complete", {
		utilityInputs: n.length,
		utilitySamples: n.slice(0, 10).map(Lh)
	}), e.push(...n);
	for (let t of game.items?.contents ?? []) t.type === Qm && e.push(Ah(t, "World"));
	$("World spell scan complete", { worldSpellCount: e.filter((e) => e.sourceLabel === "World").length });
	for (let n of t) if (Oh(n)) try {
		let t = await uh(n);
		e.push(...t), $("Compendium spell scan complete", {
			inputCount: t.length,
			pack: Ih(n),
			samples: t.slice(0, 5).map(Lh)
		});
	} catch (e) {
		console.warn(`wfrp4e-customizer-apps | Spell lookup skipped compendium "${n.title ?? n.collection ?? "unknown"}".`, e);
	}
	let r = Ph(e);
	return $("Candidate lookup complete", {
		rawInputCount: e.length,
		uniqueInputCount: r.length
	}), r;
}
async function lh() {
	let e = Fh();
	if (!e) return $("WFRP helper unavailable"), [];
	try {
		let t = await e.findAllItems(Qm, "Loading Spells", !0, ["system.lore.value"]);
		return $("WFRP helper raw result", {
			count: t.length,
			samples: t.slice(0, 10).map(Rh)
		}), (await Promise.all(t.map((e) => Dh(e)))).filter((e) => !!e);
	} catch (e) {
		return console.warn(`${th} WFRP helper lookup failed.`, e), [];
	}
}
async function uh(e) {
	if ($("Compendium index scan start", { pack: Ih(e) }), !e.getIndex) return $("Compendium has no index; loading documents", { pack: Ih(e) }), hh(e);
	let t = dh(await e.getIndex({ fields: [
		"name",
		"type",
		"img",
		"system.lore.value"
	] }));
	if ($("Compendium index loaded", {
		entries: t.length,
		pack: Ih(e),
		samples: t.slice(0, 5).map((t) => ({
			hasLoreTerms: vh(t).length > 0,
			name: t.name,
			type: t.type,
			uuid: Eh(e, t)
		}))
	}), !t.length) return $("Compendium index empty; loading documents", { pack: Ih(e) }), hh(e);
	let n = t.filter(ph);
	$("Compendium index spell candidates", {
		pack: Ih(e),
		spellEntries: n.length
	});
	let r = n.filter((e) => e.name).map((t) => Nh(e, t));
	return r.length || !kh(e) ? r : hh(e);
}
function dh(e) {
	return Array.isArray(e) ? e.filter(fh) : Array.isArray(e.contents) ? e.contents.filter(fh) : mh(e) ? [...e].flatMap((e) => {
		let t = Array.isArray(e) ? e[1] : e;
		return fh(t) ? [t] : [];
	}) : [];
}
function fh(e) {
	return ep(e);
}
function ph(e) {
	return e.type === Qm ? !0 : !!(e.name && (vh(e).length || yh(e.name)));
}
function mh(e) {
	return ep(e) && Symbol.iterator in e;
}
async function hh(e) {
	if (!e.getDocuments) return $("Compendium has no document loader", { pack: Ih(e) }), [];
	$("Compendium document load start", { pack: Ih(e) });
	let t = await e.getDocuments(), n = t.filter((e) => hp(e) && e.type === Qm);
	return $("Compendium document load complete", {
		documents: t.length,
		pack: Ih(e),
		spellDocuments: n.length,
		spellSamples: n.slice(0, 5).map((e) => ({
			loreTerms: vh(e.system),
			name: e.name,
			uuid: e.uuid
		}))
	}), n.map((t) => Ah(t, e.title ?? "Compendium"));
}
function gh(e, t) {
	let n = [...vh(e.system), yh(e.name)].filter(Boolean);
	for (let e of n) {
		let n = _h(e, t);
		if (n) return n;
		let r = bh(e, t);
		if (r) return r;
	}
	return null;
}
function _h(e, t) {
	let n = nc(e);
	return n === "lore" ? t.find((e) => e.key !== "petty") ?? null : n === "the eight winds" || n === "eight winds" ? t.find((e) => $m.has(e.key)) ?? null : n === "dark lore" ? t.find((e) => eh.has(e.key)) ?? null : null;
}
function vh(e) {
	return [
		...ip(Z(e, ["lore", "value"])),
		...ip(Z(e, ["lore"])),
		...ip(Z(e, ["magicLore", "value"])),
		...ip(Z(e, ["magicLore"])),
		...ip(Z(e, ["category", "value"])),
		...ip(Z(e, [
			"system",
			"lore",
			"value"
		])),
		...ip(Z(e, ["system", "lore"])),
		...ip(Z(e, ["system.lore.value"])),
		...ip(Z(e, ["system.lore"]))
	];
}
function yh(e) {
	return /\(([^)]+)\)\s*$/.exec(e)?.[1]?.trim() ?? "";
}
function bh(e, t) {
	let n = nc(e);
	return n ? t.find((e) => e.matchTerms.some((e) => nc(e) === n)) ?? null : null;
}
function xh(e, t, n) {
	let r = /* @__PURE__ */ new Set(), i = nc(e), a = nc(t);
	for (let i of [
		e,
		t,
		n
	]) i.trim() && r.add(i.trim());
	return (i === "petty" || a === "petty") && r.add("Petty Magic"), (i === "shadow" || a === "shadow") && r.add("Shadows"), t && !/^lore of /i.test(t) && r.add(`Lore of ${t}`), [...r];
}
function Sh() {
	return {
		key: "petty",
		matchTerms: ["petty", "petty magic"],
		name: "Petty Magic",
		wind: ""
	};
}
function Ch(e) {
	let t = e.trim() || "Unknown Lore";
	return {
		key: nc(t) || "unknown",
		matchTerms: [t],
		name: t,
		wind: ""
	};
}
function wh(e, t) {
	return ep(e) ? Th(e[t]) : "";
}
function Th(e) {
	return typeof e == "string" ? e.trim() : ep(e) ? Q(e, ["name"]) || Q(e, ["label"]) || Q(e, ["value"]) : "";
}
function Eh(e, t) {
	return t.uuid ? t.uuid : t._id && e.getUuid ? e.getUuid(t._id) : "";
}
async function Dh(e) {
	if (typeof e == "string") {
		let t = await fromUuid(e);
		return hp(t) && t.type === Qm ? Ah(t, jh(t)) : null;
	}
	if (hp(e)) return e.type === Qm ? Ah(e, jh(e)) : null;
	if (!ep(e) || Q(e, ["type"]) !== Qm) return null;
	let t = Q(e, ["name"]);
	return t ? {
		img: Q(e, ["img"]) || Q(e, ["thumb"]),
		name: t,
		sourceLabel: Mh(Q(e, ["uuid"]), "WFRP Item Lookup"),
		system: Z(e, ["system"]),
		uuid: Q(e, ["uuid"])
	} : null;
}
function Oh(e) {
	return e.documentName === "Item" || Q(e, ["metadata", "type"]) === "Item" || Q(e, ["metadata", "documentName"]) === "Item";
}
function kh(e) {
	return e.collection === "wfrp4e-core.items" || e.collection === "wfrp4e-wom.items";
}
function Ah(e, t) {
	return {
		img: e.img ?? "",
		name: e.name,
		sourceLabel: t,
		system: e.system,
		uuid: e.uuid
	};
}
function jh(e) {
	return /^Item\./i.test(e.uuid) ? "World" : Mh(e.uuid, "WFRP Item Lookup");
}
function Mh(e, t) {
	let n = /^Compendium\.([^.]+\.[^.]+)\./.exec(e)?.[1];
	return n ? [...game.packs ?? []].find((e) => e.collection === n)?.title ?? n : t;
}
function Nh(e, t) {
	return {
		img: t.img ?? t.thumb ?? "",
		name: t.name ?? "",
		sourceLabel: e.title ?? "Compendium",
		system: t,
		uuid: Eh(e, t)
	};
}
function Ph(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.uuid || n.name.trim().toLocaleLowerCase();
		t.has(e) || t.set(e, n);
	}
	return [...t.values()];
}
function Fh() {
	let e = Z(globalThis, [
		"warhammer",
		"utility",
		"findAllItems"
	]);
	return typeof e == "function" ? { findAllItems: e } : null;
}
function $(e, t) {
	if (t) {
		console.info(`${th} ${e}`, t);
		return;
	}
	console.info(`${th} ${e}`);
}
function Ih(e) {
	return [
		e.title ?? "",
		e.collection ?? "",
		Q(e, ["metadata", "type"]),
		Q(e, ["metadata", "documentName"]),
		e.documentName
	].filter(Boolean).join(" | ");
}
function Lh(e) {
	return {
		loreTerms: vh(e.system),
		name: e.name,
		sourceLabel: e.sourceLabel,
		uuid: e.uuid
	};
}
function Rh(e) {
	return typeof e == "string" ? {
		kind: "uuid-string",
		value: e
	} : ep(e) ? {
		documentName: Q(e, ["documentName"]),
		hasSystem: ep(Z(e, ["system"])),
		loreTerms: vh(Z(e, ["system"])),
		name: Q(e, ["name"]),
		type: Q(e, ["type"]),
		uuid: Q(e, ["uuid"])
	} : { kind: typeof e };
}
async function zh(e) {
	let t = await fromUuid(e);
	return hp(t) && t.type === Qm ? t : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/build-npc.ts
async function Bh(e) {
	let t = await Vh(e);
	if (!t) throw Error("Foundry did not create the NPC Actor.");
	let n = Hh(e), r = e.careers.at(-1), i = {
		name: n,
		"prototypeToken.name": n
	}, a = e.portraitPath || r?.img || "";
	return a && (i.img = a, i["prototypeToken.texture.src"] = a), await t.update(i), await Zp(t, e.advancements), await pm(t, e.traits), await Nm(t, e.trappings), await nh(t, e.spells), t.sheet?.render(!0), ui.notifications?.info(`Created NPC "${n}".`), {
		name: n,
		uuid: t.uuid
	};
}
async function Vh(e) {
	let t = gp(await fromUuid(e.baseActorUuid)).toObject(), n = sm(e.settings.outputActorFolderUuid);
	return delete t._id, delete t.folder, t.type = "npc", ym(t), n && (t.folder = n.id), Actor.create(t);
}
function Hh(e) {
	if (!e.settings.includeSpeciesInName) return e.actorName;
	let t = game.actors.contents.find((t) => t.uuid === e.baseActorUuid), n = t ? Ym(t) : "";
	return !n || e.actorName.toLocaleLowerCase().includes(n.toLocaleLowerCase()) ? e.actorName : `${n} ${e.actorName}`;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/careers.ts
async function Uh(e) {
	let t = tm(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a WFRP Career item here.");
	return Wh(vp(await fromUuid(t.uuid), "career", "Drop a WFRP Career item here."));
}
function Wh(e) {
	return {
		careerGroup: Gh(e),
		grants: sp(e.system),
		img: e.img ?? "",
		level: Kh(e),
		name: e.name,
		uuid: e.uuid
	};
}
function Gh(e) {
	return Q(e.system, ["careergroup", "value"]);
}
function Kh(e) {
	let t = Z(e.system, ["level", "value"]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits.ts
var qh = [
	".webp",
	".png",
	".jpg",
	".jpeg",
	".gif"
];
async function Jh(e, t) {
	let n = ll(e);
	if (!n.length) return [];
	let r = {
		candidates: [],
		maxDirectoryBudget: 0,
		searchTerms: n,
		seenPaths: /* @__PURE__ */ new Set(),
		visitedDirectories: 0
	};
	return e.includeCompendiumAssets && (Yh(r, t), await Xh(r, t)), e.includeFilePickerAssets && await Qh(r, t), rg(t, r, {
		currentLocation: "Portrait search complete",
		maxDirectories: r.maxDirectoryBudget,
		phase: "ready"
	}), r.candidates;
}
function Yh(e, t) {
	rg(t, e, {
		currentLocation: "World Actors and Items",
		maxDirectories: 0,
		phase: "world-documents"
	});
	for (let t of game.actors.contents) Zh(e, {
		imagePaths: [{
			label: "actor image",
			path: t.img ?? ""
		}, {
			label: "token image",
			path: og(t)
		}],
		name: t.name,
		sourceLabel: "World Actors",
		sourceKey: t.uuid
	});
	for (let t of game.items?.contents ?? []) Zh(e, {
		imagePaths: [{
			label: "item image",
			path: t.img ?? ""
		}],
		name: t.name,
		sourceLabel: "World Items",
		sourceKey: t.uuid
	});
}
async function Xh(e, t) {
	rg(t, e, {
		currentLocation: "Actor and Item compendiums",
		maxDirectories: 0,
		phase: "compendiums"
	});
	for (let t of game.packs ?? []) {
		if (t.documentName !== "Actor" && t.documentName !== "Item") continue;
		let n = await t.getIndex?.({ fields: [
			"name",
			"img",
			"thumb",
			"prototypeToken.texture.src"
		] }).catch(() => void 0);
		for (let r of n?.contents ?? []) Zh(e, {
			imagePaths: [
				{
					label: `${t.documentName.toLocaleLowerCase()} image`,
					path: r.img ?? ""
				},
				{
					label: "thumbnail",
					path: r.thumb ?? ""
				},
				{
					label: "token image",
					path: Q(r, [
						"prototypeToken",
						"texture",
						"src"
					])
				}
			],
			name: r.name ?? "",
			sourceLabel: t.title ?? "Compendium",
			sourceKey: `${t.collection ?? t.title ?? "pack"}:${r._id ?? r.name ?? ""}`
		});
	}
}
function Zh(e, t) {
	let n = t.imagePaths.filter(({ path: e }) => !!e);
	if (ag(t.name, n, e.searchTerms)) for (let r of n) ig(e, {
		img: r.path,
		key: `foundry-asset:${t.sourceKey}:${r.label}`,
		label: `${t.name || ug(r.path)} ${r.label} (${t.sourceLabel})`,
		source: "foundry-asset"
	});
}
async function Qh(e, t) {
	let n = tg();
	e.maxDirectoryBudget = 0;
	for (let r of n) await $h(e, r, 0, t);
}
async function $h(e, t, n, r) {
	let i = [t.target];
	for (; i.length;) {
		let a = i.shift() ?? "", o = await ng(t.source, a, t.bucket), s = o.files ?? [], c = o.dirs ?? [];
		e.visitedDirectories += 1, rg(r, e, {
			currentLocation: lg(t, a),
			maxDirectories: n,
			phase: "filesystem"
		}), eg(e, t, s), i.push(...c);
	}
}
function eg(e, t, n) {
	for (let r of n) ul(r, e.searchTerms) && ig(e, {
		img: r,
		key: `foundry-asset:${r}`,
		label: sg(r, cg(t)),
		source: "foundry-asset"
	});
}
function tg() {
	return [{
		source: "data",
		target: ""
	}];
}
async function ng(e, t, n, r = qh) {
	try {
		let i = { wildcard: !1 };
		return r && (i.extensions = r), n && (i.bucket = n), await foundry.applications.apps.FilePicker.implementation.browse(e, t, i);
	} catch {
		return {};
	}
}
function rg(e, t, n) {
	e?.({
		candidatesFound: t.candidates.length,
		currentLocation: n.currentLocation,
		directoriesVisited: t.visitedDirectories,
		maxDirectories: n.maxDirectories,
		phase: n.phase
	});
}
function ig(e, t) {
	let n = t.img.trim().toLocaleLowerCase();
	!n || e.seenPaths.has(n) || (e.seenPaths.add(n), e.candidates.push(t));
}
function ag(e, t, n) {
	return dl(e, n) || t.some(({ path: e }) => dl(e, n));
}
function og(e) {
	return Q(e, [
		"prototypeToken",
		"texture",
		"src"
	]) || Q(e.toObject(), [
		"prototypeToken",
		"texture",
		"src"
	]);
}
function sg(e, t) {
	return `${ug(e)} (${t})`;
}
function cg(e) {
	return e.bucket ? `${e.source}: ${e.bucket}` : e.source;
}
function lg(e, t) {
	let n = cg(e);
	return t ? `${n} / ${t}` : n;
}
function ug(e) {
	return e.split(/[\\/]/).at(-1) ?? e;
}
//#endregion
//#region src/module/settings/foundry-setting-adapter.ts
function dg(e) {
	return e;
}
function fg(t) {
	game.settings.register(e, t.key, {
		config: t.config ?? !1,
		default: t.defaultValue,
		name: t.name,
		scope: t.scope ?? "world",
		type: Object
	});
}
function pg(t) {
	return t.normalize(game.settings.get(e, t.key));
}
async function mg(t, n) {
	let r = t.normalize(n);
	return await game.settings.set(e, t.key, r), r;
}
//#endregion
//#region src/module/apps/npc-builder/settings.ts
var hg = "npcBuilderSettings", gg = Zs(), _g = dg({
	defaultValue: gg,
	key: hg,
	name: "NPC Builder Settings",
	normalize: xg
});
function vg() {
	fg(_g);
}
function yg() {
	return pg(_g);
}
async function bg(e) {
	return mg(_g, e);
}
function xg(e) {
	if (typeof e != "object" || !e) return { ...gg };
	let t = e;
	return {
		allowBaseActorCharacteristics: t.allowBaseActorCharacteristics ?? !0,
		allowBaseActorSkills: t.allowBaseActorSkills ?? !0,
		allowBaseActorTalents: t.allowBaseActorTalents ?? !0,
		allowBaseActorTraits: t.allowBaseActorTraits ?? !0,
		allowBaseActorTrappings: t.allowBaseActorTrappings ?? !0,
		askForLinkedSkillSpecializations: t.askForLinkedSkillSpecializations ?? !1,
		autoSelectGrantedSpells: t.autoSelectGrantedSpells ?? !0,
		baseActorFolderUuid: typeof t.baseActorFolderUuid == "string" ? t.baseActorFolderUuid : "",
		includeSpeciesInName: t.includeSpeciesInName ?? !1,
		lowerCareerMode: Sg(t.lowerCareerMode) ? t.lowerCareerMode : "prompt",
		outputActorFolderUuid: typeof t.outputActorFolderUuid == "string" ? t.outputActorFolderUuid : "",
		quickTraitFolderUuid: typeof t.quickTraitFolderUuid == "string" ? t.quickTraitFolderUuid : "",
		searchCompendiumPortraitAssets: t.searchCompendiumPortraitAssets ?? !0,
		searchFoundryPortraitAssets: t.searchFoundryPortraitAssets ?? !0,
		searchWebPortraitAssets: t.searchWebPortraitAssets ?? !1
	};
}
function Sg(e) {
	return e === "auto-add-all" || e === "never" || e === "prompt";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/index.ts
var Cg = {
	buildNpc: Bh,
	ensureActorFolder: rm,
	ensureItemFolder: im,
	findLowerCareerCandidates: Cp,
	importRecommendedQuickTraits: mm,
	listActorFolders: async () => am(),
	listBaseActors: async (e) => Gm(e),
	listFoundryPortraitCandidates: Jh,
	listMagicLoreOptions: ah,
	listSpellsForMagicGrants: rh,
	listItemFolders: async () => om(),
	listQuickTraits: hm,
	listSkillSpecializations: Lp,
	listTraitDifficultyOptions: gm,
	loadBaseActorDraftData: Km,
	loadSettings: async () => yg(),
	resolveActorDrop: qm,
	resolveCareerDrop: Uh,
	resolveSpellDrop: ih,
	resolveTraitDrop: bm,
	resolveTrapping: Pm,
	resolveTrappingDrop: Fm,
	saveSettings: bg
}, wg = class extends Xf {
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${e}-npc-builder`,
		classes: [e, "wfrp4e-customizer-npc-builder"],
		position: {
			height: 720,
			width: 980
		},
		window: {
			icon: "fa-solid fa-user-plus",
			resizable: !0,
			title: "WFRP4e NPC Builder"
		}
	};
	getVueComponent() {
		return Jf;
	}
	getVueProps() {
		return { bridge: Cg };
	}
}, Tg = { class: "customizer-workbench" }, Eg = {
	"aria-label": "Customizer targets",
	class: "customizer-workbench__body"
}, Dg = { class: "customizer-workbench__targets" }, Og = /* @__PURE__ */ ur({
	__name: "WorkbenchApp",
	setup(e) {
		let t = [
			"Actor sheets",
			"Item sheets",
			"Reusable dialogs"
		];
		return (e, n) => (W(), G("main", Tg, [n[1] ||= K("header", { class: "customizer-workbench__header" }, [K("p", null, "WFRP4e"), K("h1", null, "Customizer Workbench")], -1), K("section", Eg, [K("div", Dg, [(W(), G(H, null, V(t, (e) => K("button", {
			key: e,
			disabled: "",
			type: "button"
		}, N(e), 1)), 64))]), n[0] ||= K("div", { class: "customizer-workbench__empty" }, [K("strong", null, "Vue application shell mounted."), K("span", null, "The first customizer surface can land here.")], -1)])]));
	}
}), kg = class extends Xf {
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${e}-workbench`,
		classes: [e, "wfrp4e-customizer-workbench"],
		position: {
			height: 430,
			width: 640
		},
		window: {
			icon: "fa-solid fa-screwdriver-wrench",
			title: "WFRP4e Customizer Apps"
		}
	};
	getVueComponent() {
		return Og;
	}
}, Ag = `${e}.debugShapeProbes`, jg = "wfrp4eCustomizerShapeProbes", Mg = "wfrp4eCustomizerShapePreset", Ng = 2, Pg = 12, Fg = 6, Ig = 60, Lg = { "npc-builder": [
	{
		hook: "ready",
		label: "game.actors collection",
		maxDepth: 2,
		maxEntries: 10,
		path: "game.actors"
	},
	{
		hook: "ready",
		label: "first world Actor",
		maxDepth: 4,
		maxEntries: 14,
		path: "game.actors.contents.at(0)"
	},
	{
		hook: "ready",
		label: "game.items collection",
		maxDepth: 2,
		maxEntries: 10,
		path: "game.items"
	},
	{
		hook: "ready",
		label: "first world Career Item",
		maxDepth: 4,
		maxEntries: 16,
		path: "game.items.contents.findByType(\"career\")"
	},
	{
		hook: "ready",
		label: "first world Skill Item",
		maxDepth: 3,
		maxEntries: 12,
		path: "game.items.contents.findByType(\"skill\")"
	},
	{
		hook: "ready",
		label: "first world Talent Item",
		maxDepth: 3,
		maxEntries: 12,
		path: "game.items.contents.findByType(\"talent\")"
	},
	{
		hook: "ready",
		label: "first world Trapping Item",
		maxDepth: 3,
		maxEntries: 12,
		path: "game.items.contents.findByType(\"trapping\")"
	},
	{
		hook: "ready",
		label: "game.wfrp4e.config",
		maxDepth: 2,
		maxEntries: 24,
		path: "game.wfrp4e.config"
	},
	{
		hook: "ready",
		label: "game.wfrp4e.utility",
		maxDepth: 2,
		maxEntries: 24,
		path: "game.wfrp4e.utility"
	},
	{
		hook: "ready",
		label: "CONFIG.WFRP4E",
		maxDepth: 2,
		maxEntries: 24,
		path: "CONFIG.WFRP4E"
	}
] };
function Rg() {
	localStorage.removeItem(Ag), console.info(`${e} | Cleared debug shape probes.`);
}
function zg() {
	return i_();
}
function Bg(e, t = {}) {
	let n = Vg(e, t);
	return Yg(n), n;
}
function Vg(e, t = {}, n) {
	let r = Gg(t.maxDepth, Ng, Fg), i = Gg(t.maxEntries, Pg, Ig), a = u_(e), o = {
		inspectedAt: (/* @__PURE__ */ new Date()).toISOString(),
		label: t.label || e,
		maxDepth: r,
		maxEntries: i,
		path: e,
		value: g_(a, {
			maxDepth: r,
			maxEntries: i,
			seen: /* @__PURE__ */ new WeakSet()
		})
	};
	return n && (o.hook = n), o;
}
function Hg() {
	let t = i_();
	for (let e of ["init", "setup"]) {
		let n = t.filter((t) => t.hook === e);
		n.length && Hooks.once(e, () => {
			for (let t of n) qg(t, e);
		});
	}
	Hooks.once("ready", () => {
		let t = i_().filter((e) => (e.hook ?? "ready") === "ready");
		s_() && console.info(`${e} | Debug shape ready probes discovered: ${t.length}`, window.location.href);
		for (let e of t) qg(e, "ready");
	});
}
function Ug(t) {
	let n = t.map(Zg);
	localStorage.setItem(Ag, JSON.stringify(n)), console.info(`${e} | Stored ${n.length} debug shape probe(s). Reload Foundry to run init/setup probes.`);
}
function Wg(e, t, n) {
	if (t === "at") {
		let t = Number(n[0] ?? 0), r = Number.isFinite(t) ? t : 0;
		return v_(e).at(r);
	}
	if (t === "findByName") {
		let t = Xg(n[0] ?? "");
		return v_(e).find((e) => Xg(n_(e, "name")) === t);
	}
	if (t === "findByType") {
		let t = Xg(n[0] ?? "");
		return v_(e).find((e) => Xg(n_(e, "type")) === t);
	}
	if (t === "get") {
		let t = n[0] ?? "";
		if (e instanceof Map) return e.get(t);
		let r = n_(e, "get");
		if (typeof r == "function") return r.call(e, t);
	}
	if (t === "sample") {
		let t = Gg(n[0], 3, Ig);
		return v_(e).slice(0, t);
	}
	throw Error(`Unsupported path method "${t}".`);
}
function Gg(e, t, n) {
	let r = Number(e);
	return Number.isFinite(r) ? Math.max(0, Math.min(n, Math.floor(r))) : t;
}
function Kg(e, t) {
	return Object.keys(e).sort().slice(0, t);
}
function qg(t, n) {
	try {
		Yg(Vg(t.path, t, n));
	} catch (n) {
		console.warn(`${e} | Debug shape probe failed for "${t.path}".`, n);
	}
}
function Jg(e) {
	return typeof e == "object" && !!e;
}
function Yg(t) {
	console.info(`${e} | Debug shape probe: ${t.label}`, JSON.stringify(t, null, 2));
}
function Xg(e) {
	return typeof e == "string" ? e.trim().toLocaleLowerCase() : "";
}
function Zg(e) {
	let t = {
		hook: e.hook ?? "ready",
		maxDepth: Gg(e.maxDepth, Ng, Fg),
		maxEntries: Gg(e.maxEntries, Pg, Ig),
		path: e.path.trim()
	};
	return e.label && (t.label = e.label), t;
}
function Qg(e) {
	return e.trim() ? e.split(",").map((e) => e_(e.trim())).map(String) : [];
}
function $g(e) {
	let t = e.trim();
	return /^-?\d+$/.test(t) ? Number(t) : e_(t);
}
function e_(e) {
	let t = e.match(/^['"](?<value>.*)['"]$/);
	return t?.groups ? t.groups.value ?? "" : e;
}
function t_(e) {
	let t = e.trim().match(/^(?<root>[A-Za-z_$][\w$]*)/);
	if (!t?.groups) throw Error(`Debug path "${e}" does not start with a root name.`);
	let n = t.groups.root;
	if (!n) throw Error(`Debug path "${e}" does not start with a root name.`);
	let r = [], i = e.trim().slice(n.length);
	for (; i;) {
		let e = i.match(/^\.(?<name>[A-Za-z_$][\w$]*)\((?<args>[^)]*)\)/);
		if (e?.groups) {
			let t = e.groups.name;
			if (!t) throw Error(`Could not parse debug path near "${i}".`);
			r.push({
				args: Qg(e.groups.args ?? ""),
				name: t,
				type: "method"
			}), i = i.slice(e[0].length);
			continue;
		}
		let t = i.match(/^\.(?<key>[A-Za-z_$][\w$]*)/);
		if (t?.groups) {
			let e = t.groups.key;
			if (!e) throw Error(`Could not parse debug path near "${i}".`);
			r.push({
				key: e,
				type: "property"
			}), i = i.slice(t[0].length);
			continue;
		}
		let n = i.match(/^\[(?<index>[^\]]+)\]/);
		if (n?.groups) {
			let e = n.groups.index;
			if (!e) throw Error(`Could not parse debug path near "${i}".`);
			r.push({
				index: $g(e),
				type: "index"
			}), i = i.slice(n[0].length);
			continue;
		}
		throw Error(`Could not parse debug path near "${i}".`);
	}
	return {
		root: n,
		tokens: r
	};
}
function n_(e, t) {
	if (!(!Jg(e) && typeof e != "function")) try {
		return e[t];
	} catch {
		return;
	}
}
function r_() {
	let e = l_(Ag);
	if (!e) return [];
	try {
		let t = JSON.parse(e);
		return Array.isArray(t) ? t.filter((e) => typeof e == "object" && !!e && typeof e.path == "string").map(Zg) : [];
	} catch {
		return [];
	}
}
function i_() {
	return [...r_(), ...a_()].map(Zg);
}
function a_() {
	let e = [], t = [new URLSearchParams(window.location.search), new URLSearchParams(window.location.hash.replace(/^#/, ""))];
	for (let n of t) {
		let t = n.get(Mg), r = n.get(jg);
		t && e.push(...Lg[t] ?? []), r && e.push(...o_(r));
	}
	return window.location.href.includes(`${Mg}=npc-builder`) && !e.length && e.push(...Lg["npc-builder"] ?? []), e;
}
function o_(t) {
	try {
		let e = JSON.parse(decodeURIComponent(t));
		return Array.isArray(e) ? e.filter(c_) : [];
	} catch (t) {
		return console.warn(`${e} | Could not parse URL shape probes.`, t), [];
	}
}
function s_() {
	return window.location.href.includes(jg) || window.location.href.includes(Mg);
}
function c_(e) {
	return typeof e == "object" && !!e && typeof e.path == "string";
}
function l_(e) {
	try {
		return localStorage.getItem(e);
	} catch {
		return null;
	}
}
function u_(e) {
	let t = t_(e), n = n_(globalThis, t.root);
	for (let e of t.tokens) {
		if (e.type === "property") {
			n = n_(n, e.key);
			continue;
		}
		if (e.type === "index") {
			n = n_(n, String(e.index));
			continue;
		}
		n = Wg(n, e.name, e.args);
	}
	return n;
}
function d_(e, t) {
	return {
		length: e.length,
		sample: e.slice(0, t.maxEntries).map((e) => g_(e, __(t))),
		type: "array"
	};
}
function f_(e, t) {
	return {
		sample: [...e.entries()].slice(0, t.maxEntries).map(([e, n]) => ({
			key: g_(e, __(t)),
			value: g_(n, __(t))
		})),
		size: e.size,
		type: "Map"
	};
}
function p_(e) {
	return {
		name: e.name,
		type: "function"
	};
}
function m_(e, t) {
	if (t.seen.has(e)) return { type: "circular" };
	t.seen.add(e);
	let n = Kg(e, t.maxEntries), r = {
		constructor: e.constructor?.name ?? "Object",
		keys: n,
		type: "object"
	};
	for (let t of [
		"documentName",
		"id",
		"name",
		"type",
		"uuid"
	]) {
		let n = n_(e, t);
		typeof n == "string" && (r[t] = n);
	}
	if (t.maxDepth <= 0) return r;
	let i = {};
	for (let r of n) i[r] = g_(n_(e, r), __(t));
	r.properties = i;
	let a = n_(e, "toObject");
	if (typeof a == "function") try {
		r.source = g_(a.call(e), __(t));
	} catch (e) {
		r.source = {
			error: e instanceof Error ? e.message : String(e),
			type: "error"
		};
	}
	return r;
}
function h_(e) {
	if (typeof e == "string") {
		let t = e.length > 120 ? `${e.slice(0, 120)}...` : e;
		return {
			length: e.length,
			sample: t,
			type: "string"
		};
	}
	return {
		type: e === null ? "null" : typeof e,
		value: e
	};
}
function g_(e, t) {
	return !Jg(e) && typeof e != "function" ? h_(e) : typeof e == "function" ? p_(e) : Array.isArray(e) ? d_(e, t) : e instanceof Map ? f_(e, t) : m_(e, t);
}
function __(e) {
	return {
		maxDepth: e.maxDepth - 1,
		maxEntries: e.maxEntries,
		seen: e.seen
	};
}
function v_(e) {
	if (Array.isArray(e)) return e;
	let t = n_(e, "contents");
	return Array.isArray(t) ? t : [];
}
//#endregion
//#region src/module/create-module-api.ts
function y_() {
	return {
		clearDebugShapeProbes: Rg,
		getDebugShapeProbes: zg,
		inspectPath: Bg,
		openNpcBuilder: async () => {
			await new wg().render(!0);
		},
		openWorkbench: async () => {
			await new kg().render(!0);
		},
		setDebugShapeProbes: Ug
	};
}
//#endregion
//#region src/module/register-module-menus.ts
function b_() {
	game.settings.registerMenu(e, "workbench", {
		hint: "Open the WFRP4e Customizer Apps workbench.",
		icon: "fa-solid fa-screwdriver-wrench",
		label: "Open Workbench",
		name: "WFRP4e Customizer Apps",
		restricted: !0,
		type: kg
	}), game.settings.registerMenu(e, "npc-builder", {
		hint: "Build a WFRP4e NPC from a base Actor and Career items.",
		icon: "fa-solid fa-user-plus",
		label: "Open NPC Builder",
		name: "WFRP4e NPC Builder",
		restricted: !0,
		type: wg
	});
}
//#endregion
//#region src/module/register-module-settings.ts
function x_() {
	vg();
}
//#endregion
//#region src/module/apps/npc-builder/register-actor-directory-button.ts
var S_ = "wfrp4e-customizer-open-npc-builder";
function C_() {
	Hooks.on("renderActorDirectory", (e, t) => {
		let n = E_(t);
		n && w_(n);
	});
}
function w_(e) {
	if (e.querySelector(`.${S_}`)) return;
	let t = T_(e);
	if (!t) {
		console.warn("wfrp4e-customizer-apps | Could not find Actor Directory button container.");
		return;
	}
	let n = document.createElement("button");
	n.classList.add(S_), n.type = "button", n.innerHTML = "<i class=\"fa-solid fa-user-plus\" inert></i><span>NPC Builder App</span>", n.addEventListener("click", () => {
		new wg().render(!0);
	}), t.append(n);
}
function T_(e) {
	return e.querySelector(".directory-header .header-actions") ?? e.querySelector(".directory-header .action-buttons") ?? e.querySelector(".header-actions") ?? e.querySelector(".action-buttons");
}
function E_(e) {
	return e instanceof HTMLElement ? e : D_(e) && e[0] instanceof HTMLElement ? e[0] : null;
}
function D_(e) {
	return typeof e == "object" && !!e && "length" in e;
}
Hg(), Hooks.once("init", () => {
	console.info(`${e} | Initializing`), x_(), b_(), C_();
}), Hooks.once("ready", () => {
	if (game.system.id !== "wfrp4e") {
		console.warn(`${e} | Loaded outside ${t}; skipping module API registration.`);
		return;
	}
	let n = game.modules.get(e);
	if (!n) {
		console.warn(`${e} | Foundry did not expose the module entry.`);
		return;
	}
	n.api = y_(), Sp(), Rp(), console.info(`${e} | Ready`);
});
//#endregion
