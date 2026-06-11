//#region src/module/logging.ts
function e(e, ...t) {
	console.info(e, ...t);
}
function t(e, ...t) {
	console.warn(e, ...t);
}
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
}, ee = /-\w/g, te = O((e) => e.replace(ee, (e) => e.slice(1).toUpperCase())), ne = /\B([A-Z])/g, re = O((e) => e.replace(ne, "-$1").toLowerCase()), ie = O((e) => e.charAt(0).toUpperCase() + e.slice(1)), ae = O((e) => e ? `on${ie(e)}` : ""), k = (e, t) => !Object.is(e, t), oe = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, se = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, ce = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, le = (e) => {
	let t = v(e) ? Number(e) : NaN;
	return isNaN(t) ? e : t;
}, ue, de = () => ue ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function fe(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = v(r) ? ge(r) : fe(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	} else if (v(e) || b(e)) return e;
}
var pe = /;(?![^(]*\))/g, me = /:([^]+)/, he = /\/\*[^]*?\*\//g;
function ge(e) {
	let t = {};
	return e.replace(he, "").split(pe).forEach((e) => {
		if (e) {
			let n = e.split(me);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function A(e) {
	let t = "";
	if (v(e)) t = e;
	else if (p(e)) for (let n = 0; n < e.length; n++) {
		let r = A(e[n]);
		r && (t += r + " ");
	}
	else if (b(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var _e = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ve = /* @__PURE__ */ n(_e);
_e + "";
function ye(e) {
	return !!e || e === "";
}
function be(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = xe(e[r], t[r]);
	return n;
}
function xe(e, t) {
	if (e === t) return !0;
	let n = g(e), r = g(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = y(e), r = y(t), n || r) return e === t;
	if (n = p(e), r = p(t), n || r) return n && r ? be(e, t) : !1;
	if (n = b(e), r = b(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !xe(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
function Se(e, t) {
	return e.findIndex((e) => xe(e, t));
}
var Ce = (e) => !!(e && e.__v_isRef === !0), j = (e) => v(e) ? e : e == null ? "" : p(e) || b(e) && (e.toString === S || !_(e.toString)) ? Ce(e) ? j(e.value) : JSON.stringify(e, we, 2) : String(e), we = (e, t) => Ce(t) ? we(e, t.value) : m(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Te(t, r) + " =>"] = n, e), {}) } : h(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Te(e)) } : y(t) ? Te(t) : b(t) && !p(t) && !T(t) ? String(t) : t, Te = (e, t = "") => y(e) ? `Symbol(${e.description ?? t})` : e, Ee, De = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && Ee && (Ee.active ? (this.parent = Ee, this.index = (Ee.scopes ||= []).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
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
			let t = Ee;
			try {
				return Ee = this, e();
			} finally {
				Ee = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = Ee, Ee = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (Ee === this) Ee = this.prevScope;
			else {
				let e = Ee;
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
function Oe(e) {
	return new De(e);
}
function ke() {
	return Ee;
}
function Ae(e, t = !1) {
	Ee && Ee.cleanups.push(e);
}
var M, je = /* @__PURE__ */ new WeakSet(), Me = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ee && (Ee.active ? Ee.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, je.has(this) && (je.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ie(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, Ye(this), ze(this);
		let e = M, t = Ge;
		M = this, Ge = !0;
		try {
			return this.fn();
		} finally {
			Be(this), M = e, Ge = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Ue(e);
			this.deps = this.depsTail = void 0, Ye(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? je.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Ve(this) && this.run();
	}
	get dirty() {
		return Ve(this);
	}
}, Ne = 0, Pe, Fe;
function Ie(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Fe, Fe = e;
		return;
	}
	e.next = Pe, Pe = e;
}
function Le() {
	Ne++;
}
function Re() {
	if (--Ne > 0) return;
	if (Fe) {
		let e = Fe;
		for (Fe = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Pe;) {
		let t = Pe;
		for (Pe = void 0; t;) {
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
function ze(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Be(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Ue(r), We(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Ve(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (He(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function He(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Xe) || (e.globalVersion = Xe, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ve(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = M, r = Ge;
	M = e, Ge = !0;
	try {
		ze(e);
		let n = e.fn(e._value);
		(t.version === 0 || k(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		M = n, Ge = r, Be(e), e.flags &= -3;
	}
}
function Ue(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Ue(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function We(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var Ge = !0, Ke = [];
function qe() {
	Ke.push(Ge), Ge = !1;
}
function Je() {
	let e = Ke.pop();
	Ge = e === void 0 ? !0 : e;
}
function Ye(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = M;
		M = void 0;
		try {
			t();
		} finally {
			M = e;
		}
	}
}
var Xe = 0, Ze = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, Qe = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!M || !Ge || M === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== M) t = this.activeLink = new Ze(M, this), M.deps ? (t.prevDep = M.depsTail, M.depsTail.nextDep = t, M.depsTail = t) : M.deps = M.depsTail = t, $e(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = M.depsTail, t.nextDep = void 0, M.depsTail.nextDep = t, M.depsTail = t, M.deps === t && (M.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, Xe++, this.notify(e);
	}
	notify(e) {
		Le();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Re();
		}
	}
};
function $e(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) $e(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var et = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ Symbol(""), nt = /* @__PURE__ */ Symbol(""), rt = /* @__PURE__ */ Symbol("");
function it(e, t, n) {
	if (Ge && M) {
		let t = et.get(e);
		t || et.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new Qe()), r.map = t, r.key = n), r.track();
	}
}
function at(e, t, n, r, i, a) {
	let o = et.get(e);
	if (!o) {
		Xe++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Le(), t === "clear") o.forEach(s);
	else {
		let i = p(e), a = i && E(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === rt || !y(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(rt)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(tt)), m(e) && s(o.get(nt)));
				break;
			case "delete":
				i || (s(o.get(tt)), m(e) && s(o.get(nt)));
				break;
			case "set":
				m(e) && s(o.get(tt));
				break;
		}
	}
	Re();
}
function ot(e, t) {
	let n = et.get(e);
	return n && n.get(t);
}
function st(e) {
	let t = /* @__PURE__ */ N(e);
	return t === e ? t : (it(t, "iterate", rt), /* @__PURE__ */ qt(e) ? t : t.map(Xt));
}
function ct(e) {
	return it(e = /* @__PURE__ */ N(e), "iterate", rt), e;
}
function lt(e, t) {
	return /* @__PURE__ */ Kt(e) ? Zt(/* @__PURE__ */ Gt(e) ? Xt(t) : t) : Xt(t);
}
var ut = {
	__proto__: null,
	[Symbol.iterator]() {
		return dt(this, Symbol.iterator, (e) => lt(this, e));
	},
	concat(...e) {
		return st(this).concat(...e.map((e) => p(e) ? st(e) : e));
	},
	entries() {
		return dt(this, "entries", (e) => (e[1] = lt(this, e[1]), e));
	},
	every(e, t) {
		return pt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return pt(this, "filter", e, t, (e) => e.map((e) => lt(this, e)), arguments);
	},
	find(e, t) {
		return pt(this, "find", e, t, (e) => lt(this, e), arguments);
	},
	findIndex(e, t) {
		return pt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return pt(this, "findLast", e, t, (e) => lt(this, e), arguments);
	},
	findLastIndex(e, t) {
		return pt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return pt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return ht(this, "includes", e);
	},
	indexOf(...e) {
		return ht(this, "indexOf", e);
	},
	join(e) {
		return st(this).join(e);
	},
	lastIndexOf(...e) {
		return ht(this, "lastIndexOf", e);
	},
	map(e, t) {
		return pt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return gt(this, "pop");
	},
	push(...e) {
		return gt(this, "push", e);
	},
	reduce(e, ...t) {
		return mt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return mt(this, "reduceRight", e, t);
	},
	shift() {
		return gt(this, "shift");
	},
	some(e, t) {
		return pt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return gt(this, "splice", e);
	},
	toReversed() {
		return st(this).toReversed();
	},
	toSorted(e) {
		return st(this).toSorted(e);
	},
	toSpliced(...e) {
		return st(this).toSpliced(...e);
	},
	unshift(...e) {
		return gt(this, "unshift", e);
	},
	values() {
		return dt(this, "values", (e) => lt(this, e));
	}
};
function dt(e, t, n) {
	let r = ct(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ qt(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var ft = Array.prototype;
function pt(e, t, n, r, i, a) {
	let o = ct(e), s = o !== e && !/* @__PURE__ */ qt(e), c = o[t];
	if (c !== ft[t]) {
		let t = c.apply(e, a);
		return s ? Xt(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, lt(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function mt(e, t, n, r) {
	let i = ct(e), a = i !== e && !/* @__PURE__ */ qt(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = lt(e, t)), n.call(this, t, lt(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? lt(e, c) : c;
}
function ht(e, t, n) {
	let r = /* @__PURE__ */ N(e);
	it(r, "iterate", rt);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Jt(n[0]) ? (n[0] = /* @__PURE__ */ N(n[0]), r[t](...n)) : i;
}
function gt(e, t, n = []) {
	qe(), Le();
	let r = (/* @__PURE__ */ N(e))[t].apply(e, n);
	return Re(), Je(), r;
}
var _t = /* @__PURE__ */ n("__proto__,__v_isRef,__isVue"), vt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(y));
function yt(e) {
	y(e) || (e = String(e));
	let t = /* @__PURE__ */ N(this);
	return it(t, "has", e), t.hasOwnProperty(e);
}
var bt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Rt : Lt : i ? It : Ft).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = p(e);
		if (!r) {
			let e;
			if (a && (e = ut[t])) return e;
			if (t === "hasOwnProperty") return yt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ P(e) ? e : n);
		if ((y(t) ? vt.has(t) : _t(t)) || (r || it(e, "get", t), i)) return o;
		if (/* @__PURE__ */ P(o)) {
			let e = a && E(t) ? o : o.value;
			return r && b(e) ? /* @__PURE__ */ Ut(e) : e;
		}
		return b(o) ? r ? /* @__PURE__ */ Ut(o) : /* @__PURE__ */ Vt(o) : o;
	}
}, xt = class extends bt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = p(e) && E(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Kt(i);
			if (!/* @__PURE__ */ qt(n) && !/* @__PURE__ */ Kt(n) && (i = /* @__PURE__ */ N(i), n = /* @__PURE__ */ N(n)), !a && /* @__PURE__ */ P(i) && !/* @__PURE__ */ P(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : f(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ P(e) ? e : r);
		return e === /* @__PURE__ */ N(r) && (o ? k(n, i) && at(e, "set", t, n, i) : at(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = f(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && at(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!y(t) || !vt.has(t)) && it(e, "has", t), n;
	}
	ownKeys(e) {
		return it(e, "iterate", p(e) ? "length" : tt), Reflect.ownKeys(e);
	}
}, St = class extends bt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, Ct = /* @__PURE__ */ new xt(), wt = /* @__PURE__ */ new St(), Tt = /* @__PURE__ */ new xt(!0), Et = (e) => e, Dt = (e) => Reflect.getPrototypeOf(e);
function Ot(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ N(i), o = m(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, u = i[e](...r), d = n ? Et : t ? Zt : Xt;
		return !t && it(a, "iterate", c ? nt : tt), l(Object.create(u), { next() {
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
function kt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function At(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ N(r), a = /* @__PURE__ */ N(n);
			e || (k(n, a) && it(i, "get", n), it(i, "get", a));
			let { has: o } = Dt(i), s = t ? Et : e ? Zt : Xt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && it(/* @__PURE__ */ N(t), "iterate", tt), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ N(n), i = /* @__PURE__ */ N(t);
			return e || (k(t, i) && it(r, "has", t), it(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ N(a), s = t ? Et : e ? Zt : Xt;
			return !e && it(o, "iterate", tt), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return l(n, e ? {
		add: kt("add"),
		set: kt("set"),
		delete: kt("delete"),
		clear: kt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ N(this), r = Dt(n), i = /* @__PURE__ */ N(e), a = !t && !/* @__PURE__ */ qt(e) && !/* @__PURE__ */ Kt(e) ? i : e;
			return r.has.call(n, a) || k(e, a) && r.has.call(n, e) || k(i, a) && r.has.call(n, i) || (n.add(a), at(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ qt(n) && !/* @__PURE__ */ Kt(n) && (n = /* @__PURE__ */ N(n));
			let r = /* @__PURE__ */ N(this), { has: i, get: a } = Dt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ N(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? k(n, s) && at(r, "set", e, n, s) : at(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ N(this), { has: n, get: r } = Dt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ N(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && at(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ N(this), t = e.size !== 0, n = e.clear();
			return t && at(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Ot(r, e, t);
	}), n;
}
function jt(e, t) {
	let n = At(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(f(n, r) && r in t ? n : t, r, i);
}
var Mt = { get: /* @__PURE__ */ jt(!1, !1) }, Nt = { get: /* @__PURE__ */ jt(!1, !0) }, Pt = { get: /* @__PURE__ */ jt(!0, !1) }, Ft = /* @__PURE__ */ new WeakMap(), It = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap();
function zt(e) {
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
function Bt(e) {
	return e.__v_skip || !Object.isExtensible(e) ? 0 : zt(w(e));
}
/* @__NO_SIDE_EFFECTS__ */
function Vt(e) {
	return /* @__PURE__ */ Kt(e) ? e : Wt(e, !1, Ct, Mt, Ft);
}
/* @__NO_SIDE_EFFECTS__ */
function Ht(e) {
	return Wt(e, !1, Tt, Nt, It);
}
/* @__NO_SIDE_EFFECTS__ */
function Ut(e) {
	return Wt(e, !0, wt, Pt, Lt);
}
function Wt(e, t, n, r, i) {
	if (!b(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
	let a = Bt(e);
	if (a === 0) return e;
	let o = i.get(e);
	if (o) return o;
	let s = new Proxy(e, a === 2 ? r : n);
	return i.set(e, s), s;
}
/* @__NO_SIDE_EFFECTS__ */
function Gt(e) {
	return /* @__PURE__ */ Kt(e) ? /* @__PURE__ */ Gt(e.__v_raw) : !!(e && e.__v_isReactive);
}
/* @__NO_SIDE_EFFECTS__ */
function Kt(e) {
	return !!(e && e.__v_isReadonly);
}
/* @__NO_SIDE_EFFECTS__ */
function qt(e) {
	return !!(e && e.__v_isShallow);
}
/* @__NO_SIDE_EFFECTS__ */
function Jt(e) {
	return e ? !!e.__v_raw : !1;
}
/* @__NO_SIDE_EFFECTS__ */
function N(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ N(t) : e;
}
function Yt(e) {
	return !f(e, "__v_skip") && Object.isExtensible(e) && se(e, "__v_skip", !0), e;
}
var Xt = (e) => b(e) ? /* @__PURE__ */ Vt(e) : e, Zt = (e) => b(e) ? /* @__PURE__ */ Ut(e) : e;
/* @__NO_SIDE_EFFECTS__ */
function P(e) {
	return e ? e.__v_isRef === !0 : !1;
}
/* @__NO_SIDE_EFFECTS__ */
function F(e) {
	return Qt(e, !1);
}
function Qt(e, t) {
	return /* @__PURE__ */ P(e) ? e : new $t(e, t);
}
var $t = class {
	constructor(e, t) {
		this.dep = new Qe(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ N(e), this._value = t ? e : Xt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ qt(e) || /* @__PURE__ */ Kt(e);
		e = n ? e : /* @__PURE__ */ N(e), k(e, t) && (this._rawValue = e, this._value = n ? e : Xt(e), this.dep.trigger());
	}
};
function I(e) {
	return /* @__PURE__ */ P(e) ? e.value : e;
}
var en = {
	get: (e, t, n) => t === "__v_raw" ? e : I(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ P(i) && !/* @__PURE__ */ P(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function tn(e) {
	return /* @__PURE__ */ Gt(e) ? e : new Proxy(e, en);
}
/* @__NO_SIDE_EFFECTS__ */
function nn(e) {
	let t = p(e) ? Array(e.length) : {};
	for (let n in e) t[n] = sn(e, n);
	return t;
}
var rn = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = y(t) ? t : String(t), this._raw = /* @__PURE__ */ N(e);
		let r = !0, i = e;
		if (!p(e) || y(this._key) || !E(this._key)) do
			r = !/* @__PURE__ */ Jt(i) || /* @__PURE__ */ qt(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = I(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ P(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ P(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return ot(this._raw, this._key);
	}
}, an = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
/* @__NO_SIDE_EFFECTS__ */
function on(e, t, n) {
	return /* @__PURE__ */ P(e) ? e : _(e) ? new an(e) : b(e) && arguments.length > 1 ? sn(e, t, n) : /* @__PURE__ */ F(e);
}
function sn(e, t, n) {
	return new rn(e, t, n);
}
var cn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new Qe(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Xe - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && M !== this) return Ie(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return He(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
/* @__NO_SIDE_EFFECTS__ */
function ln(e, t, n = !1) {
	let r, i;
	return _(e) ? r = e : (r = e.get, i = e.set), new cn(r, i, n);
}
var un = {}, dn = /* @__PURE__ */ new WeakMap(), fn = void 0;
function pn(e, t = !1, n = fn) {
	if (n) {
		let t = dn.get(n);
		t || dn.set(n, t = []), t.push(e);
	}
}
function mn(e, t, n = r) {
	let { immediate: i, deep: o, once: s, scheduler: c, augmentJob: l, call: d } = n, f = (e) => o ? e : /* @__PURE__ */ qt(e) || o === !1 || o === 0 ? hn(e, 1) : hn(e), m, h, g, v, y = !1, b = !1;
	if (/* @__PURE__ */ P(e) ? (h = () => e.value, y = /* @__PURE__ */ qt(e)) : /* @__PURE__ */ Gt(e) ? (h = () => f(e), y = !0) : p(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Gt(e) || /* @__PURE__ */ qt(e)), h = () => e.map((e) => {
		if (/* @__PURE__ */ P(e)) return e.value;
		if (/* @__PURE__ */ Gt(e)) return f(e);
		if (_(e)) return d ? d(e, 2) : e();
	})) : h = _(e) ? t ? d ? () => d(e, 2) : e : () => {
		if (g) {
			qe();
			try {
				g();
			} finally {
				Je();
			}
		}
		let t = fn;
		fn = m;
		try {
			return d ? d(e, 3, [v]) : e(v);
		} finally {
			fn = t;
		}
	} : a, t && o) {
		let e = h, t = o === !0 ? Infinity : o;
		h = () => hn(e(), t);
	}
	let x = ke(), S = () => {
		m.stop(), x && x.active && u(x.effects, m);
	};
	if (s && t) {
		let e = t;
		t = (...t) => {
			e(...t), S();
		};
	}
	let C = b ? Array(e.length).fill(un) : un, w = (e) => {
		if (!(!(m.flags & 1) || !m.dirty && !e)) if (t) {
			let e = m.run();
			if (o || y || (b ? e.some((e, t) => k(e, C[t])) : k(e, C))) {
				g && g();
				let n = fn;
				fn = m;
				try {
					let n = [
						e,
						C === un ? void 0 : b && C[0] === un ? [] : C,
						v
					];
					C = e, d ? d(t, 3, n) : t(...n);
				} finally {
					fn = n;
				}
			}
		} else m.run();
	};
	return l && l(w), m = new Me(h), m.scheduler = c ? () => c(w, !1) : w, v = (e) => pn(e, !1, m), g = m.onStop = () => {
		let e = dn.get(m);
		if (e) {
			if (d) d(e, 4);
			else for (let t of e) t();
			dn.delete(m);
		}
	}, t ? i ? w(!0) : C = m.run() : c ? c(w.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function hn(e, t = Infinity, n) {
	if (t <= 0 || !b(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ P(e)) hn(e.value, t, n);
	else if (p(e)) for (let r = 0; r < e.length; r++) hn(e[r], t, n);
	else if (h(e) || m(e)) e.forEach((e) => {
		hn(e, t, n);
	});
	else if (T(e)) {
		for (let r in e) hn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && hn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function gn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		vn(e, t, n);
	}
}
function _n(e, t, n, r) {
	if (_(e)) {
		let i = gn(e, t, n, r);
		return i && x(i) && i.catch((e) => {
			vn(e, t, n);
		}), i;
	}
	if (p(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(_n(e[a], t, n, r));
		return i;
	}
}
function vn(e, t, n, i = !0) {
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
			qe(), gn(o, null, 10, [
				e,
				i,
				a
			]), Je();
			return;
		}
	}
	yn(e, n, a, i, s);
}
function yn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var bn = [], xn = -1, Sn = [], Cn = null, wn = 0, Tn = /* @__PURE__ */ Promise.resolve(), En = null;
function Dn(e) {
	let t = En || Tn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function On(e) {
	let t = xn + 1, n = bn.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = bn[r], a = Pn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function kn(e) {
	if (!(e.flags & 1)) {
		let t = Pn(e), n = bn[bn.length - 1];
		!n || !(e.flags & 2) && t >= Pn(n) ? bn.push(e) : bn.splice(On(t), 0, e), e.flags |= 1, An();
	}
}
function An() {
	En ||= Tn.then(Fn);
}
function jn(e) {
	p(e) ? Sn.push(...e) : Cn && e.id === -1 ? Cn.splice(wn + 1, 0, e) : e.flags & 1 || (Sn.push(e), e.flags |= 1), An();
}
function Mn(e, t, n = xn + 1) {
	for (; n < bn.length; n++) {
		let t = bn[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			bn.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function Nn(e) {
	if (Sn.length) {
		let e = [...new Set(Sn)].sort((e, t) => Pn(e) - Pn(t));
		if (Sn.length = 0, Cn) {
			Cn.push(...e);
			return;
		}
		for (Cn = e, wn = 0; wn < Cn.length; wn++) {
			let e = Cn[wn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		Cn = null, wn = 0;
	}
}
var Pn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Fn(e) {
	try {
		for (xn = 0; xn < bn.length; xn++) {
			let e = bn[xn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), gn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; xn < bn.length; xn++) {
			let e = bn[xn];
			e && (e.flags &= -2);
		}
		xn = -1, bn.length = 0, Nn(e), En = null, (bn.length || Sn.length) && Fn(e);
	}
}
var In = null, Ln = null;
function Rn(e) {
	let t = In;
	return In = e, Ln = e && e.type.__scopeId || null, t;
}
function zn(e, t = In, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && ua(-1);
		let i = Rn(t), a;
		try {
			a = e(...n);
		} finally {
			Rn(i), r._d && ua(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Bn(e, t) {
	if (In === null) return e;
	let n = Ua(In), i = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [a, o, s, c = r] = t[e];
		a && (_(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && hn(o), i.push({
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
function Vn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (qe(), _n(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Je());
	}
}
function Hn(e, t) {
	if (Da) {
		let n = Da.provides, r = Da.parent && Da.parent.provides;
		r === n && (n = Da.provides = Object.create(r)), n[e] = t;
	}
}
function Un(e, t, n = !1) {
	let r = Oa();
	if (r || pi) {
		let i = pi ? pi._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && _(t) ? t.call(r && r.proxy) : t;
	}
}
function Wn() {
	return !!(Oa() || pi);
}
var Gn = /* @__PURE__ */ Symbol.for("v-scx"), Kn = () => Un(Gn);
function qn(e, t, n) {
	return Jn(e, t, n);
}
function Jn(e, t, n = r) {
	let { immediate: i, deep: o, flush: s, once: c } = n, u = l({}, n), d = t && i || !t && s !== "post", f;
	if (Pa) {
		if (s === "sync") {
			let e = Kn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = a, e.resume = a, e.pause = a, e;
		}
	}
	let p = Da;
	u.call = (e, t, n) => _n(e, p, t, n);
	let m = !1;
	s === "post" ? u.scheduler = (e) => {
		Wi(e, p && p.suspense);
	} : s !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : kn(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = mn(e, t, u);
	return Pa && (f ? f.push(h) : d && h()), h;
}
function Yn(e, t, n) {
	let r = this.proxy, i = v(e) ? e.includes(".") ? Xn(r, e) : () => r[e] : e.bind(r, r), a;
	_(t) ? a = t : (a = t.handler, n = t);
	let o = ja(this), s = Jn(i, a.bind(r), n);
	return o(), s;
}
function Xn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Zn = /* @__PURE__ */ Symbol("_vte"), Qn = (e) => e.__isTeleport, $n = /* @__PURE__ */ Symbol("_leaveCb"), er = /* @__PURE__ */ Symbol("_enterCb");
function tr() {
	let e = {
		isMounted: !1,
		isLeaving: !1,
		isUnmounting: !1,
		leavingVNodes: /* @__PURE__ */ new Map()
	};
	return Or(() => {
		e.isMounted = !0;
	}), jr(() => {
		e.isUnmounting = !0;
	}), e;
}
var nr = [Function, Array], rr = {
	mode: String,
	appear: Boolean,
	persisted: Boolean,
	onBeforeEnter: nr,
	onEnter: nr,
	onAfterEnter: nr,
	onEnterCancelled: nr,
	onBeforeLeave: nr,
	onLeave: nr,
	onAfterLeave: nr,
	onLeaveCancelled: nr,
	onBeforeAppear: nr,
	onAppear: nr,
	onAfterAppear: nr,
	onAppearCancelled: nr
}, ir = (e) => {
	let t = e.subTree;
	return t.component ? ir(t.component) : t;
}, ar = {
	name: "BaseTransition",
	props: rr,
	setup(e, { slots: t }) {
		let n = Oa(), r = tr();
		return () => {
			let i = t.default && pr(t.default(), !0), a = i && i.length ? or(i) : n.subTree ? K() : void 0;
			if (!a) return;
			let o = /* @__PURE__ */ N(e), { mode: s } = o;
			if (r.isLeaving) return ur(a);
			let c = dr(a);
			if (!c) return ur(a);
			let l = lr(c, o, r, n, (e) => l = e);
			c.type !== ia && fr(c, l);
			let u = n.subTree && dr(n.subTree);
			if (u && u.type !== ia && !pa(u, c) && ir(n).type !== ia) {
				let e = lr(u, o, r, n);
				if (fr(u, e), s === "out-in" && c.type !== ia) return r.isLeaving = !0, e.afterLeave = () => {
					r.isLeaving = !1, n.job.flags & 8 || n.update(), delete e.afterLeave, u = void 0;
				}, ur(a);
				s === "in-out" && c.type !== ia ? e.delayLeave = (e, t, n) => {
					let i = cr(r, u);
					i[String(u.key)] = u, e[$n] = () => {
						t(), e[$n] = void 0, delete l.delayedLeave, u = void 0;
					}, l.delayedLeave = () => {
						n(), delete l.delayedLeave, u = void 0;
					};
				} : u = void 0;
			} else u &&= void 0;
			return a;
		};
	}
};
function or(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== ia) {
			t = n;
			break;
		}
	}
	return t;
}
var sr = ar;
function cr(e, t) {
	let { leavingVNodes: n } = e, r = n.get(t.type);
	return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function lr(e, t, n, r, i) {
	let { appear: a, mode: o, persisted: s = !1, onBeforeEnter: c, onEnter: l, onAfterEnter: u, onEnterCancelled: d, onBeforeLeave: f, onLeave: m, onAfterLeave: h, onLeaveCancelled: g, onBeforeAppear: _, onAppear: v, onAfterAppear: y, onAppearCancelled: b } = t, x = String(e.key), S = cr(n, e), C = (e, t) => {
		e && _n(e, r, 9, t);
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
			t[$n] && t[$n](!0);
			let i = S[x];
			i && pa(e, i) && i.el[$n] && i.el[$n](), C(r, [t]);
		},
		enter(t) {
			if (S[x] === e) return;
			let r = l, i = u, o = d;
			if (!n.isMounted) if (a) r = v || l, i = y || u, o = b || d;
			else return;
			let s = !1;
			t[er] = (e) => {
				s || (s = !0, C(e ? o : i, [t]), T.delayedLeave && T.delayedLeave(), t[er] = void 0);
			};
			let c = t[er].bind(null, !1);
			r ? w(r, [t, c]) : c();
		},
		leave(t, r) {
			let i = String(e.key);
			if (t[er] && t[er](!0), n.isUnmounting) return r();
			C(f, [t]);
			let a = !1;
			t[$n] = (n) => {
				a || (a = !0, r(), C(n ? g : h, [t]), t[$n] = void 0, S[i] === e && delete S[i]);
			};
			let o = t[$n].bind(null, !1);
			S[i] = e, m ? w(m, [t, o]) : o();
		},
		clone(e) {
			let a = lr(e, t, n, r, i);
			return i && i(a), a;
		}
	};
	return T;
}
function ur(e) {
	if (br(e)) return e = va(e), e.children = null, e;
}
function dr(e) {
	if (!br(e)) return Qn(e.type) && e.children ? or(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && _(n.default)) return n.default();
	}
}
function fr(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, fr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function pr(e, t = !1, n) {
	let r = [], i = 0;
	for (let a = 0; a < e.length; a++) {
		let o = e[a], s = n == null ? o.key : String(n) + String(o.key == null ? a : o.key);
		o.type === z ? (o.patchFlag & 128 && i++, r = r.concat(pr(o.children, t, s))) : (t || o.type !== ia) && r.push(s == null ? o : va(o, { key: s }));
	}
	if (i > 1) for (let e = 0; e < r.length; e++) r[e].patchFlag = -2;
	return r;
}
/* @__NO_SIDE_EFFECTS__ */
function L(e, t) {
	return _(e) ? /* @__PURE__ */ l({ name: e.name }, t, { setup: e }) : e;
}
function mr(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function hr(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var gr = /* @__PURE__ */ new WeakMap();
function _r(e, t, n, i, a = !1) {
	if (p(e)) {
		e.forEach((e, r) => _r(e, t && (p(t) ? t[r] : t), n, i, a));
		return;
	}
	if (yr(i) && !a) {
		i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && _r(e, t, n, i.component.subTree);
		return;
	}
	let s = i.shapeFlag & 4 ? Ua(i.component) : i.el, c = a ? null : s, { i: l, r: d } = e, m = t && t.r, h = l.refs === r ? l.refs = {} : l.refs, g = l.setupState, y = /* @__PURE__ */ N(g), b = g === r ? o : (e) => hr(h, e) ? !1 : f(y, e), x = (e, t) => !(t && hr(h, t));
	if (m != null && m !== d) {
		if (vr(t), v(m)) h[m] = null, b(m) && (g[m] = null);
		else if (/* @__PURE__ */ P(m)) {
			let e = t;
			x(m, e.k) && (m.value = null), e.k && (h[e.k] = null);
		}
	}
	if (_(d)) gn(d, l, 12, [c, h]);
	else {
		let t = v(d), r = /* @__PURE__ */ P(d);
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
					i(), gr.delete(e);
				};
				t.id = -1, gr.set(e, t), Wi(t, n);
			} else vr(e), i();
		}
	}
}
function vr(e) {
	let t = gr.get(e);
	t && (t.flags |= 8, gr.delete(e));
}
de().requestIdleCallback, de().cancelIdleCallback;
var yr = (e) => !!e.type.__asyncLoader, br = (e) => e.type.__isKeepAlive;
function xr(e, t) {
	Cr(e, "a", t);
}
function Sr(e, t) {
	Cr(e, "da", t);
}
function Cr(e, t, n = Da) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (Tr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) br(e.parent.vnode) && wr(r, t, n, e), e = e.parent;
	}
}
function wr(e, t, n, r) {
	let i = Tr(t, e, r, !0);
	Mr(() => {
		u(r[t], i);
	}, n);
}
function Tr(e, t, n = Da, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			qe();
			let i = ja(n), a = _n(t, n, e, r);
			return i(), Je(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var Er = (e) => (t, n = Da) => {
	(!Pa || e === "sp") && Tr(e, (...e) => t(...e), n);
}, Dr = Er("bm"), Or = Er("m"), kr = Er("bu"), Ar = Er("u"), jr = Er("bum"), Mr = Er("um"), Nr = Er("sp"), Pr = Er("rtg"), Fr = Er("rtc");
function Ir(e, t = Da) {
	Tr("ec", e, t);
}
var Lr = /* @__PURE__ */ Symbol.for("v-ndc");
function R(e, t, n, r) {
	let i, a = n && n[r], o = p(e);
	if (o || v(e)) {
		let n = o && /* @__PURE__ */ Gt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ qt(e), s = /* @__PURE__ */ Kt(e), e = ct(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Zt(Xt(e[n])) : Xt(e[n]) : e[n], n, void 0, a && a[n]);
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
function Rr(e, t, n = {}, r, i) {
	if (In.ce || In.parent && yr(In.parent) && In.parent.ce) {
		let e = Object.keys(n).length > 0;
		return t !== "default" && (n.name = t), B(), H(z, null, [W("slot", n, r && r())], e ? -2 : 64);
	}
	let a = e[t];
	a && a._c && (a._d = !1), B();
	let o = a && zr(a(n)), s = n.key || o && o.key, c = H(z, { key: (s && !y(s) ? s : `_${t}`) + (!o && r ? "_fb" : "") }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), a && a._c && (a._d = !0), c;
}
function zr(e) {
	return e.some((e) => fa(e) ? !(e.type === ia || e.type === z && !zr(e.children)) : !0) ? e : null;
}
function Br(e, t) {
	let n = {};
	for (let r in e) n[t && /[A-Z]/.test(r) ? `on:${r}` : ae(r)] = e[r];
	return n;
}
var Vr = (e) => e ? Na(e) ? Ua(e) : Vr(e.parent) : null, Hr = /* @__PURE__ */ l(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Vr(e.parent),
	$root: (e) => Vr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => $r(e),
	$forceUpdate: (e) => e.f ||= () => {
		kn(e.update);
	},
	$nextTick: (e) => e.n ||= Dn.bind(e.proxy),
	$watch: (e) => Yn.bind(e)
}), Ur = (e, t) => e !== r && !e.__isScriptSetup && f(e, t), Wr = {
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
			else if (Ur(i, t)) return s[t] = 1, i[t];
			else if (a !== r && f(a, t)) return s[t] = 2, a[t];
			else if (f(o, t)) return s[t] = 3, o[t];
			else if (n !== r && f(n, t)) return s[t] = 4, n[t];
			else Jr && (s[t] = 0);
		}
		let u = Hr[t], d, p;
		if (u) return t === "$attrs" && it(e.attrs, "get", ""), u(e);
		if ((d = c.__cssModules) && (d = d[t])) return d;
		if (n !== r && f(n, t)) return s[t] = 4, n[t];
		if (p = l.config.globalProperties, f(p, t)) return p[t];
	},
	set({ _: e }, t, n) {
		let { data: i, setupState: a, ctx: o } = e;
		return Ur(a, t) ? (a[t] = n, !0) : i !== r && f(i, t) ? (i[t] = n, !0) : f(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(n[c] || e !== r && c[0] !== "$" && f(e, c) || Ur(t, c) || f(o, c) || f(i, c) || f(Hr, c) || f(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? f(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Gr() {
	return Kr("useSlots").slots;
}
function Kr(e) {
	let t = Oa();
	return t.setupContext ||= Ha(t);
}
function qr(e) {
	return p(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Jr = !0;
function Yr(e) {
	let t = $r(e), n = e.proxy, r = e.ctx;
	Jr = !1, t.beforeCreate && Zr(t.beforeCreate, e, "bc");
	let { data: i, computed: o, methods: s, watch: c, provide: l, inject: u, created: d, beforeMount: f, mounted: m, beforeUpdate: h, updated: g, activated: v, deactivated: y, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: w, render: T, renderTracked: E, renderTriggered: D, errorCaptured: O, serverPrefetch: ee, expose: te, inheritAttrs: ne, components: re, directives: ie, filters: ae } = t;
	if (u && Xr(u, r, null), s) for (let e in s) {
		let t = s[e];
		_(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		b(t) && (e.data = /* @__PURE__ */ Vt(t));
	}
	if (Jr = !0, o) for (let e in o) {
		let t = o[e], i = q({
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
	if (c) for (let e in c) Qr(c[e], r, n, e);
	if (l) {
		let e = _(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Hn(t, e[t]);
		});
	}
	d && Zr(d, e, "c");
	function k(e, t) {
		p(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (k(Dr, f), k(Or, m), k(kr, h), k(Ar, g), k(xr, v), k(Sr, y), k(Ir, O), k(Fr, E), k(Pr, D), k(jr, S), k(Mr, w), k(Nr, ee), p(te)) if (te.length) {
		let t = e.exposed ||= {};
		te.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	T && e.render === a && (e.render = T), ne != null && (e.inheritAttrs = ne), re && (e.components = re), ie && (e.directives = ie), ee && mr(e);
}
function Xr(e, t, n = a) {
	p(e) && (e = ii(e));
	for (let n in e) {
		let r = e[n], i;
		i = b(r) ? "default" in r ? Un(r.from || n, r.default, !0) : Un(r.from || n) : Un(r), /* @__PURE__ */ P(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Zr(e, t, n) {
	_n(p(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Qr(e, t, n, r) {
	let i = r.includes(".") ? Xn(n, r) : () => n[r];
	if (v(e)) {
		let n = t[e];
		_(n) && qn(i, n);
	} else if (_(e)) qn(i, e.bind(n));
	else if (b(e)) if (p(e)) e.forEach((e) => Qr(e, t, n, r));
	else {
		let r = _(e.handler) ? e.handler.bind(n) : t[e.handler];
		_(r) && qn(i, r, e);
	}
}
function $r(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => ei(c, e, o, !0)), ei(c, t, o)), b(t) && a.set(t, c), c;
}
function ei(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && ei(e, a, n, !0), i && i.forEach((t) => ei(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = ti[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var ti = {
	data: ni,
	props: si,
	emits: si,
	methods: oi,
	computed: oi,
	beforeCreate: ai,
	created: ai,
	beforeMount: ai,
	mounted: ai,
	beforeUpdate: ai,
	updated: ai,
	beforeDestroy: ai,
	beforeUnmount: ai,
	destroyed: ai,
	unmounted: ai,
	activated: ai,
	deactivated: ai,
	errorCaptured: ai,
	serverPrefetch: ai,
	components: oi,
	directives: oi,
	watch: ci,
	provide: ni,
	inject: ri
};
function ni(e, t) {
	return t ? e ? function() {
		return l(_(e) ? e.call(this, this) : e, _(t) ? t.call(this, this) : t);
	} : t : e;
}
function ri(e, t) {
	return oi(ii(e), ii(t));
}
function ii(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function ai(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function oi(e, t) {
	return e ? l(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function si(e, t) {
	return e ? p(e) && p(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : l(/* @__PURE__ */ Object.create(null), qr(e), qr(t ?? {})) : t;
}
function ci(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = l(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = ai(e[r], t[r]);
	return n;
}
function li() {
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
var di = 0;
function fi(e, t) {
	return function(n, r = null) {
		_(n) || (n = l({}, n)), r != null && !b(r) && (r = null);
		let i = li(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: di++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Ka,
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
					let u = c._ceVNode || W(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, Ua(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (_n(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = pi;
				pi = c;
				try {
					return e();
				} finally {
					pi = t;
				}
			}
		};
		return c;
	};
}
var pi = null, mi = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${te(t)}Modifiers`] || e[`${re(t)}Modifiers`];
function hi(e, t, ...n) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || r, a = n, o = t.startsWith("update:"), s = o && mi(i, t.slice(7));
	s && (s.trim && (a = n.map((e) => v(e) ? e.trim() : e)), s.number && (a = n.map(ce)));
	let c, l = i[c = ae(t)] || i[c = ae(te(t))];
	!l && o && (l = i[c = ae(re(t))]), l && _n(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, _n(u, e, 6, a);
	}
}
var gi = /* @__PURE__ */ new WeakMap();
function _i(e, t, n = !1) {
	let r = n ? gi : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!_(e)) {
		let r = (e) => {
			let n = _i(e, t, !0);
			n && (s = !0, l(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (b(e) && r.set(e, null), null) : (p(a) ? a.forEach((e) => o[e] = null) : l(o, a), b(e) && r.set(e, o), o);
}
function vi(e, t) {
	return !e || !s(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), f(e, t[0].toLowerCase() + t.slice(1)) || f(e, re(t)) || f(e, t));
}
function yi(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Rn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = ya(u.call(t, e, d, f, m, p, h)), y = s;
		} else {
			let e = t;
			v = ya(e.length > 1 ? e(f, {
				attrs: s,
				slots: o,
				emit: l
			}) : e(f, null)), y = t.props ? s : bi(s);
		}
	} catch (t) {
		oa.length = 0, vn(t, e, 1), v = W(ia);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(c) && (y = xi(y, a)), b = va(b, y, !1, !0));
	}
	return n.dirs && (b = va(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && fr(b, n.transition), v = b, Rn(_), v;
}
var bi = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || s(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, xi = (e, t) => {
	let n = {};
	for (let r in e) (!c(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function Si(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Ci(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (wi(o, r, n) && !vi(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? Ci(r, o, l) : !0 : !!o;
	return !1;
}
function Ci(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (wi(t, e, a) && !vi(n, a)) return !0;
	}
	return !1;
}
function wi(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && b(r) && b(i) ? !xe(r, i) : r !== i;
}
function Ti({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var Ei = {}, Di = () => Object.create(Ei), Oi = (e) => Object.getPrototypeOf(e) === Ei;
function ki(e, t, n, r = !1) {
	let i = {}, a = Di();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), ji(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ Ht(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function Ai(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ N(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (vi(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (f(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = te(o);
					i[t] = Mi(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		ji(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !f(t, a) && ((r = re(a)) === a || !f(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Mi(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !f(t, e)) && (delete a[e], l = !0);
	}
	l && at(e.attrs, "set", "");
}
function ji(e, t, n, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (t) for (let r in t) {
		if (D(r)) continue;
		let l = t[r], u;
		a && f(a, u = te(r)) ? !o || !o.includes(u) ? n[u] = l : (c ||= {})[u] = l : vi(e.emitsOptions, r) || (!(r in i) || l !== i[r]) && (i[r] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ N(n), i = c || r;
		for (let r = 0; r < o.length; r++) {
			let s = o[r];
			n[s] = Mi(a, t, s, i[s], e, !f(i, s));
		}
	}
	return s;
}
function Mi(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = f(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && _(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = ja(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === re(n)) && (r = !0));
	}
	return r;
}
var Ni = /* @__PURE__ */ new WeakMap();
function Pi(e, t, n = !1) {
	let a = n ? Ni : t.propsCache, o = a.get(e);
	if (o) return o;
	let s = e.props, c = {}, u = [], d = !1;
	if (!_(e)) {
		let r = (e) => {
			d = !0;
			let [n, r] = Pi(e, t, !0);
			l(c, n), r && u.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!s && !d) return b(e) && a.set(e, i), i;
	if (p(s)) for (let e = 0; e < s.length; e++) {
		let t = te(s[e]);
		Fi(t) && (c[t] = r);
	}
	else if (s) for (let e in s) {
		let t = te(e);
		if (Fi(t)) {
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
function Fi(e) {
	return e[0] !== "$" && !D(e);
}
var Ii = (e) => e === "_" || e === "_ctx" || e === "$stable", Li = (e) => p(e) ? e.map(ya) : [ya(e)], Ri = (e, t, n) => {
	if (t._n) return t;
	let r = zn((...e) => Li(t(...e)), n);
	return r._c = !1, r;
}, zi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Ii(n)) continue;
		let i = e[n];
		if (_(i)) t[n] = Ri(n, i, r);
		else if (i != null) {
			let e = Li(i);
			t[n] = () => e;
		}
	}
}, Bi = (e, t) => {
	let n = Li(t);
	e.slots.default = () => n;
}, Vi = (e, t, n) => {
	for (let r in t) (n || !Ii(r)) && (e[r] = t[r]);
}, Hi = (e, t, n) => {
	let r = e.slots = Di();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Vi(r, t, n), n && se(r, "_", e, !0)) : zi(t, r);
	} else t && Bi(e, t);
}, Ui = (e, t, n) => {
	let { vnode: i, slots: a } = e, o = !0, s = r;
	if (i.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? o = !1 : Vi(a, t, n) : (o = !t.$stable, zi(t, a)), s = t;
	} else t && (Bi(e, t), s = { default: 1 });
	if (o) for (let e in a) !Ii(e) && s[e] == null && delete a[e];
}, Wi = na;
function Gi(e) {
	return Ki(e);
}
function Ki(e, t) {
	let n = de();
	n.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = a, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !pa(e, t) && (r = ve(e), me(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case ra:
				y(e, t, n, r);
				break;
			case ia:
				b(e, t, n, r);
				break;
			case aa:
				e ?? x(t, n, r, o);
				break;
			case z:
				re(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? ie(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, xe);
		}
		u != null && i ? _r(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && _r(e.ref, null, a, e, !0);
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
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && O(e.children, d, null, r, i, qi(e, a), s, u), _ && Vn(e, null, r, "created"), E(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !D(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && Ca(f, r, e);
		}
		_ && Vn(e, null, r, "beforeMount");
		let v = Yi(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Wi(() => {
			try {
				f && Ca(f, r, e), v && g.enter(d), _ && Vn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, E = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || ta(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				E(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, O = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? ba(e[l]) : ya(e[l]), t, n, r, i, a, o, s);
	}, ee = (e, t, n, i, a, o, s) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || r, h = t.props || r, g;
		if (n && Ji(n, !1), (g = h.onVnodeBeforeUpdate) && Ca(g, n, t, e), f && Vn(t, e, n, "beforeUpdate"), n && Ji(n, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? te(e.dynamicChildren, d, l, n, i, qi(t, a), o) : s || le(e, t, l, null, n, i, qi(t, a), o, !1), u > 0) {
			if (u & 16) ne(l, m, h, n, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let r = e[t], i = m[r], o = h[r];
					(o !== i || r === "value") && c(l, r, i, o, a, n);
				}
			}
			u & 1 && e.children !== t.children && p(l, t.children);
		} else !s && d == null && ne(l, m, h, n, a);
		((g = h.onVnodeUpdated) || f) && Wi(() => {
			g && Ca(g, n, t, e), f && Vn(t, e, n, "updated");
		}, i);
	}, te = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === z || !pa(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
		}
	}, ne = (e, t, n, i, a) => {
		if (t !== n) {
			if (t !== r) for (let r in t) !D(r) && !(r in n) && c(e, r, t[r], null, a, i);
			for (let r in n) {
				if (D(r)) continue;
				let o = n[r], s = t[r];
				o !== s && r !== "value" && c(e, r, s, o, a, i);
			}
			"value" in n && c(e, "value", t.value, n.value, a);
		}
	}, re = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), O(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (te(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Xi(e, t, !0)) : le(e, t, n, f, i, a, s, c, l);
	}, ie = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ae(t, n, r, i, a, o, c) : k(e, t, c);
	}, ae = (e, t, n, r, i, a, o) => {
		let s = e.component = Ea(e, r, i);
		if (br(e) && (s.ctx.renderer = xe), Fa(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, se, o), !e.el) {
				let r = s.subTree = W(ia);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else se(s, e, t, n, i, a, o);
	}, k = (e, t, n) => {
		let r = t.component = e.component;
		if (Si(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			ce(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, se = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Qi(e);
					if (n) {
						t && (t.el = c.el, ce(e, t, o)), n.asyncDep.then(() => {
							Wi(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Ji(e, !1), t ? (t.el = c.el, ce(e, t, o)) : t = c, n && oe(n), (d = t.props && t.props.onVnodeBeforeUpdate) && Ca(d, s, t, c), Ji(e, !0);
				let f = yi(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), ve(p), e, i, a), t.el = f.el, u === null && Ti(e, f.el), r && Wi(r, i), (d = t.props && t.props.onVnodeUpdated) && Wi(() => Ca(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = yr(t);
				if (Ji(e, !1), l && oe(l), !m && (o = c && c.onVnodeBeforeMount) && Ca(o, d, t), Ji(e, !0), s && Ce) {
					let t = () => {
						e.subTree = yi(e), Ce(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = yi(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Wi(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Wi(() => Ca(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && yr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Wi(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Me(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => kn(u), Ji(e, !0), l();
	}, ce = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Ai(e, t.props, r, n), Ui(e, t.children, n), qe(), Mn(e), Je();
	}, le = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				fe(l, d, n, r, i, a, o, s, c);
				return;
			} else if (f & 256) {
				ue(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && _e(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? fe(l, d, n, r, i, a, o, s, c) : _e(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && O(d, n, r, i, a, o, s, c));
	}, ue = (e, t, n, r, a, o, s, c, l) => {
		e ||= i, t ||= i;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let r = t[p] = l ? ba(t[p]) : ya(t[p]);
			v(e[p], r, n, null, a, o, s, c, l);
		}
		u > d ? _e(e, a, o, !0, !1, f) : O(t, n, r, a, o, s, c, l, f);
	}, fe = (e, t, n, r, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], i = t[u] = l ? ba(t[u]) : ya(t[u]);
			if (pa(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], i = t[p] = l ? ba(t[p]) : ya(t[p]);
			if (pa(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, i = e < d ? t[e].el : r;
				for (; u <= p;) v(null, t[u] = l ? ba(t[u]) : ya(t[u]), n, i, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) me(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? ba(t[u]) : ya(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let r = e[u];
				if (y >= b) {
					me(r, a, o, !0);
					continue;
				}
				let i;
				if (r.key != null) i = g.get(r.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && pa(r, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? me(r, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(r, t[i], n, null, a, o, s, c, l), y++);
			}
			let w = x ? Zi(C) : i;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, i = t[e], f = t[e + 1], p = e + 1 < d ? f.el || ea(f) : r;
				C[u] === 0 ? v(null, i, n, p, a, o, s, c, l) : x && (_ < 0 || u !== w[_] ? pe(i, n, p, 2) : _--);
			}
		}
	}, pe = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			pe(e.component.subTree, t, n, r);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, r);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, xe);
			return;
		}
		if (c === z) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) pe(u[e], t, n, r);
			o(e.anchor, t, n);
			return;
		}
		if (c === aa) {
			S(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) if (r === 0) l.beforeEnter(a), o(a, t, n), Wi(() => l.enter(a), i);
		else {
			let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? s(a) : o(a, t, n);
			}, d = () => {
				a._isLeaving && a[$n](!0), r(a, () => {
					u(), c && c();
				});
			};
			i ? i(a, u, d) : d();
		}
		else o(a, t, n);
	}, me = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (qe(), _r(s, null, n, e, !0), Je()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !yr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Ca(_, t, e), u & 6) A(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Vn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, xe, r) : l && !l.hasOnce && (a !== z || d > 0 && d & 64) ? _e(l, t, n, !1, !0) : (a === z && d & 384 || !i && u & 16) && _e(c, t, n), r && he(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Wi(() => {
			_ && Ca(_, t, e), h && Vn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, he = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === z) {
			ge(n, r);
			return;
		}
		if (t === aa) {
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
	}, ge = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, A = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		$i(c), $i(l), r && oe(r), i.stop(), a && (a.flags |= 8, me(o, e, t, n)), s && Wi(s, t), Wi(() => {
			e.isUnmounted = !0;
		}, t);
	}, _e = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) me(e[o], t, n, r, i);
	}, ve = (e) => {
		if (e.shapeFlag & 6) return ve(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Zn];
		return n ? h(n) : t;
	}, ye = !1, be = (e, t, n) => {
		let r;
		e == null ? t._vnode && (me(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, ye ||= (ye = !0, Mn(r), Nn(), !1);
	}, xe = {
		p: v,
		um: me,
		m: pe,
		r: he,
		mt: ae,
		mc: O,
		pc: le,
		pbc: te,
		n: ve,
		o: e
	}, Se, Ce;
	return t && ([Se, Ce] = t(xe)), {
		render: be,
		hydrate: Se,
		createApp: fi(be, Se)
	};
}
function qi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ji({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Yi(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Xi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (p(r) && p(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = ba(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Xi(t, a)), a.type === ra && (a.patchFlag === -1 && (a = i[e] = ba(a)), a.el = t.el), a.type === ia && !a.el && (a.el = t.el);
	}
}
function Zi(e) {
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
function Qi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Qi(t);
}
function $i(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function ea(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? ea(t.subTree) : null;
}
var ta = (e) => e.__isSuspense;
function na(e, t) {
	t && t.pendingBranch ? p(e) ? t.effects.push(...e) : t.effects.push(e) : jn(e);
}
var z = /* @__PURE__ */ Symbol.for("v-fgt"), ra = /* @__PURE__ */ Symbol.for("v-txt"), ia = /* @__PURE__ */ Symbol.for("v-cmt"), aa = /* @__PURE__ */ Symbol.for("v-stc"), oa = [], sa = null;
function B(e = !1) {
	oa.push(sa = e ? null : []);
}
function ca() {
	oa.pop(), sa = oa[oa.length - 1] || null;
}
var la = 1;
function ua(e, t = !1) {
	la += e, e < 0 && sa && t && (sa.hasOnce = !0);
}
function da(e) {
	return e.dynamicChildren = la > 0 ? sa || i : null, ca(), la > 0 && sa && sa.push(e), e;
}
function V(e, t, n, r, i, a) {
	return da(U(e, t, n, r, i, a, !0));
}
function H(e, t, n, r, i) {
	return da(W(e, t, n, r, i, !0));
}
function fa(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function pa(e, t) {
	return e.type === t.type && e.key === t.key;
}
var ma = ({ key: e }) => e ?? null, ha = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : v(e) || /* @__PURE__ */ P(e) || _(e) ? {
	i: In,
	r: e,
	k: t,
	f: !!n
} : e);
function U(e, t = null, n = null, r = 0, i = null, a = e === z ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && ma(t),
		ref: t && ha(t),
		scopeId: Ln,
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
		ctx: In
	};
	return s ? (xa(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= v(n) ? 8 : 16), la > 0 && !o && sa && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && sa.push(c), c;
}
var W = ga;
function ga(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === Lr) && (e = ia), fa(e)) {
		let r = va(e, t, !0);
		return n && xa(r, n), la > 0 && !a && sa && (r.shapeFlag & 6 ? sa[sa.indexOf(e)] = r : sa.push(r)), r.patchFlag = -2, r;
	}
	if (Wa(e) && (e = e.__vccOpts), t) {
		t = _a(t);
		let { class: e, style: n } = t;
		e && !v(e) && (t.class = A(e)), b(n) && (/* @__PURE__ */ Jt(n) && !p(n) && (n = l({}, n)), t.style = fe(n));
	}
	let o = v(e) ? 1 : ta(e) ? 128 : Qn(e) ? 64 : b(e) ? 4 : _(e) ? 2 : 0;
	return U(e, t, n, r, i, o, a, !0);
}
function _a(e) {
	return e ? /* @__PURE__ */ Jt(e) || Oi(e) ? l({}, e) : e : null;
}
function va(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Sa(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && ma(l),
		ref: t && t.ref ? n && a ? p(a) ? a.concat(ha(t)) : [a, ha(t)] : ha(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== z ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && va(e.ssContent),
		ssFallback: e.ssFallback && va(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && fr(u, c.clone(u)), u;
}
function G(e = " ", t = 0) {
	return W(ra, null, e, t);
}
function K(e = "", t = !1) {
	return t ? (B(), H(ia, null, e)) : W(ia, null, e);
}
function ya(e) {
	return e == null || typeof e == "boolean" ? W(ia) : p(e) ? W(z, null, e.slice()) : fa(e) ? ba(e) : W(ra, null, String(e));
}
function ba(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : va(e);
}
function xa(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (p(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), xa(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !Oi(t) ? t._ctx = In : r === 3 && In && (In.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else _(t) ? (t = {
		default: t,
		_ctx: In
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [G(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function Sa(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = A([t.class, r.class]));
		else if (e === "style") t.style = fe([t.style, r.style]);
		else if (s(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(p(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !c(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function Ca(e, t, n, r = null) {
	_n(e, t, 7, [n, r]);
}
var wa = li(), Ta = 0;
function Ea(e, t, n) {
	let i = e.type, a = (t ? t.appContext : e.appContext) || wa, o = {
		uid: Ta++,
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
		scope: new De(!0),
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
		propsOptions: Pi(i, a),
		emitsOptions: _i(i, a),
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
	return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = hi.bind(null, o), e.ce && e.ce(o), o;
}
var Da = null, Oa = () => Da || In, ka, Aa;
{
	let e = de(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	ka = t("__VUE_INSTANCE_SETTERS__", (e) => Da = e), Aa = t("__VUE_SSR_SETTERS__", (e) => Pa = e);
}
var ja = (e) => {
	let t = Da;
	return ka(e), e.scope.on(), () => {
		e.scope.off(), ka(t);
	};
}, Ma = () => {
	Da && Da.scope.off(), ka(null);
};
function Na(e) {
	return e.vnode.shapeFlag & 4;
}
var Pa = !1;
function Fa(e, t = !1, n = !1) {
	t && Aa(t);
	let { props: r, children: i } = e.vnode, a = Na(e);
	ki(e, r, a, t), Hi(e, i, n || t);
	let o = a ? Ia(e, t) : void 0;
	return t && Aa(!1), o;
}
function Ia(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Wr);
	let { setup: r } = n;
	if (r) {
		qe();
		let n = e.setupContext = r.length > 1 ? Ha(e) : null, i = ja(e), a = gn(r, e, 0, [e.props, n]), o = x(a);
		if (Je(), i(), (o || e.sp) && !yr(e) && mr(e), o) {
			if (a.then(Ma, Ma), t) return a.then((n) => {
				La(e, n, t);
			}).catch((t) => {
				vn(t, e, 0);
			});
			e.asyncDep = a;
		} else La(e, a, t);
	} else Ba(e, t);
}
function La(e, t, n) {
	_(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : b(t) && (e.setupState = tn(t)), Ba(e, n);
}
var Ra, za;
function Ba(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && Ra && !r.render) {
			let t = r.template || $r(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r;
				r.render = Ra(t, l(l({
					isCustomElement: n,
					delimiters: a
				}, i), o));
			}
		}
		e.render = r.render || a, za && za(e);
	}
	{
		let t = ja(e);
		qe();
		try {
			Yr(e);
		} finally {
			Je(), t();
		}
	}
}
var Va = { get(e, t) {
	return it(e, "get", ""), e[t];
} };
function Ha(e) {
	return {
		attrs: new Proxy(e.attrs, Va),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Ua(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(tn(Yt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Hr) return Hr[n](e);
		},
		has(e, t) {
			return t in e || t in Hr;
		}
	}) : e.proxy;
}
function Wa(e) {
	return _(e) && "__vccOpts" in e;
}
var q = (e, t) => /* @__PURE__ */ ln(e, t, Pa);
function Ga(e, t, n) {
	try {
		ua(-1);
		let r = arguments.length;
		return r === 2 ? b(t) && !p(t) ? fa(t) ? W(e, null, [t]) : W(e, t) : W(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && fa(n) && (n = [n]), W(e, t, n));
	} finally {
		ua(1);
	}
}
var Ka = "3.5.34", qa = void 0, Ja = typeof window < "u" && window.trustedTypes;
if (Ja) try {
	qa = /* @__PURE__ */ Ja.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Ya = qa ? (e) => qa.createHTML(e) : (e) => e, Xa = "http://www.w3.org/2000/svg", Za = "http://www.w3.org/1998/Math/MathML", Qa = typeof document < "u" ? document : null, $a = Qa && /* @__PURE__ */ Qa.createElement("template"), eo = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Qa.createElementNS(Xa, e) : t === "mathml" ? Qa.createElementNS(Za, e) : n ? Qa.createElement(e, { is: n }) : Qa.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Qa.createTextNode(e),
	createComment: (e) => Qa.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Qa.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			$a.innerHTML = Ya(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = $a.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, to = "transition", no = "animation", ro = /* @__PURE__ */ Symbol("_vtc"), io = {
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
}, ao = /* @__PURE__ */ l({}, rr, io), oo = /* @__PURE__ */ ((e) => (e.displayName = "Transition", e.props = ao, e))((e, { slots: t }) => Ga(sr, lo(e), t)), so = (e, t = []) => {
	p(e) ? e.forEach((e) => e(...t)) : e && e(...t);
}, co = (e) => e ? p(e) ? e.some((e) => e.length > 1) : e.length > 1 : !1;
function lo(e) {
	let t = {};
	for (let n in e) n in io || (t[n] = e[n]);
	if (e.css === !1) return t;
	let { name: n = "v", type: r, duration: i, enterFromClass: a = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: s = `${n}-enter-to`, appearFromClass: c = a, appearActiveClass: u = o, appearToClass: d = s, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: p = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, h = uo(i), g = h && h[0], _ = h && h[1], { onBeforeEnter: v, onEnter: y, onEnterCancelled: b, onLeave: x, onLeaveCancelled: S, onBeforeAppear: C = v, onAppear: w = y, onAppearCancelled: T = b } = t, E = (e, t, n, r) => {
		e._enterCancelled = r, mo(e, t ? d : s), mo(e, t ? u : o), n && n();
	}, D = (e, t) => {
		e._isLeaving = !1, mo(e, f), mo(e, m), mo(e, p), t && t();
	}, O = (e) => (t, n) => {
		let i = e ? w : y, o = () => E(t, e, n);
		so(i, [t, o]), ho(() => {
			mo(t, e ? c : a), po(t, e ? d : s), co(i) || _o(t, r, g, o);
		});
	};
	return l(t, {
		onBeforeEnter(e) {
			so(v, [e]), po(e, a), po(e, o);
		},
		onBeforeAppear(e) {
			so(C, [e]), po(e, c), po(e, u);
		},
		onEnter: O(!1),
		onAppear: O(!0),
		onLeave(e, t) {
			e._isLeaving = !0;
			let n = () => D(e, t);
			po(e, f), e._enterCancelled ? (po(e, p), xo(e)) : (xo(e), po(e, p)), ho(() => {
				e._isLeaving && (mo(e, f), po(e, m), co(x) || _o(e, r, _, n));
			}), so(x, [e, n]);
		},
		onEnterCancelled(e) {
			E(e, !1, void 0, !0), so(b, [e]);
		},
		onAppearCancelled(e) {
			E(e, !0, void 0, !0), so(T, [e]);
		},
		onLeaveCancelled(e) {
			D(e), so(S, [e]);
		}
	});
}
function uo(e) {
	if (e == null) return null;
	if (b(e)) return [fo(e.enter), fo(e.leave)];
	{
		let t = fo(e);
		return [t, t];
	}
}
function fo(e) {
	return le(e);
}
function po(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e[ro] || (e[ro] = /* @__PURE__ */ new Set())).add(t);
}
function mo(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
	let n = e[ro];
	n && (n.delete(t), n.size || (e[ro] = void 0));
}
function ho(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
var go = 0;
function _o(e, t, n, r) {
	let i = e._endId = ++go, a = () => {
		i === e._endId && r();
	};
	if (n != null) return setTimeout(a, n);
	let { type: o, timeout: s, propCount: c } = vo(e, t);
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
function vo(e, t) {
	let n = window.getComputedStyle(e), r = (e) => (n[e] || "").split(", "), i = r(`${to}Delay`), a = r(`${to}Duration`), o = yo(i, a), s = r(`${no}Delay`), c = r(`${no}Duration`), l = yo(s, c), u = null, d = 0, f = 0;
	t === to ? o > 0 && (u = to, d = o, f = a.length) : t === no ? l > 0 && (u = no, d = l, f = c.length) : (d = Math.max(o, l), u = d > 0 ? o > l ? to : no : null, f = u ? u === to ? a.length : c.length : 0);
	let p = u === to && /\b(?:transform|all)(?:,|$)/.test(r(`${to}Property`).toString());
	return {
		type: u,
		timeout: d,
		propCount: f,
		hasTransform: p
	};
}
function yo(e, t) {
	for (; e.length < t.length;) e = e.concat(e);
	return Math.max(...t.map((t, n) => bo(t) + bo(e[n])));
}
function bo(e) {
	return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function xo(e) {
	return (e ? e.ownerDocument : document).body.offsetHeight;
}
function So(e, t, n) {
	let r = e[ro];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Co = /* @__PURE__ */ Symbol("_vod"), wo = /* @__PURE__ */ Symbol("_vsh"), To = /* @__PURE__ */ Symbol(""), Eo = /(?:^|;)\s*display\s*:/;
function Do(e, t, n) {
	let r = e.style, i = v(n), a = !1;
	if (n && !i) {
		if (t) if (v(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? ko(r, t, "");
		}
		else for (let e in t) n[e] ?? ko(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? ko(r, i, "") : No(e, i, !v(t) && t ? t[i] : void 0, o) || ko(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[To];
			e && (n += ";" + e), r.cssText = n, a = Eo.test(n);
		}
	} else t && e.removeAttribute("style");
	Co in e && (e[Co] = a ? r.display : "", e[wo] && (r.display = "none"));
}
var Oo = /\s*!important$/;
function ko(e, t, n) {
	if (p(n)) n.forEach((n) => ko(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = Mo(e, t);
		Oo.test(n) ? e.setProperty(re(r), n.replace(Oo, ""), "important") : e[r] = n;
	}
}
var Ao = [
	"Webkit",
	"Moz",
	"ms"
], jo = {};
function Mo(e, t) {
	let n = jo[t];
	if (n) return n;
	let r = te(t);
	if (r !== "filter" && r in e) return jo[t] = r;
	r = ie(r);
	for (let n = 0; n < Ao.length; n++) {
		let i = Ao[n] + r;
		if (i in e) return jo[t] = i;
	}
	return t;
}
function No(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && v(r) && n === r;
}
var Po = "http://www.w3.org/1999/xlink";
function Fo(e, t, n, r, i, a = ve(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Po, t.slice(6, t.length)) : e.setAttributeNS(Po, t, n) : n == null || a && !ye(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : y(n) ? String(n) : n);
}
function Io(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Ya(n) : n);
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
		r === "boolean" ? n = ye(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function Lo(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Ro(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var zo = /* @__PURE__ */ Symbol("_vei");
function Bo(e, t, n, r, i = null) {
	let a = e[zo] || (e[zo] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Ho(t);
		r ? Lo(e, n, a[t] = Ko(r, i), s) : o && (Ro(e, n, o, s), a[t] = void 0);
	}
}
var Vo = /(?:Once|Passive|Capture)$/;
function Ho(e) {
	let t;
	if (Vo.test(e)) {
		t = {};
		let n;
		for (; n = e.match(Vo);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : re(e.slice(2)), t];
}
var Uo = 0, Wo = /* @__PURE__ */ Promise.resolve(), Go = () => Uo ||= (Wo.then(() => Uo = 0), Date.now());
function Ko(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		_n(qo(e, n.value), t, 5, [e]);
	};
	return n.value = e, n.attached = Go(), n;
}
function qo(e, t) {
	if (p(t)) {
		let n = e.stopImmediatePropagation;
		return e.stopImmediatePropagation = () => {
			n.call(e), e._stopped = !0;
		}, t.map((e) => (t) => !t._stopped && e && e(t));
	} else return t;
}
var Jo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Yo = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? So(e, r, o) : t === "style" ? Do(e, n, r) : s(t) ? c(t) || Bo(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Xo(e, t, r, o)) ? (Io(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Fo(e, t, r, o, a, t !== "value")) : e._isVueCE && (Zo(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !v(r))) ? Io(e, te(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Fo(e, t, r, o));
};
function Xo(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Jo(t) && _(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Jo(t) && v(n) ? !1 : t in e;
}
function Zo(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = te(t);
	return Array.isArray(n) ? n.some((e) => te(e) === r) : Object.keys(n).some((e) => te(e) === r);
}
var Qo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return p(t) ? (e) => oe(t, e) : t;
};
function $o(e) {
	e.target.composing = !0;
}
function es(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var ts = /* @__PURE__ */ Symbol("_assign");
function ns(e, t, n) {
	return t && (e = e.trim()), n && (e = ce(e)), e;
}
var rs = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[ts] = Qo(i);
		let a = r || i.props && i.props.type === "number";
		Lo(e, t ? "change" : "input", (t) => {
			t.target.composing || e[ts](ns(e.value, n, a));
		}), (n || a) && Lo(e, "change", () => {
			e.value = ns(e.value, n, a);
		}), t || (Lo(e, "compositionstart", $o), Lo(e, "compositionend", es), Lo(e, "change", es));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[ts] = Qo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? ce(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, is = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = h(t);
		Lo(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? ce(os(e)) : os(e));
			e[ts](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, Dn(() => {
				e._assigning = !1;
			});
		}), e[ts] = Qo(r);
	},
	mounted(e, { value: t }) {
		as(e, t);
	},
	beforeUpdate(e, t, n) {
		e[ts] = Qo(n);
	},
	updated(e, { value: t }) {
		e._assigning || as(e, t);
	}
};
function as(e, t) {
	let n = e.multiple, r = p(t);
	if (!(n && !r && !h(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = os(a);
			if (n) if (r) {
				let e = typeof o;
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = Se(t, o) > -1;
			} else a.selected = t.has(o);
			else if (xe(os(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function os(e) {
	return "_value" in e ? e._value : e.value;
}
var ss = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], cs = {
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
	exact: (e, t) => ss.some((n) => e[`${n}Key`] && !t.includes(n))
}, ls = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = cs[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, us = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, ds = (e, t) => {
	let n = e._withKeys ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = re(n.key);
		if (t.some((e) => e === r || us[e] === r)) return e(n);
	}));
}, fs = /* @__PURE__ */ l({ patchProp: Yo }, eo), ps;
function ms() {
	return ps ||= Gi(fs);
}
var hs = ((...e) => {
	let t = ms().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = _s(e);
		if (!r) return;
		let i = t._component;
		!_(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, gs(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function gs(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function _s(e) {
	return v(e) ? document.querySelector(e) : e;
}
//#endregion
//#region src/view/components/SubView.vue?vue&type=script&setup=true&lang.ts
var vs = { class: "sub-view__header" }, ys = /* @__PURE__ */ L({
	__name: "SubView",
	props: {
		open: { type: Boolean },
		title: {}
	},
	emits: ["close"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ F(null), a = /* @__PURE__ */ F(null), o = null, s = 0;
		qn(() => n.open, async (e) => {
			if (e) {
				await Dn(), o = c(a.value), s = o?.scrollTop ?? 0, o && (o.scrollTop = 0), i.value && (i.value.scrollTop = 0);
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
		return (t, n) => (B(), H(oo, { name: "sub-view" }, {
			default: zn(() => [e.open ? (B(), V("section", {
				key: 0,
				ref_key: "rootElement",
				ref: a,
				class: "sub-view",
				role: "dialog",
				"aria-modal": "true"
			}, [U("div", vs, [U("h2", null, j(e.title), 1), U("button", {
				type: "button",
				class: "sub-view__close",
				onClick: n[0] ||= (e) => r("close")
			}, "Close")]), U("div", {
				ref_key: "bodyElement",
				ref: i,
				class: "sub-view__body"
			}, [Rr(t.$slots, "default", {}, void 0, !0)], 512)], 512)) : K("", !0)]),
			_: 3
		}));
	}
}), bs = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, xs = /* @__PURE__ */ bs(ys, [["__scopeId", "data-v-2d7058cd"]]), Ss = {
	key: 0,
	class: "species-builder__confirm-panel"
}, Cs = { class: "species-builder__confirm-actions" }, ws = /* @__PURE__ */ L({
	__name: "DeleteConfirmationSubView",
	props: { message: {} },
	emits: ["close", "confirm"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (B(), H(xs, {
			open: !!e.message,
			title: "Confirm Deletion",
			onClose: r[2] ||= (e) => n("close")
		}, {
			default: zn(() => [e.message ? (B(), V("div", Ss, [U("p", null, j(e.message), 1), U("div", Cs, [U("button", {
				class: "species-builder__danger-action",
				type: "button",
				onClick: r[0] ||= (e) => n("confirm")
			}, " Delete "), U("button", {
				type: "button",
				onClick: r[1] ||= (e) => n("close")
			}, "Cancel")])])) : K("", !0)]),
			_: 1
		}, 8, ["open"]));
	}
});
//#endregion
//#region src/view/apps/species-builder/editor-page-events.ts
function Ts(e, t) {
	return {
		addSubspecies: e.addSubspecies,
		arrayFieldDrop: e.appendArrayFieldDrop,
		careerReplacementChoiceDrop: e.setCareerReplacementChoiceDrop,
		careerReplacementRolledDrop: e.setCareerReplacementRolledDrop,
		close: t.close,
		delete: t.requestDeleteSelectedDefinition,
		deleteSubspecies: t.requestDeleteSubspecies,
		duplicate: e.duplicateSelectedDefinition,
		linkedItemDrop: e.setLinkedItemDrop,
		openItem: e.openItemSheet,
		subspeciesArrayFieldDrop: e.appendSubspeciesArrayFieldDrop,
		subspeciesLinkedItemDrop: e.setSubspeciesLinkedItemDrop,
		subspeciesTalentChoiceDrop: e.setSubspeciesTalentChoiceDrop,
		subspeciesTalentReplacementReplacementDrop: (t, n, r) => e.setSubspeciesTalentReplacementDrop(t, n, "replacement", r),
		subspeciesTalentReplacementRolledDrop: (t, n, r) => e.setSubspeciesTalentReplacementDrop(t, n, "rolled", r),
		talentChoiceDrop: e.setTalentChoiceDrop,
		talentReplacementReplacementDrop: (t, n) => e.setTalentReplacementDrop(t, "replacement", n),
		talentReplacementRolledDrop: (t, n) => e.setTalentReplacementDrop(t, "rolled", n),
		updateArrayField: e.updateArrayField,
		updateBooleanField: e.updateBooleanField,
		updateCareerReplacementRows: e.updateCareerReplacementRows,
		updateCharacteristic: e.updateCharacteristic,
		updateHeightField: e.updateHeightField,
		updateLinkedItems: e.updateLinkedItems,
		updateLinkedTalents: e.updateLinkedTalents,
		updateNumberField: e.updateNumberField,
		updateStringField: e.updateStringField,
		updateSubspeciesArrayField: e.updateSubspeciesArrayField,
		updateSubspeciesCharacteristic: e.updateSubspeciesCharacteristic,
		updateSubspeciesLinkedItems: e.updateSubspeciesLinkedItems,
		updateSubspeciesLinkedTalents: e.updateSubspeciesLinkedTalents,
		updateSubspeciesNumberField: e.updateSubspeciesNumberField,
		updateSubspeciesStringField: e.updateSubspeciesStringField,
		updateSubspeciesTalentReplacementRows: e.updateSubspeciesTalentReplacementRows,
		updateSubspeciesTextMapField: e.updateSubspeciesTextMapField,
		updateTalentReplacementRows: e.updateTalentReplacementRows,
		updateTextMapField: e.updateTextMapField
	};
}
//#endregion
//#region src/shared/assign-if-present.ts
function J(e, t, n) {
	n !== void 0 && (e[t] = n);
}
//#endregion
//#region src/functions/species-builder/linked-grant-records.ts
function Es(e) {
	if (!e || e.length === 0) return;
	let t = e.map((e) => e.name.trim()).filter((e) => e.length > 0);
	return t.length > 0 ? t : void 0;
}
function Ds(e) {
	if (!e || e.length === 0) return;
	let t = e.flatMap((e) => {
		let t = e.choices.map((e) => e.name.trim()).filter((e) => e.length > 0);
		return t.length > 0 ? [t.join(", ")] : [];
	});
	return t.length > 0 ? t : void 0;
}
//#endregion
//#region src/functions/species-builder/replacement-row-records.ts
function Os(e) {
	if (!e) return;
	let t = e.flatMap((e) => {
		let t = e.rolled.name.trim(), n = e.replacement.name.trim();
		return t && n ? [[t, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function ks(e) {
	if (!e) return;
	let t = e.flatMap((e) => {
		let t = e.rolled.name.trim(), n = e.replacements.map((e) => e.name.trim()).filter((e) => e.length > 0);
		return t && n.length > 0 ? [[t, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
//#endregion
//#region src/functions/species-builder/species-config.ts
function As(e) {
	let t = Ms();
	for (let n of e.definitions) Ns(t, n);
	return t;
}
function js() {
	return {
		age: "10+5d10",
		careerReplacements: { Flagellant: ["Hunter"] },
		characteristics: {
			ag: "2d10+20",
			bs: "2d10+20",
			dex: "2d10+20",
			fel: "2d10+20",
			i: "2d10+20",
			int: "2d10+20",
			s: "2d10+20",
			t: "2d10+20",
			wp: "2d10+20",
			ws: "2d10+20"
		},
		extra: 2,
		fate: 1,
		height: {
			die: "1d10",
			feet: 5,
			inches: 2
		},
		includeInExtraSpecies: !0,
		key: "wolfkin",
		movement: 4,
		name: "Wolfkin",
		randomTalents: { talents: 3 },
		resilience: 2,
		skills: [
			"Animal Care",
			"Charm",
			"Language (Wolventongue)",
			"Ranged (Throwing)"
		],
		subspecies: [{
			key: "arctic",
			name: "Arctic",
			randomTalents: { talents: 3 },
			talents: ["Coolheaded", "Lightning Reflexes, Very Resilient"]
		}],
		talentReplacements: { Artistic: "Beneath Notice" },
		talents: ["Argumentative", "Lightning Reflexes, Warrior Born"],
		traits: ["Arboreal"]
	};
}
function Ms() {
	return {
		extraSpecies: [],
		species: {},
		speciesAge: {},
		speciesCareerReplacements: {},
		speciesCharacteristics: {},
		speciesExtra: {},
		speciesFate: {},
		speciesHeight: {},
		speciesMovement: {},
		speciesRandomTalents: {},
		speciesRes: {},
		speciesSkills: {},
		speciesTalentReplacement: {},
		speciesTalents: {},
		speciesTraits: {},
		subspecies: {}
	};
}
function Ns(e, t) {
	e.species[t.key] = t.name, J(e.speciesCharacteristics, t.key, t.characteristics), J(e.speciesSkills, t.key, Is(t)), J(e.speciesTalents, t.key, Ls(t)), J(e.speciesRandomTalents, t.key, t.randomTalents), J(e.speciesTalentReplacement, t.key, Fs(t)), J(e.speciesTraits, t.key, Rs(t)), J(e.speciesMovement, t.key, t.movement), J(e.speciesFate, t.key, t.fate), J(e.speciesRes, t.key, t.resilience), J(e.speciesExtra, t.key, t.extra), J(e.speciesAge, t.key, t.age), J(e.speciesHeight, t.key, t.height), J(e.speciesCareerReplacements, t.key, zs(t)), t.includeInExtraSpecies && e.extraSpecies.push(t.key);
	for (let n of t.subspecies ?? []) {
		let r = e.subspecies[t.key] ?? {};
		r[n.key] = Ps(n), e.subspecies[t.key] = r;
	}
}
function Ps(e) {
	let t = { name: e.name };
	return J(t, "characteristics", e.characteristics), J(t, "skills", Is(e)), J(t, "talents", Ls(e)), J(t, "speciesTraits", Rs(e)), J(t, "randomTalents", e.randomTalents), J(t, "talentReplacement", Fs(e)), J(t, "movement", e.movement), J(t, "fate", e.fate), J(t, "resilience", e.resilience), J(t, "extra", e.extra), t;
}
function Fs(e) {
	return Os(e.talentReplacementRows) ?? e.talentReplacements;
}
function Is(e) {
	return Es(e.linkedSkills) ?? e.skills;
}
function Ls(e) {
	return Ds(e.linkedTalents) ?? e.talents;
}
function Rs(e) {
	return Es(e.linkedTraits) ?? e.traits;
}
function zs(e) {
	return ks(e.careerReplacementRows) ?? e.careerReplacements;
}
//#endregion
//#region src/shared/object-readers.ts
function Y(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function X(e, t) {
	let n = e;
	for (let e of t) {
		if (!Y(n) || !(e in n)) return;
		n = n[e];
	}
	return n;
}
function Z(e, t) {
	let n = X(e, t);
	return typeof n == "string" ? n.trim() : "";
}
function Bs(e, t) {
	let n = X(e, t);
	return Array.isArray(n) ? n.filter((e) => typeof e == "string") : [];
}
function Vs(e, t, n = 0) {
	return Hs(e, t) ?? n;
}
function Hs(e, t) {
	for (let n of t) {
		let t = Number(X(e, n));
		if (Number.isFinite(t)) return t;
	}
	return null;
}
function Us(e, t, n = !1) {
	for (let n of t) {
		let t = X(e, n);
		if (typeof t == "boolean") return t;
	}
	return n;
}
function Ws(e) {
	return Array.isArray(e) ? e.flatMap(Ws) : typeof e == "string" ? e.split(/[\n\r,;]/).map((e) => e.trim()).filter(Boolean) : Y(e) ? Object.values(e).flatMap(Ws) : [];
}
function Gs(e, t, n) {
	let r = e;
	for (let e of t.slice(0, -1)) {
		let t = r[e];
		Y(t) || (r[e] = {}), r = r[e];
	}
	r[t[t.length - 1] ?? ""] = n;
}
//#endregion
//#region src/types/wfrp4e/characteristics.ts
var Q = {
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
}, Ks = {
	[Q.Agility]: "Agility",
	[Q.BallisticSkill]: "Ballistic Skill",
	[Q.Dexterity]: "Dexterity",
	[Q.Fellowship]: "Fellowship",
	[Q.Initiative]: "Initiative",
	[Q.Intelligence]: "Intelligence",
	[Q.Strength]: "Strength",
	[Q.Toughness]: "Toughness",
	[Q.WeaponSkill]: "Weapon Skill",
	[Q.Willpower]: "Willpower"
}, qs = {
	agility: Q.Agility,
	"ballistic skill": Q.BallisticSkill,
	dexterity: Q.Dexterity,
	fellowship: Q.Fellowship,
	initiative: Q.Initiative,
	intelligence: Q.Intelligence,
	strength: Q.Strength,
	toughness: Q.Toughness,
	"weapon skill": Q.WeaponSkill,
	willpower: Q.Willpower
};
function Js(e) {
	return e in Ks;
}
//#endregion
//#region src/functions/species-builder/config-keys.ts
function Ys(e) {
	return e.trim().toLocaleLowerCase().replaceAll(/[^\da-z]+/g, "-").replaceAll(/^-+|-+$/g, "");
}
//#endregion
//#region src/functions/species-builder/replacement-row-normalization.ts
function Xs(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!Y(e)) return [];
		let t = Qs(e.rolled, "talent"), n = Qs(e.replacement, "talent");
		return !t.name || !n.name ? [] : [{
			replacement: n,
			rolled: t
		}];
	});
	return t.length > 0 ? t : void 0;
}
function Zs(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!Y(e)) return [];
		let t = Qs(e.rolled, "career"), n = Array.isArray(e.replacements) ? e.replacements.flatMap((e) => {
			let t = Qs(e, "career");
			return t.name ? [t] : [];
		}) : [];
		return !t.name || n.length === 0 ? [] : [{
			replacements: n,
			rolled: t
		}];
	});
	return t.length > 0 ? t : void 0;
}
function Qs(e, t) {
	if (typeof e == "string") return { name: tc(e) ?? "" };
	if (!Y(e)) return { name: "" };
	let n = $s(e.item, t), r = tc(e.name) ?? n?.name ?? "";
	return n ? {
		item: n,
		name: r
	} : { name: r };
}
function $s(e, t) {
	if (!Y(e)) return;
	let n = tc(e.name), r = ec(e.type), i = tc(e.uuid);
	if (!n || r !== t || !i) return;
	let a = {
		name: n,
		type: r,
		uuid: i
	}, o = tc(e.img);
	return o && (a.img = o), a;
}
function ec(e) {
	return e === "career" || e === "skill" || e === "talent" || e === "trait" ? e : void 0;
}
function tc(e) {
	if (typeof e == "string") return e.trim() || void 0;
}
//#endregion
//#region src/functions/species-builder/linked-grant-normalization.ts
function nc(e, t) {
	if (!Array.isArray(e)) return;
	let n = e.flatMap((e) => {
		let n = Qs(e, t);
		return n.name ? [n] : [];
	});
	return n.length > 0 ? n : void 0;
}
function rc(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!Y(e) || !Array.isArray(e.choices)) return [];
		let t = e.choices.flatMap((e) => {
			let t = Qs(e, "talent");
			return t.name ? [t] : [];
		});
		return t.length > 0 ? [{ choices: t }] : [];
	});
	return t.length > 0 ? t : void 0;
}
//#endregion
//#region src/functions/species-builder/species-settings-normalization.ts
var ic = Object.values(Q);
function ac(e) {
	return !Y(e) || !Array.isArray(e.definitions) ? {
		definitions: [],
		showGeneratedConfigTab: !1
	} : {
		definitions: e.definitions.flatMap(oc),
		showGeneratedConfigTab: e.showGeneratedConfigTab === !0
	};
}
function oc(e) {
	return lc(e, (e, t, n) => ({
		includeInExtraSpecies: n.includeInExtraSpecies === !0,
		key: e,
		name: t
	})).map((t) => (uc(t, e), t));
}
function sc(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap(cc);
	return t.length > 0 ? t : void 0;
}
function cc(e) {
	return lc(e, (e, t) => ({
		key: e,
		name: t
	}));
}
function lc(e, t) {
	if (!Y(e)) return [];
	let n = dc(e.key), r = fc(e.name);
	if (!n || !r) return [];
	let i = t(n, r, e);
	return J(i, "characteristics", vc(e.characteristics)), J(i, "skills", mc(e.skills)), J(i, "linkedSkills", nc(e.linkedSkills, "skill")), J(i, "talents", mc(e.talents)), J(i, "linkedTalents", rc(e.linkedTalents)), J(i, "traits", mc(e.traits)), J(i, "linkedTraits", nc(e.linkedTraits, "trait")), J(i, "randomTalents", gc(e.randomTalents)), J(i, "talentReplacementRows", Xs(e.talentReplacementRows)), J(i, "talentReplacements", hc(e.talentReplacements)), J(i, "movement", pc(e.movement)), J(i, "fate", pc(e.fate)), J(i, "resilience", pc(e.resilience)), J(i, "extra", pc(e.extra)), [i];
}
function uc(e, t) {
	Y(t) && (J(e, "age", fc(t.age)), J(e, "height", yc(t.height)), J(e, "careerReplacements", _c(t.careerReplacements)), J(e, "careerReplacementRows", Zs(t.careerReplacementRows)), J(e, "subspecies", sc(t.subspecies)));
}
function dc(e) {
	return typeof e == "string" ? Ys(e) : "";
}
function fc(e) {
	if (typeof e == "string") return e.trim() || void 0;
}
function pc(e) {
	let t = Number(e);
	return Number.isFinite(t) ? t : void 0;
}
function mc(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		let t = fc(e);
		return t ? [t] : [];
	});
	return t.length > 0 ? t : void 0;
}
function hc(e) {
	if (!Y(e)) return;
	let t = Object.entries(e).flatMap(([e, t]) => {
		let n = fc(e), r = fc(t);
		return n && r ? [[n, r]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function gc(e) {
	if (!Y(e)) return;
	let t = Object.entries(e).flatMap(([e, t]) => {
		let n = fc(e), r = pc(t);
		return n && r !== void 0 ? [[n, r]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function _c(e) {
	if (!Y(e)) return;
	let t = Object.entries(e).flatMap(([e, t]) => {
		let n = fc(e), r = mc(t);
		return n && r ? [[n, r]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function vc(e) {
	if (!Y(e)) return;
	let t = ic.flatMap((t) => {
		let n = fc(e[t]);
		return n ? [[t, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function yc(e) {
	if (!Y(e)) return;
	let t = {};
	return J(t, "die", fc(e.die)), J(t, "feet", pc(e.feet)), J(t, "inches", pc(e.inches)), Object.keys(t).length > 0 ? t : void 0;
}
//#endregion
//#region src/view/apps/species-builder/editor/field-formatters.ts
function bc(e) {
	let t = e.split(/\r?\n/).map((e) => e.trim()).filter((e) => e.length > 0);
	return t.length > 0 ? t : void 0;
}
function xc(e) {
	let t = Dc(e).flatMap(([e, t]) => t ? [[e, t]] : []);
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function Sc(e) {
	let t = Dc(e).flatMap(([e, t]) => {
		let n = Ec(t);
		return n === void 0 ? [] : [[e, n]];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function Cc(e) {
	let t = Dc(e).flatMap(([e, t]) => {
		let n = t.split(",").map((e) => e.trim()).filter((e) => e.length > 0);
		return n.length > 0 ? [[e, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function wc(e) {
	let t = e.trim();
	return t.length > 0 ? t : void 0;
}
function Tc(e) {
	return e.length > 0 ? e : void 0;
}
function Ec(e) {
	let t = e.trim();
	if (!t) return;
	let n = Number(t);
	return Number.isFinite(n) ? n : void 0;
}
function Dc(e) {
	return e.split(/\r?\n/).flatMap((e) => {
		let t = e.indexOf(":");
		if (t < 0) return [];
		let n = e.slice(0, t).trim(), r = e.slice(t + 1).trim();
		return n ? [[n, r]] : [];
	});
}
//#endregion
//#region src/view/apps/species-builder/editor/utils.ts
function Oc(e, t) {
	return e === "careerReplacements" ? Cc(t) : e === "randomTalents" ? Sc(t) : xc(t);
}
function kc(e, t) {
	return e === "randomTalents" ? Sc(t) : xc(t);
}
function Ac(e, t, n) {
	let r = { ...e };
	return n === void 0 ? delete r[t] : r[t] = n, r;
}
function jc(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.key.trim();
		e && t.set(e, (t.get(e) ?? 0) + 1);
	}
	return [...t.entries()].flatMap(([e, t]) => t > 1 ? [e] : []);
}
function Mc(e) {
	let t = /* @__PURE__ */ new Set();
	return e.map((e) => {
		let n = Hc(e);
		return n.key = Ic(e.key, e.name, "new-species", t), e.subspecies && (n.subspecies = Fc(e.subspecies)), n;
	});
}
function Nc(e) {
	return Ys(e.name) || "new-species";
}
function Pc(e) {
	return Ys(e.name) || "new-subspecies";
}
function Fc(e) {
	let t = /* @__PURE__ */ new Set();
	return e.map((e) => ({
		...Hc(e),
		key: Ic(e.key, e.name, "new-subspecies", t)
	}));
}
function Ic(e, t, n, r) {
	let i = Ys(e);
	if (i) return r.add(i), i;
	let a = Lc(Ys(t) || n, r);
	return r.add(a), a;
}
function Lc(e, t) {
	if (!t.has(e)) return e;
	let n = 2, r = `${e}-${n}`;
	for (; t.has(r);) n += 1, r = `${e}-${n}`;
	return r;
}
function Rc(e) {
	return e.flatMap((e) => {
		let t = jc(e.subspecies ?? []);
		return t.length > 0 ? [{
			keys: t,
			speciesName: e.name
		}] : [];
	});
}
function zc(e) {
	return e.flatMap((e) => (e.subspecies ?? []).flatMap((t, n) => t.key.trim() && t.name.trim() ? [] : [{
		index: n,
		speciesName: e.name
	}]));
}
function Bc(e) {
	return JSON.stringify(e);
}
function Vc(e) {
	return JSON.stringify(e, null, 2);
}
function Hc(e) {
	return JSON.parse(JSON.stringify(e));
}
function Uc(e) {
	return e instanceof Error ? e.message : "Unknown Species Builder error.";
}
//#endregion
//#region src/view/apps/species-builder/editor/definition-actions.ts
function Wc(e) {
	function t() {
		i({
			includeInExtraSpecies: !0,
			key: "",
			name: "New Species"
		});
	}
	function n() {
		i(js());
	}
	function r() {
		let t = e.selectedDefinition.value;
		if (!t) return;
		let n = Hc(t);
		n.key = h(`${n.key}-copy`), n.name = `${n.name} Copy`, i(n);
	}
	function i(t) {
		e.definitions.value = [...e.definitions.value, Hc(t)], e.selectedIndex.value = e.definitions.value.length - 1, e.message.value = "";
	}
	function a() {
		e.selectedDefinition.value && (e.definitions.value = e.definitions.value.filter((t, n) => n !== e.selectedIndex.value), e.selectedIndex.value = e.definitions.value.length === 0 ? -1 : Math.min(e.selectedIndex.value, e.definitions.value.length - 1), e.message.value = "");
	}
	function o(t) {
		e.selectedIndex.value = t;
	}
	function s(e, t) {
		m((n) => Ac(n, e, Tc(t)));
	}
	function c(e, t) {
		m((n) => ({
			...n,
			[e]: t
		}));
	}
	function l(e, t) {
		m((n) => Ac(n, e, Ec(t)));
	}
	function u(e, t) {
		m((n) => {
			let r = n.height ? { ...n.height } : {}, i = e === "die" ? wc(t) : Ec(t);
			return i === void 0 ? delete r[e] : r[e] = i, Ac(n, "height", Object.keys(r).length > 0 ? r : void 0);
		});
	}
	function d(e, t) {
		m((n) => {
			let r = n.characteristics ? { ...n.characteristics } : {}, i = wc(t);
			return i ? r[e] = i : delete r[e], Ac(n, "characteristics", Object.keys(r).length > 0 ? r : void 0);
		});
	}
	function f(e, t) {
		m((n) => Ac(n, e, bc(t)));
	}
	function p(e, t) {
		m((n) => Ac(n, e, Oc(e, t)));
	}
	function m(t) {
		let n = e.selectedDefinition.value;
		n && (e.definitions.value = e.definitions.value.map((r, i) => i === e.selectedIndex.value ? t(Hc(n)) : r), e.message.value = "");
	}
	function h(t) {
		let n = new Set(e.definitions.value.map((e) => e.key));
		if (!n.has(t)) return t;
		let r = 2, i = `${t}-${r}`;
		for (; n.has(i);) r += 1, i = `${t}-${r}`;
		return i;
	}
	return {
		addBlankDefinition: t,
		addWolfkinExample: n,
		deleteSelectedDefinition: a,
		duplicateSelectedDefinition: r,
		selectDefinition: o,
		updateArrayField: f,
		updateBooleanField: c,
		updateCharacteristic: d,
		updateHeightField: u,
		updateNumberField: l,
		updateStringField: s,
		updateSelectedDefinition: m,
		updateTextMapField: p
	};
}
//#endregion
//#region src/view/apps/species-builder/editor/linked-grant-rows.ts
function Gc(e, t) {
	return t && t.length > 0 ? t.map(el) : (e ?? []).map((e) => ({ name: e }));
}
function Kc(e, t) {
	return t && t.length > 0 ? t.map((e) => ({ choices: e.choices.map(el) })) : (e ?? []).map((e) => ({ choices: $c(e).map((e) => ({ name: e })) }));
}
function qc(e) {
	return e.map((e) => e.name.trim()).filter((e) => e.length > 0);
}
function Jc(e) {
	return e.flatMap((e) => {
		let t = qc(e.choices);
		return t.length > 0 ? [t.join(", ")] : [];
	});
}
function Yc(e, t, n) {
	return e.map((e, r) => r === t ? { name: n } : el(e));
}
function Xc(e, t, n) {
	return e.map((e, r) => r === t ? {
		item: n,
		name: n.name
	} : el(e));
}
function Zc(e, t, n, r) {
	return e.map((e, i) => i === t ? { choices: Yc(e.choices, n, r) } : tl(e));
}
function Qc(e, t, n, r) {
	return e.map((e, i) => i === t ? { choices: Xc(e.choices, n, r) } : tl(e));
}
function $c(e) {
	let t = e.split(",").map((e) => e.trim()).filter((e) => e.length > 0);
	return t.length > 0 ? t : [e];
}
function el(e) {
	return e.item ? {
		item: { ...e.item },
		name: e.name
	} : { name: e.name };
}
function tl(e) {
	return { choices: e.choices.map(el) };
}
//#endregion
//#region src/view/apps/species-builder/editor/linked-grant-actions.ts
var nl = {
	skills: "skill",
	talents: "talent",
	traits: "trait"
};
function rl(e) {
	async function t(t, n) {
		let a = await e.resolveDroppedItem(nl[t], n);
		if (t === "talents") {
			let t = e.selectedDefinition.value?.linkedTalents ?? f();
			Jc(t).includes(a.name) || i([...t, { choices: [{
				item: a,
				name: a.name
			}] }]);
			return;
		}
		let o = d(t);
		qc(o).includes(a.name) || r(t, [...o, {
			item: a,
			name: a.name
		}]);
	}
	async function n(t, n, r) {
		let i = await e.resolveDroppedItem(nl[n], r), a = e.selectedDefinition.value?.subspecies?.[t];
		if (!a) return;
		if (n === "talents") {
			let e = a.linkedTalents ?? f(a);
			Jc(e).includes(i.name) || c(t, [...e, { choices: [{
				item: i,
				name: i.name
			}] }]);
			return;
		}
		let o = il(a, n);
		qc(o).includes(i.name) || s(t, n, [...o, {
			item: i,
			name: i.name
		}]);
	}
	function r(t, n) {
		e.definitionActions.updateSelectedDefinition((e) => al(e, t, n));
	}
	function i(t) {
		e.definitionActions.updateSelectedDefinition((e) => ol(e, t));
	}
	async function a(t, n, i) {
		let a = await e.resolveDroppedItem(nl[t], i);
		r(t, Xc(d(t), n, a));
	}
	async function o(t, n, r) {
		let a = await e.resolveDroppedItem("talent", r);
		i(Qc(e.selectedDefinition.value?.linkedTalents ?? f(), t, n, a));
	}
	function s(t, n, r) {
		e.subspeciesActions.updateSubspecies(t, (e) => al(e, n, r));
	}
	function c(t, n) {
		e.subspeciesActions.updateSubspecies(t, (e) => ol(e, n));
	}
	async function l(t, n, r, i) {
		let a = e.selectedDefinition.value?.subspecies?.[t];
		if (!a) return;
		let o = await e.resolveDroppedItem(nl[n], i);
		s(t, n, Xc(il(a, n), r, o));
	}
	async function u(t, n, r, i) {
		let a = e.selectedDefinition.value?.subspecies?.[t];
		if (!a) return;
		let o = await e.resolveDroppedItem("talent", i);
		c(t, Qc(a.linkedTalents ?? f(a), n, r, o));
	}
	function d(t) {
		let n = e.selectedDefinition.value;
		return n ? il(n, t) : [];
	}
	function f(t = e.selectedDefinition.value) {
		return (t?.talents ?? []).map((e) => ({ choices: e.split(",").map((e) => e.trim()).filter((e) => e.length > 0).map((e) => ({ name: e })) }));
	}
	return {
		appendArrayFieldDrop: t,
		appendSubspeciesArrayFieldDrop: n,
		setLinkedItemDrop: a,
		setSubspeciesLinkedItemDrop: l,
		setSubspeciesTalentChoiceDrop: u,
		setTalentChoiceDrop: o,
		updateLinkedItems: r,
		updateLinkedTalents: i,
		updateSubspeciesLinkedItems: s,
		updateSubspeciesLinkedTalents: c
	};
}
function il(e, t) {
	let n = t === "skills" ? e.linkedSkills : e.linkedTraits;
	return n && n.length > 0 ? n : (e[t] ?? []).map((e) => ({ name: e }));
}
function al(e, t, n) {
	let r = t === "skills" ? "linkedSkills" : "linkedTraits", i = qc(n);
	return Ac(Ac(e, r, n.length > 0 ? n : void 0), t, i.length > 0 ? i : void 0);
}
function ol(e, t) {
	let n = Jc(t);
	return Ac(Ac(e, "linkedTalents", t.length > 0 ? t : void 0), "talents", n.length > 0 ? n : void 0);
}
//#endregion
//#region src/view/apps/species-builder/editor/replacement-rows.ts
function sl() {
	return { name: "" };
}
function cl() {
	return {
		replacement: sl(),
		rolled: sl()
	};
}
function ll() {
	return {
		replacements: [sl()],
		rolled: sl()
	};
}
function ul(e) {
	return e.talentReplacementRows?.length ? vl(e.talentReplacementRows) : fl(e.talentReplacements);
}
function dl(e) {
	return e.careerReplacementRows?.length ? vl(e.careerReplacementRows) : pl(e.careerReplacements);
}
function fl(e) {
	return Object.entries(e ?? {}).map(([e, t]) => ({
		replacement: { name: t },
		rolled: { name: e }
	}));
}
function pl(e) {
	return Object.entries(e ?? {}).map(([e, t]) => ({
		replacements: t.map((e) => ({ name: e })),
		rolled: { name: e }
	}));
}
function ml(e, t, n, r) {
	return e.map((e, i) => i === t ? {
		...e,
		[n]: _l(r)
	} : e);
}
function hl(e, t, n) {
	return e.map((e, r) => r === t ? {
		...e,
		rolled: _l(n)
	} : e);
}
function gl(e, t, n, r) {
	return e.map((e, i) => {
		if (i !== t) return e;
		let a = e.replacements.map((e, t) => t === n ? _l(r) : e);
		return {
			...e,
			replacements: a
		};
	});
}
function _l(e) {
	return {
		item: e,
		name: e.name
	};
}
function vl(e) {
	return JSON.parse(JSON.stringify(e));
}
//#endregion
//#region src/view/apps/species-builder/editor/replacement-actions.ts
function yl(e) {
	function t(t) {
		e.definitionActions.updateSelectedDefinition((e) => Ac(Ac(e, "talentReplacementRows", t.length > 0 ? t : void 0), "talentReplacements", Os(t)));
	}
	function n(t) {
		e.definitionActions.updateSelectedDefinition((e) => Ac(Ac(e, "careerReplacementRows", t.length > 0 ? t : void 0), "careerReplacements", ks(t)));
	}
	function r(t, n) {
		e.subspeciesActions.updateSubspecies(t, (e) => Ac(Ac(e, "talentReplacementRows", n.length > 0 ? n : void 0), "talentReplacements", Os(n)));
	}
	async function i(n, r, i) {
		let a = e.selectedDefinition.value;
		if (!a) return;
		let o = await l("talent", i);
		t(ml(ul(a), n, r, o));
	}
	async function a(t, n, i, a) {
		let o = e.selectedDefinition.value?.subspecies?.[t];
		if (!o) return;
		let s = await l("talent", a);
		r(t, ml(ul(o), n, i, s));
	}
	async function o(t, r) {
		let i = e.selectedDefinition.value;
		if (!i) return;
		let a = await l("career", r);
		n(hl(dl(i), t, a));
	}
	async function s(t, r, i) {
		let a = e.selectedDefinition.value;
		if (!a) return;
		let o = await l("career", i);
		n(gl(dl(a), t, r, o));
	}
	async function c(t) {
		try {
			await e.bridge.openItemSheet(t);
		} catch (t) {
			e.loadError.value = Uc(t);
		}
	}
	async function l(t, n) {
		try {
			return await e.bridge.resolveItemDrop(n, t);
		} catch (t) {
			throw e.loadError.value = Uc(t), t;
		}
	}
	return {
		openItemSheet: c,
		resolveDroppedItem: l,
		setCareerReplacementChoiceDrop: s,
		setCareerReplacementRolledDrop: o,
		setSubspeciesTalentReplacementDrop: a,
		setTalentReplacementDrop: i,
		updateCareerReplacementRows: n,
		updateSubspeciesTalentReplacementRows: r,
		updateTalentReplacementRows: t
	};
}
//#endregion
//#region src/view/apps/species-builder/editor/subspecies-actions.ts
function bl(e) {
	function t() {
		l((e) => {
			let t = e.subspecies ?? [];
			return {
				...e,
				subspecies: [...t, {
					key: "",
					name: "New Subspecies"
				}]
			};
		});
	}
	function n(e) {
		l((t) => {
			let n = (t.subspecies ?? []).filter((t, n) => n !== e);
			return Ac(t, "subspecies", n.length > 0 ? n : void 0);
		});
	}
	function r(e, t, n) {
		c(e, (e) => ({
			...e,
			[t]: Tc(n) ?? ""
		}));
	}
	function i(e, t, n) {
		c(e, (e) => Ac(e, t, Ec(n)));
	}
	function a(e, t, n) {
		c(e, (e) => {
			let r = e.characteristics ? { ...e.characteristics } : {}, i = wc(n);
			return i ? r[t] = i : delete r[t], Ac(e, "characteristics", Object.keys(r).length > 0 ? r : void 0);
		});
	}
	function o(e, t, n) {
		c(e, (e) => Ac(e, t, bc(n)));
	}
	function s(e, t, n) {
		c(e, (e) => Ac(e, t, kc(t, n)));
	}
	function c(e, t) {
		l((n) => {
			let r = n.subspecies ?? [], i = r[e];
			return i ? {
				...n,
				subspecies: r.map((n, r) => r === e ? t(Hc(i)) : n)
			} : n;
		});
	}
	function l(t) {
		let n = e.definitions.value[e.selectedIndex.value];
		n && (e.definitions.value = e.definitions.value.map((r, i) => i === e.selectedIndex.value ? t(Hc(n)) : r), e.message.value = "");
	}
	return {
		addSubspecies: t,
		deleteSubspecies: n,
		updateSubspeciesArrayField: o,
		updateSubspeciesCharacteristic: a,
		updateSubspeciesNumberField: i,
		updateSubspeciesStringField: r,
		updateSubspecies: c,
		updateSubspeciesTextMapField: s
	};
}
//#endregion
//#region src/view/apps/species-builder/editor/use-editor.ts
function xl(e, t = {}) {
	let n = /* @__PURE__ */ F([]), r = /* @__PURE__ */ F(!1), i = /* @__PURE__ */ F(0), a = /* @__PURE__ */ F(!0), o = /* @__PURE__ */ F(!1), s = /* @__PURE__ */ F(""), c = /* @__PURE__ */ F(""), l = /* @__PURE__ */ F([]), u = /* @__PURE__ */ F(""), d = q(() => n.value[i.value]), f = q(() => Mc(n.value)), p = q(() => ac({
		definitions: f.value,
		showGeneratedConfigTab: r.value
	})), m = q(() => Vc(As(p.value))), h = q(() => jc(f.value)), g = q(() => Rc(f.value)), _ = q(() => f.value.flatMap((e, t) => e.key.trim() && e.name.trim() ? [] : [t])), v = q(() => zc(f.value)), y = q(() => u.value !== Bc(p.value)), b = q(() => !a.value && !o.value && h.value.length === 0 && _.value.length === 0 && g.value.length === 0 && v.value.length === 0), x = Wc({
		definitions: n,
		message: s,
		selectedDefinition: d,
		selectedIndex: i
	}), S = bl({
		definitions: n,
		message: s,
		selectedIndex: i
	}), { resolveDroppedItem: C, ...w } = yl({
		bridge: e,
		definitionActions: x,
		loadError: c,
		selectedDefinition: d,
		subspeciesActions: S
	}), T = rl({
		definitionActions: x,
		resolveDroppedItem: C,
		selectedDefinition: d,
		subspeciesActions: S
	});
	async function E() {
		a.value = !0, c.value = "", s.value = "";
		try {
			let [t, a] = await Promise.all([e.loadSettings(), e.loadRandomTalentSources()]);
			n.value = Hc(t.definitions), l.value = a, r.value = t.showGeneratedConfigTab, i.value = n.value.length > 0 ? 0 : -1, u.value = Bc(t), s.value = `Loaded ${t.definitions.length} species definition(s).`;
		} catch (e) {
			c.value = Uc(e);
		} finally {
			a.value = !1;
		}
	}
	async function D() {
		if (b.value) {
			o.value = !0, c.value = "", s.value = "";
			try {
				let a = await e.saveSettings(p.value);
				n.value = Hc(a.definitions), r.value = a.showGeneratedConfigTab, i.value = n.value.length > 0 ? Math.min(i.value, n.value.length - 1) : -1, u.value = Bc(a), s.value = "Saved. Refresh Foundry before using new species in character generation.", t.onSettingsSaved?.();
			} catch (e) {
				c.value = Uc(e);
			} finally {
				o.value = !1;
			}
		}
	}
	function O(e) {
		r.value = e, s.value = "";
	}
	return {
		...x,
		...T,
		...w,
		...S,
		canSave: b,
		definitions: n,
		duplicateKeys: h,
		duplicateSubspeciesKeys: g,
		generatedConfigText: m,
		hasUnsavedChanges: y,
		invalidDefinitionIndexes: _,
		invalidSubspeciesEntries: v,
		isLoading: a,
		isSaving: o,
		loadError: c,
		loadSettings: E,
		message: s,
		randomTalentSources: l,
		saveSettings: D,
		selectedDefinition: d,
		selectedIndex: i,
		showGeneratedConfigTab: r,
		updateShowGeneratedConfigTab: O
	};
}
//#endregion
//#region src/view/components/DocumentDrop/DocumentList.vue?vue&type=script&setup=true&lang.ts
var Sl = { class: "document-drop__documents" }, Cl = [
	"aria-label",
	"disabled",
	"title",
	"onClick"
], wl = ["src"], Tl = {
	key: 1,
	"aria-hidden": "true",
	class: "fa-solid fa-scroll"
}, El = {
	key: 1,
	class: "document-drop__empty-document"
}, Dl = /* @__PURE__ */ bs(/* @__PURE__ */ L({
	__name: "DocumentList",
	props: {
		documents: {},
		emptyLabel: {},
		isClickable: { type: Boolean }
	},
	emits: ["documentClicked"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			e.uuid && n("documentClicked", e);
		}
		return (t, n) => (B(), V("div", Sl, [e.documents.length > 0 ? (B(!0), V(z, { key: 0 }, R(e.documents, (t) => (B(), V("button", {
			key: t.uuid,
			"aria-label": e.isClickable ? `Use ${t.name}` : void 0,
			class: A(["document-drop__document", { "document-drop__document--clickable": e.isClickable }]),
			disabled: !e.isClickable,
			title: e.isClickable ? t.name : void 0,
			type: "button",
			onClick: ls((e) => r(t), ["stop"])
		}, [t.img ? (B(), V("img", {
			key: 0,
			alt: "",
			"aria-hidden": "true",
			src: t.img
		}, null, 8, wl)) : (B(), V("i", Tl)), U("span", null, j(t.name), 1)], 10, Cl))), 128)) : (B(), V("div", El, [n[0] ||= U("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-arrow-down"
		}, null, -1), U("span", null, j(e.emptyLabel), 1)]))]));
	}
}), [["__scopeId", "data-v-09103f9c"]]);
//#endregion
//#region src/view/components/DocumentDrop/drop-payloads.ts
function Ol(e, t) {
	let n = e.trim();
	if (!n) return "";
	if (Pl(n)) return n;
	let r = jl(n), i = Nl(r, t);
	return i ? Fl(r) ? JSON.stringify({
		type: i,
		uuid: r
	}) : JSON.stringify({
		id: r,
		type: i
	}) : "";
}
function kl(e) {
	let t = e.closest("[data-uuid], [data-document-uuid], [data-entry-uuid], [data-document-id], [data-entry-id], [data-pack]");
	if (!t) return "";
	let n = t.dataset.uuid || t.dataset.documentUuid || t.dataset.entryUuid || "";
	if (n) return Al(n);
	let r = t.dataset.documentId || t.dataset.entryId || "", i = Ml(t);
	if (!r || !i) return "";
	let a = t.dataset.pack || t.closest("[data-pack]")?.dataset.pack || "";
	return JSON.stringify(a ? {
		type: i,
		uuid: `Compendium.${a}.${r}`
	} : {
		type: i,
		uuid: `${i}.${r}`
	});
}
function Al(e) {
	let t = Nl(e, "auto");
	return t ? JSON.stringify({
		type: t,
		uuid: e
	}) : "";
}
function jl(e) {
	return /@UUID\[([^\]]+)]/.exec(e)?.[1]?.trim() ?? e;
}
function Ml(e) {
	let t = e.dataset.documentName || e.dataset.type || e.closest("[data-document-name]")?.dataset.documentName || "";
	return t === "Actor" || t === "Item" ? t : e.classList.contains("actor") ? "Actor" : e.classList.contains("item") ? "Item" : e.closest("#actors") ? "Actor" : e.closest("#items") ? "Item" : "";
}
function Nl(e, t) {
	return /^actor\./i.test(e) || /\.actors(\.|$)/i.test(e) ? "Actor" : /^item\./i.test(e) || /\.items(\.|$)/i.test(e) || t === "auto" ? "Item" : t;
}
function Pl(e) {
	if (!e.startsWith("{")) return !1;
	try {
		return typeof JSON.parse(e).type == "string";
	} catch {
		return !1;
	}
}
function Fl(e) {
	return /^(actor|item|compendium)\./i.test(e);
}
//#endregion
//#region src/view/components/DocumentDrop/ManualEntryForm.vue?vue&type=script&setup=true&lang.ts
var Il = ["value"], Ll = ["value"], Rl = { class: "document-drop__actions" }, zl = /* @__PURE__ */ bs(/* @__PURE__ */ L({
	__name: "ManualEntryForm",
	props: {
		documentType: {},
		documentValue: {},
		isPickingDocument: { type: Boolean }
	},
	emits: [
		"close",
		"startPick",
		"submit",
		"updateDocumentType",
		"updateDocumentValue"
	],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			let t = e.target instanceof HTMLSelectElement ? e.target.value : "auto";
			(t === "Actor" || t === "auto" || t === "Item") && n("updateDocumentType", t);
		}
		function i(e) {
			n("updateDocumentValue", e.target instanceof HTMLInputElement ? e.target.value : "");
		}
		return (t, a) => (B(), V("form", {
			class: "document-drop__manual",
			onClick: a[2] ||= ls(() => {}, ["stop"]),
			onSubmit: a[3] ||= ls((e) => n("submit"), ["prevent"])
		}, [
			U("label", null, [a[5] ||= U("span", null, "Document type", -1), U("select", {
				value: e.documentType,
				onChange: r
			}, [...a[4] ||= [
				U("option", { value: "auto" }, "Auto", -1),
				U("option", { value: "Item" }, "Item", -1),
				U("option", { value: "Actor" }, "Actor", -1)
			]], 40, Il)]),
			U("label", null, [a[6] ||= U("span", null, "UUID or drop JSON", -1), U("input", {
				value: e.documentValue,
				placeholder: "Compendium.package.pack.id",
				type: "text",
				onInput: i
			}, null, 40, Ll)]),
			U("div", Rl, [
				a[7] ||= U("button", { type: "submit" }, "Use", -1),
				U("button", {
					type: "button",
					onClick: a[0] ||= (e) => n("startPick")
				}, j(e.isPickingDocument ? "Waiting..." : "Pick Next Click"), 1),
				U("button", {
					type: "button",
					onClick: a[1] ||= (e) => n("close")
				}, "Cancel")
			])
		], 32));
	}
}), [["__scopeId", "data-v-5a73425f"]]), Bl = [
	"aria-label",
	"role",
	"tabindex",
	"onKeydown"
], Vl = {
	key: 0,
	class: "document-drop__prompt"
}, Hl = { key: 0 }, Ul = {
	key: 1,
	class: "document-drop__content"
}, Wl = /* @__PURE__ */ L({
	inheritAttrs: !1,
	__name: "DocumentDrop",
	props: {
		description: { default: "" },
		documents: { default: () => [] },
		documentsClickable: {
			type: Boolean,
			default: !1
		},
		emptyDocumentLabel: { default: "No document selected." },
		manualEntryTrigger: { default: "zone" },
		showDocuments: {
			type: Boolean,
			default: !1
		},
		showPrompt: {
			type: Boolean,
			default: !0
		},
		title: {},
		variant: { default: "default" }
	},
	emits: ["documentClicked", "dropData"],
	setup(e, { emit: t }) {
		let n = e, r = Gr(), i = t, a = /* @__PURE__ */ F(!1), o = /* @__PURE__ */ F(!1), s = /* @__PURE__ */ F(!1), c = /* @__PURE__ */ F("auto"), l = /* @__PURE__ */ F(""), u = q(() => !!r.prompt), d = q(() => !!r.default), f = q(() => n.showPrompt && (u.value || n.title.length > 0)), p = q(() => n.manualEntryTrigger === "zone"), m = q(() => n.showDocuments ? n.documents : []), h = q(() => n.manualEntryTrigger === "button");
		function g(e) {
			let t = e.currentTarget, n = e.relatedTarget;
			t instanceof Node && n instanceof Node && t.contains(n) || (a.value = !1);
		}
		function _(e) {
			e.preventDefault(), a.value = !1, i("dropData", e.dataTransfer?.getData("text/plain") ?? "");
		}
		function v() {
			n.manualEntryTrigger !== "none" && (o.value = !0);
		}
		function y() {
			o.value = !1, S();
		}
		function b() {
			let e = Ol(l.value, c.value);
			e && (i("dropData", e), l.value = "", y());
		}
		function x() {
			s.value || (s.value = !0, document.addEventListener("click", C, !0));
		}
		function S() {
			s.value && (s.value = !1, document.removeEventListener("click", C, !0));
		}
		function C(e) {
			let t = e.target;
			if (!(t instanceof Element)) return;
			let n = kl(t);
			n && (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), i("dropData", n), y());
		}
		function w() {
			p.value && v();
		}
		return jr(() => {
			S();
		}), (t, n) => (B(), V("div", Sa(t.$attrs, {
			class: ["document-drop", {
				"document-drop--bare": e.variant === "bare",
				"document-drop--compact": e.variant === "compact",
				"document-drop--manual-button": e.manualEntryTrigger === "button",
				"is-hovering": a.value,
				"is-manual-open": o.value
			}],
			"aria-label": p.value ? void 0 : e.title,
			role: p.value ? "button" : "group",
			tabindex: p.value ? 0 : void 0,
			onClick: w,
			onDragenter: n[3] ||= ls((e) => a.value = !0, ["prevent"]),
			onDragover: n[4] ||= ls((e) => a.value = !0, ["prevent"]),
			onDragleave: g,
			onDrop: _,
			onKeydown: [ds(ls(w, ["prevent"]), ["enter"]), ds(ls(w, ["prevent"]), ["space"])]
		}), [
			f.value ? (B(), V("div", Vl, [Rr(t.$slots, "prompt", {}, () => [U("strong", null, j(e.title), 1), e.description ? (B(), V("span", Hl, j(e.description), 1)) : K("", !0)])])) : K("", !0),
			d.value ? (B(), V("div", Ul, [Rr(t.$slots, "default")])) : K("", !0),
			e.showDocuments ? (B(), H(Dl, {
				key: 2,
				documents: m.value,
				"empty-label": e.emptyDocumentLabel,
				"is-clickable": e.documentsClickable,
				onDocumentClicked: n[0] ||= (e) => i("documentClicked", e)
			}, null, 8, [
				"documents",
				"empty-label",
				"is-clickable"
			])) : K("", !0),
			h.value ? (B(), V("button", {
				key: 3,
				class: "document-drop__manual-toggle",
				type: "button",
				onClick: ls(v, ["stop"])
			}, j(o.value ? "Manual Entry Open" : "Manual Entry"), 1)) : K("", !0),
			o.value ? (B(), H(zl, {
				key: 4,
				"document-type": c.value,
				"document-value": l.value,
				"is-picking-document": s.value,
				onClose: y,
				onStartPick: x,
				onSubmit: b,
				onUpdateDocumentType: n[1] ||= (e) => c.value = e,
				onUpdateDocumentValue: n[2] ||= (e) => l.value = e
			}, null, 8, [
				"document-type",
				"document-value",
				"is-picking-document"
			])) : K("", !0)
		], 16, Bl));
	}
}), Gl = {
	skills: "Skills granted during character creation. Drop Skill items to link their sheets, or add names manually.",
	talents: "Talents granted during character creation. Multiple choices in one grant become WFRP's comma-separated either/or entry.",
	traits: "Traits granted by this species or subspecies. Drop Trait items to link their sheets, or add names manually."
}, Kl = [
	"disabled",
	"title",
	"value"
], ql = {
	key: 1,
	class: "species-builder__linked-item-unlinked"
}, Jl = {
	key: 2,
	class: "species-builder__linked-item-empty"
}, Yl = /* @__PURE__ */ L({
	__name: "LinkedItemDropValue",
	props: {
		description: {},
		inputTitle: {},
		isDisabled: { type: Boolean },
		isEditable: { type: Boolean },
		title: {},
		value: {}
	},
	emits: [
		"dropData",
		"openItem",
		"updateName"
	],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			return e.target instanceof HTMLInputElement ? e.target.value : "";
		}
		return (t, i) => (B(), H(Wl, {
			description: e.description,
			documents: e.value.item ? [e.value.item] : [],
			"documents-clickable": !e.isDisabled,
			"empty-document-label": "No item selected.",
			"manual-entry-trigger": "button",
			"show-documents": !!e.value.item?.uuid,
			title: e.title,
			variant: "compact",
			onDocumentClicked: i[1] ||= (e) => n("openItem", e.uuid),
			onDropData: i[2] ||= (e) => n("dropData", e)
		}, {
			default: zn(() => [!e.value.item?.uuid && e.isEditable ? (B(), V("input", {
				key: 0,
				disabled: e.isDisabled,
				title: e.inputTitle,
				value: e.value.name,
				type: "text",
				onInput: i[0] ||= (e) => n("updateName", r(e))
			}, null, 40, Kl)) : e.value.name ? (B(), V("div", ql, [U("strong", null, j(e.value.name), 1), i[3] ||= U("span", null, "Stored by name. Drop the matching Item to link its sheet.", -1)])) : (B(), V("div", Jl, [...i[4] ||= [U("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-arrow-down"
			}, null, -1), U("span", null, "No item selected.", -1)]]))]),
			_: 1
		}, 8, [
			"description",
			"documents",
			"documents-clickable",
			"show-documents",
			"title"
		]));
	}
}), Xl = { class: "species-builder__linked-list-row" }, Zl = ["disabled", "title"], Ql = { class: "species-builder__sr-only" }, $l = /* @__PURE__ */ L({
	__name: "EditableLinkedItemRow",
	props: {
		dropDescription: {},
		dropTitle: {},
		inputTitle: {},
		isDisabled: { type: Boolean },
		removeTitle: {},
		value: {}
	},
	emits: [
		"dropData",
		"openItem",
		"remove",
		"updateName"
	],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (B(), V("div", Xl, [W(Yl, {
			description: e.dropDescription,
			"input-title": e.inputTitle,
			"is-disabled": e.isDisabled,
			"is-editable": !0,
			title: e.dropTitle,
			value: e.value,
			onDropData: r[0] ||= (e) => n("dropData", e),
			onOpenItem: r[1] ||= (e) => n("openItem", e),
			onUpdateName: r[2] ||= (e) => n("updateName", e)
		}, null, 8, [
			"description",
			"input-title",
			"is-disabled",
			"title",
			"value"
		]), U("button", {
			disabled: e.isDisabled,
			title: e.removeTitle,
			class: "species-builder__icon-button species-builder__danger-action",
			type: "button",
			onClick: r[3] ||= (e) => n("remove")
		}, [r[4] ||= U("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-trash"
		}, null, -1), U("span", Ql, j(e.removeTitle), 1)], 8, Zl)]));
	}
}), eu = [
	Q.WeaponSkill,
	Q.BallisticSkill,
	Q.Strength,
	Q.Toughness,
	Q.Initiative,
	Q.Agility,
	Q.Dexterity,
	Q.Intelligence,
	Q.Willpower,
	Q.Fellowship
], tu = [
	{
		field: "movement",
		label: "Movement"
	},
	{
		field: "fate",
		label: "Fate"
	},
	{
		field: "resilience",
		label: "Resilience"
	},
	{
		field: "extra",
		label: "Extra"
	}
], nu = [
	{
		field: "skills",
		label: "Skills"
	},
	{
		field: "talents",
		label: "Talents"
	},
	{
		field: "traits",
		label: "Traits"
	}
], ru = { class: "species-builder__item-sections" }, iu = { class: "species-builder__section-heading species-builder__section-heading--compact" }, au = { class: "species-builder__inline-actions" }, ou = [
	"disabled",
	"title",
	"onClick"
], su = ["disabled"], cu = ["disabled"], lu = {
	key: 0,
	class: "species-builder__item-list"
}, uu = { class: "species-builder__choice-card-header" }, du = { class: "species-builder__inline-actions" }, fu = ["disabled", "onClick"], pu = ["disabled", "onClick"], mu = { class: "species-builder__choice-list" }, hu = {
	key: 1,
	class: "species-builder__empty-list"
}, gu = /* @__PURE__ */ L({
	__name: "ArrayFields",
	props: {
		fields: {},
		isDisabled: { type: Boolean },
		values: {}
	},
	emits: [
		"dropData",
		"linkedItemDrop",
		"openItem",
		"talentChoiceDrop",
		"updateLinkedItems",
		"updateLinkedTalents"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = q(() => nu.filter((e) => !n.fields || n.fields.includes(e.field)));
		function a(e) {
			return Gc(n.values[e], o(e));
		}
		function o(e) {
			return e === "skills" ? n.values.linkedSkills : n.values.linkedTraits;
		}
		function s() {
			return Kc(n.values.talents, n.values.linkedTalents);
		}
		function c(e) {
			return e === "talents" ? s().length : a(e).length;
		}
		function l(e) {
			return e === "traits" ? "traits" : "skills";
		}
		function u(e) {
			let t = e === "skills" ? "New Skill" : "New Trait";
			y(e, [...a(e), { name: t }]);
		}
		function d() {
			b([...s(), { choices: [{ name: "New Talent" }] }]);
		}
		function f() {
			b([...s(), { choices: [{ name: "New Talent" }, { name: "Alternative Talent" }] }]);
		}
		function p(e, t, n) {
			y(e, Yc(a(e), t, n));
		}
		function m(e, t) {
			y(e, a(e).filter((e, n) => n !== t));
		}
		function h(e, t, n) {
			b(Zc(s(), e, t, n));
		}
		function g(e) {
			b(s().map((t, n) => n === e ? { choices: [...t.choices, { name: "Alternative Talent" }] } : t));
		}
		function _(e) {
			b(s().filter((t, n) => n !== e));
		}
		function v(e, t) {
			let n = s(), r = n[e];
			if (!r) return;
			let i = r.choices.filter((e, n) => n !== t);
			if (i.length === 0) {
				_(e);
				return;
			}
			b(n.map((t, n) => n === e ? { choices: i } : t));
		}
		function y(e, t) {
			r("updateLinkedItems", e, t);
		}
		function b(e) {
			r("updateLinkedTalents", e);
		}
		return (t, n) => (B(), V("div", ru, [(B(!0), V(z, null, R(i.value, (t) => (B(), V("section", {
			key: t.field,
			class: "species-builder__item-section"
		}, [
			U("div", iu, [U("div", null, [U("h4", null, j(t.label), 1), U("p", null, j(I(Gl)[t.field]), 1)]), U("div", au, [t.field === "talents" ? (B(), V(z, { key: 1 }, [U("button", {
				disabled: e.isDisabled,
				title: "Add one guaranteed Talent",
				type: "button",
				onClick: d
			}, [...n[3] ||= [U("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), G(" Talent ", -1)]], 8, su), U("button", {
				disabled: e.isDisabled,
				title: "Add a Talent choice set. WFRP stores this as one comma-separated Talent entry.",
				type: "button",
				onClick: f
			}, [...n[4] ||= [U("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-list-check"
			}, null, -1), G(" Choice Set ", -1)]], 8, cu)], 64)) : (B(), V("button", {
				key: 0,
				disabled: e.isDisabled,
				title: `Add a ${t.label.slice(0, -1)} row`,
				type: "button",
				onClick: (e) => u(t.field)
			}, [...n[2] ||= [U("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), G(" Add ", -1)]], 8, ou))])]),
			W(Wl, {
				description: `Drop a WFRP ${t.label.slice(0, -1)} item to add it to this list.`,
				title: `Drop ${t.label}`,
				variant: "compact",
				onDropData: (e) => r("dropData", t.field, e)
			}, null, 8, [
				"description",
				"title",
				"onDropData"
			]),
			c(t.field) > 0 ? (B(), V("div", lu, [t.field === "talents" ? (B(!0), V(z, { key: 1 }, R(s(), (t, i) => (B(), V("article", {
				key: `talent-${i}`,
				class: "species-builder__choice-card"
			}, [U("div", uu, [U("strong", null, j(t.choices.length > 1 ? "Talent Choice" : "Guaranteed Talent"), 1), U("div", du, [U("button", {
				disabled: e.isDisabled,
				title: "Add another alternative to this Talent choice",
				type: "button",
				onClick: (e) => g(i)
			}, [...n[5] ||= [U("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), G(" Choice ", -1)]], 8, fu), U("button", {
				disabled: e.isDisabled,
				title: "Remove this Talent grant",
				class: "species-builder__icon-button species-builder__danger-action",
				type: "button",
				onClick: (e) => _(i)
			}, [...n[6] ||= [U("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), U("span", { class: "species-builder__sr-only" }, "Remove Talent grant", -1)]], 8, pu)])]), U("div", mu, [(B(!0), V(z, null, R(t.choices, (a, o) => (B(), H($l, {
				key: `${i}-${o}`,
				"drop-description": "Drop a WFRP Talent item to link or replace this option.",
				"drop-title": "Link Talent",
				"input-title": t.choices.length > 1 ? "One Talent option offered for this choice set" : "Guaranteed Talent name",
				"is-disabled": e.isDisabled,
				"remove-title": `Remove ${a.name}`,
				value: a,
				onDropData: (e) => r("talentChoiceDrop", i, o, e),
				onOpenItem: n[1] ||= (e) => r("openItem", e),
				onRemove: (e) => v(i, o),
				onUpdateName: (e) => h(i, o, e)
			}, null, 8, [
				"input-title",
				"is-disabled",
				"remove-title",
				"value",
				"onDropData",
				"onRemove",
				"onUpdateName"
			]))), 128))])]))), 128)) : (B(!0), V(z, { key: 0 }, R(a(t.field), (i, a) => (B(), H($l, {
				key: `${t.field}-${a}`,
				"drop-description": `Drop a WFRP ${t.label.slice(0, -1)} item to link or replace this row.`,
				"drop-title": `Link ${t.label.slice(0, -1)}`,
				"input-title": `${t.label.slice(0, -1)} name used by WFRP item lookup`,
				"is-disabled": e.isDisabled,
				"remove-title": `Remove ${i.name}`,
				value: i,
				onDropData: (e) => r("linkedItemDrop", l(t.field), a, e),
				onOpenItem: n[0] ||= (e) => r("openItem", e),
				onRemove: (e) => m(l(t.field), a),
				onUpdateName: (e) => p(l(t.field), a, e)
			}, null, 8, [
				"drop-description",
				"drop-title",
				"input-title",
				"is-disabled",
				"remove-title",
				"value",
				"onDropData",
				"onRemove",
				"onUpdateName"
			]))), 128))])) : (B(), V("p", hu, "No " + j(t.label.toLowerCase()) + " yet.", 1))
		]))), 128))]));
	}
}), _u = { class: "species-builder__linked-item-field" }, vu = { class: "species-builder__linked-item-label" }, yu = /* @__PURE__ */ L({
	__name: "LinkedItemDropField",
	props: {
		description: {},
		isDisabled: { type: Boolean },
		label: {},
		title: {},
		value: {}
	},
	emits: ["dropData", "openItem"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (B(), V("div", _u, [U("span", vu, j(e.label), 1), W(Yl, {
			description: e.description,
			"is-disabled": e.isDisabled,
			"is-editable": !1,
			title: e.title,
			value: e.value,
			onDropData: r[0] ||= (e) => n("dropData", e),
			onOpenItem: r[1] ||= (e) => n("openItem", e)
		}, null, 8, [
			"description",
			"is-disabled",
			"title",
			"value"
		])]));
	}
}), bu = { class: "species-builder__item-section" }, xu = { class: "species-builder__section-heading species-builder__section-heading--compact" }, Su = ["disabled"], Cu = {
	key: 0,
	class: "species-builder__item-list"
}, wu = { class: "species-builder__choice-card-header" }, Tu = { class: "species-builder__inline-actions" }, Eu = ["disabled", "onClick"], Du = ["disabled", "onClick"], Ou = { class: "species-builder__choice-list" }, ku = ["disabled", "onClick"], Au = {
	key: 1,
	class: "species-builder__empty-list"
}, ju = /* @__PURE__ */ L({
	__name: "CareerReplacementRows",
	props: {
		isDisabled: { type: Boolean },
		rows: {},
		values: {}
	},
	emits: [
		"dropReplacement",
		"dropRolled",
		"openItem",
		"updateRows"
	],
	setup(e, { emit: t }) {
		let n = e, r = t;
		function i() {
			return n.rows?.length ? n.rows : pl(n.values);
		}
		function a() {
			r("updateRows", [...i(), ll()]);
		}
		function o(e) {
			r("updateRows", i().map((t, n) => n === e ? {
				...t,
				replacements: [...t.replacements, { name: "" }]
			} : t));
		}
		function s(e, t) {
			r("updateRows", i().map((n, r) => r === e ? {
				...n,
				replacements: n.replacements.filter((e, n) => n !== t)
			} : n).filter((e) => e.replacements.length > 0));
		}
		function c(e) {
			r("updateRows", i().filter((t, n) => n !== e));
		}
		return (t, n) => (B(), V("section", bu, [U("div", xu, [n[3] ||= U("div", null, [U("h4", null, "Career Replacements"), U("p", null, " Offer one or more replacement Careers when a character rolls a specific Career. This matches WFRP's speciesCareerReplacements config. ")], -1), U("button", {
			disabled: e.isDisabled,
			title: "Add a rolled Career and replacement choices",
			type: "button",
			onClick: a
		}, [...n[2] ||= [U("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-plus"
		}, null, -1), G(" Add ", -1)]], 8, Su)]), i().length > 0 ? (B(), V("div", Cu, [(B(!0), V(z, null, R(i(), (t, i) => (B(), V("article", {
			key: `career-replacement-${i}`,
			class: "species-builder__choice-card"
		}, [U("div", wu, [W(yu, {
			description: "Drop the Career result that should allow replacement choices.",
			"is-disabled": e.isDisabled,
			label: "Rolled Career",
			title: "Drop Rolled Career",
			value: t.rolled,
			onDropData: (e) => r("dropRolled", i, e),
			onOpenItem: n[0] ||= (e) => r("openItem", e)
		}, null, 8, [
			"is-disabled",
			"value",
			"onDropData"
		]), U("div", Tu, [U("button", {
			disabled: e.isDisabled,
			title: "Add another replacement Career choice",
			type: "button",
			onClick: (e) => o(i)
		}, [...n[4] ||= [U("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-plus"
		}, null, -1), G(" Choice ", -1)]], 8, Eu), U("button", {
			disabled: e.isDisabled,
			title: "Remove this Career replacement rule",
			class: "species-builder__icon-button species-builder__danger-action",
			type: "button",
			onClick: (e) => c(i)
		}, [...n[5] ||= [U("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-trash"
		}, null, -1), U("span", { class: "species-builder__sr-only" }, "Remove Career replacement", -1)]], 8, Du)])]), U("div", Ou, [(B(!0), V(z, null, R(t.replacements, (t, a) => (B(), V("div", {
			key: `${i}-${a}`,
			class: "species-builder__list-row"
		}, [W(yu, {
			description: "Drop one Career offered instead of the rolled Career.",
			"is-disabled": e.isDisabled,
			label: "Replacement Career",
			title: "Drop Replacement Career",
			value: t,
			onDropData: (e) => r("dropReplacement", i, a, e),
			onOpenItem: n[1] ||= (e) => r("openItem", e)
		}, null, 8, [
			"is-disabled",
			"value",
			"onDropData"
		]), U("button", {
			disabled: e.isDisabled,
			title: "Remove this replacement Career choice",
			class: "species-builder__icon-button species-builder__danger-action",
			type: "button",
			onClick: (e) => s(i, a)
		}, [...n[6] ||= [U("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-xmark"
		}, null, -1), U("span", { class: "species-builder__sr-only" }, "Remove replacement Career choice", -1)]], 8, ku)]))), 128))])]))), 128))])) : (B(), V("p", Au, "No Career replacements."))]));
	}
});
//#endregion
//#region src/view/apps/species-builder/mapped-option-fields/formatters.ts
function Mu(e) {
	return e.flatMap(([e, t]) => e.trim() ? [`${e.trim()}: ${t}`] : []).join("\n");
}
function Nu(e) {
	return e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement ? e.target.value : "";
}
//#endregion
//#region src/view/apps/species-builder/mapped-option-fields/RandomTalentRows.vue?vue&type=script&setup=true&lang.ts
var Pu = { class: "species-builder__item-section" }, Fu = { class: "species-builder__section-heading species-builder__section-heading--compact" }, Iu = ["disabled"], Lu = {
	key: 0,
	class: "species-builder__item-list"
}, Ru = [
	"disabled",
	"value",
	"onInput"
], zu = ["value"], Bu = [
	"disabled",
	"value",
	"onInput"
], Vu = ["disabled", "onClick"], Hu = {
	key: 1,
	class: "species-builder__empty-list"
}, Uu = /* @__PURE__ */ L({
	__name: "RandomTalentRows",
	props: {
		isDisabled: { type: Boolean },
		sources: {},
		values: {}
	},
	emits: ["update"],
	setup(e, { emit: t }) {
		let n = e, r = t;
		function i() {
			return Object.entries(n.values ?? {});
		}
		function a() {
			let e = n.sources[0]?.key ?? "talents";
			r("update", Mu([...i(), [e, 1]]));
		}
		function o(e, t) {
			r("update", Mu(i().map(([n, r], i) => i === e ? [t, r] : [n, r])));
		}
		function s(e, t) {
			let n = Number(t);
			r("update", Mu(i().map(([t, r], i) => i === e ? [t, Number.isFinite(n) ? n : r] : [t, r])));
		}
		function c(e) {
			return n.sources.some((t) => t.key === e) ? n.sources : [...n.sources, {
				key: e,
				label: `Saved source missing from this world (${e})`
			}];
		}
		function l(e) {
			r("update", Mu(i().filter((t, n) => n !== e)));
		}
		return (t, n) => (B(), V("section", Pu, [U("div", Fu, [n[1] ||= U("div", null, [U("h4", null, "Random Talents"), U("p", null, " Choose an available random Talent source and how many Talents are drawn from it. The default source is the standard character creation Talent table. ")], -1), U("button", {
			disabled: e.isDisabled,
			title: "Add a random Talent source and draw count",
			type: "button",
			onClick: a
		}, [...n[0] ||= [U("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-plus"
		}, null, -1), G(" Add ", -1)]], 8, Iu)]), i().length > 0 ? (B(), V("div", Lu, [(B(!0), V(z, null, R(i(), ([t, r], i) => (B(), V("div", {
			key: `random-${i}`,
			class: "species-builder__map-row species-builder__map-row--number"
		}, [
			U("label", null, [n[2] ||= U("span", null, "Talent source", -1), U("select", {
				disabled: e.isDisabled,
				title: "Random Talent table source available in this world.",
				value: t,
				onInput: (e) => o(i, I(Nu)(e))
			}, [(B(!0), V(z, null, R(c(t), (e) => (B(), V("option", {
				key: e.key,
				value: e.key
			}, j(e.label), 9, zu))), 128))], 40, Ru)]),
			U("label", null, [n[3] ||= U("span", null, "Draws", -1), U("input", {
				disabled: e.isDisabled,
				min: "0",
				title: "How many random Talents this species draws from that table.",
				value: r,
				type: "number",
				onInput: (e) => s(i, I(Nu)(e))
			}, null, 40, Bu)]),
			U("button", {
				disabled: e.isDisabled,
				title: "Remove this random Talent source",
				class: "species-builder__icon-button species-builder__danger-action",
				type: "button",
				onClick: (e) => l(i)
			}, [...n[4] ||= [U("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), U("span", { class: "species-builder__sr-only" }, "Remove random Talent source", -1)]], 8, Vu)
		]))), 128))])) : (B(), V("p", Hu, "No random Talent draws."))]));
	}
}), Wu = { class: "species-builder__item-section" }, Gu = { class: "species-builder__section-heading species-builder__section-heading--compact" }, Ku = ["disabled"], qu = {
	key: 0,
	class: "species-builder__item-list"
}, Ju = ["disabled", "onClick"], Yu = {
	key: 1,
	class: "species-builder__empty-list"
}, Xu = /* @__PURE__ */ L({
	__name: "TalentReplacementRows",
	props: {
		isDisabled: { type: Boolean },
		rows: {},
		values: {}
	},
	emits: [
		"dropReplacement",
		"dropRolled",
		"openItem",
		"updateRows"
	],
	setup(e, { emit: t }) {
		let n = e, r = t;
		function i() {
			return n.rows?.length ? n.rows : fl(n.values);
		}
		function a() {
			r("updateRows", [...i(), cl()]);
		}
		function o(e) {
			r("updateRows", i().filter((t, n) => n !== e));
		}
		return (t, n) => (B(), V("section", Wu, [U("div", Gu, [n[3] ||= U("div", null, [U("h4", null, "Talent Replacements"), U("p", null, " Let the character replace a rolled Talent with a specific alternative, for example replacing Artistic with Beneath Notice. ")], -1), U("button", {
			disabled: e.isDisabled,
			title: "Add a rolled Talent and replacement Talent",
			type: "button",
			onClick: a
		}, [...n[2] ||= [U("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-plus"
		}, null, -1), G(" Add ", -1)]], 8, Ku)]), i().length > 0 ? (B(), V("div", qu, [(B(!0), V(z, null, R(i(), (t, i) => (B(), V("div", {
			key: `talent-replacement-${i}`,
			class: "species-builder__map-row species-builder__map-row--pair"
		}, [
			W(yu, {
				description: "Drop the Talent result that may be replaced.",
				"is-disabled": e.isDisabled,
				label: "Rolled Talent",
				title: "Drop Rolled Talent",
				value: t.rolled,
				onDropData: (e) => r("dropRolled", i, e),
				onOpenItem: n[0] ||= (e) => r("openItem", e)
			}, null, 8, [
				"is-disabled",
				"value",
				"onDropData"
			]),
			W(yu, {
				description: "Drop the Talent offered instead of the rolled Talent.",
				"is-disabled": e.isDisabled,
				label: "Replacement",
				title: "Drop Replacement Talent",
				value: t.replacement,
				onDropData: (e) => r("dropReplacement", i, e),
				onOpenItem: n[1] ||= (e) => r("openItem", e)
			}, null, 8, [
				"is-disabled",
				"value",
				"onDropData"
			]),
			U("button", {
				disabled: e.isDisabled,
				title: "Remove this Talent replacement",
				class: "species-builder__icon-button species-builder__danger-action",
				type: "button",
				onClick: (e) => o(i)
			}, [...n[4] ||= [U("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), U("span", { class: "species-builder__sr-only" }, "Remove Talent replacement", -1)]], 8, Ju)
		]))), 128))])) : (B(), V("p", Yu, "No Talent replacements."))]));
	}
}), Zu = { class: "species-builder__item-sections" }, Qu = /* @__PURE__ */ L({
	__name: "MappedOptionFields",
	props: {
		includeCareerReplacements: { type: Boolean },
		isDisabled: { type: Boolean },
		randomTalentSources: {},
		values: {}
	},
	emits: [
		"careerReplacementChoiceDrop",
		"careerReplacementRolledDrop",
		"openItem",
		"talentReplacementReplacementDrop",
		"talentReplacementRolledDrop",
		"update",
		"updateCareerReplacementRows",
		"updateTalentReplacementRows"
	],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (B(), V("div", Zu, [
			W(Uu, {
				"is-disabled": e.isDisabled,
				sources: e.randomTalentSources,
				values: e.values.randomTalents,
				onUpdate: r[0] ||= (e) => n("update", "randomTalents", e)
			}, null, 8, [
				"is-disabled",
				"sources",
				"values"
			]),
			W(Xu, {
				"is-disabled": e.isDisabled,
				rows: e.values.talentReplacementRows,
				values: e.values.talentReplacements,
				onDropReplacement: r[1] ||= (e, t) => n("talentReplacementReplacementDrop", e, t),
				onDropRolled: r[2] ||= (e, t) => n("talentReplacementRolledDrop", e, t),
				onOpenItem: r[3] ||= (e) => n("openItem", e),
				onUpdateRows: r[4] ||= (e) => n("updateTalentReplacementRows", e)
			}, null, 8, [
				"is-disabled",
				"rows",
				"values"
			]),
			e.includeCareerReplacements ? (B(), H(ju, {
				key: 0,
				"is-disabled": e.isDisabled,
				rows: e.values.careerReplacementRows,
				values: e.values.careerReplacements,
				onDropReplacement: r[5] ||= (e, t, r) => n("careerReplacementChoiceDrop", e, t, r),
				onDropRolled: r[6] ||= (e, t) => n("careerReplacementRolledDrop", e, t),
				onOpenItem: r[7] ||= (e) => n("openItem", e),
				onUpdateRows: r[8] ||= (e) => n("updateCareerReplacementRows", e)
			}, null, 8, [
				"is-disabled",
				"rows",
				"values"
			])) : K("", !0)
		]));
	}
}), $u = { class: "species-builder__section" }, ed = { class: "species-builder__section-help" }, td = /* @__PURE__ */ L({
	__name: "RandomTablesSection",
	props: {
		help: {},
		includeCareerReplacements: { type: Boolean },
		isDisabled: { type: Boolean },
		randomTalentSources: {},
		values: {}
	},
	emits: [
		"careerReplacementChoiceDrop",
		"careerReplacementRolledDrop",
		"openItem",
		"talentReplacementReplacementDrop",
		"talentReplacementRolledDrop",
		"update",
		"updateCareerReplacementRows",
		"updateTalentReplacementRows"
	],
	setup(e, { emit: t }) {
		let n = t;
		function r(e, t, r) {
			n("careerReplacementChoiceDrop", e, t, r);
		}
		function i(e, t) {
			n("careerReplacementRolledDrop", e, t);
		}
		function a(e, t) {
			n("talentReplacementReplacementDrop", e, t);
		}
		function o(e, t) {
			n("talentReplacementRolledDrop", e, t);
		}
		return (t, s) => (B(), V("section", $u, [
			s[4] ||= U("h3", null, "Random Tables And Replacements", -1),
			U("p", ed, j(e.help), 1),
			W(Qu, {
				"include-career-replacements": e.includeCareerReplacements,
				"is-disabled": e.isDisabled,
				"random-talent-sources": e.randomTalentSources,
				values: e.values,
				onCareerReplacementChoiceDrop: r,
				onCareerReplacementRolledDrop: i,
				onOpenItem: s[0] ||= (e) => n("openItem", e),
				onTalentReplacementReplacementDrop: a,
				onTalentReplacementRolledDrop: o,
				onUpdate: s[1] ||= (e, t) => n("update", e, t),
				onUpdateCareerReplacementRows: s[2] ||= (e) => n("updateCareerReplacementRows", e),
				onUpdateTalentReplacementRows: s[3] ||= (e) => n("updateTalentReplacementRows", e)
			}, null, 8, [
				"include-career-replacements",
				"is-disabled",
				"random-talent-sources",
				"values"
			])
		]));
	}
}), nd = { class: "species-builder__field-grid species-builder__field-grid--characteristics" }, rd = [
	"disabled",
	"value",
	"onInput"
], id = /* @__PURE__ */ L({
	__name: "CharacteristicFields",
	props: {
		characteristics: {},
		isDisabled: { type: Boolean }
	},
	emits: ["update"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			return e.target instanceof HTMLInputElement ? e.target.value : "";
		}
		return (t, i) => (B(), V("div", nd, [(B(!0), V(z, null, R(I(eu), (t) => (B(), V("label", { key: t }, [U("span", null, j(I(Ks)[t]), 1), U("input", {
			disabled: e.isDisabled,
			value: e.characteristics?.[t] ?? "",
			type: "text",
			onInput: (e) => n("update", t, r(e))
		}, null, 40, rd)]))), 128))]));
	}
}), ad = { class: "species-builder__field-grid species-builder__field-grid--four" }, od = [
	"disabled",
	"value",
	"onInput"
], sd = /* @__PURE__ */ L({
	__name: "StatFields",
	props: {
		isDisabled: { type: Boolean },
		values: {}
	},
	emits: ["update"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			return e.target instanceof HTMLInputElement ? e.target.value : "";
		}
		return (t, i) => (B(), V("div", ad, [(B(!0), V(z, null, R(I(tu), (t) => (B(), V("label", { key: t.field }, [U("span", null, j(t.label), 1), U("input", {
			disabled: e.isDisabled,
			value: e.values[t.field] ?? "",
			type: "number",
			onInput: (e) => n("update", t.field, r(e))
		}, null, 40, od)]))), 128))]));
	}
}), cd = { class: "species-builder__editor-page" }, ld = { class: "species-builder__section" }, ud = { class: "species-builder__section" }, dd = /* @__PURE__ */ L({
	__name: "SpeciesBuilderAttributesTab",
	props: {
		definition: {},
		isDisabled: { type: Boolean }
	},
	emits: ["updateCharacteristic", "updateNumberField"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (B(), V("section", cd, [U("section", ld, [
			r[2] ||= U("h3", null, "Characteristics", -1),
			r[3] ||= U("p", { class: "species-builder__section-help" }, " Starting characteristic formulas used by WFRP character creation. These are usually dice formulas such as 2d10+20. ", -1),
			W(id, {
				characteristics: e.definition.characteristics,
				"is-disabled": e.isDisabled,
				onUpdate: r[0] ||= (e, t) => n("updateCharacteristic", e, t)
			}, null, 8, ["characteristics", "is-disabled"])
		]), U("section", ud, [
			r[4] ||= U("h3", null, "Stats", -1),
			r[5] ||= U("p", { class: "species-builder__section-help" }, " Core character creation values: Movement, Fate, Resilience, and extra points that may be distributed between Fate and Resilience. ", -1),
			W(sd, {
				"is-disabled": e.isDisabled,
				values: e.definition,
				onUpdate: r[1] ||= (e, t) => n("updateNumberField", e, t)
			}, null, 8, ["is-disabled", "values"])
		])]));
	}
}), fd = { class: "species-builder__field-grid species-builder__field-grid--four" }, pd = ["disabled", "value"], md = ["disabled", "value"], hd = ["disabled", "value"], gd = ["disabled", "value"], _d = /* @__PURE__ */ L({
	__name: "AgeHeightFields",
	props: {
		definition: {},
		isDisabled: { type: Boolean }
	},
	emits: ["updateHeightField", "updateStringField"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			return e.target instanceof HTMLInputElement ? e.target.value : "";
		}
		return (t, i) => (B(), V("div", fd, [
			U("label", null, [i[4] ||= U("span", null, "Age", -1), U("input", {
				disabled: e.isDisabled,
				value: e.definition.age ?? "",
				type: "text",
				onInput: i[0] ||= (e) => n("updateStringField", "age", r(e))
			}, null, 40, pd)]),
			U("label", null, [i[5] ||= U("span", null, "Height Die", -1), U("input", {
				disabled: e.isDisabled,
				value: e.definition.height?.die ?? "",
				type: "text",
				onInput: i[1] ||= (e) => n("updateHeightField", "die", r(e))
			}, null, 40, md)]),
			U("label", null, [i[6] ||= U("span", null, "Feet", -1), U("input", {
				disabled: e.isDisabled,
				value: e.definition.height?.feet ?? "",
				type: "number",
				onInput: i[2] ||= (e) => n("updateHeightField", "feet", r(e))
			}, null, 40, hd)]),
			U("label", null, [i[7] ||= U("span", null, "Inches", -1), U("input", {
				disabled: e.isDisabled,
				value: e.definition.height?.inches ?? "",
				type: "number",
				onInput: i[3] ||= (e) => n("updateHeightField", "inches", r(e))
			}, null, 40, gd)])
		]));
	}
}), vd = { class: "species-builder__editor-page" }, yd = { class: "species-builder__section" }, bd = { class: "species-builder__field-grid species-builder__field-grid--two" }, xd = ["disabled", "value"], Sd = [
	"disabled",
	"placeholder",
	"value"
], Cd = { class: "species-builder__check-row" }, wd = ["checked", "disabled"], Td = { class: "species-builder__section" }, Ed = /* @__PURE__ */ L({
	__name: "SpeciesBuilderDetailsTab",
	props: {
		definition: {},
		isDisabled: { type: Boolean }
	},
	emits: [
		"updateBooleanField",
		"updateHeightField",
		"updateStringField"
	],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			return e.target instanceof HTMLInputElement ? e.target.value : "";
		}
		function i(e) {
			return e.target instanceof HTMLInputElement && e.target.checked;
		}
		return (t, a) => (B(), V("section", vd, [U("section", yd, [
			a[8] ||= U("h3", null, "Identity", -1),
			a[9] ||= U("p", { class: "species-builder__section-help" }, " The species name is what users see. The key is the WFRP config identifier used when generating species data. ", -1),
			U("div", bd, [U("label", null, [a[5] ||= U("span", null, "Name", -1), U("input", {
				disabled: e.isDisabled,
				value: e.definition.name,
				type: "text",
				onInput: a[0] ||= (e) => n("updateStringField", "name", r(e))
			}, null, 40, xd)]), U("label", null, [a[6] ||= U("span", null, "Key", -1), U("input", {
				disabled: e.isDisabled,
				placeholder: I(Nc)(e.definition),
				value: e.definition.key,
				type: "text",
				onInput: a[1] ||= (e) => n("updateStringField", "key", r(e))
			}, null, 40, Sd)])]),
			U("label", Cd, [U("input", {
				checked: e.definition.includeInExtraSpecies,
				disabled: e.isDisabled,
				type: "checkbox",
				onChange: a[2] ||= (e) => n("updateBooleanField", "includeInExtraSpecies", i(e))
			}, null, 40, wd), a[7] ||= U("span", null, "Show in WFRP extra species options", -1)])
		]), U("section", Td, [
			a[10] ||= U("h3", null, "Age And Height", -1),
			a[11] ||= U("p", { class: "species-builder__section-help" }, " Formulas used by character creation to roll age and random height. ", -1),
			W(_d, {
				definition: e.definition,
				"is-disabled": e.isDisabled,
				onUpdateHeightField: a[3] ||= (e, t) => n("updateHeightField", e, t),
				onUpdateStringField: a[4] ||= (e, t) => n("updateStringField", e, t)
			}, null, 8, ["definition", "is-disabled"])
		])]));
	}
}), Dd = {
	key: 0,
	class: "species-builder__subspecies-editor-panel"
}, Od = { class: "species-builder__section-heading" }, kd = ["disabled"], Ad = { class: "species-builder__field-grid species-builder__field-grid--two" }, jd = ["disabled", "value"], Md = [
	"disabled",
	"placeholder",
	"value"
], Nd = { class: "species-builder__section" }, Pd = { class: "species-builder__section" }, Fd = { class: "species-builder__section" }, Id = /* @__PURE__ */ L({
	__name: "SubspeciesEditorSubView",
	props: {
		index: {},
		isLoading: { type: Boolean },
		isOpen: { type: Boolean },
		isSaving: { type: Boolean },
		randomTalentSources: {},
		subspecies: {}
	},
	emits: [
		"close",
		"delete",
		"arrayFieldDrop",
		"linkedItemDrop",
		"openItem",
		"talentChoiceDrop",
		"talentReplacementReplacementDrop",
		"talentReplacementRolledDrop",
		"updateArrayField",
		"updateCharacteristic",
		"updateLinkedItems",
		"updateLinkedTalents",
		"updateNumberField",
		"updateStringField",
		"updateTalentReplacementRows",
		"updateTextMapField"
	],
	setup(e, { emit: t }) {
		let n = e, r = t;
		function i(e) {
			return e.target instanceof HTMLInputElement ? e.target.value : "";
		}
		function a() {
			r("delete", n.index), r("close");
		}
		function o(e, t) {
			e !== "careerReplacements" && r("updateTextMapField", n.index, e, t);
		}
		return (t, n) => (B(), H(xs, {
			open: e.isOpen,
			title: e.subspecies?.name || "Subspecies",
			onClose: n[14] ||= (e) => r("close")
		}, {
			default: zn(() => [e.subspecies ? (B(), V("div", Dd, [
				U("div", Od, [n[16] ||= U("h2", null, "Subspecies Details", -1), U("button", {
					disabled: e.isLoading || e.isSaving,
					type: "button",
					onClick: a
				}, [...n[15] ||= [U("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), G(" Delete ", -1)]], 8, kd)]),
				U("div", Ad, [U("label", null, [n[17] ||= U("span", null, "Name", -1), U("input", {
					disabled: e.isLoading || e.isSaving,
					value: e.subspecies.name,
					type: "text",
					onInput: n[0] ||= (t) => r("updateStringField", e.index, "name", i(t))
				}, null, 40, jd)]), U("label", null, [n[18] ||= U("span", null, "Key", -1), U("input", {
					disabled: e.isLoading || e.isSaving,
					placeholder: I(Pc)(e.subspecies),
					value: e.subspecies.key,
					type: "text",
					onInput: n[1] ||= (t) => r("updateStringField", e.index, "key", i(t))
				}, null, 40, Md)])]),
				U("section", Nd, [
					n[19] ||= U("h3", null, "Characteristics", -1),
					n[20] ||= U("p", { class: "species-builder__section-help" }, " Subspecies characteristic formulas override the parent species characteristics when this subspecies is selected. ", -1),
					W(id, {
						characteristics: e.subspecies.characteristics,
						"is-disabled": e.isLoading || e.isSaving,
						onUpdate: n[2] ||= (t, n) => r("updateCharacteristic", e.index, t, n)
					}, null, 8, ["characteristics", "is-disabled"])
				]),
				U("section", Pd, [
					n[21] ||= U("h3", null, "Stats", -1),
					n[22] ||= U("p", { class: "species-builder__section-help" }, " Optional subspecies Movement, Fate, Resilience, and extra points. Leave a value blank to use the parent species value. ", -1),
					W(sd, {
						"is-disabled": e.isLoading || e.isSaving,
						values: e.subspecies,
						onUpdate: n[3] ||= (t, n) => r("updateNumberField", e.index, t, n)
					}, null, 8, ["is-disabled", "values"])
				]),
				U("section", Fd, [
					n[23] ||= U("h3", null, "Skills, Talents, And Traits", -1),
					n[24] ||= U("p", { class: "species-builder__section-help" }, " If a subspecies defines one of these lists, WFRP uses that subspecies list instead of the parent species list for the same field. ", -1),
					W(gu, {
						"is-disabled": e.isLoading || e.isSaving,
						values: e.subspecies,
						onDropData: n[4] ||= (t, n) => r("arrayFieldDrop", e.index, t, n),
						onLinkedItemDrop: n[5] ||= (t, n, i) => r("linkedItemDrop", e.index, t, n, i),
						onOpenItem: n[6] ||= (e) => r("openItem", e),
						onTalentChoiceDrop: n[7] ||= (t, n, i) => r("talentChoiceDrop", e.index, t, n, i),
						onUpdateLinkedItems: n[8] ||= (t, n) => r("updateLinkedItems", e.index, t, n),
						onUpdateLinkedTalents: n[9] ||= (t) => r("updateLinkedTalents", e.index, t)
					}, null, 8, ["is-disabled", "values"])
				]),
				W(td, {
					help: "Configure subspecies-specific random Talent draws and Talent replacement offers as rows.",
					"is-disabled": e.isLoading || e.isSaving,
					"random-talent-sources": e.randomTalentSources,
					values: e.subspecies,
					onOpenItem: n[10] ||= (e) => r("openItem", e),
					onTalentReplacementReplacementDrop: n[11] ||= (t, n) => r("talentReplacementReplacementDrop", e.index, t, n),
					onTalentReplacementRolledDrop: n[12] ||= (t, n) => r("talentReplacementRolledDrop", e.index, t, n),
					onUpdate: o,
					onUpdateTalentReplacementRows: n[13] ||= (t) => r("updateTalentReplacementRows", e.index, t)
				}, null, 8, [
					"is-disabled",
					"random-talent-sources",
					"values"
				])
			])) : K("", !0)]),
			_: 1
		}, 8, ["open", "title"]));
	}
}), Ld = /* @__PURE__ */ L({
	__name: "SpeciesBuilderSubspeciesOverlay",
	props: {
		index: {},
		isLoading: { type: Boolean },
		isOpen: { type: Boolean },
		isSaving: { type: Boolean },
		randomTalentSources: {},
		subspecies: {}
	},
	emits: [
		"close",
		"deleteSubspecies",
		"openItem",
		"subspeciesArrayFieldDrop",
		"subspeciesLinkedItemDrop",
		"subspeciesTalentChoiceDrop",
		"subspeciesTalentReplacementReplacementDrop",
		"subspeciesTalentReplacementRolledDrop",
		"updateSubspeciesArrayField",
		"updateSubspeciesCharacteristic",
		"updateSubspeciesLinkedItems",
		"updateSubspeciesLinkedTalents",
		"updateSubspeciesNumberField",
		"updateSubspeciesStringField",
		"updateSubspeciesTalentReplacementRows",
		"updateSubspeciesTextMapField"
	],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			n("deleteSubspecies", e), n("close");
		}
		return (t, i) => (B(), H(Id, {
			index: e.index,
			"is-loading": e.isLoading,
			"is-open": e.isOpen,
			"is-saving": e.isSaving,
			"random-talent-sources": e.randomTalentSources,
			subspecies: e.subspecies,
			onClose: i[0] ||= (e) => n("close"),
			onDelete: r,
			onArrayFieldDrop: i[1] ||= (e, t, r) => n("subspeciesArrayFieldDrop", e, t, r),
			onLinkedItemDrop: i[2] ||= (e, t, r, i) => n("subspeciesLinkedItemDrop", e, t, r, i),
			onOpenItem: i[3] ||= (e) => n("openItem", e),
			onTalentChoiceDrop: i[4] ||= (e, t, r, i) => n("subspeciesTalentChoiceDrop", e, t, r, i),
			onTalentReplacementReplacementDrop: i[5] ||= (e, t, r) => n("subspeciesTalentReplacementReplacementDrop", e, t, r),
			onTalentReplacementRolledDrop: i[6] ||= (e, t, r) => n("subspeciesTalentReplacementRolledDrop", e, t, r),
			onUpdateArrayField: i[7] ||= (e, t, r) => n("updateSubspeciesArrayField", e, t, r),
			onUpdateCharacteristic: i[8] ||= (e, t, r) => n("updateSubspeciesCharacteristic", e, t, r),
			onUpdateLinkedItems: i[9] ||= (e, t, r) => n("updateSubspeciesLinkedItems", e, t, r),
			onUpdateLinkedTalents: i[10] ||= (e, t) => n("updateSubspeciesLinkedTalents", e, t),
			onUpdateNumberField: i[11] ||= (e, t, r) => n("updateSubspeciesNumberField", e, t, r),
			onUpdateStringField: i[12] ||= (e, t, r) => n("updateSubspeciesStringField", e, t, r),
			onUpdateTalentReplacementRows: i[13] ||= (e, t) => n("updateSubspeciesTalentReplacementRows", e, t),
			onUpdateTextMapField: i[14] ||= (e, t, r) => n("updateSubspeciesTextMapField", e, t, r)
		}, null, 8, [
			"index",
			"is-loading",
			"is-open",
			"is-saving",
			"random-talent-sources",
			"subspecies"
		]));
	}
});
//#endregion
//#region src/view/apps/species-builder/subspecies-overlay-events.ts
function Rd(e, t) {
	return {
		close: t.close,
		deleteSubspecies: t.deleteSubspecies,
		openItem: (t) => {
			e("openItem", t);
		},
		subspeciesArrayFieldDrop: (...t) => {
			e("subspeciesArrayFieldDrop", ...t);
		},
		subspeciesLinkedItemDrop: (...t) => {
			e("subspeciesLinkedItemDrop", ...t);
		},
		subspeciesTalentChoiceDrop: (...t) => {
			e("subspeciesTalentChoiceDrop", ...t);
		},
		subspeciesTalentReplacementReplacementDrop: (...t) => {
			e("subspeciesTalentReplacementReplacementDrop", ...t);
		},
		subspeciesTalentReplacementRolledDrop: (...t) => {
			e("subspeciesTalentReplacementRolledDrop", ...t);
		},
		updateSubspeciesArrayField: (...t) => {
			e("updateSubspeciesArrayField", ...t);
		},
		updateSubspeciesCharacteristic: (...t) => {
			e("updateSubspeciesCharacteristic", ...t);
		},
		updateSubspeciesLinkedItems: (...t) => {
			e("updateSubspeciesLinkedItems", ...t);
		},
		updateSubspeciesLinkedTalents: (...t) => {
			e("updateSubspeciesLinkedTalents", ...t);
		},
		updateSubspeciesNumberField: (...t) => {
			e("updateSubspeciesNumberField", ...t);
		},
		updateSubspeciesStringField: (...t) => {
			e("updateSubspeciesStringField", ...t);
		},
		updateSubspeciesTalentReplacementRows: (...t) => {
			e("updateSubspeciesTalentReplacementRows", ...t);
		},
		updateSubspeciesTextMapField: (...t) => {
			e("updateSubspeciesTextMapField", ...t);
		}
	};
}
//#endregion
//#region src/view/apps/species-builder/SubspeciesSection.vue?vue&type=script&setup=true&lang.ts
var zd = { class: "species-builder__section species-builder__section--subspecies" }, Bd = { class: "species-builder__section-heading" }, Vd = ["disabled"], Hd = {
	key: 0,
	class: "species-builder__empty-list"
}, Ud = {
	key: 1,
	class: "species-builder__subspecies-list"
}, Wd = ["disabled", "onClick"], Gd = /* @__PURE__ */ L({
	__name: "SubspeciesSection",
	props: {
		definition: {},
		isLoading: { type: Boolean },
		isSaving: { type: Boolean }
	},
	emits: ["addSubspecies", "editSubspecies"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = q(() => n.definition.subspecies ?? []);
		function a(e) {
			return e.name.trim() || e.key.trim() || "Untitled Subspecies";
		}
		return (t, n) => (B(), V("section", zd, [U("div", Bd, [n[2] ||= U("h3", null, "Subspecies", -1), U("button", {
			disabled: e.isLoading || e.isSaving,
			type: "button",
			onClick: n[0] ||= (e) => r("addSubspecies")
		}, [...n[1] ||= [U("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-plus"
		}, null, -1), G(" Add ", -1)]], 8, Vd)]), i.value.length === 0 ? (B(), V("div", Hd, "No subspecies yet.")) : (B(), V("div", Ud, [(B(!0), V(z, null, R(i.value, (t, n) => (B(), V("button", {
			key: `${t.key}-${n}`,
			disabled: e.isLoading || e.isSaving,
			type: "button",
			onClick: (e) => r("editSubspecies", n)
		}, [U("strong", null, j(a(t)), 1), U("span", null, j(t.key.trim() || I(Pc)(t)), 1)], 8, Wd))), 128))]))]));
	}
}), Kd = { class: "species-builder__section-heading" }, qd = { class: "species-builder__detail-actions" }, Jd = ["disabled"], Yd = ["disabled"], Xd = {
	"aria-label": "Species editor sections",
	class: "species-builder__editor-tabs"
}, Zd = ["onClick"], Qd = {
	key: 2,
	class: "species-builder__editor-page"
}, $d = {
	key: 3,
	class: "species-builder__editor-page"
}, ef = {
	key: 4,
	class: "species-builder__editor-page"
}, tf = /* @__PURE__ */ L({
	__name: "SpeciesBuilderDetailPanel",
	props: {
		definition: {},
		initialEditorTab: {},
		isLoading: { type: Boolean },
		isSaving: { type: Boolean },
		randomTalentSources: {},
		requestedSubspeciesIndex: {},
		subspeciesRequestId: {}
	},
	emits: /* @__PURE__ */ "addSubspecies.arrayFieldDrop.careerReplacementChoiceDrop.careerReplacementRolledDrop.delete.deleteSubspecies.duplicate.linkedItemDrop.openItem.subspeciesArrayFieldDrop.subspeciesLinkedItemDrop.subspeciesTalentChoiceDrop.subspeciesTalentReplacementReplacementDrop.subspeciesTalentReplacementRolledDrop.talentReplacementReplacementDrop.talentReplacementRolledDrop.talentChoiceDrop.updateArrayField.updateBooleanField.updateCareerReplacementRows.updateCharacteristic.updateHeightField.updateLinkedItems.updateLinkedTalents.updateNumberField.updateStringField.updateSubspeciesArrayField.updateSubspeciesCharacteristic.updateSubspeciesLinkedItems.updateSubspeciesLinkedTalents.updateSubspeciesNumberField.updateSubspeciesStringField.updateSubspeciesTalentReplacementRows.updateSubspeciesTextMapField.updateTalentReplacementRows.updateTextMapField".split("."),
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ F(-1), a = /* @__PURE__ */ F(n.initialEditorTab ?? "details"), o = /* @__PURE__ */ F(null), s = q(() => n.definition.subspecies?.[i.value]), c = q(() => a.value === "skills" || a.value === "talents" || a.value === "traits" ? [a.value] : []), l = [
			{
				label: "Details",
				tab: "details"
			},
			{
				label: "Attributes",
				tab: "attributes"
			},
			{
				label: "Skills",
				tab: "skills"
			},
			{
				label: "Talents",
				tab: "talents"
			},
			{
				label: "Traits",
				tab: "traits"
			},
			{
				label: "Tables",
				tab: "tables"
			},
			{
				label: "Subspecies",
				tab: "subspecies"
			}
		];
		qn(() => n.definition.key, () => {
			i.value = -1, a.value = n.initialEditorTab ?? "details";
		}), qn(() => n.initialEditorTab, (e) => {
			e && (a.value = e);
		}), qn(() => n.subspeciesRequestId, async () => {
			n.requestedSubspeciesIndex === void 0 || n.requestedSubspeciesIndex < 0 || (a.value = "subspecies", await d(n.requestedSubspeciesIndex));
		}, { immediate: !0 }), qn(() => n.definition.subspecies?.length ?? 0, (e) => {
			i.value >= e && (i.value = -1);
		});
		async function u() {
			let e = n.definition.subspecies?.length ?? 0;
			r("addSubspecies"), await Dn(), await d(e);
		}
		async function d(e) {
			i.value = e, await Dn(), m();
		}
		function f(e) {
			r("deleteSubspecies", e), i.value = -1;
		}
		let p = Rd(r, {
			close: () => {
				i.value = -1;
			},
			deleteSubspecies: f
		});
		function m() {
			let e = o.value?.parentElement ?? null;
			for (; e;) {
				if (h(e)) {
					e.scrollTop = 0;
					return;
				}
				e = e.parentElement;
			}
		}
		function h(e) {
			let t = window.getComputedStyle(e).overflowY;
			return e.scrollHeight > e.clientHeight && (t === "auto" || t === "scroll" || t === "overlay");
		}
		return (t, n) => (B(), V("section", {
			ref_key: "detailPanelElement",
			ref: o,
			class: "species-builder__detail-panel"
		}, [
			W(Ld, Sa({
				index: i.value,
				"is-loading": e.isLoading,
				"is-open": i.value >= 0,
				"is-saving": e.isSaving,
				"random-talent-sources": e.randomTalentSources,
				subspecies: s.value
			}, Br(I(p))), null, 16, [
				"index",
				"is-loading",
				"is-open",
				"is-saving",
				"random-talent-sources",
				"subspecies"
			]),
			U("div", Kd, [n[23] ||= U("h2", null, "Species Editor", -1), U("div", qd, [U("button", {
				disabled: e.isLoading || e.isSaving,
				type: "button",
				onClick: n[0] ||= (e) => r("duplicate")
			}, [...n[21] ||= [U("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-copy"
			}, null, -1), G(" Duplicate ", -1)]], 8, Jd), U("button", {
				disabled: e.isLoading || e.isSaving,
				type: "button",
				onClick: n[1] ||= (e) => r("delete")
			}, [...n[22] ||= [U("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), G(" Delete ", -1)]], 8, Yd)])]),
			U("nav", Xd, [(B(), V(z, null, R(l, (e) => U("button", {
				key: e.tab,
				class: A({ "is-active": a.value === e.tab }),
				type: "button",
				onClick: (t) => a.value = e.tab
			}, j(e.label), 11, Zd)), 64))]),
			a.value === "details" ? (B(), H(Ed, {
				key: 0,
				definition: e.definition,
				"is-disabled": e.isLoading || e.isSaving,
				onUpdateBooleanField: n[2] ||= (e, t) => r("updateBooleanField", e, t),
				onUpdateHeightField: n[3] ||= (e, t) => r("updateHeightField", e, t),
				onUpdateStringField: n[4] ||= (e, t) => r("updateStringField", e, t)
			}, null, 8, ["definition", "is-disabled"])) : a.value === "attributes" ? (B(), H(dd, {
				key: 1,
				definition: e.definition,
				"is-disabled": e.isLoading || e.isSaving,
				onUpdateCharacteristic: n[5] ||= (e, t) => r("updateCharacteristic", e, t),
				onUpdateNumberField: n[6] ||= (e, t) => r("updateNumberField", e, t)
			}, null, 8, ["definition", "is-disabled"])) : c.value.length > 0 ? (B(), V("section", Qd, [W(gu, {
				fields: c.value,
				"is-disabled": e.isLoading || e.isSaving,
				values: e.definition,
				onDropData: n[7] ||= (e, t) => r("arrayFieldDrop", e, t),
				onLinkedItemDrop: n[8] ||= (e, t, n) => r("linkedItemDrop", e, t, n),
				onOpenItem: n[9] ||= (e) => r("openItem", e),
				onTalentChoiceDrop: n[10] ||= (e, t, n) => r("talentChoiceDrop", e, t, n),
				onUpdateLinkedItems: n[11] ||= (e, t) => r("updateLinkedItems", e, t),
				onUpdateLinkedTalents: n[12] ||= (e) => r("updateLinkedTalents", e)
			}, null, 8, [
				"fields",
				"is-disabled",
				"values"
			])])) : a.value === "tables" ? (B(), V("section", $d, [W(td, {
				help: "Configure random Talent draws, Talent swap offers, and Career replacement choices without writing object-map syntax by hand.",
				"include-career-replacements": "",
				"is-disabled": e.isLoading || e.isSaving,
				"random-talent-sources": e.randomTalentSources,
				values: e.definition,
				onCareerReplacementChoiceDrop: n[13] ||= (e, t, n) => r("careerReplacementChoiceDrop", e, t, n),
				onCareerReplacementRolledDrop: n[14] ||= (e, t) => r("careerReplacementRolledDrop", e, t),
				onOpenItem: n[15] ||= (e) => r("openItem", e),
				onTalentReplacementReplacementDrop: n[16] ||= (e, t) => r("talentReplacementReplacementDrop", e, t),
				onTalentReplacementRolledDrop: n[17] ||= (e, t) => r("talentReplacementRolledDrop", e, t),
				onUpdate: n[18] ||= (e, t) => r("updateTextMapField", e, t),
				onUpdateCareerReplacementRows: n[19] ||= (e) => r("updateCareerReplacementRows", e),
				onUpdateTalentReplacementRows: n[20] ||= (e) => r("updateTalentReplacementRows", e)
			}, null, 8, [
				"is-disabled",
				"random-talent-sources",
				"values"
			])])) : (B(), V("section", ef, [W(Gd, {
				definition: e.definition,
				"is-loading": e.isLoading,
				"is-saving": e.isSaving,
				onAddSubspecies: u,
				onEditSubspecies: d
			}, null, 8, [
				"definition",
				"is-loading",
				"is-saving"
			])]))
		], 512));
	}
}), nf = { class: "species-builder__workspace" }, rf = { class: "species-builder__editor-shell" }, af = { key: 0 }, of = { key: 1 }, sf = {
	key: 1,
	class: "species-builder__detail-panel species-builder__detail-panel--empty"
}, cf = /* @__PURE__ */ L({
	__name: "SpeciesBuilderEditorPage",
	props: {
		definition: {},
		initialEditorTab: {},
		isLoading: { type: Boolean },
		isSaving: { type: Boolean },
		randomTalentSources: {},
		requestedSubspeciesIndex: {},
		subspeciesRequestId: {}
	},
	emits: /* @__PURE__ */ "addSubspecies.arrayFieldDrop.careerReplacementChoiceDrop.careerReplacementRolledDrop.delete.deleteSubspecies.duplicate.linkedItemDrop.openItem.subspeciesArrayFieldDrop.subspeciesLinkedItemDrop.subspeciesTalentChoiceDrop.subspeciesTalentReplacementReplacementDrop.subspeciesTalentReplacementRolledDrop.talentReplacementReplacementDrop.talentReplacementRolledDrop.talentChoiceDrop.updateArrayField.updateBooleanField.updateCareerReplacementRows.updateCharacteristic.updateHeightField.updateLinkedItems.updateLinkedTalents.updateNumberField.updateStringField.updateSubspeciesArrayField.updateSubspeciesCharacteristic.updateSubspeciesLinkedItems.updateSubspeciesLinkedTalents.updateSubspeciesNumberField.updateSubspeciesStringField.updateSubspeciesTalentReplacementRows.updateSubspeciesTextMapField.updateTalentReplacementRows.updateTextMapField.close".split("."),
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			return e.name.trim() || e.key.trim() || "Untitled Species";
		}
		function i(e) {
			return e.key.trim() || Nc(e);
		}
		return (t, a) => (B(), V("section", nf, [U("div", rf, [U("button", {
			type: "button",
			onClick: a[0] ||= (e) => n("close")
		}, [...a[37] ||= [U("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-arrow-left"
		}, null, -1), G(" Species List ", -1)]]), U("div", null, [e.definition ? (B(), V("strong", af, j(r(e.definition)), 1)) : K("", !0), e.definition ? (B(), V("span", of, j(i(e.definition)), 1)) : K("", !0)])]), e.definition ? (B(), H(tf, {
			key: 0,
			definition: e.definition,
			"initial-editor-tab": e.initialEditorTab,
			"is-loading": e.isLoading,
			"is-saving": e.isSaving,
			"random-talent-sources": e.randomTalentSources,
			"requested-subspecies-index": e.requestedSubspeciesIndex,
			"subspecies-request-id": e.subspeciesRequestId,
			onAddSubspecies: a[1] ||= (e) => n("addSubspecies"),
			onArrayFieldDrop: a[2] ||= (e, t) => n("arrayFieldDrop", e, t),
			onCareerReplacementChoiceDrop: a[3] ||= (e, t, r) => n("careerReplacementChoiceDrop", e, t, r),
			onCareerReplacementRolledDrop: a[4] ||= (e, t) => n("careerReplacementRolledDrop", e, t),
			onDelete: a[5] ||= (e) => n("delete"),
			onDeleteSubspecies: a[6] ||= (e) => n("deleteSubspecies", e),
			onDuplicate: a[7] ||= (e) => n("duplicate"),
			onLinkedItemDrop: a[8] ||= (e, t, r) => n("linkedItemDrop", e, t, r),
			onOpenItem: a[9] ||= (e) => n("openItem", e),
			onSubspeciesArrayFieldDrop: a[10] ||= (e, t, r) => n("subspeciesArrayFieldDrop", e, t, r),
			onSubspeciesLinkedItemDrop: a[11] ||= (e, t, r, i) => n("subspeciesLinkedItemDrop", e, t, r, i),
			onSubspeciesTalentChoiceDrop: a[12] ||= (e, t, r, i) => n("subspeciesTalentChoiceDrop", e, t, r, i),
			onSubspeciesTalentReplacementReplacementDrop: a[13] ||= (e, t, r) => n("subspeciesTalentReplacementReplacementDrop", e, t, r),
			onSubspeciesTalentReplacementRolledDrop: a[14] ||= (e, t, r) => n("subspeciesTalentReplacementRolledDrop", e, t, r),
			onTalentChoiceDrop: a[15] ||= (e, t, r) => n("talentChoiceDrop", e, t, r),
			onTalentReplacementReplacementDrop: a[16] ||= (e, t) => n("talentReplacementReplacementDrop", e, t),
			onTalentReplacementRolledDrop: a[17] ||= (e, t) => n("talentReplacementRolledDrop", e, t),
			onUpdateArrayField: a[18] ||= (e, t) => n("updateArrayField", e, t),
			onUpdateBooleanField: a[19] ||= (e, t) => n("updateBooleanField", e, t),
			onUpdateCareerReplacementRows: a[20] ||= (e) => n("updateCareerReplacementRows", e),
			onUpdateCharacteristic: a[21] ||= (e, t) => n("updateCharacteristic", e, t),
			onUpdateHeightField: a[22] ||= (e, t) => n("updateHeightField", e, t),
			onUpdateLinkedItems: a[23] ||= (e, t) => n("updateLinkedItems", e, t),
			onUpdateLinkedTalents: a[24] ||= (e) => n("updateLinkedTalents", e),
			onUpdateNumberField: a[25] ||= (e, t) => n("updateNumberField", e, t),
			onUpdateStringField: a[26] ||= (e, t) => n("updateStringField", e, t),
			onUpdateSubspeciesArrayField: a[27] ||= (e, t, r) => n("updateSubspeciesArrayField", e, t, r),
			onUpdateSubspeciesCharacteristic: a[28] ||= (e, t, r) => n("updateSubspeciesCharacteristic", e, t, r),
			onUpdateSubspeciesLinkedItems: a[29] ||= (e, t, r) => n("updateSubspeciesLinkedItems", e, t, r),
			onUpdateSubspeciesLinkedTalents: a[30] ||= (e, t) => n("updateSubspeciesLinkedTalents", e, t),
			onUpdateSubspeciesNumberField: a[31] ||= (e, t, r) => n("updateSubspeciesNumberField", e, t, r),
			onUpdateSubspeciesStringField: a[32] ||= (e, t, r) => n("updateSubspeciesStringField", e, t, r),
			onUpdateSubspeciesTalentReplacementRows: a[33] ||= (e, t) => n("updateSubspeciesTalentReplacementRows", e, t),
			onUpdateSubspeciesTextMapField: a[34] ||= (e, t, r) => n("updateSubspeciesTextMapField", e, t, r),
			onUpdateTalentReplacementRows: a[35] ||= (e) => n("updateTalentReplacementRows", e),
			onUpdateTextMapField: a[36] ||= (e, t) => n("updateTextMapField", e, t)
		}, null, 8, [
			"definition",
			"initial-editor-tab",
			"is-loading",
			"is-saving",
			"random-talent-sources",
			"requested-subspecies-index",
			"subspecies-request-id"
		])) : (B(), V("section", sf, " No species selected. "))]));
	}
}), lf = { class: "species-builder__header" }, uf = { class: "species-builder__actions" }, df = {
	"aria-label": "Species Builder sections",
	class: "species-builder__tabs"
}, ff = ["disabled"], pf = ["disabled"], mf = ["disabled"], hf = ["disabled"], gf = /* @__PURE__ */ L({
	__name: "SpeciesBuilderHeader",
	props: {
		activeTab: {},
		canSave: { type: Boolean },
		isBusy: { type: Boolean },
		showGeneratedConfigTab: { type: Boolean }
	},
	emits: [
		"addBlank",
		"addWolfkin",
		"reload",
		"save",
		"selectTab"
	],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (B(), V("header", lf, [r[11] ||= U("div", null, [U("p", null, "WFRP4e Customizer"), U("h1", null, "Species Builder")], -1), U("div", uf, [
			U("nav", df, [
				U("button", {
					class: A({ "is-active": e.activeTab === "species" }),
					type: "button",
					onClick: r[0] ||= (e) => n("selectTab", "species")
				}, " Species ", 2),
				U("button", {
					class: A({ "is-active": e.activeTab === "settings" }),
					type: "button",
					onClick: r[1] ||= (e) => n("selectTab", "settings")
				}, " Settings ", 2),
				e.showGeneratedConfigTab ? (B(), V("button", {
					key: 0,
					class: A({ "is-active": e.activeTab === "wfrp-config" }),
					type: "button",
					onClick: r[2] ||= (e) => n("selectTab", "wfrp-config")
				}, " WFRP Config ", 2)) : K("", !0)
			]),
			U("button", {
				disabled: e.isBusy,
				type: "button",
				onClick: r[3] ||= (e) => n("addBlank")
			}, [...r[7] ||= [U("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), G(" Blank ", -1)]], 8, ff),
			U("button", {
				disabled: e.isBusy,
				type: "button",
				onClick: r[4] ||= (e) => n("addWolfkin")
			}, [...r[8] ||= [U("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-scroll"
			}, null, -1), G(" Wolfkin ", -1)]], 8, pf),
			U("button", {
				disabled: e.isBusy,
				type: "button",
				onClick: r[5] ||= (e) => n("reload")
			}, [...r[9] ||= [U("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-rotate-right"
			}, null, -1), G(" Reload ", -1)]], 8, mf),
			U("button", {
				disabled: !e.canSave,
				class: "species-builder__primary-action",
				type: "button",
				onClick: r[6] ||= (e) => n("save")
			}, [...r[10] ||= [U("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-floppy-disk"
			}, null, -1), G(" Save ", -1)]], 8, hf)
		])]));
	}
}), _f = { class: "species-builder__overview-panel" }, vf = { class: "species-builder__section-heading species-builder__section-heading--compact" }, yf = {
	key: 0,
	class: "species-builder__overview-empty"
}, bf = {
	key: 1,
	class: "species-builder__overview-list"
}, xf = { class: "species-builder__overview-card-header" }, Sf = ["disabled", "onClick"], Cf = { class: "species-builder__field-grid species-builder__field-grid--two" }, wf = [
	"disabled",
	"value",
	"onInput"
], Tf = [
	"disabled",
	"placeholder",
	"value",
	"onInput"
], Ef = { class: "species-builder__overview-subspecies" }, Df = { class: "species-builder__section-heading species-builder__section-heading--compact" }, Of = ["disabled", "onClick"], kf = {
	key: 0,
	class: "species-builder__empty-list"
}, Af = {
	key: 1,
	class: "species-builder__overview-subspecies-list"
}, jf = { class: "species-builder__overview-subspecies-title" }, Mf = [
	"disabled",
	"value",
	"onInput"
], Nf = [
	"disabled",
	"placeholder",
	"value",
	"onInput"
], Pf = ["disabled", "onClick"], Ff = /* @__PURE__ */ L({
	__name: "SpeciesBuilderOverview",
	props: {
		definitions: {},
		isDisabled: { type: Boolean },
		selectedIndex: {}
	},
	emits: [
		"addSubspecies",
		"editSpecies",
		"editSubspecies",
		"updateSpeciesStringField",
		"updateSubspeciesStringField"
	],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			return e.target instanceof HTMLInputElement ? e.target.value : "";
		}
		function i(e) {
			return e.name.trim() || e.key.trim() || "Untitled Species";
		}
		function a(e) {
			return e.name.trim() || e.key.trim() || "Untitled Subspecies";
		}
		return (t, o) => (B(), V("section", _f, [U("div", vf, [o[0] ||= U("div", null, [U("h2", null, "Species"), U("p", null, " Manage custom species and their subspecies here. Open a row for the full editor, or adjust basic names and keys directly. ")], -1), U("span", null, j(e.definitions.length), 1)]), e.definitions.length === 0 ? (B(), V("div", yf, " No species yet. ")) : (B(), V("div", bf, [(B(!0), V(z, null, R(e.definitions, (t, s) => (B(), V("article", {
			key: `${t.key}-${s}`,
			class: A(["species-builder__overview-card", { "is-selected": s === e.selectedIndex }])
		}, [
			U("div", xf, [U("div", null, [U("h3", null, j(i(t)), 1), U("p", null, j(t.key.trim() || I(Nc)(t)), 1)]), U("button", {
				disabled: e.isDisabled,
				type: "button",
				onClick: (e) => n("editSpecies", s)
			}, [...o[1] ||= [U("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-pen-to-square"
			}, null, -1), G(" Open Editor ", -1)]], 8, Sf)]),
			U("div", Cf, [U("label", null, [o[2] ||= U("span", null, "Species Name", -1), U("input", {
				disabled: e.isDisabled,
				value: t.name,
				type: "text",
				onInput: (e) => n("updateSpeciesStringField", s, "name", r(e))
			}, null, 40, wf)]), U("label", null, [o[3] ||= U("span", null, "Species Key", -1), U("input", {
				disabled: e.isDisabled,
				placeholder: I(Nc)(t),
				value: t.key,
				type: "text",
				onInput: (e) => n("updateSpeciesStringField", s, "key", r(e))
			}, null, 40, Tf)])]),
			U("div", Ef, [U("div", Df, [o[5] ||= U("div", null, [U("h4", null, "Subspecies"), U("p", null, "Nested subspecies belonging to this custom species.")], -1), U("button", {
				disabled: e.isDisabled,
				type: "button",
				onClick: (e) => n("addSubspecies", s)
			}, [...o[4] ||= [U("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), G(" Add ", -1)]], 8, Of)]), (t.subspecies ?? []).length === 0 ? (B(), V("div", kf, " No subspecies yet. ")) : (B(), V("div", Af, [(B(!0), V(z, null, R(t.subspecies, (t, i) => (B(), V("article", {
				key: `${t.key}-${i}`,
				class: "species-builder__overview-subspecies-row"
			}, [
				U("div", jf, [U("strong", null, j(a(t)), 1), U("span", null, j(t.key.trim() || I(Pc)(t)), 1)]),
				U("label", null, [o[6] ||= U("span", null, "Name", -1), U("input", {
					disabled: e.isDisabled,
					value: t.name,
					type: "text",
					onInput: (e) => n("updateSubspeciesStringField", s, i, "name", r(e))
				}, null, 40, Mf)]),
				U("label", null, [o[7] ||= U("span", null, "Key", -1), U("input", {
					disabled: e.isDisabled,
					placeholder: I(Pc)(t),
					value: t.key,
					type: "text",
					onInput: (e) => n("updateSubspeciesStringField", s, i, "key", r(e))
				}, null, 40, Nf)]),
				U("button", {
					disabled: e.isDisabled,
					type: "button",
					onClick: (e) => n("editSubspecies", s, i)
				}, [...o[8] ||= [U("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-pen"
				}, null, -1), G(" Edit ", -1)]], 8, Pf)
			]))), 128))]))])
		], 2))), 128))]))]));
	}
}), If = { class: "species-builder__settings-panel" }, Lf = { class: "species-builder__check-row" }, Rf = ["checked", "disabled"], zf = /* @__PURE__ */ L({
	__name: "SpeciesBuilderSettingsPanel",
	props: {
		isDisabled: { type: Boolean },
		showGeneratedConfigTab: { type: Boolean }
	},
	emits: ["updateShowGeneratedConfigTab"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			return e.target instanceof HTMLInputElement && e.target.checked;
		}
		return (t, i) => (B(), V("section", If, [i[2] ||= U("div", { class: "species-builder__section-heading" }, [U("h2", null, "Settings")], -1), U("label", Lf, [U("input", {
			checked: e.showGeneratedConfigTab,
			disabled: e.isDisabled,
			type: "checkbox",
			onChange: i[0] ||= (e) => n("updateShowGeneratedConfigTab", r(e))
		}, null, 40, Rf), i[1] ||= U("span", null, "Show WFRP config tab", -1)])]));
	}
}), Bf = {
	class: "species-builder__status",
	"aria-live": "polite"
}, Vf = {
	key: 0,
	class: "species-builder__message species-builder__message--error"
}, Hf = {
	key: 1,
	class: "species-builder__message species-builder__message--warning"
}, Uf = {
	key: 2,
	class: "species-builder__message species-builder__message--warning"
}, Wf = {
	key: 3,
	class: "species-builder__message species-builder__message--warning"
}, Gf = {
	key: 4,
	class: "species-builder__message species-builder__message--warning"
}, Kf = {
	key: 5,
	class: "species-builder__message"
}, qf = {
	key: 6,
	class: "species-builder__message"
}, Jf = /* @__PURE__ */ L({
	__name: "SpeciesBuilderStatus",
	props: {
		duplicateKeys: {},
		duplicateSubspeciesMessage: {},
		hasUnsavedChanges: { type: Boolean },
		invalidDefinitionCount: {},
		invalidSubspeciesCount: {},
		loadError: {},
		message: {}
	},
	setup(e) {
		return (t, n) => (B(), V("section", Bf, [e.loadError ? (B(), V("p", Vf, j(e.loadError), 1)) : e.duplicateKeys.length > 0 ? (B(), V("p", Hf, " Duplicate species key: " + j(e.duplicateKeys.join(", ")), 1)) : e.duplicateSubspeciesMessage ? (B(), V("p", Uf, j(e.duplicateSubspeciesMessage), 1)) : e.invalidDefinitionCount > 0 ? (B(), V("p", Wf, " Species need both a key and name before saving. ")) : e.invalidSubspeciesCount > 0 ? (B(), V("p", Gf, " Subspecies need both a key and name before saving. ")) : e.message ? (B(), V("p", Kf, j(e.message), 1)) : e.hasUnsavedChanges ? (B(), V("p", qf, "Unsaved changes.")) : K("", !0)]));
	}
}), Yf = { class: "species-builder__preview-panel" }, Xf = ["value"], Zf = /* @__PURE__ */ L({
	__name: "WfrpConfigPanel",
	props: { generatedConfigText: {} },
	setup(e) {
		return (t, n) => (B(), V("section", Yf, [n[0] ||= U("div", { class: "species-builder__section-heading" }, [U("h2", null, "WFRP Config")], -1), U("textarea", {
			value: e.generatedConfigText,
			readonly: "",
			spellcheck: "false"
		}, null, 8, Xf)]));
	}
}), Qf = {
	key: 0,
	class: "species-builder__workspace"
}, $f = {
	key: 1,
	class: "species-builder__workspace"
}, ep = {
	key: 2,
	class: "species-builder__workspace"
}, tp = /* @__PURE__ */ L({
	__name: "SpeciesBuilderApp",
	props: {
		bridge: {},
		onSettingsSaved: { type: Function }
	},
	setup(e) {
		let t = e, n = xl(t.bridge, { onSettingsSaved: t.onSettingsSaved }), r = /* @__PURE__ */ F("species"), i = /* @__PURE__ */ F(!1), a = /* @__PURE__ */ F("details"), o = /* @__PURE__ */ F(null), s = /* @__PURE__ */ F(-1), c = /* @__PURE__ */ F(0), l = q(() => n.isLoading.value || n.isSaving.value), u = q(() => {
			let e = n.duplicateSubspeciesKeys.value[0];
			return e ? `Duplicate subspecies key in ${e.speciesName}: ${e.keys.join(", ")}` : "";
		});
		Or(() => {
			n.loadSettings();
		}), qn(() => n.showGeneratedConfigTab.value, (e) => {
			!e && r.value === "wfrp-config" && (r.value = "species");
		});
		function d(e) {
			return e.name.trim() || e.key.trim() || "Untitled Species";
		}
		function f(e) {
			(e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement || e.target instanceof HTMLTextAreaElement) && e.stopPropagation();
		}
		function p() {
			let e = n.selectedDefinition.value;
			e && (o.value = {
				kind: "species",
				message: `Delete species "${d(e)}"?`
			});
		}
		function m() {
			n.addBlankDefinition(), v("details");
		}
		function h() {
			n.addWolfkinExample(), v("details");
		}
		function g(e) {
			let t = n.definitions.value[e]?.subspecies?.length ?? 0;
			n.selectDefinition(e), n.addSubspecies(), b(t);
		}
		function _(e, t = "details") {
			n.selectDefinition(e), v(t);
		}
		function v(e) {
			r.value = "species", a.value = e, i.value = !0, s.value = -1;
		}
		function y(e, t) {
			n.selectDefinition(e), b(t);
		}
		function b(e) {
			r.value = "species", a.value = "subspecies", i.value = !0, s.value = e, c.value += 1;
		}
		function x(e, t, r) {
			n.selectDefinition(e), n.updateStringField(t, r);
		}
		function S(e, t, r, i) {
			n.selectDefinition(e), n.updateSubspeciesStringField(t, r, i);
		}
		function C(e) {
			r.value = e, e === "species" && (i.value = !1);
		}
		function w(e) {
			let t = n.selectedDefinition.value?.subspecies?.[e];
			t && (o.value = {
				index: e,
				kind: "subspecies",
				message: `Delete subspecies "${t.name.trim() || t.key.trim() || "Untitled Subspecies"}"?`
			});
		}
		function T() {
			let e = o.value;
			e && (e.kind === "species" ? n.deleteSelectedDefinition() : n.deleteSubspecies(e.index), o.value = null);
		}
		let E = Ts(n, {
			close: () => {
				i.value = !1;
			},
			requestDeleteSelectedDefinition: p,
			requestDeleteSubspecies: w
		});
		return (e, t) => (B(), V("main", {
			class: "species-builder",
			onKeydown: f,
			onKeyup: f
		}, [
			W(gf, {
				"active-tab": r.value,
				"can-save": I(n).canSave.value,
				"is-busy": l.value,
				"show-generated-config-tab": I(n).showGeneratedConfigTab.value,
				onAddBlank: m,
				onAddWolfkin: h,
				onReload: I(n).loadSettings,
				onSave: I(n).saveSettings,
				onSelectTab: C
			}, null, 8, [
				"active-tab",
				"can-save",
				"is-busy",
				"show-generated-config-tab",
				"onReload",
				"onSave"
			]),
			W(Jf, {
				"duplicate-keys": I(n).duplicateKeys.value,
				"duplicate-subspecies-message": u.value,
				"has-unsaved-changes": I(n).hasUnsavedChanges.value,
				"invalid-definition-count": I(n).invalidDefinitionIndexes.value.length,
				"invalid-subspecies-count": I(n).invalidSubspeciesEntries.value.length,
				"load-error": I(n).loadError.value,
				message: I(n).message.value
			}, null, 8, [
				"duplicate-keys",
				"duplicate-subspecies-message",
				"has-unsaved-changes",
				"invalid-definition-count",
				"invalid-subspecies-count",
				"load-error",
				"message"
			]),
			W(ws, {
				message: o.value?.message,
				onClose: t[0] ||= (e) => o.value = null,
				onConfirm: T
			}, null, 8, ["message"]),
			r.value === "settings" ? (B(), V("section", Qf, [W(zf, {
				"is-disabled": l.value,
				"show-generated-config-tab": I(n).showGeneratedConfigTab.value,
				onUpdateShowGeneratedConfigTab: I(n).updateShowGeneratedConfigTab
			}, null, 8, [
				"is-disabled",
				"show-generated-config-tab",
				"onUpdateShowGeneratedConfigTab"
			])])) : r.value === "wfrp-config" ? (B(), V("section", $f, [W(Zf, { "generated-config-text": I(n).generatedConfigText.value }, null, 8, ["generated-config-text"])])) : i.value ? (B(), H(cf, Sa({
				key: 3,
				definition: I(n).selectedDefinition.value,
				"initial-editor-tab": a.value,
				"is-loading": I(n).isLoading.value,
				"is-saving": I(n).isSaving.value,
				"random-talent-sources": I(n).randomTalentSources.value,
				"requested-subspecies-index": s.value,
				"subspecies-request-id": c.value
			}, Br(I(E))), null, 16, [
				"definition",
				"initial-editor-tab",
				"is-loading",
				"is-saving",
				"random-talent-sources",
				"requested-subspecies-index",
				"subspecies-request-id"
			])) : (B(), V("section", ep, [W(Ff, {
				definitions: I(n).definitions.value,
				"is-disabled": l.value,
				"selected-index": I(n).selectedIndex.value,
				onAddSubspecies: g,
				onEditSpecies: _,
				onEditSubspecies: y,
				onUpdateSpeciesStringField: x,
				onUpdateSubspeciesStringField: S
			}, null, 8, [
				"definitions",
				"is-disabled",
				"selected-index"
			])]))
		], 32));
	}
}), $ = "wfrp4e-customizer-apps", np = "wfrp4e", rp = typeof window < "u", ip, ap = (e) => ip = e, op = Symbol();
function sp(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var cp;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(cp ||= {});
var lp = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function up(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function dp(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		gp(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function fp(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function pp(e) {
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
var mp = typeof navigator == "object" ? navigator : { userAgent: "" }, hp = /Macintosh/.test(mp.userAgent) && /AppleWebKit/.test(mp.userAgent) && !/Safari/.test(mp.userAgent), gp = rp ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !hp ? _p : "msSaveOrOpenBlob" in mp ? vp : yp : () => {};
function _p(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? pp(r) : fp(r.href) ? dp(e, t, n) : (r.target = "_blank", pp(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		pp(r);
	}, 0));
}
function vp(e, t = "download", n) {
	if (typeof e == "string") if (fp(e)) dp(e, t, n);
	else {
		let t = document.createElement("a");
		t.href = e, t.target = "_blank", setTimeout(function() {
			pp(t);
		});
	}
	else navigator.msSaveOrOpenBlob(up(e, n), t);
}
function yp(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return dp(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(lp.HTMLElement)) || "safari" in lp, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || hp) && typeof FileReader < "u") {
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
var { assign: bp } = Object;
function xp() {
	let e = Oe(!0), t = e.run(() => /* @__PURE__ */ F({})), n = [], r = [], i = Yt({
		install(e) {
			ap(i), i._a = e, e.provide(op, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var Sp = () => {};
function Cp(e, t, n, r = Sp) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && ke() && Ae(i), i;
}
function wp(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var Tp = (e) => e(), Ep = Symbol(), Dp = Symbol();
function Op(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		sp(i) && sp(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ P(r) && !/* @__PURE__ */ Gt(r) ? e[n] = Op(i, r) : e[n] = r;
	}
	return e;
}
var kp = Symbol();
function Ap(e) {
	return !sp(e) || !Object.prototype.hasOwnProperty.call(e, kp);
}
var { assign: jp } = Object;
function Mp(e) {
	return !!(/* @__PURE__ */ P(e) && e.effect);
}
function Np(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), jp(/* @__PURE__ */ nn(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Yt(q(() => {
			ap(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = Pp(e, l, t, n, r, !0), c;
}
function Pp(e, t, n = {}, r, i, a) {
	let o, s = jp({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = r.state.value[e];
	!a && !p && (r.state.value[e] = {});
	let m;
	function h(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: cp.patchFunction,
			storeId: e,
			events: void 0
		}) : (Op(r.state.value[e], t), n = {
			type: cp.patchObject,
			payload: t,
			storeId: e,
			events: void 0
		});
		let i = m = Symbol();
		Dn().then(() => {
			m === i && (l = !0);
		}), u = !0, wp(d, n, r.state.value[e]);
	}
	let g = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			jp(e, t);
		});
	} : Sp;
	function _() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let v = (t, n = "") => {
		if (Ep in t) return t[Dp] = n, t;
		let i = function() {
			ap(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			wp(f, {
				args: n,
				name: i[Dp],
				store: y,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : y, n);
			} catch (e) {
				throw wp(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (wp(a, e), e)).catch((e) => (wp(o, e), Promise.reject(e))) : (wp(a, l), l);
		};
		return i[Ep] = !0, i[Dp] = n, i;
	}, y = /* @__PURE__ */ Vt({
		_p: r,
		$id: e,
		$onAction: Cp.bind(null, f),
		$patch: h,
		$reset: g,
		$subscribe(t, n = {}) {
			let i = Cp(d, t, n.detached, () => a()), a = o.run(() => qn(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: cp.direct,
					events: void 0
				}, r);
			}, jp({}, c, n)));
			return i;
		},
		$dispose: _
	});
	r._s.set(e, y);
	let b = (r._a && r._a.runWithContext || Tp)(() => r._e.run(() => (o = Oe()).run(() => t({ action: v }))));
	for (let t in b) {
		let n = b[t];
		/* @__PURE__ */ P(n) && !Mp(n) || /* @__PURE__ */ Gt(n) ? a || (p && Ap(n) && (/* @__PURE__ */ P(n) ? n.value = p[t] : Op(n, p[t])), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = v(n, t), s.actions[t] = n);
	}
	return jp(y, b), jp(/* @__PURE__ */ N(y), b), Object.defineProperty(y, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			h((t) => {
				jp(t, e);
			});
		}
	}), r._p.forEach((e) => {
		jp(y, o.run(() => e({
			store: y,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), p && a && n.hydrate && n.hydrate(y.$state, p), l = !0, u = !0, y;
}
function Fp(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Wn();
		return n ||= o ? Un(op, null) : null, n && ap(n), n = ip, n._s.has(e) || (i ? Pp(e, t, r, n) : Np(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
function Ip(e) {
	let t = /* @__PURE__ */ N(e), n = {};
	for (let r in t) {
		let i = t[r];
		i.effect ? n[r] = q({
			get: () => e[r],
			set(t) {
				e[r] = t;
			}
		}) : (/* @__PURE__ */ P(i) || /* @__PURE__ */ Gt(i)) && (n[r] = /* @__PURE__ */ on(e, r));
	}
	return n;
}
//#endregion
//#region src/state/pinia.ts
var Lp = xp(), Rp = class extends foundry.applications.api.ApplicationV2 {
	#e;
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("wfrp4e-customizer-vue-root", "root"), n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("wfrp4e-customizer-vue-app", "vue-app"), t.replaceChildren(e);
		let r = this.getVueProps() ?? {};
		this.#e = hs(this.getVueComponent(), r), this.#e.use(Lp), this.#e.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#e?.unmount(), this.#e = void 0;
	}
};
//#endregion
//#region src/module/foundry/document-guards.ts
function zp(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Actor";
}
function Bp(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Item";
}
function Vp(e, t = "Expected a Foundry Actor.") {
	if (!zp(e)) throw Error(t);
	return e;
}
function Hp(e, t = "Expected a Foundry Item.") {
	if (!Bp(e)) throw Error(t);
	return e;
}
function Up(e, t, n = `Expected a Foundry ${t} Item.`) {
	let r = Hp(e, n);
	if (r.type !== t) throw Error(n);
	return r;
}
//#endregion
//#region src/module/foundry/drop-data.ts
function Wp(e) {
	try {
		return JSON.parse(e);
	} catch {
		throw Error("Foundry drop data could not be read.");
	}
}
//#endregion
//#region src/module/apps/species-builder/item-drops.ts
async function Gp(e, t) {
	let n = Wp(e);
	if (n.type !== "Item" || !n.uuid) throw Error(`Drop a Foundry ${t} item here.`);
	let r = Hp(await fromUuid(n.uuid), `Drop a Foundry ${t} item here.`);
	if (r.type !== t) throw Error(`Drop a Foundry ${t} item here.`);
	let i = {
		name: r.name,
		type: t,
		uuid: r.uuid
	};
	return r.img && (i.img = r.img), i;
}
async function Kp(e) {
	Hp(await fromUuid(e), "The linked Foundry Item was not found.").sheet?.render(!0);
}
//#endregion
//#region src/module/apps/species-builder/random-talent-sources.ts
var qp = {
	key: "talents",
	label: "Talents - Character Creation"
};
function Jp() {
	let e = /* @__PURE__ */ new Map();
	e.set(qp.key, qp);
	for (let t of game.tables?.contents ?? []) {
		let n = t.getFlag("wfrp4e", "key");
		if (typeof n != "string" || !n.trim()) continue;
		let r = Yp(n, t);
		e.set(n, {
			key: n,
			label: r
		});
	}
	return [...e.values()].sort(Xp);
}
function Yp(e, t) {
	let n = game.wfrp4e?.tables?.findTable?.(e);
	return (Y(n) && typeof n.name == "string" ? n.name : t.name).trim() || e;
}
function Xp(e, t) {
	return e.key === qp.key ? -1 : t.key === qp.key ? 1 : e.label.localeCompare(t.label);
}
//#endregion
//#region src/functions/species-builder/default-species-builder-settings.ts
function Zp() {
	return {
		definitions: [],
		showGeneratedConfigTab: !1
	};
}
//#endregion
//#region src/module/settings/foundry-setting-adapter.ts
function Qp(e) {
	return e;
}
function $p(e) {
	game.settings.register($, e.key, {
		config: e.config ?? !1,
		default: e.defaultValue,
		name: e.name,
		scope: e.scope ?? "world",
		type: Object
	});
}
function em(e) {
	return e.normalize(game.settings.get($, e.key));
}
async function tm(e, t) {
	let n = e.normalize(t);
	return await game.settings.set($, e.key, n), n;
}
//#endregion
//#region src/module/apps/species-builder/settings.ts
var nm = Qp({
	defaultValue: Zp(),
	key: "speciesBuilderSettings",
	name: "Species Builder Settings",
	normalize: ac
});
function rm() {
	$p(nm);
}
function im() {
	return em(nm);
}
async function am(e) {
	return await tm(nm, e);
}
//#endregion
//#region src/module/apps/species-builder/foundry-bridge.ts
var om = {
	loadSettings: async () => im(),
	loadRandomTalentSources: async () => Jp(),
	openItemSheet: Kp,
	resolveItemDrop: Gp,
	saveSettings: am
};
//#endregion
//#region src/module/apps/species-builder/reload-confirmation.ts
function sm() {
	return new Promise((e) => {
		let t = document.createElement("dialog");
		t.classList.add("wfrp4e-customizer-confirm-dialog");
		let n = document.createElement("h2");
		n.textContent = "Reload Foundry?";
		let r = document.createElement("p");
		r.textContent = "Species Builder changes were saved. Reload Foundry now?";
		let i = document.createElement("div");
		i.classList.add("wfrp4e-customizer-confirm-dialog__actions");
		let a = document.createElement("button");
		a.type = "button", a.textContent = "Reload";
		let o = document.createElement("button");
		o.type = "button", o.textContent = "Not Now", a.addEventListener("click", () => {
			s(!0);
		}), o.addEventListener("click", () => {
			s(!1);
		}), t.addEventListener("cancel", (e) => {
			e.preventDefault(), s(!1);
		}), i.append(a, o), t.append(n, r, i), document.body.append(t), t.showModal();
		function s(n) {
			t.close(), t.remove(), e(n);
		}
	});
}
//#endregion
//#region src/module/apps/species-builder/SpeciesBuilderApplication.ts
var cm = class extends Rp {
	#e = !1;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${$}-species-builder`,
		classes: [$, "wfrp4e-customizer-species-builder"],
		position: {
			height: 760,
			width: 1040
		},
		window: {
			icon: "fa-solid fa-people-group",
			resizable: !0,
			title: "WFRP4e Species Builder"
		}
	};
	getVueComponent() {
		return tp;
	}
	getVueProps() {
		return {
			bridge: om,
			onSettingsSaved: () => {
				this.#e = !0;
			}
		};
	}
	async _preClose(e) {
		let t = this.#e;
		this.#e = !1, t && await sm() && window.location.reload(), await super._preClose(e);
	}
}, lm = {
	characteristic: [
		25,
		30,
		40,
		50,
		70,
		90,
		120,
		150,
		190,
		230,
		280,
		330,
		390,
		450,
		520
	],
	skill: [
		10,
		15,
		20,
		30,
		40,
		60,
		80,
		110,
		140,
		180,
		220,
		270,
		320,
		380,
		440
	]
};
function um(e) {
	let t = {
		characteristics: 0,
		skills: 0,
		talents: 0,
		total: 0
	};
	for (let n of e) {
		let e = dm(n);
		n.kind === "characteristic" ? t.characteristics += e : n.kind === "skill" ? t.skills += e : t.talents += e;
	}
	return t.total = t.characteristics + t.skills + t.talents, t;
}
function dm(e) {
	let t = fm(e);
	return e.kind === "talent" ? mm(Math.max(0, Math.floor(e.current)), Math.max(0, Math.floor(e.baseAdvances))) : pm(t, e.kind === "characteristic" ? lm.characteristic : lm.skill);
}
function fm(e) {
	return Math.max(0, Math.floor(e.baseAdvances + e.current));
}
function pm(e, t) {
	let n = Math.max(0, Math.floor(e)), r = 0;
	for (let e = 0; e < n; e += 1) {
		let n = Math.min(Math.floor(e / 5), t.length - 1);
		r += t[n] ?? 0;
	}
	return r;
}
function mm(e, t = 0) {
	let n = Math.max(0, Math.floor(e)), r = Math.max(0, Math.floor(t)), i = 0;
	for (let e = 0; e < n; e += 1) i += (r + e + 1) * 100;
	return i;
}
//#endregion
//#region src/functions/npc-builder/create-default-trait-config.ts
function hm() {
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
function gm(e, t) {
	return `${e}:${Sm(t)}`;
}
function _m(e) {
	let t = e.level ?? 1;
	return Number.isFinite(t) ? Math.max(1, Math.floor(t)) * 5 : 5;
}
function vm(e) {
	return e.name;
}
function ym(e, t) {
	return e === "characteristic" ? t.allowBaseActorCharacteristics : e === "skill" ? t.allowBaseActorSkills : t.allowBaseActorTalents;
}
function bm(e, t) {
	return {
		...hm(),
		...e,
		...t
	};
}
function xm(e, t) {
	return Sm(e) === Sm(t);
}
function Sm(e) {
	return e.trim().toLocaleLowerCase();
}
function Cm(e) {
	return Number.isFinite(e) ? Math.max(1, Math.floor(e)) : 1;
}
function wm(e) {
	let t = 0;
	for (let n of e) t += n.count;
	return t;
}
function Tm(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = Sm(r);
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
//#endregion
//#region src/functions/npc-builder/skill-specialization.ts
function Em(e, t, n) {
	return `${e}:${jm(t)}:${n}`;
}
function Dm(e, t) {
	let n = e.trim(), r = t.trim();
	return r ? `${n} (${r})` : n;
}
function Om(e) {
	let t = /^(?<base>.+?)\s*\((?<specialization>[^)]+)\)\s*$/.exec(e.trim());
	if (!t?.groups) return null;
	let n = t.groups.base?.trim() ?? "", r = t.groups.specialization?.trim() ?? "";
	return !n || !r || km(e) ? null : {
		baseName: n,
		originalName: e,
		specialization: r
	};
}
function km(e) {
	let t = /^(?<base>.+?)\s*\((?<specialization>[^)]+)\)\s*$/.exec(e.trim());
	if (!t?.groups) return null;
	let n = t.groups.base?.trim() ?? "", r = t.groups.specialization?.trim() ?? "", i = Nm(r);
	return !n || !r || !Mm(r, i) ? null : {
		baseName: n,
		options: i,
		originalName: e,
		specialization: r
	};
}
function Am(e, t) {
	let n = /* @__PURE__ */ new Map();
	return t.map((t) => {
		let r = jm(t), i = n.get(r) ?? 0;
		return n.set(r, i + 1), {
			occurrence: i,
			originalName: t,
			resolutionKey: Em(e, t, i)
		};
	});
}
function jm(e) {
	return e.trim().replaceAll(/\s+/g, " ").toLocaleLowerCase();
}
function Mm(e, t) {
	return e.trim().toLocaleLowerCase() === "any" || t.length > 1;
}
function Nm(e) {
	return e.split(/\s+or\s+/i).map((e) => e.trim()).filter(Boolean);
}
//#endregion
//#region src/state/npc-builder-store/advancements/source-counts.ts
function Pm(e, t) {
	return t <= 0 ? [] : [{
		count: t,
		kind: "career",
		label: `${e} extra time`
	}];
}
function Fm(e, t) {
	let n = Math.max(0, Math.floor(t)), r = [];
	for (let t of e) {
		if (n <= 0) break;
		let e = Math.min(t.count, n);
		e > 0 && r.push({
			...t,
			count: e
		}), n -= e;
	}
	return r;
}
//#endregion
//#region src/state/npc-builder-store/advancements/talent-maximums.ts
function Im(e, t, n, r) {
	let i = Rm(Lm(e, r), n);
	return i.value === null ? t : Math.min(t, Math.max(0, i.value - e.baseAdvances));
}
function Lm(e, t) {
	let n = t[Sm(e.name)];
	return {
		maximumFormula: e.talentMaximumFormula ?? n?.maximumFormula ?? "",
		maximumKey: e.talentMaximumKey ?? n?.maximumKey ?? ""
	};
}
function Rm(e, t) {
	let n = e.maximumKey.trim().toLocaleLowerCase();
	if (!n) return {
		label: "Unknown",
		value: null
	};
	if (n === "none") return {
		label: "-",
		value: null
	};
	if (n === "custom") return zm(e.maximumFormula, t);
	let r = Number(n);
	if (Number.isFinite(r)) {
		let e = Math.max(0, Math.floor(r));
		return {
			label: `${e}`,
			value: e
		};
	}
	if (Js(n)) {
		let e = t[n] ?? 0, r = Math.max(0, Math.floor(e / 10));
		return {
			label: `${Ks[n]} Bonus (${r})`,
			value: r
		};
	}
	return {
		label: e.maximumKey || "Unknown",
		value: null
	};
}
function zm(e, t) {
	let n = e.trim(), r = Number(n);
	if (Number.isFinite(r)) {
		let e = Math.max(0, Math.floor(r));
		return {
			label: `${e}`,
			value: e
		};
	}
	let i = /@characteristics\.([a-z]+)\.bonus/i.exec(n)?.[1]?.toLocaleLowerCase();
	if (i && Js(i)) {
		let e = t[i] ?? 0, n = Math.max(0, Math.floor(e / 10));
		return {
			label: `${Ks[i]} Bonus (${n})`,
			value: n
		};
	}
	return {
		label: n || "Custom",
		value: null
	};
}
//#endregion
//#region src/state/npc-builder-store/advancements/career-grants.ts
function Bm(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e.careers) {
		let i = Tm(Um(r, t, e.skillGrantResolutions)), a = _m(r) / 5, o = Math.max(0, Cm(r.quantity) - 1) * 5;
		for (let e of i) {
			let i = gm(t, e), s = n.get(i);
			if (s) {
				a > s.highestLevel && (s.highestLevel = a, s.highestLevelSource = vm(r)), o > 0 && s.extraSources.push({
					count: o,
					kind: "career",
					label: `${r.name} extra time`
				});
				continue;
			}
			n.set(i, {
				extraSources: Pm(r.name, o),
				highestLevel: a,
				highestLevelSource: vm(r),
				name: e
			});
		}
	}
	for (let r of n.values()) Hm(e, {
		careerValue: r.highestLevel * 5 + wm(r.extraSources),
		kind: t,
		name: r.name,
		sources: [{
			count: r.highestLevel * 5,
			kind: "career",
			label: r.highestLevelSource
		}, ...r.extraSources]
	});
}
function Vm(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.careers) {
		let r = Tm(Um(n, "talent", e.skillGrantResolutions)), i = Math.max(0, Cm(n.quantity) - 1);
		for (let e of r) {
			let r = gm("talent", e), a = t.get(r);
			if (a) {
				i > 0 && a.extraSources.push({
					count: i,
					kind: "career",
					label: `${n.name} extra time`
				});
				continue;
			}
			t.set(r, {
				extraSources: Pm(n.name, i),
				firstSource: n.name,
				name: e
			});
		}
	}
	for (let n of t.values()) Hm(e, {
		careerValue: 1 + wm(n.extraSources),
		kind: "talent",
		name: n.name,
		sources: [{
			count: 1,
			kind: "career",
			label: n.firstSource
		}, ...n.extraSources]
	}, e.characteristicTotals);
}
function Hm(e, t, n = {}) {
	let r = gm(t.kind, t.name), i = e.entries.get(r);
	if (i) {
		let r = t.kind === "talent" && i.includedFromBase ? t.sources.slice(1) : t.sources, a = t.kind === "talent" ? Im(i, wm(r), n, e.talentMaximums) : t.careerValue;
		i.careerValue = a, i.includedFromCareer = !0, i.sources = [...i.sources.filter((e) => e.kind === "base"), ...Fm(r, a)];
		return;
	}
	let a = {
		baseAdvances: 0,
		baseValue: 0,
		careerValue: t.careerValue,
		current: t.careerValue,
		includedFromBase: !1,
		includedFromCareer: !0,
		kind: t.kind,
		minimumCurrent: 0,
		minimumTotal: 0,
		name: t.name,
		sources: t.sources
	};
	t.kind === "talent" && (a.careerValue = Im(a, t.careerValue, n, e.talentMaximums), a.current = a.careerValue, a.sources = Fm(t.sources, a.careerValue)), e.entries.set(r, { ...a });
}
function Um(e, t, n) {
	return t === "characteristic" ? e.grants.characteristics : t === "skill" ? Am(e.uuid, e.grants.skills).map((e) => n[e.resolutionKey] || e.originalName) : e.grants.talents;
}
//#endregion
//#region src/state/npc-builder-store/advancements/entry-context.ts
function Wm(e, t) {
	let n = {};
	for (let r of e.values()) {
		if (r.kind !== "characteristic") continue;
		let e = qs[Sm(r.name)];
		if (!e) continue;
		let i = t[gm(r.kind, r.name)] ?? 0, a = Math.max(r.minimumCurrent, Math.floor(r.careerValue + i));
		n[e] = Math.max(0, r.baseValue + a);
	}
	return n;
}
function Gm(e, t, n) {
	return e.kind === "skill" ? Km(e, t, n) : e.kind === "talent" ? qm(e, t, n) : e;
}
function Km(e, t, n) {
	let r = Jm(e.name, n.skillCharacteristics) ?? Ym(e.name, n.baseActorDraftData);
	if (!r) return {
		...e,
		minimumCurrent: -e.baseValue,
		minimumTotal: 0
	};
	let i = t[r.characteristicKey] ?? 0, a = Math.max(0, e.baseAdvances), o = [{
		count: i,
		kind: "characteristic",
		label: r.characteristicName
	}];
	return a > 0 && o.push({
		count: a,
		kind: "base",
		label: "Base skill advances"
	}), {
		...e,
		baseValue: i + a,
		characteristicKey: r.characteristicKey,
		characteristicName: r.characteristicName,
		characteristicValue: i,
		minimumCurrent: -a,
		minimumTotal: i,
		sources: [...o, ...e.sources]
	};
}
function qm(e, t, n) {
	let r = Lm(e, n.talentMaximums), i = Rm(r, t);
	return {
		...e,
		minimumCurrent: -e.baseAdvances,
		minimumTotal: 0,
		talentMaximumFormula: r.maximumFormula,
		talentMaximumKey: r.maximumKey,
		talentMaximumLabel: i.label,
		talentMaximumValue: i.value
	};
}
function Jm(e, t) {
	return t[Sm(e)] ?? null;
}
function Ym(e, t) {
	let n = t.advancements.find((t) => t.kind === "skill" && xm(t.name, e));
	return n?.characteristicKey ? {
		characteristicKey: n.characteristicKey,
		characteristicName: n.characteristicName ?? Ks[n.characteristicKey],
		skillName: e
	} : null;
}
//#endregion
//#region src/state/npc-builder-store/advancements/index.ts
function Xm(e) {
	let { baseActorDraftData: t, careers: n, manualAdvancementDeltas: r, settings: i, skillCharacteristics: a, skillGrantResolutions: o, talentMaximums: s } = e, c = q(() => {
		let e = u(), c = {
			careers: n.value,
			entries: e,
			skillGrantResolutions: o.value,
			talentMaximums: s.value
		};
		Bm(c, "characteristic"), Bm(c, "skill");
		let l = Wm(e, r.value);
		return Vm({
			...c,
			characteristicTotals: l
		}), [...e.values()].filter((e) => e.includedFromCareer || ym(e.kind, i.value)).map((e) => {
			let n = Gm(e, l, {
				baseActorDraftData: t.value,
				manualAdvancementDeltas: r.value,
				skillCharacteristics: a.value,
				talentMaximums: s.value
			}), i = gm(e.kind, e.name), o = r.value[i] ?? 0, c = n.careerValue + o;
			return {
				...n,
				current: Math.max(n.minimumCurrent, Math.floor(c))
			};
		}).sort((e, t) => e.kind === t.kind ? e.name.localeCompare(t.name) : e.kind.localeCompare(t.kind));
	}), l = q(() => um(c.value));
	function u() {
		let e = /* @__PURE__ */ new Map();
		for (let n of t.value.advancements) {
			let t = gm(n.kind, n.name), r = {
				baseAdvances: n.baseAdvances,
				baseValue: n.current,
				careerValue: 0,
				current: 0,
				includedFromBase: !0,
				includedFromCareer: !1,
				kind: n.kind,
				minimumCurrent: -n.current,
				minimumTotal: 0,
				name: n.name,
				sources: []
			};
			n.characteristicKey && (r.characteristicKey = n.characteristicKey, r.characteristicName = n.characteristicName ?? Ks[n.characteristicKey]), n.kind === "talent" && n.baseAdvances > 0 && r.sources.push({
				count: n.baseAdvances,
				kind: "base",
				label: "Base"
			}), n.talentMaximumFormula && (r.talentMaximumFormula = n.talentMaximumFormula), n.talentMaximumKey && (r.talentMaximumKey = n.talentMaximumKey), e.set(t, r);
		}
		return e;
	}
	function d(e) {
		return o.value[e] ?? "";
	}
	function f(e) {
		a.value = {
			...a.value,
			...Object.fromEntries(e.map((e) => [Sm(e.skillName), e]))
		};
	}
	function p(e) {
		s.value = {
			...s.value,
			...Object.fromEntries(e.map((e) => [Sm(e.talentName), e]))
		};
	}
	function m(e, t) {
		let n = gm(e.kind, e.name), i = Number.isFinite(t) ? t : 0;
		r.value[n] = Math.max(e.minimumCurrent, Math.floor(i)) - e.careerValue;
	}
	function h(e, t) {
		let n = Number.isFinite(t) ? t : 0;
		m(e, Math.max(e.minimumTotal, Math.floor(n)) - e.baseValue);
	}
	function g(e) {
		let t = gm(e.kind, e.name);
		delete r.value[t];
	}
	function _() {
		r.value = {};
	}
	function v(e, t) {
		let n = t.trim();
		if (!n) {
			delete o.value[e];
			return;
		}
		o.value[e] = n;
	}
	function y(e) {
		let t = `${e}:`;
		for (let e of Object.keys(o.value)) e.startsWith(t) && delete o.value[e];
	}
	return {
		advancements: c,
		estimatedNpcXp: l,
		getSkillGrantResolution: d,
		hydrateSkillCharacteristics: f,
		hydrateTalentMaximums: p,
		removeSkillGrantResolutionsForCareer: y,
		resetAdvancementCurrent: g,
		resetAllAdvancementCurrents: _,
		setAdvancementCurrent: m,
		setAdvancementTotal: h,
		setSkillGrantResolution: v
	};
}
//#endregion
//#region src/state/npc-builder-store/draft.ts
function Zm(e) {
	let { actorName: t, baseActors: n, careers: r, clearBaseDraftData: i, customSpells: a, customTraits: o, customTrappings: s, detectedSpells: c, ignoredBaseTraitKeys: l, magicLoreResolutions: u, removeSkillGrantResolutionsForCareer: d, selectedBaseActorUuid: f, selectedPortraitPath: p, settings: m, skillGrantResolutions: h, spellSelectionOverrides: g } = e, _ = q(() => n.value.find((e) => e.uuid === f.value) ?? null), v = q(() => r.value.at(-1) ?? null), y = q(() => {
		let e = v.value?.name, t = m.value.includeSpeciesInName && _.value?.species ? _.value.species : "";
		return e && t ? `${t} ${e}` : e || (_.value ? `${_.value.name} NPC` : "New NPC");
	}), b = q(() => t.value.trim() || y.value), x = q(() => v.value?.img || _.value?.prototypeTokenImg || _.value?.img || ""), S = q(() => p.value || x.value), C = q(() => {
		let e = {
			characteristics: 0,
			skills: 0,
			talents: 0,
			trappings: 0
		};
		for (let t of r.value) e.characteristics += t.grants.characteristics.length * t.quantity, e.skills += t.grants.skills.length * t.quantity, e.talents += t.grants.talents.length * t.quantity, e.trappings += t.grants.trappings.length * t.quantity;
		return e;
	});
	function w(e) {
		let t = r.value.find((t) => t.uuid === e.uuid);
		if (t) {
			t.quantity = Cm(t.quantity + 1);
			return;
		}
		r.value.push({
			...e,
			quantity: 1
		});
	}
	function T(e) {
		return r.value.some((t) => t.uuid === e.uuid) ? !1 : (r.value.push({
			...e,
			quantity: 1
		}), !0);
	}
	function E(e, t) {
		let n = e + t, i = r.value[e];
		!i || n < 0 || n >= r.value.length || (r.value.splice(e, 1), r.value.splice(n, 0, i));
	}
	function D(e, t) {
		let n = r.value[e];
		!n || e === t || t < 0 || t >= r.value.length || (r.value.splice(e, 1), r.value.splice(t, 0, n));
	}
	function O(e) {
		let [t] = r.value.splice(e, 1);
		t && d(t.uuid);
	}
	function ee() {
		t.value = "", r.value = [], o.value = [], s.value = [], a.value = [], c.value = [], l.value = {}, u.value = {}, p.value = "", h.value = {}, g.value = {}, f.value = "", i();
	}
	function te(e) {
		n.value.some((t) => t.uuid === e.uuid) || n.value.push(e), ne(e.uuid);
	}
	function ne(e) {
		let t = e.trim();
		f.value !== t && (p.value = ""), f.value = t;
	}
	function re(e) {
		p.value = e;
	}
	function ie(e, t) {
		let n = r.value[e];
		n && (n.quantity = Cm(t));
	}
	return {
		addCareer: w,
		addCareerIfMissing: T,
		finalActorName: b,
		finalCareer: v,
		finalPortraitPath: S,
		grantTotals: C,
		moveCareer: E,
		moveCareerToIndex: D,
		removeCareer: O,
		resetDraft: ee,
		selectBaseActor: te,
		selectBaseActorUuid: ne,
		selectedBaseActor: _,
		selectPortrait: re,
		setCareerQuantity: ie,
		suggestedActorName: y
	};
}
//#endregion
//#region src/functions/npc-builder/default-npc-builder-settings.ts
function Qm() {
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
//#region src/state/npc-builder-store/settings.ts
var $m = Qm(), eh = {
	advancements: [],
	optionalTraits: [],
	traits: [],
	trappings: []
};
function th(e) {
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
		lowerCareerMode: nh(e.lowerCareerMode) ? e.lowerCareerMode : "prompt",
		outputActorFolderUuid: typeof e.outputActorFolderUuid == "string" ? e.outputActorFolderUuid : "",
		quickTraitFolderUuid: typeof e.quickTraitFolderUuid == "string" ? e.quickTraitFolderUuid : "",
		searchCompendiumPortraitAssets: e.searchCompendiumPortraitAssets ?? !0,
		searchFoundryPortraitAssets: e.searchFoundryPortraitAssets ?? !1,
		searchWebPortraitAssets: e.searchWebPortraitAssets ?? !1
	};
}
function nh(e) {
	return e === "auto-add-all" || e === "never" || e === "prompt";
}
//#endregion
//#region src/state/npc-builder-store/hydration.ts
function rh(e) {
	let { actorFolders: t, baseActorDraftData: n, baseActors: r, ignoredBaseTraitKeys: i, itemFolders: a, manualAdvancementDeltas: o, quickTraits: s, selectedBaseActorUuid: c, settings: l, traitConfigOverrides: u, trappingOverrides: d, trappingResolutionOverrides: f } = e;
	function p() {
		n.value = {
			advancements: [],
			optionalTraits: [],
			traits: [],
			trappings: []
		}, o.value = {}, i.value = {}, u.value = {}, d.value = {}, f.value = {};
	}
	function m(e) {
		n.value = {
			advancements: [...e.advancements],
			optionalTraits: [...e.optionalTraits],
			traits: [...e.traits],
			trappings: [...e.trappings]
		}, o.value = {}, i.value = {}, u.value = {}, d.value = {};
	}
	function h(e) {
		r.value = [...e].sort((e, t) => e.name.localeCompare(t.name)), c.value && !r.value.some((e) => e.uuid === c.value) && (c.value = "", p());
	}
	function g(e) {
		l.value = th(e);
	}
	function _(e) {
		t.value = [...e].sort((e, t) => e.name.localeCompare(t.name)), l.value.baseActorFolderUuid && !t.value.some((e) => e.uuid === l.value.baseActorFolderUuid) && (l.value.baseActorFolderUuid = ""), l.value.outputActorFolderUuid && !t.value.some((e) => e.uuid === l.value.outputActorFolderUuid) && (l.value.outputActorFolderUuid = "");
	}
	function v(e) {
		a.value = [...e].sort((e, t) => e.name.localeCompare(t.name)), l.value.quickTraitFolderUuid && !a.value.some((e) => e.uuid === l.value.quickTraitFolderUuid) && (l.value.quickTraitFolderUuid = "");
	}
	function y(e) {
		s.value = [...e].sort((e, t) => e.name.localeCompare(t.name));
	}
	return {
		clearBaseDraftData: p,
		hydrateActorFolders: _,
		hydrateBaseActorDraftData: m,
		hydrateBaseActors: h,
		hydrateItemFolders: v,
		hydrateQuickTraits: y,
		hydrateSettings: g
	};
}
//#endregion
//#region src/functions/npc-builder/magic-grants.ts
var ih = /\(([^)]+)\)/, ah = [
	"beasts",
	"death",
	"fire",
	"heavens",
	"metal",
	"life",
	"light",
	"shadow"
], oh = [
	"daemonology",
	"necromancy",
	"nurgle",
	"slaanesh",
	"tzeentch",
	"undivided"
];
function sh(e, t) {
	let n = e.trim(), r = n.toLocaleLowerCase();
	return r === "petty magic" ? mh({
		kind: "petty-magic",
		rawLore: "Petty Magic",
		source: t,
		sourceName: n
	}) : r.startsWith("arcane magic") ? mh({
		kind: "arcane-magic",
		rawLore: hh(n),
		source: t,
		sourceName: n
	}) : r.startsWith("spellcaster") ? mh({
		kind: "spellcaster",
		rawLore: hh(n),
		source: t,
		sourceName: n
	}) : null;
}
function ch(e) {
	return e.trim().replace(/^any\s+/i, "").replace(/^arcane\s+lore\s+of\s+/i, "").replace(/^arcane\s+lore$/i, "").replace(/^lore\s+of\s+/i, "").replaceAll(/\s+/g, " ").toLocaleLowerCase();
}
function lh(e) {
	return `${e.source}:${e.kind}:${e.sourceName}:${e.rawLore}`;
}
function uh(e, t) {
	return {
		...e,
		isAmbiguous: !1,
		normalizedLore: ch(t),
		rawLore: t.trim()
	};
}
function dh(e) {
	let t = ch(e);
	return t === "petty" ? "petty" : ah.includes(t) ? "eight-wind" : oh.includes(t) ? "dark" : "other";
}
function fh(e, t) {
	if (e.kind === "petty-magic") return t.filter((e) => e.category === "petty");
	let n = e.rawLore.trim().toLocaleLowerCase();
	return n.includes("dark") ? t.filter((e) => e.category === "dark") : n.includes("eight winds") ? t.filter((e) => e.category === "eight-wind") : t.filter((e) => e.category !== "petty");
}
function ph(e) {
	let t = e.trim().toLocaleLowerCase();
	return !t || t === "any" || t.includes("any ");
}
function mh(e) {
	let t = e.rawLore.trim();
	return {
		isAmbiguous: ph(t),
		kind: e.kind,
		normalizedLore: ch(t),
		rawLore: t,
		resolutionKey: lh({
			kind: e.kind,
			rawLore: t,
			source: e.source,
			sourceName: e.sourceName
		}),
		source: e.source,
		sourceName: e.sourceName
	};
}
function hh(e) {
	return ih.exec(e)?.[1]?.trim() ?? "";
}
//#endregion
//#region src/state/npc-builder-store/spells.ts
function gh(e) {
	let { advancements: t, customSpells: n, detectedSpells: r, magicLoreResolutions: i, settings: a, spellSelectionOverrides: o, traits: s } = e, c = q(() => {
		let e = /* @__PURE__ */ new Map();
		for (let n of t.value) {
			if (n.kind !== "talent" || n.baseAdvances + n.current <= 0) continue;
			let t = sh(n.name, "talent");
			t && e.set(t.resolutionKey, v(t));
		}
		for (let t of s.value) {
			let n = sh(t.name, "trait");
			n && e.set(n.resolutionKey, v(n));
		}
		return [...e.values()];
	}), l = q(() => c.value.length > 0), u = q(() => {
		let e = /* @__PURE__ */ new Map();
		for (let t of r.value) e.set(t.key, {
			...t,
			selected: o.value[t.key] ?? a.value.autoSelectGrantedSpells
		});
		for (let t of n.value) e.set(t.key, {
			...t,
			selected: o.value[t.key] ?? t.selected
		});
		return [...e.values()].sort((e, t) => e.loreName === t.loreName ? e.name.localeCompare(t.name) : e.loreName.localeCompare(t.loreName));
	}), d = q(() => u.value.filter((e) => e.selected));
	function f(e) {
		let t = r.value.find((t) => _(t, e));
		if (t) {
			o.value[t.key] = !0;
			return;
		}
		n.value.some((t) => t.key === e.key) || n.value.push({
			...e,
			selected: !0
		});
	}
	function p(e) {
		r.value = e.map((e) => ({
			...e,
			selected: o.value[e.key] ?? a.value.autoSelectGrantedSpells
		}));
	}
	function m(e) {
		n.value = n.value.filter((t) => t.key !== e), delete o.value[e];
	}
	function h(e, t) {
		o.value[e] = t;
	}
	function g(e, t) {
		let n = t.trim();
		if (!n) {
			delete i.value[e];
			return;
		}
		i.value[e] = n;
	}
	function _(e, t) {
		return e.sourceUuid && e.sourceUuid === t.sourceUuid ? !0 : xm(e.name, t.name);
	}
	function v(e) {
		let t = i.value[e.resolutionKey];
		return t ? uh(e, t) : e;
	}
	return {
		addCustomSpell: f,
		hasMagicAccess: l,
		hydrateDetectedSpells: p,
		magicGrants: c,
		removeCustomSpell: m,
		selectedSpells: d,
		setMagicGrantLoreResolution: g,
		setSpellSelected: h,
		spells: u
	};
}
//#endregion
//#region src/state/npc-builder-store/traits.ts
function _h(e) {
	let { baseActorDraftData: t, customTraits: n, ignoredBaseTraitKeys: r, quickTraits: i, settings: a, traitConfigOverrides: o } = e, s = q(() => {
		let e = /* @__PURE__ */ new Map();
		if (a.value.allowBaseActorTraits) for (let n of t.value.traits) {
			let t = vh(n);
			r.value[t] || e.set(t, {
				config: n.config,
				ignored: !1,
				key: t,
				name: n.name,
				source: "base",
				sourceUuid: n.uuid
			});
		}
		for (let t of n.value) yh(e, t.name) || e.set(t.key, { ...t });
		return [...e.values()].map((e) => ({
			...e,
			config: bm(e.config, o.value[e.key])
		})).sort((e, t) => e.source === t.source ? e.name.localeCompare(t.name) : e.source.localeCompare(t.source));
	}), c = q(() => {
		if (!a.value.allowBaseActorTraits) return s.value;
		let e = [];
		for (let n of t.value.traits) {
			let t = vh(n);
			r.value[t] && e.push({
				config: bm(n.config, o.value[t]),
				ignored: !0,
				key: t,
				name: n.name,
				source: "base",
				sourceUuid: n.uuid
			});
		}
		return [...e, ...s.value];
	}), l = q(() => [...t.value.optionalTraits].map((e) => ({
		config: e.config,
		img: e.img,
		name: e.name,
		uuid: e.uuid
	})).sort((e, t) => e.name.localeCompare(t.name)));
	function u(e) {
		let t = y(e.name), n = v(e.name);
		if (n) {
			p(n, !0);
			return;
		}
		if (t) {
			f(t, !0);
			return;
		}
		h(e);
	}
	function d(e) {
		n.value = n.value.filter((t) => t.key !== e), delete o.value[e];
	}
	function f(e, t) {
		m("quick", e, t);
	}
	function p(e, t) {
		m("optional", e, t);
	}
	function m(e, t, r) {
		let i = `${e}:${t.uuid || Sm(t.name)}`;
		if (!r) {
			d(i), x(t.name, !0);
			return;
		}
		x(t.name, !1) || n.value.find((e) => e.key === i) || h({
			config: t.config,
			ignored: !1,
			key: i,
			name: t.name,
			source: e,
			sourceUuid: t.uuid
		});
	}
	function h(e) {
		s.value.some((t) => xm(t.name, e.name)) || n.value.some((t) => t.key === e.key) || n.value.push(e);
	}
	function g(e, t) {
		o.value[e] = {
			...o.value[e],
			...t
		};
	}
	function _(e, t) {
		if (e.startsWith("base:")) {
			if (!t) {
				delete r.value[e];
				return;
			}
			r.value[e] = !0;
		}
	}
	function v(e) {
		return l.value.find((t) => xm(t.name, e));
	}
	function y(e) {
		return i.value.find((t) => xm(t.name, e));
	}
	function b(e) {
		let n = t.value.traits.find((t) => xm(t.name, e));
		if (!n) return null;
		let i = vh(n);
		return {
			ignored: !!r.value[i],
			key: i
		};
	}
	function x(e, t) {
		let n = b(e);
		return n ? (_(n.key, t), !0) : !1;
	}
	return {
		addCustomTrait: u,
		buildTraits: c,
		optionalTraits: l,
		removeCustomTrait: d,
		setBaseTraitIgnored: _,
		setOptionalTraitSelected: p,
		setQuickTraitSelected: f,
		setTraitConfig: g,
		traits: s
	};
}
function vh(e) {
	return `base:${e.uuid || Sm(e.name)}`;
}
function yh(e, t) {
	return [...e.values()].some((e) => xm(e.name, t));
}
//#endregion
//#region src/functions/npc-builder/trapping-resolution.ts
function bh(e, t = "trapping") {
	return {
		candidates: [],
		searchTerms: wh(e),
		selectedCandidateUuid: "",
		selectedItemType: t,
		selectedName: e.trim(),
		status: "fallback"
	};
}
function xh(e) {
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
function Sh(e) {
	return {
		candidates: [],
		searchTerms: wh(e),
		selectedCandidateUuid: "",
		selectedItemType: "trapping",
		selectedName: e.trim(),
		status: "unresolved"
	};
}
function Ch(e, t) {
	let n = wh(e), r = Eh(n, t), i = r.filter((e) => e.matchKind === "exact");
	return i.length === 1 ? Oh("matched", n, i[0]) : i.length > 1 ? Oh("ambiguous", n, i[0], { candidates: r }) : r.length ? {
		candidates: r,
		searchTerms: n,
		selectedCandidateUuid: "",
		selectedItemType: "trapping",
		selectedName: e.trim(),
		status: "ambiguous"
	} : bh(e);
}
function wh(e) {
	let t = e.split(/\s+or\s+/i).map((e) => e.trim()).filter(Boolean);
	return t.length ? Mh(t) : [e.trim()].filter(Boolean);
}
function Th(e, t) {
	if (kh(e) === kh(t)) return "exact";
	let n = Ah(e), r = Ah(t);
	if (!n || !r) return null;
	if (n === r || n.includes(r) || r.includes(n)) return "near";
	let i = n.split(" "), a = new Set(r.split(" "));
	return i.every((e) => a.has(e)) ? "near" : null;
}
function Eh(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) for (let e of t) {
		let t = Th(r, e.name);
		t && n.get(e.uuid)?.matchKind !== "exact" && n.set(e.uuid, {
			itemType: e.itemType,
			matchKind: t,
			name: e.name,
			searchTerm: r,
			sourceLabel: e.sourceLabel,
			uuid: e.uuid
		});
	}
	return [...n.values()].sort(Dh);
}
function Dh(e, t) {
	return e.matchKind === t.matchKind ? e.name.localeCompare(t.name) : e.matchKind === "exact" ? -1 : 1;
}
function Oh(e, t, n, r = {}) {
	return {
		candidates: r.candidates ?? (n ? [n] : []),
		searchTerms: t,
		selectedCandidateUuid: n?.uuid ?? "",
		selectedItemType: n?.itemType ?? "trapping",
		selectedName: n?.name ?? "",
		status: e
	};
}
function kh(e) {
	return e.trim().toLocaleLowerCase().replaceAll(/\s+/g, " ");
}
function Ah(e) {
	return kh(e).replaceAll("&", " and ").replaceAll(/[(),.:;[\]]/g, " ").replaceAll(/\b(a|an|the|some|pair of|pairs of)\b/g, " ").split(/\s+/).map(jh).filter(Boolean).join(" ");
}
function jh(e) {
	return e.endsWith("ies") && e.length > 4 ? `${e.slice(0, -3)}y` : e.endsWith("s") && !e.endsWith("ss") && e.length > 3 ? e.slice(0, -1) : e;
}
function Mh(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/state/npc-builder-store/trappings.ts
function Nh(e) {
	let { baseActorDraftData: t, careers: n, customTrappings: r, settings: i, trappingOverrides: a, trappingResolutionOverrides: o } = e, s = q(() => {
		let e = /* @__PURE__ */ new Map();
		if (i.value.allowBaseActorTrappings) for (let n of t.value.trappings) {
			let t = `base:${n.uuid || Sm(n.name)}`;
			e.set(t, {
				ignored: !1,
				itemType: n.itemType,
				key: t,
				name: n.name,
				quantity: n.quantity,
				resolution: xh({
					itemType: n.itemType,
					name: n.name,
					uuid: n.uuid
				}),
				source: "base",
				sourceUuid: n.uuid
			});
		}
		for (let t of n.value) for (let n of t.grants.trappings) {
			let r = `career:${Sm(n)}`, i = e.get(r);
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
				resolution: o.value[r] ?? Sh(n),
				source: "career",
				sourceUuid: ""
			});
		}
		for (let t of r.value) e.set(t.key, { ...t });
		return [...e.values()].map((e) => {
			let t = a.value[e.key];
			return {
				...e,
				ignored: t?.ignored ?? e.ignored,
				quantity: Cm(t?.quantity ?? e.quantity),
				resolution: o.value[e.key] ?? e.resolution
			};
		}).sort((e, t) => e.source === t.source ? e.name.localeCompare(t.name) : e.source.localeCompare(t.source));
	});
	function c(e) {
		r.value.some((t) => t.key === e.key) || r.value.push(e);
	}
	function l(e) {
		r.value = r.value.filter((t) => t.key !== e), delete a.value[e], delete o.value[e];
	}
	function u(e, t) {
		a.value[e] = {
			...a.value[e],
			ignored: t
		};
	}
	function d(e, t) {
		a.value[e] = {
			...a.value[e],
			quantity: Cm(t)
		};
	}
	function f(e, t) {
		let n = s.value.find((t) => t.key === e), r = n?.resolution.candidates.find((e) => e.uuid === t);
		!n || !r || (o.value[e] = {
			...n.resolution,
			selectedCandidateUuid: r.uuid,
			selectedItemType: r.itemType,
			selectedName: r.name,
			status: n.resolution.status === "matched" ? "matched" : "ambiguous"
		});
	}
	function p(e) {
		let t = s.value.find((t) => t.key === e);
		if (!t) return;
		let n = bh(t.name, t.itemType);
		o.value[e] = {
			...n,
			candidates: t.resolution.candidates,
			searchTerms: t.resolution.searchTerms
		};
	}
	function m(e, t) {
		o.value[e] = t;
	}
	return {
		addCustomTrapping: c,
		removeCustomTrapping: l,
		selectTrappingResolutionCandidate: f,
		setTrappingFallback: p,
		setTrappingIgnored: u,
		setTrappingQuantity: d,
		setTrappingResolution: m,
		trappings: s
	};
}
//#endregion
//#region src/state/npc-builder-store/index.ts
var Ph = Fp("npc-builder", () => {
	let e = /* @__PURE__ */ F(""), t = /* @__PURE__ */ F([]), n = /* @__PURE__ */ F({}), r = /* @__PURE__ */ F({ ...eh }), i = /* @__PURE__ */ F([]), a = /* @__PURE__ */ F([]), o = /* @__PURE__ */ F([]), s = /* @__PURE__ */ F([]), c = /* @__PURE__ */ F([]), l = /* @__PURE__ */ F([]), u = /* @__PURE__ */ F(""), d = /* @__PURE__ */ F({ ...$m }), f = /* @__PURE__ */ F(""), p = /* @__PURE__ */ F({}), m = /* @__PURE__ */ F({}), h = /* @__PURE__ */ F({}), g = /* @__PURE__ */ F([]), _ = /* @__PURE__ */ F([]), v = /* @__PURE__ */ F({}), y = /* @__PURE__ */ F({}), b = /* @__PURE__ */ F({}), x = /* @__PURE__ */ F({}), S = /* @__PURE__ */ F({}), C = /* @__PURE__ */ F({}), w = Xm({
		baseActorDraftData: r,
		careers: a,
		manualAdvancementDeltas: n,
		settings: d,
		skillCharacteristics: p,
		skillGrantResolutions: h,
		talentMaximums: m
	}), T = rh({
		actorFolders: t,
		baseActorDraftData: r,
		baseActors: i,
		ignoredBaseTraitKeys: v,
		itemFolders: c,
		manualAdvancementDeltas: n,
		quickTraits: l,
		selectedBaseActorUuid: f,
		settings: d,
		traitConfigOverrides: x,
		trappingOverrides: S,
		trappingResolutionOverrides: C
	}), E = Zm({
		actorName: e,
		baseActors: i,
		careers: a,
		clearBaseDraftData: T.clearBaseDraftData,
		customSpells: _,
		customTraits: o,
		customTrappings: s,
		detectedSpells: g,
		ignoredBaseTraitKeys: v,
		magicLoreResolutions: y,
		removeSkillGrantResolutionsForCareer: w.removeSkillGrantResolutionsForCareer,
		selectedBaseActorUuid: f,
		selectedPortraitPath: u,
		settings: d,
		skillGrantResolutions: h,
		spellSelectionOverrides: b
	}), D = _h({
		baseActorDraftData: r,
		customTraits: o,
		ignoredBaseTraitKeys: v,
		quickTraits: l,
		settings: d,
		traitConfigOverrides: x
	}), O = Nh({
		baseActorDraftData: r,
		careers: a,
		customTrappings: s,
		settings: d,
		trappingOverrides: S,
		trappingResolutionOverrides: C
	}), ee = gh({
		advancements: w.advancements,
		customSpells: _,
		detectedSpells: g,
		magicLoreResolutions: y,
		settings: d,
		spellSelectionOverrides: b,
		traits: D.traits
	});
	return {
		actorName: e,
		actorFolders: t,
		addCareer: E.addCareer,
		addCareerIfMissing: E.addCareerIfMissing,
		addCustomSpell: ee.addCustomSpell,
		addCustomTrait: D.addCustomTrait,
		addCustomTrapping: O.addCustomTrapping,
		advancements: w.advancements,
		baseActorDraftData: r,
		baseActors: i,
		buildTraits: D.buildTraits,
		careers: a,
		clearBaseDraftData: T.clearBaseDraftData,
		customSpells: _,
		customTraits: o,
		customTrappings: s,
		estimatedNpcXp: w.estimatedNpcXp,
		finalActorName: E.finalActorName,
		finalCareer: E.finalCareer,
		finalPortraitPath: E.finalPortraitPath,
		getSkillGrantResolution: w.getSkillGrantResolution,
		grantTotals: E.grantTotals,
		hasMagicAccess: ee.hasMagicAccess,
		hydrateActorFolders: T.hydrateActorFolders,
		hydrateBaseActorDraftData: T.hydrateBaseActorDraftData,
		hydrateBaseActors: T.hydrateBaseActors,
		hydrateDetectedSpells: ee.hydrateDetectedSpells,
		hydrateItemFolders: T.hydrateItemFolders,
		hydrateQuickTraits: T.hydrateQuickTraits,
		hydrateSettings: T.hydrateSettings,
		hydrateSkillCharacteristics: w.hydrateSkillCharacteristics,
		hydrateTalentMaximums: w.hydrateTalentMaximums,
		itemFolders: c,
		magicGrants: ee.magicGrants,
		magicLoreResolutions: y,
		moveCareer: E.moveCareer,
		moveCareerToIndex: E.moveCareerToIndex,
		optionalTraits: D.optionalTraits,
		quickTraits: l,
		removeCareer: E.removeCareer,
		removeCustomSpell: ee.removeCustomSpell,
		removeCustomTrait: D.removeCustomTrait,
		removeCustomTrapping: O.removeCustomTrapping,
		resetAdvancementCurrent: w.resetAdvancementCurrent,
		resetAllAdvancementCurrents: w.resetAllAdvancementCurrents,
		resetDraft: E.resetDraft,
		selectBaseActor: E.selectBaseActor,
		selectBaseActorUuid: E.selectBaseActorUuid,
		selectedBaseActor: E.selectedBaseActor,
		selectedBaseActorUuid: f,
		selectedPortraitPath: u,
		selectedSpells: ee.selectedSpells,
		selectPortrait: E.selectPortrait,
		selectTrappingResolutionCandidate: O.selectTrappingResolutionCandidate,
		setAdvancementCurrent: w.setAdvancementCurrent,
		setAdvancementTotal: w.setAdvancementTotal,
		setBaseTraitIgnored: D.setBaseTraitIgnored,
		setCareerQuantity: E.setCareerQuantity,
		setMagicGrantLoreResolution: ee.setMagicGrantLoreResolution,
		setOptionalTraitSelected: D.setOptionalTraitSelected,
		setQuickTraitSelected: D.setQuickTraitSelected,
		setSkillGrantResolution: w.setSkillGrantResolution,
		setSpellSelected: ee.setSpellSelected,
		setTraitConfig: D.setTraitConfig,
		setTrappingFallback: O.setTrappingFallback,
		setTrappingIgnored: O.setTrappingIgnored,
		setTrappingQuantity: O.setTrappingQuantity,
		setTrappingResolution: O.setTrappingResolution,
		settings: d,
		spells: ee.spells,
		suggestedActorName: E.suggestedActorName,
		traits: D.traits,
		trappings: O.trappings
	};
}), Fh = { class: "npc-builder__subview-stack" }, Ih = [
	"checked",
	"disabled",
	"onChange"
], Lh = { class: "npc-builder__subview-actions" }, Rh = /* @__PURE__ */ L({
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
		return (t, r) => (B(), V("div", Fh, [
			U("p", null, j(e.prompt.droppedCareer.name) + " appears to belong to the " + j(e.prompt.droppedCareer.careerGroup) + " career track. The following lower-tier candidates were found. ", 1),
			(B(!0), V(z, null, R(e.candidateGroups, (t) => (B(), V("section", {
				key: t.level,
				class: "npc-builder__candidate-group"
			}, [U("h3", null, "Tier " + j(t.level || "Unknown"), 1), (B(!0), V(z, null, R(t.candidates, (t) => (B(), V("label", {
				key: t.uuid,
				class: A(["npc-builder__candidate-row", { "is-queued": e.isCareerQueued(t.uuid) }])
			}, [U("input", {
				checked: e.isCareerQueued(t.uuid) || e.isLowerCareerSelected(t.uuid),
				disabled: e.isCareerQueued(t.uuid),
				type: "checkbox",
				onChange: (e) => n("lowerCareerSelected", t, e)
			}, null, 40, Ih), U("span", null, [U("strong", null, j(t.name), 1), U("small", null, [G(j(t.careerGroup || "Career") + " ", 1), e.isCareerQueued(t.uuid) ? (B(), V(z, { key: 0 }, [G(" already queued ")], 64)) : K("", !0)])])], 2))), 128))]))), 128)),
			U("div", Lh, [U("button", {
				type: "button",
				onClick: r[0] ||= (e) => n("addDroppedOnly")
			}, "Add Dropped Only"), U("button", {
				type: "button",
				onClick: r[1] ||= (e) => n("addSelected")
			}, "Add Selected")])
		]));
	}
}), zh = /* @__PURE__ */ new Map();
function Bh(e) {
	let t = e.id.trim();
	if (!t) throw Error("NPC auto-advance strategies must have an id.");
	zh.set(t, {
		...e,
		id: t
	});
}
function Vh() {
	return [...zh.values()].sort((e, t) => e.name.localeCompare(t.name));
}
function Hh(e) {
	return zh.get(e) ?? null;
}
function Uh(e, t) {
	return Kh(e, t, {
		kinds: ["skill"],
		respectTalentMaximums: !1
	});
}
function Wh(e, t) {
	return Kh(Kh(e, t, {
		kinds: ["talent"],
		respectTalentMaximums: !0
	}), t, {
		kinds: ["skill"],
		respectTalentMaximums: !1
	});
}
function Gh(e, t) {
	return Kh(e, t, {
		kinds: ["characteristic"],
		respectTalentMaximums: !1
	});
}
function Kh(e, t, n) {
	let r = Math.max(0, Math.floor(Number.isFinite(t) ? t : 0)), i = Zh(e.advancements), a = um(i).total;
	if (a >= r) return { advancements: i };
	let o = !0;
	for (; o;) {
		o = !1;
		for (let e of i) {
			if (!n.kinds.includes(e.kind)) continue;
			let t = qh(e, n);
			if (!t) continue;
			let i = dm(t) - dm(e);
			i <= 0 || a + i > r || (e.current = t.current, a += i, o = !0);
		}
	}
	return { advancements: i };
}
function qh(e, t) {
	return t.respectTalentMaximums && e.kind === "talent" && !Jh(e) ? null : {
		...e,
		current: e.current + Xh(e.kind)
	};
}
function Jh(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" ? Yh(e) < t : !1;
}
function Yh(e) {
	return Math.max(e.minimumTotal, e.baseValue + e.current);
}
function Xh(e) {
	return e === "talent" ? 1 : 5;
}
function Zh(e) {
	return e.map((e) => ({
		...e,
		sources: e.sources.map((e) => ({ ...e }))
	}));
}
Bh({
	description: "Cycles visible Skill rows evenly until no next skill increase fits the target XP.",
	id: "skill-master",
	name: "Skill Master",
	run: Uh
}), Bh({
	description: "Raises visible Talent rows evenly up to known maximums, then spends any remaining XP like Skill Master.",
	id: "gifted-and-talented",
	name: "Gifted & Talented",
	run: Wh
}), Bh({
	description: "Cycles visible Characteristic rows evenly until no next characteristic increase fits the target XP.",
	id: "all-natural",
	name: "All Natural",
	run: Gh
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderAdvancementsTab/advancement-display.ts
function Qh(e) {
	let t = e.current - e.careerValue, n = [...e.sources].sort((e, t) => sg(e.kind) - sg(t.kind)).map((e) => `${e.label} ${cg(e.count)}`);
	return t !== 0 && n.push(`Manual ${cg(t)}`), n.length ? n.join(", ") : e.includedFromBase ? "Base actor" : "-";
}
function $h(e) {
	return km(e) !== null;
}
function eg(e) {
	return e.kind === "talent" ? 1 : 5;
}
function tg(e) {
	return Math.max(e.minimumTotal, e.baseValue + e.current);
}
function ng(e) {
	return tg(e);
}
function rg(e) {
	return e.talentMaximumLabel ?? "Unknown";
}
function ig(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" && ng(e) > t;
}
function ag(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" && ng(e) < t;
}
function og(e) {
	return dm(e);
}
function sg(e) {
	return e === "characteristic" ? 0 : e === "career" ? 1 : 2;
}
function cg(e) {
	return e > 0 ? `+${e}` : `${e}`;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderAdvancementsTab/AdvancementRowsPanel.vue?vue&type=script&setup=true&lang.ts
var lg = { class: "npc-builder__panel" }, ug = { class: "npc-builder__panel-heading" }, dg = {
	key: 0,
	class: "npc-builder__panel-actions"
}, fg = {
	key: 1,
	class: "npc-builder__xp-summary"
}, pg = { class: "npc-builder__table" }, mg = {
	key: 0,
	class: "npc-builder__badge"
}, hg = { class: "npc-builder__advance-controls" }, gg = ["disabled", "onClick"], _g = [
	"aria-label",
	"value",
	"onInput"
], vg = ["onClick"], yg = ["disabled", "onClick"], bg = /* @__PURE__ */ L({
	__name: "AdvancementRowsPanel",
	props: {
		entries: {},
		estimatedNpcXp: {},
		manualAdvanceCount: {},
		sectionNumber: {},
		showSkillSpecializationBadges: { type: Boolean },
		title: {}
	},
	emits: [
		"adjustCurrent",
		"resetAll",
		"resetCurrent",
		"totalChange"
	],
	setup(e, { emit: t }) {
		let n = t;
		function r(e, t) {
			let r = t.target;
			r && n("totalChange", e, Number(r.value));
		}
		return (t, i) => (B(), V("section", lg, [
			U("div", ug, [U("span", null, j(e.sectionNumber), 1), U("h2", null, j(e.title), 1)]),
			e.manualAdvanceCount ? (B(), V("div", dg, [U("span", null, j(e.manualAdvanceCount) + " manual edits", 1), U("button", {
				type: "button",
				onClick: i[0] ||= (e) => n("resetAll")
			}, "Reset All Advances")])) : K("", !0),
			e.estimatedNpcXp ? (B(), V("div", fg, [
				U("strong", null, "Estimated NPC XP " + j(e.estimatedNpcXp.total), 1),
				U("span", null, j(e.estimatedNpcXp.characteristics) + " characteristics", 1),
				U("span", null, j(e.estimatedNpcXp.skills) + " skills", 1),
				U("span", null, j(e.estimatedNpcXp.talents) + " talents", 1)
			])) : K("", !0),
			U("div", pg, [i[1] ||= U("div", { class: "npc-builder__table-head" }, [
				U("span", null, "Name"),
				U("span", null, "Base"),
				U("span", null, "Advances"),
				U("span", null, "Total"),
				U("span", null, "XP"),
				U("span", null, "Sources")
			], -1), (B(!0), V(z, null, R(e.entries, (t) => (B(), V("div", {
				key: `${t.kind}:${t.name}`,
				class: A(["npc-builder__advance-row", { "is-edited": t.current !== t.careerValue }])
			}, [
				U("strong", null, [G(j(t.name) + " ", 1), e.showSkillSpecializationBadges && I($h)(t.name) ? (B(), V("span", mg, " Needs specialization ")) : K("", !0)]),
				U("span", null, j(t.baseValue), 1),
				U("span", null, j(t.current), 1),
				U("div", hg, [
					U("button", {
						disabled: I(tg)(t) <= t.minimumTotal,
						title: "Decrease by 5",
						type: "button",
						onClick: (e) => n("adjustCurrent", t, -1)
					}, " -5 ", 8, gg),
					U("input", {
						"aria-label": `Total ${t.name}`,
						value: I(tg)(t),
						min: "0",
						type: "number",
						onInput: (e) => r(t, e)
					}, null, 40, _g),
					U("button", {
						title: "Increase by 5",
						type: "button",
						onClick: (e) => n("adjustCurrent", t, 1)
					}, " +5 ", 8, vg),
					U("button", {
						disabled: t.current === t.careerValue,
						title: "Reset to career value",
						type: "button",
						onClick: (e) => n("resetCurrent", t)
					}, " Reset ", 8, yg)
				]),
				U("span", null, j(I(og)(t)), 1),
				U("span", null, j(I(Qh)(t)), 1)
			], 2))), 128))])
		]));
	}
}), xg = { class: "npc-builder__panel" }, Sg = { class: "npc-builder__auto-advance" }, Cg = { class: "npc-builder__mini-field" }, wg = ["value"], Tg = { class: "npc-builder__mini-field" }, Eg = ["value"], Dg = ["value"], Og = ["disabled"], kg = { key: 0 }, Ag = /* @__PURE__ */ L({
	__name: "AutoAdvancePanel",
	props: {
		autoAdvanceStrategies: {},
		canRunAutoAdvance: { type: Boolean },
		selectedAutoAdvanceStrategy: {},
		selectedAutoAdvanceStrategyId: {},
		targetXp: {}
	},
	emits: [
		"runAutoAdvance",
		"strategyChange",
		"targetXpChange"
	],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			let t = e.target;
			n("targetXpChange", Number(t?.value ?? 0));
		}
		function i(e) {
			let t = e.target;
			n("strategyChange", t?.value ?? "");
		}
		return (t, a) => (B(), V("section", xg, [a[3] ||= U("div", { class: "npc-builder__panel-heading" }, [U("span", null, "4"), U("h2", null, "Auto Advance")], -1), U("div", Sg, [
			U("label", Cg, [a[1] ||= U("span", null, "Target XP", -1), U("input", {
				value: e.targetXp,
				min: "0",
				type: "number",
				onInput: r
			}, null, 40, wg)]),
			U("label", Tg, [a[2] ||= U("span", null, "Strategy", -1), U("select", {
				value: e.selectedAutoAdvanceStrategyId,
				onChange: i
			}, [(B(!0), V(z, null, R(e.autoAdvanceStrategies, (e) => (B(), V("option", {
				key: e.id,
				value: e.id
			}, j(e.name), 9, Dg))), 128))], 40, Eg)]),
			U("button", {
				disabled: !e.canRunAutoAdvance,
				title: "Advance rows as close to the target XP as possible without going over",
				type: "button",
				onClick: a[0] ||= (e) => n("runAutoAdvance")
			}, " Auto Advance ", 8, Og),
			e.selectedAutoAdvanceStrategy ? (B(), V("span", kg, j(e.selectedAutoAdvanceStrategy.description), 1)) : K("", !0)
		])]));
	}
}), jg = { class: "npc-builder__panel" }, Mg = { class: "npc-builder__panel-actions" }, Ng = ["disabled"], Pg = { class: "npc-builder__table" }, Fg = { class: "npc-builder__advance-controls" }, Ig = ["disabled", "onClick"], Lg = [
	"aria-label",
	"value",
	"onInput"
], Rg = ["onClick"], zg = ["disabled", "onClick"], Bg = { class: "npc-builder__maximum-cell" }, Vg = {
	key: 0,
	class: "npc-builder__status-pill npc-builder__status-pill--warning"
}, Hg = /* @__PURE__ */ L({
	__name: "TalentRowsPanel",
	props: {
		maximizableTalentCount: {},
		talents: {}
	},
	emits: [
		"adjustCurrent",
		"maximizeTalents",
		"resetCurrent",
		"totalChange"
	],
	setup(e, { emit: t }) {
		let n = t;
		function r(e, t) {
			let r = t.target;
			r && n("totalChange", e, Number(r.value));
		}
		return (t, i) => (B(), V("section", jg, [
			i[2] ||= U("div", { class: "npc-builder__panel-heading" }, [U("span", null, "3"), U("h2", null, "Talents")], -1),
			U("div", Mg, [U("span", null, j(e.maximizableTalentCount) + " below maximum", 1), U("button", {
				disabled: e.maximizableTalentCount === 0,
				title: "Raise talents with known maximums to their maximum ranks",
				type: "button",
				onClick: i[0] ||= (e) => n("maximizeTalents")
			}, " Maximize Talents ", 8, Ng)]),
			U("div", Pg, [i[1] ||= U("div", { class: "npc-builder__table-head npc-builder__table-head--talents" }, [
				U("span", null, "Name"),
				U("span", null, "Ranks"),
				U("span", null, "Maximum"),
				U("span", null, "XP"),
				U("span", null, "Sources")
			], -1), (B(!0), V(z, null, R(e.talents, (e) => (B(), V("div", {
				key: `${e.kind}:${e.name}`,
				class: A(["npc-builder__advance-row npc-builder__advance-row--talent", {
					"is-edited": e.current !== e.careerValue,
					"is-over-maximum": I(ig)(e)
				}])
			}, [
				U("strong", null, j(e.name), 1),
				U("div", Fg, [
					U("button", {
						disabled: I(ng)(e) <= e.minimumTotal,
						title: "Decrease by 1",
						type: "button",
						onClick: (t) => n("adjustCurrent", e, -1)
					}, " -1 ", 8, Ig),
					U("input", {
						"aria-label": `Ranks ${e.name}`,
						value: I(ng)(e),
						min: "0",
						type: "number",
						onInput: (t) => r(e, t)
					}, null, 40, Lg),
					U("button", {
						title: "Increase by 1",
						type: "button",
						onClick: (t) => n("adjustCurrent", e, 1)
					}, " +1 ", 8, Rg),
					U("button", {
						disabled: e.current === e.careerValue,
						title: "Reset to career value",
						type: "button",
						onClick: (t) => n("resetCurrent", e)
					}, " Reset ", 8, zg)
				]),
				U("span", Bg, [G(j(I(rg)(e)) + " ", 1), I(ig)(e) ? (B(), V("span", Vg, " Over max ")) : K("", !0)]),
				U("span", null, j(I(og)(e)), 1),
				U("span", null, j(I(Qh)(e)), 1)
			], 2))), 128))])
		]));
	}
}), Ug = { class: "npc-builder__stack" }, Wg = /* @__PURE__ */ L({
	__name: "NpcBuilderAdvancementsTab",
	setup(e) {
		let t = Ph(), { advancements: n, estimatedNpcXp: r } = Ip(t), i = Vh(), a = /* @__PURE__ */ F("skill-master"), o = /* @__PURE__ */ F(0), s = q(() => n.value.filter((e) => e.kind === "characteristic")), c = q(() => n.value.filter((e) => e.kind === "skill")), l = q(() => n.value.filter((e) => e.kind === "talent")), u = q(() => l.value.filter((e) => ag(e)).length), d = q(() => n.value.filter((e) => e.current !== e.careerValue).length), f = q(() => Hh(a.value) ?? i[0] ?? null), p = q(() => f.value !== null && o.value > r.value.total);
		qn(() => r.value.total, (e) => {
			o.value < e && (o.value = e);
		}, { immediate: !0 });
		function m(e, n) {
			let r = tg(e) + n * eg(e);
			t.setAdvancementTotal(e, r);
		}
		function h(e) {
			t.resetAdvancementCurrent(e);
		}
		function g() {
			for (let e of l.value) {
				let n = e.talentMaximumValue;
				typeof n == "number" && ng(e) < n && t.setAdvancementTotal(e, n);
			}
		}
		function _() {
			let e = f.value;
			if (!e) return;
			let r = Math.max(0, Math.floor(o.value)), i = e.run({ advancements: n.value }, r);
			for (let e of i.advancements) {
				let n = y(e);
				!n || n.current === e.current || t.setAdvancementCurrent(n, e.current);
			}
		}
		function v(e, n) {
			t.setAdvancementTotal(e, n);
		}
		function y(e) {
			return n.value.find((t) => t.kind === e.kind && t.name === e.name) ?? null;
		}
		return (e, n) => (B(), V("section", Ug, [
			W(bg, {
				entries: s.value,
				"estimated-npc-xp": I(r),
				"manual-advance-count": d.value,
				"section-number": "1",
				title: "Characteristics",
				onAdjustCurrent: m,
				onResetAll: I(t).resetAllAdvancementCurrents,
				onResetCurrent: h,
				onTotalChange: v
			}, null, 8, [
				"entries",
				"estimated-npc-xp",
				"manual-advance-count",
				"onResetAll"
			]),
			W(bg, {
				entries: c.value,
				"section-number": "2",
				"show-skill-specialization-badges": "",
				title: "Skills",
				onAdjustCurrent: m,
				onResetCurrent: h,
				onTotalChange: v
			}, null, 8, ["entries"]),
			W(Hg, {
				"maximizable-talent-count": u.value,
				talents: l.value,
				onAdjustCurrent: m,
				onMaximizeTalents: g,
				onResetCurrent: h,
				onTotalChange: v
			}, null, 8, ["maximizable-talent-count", "talents"]),
			W(Ag, {
				"auto-advance-strategies": I(i),
				"can-run-auto-advance": p.value,
				"selected-auto-advance-strategy": f.value,
				"selected-auto-advance-strategy-id": a.value,
				"target-xp": o.value,
				onRunAutoAdvance: _,
				onStrategyChange: n[0] ||= (e) => a.value = e,
				onTargetXpChange: n[1] ||= (e) => o.value = e
			}, null, 8, [
				"auto-advance-strategies",
				"can-run-auto-advance",
				"selected-auto-advance-strategy",
				"selected-auto-advance-strategy-id",
				"target-xp"
			])
		]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/labels.ts
function Gg(e) {
	return [
		`Ch ${e.grants.characteristics.length}`,
		`Sk ${e.grants.skills.length}`,
		`Ta ${e.grants.talents.length}`,
		`Tr ${e.grants.trappings.length}`
	].join(" / ");
}
function Kg(e) {
	let t = e.slice(0, 3).join(", "), n = e.length - 3;
	return e.length ? n > 0 ? `${t}, +${n}` : t : "-";
}
function qg(e) {
	return e.split(/\s+/).map((e) => e.at(0)).filter(Boolean).slice(0, 2).join("").toLocaleUpperCase();
}
function Jg(e) {
	return `${e.label}\n${e.img}`;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/BaseActorPanel.vue?vue&type=script&setup=true&lang.ts
var Yg = { class: "npc-builder__panel" }, Xg = { class: "npc-builder__field-grid" }, Zg = { class: "npc-builder__field" }, Qg = ["value"], $g = { class: "npc-builder__field" }, e_ = ["disabled", "value"], t_ = { value: "" }, n_ = ["value"], r_ = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, i_ = {
	key: 1,
	class: "npc-builder__source"
}, a_ = { class: "npc-builder__thumbnail" }, o_ = ["src"], s_ = { key: 1 }, c_ = /* @__PURE__ */ L({
	__name: "BaseActorPanel",
	props: {
		actorFilter: {},
		errorMessage: {},
		filteredActors: {},
		isLoadingActors: { type: Boolean },
		isLoadingBaseDraft: { type: Boolean },
		selectedBaseActor: {},
		selectedBaseActorUuid: {}
	},
	emits: [
		"actorDrop",
		"actorFilterChange",
		"baseActorChange"
	],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			let t = e.target;
			n("actorFilterChange", t?.value ?? "");
		}
		function i(e) {
			let t = e.target;
			n("baseActorChange", t?.value ?? "");
		}
		return (t, a) => (B(), V("section", Yg, [
			a[3] ||= U("div", { class: "npc-builder__panel-heading" }, [U("span", null, "1"), U("h2", null, "Base Actor")], -1),
			U("div", Xg, [U("label", Zg, [a[1] ||= U("span", null, "Search world actors", -1), U("input", {
				value: e.actorFilter,
				placeholder: "Filter actors",
				type: "search",
				onInput: r
			}, null, 40, Qg)]), U("label", $g, [a[2] ||= U("span", null, "Base statblock", -1), U("select", {
				disabled: e.isLoadingActors,
				value: e.selectedBaseActorUuid,
				onChange: i
			}, [U("option", t_, j(e.isLoadingActors ? "Loading actors..." : "Choose an actor"), 1), (B(!0), V(z, null, R(e.filteredActors, (e) => (B(), V("option", {
				key: e.uuid,
				value: e.uuid
			}, j(e.name), 9, n_))), 128))], 40, e_)])]),
			W(Wl, {
				class: "npc-builder__drop",
				description: "Use a world Actor as the starting statblock.",
				title: "Drop Actor",
				variant: "compact",
				onDropData: a[0] ||= (e) => n("actorDrop", e)
			}),
			e.errorMessage ? (B(), V("p", r_, j(e.errorMessage), 1)) : K("", !0),
			e.selectedBaseActor ? (B(), V("article", i_, [U("div", a_, [e.selectedBaseActor.img ? (B(), V("img", {
				key: 0,
				src: e.selectedBaseActor.img,
				alt: ""
			}, null, 8, o_)) : (B(), V("span", s_, j(I(qg)(e.selectedBaseActor.name)), 1))]), U("div", null, [U("strong", null, j(e.selectedBaseActor.name), 1), U("span", null, [
				G(j(e.selectedBaseActor.species || "Species not found") + " ", 1),
				e.selectedBaseActor.type ? (B(), V(z, { key: 0 }, [G(" - " + j(e.selectedBaseActor.type), 1)], 64)) : K("", !0),
				e.isLoadingBaseDraft ? (B(), V(z, { key: 1 }, [G("loading...")], 64)) : K("", !0)
			])])])) : K("", !0)
		]));
	}
}), l_ = { class: "npc-builder__build-preview" }, u_ = { class: "npc-builder__build-preview-heading" }, d_ = { class: "npc-builder__preview-grid" }, f_ = { key: 0 }, p_ = { key: 0 }, m_ = { key: 1 }, h_ = { class: "npc-builder__preview-grid-wide" }, g_ = {
	key: 0,
	class: "npc-builder__warnings"
}, __ = { key: 1 }, v_ = /* @__PURE__ */ L({
	__name: "BuildPreviewPanel",
	props: {
		advancementCount: {},
		buildPreviewStatus: {},
		buildPreviewWarnings: {},
		editedAdvanceCount: {},
		estimatedNpcXp: {},
		fallbackTrappingCount: {},
		ignoredTrappingCount: {},
		selectedSpellCount: {},
		traitCount: {},
		visibleTrappingCount: {}
	},
	setup(e) {
		return (t, n) => (B(), V("section", l_, [
			U("div", u_, [n[0] ||= U("h2", null, "Build Preview", -1), U("span", { class: A(["npc-builder__status-pill", { "npc-builder__status-pill--ready": e.buildPreviewStatus === "Ready" }]) }, j(e.buildPreviewStatus), 3)]),
			U("div", d_, [
				U("div", null, [
					n[1] ||= U("span", null, "Advances", -1),
					U("strong", null, j(e.advancementCount), 1),
					e.editedAdvanceCount ? (B(), V("small", f_, j(e.editedAdvanceCount) + " manually edited ", 1)) : K("", !0)
				]),
				U("div", null, [
					n[2] ||= U("span", null, "Trappings", -1),
					U("strong", null, j(e.visibleTrappingCount), 1),
					e.fallbackTrappingCount ? (B(), V("small", p_, j(e.fallbackTrappingCount) + " blank fallback ", 1)) : K("", !0),
					e.ignoredTrappingCount ? (B(), V("small", m_, j(e.ignoredTrappingCount) + " ignored ", 1)) : K("", !0)
				]),
				U("div", null, [n[3] ||= U("span", null, "Traits", -1), U("strong", null, j(e.traitCount), 1)]),
				U("div", null, [n[4] ||= U("span", null, "Spells", -1), U("strong", null, j(e.selectedSpellCount), 1)]),
				U("div", h_, [
					n[5] ||= U("span", null, "Estimated NPC XP", -1),
					U("strong", null, j(e.estimatedNpcXp.total), 1),
					U("small", null, j(e.estimatedNpcXp.characteristics) + " char / " + j(e.estimatedNpcXp.skills) + " skill / " + j(e.estimatedNpcXp.talents) + " talent ", 1)
				])
			]),
			e.buildPreviewWarnings.length ? (B(), V("ul", g_, [(B(!0), V(z, null, R(e.buildPreviewWarnings, (e) => (B(), V("li", { key: e }, j(e), 1))), 128))])) : (B(), V("p", __, " The draft has a base Actor, queued Career data, resolved trappings, and a portrait ready to apply. "))
		]));
	}
}), y_ = /* @__PURE__ */ L({
	__name: "BuildSummaryDetails",
	props: {
		advancementCount: {},
		baseActorName: {},
		careerItemCount: {},
		estimatedNpcXpTotal: {},
		finalActorName: {},
		finalCareerName: {},
		grantTotals: {},
		selectedSpellCount: {},
		traitCount: {},
		visibleTrappingCount: {}
	},
	setup(e) {
		return (t, n) => (B(), V("dl", null, [
			U("div", null, [n[0] ||= U("dt", null, "Build name", -1), U("dd", null, j(e.finalActorName), 1)]),
			U("div", null, [n[1] ||= U("dt", null, "Base actor", -1), U("dd", null, j(e.baseActorName), 1)]),
			U("div", null, [n[2] ||= U("dt", null, "Final career", -1), U("dd", null, j(e.finalCareerName), 1)]),
			U("div", null, [n[3] ||= U("dt", null, "Career items", -1), U("dd", null, j(e.careerItemCount), 1)]),
			U("div", null, [n[4] ||= U("dt", null, "Apply", -1), U("dd", null, j(e.advancementCount) + " advance rows, " + j(e.visibleTrappingCount) + " trappings, " + j(e.traitCount) + " traits, " + j(e.selectedSpellCount) + " spells ", 1)]),
			U("div", null, [n[5] ||= U("dt", null, "Extracted grants", -1), U("dd", null, j(e.grantTotals.characteristics) + " characteristics, " + j(e.grantTotals.skills) + " skills, " + j(e.grantTotals.talents) + " talents, " + j(e.grantTotals.trappings) + " trappings ", 1)]),
			U("div", null, [n[6] ||= U("dt", null, "Estimated NPC XP", -1), U("dd", null, j(e.estimatedNpcXpTotal), 1)])
		]));
	}
}), b_ = ["disabled"], x_ = ["src"], S_ = { key: 1 }, C_ = { key: 2 }, w_ = {
	key: 0,
	class: "npc-builder__portrait-path"
}, T_ = { key: 0 }, E_ = ["title"], D_ = {
	key: 1,
	class: "npc-builder__portrait-gallery"
}, O_ = { key: 0 }, k_ = { key: 1 }, A_ = {
	key: 0,
	class: "npc-builder__portrait-progress"
}, j_ = ["value"], M_ = { class: "npc-builder__portrait-strip" }, N_ = [
	"aria-label",
	"title",
	"onClick"
], P_ = ["src"], F_ = /* @__PURE__ */ L({
	__name: "PortraitPicker",
	props: {
		compactPortraitCandidates: {},
		finalCareer: {},
		finalPortraitPath: {},
		hiddenPortraitCandidateCount: {},
		isLoadingPortraitCandidates: { type: Boolean },
		portraitCandidates: {},
		portraitSearchProgress: {},
		portraitSearchProgressLabel: {},
		portraitSearchProgressValue: {},
		selectedPortraitCandidate: {},
		selectedPortraitCandidateKey: {}
	},
	emits: ["openGallery", "selectPortrait"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (B(), V(z, null, [
			U("button", {
				class: "npc-builder__portrait",
				disabled: !e.portraitCandidates.length,
				title: "Open portrait gallery",
				type: "button",
				onClick: r[0] ||= (e) => n("openGallery")
			}, [e.finalPortraitPath ? (B(), V("img", {
				key: 0,
				src: e.finalPortraitPath,
				alt: ""
			}, null, 8, x_)) : e.finalCareer ? (B(), V("strong", S_, j(I(qg)(e.finalCareer.name)), 1)) : (B(), V("span", C_, "No portrait selected"))], 8, b_),
			e.finalPortraitPath ? (B(), V("p", w_, [e.selectedPortraitCandidate ? (B(), V("strong", T_, j(e.selectedPortraitCandidate.label), 1)) : K("", !0), U("span", { title: e.finalPortraitPath }, j(e.finalPortraitPath), 9, E_)])) : K("", !0),
			e.portraitCandidates.length || e.isLoadingPortraitCandidates ? (B(), V("section", D_, [
				U("div", null, [r[2] ||= U("h2", null, "Portrait", -1), e.isLoadingPortraitCandidates ? (B(), V("span", O_, "Finding assets...")) : (B(), V("span", k_, j(e.portraitCandidates.length) + " options", 1))]),
				e.isLoadingPortraitCandidates && e.portraitSearchProgress ? (B(), V("div", A_, [U("progress", {
					value: e.portraitSearchProgressValue,
					max: "100"
				}, null, 8, j_), U("span", null, j(e.portraitSearchProgressLabel), 1)])) : K("", !0),
				U("div", M_, [(B(!0), V(z, null, R(e.compactPortraitCandidates, (t) => (B(), V("button", {
					key: t.key,
					"aria-label": I(Jg)(t),
					class: A({ "is-active": t.key === e.selectedPortraitCandidateKey }),
					title: I(Jg)(t),
					type: "button",
					onClick: (e) => n("selectPortrait", t)
				}, [U("img", {
					src: t.img,
					alt: ""
				}, null, 8, P_)], 10, N_))), 128)), e.hiddenPortraitCandidateCount > 0 ? (B(), V("button", {
					key: 0,
					class: "npc-builder__portrait-more",
					type: "button",
					onClick: r[1] ||= (e) => n("openGallery")
				}, " +" + j(e.hiddenPortraitCandidateCount), 1)) : K("", !0)])
			])) : K("", !0)
		], 64));
	}
}), I_ = {
	key: 0,
	class: "npc-builder__quick-traits"
}, L_ = ["onClick"], R_ = /* @__PURE__ */ L({
	__name: "TraitButtonGroup",
	props: {
		caption: {},
		title: {},
		traits: {}
	},
	emits: ["toggleTrait"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => e.traits.length ? (B(), V("section", I_, [U("div", null, [U("h2", null, j(e.title), 1), U("span", null, j(e.caption), 1)]), (B(!0), V(z, null, R(e.traits, (e) => (B(), V("button", {
			key: e.uuid,
			class: A({ "is-active": e.isSelected }),
			type: "button",
			onClick: (t) => n("toggleTrait", e)
		}, j(e.name), 11, L_))), 128))])) : K("", !0);
	}
}), z_ = { class: "npc-builder__summary" }, B_ = { class: "npc-builder__preview" }, V_ = { class: "npc-builder__field" }, H_ = ["placeholder", "value"], U_ = /* @__PURE__ */ L({
	__name: "BuildSidebar",
	props: {
		actorName: {},
		advancementCount: {},
		buildPreviewStatus: {},
		buildPreviewWarnings: {},
		careerItemCount: {},
		compactPortraitCandidates: {},
		editedAdvanceCount: {},
		estimatedNpcXp: {},
		fallbackTrappingCount: {},
		finalActorName: {},
		finalCareer: {},
		finalPortraitPath: {},
		grantTotals: {},
		hiddenPortraitCandidateCount: {},
		ignoredTrappingCount: {},
		isLoadingPortraitCandidates: { type: Boolean },
		optionalTraitOptions: {},
		portraitCandidates: {},
		portraitSearchProgress: {},
		portraitSearchProgressLabel: {},
		portraitSearchProgressValue: {},
		quickTraitOptions: {},
		selectedBaseActor: {},
		selectedPortraitCandidate: {},
		selectedPortraitCandidateKey: {},
		selectedSpellCount: {},
		suggestedActorName: {},
		traitCount: {},
		visibleTrappingCount: {}
	},
	emits: [
		"actorNameChange",
		"openPortraitGallery",
		"selectPortrait",
		"toggleOptionalTrait",
		"toggleQuickTrait"
	],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			let t = e.target;
			n("actorNameChange", t?.value ?? "");
		}
		return (t, i) => (B(), V("aside", z_, [U("section", B_, [
			W(F_, {
				"compact-portrait-candidates": e.compactPortraitCandidates,
				"final-career": e.finalCareer,
				"final-portrait-path": e.finalPortraitPath,
				"hidden-portrait-candidate-count": e.hiddenPortraitCandidateCount,
				"is-loading-portrait-candidates": e.isLoadingPortraitCandidates,
				"portrait-candidates": e.portraitCandidates,
				"portrait-search-progress": e.portraitSearchProgress,
				"portrait-search-progress-label": e.portraitSearchProgressLabel,
				"portrait-search-progress-value": e.portraitSearchProgressValue,
				"selected-portrait-candidate": e.selectedPortraitCandidate,
				"selected-portrait-candidate-key": e.selectedPortraitCandidateKey,
				onOpenGallery: i[0] ||= (e) => n("openPortraitGallery"),
				onSelectPortrait: i[1] ||= (e) => n("selectPortrait", e)
			}, null, 8, [
				"compact-portrait-candidates",
				"final-career",
				"final-portrait-path",
				"hidden-portrait-candidate-count",
				"is-loading-portrait-candidates",
				"portrait-candidates",
				"portrait-search-progress",
				"portrait-search-progress-label",
				"portrait-search-progress-value",
				"selected-portrait-candidate",
				"selected-portrait-candidate-key"
			]),
			U("label", V_, [i[4] ||= U("span", null, "NPC name", -1), U("input", {
				placeholder: e.suggestedActorName,
				value: e.actorName,
				type: "text",
				onInput: r
			}, null, 40, H_)]),
			W(R_, {
				caption: `${e.optionalTraitOptions.length} from base statblock`,
				traits: e.optionalTraitOptions,
				title: "Optional Traits",
				onToggleTrait: i[2] ||= (e) => n("toggleOptionalTrait", e)
			}, null, 8, ["caption", "traits"]),
			W(R_, {
				caption: `${e.quickTraitOptions.length} configured`,
				traits: e.quickTraitOptions,
				title: "Quick Traits",
				onToggleTrait: i[3] ||= (e) => n("toggleQuickTrait", e)
			}, null, 8, ["caption", "traits"]),
			W(v_, {
				"advancement-count": e.advancementCount,
				"build-preview-status": e.buildPreviewStatus,
				"build-preview-warnings": e.buildPreviewWarnings,
				"edited-advance-count": e.editedAdvanceCount,
				"estimated-npc-xp": e.estimatedNpcXp,
				"fallback-trapping-count": e.fallbackTrappingCount,
				"ignored-trapping-count": e.ignoredTrappingCount,
				"selected-spell-count": e.selectedSpellCount,
				"trait-count": e.traitCount,
				"visible-trapping-count": e.visibleTrappingCount
			}, null, 8, [
				"advancement-count",
				"build-preview-status",
				"build-preview-warnings",
				"edited-advance-count",
				"estimated-npc-xp",
				"fallback-trapping-count",
				"ignored-trapping-count",
				"selected-spell-count",
				"trait-count",
				"visible-trapping-count"
			]),
			W(y_, {
				"advancement-count": e.advancementCount,
				"base-actor-name": e.selectedBaseActor?.name ?? "Not selected",
				"career-item-count": e.careerItemCount,
				"estimated-npc-xp-total": e.estimatedNpcXp.total,
				"final-actor-name": e.finalActorName,
				"final-career-name": e.finalCareer?.name ?? "Not queued",
				"grant-totals": e.grantTotals,
				"selected-spell-count": e.selectedSpellCount,
				"trait-count": e.traitCount,
				"visible-trapping-count": e.visibleTrappingCount
			}, null, 8, [
				"advancement-count",
				"base-actor-name",
				"career-item-count",
				"estimated-npc-xp-total",
				"final-actor-name",
				"final-career-name",
				"grant-totals",
				"selected-spell-count",
				"trait-count",
				"visible-trapping-count"
			])
		])]));
	}
}), W_ = { class: "npc-builder__panel" }, G_ = {
	key: 0,
	class: "npc-builder__careers"
}, K_ = [
	"onDragenter",
	"onDragover",
	"onDrop"
], q_ = ["onDragstart"], J_ = { class: "npc-builder__thumbnail" }, Y_ = ["src"], X_ = { key: 1 }, Z_ = { class: "npc-builder__career-copy" }, Q_ = ["title"], $_ = ["value", "onInput"], ev = { class: "npc-builder__career-actions" }, tv = ["disabled", "onClick"], nv = ["disabled", "onClick"], rv = ["onClick"], iv = {
	key: 1,
	class: "npc-builder__empty"
}, av = /* @__PURE__ */ L({
	__name: "CareerQueuePanel",
	props: {
		careers: {},
		draggedCareerIndex: {},
		dragOverCareerIndex: {}
	},
	emits: [
		"careerDragEnd",
		"careerDragEnter",
		"careerDragOver",
		"careerDragStart",
		"careerDrop",
		"careerDropOnRow",
		"careerQuantityInput",
		"moveCareer",
		"removeCareer"
	],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (B(), V("section", W_, [
			r[3] ||= U("div", { class: "npc-builder__panel-heading" }, [U("span", null, "2"), U("h2", null, "Career Queue")], -1),
			W(Wl, {
				class: "npc-builder__drop npc-builder__drop--career",
				description: "Drop in build order. Drag rows to reorder.",
				title: "Drop Career Items",
				variant: "compact",
				onDropData: r[0] ||= (e) => n("careerDrop", e)
			}),
			e.careers.length ? (B(), V("ol", G_, [(B(!0), V(z, null, R(e.careers, (t, i) => (B(), V("li", {
				key: t.uuid,
				class: A({
					"is-dragging": e.draggedCareerIndex === i,
					"is-drop-target": e.dragOverCareerIndex === i
				}),
				onDragenter: ls((e) => n("careerDragEnter", i), ["prevent"]),
				onDragover: (e) => n("careerDragOver", i, e),
				onDrop: (e) => n("careerDropOnRow", i, e)
			}, [
				U("span", {
					"aria-label": "Drag to reorder career",
					class: "npc-builder__drag-handle",
					draggable: "true",
					role: "button",
					tabindex: "0",
					title: "Drag to reorder",
					onDragend: r[1] ||= (e) => n("careerDragEnd"),
					onDragstart: (e) => n("careerDragStart", i, e)
				}, " Move ", 40, q_),
				U("div", J_, [t.img ? (B(), V("img", {
					key: 0,
					src: t.img,
					alt: ""
				}, null, 8, Y_)) : (B(), V("span", X_, j(I(qg)(t.name)), 1))]),
				U("div", Z_, [
					U("strong", null, j(t.name), 1),
					U("span", null, [G(j(t.careerGroup || "Career") + " ", 1), t.level === null ? K("", !0) : (B(), V(z, { key: 0 }, [G(" level " + j(t.level), 1)], 64))]),
					U("small", {
						class: "npc-builder__career-counts",
						title: [
							`Characteristics: ${I(Kg)(t.grants.characteristics)}`,
							`Skills: ${I(Kg)(t.grants.skills)}`,
							`Talents: ${I(Kg)(t.grants.talents)}`,
							`Trappings: ${I(Kg)(t.grants.trappings)}`
						].join("\n")
					}, j(I(Gg)(t)), 9, Q_)
				]),
				U("label", null, [r[2] ||= U("span", null, "Qty", -1), U("input", {
					value: t.quantity,
					min: "1",
					type: "number",
					onInput: (e) => n("careerQuantityInput", i, e)
				}, null, 40, $_)]),
				U("div", ev, [
					U("button", {
						disabled: i === 0,
						title: "Move career earlier",
						type: "button",
						onClick: (e) => n("moveCareer", i, -1)
					}, " Up ", 8, tv),
					U("button", {
						disabled: i === e.careers.length - 1,
						title: "Move career later",
						type: "button",
						onClick: (e) => n("moveCareer", i, 1)
					}, " Down ", 8, nv),
					U("button", {
						type: "button",
						onClick: (e) => n("removeCareer", i)
					}, "Remove", 8, rv)
				])
			], 42, K_))), 128))])) : (B(), V("p", iv, "No careers queued yet."))
		]));
	}
}), ov = { class: "npc-builder__portrait-gallery-view" }, sv = { class: "npc-builder__portrait-gallery-summary" }, cv = { key: 0 }, lv = { key: 1 }, uv = { class: "npc-builder__portrait-grid" }, dv = ["title", "onClick"], fv = { class: "npc-builder__portrait-grid-image" }, pv = ["src"], mv = /* @__PURE__ */ L({
	__name: "PortraitGallery",
	props: {
		isLoadingPortraitCandidates: { type: Boolean },
		open: { type: Boolean },
		portraitCandidates: {},
		selectedPortraitCandidateKey: {}
	},
	emits: ["close", "selectPortrait"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (B(), H(xs, {
			open: e.open,
			title: "Portrait Gallery",
			onClose: r[0] ||= (e) => n("close")
		}, {
			default: zn(() => [U("div", ov, [U("div", sv, [U("strong", null, j(e.portraitCandidates.length) + " portrait options", 1), e.isLoadingPortraitCandidates ? (B(), V("span", cv, "Finding assets...")) : (B(), V("span", lv, "Click an image to use it for the generated NPC."))]), U("div", uv, [(B(!0), V(z, null, R(e.portraitCandidates, (t) => (B(), V("button", {
				key: t.key,
				class: A({ "is-active": t.key === e.selectedPortraitCandidateKey }),
				title: I(Jg)(t),
				type: "button",
				onClick: (e) => n("selectPortrait", t)
			}, [U("span", fv, [U("img", {
				src: t.img,
				alt: ""
			}, null, 8, pv)]), U("span", null, j(t.label), 1)], 10, dv))), 128))])])]),
			_: 1
		}, 8, ["open"]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/errors.ts
function hv(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not resolve that Actor drop.";
}
function gv(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish searching for portraits.";
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/useBaseActorSelection.ts
function _v(e, t) {
	let n = Ph(), { baseActors: r, selectedBaseActorUuid: i } = Ip(n), a = /* @__PURE__ */ F(""), o = q(() => {
		let e = a.value.trim().toLocaleLowerCase();
		return e ? r.value.filter((t) => t.name.toLocaleLowerCase().includes(e)) : r.value;
	}), s = q({
		get: () => i.value,
		set: (e) => {
			n.selectBaseActorUuid(e);
		}
	});
	async function c(r) {
		t.value = "";
		try {
			n.selectBaseActor(await e.resolveActorDrop(r));
		} catch (e) {
			t.value = hv(e);
		}
	}
	return {
		actorFilter: a,
		filteredActors: o,
		handleActorDrop: c,
		selectedBaseActorSelectValue: s
	};
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/useBuildPreview.ts
function vv() {
	let { advancements: e, careers: t, finalPortraitPath: n, selectedBaseActor: r, trappings: i } = Ip(Ph()), a = q(() => {
		let e = 0;
		for (let n of t.value) e += n.quantity;
		return e;
	}), o = q(() => i.value.filter((e) => !e.ignored).length), s = q(() => e.value.filter((e) => e.current !== e.careerValue).length), c = q(() => i.value.filter((e) => !e.ignored && e.resolution.status === "fallback").length), l = q(() => i.value.filter((e) => e.ignored).length), u = q(() => e.value.filter((e) => e.kind === "skill" && km(e.name) !== null).length), d = q(() => i.value.filter((e) => !e.ignored && e.resolution.status === "unresolved").length), f = q(() => {
		let e = [];
		return r.value || e.push("Choose a base Actor before building."), t.value.length || e.push("No Careers are queued."), u.value && e.push(`${u.value} skill rows still need a specialization.`), d.value && e.push(`${d.value} trappings have no item resolution yet.`), n.value || e.push("No portrait is selected."), e;
	});
	return {
		buildPreviewStatus: q(() => f.value.length ? "Review" : "Ready"),
		buildPreviewWarnings: f,
		careerItemCount: a,
		editedAdvanceCount: s,
		fallbackTrappingCount: c,
		ignoredTrappingCount: l,
		visibleTrappingCount: o
	};
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/useBuildTraits.ts
function yv() {
	let e = Ph(), { optionalTraits: t, quickTraits: n, traits: r } = Ip(e), i = q(() => new Set(r.value.map((e) => bv(e.name)))), a = q(() => t.value.map(s)), o = q(() => {
		let e = new Set(t.value.map((e) => bv(e.name)));
		return n.value.filter((t) => !e.has(bv(t.name))).map(s);
	});
	function s(e) {
		return {
			...e,
			isSelected: i.value.has(bv(e.name))
		};
	}
	function c(t) {
		let n = i.value.has(bv(t.name));
		e.setQuickTraitSelected(t, !n);
	}
	function l(t) {
		let n = i.value.has(bv(t.name));
		e.setOptionalTraitSelected(t, !n);
	}
	return {
		displayedQuickTraitOptions: o,
		optionalTraitOptions: a,
		toggleOptionalTrait: l,
		toggleQuickTrait: c
	};
}
function bv(e) {
	return e.trim().toLocaleLowerCase();
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/useCareerQueue.ts
function xv() {
	let e = Ph(), t = /* @__PURE__ */ F(null), n = /* @__PURE__ */ F(null);
	function r(t, n) {
		let r = n.target;
		r && e.setCareerQuantity(t, Number(r.value));
	}
	function i(e, r) {
		t.value = e, n.value = e, r.dataTransfer?.setData("text/plain", `npc-builder-career:${e}`), r.dataTransfer && (r.dataTransfer.effectAllowed = "move");
	}
	function a(e, t) {
		t.preventDefault(), n.value = e, t.dataTransfer && (t.dataTransfer.dropEffect = "move");
	}
	function o(n, r) {
		r.preventDefault(), t.value !== null && e.moveCareerToIndex(t.value, n), s();
	}
	function s() {
		t.value = null, n.value = null;
	}
	function c(e) {
		n.value = e;
	}
	function l(t, n) {
		e.moveCareer(t, n);
	}
	function u(t) {
		e.removeCareer(t);
	}
	return {
		clearCareerDragState: s,
		draggedCareerIndex: t,
		dragOverCareerIndex: n,
		handleCareerDragOver: a,
		handleCareerDragStart: i,
		handleCareerDrop: o,
		moveCareer: l,
		removeCareer: u,
		setCareerQuantity: r,
		setDragOverCareerIndex: c
	};
}
//#endregion
//#region src/functions/npc-builder/portrait-candidates.ts
var Sv = new Set([
	"and",
	"any",
	"the",
	"with",
	"without",
	"of",
	"or",
	"npc"
]);
function Cv(e) {
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
	}), Dv(t);
}
function wv(e, t) {
	let n = Ov(e);
	return n ? t.some((e) => Ov(e.img) === n) : !1;
}
function Tv(e) {
	let t = [];
	for (let n of e.careers) t.push(n.name, n.careerGroup);
	return e.selectedBaseActor && t.push(e.selectedBaseActor.name, e.selectedBaseActor.species), jv(t.flatMap((e) => Av(e)).filter((e) => e.length >= 3 && !Sv.has(e)));
}
function Ev(e, t) {
	let n = kv(e);
	return n ? t.some((e) => n.includes(e)) : !1;
}
function Dv(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.img.trim().toLocaleLowerCase();
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
function Ov(e) {
	return e.trim().toLocaleLowerCase();
}
function kv(e) {
	return e.trim().toLocaleLowerCase().replaceAll(/[_-]/g, " ").replaceAll(/[(),.:;[\]]/g, " ").replaceAll(/\s+/g, " ");
}
function Av(e) {
	let t = kv(e);
	return [t, ...t.split(" ")].filter(Boolean);
}
function jv(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/usePortraitCandidates.ts
function Mv(e, t) {
	let n = Ph(), { careers: r, finalPortraitPath: i, selectedBaseActor: a, selectedPortraitPath: o, settings: s } = Ip(n), c = /* @__PURE__ */ F([]), l = /* @__PURE__ */ F(!1), u = /* @__PURE__ */ F(!1), d = /* @__PURE__ */ F(null), f = 0, p = q(() => Cv({
		careers: r.value,
		selectedBaseActor: a.value
	})), m = q(() => Dv([...p.value, ...c.value])), h = q(() => m.value.slice(0, 10)), g = q(() => Math.max(0, m.value.length - h.value.length)), _ = q(() => m.value.find((e) => e.img === i.value)?.key ?? ""), v = q(() => m.value.find((e) => e.img === i.value) ?? null), y = q(() => {
		let e = d.value;
		return e ? e.maxDirectories <= 0 ? e.phase === "ready" ? 100 : 4 : Math.min(100, Math.round(e.directoriesVisited / e.maxDirectories * 100)) : 0;
	}), b = q(() => {
		let e = d.value;
		return e ? e.phase === "ready" ? `${e.candidatesFound} options found` : e.phase === "filesystem" ? e.maxDirectories <= 0 ? `${e.directoriesVisited} directories - ${e.currentLocation}` : `${e.directoriesVisited}/${e.maxDirectories} directories - ${e.currentLocation}` : e.currentLocation : "";
	});
	qn(() => [
		a.value?.uuid ?? "",
		s.value.searchCompendiumPortraitAssets,
		s.value.searchFoundryPortraitAssets,
		r.value.map((e) => e.uuid).join("|")
	], () => {
		C();
	}, { immediate: !0 }), qn([
		m,
		o,
		u
	], () => {
		o.value && !u.value && !wv(o.value, m.value) && n.selectPortrait("");
	}, { immediate: !0 });
	function x(e) {
		n.selectPortrait(e.img);
	}
	function S(e) {
		x(e), l.value = !1;
	}
	async function C() {
		let n = f + 1;
		if (f = n, !s.value.searchCompendiumPortraitAssets && !s.value.searchFoundryPortraitAssets) {
			c.value = [], d.value = null;
			return;
		}
		if (!a.value && !r.value.length) {
			c.value = [], d.value = null;
			return;
		}
		u.value = !0, c.value = [], d.value = {
			candidatesFound: 0,
			currentLocation: "Preparing portrait search",
			directoriesVisited: 0,
			maxDirectories: 0,
			phase: "world-documents"
		};
		try {
			let t = await e.listFoundryPortraitCandidates({
				careers: r.value,
				includeCompendiumAssets: s.value.searchCompendiumPortraitAssets,
				includeFilePickerAssets: s.value.searchFoundryPortraitAssets,
				selectedBaseActor: a.value
			}, (e) => {
				f === n && (d.value = e);
			});
			f === n && (c.value = t);
		} catch (e) {
			f === n && (t.value = gv(e));
		} finally {
			f === n && (u.value = !1);
		}
	}
	return {
		compactPortraitCandidates: h,
		hiddenPortraitCandidateCount: g,
		isLoadingPortraitCandidates: u,
		isPortraitGalleryOpen: l,
		portraitCandidates: m,
		portraitSearchProgress: d,
		portraitSearchProgressLabel: b,
		portraitSearchProgressValue: y,
		selectedPortraitCandidate: v,
		selectedPortraitCandidateKey: _,
		selectPortrait: x,
		selectPortraitFromGallery: S
	};
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab.vue?vue&type=script&setup=true&lang.ts
var Nv = { class: "npc-builder__layout" }, Pv = { class: "npc-builder__column" }, Fv = /* @__PURE__ */ L({
	__name: "NpcBuilderBuildTab",
	props: {
		bridge: {},
		isLoadingActors: { type: Boolean },
		isLoadingBaseDraft: { type: Boolean }
	},
	emits: ["careerDrop"],
	setup(e, { emit: t }) {
		let n = e, r = t, { actorName: i, advancements: a, careers: o, estimatedNpcXp: s, finalActorName: c, finalCareer: l, finalPortraitPath: u, grantTotals: d, selectedBaseActor: f, selectedSpells: p, suggestedActorName: m, traits: h } = Ip(Ph()), g = /* @__PURE__ */ F(""), { actorFilter: _, filteredActors: v, handleActorDrop: y, selectedBaseActorSelectValue: b } = _v(n.bridge, g), { clearCareerDragState: x, draggedCareerIndex: S, dragOverCareerIndex: C, handleCareerDragOver: w, handleCareerDragStart: T, handleCareerDrop: E, moveCareer: D, removeCareer: O, setCareerQuantity: ee, setDragOverCareerIndex: te } = xv(), { displayedQuickTraitOptions: ne, optionalTraitOptions: re, toggleOptionalTrait: ie, toggleQuickTrait: ae } = yv(), { buildPreviewStatus: k, buildPreviewWarnings: oe, careerItemCount: se, editedAdvanceCount: ce, fallbackTrappingCount: le, ignoredTrappingCount: ue, visibleTrappingCount: de } = vv(), { compactPortraitCandidates: fe, hiddenPortraitCandidateCount: pe, isLoadingPortraitCandidates: me, isPortraitGalleryOpen: he, portraitCandidates: ge, portraitSearchProgress: A, portraitSearchProgressLabel: _e, portraitSearchProgressValue: ve, selectedPortraitCandidate: ye, selectedPortraitCandidateKey: be, selectPortrait: xe, selectPortraitFromGallery: Se } = Mv(n.bridge, g);
		return (t, n) => (B(), V("section", Nv, [
			U("div", Pv, [W(c_, {
				"actor-filter": I(_),
				"error-message": g.value,
				"filtered-actors": I(v),
				"is-loading-actors": e.isLoadingActors,
				"is-loading-base-draft": e.isLoadingBaseDraft,
				"selected-base-actor": I(f),
				"selected-base-actor-uuid": I(b),
				onActorDrop: I(y),
				onActorFilterChange: n[0] ||= (e) => _.value = e,
				onBaseActorChange: n[1] ||= (e) => b.value = e
			}, null, 8, [
				"actor-filter",
				"error-message",
				"filtered-actors",
				"is-loading-actors",
				"is-loading-base-draft",
				"selected-base-actor",
				"selected-base-actor-uuid",
				"onActorDrop"
			]), W(av, {
				careers: I(o),
				"drag-over-career-index": I(C),
				"dragged-career-index": I(S),
				onCareerDragEnd: I(x),
				onCareerDragEnter: I(te),
				onCareerDragOver: I(w),
				onCareerDragStart: I(T),
				onCareerDrop: n[2] ||= (e) => r("careerDrop", e),
				onCareerDropOnRow: I(E),
				onCareerQuantityInput: I(ee),
				onMoveCareer: I(D),
				onRemoveCareer: I(O)
			}, null, 8, [
				"careers",
				"drag-over-career-index",
				"dragged-career-index",
				"onCareerDragEnd",
				"onCareerDragEnter",
				"onCareerDragOver",
				"onCareerDragStart",
				"onCareerDropOnRow",
				"onCareerQuantityInput",
				"onMoveCareer",
				"onRemoveCareer"
			])]),
			W(U_, {
				"actor-name": I(i),
				"advancement-count": I(a).length,
				"build-preview-status": I(k),
				"build-preview-warnings": I(oe),
				"career-item-count": I(se),
				"compact-portrait-candidates": I(fe),
				"edited-advance-count": I(ce),
				"estimated-npc-xp": I(s),
				"fallback-trapping-count": I(le),
				"final-actor-name": I(c),
				"final-career": I(l),
				"final-portrait-path": I(u),
				"grant-totals": I(d),
				"hidden-portrait-candidate-count": I(pe),
				"ignored-trapping-count": I(ue),
				"is-loading-portrait-candidates": I(me),
				"optional-trait-options": I(re),
				"portrait-candidates": I(ge),
				"portrait-search-progress": I(A),
				"portrait-search-progress-label": I(_e),
				"portrait-search-progress-value": I(ve),
				"quick-trait-options": I(ne),
				"selected-base-actor": I(f),
				"selected-portrait-candidate": I(ye),
				"selected-portrait-candidate-key": I(be),
				"selected-spell-count": I(p).length,
				"suggested-actor-name": I(m),
				"trait-count": I(h).length,
				"visible-trapping-count": I(de),
				onActorNameChange: n[3] ||= (e) => i.value = e,
				onOpenPortraitGallery: n[4] ||= (e) => he.value = !0,
				onSelectPortrait: I(xe),
				onToggleOptionalTrait: I(ie),
				onToggleQuickTrait: I(ae)
			}, null, 8, /* @__PURE__ */ "actor-name.advancement-count.build-preview-status.build-preview-warnings.career-item-count.compact-portrait-candidates.edited-advance-count.estimated-npc-xp.fallback-trapping-count.final-actor-name.final-career.final-portrait-path.grant-totals.hidden-portrait-candidate-count.ignored-trapping-count.is-loading-portrait-candidates.optional-trait-options.portrait-candidates.portrait-search-progress.portrait-search-progress-label.portrait-search-progress-value.quick-trait-options.selected-base-actor.selected-portrait-candidate.selected-portrait-candidate-key.selected-spell-count.suggested-actor-name.trait-count.visible-trapping-count.onSelectPortrait.onToggleOptionalTrait.onToggleQuickTrait".split(".")),
			W(mv, {
				"is-loading-portrait-candidates": I(me),
				open: I(he),
				"portrait-candidates": I(ge),
				"selected-portrait-candidate-key": I(be),
				onClose: n[5] ||= (e) => he.value = !1,
				onSelectPortrait: I(Se)
			}, null, 8, [
				"is-loading-portrait-candidates",
				"open",
				"portrait-candidates",
				"selected-portrait-candidate-key",
				"onSelectPortrait"
			])
		]));
	}
}), Iv = { class: "npc-builder__folder-setting" }, Lv = { class: "npc-builder__field" }, Rv = ["value"], zv = { value: "" }, Bv = ["value"], Vv = { class: "npc-builder__field" }, Hv = ["value"], Uv = ["disabled"], Wv = /* @__PURE__ */ L({
	__name: "FolderSetting",
	props: {
		buttonLabel: {},
		createName: {},
		defaultOptionLabel: {},
		disabled: { type: Boolean },
		folders: {},
		folderLabel: {},
		selectedUuid: {}
	},
	emits: [
		"createNameChange",
		"saveFolderName",
		"selectedUuidChange"
	],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			let t = e.target;
			n("selectedUuidChange", t?.value ?? "");
		}
		function i(e) {
			let t = e.target;
			n("createNameChange", t?.value ?? "");
		}
		return (t, a) => (B(), V("section", Iv, [
			U("label", Lv, [U("span", null, j(e.folderLabel), 1), U("select", {
				value: e.selectedUuid,
				onChange: r
			}, [U("option", zv, j(e.defaultOptionLabel), 1), (B(!0), V(z, null, R(e.folders, (e) => (B(), V("option", {
				key: e.uuid,
				value: e.uuid
			}, j(e.name), 9, Bv))), 128))], 40, Rv)]),
			U("label", Vv, [a[1] ||= U("span", null, "Create or use by name", -1), U("input", {
				value: e.createName,
				placeholder: "Folder name",
				type: "text",
				onInput: i
			}, null, 40, Hv)]),
			U("button", {
				disabled: e.disabled || !e.createName.trim(),
				type: "button",
				onClick: a[0] ||= (e) => n("saveFolderName")
			}, j(e.buttonLabel ?? "Save"), 9, Uv)
		]));
	}
}), Gv = { class: "npc-builder__panel" }, Kv = /* @__PURE__ */ L({
	__name: "ActorSourceSettings",
	props: {
		actorFolders: {},
		baseActorFolderName: {},
		baseActorFolderUuid: {},
		isBusy: { type: Boolean },
		outputActorFolderName: {},
		outputActorFolderUuid: {}
	},
	emits: [
		"baseActorFolderNameChange",
		"baseActorFolderUuidChange",
		"outputActorFolderNameChange",
		"outputActorFolderUuidChange",
		"saveBaseActorFolderName",
		"saveOutputActorFolderName"
	],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (B(), V("section", Gv, [
			r[6] ||= U("div", { class: "npc-builder__panel-heading" }, [U("span", null, "1"), U("h2", null, "Actor Sources")], -1),
			W(Wv, {
				"create-name": e.baseActorFolderName,
				disabled: e.isBusy,
				folders: e.actorFolders,
				"selected-uuid": e.baseActorFolderUuid,
				"default-option-label": "All world actors",
				"folder-label": "Base actor folder",
				onCreateNameChange: r[0] ||= (e) => n("baseActorFolderNameChange", e),
				onSaveFolderName: r[1] ||= (e) => n("saveBaseActorFolderName"),
				onSelectedUuidChange: r[2] ||= (e) => n("baseActorFolderUuidChange", e)
			}, null, 8, [
				"create-name",
				"disabled",
				"folders",
				"selected-uuid"
			]),
			W(Wv, {
				"create-name": e.outputActorFolderName,
				disabled: e.isBusy,
				folders: e.actorFolders,
				"selected-uuid": e.outputActorFolderUuid,
				"default-option-label": "Foundry default location",
				"folder-label": "Output actor folder",
				onCreateNameChange: r[3] ||= (e) => n("outputActorFolderNameChange", e),
				onSaveFolderName: r[4] ||= (e) => n("saveOutputActorFolderName"),
				onSelectedUuidChange: r[5] ||= (e) => n("outputActorFolderUuidChange", e)
			}, null, 8, [
				"create-name",
				"disabled",
				"folders",
				"selected-uuid"
			])
		]));
	}
}), qv = { class: "npc-builder__panel" }, Jv = { class: "npc-builder__check" }, Yv = ["checked"], Xv = { class: "npc-builder__check" }, Zv = ["checked"], Qv = { class: "npc-builder__check" }, $v = ["checked"], ey = { class: "npc-builder__check" }, ty = ["checked"], ny = { class: "npc-builder__check" }, ry = ["checked"], iy = /* @__PURE__ */ L({
	__name: "BaseActorFeatureSettings",
	props: {
		allowCharacteristics: { type: Boolean },
		allowSkills: { type: Boolean },
		allowTalents: { type: Boolean },
		allowTraits: { type: Boolean },
		allowTrappings: { type: Boolean }
	},
	emits: [
		"allowCharacteristicsChange",
		"allowSkillsChange",
		"allowTalentsChange",
		"allowTraitsChange",
		"allowTrappingsChange"
	],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			return !!e.target?.checked;
		}
		return (t, i) => (B(), V("section", qv, [
			i[10] ||= U("div", { class: "npc-builder__panel-heading" }, [U("span", null, "5"), U("h2", null, "Base Actor Features")], -1),
			U("label", Jv, [U("input", {
				checked: e.allowCharacteristics,
				type: "checkbox",
				onChange: i[0] ||= (e) => n("allowCharacteristicsChange", r(e))
			}, null, 40, Yv), i[5] ||= U("span", null, "Show base actor characteristics", -1)]),
			U("label", Xv, [U("input", {
				checked: e.allowSkills,
				type: "checkbox",
				onChange: i[1] ||= (e) => n("allowSkillsChange", r(e))
			}, null, 40, Zv), i[6] ||= U("span", null, "Show base actor skills", -1)]),
			U("label", Qv, [U("input", {
				checked: e.allowTalents,
				type: "checkbox",
				onChange: i[2] ||= (e) => n("allowTalentsChange", r(e))
			}, null, 40, $v), i[7] ||= U("span", null, "Show base actor talents", -1)]),
			U("label", ey, [U("input", {
				checked: e.allowTrappings,
				type: "checkbox",
				onChange: i[3] ||= (e) => n("allowTrappingsChange", r(e))
			}, null, 40, ty), i[8] ||= U("span", null, "Show base actor trappings", -1)]),
			U("label", ny, [U("input", {
				checked: e.allowTraits,
				type: "checkbox",
				onChange: i[4] ||= (e) => n("allowTraitsChange", r(e))
			}, null, 40, ry), i[9] ||= U("span", null, "Show base actor traits", -1)])
		]));
	}
}), ay = { class: "npc-builder__panel" }, oy = { class: "npc-builder__check" }, sy = ["checked"], cy = /* @__PURE__ */ L({
	__name: "MagicSpellSettings",
	props: { autoSelectGrantedSpells: { type: Boolean } },
	emits: ["autoSelectGrantedSpellsChange"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			let t = e.target;
			n("autoSelectGrantedSpellsChange", !!t?.checked);
		}
		return (t, n) => (B(), V("section", ay, [n[1] ||= U("div", { class: "npc-builder__panel-heading" }, [U("span", null, "6"), U("h2", null, "Magic and Spells")], -1), U("label", oy, [U("input", {
			checked: e.autoSelectGrantedSpells,
			type: "checkbox",
			onChange: r
		}, null, 40, sy), n[0] ||= U("span", null, "Select detected Lore spells by default", -1)])]));
	}
}), ly = { class: "npc-builder__panel" }, uy = { class: "npc-builder__check" }, dy = ["checked"], fy = /* @__PURE__ */ L({
	__name: "NamingSettings",
	props: { includeSpeciesInName: { type: Boolean } },
	emits: ["includeSpeciesInNameChange"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			let t = e.target;
			n("includeSpeciesInNameChange", !!t?.checked);
		}
		return (t, n) => (B(), V("section", ly, [n[1] ||= U("div", { class: "npc-builder__panel-heading" }, [U("span", null, "3"), U("h2", null, "Default Naming")], -1), U("label", uy, [U("input", {
			checked: e.includeSpeciesInName,
			type: "checkbox",
			onChange: r
		}, null, 40, dy), n[0] ||= U("span", null, "Include species in suggested names", -1)])]));
	}
}), py = { class: "npc-builder__panel" }, my = { class: "npc-builder__field" }, hy = ["value"], gy = { class: "npc-builder__check" }, _y = ["checked"], vy = ["disabled"], yy = ["disabled"], by = /* @__PURE__ */ L({
	__name: "OtherSettingsPanel",
	props: {
		askForLinkedSkillSpecializations: { type: Boolean },
		isBusy: { type: Boolean },
		lowerCareerMode: {}
	},
	emits: [
		"askForLinkedSkillSpecializationsChange",
		"lowerCareerModeChange",
		"resetSettings",
		"saveSettings"
	],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			let t = e.target?.value;
			(t === "auto-add-all" || t === "never" || t === "prompt") && n("lowerCareerModeChange", t);
		}
		function i(e) {
			let t = e.target;
			n("askForLinkedSkillSpecializationsChange", !!t?.checked);
		}
		return (t, a) => (B(), V("section", py, [
			a[5] ||= U("div", { class: "npc-builder__panel-heading" }, [U("span", null, "7"), U("h2", null, "Other Settings")], -1),
			U("label", my, [a[3] ||= U("span", null, "Lower career handling", -1), U("select", {
				value: e.lowerCareerMode,
				onChange: r
			}, [...a[2] ||= [
				U("option", { value: "prompt" }, "Prompt when candidates are found", -1),
				U("option", { value: "auto-add-all" }, "Automatically add all lower-tier matches", -1),
				U("option", { value: "never" }, "Only add dropped careers", -1)
			]], 40, hy)]),
			U("label", gy, [U("input", {
				checked: e.askForLinkedSkillSpecializations,
				type: "checkbox",
				onChange: i
			}, null, 40, _y), a[4] ||= U("span", null, "Resolve linked career skill repeats separately", -1)]),
			U("button", {
				disabled: e.isBusy,
				type: "button",
				onClick: a[0] ||= (e) => n("saveSettings")
			}, "Save Settings", 8, vy),
			U("button", {
				disabled: e.isBusy,
				type: "button",
				onClick: a[1] ||= (e) => n("resetSettings")
			}, " Reset to Defaults ", 8, yy)
		]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSettingsTab/portrait-search-labels.ts
function xy(e) {
	return e ? e.digDownActive ? e.digDownDeepFileSearchEnabled ? e.digDownCacheReady ? `Dig Down cache ready with ${e.digDownIndexedFileCount} indexed files.` : "Dig Down is active; its file cache is still building or unavailable." : "Dig Down is active, but its Deep File Search setting is disabled." : "Install and enable Dig Down to search local files for portrait suggestions." : "Checking Dig Down integration.";
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSettingsTab/PortraitSuggestionSettings.vue?vue&type=script&setup=true&lang.ts
var Sy = { class: "npc-builder__panel" }, Cy = { class: "npc-builder__check" }, wy = ["checked", "disabled"], Ty = { class: "npc-builder__setting-note" }, Ey = { class: "npc-builder__check" }, Dy = ["checked"], Oy = { class: "npc-builder__check" }, ky = ["checked"], Ay = /* @__PURE__ */ L({
	__name: "PortraitSuggestionSettings",
	props: {
		canUseDigDownPortraitSearch: { type: Boolean },
		searchCompendiumPortraitAssets: { type: Boolean },
		searchFoundryPortraitAssets: { type: Boolean },
		searchWebPortraitAssets: { type: Boolean },
		statusLabel: {}
	},
	emits: ["searchCompendiumPortraitAssetsChange", "searchFoundryPortraitAssetsChange"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			let t = e.target;
			n("searchFoundryPortraitAssetsChange", !!t?.checked);
		}
		function i(e) {
			let t = e.target;
			n("searchCompendiumPortraitAssetsChange", !!t?.checked);
		}
		return (t, n) => (B(), V("section", Sy, [
			n[3] ||= U("div", { class: "npc-builder__panel-heading" }, [U("span", null, "4"), U("h2", null, "Portrait Suggestions")], -1),
			U("label", Cy, [U("input", {
				checked: e.searchFoundryPortraitAssets,
				disabled: !e.canUseDigDownPortraitSearch,
				type: "checkbox",
				onChange: r
			}, null, 40, wy), n[0] ||= U("span", null, "Search Dig Down's file cache for portrait suggestions", -1)]),
			U("p", Ty, j(e.statusLabel), 1),
			U("label", Ey, [U("input", {
				checked: e.searchCompendiumPortraitAssets,
				type: "checkbox",
				onChange: i
			}, null, 40, Dy), n[1] ||= U("span", null, "Search Actor and Item compendiums for portrait suggestions", -1)]),
			U("label", Oy, [U("input", {
				checked: e.searchWebPortraitAssets,
				disabled: "",
				type: "checkbox"
			}, null, 8, ky), n[2] ||= U("span", null, "Search the web for portrait suggestions (later)", -1)])
		]));
	}
}), jy = { class: "npc-builder__panel" }, My = ["disabled"], Ny = /* @__PURE__ */ L({
	__name: "QuickTraitSettings",
	props: {
		isBusy: { type: Boolean },
		itemFolders: {},
		quickTraitFolderName: {},
		quickTraitFolderUuid: {}
	},
	emits: [
		"importRecommendedQuickTraits",
		"quickTraitFolderNameChange",
		"quickTraitFolderUuidChange",
		"saveQuickTraitFolderName"
	],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (B(), V("section", jy, [
			r[4] ||= U("div", { class: "npc-builder__panel-heading" }, [U("span", null, "2"), U("h2", null, "Quick Traits")], -1),
			W(Wv, {
				"create-name": e.quickTraitFolderName,
				disabled: e.isBusy,
				folders: e.itemFolders,
				"selected-uuid": e.quickTraitFolderUuid,
				"default-option-label": "No quick traits folder",
				"folder-label": "Quick traits folder",
				onCreateNameChange: r[0] ||= (e) => n("quickTraitFolderNameChange", e),
				onSaveFolderName: r[1] ||= (e) => n("saveQuickTraitFolderName"),
				onSelectedUuidChange: r[2] ||= (e) => n("quickTraitFolderUuidChange", e)
			}, null, 8, [
				"create-name",
				"disabled",
				"folders",
				"selected-uuid"
			]),
			U("button", {
				disabled: e.isBusy || !e.quickTraitFolderUuid,
				type: "button",
				onClick: r[3] ||= (e) => n("importRecommendedQuickTraits")
			}, " Import Recommended Quick Traits ", 8, My)
		]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSettingsTab/settings-payload.ts
function Py(e) {
	let { canUseDigDownPortraitSearch: t, settings: n } = e;
	return {
		allowBaseActorCharacteristics: n.allowBaseActorCharacteristics,
		allowBaseActorSkills: n.allowBaseActorSkills,
		allowBaseActorTalents: n.allowBaseActorTalents,
		allowBaseActorTraits: n.allowBaseActorTraits,
		allowBaseActorTrappings: n.allowBaseActorTrappings,
		askForLinkedSkillSpecializations: n.askForLinkedSkillSpecializations,
		autoSelectGrantedSpells: n.autoSelectGrantedSpells,
		baseActorFolderUuid: n.baseActorFolderUuid,
		includeSpeciesInName: n.includeSpeciesInName,
		lowerCareerMode: n.lowerCareerMode,
		outputActorFolderUuid: n.outputActorFolderUuid,
		quickTraitFolderUuid: n.quickTraitFolderUuid,
		searchCompendiumPortraitAssets: n.searchCompendiumPortraitAssets,
		searchFoundryPortraitAssets: t && n.searchFoundryPortraitAssets,
		searchWebPortraitAssets: n.searchWebPortraitAssets
	};
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSettingsTab/SettingsMessages.vue?vue&type=script&setup=true&lang.ts
var Fy = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, Iy = {
	key: 1,
	class: "npc-builder__message"
}, Ly = /* @__PURE__ */ L({
	__name: "SettingsMessages",
	props: {
		errorMessage: {},
		settingsMessage: {}
	},
	setup(e) {
		return (t, n) => e.errorMessage ? (B(), V("p", Fy, j(e.errorMessage), 1)) : e.settingsMessage ? (B(), V("p", Iy, j(e.settingsMessage), 1)) : K("", !0);
	}
}), Ry = { class: "npc-builder__settings" }, zy = /* @__PURE__ */ L({
	__name: "NpcBuilderSettingsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Ph(), { actorFolders: r, itemFolders: i, settings: a } = Ip(n), o = /* @__PURE__ */ F(""), s = /* @__PURE__ */ F(""), c = /* @__PURE__ */ F(!1), l = /* @__PURE__ */ F(""), u = /* @__PURE__ */ F(null), d = /* @__PURE__ */ F(""), f = /* @__PURE__ */ F(""), p = q(() => u.value?.digDownActive ?? !0), m = q(() => xy(u.value));
		Or(() => {
			C();
		}), qn(u, (e) => {
			e && !e.digDownActive && (a.value.searchFoundryPortraitAssets = !1);
		});
		async function h() {
			await v({
				ensureFolder: t.bridge.ensureActorFolder,
				name: o.value,
				refresh: y,
				setFolderUuid: (e) => {
					a.value.baseActorFolderUuid = e;
				}
			});
		}
		async function g() {
			await v({
				ensureFolder: t.bridge.ensureActorFolder,
				name: l.value,
				refresh: y,
				setFolderUuid: (e) => {
					a.value.outputActorFolderUuid = e;
				}
			});
		}
		async function _() {
			await v({
				ensureFolder: t.bridge.ensureItemFolder,
				name: d.value,
				refresh: b,
				setFolderUuid: (e) => {
					a.value.quickTraitFolderUuid = e;
				}
			}), await S();
		}
		async function v(e) {
			c.value = !0, s.value = "", f.value = "";
			try {
				let r = await e.ensureFolder(e.name);
				await e.refresh(), e.setFolderUuid(r.uuid), n.hydrateSettings(await t.bridge.saveSettings(O())), f.value = `Using folder "${r.name}".`;
			} catch (e) {
				s.value = D(e);
			} finally {
				c.value = !1;
			}
		}
		async function y() {
			n.hydrateActorFolders(await t.bridge.listActorFolders());
		}
		async function b() {
			n.hydrateItemFolders(await t.bridge.listItemFolders());
		}
		async function x() {
			n.hydrateBaseActors(await t.bridge.listBaseActors(a.value));
		}
		async function S() {
			n.hydrateQuickTraits(await t.bridge.listQuickTraits(a.value));
		}
		async function C() {
			u.value = await t.bridge.getPortraitSearchAvailability();
		}
		async function w() {
			c.value = !0, s.value = "", f.value = "";
			try {
				n.hydrateSettings(await t.bridge.saveSettings(O())), n.hydrateQuickTraits(await t.bridge.importRecommendedQuickTraits(a.value)), f.value = "Recommended quick traits imported.";
			} catch (e) {
				s.value = D(e);
			} finally {
				c.value = !1;
			}
		}
		async function T() {
			c.value = !0, s.value = "", f.value = "";
			try {
				n.hydrateSettings(await t.bridge.saveSettings(O())), await Promise.all([x(), S()]), f.value = "Settings saved.";
			} catch (e) {
				s.value = D(e);
			} finally {
				c.value = !1;
			}
		}
		async function E() {
			c.value = !0, s.value = "", f.value = "";
			try {
				n.hydrateSettings(await t.bridge.saveSettings(Qm())), await Promise.all([x(), S()]), f.value = "Settings reset to defaults.";
			} catch (e) {
				s.value = D(e);
			} finally {
				c.value = !1;
			}
		}
		function D(e) {
			return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
		}
		function O() {
			return Py({
				canUseDigDownPortraitSearch: p.value,
				settings: a.value
			});
		}
		return (e, t) => (B(), V("section", Ry, [
			W(Ly, {
				"error-message": s.value,
				"settings-message": f.value
			}, null, 8, ["error-message", "settings-message"]),
			W(Kv, {
				"actor-folders": I(r),
				"base-actor-folder-name": o.value,
				"base-actor-folder-uuid": I(a).baseActorFolderUuid,
				"is-busy": c.value,
				"output-actor-folder-name": l.value,
				"output-actor-folder-uuid": I(a).outputActorFolderUuid,
				onBaseActorFolderNameChange: t[0] ||= (e) => o.value = e,
				onBaseActorFolderUuidChange: t[1] ||= (e) => I(a).baseActorFolderUuid = e,
				onOutputActorFolderNameChange: t[2] ||= (e) => l.value = e,
				onOutputActorFolderUuidChange: t[3] ||= (e) => I(a).outputActorFolderUuid = e,
				onSaveBaseActorFolderName: h,
				onSaveOutputActorFolderName: g
			}, null, 8, [
				"actor-folders",
				"base-actor-folder-name",
				"base-actor-folder-uuid",
				"is-busy",
				"output-actor-folder-name",
				"output-actor-folder-uuid"
			]),
			W(Ny, {
				"is-busy": c.value,
				"item-folders": I(i),
				"quick-trait-folder-name": d.value,
				"quick-trait-folder-uuid": I(a).quickTraitFolderUuid,
				onImportRecommendedQuickTraits: w,
				onQuickTraitFolderNameChange: t[4] ||= (e) => d.value = e,
				onQuickTraitFolderUuidChange: t[5] ||= (e) => I(a).quickTraitFolderUuid = e,
				onSaveQuickTraitFolderName: _
			}, null, 8, [
				"is-busy",
				"item-folders",
				"quick-trait-folder-name",
				"quick-trait-folder-uuid"
			]),
			W(fy, {
				"include-species-in-name": I(a).includeSpeciesInName,
				onIncludeSpeciesInNameChange: t[6] ||= (e) => I(a).includeSpeciesInName = e
			}, null, 8, ["include-species-in-name"]),
			W(Ay, {
				"can-use-dig-down-portrait-search": p.value,
				"search-compendium-portrait-assets": I(a).searchCompendiumPortraitAssets,
				"search-foundry-portrait-assets": I(a).searchFoundryPortraitAssets,
				"search-web-portrait-assets": I(a).searchWebPortraitAssets,
				"status-label": m.value,
				onSearchCompendiumPortraitAssetsChange: t[7] ||= (e) => I(a).searchCompendiumPortraitAssets = e,
				onSearchFoundryPortraitAssetsChange: t[8] ||= (e) => I(a).searchFoundryPortraitAssets = e
			}, null, 8, [
				"can-use-dig-down-portrait-search",
				"search-compendium-portrait-assets",
				"search-foundry-portrait-assets",
				"search-web-portrait-assets",
				"status-label"
			]),
			W(iy, {
				"allow-characteristics": I(a).allowBaseActorCharacteristics,
				"allow-skills": I(a).allowBaseActorSkills,
				"allow-talents": I(a).allowBaseActorTalents,
				"allow-traits": I(a).allowBaseActorTraits,
				"allow-trappings": I(a).allowBaseActorTrappings,
				onAllowCharacteristicsChange: t[9] ||= (e) => I(a).allowBaseActorCharacteristics = e,
				onAllowSkillsChange: t[10] ||= (e) => I(a).allowBaseActorSkills = e,
				onAllowTalentsChange: t[11] ||= (e) => I(a).allowBaseActorTalents = e,
				onAllowTraitsChange: t[12] ||= (e) => I(a).allowBaseActorTraits = e,
				onAllowTrappingsChange: t[13] ||= (e) => I(a).allowBaseActorTrappings = e
			}, null, 8, [
				"allow-characteristics",
				"allow-skills",
				"allow-talents",
				"allow-traits",
				"allow-trappings"
			]),
			W(cy, {
				"auto-select-granted-spells": I(a).autoSelectGrantedSpells,
				onAutoSelectGrantedSpellsChange: t[14] ||= (e) => I(a).autoSelectGrantedSpells = e
			}, null, 8, ["auto-select-granted-spells"]),
			W(by, {
				"ask-for-linked-skill-specializations": I(a).askForLinkedSkillSpecializations,
				"is-busy": c.value,
				"lower-career-mode": I(a).lowerCareerMode,
				onAskForLinkedSkillSpecializationsChange: t[15] ||= (e) => I(a).askForLinkedSkillSpecializations = e,
				onLowerCareerModeChange: t[16] ||= (e) => I(a).lowerCareerMode = e,
				onResetSettings: E,
				onSaveSettings: T
			}, null, 8, [
				"ask-for-linked-skill-specializations",
				"is-busy",
				"lower-career-mode"
			])
		]));
	}
}), By = { class: "npc-builder__subview-stack" }, Vy = { class: "npc-builder__field" }, Hy = ["onUpdate:modelValue"], Uy = ["value"], Wy = { class: "npc-builder__subview-actions" }, Gy = /* @__PURE__ */ L({
	__name: "MagicLoreResolutionPromptContent",
	props: { prompt: {} },
	emits: ["applyLores", "keepUnresolved"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (B(), V("div", By, [
			r[4] ||= U("p", null, " Choose concrete magic Lores for ambiguous grants before automatic spells are detected. Unresolved grants can still use manually dropped spells. ", -1),
			(B(!0), V(z, null, R(e.prompt.rows, (e) => (B(), V("section", {
				key: e.resolutionKey,
				class: "npc-builder__resolution-row"
			}, [U("div", null, [U("strong", null, j(e.grantLabel), 1), U("small", null, j(e.sourceLabel) + " - " + j(e.rawLore || "Any Lore"), 1)]), U("label", Vy, [r[3] ||= U("span", null, "Lore", -1), Bn(U("select", { "onUpdate:modelValue": (t) => e.selectedLore = t }, [r[2] ||= U("option", { value: "" }, "Leave unresolved", -1), (B(!0), V(z, null, R(e.options, (e) => (B(), V("option", {
				key: e.key,
				value: e.value
			}, j(e.label) + j(e.wind && e.wind !== "None" ? ` (${e.wind})` : ""), 9, Uy))), 128))], 8, Hy), [[is, e.selectedLore]])])]))), 128)),
			U("div", Wy, [U("button", {
				type: "button",
				onClick: r[0] ||= (e) => n("keepUnresolved")
			}, "Keep Unresolved"), U("button", {
				type: "button",
				onClick: r[1] ||= (e) => n("applyLores")
			}, "Apply Lores")])
		]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSpellsTab/labels.ts
function Ky(e) {
	return e.kind === "arcane-magic" ? "Arcane Magic" : e.kind === "petty-magic" ? "Petty Magic" : "Spellcaster";
}
function qy(e) {
	return `${Ky(e)} from ${e.sourceName}`;
}
function Jy(e) {
	return e.source === "talent" ? "Talent" : "Trait";
}
function Yy(e) {
	return e.source === "custom" ? "Dropped" : e.sourceLabel;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSpellsTab/MagicAccessPanel.vue?vue&type=script&setup=true&lang.ts
var Xy = { class: "npc-builder__panel" }, Zy = {
	key: 0,
	class: "npc-builder__empty"
}, Qy = {
	key: 1,
	class: "npc-builder__magic-grants"
}, $y = { key: 0 }, eb = { key: 1 }, tb = {
	key: 2,
	class: "npc-builder__panel-actions"
}, nb = ["disabled"], rb = /* @__PURE__ */ L({
	__name: "MagicAccessPanel",
	props: {
		ambiguousGrantCount: {},
		isLoadingLoreOptions: { type: Boolean },
		magicGrants: {}
	},
	emits: ["resolveLores"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (B(), V("section", Xy, [
			r[1] ||= U("div", { class: "npc-builder__panel-heading" }, [U("span", null, "1"), U("h2", null, "Magic Access")], -1),
			e.magicGrants.length ? (B(), V("div", Qy, [(B(!0), V(z, null, R(e.magicGrants, (e) => (B(), V("article", { key: `${e.source}:${e.sourceName}:${e.rawLore}` }, [
				U("strong", null, j(I(Ky)(e)), 1),
				U("span", null, j(I(Jy)(e)) + " - " + j(e.sourceName), 1),
				e.isAmbiguous ? (B(), V("small", $y, " Needs Lore resolution before automatic spells can be found. ")) : (B(), V("small", eb, " Lore: " + j(e.rawLore || e.normalizedLore), 1))
			]))), 128))])) : (B(), V("p", Zy, " No magic-enabling Talent or Trait is selected. ")),
			e.ambiguousGrantCount ? (B(), V("div", tb, [U("button", {
				disabled: e.isLoadingLoreOptions,
				type: "button",
				onClick: r[0] ||= (e) => n("resolveLores")
			}, j(e.isLoadingLoreOptions ? "Loading Lores..." : "Resolve Lores"), 9, nb)])) : K("", !0)
		]));
	}
}), ib = { class: "npc-builder__panel" }, ab = { class: "npc-builder__panel-actions" }, ob = ["disabled"], sb = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, cb = {
	key: 1,
	class: "npc-builder__message npc-builder__message--error"
}, lb = {
	key: 2,
	class: "npc-builder__table"
}, ub = ["checked", "onChange"], db = { class: "npc-builder__spell-name" }, fb = { class: "npc-builder__spell-icon" }, pb = ["src"], mb = ["onClick"], hb = { key: 1 }, gb = {
	key: 3,
	class: "npc-builder__empty"
}, _b = /* @__PURE__ */ L({
	__name: "SpellSelectionPanel",
	props: {
		ambiguousGrantCount: {},
		errorMessage: {},
		isLoadingSpells: { type: Boolean },
		resolvedGrantCount: {},
		selectedSpellCount: {},
		spells: {}
	},
	emits: [
		"refreshSpells",
		"removeCustomSpell",
		"spellDrop",
		"spellSelectedChange"
	],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (B(), V("section", ib, [
			r[3] ||= U("div", { class: "npc-builder__panel-heading" }, [U("span", null, "2"), U("h2", null, "Spells")], -1),
			W(Wl, {
				class: "npc-builder__drop npc-builder__drop--career",
				description: "Add a specific Spell item regardless of detected Lores.",
				title: "Drop Spell Items",
				onDropData: r[0] ||= (e) => n("spellDrop", e)
			}),
			U("div", ab, [U("button", {
				disabled: e.isLoadingSpells || !e.resolvedGrantCount,
				type: "button",
				onClick: r[1] ||= (e) => n("refreshSpells")
			}, j(e.isLoadingSpells ? "Finding spells..." : "Refresh Spells"), 9, ob), U("span", null, j(e.selectedSpellCount) + " selected / " + j(e.spells.length) + " found", 1)]),
			e.errorMessage ? (B(), V("p", sb, j(e.errorMessage), 1)) : K("", !0),
			e.ambiguousGrantCount ? (B(), V("p", cb, j(e.ambiguousGrantCount) + " magic grant" + j(e.ambiguousGrantCount === 1 ? "" : "s") + " still need Lore resolution. You can still drop specific spells for now. ", 1)) : K("", !0),
			e.spells.length ? (B(), V("div", lb, [r[2] ||= U("div", { class: "npc-builder__table-head npc-builder__table-head--spells" }, [
				U("span", null, "Use"),
				U("span", null, "Spell"),
				U("span", null, "Lore"),
				U("span", null, "Source"),
				U("span")
			], -1), (B(!0), V(z, null, R(e.spells, (e) => (B(), V("article", {
				key: e.key,
				class: "npc-builder__spell-row"
			}, [
				U("input", {
					checked: e.selected,
					type: "checkbox",
					onChange: (t) => n("spellSelectedChange", e, t)
				}, null, 40, ub),
				U("div", db, [U("span", fb, [e.img ? (B(), V("img", {
					key: 0,
					src: e.img,
					alt: ""
				}, null, 8, pb)) : K("", !0)]), U("strong", null, j(e.name), 1)]),
				U("span", null, j(e.loreName || "Unknown"), 1),
				U("span", null, j(I(Yy)(e)), 1),
				e.source === "custom" ? (B(), V("button", {
					key: 0,
					type: "button",
					onClick: (t) => n("removeCustomSpell", e.key)
				}, " Remove ", 8, mb)) : (B(), V("span", hb))
			]))), 128))])) : (B(), V("p", gb, " No matching spells found yet. Drop specific spells here, or resolve a non-ambiguous magic Lore. "))
		]));
	}
}), vb = { class: "npc-builder__stack" }, yb = /* @__PURE__ */ L({
	__name: "NpcBuilderSpellsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Ph(), { magicGrants: r, spells: i, selectedSpells: a } = Ip(n), o = /* @__PURE__ */ F(""), s = /* @__PURE__ */ F(!1), c = /* @__PURE__ */ F(!1), l = /* @__PURE__ */ F([]), u = /* @__PURE__ */ F(null), d = 0, f = q(() => r.value.filter((e) => e.isAmbiguous)), p = q(() => r.value.length - f.value.length);
		Or(() => {
			g(), h();
		}), qn(() => r.value.map((e) => `${e.kind}:${e.sourceName}:${e.rawLore}`).sort().join("|"), () => {
			h();
		});
		function m(e, t) {
			let r = t.target;
			r && n.setSpellSelected(e.key, r.checked);
		}
		async function h() {
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
				d === e && (o.value = x(t));
			} finally {
				d === e && (s.value = !1);
			}
		}
		async function g() {
			if (!(l.value.length || c.value)) {
				c.value = !0;
				try {
					l.value = await t.bridge.listMagicLoreOptions();
				} catch (e) {
					o.value = x(e);
				} finally {
					c.value = !1;
				}
			}
		}
		async function _() {
			o.value = "", await g(), u.value = { rows: f.value.map((e) => ({
				grantLabel: qy(e),
				options: fh(e, l.value),
				rawLore: e.rawLore,
				resolutionKey: e.resolutionKey,
				selectedLore: "",
				sourceLabel: Jy(e)
			})) };
		}
		function v() {
			let e = u.value;
			if (e) {
				for (let t of e.rows) n.setMagicGrantLoreResolution(t.resolutionKey, t.selectedLore);
				u.value = null, h();
			}
		}
		function y() {
			u.value = null;
		}
		async function b(e) {
			o.value = "";
			try {
				n.addCustomSpell(await t.bridge.resolveSpellDrop(e));
			} catch (e) {
				o.value = x(e);
			}
		}
		function x(e) {
			return e instanceof Error ? e.message : "The NPC Builder could not finish that spell action.";
		}
		return (e, t) => (B(), V("section", vb, [
			W(xs, {
				open: u.value !== null,
				title: "Resolve Magic Lores",
				onClose: y
			}, {
				default: zn(() => [u.value ? (B(), H(Gy, {
					key: 0,
					prompt: u.value,
					onApplyLores: v,
					onKeepUnresolved: y
				}, null, 8, ["prompt"])) : K("", !0)]),
				_: 1
			}, 8, ["open"]),
			W(rb, {
				"ambiguous-grant-count": f.value.length,
				"is-loading-lore-options": c.value,
				"magic-grants": I(r),
				onResolveLores: _
			}, null, 8, [
				"ambiguous-grant-count",
				"is-loading-lore-options",
				"magic-grants"
			]),
			W(_b, {
				"ambiguous-grant-count": f.value.length,
				"error-message": o.value,
				"is-loading-spells": s.value,
				"resolved-grant-count": p.value,
				"selected-spell-count": I(a).length,
				spells: I(i),
				onRefreshSpells: h,
				onRemoveCustomSpell: I(n).removeCustomSpell,
				onSpellDrop: b,
				onSpellSelectedChange: m
			}, null, 8, [
				"ambiguous-grant-count",
				"error-message",
				"is-loading-spells",
				"resolved-grant-count",
				"selected-spell-count",
				"spells",
				"onRemoveCustomSpell"
			])
		]));
	}
}), bb = { class: "npc-builder__stack" }, xb = { class: "npc-builder__panel" }, Sb = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, Cb = { class: "npc-builder__table" }, wb = { class: "npc-builder__trait-name" }, Tb = { key: 0 }, Eb = { key: 1 }, Db = { class: "npc-builder__trait-config" }, Ob = { class: "npc-builder__mini-field" }, kb = ["value", "onInput"], Ab = {
	key: 0,
	class: "npc-builder__mini-field"
}, jb = ["value", "onChange"], Mb = ["value"], Nb = {
	key: 1,
	class: "npc-builder__mini-field"
}, Pb = ["value", "onInput"], Fb = ["onClick"], Ib = /* @__PURE__ */ L({
	__name: "NpcBuilderTraitsTab",
	props: {
		bridge: {},
		difficultyOptions: {}
	},
	setup(e) {
		let t = e, n = Ph(), { traits: r } = Ip(n), i = /* @__PURE__ */ F("");
		function a(e) {
			return e.source === "base" ? "Base" : e.source === "quick" ? "Quick" : e.source === "optional" ? "Optional" : "Custom";
		}
		function o(e) {
			if (e.source === "base") {
				n.setBaseTraitIgnored(e.key, !0);
				return;
			}
			n.removeCustomTrait(e.key);
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
		return (t, n) => (B(), V("section", bb, [U("section", xb, [
			n[3] ||= U("div", { class: "npc-builder__panel-heading" }, [U("span", null, "1"), U("h2", null, "Traits")], -1),
			W(Wl, {
				class: "npc-builder__drop npc-builder__drop--career",
				description: "Add creature traits or NPC trait items.",
				title: "Drop Trait Items",
				onDropData: c
			}),
			i.value ? (B(), V("p", Sb, j(i.value), 1)) : K("", !0),
			U("div", Cb, [n[2] ||= U("div", { class: "npc-builder__table-head npc-builder__table-head--traits" }, [
				U("span", null, "Name"),
				U("span", null, "Source"),
				U("span", null, "Config"),
				U("span")
			], -1), (B(!0), V(z, null, R(I(r), (t) => (B(), V("article", {
				key: t.key,
				class: "npc-builder__trait-row"
			}, [
				U("div", wb, [
					U("strong", null, j(t.name), 1),
					t.config.rollable ? (B(), V("span", Tb, "Rollable")) : K("", !0),
					t.config.damage ? (B(), V("span", Eb, "Damage")) : K("", !0)
				]),
				U("span", null, j(a(t)), 1),
				U("div", Db, [
					U("label", Ob, [U("span", null, j(t.config.damage ? "Damage" : "Specification"), 1), U("input", {
						value: t.config.specification,
						placeholder: "None",
						type: "text",
						onInput: (e) => s(t, "specification", e)
					}, null, 40, kb)]),
					t.config.rollable && !t.config.damage ? (B(), V("label", Ab, [n[0] ||= U("span", null, "Difficulty", -1), U("select", {
						value: t.config.defaultDifficulty,
						onChange: (e) => s(t, "defaultDifficulty", e)
					}, [(B(!0), V(z, null, R(e.difficultyOptions, (e) => (B(), V("option", {
						key: e.value,
						value: e.value
					}, j(e.label), 9, Mb))), 128))], 40, jb)])) : K("", !0),
					t.config.damage && t.config.dice ? (B(), V("label", Nb, [n[1] ||= U("span", null, "Dice", -1), U("input", {
						value: t.config.dice,
						placeholder: "Optional",
						type: "text",
						onInput: (e) => s(t, "dice", e)
					}, null, 40, Pb)])) : K("", !0)
				]),
				U("button", {
					type: "button",
					onClick: (e) => o(t)
				}, "Remove", 8, Fb)
			]))), 128))])
		])]));
	}
}), Lb = "__blank-item__";
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderTrappingsTab/resolution-labels.ts
function Rb(e) {
	return e.source === "base" ? "Base" : e.source === "career" ? "Career" : "Custom";
}
function zb(e) {
	return e.resolution.status === "matched" ? `Matched ${e.resolution.selectedName}` : e.resolution.status === "fallback" ? `Blank ${e.resolution.selectedName || e.name}` : e.resolution.candidates.length ? "Choose a match" : "Needs resolution";
}
function Bb(e) {
	return e.ignored ? "Ignored" : e.resolution.status === "matched" ? "Matched" : e.resolution.status === "fallback" ? "Blank item" : e.resolution.status === "ambiguous" || e.resolution.candidates.length ? "Choose" : "Needs resolution";
}
function Vb(e) {
	let t = "npc-builder__status-pill";
	return e.ignored ? [t, "npc-builder__status-pill--muted"] : e.resolution.status === "matched" ? [t, "npc-builder__status-pill--success"] : e.resolution.status === "fallback" ? [t, "npc-builder__status-pill--fallback"] : e.resolution.status === "ambiguous" || e.resolution.candidates.length ? [t, "npc-builder__status-pill--warning"] : [t, "npc-builder__status-pill--danger"];
}
function Hb(e) {
	return e.ignored ? "" : e.resolution.status === "matched" ? "is-resolution-matched" : e.resolution.status === "fallback" ? "is-resolution-fallback" : e.resolution.status === "ambiguous" || e.resolution.candidates.length ? "is-resolution-choice" : "is-resolution-unresolved";
}
function Ub(e) {
	return e.resolution.status === "fallback" ? Lb : e.resolution.selectedCandidateUuid;
}
function Wb(e) {
	return e.source === "career";
}
function Gb(e) {
	return e.resolution.candidates.length > 0 || Wb(e);
}
function Kb(e) {
	return e.resolution.searchTerms.length <= 1 ? "" : `Options: ${e.resolution.searchTerms.join(" / ")}`;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderTrappingsTab/TrappingsTable.vue?vue&type=script&setup=true&lang.ts
var qb = { class: "npc-builder__table" }, Jb = ["checked", "onChange"], Yb = { class: "npc-builder__trapping-name" }, Xb = { key: 0 }, Zb = { class: "npc-builder__trapping-resolution" }, Qb = ["value", "onChange"], $b = {
	key: 0,
	value: ""
}, ex = ["value"], tx = ["value"], nx = { key: 1 }, rx = ["value", "onInput"], ix = ["onClick"], ax = { key: 1 }, ox = /* @__PURE__ */ L({
	__name: "TrappingsTable",
	props: { trappings: {} },
	emits: [
		"quantityInput",
		"removeCustomTrapping",
		"resolutionChange",
		"useChange"
	],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (B(), V("div", qb, [r[0] ||= U("div", { class: "npc-builder__table-head npc-builder__table-head--traps" }, [
			U("span", null, "Use"),
			U("span", null, "Name"),
			U("span", null, "Resolution"),
			U("span", null, "Type"),
			U("span", null, "Qty"),
			U("span", null, "Source"),
			U("span")
		], -1), (B(!0), V(z, null, R(e.trappings, (e) => (B(), V("article", {
			key: e.key,
			class: A(["npc-builder__trapping-row", [I(Hb)(e), { "is-ignored": e.ignored }]])
		}, [
			U("input", {
				checked: !e.ignored,
				type: "checkbox",
				onChange: (t) => n("useChange", e.key, t)
			}, null, 40, Jb),
			U("div", Yb, [U("strong", null, j(e.name), 1), I(Kb)(e) ? (B(), V("span", Xb, j(I(Kb)(e)), 1)) : K("", !0)]),
			U("div", Zb, [U("span", { class: A(I(Vb)(e)) }, j(I(Bb)(e)), 3), I(Gb)(e) ? (B(), V("select", {
				key: 0,
				value: I(Ub)(e),
				onChange: (t) => n("resolutionChange", e.key, t)
			}, [
				e.resolution.candidates.length ? (B(), V("option", $b, "Choose match")) : K("", !0),
				(B(!0), V(z, null, R(e.resolution.candidates, (e) => (B(), V("option", {
					key: e.uuid,
					value: e.uuid
				}, j(e.name) + " (" + j(e.sourceLabel) + ") ", 9, ex))), 128)),
				I(Wb)(e) ? (B(), V("option", {
					key: 1,
					value: I(Lb)
				}, "Blank Item", 8, tx)) : K("", !0)
			], 40, Qb)) : (B(), V("span", nx, j(I(zb)(e)), 1))]),
			U("span", null, j(e.resolution.selectedItemType || e.itemType || "trapping"), 1),
			U("input", {
				value: e.quantity,
				min: "1",
				type: "number",
				onInput: (t) => n("quantityInput", e.key, t)
			}, null, 40, rx),
			U("span", null, j(I(Rb)(e)), 1),
			e.source === "custom" ? (B(), V("button", {
				key: 0,
				type: "button",
				onClick: (t) => n("removeCustomTrapping", e.key)
			}, " Remove ", 8, ix)) : (B(), V("span", ax))
		], 2))), 128))]));
	}
}), sx = { class: "npc-builder__stack" }, cx = { class: "npc-builder__panel" }, lx = { class: "npc-builder__panel-actions" }, ux = ["disabled"], dx = { key: 0 }, fx = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, px = /* @__PURE__ */ L({
	__name: "NpcBuilderTrappingsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Ph(), { trappings: r } = Ip(n), i = /* @__PURE__ */ F(""), a = /* @__PURE__ */ F(!1), o = q(() => r.value.filter((e) => !e.ignored && e.resolution.status === "unresolved"));
		Or(() => {
			u();
		});
		function s(e, t) {
			let r = t.target;
			r && n.setTrappingQuantity(e, Number(r.value));
		}
		function c(e, t) {
			let r = t.target;
			r && n.setTrappingIgnored(e, !r.checked);
		}
		function l(e, t) {
			let r = t.target;
			if (r?.value) {
				if (r.value === "__blank-item__") {
					n.setTrappingFallback(e);
					return;
				}
				n.selectTrappingResolutionCandidate(e, r.value);
			}
		}
		async function u() {
			if (o.value.length) {
				a.value = !0, i.value = "";
				try {
					for (let e of o.value) n.setTrappingResolution(e.key, await t.bridge.resolveTrapping(e.name));
				} catch (e) {
					i.value = f(e);
				} finally {
					a.value = !1;
				}
			}
		}
		async function d(e) {
			i.value = "";
			try {
				n.addCustomTrapping(await t.bridge.resolveTrappingDrop(e));
			} catch (e) {
				i.value = f(e);
			}
		}
		function f(e) {
			return e instanceof Error ? e.message : "The NPC Builder could not resolve that Trapping drop.";
		}
		return (e, t) => (B(), V("section", sx, [U("section", cx, [
			t[0] ||= U("div", { class: "npc-builder__panel-heading" }, [U("span", null, "1"), U("h2", null, "Trappings")], -1),
			W(Wl, {
				class: "npc-builder__drop npc-builder__drop--career",
				description: "Add weapons, armour, containers, or any other item.",
				title: "Drop Trapping Items",
				onDropData: d
			}),
			U("div", lx, [U("button", {
				disabled: a.value || !o.value.length,
				type: "button",
				onClick: u
			}, j(a.value ? "Resolving..." : "Resolve Trappings"), 9, ux), o.value.length ? (B(), V("span", dx, j(o.value.length) + " unresolved ", 1)) : K("", !0)]),
			i.value ? (B(), V("p", fx, j(i.value), 1)) : K("", !0),
			W(ox, {
				trappings: I(r),
				onQuantityInput: s,
				onRemoveCustomTrapping: I(n).removeCustomTrapping,
				onResolutionChange: l,
				onUseChange: c
			}, null, 8, ["trappings", "onRemoveCustomTrapping"])
		])]));
	}
}), mx = { class: "npc-builder__subview-stack" }, hx = { class: "npc-builder__field" }, gx = ["onUpdate:modelValue"], _x = ["value"], vx = ["onUpdate:modelValue", "placeholder"], yx = {
	key: 0,
	class: "npc-builder__suggestions"
}, bx = { key: 0 }, xx = ["onClick"], Sx = {
	key: 0,
	class: "npc-builder__linked-note"
}, Cx = { class: "npc-builder__subview-actions" }, wx = /* @__PURE__ */ L({
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
		return (t, r) => (B(), V("div", mx, [
			r[4] ||= U("p", null, " Some Career skills need a specialization before they become concrete WFRP skills. Blank rows can be left unresolved and edited later. ", -1),
			(B(!0), V(z, null, R(e.prompt.rows, (t) => (B(), V("section", {
				key: t.resolutionKey,
				class: "npc-builder__resolution-row"
			}, [
				U("div", null, [U("strong", null, j(e.getSkillResolutionLabel(t)), 1), U("small", null, j(t.careerLabel), 1)]),
				U("label", hx, [r[3] ||= U("span", null, "Specialization", -1), t.options.length > 1 ? Bn((B(), V("select", {
					key: 0,
					"onUpdate:modelValue": (e) => t.resolvedSpecialization = e
				}, [r[2] ||= U("option", { value: "" }, "Leave unresolved", -1), (B(!0), V(z, null, R(t.options, (e) => (B(), V("option", {
					key: e,
					value: e
				}, j(e), 9, _x))), 128))], 8, gx)), [[is, t.resolvedSpecialization]]) : Bn((B(), V("input", {
					key: 1,
					"onUpdate:modelValue": (e) => t.resolvedSpecialization = e,
					placeholder: t.suggestedSpecializations.length ? "Type or choose below" : t.specialization,
					type: "text"
				}, null, 8, vx)), [[rs, t.resolvedSpecialization]])]),
				e.usesFreeformSkillSpecialization(t) ? (B(), V("div", yx, [t.isLoadingSuggestions ? (B(), V("small", bx, "Finding known choices.")) : K("", !0), (B(!0), V(z, null, R(t.suggestedSpecializations, (e) => (B(), V("button", {
					key: `${t.resolutionKey}:${e}`,
					type: "button",
					onClick: (r) => n("chooseSkillSpecialization", t, e)
				}, j(e), 9, xx))), 128))])) : K("", !0)
			]))), 128)),
			e.prompt.linkedRows.length ? (B(), V("div", Sx, j(e.prompt.linkedRows.length) + " linked skill specialization" + j(e.prompt.linkedRows.length === 1 ? "" : "s") + " will reuse earlier choices from this career chain. ", 1)) : K("", !0),
			U("div", Cx, [U("button", {
				type: "button",
				onClick: r[0] ||= (e) => n("addWithoutResolving")
			}, "Add Without Resolving"), U("button", {
				type: "button",
				onClick: r[1] ||= (e) => n("applySpecializations")
			}, "Apply Specializations")])
		]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/errors.ts
function Tx(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderBuild.ts
function Ex(e, t, n, r, i) {
	let a = Ph(), { advancements: o, buildTraits: s, careers: c, finalActorName: l, finalPortraitPath: u, selectedBaseActor: d, selectedSpells: f, settings: p, trappings: m } = Ip(a), h = /* @__PURE__ */ F(!1), g = q(() => !!(d.value && c.value.length && !h.value && !i.value));
	async function _() {
		if (!d.value || !c.value.length) return;
		h.value = !0, r.value = "", n.value = "Building actor from the selected draft.";
		let i = {
			actorName: l.value,
			advancements: o.value,
			baseActorUuid: d.value.uuid,
			careers: c.value,
			portraitPath: u.value,
			settings: p.value,
			spells: f.value,
			traits: s.value,
			trappings: m.value
		};
		try {
			n.value = `Created ${(await e.buildNpc(i)).name}.`, a.resetDraft(), t.value = "builder";
		} catch (e) {
			r.value = Tx(e), n.value = "";
		} finally {
			h.value = !1;
		}
	}
	return {
		buildNpc: _,
		canBuild: g,
		isBusy: h
	};
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/lower-careers.ts
function Dx(e) {
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
}
function Ox(e) {
	return [{
		career: e,
		mode: "add-or-increment"
	}];
}
function kx(e) {
	return [...e.candidates.filter((t) => e.selectedUuids.includes(t.uuid)).map((e) => ({
		career: e,
		mode: "add-if-missing"
	})), {
		career: e.droppedCareer,
		mode: "add-or-increment"
	}];
}
function Ax(e) {
	let t = e.candidates.filter((t) => e.selectedUuids.includes(t.uuid)).length;
	return t === 0 ? "" : `Added ${t} lower-tier career candidate${t === 1 ? "" : "s"}.`;
}
function jx(e, t) {
	return e?.selectedUuids.includes(t) ?? !1;
}
function Mx(e, t, n, r) {
	let i = n.target;
	if (!(!e || !i || r(t.uuid))) {
		if (i.checked) {
			e.selectedUuids = [...new Set([...e.selectedUuids, t.uuid])];
			return;
		}
		e.selectedUuids = e.selectedUuids.filter((e) => e !== t.uuid);
	}
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/skill-resolution.ts
function Nx(e, t) {
	let n = /* @__PURE__ */ new Map(), r = [], i = [];
	for (let a of e) {
		let e = /* @__PURE__ */ new Map();
		for (let o of Am(a.career.uuid, a.career.grants.skills)) {
			let s = km(o.originalName);
			if (!s) continue;
			let c = jm(o.originalName), l = n.get(c) ?? [], u = e.get(c) ?? 0, d = t.enableLinkedSkillResolution && l[u] ? l[u] : "";
			if (e.set(c, u + 1), d) {
				r.push({
					linkedFromKey: d,
					resolutionKey: o.resolutionKey
				});
				continue;
			}
			i.push({
				baseName: s.baseName,
				careerLabel: Rx(a.career),
				isLoadingSuggestions: !1,
				occurrence: o.occurrence,
				options: s.options,
				originalName: s.originalName,
				resolvedSpecialization: zx(s),
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
function Px(e) {
	return e.resolvedSpecialization.trim() ? Dm(e.baseName, e.resolvedSpecialization) : "";
}
function Fx(e) {
	return e.occurrence > 0 ? `${e.originalName}, choice ${e.occurrence + 1}` : e.originalName;
}
function Ix(e) {
	return e.options.length <= 1 && e.specialization.trim().toLocaleLowerCase() === "any";
}
function Lx(e, t) {
	e.resolvedSpecialization = t;
}
function Rx(e) {
	return e.level === null ? e.name : `${e.name}, tier ${e.level}`;
}
function zx(e) {
	return e.specialization.trim().toLocaleLowerCase() === "any" ? "" : e.options[0] ?? "";
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/skill-specialization-suggestions.ts
async function Bx(e, t) {
	await Promise.all(t.rows.map(async (t) => {
		if (Ix(t)) {
			t.isLoadingSuggestions = !0;
			try {
				t.suggestedSpecializations = await e.listSkillSpecializations(t.baseName);
			} catch {
				t.suggestedSpecializations = [];
			} finally {
				t.isLoadingSuggestions = !1;
			}
		}
	}));
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderCareerDropWorkflow.ts
function Vx(e, t, n) {
	let r = Ph(), { careers: i, settings: a } = Ip(r), o = /* @__PURE__ */ F(!1), s = /* @__PURE__ */ F(null), c = /* @__PURE__ */ F(null), l = q(() => Dx(s.value));
	async function u(t) {
		await b(t, async (t) => {
			await d(await e.resolveCareerDrop(t));
		});
	}
	async function d(e) {
		if (a.value.lowerCareerMode === "never") {
			p(e);
			return;
		}
		o.value = !0, t.value = "Checking for lower-tier career candidates.";
		try {
			await f(e);
		} finally {
			o.value = !1;
		}
	}
	async function f(n) {
		let r = await e.findLowerCareerCandidates(n), i = r.filter((e) => !x(e.uuid));
		if (!i.length) {
			p(n), t.value = "";
			return;
		}
		if (a.value.lowerCareerMode === "auto-add-all") {
			m([...i.map((e) => ({
				career: e,
				mode: "add-if-missing"
			})), {
				career: n,
				mode: "add-or-increment"
			}], {
				enableLinkedSkillResolution: !a.value.askForLinkedSkillSpecializations,
				message: `Added ${i.length} lower-tier career candidate${i.length === 1 ? "" : "s"}.`
			});
			return;
		}
		s.value = {
			candidates: r,
			droppedCareer: n,
			selectedUuids: i.map((e) => e.uuid)
		}, t.value = "";
	}
	function p(e) {
		m(Ox(e), {
			enableLinkedSkillResolution: !1,
			message: ""
		});
	}
	function m(t, n) {
		let r = Nx(t, n);
		if (r.rows.length) {
			c.value = r, Bx(e, c.value);
			return;
		}
		y(t, n.message);
	}
	function h() {
		let e = s.value;
		e && (s.value = null, m(kx(e), {
			enableLinkedSkillResolution: !a.value.askForLinkedSkillSpecializations,
			message: Ax(e)
		}));
	}
	function g() {
		let e = s.value;
		e && (s.value = null, p(e.droppedCareer));
	}
	function _() {
		let e = c.value;
		if (e) {
			for (let t of e.rows) r.setSkillGrantResolution(t.resolutionKey, Px(t));
			for (let t of e.linkedRows) r.setSkillGrantResolution(t.resolutionKey, r.getSkillGrantResolution(t.linkedFromKey));
			c.value = null, y(e.entries, e.message);
		}
	}
	function v() {
		let e = c.value;
		e && (c.value = null, y(e.entries, e.message));
	}
	function y(e, n) {
		for (let t of e) {
			if (t.mode === "add-if-missing") {
				r.addCareerIfMissing(t.career);
				continue;
			}
			r.addCareer(t.career);
		}
		t.value = n;
	}
	async function b(e, t) {
		n.value = "";
		try {
			await t(e);
		} catch (e) {
			n.value = Tx(e);
		}
	}
	function x(e) {
		return i.value.some((t) => t.uuid === e);
	}
	function S(e) {
		return jx(s.value, e);
	}
	function C(e, t) {
		Mx(s.value, e, t, x);
	}
	return {
		chooseSkillSpecialization: Lx,
		confirmLowerCareerPrompt: h,
		confirmSkillResolutionPrompt: _,
		dismissLowerCareerPrompt: g,
		dismissSkillResolutionPrompt: v,
		getSkillResolutionLabel: Fx,
		handleCareerDrop: u,
		isCareerQueued: x,
		isFindingLowerCareers: o,
		isLowerCareerSelected: S,
		lowerCareerCandidateGroups: l,
		pendingLowerCareerPrompt: s,
		pendingSkillResolutionPrompt: c,
		setLowerCareerSelected: C,
		usesFreeformSkillSpecialization: Ix
	};
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderInitialData.ts
function Hx(e, t) {
	let n = Ph(), { selectedBaseActorUuid: r, settings: i } = Ip(n), a = /* @__PURE__ */ F(!1), o = /* @__PURE__ */ F(!1), s = /* @__PURE__ */ F([]);
	Or(async () => {
		a.value = !0;
		try {
			let [t, r, i, a] = await Promise.all([
				e.loadSettings(),
				e.listActorFolders(),
				e.listItemFolders(),
				e.listTraitDifficultyOptions()
			]);
			n.hydrateSettings(t), n.hydrateActorFolders(r), n.hydrateItemFolders(i), s.value = a, await Promise.all([c(), l()]);
		} catch (e) {
			t.value = Tx(e);
		} finally {
			a.value = !1;
		}
	}), qn(r, async (r) => {
		if (t.value = "", !r) {
			n.clearBaseDraftData();
			return;
		}
		o.value = !0;
		try {
			let t = await e.loadBaseActorDraftData(r);
			n.hydrateBaseActorDraftData(t);
		} catch (e) {
			t.value = Tx(e), n.clearBaseDraftData();
		} finally {
			o.value = !1;
		}
	});
	async function c() {
		n.hydrateBaseActors(await e.listBaseActors(i.value));
	}
	async function l() {
		n.hydrateQuickTraits(await e.listQuickTraits(i.value));
	}
	return {
		isLoadingActors: a,
		isLoadingBaseDraft: o,
		refreshBaseActors: c,
		refreshQuickTraits: l,
		traitDifficultyOptions: s
	};
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderMetadataLookups.ts
function Ux(e) {
	let t = Ph(), { advancements: n } = Ip(t), r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), a = q(() => {
		let e = /* @__PURE__ */ new Set();
		for (let t of n.value) t.kind === "skill" && !t.characteristicKey && !km(t.name) && e.add(t.name);
		return [...e];
	}), o = q(() => {
		let e = /* @__PURE__ */ new Set();
		for (let t of n.value) t.kind === "talent" && !t.talentMaximumKey && e.add(t.name);
		return [...e];
	});
	qn(a, async (n) => {
		let i = Wx(n, r);
		if (i.length) try {
			let n = await e.listSkillCharacteristics(i);
			t.hydrateSkillCharacteristics(n);
		} catch {}
	}, { immediate: !0 }), qn(o, async (n) => {
		let r = Wx(n, i);
		if (r.length) try {
			let n = await e.listTalentMaximums(r);
			t.hydrateTalentMaximums(n);
		} catch {}
	}, { immediate: !0 });
}
function Wx(e, t) {
	return e.filter((e) => {
		let n = jm(e);
		return t.has(n) ? !1 : (t.add(n), !0);
	});
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp.vue?vue&type=script&setup=true&lang.ts
var Gx = { class: "npc-builder" }, Kx = { class: "npc-builder__header" }, qx = { class: "npc-builder__header-actions" }, Jx = {
	"aria-label": "NPC Builder sections",
	class: "npc-builder__tabs"
}, Yx = ["disabled"], Xx = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, Zx = {
	key: 1,
	class: "npc-builder__message"
}, Qx = /* @__PURE__ */ L({
	__name: "NpcBuilderApp",
	props: { bridge: {} },
	setup(e) {
		let t = e, { hasMagicAccess: n, selectedSpells: r } = Ip(Ph()), i = /* @__PURE__ */ F("builder"), a = /* @__PURE__ */ F(""), o = /* @__PURE__ */ F(""), { chooseSkillSpecialization: s, confirmLowerCareerPrompt: c, confirmSkillResolutionPrompt: l, dismissLowerCareerPrompt: u, dismissSkillResolutionPrompt: d, getSkillResolutionLabel: f, handleCareerDrop: p, isCareerQueued: m, isFindingLowerCareers: h, isLowerCareerSelected: g, lowerCareerCandidateGroups: _, pendingLowerCareerPrompt: v, pendingSkillResolutionPrompt: y, setLowerCareerSelected: b, usesFreeformSkillSpecialization: x } = Vx(t.bridge, a, o), { buildNpc: S, canBuild: C } = Ex(t.bridge, i, a, o, h), { isLoadingActors: w, isLoadingBaseDraft: T, traitDifficultyOptions: E } = Hx(t.bridge, o);
		return Ux(t.bridge), (e, h) => (B(), V("main", Gx, [
			U("header", Kx, [h[7] ||= U("div", null, [U("p", null, "WFRP4e Customizer"), U("h1", null, "NPC Builder")], -1), U("div", qx, [U("nav", Jx, [
				U("button", {
					class: A({ "is-active": i.value === "builder" }),
					type: "button",
					onClick: h[0] ||= (e) => i.value = "builder"
				}, " Build ", 2),
				U("button", {
					class: A({ "is-active": i.value === "advancements" }),
					type: "button",
					onClick: h[1] ||= (e) => i.value = "advancements"
				}, " Advances ", 2),
				U("button", {
					class: A({ "is-active": i.value === "trappings" }),
					type: "button",
					onClick: h[2] ||= (e) => i.value = "trappings"
				}, " Trappings ", 2),
				U("button", {
					class: A({ "is-active": i.value === "traits" }),
					type: "button",
					onClick: h[3] ||= (e) => i.value = "traits"
				}, " Traits ", 2),
				I(n) || I(r).length ? (B(), V("button", {
					key: 0,
					class: A({ "is-active": i.value === "spells" }),
					type: "button",
					onClick: h[4] ||= (e) => i.value = "spells"
				}, " Spells ", 2)) : K("", !0),
				U("button", {
					class: A({ "is-active": i.value === "settings" }),
					type: "button",
					onClick: h[5] ||= (e) => i.value = "settings"
				}, " Settings ", 2)
			]), U("button", {
				disabled: !I(C),
				type: "button",
				onClick: h[6] ||= (...e) => I(S) && I(S)(...e)
			}, "Build NPC", 8, Yx)])]),
			W(xs, {
				open: I(v) !== null,
				title: "Add Lower-Tier Careers?",
				onClose: I(u)
			}, {
				default: zn(() => [I(v) ? (B(), H(Rh, {
					key: 0,
					"candidate-groups": I(_),
					"is-career-queued": I(m),
					"is-lower-career-selected": I(g),
					prompt: I(v),
					onAddDroppedOnly: I(u),
					onAddSelected: I(c),
					onLowerCareerSelected: I(b)
				}, null, 8, [
					"candidate-groups",
					"is-career-queued",
					"is-lower-career-selected",
					"prompt",
					"onAddDroppedOnly",
					"onAddSelected",
					"onLowerCareerSelected"
				])) : K("", !0)]),
				_: 1
			}, 8, ["open", "onClose"]),
			W(xs, {
				open: I(y) !== null,
				title: "Resolve Skill Specializations",
				onClose: I(d)
			}, {
				default: zn(() => [I(y) ? (B(), H(wx, {
					key: 0,
					"get-skill-resolution-label": I(f),
					prompt: I(y),
					"uses-freeform-skill-specialization": I(x),
					onAddWithoutResolving: I(d),
					onApplySpecializations: I(l),
					onChooseSkillSpecialization: I(s)
				}, null, 8, [
					"get-skill-resolution-label",
					"prompt",
					"uses-freeform-skill-specialization",
					"onAddWithoutResolving",
					"onApplySpecializations",
					"onChooseSkillSpecialization"
				])) : K("", !0)]),
				_: 1
			}, 8, ["open", "onClose"]),
			o.value ? (B(), V("p", Xx, j(o.value), 1)) : a.value ? (B(), V("p", Zx, j(a.value), 1)) : K("", !0),
			i.value === "settings" ? (B(), H(zy, {
				key: 2,
				bridge: t.bridge
			}, null, 8, ["bridge"])) : i.value === "advancements" ? (B(), H(Wg, { key: 3 })) : i.value === "trappings" ? (B(), H(px, {
				key: 4,
				bridge: t.bridge
			}, null, 8, ["bridge"])) : i.value === "traits" ? (B(), H(Ib, {
				key: 5,
				bridge: t.bridge,
				"difficulty-options": I(E)
			}, null, 8, ["bridge", "difficulty-options"])) : i.value === "spells" ? (B(), H(yb, {
				key: 6,
				bridge: t.bridge
			}, null, 8, ["bridge"])) : (B(), H(Fv, {
				key: 7,
				bridge: t.bridge,
				"is-loading-actors": I(w),
				"is-loading-base-draft": I(T),
				onCareerDrop: I(p)
			}, null, 8, [
				"bridge",
				"is-loading-actors",
				"is-loading-base-draft",
				"onCareerDrop"
			]))
		]));
	}
});
//#endregion
//#region src/module/foundry/compendiums.ts
function $x(e, t) {
	return t.uuid ? t.uuid : t._id && e.getUuid ? e.getUuid(t._id) : "";
}
function eS(e) {
	return e.documentName === "Item" || Z(e, ["metadata", "type"]) === "Item" || Z(e, ["metadata", "documentName"]) === "Item";
}
async function tS(e) {
	for (let t of game.packs ?? []) {
		if (!eS(t) || !t.getDocuments) continue;
		let n = await t.getDocuments();
		for (let r of n) Bp(r) && e(r, t);
		await nS();
	}
}
function nS() {
	return new Promise((e) => {
		globalThis.setTimeout(e, 0);
	});
}
//#endregion
//#region src/functions/npc-builder/extract-career-grants.ts
function rS(e) {
	return {
		characteristics: iS(e),
		skills: aS(e),
		talents: sS(e, [["talents", "value"], ["talents"]]),
		trappings: sS(e, [["trappings", "value"], ["trappings"]])
	};
}
function iS(e) {
	let t = sS(e, [["characteristics", "value"], ["characteristics"]]);
	if (t.length) return t.map(oS);
	let n = X(e, ["characteristics"]);
	if (!Y(n)) return [];
	let r = [];
	for (let [e, t] of Object.entries(n)) t && r.push(oS(e));
	return lS(r);
}
function aS(e) {
	return sS(e, [["skills", "value"], ["skills"]], { preserveDuplicates: !0 });
}
function oS(e) {
	let t = e.trim().toLocaleLowerCase();
	if (Js(t)) return Ks[t];
	let n = qs[t];
	return n ? Ks[n] : e.trim();
}
function sS(e, t, n = {}) {
	for (let r of t) {
		let t = Ws(X(e, r));
		if (t.length) return n.preserveDuplicates ? cS(t) : lS(t);
	}
	return [];
}
function cS(e) {
	return e.map((e) => e.trim()).filter(Boolean);
}
function lS(e) {
	return [...new Set(cS(e))].sort((e, t) => e.localeCompare(t));
}
//#endregion
//#region src/module/wfrp4e/career-summary.ts
function uS(e) {
	return {
		careerGroup: dS(e),
		grants: rS(e.system),
		img: e.img ?? "",
		level: fS(e),
		name: e.name,
		uuid: e.uuid
	};
}
function dS(e) {
	return Z(e.system, ["careergroup", "value"]);
}
function fS(e) {
	let t = X(e.system, ["level", "value"]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
//#endregion
//#region src/module/wfrp4e/career-index.ts
var pS = /* @__PURE__ */ new Map(), mS = "idle", hS = null;
function gS() {
	return hS || (mS = "indexing", pS.clear(), hS = vS().then(() => {
		mS = "ready";
	}).catch((e) => {
		mS = "error", t("wfrp4e-customizer-apps | Career indexing failed.", e);
	}), hS);
}
async function _S(e) {
	return mS === "idle" && gS(), !e.careerGroup || e.level === null ? [] : [...pS.values()].filter((t) => bS(t, e)).sort(SS);
}
async function vS() {
	yS(), await nS(), await tS((e) => {
		e.type === "career" && pS.set(e.uuid, uS(e));
	});
}
function yS() {
	for (let e of game.items?.contents ?? []) e.type === "career" && pS.set(e.uuid, uS(e));
}
function bS(e, t) {
	return e.uuid !== t.uuid && e.level !== null && t.level !== null && e.level < t.level && xS(e.careerGroup) === xS(t.careerGroup);
}
function xS(e) {
	return e.trim().toLocaleLowerCase();
}
function SS(e, t) {
	let n = e.level ?? 0, r = t.level ?? 0;
	return n === r ? e.name.localeCompare(t.name) : n - r;
}
//#endregion
//#region src/module/wfrp4e/skill-specializations.ts
var CS = /* @__PURE__ */ new Map(), wS = /* @__PURE__ */ new Map(), TS = /* @__PURE__ */ new Map(), ES = "idle", DS = null;
async function OS(e) {
	let t = jm(e);
	return t ? (ES === "idle" && AS(), DS && await DS, [...CS.get(t) ?? []].sort((e, t) => e.localeCompare(t))) : [];
}
async function kS(e) {
	return ES === "idle" && AS(), DS && await DS, e.flatMap((e) => {
		let t = PS(e);
		return t ? [{
			...t,
			skillName: e
		}] : [];
	});
}
function AS() {
	return DS || (ES = "indexing", CS.clear(), wS.clear(), TS.clear(), DS = jS().then(() => {
		ES = "ready";
	}).catch((e) => {
		ES = "error", t("wfrp4e-customizer-apps | Skill specialization indexing failed.", e);
	}), DS);
}
async function jS() {
	FS(), await nS(), await tS(MS);
}
function MS(e) {
	if (e.type !== "skill") return;
	NS(e);
	let t = Om(e.name);
	if (!t) return;
	let n = jm(t.baseName), r = CS.get(n) ?? /* @__PURE__ */ new Set();
	r.add(t.specialization), CS.set(n, r);
}
function NS(e) {
	let t = Z(e.system, ["characteristic", "value"]);
	if (!Js(t)) return;
	let n = {
		characteristicKey: t,
		characteristicName: Ks[t],
		skillName: e.name
	}, r = jm(e.name), i = jm(Om(e.name)?.baseName ?? e.name);
	wS.set(r, n), TS.has(i) || TS.set(i, n);
}
function PS(e) {
	let t = jm(e), n = jm(Om(e)?.baseName ?? e);
	return wS.get(t) ?? TS.get(n) ?? null;
}
function FS() {
	for (let e of game.items?.contents ?? []) MS(e);
}
//#endregion
//#region src/module/foundry/item-sources.ts
function IS(e, t) {
	return {
		img: "systems/wfrp4e/icons/blank.png",
		name: e,
		system: {},
		type: t
	};
}
function LS(e, t, n) {
	let r = e ? e.toObject() : IS(t, n);
	return delete r._id, r;
}
function RS(e, t, n) {
	return e.items?.contents.find((e) => e.type === n && VS(e.name, t)) ?? null;
}
function zS(e, t, n) {
	return e.items?.contents.find((e) => t && e.uuid === t ? !0 : VS(e.name, n)) ?? null;
}
function BS(e, t) {
	return game.items?.contents.find((n) => t.includes(n.type) && VS(n.name, e)) ?? null;
}
function VS(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/wfrp4e/item-lookup.ts
async function HS(e, t) {
	return await game.wfrp4e?.utility?.findItem?.(e, t) || BS(e, t);
}
//#endregion
//#region src/module/wfrp4e/talent-maximums.ts
async function US(e) {
	let t = [];
	for (let n of WS(e)) {
		let e = await HS(n, ["talent"]);
		e && t.push({
			maximumFormula: Z(e.system, ["max", "formula"]),
			maximumKey: Z(e.system, ["max", "value"]),
			talentName: n
		});
	}
	return t;
}
function WS(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.trim().toLocaleLowerCase();
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
//#endregion
//#region src/module/apps/npc-builder/settings.ts
var GS = "npcBuilderSettings", KS = Qm(), qS = Qp({
	defaultValue: KS,
	key: GS,
	name: "NPC Builder Settings",
	normalize: ZS
});
function JS() {
	$p(qS);
}
function YS() {
	return em(qS);
}
async function XS(e) {
	return await tm(qS, e);
}
function ZS(e) {
	if (typeof e != "object" || !e) return { ...KS };
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
		lowerCareerMode: QS(t.lowerCareerMode) ? t.lowerCareerMode : "prompt",
		outputActorFolderUuid: typeof t.outputActorFolderUuid == "string" ? t.outputActorFolderUuid : "",
		quickTraitFolderUuid: typeof t.quickTraitFolderUuid == "string" ? t.quickTraitFolderUuid : "",
		searchCompendiumPortraitAssets: t.searchCompendiumPortraitAssets ?? !0,
		searchFoundryPortraitAssets: t.searchFoundryPortraitAssets ?? !1,
		searchWebPortraitAssets: t.searchWebPortraitAssets ?? !1
	};
}
function QS(e) {
	return e === "auto-add-all" || e === "never" || e === "prompt";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/advancements.ts
async function $S(e, t) {
	let n = {}, r = [], i = [];
	for (let a of t) {
		let t = Math.floor(a.current);
		if (t === 0) continue;
		let o = a.baseAdvances + t;
		if (a.kind === "characteristic") {
			aC(n, a, o);
			continue;
		}
		let s = RS(e, a.name, a.kind);
		if (s) {
			r.push({
				_id: s.id,
				"system.advances.value": o
			});
			continue;
		}
		let c = LS(await HS(a.name, [a.kind]), a.name, a.kind);
		c.type = a.kind, Gs(c, [
			"system",
			"advances",
			"value"
		], o), i.push(c);
	}
	Object.keys(n).length && await e.update(n), r.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", r), i.length && await e.createEmbeddedDocuments("Item", i);
}
function eC(e) {
	let t = [];
	for (let [n, r] of Object.entries(Ks)) {
		let i = Vs(e.system, [[
			"characteristics",
			n,
			"advances",
			"value"
		], [
			"characteristics",
			n,
			"advances"
		]]), a = Vs(e.system, [
			[
				"characteristics",
				n,
				"value",
				"value"
			],
			[
				"characteristics",
				n,
				"value"
			],
			[
				"characteristics",
				n,
				"total",
				"value"
			],
			[
				"characteristics",
				n,
				"total"
			],
			[
				"characteristics",
				n,
				"initial",
				"value"
			],
			[
				"characteristics",
				n,
				"initial"
			]
		], i);
		t.push({
			baseAdvances: i,
			current: a,
			kind: "characteristic",
			name: r
		});
	}
	return t;
}
function tC(e, t) {
	return e.items?.contents.filter((e) => e.type === t).map((n) => nC(e, n, t)) ?? [];
}
function nC(e, t, n) {
	let r = Vs(t.system, [["advances", "value"], ["advances"]]);
	if (n === "talent") return {
		baseAdvances: r,
		current: r,
		kind: n,
		name: t.name,
		talentMaximumFormula: Z(t.system, ["max", "formula"]),
		talentMaximumKey: Z(t.system, ["max", "value"])
	};
	let i = rC(t), a = i ? iC(e, i) : 0, o = Hs(t.system, [["total", "value"], ["total"]]), s = o !== null && i ? Math.max(0, o - a) : 0, c = Math.max(r, s), l = {
		baseAdvances: c,
		current: i ? a + c : c,
		kind: n,
		name: t.name
	};
	return i && (l.characteristicKey = i, l.characteristicName = Ks[i]), l;
}
function rC(e) {
	let t = Z(e.system, ["characteristic", "value"]);
	return Js(t) ? t : void 0;
}
function iC(e, t) {
	return Vs(e.system, [
		[
			"characteristics",
			t,
			"value",
			"value"
		],
		[
			"characteristics",
			t,
			"value"
		],
		[
			"characteristics",
			t,
			"total",
			"value"
		],
		[
			"characteristics",
			t,
			"total"
		],
		[
			"characteristics",
			t,
			"initial",
			"value"
		],
		[
			"characteristics",
			t,
			"initial"
		]
	]);
}
function aC(e, t, n) {
	let r = qs[t.name.trim().toLocaleLowerCase()];
	r && (e[`system.characteristics.${r}.advances`] = n);
}
//#endregion
//#region src/module/foundry/embedded-items.ts
function oC() {
	return {
		creates: [],
		deletes: [],
		updates: []
	};
}
async function sC(e, t) {
	t.deletes.length && e.deleteEmbeddedDocuments && await e.deleteEmbeddedDocuments("Item", t.deletes), t.updates.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", t.updates), t.creates.length && await e.createEmbeddedDocuments("Item", t.creates);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/config.ts
function cC(e, t) {
	Gs(e, [
		"system",
		"specification",
		"value"
	], t.specification), t.rollable && !t.damage && Gs(e, [
		"system",
		"rollable",
		"defaultDifficulty"
	], t.defaultDifficulty), t.damage && t.dice && Gs(e, [
		"system",
		"rollable",
		"dice"
	], t.dice);
}
function lC(e, t) {
	return {
		_id: e,
		"system.specification.value": t.specification,
		...t.rollable && !t.damage ? { "system.rollable.defaultDifficulty": t.defaultDifficulty } : {},
		...t.damage && t.dice ? { "system.rollable.dice": t.dice } : {}
	};
}
function uC(e) {
	return {
		...hm(),
		attackType: mC(e.system, ["rollable", "attackType"]) || "melee",
		bonusCharacteristic: mC(e.system, ["rollable", "bonusCharacteristic"]),
		damage: Us(e.system, [["rollable", "damage"]]),
		defaultDifficulty: mC(e.system, ["rollable", "defaultDifficulty"]) || "challenging",
		dice: mC(e.system, ["rollable", "dice"]),
		rollable: Us(e.system, [["rollable", "value"]]),
		skill: mC(e.system, ["rollable", "skill"]),
		sl: Us(e.system, [["rollable", "SL"]], !0),
		specification: mC(e.system, ["specification", "value"])
	};
}
function dC(e) {
	return pC(e.system);
}
function fC(e) {
	return pC(e.system);
}
function pC(e) {
	return Us(e, [["disabled"], ["disabled", "value"]]);
}
function mC(e, t) {
	let n = X(e, t);
	return typeof n == "string" ? n.trim() : typeof n == "number" ? String(n) : "";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/apply.ts
async function hC(e, t) {
	let n = oC();
	for (let r of t) {
		let t = r.source === "base" ? zS(e, r.sourceUuid, r.name) : RS(e, r.name, "trait");
		if (r.ignored) {
			t && n.deletes.push(t.id);
			continue;
		}
		if (t) {
			n.updates.push(lC(t.id, r.config));
			continue;
		}
		let i = LS(r.sourceUuid ? await gC(r.sourceUuid) : await HS(r.name, ["trait"]), r.name, "trait");
		i.type = "trait", Gs(i, ["system", "disabled"], !1), cC(i, r.config), n.creates.push(i);
	}
	await sC(e, n);
}
async function gC(e) {
	let t = await fromUuid(e);
	return Bp(t) ? t : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/actor-traits.ts
function _C(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && !dC(e)).map(bC) ?? [];
}
function vC(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && dC(e)).map(bC) ?? [];
}
function yC(e) {
	Array.isArray(e.items) && (e.items = e.items.filter((e) => {
		if (typeof e != "object" || !e) return !0;
		let t = e;
		return t.type !== "trait" || !fC(t);
	}));
}
function bC(e) {
	return {
		config: uC(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/difficulty-options.ts
var xC = [
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
async function SC() {
	let e = X(game.wfrp4e?.config, ["difficultyLabels"]);
	if (!Y(e)) return xC;
	let t = Object.entries(e).filter((e) => {
		let [t, n] = e;
		return !!t.trim() && typeof n == "string";
	}).map(([e, t]) => ({
		label: t,
		value: e
	}));
	return t.length ? t : xC;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/drops.ts
async function CC(e) {
	let t = Wp(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Trait item here.");
	let n = Up(await fromUuid(t.uuid), "trait", "Drop a Foundry Trait item here.");
	return {
		config: uC(n),
		ignored: !1,
		key: `custom:${n.uuid}`,
		name: n.name,
		source: "custom",
		sourceUuid: n.uuid
	};
}
//#endregion
//#region src/functions/npc-builder/recommended-quick-traits.ts
var wC = [
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
async function TC(e) {
	return MC(await jC(e, "Actor"));
}
async function EC(e) {
	return MC(await jC(e, "Item"));
}
function DC() {
	return game.folders.contents.filter((e) => e.type === "Actor").map(MC).sort((e, t) => e.name.localeCompare(t.name));
}
function OC() {
	return game.folders.contents.filter((e) => e.type === "Item").map(MC).sort((e, t) => e.name.localeCompare(t.name));
}
function kC(e) {
	return e ? game.folders.contents.find((t) => t.uuid === e) ?? null : null;
}
function AC(e) {
	let t = kC(e);
	return t?.type === "Item" ? t : null;
}
async function jC(e, t) {
	let n = e.trim();
	if (!n) throw Error("Enter a folder name first.");
	let r = game.folders.contents.find((e) => e.type === t && NC(e.name, n));
	if (r) return r;
	let i = await Folder.create({
		name: n,
		type: t
	});
	if (!i) throw Error("Foundry did not create the folder.");
	return i;
}
function MC(e) {
	return {
		name: e.name,
		uuid: e.uuid
	};
}
function NC(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/quick-traits.ts
async function PC(e) {
	let t = AC(e.quickTraitFolderUuid);
	if (!t) throw Error("Choose a Quick Traits item folder before importing traits.");
	let n = new Set(LC(e).map((e) => e.name.trim().toLocaleLowerCase()));
	for (let e of wC) {
		if (n.has(e.trim().toLocaleLowerCase())) continue;
		let r = LS(await HS(e, ["trait"]), e, "trait");
		r.folder = t.id, r.type = "trait", await Item.create(r);
	}
	return ui.notifications?.info("Imported recommended quick traits."), await FC(e);
}
async function FC(e) {
	return LC(e).map(RC).sort((e, t) => e.name.localeCompare(t.name));
}
function IC(e, t) {
	return t.quickTraitFolderUuid ? e.folder?.uuid === t.quickTraitFolderUuid : !1;
}
function LC(e) {
	return game.items?.contents.filter((t) => t.type === "trait" && IC(t, e)) ?? [];
}
function RC(e) {
	return {
		config: uC(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/trappings.ts
var zC = [
	"ammunition",
	"armour",
	"container",
	"money",
	"trapping",
	"weapon"
];
async function BC(e, t) {
	let n = oC();
	for (let r of t) {
		let t = r.source === "base" ? zS(e, r.sourceUuid, r.name) : null;
		if (r.ignored) {
			t && n.deletes.push(t.id);
			continue;
		}
		if (t) {
			n.updates.push({
				_id: t.id,
				"system.quantity.value": r.quantity
			});
			continue;
		}
		let i = await KC(r), a = r.resolution.selectedItemType || r.itemType || "trapping", o = LS(i, r.resolution.selectedName || r.name, a);
		o.type = a || o.type || "trapping", Gs(o, [
			"system",
			"quantity",
			"value"
		], r.quantity), n.creates.push(o);
	}
	await sC(e, n);
}
async function VC(e) {
	return Ch(e, await qC());
}
async function HC(e) {
	let t = Wp(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Item here.");
	let n = Hp(await fromUuid(t.uuid), "Drop a Foundry Item here.");
	return {
		ignored: !1,
		itemType: n.type,
		key: `custom:${n.uuid}`,
		name: n.name,
		quantity: WC(n),
		resolution: xh({
			itemType: n.type,
			name: n.name,
			uuid: n.uuid
		}),
		source: "custom",
		sourceUuid: n.uuid
	};
}
function UC(e) {
	let t = GC();
	return e.items?.contents.filter((e) => t.includes(e.type)).map((e) => ({
		itemType: e.type,
		name: e.name,
		quantity: WC(e),
		uuid: e.uuid
	})) ?? [];
}
function WC(e) {
	return Vs(e.system, [["quantity", "value"], ["quantity"]]) || 1;
}
function GC() {
	let e = Bs(game.wfrp4e?.config, ["trappingItems"]);
	return e.length ? e : zC;
}
async function KC(e) {
	if (e.sourceUuid) {
		let t = await fromUuid(e.sourceUuid);
		return Bp(t) ? t : null;
	}
	if (e.resolution.selectedCandidateUuid) {
		let t = await fromUuid(e.resolution.selectedCandidateUuid);
		return Bp(t) ? t : null;
	}
	return e.resolution.status === "fallback" ? null : await HS(e.resolution.selectedName || e.name, GC());
}
async function qC() {
	let e = [], t = GC();
	for (let n of game.items?.contents ?? []) t.includes(n.type) && e.push(YC(n, "World"));
	for (let n of game.packs ?? []) {
		if (!eS(n)) continue;
		let r = await JC(n, t);
		if (r.length) {
			e.push(...r);
			continue;
		}
		if (!n.getDocuments) continue;
		let i = await n.getDocuments();
		for (let r of i) Bp(r) && t.includes(r.type) && e.push(YC(r, n.title ?? "Compendium"));
	}
	return e;
}
async function JC(e, t) {
	return e.getIndex ? ((await e.getIndex({ fields: ["name", "type"] })).contents ?? []).filter((n) => !!(n.name && n.type && $x(e, n) && t.includes(n.type))).map((t) => ({
		itemType: t.type ?? "trapping",
		name: t.name ?? "",
		sourceLabel: e.title ?? "Compendium",
		uuid: $x(e, t)
	})) : [];
}
function YC(e, t) {
	return {
		itemType: e.type,
		name: e.name,
		sourceLabel: t,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/actors.ts
function XC(e) {
	return game.actors.contents.filter((t) => nw(t, e)).map($C);
}
async function ZC(e) {
	let t = Vp(await fromUuid(e));
	return {
		advancements: [
			...eC(t),
			...tC(t, "skill"),
			...tC(t, "talent")
		],
		optionalTraits: vC(t),
		traits: _C(t),
		trappings: UC(t)
	};
}
async function QC(e) {
	let t = Wp(e);
	if (t.type !== "Actor") throw Error("Drop a Foundry Actor here.");
	let n = null;
	return t.uuid ? n = await fromUuid(t.uuid) : t.id && (n = game.actors.get(t.id)), $C(Vp(n));
}
function $C(e) {
	return {
		img: e.img ?? "",
		name: e.name,
		prototypeTokenImg: tw(e),
		species: ew(e),
		type: e.type,
		uuid: e.uuid
	};
}
function ew(e) {
	return Z(e.system, [
		"details",
		"species",
		"value"
	]) || Z(e.system, ["details", "species"]) || Z(e.system, [
		"details",
		"race",
		"value"
	]) || Z(e.system, [
		"details",
		"ancestry",
		"value"
	]);
}
function tw(e) {
	return Z(e, [
		"prototypeToken",
		"texture",
		"src"
	]) || Z(e.toObject(), [
		"prototypeToken",
		"texture",
		"src"
	]);
}
function nw(e, t) {
	return t.baseActorFolderUuid ? e.folder?.uuid === t.baseActorFolderUuid : !0;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/constants.ts
var rw = "spell", iw = new Set(ah), aw = new Set(oh);
async function ow() {
	return sw().map((e) => ({
		category: dh(e.key),
		key: e.key,
		label: e.name,
		value: e.name,
		wind: e.wind
	})).sort((e, t) => e.category === t.category ? e.label.localeCompare(t.label) : e.category.localeCompare(t.category));
}
function sw() {
	let e = X(game.wfrp4e?.config, ["magicLores"]), t = X(game.wfrp4e?.config, ["magicWind"]), n = [];
	if (!Y(e)) return [dw()];
	for (let [r, i] of Object.entries(e)) {
		let e = vw(i) || r, a = _w(t, r);
		n.push({
			key: r,
			matchTerms: gw(r, e, a),
			name: e,
			wind: a
		});
	}
	return n.some((e) => e.key === "petty") || n.push(dw()), n;
}
function cw(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) {
		if (r.isAmbiguous) continue;
		if (r.kind === "petty-magic") {
			let e = hw("petty magic", t);
			e && n.set(e.key, e);
			continue;
		}
		let e = hw(r.rawLore, t);
		e && n.set(e.key, e);
	}
	return [...n.values()];
}
function lw(e, t) {
	let n = [...uw(e.system), mw(e.name)].filter(Boolean);
	for (let e of n) {
		let n = pw(e, t);
		if (n) return n;
		let r = hw(e, t);
		if (r) return r;
	}
	return null;
}
function uw(e) {
	return [
		...Ws(X(e, ["lore", "value"])),
		...Ws(X(e, ["lore"])),
		...Ws(X(e, ["magicLore", "value"])),
		...Ws(X(e, ["magicLore"])),
		...Ws(X(e, ["category", "value"])),
		...Ws(X(e, [
			"system",
			"lore",
			"value"
		])),
		...Ws(X(e, ["system", "lore"])),
		...Ws(X(e, ["system.lore.value"])),
		...Ws(X(e, ["system.lore"]))
	];
}
function dw() {
	return {
		key: "petty",
		matchTerms: ["petty", "petty magic"],
		name: "Petty Magic",
		wind: ""
	};
}
function fw(e) {
	let t = e.trim() || "Unknown Lore";
	return {
		key: ch(t) || "unknown",
		matchTerms: [t],
		name: t,
		wind: ""
	};
}
function pw(e, t) {
	let n = ch(e);
	return n === "lore" ? t.find((e) => e.key !== "petty") ?? null : n === "the eight winds" || n === "eight winds" ? t.find((e) => iw.has(e.key)) ?? null : n === "dark lore" ? t.find((e) => aw.has(e.key)) ?? null : null;
}
function mw(e) {
	return /\(([^)]+)\)\s*$/.exec(e)?.[1]?.trim() ?? "";
}
function hw(e, t) {
	let n = ch(e);
	return n ? t.find((e) => e.matchTerms.some((e) => ch(e) === n)) ?? null : null;
}
function gw(e, t, n) {
	let r = /* @__PURE__ */ new Set(), i = ch(e), a = ch(t);
	for (let i of [
		e,
		t,
		n
	]) i.trim() && r.add(i.trim());
	return (i === "petty" || a === "petty") && r.add("Petty Magic"), (i === "shadow" || a === "shadow") && r.add("Shadows"), t && !/^lore of /i.test(t) && r.add(`Lore of ${t}`), [...r];
}
function _w(e, t) {
	return Y(e) ? vw(e[t]) : "";
}
function vw(e) {
	return typeof e == "string" ? e.trim() : Y(e) ? Z(e, ["name"]) || Z(e, ["label"]) || Z(e, ["value"]) : "";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/debug.ts
var yw = "[WFRP Customizer Apps][Spell Lookup]";
function bw(t, n) {
	if (n) {
		e(`${yw} ${t}`, n);
		return;
	}
	e(`${yw} ${t}`);
}
function xw(e, n) {
	t(`${yw} ${e}`, n);
}
function Sw(e) {
	return [
		e.title ?? "",
		e.collection ?? "",
		Z(e, ["metadata", "type"]),
		Z(e, ["metadata", "documentName"]),
		e.documentName
	].filter(Boolean).join(" | ");
}
function Cw(e) {
	return {
		loreTerms: uw(e.system),
		name: e.name,
		sourceLabel: e.sourceLabel,
		uuid: e.uuid
	};
}
function ww(e) {
	return typeof e == "string" ? {
		kind: "uuid-string",
		value: e
	} : Y(e) ? {
		documentName: Z(e, ["documentName"]),
		hasSystem: Y(X(e, ["system"])),
		loreTerms: uw(X(e, ["system"])),
		name: Z(e, ["name"]),
		type: Z(e, ["type"]),
		uuid: Z(e, ["uuid"])
	} : { kind: typeof e };
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/spell-input-conversion.ts
function Tw(e, t) {
	return {
		img: e.img ?? "",
		name: e.name,
		sourceLabel: t,
		system: e.system,
		uuid: e.uuid
	};
}
function Ew(e) {
	return /^item\./i.test(e.uuid) ? "World" : Dw(e.uuid, "WFRP Item Lookup");
}
function Dw(e, t) {
	let n = /^Compendium\.([^.]+\.[^.]+)\./.exec(e)?.[1];
	return n ? [...game.packs ?? []].find((e) => e.collection === n)?.title ?? n : t;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/compendium-spell-inputs.ts
async function Ow(e) {
	if (bw("Compendium index scan start", { pack: Sw(e) }), !e.getIndex) return bw("Compendium has no index; loading documents", { pack: Sw(e) }), await Pw(e);
	let t = Aw(await e.getIndex({ fields: [
		"name",
		"type",
		"img",
		"system.lore.value"
	] }));
	if (bw("Compendium index loaded", {
		entries: t.length,
		pack: Sw(e),
		samples: t.slice(0, 5).map((t) => ({
			hasLoreTerms: uw(t).length > 0,
			name: t.name,
			type: t.type,
			uuid: $x(e, t)
		}))
	}), !t.length) return bw("Compendium index empty; loading documents", { pack: Sw(e) }), await Pw(e);
	let n = t.filter(Mw);
	bw("Compendium index spell candidates", {
		pack: Sw(e),
		spellEntries: n.length
	});
	let r = n.filter((e) => e.name).map((t) => Iw(e, t));
	return r.length || !Fw(e) ? r : await Pw(e);
}
function kw(e) {
	return eS(e);
}
function Aw(e) {
	return Array.isArray(e) ? e.filter(jw) : Array.isArray(e.contents) ? e.contents.filter(jw) : Nw(e) ? [...e].flatMap((e) => {
		let t = Array.isArray(e) ? e[1] : e;
		return jw(t) ? [t] : [];
	}) : [];
}
function jw(e) {
	return Y(e);
}
function Mw(e) {
	return e.type === "spell" ? !0 : !!(e.name && (uw(e).length || mw(e.name)));
}
function Nw(e) {
	return Y(e) && Symbol.iterator in e;
}
async function Pw(e) {
	if (!e.getDocuments) return bw("Compendium has no document loader", { pack: Sw(e) }), [];
	bw("Compendium document load start", { pack: Sw(e) });
	let t = await e.getDocuments(), n = t.filter((e) => Bp(e) && e.type === "spell");
	return bw("Compendium document load complete", {
		documents: t.length,
		pack: Sw(e),
		spellDocuments: n.length,
		spellSamples: n.slice(0, 5).map((e) => ({
			loreTerms: uw(e.system),
			name: e.name,
			uuid: e.uuid
		}))
	}), n.map((t) => Tw(t, e.title ?? "Compendium"));
}
function Fw(e) {
	return e.collection === "wfrp4e-core.items" || e.collection === "wfrp4e-wom.items";
}
function Iw(e, t) {
	return {
		img: t.img ?? t.thumb ?? "",
		name: t.name ?? "",
		sourceLabel: e.title ?? "Compendium",
		system: t,
		uuid: $x(e, t)
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/warhammer-spell-inputs.ts
async function Lw() {
	let e = zw();
	if (!e) return bw("WFRP helper unavailable"), [];
	try {
		let t = await e.findAllItems(rw, "Loading Spells", !0, ["system.lore.value"]);
		return bw("WFRP helper raw result", {
			count: t.length,
			samples: t.slice(0, 10).map(ww)
		}), (await Promise.all(t.map((e) => Rw(e)))).filter((e) => e !== null);
	} catch (e) {
		return xw("WFRP helper lookup failed.", e), [];
	}
}
async function Rw(e) {
	if (typeof e == "string") {
		let t = await fromUuid(e);
		return Bp(t) && t.type === "spell" ? Tw(t, Ew(t)) : null;
	}
	if (Bp(e)) return e.type === "spell" ? Tw(e, Ew(e)) : null;
	if (Z(e, ["type"]) !== "spell") return null;
	let t = Z(e, ["name"]);
	return t ? {
		img: Z(e, ["img"]) || Z(e, ["thumb"]),
		name: t,
		sourceLabel: Dw(Z(e, ["uuid"]), "WFRP Item Lookup"),
		system: X(e, ["system"]),
		uuid: Z(e, ["uuid"])
	} : null;
}
function zw() {
	let e = X(globalThis, [
		"warhammer",
		"utility",
		"findAllItems"
	]);
	return typeof e == "function" ? { findAllItems: e } : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/spell-resolution-inputs.ts
async function Bw() {
	let e = [], n = [...game.packs ?? []];
	bw("Candidate lookup start", {
		itemPacks: n.filter(kw).length,
		totalPacks: n.length,
		warhammerUtilityAvailable: !!Uw(),
		worldItems: game.items?.contents.length ?? 0
	});
	let r = await Lw();
	bw("WFRP helper lookup complete", {
		utilityInputs: r.length,
		utilitySamples: r.slice(0, 10).map(Cw)
	}), e.push(...r), e.push(...Vw()), bw("World spell scan complete", { worldSpellCount: e.filter((e) => e.sourceLabel === "World").length });
	for (let r of n) if (kw(r)) try {
		let t = await Ow(r);
		e.push(...t), bw("Compendium spell scan complete", {
			inputCount: t.length,
			pack: Sw(r),
			samples: t.slice(0, 5).map(Cw)
		});
	} catch (e) {
		t(`wfrp4e-customizer-apps | Spell lookup skipped compendium "${r.title ?? r.collection ?? "unknown"}".`, e);
	}
	let i = Hw(e);
	return bw("Candidate lookup complete", {
		rawInputCount: e.length,
		uniqueInputCount: i.length
	}), i;
}
function Vw() {
	let e = [];
	for (let t of game.items?.contents ?? []) t.type === "spell" && e.push(Tw(t, "World"));
	return e;
}
function Hw(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.uuid || n.name.trim().toLocaleLowerCase();
		t.has(e) || t.set(e, n);
	}
	return [...t.values()];
}
function Uw() {
	return X(globalThis, [
		"warhammer",
		"utility",
		"findAllItems"
	]);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/index.ts
async function Ww(e, t) {
	let n = [];
	for (let r of t) {
		if (!r.selected || RS(e, r.name, "spell")) continue;
		let t = LS(r.sourceUuid ? await qw(r.sourceUuid) : null, r.name, rw);
		t.type = rw, n.push(t);
	}
	n.length && await e.createEmbeddedDocuments("Item", n);
}
async function Gw(e) {
	let t = cw(e, sw());
	if (bw("Grant resolution start", {
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
	let n = await Bw(), r = /* @__PURE__ */ new Map(), i = [];
	for (let e of n) {
		let n = lw(e, t);
		if (!n) {
			i.length < 20 && i.push({
				loreTerms: uw(e.system),
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
	return bw("Grant resolution complete", {
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
async function Kw(e) {
	let t = Wp(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Spell item here.");
	let n = Up(await fromUuid(t.uuid), rw, "Drop a Foundry Spell item here."), r = lw(Tw(n, "Dropped"), [...sw(), dw()]) ?? fw(uw(n.system)[0] ?? "");
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
async function qw(e) {
	let t = await fromUuid(e);
	return Bp(t) && t.type === "spell" ? t : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/build-npc.ts
async function Jw(e) {
	let t = await Zw(e);
	if (!t) throw Error("Foundry did not create the NPC Actor.");
	let n = Qw(e), r = e.careers.at(-1), i = um(e.advancements), a = {
		name: n,
		"prototypeToken.name": n,
		"system.details.gmnotes.value": Yw(Z(t.system, [
			"details",
			"gmnotes",
			"value"
		]), i)
	}, o = e.portraitPath || r?.img || "";
	return o && (a.img = o, a["prototypeToken.texture.src"] = o), await t.update(a), await $S(t, e.advancements), await hC(t, e.traits), await BC(t, e.trappings), await Ww(t, e.spells), t.sheet?.render(!0), ui.notifications?.info(`Created NPC "${n}".`), {
		name: n,
		uuid: t.uuid
	};
}
function Yw(e, t) {
	let n = Xw(e).trim(), r = [
		"<section data-wfrp-customizer-npc-xp=\"true\">",
		"<h3>WFRP Customizer Apps</h3>",
		`<p><strong>Estimated NPC XP:</strong> ${t.total}</p>`,
		"<ul>",
		`<li>Characteristics: ${t.characteristics}</li>`,
		`<li>Skills: ${t.skills}</li>`,
		`<li>Talents: ${t.talents}</li>`,
		"</ul>",
		"</section>"
	].join("");
	return n ? `${n}<hr>${r}` : r;
}
function Xw(e) {
	return e.replaceAll(/<section data-wfrp-customizer-npc-xp="true">[\S\s]*?<\/section>/g, "");
}
async function Zw(e) {
	let t = Vp(await fromUuid(e.baseActorUuid)).toObject(), n = kC(e.settings.outputActorFolderUuid);
	return delete t._id, delete t.folder, t.type = "npc", yC(t), n && (t.folder = n.id), await Actor.create(t);
}
function Qw(e) {
	if (!e.settings.includeSpeciesInName) return e.actorName;
	let t = game.actors.contents.find((t) => t.uuid === e.baseActorUuid), n = t ? ew(t) : "";
	return !n || e.actorName.toLocaleLowerCase().includes(n.toLocaleLowerCase()) ? e.actorName : `${n} ${e.actorName}`;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/careers.ts
async function $w(e) {
	let t = Wp(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a WFRP Career item here.");
	return uS(Up(await fromUuid(t.uuid), "career", "Drop a WFRP Career item here."));
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/candidate-utils.ts
function eT(e, t) {
	let n = t.img.trim().toLocaleLowerCase();
	!n || e.seenPaths.has(n) || (e.seenPaths.add(n), e.candidates.push(t));
}
function tT(e, t) {
	let n = t.imagePaths.filter(({ path: e }) => !!e);
	if (cT(t.name, n, e.searchTerms)) for (let r of n) eT(e, {
		img: r.path,
		key: `foundry-asset:${t.sourceKey}:${r.label}`,
		label: `${t.name || aT(r.path)} ${r.label} (${t.sourceLabel})`,
		source: "foundry-asset"
	});
}
function nT(e, t, n) {
	e?.({
		candidatesFound: t.candidates.length,
		currentLocation: n.currentLocation,
		directoriesVisited: t.visitedDirectories,
		maxDirectories: n.maxDirectories,
		phase: n.phase
	});
}
function rT(e) {
	return Z(e, [
		"prototypeToken",
		"texture",
		"src"
	]) || Z(e.toObject(), [
		"prototypeToken",
		"texture",
		"src"
	]);
}
function iT(e, t) {
	return `${aT(e)} (${t})`;
}
function aT(e) {
	return e.split(/[/\\]/).at(-1) ?? e;
}
function oT(e) {
	return typeof e == "object" && !!e;
}
function sT(e) {
	return oT(e) && Object.values(e).every((e) => Array.isArray(e) && e.every((e) => typeof e == "string"));
}
function cT(e, t, n) {
	return Ev(e, n) || t.some(({ path: e }) => Ev(e, n));
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/dig-down.ts
var lT = "fuzzy-foundry", uT = .3, dT = new Set([
	".webp",
	".png",
	".jpg",
	".jpeg",
	".gif"
]);
function fT(e, t) {
	let n = pT();
	if (nT(t, e, {
		currentLocation: hT(n),
		maxDirectories: 0,
		phase: "filesystem"
	}), !n.digDownActive || !n.digDownCacheReady) return;
	let r = vT();
	if (!(!r?._fileIndexCache || !r.fs)) {
		for (let t of gT(r, e.searchTerms)) _T(e, r, t);
		nT(t, e, {
			currentLocation: "Dig Down file cache search complete",
			maxDirectories: 0,
			phase: "filesystem"
		});
	}
}
function pT() {
	let e = game.modules.get(lT)?.active === !0, t = mT(), n = vT(), r = Object.values(n?._fileIndexCache ?? {}).reduce((e, t) => e + t.length, 0);
	return {
		digDownActive: e,
		digDownCacheReady: !!(n?._fileIndexCache && n.fs),
		digDownDeepFileSearchEnabled: t,
		digDownIndexedFileCount: r
	};
}
function mT() {
	try {
		return game.settings.get(lT, "deepFile") === !0;
	} catch {
		return !1;
	}
}
function hT(e) {
	return e.digDownActive ? e.digDownDeepFileSearchEnabled ? e.digDownCacheReady ? `Dig Down file cache (${e.digDownIndexedFileCount} files)` : "Waiting for Dig Down file cache" : "Dig Down Deep File Search is disabled" : "Dig Down is not active";
}
function gT(e, t) {
	let n = /* @__PURE__ */ new Set(), r = Object.keys(e._fileIndexCache ?? {});
	for (let i of t) {
		let t = i.toLocaleLowerCase();
		for (let e of r) e.toLocaleLowerCase().includes(t) && n.add(e);
		let a = e.fs?.get(i, [], uT) ?? [];
		for (let [, e] of a) n.add(e);
	}
	return [...n].sort((e, t) => e.toLocaleLowerCase().localeCompare(t.toLocaleLowerCase()));
}
function _T(e, t, n) {
	let r = t._fileIndexCache?.[n] ?? [];
	for (let t of r) yT(t) && eT(e, {
		img: t,
		key: `foundry-asset:${t}`,
		label: iT(t, "Dig Down"),
		source: "foundry-asset"
	});
}
function vT() {
	let e = canvas.deepSearchCache;
	if (!oT(e)) return null;
	let t = e._fileIndexCache, n = e.fs, r = {};
	return sT(t) && (r._fileIndexCache = t), oT(n) && typeof n.get == "function" && (r.fs = { get: n.get.bind(n) }), r;
}
function yT(e) {
	let t = `.${e.split(/[#?]/)[0]?.split(".").pop() ?? ""}`;
	return dT.has(t.toLocaleLowerCase());
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/documents.ts
function bT(e, t) {
	nT(t, e, {
		currentLocation: "World Actors and Items",
		maxDirectories: 0,
		phase: "world-documents"
	});
	for (let t of game.actors.contents) tT(e, {
		imagePaths: [{
			label: "actor image",
			path: t.img ?? ""
		}, {
			label: "token image",
			path: rT(t)
		}],
		name: t.name,
		sourceLabel: "World Actors",
		sourceKey: t.uuid
	});
	for (let t of game.items?.contents ?? []) tT(e, {
		imagePaths: [{
			label: "item image",
			path: t.img ?? ""
		}],
		name: t.name,
		sourceLabel: "World Items",
		sourceKey: t.uuid
	});
}
async function xT(e, t) {
	nT(t, e, {
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
		for (let r of n?.contents ?? []) tT(e, {
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
					path: Z(r, [
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
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/index.ts
async function ST(e, t) {
	let n = Tv(e);
	if (!n.length) return [];
	let r = {
		candidates: [],
		maxDirectoryBudget: 0,
		searchTerms: n,
		seenPaths: /* @__PURE__ */ new Set(),
		visitedDirectories: 0
	};
	return e.includeCompendiumAssets && (bT(r, t), await xT(r, t)), e.includeFilePickerAssets && fT(r, t), nT(t, r, {
		currentLocation: "Portrait search complete",
		maxDirectories: r.maxDirectoryBudget,
		phase: "ready"
	}), r.candidates;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/index.ts
var CT = {
	buildNpc: Jw,
	ensureActorFolder: TC,
	ensureItemFolder: EC,
	findLowerCareerCandidates: _S,
	getPortraitSearchAvailability: async () => pT(),
	importRecommendedQuickTraits: PC,
	listActorFolders: async () => DC(),
	listBaseActors: async (e) => XC(e),
	listFoundryPortraitCandidates: ST,
	listMagicLoreOptions: ow,
	listSpellsForMagicGrants: Gw,
	listItemFolders: async () => OC(),
	listQuickTraits: FC,
	listSkillCharacteristics: kS,
	listSkillSpecializations: OS,
	listTalentMaximums: US,
	listTraitDifficultyOptions: SC,
	loadBaseActorDraftData: ZC,
	loadSettings: async () => YS(),
	resolveActorDrop: QC,
	resolveCareerDrop: $w,
	resolveSpellDrop: Kw,
	resolveTraitDrop: CC,
	resolveTrapping: VC,
	resolveTrappingDrop: HC,
	saveSettings: XS
}, wT = class extends Rp {
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${$}-npc-builder`,
		classes: [$, "wfrp4e-customizer-npc-builder"],
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
		return Qx;
	}
	getVueProps() {
		return { bridge: CT };
	}
}, TT = "wfrp4e-customizer-open-npc-builder", ET = "wfrp4e-customizer-open-species-builder";
function DT() {
	Hooks.on("renderActorDirectory", (e, t) => {
		let n = MT(t);
		n && OT(n);
	});
}
function OT(e) {
	let n = jT(e);
	if (!n) {
		t("wfrp4e-customizer-apps | Could not find Actor Directory button container.");
		return;
	}
	kT(e, n), AT(e, n);
}
function kT(e, t) {
	if (e.querySelector(`.${TT}`)) return;
	let n = document.createElement("button");
	n.classList.add(TT, "wfrp4e-customizer-actor-directory-button"), n.type = "button", n.innerHTML = "<i class=\"fa-solid fa-user-plus\" inert></i><span>NPC Builder App</span>", n.addEventListener("click", () => {
		new wT().render(!0);
	}), t.append(n);
}
function AT(e, t) {
	if (e.querySelector(`.${ET}`)) return;
	let n = document.createElement("button");
	n.classList.add(ET, "wfrp4e-customizer-actor-directory-button"), n.type = "button", n.innerHTML = "<i class=\"fa-solid fa-people-group\" inert></i><span>Species Builder</span>", n.addEventListener("click", () => {
		new cm().render(!0);
	}), t.append(n);
}
function jT(e) {
	return e.querySelector(".directory-header .header-actions") ?? e.querySelector(".directory-header .action-buttons") ?? e.querySelector(".header-actions") ?? e.querySelector(".action-buttons");
}
function MT(e) {
	return e instanceof HTMLElement ? e : NT(e) && e[0] instanceof HTMLElement ? e[0] : null;
}
function NT(e) {
	return typeof e == "object" && !!e && "length" in e;
}
//#endregion
//#region src/module/apps/species-builder/apply-species-config.ts
var PT = [
	"species",
	"speciesCharacteristics",
	"speciesSkills",
	"speciesTalents",
	"speciesRandomTalents",
	"speciesTalentReplacement",
	"speciesTraits",
	"speciesMovement",
	"speciesFate",
	"speciesRes",
	"speciesExtra",
	"speciesAge",
	"speciesHeight",
	"speciesCareerReplacements"
];
function FT() {
	let n = game.wfrp4e?.config;
	if (!Y(n)) {
		t(`${$} | WFRP config was unavailable; custom species were not applied.`);
		return;
	}
	let r = im();
	IT(n, As(r)), r.definitions.length > 0 && e(`${$} | Applied ${r.definitions.length} custom species definition(s).`);
}
function IT(e, t) {
	for (let n of PT) LT(e, n, t[n]);
	RT(e, t.extraSpecies), zT(e, t.subspecies);
}
function LT(e, t, n) {
	if (Object.keys(n).length === 0) return;
	let r = e[t];
	if (!Y(r)) {
		e[t] = { ...n };
		return;
	}
	Object.assign(r, n);
}
function RT(e, t) {
	if (t.length === 0) return;
	let n = Array.isArray(e.extraSpecies) ? e.extraSpecies : [], r = /* @__PURE__ */ new Set();
	for (let e of n) typeof e == "string" && r.add(e);
	for (let e of t) r.add(e);
	e.extraSpecies = [...r];
}
function zT(e, t) {
	if (Object.keys(t).length === 0) return;
	let n = Y(e.subspecies) ? e.subspecies : {};
	for (let [e, r] of Object.entries(t)) {
		let t = Y(n[e]) ? n[e] : {};
		Object.assign(t, r), n[e] = t;
	}
	e.subspecies = n;
}
//#endregion
//#region src/functions/species-builder/characteristic-roll-formulas.ts
var BT = "2d10";
function VT(e) {
	let t = e?.split("+")[0]?.trim();
	return t ? UT(t) : BT;
}
function HT(e, t) {
	return VT(e) === VT(t);
}
function UT(e) {
	return e.replaceAll(/\s+/g, "").toLocaleLowerCase();
}
//#endregion
//#region src/module/apps/species-builder/chargen-roll-swap-guard.ts
var WT = Symbol("wfrp4e-customizer-guarded-attributes-stage"), GT = "wfrp4e-customizer-chargen-roll--compatible", KT = "wfrp4e-customizer-chargen-roll--dragging", qT = "wfrp4e-customizer-chargen-roll--incompatible", JT = [
	GT,
	KT,
	qT
];
function YT() {
	Hooks.on("wfrp4e:chargen", (e) => {
		XT(e);
	});
}
function XT(n) {
	let r = ZT(n);
	if (!r) {
		t(`${$} | Could not inspect WFRP character generation stages.`);
		return;
	}
	let i = QT(r);
	if (!i) {
		t(`${$} | Could not find the WFRP Attributes character generation stage.`);
		return;
	}
	if ($T(i.class)) return;
	let a = eE(i.class);
	typeof r.replaceStage == "function" ? r.replaceStage("attributes", a) : i.class = a, e(`${$} | Guarded WFRP characteristic roll swapping for custom species.`);
}
function ZT(e) {
	if (!Y(e)) return;
	let t = {}, n = e.replaceStage;
	return typeof n == "function" && (t.replaceStage = (t, r) => {
		n.call(e, t, r);
	}), Array.isArray(e.stages) && (t.stages = e.stages), t;
}
function QT(e) {
	for (let t of e.stages ?? []) if (Y(t) && t.key === "attributes") return typeof t.class == "function" ? t : void 0;
}
function $T(e) {
	return !!e[WT];
}
function eE(e) {
	class t extends e {
		static [WT] = !0;
		activateListeners(e) {
			let t = super.activateListeners(e);
			return tE(this, e), t;
		}
		swap(e, t) {
			let n = oE(this, e), r = oE(this, t);
			if (HT(n, r)) return super.swap(e, t);
			sE(e, n, t, r);
		}
	}
	return t;
}
function tE(e, t) {
	let n = aE(t);
	if (n) for (let t of iE(n)) t.addEventListener("dragstart", () => {
		let r = t.dataset.ch;
		r && nE(e, n, r);
	}), t.addEventListener("dragend", () => {
		rE(n);
	}), t.addEventListener("drop", () => {
		rE(n);
	});
}
function nE(e, t, n) {
	rE(t);
	let r = oE(e, n);
	for (let i of iE(t)) {
		let t = i.dataset.ch;
		if (!t) continue;
		if (t === n) {
			i.classList.add(KT);
			continue;
		}
		let a = HT(r, oE(e, t));
		i.classList.add(a ? GT : qT);
	}
}
function rE(e) {
	for (let t of iE(e)) t.classList.remove(...JT);
}
function iE(e) {
	return [...e.querySelectorAll(".ch-roll.ch-drag")];
}
function aE(e) {
	if (e instanceof HTMLElement) return e;
	if (!Y(e)) return;
	let t = e[0];
	return t instanceof HTMLElement ? t : void 0;
}
function oE(e, t) {
	let n = Y(e.context) ? e.context : void 0, r = Y(n?.characteristics) ? n.characteristics : void 0, i = (Y(r?.[t]) ? r[t] : void 0)?.formula;
	return typeof i == "string" ? i : void 0;
}
function sE(e, t, n, r) {
	let i = cE(e), a = cE(n), o = VT(t), s = VT(r);
	ui.notifications?.warn?.(`Cannot swap ${i} and ${a}: ${i} uses ${o}, while ${a} uses ${s}.`);
}
function cE(e) {
	let t = game.wfrp4e?.config?.characteristics;
	if (!Y(t)) return e;
	let n = t[e];
	return typeof n == "string" ? n : e;
}
//#endregion
//#region src/view/apps/workbench/WorkbenchApp.vue?vue&type=script&setup=true&lang.ts
var lE = { class: "customizer-workbench" }, uE = {
	"aria-label": "Customizer targets",
	class: "customizer-workbench__body"
}, dE = { class: "customizer-workbench__targets" }, fE = /* @__PURE__ */ L({
	__name: "WorkbenchApp",
	setup(e) {
		let t = [
			"Actor sheets",
			"Item sheets",
			"Reusable dialogs"
		];
		return (e, n) => (B(), V("main", lE, [n[1] ||= U("header", { class: "customizer-workbench__header" }, [U("p", null, "WFRP4e"), U("h1", null, "Customizer Workbench")], -1), U("section", uE, [U("div", dE, [(B(), V(z, null, R(t, (e) => U("button", {
			key: e,
			disabled: "",
			type: "button"
		}, j(e), 1)), 64))]), n[0] ||= U("div", { class: "customizer-workbench__empty" }, [U("strong", null, "Vue application shell mounted."), U("span", null, "The first customizer surface can land here.")], -1)])]));
	}
}), pE = class extends Rp {
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${$}-workbench`,
		classes: [$, "wfrp4e-customizer-workbench"],
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
		return fE;
	}
}, mE = `${$}.debugShapeProbes`, hE = "wfrp4eCustomizerShapeProbes", gE = "wfrp4eCustomizerShapePreset";
//#endregion
//#region src/module/debug/shape-inspector/utils.ts
function _E(e, t, n) {
	let r = Number(e);
	return Number.isFinite(r) ? Math.max(0, Math.min(n, Math.floor(r))) : t;
}
function vE(e) {
	return typeof e == "object" && !!e;
}
function yE(e) {
	return typeof e == "string" ? e.trim().toLocaleLowerCase() : "";
}
function bE(e) {
	try {
		return localStorage.getItem(e);
	} catch {
		return null;
	}
}
//#endregion
//#region src/module/debug/shape-inspector/path-resolver.ts
function xE(e) {
	let t = DE(e), n = SE(globalThis, t.root);
	for (let e of t.tokens) {
		if (e.type === "property") {
			n = SE(n, e.key);
			continue;
		}
		if (e.type === "index") {
			n = SE(n, String(e.index));
			continue;
		}
		n = CE(n, e.name, e.args);
	}
	return n;
}
function SE(e, t) {
	if (!(!vE(e) && typeof e != "function")) try {
		return e[t];
	} catch {
		return;
	}
}
function CE(e, t, n) {
	if (t === "at") {
		let t = Number(n[0] ?? 0), r = Number.isFinite(t) ? t : 0;
		return OE(e).at(r);
	}
	if (t === "findByName") {
		let t = yE(n[0] ?? "");
		return OE(e).find((e) => yE(SE(e, "name")) === t);
	}
	if (t === "findByType") {
		let t = yE(n[0] ?? "");
		return OE(e).find((e) => yE(SE(e, "type")) === t);
	}
	if (t === "get") {
		let t = n[0] ?? "";
		if (e instanceof Map) return e.get(t);
		let r = SE(e, "get");
		if (typeof r == "function") return r.call(e, t);
	}
	if (t === "sample") {
		let t = _E(n[0], 3, 60);
		return OE(e).slice(0, t);
	}
	throw Error(`Unsupported path method "${t}".`);
}
function wE(e) {
	return e.trim() ? e.split(",").map((e) => EE(e.trim())).map(String) : [];
}
function TE(e) {
	let t = e.trim();
	return /^-?\d+$/.test(t) ? Number(t) : EE(t);
}
function EE(e) {
	let t = /^["'](?<value>.*)["']$/.exec(e);
	return t?.groups ? t.groups.value ?? "" : e;
}
function DE(e) {
	let t = /^(?<root>[$A-Z_a-z][\w$]*)/.exec(e.trim());
	if (!t?.groups) throw Error(`Debug path "${e}" does not start with a root name.`);
	let n = t.groups.root;
	if (!n) throw Error(`Debug path "${e}" does not start with a root name.`);
	let r = [], i = e.trim().slice(n.length);
	for (; i;) {
		let e = /^\.(?<name>[$A-Z_a-z][\w$]*)\((?<args>[^)]*)\)/.exec(i);
		if (e?.groups) {
			let t = e.groups.name;
			if (!t) throw Error(`Could not parse debug path near "${i}".`);
			r.push({
				args: wE(e.groups.args ?? ""),
				name: t,
				type: "method"
			}), i = i.slice(e[0].length);
			continue;
		}
		let t = /^\.(?<key>[$A-Z_a-z][\w$]*)/.exec(i);
		if (t?.groups) {
			let e = t.groups.key;
			if (!e) throw Error(`Could not parse debug path near "${i}".`);
			r.push({
				key: e,
				type: "property"
			}), i = i.slice(t[0].length);
			continue;
		}
		let n = /^\[(?<index>[^\]]+)]/.exec(i);
		if (n?.groups) {
			let e = n.groups.index;
			if (!e) throw Error(`Could not parse debug path near "${i}".`);
			r.push({
				index: TE(e),
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
function OE(e) {
	if (Array.isArray(e)) return e;
	let t = SE(e, "contents");
	return Array.isArray(t) ? t : [];
}
//#endregion
//#region src/module/debug/shape-inspector/presets.ts
var kE = { "npc-builder": [
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
//#endregion
//#region src/module/debug/shape-inspector/probe-config.ts
function AE() {
	return window.location.href.includes("wfrp4eCustomizerShapeProbes") || window.location.href.includes("wfrp4eCustomizerShapePreset");
}
function jE(e) {
	let t = {
		hook: e.hook ?? "ready",
		maxDepth: _E(e.maxDepth, 2, 6),
		maxEntries: _E(e.maxEntries, 12, 60),
		path: e.path.trim()
	};
	return e.label && (t.label = e.label), t;
}
function ME() {
	return [...NE(), ...PE()].map(jE);
}
function NE() {
	let e = bE(mE);
	if (!e) return [];
	try {
		let t = JSON.parse(e);
		return Array.isArray(t) ? t.filter(IE).map(jE) : [];
	} catch {
		return [];
	}
}
function PE() {
	let e = [], t = [new URLSearchParams(window.location.search), new URLSearchParams(window.location.hash.replace(/^#/, ""))];
	for (let n of t) {
		let t = n.get(gE), r = n.get(hE);
		t && e.push(...kE[t] ?? []), r && e.push(...FE(r));
	}
	return window.location.href.includes("wfrp4eCustomizerShapePreset=npc-builder") && !e.length && e.push(...kE["npc-builder"] ?? []), e;
}
function FE(e) {
	try {
		let t = JSON.parse(decodeURIComponent(e));
		return Array.isArray(t) ? t.filter(IE) : [];
	} catch (e) {
		return t(`${$} | Could not parse URL shape probes.`, e), [];
	}
}
function IE(e) {
	return typeof e != "object" || !e ? !1 : "path" in e && typeof e.path == "string";
}
//#endregion
//#region src/module/debug/shape-inspector/summary.ts
function LE(e, t) {
	return !vE(e) && typeof e != "function" ? HE(e) : typeof e == "function" ? BE(e) : Array.isArray(e) ? RE(e, t) : e instanceof Map ? zE(e, t) : VE(e, t);
}
function RE(e, t) {
	return {
		length: e.length,
		sample: e.slice(0, t.maxEntries).map((e) => LE(e, WE(t))),
		type: "array"
	};
}
function zE(e, t) {
	return {
		sample: [...e.entries()].slice(0, t.maxEntries).map(([e, n]) => ({
			key: LE(e, WE(t)),
			value: LE(n, WE(t))
		})),
		size: e.size,
		type: "Map"
	};
}
function BE(e) {
	return {
		name: e.name,
		type: "function"
	};
}
function VE(e, t) {
	if (t.seen.has(e)) return { type: "circular" };
	t.seen.add(e);
	let n = UE(e, t.maxEntries), r = SE(e, "constructor"), i = {
		constructor: typeof r == "function" && r.name ? r.name : "Object",
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
		let n = SE(e, t);
		typeof n == "string" && (i[t] = n);
	}
	if (t.maxDepth <= 0) return i;
	let a = {};
	for (let r of n) a[r] = LE(SE(e, r), WE(t));
	i.properties = a;
	let o = SE(e, "toObject");
	if (typeof o == "function") try {
		i.source = LE(o.call(e), WE(t));
	} catch (e) {
		i.source = {
			error: e instanceof Error ? e.message : String(e),
			type: "error"
		};
	}
	return i;
}
function HE(e) {
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
function UE(e, t) {
	return Object.keys(e).sort().slice(0, t);
}
function WE(e) {
	return {
		maxDepth: e.maxDepth - 1,
		maxEntries: e.maxEntries,
		seen: e.seen
	};
}
//#endregion
//#region src/module/debug/shape-inspector/index.ts
function GE() {
	localStorage.removeItem(mE), e(`${$} | Cleared debug shape probes.`);
}
function KE() {
	return ME();
}
function qE(e, t = {}) {
	let n = XE(e, t);
	return QE(n), n;
}
function JE() {
	let t = ME();
	for (let e of ["init", "setup"]) {
		let n = t.filter((t) => t.hook === e);
		n.length && Hooks.once(e, () => {
			for (let t of n) ZE(t, e);
		});
	}
	Hooks.once("ready", () => {
		let t = ME().filter((e) => (e.hook ?? "ready") === "ready");
		AE() && e(`${$} | Debug shape ready probes discovered: ${t.length}`, window.location.href);
		for (let e of t) ZE(e, "ready");
	});
}
function YE(t) {
	let n = t.map(jE);
	localStorage.setItem(mE, JSON.stringify(n)), e(`${$} | Stored ${n.length} debug shape probe(s). Reload Foundry to run init/setup probes.`);
}
function XE(e, t = {}, n) {
	let r = _E(t.maxDepth, 2, 6), i = _E(t.maxEntries, 12, 60), a = xE(e), o = {
		inspectedAt: (/* @__PURE__ */ new Date()).toISOString(),
		label: t.label || e,
		maxDepth: r,
		maxEntries: i,
		path: e,
		value: LE(a, {
			maxDepth: r,
			maxEntries: i,
			seen: /* @__PURE__ */ new WeakSet()
		})
	};
	return n && (o.hook = n), o;
}
function ZE(e, n) {
	try {
		QE(XE(e.path, e, n));
	} catch (n) {
		t(`${$} | Debug shape probe failed for "${e.path}".`, n);
	}
}
function QE(t) {
	e(`${$} | Debug shape probe: ${t.label}`, JSON.stringify(t, null, 2));
}
//#endregion
//#region src/module/create-module-api.ts
function $E() {
	return {
		clearDebugShapeProbes: GE,
		getDebugShapeProbes: KE,
		inspectPath: qE,
		listNpcAutoAdvanceStrategies: Vh,
		openNpcBuilder: async () => {
			await new wT().render(!0);
		},
		openSpeciesBuilder: async () => {
			await new cm().render(!0);
		},
		openWorkbench: async () => {
			await new pE().render(!0);
		},
		registerNpcAutoAdvanceStrategy: Bh,
		setDebugShapeProbes: YE
	};
}
//#endregion
//#region src/module/register-module-menus.ts
function eD() {
	game.settings.registerMenu($, "workbench", {
		hint: "Open the WFRP4e Customizer Apps workbench.",
		icon: "fa-solid fa-screwdriver-wrench",
		label: "Open Workbench",
		name: "WFRP4e Customizer Apps",
		restricted: !0,
		type: pE
	}), game.settings.registerMenu($, "npc-builder", {
		hint: "Build a WFRP4e NPC from a base Actor and Career items.",
		icon: "fa-solid fa-user-plus",
		label: "Open NPC Builder",
		name: "WFRP4e NPC Builder",
		restricted: !0,
		type: wT
	}), game.settings.registerMenu($, "species-builder", {
		hint: "Create custom WFRP4e species definitions for character generation.",
		icon: "fa-solid fa-people-group",
		label: "Open Species Builder",
		name: "WFRP4e Species Builder",
		restricted: !0,
		type: cm
	});
}
//#endregion
//#region src/module/register-module-settings.ts
function tD() {
	JS(), rm();
}
//#endregion
//#region src/functions/item-grants/wfrp-grant-effect.ts
var nD = "generatedGrantItemsEffect";
function rD(e) {
	let t = e.items.map((e) => e.uuid);
	return {
		changes: [],
		description: aD(e.effectName, e.items),
		disabled: !1,
		flags: { [e.flagScope]: {
			[nD]: !0,
			itemUuids: t
		} },
		img: e.items[0]?.img ?? "icons/svg/aura.svg",
		name: e.effectName,
		system: {
			scriptData: [{
				label: e.effectName,
				script: iD(t),
				trigger: "addItems"
			}],
			transferData: {
				documentType: "Item",
				type: "document"
			}
		},
		transfer: !0
	};
}
function iD(e) {
	return [
		"// Generated by WFRP4e Customizer Apps.",
		`const itemUuids = ${JSON.stringify(e, null, 2)};`,
		"const itemDataToCreate = [];",
		"",
		"for (const uuid of itemUuids) {",
		"  const sourceItem = await fromUuid(uuid);",
		"  if (!sourceItem) {",
		"    this.script.notification(\"Could not resolve Item UUID: \" + uuid, \"warn\");",
		"    continue;",
		"  }",
		"",
		"  const itemData = sourceItem.toObject();",
		"  delete itemData._id;",
		"  itemDataToCreate.push(itemData);",
		"}",
		"",
		"if (itemDataToCreate.length) {",
		"  await this.actor.createEmbeddedDocuments(\"Item\", itemDataToCreate, { fromEffect: this.effect.id });",
		"  this.script.notification(\"Added \" + itemDataToCreate.length + \" granted item(s).\");",
		"} else {",
		"  this.script.notification(\"No granted items were added.\", \"warn\");",
		"}"
	].join("\n");
}
function aD(e, t) {
	return `<p><strong>${oD(e)}</strong>: grants item copies while this effect is active.</p><ul>${t.map((e) => `<li>${oD(e.name)}</li>`).join("")}</ul>`;
}
function oD(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
//#endregion
//#region src/module/wfrp4e/item-effect-drops.ts
var sD = new Set(["talent", "trait"]), cD = /* @__PURE__ */ new WeakSet(), lD = !1, uD = [
	"[data-tab=\"effects\"].active",
	"[data-application-part=\"effects\"].active",
	".tab.effects.active"
].join(","), dD = [
	"[data-tab=\"effects\"]",
	"[data-application-part=\"effects\"]",
	".tab.effects"
].join(",");
function fD() {
	lD || (lD = !0, Hooks.on("renderApplicationV2", (e, t) => {
		if (!(t instanceof HTMLElement)) return;
		let n = vD(e);
		!n || !sD.has(n.type) || pD(n, t);
	}));
}
function pD(e, t) {
	cD.has(t) || (cD.add(t), t.addEventListener("dragover", (e) => {
		yD(t, e.target) && (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "copy"));
	}, !0), t.addEventListener("drop", (n) => {
		mD(e, t, n);
	}, !0));
}
async function mD(e, t, n) {
	if (!yD(t, n.target)) return;
	let r = hD(n);
	if (r) {
		n.preventDefault(), n.stopPropagation();
		try {
			let t = await gD(r);
			if (t.uuid === e.uuid) throw Error("An Item cannot grant itself.");
			let n = _D(t), i = rD({
				effectName: `Grant ${t.name}`,
				flagScope: $,
				items: [n]
			});
			if (!e.createEmbeddedDocuments) throw Error("This Item sheet does not support creating Active Effects.");
			await e.createEmbeddedDocuments("ActiveEffect", [i]), ui.notifications?.info(`Added grant effect for "${t.name}".`);
		} catch (e) {
			let t = e instanceof Error ? e.message : "The dropped Item could not be converted.";
			ui.notifications?.warn?.(t);
		}
	}
}
function hD(e) {
	let t = e.dataTransfer?.getData("text/plain") ?? "";
	if (!t) return null;
	try {
		return Wp(t).type === "Item" ? t : null;
	} catch {
		return null;
	}
}
async function gD(e) {
	let t = Wp(e);
	if (!t.uuid) throw Error("Drop an Item with a resolvable UUID onto the Effects tab.");
	return Hp(await fromUuid(t.uuid), "The dropped Item was not found.");
}
function _D(e) {
	let t = {
		name: e.name,
		uuid: e.uuid
	};
	return e.img && (t.img = e.img), t;
}
function vD(e) {
	if (typeof e != "object" || !e) return null;
	let t = "item" in e ? e.item : void 0;
	if (Bp(t)) return t;
	let n = "document" in e ? e.document : void 0;
	return Bp(n) ? n : null;
}
function yD(e, t) {
	return !(t instanceof Element) || !e.contains(t) ? !1 : e.querySelector(uD) ? !0 : !![...e.querySelectorAll(dD)].find((e) => e.offsetParent !== null);
}
JE(), Hooks.once("init", () => {
	e(`${$} | Initializing`), tD(), game.system.id === "wfrp4e" && (FT(), YT(), fD()), eD(), DT();
}), Hooks.once("ready", () => {
	if (game.system.id !== "wfrp4e") {
		t(`${$} | Loaded outside ${np}; skipping module API registration.`);
		return;
	}
	let n = game.modules.get($);
	if (!n) {
		t(`${$} | Foundry did not expose the module entry.`);
		return;
	}
	n.api = $E(), gS(), AS(), e(`${$} | Ready`);
});
//#endregion
