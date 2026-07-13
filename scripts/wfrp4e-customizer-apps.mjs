//#region src/module/logging.ts
function e(e, ...t) {
	console.info(e, ...t);
}
function t(e, ...t) {
	console.warn(e, ...t);
}
//#endregion
//#region node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function n(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var r = {}, i = [], a = () => {}, o = () => !1, s = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), c = (e) => e.startsWith("onUpdate:"), l = Object.assign, u = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, d = Object.prototype.hasOwnProperty, f = (e, t) => d.call(e, t), p = Array.isArray, m = (e) => C(e) === "[object Map]", h = (e) => C(e) === "[object Set]", g = (e) => C(e) === "[object Date]", _ = (e) => typeof e == "function", v = (e) => typeof e == "string", y = (e) => typeof e == "symbol", b = (e) => typeof e == "object" && !!e, x = (e) => (b(e) || _(e)) && _(e.then) && _(e.catch), S = Object.prototype.toString, C = (e) => S.call(e), w = (e) => C(e).slice(8, -1), ee = (e) => C(e) === "[object Object]", T = (e) => v(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, te = /* @__PURE__ */ n(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), ne = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, re = /-\w/g, E = ne((e) => e.replace(re, (e) => e.slice(1).toUpperCase())), ie = /\B([A-Z])/g, ae = ne((e) => e.replace(ie, "-$1").toLowerCase()), oe = ne((e) => e.charAt(0).toUpperCase() + e.slice(1)), se = ne((e) => e ? `on${oe(e)}` : ""), D = (e, t) => !Object.is(e, t), ce = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, le = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, ue = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, de, fe = () => de ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function pe(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = v(r) ? _e(r) : pe(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	} else if (v(e) || b(e)) return e;
}
var me = /;(?![^(]*\))/g, he = /:([^]+)/, ge = /\/\*[^]*?\*\//g;
function _e(e) {
	let t = {};
	return e.replace(ge, "").split(me).forEach((e) => {
		if (e) {
			let n = e.split(he);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function O(e) {
	let t = "";
	if (v(e)) t = e;
	else if (p(e)) for (let n = 0; n < e.length; n++) {
		let r = O(e[n]);
		r && (t += r + " ");
	}
	else if (b(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var ve = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ye = /* @__PURE__ */ n(ve);
ve + "";
function be(e) {
	return !!e || e === "";
}
function xe(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = Se(e[r], t[r]);
	return n;
}
function Se(e, t) {
	if (e === t) return !0;
	let n = g(e), r = g(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = y(e), r = y(t), n || r) return e === t;
	if (n = p(e), r = p(t), n || r) return n && r ? xe(e, t) : !1;
	if (n = b(e), r = b(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !Se(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
function Ce(e, t) {
	return e.findIndex((e) => Se(e, t));
}
var we = (e) => !!(e && e.__v_isRef === !0), k = (e) => v(e) ? e : e == null ? "" : p(e) || b(e) && (e.toString === S || !_(e.toString)) ? we(e) ? k(e.value) : JSON.stringify(e, Te, 2) : String(e), Te = (e, t) => we(t) ? Te(e, t.value) : m(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Ee(t, r) + " =>"] = n, e), {}) } : h(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Ee(e)) } : y(t) ? Ee(t) : b(t) && !p(t) && !ee(t) ? String(t) : t, Ee = (e, t = "") => y(e) ? `Symbol(${e.description ?? t})` : e, De, Oe = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && De && (De.active ? (this.parent = De, this.index = (De.scopes ||= []).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
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
			let t = De;
			try {
				return De = this, e();
			} finally {
				De = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = De, De = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (De === this) De = this.prevScope;
			else {
				let e = De;
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
function ke(e) {
	return new Oe(e);
}
function Ae() {
	return De;
}
function je(e, t = !1) {
	De && De.cleanups.push(e);
}
var A, Me = /* @__PURE__ */ new WeakSet(), Ne = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, De && (De.active ? De.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Me.has(this) && (Me.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Le(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, Xe(this), Be(this);
		let e = A, t = Ke;
		A = this, Ke = !0;
		try {
			return this.fn();
		} finally {
			Ve(this), A = e, Ke = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) We(e);
			this.deps = this.depsTail = void 0, Xe(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Me.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		He(this) && this.run();
	}
	get dirty() {
		return He(this);
	}
}, Pe = 0, Fe, Ie;
function Le(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Ie, Ie = e;
		return;
	}
	e.next = Fe, Fe = e;
}
function Re() {
	Pe++;
}
function ze() {
	if (--Pe > 0) return;
	if (Ie) {
		let e = Ie;
		for (Ie = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Fe;) {
		let t = Fe;
		for (Fe = void 0; t;) {
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
function Be(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ve(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), We(r), Ge(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function He(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Ue(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Ue(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ze) || (e.globalVersion = Ze, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !He(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = A, r = Ke;
	A = e, Ke = !0;
	try {
		Be(e);
		let n = e.fn(e._value);
		(t.version === 0 || D(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		A = n, Ke = r, Ve(e), e.flags &= -3;
	}
}
function We(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) We(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ge(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var Ke = !0, qe = [];
function Je() {
	qe.push(Ke), Ke = !1;
}
function Ye() {
	let e = qe.pop();
	Ke = e === void 0 ? !0 : e;
}
function Xe(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = A;
		A = void 0;
		try {
			t();
		} finally {
			A = e;
		}
	}
}
var Ze = 0, Qe = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, $e = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!A || !Ke || A === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== A) t = this.activeLink = new Qe(A, this), A.deps ? (t.prevDep = A.depsTail, A.depsTail.nextDep = t, A.depsTail = t) : A.deps = A.depsTail = t, et(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = A.depsTail, t.nextDep = void 0, A.depsTail.nextDep = t, A.depsTail = t, A.deps === t && (A.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, Ze++, this.notify(e);
	}
	notify(e) {
		Re();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			ze();
		}
	}
};
function et(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) et(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var tt = /* @__PURE__ */ new WeakMap(), nt = /* @__PURE__ */ Symbol(""), rt = /* @__PURE__ */ Symbol(""), it = /* @__PURE__ */ Symbol("");
function at(e, t, n) {
	if (Ke && A) {
		let t = tt.get(e);
		t || tt.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new $e()), r.map = t, r.key = n), r.track();
	}
}
function ot(e, t, n, r, i, a) {
	let o = tt.get(e);
	if (!o) {
		Ze++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Re(), t === "clear") o.forEach(s);
	else {
		let i = p(e), a = i && T(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === it || !y(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(it)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(nt)), m(e) && s(o.get(rt)));
				break;
			case "delete":
				i || (s(o.get(nt)), m(e) && s(o.get(rt)));
				break;
			case "set":
				m(e) && s(o.get(nt));
				break;
		}
	}
	ze();
}
function st(e, t) {
	let n = tt.get(e);
	return n && n.get(t);
}
function ct(e) {
	let t = /* @__PURE__ */ j(e);
	return t === e ? t : (at(t, "iterate", it), /* @__PURE__ */ qt(e) ? t : t.map(Xt));
}
function lt(e) {
	return at(e = /* @__PURE__ */ j(e), "iterate", it), e;
}
function ut(e, t) {
	return /* @__PURE__ */ Kt(e) ? Zt(/* @__PURE__ */ Gt(e) ? Xt(t) : t) : Xt(t);
}
var dt = {
	__proto__: null,
	[Symbol.iterator]() {
		return ft(this, Symbol.iterator, (e) => ut(this, e));
	},
	concat(...e) {
		return ct(this).concat(...e.map((e) => p(e) ? ct(e) : e));
	},
	entries() {
		return ft(this, "entries", (e) => (e[1] = ut(this, e[1]), e));
	},
	every(e, t) {
		return mt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return mt(this, "filter", e, t, (e) => e.map((e) => ut(this, e)), arguments);
	},
	find(e, t) {
		return mt(this, "find", e, t, (e) => ut(this, e), arguments);
	},
	findIndex(e, t) {
		return mt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return mt(this, "findLast", e, t, (e) => ut(this, e), arguments);
	},
	findLastIndex(e, t) {
		return mt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return mt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return gt(this, "includes", e);
	},
	indexOf(...e) {
		return gt(this, "indexOf", e);
	},
	join(e) {
		return ct(this).join(e);
	},
	lastIndexOf(...e) {
		return gt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return mt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return _t(this, "pop");
	},
	push(...e) {
		return _t(this, "push", e);
	},
	reduce(e, ...t) {
		return ht(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return ht(this, "reduceRight", e, t);
	},
	shift() {
		return _t(this, "shift");
	},
	some(e, t) {
		return mt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return _t(this, "splice", e);
	},
	toReversed() {
		return ct(this).toReversed();
	},
	toSorted(e) {
		return ct(this).toSorted(e);
	},
	toSpliced(...e) {
		return ct(this).toSpliced(...e);
	},
	unshift(...e) {
		return _t(this, "unshift", e);
	},
	values() {
		return ft(this, "values", (e) => ut(this, e));
	}
};
function ft(e, t, n) {
	let r = lt(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ qt(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var pt = Array.prototype;
function mt(e, t, n, r, i, a) {
	let o = lt(e), s = o !== e && !/* @__PURE__ */ qt(e), c = o[t];
	if (c !== pt[t]) {
		let t = c.apply(e, a);
		return s ? Xt(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, ut(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function ht(e, t, n, r) {
	let i = lt(e), a = i !== e && !/* @__PURE__ */ qt(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = ut(e, t)), n.call(this, t, ut(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? ut(e, c) : c;
}
function gt(e, t, n) {
	let r = /* @__PURE__ */ j(e);
	at(r, "iterate", it);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Jt(n[0]) ? (n[0] = /* @__PURE__ */ j(n[0]), r[t](...n)) : i;
}
function _t(e, t, n = []) {
	Je(), Re();
	let r = (/* @__PURE__ */ j(e))[t].apply(e, n);
	return ze(), Ye(), r;
}
var vt = /* @__PURE__ */ n("__proto__,__v_isRef,__isVue"), yt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(y));
function bt(e) {
	y(e) || (e = String(e));
	let t = /* @__PURE__ */ j(this);
	return at(t, "has", e), t.hasOwnProperty(e);
}
var xt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? zt : Rt : i ? Lt : It).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = p(e);
		if (!r) {
			let e;
			if (a && (e = dt[t])) return e;
			if (t === "hasOwnProperty") return bt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ M(e) ? e : n);
		if ((y(t) ? yt.has(t) : vt(t)) || (r || at(e, "get", t), i)) return o;
		if (/* @__PURE__ */ M(o)) {
			let e = a && T(t) ? o : o.value;
			return r && b(e) ? /* @__PURE__ */ Ut(e) : e;
		}
		return b(o) ? r ? /* @__PURE__ */ Ut(o) : /* @__PURE__ */ Vt(o) : o;
	}
}, St = class extends xt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = p(e) && T(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Kt(i);
			if (!/* @__PURE__ */ qt(n) && !/* @__PURE__ */ Kt(n) && (i = /* @__PURE__ */ j(i), n = /* @__PURE__ */ j(n)), !a && /* @__PURE__ */ M(i) && !/* @__PURE__ */ M(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : f(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ M(e) ? e : r);
		return e === /* @__PURE__ */ j(r) && (o ? D(n, i) && ot(e, "set", t, n, i) : ot(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = f(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && ot(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!y(t) || !yt.has(t)) && at(e, "has", t), n;
	}
	ownKeys(e) {
		return at(e, "iterate", p(e) ? "length" : nt), Reflect.ownKeys(e);
	}
}, Ct = class extends xt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, wt = /* @__PURE__ */ new St(), Tt = /* @__PURE__ */ new Ct(), Et = /* @__PURE__ */ new St(!0), Dt = (e) => e, Ot = (e) => Reflect.getPrototypeOf(e);
function kt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ j(i), o = m(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, u = i[e](...r), d = n ? Dt : t ? Zt : Xt;
		return !t && at(a, "iterate", c ? rt : nt), l(Object.create(u), { next() {
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
function At(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function jt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ j(r), a = /* @__PURE__ */ j(n);
			e || (D(n, a) && at(i, "get", n), at(i, "get", a));
			let { has: o } = Ot(i), s = t ? Dt : e ? Zt : Xt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && at(/* @__PURE__ */ j(t), "iterate", nt), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ j(n), i = /* @__PURE__ */ j(t);
			return e || (D(t, i) && at(r, "has", t), at(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ j(a), s = t ? Dt : e ? Zt : Xt;
			return !e && at(o, "iterate", nt), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return l(n, e ? {
		add: At("add"),
		set: At("set"),
		delete: At("delete"),
		clear: At("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ j(this), r = Ot(n), i = /* @__PURE__ */ j(e), a = !t && !/* @__PURE__ */ qt(e) && !/* @__PURE__ */ Kt(e) ? i : e;
			return r.has.call(n, a) || D(e, a) && r.has.call(n, e) || D(i, a) && r.has.call(n, i) || (n.add(a), ot(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ qt(n) && !/* @__PURE__ */ Kt(n) && (n = /* @__PURE__ */ j(n));
			let r = /* @__PURE__ */ j(this), { has: i, get: a } = Ot(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ j(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? D(n, s) && ot(r, "set", e, n, s) : ot(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ j(this), { has: n, get: r } = Ot(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ j(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && ot(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ j(this), t = e.size !== 0, n = e.clear();
			return t && ot(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = kt(r, e, t);
	}), n;
}
function Mt(e, t) {
	let n = jt(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(f(n, r) && r in t ? n : t, r, i);
}
var Nt = { get: /* @__PURE__ */ Mt(!1, !1) }, Pt = { get: /* @__PURE__ */ Mt(!1, !0) }, Ft = { get: /* @__PURE__ */ Mt(!0, !1) }, It = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ new WeakMap();
function Bt(e) {
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
// @__NO_SIDE_EFFECTS__
function Vt(e) {
	return /* @__PURE__ */ Kt(e) ? e : Wt(e, !1, wt, Nt, It);
}
// @__NO_SIDE_EFFECTS__
function Ht(e) {
	return Wt(e, !1, Et, Pt, Lt);
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
	return Wt(e, !0, Tt, Ft, Rt);
}
function Wt(e, t, n, r, i) {
	if (!b(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Bt(w(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Gt(e) {
	return /* @__PURE__ */ Kt(e) ? /* @__PURE__ */ Gt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function j(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ j(t) : e;
}
function Yt(e) {
	return !f(e, "__v_skip") && Object.isExtensible(e) && le(e, "__v_skip", !0), e;
}
var Xt = (e) => b(e) ? /* @__PURE__ */ Vt(e) : e, Zt = (e) => b(e) ? /* @__PURE__ */ Ut(e) : e;
// @__NO_SIDE_EFFECTS__
function M(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function N(e) {
	return Qt(e, !1);
}
function Qt(e, t) {
	return /* @__PURE__ */ M(e) ? e : new $t(e, t);
}
var $t = class {
	constructor(e, t) {
		this.dep = new $e(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ j(e), this._value = t ? e : Xt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ qt(e) || /* @__PURE__ */ Kt(e);
		e = n ? e : /* @__PURE__ */ j(e), D(e, t) && (this._rawValue = e, this._value = n ? e : Xt(e), this.dep.trigger());
	}
};
function P(e) {
	return /* @__PURE__ */ M(e) ? e.value : e;
}
var en = {
	get: (e, t, n) => t === "__v_raw" ? e : P(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ M(i) && !/* @__PURE__ */ M(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function tn(e) {
	return /* @__PURE__ */ Gt(e) ? e : new Proxy(e, en);
}
// @__NO_SIDE_EFFECTS__
function nn(e) {
	let t = p(e) ? Array(e.length) : {};
	for (let n in e) t[n] = sn(e, n);
	return t;
}
var rn = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = y(t) ? t : String(t), this._raw = /* @__PURE__ */ j(e);
		let r = !0, i = e;
		if (!p(e) || y(this._key) || !T(this._key)) do
			r = !/* @__PURE__ */ Jt(i) || /* @__PURE__ */ qt(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = P(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ M(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ M(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return st(this._raw, this._key);
	}
}, an = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
// @__NO_SIDE_EFFECTS__
function on(e, t, n) {
	return /* @__PURE__ */ M(e) ? e : _(e) ? new an(e) : b(e) && arguments.length > 1 ? sn(e, t, n) : /* @__PURE__ */ N(e);
}
function sn(e, t, n) {
	return new rn(e, t, n);
}
var cn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new $e(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ze - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && A !== this) return Le(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Ue(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
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
	if (/* @__PURE__ */ M(e) ? (h = () => e.value, y = /* @__PURE__ */ qt(e)) : /* @__PURE__ */ Gt(e) ? (h = () => f(e), y = !0) : p(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Gt(e) || /* @__PURE__ */ qt(e)), h = () => e.map((e) => {
		if (/* @__PURE__ */ M(e)) return e.value;
		if (/* @__PURE__ */ Gt(e)) return f(e);
		if (_(e)) return d ? d(e, 2) : e();
	})) : h = _(e) ? t ? d ? () => d(e, 2) : e : () => {
		if (g) {
			Je();
			try {
				g();
			} finally {
				Ye();
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
	let x = Ae(), S = () => {
		m.stop(), x && x.active && u(x.effects, m);
	};
	if (s && t) {
		let e = t;
		t = (...t) => {
			let n = e(...t);
			return S(), n;
		};
	}
	let C = b ? Array(e.length).fill(un) : un, w = (e) => {
		if (!(!(m.flags & 1) || !m.dirty && !e)) if (t) {
			let n = m.run();
			if (e || o || y || (b ? n.some((e, t) => D(e, C[t])) : D(n, C))) {
				g && g();
				let e = fn;
				fn = m;
				try {
					let e = [
						n,
						C === un ? void 0 : b && C[0] === un ? [] : C,
						v
					];
					C = n, d ? d(t, 3, e) : t(...e);
				} finally {
					fn = e;
				}
			}
		} else m.run();
	};
	return l && l(w), m = new Ne(h), m.scheduler = c ? () => c(w, !1) : w, v = (e) => pn(e, !1, m), g = m.onStop = () => {
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
	if (n.set(e, t), t--, /* @__PURE__ */ M(e)) hn(e.value, t, n);
	else if (p(e)) for (let r = 0; r < e.length; r++) hn(e[r], t, n);
	else if (h(e) || m(e)) e.forEach((e) => {
		hn(e, t, n);
	});
	else if (ee(e)) {
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
			Je(), gn(o, null, 10, [
				e,
				i,
				a
			]), Ye();
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
function F(e, t = In, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && pa(-1);
		let i = Rn(t), a;
		try {
			a = e(...n);
		} finally {
			Rn(i), r._d && pa(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function zn(e, t) {
	if (In === null) return e;
	let n = qa(In), i = e.dirs ||= [];
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
function Bn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (Je(), _n(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Ye());
	}
}
function Vn(e, t) {
	if (ja) {
		let n = ja.provides, r = ja.parent && ja.parent.provides;
		r === n && (n = ja.provides = Object.create(r)), n[e] = t;
	}
}
function Hn(e, t, n = !1) {
	let r = Ma();
	if (r || gi) {
		let i = gi ? gi._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && _(t) ? t.call(r && r.proxy) : t;
	}
}
function Un() {
	return !!(Ma() || gi);
}
var Wn = /* @__PURE__ */ Symbol.for("v-scx"), Gn = () => Hn(Wn);
function Kn(e, t, n) {
	return qn(e, t, n);
}
function qn(e, t, n = r) {
	let { immediate: i, deep: o, flush: s, once: c } = n, u = l({}, n), d = t && i || !t && s !== "post", f;
	if (Ra) {
		if (s === "sync") {
			let e = Gn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = a, e.resume = a, e.pause = a, e;
		}
	}
	let p = ja;
	u.call = (e, t, n) => _n(e, p, t, n);
	let m = !1;
	s === "post" ? u.scheduler = (e) => {
		qi(e, p && p.suspense);
	} : s !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : kn(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = mn(e, t, u);
	return Ra && (f ? f.push(h) : d && h()), h;
}
function Jn(e, t, n) {
	let r = this.proxy, i = v(e) ? e.includes(".") ? Yn(r, e) : () => r[e] : e.bind(r, r), a;
	_(t) ? a = t : (a = t.handler, n = t);
	let o = Fa(this), s = qn(i, a.bind(r), n);
	return o(), s;
}
function Yn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Xn = /* @__PURE__ */ new WeakMap(), Zn = /* @__PURE__ */ Symbol("_vte"), Qn = (e) => e.__isTeleport, $n = (e) => e && (e.disabled || e.disabled === ""), er = (e) => e && (e.defer || e.defer === ""), tr = (e) => typeof SVGElement < "u" && e instanceof SVGElement, nr = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, rr = (e, t) => {
	let n = e && e.to;
	return v(n) ? t ? t(n) : null : n;
}, ir = {
	name: "Teleport",
	__isTeleport: !0,
	process(e, t, n, r, i, a, o, s, c, l) {
		let { mc: u, pc: d, pbc: f, o: { insert: p, querySelector: m, createText: h, createComment: g, parentNode: _ } } = l, v = $n(t.props), { dynamicChildren: y } = t, b = (e, t, n) => {
			e.shapeFlag & 16 && u(e.children, t, n, i, a, o, s, c);
		}, x = (e = t) => {
			let n = $n(e.props), r = e.target = rr(e.props, m), a = lr(r, e, h, p);
			r && (o !== "svg" && tr(r) ? o = "svg" : o !== "mathml" && nr(r) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(r), n || (b(e, r, a), cr(e, !1)));
		}, S = (e) => {
			let t = () => {
				Xn.get(e) === t && (Xn.delete(e), $n(e.props) && (b(e, _(e.el) || n, e.anchor), cr(e, !0)), x(e));
			};
			Xn.set(e, t), qi(t, a);
		};
		if (e == null) {
			let e = t.el = h(""), i = t.anchor = h("");
			if (p(e, n, r), p(i, n, r), er(t.props) || a && a.pendingBranch) {
				S(t);
				return;
			}
			v && (b(t, n, i), cr(t, !0)), x();
		} else {
			t.el = e.el;
			let r = t.anchor = e.anchor, u = Xn.get(e);
			if (u) {
				u.flags |= 8, Xn.delete(e), S(t);
				return;
			}
			t.targetStart = e.targetStart;
			let p = t.target = e.target, h = t.targetAnchor = e.targetAnchor, g = $n(e.props), _ = g ? n : p, b = g ? r : h;
			if (o === "svg" || tr(p) ? o = "svg" : (o === "mathml" || nr(p)) && (o = "mathml"), y ? (f(e.dynamicChildren, y, _, i, a, o, s), $i(e, t, !0)) : c || d(e, t, _, b, i, a, o, s, !1), v) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ar(t, n, r, l, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = t.target = rr(t.props, m);
				e && ar(t, e, null, l, 0);
			} else g && ar(t, p, h, l, 1);
			cr(t, v);
		}
	},
	remove(e, t, n, { um: r, o: { remove: i } }, a) {
		let { shapeFlag: o, children: s, anchor: c, targetStart: l, targetAnchor: u, target: d, props: f } = e, p = a || !$n(f), m = Xn.get(e);
		if (m && (m.flags |= 8, Xn.delete(e)), d && (i(l), i(u)), a && i(c), !m && o & 16) for (let e = 0; e < s.length; e++) {
			let i = s[e];
			r(i, t, n, p, !!i.dynamicChildren);
		}
	},
	move: ar,
	hydrate: or
};
function ar(e, t, n, { o: { insert: r }, m: i }, a = 2) {
	a === 0 && r(e.targetAnchor, t, n);
	let { el: o, anchor: s, shapeFlag: c, children: l, props: u } = e, d = a === 2;
	if (d && r(o, t, n), !Xn.has(e) && (!d || $n(u)) && c & 16) for (let e = 0; e < l.length; e++) i(l[e], t, n, 2);
	d && r(s, t, n);
}
function or(e, t, n, r, i, a, { o: { nextSibling: o, parentNode: s, querySelector: c, insert: l, createText: u } }, d) {
	function f(e, n) {
		let r = n;
		for (; r;) {
			if (r && r.nodeType === 8) {
				if (r.data === "teleport start anchor") t.targetStart = r;
				else if (r.data === "teleport anchor") {
					t.targetAnchor = r, e._lpa = t.targetAnchor && o(t.targetAnchor);
					break;
				}
			}
			r = o(r);
		}
	}
	function p(e, t) {
		t.anchor = d(o(e), t, s(e), n, r, i, a);
	}
	let m = t.target = rr(t.props, c), h = $n(t.props);
	if (m) {
		let c = m._lpa || m.firstChild;
		t.shapeFlag & 16 && (h ? (p(e, t), f(m, c), t.targetAnchor || lr(m, t, u, l, s(e) === m ? e : null)) : (t.anchor = o(e), f(m, c), t.targetAnchor || lr(m, t, u, l), d(c && o(c), t, m, n, r, i, a))), cr(t, h);
	} else h && t.shapeFlag & 16 && (p(e, t), t.targetStart = e, t.targetAnchor = o(e));
	return t.anchor && o(t.anchor);
}
var sr = ir;
function cr(e, t) {
	let n = e.ctx;
	if (n && n.ut) {
		let r, i;
		for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i;) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
		n.ut();
	}
}
function lr(e, t, n, r, i = null) {
	let a = t.targetStart = n(""), o = t.targetAnchor = n("");
	return a[Zn] = o, e && (r(a, e, i), r(o, e, i)), o;
}
var ur = /* @__PURE__ */ Symbol("_leaveCb");
function dr(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, dr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function I(e, t) {
	return _(e) ? /* @__PURE__ */ l({ name: e.name }, t, { setup: e }) : e;
}
function fr() {
	let e = Ma();
	return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function pr(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function mr(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var hr = /* @__PURE__ */ new WeakMap();
function gr(e, t, n, i, a = !1) {
	if (p(e)) {
		e.forEach((e, r) => gr(e, t && (p(t) ? t[r] : t), n, i, a));
		return;
	}
	if (vr(i) && !a) {
		i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && gr(e, t, n, i.component.subTree);
		return;
	}
	let s = i.shapeFlag & 4 ? qa(i.component) : i.el, c = a ? null : s, { i: l, r: d } = e, m = t && t.r, h = l.refs === r ? l.refs = {} : l.refs, g = l.setupState, y = /* @__PURE__ */ j(g), b = g === r ? o : (e) => mr(h, e) ? !1 : f(y, e), x = (e, t) => !(t && mr(h, t));
	if (m != null && m !== d) {
		if (_r(t), v(m)) h[m] = null, b(m) && (g[m] = null);
		else if (/* @__PURE__ */ M(m)) {
			let e = t;
			x(m, e.k) && (m.value = null), e.k && (h[e.k] = null);
		}
	}
	if (_(d)) gn(d, l, 12, [c, h]);
	else {
		let t = v(d), r = /* @__PURE__ */ M(d);
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
					i(), hr.delete(e);
				};
				t.id = -1, hr.set(e, t), qi(t, n);
			} else _r(e), i();
		}
	}
}
function _r(e) {
	let t = hr.get(e);
	t && (t.flags |= 8, hr.delete(e));
}
fe().requestIdleCallback, fe().cancelIdleCallback;
var vr = (e) => !!e.type.__asyncLoader, yr = (e) => e.type.__isKeepAlive;
function br(e, t) {
	Sr(e, "a", t);
}
function xr(e, t) {
	Sr(e, "da", t);
}
function Sr(e, t, n = ja) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (wr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) yr(e.parent.vnode) && Cr(r, t, n, e), e = e.parent;
	}
}
function Cr(e, t, n, r) {
	let i = wr(t, e, r, !0);
	jr(() => {
		u(r[t], i);
	}, n);
}
function wr(e, t, n = ja, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Je();
			let i = Fa(n), a = _n(t, n, e, r);
			return i(), Ye(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var Tr = (e) => (t, n = ja) => {
	(!Ra || e === "sp") && wr(e, (...e) => t(...e), n);
}, Er = Tr("bm"), Dr = Tr("m"), Or = Tr("bu"), kr = Tr("u"), Ar = Tr("bum"), jr = Tr("um"), Mr = Tr("sp"), Nr = Tr("rtg"), Pr = Tr("rtc");
function Fr(e, t = ja) {
	wr("ec", e, t);
}
var Ir = "components", Lr = /* @__PURE__ */ Symbol.for("v-ndc");
function Rr(e) {
	return v(e) ? zr(Ir, e, !1) || e : e || Lr;
}
function zr(e, t, n = !0, r = !1) {
	let i = In || ja;
	if (i) {
		let n = i.type;
		if (e === Ir) {
			let e = Ja(n, !1);
			if (e && (e === t || e === E(t) || e === oe(E(t)))) return n;
		}
		let a = Br(i[e] || n[e], t) || Br(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function Br(e, t) {
	return e && (e[t] || e[E(t)] || e[oe(E(t))]);
}
function L(e, t, n, r) {
	let i, a = n && n[r], o = p(e);
	if (o || v(e)) {
		let n = o && /* @__PURE__ */ Gt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ qt(e), s = /* @__PURE__ */ Kt(e), e = lt(e)), i = Array(e.length);
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
function Vr(e, t, n = {}, r, i) {
	if (In.ce || In.parent && vr(In.parent) && In.parent.ce) {
		let e = Object.keys(n).length > 0;
		return t !== "default" && (n.name = t), z(), V(R, null, [U("slot", n, r && r())], e ? -2 : 64);
	}
	let a = e[t];
	a && a._c && (a._d = !1), z();
	let o = a && Hr(a(n)), s = n.key || o && o.key, c = V(R, { key: (s && !y(s) ? s : `_${t}`) + (!o && r ? "_fb" : "") }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), a && a._c && (a._d = !0), c;
}
function Hr(e) {
	return e.some((e) => ha(e) ? !(e.type === sa || e.type === R && !Hr(e.children)) : !0) ? e : null;
}
function Ur(e, t) {
	let n = {};
	for (let r in e) n[t && /[A-Z]/.test(r) ? `on:${r}` : se(r)] = e[r];
	return n;
}
var Wr = (e) => e ? La(e) ? qa(e) : Wr(e.parent) : null, Gr = /* @__PURE__ */ l(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Wr(e.parent),
	$root: (e) => Wr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => ni(e),
	$forceUpdate: (e) => e.f ||= () => {
		kn(e.update);
	},
	$nextTick: (e) => e.n ||= Dn.bind(e.proxy),
	$watch: (e) => Jn.bind(e)
}), Kr = (e, t) => e !== r && !e.__isScriptSetup && f(e, t), qr = {
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
			else if (Kr(i, t)) return s[t] = 1, i[t];
			else if (a !== r && f(a, t)) return s[t] = 2, a[t];
			else if (f(o, t)) return s[t] = 3, o[t];
			else if (n !== r && f(n, t)) return s[t] = 4, n[t];
			else Zr && (s[t] = 0);
		}
		let u = Gr[t], d, p;
		if (u) return t === "$attrs" && at(e.attrs, "get", ""), u(e);
		if ((d = c.__cssModules) && (d = d[t])) return d;
		if (n !== r && f(n, t)) return s[t] = 4, n[t];
		if (p = l.config.globalProperties, f(p, t)) return p[t];
	},
	set({ _: e }, t, n) {
		let { data: i, setupState: a, ctx: o } = e;
		return Kr(a, t) ? (a[t] = n, !0) : i !== r && f(i, t) ? (i[t] = n, !0) : f(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(n[c] || e !== r && c[0] !== "$" && f(e, c) || Kr(t, c) || f(o, c) || f(i, c) || f(Gr, c) || f(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? f(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Jr() {
	return Yr("useSlots").slots;
}
function Yr(e) {
	let t = Ma();
	return t.setupContext ||= Ka(t);
}
function Xr(e) {
	return p(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Zr = !0;
function Qr(e) {
	let t = ni(e), n = e.proxy, r = e.ctx;
	Zr = !1, t.beforeCreate && ei(t.beforeCreate, e, "bc");
	let { data: i, computed: o, methods: s, watch: c, provide: l, inject: u, created: d, beforeMount: f, mounted: m, beforeUpdate: h, updated: g, activated: v, deactivated: y, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: w, render: ee, renderTracked: T, renderTriggered: te, errorCaptured: ne, serverPrefetch: re, expose: E, inheritAttrs: ie, components: ae, directives: oe, filters: se } = t;
	if (u && $r(u, r, null), s) for (let e in s) {
		let t = s[e];
		_(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		b(t) && (e.data = /* @__PURE__ */ Vt(t));
	}
	if (Zr = !0, o) for (let e in o) {
		let t = o[e], i = K({
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
	if (c) for (let e in c) ti(c[e], r, n, e);
	if (l) {
		let e = _(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Vn(t, e[t]);
		});
	}
	d && ei(d, e, "c");
	function D(e, t) {
		p(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (D(Er, f), D(Dr, m), D(Or, h), D(kr, g), D(br, v), D(xr, y), D(Fr, ne), D(Pr, T), D(Nr, te), D(Ar, S), D(jr, w), D(Mr, re), p(E)) if (E.length) {
		let t = e.exposed ||= {};
		E.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	ee && e.render === a && (e.render = ee), ie != null && (e.inheritAttrs = ie), ae && (e.components = ae), oe && (e.directives = oe), re && pr(e);
}
function $r(e, t, n = a) {
	p(e) && (e = si(e));
	for (let n in e) {
		let r = e[n], i;
		i = b(r) ? "default" in r ? Hn(r.from || n, r.default, !0) : Hn(r.from || n) : Hn(r), /* @__PURE__ */ M(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function ei(e, t, n) {
	_n(p(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function ti(e, t, n, r) {
	let i = r.includes(".") ? Yn(n, r) : () => n[r];
	if (v(e)) {
		let n = t[e];
		_(n) && Kn(i, n);
	} else if (_(e)) Kn(i, e.bind(n));
	else if (b(e)) if (p(e)) e.forEach((e) => ti(e, t, n, r));
	else {
		let r = _(e.handler) ? e.handler.bind(n) : t[e.handler];
		_(r) && Kn(i, r, e);
	}
}
function ni(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => ri(c, e, o, !0)), ri(c, t, o)), b(t) && a.set(t, c), c;
}
function ri(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && ri(e, a, n, !0), i && i.forEach((t) => ri(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = ii[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var ii = {
	data: ai,
	props: di,
	emits: di,
	methods: li,
	computed: li,
	beforeCreate: ci,
	created: ci,
	beforeMount: ci,
	mounted: ci,
	beforeUpdate: ci,
	updated: ci,
	beforeDestroy: ci,
	beforeUnmount: ci,
	destroyed: ci,
	unmounted: ci,
	activated: ci,
	deactivated: ci,
	errorCaptured: ci,
	serverPrefetch: ci,
	components: li,
	directives: li,
	watch: fi,
	provide: ai,
	inject: oi
};
function ai(e, t) {
	return t ? e ? function() {
		return l(_(e) ? e.call(this, this) : e, _(t) ? t.call(this, this) : t);
	} : t : e;
}
function oi(e, t) {
	return li(si(e), si(t));
}
function si(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function ci(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function li(e, t) {
	return e ? l(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function di(e, t) {
	return e ? p(e) && p(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : l(/* @__PURE__ */ Object.create(null), Xr(e), Xr(t ?? {})) : t;
}
function fi(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = l(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = ci(e[r], t[r]);
	return n;
}
function pi() {
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
var mi = 0;
function hi(e, t) {
	return function(n, r = null) {
		_(n) || (n = l({}, n)), r != null && !b(r) && (r = null);
		let i = pi(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: mi++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Xa,
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
					let u = c._ceVNode || U(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, qa(u.component);
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
				let t = gi;
				gi = c;
				try {
					return e();
				} finally {
					gi = t;
				}
			}
		};
		return c;
	};
}
var gi = null, _i = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${E(t)}Modifiers`] || e[`${ae(t)}Modifiers`];
function vi(e, t, ...n) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || r, a = n, o = t.startsWith("update:"), s = o && _i(i, t.slice(7));
	s && (s.trim && (a = n.map((e) => v(e) ? e.trim() : e)), s.number && (a = n.map(ue)));
	let c, l = i[c = se(t)] || i[c = se(E(t))];
	!l && o && (l = i[c = se(ae(t))]), l && _n(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, _n(u, e, 6, a);
	}
}
var yi = /* @__PURE__ */ new WeakMap();
function bi(e, t, n = !1) {
	let r = n ? yi : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!_(e)) {
		let r = (e) => {
			let n = bi(e, t, !0);
			n && (s = !0, l(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (b(e) && r.set(e, null), null) : (p(a) ? a.forEach((e) => o[e] = null) : l(o, a), b(e) && r.set(e, o), o);
}
function xi(e, t) {
	return !e || !s(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), f(e, t[0].toLowerCase() + t.slice(1)) || f(e, ae(t)) || f(e, t));
}
function Si(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Rn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = Ca(u.call(t, e, d, f, m, p, h)), y = s;
		} else {
			let e = t;
			v = Ca(e.length > 1 ? e(f, {
				attrs: s,
				slots: o,
				emit: l
			}) : e(f, null)), y = t.props ? s : Ci(s);
		}
	} catch (t) {
		la.length = 0, vn(t, e, 1), v = U(sa);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(c) && (y = wi(y, a)), b = xa(b, y, !1, !0));
	}
	return n.dirs && (b = xa(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && dr(b, n.transition), v = b, Rn(_), v;
}
var Ci = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || s(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, wi = (e, t) => {
	let n = {};
	for (let r in e) (!c(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function Ti(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Ei(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (Di(o, r, n) && !xi(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? Ei(r, o, l) : !0 : !!o;
	return !1;
}
function Ei(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (Di(t, e, a) && !xi(n, a)) return !0;
	}
	return !1;
}
function Di(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && b(r) && b(i) ? !Se(r, i) : r !== i;
}
function Oi({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var ki = {}, Ai = () => Object.create(ki), ji = (e) => Object.getPrototypeOf(e) === ki;
function Mi(e, t, n, r = !1) {
	let i = {}, a = Ai();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), Pi(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ Ht(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function Ni(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ j(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (xi(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (f(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = E(o);
					i[t] = Fi(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		Pi(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !f(t, a) && ((r = ae(a)) === a || !f(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Fi(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !f(t, e)) && (delete a[e], l = !0);
	}
	l && ot(e.attrs, "set", "");
}
function Pi(e, t, n, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (t) for (let r in t) {
		if (te(r)) continue;
		let l = t[r], u;
		a && f(a, u = E(r)) ? !o || !o.includes(u) ? n[u] = l : (c ||= {})[u] = l : xi(e.emitsOptions, r) || (!(r in i) || l !== i[r]) && (i[r] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ j(n), i = c || r;
		for (let r = 0; r < o.length; r++) {
			let s = o[r];
			n[s] = Fi(a, t, s, i[s], e, !f(i, s));
		}
	}
	return s;
}
function Fi(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = f(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && _(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = Fa(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === ae(n)) && (r = !0));
	}
	return r;
}
var Ii = /* @__PURE__ */ new WeakMap();
function Li(e, t, n = !1) {
	let a = n ? Ii : t.propsCache, o = a.get(e);
	if (o) return o;
	let s = e.props, c = {}, u = [], d = !1;
	if (!_(e)) {
		let r = (e) => {
			d = !0;
			let [n, r] = Li(e, t, !0);
			l(c, n), r && u.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!s && !d) return b(e) && a.set(e, i), i;
	if (p(s)) for (let e = 0; e < s.length; e++) {
		let t = E(s[e]);
		Ri(t) && (c[t] = r);
	}
	else if (s) for (let e in s) {
		let t = E(e);
		if (Ri(t)) {
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
function Ri(e) {
	return e[0] !== "$" && !te(e);
}
var zi = (e) => e === "_" || e === "_ctx" || e === "$stable", Bi = (e) => p(e) ? e.map(Ca) : [Ca(e)], Vi = (e, t, n) => {
	if (t._n) return t;
	let r = F((...e) => Bi(t(...e)), n);
	return r._c = !1, r;
}, Hi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (zi(n)) continue;
		let i = e[n];
		if (_(i)) t[n] = Vi(n, i, r);
		else if (i != null) {
			let e = Bi(i);
			t[n] = () => e;
		}
	}
}, Ui = (e, t) => {
	let n = Bi(t);
	e.slots.default = () => n;
}, Wi = (e, t, n) => {
	for (let r in t) (n || !zi(r)) && (e[r] = t[r]);
}, Gi = (e, t, n) => {
	let r = e.slots = Ai();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Wi(r, t, n), n && le(r, "_", e, !0)) : Hi(t, r);
	} else t && Ui(e, t);
}, Ki = (e, t, n) => {
	let { vnode: i, slots: a } = e, o = !0, s = r;
	if (i.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? o = !1 : Wi(a, t, n) : (o = !t.$stable, Hi(t, a)), s = t;
	} else t && (Ui(e, t), s = { default: 1 });
	if (o) for (let e in a) !zi(e) && s[e] == null && delete a[e];
}, qi = aa;
function Ji(e) {
	return Yi(e);
}
function Yi(e, t) {
	let n = fe();
	n.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = a, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !ga(e, t) && (r = be(e), ge(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case oa:
				y(e, t, n, r);
				break;
			case sa:
				b(e, t, n, r);
				break;
			case ca:
				e ?? x(t, n, r, o);
				break;
			case R:
				ae(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? oe(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, Ce);
		}
		u != null && i ? gr(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && gr(e.ref, null, a, e, !0);
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
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) ee(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), re(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, ee = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && ne(e.children, d, null, r, i, Xi(e, a), s, u), _ && Bn(e, null, r, "created"), T(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !te(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && Da(f, r, e);
		}
		_ && Bn(e, null, r, "beforeMount");
		let v = Qi(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && qi(() => {
			try {
				f && Da(f, r, e), v && g.enter(d), _ && Bn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, T = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || ia(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				T(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, ne = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? wa(e[l]) : Ca(e[l]), t, n, r, i, a, o, s);
	}, re = (e, t, n, i, a, o, s) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || r, h = t.props || r, g;
		if (n && Zi(n, !1), (g = h.onVnodeBeforeUpdate) && Da(g, n, t, e), f && Bn(t, e, n, "beforeUpdate"), n && Zi(n, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? E(e.dynamicChildren, d, l, n, i, Xi(t, a), o) : s || de(e, t, l, null, n, i, Xi(t, a), o, !1), u > 0) {
			if (u & 16) ie(l, m, h, n, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let r = e[t], i = m[r], o = h[r];
					(o !== i || r === "value") && c(l, r, i, o, a, n);
				}
			}
			u & 1 && e.children !== t.children && p(l, t.children);
		} else !s && d == null && ie(l, m, h, n, a);
		((g = h.onVnodeUpdated) || f) && qi(() => {
			g && Da(g, n, t, e), f && Bn(t, e, n, "updated");
		}, i);
	}, E = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === R || !ga(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
		}
	}, ie = (e, t, n, i, a) => {
		if (t !== n) {
			if (t !== r) for (let r in t) !te(r) && !(r in n) && c(e, r, t[r], null, a, i);
			for (let r in n) {
				if (te(r)) continue;
				let o = n[r], s = t[r];
				o !== s && r !== "value" && c(e, r, s, o, a, i);
			}
			"value" in n && c(e, "value", t.value, n.value, a);
		}
	}, ae = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), ne(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (E(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && $i(e, t, !0)) : de(e, t, n, f, i, a, s, c, l);
	}, oe = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : se(t, n, r, i, a, o, c) : D(e, t, c);
	}, se = (e, t, n, r, i, a, o) => {
		let s = e.component = Aa(e, r, i);
		if (yr(e) && (s.ctx.renderer = Ce), za(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, le, o), !e.el) {
				let r = s.subTree = U(sa);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else le(s, e, t, n, i, a, o);
	}, D = (e, t, n) => {
		let r = t.component = e.component;
		if (Ti(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			ue(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, le = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = ta(e);
					if (n) {
						t && (t.el = c.el, ue(e, t, o)), n.asyncDep.then(() => {
							qi(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Zi(e, !1), t ? (t.el = c.el, ue(e, t, o)) : t = c, n && ce(n), (d = t.props && t.props.onVnodeBeforeUpdate) && Da(d, s, t, c), Zi(e, !0);
				let f = Si(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), be(p), e, i, a), t.el = f.el, u === null && Oi(e, f.el), r && qi(r, i), (d = t.props && t.props.onVnodeUpdated) && qi(() => Da(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = vr(t);
				if (Zi(e, !1), l && ce(l), !m && (o = c && c.onVnodeBeforeMount) && Da(o, d, t), Zi(e, !0), s && k) {
					let t = () => {
						e.subTree = Si(e), k(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Si(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && qi(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					qi(() => Da(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && vr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && qi(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ne(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => kn(u), Zi(e, !0), l();
	}, ue = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Ni(e, t.props, r, n), Ki(e, t.children, n), Je(), Mn(e), Ye();
	}, de = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				me(l, d, n, r, i, a, o, s, c);
				return;
			} else if (f & 256) {
				pe(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && ye(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? me(l, d, n, r, i, a, o, s, c) : ye(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && ne(d, n, r, i, a, o, s, c));
	}, pe = (e, t, n, r, a, o, s, c, l) => {
		e ||= i, t ||= i;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let r = t[p] = l ? wa(t[p]) : Ca(t[p]);
			v(e[p], r, n, null, a, o, s, c, l);
		}
		u > d ? ye(e, a, o, !0, !1, f) : ne(t, n, r, a, o, s, c, l, f);
	}, me = (e, t, n, r, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], i = t[u] = l ? wa(t[u]) : Ca(t[u]);
			if (ga(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], i = t[p] = l ? wa(t[p]) : Ca(t[p]);
			if (ga(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, i = e < d ? t[e].el : r;
				for (; u <= p;) v(null, t[u] = l ? wa(t[u]) : Ca(t[u]), n, i, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) ge(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? wa(t[u]) : Ca(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let r = e[u];
				if (y >= b) {
					ge(r, a, o, !0);
					continue;
				}
				let i;
				if (r.key != null) i = g.get(r.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && ga(r, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? ge(r, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(r, t[i], n, null, a, o, s, c, l), y++);
			}
			let w = x ? ea(C) : i;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, i = t[e], f = t[e + 1], p = e + 1 < d ? f.el || ra(f) : r;
				C[u] === 0 ? v(null, i, n, p, a, o, s, c, l) : x && (_ < 0 || u !== w[_] ? he(i, n, p, 2) : _--);
			}
		}
	}, he = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			he(e.component.subTree, t, n, r);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, r);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, Ce);
			return;
		}
		if (c === R) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) he(u[e], t, n, r);
			o(e.anchor, t, n);
			return;
		}
		if (c === ca) {
			S(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) if (r === 0) l.persisted && !a[ur] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), qi(() => l.enter(a), i));
		else {
			let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? s(a) : o(a, t, n);
			}, d = () => {
				let e = a._isLeaving || !!a[ur];
				a._isLeaving && a[ur](!0), l.persisted && !e ? u() : r(a, () => {
					u(), c && c();
				});
			};
			i ? i(a, u, d) : d();
		}
		else o(a, t, n);
	}, ge = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (Je(), gr(s, null, n, e, !0), Ye()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !vr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Da(_, t, e), u & 6) ve(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Bn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Ce, r) : l && !l.hasOnce && (a !== R || d > 0 && d & 64) ? ye(l, t, n, !1, !0) : (a === R && d & 384 || !i && u & 16) && ye(c, t, n), r && _e(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && qi(() => {
			_ && Da(_, t, e), h && Bn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, _e = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === R) {
			O(n, r);
			return;
		}
		if (t === ca) {
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
	}, O = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, ve = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		na(c), na(l), r && ce(r), i.stop(), a && (a.flags |= 8, ge(o, e, t, n)), s && qi(s, t), qi(() => {
			e.isUnmounted = !0;
		}, t);
	}, ye = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) ge(e[o], t, n, r, i);
	}, be = (e) => {
		if (e.shapeFlag & 6) return be(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Zn];
		return n ? h(n) : t;
	}, xe = !1, Se = (e, t, n) => {
		let r;
		e == null ? t._vnode && (ge(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, xe ||= (xe = !0, Mn(r), Nn(), !1);
	}, Ce = {
		p: v,
		um: ge,
		m: he,
		r: _e,
		mt: se,
		mc: ne,
		pc: de,
		pbc: E,
		n: be,
		o: e
	}, we, k;
	return t && ([we, k] = t(Ce)), {
		render: Se,
		hydrate: we,
		createApp: hi(Se, we)
	};
}
function Xi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Zi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Qi(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function $i(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (p(r) && p(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = wa(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && $i(t, a)), a.type === oa && (a.patchFlag === -1 && (a = i[e] = wa(a)), a.el = t.el), a.type === sa && !a.el && (a.el = t.el);
	}
}
function ea(e) {
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
function ta(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : ta(t);
}
function na(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function ra(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? ra(t.subTree) : null;
}
var ia = (e) => e.__isSuspense;
function aa(e, t) {
	t && t.pendingBranch ? p(e) ? t.effects.push(...e) : t.effects.push(e) : jn(e);
}
var R = /* @__PURE__ */ Symbol.for("v-fgt"), oa = /* @__PURE__ */ Symbol.for("v-txt"), sa = /* @__PURE__ */ Symbol.for("v-cmt"), ca = /* @__PURE__ */ Symbol.for("v-stc"), la = [], ua = null;
function z(e = !1) {
	la.push(ua = e ? null : []);
}
function da() {
	la.pop(), ua = la[la.length - 1] || null;
}
var fa = 1;
function pa(e, t = !1) {
	fa += e, e < 0 && ua && t && (ua.hasOnce = !0);
}
function ma(e) {
	return e.dynamicChildren = fa > 0 ? ua || i : null, da(), fa > 0 && ua && ua.push(e), e;
}
function B(e, t, n, r, i, a) {
	return ma(H(e, t, n, r, i, a, !0));
}
function V(e, t, n, r, i) {
	return ma(U(e, t, n, r, i, !0));
}
function ha(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function ga(e, t) {
	return e.type === t.type && e.key === t.key;
}
var _a = ({ key: e }) => e ?? null, va = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : v(e) || /* @__PURE__ */ M(e) || _(e) ? {
	i: In,
	r: e,
	k: t,
	f: !!n
} : e);
function H(e, t = null, n = null, r = 0, i = null, a = e === R ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && _a(t),
		ref: t && va(t),
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
	return s ? (Ta(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= v(n) ? 8 : 16), fa > 0 && !o && ua && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && ua.push(c), c;
}
var U = ya;
function ya(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === Lr) && (e = sa), ha(e)) {
		let r = xa(e, t, !0);
		return n && Ta(r, n), fa > 0 && !a && ua && (r.shapeFlag & 6 ? ua[ua.indexOf(e)] = r : ua.push(r)), r.patchFlag = -2, r;
	}
	if (Ya(e) && (e = e.__vccOpts), t) {
		t = ba(t);
		let { class: e, style: n } = t;
		e && !v(e) && (t.class = O(e)), b(n) && (/* @__PURE__ */ Jt(n) && !p(n) && (n = l({}, n)), t.style = pe(n));
	}
	let o = v(e) ? 1 : ia(e) ? 128 : Qn(e) ? 64 : b(e) ? 4 : _(e) ? 2 : 0;
	return H(e, t, n, r, i, o, a, !0);
}
function ba(e) {
	return e ? /* @__PURE__ */ Jt(e) || ji(e) ? l({}, e) : e : null;
}
function xa(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Ea(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && _a(l),
		ref: t && t.ref ? n && a ? p(a) ? a.concat(va(t)) : [a, va(t)] : va(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== R ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && xa(e.ssContent),
		ssFallback: e.ssFallback && xa(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && dr(u, c.clone(u)), u;
}
function W(e = " ", t = 0) {
	return U(oa, null, e, t);
}
function Sa(e, t) {
	let n = U(ca, null, e);
	return n.staticCount = t, n;
}
function G(e = "", t = !1) {
	return t ? (z(), V(sa, null, e)) : U(sa, null, e);
}
function Ca(e) {
	return e == null || typeof e == "boolean" ? U(sa) : p(e) ? U(R, null, e.slice()) : ha(e) ? wa(e) : U(oa, null, String(e));
}
function wa(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : xa(e);
}
function Ta(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (p(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), Ta(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !ji(t) ? t._ctx = In : r === 3 && In && (In.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else _(t) ? (t = {
		default: t,
		_ctx: In
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [W(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function Ea(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = O([t.class, r.class]));
		else if (e === "style") t.style = pe([t.style, r.style]);
		else if (s(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(p(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !c(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function Da(e, t, n, r = null) {
	_n(e, t, 7, [n, r]);
}
var Oa = pi(), ka = 0;
function Aa(e, t, n) {
	let i = e.type, a = (t ? t.appContext : e.appContext) || Oa, o = {
		uid: ka++,
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
		scope: new Oe(!0),
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
		propsOptions: Li(i, a),
		emitsOptions: bi(i, a),
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
	return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = vi.bind(null, o), e.ce && e.ce(o), o;
}
var ja = null, Ma = () => ja || In, Na, Pa;
{
	let e = fe(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Na = t("__VUE_INSTANCE_SETTERS__", (e) => ja = e), Pa = t("__VUE_SSR_SETTERS__", (e) => Ra = e);
}
var Fa = (e) => {
	let t = ja;
	return Na(e), e.scope.on(), () => {
		e.scope.off(), Na(t);
	};
}, Ia = () => {
	ja && ja.scope.off(), Na(null);
};
function La(e) {
	return e.vnode.shapeFlag & 4;
}
var Ra = !1;
function za(e, t = !1, n = !1) {
	t && Pa(t);
	let { props: r, children: i } = e.vnode, a = La(e);
	Mi(e, r, a, t), Gi(e, i, n || t);
	let o = a ? Ba(e, t) : void 0;
	return t && Pa(!1), o;
}
function Ba(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, qr);
	let { setup: r } = n;
	if (r) {
		Je();
		let n = e.setupContext = r.length > 1 ? Ka(e) : null, i = Fa(e), a = gn(r, e, 0, [e.props, n]), o = x(a);
		if (Ye(), i(), (o || e.sp) && !vr(e) && pr(e), o) {
			if (a.then(Ia, Ia), t) return a.then((n) => {
				Va(e, n, t);
			}).catch((t) => {
				vn(t, e, 0);
			});
			e.asyncDep = a;
		} else Va(e, a, t);
	} else Wa(e, t);
}
function Va(e, t, n) {
	_(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : b(t) && (e.setupState = tn(t)), Wa(e, n);
}
var Ha, Ua;
function Wa(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && Ha && !r.render) {
			let t = r.template || ni(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r;
				r.render = Ha(t, l(l({
					isCustomElement: n,
					delimiters: a
				}, i), o));
			}
		}
		e.render = r.render || a, Ua && Ua(e);
	}
	{
		let t = Fa(e);
		Je();
		try {
			Qr(e);
		} finally {
			Ye(), t();
		}
	}
}
var Ga = { get(e, t) {
	return at(e, "get", ""), e[t];
} };
function Ka(e) {
	return {
		attrs: new Proxy(e.attrs, Ga),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function qa(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(tn(Yt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Gr) return Gr[n](e);
		},
		has(e, t) {
			return t in e || t in Gr;
		}
	}) : e.proxy;
}
function Ja(e, t = !0) {
	return _(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ya(e) {
	return _(e) && "__vccOpts" in e;
}
var K = (e, t) => /* @__PURE__ */ ln(e, t, Ra), Xa = "3.5.38", Za = void 0, Qa = typeof window < "u" && window.trustedTypes;
if (Qa) try {
	Za = /* @__PURE__ */ Qa.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var $a = Za ? (e) => Za.createHTML(e) : (e) => e, eo = "http://www.w3.org/2000/svg", to = "http://www.w3.org/1998/Math/MathML", no = typeof document < "u" ? document : null, ro = no && /* @__PURE__ */ no.createElement("template"), io = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? no.createElementNS(eo, e) : t === "mathml" ? no.createElementNS(to, e) : n ? no.createElement(e, { is: n }) : no.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => no.createTextNode(e),
	createComment: (e) => no.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => no.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			ro.innerHTML = $a(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = ro.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, ao = /* @__PURE__ */ Symbol("_vtc");
function oo(e, t, n) {
	let r = e[ao];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var so = /* @__PURE__ */ Symbol("_vod"), co = /* @__PURE__ */ Symbol("_vsh"), lo = /* @__PURE__ */ Symbol(""), uo = /(?:^|;)\s*display\s*:/;
function fo(e, t, n) {
	let r = e.style, i = v(n), a = !1;
	if (n && !i) {
		if (t) if (v(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? mo(r, t, "");
		}
		else for (let e in t) n[e] ?? mo(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? mo(r, i, "") : vo(e, i, !v(t) && t ? t[i] : void 0, o) || mo(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[lo];
			e && (n += ";" + e), r.cssText = n, a = uo.test(n);
		}
	} else t && e.removeAttribute("style");
	so in e && (e[so] = a ? r.display : "", e[co] && (r.display = "none"));
}
var po = /\s*!important$/;
function mo(e, t, n) {
	if (p(n)) n.forEach((n) => mo(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = _o(e, t);
		po.test(n) ? e.setProperty(ae(r), n.replace(po, ""), "important") : e[r] = n;
	}
}
var ho = [
	"Webkit",
	"Moz",
	"ms"
], go = {};
function _o(e, t) {
	let n = go[t];
	if (n) return n;
	let r = E(t);
	if (r !== "filter" && r in e) return go[t] = r;
	r = oe(r);
	for (let n = 0; n < ho.length; n++) {
		let i = ho[n] + r;
		if (i in e) return go[t] = i;
	}
	return t;
}
function vo(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && v(r) && n === r;
}
var yo = "http://www.w3.org/1999/xlink";
function bo(e, t, n, r, i, a = ye(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(yo, t.slice(6, t.length)) : e.setAttributeNS(yo, t, n) : n == null || a && !be(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : y(n) ? String(n) : n);
}
function xo(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? $a(n) : n);
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
		r === "boolean" ? n = be(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function So(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Co(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var wo = /* @__PURE__ */ Symbol("_vei");
function To(e, t, n, r, i = null) {
	let a = e[wo] || (e[wo] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Do(t);
		r ? So(e, n, a[t] = jo(r, i), s) : o && (Co(e, n, o, s), a[t] = void 0);
	}
}
var Eo = /(?:Once|Passive|Capture)$/;
function Do(e) {
	let t;
	if (Eo.test(e)) {
		t = {};
		let n;
		for (; n = e.match(Eo);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : ae(e.slice(2)), t];
}
var Oo = 0, ko = /* @__PURE__ */ Promise.resolve(), Ao = () => Oo ||= (ko.then(() => Oo = 0), Date.now());
function jo(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (p(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && _n(e, t, 5, a);
			}
		} else _n(r, t, 5, [e]);
	};
	return n.value = e, n.attached = Ao(), n;
}
var Mo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, No = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? oo(e, r, o) : t === "style" ? fo(e, n, r) : s(t) ? c(t) || To(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Po(e, t, r, o)) ? (xo(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && bo(e, t, r, o, a, t !== "value")) : e._isVueCE && (Fo(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !v(r))) ? xo(e, E(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), bo(e, t, r, o));
};
function Po(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Mo(t) && _(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Mo(t) && v(n) ? !1 : t in e;
}
function Fo(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = E(t);
	return Array.isArray(n) ? n.some((e) => E(e) === r) : Object.keys(n).some((e) => E(e) === r);
}
var Io = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return p(t) ? (e) => ce(t, e) : t;
};
function Lo(e) {
	e.target.composing = !0;
}
function Ro(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var zo = /* @__PURE__ */ Symbol("_assign");
function Bo(e, t, n) {
	return t && (e = e.trim()), n && (e = ue(e)), e;
}
var Vo = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[zo] = Io(i);
		let a = r || i.props && i.props.type === "number";
		So(e, t ? "change" : "input", (t) => {
			t.target.composing || e[zo](Bo(e.value, n, a));
		}), (n || a) && So(e, "change", () => {
			e.value = Bo(e.value, n, a);
		}), t || (So(e, "compositionstart", Lo), So(e, "compositionend", Ro), So(e, "change", Ro));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[zo] = Io(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? ue(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, Ho = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = h(t);
		So(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? ue(Wo(e)) : Wo(e));
			e[zo](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, Dn(() => {
				e._assigning = !1;
			});
		}), e[zo] = Io(r);
	},
	mounted(e, { value: t }) {
		Uo(e, t);
	},
	beforeUpdate(e, t, n) {
		e[zo] = Io(n);
	},
	updated(e, { value: t }) {
		e._assigning || Uo(e, t);
	}
};
function Uo(e, t) {
	let n = e.multiple, r = p(t);
	if (!(n && !r && !h(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = Wo(a);
			if (n) if (r) {
				let e = typeof o;
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = Ce(t, o) > -1;
			} else a.selected = t.has(o);
			else if (Se(Wo(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function Wo(e) {
	return "_value" in e ? e._value : e.value;
}
var Go = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], Ko = {
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
	exact: (e, t) => Go.some((n) => e[`${n}Key`] && !t.includes(n))
}, qo = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = Ko[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, Jo = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, Yo = (e, t) => {
	let n = e._withKeys ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = ae(n.key);
		if (t.some((e) => e === r || Jo[e] === r)) return e(n);
	}));
}, Xo = /* @__PURE__ */ l({ patchProp: No }, io), Zo;
function Qo() {
	return Zo ||= Ji(Xo);
}
var $o = ((...e) => {
	let t = Qo().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = ts(e);
		if (!r) return;
		let i = t._component;
		!_(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, es(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function es(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function ts(e) {
	return v(e) ? document.querySelector(e) : e;
}
//#endregion
//#region src/functions/species-builder/config-keys.ts
function ns(e) {
	return e.trim().toLocaleLowerCase().replaceAll(/[^\da-z]+/g, "-").replaceAll(/^-+|-+$/g, "");
}
//#endregion
//#region src/functions/species-builder/editor/field-values.ts
function rs(e) {
	let t = e.split(/\r?\n/).map((e) => e.trim()).filter((e) => e.length > 0);
	return t.length > 0 ? t : void 0;
}
function is(e) {
	let t = fs(e).flatMap(([e, t]) => t ? [[e, t]] : []);
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function as(e) {
	let t = fs(e).flatMap(([e, t]) => {
		let n = ds(t);
		return n === void 0 ? [] : [[e, n]];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function os(e) {
	let t = fs(e).flatMap(([e, t]) => {
		let n = t.split(",").map((e) => e.trim()).filter((e) => e.length > 0);
		return n.length > 0 ? [[e, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function ss(e) {
	let t = e.trim();
	return t.length > 0 ? t : void 0;
}
function cs(e) {
	return e.length > 0 ? e : void 0;
}
function ls(e) {
	let t = ss(e);
	return t ? { formula: t } : void 0;
}
function us(e) {
	let t = e.map((e) => {
		let t = { name: e.name }, n = ss(e.journalUuid ?? "");
		return n && (t.journalUuid = n), t;
	});
	return t.length > 0 ? { rows: t } : void 0;
}
function ds(e) {
	let t = e.trim();
	if (!t) return;
	let n = Number(t);
	return Number.isFinite(n) ? n : void 0;
}
function fs(e) {
	return e.split(/\r?\n/).flatMap((e) => {
		let t = e.indexOf(":");
		if (t < 0) return [];
		let n = e.slice(0, t).trim(), r = e.slice(t + 1).trim();
		return n ? [[n, r]] : [];
	});
}
//#endregion
//#region src/functions/species-builder/editor/draft.ts
function ps(e, t) {
	return e === "careerReplacements" ? os(t) : e === "randomTalents" ? as(t) : is(t);
}
function ms(e, t) {
	return e === "randomTalents" ? as(t) : is(t);
}
function q(e, t, n) {
	let r = { ...e };
	return n === void 0 ? delete r[t] : r[t] = n, r;
}
function hs(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.key.trim();
		e && t.set(e, (t.get(e) ?? 0) + 1);
	}
	return [...t.entries()].flatMap(([e, t]) => t > 1 ? [e] : []);
}
function gs(e, t) {
	let n = new Set(e.map((e) => e.key.trim())), r = new Set(t.filter((e) => !n.has(e.key.trim())).map((e) => vs(e.label)).filter(Boolean)), i = /* @__PURE__ */ new Map();
	for (let t of e) {
		let e = t.name.trim(), n = vs(e);
		if (!n) continue;
		let r = i.get(n);
		i.set(n, {
			count: (r?.count ?? 0) + 1,
			label: r?.label ?? e
		});
	}
	return [...i.entries()].flatMap(([e, t]) => t.count > 1 || r.has(e) ? [t.label] : []).sort((e, t) => e.localeCompare(t));
}
function _s(e) {
	return e.map((e) => e.name.trim()).filter((e) => e && /[{}]/u.test(e));
}
function vs(e) {
	return e.trim().toLocaleLowerCase();
}
function ys(e) {
	let t = /* @__PURE__ */ new Set();
	return e.map((e) => {
		let n = Os(e);
		return n.key = xs(e.key, e.name, "new-species", t), e.subspecies && (n.subspecies = bs(e.subspecies)), n;
	});
}
function bs(e) {
	let t = /* @__PURE__ */ new Set();
	return e.map((e) => ({
		...Os(e),
		key: xs(e.key, e.name, "new-subspecies", t)
	}));
}
function xs(e, t, n, r) {
	let i = ns(e);
	if (i) return r.add(i), i;
	let a = Ss(ns(t) || n, r);
	return r.add(a), a;
}
function Ss(e, t) {
	if (!t.has(e)) return e;
	let n = 2, r = `${e}-${n}`;
	for (; t.has(r);) n += 1, r = `${e}-${n}`;
	return r;
}
function Cs(e) {
	return e.flatMap((e) => {
		let t = hs(e.subspecies ?? []);
		return t.length > 0 ? [{
			keys: t,
			speciesName: e.name
		}] : [];
	});
}
function ws(e) {
	return e.flatMap((e) => (e.subspecies ?? []).flatMap((t, n) => t.key.trim() && t.name.trim() ? [] : [{
		index: n,
		speciesName: e.name
	}]));
}
function Ts(e) {
	return JSON.stringify(Es(e));
}
function Es(e) {
	return Array.isArray(e) ? e.map(Es) : e && typeof e == "object" ? Object.fromEntries(Object.entries(e).sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [e, Es(t)])) : e;
}
function Ds(e) {
	return JSON.stringify(e, null, 2);
}
function Os(e) {
	return JSON.parse(JSON.stringify(e));
}
function ks(e) {
	return e instanceof Error ? e.message : "Unknown Species Builder error.";
}
//#endregion
//#region node_modules/pinia/dist/pinia.mjs
var As = typeof window < "u", js, Ms = (e) => js = e, Ns = Symbol();
function Ps(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Fs;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Fs ||= {});
var Is = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Ls(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function Rs(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		Us(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function zs(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function Bs(e) {
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
var Vs = typeof navigator == "object" ? navigator : { userAgent: "" }, Hs = /Macintosh/.test(Vs.userAgent) && /AppleWebKit/.test(Vs.userAgent) && !/Safari/.test(Vs.userAgent), Us = As ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Hs ? Ws : "msSaveOrOpenBlob" in Vs ? Gs : Ks : () => {};
function Ws(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? Bs(r) : zs(r.href) ? Rs(e, t, n) : (r.target = "_blank", Bs(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		Bs(r);
	}, 0));
}
function Gs(e, t = "download", n) {
	if (typeof e == "string") if (zs(e)) Rs(e, t, n);
	else {
		let t = document.createElement("a");
		t.href = e, t.target = "_blank", setTimeout(function() {
			Bs(t);
		});
	}
	else navigator.msSaveOrOpenBlob(Ls(e, n), t);
}
function Ks(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return Rs(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(Is.HTMLElement)) || "safari" in Is, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || Hs) && typeof FileReader < "u") {
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
var { assign: qs } = Object;
function Js() {
	let e = ke(!0), t = e.run(() => /* @__PURE__ */ N({})), n = [], r = [], i = Yt({
		install(e) {
			Ms(i), i._a = e, e.provide(Ns, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var Ys = () => {};
function Xs(e, t, n, r = Ys) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && Ae() && je(i), i;
}
function Zs(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var Qs = (e) => e(), $s = Symbol(), ec = Symbol();
function tc(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		Ps(i) && Ps(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ M(r) && !/* @__PURE__ */ Gt(r) ? e[n] = tc(i, r) : e[n] = r;
	}
	return e;
}
var nc = Symbol();
function rc(e) {
	return !Ps(e) || !Object.prototype.hasOwnProperty.call(e, nc);
}
var { assign: ic } = Object;
function ac(e) {
	return !!(/* @__PURE__ */ M(e) && e.effect);
}
function oc(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), ic(/* @__PURE__ */ nn(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Yt(K(() => {
			Ms(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = sc(e, l, t, n, r, !0), c;
}
function sc(e, t, n = {}, r, i, a) {
	let o, s = ic({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = r.state.value[e];
	!a && !p && (r.state.value[e] = {});
	let m;
	function h(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: Fs.patchFunction,
			storeId: e,
			events: void 0
		}) : (tc(r.state.value[e], t), n = {
			type: Fs.patchObject,
			payload: t,
			storeId: e,
			events: void 0
		});
		let i = m = Symbol();
		Dn().then(() => {
			m === i && (l = !0);
		}), u = !0, Zs(d, n, r.state.value[e]);
	}
	let g = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			ic(e, t);
		});
	} : Ys;
	function _() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let v = (t, n = "") => {
		if ($s in t) return t[ec] = n, t;
		let i = function() {
			Ms(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			Zs(f, {
				args: n,
				name: i[ec],
				store: y,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : y, n);
			} catch (e) {
				throw Zs(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (Zs(a, e), e)).catch((e) => (Zs(o, e), Promise.reject(e))) : (Zs(a, l), l);
		};
		return i[$s] = !0, i[ec] = n, i;
	}, y = /* @__PURE__ */ Vt({
		_p: r,
		$id: e,
		$onAction: Xs.bind(null, f),
		$patch: h,
		$reset: g,
		$subscribe(t, n = {}) {
			let i = Xs(d, t, n.detached, () => a()), a = o.run(() => Kn(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: Fs.direct,
					events: void 0
				}, r);
			}, ic({}, c, n)));
			return i;
		},
		$dispose: _
	});
	r._s.set(e, y);
	let b = (r._a && r._a.runWithContext || Qs)(() => r._e.run(() => (o = ke()).run(() => t({ action: v }))));
	for (let t in b) {
		let n = b[t];
		/* @__PURE__ */ M(n) && !ac(n) || /* @__PURE__ */ Gt(n) ? a || (p && rc(n) && (/* @__PURE__ */ M(n) ? n.value = p[t] : tc(n, p[t])), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = v(n, t), s.actions[t] = n);
	}
	return ic(y, b), ic(/* @__PURE__ */ j(y), b), Object.defineProperty(y, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			h((t) => {
				ic(t, e);
			});
		}
	}), r._p.forEach((e) => {
		ic(y, o.run(() => e({
			store: y,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), p && a && n.hydrate && n.hydrate(y.$state, p), l = !0, u = !0, y;
}
function cc(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Un();
		return n ||= o ? Hn(Ns, null) : null, n && Ms(n), n = js, n._s.has(e) || (i ? sc(e, t, r, n) : oc(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
function lc(e) {
	let t = /* @__PURE__ */ j(e), n = {};
	for (let r in t) {
		let i = t[r];
		i.effect ? n[r] = K({
			get: () => e[r],
			set(t) {
				e[r] = t;
			}
		}) : (/* @__PURE__ */ M(i) || /* @__PURE__ */ Gt(i)) && (n[r] = /* @__PURE__ */ on(e, r));
	}
	return n;
}
//#endregion
//#region src/shared/assign-if-present.ts
function J(e, t, n) {
	n !== void 0 && (e[t] = n);
}
//#endregion
//#region src/functions/species-builder/item-reference-names.ts
function uc(e) {
	return fc(e.name, e.specification);
}
function dc(e) {
	let t = e.name.trim();
	if (!e.item) return t;
	if (!t) return uc(e.item);
	if (!mc(t)) {
		if (e.item.specification) return fc(t, e.item.specification);
		if (mc(e.item.name) && hc(t) === hc(e.item.name)) return e.item.name.trim();
	}
	return t;
}
function fc(e, t) {
	let n = e.trim(), r = t?.trim();
	return !n || !r || pc(n) ? n : `${n} (${r})`;
}
function pc(e) {
	return /\(([^()]*)\)\s*$/.exec(e.trim())?.[1]?.trim() ?? "";
}
function mc(e) {
	return /\([^()]*\)\s*$/.test(e.trim());
}
function hc(e) {
	return e.split("(")[0]?.trim().toLocaleLowerCase() ?? "";
}
//#endregion
//#region src/functions/species-builder/replacement-row-records.ts
function gc(e) {
	if (!e) return;
	let t = e.flatMap((e) => {
		let t = dc(e.rolled), n = dc(e.replacement);
		return t && n ? [[t, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function _c(e) {
	if (!e) return;
	let t = e.flatMap((e) => {
		let t = dc(e.rolled), n = e.replacements.map(dc).filter((e) => e.length > 0);
		return t && n.length > 0 ? [[t, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
//#endregion
//#region src/functions/species-builder/linked-grant-records.ts
function vc(e) {
	if (!e || e.length === 0) return;
	let t = e.map(dc).filter((e) => e.length > 0);
	return t.length > 0 ? t : void 0;
}
function yc(e) {
	if (!e || e.length === 0) return;
	let t = e.flatMap((e) => {
		let t = e.choices.map(dc).filter((e) => e.length > 0);
		return t.length > 0 ? [t.join(", ")] : [];
	});
	return t.length > 0 ? t : void 0;
}
//#endregion
//#region src/functions/species-builder/subspecies-list-fields.ts
function bc(e) {
	return vc(e.linkedSkills) ?? e.skills;
}
function xc(e, t) {
	return kc(bc(e), t.skillsAdded, t.skillsRemoved);
}
function Sc(e, t) {
	return xc(e, t) ?? bc(e) ?? [];
}
function Cc(e) {
	return yc(e.linkedTalents) ?? e.talents;
}
function wc(e, t) {
	return kc(Cc(e), t.talentsAdded, t.talentsRemoved);
}
function Tc(e, t) {
	return Oc(vc(e.linkedTraits) ?? e.traits, t);
}
function Ec(e, t, n = {}) {
	let r = n.subspecies ?? n.parent, i = kc(Tc(e), t.traitsAdded, t.traitsRemoved);
	return i ? Oc(i, r) : n.subspecies ? Oc(Tc(e), n.subspecies) : void 0;
}
function Dc(e, t, n = {}) {
	return Ec(e, t, n) ?? Tc(e, n.parent) ?? [];
}
function Oc(e, t) {
	if (!t) return e;
	let n = e ? [...e] : [];
	return n.includes(t) || n.push(t), n;
}
function kc(e, t, n) {
	if (!t && !n) return;
	let r = new Set(n ?? []), i = (e ?? []).filter((e) => !r.has(e));
	for (let e of t ?? []) i.includes(e) || i.push(e);
	return i;
}
//#endregion
//#region src/types/wfrp4e/characteristics.ts
var Y = {
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
}, Ac = {
	[Y.Agility]: "Agility",
	[Y.BallisticSkill]: "Ballistic Skill",
	[Y.Dexterity]: "Dexterity",
	[Y.Fellowship]: "Fellowship",
	[Y.Initiative]: "Initiative",
	[Y.Intelligence]: "Intelligence",
	[Y.Strength]: "Strength",
	[Y.Toughness]: "Toughness",
	[Y.WeaponSkill]: "Weapon Skill",
	[Y.Willpower]: "Willpower"
}, jc = {
	agility: Y.Agility,
	"ballistic skill": Y.BallisticSkill,
	dexterity: Y.Dexterity,
	fellowship: Y.Fellowship,
	initiative: Y.Initiative,
	intelligence: Y.Intelligence,
	strength: Y.Strength,
	toughness: Y.Toughness,
	"weapon skill": Y.WeaponSkill,
	willpower: Y.Willpower
};
function Mc(e) {
	return e in Ac;
}
//#endregion
//#region src/functions/species-builder/wound-formula/compiler.ts
function Nc(e) {
	let t = [], n = /* @__PURE__ */ new Set(), r = e.trim();
	return r = r.replaceAll(/@([A-Za-z][\dA-Za-z]*)/g, (e, t) => {
		let r = Pc(t);
		return n.add(r), r;
	}), r = r.replaceAll(/{([^{}]+)}/g, (e, n) => Fc(t, n, "total")), r = r.replaceAll(/\[([^[\]]+)]/g, (e, n) => Fc(t, n, "bonus")), {
		expression: r,
		references: t,
		usedKeywords: n
	};
}
function Pc(e) {
	if ((/* @__PURE__ */ "ablaze.advantage.age.bleeding.blinded.broken.corruption.deafened.entangled.fate.fatigued.fortune.height.poisoned.rank.resilience.resolve.sb.sbMultiplier.scale.sin.size.status.stunned.tb.tbMultiplier.weight.wpb.wpbMultiplier.xp".split(".")).includes(e)) return e;
	throw Error(`Unknown wound formula keyword: @${e}`);
}
function Fc(e, t, n) {
	let r = Ic(t, n, e), i = e.find((e) => Lc(e, r));
	return i ? i.variableName : (e.push(r), r.variableName);
}
function Ic(e, t, n) {
	let [r, i] = Rc(e), a = zc(r), o = Uc(Hc(r, i, t), n);
	if (a && !i) return {
		characteristicKey: a,
		kind: t,
		name: r,
		source: "characteristic",
		variableName: o
	};
	let s = {
		kind: t,
		name: r,
		source: "skill",
		variableName: o
	};
	return i && (s.characteristicOverride = Bc(i)), s;
}
function Lc(e, t) {
	return e.characteristicKey === t.characteristicKey && e.characteristicOverride === t.characteristicOverride && e.kind === t.kind && e.name === t.name && e.source === t.source;
}
function Rc(e) {
	let t = e.split("|").map((e) => e.trim());
	if (t.length > 2 || !t[0]) throw Error(`Invalid wound formula attribute reference: ${e}`);
	return [t[0], t[1]];
}
function zc(e) {
	let t = e.trim().toLocaleLowerCase();
	return Mc(t) ? t : jc[t] ?? Vc[t];
}
function Bc(e) {
	let t = zc(e);
	if (!t) throw Error(`Unknown wound formula characteristic: ${e}`);
	return t;
}
var Vc = {
	ag: "ag",
	bs: "bs",
	dex: "dex",
	fel: "fel",
	i: "i",
	int: "int",
	s: "s",
	t: "t",
	wp: "wp",
	ws: "ws"
};
function Hc(e, t, n) {
	let [r, ...i] = [e, t].flatMap((e) => e ? e.match(/\d+|[A-Za-z]+/g) ?? [] : []), a = r ? [r.toLocaleLowerCase(), ...i.map((e) => e.charAt(0).toLocaleUpperCase() + e.slice(1))].join("") : "attribute";
	return n === "bonus" ? `${a}Bonus` : a;
}
function Uc(e, t) {
	let n = new Set(t.map((e) => e.variableName));
	if (!n.has(e)) return e;
	let r = 2, i = `${e}${r}`;
	for (; n.has(i);) r += 1, i = `${e}${r}`;
	return i;
}
//#endregion
//#region src/functions/species-builder/wound-formula/script-lines.ts
function Wc(e) {
	let t = [];
	if (qc(e, [
		"sb",
		"tb",
		"wpb"
	]) && (t.push(...Jc(e, "sb", "preWoundArgs.sb")), t.push(...Jc(e, "tb", "preWoundArgs.tb")), t.push(...Jc(e, "wpb", "preWoundArgs.wpb"))), qc(e, [
		"sbMultiplier",
		"tbMultiplier",
		"wpbMultiplier"
	]) && (t.push("const multiplier = preWoundArgs.multiplier;"), t.push(...Jc(e, "sbMultiplier", "multiplier.sb")), t.push(...Jc(e, "tbMultiplier", "multiplier.tb")), t.push(...Jc(e, "wpbMultiplier", "multiplier.wpb"))), qc(e, ["scale", "size"]) && (t.push(...Yc()), t.push("const size = actorSizeStep();"), t.push(...Jc(e, "scale", "2 ** size"))), qc(e, el) && (t.push(...Jc(e, "age", "Number(actor.system.details.age.value)")), t.push(...Jc(e, "height", "Number(actor.system.details.height.value)")), t.push(...Jc(e, "weight", "Number(actor.system.details.weight.value)")), t.push(...rl(e))), qc(e, tl) && (t.push(...Jc(e, "xp", "actor.system.details.experience.total")), t.push(...Jc(e, "fate", "actor.system.status.fate.value")), t.push(...Jc(e, "fortune", "actor.system.status.fortune.value")), t.push(...Jc(e, "resilience", "actor.system.status.resilience.value")), t.push(...Jc(e, "resolve", "actor.system.status.resolve.value")), t.push(...Jc(e, "corruption", "actor.system.status.corruption.value")), t.push(...Jc(e, "sin", "actor.system.status.sin.value")), t.push(...Jc(e, "advantage", "actor.system.status.advantage.value"))), qc(e, nl)) {
		t.push(...il());
		for (let n of nl) t.push(...Jc(e, n, `conditionValue("${n}")`));
	}
	return t.length ? [...t, ""] : [];
}
function Gc(e) {
	let t = e.length > 0, n = e.some((e) => e.source === "skill");
	return [...Xc(t), ...Zc(n)];
}
function Kc(e) {
	return e.map((e) => e.source === "characteristic" ? Qc(e) : $c(e));
}
function qc(e, t) {
	return t.some((t) => e.has(t));
}
function Jc(e, t, n) {
	return e.has(t) ? [`const ${t} = ${n};`] : [];
}
function Yc() {
	return [
		"function actorSizeStep() {",
		"  const sizeSteps = {",
		"    tiny: -3,",
		"    ltl: -2,",
		"    little: -2,",
		"    sml: -1,",
		"    small: -1,",
		"    avg: 0,",
		"    average: 0,",
		"    lrg: 1,",
		"    large: 1,",
		"    enor: 2,",
		"    enormous: 2,",
		"    mon: 3,",
		"    monstrous: 3,",
		"  };",
		"  return sizeSteps[actor.system.details.size.value.trim().toLocaleLowerCase()];",
		"}",
		""
	];
}
function Xc(e) {
	return e ? [
		"function characteristicTotal(key) {",
		"  const characteristic = actor.system.characteristics[key];",
		"  return characteristic.value;",
		"}",
		"",
		"function characteristicBonus(key) {",
		"  return actor.system.characteristics[key].bonus;",
		"}",
		""
	] : [];
}
function Zc(e) {
	return e ? [
		"function normalizedName(value) {",
		"  return value.trim().toLocaleLowerCase();",
		"}",
		"",
		"function findSkillItem(name, items) {",
		"  return items.find((item) => item.type === 'skill' && normalizedName(item.name) === normalizedName(name));",
		"}",
		"",
		"function skillAdvances(skill) {",
		"  return skill.system.advances.value;",
		"}",
		"",
		"function skillBaseName(name) {",
		"  return name.split('(')[0].trim();",
		"}",
		"",
		"function skillTotal(name, characteristicOverride) {",
		"  const actorSkill = findSkillItem(name, actor.items.contents);",
		"",
		"  if (actorSkill) {",
		"    const characteristicKey = characteristicOverride || actorSkill.system.characteristic.value;",
		"    return characteristicOverride ? characteristicTotal(characteristicKey) + skillAdvances(actorSkill) : actorSkill.system.total;",
		"  }",
		"",
		"  const worldSkill = findSkillItem(name, game.items.contents) || findSkillItem(skillBaseName(name), game.items.contents);",
		"",
		"  if (!worldSkill) {",
		"    return 0;",
		"  }",
		"",
		"  if (worldSkill.system.advanced.value !== 'bsc' && name === skillBaseName(name)) {",
		"    return 0;",
		"  }",
		"",
		"  return characteristicTotal(characteristicOverride || worldSkill.system.characteristic.value);",
		"}",
		"",
		"function skillBonus(name, characteristicOverride) {",
		"  return Math.floor(skillTotal(name, characteristicOverride) / 10);",
		"}",
		""
	] : [];
}
function Qc(e) {
	let t = e.kind === "bonus" ? "characteristicBonus" : "characteristicTotal";
	return `const ${e.variableName} = ${t}(${JSON.stringify(e.characteristicKey)});`;
}
function $c(e) {
	let t = e.kind === "bonus" ? "skillBonus" : "skillTotal", n = e.characteristicOverride ? JSON.stringify(e.characteristicOverride) : "undefined";
	return `const ${e.variableName} = ${t}(${JSON.stringify(e.name)}, ${n});`;
}
var el = [
	"age",
	"height",
	"rank",
	"status",
	"weight"
], tl = [
	"advantage",
	"corruption",
	"fate",
	"fortune",
	"resilience",
	"resolve",
	"sin",
	"xp"
], nl = [
	"ablaze",
	"bleeding",
	"blinded",
	"broken",
	"deafened",
	"entangled",
	"fatigued",
	"poisoned",
	"stunned"
];
function rl(e) {
	let t = [];
	return e.has("status") && t.push("function statusTierValue() {", "  const statusTiers = { brass: 1, silver: 2, gold: 3 };", "  const tier = actor.system.details.status.tier;", "  return statusTiers[String(tier).toLocaleLowerCase()] || Number(tier);", "}", "const status = statusTierValue();"), t.push(...Jc(e, "rank", "Number(actor.system.details.status.standing)")), t;
}
function il() {
	return [
		"function conditionValue(key) {",
		"  return actor.hasCondition(key)?.conditionValue || 0;",
		"}"
	];
}
//#endregion
//#region src/functions/species-builder/wound-formula/index.ts
function al(e) {
	let t = Nc(e);
	return [
		...Wc(t.usedKeywords),
		...Gc(t.references),
		...Kc(t.references),
		"",
		`args.wounds = ${t.expression};`
	];
}
//#endregion
//#region src/functions/species-builder/wound-formula-traits.ts
var ol = "generatedSpeciesWoundFormulaEffect", sl = "generatedSpeciesWoundFormulaTrait";
function cl(e) {
	return e.definitions.flatMap((e) => [...gl(e), ..._l(e)]);
}
function ll(e) {
	return `__${e.name.trim()}__`;
}
function ul(e, t) {
	return `__${e.name.trim()} / ${t.name.trim()}__`;
}
function dl({ flagScope: e, spec: t }) {
	return {
		effects: [fl({
			flagScope: e,
			spec: t
		})],
		flags: { [e]: { [sl]: {
			speciesKey: t.speciesKey,
			subspeciesKey: t.subspeciesKey ?? ""
		} } },
		img: "icons/svg/aura.svg",
		name: t.name,
		system: { description: { value: hl(t) } },
		type: "trait"
	};
}
function fl({ flagScope: e, spec: t }) {
	return {
		changes: [],
		disabled: !1,
		flags: { [e]: { [ol]: {
			speciesKey: t.speciesKey,
			subspeciesKey: t.subspeciesKey ?? ""
		} } },
		img: "icons/svg/aura.svg",
		name: `${t.ownerName} Wound Formula`,
		system: {
			scriptData: [{
				label: `${t.ownerName} Wound Formula Capture`,
				script: pl(),
				trigger: "preWoundCalc"
			}, {
				label: `${t.ownerName} Wound Formula`,
				script: ml(t),
				trigger: "woundCalc"
			}],
			transferData: {
				documentType: "Actor",
				type: "document"
			}
		},
		transfer: !0
	};
}
function pl() {
	return [
		"// Generated by WFRP4e Customizer Apps.",
		"const storageKey = \"__wfrp4eCustomizerWoundFormulaArgs\";",
		"const sourceId = this.item?.id || this.effect.id;",
		"this.actor[storageKey] ||= {};",
		"this.actor[storageKey][sourceId] = args;"
	].join("\n");
}
function ml(e) {
	return [
		"// Generated by WFRP4e Customizer Apps.",
		"const storageKey = \"__wfrp4eCustomizerWoundFormulaArgs\";",
		"const sourceId = this.item?.id || this.effect.id;",
		"const preWoundArgs = this.actor[storageKey][sourceId];",
		"const actor = this.actor;",
		"",
		...al(e.formula)
	].join("\n");
}
function hl(e) {
	return ["<p>Generated by WFRP4e Customizer Apps. This Trait applies a custom Species Builder wound formula.</p>", `<p>${vl(e.formula)}</p>`].join("");
}
function gl(e) {
	return e.woundFormula?.formula ? [{
		formula: e.woundFormula.formula,
		name: ll(e),
		ownerName: e.name,
		speciesKey: e.key
	}] : [];
}
function _l(e) {
	return (e.subspecies ?? []).flatMap((t) => t.woundFormula?.formula ? [{
		formula: t.woundFormula.formula,
		name: ul(e, t),
		ownerName: `${e.name} / ${t.name}`,
		speciesKey: e.key,
		subspeciesKey: t.key
	}] : []);
}
function vl(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
//#endregion
//#region src/functions/species-builder/species-config.ts
function yl(e) {
	let t = bl();
	for (let n of e.definitions) xl(t, n);
	return t;
}
function bl() {
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
function xl(e, t) {
	e.species[t.key] = t.name, J(e.speciesCharacteristics, t.key, t.characteristics), J(e.speciesSkills, t.key, bc(t)), J(e.speciesTalents, t.key, Cc(t)), J(e.speciesRandomTalents, t.key, t.randomTalents), J(e.speciesTalentReplacement, t.key, Tl(t)), J(e.speciesTraits, t.key, Tc(t, t.woundFormula ? ll(t) : void 0)), J(e.speciesMovement, t.key, t.movement), J(e.speciesFate, t.key, t.fate), J(e.speciesRes, t.key, t.resilience), J(e.speciesExtra, t.key, t.extra), J(e.speciesAge, t.key, t.age), J(e.speciesHeight, t.key, t.height), J(e.speciesCareerReplacements, t.key, El(t)), t.includeInExtraSpecies && e.extraSpecies.push(t.key);
	for (let n of t.subspecies ?? []) {
		let r = e.subspecies[t.key] ?? {}, i = n.woundFormula ? ul(t, n) : void 0, a = n.careerTable ? wl(t, n) : void 0;
		r[n.key] = Sl(t, n, i, a), e.subspecies[t.key] = r;
	}
}
function Sl(e, t, n, r) {
	let i = { name: t.name };
	return J(i, "characteristics", t.characteristics), J(i, "skills", xc(e, t)), J(i, "talents", wc(e, t)), J(i, "speciesTraits", Ec(e, t, {
		parent: e.woundFormula ? ll(e) : void 0,
		subspecies: n
	})), J(i, "randomTalents", t.randomTalents), J(i, "talentReplacement", Tl(t)), J(i, "movement", t.movement), J(i, "fate", t.fate), J(i, "resilience", t.resilience), J(i, "extra", t.extra), J(i, "careerTable", r), i;
}
function Cl(e) {
	return e.key;
}
function wl(e, t) {
	return `${e.key}-${t.key}`;
}
function Tl(e) {
	return gc(e.talentReplacementRows) ?? e.talentReplacements;
}
function El(e) {
	return _c(e.careerReplacementRows) ?? e.careerReplacements;
}
//#endregion
//#region src/shared/object-readers.ts
function X(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function Z(e, t) {
	let n = e;
	for (let e of t) {
		if (!X(n) || !(e in n)) return;
		n = n[e];
	}
	return n;
}
function Q(e, t) {
	let n = Z(e, t);
	return typeof n == "string" ? n.trim() : "";
}
function Dl(e, t) {
	let n = Z(e, t);
	return Array.isArray(n) ? n.filter((e) => typeof e == "string") : [];
}
function Ol(e, t, n = 0) {
	return kl(e, t) ?? n;
}
function kl(e, t) {
	for (let n of t) {
		let t = Number(Z(e, n));
		if (Number.isFinite(t)) return t;
	}
	return null;
}
function Al(e, t, n = !1) {
	for (let n of t) {
		let t = Z(e, n);
		if (typeof t == "boolean") return t;
	}
	return n;
}
function jl(e) {
	return Array.isArray(e) ? e.flatMap(jl) : typeof e == "string" ? e.split(/[\n\r,;]/).map((e) => e.trim()).filter(Boolean) : X(e) ? Object.values(e).flatMap(jl) : [];
}
function Ml(e, t, n) {
	let r = e;
	for (let e of t.slice(0, -1)) {
		let t = r[e];
		X(t) || (r[e] = {}), r = r[e];
	}
	r[t[t.length - 1] ?? ""] = n;
}
//#endregion
//#region src/functions/species-builder/career-table-normalization.ts
function Nl(e) {
	if (!X(e)) return;
	let t = Pl(e.rows) ?? Fl(e.careers);
	return t ? { rows: t } : void 0;
}
function Pl(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!X(e)) return [];
		let t = Ll(e.name);
		if (!t) return [];
		let n = { name: t };
		return J(n, "journalUuid", Ll(e.journalUuid)), [n];
	});
	return t.length > 0 ? t : void 0;
}
function Fl(e) {
	return Il(e)?.map((e) => ({ name: e }));
}
function Il(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		let t = Ll(e);
		return t ? [t] : [];
	});
	return t.length > 0 ? t : void 0;
}
function Ll(e) {
	if (typeof e == "string") return e.trim() || void 0;
}
//#endregion
//#region src/functions/species-builder/replacement-row-normalization.ts
function Rl(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!X(e)) return [];
		let t = Bl(e.rolled, "talent"), n = Bl(e.replacement, "talent");
		return !t.name || !n.name ? [] : [{
			replacement: n,
			rolled: t
		}];
	});
	return t.length > 0 ? t : void 0;
}
function zl(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!X(e)) return [];
		let t = Bl(e.rolled, "career"), n = Array.isArray(e.replacements) ? e.replacements.flatMap((e) => {
			let t = Bl(e, "career");
			return t.name ? [t] : [];
		}) : [];
		return !t.name || n.length === 0 ? [] : [{
			replacements: n,
			rolled: t
		}];
	});
	return t.length > 0 ? t : void 0;
}
function Bl(e, t) {
	if (typeof e == "string") return { name: Ul(e) ?? "" };
	if (!X(e)) return { name: "" };
	let n = Vl(e.item, t), r = Ul(e.name) ?? n?.name ?? "";
	return n ? {
		item: n,
		name: r
	} : { name: r };
}
function Vl(e, t) {
	if (!X(e)) return;
	let n = Ul(e.name), r = Hl(e.type), i = Ul(e.uuid);
	if (!n || r !== t || !i) return;
	let a = {
		name: n,
		type: r,
		uuid: i
	}, o = Ul(e.specification) ?? Ul(e.specifier);
	o && (a.specification = o);
	let s = Ul(e.img);
	return s && (a.img = s), a;
}
function Hl(e) {
	return e === "career" || e === "skill" || e === "talent" || e === "trait" ? e : void 0;
}
function Ul(e) {
	if (typeof e == "string") return e.trim() || void 0;
}
//#endregion
//#region src/functions/species-builder/linked-grant-normalization.ts
function Wl(e, t) {
	if (!Array.isArray(e)) return;
	let n = e.flatMap((e) => {
		let n = Bl(e, t);
		return n.name ? [n] : [];
	});
	return n.length > 0 ? n : void 0;
}
function Gl(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!X(e) || !Array.isArray(e.choices)) return [];
		let t = e.choices.flatMap((e) => {
			let t = Bl(e, "talent");
			return t.name ? [t] : [];
		});
		return t.length > 0 ? [{ choices: t }] : [];
	});
	return t.length > 0 ? t : void 0;
}
//#endregion
//#region src/functions/species-builder/species-settings-normalization.ts
var Kl = Object.values(Y);
function ql(e) {
	return !X(e) || !Array.isArray(e.definitions) ? {
		autoRegisterSpeciesTable: !1,
		definitions: [],
		showGeneratedConfigTab: !1
	} : {
		autoRegisterSpeciesTable: e.autoRegisterSpeciesTable === !0,
		definitions: e.definitions.flatMap(Jl),
		showGeneratedConfigTab: e.showGeneratedConfigTab === !0
	};
}
function Jl(e) {
	return Zl(e, (e, t, n) => ({
		includeInExtraSpecies: n.includeInExtraSpecies === !0,
		key: e,
		name: t
	})).map((t) => (Ql(t, e), $l(t, e), t));
}
function Yl(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap(Xl);
	return t.length > 0 ? t : void 0;
}
function Xl(e) {
	return Zl(e, (e, t, n) => {
		let r = {
			key: e,
			name: t
		};
		return J(r, "skillsAdded", ru(n.skillsAdded)), J(r, "skillsRemoved", ru(n.skillsRemoved)), J(r, "talentsAdded", ru(n.talentsAdded)), J(r, "talentsRemoved", ru(n.talentsRemoved)), J(r, "traitsAdded", ru(n.traitsAdded)), J(r, "traitsRemoved", ru(n.traitsRemoved)), r;
	});
}
function Zl(e, t) {
	if (!X(e)) return [];
	let n = eu(e.key), r = tu(e.name);
	if (!n || !r) return [];
	let i = t(n, r, e);
	return J(i, "characteristics", su(e.characteristics)), J(i, "randomTalents", au(e.randomTalents)), J(i, "talentReplacementRows", Rl(e.talentReplacementRows)), J(i, "talentReplacements", iu(e.talentReplacements)), J(i, "movement", nu(e.movement)), J(i, "fate", nu(e.fate)), J(i, "resilience", nu(e.resilience)), J(i, "extra", nu(e.extra)), J(i, "woundFormula", lu(e.woundFormula)), J(i, "careerTable", Nl(e.careerTable)), [i];
}
function Ql(e, t) {
	X(t) && (J(e, "skills", ru(t.skills)), J(e, "linkedSkills", Wl(t.linkedSkills, "skill")), J(e, "talents", ru(t.talents)), J(e, "linkedTalents", Gl(t.linkedTalents)), J(e, "traits", ru(t.traits)), J(e, "linkedTraits", Wl(t.linkedTraits, "trait")));
}
function $l(e, t) {
	X(t) && (J(e, "age", tu(t.age)), J(e, "height", cu(t.height)), J(e, "careerReplacements", ou(t.careerReplacements)), J(e, "careerReplacementRows", zl(t.careerReplacementRows)), J(e, "subspecies", Yl(t.subspecies)));
}
function eu(e) {
	return typeof e == "string" ? ns(e) : "";
}
function tu(e) {
	if (typeof e == "string") return e.trim() || void 0;
}
function nu(e) {
	let t = Number(e);
	return Number.isFinite(t) ? t : void 0;
}
function ru(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		let t = tu(e);
		return t ? [t] : [];
	});
	return t.length > 0 ? t : void 0;
}
function iu(e) {
	if (!X(e)) return;
	let t = Object.entries(e).flatMap(([e, t]) => {
		let n = tu(e), r = tu(t);
		return n && r ? [[n, r]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function au(e) {
	if (!X(e)) return;
	let t = Object.entries(e).flatMap(([e, t]) => {
		let n = tu(e), r = nu(t);
		return n && r !== void 0 ? [[n, r]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function ou(e) {
	if (!X(e)) return;
	let t = Object.entries(e).flatMap(([e, t]) => {
		let n = tu(e), r = ru(t);
		return n && r ? [[n, r]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function su(e) {
	if (!X(e)) return;
	let t = Kl.flatMap((t) => {
		let n = tu(e[t]);
		return n ? [[t, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function cu(e) {
	if (!X(e)) return;
	let t = {};
	return J(t, "die", tu(e.die)), J(t, "feet", nu(e.feet)), J(t, "inches", nu(e.inches)), Object.keys(t).length > 0 ? t : void 0;
}
function lu(e) {
	if (!X(e)) return;
	let t = tu(e.formula);
	return t ? { formula: t } : void 0;
}
//#endregion
//#region src/functions/species-builder/world-table.ts
var uu = "managedSpeciesTable";
function du() {
	return {
		isRegistered: !1,
		name: "Species",
		ownership: "new",
		requiresLinkRepair: !1,
		rows: []
	};
}
function fu(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let t of e) {
		let e = t.key.trim(), r = t.label.trim();
		e && r && n.set(e, {
			key: e,
			label: r
		});
	}
	for (let e of t) {
		let t = e.key.trim(), r = e.name.trim();
		t && r && n.set(t, {
			key: t,
			label: r
		});
	}
	return [...n.values()].sort((e, t) => e.label.localeCompare(t.label));
}
function pu(e, t) {
	let n = new Map(t.map((e) => [e.key, e.label]));
	return {
		...e,
		rows: e.rows.map((e) => ({
			...e,
			name: n.get(e.speciesKey) ?? e.name.trim(),
			speciesKey: e.speciesKey.trim()
		}))
	};
}
function mu(e, t, n) {
	if (e.rows.length === 0) return n ? ["Add at least one species before saving or registering this table."] : [];
	let r = new Set(t.map((e) => e.key)), i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), o = [];
	return e.rows.forEach((e, t) => {
		let n = t + 1;
		if (!e.speciesKey || !r.has(e.speciesKey)) {
			let t = e.name.trim() ? ` “${e.name.trim()}”` : "";
			o.push(`Row ${n}${t} must be assigned to a known WFRP species.`);
		} else i.has(e.speciesKey) ? o.push(`Row ${n} repeats species “${e.name}”.`) : i.add(e.speciesKey);
		let s = e.name.trim().toLocaleLowerCase();
		s && a.has(s) ? o.push(`Row ${n} repeats species name "${e.name.trim()}".`) : s && a.add(s), /[{}]/u.test(e.name) && o.push(`Row ${n} has a species name containing { or }, which WFRP cannot parse.`), (!Number.isInteger(e.weight) || e.weight < 1) && o.push(`Row ${n} needs a whole-number weight of at least 1.`);
	}), o;
}
function hu(e) {
	let t = e.map((e) => Number.isInteger(e.weight) && e.weight > 0 ? e.weight : 0), n = t.reduce((e, t) => e + t, 0), r = 1;
	return t.map((e) => {
		let t = r, i = e > 0 ? t + e - 1 : t;
		return r = i + 1, {
			chance: n > 0 ? e / n : 0,
			range: [t, i]
		};
	});
}
function gu(e, t, n) {
	let r = n.find((e) => e.label === t.trim());
	if (r) return r.key;
	let i = e.trim();
	return n.some((e) => e.key === i) ? i : "";
}
function _u(e) {
	let t = /@UUID\[([^\]]+)\]\{([^}]*)\}/u.exec(e), n = t?.[1]?.trim() ?? "", r = t?.[2]?.trim() ?? "";
	return n && r ? {
		label: r,
		uuid: n
	} : void 0;
}
function vu(e) {
	let t = Z(e, ["range"]), n = Array.isArray(t) ? Number(t[0]) : 0, r = Array.isArray(t) ? Number(t[1]) : 0;
	if (Number.isInteger(n) && Number.isInteger(r) && r >= n) return r - n + 1;
	let i = Number(Z(e, ["weight"]));
	return Number.isInteger(i) && i > 0 ? i : 1;
}
function yu(e) {
	return JSON.stringify(e.rows.map((e) => ({
		name: e.name.trim(),
		speciesKey: e.speciesKey.trim(),
		weight: e.weight
	})));
}
function bu(e, t) {
	let n = hu(e.rows), r = e.rows.reduce((e, t) => e + (Number.isInteger(t.weight) && t.weight > 0 ? t.weight : 0), 0);
	return {
		displayRoll: !0,
		flags: {
			wfrp4e: { key: "species" },
			[t]: { [uu]: !0 }
		},
		formula: `1d${Math.max(r, 1)}`,
		img: "systems/wfrp4e/ui/buttons/d10.webp",
		name: Su(e),
		replacement: !0,
		results: e.rows.map((e, t) => ({
			description: xu(e),
			drawn: !1,
			flags: { wfrp4e: { species: e.speciesKey } },
			img: "icons/svg/d20-grey.svg",
			name: e.name,
			range: n[t]?.range ?? [1, 1],
			type: "text",
			weight: e.weight
		}))
	};
}
function xu(e) {
	let t = e.journalUuid?.trim() ?? "", n = e.name.trim();
	if (!t) throw Error(`Species "${n || e.speciesKey}" does not have a Journal link target.`);
	if (/[{}]/u.test(n)) throw Error(`Species "${n}" cannot be encoded in WFRP's UUID-link label.`);
	return `@UUID[${t}]{${n}}`;
}
function Su(e) {
	let t = e.name.trim() || "Species";
	return e.ownership === "external" && !t.includes("Species Builder") ? `${t} (Species Builder)` : t;
}
//#endregion
//#region src/functions/species-builder/editor/career-table-rows.ts
function Cu(e) {
	return [...e ?? [], { name: "" }];
}
function wu(e, t) {
	return (e ?? []).filter((e, n) => n !== t);
}
function Tu(e, t, n) {
	return (e ?? []).map((e, r) => r === t ? Ou(e, n) : e);
}
function Eu(e, t, n) {
	let r = { name: n.name };
	return n.careerJournalUuid && (r.journalUuid = n.careerJournalUuid), Tu(e, t, r);
}
function Du(e, t, n) {
	return Tu(e, t, { journalUuid: n });
}
function Ou(e, t) {
	let n = {
		...e,
		...t
	};
	return n.journalUuid || delete n.journalUuid, n;
}
//#endregion
//#region src/state/species-builder/career-table-drop-actions.ts
function ku(e) {
	async function t(t, n) {
		let r = e.selectedDefinition.value;
		if (!r) return;
		let i = await e.resolveDroppedItem("career", n);
		e.definitionActions.updateCareerTableRows(Eu(r.careerTable?.rows, t, i));
	}
	async function n(t, n) {
		let r = e.selectedDefinition.value;
		if (!r) return;
		let i = await Au(e, n);
		e.definitionActions.updateCareerTableRows(Du(r.careerTable?.rows, t, i.uuid));
	}
	async function r(t, n, r) {
		let i = e.selectedDefinition.value?.subspecies?.[t];
		if (!i) return;
		let a = await e.resolveDroppedItem("career", r);
		e.subspeciesActions.updateSubspeciesCareerTableRows(t, Eu(i.careerTable?.rows, n, a));
	}
	async function i(t, n, r) {
		let i = e.selectedDefinition.value?.subspecies?.[t];
		if (!i) return;
		let a = await Au(e, r);
		e.subspeciesActions.updateSubspeciesCareerTableRows(t, Du(i.careerTable?.rows, n, a.uuid));
	}
	return {
		setCareerTableCareerDrop: t,
		setCareerTableJournalDrop: n,
		setSubspeciesCareerTableCareerDrop: r,
		setSubspeciesCareerTableJournalDrop: i
	};
}
async function Au(e, t) {
	try {
		return await e.bridge.resolveJournalDrop(t);
	} catch (t) {
		throw e.loadError.value = ks(t), t;
	}
}
//#endregion
//#region src/functions/species-builder/editor/definition-fields.ts
function ju() {
	return {
		includeInExtraSpecies: !0,
		key: "",
		name: "New Species"
	};
}
function Mu(e, t) {
	let n = Os(e);
	return n.key = Hu(`${n.key}-copy`, t), n.name = `${n.name} Copy`, n;
}
function Nu(e, t) {
	return [...e, ...t.map(Os)];
}
function Pu(e, t, n) {
	return q(e, t, cs(n));
}
function Fu(e, t, n) {
	return q(e, t, ds(n));
}
function Iu(e, t, n) {
	let r = e.height ? { ...e.height } : {}, i = t === "die" ? ss(n) : ds(n);
	return i === void 0 ? delete r[t] : r[t] = i, q(e, "height", Object.keys(r).length > 0 ? r : void 0);
}
function Lu(e, t, n) {
	let r = e.characteristics ? { ...e.characteristics } : {}, i = ss(n);
	return i ? r[t] = i : delete r[t], q(e, "characteristics", Object.keys(r).length > 0 ? r : void 0);
}
function Ru(e, t, n) {
	return q(e, t, rs(n));
}
function zu(e, t, n) {
	return q(e, t, ps(t, n));
}
function Bu(e, t) {
	return q(e, "woundFormula", ls(t));
}
function Vu(e, t) {
	return q(e, "careerTable", us(t));
}
function Hu(e, t) {
	let n = new Set(t.map((e) => e.key));
	if (!n.has(e)) return e;
	let r = 2, i = `${e}-${r}`;
	for (; n.has(i);) r += 1, i = `${e}-${r}`;
	return i;
}
//#endregion
//#region src/state/species-builder/selected-definition.ts
function Uu(e, t) {
	let n = e.definitions.value[e.selectedIndex.value];
	n && (e.definitions.value = e.definitions.value.map((r, i) => i === e.selectedIndex.value ? t(Os(n)) : r), e.message.value = "");
}
//#endregion
//#region src/state/species-builder/definition-actions.ts
function Wu(e) {
	function t() {
		r(ju());
	}
	function n() {
		let t = e.selectedDefinition.value;
		t && r(Mu(t, e.definitions.value));
	}
	function r(e) {
		i([e]);
	}
	function i(t) {
		t.length !== 0 && (e.definitions.value = Nu(e.definitions.value, t), e.selectedIndex.value = e.definitions.value.length - 1, e.message.value = "");
	}
	function a() {
		e.selectedDefinition.value && (e.definitions.value = e.definitions.value.filter((t, n) => n !== e.selectedIndex.value), e.selectedIndex.value = e.definitions.value.length === 0 ? -1 : Math.min(e.selectedIndex.value, e.definitions.value.length - 1), e.message.value = "");
	}
	function o(t) {
		e.selectedIndex.value = t;
	}
	function s(e, t) {
		g((n) => Pu(n, e, t));
	}
	function c(e, t) {
		g((n) => ({
			...n,
			[e]: t
		}));
	}
	function l(e, t) {
		g((n) => Fu(n, e, t));
	}
	function u(e, t) {
		g((n) => Iu(n, e, t));
	}
	function d(e, t) {
		g((n) => Lu(n, e, t));
	}
	function f(e, t) {
		g((n) => Ru(n, e, t));
	}
	function p(e, t) {
		g((n) => zu(n, e, t));
	}
	function m(e) {
		g((t) => Bu(t, e));
	}
	function h(e) {
		g((t) => Vu(t, e));
	}
	function g(t) {
		Uu(e, t);
	}
	return {
		addBlankDefinition: t,
		addDefinition: r,
		addDefinitions: i,
		deleteSelectedDefinition: a,
		duplicateSelectedDefinition: n,
		selectDefinition: o,
		updateArrayField: f,
		updateBooleanField: c,
		updateCareerTableRows: h,
		updateCharacteristic: d,
		updateHeightField: u,
		updateNumberField: l,
		updateStringField: s,
		updateSelectedDefinition: g,
		updateTextMapField: p,
		updateWoundFormula: m
	};
}
//#endregion
//#region src/state/species-builder/definition-validation.ts
function Gu(e) {
	return {
		duplicateKeys: K(() => hs(e.definitions.value)),
		duplicateNames: K(() => gs(e.definitions.value, e.runtimeSpeciesOptions.value)),
		duplicateSubspeciesKeys: K(() => Cs(e.definitions.value)),
		invalidDefinitionIndexes: K(() => e.definitions.value.flatMap((e, t) => e.key.trim() && e.name.trim() ? [] : [t])),
		invalidSpeciesLinkNames: K(() => _s(e.definitions.value)),
		invalidSubspeciesEntries: K(() => ws(e.definitions.value))
	};
}
//#endregion
//#region src/functions/species-builder/editor/linked-grants.ts
function Ku(e) {
	return e === "traits" ? "traits" : "skills";
}
function qu(e, t) {
	return t && t.length > 0 ? t.map(cd) : (e ?? []).map((e) => ({ name: e }));
}
function Ju(e, t) {
	return t && t.length > 0 ? t.map((e) => ({ choices: e.choices.map(cd) })) : (e ?? []).map((e) => ({ choices: sd(e).map((e) => ({ name: e })) }));
}
function Yu(e) {
	return e.map(dc).filter((e) => e.length > 0);
}
function Xu(e) {
	return e.flatMap((e) => {
		let t = Yu(e.choices);
		return t.length > 0 ? [t.join(", ")] : [];
	});
}
function Zu(e, t, n) {
	return e.map((e, r) => r === t ? { name: n } : cd(e));
}
function Qu(e, t, n) {
	return e.map((e, r) => r === t ? {
		item: n,
		name: uc(n)
	} : cd(e));
}
function $u(e, t, n, r) {
	return e.map((e, i) => i === t ? { choices: Zu(e.choices, n, r) } : ld(e));
}
function ed(e, t, n, r) {
	return e.map((e, i) => i === t ? { choices: Qu(e.choices, n, r) } : ld(e));
}
function td(e, t) {
	let n = t === "skills" ? "New Skill" : "New Trait";
	return [...e.map(cd), { name: n }];
}
function nd(e, t) {
	return e.filter((e, n) => n !== t).map(cd);
}
function rd(e, t) {
	let n = [{ name: "New Talent" }];
	return t === "choice" && n.push({ name: "Alternative Talent" }), [...e.map(ld), { choices: n }];
}
function id(e, t) {
	return e.map((e, n) => n === t ? { choices: [...e.choices.map(cd), { name: "Alternative Talent" }] } : ld(e));
}
function ad(e, t) {
	return e.filter((e, n) => n !== t).map(ld);
}
function od(e, t, n) {
	let r = e[t];
	return !r || r.choices.length === 1 ? ad(e, t) : e.map((e, r) => r === t ? { choices: e.choices.filter((e, t) => t !== n).map(cd) } : ld(e));
}
function sd(e) {
	let t = e.split(",").map((e) => e.trim()).filter((e) => e.length > 0);
	return t.length > 0 ? t : [e];
}
function cd(e) {
	return e.item ? {
		item: { ...e.item },
		name: e.name
	} : { name: e.name };
}
function ld(e) {
	return { choices: e.choices.map(cd) };
}
//#endregion
//#region src/functions/species-builder/editor/subspecies-fields.ts
function ud(e) {
	return {
		...e,
		subspecies: [...e.subspecies ?? [], {
			key: "",
			name: "New Subspecies"
		}]
	};
}
function dd(e, t) {
	let n = (e.subspecies ?? []).filter((e, n) => n !== t);
	return q(e, "subspecies", n.length > 0 ? n : void 0);
}
function fd(e, t, n) {
	let r = e.subspecies ?? [], i = r[t];
	return i ? {
		...e,
		subspecies: r.map((e, r) => r === t ? n(Os(i)) : e)
	} : e;
}
function pd(e, t, n) {
	return {
		...e,
		[t]: cs(n) ?? ""
	};
}
function md(e, t, n) {
	return q(e, t, ds(n));
}
function hd(e, t, n) {
	let r = e.characteristics ? { ...e.characteristics } : {}, i = ss(n);
	return i ? r[t] = i : delete r[t], q(e, "characteristics", Object.keys(r).length > 0 ? r : void 0);
}
function gd(e, t, n) {
	return q(e, t, rs(n));
}
function _d(e, t, n) {
	return q(e, t, ms(t, n));
}
function vd(e, t) {
	return q(e, "woundFormula", ls(t));
}
function yd(e, t) {
	return q(e, "careerTable", us(t));
}
//#endregion
//#region src/functions/species-builder/editor/linked-definition.ts
function bd(e, t) {
	let n = t === "skills" ? e.linkedSkills : e.linkedTraits;
	return qu(e[t], n);
}
function xd(e) {
	return Ju(e.talents, e.linkedTalents);
}
function Sd(e, t) {
	return Pd(e, t, td(bd(e, t), t));
}
function Cd(e, t, n, r) {
	return Pd(e, t, Zu(bd(e, t), n, r));
}
function wd(e, t, n) {
	return Pd(e, t, nd(bd(e, t), n));
}
function Td(e, t, n, r) {
	return Pd(e, t, Qu(bd(e, t), n, r));
}
function Ed(e, t) {
	return Fd(e, rd(xd(e), t));
}
function Dd(e, t) {
	return Fd(e, id(xd(e), t));
}
function Od(e, t, n, r) {
	return Fd(e, $u(xd(e), t, n, r));
}
function kd(e, t) {
	return Fd(e, ad(xd(e), t));
}
function Ad(e, t, n) {
	return Fd(e, od(xd(e), t, n));
}
function jd(e, t, n, r) {
	return Fd(e, ed(xd(e), t, n, r));
}
function Md(e, t, n) {
	let r = uc(n);
	if (t === "talents") {
		let t = xd(e);
		return Xu(t).includes(r) ? e : Fd(e, [...t, { choices: [{
			item: n,
			name: r
		}] }]);
	}
	let i = bd(e, t);
	return Yu(i).includes(r) ? e : Pd(e, t, [...i, {
		item: n,
		name: r
	}]);
}
function Nd(e, t, n) {
	let r = uc(n), i = Xu(xd(e));
	return fd(e, t, (e) => {
		if (Id(i, r)) {
			let t = Ld((e.talentsAdded ?? []).filter((e) => e !== r)), n = Ld((e.talentsRemoved ?? []).filter((e) => e !== r));
			return q(q(e, "talentsAdded", t), "talentsRemoved", n);
		}
		return (e.talentsAdded ?? []).includes(r) ? e : q(e, "talentsAdded", [...e.talentsAdded ?? [], r]);
	});
}
function Pd(e, t, n) {
	let r = t === "skills" ? "linkedSkills" : "linkedTraits", i = Yu(n);
	return q(q(e, r, n.length > 0 ? n : void 0), t, i.length > 0 ? i : void 0);
}
function Fd(e, t) {
	let n = Xu(t);
	return q(q(e, "linkedTalents", t.length > 0 ? t : void 0), "talents", n.length > 0 ? n : void 0);
}
function Id(e, t) {
	return e.includes(t) && !/\([^()]*\)/.test(t);
}
function Ld(e) {
	return e.length > 0 ? e : void 0;
}
//#endregion
//#region src/state/species-builder/linked-grant-actions.ts
var Rd = {
	skills: "skill",
	talents: "talent",
	traits: "trait"
};
function zd(e) {
	async function t(t, n) {
		let r = await e.resolveDroppedItem(Rd[t], n);
		p((e) => Md(e, t, r));
	}
	async function n(t, n, r) {
		let i = await e.resolveDroppedItem(Rd[t], r);
		p((e) => Td(e, t, n, i));
	}
	async function r(t, n, r) {
		let i = await e.resolveDroppedItem("talent", r);
		p((e) => jd(e, t, n, i));
	}
	async function i(t, n) {
		if (!e.selectedDefinition.value?.subspecies?.[t]) return;
		let r = await e.resolveDroppedItem("talent", n);
		p((e) => Nd(e, t, r));
	}
	function a(e) {
		p((t) => Sd(t, e));
	}
	function o(e, t, n) {
		p((r) => Cd(r, e, t, n));
	}
	function s(e, t) {
		p((n) => wd(n, e, t));
	}
	function c(e) {
		p((t) => Ed(t, e));
	}
	function l(e) {
		p((t) => Dd(t, e));
	}
	function u(e, t, n) {
		p((r) => Od(r, e, t, n));
	}
	function d(e) {
		p((t) => kd(t, e));
	}
	function f(e, t) {
		p((n) => Ad(n, e, t));
	}
	function p(t) {
		e.definitionActions.updateSelectedDefinition(t);
	}
	return {
		addLinkedItem: a,
		addTalentChoice: l,
		addTalentGrant: c,
		appendArrayFieldDrop: t,
		appendSubspeciesTalentDrop: i,
		removeLinkedItem: s,
		removeTalentChoice: f,
		removeTalentGrant: d,
		renameLinkedItem: o,
		renameTalentChoice: u,
		setLinkedItemDrop: n,
		setTalentChoiceDrop: r
	};
}
//#endregion
//#region src/functions/species-builder/editor/replacements.ts
function Bd() {
	return { name: "" };
}
function Vd() {
	return {
		replacement: Bd(),
		rolled: Bd()
	};
}
function Hd() {
	return {
		replacements: [Bd()],
		rolled: Bd()
	};
}
function Ud(e) {
	return [...e, Vd()];
}
function Wd(e, t) {
	return e.filter((e, n) => n !== t);
}
function Gd(e) {
	return [...e, Hd()];
}
function Kd(e, t) {
	return e.map((e, n) => n === t ? {
		...e,
		replacements: [...e.replacements, Bd()]
	} : e);
}
function qd(e, t, n) {
	return e.map((e, r) => r === t ? {
		...e,
		replacements: e.replacements.filter((e, t) => t !== n)
	} : e).filter((e) => e.replacements.length > 0);
}
function Jd(e, t) {
	return e.filter((e, n) => n !== t);
}
function Yd(e) {
	return e.talentReplacementRows?.length ? sf(e.talentReplacementRows) : Zd(e.talentReplacements);
}
function Xd(e) {
	return e.careerReplacementRows?.length ? sf(e.careerReplacementRows) : Qd(e.careerReplacements);
}
function Zd(e) {
	return Object.entries(e ?? {}).map(([e, t]) => ({
		replacement: { name: t },
		rolled: { name: e }
	}));
}
function Qd(e) {
	return Object.entries(e ?? {}).map(([e, t]) => ({
		replacements: t.map((e) => ({ name: e })),
		rolled: { name: e }
	}));
}
function $d(e, t, n, r) {
	return e.map((e, i) => i === t ? {
		...e,
		[n]: nf(r)
	} : e);
}
function ef(e, t, n) {
	return e.map((e, r) => r === t ? {
		...e,
		rolled: nf(n)
	} : e);
}
function tf(e, t, n, r) {
	return e.map((e, i) => {
		if (i !== t) return e;
		let a = e.replacements.map((e, t) => t === n ? nf(r) : e);
		return {
			...e,
			replacements: a
		};
	});
}
function nf(e) {
	return {
		item: e,
		name: uc(e)
	};
}
function rf(e, t) {
	return q(q(e, "talentReplacementRows", t.length > 0 ? t : void 0), "talentReplacements", gc(t));
}
function af(e, t) {
	return q(q(e, "careerReplacementRows", t.length > 0 ? t : void 0), "careerReplacements", _c(t));
}
function of(e, t) {
	return q(q(e, "talentReplacementRows", t.length > 0 ? t : void 0), "talentReplacements", gc(t));
}
function sf(e) {
	return JSON.parse(JSON.stringify(e));
}
//#endregion
//#region src/state/species-builder/replacement-actions.ts
function cf(e) {
	function t(t) {
		e.definitionActions.updateSelectedDefinition((e) => rf(e, t));
	}
	function n(t) {
		e.definitionActions.updateSelectedDefinition((e) => af(e, t));
	}
	function r(t, n) {
		e.subspeciesActions.updateSubspecies(t, (e) => of(e, n));
	}
	async function i(n, r, i) {
		let a = e.selectedDefinition.value;
		if (!a) return;
		let o = await l("talent", i);
		t($d(Yd(a), n, r, o));
	}
	async function a(t, n, i, a) {
		let o = e.selectedDefinition.value?.subspecies?.[t];
		if (!o) return;
		let s = await l("talent", a);
		r(t, $d(Yd(o), n, i, s));
	}
	async function o(t, r) {
		let i = e.selectedDefinition.value;
		if (!i) return;
		let a = await l("career", r);
		n(ef(Xd(i), t, a));
	}
	async function s(t, r, i) {
		let a = e.selectedDefinition.value;
		if (!a) return;
		let o = await l("career", i);
		n(tf(Xd(a), t, r, o));
	}
	async function c(t) {
		try {
			await e.bridge.openItemSheet(t);
		} catch (t) {
			e.loadError.value = ks(t);
		}
	}
	async function l(t, n) {
		try {
			return await e.bridge.resolveItemDrop(n, t);
		} catch (t) {
			throw e.loadError.value = ks(t), t;
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
//#region src/state/species-builder/save-state.ts
function lf(e) {
	let t = K(() => e.savedSettingsSnapshot.value !== Ts(e.normalizedSettings.value)), n = K(() => JSON.stringify(e.normalizedSettings.value.definitions)), r = K(() => e.savedDefinitionsSnapshot.value !== n.value), i = K(() => e.autoRegisterSpeciesTable.value && (e.speciesTable.value.ownership !== "managed" || !e.speciesTable.value.isRegistered)), a = K(() => e.savedSpeciesTableSnapshot.value !== e.speciesTableSnapshot.value || i.value || e.speciesTable.value.requiresLinkRepair), o = K(() => t.value || a.value), s = K(() => a.value || t.value && e.autoRegisterSpeciesTable.value), c = K(() => s.value ? e.speciesTableValidationMessages.value : []);
	return {
		blockingSpeciesTableValidationMessages: c,
		canSave: K(() => !e.isLoading.value && !e.isSaving.value && !e.loadError.value && o.value && e.duplicateKeys.value.length === 0 && e.duplicateNames.value.length === 0 && e.invalidDefinitionIndexes.value.length === 0 && e.invalidSpeciesLinkNames.value.length === 0 && e.duplicateSubspeciesKeys.value.length === 0 && e.invalidSubspeciesEntries.value.length === 0 && c.value.length === 0),
		definitionsHaveUnsavedChanges: r,
		hasUnsavedChanges: o,
		settingsHaveUnsavedChanges: t,
		speciesTableWillSave: s
	};
}
//#endregion
//#region src/state/species-builder/species-table-actions.ts
function uf(e) {
	let t = /* @__PURE__ */ N(du()), n = /* @__PURE__ */ N([]), r = K(() => fu(n.value, e.definitions.value)), i = K(() => pu(t.value, r.value)), a = K(() => yu(i.value)), o = K(() => hu(i.value.rows)), s = K(() => mu(i.value, r.value, e.autoRegisterSpeciesTable.value || i.value.ownership !== "new"));
	function c(e) {
		t.value = Os(e.draft), n.value = Os(e.runtimeOptions);
	}
	function l() {
		t.value.rows.push({
			name: "",
			speciesKey: "",
			weight: 1
		}), p();
	}
	function u(e) {
		t.value.rows.splice(e, 1), p();
	}
	function d(e, n) {
		let i = t.value.rows[e];
		if (!i) return;
		let a = r.value.find((e) => e.key === n);
		delete i.journalUuid, i.speciesKey = n, i.name = a?.label ?? i.name, p();
	}
	function f(e, n) {
		let r = t.value.rows[e];
		r && (r.weight = n.trim() ? Number(n) : 0, p());
	}
	function p() {
		e.message.value = "";
	}
	return {
		addSpeciesTableRow: l,
		hydrateSpeciesTable: c,
		preparedSpeciesTable: i,
		removeSpeciesTableRow: u,
		runtimeSpeciesOptions: n,
		speciesTable: t,
		speciesTableOptions: r,
		speciesTableSnapshot: a,
		speciesTableSummaries: o,
		speciesTableValidationMessages: s,
		updateSpeciesTableRowKey: d,
		updateSpeciesTableRowWeight: f
	};
}
//#endregion
//#region src/state/species-builder/subspecies-actions.ts
function df(e) {
	function t() {
		d(ud);
	}
	function n(e) {
		d((t) => dd(t, e));
	}
	function r(e, t, n) {
		u(e, (e) => pd(e, t, n));
	}
	function i(e, t, n) {
		u(e, (e) => md(e, t, n));
	}
	function a(e, t, n) {
		u(e, (e) => hd(e, t, n));
	}
	function o(e, t, n) {
		u(e, (e) => gd(e, t, n));
	}
	function s(e, t, n) {
		u(e, (e) => _d(e, t, n));
	}
	function c(e, t) {
		u(e, (e) => vd(e, t));
	}
	function l(e, t) {
		u(e, (e) => yd(e, t));
	}
	function u(e, t) {
		d((n) => fd(n, e, t));
	}
	function d(t) {
		Uu(e, t);
	}
	return {
		addSubspecies: t,
		deleteSubspecies: n,
		updateSubspeciesArrayField: o,
		updateSubspeciesCharacteristic: a,
		updateSubspeciesCareerTableRows: l,
		updateSubspeciesNumberField: i,
		updateSubspeciesStringField: r,
		updateSubspecies: u,
		updateSubspeciesTextMapField: s,
		updateSubspeciesWoundFormula: c
	};
}
//#endregion
//#region src/state/species-builder/index.ts
var ff = cc("species-builder", () => {
	let e, t = {
		loadRandomTalentSources: () => he().loadRandomTalentSources(),
		loadSettings: () => he().loadSettings(),
		loadSpeciesTable: () => he().loadSpeciesTable(),
		openItemSheet: (e) => he().openItemSheet(e),
		resolveItemDrop: (e, t) => he().resolveItemDrop(e, t),
		resolveJournalDrop: (e) => he().resolveJournalDrop(e),
		saveSettings: (e, t) => he().saveSettings(e, t),
		saveSpeciesTable: (e, t) => he().saveSpeciesTable(e, t)
	}, n = /* @__PURE__ */ N([]), r = /* @__PURE__ */ N(!1), i = /* @__PURE__ */ N(!1), a = /* @__PURE__ */ N(0), o = /* @__PURE__ */ N(!0), s = /* @__PURE__ */ N(!1), c = /* @__PURE__ */ N(""), l = /* @__PURE__ */ N(""), u = /* @__PURE__ */ N(""), d = /* @__PURE__ */ N([]), f = /* @__PURE__ */ N(""), p = /* @__PURE__ */ N(""), m = /* @__PURE__ */ N(""), h = K(() => n.value[a.value]), g = K(() => ys(n.value)), _ = K(() => ql({
		autoRegisterSpeciesTable: r.value,
		definitions: g.value,
		showGeneratedConfigTab: i.value
	})), v = K(() => Ds(yl(_.value))), y = uf({
		autoRegisterSpeciesTable: r,
		definitions: g,
		message: c
	}), { duplicateKeys: b, duplicateNames: x, duplicateSubspeciesKeys: S, invalidDefinitionIndexes: C, invalidSpeciesLinkNames: w, invalidSubspeciesEntries: ee } = Gu({
		definitions: g,
		runtimeSpeciesOptions: y.runtimeSpeciesOptions
	}), { blockingSpeciesTableValidationMessages: T, canSave: te, definitionsHaveUnsavedChanges: ne, hasUnsavedChanges: re, settingsHaveUnsavedChanges: E, speciesTableWillSave: ie } = lf({
		autoRegisterSpeciesTable: r,
		duplicateKeys: b,
		duplicateNames: x,
		duplicateSubspeciesKeys: S,
		invalidDefinitionIndexes: C,
		invalidSpeciesLinkNames: w,
		invalidSubspeciesEntries: ee,
		isLoading: o,
		isSaving: s,
		loadError: l,
		normalizedSettings: _,
		savedDefinitionsSnapshot: p,
		savedSettingsSnapshot: f,
		savedSpeciesTableSnapshot: m,
		speciesTable: y.speciesTable,
		speciesTableSnapshot: y.speciesTableSnapshot,
		speciesTableValidationMessages: y.speciesTableValidationMessages
	}), ae = Wu({
		definitions: n,
		message: c,
		selectedDefinition: h,
		selectedIndex: a
	}), oe = df({
		definitions: n,
		message: c,
		selectedIndex: a
	}), { resolveDroppedItem: se, ...D } = cf({
		bridge: t,
		definitionActions: ae,
		loadError: l,
		selectedDefinition: h,
		subspeciesActions: oe
	}), ce = zd({
		definitionActions: ae,
		resolveDroppedItem: se,
		selectedDefinition: h
	}), le = ku({
		bridge: t,
		definitionActions: ae,
		loadError: l,
		resolveDroppedItem: se,
		selectedDefinition: h,
		subspeciesActions: oe
	});
	async function ue() {
		o.value = !0, l.value = "", u.value = "", c.value = "";
		try {
			let [e, t, o] = await Promise.all([
				he().loadSettings(),
				he().loadRandomTalentSources(),
				he().loadSpeciesTable()
			]);
			r.value = e.autoRegisterSpeciesTable, n.value = Os(e.definitions), d.value = t, i.value = e.showGeneratedConfigTab, a.value = n.value.length > 0 ? 0 : -1, y.hydrateSpeciesTable(o), f.value = Ts(e), p.value = JSON.stringify(e.definitions), m.value = yu(o.draft);
		} catch (e) {
			l.value = ks(e);
		} finally {
			o.value = !1;
		}
	}
	async function de() {
		if (!te.value) return !1;
		s.value = !0, l.value = "", u.value = "", c.value = "";
		let e = E.value, t = ie.value, o = !1, d = [];
		try {
			if (e) {
				let e = ne.value, t = await he().saveSettings(_.value, e), s = t.settings;
				r.value = s.autoRegisterSpeciesTable, n.value = Os(s.definitions), i.value = s.showGeneratedConfigTab, a.value = n.value.length > 0 ? Math.min(a.value, n.value.length - 1) : -1, f.value = Ts(s), p.value = JSON.stringify(s.definitions), o = e, t.syncError && d.push(t.syncError);
			}
			if (t) {
				let e = await he().saveSpeciesTable(y.preparedSpeciesTable.value, r.value);
				y.hydrateSpeciesTable(e), m.value = yu(e.draft), e.registrationError && d.push(e.registrationError);
			}
			return d.length > 0 ? u.value = d.join(" ") : o ? c.value = "Saved. Refresh Foundry before using changed species in character generation." : t ? c.value = "Saved the world Species table." : c.value = "Saved Species Builder settings.", o;
		} catch (e) {
			return u.value = ks(e), o;
		} finally {
			s.value = !1;
		}
	}
	function fe(e) {
		i.value = e, c.value = "";
	}
	function pe(e) {
		r.value = e, c.value = "";
	}
	function me(t) {
		e = t;
	}
	function he() {
		if (!e) throw Error("Species Builder has not been connected to its Foundry bridge.");
		return e;
	}
	return {
		...ae,
		...le,
		...ce,
		...D,
		...y,
		...oe,
		autoRegisterSpeciesTable: r,
		blockingSpeciesTableValidationMessages: T,
		canSave: te,
		configure: me,
		definitions: n,
		duplicateKeys: b,
		duplicateNames: x,
		duplicateSubspeciesKeys: S,
		generatedConfigText: v,
		hasUnsavedChanges: re,
		invalidDefinitionIndexes: C,
		invalidSpeciesLinkNames: w,
		invalidSubspeciesEntries: ee,
		isLoading: o,
		isSaving: s,
		loadError: l,
		loadSettings: ue,
		message: c,
		randomTalentSources: d,
		saveChanges: de,
		saveError: u,
		selectedDefinition: h,
		selectedIndex: a,
		showGeneratedConfigTab: i,
		updateAutoRegisterSpeciesTable: pe,
		updateShowGeneratedConfigTab: fe
	};
});
//#endregion
//#region src/state/species-builder/editor.ts
function pf(e, t = {}) {
	let n = ff();
	n.configure(e);
	async function r() {
		await n.saveChanges() && t.onSettingsSaved?.();
	}
	return {
		...n,
		...lc(n),
		saveChanges: r
	};
}
//#endregion
//#region src/view/apps/species-builder/components/dialog-focus.ts
function mf() {
	let e;
	function t() {
		let t = document.activeElement;
		e = t instanceof HTMLElement && t !== document.body ? t : void 0;
	}
	function n() {
		let t = e;
		e = void 0, Dn(() => {
			window.requestAnimationFrame(() => {
				t?.isConnected && t.focus();
			});
		});
	}
	return {
		capture: t,
		restore: n
	};
}
//#endregion
//#region src/view/apps/species-builder/components/DeleteConfirmationSubView.vue?vue&type=script&setup=true&lang.ts
var hf = ["onKeydown"], gf = {
	key: 0,
	class: "dui-modal-box"
}, _f = { id: "species-builder-delete-message" }, vf = { class: "dui-modal-action" }, yf = /* @__PURE__ */ I({
	__name: "DeleteConfirmationSubView",
	props: { message: {} },
	emits: ["close", "confirm"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ N(), a = mf();
		function o() {
			i.value?.close();
		}
		function s() {
			n.message && r("close"), a.restore();
		}
		return Kn(() => n.message, async (e) => {
			e ? (a.capture(), await Dn(), n.message && !i.value?.open && i.value?.showModal()) : i.value?.open && i.value.close();
		}, {
			flush: "post",
			immediate: !0
		}), (t, n) => (z(), B("dialog", {
			ref_key: "dialog",
			ref: i,
			class: "dui-modal",
			"aria-describedby": "species-builder-delete-message",
			"aria-labelledby": "species-builder-delete-title",
			onClose: s,
			onKeydown: Yo(qo(o, ["stop", "prevent"]), ["esc"]),
			onKeyup: n[1] ||= Yo(qo(() => {}, ["stop"]), ["esc"])
		}, [e.message ? (z(), B("div", gf, [
			n[2] ||= H("h2", { id: "species-builder-delete-title" }, "Confirm Deletion", -1),
			H("p", _f, k(e.message), 1),
			H("div", vf, [H("button", {
				class: "dui-btn dui-btn-error",
				type: "button",
				onClick: n[0] ||= (e) => r("confirm")
			}, "Delete"), H("button", {
				autofocus: "",
				class: "dui-btn",
				type: "button",
				onClick: o
			}, "Cancel")])
		])) : G("", !0), n[3] ||= H("form", {
			class: "dui-modal-backdrop",
			method: "dialog"
		}, [H("button", {
			"aria-label": "Cancel deletion",
			type: "submit"
		}, "Close")], -1)], 40, hf));
	}
});
//#endregion
//#region src/view/apps/species-builder/tabs/species/species-key-suggestions.ts
function bf(e) {
	return ns(e.name) || "new-species";
}
function xf(e) {
	return ns(e.name) || "new-subspecies";
}
//#endregion
//#region src/view/apps/species-builder/components/SpeciesBuilderEditorContext.vue?vue&type=script&setup=true&lang.ts
var Sf = {
	"aria-label": "Current species and save state",
	class: "dui-footer dui-footer-horizontal app:sticky app:bottom-0 app:z-10 app:items-center app:justify-between app:gap-3 app:bg-base-200 app:px-3 app:py-2"
}, Cf = { class: "app:flex app:min-w-0 app:items-center app:gap-2" }, wf = {
	key: 0,
	class: "dui-badge dui-badge-ghost"
}, Tf = {
	"aria-atomic": "true",
	"aria-live": "polite",
	role: "status"
}, Ef = ["disabled"], Df = /* @__PURE__ */ I({
	__name: "SpeciesBuilderEditorContext",
	props: {
		canSave: { type: Boolean },
		definition: {},
		entityKey: {},
		entityName: {},
		hasUnsavedChanges: { type: Boolean },
		hasValidationErrors: { type: Boolean },
		isLoading: { type: Boolean },
		isSaving: { type: Boolean },
		loadError: {}
	},
	emits: ["save"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = K(() => n.entityName?.trim() || n.definition?.name.trim() || n.definition?.key.trim() || (n.definition ? "Untitled Species" : "Species Builder")), a = K(() => n.entityKey?.trim() ? n.entityKey.trim() : n.definition ? n.definition.key.trim() || bf(n.definition) : ""), o = K(() => n.isLoading ? {
			label: "Reloading species data...",
			statusClass: "dui-status-info"
		} : n.loadError ? {
			label: "Error: review the message in the editor",
			statusClass: "dui-status-error"
		} : n.isSaving ? {
			label: "Saving changes...",
			statusClass: "dui-status-info"
		} : n.hasValidationErrors ? {
			label: "Invalid changes: fix validation before saving",
			statusClass: "dui-status-warning"
		} : n.hasUnsavedChanges ? {
			label: "Unsaved changes",
			statusClass: "dui-status-warning"
		} : {
			label: "All changes saved",
			statusClass: "dui-status-success"
		});
		return (t, n) => (z(), B("footer", Sf, [H("div", Cf, [
			H("span", {
				"aria-hidden": "true",
				class: O(["dui-status", o.value.statusClass])
			}, null, 2),
			H("strong", null, k(i.value), 1),
			a.value ? (z(), B("span", wf, k(a.value), 1)) : G("", !0),
			H("span", Tf, k(o.value.label), 1)
		]), H("button", {
			class: "dui-btn dui-btn-primary dui-btn-sm",
			disabled: !e.canSave,
			type: "button",
			onClick: n[0] ||= (e) => r("save")
		}, [n[1] ||= H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-floppy-disk"
		}, null, -1), W(" " + k(e.isSaving ? "Saving..." : "Save Changes"), 1)], 8, Ef)]));
	}
}), Of = { class: "dui-navbar-start app:min-w-0 app:flex-1" }, kf = { class: "app:min-w-0" }, Af = {
	"aria-label": "Current location",
	class: "dui-breadcrumbs app:py-0 app:text-sm"
}, jf = { class: "app:m-0 app:p-0" }, Mf = { key: 0 }, Nf = { key: 1 }, Pf = { "aria-current": "page" }, Ff = { class: "dui-navbar-end" }, If = { class: "dui-dropdown-content dui-card dui-card-border app:z-30 app:w-52 app:bg-base-100" }, Lf = { class: "dui-menu dui-menu-sm app:w-full" }, Rf = ["disabled"], zf = { key: 0 }, Bf = ["disabled"], Vf = { key: 1 }, Hf = ["disabled"], Uf = /* @__PURE__ */ I({
	__name: "SpeciesBuilderHeader",
	props: {
		canManageDefinition: { type: Boolean },
		contextLabel: {},
		definitionName: {},
		isBusy: { type: Boolean }
	},
	emits: [
		"delete",
		"duplicate",
		"reload",
		"selectSpecies"
	],
	setup(e, { emit: t }) {
		let n = t, r = /* @__PURE__ */ N(), i = /* @__PURE__ */ N(), a = !1;
		function o(e) {
			l(), n(e);
		}
		function s() {
			l(), n("reload");
		}
		async function c(e) {
			let t = e.currentTarget instanceof HTMLElement ? e.currentTarget.closest(".wfrp4e-customizer-apps-root") : null;
			l(), n("selectSpecies"), await Dn(), t?.scrollTo({ top: 0 }), t?.querySelector("#species-builder-species-list-heading")?.focus();
		}
		function l() {
			r.value?.removeAttribute("open");
		}
		function u(e) {
			r.value?.open && (a = !0, e.preventDefault(), e.stopPropagation(), l());
		}
		function d(e) {
			a && (a = !1, e.preventDefault(), e.stopPropagation());
		}
		return (t, n) => (z(), B("header", {
			class: "dui-navbar app:sticky app:top-0 app:z-20 app:bg-base-200",
			onKeydown: Yo(u, ["esc"]),
			onKeyup: Yo(d, ["esc"])
		}, [
			H("div", Of, [H("div", kf, [n[2] ||= H("h1", { class: "app:m-0 app:text-xl app:leading-tight" }, "Species Builder", -1), H("nav", Af, [H("ul", jf, [
				e.definitionName ? (z(), B("li", Mf, [H("button", {
					class: "dui-btn dui-btn-link dui-btn-xs",
					type: "button",
					onClick: c
				}, " Species List ")])) : G("", !0),
				e.definitionName ? (z(), B("li", Nf, [H("span", null, k(e.definitionName), 1)])) : G("", !0),
				H("li", null, [H("span", Pf, k(e.contextLabel), 1)])
			])])])]),
			H("div", Ff, [H("details", {
				ref_key: "actionsDropdown",
				ref: r,
				class: "dui-dropdown dui-dropdown-end"
			}, [n[6] ||= H("summary", { class: "dui-btn dui-btn-outline dui-btn-sm" }, [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-ellipsis"
			}), W(" Actions ")], -1), H("div", If, [H("ul", Lf, [
				H("li", { onClick: l }, [Vr(t.$slots, "actions", { dialogHost: i.value })]),
				H("li", null, [H("button", {
					disabled: e.isBusy,
					type: "button",
					onClick: s
				}, [...n[3] ||= [H("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-rotate-right"
				}, null, -1), W(" Reload ", -1)]], 8, Rf)]),
				e.canManageDefinition ? (z(), B("li", zf, [H("button", {
					disabled: e.isBusy,
					type: "button",
					onClick: n[0] ||= (e) => o("duplicate")
				}, [...n[4] ||= [H("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-copy"
				}, null, -1), W(" Duplicate ", -1)]], 8, Bf)])) : G("", !0),
				e.canManageDefinition ? (z(), B("li", Vf, [H("button", {
					class: "app:text-error",
					disabled: e.isBusy,
					type: "button",
					onClick: n[1] ||= (e) => o("delete")
				}, [...n[5] ||= [H("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), W(" Delete ", -1)]], 8, Hf)])) : G("", !0)
			])])], 512)]),
			H("div", {
				ref_key: "portabilityDialogHost",
				ref: i
			}, null, 512)
		], 32));
	}
}), Wf = {
	attributes: {
		description: "Set starting characteristic formulas, Movement, Fate, and Resilience.",
		label: "Attributes"
	},
	details: {
		description: "Manage identity, WFRP availability, age, and height.",
		label: "Details"
	},
	skills: {
		description: "Choose the Skills granted during WFRP character creation.",
		label: "Skills"
	},
	subspecies: {
		description: "Create variants that inherit this species and store only their changes.",
		label: "Subspecies"
	},
	talents: {
		description: "Choose guaranteed Talents and Talent choice sets.",
		label: "Talents"
	},
	traits: {
		description: "Choose the Traits granted during WFRP character creation.",
		label: "Traits"
	},
	wounds: {
		description: "Define the runtime Wound formula and its generated Trait.",
		label: "Wounds"
	}
}, Gf = {
	careerReplacement: {
		description: "Offer alternate Careers when a configured Career group is rolled.",
		label: "Career Replacement"
	},
	careerTable: {
		description: "Map roll ranges to the Career groups used by character creation.",
		label: "Career Table"
	},
	randomTalents: {
		description: "Configure source tables and counts for random Talent draws.",
		label: "Random Talents"
	},
	talentReplacement: {
		description: "Offer replacement Talents when configured Talent results are rolled.",
		label: "Talent Replacement"
	}
};
function Kf(e) {
	let t = [
		{
			icon: "fa-solid fa-list",
			kind: "project",
			label: "Species List",
			tab: "species"
		},
		{
			icon: "fa-solid fa-dice-d20",
			kind: "project",
			label: "Species Table",
			tab: "species-table"
		},
		{
			icon: "fa-solid fa-gear",
			kind: "project",
			label: "Settings",
			tab: "settings"
		}
	];
	return e && t.push({
		icon: "fa-solid fa-code",
		kind: "project",
		label: "WFRP Config",
		tab: "wfrp-config"
	}), [
		{
			entries: t,
			key: "project",
			label: "Project"
		},
		{
			entries: [
				{
					icon: "fa-solid fa-id-card",
					kind: "editor",
					label: "Details",
					tab: "details"
				},
				{
					icon: "fa-solid fa-chart-simple",
					kind: "editor",
					label: "Attributes",
					tab: "attributes"
				},
				{
					icon: "fa-solid fa-heart-pulse",
					kind: "editor",
					label: "Wounds",
					tab: "wounds"
				},
				{
					icon: "fa-solid fa-people-group",
					kind: "editor",
					label: "Subspecies",
					tab: "subspecies"
				}
			],
			key: "identity",
			label: "Identity"
		},
		{
			entries: [
				{
					icon: "fa-solid fa-book-open",
					kind: "editor",
					label: "Skills",
					tab: "skills"
				},
				{
					icon: "fa-solid fa-star",
					kind: "editor",
					label: "Talents",
					tab: "talents"
				},
				{
					icon: "fa-solid fa-dna",
					kind: "editor",
					label: "Traits",
					tab: "traits"
				}
			],
			key: "grants",
			label: "Grants"
		},
		{
			entries: [
				{
					icon: "fa-solid fa-table",
					kind: "table",
					label: "Career Table",
					tab: "careerTable"
				},
				{
					icon: "fa-solid fa-dice",
					kind: "table",
					label: "Random Talents",
					tab: "randomTalents"
				},
				{
					icon: "fa-solid fa-arrow-right-arrow-left",
					kind: "table",
					label: "Talent Replacement",
					tab: "talentReplacement"
				},
				{
					icon: "fa-solid fa-route",
					kind: "table",
					label: "Career Replacement",
					tab: "careerReplacement"
				}
			],
			key: "tables",
			label: "Tables"
		}
	];
}
function qf(e, t) {
	return e.kind === "project" ? t.activeTab === e.tab && (e.tab !== "species" || !t.isEditorOpen) : !t.isEditorOpen || t.activeTab !== "species" ? !1 : e.kind === "editor" ? t.activeEditorTab === e.tab : t.activeEditorTab === "tables" && t.activeTableTab === e.tab;
}
function Jf(e, t) {
	return t.isBusy || e.kind !== "project" && !t.hasSelectedDefinition;
}
function Yf(e, t, n, r) {
	return e === "settings" ? {
		description: "Control optional authoring tools and sample definitions.",
		label: "Settings"
	} : e === "species-table" ? {
		description: "Configure the weighted world table WFRP uses to roll a character's species.",
		label: "Species Table"
	} : e === "wfrp-config" ? {
		description: "Review the WFRP config generated from the current draft.",
		label: "WFRP Config"
	} : t ? n === "tables" ? Gf[r] : Wf[n] : {
		description: "Choose a species to edit or create a new definition.",
		label: "Custom Species"
	};
}
//#endregion
//#region src/view/apps/species-builder/components/SpeciesBuilderNavigation.vue?vue&type=script&setup=true&lang.ts
var Xf = { class: "app:w-48 app:shrink-0" }, Zf = {
	"aria-label": "Species Builder sections",
	class: "app:sticky app:top-20"
}, Qf = { class: "dui-menu dui-menu-sm app:w-full app:rounded-box app:bg-base-200" }, $f = { class: "dui-menu-title" }, ep = [
	"aria-current",
	"disabled",
	"onClick"
], tp = /* @__PURE__ */ I({
	__name: "SpeciesBuilderNavigation",
	props: {
		activeEditorTab: {},
		activeTableTab: {},
		activeTab: {},
		hasSelectedDefinition: { type: Boolean },
		isBusy: { type: Boolean },
		isEditorOpen: { type: Boolean },
		showGeneratedConfigTab: { type: Boolean }
	},
	emits: [
		"selectEditorTab",
		"selectTableTab",
		"selectTab"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = K(() => Kf(n.showGeneratedConfigTab)), a = K(() => ({
			activeEditorTab: n.activeEditorTab,
			activeTableTab: n.activeTableTab,
			activeTab: n.activeTab,
			hasSelectedDefinition: n.hasSelectedDefinition,
			isBusy: n.isBusy,
			isEditorOpen: n.isEditorOpen
		}));
		async function o(e, t) {
			if (Jf(e, a.value)) return;
			let n = t.currentTarget instanceof HTMLElement ? t.currentTarget.closest(".wfrp4e-customizer-apps-root") : null;
			e.kind === "project" ? r("selectTab", e.tab) : e.kind === "editor" ? r("selectEditorTab", e.tab) : r("selectTableTab", e.tab), await Dn(), n?.scrollTo({ top: 0 });
		}
		return (e, t) => (z(), B("aside", Xf, [H("nav", Zf, [H("ul", Qf, [(z(!0), B(R, null, L(i.value, (e) => (z(), B(R, { key: e.key }, [H("li", $f, [H("span", null, k(e.label), 1)]), (z(!0), B(R, null, L(e.entries, (e) => (z(), B("li", { key: `${e.kind}-${e.tab}` }, [H("button", {
			"aria-current": P(qf)(e, a.value) ? "page" : void 0,
			class: O({ "dui-menu-active": P(qf)(e, a.value) }),
			disabled: P(Jf)(e, a.value),
			type: "button",
			onClick: (t) => o(e, t)
		}, [H("i", {
			"aria-hidden": "true",
			class: O(e.icon)
		}, null, 2), H("span", null, k(e.label), 1)], 10, ep)]))), 128))], 64))), 128))])])]));
	}
}), np = { "aria-live": "polite" }, rp = {
	key: 0,
	role: "alert",
	class: "dui-alert dui-alert-error app:m-0"
}, ip = {
	key: 1,
	role: "alert",
	class: "dui-alert dui-alert-warning app:m-0"
}, ap = {
	key: 2,
	role: "alert",
	class: "dui-alert dui-alert-warning app:m-0"
}, op = {
	key: 3,
	role: "alert",
	class: "dui-alert dui-alert-warning app:m-0"
}, sp = {
	key: 4,
	role: "alert",
	class: "dui-alert dui-alert-warning app:m-0"
}, cp = {
	key: 5,
	role: "alert",
	class: "dui-alert dui-alert-warning app:m-0"
}, lp = {
	key: 6,
	role: "alert",
	class: "dui-alert dui-alert-warning app:m-0"
}, up = {
	key: 7,
	role: "alert",
	class: "dui-alert dui-alert-warning app:m-0"
}, dp = {
	key: 8,
	class: "dui-alert dui-alert-info app:m-0"
}, fp = /* @__PURE__ */ I({
	__name: "SpeciesBuilderStatus",
	props: {
		duplicateKeys: {},
		duplicateNames: {},
		duplicateSubspeciesMessage: {},
		invalidDefinitionCount: {},
		invalidSpeciesLinkNames: {},
		invalidSubspeciesCount: {},
		loadError: {},
		message: {},
		validationMessage: {}
	},
	setup(e) {
		return (t, n) => (z(), B("section", np, [e.loadError ? (z(), B("p", rp, [n[0] ||= H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-circle-exclamation"
		}, null, -1), H("span", null, k(e.loadError), 1)])) : e.validationMessage ? (z(), B("p", ip, [n[1] ||= H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-triangle-exclamation"
		}, null, -1), H("span", null, k(e.validationMessage), 1)])) : e.duplicateKeys.length > 0 ? (z(), B("p", ap, [n[2] ||= H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-triangle-exclamation"
		}, null, -1), H("span", null, "Duplicate species key: " + k(e.duplicateKeys.join(", ")), 1)])) : e.duplicateNames.length > 0 ? (z(), B("p", op, [n[3] ||= H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-triangle-exclamation"
		}, null, -1), H("span", null, " Species names must be unique because WFRP identifies table results by name: " + k(e.duplicateNames.join(", ")), 1)])) : e.duplicateSubspeciesMessage ? (z(), B("p", sp, [n[4] ||= H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-triangle-exclamation"
		}, null, -1), H("span", null, k(e.duplicateSubspeciesMessage), 1)])) : e.invalidSpeciesLinkNames.length > 0 ? (z(), B("p", cp, [...n[5] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-triangle-exclamation"
		}, null, -1), H("span", null, "Species names cannot contain { or } because WFRP parses UUID-link labels.", -1)]])) : e.invalidDefinitionCount > 0 ? (z(), B("p", lp, [...n[6] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-triangle-exclamation"
		}, null, -1), H("span", null, "Species need both a key and name before saving.", -1)]])) : e.invalidSubspeciesCount > 0 ? (z(), B("p", up, [...n[7] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-triangle-exclamation"
		}, null, -1), H("span", null, "Subspecies need both a key and name before saving.", -1)]])) : e.message ? (z(), B("p", dp, [n[8] ||= H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-circle-info"
		}, null, -1), H("span", null, k(e.message), 1)])) : G("", !0)]));
	}
}), pp = new Set(Object.values(Y));
function mp(e, t) {
	if (!X(e)) return `${t} must be a JSON object.`;
	for (let [n, r] of Object.entries(e)) {
		if (!pp.has(n)) return `${t}.${n} is not a supported WFRP characteristic.`;
		let e = Np(r, `${t}.${n}`, "string formula");
		if (e) return e;
	}
	return "";
}
function hp(e, t) {
	return jp(e, t, [
		"die",
		"feet",
		"inches"
	], (e, t) => Ap(e, t, [
		["die", Np],
		["feet", Pp],
		["inches", Pp]
	], /* @__PURE__ */ new Set()));
}
function gp(e, t) {
	return jp(e, t, ["formula"], (e, t) => Ap(e, t, [["formula", (e, t) => Np(e, t, "string formula")]], new Set(["formula"])));
}
function _p(e, t) {
	return jp(e, t, ["rows"], (e, t) => Ap(e, t, [["rows", vp]], new Set(["rows"])));
}
function vp(e, t) {
	return Mp(e, t, (e, t) => bp(e, t));
}
function yp(e, t) {
	return Mp(e, t, (e, t) => bp(e, t));
}
function bp(e, t) {
	return jp(e, t, ["name"], (e, t) => Ap(e, t, [["name", Np]], new Set(["name"])));
}
function xp(e, t) {
	return Mp(e, t, (e, t) => jp(e, t, ["choices"], (e, t) => Ap(e, t, [["choices", (e, t) => wp(e, t, !0)]], new Set(["choices"]))));
}
function Sp(e, t) {
	return Mp(e, t, (e, t) => jp(e, t, ["replacement", "rolled"], (e, t) => Ap(e, t, [["replacement", bp], ["rolled", bp]], new Set(["replacement", "rolled"]))));
}
function Cp(e, t) {
	return Mp(e, t, (e, t) => jp(e, t, ["replacements", "rolled"], (e, t) => Ap(e, t, [["replacements", (e, t) => wp(e, t, !0)], ["rolled", bp]], new Set(["replacements", "rolled"]))));
}
function wp(e, t, n) {
	return n && Array.isArray(e) && e.length === 0 ? `${t} must contain at least one entry.` : yp(e, t);
}
function Tp(e, t) {
	return Mp(e, t, Np);
}
function Ep(e, t) {
	return kp(e, t, Np);
}
function Dp(e, t) {
	return kp(e, t, Pp);
}
function Op(e, t) {
	return kp(e, t, Tp);
}
function kp(e, t, n) {
	if (!X(e)) return `${t} must be a JSON object.`;
	for (let [r, i] of Object.entries(e)) {
		if (!r.trim()) return `${t} must not contain an empty key.`;
		let e = n(i, `${t}[${JSON.stringify(r)}]`);
		if (e) return e;
	}
	return "";
}
function Ap(e, t, n, r) {
	for (let [i, a] of n) {
		if (!(i in e)) {
			if (r.has(i)) return `${t}.${i} is required.`;
			continue;
		}
		let n = a(e[i], `${t}.${i}`);
		if (n) return n;
	}
	return "";
}
function jp(e, t, n, r) {
	if (!X(e)) return `${t} must be a JSON object.`;
	let i = Object.keys(e).find((e) => !n.includes(e));
	return i ? `${t}.${i} is not supported by species definition export version 1.` : r(e, t);
}
function Mp(e, t, n) {
	if (!Array.isArray(e)) return `${t} must be an array.`;
	for (let [r, i] of e.entries()) {
		let e = n(i, `${t}[${r}]`);
		if (e) return e;
	}
	return "";
}
function Np(e, t, n = "non-empty string") {
	return typeof e == "string" && e.trim() ? "" : `${t} must be a ${n}.`;
}
function Pp(e, t) {
	return typeof e == "number" && Number.isFinite(e) ? "" : `${t} must be a finite number.`;
}
function Fp(e, t) {
	return typeof e == "boolean" ? "" : `${t} must be a boolean.`;
}
//#endregion
//#region src/functions/species-builder/definition-portability/validation.ts
var Ip = [
	"careerTable",
	"characteristics",
	"extra",
	"fate",
	"key",
	"movement",
	"name",
	"randomTalents",
	"resilience",
	"talentReplacementRows",
	"talentReplacements",
	"woundFormula"
], Lp = [
	...Ip,
	"age",
	"careerReplacementRows",
	"careerReplacements",
	"height",
	"includeInExtraSpecies",
	"linkedSkills",
	"linkedTalents",
	"linkedTraits",
	"skills",
	"subspecies",
	"talents",
	"traits"
], Rp = [
	...Ip,
	"skillsAdded",
	"skillsRemoved",
	"talentsAdded",
	"talentsRemoved",
	"traitsAdded",
	"traitsRemoved"
];
function zp(e) {
	return jp(e, "definition", Lp, Bp);
}
function Bp(e, t) {
	return Vp(e, t) || Ap(e, t, [
		["includeInExtraSpecies", Fp],
		["age", Np],
		["height", hp],
		["careerReplacementRows", Cp],
		["careerReplacements", Op],
		["linkedSkills", yp],
		["linkedTalents", xp],
		["linkedTraits", yp],
		["skills", Tp],
		["talents", Tp],
		["traits", Tp],
		["subspecies", Hp]
	], new Set(["includeInExtraSpecies"]));
}
function Vp(e, t) {
	return Ap(e, t, [
		["key", Up],
		["name", Np],
		["characteristics", mp],
		["randomTalents", Dp],
		["talentReplacementRows", Sp],
		["talentReplacements", Ep],
		["movement", Pp],
		["fate", Pp],
		["resilience", Pp],
		["extra", Pp],
		["woundFormula", gp],
		["careerTable", _p]
	], new Set(["key", "name"]));
}
function Hp(e, t) {
	let n = Mp(e, t, (e, t) => jp(e, t, Rp, (e, t) => Vp(e, t) || Ap(e, t, [
		["skillsAdded", Tp],
		["skillsRemoved", Tp],
		["talentsAdded", Tp],
		["talentsRemoved", Tp],
		["traitsAdded", Tp],
		["traitsRemoved", Tp]
	], /* @__PURE__ */ new Set())));
	if (n || !Array.isArray(e)) return n;
	let r = /* @__PURE__ */ new Set();
	for (let [n, i] of e.entries()) {
		let e = ns(i.key);
		if (r.has(e)) return `${t}[${n}].key duplicates normalized subspecies key ${JSON.stringify(e)}.`;
		r.add(e);
	}
	return "";
}
function Up(e, t) {
	return Np(e, t) || (ns(e) ? "" : `${t} must contain at least one ASCII letter or number.`);
}
//#endregion
//#region src/functions/species-builder/definition-portability/index.ts
var Wp = "wfrp4e-customizer-species-definition";
function Gp(e) {
	let t = qp(e);
	if (!t.ok) throw Error(`Species definition cannot be exported: ${t.error}`);
	let n = {
		definition: Yp(t.definition),
		format: Wp,
		version: 1
	};
	return JSON.stringify(n, null, 2);
}
function Kp(e) {
	let t;
	try {
		t = JSON.parse(e);
	} catch (e) {
		return nm(`Import is not valid JSON: ${e instanceof Error ? e.message : "Unknown JSON error."}`);
	}
	if (!X(t)) return nm("Import payload must be a JSON object.");
	let n = Object.keys(t).find((e) => ![
		"definition",
		"format",
		"version"
	].includes(e));
	if (n) return nm(`${n} is not supported by species definition export version 1.`);
	if (t.format !== "wfrp4e-customizer-species-definition") return nm(`Import payload format must be "${Wp}".`);
	if (t.version !== 1) return nm("Import payload version must be 1.");
	if (!("definition" in t)) return nm("Import payload must include a definition object.");
	let r = zp(t.definition);
	if (r) return nm(r);
	let i = qp(t.definition);
	return i.ok ? {
		definition: Yp(i.definition),
		ok: !0
	} : i;
}
function qp(e) {
	let t = Jp(e);
	if (t) return nm(t);
	let n = ql({
		definitions: [e],
		showGeneratedConfigTab: !1
	}).definitions[0];
	return n ? {
		definition: n,
		ok: !0
	} : nm("definition could not be normalized as a Species Builder definition.");
}
function Jp(e) {
	if (!X(e)) return "definition must be a JSON object.";
	if (typeof e.key != "string" || !e.key.trim()) return "definition.key must be a non-empty string.";
	if (typeof e.name != "string" || !e.name.trim()) return "definition.name must be a non-empty string.";
	if ("includeInExtraSpecies" in e && typeof e.includeInExtraSpecies != "boolean") return "definition.includeInExtraSpecies must be a boolean.";
	if ("subspecies" in e && !Array.isArray(e.subspecies)) return "definition.subspecies must be an array.";
	let t = e.subspecies ?? [];
	for (let [e, n] of t.entries()) {
		if (!X(n)) return `definition.subspecies[${e}] must be a JSON object.`;
		if (typeof n.key != "string" || !n.key.trim()) return `definition.subspecies[${e}].key must be a non-empty string.`;
		if (typeof n.name != "string" || !n.name.trim()) return `definition.subspecies[${e}].name must be a non-empty string.`;
	}
	return "";
}
function Yp(e) {
	let t = {
		...e,
		careerTable: tm(e.careerTable),
		subspecies: e.subspecies?.map(Xp)
	};
	return e.linkedSkills && (t.linkedSkills = e.linkedSkills.map(Zp), t.skills = vc(t.linkedSkills)), e.linkedTalents && (t.linkedTalents = e.linkedTalents.map(Qp), t.talents = yc(t.linkedTalents)), e.linkedTraits && (t.linkedTraits = e.linkedTraits.map(Zp), t.traits = vc(t.linkedTraits)), e.talentReplacementRows && (t.talentReplacementRows = e.talentReplacementRows.map($p), t.talentReplacements = gc(t.talentReplacementRows)), e.careerReplacementRows && (t.careerReplacementRows = e.careerReplacementRows.map(em), t.careerReplacements = _c(t.careerReplacementRows)), t;
}
function Xp(e) {
	let t = {
		...e,
		careerTable: tm(e.careerTable)
	};
	return e.talentReplacementRows && (t.talentReplacementRows = e.talentReplacementRows.map($p), t.talentReplacements = gc(t.talentReplacementRows)), t;
}
function Zp(e) {
	return { name: dc(e) };
}
function Qp(e) {
	return { choices: e.choices.map(Zp) };
}
function $p(e) {
	return {
		replacement: Zp(e.replacement),
		rolled: Zp(e.rolled)
	};
}
function em(e) {
	return {
		replacements: e.replacements.map(Zp),
		rolled: Zp(e.rolled)
	};
}
function tm(e) {
	return e ? { rows: e.rows.map((e) => ({ name: e.name })) } : void 0;
}
function nm(e) {
	return {
		error: e,
		ok: !1
	};
}
//#endregion
//#region src/view/apps/species-builder/components/SpeciesDefinitionPortability.vue?vue&type=script&setup=true&lang.ts
var rm = ["disabled"], im = ["onKeydown"], am = { class: "dui-modal-box" }, om = { class: "dui-fieldset" }, sm = {
	key: 0,
	class: "dui-alert dui-alert-warning",
	role: "status"
}, cm = ["disabled", "value"], lm = ["disabled"], um = { class: "dui-fieldset" }, dm = ["disabled"], fm = ["disabled", "value"], pm = ["disabled"], mm = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, hm = {
	key: 1,
	class: "dui-alert dui-alert-info"
}, gm = {
	key: 2,
	class: "dui-alert dui-alert-warning",
	role: "alert"
}, _m = { "aria-live": "polite" }, vm = { class: "dui-modal-action" }, ym = ["disabled"], bm = /* @__PURE__ */ I({
	__name: "SpeciesDefinitionPortability",
	props: {
		definition: {},
		dialogHost: {},
		existingKeys: {},
		isDisabled: { type: Boolean }
	},
	emits: ["importDefinition"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ N(), a = mf(), o = /* @__PURE__ */ N(""), s = /* @__PURE__ */ N(""), c = /* @__PURE__ */ N(""), l = /* @__PURE__ */ N(), u = K(() => {
			if (!n.definition) return {
				error: "Select a species before exporting.",
				text: ""
			};
			try {
				return {
					error: "",
					text: Gp(n.definition)
				};
			} catch (e) {
				return {
					error: e instanceof Error ? e.message : "The selected species cannot be exported.",
					text: ""
				};
			}
		}), d = K(() => !!l.value && n.existingKeys.includes(ns(l.value?.key ?? "")));
		function f() {
			c.value = "", a.capture(), i.value?.showModal();
		}
		function p() {
			i.value?.close();
		}
		function m() {
			o.value = "", c.value = "", l.value = void 0, a.restore();
		}
		function h(e) {
			s.value = e.target instanceof HTMLTextAreaElement ? e.target.value : "", o.value = "", c.value = "", l.value = void 0;
		}
		function g() {
			if (n.isDisabled) return;
			let e = Kp(s.value);
			if (!e.ok) {
				o.value = e.error, c.value = "", l.value = void 0;
				return;
			}
			o.value = "", c.value = `Validated ${e.definition.name}. Review it before adding.`, l.value = e.definition;
		}
		async function _(e) {
			let t = e.target;
			if (!(t instanceof HTMLInputElement) || n.isDisabled) return;
			let r = t.files?.[0];
			if (r) try {
				s.value = await r.text(), g();
			} catch {
				s.value = "", o.value = "The selected file could not be read. Choose another JSON file or paste it.", c.value = "", l.value = void 0;
			} finally {
				t.value = "";
			}
		}
		async function v() {
			if (!n.isDisabled) {
				if (!u.value.text || !navigator.clipboard) {
					c.value = "Clipboard access is unavailable. Select and copy the export text manually.";
					return;
				}
				try {
					await navigator.clipboard.writeText(u.value.text), c.value = "Species export copied to the clipboard.";
				} catch {
					c.value = "Copy failed. Select and copy the export text manually.";
				}
			}
		}
		function y() {
			n.isDisabled || !l.value || d.value || (r("importDefinition", l.value), p());
		}
		return (t, n) => (z(), B(R, null, [H("button", {
			class: "app:w-full app:whitespace-nowrap",
			disabled: e.isDisabled,
			type: "button",
			onClick: f
		}, [...n[1] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-arrow-right-arrow-left"
		}, null, -1), W(" Import / Export ", -1)]], 8, rm), e.dialogHost ? (z(), V(sr, {
			key: 0,
			to: e.dialogHost
		}, [H("dialog", {
			ref_key: "dialog",
			ref: i,
			"aria-labelledby": "species-portability-title",
			class: "dui-modal",
			onClose: m,
			onKeydown: Yo(qo(p, ["stop", "prevent"]), ["esc"]),
			onKeyup: n[0] ||= Yo(qo(() => {}, ["stop"]), ["esc"])
		}, [H("section", am, [
			n[7] ||= H("h2", { id: "species-portability-title" }, "Transfer Species Definition", -1),
			n[8] ||= H("p", null, " Exported JSON contains project-owned authoring data and names, without Foundry document links. Imports are staged here and never replace the current draft. ", -1),
			H("fieldset", om, [
				n[3] ||= H("legend", { class: "dui-fieldset-legend" }, "Export selected species", -1),
				u.value.error ? (z(), B("p", sm, k(u.value.error), 1)) : (z(), B("textarea", {
					key: 1,
					"aria-label": "Species definition export JSON",
					class: "dui-textarea",
					disabled: e.isDisabled,
					readonly: "",
					rows: "10",
					value: u.value.text
				}, null, 8, cm)),
				H("button", {
					class: "dui-btn",
					disabled: e.isDisabled || !u.value.text,
					type: "button",
					onClick: v
				}, [...n[2] ||= [H("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-copy"
				}, null, -1), W(" Copy Export ", -1)]], 8, lm)
			]),
			n[9] ||= H("div", { class: "dui-divider" }, "Import", -1),
			H("fieldset", um, [
				n[4] ||= H("legend", { class: "dui-fieldset-legend" }, "Choose or paste a species export", -1),
				H("input", {
					accept: "application/json,.json",
					"aria-label": "Choose species definition JSON",
					class: "dui-file-input",
					disabled: e.isDisabled,
					type: "file",
					onChange: _
				}, null, 40, dm),
				H("textarea", {
					"aria-label": "Species definition import JSON",
					class: "dui-textarea",
					disabled: e.isDisabled,
					placeholder: "Paste a Species Builder export here",
					rows: "8",
					value: s.value,
					onInput: h
				}, null, 40, fm),
				H("button", {
					class: "dui-btn",
					disabled: e.isDisabled || !s.value.trim(),
					type: "button",
					onClick: g
				}, " Validate Import ", 8, pm)
			]),
			o.value ? (z(), B("p", mm, [n[5] ||= H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), H("span", null, k(o.value), 1)])) : l.value ? (z(), B("section", hm, [n[6] ||= H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-eye"
			}, null, -1), H("div", null, [
				H("strong", null, k(l.value.name), 1),
				H("p", null, "Key: " + k(l.value.key), 1),
				H("p", null, k(l.value.subspecies?.length ?? 0) + " subspecies", 1)
			])])) : G("", !0),
			d.value ? (z(), B("p", gm, " A species with key " + k(l.value?.key) + " already exists. Change the key in the import JSON and validate it again. ", 1)) : G("", !0),
			H("p", _m, k(c.value), 1),
			H("div", vm, [H("button", {
				class: "dui-btn dui-btn-primary",
				disabled: e.isDisabled || !l.value || d.value,
				type: "button",
				onClick: y
			}, " Add Imported Species ", 8, ym), H("button", {
				class: "dui-btn dui-btn-ghost",
				type: "button",
				onClick: p
			}, "Close")])
		]), n[10] ||= H("form", {
			class: "dui-modal-backdrop",
			method: "dialog"
		}, [H("button", {
			"aria-label": "Close transfer dialog",
			type: "submit"
		}, "Close")], -1)], 40, im)], 8, ["to"])) : G("", !0)], 64));
	}
});
//#endregion
//#region src/view/apps/species-builder/components/deletion.ts
function xm(e) {
	let t = /* @__PURE__ */ N(null);
	function n() {
		let n = e.selectedDefinition.value;
		n && (t.value = {
			kind: "species",
			message: `Delete species "${Sm(n)}"?`
		});
	}
	function r(n) {
		let r = e.selectedDefinition.value?.subspecies?.[n];
		r && (t.value = {
			index: n,
			kind: "subspecies",
			message: `Delete subspecies "${Sm(r)}"?`
		});
	}
	function i() {
		let n = t.value;
		n?.kind === "species" ? e.deleteDefinition() : n?.kind === "subspecies" && e.deleteSubspecies(n.index), t.value = null;
	}
	return {
		confirmPendingDelete: i,
		pendingDelete: t,
		requestDeleteDefinition: n,
		requestDeleteSubspecies: r
	};
}
function Sm(e) {
	return e.name.trim() || e.key.trim() || "Untitled Species";
}
//#endregion
//#region src/functions/species-builder/example-species/goblins.ts
var Cm = {
	ag: "2d10+25",
	bs: "2d10+25",
	dex: "2d10+20",
	fel: "2d10+10",
	i: "2d10+10",
	int: "2d10+20",
	s: "2d10+20",
	t: "2d10+20",
	wp: "2d10+10",
	ws: "2d10+15"
}, wm = [
	{ name: "Thief" },
	{ name: "Outlaw" },
	{ name: "Scout" },
	{ name: "Hunter" },
	{ name: "Trapper" },
	{ name: "Rat Catcher" },
	{ name: "Smuggler" },
	{ name: "Beggar" },
	{ name: "Entertainer" },
	{ name: "Servant" }
], Tm = [
	"Athletics",
	"Bribery",
	"Consume Alcohol",
	"Dodge",
	"Gamble",
	"Language (Goblin Tongue)",
	"Lore (Greenskins)",
	"Outdoor Survival",
	"Perception",
	"Ranged (Bow)",
	"Sleight of Hand",
	"Stealth (Rural)"
], Em = [
	{ name: "Thief" },
	{ name: "Outlaw" },
	{ name: "Scout" },
	{ name: "Hunter" },
	{ name: "Trapper" },
	{ name: "Rat Catcher" },
	{ name: "Miner" },
	{ name: "Herbalist" },
	{ name: "Entertainer" },
	{ name: "Servant" }
];
function Dm() {
	return km();
}
function Om() {
	return km({ subspecies: [{
		careerTable: { rows: Em },
		characteristics: {
			...Cm,
			i: "2d10+15"
		},
		key: "night",
		name: "Night Goblin",
		skillsAdded: [
			"Animal Care",
			"Charm Animal",
			"Ranged (Entangling)",
			"Set Trap",
			"Stealth (Underground)"
		],
		skillsRemoved: ["Gamble", "Stealth (Rural)"],
		talentsAdded: ["Resistance (Poison)", "Orientation, Sixth Sense"],
		traitsAdded: ["Infected", "Sun-Sick"]
	}] });
}
function km(e = {}) {
	return {
		age: "2d10+8",
		careerTable: { rows: wm },
		characteristics: Cm,
		extra: 3,
		fate: 2,
		height: {
			die: "1d10",
			feet: 3,
			inches: 8
		},
		includeInExtraSpecies: !0,
		key: "goblin",
		movement: 4,
		name: "Goblin",
		randomTalents: {
			talents: 0,
			"talents-cowardly-goblins": 1
		},
		resilience: 1,
		skills: Tm,
		talents: [
			"Night Vision",
			"Snivel",
			"Step Aside, Beneath Notice, Flee!"
		],
		traits: ["Afraid (Elves)"],
		...e
	};
}
//#endregion
//#region src/functions/species-builder/example-species/viltrumite.ts
function Am() {
	return {
		age: "200+20d10",
		careerTable: { rows: [
			{ name: "Duellist" },
			{ name: "Hunter" },
			{ name: "Pit Fighter" },
			{ name: "Soldier" },
			{ name: "Warrior Priest" }
		] },
		careerReplacements: { Flagellant: ["Pit Fighter"] },
		characteristics: {
			ag: "3d10+30",
			bs: "2d10+20",
			dex: "2d10+30",
			fel: "2d10+10",
			i: "3d10+30",
			int: "2d10+20",
			s: "5d10+60",
			t: "5d10+60",
			wp: "4d10+40",
			ws: "4d10+40"
		},
		extra: 2,
		fate: 1,
		height: {
			die: "1d10",
			feet: 5,
			inches: 2
		},
		includeInExtraSpecies: !0,
		key: "viltrumite",
		movement: 6,
		name: "Viltrumite",
		randomTalents: { talents: 3 },
		resilience: 2,
		skills: [
			"Athletics",
			"Cool",
			"Dodge",
			"Endurance",
			"Intimidate",
			"Melee (Brawling)"
		],
		subspecies: [{
			careerTable: { rows: [
				{ name: "Hunter" },
				{ name: "Scout" },
				{ name: "Soldier" }
			] },
			key: "imperial",
			name: "Imperial",
			randomTalents: { talents: 3 },
			talentsAdded: ["Combat Aware", "Lightning Reflexes, Very Resilient"],
			talentsRemoved: ["Combat Reflexes", "Lightning Reflexes, Warrior Born"],
			woundFormula: { formula: "@tb * (8 + @tbMultiplier) + @wpb * (2 + @wpbMultiplier) + @age / 50" }
		}],
		talentReplacements: { Artistic: "Warrior Born" },
		talents: ["Combat Reflexes", "Lightning Reflexes, Warrior Born"],
		traits: [
			"Flight",
			"Hardy",
			"Size (Large)"
		],
		woundFormula: { formula: "@sb * (10 + @sbMultiplier) + @tb * (80 + @tbMultiplier) + @wpb * (20 + @wpbMultiplier)" }
	};
}
//#endregion
//#region src/functions/species-builder/example-species/index.ts
var jm = [
	{
		createDefinition: Am,
		description: "A deliberately extreme species for stress-testing formulas and generated Traits.",
		id: "viltrumite",
		label: "Viltrumite"
	},
	{
		createDefinition: Dm,
		description: "A Goblin player species seed using the sample species Journal direction.",
		id: "goblin",
		label: "Goblin"
	},
	{
		createDefinition: Om,
		description: "A Goblin seed with Night Goblin configured as a subspecies.",
		id: "night-goblin",
		label: "Night Goblin"
	}
], Mm = jm.map(({ description: e, id: t, label: n }) => ({
	description: e,
	id: t,
	label: n
}));
function Nm() {
	return [Am(), Om()];
}
function Pm(e) {
	return jm.find((t) => t.id === e)?.createDefinition();
}
//#endregion
//#region src/view/apps/species-builder/tabs/settings/SpeciesBuilderSettingsPanel.vue?vue&type=script&setup=true&lang.ts
var Fm = { class: "dui-card dui-card-border dui-card-sm" }, Im = { class: "dui-card-body" }, Lm = { class: "dui-fieldset" }, Rm = { class: "dui-label" }, zm = ["checked", "disabled"], Bm = { class: "dui-fieldset" }, Vm = { class: "dui-fieldset-legend" }, Hm = { class: "dui-badge dui-badge-sm" }, Um = { class: "dui-label app:w-full app:items-start app:justify-between app:gap-3 app:whitespace-normal" }, Wm = ["checked", "disabled"], Gm = { class: "dui-fieldset" }, Km = ["disabled", "value"], qm = ["value"], Jm = { class: "dui-fieldset-label" }, Ym = { class: "dui-join" }, Xm = ["disabled"], Zm = ["disabled"], Qm = /* @__PURE__ */ I({
	__name: "SpeciesBuilderSettingsPanel",
	props: {
		autoRegisterSpeciesTable: { type: Boolean },
		exampleSpeciesOptions: {},
		isDisabled: { type: Boolean },
		selectedExampleSpeciesId: {},
		showGeneratedConfigTab: { type: Boolean },
		speciesTable: {}
	},
	emits: [
		"generateAllExampleSpecies",
		"generateExampleSpecies",
		"updateAutoRegisterSpeciesTable",
		"updateSelectedExampleSpeciesId",
		"updateShowGeneratedConfigTab"
	],
	setup(e, { emit: t }) {
		let n = t, r = e, i = K(() => r.exampleSpeciesOptions.find((e) => e.id === r.selectedExampleSpeciesId));
		function a(e) {
			return e.target instanceof HTMLInputElement && e.target.checked;
		}
		function o(e) {
			return e.target instanceof HTMLSelectElement ? e.target.value : "";
		}
		function s() {
			return r.speciesTable.ownership === "external" ? r.speciesTable.isRegistered ? "External table active" : "External table" : r.speciesTable.ownership === "managed" ? r.speciesTable.isRegistered ? "Registered" : "Not registered" : "No managed table yet";
		}
		return (t, r) => (z(), B("section", Fm, [H("div", Im, [
			r[15] ||= H("header", null, [H("h2", { class: "dui-card-title" }, "Species Builder Settings"), H("p", null, "Control optional tools and add sample definitions to the current draft.")], -1),
			H("fieldset", Lm, [
				r[6] ||= H("legend", { class: "dui-fieldset-legend" }, "Generated config", -1),
				r[7] ||= H("p", { class: "dui-fieldset-label" }, " Expose the read-only WFRP config generated from the current draft. ", -1),
				H("label", Rm, [H("input", {
					class: "dui-checkbox",
					checked: e.showGeneratedConfigTab,
					disabled: e.isDisabled,
					type: "checkbox",
					onChange: r[0] ||= (e) => n("updateShowGeneratedConfigTab", a(e))
				}, null, 40, zm), r[5] ||= H("span", null, "Show WFRP config tab", -1)])
			]),
			H("fieldset", Bm, [H("legend", Vm, [r[8] ||= W(" World Species Table ", -1), H("span", Hm, k(s()), 1)]), H("label", Um, [r[9] ||= H("span", null, [H("strong", null, "Register managed table on save"), H("span", { class: "app:block app:text-base-content/70" }, " When enabled, Save Changes points WFRP’s world Species table setting to the Builder-managed table. Turning this off stops future registration; it does not change or delete the table currently selected by WFRP. ")], -1), H("input", {
				class: "dui-toggle dui-toggle-primary app:shrink-0",
				checked: e.autoRegisterSpeciesTable,
				disabled: e.isDisabled,
				type: "checkbox",
				onChange: r[1] ||= (e) => n("updateAutoRegisterSpeciesTable", a(e))
			}, null, 40, Wm)])]),
			r[16] ||= H("div", { class: "dui-divider" }, "Sample Definitions", -1),
			H("fieldset", Gm, [
				r[12] ||= H("legend", { class: "dui-fieldset-legend" }, "Example Species", -1),
				r[13] ||= H("p", { class: "dui-fieldset-label" }, " Add preconfigured species definitions matching sample species Journal material. ", -1),
				r[14] ||= H("label", {
					class: "dui-label",
					for: "species-builder-example"
				}, "Sample definition", -1),
				H("select", {
					id: "species-builder-example",
					class: "dui-select",
					disabled: e.isDisabled,
					value: e.selectedExampleSpeciesId,
					onChange: r[2] ||= (e) => n("updateSelectedExampleSpeciesId", o(e))
				}, [(z(!0), B(R, null, L(e.exampleSpeciesOptions, (e) => (z(), B("option", {
					key: e.id,
					value: e.id
				}, k(e.label), 9, qm))), 128))], 40, Km),
				H("p", Jm, k(i.value?.description), 1),
				H("div", Ym, [H("button", {
					class: "dui-btn dui-join-item",
					disabled: e.isDisabled || !e.selectedExampleSpeciesId,
					type: "button",
					onClick: r[3] ||= (t) => n("generateExampleSpecies", e.selectedExampleSpeciesId)
				}, [...r[10] ||= [H("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-scroll"
				}, null, -1), W(" Generate Selected ", -1)]], 8, Xm), H("button", {
					class: "dui-btn dui-join-item",
					disabled: e.isDisabled || e.exampleSpeciesOptions.length === 0,
					type: "button",
					onClick: r[4] ||= (e) => n("generateAllExampleSpecies")
				}, [...r[11] ||= [H("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-layer-group"
				}, null, -1), W(" Generate All ", -1)]], 8, Zm)])
			])
		])]));
	}
}), $m = { class: "dui-card-actions" }, eh = { class: "dui-badge" }, th = ["disabled", "title"], nh = /* @__PURE__ */ I({
	__name: "TableEditorHeader",
	props: {
		headingLevel: { default: "h4" },
		actionLabel: {},
		actionTitle: {},
		count: {},
		description: {},
		isDisabled: { type: Boolean },
		title: {}
	},
	emits: ["add"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (z(), B("header", null, [
			(z(), V(Rr(e.headingLevel), { class: "dui-card-title" }, {
				default: F(() => [W(k(e.title), 1)]),
				_: 1
			})),
			H("p", null, k(e.description), 1),
			H("div", $m, [H("span", eh, k(e.count), 1), H("button", {
				class: "dui-btn dui-btn-sm",
				disabled: e.isDisabled,
				title: e.actionTitle,
				type: "button",
				onClick: r[0] ||= (e) => n("add")
			}, [r[1] ||= H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), W(" " + k(e.actionLabel), 1)], 8, th)])
		]));
	}
}), rh = { class: "dui-card dui-card-border dui-card-sm" }, ih = { class: "dui-card-body" }, ah = { class: "app:flex app:flex-wrap app:items-center app:gap-2" }, oh = { class: "dui-badge dui-badge-sm" }, sh = { class: "app:text-base-content/70" }, ch = {
	key: 0,
	class: "dui-alert dui-alert-info",
	role: "status"
}, lh = {
	key: 1,
	class: "dui-alert dui-alert-warning",
	role: "status"
}, uh = ["role"], dh = {
	key: 3,
	class: "app:overflow-x-auto"
}, fh = { class: "dui-table dui-table-sm" }, ph = { scope: "row" }, mh = ["for"], hh = [
	"id",
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onChange"
], gh = { value: "" }, _h = ["disabled", "value"], vh = ["id"], yh = ["for"], bh = [
	"id",
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], xh = ["for"], Sh = [
	"disabled",
	"title",
	"onClick"
], Ch = { class: "app:sr-only" }, wh = {
	key: 4,
	class: "dui-alert dui-alert-info",
	role: "status"
}, Th = /* @__PURE__ */ I({
	__name: "SpeciesBuilderSpeciesTablePanel",
	props: {
		draft: {},
		isDisabled: { type: Boolean },
		isValidationBlocking: { type: Boolean },
		options: {},
		summaries: {},
		validationMessages: {}
	},
	emits: [
		"addRow",
		"removeRow",
		"updateRowKey",
		"updateRowWeight"
	],
	setup(e, { emit: t }) {
		let n = e, r = t;
		function i(e) {
			return e.target instanceof HTMLSelectElement ? e.target.value : "";
		}
		function a(e) {
			return e.target instanceof HTMLInputElement ? e.target.value : "";
		}
		function o(e, t) {
			return n.draft.rows.some((n, r) => r !== t && n.speciesKey === e);
		}
		function s(e, t) {
			return !e.speciesKey || !n.options.some((t) => t.key === e.speciesKey) || o(e.speciesKey, t);
		}
		function c(e) {
			return !Number.isInteger(e.weight) || e.weight < 1;
		}
		function l(e, t) {
			let n = [];
			return s(e, t) && n.push("Choose a unique known species"), c(e) && n.push("Use a whole-number weight of at least 1"), n.join(". ");
		}
		function u(e) {
			return !e || e.chance <= 0 ? "Invalid weight" : `${new Intl.NumberFormat(void 0, {
				maximumFractionDigits: 1,
				style: "percent"
			}).format(e.chance)} · ${e.range[0]}–${e.range[1]}`;
		}
		function d() {
			return n.draft.ownership === "external" ? n.draft.isRegistered ? "External table active" : "External table" : n.draft.ownership === "managed" ? n.draft.isRegistered ? "Registered" : "Not registered" : "No managed table yet";
		}
		return (t, n) => (z(), B("section", rh, [H("div", ih, [
			U(nh, {
				"action-label": "Add Species",
				"action-title": "Add a weighted species result",
				count: e.draft.rows.length,
				description: "Weights set each species' share of random character-creation rolls.",
				"is-disabled": e.isDisabled,
				"heading-level": "h2",
				title: "Random Species Table",
				onAdd: n[0] ||= (e) => r("addRow")
			}, null, 8, ["count", "is-disabled"]),
			H("div", ah, [H("span", oh, k(d()), 1), H("span", sh, k(e.draft.name), 1)]),
			e.draft.ownership === "external" ? (z(), B("div", ch, [...n[1] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-copy"
			}, null, -1), H("span", null, " This is the current WFRP source table. On Save, table changes create a Species Builder-managed copy and leave the imported source unchanged. ", -1)]])) : G("", !0),
			e.draft.requiresLinkRepair ? (z(), B("div", lh, [...n[2] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-link-slash"
			}, null, -1), H("span", null, " One or more results lack WFRP's required UUID-link description. Save to generate or reuse species Journals and repair both the result name and link label. ", -1)]])) : G("", !0),
			e.validationMessages[0] ? (z(), B("div", {
				key: 2,
				class: O(["dui-alert", e.isValidationBlocking ? "dui-alert-warning" : "dui-alert-info"]),
				role: e.isValidationBlocking ? "alert" : "status"
			}, [n[3] ||= H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-triangle-exclamation"
			}, null, -1), H("span", null, [W(k(e.isValidationBlocking ? "Fix before saving:" : "Imported table needs attention:") + " " + k(e.validationMessages[0]) + " ", 1), e.validationMessages.length > 1 ? (z(), B(R, { key: 0 }, [W(" (" + k(e.validationMessages.length) + " issues total) ", 1)], 64)) : G("", !0)])], 10, uh)) : G("", !0),
			e.draft.rows.length ? (z(), B("div", dh, [H("table", fh, [
				n[5] ||= H("caption", { class: "app:sr-only" }, " Weighted results for the world WFRP Species table ", -1),
				n[6] ||= H("thead", null, [H("tr", null, [
					H("th", { scope: "col" }, "#"),
					H("th", { scope: "col" }, "Species"),
					H("th", { scope: "col" }, "Weight"),
					H("th", { scope: "col" }, "Chance / range"),
					H("th", { scope: "col" }, [H("span", { class: "app:sr-only" }, "Actions")])
				])], -1),
				H("tbody", null, [(z(!0), B(R, null, L(e.draft.rows, (t, d) => (z(), B("tr", { key: t.resultId ?? `new-${d}` }, [
					H("th", ph, k(d + 1), 1),
					H("td", null, [
						H("label", {
							class: "app:sr-only",
							for: `species-table-species-${d}`
						}, " Species for row " + k(d + 1), 9, mh),
						H("select", {
							id: `species-table-species-${d}`,
							"aria-describedby": l(t, d) ? `species-table-row-error-${d}` : void 0,
							"aria-invalid": s(t, d) || void 0,
							class: "dui-select dui-select-sm app:min-w-48 app:w-full",
							disabled: e.isDisabled,
							value: t.speciesKey,
							onChange: (e) => r("updateRowKey", d, i(e))
						}, [H("option", gh, k(t.name ? `Unrecognized: ${t.name}` : "Choose a species"), 1), (z(!0), B(R, null, L(e.options, (e) => (z(), B("option", {
							key: e.key,
							disabled: o(e.key, d),
							value: e.key
						}, k(e.label), 9, _h))), 128))], 40, hh),
						l(t, d) ? (z(), B("span", {
							key: 0,
							id: `species-table-row-error-${d}`,
							class: "app:mt-1 app:block app:text-xs app:text-error"
						}, k(l(t, d)) + ". ", 9, vh)) : G("", !0)
					]),
					H("td", null, [H("label", {
						class: "app:sr-only",
						for: `species-table-weight-${d}`
					}, " Weight for row " + k(d + 1), 9, yh), H("input", {
						id: `species-table-weight-${d}`,
						"aria-describedby": l(t, d) ? `species-table-row-error-${d}` : void 0,
						"aria-invalid": c(t) || void 0,
						class: "dui-input dui-input-sm app:w-24",
						disabled: e.isDisabled,
						inputmode: "numeric",
						min: "1",
						step: "1",
						type: "number",
						value: t.weight,
						onInput: (e) => r("updateRowWeight", d, a(e))
					}, null, 40, bh)]),
					H("td", null, [H("output", { for: `species-table-weight-${d}` }, k(u(e.summaries[d])), 9, xh)]),
					H("td", null, [H("button", {
						class: "dui-btn dui-btn-error dui-btn-outline dui-btn-sm",
						disabled: e.isDisabled,
						title: `Remove ${t.name || `row ${d + 1}`}`,
						type: "button",
						onClick: (e) => r("removeRow", d)
					}, [n[4] ||= H("i", {
						"aria-hidden": "true",
						class: "fa-solid fa-trash"
					}, null, -1), H("span", Ch, "Remove row " + k(d + 1), 1)], 8, Sh)])
				]))), 128))])
			])])) : (z(), B("div", wh, [...n[7] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), H("span", null, "Add at least one species to create a managed world table.", -1)]]))
		])]));
	}
}), Eh = ["aria-current"], Dh = { class: "dui-list-col-grow app:flex app:flex-wrap app:items-center app:gap-2" }, Oh = { class: "app:flex app:flex-wrap app:items-center app:gap-1" }, kh = {
	key: 0,
	class: "dui-badge dui-badge-ghost dui-badge-sm"
}, Ah = ["aria-label", "disabled"], jh = /* @__PURE__ */ I({
	__name: "SpeciesBuilderEntityRow",
	props: {
		editIconClass: { default: "fa-solid fa-pen" },
		entryKey: {},
		iconClass: {},
		isDisabled: { type: Boolean },
		isSelected: {
			type: Boolean,
			default: !1
		},
		isSpecies: {
			type: Boolean,
			default: !1
		},
		meta: { default: "" },
		title: {}
	},
	emits: ["open"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (z(), B("li", {
			class: "dui-list-row",
			"aria-current": e.isSelected ? "true" : void 0
		}, [
			H("i", {
				"aria-hidden": "true",
				class: O(e.iconClass)
			}, null, 2),
			H("span", Dh, [H("strong", null, k(e.title), 1), H("span", Oh, [H("span", { class: O(["dui-badge dui-badge-sm", {
				"dui-badge-info": e.isSelected,
				"dui-badge-ghost": !e.isSelected
			}]) }, k(e.entryKey), 3), e.meta ? (z(), B("span", kh, k(e.meta), 1)) : G("", !0)])]),
			H("button", {
				"aria-label": `Open ${e.title} editor`,
				class: "dui-btn dui-btn-outline dui-btn-sm",
				disabled: e.isDisabled,
				type: "button",
				onClick: r[0] ||= (e) => n("open")
			}, [H("i", {
				"aria-hidden": "true",
				class: O(e.editIconClass)
			}, null, 2), W(" " + k(e.isSpecies ? "Edit species" : "Edit"), 1)], 8, Ah)
		], 8, Eh));
	}
}), Mh = { class: "dui-card dui-card-border dui-card-sm" }, Nh = { class: "dui-card-body" }, Ph = { class: "app:flex app:items-start app:justify-between app:gap-4" }, Fh = { class: "dui-card-actions app:items-center" }, Ih = { class: "dui-badge dui-badge-sm" }, Lh = ["disabled"], Rh = {
	key: 0,
	role: "status",
	class: "dui-alert dui-alert-info"
}, zh = {
	key: 1,
	class: "dui-list"
}, Bh = /* @__PURE__ */ I({
	__name: "SpeciesBuilderOverview",
	props: {
		definitions: {},
		isDisabled: { type: Boolean },
		selectedIndex: {}
	},
	emits: ["addSpecies", "editSpecies"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			return e.name.trim() || e.key.trim() || "Untitled Species";
		}
		function i(e) {
			return e.key.trim() || bf(e);
		}
		return (t, a) => (z(), B("section", Mh, [H("div", Nh, [H("header", Ph, [a[2] ||= H("div", null, [H("h2", {
			id: "species-builder-species-list-heading",
			class: "dui-card-title",
			tabindex: "-1"
		}, " Custom Species "), H("p", { class: "app:m-0" }, " Open a species to manage its details, grants, tables, and subspecies. ")], -1), H("div", Fh, [H("span", Ih, k(e.definitions.length), 1), H("button", {
			class: "dui-btn dui-btn-primary",
			disabled: e.isDisabled,
			type: "button",
			onClick: a[0] ||= (e) => n("addSpecies")
		}, [...a[1] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-plus"
		}, null, -1), W(" New Species ", -1)]], 8, Lh)])]), e.definitions.length === 0 ? (z(), B("div", Rh, [...a[3] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-circle-info"
		}, null, -1), H("span", null, "No species yet. Add one to begin.", -1)]])) : (z(), B("ul", zh, [(z(!0), B(R, null, L(e.definitions, (t, a) => (z(), V(jh, {
			key: `${t.key}-${a}`,
			"edit-icon-class": "fa-solid fa-pen-to-square",
			"entry-key": i(t),
			"icon-class": "fa-solid fa-users",
			"is-disabled": e.isDisabled,
			"is-selected": a === e.selectedIndex,
			"is-species": "",
			title: r(t),
			onOpen: (e) => n("editSpecies", a)
		}, null, 8, [
			"entry-key",
			"is-disabled",
			"is-selected",
			"title",
			"onOpen"
		]))), 128))]))])]));
	}
}), Vh = { class: "dui-card dui-card-border dui-card-sm" }, Hh = { class: "dui-card-body" }, Uh = { class: "dui-mockup-code" }, Wh = { tabindex: "0" }, Gh = /* @__PURE__ */ I({
	__name: "WfrpConfigPanel",
	props: { generatedConfigText: {} },
	setup(e) {
		return (t, n) => (z(), B("section", Vh, [H("div", Hh, [
			n[0] ||= H("h2", { class: "dui-card-title" }, "WFRP Config", -1),
			n[1] ||= H("p", null, " Read-only config generated from the current draft. This view grows with the outer application scroll area. ", -1),
			H("div", Uh, [H("pre", Wh, [H("code", null, k(e.generatedConfigText), 1)])])
		])]));
	}
}), Kh = {
	key: 0,
	id: "species-builder-panel-settings",
	"aria-label": "Species Builder settings",
	role: "region"
}, qh = {
	key: 1,
	id: "species-builder-panel-species-table",
	"aria-label": "Random Species table",
	role: "region"
}, Jh = {
	key: 2,
	id: "species-builder-panel-wfrp-config",
	"aria-label": "Generated WFRP configuration",
	role: "region"
}, Yh = {
	key: 3,
	id: "species-builder-panel-species",
	"aria-label": "Species definitions",
	role: "region"
}, Xh = /* @__PURE__ */ I({
	__name: "SpeciesBuilderProjectPages",
	props: {
		activeTab: {},
		isDisabled: { type: Boolean }
	},
	emits: ["editSpecies"],
	setup(e, { emit: t }) {
		let n = t, r = ff(), i = /* @__PURE__ */ N(Mm[0]?.id ?? "");
		function a() {
			r.addBlankDefinition(), n("editSpecies", r.selectedIndex);
		}
		function o(e) {
			let t = Pm(e);
			t && (r.addDefinition(t), n("editSpecies", r.selectedIndex));
		}
		function s() {
			r.addDefinitions(Nm()), n("editSpecies", r.selectedIndex);
		}
		return (t, c) => e.activeTab === "settings" ? (z(), B("section", Kh, [U(Qm, {
			"auto-register-species-table": P(r).autoRegisterSpeciesTable,
			"example-species-options": P(Mm),
			"is-disabled": e.isDisabled,
			"selected-example-species-id": i.value,
			"show-generated-config-tab": P(r).showGeneratedConfigTab,
			"species-table": P(r).speciesTable,
			onGenerateAllExampleSpecies: s,
			onGenerateExampleSpecies: o,
			onUpdateAutoRegisterSpeciesTable: P(r).updateAutoRegisterSpeciesTable,
			onUpdateSelectedExampleSpeciesId: c[0] ||= (e) => i.value = e,
			onUpdateShowGeneratedConfigTab: P(r).updateShowGeneratedConfigTab
		}, null, 8, [
			"auto-register-species-table",
			"example-species-options",
			"is-disabled",
			"selected-example-species-id",
			"show-generated-config-tab",
			"species-table",
			"onUpdateAutoRegisterSpeciesTable",
			"onUpdateShowGeneratedConfigTab"
		])])) : e.activeTab === "species-table" ? (z(), B("section", qh, [U(Th, {
			draft: P(r).preparedSpeciesTable,
			"is-disabled": e.isDisabled,
			"is-validation-blocking": P(r).blockingSpeciesTableValidationMessages.length > 0,
			options: P(r).speciesTableOptions,
			summaries: P(r).speciesTableSummaries,
			"validation-messages": P(r).speciesTableValidationMessages,
			onAddRow: P(r).addSpeciesTableRow,
			onRemoveRow: P(r).removeSpeciesTableRow,
			onUpdateRowKey: P(r).updateSpeciesTableRowKey,
			onUpdateRowWeight: P(r).updateSpeciesTableRowWeight
		}, null, 8, [
			"draft",
			"is-disabled",
			"is-validation-blocking",
			"options",
			"summaries",
			"validation-messages",
			"onAddRow",
			"onRemoveRow",
			"onUpdateRowKey",
			"onUpdateRowWeight"
		])])) : e.activeTab === "wfrp-config" ? (z(), B("section", Jh, [U(Gh, { "generated-config-text": P(r).generatedConfigText }, null, 8, ["generated-config-text"])])) : (z(), B("section", Yh, [U(Bh, {
			definitions: P(r).definitions,
			"is-disabled": e.isDisabled,
			"selected-index": P(r).selectedIndex,
			onAddSpecies: a,
			onEditSpecies: c[1] ||= (e) => n("editSpecies", e)
		}, null, 8, [
			"definitions",
			"is-disabled",
			"selected-index"
		])]));
	}
});
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/editor-page-events.ts
function Zh(e, t) {
	return {
		addSubspecies: e.addSubspecies,
		careerReplacementChoiceDrop: e.setCareerReplacementChoiceDrop,
		careerReplacementRolledDrop: e.setCareerReplacementRolledDrop,
		careerTableCareerDrop: e.setCareerTableCareerDrop,
		careerTableJournalDrop: e.setCareerTableJournalDrop,
		deleteSubspecies: t.requestDeleteSubspecies,
		openItem: e.openItemSheet,
		save: e.saveChanges,
		subspeciesTalentDrop: e.appendSubspeciesTalentDrop,
		subspeciesCareerTableCareerDrop: e.setSubspeciesCareerTableCareerDrop,
		subspeciesCareerTableJournalDrop: e.setSubspeciesCareerTableJournalDrop,
		subspeciesTalentReplacementReplacementDrop: (t, n, r) => e.setSubspeciesTalentReplacementDrop(t, n, "replacement", r),
		subspeciesTalentReplacementRolledDrop: (t, n, r) => e.setSubspeciesTalentReplacementDrop(t, n, "rolled", r),
		talentReplacementReplacementDrop: (t, n) => e.setTalentReplacementDrop(t, "replacement", n),
		talentReplacementRolledDrop: (t, n) => e.setTalentReplacementDrop(t, "rolled", n),
		updateBooleanField: e.updateBooleanField,
		updateCareerReplacementRows: e.updateCareerReplacementRows,
		updateCareerTableRows: e.updateCareerTableRows,
		updateCharacteristic: e.updateCharacteristic,
		updateHeightField: e.updateHeightField,
		updateNumberField: e.updateNumberField,
		updateStringField: e.updateStringField,
		updateWoundFormula: e.updateWoundFormula,
		updateSubspeciesArrayField: e.updateSubspeciesArrayField,
		updateSubspeciesCharacteristic: e.updateSubspeciesCharacteristic,
		updateSubspeciesNumberField: e.updateSubspeciesNumberField,
		updateSubspeciesStringField: e.updateSubspeciesStringField,
		updateSubspeciesWoundFormula: e.updateSubspeciesWoundFormula,
		updateSubspeciesCareerTableRows: e.updateSubspeciesCareerTableRows,
		updateSubspeciesTalentReplacementRows: e.updateSubspeciesTalentReplacementRows,
		updateSubspeciesTextMapField: e.updateSubspeciesTextMapField,
		updateTalentReplacementRows: e.updateTalentReplacementRows,
		updateTextMapField: e.updateTextMapField
	};
}
//#endregion
//#region src/types/foundry/document-drop.ts
var Qh = "wfrp4e-customizer-apps.document-drop", $h = { class: "dui-list" }, eg = [
	"aria-label",
	"disabled",
	"title",
	"onClick"
], tg = ["src"], ng = {
	key: 1,
	"aria-hidden": "true",
	class: "fa-solid fa-scroll"
}, rg = {
	key: 1,
	class: "dui-list-row"
}, ig = /* @__PURE__ */ I({
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
		return (t, n) => (z(), B("ul", $h, [e.documents.length > 0 ? (z(!0), B(R, { key: 0 }, L(e.documents, (t) => (z(), B("li", {
			key: t.uuid,
			class: "dui-list-row"
		}, [H("button", {
			"aria-label": e.isClickable ? `Use ${t.name}` : void 0,
			class: "dui-btn dui-btn-ghost",
			disabled: !e.isClickable,
			title: e.isClickable ? t.name : void 0,
			type: "button",
			onClick: qo((e) => r(t), ["stop"])
		}, [t.img ? (z(), B("img", {
			key: 0,
			alt: "",
			"aria-hidden": "true",
			src: t.img
		}, null, 8, tg)) : (z(), B("i", ng)), H("span", null, k(t.name), 1)], 8, eg)]))), 128)) : (z(), B("li", rg, [n[0] ||= H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-arrow-down"
		}, null, -1), H("span", null, k(e.emptyLabel), 1)]))]));
	}
}), ag = { class: "dui-card-body dui-fieldset" }, og = ["for"], sg = ["id", "value"], cg = ["for"], lg = ["id", "value"], ug = { class: "dui-card-actions" }, dg = /* @__PURE__ */ I({
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
		let n = t, r = fr(), i = fr();
		function a(e) {
			let t = e.target instanceof HTMLSelectElement ? e.target.value : "auto";
			(t === "Actor" || t === "auto" || t === "Item" || t === "JournalEntry" || t === "JournalEntryPage") && n("updateDocumentType", t);
		}
		function o(e) {
			n("updateDocumentValue", e.target instanceof HTMLInputElement ? e.target.value : "");
		}
		return (t, s) => (z(), B("form", {
			class: "dui-card dui-card-border dui-card-sm",
			onClick: s[2] ||= qo(() => {}, ["stop"]),
			onSubmit: s[3] ||= qo((e) => n("submit"), ["prevent"])
		}, [H("fieldset", ag, [
			s[6] ||= H("legend", { class: "dui-fieldset-legend" }, "Manual document entry", -1),
			H("label", {
				class: "dui-label",
				for: P(r)
			}, "Document type", 8, og),
			H("select", {
				id: P(r),
				class: "dui-select",
				value: e.documentType,
				onChange: a
			}, [...s[4] ||= [Sa("<option value=\"auto\">Auto</option><option value=\"Item\">Item</option><option value=\"Actor\">Actor</option><option value=\"JournalEntry\">Journal Entry</option><option value=\"JournalEntryPage\">Journal Page</option>", 5)]], 40, sg),
			H("label", {
				class: "dui-label",
				for: P(i)
			}, "UUID or drop JSON", 8, cg),
			H("input", {
				id: P(i),
				class: "dui-input",
				value: e.documentValue,
				placeholder: "Compendium.package.pack.id",
				type: "text",
				onInput: o
			}, null, 40, lg),
			H("div", ug, [
				s[5] ||= H("button", {
					class: "dui-btn dui-btn-primary",
					type: "submit"
				}, "Use", -1),
				H("button", {
					class: "dui-btn",
					type: "button",
					onClick: s[0] ||= (e) => n("startPick")
				}, k(e.isPickingDocument ? "Waiting..." : "Pick Next Click"), 1),
				H("button", {
					class: "dui-btn dui-btn-ghost",
					type: "button",
					onClick: s[1] ||= (e) => n("close")
				}, "Cancel")
			])
		])], 32));
	}
}), fg = ["aria-label", "aria-disabled"], pg = { key: 0 }, mg = {
	key: 1,
	class: "dui-alert dui-alert-info",
	role: "status"
}, hg = { key: 2 }, gg = {
	key: 4,
	class: "dui-card-actions"
}, _g = ["disabled"], vg = /* @__PURE__ */ I({
	inheritAttrs: !1,
	__name: "DocumentDrop",
	props: {
		description: { default: "" },
		disabled: {
			type: Boolean,
			default: !1
		},
		documents: { default: () => [] },
		documentsClickable: {
			type: Boolean,
			default: !1
		},
		emptyDocumentLabel: { default: "No document selected." },
		manualEntryTrigger: { default: "button" },
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
		let n = e, r = Hn(Qh);
		if (!r) throw Error("DocumentDrop requires a document drop bridge from its application host.");
		let i = Jr(), a = t, o = /* @__PURE__ */ N(!1), s = /* @__PURE__ */ N(!1), c = /* @__PURE__ */ N(!1), l = /* @__PURE__ */ N("auto"), u = /* @__PURE__ */ N(""), d, f = K(() => !!i.prompt), p = K(() => !!i.default), m = K(() => n.showPrompt && (f.value || n.title.length > 0)), h = K(() => n.showDocuments ? n.documents : []), g = K(() => n.manualEntryTrigger === "button"), _ = K(() => n.variant === "bare" ? [] : [
			"dui-card",
			"dui-card-border",
			n.variant === "compact" ? "dui-card-xs" : "dui-card-sm"
		]);
		function v(e) {
			let t = e.currentTarget, n = e.relatedTarget;
			t instanceof Node && n instanceof Node && t.contains(n) || (o.value = !1);
		}
		function y() {
			n.disabled || (o.value = !0);
		}
		function b(e) {
			e.preventDefault(), o.value = !1, !n.disabled && a("dropData", e.dataTransfer?.getData("text/plain") ?? "");
		}
		function x() {
			n.manualEntryTrigger !== "none" && (s.value = !0);
		}
		function S() {
			s.value = !1, T();
		}
		function C() {
			if (!n.disabled) {
				if (s.value) {
					S();
					return;
				}
				x();
			}
		}
		function w() {
			if (n.disabled) return;
			let e = r.createDropData({
				documentType: l.value,
				value: u.value
			});
			e && (a("dropData", e), u.value = "", S());
		}
		function ee() {
			n.disabled || d || (c.value = !0, d = r.startDocumentPick(te));
		}
		function T() {
			let e = d;
			d = void 0, c.value = !1, e?.();
		}
		function te(e) {
			a("dropData", e), S();
		}
		return Ar(() => {
			T();
		}), Kn(() => n.disabled, (e) => {
			e && (o.value = !1, S());
		}), (t, n) => (z(), B("div", Ea(t.$attrs, {
			class: _.value,
			"aria-label": e.title,
			"aria-disabled": e.disabled,
			role: "group",
			onDragenter: qo(y, ["prevent"]),
			onDragover: qo(y, ["prevent"]),
			onDragleave: v,
			onDrop: b
		}), [H("div", { class: O(e.variant === "bare" ? void 0 : "dui-card-body") }, [
			m.value ? (z(), B("div", {
				key: 0,
				class: O(["dui-alert dui-alert-info", { "dui-alert-outline": !o.value }])
			}, [
				n[3] ||= H("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-arrow-down"
				}, null, -1),
				H("div", null, [Vr(t.$slots, "prompt", {}, () => [H("strong", null, k(e.title), 1), e.description ? (z(), B("p", pg, k(e.description), 1)) : G("", !0)])]),
				H("span", { class: O(["dui-badge", { "dui-badge-info": o.value }]) }, k(o.value ? "Release to add" : "Drop zone"), 3)
			], 2)) : o.value ? (z(), B("div", mg, [n[4] ||= H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-arrow-down"
			}, null, -1), H("span", null, "Release to add " + k(e.title.toLowerCase()) + ".", 1)])) : G("", !0),
			p.value ? (z(), B("div", hg, [Vr(t.$slots, "default")])) : G("", !0),
			e.showDocuments ? (z(), V(ig, {
				key: 3,
				documents: h.value,
				"empty-label": e.emptyDocumentLabel,
				"is-clickable": e.documentsClickable,
				onDocumentClicked: n[0] ||= (e) => a("documentClicked", e)
			}, null, 8, [
				"documents",
				"empty-label",
				"is-clickable"
			])) : G("", !0),
			g.value ? (z(), B("div", gg, [H("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.disabled,
				type: "button",
				onClick: qo(C, ["stop"])
			}, k(s.value ? "Close Manual Entry" : "Manual Entry"), 9, _g)])) : G("", !0),
			s.value && !e.disabled ? (z(), V(dg, {
				key: 5,
				"document-type": l.value,
				"document-value": u.value,
				"is-picking-document": c.value,
				onClose: S,
				onStartPick: ee,
				onSubmit: w,
				onUpdateDocumentType: n[1] ||= (e) => l.value = e,
				onUpdateDocumentValue: n[2] ||= (e) => u.value = e
			}, null, 8, [
				"document-type",
				"document-value",
				"is-picking-document"
			])) : G("", !0)
		], 2)], 16, fg));
	}
}), yg = [
	Y.WeaponSkill,
	Y.BallisticSkill,
	Y.Strength,
	Y.Toughness,
	Y.Initiative,
	Y.Agility,
	Y.Dexterity,
	Y.Intelligence,
	Y.Willpower,
	Y.Fellowship
], bg = [
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
], xg = [
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
], Sg = {
	skills: "Skills granted during character creation. Drop Skill items to link their sheets, or add names manually.",
	talents: "Talents granted during character creation. Multiple choices in one grant become WFRP's comma-separated either/or entry.",
	traits: "Traits granted by this species or subspecies. Drop Trait items to link their sheets, or add names manually."
}, Cg = [
	"disabled",
	"title",
	"value"
], wg = {
	key: 1,
	class: "dui-alert dui-alert-info"
}, Tg = {
	key: 2,
	class: "dui-alert"
}, Eg = /* @__PURE__ */ I({
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
		return (t, i) => (z(), V(vg, {
			description: e.description,
			disabled: e.isDisabled,
			documents: e.value.item ? [e.value.item] : [],
			"documents-clickable": !e.isDisabled,
			"empty-document-label": "No item selected.",
			"manual-entry-trigger": "button",
			"show-documents": !!e.value.item?.uuid,
			title: e.title,
			variant: "bare",
			onDocumentClicked: i[1] ||= (e) => n("openItem", e.uuid),
			onDropData: i[2] ||= (e) => n("dropData", e)
		}, {
			default: F(() => [!e.value.item?.uuid && e.isEditable ? (z(), B("input", {
				key: 0,
				class: "dui-input",
				disabled: e.isDisabled,
				title: e.inputTitle,
				value: e.value.name,
				type: "text",
				onInput: i[0] ||= (e) => n("updateName", r(e))
			}, null, 40, Cg)) : e.value.name ? (z(), B("div", wg, [H("strong", null, k(e.value.name), 1), i[3] ||= H("span", null, "Stored by name. Drop the matching Item to link its sheet.", -1)])) : (z(), B("div", Tg, [...i[4] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-arrow-down"
			}, null, -1), H("span", null, "No item selected.", -1)]]))]),
			_: 1
		}, 8, [
			"description",
			"disabled",
			"documents",
			"documents-clickable",
			"show-documents",
			"title"
		]));
	}
}), Dg = { class: "dui-list-row" }, Og = ["disabled", "title"], kg = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B("li", Dg, [U(Eg, {
			class: "dui-list-col-grow",
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
		]), H("button", {
			disabled: e.isDisabled,
			title: e.removeTitle,
			class: "dui-btn dui-btn-error dui-btn-sm",
			type: "button",
			onClick: r[3] ||= (e) => n("remove")
		}, [...r[4] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-trash"
		}, null, -1), W(" Remove ", -1)]], 8, Og)]));
	}
}), Ag = { class: "app:grid app:gap-3" }, jg = { class: "dui-card-body" }, Mg = { class: "app:flex app:items-start app:justify-between app:gap-4" }, Ng = { class: "dui-card-title" }, Pg = { class: "app:m-0" }, Fg = { class: "dui-card-actions app:items-center" }, Ig = { class: "dui-badge" }, Lg = [
	"disabled",
	"title",
	"onClick"
], Rg = {
	key: 1,
	class: "dui-join"
}, zg = ["disabled"], Bg = ["disabled"], Vg = {
	key: 0,
	class: "dui-list"
}, Hg = {
	key: 1,
	class: "dui-list"
}, Ug = { class: "dui-badge dui-badge-ghost" }, Wg = { class: "dui-list-col-grow" }, Gg = { key: 0 }, Kg = { class: "dui-list" }, qg = { class: "dui-join" }, Jg = ["disabled", "onClick"], Yg = ["disabled", "onClick"], Xg = {
	key: 2,
	class: "dui-alert",
	role: "status"
}, Zg = /* @__PURE__ */ I({
	__name: "ArrayFields",
	props: {
		fields: {},
		isDisabled: { type: Boolean },
		values: {}
	},
	setup(e) {
		let t = e, n = ff(), r = K(() => xg.filter((e) => !t.fields || t.fields.includes(e.field)));
		function i(e) {
			return qu(t.values[e], a(e));
		}
		function a(e) {
			return e === "skills" ? t.values.linkedSkills : t.values.linkedTraits;
		}
		function o() {
			return Ju(t.values.talents, t.values.linkedTalents);
		}
		function s(e) {
			return e === "talents" ? o().length : i(e).length;
		}
		return (t, a) => (z(), B("div", Ag, [(z(!0), B(R, null, L(r.value, (t) => (z(), B("section", {
			key: t.field,
			class: "dui-card dui-card-border dui-card-sm"
		}, [H("div", jg, [
			H("header", Mg, [H("div", null, [H("h3", Ng, k(t.label), 1), H("p", Pg, k(P(Sg)[t.field]), 1)]), H("div", Fg, [H("span", Ig, k(s(t.field)), 1), t.field === "talents" ? (z(), B("div", Rg, [H("button", {
				class: "dui-btn dui-btn-sm dui-join-item",
				disabled: e.isDisabled,
				title: "Add one guaranteed Talent",
				type: "button",
				onClick: a[0] ||= (e) => P(n).addTalentGrant("single")
			}, [...a[5] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), W(" Talent ", -1)]], 8, zg), H("button", {
				class: "dui-btn dui-btn-sm dui-join-item",
				disabled: e.isDisabled,
				title: "Add a Talent choice set. WFRP stores this as one comma-separated Talent entry.",
				type: "button",
				onClick: a[1] ||= (e) => P(n).addTalentGrant("choice")
			}, [...a[6] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-list-check"
			}, null, -1), W(" Choice Set ", -1)]], 8, Bg)])) : (z(), B("button", {
				key: 0,
				class: "dui-btn dui-btn-sm",
				disabled: e.isDisabled,
				title: `Add a ${t.label.slice(0, -1)} row`,
				type: "button",
				onClick: (e) => P(n).addLinkedItem(P(Ku)(t.field))
			}, [...a[4] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), W(" Add ", -1)]], 8, Lg))])]),
			U(vg, {
				description: `Drop a WFRP ${t.label.slice(0, -1)} item to add it to this list.`,
				disabled: e.isDisabled,
				title: `Drop ${t.label}`,
				variant: "compact",
				onDropData: (e) => P(n).appendArrayFieldDrop(t.field, e)
			}, null, 8, [
				"description",
				"disabled",
				"title",
				"onDropData"
			]),
			t.field !== "talents" && i(t.field).length > 0 ? (z(), B("ul", Vg, [(z(!0), B(R, null, L(i(t.field), (r, i) => (z(), V(kg, {
				key: `${t.field}-${i}`,
				"drop-description": `Drop a WFRP ${t.label.slice(0, -1)} item to link or replace this row.`,
				"drop-title": `Link ${t.label.slice(0, -1)}`,
				"input-title": `${t.label.slice(0, -1)} name used by WFRP item lookup`,
				"is-disabled": e.isDisabled,
				"remove-title": `Remove ${r.name}`,
				value: r,
				onDropData: (e) => P(n).setLinkedItemDrop(P(Ku)(t.field), i, e),
				onOpenItem: a[2] ||= (e) => P(n).openItemSheet(e),
				onRemove: (e) => P(n).removeLinkedItem(P(Ku)(t.field), i),
				onUpdateName: (e) => P(n).renameLinkedItem(P(Ku)(t.field), i, e)
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
			]))), 128))])) : t.field === "talents" && o().length > 0 ? (z(), B("ul", Hg, [(z(!0), B(R, null, L(o(), (t, r) => (z(), B("li", {
				key: `talent-${r}`,
				class: "dui-list-row"
			}, [
				H("span", Ug, "Grant " + k(r + 1), 1),
				H("div", Wg, [
					H("strong", null, k(t.choices.length > 1 ? "Talent Choice" : "Guaranteed Talent"), 1),
					t.choices.length > 1 ? (z(), B("p", Gg, "Choose one of these alternatives.")) : G("", !0),
					H("ul", Kg, [(z(!0), B(R, null, L(t.choices, (i, o) => (z(), V(kg, {
						key: `${r}-${o}`,
						"drop-description": "Drop a WFRP Talent item to link or replace this option.",
						"drop-title": "Link Talent",
						"input-title": t.choices.length > 1 ? "One Talent option offered for this choice set" : "Guaranteed Talent name",
						"is-disabled": e.isDisabled,
						"remove-title": `Remove ${i.name}`,
						value: i,
						onDropData: (e) => P(n).setTalentChoiceDrop(r, o, e),
						onOpenItem: a[3] ||= (e) => P(n).openItemSheet(e),
						onRemove: (e) => P(n).removeTalentChoice(r, o),
						onUpdateName: (e) => P(n).renameTalentChoice(r, o, e)
					}, null, 8, [
						"input-title",
						"is-disabled",
						"remove-title",
						"value",
						"onDropData",
						"onRemove",
						"onUpdateName"
					]))), 128))])
				]),
				H("div", qg, [H("button", {
					class: "dui-btn dui-btn-sm dui-join-item",
					disabled: e.isDisabled,
					title: "Add another alternative to this Talent choice",
					type: "button",
					onClick: (e) => P(n).addTalentChoice(r)
				}, [...a[7] ||= [H("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-plus"
				}, null, -1), W(" Choice ", -1)]], 8, Jg), H("button", {
					disabled: e.isDisabled,
					title: "Remove this Talent grant",
					class: "dui-btn dui-btn-error dui-btn-sm dui-join-item",
					type: "button",
					onClick: (e) => P(n).removeTalentGrant(r)
				}, [...a[8] ||= [H("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), W(" Remove ", -1)]], 8, Yg)])
			]))), 128))])) : (z(), B("div", Xg, [a[9] ||= H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), H("span", null, "No " + k(t.label.toLowerCase()) + " yet.", 1)]))
		])]))), 128))]));
	}
}), Qg = { class: "dui-table dui-table-sm" }, $g = { scope: "row" }, e_ = ["for"], t_ = [
	"id",
	"disabled",
	"value",
	"onInput"
], n_ = /* @__PURE__ */ I({
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
		return (t, i) => (z(), B("table", Qg, [i[0] ||= H("thead", null, [H("tr", null, [H("th", { scope: "col" }, "Characteristic"), H("th", { scope: "col" }, "Starting formula")])], -1), H("tbody", null, [(z(!0), B(R, null, L(P(yg), (t) => (z(), B("tr", { key: t }, [H("th", $g, [H("label", { for: `species-characteristic-${t}` }, k(P(Ac)[t]), 9, e_)]), H("td", null, [H("input", {
			id: `species-characteristic-${t}`,
			class: "dui-input dui-input-sm",
			disabled: e.isDisabled,
			placeholder: "2d10+20",
			value: e.characteristics?.[t] ?? "",
			type: "text",
			onInput: (e) => n("update", t, r(e))
		}, null, 40, t_)])]))), 128))])]));
	}
}), r_ = { class: "dui-table dui-table-sm" }, i_ = { scope: "row" }, a_ = ["for"], o_ = [
	"id",
	"disabled",
	"value",
	"onInput"
], s_ = /* @__PURE__ */ I({
	__name: "StatFields",
	props: {
		fields: {},
		isDisabled: { type: Boolean },
		values: {}
	},
	emits: ["update"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			return e.target instanceof HTMLInputElement ? e.target.value : "";
		}
		return (t, i) => (z(), B("table", r_, [i[0] ||= H("thead", null, [H("tr", null, [H("th", { scope: "col" }, "Stat"), H("th", { scope: "col" }, "Value")])], -1), H("tbody", null, [(z(!0), B(R, null, L(P(bg).filter(({ field: t }) => e.fields.includes(t)), (t) => (z(), B("tr", { key: t.field }, [H("th", i_, [H("label", { for: `species-stat-${t.field}` }, k(t.label), 9, a_)]), H("td", null, [H("input", {
			id: `species-stat-${t.field}`,
			class: "dui-input dui-input-sm",
			disabled: e.isDisabled,
			value: e.values[t.field] ?? "",
			type: "number",
			onInput: (e) => n("update", t.field, r(e))
		}, null, 40, o_)])]))), 128))])]));
	}
}), c_ = { class: "app:grid app:gap-3" }, l_ = { class: "dui-card dui-card-border dui-card-sm" }, u_ = { class: "dui-card-body" }, d_ = { class: "dui-fieldset" }, f_ = { class: "dui-card dui-card-border dui-card-sm" }, p_ = { class: "dui-card-body" }, m_ = { class: "dui-fieldset" }, h_ = /* @__PURE__ */ I({
	__name: "SpeciesBuilderAttributesTab",
	props: {
		definition: {},
		isDisabled: { type: Boolean }
	},
	emits: ["updateCharacteristic", "updateNumberField"],
	setup(e, { emit: t }) {
		let n = [
			"movement",
			"fate",
			"resilience",
			"extra"
		], r = t;
		return (t, i) => (z(), B("section", c_, [H("section", l_, [H("div", u_, [H("fieldset", d_, [
			i[2] ||= H("legend", { class: "dui-fieldset-legend" }, "Characteristic Roll Formulas", -1),
			i[3] ||= H("p", { class: "dui-fieldset-label" }, " Starting formulas used by WFRP character creation, usually values such as 2d10+20. ", -1),
			U(n_, {
				characteristics: e.definition.characteristics,
				"is-disabled": e.isDisabled,
				onUpdate: i[0] ||= (e, t) => r("updateCharacteristic", e, t)
			}, null, 8, ["characteristics", "is-disabled"])
		])])]), H("section", f_, [H("div", p_, [H("fieldset", m_, [
			i[4] ||= H("legend", { class: "dui-fieldset-legend" }, "Movement, Fate And Resilience", -1),
			i[5] ||= H("p", { class: "dui-fieldset-label" }, " Set base Movement plus starting Fate, Resilience, and extra points distributed between them. ", -1),
			U(s_, {
				fields: n,
				"is-disabled": e.isDisabled,
				values: e.definition,
				onUpdate: i[1] ||= (e, t) => r("updateNumberField", e, t)
			}, null, 8, ["is-disabled", "values"])
		])])])]));
	}
}), g_ = { class: "app:flex app:flex-wrap app:gap-3" }, __ = { class: "dui-fieldset app:min-w-56 app:flex-1" }, v_ = ["disabled", "value"], y_ = { class: "dui-fieldset app:min-w-56 app:flex-1" }, b_ = ["disabled", "value"], x_ = ["disabled", "value"], S_ = ["disabled", "value"], C_ = /* @__PURE__ */ I({
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
		return (t, i) => (z(), B("div", g_, [H("fieldset", __, [
			i[4] ||= H("legend", { class: "dui-fieldset-legend" }, "Age", -1),
			i[5] ||= H("p", { class: "dui-fieldset-label" }, "Formula used by character creation to roll age.", -1),
			i[6] ||= H("label", {
				class: "dui-label",
				for: "species-age"
			}, "Age formula", -1),
			H("input", {
				id: "species-age",
				class: "dui-input dui-input-sm app:w-full",
				disabled: e.isDisabled,
				placeholder: "2d10+15",
				value: e.definition.age ?? "",
				type: "text",
				onInput: i[0] ||= (e) => n("updateStringField", "age", r(e))
			}, null, 40, v_)
		]), H("fieldset", y_, [
			i[7] ||= H("legend", { class: "dui-fieldset-legend" }, "Height", -1),
			i[8] ||= H("p", { class: "dui-fieldset-label" }, "Formula and base measurements used to roll random height.", -1),
			i[9] ||= H("label", {
				class: "dui-label",
				for: "species-height-die"
			}, "Height die", -1),
			H("input", {
				id: "species-height-die",
				class: "dui-input dui-input-sm app:w-full",
				disabled: e.isDisabled,
				placeholder: "1d10",
				value: e.definition.height?.die ?? "",
				type: "text",
				onInput: i[1] ||= (e) => n("updateHeightField", "die", r(e))
			}, null, 40, b_),
			i[10] ||= H("label", {
				class: "dui-label",
				for: "species-height-feet"
			}, "Base feet", -1),
			H("input", {
				id: "species-height-feet",
				class: "dui-input dui-input-sm app:w-full",
				disabled: e.isDisabled,
				value: e.definition.height?.feet ?? "",
				type: "number",
				onInput: i[2] ||= (e) => n("updateHeightField", "feet", r(e))
			}, null, 40, x_),
			i[11] ||= H("label", {
				class: "dui-label",
				for: "species-height-inches"
			}, "Base inches", -1),
			H("input", {
				id: "species-height-inches",
				class: "dui-input dui-input-sm app:w-full",
				disabled: e.isDisabled,
				value: e.definition.height?.inches ?? "",
				type: "number",
				onInput: i[3] ||= (e) => n("updateHeightField", "inches", r(e))
			}, null, 40, S_)
		])]));
	}
}), w_ = { class: "app:grid app:gap-3" }, T_ = { class: "app:flex app:flex-wrap app:gap-3" }, E_ = { class: "dui-card dui-card-border dui-card-sm app:min-w-64 app:flex-1" }, D_ = { class: "dui-card-body" }, O_ = { class: "dui-fieldset" }, k_ = ["disabled", "value"], A_ = [
	"disabled",
	"placeholder",
	"value"
], j_ = { class: "dui-card dui-card-border dui-card-sm app:min-w-64 app:flex-1" }, M_ = { class: "dui-card-body" }, N_ = { class: "dui-fieldset" }, P_ = { class: "dui-label" }, F_ = ["checked", "disabled"], I_ = { class: "dui-card dui-card-border dui-card-sm" }, L_ = { class: "dui-card-body" }, R_ = /* @__PURE__ */ I({
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
		return (t, a) => (z(), B("section", w_, [H("div", T_, [H("section", E_, [H("div", D_, [H("fieldset", O_, [
			a[5] ||= H("legend", { class: "dui-fieldset-legend" }, "Identity", -1),
			a[6] ||= H("p", { class: "dui-fieldset-label" }, " The name is shown to users. The key identifies this species in generated WFRP config. ", -1),
			a[7] ||= H("label", {
				class: "dui-label",
				for: "species-name"
			}, "Name", -1),
			H("input", {
				id: "species-name",
				class: "dui-input dui-input-sm app:w-full",
				disabled: e.isDisabled,
				value: e.definition.name,
				type: "text",
				onInput: a[0] ||= (e) => n("updateStringField", "name", r(e))
			}, null, 40, k_),
			a[8] ||= H("label", {
				class: "dui-label",
				for: "species-key"
			}, "Key", -1),
			H("input", {
				id: "species-key",
				class: "dui-input dui-input-sm app:w-full",
				disabled: e.isDisabled,
				placeholder: P(bf)(e.definition),
				value: e.definition.key,
				type: "text",
				onInput: a[1] ||= (e) => n("updateStringField", "key", r(e))
			}, null, 40, A_)
		])])]), H("section", j_, [H("div", M_, [H("fieldset", N_, [
			a[10] ||= H("legend", { class: "dui-fieldset-legend" }, "WFRP Availability", -1),
			a[11] ||= H("p", { class: "dui-fieldset-label" }, " Choose whether character creation lists this custom species. ", -1),
			H("label", P_, [H("input", {
				class: "dui-checkbox",
				checked: e.definition.includeInExtraSpecies,
				disabled: e.isDisabled,
				type: "checkbox",
				onChange: a[2] ||= (e) => n("updateBooleanField", "includeInExtraSpecies", i(e))
			}, null, 40, F_), a[9] ||= H("span", null, "Show in WFRP extra species options", -1)])
		])])])]), H("section", I_, [H("div", L_, [a[12] ||= H("h3", { class: "dui-card-title" }, "Character Creation", -1), U(C_, {
			definition: e.definition,
			"is-disabled": e.isDisabled,
			onUpdateHeightField: a[3] ||= (e, t) => n("updateHeightField", e, t),
			onUpdateStringField: a[4] ||= (e, t) => n("updateStringField", e, t)
		}, null, 8, ["definition", "is-disabled"])])])]));
	}
}), z_ = { class: "dui-fieldset" }, B_ = { class: "dui-fieldset-legend" }, V_ = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B("fieldset", z_, [H("legend", B_, k(e.label), 1), U(Eg, {
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
}), H_ = { class: "dui-card dui-card-border dui-card-sm" }, U_ = { class: "dui-card-body" }, W_ = {
	key: 0,
	class: "dui-list"
}, G_ = { class: "dui-badge dui-badge-ghost" }, K_ = { class: "dui-list-col-grow" }, q_ = { class: "dui-list" }, J_ = { class: "dui-badge dui-badge-ghost" }, Y_ = ["disabled", "onClick"], X_ = { class: "dui-join" }, Z_ = ["disabled", "onClick"], Q_ = ["disabled", "onClick"], $_ = {
	key: 1,
	class: "dui-alert",
	role: "status"
}, ev = /* @__PURE__ */ I({
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
			return n.rows?.length ? n.rows : Qd(n.values);
		}
		function a() {
			r("updateRows", Gd(i()));
		}
		function o(e) {
			r("updateRows", Kd(i(), e));
		}
		function s(e, t) {
			r("updateRows", qd(i(), e, t));
		}
		function c(e) {
			r("updateRows", Jd(i(), e));
		}
		return (t, n) => (z(), B("section", H_, [H("div", U_, [U(nh, {
			"action-label": "Add Rule",
			"action-title": "Add a rolled Career and replacement choices",
			count: i().length,
			description: "Offer one or more replacement Careers for a rolled Career group.",
			"is-disabled": e.isDisabled,
			title: "Career Replacements",
			onAdd: a
		}, null, 8, ["count", "is-disabled"]), i().length > 0 ? (z(), B("ul", W_, [(z(!0), B(R, null, L(i(), (t, i) => (z(), B("li", {
			key: `career-replacement-${i}`,
			class: "dui-list-row"
		}, [
			H("span", G_, "Rule " + k(i + 1), 1),
			H("div", K_, [
				U(V_, {
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
				]),
				n[3] ||= H("strong", null, "Replacement choices", -1),
				H("ul", q_, [(z(!0), B(R, null, L(t.replacements, (t, a) => (z(), B("li", {
					key: `${i}-${a}`,
					class: "dui-list-row"
				}, [
					H("span", J_, k(a + 1), 1),
					U(V_, {
						class: "dui-list-col-grow",
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
					]),
					H("button", {
						disabled: e.isDisabled,
						title: "Remove this replacement Career choice",
						class: "dui-btn dui-btn-error dui-btn-sm",
						type: "button",
						onClick: (e) => s(i, a)
					}, [...n[2] ||= [H("i", {
						"aria-hidden": "true",
						class: "fa-solid fa-xmark"
					}, null, -1), W(" Remove ", -1)]], 8, Y_)
				]))), 128))])
			]),
			H("div", X_, [H("button", {
				class: "dui-btn dui-btn-sm dui-join-item",
				disabled: e.isDisabled,
				title: "Add another replacement Career choice",
				type: "button",
				onClick: (e) => o(i)
			}, [...n[4] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), W(" Choice ", -1)]], 8, Z_), H("button", {
				disabled: e.isDisabled,
				title: "Remove this Career replacement rule",
				class: "dui-btn dui-btn-error dui-btn-sm dui-join-item",
				type: "button",
				onClick: (e) => c(i)
			}, [...n[5] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), W(" Remove Rule ", -1)]], 8, Q_)])
		]))), 128))])) : (z(), B("div", $_, [...n[6] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-circle-info"
		}, null, -1), H("span", null, "No Career replacements.", -1)]]))])]));
	}
}), tv = { class: "dui-card dui-card-border dui-card-sm" }, nv = { class: "dui-card-body" }, rv = {
	key: 0,
	class: "dui-list"
}, iv = { class: "dui-badge dui-badge-ghost" }, av = { class: "dui-list-col-grow" }, ov = { class: "dui-fieldset" }, sv = [
	"disabled",
	"value",
	"onInput"
], cv = { class: "dui-fieldset" }, lv = [
	"disabled",
	"value",
	"onInput"
], uv = ["disabled", "onClick"], dv = {
	key: 1,
	class: "dui-alert",
	role: "status"
}, fv = /* @__PURE__ */ I({
	__name: "CareerTableRows",
	props: {
		isDisabled: { type: Boolean },
		rows: {}
	},
	emits: [
		"dropCareer",
		"dropJournal",
		"updateRows"
	],
	setup(e, { emit: t }) {
		let n = e, r = t;
		function i() {
			return n.rows ?? [];
		}
		function a() {
			r("updateRows", Cu(n.rows));
		}
		function o(e) {
			r("updateRows", wu(n.rows, e));
		}
		function s(e, t) {
			r("updateRows", Tu(n.rows, e, t));
		}
		function c(e) {
			return e.target instanceof HTMLInputElement ? e.target.value : "";
		}
		return (t, n) => (z(), B("section", tv, [H("div", nv, [U(nh, {
			"action-label": "Add Career",
			"action-title": "Add a Career table row",
			count: i().length,
			description: "Career group names drive character generation. Journal links provide the result link; blank links use the generated fallback journal.",
			"is-disabled": e.isDisabled,
			title: "Career Table",
			onAdd: a
		}, null, 8, ["count", "is-disabled"]), i().length > 0 ? (z(), B("ul", rv, [(z(!0), B(R, null, L(i(), (t, i) => (z(), B("li", {
			key: i,
			class: "dui-list-row"
		}, [
			H("span", iv, k(i + 1), 1),
			H("div", av, [U(vg, {
				description: "Drop a WFRP Career item.",
				disabled: e.isDisabled,
				"manual-entry-trigger": "none",
				title: "Career",
				variant: "bare",
				onDropData: (e) => r("dropCareer", i, e)
			}, {
				default: F(() => [H("fieldset", ov, [n[0] ||= H("legend", { class: "dui-fieldset-legend" }, "Career Group", -1), H("input", {
					class: "dui-input",
					disabled: e.isDisabled,
					value: t.name,
					placeholder: "Pit Fighter",
					type: "text",
					onInput: (e) => s(i, { name: c(e) })
				}, null, 40, sv)])]),
				_: 2
			}, 1032, ["disabled", "onDropData"]), U(vg, {
				description: "Drop a Journal Entry or Journal Page.",
				disabled: e.isDisabled,
				"manual-entry-trigger": "button",
				title: "Journal Link",
				variant: "bare",
				onDropData: (e) => r("dropJournal", i, e)
			}, {
				default: F(() => [H("fieldset", cv, [n[1] ||= H("legend", { class: "dui-fieldset-legend" }, "Journal Entry/Page UUID", -1), H("input", {
					class: "dui-input",
					disabled: e.isDisabled,
					value: t.journalUuid ?? "",
					placeholder: "Compendium.package.journals.entry.JournalEntryPage.page",
					type: "text",
					onInput: (e) => s(i, { journalUuid: c(e) })
				}, null, 40, lv)])]),
				_: 2
			}, 1032, ["disabled", "onDropData"])]),
			H("button", {
				class: "dui-btn dui-btn-error dui-btn-sm",
				disabled: e.isDisabled,
				type: "button",
				onClick: (e) => o(i)
			}, [...n[2] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), W(" Remove ", -1)]], 8, uv)
		]))), 128))])) : (z(), B("div", dv, [...n[3] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-circle-info"
		}, null, -1), H("span", null, "No Career rows yet.", -1)]]))])]));
	}
});
//#endregion
//#region src/functions/species-builder/editor/random-talents.ts
function pv(e) {
	return Object.entries(e ?? {});
}
function mv(e, t) {
	let n = t[0]?.key ?? "talents";
	return yv([...e, [n, 1]]);
}
function hv(e, t, n) {
	return yv(e.map(([e, r], i) => i === t ? [n, r] : [e, r]));
}
function gv(e, t, n) {
	let r = Number(n);
	return yv(e.map(([e, n], i) => i === t && Number.isFinite(r) ? [e, r] : [e, n]));
}
function _v(e, t) {
	return yv(e.filter((e, n) => n !== t));
}
function vv(e, t) {
	return e.some((e) => e.key === t) ? e : [...e, {
		key: t,
		label: `Saved source missing from this world (${t})`
	}];
}
function yv(e) {
	return e.flatMap(([e, t]) => e.trim() ? [`${e.trim()}: ${t}`] : []).join("\n");
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/tabs/tables/tabs/random-talents/RandomTalentRows.vue?vue&type=script&setup=true&lang.ts
var bv = { class: "dui-card dui-card-border dui-card-sm" }, xv = { class: "dui-card-body" }, Sv = {
	key: 0,
	class: "dui-list"
}, Cv = { class: "dui-badge dui-badge-ghost" }, wv = { class: "dui-list-col-grow" }, Tv = { class: "dui-fieldset" }, Ev = [
	"disabled",
	"value",
	"onInput"
], Dv = ["value"], Ov = { class: "dui-fieldset" }, kv = [
	"disabled",
	"value",
	"onInput"
], Av = ["disabled", "onClick"], jv = {
	key: 1,
	class: "dui-alert",
	role: "status"
}, Mv = /* @__PURE__ */ I({
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
			return pv(n.values);
		}
		function a() {
			r("update", mv(i(), n.sources));
		}
		function o(e, t) {
			r("update", hv(i(), e, t));
		}
		function s(e, t) {
			r("update", gv(i(), e, t));
		}
		function c(e) {
			return vv(n.sources, e);
		}
		function l(e) {
			r("update", _v(i(), e));
		}
		function u(e) {
			return e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement ? e.target.value : "";
		}
		return (t, n) => (z(), B("section", bv, [H("div", xv, [U(nh, {
			"action-label": "Add Source",
			"action-title": "Add a random Talent source and draw count",
			count: i().length,
			description: "Choose an available Talent table and the number of draws from that source.",
			"is-disabled": e.isDisabled,
			title: "Random Talents",
			onAdd: a
		}, null, 8, ["count", "is-disabled"]), i().length > 0 ? (z(), B("ul", Sv, [(z(!0), B(R, null, L(i(), ([t, r], i) => (z(), B("li", {
			key: `random-${i}`,
			class: "dui-list-row"
		}, [
			H("span", Cv, k(i + 1), 1),
			H("div", wv, [H("fieldset", Tv, [n[0] ||= H("legend", { class: "dui-fieldset-legend" }, "Talent source", -1), H("select", {
				class: "dui-select",
				disabled: e.isDisabled,
				title: "Random Talent table source available in this world.",
				value: t,
				onInput: (e) => o(i, u(e))
			}, [(z(!0), B(R, null, L(c(t), (e) => (z(), B("option", {
				key: e.key,
				value: e.key
			}, k(e.label), 9, Dv))), 128))], 40, Ev)]), H("fieldset", Ov, [n[1] ||= H("legend", { class: "dui-fieldset-legend" }, "Draws", -1), H("input", {
				class: "dui-input",
				disabled: e.isDisabled,
				min: "0",
				title: "How many random Talents this species draws from that table.",
				value: r,
				type: "number",
				onInput: (e) => s(i, u(e))
			}, null, 40, kv)])]),
			H("button", {
				disabled: e.isDisabled,
				title: "Remove this random Talent source",
				class: "dui-btn dui-btn-error dui-btn-sm",
				type: "button",
				onClick: (e) => l(i)
			}, [...n[2] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), W(" Remove ", -1)]], 8, Av)
		]))), 128))])) : (z(), B("div", jv, [...n[3] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-circle-info"
		}, null, -1), H("span", null, "No random Talent draws.", -1)]]))])]));
	}
}), Nv = { class: "dui-card dui-card-border dui-card-sm" }, Pv = { class: "dui-card-body" }, Fv = {
	key: 0,
	class: "dui-list"
}, Iv = { class: "dui-badge dui-badge-ghost" }, Lv = { class: "dui-list-col-grow" }, Rv = ["disabled", "onClick"], zv = {
	key: 1,
	class: "dui-alert",
	role: "status"
}, Bv = /* @__PURE__ */ I({
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
			return n.rows?.length ? n.rows : Zd(n.values);
		}
		function a() {
			r("updateRows", Ud(i()));
		}
		function o(e) {
			r("updateRows", Wd(i(), e));
		}
		return (t, n) => (z(), B("section", Nv, [H("div", Pv, [U(nh, {
			"action-label": "Add Rule",
			"action-title": "Add a rolled Talent and replacement Talent",
			count: i().length,
			description: "Offer a specific alternative when character creation rolls a Talent.",
			"is-disabled": e.isDisabled,
			title: "Talent Replacements",
			onAdd: a
		}, null, 8, ["count", "is-disabled"]), i().length > 0 ? (z(), B("ul", Fv, [(z(!0), B(R, null, L(i(), (t, i) => (z(), B("li", {
			key: `talent-replacement-${i}`,
			class: "dui-list-row"
		}, [
			H("span", Iv, k(i + 1), 1),
			H("div", Lv, [U(V_, {
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
			]), U(V_, {
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
			])]),
			H("button", {
				disabled: e.isDisabled,
				title: "Remove this Talent replacement",
				class: "dui-btn dui-btn-error dui-btn-sm",
				type: "button",
				onClick: (e) => o(i)
			}, [...n[2] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), W(" Remove ", -1)]], 8, Rv)
		]))), 128))])) : (z(), B("div", zv, [...n[3] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-circle-info"
		}, null, -1), H("span", null, "No Talent replacements.", -1)]]))])]));
	}
}), Vv = { class: "dui-card dui-card-border dui-card-sm" }, Hv = { class: "dui-card-body" }, Uv = { key: 0 }, Wv = { class: "app:m-0" }, Gv = {
	key: 1,
	class: "app:m-0"
}, Kv = {
	key: 2,
	"aria-label": "Table editor",
	class: "dui-tabs dui-tabs-border",
	role: "tablist"
}, qv = [
	"id",
	"aria-controls",
	"aria-selected",
	"disabled",
	"onClick"
], Jv = /* @__PURE__ */ I({
	__name: "RandomTablesSection",
	props: {
		activeTab: {},
		help: {},
		includeCareerReplacements: { type: Boolean },
		isDisabled: { type: Boolean },
		randomTalentSources: {},
		showNavigation: { type: Boolean },
		values: {}
	},
	emits: [
		"careerTableCareerDrop",
		"careerTableJournalDrop",
		"careerReplacementChoiceDrop",
		"careerReplacementRolledDrop",
		"openItem",
		"talentReplacementReplacementDrop",
		"talentReplacementRolledDrop",
		"update",
		"updateCareerTableRows",
		"updateCareerReplacementRows",
		"updateTalentReplacementRows",
		"selectTab"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = K(() => {
			let e = [
				{
					label: "Career Table",
					tab: "careerTable"
				},
				{
					label: "Random Talents",
					tab: "randomTalents"
				},
				{
					label: "Talent Replacement",
					tab: "talentReplacement"
				}
			];
			return n.includeCareerReplacements && e.push({
				label: "Career Replacement",
				tab: "careerReplacement"
			}), e;
		});
		function a(e, t, n) {
			r("careerReplacementChoiceDrop", e, t, n);
		}
		function o(e, t) {
			r("careerReplacementRolledDrop", e, t);
		}
		function s(e, t) {
			r("talentReplacementReplacementDrop", e, t);
		}
		function c(e, t) {
			r("talentReplacementRolledDrop", e, t);
		}
		function l(e) {
			r("selectTab", e);
		}
		return (t, n) => (z(), B("section", Vv, [H("div", Hv, [
			e.showNavigation ? (z(), B("header", Uv, [n[8] ||= H("h3", { class: "dui-card-title" }, "Tables And Replacements", -1), H("p", Wv, k(e.help), 1)])) : (z(), B("p", Gv, k(e.help), 1)),
			e.showNavigation ? (z(), B("div", Kv, [(z(!0), B(R, null, L(i.value, (t) => (z(), B("button", {
				id: `random-table-tab-${t.tab}`,
				key: t.tab,
				"aria-controls": `random-table-panel-${t.tab}`,
				"aria-selected": e.activeTab === t.tab,
				class: O(["dui-tab", { "dui-tab-active": e.activeTab === t.tab }]),
				disabled: e.isDisabled,
				role: "tab",
				type: "button",
				onClick: (e) => l(t.tab)
			}, k(t.label), 11, qv))), 128))])) : G("", !0),
			e.activeTab === "careerTable" ? (z(), V(fv, {
				key: 3,
				id: "random-table-panel-careerTable",
				"aria-label": "Career table",
				"aria-labelledby": e.showNavigation ? "random-table-tab-careerTable" : void 0,
				"is-disabled": e.isDisabled,
				role: e.showNavigation ? "tabpanel" : "region",
				rows: e.values.careerTable?.rows,
				onDropCareer: n[0] ||= (e, t) => r("careerTableCareerDrop", e, t),
				onDropJournal: n[1] ||= (e, t) => r("careerTableJournalDrop", e, t),
				onUpdateRows: n[2] ||= (e) => r("updateCareerTableRows", e)
			}, null, 8, [
				"aria-labelledby",
				"is-disabled",
				"role",
				"rows"
			])) : e.activeTab === "randomTalents" ? (z(), V(Mv, {
				key: 4,
				id: "random-table-panel-randomTalents",
				"aria-label": "Random Talents table",
				"aria-labelledby": e.showNavigation ? "random-table-tab-randomTalents" : void 0,
				"is-disabled": e.isDisabled,
				role: e.showNavigation ? "tabpanel" : "region",
				sources: e.randomTalentSources,
				values: e.values.randomTalents,
				onUpdate: n[3] ||= (e) => r("update", "randomTalents", e)
			}, null, 8, [
				"aria-labelledby",
				"is-disabled",
				"role",
				"sources",
				"values"
			])) : e.activeTab === "talentReplacement" ? (z(), V(Bv, {
				key: 5,
				id: "random-table-panel-talentReplacement",
				"aria-label": "Talent replacement table",
				"aria-labelledby": e.showNavigation ? "random-table-tab-talentReplacement" : void 0,
				"is-disabled": e.isDisabled,
				role: e.showNavigation ? "tabpanel" : "region",
				rows: e.values.talentReplacementRows,
				values: e.values.talentReplacements,
				onDropReplacement: s,
				onDropRolled: c,
				onOpenItem: n[4] ||= (e) => r("openItem", e),
				onUpdateRows: n[5] ||= (e) => r("updateTalentReplacementRows", e)
			}, null, 8, [
				"aria-labelledby",
				"is-disabled",
				"role",
				"rows",
				"values"
			])) : e.includeCareerReplacements ? (z(), V(ev, {
				key: 6,
				id: "random-table-panel-careerReplacement",
				"aria-label": "Career replacement table",
				"aria-labelledby": e.showNavigation ? "random-table-tab-careerReplacement" : void 0,
				"is-disabled": e.isDisabled,
				role: e.showNavigation ? "tabpanel" : "region",
				rows: e.values.careerReplacementRows,
				values: e.values.careerReplacements,
				onDropReplacement: a,
				onDropRolled: o,
				onOpenItem: n[6] ||= (e) => r("openItem", e),
				onUpdateRows: n[7] ||= (e) => r("updateCareerReplacementRows", e)
			}, null, 8, [
				"aria-labelledby",
				"is-disabled",
				"role",
				"rows",
				"values"
			])) : G("", !0)
		])]));
	}
}), Yv = { class: "dui-card dui-card-border dui-card-sm" }, Xv = { class: "dui-card-body" }, Zv = { class: "dui-fieldset" }, Qv = { class: "dui-collapse dui-collapse-arrow" }, $v = { class: "dui-collapse-content" }, ey = { "aria-label": "Wound formula keywords" }, ty = ["disabled", "value"], ny = {
	key: 0,
	class: "dui-alert dui-alert-info"
}, ry = /* @__PURE__ */ I({
	__name: "SpeciesBuilderWoundsTab",
	props: {
		formula: {},
		generatedTraitName: {},
		isDisabled: { type: Boolean }
	},
	emits: ["updateWoundFormula"],
	setup(e, { emit: t }) {
		let n = t, r = /* @__PURE__ */ "@sb.@tb.@wpb.@sbMultiplier.@tbMultiplier.@wpbMultiplier.@scale.@size.@age.@height.@weight.@status.@rank.@xp.@fate.@fortune.@resilience.@resolve.@corruption.@sin.@advantage.@bleeding.@poisoned.@ablaze.@deafened.@stunned.@entangled.@fatigued.@blinded.@broken".split(".");
		function i(e) {
			return e.target instanceof HTMLTextAreaElement ? e.target.value : "";
		}
		return (t, a) => (z(), B("section", Yv, [H("div", Xv, [H("fieldset", Zv, [
			a[3] ||= Sa("<legend class=\"dui-fieldset-legend\">Wound Calculation</legend><p class=\"dui-fieldset-label\"> Use <code>{Skill or Characteristic}</code> for a total value, <code>[Skill or Characteristic]</code> for its bonus, and <code>{Skill|Characteristic}</code> or <code>[Skill|Characteristic]</code> to base a skill on another characteristic. You can also use keywords such as <code>@tb</code>, <code>@scale</code>, and <code>@xp</code>. </p>", 2),
			H("details", Qv, [a[2] ||= H("summary", { class: "dui-collapse-title" }, "Formula keyword guide", -1), H("div", $v, [a[1] ||= H("p", null, [
				W(" Keywords pull values from the current Actor during Wound calculation. Size uses "),
				H("code", null, "@size"),
				W(" as steps from Average and "),
				H("code", null, "@scale"),
				W(" as powers of two. ")
			], -1), H("div", ey, [(z(), B(R, null, L(r, (e) => H("code", {
				key: e,
				class: "dui-badge"
			}, k(e), 1)), 64))])])]),
			a[4] ||= H("label", {
				class: "dui-label",
				for: "species-wound-formula"
			}, "Formula", -1),
			H("textarea", {
				id: "species-wound-formula",
				class: "dui-textarea app:w-full",
				disabled: e.isDisabled,
				value: e.formula ?? "",
				placeholder: "@sb * (1 + @sbMultiplier) + @tb * (2 + @tbMultiplier) + @wpb * (1 + @wpbMultiplier)",
				rows: "4",
				onInput: a[0] ||= (e) => n("updateWoundFormula", i(e))
			}, null, 40, ty),
			e.generatedTraitName ? (z(), B("p", ny, " Generated Trait item: " + k(e.generatedTraitName), 1)) : G("", !0)
		])])]));
	}
}), iy = { class: "dui-card dui-card-border dui-card-sm" }, ay = { class: "dui-card-body" }, oy = { class: "dui-collapse-title" }, sy = { class: "dui-badge" }, cy = { class: "dui-collapse-content" }, ly = { class: "dui-fieldset" }, uy = [
	"disabled",
	"value",
	"onInput"
], dy = { class: "dui-collapse dui-collapse-arrow" }, fy = { class: "dui-collapse-title" }, py = { class: "dui-badge" }, my = { class: "dui-collapse-content" }, hy = {
	key: 0,
	class: "dui-list"
}, gy = {
	key: 1,
	class: "dui-alert"
}, _y = { class: "dui-collapse dui-collapse-arrow" }, vy = { class: "dui-collapse-title" }, yy = { class: "dui-badge" }, by = { class: "dui-collapse-content" }, xy = {
	key: 0,
	class: "dui-list"
}, Sy = {
	key: 1,
	class: "dui-alert"
}, Cy = /* @__PURE__ */ I({
	__name: "SubspeciesChangesTab",
	props: {
		isDisabled: { type: Boolean },
		parentDefinition: {},
		subspecies: {},
		woundFormulaTraitName: {}
	},
	emits: ["updateArrayField"],
	setup(e, { emit: t }) {
		let n = [
			{
				field: "skillsAdded",
				label: "Skills Added"
			},
			{
				field: "skillsRemoved",
				label: "Skills Removed"
			},
			{
				field: "traitsAdded",
				label: "Traits Added"
			},
			{
				field: "traitsRemoved",
				label: "Traits Removed"
			}
		], r = e, i = t;
		function a(e) {
			return e.target instanceof HTMLTextAreaElement ? e.target.value : "";
		}
		function o(e) {
			return e?.join("\n") ?? "";
		}
		let s = K(() => Sc(r.parentDefinition, r.subspecies)), c = K(() => Dc(r.parentDefinition, r.subspecies, {
			parent: r.parentDefinition.woundFormula ? ll(r.parentDefinition) : void 0,
			subspecies: r.subspecies.woundFormula ? r.woundFormulaTraitName : void 0
		}));
		return (t, r) => (z(), B("section", iy, [H("div", ay, [
			r[5] ||= H("h3", { class: "dui-card-title" }, "Skill And Trait Changes", -1),
			r[6] ||= H("p", null, " These changes are applied to the parent lists and exported as complete WFRP subspecies lists. Open only the list you need to edit. ", -1),
			(z(), B(R, null, L(n, (t) => H("details", {
				key: t.field,
				class: "dui-collapse dui-collapse-arrow"
			}, [H("summary", oy, [W(k(t.label) + " ", 1), H("span", sy, k(e.subspecies[t.field]?.length ?? 0), 1)]), H("div", cy, [H("fieldset", ly, [r[0] ||= H("legend", { class: "dui-fieldset-legend" }, "One name per line", -1), H("textarea", {
				class: "dui-textarea",
				disabled: e.isDisabled,
				value: o(e.subspecies[t.field]),
				rows: "5",
				onInput: (e) => i("updateArrayField", t.field, a(e))
			}, null, 40, uy)])])])), 64)),
			r[7] ||= H("div", { class: "dui-divider" }, "Compiled Preview", -1),
			r[8] ||= H("div", { class: "dui-alert dui-alert-info" }, [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-eye"
			}), H("span", null, "Read-only previews show the final inherited lists WFRP will receive.")], -1),
			H("details", dy, [H("summary", fy, [r[1] ||= W(" Compiled Skills ", -1), H("span", py, k(s.value.length), 1)]), H("div", my, [s.value.length > 0 ? (z(), B("ul", hy, [(z(!0), B(R, null, L(s.value, (e) => (z(), B("li", {
				key: e,
				class: "dui-list-row"
			}, [r[2] ||= H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-check"
			}, null, -1), H("span", null, k(e), 1)]))), 128))])) : (z(), B("p", gy, "The compiled Skill list is empty."))])]),
			H("details", _y, [H("summary", vy, [r[3] ||= W(" Compiled Traits ", -1), H("span", yy, k(c.value.length), 1)]), H("div", by, [c.value.length > 0 ? (z(), B("ul", xy, [(z(!0), B(R, null, L(c.value, (e) => (z(), B("li", {
				key: e,
				class: "dui-list-row"
			}, [r[4] ||= H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-check"
			}, null, -1), H("span", null, k(e), 1)]))), 128))])) : (z(), B("p", Sy, "The compiled Trait list is empty."))])])
		])]));
	}
}), wy = { class: "dui-card dui-card-border dui-card-sm" }, Ty = { class: "dui-card-body" }, Ey = { class: "dui-fieldset" }, Dy = { class: "dui-table dui-table-sm" }, Oy = { scope: "row" }, ky = ["for"], Ay = [
	"id",
	"disabled",
	"value"
], jy = { scope: "row" }, My = ["for"], Ny = [
	"id",
	"disabled",
	"placeholder",
	"value"
], Py = { class: "dui-fieldset" }, Fy = { class: "dui-fieldset" }, Iy = /* @__PURE__ */ I({
	__name: "SubspeciesDetailsTab",
	props: {
		index: {},
		isDisabled: { type: Boolean },
		subspecies: {}
	},
	emits: [
		"updateCharacteristic",
		"updateNumberField",
		"updateStringField"
	],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			return e.target instanceof HTMLInputElement ? e.target.value : "";
		}
		return (t, i) => (z(), B("section", wy, [H("div", Ty, [
			H("fieldset", Ey, [
				i[4] ||= H("legend", { class: "dui-fieldset-legend" }, "Identity", -1),
				i[5] ||= H("p", { class: "dui-fieldset-label" }, " Name this variant and give it a unique key under its parent species. ", -1),
				H("table", Dy, [H("tbody", null, [H("tr", null, [H("th", Oy, [H("label", { for: `subspecies-${e.index}-name` }, "Name", 8, ky)]), H("td", null, [H("input", {
					id: `subspecies-${e.index}-name`,
					class: "dui-input dui-input-sm",
					disabled: e.isDisabled,
					value: e.subspecies.name,
					type: "text",
					onInput: i[0] ||= (e) => n("updateStringField", "name", r(e))
				}, null, 40, Ay)])]), H("tr", null, [H("th", jy, [H("label", { for: `subspecies-${e.index}-key` }, "Key", 8, My)]), H("td", null, [H("input", {
					id: `subspecies-${e.index}-key`,
					class: "dui-input dui-input-sm",
					disabled: e.isDisabled,
					placeholder: P(xf)(e.subspecies),
					value: e.subspecies.key,
					type: "text",
					onInput: i[1] ||= (e) => n("updateStringField", "key", r(e))
				}, null, 40, Ny)])])])])
			]),
			H("fieldset", Py, [
				i[6] ||= H("legend", { class: "dui-fieldset-legend" }, "Characteristic Overrides", -1),
				i[7] ||= H("p", { class: "dui-fieldset-label" }, " Enter only formulas that replace the parent species characteristic value. ", -1),
				U(n_, {
					characteristics: e.subspecies.characteristics,
					"is-disabled": e.isDisabled,
					onUpdate: i[2] ||= (e, t) => n("updateCharacteristic", e, t)
				}, null, 8, ["characteristics", "is-disabled"])
			]),
			H("fieldset", Fy, [
				i[8] ||= H("legend", { class: "dui-fieldset-legend" }, "Resource Overrides", -1),
				i[9] ||= H("p", { class: "dui-fieldset-label" }, "Leave a value blank to keep the parent species value.", -1),
				U(s_, {
					fields: [
						"movement",
						"fate",
						"resilience",
						"extra"
					],
					"is-disabled": e.isDisabled,
					values: e.subspecies,
					onUpdate: i[3] ||= (e, t) => n("updateNumberField", e, t)
				}, null, 8, ["is-disabled", "values"])
			])
		])]));
	}
});
//#endregion
//#region src/functions/species-builder/editor/subspecies-talents.ts
function Ly(e, t, n) {
	let r = By(e), i = By(t), a = By(n), o = r.filter((e) => !a.includes(e)).map((e) => ({
		name: e,
		source: "inherited"
	})), s = i.filter((e) => !o.some((t) => t.name === e)).map((e) => ({
		name: e,
		source: "added"
	}));
	return {
		activeRows: [...o, ...s],
		addedTalents: i,
		removedParentTalents: r.filter((e) => a.includes(e)),
		removedTalents: a
	};
}
function Ry(e, t) {
	return e.source === "added" ? {
		field: "talentsAdded",
		value: Vy(t.addedTalents.filter((t) => t !== e.name))
	} : {
		field: "talentsRemoved",
		value: Vy([...t.removedTalents, e.name])
	};
}
function zy(e, t) {
	return {
		field: "talentsRemoved",
		value: Vy(t.removedTalents.filter((t) => t !== e))
	};
}
function By(e) {
	let t = [];
	for (let n of e ?? []) {
		let e = n.trim();
		e && !t.includes(e) && t.push(e);
	}
	return t;
}
function Vy(e) {
	return By(e).join("\n");
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/tabs/subspecies/SubspeciesTalentInheritance.vue?vue&type=script&setup=true&lang.ts
var Hy = { class: "dui-card dui-card-border dui-card-sm" }, Uy = { class: "dui-card-body" }, Wy = {
	key: 0,
	class: "dui-list"
}, Gy = { class: "dui-list-col-grow" }, Ky = { class: "dui-badge" }, qy = [
	"disabled",
	"title",
	"onClick"
], Jy = {
	key: 1,
	class: "dui-alert",
	role: "status"
}, Yy = { key: 2 }, Xy = { class: "dui-card-actions" }, Zy = [
	"disabled",
	"title",
	"onClick"
], Qy = /* @__PURE__ */ I({
	__name: "SubspeciesTalentInheritance",
	props: {
		index: {},
		isDisabled: { type: Boolean },
		parentTalents: {},
		subspecies: {}
	},
	emits: ["talentDrop", "updateArrayField"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = K(() => Ly(n.parentTalents, n.subspecies.talentsAdded, n.subspecies.talentsRemoved));
		function a(e) {
			s(Ry(e, i.value));
		}
		function o(e) {
			s(zy(e, i.value));
		}
		function s(e) {
			r("updateArrayField", n.index, e.field, e.value);
		}
		return (t, n) => (z(), B("section", Hy, [H("div", Uy, [
			n[5] ||= H("h3", { class: "dui-card-title" }, "Talent Inheritance", -1),
			n[6] ||= H("p", null, " Parent Talents are shown here as the subspecies Talent list. Removing an inherited Talent records it as removed; dropping a new Talent records it as added. ", -1),
			U(vg, {
				description: "Drop a WFRP Talent item to add it to this subspecies.",
				disabled: e.isDisabled,
				title: "Drop Added Talent",
				variant: "compact",
				onDropData: n[0] ||= (t) => r("talentDrop", e.index, t)
			}, null, 8, ["disabled"]),
			i.value.activeRows.length > 0 ? (z(), B("ul", Wy, [(z(!0), B(R, null, L(i.value.activeRows, (t) => (z(), B("li", {
				key: `${t.source}-${t.name}`,
				class: "dui-list-row"
			}, [H("div", Gy, [H("strong", null, k(t.name), 1), H("span", Ky, k(t.source === "inherited" ? "Inherited" : "Added"), 1)]), H("button", {
				disabled: e.isDisabled,
				class: "dui-btn dui-btn-error dui-btn-sm",
				title: `Remove ${t.name}`,
				type: "button",
				onClick: (e) => a(t)
			}, [...n[1] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), W(" Remove ", -1)]], 8, qy)]))), 128))])) : (z(), B("div", Jy, [...n[2] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), H("span", null, "No Talents in the compiled list.", -1)]])),
			i.value.removedParentTalents.length > 0 ? (z(), B("div", Yy, [n[4] ||= H("h4", null, "Removed Parent Talents", -1), H("div", Xy, [(z(!0), B(R, null, L(i.value.removedParentTalents, (t) => (z(), B("button", {
				key: t,
				class: "dui-btn dui-btn-sm",
				disabled: e.isDisabled,
				title: `Restore ${t}`,
				type: "button",
				onClick: (e) => o(t)
			}, [n[3] ||= H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-rotate-left"
			}, null, -1), W(" " + k(t), 1)], 8, Zy))), 128))])])) : G("", !0)
		])]));
	}
}), $y = ["onKeydown"], eb = ["aria-busy"], tb = { id: "species-builder-subspecies-title" }, nb = { class: "dui-card-actions" }, rb = ["disabled"], ib = {
	"aria-label": "Edit subspecies section",
	class: "dui-tabs dui-tabs-border",
	role: "tablist"
}, ab = [
	"id",
	"aria-controls",
	"aria-selected",
	"autofocus",
	"disabled",
	"onClick"
], ob = /* @__PURE__ */ I({
	__name: "SubspeciesEditorSubView",
	props: {
		index: {},
		isLoading: { type: Boolean },
		isOpen: { type: Boolean },
		isSaving: { type: Boolean },
		parentDefinition: {},
		parentTalents: {},
		randomTalentSources: {},
		subspecies: {},
		woundFormulaTraitName: {}
	},
	emits: [
		"close",
		"delete",
		"openItem",
		"save",
		"careerTableCareerDrop",
		"careerTableJournalDrop",
		"talentDrop",
		"talentReplacementReplacementDrop",
		"talentReplacementRolledDrop",
		"updateArrayField",
		"updateCharacteristic",
		"updateNumberField",
		"updateStringField",
		"updateCareerTableRows",
		"updateWoundFormula",
		"updateTalentReplacementRows",
		"updateTextMapField"
	],
	setup(e, { emit: t }) {
		let n = [
			{
				label: "Details",
				tab: "details"
			},
			{
				label: "Talents",
				tab: "talents"
			},
			{
				label: "Skills & Traits",
				tab: "changes"
			},
			{
				label: "Wounds",
				tab: "wounds"
			},
			{
				label: "Tables",
				tab: "tables"
			}
		], r = e, i = t, a = /* @__PURE__ */ N("details"), o = /* @__PURE__ */ N("careerTable"), s = /* @__PURE__ */ N(), c = mf(), l = ff(), u = K(() => r.isLoading || r.isSaving), d = K(() => l.duplicateKeys.length > 0 || l.duplicateNames.length > 0 || l.duplicateSubspeciesKeys.length > 0 || l.invalidDefinitionIndexes.length > 0 || l.invalidSpeciesLinkNames.length > 0 || l.invalidSubspeciesEntries.length > 0);
		function f() {
			i("delete", r.index);
		}
		function p(e, t) {
			e !== "careerReplacements" && i("updateTextMapField", r.index, e, t);
		}
		function m(e) {
			a.value = e;
		}
		function h() {
			s.value?.close();
		}
		function g() {
			r.isOpen && i("close"), c.restore();
		}
		return Kn(() => r.isOpen, async (e) => {
			e ? (a.value = "details", o.value = "careerTable", c.capture(), await Dn(), r.isOpen && !s.value?.open && s.value?.showModal()) : s.value?.open && s.value.close();
		}, {
			flush: "post",
			immediate: !0
		}), (t, r) => (z(), B("dialog", {
			ref_key: "dialog",
			ref: s,
			class: "dui-modal",
			"aria-labelledby": "species-builder-subspecies-title",
			onClose: g,
			onKeydown: Yo(qo(h, ["stop", "prevent"]), ["esc"]),
			onKeyup: r[16] ||= Yo(qo(() => {}, ["stop"]), ["esc"])
		}, [e.subspecies ? (z(), B("div", {
			key: 0,
			class: "dui-modal-box app:max-w-5xl",
			"aria-busy": u.value
		}, [
			H("header", null, [
				r[18] ||= H("span", { class: "dui-badge dui-badge-ghost" }, "Subspecies", -1),
				H("h2", tb, k(e.subspecies.name || "Untitled"), 1),
				H("div", nb, [H("button", {
					class: "dui-btn dui-btn-error dui-btn-sm",
					disabled: u.value,
					type: "button",
					onClick: f
				}, [...r[17] ||= [H("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), W(" Delete ", -1)]], 8, rb), H("button", {
					class: "dui-btn dui-btn-sm",
					type: "button",
					onClick: h
				}, "Close")])
			]),
			H("div", ib, [(z(), B(R, null, L(n, (e) => H("button", {
				id: `subspecies-editor-tab-${e.tab}`,
				key: e.tab,
				"aria-controls": `subspecies-editor-panel-${e.tab}`,
				"aria-selected": a.value === e.tab,
				autofocus: e.tab === "details",
				class: O(["dui-tab", { "dui-tab-active": a.value === e.tab }]),
				disabled: u.value,
				role: "tab",
				type: "button",
				onClick: (t) => m(e.tab)
			}, k(e.label), 11, ab)), 64))]),
			a.value === "details" ? (z(), V(Iy, {
				key: 0,
				id: "subspecies-editor-panel-details",
				"aria-label": "Subspecies details",
				"aria-labelledby": "subspecies-editor-tab-details",
				index: e.index,
				"is-disabled": u.value,
				role: "tabpanel",
				subspecies: e.subspecies,
				onUpdateCharacteristic: r[0] ||= (t, n) => i("updateCharacteristic", e.index, t, n),
				onUpdateNumberField: r[1] ||= (t, n) => i("updateNumberField", e.index, t, n),
				onUpdateStringField: r[2] ||= (t, n) => i("updateStringField", e.index, t, n)
			}, null, 8, [
				"index",
				"is-disabled",
				"subspecies"
			])) : a.value === "talents" ? (z(), V(Qy, {
				key: 1,
				id: "subspecies-editor-panel-talents",
				"aria-label": "Subspecies Talents",
				"aria-labelledby": "subspecies-editor-tab-talents",
				index: e.index,
				"is-disabled": u.value,
				"parent-talents": e.parentTalents,
				role: "tabpanel",
				subspecies: e.subspecies,
				onTalentDrop: r[3] ||= (e, t) => i("talentDrop", e, t),
				onUpdateArrayField: r[4] ||= (e, t, n) => i("updateArrayField", e, t, n)
			}, null, 8, [
				"index",
				"is-disabled",
				"parent-talents",
				"subspecies"
			])) : a.value === "changes" ? (z(), V(Cy, {
				key: 2,
				id: "subspecies-editor-panel-changes",
				"aria-label": "Subspecies Skill and Trait changes",
				"aria-labelledby": "subspecies-editor-tab-changes",
				"is-disabled": u.value,
				"parent-definition": e.parentDefinition,
				role: "tabpanel",
				subspecies: e.subspecies,
				"wound-formula-trait-name": e.woundFormulaTraitName,
				onUpdateArrayField: r[5] ||= (t, n) => i("updateArrayField", e.index, t, n)
			}, null, 8, [
				"is-disabled",
				"parent-definition",
				"subspecies",
				"wound-formula-trait-name"
			])) : a.value === "wounds" ? (z(), V(ry, {
				key: 3,
				id: "subspecies-editor-panel-wounds",
				"aria-label": "Subspecies wounds",
				"aria-labelledby": "subspecies-editor-tab-wounds",
				formula: e.subspecies.woundFormula?.formula,
				"generated-trait-name": e.woundFormulaTraitName,
				"is-disabled": u.value,
				role: "tabpanel",
				onUpdateWoundFormula: r[6] ||= (t) => i("updateWoundFormula", e.index, t)
			}, null, 8, [
				"formula",
				"generated-trait-name",
				"is-disabled"
			])) : (z(), V(Jv, {
				key: 4,
				id: "subspecies-editor-panel-tables",
				"active-tab": o.value,
				"aria-label": "Subspecies tables",
				"aria-labelledby": "subspecies-editor-tab-tables",
				help: "Configure subspecies-specific random Talent draws and Talent replacement offers as rows.",
				"is-disabled": u.value,
				"random-talent-sources": e.randomTalentSources,
				role: "tabpanel",
				"show-navigation": "",
				values: e.subspecies,
				onCareerTableCareerDrop: r[7] ||= (t, n) => i("careerTableCareerDrop", e.index, t, n),
				onCareerTableJournalDrop: r[8] ||= (t, n) => i("careerTableJournalDrop", e.index, t, n),
				onOpenItem: r[9] ||= (e) => i("openItem", e),
				onSelectTab: r[10] ||= (e) => o.value = e,
				onTalentReplacementReplacementDrop: r[11] ||= (t, n) => i("talentReplacementReplacementDrop", e.index, t, n),
				onTalentReplacementRolledDrop: r[12] ||= (t, n) => i("talentReplacementRolledDrop", e.index, t, n),
				onUpdate: p,
				onUpdateCareerTableRows: r[13] ||= (t) => i("updateCareerTableRows", e.index, t),
				onUpdateTalentReplacementRows: r[14] ||= (t) => i("updateTalentReplacementRows", e.index, t)
			}, null, 8, [
				"active-tab",
				"is-disabled",
				"random-talent-sources",
				"values"
			])),
			U(Df, {
				"can-save": P(l).canSave,
				"entity-key": e.subspecies.key,
				"entity-name": e.subspecies.name || "Untitled Subspecies",
				"has-unsaved-changes": P(l).hasUnsavedChanges,
				"has-validation-errors": d.value,
				"is-loading": P(l).isLoading,
				"is-saving": P(l).isSaving,
				"load-error": P(l).loadError,
				onSave: r[15] ||= (e) => i("save")
			}, null, 8, [
				"can-save",
				"entity-key",
				"entity-name",
				"has-unsaved-changes",
				"has-validation-errors",
				"is-loading",
				"is-saving",
				"load-error"
			])
		], 8, eb)) : G("", !0), r[19] ||= H("form", {
			class: "dui-modal-backdrop",
			method: "dialog"
		}, [H("button", {
			"aria-label": "Close subspecies editor",
			type: "submit"
		}, "Close")], -1)], 40, $y));
	}
}), sb = /* @__PURE__ */ I({
	__name: "SpeciesBuilderSubspeciesOverlay",
	props: {
		index: {},
		isLoading: { type: Boolean },
		isOpen: { type: Boolean },
		isSaving: { type: Boolean },
		parentDefinition: {},
		parentTalents: {},
		randomTalentSources: {},
		subspecies: {},
		woundFormulaTraitName: {}
	},
	emits: [
		"close",
		"deleteSubspecies",
		"openItem",
		"save",
		"subspeciesCareerTableCareerDrop",
		"subspeciesCareerTableJournalDrop",
		"subspeciesTalentDrop",
		"subspeciesTalentReplacementReplacementDrop",
		"subspeciesTalentReplacementRolledDrop",
		"updateSubspeciesArrayField",
		"updateSubspeciesCharacteristic",
		"updateSubspeciesNumberField",
		"updateSubspeciesStringField",
		"updateSubspeciesCareerTableRows",
		"updateSubspeciesWoundFormula",
		"updateSubspeciesTalentReplacementRows",
		"updateSubspeciesTextMapField"
	],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			n("deleteSubspecies", e), n("close");
		}
		return (t, i) => (z(), V(ob, {
			index: e.index,
			"is-loading": e.isLoading,
			"is-open": e.isOpen,
			"is-saving": e.isSaving,
			"parent-definition": e.parentDefinition,
			"parent-talents": e.parentTalents,
			"random-talent-sources": e.randomTalentSources,
			subspecies: e.subspecies,
			"wound-formula-trait-name": e.woundFormulaTraitName,
			onClose: i[0] ||= (e) => n("close"),
			onDelete: r,
			onOpenItem: i[1] ||= (e) => n("openItem", e),
			onSave: i[2] ||= (e) => n("save"),
			onCareerTableCareerDrop: i[3] ||= (e, t, r) => n("subspeciesCareerTableCareerDrop", e, t, r),
			onCareerTableJournalDrop: i[4] ||= (e, t, r) => n("subspeciesCareerTableJournalDrop", e, t, r),
			onTalentDrop: i[5] ||= (e, t) => n("subspeciesTalentDrop", e, t),
			onTalentReplacementReplacementDrop: i[6] ||= (e, t, r) => n("subspeciesTalentReplacementReplacementDrop", e, t, r),
			onTalentReplacementRolledDrop: i[7] ||= (e, t, r) => n("subspeciesTalentReplacementRolledDrop", e, t, r),
			onUpdateArrayField: i[8] ||= (e, t, r) => n("updateSubspeciesArrayField", e, t, r),
			onUpdateCharacteristic: i[9] ||= (e, t, r) => n("updateSubspeciesCharacteristic", e, t, r),
			onUpdateNumberField: i[10] ||= (e, t, r) => n("updateSubspeciesNumberField", e, t, r),
			onUpdateStringField: i[11] ||= (e, t, r) => n("updateSubspeciesStringField", e, t, r),
			onUpdateCareerTableRows: i[12] ||= (e, t) => n("updateSubspeciesCareerTableRows", e, t),
			onUpdateWoundFormula: i[13] ||= (e, t) => n("updateSubspeciesWoundFormula", e, t),
			onUpdateTalentReplacementRows: i[14] ||= (e, t) => n("updateSubspeciesTalentReplacementRows", e, t),
			onUpdateTextMapField: i[15] ||= (e, t, r) => n("updateSubspeciesTextMapField", e, t, r)
		}, null, 8, [
			"index",
			"is-loading",
			"is-open",
			"is-saving",
			"parent-definition",
			"parent-talents",
			"random-talent-sources",
			"subspecies",
			"wound-formula-trait-name"
		]));
	}
});
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/tabs/subspecies/subspecies-overlay-events.ts
function cb(e, t) {
	return {
		close: t.close,
		deleteSubspecies: t.deleteSubspecies,
		openItem: (t) => {
			e("openItem", t);
		},
		save: () => {
			e("save");
		},
		subspeciesCareerTableCareerDrop: (...t) => {
			e("subspeciesCareerTableCareerDrop", ...t);
		},
		subspeciesCareerTableJournalDrop: (...t) => {
			e("subspeciesCareerTableJournalDrop", ...t);
		},
		subspeciesTalentDrop: (...t) => {
			e("subspeciesTalentDrop", ...t);
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
		updateSubspeciesNumberField: (...t) => {
			e("updateSubspeciesNumberField", ...t);
		},
		updateSubspeciesStringField: (...t) => {
			e("updateSubspeciesStringField", ...t);
		},
		updateSubspeciesCareerTableRows: (...t) => {
			e("updateSubspeciesCareerTableRows", ...t);
		},
		updateSubspeciesWoundFormula: (...t) => {
			e("updateSubspeciesWoundFormula", ...t);
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
//#region src/view/apps/species-builder/tabs/species/pages/editor/tabs/subspecies/SubspeciesSection.vue?vue&type=script&setup=true&lang.ts
var lb = { class: "dui-card dui-card-border dui-card-sm" }, ub = { class: "dui-card-body" }, db = { class: "app:flex app:items-start app:justify-between app:gap-4" }, fb = { class: "dui-card-actions app:items-center" }, pb = { class: "dui-badge" }, mb = ["disabled"], hb = {
	key: 0,
	class: "dui-alert",
	role: "status"
}, gb = {
	key: 1,
	class: "dui-list"
}, _b = /* @__PURE__ */ I({
	__name: "SubspeciesSection",
	props: {
		definition: {},
		isLoading: { type: Boolean },
		isSaving: { type: Boolean }
	},
	emits: ["addSubspecies", "editSubspecies"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = K(() => n.definition.subspecies ?? []);
		function a(e) {
			return e.name.trim() || e.key.trim() || "Untitled Subspecies";
		}
		function o(e) {
			return e.key.trim() || xf(e);
		}
		return (t, n) => (z(), B("section", lb, [H("div", ub, [H("header", db, [n[2] ||= H("div", null, [H("h3", { class: "dui-card-title" }, "Subspecies"), H("p", { class: "app:m-0" }, "Variants inherit this species and store only their changes.")], -1), H("div", fb, [H("span", pb, k(i.value.length), 1), H("button", {
			class: "dui-btn dui-btn-sm",
			disabled: e.isLoading || e.isSaving,
			type: "button",
			onClick: n[0] ||= (e) => r("addSubspecies")
		}, [...n[1] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-plus"
		}, null, -1), W(" New Subspecies ", -1)]], 8, mb)])]), i.value.length === 0 ? (z(), B("div", hb, [...n[3] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-circle-info"
		}, null, -1), H("span", null, "No subspecies yet.", -1)]])) : (z(), B("ul", gb, [(z(!0), B(R, null, L(i.value, (t, n) => (z(), V(jh, {
			key: `${t.key}-${n}`,
			"entry-key": o(t),
			"icon-class": "fa-solid fa-user-group",
			"is-disabled": e.isLoading || e.isSaving,
			title: a(t),
			onOpen: (e) => r("editSubspecies", n)
		}, null, 8, [
			"entry-key",
			"is-disabled",
			"title",
			"onOpen"
		]))), 128))]))])]));
	}
}), vb = /* @__PURE__ */ I({
	__name: "SpeciesBuilderDetailPanel",
	props: {
		activeEditorTab: {},
		activeTableTab: {},
		definition: {},
		isLoading: { type: Boolean },
		isSaving: { type: Boolean },
		randomTalentSources: {}
	},
	emits: /* @__PURE__ */ "addSubspecies.careerTableCareerDrop.careerTableJournalDrop.careerReplacementChoiceDrop.careerReplacementRolledDrop.deleteSubspecies.openItem.save.subspeciesTalentDrop.subspeciesTalentReplacementReplacementDrop.subspeciesTalentReplacementRolledDrop.talentReplacementReplacementDrop.talentReplacementRolledDrop.updateBooleanField.updateCareerReplacementRows.updateCareerTableRows.updateCharacteristic.updateHeightField.updateNumberField.updateStringField.updateWoundFormula.updateSubspeciesArrayField.updateSubspeciesCharacteristic.updateSubspeciesNumberField.updateSubspeciesStringField.updateSubspeciesCareerTableRows.subspeciesCareerTableCareerDrop.subspeciesCareerTableJournalDrop.updateSubspeciesWoundFormula.updateSubspeciesTalentReplacementRows.updateSubspeciesTextMapField.updateTalentReplacementRows.updateTextMapField".split("."),
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ N(-1), a = /* @__PURE__ */ N(null), o = K(() => n.definition.subspecies?.[i.value]), s = K(() => Xu(Ju(n.definition.talents, n.definition.linkedTalents))), c = K(() => ll(n.definition)), l = K(() => {
			let e = o.value;
			return e ? ul(n.definition, e) : "";
		}), u = K(() => n.activeEditorTab === "skills" || n.activeEditorTab === "talents" || n.activeEditorTab === "traits" ? [n.activeEditorTab] : []);
		Kn(() => n.definition.key, () => {
			i.value = -1;
		}), Kn(() => n.definition.subspecies?.length ?? 0, (e) => {
			i.value >= e && (i.value = -1);
		});
		async function d() {
			let e = n.definition.subspecies?.length ?? 0;
			r("addSubspecies"), await Dn(), await f(e);
		}
		async function f(e) {
			i.value = e, await Dn(), h();
		}
		function p(e) {
			r("deleteSubspecies", e), i.value = -1;
		}
		let m = cb(r, {
			close: () => {
				i.value = -1;
			},
			deleteSubspecies: p
		});
		function h() {
			let e = a.value?.parentElement ?? null;
			for (; e;) {
				if (g(e)) {
					e.scrollTop = 0;
					return;
				}
				e = e.parentElement;
			}
		}
		function g(e) {
			let t = window.getComputedStyle(e).overflowY;
			return e.scrollHeight > e.clientHeight && (t === "auto" || t === "scroll" || t === "overlay");
		}
		return (t, n) => (z(), B("section", {
			ref_key: "detailPanelElement",
			ref: a
		}, [U(sb, Ea({
			index: i.value,
			"is-loading": e.isLoading,
			"is-open": i.value >= 0,
			"is-saving": e.isSaving,
			"parent-talents": s.value,
			"parent-definition": e.definition,
			"random-talent-sources": e.randomTalentSources,
			subspecies: o.value,
			"wound-formula-trait-name": l.value
		}, Ur(P(m))), null, 16, [
			"index",
			"is-loading",
			"is-open",
			"is-saving",
			"parent-talents",
			"parent-definition",
			"random-talent-sources",
			"subspecies",
			"wound-formula-trait-name"
		]), e.activeEditorTab === "details" ? (z(), V(R_, {
			key: 0,
			id: "species-editor-panel-details",
			"aria-label": "Species details",
			definition: e.definition,
			"is-disabled": e.isLoading || e.isSaving,
			role: "region",
			onUpdateBooleanField: n[0] ||= (e, t) => r("updateBooleanField", e, t),
			onUpdateHeightField: n[1] ||= (e, t) => r("updateHeightField", e, t),
			onUpdateStringField: n[2] ||= (e, t) => r("updateStringField", e, t)
		}, null, 8, ["definition", "is-disabled"])) : e.activeEditorTab === "attributes" ? (z(), V(h_, {
			key: 1,
			id: "species-editor-panel-attributes",
			"aria-label": "Species attributes",
			definition: e.definition,
			"is-disabled": e.isLoading || e.isSaving,
			role: "region",
			onUpdateCharacteristic: n[3] ||= (e, t) => r("updateCharacteristic", e, t),
			onUpdateNumberField: n[4] ||= (e, t) => r("updateNumberField", e, t)
		}, null, 8, ["definition", "is-disabled"])) : e.activeEditorTab === "wounds" ? (z(), V(ry, {
			key: 2,
			id: "species-editor-panel-wounds",
			"aria-label": "Species wounds",
			formula: e.definition.woundFormula?.formula,
			"generated-trait-name": c.value,
			"is-disabled": e.isLoading || e.isSaving,
			role: "region",
			onUpdateWoundFormula: n[5] ||= (e) => r("updateWoundFormula", e)
		}, null, 8, [
			"formula",
			"generated-trait-name",
			"is-disabled"
		])) : u.value.length > 0 ? (z(), V(Zg, {
			key: 3,
			id: `species-editor-panel-${e.activeEditorTab}`,
			"aria-label": `Species ${e.activeEditorTab}`,
			fields: u.value,
			"is-disabled": e.isLoading || e.isSaving,
			role: "region",
			values: e.definition
		}, null, 8, [
			"id",
			"aria-label",
			"fields",
			"is-disabled",
			"values"
		])) : e.activeEditorTab === "tables" ? (z(), V(Jv, {
			key: 4,
			id: "species-editor-panel-tables",
			"active-tab": e.activeTableTab,
			"aria-label": "Species tables",
			help: "Configure random Talent draws, Talent swap offers, and Career replacement choices without writing object-map syntax by hand.",
			"include-career-replacements": "",
			"is-disabled": e.isLoading || e.isSaving,
			"random-talent-sources": e.randomTalentSources,
			role: "region",
			"show-navigation": !1,
			values: e.definition,
			onCareerTableCareerDrop: n[6] ||= (e, t) => r("careerTableCareerDrop", e, t),
			onCareerTableJournalDrop: n[7] ||= (e, t) => r("careerTableJournalDrop", e, t),
			onCareerReplacementChoiceDrop: n[8] ||= (e, t, n) => r("careerReplacementChoiceDrop", e, t, n),
			onCareerReplacementRolledDrop: n[9] ||= (e, t) => r("careerReplacementRolledDrop", e, t),
			onOpenItem: n[10] ||= (e) => r("openItem", e),
			onTalentReplacementReplacementDrop: n[11] ||= (e, t) => r("talentReplacementReplacementDrop", e, t),
			onTalentReplacementRolledDrop: n[12] ||= (e, t) => r("talentReplacementRolledDrop", e, t),
			onUpdate: n[13] ||= (e, t) => r("updateTextMapField", e, t),
			onUpdateCareerTableRows: n[14] ||= (e) => r("updateCareerTableRows", e),
			onUpdateCareerReplacementRows: n[15] ||= (e) => r("updateCareerReplacementRows", e),
			onUpdateTalentReplacementRows: n[16] ||= (e) => r("updateTalentReplacementRows", e)
		}, null, 8, [
			"active-tab",
			"is-disabled",
			"random-talent-sources",
			"values"
		])) : (z(), V(_b, {
			key: 5,
			id: "species-editor-panel-subspecies",
			"aria-label": "Subspecies",
			definition: e.definition,
			"is-loading": e.isLoading,
			"is-saving": e.isSaving,
			role: "region",
			onAddSubspecies: d,
			onEditSubspecies: f
		}, null, 8, [
			"definition",
			"is-loading",
			"is-saving"
		]))], 512));
	}
}), yb = { class: "app:mb-3" }, bb = { class: "dui-card-title" }, xb = { class: "app:m-0" }, Sb = {
	key: 1,
	role: "status",
	class: "dui-alert dui-alert-warning"
}, Cb = /* @__PURE__ */ I({
	__name: "SpeciesBuilderEditorPage",
	props: {
		activeEditorTab: {},
		activeTableTab: {},
		definition: {},
		isLoading: { type: Boolean },
		isSaving: { type: Boolean },
		randomTalentSources: {}
	},
	emits: /* @__PURE__ */ "addSubspecies.careerTableCareerDrop.careerTableJournalDrop.careerReplacementChoiceDrop.careerReplacementRolledDrop.deleteSubspecies.openItem.save.subspeciesTalentDrop.subspeciesTalentReplacementReplacementDrop.subspeciesTalentReplacementRolledDrop.talentReplacementReplacementDrop.talentReplacementRolledDrop.updateBooleanField.updateCareerReplacementRows.updateCareerTableRows.updateCharacteristic.updateHeightField.updateNumberField.updateStringField.updateWoundFormula.updateSubspeciesArrayField.updateSubspeciesCharacteristic.updateSubspeciesNumberField.updateSubspeciesStringField.updateSubspeciesCareerTableRows.subspeciesCareerTableCareerDrop.subspeciesCareerTableJournalDrop.updateSubspeciesWoundFormula.updateSubspeciesTalentReplacementRows.updateSubspeciesTextMapField.updateTalentReplacementRows.updateTextMapField".split("."),
	setup(e, { emit: t }) {
		let n = e, r = t, i = K(() => Yf("species", !0, n.activeEditorTab, n.activeTableTab));
		return (t, n) => (z(), B("section", null, [H("header", yb, [H("h2", bb, k(i.value.label), 1), H("p", xb, k(i.value.description), 1)]), e.definition ? (z(), V(vb, {
			key: 0,
			"active-editor-tab": e.activeEditorTab,
			"active-table-tab": e.activeTableTab,
			definition: e.definition,
			"is-loading": e.isLoading,
			"is-saving": e.isSaving,
			"random-talent-sources": e.randomTalentSources,
			onAddSubspecies: n[0] ||= (e) => r("addSubspecies"),
			onCareerReplacementChoiceDrop: n[1] ||= (e, t, n) => r("careerReplacementChoiceDrop", e, t, n),
			onCareerReplacementRolledDrop: n[2] ||= (e, t) => r("careerReplacementRolledDrop", e, t),
			onCareerTableCareerDrop: n[3] ||= (e, t) => r("careerTableCareerDrop", e, t),
			onCareerTableJournalDrop: n[4] ||= (e, t) => r("careerTableJournalDrop", e, t),
			onDeleteSubspecies: n[5] ||= (e) => r("deleteSubspecies", e),
			onOpenItem: n[6] ||= (e) => r("openItem", e),
			onSave: n[7] ||= (e) => r("save"),
			onSubspeciesTalentDrop: n[8] ||= (e, t) => r("subspeciesTalentDrop", e, t),
			onSubspeciesCareerTableCareerDrop: n[9] ||= (e, t, n) => r("subspeciesCareerTableCareerDrop", e, t, n),
			onSubspeciesCareerTableJournalDrop: n[10] ||= (e, t, n) => r("subspeciesCareerTableJournalDrop", e, t, n),
			onSubspeciesTalentReplacementReplacementDrop: n[11] ||= (e, t, n) => r("subspeciesTalentReplacementReplacementDrop", e, t, n),
			onSubspeciesTalentReplacementRolledDrop: n[12] ||= (e, t, n) => r("subspeciesTalentReplacementRolledDrop", e, t, n),
			onTalentReplacementReplacementDrop: n[13] ||= (e, t) => r("talentReplacementReplacementDrop", e, t),
			onTalentReplacementRolledDrop: n[14] ||= (e, t) => r("talentReplacementRolledDrop", e, t),
			onUpdateBooleanField: n[15] ||= (e, t) => r("updateBooleanField", e, t),
			onUpdateCareerReplacementRows: n[16] ||= (e) => r("updateCareerReplacementRows", e),
			onUpdateCareerTableRows: n[17] ||= (e) => r("updateCareerTableRows", e),
			onUpdateCharacteristic: n[18] ||= (e, t) => r("updateCharacteristic", e, t),
			onUpdateHeightField: n[19] ||= (e, t) => r("updateHeightField", e, t),
			onUpdateNumberField: n[20] ||= (e, t) => r("updateNumberField", e, t),
			onUpdateStringField: n[21] ||= (e, t) => r("updateStringField", e, t),
			onUpdateWoundFormula: n[22] ||= (e) => r("updateWoundFormula", e),
			onUpdateSubspeciesArrayField: n[23] ||= (e, t, n) => r("updateSubspeciesArrayField", e, t, n),
			onUpdateSubspeciesCharacteristic: n[24] ||= (e, t, n) => r("updateSubspeciesCharacteristic", e, t, n),
			onUpdateSubspeciesNumberField: n[25] ||= (e, t, n) => r("updateSubspeciesNumberField", e, t, n),
			onUpdateSubspeciesStringField: n[26] ||= (e, t, n) => r("updateSubspeciesStringField", e, t, n),
			onUpdateSubspeciesCareerTableRows: n[27] ||= (e, t) => r("updateSubspeciesCareerTableRows", e, t),
			onUpdateSubspeciesWoundFormula: n[28] ||= (e, t) => r("updateSubspeciesWoundFormula", e, t),
			onUpdateSubspeciesTalentReplacementRows: n[29] ||= (e, t) => r("updateSubspeciesTalentReplacementRows", e, t),
			onUpdateSubspeciesTextMapField: n[30] ||= (e, t, n) => r("updateSubspeciesTextMapField", e, t, n),
			onUpdateTalentReplacementRows: n[31] ||= (e) => r("updateTalentReplacementRows", e),
			onUpdateTextMapField: n[32] ||= (e, t) => r("updateTextMapField", e, t)
		}, null, 8, [
			"active-editor-tab",
			"active-table-tab",
			"definition",
			"is-loading",
			"is-saving",
			"random-talent-sources"
		])) : (z(), B("section", Sb, "No species selected."))]));
	}
}), wb = ["aria-busy"], Tb = { class: "app:flex app:flex-1 app:items-start app:gap-3 app:p-3" }, Eb = { class: "app:flex app:min-w-0 app:flex-1 app:flex-col app:gap-3" }, Db = /* @__PURE__ */ I({
	__name: "SpeciesBuilderApp",
	props: {
		bridge: {},
		onSettingsSaved: { type: Function }
	},
	setup(e) {
		let t = e, n = pf(t.bridge, { onSettingsSaved: t.onSettingsSaved }), r = /* @__PURE__ */ N("species"), i = /* @__PURE__ */ N(!1), a = /* @__PURE__ */ N("details"), o = /* @__PURE__ */ N("careerTable"), s = K(() => n.isLoading.value || n.isSaving.value), c = K(() => Yf(r.value, i.value, a.value, o.value)), l = K(() => i.value ? n.selectedDefinition.value?.name.trim() || n.selectedDefinition.value?.key.trim() || "Untitled Species" : ""), u = K(() => ys(n.definitions.value).map((e) => e.key)), d = K(() => n.duplicateKeys.value.length > 0 || n.duplicateNames.value.length > 0 || n.duplicateSubspeciesKeys.value.length > 0 || n.invalidDefinitionIndexes.value.length > 0 || n.invalidSpeciesLinkNames.value.length > 0 || n.invalidSubspeciesEntries.value.length > 0 || n.blockingSpeciesTableValidationMessages.value.length > 0), f = K(() => !!n.loadError.value || !!n.saveError.value || !!n.message.value || d.value), p = K(() => {
			let e = n.duplicateSubspeciesKeys.value[0];
			return e ? `Duplicate subspecies key in ${e.speciesName}: ${e.keys.join(", ")}` : "";
		}), { confirmPendingDelete: m, pendingDelete: h, requestDeleteDefinition: g, requestDeleteSubspecies: _ } = xm({
			deleteDefinition: n.deleteSelectedDefinition,
			deleteSubspecies: n.deleteSubspecies,
			selectedDefinition: n.selectedDefinition
		});
		Dr(() => {
			n.loadSettings();
		}), Kn(() => n.showGeneratedConfigTab.value, (e) => {
			!e && r.value === "wfrp-config" && (r.value = "species");
		}), Kn(() => n.selectedDefinition.value, (e) => {
			e || (i.value = !1);
		});
		function v(e) {
			(e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement || e.target instanceof HTMLTextAreaElement) && e.stopPropagation();
		}
		function y(e, t = "details") {
			n.selectDefinition(e), b(t);
		}
		function b(e) {
			r.value = "species", a.value = e, i.value = !0;
		}
		function x(e) {
			o.value = e, b("tables");
		}
		function S(e) {
			r.value = e, i.value = !1;
		}
		function C(e) {
			n.addDefinition(e), b("details");
		}
		let w = Zh(n, { requestDeleteSubspecies: _ });
		return (e, t) => (z(), B("section", {
			class: "app:flex app:min-h-full app:flex-col",
			"aria-busy": s.value,
			onKeydown: v,
			onKeyup: v
		}, [
			U(Uf, {
				"can-manage-definition": i.value && !!P(n).selectedDefinition.value,
				"context-label": c.value.label,
				"definition-name": l.value,
				"is-busy": s.value,
				onDelete: P(g),
				onDuplicate: P(n).duplicateSelectedDefinition,
				onReload: P(n).loadSettings,
				onSelectSpecies: t[0] ||= (e) => S("species")
			}, {
				actions: F(({ dialogHost: e }) => [U(bm, {
					definition: P(n).selectedDefinition.value,
					"dialog-host": e,
					"existing-keys": u.value,
					"is-disabled": s.value,
					onImportDefinition: C
				}, null, 8, [
					"definition",
					"dialog-host",
					"existing-keys",
					"is-disabled"
				])]),
				_: 1
			}, 8, [
				"can-manage-definition",
				"context-label",
				"definition-name",
				"is-busy",
				"onDelete",
				"onDuplicate",
				"onReload"
			]),
			U(yf, {
				message: P(h)?.message,
				onClose: t[1] ||= (e) => h.value = null,
				onConfirm: P(m)
			}, null, 8, ["message", "onConfirm"]),
			H("main", Tb, [U(tp, {
				"active-editor-tab": a.value,
				"active-table-tab": o.value,
				"active-tab": r.value,
				"has-selected-definition": !!P(n).selectedDefinition.value,
				"is-busy": s.value,
				"is-editor-open": i.value,
				"show-generated-config-tab": P(n).showGeneratedConfigTab.value,
				onSelectEditorTab: b,
				onSelectTableTab: x,
				onSelectTab: S
			}, null, 8, [
				"active-editor-tab",
				"active-table-tab",
				"active-tab",
				"has-selected-definition",
				"is-busy",
				"is-editor-open",
				"show-generated-config-tab"
			]), H("div", Eb, [f.value ? (z(), V(fp, {
				key: 0,
				"duplicate-keys": P(n).duplicateKeys.value,
				"duplicate-names": P(n).duplicateNames.value,
				"duplicate-subspecies-message": p.value,
				"invalid-definition-count": P(n).invalidDefinitionIndexes.value.length,
				"invalid-species-link-names": P(n).invalidSpeciesLinkNames.value,
				"invalid-subspecies-count": P(n).invalidSubspeciesEntries.value.length,
				"load-error": P(n).loadError.value || P(n).saveError.value,
				message: P(n).message.value,
				"validation-message": P(n).blockingSpeciesTableValidationMessages.value[0] ?? ""
			}, null, 8, [
				"duplicate-keys",
				"duplicate-names",
				"duplicate-subspecies-message",
				"invalid-definition-count",
				"invalid-species-link-names",
				"invalid-subspecies-count",
				"load-error",
				"message",
				"validation-message"
			])) : G("", !0), i.value ? (z(), V(Cb, Ea({
				key: 2,
				id: "species-builder-panel-species",
				"active-editor-tab": a.value,
				"active-table-tab": o.value,
				"aria-label": "Species editor",
				definition: P(n).selectedDefinition.value,
				"is-loading": P(n).isLoading.value,
				"is-saving": P(n).isSaving.value,
				"random-talent-sources": P(n).randomTalentSources.value,
				role: "region"
			}, Ur(P(w))), null, 16, [
				"active-editor-tab",
				"active-table-tab",
				"definition",
				"is-loading",
				"is-saving",
				"random-talent-sources"
			])) : (z(), V(Xh, {
				key: 1,
				"active-tab": r.value,
				"is-disabled": s.value,
				onEditSpecies: y
			}, null, 8, ["active-tab", "is-disabled"]))])]),
			U(Df, {
				"can-save": P(n).canSave.value,
				definition: i.value ? P(n).selectedDefinition.value : void 0,
				"has-unsaved-changes": P(n).hasUnsavedChanges.value,
				"has-validation-errors": d.value,
				"is-loading": P(n).isLoading.value,
				"is-saving": P(n).isSaving.value,
				"load-error": P(n).loadError.value || P(n).saveError.value,
				"entity-name": r.value === "species-table" ? "Species Table" : void 0,
				onSave: P(n).saveChanges
			}, null, 8, [
				"can-save",
				"definition",
				"has-unsaved-changes",
				"has-validation-errors",
				"is-loading",
				"is-saving",
				"load-error",
				"entity-name",
				"onSave"
			])
		], 40, wb));
	}
}), $ = "wfrp4e-customizer-apps", Ob = "wfrp4e", kb = Js();
//#endregion
//#region src/module/foundry/document-drop.ts
function Ab(e) {
	let t = e.value.trim();
	if (!t) return "";
	if (Rb(t)) return t;
	let n = Pb(t), r = Ib(n, e.documentType);
	return r ? zb(n) ? JSON.stringify({
		type: r,
		uuid: n
	}) : JSON.stringify({
		id: n,
		type: r
	}) : "";
}
function jb(e) {
	let t = !0;
	function n() {
		t && (t = !1, document.removeEventListener("click", r, !0));
	}
	function r(t) {
		let r = t.target;
		if (!(r instanceof Element)) return;
		let i = Mb(r);
		i && (t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), n(), e(i));
	}
	return document.addEventListener("click", r, !0), n;
}
function Mb(e) {
	let t = e.closest("[data-uuid], [data-document-uuid], [data-entry-uuid], [data-document-id], [data-entry-id], [data-pack]");
	if (!t) return "";
	let n = t.dataset.uuid || t.dataset.documentUuid || t.dataset.entryUuid || "";
	if (n) return Nb(n);
	let r = t.dataset.documentId || t.dataset.entryId || "", i = Fb(t);
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
function Nb(e) {
	let t = Ib(e, "auto");
	return t ? JSON.stringify({
		type: t,
		uuid: e
	}) : "";
}
function Pb(e) {
	return /@UUID\[([^\]]+)]/.exec(e)?.[1]?.trim() ?? e;
}
function Fb(e) {
	let t = e.dataset.documentName || e.dataset.type || e.closest("[data-document-name]")?.dataset.documentName || "";
	return Lb(t) ? t : e.classList.contains("actor") ? "Actor" : e.classList.contains("item") ? "Item" : e.classList.contains("journal") ? "JournalEntry" : e.closest("#actors") ? "Actor" : e.closest("#items") ? "Item" : e.closest("#journal") ? "JournalEntry" : "";
}
function Ib(e, t) {
	return /^actor\./i.test(e) || /\.actors(\.|$)/i.test(e) ? "Actor" : /^item\./i.test(e) || /\.items(\.|$)/i.test(e) ? "Item" : /journalentrypage\./i.test(e) || /\.journalentrypage\./i.test(e) ? "JournalEntryPage" : /^journalentry\./i.test(e) || /\.journals(\.|$)/i.test(e) ? "JournalEntry" : t === "auto" ? "Item" : t;
}
function Lb(e) {
	return e === "Actor" || e === "Item" || e === "JournalEntry" || e === "JournalEntryPage";
}
function Rb(e) {
	if (!e.startsWith("{")) return !1;
	try {
		return typeof JSON.parse(e).type == "string";
	} catch {
		return !1;
	}
}
function zb(e) {
	return /^(actor|item|journalentry|journalentrypage|compendium)\./i.test(e);
}
var Bb = {
	createDropData: Ab,
	startDocumentPick: jb
}, Vb = class extends foundry.applications.api.ApplicationV2 {
	#e;
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("wfrp4e-customizer-apps-root"), n.dataset.theme = "wfrp4e-customizer-apps", n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("wfrp4e-customizer-apps-app"), t.replaceChildren(e);
		let r = this.getVueProps() ?? {};
		this.#e = $o(this.getVueComponent(), r), this.#e.use(kb), this.#e.provide(Qh, Bb), this.#e.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#e?.unmount(), this.#e = void 0;
	}
}, Hb = "generatedSpeciesCareerTable", Ub = "Compendium.wfrp4e-core.journals.JournalEntry.wczCPcuHT4VQDLpL";
function Wb(e) {
	return e.definitions.flatMap((e) => [...Kb(e), ...qb(e)]);
}
function Gb({ fallbackJournalUuid: e = Ub, flagScope: t, spec: n }) {
	return {
		displayRoll: !0,
		flags: {
			wfrp4e: {
				column: n.column,
				key: "career"
			},
			[t]: { [Hb]: {
				speciesKey: n.speciesKey,
				subspeciesKey: n.subspeciesKey ?? ""
			} }
		},
		formula: `1d${n.rows.length}`,
		img: "systems/wfrp4e/ui/buttons/d10.webp",
		name: n.name,
		replacement: !0,
		results: n.rows.map((t, n) => ({
			description: Jb(t, e),
			drawn: !1,
			img: "icons/svg/d20-grey.svg",
			name: t.name,
			range: [n + 1, n + 1],
			type: "text",
			weight: 1
		}))
	};
}
function Kb(e) {
	return e.careerTable?.rows.length ? [{
		column: Cl(e),
		name: `Career - ${e.name}`,
		rows: e.careerTable.rows,
		speciesKey: e.key
	}] : [];
}
function qb(e) {
	return (e.subspecies ?? []).flatMap((t) => t.careerTable?.rows.length ? [{
		column: wl(e, t),
		name: `Career - ${e.name} / ${t.name}`,
		rows: t.careerTable.rows,
		speciesKey: e.key,
		subspeciesKey: t.key
	}] : []);
}
function Jb(e, t) {
	return `@UUID[${e.journalUuid?.trim() || t}]{${Yb(e.name)}}`;
}
function Yb(e) {
	return e.replaceAll("{", "").replaceAll("}", "").trim();
}
//#endregion
//#region src/functions/species-builder/default-species-builder-settings.ts
function Xb() {
	return {
		autoRegisterSpeciesTable: !1,
		definitions: [],
		showGeneratedConfigTab: !1
	};
}
//#endregion
//#region src/module/settings/foundry-setting-adapter.ts
function Zb(e) {
	return e;
}
function Qb(e) {
	game.settings.register($, e.key, {
		config: e.config ?? !1,
		default: e.defaultValue,
		name: e.name,
		scope: e.scope ?? "world",
		type: Object
	});
}
function $b(e) {
	return e.normalize(game.settings.get($, e.key));
}
async function ex(e, t) {
	let n = e.normalize(t);
	return await game.settings.set($, e.key, n), n;
}
//#endregion
//#region src/module/apps/species-builder/settings.ts
var tx = Zb({
	defaultValue: Xb(),
	key: "speciesBuilderSettings",
	name: "Species Builder Settings",
	normalize: ql
});
function nx() {
	Qb(tx);
}
function rx() {
	return $b(tx);
}
async function ix(e) {
	return await ex(tx, e);
}
//#endregion
//#region src/module/apps/species-builder/career-tables.ts
var ax = "WFRP Customizer Generated Career Tables", ox = "WFRP Customizer Career Table Link Fallback";
async function sx(t = rx()) {
	let n = Wb(t), r = await cx(), i = await dx();
	await lx(r);
	for (let e of n) {
		let t = Gb({
			fallbackJournalUuid: i,
			flagScope: $,
			spec: e
		});
		await RollTable.create({
			...t,
			folder: r.id
		});
	}
	e(`${$} | Regenerated ${n.length} Species Builder career table(s).`);
}
async function cx() {
	let e = game.folders.contents.find((e) => e.type === "RollTable" && e.name === ax);
	if (e) return e;
	let t = await Folder.create({
		name: ax,
		type: "RollTable"
	});
	if (!t) throw Error("Foundry did not create the generated career table folder.");
	return t;
}
async function lx(e) {
	let t = (game.tables?.contents ?? []).filter((t) => t.folder?.id === e.id || ux(t));
	for (let e of t) await e.delete();
}
function ux(e) {
	return X(Z(e.toObject(), [
		"flags",
		$,
		Hb
	]));
}
async function dx() {
	let e = game.journal?.contents.find((e) => e.name === ox);
	if (e) return e.uuid;
	let t = await JournalEntry.create({
		name: ox,
		pages: [{
			name: "Why This Link Exists",
			text: {
				content: "<p>This Journal Entry exists as a fallback link target for generated WFRP career RollTables.</p><p>WFRP character generation ignores the linked document and reads only the visible career group name in the table result link. Species Builder rows can point at a more specific Journal Entry or Journal Entry Page when one exists.</p>",
				format: 1
			},
			type: "text"
		}]
	});
	if (!t) throw Error("Foundry did not create the Species Builder career table fallback journal.");
	return t.uuid;
}
//#endregion
//#region src/module/foundry/document-guards.ts
function fx(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Actor";
}
function px(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Item";
}
function mx(e, t = "Expected a Foundry Actor.") {
	if (!fx(e)) throw Error(t);
	return e;
}
function hx(e, t = "Expected a Foundry Item.") {
	if (!px(e)) throw Error(t);
	return e;
}
function gx(e, t, n = `Expected a Foundry ${t} Item.`) {
	let r = hx(e, n);
	if (r.type !== t) throw Error(n);
	return r;
}
//#endregion
//#region src/module/foundry/drop-data.ts
function _x(e) {
	try {
		return JSON.parse(e);
	} catch {
		throw Error("Foundry drop data could not be read.");
	}
}
//#endregion
//#region src/module/apps/species-builder/item-drops.ts
async function vx(e, t) {
	let n = _x(e);
	if (n.type !== "Item" || !n.uuid) throw Error(`Drop a Foundry ${t} item here.`);
	let r = hx(await fromUuid(n.uuid), `Drop a Foundry ${t} item here.`);
	if (r.type !== t) throw Error(`Drop a Foundry ${t} item here.`);
	let i = {
		name: t === "career" && Sx(r) || r.name,
		type: t,
		uuid: r.uuid
	};
	if (t === "career") {
		let e = Cx(r);
		e && (i.careerJournalUuid = e);
	}
	let a = xx(r);
	return a && (i.specification = a), r.img && (i.img = r.img), i;
}
async function yx(e) {
	let t = _x(e);
	if (t.type !== "JournalEntry" && t.type !== "JournalEntryPage" || !t.uuid) throw Error("Drop a Foundry Journal Entry or Journal Entry Page here.");
	let n = await fromUuid(t.uuid);
	if (!Ex(n)) throw Error("Drop a Foundry Journal Entry or Journal Entry Page here.");
	return {
		name: n.name,
		uuid: n.uuid
	};
}
async function bx(e) {
	hx(await fromUuid(e), "The linked Foundry Item was not found.").sheet?.render(!0);
}
function xx(e) {
	let t = [
		Z(e.system, ["specification", "value"]),
		Z(e, ["specifier"]),
		Z(e.system, ["specifier"]),
		Z(e.system, ["specifier", "value"])
	];
	for (let e of t) {
		if (typeof e == "string" && e.trim()) return e.trim();
		if (typeof e == "number") return String(e);
	}
	return "";
}
function Sx(e) {
	let t = Z(e.system, ["careergroup", "value"]);
	return typeof t == "string" ? t.trim() : "";
}
function Cx(e) {
	let t = Z(e.system, ["description", "value"]);
	return typeof t == "string" ? /^@UUID\[([^\]]+)]{[^{}]+}$/.exec(wx(t))?.[1]?.trim() ?? "" : "";
}
function wx(e) {
	let t = e.trim();
	t = t.replaceAll(/<(p|div)>(?:\s|&nbsp;|<br\s*\/?>)*<\/\1>/gi, "").trim();
	let n = /^<(p|div)>([\S\s]*)<\/\1>$/i.exec(t);
	return n?.[2] !== void 0 && (t = n[2].trim()), Tx(t.replaceAll(/<br\s*\/?>/gi, "").trim());
}
function Tx(e) {
	return e.replaceAll("&nbsp;", " ").replaceAll("&amp;", "&").replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", "\"").replaceAll("&#39;", "'").trim();
}
function Ex(e) {
	return typeof e == "object" && !!e && "documentName" in e && (e.documentName === "JournalEntry" || e.documentName === "JournalEntryPage") && "name" in e && typeof e.name == "string" && "uuid" in e && typeof e.uuid == "string";
}
//#endregion
//#region src/module/apps/species-builder/random-talent-sources.ts
var Dx = {
	key: "talents",
	label: "Talents - Character Creation"
};
function Ox() {
	let e = /* @__PURE__ */ new Map();
	e.set(Dx.key, Dx);
	for (let t of game.tables?.contents ?? []) {
		let n = t.getFlag("wfrp4e", "key");
		if (typeof n != "string" || !n.trim()) continue;
		let r = kx(n, t);
		e.set(n, {
			key: n,
			label: r
		});
	}
	return [...e.values()].sort(Ax);
}
function kx(e, t) {
	let n = game.wfrp4e?.tables?.findTable?.(e);
	return (X(n) && typeof n.name == "string" ? n.name : t.name).trim() || e;
}
function Ax(e, t) {
	return e.key === Dx.key ? -1 : t.key === Dx.key ? 1 : e.label.localeCompare(t.label);
}
//#endregion
//#region src/module/apps/species-builder/world-table/journals.ts
var jx = "generatedSpeciesJournal", Mx = "WFRP Customizer Species Journals";
async function Nx(e) {
	let t = game.journal?.contents ?? [], n = Px(t), r, i = [];
	for (let a of e.rows) {
		let e = Fx(a.journalUuid, a.speciesKey, t) || n.get(a.speciesKey)?.uuid;
		if (!e) {
			r ??= await Lx();
			let t = await JournalEntry.create({
				flags: { [$]: { [jx]: { speciesKey: a.speciesKey } } },
				folder: r.id,
				name: a.name.trim(),
				pages: []
			});
			if (!t) throw Error(`Foundry did not create the Journal Entry for species "${a.name}".`);
			n.set(a.speciesKey, t), e = t.uuid;
		}
		i.push({
			...a,
			journalUuid: e
		});
	}
	return {
		...e,
		requiresLinkRepair: !1,
		rows: i
	};
}
function Px(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = Ix(n);
		if (e) {
			if (t.has(e)) throw Error(`Multiple Species Builder Journals exist for "${e}". Remove the duplicate and retry.`);
			t.set(e, n);
		}
	}
	return t;
}
function Fx(e, t, n) {
	let r = e?.trim() ?? "";
	if (!r) return "";
	let i = n.find((e) => e.uuid === r);
	if (!i) return r.startsWith("JournalEntry.") && r.split(".").length === 2 ? "" : r;
	let a = Ix(i);
	return a && a !== t ? "" : r;
}
function Ix(e) {
	let t = e.getFlag($, jx);
	return X(t) ? Q(t, ["speciesKey"]).trim() : "";
}
async function Lx() {
	let e = game.folders.contents.find((e) => e.type === "JournalEntry" && e.name === Mx);
	if (e) return e;
	let t = await Folder.create({
		name: Mx,
		type: "JournalEntry"
	});
	if (!t) throw Error("Foundry did not create the generated Species Journal folder.");
	return t;
}
//#endregion
//#region src/module/apps/species-builder/world-table/persistence.ts
var Rx = "species", zx = "tableSettings";
async function Bx(e) {
	let t = await Nx(e), n = bu(t, $);
	return e.ownership === "managed" ? await Wx(t, n) : await Ux(t, n);
}
async function Vx(e) {
	let t = game.settings.get(Ob, zx);
	if (!X(t)) throw Error("WFRP table settings are unavailable; the Species table was not registered.");
	await game.settings.set(Ob, zx, {
		...t,
		[Rx]: e
	});
}
function Hx(e) {
	return e.getFlag($, uu) === !0;
}
async function Ux(e, t) {
	if (e.ownership === "external") {
		let t = e.tableId ? game.tables?.get(e.tableId) : void 0;
		if (!t || Hx(t)) throw Error("The source Species table changed. Reload before saving a managed copy.");
	}
	if ((game.tables?.contents ?? []).some(Hx)) throw Error("A managed Species table already exists. Reload before saving.");
	let n = await RollTable.create(t);
	if (!n) throw Error("Foundry did not create the managed Species table.");
	return n;
}
async function Wx(e, t) {
	let n = e.tableId ? game.tables?.get(e.tableId) : void 0;
	if (!n || !Hx(n)) throw Error("The managed Species table changed. Reload before saving again.");
	let r = Array.isArray(t.results) ? t.results.filter(X) : [];
	return await n.update({
		displayRoll: t.displayRoll,
		[`flags.${$}.${uu}`]: !0,
		[`flags.${Ob}.key`]: Rx,
		formula: t.formula,
		name: t.name,
		replacement: t.replacement
	}), await Gx(n, e.rows, r), n;
}
async function Gx(e, t, n) {
	let r = e.toObject(), i = Array.isArray(r.results) ? r.results.filter(X) : [], a = new Set(i.map((e) => Q(e, ["_id"]))), o = /* @__PURE__ */ new Set(), s = [], c = [];
	n.forEach((e, n) => {
		let r = Kx(t[n], i, a, o);
		r ? (o.add(r), s.push({
			...e,
			_id: r
		})) : c.push(e);
	});
	let l = [...a].filter((e) => e && !o.has(e));
	s.length > 0 && await e.updateEmbeddedDocuments("TableResult", s), c.length > 0 && await e.createEmbeddedDocuments("TableResult", c), l.length > 0 && await e.deleteEmbeddedDocuments("TableResult", l);
}
function Kx(e, t, n, r) {
	if (e?.resultId && n.has(e.resultId) && !r.has(e.resultId)) return e.resultId;
	let i = t.find((t) => Q(t, [
		"flags",
		"wfrp4e",
		"species"
	]) === e?.speciesKey && !r.has(Q(t, ["_id"])));
	return i ? Q(i, ["_id"]) : "";
}
//#endregion
//#region src/module/apps/species-builder/world-table/index.ts
var qx = "species", Jx = "tableSettings";
function Yx() {
	let e = rx(), t = new Set(e.definitions.map((e) => e.key)), n = Zx().filter((e) => !t.has(e.key)), r = fu(n, e.definitions), i = game.tables?.contents ?? [], a = Qx(), o = $x(i, i.filter(Hx), a);
	return {
		draft: o ? eS(o, r, a[0] === o.id) : rS(),
		runtimeOptions: n
	};
}
async function Xx(e, t) {
	let n = await Bx(e);
	if (t) try {
		await Vx(n.id);
	} catch (e) {
		return {
			...Yx(),
			registrationError: e instanceof Error ? e.message : "The Species table could not be registered."
		};
	}
	return Yx();
}
function Zx() {
	let e = game.wfrp4e?.config?.species;
	return X(e) ? Object.entries(e).flatMap(([e, t]) => {
		let n = typeof t == "string" ? t.trim() : "";
		return e.trim() && n ? [{
			key: e.trim(),
			label: n
		}] : [];
	}) : [];
}
function Qx() {
	let e = game.settings.get(Ob, Jx), t = X(e) ? e[qx] : void 0;
	return typeof t == "string" ? t.split(",").map((e) => e.trim()).filter(Boolean) : [];
}
function $x(e, t, n) {
	if (t.length > 1) {
		let e = t.filter((e) => n[0] === e.id);
		if (e.length === 1) return e[0];
		throw Error("Multiple Species Builder-managed Species tables exist. Remove the duplicate and reload.");
	}
	if (t[0]) return t[0];
	for (let t of n) {
		let n = e.find((e) => e.id === t);
		if (n) return n;
	}
	return e.find((e) => e.getFlag(Ob, "key") === qx);
}
function eS(e, t, n) {
	let r = e.toObject(), i = (Array.isArray(r.results) ? r.results : []).flatMap((e) => tS(e, t));
	return i.sort((e, t) => nS(e.source) - nS(t.source)), {
		isRegistered: n,
		name: e.name,
		ownership: Hx(e) ? "managed" : "external",
		requiresLinkRepair: i.some((e) => e.requiresLinkRepair),
		rows: i.map(({ row: e }) => e),
		tableId: e.id
	};
}
function tS(e, t) {
	if (!X(e)) return [];
	let n = Q(e, ["name"]), r = _u(Q(e, ["description"])), i = Q(e, [
		"flags",
		Ob,
		"species"
	]), a = r?.label || n, o = gu(i, a, t), s = Q(e, ["_id"]), c = Q(e, ["type"]);
	return [{
		requiresLinkRepair: !r || r.label !== n.trim() || c !== "text",
		row: {
			...r ? { journalUuid: r.uuid } : {},
			name: a,
			...s ? { resultId: s } : {},
			speciesKey: o,
			weight: vu(e)
		},
		source: e
	}];
}
function nS(e) {
	let t = Z(e, ["range"]), n = Array.isArray(t) ? Number(t[0]) : 0;
	return Number.isInteger(n) ? n : 0;
}
function rS() {
	return {
		isRegistered: !1,
		name: "Species",
		ownership: "new",
		requiresLinkRepair: !1,
		rows: []
	};
}
//#endregion
//#region src/module/apps/species-builder/wound-formula-traits.ts
var iS = "WFRP Customizer Generated Species Traits";
async function aS(t = rx()) {
	let n = cl(t), r = await oS();
	await sS(r);
	for (let e of n) {
		let t = dl({
			flagScope: $,
			spec: e
		});
		await Item.create({
			...t,
			folder: r.id
		});
	}
	e(`${$} | Regenerated ${n.length} wound formula Trait item(s).`);
}
async function oS() {
	let e = game.folders.contents.find((e) => e.type === "Item" && e.name === iS);
	if (e) return e;
	let t = await Folder.create({
		name: iS,
		type: "Item"
	});
	if (!t) throw Error("Foundry did not create the generated Species Trait folder.");
	return t;
}
async function sS(e) {
	let t = (game.items?.contents ?? []).filter((t) => t.folder?.id === e.id || cS(t));
	for (let e of t) await e.delete();
}
function cS(e) {
	return X(Z(e.toObject(), [
		"flags",
		$,
		sl
	]));
}
//#endregion
//#region src/module/apps/species-builder/foundry-bridge.ts
async function lS(e, t) {
	let n = await ix(e);
	if (!t) return { settings: n };
	let r = (await Promise.allSettled([sx(n), aS(n)])).flatMap((e) => e.status === "rejected" ? [dS(e.reason)] : []);
	return r.length > 0 ? {
		settings: n,
		syncError: r.join(" ")
	} : { settings: n };
}
var uS = {
	loadSettings: async () => rx(),
	loadRandomTalentSources: async () => Ox(),
	loadSpeciesTable: async () => Yx(),
	openItemSheet: bx,
	resolveItemDrop: vx,
	resolveJournalDrop: yx,
	saveSettings: lS,
	saveSpeciesTable: Xx
};
function dS(e) {
	return e instanceof Error ? e.message : "Generated document synchronization failed.";
}
//#endregion
//#region src/module/apps/species-builder/reload-confirmation.ts
function fS() {
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
var pS = class extends Vb {
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
		return Db;
	}
	getVueProps() {
		return {
			bridge: uS,
			onSettingsSaved: () => {
				this.#e = !0;
			}
		};
	}
	async _preClose(e) {
		let t = this.#e;
		this.#e = !1, t && await fS() && window.location.reload(), await super._preClose(e);
	}
};
//#endregion
//#region src/functions/npc-builder/create-default-trait-config.ts
function mS() {
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
function hS(e, t) {
	return `${e}:${xS(t)}`;
}
function gS(e) {
	let t = e.level ?? 1;
	return Number.isFinite(t) ? Math.max(1, Math.floor(t)) * 5 : 5;
}
function _S(e) {
	return e.name;
}
function vS(e, t) {
	return e === "characteristic" ? t.allowBaseActorCharacteristics : e === "skill" ? t.allowBaseActorSkills : t.allowBaseActorTalents;
}
function yS(e, t) {
	return {
		...mS(),
		...e,
		...t
	};
}
function bS(e, t) {
	return xS(e) === xS(t);
}
function xS(e) {
	return e.trim().toLocaleLowerCase();
}
function SS(e) {
	return Number.isFinite(e) ? Math.max(1, Math.floor(e)) : 1;
}
function CS(e) {
	let t = 0;
	for (let n of e) t += n.count;
	return t;
}
function wS(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = xS(r);
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
//#endregion
//#region src/functions/npc-builder/skill-specialization.ts
function TS(e, t, n) {
	return `${e}:${AS(t)}:${n}`;
}
function ES(e, t) {
	let n = e.trim(), r = t.trim();
	return r ? `${n} (${r})` : n;
}
function DS(e) {
	let t = /^(?<base>.+?)\s*\((?<specialization>[^)]+)\)\s*$/.exec(e.trim());
	if (!t?.groups) return null;
	let n = t.groups.base?.trim() ?? "", r = t.groups.specialization?.trim() ?? "";
	return !n || !r || OS(e) ? null : {
		baseName: n,
		originalName: e,
		specialization: r
	};
}
function OS(e) {
	let t = /^(?<base>.+?)\s*\((?<specialization>[^)]+)\)\s*$/.exec(e.trim());
	if (!t?.groups) return null;
	let n = t.groups.base?.trim() ?? "", r = t.groups.specialization?.trim() ?? "", i = MS(r);
	return !n || !r || !jS(r, i) ? null : {
		baseName: n,
		options: i,
		originalName: e,
		specialization: r
	};
}
function kS(e, t) {
	let n = /* @__PURE__ */ new Map();
	return t.map((t) => {
		let r = AS(t), i = n.get(r) ?? 0;
		return n.set(r, i + 1), {
			occurrence: i,
			originalName: t,
			resolutionKey: TS(e, t, i)
		};
	});
}
function AS(e) {
	return e.trim().replaceAll(/\s+/g, " ").toLocaleLowerCase();
}
function jS(e, t) {
	return e.trim().toLocaleLowerCase() === "any" || t.length > 1;
}
function MS(e) {
	return e.split(/\s+or\s+/i).map((e) => e.trim()).filter(Boolean);
}
//#endregion
//#region src/functions/npc-builder/advancements/source-counts.ts
function NS(e, t) {
	return t <= 0 ? [] : [{
		count: t,
		kind: "career",
		label: `${e} extra time`
	}];
}
function PS(e, t) {
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
//#region src/functions/npc-builder/advancements/talent-maximums.ts
function FS(e, t, n, r) {
	let i = LS(IS(e, r), n);
	return i.value === null ? t : Math.min(t, Math.max(0, i.value - e.baseAdvances));
}
function IS(e, t) {
	let n = t[xS(e.name)];
	return {
		maximumFormula: e.talentMaximumFormula ?? n?.maximumFormula ?? "",
		maximumKey: e.talentMaximumKey ?? n?.maximumKey ?? ""
	};
}
function LS(e, t) {
	let n = e.maximumKey.trim().toLocaleLowerCase();
	if (!n) return {
		label: "Unknown",
		value: null
	};
	if (n === "none") return {
		label: "-",
		value: null
	};
	if (n === "custom") return RS(e.maximumFormula, t);
	let r = Number(n);
	if (Number.isFinite(r)) {
		let e = Math.max(0, Math.floor(r));
		return {
			label: `${e}`,
			value: e
		};
	}
	if (Mc(n)) {
		let e = t[n] ?? 0, r = Math.max(0, Math.floor(e / 10));
		return {
			label: `${Ac[n]} Bonus (${r})`,
			value: r
		};
	}
	return {
		label: e.maximumKey || "Unknown",
		value: null
	};
}
function RS(e, t) {
	let n = e.trim(), r = Number(n);
	if (Number.isFinite(r)) {
		let e = Math.max(0, Math.floor(r));
		return {
			label: `${e}`,
			value: e
		};
	}
	let i = /@characteristics\.([a-z]+)\.bonus/i.exec(n)?.[1]?.toLocaleLowerCase();
	if (i && Mc(i)) {
		let e = t[i] ?? 0, n = Math.max(0, Math.floor(e / 10));
		return {
			label: `${Ac[i]} Bonus (${n})`,
			value: n
		};
	}
	return {
		label: n || "Custom",
		value: null
	};
}
//#endregion
//#region src/functions/npc-builder/advancements/career-grants.ts
function zS(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e.careers) {
		let i = wS(HS(r, t, e.skillGrantResolutions)), a = gS(r) / 5, o = Math.max(0, SS(r.quantity) - 1) * 5;
		for (let e of i) {
			let i = hS(t, e), s = n.get(i);
			if (s) {
				a > s.highestLevel && (s.highestLevel = a, s.highestLevelSource = _S(r)), o > 0 && s.extraSources.push({
					count: o,
					kind: "career",
					label: `${r.name} extra time`
				});
				continue;
			}
			n.set(i, {
				extraSources: NS(r.name, o),
				highestLevel: a,
				highestLevelSource: _S(r),
				name: e
			});
		}
	}
	for (let r of n.values()) VS(e, {
		careerValue: r.highestLevel * 5 + CS(r.extraSources),
		kind: t,
		name: r.name,
		sources: [{
			count: r.highestLevel * 5,
			kind: "career",
			label: r.highestLevelSource
		}, ...r.extraSources]
	});
}
function BS(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.careers) {
		let r = wS(HS(n, "talent", e.skillGrantResolutions)), i = Math.max(0, SS(n.quantity) - 1);
		for (let e of r) {
			let r = hS("talent", e), a = t.get(r);
			if (a) {
				i > 0 && a.extraSources.push({
					count: i,
					kind: "career",
					label: `${n.name} extra time`
				});
				continue;
			}
			t.set(r, {
				extraSources: NS(n.name, i),
				firstSource: n.name,
				name: e
			});
		}
	}
	for (let n of t.values()) VS(e, {
		careerValue: 1 + CS(n.extraSources),
		kind: "talent",
		name: n.name,
		sources: [{
			count: 1,
			kind: "career",
			label: n.firstSource
		}, ...n.extraSources]
	}, e.characteristicTotals);
}
function VS(e, t, n = {}) {
	let r = hS(t.kind, t.name), i = e.entries.get(r);
	if (i) {
		let r = t.kind === "talent" && i.includedFromBase ? t.sources.slice(1) : t.sources, a = t.kind === "talent" ? FS(i, CS(r), n, e.talentMaximums) : t.careerValue;
		i.careerValue = a, i.includedFromCareer = !0, i.sources = [...i.sources.filter((e) => e.kind === "base"), ...PS(r, a)];
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
	t.kind === "talent" && (a.careerValue = FS(a, t.careerValue, n, e.talentMaximums), a.current = a.careerValue, a.sources = PS(t.sources, a.careerValue)), e.entries.set(r, { ...a });
}
function HS(e, t, n) {
	return t === "characteristic" ? e.grants.characteristics : t === "skill" ? kS(e.uuid, e.grants.skills).map((e) => n[e.resolutionKey] || e.originalName) : e.grants.talents;
}
//#endregion
//#region src/functions/npc-builder/advancements/entry-context.ts
function US(e, t) {
	let n = {};
	for (let r of e.values()) {
		if (r.kind !== "characteristic") continue;
		let e = jc[xS(r.name)];
		if (!e) continue;
		let i = t[hS(r.kind, r.name)] ?? 0, a = Math.max(r.minimumCurrent, Math.floor(r.careerValue + i));
		n[e] = Math.max(0, r.baseValue + a);
	}
	return n;
}
function WS(e, t, n) {
	return e.kind === "skill" ? GS(e, t, n) : e.kind === "talent" ? KS(e, t, n) : e;
}
function GS(e, t, n) {
	let r = qS(e.name, n.skillCharacteristics) ?? JS(e.name, n.baseActorDraftData);
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
function KS(e, t, n) {
	let r = IS(e, n.talentMaximums), i = LS(r, t);
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
function qS(e, t) {
	return t[xS(e)] ?? null;
}
function JS(e, t) {
	let n = t.advancements.find((t) => t.kind === "skill" && bS(t.name, e));
	return n?.characteristicKey ? {
		characteristicKey: n.characteristicKey,
		characteristicName: n.characteristicName ?? Ac[n.characteristicKey],
		skillName: e
	} : null;
}
//#endregion
//#region src/functions/npc-builder/advancements/derive-advancements.ts
function YS(e) {
	let t = eC(e.baseActorDraftData), n = {
		careers: e.careers,
		entries: t,
		skillGrantResolutions: e.skillGrantResolutions,
		talentMaximums: e.talentMaximums
	};
	zS(n, "characteristic"), zS(n, "skill");
	let r = US(t, e.manualAdvancementDeltas);
	return BS({
		...n,
		characteristicTotals: r
	}), [...t.values()].filter((t) => t.includedFromCareer || vS(t.kind, e.settings)).map((t) => {
		let n = WS(t, r, e), i = hS(t.kind, t.name), a = e.manualAdvancementDeltas[i] ?? 0, o = n.careerValue + a;
		return {
			...n,
			current: Math.max(n.minimumCurrent, Math.floor(o))
		};
	}).sort(tC);
}
function XS(e, t) {
	let n = Number.isFinite(t) ? t : 0;
	return Math.max(e.minimumCurrent, Math.floor(n)) - e.careerValue;
}
function ZS(e, t) {
	let n = Number.isFinite(t) ? t : 0;
	return XS(e, Math.max(e.minimumTotal, Math.floor(n)) - e.baseValue);
}
function QS(e, t) {
	return {
		...e,
		...Object.fromEntries(t.map((e) => [xS(e.skillName), e]))
	};
}
function $S(e, t) {
	return {
		...e,
		...Object.fromEntries(t.map((e) => [xS(e.talentName), e]))
	};
}
function eC(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.advancements) {
		let e = hS(n.kind, n.name), r = {
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
		n.characteristicKey && (r.characteristicKey = n.characteristicKey, r.characteristicName = n.characteristicName ?? Ac[n.characteristicKey]), n.kind === "talent" && n.baseAdvances > 0 && r.sources.push({
			count: n.baseAdvances,
			kind: "base",
			label: "Base"
		}), n.talentMaximumFormula && (r.talentMaximumFormula = n.talentMaximumFormula), n.talentMaximumKey && (r.talentMaximumKey = n.talentMaximumKey), t.set(e, r);
	}
	return t;
}
function tC(e, t) {
	return e.kind === t.kind ? e.name.localeCompare(t.name) : e.kind.localeCompare(t.kind);
}
//#endregion
//#region src/functions/npc-builder/advancements/advancement-actions.ts
function nC(e) {
	return e.kind === "talent" ? 1 : 5;
}
function rC(e) {
	return Math.max(e.minimumTotal, e.baseValue + e.current);
}
function iC(e, t) {
	return rC(e) + t * nC(e);
}
function aC(e) {
	return rC(e);
}
function oC(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" && aC(e) < t;
}
function sC(e) {
	return e.filter((e) => e.kind === "talent" && oC(e)).map((e) => ({
		kind: e.kind,
		name: e.name,
		total: e.talentMaximumValue
	}));
}
function cC(e, t) {
	let n = new Map(e.map((e) => [uC(e), e])), r = [];
	for (let e of t) {
		let t = n.get(uC(e));
		!t || t.current === e.current || r.push({
			current: e.current,
			kind: t.kind,
			name: t.name
		});
	}
	return r;
}
function lC(e, t) {
	return e.find((e) => e.kind === t.kind && e.name === t.name) ?? null;
}
function uC(e) {
	return `${e.kind}:${e.name}`;
}
//#endregion
//#region src/functions/npc-builder/xp-cost.ts
var dC = {
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
function fC(e) {
	let t = {
		characteristics: 0,
		skills: 0,
		talents: 0,
		total: 0
	};
	for (let n of e) {
		let e = mC(n);
		n.kind === "characteristic" ? t.characteristics += e : n.kind === "skill" ? t.skills += e : t.talents += e;
	}
	return t.total = t.characteristics + t.skills + t.talents, t;
}
function pC(e, t) {
	let n = vC(e, t), r = yC(e.skills, t.skills, dC.skill), i = bC(e.talents, t.talents);
	return {
		characteristics: n,
		skills: r,
		talents: i,
		total: n + r + i
	};
}
function mC(e) {
	let t = hC(e);
	return e.kind === "talent" ? _C(Math.max(0, Math.floor(e.current)), Math.max(0, Math.floor(e.baseAdvances))) : gC(t, e.kind === "characteristic" ? dC.characteristic : dC.skill);
}
function hC(e) {
	return Math.max(0, Math.floor(e.baseAdvances + e.current));
}
function gC(e, t) {
	let n = Math.max(0, Math.floor(e)), r = 0;
	for (let e = 0; e < n; e += 1) {
		let n = Math.min(Math.floor(e / 5), t.length - 1);
		r += t[n] ?? 0;
	}
	return r;
}
function _C(e, t = 0) {
	let n = Math.max(0, Math.floor(e)), r = Math.max(0, Math.floor(t)), i = 0;
	for (let e = 0; e < n; e += 1) i += (r + e + 1) * 100;
	return i;
}
function vC(e, t) {
	let n = 0;
	for (let r of Object.keys(Ac)) {
		let i = r, a = SC(e.characteristics[i] ?? 0, t.characteristics[i] ?? 0);
		n += gC(a, dC.characteristic);
	}
	return n;
}
function yC(e, t, n) {
	let r = xC(e), i = xC(t), a = 0;
	for (let [e, t] of r) {
		let r = SC(t, i.get(e) ?? 0);
		a += gC(r, n);
	}
	return a;
}
function bC(e, t) {
	let n = xC(e), r = xC(t), i = 0;
	for (let [e, t] of n) {
		let n = SC(t, r.get(e) ?? 0);
		i += _C(n);
	}
	return i;
}
function xC(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = xS(n.name), r = Math.floor(n.value);
		e && t.set(e, (t.get(e) ?? 0) + r);
	}
	return t;
}
function SC(e, t) {
	return Math.max(0, Math.floor(e) - Math.floor(t));
}
//#endregion
//#region src/state/npc-builder/advancements/index.ts
function CC(e) {
	let { baseActorDraftData: t, careers: n, manualAdvancementDeltas: r, settings: i, skillCharacteristics: a, skillGrantResolutions: o, talentMaximums: s } = e, c = K(() => YS({
		baseActorDraftData: t.value,
		careers: n.value,
		manualAdvancementDeltas: r.value,
		settings: i.value,
		skillCharacteristics: a.value,
		skillGrantResolutions: o.value,
		talentMaximums: s.value
	})), l = K(() => fC(c.value)), u = K(() => sC(c.value).length);
	function d(e, t) {
		v(e, iC(e, t));
	}
	function f() {
		for (let e of sC(c.value)) {
			let t = lC(c.value, e);
			t && v(t, e.total);
		}
	}
	function p(e, t) {
		let n = Math.max(0, Math.floor(Number.isFinite(t) ? t : 0)), r = e.run({ advancements: c.value }, n), i = cC(c.value, r.advancements);
		for (let e of i) {
			let t = lC(c.value, e);
			t && _(t, e.current);
		}
	}
	function m(e) {
		return o.value[e] ?? "";
	}
	function h(e) {
		a.value = QS(a.value, e);
	}
	function g(e) {
		s.value = $S(s.value, e);
	}
	function _(e, t) {
		let n = hS(e.kind, e.name);
		r.value[n] = XS(e, t);
	}
	function v(e, t) {
		let n = hS(e.kind, e.name);
		r.value[n] = ZS(e, t);
	}
	function y(e) {
		let t = hS(e.kind, e.name);
		delete r.value[t];
	}
	function b() {
		r.value = {};
	}
	function x(e, t) {
		let n = t.trim();
		if (!n) {
			delete o.value[e];
			return;
		}
		o.value[e] = n;
	}
	function S(e) {
		let t = `${e}:`;
		for (let e of Object.keys(o.value)) e.startsWith(t) && delete o.value[e];
	}
	return {
		adjustAdvancementCurrent: d,
		applyAutoAdvance: p,
		advancements: c,
		estimatedNpcXp: l,
		getSkillGrantResolution: m,
		hydrateSkillCharacteristics: h,
		hydrateTalentMaximums: g,
		maximizableTalentCount: u,
		maximizeTalents: f,
		removeSkillGrantResolutionsForCareer: S,
		resetAdvancementCurrent: y,
		resetAllAdvancementCurrents: b,
		setAdvancementCurrent: _,
		setAdvancementTotal: v,
		setSkillGrantResolution: x
	};
}
//#endregion
//#region src/functions/npc-builder/draft-summary.ts
function wC(e, t) {
	return e.find((e) => e.uuid === t) ?? null;
}
function TC(e) {
	return e.at(-1) ?? null;
}
function EC(e) {
	let t = e.finalCareer?.name, n = e.settings.includeSpeciesInName && e.selectedBaseActor?.species ? e.selectedBaseActor.species : "";
	return t && n ? `${n} ${t}` : t || (e.selectedBaseActor ? `${e.selectedBaseActor.name} NPC` : "New NPC");
}
function DC(e, t) {
	return e.trim() || t;
}
function OC(e) {
	return e.finalCareer?.img || e.selectedBaseActor?.prototypeTokenImg || e.selectedBaseActor?.img || "";
}
function kC(e, t) {
	return e || t;
}
function AC(e) {
	let t = {
		characteristics: 0,
		skills: 0,
		talents: 0,
		trappings: 0
	};
	for (let n of e) t.characteristics += n.grants.characteristics.length * n.quantity, t.skills += n.grants.skills.length * n.quantity, t.talents += n.grants.talents.length * n.quantity, t.trappings += n.grants.trappings.length * n.quantity;
	return t;
}
//#endregion
//#region src/state/npc-builder/draft.ts
function jC(e) {
	let { actorName: t, baseActors: n, careers: r, clearBaseDraftData: i, customSpells: a, customTraits: o, customTrappings: s, detectedSpells: c, ignoredBaseTraitKeys: l, magicLoreResolutions: u, removeSkillGrantResolutionsForCareer: d, selectedBaseActorUuid: f, selectedPortraitPath: p, settings: m, skillGrantResolutions: h, spellSelectionOverrides: g } = e, _ = K(() => wC(n.value, f.value)), v = K(() => TC(r.value)), y = K(() => EC({
		finalCareer: v.value,
		selectedBaseActor: _.value,
		settings: m.value
	})), b = K(() => DC(t.value, y.value)), x = K(() => OC({
		finalCareer: v.value,
		selectedBaseActor: _.value
	})), S = K(() => kC(p.value, x.value)), C = K(() => AC(r.value));
	function w(e) {
		let t = r.value.find((t) => t.uuid === e.uuid);
		if (t) {
			t.quantity = SS(t.quantity + 1);
			return;
		}
		r.value.push({
			...e,
			quantity: 1
		});
	}
	function ee(e) {
		return r.value.some((t) => t.uuid === e.uuid) ? !1 : (r.value.push({
			...e,
			quantity: 1
		}), !0);
	}
	function T(e, t) {
		let n = e + t, i = r.value[e];
		!i || n < 0 || n >= r.value.length || (r.value.splice(e, 1), r.value.splice(n, 0, i));
	}
	function te(e, t) {
		let n = r.value[e];
		!n || e === t || t < 0 || t >= r.value.length || (r.value.splice(e, 1), r.value.splice(t, 0, n));
	}
	function ne(e) {
		let [t] = r.value.splice(e, 1);
		t && d(t.uuid);
	}
	function re() {
		t.value = "", r.value = [], o.value = [], s.value = [], a.value = [], c.value = [], l.value = {}, u.value = {}, p.value = "", h.value = {}, g.value = {}, f.value = "", i();
	}
	function E(e) {
		n.value.some((t) => t.uuid === e.uuid) || n.value.push(e), ie(e.uuid);
	}
	function ie(e) {
		let t = e.trim();
		f.value !== t && (p.value = ""), f.value = t;
	}
	function ae(e) {
		p.value = e;
	}
	function oe(e, t) {
		let n = r.value[e];
		n && (n.quantity = SS(t));
	}
	return {
		addCareer: w,
		addCareerIfMissing: ee,
		finalActorName: b,
		finalCareer: v,
		finalPortraitPath: S,
		grantTotals: C,
		moveCareer: T,
		moveCareerToIndex: te,
		removeCareer: ne,
		resetDraft: re,
		selectBaseActor: E,
		selectBaseActorUuid: ie,
		selectedBaseActor: _,
		selectPortrait: ae,
		setCareerQuantity: oe,
		suggestedActorName: y
	};
}
//#endregion
//#region src/state/npc-builder/hydration.ts
function MC(e) {
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
		l.value = { ...e };
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
//#region src/functions/npc-builder/default-npc-builder-settings.ts
function NC() {
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
//#region src/state/npc-builder/settings.ts
var PC = NC(), FC = {
	advancements: [],
	optionalTraits: [],
	traits: [],
	trappings: []
}, IC = /\(([^)]+)\)/, LC = [
	"beasts",
	"death",
	"fire",
	"heavens",
	"metal",
	"life",
	"light",
	"shadow"
], RC = [
	"daemonology",
	"necromancy",
	"nurgle",
	"slaanesh",
	"tzeentch",
	"undivided"
];
function zC(e, t) {
	let n = e.trim(), r = n.toLocaleLowerCase();
	return r === "petty magic" ? KC({
		kind: "petty-magic",
		rawLore: "Petty Magic",
		source: t,
		sourceName: n
	}) : r.startsWith("arcane magic") ? KC({
		kind: "arcane-magic",
		rawLore: qC(n),
		source: t,
		sourceName: n
	}) : r.startsWith("spellcaster") ? KC({
		kind: "spellcaster",
		rawLore: qC(n),
		source: t,
		sourceName: n
	}) : null;
}
function BC(e) {
	return e.trim().replace(/^any\s+/i, "").replace(/^arcane\s+lore\s+of\s+/i, "").replace(/^arcane\s+lore$/i, "").replace(/^lore\s+of\s+/i, "").replaceAll(/\s+/g, " ").toLocaleLowerCase();
}
function VC(e) {
	return `${e.source}:${e.kind}:${e.sourceName}:${e.rawLore}`;
}
function HC(e, t) {
	return {
		...e,
		isAmbiguous: !1,
		normalizedLore: BC(t),
		rawLore: t.trim()
	};
}
function UC(e) {
	let t = BC(e);
	return t === "petty" ? "petty" : LC.includes(t) ? "eight-wind" : RC.includes(t) ? "dark" : "other";
}
function WC(e, t) {
	if (e.kind === "petty-magic") return t.filter((e) => e.category === "petty");
	let n = e.rawLore.trim().toLocaleLowerCase();
	return n.includes("dark") ? t.filter((e) => e.category === "dark") : n.includes("eight winds") ? t.filter((e) => e.category === "eight-wind") : t.filter((e) => e.category !== "petty");
}
function GC(e) {
	let t = e.trim().toLocaleLowerCase();
	return !t || t === "any" || t.includes("any ");
}
function KC(e) {
	let t = e.rawLore.trim();
	return {
		isAmbiguous: GC(t),
		kind: e.kind,
		normalizedLore: BC(t),
		rawLore: t,
		resolutionKey: VC({
			kind: e.kind,
			rawLore: t,
			source: e.source,
			sourceName: e.sourceName
		}),
		source: e.source,
		sourceName: e.sourceName
	};
}
function qC(e) {
	return IC.exec(e)?.[1]?.trim() ?? "";
}
//#endregion
//#region src/functions/npc-builder/spells/derive-magic-grants.ts
function JC(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.advancements) n.kind !== "talent" || n.baseAdvances + n.current <= 0 || YC(t, zC(n.name, "talent"), e);
	for (let n of e.traits) YC(t, zC(n.name, "trait"), e);
	return [...t.values()];
}
function YC(e, t, n) {
	if (!t) return;
	let r = n.loreResolutions[t.resolutionKey];
	e.set(t.resolutionKey, r ? HC(t, r) : t);
}
//#endregion
//#region src/functions/npc-builder/spells/derive-spells.ts
function XC(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.detectedSpells) t.set(n.key, {
		...n,
		selected: e.selectionOverrides[n.key] ?? e.autoSelectDetectedSpells
	});
	for (let n of e.customSpells) t.set(n.key, {
		...n,
		selected: e.selectionOverrides[n.key] ?? n.selected
	});
	return [...t.values()].sort(tw);
}
function ZC(e) {
	return e.filter((e) => e.selected);
}
function QC(e) {
	return e.spells.map((t) => ({
		...t,
		selected: e.selectionOverrides[t.key] ?? e.autoSelectDetectedSpells
	}));
}
function $C(e) {
	let t = e.detectedSpells.find((t) => ew(t, e.spell));
	return t ? {
		customSpells: e.customSpells,
		selectedDetectedSpellKey: t.key
	} : e.customSpells.some((t) => t.key === e.spell.key) ? {
		customSpells: e.customSpells,
		selectedDetectedSpellKey: ""
	} : {
		customSpells: [...e.customSpells, {
			...e.spell,
			selected: !0
		}],
		selectedDetectedSpellKey: ""
	};
}
function ew(e, t) {
	return e.sourceUuid && e.sourceUuid === t.sourceUuid ? !0 : bS(e.name, t.name);
}
function tw(e, t) {
	return e.loreName === t.loreName ? e.name.localeCompare(t.name) : e.loreName.localeCompare(t.loreName);
}
//#endregion
//#region src/state/npc-builder/spells.ts
function nw(e) {
	let { advancements: t, customSpells: n, detectedSpells: r, magicLoreResolutions: i, settings: a, spellSelectionOverrides: o, traits: s } = e, c = K(() => JC({
		advancements: t.value,
		loreResolutions: i.value,
		traits: s.value
	})), l = K(() => c.value.length > 0), u = K(() => XC({
		autoSelectDetectedSpells: a.value.autoSelectGrantedSpells,
		customSpells: n.value,
		detectedSpells: r.value,
		selectionOverrides: o.value
	})), d = K(() => ZC(u.value));
	function f(e) {
		let t = $C({
			customSpells: n.value,
			detectedSpells: r.value,
			spell: e
		});
		if (t.selectedDetectedSpellKey) {
			o.value[t.selectedDetectedSpellKey] = !0;
			return;
		}
		n.value = t.customSpells;
	}
	function p(e) {
		r.value = QC({
			autoSelectDetectedSpells: a.value.autoSelectGrantedSpells,
			selectionOverrides: o.value,
			spells: e
		});
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
//#region src/functions/npc-builder/traits/derive-traits.ts
function rw(e) {
	let t = /* @__PURE__ */ new Map();
	if (e.allowBaseActorTraits) for (let n of e.baseActorDraftData.traits) {
		let r = sw(n);
		e.ignoredBaseTraitKeys[r] || t.set(r, uw(n, r, !1));
	}
	for (let n of e.customTraits) lw([...t.values()], n.name) || t.set(n.key, { ...n });
	return [...t.values()].map((t) => ({
		...t,
		config: yS(t.config, e.traitConfigOverrides[t.key])
	})).sort(dw);
}
function iw(e) {
	return e.allowBaseActorTraits ? [...e.baseActorDraftData.traits.filter((t) => e.ignoredBaseTraitKeys[sw(t)]).map((t) => {
		let n = sw(t);
		return {
			...uw(t, n, !0),
			config: yS(t.config, e.traitConfigOverrides[n])
		};
	}), ...e.selectedTraits] : e.selectedTraits;
}
function aw(e) {
	return e.optionalTraits.map((e) => ({
		config: e.config,
		img: e.img,
		name: e.name,
		uuid: e.uuid
	})).sort((e, t) => e.name.localeCompare(t.name));
}
function ow(e, t) {
	return {
		config: t.config,
		ignored: !1,
		key: `${e}:${t.uuid || xS(t.name)}`,
		name: t.name,
		source: e,
		sourceUuid: t.uuid
	};
}
function sw(e) {
	return `base:${e.uuid || xS(e.name)}`;
}
function cw(e, t) {
	return e.find((e) => bS(e.name, t));
}
function lw(e, t) {
	return cw(e, t) !== void 0;
}
function uw(e, t, n) {
	return {
		config: e.config,
		ignored: n,
		key: t,
		name: e.name,
		source: "base",
		sourceUuid: e.uuid
	};
}
function dw(e, t) {
	return e.source === t.source ? e.name.localeCompare(t.name) : e.source.localeCompare(t.source);
}
//#endregion
//#region src/state/npc-builder/traits.ts
function fw(e) {
	let { baseActorDraftData: t, customTraits: n, ignoredBaseTraitKeys: r, quickTraits: i, settings: a, traitConfigOverrides: o } = e, s = K(() => rw({
		allowBaseActorTraits: a.value.allowBaseActorTraits,
		baseActorDraftData: t.value,
		customTraits: n.value,
		ignoredBaseTraitKeys: r.value,
		traitConfigOverrides: o.value
	})), c = K(() => iw({
		allowBaseActorTraits: a.value.allowBaseActorTraits,
		baseActorDraftData: t.value,
		ignoredBaseTraitKeys: r.value,
		selectedTraits: s.value,
		traitConfigOverrides: o.value
	})), l = K(() => aw(t.value));
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
		let i = ow(e, t);
		if (!r) {
			d(i.key), x(t.name, !0);
			return;
		}
		x(t.name, !1) || n.value.find((e) => e.key === i.key) || h(i);
	}
	function h(e) {
		lw(s.value, e.name) || n.value.some((t) => t.key === e.key) || n.value.push(e);
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
		return cw(l.value, e);
	}
	function y(e) {
		return cw(i.value, e);
	}
	function b(e) {
		let n = cw(t.value.traits, e);
		if (!n) return null;
		let i = sw(n);
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
//#endregion
//#region src/functions/npc-builder/trapping-resolution.ts
function pw(e, t = "trapping") {
	return {
		candidates: [],
		searchTerms: _w(e),
		selectedCandidateUuid: "",
		selectedItemType: t,
		selectedName: e.trim(),
		status: "fallback"
	};
}
function mw(e) {
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
function hw(e) {
	return {
		candidates: [],
		searchTerms: _w(e),
		selectedCandidateUuid: "",
		selectedItemType: "trapping",
		selectedName: e.trim(),
		status: "unresolved"
	};
}
function gw(e, t) {
	let n = _w(e), r = yw(n, t), i = r.filter((e) => e.matchKind === "exact");
	return i.length === 1 ? xw("matched", n, i[0]) : i.length > 1 ? xw("ambiguous", n, i[0], { candidates: r }) : r.length ? {
		candidates: r,
		searchTerms: n,
		selectedCandidateUuid: "",
		selectedItemType: "trapping",
		selectedName: e.trim(),
		status: "ambiguous"
	} : pw(e);
}
function _w(e) {
	let t = e.split(/\s+or\s+/i).map((e) => e.trim()).filter(Boolean);
	return t.length ? Tw(t) : [e.trim()].filter(Boolean);
}
function vw(e, t) {
	if (Sw(e) === Sw(t)) return "exact";
	let n = Cw(e), r = Cw(t);
	if (!n || !r) return null;
	if (n === r || n.includes(r) || r.includes(n)) return "near";
	let i = n.split(" "), a = new Set(r.split(" "));
	return i.every((e) => a.has(e)) ? "near" : null;
}
function yw(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) for (let e of t) {
		let t = vw(r, e.name);
		t && n.get(e.uuid)?.matchKind !== "exact" && n.set(e.uuid, {
			itemType: e.itemType,
			matchKind: t,
			name: e.name,
			searchTerm: r,
			sourceLabel: e.sourceLabel,
			uuid: e.uuid
		});
	}
	return [...n.values()].sort(bw);
}
function bw(e, t) {
	return e.matchKind === t.matchKind ? e.name.localeCompare(t.name) : e.matchKind === "exact" ? -1 : 1;
}
function xw(e, t, n, r = {}) {
	return {
		candidates: r.candidates ?? (n ? [n] : []),
		searchTerms: t,
		selectedCandidateUuid: n?.uuid ?? "",
		selectedItemType: n?.itemType ?? "trapping",
		selectedName: n?.name ?? "",
		status: e
	};
}
function Sw(e) {
	return e.trim().toLocaleLowerCase().replaceAll(/\s+/g, " ");
}
function Cw(e) {
	return Sw(e).replaceAll("&", " and ").replaceAll(/[(),.:;[\]]/g, " ").replaceAll(/\b(a|an|the|some|pair of|pairs of)\b/g, " ").split(/\s+/).map(ww).filter(Boolean).join(" ");
}
function ww(e) {
	return e.endsWith("ies") && e.length > 4 ? `${e.slice(0, -3)}y` : e.endsWith("s") && !e.endsWith("ss") && e.length > 3 ? e.slice(0, -1) : e;
}
function Tw(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/functions/npc-builder/trappings/derive-trappings.ts
function Ew(e) {
	let t = /* @__PURE__ */ new Map();
	kw(t, e), Aw(t, e);
	for (let n of e.customTrappings) t.set(n.key, { ...n });
	return [...t.values()].map((t) => jw(t, e)).sort(Mw);
}
function Dw(e, t) {
	let n = e.resolution.candidates.find((e) => e.uuid === t);
	return n ? {
		...e.resolution,
		selectedCandidateUuid: n.uuid,
		selectedItemType: n.itemType,
		selectedName: n.name,
		status: e.resolution.status === "matched" ? "matched" : "ambiguous"
	} : null;
}
function Ow(e) {
	return {
		...pw(e.name, e.itemType),
		candidates: e.resolution.candidates,
		searchTerms: e.resolution.searchTerms
	};
}
function kw(e, t) {
	if (t.settings.allowBaseActorTrappings) for (let n of t.baseActorDraftData.trappings) {
		let t = `base:${n.uuid || xS(n.name)}`;
		e.set(t, {
			ignored: !1,
			itemType: n.itemType,
			key: t,
			name: n.name,
			quantity: n.quantity,
			resolution: mw({
				itemType: n.itemType,
				name: n.name,
				uuid: n.uuid
			}),
			source: "base",
			sourceUuid: n.uuid
		});
	}
}
function Aw(e, t) {
	for (let n of t.careers) for (let r of n.grants.trappings) {
		let i = `career:${xS(r)}`, a = e.get(i);
		if (a) {
			a.quantity += n.quantity;
			continue;
		}
		e.set(i, {
			ignored: !1,
			itemType: "trapping",
			key: i,
			name: r,
			quantity: n.quantity,
			resolution: t.trappingResolutionOverrides[i] ?? hw(r),
			source: "career",
			sourceUuid: ""
		});
	}
}
function jw(e, t) {
	let n = t.trappingOverrides[e.key];
	return {
		...e,
		ignored: n?.ignored ?? e.ignored,
		quantity: SS(n?.quantity ?? e.quantity),
		resolution: t.trappingResolutionOverrides[e.key] ?? e.resolution
	};
}
function Mw(e, t) {
	return e.source === t.source ? e.name.localeCompare(t.name) : e.source.localeCompare(t.source);
}
//#endregion
//#region src/state/npc-builder/trappings.ts
function Nw(e) {
	let { baseActorDraftData: t, careers: n, customTrappings: r, settings: i, trappingOverrides: a, trappingResolutionOverrides: o } = e, s = K(() => Ew({
		baseActorDraftData: t.value,
		careers: n.value,
		customTrappings: r.value,
		settings: i.value,
		trappingOverrides: a.value,
		trappingResolutionOverrides: o.value
	}));
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
			quantity: SS(t)
		};
	}
	function f(e, t) {
		let n = s.value.find((t) => t.key === e), r = n ? Dw(n, t) : null;
		r && (o.value[e] = r);
	}
	function p(e) {
		let t = s.value.find((t) => t.key === e);
		t && (o.value[e] = Ow(t));
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
//#region src/state/npc-builder/index.ts
var Pw = cc("npc-builder", () => {
	let e = /* @__PURE__ */ N(""), t = /* @__PURE__ */ N([]), n = /* @__PURE__ */ N({}), r = /* @__PURE__ */ N({ ...FC }), i = /* @__PURE__ */ N([]), a = /* @__PURE__ */ N([]), o = /* @__PURE__ */ N([]), s = /* @__PURE__ */ N([]), c = /* @__PURE__ */ N([]), l = /* @__PURE__ */ N([]), u = /* @__PURE__ */ N(""), d = /* @__PURE__ */ N({ ...PC }), f = /* @__PURE__ */ N(""), p = /* @__PURE__ */ N({}), m = /* @__PURE__ */ N({}), h = /* @__PURE__ */ N({}), g = /* @__PURE__ */ N([]), _ = /* @__PURE__ */ N([]), v = /* @__PURE__ */ N({}), y = /* @__PURE__ */ N({}), b = /* @__PURE__ */ N({}), x = /* @__PURE__ */ N({}), S = /* @__PURE__ */ N({}), C = /* @__PURE__ */ N({}), w = CC({
		baseActorDraftData: r,
		careers: a,
		manualAdvancementDeltas: n,
		settings: d,
		skillCharacteristics: p,
		skillGrantResolutions: h,
		talentMaximums: m
	}), ee = MC({
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
	}), T = jC({
		actorName: e,
		baseActors: i,
		careers: a,
		clearBaseDraftData: ee.clearBaseDraftData,
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
	}), te = fw({
		baseActorDraftData: r,
		customTraits: o,
		ignoredBaseTraitKeys: v,
		quickTraits: l,
		settings: d,
		traitConfigOverrides: x
	}), ne = Nw({
		baseActorDraftData: r,
		careers: a,
		customTrappings: s,
		settings: d,
		trappingOverrides: S,
		trappingResolutionOverrides: C
	}), re = nw({
		advancements: w.advancements,
		customSpells: _,
		detectedSpells: g,
		magicLoreResolutions: y,
		settings: d,
		spellSelectionOverrides: b,
		traits: te.traits
	});
	return {
		actorName: e,
		actorFolders: t,
		addCareer: T.addCareer,
		addCareerIfMissing: T.addCareerIfMissing,
		addCustomSpell: re.addCustomSpell,
		addCustomTrait: te.addCustomTrait,
		addCustomTrapping: ne.addCustomTrapping,
		adjustAdvancementCurrent: w.adjustAdvancementCurrent,
		advancements: w.advancements,
		applyAutoAdvance: w.applyAutoAdvance,
		baseActorDraftData: r,
		baseActors: i,
		buildTraits: te.buildTraits,
		careers: a,
		clearBaseDraftData: ee.clearBaseDraftData,
		customSpells: _,
		customTraits: o,
		customTrappings: s,
		estimatedNpcXp: w.estimatedNpcXp,
		finalActorName: T.finalActorName,
		finalCareer: T.finalCareer,
		finalPortraitPath: T.finalPortraitPath,
		getSkillGrantResolution: w.getSkillGrantResolution,
		grantTotals: T.grantTotals,
		hasMagicAccess: re.hasMagicAccess,
		hydrateActorFolders: ee.hydrateActorFolders,
		hydrateBaseActorDraftData: ee.hydrateBaseActorDraftData,
		hydrateBaseActors: ee.hydrateBaseActors,
		hydrateDetectedSpells: re.hydrateDetectedSpells,
		hydrateItemFolders: ee.hydrateItemFolders,
		hydrateQuickTraits: ee.hydrateQuickTraits,
		hydrateSettings: ee.hydrateSettings,
		hydrateSkillCharacteristics: w.hydrateSkillCharacteristics,
		hydrateTalentMaximums: w.hydrateTalentMaximums,
		itemFolders: c,
		magicGrants: re.magicGrants,
		magicLoreResolutions: y,
		maximizableTalentCount: w.maximizableTalentCount,
		maximizeTalents: w.maximizeTalents,
		moveCareer: T.moveCareer,
		moveCareerToIndex: T.moveCareerToIndex,
		optionalTraits: te.optionalTraits,
		quickTraits: l,
		removeCareer: T.removeCareer,
		removeCustomSpell: re.removeCustomSpell,
		removeCustomTrait: te.removeCustomTrait,
		removeCustomTrapping: ne.removeCustomTrapping,
		resetAdvancementCurrent: w.resetAdvancementCurrent,
		resetAllAdvancementCurrents: w.resetAllAdvancementCurrents,
		resetDraft: T.resetDraft,
		selectBaseActor: T.selectBaseActor,
		selectBaseActorUuid: T.selectBaseActorUuid,
		selectedBaseActor: T.selectedBaseActor,
		selectedBaseActorUuid: f,
		selectedPortraitPath: u,
		selectedSpells: re.selectedSpells,
		selectPortrait: T.selectPortrait,
		selectTrappingResolutionCandidate: ne.selectTrappingResolutionCandidate,
		setAdvancementCurrent: w.setAdvancementCurrent,
		setAdvancementTotal: w.setAdvancementTotal,
		setBaseTraitIgnored: te.setBaseTraitIgnored,
		setCareerQuantity: T.setCareerQuantity,
		setMagicGrantLoreResolution: re.setMagicGrantLoreResolution,
		setOptionalTraitSelected: te.setOptionalTraitSelected,
		setQuickTraitSelected: te.setQuickTraitSelected,
		setSkillGrantResolution: w.setSkillGrantResolution,
		setSpellSelected: re.setSpellSelected,
		setTraitConfig: te.setTraitConfig,
		setTrappingFallback: ne.setTrappingFallback,
		setTrappingIgnored: ne.setTrappingIgnored,
		setTrappingQuantity: ne.setTrappingQuantity,
		setTrappingResolution: ne.setTrappingResolution,
		settings: d,
		spells: re.spells,
		suggestedActorName: T.suggestedActorName,
		traits: te.traits,
		trappings: ne.trappings
	};
}), Fw = { class: "dui-fieldset-legend" }, Iw = [
	"checked",
	"disabled",
	"onChange"
], Lw = { class: "dui-card-actions" }, Rw = /* @__PURE__ */ I({
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
		function r(e, t) {
			let r = t.currentTarget;
			n("lowerCareerSelected", e, r.checked);
		}
		return (t, i) => (z(), B("section", null, [
			H("p", null, k(e.prompt.droppedCareer.name) + " appears to belong to the " + k(e.prompt.droppedCareer.careerGroup) + " career track. The following lower-tier candidates were found. ", 1),
			(z(!0), B(R, null, L(e.candidateGroups, (t) => (z(), B("fieldset", {
				key: t.level,
				class: "dui-fieldset"
			}, [H("legend", Fw, "Tier " + k(t.level || "Unknown"), 1), (z(!0), B(R, null, L(t.candidates, (t) => (z(), B("label", {
				key: t.uuid,
				class: "dui-label"
			}, [H("input", {
				class: "dui-checkbox dui-checkbox-sm",
				checked: e.isCareerQueued(t.uuid) || e.isLowerCareerSelected(t.uuid),
				disabled: e.isCareerQueued(t.uuid),
				type: "checkbox",
				onChange: (e) => r(t, e)
			}, null, 40, Iw), H("span", null, [H("strong", null, k(t.name), 1), H("small", null, [W(k(t.careerGroup || "Career") + " ", 1), e.isCareerQueued(t.uuid) ? (z(), B(R, { key: 0 }, [W(" already queued ")], 64)) : G("", !0)])])]))), 128))]))), 128)),
			H("div", Lw, [H("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: i[0] ||= (e) => n("addDroppedOnly")
			}, " Add Dropped Only "), H("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: i[1] ||= (e) => n("addSelected")
			}, " Add Selected ")])
		]));
	}
}), zw = ["aria-labelledby"], Bw = { class: "dui-modal-box" }, Vw = ["id"], Hw = { class: "dui-modal-action" }, Uw = /* @__PURE__ */ I({
	__name: "NpcBuilderDialog",
	props: {
		open: { type: Boolean },
		title: {}
	},
	emits: ["close"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ N(null), a = fr();
		return Kn(() => n.open, async (e) => {
			await Dn();
			let t = i.value;
			if (e && !t?.open) {
				t?.showModal();
				return;
			}
			!e && t?.open && t.close();
		}, { immediate: !0 }), Ar(() => {
			i.value?.open && i.value.close();
		}), (t, n) => (z(), B("dialog", {
			ref_key: "dialogElement",
			ref: i,
			"aria-labelledby": P(a),
			"aria-modal": "true",
			class: "dui-modal",
			onCancel: n[1] ||= qo((e) => r("close"), ["prevent"])
		}, [H("section", Bw, [
			H("h2", {
				id: P(a),
				class: "dui-card-title"
			}, k(e.title), 9, Vw),
			Vr(t.$slots, "default"),
			H("div", Hw, [H("button", {
				class: "dui-btn",
				type: "button",
				onClick: n[0] ||= (e) => r("close")
			}, "Close")])
		])], 40, zw));
	}
}), Ww = /* @__PURE__ */ new Map();
function Gw(e) {
	let t = e.id.trim();
	if (!t) throw Error("NPC auto-advance strategies must have an id.");
	Ww.set(t, {
		...e,
		id: t
	});
}
function Kw() {
	return [...Ww.values()].sort((e, t) => e.name.localeCompare(t.name));
}
function qw(e) {
	return Ww.get(e) ?? null;
}
function Jw(e, t) {
	return Zw(e, t, {
		kinds: ["skill"],
		respectTalentMaximums: !1
	});
}
function Yw(e, t) {
	return Zw(Zw(e, t, {
		kinds: ["talent"],
		respectTalentMaximums: !0
	}), t, {
		kinds: ["skill"],
		respectTalentMaximums: !1
	});
}
function Xw(e, t) {
	return Zw(e, t, {
		kinds: ["characteristic"],
		respectTalentMaximums: !1
	});
}
function Zw(e, t, n) {
	let r = Math.max(0, Math.floor(Number.isFinite(t) ? t : 0)), i = eT(e.advancements), a = fC(i).total;
	if (a >= r) return { advancements: i };
	let o = !0;
	for (; o;) {
		o = !1;
		for (let e of i) {
			if (!n.kinds.includes(e.kind)) continue;
			let t = Qw(e, n);
			if (!t) continue;
			let i = mC(t) - mC(e);
			i <= 0 || a + i > r || (e.current = t.current, a += i, o = !0);
		}
	}
	return { advancements: i };
}
function Qw(e, t) {
	return t.respectTalentMaximums && e.kind === "talent" && !$w(e) ? null : {
		...e,
		current: e.current + nC(e)
	};
}
function $w(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" ? rC(e) < t : !1;
}
function eT(e) {
	return e.map((e) => ({
		...e,
		sources: e.sources.map((e) => ({ ...e }))
	}));
}
Gw({
	description: "Cycles visible Skill rows evenly until no next skill increase fits the target XP.",
	id: "skill-master",
	name: "Skill Master",
	run: Jw
}), Gw({
	description: "Raises visible Talent rows evenly up to known maximums, then spends any remaining XP like Skill Master.",
	id: "gifted-and-talented",
	name: "Gifted & Talented",
	run: Yw
}), Gw({
	description: "Cycles visible Characteristic rows evenly until no next characteristic increase fits the target XP.",
	id: "all-natural",
	name: "All Natural",
	run: Xw
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderAdvancementsTab/advancement-display.ts
function tT(e) {
	let t = e.current - e.careerValue, n = [...e.sources].sort((e, t) => cT(e.kind) - cT(t.kind)).map((e) => `${e.label} ${lT(e.count)}`);
	return t !== 0 && n.push(`Manual ${lT(t)}`), n.length ? n.join(", ") : e.includedFromBase ? "Base actor" : "-";
}
function nT(e) {
	return OS(e) !== null;
}
function rT(e) {
	return Math.max(e.minimumTotal, e.baseValue + e.current);
}
function iT(e) {
	return rT(e);
}
function aT(e) {
	return e.talentMaximumLabel ?? "Unknown";
}
function oT(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" && iT(e) > t;
}
function sT(e) {
	return mC(e);
}
function cT(e) {
	return e === "characteristic" ? 0 : e === "career" ? 1 : 2;
}
function lT(e) {
	return e > 0 ? `+${e}` : `${e}`;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSection.vue?vue&type=script&setup=true&lang.ts
var uT = { class: "dui-card dui-card-border dui-card-sm" }, dT = { class: "dui-card-body" }, fT = { class: "dui-card-title" }, pT = {
	key: 0,
	class: "dui-badge dui-badge-primary"
}, mT = { key: 0 }, hT = /* @__PURE__ */ I({
	__name: "NpcBuilderSection",
	props: {
		description: { default: "" },
		number: { default: "" },
		title: {}
	},
	setup(e) {
		return (t, n) => (z(), B("section", uT, [H("div", dT, [
			H("h2", fT, [e.number ? (z(), B("span", pT, k(e.number), 1)) : G("", !0), W(" " + k(e.title), 1)]),
			e.description ? (z(), B("p", mT, k(e.description), 1)) : G("", !0),
			Vr(t.$slots, "default")
		])]));
	}
}), gT = {
	key: 0,
	class: "dui-card-actions"
}, _T = {
	key: 1,
	class: "dui-alert dui-alert-info"
}, vT = { class: "dui-list" }, yT = { class: "dui-list-col-grow" }, bT = {
	key: 0,
	class: "dui-badge dui-badge-info"
}, xT = {
	key: 1,
	class: "dui-badge dui-badge-warning"
}, ST = { class: "dui-join" }, CT = ["disabled", "onClick"], wT = [
	"aria-label",
	"value",
	"onInput"
], TT = ["onClick"], ET = ["disabled", "onClick"], DT = {
	key: 2,
	class: "dui-alert"
}, OT = /* @__PURE__ */ I({
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
		return (t, i) => (z(), V(hT, {
			number: e.sectionNumber,
			title: e.title
		}, {
			default: F(() => [
				e.manualAdvanceCount ? (z(), B("div", gT, [H("span", null, k(e.manualAdvanceCount) + " manual edits", 1), H("button", {
					class: "dui-btn dui-btn-sm",
					type: "button",
					onClick: i[0] ||= (e) => n("resetAll")
				}, " Reset All Advances ")])) : G("", !0),
				e.estimatedNpcXp ? (z(), B("div", _T, [
					H("strong", null, "Estimated NPC XP " + k(e.estimatedNpcXp.total), 1),
					H("span", null, k(e.estimatedNpcXp.characteristics) + " characteristics", 1),
					H("span", null, k(e.estimatedNpcXp.skills) + " skills", 1),
					H("span", null, k(e.estimatedNpcXp.talents) + " talents", 1)
				])) : G("", !0),
				H("ul", vT, [(z(!0), B(R, null, L(e.entries, (t) => (z(), B("li", {
					key: `${t.kind}:${t.name}`,
					class: "dui-list-row"
				}, [H("div", yT, [
					H("strong", null, k(t.name), 1),
					t.current === t.careerValue ? G("", !0) : (z(), B("span", bT, " Manual edit ")),
					e.showSkillSpecializationBadges && P(nT)(t.name) ? (z(), B("span", xT, " Needs specialization ")) : G("", !0),
					H("span", null, " Base " + k(t.baseValue) + " · Advances " + k(t.current) + " · XP " + k(P(sT)(t)), 1),
					H("small", null, "Sources: " + k(P(tT)(t)), 1)
				]), H("div", ST, [
					H("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						disabled: P(rT)(t) <= t.minimumTotal,
						title: "Decrease by 5",
						type: "button",
						onClick: (e) => n("adjustCurrent", t, -1)
					}, " -5 ", 8, CT),
					H("input", {
						class: "dui-join-item dui-input dui-input-sm",
						"aria-label": `Total ${t.name}`,
						value: P(rT)(t),
						min: "0",
						type: "number",
						onInput: (e) => r(t, e)
					}, null, 40, wT),
					H("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						title: "Increase by 5",
						type: "button",
						onClick: (e) => n("adjustCurrent", t, 1)
					}, " +5 ", 8, TT),
					H("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						disabled: t.current === t.careerValue,
						title: "Reset to career value",
						type: "button",
						onClick: (e) => n("resetCurrent", t)
					}, " Reset ", 8, ET)
				])]))), 128))]),
				e.entries.length ? G("", !0) : (z(), B("p", DT, "No " + k(e.title.toLowerCase()) + " to advance yet.", 1))
			]),
			_: 1
		}, 8, ["number", "title"]));
	}
}), kT = { class: "dui-fieldset" }, AT = ["value"], jT = { class: "dui-fieldset" }, MT = ["value"], NT = ["value"], PT = { key: 0 }, FT = { class: "dui-card-actions" }, IT = ["disabled"], LT = /* @__PURE__ */ I({
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
		return (t, a) => (z(), V(hT, {
			description: "Spend toward a target without exceeding it. Existing manual edits are preserved.",
			number: "4",
			title: "Auto Advance"
		}, {
			default: F(() => [
				H("fieldset", kT, [a[1] ||= H("legend", { class: "dui-fieldset-legend" }, "Target XP", -1), H("input", {
					"aria-label": "Target XP",
					class: "dui-input dui-input-sm",
					value: e.targetXp,
					min: "0",
					type: "number",
					onInput: r
				}, null, 40, AT)]),
				H("fieldset", jT, [a[2] ||= H("legend", { class: "dui-fieldset-legend" }, "Strategy", -1), H("select", {
					"aria-label": "Auto advance strategy",
					class: "dui-select dui-select-sm",
					value: e.selectedAutoAdvanceStrategyId,
					onChange: i
				}, [(z(!0), B(R, null, L(e.autoAdvanceStrategies, (e) => (z(), B("option", {
					key: e.id,
					value: e.id
				}, k(e.name), 9, NT))), 128))], 40, MT)]),
				e.selectedAutoAdvanceStrategy ? (z(), B("p", PT, k(e.selectedAutoAdvanceStrategy.description), 1)) : G("", !0),
				H("div", FT, [H("button", {
					class: "dui-btn dui-btn-primary dui-btn-sm",
					disabled: !e.canRunAutoAdvance,
					title: "Advance rows as close to the target XP as possible without going over",
					type: "button",
					onClick: a[0] ||= (e) => n("runAutoAdvance")
				}, " Auto Advance ", 8, IT)])
			]),
			_: 1
		}));
	}
}), RT = { class: "dui-card-actions" }, zT = ["disabled"], BT = { class: "dui-list" }, VT = { class: "dui-list-col-grow" }, HT = {
	key: 0,
	class: "dui-badge dui-badge-info"
}, UT = {
	key: 1,
	class: "dui-badge dui-badge-warning"
}, WT = { class: "dui-join" }, GT = ["disabled", "onClick"], KT = [
	"aria-label",
	"value",
	"onInput"
], qT = ["onClick"], JT = ["disabled", "onClick"], YT = {
	key: 0,
	class: "dui-alert"
}, XT = /* @__PURE__ */ I({
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
		return (t, i) => (z(), V(hT, {
			number: "3",
			title: "Talents"
		}, {
			default: F(() => [
				H("div", RT, [H("span", null, k(e.maximizableTalentCount) + " below maximum", 1), H("button", {
					class: "dui-btn dui-btn-sm",
					disabled: e.maximizableTalentCount === 0,
					title: "Raise talents with known maximums to their maximum ranks",
					type: "button",
					onClick: i[0] ||= (e) => n("maximizeTalents")
				}, " Maximize Talents ", 8, zT)]),
				H("ul", BT, [(z(!0), B(R, null, L(e.talents, (e) => (z(), B("li", {
					key: `${e.kind}:${e.name}`,
					class: "dui-list-row"
				}, [H("div", VT, [
					H("strong", null, k(e.name), 1),
					e.current === e.careerValue ? G("", !0) : (z(), B("span", HT, " Manual edit ")),
					H("span", null, " Ranks " + k(P(iT)(e)) + " · Maximum " + k(P(aT)(e)) + " · XP " + k(P(sT)(e)), 1),
					H("small", null, "Sources: " + k(P(tT)(e)), 1),
					P(oT)(e) ? (z(), B("span", UT, " Over maximum ")) : G("", !0)
				]), H("div", WT, [
					H("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						disabled: P(iT)(e) <= e.minimumTotal,
						title: "Decrease by 1",
						type: "button",
						onClick: (t) => n("adjustCurrent", e, -1)
					}, " -1 ", 8, GT),
					H("input", {
						class: "dui-join-item dui-input dui-input-sm",
						"aria-label": `Ranks ${e.name}`,
						value: P(iT)(e),
						min: "0",
						type: "number",
						onInput: (t) => r(e, t)
					}, null, 40, KT),
					H("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						title: "Increase by 1",
						type: "button",
						onClick: (t) => n("adjustCurrent", e, 1)
					}, " +1 ", 8, qT),
					H("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						disabled: e.current === e.careerValue,
						title: "Reset to career value",
						type: "button",
						onClick: (t) => n("resetCurrent", e)
					}, " Reset ", 8, JT)
				])]))), 128))]),
				e.talents.length ? G("", !0) : (z(), B("p", YT, "No talents to advance yet."))
			]),
			_: 1
		}));
	}
}), ZT = /* @__PURE__ */ I({
	__name: "NpcBuilderAdvancementsTab",
	setup(e) {
		let t = Pw(), { advancements: n, estimatedNpcXp: r, maximizableTalentCount: i } = lc(t), a = Kw(), o = /* @__PURE__ */ N("skill-master"), s = /* @__PURE__ */ N(0), c = K(() => n.value.filter((e) => e.kind === "characteristic")), l = K(() => n.value.filter((e) => e.kind === "skill")), u = K(() => n.value.filter((e) => e.kind === "talent")), d = K(() => n.value.filter((e) => e.current !== e.careerValue).length), f = K(() => qw(o.value) ?? a[0] ?? null), p = K(() => f.value !== null && s.value > r.value.total);
		Kn(() => r.value.total, (e) => {
			s.value < e && (s.value = e);
		}, { immediate: !0 });
		function m() {
			let e = f.value;
			e && t.applyAutoAdvance(e, s.value);
		}
		return (e, n) => (z(), B("section", null, [
			U(OT, {
				entries: c.value,
				"estimated-npc-xp": P(r),
				"manual-advance-count": d.value,
				"section-number": "1",
				title: "Characteristics",
				onAdjustCurrent: P(t).adjustAdvancementCurrent,
				onResetAll: P(t).resetAllAdvancementCurrents,
				onResetCurrent: P(t).resetAdvancementCurrent,
				onTotalChange: P(t).setAdvancementTotal
			}, null, 8, [
				"entries",
				"estimated-npc-xp",
				"manual-advance-count",
				"onAdjustCurrent",
				"onResetAll",
				"onResetCurrent",
				"onTotalChange"
			]),
			n[2] ||= H("div", { class: "dui-divider" }, null, -1),
			U(OT, {
				entries: l.value,
				"section-number": "2",
				"show-skill-specialization-badges": "",
				title: "Skills",
				onAdjustCurrent: P(t).adjustAdvancementCurrent,
				onResetCurrent: P(t).resetAdvancementCurrent,
				onTotalChange: P(t).setAdvancementTotal
			}, null, 8, [
				"entries",
				"onAdjustCurrent",
				"onResetCurrent",
				"onTotalChange"
			]),
			n[3] ||= H("div", { class: "dui-divider" }, null, -1),
			U(XT, {
				"maximizable-talent-count": P(i),
				talents: u.value,
				onAdjustCurrent: P(t).adjustAdvancementCurrent,
				onMaximizeTalents: P(t).maximizeTalents,
				onResetCurrent: P(t).resetAdvancementCurrent,
				onTotalChange: P(t).setAdvancementTotal
			}, null, 8, [
				"maximizable-talent-count",
				"talents",
				"onAdjustCurrent",
				"onMaximizeTalents",
				"onResetCurrent",
				"onTotalChange"
			]),
			n[4] ||= H("div", { class: "dui-divider" }, null, -1),
			U(LT, {
				"auto-advance-strategies": P(a),
				"can-run-auto-advance": p.value,
				"selected-auto-advance-strategy": f.value,
				"selected-auto-advance-strategy-id": o.value,
				"target-xp": s.value,
				onRunAutoAdvance: m,
				onStrategyChange: n[0] ||= (e) => o.value = e,
				onTargetXpChange: n[1] ||= (e) => s.value = e
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
function QT(e) {
	return [
		`Ch ${e.grants.characteristics.length}`,
		`Sk ${e.grants.skills.length}`,
		`Ta ${e.grants.talents.length}`,
		`Tr ${e.grants.trappings.length}`
	].join(" / ");
}
function $T(e) {
	let t = e.slice(0, 3).join(", "), n = e.length - 3;
	return e.length ? n > 0 ? `${t}, +${n}` : t : "-";
}
function eE(e) {
	return e.split(/\s+/).map((e) => e.at(0)).filter(Boolean).slice(0, 2).join("").toLocaleUpperCase();
}
function tE(e) {
	return `${e.label}\n${e.img}`;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/BaseActorPanel.vue?vue&type=script&setup=true&lang.ts
var nE = { class: "dui-fieldset" }, rE = ["value"], iE = { class: "dui-fieldset" }, aE = ["disabled", "value"], oE = { value: "" }, sE = ["value"], cE = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, lE = {
	key: 1,
	class: "dui-alert"
}, uE = {
	key: 0,
	class: "dui-avatar"
}, dE = ["src"], fE = {
	key: 1,
	class: "dui-badge"
}, pE = /* @__PURE__ */ I({
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
		return (t, a) => (z(), V(hT, {
			description: "Choose a world Actor as the starting statblock, or drop one below.",
			number: "1",
			title: "Base Actor"
		}, {
			default: F(() => [
				H("fieldset", nE, [a[1] ||= H("legend", { class: "dui-fieldset-legend" }, "Search world actors", -1), H("input", {
					"aria-label": "Search world actors",
					class: "dui-input dui-input-sm",
					value: e.actorFilter,
					placeholder: "Filter actors",
					type: "search",
					onInput: r
				}, null, 40, rE)]),
				H("fieldset", iE, [a[2] ||= H("legend", { class: "dui-fieldset-legend" }, "Base statblock", -1), H("select", {
					"aria-label": "Base statblock",
					class: "dui-select dui-select-sm",
					disabled: e.isLoadingActors,
					value: e.selectedBaseActorUuid,
					onChange: i
				}, [H("option", oE, k(e.isLoadingActors ? "Loading actors..." : "Choose an actor"), 1), (z(!0), B(R, null, L(e.filteredActors, (e) => (z(), B("option", {
					key: e.uuid,
					value: e.uuid
				}, k(e.name), 9, sE))), 128))], 40, aE)]),
				U(vg, {
					description: "Use a world Actor as the starting statblock.",
					title: "Drop Actor",
					variant: "compact",
					onDropData: a[0] ||= (e) => n("actorDrop", e)
				}),
				e.errorMessage ? (z(), B("p", cE, k(e.errorMessage), 1)) : G("", !0),
				e.selectedBaseActor ? (z(), B("article", lE, [e.selectedBaseActor.img ? (z(), B("div", uE, [H("div", null, [H("img", {
					src: e.selectedBaseActor.img,
					alt: ""
				}, null, 8, dE)])])) : (z(), B("span", fE, k(P(eE)(e.selectedBaseActor.name)), 1)), H("div", null, [H("strong", null, k(e.selectedBaseActor.name), 1), H("span", null, [
					W(k(e.selectedBaseActor.species || "Species not found") + " ", 1),
					e.selectedBaseActor.type ? (z(), B(R, { key: 0 }, [W(" - " + k(e.selectedBaseActor.type), 1)], 64)) : G("", !0),
					e.isLoadingBaseDraft ? (z(), B(R, { key: 1 }, [W(" - loading details...")], 64)) : G("", !0)
				])])])) : G("", !0)
			]),
			_: 1
		}));
	}
}), mE = { class: "dui-card-actions" }, hE = { class: "dui-stats" }, gE = { class: "dui-stat" }, _E = { class: "dui-stat-value" }, vE = {
	key: 0,
	class: "dui-stat-desc"
}, yE = { class: "dui-stat" }, bE = { class: "dui-stat-value" }, xE = {
	key: 0,
	class: "dui-stat-desc"
}, SE = {
	key: 1,
	class: "dui-stat-desc"
}, CE = { class: "dui-stat" }, wE = { class: "dui-stat-value" }, TE = { class: "dui-stat" }, EE = { class: "dui-stat-value" }, DE = { class: "dui-stat" }, OE = { class: "dui-stat-value" }, kE = { class: "dui-stat-desc" }, AE = {
	key: 0,
	class: "dui-alert dui-alert-warning",
	role: "alert"
}, jE = { key: 1 }, ME = /* @__PURE__ */ I({
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
		return (t, n) => (z(), V(hT, {
			number: "4",
			title: "Build Preview"
		}, {
			default: F(() => [
				H("div", mE, [H("span", { class: O(["dui-badge", e.buildPreviewStatus === "Ready" ? "dui-badge-success" : "dui-badge-warning"]) }, k(e.buildPreviewStatus), 3)]),
				H("div", hE, [
					H("div", gE, [
						n[0] ||= H("span", { class: "dui-stat-title" }, "Advances", -1),
						H("strong", _E, k(e.advancementCount), 1),
						e.editedAdvanceCount ? (z(), B("small", vE, k(e.editedAdvanceCount) + " manually edited ", 1)) : G("", !0)
					]),
					H("div", yE, [
						n[1] ||= H("span", { class: "dui-stat-title" }, "Trappings", -1),
						H("strong", bE, k(e.visibleTrappingCount), 1),
						e.fallbackTrappingCount ? (z(), B("small", xE, k(e.fallbackTrappingCount) + " blank fallback ", 1)) : G("", !0),
						e.ignoredTrappingCount ? (z(), B("small", SE, k(e.ignoredTrappingCount) + " ignored ", 1)) : G("", !0)
					]),
					H("div", CE, [n[2] ||= H("span", { class: "dui-stat-title" }, "Traits", -1), H("strong", wE, k(e.traitCount), 1)]),
					H("div", TE, [n[3] ||= H("span", { class: "dui-stat-title" }, "Spells", -1), H("strong", EE, k(e.selectedSpellCount), 1)]),
					H("div", DE, [
						n[4] ||= H("span", { class: "dui-stat-title" }, "Estimated NPC XP", -1),
						H("strong", OE, k(e.estimatedNpcXp.total), 1),
						H("small", kE, k(e.estimatedNpcXp.characteristics) + " char / " + k(e.estimatedNpcXp.skills) + " skill / " + k(e.estimatedNpcXp.talents) + " talent ", 1)
					])
				]),
				e.buildPreviewWarnings.length ? (z(), B("div", AE, [H("div", null, [(z(!0), B(R, null, L(e.buildPreviewWarnings, (e) => (z(), B("p", { key: e }, k(e), 1))), 128))])])) : (z(), B("p", jE, " The draft has a base Actor, queued Career data, resolved trappings, and a portrait ready to apply. "))
			]),
			_: 1
		}));
	}
}), NE = { class: "dui-list" }, PE = { class: "dui-list-row" }, FE = { class: "dui-list-row" }, IE = { class: "dui-list-row" }, LE = { class: "dui-list-row" }, RE = { class: "dui-list-row" }, zE = { class: "dui-list-row" }, BE = { class: "dui-list-row" }, VE = /* @__PURE__ */ I({
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
		return (t, n) => (z(), B("dl", NE, [
			H("div", PE, [n[0] ||= H("dt", null, "Build name", -1), H("dd", null, k(e.finalActorName), 1)]),
			H("div", FE, [n[1] ||= H("dt", null, "Base actor", -1), H("dd", null, k(e.baseActorName), 1)]),
			H("div", IE, [n[2] ||= H("dt", null, "Final career", -1), H("dd", null, k(e.finalCareerName), 1)]),
			H("div", LE, [n[3] ||= H("dt", null, "Career items", -1), H("dd", null, k(e.careerItemCount), 1)]),
			H("div", RE, [n[4] ||= H("dt", null, "Apply", -1), H("dd", null, k(e.advancementCount) + " advance rows, " + k(e.visibleTrappingCount) + " trappings, " + k(e.traitCount) + " traits, " + k(e.selectedSpellCount) + " spells ", 1)]),
			H("div", zE, [n[5] ||= H("dt", null, "Extracted grants", -1), H("dd", null, k(e.grantTotals.characteristics) + " characteristics, " + k(e.grantTotals.skills) + " skills, " + k(e.grantTotals.talents) + " talents, " + k(e.grantTotals.trappings) + " trappings ", 1)]),
			H("div", BE, [n[6] ||= H("dt", null, "Estimated NPC XP", -1), H("dd", null, k(e.estimatedNpcXpTotal), 1)])
		]));
	}
}), HE = { class: "dui-avatar" }, UE = ["aria-label", "disabled"], WE = ["src"], GE = { key: 1 }, KE = { key: 2 }, qE = {
	key: 0,
	"aria-live": "polite",
	class: "dui-alert",
	role: "status"
}, JE = { key: 0 }, YE = ["title"], XE = {
	key: 1,
	class: "dui-fieldset"
}, ZE = { class: "dui-fieldset-legend" }, QE = { key: 0 }, $E = { key: 1 }, eD = { key: 0 }, tD = ["value"], nD = { class: "dui-carousel" }, rD = [
	"aria-label",
	"aria-pressed",
	"title",
	"onClick"
], iD = ["src"], aD = ["aria-label"], oD = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B(R, null, [
			H("div", HE, [H("button", {
				"aria-label": e.portraitCandidates.length ? "Open portrait gallery" : "No portraits available",
				class: O(["dui-btn dui-btn-xl", { "dui-btn-square": e.finalPortraitPath || e.finalCareer }]),
				disabled: !e.portraitCandidates.length,
				title: "Open portrait gallery",
				type: "button",
				onClick: r[0] ||= (e) => n("openGallery")
			}, [e.finalPortraitPath ? (z(), B("img", {
				key: 0,
				src: e.finalPortraitPath,
				alt: ""
			}, null, 8, WE)) : e.finalCareer ? (z(), B("strong", GE, k(P(eE)(e.finalCareer.name)), 1)) : (z(), B("span", KE, "No portrait selected"))], 10, UE)]),
			e.finalPortraitPath ? (z(), B("p", qE, [e.selectedPortraitCandidate ? (z(), B("strong", JE, k(e.selectedPortraitCandidate.label), 1)) : G("", !0), H("span", { title: e.finalPortraitPath }, k(e.finalPortraitPath), 9, YE)])) : G("", !0),
			e.portraitCandidates.length || e.isLoadingPortraitCandidates ? (z(), B("fieldset", XE, [
				H("legend", ZE, [r[2] ||= H("span", null, "Portrait options", -1), e.isLoadingPortraitCandidates ? (z(), B("span", QE, "Finding assets...")) : (z(), B("span", $E, k(e.portraitCandidates.length) + " options", 1))]),
				e.isLoadingPortraitCandidates && e.portraitSearchProgress ? (z(), B("div", eD, [H("progress", {
					"aria-label": "Portrait search progress",
					class: "dui-progress",
					value: e.portraitSearchProgressValue,
					max: "100"
				}, null, 8, tD), H("span", null, k(e.portraitSearchProgressLabel), 1)])) : G("", !0),
				H("div", nD, [(z(!0), B(R, null, L(e.compactPortraitCandidates, (t) => (z(), B("div", {
					key: t.key,
					class: "dui-carousel-item dui-avatar"
				}, [H("button", {
					"aria-label": P(tE)(t),
					"aria-pressed": t.key === e.selectedPortraitCandidateKey,
					class: O(["dui-btn dui-btn-square", { "dui-btn-active": t.key === e.selectedPortraitCandidateKey }]),
					title: P(tE)(t),
					type: "button",
					onClick: (e) => n("selectPortrait", t)
				}, [H("img", {
					src: t.img,
					alt: ""
				}, null, 8, iD)], 10, rD)]))), 128)), e.hiddenPortraitCandidateCount > 0 ? (z(), B("button", {
					key: 0,
					"aria-label": `Open ${e.hiddenPortraitCandidateCount} more portrait options`,
					class: "dui-carousel-item dui-btn dui-btn-square",
					type: "button",
					onClick: r[1] ||= (e) => n("openGallery")
				}, " +" + k(e.hiddenPortraitCandidateCount), 9, aD)) : G("", !0)])
			])) : G("", !0)
		], 64));
	}
}), sD = {
	key: 0,
	class: "dui-fieldset"
}, cD = { class: "dui-fieldset-legend" }, lD = { class: "dui-card-actions" }, uD = ["aria-pressed", "onClick"], dD = /* @__PURE__ */ I({
	__name: "TraitButtonGroup",
	props: {
		caption: {},
		title: {},
		traits: {}
	},
	emits: ["toggleTrait"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => e.traits.length ? (z(), B("fieldset", sD, [H("legend", cD, [H("span", null, k(e.title), 1), H("span", null, k(e.caption), 1)]), H("div", lD, [(z(!0), B(R, null, L(e.traits, (e) => (z(), B("button", {
			key: e.uuid,
			"aria-pressed": e.isSelected,
			class: O(["dui-btn dui-btn-sm", { "dui-btn-active": e.isSelected }]),
			type: "button",
			onClick: (t) => n("toggleTrait", e)
		}, k(e.name), 11, uD))), 128))])])) : G("", !0);
	}
}), fD = { class: "dui-fieldset" }, pD = ["placeholder", "value"], mD = { class: "dui-collapse dui-collapse-arrow dui-card-border" }, hD = { class: "dui-collapse-content" }, gD = /* @__PURE__ */ I({
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
		return (t, i) => (z(), B("aside", null, [
			U(hT, {
				description: "Choose the generated Actor's name, portrait, and optional traits.",
				number: "3",
				title: "Identity and Traits"
			}, {
				default: F(() => [
					U(oD, {
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
					H("fieldset", fD, [i[4] ||= H("legend", { class: "dui-fieldset-legend" }, "NPC name", -1), H("input", {
						"aria-label": "NPC name",
						class: "dui-input dui-input-sm",
						placeholder: e.suggestedActorName,
						value: e.actorName,
						type: "text",
						onInput: r
					}, null, 40, pD)]),
					U(dD, {
						caption: `${e.optionalTraitOptions.length} from base statblock`,
						traits: e.optionalTraitOptions,
						title: "Optional Traits",
						onToggleTrait: i[2] ||= (e) => n("toggleOptionalTrait", e)
					}, null, 8, ["caption", "traits"]),
					U(dD, {
						caption: `${e.quickTraitOptions.length} configured`,
						traits: e.quickTraitOptions,
						title: "Quick Traits",
						onToggleTrait: i[3] ||= (e) => n("toggleQuickTrait", e)
					}, null, 8, ["caption", "traits"])
				]),
				_: 1
			}),
			i[6] ||= H("div", { class: "dui-divider" }, null, -1),
			U(ME, {
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
			H("details", mD, [i[5] ||= H("summary", { class: "dui-collapse-title" }, "Complete build details", -1), H("div", hD, [U(VE, {
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
			])])])
		]));
	}
}), _D = {
	key: 0,
	class: "dui-list"
}, vD = [
	"onDragenter",
	"onDragover",
	"onDrop"
], yD = ["onDragstart"], bD = {
	key: 0,
	class: "dui-avatar"
}, xD = ["src"], SD = {
	key: 1,
	class: "dui-badge"
}, CD = { class: "dui-list-col-grow" }, wD = {
	key: 0,
	class: "dui-badge dui-badge-info"
}, TD = {
	key: 1,
	class: "dui-badge dui-badge-info"
}, ED = ["title"], DD = { class: "dui-card-actions" }, OD = { class: "dui-fieldset" }, kD = [
	"aria-label",
	"value",
	"onInput"
], AD = { class: "dui-join" }, jD = ["disabled", "onClick"], MD = ["disabled", "onClick"], ND = ["onClick"], PD = {
	key: 1,
	class: "dui-alert"
}, FD = /* @__PURE__ */ I({
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
		return (t, r) => (z(), V(hT, {
			description: "Careers are applied in this order. Drag rows or use the buttons to reorder them.",
			number: "2",
			title: "Career Queue"
		}, {
			default: F(() => [U(vg, {
				description: "Drop in build order. Drag rows to reorder.",
				title: "Drop Career Items",
				variant: "compact",
				onDropData: r[0] ||= (e) => n("careerDrop", e)
			}), e.careers.length ? (z(), B("ol", _D, [(z(!0), B(R, null, L(e.careers, (t, i) => (z(), B("li", {
				key: t.uuid,
				class: "dui-list-row",
				onDragenter: qo((e) => n("careerDragEnter", i), ["prevent"]),
				onDragover: (e) => n("careerDragOver", i, e),
				onDrop: (e) => n("careerDropOnRow", i, e)
			}, [
				H("span", {
					"aria-hidden": "true",
					class: "dui-badge",
					draggable: "true",
					title: "Drag to reorder",
					onDragend: r[1] ||= (e) => n("careerDragEnd"),
					onDragstart: (e) => n("careerDragStart", i, e)
				}, " Drag ", 40, yD),
				t.img ? (z(), B("div", bD, [H("div", null, [H("img", {
					src: t.img,
					alt: ""
				}, null, 8, xD)])])) : (z(), B("span", SD, k(P(eE)(t.name)), 1)),
				H("div", CD, [
					H("strong", null, k(t.name), 1),
					e.draggedCareerIndex === i ? (z(), B("span", wD, " Dragging ")) : e.dragOverCareerIndex === i ? (z(), B("span", TD, " Drop here ")) : G("", !0),
					H("span", null, [W(k(t.careerGroup || "Career") + " ", 1), t.level === null ? G("", !0) : (z(), B(R, { key: 0 }, [W(" level " + k(t.level), 1)], 64))]),
					H("small", {
						class: "dui-badge dui-badge-ghost",
						title: [
							`Characteristics: ${P($T)(t.grants.characteristics)}`,
							`Skills: ${P($T)(t.grants.skills)}`,
							`Talents: ${P($T)(t.grants.talents)}`,
							`Trappings: ${P($T)(t.grants.trappings)}`
						].join("\n")
					}, k(P(QT)(t)), 9, ED),
					H("div", DD, [H("fieldset", OD, [r[2] ||= H("legend", { class: "dui-fieldset-legend" }, "Quantity", -1), H("input", {
						"aria-label": `Quantity for ${t.name}`,
						class: "dui-input dui-input-sm",
						value: t.quantity,
						min: "1",
						type: "number",
						onInput: (e) => n("careerQuantityInput", i, e)
					}, null, 40, kD)]), H("div", AD, [
						H("button", {
							class: "dui-join-item dui-btn dui-btn-sm",
							disabled: i === 0,
							title: "Move career earlier",
							type: "button",
							onClick: (e) => n("moveCareer", i, -1)
						}, " Up ", 8, jD),
						H("button", {
							class: "dui-join-item dui-btn dui-btn-sm",
							disabled: i === e.careers.length - 1,
							title: "Move career later",
							type: "button",
							onClick: (e) => n("moveCareer", i, 1)
						}, " Down ", 8, MD),
						H("button", {
							class: "dui-join-item dui-btn dui-btn-sm",
							type: "button",
							onClick: (e) => n("removeCareer", i)
						}, " Remove ", 8, ND)
					])])
				])
			], 40, vD))), 128))])) : (z(), B("p", PD, "No careers queued yet."))]),
			_: 1
		}));
	}
}), ID = {
	class: "dui-alert dui-alert-info",
	role: "status"
}, LD = { key: 0 }, RD = { key: 1 }, zD = { class: "dui-carousel" }, BD = { class: "dui-avatar" }, VD = [
	"aria-label",
	"aria-pressed",
	"title",
	"onClick"
], HD = ["src"], UD = { class: "dui-badge" }, WD = /* @__PURE__ */ I({
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
		return (t, r) => (z(), V(Uw, {
			open: e.open,
			title: "Portrait Gallery",
			onClose: r[0] ||= (e) => n("close")
		}, {
			default: F(() => [H("section", null, [H("div", ID, [H("strong", null, k(e.portraitCandidates.length) + " portrait options", 1), e.isLoadingPortraitCandidates ? (z(), B("span", LD, "Finding assets...")) : (z(), B("span", RD, "Click an image to use it for the generated NPC."))]), H("div", zD, [(z(!0), B(R, null, L(e.portraitCandidates, (t) => (z(), B("div", {
				key: t.key,
				class: "dui-carousel-item"
			}, [H("div", BD, [H("button", {
				"aria-label": P(tE)(t),
				"aria-pressed": t.key === e.selectedPortraitCandidateKey,
				class: O(["dui-btn dui-btn-xl dui-btn-square", { "dui-btn-active": t.key === e.selectedPortraitCandidateKey }]),
				title: P(tE)(t),
				type: "button",
				onClick: (e) => n("selectPortrait", t)
			}, [H("img", {
				src: t.img,
				alt: ""
			}, null, 8, HD)], 10, VD)]), H("span", UD, k(t.label), 1)]))), 128))])])]),
			_: 1
		}, 8, ["open"]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/errors.ts
function GD(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not resolve that Actor drop.";
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/useBaseActorSelection.ts
function KD(e, t) {
	let n = Pw(), { baseActors: r, selectedBaseActorUuid: i } = lc(n), a = /* @__PURE__ */ N(""), o = K(() => {
		let e = a.value.trim().toLocaleLowerCase();
		return e ? r.value.filter((t) => t.name.toLocaleLowerCase().includes(e)) : r.value;
	}), s = K({
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
			t.value = GD(e);
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
function qD() {
	let { advancements: e, careers: t, finalPortraitPath: n, selectedBaseActor: r, trappings: i } = lc(Pw()), a = K(() => {
		let e = 0;
		for (let n of t.value) e += n.quantity;
		return e;
	}), o = K(() => i.value.filter((e) => !e.ignored).length), s = K(() => e.value.filter((e) => e.current !== e.careerValue).length), c = K(() => i.value.filter((e) => !e.ignored && e.resolution.status === "fallback").length), l = K(() => i.value.filter((e) => e.ignored).length), u = K(() => e.value.filter((e) => e.kind === "skill" && OS(e.name) !== null).length), d = K(() => i.value.filter((e) => !e.ignored && e.resolution.status === "unresolved").length), f = K(() => {
		let e = [];
		return r.value || e.push("Choose a base Actor before building."), t.value.length || e.push("No Careers are queued."), u.value && e.push(`${u.value} skill rows still need a specialization.`), d.value && e.push(`${d.value} trappings have no item resolution yet.`), n.value || e.push("No portrait is selected."), e;
	});
	return {
		buildPreviewStatus: K(() => f.value.length ? "Review" : "Ready"),
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
function JD() {
	let e = Pw(), { optionalTraits: t, quickTraits: n, traits: r } = lc(e), i = K(() => new Set(r.value.map((e) => YD(e.name)))), a = K(() => t.value.map(s)), o = K(() => {
		let e = new Set(t.value.map((e) => YD(e.name)));
		return n.value.filter((t) => !e.has(YD(t.name))).map(s);
	});
	function s(e) {
		return {
			...e,
			isSelected: i.value.has(YD(e.name))
		};
	}
	function c(t) {
		let n = i.value.has(YD(t.name));
		e.setQuickTraitSelected(t, !n);
	}
	function l(t) {
		let n = i.value.has(YD(t.name));
		e.setOptionalTraitSelected(t, !n);
	}
	return {
		displayedQuickTraitOptions: o,
		optionalTraitOptions: a,
		toggleOptionalTrait: l,
		toggleQuickTrait: c
	};
}
function YD(e) {
	return e.trim().toLocaleLowerCase();
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/useCareerQueue.ts
function XD() {
	let e = Pw(), t = /* @__PURE__ */ N(null), n = /* @__PURE__ */ N(null);
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
var ZD = new Set([
	"and",
	"any",
	"the",
	"with",
	"without",
	"of",
	"or",
	"npc"
]);
function QD(e) {
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
	}), nO(t);
}
function $D(e, t) {
	let n = sO(e);
	return n ? t.some((e) => sO(e.img) === n) : !1;
}
function eO(e) {
	let t = [];
	for (let n of e.careers) t.push(n.name, n.careerGroup);
	return e.selectedBaseActor && t.push(e.selectedBaseActor.name, e.selectedBaseActor.species), uO(t.flatMap((e) => lO(e)).filter((e) => e.length >= 3 && !ZD.has(e)));
}
function tO(e, t) {
	let n = cO(e);
	return n ? t.some((e) => n.includes(e)) : !1;
}
function nO(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.img.trim().toLocaleLowerCase();
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
function rO(e) {
	return nO([...QD(e), ...e.assetCandidates]);
}
function iO(e) {
	let t = e.settings.searchCompendiumPortraitAssets || e.settings.searchFoundryPortraitAssets, n = !!e.selectedBaseActor || e.careers.length > 0;
	return t && n;
}
function aO(e) {
	return e ? e.maxDirectories <= 0 ? e.phase === "ready" ? 100 : 4 : Math.min(100, Math.round(e.directoriesVisited / e.maxDirectories * 100)) : 0;
}
function oO(e) {
	return e ? e.phase === "ready" ? `${e.candidatesFound} options found` : e.phase === "filesystem" ? e.maxDirectories <= 0 ? `${e.directoriesVisited} directories - ${e.currentLocation}` : `${e.directoriesVisited}/${e.maxDirectories} directories - ${e.currentLocation}` : e.currentLocation : "";
}
function sO(e) {
	return e.trim().toLocaleLowerCase();
}
function cO(e) {
	return e.trim().toLocaleLowerCase().replaceAll(/[_-]/g, " ").replaceAll(/[(),.:;[\]]/g, " ").replaceAll(/\s+/g, " ");
}
function lO(e) {
	let t = cO(e);
	return [t, ...t.split(" ")].filter(Boolean);
}
function uO(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/state/npc-builder/workflows/portrait-candidates-workflow.ts
function dO(e, t) {
	let n = Pw(), { careers: r, finalPortraitPath: i, selectedBaseActor: a, selectedPortraitPath: o, settings: s } = lc(n), c = /* @__PURE__ */ N([]), l = /* @__PURE__ */ N(!1), u = /* @__PURE__ */ N(null), d = 0, f = K(() => rO({
		assetCandidates: c.value,
		careers: r.value,
		selectedBaseActor: a.value
	})), p = K(() => f.value.slice(0, 10)), m = K(() => Math.max(0, f.value.length - p.value.length)), h = K(() => f.value.find((e) => e.img === i.value) ?? null), g = K(() => h.value?.key ?? ""), _ = K(() => oO(u.value)), v = K(() => aO(u.value));
	Kn(() => [
		a.value?.uuid ?? "",
		s.value.searchCompendiumPortraitAssets,
		s.value.searchFoundryPortraitAssets,
		r.value.map((e) => e.uuid).join("|")
	], () => {
		b();
	}, { immediate: !0 }), Kn([
		f,
		o,
		l
	], () => {
		o.value && !l.value && !$D(o.value, f.value) && n.selectPortrait("");
	}, { immediate: !0 });
	function y(e) {
		n.selectPortrait(e.img);
	}
	async function b() {
		let n = d + 1;
		if (d = n, !iO({
			careers: r.value,
			selectedBaseActor: a.value,
			settings: s.value
		})) {
			c.value = [], u.value = null;
			return;
		}
		l.value = !0, c.value = [], u.value = {
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
				d === n && (u.value = e);
			});
			d === n && (c.value = t);
		} catch (e) {
			d === n && (t.value = fO(e));
		} finally {
			d === n && (l.value = !1);
		}
	}
	return {
		compactPortraitCandidates: p,
		hiddenPortraitCandidateCount: m,
		isLoadingPortraitCandidates: l,
		portraitCandidates: f,
		portraitSearchProgress: u,
		portraitSearchProgressLabel: _,
		portraitSearchProgressValue: v,
		selectedPortraitCandidate: h,
		selectedPortraitCandidateKey: g,
		selectPortrait: y
	};
}
function fO(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish searching for portraits.";
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/usePortraitCandidates.ts
function pO(e, t) {
	let n = dO(e, t), r = /* @__PURE__ */ N(!1);
	function i(e) {
		n.selectPortrait(e), r.value = !1;
	}
	return {
		...n,
		isPortraitGalleryOpen: r,
		selectPortraitFromGallery: i
	};
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab.vue
var mO = /* @__PURE__ */ I({
	__name: "NpcBuilderBuildTab",
	props: {
		bridge: {},
		isLoadingActors: { type: Boolean },
		isLoadingBaseDraft: { type: Boolean }
	},
	emits: ["careerDrop"],
	setup(e, { emit: t }) {
		let n = e, r = t, { actorName: i, advancements: a, careers: o, estimatedNpcXp: s, finalActorName: c, finalCareer: l, finalPortraitPath: u, grantTotals: d, selectedBaseActor: f, selectedSpells: p, suggestedActorName: m, traits: h } = lc(Pw()), g = /* @__PURE__ */ N(""), { actorFilter: _, filteredActors: v, handleActorDrop: y, selectedBaseActorSelectValue: b } = KD(n.bridge, g), { clearCareerDragState: x, draggedCareerIndex: S, dragOverCareerIndex: C, handleCareerDragOver: w, handleCareerDragStart: ee, handleCareerDrop: T, moveCareer: te, removeCareer: ne, setCareerQuantity: re, setDragOverCareerIndex: E } = XD(), { displayedQuickTraitOptions: ie, optionalTraitOptions: ae, toggleOptionalTrait: oe, toggleQuickTrait: se } = JD(), { buildPreviewStatus: D, buildPreviewWarnings: ce, careerItemCount: le, editedAdvanceCount: ue, fallbackTrappingCount: de, ignoredTrappingCount: fe, visibleTrappingCount: pe } = qD(), { compactPortraitCandidates: me, hiddenPortraitCandidateCount: he, isLoadingPortraitCandidates: ge, isPortraitGalleryOpen: _e, portraitCandidates: O, portraitSearchProgress: ve, portraitSearchProgressLabel: ye, portraitSearchProgressValue: be, selectedPortraitCandidate: xe, selectedPortraitCandidateKey: Se, selectPortrait: Ce, selectPortraitFromGallery: we } = pO(n.bridge, g);
		return (t, n) => (z(), B("section", null, [
			U(pE, {
				"actor-filter": P(_),
				"error-message": g.value,
				"filtered-actors": P(v),
				"is-loading-actors": e.isLoadingActors,
				"is-loading-base-draft": e.isLoadingBaseDraft,
				"selected-base-actor": P(f),
				"selected-base-actor-uuid": P(b),
				onActorDrop: P(y),
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
			]),
			n[6] ||= H("div", { class: "dui-divider" }, null, -1),
			U(FD, {
				careers: P(o),
				"drag-over-career-index": P(C),
				"dragged-career-index": P(S),
				onCareerDragEnd: P(x),
				onCareerDragEnter: P(E),
				onCareerDragOver: P(w),
				onCareerDragStart: P(ee),
				onCareerDrop: n[2] ||= (e) => r("careerDrop", e),
				onCareerDropOnRow: P(T),
				onCareerQuantityInput: P(re),
				onMoveCareer: P(te),
				onRemoveCareer: P(ne)
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
			]),
			n[7] ||= H("div", { class: "dui-divider" }, null, -1),
			U(gD, {
				"actor-name": P(i),
				"advancement-count": P(a).length,
				"build-preview-status": P(D),
				"build-preview-warnings": P(ce),
				"career-item-count": P(le),
				"compact-portrait-candidates": P(me),
				"edited-advance-count": P(ue),
				"estimated-npc-xp": P(s),
				"fallback-trapping-count": P(de),
				"final-actor-name": P(c),
				"final-career": P(l),
				"final-portrait-path": P(u),
				"grant-totals": P(d),
				"hidden-portrait-candidate-count": P(he),
				"ignored-trapping-count": P(fe),
				"is-loading-portrait-candidates": P(ge),
				"optional-trait-options": P(ae),
				"portrait-candidates": P(O),
				"portrait-search-progress": P(ve),
				"portrait-search-progress-label": P(ye),
				"portrait-search-progress-value": P(be),
				"quick-trait-options": P(ie),
				"selected-base-actor": P(f),
				"selected-portrait-candidate": P(xe),
				"selected-portrait-candidate-key": P(Se),
				"selected-spell-count": P(p).length,
				"suggested-actor-name": P(m),
				"trait-count": P(h).length,
				"visible-trapping-count": P(pe),
				onActorNameChange: n[3] ||= (e) => i.value = e,
				onOpenPortraitGallery: n[4] ||= (e) => _e.value = !0,
				onSelectPortrait: P(Ce),
				onToggleOptionalTrait: P(oe),
				onToggleQuickTrait: P(se)
			}, null, 8, /* @__PURE__ */ "actor-name.advancement-count.build-preview-status.build-preview-warnings.career-item-count.compact-portrait-candidates.edited-advance-count.estimated-npc-xp.fallback-trapping-count.final-actor-name.final-career.final-portrait-path.grant-totals.hidden-portrait-candidate-count.ignored-trapping-count.is-loading-portrait-candidates.optional-trait-options.portrait-candidates.portrait-search-progress.portrait-search-progress-label.portrait-search-progress-value.quick-trait-options.selected-base-actor.selected-portrait-candidate.selected-portrait-candidate-key.selected-spell-count.suggested-actor-name.trait-count.visible-trapping-count.onSelectPortrait.onToggleOptionalTrait.onToggleQuickTrait".split(".")),
			U(WD, {
				"is-loading-portrait-candidates": P(ge),
				open: P(_e),
				"portrait-candidates": P(O),
				"selected-portrait-candidate-key": P(Se),
				onClose: n[5] ||= (e) => _e.value = !1,
				onSelectPortrait: P(we)
			}, null, 8, [
				"is-loading-portrait-candidates",
				"open",
				"portrait-candidates",
				"selected-portrait-candidate-key",
				"onSelectPortrait"
			])
		]));
	}
});
//#endregion
//#region src/functions/npc-builder/settings/portrait-search-status.ts
function hO(e) {
	return e ? e.digDownActive ? e.digDownDeepFileSearchEnabled ? e.digDownCacheReady ? `Dig Down cache ready with ${e.digDownIndexedFileCount} indexed files.` : "Dig Down is active; its file cache is still building or unavailable." : "Dig Down is active, but its Deep File Search setting is disabled." : "Install and enable Dig Down to search local files for portrait suggestions." : "Checking Dig Down integration.";
}
//#endregion
//#region src/functions/npc-builder/settings/settings-payload.ts
function gO(e) {
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
//#region src/state/npc-builder/workflows/settings-workflow.ts
function _O(e) {
	let t = Pw(), { actorFolders: n, itemFolders: r, settings: i } = lc(t), a = /* @__PURE__ */ N(""), o = /* @__PURE__ */ N(""), s = /* @__PURE__ */ N(!1), c = /* @__PURE__ */ N(""), l = /* @__PURE__ */ N(null), u = /* @__PURE__ */ N(""), d = /* @__PURE__ */ N(""), f = K(() => l.value?.digDownActive ?? !0), p = K(() => hO(l.value));
	Kn(l, (e) => {
		e && !e.digDownActive && (i.value.searchFoundryPortraitAssets = !1);
	});
	async function m() {
		await _({
			ensureFolder: e.ensureActorFolder,
			name: a.value,
			refresh: v,
			setFolderUuid: (e) => {
				i.value.baseActorFolderUuid = e;
			}
		});
	}
	async function h() {
		await _({
			ensureFolder: e.ensureActorFolder,
			name: c.value,
			refresh: v,
			setFolderUuid: (e) => {
				i.value.outputActorFolderUuid = e;
			}
		});
	}
	async function g() {
		await _({
			ensureFolder: e.ensureItemFolder,
			name: u.value,
			refresh: y,
			setFolderUuid: (e) => {
				i.value.quickTraitFolderUuid = e;
			}
		}), t.hydrateQuickTraits(await e.listQuickTraits(i.value));
	}
	async function _(n) {
		await w(async () => {
			let r = await n.ensureFolder(n.name);
			await n.refresh(), n.setFolderUuid(r.uuid), t.hydrateSettings(await e.saveSettings(T())), d.value = `Using folder "${r.name}".`;
		});
	}
	async function v() {
		t.hydrateActorFolders(await e.listActorFolders());
	}
	async function y() {
		t.hydrateItemFolders(await e.listItemFolders());
	}
	async function b() {
		l.value = await e.getPortraitSearchAvailability();
	}
	async function x() {
		await w(async () => {
			t.hydrateSettings(await e.saveSettings(T())), t.hydrateQuickTraits(await e.importRecommendedQuickTraits(i.value)), d.value = "Recommended quick traits imported.";
		});
	}
	async function S() {
		await w(async () => {
			t.hydrateSettings(await e.saveSettings(T())), await ee(), d.value = "Settings saved.";
		});
	}
	async function C() {
		await w(async () => {
			t.hydrateSettings(await e.saveSettings(NC())), await ee(), d.value = "Settings reset to defaults.";
		});
	}
	async function w(e) {
		s.value = !0, o.value = "", d.value = "";
		try {
			await e();
		} catch (e) {
			o.value = vO(e);
		} finally {
			s.value = !1;
		}
	}
	async function ee() {
		let [n, r] = await Promise.all([e.listBaseActors(i.value), e.listQuickTraits(i.value)]);
		t.hydrateBaseActors(n), t.hydrateQuickTraits(r);
	}
	function T() {
		return gO({
			canUseDigDownPortraitSearch: f.value,
			settings: i.value
		});
	}
	return {
		actorFolders: n,
		baseActorFolderName: a,
		canUseDigDownPortraitSearch: f,
		errorMessage: o,
		importRecommendedQuickTraits: x,
		isBusy: s,
		itemFolders: r,
		outputActorFolderName: c,
		portraitSearchStatusLabel: p,
		quickTraitFolderName: u,
		refreshPortraitSearchAvailability: b,
		resetSettingsToDefaults: C,
		saveBaseActorFolderName: m,
		saveOutputActorFolderName: h,
		saveQuickTraitFolderName: g,
		saveSettings: S,
		settings: i,
		settingsMessage: d
	};
}
function vO(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSettingsTab/FolderSetting.vue?vue&type=script&setup=true&lang.ts
var yO = { class: "dui-fieldset" }, bO = { class: "dui-fieldset-legend" }, xO = ["aria-label", "value"], SO = { value: "" }, CO = ["value"], wO = { class: "dui-fieldset" }, TO = ["aria-label", "value"], EO = { class: "dui-card-actions" }, DO = ["disabled"], OO = /* @__PURE__ */ I({
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
		return (t, a) => (z(), B("section", null, [
			H("fieldset", yO, [H("legend", bO, k(e.folderLabel), 1), H("select", {
				"aria-label": e.folderLabel,
				class: "dui-select dui-select-sm",
				value: e.selectedUuid,
				onChange: r
			}, [H("option", SO, k(e.defaultOptionLabel), 1), (z(!0), B(R, null, L(e.folders, (e) => (z(), B("option", {
				key: e.uuid,
				value: e.uuid
			}, k(e.name), 9, CO))), 128))], 40, xO)]),
			H("fieldset", wO, [a[1] ||= H("legend", { class: "dui-fieldset-legend" }, "Create or use by name", -1), H("input", {
				"aria-label": `Create or use ${e.folderLabel} by name`,
				class: "dui-input dui-input-sm",
				value: e.createName,
				placeholder: "Folder name",
				type: "text",
				onInput: i
			}, null, 40, TO)]),
			H("div", EO, [H("button", {
				class: "dui-btn dui-btn-sm",
				disabled: e.disabled || !e.createName.trim(),
				type: "button",
				onClick: a[0] ||= (e) => n("saveFolderName")
			}, k(e.buttonLabel ?? "Save Folder"), 9, DO)])
		]));
	}
}), kO = /* @__PURE__ */ I({
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
		return (t, r) => (z(), V(hT, {
			description: "Limit the source picker or choose where generated Actors are stored.",
			number: "1",
			title: "Actor Sources"
		}, {
			default: F(() => [U(OO, {
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
			]), U(OO, {
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
			])]),
			_: 1
		}));
	}
}), AO = { class: "dui-label" }, jO = ["checked"], MO = { class: "dui-label" }, NO = ["checked"], PO = { class: "dui-label" }, FO = ["checked"], IO = { class: "dui-label" }, LO = ["checked"], RO = { class: "dui-label" }, zO = ["checked"], BO = /* @__PURE__ */ I({
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
		return (t, i) => (z(), V(hT, {
			description: "Choose which base-only data is included in the editable draft.",
			number: "5",
			title: "Base Actor Features"
		}, {
			default: F(() => [
				H("label", AO, [H("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowCharacteristics,
					type: "checkbox",
					onChange: i[0] ||= (e) => n("allowCharacteristicsChange", r(e))
				}, null, 40, jO), i[5] ||= H("span", null, "Show base actor characteristics", -1)]),
				H("label", MO, [H("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowSkills,
					type: "checkbox",
					onChange: i[1] ||= (e) => n("allowSkillsChange", r(e))
				}, null, 40, NO), i[6] ||= H("span", null, "Show base actor skills", -1)]),
				H("label", PO, [H("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowTalents,
					type: "checkbox",
					onChange: i[2] ||= (e) => n("allowTalentsChange", r(e))
				}, null, 40, FO), i[7] ||= H("span", null, "Show base actor talents", -1)]),
				H("label", IO, [H("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowTrappings,
					type: "checkbox",
					onChange: i[3] ||= (e) => n("allowTrappingsChange", r(e))
				}, null, 40, LO), i[8] ||= H("span", null, "Show base actor trappings", -1)]),
				H("label", RO, [H("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowTraits,
					type: "checkbox",
					onChange: i[4] ||= (e) => n("allowTraitsChange", r(e))
				}, null, 40, zO), i[9] ||= H("span", null, "Show base actor traits", -1)])
			]),
			_: 1
		}));
	}
}), VO = { class: "dui-label" }, HO = ["checked"], UO = /* @__PURE__ */ I({
	__name: "MagicSpellSettings",
	props: { autoSelectGrantedSpells: { type: Boolean } },
	emits: ["autoSelectGrantedSpellsChange"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			let t = e.target;
			n("autoSelectGrantedSpellsChange", !!t?.checked);
		}
		return (t, n) => (z(), V(hT, {
			number: "6",
			title: "Magic and Spells"
		}, {
			default: F(() => [H("label", VO, [H("input", {
				class: "dui-toggle dui-toggle-sm",
				checked: e.autoSelectGrantedSpells,
				type: "checkbox",
				onChange: r
			}, null, 40, HO), n[0] ||= H("span", null, "Select detected Lore spells by default", -1)])]),
			_: 1
		}));
	}
}), WO = { class: "dui-label" }, GO = ["checked"], KO = /* @__PURE__ */ I({
	__name: "NamingSettings",
	props: { includeSpeciesInName: { type: Boolean } },
	emits: ["includeSpeciesInNameChange"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			let t = e.target;
			n("includeSpeciesInNameChange", !!t?.checked);
		}
		return (t, n) => (z(), V(hT, {
			number: "3",
			title: "Default Naming"
		}, {
			default: F(() => [H("label", WO, [H("input", {
				class: "dui-toggle dui-toggle-sm",
				checked: e.includeSpeciesInName,
				type: "checkbox",
				onChange: r
			}, null, 40, GO), n[0] ||= H("span", null, "Include species in suggested names", -1)])]),
			_: 1
		}));
	}
}), qO = { class: "dui-fieldset" }, JO = ["value"], YO = { class: "dui-label" }, XO = ["checked"], ZO = { class: "dui-card-actions" }, QO = ["disabled"], $O = ["disabled"], ek = /* @__PURE__ */ I({
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
		return (t, a) => (z(), V(hT, {
			number: "7",
			title: "Career Choices and Saving"
		}, {
			default: F(() => [
				H("fieldset", qO, [a[3] ||= H("legend", { class: "dui-fieldset-legend" }, "Lower career handling", -1), H("select", {
					"aria-label": "Lower career handling",
					class: "dui-select dui-select-sm",
					value: e.lowerCareerMode,
					onChange: r
				}, [...a[2] ||= [
					H("option", { value: "prompt" }, "Prompt when candidates are found", -1),
					H("option", { value: "auto-add-all" }, "Automatically add all lower-tier matches", -1),
					H("option", { value: "never" }, "Only add dropped careers", -1)
				]], 40, JO)]),
				H("label", YO, [H("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.askForLinkedSkillSpecializations,
					type: "checkbox",
					onChange: i
				}, null, 40, XO), a[4] ||= H("span", null, "Resolve linked career skill repeats separately", -1)]),
				H("div", ZO, [H("button", {
					class: "dui-btn dui-btn-primary dui-btn-sm",
					disabled: e.isBusy,
					type: "button",
					onClick: a[0] ||= (e) => n("saveSettings")
				}, " Save Settings ", 8, QO), H("button", {
					class: "dui-btn dui-btn-sm",
					disabled: e.isBusy,
					type: "button",
					onClick: a[1] ||= (e) => n("resetSettings")
				}, " Reset to Defaults ", 8, $O)])
			]),
			_: 1
		}));
	}
}), tk = { class: "dui-label" }, nk = ["checked", "disabled"], rk = {
	"aria-live": "polite",
	class: "dui-alert",
	role: "status"
}, ik = { class: "dui-label" }, ak = ["checked"], ok = { class: "dui-label" }, sk = ["checked"], ck = /* @__PURE__ */ I({
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
		return (t, n) => (z(), V(hT, {
			description: "Choose which local Foundry sources can suggest portraits.",
			number: "4",
			title: "Portrait Suggestions"
		}, {
			default: F(() => [
				H("label", tk, [H("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.searchFoundryPortraitAssets,
					disabled: !e.canUseDigDownPortraitSearch,
					type: "checkbox",
					onChange: r
				}, null, 40, nk), n[0] ||= H("span", null, "Search Dig Down's file cache for portrait suggestions", -1)]),
				H("p", rk, k(e.statusLabel), 1),
				H("label", ik, [H("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.searchCompendiumPortraitAssets,
					type: "checkbox",
					onChange: i
				}, null, 40, ak), n[1] ||= H("span", null, "Search Actor and Item compendiums for portrait suggestions", -1)]),
				H("label", ok, [H("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.searchWebPortraitAssets,
					disabled: "",
					type: "checkbox"
				}, null, 8, sk), n[2] ||= H("span", null, "Search the web for portrait suggestions (later)", -1)])
			]),
			_: 1
		}));
	}
}), lk = { class: "dui-card-actions" }, uk = ["disabled"], dk = /* @__PURE__ */ I({
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
		return (t, r) => (z(), V(hT, {
			description: "Items in this folder become one-click Trait choices on the Build tab.",
			number: "2",
			title: "Quick Traits"
		}, {
			default: F(() => [U(OO, {
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
			]), H("div", lk, [H("button", {
				class: "dui-btn dui-btn-sm",
				disabled: e.isBusy || !e.quickTraitFolderUuid,
				type: "button",
				onClick: r[3] ||= (e) => n("importRecommendedQuickTraits")
			}, " Import Recommended Quick Traits ", 8, uk)])]),
			_: 1
		}));
	}
}), fk = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, pk = {
	key: 1,
	"aria-live": "polite",
	class: "dui-alert dui-alert-info",
	role: "status"
}, mk = /* @__PURE__ */ I({
	__name: "SettingsMessages",
	props: {
		errorMessage: {},
		settingsMessage: {}
	},
	setup(e) {
		return (t, n) => e.errorMessage ? (z(), B("p", fk, k(e.errorMessage), 1)) : e.settingsMessage ? (z(), B("p", pk, k(e.settingsMessage), 1)) : G("", !0);
	}
}), hk = /* @__PURE__ */ I({
	__name: "NpcBuilderSettingsTab",
	props: { bridge: {} },
	setup(e) {
		let { actorFolders: t, baseActorFolderName: n, canUseDigDownPortraitSearch: r, errorMessage: i, importRecommendedQuickTraits: a, isBusy: o, itemFolders: s, outputActorFolderName: c, portraitSearchStatusLabel: l, quickTraitFolderName: u, refreshPortraitSearchAvailability: d, resetSettingsToDefaults: f, saveBaseActorFolderName: p, saveOutputActorFolderName: m, saveQuickTraitFolderName: h, saveSettings: g, settings: _, settingsMessage: v } = _O(e.bridge);
		return Dr(() => {
			d();
		}), (e, d) => (z(), B("section", null, [
			U(mk, {
				"error-message": P(i),
				"settings-message": P(v)
			}, null, 8, ["error-message", "settings-message"]),
			U(kO, {
				"actor-folders": P(t),
				"base-actor-folder-name": P(n),
				"base-actor-folder-uuid": P(_).baseActorFolderUuid,
				"is-busy": P(o),
				"output-actor-folder-name": P(c),
				"output-actor-folder-uuid": P(_).outputActorFolderUuid,
				onBaseActorFolderNameChange: d[0] ||= (e) => n.value = e,
				onBaseActorFolderUuidChange: d[1] ||= (e) => P(_).baseActorFolderUuid = e,
				onOutputActorFolderNameChange: d[2] ||= (e) => c.value = e,
				onOutputActorFolderUuidChange: d[3] ||= (e) => P(_).outputActorFolderUuid = e,
				onSaveBaseActorFolderName: P(p),
				onSaveOutputActorFolderName: P(m)
			}, null, 8, [
				"actor-folders",
				"base-actor-folder-name",
				"base-actor-folder-uuid",
				"is-busy",
				"output-actor-folder-name",
				"output-actor-folder-uuid",
				"onSaveBaseActorFolderName",
				"onSaveOutputActorFolderName"
			]),
			d[17] ||= H("div", { class: "dui-divider" }, null, -1),
			U(dk, {
				"is-busy": P(o),
				"item-folders": P(s),
				"quick-trait-folder-name": P(u),
				"quick-trait-folder-uuid": P(_).quickTraitFolderUuid,
				onImportRecommendedQuickTraits: P(a),
				onQuickTraitFolderNameChange: d[4] ||= (e) => u.value = e,
				onQuickTraitFolderUuidChange: d[5] ||= (e) => P(_).quickTraitFolderUuid = e,
				onSaveQuickTraitFolderName: P(h)
			}, null, 8, [
				"is-busy",
				"item-folders",
				"quick-trait-folder-name",
				"quick-trait-folder-uuid",
				"onImportRecommendedQuickTraits",
				"onSaveQuickTraitFolderName"
			]),
			d[18] ||= H("div", { class: "dui-divider" }, null, -1),
			U(KO, {
				"include-species-in-name": P(_).includeSpeciesInName,
				onIncludeSpeciesInNameChange: d[6] ||= (e) => P(_).includeSpeciesInName = e
			}, null, 8, ["include-species-in-name"]),
			d[19] ||= H("div", { class: "dui-divider" }, null, -1),
			U(ck, {
				"can-use-dig-down-portrait-search": P(r),
				"search-compendium-portrait-assets": P(_).searchCompendiumPortraitAssets,
				"search-foundry-portrait-assets": P(_).searchFoundryPortraitAssets,
				"search-web-portrait-assets": P(_).searchWebPortraitAssets,
				"status-label": P(l),
				onSearchCompendiumPortraitAssetsChange: d[7] ||= (e) => P(_).searchCompendiumPortraitAssets = e,
				onSearchFoundryPortraitAssetsChange: d[8] ||= (e) => P(_).searchFoundryPortraitAssets = e
			}, null, 8, [
				"can-use-dig-down-portrait-search",
				"search-compendium-portrait-assets",
				"search-foundry-portrait-assets",
				"search-web-portrait-assets",
				"status-label"
			]),
			d[20] ||= H("div", { class: "dui-divider" }, null, -1),
			U(BO, {
				"allow-characteristics": P(_).allowBaseActorCharacteristics,
				"allow-skills": P(_).allowBaseActorSkills,
				"allow-talents": P(_).allowBaseActorTalents,
				"allow-traits": P(_).allowBaseActorTraits,
				"allow-trappings": P(_).allowBaseActorTrappings,
				onAllowCharacteristicsChange: d[9] ||= (e) => P(_).allowBaseActorCharacteristics = e,
				onAllowSkillsChange: d[10] ||= (e) => P(_).allowBaseActorSkills = e,
				onAllowTalentsChange: d[11] ||= (e) => P(_).allowBaseActorTalents = e,
				onAllowTraitsChange: d[12] ||= (e) => P(_).allowBaseActorTraits = e,
				onAllowTrappingsChange: d[13] ||= (e) => P(_).allowBaseActorTrappings = e
			}, null, 8, [
				"allow-characteristics",
				"allow-skills",
				"allow-talents",
				"allow-traits",
				"allow-trappings"
			]),
			d[21] ||= H("div", { class: "dui-divider" }, null, -1),
			U(UO, {
				"auto-select-granted-spells": P(_).autoSelectGrantedSpells,
				onAutoSelectGrantedSpellsChange: d[14] ||= (e) => P(_).autoSelectGrantedSpells = e
			}, null, 8, ["auto-select-granted-spells"]),
			d[22] ||= H("div", { class: "dui-divider" }, null, -1),
			U(ek, {
				"ask-for-linked-skill-specializations": P(_).askForLinkedSkillSpecializations,
				"is-busy": P(o),
				"lower-career-mode": P(_).lowerCareerMode,
				onAskForLinkedSkillSpecializationsChange: d[15] ||= (e) => P(_).askForLinkedSkillSpecializations = e,
				onLowerCareerModeChange: d[16] ||= (e) => P(_).lowerCareerMode = e,
				onResetSettings: P(f),
				onSaveSettings: P(g)
			}, null, 8, [
				"ask-for-linked-skill-specializations",
				"is-busy",
				"lower-career-mode",
				"onResetSettings",
				"onSaveSettings"
			])
		]));
	}
});
//#endregion
//#region src/functions/npc-builder/magic-lore-resolution.ts
function gk(e) {
	return e.map((e) => `${e.kind}:${e.sourceName}:${e.rawLore}`).sort().join("|");
}
function _k(e) {
	return e.filter((e) => e.isAmbiguous);
}
function vk(e, t) {
	return { rows: _k(e).map((e) => ({
		grantLabel: bk(e),
		options: WC(e, t),
		rawLore: e.rawLore,
		resolutionKey: e.resolutionKey,
		selectedLore: "",
		sourceLabel: xk(e)
	})) };
}
function yk(e) {
	return e.kind === "arcane-magic" ? "Arcane Magic" : e.kind === "petty-magic" ? "Petty Magic" : "Spellcaster";
}
function bk(e) {
	return `${yk(e)} from ${e.sourceName}`;
}
function xk(e) {
	return e.source === "talent" ? "Talent" : "Trait";
}
//#endregion
//#region src/state/npc-builder/workflows/spells-workflow.ts
function Sk(e) {
	let t = Pw(), { magicGrants: n, spells: r, selectedSpells: i } = lc(t), a = /* @__PURE__ */ N(""), o = /* @__PURE__ */ N(!1), s = /* @__PURE__ */ N(!1), c = /* @__PURE__ */ N([]), l = /* @__PURE__ */ N(null), u = 0, d = K(() => _k(n.value)), f = K(() => n.value.length - d.value.length);
	Kn(() => gk(n.value), () => {
		m();
	});
	function p() {
		h(), m();
	}
	async function m() {
		let r = u + 1;
		if (u = r, !n.value.length) {
			t.hydrateDetectedSpells([]);
			return;
		}
		s.value = !0, a.value = "";
		try {
			let i = await e.listSpellsForMagicGrants(n.value);
			u === r && t.hydrateDetectedSpells(i);
		} catch (e) {
			u === r && (a.value = Ck(e));
		} finally {
			u === r && (s.value = !1);
		}
	}
	async function h() {
		if (!(c.value.length || o.value)) {
			o.value = !0;
			try {
				c.value = await e.listMagicLoreOptions();
			} catch (e) {
				a.value = Ck(e);
			} finally {
				o.value = !1;
			}
		}
	}
	async function g() {
		a.value = "", await h(), l.value = vk(n.value, c.value);
	}
	function _() {
		let e = l.value;
		if (e) {
			for (let n of e.rows) t.setMagicGrantLoreResolution(n.resolutionKey, n.selectedLore);
			l.value = null, m();
		}
	}
	function v() {
		l.value = null;
	}
	async function y(n) {
		a.value = "";
		try {
			t.addCustomSpell(await e.resolveSpellDrop(n));
		} catch (e) {
			a.value = Ck(e);
		}
	}
	function b(e) {
		t.removeCustomSpell(e);
	}
	function x(e, n) {
		t.setSpellSelected(e, n);
	}
	return {
		ambiguousGrants: d,
		confirmMagicLorePrompt: _,
		dismissMagicLorePrompt: v,
		errorMessage: a,
		handleSpellDrop: y,
		initialize: p,
		isLoadingLoreOptions: o,
		isLoadingSpells: s,
		loadDetectedSpells: m,
		magicGrants: n,
		openMagicLorePrompt: g,
		pendingMagicLorePrompt: l,
		removeCustomSpell: b,
		resolvedGrantCount: f,
		selectedSpells: i,
		setSpellSelected: x,
		spells: r
	};
}
function Ck(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that spell action.";
}
//#endregion
//#region src/view/apps/npc-builder/components/MagicLoreResolutionPromptContent.vue?vue&type=script&setup=true&lang.ts
var wk = { class: "dui-card-body" }, Tk = { class: "dui-card-title" }, Ek = { class: "dui-fieldset" }, Dk = ["onUpdate:modelValue", "aria-label"], Ok = ["value"], kk = { class: "dui-card-actions" }, Ak = /* @__PURE__ */ I({
	__name: "MagicLoreResolutionPromptContent",
	props: { prompt: {} },
	emits: ["applyLores", "keepUnresolved"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (z(), B("section", null, [
			r[4] ||= H("p", null, " Choose concrete magic Lores for ambiguous grants before automatic spells are detected. Unresolved grants can still use manually dropped spells. ", -1),
			(z(!0), B(R, null, L(e.prompt.rows, (e) => (z(), B("section", {
				key: e.resolutionKey,
				class: "dui-card dui-card-border dui-card-sm"
			}, [H("div", wk, [
				H("h3", Tk, k(e.grantLabel), 1),
				H("span", null, k(e.sourceLabel) + " - " + k(e.rawLore || "Any Lore"), 1),
				H("fieldset", Ek, [r[3] ||= H("legend", { class: "dui-fieldset-legend" }, "Lore", -1), zn(H("select", {
					"onUpdate:modelValue": (t) => e.selectedLore = t,
					"aria-label": `Lore for ${e.grantLabel}`,
					class: "dui-select dui-select-sm"
				}, [r[2] ||= H("option", { value: "" }, "Leave unresolved", -1), (z(!0), B(R, null, L(e.options, (e) => (z(), B("option", {
					key: e.key,
					value: e.value
				}, k(e.label) + k(e.wind && e.wind !== "None" ? ` (${e.wind})` : ""), 9, Ok))), 128))], 8, Dk), [[Ho, e.selectedLore]])])
			])]))), 128)),
			H("div", kk, [H("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: r[0] ||= (e) => n("keepUnresolved")
			}, " Keep Unresolved "), H("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: r[1] ||= (e) => n("applyLores")
			}, " Apply Lores ")])
		]));
	}
}), jk = {
	key: 0,
	class: "dui-alert"
}, Mk = {
	key: 1,
	class: "dui-list"
}, Nk = { class: "dui-list-col-grow" }, Pk = { key: 0 }, Fk = { key: 1 }, Ik = {
	key: 2,
	class: "dui-card-actions"
}, Lk = ["disabled"], Rk = /* @__PURE__ */ I({
	__name: "MagicAccessPanel",
	props: {
		ambiguousGrantCount: {},
		isLoadingLoreOptions: { type: Boolean },
		magicGrants: {}
	},
	emits: ["resolveLores"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (z(), V(hT, {
			description: "Magic Talents and Traits determine which spell Lores are available.",
			number: "1",
			title: "Magic Access"
		}, {
			default: F(() => [e.magicGrants.length ? (z(), B("ul", Mk, [(z(!0), B(R, null, L(e.magicGrants, (e) => (z(), B("li", {
				key: `${e.source}:${e.sourceName}:${e.rawLore}`,
				class: "dui-list-row"
			}, [H("div", Nk, [
				H("strong", null, k(P(yk)(e)), 1),
				H("span", null, k(P(xk)(e)) + " - " + k(e.sourceName), 1),
				e.isAmbiguous ? (z(), B("small", Pk, " Needs Lore resolution before automatic spells can be found. ")) : (z(), B("small", Fk, " Lore: " + k(e.rawLore || e.normalizedLore), 1))
			])]))), 128))])) : (z(), B("p", jk, " No magic-enabling Talent or Trait is selected. ")), e.ambiguousGrantCount ? (z(), B("div", Ik, [H("button", {
				class: "dui-btn dui-btn-sm",
				disabled: e.isLoadingLoreOptions,
				type: "button",
				onClick: r[0] ||= (e) => n("resolveLores")
			}, k(e.isLoadingLoreOptions ? "Loading Lores..." : "Resolve Lores"), 9, Lk)])) : G("", !0)]),
			_: 1
		}));
	}
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSpellsTab/labels.ts
function zk(e) {
	return e.source === "custom" ? "Dropped" : e.sourceLabel;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSpellsTab/SpellSelectionPanel.vue?vue&type=script&setup=true&lang.ts
var Bk = { class: "dui-card-actions" }, Vk = ["disabled"], Hk = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, Uk = {
	key: 1,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, Wk = {
	key: 2,
	class: "dui-list"
}, Gk = [
	"aria-label",
	"checked",
	"onChange"
], Kk = { class: "dui-list-col-grow" }, qk = {
	key: 0,
	class: "dui-avatar"
}, Jk = ["src"], Yk = ["onClick"], Xk = {
	key: 3,
	class: "dui-alert"
}, Zk = /* @__PURE__ */ I({
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
		return (t, r) => (z(), V(hT, {
			description: "Select detected Lore spells or drop specific Spell Items.",
			number: "2",
			title: "Spells"
		}, {
			default: F(() => [
				U(vg, {
					description: "Add a specific Spell item regardless of detected Lores.",
					title: "Drop Spell Items",
					onDropData: r[0] ||= (e) => n("spellDrop", e)
				}),
				H("div", Bk, [H("button", {
					class: "dui-btn dui-btn-sm",
					disabled: e.isLoadingSpells || !e.resolvedGrantCount,
					type: "button",
					onClick: r[1] ||= (e) => n("refreshSpells")
				}, k(e.isLoadingSpells ? "Finding spells..." : "Refresh Spells"), 9, Vk), H("span", null, k(e.selectedSpellCount) + " selected / " + k(e.spells.length) + " found", 1)]),
				e.errorMessage ? (z(), B("p", Hk, k(e.errorMessage), 1)) : G("", !0),
				e.ambiguousGrantCount ? (z(), B("p", Uk, k(e.ambiguousGrantCount) + " magic grant" + k(e.ambiguousGrantCount === 1 ? "" : "s") + " still need Lore resolution. You can still drop specific spells for now. ", 1)) : G("", !0),
				e.spells.length ? (z(), B("ul", Wk, [(z(!0), B(R, null, L(e.spells, (e) => (z(), B("li", {
					key: e.key,
					class: "dui-list-row"
				}, [
					H("input", {
						"aria-label": `Use ${e.name}`,
						class: "dui-checkbox dui-checkbox-sm",
						checked: e.selected,
						type: "checkbox",
						onChange: (t) => n("spellSelectedChange", e, t)
					}, null, 40, Gk),
					H("div", Kk, [
						e.img ? (z(), B("div", qk, [H("div", null, [H("img", {
							src: e.img,
							alt: ""
						}, null, 8, Jk)])])) : G("", !0),
						H("strong", null, k(e.name), 1),
						H("span", null, k(e.loreName || "Unknown Lore") + " · " + k(P(zk)(e)), 1)
					]),
					e.source === "custom" ? (z(), B("button", {
						key: 0,
						class: "dui-btn dui-btn-sm",
						type: "button",
						onClick: (t) => n("removeCustomSpell", e.key)
					}, " Remove ", 8, Yk)) : G("", !0)
				]))), 128))])) : (z(), B("p", Xk, " No matching spells found yet. Drop specific spells here, or resolve a non-ambiguous magic Lore. "))
			]),
			_: 1
		}));
	}
}), Qk = /* @__PURE__ */ I({
	__name: "NpcBuilderSpellsTab",
	props: { bridge: {} },
	setup(e) {
		let { ambiguousGrants: t, confirmMagicLorePrompt: n, dismissMagicLorePrompt: r, errorMessage: i, handleSpellDrop: a, initialize: o, isLoadingLoreOptions: s, isLoadingSpells: c, loadDetectedSpells: l, magicGrants: u, openMagicLorePrompt: d, pendingMagicLorePrompt: f, removeCustomSpell: p, resolvedGrantCount: m, selectedSpells: h, setSpellSelected: g, spells: _ } = Sk(e.bridge);
		Dr(() => {
			o();
		});
		function v(e, t) {
			let n = t.target;
			n && g(e.key, n.checked);
		}
		return (e, o) => (z(), B("section", null, [
			U(Uw, {
				open: P(f) !== null,
				title: "Resolve Magic Lores",
				onClose: P(r)
			}, {
				default: F(() => [P(f) ? (z(), V(Ak, {
					key: 0,
					prompt: P(f),
					onApplyLores: P(n),
					onKeepUnresolved: P(r)
				}, null, 8, [
					"prompt",
					"onApplyLores",
					"onKeepUnresolved"
				])) : G("", !0)]),
				_: 1
			}, 8, ["open", "onClose"]),
			U(Rk, {
				"ambiguous-grant-count": P(t).length,
				"is-loading-lore-options": P(s),
				"magic-grants": P(u),
				onResolveLores: P(d)
			}, null, 8, [
				"ambiguous-grant-count",
				"is-loading-lore-options",
				"magic-grants",
				"onResolveLores"
			]),
			o[0] ||= H("div", { class: "dui-divider" }, null, -1),
			U(Zk, {
				"ambiguous-grant-count": P(t).length,
				"error-message": P(i),
				"is-loading-spells": P(c),
				"resolved-grant-count": P(m),
				"selected-spell-count": P(h).length,
				spells: P(_),
				onRefreshSpells: P(l),
				onRemoveCustomSpell: P(p),
				onSpellDrop: P(a),
				onSpellSelectedChange: v
			}, null, 8, [
				"ambiguous-grant-count",
				"error-message",
				"is-loading-spells",
				"resolved-grant-count",
				"selected-spell-count",
				"spells",
				"onRefreshSpells",
				"onRemoveCustomSpell",
				"onSpellDrop"
			])
		]));
	}
}), $k = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, eA = { class: "dui-collapse-title" }, tA = { class: "dui-badge" }, nA = {
	key: 0,
	class: "dui-badge dui-badge-info"
}, rA = {
	key: 1,
	class: "dui-badge dui-badge-warning"
}, iA = { class: "dui-collapse-content" }, aA = { class: "dui-fieldset" }, oA = { class: "dui-fieldset-legend" }, sA = [
	"aria-label",
	"value",
	"onInput"
], cA = {
	key: 0,
	class: "dui-fieldset"
}, lA = [
	"aria-label",
	"value",
	"onChange"
], uA = ["value"], dA = {
	key: 1,
	class: "dui-fieldset"
}, fA = [
	"aria-label",
	"value",
	"onInput"
], pA = ["onClick"], mA = {
	key: 1,
	class: "dui-alert"
}, hA = /* @__PURE__ */ I({
	__name: "NpcBuilderTraitsTab",
	props: {
		bridge: {},
		difficultyOptions: {}
	},
	setup(e) {
		let t = e, n = Pw(), { traits: r } = lc(n), i = /* @__PURE__ */ N("");
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
		return (t, n) => (z(), V(hT, {
			description: "Open a Trait to review its WFRP configuration before building.",
			title: "Traits"
		}, {
			default: F(() => [
				U(vg, {
					description: "Add creature traits or NPC trait items.",
					title: "Drop Trait Items",
					onDropData: c
				}),
				i.value ? (z(), B("p", $k, k(i.value), 1)) : G("", !0),
				(z(!0), B(R, null, L(P(r), (t) => (z(), B("details", {
					key: t.key,
					class: "dui-collapse dui-collapse-arrow dui-card-border"
				}, [H("summary", eA, [
					H("strong", null, k(t.name), 1),
					H("span", tA, k(a(t)), 1),
					t.config.rollable ? (z(), B("span", nA, "Rollable")) : G("", !0),
					t.config.damage ? (z(), B("span", rA, "Damage")) : G("", !0)
				]), H("div", iA, [
					H("fieldset", aA, [H("legend", oA, k(t.config.damage ? "Damage" : "Specification"), 1), H("input", {
						"aria-label": `${t.config.damage ? "Damage" : "Specification"} for ${t.name}`,
						class: "dui-input dui-input-sm",
						value: t.config.specification,
						placeholder: "None",
						type: "text",
						onInput: (e) => s(t, "specification", e)
					}, null, 40, sA)]),
					t.config.rollable && !t.config.damage ? (z(), B("fieldset", cA, [n[0] ||= H("legend", { class: "dui-fieldset-legend" }, "Difficulty", -1), H("select", {
						"aria-label": `Difficulty for ${t.name}`,
						class: "dui-select dui-select-sm",
						value: t.config.defaultDifficulty,
						onChange: (e) => s(t, "defaultDifficulty", e)
					}, [(z(!0), B(R, null, L(e.difficultyOptions, (e) => (z(), B("option", {
						key: e.value,
						value: e.value
					}, k(e.label), 9, uA))), 128))], 40, lA)])) : G("", !0),
					t.config.damage && t.config.dice ? (z(), B("fieldset", dA, [n[1] ||= H("legend", { class: "dui-fieldset-legend" }, "Dice", -1), H("input", {
						"aria-label": `Dice for ${t.name}`,
						class: "dui-input dui-input-sm",
						value: t.config.dice,
						placeholder: "Optional",
						type: "text",
						onInput: (e) => s(t, "dice", e)
					}, null, 40, fA)])) : G("", !0),
					H("button", {
						class: "dui-btn dui-btn-sm",
						type: "button",
						onClick: (e) => o(t)
					}, "Remove", 8, pA)
				])]))), 128)),
				P(r).length ? G("", !0) : (z(), B("p", mA, "No traits are selected yet."))
			]),
			_: 1
		}));
	}
}), gA = "__blank-item__";
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderTrappingsTab/resolution-labels.ts
function _A(e) {
	return e.source === "base" ? "Base" : e.source === "career" ? "Career" : "Custom";
}
function vA(e) {
	return e.resolution.status === "matched" ? `Matched ${e.resolution.selectedName}` : e.resolution.status === "fallback" ? `Blank ${e.resolution.selectedName || e.name}` : e.resolution.candidates.length ? "Choose a match" : "Needs resolution";
}
function yA(e) {
	return e.ignored ? "Ignored" : e.resolution.status === "matched" ? "Matched" : e.resolution.status === "fallback" ? "Blank item" : e.resolution.status === "ambiguous" || e.resolution.candidates.length ? "Choose" : "Needs resolution";
}
function bA(e) {
	let t = "dui-badge";
	return e.ignored ? [t, "dui-badge-ghost"] : e.resolution.status === "matched" ? [t, "dui-badge-success"] : e.resolution.status === "fallback" ? [t, "dui-badge-info"] : e.resolution.status === "ambiguous" || e.resolution.candidates.length ? [t, "dui-badge-warning"] : [t, "dui-badge-error"];
}
function xA(e) {
	return e.resolution.status === "fallback" ? gA : e.resolution.selectedCandidateUuid;
}
function SA(e) {
	return e.source === "career";
}
function CA(e) {
	return e.resolution.candidates.length > 0 || SA(e);
}
function wA(e) {
	return e.resolution.searchTerms.length <= 1 ? "" : `Options: ${e.resolution.searchTerms.join(" / ")}`;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderTrappingsTab/TrappingsTable.vue?vue&type=script&setup=true&lang.ts
var TA = {
	key: 0,
	class: "dui-list"
}, EA = [
	"aria-label",
	"checked",
	"onChange"
], DA = { class: "dui-list-col-grow" }, OA = { key: 0 }, kA = {
	key: 1,
	class: "dui-fieldset"
}, AA = [
	"aria-label",
	"value",
	"onChange"
], jA = {
	key: 0,
	value: ""
}, MA = ["value"], NA = ["value"], PA = { key: 2 }, FA = { class: "dui-card-actions" }, IA = { class: "dui-fieldset" }, LA = [
	"aria-label",
	"value",
	"onInput"
], RA = ["onClick"], zA = {
	key: 1,
	class: "dui-alert"
}, BA = /* @__PURE__ */ I({
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
		return (t, r) => e.trappings.length ? (z(), B("ul", TA, [(z(!0), B(R, null, L(e.trappings, (e) => (z(), B("li", {
			key: e.key,
			class: "dui-list-row"
		}, [H("input", {
			"aria-label": `Use ${e.name}`,
			class: "dui-checkbox dui-checkbox-sm",
			checked: !e.ignored,
			type: "checkbox",
			onChange: (t) => n("useChange", e.key, t)
		}, null, 40, EA), H("div", DA, [
			H("strong", null, k(e.name), 1),
			H("span", null, k(e.resolution.selectedItemType || e.itemType || "trapping") + " · " + k(P(_A)(e)), 1),
			P(wA)(e) ? (z(), B("span", OA, k(P(wA)(e)), 1)) : G("", !0),
			H("span", { class: O(P(bA)(e)) }, k(P(yA)(e)), 3),
			P(CA)(e) ? (z(), B("fieldset", kA, [r[0] ||= H("legend", { class: "dui-fieldset-legend" }, "Resolution", -1), H("select", {
				"aria-label": `Resolution for ${e.name}`,
				class: "dui-select dui-select-sm",
				value: P(xA)(e),
				onChange: (t) => n("resolutionChange", e.key, t)
			}, [
				e.resolution.candidates.length ? (z(), B("option", jA, "Choose match")) : G("", !0),
				(z(!0), B(R, null, L(e.resolution.candidates, (e) => (z(), B("option", {
					key: e.uuid,
					value: e.uuid
				}, k(e.name) + " (" + k(e.sourceLabel) + ") ", 9, MA))), 128)),
				P(SA)(e) ? (z(), B("option", {
					key: 1,
					value: P(gA)
				}, " Blank Item ", 8, NA)) : G("", !0)
			], 40, AA)])) : (z(), B("span", PA, k(P(vA)(e)), 1)),
			H("div", FA, [H("fieldset", IA, [r[1] ||= H("legend", { class: "dui-fieldset-legend" }, "Quantity", -1), H("input", {
				"aria-label": `Quantity for ${e.name}`,
				class: "dui-input dui-input-sm",
				value: e.quantity,
				min: "1",
				type: "number",
				onInput: (t) => n("quantityInput", e.key, t)
			}, null, 40, LA)]), e.source === "custom" ? (z(), B("button", {
				key: 0,
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: (t) => n("removeCustomTrapping", e.key)
			}, " Remove ", 8, RA)) : G("", !0)])
		])]))), 128))])) : (z(), B("p", zA, "No trappings are selected yet."));
	}
}), VA = { class: "dui-card-actions" }, HA = ["disabled"], UA = { key: 0 }, WA = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, GA = /* @__PURE__ */ I({
	__name: "NpcBuilderTrappingsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Pw(), { trappings: r } = lc(n), i = /* @__PURE__ */ N(""), a = /* @__PURE__ */ N(!1), o = K(() => r.value.filter((e) => !e.ignored && e.resolution.status === "unresolved"));
		Dr(() => {
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
		return (e, t) => (z(), V(hT, {
			description: "Review the Items that will be embedded in the generated NPC.",
			title: "Trappings"
		}, {
			default: F(() => [
				U(vg, {
					description: "Add weapons, armour, containers, or any other item.",
					title: "Drop Trapping Items",
					onDropData: d
				}),
				H("div", VA, [H("button", {
					class: "dui-btn dui-btn-sm",
					disabled: a.value || !o.value.length,
					type: "button",
					onClick: u
				}, k(a.value ? "Resolving..." : "Resolve Trappings"), 9, HA), o.value.length ? (z(), B("span", UA, k(o.value.length) + " unresolved ", 1)) : G("", !0)]),
				i.value ? (z(), B("p", WA, k(i.value), 1)) : G("", !0),
				U(BA, {
					trappings: P(r),
					onQuantityInput: s,
					onRemoveCustomTrapping: P(n).removeCustomTrapping,
					onResolutionChange: l,
					onUseChange: c
				}, null, 8, ["trappings", "onRemoveCustomTrapping"])
			]),
			_: 1
		}));
	}
}), KA = { class: "dui-card-body" }, qA = { class: "dui-card-title" }, JA = { class: "dui-badge" }, YA = { class: "dui-fieldset" }, XA = ["onUpdate:modelValue", "aria-label"], ZA = ["value"], QA = [
	"onUpdate:modelValue",
	"aria-label",
	"placeholder"
], $A = {
	key: 0,
	class: "dui-card-actions"
}, ej = { key: 0 }, tj = ["onClick"], nj = {
	key: 0,
	class: "dui-alert dui-alert-info"
}, rj = { class: "dui-card-actions" }, ij = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B("section", null, [
			r[4] ||= H("p", null, " Some Career skills need a specialization before they become concrete WFRP skills. Blank rows can be left unresolved and edited later. ", -1),
			(z(!0), B(R, null, L(e.prompt.rows, (t) => (z(), B("section", {
				key: t.resolutionKey,
				class: "dui-card dui-card-border dui-card-sm"
			}, [H("div", KA, [
				H("h3", qA, k(e.getSkillResolutionLabel(t)), 1),
				H("span", JA, k(t.careerLabel), 1),
				H("fieldset", YA, [r[3] ||= H("legend", { class: "dui-fieldset-legend" }, "Specialization", -1), t.options.length > 1 ? zn((z(), B("select", {
					key: 0,
					"onUpdate:modelValue": (e) => t.resolvedSpecialization = e,
					"aria-label": `Specialization for ${e.getSkillResolutionLabel(t)}`,
					class: "dui-select dui-select-sm"
				}, [r[2] ||= H("option", { value: "" }, "Leave unresolved", -1), (z(!0), B(R, null, L(t.options, (e) => (z(), B("option", {
					key: e,
					value: e
				}, k(e), 9, ZA))), 128))], 8, XA)), [[Ho, t.resolvedSpecialization]]) : zn((z(), B("input", {
					key: 1,
					"onUpdate:modelValue": (e) => t.resolvedSpecialization = e,
					"aria-label": `Specialization for ${e.getSkillResolutionLabel(t)}`,
					class: "dui-input dui-input-sm",
					placeholder: t.suggestedSpecializations.length ? "Type or choose below" : t.specialization,
					type: "text"
				}, null, 8, QA)), [[Vo, t.resolvedSpecialization]])]),
				e.usesFreeformSkillSpecialization(t) ? (z(), B("div", $A, [t.isLoadingSuggestions ? (z(), B("small", ej, "Finding known choices.")) : G("", !0), (z(!0), B(R, null, L(t.suggestedSpecializations, (e) => (z(), B("button", {
					key: `${t.resolutionKey}:${e}`,
					class: "dui-btn dui-btn-sm",
					type: "button",
					onClick: (r) => n("chooseSkillSpecialization", t, e)
				}, k(e), 9, tj))), 128))])) : G("", !0)
			])]))), 128)),
			e.prompt.linkedRows.length ? (z(), B("div", nj, k(e.prompt.linkedRows.length) + " linked skill specialization" + k(e.prompt.linkedRows.length === 1 ? "" : "s") + " will reuse earlier choices from this career chain. ", 1)) : G("", !0),
			H("div", rj, [H("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: r[0] ||= (e) => n("addWithoutResolving")
			}, " Add Without Resolving "), H("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: r[1] ||= (e) => n("applySpecializations")
			}, " Apply Specializations ")])
		]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/errors.ts
function aj(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderBuild.ts
function oj(e, t, n, r, i) {
	let a = Pw(), { advancements: o, buildTraits: s, careers: c, finalActorName: l, finalPortraitPath: u, selectedBaseActor: d, selectedSpells: f, settings: p, trappings: m } = lc(a), h = /* @__PURE__ */ N(!1), g = K(() => !!(d.value && c.value.length && !h.value && !i.value));
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
			r.value = aj(e), n.value = "";
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
//#region src/functions/npc-builder/career-workflow/lower-careers.ts
function sj(e) {
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
function cj(e) {
	return [{
		career: e,
		mode: "add-or-increment"
	}];
}
function lj(e) {
	return [...e.candidates.filter((t) => e.selectedUuids.includes(t.uuid)).map((e) => ({
		career: e,
		mode: "add-if-missing"
	})), {
		career: e.droppedCareer,
		mode: "add-or-increment"
	}];
}
function uj(e) {
	let t = e.candidates.filter((t) => e.selectedUuids.includes(t.uuid)).length;
	return t === 0 ? "" : `Added ${t} lower-tier career candidate${t === 1 ? "" : "s"}.`;
}
function dj(e, t) {
	return e?.selectedUuids.includes(t) ?? !1;
}
function fj(e) {
	let { candidateUuid: t, isAlreadyQueued: n, prompt: r, selected: i } = e;
	return !r || n ? null : i ? [...new Set([...r.selectedUuids, t])] : r.selectedUuids.filter((e) => e !== t);
}
//#endregion
//#region src/functions/npc-builder/career-workflow/skill-resolution.ts
function pj(e, t) {
	let n = /* @__PURE__ */ new Map(), r = [], i = [];
	for (let a of e) {
		let e = /* @__PURE__ */ new Map();
		for (let o of kS(a.career.uuid, a.career.grants.skills)) {
			let s = OS(o.originalName);
			if (!s) continue;
			let c = AS(o.originalName), l = n.get(c) ?? [], u = e.get(c) ?? 0, d = t.enableLinkedSkillResolution && l[u] ? l[u] : "";
			if (e.set(c, u + 1), d) {
				r.push({
					linkedFromKey: d,
					resolutionKey: o.resolutionKey
				});
				continue;
			}
			i.push({
				baseName: s.baseName,
				careerLabel: _j(a.career),
				isLoadingSuggestions: !1,
				occurrence: o.occurrence,
				options: s.options,
				originalName: s.originalName,
				resolvedSpecialization: vj(s),
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
function mj(e) {
	return e.resolvedSpecialization.trim() ? ES(e.baseName, e.resolvedSpecialization) : "";
}
function hj(e) {
	return e.occurrence > 0 ? `${e.originalName}, choice ${e.occurrence + 1}` : e.originalName;
}
function gj(e) {
	return e.options.length <= 1 && e.specialization.trim().toLocaleLowerCase() === "any";
}
function _j(e) {
	return e.level === null ? e.name : `${e.name}, tier ${e.level}`;
}
function vj(e) {
	return e.specialization.trim().toLocaleLowerCase() === "any" ? "" : e.options[0] ?? "";
}
//#endregion
//#region src/state/npc-builder/workflows/skill-suggestions.ts
async function yj(e, t) {
	await Promise.all(t.rows.map(async (t) => {
		if (gj(t)) {
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
//#region src/state/npc-builder/workflows/career-drop-workflow.ts
function bj(e) {
	let t = Pw(), { careers: n, settings: r } = lc(t), i = /* @__PURE__ */ N(""), a = /* @__PURE__ */ N(""), o = /* @__PURE__ */ N(!1), s = /* @__PURE__ */ N(null), c = /* @__PURE__ */ N(null), l = K(() => sj(s.value));
	async function u(t) {
		a.value = "";
		try {
			await d(await e.resolveCareerDrop(t));
		} catch (e) {
			a.value = xj(e);
		}
	}
	async function d(e) {
		if (r.value.lowerCareerMode === "never") {
			p(e);
			return;
		}
		o.value = !0, i.value = "Checking for lower-tier career candidates.";
		try {
			await f(e);
		} finally {
			o.value = !1;
		}
	}
	async function f(t) {
		let n = await e.findLowerCareerCandidates(t), a = n.filter((e) => !x(e.uuid));
		if (!a.length) {
			p(t), i.value = "";
			return;
		}
		if (r.value.lowerCareerMode === "auto-add-all") {
			m([...a.map((e) => ({
				career: e,
				mode: "add-if-missing"
			})), {
				career: t,
				mode: "add-or-increment"
			}], {
				enableLinkedSkillResolution: !r.value.askForLinkedSkillSpecializations,
				message: `Added ${a.length} lower-tier career candidate${a.length === 1 ? "" : "s"}.`
			});
			return;
		}
		s.value = {
			candidates: n,
			droppedCareer: t,
			selectedUuids: a.map((e) => e.uuid)
		}, i.value = "";
	}
	function p(e) {
		m(cj(e), {
			enableLinkedSkillResolution: !1,
			message: ""
		});
	}
	function m(t, n) {
		let r = pj(t, n);
		if (r.rows.length) {
			c.value = r, yj(e, c.value);
			return;
		}
		b(t, n.message);
	}
	function h() {
		let e = s.value;
		e && (s.value = null, m(lj(e), {
			enableLinkedSkillResolution: !r.value.askForLinkedSkillSpecializations,
			message: uj(e)
		}));
	}
	function g(e, t) {
		e.resolvedSpecialization = t;
	}
	function _() {
		let e = s.value;
		e && (s.value = null, p(e.droppedCareer));
	}
	function v() {
		let e = c.value;
		if (e) {
			for (let n of e.rows) t.setSkillGrantResolution(n.resolutionKey, mj(n));
			for (let n of e.linkedRows) t.setSkillGrantResolution(n.resolutionKey, t.getSkillGrantResolution(n.linkedFromKey));
			c.value = null, b(e.entries, e.message);
		}
	}
	function y() {
		let e = c.value;
		e && (c.value = null, b(e.entries, e.message));
	}
	function b(e, n) {
		for (let n of e) n.mode === "add-if-missing" ? t.addCareerIfMissing(n.career) : t.addCareer(n.career);
		i.value = n;
	}
	function x(e) {
		return n.value.some((t) => t.uuid === e);
	}
	function S(e) {
		return dj(s.value, e);
	}
	function C(e, t) {
		let n = fj({
			candidateUuid: e.uuid,
			isAlreadyQueued: x(e.uuid),
			prompt: s.value,
			selected: t
		});
		n && s.value && (s.value.selectedUuids = n);
	}
	return {
		buildMessage: i,
		chooseSkillSpecialization: g,
		confirmLowerCareerPrompt: h,
		confirmSkillResolutionPrompt: v,
		dismissLowerCareerPrompt: _,
		dismissSkillResolutionPrompt: y,
		errorMessage: a,
		getSkillResolutionLabel: hj,
		handleCareerDrop: u,
		isCareerQueued: x,
		isFindingLowerCareers: o,
		isLowerCareerSelected: S,
		lowerCareerCandidateGroups: l,
		pendingLowerCareerPrompt: s,
		pendingSkillResolutionPrompt: c,
		setLowerCareerSelected: C,
		usesFreeformSkillSpecialization: gj
	};
}
function xj(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderCareerDropWorkflow.ts
function Sj(e) {
	return bj(e);
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderInitialData.ts
function Cj(e, t) {
	let n = Pw(), { selectedBaseActorUuid: r, settings: i } = lc(n), a = /* @__PURE__ */ N(!1), o = /* @__PURE__ */ N(!1), s = /* @__PURE__ */ N([]);
	Dr(async () => {
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
			t.value = aj(e);
		} finally {
			a.value = !1;
		}
	}), Kn(r, async (r) => {
		if (t.value = "", !r) {
			n.clearBaseDraftData();
			return;
		}
		o.value = !0;
		try {
			let t = await e.loadBaseActorDraftData(r);
			n.hydrateBaseActorDraftData(t);
		} catch (e) {
			t.value = aj(e), n.clearBaseDraftData();
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
//#region src/functions/npc-builder/metadata-lookups.ts
function wj() {
	return {
		inFlightNames: [],
		successfulNames: []
	};
}
function Tj(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) n.kind === "skill" && !n.characteristicKey && !OS(n.name) && t.add(n.name);
	return [...t];
}
function Ej(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) n.kind === "talent" && !n.talentMaximumKey && t.add(n.name);
	return [...t];
}
function Dj(e, t) {
	let n = new Set([...t.inFlightNames, ...t.successfulNames]);
	return e.filter((e) => {
		let t = AS(e);
		return n.has(t) ? !1 : (n.add(t), !0);
	});
}
function Oj(e, t) {
	return {
		...e,
		inFlightNames: jj([...e.inFlightNames, ...t])
	};
}
function kj(e, t) {
	let n = new Set(jj(t));
	return {
		inFlightNames: e.inFlightNames.filter((e) => !n.has(e)),
		successfulNames: jj([...e.successfulNames, ...n])
	};
}
function Aj(e, t) {
	let n = new Set(jj(t));
	return {
		...e,
		inFlightNames: e.inFlightNames.filter((e) => !n.has(e))
	};
}
function jj(e) {
	return [...new Set([...e].map(AS).filter(Boolean))];
}
//#endregion
//#region src/state/npc-builder/workflows/metadata-lookups-workflow.ts
function Mj(e) {
	let t = Pw(), { advancements: n } = lc(t), r = /* @__PURE__ */ N(wj()), i = /* @__PURE__ */ N(wj()), a = /* @__PURE__ */ N(""), o = /* @__PURE__ */ N(""), s = K(() => Tj(n.value)), c = K(() => Ej(n.value)), l = K(() => [a.value, o.value].filter(Boolean).join(" ")), u = K(() => l.value ? "degraded" : r.value.inFlightNames.length + i.value.inFlightNames.length > 0 ? "loading" : "ready");
	Kn(s, (e) => {
		d(e);
	}, { immediate: !0 }), Kn(c, (e) => {
		f(e);
	}, { immediate: !0 });
	async function d(n) {
		if (!n.length) {
			a.value = "";
			return;
		}
		let i = Dj(n, r.value);
		if (i.length) {
			r.value = Oj(r.value, i), a.value = "";
			try {
				let n = await e.listSkillCharacteristics(i);
				r.value = kj(r.value, i), t.hydrateSkillCharacteristics(n);
			} catch (e) {
				r.value = Aj(r.value, i), a.value = Nj("skill characteristics", e);
			}
		}
	}
	async function f(n) {
		if (!n.length) {
			o.value = "";
			return;
		}
		let r = Dj(n, i.value);
		if (r.length) {
			i.value = Oj(i.value, r), o.value = "";
			try {
				let n = await e.listTalentMaximums(r);
				i.value = kj(i.value, r), t.hydrateTalentMaximums(n);
			} catch (e) {
				i.value = Aj(i.value, r), o.value = Nj("Talent maximums", e);
			}
		}
	}
	async function p() {
		await Promise.all([d(s.value), f(c.value)]);
	}
	return {
		metadataLookupError: l,
		metadataLookupStatus: u,
		retryMetadataLookups: p
	};
}
function Nj(e, t) {
	return `Could not load ${e}.${t instanceof Error ? ` ${t.message}` : ""}`;
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderMetadataLookups.ts
function Pj(e) {
	return Mj(e);
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp.vue?vue&type=script&setup=true&lang.ts
var Fj = ["aria-labelledby"], Ij = { class: "dui-card-body" }, Lj = ["id"], Rj = { class: "dui-card-actions" }, zj = {
	"aria-label": "NPC Builder sections",
	class: "dui-tabs dui-tabs-border",
	role: "tablist"
}, Bj = [
	"id",
	"aria-controls",
	"aria-selected",
	"onClick"
], Vj = ["disabled"], Hj = ["id", "aria-labelledby"], Uj = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, Wj = {
	key: 1,
	"aria-live": "polite",
	class: "dui-alert dui-alert-info",
	role: "status"
}, Gj = {
	key: 2,
	"aria-live": "polite",
	class: "dui-alert dui-alert-warning",
	role: "status"
}, Kj = /* @__PURE__ */ I({
	__name: "NpcBuilderApp",
	props: { bridge: {} },
	setup(e) {
		let t = e, { hasMagicAccess: n, selectedSpells: r } = lc(Pw()), i = /* @__PURE__ */ N("builder"), a = fr(), o = [
			{
				id: "builder",
				label: "Build"
			},
			{
				id: "advancements",
				label: "Advances"
			},
			{
				id: "trappings",
				label: "Trappings"
			},
			{
				id: "traits",
				label: "Traits"
			}
		], s = K(() => {
			let e = [...o];
			return (n.value || r.value.length) && e.push({
				id: "spells",
				label: "Spells"
			}), e.push({
				id: "settings",
				label: "Settings"
			}), e;
		}), { buildMessage: c, chooseSkillSpecialization: l, confirmLowerCareerPrompt: u, confirmSkillResolutionPrompt: d, dismissLowerCareerPrompt: f, dismissSkillResolutionPrompt: p, errorMessage: m, getSkillResolutionLabel: h, handleCareerDrop: g, isCareerQueued: _, isFindingLowerCareers: v, isLowerCareerSelected: y, lowerCareerCandidateGroups: b, pendingLowerCareerPrompt: x, pendingSkillResolutionPrompt: S, setLowerCareerSelected: C, usesFreeformSkillSpecialization: w } = Sj(t.bridge), { buildNpc: ee, canBuild: T } = oj(t.bridge, i, c, m, v), { isLoadingActors: te, isLoadingBaseDraft: ne, traitDifficultyOptions: re } = Cj(t.bridge, m), { metadataLookupError: E, metadataLookupStatus: ie, retryMetadataLookups: ae } = Pj(t.bridge);
		return (e, n) => (z(), B("section", {
			"aria-labelledby": `${P(a)}-heading`,
			class: "dui-card dui-card-border dui-card-sm"
		}, [
			H("header", Ij, [H("div", null, [n[2] ||= H("span", { class: "dui-badge dui-badge-outline" }, "WFRP4e Customizer", -1), H("h1", {
				id: `${P(a)}-heading`,
				class: "dui-card-title"
			}, "NPC Builder", 8, Lj)]), H("div", Rj, [H("nav", zj, [(z(!0), B(R, null, L(s.value, (e) => (z(), B("button", {
				id: `${P(a)}-${e.id}-tab`,
				key: e.id,
				"aria-controls": `${P(a)}-panel`,
				"aria-selected": i.value === e.id,
				class: O(["dui-tab", { "dui-tab-active": i.value === e.id }]),
				role: "tab",
				type: "button",
				onClick: (t) => i.value = e.id
			}, k(e.label), 11, Bj))), 128))]), H("button", {
				class: "dui-btn dui-btn-primary",
				disabled: !P(T),
				type: "button",
				onClick: n[0] ||= (...e) => P(ee) && P(ee)(...e)
			}, " Build NPC ", 8, Vj)])]),
			U(Uw, {
				open: P(x) !== null,
				title: "Add Lower-Tier Careers?",
				onClose: P(f)
			}, {
				default: F(() => [P(x) ? (z(), V(Rw, {
					key: 0,
					"candidate-groups": P(b),
					"is-career-queued": P(_),
					"is-lower-career-selected": P(y),
					prompt: P(x),
					onAddDroppedOnly: P(f),
					onAddSelected: P(u),
					onLowerCareerSelected: P(C)
				}, null, 8, [
					"candidate-groups",
					"is-career-queued",
					"is-lower-career-selected",
					"prompt",
					"onAddDroppedOnly",
					"onAddSelected",
					"onLowerCareerSelected"
				])) : G("", !0)]),
				_: 1
			}, 8, ["open", "onClose"]),
			U(Uw, {
				open: P(S) !== null,
				title: "Resolve Skill Specializations",
				onClose: P(p)
			}, {
				default: F(() => [P(S) ? (z(), V(ij, {
					key: 0,
					"get-skill-resolution-label": P(h),
					prompt: P(S),
					"uses-freeform-skill-specialization": P(w),
					onAddWithoutResolving: P(p),
					onApplySpecializations: P(d),
					onChooseSkillSpecialization: P(l)
				}, null, 8, [
					"get-skill-resolution-label",
					"prompt",
					"uses-freeform-skill-specialization",
					"onAddWithoutResolving",
					"onApplySpecializations",
					"onChooseSkillSpecialization"
				])) : G("", !0)]),
				_: 1
			}, 8, ["open", "onClose"]),
			H("section", {
				id: `${P(a)}-panel`,
				"aria-labelledby": `${P(a)}-${i.value}-tab`,
				class: "dui-card-body",
				role: "tabpanel"
			}, [
				P(m) ? (z(), B("p", Uj, k(P(m)), 1)) : P(c) ? (z(), B("p", Wj, k(P(c)), 1)) : G("", !0),
				P(ie) === "degraded" ? (z(), B("div", Gj, [
					H("span", null, k(P(E)), 1),
					n[3] ||= H("span", null, "Advancement rows remain editable with reduced metadata.", -1),
					H("button", {
						class: "dui-btn dui-btn-sm",
						type: "button",
						onClick: n[1] ||= (...e) => P(ae) && P(ae)(...e)
					}, " Retry Metadata ")
				])) : G("", !0),
				i.value === "settings" ? (z(), V(hk, {
					key: 3,
					bridge: t.bridge
				}, null, 8, ["bridge"])) : i.value === "advancements" ? (z(), V(ZT, { key: 4 })) : i.value === "trappings" ? (z(), V(GA, {
					key: 5,
					bridge: t.bridge
				}, null, 8, ["bridge"])) : i.value === "traits" ? (z(), V(hA, {
					key: 6,
					bridge: t.bridge,
					"difficulty-options": P(re)
				}, null, 8, ["bridge", "difficulty-options"])) : i.value === "spells" ? (z(), V(Qk, {
					key: 7,
					bridge: t.bridge
				}, null, 8, ["bridge"])) : (z(), V(mO, {
					key: 8,
					bridge: t.bridge,
					"is-loading-actors": P(te),
					"is-loading-base-draft": P(ne),
					onCareerDrop: P(g)
				}, null, 8, [
					"bridge",
					"is-loading-actors",
					"is-loading-base-draft",
					"onCareerDrop"
				]))
			], 8, Hj)
		], 8, Fj));
	}
});
//#endregion
//#region src/functions/npc-builder/extract-career-grants.ts
function qj(e) {
	return {
		characteristics: Jj(e),
		skills: Yj(e),
		talents: Zj(e, [["talents", "value"], ["talents"]]),
		trappings: Zj(e, [["trappings", "value"], ["trappings"]])
	};
}
function Jj(e) {
	let t = Zj(e, [["characteristics", "value"], ["characteristics"]]);
	if (t.length) return t.map(Xj);
	let n = Z(e, ["characteristics"]);
	if (!X(n)) return [];
	let r = [];
	for (let [e, t] of Object.entries(n)) t && r.push(Xj(e));
	return $j(r);
}
function Yj(e) {
	return Zj(e, [["skills", "value"], ["skills"]], { preserveDuplicates: !0 });
}
function Xj(e) {
	let t = e.trim().toLocaleLowerCase();
	if (Mc(t)) return Ac[t];
	let n = jc[t];
	return n ? Ac[n] : e.trim();
}
function Zj(e, t, n = {}) {
	for (let r of t) {
		let t = jl(Z(e, r));
		if (t.length) return n.preserveDuplicates ? Qj(t) : $j(t);
	}
	return [];
}
function Qj(e) {
	return e.map((e) => e.trim()).filter(Boolean);
}
function $j(e) {
	return [...new Set(Qj(e))].sort((e, t) => e.localeCompare(t));
}
//#endregion
//#region src/module/foundry/compendiums.ts
function eM(e, t) {
	return t.uuid ? t.uuid : t._id && e.getUuid ? e.getUuid(t._id) : "";
}
function tM(e) {
	return e.documentName === "Item" || Q(e, ["metadata", "type"]) === "Item" || Q(e, ["metadata", "documentName"]) === "Item";
}
function nM(e) {
	return e.documentName === "Actor" || Q(e, ["metadata", "type"]) === "Actor" || Q(e, ["metadata", "documentName"]) === "Actor";
}
function rM(e) {
	return Array.isArray(e) ? e.filter(aM) : X(e) && Array.isArray(e.contents) ? e.contents.filter(aM) : oM(e) ? [...e].flatMap((e) => {
		let t = Array.isArray(e) ? e[1] : e;
		return aM(t) ? [t] : [];
	}) : [];
}
function iM() {
	return new Promise((e) => {
		globalThis.setTimeout(e, 0);
	});
}
function aM(e) {
	return X(e);
}
function oM(e) {
	return X(e) && Symbol.iterator in e;
}
//#endregion
//#region src/module/wfrp4e/career-summary.ts
function sM(e) {
	return {
		careerGroup: cM(e),
		grants: qj(e.system),
		img: e.img ?? "",
		level: lM(e),
		name: e.name,
		uuid: e.uuid
	};
}
function cM(e) {
	return Q(e.system, ["careergroup", "value"]);
}
function lM(e) {
	let t = Z(e.system, ["level", "value"]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
//#endregion
//#region src/module/wfrp4e/career-index.ts
var uM = [
	"name",
	"type",
	"img",
	"system.careergroup.value",
	"system.characteristics",
	"system.level.value",
	"system.skills",
	"system.talents",
	"system.trappings"
], dM = /* @__PURE__ */ new Map(), fM = "idle", pM = null;
function mM() {
	return pM || (fM = "indexing", dM.clear(), pM = gM().then(() => {
		fM = "ready";
	}).catch((e) => {
		fM = "error", t("wfrp4e-customizer-apps | Career indexing failed.", e);
	}), pM);
}
async function hM(e) {
	return fM === "idle" && mM(), !e.careerGroup || e.level === null ? [] : [...dM.values()].filter((t) => xM(t, e)).sort(CM);
}
async function gM() {
	_M(), await iM();
	for (let e of game.packs ?? []) {
		if (!tM(e) || !e.getIndex) continue;
		let t = await e.getIndex({ fields: uM });
		for (let n of rM(t)) {
			let t = vM(e, n);
			t && dM.set(t.uuid, t);
		}
		await iM();
	}
}
function _M() {
	for (let e of game.items?.contents ?? []) e.type === "career" && dM.set(e.uuid, sM(e));
}
function vM(e, t) {
	let n = eM(e, t);
	if (t.type !== "career" || !t.name || !n) return null;
	let r = Z(t, ["system"]);
	return {
		careerGroup: yM(t),
		grants: qj(r),
		img: t.img ?? "",
		level: bM(t),
		name: t.name,
		uuid: n
	};
}
function yM(e) {
	let t = Z(e, [
		"system",
		"careergroup",
		"value"
	]);
	return typeof t == "string" ? t.trim() : "";
}
function bM(e) {
	let t = Z(e, [
		"system",
		"level",
		"value"
	]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
function xM(e, t) {
	return e.uuid !== t.uuid && e.level !== null && t.level !== null && e.level < t.level && SM(e.careerGroup) === SM(t.careerGroup);
}
function SM(e) {
	return e.trim().toLocaleLowerCase();
}
function CM(e, t) {
	let n = e.level ?? 0, r = t.level ?? 0;
	return n === r ? e.name.localeCompare(t.name) : n - r;
}
//#endregion
//#region src/module/wfrp4e/skill-specializations.ts
var wM = [
	"name",
	"type",
	"system.characteristic.value"
], TM = /* @__PURE__ */ new Map(), EM = /* @__PURE__ */ new Map(), DM = /* @__PURE__ */ new Map(), OM = "idle", kM = null;
async function AM(e) {
	let t = AS(e);
	return t ? (OM === "idle" && MM(), kM && await kM, [...TM.get(t) ?? []].sort((e, t) => e.localeCompare(t))) : [];
}
async function jM(e) {
	return OM === "idle" && MM(), kM && await kM, e.flatMap((e) => {
		let t = RM(e);
		return t ? [{
			...t,
			skillName: e
		}] : [];
	});
}
function MM() {
	return kM || (OM = "indexing", TM.clear(), EM.clear(), DM.clear(), kM = NM().then(() => {
		OM = "ready";
	}).catch((e) => {
		OM = "error", t("wfrp4e-customizer-apps | Skill specialization indexing failed.", e);
	}), kM);
}
async function NM() {
	zM(), await iM();
	for (let e of game.packs ?? []) {
		if (!tM(e) || !e.getIndex) continue;
		let t = await e.getIndex({ fields: wM });
		for (let e of rM(t)) FM(e);
		await iM();
	}
}
function PM(e) {
	if (e.type !== "skill") return;
	IM(e);
	let t = DS(e.name);
	if (!t) return;
	let n = AS(t.baseName), r = TM.get(n) ?? /* @__PURE__ */ new Set();
	r.add(t.specialization), TM.set(n, r);
}
function FM(e) {
	if (e.type !== "skill" || !e.name) return;
	LM(e);
	let t = DS(e.name);
	if (!t) return;
	let n = AS(t.baseName), r = TM.get(n) ?? /* @__PURE__ */ new Set();
	r.add(t.specialization), TM.set(n, r);
}
function IM(e) {
	let t = Q(e.system, ["characteristic", "value"]);
	if (!Mc(t)) return;
	let n = {
		characteristicKey: t,
		characteristicName: Ac[t],
		skillName: e.name
	}, r = AS(e.name), i = AS(DS(e.name)?.baseName ?? e.name);
	EM.set(r, n), DM.has(i) || DM.set(i, n);
}
function LM(e) {
	let t = Q(e, [
		"system",
		"characteristic",
		"value"
	]);
	if (!Mc(t) || !e.name) return;
	let n = {
		characteristicKey: t,
		characteristicName: Ac[t],
		skillName: e.name
	}, r = AS(e.name), i = AS(DS(e.name)?.baseName ?? e.name);
	EM.set(r, n), DM.has(i) || DM.set(i, n);
}
function RM(e) {
	let t = AS(e), n = AS(DS(e)?.baseName ?? e);
	return EM.get(t) ?? DM.get(n) ?? null;
}
function zM() {
	for (let e of game.items?.contents ?? []) PM(e);
}
//#endregion
//#region src/module/foundry/item-sources.ts
function BM(e, t) {
	return {
		img: "systems/wfrp4e/icons/blank.png",
		name: e,
		system: {},
		type: t
	};
}
function VM(e, t, n) {
	let r = e ? e.toObject() : BM(t, n);
	return delete r._id, r;
}
function HM(e, t, n) {
	return e.items?.contents.find((e) => e.type === n && GM(e.name, t)) ?? null;
}
function UM(e, t, n) {
	return e.items?.contents.find((e) => t && e.uuid === t ? !0 : GM(e.name, n)) ?? null;
}
function WM(e, t) {
	return game.items?.contents.find((n) => t.includes(n.type) && GM(n.name, e)) ?? null;
}
function GM(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/wfrp4e/item-lookup.ts
async function KM(e, t) {
	return await game.wfrp4e?.utility?.findItem?.(e, t) || WM(e, t);
}
//#endregion
//#region src/module/wfrp4e/talent-maximums.ts
async function qM(e) {
	let t = [];
	for (let n of JM(e)) {
		let e = await KM(n, ["talent"]);
		e && t.push({
			maximumFormula: Q(e.system, ["max", "formula"]),
			maximumKey: Q(e.system, ["max", "value"]),
			talentName: n
		});
	}
	return t;
}
function JM(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.trim().toLocaleLowerCase();
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
//#endregion
//#region src/functions/npc-builder/normalize-npc-builder-settings.ts
var YM = {
	...NC(),
	allowBaseActorCharacteristics: !0,
	allowBaseActorSkills: !0,
	allowBaseActorTalents: !0
};
function XM(e) {
	let t = NC();
	return QM(e) ? {
		allowBaseActorCharacteristics: $M(e.allowBaseActorCharacteristics, YM.allowBaseActorCharacteristics),
		allowBaseActorSkills: $M(e.allowBaseActorSkills, YM.allowBaseActorSkills),
		allowBaseActorTalents: $M(e.allowBaseActorTalents, YM.allowBaseActorTalents),
		allowBaseActorTraits: $M(e.allowBaseActorTraits, YM.allowBaseActorTraits),
		allowBaseActorTrappings: $M(e.allowBaseActorTrappings, YM.allowBaseActorTrappings),
		askForLinkedSkillSpecializations: $M(e.askForLinkedSkillSpecializations, YM.askForLinkedSkillSpecializations),
		autoSelectGrantedSpells: $M(e.autoSelectGrantedSpells, YM.autoSelectGrantedSpells),
		baseActorFolderUuid: eN(e.baseActorFolderUuid, YM.baseActorFolderUuid),
		includeSpeciesInName: $M(e.includeSpeciesInName, YM.includeSpeciesInName),
		lowerCareerMode: ZM(e.lowerCareerMode) ? e.lowerCareerMode : YM.lowerCareerMode,
		outputActorFolderUuid: eN(e.outputActorFolderUuid, YM.outputActorFolderUuid),
		quickTraitFolderUuid: eN(e.quickTraitFolderUuid, YM.quickTraitFolderUuid),
		searchCompendiumPortraitAssets: $M(e.searchCompendiumPortraitAssets, YM.searchCompendiumPortraitAssets),
		searchFoundryPortraitAssets: $M(e.searchFoundryPortraitAssets, YM.searchFoundryPortraitAssets),
		searchWebPortraitAssets: $M(e.searchWebPortraitAssets, YM.searchWebPortraitAssets)
	} : t;
}
function ZM(e) {
	return e === "auto-add-all" || e === "never" || e === "prompt";
}
function QM(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function $M(e, t) {
	return typeof e == "boolean" ? e : t;
}
function eN(e, t) {
	return typeof e == "string" ? e : t;
}
//#endregion
//#region src/module/apps/npc-builder/settings.ts
var tN = Zb({
	defaultValue: NC(),
	key: "npcBuilderSettings",
	name: "NPC Builder Settings",
	normalize: XM
});
function nN() {
	Qb(tN);
}
function rN() {
	return $b(tN);
}
async function iN(e) {
	return await ex(tN, e);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/advancements.ts
async function aN(e, t) {
	let n = {}, r = [], i = [];
	for (let a of t) {
		let t = Math.floor(a.current);
		if (t === 0) continue;
		let o = a.baseAdvances + t;
		if (a.kind === "characteristic") {
			dN(n, a, o);
			continue;
		}
		let s = HM(e, a.name, a.kind);
		if (s) {
			r.push({
				_id: s.id,
				"system.advances.value": o
			});
			continue;
		}
		let c = VM(await KM(a.name, [a.kind]), a.name, a.kind);
		c.type = a.kind, Ml(c, [
			"system",
			"advances",
			"value"
		], o), i.push(c);
	}
	Object.keys(n).length && await e.update(n), r.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", r), i.length && await e.createEmbeddedDocuments("Item", i);
}
function oN(e) {
	let t = [];
	for (let [n, r] of Object.entries(Ac)) {
		let i = Ol(e.system, [[
			"characteristics",
			n,
			"advances",
			"value"
		], [
			"characteristics",
			n,
			"advances"
		]]), a = Ol(e.system, [
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
function sN(e, t) {
	return e.items?.contents.filter((e) => e.type === t).map((n) => cN(e, n, t)) ?? [];
}
function cN(e, t, n) {
	let r = Ol(t.system, [["advances", "value"], ["advances"]]);
	if (n === "talent") return {
		baseAdvances: r,
		current: r,
		kind: n,
		name: t.name,
		talentMaximumFormula: Q(t.system, ["max", "formula"]),
		talentMaximumKey: Q(t.system, ["max", "value"])
	};
	let i = lN(t), a = i ? uN(e, i) : 0, o = kl(t.system, [["total", "value"], ["total"]]), s = o !== null && i ? Math.max(0, o - a) : 0, c = Math.max(r, s), l = {
		baseAdvances: c,
		current: i ? a + c : c,
		kind: n,
		name: t.name
	};
	return i && (l.characteristicKey = i, l.characteristicName = Ac[i]), l;
}
function lN(e) {
	let t = Q(e.system, ["characteristic", "value"]);
	return Mc(t) ? t : void 0;
}
function uN(e, t) {
	return Ol(e.system, [
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
function dN(e, t, n) {
	let r = jc[t.name.trim().toLocaleLowerCase()];
	r && (e[`system.characteristics.${r}.advances`] = n);
}
//#endregion
//#region src/module/foundry/embedded-items.ts
function fN() {
	return {
		creates: [],
		deletes: [],
		updates: []
	};
}
async function pN(e, t) {
	t.deletes.length && e.deleteEmbeddedDocuments && await e.deleteEmbeddedDocuments("Item", t.deletes), t.updates.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", t.updates), t.creates.length && await e.createEmbeddedDocuments("Item", t.creates);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/config.ts
function mN(e, t) {
	Ml(e, [
		"system",
		"specification",
		"value"
	], t.specification), t.rollable && !t.damage && Ml(e, [
		"system",
		"rollable",
		"defaultDifficulty"
	], t.defaultDifficulty), t.damage && t.dice && Ml(e, [
		"system",
		"rollable",
		"dice"
	], t.dice);
}
function hN(e, t) {
	return {
		_id: e,
		"system.specification.value": t.specification,
		...t.rollable && !t.damage ? { "system.rollable.defaultDifficulty": t.defaultDifficulty } : {},
		...t.damage && t.dice ? { "system.rollable.dice": t.dice } : {}
	};
}
function gN(e) {
	return {
		...mS(),
		attackType: bN(e.system, ["rollable", "attackType"]) || "melee",
		bonusCharacteristic: bN(e.system, ["rollable", "bonusCharacteristic"]),
		damage: Al(e.system, [["rollable", "damage"]]),
		defaultDifficulty: bN(e.system, ["rollable", "defaultDifficulty"]) || "challenging",
		dice: bN(e.system, ["rollable", "dice"]),
		rollable: Al(e.system, [["rollable", "value"]]),
		skill: bN(e.system, ["rollable", "skill"]),
		sl: Al(e.system, [["rollable", "SL"]], !0),
		specification: bN(e.system, ["specification", "value"])
	};
}
function _N(e) {
	return yN(e.system);
}
function vN(e) {
	return yN(e.system);
}
function yN(e) {
	return Al(e, [["disabled"], ["disabled", "value"]]);
}
function bN(e, t) {
	let n = Z(e, t);
	return typeof n == "string" ? n.trim() : typeof n == "number" ? String(n) : "";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/apply.ts
async function xN(e, t) {
	let n = fN();
	for (let r of t) {
		let t = r.source === "base" ? UM(e, r.sourceUuid, r.name) : HM(e, r.name, "trait");
		if (r.ignored) {
			t && n.deletes.push(t.id);
			continue;
		}
		if (t) {
			n.updates.push(hN(t.id, r.config));
			continue;
		}
		let i = VM(r.sourceUuid ? await SN(r.sourceUuid) : await KM(r.name, ["trait"]), r.name, "trait");
		i.type = "trait", Ml(i, ["system", "disabled"], !1), mN(i, r.config), n.creates.push(i);
	}
	await pN(e, n);
}
async function SN(e) {
	let t = await fromUuid(e);
	return px(t) ? t : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/actor-traits.ts
function CN(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && !_N(e)).map(EN) ?? [];
}
function wN(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && _N(e)).map(EN) ?? [];
}
function TN(e) {
	Array.isArray(e.items) && (e.items = e.items.filter((e) => {
		if (typeof e != "object" || !e) return !0;
		let t = e;
		return t.type !== "trait" || !vN(t);
	}));
}
function EN(e) {
	return {
		config: gN(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/difficulty-options.ts
var DN = [
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
async function ON() {
	let e = Z(game.wfrp4e?.config, ["difficultyLabels"]);
	if (!X(e)) return DN;
	let t = Object.entries(e).filter((e) => {
		let [t, n] = e;
		return !!t.trim() && typeof n == "string";
	}).map(([e, t]) => ({
		label: t,
		value: e
	}));
	return t.length ? t : DN;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/drops.ts
async function kN(e) {
	let t = _x(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Trait item here.");
	let n = gx(await fromUuid(t.uuid), "trait", "Drop a Foundry Trait item here.");
	return {
		config: gN(n),
		ignored: !1,
		key: `custom:${n.uuid}`,
		name: n.name,
		source: "custom",
		sourceUuid: n.uuid
	};
}
//#endregion
//#region src/functions/npc-builder/recommended-quick-traits.ts
var AN = [
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
async function jN(e) {
	return RN(await LN(e, "Actor"));
}
async function MN(e) {
	return RN(await LN(e, "Item"));
}
function NN() {
	return game.folders.contents.filter((e) => e.type === "Actor").map(RN).sort((e, t) => e.name.localeCompare(t.name));
}
function PN() {
	return game.folders.contents.filter((e) => e.type === "Item").map(RN).sort((e, t) => e.name.localeCompare(t.name));
}
function FN(e) {
	return e ? game.folders.contents.find((t) => t.uuid === e) ?? null : null;
}
function IN(e) {
	let t = FN(e);
	return t?.type === "Item" ? t : null;
}
async function LN(e, t) {
	let n = e.trim();
	if (!n) throw Error("Enter a folder name first.");
	let r = game.folders.contents.find((e) => e.type === t && zN(e.name, n));
	if (r) return r;
	let i = await Folder.create({
		name: n,
		type: t
	});
	if (!i) throw Error("Foundry did not create the folder.");
	return i;
}
function RN(e) {
	return {
		name: e.name,
		uuid: e.uuid
	};
}
function zN(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/quick-traits.ts
async function BN(e) {
	let t = IN(e.quickTraitFolderUuid);
	if (!t) throw Error("Choose a Quick Traits item folder before importing traits.");
	let n = new Set(UN(e).map((e) => e.name.trim().toLocaleLowerCase()));
	for (let e of AN) {
		if (n.has(e.trim().toLocaleLowerCase())) continue;
		let r = VM(await KM(e, ["trait"]), e, "trait");
		r.folder = t.id, r.type = "trait", await Item.create(r);
	}
	return ui.notifications?.info("Imported recommended quick traits."), await VN(e);
}
async function VN(e) {
	return UN(e).map(WN).sort((e, t) => e.name.localeCompare(t.name));
}
function HN(e, t) {
	return t.quickTraitFolderUuid ? e.folder?.uuid === t.quickTraitFolderUuid : !1;
}
function UN(e) {
	return game.items?.contents.filter((t) => t.type === "trait" && HN(t, e)) ?? [];
}
function WN(e) {
	return {
		config: gN(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/trappings.ts
var GN = [
	"ammunition",
	"armour",
	"container",
	"money",
	"trapping",
	"weapon"
];
async function KN(e, t) {
	let n = fN();
	for (let r of t) {
		let t = r.source === "base" ? UM(e, r.sourceUuid, r.name) : null;
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
		let i = await QN(r), a = r.resolution.selectedItemType || r.itemType || "trapping", o = VM(i, r.resolution.selectedName || r.name, a);
		o.type = a || o.type || "trapping", Ml(o, [
			"system",
			"quantity",
			"value"
		], r.quantity), n.creates.push(o);
	}
	await pN(e, n);
}
async function qN(e) {
	return gw(e, await $N());
}
async function JN(e) {
	let t = _x(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Item here.");
	let n = hx(await fromUuid(t.uuid), "Drop a Foundry Item here.");
	return {
		ignored: !1,
		itemType: n.type,
		key: `custom:${n.uuid}`,
		name: n.name,
		quantity: XN(n),
		resolution: mw({
			itemType: n.type,
			name: n.name,
			uuid: n.uuid
		}),
		source: "custom",
		sourceUuid: n.uuid
	};
}
function YN(e) {
	let t = ZN();
	return e.items?.contents.filter((e) => t.includes(e.type)).map((e) => ({
		itemType: e.type,
		name: e.name,
		quantity: XN(e),
		uuid: e.uuid
	})) ?? [];
}
function XN(e) {
	return Ol(e.system, [["quantity", "value"], ["quantity"]]) || 1;
}
function ZN() {
	let e = Dl(game.wfrp4e?.config, ["trappingItems"]);
	return e.length ? e : GN;
}
async function QN(e) {
	if (e.sourceUuid) {
		let t = await fromUuid(e.sourceUuid);
		return px(t) ? t : null;
	}
	if (e.resolution.selectedCandidateUuid) {
		let t = await fromUuid(e.resolution.selectedCandidateUuid);
		return px(t) ? t : null;
	}
	return e.resolution.status === "fallback" ? null : await KM(e.resolution.selectedName || e.name, ZN());
}
async function $N() {
	let e = [], t = ZN();
	for (let n of game.items?.contents ?? []) t.includes(n.type) && e.push(tP(n, "World"));
	for (let n of game.packs ?? []) {
		if (!tM(n)) continue;
		let r = await eP(n, t);
		if (r.length) {
			e.push(...r);
			continue;
		}
		if (!n.getDocuments) continue;
		let i = await n.getDocuments();
		for (let r of i) px(r) && t.includes(r.type) && e.push(tP(r, n.title ?? "Compendium"));
	}
	return e;
}
async function eP(e, t) {
	return e.getIndex ? rM(await e.getIndex({ fields: ["name", "type"] })).filter((n) => !!(n.name && n.type && eM(e, n) && t.includes(n.type))).map((t) => ({
		itemType: t.type ?? "trapping",
		name: t.name ?? "",
		sourceLabel: e.title ?? "Compendium",
		uuid: eM(e, t)
	})) : [];
}
function tP(e, t) {
	return {
		itemType: e.type,
		name: e.name,
		sourceLabel: t,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/actors.ts
function nP(e) {
	return game.actors.contents.filter((t) => cP(t, e)).map(aP);
}
async function rP(e) {
	let t = mx(await fromUuid(e));
	return {
		advancements: [
			...oN(t),
			...sN(t, "skill"),
			...sN(t, "talent")
		],
		optionalTraits: wN(t),
		traits: CN(t),
		trappings: YN(t)
	};
}
async function iP(e) {
	let t = _x(e);
	if (t.type !== "Actor") throw Error("Drop a Foundry Actor here.");
	let n = null;
	return t.uuid ? n = await fromUuid(t.uuid) : t.id && (n = game.actors.get(t.id)), aP(mx(n));
}
function aP(e) {
	return {
		img: e.img ?? "",
		name: e.name,
		prototypeTokenImg: sP(e),
		species: oP(e),
		type: e.type,
		uuid: e.uuid
	};
}
function oP(e) {
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
function sP(e) {
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
function cP(e, t) {
	return t.baseActorFolderUuid ? e.folder?.uuid === t.baseActorFolderUuid : !0;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/careers.ts
async function lP(e) {
	let t = _x(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a WFRP Career item here.");
	return sM(gx(await fromUuid(t.uuid), "career", "Drop a WFRP Career item here."));
}
async function uP(e) {
	let t = [];
	for (let n of e) {
		let e = gx(await fromUuid(n.uuid), "career", `Career “${n.name}” is no longer available.`);
		for (let r = 0; r < SS(n.quantity); r += 1) {
			let n = e.toObject();
			delete n._id, Ml(n, [
				"system",
				"complete",
				"value"
			], !0), Ml(n, [
				"system",
				"current",
				"value"
			], !1), t.push(n);
		}
	}
	return t;
}
async function dP(e, t) {
	t.length && await e.createEmbeddedDocuments("Item", t);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/constants.ts
var fP = "spell", pP = new Set(LC), mP = new Set(RC);
async function hP() {
	return gP().map((e) => ({
		category: UC(e.key),
		key: e.key,
		label: e.name,
		value: e.name,
		wind: e.wind
	})).sort((e, t) => e.category === t.category ? e.label.localeCompare(t.label) : e.category.localeCompare(t.category));
}
function gP() {
	let e = Z(game.wfrp4e?.config, ["magicLores"]), t = Z(game.wfrp4e?.config, ["magicWind"]), n = [];
	if (!X(e)) return [bP()];
	for (let [r, i] of Object.entries(e)) {
		let e = DP(i) || r, a = EP(t, r);
		n.push({
			key: r,
			matchTerms: TP(r, e, a),
			name: e,
			wind: a
		});
	}
	return n.some((e) => e.key === "petty") || n.push(bP()), n;
}
function _P(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) {
		if (r.isAmbiguous) continue;
		if (r.kind === "petty-magic") {
			let e = wP("petty magic", t);
			e && n.set(e.key, e);
			continue;
		}
		let e = wP(r.rawLore, t);
		e && n.set(e.key, e);
	}
	return [...n.values()];
}
function vP(e, t) {
	let n = [...yP(e.system), CP(e.name)].filter(Boolean);
	for (let e of n) {
		let n = SP(e, t);
		if (n) return n;
		let r = wP(e, t);
		if (r) return r;
	}
	return null;
}
function yP(e) {
	return [
		...jl(Z(e, ["lore", "value"])),
		...jl(Z(e, ["lore"])),
		...jl(Z(e, ["magicLore", "value"])),
		...jl(Z(e, ["magicLore"])),
		...jl(Z(e, ["category", "value"])),
		...jl(Z(e, [
			"system",
			"lore",
			"value"
		])),
		...jl(Z(e, ["system", "lore"])),
		...jl(Z(e, ["system.lore.value"])),
		...jl(Z(e, ["system.lore"]))
	];
}
function bP() {
	return {
		key: "petty",
		matchTerms: ["petty", "petty magic"],
		name: "Petty Magic",
		wind: ""
	};
}
function xP(e) {
	let t = e.trim() || "Unknown Lore";
	return {
		key: BC(t) || "unknown",
		matchTerms: [t],
		name: t,
		wind: ""
	};
}
function SP(e, t) {
	let n = BC(e);
	return n === "lore" ? t.find((e) => e.key !== "petty") ?? null : n === "the eight winds" || n === "eight winds" ? t.find((e) => pP.has(e.key)) ?? null : n === "dark lore" ? t.find((e) => mP.has(e.key)) ?? null : null;
}
function CP(e) {
	return /\(([^)]+)\)\s*$/.exec(e)?.[1]?.trim() ?? "";
}
function wP(e, t) {
	let n = BC(e);
	return n ? t.find((e) => e.matchTerms.some((e) => BC(e) === n)) ?? null : null;
}
function TP(e, t, n) {
	let r = /* @__PURE__ */ new Set(), i = BC(e), a = BC(t);
	for (let i of [
		e,
		t,
		n
	]) i.trim() && r.add(i.trim());
	return (i === "petty" || a === "petty") && r.add("Petty Magic"), (i === "shadow" || a === "shadow") && r.add("Shadows"), t && !/^lore of /i.test(t) && r.add(`Lore of ${t}`), [...r];
}
function EP(e, t) {
	return X(e) ? DP(e[t]) : "";
}
function DP(e) {
	return typeof e == "string" ? e.trim() : X(e) ? Q(e, ["name"]) || Q(e, ["label"]) || Q(e, ["value"]) : "";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/debug.ts
var OP = "[WFRP Customizer Apps][Spell Lookup]";
function kP(t, n) {
	if (n) {
		e(`${OP} ${t}`, n);
		return;
	}
	e(`${OP} ${t}`);
}
function AP(e, n) {
	t(`${OP} ${e}`, n);
}
function jP(e) {
	return [
		e.title ?? "",
		e.collection ?? "",
		Q(e, ["metadata", "type"]),
		Q(e, ["metadata", "documentName"]),
		e.documentName
	].filter(Boolean).join(" | ");
}
function MP(e) {
	return {
		loreTerms: yP(e.system),
		name: e.name,
		sourceLabel: e.sourceLabel,
		uuid: e.uuid
	};
}
function NP(e) {
	return typeof e == "string" ? {
		kind: "uuid-string",
		value: e
	} : X(e) ? {
		documentName: Q(e, ["documentName"]),
		hasSystem: X(Z(e, ["system"])),
		loreTerms: yP(Z(e, ["system"])),
		name: Q(e, ["name"]),
		type: Q(e, ["type"]),
		uuid: Q(e, ["uuid"])
	} : { kind: typeof e };
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/spell-input-conversion.ts
function PP(e, t) {
	return {
		img: e.img ?? "",
		name: e.name,
		sourceLabel: t,
		system: e.system,
		uuid: e.uuid
	};
}
function FP(e) {
	return /^item\./i.test(e.uuid) ? "World" : IP(e.uuid, "WFRP Item Lookup");
}
function IP(e, t) {
	let n = /^Compendium\.([^.]+\.[^.]+)\./.exec(e)?.[1];
	return n ? [...game.packs ?? []].find((e) => e.collection === n)?.title ?? n : t;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/compendium-spell-inputs.ts
async function LP(e) {
	if (kP("Compendium index scan start", { pack: jP(e) }), !e.getIndex) return kP("Compendium has no index; loading documents", { pack: jP(e) }), await BP(e);
	let t = rM(await e.getIndex({ fields: [
		"name",
		"type",
		"img",
		"system.lore.value"
	] }));
	if (kP("Compendium index loaded", {
		entries: t.length,
		pack: jP(e),
		samples: t.slice(0, 5).map((t) => ({
			hasLoreTerms: yP(t).length > 0,
			name: t.name,
			type: t.type,
			uuid: eM(e, t)
		}))
	}), !t.length) return kP("Compendium index empty; loading documents", { pack: jP(e) }), await BP(e);
	let n = t.filter(zP);
	kP("Compendium index spell candidates", {
		pack: jP(e),
		spellEntries: n.length
	});
	let r = n.filter((e) => e.name).map((t) => HP(e, t));
	return r.length || !VP(e) ? r : await BP(e);
}
function RP(e) {
	return tM(e);
}
function zP(e) {
	return e.type === "spell" ? !0 : !!(e.name && (yP(e).length || CP(e.name)));
}
async function BP(e) {
	if (!e.getDocuments) return kP("Compendium has no document loader", { pack: jP(e) }), [];
	kP("Compendium document load start", { pack: jP(e) });
	let t = await e.getDocuments(), n = t.filter((e) => px(e) && e.type === "spell");
	return kP("Compendium document load complete", {
		documents: t.length,
		pack: jP(e),
		spellDocuments: n.length,
		spellSamples: n.slice(0, 5).map((e) => ({
			loreTerms: yP(e.system),
			name: e.name,
			uuid: e.uuid
		}))
	}), n.map((t) => PP(t, e.title ?? "Compendium"));
}
function VP(e) {
	return e.collection === "wfrp4e-core.items" || e.collection === "wfrp4e-wom.items";
}
function HP(e, t) {
	return {
		img: t.img ?? t.thumb ?? "",
		name: t.name ?? "",
		sourceLabel: e.title ?? "Compendium",
		system: t,
		uuid: eM(e, t)
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/warhammer-spell-inputs.ts
async function UP() {
	let e = GP();
	if (!e) return kP("WFRP helper unavailable"), [];
	try {
		let t = await e.findAllItems(fP, "Loading Spells", !0, ["system.lore.value"]);
		return kP("WFRP helper raw result", {
			count: t.length,
			samples: t.slice(0, 10).map(NP)
		}), (await Promise.all(t.map((e) => WP(e)))).filter((e) => e !== null);
	} catch (e) {
		return AP("WFRP helper lookup failed.", e), [];
	}
}
async function WP(e) {
	if (typeof e == "string") {
		let t = await fromUuid(e);
		return px(t) && t.type === "spell" ? PP(t, FP(t)) : null;
	}
	if (px(e)) return e.type === "spell" ? PP(e, FP(e)) : null;
	if (Q(e, ["type"]) !== "spell") return null;
	let t = Q(e, ["name"]);
	return t ? {
		img: Q(e, ["img"]) || Q(e, ["thumb"]),
		name: t,
		sourceLabel: IP(Q(e, ["uuid"]), "WFRP Item Lookup"),
		system: Z(e, ["system"]),
		uuid: Q(e, ["uuid"])
	} : null;
}
function GP() {
	let e = Z(globalThis, [
		"warhammer",
		"utility",
		"findAllItems"
	]);
	return typeof e == "function" ? { findAllItems: e } : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/spell-resolution-inputs.ts
async function KP() {
	let e = [], n = [...game.packs ?? []];
	kP("Candidate lookup start", {
		itemPacks: n.filter(RP).length,
		totalPacks: n.length,
		warhammerUtilityAvailable: !!YP(),
		worldItems: game.items?.contents.length ?? 0
	});
	let r = await UP();
	kP("WFRP helper lookup complete", {
		utilityInputs: r.length,
		utilitySamples: r.slice(0, 10).map(MP)
	}), e.push(...r), e.push(...qP()), kP("World spell scan complete", { worldSpellCount: e.filter((e) => e.sourceLabel === "World").length });
	for (let r of n) if (RP(r)) try {
		let t = await LP(r);
		e.push(...t), kP("Compendium spell scan complete", {
			inputCount: t.length,
			pack: jP(r),
			samples: t.slice(0, 5).map(MP)
		});
	} catch (e) {
		t(`wfrp4e-customizer-apps | Spell lookup skipped compendium "${r.title ?? r.collection ?? "unknown"}".`, e);
	}
	let i = JP(e);
	return kP("Candidate lookup complete", {
		rawInputCount: e.length,
		uniqueInputCount: i.length
	}), i;
}
function qP() {
	let e = [];
	for (let t of game.items?.contents ?? []) t.type === "spell" && e.push(PP(t, "World"));
	return e;
}
function JP(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.uuid || n.name.trim().toLocaleLowerCase();
		t.has(e) || t.set(e, n);
	}
	return [...t.values()];
}
function YP() {
	return Z(globalThis, [
		"warhammer",
		"utility",
		"findAllItems"
	]);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/index.ts
async function XP(e, t) {
	let n = [];
	for (let r of t) {
		if (!r.selected || HM(e, r.name, "spell")) continue;
		let t = VM(r.sourceUuid ? await $P(r.sourceUuid) : null, r.name, fP);
		t.type = fP, n.push(t);
	}
	n.length && await e.createEmbeddedDocuments("Item", n);
}
async function ZP(e) {
	let t = _P(e, gP());
	if (kP("Grant resolution start", {
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
	let n = await KP(), r = /* @__PURE__ */ new Map(), i = [];
	for (let e of n) {
		let n = vP(e, t);
		if (!n) {
			i.length < 20 && i.push({
				loreTerms: yP(e.system),
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
	return kP("Grant resolution complete", {
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
async function QP(e) {
	let t = _x(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Spell item here.");
	let n = gx(await fromUuid(t.uuid), fP, "Drop a Foundry Spell item here."), r = vP(PP(n, "Dropped"), [...gP(), bP()]) ?? xP(yP(n.system)[0] ?? "");
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
async function $P(e) {
	let t = await fromUuid(e);
	return px(t) && t.type === "spell" ? t : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/build-npc.ts
async function eF(e) {
	let t = await uP(e.careers), n = await nF(e);
	if (!n) throw Error("Foundry did not create the NPC Actor.");
	let r = rF(e), i = e.careers.at(-1), a = {
		name: r,
		"prototypeToken.name": r
	}, o = Q(n.system, [
		"details",
		"gmnotes",
		"value"
	]), s = tF(o);
	s !== o && (a["system.details.gmnotes.value"] = s);
	let c = e.portraitPath || i?.img || "";
	return c && (a.img = c, a["prototypeToken.texture.src"] = c), await n.update(a), await dP(n, t), await aN(n, e.advancements), await xN(n, e.traits), await KN(n, e.trappings), await XP(n, e.spells), n.sheet?.render(!0), ui.notifications?.info(`Created NPC "${r}".`), {
		name: r,
		uuid: n.uuid
	};
}
function tF(e) {
	return e.replaceAll(/(?:<hr\s*\/?>)?<section data-wfrp-customizer-npc-xp="true">[\S\s]*?<\/section>/g, "").trim();
}
async function nF(e) {
	let t = mx(await fromUuid(e.baseActorUuid)).toObject(), n = FN(e.settings.outputActorFolderUuid);
	return delete t._id, delete t.folder, t.type = "npc", TN(t), n && (t.folder = n.id), await Actor.create(t);
}
function rF(e) {
	if (!e.settings.includeSpeciesInName) return e.actorName;
	let t = game.actors.contents.find((t) => t.uuid === e.baseActorUuid), n = t ? oP(t) : "";
	return !n || e.actorName.toLocaleLowerCase().includes(n.toLocaleLowerCase()) ? e.actorName : `${n} ${e.actorName}`;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/candidate-utils.ts
function iF(e, t) {
	let n = t.img.trim().toLocaleLowerCase();
	!n || e.seenPaths.has(n) || (e.seenPaths.add(n), e.candidates.push(t));
}
function aF(e, t) {
	let n = t.imagePaths.filter(({ path: e }) => !!e);
	if (fF(t.name, n, e.searchTerms)) for (let r of n) iF(e, {
		img: r.path,
		key: `foundry-asset:${t.sourceKey}:${r.label}`,
		label: `${t.name || lF(r.path)} ${r.label} (${t.sourceLabel})`,
		source: "foundry-asset"
	});
}
function oF(e, t, n) {
	e?.({
		candidatesFound: t.candidates.length,
		currentLocation: n.currentLocation,
		directoriesVisited: t.visitedDirectories,
		maxDirectories: n.maxDirectories,
		phase: n.phase
	});
}
function sF(e) {
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
function cF(e, t) {
	return `${lF(e)} (${t})`;
}
function lF(e) {
	return e.split(/[/\\]/).at(-1) ?? e;
}
function uF(e) {
	return typeof e == "object" && !!e;
}
function dF(e) {
	return uF(e) && Object.values(e).every((e) => Array.isArray(e) && e.every((e) => typeof e == "string"));
}
function fF(e, t, n) {
	return tO(e, n) || t.some(({ path: e }) => tO(e, n));
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/dig-down.ts
var pF = "fuzzy-foundry", mF = .3, hF = new Set([
	".webp",
	".png",
	".jpg",
	".jpeg",
	".gif"
]);
function gF(e, t) {
	let n = _F();
	if (oF(t, e, {
		currentLocation: yF(n),
		maxDirectories: 0,
		phase: "filesystem"
	}), !n.digDownActive || !n.digDownCacheReady) return;
	let r = SF();
	if (!(!r?._fileIndexCache || !r.fs)) {
		for (let t of bF(r, e.searchTerms)) xF(e, r, t);
		oF(t, e, {
			currentLocation: "Dig Down file cache search complete",
			maxDirectories: 0,
			phase: "filesystem"
		});
	}
}
function _F() {
	let e = game.modules.get(pF)?.active === !0, t = vF(), n = SF(), r = Object.values(n?._fileIndexCache ?? {}).reduce((e, t) => e + t.length, 0);
	return {
		digDownActive: e,
		digDownCacheReady: !!(n?._fileIndexCache && n.fs),
		digDownDeepFileSearchEnabled: t,
		digDownIndexedFileCount: r
	};
}
function vF() {
	try {
		return game.settings.get(pF, "deepFile") === !0;
	} catch {
		return !1;
	}
}
function yF(e) {
	return e.digDownActive ? e.digDownDeepFileSearchEnabled ? e.digDownCacheReady ? `Dig Down file cache (${e.digDownIndexedFileCount} files)` : "Waiting for Dig Down file cache" : "Dig Down Deep File Search is disabled" : "Dig Down is not active";
}
function bF(e, t) {
	let n = /* @__PURE__ */ new Set(), r = Object.keys(e._fileIndexCache ?? {});
	for (let i of t) {
		let t = i.toLocaleLowerCase();
		for (let e of r) e.toLocaleLowerCase().includes(t) && n.add(e);
		let a = e.fs?.get(i, [], mF) ?? [];
		for (let [, e] of a) n.add(e);
	}
	return [...n].sort((e, t) => e.toLocaleLowerCase().localeCompare(t.toLocaleLowerCase()));
}
function xF(e, t, n) {
	let r = t._fileIndexCache?.[n] ?? [];
	for (let t of r) CF(t) && iF(e, {
		img: t,
		key: `foundry-asset:${t}`,
		label: cF(t, "Dig Down"),
		source: "foundry-asset"
	});
}
function SF() {
	let e = canvas.deepSearchCache;
	if (!uF(e)) return null;
	let t = e._fileIndexCache, n = e.fs, r = {};
	return dF(t) && (r._fileIndexCache = t), uF(n) && typeof n.get == "function" && (r.fs = { get: n.get.bind(n) }), r;
}
function CF(e) {
	let t = `.${e.split(/[#?]/)[0]?.split(".").pop() ?? ""}`;
	return hF.has(t.toLocaleLowerCase());
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/documents.ts
function wF(e, t) {
	oF(t, e, {
		currentLocation: "World Actors and Items",
		maxDirectories: 0,
		phase: "world-documents"
	});
	for (let t of game.actors.contents) aF(e, {
		imagePaths: [{
			label: "actor image",
			path: t.img ?? ""
		}, {
			label: "token image",
			path: sF(t)
		}],
		name: t.name,
		sourceLabel: "World Actors",
		sourceKey: t.uuid
	});
	for (let t of game.items?.contents ?? []) aF(e, {
		imagePaths: [{
			label: "item image",
			path: t.img ?? ""
		}],
		name: t.name,
		sourceLabel: "World Items",
		sourceKey: t.uuid
	});
}
async function TF(e, t) {
	oF(t, e, {
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
		] }).catch(() => void 0), r = n ? rM(n) : [];
		for (let n of r) aF(e, {
			imagePaths: [
				{
					label: `${t.documentName.toLocaleLowerCase()} image`,
					path: n.img ?? ""
				},
				{
					label: "thumbnail",
					path: n.thumb ?? ""
				},
				{
					label: "token image",
					path: Q(n, [
						"prototypeToken",
						"texture",
						"src"
					])
				}
			],
			name: n.name ?? "",
			sourceLabel: t.title ?? "Compendium",
			sourceKey: `${t.collection ?? t.title ?? "pack"}:${n._id ?? n.name ?? ""}`
		});
	}
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/index.ts
async function EF(e, t) {
	let n = eO(e);
	if (!n.length) return [];
	let r = {
		candidates: [],
		maxDirectoryBudget: 0,
		searchTerms: n,
		seenPaths: /* @__PURE__ */ new Set(),
		visitedDirectories: 0
	};
	return e.includeCompendiumAssets && (wF(r, t), await TF(r, t)), e.includeFilePickerAssets && gF(r, t), oF(t, r, {
		currentLocation: "Portrait search complete",
		maxDirectories: r.maxDirectoryBudget,
		phase: "ready"
	}), r.candidates;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/index.ts
var DF = {
	buildNpc: eF,
	ensureActorFolder: jN,
	ensureItemFolder: MN,
	findLowerCareerCandidates: hM,
	getPortraitSearchAvailability: async () => _F(),
	importRecommendedQuickTraits: BN,
	listActorFolders: async () => NN(),
	listBaseActors: async (e) => nP(e),
	listFoundryPortraitCandidates: EF,
	listMagicLoreOptions: hP,
	listSpellsForMagicGrants: ZP,
	listItemFolders: async () => PN(),
	listQuickTraits: VN,
	listSkillCharacteristics: jM,
	listSkillSpecializations: AM,
	listTalentMaximums: qM,
	listTraitDifficultyOptions: ON,
	loadBaseActorDraftData: rP,
	loadSettings: async () => rN(),
	resolveActorDrop: iP,
	resolveCareerDrop: lP,
	resolveSpellDrop: QP,
	resolveTraitDrop: kN,
	resolveTrapping: qN,
	resolveTrappingDrop: JN,
	saveSettings: iN
}, OF = class extends Vb {
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
		return Kj;
	}
	getVueProps() {
		return { bridge: DF };
	}
}, kF = "wfrp4e-customizer-open-npc-builder", AF = "wfrp4e-customizer-open-species-builder";
function jF() {
	Hooks.on("renderActorDirectory", (e, t) => {
		let n = IF(t);
		n && MF(n);
	});
}
function MF(e) {
	let n = FF(e);
	if (!n) {
		t("wfrp4e-customizer-apps | Could not find Actor Directory button container.");
		return;
	}
	NF(e, n), PF(e, n);
}
function NF(e, t) {
	if (e.querySelector(`.${kF}`)) return;
	let n = document.createElement("button");
	n.classList.add(kF, "wfrp4e-customizer-actor-directory-button"), n.type = "button", n.innerHTML = "<i class=\"fa-solid fa-user-plus\" inert></i><span>NPC Builder App</span>", n.addEventListener("click", () => {
		new OF().render(!0);
	}), t.append(n);
}
function PF(e, t) {
	if (e.querySelector(`.${AF}`)) return;
	let n = document.createElement("button");
	n.classList.add(AF, "wfrp4e-customizer-actor-directory-button"), n.type = "button", n.innerHTML = "<i class=\"fa-solid fa-people-group\" inert></i><span>Species Builder</span>", n.addEventListener("click", () => {
		new pS().render(!0);
	}), t.append(n);
}
function FF(e) {
	return e.querySelector(".directory-header .header-actions") ?? e.querySelector(".directory-header .action-buttons") ?? e.querySelector(".header-actions") ?? e.querySelector(".action-buttons");
}
function IF(e) {
	return e instanceof HTMLElement ? e : LF(e) && e[0] instanceof HTMLElement ? e[0] : null;
}
function LF(e) {
	return typeof e == "object" && !!e && "length" in e;
}
//#endregion
//#region src/module/apps/npc-builder/estimated-xp/actor-profile.ts
function RF(e) {
	let t = {};
	for (let n of Object.keys(Ac)) {
		let r = n;
		t[r] = HF(e, r);
	}
	return {
		characteristics: t,
		skills: zF(e, "skill"),
		talents: zF(e, "talent")
	};
}
function zF(e, t) {
	return e.items?.contents.filter((e) => e.type === t).map((n) => ({
		name: n.name,
		value: t === "skill" ? BF(e, n) : VF(n)
	})) ?? [];
}
function BF(e, t) {
	let n = Q(t.system, ["characteristic", "value"]), r = kl(t.system, [["total", "value"], ["total"]]);
	return r !== null && Mc(n) ? r - HF(e, n) : Ol(t.system, [["advances", "value"], ["advances"]]) + Ol(t.system, [["modifier", "value"], ["modifier"]]);
}
function VF(e) {
	return Ol(e.system, [["advances", "value"], ["advances"]]);
}
function HF(e, t) {
	let n = kl(e.system, [
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
		]
	]);
	return n === null ? Ol(e.system, [[
		"characteristics",
		t,
		"initial",
		"value"
	], [
		"characteristics",
		t,
		"initial"
	]]) + Ol(e.system, [[
		"characteristics",
		t,
		"modifier",
		"value"
	], [
		"characteristics",
		t,
		"modifier"
	]]) + Ol(e.system, [[
		"characteristics",
		t,
		"advances",
		"value"
	], [
		"characteristics",
		t,
		"advances"
	]]) : n;
}
//#endregion
//#region src/module/apps/npc-builder/estimated-xp/species-actor.ts
var UF = null;
async function WF(e, t, n) {
	let r = game.actors.contents, i = GF(n ? r.filter((e) => e.folder?.uuid === n) : [], e);
	if (i) return {
		actor: i,
		source: i.folder?.name ?? "Configured NPC Base Actors folder"
	};
	let a = GF(r.filter((e) => e.uuid !== t.uuid), e);
	if (a) return {
		actor: a,
		source: "World Actors"
	};
	let o = KF(await JF(), e);
	if (!o) return null;
	let s = await fromUuid(o.uuid);
	if (!XF(s)) throw Error(`The species Actor ${o.uuid} is no longer available.`);
	return {
		actor: s,
		source: o.source
	};
}
function GF(e, t) {
	return qF(e, t, (e) => e.name);
}
function KF(e, t) {
	return qF(e, t, (e) => e.name);
}
function qF(e, t, n) {
	let r = t.trim();
	return e.find((e) => n(e).trim() === r) ?? e.find((e) => xS(n(e)) === xS(t)) ?? null;
}
function JF() {
	return UF ??= YF(), UF;
}
async function YF() {
	let e = [];
	for (let t of game.packs ?? []) {
		if (!nM(t) || !t.getIndex) continue;
		let n = await t.getIndex({ fields: ["name"] });
		for (let r of rM(n)) {
			let n = eM(t, r);
			r.name && n && e.push({
				name: r.name,
				source: t.title ?? t.collection ?? "Actor Compendium",
				uuid: n
			});
		}
	}
	return e;
}
function XF(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Actor";
}
//#endregion
//#region src/module/apps/npc-builder/estimated-xp/estimate.ts
async function ZF(e) {
	let t = mx(await fromUuid(e), "Expected an NPC Actor.");
	if (t.type !== "npc") throw Error(`Expected an NPC Actor, but received Actor type “${t.type}”.`);
	return await QF(t);
}
async function QF(e) {
	let t = oP(e);
	if (!t) return { status: "missing-species" };
	let n = await WF(t, e, rN().baseActorFolderUuid);
	return n ? {
		baselineName: n.actor.name,
		baselineSource: n.source,
		baselineUuid: n.actor.uuid,
		breakdown: pC(RF(e), RF(n.actor)),
		species: t,
		status: "ready"
	} : {
		species: t,
		status: "baseline-not-found"
	};
}
//#endregion
//#region src/module/apps/npc-builder/estimated-xp/sheet.ts
var $F = "[data-wfrp-customizer-npc-xp=\"true\"]", eI = /* @__PURE__ */ new Set(), tI = !1, nI = !1;
function rI() {
	if (!tI) {
		tI = !0, Hooks.on("renderApplicationV2", (e, t) => {
			if (!(t instanceof HTMLElement)) return;
			let n = cI(e);
			n && iI(n, t);
		});
		for (let e of [
			"createActor",
			"updateActor",
			"deleteActor",
			"createItem",
			"updateItem",
			"deleteItem",
			"updateSetting"
		]) Hooks.on(e, lI);
	}
}
function iI(e, t) {
	let n = t.matches("section[data-tab=\"careers\"]") ? t : t.querySelector("section[data-tab=\"careers\"]");
	if (!n) return;
	n.querySelector($F)?.remove();
	let r = aI(e, t), i = n.querySelector(".sheet-list.careers");
	i ? n.insertBefore(r.container, i) : n.append(r.container), uI(), oI(r), globalThis.setTimeout(() => {
		r.root.isConnected && r.root.contains(r.container) && (uI(), eI.add(r));
	}, 0);
}
function aI(e, t) {
	let n = document.createElement("div");
	n.dataset.wfrpCustomizerNpcXp = "true";
	let r = document.createElement("div");
	r.classList.add("form-group");
	let i = document.createElement("label");
	i.textContent = "Estimated NPC XP";
	let a = document.createElement("div");
	a.classList.add("form-fields");
	let o = document.createElement("input");
	o.type = "text", o.readOnly = !0, o.value = "Calculating…";
	let s = document.createElement("p");
	return s.classList.add("notes"), s.textContent = "Comparing this NPC with its species Actor.", a.append(o), r.append(i, a), n.append(r, s), {
		actor: e,
		container: n,
		details: s,
		generation: 0,
		output: o,
		root: t
	};
}
async function oI(e) {
	let n = ++e.generation;
	e.output.value = "Calculating…";
	try {
		let t = await QF(e.actor);
		n === e.generation && e.root.contains(e.container) && sI(e, t);
	} catch (r) {
		n === e.generation && e.root.contains(e.container) && (e.output.value = "Unavailable", e.details.textContent = "XP calculation failed; see the console for details."), t("wfrp4e-customizer-apps | NPC XP calculation failed.", r);
	}
}
function sI(e, t) {
	if (t.status === "missing-species") {
		e.output.value = "Unavailable", e.details.textContent = "Set this NPC's Species to select a baseline Actor.";
		return;
	}
	if (t.status === "baseline-not-found") {
		e.output.value = "Unavailable", e.details.textContent = `No Actor named “${t.species}” was found.`;
		return;
	}
	let { breakdown: n } = t;
	e.output.value = `${n.total.toLocaleString()} XP`, e.details.textContent = [
		`${t.baselineName} (${t.baselineSource})`,
		`Characteristics ${n.characteristics.toLocaleString()}`,
		`Skills ${n.skills.toLocaleString()}`,
		`Talents ${n.talents.toLocaleString()}`
	].join(" · ");
}
function cI(e) {
	if (typeof e != "object" || !e) return null;
	let t = "actor" in e ? e.actor : void 0, n = "document" in e ? e.document : void 0, r = fx(t) ? t : fx(n) ? n : null;
	return r?.type === "npc" ? r : null;
}
function lI() {
	nI || (nI = !0, globalThis.setTimeout(() => {
		nI = !1, uI();
		for (let e of eI) oI(e);
	}, 0));
}
function uI() {
	for (let e of eI) (!e.root.isConnected || !e.root.contains(e.container)) && eI.delete(e);
}
//#endregion
//#region src/module/apps/species-builder/apply-species-config.ts
var dI = [
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
function fI() {
	let n = game.wfrp4e?.config;
	if (!X(n)) {
		t(`${$} | WFRP config was unavailable; custom species were not applied.`);
		return;
	}
	let r = rx();
	pI(n, yl(r)), r.definitions.length > 0 && e(`${$} | Applied ${r.definitions.length} custom species definition(s).`);
}
function pI(e, t) {
	for (let n of dI) mI(e, n, t[n]);
	hI(e, t.extraSpecies), gI(e, t.subspecies);
}
function mI(e, t, n) {
	if (Object.keys(n).length === 0) return;
	let r = e[t];
	if (!X(r)) {
		e[t] = { ...n };
		return;
	}
	Object.assign(r, n);
}
function hI(e, t) {
	if (t.length === 0) return;
	let n = Array.isArray(e.extraSpecies) ? e.extraSpecies : [], r = /* @__PURE__ */ new Set();
	for (let e of n) typeof e == "string" && r.add(e);
	for (let e of t) r.add(e);
	e.extraSpecies = [...r];
}
function gI(e, t) {
	if (Object.keys(t).length === 0) return;
	let n = X(e.subspecies) ? e.subspecies : {};
	for (let [e, r] of Object.entries(t)) {
		let t = X(n[e]) ? n[e] : {};
		Object.assign(t, r), n[e] = t;
	}
	e.subspecies = n;
}
//#endregion
//#region src/functions/species-builder/characteristic-roll-formulas.ts
var _I = "2d10";
function vI(e) {
	let t = e?.split("+")[0]?.trim();
	return t ? bI(t) : _I;
}
function yI(e, t) {
	return vI(e) === vI(t);
}
function bI(e) {
	return e.replaceAll(/\s+/g, "").toLocaleLowerCase();
}
//#endregion
//#region src/module/apps/species-builder/chargen-roll-swap-feedback.ts
var xI = "data-wfrp4e-customizer-roll-swap-feedback", SI = `[${xI}]`;
function CI(e, t) {
	let n = OI(e);
	if (n) {
		n.classList.add("wfrp4e-customizer-apps-root"), n.dataset.theme = "wfrp4e-customizer-apps";
		for (let e of DI(n)) e.addEventListener("dragstart", () => {
			let r = e.dataset.ch;
			r && wI(n, r, t);
		}), e.addEventListener("dragend", () => {
			EI(n);
		}), e.addEventListener("drop", () => {
			EI(n);
		});
	}
}
function wI(e, t, n) {
	EI(e);
	for (let r of DI(e)) {
		let e = r.dataset.ch;
		if (e) {
			if (e === t) {
				TI(r, "Dragging", "dui-badge-warning");
				continue;
			}
			n(t, e) ? TI(r, "Compatible", "dui-badge-success") : TI(r, "Cannot swap", "dui-badge-error");
		}
	}
}
function TI(e, t, n) {
	let r = document.createElement("span");
	r.setAttribute(xI, ""), r.classList.add("dui-badge", n), r.textContent = t, e.append(r);
}
function EI(e) {
	for (let t of e.querySelectorAll(SI)) t.remove();
}
function DI(e) {
	return [...e.querySelectorAll(".ch-roll.ch-drag")];
}
function OI(e) {
	if (e instanceof HTMLElement) return e;
	if (!X(e)) return;
	let t = e[0];
	return t instanceof HTMLElement ? t : void 0;
}
//#endregion
//#region src/module/apps/species-builder/chargen-roll-swap-guard.ts
var kI = Symbol("wfrp4e-customizer-guarded-attributes-stage");
function AI() {
	Hooks.on("wfrp4e:chargen", (e) => {
		jI(e);
	});
}
function jI(n) {
	let r = MI(n);
	if (!r) {
		t(`${$} | Could not inspect WFRP character generation stages.`);
		return;
	}
	let i = NI(r);
	if (!i) {
		t(`${$} | Could not find the WFRP Attributes character generation stage.`);
		return;
	}
	if (PI(i.class)) return;
	let a = FI(i.class);
	typeof r.replaceStage == "function" ? r.replaceStage("attributes", a) : i.class = a, e(`${$} | Guarded WFRP characteristic roll swapping for custom species.`);
}
function MI(e) {
	if (!X(e)) return;
	let t = {}, n = e.replaceStage;
	return typeof n == "function" && (t.replaceStage = (t, r) => {
		n.call(e, t, r);
	}), Array.isArray(e.stages) && (t.stages = e.stages), t;
}
function NI(e) {
	for (let t of e.stages ?? []) if (X(t) && t.key === "attributes") return typeof t.class == "function" ? t : void 0;
}
function PI(e) {
	return !!e[kI];
}
function FI(e) {
	class t extends e {
		static [kI] = !0;
		activateListeners(e) {
			let t = super.activateListeners(e);
			return CI(e, (e, t) => yI(II(this, e), II(this, t))), t;
		}
		swap(e, t) {
			let n = II(this, e), r = II(this, t);
			if (yI(n, r)) return super.swap(e, t);
			LI(e, n, t, r);
		}
	}
	return t;
}
function II(e, t) {
	let n = X(e.context) ? e.context : void 0, r = X(n?.characteristics) ? n.characteristics : void 0, i = (X(r?.[t]) ? r[t] : void 0)?.formula;
	return typeof i == "string" ? i : void 0;
}
function LI(e, t, n, r) {
	let i = RI(e), a = RI(n), o = vI(t), s = vI(r);
	ui.notifications?.warn?.(`Cannot swap ${i} and ${a}: ${i} uses ${o}, while ${a} uses ${s}.`);
}
function RI(e) {
	let t = game.wfrp4e?.config?.characteristics;
	if (!X(t)) return e;
	let n = t[e];
	return typeof n == "string" ? n : e;
}
//#endregion
//#region src/module/debug/shape-inspector/constants.ts
var zI = `${$}.debugShapeProbes`, BI = "wfrp4eCustomizerShapeProbes", VI = "wfrp4eCustomizerShapePreset";
//#endregion
//#region src/module/debug/shape-inspector/utils.ts
function HI(e, t, n) {
	let r = Number(e);
	return Number.isFinite(r) ? Math.max(0, Math.min(n, Math.floor(r))) : t;
}
function UI(e) {
	return typeof e == "object" && !!e;
}
function WI(e) {
	return typeof e == "string" ? e.trim().toLocaleLowerCase() : "";
}
function GI(e) {
	try {
		return localStorage.getItem(e);
	} catch {
		return null;
	}
}
//#endregion
//#region src/module/debug/shape-inspector/path-resolver.ts
function KI(e) {
	let t = QI(e), n = qI(globalThis, t.root);
	for (let e of t.tokens) {
		if (e.type === "property") {
			n = qI(n, e.key);
			continue;
		}
		if (e.type === "index") {
			n = qI(n, String(e.index));
			continue;
		}
		n = JI(n, e.name, e.args);
	}
	return n;
}
function qI(e, t) {
	if (!(!UI(e) && typeof e != "function")) try {
		return e[t];
	} catch {
		return;
	}
}
function JI(e, t, n) {
	if (t === "at") {
		let t = Number(n[0] ?? 0), r = Number.isFinite(t) ? t : 0;
		return $I(e).at(r);
	}
	if (t === "findByName") {
		let t = WI(n[0] ?? "");
		return $I(e).find((e) => WI(qI(e, "name")) === t);
	}
	if (t === "findByType") {
		let t = WI(n[0] ?? "");
		return $I(e).find((e) => WI(qI(e, "type")) === t);
	}
	if (t === "get") {
		let t = n[0] ?? "";
		if (e instanceof Map) return e.get(t);
		let r = qI(e, "get");
		if (typeof r == "function") return r.call(e, t);
	}
	if (t === "sample") {
		let t = HI(n[0], 3, 60);
		return $I(e).slice(0, t);
	}
	throw Error(`Unsupported path method "${t}".`);
}
function YI(e) {
	return e.trim() ? e.split(",").map((e) => ZI(e.trim())).map(String) : [];
}
function XI(e) {
	let t = e.trim();
	return /^-?\d+$/.test(t) ? Number(t) : ZI(t);
}
function ZI(e) {
	let t = /^["'](?<value>.*)["']$/.exec(e);
	return t?.groups ? t.groups.value ?? "" : e;
}
function QI(e) {
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
				args: YI(e.groups.args ?? ""),
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
				index: XI(e),
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
function $I(e) {
	if (Array.isArray(e)) return e;
	let t = qI(e, "contents");
	return Array.isArray(t) ? t : [];
}
//#endregion
//#region src/module/debug/shape-inspector/presets.ts
var eL = { "npc-builder": [
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
function tL() {
	return window.location.href.includes("wfrp4eCustomizerShapeProbes") || window.location.href.includes("wfrp4eCustomizerShapePreset");
}
function nL(e) {
	let t = {
		hook: e.hook ?? "ready",
		maxDepth: HI(e.maxDepth, 2, 6),
		maxEntries: HI(e.maxEntries, 12, 60),
		path: e.path.trim()
	};
	return e.label && (t.label = e.label), t;
}
function rL() {
	return [...iL(), ...aL()].map(nL);
}
function iL() {
	let e = GI(zI);
	if (!e) return [];
	try {
		let t = JSON.parse(e);
		return Array.isArray(t) ? t.filter(sL).map(nL) : [];
	} catch {
		return [];
	}
}
function aL() {
	let e = [], t = [new URLSearchParams(window.location.search), new URLSearchParams(window.location.hash.replace(/^#/, ""))];
	for (let n of t) {
		let t = n.get(VI), r = n.get(BI);
		t && e.push(...eL[t] ?? []), r && e.push(...oL(r));
	}
	return window.location.href.includes("wfrp4eCustomizerShapePreset=npc-builder") && !e.length && e.push(...eL["npc-builder"] ?? []), e;
}
function oL(e) {
	try {
		let t = JSON.parse(decodeURIComponent(e));
		return Array.isArray(t) ? t.filter(sL) : [];
	} catch (e) {
		return t(`${$} | Could not parse URL shape probes.`, e), [];
	}
}
function sL(e) {
	return typeof e != "object" || !e ? !1 : "path" in e && typeof e.path == "string";
}
//#endregion
//#region src/module/debug/shape-inspector/summary.ts
function cL(e, t) {
	return !UI(e) && typeof e != "function" ? pL(e) : typeof e == "function" ? dL(e) : Array.isArray(e) ? lL(e, t) : e instanceof Map ? uL(e, t) : fL(e, t);
}
function lL(e, t) {
	return {
		length: e.length,
		sample: e.slice(0, t.maxEntries).map((e) => cL(e, hL(t))),
		type: "array"
	};
}
function uL(e, t) {
	return {
		sample: [...e.entries()].slice(0, t.maxEntries).map(([e, n]) => ({
			key: cL(e, hL(t)),
			value: cL(n, hL(t))
		})),
		size: e.size,
		type: "Map"
	};
}
function dL(e) {
	return {
		name: e.name,
		type: "function"
	};
}
function fL(e, t) {
	if (t.seen.has(e)) return { type: "circular" };
	t.seen.add(e);
	let n = mL(e, t.maxEntries), r = qI(e, "constructor"), i = {
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
		let n = qI(e, t);
		typeof n == "string" && (i[t] = n);
	}
	if (t.maxDepth <= 0) return i;
	let a = {};
	for (let r of n) a[r] = cL(qI(e, r), hL(t));
	i.properties = a;
	let o = qI(e, "toObject");
	if (typeof o == "function") try {
		i.source = cL(o.call(e), hL(t));
	} catch (e) {
		i.source = {
			error: e instanceof Error ? e.message : String(e),
			type: "error"
		};
	}
	return i;
}
function pL(e) {
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
function mL(e, t) {
	return Object.keys(e).sort().slice(0, t);
}
function hL(e) {
	return {
		maxDepth: e.maxDepth - 1,
		maxEntries: e.maxEntries,
		seen: e.seen
	};
}
//#endregion
//#region src/module/debug/shape-inspector/index.ts
function gL() {
	localStorage.removeItem(zI), e(`${$} | Cleared debug shape probes.`);
}
function _L() {
	return rL();
}
function vL(e, t = {}) {
	let n = xL(e, t);
	return CL(n), n;
}
function yL() {
	let t = rL();
	for (let e of ["init", "setup"]) {
		let n = t.filter((t) => t.hook === e);
		n.length && Hooks.once(e, () => {
			for (let t of n) SL(t, e);
		});
	}
	Hooks.once("ready", () => {
		let t = rL().filter((e) => (e.hook ?? "ready") === "ready");
		tL() && e(`${$} | Debug shape ready probes discovered: ${t.length}`, window.location.href);
		for (let e of t) SL(e, "ready");
	});
}
function bL(t) {
	let n = t.map(nL);
	localStorage.setItem(zI, JSON.stringify(n)), e(`${$} | Stored ${n.length} debug shape probe(s). Reload Foundry to run init/setup probes.`);
}
function xL(e, t = {}, n) {
	let r = HI(t.maxDepth, 2, 6), i = HI(t.maxEntries, 12, 60), a = KI(e), o = {
		inspectedAt: (/* @__PURE__ */ new Date()).toISOString(),
		label: t.label || e,
		maxDepth: r,
		maxEntries: i,
		path: e,
		value: cL(a, {
			maxDepth: r,
			maxEntries: i,
			seen: /* @__PURE__ */ new WeakSet()
		})
	};
	return n && (o.hook = n), o;
}
function SL(e, n) {
	try {
		CL(xL(e.path, e, n));
	} catch (n) {
		t(`${$} | Debug shape probe failed for "${e.path}".`, n);
	}
}
function CL(t) {
	e(`${$} | Debug shape probe: ${t.label}`, JSON.stringify(t, null, 2));
}
//#endregion
//#region src/view/components/ApplicationShell.vue?vue&type=script&setup=true&lang.ts
var wL = ["aria-label"], TL = { class: "dui-card-body" }, EL = { class: "dui-card-title" }, DL = { key: 0 }, OL = {
	key: 0,
	class: "dui-card-actions"
}, kL = /* @__PURE__ */ I({
	__name: "ApplicationShell",
	props: {
		description: {},
		title: {}
	},
	setup(e) {
		return (t, n) => (z(), B("section", {
			"aria-label": e.title,
			class: "dui-card"
		}, [H("div", TL, [
			H("header", null, [
				H("h1", EL, k(e.title), 1),
				e.description ? (z(), B("p", DL, k(e.description), 1)) : G("", !0),
				Vr(t.$slots, "header")
			]),
			Vr(t.$slots, "default"),
			t.$slots.actions ? (z(), B("div", OL, [Vr(t.$slots, "actions")])) : G("", !0)
		])], 8, wL));
	}
}), AL = { class: "dui-list" }, jL = /* @__PURE__ */ I({
	__name: "DaisyExampleApp",
	setup(e) {
		let t = [
			"button",
			"badge",
			"card",
			"alert"
		];
		return (e, n) => (z(), V(kL, {
			description: "A quick visual check of the module's isolated Daisy component theme.",
			title: "Daisy Probe"
		}, {
			header: F(() => [...n[0] ||= [H("span", { class: "dui-badge dui-badge-primary" }, "Scoped", -1), H("span", { class: "dui-badge dui-badge-outline" }, "Foundry-safe", -1)]]),
			actions: F(() => [...n[1] ||= [H("span", { class: "dui-badge dui-badge-success" }, "Ready", -1)]]),
			default: F(() => [n[2] ||= H("div", { class: "dui-alert dui-alert-info" }, [H("span", null, "DaisyUI is available inside this Vue application root.")], -1), H("ul", AL, [(z(), B(R, null, L(t, (e) => H("li", {
				key: e,
				class: "dui-list-row"
			}, k(e), 1)), 64))])]),
			_: 1
		}));
	}
}), ML = class extends Vb {
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${$}-daisy-example`,
		classes: [$, "wfrp4e-customizer-daisy-example"],
		position: {
			height: 430,
			width: 560
		},
		window: {
			icon: "fa-solid fa-flask",
			title: "WFRP4e Daisy Probe"
		}
	};
	getVueComponent() {
		return jL;
	}
}, NL = { class: "dui-list" }, PL = { class: "dui-list-row" }, FL = { class: "dui-list-row" }, IL = { class: "dui-list-row" }, LL = /* @__PURE__ */ I({
	__name: "WorkbenchApp",
	props: {
		openDaisyProbe: { type: Function },
		openNpcBuilder: { type: Function },
		openSpeciesBuilder: { type: Function }
	},
	setup(e) {
		return (t, n) => (z(), V(kL, {
			description: "Open a focused WFRP4e authoring workflow.",
			title: "Customizer Workbench"
		}, {
			default: F(() => [H("ul", NL, [
				H("li", PL, [n[3] ||= H("div", { class: "dui-list-col-grow" }, [H("strong", null, "NPC Builder"), H("p", null, "Build an NPC from a base Actor, Careers, traits, trappings, and spells.")], -1), H("button", {
					"aria-label": "Open NPC Builder",
					class: "dui-btn dui-btn-primary",
					type: "button",
					onClick: n[0] ||= (...t) => e.openNpcBuilder && e.openNpcBuilder(...t)
				}, " Open ")]),
				H("li", FL, [n[4] ||= H("div", { class: "dui-list-col-grow" }, [H("strong", null, "Species Builder"), H("p", null, "Author custom species and apply them to WFRP character generation.")], -1), H("button", {
					"aria-label": "Open Species Builder",
					class: "dui-btn",
					type: "button",
					onClick: n[1] ||= (...t) => e.openSpeciesBuilder && e.openSpeciesBuilder(...t)
				}, " Open ")]),
				H("li", IL, [n[5] ||= H("div", { class: "dui-list-col-grow" }, [H("strong", null, "DaisyUI Probe"), H("p", null, "Check the module's scoped component theme.")], -1), H("button", {
					"aria-label": "Open DaisyUI Probe",
					class: "dui-btn dui-btn-ghost",
					type: "button",
					onClick: n[2] ||= (...t) => e.openDaisyProbe && e.openDaisyProbe(...t)
				}, " Open ")])
			])]),
			_: 1
		}));
	}
}), RL = class extends Vb {
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
		return LL;
	}
	getVueProps() {
		return {
			openDaisyProbe: () => new ML().render(!0),
			openNpcBuilder: () => new OF().render(!0),
			openSpeciesBuilder: () => new pS().render(!0)
		};
	}
};
//#endregion
//#region src/module/register-module-menus.ts
function zL() {
	game.settings.registerMenu($, "workbench", {
		hint: "Open the WFRP4e Customizer Apps workbench.",
		icon: "fa-solid fa-screwdriver-wrench",
		label: "Open Workbench",
		name: "WFRP4e Customizer Apps",
		restricted: !0,
		type: RL
	}), game.settings.registerMenu($, "npc-builder", {
		hint: "Build a WFRP4e NPC from a base Actor and Career items.",
		icon: "fa-solid fa-user-plus",
		label: "Open NPC Builder",
		name: "WFRP4e NPC Builder",
		restricted: !0,
		type: OF
	}), game.settings.registerMenu($, "species-builder", {
		hint: "Create custom WFRP4e species definitions for character generation.",
		icon: "fa-solid fa-people-group",
		label: "Open Species Builder",
		name: "WFRP4e Species Builder",
		restricted: !0,
		type: pS
	}), game.settings.registerMenu($, "daisy-example", {
		hint: "Open a small isolated DaisyUI component probe.",
		icon: "fa-solid fa-flask",
		label: "Open Daisy Probe",
		name: "WFRP4e Daisy Probe",
		restricted: !0,
		type: ML
	});
}
//#endregion
//#region src/module/register-module-settings.ts
function BL() {
	nN(), nx();
}
//#endregion
//#region src/functions/item-grants/wfrp-grant-effect.ts
var VL = "generatedGrantItemsEffect", HL = {
	grantMode: "all",
	lifetime: "linked-to-effect",
	ownerAction: "keep"
};
function UL(e) {
	let t = e.recipe ?? HL;
	WL(t);
	let n = e.items.map((e) => e.uuid);
	return {
		changes: [],
		description: KL(e.effectName, e.items, t),
		disabled: !1,
		flags: { [e.flagScope]: {
			[VL]: !0,
			itemUuids: n,
			recipe: t
		} },
		img: e.items[0]?.img ?? "icons/svg/aura.svg",
		name: e.effectName,
		system: {
			scriptData: [{
				label: e.effectName,
				script: GL(n, t),
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
function WL(e) {
	if (e.lifetime === "linked-to-effect" && e.ownerAction === "delete-after-grant") throw Error("Self-removing grant effects must create detached item copies.");
}
function GL(e, t) {
	let n = t.lifetime === "linked-to-effect" ? "{ fromEffect: this.effect.id }" : "{}", r = t.ownerAction === "delete-after-grant" ? [
		"",
		"if (this.item) {",
		"  await this.item.delete({ skipDeletingItems: true });",
		"  this.script.notification(\"Removed \" + this.item.name + \" after granting items.\");",
		"} else {",
		"  this.script.notification(\"Could not remove the source item after granting items.\", \"warn\");",
		"}"
	] : [];
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
		`  await this.actor.createEmbeddedDocuments("Item", itemDataToCreate, ${n});`,
		"  this.script.notification(\"Added \" + itemDataToCreate.length + \" granted item(s).\");",
		"} else {",
		"  this.script.notification(\"No granted items were added.\", \"warn\");",
		"}",
		...r
	].join("\n");
}
function KL(e, t, n) {
	let r = qL(e), i = t.map((e) => `<li>${qL(e.name)}</li>`).join("");
	return `<p><strong>${r}</strong>: grants item copies; ${n.lifetime === "linked-to-effect" ? "granted item copies are removed with this effect" : "granted item copies remain after this effect is removed"}.${n.ownerAction === "delete-after-grant" ? " The source Item removes itself after granting." : ""}</p><ul>${i}</ul>`;
}
function qL(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
//#endregion
//#region src/view/apps/grant-builder/GrantBuilderApp.vue?vue&type=script&setup=true&lang.ts
var JL = { class: "dui-card dui-card-border dui-card-sm" }, YL = { class: "dui-card-body" }, XL = { class: "dui-list" }, ZL = {
	key: 0,
	class: "dui-list-row"
}, QL = ["src"], $L = { class: "dui-list-col-grow" }, eR = ["title", "onClick"], tR = { class: "dui-card dui-card-border dui-card-sm" }, nR = { class: "dui-card-body" }, rR = { class: "dui-fieldset" }, iR = { class: "dui-label" }, aR = ["value"], oR = { class: "dui-card-body" }, sR = { class: "dui-fieldset" }, cR = { class: "dui-label" }, lR = ["checked"], uR = { class: "dui-label" }, dR = ["checked"], fR = { class: "dui-label" }, pR = ["checked", "disabled"], mR = ["disabled"], hR = /* @__PURE__ */ I({
	__name: "GrantBuilderApp",
	props: {
		carrierName: {},
		effectName: {},
		items: {},
		lifetime: {},
		ownerAction: {},
		onCancel: { type: Function },
		onCreate: { type: Function },
		onDropData: { type: Function },
		onEffectNameInput: { type: Function },
		onLifetimeChange: { type: Function },
		onOwnerActionChange: { type: Function },
		onRemoveItem: { type: Function }
	},
	setup(e) {
		function t(e) {
			return e.target instanceof HTMLInputElement ? e.target.value : "";
		}
		return (n, r) => (z(), V(kL, {
			description: `Build an item-granting Active Effect on ${e.carrierName}.`,
			title: "Grant Builder"
		}, {
			actions: F(() => [H("button", {
				class: "dui-btn dui-btn-ghost",
				type: "button",
				onClick: r[5] ||= (...t) => e.onCancel && e.onCancel(...t)
			}, "Cancel"), H("button", {
				class: "dui-btn dui-btn-primary",
				type: "button",
				disabled: e.items.length === 0,
				onClick: r[6] ||= (...t) => e.onCreate && e.onCreate(...t)
			}, " Create Grant Effect ", 8, mR)]),
			default: F(() => [
				H("section", JL, [H("div", YL, [
					r[8] ||= H("h2", { class: "dui-card-title" }, "Granted Items", -1),
					U(vg, {
						description: "World and compendium Items can be added one at a time.",
						"manual-entry-trigger": "button",
						title: "Drop Items Here",
						onDropData: e.onDropData
					}, null, 8, ["onDropData"]),
					H("ul", XL, [e.items.length === 0 ? (z(), B("li", ZL, "No granted items configured.")) : (z(!0), B(R, { key: 1 }, L(e.items, (t) => (z(), B("li", {
						key: t.uuid,
						class: "dui-list-row"
					}, [
						t.img ? (z(), B("img", {
							key: 0,
							alt: "",
							src: t.img
						}, null, 8, QL)) : G("", !0),
						H("div", $L, [H("strong", null, k(t.name), 1), H("small", null, k(t.uuid), 1)]),
						H("button", {
							class: "dui-btn dui-btn-ghost dui-btn-sm dui-btn-square",
							type: "button",
							title: `Remove ${t.name}`,
							onClick: (n) => e.onRemoveItem(t.uuid)
						}, [...r[7] ||= [H("i", {
							class: "fa-solid fa-times",
							"aria-hidden": "true"
						}, null, -1)]], 8, eR)
					]))), 128))])
				])]),
				H("section", tR, [H("div", nR, [H("fieldset", rR, [r[10] ||= H("legend", { class: "dui-fieldset-legend" }, "Effect", -1), H("label", iR, [r[9] ||= H("span", null, "Effect name", -1), H("input", {
					class: "dui-input",
					value: e.effectName,
					type: "text",
					onInput: r[0] ||= (n) => e.onEffectNameInput(t(n))
				}, null, 40, aR)])])])]),
				H("form", {
					class: "dui-card dui-card-border dui-card-sm",
					onSubmit: r[4] ||= qo(() => {}, ["prevent"])
				}, [H("div", oR, [H("fieldset", sR, [
					r[14] ||= H("legend", { class: "dui-fieldset-legend" }, "Granted Item Lifetime", -1),
					H("label", cR, [H("input", {
						class: "dui-radio",
						name: "grant-lifetime",
						type: "radio",
						value: "linked-to-effect",
						checked: e.lifetime === "linked-to-effect",
						onChange: r[1] ||= (t) => e.onLifetimeChange("linked-to-effect")
					}, null, 40, lR), r[11] ||= H("span", null, [
						H("strong", null, "Linked to this effect"),
						H("br"),
						W(" Granted Items are removed when this effect is deleted. ")
					], -1)]),
					H("label", uR, [H("input", {
						class: "dui-radio",
						name: "grant-lifetime",
						type: "radio",
						value: "detached",
						checked: e.lifetime === "detached",
						onChange: r[2] ||= (t) => e.onLifetimeChange("detached")
					}, null, 40, dR), r[12] ||= H("span", null, [
						H("strong", null, "Detached copies"),
						H("br"),
						W(" Granted Items remain after this effect or source Item is removed. ")
					], -1)]),
					H("label", fR, [H("input", {
						class: "dui-checkbox",
						type: "checkbox",
						checked: e.ownerAction === "delete-after-grant",
						disabled: e.lifetime !== "detached",
						onChange: r[3] ||= (t) => e.onOwnerActionChange(e.ownerAction === "delete-after-grant" ? "keep" : "delete-after-grant")
					}, null, 40, pR), r[13] ||= W(" Remove the source Item after granting. ", -1)])
				])])], 32)
			]),
			_: 1
		}, 8, ["description"]));
	}
});
//#endregion
//#region src/module/wfrp4e/grant/item-documents.ts
function gR(e) {
	let t = e.dataTransfer?.getData("text/plain") ?? "";
	if (!t) return null;
	try {
		return _x(t).type === "Item" ? t : null;
	} catch {
		return null;
	}
}
async function _R(e) {
	let t = _x(e);
	if (!t.uuid) throw Error("Drop an Item with a resolvable UUID.");
	return hx(await fromUuid(t.uuid), "The dropped Item was not found.");
}
function vR(e) {
	let t = {
		name: e.name,
		uuid: e.uuid
	};
	return e.img && (t.img = e.img), t;
}
//#endregion
//#region src/module/apps/grant-builder/GrantBuilderApplication.ts
var yR = "detached", bR = class extends Vb {
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [$, "wfrp4e-customizer-grant-builder"],
		id: `${$}-grant-builder`,
		position: {
			height: 640,
			width: 620
		},
		window: {
			icon: "fa-solid fa-sitemap",
			resizable: !0,
			title: "Advanced Item Grant Builder"
		}
	};
	carrierItem;
	#e = "Grant Items";
	#t = !1;
	#n = [];
	#r = "linked-to-effect";
	#i = "keep";
	constructor(e) {
		super(), this.carrierItem = e;
	}
	getVueComponent() {
		return hR;
	}
	getVueProps() {
		return {
			carrierName: this.carrierItem.name,
			effectName: this.#e,
			items: this.#n,
			lifetime: this.#r,
			ownerAction: this.#i,
			onCancel: () => this.close(),
			onCreate: () => this.createGrantEffect(),
			onDropData: (e) => this.handleDrop(e),
			onEffectNameInput: (e) => {
				this.#e = e, this.#t = !0;
			},
			onLifetimeChange: (e) => this.changeLifetime(e),
			onOwnerActionChange: (e) => this.changeOwnerAction(e),
			onRemoveItem: (e) => this.removeItem(e)
		};
	}
	changeLifetime(e) {
		this.#r = e, e !== yR && (this.#i = "keep"), this.render();
	}
	changeOwnerAction(e) {
		this.#i = e, this.render();
	}
	removeItem(e) {
		this.#n = this.#n.filter((t) => t.uuid !== e), this.render();
	}
	async handleDrop(e) {
		try {
			let t = await _R(e);
			if (t.uuid === this.carrierItem.uuid) throw Error("An Item cannot grant itself.");
			if (this.#n.some((e) => e.uuid === t.uuid)) {
				ui.notifications?.warn?.(`"${t.name}" is already in this grant effect.`);
				return;
			}
			this.#n = [...this.#n, vR(t)], this.updateDefaultEffectName(), this.render();
		} catch (e) {
			let t = e instanceof Error ? e.message : "The dropped Item could not be converted.";
			ui.notifications?.warn?.(t);
		}
	}
	updateDefaultEffectName() {
		if (this.#t) return;
		let e = this.#n.length === 1 ? this.#n[0] : void 0;
		this.#e = e ? `Grant ${e.name}` : "Grant Item Package";
	}
	async createGrantEffect() {
		let e = this.#e.trim();
		if (!e) {
			ui.notifications?.warn?.("Enter an effect name before creating the grant effect.");
			return;
		}
		if (this.#n.length === 0) {
			ui.notifications?.warn?.("Add at least one Item before creating the grant effect.");
			return;
		}
		if (!this.carrierItem.createEmbeddedDocuments) {
			ui.notifications?.warn?.("This Item sheet does not support creating Active Effects.");
			return;
		}
		try {
			let t = {
				grantMode: "all",
				lifetime: this.#r,
				ownerAction: this.#i
			}, n = UL({
				effectName: e,
				flagScope: $,
				items: this.#n,
				recipe: t
			});
			await this.carrierItem.createEmbeddedDocuments("ActiveEffect", [n]), ui.notifications?.info(`Created "${e}" grant effect.`), await this.close();
		} catch (e) {
			let t = e instanceof Error ? e.message : "Could not create the grant effect.";
			ui.notifications?.warn?.(t);
		}
	}
}, xR = new Set(["talent", "trait"]), SR = /* @__PURE__ */ new WeakSet(), CR = !1, wR = "wfrp4e-customizer-grant-builder-button", TR = [
	"section[data-application-part=\"effects\"].active",
	"section[data-tab=\"effects\"].active",
	".tab[data-tab=\"effects\"].active",
	".tab.effects.active"
].join(","), ER = [
	"section[data-application-part=\"effects\"]",
	"section[data-tab=\"effects\"]",
	".tab[data-tab=\"effects\"]",
	".tab.effects"
].join(",");
function DR() {
	CR || (CR = !0, Hooks.on("renderApplicationV2", (e, t) => {
		if (!(t instanceof HTMLElement)) return;
		let n = jR(e);
		!n || !xR.has(n.type) || (OR(n, t), kR(n, t));
	}));
}
function OR(e, t) {
	SR.has(t) || (SR.add(t), t.addEventListener("dragover", (e) => {
		MR(t, e.target) && (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "copy"));
	}, !0), t.addEventListener("drop", (n) => {
		AR(e, t, n);
	}, !0));
}
function kR(e, t) {
	if (t.querySelector(`.${wR}`)) return;
	let n = PR(t, { includeInactive: !0 });
	if (!n) return;
	let r = document.createElement("div");
	r.classList.add("wfrp4e-customizer-grant-builder-toolbar");
	let i = document.createElement("button");
	i.type = "button", i.classList.add(wR), i.title = "Open the advanced item grant builder", i.innerHTML = "<i class=\"fa-solid fa-sitemap\" aria-hidden=\"true\"></i><span>Grant Builder</span>", i.addEventListener("click", () => {
		new bR(e).render(!0);
	}), r.append(i), n.prepend(r);
}
async function AR(e, t, n) {
	if (!MR(t, n.target)) return;
	let r = gR(n);
	if (r) {
		n.preventDefault(), n.stopPropagation();
		try {
			let t = await _R(r);
			if (t.uuid === e.uuid) throw Error("An Item cannot grant itself.");
			let n = vR(t), i = UL({
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
function jR(e) {
	if (typeof e != "object" || !e) return null;
	let t = "item" in e ? e.item : void 0;
	if (px(t)) return t;
	let n = "document" in e ? e.document : void 0;
	return px(n) ? n : null;
}
function MR(e, t) {
	return !(t instanceof Element) || !e.contains(t) ? !1 : !!NR(e);
}
function NR(e) {
	return e.querySelector(TR) || PR(e, { includeInactive: !1 });
}
function PR(e, t) {
	return [...e.querySelectorAll(ER)].find((e) => t.includeInactive || e.offsetParent !== null) ?? null;
}
//#endregion
//#region src/module/api/create-module-api.ts
function FR() {
	return {
		clearDebugShapeProbes: gL,
		estimateNpcXp: ZF,
		getDebugShapeProbes: _L,
		inspectPath: vL,
		listNpcAutoAdvanceStrategies: Kw,
		async openDaisyExample() {
			await new ML().render(!0);
		},
		async openNpcBuilder() {
			await new OF().render(!0);
		},
		async openSpeciesBuilder() {
			await new pS().render(!0);
		},
		async openWorkbench() {
			await new RL().render(!0);
		},
		registerNpcAutoAdvanceStrategy: Gw,
		setDebugShapeProbes: bL
	};
}
//#endregion
//#region src/module/api/register-module-api.ts
function IR() {
	let e = game.modules.get($);
	if (!e) throw Error(`Foundry module registry entry was not found for ${$}.`);
	e.api = FR();
}
//#endregion
//#region src/module/hooks/register-module-hooks.ts
function LR() {
	yL(), Hooks.once("init", () => {
		e(`${$} | Initializing`), BL(), game.system.id === "wfrp4e" && (fI(), rI(), AI(), DR()), zL(), jF();
	}), Hooks.once("ready", () => {
		if (game.system.id !== "wfrp4e") {
			t(`${$} | Loaded outside ${Ob}; skipping module API registration.`);
			return;
		}
		IR(), mM(), MM(), sx(), aS(), e(`${$} | Ready`);
	});
}
//#endregion
//#region src/main.ts
LR();
//#endregion

//# sourceMappingURL=wfrp4e-customizer-apps.mjs.map