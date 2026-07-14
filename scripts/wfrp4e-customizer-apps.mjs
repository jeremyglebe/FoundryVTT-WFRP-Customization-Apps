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
		let o = Reflect.get(e, t, /* @__PURE__ */ Qt(e) ? e : n);
		if ((y(t) ? yt.has(t) : vt(t)) || (r || at(e, "get", t), i)) return o;
		if (/* @__PURE__ */ Qt(o)) {
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
			if (!/* @__PURE__ */ qt(n) && !/* @__PURE__ */ Kt(n) && (i = /* @__PURE__ */ j(i), n = /* @__PURE__ */ j(n)), !a && /* @__PURE__ */ Qt(i) && !/* @__PURE__ */ Qt(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : f(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ Qt(e) ? e : r);
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
function Qt(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function M(e) {
	return $t(e, !1);
}
function $t(e, t) {
	return /* @__PURE__ */ Qt(e) ? e : new en(e, t);
}
var en = class {
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
function N(e) {
	return /* @__PURE__ */ Qt(e) ? e.value : e;
}
var tn = {
	get: (e, t, n) => t === "__v_raw" ? e : N(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ Qt(i) && !/* @__PURE__ */ Qt(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function nn(e) {
	return /* @__PURE__ */ Gt(e) ? e : new Proxy(e, tn);
}
// @__NO_SIDE_EFFECTS__
function rn(e) {
	let t = p(e) ? Array(e.length) : {};
	for (let n in e) t[n] = cn(e, n);
	return t;
}
var an = class {
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
		return this._shallow && (e = N(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ Qt(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ Qt(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return st(this._raw, this._key);
	}
}, on = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
// @__NO_SIDE_EFFECTS__
function sn(e, t, n) {
	return /* @__PURE__ */ Qt(e) ? e : _(e) ? new on(e) : b(e) && arguments.length > 1 ? cn(e, t, n) : /* @__PURE__ */ M(e);
}
function cn(e, t, n) {
	return new an(e, t, n);
}
var ln = class {
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
function un(e, t, n = !1) {
	let r, i;
	return _(e) ? r = e : (r = e.get, i = e.set), new ln(r, i, n);
}
var dn = {}, fn = /* @__PURE__ */ new WeakMap(), pn = void 0;
function mn(e, t = !1, n = pn) {
	if (n) {
		let t = fn.get(n);
		t || fn.set(n, t = []), t.push(e);
	}
}
function hn(e, t, n = r) {
	let { immediate: i, deep: o, once: s, scheduler: c, augmentJob: l, call: d } = n, f = (e) => o ? e : /* @__PURE__ */ qt(e) || o === !1 || o === 0 ? gn(e, 1) : gn(e), m, h, g, v, y = !1, b = !1;
	if (/* @__PURE__ */ Qt(e) ? (h = () => e.value, y = /* @__PURE__ */ qt(e)) : /* @__PURE__ */ Gt(e) ? (h = () => f(e), y = !0) : p(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Gt(e) || /* @__PURE__ */ qt(e)), h = () => e.map((e) => {
		if (/* @__PURE__ */ Qt(e)) return e.value;
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
		let t = pn;
		pn = m;
		try {
			return d ? d(e, 3, [v]) : e(v);
		} finally {
			pn = t;
		}
	} : a, t && o) {
		let e = h, t = o === !0 ? Infinity : o;
		h = () => gn(e(), t);
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
	let C = b ? Array(e.length).fill(dn) : dn, w = (e) => {
		if (!(!(m.flags & 1) || !m.dirty && !e)) if (t) {
			let n = m.run();
			if (e || o || y || (b ? n.some((e, t) => D(e, C[t])) : D(n, C))) {
				g && g();
				let e = pn;
				pn = m;
				try {
					let e = [
						n,
						C === dn ? void 0 : b && C[0] === dn ? [] : C,
						v
					];
					C = n, d ? d(t, 3, e) : t(...e);
				} finally {
					pn = e;
				}
			}
		} else m.run();
	};
	return l && l(w), m = new Ne(h), m.scheduler = c ? () => c(w, !1) : w, v = (e) => mn(e, !1, m), g = m.onStop = () => {
		let e = fn.get(m);
		if (e) {
			if (d) d(e, 4);
			else for (let t of e) t();
			fn.delete(m);
		}
	}, t ? i ? w(!0) : C = m.run() : c ? c(w.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function gn(e, t = Infinity, n) {
	if (t <= 0 || !b(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ Qt(e)) gn(e.value, t, n);
	else if (p(e)) for (let r = 0; r < e.length; r++) gn(e[r], t, n);
	else if (h(e) || m(e)) e.forEach((e) => {
		gn(e, t, n);
	});
	else if (ee(e)) {
		for (let r in e) gn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && gn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function _n(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		yn(e, t, n);
	}
}
function vn(e, t, n, r) {
	if (_(e)) {
		let i = _n(e, t, n, r);
		return i && x(i) && i.catch((e) => {
			yn(e, t, n);
		}), i;
	}
	if (p(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(vn(e[a], t, n, r));
		return i;
	}
}
function yn(e, t, n, i = !0) {
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
			Je(), _n(o, null, 10, [
				e,
				i,
				a
			]), Ye();
			return;
		}
	}
	bn(e, n, a, i, s);
}
function bn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var xn = [], Sn = -1, Cn = [], wn = null, Tn = 0, En = /* @__PURE__ */ Promise.resolve(), Dn = null;
function On(e) {
	let t = Dn || En;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function kn(e) {
	let t = Sn + 1, n = xn.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = xn[r], a = Fn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function An(e) {
	if (!(e.flags & 1)) {
		let t = Fn(e), n = xn[xn.length - 1];
		!n || !(e.flags & 2) && t >= Fn(n) ? xn.push(e) : xn.splice(kn(t), 0, e), e.flags |= 1, jn();
	}
}
function jn() {
	Dn ||= En.then(In);
}
function Mn(e) {
	p(e) ? Cn.push(...e) : wn && e.id === -1 ? wn.splice(Tn + 1, 0, e) : e.flags & 1 || (Cn.push(e), e.flags |= 1), jn();
}
function Nn(e, t, n = Sn + 1) {
	for (; n < xn.length; n++) {
		let t = xn[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			xn.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function Pn(e) {
	if (Cn.length) {
		let e = [...new Set(Cn)].sort((e, t) => Fn(e) - Fn(t));
		if (Cn.length = 0, wn) {
			wn.push(...e);
			return;
		}
		for (wn = e, Tn = 0; Tn < wn.length; Tn++) {
			let e = wn[Tn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		wn = null, Tn = 0;
	}
}
var Fn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function In(e) {
	try {
		for (Sn = 0; Sn < xn.length; Sn++) {
			let e = xn[Sn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), _n(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; Sn < xn.length; Sn++) {
			let e = xn[Sn];
			e && (e.flags &= -2);
		}
		Sn = -1, xn.length = 0, Pn(e), Dn = null, (xn.length || Cn.length) && In(e);
	}
}
var Ln = null, Rn = null;
function zn(e) {
	let t = Ln;
	return Ln = e, Rn = e && e.type.__scopeId || null, t;
}
function P(e, t = Ln, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && ma(-1);
		let i = zn(t), a;
		try {
			a = e(...n);
		} finally {
			zn(i), r._d && ma(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Bn(e, t) {
	if (Ln === null) return e;
	let n = Ja(Ln), i = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [a, o, s, c = r] = t[e];
		a && (_(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && gn(o), i.push({
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
		c && (Je(), vn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Ye());
	}
}
function Hn(e, t) {
	if (Ma) {
		let n = Ma.provides, r = Ma.parent && Ma.parent.provides;
		r === n && (n = Ma.provides = Object.create(r)), n[e] = t;
	}
}
function Un(e, t, n = !1) {
	let r = Na();
	if (r || _i) {
		let i = _i ? _i._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && _(t) ? t.call(r && r.proxy) : t;
	}
}
function Wn() {
	return !!(Na() || _i);
}
var Gn = /* @__PURE__ */ Symbol.for("v-scx"), Kn = () => Un(Gn);
function qn(e, t, n) {
	return Jn(e, t, n);
}
function Jn(e, t, n = r) {
	let { immediate: i, deep: o, flush: s, once: c } = n, u = l({}, n), d = t && i || !t && s !== "post", f;
	if (za) {
		if (s === "sync") {
			let e = Kn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = a, e.resume = a, e.pause = a, e;
		}
	}
	let p = Ma;
	u.call = (e, t, n) => vn(e, p, t, n);
	let m = !1;
	s === "post" ? u.scheduler = (e) => {
		Ji(e, p && p.suspense);
	} : s !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : An(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = hn(e, t, u);
	return za && (f ? f.push(h) : d && h()), h;
}
function Yn(e, t, n) {
	let r = this.proxy, i = v(e) ? e.includes(".") ? Xn(r, e) : () => r[e] : e.bind(r, r), a;
	_(t) ? a = t : (a = t.handler, n = t);
	let o = Ia(this), s = Jn(i, a.bind(r), n);
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
var Zn = /* @__PURE__ */ new WeakMap(), Qn = /* @__PURE__ */ Symbol("_vte"), $n = (e) => e.__isTeleport, er = (e) => e && (e.disabled || e.disabled === ""), tr = (e) => e && (e.defer || e.defer === ""), nr = (e) => typeof SVGElement < "u" && e instanceof SVGElement, rr = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ir = (e, t) => {
	let n = e && e.to;
	return v(n) ? t ? t(n) : null : n;
}, ar = {
	name: "Teleport",
	__isTeleport: !0,
	process(e, t, n, r, i, a, o, s, c, l) {
		let { mc: u, pc: d, pbc: f, o: { insert: p, querySelector: m, createText: h, createComment: g, parentNode: _ } } = l, v = er(t.props), { dynamicChildren: y } = t, b = (e, t, n) => {
			e.shapeFlag & 16 && u(e.children, t, n, i, a, o, s, c);
		}, x = (e = t) => {
			let n = er(e.props), r = e.target = ir(e.props, m), a = ur(r, e, h, p);
			r && (o !== "svg" && nr(r) ? o = "svg" : o !== "mathml" && rr(r) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(r), n || (b(e, r, a), lr(e, !1)));
		}, S = (e) => {
			let t = () => {
				Zn.get(e) === t && (Zn.delete(e), er(e.props) && (b(e, _(e.el) || n, e.anchor), lr(e, !0)), x(e));
			};
			Zn.set(e, t), Ji(t, a);
		};
		if (e == null) {
			let e = t.el = h(""), i = t.anchor = h("");
			if (p(e, n, r), p(i, n, r), tr(t.props) || a && a.pendingBranch) {
				S(t);
				return;
			}
			v && (b(t, n, i), lr(t, !0)), x();
		} else {
			t.el = e.el;
			let r = t.anchor = e.anchor, u = Zn.get(e);
			if (u) {
				u.flags |= 8, Zn.delete(e), S(t);
				return;
			}
			t.targetStart = e.targetStart;
			let p = t.target = e.target, h = t.targetAnchor = e.targetAnchor, g = er(e.props), _ = g ? n : p, b = g ? r : h;
			if (o === "svg" || nr(p) ? o = "svg" : (o === "mathml" || rr(p)) && (o = "mathml"), y ? (f(e.dynamicChildren, y, _, i, a, o, s), ea(e, t, !0)) : c || d(e, t, _, b, i, a, o, s, !1), v) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : or(t, n, r, l, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = t.target = ir(t.props, m);
				e && or(t, e, null, l, 0);
			} else g && or(t, p, h, l, 1);
			lr(t, v);
		}
	},
	remove(e, t, n, { um: r, o: { remove: i } }, a) {
		let { shapeFlag: o, children: s, anchor: c, targetStart: l, targetAnchor: u, target: d, props: f } = e, p = a || !er(f), m = Zn.get(e);
		if (m && (m.flags |= 8, Zn.delete(e)), d && (i(l), i(u)), a && i(c), !m && o & 16) for (let e = 0; e < s.length; e++) {
			let i = s[e];
			r(i, t, n, p, !!i.dynamicChildren);
		}
	},
	move: or,
	hydrate: sr
};
function or(e, t, n, { o: { insert: r }, m: i }, a = 2) {
	a === 0 && r(e.targetAnchor, t, n);
	let { el: o, anchor: s, shapeFlag: c, children: l, props: u } = e, d = a === 2;
	if (d && r(o, t, n), !Zn.has(e) && (!d || er(u)) && c & 16) for (let e = 0; e < l.length; e++) i(l[e], t, n, 2);
	d && r(s, t, n);
}
function sr(e, t, n, r, i, a, { o: { nextSibling: o, parentNode: s, querySelector: c, insert: l, createText: u } }, d) {
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
	let m = t.target = ir(t.props, c), h = er(t.props);
	if (m) {
		let c = m._lpa || m.firstChild;
		t.shapeFlag & 16 && (h ? (p(e, t), f(m, c), t.targetAnchor || ur(m, t, u, l, s(e) === m ? e : null)) : (t.anchor = o(e), f(m, c), t.targetAnchor || ur(m, t, u, l), d(c && o(c), t, m, n, r, i, a))), lr(t, h);
	} else h && t.shapeFlag & 16 && (p(e, t), t.targetStart = e, t.targetAnchor = o(e));
	return t.anchor && o(t.anchor);
}
var cr = ar;
function lr(e, t) {
	let n = e.ctx;
	if (n && n.ut) {
		let r, i;
		for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i;) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
		n.ut();
	}
}
function ur(e, t, n, r, i = null) {
	let a = t.targetStart = n(""), o = t.targetAnchor = n("");
	return a[Qn] = o, e && (r(a, e, i), r(o, e, i)), o;
}
var dr = /* @__PURE__ */ Symbol("_leaveCb");
function fr(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, fr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function F(e, t) {
	return _(e) ? /* @__PURE__ */ l({ name: e.name }, t, { setup: e }) : e;
}
function pr() {
	let e = Na();
	return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
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
	let s = i.shapeFlag & 4 ? Ja(i.component) : i.el, c = a ? null : s, { i: l, r: d } = e, m = t && t.r, h = l.refs === r ? l.refs = {} : l.refs, g = l.setupState, y = /* @__PURE__ */ j(g), b = g === r ? o : (e) => hr(h, e) ? !1 : f(y, e), x = (e, t) => !(t && hr(h, t));
	if (m != null && m !== d) {
		if (vr(t), v(m)) h[m] = null, b(m) && (g[m] = null);
		else if (/* @__PURE__ */ Qt(m)) {
			let e = t;
			x(m, e.k) && (m.value = null), e.k && (h[e.k] = null);
		}
	}
	if (_(d)) _n(d, l, 12, [c, h]);
	else {
		let t = v(d), r = /* @__PURE__ */ Qt(d);
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
				t.id = -1, gr.set(e, t), Ji(t, n);
			} else vr(e), i();
		}
	}
}
function vr(e) {
	let t = gr.get(e);
	t && (t.flags |= 8, gr.delete(e));
}
fe().requestIdleCallback, fe().cancelIdleCallback;
var yr = (e) => !!e.type.__asyncLoader, br = (e) => e.type.__isKeepAlive;
function xr(e, t) {
	Cr(e, "a", t);
}
function Sr(e, t) {
	Cr(e, "da", t);
}
function Cr(e, t, n = Ma) {
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
function Tr(e, t, n = Ma, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Je();
			let i = Ia(n), a = vn(t, n, e, r);
			return i(), Ye(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var Er = (e) => (t, n = Ma) => {
	(!za || e === "sp") && Tr(e, (...e) => t(...e), n);
}, Dr = Er("bm"), Or = Er("m"), kr = Er("bu"), Ar = Er("u"), jr = Er("bum"), Mr = Er("um"), Nr = Er("sp"), Pr = Er("rtg"), Fr = Er("rtc");
function Ir(e, t = Ma) {
	Tr("ec", e, t);
}
var Lr = "components", Rr = /* @__PURE__ */ Symbol.for("v-ndc");
function zr(e) {
	return v(e) ? Br(Lr, e, !1) || e : e || Rr;
}
function Br(e, t, n = !0, r = !1) {
	let i = Ln || Ma;
	if (i) {
		let n = i.type;
		if (e === Lr) {
			let e = Ya(n, !1);
			if (e && (e === t || e === E(t) || e === oe(E(t)))) return n;
		}
		let a = Vr(i[e] || n[e], t) || Vr(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function Vr(e, t) {
	return e && (e[t] || e[E(t)] || e[oe(E(t))]);
}
function I(e, t, n, r) {
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
function Hr(e, t, n = {}, r, i) {
	if (Ln.ce || Ln.parent && yr(Ln.parent) && Ln.parent.ce) {
		let e = Object.keys(n).length > 0;
		return t !== "default" && (n.name = t), R(), B(L, null, [H("slot", n, r && r())], e ? -2 : 64);
	}
	let a = e[t];
	a && a._c && (a._d = !1), R();
	let o = a && Ur(a(n)), s = n.key || o && o.key, c = B(L, { key: (s && !y(s) ? s : `_${t}`) + (!o && r ? "_fb" : "") }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), a && a._c && (a._d = !0), c;
}
function Ur(e) {
	return e.some((e) => ga(e) ? !(e.type === ca || e.type === L && !Ur(e.children)) : !0) ? e : null;
}
function Wr(e, t) {
	let n = {};
	for (let r in e) n[t && /[A-Z]/.test(r) ? `on:${r}` : se(r)] = e[r];
	return n;
}
var Gr = (e) => e ? Ra(e) ? Ja(e) : Gr(e.parent) : null, Kr = /* @__PURE__ */ l(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Gr(e.parent),
	$root: (e) => Gr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => ri(e),
	$forceUpdate: (e) => e.f ||= () => {
		An(e.update);
	},
	$nextTick: (e) => e.n ||= On.bind(e.proxy),
	$watch: (e) => Yn.bind(e)
}), qr = (e, t) => e !== r && !e.__isScriptSetup && f(e, t), Jr = {
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
			else if (qr(i, t)) return s[t] = 1, i[t];
			else if (a !== r && f(a, t)) return s[t] = 2, a[t];
			else if (f(o, t)) return s[t] = 3, o[t];
			else if (n !== r && f(n, t)) return s[t] = 4, n[t];
			else Qr && (s[t] = 0);
		}
		let u = Kr[t], d, p;
		if (u) return t === "$attrs" && at(e.attrs, "get", ""), u(e);
		if ((d = c.__cssModules) && (d = d[t])) return d;
		if (n !== r && f(n, t)) return s[t] = 4, n[t];
		if (p = l.config.globalProperties, f(p, t)) return p[t];
	},
	set({ _: e }, t, n) {
		let { data: i, setupState: a, ctx: o } = e;
		return qr(a, t) ? (a[t] = n, !0) : i !== r && f(i, t) ? (i[t] = n, !0) : f(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(n[c] || e !== r && c[0] !== "$" && f(e, c) || qr(t, c) || f(o, c) || f(i, c) || f(Kr, c) || f(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? f(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Yr() {
	return Xr("useSlots").slots;
}
function Xr(e) {
	let t = Na();
	return t.setupContext ||= qa(t);
}
function Zr(e) {
	return p(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Qr = !0;
function $r(e) {
	let t = ri(e), n = e.proxy, r = e.ctx;
	Qr = !1, t.beforeCreate && ti(t.beforeCreate, e, "bc");
	let { data: i, computed: o, methods: s, watch: c, provide: l, inject: u, created: d, beforeMount: f, mounted: m, beforeUpdate: h, updated: g, activated: v, deactivated: y, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: w, render: ee, renderTracked: T, renderTriggered: te, errorCaptured: ne, serverPrefetch: re, expose: E, inheritAttrs: ie, components: ae, directives: oe, filters: se } = t;
	if (u && ei(u, r, null), s) for (let e in s) {
		let t = s[e];
		_(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		b(t) && (e.data = /* @__PURE__ */ Vt(t));
	}
	if (Qr = !0, o) for (let e in o) {
		let t = o[e], i = G({
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
	if (c) for (let e in c) ni(c[e], r, n, e);
	if (l) {
		let e = _(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Hn(t, e[t]);
		});
	}
	d && ti(d, e, "c");
	function D(e, t) {
		p(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (D(Dr, f), D(Or, m), D(kr, h), D(Ar, g), D(xr, v), D(Sr, y), D(Ir, ne), D(Fr, T), D(Pr, te), D(jr, S), D(Mr, w), D(Nr, re), p(E)) if (E.length) {
		let t = e.exposed ||= {};
		E.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	ee && e.render === a && (e.render = ee), ie != null && (e.inheritAttrs = ie), ae && (e.components = ae), oe && (e.directives = oe), re && mr(e);
}
function ei(e, t, n = a) {
	p(e) && (e = ci(e));
	for (let n in e) {
		let r = e[n], i;
		i = b(r) ? "default" in r ? Un(r.from || n, r.default, !0) : Un(r.from || n) : Un(r), /* @__PURE__ */ Qt(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function ti(e, t, n) {
	vn(p(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function ni(e, t, n, r) {
	let i = r.includes(".") ? Xn(n, r) : () => n[r];
	if (v(e)) {
		let n = t[e];
		_(n) && qn(i, n);
	} else if (_(e)) qn(i, e.bind(n));
	else if (b(e)) if (p(e)) e.forEach((e) => ni(e, t, n, r));
	else {
		let r = _(e.handler) ? e.handler.bind(n) : t[e.handler];
		_(r) && qn(i, r, e);
	}
}
function ri(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => ii(c, e, o, !0)), ii(c, t, o)), b(t) && a.set(t, c), c;
}
function ii(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && ii(e, a, n, !0), i && i.forEach((t) => ii(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = ai[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var ai = {
	data: oi,
	props: fi,
	emits: fi,
	methods: di,
	computed: di,
	beforeCreate: li,
	created: li,
	beforeMount: li,
	mounted: li,
	beforeUpdate: li,
	updated: li,
	beforeDestroy: li,
	beforeUnmount: li,
	destroyed: li,
	unmounted: li,
	activated: li,
	deactivated: li,
	errorCaptured: li,
	serverPrefetch: li,
	components: di,
	directives: di,
	watch: pi,
	provide: oi,
	inject: si
};
function oi(e, t) {
	return t ? e ? function() {
		return l(_(e) ? e.call(this, this) : e, _(t) ? t.call(this, this) : t);
	} : t : e;
}
function si(e, t) {
	return di(ci(e), ci(t));
}
function ci(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function li(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function di(e, t) {
	return e ? l(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function fi(e, t) {
	return e ? p(e) && p(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : l(/* @__PURE__ */ Object.create(null), Zr(e), Zr(t ?? {})) : t;
}
function pi(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = l(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = li(e[r], t[r]);
	return n;
}
function mi() {
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
var hi = 0;
function gi(e, t) {
	return function(n, r = null) {
		_(n) || (n = l({}, n)), r != null && !b(r) && (r = null);
		let i = mi(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: hi++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Za,
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
					let u = c._ceVNode || H(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, Ja(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (vn(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = _i;
				_i = c;
				try {
					return e();
				} finally {
					_i = t;
				}
			}
		};
		return c;
	};
}
var _i = null, vi = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${E(t)}Modifiers`] || e[`${ae(t)}Modifiers`];
function yi(e, t, ...n) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || r, a = n, o = t.startsWith("update:"), s = o && vi(i, t.slice(7));
	s && (s.trim && (a = n.map((e) => v(e) ? e.trim() : e)), s.number && (a = n.map(ue)));
	let c, l = i[c = se(t)] || i[c = se(E(t))];
	!l && o && (l = i[c = se(ae(t))]), l && vn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, vn(u, e, 6, a);
	}
}
var bi = /* @__PURE__ */ new WeakMap();
function xi(e, t, n = !1) {
	let r = n ? bi : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!_(e)) {
		let r = (e) => {
			let n = xi(e, t, !0);
			n && (s = !0, l(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (b(e) && r.set(e, null), null) : (p(a) ? a.forEach((e) => o[e] = null) : l(o, a), b(e) && r.set(e, o), o);
}
function Si(e, t) {
	return !e || !s(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), f(e, t[0].toLowerCase() + t.slice(1)) || f(e, ae(t)) || f(e, t));
}
function Ci(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = zn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = wa(u.call(t, e, d, f, m, p, h)), y = s;
		} else {
			let e = t;
			v = wa(e.length > 1 ? e(f, {
				attrs: s,
				slots: o,
				emit: l
			}) : e(f, null)), y = t.props ? s : wi(s);
		}
	} catch (t) {
		ua.length = 0, yn(t, e, 1), v = H(ca);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(c) && (y = Ti(y, a)), b = Sa(b, y, !1, !0));
	}
	return n.dirs && (b = Sa(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && fr(b, n.transition), v = b, zn(_), v;
}
var wi = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || s(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, Ti = (e, t) => {
	let n = {};
	for (let r in e) (!c(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function Ei(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Di(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (Oi(o, r, n) && !Si(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? Di(r, o, l) : !0 : !!o;
	return !1;
}
function Di(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (Oi(t, e, a) && !Si(n, a)) return !0;
	}
	return !1;
}
function Oi(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && b(r) && b(i) ? !Se(r, i) : r !== i;
}
function ki({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var Ai = {}, ji = () => Object.create(Ai), Mi = (e) => Object.getPrototypeOf(e) === Ai;
function Ni(e, t, n, r = !1) {
	let i = {}, a = ji();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), Fi(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ Ht(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function Pi(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ j(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Si(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (f(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = E(o);
					i[t] = Ii(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		Fi(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !f(t, a) && ((r = ae(a)) === a || !f(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Ii(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !f(t, e)) && (delete a[e], l = !0);
	}
	l && ot(e.attrs, "set", "");
}
function Fi(e, t, n, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (t) for (let r in t) {
		if (te(r)) continue;
		let l = t[r], u;
		a && f(a, u = E(r)) ? !o || !o.includes(u) ? n[u] = l : (c ||= {})[u] = l : Si(e.emitsOptions, r) || (!(r in i) || l !== i[r]) && (i[r] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ j(n), i = c || r;
		for (let r = 0; r < o.length; r++) {
			let s = o[r];
			n[s] = Ii(a, t, s, i[s], e, !f(i, s));
		}
	}
	return s;
}
function Ii(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = f(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && _(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = Ia(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === ae(n)) && (r = !0));
	}
	return r;
}
var Li = /* @__PURE__ */ new WeakMap();
function Ri(e, t, n = !1) {
	let a = n ? Li : t.propsCache, o = a.get(e);
	if (o) return o;
	let s = e.props, c = {}, u = [], d = !1;
	if (!_(e)) {
		let r = (e) => {
			d = !0;
			let [n, r] = Ri(e, t, !0);
			l(c, n), r && u.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!s && !d) return b(e) && a.set(e, i), i;
	if (p(s)) for (let e = 0; e < s.length; e++) {
		let t = E(s[e]);
		zi(t) && (c[t] = r);
	}
	else if (s) for (let e in s) {
		let t = E(e);
		if (zi(t)) {
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
function zi(e) {
	return e[0] !== "$" && !te(e);
}
var Bi = (e) => e === "_" || e === "_ctx" || e === "$stable", Vi = (e) => p(e) ? e.map(wa) : [wa(e)], Hi = (e, t, n) => {
	if (t._n) return t;
	let r = P((...e) => Vi(t(...e)), n);
	return r._c = !1, r;
}, Ui = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Bi(n)) continue;
		let i = e[n];
		if (_(i)) t[n] = Hi(n, i, r);
		else if (i != null) {
			let e = Vi(i);
			t[n] = () => e;
		}
	}
}, Wi = (e, t) => {
	let n = Vi(t);
	e.slots.default = () => n;
}, Gi = (e, t, n) => {
	for (let r in t) (n || !Bi(r)) && (e[r] = t[r]);
}, Ki = (e, t, n) => {
	let r = e.slots = ji();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Gi(r, t, n), n && le(r, "_", e, !0)) : Ui(t, r);
	} else t && Wi(e, t);
}, qi = (e, t, n) => {
	let { vnode: i, slots: a } = e, o = !0, s = r;
	if (i.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? o = !1 : Gi(a, t, n) : (o = !t.$stable, Ui(t, a)), s = t;
	} else t && (Wi(e, t), s = { default: 1 });
	if (o) for (let e in a) !Bi(e) && s[e] == null && delete a[e];
}, Ji = oa;
function Yi(e) {
	return Xi(e);
}
function Xi(e, t) {
	let n = fe();
	n.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = a, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !_a(e, t) && (r = be(e), ge(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case sa:
				y(e, t, n, r);
				break;
			case ca:
				b(e, t, n, r);
				break;
			case la:
				e ?? x(t, n, r, o);
				break;
			case L:
				ae(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? oe(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, Ce);
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
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && ne(e.children, d, null, r, i, Zi(e, a), s, u), _ && Vn(e, null, r, "created"), T(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !te(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && Oa(f, r, e);
		}
		_ && Vn(e, null, r, "beforeMount");
		let v = $i(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Ji(() => {
			try {
				f && Oa(f, r, e), v && g.enter(d), _ && Vn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, T = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || aa(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				T(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, ne = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? Ta(e[l]) : wa(e[l]), t, n, r, i, a, o, s);
	}, re = (e, t, n, i, a, o, s) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || r, h = t.props || r, g;
		if (n && Qi(n, !1), (g = h.onVnodeBeforeUpdate) && Oa(g, n, t, e), f && Vn(t, e, n, "beforeUpdate"), n && Qi(n, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? E(e.dynamicChildren, d, l, n, i, Zi(t, a), o) : s || de(e, t, l, null, n, i, Zi(t, a), o, !1), u > 0) {
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
		((g = h.onVnodeUpdated) || f) && Ji(() => {
			g && Oa(g, n, t, e), f && Vn(t, e, n, "updated");
		}, i);
	}, E = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === L || !_a(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
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
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), ne(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (E(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && ea(e, t, !0)) : de(e, t, n, f, i, a, s, c, l);
	}, oe = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : se(t, n, r, i, a, o, c) : D(e, t, c);
	}, se = (e, t, n, r, i, a, o) => {
		let s = e.component = ja(e, r, i);
		if (br(e) && (s.ctx.renderer = Ce), Ba(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, le, o), !e.el) {
				let r = s.subTree = H(ca);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else le(s, e, t, n, i, a, o);
	}, D = (e, t, n) => {
		let r = t.component = e.component;
		if (Ei(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			ue(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, le = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = na(e);
					if (n) {
						t && (t.el = c.el, ue(e, t, o)), n.asyncDep.then(() => {
							Ji(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Qi(e, !1), t ? (t.el = c.el, ue(e, t, o)) : t = c, n && ce(n), (d = t.props && t.props.onVnodeBeforeUpdate) && Oa(d, s, t, c), Qi(e, !0);
				let f = Ci(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), be(p), e, i, a), t.el = f.el, u === null && ki(e, f.el), r && Ji(r, i), (d = t.props && t.props.onVnodeUpdated) && Ji(() => Oa(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = yr(t);
				if (Qi(e, !1), l && ce(l), !m && (o = c && c.onVnodeBeforeMount) && Oa(o, d, t), Qi(e, !0), s && k) {
					let t = () => {
						e.subTree = Ci(e), k(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Ci(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Ji(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Ji(() => Oa(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && yr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Ji(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ne(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => An(u), Qi(e, !0), l();
	}, ue = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Pi(e, t.props, r, n), qi(e, t.children, n), Je(), Nn(e), Ye();
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
			let r = t[p] = l ? Ta(t[p]) : wa(t[p]);
			v(e[p], r, n, null, a, o, s, c, l);
		}
		u > d ? ye(e, a, o, !0, !1, f) : ne(t, n, r, a, o, s, c, l, f);
	}, me = (e, t, n, r, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], i = t[u] = l ? Ta(t[u]) : wa(t[u]);
			if (_a(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], i = t[p] = l ? Ta(t[p]) : wa(t[p]);
			if (_a(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, i = e < d ? t[e].el : r;
				for (; u <= p;) v(null, t[u] = l ? Ta(t[u]) : wa(t[u]), n, i, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) ge(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? Ta(t[u]) : wa(t[u]);
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
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && _a(r, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? ge(r, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(r, t[i], n, null, a, o, s, c, l), y++);
			}
			let w = x ? ta(C) : i;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, i = t[e], f = t[e + 1], p = e + 1 < d ? f.el || ia(f) : r;
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
		if (c === L) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) he(u[e], t, n, r);
			o(e.anchor, t, n);
			return;
		}
		if (c === la) {
			S(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) if (r === 0) l.persisted && !a[dr] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), Ji(() => l.enter(a), i));
		else {
			let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? s(a) : o(a, t, n);
			}, d = () => {
				let e = a._isLeaving || !!a[dr];
				a._isLeaving && a[dr](!0), l.persisted && !e ? u() : r(a, () => {
					u(), c && c();
				});
			};
			i ? i(a, u, d) : d();
		}
		else o(a, t, n);
	}, ge = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (Je(), _r(s, null, n, e, !0), Ye()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !yr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Oa(_, t, e), u & 6) ve(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Vn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Ce, r) : l && !l.hasOnce && (a !== L || d > 0 && d & 64) ? ye(l, t, n, !1, !0) : (a === L && d & 384 || !i && u & 16) && ye(c, t, n), r && _e(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Ji(() => {
			_ && Oa(_, t, e), h && Vn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, _e = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === L) {
			O(n, r);
			return;
		}
		if (t === la) {
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
		ra(c), ra(l), r && ce(r), i.stop(), a && (a.flags |= 8, ge(o, e, t, n)), s && Ji(s, t), Ji(() => {
			e.isUnmounted = !0;
		}, t);
	}, ye = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) ge(e[o], t, n, r, i);
	}, be = (e) => {
		if (e.shapeFlag & 6) return be(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Qn];
		return n ? h(n) : t;
	}, xe = !1, Se = (e, t, n) => {
		let r;
		e == null ? t._vnode && (ge(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, xe ||= (xe = !0, Nn(r), Pn(), !1);
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
		createApp: gi(Se, we)
	};
}
function Zi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Qi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function $i(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ea(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (p(r) && p(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Ta(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && ea(t, a)), a.type === sa && (a.patchFlag === -1 && (a = i[e] = Ta(a)), a.el = t.el), a.type === ca && !a.el && (a.el = t.el);
	}
}
function ta(e) {
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
function na(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : na(t);
}
function ra(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function ia(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? ia(t.subTree) : null;
}
var aa = (e) => e.__isSuspense;
function oa(e, t) {
	t && t.pendingBranch ? p(e) ? t.effects.push(...e) : t.effects.push(e) : Mn(e);
}
var L = /* @__PURE__ */ Symbol.for("v-fgt"), sa = /* @__PURE__ */ Symbol.for("v-txt"), ca = /* @__PURE__ */ Symbol.for("v-cmt"), la = /* @__PURE__ */ Symbol.for("v-stc"), ua = [], da = null;
function R(e = !1) {
	ua.push(da = e ? null : []);
}
function fa() {
	ua.pop(), da = ua[ua.length - 1] || null;
}
var pa = 1;
function ma(e, t = !1) {
	pa += e, e < 0 && da && t && (da.hasOnce = !0);
}
function ha(e) {
	return e.dynamicChildren = pa > 0 ? da || i : null, fa(), pa > 0 && da && da.push(e), e;
}
function z(e, t, n, r, i, a) {
	return ha(V(e, t, n, r, i, a, !0));
}
function B(e, t, n, r, i) {
	return ha(H(e, t, n, r, i, !0));
}
function ga(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function _a(e, t) {
	return e.type === t.type && e.key === t.key;
}
var va = ({ key: e }) => e ?? null, ya = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : v(e) || /* @__PURE__ */ Qt(e) || _(e) ? {
	i: Ln,
	r: e,
	k: t,
	f: !!n
} : e);
function V(e, t = null, n = null, r = 0, i = null, a = e === L ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && va(t),
		ref: t && ya(t),
		scopeId: Rn,
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
		ctx: Ln
	};
	return s ? (Ea(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= v(n) ? 8 : 16), pa > 0 && !o && da && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && da.push(c), c;
}
var H = ba;
function ba(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === Rr) && (e = ca), ga(e)) {
		let r = Sa(e, t, !0);
		return n && Ea(r, n), pa > 0 && !a && da && (r.shapeFlag & 6 ? da[da.indexOf(e)] = r : da.push(r)), r.patchFlag = -2, r;
	}
	if (Xa(e) && (e = e.__vccOpts), t) {
		t = xa(t);
		let { class: e, style: n } = t;
		e && !v(e) && (t.class = O(e)), b(n) && (/* @__PURE__ */ Jt(n) && !p(n) && (n = l({}, n)), t.style = pe(n));
	}
	let o = v(e) ? 1 : aa(e) ? 128 : $n(e) ? 64 : b(e) ? 4 : _(e) ? 2 : 0;
	return V(e, t, n, r, i, o, a, !0);
}
function xa(e) {
	return e ? /* @__PURE__ */ Jt(e) || Mi(e) ? l({}, e) : e : null;
}
function Sa(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Da(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && va(l),
		ref: t && t.ref ? n && a ? p(a) ? a.concat(ya(t)) : [a, ya(t)] : ya(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== L ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Sa(e.ssContent),
		ssFallback: e.ssFallback && Sa(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && fr(u, c.clone(u)), u;
}
function U(e = " ", t = 0) {
	return H(sa, null, e, t);
}
function Ca(e, t) {
	let n = H(la, null, e);
	return n.staticCount = t, n;
}
function W(e = "", t = !1) {
	return t ? (R(), B(ca, null, e)) : H(ca, null, e);
}
function wa(e) {
	return e == null || typeof e == "boolean" ? H(ca) : p(e) ? H(L, null, e.slice()) : ga(e) ? Ta(e) : H(sa, null, String(e));
}
function Ta(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Sa(e);
}
function Ea(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (p(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), Ea(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !Mi(t) ? t._ctx = Ln : r === 3 && Ln && (Ln.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else _(t) ? (t = {
		default: t,
		_ctx: Ln
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [U(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function Da(...e) {
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
function Oa(e, t, n, r = null) {
	vn(e, t, 7, [n, r]);
}
var ka = mi(), Aa = 0;
function ja(e, t, n) {
	let i = e.type, a = (t ? t.appContext : e.appContext) || ka, o = {
		uid: Aa++,
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
		propsOptions: Ri(i, a),
		emitsOptions: xi(i, a),
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
	return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = yi.bind(null, o), e.ce && e.ce(o), o;
}
var Ma = null, Na = () => Ma || Ln, Pa, Fa;
{
	let e = fe(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Pa = t("__VUE_INSTANCE_SETTERS__", (e) => Ma = e), Fa = t("__VUE_SSR_SETTERS__", (e) => za = e);
}
var Ia = (e) => {
	let t = Ma;
	return Pa(e), e.scope.on(), () => {
		e.scope.off(), Pa(t);
	};
}, La = () => {
	Ma && Ma.scope.off(), Pa(null);
};
function Ra(e) {
	return e.vnode.shapeFlag & 4;
}
var za = !1;
function Ba(e, t = !1, n = !1) {
	t && Fa(t);
	let { props: r, children: i } = e.vnode, a = Ra(e);
	Ni(e, r, a, t), Ki(e, i, n || t);
	let o = a ? Va(e, t) : void 0;
	return t && Fa(!1), o;
}
function Va(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Jr);
	let { setup: r } = n;
	if (r) {
		Je();
		let n = e.setupContext = r.length > 1 ? qa(e) : null, i = Ia(e), a = _n(r, e, 0, [e.props, n]), o = x(a);
		if (Ye(), i(), (o || e.sp) && !yr(e) && mr(e), o) {
			if (a.then(La, La), t) return a.then((n) => {
				Ha(e, n, t);
			}).catch((t) => {
				yn(t, e, 0);
			});
			e.asyncDep = a;
		} else Ha(e, a, t);
	} else Ga(e, t);
}
function Ha(e, t, n) {
	_(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : b(t) && (e.setupState = nn(t)), Ga(e, n);
}
var Ua, Wa;
function Ga(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && Ua && !r.render) {
			let t = r.template || ri(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r;
				r.render = Ua(t, l(l({
					isCustomElement: n,
					delimiters: a
				}, i), o));
			}
		}
		e.render = r.render || a, Wa && Wa(e);
	}
	{
		let t = Ia(e);
		Je();
		try {
			$r(e);
		} finally {
			Ye(), t();
		}
	}
}
var Ka = { get(e, t) {
	return at(e, "get", ""), e[t];
} };
function qa(e) {
	return {
		attrs: new Proxy(e.attrs, Ka),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Ja(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(nn(Yt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Kr) return Kr[n](e);
		},
		has(e, t) {
			return t in e || t in Kr;
		}
	}) : e.proxy;
}
function Ya(e, t = !0) {
	return _(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Xa(e) {
	return _(e) && "__vccOpts" in e;
}
var G = (e, t) => /* @__PURE__ */ un(e, t, za), Za = "3.5.38", Qa = void 0, $a = typeof window < "u" && window.trustedTypes;
if ($a) try {
	Qa = /* @__PURE__ */ $a.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var eo = Qa ? (e) => Qa.createHTML(e) : (e) => e, to = "http://www.w3.org/2000/svg", no = "http://www.w3.org/1998/Math/MathML", ro = typeof document < "u" ? document : null, io = ro && /* @__PURE__ */ ro.createElement("template"), ao = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? ro.createElementNS(to, e) : t === "mathml" ? ro.createElementNS(no, e) : n ? ro.createElement(e, { is: n }) : ro.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => ro.createTextNode(e),
	createComment: (e) => ro.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => ro.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			io.innerHTML = eo(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = io.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, oo = /* @__PURE__ */ Symbol("_vtc");
function so(e, t, n) {
	let r = e[oo];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var co = /* @__PURE__ */ Symbol("_vod"), lo = /* @__PURE__ */ Symbol("_vsh"), uo = /* @__PURE__ */ Symbol(""), fo = /(?:^|;)\s*display\s*:/;
function po(e, t, n) {
	let r = e.style, i = v(n), a = !1;
	if (n && !i) {
		if (t) if (v(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? ho(r, t, "");
		}
		else for (let e in t) n[e] ?? ho(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? ho(r, i, "") : yo(e, i, !v(t) && t ? t[i] : void 0, o) || ho(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[uo];
			e && (n += ";" + e), r.cssText = n, a = fo.test(n);
		}
	} else t && e.removeAttribute("style");
	co in e && (e[co] = a ? r.display : "", e[lo] && (r.display = "none"));
}
var mo = /\s*!important$/;
function ho(e, t, n) {
	if (p(n)) n.forEach((n) => ho(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = vo(e, t);
		mo.test(n) ? e.setProperty(ae(r), n.replace(mo, ""), "important") : e[r] = n;
	}
}
var go = [
	"Webkit",
	"Moz",
	"ms"
], _o = {};
function vo(e, t) {
	let n = _o[t];
	if (n) return n;
	let r = E(t);
	if (r !== "filter" && r in e) return _o[t] = r;
	r = oe(r);
	for (let n = 0; n < go.length; n++) {
		let i = go[n] + r;
		if (i in e) return _o[t] = i;
	}
	return t;
}
function yo(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && v(r) && n === r;
}
var bo = "http://www.w3.org/1999/xlink";
function xo(e, t, n, r, i, a = ye(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(bo, t.slice(6, t.length)) : e.setAttributeNS(bo, t, n) : n == null || a && !be(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : y(n) ? String(n) : n);
}
function So(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? eo(n) : n);
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
function Co(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function wo(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var To = /* @__PURE__ */ Symbol("_vei");
function Eo(e, t, n, r, i = null) {
	let a = e[To] || (e[To] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Oo(t);
		r ? Co(e, n, a[t] = Mo(r, i), s) : o && (wo(e, n, o, s), a[t] = void 0);
	}
}
var Do = /(?:Once|Passive|Capture)$/;
function Oo(e) {
	let t;
	if (Do.test(e)) {
		t = {};
		let n;
		for (; n = e.match(Do);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : ae(e.slice(2)), t];
}
var ko = 0, Ao = /* @__PURE__ */ Promise.resolve(), jo = () => ko ||= (Ao.then(() => ko = 0), Date.now());
function Mo(e, t) {
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
				e && vn(e, t, 5, a);
			}
		} else vn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = jo(), n;
}
var No = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Po = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? so(e, r, o) : t === "style" ? po(e, n, r) : s(t) ? c(t) || Eo(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Fo(e, t, r, o)) ? (So(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && xo(e, t, r, o, a, t !== "value")) : e._isVueCE && (Io(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !v(r))) ? So(e, E(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), xo(e, t, r, o));
};
function Fo(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && No(t) && _(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return No(t) && v(n) ? !1 : t in e;
}
function Io(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = E(t);
	return Array.isArray(n) ? n.some((e) => E(e) === r) : Object.keys(n).some((e) => E(e) === r);
}
var Lo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return p(t) ? (e) => ce(t, e) : t;
};
function Ro(e) {
	e.target.composing = !0;
}
function zo(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var Bo = /* @__PURE__ */ Symbol("_assign");
function Vo(e, t, n) {
	return t && (e = e.trim()), n && (e = ue(e)), e;
}
var Ho = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[Bo] = Lo(i);
		let a = r || i.props && i.props.type === "number";
		Co(e, t ? "change" : "input", (t) => {
			t.target.composing || e[Bo](Vo(e.value, n, a));
		}), (n || a) && Co(e, "change", () => {
			e.value = Vo(e.value, n, a);
		}), t || (Co(e, "compositionstart", Ro), Co(e, "compositionend", zo), Co(e, "change", zo));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[Bo] = Lo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? ue(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, Uo = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = h(t);
		Co(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? ue(Go(e)) : Go(e));
			e[Bo](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, On(() => {
				e._assigning = !1;
			});
		}), e[Bo] = Lo(r);
	},
	mounted(e, { value: t }) {
		Wo(e, t);
	},
	beforeUpdate(e, t, n) {
		e[Bo] = Lo(n);
	},
	updated(e, { value: t }) {
		e._assigning || Wo(e, t);
	}
};
function Wo(e, t) {
	let n = e.multiple, r = p(t);
	if (!(n && !r && !h(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = Go(a);
			if (n) if (r) {
				let e = typeof o;
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = Ce(t, o) > -1;
			} else a.selected = t.has(o);
			else if (Se(Go(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function Go(e) {
	return "_value" in e ? e._value : e.value;
}
var Ko = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], qo = {
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
	exact: (e, t) => Ko.some((n) => e[`${n}Key`] && !t.includes(n))
}, Jo = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = qo[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, Yo = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, Xo = (e, t) => {
	let n = e._withKeys ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = ae(n.key);
		if (t.some((e) => e === r || Yo[e] === r)) return e(n);
	}));
}, Zo = /* @__PURE__ */ l({ patchProp: Po }, ao), Qo;
function $o() {
	return Qo ||= Yi(Zo);
}
var es = ((...e) => {
	let t = $o().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = ns(e);
		if (!r) return;
		let i = t._component;
		!_(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, ts(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function ts(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function ns(e) {
	return v(e) ? document.querySelector(e) : e;
}
//#endregion
//#region src/functions/species-builder/config-keys.ts
function rs(e) {
	return e.trim().toLocaleLowerCase().replaceAll(/[^\da-z]+/g, "-").replaceAll(/^-+|-+$/g, "");
}
//#endregion
//#region src/functions/species-builder/editor/field-values.ts
function is(e) {
	let t = e.split(/\r?\n/).map((e) => e.trim()).filter((e) => e.length > 0);
	return t.length > 0 ? t : void 0;
}
function as(e) {
	let t = ps(e).flatMap(([e, t]) => t ? [[e, t]] : []);
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function os(e) {
	let t = ps(e).flatMap(([e, t]) => {
		let n = fs(t);
		return n === void 0 ? [] : [[e, n]];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function ss(e) {
	let t = ps(e).flatMap(([e, t]) => {
		let n = t.split(",").map((e) => e.trim()).filter((e) => e.length > 0);
		return n.length > 0 ? [[e, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function cs(e) {
	let t = e.trim();
	return t.length > 0 ? t : void 0;
}
function ls(e) {
	return e.length > 0 ? e : void 0;
}
function us(e) {
	let t = cs(e);
	return t ? { formula: t } : void 0;
}
function ds(e) {
	let t = e.map((e) => {
		let t = { name: e.name }, n = cs(e.journalUuid ?? "");
		return n && (t.journalUuid = n), t;
	});
	return t.length > 0 ? { rows: t } : void 0;
}
function fs(e) {
	let t = e.trim();
	if (!t) return;
	let n = Number(t);
	return Number.isFinite(n) ? n : void 0;
}
function ps(e) {
	return e.split(/\r?\n/).flatMap((e) => {
		let t = e.indexOf(":");
		if (t < 0) return [];
		let n = e.slice(0, t).trim(), r = e.slice(t + 1).trim();
		return n ? [[n, r]] : [];
	});
}
//#endregion
//#region src/functions/species-builder/editor/draft.ts
function ms(e, t) {
	return e === "careerReplacements" ? ss(t) : e === "randomTalents" ? os(t) : as(t);
}
function hs(e, t) {
	return e === "randomTalents" ? os(t) : as(t);
}
function K(e, t, n) {
	let r = { ...e };
	return n === void 0 ? delete r[t] : r[t] = n, r;
}
function gs(e) {
	let t = /* @__PURE__ */ new Set();
	return e.map((e) => {
		let n = Cs(e);
		return n.key = vs(e.key, e.name, "new-species", t), e.subspecies && (n.subspecies = _s(e.subspecies)), n;
	});
}
function _s(e) {
	let t = /* @__PURE__ */ new Set();
	return e.map((e) => ({
		...Cs(e),
		key: vs(e.key, e.name, "new-subspecies", t)
	}));
}
function vs(e, t, n, r) {
	let i = rs(e);
	if (i) return r.add(i), i;
	let a = ys(rs(t) || n, r);
	return r.add(a), a;
}
function ys(e, t) {
	if (!t.has(e)) return e;
	let n = 2, r = `${e}-${n}`;
	for (; t.has(r);) n += 1, r = `${e}-${n}`;
	return r;
}
function bs(e) {
	return JSON.stringify(xs(e));
}
function xs(e) {
	return Array.isArray(e) ? e.map(xs) : e && typeof e == "object" ? Object.fromEntries(Object.entries(e).sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [e, xs(t)])) : e;
}
function Ss(e) {
	return JSON.stringify(e, null, 2);
}
function Cs(e) {
	return JSON.parse(JSON.stringify(e));
}
function ws(e) {
	return e instanceof Error ? e.message : "Unknown Species Builder error.";
}
//#endregion
//#region node_modules/pinia/dist/pinia.mjs
var Ts = typeof window < "u", Es, Ds = (e) => Es = e, Os = Symbol();
function ks(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var As;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(As ||= {});
var js = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Ms(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function Ns(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		Rs(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function Ps(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function Fs(e) {
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
var Is = typeof navigator == "object" ? navigator : { userAgent: "" }, Ls = /Macintosh/.test(Is.userAgent) && /AppleWebKit/.test(Is.userAgent) && !/Safari/.test(Is.userAgent), Rs = Ts ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Ls ? zs : "msSaveOrOpenBlob" in Is ? Bs : Vs : () => {};
function zs(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? Fs(r) : Ps(r.href) ? Ns(e, t, n) : (r.target = "_blank", Fs(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		Fs(r);
	}, 0));
}
function Bs(e, t = "download", n) {
	if (typeof e == "string") if (Ps(e)) Ns(e, t, n);
	else {
		let t = document.createElement("a");
		t.href = e, t.target = "_blank", setTimeout(function() {
			Fs(t);
		});
	}
	else navigator.msSaveOrOpenBlob(Ms(e, n), t);
}
function Vs(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return Ns(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(js.HTMLElement)) || "safari" in js, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || Ls) && typeof FileReader < "u") {
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
var { assign: Hs } = Object;
function Us() {
	let e = ke(!0), t = e.run(() => /* @__PURE__ */ M({})), n = [], r = [], i = Yt({
		install(e) {
			Ds(i), i._a = e, e.provide(Os, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var Ws = () => {};
function Gs(e, t, n, r = Ws) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && Ae() && je(i), i;
}
function Ks(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var qs = (e) => e(), Js = Symbol(), Ys = Symbol();
function Xs(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		ks(i) && ks(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ Qt(r) && !/* @__PURE__ */ Gt(r) ? e[n] = Xs(i, r) : e[n] = r;
	}
	return e;
}
var Zs = Symbol();
function Qs(e) {
	return !ks(e) || !Object.prototype.hasOwnProperty.call(e, Zs);
}
var { assign: $s } = Object;
function ec(e) {
	return !!(/* @__PURE__ */ Qt(e) && e.effect);
}
function tc(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), $s(/* @__PURE__ */ rn(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Yt(G(() => {
			Ds(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = nc(e, l, t, n, r, !0), c;
}
function nc(e, t, n = {}, r, i, a) {
	let o, s = $s({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = r.state.value[e];
	!a && !p && (r.state.value[e] = {});
	let m;
	function h(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: As.patchFunction,
			storeId: e,
			events: void 0
		}) : (Xs(r.state.value[e], t), n = {
			type: As.patchObject,
			payload: t,
			storeId: e,
			events: void 0
		});
		let i = m = Symbol();
		On().then(() => {
			m === i && (l = !0);
		}), u = !0, Ks(d, n, r.state.value[e]);
	}
	let g = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			$s(e, t);
		});
	} : Ws;
	function _() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let v = (t, n = "") => {
		if (Js in t) return t[Ys] = n, t;
		let i = function() {
			Ds(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			Ks(f, {
				args: n,
				name: i[Ys],
				store: y,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : y, n);
			} catch (e) {
				throw Ks(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (Ks(a, e), e)).catch((e) => (Ks(o, e), Promise.reject(e))) : (Ks(a, l), l);
		};
		return i[Js] = !0, i[Ys] = n, i;
	}, y = /* @__PURE__ */ Vt({
		_p: r,
		$id: e,
		$onAction: Gs.bind(null, f),
		$patch: h,
		$reset: g,
		$subscribe(t, n = {}) {
			let i = Gs(d, t, n.detached, () => a()), a = o.run(() => qn(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: As.direct,
					events: void 0
				}, r);
			}, $s({}, c, n)));
			return i;
		},
		$dispose: _
	});
	r._s.set(e, y);
	let b = (r._a && r._a.runWithContext || qs)(() => r._e.run(() => (o = ke()).run(() => t({ action: v }))));
	for (let t in b) {
		let n = b[t];
		/* @__PURE__ */ Qt(n) && !ec(n) || /* @__PURE__ */ Gt(n) ? a || (p && Qs(n) && (/* @__PURE__ */ Qt(n) ? n.value = p[t] : Xs(n, p[t])), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = v(n, t), s.actions[t] = n);
	}
	return $s(y, b), $s(/* @__PURE__ */ j(y), b), Object.defineProperty(y, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			h((t) => {
				$s(t, e);
			});
		}
	}), r._p.forEach((e) => {
		$s(y, o.run(() => e({
			store: y,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), p && a && n.hydrate && n.hydrate(y.$state, p), l = !0, u = !0, y;
}
function rc(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Wn();
		return n ||= o ? Un(Os, null) : null, n && Ds(n), n = Es, n._s.has(e) || (i ? nc(e, t, r, n) : tc(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
function ic(e) {
	let t = /* @__PURE__ */ j(e), n = {};
	for (let r in t) {
		let i = t[r];
		i.effect ? n[r] = G({
			get: () => e[r],
			set(t) {
				e[r] = t;
			}
		}) : (/* @__PURE__ */ Qt(i) || /* @__PURE__ */ Gt(i)) && (n[r] = /* @__PURE__ */ sn(e, r));
	}
	return n;
}
//#endregion
//#region src/shared/assign-if-present.ts
function q(e, t, n) {
	n !== void 0 && (e[t] = n);
}
//#endregion
//#region src/functions/species-builder/item-reference-names.ts
function ac(e) {
	return sc(e.name, e.specification);
}
function oc(e) {
	let t = e.name.trim();
	if (!e.item) return t;
	if (!t) return ac(e.item);
	if (!lc(t)) {
		if (e.item.specification) return sc(t, e.item.specification);
		if (lc(e.item.name) && uc(t) === uc(e.item.name)) return e.item.name.trim();
	}
	return t;
}
function sc(e, t) {
	let n = e.trim(), r = t?.trim();
	return !n || !r || cc(n) ? n : `${n} (${r})`;
}
function cc(e) {
	return /\(([^()]*)\)\s*$/.exec(e.trim())?.[1]?.trim() ?? "";
}
function lc(e) {
	return /\([^()]*\)\s*$/.test(e.trim());
}
function uc(e) {
	return e.split("(")[0]?.trim().toLocaleLowerCase() ?? "";
}
//#endregion
//#region src/functions/species-builder/replacement-row-records.ts
function dc(e) {
	if (!e) return;
	let t = e.flatMap((e) => {
		let t = oc(e.rolled), n = oc(e.replacement);
		return t && n ? [[t, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function fc(e) {
	if (!e) return;
	let t = e.flatMap((e) => {
		let t = oc(e.rolled), n = e.replacements.map(oc).filter((e) => e.length > 0);
		return t && n.length > 0 ? [[t, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
//#endregion
//#region src/functions/species-builder/linked-grant-records.ts
function pc(e) {
	if (!e || e.length === 0) return;
	let t = e.map(oc).filter((e) => e.length > 0);
	return t.length > 0 ? t : void 0;
}
function mc(e) {
	if (!e || e.length === 0) return;
	let t = e.flatMap((e) => {
		let t = e.choices.map(oc).filter((e) => e.length > 0);
		return t.length > 0 ? [t.join(", ")] : [];
	});
	return t.length > 0 ? t : void 0;
}
//#endregion
//#region src/functions/species-builder/subspecies-list-fields.ts
function hc(e) {
	return pc(e.linkedSkills) ?? e.skills;
}
function gc(e, t) {
	return wc(hc(e), t.skillsAdded, t.skillsRemoved);
}
function _c(e, t) {
	return gc(e, t) ?? hc(e) ?? [];
}
function vc(e) {
	return mc(e.linkedTalents) ?? e.talents;
}
function yc(e, t) {
	return wc(vc(e), t.talentsAdded, t.talentsRemoved);
}
function bc(e, t) {
	return Cc(pc(e.linkedTraits) ?? e.traits, t);
}
function xc(e, t, n = {}) {
	let r = n.subspecies ?? n.parent, i = wc(bc(e), t.traitsAdded, t.traitsRemoved);
	return i ? Cc(i, r) : n.subspecies ? Cc(bc(e), n.subspecies) : void 0;
}
function Sc(e, t, n = {}) {
	return xc(e, t, n) ?? bc(e, n.parent) ?? [];
}
function Cc(e, t) {
	if (!t) return e;
	let n = e ? [...e] : [];
	return n.includes(t) || n.push(t), n;
}
function wc(e, t, n) {
	if (!t && !n) return;
	let r = new Set(n ?? []), i = (e ?? []).filter((e) => !r.has(e));
	for (let e of t ?? []) i.includes(e) || i.push(e);
	return i;
}
//#endregion
//#region src/types/wfrp4e/characteristics.ts
var J = {
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
}, Tc = {
	[J.Agility]: "Agility",
	[J.BallisticSkill]: "Ballistic Skill",
	[J.Dexterity]: "Dexterity",
	[J.Fellowship]: "Fellowship",
	[J.Initiative]: "Initiative",
	[J.Intelligence]: "Intelligence",
	[J.Strength]: "Strength",
	[J.Toughness]: "Toughness",
	[J.WeaponSkill]: "Weapon Skill",
	[J.Willpower]: "Willpower"
}, Ec = {
	agility: J.Agility,
	"ballistic skill": J.BallisticSkill,
	dexterity: J.Dexterity,
	fellowship: J.Fellowship,
	initiative: J.Initiative,
	intelligence: J.Intelligence,
	strength: J.Strength,
	toughness: J.Toughness,
	"weapon skill": J.WeaponSkill,
	willpower: J.Willpower
};
function Dc(e) {
	return e in Tc;
}
//#endregion
//#region src/functions/species-builder/wound-formula/compiler.ts
function Oc(e) {
	let t = [], n = /* @__PURE__ */ new Set(), r = e.trim();
	return r = r.replaceAll(/@([A-Za-z][\dA-Za-z]*)/g, (e, t) => {
		let r = kc(t);
		return n.add(r), r;
	}), r = r.replaceAll(/{([^{}]+)}/g, (e, n) => Ac(t, n, "total")), r = r.replaceAll(/\[([^[\]]+)]/g, (e, n) => Ac(t, n, "bonus")), {
		expression: r,
		references: t,
		usedKeywords: n
	};
}
function kc(e) {
	if ((/* @__PURE__ */ "ablaze.advantage.age.bleeding.blinded.broken.corruption.deafened.entangled.fate.fatigued.fortune.height.poisoned.rank.resilience.resolve.sb.sbMultiplier.scale.sin.size.status.stunned.tb.tbMultiplier.weight.wpb.wpbMultiplier.xp".split(".")).includes(e)) return e;
	throw Error(`Unknown wound formula keyword: @${e}`);
}
function Ac(e, t, n) {
	let r = jc(t, n, e), i = e.find((e) => Mc(e, r));
	return i ? i.variableName : (e.push(r), r.variableName);
}
function jc(e, t, n) {
	let [r, i] = Nc(e), a = Pc(r), o = Rc(Lc(r, i, t), n);
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
	return i && (s.characteristicOverride = Fc(i)), s;
}
function Mc(e, t) {
	return e.characteristicKey === t.characteristicKey && e.characteristicOverride === t.characteristicOverride && e.kind === t.kind && e.name === t.name && e.source === t.source;
}
function Nc(e) {
	let t = e.split("|").map((e) => e.trim());
	if (t.length > 2 || !t[0]) throw Error(`Invalid wound formula attribute reference: ${e}`);
	return [t[0], t[1]];
}
function Pc(e) {
	let t = e.trim().toLocaleLowerCase();
	return Dc(t) ? t : Ec[t] ?? Ic[t];
}
function Fc(e) {
	let t = Pc(e);
	if (!t) throw Error(`Unknown wound formula characteristic: ${e}`);
	return t;
}
var Ic = {
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
function Lc(e, t, n) {
	let [r, ...i] = [e, t].flatMap((e) => e ? e.match(/\d+|[A-Za-z]+/g) ?? [] : []), a = r ? [r.toLocaleLowerCase(), ...i.map((e) => e.charAt(0).toLocaleUpperCase() + e.slice(1))].join("") : "attribute";
	return n === "bonus" ? `${a}Bonus` : a;
}
function Rc(e, t) {
	let n = new Set(t.map((e) => e.variableName));
	if (!n.has(e)) return e;
	let r = 2, i = `${e}${r}`;
	for (; n.has(i);) r += 1, i = `${e}${r}`;
	return i;
}
//#endregion
//#region src/functions/species-builder/wound-formula/script-lines.ts
function zc(e) {
	let t = [];
	if (Hc(e, [
		"sb",
		"tb",
		"wpb"
	]) && (t.push(...Uc(e, "sb", "preWoundArgs.sb")), t.push(...Uc(e, "tb", "preWoundArgs.tb")), t.push(...Uc(e, "wpb", "preWoundArgs.wpb"))), Hc(e, [
		"sbMultiplier",
		"tbMultiplier",
		"wpbMultiplier"
	]) && (t.push("const multiplier = preWoundArgs.multiplier;"), t.push(...Uc(e, "sbMultiplier", "multiplier.sb")), t.push(...Uc(e, "tbMultiplier", "multiplier.tb")), t.push(...Uc(e, "wpbMultiplier", "multiplier.wpb"))), Hc(e, ["scale", "size"]) && (t.push(...Wc()), t.push("const size = actorSizeStep();"), t.push(...Uc(e, "scale", "2 ** size"))), Hc(e, Yc) && (t.push(...Uc(e, "age", "Number(actor.system.details.age.value)")), t.push(...Uc(e, "height", "Number(actor.system.details.height.value)")), t.push(...Uc(e, "weight", "Number(actor.system.details.weight.value)")), t.push(...Qc(e))), Hc(e, Xc) && (t.push(...Uc(e, "xp", "actor.system.details.experience.total")), t.push(...Uc(e, "fate", "actor.system.status.fate.value")), t.push(...Uc(e, "fortune", "actor.system.status.fortune.value")), t.push(...Uc(e, "resilience", "actor.system.status.resilience.value")), t.push(...Uc(e, "resolve", "actor.system.status.resolve.value")), t.push(...Uc(e, "corruption", "actor.system.status.corruption.value")), t.push(...Uc(e, "sin", "actor.system.status.sin.value")), t.push(...Uc(e, "advantage", "actor.system.status.advantage.value"))), Hc(e, Zc)) {
		t.push(...$c());
		for (let n of Zc) t.push(...Uc(e, n, `conditionValue("${n}")`));
	}
	return t.length ? [...t, ""] : [];
}
function Bc(e) {
	let t = e.length > 0, n = e.some((e) => e.source === "skill");
	return [...Gc(t), ...Kc(n)];
}
function Vc(e) {
	return e.map((e) => e.source === "characteristic" ? qc(e) : Jc(e));
}
function Hc(e, t) {
	return t.some((t) => e.has(t));
}
function Uc(e, t, n) {
	return e.has(t) ? [`const ${t} = ${n};`] : [];
}
function Wc() {
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
function Gc(e) {
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
function Kc(e) {
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
function qc(e) {
	let t = e.kind === "bonus" ? "characteristicBonus" : "characteristicTotal";
	return `const ${e.variableName} = ${t}(${JSON.stringify(e.characteristicKey)});`;
}
function Jc(e) {
	let t = e.kind === "bonus" ? "skillBonus" : "skillTotal", n = e.characteristicOverride ? JSON.stringify(e.characteristicOverride) : "undefined";
	return `const ${e.variableName} = ${t}(${JSON.stringify(e.name)}, ${n});`;
}
var Yc = [
	"age",
	"height",
	"rank",
	"status",
	"weight"
], Xc = [
	"advantage",
	"corruption",
	"fate",
	"fortune",
	"resilience",
	"resolve",
	"sin",
	"xp"
], Zc = [
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
function Qc(e) {
	let t = [];
	return e.has("status") && t.push("function statusTierValue() {", "  const statusTiers = { brass: 1, silver: 2, gold: 3 };", "  const tier = actor.system.details.status.tier;", "  return statusTiers[String(tier).toLocaleLowerCase()] || Number(tier);", "}", "const status = statusTierValue();"), t.push(...Uc(e, "rank", "Number(actor.system.details.status.standing)")), t;
}
function $c() {
	return [
		"function conditionValue(key) {",
		"  return actor.hasCondition(key)?.conditionValue || 0;",
		"}"
	];
}
//#endregion
//#region src/functions/species-builder/wound-formula/index.ts
function el(e) {
	let t = Oc(e);
	return [
		...zc(t.usedKeywords),
		...Bc(t.references),
		...Vc(t.references),
		"",
		`args.wounds = ${t.expression};`
	];
}
//#endregion
//#region src/functions/species-builder/wound-formula-traits.ts
var tl = "generatedSpeciesWoundFormulaEffect", nl = "generatedSpeciesWoundFormulaTrait";
function rl(e) {
	return e.definitions.flatMap((e) => [...dl(e), ...fl(e)]);
}
function il(e) {
	return `__${e.name.trim()}__`;
}
function al(e, t) {
	return `__${e.name.trim()} / ${t.name.trim()}__`;
}
function ol({ flagScope: e, spec: t }) {
	return {
		effects: [sl({
			flagScope: e,
			spec: t
		})],
		flags: { [e]: { [nl]: {
			speciesKey: t.speciesKey,
			subspeciesKey: t.subspeciesKey ?? ""
		} } },
		img: "icons/svg/aura.svg",
		name: t.name,
		system: { description: { value: ul(t) } },
		type: "trait"
	};
}
function sl({ flagScope: e, spec: t }) {
	return {
		changes: [],
		disabled: !1,
		flags: { [e]: { [tl]: {
			speciesKey: t.speciesKey,
			subspeciesKey: t.subspeciesKey ?? ""
		} } },
		img: "icons/svg/aura.svg",
		name: `${t.ownerName} Wound Formula`,
		system: {
			scriptData: [{
				label: `${t.ownerName} Wound Formula Capture`,
				script: cl(),
				trigger: "preWoundCalc"
			}, {
				label: `${t.ownerName} Wound Formula`,
				script: ll(t),
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
function cl() {
	return [
		"// Generated by WFRP4e Customizer Apps.",
		"const storageKey = \"__wfrp4eCustomizerWoundFormulaArgs\";",
		"const sourceId = this.item?.id || this.effect.id;",
		"this.actor[storageKey] ||= {};",
		"this.actor[storageKey][sourceId] = args;"
	].join("\n");
}
function ll(e) {
	return [
		"// Generated by WFRP4e Customizer Apps.",
		"const storageKey = \"__wfrp4eCustomizerWoundFormulaArgs\";",
		"const sourceId = this.item?.id || this.effect.id;",
		"const preWoundArgs = this.actor[storageKey][sourceId];",
		"const actor = this.actor;",
		"",
		...el(e.formula)
	].join("\n");
}
function ul(e) {
	return ["<p>Generated by WFRP4e Customizer Apps. This Trait applies a custom Species Builder wound formula.</p>", `<p>${pl(e.formula)}</p>`].join("");
}
function dl(e) {
	return e.woundFormula?.formula ? [{
		formula: e.woundFormula.formula,
		name: il(e),
		ownerName: e.name,
		speciesKey: e.key
	}] : [];
}
function fl(e) {
	return (e.subspecies ?? []).flatMap((t) => t.woundFormula?.formula ? [{
		formula: t.woundFormula.formula,
		name: al(e, t),
		ownerName: `${e.name} / ${t.name}`,
		speciesKey: e.key,
		subspeciesKey: t.key
	}] : []);
}
function pl(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
//#endregion
//#region src/functions/species-builder/species-config.ts
function ml(e) {
	let t = hl();
	for (let n of e.definitions) gl(t, n);
	return t;
}
function hl() {
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
function gl(e, t) {
	e.species[t.key] = t.name, q(e.speciesCharacteristics, t.key, t.characteristics), e.speciesSkills[t.key] = hc(t) ?? [], e.speciesTalents[t.key] = vc(t) ?? [], q(e.speciesRandomTalents, t.key, t.randomTalents), q(e.speciesTalentReplacement, t.key, bl(t)), q(e.speciesTraits, t.key, bc(t, t.woundFormula ? il(t) : void 0)), q(e.speciesMovement, t.key, t.movement), q(e.speciesFate, t.key, t.fate), q(e.speciesRes, t.key, t.resilience), q(e.speciesExtra, t.key, t.extra), q(e.speciesAge, t.key, t.age), q(e.speciesHeight, t.key, t.height), q(e.speciesCareerReplacements, t.key, xl(t)), t.includeInExtraSpecies && e.extraSpecies.push(t.key);
	for (let n of t.subspecies ?? []) {
		let r = e.subspecies[t.key] ?? {}, i = n.woundFormula ? al(t, n) : void 0, a = n.careerTable ? yl(t, n) : void 0;
		r[n.key] = _l(t, n, i, a), e.subspecies[t.key] = r;
	}
}
function _l(e, t, n, r) {
	let i = { name: t.name };
	return q(i, "characteristics", t.characteristics ? {
		...e.characteristics,
		...t.characteristics
	} : void 0), q(i, "skills", gc(e, t)), q(i, "talents", yc(e, t)), q(i, "speciesTraits", xc(e, t, {
		parent: e.woundFormula ? il(e) : void 0,
		subspecies: n
	})), q(i, "randomTalents", t.randomTalents), q(i, "talentReplacement", bl(t)), q(i, "movement", t.movement), q(i, "fate", t.fate), q(i, "resilience", t.resilience), q(i, "extra", t.extra), q(i, "careerTable", r), i;
}
function vl(e) {
	return e.key;
}
function yl(e, t) {
	return `${e.key}-${t.key}`;
}
function bl(e) {
	return dc(e.talentReplacementRows) ?? e.talentReplacements;
}
function xl(e) {
	return fc(e.careerReplacementRows) ?? e.careerReplacements;
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
function Sl(e, t) {
	let n = X(e, t);
	return Array.isArray(n) ? n.filter((e) => typeof e == "string") : [];
}
function Cl(e, t, n = 0) {
	return wl(e, t) ?? n;
}
function wl(e, t) {
	for (let n of t) {
		let t = Number(X(e, n));
		if (Number.isFinite(t)) return t;
	}
	return null;
}
function Tl(e, t, n = !1) {
	for (let n of t) {
		let t = X(e, n);
		if (typeof t == "boolean") return t;
	}
	return n;
}
function El(e) {
	return Array.isArray(e) ? e.flatMap(El) : typeof e == "string" ? e.split(/[\n\r,;]/).map((e) => e.trim()).filter(Boolean) : Y(e) ? Object.values(e).flatMap(El) : [];
}
function Dl(e, t, n) {
	let r = e;
	for (let e of t.slice(0, -1)) {
		let t = r[e];
		Y(t) || (r[e] = {}), r = r[e];
	}
	r[t[t.length - 1] ?? ""] = n;
}
//#endregion
//#region src/functions/species-builder/career-table-normalization.ts
function Ol(e) {
	if (!Y(e)) return;
	let t = kl(e.rows) ?? Al(e.careers);
	return t ? { rows: t } : void 0;
}
function kl(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!Y(e)) return [];
		let t = Ml(e.name);
		if (!t) return [];
		let n = { name: t };
		return q(n, "journalUuid", Ml(e.journalUuid)), [n];
	});
	return t.length > 0 ? t : void 0;
}
function Al(e) {
	return jl(e)?.map((e) => ({ name: e }));
}
function jl(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		let t = Ml(e);
		return t ? [t] : [];
	});
	return t.length > 0 ? t : void 0;
}
function Ml(e) {
	if (typeof e == "string") return e.trim() || void 0;
}
//#endregion
//#region src/functions/species-builder/replacement-row-normalization.ts
function Nl(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!Y(e)) return [];
		let t = Fl(e.rolled, "talent"), n = Fl(e.replacement, "talent");
		return !t.name || !n.name ? [] : [{
			replacement: n,
			rolled: t
		}];
	});
	return t.length > 0 ? t : void 0;
}
function Pl(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!Y(e)) return [];
		let t = Fl(e.rolled, "career"), n = Array.isArray(e.replacements) ? e.replacements.flatMap((e) => {
			let t = Fl(e, "career");
			return t.name ? [t] : [];
		}) : [];
		return !t.name || n.length === 0 ? [] : [{
			replacements: n,
			rolled: t
		}];
	});
	return t.length > 0 ? t : void 0;
}
function Fl(e, t) {
	if (typeof e == "string") return { name: Rl(e) ?? "" };
	if (!Y(e)) return { name: "" };
	let n = Il(e.item, t), r = Rl(e.name) ?? n?.name ?? "";
	return n ? {
		item: n,
		name: r
	} : { name: r };
}
function Il(e, t) {
	if (!Y(e)) return;
	let n = Rl(e.name), r = Ll(e.type), i = Rl(e.uuid);
	if (!n || r !== t || !i) return;
	let a = {
		name: n,
		type: r,
		uuid: i
	}, o = Rl(e.specification) ?? Rl(e.specifier);
	o && (a.specification = o);
	let s = Rl(e.img);
	return s && (a.img = s), a;
}
function Ll(e) {
	return e === "career" || e === "skill" || e === "talent" || e === "trait" ? e : void 0;
}
function Rl(e) {
	if (typeof e == "string") return e.trim() || void 0;
}
//#endregion
//#region src/functions/species-builder/linked-grant-normalization.ts
function zl(e, t) {
	if (!Array.isArray(e)) return;
	let n = e.flatMap((e) => {
		let n = Fl(e, t);
		return n.name ? [n] : [];
	});
	return n.length > 0 ? n : void 0;
}
function Bl(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!Y(e) || !Array.isArray(e.choices)) return [];
		let t = e.choices.flatMap((e) => {
			let t = Fl(e, "talent");
			return t.name ? [t] : [];
		});
		return t.length > 0 ? [{ choices: t }] : [];
	});
	return t.length > 0 ? t : void 0;
}
//#endregion
//#region src/functions/species-builder/species-settings-normalization.ts
var Vl = Object.values(J);
function Hl(e) {
	return !Y(e) || !Array.isArray(e.definitions) ? {
		autoRegisterSpeciesTable: !1,
		definitions: [],
		showGeneratedConfigTab: !1
	} : {
		autoRegisterSpeciesTable: e.autoRegisterSpeciesTable === !0,
		definitions: e.definitions.flatMap(Ul),
		showGeneratedConfigTab: e.showGeneratedConfigTab === !0
	};
}
function Ul(e) {
	return Kl(e, (e, t, n) => ({
		includeInExtraSpecies: n.includeInExtraSpecies === !0,
		key: e,
		name: t
	})).map((t) => (ql(t, e), Jl(t, e), t));
}
function Wl(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap(Gl);
	return t.length > 0 ? t : void 0;
}
function Gl(e) {
	return Kl(e, (e, t, n) => {
		let r = {
			key: e,
			name: t
		};
		return q(r, "skillsAdded", Ql(n.skillsAdded)), q(r, "skillsRemoved", Ql(n.skillsRemoved)), q(r, "talentsAdded", Ql(n.talentsAdded)), q(r, "talentsRemoved", Ql(n.talentsRemoved)), q(r, "traitsAdded", Ql(n.traitsAdded)), q(r, "traitsRemoved", Ql(n.traitsRemoved)), r;
	});
}
function Kl(e, t) {
	if (!Y(e)) return [];
	let n = Yl(e.key), r = Xl(e.name);
	if (!n || !r) return [];
	let i = t(n, r, e);
	return q(i, "characteristics", nu(e.characteristics)), q(i, "randomTalents", eu(e.randomTalents)), q(i, "talentReplacementRows", Nl(e.talentReplacementRows)), q(i, "talentReplacements", $l(e.talentReplacements)), q(i, "movement", Zl(e.movement)), q(i, "fate", Zl(e.fate)), q(i, "resilience", Zl(e.resilience)), q(i, "extra", Zl(e.extra)), q(i, "woundFormula", iu(e.woundFormula)), q(i, "careerTable", Ol(e.careerTable)), [i];
}
function ql(e, t) {
	Y(t) && (q(e, "skills", Ql(t.skills)), q(e, "linkedSkills", zl(t.linkedSkills, "skill")), q(e, "talents", Ql(t.talents)), q(e, "linkedTalents", Bl(t.linkedTalents)), q(e, "traits", Ql(t.traits)), q(e, "linkedTraits", zl(t.linkedTraits, "trait")));
}
function Jl(e, t) {
	Y(t) && (q(e, "age", Xl(t.age)), q(e, "height", ru(t.height)), q(e, "careerReplacements", tu(t.careerReplacements)), q(e, "careerReplacementRows", Pl(t.careerReplacementRows)), q(e, "subspecies", Wl(t.subspecies)));
}
function Yl(e) {
	return typeof e == "string" ? rs(e) : "";
}
function Xl(e) {
	if (typeof e == "string") return e.trim() || void 0;
}
function Zl(e) {
	let t = Number(e);
	return Number.isFinite(t) ? t : void 0;
}
function Ql(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		let t = Xl(e);
		return t ? [t] : [];
	});
	return t.length > 0 ? t : void 0;
}
function $l(e) {
	if (!Y(e)) return;
	let t = Object.entries(e).flatMap(([e, t]) => {
		let n = Xl(e), r = Xl(t);
		return n && r ? [[n, r]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function eu(e) {
	if (!Y(e)) return;
	let t = Object.entries(e).flatMap(([e, t]) => {
		let n = Xl(e), r = Zl(t);
		return n && r !== void 0 ? [[n, r]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function tu(e) {
	if (!Y(e)) return;
	let t = Object.entries(e).flatMap(([e, t]) => {
		let n = Xl(e), r = Ql(t);
		return n && r ? [[n, r]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function nu(e) {
	if (!Y(e)) return;
	let t = Vl.flatMap((t) => {
		let n = Xl(e[t]);
		return n ? [[t, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function ru(e) {
	if (!Y(e)) return;
	let t = {};
	return q(t, "die", Xl(e.die)), q(t, "feet", Zl(e.feet)), q(t, "inches", Zl(e.inches)), Object.keys(t).length > 0 ? t : void 0;
}
function iu(e) {
	if (!Y(e)) return;
	let t = Xl(e.formula);
	return t ? { formula: t } : void 0;
}
//#endregion
//#region src/functions/species-builder/world-table.ts
var au = "managedSpeciesTable";
function ou() {
	return {
		isRegistered: !1,
		name: "Species",
		ownership: "new",
		requiresLinkRepair: !1,
		rows: []
	};
}
function su(e, t) {
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
function cu(e, t) {
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
function lu(e, t, n) {
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
function uu(e) {
	let t = e.map((e) => Number.isInteger(e.weight) && e.weight > 0 ? e.weight : 0), n = t.reduce((e, t) => e + t, 0), r = 1;
	return t.map((e) => {
		let t = r, i = e > 0 ? t + e - 1 : t;
		return r = i + 1, {
			chance: n > 0 ? e / n : 0,
			range: [t, i]
		};
	});
}
function du(e, t, n) {
	let r = n.find((e) => e.label === t.trim());
	if (r) return r.key;
	let i = e.trim();
	return n.some((e) => e.key === i) ? i : "";
}
function fu(e) {
	let t = /@UUID\[([^\]]+)\]\{([^}]*)\}/u.exec(e), n = t?.[1]?.trim() ?? "", r = t?.[2]?.trim() ?? "";
	return n && r ? {
		label: r,
		uuid: n
	} : void 0;
}
function pu(e) {
	let t = X(e, ["range"]), n = Array.isArray(t) ? Number(t[0]) : 0, r = Array.isArray(t) ? Number(t[1]) : 0;
	if (Number.isInteger(n) && Number.isInteger(r) && r >= n) return r - n + 1;
	let i = Number(X(e, ["weight"]));
	return Number.isInteger(i) && i > 0 ? i : 1;
}
function mu(e) {
	return JSON.stringify(e.rows.map((e) => ({
		name: e.name.trim(),
		speciesKey: e.speciesKey.trim(),
		weight: e.weight
	})));
}
function hu(e, t) {
	let n = uu(e.rows), r = e.rows.reduce((e, t) => e + (Number.isInteger(t.weight) && t.weight > 0 ? t.weight : 0), 0);
	return {
		displayRoll: !0,
		flags: {
			wfrp4e: { key: "species" },
			[t]: { [au]: !0 }
		},
		formula: `1d${Math.max(r, 1)}`,
		img: "systems/wfrp4e/ui/buttons/d10.webp",
		name: _u(e),
		replacement: !0,
		results: e.rows.map((e, t) => ({
			description: gu(e),
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
function gu(e) {
	let t = e.journalUuid?.trim() ?? "", n = e.name.trim();
	if (!t) throw Error(`Species "${n || e.speciesKey}" does not have a Journal link target.`);
	if (/[{}]/u.test(n)) throw Error(`Species "${n}" cannot be encoded in WFRP's UUID-link label.`);
	return `@UUID[${t}]{${n}}`;
}
function _u(e) {
	let t = e.name.trim() || "Species";
	return e.ownership === "external" && !t.includes("Species Builder") ? `${t} (Species Builder)` : t;
}
//#endregion
//#region src/functions/species-builder/editor/career-table-rows.ts
function vu(e) {
	return [...e ?? [], { name: "" }];
}
function yu(e, t) {
	return (e ?? []).filter((e, n) => n !== t);
}
function bu(e, t, n) {
	return (e ?? []).map((e, r) => r === t ? Cu(e, n) : e);
}
function xu(e, t, n) {
	let r = { name: n.name };
	return n.careerJournalUuid && (r.journalUuid = n.careerJournalUuid), bu(e, t, r);
}
function Su(e, t, n) {
	return bu(e, t, { journalUuid: n });
}
function Cu(e, t) {
	let n = {
		...e,
		...t
	};
	return n.journalUuid || delete n.journalUuid, n;
}
//#endregion
//#region src/state/species-builder/career-table-drop-actions.ts
function wu(e) {
	async function t(t, n) {
		let r = e.selectedDefinition.value;
		if (!r) return;
		let i = await e.resolveDroppedItem("career", n);
		e.definitionActions.updateCareerTableRows(xu(r.careerTable?.rows, t, i));
	}
	async function n(t, n) {
		let r = e.selectedDefinition.value;
		if (!r) return;
		let i = await Tu(e, n);
		e.definitionActions.updateCareerTableRows(Su(r.careerTable?.rows, t, i.uuid));
	}
	async function r(t, n, r) {
		let i = e.selectedDefinition.value?.subspecies?.[t];
		if (!i) return;
		let a = await e.resolveDroppedItem("career", r);
		e.subspeciesActions.updateSubspeciesCareerTableRows(t, xu(i.careerTable?.rows, n, a));
	}
	async function i(t, n, r) {
		let i = e.selectedDefinition.value?.subspecies?.[t];
		if (!i) return;
		let a = await Tu(e, r);
		e.subspeciesActions.updateSubspeciesCareerTableRows(t, Su(i.careerTable?.rows, n, a.uuid));
	}
	return {
		setCareerTableCareerDrop: t,
		setCareerTableJournalDrop: n,
		setSubspeciesCareerTableCareerDrop: r,
		setSubspeciesCareerTableJournalDrop: i
	};
}
async function Tu(e, t) {
	try {
		return await e.bridge.resolveJournalDrop(t);
	} catch (t) {
		throw e.loadError.value = ws(t), t;
	}
}
//#endregion
//#region src/functions/species-builder/editor/definition-fields.ts
function Eu() {
	return {
		includeInExtraSpecies: !0,
		key: "",
		name: "New Species"
	};
}
function Du(e, t) {
	let n = Cs(e);
	return n.key = Lu(`${n.key}-copy`, t), n.name = `${n.name} Copy`, n;
}
function Ou(e, t) {
	return [...e, ...t.map(Cs)];
}
function ku(e, t, n) {
	return K(e, t, ls(n));
}
function Au(e, t, n) {
	return K(e, t, fs(n));
}
function ju(e, t, n) {
	let r = e.height ? { ...e.height } : {}, i = t === "die" ? cs(n) : fs(n);
	return i === void 0 ? delete r[t] : r[t] = i, K(e, "height", Object.keys(r).length > 0 ? r : void 0);
}
function Mu(e, t, n) {
	let r = e.characteristics ? { ...e.characteristics } : {}, i = cs(n);
	return i ? r[t] = i : delete r[t], K(e, "characteristics", Object.keys(r).length > 0 ? r : void 0);
}
function Nu(e, t, n) {
	return K(e, t, is(n));
}
function Pu(e, t, n) {
	return K(e, t, ms(t, n));
}
function Fu(e, t) {
	return K(e, "woundFormula", us(t));
}
function Iu(e, t) {
	return K(e, "careerTable", ds(t));
}
function Lu(e, t) {
	let n = new Set(t.map((e) => e.key));
	if (!n.has(e)) return e;
	let r = 2, i = `${e}-${r}`;
	for (; n.has(i);) r += 1, i = `${e}-${r}`;
	return i;
}
//#endregion
//#region src/state/species-builder/selected-definition.ts
function Ru(e, t) {
	let n = e.definitions.value[e.selectedIndex.value];
	n && (e.definitions.value = e.definitions.value.map((r, i) => i === e.selectedIndex.value ? t(Cs(n)) : r), e.message.value = "");
}
//#endregion
//#region src/state/species-builder/definition-actions.ts
function zu(e) {
	function t() {
		r(Eu());
	}
	function n() {
		let t = e.selectedDefinition.value;
		t && r(Du(t, e.definitions.value));
	}
	function r(e) {
		i([e]);
	}
	function i(t) {
		t.length !== 0 && (e.definitions.value = Ou(e.definitions.value, t), e.selectedIndex.value = e.definitions.value.length - 1, e.message.value = "");
	}
	function a() {
		e.selectedDefinition.value && (e.definitions.value = e.definitions.value.filter((t, n) => n !== e.selectedIndex.value), e.selectedIndex.value = e.definitions.value.length === 0 ? -1 : Math.min(e.selectedIndex.value, e.definitions.value.length - 1), e.message.value = "");
	}
	function o(t) {
		e.selectedIndex.value = t;
	}
	function s(e, t) {
		g((n) => ku(n, e, t));
	}
	function c(e, t) {
		g((n) => ({
			...n,
			[e]: t
		}));
	}
	function l(e, t) {
		g((n) => Au(n, e, t));
	}
	function u(e, t) {
		g((n) => ju(n, e, t));
	}
	function d(e, t) {
		g((n) => Mu(n, e, t));
	}
	function f(e, t) {
		g((n) => Nu(n, e, t));
	}
	function p(e, t) {
		g((n) => Pu(n, e, t));
	}
	function m(e) {
		g((t) => Fu(t, e));
	}
	function h(e) {
		g((t) => Iu(t, e));
	}
	function g(t) {
		Ru(e, t);
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
//#region src/functions/species-builder/editor/linked-grants.ts
function Bu(e) {
	return e === "traits" ? "traits" : "skills";
}
function Vu(e, t) {
	return t && t.length > 0 ? t.map(nd) : (e ?? []).map((e) => ({ name: e }));
}
function Hu(e, t) {
	return t && t.length > 0 ? t.map((e) => ({ choices: e.choices.map(nd) })) : (e ?? []).map((e) => ({ choices: td(e).map((e) => ({ name: e })) }));
}
function Uu(e) {
	return e.map(oc).filter((e) => e.length > 0);
}
function Wu(e) {
	return e.flatMap((e) => {
		let t = Uu(e.choices);
		return t.length > 0 ? [t.join(", ")] : [];
	});
}
function Gu(e, t, n) {
	return e.map((e, r) => r === t ? { name: n } : nd(e));
}
function Ku(e, t, n) {
	return e.map((e, r) => r === t ? {
		item: n,
		name: ac(n)
	} : nd(e));
}
function qu(e, t, n, r) {
	return e.map((e, i) => i === t ? { choices: Gu(e.choices, n, r) } : rd(e));
}
function Ju(e, t, n, r) {
	return e.map((e, i) => i === t ? { choices: Ku(e.choices, n, r) } : rd(e));
}
function Yu(e, t) {
	let n = t === "skills" ? "New Skill" : "New Trait";
	return [...e.map(nd), { name: n }];
}
function Xu(e, t) {
	return e.filter((e, n) => n !== t).map(nd);
}
function Zu(e, t) {
	let n = [{ name: "New Talent" }];
	return t === "choice" && n.push({ name: "Alternative Talent" }), [...e.map(rd), { choices: n }];
}
function Qu(e, t) {
	return e.map((e, n) => n === t ? { choices: [...e.choices.map(nd), { name: "Alternative Talent" }] } : rd(e));
}
function $u(e, t) {
	return e.filter((e, n) => n !== t).map(rd);
}
function ed(e, t, n) {
	let r = e[t];
	return !r || r.choices.length === 1 ? $u(e, t) : e.map((e, r) => r === t ? { choices: e.choices.filter((e, t) => t !== n).map(nd) } : rd(e));
}
function td(e) {
	let t = e.split(",").map((e) => e.trim()).filter((e) => e.length > 0);
	return t.length > 0 ? t : [e];
}
function nd(e) {
	return e.item ? {
		item: { ...e.item },
		name: e.name
	} : { name: e.name };
}
function rd(e) {
	return { choices: e.choices.map(nd) };
}
//#endregion
//#region src/functions/species-builder/editor/subspecies-fields.ts
function id(e) {
	return {
		...e,
		subspecies: [...e.subspecies ?? [], {
			key: "",
			name: "New Subspecies"
		}]
	};
}
function ad(e, t) {
	let n = (e.subspecies ?? []).filter((e, n) => n !== t);
	return K(e, "subspecies", n.length > 0 ? n : void 0);
}
function od(e, t, n) {
	let r = e.subspecies ?? [], i = r[t];
	return i ? {
		...e,
		subspecies: r.map((e, r) => r === t ? n(Cs(i)) : e)
	} : e;
}
function sd(e, t, n) {
	return {
		...e,
		[t]: ls(n) ?? ""
	};
}
function cd(e, t, n) {
	return K(e, t, fs(n));
}
function ld(e, t, n) {
	let r = e.characteristics ? { ...e.characteristics } : {}, i = cs(n);
	return i ? r[t] = i : delete r[t], K(e, "characteristics", Object.keys(r).length > 0 ? r : void 0);
}
function ud(e, t, n) {
	return K(e, t, is(n));
}
function dd(e, t, n) {
	return K(e, t, hs(t, n));
}
function fd(e, t) {
	return K(e, "woundFormula", us(t));
}
function pd(e, t) {
	return K(e, "careerTable", ds(t));
}
//#endregion
//#region src/functions/species-builder/editor/linked-definition.ts
function md(e, t) {
	let n = t === "skills" ? e.linkedSkills : e.linkedTraits;
	return Vu(e[t], n);
}
function hd(e) {
	return Hu(e.talents, e.linkedTalents);
}
function gd(e, t) {
	return Od(e, t, Yu(md(e, t), t));
}
function _d(e, t, n, r) {
	return Od(e, t, Gu(md(e, t), n, r));
}
function vd(e, t, n) {
	return Od(e, t, Xu(md(e, t), n));
}
function yd(e, t, n, r) {
	return Od(e, t, Ku(md(e, t), n, r));
}
function bd(e, t) {
	return kd(e, Zu(hd(e), t));
}
function xd(e, t) {
	return kd(e, Qu(hd(e), t));
}
function Sd(e, t, n, r) {
	return kd(e, qu(hd(e), t, n, r));
}
function Cd(e, t) {
	return kd(e, $u(hd(e), t));
}
function wd(e, t, n) {
	return kd(e, ed(hd(e), t, n));
}
function Td(e, t, n, r) {
	return kd(e, Ju(hd(e), t, n, r));
}
function Ed(e, t, n) {
	let r = ac(n);
	if (t === "talents") {
		let t = hd(e);
		return Wu(t).includes(r) ? e : kd(e, [...t, { choices: [{
			item: n,
			name: r
		}] }]);
	}
	let i = md(e, t);
	return Uu(i).includes(r) ? e : Od(e, t, [...i, {
		item: n,
		name: r
	}]);
}
function Dd(e, t, n) {
	let r = ac(n), i = Wu(hd(e));
	return od(e, t, (e) => {
		if (Ad(i, r)) {
			let t = jd((e.talentsAdded ?? []).filter((e) => e !== r)), n = jd((e.talentsRemoved ?? []).filter((e) => e !== r));
			return K(K(e, "talentsAdded", t), "talentsRemoved", n);
		}
		return (e.talentsAdded ?? []).includes(r) ? e : K(e, "talentsAdded", [...e.talentsAdded ?? [], r]);
	});
}
function Od(e, t, n) {
	let r = t === "skills" ? "linkedSkills" : "linkedTraits", i = Uu(n);
	return K(K(e, r, n.length > 0 ? n : void 0), t, i.length > 0 ? i : void 0);
}
function kd(e, t) {
	let n = Wu(t);
	return K(K(e, "linkedTalents", t.length > 0 ? t : void 0), "talents", n.length > 0 ? n : void 0);
}
function Ad(e, t) {
	return e.includes(t) && !/\([^()]*\)/.test(t);
}
function jd(e) {
	return e.length > 0 ? e : void 0;
}
//#endregion
//#region src/state/species-builder/linked-grant-actions.ts
var Md = {
	skills: "skill",
	talents: "talent",
	traits: "trait"
};
function Nd(e) {
	async function t(t, n) {
		let r = await e.resolveDroppedItem(Md[t], n);
		p((e) => Ed(e, t, r));
	}
	async function n(t, n, r) {
		let i = await e.resolveDroppedItem(Md[t], r);
		p((e) => yd(e, t, n, i));
	}
	async function r(t, n, r) {
		let i = await e.resolveDroppedItem("talent", r);
		p((e) => Td(e, t, n, i));
	}
	async function i(t, n) {
		if (!e.selectedDefinition.value?.subspecies?.[t]) return;
		let r = await e.resolveDroppedItem("talent", n);
		p((e) => Dd(e, t, r));
	}
	function a(e) {
		p((t) => gd(t, e));
	}
	function o(e, t, n) {
		p((r) => _d(r, e, t, n));
	}
	function s(e, t) {
		p((n) => vd(n, e, t));
	}
	function c(e) {
		p((t) => bd(t, e));
	}
	function l(e) {
		p((t) => xd(t, e));
	}
	function u(e, t, n) {
		p((r) => Sd(r, e, t, n));
	}
	function d(e) {
		p((t) => Cd(t, e));
	}
	function f(e, t) {
		p((n) => wd(n, e, t));
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
function Pd() {
	return { name: "" };
}
function Fd() {
	return {
		replacement: Pd(),
		rolled: Pd()
	};
}
function Id() {
	return {
		replacements: [Pd()],
		rolled: Pd()
	};
}
function Ld(e) {
	return [...e, Fd()];
}
function Rd(e, t) {
	return e.filter((e, n) => n !== t);
}
function zd(e) {
	return [...e, Id()];
}
function Bd(e, t) {
	return e.map((e, n) => n === t ? {
		...e,
		replacements: [...e.replacements, Pd()]
	} : e);
}
function Vd(e, t, n) {
	return e.map((e, r) => r === t ? {
		...e,
		replacements: e.replacements.filter((e, t) => t !== n)
	} : e).filter((e) => e.replacements.length > 0);
}
function Hd(e, t) {
	return e.filter((e, n) => n !== t);
}
function Ud(e) {
	return e.talentReplacementRows?.length ? ef(e.talentReplacementRows) : Gd(e.talentReplacements);
}
function Wd(e) {
	return e.careerReplacementRows?.length ? ef(e.careerReplacementRows) : Kd(e.careerReplacements);
}
function Gd(e) {
	return Object.entries(e ?? {}).map(([e, t]) => ({
		replacement: { name: t },
		rolled: { name: e }
	}));
}
function Kd(e) {
	return Object.entries(e ?? {}).map(([e, t]) => ({
		replacements: t.map((e) => ({ name: e })),
		rolled: { name: e }
	}));
}
function qd(e, t, n, r) {
	return e.map((e, i) => i === t ? {
		...e,
		[n]: Xd(r)
	} : e);
}
function Jd(e, t, n) {
	return e.map((e, r) => r === t ? {
		...e,
		rolled: Xd(n)
	} : e);
}
function Yd(e, t, n, r) {
	return e.map((e, i) => {
		if (i !== t) return e;
		let a = e.replacements.map((e, t) => t === n ? Xd(r) : e);
		return {
			...e,
			replacements: a
		};
	});
}
function Xd(e) {
	return {
		item: e,
		name: ac(e)
	};
}
function Zd(e, t) {
	return K(K(e, "talentReplacementRows", t.length > 0 ? t : void 0), "talentReplacements", dc(t));
}
function Qd(e, t) {
	return K(K(e, "careerReplacementRows", t.length > 0 ? t : void 0), "careerReplacements", fc(t));
}
function $d(e, t) {
	return K(K(e, "talentReplacementRows", t.length > 0 ? t : void 0), "talentReplacements", dc(t));
}
function ef(e) {
	return JSON.parse(JSON.stringify(e));
}
//#endregion
//#region src/state/species-builder/replacement-actions.ts
function tf(e) {
	function t(t) {
		e.definitionActions.updateSelectedDefinition((e) => Zd(e, t));
	}
	function n(t) {
		e.definitionActions.updateSelectedDefinition((e) => Qd(e, t));
	}
	function r(t, n) {
		e.subspeciesActions.updateSubspecies(t, (e) => $d(e, n));
	}
	async function i(n, r, i) {
		let a = e.selectedDefinition.value;
		if (!a) return;
		let o = await l("talent", i);
		t(qd(Ud(a), n, r, o));
	}
	async function a(t, n, i, a) {
		let o = e.selectedDefinition.value?.subspecies?.[t];
		if (!o) return;
		let s = await l("talent", a);
		r(t, qd(Ud(o), n, i, s));
	}
	async function o(t, r) {
		let i = e.selectedDefinition.value;
		if (!i) return;
		let a = await l("career", r);
		n(Jd(Wd(i), t, a));
	}
	async function s(t, r, i) {
		let a = e.selectedDefinition.value;
		if (!a) return;
		let o = await l("career", i);
		n(Yd(Wd(a), t, r, o));
	}
	async function c(t) {
		try {
			await e.bridge.openItemSheet(t);
		} catch (t) {
			e.loadError.value = ws(t);
		}
	}
	async function l(t, n) {
		try {
			return await e.bridge.resolveItemDrop(n, t);
		} catch (t) {
			throw e.loadError.value = ws(t), t;
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
function nf(e) {
	let t = G(() => e.savedSettingsSnapshot.value !== bs(e.normalizedSettings.value)), n = G(() => JSON.stringify(e.normalizedSettings.value.definitions)), r = G(() => e.savedDefinitionsSnapshot.value !== n.value), i = G(() => e.autoRegisterSpeciesTable.value && (e.speciesTable.value.ownership !== "managed" || !e.speciesTable.value.isRegistered)), a = G(() => e.savedSpeciesTableSnapshot.value !== e.speciesTableSnapshot.value || i.value || e.speciesTable.value.requiresLinkRepair), o = G(() => t.value || a.value), s = G(() => a.value || t.value && e.autoRegisterSpeciesTable.value), c = G(() => s.value ? e.speciesTableValidationMessages.value : []), l = G(() => e.validationIssues.value.filter((e) => e.scope !== "species-table" || s.value));
	return {
		blockingSpeciesTableValidationMessages: c,
		blockingValidationIssues: l,
		canSave: G(() => !e.isLoading.value && !e.isSaving.value && !e.loadError.value && o.value && l.value.length === 0 && c.value.length === 0),
		definitionsHaveUnsavedChanges: r,
		hasUnsavedChanges: o,
		settingsHaveUnsavedChanges: t,
		speciesTableWillSave: s
	};
}
//#endregion
//#region src/state/species-builder/species-table-actions.ts
function rf(e) {
	let t = /* @__PURE__ */ M(ou()), n = /* @__PURE__ */ M([]), r = G(() => su(n.value, e.definitions.value)), i = G(() => cu(t.value, r.value)), a = G(() => mu(i.value)), o = G(() => uu(i.value.rows)), s = G(() => lu(i.value, r.value, e.autoRegisterSpeciesTable.value || i.value.ownership !== "new"));
	function c(e) {
		t.value = Cs(e.draft), n.value = Cs(e.runtimeOptions);
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
function af(e) {
	function t() {
		d(id);
	}
	function n(e) {
		d((t) => ad(t, e));
	}
	function r(e, t, n) {
		u(e, (e) => sd(e, t, n));
	}
	function i(e, t, n) {
		u(e, (e) => cd(e, t, n));
	}
	function a(e, t, n) {
		u(e, (e) => ld(e, t, n));
	}
	function o(e, t, n) {
		u(e, (e) => ud(e, t, n));
	}
	function s(e, t, n) {
		u(e, (e) => dd(e, t, n));
	}
	function c(e, t) {
		u(e, (e) => fd(e, t));
	}
	function l(e, t) {
		u(e, (e) => pd(e, t));
	}
	function u(e, t) {
		d((n) => od(n, e, t));
	}
	function d(t) {
		Ru(e, t);
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
//#region src/functions/species-builder/validation/shared.ts
function of(e) {
	return {
		careerGroups: pf(e.careerGroupNames),
		randomTalentSources: new Map(e.randomTalentSources.map((e) => [e.key.trim(), e])),
		skills: pf(e.itemBaseNames.skill),
		talents: pf(e.itemBaseNames.talent),
		traits: pf(e.itemBaseNames.trait)
	};
}
function Q(e, t, n) {
	return {
		...e,
		code: t,
		message: n
	};
}
function sf(e) {
	return e.trim().toLocaleLowerCase();
}
function cf(e) {
	return (e.split("(")[0] ?? "").trim();
}
function lf(e, t) {
	return t.has(cf(e));
}
function uf(e, t) {
	let n = e.trim();
	if (!n || !/^\d+(?:d\d+)?(?:\s*[+-]\s*\d+(?:d\d+)?)*$/iu.test(n)) return !1;
	let r = [...n.matchAll(/(\d+)d(\d+)/giu)];
	return t && r.length === 0 ? !1 : r.every((e) => Number(e[1]) > 0 && Number(e[2]) > 0);
}
function df(e) {
	let t = /^(\d+)d(\d+)(?:\s*\+\s*(-?\d+))?$/iu.exec(e.trim());
	return !!(t && Number(t[1]) > 0 && Number(t[2]) > 0);
}
function ff(e) {
	return Number.isInteger(e) && (e ?? -1) >= 0;
}
function pf(e) {
	return new Set(e.map((e) => e.trim()).filter(Boolean));
}
//#endregion
//#region src/functions/species-builder/validation/career-tables.ts
function mf(e, t) {
	let n = [];
	return e.forEach((e, r) => {
		hf(e.careerTable, gf(r), !0, t, n), (e.subspecies ?? []).forEach((e, i) => {
			e.careerTable !== void 0 && hf(e.careerTable, _f(r, i), !0, t, n);
		});
	}), n;
}
function hf(e, t, n, r, i) {
	if (!e || e.rows.length === 0) {
		n && i.push(Q(t, "career-table-required", "Add at least one Career group so character creation can roll a Career."));
		return;
	}
	e.rows.forEach((e, n) => {
		let a = e.name.trim(), o = {
			...t,
			field: "name",
			rowIndex: n
		};
		a ? r.careerGroups.has(a) || i.push(Q(o, "career-table-career-missing", `Career group “${a}” does not match an available WFRP Career group.`)) : i.push(Q(o, "career-table-row-blank", `Career Table row ${n + 1} needs a Career group name.`));
	});
}
function gf(e) {
	return {
		definitionIndex: e,
		scope: "definition",
		section: "careerTable"
	};
}
function _f(e, t) {
	return {
		definitionIndex: e,
		scope: "subspecies",
		section: "careerTable",
		subspeciesIndex: t
	};
}
//#endregion
//#region src/functions/species-builder/validation/definitions.ts
var vf = Object.keys(Tc), yf = [
	"movement",
	"fate",
	"resilience",
	"extra"
];
function bf(e) {
	let t = [];
	return e.forEach((e, n) => {
		let r = Df(n);
		xf(e.characteristics, r, !0, t), Sf(e, r, !0, t), Cf(e, r, t), Tf(e.woundFormula?.formula, r, t), Ef(e, n, t);
	}), t;
}
function xf(e, t, n, r) {
	for (let i of vf) {
		let a = e?.[i]?.trim() ?? "", o = `characteristics.${i}`;
		!a && n ? r.push(Q({
			...t,
			field: o,
			section: "attributes"
		}, "characteristic-required", `${Tc[i]} needs a roll formula.`)) : a && !df(a) && r.push(Q({
			...t,
			field: o,
			section: "attributes"
		}, "characteristic-formula-invalid", `${Tc[i]} must use a dice roll with an optional whole-number bonus, such as 2d10 or 2d10+20.`));
	}
}
function Sf(e, t, n, r) {
	for (let i of yf) {
		let a = e[i];
		a === void 0 && n ? r.push(Q({
			...t,
			field: i,
			section: "attributes"
		}, "stat-required", `${kf(i)} is required for character creation.`)) : a !== void 0 && !ff(a) && r.push(Q({
			...t,
			field: i,
			section: "attributes"
		}, "stat-invalid", `${kf(i)} must be a non-negative whole number.`));
	}
}
function Cf(e, t, n) {
	let r = e.age?.trim() ?? "";
	r ? uf(r, !1) || n.push(Q({
		...t,
		field: "age"
	}, "age-formula-invalid", "Age must use whole numbers and dice joined by + or -, such as 15+1d10.")) : n.push(Q({
		...t,
		field: "age"
	}, "age-required", "Enter an age roll formula."));
	let i = e.height;
	if (!i) {
		for (let e of [
			"die",
			"feet",
			"inches"
		]) n.push(Q({
			...t,
			field: `height.${e}`
		}, "height-required", `Height ${e} is required for character creation.`));
		return;
	}
	(!i.die?.trim() || !uf(i.die, !0)) && n.push(Q({
		...t,
		field: "height.die"
	}, "height-die-invalid", "Height die must be a valid dice formula, such as 1d10.")), wf(i.feet, "feet", t, n), wf(i.inches, "inches", t, n);
}
function wf(e, t, n, r) {
	ff(e) || r.push(Q({
		...n,
		field: `height.${t}`
	}, `height-${t}-invalid`, `Height ${t} must be a non-negative whole number.`));
}
function Tf(e, t, n) {
	if (e !== void 0) try {
		if (!e.trim() || !Af(e)) throw Error("The formula is blank or has unmatched brackets.");
		Oc(e);
	} catch (e) {
		let r = e instanceof Error ? e.message : "The formula could not be compiled.";
		n.push(Q({
			...t,
			field: "woundFormula",
			section: "wounds"
		}, "wound-formula-invalid", `Wound formula is invalid: ${r}`));
	}
}
function Ef(e, t, n) {
	(e.subspecies ?? []).forEach((r, i) => {
		let a = Of(t, i);
		r.characteristics && xf({
			...e.characteristics,
			...r.characteristics
		}, a, !0, n), Sf(r, a, !1, n), Tf(r.woundFormula?.formula, a, n);
	});
}
function Df(e) {
	return {
		definitionIndex: e,
		scope: "definition",
		section: "details"
	};
}
function Of(e, t) {
	return {
		definitionIndex: e,
		scope: "subspecies",
		section: "subspecies",
		subspeciesIndex: t
	};
}
function kf(e) {
	return e.charAt(0).toLocaleUpperCase() + e.slice(1);
}
function Af(e) {
	return jf(e, "{", "}") && jf(e, "[", "]") && jf(e, "(", ")");
}
function jf(e, t, n) {
	let r = 0;
	for (let i of e) if (i === t ? r += 1 : i === n && --r, r < 0) return !1;
	return r === 0;
}
//#endregion
//#region src/functions/species-builder/validation/grant-talents.ts
function Mf(e, t, n, r, i, a) {
	e.forEach((e, o) => {
		if (e.length === 0) {
			a.push(Q({
				...n,
				field: t,
				rowIndex: o
			}, "grant-blank", `Talent row ${o + 1} has no choices.`));
			return;
		}
		e.forEach((s, c) => {
			let l = s.trim(), u = {
				...n,
				choiceIndex: c,
				field: t,
				rowIndex: o
			};
			l ? e.length === 1 && Lf(l) ? Pf(l, u, r, i, a) : e.length > 1 && Rf(l) ? Ff(l, u, r, i, a) : lf(l, i.talents) || a.push(Q(u, "grant-unresolved", `Talent “${l}” does not match an available WFRP Talent Item.`)) : a.push(Q(u, "grant-blank", `Talent choice ${c + 1} is blank.`));
		});
	});
}
function Nf(e) {
	return new Set(Object.keys(e ?? { talents: 0 }));
}
function Pf(e, t, n, r, i) {
	let a = Number(e);
	(!Number.isInteger(a) || a < 0) && i.push(Q(t, "talent-random-count-invalid", "A numeric Talent grant must be a non-negative whole number.")), If("talents", `Numeric Talent grant “${e}”`, t, n, r, i);
}
function Ff(e, t, n, r, i) {
	If(/^random\[(\d)\](?:\[([a-zA-Z-_]+)\])?$/iu.exec(e)?.[2] ?? "talents", `Random Talent choice “${e}”`, t, n, r, i);
}
function If(e, t, n, r, i, a) {
	if (!r.has(e)) {
		a.push(Q(n, "random-talent-source-unconfigured", `${t} uses table key “${e}”, but that key is not configured in Random Talents.`));
		return;
	}
	let o = i.randomTalentSources.get(e);
	o ? o.readyForCharacterCreation || a.push(Q(n, "random-talent-source-not-ready", `Random Talent table “${o.key}” is not ready: ${o.reason ?? "its results are invalid"}.`)) : a.push(Q(n, "random-talent-source-missing", `${t} uses missing table key “${e}”.`));
}
function Lf(e) {
	return /^-?\d+(?:\.\d+)?$/u.test(e);
}
function Rf(e) {
	return /^random\[\d\](?:\[[a-zA-Z-_]+\])?$/iu.test(e);
}
//#endregion
//#region src/functions/species-builder/validation/grants.ts
function zf(e, t) {
	let n = [];
	return e.forEach((e, r) => {
		Vf(Hf(e.linkedSkills, e.skills), "skills", "Skill", t.skills, Gf(r, "skills"), n), Mf(Uf(e), "talents", Gf(r, "talents"), Nf(e.randomTalents), t, n), Vf(Hf(e.linkedTraits, e.traits), "traits", "Trait", t.traits, Gf(r, "traits"), n), (e.subspecies ?? []).forEach((i, a) => Bf(e, i, r, a, t, n));
	}), n;
}
function Bf(e, t, n, r, i, a) {
	Vf(t.skillsAdded ?? [], "skillsAdded", "Skill", i.skills, Kf(n, r, "skills"), a), Mf((t.talentsAdded ?? []).map(Wf), "talentsAdded", Kf(n, r, "talents"), Nf(t.randomTalents ?? e.randomTalents), i, a), Vf(t.traitsAdded ?? [], "traitsAdded", "Trait", i.traits, Kf(n, r, "traits"), a);
}
function Vf(e, t, n, r, i, a) {
	e.forEach((e, o) => {
		let s = e.trim(), c = {
			...i,
			field: t,
			rowIndex: o
		};
		s ? lf(s, r) || a.push(Q(c, "grant-unresolved", `${n} “${s}” does not match an available WFRP ${n} Item.`)) : a.push(Q(c, "grant-blank", `${n} row ${o + 1} is blank.`));
	});
}
function Hf(e, t) {
	return e?.length ? e.map(oc) : t ?? [];
}
function Uf(e) {
	return e.linkedTalents?.length ? e.linkedTalents.map((e) => e.choices.map(oc)) : (e.talents ?? []).map(Wf);
}
function Wf(e) {
	return e.split(",").map((e) => e.trim());
}
function Gf(e, t) {
	return {
		definitionIndex: e,
		scope: "definition",
		section: t
	};
}
function Kf(e, t, n) {
	return {
		definitionIndex: e,
		scope: "subspecies",
		section: n,
		subspeciesIndex: t
	};
}
//#endregion
//#region src/functions/species-builder/validation/identity.ts
function qf(e, t) {
	let n = [], r = new Set(t.runtimeSpecies.map((e) => sf(e.name)).filter(Boolean)), i = new Set(t.runtimeSpecies.map((e) => rs(e.key)).filter(Boolean)), a = $f(e.map((e) => e.key)), o = Qf(e.map((e) => e.name));
	return e.forEach((e, t) => {
		Jf(e, t, a, o, i, r, n), Yf(e, t, n);
	}), n;
}
function Jf(e, t, n, r, i, a, o) {
	let s = Xf(t), c = rs(e.key), l = e.name.trim();
	if (c ? (n.get(c) ?? 0) > 1 ? o.push(Q({
		...s,
		field: "key"
	}, "species-key-duplicate", `Species key “${c}” is used more than once.`)) : i.has(c) && o.push(Q({
		...s,
		field: "key"
	}, "species-key-runtime-collision", `Species key “${c}” is already used by an external WFRP species.`)) : o.push(Q({
		...s,
		field: "key"
	}, "species-key-required", "Enter a species key.")), !l) {
		o.push(Q({
			...s,
			field: "name"
		}, "species-name-required", "Enter a species name."));
		return;
	}
	let u = sf(l);
	((r.get(u) ?? 0) > 1 || a.has(u)) && o.push(Q({
		...s,
		field: "name"
	}, "species-name-duplicate", `Species name “${l}” must be unique because WFRP identifies table results by name.`)), /[{}]/u.test(l) && o.push(Q({
		...s,
		field: "name"
	}, "species-name-unsafe", "Species names cannot contain { or }; WFRP parses the name from a UUID-link label."));
}
function Yf(e, t, n) {
	let r = e.subspecies ?? [], i = $f(r.map((e) => e.key)), a = Qf(r.map((e) => e.name));
	r.forEach((e, r) => {
		let o = Zf(t, r), s = rs(e.key), c = e.name.trim();
		s ? (i.get(s) ?? 0) > 1 && n.push(Q({
			...o,
			field: "key"
		}, "subspecies-key-duplicate", `Subspecies key “${s}” is used more than once for this species.`)) : n.push(Q({
			...o,
			field: "key"
		}, "subspecies-key-required", "Enter a subspecies key.")), c ? (a.get(sf(c)) ?? 0) > 1 && n.push(Q({
			...o,
			field: "name"
		}, "subspecies-name-duplicate", `Subspecies name “${c}” is used more than once for this species.`)) : n.push(Q({
			...o,
			field: "name"
		}, "subspecies-name-required", "Enter a subspecies name."));
	});
}
function Xf(e) {
	return {
		definitionIndex: e,
		scope: "definition",
		section: "details"
	};
}
function Zf(e, t) {
	return {
		definitionIndex: e,
		scope: "subspecies",
		section: "subspecies",
		subspeciesIndex: t
	};
}
function Qf(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = sf(n);
		e && t.set(e, (t.get(e) ?? 0) + 1);
	}
	return t;
}
function $f(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = rs(n);
		e && t.set(e, (t.get(e) ?? 0) + 1);
	}
	return t;
}
//#endregion
//#region src/functions/species-builder/validation/random-talents.ts
function ep(e, t) {
	let n = [];
	return e.forEach((e, r) => {
		rp(e.randomTalents ?? { talents: 0 }, ap(r), t, n), (e.subspecies ?? []).forEach((i, a) => {
			i.randomTalents !== void 0 && (rp(i.randomTalents, op(r, a), t, n), tp(e, i, r, a, n));
		});
	}), n;
}
function tp(e, t, n, r, i) {
	let a = new Set(Object.keys(t.randomTalents ?? {})), o = new Set(t.talentsRemoved ?? []), s = /* @__PURE__ */ new Set();
	for (let t of vc(e) ?? []) if (!o.has(t)) for (let e of np(t)) a.has(e) || s.add(e);
	for (let e of s) i.push(Q(op(n, r), "inherited-random-talent-source-unconfigured", `Inherited Talent grants use table key “${e}”, but this subspecies Random Talents override does not configure it.`));
}
function np(e) {
	return /^-?\d+(?:\.\d+)?$/u.test(e.trim()) ? ["talents"] : e.includes(",") ? e.split(",").flatMap((e) => {
		let t = /^random\[(\d)\](?:\[([a-zA-Z-_]+)\])?$/iu.exec(e.trim());
		return t ? [t[2] ?? "talents"] : [];
	}) : [];
}
function rp(e, t, n, r) {
	Object.entries(e).forEach(([e, i], a) => {
		let o = e.trim();
		o ? ip(o, a, t, n, r) : r.push(Q({
			...t,
			field: "key",
			rowIndex: a
		}, "random-talent-source-required", `Random Talent row ${a + 1} needs a table key.`)), (!Number.isInteger(i) || i < 0) && r.push(Q({
			...t,
			field: "count",
			rowIndex: a
		}, "random-talent-count-invalid", `Random Talent count for “${o || "row " + (a + 1)}” must be a non-negative whole number.`));
	});
}
function ip(e, t, n, r, i) {
	let a = r.randomTalentSources.get(e);
	a ? a.readyForCharacterCreation || i.push(Q({
		...n,
		field: "key",
		rowIndex: t
	}, "random-talent-source-not-ready", `Random Talent table “${a.key}” is not ready: ${a.reason ?? "its results are invalid"}.`)) : i.push(Q({
		...n,
		field: "key",
		rowIndex: t
	}, "random-talent-source-missing", `No WFRP RollTable is registered with key “${e}”. WFRP looks it up even when the count is 0.`));
}
function ap(e) {
	return {
		definitionIndex: e,
		scope: "definition",
		section: "randomTalents"
	};
}
function op(e, t) {
	return {
		definitionIndex: e,
		scope: "subspecies",
		section: "randomTalents",
		subspeciesIndex: t
	};
}
//#endregion
//#region src/functions/species-builder/validation/replacements.ts
function sp(e, t) {
	let n = [];
	return e.forEach((e, r) => {
		cp(e, fp(r, "talentReplacement"), t, n), up(e, fp(r, "careerReplacement"), t, n), (e.subspecies ?? []).forEach((e, i) => cp(e, pp(r, i), t, n));
	}), n;
}
function cp(e, t, n, r) {
	let i = Ud(e), a = mp(i.map((e) => oc(e.rolled)));
	i.forEach((e, i) => {
		let o = oc(e.rolled);
		lp(e.rolled, "rolled", i, t, n, r), lp(e.replacement, "replacement", i, t, n, r), o && (a.get(sf(o)) ?? 0) > 1 && r.push(Q({
			...t,
			field: "rolled",
			rowIndex: i
		}, "talent-replacement-duplicate", `Talent “${o}” appears in more than one replacement row; only the last row would be used.`));
	});
}
function lp(e, t, n, r, i, a) {
	let o = oc(e), s = {
		...r,
		field: t,
		rowIndex: n
	};
	o ? lf(o, i.talents) || a.push(Q(s, "talent-replacement-unresolved", `Talent “${o}” does not match an available WFRP Talent Item.`)) : a.push(Q(s, "talent-replacement-blank", `Talent Replacement row ${n + 1} needs a ${t} Talent.`));
}
function up(e, t, n, r) {
	let i = Wd(e), a = mp(i.map((e) => oc(e.rolled)));
	i.forEach((e, i) => {
		let o = oc(e.rolled);
		dp(o, "rolled", i, void 0, t, n, r), o && (a.get(sf(o)) ?? 0) > 1 && r.push(Q({
			...t,
			field: "rolled",
			rowIndex: i
		}, "career-replacement-duplicate", `Career group “${o}” appears in more than one replacement row; only the last row would be used.`)), e.replacements.length === 0 ? dp("", "replacement", i, 0, t, n, r) : e.replacements.forEach((e, a) => dp(oc(e), "replacement", i, a, t, n, r));
	});
}
function dp(e, t, n, r, i, a, o) {
	let s = r === void 0 ? {
		...i,
		field: t,
		rowIndex: n
	} : {
		...i,
		choiceIndex: r,
		field: t,
		rowIndex: n
	};
	e.trim() ? a.careerGroups.has(e.trim()) || o.push(Q(s, "career-replacement-unresolved", `Career group “${e}” does not match an available WFRP Career group.`)) : o.push(Q(s, "career-replacement-blank", `Career Replacement row ${n + 1} needs a ${t} Career group.`));
}
function fp(e, t) {
	return {
		definitionIndex: e,
		scope: "definition",
		section: t
	};
}
function pp(e, t) {
	return {
		definitionIndex: e,
		scope: "subspecies",
		section: "talentReplacement",
		subspeciesIndex: t
	};
}
function mp(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = sf(n);
		e && t.set(e, (t.get(e) ?? 0) + 1);
	}
	return t;
}
//#endregion
//#region src/functions/species-builder/validation/species-table.ts
function hp(e, t, n, r) {
	if (!t) return [];
	let i = [], a = e.autoRegisterSpeciesTable || t.isRegistered;
	if (t.rows.length === 0) return a ? [Q(bp(), "species-table-empty", "Add at least one species while this table is registered for character creation.")] : [];
	let o = new Map(e.definitions.map((e, t) => [rs(e.key), {
		definition: e,
		definitionIndex: t
	}])), s = new Map(n.runtimeSpecies.map((e) => [e.key.trim(), e])), c = Sp(t.rows.map((e) => e.speciesKey)), l = Sp(t.rows.map((e) => e.name));
	return t.rows.forEach((e, t) => {
		let n = e.speciesKey.trim(), a = e.name.trim(), u = xp(t);
		if (gp(n, a, c, l, u, i), n) {
			let e = o.get(n);
			e ? _p(a, e.definition.name.trim(), e.definitionIndex, r, u, i) : vp(a, s.get(n), n, u, i);
		}
		(!Number.isInteger(e.weight) || e.weight < 1) && i.push(Q({
			...u,
			field: "weight"
		}, "species-table-weight-invalid", `Species Table row ${t + 1} needs a whole-number weight of at least 1.`));
	}), i;
}
function gp(e, t, n, r, i, a) {
	e ? (n.get(sf(e)) ?? 0) > 1 && a.push(Q({
		...i,
		field: "speciesKey"
	}, "species-table-species-duplicate", `Species key “${e}” appears more than once in the Species Table.`)) : a.push(Q({
		...i,
		field: "speciesKey"
	}, "species-table-species-required", `Species Table row ${(i.rowIndex ?? 0) + 1} must select a species.`));
	let o = sf(t);
	o && (r.get(o) ?? 0) > 1 && a.push(Q({
		...i,
		field: "speciesKey"
	}, "species-table-name-duplicate", `Species name “${t}” appears more than once in the Species Table.`)), /[{}]/u.test(t) && a.push(Q({
		...i,
		field: "speciesKey"
	}, "species-table-name-unsafe", `Species name “${t}” cannot be encoded in WFRP's UUID-link label.`));
}
function _p(e, t, n, r, i, a) {
	yp(e, t, i, a), r.some((e) => e.definitionIndex === n) && a.push(Q({
		...i,
		field: "speciesKey"
	}, "species-table-definition-not-ready", `Custom species “${t || "unnamed species"}” has character-creation errors.`));
}
function vp(e, t, n, r, i) {
	if (!t) {
		i.push(Q({
			...r,
			field: "speciesKey"
		}, "species-table-species-missing", `Species key “${n}” is not registered in the current WFRP world.`));
		return;
	}
	if (yp(e, t.name, r, i), !t.readyForCharacterCreation) {
		let e = t.reason ? `: ${t.reason}` : ".";
		i.push(Q({
			...r,
			field: "speciesKey"
		}, "species-table-runtime-not-ready", `Runtime species “${t.name}” is not ready for character creation${e}`));
	}
}
function yp(e, t, n, r) {
	(!e || e !== t) && r.push(Q({
		...n,
		field: "speciesKey"
	}, "species-table-name-mismatch", `WFRP reads the UUID-link label as the species name; this row must use “${t}”.`));
}
function bp() {
	return {
		scope: "species-table",
		section: "species-table"
	};
}
function xp(e) {
	return {
		...bp(),
		rowIndex: e
	};
}
function Sp(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = sf(n);
		e && t.set(e, (t.get(e) ?? 0) + 1);
	}
	return t;
}
//#endregion
//#region src/functions/species-builder/validation/index.ts
function Cp(e, t, n) {
	let r = of(t), i = [
		...qf(e.definitions, t),
		...bf(e.definitions),
		...zf(e.definitions, r),
		...ep(e.definitions, r),
		...mf(e.definitions, r),
		...sp(e.definitions, r)
	];
	return [...i, ...hp(e, n, t, i)];
}
//#endregion
//#region src/state/species-builder/chargen-validation.ts
function wp(e) {
	return { validationIssues: G(() => Cp(e.settings.value, e.catalog.value, e.speciesTable.value)) };
}
function Tp() {
	return {
		careerGroupNames: [],
		itemBaseNames: {
			skill: [],
			talent: [],
			trait: []
		},
		randomTalentSources: [],
		runtimeSpecies: []
	};
}
//#endregion
//#region src/state/species-builder/index.ts
var Ep = rc("species-builder", () => {
	let e, t = {
		loadRandomTalentSources: () => pe().loadRandomTalentSources(),
		loadValidationCatalog: (e) => pe().loadValidationCatalog(e),
		loadSettings: () => pe().loadSettings(),
		loadSpeciesTable: () => pe().loadSpeciesTable(),
		openItemSheet: (e) => pe().openItemSheet(e),
		resolveItemDrop: (e, t) => pe().resolveItemDrop(e, t),
		resolveJournalDrop: (e) => pe().resolveJournalDrop(e),
		saveSettings: (e, t) => pe().saveSettings(e, t),
		saveSpeciesTable: (e, t) => pe().saveSpeciesTable(e, t)
	}, n = /* @__PURE__ */ M([]), r = /* @__PURE__ */ M(!1), i = /* @__PURE__ */ M(!1), a = /* @__PURE__ */ M(0), o = /* @__PURE__ */ M(!0), s = /* @__PURE__ */ M(!1), c = /* @__PURE__ */ M(""), l = /* @__PURE__ */ M(""), u = /* @__PURE__ */ M(""), d = /* @__PURE__ */ M([]), f = /* @__PURE__ */ M(Tp()), p = /* @__PURE__ */ M(""), m = /* @__PURE__ */ M(""), h = /* @__PURE__ */ M(""), g = G(() => n.value[a.value]), _ = G(() => gs(n.value)), v = G(() => ({
		autoRegisterSpeciesTable: r.value,
		definitions: _.value,
		showGeneratedConfigTab: i.value
	})), y = G(() => Hl(v.value)), b = G(() => Ss(ml(y.value))), x = rf({
		autoRegisterSpeciesTable: r,
		definitions: _,
		message: c
	}), { validationIssues: S } = wp({
		catalog: f,
		settings: v,
		speciesTable: x.preparedSpeciesTable
	}), { blockingSpeciesTableValidationMessages: C, blockingValidationIssues: w, canSave: ee, definitionsHaveUnsavedChanges: T, hasUnsavedChanges: te, settingsHaveUnsavedChanges: ne, speciesTableWillSave: re } = nf({
		autoRegisterSpeciesTable: r,
		isLoading: o,
		isSaving: s,
		loadError: l,
		normalizedSettings: y,
		savedDefinitionsSnapshot: m,
		savedSettingsSnapshot: p,
		savedSpeciesTableSnapshot: h,
		speciesTable: x.speciesTable,
		speciesTableSnapshot: x.speciesTableSnapshot,
		speciesTableValidationMessages: x.speciesTableValidationMessages,
		validationIssues: S
	}), E = zu({
		definitions: n,
		message: c,
		selectedDefinition: g,
		selectedIndex: a
	}), ie = af({
		definitions: n,
		message: c,
		selectedIndex: a
	}), { resolveDroppedItem: ae, ...oe } = tf({
		bridge: t,
		definitionActions: E,
		loadError: l,
		selectedDefinition: g,
		subspeciesActions: ie
	}), se = Nd({
		definitionActions: E,
		resolveDroppedItem: ae,
		selectedDefinition: g
	}), D = wu({
		bridge: t,
		definitionActions: E,
		loadError: l,
		resolveDroppedItem: ae,
		selectedDefinition: g,
		subspeciesActions: ie
	});
	async function ce() {
		o.value = !0, l.value = "", u.value = "", c.value = "";
		try {
			let e = await pe().loadSettings(), [t, o, s] = await Promise.all([
				pe().loadRandomTalentSources(),
				pe().loadSpeciesTable(),
				pe().loadValidationCatalog(e.definitions.map(({ key: e }) => e))
			]);
			r.value = e.autoRegisterSpeciesTable, n.value = Cs(e.definitions), d.value = t, i.value = e.showGeneratedConfigTab, a.value = n.value.length > 0 ? 0 : -1, x.hydrateSpeciesTable(o), f.value = s, p.value = bs(e), m.value = JSON.stringify(e.definitions), h.value = mu(o.draft);
		} catch (e) {
			l.value = ws(e);
		} finally {
			o.value = !1;
		}
	}
	async function le() {
		if (!ee.value) return !1;
		s.value = !0, l.value = "", u.value = "", c.value = "";
		let e = ne.value, t = re.value, o = !1, d = [];
		try {
			if (e) {
				let e = T.value, t = await pe().saveSettings(y.value, e), s = t.settings;
				r.value = s.autoRegisterSpeciesTable, n.value = Cs(s.definitions), i.value = s.showGeneratedConfigTab, a.value = n.value.length > 0 ? Math.min(a.value, n.value.length - 1) : -1, p.value = bs(s), m.value = JSON.stringify(s.definitions), o = e, t.syncError && d.push(t.syncError);
			}
			if (t) {
				let e = await pe().saveSpeciesTable(x.preparedSpeciesTable.value, r.value);
				x.hydrateSpeciesTable(e), h.value = mu(e.draft), e.registrationError && d.push(e.registrationError);
			}
			return d.length > 0 ? u.value = d.join(" ") : o ? c.value = "Saved. Refresh Foundry before using changed species in character generation." : t ? c.value = "Saved the world Species table." : c.value = "Saved Species Builder settings.", o;
		} catch (e) {
			return u.value = ws(e), o;
		} finally {
			s.value = !1;
		}
	}
	function ue(e) {
		i.value = e, c.value = "";
	}
	function de(e) {
		r.value = e, c.value = "";
	}
	function fe(t) {
		e = t;
	}
	function pe() {
		if (!e) throw Error("Species Builder has not been connected to its Foundry bridge.");
		return e;
	}
	return {
		...E,
		...D,
		...se,
		...oe,
		...x,
		...ie,
		autoRegisterSpeciesTable: r,
		blockingSpeciesTableValidationMessages: C,
		blockingValidationIssues: w,
		canSave: ee,
		configure: fe,
		definitions: n,
		generatedConfigText: b,
		hasUnsavedChanges: te,
		isLoading: o,
		isSaving: s,
		loadError: l,
		loadSettings: ce,
		message: c,
		randomTalentSources: d,
		saveChanges: le,
		saveError: u,
		selectedDefinition: g,
		selectedIndex: a,
		showGeneratedConfigTab: i,
		updateAutoRegisterSpeciesTable: de,
		updateShowGeneratedConfigTab: ue,
		validationIssues: S
	};
});
//#endregion
//#region src/state/species-builder/editor.ts
function Dp(e, t = {}) {
	let n = Ep();
	n.configure(e);
	async function r() {
		await n.saveChanges() && t.onSettingsSaved?.();
	}
	return {
		...n,
		...ic(n),
		saveChanges: r
	};
}
//#endregion
//#region src/view/apps/species-builder/components/dialog-focus.ts
function Op() {
	let e;
	function t() {
		let t = document.activeElement;
		e = t instanceof HTMLElement && t !== document.body ? t : void 0;
	}
	function n() {
		let t = e;
		e = void 0, On(() => {
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
var kp = ["onKeydown"], Ap = {
	key: 0,
	class: "dui-modal-box"
}, jp = { id: "species-builder-delete-message" }, Mp = { class: "dui-modal-action" }, Np = /* @__PURE__ */ F({
	__name: "DeleteConfirmationSubView",
	props: { message: {} },
	emits: ["close", "confirm"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ M(), a = Op();
		function o() {
			i.value?.close();
		}
		function s() {
			n.message && r("close"), a.restore();
		}
		return qn(() => n.message, async (e) => {
			e ? (a.capture(), await On(), n.message && !i.value?.open && i.value?.showModal()) : i.value?.open && i.value.close();
		}, {
			flush: "post",
			immediate: !0
		}), (t, n) => (R(), z("dialog", {
			ref_key: "dialog",
			ref: i,
			class: "dui-modal",
			"aria-describedby": "species-builder-delete-message",
			"aria-labelledby": "species-builder-delete-title",
			onClose: s,
			onKeydown: Xo(Jo(o, ["stop", "prevent"]), ["esc"]),
			onKeyup: n[1] ||= Xo(Jo(() => {}, ["stop"]), ["esc"])
		}, [e.message ? (R(), z("div", Ap, [
			n[2] ||= V("h2", { id: "species-builder-delete-title" }, "Confirm Deletion", -1),
			V("p", jp, k(e.message), 1),
			V("div", Mp, [V("button", {
				class: "dui-btn dui-btn-error",
				type: "button",
				onClick: n[0] ||= (e) => r("confirm")
			}, "Delete"), V("button", {
				autofocus: "",
				class: "dui-btn",
				type: "button",
				onClick: o
			}, "Cancel")])
		])) : W("", !0), n[3] ||= V("form", {
			class: "dui-modal-backdrop",
			method: "dialog"
		}, [V("button", {
			"aria-label": "Cancel deletion",
			type: "submit"
		}, "Close")], -1)], 40, kp));
	}
});
//#endregion
//#region src/view/apps/species-builder/tabs/species/species-key-suggestions.ts
function Pp(e) {
	return rs(e.name) || "new-species";
}
function Fp(e) {
	return rs(e.name) || "new-subspecies";
}
//#endregion
//#region src/view/apps/species-builder/components/SpeciesBuilderEditorContext.vue?vue&type=script&setup=true&lang.ts
var Ip = {
	"aria-label": "Current species and save state",
	class: "dui-footer dui-footer-horizontal app:sticky app:bottom-0 app:z-10 app:items-center app:justify-between app:gap-3 app:bg-base-200 app:px-3 app:py-2"
}, Lp = { class: "app:flex app:min-w-0 app:items-center app:gap-2" }, Rp = {
	key: 0,
	class: "dui-badge dui-badge-ghost"
}, zp = {
	"aria-atomic": "true",
	"aria-live": "polite",
	role: "status"
}, Bp = ["disabled"], Vp = /* @__PURE__ */ F({
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
		let n = e, r = t, i = G(() => n.entityName?.trim() || n.definition?.name.trim() || n.definition?.key.trim() || (n.definition ? "Untitled Species" : "Species Builder")), a = G(() => n.entityKey?.trim() ? n.entityKey.trim() : n.definition ? n.definition.key.trim() || Pp(n.definition) : ""), o = G(() => n.isLoading ? {
			label: "Reloading species data...",
			statusClass: "dui-status-info"
		} : n.loadError ? {
			label: "Error: review the message in the editor",
			statusClass: "dui-status-error"
		} : n.isSaving ? {
			label: "Saving changes...",
			statusClass: "dui-status-info"
		} : n.hasValidationErrors ? {
			label: "Character-creation issues: fix before saving",
			statusClass: "dui-status-error"
		} : n.hasUnsavedChanges ? {
			label: "Unsaved changes",
			statusClass: "dui-status-warning"
		} : {
			label: "All changes saved",
			statusClass: "dui-status-success"
		});
		return (t, n) => (R(), z("footer", Ip, [V("div", Lp, [
			V("span", {
				"aria-hidden": "true",
				class: O(["dui-status", o.value.statusClass])
			}, null, 2),
			V("strong", null, k(i.value), 1),
			a.value ? (R(), z("span", Rp, k(a.value), 1)) : W("", !0),
			V("span", zp, k(o.value.label), 1)
		]), V("button", {
			class: "dui-btn dui-btn-primary dui-btn-sm",
			disabled: !e.canSave,
			type: "button",
			onClick: n[0] ||= (e) => r("save")
		}, [n[1] ||= V("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-floppy-disk"
		}, null, -1), U(" " + k(e.isSaving ? "Saving..." : "Save Changes"), 1)], 8, Bp)]));
	}
}), Hp = { class: "dui-navbar-start app:min-w-0 app:flex-1" }, Up = { class: "app:min-w-0" }, Wp = {
	"aria-label": "Current location",
	class: "dui-breadcrumbs app:py-0 app:text-sm"
}, Gp = { class: "app:m-0 app:p-0" }, Kp = { key: 0 }, qp = { key: 1 }, Jp = { "aria-current": "page" }, Yp = { class: "dui-navbar-end" }, Xp = { class: "dui-dropdown-content dui-card dui-card-border app:z-30 app:w-52 app:bg-base-100" }, Zp = { class: "dui-menu dui-menu-sm app:w-full" }, Qp = ["disabled"], $p = { key: 0 }, em = ["disabled"], tm = { key: 1 }, nm = ["disabled"], rm = /* @__PURE__ */ F({
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
		let n = t, r = /* @__PURE__ */ M(), i = /* @__PURE__ */ M(), a = !1;
		function o(e) {
			l(), n(e);
		}
		function s() {
			l(), n("reload");
		}
		async function c(e) {
			let t = e.currentTarget instanceof HTMLElement ? e.currentTarget.closest(".wfrp4e-customizer-apps-root") : null;
			l(), n("selectSpecies"), await On(), t?.scrollTo({ top: 0 }), t?.querySelector("#species-builder-species-list-heading")?.focus();
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
		return (t, n) => (R(), z("header", {
			class: "dui-navbar app:sticky app:top-0 app:z-20 app:bg-base-200",
			onKeydown: Xo(u, ["esc"]),
			onKeyup: Xo(d, ["esc"])
		}, [
			V("div", Hp, [V("div", Up, [n[2] ||= V("h1", { class: "app:m-0 app:text-xl app:leading-tight" }, "Species Builder", -1), V("nav", Wp, [V("ul", Gp, [
				e.definitionName ? (R(), z("li", Kp, [V("button", {
					class: "dui-btn dui-btn-link dui-btn-xs",
					type: "button",
					onClick: c
				}, " Species List ")])) : W("", !0),
				e.definitionName ? (R(), z("li", qp, [V("span", null, k(e.definitionName), 1)])) : W("", !0),
				V("li", null, [V("span", Jp, k(e.contextLabel), 1)])
			])])])]),
			V("div", Yp, [V("details", {
				ref_key: "actionsDropdown",
				ref: r,
				class: "dui-dropdown dui-dropdown-end"
			}, [n[6] ||= V("summary", { class: "dui-btn dui-btn-outline dui-btn-sm" }, [V("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-ellipsis"
			}), U(" Actions ")], -1), V("div", Xp, [V("ul", Zp, [
				V("li", { onClick: l }, [Hr(t.$slots, "actions", { dialogHost: i.value })]),
				V("li", null, [V("button", {
					disabled: e.isBusy,
					type: "button",
					onClick: s
				}, [...n[3] ||= [V("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-rotate-right"
				}, null, -1), U(" Reload ", -1)]], 8, Qp)]),
				e.canManageDefinition ? (R(), z("li", $p, [V("button", {
					disabled: e.isBusy,
					type: "button",
					onClick: n[0] ||= (e) => o("duplicate")
				}, [...n[4] ||= [V("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-copy"
				}, null, -1), U(" Duplicate ", -1)]], 8, em)])) : W("", !0),
				e.canManageDefinition ? (R(), z("li", tm, [V("button", {
					class: "app:text-error",
					disabled: e.isBusy,
					type: "button",
					onClick: n[1] ||= (e) => o("delete")
				}, [...n[5] ||= [V("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), U(" Delete ", -1)]], 8, nm)])) : W("", !0)
			])])], 512)]),
			V("div", {
				ref_key: "portabilityDialogHost",
				ref: i
			}, null, 512)
		], 32));
	}
}), im = {
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
}, am = {
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
function om(e) {
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
function sm(e, t) {
	return e.kind === "project" ? t.activeTab === e.tab && (e.tab !== "species" || !t.isEditorOpen) : !t.isEditorOpen || t.activeTab !== "species" ? !1 : e.kind === "editor" ? t.activeEditorTab === e.tab : t.activeEditorTab === "tables" && t.activeTableTab === e.tab;
}
function cm(e, t) {
	return t.isBusy || e.kind !== "project" && !t.hasSelectedDefinition;
}
function lm(e) {
	return e.kind === "project" ? e.tab === "species" || e.tab === "species-table" ? e.tab : void 0 : e.tab;
}
function um(e, t) {
	let n = {};
	for (let r of e) {
		if (r.scope === "species-table") {
			dm(n, "species-table");
			continue;
		}
		dm(n, "species"), r.definitionIndex === t && dm(n, r.scope === "subspecies" ? "subspecies" : r.section);
	}
	return n;
}
function dm(e, t) {
	e[t] = (e[t] ?? 0) + 1;
}
function fm(e, t, n, r) {
	return e === "settings" ? {
		description: "Control optional authoring tools and sample definitions.",
		label: "Settings"
	} : e === "species-table" ? {
		description: "Configure the weighted world table WFRP uses to roll a character's species.",
		label: "Species Table"
	} : e === "wfrp-config" ? {
		description: "Review the WFRP config generated from the current draft.",
		label: "WFRP Config"
	} : t ? n === "tables" ? am[r] : im[n] : {
		description: "Choose a species to edit or create a new definition.",
		label: "Custom Species"
	};
}
//#endregion
//#region src/view/apps/species-builder/components/SpeciesBuilderValidationDot.vue?vue&type=script&setup=true&lang.ts
var pm = ["title"], mm = { class: "app:sr-only" }, hm = /* @__PURE__ */ F({
	__name: "SpeciesBuilderValidationDot",
	props: {
		count: {},
		label: {}
	},
	setup(e) {
		return (t, n) => e.count > 0 ? (R(), z("span", {
			key: 0,
			class: "app:ml-auto app:inline-flex app:items-center",
			title: `${e.count} ${e.label}`
		}, [n[0] ||= V("span", {
			"aria-hidden": "true",
			class: "dui-status dui-status-error dui-status-sm"
		}, null, -1), V("span", mm, k(e.count) + " " + k(e.label), 1)], 8, pm)) : W("", !0);
	}
}), gm = { class: "app:w-48 app:shrink-0" }, _m = {
	"aria-label": "Species Builder sections",
	class: "app:sticky app:top-20"
}, vm = { class: "dui-menu dui-menu-sm app:w-full app:rounded-box app:bg-base-200" }, ym = { class: "dui-menu-title" }, bm = [
	"aria-current",
	"disabled",
	"onClick"
], xm = /* @__PURE__ */ F({
	__name: "SpeciesBuilderNavigation",
	props: {
		activeEditorTab: {},
		activeTableTab: {},
		activeTab: {},
		hasSelectedDefinition: { type: Boolean },
		isBusy: { type: Boolean },
		isEditorOpen: { type: Boolean },
		showGeneratedConfigTab: { type: Boolean },
		validationCounts: {}
	},
	emits: [
		"selectEditorTab",
		"selectTableTab",
		"selectTab"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = G(() => om(n.showGeneratedConfigTab)), a = G(() => ({
			activeEditorTab: n.activeEditorTab,
			activeTableTab: n.activeTableTab,
			activeTab: n.activeTab,
			hasSelectedDefinition: n.hasSelectedDefinition,
			isBusy: n.isBusy,
			isEditorOpen: n.isEditorOpen
		}));
		async function o(e, t) {
			if (cm(e, a.value)) return;
			let n = t.currentTarget instanceof HTMLElement ? t.currentTarget.closest(".wfrp4e-customizer-apps-root") : null;
			e.kind === "project" ? r("selectTab", e.tab) : e.kind === "editor" ? r("selectEditorTab", e.tab) : r("selectTableTab", e.tab), await On(), n?.scrollTo({ top: 0 });
		}
		function s(e) {
			let t = lm(e);
			return t ? n.validationCounts[t] ?? 0 : 0;
		}
		return (e, t) => (R(), z("aside", gm, [V("nav", _m, [V("ul", vm, [(R(!0), z(L, null, I(i.value, (e) => (R(), z(L, { key: e.key }, [V("li", ym, [V("span", null, k(e.label), 1)]), (R(!0), z(L, null, I(e.entries, (e) => (R(), z("li", { key: `${e.kind}-${e.tab}` }, [V("button", {
			"aria-current": N(sm)(e, a.value) ? "page" : void 0,
			class: O({ "dui-menu-active": N(sm)(e, a.value) }),
			disabled: N(cm)(e, a.value),
			type: "button",
			onClick: (t) => o(e, t)
		}, [
			V("i", {
				"aria-hidden": "true",
				class: O(e.icon)
			}, null, 2),
			V("span", null, k(e.label), 1),
			H(hm, {
				count: s(e),
				label: "character-creation issues"
			}, null, 8, ["count"])
		], 10, bm)]))), 128))], 64))), 128))])])]));
	}
}), Sm = { "aria-live": "polite" }, Cm = {
	key: 0,
	role: "alert",
	class: "dui-alert dui-alert-error app:m-0"
}, wm = {
	key: 1,
	role: "alert",
	class: "dui-alert dui-alert-error app:m-0"
}, Tm = {
	key: 2,
	role: "alert",
	class: "dui-alert dui-alert-warning app:m-0"
}, Em = {
	key: 3,
	class: "dui-alert dui-alert-info app:m-0"
}, Dm = /* @__PURE__ */ F({
	__name: "SpeciesBuilderStatus",
	props: {
		chargenIssueCount: {},
		chargenIssueMessage: {},
		loadError: {},
		message: {},
		validationMessage: {}
	},
	setup(e) {
		return (t, n) => (R(), z("section", Sm, [e.loadError ? (R(), z("p", Cm, [n[0] ||= V("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-circle-exclamation"
		}, null, -1), V("span", null, k(e.loadError), 1)])) : e.chargenIssueCount > 0 ? (R(), z("p", wm, [n[1] ||= V("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-circle-exclamation"
		}, null, -1), V("span", null, k(e.chargenIssueCount) + " character-creation " + k(e.chargenIssueCount === 1 ? "issue" : "issues") + ". Open the red-marked sections to fix them." + k(e.chargenIssueMessage ? ` ${e.chargenIssueMessage}` : ""), 1)])) : e.validationMessage ? (R(), z("p", Tm, [n[2] ||= V("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-triangle-exclamation"
		}, null, -1), V("span", null, k(e.validationMessage), 1)])) : e.message ? (R(), z("p", Em, [n[3] ||= V("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-circle-info"
		}, null, -1), V("span", null, k(e.message), 1)])) : W("", !0)]));
	}
}), Om = new Set(Object.values(J));
function km(e, t) {
	if (!Y(e)) return `${t} must be a JSON object.`;
	for (let [n, r] of Object.entries(e)) {
		if (!Om.has(n)) return `${t}.${n} is not a supported WFRP characteristic.`;
		let e = Jm(r, `${t}.${n}`, "string formula");
		if (e) return e;
	}
	return "";
}
function Am(e, t) {
	return Km(e, t, [
		"die",
		"feet",
		"inches"
	], (e, t) => Gm(e, t, [
		["die", Jm],
		["feet", Ym],
		["inches", Ym]
	], /* @__PURE__ */ new Set()));
}
function jm(e, t) {
	return Km(e, t, ["formula"], (e, t) => Gm(e, t, [["formula", (e, t) => Jm(e, t, "string formula")]], new Set(["formula"])));
}
function Mm(e, t) {
	return Km(e, t, ["rows"], (e, t) => Gm(e, t, [["rows", Nm]], new Set(["rows"])));
}
function Nm(e, t) {
	return qm(e, t, (e, t) => Fm(e, t));
}
function Pm(e, t) {
	return qm(e, t, (e, t) => Fm(e, t));
}
function Fm(e, t) {
	return Km(e, t, ["name"], (e, t) => Gm(e, t, [["name", Jm]], new Set(["name"])));
}
function Im(e, t) {
	return qm(e, t, (e, t) => Km(e, t, ["choices"], (e, t) => Gm(e, t, [["choices", (e, t) => zm(e, t, !0)]], new Set(["choices"]))));
}
function Lm(e, t) {
	return qm(e, t, (e, t) => Km(e, t, ["replacement", "rolled"], (e, t) => Gm(e, t, [["replacement", Fm], ["rolled", Fm]], new Set(["replacement", "rolled"]))));
}
function Rm(e, t) {
	return qm(e, t, (e, t) => Km(e, t, ["replacements", "rolled"], (e, t) => Gm(e, t, [["replacements", (e, t) => zm(e, t, !0)], ["rolled", Fm]], new Set(["replacements", "rolled"]))));
}
function zm(e, t, n) {
	return n && Array.isArray(e) && e.length === 0 ? `${t} must contain at least one entry.` : Pm(e, t);
}
function Bm(e, t) {
	return qm(e, t, Jm);
}
function Vm(e, t) {
	return Wm(e, t, Jm);
}
function Hm(e, t) {
	return Wm(e, t, Ym);
}
function Um(e, t) {
	return Wm(e, t, Bm);
}
function Wm(e, t, n) {
	if (!Y(e)) return `${t} must be a JSON object.`;
	for (let [r, i] of Object.entries(e)) {
		if (!r.trim()) return `${t} must not contain an empty key.`;
		let e = n(i, `${t}[${JSON.stringify(r)}]`);
		if (e) return e;
	}
	return "";
}
function Gm(e, t, n, r) {
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
function Km(e, t, n, r) {
	if (!Y(e)) return `${t} must be a JSON object.`;
	let i = Object.keys(e).find((e) => !n.includes(e));
	return i ? `${t}.${i} is not supported by species definition export version 1.` : r(e, t);
}
function qm(e, t, n) {
	if (!Array.isArray(e)) return `${t} must be an array.`;
	for (let [r, i] of e.entries()) {
		let e = n(i, `${t}[${r}]`);
		if (e) return e;
	}
	return "";
}
function Jm(e, t, n = "non-empty string") {
	return typeof e == "string" && e.trim() ? "" : `${t} must be a ${n}.`;
}
function Ym(e, t) {
	return typeof e == "number" && Number.isFinite(e) ? "" : `${t} must be a finite number.`;
}
function Xm(e, t) {
	return typeof e == "boolean" ? "" : `${t} must be a boolean.`;
}
//#endregion
//#region src/functions/species-builder/definition-portability/validation.ts
var Zm = [
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
], Qm = [
	...Zm,
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
], $m = [
	...Zm,
	"skillsAdded",
	"skillsRemoved",
	"talentsAdded",
	"talentsRemoved",
	"traitsAdded",
	"traitsRemoved"
];
function eh(e) {
	return Km(e, "definition", Qm, th);
}
function th(e, t) {
	return nh(e, t) || Gm(e, t, [
		["includeInExtraSpecies", Xm],
		["age", Jm],
		["height", Am],
		["careerReplacementRows", Rm],
		["careerReplacements", Um],
		["linkedSkills", Pm],
		["linkedTalents", Im],
		["linkedTraits", Pm],
		["skills", Bm],
		["talents", Bm],
		["traits", Bm],
		["subspecies", rh]
	], new Set(["includeInExtraSpecies"]));
}
function nh(e, t) {
	return Gm(e, t, [
		["key", ih],
		["name", Jm],
		["characteristics", km],
		["randomTalents", Hm],
		["talentReplacementRows", Lm],
		["talentReplacements", Vm],
		["movement", Ym],
		["fate", Ym],
		["resilience", Ym],
		["extra", Ym],
		["woundFormula", jm],
		["careerTable", Mm]
	], new Set(["key", "name"]));
}
function rh(e, t) {
	let n = qm(e, t, (e, t) => Km(e, t, $m, (e, t) => nh(e, t) || Gm(e, t, [
		["skillsAdded", Bm],
		["skillsRemoved", Bm],
		["talentsAdded", Bm],
		["talentsRemoved", Bm],
		["traitsAdded", Bm],
		["traitsRemoved", Bm]
	], /* @__PURE__ */ new Set())));
	if (n || !Array.isArray(e)) return n;
	let r = /* @__PURE__ */ new Set();
	for (let [n, i] of e.entries()) {
		let e = rs(i.key);
		if (r.has(e)) return `${t}[${n}].key duplicates normalized subspecies key ${JSON.stringify(e)}.`;
		r.add(e);
	}
	return "";
}
function ih(e, t) {
	return Jm(e, t) || (rs(e) ? "" : `${t} must contain at least one ASCII letter or number.`);
}
//#endregion
//#region src/functions/species-builder/definition-portability/index.ts
var ah = "wfrp4e-customizer-species-definition";
function oh(e) {
	let t = ch(e);
	if (!t.ok) throw Error(`Species definition cannot be exported: ${t.error}`);
	let n = {
		definition: uh(t.definition),
		format: ah,
		version: 1
	};
	return JSON.stringify(n, null, 2);
}
function sh(e) {
	let t;
	try {
		t = JSON.parse(e);
	} catch (e) {
		return _h(`Import is not valid JSON: ${e instanceof Error ? e.message : "Unknown JSON error."}`);
	}
	if (!Y(t)) return _h("Import payload must be a JSON object.");
	let n = Object.keys(t).find((e) => ![
		"definition",
		"format",
		"version"
	].includes(e));
	if (n) return _h(`${n} is not supported by species definition export version 1.`);
	if (t.format !== "wfrp4e-customizer-species-definition") return _h(`Import payload format must be "${ah}".`);
	if (t.version !== 1) return _h("Import payload version must be 1.");
	if (!("definition" in t)) return _h("Import payload must include a definition object.");
	let r = eh(t.definition);
	if (r) return _h(r);
	let i = ch(t.definition);
	return i.ok ? {
		definition: uh(i.definition),
		ok: !0
	} : i;
}
function ch(e) {
	let t = lh(e);
	if (t) return _h(t);
	let n = Hl({
		definitions: [e],
		showGeneratedConfigTab: !1
	}).definitions[0];
	return n ? {
		definition: n,
		ok: !0
	} : _h("definition could not be normalized as a Species Builder definition.");
}
function lh(e) {
	if (!Y(e)) return "definition must be a JSON object.";
	if (typeof e.key != "string" || !e.key.trim()) return "definition.key must be a non-empty string.";
	if (typeof e.name != "string" || !e.name.trim()) return "definition.name must be a non-empty string.";
	if ("includeInExtraSpecies" in e && typeof e.includeInExtraSpecies != "boolean") return "definition.includeInExtraSpecies must be a boolean.";
	if ("subspecies" in e && !Array.isArray(e.subspecies)) return "definition.subspecies must be an array.";
	let t = e.subspecies ?? [];
	for (let [e, n] of t.entries()) {
		if (!Y(n)) return `definition.subspecies[${e}] must be a JSON object.`;
		if (typeof n.key != "string" || !n.key.trim()) return `definition.subspecies[${e}].key must be a non-empty string.`;
		if (typeof n.name != "string" || !n.name.trim()) return `definition.subspecies[${e}].name must be a non-empty string.`;
	}
	return "";
}
function uh(e) {
	let t = {
		...e,
		careerTable: gh(e.careerTable),
		subspecies: e.subspecies?.map(dh)
	};
	return e.linkedSkills && (t.linkedSkills = e.linkedSkills.map(fh), t.skills = pc(t.linkedSkills)), e.linkedTalents && (t.linkedTalents = e.linkedTalents.map(ph), t.talents = mc(t.linkedTalents)), e.linkedTraits && (t.linkedTraits = e.linkedTraits.map(fh), t.traits = pc(t.linkedTraits)), e.talentReplacementRows && (t.talentReplacementRows = e.talentReplacementRows.map(mh), t.talentReplacements = dc(t.talentReplacementRows)), e.careerReplacementRows && (t.careerReplacementRows = e.careerReplacementRows.map(hh), t.careerReplacements = fc(t.careerReplacementRows)), t;
}
function dh(e) {
	let t = {
		...e,
		careerTable: gh(e.careerTable)
	};
	return e.talentReplacementRows && (t.talentReplacementRows = e.talentReplacementRows.map(mh), t.talentReplacements = dc(t.talentReplacementRows)), t;
}
function fh(e) {
	return { name: oc(e) };
}
function ph(e) {
	return { choices: e.choices.map(fh) };
}
function mh(e) {
	return {
		replacement: fh(e.replacement),
		rolled: fh(e.rolled)
	};
}
function hh(e) {
	return {
		replacements: e.replacements.map(fh),
		rolled: fh(e.rolled)
	};
}
function gh(e) {
	return e ? { rows: e.rows.map((e) => ({ name: e.name })) } : void 0;
}
function _h(e) {
	return {
		error: e,
		ok: !1
	};
}
//#endregion
//#region src/view/apps/species-builder/components/SpeciesDefinitionPortability.vue?vue&type=script&setup=true&lang.ts
var vh = ["disabled"], yh = ["onKeydown"], bh = { class: "dui-modal-box" }, xh = { class: "dui-fieldset" }, Sh = {
	key: 0,
	class: "dui-alert dui-alert-warning",
	role: "status"
}, Ch = ["disabled", "value"], wh = ["disabled"], Th = { class: "dui-fieldset" }, Eh = ["disabled"], Dh = ["disabled", "value"], Oh = ["disabled"], kh = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, Ah = {
	key: 1,
	class: "dui-alert dui-alert-info"
}, jh = {
	key: 2,
	class: "dui-alert dui-alert-warning",
	role: "alert"
}, Mh = { "aria-live": "polite" }, Nh = { class: "dui-modal-action" }, Ph = ["disabled"], Fh = /* @__PURE__ */ F({
	__name: "SpeciesDefinitionPortability",
	props: {
		definition: {},
		dialogHost: {},
		existingKeys: {},
		isDisabled: { type: Boolean }
	},
	emits: ["importDefinition"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ M(), a = Op(), o = /* @__PURE__ */ M(""), s = /* @__PURE__ */ M(""), c = /* @__PURE__ */ M(""), l = /* @__PURE__ */ M(), u = G(() => {
			if (!n.definition) return {
				error: "Select a species before exporting.",
				text: ""
			};
			try {
				return {
					error: "",
					text: oh(n.definition)
				};
			} catch (e) {
				return {
					error: e instanceof Error ? e.message : "The selected species cannot be exported.",
					text: ""
				};
			}
		}), d = G(() => !!l.value && n.existingKeys.includes(rs(l.value?.key ?? "")));
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
			let e = sh(s.value);
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
		return (t, n) => (R(), z(L, null, [V("button", {
			class: "app:w-full app:whitespace-nowrap",
			disabled: e.isDisabled,
			type: "button",
			onClick: f
		}, [...n[1] ||= [V("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-arrow-right-arrow-left"
		}, null, -1), U(" Import / Export ", -1)]], 8, vh), e.dialogHost ? (R(), B(cr, {
			key: 0,
			to: e.dialogHost
		}, [V("dialog", {
			ref_key: "dialog",
			ref: i,
			"aria-labelledby": "species-portability-title",
			class: "dui-modal",
			onClose: m,
			onKeydown: Xo(Jo(p, ["stop", "prevent"]), ["esc"]),
			onKeyup: n[0] ||= Xo(Jo(() => {}, ["stop"]), ["esc"])
		}, [V("section", bh, [
			n[7] ||= V("h2", { id: "species-portability-title" }, "Transfer Species Definition", -1),
			n[8] ||= V("p", null, " Exported JSON contains project-owned authoring data and names, without Foundry document links. Imports are staged here and never replace the current draft. ", -1),
			V("fieldset", xh, [
				n[3] ||= V("legend", { class: "dui-fieldset-legend" }, "Export selected species", -1),
				u.value.error ? (R(), z("p", Sh, k(u.value.error), 1)) : (R(), z("textarea", {
					key: 1,
					"aria-label": "Species definition export JSON",
					class: "dui-textarea",
					disabled: e.isDisabled,
					readonly: "",
					rows: "10",
					value: u.value.text
				}, null, 8, Ch)),
				V("button", {
					class: "dui-btn",
					disabled: e.isDisabled || !u.value.text,
					type: "button",
					onClick: v
				}, [...n[2] ||= [V("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-copy"
				}, null, -1), U(" Copy Export ", -1)]], 8, wh)
			]),
			n[9] ||= V("div", { class: "dui-divider" }, "Import", -1),
			V("fieldset", Th, [
				n[4] ||= V("legend", { class: "dui-fieldset-legend" }, "Choose or paste a species export", -1),
				V("input", {
					accept: "application/json,.json",
					"aria-label": "Choose species definition JSON",
					class: "dui-file-input",
					disabled: e.isDisabled,
					type: "file",
					onChange: _
				}, null, 40, Eh),
				V("textarea", {
					"aria-label": "Species definition import JSON",
					class: "dui-textarea",
					disabled: e.isDisabled,
					placeholder: "Paste a Species Builder export here",
					rows: "8",
					value: s.value,
					onInput: h
				}, null, 40, Dh),
				V("button", {
					class: "dui-btn",
					disabled: e.isDisabled || !s.value.trim(),
					type: "button",
					onClick: g
				}, " Validate Import ", 8, Oh)
			]),
			o.value ? (R(), z("p", kh, [n[5] ||= V("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), V("span", null, k(o.value), 1)])) : l.value ? (R(), z("section", Ah, [n[6] ||= V("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-eye"
			}, null, -1), V("div", null, [
				V("strong", null, k(l.value.name), 1),
				V("p", null, "Key: " + k(l.value.key), 1),
				V("p", null, k(l.value.subspecies?.length ?? 0) + " subspecies", 1)
			])])) : W("", !0),
			d.value ? (R(), z("p", jh, " A species with key " + k(l.value?.key) + " already exists. Change the key in the import JSON and validate it again. ", 1)) : W("", !0),
			V("p", Mh, k(c.value), 1),
			V("div", Nh, [V("button", {
				class: "dui-btn dui-btn-primary",
				disabled: e.isDisabled || !l.value || d.value,
				type: "button",
				onClick: y
			}, " Add Imported Species ", 8, Ph), V("button", {
				class: "dui-btn dui-btn-ghost",
				type: "button",
				onClick: p
			}, "Close")])
		]), n[10] ||= V("form", {
			class: "dui-modal-backdrop",
			method: "dialog"
		}, [V("button", {
			"aria-label": "Close transfer dialog",
			type: "submit"
		}, "Close")], -1)], 40, yh)], 8, ["to"])) : W("", !0)], 64));
	}
});
//#endregion
//#region src/view/apps/species-builder/components/deletion.ts
function Ih(e) {
	let t = /* @__PURE__ */ M(null);
	function n() {
		let n = e.selectedDefinition.value;
		n && (t.value = {
			kind: "species",
			message: `Delete species "${Lh(n)}"?`
		});
	}
	function r(n) {
		let r = e.selectedDefinition.value?.subspecies?.[n];
		r && (t.value = {
			index: n,
			kind: "subspecies",
			message: `Delete subspecies "${Lh(r)}"?`
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
function Lh(e) {
	return e.name.trim() || e.key.trim() || "Untitled Species";
}
//#endregion
//#region src/functions/species-builder/example-species/goblins.ts
var Rh = {
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
}, zh = [
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
], Bh = [
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
], Vh = [
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
function Hh() {
	return Wh();
}
function Uh() {
	return Wh({ subspecies: [{
		careerTable: { rows: Vh },
		characteristics: {
			...Rh,
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
function Wh(e = {}) {
	return {
		age: "2d10+8",
		careerTable: { rows: zh },
		characteristics: Rh,
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
		skills: Bh,
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
function Gh() {
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
var Kh = [
	{
		createDefinition: Gh,
		description: "A deliberately extreme species for stress-testing formulas and generated Traits.",
		id: "viltrumite",
		label: "Viltrumite"
	},
	{
		createDefinition: Hh,
		description: "A Goblin player species seed using the sample species Journal direction.",
		id: "goblin",
		label: "Goblin"
	},
	{
		createDefinition: Uh,
		description: "A Goblin seed with Night Goblin configured as a subspecies.",
		id: "night-goblin",
		label: "Night Goblin"
	}
], qh = Kh.map(({ description: e, id: t, label: n }) => ({
	description: e,
	id: t,
	label: n
}));
function Jh() {
	return [Gh(), Uh()];
}
function Yh(e) {
	return Kh.find((t) => t.id === e)?.createDefinition();
}
//#endregion
//#region src/view/apps/species-builder/tabs/settings/SpeciesBuilderSettingsPanel.vue?vue&type=script&setup=true&lang.ts
var Xh = { class: "dui-card dui-card-border dui-card-sm" }, Zh = { class: "dui-card-body" }, Qh = { class: "dui-fieldset" }, $h = { class: "dui-label" }, eg = ["checked", "disabled"], tg = { class: "dui-fieldset" }, ng = { class: "dui-fieldset-legend" }, rg = { class: "dui-badge dui-badge-sm" }, ig = { class: "dui-label app:w-full app:items-start app:justify-between app:gap-3 app:whitespace-normal" }, ag = ["checked", "disabled"], og = { class: "dui-fieldset" }, sg = ["disabled", "value"], cg = ["value"], lg = { class: "dui-fieldset-label" }, ug = { class: "dui-join" }, dg = ["disabled"], fg = ["disabled"], pg = /* @__PURE__ */ F({
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
		let n = t, r = e, i = G(() => r.exampleSpeciesOptions.find((e) => e.id === r.selectedExampleSpeciesId));
		function a(e) {
			return e.target instanceof HTMLInputElement && e.target.checked;
		}
		function o(e) {
			return e.target instanceof HTMLSelectElement ? e.target.value : "";
		}
		function s() {
			return r.speciesTable.ownership === "external" ? r.speciesTable.isRegistered ? "External table active" : "External table" : r.speciesTable.ownership === "managed" ? r.speciesTable.isRegistered ? "Registered" : "Not registered" : "No managed table yet";
		}
		return (t, r) => (R(), z("section", Xh, [V("div", Zh, [
			r[15] ||= V("header", null, [V("h2", { class: "dui-card-title" }, "Species Builder Settings"), V("p", null, "Control optional tools and add sample definitions to the current draft.")], -1),
			V("fieldset", Qh, [
				r[6] ||= V("legend", { class: "dui-fieldset-legend" }, "Generated config", -1),
				r[7] ||= V("p", { class: "dui-fieldset-label" }, " Expose the read-only WFRP config generated from the current draft. ", -1),
				V("label", $h, [V("input", {
					class: "dui-checkbox",
					checked: e.showGeneratedConfigTab,
					disabled: e.isDisabled,
					type: "checkbox",
					onChange: r[0] ||= (e) => n("updateShowGeneratedConfigTab", a(e))
				}, null, 40, eg), r[5] ||= V("span", null, "Show WFRP config tab", -1)])
			]),
			V("fieldset", tg, [V("legend", ng, [r[8] ||= U(" World Species Table ", -1), V("span", rg, k(s()), 1)]), V("label", ig, [r[9] ||= V("span", null, [V("strong", null, "Register managed table on save"), V("span", { class: "app:block app:text-base-content/70" }, " When enabled, Save Changes points WFRP’s world Species table setting to the Builder-managed table. Turning this off stops future registration; it does not change or delete the table currently selected by WFRP. ")], -1), V("input", {
				class: "dui-toggle dui-toggle-primary app:shrink-0",
				checked: e.autoRegisterSpeciesTable,
				disabled: e.isDisabled,
				type: "checkbox",
				onChange: r[1] ||= (e) => n("updateAutoRegisterSpeciesTable", a(e))
			}, null, 40, ag)])]),
			r[16] ||= V("div", { class: "dui-divider" }, "Sample Definitions", -1),
			V("fieldset", og, [
				r[12] ||= V("legend", { class: "dui-fieldset-legend" }, "Example Species", -1),
				r[13] ||= V("p", { class: "dui-fieldset-label" }, " Add preconfigured species definitions matching sample species Journal material. ", -1),
				r[14] ||= V("label", {
					class: "dui-label",
					for: "species-builder-example"
				}, "Sample definition", -1),
				V("select", {
					id: "species-builder-example",
					class: "dui-select",
					disabled: e.isDisabled,
					value: e.selectedExampleSpeciesId,
					onChange: r[2] ||= (e) => n("updateSelectedExampleSpeciesId", o(e))
				}, [(R(!0), z(L, null, I(e.exampleSpeciesOptions, (e) => (R(), z("option", {
					key: e.id,
					value: e.id
				}, k(e.label), 9, cg))), 128))], 40, sg),
				V("p", lg, k(i.value?.description), 1),
				V("div", ug, [V("button", {
					class: "dui-btn dui-join-item",
					disabled: e.isDisabled || !e.selectedExampleSpeciesId,
					type: "button",
					onClick: r[3] ||= (t) => n("generateExampleSpecies", e.selectedExampleSpeciesId)
				}, [...r[10] ||= [V("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-scroll"
				}, null, -1), U(" Generate Selected ", -1)]], 8, dg), V("button", {
					class: "dui-btn dui-join-item",
					disabled: e.isDisabled || e.exampleSpeciesOptions.length === 0,
					type: "button",
					onClick: r[4] ||= (e) => n("generateAllExampleSpecies")
				}, [...r[11] ||= [V("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-layer-group"
				}, null, -1), U(" Generate All ", -1)]], 8, fg)])
			])
		])]));
	}
}), mg = { class: "dui-card-actions" }, hg = { class: "dui-badge" }, gg = ["disabled", "title"], _g = /* @__PURE__ */ F({
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
		return (t, r) => (R(), z("header", null, [
			(R(), B(zr(e.headingLevel), { class: "dui-card-title" }, {
				default: P(() => [U(k(e.title), 1)]),
				_: 1
			})),
			V("p", null, k(e.description), 1),
			V("div", mg, [V("span", hg, k(e.count), 1), V("button", {
				class: "dui-btn dui-btn-sm",
				disabled: e.isDisabled,
				title: e.actionTitle,
				type: "button",
				onClick: r[0] ||= (e) => n("add")
			}, [r[1] ||= V("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), U(" " + k(e.actionLabel), 1)], 8, gg)])
		]));
	}
}), vg = { class: "dui-card dui-card-border dui-card-sm" }, yg = { class: "dui-card-body" }, bg = { class: "app:flex app:flex-wrap app:items-center app:gap-2" }, xg = { class: "dui-badge dui-badge-sm" }, Sg = { class: "app:text-base-content/70" }, Cg = {
	key: 0,
	class: "dui-alert dui-alert-info",
	role: "status"
}, wg = {
	key: 1,
	class: "dui-alert dui-alert-warning",
	role: "status"
}, Tg = ["role"], Eg = {
	key: 3,
	class: "app:overflow-x-auto"
}, Dg = { class: "dui-table dui-table-sm" }, Og = { scope: "row" }, kg = ["for"], Ag = [
	"id",
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onChange"
], jg = { value: "" }, Mg = ["disabled", "value"], Ng = ["id"], Pg = ["for"], Fg = [
	"id",
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], Ig = ["for"], Lg = [
	"disabled",
	"title",
	"onClick"
], Rg = { class: "app:sr-only" }, zg = {
	key: 4,
	class: "dui-alert dui-alert-info",
	role: "status"
}, Bg = /* @__PURE__ */ F({
	__name: "SpeciesBuilderSpeciesTablePanel",
	props: {
		draft: {},
		isDisabled: { type: Boolean },
		isValidationBlocking: { type: Boolean },
		options: {},
		summaries: {},
		issues: {},
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
			return !e.speciesKey || !n.options.some((t) => t.key === e.speciesKey) || o(e.speciesKey, t) || d(t, "speciesKey").length > 0;
		}
		function c(e, t) {
			return !Number.isInteger(e.weight) || e.weight < 1 || d(t, "weight").length > 0;
		}
		function l(e, t) {
			let r = [];
			return !e.speciesKey || !n.options.some((t) => t.key === e.speciesKey) ? r.push("Choose a known species") : o(e.speciesKey, t) && r.push("Choose each species only once"), c(e, t) && r.push("Use a whole-number weight of at least 1"), r.push(...u(t).map((e) => e.message)), [...new Set(r)].join(". ");
		}
		function u(e) {
			return n.issues.filter((t) => t.rowIndex === e);
		}
		function d(e, t) {
			return u(e).filter((e) => e.field === t);
		}
		function f() {
			let e = n.issues.filter((e) => e.rowIndex === void 0).map((e) => e.message);
			return [...new Set([...n.validationMessages, ...e])];
		}
		function p() {
			return n.isValidationBlocking;
		}
		function m(e) {
			return !e || e.chance <= 0 ? "Invalid weight" : `${new Intl.NumberFormat(void 0, {
				maximumFractionDigits: 1,
				style: "percent"
			}).format(e.chance)} · ${e.range[0]}–${e.range[1]}`;
		}
		function h() {
			return n.draft.ownership === "external" ? n.draft.isRegistered ? "External table active" : "External table" : n.draft.ownership === "managed" ? n.draft.isRegistered ? "Registered" : "Not registered" : "No managed table yet";
		}
		return (t, n) => (R(), z("section", vg, [V("div", yg, [
			H(_g, {
				"action-label": "Add Species",
				"action-title": "Add a weighted species result",
				count: e.draft.rows.length,
				description: "Weights set each species' share of random character-creation rolls.",
				"is-disabled": e.isDisabled,
				"heading-level": "h2",
				title: "Random Species Table",
				onAdd: n[0] ||= (e) => r("addRow")
			}, null, 8, ["count", "is-disabled"]),
			V("div", bg, [V("span", xg, k(h()), 1), V("span", Sg, k(e.draft.name), 1)]),
			e.draft.ownership === "external" ? (R(), z("div", Cg, [...n[1] ||= [V("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-copy"
			}, null, -1), V("span", null, " This is the current WFRP source table. On Save, table changes create a Species Builder-managed copy and leave the imported source unchanged. ", -1)]])) : W("", !0),
			e.draft.requiresLinkRepair ? (R(), z("div", wg, [...n[2] ||= [V("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-link-slash"
			}, null, -1), V("span", null, " One or more results lack WFRP's required UUID-link description. Save to generate or reuse species Journals and repair both the result name and link label. ", -1)]])) : W("", !0),
			f()[0] ? (R(), z("div", {
				key: 2,
				class: O(["dui-alert", p() ? "dui-alert-error" : "dui-alert-info"]),
				role: p() ? "alert" : "status"
			}, [n[3] ||= V("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-triangle-exclamation"
			}, null, -1), V("span", null, [U(k(p() ? "Fix before saving:" : "Imported table needs attention:") + " " + k(f()[0]) + " ", 1), f().length > 1 ? (R(), z(L, { key: 0 }, [U(" (" + k(f().length) + " issues total) ", 1)], 64)) : W("", !0)])], 10, Tg)) : W("", !0),
			e.draft.rows.length ? (R(), z("div", Eg, [V("table", Dg, [
				n[5] ||= V("caption", { class: "app:sr-only" }, " Weighted results for the world WFRP Species table ", -1),
				n[6] ||= V("thead", null, [V("tr", null, [
					V("th", { scope: "col" }, "#"),
					V("th", { scope: "col" }, "Species"),
					V("th", { scope: "col" }, "Weight"),
					V("th", { scope: "col" }, "Chance / range"),
					V("th", { scope: "col" }, [V("span", { class: "app:sr-only" }, "Actions")])
				])], -1),
				V("tbody", null, [(R(!0), z(L, null, I(e.draft.rows, (t, d) => (R(), z("tr", {
					key: t.resultId ?? `new-${d}`,
					class: O({ "app:outline app:outline-1 app:outline-error": u(d).length > 0 })
				}, [
					V("th", Og, k(d + 1), 1),
					V("td", null, [
						V("label", {
							class: "app:sr-only",
							for: `species-table-species-${d}`
						}, " Species for row " + k(d + 1), 9, kg),
						V("select", {
							id: `species-table-species-${d}`,
							"aria-describedby": l(t, d) ? `species-table-row-error-${d}` : void 0,
							"aria-invalid": s(t, d) || void 0,
							class: O(["dui-select dui-select-sm app:min-w-48 app:w-full", { "dui-select-error": s(t, d) }]),
							disabled: e.isDisabled,
							value: t.speciesKey,
							onChange: (e) => r("updateRowKey", d, i(e))
						}, [V("option", jg, k(t.name ? `Unrecognized: ${t.name}` : "Choose a species"), 1), (R(!0), z(L, null, I(e.options, (e) => (R(), z("option", {
							key: e.key,
							disabled: o(e.key, d),
							value: e.key
						}, k(e.label), 9, Mg))), 128))], 42, Ag),
						l(t, d) ? (R(), z("span", {
							key: 0,
							id: `species-table-row-error-${d}`,
							class: "app:mt-1 app:block app:text-xs app:text-error"
						}, k(l(t, d)), 9, Ng)) : W("", !0)
					]),
					V("td", null, [V("label", {
						class: "app:sr-only",
						for: `species-table-weight-${d}`
					}, " Weight for row " + k(d + 1), 9, Pg), V("input", {
						id: `species-table-weight-${d}`,
						"aria-describedby": l(t, d) ? `species-table-row-error-${d}` : void 0,
						"aria-invalid": c(t, d) || void 0,
						class: O(["dui-input dui-input-sm app:w-24", { "dui-input-error": c(t, d) }]),
						disabled: e.isDisabled,
						inputmode: "numeric",
						min: "1",
						step: "1",
						type: "number",
						value: t.weight,
						onInput: (e) => r("updateRowWeight", d, a(e))
					}, null, 42, Fg)]),
					V("td", null, [V("output", { for: `species-table-weight-${d}` }, k(m(e.summaries[d])), 9, Ig)]),
					V("td", null, [V("button", {
						class: "dui-btn dui-btn-error dui-btn-outline dui-btn-sm",
						disabled: e.isDisabled,
						title: `Remove ${t.name || `row ${d + 1}`}`,
						type: "button",
						onClick: (e) => r("removeRow", d)
					}, [n[4] ||= V("i", {
						"aria-hidden": "true",
						class: "fa-solid fa-trash"
					}, null, -1), V("span", Rg, "Remove row " + k(d + 1), 1)], 8, Lg)])
				], 2))), 128))])
			])])) : (R(), z("div", zg, [...n[7] ||= [V("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), V("span", null, "Add at least one species to create a managed world table.", -1)]]))
		])]));
	}
}), Vg = ["aria-current"], Hg = { class: "dui-list-col-grow app:flex app:flex-wrap app:items-center app:gap-2" }, Ug = { class: "app:flex app:flex-wrap app:items-center app:gap-1" }, Wg = {
	key: 0,
	class: "dui-badge dui-badge-ghost dui-badge-sm"
}, Gg = ["title"], Kg = ["aria-label", "disabled"], qg = /* @__PURE__ */ F({
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
		title: {},
		validationCount: { default: 0 }
	},
	emits: ["open"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (R(), z("li", {
			class: O(["dui-list-row", { "app:outline app:outline-1 app:outline-error": e.validationCount > 0 }]),
			"aria-current": e.isSelected ? "true" : void 0
		}, [
			V("i", {
				"aria-hidden": "true",
				class: O(e.iconClass)
			}, null, 2),
			V("span", Hg, [V("strong", null, k(e.title), 1), V("span", Ug, [
				V("span", { class: O(["dui-badge dui-badge-sm", {
					"dui-badge-info": e.isSelected,
					"dui-badge-ghost": !e.isSelected
				}]) }, k(e.entryKey), 3),
				e.meta ? (R(), z("span", Wg, k(e.meta), 1)) : W("", !0),
				e.validationCount > 0 ? (R(), z("span", {
					key: 1,
					class: "dui-badge dui-badge-error dui-badge-sm",
					title: `${e.validationCount} character-creation issues`
				}, [
					r[1] ||= V("span", {
						"aria-hidden": "true",
						class: "dui-status dui-status-error dui-status-xs"
					}, null, -1),
					U(" " + k(e.validationCount) + " ", 1),
					r[2] ||= V("span", { class: "app:sr-only" }, "character-creation issues", -1)
				], 8, Gg)) : W("", !0)
			])]),
			V("button", {
				"aria-label": `Open ${e.title} editor`,
				class: "dui-btn dui-btn-outline dui-btn-sm",
				disabled: e.isDisabled,
				type: "button",
				onClick: r[0] ||= (e) => n("open")
			}, [V("i", {
				"aria-hidden": "true",
				class: O(e.editIconClass)
			}, null, 2), U(" " + k(e.isSpecies ? "Edit species" : "Edit"), 1)], 8, Kg)
		], 10, Vg));
	}
}), Jg = { class: "dui-card dui-card-border dui-card-sm" }, Yg = { class: "dui-card-body" }, Xg = { class: "app:flex app:items-start app:justify-between app:gap-4" }, Zg = { class: "dui-card-actions app:items-center" }, Qg = { class: "dui-badge dui-badge-sm" }, $g = ["disabled"], e_ = {
	key: 0,
	role: "status",
	class: "dui-alert dui-alert-info"
}, t_ = {
	key: 1,
	class: "dui-list"
}, n_ = /* @__PURE__ */ F({
	__name: "SpeciesBuilderOverview",
	props: {
		definitions: {},
		isDisabled: { type: Boolean },
		selectedIndex: {},
		validationCounts: {}
	},
	emits: ["addSpecies", "editSpecies"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			return e.name.trim() || e.key.trim() || "Untitled Species";
		}
		function i(e) {
			return e.key.trim() || Pp(e);
		}
		return (t, a) => (R(), z("section", Jg, [V("div", Yg, [V("header", Xg, [a[2] ||= V("div", null, [V("h2", {
			id: "species-builder-species-list-heading",
			class: "dui-card-title",
			tabindex: "-1"
		}, " Custom Species "), V("p", { class: "app:m-0" }, " Open a species to manage its details, grants, tables, and subspecies. ")], -1), V("div", Zg, [V("span", Qg, k(e.definitions.length), 1), V("button", {
			class: "dui-btn dui-btn-primary",
			disabled: e.isDisabled,
			type: "button",
			onClick: a[0] ||= (e) => n("addSpecies")
		}, [...a[1] ||= [V("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-plus"
		}, null, -1), U(" New Species ", -1)]], 8, $g)])]), e.definitions.length === 0 ? (R(), z("div", e_, [...a[3] ||= [V("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-circle-info"
		}, null, -1), V("span", null, "No species yet. Add one to begin.", -1)]])) : (R(), z("ul", t_, [(R(!0), z(L, null, I(e.definitions, (t, a) => (R(), B(qg, {
			key: `${t.key}-${a}`,
			"edit-icon-class": "fa-solid fa-pen-to-square",
			"entry-key": i(t),
			"icon-class": "fa-solid fa-users",
			"is-disabled": e.isDisabled,
			"is-selected": a === e.selectedIndex,
			"is-species": "",
			title: r(t),
			"validation-count": e.validationCounts[a] ?? 0,
			onOpen: (e) => n("editSpecies", a)
		}, null, 8, [
			"entry-key",
			"is-disabled",
			"is-selected",
			"title",
			"validation-count",
			"onOpen"
		]))), 128))]))])]));
	}
}), r_ = { class: "dui-card dui-card-border dui-card-sm" }, i_ = { class: "dui-card-body" }, a_ = { class: "dui-mockup-code" }, o_ = { tabindex: "0" }, s_ = /* @__PURE__ */ F({
	__name: "WfrpConfigPanel",
	props: { generatedConfigText: {} },
	setup(e) {
		return (t, n) => (R(), z("section", r_, [V("div", i_, [
			n[0] ||= V("h2", { class: "dui-card-title" }, "WFRP Config", -1),
			n[1] ||= V("p", null, " Read-only config generated from the current draft. This view grows with the outer application scroll area. ", -1),
			V("div", a_, [V("pre", o_, [V("code", null, k(e.generatedConfigText), 1)])])
		])]));
	}
}), c_ = {
	key: 0,
	id: "species-builder-panel-settings",
	"aria-label": "Species Builder settings",
	role: "region"
}, l_ = {
	key: 1,
	id: "species-builder-panel-species-table",
	"aria-label": "Random Species table",
	role: "region"
}, u_ = {
	key: 2,
	id: "species-builder-panel-wfrp-config",
	"aria-label": "Generated WFRP configuration",
	role: "region"
}, d_ = {
	key: 3,
	id: "species-builder-panel-species",
	"aria-label": "Species definitions",
	role: "region"
}, f_ = /* @__PURE__ */ F({
	__name: "SpeciesBuilderProjectPages",
	props: {
		activeTab: {},
		isDisabled: { type: Boolean }
	},
	emits: ["editSpecies"],
	setup(e, { emit: t }) {
		let n = t, r = Ep(), i = /* @__PURE__ */ M(qh[0]?.id ?? ""), a = G(() => r.definitions.map((e, t) => r.validationIssues.filter((e) => e.definitionIndex === t).length)), o = G(() => r.validationIssues.filter((e) => e.scope === "species-table"));
		function s() {
			r.addBlankDefinition(), n("editSpecies", r.selectedIndex);
		}
		function c(e) {
			let t = Yh(e);
			t && (r.addDefinition(t), n("editSpecies", r.selectedIndex));
		}
		function l() {
			r.addDefinitions(Jh()), n("editSpecies", r.selectedIndex);
		}
		return (t, u) => e.activeTab === "settings" ? (R(), z("section", c_, [H(pg, {
			"auto-register-species-table": N(r).autoRegisterSpeciesTable,
			"example-species-options": N(qh),
			"is-disabled": e.isDisabled,
			"selected-example-species-id": i.value,
			"show-generated-config-tab": N(r).showGeneratedConfigTab,
			"species-table": N(r).speciesTable,
			onGenerateAllExampleSpecies: l,
			onGenerateExampleSpecies: c,
			onUpdateAutoRegisterSpeciesTable: N(r).updateAutoRegisterSpeciesTable,
			onUpdateSelectedExampleSpeciesId: u[0] ||= (e) => i.value = e,
			onUpdateShowGeneratedConfigTab: N(r).updateShowGeneratedConfigTab
		}, null, 8, [
			"auto-register-species-table",
			"example-species-options",
			"is-disabled",
			"selected-example-species-id",
			"show-generated-config-tab",
			"species-table",
			"onUpdateAutoRegisterSpeciesTable",
			"onUpdateShowGeneratedConfigTab"
		])])) : e.activeTab === "species-table" ? (R(), z("section", l_, [H(Bg, {
			draft: N(r).preparedSpeciesTable,
			"is-disabled": e.isDisabled,
			"is-validation-blocking": N(r).blockingValidationIssues.some((e) => e.scope === "species-table"),
			issues: o.value,
			options: N(r).speciesTableOptions,
			summaries: N(r).speciesTableSummaries,
			"validation-messages": N(r).speciesTableValidationMessages,
			onAddRow: N(r).addSpeciesTableRow,
			onRemoveRow: N(r).removeSpeciesTableRow,
			onUpdateRowKey: N(r).updateSpeciesTableRowKey,
			onUpdateRowWeight: N(r).updateSpeciesTableRowWeight
		}, null, 8, [
			"draft",
			"is-disabled",
			"is-validation-blocking",
			"issues",
			"options",
			"summaries",
			"validation-messages",
			"onAddRow",
			"onRemoveRow",
			"onUpdateRowKey",
			"onUpdateRowWeight"
		])])) : e.activeTab === "wfrp-config" ? (R(), z("section", u_, [H(s_, { "generated-config-text": N(r).generatedConfigText }, null, 8, ["generated-config-text"])])) : (R(), z("section", d_, [H(n_, {
			definitions: N(r).definitions,
			"is-disabled": e.isDisabled,
			"selected-index": N(r).selectedIndex,
			"validation-counts": a.value,
			onAddSpecies: s,
			onEditSpecies: u[1] ||= (e) => n("editSpecies", e)
		}, null, 8, [
			"definitions",
			"is-disabled",
			"selected-index",
			"validation-counts"
		])]));
	}
});
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/editor-page-events.ts
function p_(e, t) {
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
var m_ = "wfrp4e-customizer-apps.document-drop", h_ = { class: "dui-list" }, g_ = [
	"aria-label",
	"disabled",
	"title",
	"onClick"
], __ = ["src"], v_ = {
	key: 1,
	"aria-hidden": "true",
	class: "fa-solid fa-scroll"
}, y_ = {
	key: 1,
	class: "dui-list-row"
}, b_ = /* @__PURE__ */ F({
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
		return (t, n) => (R(), z("ul", h_, [e.documents.length > 0 ? (R(!0), z(L, { key: 0 }, I(e.documents, (t) => (R(), z("li", {
			key: t.uuid,
			class: "dui-list-row"
		}, [V("button", {
			"aria-label": e.isClickable ? `Use ${t.name}` : void 0,
			class: "dui-btn dui-btn-ghost",
			disabled: !e.isClickable,
			title: e.isClickable ? t.name : void 0,
			type: "button",
			onClick: Jo((e) => r(t), ["stop"])
		}, [t.img ? (R(), z("img", {
			key: 0,
			alt: "",
			"aria-hidden": "true",
			src: t.img
		}, null, 8, __)) : (R(), z("i", v_)), V("span", null, k(t.name), 1)], 8, g_)]))), 128)) : (R(), z("li", y_, [n[0] ||= V("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-arrow-down"
		}, null, -1), V("span", null, k(e.emptyLabel), 1)]))]));
	}
}), x_ = { class: "dui-card-body dui-fieldset" }, S_ = ["for"], C_ = ["id", "value"], w_ = ["for"], T_ = ["id", "value"], E_ = { class: "dui-card-actions" }, D_ = /* @__PURE__ */ F({
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
		let n = t, r = pr(), i = pr();
		function a(e) {
			let t = e.target instanceof HTMLSelectElement ? e.target.value : "auto";
			(t === "Actor" || t === "auto" || t === "Item" || t === "JournalEntry" || t === "JournalEntryPage") && n("updateDocumentType", t);
		}
		function o(e) {
			n("updateDocumentValue", e.target instanceof HTMLInputElement ? e.target.value : "");
		}
		return (t, s) => (R(), z("form", {
			class: "dui-card dui-card-border dui-card-sm",
			onClick: s[2] ||= Jo(() => {}, ["stop"]),
			onSubmit: s[3] ||= Jo((e) => n("submit"), ["prevent"])
		}, [V("fieldset", x_, [
			s[6] ||= V("legend", { class: "dui-fieldset-legend" }, "Manual document entry", -1),
			V("label", {
				class: "dui-label",
				for: N(r)
			}, "Document type", 8, S_),
			V("select", {
				id: N(r),
				class: "dui-select",
				value: e.documentType,
				onChange: a
			}, [...s[4] ||= [Ca("<option value=\"auto\">Auto</option><option value=\"Item\">Item</option><option value=\"Actor\">Actor</option><option value=\"JournalEntry\">Journal Entry</option><option value=\"JournalEntryPage\">Journal Page</option>", 5)]], 40, C_),
			V("label", {
				class: "dui-label",
				for: N(i)
			}, "UUID or drop JSON", 8, w_),
			V("input", {
				id: N(i),
				class: "dui-input",
				value: e.documentValue,
				placeholder: "Compendium.package.pack.id",
				type: "text",
				onInput: o
			}, null, 40, T_),
			V("div", E_, [
				s[5] ||= V("button", {
					class: "dui-btn dui-btn-primary",
					type: "submit"
				}, "Use", -1),
				V("button", {
					class: "dui-btn",
					type: "button",
					onClick: s[0] ||= (e) => n("startPick")
				}, k(e.isPickingDocument ? "Waiting..." : "Pick Next Click"), 1),
				V("button", {
					class: "dui-btn dui-btn-ghost",
					type: "button",
					onClick: s[1] ||= (e) => n("close")
				}, "Cancel")
			])
		])], 32));
	}
}), O_ = ["aria-label", "aria-disabled"], k_ = { key: 0 }, A_ = {
	key: 1,
	class: "dui-alert dui-alert-info",
	role: "status"
}, j_ = { key: 2 }, M_ = {
	key: 4,
	class: "dui-card-actions"
}, N_ = ["disabled"], P_ = /* @__PURE__ */ F({
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
		let n = e, r = Un(m_);
		if (!r) throw Error("DocumentDrop requires a document drop bridge from its application host.");
		let i = Yr(), a = t, o = /* @__PURE__ */ M(!1), s = /* @__PURE__ */ M(!1), c = /* @__PURE__ */ M(!1), l = /* @__PURE__ */ M("auto"), u = /* @__PURE__ */ M(""), d, f = G(() => !!i.prompt), p = G(() => !!i.default), m = G(() => n.showPrompt && (f.value || n.title.length > 0)), h = G(() => n.showDocuments ? n.documents : []), g = G(() => n.manualEntryTrigger === "button"), _ = G(() => n.variant === "bare" ? [] : [
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
		return jr(() => {
			T();
		}), qn(() => n.disabled, (e) => {
			e && (o.value = !1, S());
		}), (t, n) => (R(), z("div", Da(t.$attrs, {
			class: _.value,
			"aria-label": e.title,
			"aria-disabled": e.disabled,
			role: "group",
			onDragenter: Jo(y, ["prevent"]),
			onDragover: Jo(y, ["prevent"]),
			onDragleave: v,
			onDrop: b
		}), [V("div", { class: O(e.variant === "bare" ? void 0 : "dui-card-body") }, [
			m.value ? (R(), z("div", {
				key: 0,
				class: O(["dui-alert dui-alert-info", { "dui-alert-outline": !o.value }])
			}, [
				n[3] ||= V("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-arrow-down"
				}, null, -1),
				V("div", null, [Hr(t.$slots, "prompt", {}, () => [V("strong", null, k(e.title), 1), e.description ? (R(), z("p", k_, k(e.description), 1)) : W("", !0)])]),
				V("span", { class: O(["dui-badge", { "dui-badge-info": o.value }]) }, k(o.value ? "Release to add" : "Drop zone"), 3)
			], 2)) : o.value ? (R(), z("div", A_, [n[4] ||= V("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-arrow-down"
			}, null, -1), V("span", null, "Release to add " + k(e.title.toLowerCase()) + ".", 1)])) : W("", !0),
			p.value ? (R(), z("div", j_, [Hr(t.$slots, "default")])) : W("", !0),
			e.showDocuments ? (R(), B(b_, {
				key: 3,
				documents: h.value,
				"empty-label": e.emptyDocumentLabel,
				"is-clickable": e.documentsClickable,
				onDocumentClicked: n[0] ||= (e) => a("documentClicked", e)
			}, null, 8, [
				"documents",
				"empty-label",
				"is-clickable"
			])) : W("", !0),
			g.value ? (R(), z("div", M_, [V("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.disabled,
				type: "button",
				onClick: Jo(C, ["stop"])
			}, k(s.value ? "Close Manual Entry" : "Manual Entry"), 9, N_)])) : W("", !0),
			s.value && !e.disabled ? (R(), B(D_, {
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
			])) : W("", !0)
		], 2)], 16, O_));
	}
}), F_ = [
	J.WeaponSkill,
	J.BallisticSkill,
	J.Strength,
	J.Toughness,
	J.Initiative,
	J.Agility,
	J.Dexterity,
	J.Intelligence,
	J.Willpower,
	J.Fellowship
], I_ = [
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
], L_ = [
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
], R_ = {
	skills: "Skills granted during character creation. Drop Skill items to link their sheets, or add names manually.",
	talents: "Talents granted during character creation. Multiple choices in one grant become WFRP's comma-separated either/or entry.",
	traits: "Traits granted by this species or subspecies. Drop Trait items to link their sheets, or add names manually."
};
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/validation-presentation.ts
function z_(e) {
	return typeof e == "string" ? [e] : e;
}
function B_(e, t, n, r) {
	return e.filter((e) => z_(t).includes(e.field ?? "") && e.rowIndex === n && e.choiceIndex === r);
}
function V_(e, t) {
	return e.filter((e) => z_(t).includes(e.field ?? ""));
}
function H_(e, t) {
	return e.filter((e) => e.rowIndex === t);
}
function U_(e, t, n) {
	return e.filter((e) => z_(t).includes(e.field ?? "") && e.rowIndex === n);
}
function W_(e, t, n) {
	return e.filter((e) => e.rowIndex === t && e.choiceIndex === n);
}
function G_(e) {
	return e.filter((e) => e.rowIndex === void 0);
}
function K_(e) {
	return [...new Set(e.map((e) => e.message))];
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/components/LinkedItemDropValue.vue?vue&type=script&setup=true&lang.ts
var q_ = [
	"aria-invalid",
	"disabled",
	"title",
	"value"
], J_ = {
	key: 3,
	class: "app:grid app:gap-1",
	role: "alert"
}, Y_ = /* @__PURE__ */ F({
	__name: "LinkedItemDropValue",
	props: {
		description: {},
		inputTitle: {},
		isDisabled: { type: Boolean },
		isEditable: { type: Boolean },
		issues: {},
		title: {},
		value: {}
	},
	emits: [
		"dropData",
		"openItem",
		"updateName"
	],
	setup(e, { emit: t }) {
		let n = e, r = t;
		function i(e) {
			return e.target instanceof HTMLInputElement ? e.target.value : "";
		}
		function a() {
			return K_(n.issues);
		}
		return (t, n) => (R(), B(P_, {
			description: e.description,
			disabled: e.isDisabled,
			documents: e.value.item ? [e.value.item] : [],
			"documents-clickable": !e.isDisabled,
			"empty-document-label": "No item selected.",
			"manual-entry-trigger": "button",
			"show-documents": !!e.value.item?.uuid,
			title: e.title,
			variant: "bare",
			onDocumentClicked: n[1] ||= (e) => r("openItem", e.uuid),
			onDropData: n[2] ||= (e) => r("dropData", e)
		}, {
			default: P(() => [!e.value.item?.uuid && e.isEditable ? (R(), z("input", {
				key: 0,
				"aria-invalid": e.issues.length > 0 || void 0,
				class: O(["dui-input", { "dui-input-error": e.issues.length > 0 }]),
				disabled: e.isDisabled,
				title: e.inputTitle,
				value: e.value.name,
				type: "text",
				onInput: n[0] ||= (e) => r("updateName", i(e))
			}, null, 42, q_)) : e.value.name ? (R(), z("div", {
				key: 1,
				class: O(["dui-alert", e.issues.length ? "dui-alert-error" : "dui-alert-info"])
			}, [V("strong", null, k(e.value.name), 1), n[3] ||= V("span", null, "Stored by name. Drop the matching Item to link its sheet.", -1)], 2)) : (R(), z("div", {
				key: 2,
				class: O(["dui-alert", { "dui-alert-error": e.issues.length > 0 }])
			}, [...n[4] ||= [V("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-arrow-down"
			}, null, -1), V("span", null, "No item selected.", -1)]], 2)), a().length ? (R(), z("div", J_, [(R(!0), z(L, null, I(a(), (e) => (R(), z("p", {
				key: e,
				class: "app:m-0 app:text-xs app:text-error"
			}, k(e), 1))), 128))])) : W("", !0)]),
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
}), X_ = ["disabled", "title"], Z_ = /* @__PURE__ */ F({
	__name: "EditableLinkedItemRow",
	props: {
		dropDescription: {},
		dropTitle: {},
		inputTitle: {},
		isDisabled: { type: Boolean },
		issues: {},
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
		return (t, r) => (R(), z("li", { class: O(["dui-list-row", e.issues.length ? "app:border app:border-error" : void 0]) }, [H(Y_, {
			class: "dui-list-col-grow",
			description: e.dropDescription,
			"input-title": e.inputTitle,
			"is-disabled": e.isDisabled,
			"is-editable": !0,
			issues: e.issues,
			title: e.dropTitle,
			value: e.value,
			onDropData: r[0] ||= (e) => n("dropData", e),
			onOpenItem: r[1] ||= (e) => n("openItem", e),
			onUpdateName: r[2] ||= (e) => n("updateName", e)
		}, null, 8, [
			"description",
			"input-title",
			"is-disabled",
			"issues",
			"title",
			"value"
		]), V("button", {
			disabled: e.isDisabled,
			title: e.removeTitle,
			class: "dui-btn dui-btn-error dui-btn-sm",
			type: "button",
			onClick: r[3] ||= (e) => n("remove")
		}, [...r[4] ||= [V("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-trash"
		}, null, -1), U(" Remove ", -1)]], 8, X_)], 2));
	}
}), Q_ = { class: "app:grid app:gap-3" }, $_ = { class: "dui-card-body" }, ev = { class: "app:flex app:items-start app:justify-between app:gap-4" }, tv = { class: "dui-card-title" }, nv = { class: "app:m-0" }, rv = { class: "dui-card-actions app:items-center" }, iv = { class: "dui-badge" }, av = [
	"disabled",
	"title",
	"onClick"
], ov = {
	key: 1,
	class: "dui-join"
}, sv = ["disabled"], cv = ["disabled"], lv = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, uv = {
	key: 1,
	class: "dui-list"
}, dv = {
	key: 2,
	class: "dui-list"
}, fv = { class: "dui-badge dui-badge-ghost" }, pv = { class: "dui-list-col-grow" }, mv = { key: 0 }, hv = { class: "dui-list" }, gv = { class: "dui-join" }, _v = ["disabled", "onClick"], vv = ["disabled", "onClick"], yv = {
	key: 3,
	class: "dui-alert",
	role: "status"
}, bv = /* @__PURE__ */ F({
	__name: "ArrayFields",
	props: {
		fields: {},
		isDisabled: { type: Boolean },
		issues: {},
		values: {}
	},
	setup(e) {
		let t = e, n = Ep(), r = G(() => L_.filter((e) => !t.fields || t.fields.includes(e.field)));
		function i(e) {
			return Vu(t.values[e], a(e));
		}
		function a(e) {
			return e === "skills" ? t.values.linkedSkills : t.values.linkedTraits;
		}
		function o() {
			return Hu(t.values.talents, t.values.linkedTalents);
		}
		function s(e) {
			return e === "talents" ? o().length : i(e).length;
		}
		function c(e) {
			return B_(t.issues, e);
		}
		function l(e) {
			return K_(c(e));
		}
		function u(e, n) {
			return U_(t.issues, e, n);
		}
		function d(e, n) {
			return B_(t.issues, "talents", e, n);
		}
		return (t, a) => (R(), z("div", Q_, [(R(!0), z(L, null, I(r.value, (t) => (R(), z("section", {
			key: t.field,
			class: "dui-card dui-card-border dui-card-sm"
		}, [V("div", $_, [
			V("header", ev, [V("div", null, [V("h3", tv, k(t.label), 1), V("p", nv, k(N(R_)[t.field]), 1)]), V("div", rv, [V("span", iv, k(s(t.field)), 1), t.field === "talents" ? (R(), z("div", ov, [V("button", {
				class: "dui-btn dui-btn-sm dui-join-item",
				disabled: e.isDisabled,
				title: "Add one guaranteed Talent",
				type: "button",
				onClick: a[0] ||= (e) => N(n).addTalentGrant("single")
			}, [...a[5] ||= [V("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), U(" Talent ", -1)]], 8, sv), V("button", {
				class: "dui-btn dui-btn-sm dui-join-item",
				disabled: e.isDisabled,
				title: "Add a Talent choice set. WFRP stores this as one comma-separated Talent entry.",
				type: "button",
				onClick: a[1] ||= (e) => N(n).addTalentGrant("choice")
			}, [...a[6] ||= [V("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-list-check"
			}, null, -1), U(" Choice Set ", -1)]], 8, cv)])) : (R(), z("button", {
				key: 0,
				class: "dui-btn dui-btn-sm",
				disabled: e.isDisabled,
				title: `Add a ${t.label.slice(0, -1)} row`,
				type: "button",
				onClick: (e) => N(n).addLinkedItem(N(Bu)(t.field))
			}, [...a[4] ||= [V("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), U(" Add ", -1)]], 8, av))])]),
			H(P_, {
				description: `Drop a WFRP ${t.label.slice(0, -1)} item to add it to this list.`,
				disabled: e.isDisabled,
				title: `Drop ${t.label}`,
				variant: "compact",
				onDropData: (e) => N(n).appendArrayFieldDrop(t.field, e)
			}, null, 8, [
				"description",
				"disabled",
				"title",
				"onDropData"
			]),
			l(t.field).length ? (R(), z("div", lv, [a[7] ||= V("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), V("div", null, [(R(!0), z(L, null, I(l(t.field), (e) => (R(), z("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, k(e), 1))), 128))])])) : W("", !0),
			t.field !== "talents" && i(t.field).length > 0 ? (R(), z("ul", uv, [(R(!0), z(L, null, I(i(t.field), (r, i) => (R(), B(Z_, {
				key: `${t.field}-${i}`,
				"drop-description": `Drop a WFRP ${t.label.slice(0, -1)} item to link or replace this row.`,
				"drop-title": `Link ${t.label.slice(0, -1)}`,
				"input-title": `${t.label.slice(0, -1)} name used by WFRP item lookup`,
				"is-disabled": e.isDisabled,
				issues: u(t.field, i),
				"remove-title": `Remove ${r.name}`,
				value: r,
				onDropData: (e) => N(n).setLinkedItemDrop(N(Bu)(t.field), i, e),
				onOpenItem: a[2] ||= (e) => N(n).openItemSheet(e),
				onRemove: (e) => N(n).removeLinkedItem(N(Bu)(t.field), i),
				onUpdateName: (e) => N(n).renameLinkedItem(N(Bu)(t.field), i, e)
			}, null, 8, [
				"drop-description",
				"drop-title",
				"input-title",
				"is-disabled",
				"issues",
				"remove-title",
				"value",
				"onDropData",
				"onRemove",
				"onUpdateName"
			]))), 128))])) : t.field === "talents" && o().length > 0 ? (R(), z("ul", dv, [(R(!0), z(L, null, I(o(), (t, r) => (R(), z("li", {
				key: `talent-${r}`,
				class: O(["dui-list-row", u("talents", r).length ? "app:border app:border-error" : void 0])
			}, [
				V("span", fv, "Grant " + k(r + 1), 1),
				V("div", pv, [
					V("strong", null, k(t.choices.length > 1 ? "Talent Choice" : "Guaranteed Talent"), 1),
					t.choices.length > 1 ? (R(), z("p", mv, "Choose one of these alternatives.")) : W("", !0),
					V("ul", hv, [(R(!0), z(L, null, I(t.choices, (i, o) => (R(), B(Z_, {
						key: `${r}-${o}`,
						"drop-description": "Drop a WFRP Talent item to link or replace this option.",
						"drop-title": "Link Talent",
						"input-title": t.choices.length > 1 ? "One Talent option offered for this choice set" : "Guaranteed Talent name",
						"is-disabled": e.isDisabled,
						issues: d(r, o),
						"remove-title": `Remove ${i.name}`,
						value: i,
						onDropData: (e) => N(n).setTalentChoiceDrop(r, o, e),
						onOpenItem: a[3] ||= (e) => N(n).openItemSheet(e),
						onRemove: (e) => N(n).removeTalentChoice(r, o),
						onUpdateName: (e) => N(n).renameTalentChoice(r, o, e)
					}, null, 8, [
						"input-title",
						"is-disabled",
						"issues",
						"remove-title",
						"value",
						"onDropData",
						"onRemove",
						"onUpdateName"
					]))), 128))])
				]),
				V("div", gv, [V("button", {
					class: "dui-btn dui-btn-sm dui-join-item",
					disabled: e.isDisabled,
					title: "Add another alternative to this Talent choice",
					type: "button",
					onClick: (e) => N(n).addTalentChoice(r)
				}, [...a[8] ||= [V("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-plus"
				}, null, -1), U(" Choice ", -1)]], 8, _v), V("button", {
					disabled: e.isDisabled,
					title: "Remove this Talent grant",
					class: "dui-btn dui-btn-error dui-btn-sm dui-join-item",
					type: "button",
					onClick: (e) => N(n).removeTalentGrant(r)
				}, [...a[9] ||= [V("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), U(" Remove ", -1)]], 8, vv)])
			], 2))), 128))])) : (R(), z("div", yv, [a[10] ||= V("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), V("span", null, "No " + k(t.label.toLowerCase()) + " yet.", 1)]))
		])]))), 128))]));
	}
}), xv = { class: "dui-table dui-table-sm" }, Sv = { scope: "row" }, Cv = ["for"], wv = [
	"id",
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], Tv = ["id"], Ev = /* @__PURE__ */ F({
	__name: "CharacteristicFields",
	props: {
		characteristics: {},
		isDisabled: { type: Boolean },
		issues: {}
	},
	emits: ["update"],
	setup(e, { emit: t }) {
		let n = e, r = t;
		function i(e) {
			return e.target instanceof HTMLInputElement ? e.target.value : "";
		}
		function a(e) {
			return B_(n.issues, `characteristics.${e}`);
		}
		function o(e) {
			return K_(a(e));
		}
		return (t, n) => (R(), z("table", xv, [n[0] ||= V("thead", null, [V("tr", null, [V("th", { scope: "col" }, "Characteristic"), V("th", { scope: "col" }, "Starting formula")])], -1), V("tbody", null, [(R(!0), z(L, null, I(N(F_), (t) => (R(), z("tr", { key: t }, [V("th", Sv, [V("label", { for: `species-characteristic-${t}` }, k(N(Tc)[t]), 9, Cv)]), V("td", null, [V("input", {
			id: `species-characteristic-${t}`,
			"aria-describedby": a(t).length ? `species-characteristic-${t}-errors` : void 0,
			"aria-invalid": a(t).length > 0 || void 0,
			class: O(["dui-input dui-input-sm", { "dui-input-error": a(t).length > 0 }]),
			disabled: e.isDisabled,
			placeholder: "2d10+20",
			value: e.characteristics?.[t] ?? "",
			type: "text",
			onInput: (e) => r("update", t, i(e))
		}, null, 42, wv), o(t).length ? (R(), z("div", {
			key: 0,
			id: `species-characteristic-${t}-errors`
		}, [(R(!0), z(L, null, I(o(t), (e) => (R(), z("p", {
			key: e,
			class: "app:m-0 app:text-xs app:text-error"
		}, k(e), 1))), 128))], 8, Tv)) : W("", !0)])]))), 128))])]));
	}
}), Dv = { class: "dui-table dui-table-sm" }, Ov = { scope: "row" }, kv = ["for"], Av = [
	"id",
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], jv = ["id"], Mv = /* @__PURE__ */ F({
	__name: "StatFields",
	props: {
		fields: {},
		isDisabled: { type: Boolean },
		issues: {},
		values: {}
	},
	emits: ["update"],
	setup(e, { emit: t }) {
		let n = e, r = t;
		function i(e) {
			return e.target instanceof HTMLInputElement ? e.target.value : "";
		}
		function a(e) {
			return B_(n.issues, e);
		}
		function o(e) {
			return K_(a(e));
		}
		return (t, n) => (R(), z("table", Dv, [n[0] ||= V("thead", null, [V("tr", null, [V("th", { scope: "col" }, "Stat"), V("th", { scope: "col" }, "Value")])], -1), V("tbody", null, [(R(!0), z(L, null, I(N(I_).filter(({ field: t }) => e.fields.includes(t)), (t) => (R(), z("tr", { key: t.field }, [V("th", Ov, [V("label", { for: `species-stat-${t.field}` }, k(t.label), 9, kv)]), V("td", null, [V("input", {
			id: `species-stat-${t.field}`,
			"aria-describedby": a(t.field).length ? `species-stat-${t.field}-errors` : void 0,
			"aria-invalid": a(t.field).length > 0 || void 0,
			class: O(["dui-input dui-input-sm", { "dui-input-error": a(t.field).length > 0 }]),
			disabled: e.isDisabled,
			value: e.values[t.field] ?? "",
			type: "number",
			onInput: (e) => r("update", t.field, i(e))
		}, null, 42, Av), o(t.field).length ? (R(), z("div", {
			key: 0,
			id: `species-stat-${t.field}-errors`
		}, [(R(!0), z(L, null, I(o(t.field), (e) => (R(), z("p", {
			key: e,
			class: "app:m-0 app:text-xs app:text-error"
		}, k(e), 1))), 128))], 8, jv)) : W("", !0)])]))), 128))])]));
	}
}), Nv = { class: "app:grid app:gap-3" }, Pv = { class: "dui-card dui-card-border dui-card-sm" }, Fv = { class: "dui-card-body" }, Iv = { class: "dui-fieldset" }, Lv = { class: "dui-card dui-card-border dui-card-sm" }, Rv = { class: "dui-card-body" }, zv = { class: "dui-fieldset" }, Bv = /* @__PURE__ */ F({
	__name: "SpeciesBuilderAttributesTab",
	props: {
		definition: {},
		isDisabled: { type: Boolean },
		issues: {}
	},
	emits: ["updateCharacteristic", "updateNumberField"],
	setup(e, { emit: t }) {
		let n = [
			"movement",
			"fate",
			"resilience",
			"extra"
		], r = t;
		return (t, i) => (R(), z("section", Nv, [V("section", Pv, [V("div", Fv, [V("fieldset", Iv, [
			i[2] ||= V("legend", { class: "dui-fieldset-legend" }, "Characteristic Roll Formulas", -1),
			i[3] ||= V("p", { class: "dui-fieldset-label" }, " Starting formulas used by WFRP character creation, usually values such as 2d10+20. ", -1),
			H(Ev, {
				characteristics: e.definition.characteristics,
				"is-disabled": e.isDisabled,
				issues: e.issues,
				onUpdate: i[0] ||= (e, t) => r("updateCharacteristic", e, t)
			}, null, 8, [
				"characteristics",
				"is-disabled",
				"issues"
			])
		])])]), V("section", Lv, [V("div", Rv, [V("fieldset", zv, [
			i[4] ||= V("legend", { class: "dui-fieldset-legend" }, "Movement, Fate And Resilience", -1),
			i[5] ||= V("p", { class: "dui-fieldset-label" }, " Set base Movement plus starting Fate, Resilience, and extra points distributed between them. ", -1),
			H(Mv, {
				fields: n,
				"is-disabled": e.isDisabled,
				issues: e.issues,
				values: e.definition,
				onUpdate: i[1] ||= (e, t) => r("updateNumberField", e, t)
			}, null, 8, [
				"is-disabled",
				"issues",
				"values"
			])
		])])])]));
	}
}), Vv = { class: "app:flex app:flex-wrap app:gap-3" }, Hv = { class: "dui-fieldset app:min-w-56 app:flex-1" }, Uv = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value"
], Wv = {
	key: 0,
	id: "species-age-errors"
}, Gv = { class: "dui-fieldset app:min-w-56 app:flex-1" }, Kv = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value"
], qv = {
	key: 0,
	id: "species-height-die-errors"
}, Jv = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value"
], Yv = {
	key: 1,
	id: "species-height-feet-errors"
}, Xv = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value"
], Zv = {
	key: 2,
	id: "species-height-inches-errors"
}, Qv = /* @__PURE__ */ F({
	__name: "AgeHeightFields",
	props: {
		definition: {},
		isDisabled: { type: Boolean },
		issues: {}
	},
	emits: ["updateHeightField", "updateStringField"],
	setup(e, { emit: t }) {
		let n = e, r = t;
		function i(e) {
			return e.target instanceof HTMLInputElement ? e.target.value : "";
		}
		function a(e) {
			return B_(n.issues, e);
		}
		function o(e) {
			return K_(a(e));
		}
		return (t, n) => (R(), z("div", Vv, [V("fieldset", Hv, [
			n[4] ||= V("legend", { class: "dui-fieldset-legend" }, "Age", -1),
			n[5] ||= V("p", { class: "dui-fieldset-label" }, "Formula used by character creation to roll age.", -1),
			n[6] ||= V("label", {
				class: "dui-label",
				for: "species-age"
			}, "Age formula", -1),
			V("input", {
				id: "species-age",
				"aria-describedby": a("age").length ? "species-age-errors" : void 0,
				"aria-invalid": a("age").length > 0 || void 0,
				class: O(["dui-input dui-input-sm app:w-full", { "dui-input-error": a("age").length > 0 }]),
				disabled: e.isDisabled,
				placeholder: "2d10+15",
				value: e.definition.age ?? "",
				type: "text",
				onInput: n[0] ||= (e) => r("updateStringField", "age", i(e))
			}, null, 42, Uv),
			o("age").length ? (R(), z("div", Wv, [(R(!0), z(L, null, I(o("age"), (e) => (R(), z("p", {
				key: e,
				class: "app:m-0 app:text-xs app:text-error"
			}, k(e), 1))), 128))])) : W("", !0)
		]), V("fieldset", Gv, [
			n[7] ||= V("legend", { class: "dui-fieldset-legend" }, "Height", -1),
			n[8] ||= V("p", { class: "dui-fieldset-label" }, "Formula and base measurements used to roll random height.", -1),
			n[9] ||= V("label", {
				class: "dui-label",
				for: "species-height-die"
			}, "Height die", -1),
			V("input", {
				id: "species-height-die",
				"aria-describedby": a("height.die").length ? "species-height-die-errors" : void 0,
				"aria-invalid": a("height.die").length > 0 || void 0,
				class: O(["dui-input dui-input-sm app:w-full", { "dui-input-error": a("height.die").length > 0 }]),
				disabled: e.isDisabled,
				placeholder: "1d10",
				value: e.definition.height?.die ?? "",
				type: "text",
				onInput: n[1] ||= (e) => r("updateHeightField", "die", i(e))
			}, null, 42, Kv),
			o("height.die").length ? (R(), z("div", qv, [(R(!0), z(L, null, I(o("height.die"), (e) => (R(), z("p", {
				key: e,
				class: "app:m-0 app:text-xs app:text-error"
			}, k(e), 1))), 128))])) : W("", !0),
			n[10] ||= V("label", {
				class: "dui-label",
				for: "species-height-feet"
			}, "Base feet", -1),
			V("input", {
				id: "species-height-feet",
				"aria-describedby": a("height.feet").length ? "species-height-feet-errors" : void 0,
				"aria-invalid": a("height.feet").length > 0 || void 0,
				class: O(["dui-input dui-input-sm app:w-full", { "dui-input-error": a("height.feet").length > 0 }]),
				disabled: e.isDisabled,
				value: e.definition.height?.feet ?? "",
				type: "number",
				onInput: n[2] ||= (e) => r("updateHeightField", "feet", i(e))
			}, null, 42, Jv),
			o("height.feet").length ? (R(), z("div", Yv, [(R(!0), z(L, null, I(o("height.feet"), (e) => (R(), z("p", {
				key: e,
				class: "app:m-0 app:text-xs app:text-error"
			}, k(e), 1))), 128))])) : W("", !0),
			n[11] ||= V("label", {
				class: "dui-label",
				for: "species-height-inches"
			}, "Base inches", -1),
			V("input", {
				id: "species-height-inches",
				"aria-describedby": a("height.inches").length ? "species-height-inches-errors" : void 0,
				"aria-invalid": a("height.inches").length > 0 || void 0,
				class: O(["dui-input dui-input-sm app:w-full", { "dui-input-error": a("height.inches").length > 0 }]),
				disabled: e.isDisabled,
				value: e.definition.height?.inches ?? "",
				type: "number",
				onInput: n[3] ||= (e) => r("updateHeightField", "inches", i(e))
			}, null, 42, Xv),
			o("height.inches").length ? (R(), z("div", Zv, [(R(!0), z(L, null, I(o("height.inches"), (e) => (R(), z("p", {
				key: e,
				class: "app:m-0 app:text-xs app:text-error"
			}, k(e), 1))), 128))])) : W("", !0)
		])]));
	}
}), $v = { class: "app:grid app:gap-3" }, ey = { class: "app:flex app:flex-wrap app:gap-3" }, ty = { class: "dui-card dui-card-border dui-card-sm app:min-w-64 app:flex-1" }, ny = { class: "dui-card-body" }, ry = { class: "dui-fieldset" }, iy = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value"
], ay = {
	key: 0,
	id: "species-name-errors"
}, oy = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"placeholder",
	"value"
], sy = {
	key: 1,
	id: "species-key-errors"
}, cy = { class: "dui-card dui-card-border dui-card-sm app:min-w-64 app:flex-1" }, ly = { class: "dui-card-body" }, uy = { class: "dui-fieldset" }, dy = { class: "dui-label" }, fy = ["checked", "disabled"], py = { class: "dui-card dui-card-border dui-card-sm" }, my = { class: "dui-card-body" }, hy = /* @__PURE__ */ F({
	__name: "SpeciesBuilderDetailsTab",
	props: {
		definition: {},
		isDisabled: { type: Boolean },
		issues: {}
	},
	emits: [
		"updateBooleanField",
		"updateHeightField",
		"updateStringField"
	],
	setup(e, { emit: t }) {
		let n = e, r = t;
		function i(e) {
			return e.target instanceof HTMLInputElement ? e.target.value : "";
		}
		function a(e) {
			return e.target instanceof HTMLInputElement && e.target.checked;
		}
		function o(e) {
			return B_(n.issues, e);
		}
		function s(e) {
			return K_(o(e));
		}
		return (t, n) => (R(), z("section", $v, [V("div", ey, [V("section", ty, [V("div", ny, [V("fieldset", ry, [
			n[5] ||= V("legend", { class: "dui-fieldset-legend" }, "Identity", -1),
			n[6] ||= V("p", { class: "dui-fieldset-label" }, " The name is shown to users. The key identifies this species in generated WFRP config. ", -1),
			n[7] ||= V("label", {
				class: "dui-label",
				for: "species-name"
			}, "Name", -1),
			V("input", {
				id: "species-name",
				"aria-describedby": o("name").length ? "species-name-errors" : void 0,
				"aria-invalid": o("name").length > 0 || void 0,
				class: O(["dui-input dui-input-sm app:w-full", { "dui-input-error": o("name").length > 0 }]),
				disabled: e.isDisabled,
				value: e.definition.name,
				type: "text",
				onInput: n[0] ||= (e) => r("updateStringField", "name", i(e))
			}, null, 42, iy),
			s("name").length ? (R(), z("div", ay, [(R(!0), z(L, null, I(s("name"), (e) => (R(), z("p", {
				key: e,
				class: "app:m-0 app:text-xs app:text-error"
			}, k(e), 1))), 128))])) : W("", !0),
			n[8] ||= V("label", {
				class: "dui-label",
				for: "species-key"
			}, "Key", -1),
			V("input", {
				id: "species-key",
				"aria-describedby": o("key").length ? "species-key-errors" : void 0,
				"aria-invalid": o("key").length > 0 || void 0,
				class: O(["dui-input dui-input-sm app:w-full", { "dui-input-error": o("key").length > 0 }]),
				disabled: e.isDisabled,
				placeholder: N(Pp)(e.definition),
				value: e.definition.key,
				type: "text",
				onInput: n[1] ||= (e) => r("updateStringField", "key", i(e))
			}, null, 42, oy),
			s("key").length ? (R(), z("div", sy, [(R(!0), z(L, null, I(s("key"), (e) => (R(), z("p", {
				key: e,
				class: "app:m-0 app:text-xs app:text-error"
			}, k(e), 1))), 128))])) : W("", !0)
		])])]), V("section", cy, [V("div", ly, [V("fieldset", uy, [
			n[10] ||= V("legend", { class: "dui-fieldset-legend" }, "WFRP Availability", -1),
			n[11] ||= V("p", { class: "dui-fieldset-label" }, " Choose whether character creation lists this custom species. ", -1),
			V("label", dy, [V("input", {
				class: "dui-checkbox",
				checked: e.definition.includeInExtraSpecies,
				disabled: e.isDisabled,
				type: "checkbox",
				onChange: n[2] ||= (e) => r("updateBooleanField", "includeInExtraSpecies", a(e))
			}, null, 40, fy), n[9] ||= V("span", null, "Show in WFRP extra species options", -1)])
		])])])]), V("section", py, [V("div", my, [n[12] ||= V("h3", { class: "dui-card-title" }, "Character Creation", -1), H(Qv, {
			definition: e.definition,
			"is-disabled": e.isDisabled,
			issues: e.issues,
			onUpdateHeightField: n[3] ||= (e, t) => r("updateHeightField", e, t),
			onUpdateStringField: n[4] ||= (e, t) => r("updateStringField", e, t)
		}, null, 8, [
			"definition",
			"is-disabled",
			"issues"
		])])])]));
	}
}), gy = { class: "dui-fieldset" }, _y = { class: "dui-fieldset-legend" }, vy = /* @__PURE__ */ F({
	__name: "LinkedItemDropField",
	props: {
		description: {},
		isDisabled: { type: Boolean },
		issues: {},
		label: {},
		title: {},
		value: {}
	},
	emits: ["dropData", "openItem"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (R(), z("fieldset", gy, [V("legend", _y, k(e.label), 1), H(Y_, {
			description: e.description,
			"is-disabled": e.isDisabled,
			"is-editable": !1,
			issues: e.issues,
			title: e.title,
			value: e.value,
			onDropData: r[0] ||= (e) => n("dropData", e),
			onOpenItem: r[1] ||= (e) => n("openItem", e)
		}, null, 8, [
			"description",
			"is-disabled",
			"issues",
			"title",
			"value"
		])]));
	}
}), yy = { class: "dui-card dui-card-border dui-card-sm" }, by = { class: "dui-card-body" }, xy = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, Sy = {
	key: 1,
	class: "dui-list"
}, Cy = { class: "dui-badge dui-badge-ghost" }, wy = { class: "dui-list-col-grow" }, Ty = { class: "dui-list" }, Ey = { class: "dui-badge dui-badge-ghost" }, Dy = ["disabled", "onClick"], Oy = { class: "dui-join" }, ky = ["disabled", "onClick"], Ay = ["disabled", "onClick"], jy = {
	key: 2,
	class: "dui-alert",
	role: "status"
}, My = /* @__PURE__ */ F({
	__name: "CareerReplacementRows",
	props: {
		isDisabled: { type: Boolean },
		issues: {},
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
			return n.rows?.length ? n.rows : Kd(n.values);
		}
		function a() {
			r("updateRows", zd(i()));
		}
		function o(e) {
			r("updateRows", Bd(i(), e));
		}
		function s(e, t) {
			r("updateRows", Vd(i(), e, t));
		}
		function c(e) {
			r("updateRows", Hd(i(), e));
		}
		function l() {
			return K_(G_(n.issues));
		}
		return (t, n) => (R(), z("section", yy, [V("div", by, [
			H(_g, {
				"action-label": "Add Rule",
				"action-title": "Add a rolled Career and replacement choices",
				count: i().length,
				description: "Offer one or more replacement Careers for a rolled Career group.",
				"is-disabled": e.isDisabled,
				title: "Career Replacements",
				onAdd: a
			}, null, 8, ["count", "is-disabled"]),
			l().length ? (R(), z("div", xy, [n[2] ||= V("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), V("div", null, [(R(!0), z(L, null, I(l(), (e) => (R(), z("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, k(e), 1))), 128))])])) : W("", !0),
			i().length > 0 ? (R(), z("ul", Sy, [(R(!0), z(L, null, I(i(), (t, i) => (R(), z("li", {
				key: `career-replacement-${i}`,
				class: O(["dui-list-row", N(H_)(e.issues, i).length ? "app:border app:border-error" : void 0])
			}, [
				V("span", Cy, "Rule " + k(i + 1), 1),
				V("div", wy, [
					H(vy, {
						description: "Drop the Career result that should allow replacement choices.",
						"is-disabled": e.isDisabled,
						issues: N(B_)(e.issues, "rolled", i),
						label: "Rolled Career",
						title: "Drop Rolled Career",
						value: t.rolled,
						onDropData: (e) => r("dropRolled", i, e),
						onOpenItem: n[0] ||= (e) => r("openItem", e)
					}, null, 8, [
						"is-disabled",
						"issues",
						"value",
						"onDropData"
					]),
					n[4] ||= V("strong", null, "Replacement choices", -1),
					V("ul", Ty, [(R(!0), z(L, null, I(t.replacements, (t, a) => (R(), z("li", {
						key: `${i}-${a}`,
						class: O(["dui-list-row", N(W_)(e.issues, i, a).length ? "app:border app:border-error" : void 0])
					}, [
						V("span", Ey, k(a + 1), 1),
						H(vy, {
							class: "dui-list-col-grow",
							description: "Drop one Career offered instead of the rolled Career.",
							"is-disabled": e.isDisabled,
							issues: N(B_)(e.issues, "replacement", i, a),
							label: "Replacement Career",
							title: "Drop Replacement Career",
							value: t,
							onDropData: (e) => r("dropReplacement", i, a, e),
							onOpenItem: n[1] ||= (e) => r("openItem", e)
						}, null, 8, [
							"is-disabled",
							"issues",
							"value",
							"onDropData"
						]),
						V("button", {
							disabled: e.isDisabled,
							title: "Remove this replacement Career choice",
							class: "dui-btn dui-btn-error dui-btn-sm",
							type: "button",
							onClick: (e) => s(i, a)
						}, [...n[3] ||= [V("i", {
							"aria-hidden": "true",
							class: "fa-solid fa-xmark"
						}, null, -1), U(" Remove ", -1)]], 8, Dy)
					], 2))), 128))])
				]),
				V("div", Oy, [V("button", {
					class: "dui-btn dui-btn-sm dui-join-item",
					disabled: e.isDisabled,
					title: "Add another replacement Career choice",
					type: "button",
					onClick: (e) => o(i)
				}, [...n[5] ||= [V("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-plus"
				}, null, -1), U(" Choice ", -1)]], 8, ky), V("button", {
					disabled: e.isDisabled,
					title: "Remove this Career replacement rule",
					class: "dui-btn dui-btn-error dui-btn-sm dui-join-item",
					type: "button",
					onClick: (e) => c(i)
				}, [...n[6] ||= [V("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), U(" Remove Rule ", -1)]], 8, Ay)])
			], 2))), 128))])) : (R(), z("div", jy, [...n[7] ||= [V("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), V("span", null, "No Career replacements.", -1)]]))
		])]));
	}
}), Ny = { class: "dui-card dui-card-border dui-card-sm" }, Py = { class: "dui-card-body" }, Fy = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, Iy = {
	key: 1,
	class: "dui-list"
}, Ly = { class: "dui-badge dui-badge-ghost" }, Ry = { class: "dui-list-col-grow" }, zy = { class: "dui-fieldset" }, By = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], Vy = ["id"], Hy = { class: "dui-fieldset" }, Uy = [
	"disabled",
	"value",
	"onInput"
], Wy = ["disabled", "onClick"], Gy = {
	key: 2,
	class: "dui-alert",
	role: "status"
}, Ky = /* @__PURE__ */ F({
	__name: "CareerTableRows",
	props: {
		isDisabled: { type: Boolean },
		issues: {},
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
			r("updateRows", vu(n.rows));
		}
		function o(e) {
			r("updateRows", yu(n.rows, e));
		}
		function s(e, t) {
			r("updateRows", bu(n.rows, e, t));
		}
		function c(e) {
			return e.target instanceof HTMLInputElement ? e.target.value : "";
		}
		function l(e) {
			return B_(n.issues, "name", e);
		}
		function u(e) {
			return K_(l(e));
		}
		function d() {
			return K_(G_(n.issues));
		}
		return (t, n) => (R(), z("section", Ny, [V("div", Py, [
			H(_g, {
				"action-label": "Add Career",
				"action-title": "Add a Career table row",
				count: i().length,
				description: "Career group names drive character generation. Journal links provide the result link; blank links use the generated fallback journal.",
				"is-disabled": e.isDisabled,
				title: "Career Table",
				onAdd: a
			}, null, 8, ["count", "is-disabled"]),
			d().length ? (R(), z("div", Fy, [n[0] ||= V("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), V("div", null, [(R(!0), z(L, null, I(d(), (e) => (R(), z("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, k(e), 1))), 128))])])) : W("", !0),
			i().length > 0 ? (R(), z("ul", Iy, [(R(!0), z(L, null, I(i(), (t, i) => (R(), z("li", {
				key: i,
				class: O(["dui-list-row", N(H_)(e.issues, i).length ? "app:border app:border-error" : void 0])
			}, [
				V("span", Ly, k(i + 1), 1),
				V("div", Ry, [H(P_, {
					description: "Drop a WFRP Career item.",
					disabled: e.isDisabled,
					"manual-entry-trigger": "none",
					title: "Career",
					variant: "bare",
					onDropData: (e) => r("dropCareer", i, e)
				}, {
					default: P(() => [V("fieldset", zy, [
						n[1] ||= V("legend", { class: "dui-fieldset-legend" }, "Career Group", -1),
						V("input", {
							"aria-describedby": l(i).length ? `career-table-name-${i}-errors` : void 0,
							"aria-invalid": l(i).length > 0 || void 0,
							class: O(["dui-input", { "dui-input-error": l(i).length > 0 }]),
							disabled: e.isDisabled,
							value: t.name,
							placeholder: "Pit Fighter",
							type: "text",
							onInput: (e) => s(i, { name: c(e) })
						}, null, 42, By),
						u(i).length ? (R(), z("div", {
							key: 0,
							id: `career-table-name-${i}-errors`
						}, [(R(!0), z(L, null, I(u(i), (e) => (R(), z("p", {
							key: e,
							class: "app:m-0 app:text-xs app:text-error"
						}, k(e), 1))), 128))], 8, Vy)) : W("", !0)
					])]),
					_: 2
				}, 1032, ["disabled", "onDropData"]), H(P_, {
					description: "Drop a Journal Entry or Journal Page.",
					disabled: e.isDisabled,
					"manual-entry-trigger": "button",
					title: "Journal Link",
					variant: "bare",
					onDropData: (e) => r("dropJournal", i, e)
				}, {
					default: P(() => [V("fieldset", Hy, [n[2] ||= V("legend", { class: "dui-fieldset-legend" }, "Journal Entry/Page UUID", -1), V("input", {
						class: "dui-input",
						disabled: e.isDisabled,
						value: t.journalUuid ?? "",
						placeholder: "Compendium.package.journals.entry.JournalEntryPage.page",
						type: "text",
						onInput: (e) => s(i, { journalUuid: c(e) })
					}, null, 40, Uy)])]),
					_: 2
				}, 1032, ["disabled", "onDropData"])]),
				V("button", {
					class: "dui-btn dui-btn-error dui-btn-sm",
					disabled: e.isDisabled,
					type: "button",
					onClick: (e) => o(i)
				}, [...n[3] ||= [V("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), U(" Remove ", -1)]], 8, Wy)
			], 2))), 128))])) : (R(), z("div", Gy, [...n[4] ||= [V("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), V("span", null, "No Career rows yet.", -1)]]))
		])]));
	}
});
//#endregion
//#region src/functions/species-builder/editor/random-talents.ts
function qy(e) {
	return Object.entries(e ?? {});
}
function Jy(e, t) {
	let n = t[0]?.key ?? "talents";
	return $y([...e, [n, 1]]);
}
function Yy(e, t, n) {
	return $y(e.map(([e, r], i) => i === t ? [n, r] : [e, r]));
}
function Xy(e, t, n) {
	let r = Number(n);
	return $y(e.map(([e, n], i) => i === t && Number.isFinite(r) ? [e, r] : [e, n]));
}
function Zy(e, t) {
	return $y(e.filter((e, n) => n !== t));
}
function Qy(e, t) {
	return e.some((e) => e.key === t) ? e : [...e, {
		key: t,
		label: `Saved source missing from this world (${t})`
	}];
}
function $y(e) {
	return e.flatMap(([e, t]) => e.trim() ? [`${e.trim()}: ${t}`] : []).join("\n");
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/tabs/tables/tabs/random-talents/RandomTalentRows.vue?vue&type=script&setup=true&lang.ts
var eb = { class: "dui-card dui-card-border dui-card-sm" }, tb = { class: "dui-card-body" }, nb = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, rb = {
	key: 1,
	class: "dui-list"
}, ib = { class: "dui-badge dui-badge-ghost" }, ab = { class: "dui-list-col-grow" }, ob = { class: "dui-fieldset" }, sb = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], cb = ["value"], lb = ["id"], ub = { class: "dui-fieldset" }, db = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], fb = ["id"], pb = ["disabled", "onClick"], mb = {
	key: 2,
	class: "dui-alert",
	role: "status"
}, hb = /* @__PURE__ */ F({
	__name: "RandomTalentRows",
	props: {
		isDisabled: { type: Boolean },
		issues: {},
		sources: {},
		values: {}
	},
	emits: ["update"],
	setup(e, { emit: t }) {
		let n = e, r = t;
		function i() {
			return qy(n.values);
		}
		function a() {
			r("update", Jy(i(), n.sources));
		}
		function o(e, t) {
			r("update", Yy(i(), e, t));
		}
		function s(e, t) {
			r("update", Xy(i(), e, t));
		}
		function c(e) {
			return Qy(n.sources, e);
		}
		function l(e) {
			r("update", Zy(i(), e));
		}
		function u(e) {
			return e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement ? e.target.value : "";
		}
		function d(e, t) {
			return B_(n.issues, e, t);
		}
		function f(e, t) {
			return K_(d(e, t));
		}
		function p() {
			return K_(G_(n.issues));
		}
		return (t, n) => (R(), z("section", eb, [V("div", tb, [
			H(_g, {
				"action-label": "Add Source",
				"action-title": "Add a random Talent source and draw count",
				count: i().length,
				description: "Choose an available Talent table and the number of draws from that source.",
				"is-disabled": e.isDisabled,
				title: "Random Talents",
				onAdd: a
			}, null, 8, ["count", "is-disabled"]),
			p().length ? (R(), z("div", nb, [n[0] ||= V("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), V("div", null, [(R(!0), z(L, null, I(p(), (e) => (R(), z("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, k(e), 1))), 128))])])) : W("", !0),
			i().length > 0 ? (R(), z("ul", rb, [(R(!0), z(L, null, I(i(), ([t, r], i) => (R(), z("li", {
				key: `random-${i}`,
				class: O(["dui-list-row", N(H_)(e.issues, i).length ? "app:border app:border-error" : void 0])
			}, [
				V("span", ib, k(i + 1), 1),
				V("div", ab, [V("fieldset", ob, [
					n[1] ||= V("legend", { class: "dui-fieldset-legend" }, "Talent source", -1),
					V("select", {
						"aria-describedby": d("key", i).length ? `random-talents-key-${i}-errors` : void 0,
						"aria-invalid": d("key", i).length > 0 || void 0,
						class: O(["dui-select", { "dui-select-error": d("key", i).length > 0 }]),
						disabled: e.isDisabled,
						title: "Random Talent table source available in this world.",
						value: t,
						onInput: (e) => o(i, u(e))
					}, [(R(!0), z(L, null, I(c(t), (e) => (R(), z("option", {
						key: e.key,
						value: e.key
					}, k(e.label), 9, cb))), 128))], 42, sb),
					f("key", i).length ? (R(), z("div", {
						key: 0,
						id: `random-talents-key-${i}-errors`
					}, [(R(!0), z(L, null, I(f("key", i), (e) => (R(), z("p", {
						key: e,
						class: "app:m-0 app:text-xs app:text-error"
					}, k(e), 1))), 128))], 8, lb)) : W("", !0)
				]), V("fieldset", ub, [
					n[2] ||= V("legend", { class: "dui-fieldset-legend" }, "Draws", -1),
					V("input", {
						"aria-describedby": d("count", i).length ? `random-talents-count-${i}-errors` : void 0,
						"aria-invalid": d("count", i).length > 0 || void 0,
						class: O(["dui-input", { "dui-input-error": d("count", i).length > 0 }]),
						disabled: e.isDisabled,
						min: "0",
						title: "How many random Talents this species draws from that table.",
						value: r,
						type: "number",
						onInput: (e) => s(i, u(e))
					}, null, 42, db),
					f("count", i).length ? (R(), z("div", {
						key: 0,
						id: `random-talents-count-${i}-errors`
					}, [(R(!0), z(L, null, I(f("count", i), (e) => (R(), z("p", {
						key: e,
						class: "app:m-0 app:text-xs app:text-error"
					}, k(e), 1))), 128))], 8, fb)) : W("", !0)
				])]),
				V("button", {
					disabled: e.isDisabled,
					title: "Remove this random Talent source",
					class: "dui-btn dui-btn-error dui-btn-sm",
					type: "button",
					onClick: (e) => l(i)
				}, [...n[3] ||= [V("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), U(" Remove ", -1)]], 8, pb)
			], 2))), 128))])) : (R(), z("div", mb, [...n[4] ||= [V("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), V("span", null, "No random Talent draws.", -1)]]))
		])]));
	}
}), gb = { class: "dui-card dui-card-border dui-card-sm" }, _b = { class: "dui-card-body" }, vb = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, yb = {
	key: 1,
	class: "dui-list"
}, bb = { class: "dui-badge dui-badge-ghost" }, xb = { class: "dui-list-col-grow" }, Sb = ["disabled", "onClick"], Cb = {
	key: 2,
	class: "dui-alert",
	role: "status"
}, wb = /* @__PURE__ */ F({
	__name: "TalentReplacementRows",
	props: {
		isDisabled: { type: Boolean },
		issues: {},
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
			return n.rows?.length ? n.rows : Gd(n.values);
		}
		function a() {
			r("updateRows", Ld(i()));
		}
		function o(e) {
			r("updateRows", Rd(i(), e));
		}
		function s() {
			return K_(G_(n.issues));
		}
		return (t, n) => (R(), z("section", gb, [V("div", _b, [
			H(_g, {
				"action-label": "Add Rule",
				"action-title": "Add a rolled Talent and replacement Talent",
				count: i().length,
				description: "Offer a specific alternative when character creation rolls a Talent.",
				"is-disabled": e.isDisabled,
				title: "Talent Replacements",
				onAdd: a
			}, null, 8, ["count", "is-disabled"]),
			s().length ? (R(), z("div", vb, [n[2] ||= V("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), V("div", null, [(R(!0), z(L, null, I(s(), (e) => (R(), z("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, k(e), 1))), 128))])])) : W("", !0),
			i().length > 0 ? (R(), z("ul", yb, [(R(!0), z(L, null, I(i(), (t, i) => (R(), z("li", {
				key: `talent-replacement-${i}`,
				class: O(["dui-list-row", N(H_)(e.issues, i).length ? "app:border app:border-error" : void 0])
			}, [
				V("span", bb, k(i + 1), 1),
				V("div", xb, [H(vy, {
					description: "Drop the Talent result that may be replaced.",
					"is-disabled": e.isDisabled,
					issues: N(B_)(e.issues, "rolled", i),
					label: "Rolled Talent",
					title: "Drop Rolled Talent",
					value: t.rolled,
					onDropData: (e) => r("dropRolled", i, e),
					onOpenItem: n[0] ||= (e) => r("openItem", e)
				}, null, 8, [
					"is-disabled",
					"issues",
					"value",
					"onDropData"
				]), H(vy, {
					description: "Drop the Talent offered instead of the rolled Talent.",
					"is-disabled": e.isDisabled,
					issues: N(B_)(e.issues, "replacement", i),
					label: "Replacement",
					title: "Drop Replacement Talent",
					value: t.replacement,
					onDropData: (e) => r("dropReplacement", i, e),
					onOpenItem: n[1] ||= (e) => r("openItem", e)
				}, null, 8, [
					"is-disabled",
					"issues",
					"value",
					"onDropData"
				])]),
				V("button", {
					disabled: e.isDisabled,
					title: "Remove this Talent replacement",
					class: "dui-btn dui-btn-error dui-btn-sm",
					type: "button",
					onClick: (e) => o(i)
				}, [...n[3] ||= [V("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), U(" Remove ", -1)]], 8, Sb)
			], 2))), 128))])) : (R(), z("div", Cb, [...n[4] ||= [V("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), V("span", null, "No Talent replacements.", -1)]]))
		])]));
	}
}), Tb = { class: "dui-card dui-card-border dui-card-sm" }, Eb = { class: "dui-card-body" }, Db = { key: 0 }, Ob = { class: "app:m-0" }, kb = {
	key: 1,
	class: "app:m-0"
}, Ab = {
	key: 2,
	"aria-label": "Table editor",
	class: "dui-tabs dui-tabs-border",
	role: "tablist"
}, jb = [
	"id",
	"aria-controls",
	"aria-selected",
	"disabled",
	"onClick"
], Mb = ["title"], Nb = { class: "app:sr-only" }, Pb = /* @__PURE__ */ F({
	__name: "RandomTablesSection",
	props: {
		activeTab: {},
		help: {},
		includeCareerReplacements: { type: Boolean },
		isDisabled: { type: Boolean },
		issues: {},
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
		let n = e, r = t, i = G(() => {
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
		function u(e) {
			return e;
		}
		function d(e) {
			let t = u(e);
			return n.issues.filter((e) => e.section === t);
		}
		return (t, n) => (R(), z("section", Tb, [V("div", Eb, [
			e.showNavigation ? (R(), z("header", Db, [n[8] ||= V("h3", { class: "dui-card-title" }, "Tables And Replacements", -1), V("p", Ob, k(e.help), 1)])) : (R(), z("p", kb, k(e.help), 1)),
			e.showNavigation ? (R(), z("div", Ab, [(R(!0), z(L, null, I(i.value, (t) => (R(), z("button", {
				id: `random-table-tab-${t.tab}`,
				key: t.tab,
				"aria-controls": `random-table-panel-${t.tab}`,
				"aria-selected": e.activeTab === t.tab,
				class: O(["dui-tab", { "dui-tab-active": e.activeTab === t.tab }]),
				disabled: e.isDisabled,
				role: "tab",
				type: "button",
				onClick: (e) => l(t.tab)
			}, [U(k(t.label) + " ", 1), d(t.tab).length > 0 ? (R(), z("span", {
				key: 0,
				class: "dui-status dui-status-error dui-status-sm",
				title: `${d(t.tab).length} character-creation issues`
			}, [V("span", Nb, k(d(t.tab).length) + " character-creation issues ", 1)], 8, Mb)) : W("", !0)], 10, jb))), 128))])) : W("", !0),
			e.activeTab === "careerTable" ? (R(), B(Ky, {
				key: 3,
				id: "random-table-panel-careerTable",
				"aria-label": "Career table",
				"aria-labelledby": e.showNavigation ? "random-table-tab-careerTable" : void 0,
				"is-disabled": e.isDisabled,
				issues: d("careerTable"),
				role: e.showNavigation ? "tabpanel" : "region",
				rows: e.values.careerTable?.rows,
				onDropCareer: n[0] ||= (e, t) => r("careerTableCareerDrop", e, t),
				onDropJournal: n[1] ||= (e, t) => r("careerTableJournalDrop", e, t),
				onUpdateRows: n[2] ||= (e) => r("updateCareerTableRows", e)
			}, null, 8, [
				"aria-labelledby",
				"is-disabled",
				"issues",
				"role",
				"rows"
			])) : e.activeTab === "randomTalents" ? (R(), B(hb, {
				key: 4,
				id: "random-table-panel-randomTalents",
				"aria-label": "Random Talents table",
				"aria-labelledby": e.showNavigation ? "random-table-tab-randomTalents" : void 0,
				"is-disabled": e.isDisabled,
				issues: d("randomTalents"),
				role: e.showNavigation ? "tabpanel" : "region",
				sources: e.randomTalentSources,
				values: e.values.randomTalents,
				onUpdate: n[3] ||= (e) => r("update", "randomTalents", e)
			}, null, 8, [
				"aria-labelledby",
				"is-disabled",
				"issues",
				"role",
				"sources",
				"values"
			])) : e.activeTab === "talentReplacement" ? (R(), B(wb, {
				key: 5,
				id: "random-table-panel-talentReplacement",
				"aria-label": "Talent replacement table",
				"aria-labelledby": e.showNavigation ? "random-table-tab-talentReplacement" : void 0,
				"is-disabled": e.isDisabled,
				issues: d("talentReplacement"),
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
				"issues",
				"role",
				"rows",
				"values"
			])) : e.includeCareerReplacements ? (R(), B(My, {
				key: 6,
				id: "random-table-panel-careerReplacement",
				"aria-label": "Career replacement table",
				"aria-labelledby": e.showNavigation ? "random-table-tab-careerReplacement" : void 0,
				"is-disabled": e.isDisabled,
				issues: d("careerReplacement"),
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
				"issues",
				"role",
				"rows",
				"values"
			])) : W("", !0)
		])]));
	}
}), Fb = { class: "dui-card dui-card-border dui-card-sm" }, Ib = { class: "dui-card-body" }, Lb = { class: "dui-fieldset" }, Rb = { class: "dui-collapse dui-collapse-arrow" }, zb = { class: "dui-collapse-content" }, Bb = { "aria-label": "Wound formula keywords" }, Vb = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value"
], Hb = {
	key: 0,
	id: "species-wound-formula-errors"
}, Ub = {
	key: 1,
	class: "dui-alert dui-alert-info"
}, Wb = /* @__PURE__ */ F({
	__name: "SpeciesBuilderWoundsTab",
	props: {
		formula: {},
		generatedTraitName: {},
		isDisabled: { type: Boolean },
		issues: {}
	},
	emits: ["updateWoundFormula"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ "@sb.@tb.@wpb.@sbMultiplier.@tbMultiplier.@wpbMultiplier.@scale.@size.@age.@height.@weight.@status.@rank.@xp.@fate.@fortune.@resilience.@resolve.@corruption.@sin.@advantage.@bleeding.@poisoned.@ablaze.@deafened.@stunned.@entangled.@fatigued.@blinded.@broken".split(".");
		function a(e) {
			return e.target instanceof HTMLTextAreaElement ? e.target.value : "";
		}
		function o() {
			return B_(n.issues, "woundFormula");
		}
		function s() {
			return K_(o());
		}
		return (t, n) => (R(), z("section", Fb, [V("div", Ib, [V("fieldset", Lb, [
			n[3] ||= Ca("<legend class=\"dui-fieldset-legend\">Wound Calculation</legend><p class=\"dui-fieldset-label\"> Use <code>{Skill or Characteristic}</code> for a total value, <code>[Skill or Characteristic]</code> for its bonus, and <code>{Skill|Characteristic}</code> or <code>[Skill|Characteristic]</code> to base a skill on another characteristic. You can also use keywords such as <code>@tb</code>, <code>@scale</code>, and <code>@xp</code>. </p>", 2),
			V("details", Rb, [n[2] ||= V("summary", { class: "dui-collapse-title" }, "Formula keyword guide", -1), V("div", zb, [n[1] ||= V("p", null, [
				U(" Keywords pull values from the current Actor during Wound calculation. Size uses "),
				V("code", null, "@size"),
				U(" as steps from Average and "),
				V("code", null, "@scale"),
				U(" as powers of two. ")
			], -1), V("div", Bb, [(R(), z(L, null, I(i, (e) => V("code", {
				key: e,
				class: "dui-badge"
			}, k(e), 1)), 64))])])]),
			n[4] ||= V("label", {
				class: "dui-label",
				for: "species-wound-formula"
			}, "Formula", -1),
			V("textarea", {
				id: "species-wound-formula",
				"aria-describedby": o().length ? "species-wound-formula-errors" : void 0,
				"aria-invalid": o().length > 0 || void 0,
				class: O(["dui-textarea app:w-full", { "dui-textarea-error": o().length > 0 }]),
				disabled: e.isDisabled,
				value: e.formula ?? "",
				placeholder: "@sb * (1 + @sbMultiplier) + @tb * (2 + @tbMultiplier) + @wpb * (1 + @wpbMultiplier)",
				rows: "4",
				onInput: n[0] ||= (e) => r("updateWoundFormula", a(e))
			}, null, 42, Vb),
			s().length ? (R(), z("div", Hb, [(R(!0), z(L, null, I(s(), (e) => (R(), z("p", {
				key: e,
				class: "app:m-0 app:text-xs app:text-error"
			}, k(e), 1))), 128))])) : W("", !0),
			e.generatedTraitName ? (R(), z("p", Ub, " Generated Trait item: " + k(e.generatedTraitName), 1)) : W("", !0)
		])])]));
	}
}), Gb = { class: "dui-card dui-card-border dui-card-sm" }, Kb = { class: "dui-card-body" }, qb = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, Jb = { class: "dui-collapse-title" }, Yb = { class: "dui-badge" }, Xb = { class: "dui-collapse-content" }, Zb = { class: "dui-fieldset" }, Qb = [
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], $b = { class: "dui-collapse dui-collapse-arrow" }, ex = { class: "dui-collapse-title" }, tx = { class: "dui-badge" }, nx = { class: "dui-collapse-content" }, rx = {
	key: 0,
	class: "dui-list"
}, ix = {
	key: 1,
	class: "dui-alert"
}, ax = { class: "dui-collapse dui-collapse-arrow" }, ox = { class: "dui-collapse-title" }, sx = { class: "dui-badge" }, cx = { class: "dui-collapse-content" }, lx = {
	key: 0,
	class: "dui-list"
}, ux = {
	key: 1,
	class: "dui-alert"
}, dx = /* @__PURE__ */ F({
	__name: "SubspeciesChangesTab",
	props: {
		isDisabled: { type: Boolean },
		issues: {},
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
		let s = G(() => _c(r.parentDefinition, r.subspecies)), c = G(() => Sc(r.parentDefinition, r.subspecies, {
			parent: r.parentDefinition.woundFormula ? il(r.parentDefinition) : void 0,
			subspecies: r.subspecies.woundFormula ? r.woundFormulaTraitName : void 0
		})), l = G(() => K_(r.issues));
		function u(e) {
			return V_(r.issues, e).length > 0;
		}
		return (t, r) => (R(), z("section", Gb, [V("div", Kb, [
			r[6] ||= V("h3", { class: "dui-card-title" }, "Skill And Trait Changes", -1),
			r[7] ||= V("p", null, " These changes are applied to the parent lists and exported as complete WFRP subspecies lists. Open only the list you need to edit. ", -1),
			l.value.length ? (R(), z("div", qb, [r[0] ||= V("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), V("div", null, [(R(!0), z(L, null, I(l.value, (e) => (R(), z("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, k(e), 1))), 128))])])) : W("", !0),
			(R(), z(L, null, I(n, (t) => V("details", {
				key: t.field,
				class: "dui-collapse dui-collapse-arrow"
			}, [V("summary", Jb, [U(k(t.label) + " ", 1), V("span", Yb, k(e.subspecies[t.field]?.length ?? 0), 1)]), V("div", Xb, [V("fieldset", Zb, [r[1] ||= V("legend", { class: "dui-fieldset-legend" }, "One name per line", -1), V("textarea", {
				class: O(["dui-textarea", { "dui-textarea-error": u(t.field) }]),
				"aria-invalid": u(t.field) || void 0,
				disabled: e.isDisabled,
				value: o(e.subspecies[t.field]),
				rows: "5",
				onInput: (e) => i("updateArrayField", t.field, a(e))
			}, null, 42, Qb)])])])), 64)),
			r[8] ||= V("div", { class: "dui-divider" }, "Compiled Preview", -1),
			r[9] ||= V("div", { class: "dui-alert dui-alert-info" }, [V("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-eye"
			}), V("span", null, "Read-only previews show the final inherited lists WFRP will receive.")], -1),
			V("details", $b, [V("summary", ex, [r[2] ||= U(" Compiled Skills ", -1), V("span", tx, k(s.value.length), 1)]), V("div", nx, [s.value.length > 0 ? (R(), z("ul", rx, [(R(!0), z(L, null, I(s.value, (e) => (R(), z("li", {
				key: e,
				class: "dui-list-row"
			}, [r[3] ||= V("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-check"
			}, null, -1), V("span", null, k(e), 1)]))), 128))])) : (R(), z("p", ix, "The compiled Skill list is empty."))])]),
			V("details", ax, [V("summary", ox, [r[4] ||= U(" Compiled Traits ", -1), V("span", sx, k(c.value.length), 1)]), V("div", cx, [c.value.length > 0 ? (R(), z("ul", lx, [(R(!0), z(L, null, I(c.value, (e) => (R(), z("li", {
				key: e,
				class: "dui-list-row"
			}, [r[5] ||= V("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-check"
			}, null, -1), V("span", null, k(e), 1)]))), 128))])) : (R(), z("p", ux, "The compiled Trait list is empty."))])])
		])]));
	}
}), fx = { class: "dui-card dui-card-border dui-card-sm" }, px = { class: "dui-card-body" }, mx = { class: "dui-fieldset" }, hx = { class: "dui-table dui-table-sm" }, gx = { scope: "row" }, _x = ["for"], vx = [
	"id",
	"aria-invalid",
	"disabled",
	"value"
], yx = { scope: "row" }, bx = ["for"], xx = [
	"id",
	"aria-invalid",
	"disabled",
	"placeholder",
	"value"
], Sx = { class: "dui-fieldset" }, Cx = { class: "dui-fieldset" }, wx = /* @__PURE__ */ F({
	__name: "SubspeciesDetailsTab",
	props: {
		index: {},
		isDisabled: { type: Boolean },
		issues: {},
		subspecies: {}
	},
	emits: [
		"updateCharacteristic",
		"updateNumberField",
		"updateStringField"
	],
	setup(e, { emit: t }) {
		let n = e, r = t;
		function i(e) {
			return e.target instanceof HTMLInputElement ? e.target.value : "";
		}
		function a(e) {
			return K_(B_(n.issues, e));
		}
		return (t, n) => (R(), z("section", fx, [V("div", px, [
			V("fieldset", mx, [
				n[4] ||= V("legend", { class: "dui-fieldset-legend" }, "Identity", -1),
				n[5] ||= V("p", { class: "dui-fieldset-label" }, " Name this variant and give it a unique key under its parent species. ", -1),
				V("table", hx, [V("tbody", null, [V("tr", null, [V("th", gx, [V("label", { for: `subspecies-${e.index}-name` }, "Name", 8, _x)]), V("td", null, [V("input", {
					id: `subspecies-${e.index}-name`,
					class: O(["dui-input dui-input-sm", { "dui-input-error": a("name").length > 0 }]),
					"aria-invalid": a("name").length > 0 || void 0,
					disabled: e.isDisabled,
					value: e.subspecies.name,
					type: "text",
					onInput: n[0] ||= (e) => r("updateStringField", "name", i(e))
				}, null, 42, vx), (R(!0), z(L, null, I(a("name"), (e) => (R(), z("p", {
					key: e,
					class: "app:m-0 app:text-xs app:text-error"
				}, k(e), 1))), 128))])]), V("tr", null, [V("th", yx, [V("label", { for: `subspecies-${e.index}-key` }, "Key", 8, bx)]), V("td", null, [V("input", {
					id: `subspecies-${e.index}-key`,
					class: O(["dui-input dui-input-sm", { "dui-input-error": a("key").length > 0 }]),
					"aria-invalid": a("key").length > 0 || void 0,
					disabled: e.isDisabled,
					placeholder: N(Fp)(e.subspecies),
					value: e.subspecies.key,
					type: "text",
					onInput: n[1] ||= (e) => r("updateStringField", "key", i(e))
				}, null, 42, xx), (R(!0), z(L, null, I(a("key"), (e) => (R(), z("p", {
					key: e,
					class: "app:m-0 app:text-xs app:text-error"
				}, k(e), 1))), 128))])])])])
			]),
			V("fieldset", Sx, [
				n[6] ||= V("legend", { class: "dui-fieldset-legend" }, "Characteristic Overrides", -1),
				n[7] ||= V("p", { class: "dui-fieldset-label" }, " Enter only formulas that replace the parent species characteristic value. ", -1),
				H(Ev, {
					characteristics: e.subspecies.characteristics,
					"is-disabled": e.isDisabled,
					issues: e.issues,
					onUpdate: n[2] ||= (e, t) => r("updateCharacteristic", e, t)
				}, null, 8, [
					"characteristics",
					"is-disabled",
					"issues"
				])
			]),
			V("fieldset", Cx, [
				n[8] ||= V("legend", { class: "dui-fieldset-legend" }, "Resource Overrides", -1),
				n[9] ||= V("p", { class: "dui-fieldset-label" }, "Leave a value blank to keep the parent species value.", -1),
				H(Mv, {
					fields: [
						"movement",
						"fate",
						"resilience",
						"extra"
					],
					"is-disabled": e.isDisabled,
					issues: e.issues,
					values: e.subspecies,
					onUpdate: n[3] ||= (e, t) => r("updateNumberField", e, t)
				}, null, 8, [
					"is-disabled",
					"issues",
					"values"
				])
			])
		])]));
	}
});
//#endregion
//#region src/functions/species-builder/editor/subspecies-talents.ts
function Tx(e, t, n) {
	let r = Ox(e), i = Ox(t), a = Ox(n), o = r.filter((e) => !a.includes(e)).map((e) => ({
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
function Ex(e, t) {
	return e.source === "added" ? {
		field: "talentsAdded",
		value: kx(t.addedTalents.filter((t) => t !== e.name))
	} : {
		field: "talentsRemoved",
		value: kx([...t.removedTalents, e.name])
	};
}
function Dx(e, t) {
	return {
		field: "talentsRemoved",
		value: kx(t.removedTalents.filter((t) => t !== e))
	};
}
function Ox(e) {
	let t = [];
	for (let n of e ?? []) {
		let e = n.trim();
		e && !t.includes(e) && t.push(e);
	}
	return t;
}
function kx(e) {
	return Ox(e).join("\n");
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/tabs/subspecies/SubspeciesTalentInheritance.vue?vue&type=script&setup=true&lang.ts
var Ax = { class: "dui-card dui-card-border dui-card-sm" }, jx = { class: "dui-card-body" }, Mx = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, Nx = {
	key: 1,
	class: "dui-list"
}, Px = { class: "dui-list-col-grow" }, Fx = { class: "dui-badge" }, Ix = [
	"disabled",
	"title",
	"onClick"
], Lx = {
	key: 2,
	class: "dui-alert",
	role: "status"
}, Rx = { key: 3 }, zx = { class: "dui-card-actions" }, Bx = [
	"disabled",
	"title",
	"onClick"
], Vx = /* @__PURE__ */ F({
	__name: "SubspeciesTalentInheritance",
	props: {
		index: {},
		isDisabled: { type: Boolean },
		issues: {},
		parentTalents: {},
		subspecies: {}
	},
	emits: ["talentDrop", "updateArrayField"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = G(() => Tx(n.parentTalents, n.subspecies.talentsAdded, n.subspecies.talentsRemoved)), a = G(() => K_(n.issues));
		function o(e) {
			c(Ex(e, i.value));
		}
		function s(e) {
			c(Dx(e, i.value));
		}
		function c(e) {
			r("updateArrayField", n.index, e.field, e.value);
		}
		function l(e) {
			if (e.source !== "added") return [];
			let t = n.subspecies.talentsAdded?.findIndex((t) => t.trim() === e.name);
			return t === void 0 || t < 0 ? [] : U_(n.issues, "talentsAdded", t);
		}
		function u(e) {
			return K_(l(e));
		}
		return (t, n) => (R(), z("section", Ax, [V("div", jx, [
			n[6] ||= V("h3", { class: "dui-card-title" }, "Talent Inheritance", -1),
			n[7] ||= V("p", null, " Parent Talents are shown here as the subspecies Talent list. Removing an inherited Talent records it as removed; dropping a new Talent records it as added. ", -1),
			a.value.length ? (R(), z("div", Mx, [n[1] ||= V("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), V("div", null, [(R(!0), z(L, null, I(a.value, (e) => (R(), z("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, k(e), 1))), 128))])])) : W("", !0),
			H(P_, {
				description: "Drop a WFRP Talent item to add it to this subspecies.",
				disabled: e.isDisabled,
				title: "Drop Added Talent",
				variant: "compact",
				onDropData: n[0] ||= (t) => r("talentDrop", e.index, t)
			}, null, 8, ["disabled"]),
			i.value.activeRows.length > 0 ? (R(), z("ul", Nx, [(R(!0), z(L, null, I(i.value.activeRows, (t) => (R(), z("li", {
				key: `${t.source}-${t.name}`,
				class: O(["dui-list-row", { "app:border app:border-error": l(t).length > 0 }])
			}, [V("div", Px, [
				V("strong", null, k(t.name), 1),
				V("span", Fx, k(t.source === "inherited" ? "Inherited" : "Added"), 1),
				(R(!0), z(L, null, I(u(t), (e) => (R(), z("p", {
					key: e,
					class: "app:m-0 app:text-xs app:text-error"
				}, k(e), 1))), 128))
			]), V("button", {
				disabled: e.isDisabled,
				class: "dui-btn dui-btn-error dui-btn-sm",
				title: `Remove ${t.name}`,
				type: "button",
				onClick: (e) => o(t)
			}, [...n[2] ||= [V("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), U(" Remove ", -1)]], 8, Ix)], 2))), 128))])) : (R(), z("div", Lx, [...n[3] ||= [V("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), V("span", null, "No Talents in the compiled list.", -1)]])),
			i.value.removedParentTalents.length > 0 ? (R(), z("div", Rx, [n[5] ||= V("h4", null, "Removed Parent Talents", -1), V("div", zx, [(R(!0), z(L, null, I(i.value.removedParentTalents, (t) => (R(), z("button", {
				key: t,
				class: "dui-btn dui-btn-sm",
				disabled: e.isDisabled,
				title: `Restore ${t}`,
				type: "button",
				onClick: (e) => s(t)
			}, [n[4] ||= V("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-rotate-left"
			}, null, -1), U(" " + k(t), 1)], 8, Bx))), 128))])])) : W("", !0)
		])]));
	}
}), Hx = [
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
], Ux = {
	changes: ["skills", "traits"],
	details: [
		"subspecies",
		"details",
		"attributes"
	],
	tables: [
		"careerTable",
		"randomTalents",
		"talentReplacement",
		"careerReplacement"
	],
	talents: ["talents"],
	wounds: ["wounds"]
};
function Wx(e, t) {
	return e.filter((e) => Ux[t].includes(e.section));
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/tabs/subspecies/SubspeciesEditorSubView.vue?vue&type=script&setup=true&lang.ts
var Gx = ["onKeydown"], Kx = ["aria-busy"], qx = { id: "species-builder-subspecies-title" }, Jx = { class: "dui-card-actions" }, Yx = ["disabled"], Xx = {
	"aria-label": "Edit subspecies section",
	class: "dui-tabs dui-tabs-border",
	role: "tablist"
}, Zx = [
	"id",
	"aria-controls",
	"aria-selected",
	"autofocus",
	"disabled",
	"onClick"
], Qx = ["title"], $x = { class: "app:sr-only" }, eS = /* @__PURE__ */ F({
	__name: "SubspeciesEditorSubView",
	props: {
		index: {},
		isLoading: { type: Boolean },
		isOpen: { type: Boolean },
		isSaving: { type: Boolean },
		issues: {},
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
		let n = e, r = t, i = /* @__PURE__ */ M("details"), a = /* @__PURE__ */ M("careerTable"), o = /* @__PURE__ */ M(), s = Op(), c = Ep(), l = G(() => n.isLoading || n.isSaving), u = G(() => c.blockingValidationIssues.length > 0);
		function d() {
			r("delete", n.index);
		}
		function f(e, t) {
			e !== "careerReplacements" && r("updateTextMapField", n.index, e, t);
		}
		function p(e) {
			i.value = e;
		}
		function m(e) {
			return Wx(n.issues, e);
		}
		function h() {
			o.value?.close();
		}
		function g() {
			n.isOpen && r("close"), s.restore();
		}
		return qn(() => n.isOpen, async (e) => {
			e ? (i.value = "details", a.value = "careerTable", s.capture(), await On(), n.isOpen && !o.value?.open && o.value?.showModal()) : o.value?.open && o.value.close();
		}, {
			flush: "post",
			immediate: !0
		}), (t, n) => (R(), z("dialog", {
			ref_key: "dialog",
			ref: o,
			class: "dui-modal",
			"aria-labelledby": "species-builder-subspecies-title",
			onClose: g,
			onKeydown: Xo(Jo(h, ["stop", "prevent"]), ["esc"]),
			onKeyup: n[16] ||= Xo(Jo(() => {}, ["stop"]), ["esc"])
		}, [e.subspecies ? (R(), z("div", {
			key: 0,
			class: "dui-modal-box app:max-w-5xl",
			"aria-busy": l.value
		}, [
			V("header", null, [
				n[18] ||= V("span", { class: "dui-badge dui-badge-ghost" }, "Subspecies", -1),
				V("h2", qx, k(e.subspecies.name || "Untitled"), 1),
				V("div", Jx, [V("button", {
					class: "dui-btn dui-btn-error dui-btn-sm",
					disabled: l.value,
					type: "button",
					onClick: d
				}, [...n[17] ||= [V("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), U(" Delete ", -1)]], 8, Yx), V("button", {
					class: "dui-btn dui-btn-sm",
					type: "button",
					onClick: h
				}, "Close")])
			]),
			V("div", Xx, [(R(!0), z(L, null, I(N(Hx), (e) => (R(), z("button", {
				id: `subspecies-editor-tab-${e.tab}`,
				key: e.tab,
				"aria-controls": `subspecies-editor-panel-${e.tab}`,
				"aria-selected": i.value === e.tab,
				autofocus: e.tab === "details",
				class: O(["dui-tab", { "dui-tab-active": i.value === e.tab }]),
				disabled: l.value,
				role: "tab",
				type: "button",
				onClick: (t) => p(e.tab)
			}, [U(k(e.label) + " ", 1), m(e.tab).length > 0 ? (R(), z("span", {
				key: 0,
				class: "dui-status dui-status-error dui-status-sm",
				title: `${m(e.tab).length} character-creation issues`
			}, [V("span", $x, k(m(e.tab).length) + " character-creation issues ", 1)], 8, Qx)) : W("", !0)], 10, Zx))), 128))]),
			i.value === "details" ? (R(), B(wx, {
				key: 0,
				id: "subspecies-editor-panel-details",
				"aria-label": "Subspecies details",
				"aria-labelledby": "subspecies-editor-tab-details",
				index: e.index,
				"is-disabled": l.value,
				issues: m("details"),
				role: "tabpanel",
				subspecies: e.subspecies,
				onUpdateCharacteristic: n[0] ||= (t, n) => r("updateCharacteristic", e.index, t, n),
				onUpdateNumberField: n[1] ||= (t, n) => r("updateNumberField", e.index, t, n),
				onUpdateStringField: n[2] ||= (t, n) => r("updateStringField", e.index, t, n)
			}, null, 8, [
				"index",
				"is-disabled",
				"issues",
				"subspecies"
			])) : i.value === "talents" ? (R(), B(Vx, {
				key: 1,
				id: "subspecies-editor-panel-talents",
				"aria-label": "Subspecies Talents",
				"aria-labelledby": "subspecies-editor-tab-talents",
				index: e.index,
				"is-disabled": l.value,
				issues: m("talents"),
				"parent-talents": e.parentTalents,
				role: "tabpanel",
				subspecies: e.subspecies,
				onTalentDrop: n[3] ||= (e, t) => r("talentDrop", e, t),
				onUpdateArrayField: n[4] ||= (e, t, n) => r("updateArrayField", e, t, n)
			}, null, 8, [
				"index",
				"is-disabled",
				"issues",
				"parent-talents",
				"subspecies"
			])) : i.value === "changes" ? (R(), B(dx, {
				key: 2,
				id: "subspecies-editor-panel-changes",
				"aria-label": "Subspecies Skill and Trait changes",
				"aria-labelledby": "subspecies-editor-tab-changes",
				"is-disabled": l.value,
				issues: m("changes"),
				"parent-definition": e.parentDefinition,
				role: "tabpanel",
				subspecies: e.subspecies,
				"wound-formula-trait-name": e.woundFormulaTraitName,
				onUpdateArrayField: n[5] ||= (t, n) => r("updateArrayField", e.index, t, n)
			}, null, 8, [
				"is-disabled",
				"issues",
				"parent-definition",
				"subspecies",
				"wound-formula-trait-name"
			])) : i.value === "wounds" ? (R(), B(Wb, {
				key: 3,
				id: "subspecies-editor-panel-wounds",
				"aria-label": "Subspecies wounds",
				"aria-labelledby": "subspecies-editor-tab-wounds",
				formula: e.subspecies.woundFormula?.formula,
				"generated-trait-name": e.woundFormulaTraitName,
				"is-disabled": l.value,
				issues: m("wounds"),
				role: "tabpanel",
				onUpdateWoundFormula: n[6] ||= (t) => r("updateWoundFormula", e.index, t)
			}, null, 8, [
				"formula",
				"generated-trait-name",
				"is-disabled",
				"issues"
			])) : (R(), B(Pb, {
				key: 4,
				id: "subspecies-editor-panel-tables",
				"active-tab": a.value,
				"aria-label": "Subspecies tables",
				"aria-labelledby": "subspecies-editor-tab-tables",
				help: "Configure subspecies-specific random Talent draws and Talent replacement offers as rows.",
				"is-disabled": l.value,
				issues: m("tables"),
				"random-talent-sources": e.randomTalentSources,
				role: "tabpanel",
				"show-navigation": "",
				values: e.subspecies,
				onCareerTableCareerDrop: n[7] ||= (t, n) => r("careerTableCareerDrop", e.index, t, n),
				onCareerTableJournalDrop: n[8] ||= (t, n) => r("careerTableJournalDrop", e.index, t, n),
				onOpenItem: n[9] ||= (e) => r("openItem", e),
				onSelectTab: n[10] ||= (e) => a.value = e,
				onTalentReplacementReplacementDrop: n[11] ||= (t, n) => r("talentReplacementReplacementDrop", e.index, t, n),
				onTalentReplacementRolledDrop: n[12] ||= (t, n) => r("talentReplacementRolledDrop", e.index, t, n),
				onUpdate: f,
				onUpdateCareerTableRows: n[13] ||= (t) => r("updateCareerTableRows", e.index, t),
				onUpdateTalentReplacementRows: n[14] ||= (t) => r("updateTalentReplacementRows", e.index, t)
			}, null, 8, [
				"active-tab",
				"is-disabled",
				"issues",
				"random-talent-sources",
				"values"
			])),
			H(Vp, {
				"can-save": N(c).canSave,
				"entity-key": e.subspecies.key,
				"entity-name": e.subspecies.name || "Untitled Subspecies",
				"has-unsaved-changes": N(c).hasUnsavedChanges,
				"has-validation-errors": u.value,
				"is-loading": N(c).isLoading,
				"is-saving": N(c).isSaving,
				"load-error": N(c).loadError,
				onSave: n[15] ||= (e) => r("save")
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
		], 8, Kx)) : W("", !0), n[19] ||= V("form", {
			class: "dui-modal-backdrop",
			method: "dialog"
		}, [V("button", {
			"aria-label": "Close subspecies editor",
			type: "submit"
		}, "Close")], -1)], 40, Gx));
	}
}), tS = /* @__PURE__ */ F({
	__name: "SpeciesBuilderSubspeciesOverlay",
	props: {
		index: {},
		isLoading: { type: Boolean },
		isOpen: { type: Boolean },
		isSaving: { type: Boolean },
		issues: {},
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
		return (t, i) => (R(), B(eS, {
			index: e.index,
			"is-loading": e.isLoading,
			"is-open": e.isOpen,
			"is-saving": e.isSaving,
			issues: e.issues,
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
			"issues",
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
function nS(e, t) {
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
var rS = { class: "dui-card dui-card-border dui-card-sm" }, iS = { class: "dui-card-body" }, aS = { class: "app:flex app:items-start app:justify-between app:gap-4" }, oS = { class: "dui-card-actions app:items-center" }, sS = { class: "dui-badge" }, cS = ["disabled"], lS = {
	key: 0,
	class: "dui-alert",
	role: "status"
}, uS = {
	key: 1,
	class: "dui-list"
}, dS = /* @__PURE__ */ F({
	__name: "SubspeciesSection",
	props: {
		definition: {},
		isLoading: { type: Boolean },
		isSaving: { type: Boolean },
		validationCounts: {}
	},
	emits: ["addSubspecies", "editSubspecies"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = G(() => n.definition.subspecies ?? []);
		function a(e) {
			return e.name.trim() || e.key.trim() || "Untitled Subspecies";
		}
		function o(e) {
			return e.key.trim() || Fp(e);
		}
		return (t, n) => (R(), z("section", rS, [V("div", iS, [V("header", aS, [n[2] ||= V("div", null, [V("h3", { class: "dui-card-title" }, "Subspecies"), V("p", { class: "app:m-0" }, "Variants inherit this species and store only their changes.")], -1), V("div", oS, [V("span", sS, k(i.value.length), 1), V("button", {
			class: "dui-btn dui-btn-sm",
			disabled: e.isLoading || e.isSaving,
			type: "button",
			onClick: n[0] ||= (e) => r("addSubspecies")
		}, [...n[1] ||= [V("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-plus"
		}, null, -1), U(" New Subspecies ", -1)]], 8, cS)])]), i.value.length === 0 ? (R(), z("div", lS, [...n[3] ||= [V("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-circle-info"
		}, null, -1), V("span", null, "No subspecies yet.", -1)]])) : (R(), z("ul", uS, [(R(!0), z(L, null, I(i.value, (t, n) => (R(), B(qg, {
			key: `${t.key}-${n}`,
			"entry-key": o(t),
			"icon-class": "fa-solid fa-user-group",
			"is-disabled": e.isLoading || e.isSaving,
			title: a(t),
			"validation-count": e.validationCounts[n] ?? 0,
			onOpen: (e) => r("editSubspecies", n)
		}, null, 8, [
			"entry-key",
			"is-disabled",
			"title",
			"validation-count",
			"onOpen"
		]))), 128))]))])]));
	}
}), fS = /* @__PURE__ */ F({
	__name: "SpeciesBuilderDetailPanel",
	props: {
		activeEditorTab: {},
		activeTableTab: {},
		definition: {},
		isLoading: { type: Boolean },
		isSaving: { type: Boolean },
		issues: {},
		randomTalentSources: {}
	},
	emits: /* @__PURE__ */ "addSubspecies.careerTableCareerDrop.careerTableJournalDrop.careerReplacementChoiceDrop.careerReplacementRolledDrop.deleteSubspecies.openItem.save.subspeciesTalentDrop.subspeciesTalentReplacementReplacementDrop.subspeciesTalentReplacementRolledDrop.talentReplacementReplacementDrop.talentReplacementRolledDrop.updateBooleanField.updateCareerReplacementRows.updateCareerTableRows.updateCharacteristic.updateHeightField.updateNumberField.updateStringField.updateWoundFormula.updateSubspeciesArrayField.updateSubspeciesCharacteristic.updateSubspeciesNumberField.updateSubspeciesStringField.updateSubspeciesCareerTableRows.subspeciesCareerTableCareerDrop.subspeciesCareerTableJournalDrop.updateSubspeciesWoundFormula.updateSubspeciesTalentReplacementRows.updateSubspeciesTextMapField.updateTalentReplacementRows.updateTextMapField".split("."),
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ M(-1), a = /* @__PURE__ */ M(null), o = G(() => n.definition.subspecies?.[i.value]), s = G(() => Wu(Hu(n.definition.talents, n.definition.linkedTalents))), c = G(() => il(n.definition)), l = G(() => {
			let e = o.value;
			return e ? al(n.definition, e) : "";
		}), u = G(() => n.issues.filter((e) => e.scope === "definition")), d = G(() => n.issues.filter((e) => e.scope === "subspecies" && e.subspeciesIndex === i.value)), f = G(() => (n.definition.subspecies ?? []).map((e, t) => n.issues.filter((e) => e.scope === "subspecies" && e.subspeciesIndex === t).length)), p = G(() => n.activeEditorTab === "skills" || n.activeEditorTab === "talents" || n.activeEditorTab === "traits" ? [n.activeEditorTab] : []);
		qn(() => n.definition.key, () => {
			i.value = -1;
		}), qn(() => n.definition.subspecies?.length ?? 0, (e) => {
			i.value >= e && (i.value = -1);
		});
		async function m() {
			let e = n.definition.subspecies?.length ?? 0;
			r("addSubspecies"), await On(), await h(e);
		}
		async function h(e) {
			i.value = e, await On(), v();
		}
		function g(e) {
			r("deleteSubspecies", e), i.value = -1;
		}
		let _ = nS(r, {
			close: () => {
				i.value = -1;
			},
			deleteSubspecies: g
		});
		function v() {
			let e = a.value?.parentElement ?? null;
			for (; e;) {
				if (y(e)) {
					e.scrollTop = 0;
					return;
				}
				e = e.parentElement;
			}
		}
		function y(e) {
			let t = window.getComputedStyle(e).overflowY;
			return e.scrollHeight > e.clientHeight && (t === "auto" || t === "scroll" || t === "overlay");
		}
		return (t, n) => (R(), z("section", {
			ref_key: "detailPanelElement",
			ref: a
		}, [H(tS, Da({
			index: i.value,
			"is-loading": e.isLoading,
			"is-open": i.value >= 0,
			"is-saving": e.isSaving,
			issues: d.value,
			"parent-talents": s.value,
			"parent-definition": e.definition,
			"random-talent-sources": e.randomTalentSources,
			subspecies: o.value,
			"wound-formula-trait-name": l.value
		}, Wr(N(_))), null, 16, [
			"index",
			"is-loading",
			"is-open",
			"is-saving",
			"issues",
			"parent-talents",
			"parent-definition",
			"random-talent-sources",
			"subspecies",
			"wound-formula-trait-name"
		]), e.activeEditorTab === "details" ? (R(), B(hy, {
			key: 0,
			id: "species-editor-panel-details",
			"aria-label": "Species details",
			definition: e.definition,
			"is-disabled": e.isLoading || e.isSaving,
			issues: u.value,
			role: "region",
			onUpdateBooleanField: n[0] ||= (e, t) => r("updateBooleanField", e, t),
			onUpdateHeightField: n[1] ||= (e, t) => r("updateHeightField", e, t),
			onUpdateStringField: n[2] ||= (e, t) => r("updateStringField", e, t)
		}, null, 8, [
			"definition",
			"is-disabled",
			"issues"
		])) : e.activeEditorTab === "attributes" ? (R(), B(Bv, {
			key: 1,
			id: "species-editor-panel-attributes",
			"aria-label": "Species attributes",
			definition: e.definition,
			"is-disabled": e.isLoading || e.isSaving,
			issues: u.value,
			role: "region",
			onUpdateCharacteristic: n[3] ||= (e, t) => r("updateCharacteristic", e, t),
			onUpdateNumberField: n[4] ||= (e, t) => r("updateNumberField", e, t)
		}, null, 8, [
			"definition",
			"is-disabled",
			"issues"
		])) : e.activeEditorTab === "wounds" ? (R(), B(Wb, {
			key: 2,
			id: "species-editor-panel-wounds",
			"aria-label": "Species wounds",
			formula: e.definition.woundFormula?.formula,
			"generated-trait-name": c.value,
			"is-disabled": e.isLoading || e.isSaving,
			issues: u.value,
			role: "region",
			onUpdateWoundFormula: n[5] ||= (e) => r("updateWoundFormula", e)
		}, null, 8, [
			"formula",
			"generated-trait-name",
			"is-disabled",
			"issues"
		])) : p.value.length > 0 ? (R(), B(bv, {
			key: 3,
			id: `species-editor-panel-${e.activeEditorTab}`,
			"aria-label": `Species ${e.activeEditorTab}`,
			fields: p.value,
			"is-disabled": e.isLoading || e.isSaving,
			issues: u.value,
			role: "region",
			values: e.definition
		}, null, 8, [
			"id",
			"aria-label",
			"fields",
			"is-disabled",
			"issues",
			"values"
		])) : e.activeEditorTab === "tables" ? (R(), B(Pb, {
			key: 4,
			id: "species-editor-panel-tables",
			"active-tab": e.activeTableTab,
			"aria-label": "Species tables",
			help: "Configure random Talent draws, Talent swap offers, and Career replacement choices without writing object-map syntax by hand.",
			"include-career-replacements": "",
			"is-disabled": e.isLoading || e.isSaving,
			issues: u.value,
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
			"issues",
			"random-talent-sources",
			"values"
		])) : (R(), B(dS, {
			key: 5,
			id: "species-editor-panel-subspecies",
			"aria-label": "Subspecies",
			definition: e.definition,
			"is-loading": e.isLoading,
			"is-saving": e.isSaving,
			"validation-counts": f.value,
			role: "region",
			onAddSubspecies: m,
			onEditSubspecies: h
		}, null, 8, [
			"definition",
			"is-loading",
			"is-saving",
			"validation-counts"
		]))], 512));
	}
}), pS = { class: "app:mb-3" }, mS = { class: "dui-card-title" }, hS = { class: "app:m-0" }, gS = {
	key: 1,
	role: "status",
	class: "dui-alert dui-alert-warning"
}, _S = /* @__PURE__ */ F({
	__name: "SpeciesBuilderEditorPage",
	props: {
		activeEditorTab: {},
		activeTableTab: {},
		definition: {},
		isLoading: { type: Boolean },
		isSaving: { type: Boolean },
		issues: {},
		randomTalentSources: {}
	},
	emits: /* @__PURE__ */ "addSubspecies.careerTableCareerDrop.careerTableJournalDrop.careerReplacementChoiceDrop.careerReplacementRolledDrop.deleteSubspecies.openItem.save.subspeciesTalentDrop.subspeciesTalentReplacementReplacementDrop.subspeciesTalentReplacementRolledDrop.talentReplacementReplacementDrop.talentReplacementRolledDrop.updateBooleanField.updateCareerReplacementRows.updateCareerTableRows.updateCharacteristic.updateHeightField.updateNumberField.updateStringField.updateWoundFormula.updateSubspeciesArrayField.updateSubspeciesCharacteristic.updateSubspeciesNumberField.updateSubspeciesStringField.updateSubspeciesCareerTableRows.subspeciesCareerTableCareerDrop.subspeciesCareerTableJournalDrop.updateSubspeciesWoundFormula.updateSubspeciesTalentReplacementRows.updateSubspeciesTextMapField.updateTalentReplacementRows.updateTextMapField".split("."),
	setup(e, { emit: t }) {
		let n = e, r = t, i = G(() => fm("species", !0, n.activeEditorTab, n.activeTableTab));
		return (t, n) => (R(), z("section", null, [V("header", pS, [V("h2", mS, k(i.value.label), 1), V("p", hS, k(i.value.description), 1)]), e.definition ? (R(), B(fS, {
			key: 0,
			"active-editor-tab": e.activeEditorTab,
			"active-table-tab": e.activeTableTab,
			definition: e.definition,
			"is-loading": e.isLoading,
			"is-saving": e.isSaving,
			issues: e.issues,
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
			"issues",
			"random-talent-sources"
		])) : (R(), z("section", gS, "No species selected."))]));
	}
}), vS = ["aria-busy"], yS = { class: "app:flex app:flex-1 app:items-start app:gap-3 app:p-3" }, bS = { class: "app:flex app:min-w-0 app:flex-1 app:flex-col app:gap-3" }, xS = /* @__PURE__ */ F({
	__name: "SpeciesBuilderApp",
	props: {
		bridge: {},
		onSettingsSaved: { type: Function }
	},
	setup(e) {
		let t = e, n = Dp(t.bridge, { onSettingsSaved: t.onSettingsSaved }), r = /* @__PURE__ */ M("species"), i = /* @__PURE__ */ M(!1), a = /* @__PURE__ */ M("details"), o = /* @__PURE__ */ M("careerTable"), s = G(() => n.isLoading.value || n.isSaving.value), c = G(() => fm(r.value, i.value, a.value, o.value)), l = G(() => i.value ? n.selectedDefinition.value?.name.trim() || n.selectedDefinition.value?.key.trim() || "Untitled Species" : ""), u = G(() => gs(n.definitions.value).map((e) => e.key)), d = G(() => n.blockingValidationIssues.value.length > 0 || n.blockingSpeciesTableValidationMessages.value.length > 0), f = G(() => n.validationIssues.value.filter((e) => e.definitionIndex === n.selectedIndex.value)), p = G(() => um(n.validationIssues.value, n.selectedIndex.value)), m = G(() => i.value ? f.value[0]?.message ?? "" : r.value === "species-table" ? n.validationIssues.value.find((e) => e.scope === "species-table")?.message ?? "" : n.validationIssues.value[0]?.message ?? ""), h = G(() => !!n.loadError.value || !!n.saveError.value || !!n.message.value || n.validationIssues.value.length > 0 || d.value), { confirmPendingDelete: g, pendingDelete: _, requestDeleteDefinition: v, requestDeleteSubspecies: y } = Ih({
			deleteDefinition: n.deleteSelectedDefinition,
			deleteSubspecies: n.deleteSubspecies,
			selectedDefinition: n.selectedDefinition
		});
		Or(() => {
			n.loadSettings();
		}), qn(() => n.showGeneratedConfigTab.value, (e) => {
			!e && r.value === "wfrp-config" && (r.value = "species");
		}), qn(() => n.selectedDefinition.value, (e) => {
			e || (i.value = !1);
		});
		function b(e) {
			(e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement || e.target instanceof HTMLTextAreaElement) && e.stopPropagation();
		}
		function x(e, t = "details") {
			n.selectDefinition(e), S(t);
		}
		function S(e) {
			r.value = "species", a.value = e, i.value = !0;
		}
		function C(e) {
			o.value = e, S("tables");
		}
		function w(e) {
			r.value = e, i.value = !1;
		}
		function ee(e) {
			n.addDefinition(e), S("details");
		}
		let T = p_(n, { requestDeleteSubspecies: y });
		return (e, t) => (R(), z("section", {
			class: "app:flex app:min-h-full app:flex-col",
			"aria-busy": s.value,
			onKeydown: b,
			onKeyup: b
		}, [
			H(rm, {
				"can-manage-definition": i.value && !!N(n).selectedDefinition.value,
				"context-label": c.value.label,
				"definition-name": l.value,
				"is-busy": s.value,
				onDelete: N(v),
				onDuplicate: N(n).duplicateSelectedDefinition,
				onReload: N(n).loadSettings,
				onSelectSpecies: t[0] ||= (e) => w("species")
			}, {
				actions: P(({ dialogHost: e }) => [H(Fh, {
					definition: N(n).selectedDefinition.value,
					"dialog-host": e,
					"existing-keys": u.value,
					"is-disabled": s.value,
					onImportDefinition: ee
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
			H(Np, {
				message: N(_)?.message,
				onClose: t[1] ||= (e) => _.value = null,
				onConfirm: N(g)
			}, null, 8, ["message", "onConfirm"]),
			V("main", yS, [H(xm, {
				"active-editor-tab": a.value,
				"active-table-tab": o.value,
				"active-tab": r.value,
				"has-selected-definition": !!N(n).selectedDefinition.value,
				"is-busy": s.value,
				"is-editor-open": i.value,
				"show-generated-config-tab": N(n).showGeneratedConfigTab.value,
				"validation-counts": p.value,
				onSelectEditorTab: S,
				onSelectTableTab: C,
				onSelectTab: w
			}, null, 8, [
				"active-editor-tab",
				"active-table-tab",
				"active-tab",
				"has-selected-definition",
				"is-busy",
				"is-editor-open",
				"show-generated-config-tab",
				"validation-counts"
			]), V("div", bS, [h.value ? (R(), B(Dm, {
				key: 0,
				"chargen-issue-count": N(n).validationIssues.value.length,
				"chargen-issue-message": m.value,
				"load-error": N(n).loadError.value || N(n).saveError.value,
				message: N(n).message.value,
				"validation-message": N(n).blockingSpeciesTableValidationMessages.value[0] ?? ""
			}, null, 8, [
				"chargen-issue-count",
				"chargen-issue-message",
				"load-error",
				"message",
				"validation-message"
			])) : W("", !0), i.value ? (R(), B(_S, Da({
				key: 2,
				id: "species-builder-panel-species",
				"active-editor-tab": a.value,
				"active-table-tab": o.value,
				"aria-label": "Species editor",
				definition: N(n).selectedDefinition.value,
				"is-loading": N(n).isLoading.value,
				"is-saving": N(n).isSaving.value,
				issues: f.value,
				"random-talent-sources": N(n).randomTalentSources.value,
				role: "region"
			}, Wr(N(T))), null, 16, [
				"active-editor-tab",
				"active-table-tab",
				"definition",
				"is-loading",
				"is-saving",
				"issues",
				"random-talent-sources"
			])) : (R(), B(f_, {
				key: 1,
				"active-tab": r.value,
				"is-disabled": s.value,
				onEditSpecies: x
			}, null, 8, ["active-tab", "is-disabled"]))])]),
			H(Vp, {
				"can-save": N(n).canSave.value,
				definition: i.value ? N(n).selectedDefinition.value : void 0,
				"has-unsaved-changes": N(n).hasUnsavedChanges.value,
				"has-validation-errors": d.value,
				"is-loading": N(n).isLoading.value,
				"is-saving": N(n).isSaving.value,
				"load-error": N(n).loadError.value || N(n).saveError.value,
				"entity-name": r.value === "species-table" ? "Species Table" : void 0,
				onSave: N(n).saveChanges
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
		], 40, vS));
	}
}), $ = "wfrp4e-customizer-apps", SS = "wfrp4e", CS = Us();
//#endregion
//#region src/module/foundry/document-drop.ts
function wS(e) {
	let t = e.value.trim();
	if (!t) return "";
	if (MS(t)) return t;
	let n = OS(t), r = AS(n, e.documentType);
	return r ? NS(n) ? JSON.stringify({
		type: r,
		uuid: n
	}) : JSON.stringify({
		id: n,
		type: r
	}) : "";
}
function TS(e) {
	let t = !0;
	function n() {
		t && (t = !1, document.removeEventListener("click", r, !0));
	}
	function r(t) {
		let r = t.target;
		if (!(r instanceof Element)) return;
		let i = ES(r);
		i && (t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), n(), e(i));
	}
	return document.addEventListener("click", r, !0), n;
}
function ES(e) {
	let t = e.closest("[data-uuid], [data-document-uuid], [data-entry-uuid], [data-document-id], [data-entry-id], [data-pack]");
	if (!t) return "";
	let n = t.dataset.uuid || t.dataset.documentUuid || t.dataset.entryUuid || "";
	if (n) return DS(n);
	let r = t.dataset.documentId || t.dataset.entryId || "", i = kS(t);
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
function DS(e) {
	let t = AS(e, "auto");
	return t ? JSON.stringify({
		type: t,
		uuid: e
	}) : "";
}
function OS(e) {
	return /@UUID\[([^\]]+)]/.exec(e)?.[1]?.trim() ?? e;
}
function kS(e) {
	let t = e.dataset.documentName || e.dataset.type || e.closest("[data-document-name]")?.dataset.documentName || "";
	return jS(t) ? t : e.classList.contains("actor") ? "Actor" : e.classList.contains("item") ? "Item" : e.classList.contains("journal") ? "JournalEntry" : e.closest("#actors") ? "Actor" : e.closest("#items") ? "Item" : e.closest("#journal") ? "JournalEntry" : "";
}
function AS(e, t) {
	return /^actor\./i.test(e) || /\.actors(\.|$)/i.test(e) ? "Actor" : /^item\./i.test(e) || /\.items(\.|$)/i.test(e) ? "Item" : /journalentrypage\./i.test(e) || /\.journalentrypage\./i.test(e) ? "JournalEntryPage" : /^journalentry\./i.test(e) || /\.journals(\.|$)/i.test(e) ? "JournalEntry" : t === "auto" ? "Item" : t;
}
function jS(e) {
	return e === "Actor" || e === "Item" || e === "JournalEntry" || e === "JournalEntryPage";
}
function MS(e) {
	if (!e.startsWith("{")) return !1;
	try {
		return typeof JSON.parse(e).type == "string";
	} catch {
		return !1;
	}
}
function NS(e) {
	return /^(actor|item|journalentry|journalentrypage|compendium)\./i.test(e);
}
var PS = {
	createDropData: wS,
	startDocumentPick: TS
}, FS = class extends foundry.applications.api.ApplicationV2 {
	#e;
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("wfrp4e-customizer-apps-root"), n.dataset.theme = "wfrp4e-customizer-apps", n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("wfrp4e-customizer-apps-app"), t.replaceChildren(e);
		let r = this.getVueProps() ?? {};
		this.#e = es(this.getVueComponent(), r), this.#e.use(CS), this.#e.provide(m_, PS), this.#e.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#e?.unmount(), this.#e = void 0;
	}
}, IS = "generatedSpeciesCareerTable", LS = "Compendium.wfrp4e-core.journals.JournalEntry.wczCPcuHT4VQDLpL";
function RS(e) {
	return e.definitions.flatMap((e) => [...BS(e), ...VS(e)]);
}
function zS({ fallbackJournalUuid: e = LS, flagScope: t, spec: n }) {
	return {
		displayRoll: !0,
		flags: {
			wfrp4e: {
				column: n.column,
				key: "career"
			},
			[t]: { [IS]: {
				speciesKey: n.speciesKey,
				subspeciesKey: n.subspeciesKey ?? ""
			} }
		},
		formula: `1d${n.rows.length}`,
		img: "systems/wfrp4e/ui/buttons/d10.webp",
		name: n.name,
		replacement: !0,
		results: n.rows.map((t, n) => ({
			description: HS(t, e),
			drawn: !1,
			img: "icons/svg/d20-grey.svg",
			name: t.name,
			range: [n + 1, n + 1],
			type: "text",
			weight: 1
		}))
	};
}
function BS(e) {
	return e.careerTable?.rows.length ? [{
		column: vl(e),
		name: `Career - ${e.name}`,
		rows: e.careerTable.rows,
		speciesKey: e.key
	}] : [];
}
function VS(e) {
	return (e.subspecies ?? []).flatMap((t) => t.careerTable?.rows.length ? [{
		column: yl(e, t),
		name: `Career - ${e.name} / ${t.name}`,
		rows: t.careerTable.rows,
		speciesKey: e.key,
		subspeciesKey: t.key
	}] : []);
}
function HS(e, t) {
	return `@UUID[${e.journalUuid?.trim() || t}]{${US(e.name)}}`;
}
function US(e) {
	return e.replaceAll("{", "").replaceAll("}", "").trim();
}
//#endregion
//#region src/functions/species-builder/default-species-builder-settings.ts
function WS() {
	return {
		autoRegisterSpeciesTable: !1,
		definitions: [],
		showGeneratedConfigTab: !1
	};
}
//#endregion
//#region src/module/settings/foundry-setting-adapter.ts
function GS(e) {
	return e;
}
function KS(e) {
	game.settings.register($, e.key, {
		config: e.config ?? !1,
		default: e.defaultValue,
		name: e.name,
		scope: e.scope ?? "world",
		type: Object
	});
}
function qS(e) {
	return e.normalize(game.settings.get($, e.key));
}
async function JS(e, t) {
	let n = e.normalize(t);
	return await game.settings.set($, e.key, n), n;
}
//#endregion
//#region src/module/apps/species-builder/settings.ts
var YS = GS({
	defaultValue: WS(),
	key: "speciesBuilderSettings",
	name: "Species Builder Settings",
	normalize: Hl
});
function XS() {
	KS(YS);
}
function ZS() {
	return qS(YS);
}
async function QS(e) {
	return await JS(YS, e);
}
//#endregion
//#region src/module/apps/species-builder/career-tables.ts
var $S = "WFRP Customizer Generated Career Tables", eC = "WFRP Customizer Career Table Link Fallback";
async function tC(t = ZS()) {
	let n = RS(t), r = await nC(), i = await aC();
	await rC(r);
	for (let e of n) {
		let t = zS({
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
async function nC() {
	let e = game.folders.contents.find((e) => e.type === "RollTable" && e.name === $S);
	if (e) return e;
	let t = await Folder.create({
		name: $S,
		type: "RollTable"
	});
	if (!t) throw Error("Foundry did not create the generated career table folder.");
	return t;
}
async function rC(e) {
	let t = (game.tables?.contents ?? []).filter((t) => t.folder?.id === e.id || iC(t));
	for (let e of t) await e.delete();
}
function iC(e) {
	return Y(X(e.toObject(), [
		"flags",
		$,
		IS
	]));
}
async function aC() {
	let e = game.journal?.contents.find((e) => e.name === eC);
	if (e) return e.uuid;
	let t = await JournalEntry.create({
		name: eC,
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
function oC(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Actor";
}
function sC(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Item";
}
function cC(e, t = "Expected a Foundry Actor.") {
	if (!oC(e)) throw Error(t);
	return e;
}
function lC(e, t = "Expected a Foundry Item.") {
	if (!sC(e)) throw Error(t);
	return e;
}
function uC(e, t, n = `Expected a Foundry ${t} Item.`) {
	let r = lC(e, n);
	if (r.type !== t) throw Error(n);
	return r;
}
//#endregion
//#region src/module/foundry/drop-data.ts
function dC(e) {
	try {
		return JSON.parse(e);
	} catch {
		throw Error("Foundry drop data could not be read.");
	}
}
//#endregion
//#region src/module/apps/species-builder/item-drops.ts
async function fC(e, t) {
	let n = dC(e);
	if (n.type !== "Item" || !n.uuid) throw Error(`Drop a Foundry ${t} item here.`);
	let r = lC(await fromUuid(n.uuid), `Drop a Foundry ${t} item here.`);
	if (r.type !== t) throw Error(`Drop a Foundry ${t} item here.`);
	let i = {
		name: t === "career" && gC(r) || r.name,
		type: t,
		uuid: r.uuid
	};
	if (t === "career") {
		let e = _C(r);
		e && (i.careerJournalUuid = e);
	}
	let a = hC(r);
	return a && (i.specification = a), r.img && (i.img = r.img), i;
}
async function pC(e) {
	let t = dC(e);
	if (t.type !== "JournalEntry" && t.type !== "JournalEntryPage" || !t.uuid) throw Error("Drop a Foundry Journal Entry or Journal Entry Page here.");
	let n = await fromUuid(t.uuid);
	if (!bC(n)) throw Error("Drop a Foundry Journal Entry or Journal Entry Page here.");
	return {
		name: n.name,
		uuid: n.uuid
	};
}
async function mC(e) {
	lC(await fromUuid(e), "The linked Foundry Item was not found.").sheet?.render(!0);
}
function hC(e) {
	let t = [
		X(e.system, ["specification", "value"]),
		X(e, ["specifier"]),
		X(e.system, ["specifier"]),
		X(e.system, ["specifier", "value"])
	];
	for (let e of t) {
		if (typeof e == "string" && e.trim()) return e.trim();
		if (typeof e == "number") return String(e);
	}
	return "";
}
function gC(e) {
	let t = X(e.system, ["careergroup", "value"]);
	return typeof t == "string" ? t.trim() : "";
}
function _C(e) {
	let t = X(e.system, ["description", "value"]);
	return typeof t == "string" ? /^@UUID\[([^\]]+)]{[^{}]+}$/.exec(vC(t))?.[1]?.trim() ?? "" : "";
}
function vC(e) {
	let t = e.trim();
	t = t.replaceAll(/<(p|div)>(?:\s|&nbsp;|<br\s*\/?>)*<\/\1>/gi, "").trim();
	let n = /^<(p|div)>([\S\s]*)<\/\1>$/i.exec(t);
	return n?.[2] !== void 0 && (t = n[2].trim()), yC(t.replaceAll(/<br\s*\/?>/gi, "").trim());
}
function yC(e) {
	return e.replaceAll("&nbsp;", " ").replaceAll("&amp;", "&").replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", "\"").replaceAll("&#39;", "'").trim();
}
function bC(e) {
	return typeof e == "object" && !!e && "documentName" in e && (e.documentName === "JournalEntry" || e.documentName === "JournalEntryPage") && "name" in e && typeof e.name == "string" && "uuid" in e && typeof e.uuid == "string";
}
//#endregion
//#region src/module/apps/species-builder/random-talent-sources.ts
var xC = {
	key: "talents",
	label: "Talents - Character Creation"
};
function SC() {
	let e = /* @__PURE__ */ new Map();
	e.set(xC.key, xC);
	for (let t of game.tables?.contents ?? []) {
		let n = t.getFlag("wfrp4e", "key");
		if (typeof n != "string" || !n.trim()) continue;
		let r = CC(n, t);
		e.set(n, {
			key: n,
			label: r
		});
	}
	return [...e.values()].sort(wC);
}
function CC(e, t) {
	let n = game.wfrp4e?.tables?.findTable?.(e);
	return (Y(n) && typeof n.name == "string" ? n.name : t.name).trim() || e;
}
function wC(e, t) {
	return e.key === xC.key ? -1 : t.key === xC.key ? 1 : e.label.localeCompare(t.label);
}
//#endregion
//#region src/module/apps/species-builder/world-table/journals.ts
var TC = "generatedSpeciesJournal", EC = "WFRP Customizer Species Journals";
async function DC(e) {
	let t = game.journal?.contents ?? [], n = OC(t), r, i = [];
	for (let a of e.rows) {
		let e = kC(a.journalUuid, a.speciesKey, t) || n.get(a.speciesKey)?.uuid;
		if (!e) {
			r ??= await jC();
			let t = await JournalEntry.create({
				flags: { [$]: { [TC]: { speciesKey: a.speciesKey } } },
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
function OC(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = AC(n);
		if (e) {
			if (t.has(e)) throw Error(`Multiple Species Builder Journals exist for "${e}". Remove the duplicate and retry.`);
			t.set(e, n);
		}
	}
	return t;
}
function kC(e, t, n) {
	let r = e?.trim() ?? "";
	if (!r) return "";
	let i = n.find((e) => e.uuid === r);
	if (!i) return r.startsWith("JournalEntry.") && r.split(".").length === 2 ? "" : r;
	let a = AC(i);
	return a && a !== t ? "" : r;
}
function AC(e) {
	let t = e.getFlag($, TC);
	return Y(t) ? Z(t, ["speciesKey"]).trim() : "";
}
async function jC() {
	let e = game.folders.contents.find((e) => e.type === "JournalEntry" && e.name === EC);
	if (e) return e;
	let t = await Folder.create({
		name: EC,
		type: "JournalEntry"
	});
	if (!t) throw Error("Foundry did not create the generated Species Journal folder.");
	return t;
}
//#endregion
//#region src/module/apps/species-builder/world-table/persistence.ts
var MC = "species", NC = "tableSettings";
async function PC(e) {
	let t = await DC(e), n = hu(t, $);
	return e.ownership === "managed" ? await RC(t, n) : await LC(t, n);
}
async function FC(e) {
	let t = game.settings.get(SS, NC);
	if (!Y(t)) throw Error("WFRP table settings are unavailable; the Species table was not registered.");
	await game.settings.set(SS, NC, {
		...t,
		[MC]: e
	});
}
function IC(e) {
	return e.getFlag($, au) === !0;
}
async function LC(e, t) {
	if (e.ownership === "external") {
		let t = e.tableId ? game.tables?.get(e.tableId) : void 0;
		if (!t || IC(t)) throw Error("The source Species table changed. Reload before saving a managed copy.");
	}
	if ((game.tables?.contents ?? []).some(IC)) throw Error("A managed Species table already exists. Reload before saving.");
	let n = await RollTable.create(t);
	if (!n) throw Error("Foundry did not create the managed Species table.");
	return n;
}
async function RC(e, t) {
	let n = e.tableId ? game.tables?.get(e.tableId) : void 0;
	if (!n || !IC(n)) throw Error("The managed Species table changed. Reload before saving again.");
	let r = Array.isArray(t.results) ? t.results.filter(Y) : [];
	return await n.update({
		displayRoll: t.displayRoll,
		[`flags.${$}.${au}`]: !0,
		[`flags.${SS}.key`]: MC,
		formula: t.formula,
		name: t.name,
		replacement: t.replacement
	}), await zC(n, e.rows, r), n;
}
async function zC(e, t, n) {
	let r = e.toObject(), i = Array.isArray(r.results) ? r.results.filter(Y) : [], a = new Set(i.map((e) => Z(e, ["_id"]))), o = /* @__PURE__ */ new Set(), s = [], c = [];
	n.forEach((e, n) => {
		let r = BC(t[n], i, a, o);
		r ? (o.add(r), s.push({
			...e,
			_id: r
		})) : c.push(e);
	});
	let l = [...a].filter((e) => e && !o.has(e));
	s.length > 0 && await e.updateEmbeddedDocuments("TableResult", s), c.length > 0 && await e.createEmbeddedDocuments("TableResult", c), l.length > 0 && await e.deleteEmbeddedDocuments("TableResult", l);
}
function BC(e, t, n, r) {
	if (e?.resultId && n.has(e.resultId) && !r.has(e.resultId)) return e.resultId;
	let i = t.find((t) => Z(t, [
		"flags",
		"wfrp4e",
		"species"
	]) === e?.speciesKey && !r.has(Z(t, ["_id"])));
	return i ? Z(i, ["_id"]) : "";
}
//#endregion
//#region src/module/apps/species-builder/world-table/index.ts
var VC = "species", HC = "tableSettings";
function UC() {
	let e = ZS(), t = new Set(e.definitions.map((e) => e.key)), n = GC().filter((e) => !t.has(e.key)), r = su(n, e.definitions), i = game.tables?.contents ?? [], a = KC(), o = qC(i, i.filter(IC), a);
	return {
		draft: o ? JC(o, r, a[0] === o.id) : ZC(),
		runtimeOptions: n
	};
}
async function WC(e, t) {
	let n = await PC(e);
	if (t) try {
		await FC(n.id);
	} catch (e) {
		return {
			...UC(),
			registrationError: e instanceof Error ? e.message : "The Species table could not be registered."
		};
	}
	return UC();
}
function GC() {
	let e = game.wfrp4e?.config?.species;
	return Y(e) ? Object.entries(e).flatMap(([e, t]) => {
		let n = typeof t == "string" ? t.trim() : "";
		return e.trim() && n ? [{
			key: e.trim(),
			label: n
		}] : [];
	}) : [];
}
function KC() {
	let e = game.settings.get(SS, HC), t = Y(e) ? e[VC] : void 0;
	return typeof t == "string" ? t.split(",").map((e) => e.trim()).filter(Boolean) : [];
}
function qC(e, t, n) {
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
	return e.find((e) => e.getFlag(SS, "key") === VC);
}
function JC(e, t, n) {
	let r = e.toObject(), i = (Array.isArray(r.results) ? r.results : []).flatMap((e) => YC(e, t));
	return i.sort((e, t) => XC(e.source) - XC(t.source)), {
		isRegistered: n,
		name: e.name,
		ownership: IC(e) ? "managed" : "external",
		requiresLinkRepair: i.some((e) => e.requiresLinkRepair),
		rows: i.map(({ row: e }) => e),
		tableId: e.id
	};
}
function YC(e, t) {
	if (!Y(e)) return [];
	let n = Z(e, ["name"]), r = fu(Z(e, ["description"])), i = Z(e, [
		"flags",
		SS,
		"species"
	]), a = r?.label || n, o = du(i, a, t), s = Z(e, ["_id"]), c = Z(e, ["type"]);
	return [{
		requiresLinkRepair: !r || r.label !== n.trim() || c !== "text",
		row: {
			...r ? { journalUuid: r.uuid } : {},
			name: a,
			...s ? { resultId: s } : {},
			speciesKey: o,
			weight: pu(e)
		},
		source: e
	}];
}
function XC(e) {
	let t = X(e, ["range"]), n = Array.isArray(t) ? Number(t[0]) : 0;
	return Number.isInteger(n) ? n : 0;
}
function ZC() {
	return {
		isRegistered: !1,
		name: "Species",
		ownership: "new",
		requiresLinkRepair: !1,
		rows: []
	};
}
//#endregion
//#region src/module/foundry/compendiums.ts
function QC(e, t) {
	return t.uuid ? t.uuid : t._id && e.getUuid ? e.getUuid(t._id) : "";
}
function $C(e) {
	return e.documentName === "Item" || Z(e, ["metadata", "type"]) === "Item" || Z(e, ["metadata", "documentName"]) === "Item";
}
function ew(e) {
	return e.documentName === "Actor" || Z(e, ["metadata", "type"]) === "Actor" || Z(e, ["metadata", "documentName"]) === "Actor";
}
function tw(e) {
	return Array.isArray(e) ? e.filter(rw) : Y(e) && Array.isArray(e.contents) ? e.contents.filter(rw) : iw(e) ? [...e].flatMap((e) => {
		let t = Array.isArray(e) ? e[1] : e;
		return rw(t) ? [t] : [];
	}) : [];
}
function nw() {
	return new Promise((e) => {
		globalThis.setTimeout(e, 0);
	});
}
function rw(e) {
	return Y(e);
}
function iw(e) {
	return Y(e) && Symbol.iterator in e;
}
//#endregion
//#region src/module/apps/species-builder/validation/table-results.ts
function aw(e, t) {
	let n = sw(e);
	if (n.reason) return hw(n.reason);
	let r = n.texts.filter((e) => !t.has(fw(e)));
	return r.length > 0 ? hw(`these result labels do not match Talent Items exactly: ${pw(r).join(", ")}`) : mw();
}
function ow(e, t) {
	let n = sw(e);
	if (n.reason) return hw(n.reason);
	let r = n.texts.filter((e) => !t.has(e));
	return r.length > 0 ? hw(`these result labels do not match tier-1 Career groups exactly: ${pw(r).join(", ")}`) : mw();
}
function sw(e) {
	if (!Y(e)) return {
		reason: "the table could not be found",
		texts: []
	};
	if ("columns" in e) return {
		reason: "the table key resolves to multiple columns instead of one RollTable",
		texts: []
	};
	let t = dw(e.results);
	if (t.length === 0) return {
		reason: "the table has no results",
		texts: []
	};
	let n = t.map(lw);
	return n.filter((e) => !e).length > 0 ? {
		reason: "one or more results have no usable WFRP result text",
		texts: n
	} : { texts: n };
}
function cw(e) {
	return /\{(.+?)\}/u.exec(e)?.[1] ?? e;
}
function lw(e) {
	if (!Y(e)) return "";
	let t = e.type === "document" ? uw(e) : e.description;
	return typeof t == "string" ? cw(t) : "";
}
function uw(e) {
	let t = e.documentUuid, n = e.name;
	return typeof t == "string" && typeof n == "string" ? `@UUID[${t}]{${n}}` : "";
}
function dw(e) {
	return Array.isArray(e) ? e : Y(e) && Symbol.iterator in e ? [...e] : [];
}
function fw(e) {
	return e.split("(")[0]?.trim() ?? "";
}
function pw(e) {
	return [...new Set(e.map((e) => e || "(blank result)"))];
}
function mw() {
	return { readyForCharacterCreation: !0 };
}
function hw(e) {
	return {
		readyForCharacterCreation: !1,
		reason: e
	};
}
//#endregion
//#region src/module/apps/species-builder/validation/career-table.ts
function gw(e, t, n, r) {
	let i = typeof n == "string" ? n.trim() : "", a = e, o;
	if (t && i && (o = _w(i), o && (a = i)), !o && t) {
		let n = `${e}-${t}`, r = _w(n);
		r && (a = n, o = r);
	}
	o ||= _w(e), !o && e === "human" && (a = "human-reiklander", o = _w(a));
	let s = ow(o, r);
	return s.readyForCharacterCreation ? s : {
		readyForCharacterCreation: !1,
		reason: `career table column ${a} is not ready: ${s.reason ?? "invalid table"}`
	};
}
function _w(e) {
	return game.wfrp4e?.tables?.findTable?.("career", e);
}
//#endregion
//#region src/module/apps/species-builder/validation/runtime-grants.ts
function vw(e, t, n) {
	let r = bw(e.randomTalents, t.randomTalentSources, n);
	xw(e.skills, "skills", t.skills, n), Sw(e.talents, r, t, n), xw(e.traits, "traits", t.traits, n), ww(e.talentReplacement, t.talents, n);
}
function yw(e, t, n) {
	if (e) {
		if (!Y(e)) {
			n.push("Career replacements are not an object");
			return;
		}
		for (let [r, i] of Object.entries(e)) {
			if (t.has(r) || n.push(`Career replacement source ${Aw(r)} does not match exactly`), !Array.isArray(i) || i.length === 0) {
				n.push(`Career replacements for ${Aw(r)} must be a non-empty array`);
				continue;
			}
			for (let e of i) (typeof e != "string" || !t.has(e.trim())) && n.push(`Career replacement ${Aw(e)} does not match exactly`);
		}
	}
}
function bw(e, t, n) {
	let r = e || { talents: 0 };
	if (!Y(r)) return n.push("random Talents configuration is not an object"), /* @__PURE__ */ new Set();
	let i = new Set(Object.keys(r));
	for (let [e, i] of Object.entries(r)) {
		Dw(i) || n.push(`random Talent count for ${Aw(e)} is not a non-negative whole number`);
		let r = t.get(e);
		r ? r.readyForCharacterCreation || n.push(`random Talent table ${Aw(e)} is not ready: ${r.reason ?? "invalid results"}`) : n.push(`random Talent table is missing for ${Aw(e)}`);
	}
	return i;
}
function xw(e, t, n, r) {
	if (!Array.isArray(e)) {
		r.push(`${t} must be an array of names`);
		return;
	}
	let i = e.filter((e) => typeof e != "string" || !n.has(Ow(e)));
	i.length > 0 && r.push(`${t} do not match available Items exactly: ${kw(i)}`);
}
function Sw(e, t, n, r) {
	if (!Array.isArray(e)) {
		r.push("talents must be an array of names or numeric random Talent counts");
		return;
	}
	for (let i of e) {
		if (Ew(i)) {
			Dw(i) || r.push(`numeric Talent grant ${Aw(i)} is not a non-negative whole number`), Cw("talents", t, n, r);
			continue;
		}
		if (typeof i != "string") {
			r.push(`Talent grant ${Aw(i)} is not a name or numeric count`);
			continue;
		}
		let e = i.includes(",") ? i.split(",") : [i];
		for (let a of e) {
			let e = a.trim(), o = i.includes(",") ? Tw(e) : void 0;
			o ? Cw(o.key, t, n, r) : n.talents.has(Ow(e)) || r.push(`Talent ${Aw(e)} does not match an available Item exactly`);
		}
	}
}
function Cw(e, t, n, r) {
	if (!t.has(e)) {
		r.push(`Talent grant uses random table ${Aw(e)} without configuring that key`);
		return;
	}
	let i = n.randomTalentSources.get(e);
	i ? i.readyForCharacterCreation || r.push(`Talent grant uses unready random table ${Aw(e)}`) : r.push(`Talent grant uses missing random table ${Aw(e)}`);
}
function ww(e, t, n) {
	if (e) {
		if (!Y(e)) {
			n.push("Talent replacements are not an object");
			return;
		}
		for (let [r, i] of Object.entries(e)) t.has(Ow(r)) || n.push(`Talent replacement source ${Aw(r)} does not match exactly`), (typeof i != "string" || !t.has(Ow(i))) && n.push(`Talent replacement ${Aw(i)} does not match exactly`);
	}
}
function Tw(e) {
	let t = /random\[(\d)\](?:\[?([a-zA-Z-_]+)\])?/iu.exec(e);
	return t ? { key: t[2] ?? "talents" } : void 0;
}
function Ew(e) {
	return typeof e == "number" && Number.isFinite(e) || typeof e == "string" && e.trim() !== "" && Number.isFinite(Number(e));
}
function Dw(e) {
	return Ew(e) && Number.isInteger(Number(e)) && Number(e) >= 0;
}
function Ow(e) {
	return e.split("(")[0]?.trim() ?? "";
}
function kw(e) {
	return [...new Set(e.map(Aw))].join(", ");
}
function Aw(e) {
	return `“${typeof e == "string" ? e.trim() || "(blank)" : String(e)}”`;
}
//#endregion
//#region src/module/apps/species-builder/validation/runtime-species.ts
var jw = Object.values(J), Mw = [
	["speciesMovement", "movement"],
	["speciesFate", "fate"],
	["speciesRes", "resilience"],
	["speciesExtra", "extra points"]
];
function Nw(e, t, n = []) {
	let r = Y(e.species) ? e.species : {}, i = new Set(n.map((e) => e.trim()).filter(Boolean));
	return Object.entries(r).filter(([e]) => !i.has(e)).map(([n, r]) => {
		let i = typeof r == "string" && r.trim() ? r.trim() : n, a = Pw(e, n, r, t);
		return a.length > 0 ? {
			key: n,
			name: i,
			readyForCharacterCreation: !1,
			reason: Fw(a)
		} : {
			key: n,
			name: i,
			readyForCharacterCreation: !0
		};
	}).sort((e, t) => e.name.localeCompare(t.name));
}
function Pw(e, t, n, r) {
	let i = [];
	t.trim() || i.push("species key is missing"), (typeof n != "string" || !n.trim()) && i.push("display name is missing");
	let a = Vw(e, t);
	vw(a, r, i);
	let o = Kw(e, "speciesCharacteristics", t);
	return Lw(o, i), Rw(Uw(e, t), i), zw(e, t, i), yw(Kw(e, "speciesCareerReplacements", t), r.careerGroups, i), Bw(r.validateCareerTable(t, void 0, void 0), i), Iw(e, t, o, a, r, i), i;
}
function Fw(e) {
	let t = e[0] ?? "runtime configuration is incomplete", n = e.length - 1;
	return n > 0 ? `${t} (+${n} more)` : t;
}
function Iw(e, t, n, r, i, a) {
	let o = e.subspecies, s = Y(o) ? o[t] : void 0;
	if (s) {
		if (!Y(s)) {
			a.push("subspecies configuration is not an object");
			return;
		}
		for (let [o, c] of Object.entries(s)) {
			let s = [];
			if (!Y(c)) {
				a.push(`subspecies ${o} is not an object`);
				continue;
			}
			(typeof c.name != "string" || !c.name.trim()) && s.push("display name is missing"), Lw(c.characteristics || n, s), Rw(Ww(e, t, c), s), vw(Hw(c, r), i, s), yw(Kw(e, "speciesCareerReplacements", `${t}-${o}`), i.careerGroups, s), Bw(i.validateCareerTable(t, o, c.careerTable), s), a.push(...s.map((e) => `subspecies ${o}: ${e}`));
		}
	}
}
function Lw(e, t) {
	if (!Y(e)) {
		t.push("characteristic formulas are missing");
		return;
	}
	let n = jw.filter((t) => {
		let n = e[t];
		return typeof n != "string" || !df(n);
	});
	n.length > 0 && t.push(`characteristic formulas are invalid or missing for ${n.join(", ")}`);
}
function Rw(e, t) {
	for (let [n, r] of Object.entries(e)) (!Number.isInteger(r) || Number(r) < 0) && t.push(`${n} is missing or not a non-negative whole number`);
}
function zw(e, t, n) {
	let r = Kw(e, "speciesAge", t);
	(typeof r != "string" || !uf(r, !1)) && n.push("age formula is missing or invalid");
	let i = Kw(e, "speciesHeight", t);
	(!Y(i) || typeof i.die != "string" || !uf(i.die, !0) || !qw(i.feet) || !qw(i.inches)) && n.push("height needs a valid die formula and non-negative whole feet and inches");
}
function Bw(e, t) {
	e.readyForCharacterCreation || t.push(e.reason ?? "Career table is not ready");
}
function Vw(e, t) {
	return {
		randomTalents: Kw(e, "speciesRandomTalents", t),
		skills: Kw(e, "speciesSkills", t),
		talentReplacement: Kw(e, "speciesTalentReplacement", t) || {},
		talents: Kw(e, "speciesTalents", t),
		traits: Kw(e, "speciesTraits", t) || []
	};
}
function Hw(e, t) {
	return {
		randomTalents: e.randomTalents || t.randomTalents,
		skills: e.skills || t.skills,
		talentReplacement: e.talentReplacement || t.talentReplacement,
		talents: e.talents || t.talents,
		traits: e.speciesTraits || t.traits
	};
}
function Uw(e, t) {
	return Object.fromEntries(Mw.map(([n, r]) => [r, Kw(e, n, t)]));
}
function Ww(e, t, n) {
	return Object.fromEntries(Mw.map(([r, i]) => [i, n[Gw(r)] ?? Kw(e, r, t)]));
}
function Gw(e) {
	return e === "speciesRes" ? "resilience" : e.replace("species", "").toLowerCase();
}
function Kw(e, t, n) {
	let r = e[t];
	return Y(r) ? r[n] : void 0;
}
function qw(e) {
	return typeof e == "number" && Number.isInteger(e) && e >= 0;
}
//#endregion
//#region src/module/apps/species-builder/validation/catalog.ts
var Jw = [
	"skill",
	"talent",
	"trait"
], Yw = [
	"name",
	"type",
	"system.careergroup.value",
	"system.level.value"
];
async function Xw(e = []) {
	let t = Y(game.wfrp4e?.config) ? game.wfrp4e.config : {}, n = {
		careerGroups: /* @__PURE__ */ new Map(),
		itemNames: {
			skill: /* @__PURE__ */ new Map(),
			talent: /* @__PURE__ */ new Map(),
			trait: /* @__PURE__ */ new Map()
		}
	};
	for (let e of game.items?.contents ?? []) Zw(n, e);
	for (let e of Qw()) {
		if (!e.getIndex) continue;
		let t = await e.getIndex({ fields: Yw });
		for (let e of tw(t)) Zw(n, e);
	}
	let r = $w(t, n.itemNames.talent), i = new Set(n.careerGroups.keys());
	return {
		careerGroupNames: sT(n.careerGroups),
		itemBaseNames: {
			skill: sT(n.itemNames.skill),
			talent: sT(n.itemNames.talent),
			trait: sT(n.itemNames.trait)
		},
		randomTalentSources: r,
		runtimeSpecies: Nw(t, {
			careerGroups: i,
			randomTalentSources: new Map(r.map((e) => [e.key, e])),
			skills: new Set(n.itemNames.skill.keys()),
			talents: new Set(n.itemNames.talent.keys()),
			traits: new Set(n.itemNames.trait.keys()),
			validateCareerTable: (e, t, n) => gw(e, t, n, i)
		}, e)
	};
}
function Zw(e, t) {
	if (!Y(t) || typeof t.type != "string" || typeof t.name != "string") return;
	if (rT(t.type)) {
		aT(e.itemNames[t.type], iT(t.name));
		return;
	}
	let n = Number(X(t, [
		"system",
		"level",
		"value"
	]));
	if (t.type !== "career" || n !== 1) return;
	let r = X(t, [
		"system",
		"careergroup",
		"value"
	]);
	typeof r == "string" && aT(e.careerGroups, r);
}
function Qw() {
	let e = game.wfrp4e?.tags?.getPacksWithTag?.([...Jw, "career"]);
	return e ? [...new Set(e)].filter($C) : (game.packs ?? []).filter($C);
}
function $w(e, t) {
	let n = [];
	for (let r of eT(e)) {
		let e = game.wfrp4e?.tables?.findTable?.(r);
		if (!e) continue;
		let i = aw(e, new Set(t.keys()));
		n.push(i.readyForCharacterCreation ? {
			key: r,
			readyForCharacterCreation: !0
		} : {
			key: r,
			readyForCharacterCreation: !1,
			reason: i.reason
		});
	}
	return n.sort((e, t) => e.key.localeCompare(t.key));
}
function eT(e) {
	let t = new Set(["talents"]);
	for (let e of game.tables?.contents ?? []) oT(t, e.getFlag("wfrp4e", "key"));
	let n = game.settings.get("wfrp4e", "tableSettings");
	Y(n) && Object.keys(n).forEach((e) => t.add(e)), tT(e.speciesRandomTalents, t);
	let r = e.subspecies;
	if (Y(r)) {
		for (let e of Object.values(r)) if (Y(e)) for (let n of Object.values(e)) Y(n) && nT(n.randomTalents, t);
	}
	return [...t];
}
function tT(e, t) {
	Y(e) && Object.values(e).forEach((e) => nT(e, t));
}
function nT(e, t) {
	Y(e) && Object.keys(e).forEach((e) => t.add(e));
}
function rT(e) {
	return Jw.some((t) => t === e);
}
function iT(e) {
	return e.split("(", 1)[0]?.trim() ?? "";
}
function aT(e, t) {
	let n = t.trim();
	n && !e.has(n) && e.set(n, n);
}
function oT(e, t) {
	typeof t == "string" && t.trim() && e.add(t.trim());
}
function sT(e) {
	return [...e.values()].sort((e, t) => e.localeCompare(t));
}
//#endregion
//#region src/module/apps/species-builder/wound-formula-traits.ts
var cT = "WFRP Customizer Generated Species Traits";
async function lT(t = ZS()) {
	let n = rl(t), r = await uT();
	await dT(r);
	for (let e of n) {
		let t = ol({
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
async function uT() {
	let e = game.folders.contents.find((e) => e.type === "Item" && e.name === cT);
	if (e) return e;
	let t = await Folder.create({
		name: cT,
		type: "Item"
	});
	if (!t) throw Error("Foundry did not create the generated Species Trait folder.");
	return t;
}
async function dT(e) {
	let t = (game.items?.contents ?? []).filter((t) => t.folder?.id === e.id || fT(t));
	for (let e of t) await e.delete();
}
function fT(e) {
	return Y(X(e.toObject(), [
		"flags",
		$,
		nl
	]));
}
//#endregion
//#region src/module/apps/species-builder/foundry-bridge.ts
async function pT(e, t) {
	let n = await QS(e);
	if (!t) return { settings: n };
	let r = (await Promise.allSettled([tC(n), lT(n)])).flatMap((e) => e.status === "rejected" ? [hT(e.reason)] : []);
	return r.length > 0 ? {
		settings: n,
		syncError: r.join(" ")
	} : { settings: n };
}
var mT = {
	loadSettings: async () => ZS(),
	loadRandomTalentSources: async () => SC(),
	loadValidationCatalog: Xw,
	loadSpeciesTable: async () => UC(),
	openItemSheet: mC,
	resolveItemDrop: fC,
	resolveJournalDrop: pC,
	saveSettings: pT,
	saveSpeciesTable: WC
};
function hT(e) {
	return e instanceof Error ? e.message : "Generated document synchronization failed.";
}
//#endregion
//#region src/module/apps/species-builder/reload-confirmation.ts
function gT() {
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
var _T = class extends FS {
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
		return xS;
	}
	getVueProps() {
		return {
			bridge: mT,
			onSettingsSaved: () => {
				this.#e = !0;
			}
		};
	}
	async _preClose(e) {
		let t = this.#e;
		this.#e = !1, t && await gT() && window.location.reload(), await super._preClose(e);
	}
};
//#endregion
//#region src/functions/npc-builder/create-default-trait-config.ts
function vT() {
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
function yT(e, t) {
	return `${e}:${TT(t)}`;
}
function bT(e) {
	let t = e.level ?? 1;
	return Number.isFinite(t) ? Math.max(1, Math.floor(t)) * 5 : 5;
}
function xT(e) {
	return e.name;
}
function ST(e, t) {
	return e === "characteristic" ? t.allowBaseActorCharacteristics : e === "skill" ? t.allowBaseActorSkills : t.allowBaseActorTalents;
}
function CT(e, t) {
	return {
		...vT(),
		...e,
		...t
	};
}
function wT(e, t) {
	return TT(e) === TT(t);
}
function TT(e) {
	return e.trim().toLocaleLowerCase();
}
function ET(e) {
	return Number.isFinite(e) ? Math.max(1, Math.floor(e)) : 1;
}
function DT(e) {
	let t = 0;
	for (let n of e) t += n.count;
	return t;
}
function OT(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = TT(r);
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
//#endregion
//#region src/functions/npc-builder/skill-specialization.ts
function kT(e, t, n) {
	return `${e}:${PT(t)}:${n}`;
}
function AT(e, t) {
	let n = e.trim(), r = t.trim();
	return r ? `${n} (${r})` : n;
}
function jT(e) {
	let t = /^(?<base>.+?)\s*\((?<specialization>[^)]+)\)\s*$/.exec(e.trim());
	if (!t?.groups) return null;
	let n = t.groups.base?.trim() ?? "", r = t.groups.specialization?.trim() ?? "";
	return !n || !r || MT(e) ? null : {
		baseName: n,
		originalName: e,
		specialization: r
	};
}
function MT(e) {
	let t = /^(?<base>.+?)\s*\((?<specialization>[^)]+)\)\s*$/.exec(e.trim());
	if (!t?.groups) return null;
	let n = t.groups.base?.trim() ?? "", r = t.groups.specialization?.trim() ?? "", i = IT(r);
	return !n || !r || !FT(r, i) ? null : {
		baseName: n,
		options: i,
		originalName: e,
		specialization: r
	};
}
function NT(e, t) {
	let n = /* @__PURE__ */ new Map();
	return t.map((t) => {
		let r = PT(t), i = n.get(r) ?? 0;
		return n.set(r, i + 1), {
			occurrence: i,
			originalName: t,
			resolutionKey: kT(e, t, i)
		};
	});
}
function PT(e) {
	return e.trim().replaceAll(/\s+/g, " ").toLocaleLowerCase();
}
function FT(e, t) {
	return e.trim().toLocaleLowerCase() === "any" || t.length > 1;
}
function IT(e) {
	return e.split(/\s+or\s+/i).map((e) => e.trim()).filter(Boolean);
}
//#endregion
//#region src/functions/npc-builder/advancements/source-counts.ts
function LT(e, t) {
	return t <= 0 ? [] : [{
		count: t,
		kind: "career",
		label: `${e} extra time`
	}];
}
function RT(e, t) {
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
function zT(e, t, n, r) {
	let i = VT(BT(e, r), n);
	return i.value === null ? t : Math.min(t, Math.max(0, i.value - e.baseAdvances));
}
function BT(e, t) {
	let n = t[TT(e.name)];
	return {
		maximumFormula: e.talentMaximumFormula ?? n?.maximumFormula ?? "",
		maximumKey: e.talentMaximumKey ?? n?.maximumKey ?? ""
	};
}
function VT(e, t) {
	let n = e.maximumKey.trim().toLocaleLowerCase();
	if (!n) return {
		label: "Unknown",
		value: null
	};
	if (n === "none") return {
		label: "-",
		value: null
	};
	if (n === "custom") return HT(e.maximumFormula, t);
	let r = Number(n);
	if (Number.isFinite(r)) {
		let e = Math.max(0, Math.floor(r));
		return {
			label: `${e}`,
			value: e
		};
	}
	if (Dc(n)) {
		let e = t[n] ?? 0, r = Math.max(0, Math.floor(e / 10));
		return {
			label: `${Tc[n]} Bonus (${r})`,
			value: r
		};
	}
	return {
		label: e.maximumKey || "Unknown",
		value: null
	};
}
function HT(e, t) {
	let n = e.trim(), r = Number(n);
	if (Number.isFinite(r)) {
		let e = Math.max(0, Math.floor(r));
		return {
			label: `${e}`,
			value: e
		};
	}
	let i = /@characteristics\.([a-z]+)\.bonus/i.exec(n)?.[1]?.toLocaleLowerCase();
	if (i && Dc(i)) {
		let e = t[i] ?? 0, n = Math.max(0, Math.floor(e / 10));
		return {
			label: `${Tc[i]} Bonus (${n})`,
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
function UT(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e.careers) {
		let i = OT(KT(r, t, e.skillGrantResolutions)), a = bT(r) / 5, o = Math.max(0, ET(r.quantity) - 1) * 5;
		for (let e of i) {
			let i = yT(t, e), s = n.get(i);
			if (s) {
				a > s.highestLevel && (s.highestLevel = a, s.highestLevelSource = xT(r)), o > 0 && s.extraSources.push({
					count: o,
					kind: "career",
					label: `${r.name} extra time`
				});
				continue;
			}
			n.set(i, {
				extraSources: LT(r.name, o),
				highestLevel: a,
				highestLevelSource: xT(r),
				name: e
			});
		}
	}
	for (let r of n.values()) GT(e, {
		careerValue: r.highestLevel * 5 + DT(r.extraSources),
		kind: t,
		name: r.name,
		sources: [{
			count: r.highestLevel * 5,
			kind: "career",
			label: r.highestLevelSource
		}, ...r.extraSources]
	});
}
function WT(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.careers) {
		let r = OT(KT(n, "talent", e.skillGrantResolutions)), i = Math.max(0, ET(n.quantity) - 1);
		for (let e of r) {
			let r = yT("talent", e), a = t.get(r);
			if (a) {
				i > 0 && a.extraSources.push({
					count: i,
					kind: "career",
					label: `${n.name} extra time`
				});
				continue;
			}
			t.set(r, {
				extraSources: LT(n.name, i),
				firstSource: n.name,
				name: e
			});
		}
	}
	for (let n of t.values()) GT(e, {
		careerValue: 1 + DT(n.extraSources),
		kind: "talent",
		name: n.name,
		sources: [{
			count: 1,
			kind: "career",
			label: n.firstSource
		}, ...n.extraSources]
	}, e.characteristicTotals);
}
function GT(e, t, n = {}) {
	let r = yT(t.kind, t.name), i = e.entries.get(r);
	if (i) {
		let r = t.kind === "talent" && i.includedFromBase ? t.sources.slice(1) : t.sources, a = t.kind === "talent" ? zT(i, DT(r), n, e.talentMaximums) : t.careerValue;
		i.careerValue = a, i.includedFromCareer = !0, i.sources = [...i.sources.filter((e) => e.kind === "base"), ...RT(r, a)];
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
	t.kind === "talent" && (a.careerValue = zT(a, t.careerValue, n, e.talentMaximums), a.current = a.careerValue, a.sources = RT(t.sources, a.careerValue)), e.entries.set(r, { ...a });
}
function KT(e, t, n) {
	return t === "characteristic" ? e.grants.characteristics : t === "skill" ? NT(e.uuid, e.grants.skills).map((e) => n[e.resolutionKey] || e.originalName) : e.grants.talents;
}
//#endregion
//#region src/functions/npc-builder/advancements/entry-context.ts
function qT(e, t) {
	let n = {};
	for (let r of e.values()) {
		if (r.kind !== "characteristic") continue;
		let e = Ec[TT(r.name)];
		if (!e) continue;
		let i = t[yT(r.kind, r.name)] ?? 0, a = Math.max(r.minimumCurrent, Math.floor(r.careerValue + i));
		n[e] = Math.max(0, r.baseValue + a);
	}
	return n;
}
function JT(e, t, n) {
	return e.kind === "skill" ? YT(e, t, n) : e.kind === "talent" ? XT(e, t, n) : e;
}
function YT(e, t, n) {
	let r = ZT(e.name, n.skillCharacteristics) ?? QT(e.name, n.baseActorDraftData);
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
function XT(e, t, n) {
	let r = BT(e, n.talentMaximums), i = VT(r, t);
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
function ZT(e, t) {
	return t[TT(e)] ?? null;
}
function QT(e, t) {
	let n = t.advancements.find((t) => t.kind === "skill" && wT(t.name, e));
	return n?.characteristicKey ? {
		characteristicKey: n.characteristicKey,
		characteristicName: n.characteristicName ?? Tc[n.characteristicKey],
		skillName: e
	} : null;
}
//#endregion
//#region src/functions/npc-builder/advancements/derive-advancements.ts
function $T(e) {
	let t = iE(e.baseActorDraftData), n = {
		careers: e.careers,
		entries: t,
		skillGrantResolutions: e.skillGrantResolutions,
		talentMaximums: e.talentMaximums
	};
	UT(n, "characteristic"), UT(n, "skill");
	let r = qT(t, e.manualAdvancementDeltas);
	return WT({
		...n,
		characteristicTotals: r
	}), [...t.values()].filter((t) => t.includedFromCareer || ST(t.kind, e.settings)).map((t) => {
		let n = JT(t, r, e), i = yT(t.kind, t.name), a = e.manualAdvancementDeltas[i] ?? 0, o = n.careerValue + a;
		return {
			...n,
			current: Math.max(n.minimumCurrent, Math.floor(o))
		};
	}).sort(aE);
}
function eE(e, t) {
	let n = Number.isFinite(t) ? t : 0;
	return Math.max(e.minimumCurrent, Math.floor(n)) - e.careerValue;
}
function tE(e, t) {
	let n = Number.isFinite(t) ? t : 0;
	return eE(e, Math.max(e.minimumTotal, Math.floor(n)) - e.baseValue);
}
function nE(e, t) {
	return {
		...e,
		...Object.fromEntries(t.map((e) => [TT(e.skillName), e]))
	};
}
function rE(e, t) {
	return {
		...e,
		...Object.fromEntries(t.map((e) => [TT(e.talentName), e]))
	};
}
function iE(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.advancements) {
		let e = yT(n.kind, n.name), r = {
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
		n.characteristicKey && (r.characteristicKey = n.characteristicKey, r.characteristicName = n.characteristicName ?? Tc[n.characteristicKey]), n.kind === "talent" && n.baseAdvances > 0 && r.sources.push({
			count: n.baseAdvances,
			kind: "base",
			label: "Base"
		}), n.talentMaximumFormula && (r.talentMaximumFormula = n.talentMaximumFormula), n.talentMaximumKey && (r.talentMaximumKey = n.talentMaximumKey), t.set(e, r);
	}
	return t;
}
function aE(e, t) {
	return e.kind === t.kind ? e.name.localeCompare(t.name) : e.kind.localeCompare(t.kind);
}
//#endregion
//#region src/functions/npc-builder/advancements/advancement-actions.ts
function oE(e) {
	return e.kind === "talent" ? 1 : 5;
}
function sE(e) {
	return Math.max(e.minimumTotal, e.baseValue + e.current);
}
function cE(e, t) {
	return sE(e) + t * oE(e);
}
function lE(e) {
	return sE(e);
}
function uE(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" && lE(e) < t;
}
function dE(e) {
	return e.filter((e) => e.kind === "talent" && uE(e)).map((e) => ({
		kind: e.kind,
		name: e.name,
		total: e.talentMaximumValue
	}));
}
function fE(e, t) {
	let n = new Map(e.map((e) => [mE(e), e])), r = [];
	for (let e of t) {
		let t = n.get(mE(e));
		!t || t.current === e.current || r.push({
			current: e.current,
			kind: t.kind,
			name: t.name
		});
	}
	return r;
}
function pE(e, t) {
	return e.find((e) => e.kind === t.kind && e.name === t.name) ?? null;
}
function mE(e) {
	return `${e.kind}:${e.name}`;
}
//#endregion
//#region src/functions/npc-builder/xp-cost.ts
var hE = {
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
function gE(e) {
	let t = {
		characteristics: 0,
		skills: 0,
		talents: 0,
		total: 0
	};
	for (let n of e) {
		let e = vE(n);
		n.kind === "characteristic" ? t.characteristics += e : n.kind === "skill" ? t.skills += e : t.talents += e;
	}
	return t.total = t.characteristics + t.skills + t.talents, t;
}
function _E(e, t) {
	let n = SE(e, t), r = CE(e.skills, t.skills, hE.skill), i = wE(e.talents, t.talents);
	return {
		characteristics: n,
		skills: r,
		talents: i,
		total: n + r + i
	};
}
function vE(e) {
	let t = yE(e);
	return e.kind === "talent" ? xE(Math.max(0, Math.floor(e.current)), Math.max(0, Math.floor(e.baseAdvances))) : bE(t, e.kind === "characteristic" ? hE.characteristic : hE.skill);
}
function yE(e) {
	return Math.max(0, Math.floor(e.baseAdvances + e.current));
}
function bE(e, t) {
	let n = Math.max(0, Math.floor(e)), r = 0;
	for (let e = 0; e < n; e += 1) {
		let n = Math.min(Math.floor(e / 5), t.length - 1);
		r += t[n] ?? 0;
	}
	return r;
}
function xE(e, t = 0) {
	let n = Math.max(0, Math.floor(e)), r = Math.max(0, Math.floor(t)), i = 0;
	for (let e = 0; e < n; e += 1) i += (r + e + 1) * 100;
	return i;
}
function SE(e, t) {
	let n = 0;
	for (let r of Object.keys(Tc)) {
		let i = r, a = EE(e.characteristics[i] ?? 0, t.characteristics[i] ?? 0);
		n += bE(a, hE.characteristic);
	}
	return n;
}
function CE(e, t, n) {
	let r = TE(e), i = TE(t), a = 0;
	for (let [e, t] of r) {
		let r = EE(t, i.get(e) ?? 0);
		a += bE(r, n);
	}
	return a;
}
function wE(e, t) {
	let n = TE(e), r = TE(t), i = 0;
	for (let [e, t] of n) {
		let n = EE(t, r.get(e) ?? 0);
		i += xE(n);
	}
	return i;
}
function TE(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = TT(n.name), r = Math.floor(n.value);
		e && t.set(e, (t.get(e) ?? 0) + r);
	}
	return t;
}
function EE(e, t) {
	return Math.max(0, Math.floor(e) - Math.floor(t));
}
//#endregion
//#region src/state/npc-builder/advancements/index.ts
function DE(e) {
	let { baseActorDraftData: t, careers: n, manualAdvancementDeltas: r, settings: i, skillCharacteristics: a, skillGrantResolutions: o, talentMaximums: s } = e, c = G(() => $T({
		baseActorDraftData: t.value,
		careers: n.value,
		manualAdvancementDeltas: r.value,
		settings: i.value,
		skillCharacteristics: a.value,
		skillGrantResolutions: o.value,
		talentMaximums: s.value
	})), l = G(() => gE(c.value)), u = G(() => dE(c.value).length);
	function d(e, t) {
		v(e, cE(e, t));
	}
	function f() {
		for (let e of dE(c.value)) {
			let t = pE(c.value, e);
			t && v(t, e.total);
		}
	}
	function p(e, t) {
		let n = Math.max(0, Math.floor(Number.isFinite(t) ? t : 0)), r = e.run({ advancements: c.value }, n), i = fE(c.value, r.advancements);
		for (let e of i) {
			let t = pE(c.value, e);
			t && _(t, e.current);
		}
	}
	function m(e) {
		return o.value[e] ?? "";
	}
	function h(e) {
		a.value = nE(a.value, e);
	}
	function g(e) {
		s.value = rE(s.value, e);
	}
	function _(e, t) {
		let n = yT(e.kind, e.name);
		r.value[n] = eE(e, t);
	}
	function v(e, t) {
		let n = yT(e.kind, e.name);
		r.value[n] = tE(e, t);
	}
	function y(e) {
		let t = yT(e.kind, e.name);
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
function OE(e, t) {
	return e.find((e) => e.uuid === t) ?? null;
}
function kE(e) {
	return e.at(-1) ?? null;
}
function AE(e) {
	let t = e.finalCareer?.name, n = e.settings.includeSpeciesInName && e.selectedBaseActor?.species ? e.selectedBaseActor.species : "";
	return t && n ? `${n} ${t}` : t || (e.selectedBaseActor ? `${e.selectedBaseActor.name} NPC` : "New NPC");
}
function jE(e, t) {
	return e.trim() || t;
}
function ME(e) {
	return e.finalCareer?.img || e.selectedBaseActor?.prototypeTokenImg || e.selectedBaseActor?.img || "";
}
function NE(e, t) {
	return e || t;
}
function PE(e) {
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
function FE(e) {
	let { actorName: t, baseActors: n, careers: r, clearBaseDraftData: i, customSpells: a, customTraits: o, customTrappings: s, detectedSpells: c, ignoredBaseTraitKeys: l, magicLoreResolutions: u, removeSkillGrantResolutionsForCareer: d, selectedBaseActorUuid: f, selectedPortraitPath: p, settings: m, skillGrantResolutions: h, spellSelectionOverrides: g } = e, _ = G(() => OE(n.value, f.value)), v = G(() => kE(r.value)), y = G(() => AE({
		finalCareer: v.value,
		selectedBaseActor: _.value,
		settings: m.value
	})), b = G(() => jE(t.value, y.value)), x = G(() => ME({
		finalCareer: v.value,
		selectedBaseActor: _.value
	})), S = G(() => NE(p.value, x.value)), C = G(() => PE(r.value));
	function w(e) {
		let t = r.value.find((t) => t.uuid === e.uuid);
		if (t) {
			t.quantity = ET(t.quantity + 1);
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
		n && (n.quantity = ET(t));
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
function IE(e) {
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
function LE() {
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
var RE = LE(), zE = {
	advancements: [],
	optionalTraits: [],
	traits: [],
	trappings: []
}, BE = /\(([^)]+)\)/, VE = [
	"beasts",
	"death",
	"fire",
	"heavens",
	"metal",
	"life",
	"light",
	"shadow"
], HE = [
	"daemonology",
	"necromancy",
	"nurgle",
	"slaanesh",
	"tzeentch",
	"undivided"
];
function UE(e, t) {
	let n = e.trim(), r = n.toLocaleLowerCase();
	return r === "petty magic" ? XE({
		kind: "petty-magic",
		rawLore: "Petty Magic",
		source: t,
		sourceName: n
	}) : r.startsWith("arcane magic") ? XE({
		kind: "arcane-magic",
		rawLore: ZE(n),
		source: t,
		sourceName: n
	}) : r.startsWith("spellcaster") ? XE({
		kind: "spellcaster",
		rawLore: ZE(n),
		source: t,
		sourceName: n
	}) : null;
}
function WE(e) {
	return e.trim().replace(/^any\s+/i, "").replace(/^arcane\s+lore\s+of\s+/i, "").replace(/^arcane\s+lore$/i, "").replace(/^lore\s+of\s+/i, "").replaceAll(/\s+/g, " ").toLocaleLowerCase();
}
function GE(e) {
	return `${e.source}:${e.kind}:${e.sourceName}:${e.rawLore}`;
}
function KE(e, t) {
	return {
		...e,
		isAmbiguous: !1,
		normalizedLore: WE(t),
		rawLore: t.trim()
	};
}
function qE(e) {
	let t = WE(e);
	return t === "petty" ? "petty" : VE.includes(t) ? "eight-wind" : HE.includes(t) ? "dark" : "other";
}
function JE(e, t) {
	if (e.kind === "petty-magic") return t.filter((e) => e.category === "petty");
	let n = e.rawLore.trim().toLocaleLowerCase();
	return n.includes("dark") ? t.filter((e) => e.category === "dark") : n.includes("eight winds") ? t.filter((e) => e.category === "eight-wind") : t.filter((e) => e.category !== "petty");
}
function YE(e) {
	let t = e.trim().toLocaleLowerCase();
	return !t || t === "any" || t.includes("any ");
}
function XE(e) {
	let t = e.rawLore.trim();
	return {
		isAmbiguous: YE(t),
		kind: e.kind,
		normalizedLore: WE(t),
		rawLore: t,
		resolutionKey: GE({
			kind: e.kind,
			rawLore: t,
			source: e.source,
			sourceName: e.sourceName
		}),
		source: e.source,
		sourceName: e.sourceName
	};
}
function ZE(e) {
	return BE.exec(e)?.[1]?.trim() ?? "";
}
//#endregion
//#region src/functions/npc-builder/spells/derive-magic-grants.ts
function QE(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.advancements) n.kind !== "talent" || n.baseAdvances + n.current <= 0 || $E(t, UE(n.name, "talent"), e);
	for (let n of e.traits) $E(t, UE(n.name, "trait"), e);
	return [...t.values()];
}
function $E(e, t, n) {
	if (!t) return;
	let r = n.loreResolutions[t.resolutionKey];
	e.set(t.resolutionKey, r ? KE(t, r) : t);
}
//#endregion
//#region src/functions/npc-builder/spells/derive-spells.ts
function eD(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.detectedSpells) t.set(n.key, {
		...n,
		selected: e.selectionOverrides[n.key] ?? e.autoSelectDetectedSpells
	});
	for (let n of e.customSpells) t.set(n.key, {
		...n,
		selected: e.selectionOverrides[n.key] ?? n.selected
	});
	return [...t.values()].sort(aD);
}
function tD(e) {
	return e.filter((e) => e.selected);
}
function nD(e) {
	return e.spells.map((t) => ({
		...t,
		selected: e.selectionOverrides[t.key] ?? e.autoSelectDetectedSpells
	}));
}
function rD(e) {
	let t = e.detectedSpells.find((t) => iD(t, e.spell));
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
function iD(e, t) {
	return e.sourceUuid && e.sourceUuid === t.sourceUuid ? !0 : wT(e.name, t.name);
}
function aD(e, t) {
	return e.loreName === t.loreName ? e.name.localeCompare(t.name) : e.loreName.localeCompare(t.loreName);
}
//#endregion
//#region src/state/npc-builder/spells.ts
function oD(e) {
	let { advancements: t, customSpells: n, detectedSpells: r, magicLoreResolutions: i, settings: a, spellSelectionOverrides: o, traits: s } = e, c = G(() => QE({
		advancements: t.value,
		loreResolutions: i.value,
		traits: s.value
	})), l = G(() => c.value.length > 0), u = G(() => eD({
		autoSelectDetectedSpells: a.value.autoSelectGrantedSpells,
		customSpells: n.value,
		detectedSpells: r.value,
		selectionOverrides: o.value
	})), d = G(() => tD(u.value));
	function f(e) {
		let t = rD({
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
		r.value = nD({
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
function sD(e) {
	let t = /* @__PURE__ */ new Map();
	if (e.allowBaseActorTraits) for (let n of e.baseActorDraftData.traits) {
		let r = dD(n);
		e.ignoredBaseTraitKeys[r] || t.set(r, mD(n, r, !1));
	}
	for (let n of e.customTraits) pD([...t.values()], n.name) || t.set(n.key, { ...n });
	return [...t.values()].map((t) => ({
		...t,
		config: CT(t.config, e.traitConfigOverrides[t.key])
	})).sort(hD);
}
function cD(e) {
	return e.allowBaseActorTraits ? [...e.baseActorDraftData.traits.filter((t) => e.ignoredBaseTraitKeys[dD(t)]).map((t) => {
		let n = dD(t);
		return {
			...mD(t, n, !0),
			config: CT(t.config, e.traitConfigOverrides[n])
		};
	}), ...e.selectedTraits] : e.selectedTraits;
}
function lD(e) {
	return e.optionalTraits.map((e) => ({
		config: e.config,
		img: e.img,
		name: e.name,
		uuid: e.uuid
	})).sort((e, t) => e.name.localeCompare(t.name));
}
function uD(e, t) {
	return {
		config: t.config,
		ignored: !1,
		key: `${e}:${t.uuid || TT(t.name)}`,
		name: t.name,
		source: e,
		sourceUuid: t.uuid
	};
}
function dD(e) {
	return `base:${e.uuid || TT(e.name)}`;
}
function fD(e, t) {
	return e.find((e) => wT(e.name, t));
}
function pD(e, t) {
	return fD(e, t) !== void 0;
}
function mD(e, t, n) {
	return {
		config: e.config,
		ignored: n,
		key: t,
		name: e.name,
		source: "base",
		sourceUuid: e.uuid
	};
}
function hD(e, t) {
	return e.source === t.source ? e.name.localeCompare(t.name) : e.source.localeCompare(t.source);
}
//#endregion
//#region src/state/npc-builder/traits.ts
function gD(e) {
	let { baseActorDraftData: t, customTraits: n, ignoredBaseTraitKeys: r, quickTraits: i, settings: a, traitConfigOverrides: o } = e, s = G(() => sD({
		allowBaseActorTraits: a.value.allowBaseActorTraits,
		baseActorDraftData: t.value,
		customTraits: n.value,
		ignoredBaseTraitKeys: r.value,
		traitConfigOverrides: o.value
	})), c = G(() => cD({
		allowBaseActorTraits: a.value.allowBaseActorTraits,
		baseActorDraftData: t.value,
		ignoredBaseTraitKeys: r.value,
		selectedTraits: s.value,
		traitConfigOverrides: o.value
	})), l = G(() => lD(t.value));
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
		let i = uD(e, t);
		if (!r) {
			d(i.key), x(t.name, !0);
			return;
		}
		x(t.name, !1) || n.value.find((e) => e.key === i.key) || h(i);
	}
	function h(e) {
		pD(s.value, e.name) || n.value.some((t) => t.key === e.key) || n.value.push(e);
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
		return fD(l.value, e);
	}
	function y(e) {
		return fD(i.value, e);
	}
	function b(e) {
		let n = fD(t.value.traits, e);
		if (!n) return null;
		let i = dD(n);
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
function _D(e, t = "trapping") {
	return {
		candidates: [],
		searchTerms: xD(e),
		selectedCandidateUuid: "",
		selectedItemType: t,
		selectedName: e.trim(),
		status: "fallback"
	};
}
function vD(e) {
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
function yD(e) {
	return {
		candidates: [],
		searchTerms: xD(e),
		selectedCandidateUuid: "",
		selectedItemType: "trapping",
		selectedName: e.trim(),
		status: "unresolved"
	};
}
function bD(e, t) {
	let n = xD(e), r = CD(n, t), i = r.filter((e) => e.matchKind === "exact");
	return i.length === 1 ? TD("matched", n, i[0]) : i.length > 1 ? TD("ambiguous", n, i[0], { candidates: r }) : r.length ? {
		candidates: r,
		searchTerms: n,
		selectedCandidateUuid: "",
		selectedItemType: "trapping",
		selectedName: e.trim(),
		status: "ambiguous"
	} : _D(e);
}
function xD(e) {
	let t = e.split(/\s+or\s+/i).map((e) => e.trim()).filter(Boolean);
	return t.length ? kD(t) : [e.trim()].filter(Boolean);
}
function SD(e, t) {
	if (ED(e) === ED(t)) return "exact";
	let n = DD(e), r = DD(t);
	if (!n || !r) return null;
	if (n === r || n.includes(r) || r.includes(n)) return "near";
	let i = n.split(" "), a = new Set(r.split(" "));
	return i.every((e) => a.has(e)) ? "near" : null;
}
function CD(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) for (let e of t) {
		let t = SD(r, e.name);
		t && n.get(e.uuid)?.matchKind !== "exact" && n.set(e.uuid, {
			itemType: e.itemType,
			matchKind: t,
			name: e.name,
			searchTerm: r,
			sourceLabel: e.sourceLabel,
			uuid: e.uuid
		});
	}
	return [...n.values()].sort(wD);
}
function wD(e, t) {
	return e.matchKind === t.matchKind ? e.name.localeCompare(t.name) : e.matchKind === "exact" ? -1 : 1;
}
function TD(e, t, n, r = {}) {
	return {
		candidates: r.candidates ?? (n ? [n] : []),
		searchTerms: t,
		selectedCandidateUuid: n?.uuid ?? "",
		selectedItemType: n?.itemType ?? "trapping",
		selectedName: n?.name ?? "",
		status: e
	};
}
function ED(e) {
	return e.trim().toLocaleLowerCase().replaceAll(/\s+/g, " ");
}
function DD(e) {
	return ED(e).replaceAll("&", " and ").replaceAll(/[(),.:;[\]]/g, " ").replaceAll(/\b(a|an|the|some|pair of|pairs of)\b/g, " ").split(/\s+/).map(OD).filter(Boolean).join(" ");
}
function OD(e) {
	return e.endsWith("ies") && e.length > 4 ? `${e.slice(0, -3)}y` : e.endsWith("s") && !e.endsWith("ss") && e.length > 3 ? e.slice(0, -1) : e;
}
function kD(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/functions/npc-builder/trappings/derive-trappings.ts
function AD(e) {
	let t = /* @__PURE__ */ new Map();
	ND(t, e), PD(t, e);
	for (let n of e.customTrappings) t.set(n.key, { ...n });
	return [...t.values()].map((t) => FD(t, e)).sort(ID);
}
function jD(e, t) {
	let n = e.resolution.candidates.find((e) => e.uuid === t);
	return n ? {
		...e.resolution,
		selectedCandidateUuid: n.uuid,
		selectedItemType: n.itemType,
		selectedName: n.name,
		status: e.resolution.status === "matched" ? "matched" : "ambiguous"
	} : null;
}
function MD(e) {
	return {
		..._D(e.name, e.itemType),
		candidates: e.resolution.candidates,
		searchTerms: e.resolution.searchTerms
	};
}
function ND(e, t) {
	if (t.settings.allowBaseActorTrappings) for (let n of t.baseActorDraftData.trappings) {
		let t = `base:${n.uuid || TT(n.name)}`;
		e.set(t, {
			ignored: !1,
			itemType: n.itemType,
			key: t,
			name: n.name,
			quantity: n.quantity,
			resolution: vD({
				itemType: n.itemType,
				name: n.name,
				uuid: n.uuid
			}),
			source: "base",
			sourceUuid: n.uuid
		});
	}
}
function PD(e, t) {
	for (let n of t.careers) for (let r of n.grants.trappings) {
		let i = `career:${TT(r)}`, a = e.get(i);
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
			resolution: t.trappingResolutionOverrides[i] ?? yD(r),
			source: "career",
			sourceUuid: ""
		});
	}
}
function FD(e, t) {
	let n = t.trappingOverrides[e.key];
	return {
		...e,
		ignored: n?.ignored ?? e.ignored,
		quantity: ET(n?.quantity ?? e.quantity),
		resolution: t.trappingResolutionOverrides[e.key] ?? e.resolution
	};
}
function ID(e, t) {
	return e.source === t.source ? e.name.localeCompare(t.name) : e.source.localeCompare(t.source);
}
//#endregion
//#region src/state/npc-builder/trappings.ts
function LD(e) {
	let { baseActorDraftData: t, careers: n, customTrappings: r, settings: i, trappingOverrides: a, trappingResolutionOverrides: o } = e, s = G(() => AD({
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
			quantity: ET(t)
		};
	}
	function f(e, t) {
		let n = s.value.find((t) => t.key === e), r = n ? jD(n, t) : null;
		r && (o.value[e] = r);
	}
	function p(e) {
		let t = s.value.find((t) => t.key === e);
		t && (o.value[e] = MD(t));
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
var RD = rc("npc-builder", () => {
	let e = /* @__PURE__ */ M(""), t = /* @__PURE__ */ M([]), n = /* @__PURE__ */ M({}), r = /* @__PURE__ */ M({ ...zE }), i = /* @__PURE__ */ M([]), a = /* @__PURE__ */ M([]), o = /* @__PURE__ */ M([]), s = /* @__PURE__ */ M([]), c = /* @__PURE__ */ M([]), l = /* @__PURE__ */ M([]), u = /* @__PURE__ */ M(""), d = /* @__PURE__ */ M({ ...RE }), f = /* @__PURE__ */ M(""), p = /* @__PURE__ */ M({}), m = /* @__PURE__ */ M({}), h = /* @__PURE__ */ M({}), g = /* @__PURE__ */ M([]), _ = /* @__PURE__ */ M([]), v = /* @__PURE__ */ M({}), y = /* @__PURE__ */ M({}), b = /* @__PURE__ */ M({}), x = /* @__PURE__ */ M({}), S = /* @__PURE__ */ M({}), C = /* @__PURE__ */ M({}), w = DE({
		baseActorDraftData: r,
		careers: a,
		manualAdvancementDeltas: n,
		settings: d,
		skillCharacteristics: p,
		skillGrantResolutions: h,
		talentMaximums: m
	}), ee = IE({
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
	}), T = FE({
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
	}), te = gD({
		baseActorDraftData: r,
		customTraits: o,
		ignoredBaseTraitKeys: v,
		quickTraits: l,
		settings: d,
		traitConfigOverrides: x
	}), ne = LD({
		baseActorDraftData: r,
		careers: a,
		customTrappings: s,
		settings: d,
		trappingOverrides: S,
		trappingResolutionOverrides: C
	}), re = oD({
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
}), zD = { class: "dui-fieldset-legend" }, BD = [
	"checked",
	"disabled",
	"onChange"
], VD = { class: "dui-card-actions" }, HD = /* @__PURE__ */ F({
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
		return (t, i) => (R(), z("section", null, [
			V("p", null, k(e.prompt.droppedCareer.name) + " appears to belong to the " + k(e.prompt.droppedCareer.careerGroup) + " career track. The following lower-tier candidates were found. ", 1),
			(R(!0), z(L, null, I(e.candidateGroups, (t) => (R(), z("fieldset", {
				key: t.level,
				class: "dui-fieldset"
			}, [V("legend", zD, "Tier " + k(t.level || "Unknown"), 1), (R(!0), z(L, null, I(t.candidates, (t) => (R(), z("label", {
				key: t.uuid,
				class: "dui-label"
			}, [V("input", {
				class: "dui-checkbox dui-checkbox-sm",
				checked: e.isCareerQueued(t.uuid) || e.isLowerCareerSelected(t.uuid),
				disabled: e.isCareerQueued(t.uuid),
				type: "checkbox",
				onChange: (e) => r(t, e)
			}, null, 40, BD), V("span", null, [V("strong", null, k(t.name), 1), V("small", null, [U(k(t.careerGroup || "Career") + " ", 1), e.isCareerQueued(t.uuid) ? (R(), z(L, { key: 0 }, [U(" already queued ")], 64)) : W("", !0)])])]))), 128))]))), 128)),
			V("div", VD, [V("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: i[0] ||= (e) => n("addDroppedOnly")
			}, " Add Dropped Only "), V("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: i[1] ||= (e) => n("addSelected")
			}, " Add Selected ")])
		]));
	}
}), UD = ["aria-labelledby"], WD = { class: "dui-modal-box" }, GD = ["id"], KD = { class: "dui-modal-action" }, qD = /* @__PURE__ */ F({
	__name: "NpcBuilderDialog",
	props: {
		open: { type: Boolean },
		title: {}
	},
	emits: ["close"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ M(null), a = pr();
		return qn(() => n.open, async (e) => {
			await On();
			let t = i.value;
			if (e && !t?.open) {
				t?.showModal();
				return;
			}
			!e && t?.open && t.close();
		}, { immediate: !0 }), jr(() => {
			i.value?.open && i.value.close();
		}), (t, n) => (R(), z("dialog", {
			ref_key: "dialogElement",
			ref: i,
			"aria-labelledby": N(a),
			"aria-modal": "true",
			class: "dui-modal",
			onCancel: n[1] ||= Jo((e) => r("close"), ["prevent"])
		}, [V("section", WD, [
			V("h2", {
				id: N(a),
				class: "dui-card-title"
			}, k(e.title), 9, GD),
			Hr(t.$slots, "default"),
			V("div", KD, [V("button", {
				class: "dui-btn",
				type: "button",
				onClick: n[0] ||= (e) => r("close")
			}, "Close")])
		])], 40, UD));
	}
}), JD = /* @__PURE__ */ new Map();
function YD(e) {
	let t = e.id.trim();
	if (!t) throw Error("NPC auto-advance strategies must have an id.");
	JD.set(t, {
		...e,
		id: t
	});
}
function XD() {
	return [...JD.values()].sort((e, t) => e.name.localeCompare(t.name));
}
function ZD(e) {
	return JD.get(e) ?? null;
}
function QD(e, t) {
	return tO(e, t, {
		kinds: ["skill"],
		respectTalentMaximums: !1
	});
}
function $D(e, t) {
	return tO(tO(e, t, {
		kinds: ["talent"],
		respectTalentMaximums: !0
	}), t, {
		kinds: ["skill"],
		respectTalentMaximums: !1
	});
}
function eO(e, t) {
	return tO(e, t, {
		kinds: ["characteristic"],
		respectTalentMaximums: !1
	});
}
function tO(e, t, n) {
	let r = Math.max(0, Math.floor(Number.isFinite(t) ? t : 0)), i = iO(e.advancements), a = gE(i).total;
	if (a >= r) return { advancements: i };
	let o = !0;
	for (; o;) {
		o = !1;
		for (let e of i) {
			if (!n.kinds.includes(e.kind)) continue;
			let t = nO(e, n);
			if (!t) continue;
			let i = vE(t) - vE(e);
			i <= 0 || a + i > r || (e.current = t.current, a += i, o = !0);
		}
	}
	return { advancements: i };
}
function nO(e, t) {
	return t.respectTalentMaximums && e.kind === "talent" && !rO(e) ? null : {
		...e,
		current: e.current + oE(e)
	};
}
function rO(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" ? sE(e) < t : !1;
}
function iO(e) {
	return e.map((e) => ({
		...e,
		sources: e.sources.map((e) => ({ ...e }))
	}));
}
YD({
	description: "Cycles visible Skill rows evenly until no next skill increase fits the target XP.",
	id: "skill-master",
	name: "Skill Master",
	run: QD
}), YD({
	description: "Raises visible Talent rows evenly up to known maximums, then spends any remaining XP like Skill Master.",
	id: "gifted-and-talented",
	name: "Gifted & Talented",
	run: $D
}), YD({
	description: "Cycles visible Characteristic rows evenly until no next characteristic increase fits the target XP.",
	id: "all-natural",
	name: "All Natural",
	run: eO
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderAdvancementsTab/advancement-display.ts
function aO(e) {
	let t = e.current - e.careerValue, n = [...e.sources].sort((e, t) => fO(e.kind) - fO(t.kind)).map((e) => `${e.label} ${pO(e.count)}`);
	return t !== 0 && n.push(`Manual ${pO(t)}`), n.length ? n.join(", ") : e.includedFromBase ? "Base actor" : "-";
}
function oO(e) {
	return MT(e) !== null;
}
function sO(e) {
	return Math.max(e.minimumTotal, e.baseValue + e.current);
}
function cO(e) {
	return sO(e);
}
function lO(e) {
	return e.talentMaximumLabel ?? "Unknown";
}
function uO(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" && cO(e) > t;
}
function dO(e) {
	return vE(e);
}
function fO(e) {
	return e === "characteristic" ? 0 : e === "career" ? 1 : 2;
}
function pO(e) {
	return e > 0 ? `+${e}` : `${e}`;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSection.vue?vue&type=script&setup=true&lang.ts
var mO = { class: "dui-card dui-card-border dui-card-sm" }, hO = { class: "dui-card-body" }, gO = { class: "dui-card-title" }, _O = {
	key: 0,
	class: "dui-badge dui-badge-primary"
}, vO = { key: 0 }, yO = /* @__PURE__ */ F({
	__name: "NpcBuilderSection",
	props: {
		description: { default: "" },
		number: { default: "" },
		title: {}
	},
	setup(e) {
		return (t, n) => (R(), z("section", mO, [V("div", hO, [
			V("h2", gO, [e.number ? (R(), z("span", _O, k(e.number), 1)) : W("", !0), U(" " + k(e.title), 1)]),
			e.description ? (R(), z("p", vO, k(e.description), 1)) : W("", !0),
			Hr(t.$slots, "default")
		])]));
	}
}), bO = {
	key: 0,
	class: "dui-card-actions"
}, xO = {
	key: 1,
	class: "dui-alert dui-alert-info"
}, SO = { class: "dui-list" }, CO = { class: "dui-list-col-grow" }, wO = {
	key: 0,
	class: "dui-badge dui-badge-info"
}, TO = {
	key: 1,
	class: "dui-badge dui-badge-warning"
}, EO = { class: "dui-join" }, DO = ["disabled", "onClick"], OO = [
	"aria-label",
	"value",
	"onInput"
], kO = ["onClick"], AO = ["disabled", "onClick"], jO = {
	key: 2,
	class: "dui-alert"
}, MO = /* @__PURE__ */ F({
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
		return (t, i) => (R(), B(yO, {
			number: e.sectionNumber,
			title: e.title
		}, {
			default: P(() => [
				e.manualAdvanceCount ? (R(), z("div", bO, [V("span", null, k(e.manualAdvanceCount) + " manual edits", 1), V("button", {
					class: "dui-btn dui-btn-sm",
					type: "button",
					onClick: i[0] ||= (e) => n("resetAll")
				}, " Reset All Advances ")])) : W("", !0),
				e.estimatedNpcXp ? (R(), z("div", xO, [
					V("strong", null, "Estimated NPC XP " + k(e.estimatedNpcXp.total), 1),
					V("span", null, k(e.estimatedNpcXp.characteristics) + " characteristics", 1),
					V("span", null, k(e.estimatedNpcXp.skills) + " skills", 1),
					V("span", null, k(e.estimatedNpcXp.talents) + " talents", 1)
				])) : W("", !0),
				V("ul", SO, [(R(!0), z(L, null, I(e.entries, (t) => (R(), z("li", {
					key: `${t.kind}:${t.name}`,
					class: "dui-list-row"
				}, [V("div", CO, [
					V("strong", null, k(t.name), 1),
					t.current === t.careerValue ? W("", !0) : (R(), z("span", wO, " Manual edit ")),
					e.showSkillSpecializationBadges && N(oO)(t.name) ? (R(), z("span", TO, " Needs specialization ")) : W("", !0),
					V("span", null, " Base " + k(t.baseValue) + " · Advances " + k(t.current) + " · XP " + k(N(dO)(t)), 1),
					V("small", null, "Sources: " + k(N(aO)(t)), 1)
				]), V("div", EO, [
					V("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						disabled: N(sO)(t) <= t.minimumTotal,
						title: "Decrease by 5",
						type: "button",
						onClick: (e) => n("adjustCurrent", t, -1)
					}, " -5 ", 8, DO),
					V("input", {
						class: "dui-join-item dui-input dui-input-sm",
						"aria-label": `Total ${t.name}`,
						value: N(sO)(t),
						min: "0",
						type: "number",
						onInput: (e) => r(t, e)
					}, null, 40, OO),
					V("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						title: "Increase by 5",
						type: "button",
						onClick: (e) => n("adjustCurrent", t, 1)
					}, " +5 ", 8, kO),
					V("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						disabled: t.current === t.careerValue,
						title: "Reset to career value",
						type: "button",
						onClick: (e) => n("resetCurrent", t)
					}, " Reset ", 8, AO)
				])]))), 128))]),
				e.entries.length ? W("", !0) : (R(), z("p", jO, "No " + k(e.title.toLowerCase()) + " to advance yet.", 1))
			]),
			_: 1
		}, 8, ["number", "title"]));
	}
}), NO = { class: "dui-fieldset" }, PO = ["value"], FO = { class: "dui-fieldset" }, IO = ["value"], LO = ["value"], RO = { key: 0 }, zO = { class: "dui-card-actions" }, BO = ["disabled"], VO = /* @__PURE__ */ F({
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
		return (t, a) => (R(), B(yO, {
			description: "Spend toward a target without exceeding it. Existing manual edits are preserved.",
			number: "4",
			title: "Auto Advance"
		}, {
			default: P(() => [
				V("fieldset", NO, [a[1] ||= V("legend", { class: "dui-fieldset-legend" }, "Target XP", -1), V("input", {
					"aria-label": "Target XP",
					class: "dui-input dui-input-sm",
					value: e.targetXp,
					min: "0",
					type: "number",
					onInput: r
				}, null, 40, PO)]),
				V("fieldset", FO, [a[2] ||= V("legend", { class: "dui-fieldset-legend" }, "Strategy", -1), V("select", {
					"aria-label": "Auto advance strategy",
					class: "dui-select dui-select-sm",
					value: e.selectedAutoAdvanceStrategyId,
					onChange: i
				}, [(R(!0), z(L, null, I(e.autoAdvanceStrategies, (e) => (R(), z("option", {
					key: e.id,
					value: e.id
				}, k(e.name), 9, LO))), 128))], 40, IO)]),
				e.selectedAutoAdvanceStrategy ? (R(), z("p", RO, k(e.selectedAutoAdvanceStrategy.description), 1)) : W("", !0),
				V("div", zO, [V("button", {
					class: "dui-btn dui-btn-primary dui-btn-sm",
					disabled: !e.canRunAutoAdvance,
					title: "Advance rows as close to the target XP as possible without going over",
					type: "button",
					onClick: a[0] ||= (e) => n("runAutoAdvance")
				}, " Auto Advance ", 8, BO)])
			]),
			_: 1
		}));
	}
}), HO = { class: "dui-card-actions" }, UO = ["disabled"], WO = { class: "dui-list" }, GO = { class: "dui-list-col-grow" }, KO = {
	key: 0,
	class: "dui-badge dui-badge-info"
}, qO = {
	key: 1,
	class: "dui-badge dui-badge-warning"
}, JO = { class: "dui-join" }, YO = ["disabled", "onClick"], XO = [
	"aria-label",
	"value",
	"onInput"
], ZO = ["onClick"], QO = ["disabled", "onClick"], $O = {
	key: 0,
	class: "dui-alert"
}, ek = /* @__PURE__ */ F({
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
		return (t, i) => (R(), B(yO, {
			number: "3",
			title: "Talents"
		}, {
			default: P(() => [
				V("div", HO, [V("span", null, k(e.maximizableTalentCount) + " below maximum", 1), V("button", {
					class: "dui-btn dui-btn-sm",
					disabled: e.maximizableTalentCount === 0,
					title: "Raise talents with known maximums to their maximum ranks",
					type: "button",
					onClick: i[0] ||= (e) => n("maximizeTalents")
				}, " Maximize Talents ", 8, UO)]),
				V("ul", WO, [(R(!0), z(L, null, I(e.talents, (e) => (R(), z("li", {
					key: `${e.kind}:${e.name}`,
					class: "dui-list-row"
				}, [V("div", GO, [
					V("strong", null, k(e.name), 1),
					e.current === e.careerValue ? W("", !0) : (R(), z("span", KO, " Manual edit ")),
					V("span", null, " Ranks " + k(N(cO)(e)) + " · Maximum " + k(N(lO)(e)) + " · XP " + k(N(dO)(e)), 1),
					V("small", null, "Sources: " + k(N(aO)(e)), 1),
					N(uO)(e) ? (R(), z("span", qO, " Over maximum ")) : W("", !0)
				]), V("div", JO, [
					V("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						disabled: N(cO)(e) <= e.minimumTotal,
						title: "Decrease by 1",
						type: "button",
						onClick: (t) => n("adjustCurrent", e, -1)
					}, " -1 ", 8, YO),
					V("input", {
						class: "dui-join-item dui-input dui-input-sm",
						"aria-label": `Ranks ${e.name}`,
						value: N(cO)(e),
						min: "0",
						type: "number",
						onInput: (t) => r(e, t)
					}, null, 40, XO),
					V("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						title: "Increase by 1",
						type: "button",
						onClick: (t) => n("adjustCurrent", e, 1)
					}, " +1 ", 8, ZO),
					V("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						disabled: e.current === e.careerValue,
						title: "Reset to career value",
						type: "button",
						onClick: (t) => n("resetCurrent", e)
					}, " Reset ", 8, QO)
				])]))), 128))]),
				e.talents.length ? W("", !0) : (R(), z("p", $O, "No talents to advance yet."))
			]),
			_: 1
		}));
	}
}), tk = /* @__PURE__ */ F({
	__name: "NpcBuilderAdvancementsTab",
	setup(e) {
		let t = RD(), { advancements: n, estimatedNpcXp: r, maximizableTalentCount: i } = ic(t), a = XD(), o = /* @__PURE__ */ M("skill-master"), s = /* @__PURE__ */ M(0), c = G(() => n.value.filter((e) => e.kind === "characteristic")), l = G(() => n.value.filter((e) => e.kind === "skill")), u = G(() => n.value.filter((e) => e.kind === "talent")), d = G(() => n.value.filter((e) => e.current !== e.careerValue).length), f = G(() => ZD(o.value) ?? a[0] ?? null), p = G(() => f.value !== null && s.value > r.value.total);
		qn(() => r.value.total, (e) => {
			s.value < e && (s.value = e);
		}, { immediate: !0 });
		function m() {
			let e = f.value;
			e && t.applyAutoAdvance(e, s.value);
		}
		return (e, n) => (R(), z("section", null, [
			H(MO, {
				entries: c.value,
				"estimated-npc-xp": N(r),
				"manual-advance-count": d.value,
				"section-number": "1",
				title: "Characteristics",
				onAdjustCurrent: N(t).adjustAdvancementCurrent,
				onResetAll: N(t).resetAllAdvancementCurrents,
				onResetCurrent: N(t).resetAdvancementCurrent,
				onTotalChange: N(t).setAdvancementTotal
			}, null, 8, [
				"entries",
				"estimated-npc-xp",
				"manual-advance-count",
				"onAdjustCurrent",
				"onResetAll",
				"onResetCurrent",
				"onTotalChange"
			]),
			n[2] ||= V("div", { class: "dui-divider" }, null, -1),
			H(MO, {
				entries: l.value,
				"section-number": "2",
				"show-skill-specialization-badges": "",
				title: "Skills",
				onAdjustCurrent: N(t).adjustAdvancementCurrent,
				onResetCurrent: N(t).resetAdvancementCurrent,
				onTotalChange: N(t).setAdvancementTotal
			}, null, 8, [
				"entries",
				"onAdjustCurrent",
				"onResetCurrent",
				"onTotalChange"
			]),
			n[3] ||= V("div", { class: "dui-divider" }, null, -1),
			H(ek, {
				"maximizable-talent-count": N(i),
				talents: u.value,
				onAdjustCurrent: N(t).adjustAdvancementCurrent,
				onMaximizeTalents: N(t).maximizeTalents,
				onResetCurrent: N(t).resetAdvancementCurrent,
				onTotalChange: N(t).setAdvancementTotal
			}, null, 8, [
				"maximizable-talent-count",
				"talents",
				"onAdjustCurrent",
				"onMaximizeTalents",
				"onResetCurrent",
				"onTotalChange"
			]),
			n[4] ||= V("div", { class: "dui-divider" }, null, -1),
			H(VO, {
				"auto-advance-strategies": N(a),
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
function nk(e) {
	return [
		`Ch ${e.grants.characteristics.length}`,
		`Sk ${e.grants.skills.length}`,
		`Ta ${e.grants.talents.length}`,
		`Tr ${e.grants.trappings.length}`
	].join(" / ");
}
function rk(e) {
	let t = e.slice(0, 3).join(", "), n = e.length - 3;
	return e.length ? n > 0 ? `${t}, +${n}` : t : "-";
}
function ik(e) {
	return e.split(/\s+/).map((e) => e.at(0)).filter(Boolean).slice(0, 2).join("").toLocaleUpperCase();
}
function ak(e) {
	return `${e.label}\n${e.img}`;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/BaseActorPanel.vue?vue&type=script&setup=true&lang.ts
var ok = { class: "dui-fieldset" }, sk = ["value"], ck = { class: "dui-fieldset" }, lk = ["disabled", "value"], uk = { value: "" }, dk = ["value"], fk = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, pk = {
	key: 1,
	class: "dui-alert"
}, mk = {
	key: 0,
	class: "dui-avatar"
}, hk = ["src"], gk = {
	key: 1,
	class: "dui-badge"
}, _k = /* @__PURE__ */ F({
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
		return (t, a) => (R(), B(yO, {
			description: "Choose a world Actor as the starting statblock, or drop one below.",
			number: "1",
			title: "Base Actor"
		}, {
			default: P(() => [
				V("fieldset", ok, [a[1] ||= V("legend", { class: "dui-fieldset-legend" }, "Search world actors", -1), V("input", {
					"aria-label": "Search world actors",
					class: "dui-input dui-input-sm",
					value: e.actorFilter,
					placeholder: "Filter actors",
					type: "search",
					onInput: r
				}, null, 40, sk)]),
				V("fieldset", ck, [a[2] ||= V("legend", { class: "dui-fieldset-legend" }, "Base statblock", -1), V("select", {
					"aria-label": "Base statblock",
					class: "dui-select dui-select-sm",
					disabled: e.isLoadingActors,
					value: e.selectedBaseActorUuid,
					onChange: i
				}, [V("option", uk, k(e.isLoadingActors ? "Loading actors..." : "Choose an actor"), 1), (R(!0), z(L, null, I(e.filteredActors, (e) => (R(), z("option", {
					key: e.uuid,
					value: e.uuid
				}, k(e.name), 9, dk))), 128))], 40, lk)]),
				H(P_, {
					description: "Use a world Actor as the starting statblock.",
					title: "Drop Actor",
					variant: "compact",
					onDropData: a[0] ||= (e) => n("actorDrop", e)
				}),
				e.errorMessage ? (R(), z("p", fk, k(e.errorMessage), 1)) : W("", !0),
				e.selectedBaseActor ? (R(), z("article", pk, [e.selectedBaseActor.img ? (R(), z("div", mk, [V("div", null, [V("img", {
					src: e.selectedBaseActor.img,
					alt: ""
				}, null, 8, hk)])])) : (R(), z("span", gk, k(N(ik)(e.selectedBaseActor.name)), 1)), V("div", null, [V("strong", null, k(e.selectedBaseActor.name), 1), V("span", null, [
					U(k(e.selectedBaseActor.species || "Species not found") + " ", 1),
					e.selectedBaseActor.type ? (R(), z(L, { key: 0 }, [U(" - " + k(e.selectedBaseActor.type), 1)], 64)) : W("", !0),
					e.isLoadingBaseDraft ? (R(), z(L, { key: 1 }, [U(" - loading details...")], 64)) : W("", !0)
				])])])) : W("", !0)
			]),
			_: 1
		}));
	}
}), vk = { class: "dui-card-actions" }, yk = { class: "dui-stats" }, bk = { class: "dui-stat" }, xk = { class: "dui-stat-value" }, Sk = {
	key: 0,
	class: "dui-stat-desc"
}, Ck = { class: "dui-stat" }, wk = { class: "dui-stat-value" }, Tk = {
	key: 0,
	class: "dui-stat-desc"
}, Ek = {
	key: 1,
	class: "dui-stat-desc"
}, Dk = { class: "dui-stat" }, Ok = { class: "dui-stat-value" }, kk = { class: "dui-stat" }, Ak = { class: "dui-stat-value" }, jk = { class: "dui-stat" }, Mk = { class: "dui-stat-value" }, Nk = { class: "dui-stat-desc" }, Pk = {
	key: 0,
	class: "dui-alert dui-alert-warning",
	role: "alert"
}, Fk = { key: 1 }, Ik = /* @__PURE__ */ F({
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
		return (t, n) => (R(), B(yO, {
			number: "4",
			title: "Build Preview"
		}, {
			default: P(() => [
				V("div", vk, [V("span", { class: O(["dui-badge", e.buildPreviewStatus === "Ready" ? "dui-badge-success" : "dui-badge-warning"]) }, k(e.buildPreviewStatus), 3)]),
				V("div", yk, [
					V("div", bk, [
						n[0] ||= V("span", { class: "dui-stat-title" }, "Advances", -1),
						V("strong", xk, k(e.advancementCount), 1),
						e.editedAdvanceCount ? (R(), z("small", Sk, k(e.editedAdvanceCount) + " manually edited ", 1)) : W("", !0)
					]),
					V("div", Ck, [
						n[1] ||= V("span", { class: "dui-stat-title" }, "Trappings", -1),
						V("strong", wk, k(e.visibleTrappingCount), 1),
						e.fallbackTrappingCount ? (R(), z("small", Tk, k(e.fallbackTrappingCount) + " blank fallback ", 1)) : W("", !0),
						e.ignoredTrappingCount ? (R(), z("small", Ek, k(e.ignoredTrappingCount) + " ignored ", 1)) : W("", !0)
					]),
					V("div", Dk, [n[2] ||= V("span", { class: "dui-stat-title" }, "Traits", -1), V("strong", Ok, k(e.traitCount), 1)]),
					V("div", kk, [n[3] ||= V("span", { class: "dui-stat-title" }, "Spells", -1), V("strong", Ak, k(e.selectedSpellCount), 1)]),
					V("div", jk, [
						n[4] ||= V("span", { class: "dui-stat-title" }, "Estimated NPC XP", -1),
						V("strong", Mk, k(e.estimatedNpcXp.total), 1),
						V("small", Nk, k(e.estimatedNpcXp.characteristics) + " char / " + k(e.estimatedNpcXp.skills) + " skill / " + k(e.estimatedNpcXp.talents) + " talent ", 1)
					])
				]),
				e.buildPreviewWarnings.length ? (R(), z("div", Pk, [V("div", null, [(R(!0), z(L, null, I(e.buildPreviewWarnings, (e) => (R(), z("p", { key: e }, k(e), 1))), 128))])])) : (R(), z("p", Fk, " The draft has a base Actor, queued Career data, resolved trappings, and a portrait ready to apply. "))
			]),
			_: 1
		}));
	}
}), Lk = { class: "dui-list" }, Rk = { class: "dui-list-row" }, zk = { class: "dui-list-row" }, Bk = { class: "dui-list-row" }, Vk = { class: "dui-list-row" }, Hk = { class: "dui-list-row" }, Uk = { class: "dui-list-row" }, Wk = { class: "dui-list-row" }, Gk = /* @__PURE__ */ F({
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
		return (t, n) => (R(), z("dl", Lk, [
			V("div", Rk, [n[0] ||= V("dt", null, "Build name", -1), V("dd", null, k(e.finalActorName), 1)]),
			V("div", zk, [n[1] ||= V("dt", null, "Base actor", -1), V("dd", null, k(e.baseActorName), 1)]),
			V("div", Bk, [n[2] ||= V("dt", null, "Final career", -1), V("dd", null, k(e.finalCareerName), 1)]),
			V("div", Vk, [n[3] ||= V("dt", null, "Career items", -1), V("dd", null, k(e.careerItemCount), 1)]),
			V("div", Hk, [n[4] ||= V("dt", null, "Apply", -1), V("dd", null, k(e.advancementCount) + " advance rows, " + k(e.visibleTrappingCount) + " trappings, " + k(e.traitCount) + " traits, " + k(e.selectedSpellCount) + " spells ", 1)]),
			V("div", Uk, [n[5] ||= V("dt", null, "Extracted grants", -1), V("dd", null, k(e.grantTotals.characteristics) + " characteristics, " + k(e.grantTotals.skills) + " skills, " + k(e.grantTotals.talents) + " talents, " + k(e.grantTotals.trappings) + " trappings ", 1)]),
			V("div", Wk, [n[6] ||= V("dt", null, "Estimated NPC XP", -1), V("dd", null, k(e.estimatedNpcXpTotal), 1)])
		]));
	}
}), Kk = { class: "dui-avatar" }, qk = ["aria-label", "disabled"], Jk = ["src"], Yk = { key: 1 }, Xk = { key: 2 }, Zk = {
	key: 0,
	"aria-live": "polite",
	class: "dui-alert",
	role: "status"
}, Qk = { key: 0 }, $k = ["title"], eA = {
	key: 1,
	class: "dui-fieldset"
}, tA = { class: "dui-fieldset-legend" }, nA = { key: 0 }, rA = { key: 1 }, iA = { key: 0 }, aA = ["value"], oA = { class: "dui-carousel" }, sA = [
	"aria-label",
	"aria-pressed",
	"title",
	"onClick"
], cA = ["src"], lA = ["aria-label"], uA = /* @__PURE__ */ F({
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
		return (t, r) => (R(), z(L, null, [
			V("div", Kk, [V("button", {
				"aria-label": e.portraitCandidates.length ? "Open portrait gallery" : "No portraits available",
				class: O(["dui-btn dui-btn-xl", { "dui-btn-square": e.finalPortraitPath || e.finalCareer }]),
				disabled: !e.portraitCandidates.length,
				title: "Open portrait gallery",
				type: "button",
				onClick: r[0] ||= (e) => n("openGallery")
			}, [e.finalPortraitPath ? (R(), z("img", {
				key: 0,
				src: e.finalPortraitPath,
				alt: ""
			}, null, 8, Jk)) : e.finalCareer ? (R(), z("strong", Yk, k(N(ik)(e.finalCareer.name)), 1)) : (R(), z("span", Xk, "No portrait selected"))], 10, qk)]),
			e.finalPortraitPath ? (R(), z("p", Zk, [e.selectedPortraitCandidate ? (R(), z("strong", Qk, k(e.selectedPortraitCandidate.label), 1)) : W("", !0), V("span", { title: e.finalPortraitPath }, k(e.finalPortraitPath), 9, $k)])) : W("", !0),
			e.portraitCandidates.length || e.isLoadingPortraitCandidates ? (R(), z("fieldset", eA, [
				V("legend", tA, [r[2] ||= V("span", null, "Portrait options", -1), e.isLoadingPortraitCandidates ? (R(), z("span", nA, "Finding assets...")) : (R(), z("span", rA, k(e.portraitCandidates.length) + " options", 1))]),
				e.isLoadingPortraitCandidates && e.portraitSearchProgress ? (R(), z("div", iA, [V("progress", {
					"aria-label": "Portrait search progress",
					class: "dui-progress",
					value: e.portraitSearchProgressValue,
					max: "100"
				}, null, 8, aA), V("span", null, k(e.portraitSearchProgressLabel), 1)])) : W("", !0),
				V("div", oA, [(R(!0), z(L, null, I(e.compactPortraitCandidates, (t) => (R(), z("div", {
					key: t.key,
					class: "dui-carousel-item dui-avatar"
				}, [V("button", {
					"aria-label": N(ak)(t),
					"aria-pressed": t.key === e.selectedPortraitCandidateKey,
					class: O(["dui-btn dui-btn-square", { "dui-btn-active": t.key === e.selectedPortraitCandidateKey }]),
					title: N(ak)(t),
					type: "button",
					onClick: (e) => n("selectPortrait", t)
				}, [V("img", {
					src: t.img,
					alt: ""
				}, null, 8, cA)], 10, sA)]))), 128)), e.hiddenPortraitCandidateCount > 0 ? (R(), z("button", {
					key: 0,
					"aria-label": `Open ${e.hiddenPortraitCandidateCount} more portrait options`,
					class: "dui-carousel-item dui-btn dui-btn-square",
					type: "button",
					onClick: r[1] ||= (e) => n("openGallery")
				}, " +" + k(e.hiddenPortraitCandidateCount), 9, lA)) : W("", !0)])
			])) : W("", !0)
		], 64));
	}
}), dA = {
	key: 0,
	class: "dui-fieldset"
}, fA = { class: "dui-fieldset-legend" }, pA = { class: "dui-card-actions" }, mA = ["aria-pressed", "onClick"], hA = /* @__PURE__ */ F({
	__name: "TraitButtonGroup",
	props: {
		caption: {},
		title: {},
		traits: {}
	},
	emits: ["toggleTrait"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => e.traits.length ? (R(), z("fieldset", dA, [V("legend", fA, [V("span", null, k(e.title), 1), V("span", null, k(e.caption), 1)]), V("div", pA, [(R(!0), z(L, null, I(e.traits, (e) => (R(), z("button", {
			key: e.uuid,
			"aria-pressed": e.isSelected,
			class: O(["dui-btn dui-btn-sm", { "dui-btn-active": e.isSelected }]),
			type: "button",
			onClick: (t) => n("toggleTrait", e)
		}, k(e.name), 11, mA))), 128))])])) : W("", !0);
	}
}), gA = { class: "dui-fieldset" }, _A = ["placeholder", "value"], vA = { class: "dui-collapse dui-collapse-arrow dui-card-border" }, yA = { class: "dui-collapse-content" }, bA = /* @__PURE__ */ F({
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
		return (t, i) => (R(), z("aside", null, [
			H(yO, {
				description: "Choose the generated Actor's name, portrait, and optional traits.",
				number: "3",
				title: "Identity and Traits"
			}, {
				default: P(() => [
					H(uA, {
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
					V("fieldset", gA, [i[4] ||= V("legend", { class: "dui-fieldset-legend" }, "NPC name", -1), V("input", {
						"aria-label": "NPC name",
						class: "dui-input dui-input-sm",
						placeholder: e.suggestedActorName,
						value: e.actorName,
						type: "text",
						onInput: r
					}, null, 40, _A)]),
					H(hA, {
						caption: `${e.optionalTraitOptions.length} from base statblock`,
						traits: e.optionalTraitOptions,
						title: "Optional Traits",
						onToggleTrait: i[2] ||= (e) => n("toggleOptionalTrait", e)
					}, null, 8, ["caption", "traits"]),
					H(hA, {
						caption: `${e.quickTraitOptions.length} configured`,
						traits: e.quickTraitOptions,
						title: "Quick Traits",
						onToggleTrait: i[3] ||= (e) => n("toggleQuickTrait", e)
					}, null, 8, ["caption", "traits"])
				]),
				_: 1
			}),
			i[6] ||= V("div", { class: "dui-divider" }, null, -1),
			H(Ik, {
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
			V("details", vA, [i[5] ||= V("summary", { class: "dui-collapse-title" }, "Complete build details", -1), V("div", yA, [H(Gk, {
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
}), xA = {
	key: 0,
	class: "dui-list"
}, SA = [
	"onDragenter",
	"onDragover",
	"onDrop"
], CA = ["onDragstart"], wA = {
	key: 0,
	class: "dui-avatar"
}, TA = ["src"], EA = {
	key: 1,
	class: "dui-badge"
}, DA = { class: "dui-list-col-grow" }, OA = {
	key: 0,
	class: "dui-badge dui-badge-info"
}, kA = {
	key: 1,
	class: "dui-badge dui-badge-info"
}, AA = ["title"], jA = { class: "dui-card-actions" }, MA = { class: "dui-fieldset" }, NA = [
	"aria-label",
	"value",
	"onInput"
], PA = { class: "dui-join" }, FA = ["disabled", "onClick"], IA = ["disabled", "onClick"], LA = ["onClick"], RA = {
	key: 1,
	class: "dui-alert"
}, zA = /* @__PURE__ */ F({
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
		return (t, r) => (R(), B(yO, {
			description: "Careers are applied in this order. Drag rows or use the buttons to reorder them.",
			number: "2",
			title: "Career Queue"
		}, {
			default: P(() => [H(P_, {
				description: "Drop in build order. Drag rows to reorder.",
				title: "Drop Career Items",
				variant: "compact",
				onDropData: r[0] ||= (e) => n("careerDrop", e)
			}), e.careers.length ? (R(), z("ol", xA, [(R(!0), z(L, null, I(e.careers, (t, i) => (R(), z("li", {
				key: t.uuid,
				class: "dui-list-row",
				onDragenter: Jo((e) => n("careerDragEnter", i), ["prevent"]),
				onDragover: (e) => n("careerDragOver", i, e),
				onDrop: (e) => n("careerDropOnRow", i, e)
			}, [
				V("span", {
					"aria-hidden": "true",
					class: "dui-badge",
					draggable: "true",
					title: "Drag to reorder",
					onDragend: r[1] ||= (e) => n("careerDragEnd"),
					onDragstart: (e) => n("careerDragStart", i, e)
				}, " Drag ", 40, CA),
				t.img ? (R(), z("div", wA, [V("div", null, [V("img", {
					src: t.img,
					alt: ""
				}, null, 8, TA)])])) : (R(), z("span", EA, k(N(ik)(t.name)), 1)),
				V("div", DA, [
					V("strong", null, k(t.name), 1),
					e.draggedCareerIndex === i ? (R(), z("span", OA, " Dragging ")) : e.dragOverCareerIndex === i ? (R(), z("span", kA, " Drop here ")) : W("", !0),
					V("span", null, [U(k(t.careerGroup || "Career") + " ", 1), t.level === null ? W("", !0) : (R(), z(L, { key: 0 }, [U(" level " + k(t.level), 1)], 64))]),
					V("small", {
						class: "dui-badge dui-badge-ghost",
						title: [
							`Characteristics: ${N(rk)(t.grants.characteristics)}`,
							`Skills: ${N(rk)(t.grants.skills)}`,
							`Talents: ${N(rk)(t.grants.talents)}`,
							`Trappings: ${N(rk)(t.grants.trappings)}`
						].join("\n")
					}, k(N(nk)(t)), 9, AA),
					V("div", jA, [V("fieldset", MA, [r[2] ||= V("legend", { class: "dui-fieldset-legend" }, "Quantity", -1), V("input", {
						"aria-label": `Quantity for ${t.name}`,
						class: "dui-input dui-input-sm",
						value: t.quantity,
						min: "1",
						type: "number",
						onInput: (e) => n("careerQuantityInput", i, e)
					}, null, 40, NA)]), V("div", PA, [
						V("button", {
							class: "dui-join-item dui-btn dui-btn-sm",
							disabled: i === 0,
							title: "Move career earlier",
							type: "button",
							onClick: (e) => n("moveCareer", i, -1)
						}, " Up ", 8, FA),
						V("button", {
							class: "dui-join-item dui-btn dui-btn-sm",
							disabled: i === e.careers.length - 1,
							title: "Move career later",
							type: "button",
							onClick: (e) => n("moveCareer", i, 1)
						}, " Down ", 8, IA),
						V("button", {
							class: "dui-join-item dui-btn dui-btn-sm",
							type: "button",
							onClick: (e) => n("removeCareer", i)
						}, " Remove ", 8, LA)
					])])
				])
			], 40, SA))), 128))])) : (R(), z("p", RA, "No careers queued yet."))]),
			_: 1
		}));
	}
}), BA = {
	class: "dui-alert dui-alert-info",
	role: "status"
}, VA = { key: 0 }, HA = { key: 1 }, UA = { class: "dui-carousel" }, WA = { class: "dui-avatar" }, GA = [
	"aria-label",
	"aria-pressed",
	"title",
	"onClick"
], KA = ["src"], qA = { class: "dui-badge" }, JA = /* @__PURE__ */ F({
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
		return (t, r) => (R(), B(qD, {
			open: e.open,
			title: "Portrait Gallery",
			onClose: r[0] ||= (e) => n("close")
		}, {
			default: P(() => [V("section", null, [V("div", BA, [V("strong", null, k(e.portraitCandidates.length) + " portrait options", 1), e.isLoadingPortraitCandidates ? (R(), z("span", VA, "Finding assets...")) : (R(), z("span", HA, "Click an image to use it for the generated NPC."))]), V("div", UA, [(R(!0), z(L, null, I(e.portraitCandidates, (t) => (R(), z("div", {
				key: t.key,
				class: "dui-carousel-item"
			}, [V("div", WA, [V("button", {
				"aria-label": N(ak)(t),
				"aria-pressed": t.key === e.selectedPortraitCandidateKey,
				class: O(["dui-btn dui-btn-xl dui-btn-square", { "dui-btn-active": t.key === e.selectedPortraitCandidateKey }]),
				title: N(ak)(t),
				type: "button",
				onClick: (e) => n("selectPortrait", t)
			}, [V("img", {
				src: t.img,
				alt: ""
			}, null, 8, KA)], 10, GA)]), V("span", qA, k(t.label), 1)]))), 128))])])]),
			_: 1
		}, 8, ["open"]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/errors.ts
function YA(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not resolve that Actor drop.";
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/useBaseActorSelection.ts
function XA(e, t) {
	let n = RD(), { baseActors: r, selectedBaseActorUuid: i } = ic(n), a = /* @__PURE__ */ M(""), o = G(() => {
		let e = a.value.trim().toLocaleLowerCase();
		return e ? r.value.filter((t) => t.name.toLocaleLowerCase().includes(e)) : r.value;
	}), s = G({
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
			t.value = YA(e);
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
function ZA() {
	let { advancements: e, careers: t, finalPortraitPath: n, selectedBaseActor: r, trappings: i } = ic(RD()), a = G(() => {
		let e = 0;
		for (let n of t.value) e += n.quantity;
		return e;
	}), o = G(() => i.value.filter((e) => !e.ignored).length), s = G(() => e.value.filter((e) => e.current !== e.careerValue).length), c = G(() => i.value.filter((e) => !e.ignored && e.resolution.status === "fallback").length), l = G(() => i.value.filter((e) => e.ignored).length), u = G(() => e.value.filter((e) => e.kind === "skill" && MT(e.name) !== null).length), d = G(() => i.value.filter((e) => !e.ignored && e.resolution.status === "unresolved").length), f = G(() => {
		let e = [];
		return r.value || e.push("Choose a base Actor before building."), t.value.length || e.push("No Careers are queued."), u.value && e.push(`${u.value} skill rows still need a specialization.`), d.value && e.push(`${d.value} trappings have no item resolution yet.`), n.value || e.push("No portrait is selected."), e;
	});
	return {
		buildPreviewStatus: G(() => f.value.length ? "Review" : "Ready"),
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
function QA() {
	let e = RD(), { optionalTraits: t, quickTraits: n, traits: r } = ic(e), i = G(() => new Set(r.value.map((e) => $A(e.name)))), a = G(() => t.value.map(s)), o = G(() => {
		let e = new Set(t.value.map((e) => $A(e.name)));
		return n.value.filter((t) => !e.has($A(t.name))).map(s);
	});
	function s(e) {
		return {
			...e,
			isSelected: i.value.has($A(e.name))
		};
	}
	function c(t) {
		let n = i.value.has($A(t.name));
		e.setQuickTraitSelected(t, !n);
	}
	function l(t) {
		let n = i.value.has($A(t.name));
		e.setOptionalTraitSelected(t, !n);
	}
	return {
		displayedQuickTraitOptions: o,
		optionalTraitOptions: a,
		toggleOptionalTrait: l,
		toggleQuickTrait: c
	};
}
function $A(e) {
	return e.trim().toLocaleLowerCase();
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/useCareerQueue.ts
function ej() {
	let e = RD(), t = /* @__PURE__ */ M(null), n = /* @__PURE__ */ M(null);
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
var tj = new Set([
	"and",
	"any",
	"the",
	"with",
	"without",
	"of",
	"or",
	"npc"
]);
function nj(e) {
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
	}), oj(t);
}
function rj(e, t) {
	let n = dj(e);
	return n ? t.some((e) => dj(e.img) === n) : !1;
}
function ij(e) {
	let t = [];
	for (let n of e.careers) t.push(n.name, n.careerGroup);
	return e.selectedBaseActor && t.push(e.selectedBaseActor.name, e.selectedBaseActor.species), mj(t.flatMap((e) => pj(e)).filter((e) => e.length >= 3 && !tj.has(e)));
}
function aj(e, t) {
	let n = fj(e);
	return n ? t.some((e) => n.includes(e)) : !1;
}
function oj(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.img.trim().toLocaleLowerCase();
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
function sj(e) {
	return oj([...nj(e), ...e.assetCandidates]);
}
function cj(e) {
	let t = e.settings.searchCompendiumPortraitAssets || e.settings.searchFoundryPortraitAssets, n = !!e.selectedBaseActor || e.careers.length > 0;
	return t && n;
}
function lj(e) {
	return e ? e.maxDirectories <= 0 ? e.phase === "ready" ? 100 : 4 : Math.min(100, Math.round(e.directoriesVisited / e.maxDirectories * 100)) : 0;
}
function uj(e) {
	return e ? e.phase === "ready" ? `${e.candidatesFound} options found` : e.phase === "filesystem" ? e.maxDirectories <= 0 ? `${e.directoriesVisited} directories - ${e.currentLocation}` : `${e.directoriesVisited}/${e.maxDirectories} directories - ${e.currentLocation}` : e.currentLocation : "";
}
function dj(e) {
	return e.trim().toLocaleLowerCase();
}
function fj(e) {
	return e.trim().toLocaleLowerCase().replaceAll(/[_-]/g, " ").replaceAll(/[(),.:;[\]]/g, " ").replaceAll(/\s+/g, " ");
}
function pj(e) {
	let t = fj(e);
	return [t, ...t.split(" ")].filter(Boolean);
}
function mj(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/state/npc-builder/workflows/portrait-candidates-workflow.ts
function hj(e, t) {
	let n = RD(), { careers: r, finalPortraitPath: i, selectedBaseActor: a, selectedPortraitPath: o, settings: s } = ic(n), c = /* @__PURE__ */ M([]), l = /* @__PURE__ */ M(!1), u = /* @__PURE__ */ M(null), d = 0, f = G(() => sj({
		assetCandidates: c.value,
		careers: r.value,
		selectedBaseActor: a.value
	})), p = G(() => f.value.slice(0, 10)), m = G(() => Math.max(0, f.value.length - p.value.length)), h = G(() => f.value.find((e) => e.img === i.value) ?? null), g = G(() => h.value?.key ?? ""), _ = G(() => uj(u.value)), v = G(() => lj(u.value));
	qn(() => [
		a.value?.uuid ?? "",
		s.value.searchCompendiumPortraitAssets,
		s.value.searchFoundryPortraitAssets,
		r.value.map((e) => e.uuid).join("|")
	], () => {
		b();
	}, { immediate: !0 }), qn([
		f,
		o,
		l
	], () => {
		o.value && !l.value && !rj(o.value, f.value) && n.selectPortrait("");
	}, { immediate: !0 });
	function y(e) {
		n.selectPortrait(e.img);
	}
	async function b() {
		let n = d + 1;
		if (d = n, !cj({
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
			d === n && (t.value = gj(e));
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
function gj(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish searching for portraits.";
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/usePortraitCandidates.ts
function _j(e, t) {
	let n = hj(e, t), r = /* @__PURE__ */ M(!1);
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
var vj = /* @__PURE__ */ F({
	__name: "NpcBuilderBuildTab",
	props: {
		bridge: {},
		isLoadingActors: { type: Boolean },
		isLoadingBaseDraft: { type: Boolean }
	},
	emits: ["careerDrop"],
	setup(e, { emit: t }) {
		let n = e, r = t, { actorName: i, advancements: a, careers: o, estimatedNpcXp: s, finalActorName: c, finalCareer: l, finalPortraitPath: u, grantTotals: d, selectedBaseActor: f, selectedSpells: p, suggestedActorName: m, traits: h } = ic(RD()), g = /* @__PURE__ */ M(""), { actorFilter: _, filteredActors: v, handleActorDrop: y, selectedBaseActorSelectValue: b } = XA(n.bridge, g), { clearCareerDragState: x, draggedCareerIndex: S, dragOverCareerIndex: C, handleCareerDragOver: w, handleCareerDragStart: ee, handleCareerDrop: T, moveCareer: te, removeCareer: ne, setCareerQuantity: re, setDragOverCareerIndex: E } = ej(), { displayedQuickTraitOptions: ie, optionalTraitOptions: ae, toggleOptionalTrait: oe, toggleQuickTrait: se } = QA(), { buildPreviewStatus: D, buildPreviewWarnings: ce, careerItemCount: le, editedAdvanceCount: ue, fallbackTrappingCount: de, ignoredTrappingCount: fe, visibleTrappingCount: pe } = ZA(), { compactPortraitCandidates: me, hiddenPortraitCandidateCount: he, isLoadingPortraitCandidates: ge, isPortraitGalleryOpen: _e, portraitCandidates: O, portraitSearchProgress: ve, portraitSearchProgressLabel: ye, portraitSearchProgressValue: be, selectedPortraitCandidate: xe, selectedPortraitCandidateKey: Se, selectPortrait: Ce, selectPortraitFromGallery: we } = _j(n.bridge, g);
		return (t, n) => (R(), z("section", null, [
			H(_k, {
				"actor-filter": N(_),
				"error-message": g.value,
				"filtered-actors": N(v),
				"is-loading-actors": e.isLoadingActors,
				"is-loading-base-draft": e.isLoadingBaseDraft,
				"selected-base-actor": N(f),
				"selected-base-actor-uuid": N(b),
				onActorDrop: N(y),
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
			n[6] ||= V("div", { class: "dui-divider" }, null, -1),
			H(zA, {
				careers: N(o),
				"drag-over-career-index": N(C),
				"dragged-career-index": N(S),
				onCareerDragEnd: N(x),
				onCareerDragEnter: N(E),
				onCareerDragOver: N(w),
				onCareerDragStart: N(ee),
				onCareerDrop: n[2] ||= (e) => r("careerDrop", e),
				onCareerDropOnRow: N(T),
				onCareerQuantityInput: N(re),
				onMoveCareer: N(te),
				onRemoveCareer: N(ne)
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
			n[7] ||= V("div", { class: "dui-divider" }, null, -1),
			H(bA, {
				"actor-name": N(i),
				"advancement-count": N(a).length,
				"build-preview-status": N(D),
				"build-preview-warnings": N(ce),
				"career-item-count": N(le),
				"compact-portrait-candidates": N(me),
				"edited-advance-count": N(ue),
				"estimated-npc-xp": N(s),
				"fallback-trapping-count": N(de),
				"final-actor-name": N(c),
				"final-career": N(l),
				"final-portrait-path": N(u),
				"grant-totals": N(d),
				"hidden-portrait-candidate-count": N(he),
				"ignored-trapping-count": N(fe),
				"is-loading-portrait-candidates": N(ge),
				"optional-trait-options": N(ae),
				"portrait-candidates": N(O),
				"portrait-search-progress": N(ve),
				"portrait-search-progress-label": N(ye),
				"portrait-search-progress-value": N(be),
				"quick-trait-options": N(ie),
				"selected-base-actor": N(f),
				"selected-portrait-candidate": N(xe),
				"selected-portrait-candidate-key": N(Se),
				"selected-spell-count": N(p).length,
				"suggested-actor-name": N(m),
				"trait-count": N(h).length,
				"visible-trapping-count": N(pe),
				onActorNameChange: n[3] ||= (e) => i.value = e,
				onOpenPortraitGallery: n[4] ||= (e) => _e.value = !0,
				onSelectPortrait: N(Ce),
				onToggleOptionalTrait: N(oe),
				onToggleQuickTrait: N(se)
			}, null, 8, /* @__PURE__ */ "actor-name.advancement-count.build-preview-status.build-preview-warnings.career-item-count.compact-portrait-candidates.edited-advance-count.estimated-npc-xp.fallback-trapping-count.final-actor-name.final-career.final-portrait-path.grant-totals.hidden-portrait-candidate-count.ignored-trapping-count.is-loading-portrait-candidates.optional-trait-options.portrait-candidates.portrait-search-progress.portrait-search-progress-label.portrait-search-progress-value.quick-trait-options.selected-base-actor.selected-portrait-candidate.selected-portrait-candidate-key.selected-spell-count.suggested-actor-name.trait-count.visible-trapping-count.onSelectPortrait.onToggleOptionalTrait.onToggleQuickTrait".split(".")),
			H(JA, {
				"is-loading-portrait-candidates": N(ge),
				open: N(_e),
				"portrait-candidates": N(O),
				"selected-portrait-candidate-key": N(Se),
				onClose: n[5] ||= (e) => _e.value = !1,
				onSelectPortrait: N(we)
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
function yj(e) {
	return e ? e.digDownActive ? e.digDownDeepFileSearchEnabled ? e.digDownCacheReady ? `Dig Down cache ready with ${e.digDownIndexedFileCount} indexed files.` : "Dig Down is active; its file cache is still building or unavailable." : "Dig Down is active, but its Deep File Search setting is disabled." : "Install and enable Dig Down to search local files for portrait suggestions." : "Checking Dig Down integration.";
}
//#endregion
//#region src/functions/npc-builder/settings/settings-payload.ts
function bj(e) {
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
function xj(e) {
	let t = RD(), { actorFolders: n, itemFolders: r, settings: i } = ic(t), a = /* @__PURE__ */ M(""), o = /* @__PURE__ */ M(""), s = /* @__PURE__ */ M(!1), c = /* @__PURE__ */ M(""), l = /* @__PURE__ */ M(null), u = /* @__PURE__ */ M(""), d = /* @__PURE__ */ M(""), f = G(() => l.value?.digDownActive ?? !0), p = G(() => yj(l.value));
	qn(l, (e) => {
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
			t.hydrateSettings(await e.saveSettings(LE())), await ee(), d.value = "Settings reset to defaults.";
		});
	}
	async function w(e) {
		s.value = !0, o.value = "", d.value = "";
		try {
			await e();
		} catch (e) {
			o.value = Sj(e);
		} finally {
			s.value = !1;
		}
	}
	async function ee() {
		let [n, r] = await Promise.all([e.listBaseActors(i.value), e.listQuickTraits(i.value)]);
		t.hydrateBaseActors(n), t.hydrateQuickTraits(r);
	}
	function T() {
		return bj({
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
function Sj(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSettingsTab/FolderSetting.vue?vue&type=script&setup=true&lang.ts
var Cj = { class: "dui-fieldset" }, wj = { class: "dui-fieldset-legend" }, Tj = ["aria-label", "value"], Ej = { value: "" }, Dj = ["value"], Oj = { class: "dui-fieldset" }, kj = ["aria-label", "value"], Aj = { class: "dui-card-actions" }, jj = ["disabled"], Mj = /* @__PURE__ */ F({
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
		return (t, a) => (R(), z("section", null, [
			V("fieldset", Cj, [V("legend", wj, k(e.folderLabel), 1), V("select", {
				"aria-label": e.folderLabel,
				class: "dui-select dui-select-sm",
				value: e.selectedUuid,
				onChange: r
			}, [V("option", Ej, k(e.defaultOptionLabel), 1), (R(!0), z(L, null, I(e.folders, (e) => (R(), z("option", {
				key: e.uuid,
				value: e.uuid
			}, k(e.name), 9, Dj))), 128))], 40, Tj)]),
			V("fieldset", Oj, [a[1] ||= V("legend", { class: "dui-fieldset-legend" }, "Create or use by name", -1), V("input", {
				"aria-label": `Create or use ${e.folderLabel} by name`,
				class: "dui-input dui-input-sm",
				value: e.createName,
				placeholder: "Folder name",
				type: "text",
				onInput: i
			}, null, 40, kj)]),
			V("div", Aj, [V("button", {
				class: "dui-btn dui-btn-sm",
				disabled: e.disabled || !e.createName.trim(),
				type: "button",
				onClick: a[0] ||= (e) => n("saveFolderName")
			}, k(e.buttonLabel ?? "Save Folder"), 9, jj)])
		]));
	}
}), Nj = /* @__PURE__ */ F({
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
		return (t, r) => (R(), B(yO, {
			description: "Limit the source picker or choose where generated Actors are stored.",
			number: "1",
			title: "Actor Sources"
		}, {
			default: P(() => [H(Mj, {
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
			]), H(Mj, {
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
}), Pj = { class: "dui-label" }, Fj = ["checked"], Ij = { class: "dui-label" }, Lj = ["checked"], Rj = { class: "dui-label" }, zj = ["checked"], Bj = { class: "dui-label" }, Vj = ["checked"], Hj = { class: "dui-label" }, Uj = ["checked"], Wj = /* @__PURE__ */ F({
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
		return (t, i) => (R(), B(yO, {
			description: "Choose which base-only data is included in the editable draft.",
			number: "5",
			title: "Base Actor Features"
		}, {
			default: P(() => [
				V("label", Pj, [V("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowCharacteristics,
					type: "checkbox",
					onChange: i[0] ||= (e) => n("allowCharacteristicsChange", r(e))
				}, null, 40, Fj), i[5] ||= V("span", null, "Show base actor characteristics", -1)]),
				V("label", Ij, [V("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowSkills,
					type: "checkbox",
					onChange: i[1] ||= (e) => n("allowSkillsChange", r(e))
				}, null, 40, Lj), i[6] ||= V("span", null, "Show base actor skills", -1)]),
				V("label", Rj, [V("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowTalents,
					type: "checkbox",
					onChange: i[2] ||= (e) => n("allowTalentsChange", r(e))
				}, null, 40, zj), i[7] ||= V("span", null, "Show base actor talents", -1)]),
				V("label", Bj, [V("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowTrappings,
					type: "checkbox",
					onChange: i[3] ||= (e) => n("allowTrappingsChange", r(e))
				}, null, 40, Vj), i[8] ||= V("span", null, "Show base actor trappings", -1)]),
				V("label", Hj, [V("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowTraits,
					type: "checkbox",
					onChange: i[4] ||= (e) => n("allowTraitsChange", r(e))
				}, null, 40, Uj), i[9] ||= V("span", null, "Show base actor traits", -1)])
			]),
			_: 1
		}));
	}
}), Gj = { class: "dui-label" }, Kj = ["checked"], qj = /* @__PURE__ */ F({
	__name: "MagicSpellSettings",
	props: { autoSelectGrantedSpells: { type: Boolean } },
	emits: ["autoSelectGrantedSpellsChange"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			let t = e.target;
			n("autoSelectGrantedSpellsChange", !!t?.checked);
		}
		return (t, n) => (R(), B(yO, {
			number: "6",
			title: "Magic and Spells"
		}, {
			default: P(() => [V("label", Gj, [V("input", {
				class: "dui-toggle dui-toggle-sm",
				checked: e.autoSelectGrantedSpells,
				type: "checkbox",
				onChange: r
			}, null, 40, Kj), n[0] ||= V("span", null, "Select detected Lore spells by default", -1)])]),
			_: 1
		}));
	}
}), Jj = { class: "dui-label" }, Yj = ["checked"], Xj = /* @__PURE__ */ F({
	__name: "NamingSettings",
	props: { includeSpeciesInName: { type: Boolean } },
	emits: ["includeSpeciesInNameChange"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			let t = e.target;
			n("includeSpeciesInNameChange", !!t?.checked);
		}
		return (t, n) => (R(), B(yO, {
			number: "3",
			title: "Default Naming"
		}, {
			default: P(() => [V("label", Jj, [V("input", {
				class: "dui-toggle dui-toggle-sm",
				checked: e.includeSpeciesInName,
				type: "checkbox",
				onChange: r
			}, null, 40, Yj), n[0] ||= V("span", null, "Include species in suggested names", -1)])]),
			_: 1
		}));
	}
}), Zj = { class: "dui-fieldset" }, Qj = ["value"], $j = { class: "dui-label" }, eM = ["checked"], tM = { class: "dui-card-actions" }, nM = ["disabled"], rM = ["disabled"], iM = /* @__PURE__ */ F({
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
		return (t, a) => (R(), B(yO, {
			number: "7",
			title: "Career Choices and Saving"
		}, {
			default: P(() => [
				V("fieldset", Zj, [a[3] ||= V("legend", { class: "dui-fieldset-legend" }, "Lower career handling", -1), V("select", {
					"aria-label": "Lower career handling",
					class: "dui-select dui-select-sm",
					value: e.lowerCareerMode,
					onChange: r
				}, [...a[2] ||= [
					V("option", { value: "prompt" }, "Prompt when candidates are found", -1),
					V("option", { value: "auto-add-all" }, "Automatically add all lower-tier matches", -1),
					V("option", { value: "never" }, "Only add dropped careers", -1)
				]], 40, Qj)]),
				V("label", $j, [V("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.askForLinkedSkillSpecializations,
					type: "checkbox",
					onChange: i
				}, null, 40, eM), a[4] ||= V("span", null, "Resolve linked career skill repeats separately", -1)]),
				V("div", tM, [V("button", {
					class: "dui-btn dui-btn-primary dui-btn-sm",
					disabled: e.isBusy,
					type: "button",
					onClick: a[0] ||= (e) => n("saveSettings")
				}, " Save Settings ", 8, nM), V("button", {
					class: "dui-btn dui-btn-sm",
					disabled: e.isBusy,
					type: "button",
					onClick: a[1] ||= (e) => n("resetSettings")
				}, " Reset to Defaults ", 8, rM)])
			]),
			_: 1
		}));
	}
}), aM = { class: "dui-label" }, oM = ["checked", "disabled"], sM = {
	"aria-live": "polite",
	class: "dui-alert",
	role: "status"
}, cM = { class: "dui-label" }, lM = ["checked"], uM = { class: "dui-label" }, dM = ["checked"], fM = /* @__PURE__ */ F({
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
		return (t, n) => (R(), B(yO, {
			description: "Choose which local Foundry sources can suggest portraits.",
			number: "4",
			title: "Portrait Suggestions"
		}, {
			default: P(() => [
				V("label", aM, [V("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.searchFoundryPortraitAssets,
					disabled: !e.canUseDigDownPortraitSearch,
					type: "checkbox",
					onChange: r
				}, null, 40, oM), n[0] ||= V("span", null, "Search Dig Down's file cache for portrait suggestions", -1)]),
				V("p", sM, k(e.statusLabel), 1),
				V("label", cM, [V("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.searchCompendiumPortraitAssets,
					type: "checkbox",
					onChange: i
				}, null, 40, lM), n[1] ||= V("span", null, "Search Actor and Item compendiums for portrait suggestions", -1)]),
				V("label", uM, [V("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.searchWebPortraitAssets,
					disabled: "",
					type: "checkbox"
				}, null, 8, dM), n[2] ||= V("span", null, "Search the web for portrait suggestions (later)", -1)])
			]),
			_: 1
		}));
	}
}), pM = { class: "dui-card-actions" }, mM = ["disabled"], hM = /* @__PURE__ */ F({
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
		return (t, r) => (R(), B(yO, {
			description: "Items in this folder become one-click Trait choices on the Build tab.",
			number: "2",
			title: "Quick Traits"
		}, {
			default: P(() => [H(Mj, {
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
			]), V("div", pM, [V("button", {
				class: "dui-btn dui-btn-sm",
				disabled: e.isBusy || !e.quickTraitFolderUuid,
				type: "button",
				onClick: r[3] ||= (e) => n("importRecommendedQuickTraits")
			}, " Import Recommended Quick Traits ", 8, mM)])]),
			_: 1
		}));
	}
}), gM = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, _M = {
	key: 1,
	"aria-live": "polite",
	class: "dui-alert dui-alert-info",
	role: "status"
}, vM = /* @__PURE__ */ F({
	__name: "SettingsMessages",
	props: {
		errorMessage: {},
		settingsMessage: {}
	},
	setup(e) {
		return (t, n) => e.errorMessage ? (R(), z("p", gM, k(e.errorMessage), 1)) : e.settingsMessage ? (R(), z("p", _M, k(e.settingsMessage), 1)) : W("", !0);
	}
}), yM = /* @__PURE__ */ F({
	__name: "NpcBuilderSettingsTab",
	props: { bridge: {} },
	setup(e) {
		let { actorFolders: t, baseActorFolderName: n, canUseDigDownPortraitSearch: r, errorMessage: i, importRecommendedQuickTraits: a, isBusy: o, itemFolders: s, outputActorFolderName: c, portraitSearchStatusLabel: l, quickTraitFolderName: u, refreshPortraitSearchAvailability: d, resetSettingsToDefaults: f, saveBaseActorFolderName: p, saveOutputActorFolderName: m, saveQuickTraitFolderName: h, saveSettings: g, settings: _, settingsMessage: v } = xj(e.bridge);
		return Or(() => {
			d();
		}), (e, d) => (R(), z("section", null, [
			H(vM, {
				"error-message": N(i),
				"settings-message": N(v)
			}, null, 8, ["error-message", "settings-message"]),
			H(Nj, {
				"actor-folders": N(t),
				"base-actor-folder-name": N(n),
				"base-actor-folder-uuid": N(_).baseActorFolderUuid,
				"is-busy": N(o),
				"output-actor-folder-name": N(c),
				"output-actor-folder-uuid": N(_).outputActorFolderUuid,
				onBaseActorFolderNameChange: d[0] ||= (e) => n.value = e,
				onBaseActorFolderUuidChange: d[1] ||= (e) => N(_).baseActorFolderUuid = e,
				onOutputActorFolderNameChange: d[2] ||= (e) => c.value = e,
				onOutputActorFolderUuidChange: d[3] ||= (e) => N(_).outputActorFolderUuid = e,
				onSaveBaseActorFolderName: N(p),
				onSaveOutputActorFolderName: N(m)
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
			d[17] ||= V("div", { class: "dui-divider" }, null, -1),
			H(hM, {
				"is-busy": N(o),
				"item-folders": N(s),
				"quick-trait-folder-name": N(u),
				"quick-trait-folder-uuid": N(_).quickTraitFolderUuid,
				onImportRecommendedQuickTraits: N(a),
				onQuickTraitFolderNameChange: d[4] ||= (e) => u.value = e,
				onQuickTraitFolderUuidChange: d[5] ||= (e) => N(_).quickTraitFolderUuid = e,
				onSaveQuickTraitFolderName: N(h)
			}, null, 8, [
				"is-busy",
				"item-folders",
				"quick-trait-folder-name",
				"quick-trait-folder-uuid",
				"onImportRecommendedQuickTraits",
				"onSaveQuickTraitFolderName"
			]),
			d[18] ||= V("div", { class: "dui-divider" }, null, -1),
			H(Xj, {
				"include-species-in-name": N(_).includeSpeciesInName,
				onIncludeSpeciesInNameChange: d[6] ||= (e) => N(_).includeSpeciesInName = e
			}, null, 8, ["include-species-in-name"]),
			d[19] ||= V("div", { class: "dui-divider" }, null, -1),
			H(fM, {
				"can-use-dig-down-portrait-search": N(r),
				"search-compendium-portrait-assets": N(_).searchCompendiumPortraitAssets,
				"search-foundry-portrait-assets": N(_).searchFoundryPortraitAssets,
				"search-web-portrait-assets": N(_).searchWebPortraitAssets,
				"status-label": N(l),
				onSearchCompendiumPortraitAssetsChange: d[7] ||= (e) => N(_).searchCompendiumPortraitAssets = e,
				onSearchFoundryPortraitAssetsChange: d[8] ||= (e) => N(_).searchFoundryPortraitAssets = e
			}, null, 8, [
				"can-use-dig-down-portrait-search",
				"search-compendium-portrait-assets",
				"search-foundry-portrait-assets",
				"search-web-portrait-assets",
				"status-label"
			]),
			d[20] ||= V("div", { class: "dui-divider" }, null, -1),
			H(Wj, {
				"allow-characteristics": N(_).allowBaseActorCharacteristics,
				"allow-skills": N(_).allowBaseActorSkills,
				"allow-talents": N(_).allowBaseActorTalents,
				"allow-traits": N(_).allowBaseActorTraits,
				"allow-trappings": N(_).allowBaseActorTrappings,
				onAllowCharacteristicsChange: d[9] ||= (e) => N(_).allowBaseActorCharacteristics = e,
				onAllowSkillsChange: d[10] ||= (e) => N(_).allowBaseActorSkills = e,
				onAllowTalentsChange: d[11] ||= (e) => N(_).allowBaseActorTalents = e,
				onAllowTraitsChange: d[12] ||= (e) => N(_).allowBaseActorTraits = e,
				onAllowTrappingsChange: d[13] ||= (e) => N(_).allowBaseActorTrappings = e
			}, null, 8, [
				"allow-characteristics",
				"allow-skills",
				"allow-talents",
				"allow-traits",
				"allow-trappings"
			]),
			d[21] ||= V("div", { class: "dui-divider" }, null, -1),
			H(qj, {
				"auto-select-granted-spells": N(_).autoSelectGrantedSpells,
				onAutoSelectGrantedSpellsChange: d[14] ||= (e) => N(_).autoSelectGrantedSpells = e
			}, null, 8, ["auto-select-granted-spells"]),
			d[22] ||= V("div", { class: "dui-divider" }, null, -1),
			H(iM, {
				"ask-for-linked-skill-specializations": N(_).askForLinkedSkillSpecializations,
				"is-busy": N(o),
				"lower-career-mode": N(_).lowerCareerMode,
				onAskForLinkedSkillSpecializationsChange: d[15] ||= (e) => N(_).askForLinkedSkillSpecializations = e,
				onLowerCareerModeChange: d[16] ||= (e) => N(_).lowerCareerMode = e,
				onResetSettings: N(f),
				onSaveSettings: N(g)
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
function bM(e) {
	return e.map((e) => `${e.kind}:${e.sourceName}:${e.rawLore}`).sort().join("|");
}
function xM(e) {
	return e.filter((e) => e.isAmbiguous);
}
function SM(e, t) {
	return { rows: xM(e).map((e) => ({
		grantLabel: wM(e),
		options: JE(e, t),
		rawLore: e.rawLore,
		resolutionKey: e.resolutionKey,
		selectedLore: "",
		sourceLabel: TM(e)
	})) };
}
function CM(e) {
	return e.kind === "arcane-magic" ? "Arcane Magic" : e.kind === "petty-magic" ? "Petty Magic" : "Spellcaster";
}
function wM(e) {
	return `${CM(e)} from ${e.sourceName}`;
}
function TM(e) {
	return e.source === "talent" ? "Talent" : "Trait";
}
//#endregion
//#region src/state/npc-builder/workflows/spells-workflow.ts
function EM(e) {
	let t = RD(), { magicGrants: n, spells: r, selectedSpells: i } = ic(t), a = /* @__PURE__ */ M(""), o = /* @__PURE__ */ M(!1), s = /* @__PURE__ */ M(!1), c = /* @__PURE__ */ M([]), l = /* @__PURE__ */ M(null), u = 0, d = G(() => xM(n.value)), f = G(() => n.value.length - d.value.length);
	qn(() => bM(n.value), () => {
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
			u === r && (a.value = DM(e));
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
				a.value = DM(e);
			} finally {
				o.value = !1;
			}
		}
	}
	async function g() {
		a.value = "", await h(), l.value = SM(n.value, c.value);
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
			a.value = DM(e);
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
function DM(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that spell action.";
}
//#endregion
//#region src/view/apps/npc-builder/components/MagicLoreResolutionPromptContent.vue?vue&type=script&setup=true&lang.ts
var OM = { class: "dui-card-body" }, kM = { class: "dui-card-title" }, AM = { class: "dui-fieldset" }, jM = ["onUpdate:modelValue", "aria-label"], MM = ["value"], NM = { class: "dui-card-actions" }, PM = /* @__PURE__ */ F({
	__name: "MagicLoreResolutionPromptContent",
	props: { prompt: {} },
	emits: ["applyLores", "keepUnresolved"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (R(), z("section", null, [
			r[4] ||= V("p", null, " Choose concrete magic Lores for ambiguous grants before automatic spells are detected. Unresolved grants can still use manually dropped spells. ", -1),
			(R(!0), z(L, null, I(e.prompt.rows, (e) => (R(), z("section", {
				key: e.resolutionKey,
				class: "dui-card dui-card-border dui-card-sm"
			}, [V("div", OM, [
				V("h3", kM, k(e.grantLabel), 1),
				V("span", null, k(e.sourceLabel) + " - " + k(e.rawLore || "Any Lore"), 1),
				V("fieldset", AM, [r[3] ||= V("legend", { class: "dui-fieldset-legend" }, "Lore", -1), Bn(V("select", {
					"onUpdate:modelValue": (t) => e.selectedLore = t,
					"aria-label": `Lore for ${e.grantLabel}`,
					class: "dui-select dui-select-sm"
				}, [r[2] ||= V("option", { value: "" }, "Leave unresolved", -1), (R(!0), z(L, null, I(e.options, (e) => (R(), z("option", {
					key: e.key,
					value: e.value
				}, k(e.label) + k(e.wind && e.wind !== "None" ? ` (${e.wind})` : ""), 9, MM))), 128))], 8, jM), [[Uo, e.selectedLore]])])
			])]))), 128)),
			V("div", NM, [V("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: r[0] ||= (e) => n("keepUnresolved")
			}, " Keep Unresolved "), V("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: r[1] ||= (e) => n("applyLores")
			}, " Apply Lores ")])
		]));
	}
}), FM = {
	key: 0,
	class: "dui-alert"
}, IM = {
	key: 1,
	class: "dui-list"
}, LM = { class: "dui-list-col-grow" }, RM = { key: 0 }, zM = { key: 1 }, BM = {
	key: 2,
	class: "dui-card-actions"
}, VM = ["disabled"], HM = /* @__PURE__ */ F({
	__name: "MagicAccessPanel",
	props: {
		ambiguousGrantCount: {},
		isLoadingLoreOptions: { type: Boolean },
		magicGrants: {}
	},
	emits: ["resolveLores"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (R(), B(yO, {
			description: "Magic Talents and Traits determine which spell Lores are available.",
			number: "1",
			title: "Magic Access"
		}, {
			default: P(() => [e.magicGrants.length ? (R(), z("ul", IM, [(R(!0), z(L, null, I(e.magicGrants, (e) => (R(), z("li", {
				key: `${e.source}:${e.sourceName}:${e.rawLore}`,
				class: "dui-list-row"
			}, [V("div", LM, [
				V("strong", null, k(N(CM)(e)), 1),
				V("span", null, k(N(TM)(e)) + " - " + k(e.sourceName), 1),
				e.isAmbiguous ? (R(), z("small", RM, " Needs Lore resolution before automatic spells can be found. ")) : (R(), z("small", zM, " Lore: " + k(e.rawLore || e.normalizedLore), 1))
			])]))), 128))])) : (R(), z("p", FM, " No magic-enabling Talent or Trait is selected. ")), e.ambiguousGrantCount ? (R(), z("div", BM, [V("button", {
				class: "dui-btn dui-btn-sm",
				disabled: e.isLoadingLoreOptions,
				type: "button",
				onClick: r[0] ||= (e) => n("resolveLores")
			}, k(e.isLoadingLoreOptions ? "Loading Lores..." : "Resolve Lores"), 9, VM)])) : W("", !0)]),
			_: 1
		}));
	}
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSpellsTab/labels.ts
function UM(e) {
	return e.source === "custom" ? "Dropped" : e.sourceLabel;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSpellsTab/SpellSelectionPanel.vue?vue&type=script&setup=true&lang.ts
var WM = { class: "dui-card-actions" }, GM = ["disabled"], KM = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, qM = {
	key: 1,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, JM = {
	key: 2,
	class: "dui-list"
}, YM = [
	"aria-label",
	"checked",
	"onChange"
], XM = { class: "dui-list-col-grow" }, ZM = {
	key: 0,
	class: "dui-avatar"
}, QM = ["src"], $M = ["onClick"], eN = {
	key: 3,
	class: "dui-alert"
}, tN = /* @__PURE__ */ F({
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
		return (t, r) => (R(), B(yO, {
			description: "Select detected Lore spells or drop specific Spell Items.",
			number: "2",
			title: "Spells"
		}, {
			default: P(() => [
				H(P_, {
					description: "Add a specific Spell item regardless of detected Lores.",
					title: "Drop Spell Items",
					onDropData: r[0] ||= (e) => n("spellDrop", e)
				}),
				V("div", WM, [V("button", {
					class: "dui-btn dui-btn-sm",
					disabled: e.isLoadingSpells || !e.resolvedGrantCount,
					type: "button",
					onClick: r[1] ||= (e) => n("refreshSpells")
				}, k(e.isLoadingSpells ? "Finding spells..." : "Refresh Spells"), 9, GM), V("span", null, k(e.selectedSpellCount) + " selected / " + k(e.spells.length) + " found", 1)]),
				e.errorMessage ? (R(), z("p", KM, k(e.errorMessage), 1)) : W("", !0),
				e.ambiguousGrantCount ? (R(), z("p", qM, k(e.ambiguousGrantCount) + " magic grant" + k(e.ambiguousGrantCount === 1 ? "" : "s") + " still need Lore resolution. You can still drop specific spells for now. ", 1)) : W("", !0),
				e.spells.length ? (R(), z("ul", JM, [(R(!0), z(L, null, I(e.spells, (e) => (R(), z("li", {
					key: e.key,
					class: "dui-list-row"
				}, [
					V("input", {
						"aria-label": `Use ${e.name}`,
						class: "dui-checkbox dui-checkbox-sm",
						checked: e.selected,
						type: "checkbox",
						onChange: (t) => n("spellSelectedChange", e, t)
					}, null, 40, YM),
					V("div", XM, [
						e.img ? (R(), z("div", ZM, [V("div", null, [V("img", {
							src: e.img,
							alt: ""
						}, null, 8, QM)])])) : W("", !0),
						V("strong", null, k(e.name), 1),
						V("span", null, k(e.loreName || "Unknown Lore") + " · " + k(N(UM)(e)), 1)
					]),
					e.source === "custom" ? (R(), z("button", {
						key: 0,
						class: "dui-btn dui-btn-sm",
						type: "button",
						onClick: (t) => n("removeCustomSpell", e.key)
					}, " Remove ", 8, $M)) : W("", !0)
				]))), 128))])) : (R(), z("p", eN, " No matching spells found yet. Drop specific spells here, or resolve a non-ambiguous magic Lore. "))
			]),
			_: 1
		}));
	}
}), nN = /* @__PURE__ */ F({
	__name: "NpcBuilderSpellsTab",
	props: { bridge: {} },
	setup(e) {
		let { ambiguousGrants: t, confirmMagicLorePrompt: n, dismissMagicLorePrompt: r, errorMessage: i, handleSpellDrop: a, initialize: o, isLoadingLoreOptions: s, isLoadingSpells: c, loadDetectedSpells: l, magicGrants: u, openMagicLorePrompt: d, pendingMagicLorePrompt: f, removeCustomSpell: p, resolvedGrantCount: m, selectedSpells: h, setSpellSelected: g, spells: _ } = EM(e.bridge);
		Or(() => {
			o();
		});
		function v(e, t) {
			let n = t.target;
			n && g(e.key, n.checked);
		}
		return (e, o) => (R(), z("section", null, [
			H(qD, {
				open: N(f) !== null,
				title: "Resolve Magic Lores",
				onClose: N(r)
			}, {
				default: P(() => [N(f) ? (R(), B(PM, {
					key: 0,
					prompt: N(f),
					onApplyLores: N(n),
					onKeepUnresolved: N(r)
				}, null, 8, [
					"prompt",
					"onApplyLores",
					"onKeepUnresolved"
				])) : W("", !0)]),
				_: 1
			}, 8, ["open", "onClose"]),
			H(HM, {
				"ambiguous-grant-count": N(t).length,
				"is-loading-lore-options": N(s),
				"magic-grants": N(u),
				onResolveLores: N(d)
			}, null, 8, [
				"ambiguous-grant-count",
				"is-loading-lore-options",
				"magic-grants",
				"onResolveLores"
			]),
			o[0] ||= V("div", { class: "dui-divider" }, null, -1),
			H(tN, {
				"ambiguous-grant-count": N(t).length,
				"error-message": N(i),
				"is-loading-spells": N(c),
				"resolved-grant-count": N(m),
				"selected-spell-count": N(h).length,
				spells: N(_),
				onRefreshSpells: N(l),
				onRemoveCustomSpell: N(p),
				onSpellDrop: N(a),
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
}), rN = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, iN = { class: "dui-collapse-title" }, aN = { class: "dui-badge" }, oN = {
	key: 0,
	class: "dui-badge dui-badge-info"
}, sN = {
	key: 1,
	class: "dui-badge dui-badge-warning"
}, cN = { class: "dui-collapse-content" }, lN = { class: "dui-fieldset" }, uN = { class: "dui-fieldset-legend" }, dN = [
	"aria-label",
	"value",
	"onInput"
], fN = {
	key: 0,
	class: "dui-fieldset"
}, pN = [
	"aria-label",
	"value",
	"onChange"
], mN = ["value"], hN = {
	key: 1,
	class: "dui-fieldset"
}, gN = [
	"aria-label",
	"value",
	"onInput"
], _N = ["onClick"], vN = {
	key: 1,
	class: "dui-alert"
}, yN = /* @__PURE__ */ F({
	__name: "NpcBuilderTraitsTab",
	props: {
		bridge: {},
		difficultyOptions: {}
	},
	setup(e) {
		let t = e, n = RD(), { traits: r } = ic(n), i = /* @__PURE__ */ M("");
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
		return (t, n) => (R(), B(yO, {
			description: "Open a Trait to review its WFRP configuration before building.",
			title: "Traits"
		}, {
			default: P(() => [
				H(P_, {
					description: "Add creature traits or NPC trait items.",
					title: "Drop Trait Items",
					onDropData: c
				}),
				i.value ? (R(), z("p", rN, k(i.value), 1)) : W("", !0),
				(R(!0), z(L, null, I(N(r), (t) => (R(), z("details", {
					key: t.key,
					class: "dui-collapse dui-collapse-arrow dui-card-border"
				}, [V("summary", iN, [
					V("strong", null, k(t.name), 1),
					V("span", aN, k(a(t)), 1),
					t.config.rollable ? (R(), z("span", oN, "Rollable")) : W("", !0),
					t.config.damage ? (R(), z("span", sN, "Damage")) : W("", !0)
				]), V("div", cN, [
					V("fieldset", lN, [V("legend", uN, k(t.config.damage ? "Damage" : "Specification"), 1), V("input", {
						"aria-label": `${t.config.damage ? "Damage" : "Specification"} for ${t.name}`,
						class: "dui-input dui-input-sm",
						value: t.config.specification,
						placeholder: "None",
						type: "text",
						onInput: (e) => s(t, "specification", e)
					}, null, 40, dN)]),
					t.config.rollable && !t.config.damage ? (R(), z("fieldset", fN, [n[0] ||= V("legend", { class: "dui-fieldset-legend" }, "Difficulty", -1), V("select", {
						"aria-label": `Difficulty for ${t.name}`,
						class: "dui-select dui-select-sm",
						value: t.config.defaultDifficulty,
						onChange: (e) => s(t, "defaultDifficulty", e)
					}, [(R(!0), z(L, null, I(e.difficultyOptions, (e) => (R(), z("option", {
						key: e.value,
						value: e.value
					}, k(e.label), 9, mN))), 128))], 40, pN)])) : W("", !0),
					t.config.damage && t.config.dice ? (R(), z("fieldset", hN, [n[1] ||= V("legend", { class: "dui-fieldset-legend" }, "Dice", -1), V("input", {
						"aria-label": `Dice for ${t.name}`,
						class: "dui-input dui-input-sm",
						value: t.config.dice,
						placeholder: "Optional",
						type: "text",
						onInput: (e) => s(t, "dice", e)
					}, null, 40, gN)])) : W("", !0),
					V("button", {
						class: "dui-btn dui-btn-sm",
						type: "button",
						onClick: (e) => o(t)
					}, "Remove", 8, _N)
				])]))), 128)),
				N(r).length ? W("", !0) : (R(), z("p", vN, "No traits are selected yet."))
			]),
			_: 1
		}));
	}
}), bN = "__blank-item__";
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderTrappingsTab/resolution-labels.ts
function xN(e) {
	return e.source === "base" ? "Base" : e.source === "career" ? "Career" : "Custom";
}
function SN(e) {
	return e.resolution.status === "matched" ? `Matched ${e.resolution.selectedName}` : e.resolution.status === "fallback" ? `Blank ${e.resolution.selectedName || e.name}` : e.resolution.candidates.length ? "Choose a match" : "Needs resolution";
}
function CN(e) {
	return e.ignored ? "Ignored" : e.resolution.status === "matched" ? "Matched" : e.resolution.status === "fallback" ? "Blank item" : e.resolution.status === "ambiguous" || e.resolution.candidates.length ? "Choose" : "Needs resolution";
}
function wN(e) {
	let t = "dui-badge";
	return e.ignored ? [t, "dui-badge-ghost"] : e.resolution.status === "matched" ? [t, "dui-badge-success"] : e.resolution.status === "fallback" ? [t, "dui-badge-info"] : e.resolution.status === "ambiguous" || e.resolution.candidates.length ? [t, "dui-badge-warning"] : [t, "dui-badge-error"];
}
function TN(e) {
	return e.resolution.status === "fallback" ? bN : e.resolution.selectedCandidateUuid;
}
function EN(e) {
	return e.source === "career";
}
function DN(e) {
	return e.resolution.candidates.length > 0 || EN(e);
}
function ON(e) {
	return e.resolution.searchTerms.length <= 1 ? "" : `Options: ${e.resolution.searchTerms.join(" / ")}`;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderTrappingsTab/TrappingsTable.vue?vue&type=script&setup=true&lang.ts
var kN = {
	key: 0,
	class: "dui-list"
}, AN = [
	"aria-label",
	"checked",
	"onChange"
], jN = { class: "dui-list-col-grow" }, MN = { key: 0 }, NN = {
	key: 1,
	class: "dui-fieldset"
}, PN = [
	"aria-label",
	"value",
	"onChange"
], FN = {
	key: 0,
	value: ""
}, IN = ["value"], LN = ["value"], RN = { key: 2 }, zN = { class: "dui-card-actions" }, BN = { class: "dui-fieldset" }, VN = [
	"aria-label",
	"value",
	"onInput"
], HN = ["onClick"], UN = {
	key: 1,
	class: "dui-alert"
}, WN = /* @__PURE__ */ F({
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
		return (t, r) => e.trappings.length ? (R(), z("ul", kN, [(R(!0), z(L, null, I(e.trappings, (e) => (R(), z("li", {
			key: e.key,
			class: "dui-list-row"
		}, [V("input", {
			"aria-label": `Use ${e.name}`,
			class: "dui-checkbox dui-checkbox-sm",
			checked: !e.ignored,
			type: "checkbox",
			onChange: (t) => n("useChange", e.key, t)
		}, null, 40, AN), V("div", jN, [
			V("strong", null, k(e.name), 1),
			V("span", null, k(e.resolution.selectedItemType || e.itemType || "trapping") + " · " + k(N(xN)(e)), 1),
			N(ON)(e) ? (R(), z("span", MN, k(N(ON)(e)), 1)) : W("", !0),
			V("span", { class: O(N(wN)(e)) }, k(N(CN)(e)), 3),
			N(DN)(e) ? (R(), z("fieldset", NN, [r[0] ||= V("legend", { class: "dui-fieldset-legend" }, "Resolution", -1), V("select", {
				"aria-label": `Resolution for ${e.name}`,
				class: "dui-select dui-select-sm",
				value: N(TN)(e),
				onChange: (t) => n("resolutionChange", e.key, t)
			}, [
				e.resolution.candidates.length ? (R(), z("option", FN, "Choose match")) : W("", !0),
				(R(!0), z(L, null, I(e.resolution.candidates, (e) => (R(), z("option", {
					key: e.uuid,
					value: e.uuid
				}, k(e.name) + " (" + k(e.sourceLabel) + ") ", 9, IN))), 128)),
				N(EN)(e) ? (R(), z("option", {
					key: 1,
					value: N(bN)
				}, " Blank Item ", 8, LN)) : W("", !0)
			], 40, PN)])) : (R(), z("span", RN, k(N(SN)(e)), 1)),
			V("div", zN, [V("fieldset", BN, [r[1] ||= V("legend", { class: "dui-fieldset-legend" }, "Quantity", -1), V("input", {
				"aria-label": `Quantity for ${e.name}`,
				class: "dui-input dui-input-sm",
				value: e.quantity,
				min: "1",
				type: "number",
				onInput: (t) => n("quantityInput", e.key, t)
			}, null, 40, VN)]), e.source === "custom" ? (R(), z("button", {
				key: 0,
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: (t) => n("removeCustomTrapping", e.key)
			}, " Remove ", 8, HN)) : W("", !0)])
		])]))), 128))])) : (R(), z("p", UN, "No trappings are selected yet."));
	}
}), GN = { class: "dui-card-actions" }, KN = ["disabled"], qN = { key: 0 }, JN = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, YN = /* @__PURE__ */ F({
	__name: "NpcBuilderTrappingsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = RD(), { trappings: r } = ic(n), i = /* @__PURE__ */ M(""), a = /* @__PURE__ */ M(!1), o = G(() => r.value.filter((e) => !e.ignored && e.resolution.status === "unresolved"));
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
		return (e, t) => (R(), B(yO, {
			description: "Review the Items that will be embedded in the generated NPC.",
			title: "Trappings"
		}, {
			default: P(() => [
				H(P_, {
					description: "Add weapons, armour, containers, or any other item.",
					title: "Drop Trapping Items",
					onDropData: d
				}),
				V("div", GN, [V("button", {
					class: "dui-btn dui-btn-sm",
					disabled: a.value || !o.value.length,
					type: "button",
					onClick: u
				}, k(a.value ? "Resolving..." : "Resolve Trappings"), 9, KN), o.value.length ? (R(), z("span", qN, k(o.value.length) + " unresolved ", 1)) : W("", !0)]),
				i.value ? (R(), z("p", JN, k(i.value), 1)) : W("", !0),
				H(WN, {
					trappings: N(r),
					onQuantityInput: s,
					onRemoveCustomTrapping: N(n).removeCustomTrapping,
					onResolutionChange: l,
					onUseChange: c
				}, null, 8, ["trappings", "onRemoveCustomTrapping"])
			]),
			_: 1
		}));
	}
}), XN = { class: "dui-card-body" }, ZN = { class: "dui-card-title" }, QN = { class: "dui-badge" }, $N = { class: "dui-fieldset" }, eP = ["onUpdate:modelValue", "aria-label"], tP = ["value"], nP = [
	"onUpdate:modelValue",
	"aria-label",
	"placeholder"
], rP = {
	key: 0,
	class: "dui-card-actions"
}, iP = { key: 0 }, aP = ["onClick"], oP = {
	key: 0,
	class: "dui-alert dui-alert-info"
}, sP = { class: "dui-card-actions" }, cP = /* @__PURE__ */ F({
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
		return (t, r) => (R(), z("section", null, [
			r[4] ||= V("p", null, " Some Career skills need a specialization before they become concrete WFRP skills. Blank rows can be left unresolved and edited later. ", -1),
			(R(!0), z(L, null, I(e.prompt.rows, (t) => (R(), z("section", {
				key: t.resolutionKey,
				class: "dui-card dui-card-border dui-card-sm"
			}, [V("div", XN, [
				V("h3", ZN, k(e.getSkillResolutionLabel(t)), 1),
				V("span", QN, k(t.careerLabel), 1),
				V("fieldset", $N, [r[3] ||= V("legend", { class: "dui-fieldset-legend" }, "Specialization", -1), t.options.length > 1 ? Bn((R(), z("select", {
					key: 0,
					"onUpdate:modelValue": (e) => t.resolvedSpecialization = e,
					"aria-label": `Specialization for ${e.getSkillResolutionLabel(t)}`,
					class: "dui-select dui-select-sm"
				}, [r[2] ||= V("option", { value: "" }, "Leave unresolved", -1), (R(!0), z(L, null, I(t.options, (e) => (R(), z("option", {
					key: e,
					value: e
				}, k(e), 9, tP))), 128))], 8, eP)), [[Uo, t.resolvedSpecialization]]) : Bn((R(), z("input", {
					key: 1,
					"onUpdate:modelValue": (e) => t.resolvedSpecialization = e,
					"aria-label": `Specialization for ${e.getSkillResolutionLabel(t)}`,
					class: "dui-input dui-input-sm",
					placeholder: t.suggestedSpecializations.length ? "Type or choose below" : t.specialization,
					type: "text"
				}, null, 8, nP)), [[Ho, t.resolvedSpecialization]])]),
				e.usesFreeformSkillSpecialization(t) ? (R(), z("div", rP, [t.isLoadingSuggestions ? (R(), z("small", iP, "Finding known choices.")) : W("", !0), (R(!0), z(L, null, I(t.suggestedSpecializations, (e) => (R(), z("button", {
					key: `${t.resolutionKey}:${e}`,
					class: "dui-btn dui-btn-sm",
					type: "button",
					onClick: (r) => n("chooseSkillSpecialization", t, e)
				}, k(e), 9, aP))), 128))])) : W("", !0)
			])]))), 128)),
			e.prompt.linkedRows.length ? (R(), z("div", oP, k(e.prompt.linkedRows.length) + " linked skill specialization" + k(e.prompt.linkedRows.length === 1 ? "" : "s") + " will reuse earlier choices from this career chain. ", 1)) : W("", !0),
			V("div", sP, [V("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: r[0] ||= (e) => n("addWithoutResolving")
			}, " Add Without Resolving "), V("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: r[1] ||= (e) => n("applySpecializations")
			}, " Apply Specializations ")])
		]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/errors.ts
function lP(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderBuild.ts
function uP(e, t, n, r, i) {
	let a = RD(), { advancements: o, buildTraits: s, careers: c, finalActorName: l, finalPortraitPath: u, selectedBaseActor: d, selectedSpells: f, settings: p, trappings: m } = ic(a), h = /* @__PURE__ */ M(!1), g = G(() => !!(d.value && c.value.length && !h.value && !i.value));
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
			r.value = lP(e), n.value = "";
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
function dP(e) {
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
function fP(e) {
	return [{
		career: e,
		mode: "add-or-increment"
	}];
}
function pP(e) {
	return [...e.candidates.filter((t) => e.selectedUuids.includes(t.uuid)).map((e) => ({
		career: e,
		mode: "add-if-missing"
	})), {
		career: e.droppedCareer,
		mode: "add-or-increment"
	}];
}
function mP(e) {
	let t = e.candidates.filter((t) => e.selectedUuids.includes(t.uuid)).length;
	return t === 0 ? "" : `Added ${t} lower-tier career candidate${t === 1 ? "" : "s"}.`;
}
function hP(e, t) {
	return e?.selectedUuids.includes(t) ?? !1;
}
function gP(e) {
	let { candidateUuid: t, isAlreadyQueued: n, prompt: r, selected: i } = e;
	return !r || n ? null : i ? [...new Set([...r.selectedUuids, t])] : r.selectedUuids.filter((e) => e !== t);
}
//#endregion
//#region src/functions/npc-builder/career-workflow/skill-resolution.ts
function _P(e, t) {
	let n = /* @__PURE__ */ new Map(), r = [], i = [];
	for (let a of e) {
		let e = /* @__PURE__ */ new Map();
		for (let o of NT(a.career.uuid, a.career.grants.skills)) {
			let s = MT(o.originalName);
			if (!s) continue;
			let c = PT(o.originalName), l = n.get(c) ?? [], u = e.get(c) ?? 0, d = t.enableLinkedSkillResolution && l[u] ? l[u] : "";
			if (e.set(c, u + 1), d) {
				r.push({
					linkedFromKey: d,
					resolutionKey: o.resolutionKey
				});
				continue;
			}
			i.push({
				baseName: s.baseName,
				careerLabel: xP(a.career),
				isLoadingSuggestions: !1,
				occurrence: o.occurrence,
				options: s.options,
				originalName: s.originalName,
				resolvedSpecialization: SP(s),
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
function vP(e) {
	return e.resolvedSpecialization.trim() ? AT(e.baseName, e.resolvedSpecialization) : "";
}
function yP(e) {
	return e.occurrence > 0 ? `${e.originalName}, choice ${e.occurrence + 1}` : e.originalName;
}
function bP(e) {
	return e.options.length <= 1 && e.specialization.trim().toLocaleLowerCase() === "any";
}
function xP(e) {
	return e.level === null ? e.name : `${e.name}, tier ${e.level}`;
}
function SP(e) {
	return e.specialization.trim().toLocaleLowerCase() === "any" ? "" : e.options[0] ?? "";
}
//#endregion
//#region src/state/npc-builder/workflows/skill-suggestions.ts
async function CP(e, t) {
	await Promise.all(t.rows.map(async (t) => {
		if (bP(t)) {
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
function wP(e) {
	let t = RD(), { careers: n, settings: r } = ic(t), i = /* @__PURE__ */ M(""), a = /* @__PURE__ */ M(""), o = /* @__PURE__ */ M(!1), s = /* @__PURE__ */ M(null), c = /* @__PURE__ */ M(null), l = G(() => dP(s.value));
	async function u(t) {
		a.value = "";
		try {
			await d(await e.resolveCareerDrop(t));
		} catch (e) {
			a.value = TP(e);
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
		m(fP(e), {
			enableLinkedSkillResolution: !1,
			message: ""
		});
	}
	function m(t, n) {
		let r = _P(t, n);
		if (r.rows.length) {
			c.value = r, CP(e, c.value);
			return;
		}
		b(t, n.message);
	}
	function h() {
		let e = s.value;
		e && (s.value = null, m(pP(e), {
			enableLinkedSkillResolution: !r.value.askForLinkedSkillSpecializations,
			message: mP(e)
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
			for (let n of e.rows) t.setSkillGrantResolution(n.resolutionKey, vP(n));
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
		return hP(s.value, e);
	}
	function C(e, t) {
		let n = gP({
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
		getSkillResolutionLabel: yP,
		handleCareerDrop: u,
		isCareerQueued: x,
		isFindingLowerCareers: o,
		isLowerCareerSelected: S,
		lowerCareerCandidateGroups: l,
		pendingLowerCareerPrompt: s,
		pendingSkillResolutionPrompt: c,
		setLowerCareerSelected: C,
		usesFreeformSkillSpecialization: bP
	};
}
function TP(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderCareerDropWorkflow.ts
function EP(e) {
	return wP(e);
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderInitialData.ts
function DP(e, t) {
	let n = RD(), { selectedBaseActorUuid: r, settings: i } = ic(n), a = /* @__PURE__ */ M(!1), o = /* @__PURE__ */ M(!1), s = /* @__PURE__ */ M([]);
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
			t.value = lP(e);
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
			t.value = lP(e), n.clearBaseDraftData();
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
function OP() {
	return {
		inFlightNames: [],
		successfulNames: []
	};
}
function kP(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) n.kind === "skill" && !n.characteristicKey && !MT(n.name) && t.add(n.name);
	return [...t];
}
function AP(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) n.kind === "talent" && !n.talentMaximumKey && t.add(n.name);
	return [...t];
}
function jP(e, t) {
	let n = new Set([...t.inFlightNames, ...t.successfulNames]);
	return e.filter((e) => {
		let t = PT(e);
		return n.has(t) ? !1 : (n.add(t), !0);
	});
}
function MP(e, t) {
	return {
		...e,
		inFlightNames: FP([...e.inFlightNames, ...t])
	};
}
function NP(e, t) {
	let n = new Set(FP(t));
	return {
		inFlightNames: e.inFlightNames.filter((e) => !n.has(e)),
		successfulNames: FP([...e.successfulNames, ...n])
	};
}
function PP(e, t) {
	let n = new Set(FP(t));
	return {
		...e,
		inFlightNames: e.inFlightNames.filter((e) => !n.has(e))
	};
}
function FP(e) {
	return [...new Set([...e].map(PT).filter(Boolean))];
}
//#endregion
//#region src/state/npc-builder/workflows/metadata-lookups-workflow.ts
function IP(e) {
	let t = RD(), { advancements: n } = ic(t), r = /* @__PURE__ */ M(OP()), i = /* @__PURE__ */ M(OP()), a = /* @__PURE__ */ M(""), o = /* @__PURE__ */ M(""), s = G(() => kP(n.value)), c = G(() => AP(n.value)), l = G(() => [a.value, o.value].filter(Boolean).join(" ")), u = G(() => l.value ? "degraded" : r.value.inFlightNames.length + i.value.inFlightNames.length > 0 ? "loading" : "ready");
	qn(s, (e) => {
		d(e);
	}, { immediate: !0 }), qn(c, (e) => {
		f(e);
	}, { immediate: !0 });
	async function d(n) {
		if (!n.length) {
			a.value = "";
			return;
		}
		let i = jP(n, r.value);
		if (i.length) {
			r.value = MP(r.value, i), a.value = "";
			try {
				let n = await e.listSkillCharacteristics(i);
				r.value = NP(r.value, i), t.hydrateSkillCharacteristics(n);
			} catch (e) {
				r.value = PP(r.value, i), a.value = LP("skill characteristics", e);
			}
		}
	}
	async function f(n) {
		if (!n.length) {
			o.value = "";
			return;
		}
		let r = jP(n, i.value);
		if (r.length) {
			i.value = MP(i.value, r), o.value = "";
			try {
				let n = await e.listTalentMaximums(r);
				i.value = NP(i.value, r), t.hydrateTalentMaximums(n);
			} catch (e) {
				i.value = PP(i.value, r), o.value = LP("Talent maximums", e);
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
function LP(e, t) {
	return `Could not load ${e}.${t instanceof Error ? ` ${t.message}` : ""}`;
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderMetadataLookups.ts
function RP(e) {
	return IP(e);
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp.vue?vue&type=script&setup=true&lang.ts
var zP = ["aria-labelledby"], BP = { class: "dui-card-body" }, VP = ["id"], HP = { class: "dui-card-actions" }, UP = {
	"aria-label": "NPC Builder sections",
	class: "dui-tabs dui-tabs-border",
	role: "tablist"
}, WP = [
	"id",
	"aria-controls",
	"aria-selected",
	"onClick"
], GP = ["disabled"], KP = ["id", "aria-labelledby"], qP = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, JP = {
	key: 1,
	"aria-live": "polite",
	class: "dui-alert dui-alert-info",
	role: "status"
}, YP = {
	key: 2,
	"aria-live": "polite",
	class: "dui-alert dui-alert-warning",
	role: "status"
}, XP = /* @__PURE__ */ F({
	__name: "NpcBuilderApp",
	props: { bridge: {} },
	setup(e) {
		let t = e, { hasMagicAccess: n, selectedSpells: r } = ic(RD()), i = /* @__PURE__ */ M("builder"), a = pr(), o = [
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
		], s = G(() => {
			let e = [...o];
			return (n.value || r.value.length) && e.push({
				id: "spells",
				label: "Spells"
			}), e.push({
				id: "settings",
				label: "Settings"
			}), e;
		}), { buildMessage: c, chooseSkillSpecialization: l, confirmLowerCareerPrompt: u, confirmSkillResolutionPrompt: d, dismissLowerCareerPrompt: f, dismissSkillResolutionPrompt: p, errorMessage: m, getSkillResolutionLabel: h, handleCareerDrop: g, isCareerQueued: _, isFindingLowerCareers: v, isLowerCareerSelected: y, lowerCareerCandidateGroups: b, pendingLowerCareerPrompt: x, pendingSkillResolutionPrompt: S, setLowerCareerSelected: C, usesFreeformSkillSpecialization: w } = EP(t.bridge), { buildNpc: ee, canBuild: T } = uP(t.bridge, i, c, m, v), { isLoadingActors: te, isLoadingBaseDraft: ne, traitDifficultyOptions: re } = DP(t.bridge, m), { metadataLookupError: E, metadataLookupStatus: ie, retryMetadataLookups: ae } = RP(t.bridge);
		return (e, n) => (R(), z("section", {
			"aria-labelledby": `${N(a)}-heading`,
			class: "dui-card dui-card-border dui-card-sm"
		}, [
			V("header", BP, [V("div", null, [n[2] ||= V("span", { class: "dui-badge dui-badge-outline" }, "WFRP4e Customizer", -1), V("h1", {
				id: `${N(a)}-heading`,
				class: "dui-card-title"
			}, "NPC Builder", 8, VP)]), V("div", HP, [V("nav", UP, [(R(!0), z(L, null, I(s.value, (e) => (R(), z("button", {
				id: `${N(a)}-${e.id}-tab`,
				key: e.id,
				"aria-controls": `${N(a)}-panel`,
				"aria-selected": i.value === e.id,
				class: O(["dui-tab", { "dui-tab-active": i.value === e.id }]),
				role: "tab",
				type: "button",
				onClick: (t) => i.value = e.id
			}, k(e.label), 11, WP))), 128))]), V("button", {
				class: "dui-btn dui-btn-primary",
				disabled: !N(T),
				type: "button",
				onClick: n[0] ||= (...e) => N(ee) && N(ee)(...e)
			}, " Build NPC ", 8, GP)])]),
			H(qD, {
				open: N(x) !== null,
				title: "Add Lower-Tier Careers?",
				onClose: N(f)
			}, {
				default: P(() => [N(x) ? (R(), B(HD, {
					key: 0,
					"candidate-groups": N(b),
					"is-career-queued": N(_),
					"is-lower-career-selected": N(y),
					prompt: N(x),
					onAddDroppedOnly: N(f),
					onAddSelected: N(u),
					onLowerCareerSelected: N(C)
				}, null, 8, [
					"candidate-groups",
					"is-career-queued",
					"is-lower-career-selected",
					"prompt",
					"onAddDroppedOnly",
					"onAddSelected",
					"onLowerCareerSelected"
				])) : W("", !0)]),
				_: 1
			}, 8, ["open", "onClose"]),
			H(qD, {
				open: N(S) !== null,
				title: "Resolve Skill Specializations",
				onClose: N(p)
			}, {
				default: P(() => [N(S) ? (R(), B(cP, {
					key: 0,
					"get-skill-resolution-label": N(h),
					prompt: N(S),
					"uses-freeform-skill-specialization": N(w),
					onAddWithoutResolving: N(p),
					onApplySpecializations: N(d),
					onChooseSkillSpecialization: N(l)
				}, null, 8, [
					"get-skill-resolution-label",
					"prompt",
					"uses-freeform-skill-specialization",
					"onAddWithoutResolving",
					"onApplySpecializations",
					"onChooseSkillSpecialization"
				])) : W("", !0)]),
				_: 1
			}, 8, ["open", "onClose"]),
			V("section", {
				id: `${N(a)}-panel`,
				"aria-labelledby": `${N(a)}-${i.value}-tab`,
				class: "dui-card-body",
				role: "tabpanel"
			}, [
				N(m) ? (R(), z("p", qP, k(N(m)), 1)) : N(c) ? (R(), z("p", JP, k(N(c)), 1)) : W("", !0),
				N(ie) === "degraded" ? (R(), z("div", YP, [
					V("span", null, k(N(E)), 1),
					n[3] ||= V("span", null, "Advancement rows remain editable with reduced metadata.", -1),
					V("button", {
						class: "dui-btn dui-btn-sm",
						type: "button",
						onClick: n[1] ||= (...e) => N(ae) && N(ae)(...e)
					}, " Retry Metadata ")
				])) : W("", !0),
				i.value === "settings" ? (R(), B(yM, {
					key: 3,
					bridge: t.bridge
				}, null, 8, ["bridge"])) : i.value === "advancements" ? (R(), B(tk, { key: 4 })) : i.value === "trappings" ? (R(), B(YN, {
					key: 5,
					bridge: t.bridge
				}, null, 8, ["bridge"])) : i.value === "traits" ? (R(), B(yN, {
					key: 6,
					bridge: t.bridge,
					"difficulty-options": N(re)
				}, null, 8, ["bridge", "difficulty-options"])) : i.value === "spells" ? (R(), B(nN, {
					key: 7,
					bridge: t.bridge
				}, null, 8, ["bridge"])) : (R(), B(vj, {
					key: 8,
					bridge: t.bridge,
					"is-loading-actors": N(te),
					"is-loading-base-draft": N(ne),
					onCareerDrop: N(g)
				}, null, 8, [
					"bridge",
					"is-loading-actors",
					"is-loading-base-draft",
					"onCareerDrop"
				]))
			], 8, KP)
		], 8, zP));
	}
});
//#endregion
//#region src/functions/npc-builder/extract-career-grants.ts
function ZP(e) {
	return {
		characteristics: QP(e),
		skills: $P(e),
		talents: tF(e, [["talents", "value"], ["talents"]]),
		trappings: tF(e, [["trappings", "value"], ["trappings"]])
	};
}
function QP(e) {
	let t = tF(e, [["characteristics", "value"], ["characteristics"]]);
	if (t.length) return t.map(eF);
	let n = X(e, ["characteristics"]);
	if (!Y(n)) return [];
	let r = [];
	for (let [e, t] of Object.entries(n)) t && r.push(eF(e));
	return rF(r);
}
function $P(e) {
	return tF(e, [["skills", "value"], ["skills"]], { preserveDuplicates: !0 });
}
function eF(e) {
	let t = e.trim().toLocaleLowerCase();
	if (Dc(t)) return Tc[t];
	let n = Ec[t];
	return n ? Tc[n] : e.trim();
}
function tF(e, t, n = {}) {
	for (let r of t) {
		let t = El(X(e, r));
		if (t.length) return n.preserveDuplicates ? nF(t) : rF(t);
	}
	return [];
}
function nF(e) {
	return e.map((e) => e.trim()).filter(Boolean);
}
function rF(e) {
	return [...new Set(nF(e))].sort((e, t) => e.localeCompare(t));
}
//#endregion
//#region src/module/wfrp4e/career-summary.ts
function iF(e) {
	return {
		careerGroup: aF(e),
		grants: ZP(e.system),
		img: e.img ?? "",
		level: oF(e),
		name: e.name,
		uuid: e.uuid
	};
}
function aF(e) {
	return Z(e.system, ["careergroup", "value"]);
}
function oF(e) {
	let t = X(e.system, ["level", "value"]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
//#endregion
//#region src/module/wfrp4e/career-index.ts
var sF = [
	"name",
	"type",
	"img",
	"system.careergroup.value",
	"system.characteristics",
	"system.level.value",
	"system.skills",
	"system.talents",
	"system.trappings"
], cF = /* @__PURE__ */ new Map(), lF = "idle", uF = null;
function dF() {
	return uF || (lF = "indexing", cF.clear(), uF = pF().then(() => {
		lF = "ready";
	}).catch((e) => {
		lF = "error", t("wfrp4e-customizer-apps | Career indexing failed.", e);
	}), uF);
}
async function fF(e) {
	return lF === "idle" && dF(), !e.careerGroup || e.level === null ? [] : [...cF.values()].filter((t) => vF(t, e)).sort(bF);
}
async function pF() {
	mF(), await nw();
	for (let e of game.packs ?? []) {
		if (!$C(e) || !e.getIndex) continue;
		let t = await e.getIndex({ fields: sF });
		for (let n of tw(t)) {
			let t = hF(e, n);
			t && cF.set(t.uuid, t);
		}
		await nw();
	}
}
function mF() {
	for (let e of game.items?.contents ?? []) e.type === "career" && cF.set(e.uuid, iF(e));
}
function hF(e, t) {
	let n = QC(e, t);
	if (t.type !== "career" || !t.name || !n) return null;
	let r = X(t, ["system"]);
	return {
		careerGroup: gF(t),
		grants: ZP(r),
		img: t.img ?? "",
		level: _F(t),
		name: t.name,
		uuid: n
	};
}
function gF(e) {
	let t = X(e, [
		"system",
		"careergroup",
		"value"
	]);
	return typeof t == "string" ? t.trim() : "";
}
function _F(e) {
	let t = X(e, [
		"system",
		"level",
		"value"
	]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
function vF(e, t) {
	return e.uuid !== t.uuid && e.level !== null && t.level !== null && e.level < t.level && yF(e.careerGroup) === yF(t.careerGroup);
}
function yF(e) {
	return e.trim().toLocaleLowerCase();
}
function bF(e, t) {
	let n = e.level ?? 0, r = t.level ?? 0;
	return n === r ? e.name.localeCompare(t.name) : n - r;
}
//#endregion
//#region src/module/wfrp4e/skill-specializations.ts
var xF = [
	"name",
	"type",
	"system.characteristic.value"
], SF = /* @__PURE__ */ new Map(), CF = /* @__PURE__ */ new Map(), wF = /* @__PURE__ */ new Map(), TF = "idle", EF = null;
async function DF(e) {
	let t = PT(e);
	return t ? (TF === "idle" && kF(), EF && await EF, [...SF.get(t) ?? []].sort((e, t) => e.localeCompare(t))) : [];
}
async function OF(e) {
	return TF === "idle" && kF(), EF && await EF, e.flatMap((e) => {
		let t = FF(e);
		return t ? [{
			...t,
			skillName: e
		}] : [];
	});
}
function kF() {
	return EF || (TF = "indexing", SF.clear(), CF.clear(), wF.clear(), EF = AF().then(() => {
		TF = "ready";
	}).catch((e) => {
		TF = "error", t("wfrp4e-customizer-apps | Skill specialization indexing failed.", e);
	}), EF);
}
async function AF() {
	IF(), await nw();
	for (let e of game.packs ?? []) {
		if (!$C(e) || !e.getIndex) continue;
		let t = await e.getIndex({ fields: xF });
		for (let e of tw(t)) MF(e);
		await nw();
	}
}
function jF(e) {
	if (e.type !== "skill") return;
	NF(e);
	let t = jT(e.name);
	if (!t) return;
	let n = PT(t.baseName), r = SF.get(n) ?? /* @__PURE__ */ new Set();
	r.add(t.specialization), SF.set(n, r);
}
function MF(e) {
	if (e.type !== "skill" || !e.name) return;
	PF(e);
	let t = jT(e.name);
	if (!t) return;
	let n = PT(t.baseName), r = SF.get(n) ?? /* @__PURE__ */ new Set();
	r.add(t.specialization), SF.set(n, r);
}
function NF(e) {
	let t = Z(e.system, ["characteristic", "value"]);
	if (!Dc(t)) return;
	let n = {
		characteristicKey: t,
		characteristicName: Tc[t],
		skillName: e.name
	}, r = PT(e.name), i = PT(jT(e.name)?.baseName ?? e.name);
	CF.set(r, n), wF.has(i) || wF.set(i, n);
}
function PF(e) {
	let t = Z(e, [
		"system",
		"characteristic",
		"value"
	]);
	if (!Dc(t) || !e.name) return;
	let n = {
		characteristicKey: t,
		characteristicName: Tc[t],
		skillName: e.name
	}, r = PT(e.name), i = PT(jT(e.name)?.baseName ?? e.name);
	CF.set(r, n), wF.has(i) || wF.set(i, n);
}
function FF(e) {
	let t = PT(e), n = PT(jT(e)?.baseName ?? e);
	return CF.get(t) ?? wF.get(n) ?? null;
}
function IF() {
	for (let e of game.items?.contents ?? []) jF(e);
}
//#endregion
//#region src/module/foundry/item-sources.ts
function LF(e, t) {
	return {
		img: "systems/wfrp4e/icons/blank.png",
		name: e,
		system: {},
		type: t
	};
}
function RF(e, t, n) {
	let r = e ? e.toObject() : LF(t, n);
	return delete r._id, r;
}
function zF(e, t, n) {
	return e.items?.contents.find((e) => e.type === n && HF(e.name, t)) ?? null;
}
function BF(e, t, n) {
	return e.items?.contents.find((e) => t && e.uuid === t ? !0 : HF(e.name, n)) ?? null;
}
function VF(e, t) {
	return game.items?.contents.find((n) => t.includes(n.type) && HF(n.name, e)) ?? null;
}
function HF(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/wfrp4e/item-lookup.ts
async function UF(e, t) {
	return await game.wfrp4e?.utility?.findItem?.(e, t) || VF(e, t);
}
//#endregion
//#region src/module/wfrp4e/talent-maximums.ts
async function WF(e) {
	let t = [];
	for (let n of GF(e)) {
		let e = await UF(n, ["talent"]);
		e && t.push({
			maximumFormula: Z(e.system, ["max", "formula"]),
			maximumKey: Z(e.system, ["max", "value"]),
			talentName: n
		});
	}
	return t;
}
function GF(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.trim().toLocaleLowerCase();
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
//#endregion
//#region src/functions/npc-builder/normalize-npc-builder-settings.ts
var KF = {
	...LE(),
	allowBaseActorCharacteristics: !0,
	allowBaseActorSkills: !0,
	allowBaseActorTalents: !0
};
function qF(e) {
	let t = LE();
	return YF(e) ? {
		allowBaseActorCharacteristics: XF(e.allowBaseActorCharacteristics, KF.allowBaseActorCharacteristics),
		allowBaseActorSkills: XF(e.allowBaseActorSkills, KF.allowBaseActorSkills),
		allowBaseActorTalents: XF(e.allowBaseActorTalents, KF.allowBaseActorTalents),
		allowBaseActorTraits: XF(e.allowBaseActorTraits, KF.allowBaseActorTraits),
		allowBaseActorTrappings: XF(e.allowBaseActorTrappings, KF.allowBaseActorTrappings),
		askForLinkedSkillSpecializations: XF(e.askForLinkedSkillSpecializations, KF.askForLinkedSkillSpecializations),
		autoSelectGrantedSpells: XF(e.autoSelectGrantedSpells, KF.autoSelectGrantedSpells),
		baseActorFolderUuid: ZF(e.baseActorFolderUuid, KF.baseActorFolderUuid),
		includeSpeciesInName: XF(e.includeSpeciesInName, KF.includeSpeciesInName),
		lowerCareerMode: JF(e.lowerCareerMode) ? e.lowerCareerMode : KF.lowerCareerMode,
		outputActorFolderUuid: ZF(e.outputActorFolderUuid, KF.outputActorFolderUuid),
		quickTraitFolderUuid: ZF(e.quickTraitFolderUuid, KF.quickTraitFolderUuid),
		searchCompendiumPortraitAssets: XF(e.searchCompendiumPortraitAssets, KF.searchCompendiumPortraitAssets),
		searchFoundryPortraitAssets: XF(e.searchFoundryPortraitAssets, KF.searchFoundryPortraitAssets),
		searchWebPortraitAssets: XF(e.searchWebPortraitAssets, KF.searchWebPortraitAssets)
	} : t;
}
function JF(e) {
	return e === "auto-add-all" || e === "never" || e === "prompt";
}
function YF(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function XF(e, t) {
	return typeof e == "boolean" ? e : t;
}
function ZF(e, t) {
	return typeof e == "string" ? e : t;
}
//#endregion
//#region src/module/apps/npc-builder/settings.ts
var QF = GS({
	defaultValue: LE(),
	key: "npcBuilderSettings",
	name: "NPC Builder Settings",
	normalize: qF
});
function $F() {
	KS(QF);
}
function eI() {
	return qS(QF);
}
async function tI(e) {
	return await JS(QF, e);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/advancements.ts
async function nI(e, t) {
	let n = {}, r = [], i = [];
	for (let a of t) {
		let t = Math.floor(a.current);
		if (t === 0) continue;
		let o = a.baseAdvances + t;
		if (a.kind === "characteristic") {
			cI(n, a, o);
			continue;
		}
		let s = zF(e, a.name, a.kind);
		if (s) {
			r.push({
				_id: s.id,
				"system.advances.value": o
			});
			continue;
		}
		let c = RF(await UF(a.name, [a.kind]), a.name, a.kind);
		c.type = a.kind, Dl(c, [
			"system",
			"advances",
			"value"
		], o), i.push(c);
	}
	Object.keys(n).length && await e.update(n), r.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", r), i.length && await e.createEmbeddedDocuments("Item", i);
}
function rI(e) {
	let t = [];
	for (let [n, r] of Object.entries(Tc)) {
		let i = Cl(e.system, [[
			"characteristics",
			n,
			"advances",
			"value"
		], [
			"characteristics",
			n,
			"advances"
		]]), a = Cl(e.system, [
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
function iI(e, t) {
	return e.items?.contents.filter((e) => e.type === t).map((n) => aI(e, n, t)) ?? [];
}
function aI(e, t, n) {
	let r = Cl(t.system, [["advances", "value"], ["advances"]]);
	if (n === "talent") return {
		baseAdvances: r,
		current: r,
		kind: n,
		name: t.name,
		talentMaximumFormula: Z(t.system, ["max", "formula"]),
		talentMaximumKey: Z(t.system, ["max", "value"])
	};
	let i = oI(t), a = i ? sI(e, i) : 0, o = wl(t.system, [["total", "value"], ["total"]]), s = o !== null && i ? Math.max(0, o - a) : 0, c = Math.max(r, s), l = {
		baseAdvances: c,
		current: i ? a + c : c,
		kind: n,
		name: t.name
	};
	return i && (l.characteristicKey = i, l.characteristicName = Tc[i]), l;
}
function oI(e) {
	let t = Z(e.system, ["characteristic", "value"]);
	return Dc(t) ? t : void 0;
}
function sI(e, t) {
	return Cl(e.system, [
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
function cI(e, t, n) {
	let r = Ec[t.name.trim().toLocaleLowerCase()];
	r && (e[`system.characteristics.${r}.advances`] = n);
}
//#endregion
//#region src/module/foundry/embedded-items.ts
function lI() {
	return {
		creates: [],
		deletes: [],
		updates: []
	};
}
async function uI(e, t) {
	t.deletes.length && e.deleteEmbeddedDocuments && await e.deleteEmbeddedDocuments("Item", t.deletes), t.updates.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", t.updates), t.creates.length && await e.createEmbeddedDocuments("Item", t.creates);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/config.ts
function dI(e, t) {
	Dl(e, [
		"system",
		"specification",
		"value"
	], t.specification), t.rollable && !t.damage && Dl(e, [
		"system",
		"rollable",
		"defaultDifficulty"
	], t.defaultDifficulty), t.damage && t.dice && Dl(e, [
		"system",
		"rollable",
		"dice"
	], t.dice);
}
function fI(e, t) {
	return {
		_id: e,
		"system.specification.value": t.specification,
		...t.rollable && !t.damage ? { "system.rollable.defaultDifficulty": t.defaultDifficulty } : {},
		...t.damage && t.dice ? { "system.rollable.dice": t.dice } : {}
	};
}
function pI(e) {
	return {
		...vT(),
		attackType: _I(e.system, ["rollable", "attackType"]) || "melee",
		bonusCharacteristic: _I(e.system, ["rollable", "bonusCharacteristic"]),
		damage: Tl(e.system, [["rollable", "damage"]]),
		defaultDifficulty: _I(e.system, ["rollable", "defaultDifficulty"]) || "challenging",
		dice: _I(e.system, ["rollable", "dice"]),
		rollable: Tl(e.system, [["rollable", "value"]]),
		skill: _I(e.system, ["rollable", "skill"]),
		sl: Tl(e.system, [["rollable", "SL"]], !0),
		specification: _I(e.system, ["specification", "value"])
	};
}
function mI(e) {
	return gI(e.system);
}
function hI(e) {
	return gI(e.system);
}
function gI(e) {
	return Tl(e, [["disabled"], ["disabled", "value"]]);
}
function _I(e, t) {
	let n = X(e, t);
	return typeof n == "string" ? n.trim() : typeof n == "number" ? String(n) : "";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/apply.ts
async function vI(e, t) {
	let n = lI();
	for (let r of t) {
		let t = r.source === "base" ? BF(e, r.sourceUuid, r.name) : zF(e, r.name, "trait");
		if (r.ignored) {
			t && n.deletes.push(t.id);
			continue;
		}
		if (t) {
			n.updates.push(fI(t.id, r.config));
			continue;
		}
		let i = RF(r.sourceUuid ? await yI(r.sourceUuid) : await UF(r.name, ["trait"]), r.name, "trait");
		i.type = "trait", Dl(i, ["system", "disabled"], !1), dI(i, r.config), n.creates.push(i);
	}
	await uI(e, n);
}
async function yI(e) {
	let t = await fromUuid(e);
	return sC(t) ? t : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/actor-traits.ts
function bI(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && !mI(e)).map(CI) ?? [];
}
function xI(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && mI(e)).map(CI) ?? [];
}
function SI(e) {
	Array.isArray(e.items) && (e.items = e.items.filter((e) => {
		if (typeof e != "object" || !e) return !0;
		let t = e;
		return t.type !== "trait" || !hI(t);
	}));
}
function CI(e) {
	return {
		config: pI(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/difficulty-options.ts
var wI = [
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
async function TI() {
	let e = X(game.wfrp4e?.config, ["difficultyLabels"]);
	if (!Y(e)) return wI;
	let t = Object.entries(e).filter((e) => {
		let [t, n] = e;
		return !!t.trim() && typeof n == "string";
	}).map(([e, t]) => ({
		label: t,
		value: e
	}));
	return t.length ? t : wI;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/drops.ts
async function EI(e) {
	let t = dC(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Trait item here.");
	let n = uC(await fromUuid(t.uuid), "trait", "Drop a Foundry Trait item here.");
	return {
		config: pI(n),
		ignored: !1,
		key: `custom:${n.uuid}`,
		name: n.name,
		source: "custom",
		sourceUuid: n.uuid
	};
}
//#endregion
//#region src/functions/npc-builder/recommended-quick-traits.ts
var DI = [
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
async function OI(e) {
	return FI(await PI(e, "Actor"));
}
async function kI(e) {
	return FI(await PI(e, "Item"));
}
function AI() {
	return game.folders.contents.filter((e) => e.type === "Actor").map(FI).sort((e, t) => e.name.localeCompare(t.name));
}
function jI() {
	return game.folders.contents.filter((e) => e.type === "Item").map(FI).sort((e, t) => e.name.localeCompare(t.name));
}
function MI(e) {
	return e ? game.folders.contents.find((t) => t.uuid === e) ?? null : null;
}
function NI(e) {
	let t = MI(e);
	return t?.type === "Item" ? t : null;
}
async function PI(e, t) {
	let n = e.trim();
	if (!n) throw Error("Enter a folder name first.");
	let r = game.folders.contents.find((e) => e.type === t && II(e.name, n));
	if (r) return r;
	let i = await Folder.create({
		name: n,
		type: t
	});
	if (!i) throw Error("Foundry did not create the folder.");
	return i;
}
function FI(e) {
	return {
		name: e.name,
		uuid: e.uuid
	};
}
function II(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/quick-traits.ts
async function LI(e) {
	let t = NI(e.quickTraitFolderUuid);
	if (!t) throw Error("Choose a Quick Traits item folder before importing traits.");
	let n = new Set(BI(e).map((e) => e.name.trim().toLocaleLowerCase()));
	for (let e of DI) {
		if (n.has(e.trim().toLocaleLowerCase())) continue;
		let r = RF(await UF(e, ["trait"]), e, "trait");
		r.folder = t.id, r.type = "trait", await Item.create(r);
	}
	return ui.notifications?.info("Imported recommended quick traits."), await RI(e);
}
async function RI(e) {
	return BI(e).map(VI).sort((e, t) => e.name.localeCompare(t.name));
}
function zI(e, t) {
	return t.quickTraitFolderUuid ? e.folder?.uuid === t.quickTraitFolderUuid : !1;
}
function BI(e) {
	return game.items?.contents.filter((t) => t.type === "trait" && zI(t, e)) ?? [];
}
function VI(e) {
	return {
		config: pI(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/trappings.ts
var HI = [
	"ammunition",
	"armour",
	"container",
	"money",
	"trapping",
	"weapon"
];
async function UI(e, t) {
	let n = lI();
	for (let r of t) {
		let t = r.source === "base" ? BF(e, r.sourceUuid, r.name) : null;
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
		let i = await YI(r), a = r.resolution.selectedItemType || r.itemType || "trapping", o = RF(i, r.resolution.selectedName || r.name, a);
		o.type = a || o.type || "trapping", Dl(o, [
			"system",
			"quantity",
			"value"
		], r.quantity), n.creates.push(o);
	}
	await uI(e, n);
}
async function WI(e) {
	return bD(e, await XI());
}
async function GI(e) {
	let t = dC(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Item here.");
	let n = lC(await fromUuid(t.uuid), "Drop a Foundry Item here.");
	return {
		ignored: !1,
		itemType: n.type,
		key: `custom:${n.uuid}`,
		name: n.name,
		quantity: qI(n),
		resolution: vD({
			itemType: n.type,
			name: n.name,
			uuid: n.uuid
		}),
		source: "custom",
		sourceUuid: n.uuid
	};
}
function KI(e) {
	let t = JI();
	return e.items?.contents.filter((e) => t.includes(e.type)).map((e) => ({
		itemType: e.type,
		name: e.name,
		quantity: qI(e),
		uuid: e.uuid
	})) ?? [];
}
function qI(e) {
	return Cl(e.system, [["quantity", "value"], ["quantity"]]) || 1;
}
function JI() {
	let e = Sl(game.wfrp4e?.config, ["trappingItems"]);
	return e.length ? e : HI;
}
async function YI(e) {
	if (e.sourceUuid) {
		let t = await fromUuid(e.sourceUuid);
		return sC(t) ? t : null;
	}
	if (e.resolution.selectedCandidateUuid) {
		let t = await fromUuid(e.resolution.selectedCandidateUuid);
		return sC(t) ? t : null;
	}
	return e.resolution.status === "fallback" ? null : await UF(e.resolution.selectedName || e.name, JI());
}
async function XI() {
	let e = [], t = JI();
	for (let n of game.items?.contents ?? []) t.includes(n.type) && e.push(QI(n, "World"));
	for (let n of game.packs ?? []) {
		if (!$C(n)) continue;
		let r = await ZI(n, t);
		if (r.length) {
			e.push(...r);
			continue;
		}
		if (!n.getDocuments) continue;
		let i = await n.getDocuments();
		for (let r of i) sC(r) && t.includes(r.type) && e.push(QI(r, n.title ?? "Compendium"));
	}
	return e;
}
async function ZI(e, t) {
	return e.getIndex ? tw(await e.getIndex({ fields: ["name", "type"] })).filter((n) => !!(n.name && n.type && QC(e, n) && t.includes(n.type))).map((t) => ({
		itemType: t.type ?? "trapping",
		name: t.name ?? "",
		sourceLabel: e.title ?? "Compendium",
		uuid: QC(e, t)
	})) : [];
}
function QI(e, t) {
	return {
		itemType: e.type,
		name: e.name,
		sourceLabel: t,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/actors.ts
function $I(e) {
	return game.actors.contents.filter((t) => aL(t, e)).map(nL);
}
async function eL(e) {
	let t = cC(await fromUuid(e));
	return {
		advancements: [
			...rI(t),
			...iI(t, "skill"),
			...iI(t, "talent")
		],
		optionalTraits: xI(t),
		traits: bI(t),
		trappings: KI(t)
	};
}
async function tL(e) {
	let t = dC(e);
	if (t.type !== "Actor") throw Error("Drop a Foundry Actor here.");
	let n = null;
	return t.uuid ? n = await fromUuid(t.uuid) : t.id && (n = game.actors.get(t.id)), nL(cC(n));
}
function nL(e) {
	return {
		img: e.img ?? "",
		name: e.name,
		prototypeTokenImg: iL(e),
		species: rL(e),
		type: e.type,
		uuid: e.uuid
	};
}
function rL(e) {
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
function iL(e) {
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
function aL(e, t) {
	return t.baseActorFolderUuid ? e.folder?.uuid === t.baseActorFolderUuid : !0;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/careers.ts
async function oL(e) {
	let t = dC(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a WFRP Career item here.");
	return iF(uC(await fromUuid(t.uuid), "career", "Drop a WFRP Career item here."));
}
async function sL(e) {
	let t = [];
	for (let n of e) {
		let e = uC(await fromUuid(n.uuid), "career", `Career “${n.name}” is no longer available.`);
		for (let r = 0; r < ET(n.quantity); r += 1) {
			let n = e.toObject();
			delete n._id, Dl(n, [
				"system",
				"complete",
				"value"
			], !0), Dl(n, [
				"system",
				"current",
				"value"
			], !1), t.push(n);
		}
	}
	return t;
}
async function cL(e, t) {
	t.length && await e.createEmbeddedDocuments("Item", t);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/constants.ts
var lL = "spell", uL = new Set(VE), dL = new Set(HE);
async function fL() {
	return pL().map((e) => ({
		category: qE(e.key),
		key: e.key,
		label: e.name,
		value: e.name,
		wind: e.wind
	})).sort((e, t) => e.category === t.category ? e.label.localeCompare(t.label) : e.category.localeCompare(t.category));
}
function pL() {
	let e = X(game.wfrp4e?.config, ["magicLores"]), t = X(game.wfrp4e?.config, ["magicWind"]), n = [];
	if (!Y(e)) return [_L()];
	for (let [r, i] of Object.entries(e)) {
		let e = wL(i) || r, a = CL(t, r);
		n.push({
			key: r,
			matchTerms: SL(r, e, a),
			name: e,
			wind: a
		});
	}
	return n.some((e) => e.key === "petty") || n.push(_L()), n;
}
function mL(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) {
		if (r.isAmbiguous) continue;
		if (r.kind === "petty-magic") {
			let e = xL("petty magic", t);
			e && n.set(e.key, e);
			continue;
		}
		let e = xL(r.rawLore, t);
		e && n.set(e.key, e);
	}
	return [...n.values()];
}
function hL(e, t) {
	let n = [...gL(e.system), bL(e.name)].filter(Boolean);
	for (let e of n) {
		let n = yL(e, t);
		if (n) return n;
		let r = xL(e, t);
		if (r) return r;
	}
	return null;
}
function gL(e) {
	return [
		...El(X(e, ["lore", "value"])),
		...El(X(e, ["lore"])),
		...El(X(e, ["magicLore", "value"])),
		...El(X(e, ["magicLore"])),
		...El(X(e, ["category", "value"])),
		...El(X(e, [
			"system",
			"lore",
			"value"
		])),
		...El(X(e, ["system", "lore"])),
		...El(X(e, ["system.lore.value"])),
		...El(X(e, ["system.lore"]))
	];
}
function _L() {
	return {
		key: "petty",
		matchTerms: ["petty", "petty magic"],
		name: "Petty Magic",
		wind: ""
	};
}
function vL(e) {
	let t = e.trim() || "Unknown Lore";
	return {
		key: WE(t) || "unknown",
		matchTerms: [t],
		name: t,
		wind: ""
	};
}
function yL(e, t) {
	let n = WE(e);
	return n === "lore" ? t.find((e) => e.key !== "petty") ?? null : n === "the eight winds" || n === "eight winds" ? t.find((e) => uL.has(e.key)) ?? null : n === "dark lore" ? t.find((e) => dL.has(e.key)) ?? null : null;
}
function bL(e) {
	return /\(([^)]+)\)\s*$/.exec(e)?.[1]?.trim() ?? "";
}
function xL(e, t) {
	let n = WE(e);
	return n ? t.find((e) => e.matchTerms.some((e) => WE(e) === n)) ?? null : null;
}
function SL(e, t, n) {
	let r = /* @__PURE__ */ new Set(), i = WE(e), a = WE(t);
	for (let i of [
		e,
		t,
		n
	]) i.trim() && r.add(i.trim());
	return (i === "petty" || a === "petty") && r.add("Petty Magic"), (i === "shadow" || a === "shadow") && r.add("Shadows"), t && !/^lore of /i.test(t) && r.add(`Lore of ${t}`), [...r];
}
function CL(e, t) {
	return Y(e) ? wL(e[t]) : "";
}
function wL(e) {
	return typeof e == "string" ? e.trim() : Y(e) ? Z(e, ["name"]) || Z(e, ["label"]) || Z(e, ["value"]) : "";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/debug.ts
var TL = "[WFRP Customizer Apps][Spell Lookup]";
function EL(t, n) {
	if (n) {
		e(`${TL} ${t}`, n);
		return;
	}
	e(`${TL} ${t}`);
}
function DL(e, n) {
	t(`${TL} ${e}`, n);
}
function OL(e) {
	return [
		e.title ?? "",
		e.collection ?? "",
		Z(e, ["metadata", "type"]),
		Z(e, ["metadata", "documentName"]),
		e.documentName
	].filter(Boolean).join(" | ");
}
function kL(e) {
	return {
		loreTerms: gL(e.system),
		name: e.name,
		sourceLabel: e.sourceLabel,
		uuid: e.uuid
	};
}
function AL(e) {
	return typeof e == "string" ? {
		kind: "uuid-string",
		value: e
	} : Y(e) ? {
		documentName: Z(e, ["documentName"]),
		hasSystem: Y(X(e, ["system"])),
		loreTerms: gL(X(e, ["system"])),
		name: Z(e, ["name"]),
		type: Z(e, ["type"]),
		uuid: Z(e, ["uuid"])
	} : { kind: typeof e };
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/spell-input-conversion.ts
function jL(e, t) {
	return {
		img: e.img ?? "",
		name: e.name,
		sourceLabel: t,
		system: e.system,
		uuid: e.uuid
	};
}
function ML(e) {
	return /^item\./i.test(e.uuid) ? "World" : NL(e.uuid, "WFRP Item Lookup");
}
function NL(e, t) {
	let n = /^Compendium\.([^.]+\.[^.]+)\./.exec(e)?.[1];
	return n ? [...game.packs ?? []].find((e) => e.collection === n)?.title ?? n : t;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/compendium-spell-inputs.ts
async function PL(e) {
	if (EL("Compendium index scan start", { pack: OL(e) }), !e.getIndex) return EL("Compendium has no index; loading documents", { pack: OL(e) }), await LL(e);
	let t = tw(await e.getIndex({ fields: [
		"name",
		"type",
		"img",
		"system.lore.value"
	] }));
	if (EL("Compendium index loaded", {
		entries: t.length,
		pack: OL(e),
		samples: t.slice(0, 5).map((t) => ({
			hasLoreTerms: gL(t).length > 0,
			name: t.name,
			type: t.type,
			uuid: QC(e, t)
		}))
	}), !t.length) return EL("Compendium index empty; loading documents", { pack: OL(e) }), await LL(e);
	let n = t.filter(IL);
	EL("Compendium index spell candidates", {
		pack: OL(e),
		spellEntries: n.length
	});
	let r = n.filter((e) => e.name).map((t) => zL(e, t));
	return r.length || !RL(e) ? r : await LL(e);
}
function FL(e) {
	return $C(e);
}
function IL(e) {
	return e.type === "spell" ? !0 : !!(e.name && (gL(e).length || bL(e.name)));
}
async function LL(e) {
	if (!e.getDocuments) return EL("Compendium has no document loader", { pack: OL(e) }), [];
	EL("Compendium document load start", { pack: OL(e) });
	let t = await e.getDocuments(), n = t.filter((e) => sC(e) && e.type === "spell");
	return EL("Compendium document load complete", {
		documents: t.length,
		pack: OL(e),
		spellDocuments: n.length,
		spellSamples: n.slice(0, 5).map((e) => ({
			loreTerms: gL(e.system),
			name: e.name,
			uuid: e.uuid
		}))
	}), n.map((t) => jL(t, e.title ?? "Compendium"));
}
function RL(e) {
	return e.collection === "wfrp4e-core.items" || e.collection === "wfrp4e-wom.items";
}
function zL(e, t) {
	return {
		img: t.img ?? t.thumb ?? "",
		name: t.name ?? "",
		sourceLabel: e.title ?? "Compendium",
		system: t,
		uuid: QC(e, t)
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/warhammer-spell-inputs.ts
async function BL() {
	let e = HL();
	if (!e) return EL("WFRP helper unavailable"), [];
	try {
		let t = await e.findAllItems(lL, "Loading Spells", !0, ["system.lore.value"]);
		return EL("WFRP helper raw result", {
			count: t.length,
			samples: t.slice(0, 10).map(AL)
		}), (await Promise.all(t.map((e) => VL(e)))).filter((e) => e !== null);
	} catch (e) {
		return DL("WFRP helper lookup failed.", e), [];
	}
}
async function VL(e) {
	if (typeof e == "string") {
		let t = await fromUuid(e);
		return sC(t) && t.type === "spell" ? jL(t, ML(t)) : null;
	}
	if (sC(e)) return e.type === "spell" ? jL(e, ML(e)) : null;
	if (Z(e, ["type"]) !== "spell") return null;
	let t = Z(e, ["name"]);
	return t ? {
		img: Z(e, ["img"]) || Z(e, ["thumb"]),
		name: t,
		sourceLabel: NL(Z(e, ["uuid"]), "WFRP Item Lookup"),
		system: X(e, ["system"]),
		uuid: Z(e, ["uuid"])
	} : null;
}
function HL() {
	let e = X(globalThis, [
		"warhammer",
		"utility",
		"findAllItems"
	]);
	return typeof e == "function" ? { findAllItems: e } : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/spell-resolution-inputs.ts
async function UL() {
	let e = [], n = [...game.packs ?? []];
	EL("Candidate lookup start", {
		itemPacks: n.filter(FL).length,
		totalPacks: n.length,
		warhammerUtilityAvailable: !!KL(),
		worldItems: game.items?.contents.length ?? 0
	});
	let r = await BL();
	EL("WFRP helper lookup complete", {
		utilityInputs: r.length,
		utilitySamples: r.slice(0, 10).map(kL)
	}), e.push(...r), e.push(...WL()), EL("World spell scan complete", { worldSpellCount: e.filter((e) => e.sourceLabel === "World").length });
	for (let r of n) if (FL(r)) try {
		let t = await PL(r);
		e.push(...t), EL("Compendium spell scan complete", {
			inputCount: t.length,
			pack: OL(r),
			samples: t.slice(0, 5).map(kL)
		});
	} catch (e) {
		t(`wfrp4e-customizer-apps | Spell lookup skipped compendium "${r.title ?? r.collection ?? "unknown"}".`, e);
	}
	let i = GL(e);
	return EL("Candidate lookup complete", {
		rawInputCount: e.length,
		uniqueInputCount: i.length
	}), i;
}
function WL() {
	let e = [];
	for (let t of game.items?.contents ?? []) t.type === "spell" && e.push(jL(t, "World"));
	return e;
}
function GL(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.uuid || n.name.trim().toLocaleLowerCase();
		t.has(e) || t.set(e, n);
	}
	return [...t.values()];
}
function KL() {
	return X(globalThis, [
		"warhammer",
		"utility",
		"findAllItems"
	]);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/index.ts
async function qL(e, t) {
	let n = [];
	for (let r of t) {
		if (!r.selected || zF(e, r.name, "spell")) continue;
		let t = RF(r.sourceUuid ? await XL(r.sourceUuid) : null, r.name, lL);
		t.type = lL, n.push(t);
	}
	n.length && await e.createEmbeddedDocuments("Item", n);
}
async function JL(e) {
	let t = mL(e, pL());
	if (EL("Grant resolution start", {
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
	let n = await UL(), r = /* @__PURE__ */ new Map(), i = [];
	for (let e of n) {
		let n = hL(e, t);
		if (!n) {
			i.length < 20 && i.push({
				loreTerms: gL(e.system),
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
	return EL("Grant resolution complete", {
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
async function YL(e) {
	let t = dC(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Spell item here.");
	let n = uC(await fromUuid(t.uuid), lL, "Drop a Foundry Spell item here."), r = hL(jL(n, "Dropped"), [...pL(), _L()]) ?? vL(gL(n.system)[0] ?? "");
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
async function XL(e) {
	let t = await fromUuid(e);
	return sC(t) && t.type === "spell" ? t : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/build-npc.ts
async function ZL(e) {
	let t = await sL(e.careers), n = await $L(e);
	if (!n) throw Error("Foundry did not create the NPC Actor.");
	let r = eR(e), i = e.careers.at(-1), a = {
		name: r,
		"prototypeToken.name": r
	}, o = Z(n.system, [
		"details",
		"gmnotes",
		"value"
	]), s = QL(o);
	s !== o && (a["system.details.gmnotes.value"] = s);
	let c = e.portraitPath || i?.img || "";
	return c && (a.img = c, a["prototypeToken.texture.src"] = c), await n.update(a), await cL(n, t), await nI(n, e.advancements), await vI(n, e.traits), await UI(n, e.trappings), await qL(n, e.spells), n.sheet?.render(!0), ui.notifications?.info(`Created NPC "${r}".`), {
		name: r,
		uuid: n.uuid
	};
}
function QL(e) {
	return e.replaceAll(/(?:<hr\s*\/?>)?<section data-wfrp-customizer-npc-xp="true">[\S\s]*?<\/section>/g, "").trim();
}
async function $L(e) {
	let t = cC(await fromUuid(e.baseActorUuid)).toObject(), n = MI(e.settings.outputActorFolderUuid);
	return delete t._id, delete t.folder, t.type = "npc", SI(t), n && (t.folder = n.id), await Actor.create(t);
}
function eR(e) {
	if (!e.settings.includeSpeciesInName) return e.actorName;
	let t = game.actors.contents.find((t) => t.uuid === e.baseActorUuid), n = t ? rL(t) : "";
	return !n || e.actorName.toLocaleLowerCase().includes(n.toLocaleLowerCase()) ? e.actorName : `${n} ${e.actorName}`;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/candidate-utils.ts
function tR(e, t) {
	let n = t.img.trim().toLocaleLowerCase();
	!n || e.seenPaths.has(n) || (e.seenPaths.add(n), e.candidates.push(t));
}
function nR(e, t) {
	let n = t.imagePaths.filter(({ path: e }) => !!e);
	if (lR(t.name, n, e.searchTerms)) for (let r of n) tR(e, {
		img: r.path,
		key: `foundry-asset:${t.sourceKey}:${r.label}`,
		label: `${t.name || oR(r.path)} ${r.label} (${t.sourceLabel})`,
		source: "foundry-asset"
	});
}
function rR(e, t, n) {
	e?.({
		candidatesFound: t.candidates.length,
		currentLocation: n.currentLocation,
		directoriesVisited: t.visitedDirectories,
		maxDirectories: n.maxDirectories,
		phase: n.phase
	});
}
function iR(e) {
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
function aR(e, t) {
	return `${oR(e)} (${t})`;
}
function oR(e) {
	return e.split(/[/\\]/).at(-1) ?? e;
}
function sR(e) {
	return typeof e == "object" && !!e;
}
function cR(e) {
	return sR(e) && Object.values(e).every((e) => Array.isArray(e) && e.every((e) => typeof e == "string"));
}
function lR(e, t, n) {
	return aj(e, n) || t.some(({ path: e }) => aj(e, n));
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/dig-down.ts
var uR = "fuzzy-foundry", dR = .3, fR = new Set([
	".webp",
	".png",
	".jpg",
	".jpeg",
	".gif"
]);
function pR(e, t) {
	let n = mR();
	if (rR(t, e, {
		currentLocation: gR(n),
		maxDirectories: 0,
		phase: "filesystem"
	}), !n.digDownActive || !n.digDownCacheReady) return;
	let r = yR();
	if (!(!r?._fileIndexCache || !r.fs)) {
		for (let t of _R(r, e.searchTerms)) vR(e, r, t);
		rR(t, e, {
			currentLocation: "Dig Down file cache search complete",
			maxDirectories: 0,
			phase: "filesystem"
		});
	}
}
function mR() {
	let e = game.modules.get(uR)?.active === !0, t = hR(), n = yR(), r = Object.values(n?._fileIndexCache ?? {}).reduce((e, t) => e + t.length, 0);
	return {
		digDownActive: e,
		digDownCacheReady: !!(n?._fileIndexCache && n.fs),
		digDownDeepFileSearchEnabled: t,
		digDownIndexedFileCount: r
	};
}
function hR() {
	try {
		return game.settings.get(uR, "deepFile") === !0;
	} catch {
		return !1;
	}
}
function gR(e) {
	return e.digDownActive ? e.digDownDeepFileSearchEnabled ? e.digDownCacheReady ? `Dig Down file cache (${e.digDownIndexedFileCount} files)` : "Waiting for Dig Down file cache" : "Dig Down Deep File Search is disabled" : "Dig Down is not active";
}
function _R(e, t) {
	let n = /* @__PURE__ */ new Set(), r = Object.keys(e._fileIndexCache ?? {});
	for (let i of t) {
		let t = i.toLocaleLowerCase();
		for (let e of r) e.toLocaleLowerCase().includes(t) && n.add(e);
		let a = e.fs?.get(i, [], dR) ?? [];
		for (let [, e] of a) n.add(e);
	}
	return [...n].sort((e, t) => e.toLocaleLowerCase().localeCompare(t.toLocaleLowerCase()));
}
function vR(e, t, n) {
	let r = t._fileIndexCache?.[n] ?? [];
	for (let t of r) bR(t) && tR(e, {
		img: t,
		key: `foundry-asset:${t}`,
		label: aR(t, "Dig Down"),
		source: "foundry-asset"
	});
}
function yR() {
	let e = canvas.deepSearchCache;
	if (!sR(e)) return null;
	let t = e._fileIndexCache, n = e.fs, r = {};
	return cR(t) && (r._fileIndexCache = t), sR(n) && typeof n.get == "function" && (r.fs = { get: n.get.bind(n) }), r;
}
function bR(e) {
	let t = `.${e.split(/[#?]/)[0]?.split(".").pop() ?? ""}`;
	return fR.has(t.toLocaleLowerCase());
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/documents.ts
function xR(e, t) {
	rR(t, e, {
		currentLocation: "World Actors and Items",
		maxDirectories: 0,
		phase: "world-documents"
	});
	for (let t of game.actors.contents) nR(e, {
		imagePaths: [{
			label: "actor image",
			path: t.img ?? ""
		}, {
			label: "token image",
			path: iR(t)
		}],
		name: t.name,
		sourceLabel: "World Actors",
		sourceKey: t.uuid
	});
	for (let t of game.items?.contents ?? []) nR(e, {
		imagePaths: [{
			label: "item image",
			path: t.img ?? ""
		}],
		name: t.name,
		sourceLabel: "World Items",
		sourceKey: t.uuid
	});
}
async function SR(e, t) {
	rR(t, e, {
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
		] }).catch(() => void 0), r = n ? tw(n) : [];
		for (let n of r) nR(e, {
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
					path: Z(n, [
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
async function CR(e, t) {
	let n = ij(e);
	if (!n.length) return [];
	let r = {
		candidates: [],
		maxDirectoryBudget: 0,
		searchTerms: n,
		seenPaths: /* @__PURE__ */ new Set(),
		visitedDirectories: 0
	};
	return e.includeCompendiumAssets && (xR(r, t), await SR(r, t)), e.includeFilePickerAssets && pR(r, t), rR(t, r, {
		currentLocation: "Portrait search complete",
		maxDirectories: r.maxDirectoryBudget,
		phase: "ready"
	}), r.candidates;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/index.ts
var wR = {
	buildNpc: ZL,
	ensureActorFolder: OI,
	ensureItemFolder: kI,
	findLowerCareerCandidates: fF,
	getPortraitSearchAvailability: async () => mR(),
	importRecommendedQuickTraits: LI,
	listActorFolders: async () => AI(),
	listBaseActors: async (e) => $I(e),
	listFoundryPortraitCandidates: CR,
	listMagicLoreOptions: fL,
	listSpellsForMagicGrants: JL,
	listItemFolders: async () => jI(),
	listQuickTraits: RI,
	listSkillCharacteristics: OF,
	listSkillSpecializations: DF,
	listTalentMaximums: WF,
	listTraitDifficultyOptions: TI,
	loadBaseActorDraftData: eL,
	loadSettings: async () => eI(),
	resolveActorDrop: tL,
	resolveCareerDrop: oL,
	resolveSpellDrop: YL,
	resolveTraitDrop: EI,
	resolveTrapping: WI,
	resolveTrappingDrop: GI,
	saveSettings: tI
}, TR = class extends FS {
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
		return XP;
	}
	getVueProps() {
		return { bridge: wR };
	}
}, ER = "wfrp4e-customizer-open-npc-builder", DR = "wfrp4e-customizer-open-species-builder";
function OR() {
	Hooks.on("renderActorDirectory", (e, t) => {
		let n = NR(t);
		n && kR(n);
	});
}
function kR(e) {
	let n = MR(e);
	if (!n) {
		t("wfrp4e-customizer-apps | Could not find Actor Directory button container.");
		return;
	}
	AR(e, n), jR(e, n);
}
function AR(e, t) {
	if (e.querySelector(`.${ER}`)) return;
	let n = document.createElement("button");
	n.classList.add(ER, "wfrp4e-customizer-actor-directory-button"), n.type = "button", n.innerHTML = "<i class=\"fa-solid fa-user-plus\" inert></i><span>NPC Builder App</span>", n.addEventListener("click", () => {
		new TR().render(!0);
	}), t.append(n);
}
function jR(e, t) {
	if (e.querySelector(`.${DR}`)) return;
	let n = document.createElement("button");
	n.classList.add(DR, "wfrp4e-customizer-actor-directory-button"), n.type = "button", n.innerHTML = "<i class=\"fa-solid fa-people-group\" inert></i><span>Species Builder</span>", n.addEventListener("click", () => {
		new _T().render(!0);
	}), t.append(n);
}
function MR(e) {
	return e.querySelector(".directory-header .header-actions") ?? e.querySelector(".directory-header .action-buttons") ?? e.querySelector(".header-actions") ?? e.querySelector(".action-buttons");
}
function NR(e) {
	return e instanceof HTMLElement ? e : PR(e) && e[0] instanceof HTMLElement ? e[0] : null;
}
function PR(e) {
	return typeof e == "object" && !!e && "length" in e;
}
//#endregion
//#region src/module/apps/npc-builder/estimated-xp/actor-profile.ts
function FR(e) {
	let t = {};
	for (let n of Object.keys(Tc)) {
		let r = n;
		t[r] = zR(e, r);
	}
	return {
		characteristics: t,
		skills: IR(e, "skill"),
		talents: IR(e, "talent")
	};
}
function IR(e, t) {
	return e.items?.contents.filter((e) => e.type === t).map((n) => ({
		name: n.name,
		value: t === "skill" ? LR(e, n) : RR(n)
	})) ?? [];
}
function LR(e, t) {
	let n = Z(t.system, ["characteristic", "value"]), r = wl(t.system, [["total", "value"], ["total"]]);
	return r !== null && Dc(n) ? r - zR(e, n) : Cl(t.system, [["advances", "value"], ["advances"]]) + Cl(t.system, [["modifier", "value"], ["modifier"]]);
}
function RR(e) {
	return Cl(e.system, [["advances", "value"], ["advances"]]);
}
function zR(e, t) {
	let n = wl(e.system, [
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
	return n === null ? Cl(e.system, [[
		"characteristics",
		t,
		"initial",
		"value"
	], [
		"characteristics",
		t,
		"initial"
	]]) + Cl(e.system, [[
		"characteristics",
		t,
		"modifier",
		"value"
	], [
		"characteristics",
		t,
		"modifier"
	]]) + Cl(e.system, [[
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
var BR = null;
async function VR(e, t, n) {
	let r = game.actors.contents, i = HR(n ? r.filter((e) => e.folder?.uuid === n) : [], e);
	if (i) return {
		actor: i,
		source: i.folder?.name ?? "Configured NPC Base Actors folder"
	};
	let a = HR(r.filter((e) => e.uuid !== t.uuid), e);
	if (a) return {
		actor: a,
		source: "World Actors"
	};
	let o = UR(await GR(), e);
	if (!o) return null;
	let s = await fromUuid(o.uuid);
	if (!qR(s)) throw Error(`The species Actor ${o.uuid} is no longer available.`);
	return {
		actor: s,
		source: o.source
	};
}
function HR(e, t) {
	return WR(e, t, (e) => e.name);
}
function UR(e, t) {
	return WR(e, t, (e) => e.name);
}
function WR(e, t, n) {
	let r = t.trim();
	return e.find((e) => n(e).trim() === r) ?? e.find((e) => TT(n(e)) === TT(t)) ?? null;
}
function GR() {
	return BR ??= KR(), BR;
}
async function KR() {
	let e = [];
	for (let t of game.packs ?? []) {
		if (!ew(t) || !t.getIndex) continue;
		let n = await t.getIndex({ fields: ["name"] });
		for (let r of tw(n)) {
			let n = QC(t, r);
			r.name && n && e.push({
				name: r.name,
				source: t.title ?? t.collection ?? "Actor Compendium",
				uuid: n
			});
		}
	}
	return e;
}
function qR(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Actor";
}
//#endregion
//#region src/module/apps/npc-builder/estimated-xp/estimate.ts
async function JR(e) {
	let t = cC(await fromUuid(e), "Expected an NPC Actor.");
	if (t.type !== "npc") throw Error(`Expected an NPC Actor, but received Actor type “${t.type}”.`);
	return await YR(t);
}
async function YR(e) {
	let t = rL(e);
	if (!t) return { status: "missing-species" };
	let n = await VR(t, e, eI().baseActorFolderUuid);
	return n ? {
		baselineName: n.actor.name,
		baselineSource: n.source,
		baselineUuid: n.actor.uuid,
		breakdown: _E(FR(e), FR(n.actor)),
		species: t,
		status: "ready"
	} : {
		species: t,
		status: "baseline-not-found"
	};
}
//#endregion
//#region src/module/apps/npc-builder/estimated-xp/sheet.ts
var XR = "[data-wfrp-customizer-npc-xp=\"true\"]", ZR = /* @__PURE__ */ new Set(), QR = !1, $R = !1;
function ez() {
	if (!QR) {
		QR = !0, Hooks.on("renderApplicationV2", (e, t) => {
			if (!(t instanceof HTMLElement)) return;
			let n = az(e);
			n && tz(n, t);
		});
		for (let e of [
			"createActor",
			"updateActor",
			"deleteActor",
			"createItem",
			"updateItem",
			"deleteItem",
			"updateSetting"
		]) Hooks.on(e, oz);
	}
}
function tz(e, t) {
	let n = t.matches("section[data-tab=\"careers\"]") ? t : t.querySelector("section[data-tab=\"careers\"]");
	if (!n) return;
	n.querySelector(XR)?.remove();
	let r = nz(e, t), i = n.querySelector(".sheet-list.careers");
	i ? n.insertBefore(r.container, i) : n.append(r.container), sz(), rz(r), globalThis.setTimeout(() => {
		r.root.isConnected && r.root.contains(r.container) && (sz(), ZR.add(r));
	}, 0);
}
function nz(e, t) {
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
async function rz(e) {
	let n = ++e.generation;
	e.output.value = "Calculating…";
	try {
		let t = await YR(e.actor);
		n === e.generation && e.root.contains(e.container) && iz(e, t);
	} catch (r) {
		n === e.generation && e.root.contains(e.container) && (e.output.value = "Unavailable", e.details.textContent = "XP calculation failed; see the console for details."), t("wfrp4e-customizer-apps | NPC XP calculation failed.", r);
	}
}
function iz(e, t) {
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
function az(e) {
	if (typeof e != "object" || !e) return null;
	let t = "actor" in e ? e.actor : void 0, n = "document" in e ? e.document : void 0, r = oC(t) ? t : oC(n) ? n : null;
	return r?.type === "npc" ? r : null;
}
function oz() {
	$R || ($R = !0, globalThis.setTimeout(() => {
		$R = !1, sz();
		for (let e of ZR) rz(e);
	}, 0));
}
function sz() {
	for (let e of ZR) (!e.root.isConnected || !e.root.contains(e.container)) && ZR.delete(e);
}
//#endregion
//#region src/module/apps/species-builder/apply-species-config.ts
var cz = [
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
function lz() {
	let n = game.wfrp4e?.config;
	if (!Y(n)) {
		t(`${$} | WFRP config was unavailable; custom species were not applied.`);
		return;
	}
	let r = ZS();
	uz(n, ml(r)), r.definitions.length > 0 && e(`${$} | Applied ${r.definitions.length} custom species definition(s).`);
}
function uz(e, t) {
	for (let n of cz) dz(e, n, t[n]);
	fz(e, t.extraSpecies), pz(e, t.subspecies);
}
function dz(e, t, n) {
	if (Object.keys(n).length === 0) return;
	let r = e[t];
	if (!Y(r)) {
		e[t] = { ...n };
		return;
	}
	Object.assign(r, n);
}
function fz(e, t) {
	if (t.length === 0) return;
	let n = Array.isArray(e.extraSpecies) ? e.extraSpecies : [], r = /* @__PURE__ */ new Set();
	for (let e of n) typeof e == "string" && r.add(e);
	for (let e of t) r.add(e);
	e.extraSpecies = [...r];
}
function pz(e, t) {
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
var mz = "2d10";
function hz(e) {
	let t = e?.split("+")[0]?.trim();
	return t ? _z(t) : mz;
}
function gz(e, t) {
	return hz(e) === hz(t);
}
function _z(e) {
	return e.replaceAll(/\s+/g, "").toLocaleLowerCase();
}
//#endregion
//#region src/module/apps/species-builder/chargen-roll-swap-feedback.ts
var vz = "data-wfrp4e-customizer-roll-swap-feedback", yz = `[${vz}]`;
function bz(e, t) {
	let n = Tz(e);
	if (n) {
		n.classList.add("wfrp4e-customizer-apps-root"), n.dataset.theme = "wfrp4e-customizer-apps";
		for (let e of wz(n)) e.addEventListener("dragstart", () => {
			let r = e.dataset.ch;
			r && xz(n, r, t);
		}), e.addEventListener("dragend", () => {
			Cz(n);
		}), e.addEventListener("drop", () => {
			Cz(n);
		});
	}
}
function xz(e, t, n) {
	Cz(e);
	for (let r of wz(e)) {
		let e = r.dataset.ch;
		if (e) {
			if (e === t) {
				Sz(r, "Dragging", "dui-badge-warning");
				continue;
			}
			n(t, e) ? Sz(r, "Compatible", "dui-badge-success") : Sz(r, "Cannot swap", "dui-badge-error");
		}
	}
}
function Sz(e, t, n) {
	let r = document.createElement("span");
	r.setAttribute(vz, ""), r.classList.add("dui-badge", n), r.textContent = t, e.append(r);
}
function Cz(e) {
	for (let t of e.querySelectorAll(yz)) t.remove();
}
function wz(e) {
	return [...e.querySelectorAll(".ch-roll.ch-drag")];
}
function Tz(e) {
	if (e instanceof HTMLElement) return e;
	if (!Y(e)) return;
	let t = e[0];
	return t instanceof HTMLElement ? t : void 0;
}
//#endregion
//#region src/module/apps/species-builder/chargen-roll-swap-guard.ts
var Ez = Symbol("wfrp4e-customizer-guarded-attributes-stage");
function Dz() {
	Hooks.on("wfrp4e:chargen", (e) => {
		Oz(e);
	});
}
function Oz(n) {
	let r = kz(n);
	if (!r) {
		t(`${$} | Could not inspect WFRP character generation stages.`);
		return;
	}
	let i = Az(r);
	if (!i) {
		t(`${$} | Could not find the WFRP Attributes character generation stage.`);
		return;
	}
	if (jz(i.class)) return;
	let a = Mz(i.class);
	typeof r.replaceStage == "function" ? r.replaceStage("attributes", a) : i.class = a, e(`${$} | Guarded WFRP characteristic roll swapping for custom species.`);
}
function kz(e) {
	if (!Y(e)) return;
	let t = {}, n = e.replaceStage;
	return typeof n == "function" && (t.replaceStage = (t, r) => {
		n.call(e, t, r);
	}), Array.isArray(e.stages) && (t.stages = e.stages), t;
}
function Az(e) {
	for (let t of e.stages ?? []) if (Y(t) && t.key === "attributes") return typeof t.class == "function" ? t : void 0;
}
function jz(e) {
	return !!e[Ez];
}
function Mz(e) {
	class t extends e {
		static [Ez] = !0;
		activateListeners(e) {
			let t = super.activateListeners(e);
			return bz(e, (e, t) => gz(Nz(this, e), Nz(this, t))), t;
		}
		swap(e, t) {
			let n = Nz(this, e), r = Nz(this, t);
			if (gz(n, r)) return super.swap(e, t);
			Pz(e, n, t, r);
		}
	}
	return t;
}
function Nz(e, t) {
	let n = Y(e.context) ? e.context : void 0, r = Y(n?.characteristics) ? n.characteristics : void 0, i = (Y(r?.[t]) ? r[t] : void 0)?.formula;
	return typeof i == "string" ? i : void 0;
}
function Pz(e, t, n, r) {
	let i = Fz(e), a = Fz(n), o = hz(t), s = hz(r);
	ui.notifications?.warn?.(`Cannot swap ${i} and ${a}: ${i} uses ${o}, while ${a} uses ${s}.`);
}
function Fz(e) {
	let t = game.wfrp4e?.config?.characteristics;
	if (!Y(t)) return e;
	let n = t[e];
	return typeof n == "string" ? n : e;
}
//#endregion
//#region src/module/debug/shape-inspector/constants.ts
var Iz = `${$}.debugShapeProbes`, Lz = "wfrp4eCustomizerShapeProbes", Rz = "wfrp4eCustomizerShapePreset";
//#endregion
//#region src/module/debug/shape-inspector/utils.ts
function zz(e, t, n) {
	let r = Number(e);
	return Number.isFinite(r) ? Math.max(0, Math.min(n, Math.floor(r))) : t;
}
function Bz(e) {
	return typeof e == "object" && !!e;
}
function Vz(e) {
	return typeof e == "string" ? e.trim().toLocaleLowerCase() : "";
}
function Hz(e) {
	try {
		return localStorage.getItem(e);
	} catch {
		return null;
	}
}
//#endregion
//#region src/module/debug/shape-inspector/path-resolver.ts
function Uz(e) {
	let t = Yz(e), n = Wz(globalThis, t.root);
	for (let e of t.tokens) {
		if (e.type === "property") {
			n = Wz(n, e.key);
			continue;
		}
		if (e.type === "index") {
			n = Wz(n, String(e.index));
			continue;
		}
		n = Gz(n, e.name, e.args);
	}
	return n;
}
function Wz(e, t) {
	if (!(!Bz(e) && typeof e != "function")) try {
		return e[t];
	} catch {
		return;
	}
}
function Gz(e, t, n) {
	if (t === "at") {
		let t = Number(n[0] ?? 0), r = Number.isFinite(t) ? t : 0;
		return Xz(e).at(r);
	}
	if (t === "findByName") {
		let t = Vz(n[0] ?? "");
		return Xz(e).find((e) => Vz(Wz(e, "name")) === t);
	}
	if (t === "findByType") {
		let t = Vz(n[0] ?? "");
		return Xz(e).find((e) => Vz(Wz(e, "type")) === t);
	}
	if (t === "get") {
		let t = n[0] ?? "";
		if (e instanceof Map) return e.get(t);
		let r = Wz(e, "get");
		if (typeof r == "function") return r.call(e, t);
	}
	if (t === "sample") {
		let t = zz(n[0], 3, 60);
		return Xz(e).slice(0, t);
	}
	throw Error(`Unsupported path method "${t}".`);
}
function Kz(e) {
	return e.trim() ? e.split(",").map((e) => Jz(e.trim())).map(String) : [];
}
function qz(e) {
	let t = e.trim();
	return /^-?\d+$/.test(t) ? Number(t) : Jz(t);
}
function Jz(e) {
	let t = /^["'](?<value>.*)["']$/.exec(e);
	return t?.groups ? t.groups.value ?? "" : e;
}
function Yz(e) {
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
				args: Kz(e.groups.args ?? ""),
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
				index: qz(e),
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
function Xz(e) {
	if (Array.isArray(e)) return e;
	let t = Wz(e, "contents");
	return Array.isArray(t) ? t : [];
}
//#endregion
//#region src/module/debug/shape-inspector/presets.ts
var Zz = { "npc-builder": [
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
function Qz() {
	return window.location.href.includes("wfrp4eCustomizerShapeProbes") || window.location.href.includes("wfrp4eCustomizerShapePreset");
}
function $z(e) {
	let t = {
		hook: e.hook ?? "ready",
		maxDepth: zz(e.maxDepth, 2, 6),
		maxEntries: zz(e.maxEntries, 12, 60),
		path: e.path.trim()
	};
	return e.label && (t.label = e.label), t;
}
function eB() {
	return [...tB(), ...nB()].map($z);
}
function tB() {
	let e = Hz(Iz);
	if (!e) return [];
	try {
		let t = JSON.parse(e);
		return Array.isArray(t) ? t.filter(iB).map($z) : [];
	} catch {
		return [];
	}
}
function nB() {
	let e = [], t = [new URLSearchParams(window.location.search), new URLSearchParams(window.location.hash.replace(/^#/, ""))];
	for (let n of t) {
		let t = n.get(Rz), r = n.get(Lz);
		t && e.push(...Zz[t] ?? []), r && e.push(...rB(r));
	}
	return window.location.href.includes("wfrp4eCustomizerShapePreset=npc-builder") && !e.length && e.push(...Zz["npc-builder"] ?? []), e;
}
function rB(e) {
	try {
		let t = JSON.parse(decodeURIComponent(e));
		return Array.isArray(t) ? t.filter(iB) : [];
	} catch (e) {
		return t(`${$} | Could not parse URL shape probes.`, e), [];
	}
}
function iB(e) {
	return typeof e != "object" || !e ? !1 : "path" in e && typeof e.path == "string";
}
//#endregion
//#region src/module/debug/shape-inspector/summary.ts
function aB(e, t) {
	return !Bz(e) && typeof e != "function" ? uB(e) : typeof e == "function" ? cB(e) : Array.isArray(e) ? oB(e, t) : e instanceof Map ? sB(e, t) : lB(e, t);
}
function oB(e, t) {
	return {
		length: e.length,
		sample: e.slice(0, t.maxEntries).map((e) => aB(e, fB(t))),
		type: "array"
	};
}
function sB(e, t) {
	return {
		sample: [...e.entries()].slice(0, t.maxEntries).map(([e, n]) => ({
			key: aB(e, fB(t)),
			value: aB(n, fB(t))
		})),
		size: e.size,
		type: "Map"
	};
}
function cB(e) {
	return {
		name: e.name,
		type: "function"
	};
}
function lB(e, t) {
	if (t.seen.has(e)) return { type: "circular" };
	t.seen.add(e);
	let n = dB(e, t.maxEntries), r = Wz(e, "constructor"), i = {
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
		let n = Wz(e, t);
		typeof n == "string" && (i[t] = n);
	}
	if (t.maxDepth <= 0) return i;
	let a = {};
	for (let r of n) a[r] = aB(Wz(e, r), fB(t));
	i.properties = a;
	let o = Wz(e, "toObject");
	if (typeof o == "function") try {
		i.source = aB(o.call(e), fB(t));
	} catch (e) {
		i.source = {
			error: e instanceof Error ? e.message : String(e),
			type: "error"
		};
	}
	return i;
}
function uB(e) {
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
function dB(e, t) {
	return Object.keys(e).sort().slice(0, t);
}
function fB(e) {
	return {
		maxDepth: e.maxDepth - 1,
		maxEntries: e.maxEntries,
		seen: e.seen
	};
}
//#endregion
//#region src/module/debug/shape-inspector/index.ts
function pB() {
	localStorage.removeItem(Iz), e(`${$} | Cleared debug shape probes.`);
}
function mB() {
	return eB();
}
function hB(e, t = {}) {
	let n = vB(e, t);
	return bB(n), n;
}
function gB() {
	let t = eB();
	for (let e of ["init", "setup"]) {
		let n = t.filter((t) => t.hook === e);
		n.length && Hooks.once(e, () => {
			for (let t of n) yB(t, e);
		});
	}
	Hooks.once("ready", () => {
		let t = eB().filter((e) => (e.hook ?? "ready") === "ready");
		Qz() && e(`${$} | Debug shape ready probes discovered: ${t.length}`, window.location.href);
		for (let e of t) yB(e, "ready");
	});
}
function _B(t) {
	let n = t.map($z);
	localStorage.setItem(Iz, JSON.stringify(n)), e(`${$} | Stored ${n.length} debug shape probe(s). Reload Foundry to run init/setup probes.`);
}
function vB(e, t = {}, n) {
	let r = zz(t.maxDepth, 2, 6), i = zz(t.maxEntries, 12, 60), a = Uz(e), o = {
		inspectedAt: (/* @__PURE__ */ new Date()).toISOString(),
		label: t.label || e,
		maxDepth: r,
		maxEntries: i,
		path: e,
		value: aB(a, {
			maxDepth: r,
			maxEntries: i,
			seen: /* @__PURE__ */ new WeakSet()
		})
	};
	return n && (o.hook = n), o;
}
function yB(e, n) {
	try {
		bB(vB(e.path, e, n));
	} catch (n) {
		t(`${$} | Debug shape probe failed for "${e.path}".`, n);
	}
}
function bB(t) {
	e(`${$} | Debug shape probe: ${t.label}`, JSON.stringify(t, null, 2));
}
//#endregion
//#region src/view/components/ApplicationShell.vue?vue&type=script&setup=true&lang.ts
var xB = ["aria-label"], SB = { class: "dui-card-body" }, CB = { class: "dui-card-title" }, wB = { key: 0 }, TB = {
	key: 0,
	class: "dui-card-actions"
}, EB = /* @__PURE__ */ F({
	__name: "ApplicationShell",
	props: {
		description: {},
		title: {}
	},
	setup(e) {
		return (t, n) => (R(), z("section", {
			"aria-label": e.title,
			class: "dui-card"
		}, [V("div", SB, [
			V("header", null, [
				V("h1", CB, k(e.title), 1),
				e.description ? (R(), z("p", wB, k(e.description), 1)) : W("", !0),
				Hr(t.$slots, "header")
			]),
			Hr(t.$slots, "default"),
			t.$slots.actions ? (R(), z("div", TB, [Hr(t.$slots, "actions")])) : W("", !0)
		])], 8, xB));
	}
}), DB = { class: "dui-list" }, OB = /* @__PURE__ */ F({
	__name: "DaisyExampleApp",
	setup(e) {
		let t = [
			"button",
			"badge",
			"card",
			"alert"
		];
		return (e, n) => (R(), B(EB, {
			description: "A quick visual check of the module's isolated Daisy component theme.",
			title: "Daisy Probe"
		}, {
			header: P(() => [...n[0] ||= [V("span", { class: "dui-badge dui-badge-primary" }, "Scoped", -1), V("span", { class: "dui-badge dui-badge-outline" }, "Foundry-safe", -1)]]),
			actions: P(() => [...n[1] ||= [V("span", { class: "dui-badge dui-badge-success" }, "Ready", -1)]]),
			default: P(() => [n[2] ||= V("div", { class: "dui-alert dui-alert-info" }, [V("span", null, "DaisyUI is available inside this Vue application root.")], -1), V("ul", DB, [(R(), z(L, null, I(t, (e) => V("li", {
				key: e,
				class: "dui-list-row"
			}, k(e), 1)), 64))])]),
			_: 1
		}));
	}
}), kB = class extends FS {
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
		return OB;
	}
}, AB = { class: "dui-list" }, jB = { class: "dui-list-row" }, MB = { class: "dui-list-row" }, NB = { class: "dui-list-row" }, PB = /* @__PURE__ */ F({
	__name: "WorkbenchApp",
	props: {
		openDaisyProbe: { type: Function },
		openNpcBuilder: { type: Function },
		openSpeciesBuilder: { type: Function }
	},
	setup(e) {
		return (t, n) => (R(), B(EB, {
			description: "Open a focused WFRP4e authoring workflow.",
			title: "Customizer Workbench"
		}, {
			default: P(() => [V("ul", AB, [
				V("li", jB, [n[3] ||= V("div", { class: "dui-list-col-grow" }, [V("strong", null, "NPC Builder"), V("p", null, "Build an NPC from a base Actor, Careers, traits, trappings, and spells.")], -1), V("button", {
					"aria-label": "Open NPC Builder",
					class: "dui-btn dui-btn-primary",
					type: "button",
					onClick: n[0] ||= (...t) => e.openNpcBuilder && e.openNpcBuilder(...t)
				}, " Open ")]),
				V("li", MB, [n[4] ||= V("div", { class: "dui-list-col-grow" }, [V("strong", null, "Species Builder"), V("p", null, "Author custom species and apply them to WFRP character generation.")], -1), V("button", {
					"aria-label": "Open Species Builder",
					class: "dui-btn",
					type: "button",
					onClick: n[1] ||= (...t) => e.openSpeciesBuilder && e.openSpeciesBuilder(...t)
				}, " Open ")]),
				V("li", NB, [n[5] ||= V("div", { class: "dui-list-col-grow" }, [V("strong", null, "DaisyUI Probe"), V("p", null, "Check the module's scoped component theme.")], -1), V("button", {
					"aria-label": "Open DaisyUI Probe",
					class: "dui-btn dui-btn-ghost",
					type: "button",
					onClick: n[2] ||= (...t) => e.openDaisyProbe && e.openDaisyProbe(...t)
				}, " Open ")])
			])]),
			_: 1
		}));
	}
}), FB = class extends FS {
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
		return PB;
	}
	getVueProps() {
		return {
			openDaisyProbe: () => new kB().render(!0),
			openNpcBuilder: () => new TR().render(!0),
			openSpeciesBuilder: () => new _T().render(!0)
		};
	}
};
//#endregion
//#region src/module/register-module-menus.ts
function IB() {
	game.settings.registerMenu($, "workbench", {
		hint: "Open the WFRP4e Customizer Apps workbench.",
		icon: "fa-solid fa-screwdriver-wrench",
		label: "Open Workbench",
		name: "WFRP4e Customizer Apps",
		restricted: !0,
		type: FB
	}), game.settings.registerMenu($, "npc-builder", {
		hint: "Build a WFRP4e NPC from a base Actor and Career items.",
		icon: "fa-solid fa-user-plus",
		label: "Open NPC Builder",
		name: "WFRP4e NPC Builder",
		restricted: !0,
		type: TR
	}), game.settings.registerMenu($, "species-builder", {
		hint: "Create custom WFRP4e species definitions for character generation.",
		icon: "fa-solid fa-people-group",
		label: "Open Species Builder",
		name: "WFRP4e Species Builder",
		restricted: !0,
		type: _T
	}), game.settings.registerMenu($, "daisy-example", {
		hint: "Open a small isolated DaisyUI component probe.",
		icon: "fa-solid fa-flask",
		label: "Open Daisy Probe",
		name: "WFRP4e Daisy Probe",
		restricted: !0,
		type: kB
	});
}
//#endregion
//#region src/module/register-module-settings.ts
function LB() {
	$F(), XS();
}
//#endregion
//#region src/functions/item-grants/wfrp-grant-effect.ts
var RB = "generatedGrantItemsEffect", zB = {
	grantMode: "all",
	lifetime: "linked-to-effect",
	ownerAction: "keep"
};
function BB(e) {
	let t = e.recipe ?? zB;
	VB(t);
	let n = e.items.map((e) => e.uuid);
	return {
		changes: [],
		description: UB(e.effectName, e.items, t),
		disabled: !1,
		flags: { [e.flagScope]: {
			[RB]: !0,
			itemUuids: n,
			recipe: t
		} },
		img: e.items[0]?.img ?? "icons/svg/aura.svg",
		name: e.effectName,
		system: {
			scriptData: [{
				label: e.effectName,
				script: HB(n, t),
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
function VB(e) {
	if (e.lifetime === "linked-to-effect" && e.ownerAction === "delete-after-grant") throw Error("Self-removing grant effects must create detached item copies.");
}
function HB(e, t) {
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
function UB(e, t, n) {
	let r = WB(e), i = t.map((e) => `<li>${WB(e.name)}</li>`).join("");
	return `<p><strong>${r}</strong>: grants item copies; ${n.lifetime === "linked-to-effect" ? "granted item copies are removed with this effect" : "granted item copies remain after this effect is removed"}.${n.ownerAction === "delete-after-grant" ? " The source Item removes itself after granting." : ""}</p><ul>${i}</ul>`;
}
function WB(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
//#endregion
//#region src/view/apps/grant-builder/GrantBuilderApp.vue?vue&type=script&setup=true&lang.ts
var GB = { class: "dui-card dui-card-border dui-card-sm" }, KB = { class: "dui-card-body" }, qB = { class: "dui-list" }, JB = {
	key: 0,
	class: "dui-list-row"
}, YB = ["src"], XB = { class: "dui-list-col-grow" }, ZB = ["title", "onClick"], QB = { class: "dui-card dui-card-border dui-card-sm" }, $B = { class: "dui-card-body" }, eV = { class: "dui-fieldset" }, tV = { class: "dui-label" }, nV = ["value"], rV = { class: "dui-card-body" }, iV = { class: "dui-fieldset" }, aV = { class: "dui-label" }, oV = ["checked"], sV = { class: "dui-label" }, cV = ["checked"], lV = { class: "dui-label" }, uV = ["checked", "disabled"], dV = ["disabled"], fV = /* @__PURE__ */ F({
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
		return (n, r) => (R(), B(EB, {
			description: `Build an item-granting Active Effect on ${e.carrierName}.`,
			title: "Grant Builder"
		}, {
			actions: P(() => [V("button", {
				class: "dui-btn dui-btn-ghost",
				type: "button",
				onClick: r[5] ||= (...t) => e.onCancel && e.onCancel(...t)
			}, "Cancel"), V("button", {
				class: "dui-btn dui-btn-primary",
				type: "button",
				disabled: e.items.length === 0,
				onClick: r[6] ||= (...t) => e.onCreate && e.onCreate(...t)
			}, " Create Grant Effect ", 8, dV)]),
			default: P(() => [
				V("section", GB, [V("div", KB, [
					r[8] ||= V("h2", { class: "dui-card-title" }, "Granted Items", -1),
					H(P_, {
						description: "World and compendium Items can be added one at a time.",
						"manual-entry-trigger": "button",
						title: "Drop Items Here",
						onDropData: e.onDropData
					}, null, 8, ["onDropData"]),
					V("ul", qB, [e.items.length === 0 ? (R(), z("li", JB, "No granted items configured.")) : (R(!0), z(L, { key: 1 }, I(e.items, (t) => (R(), z("li", {
						key: t.uuid,
						class: "dui-list-row"
					}, [
						t.img ? (R(), z("img", {
							key: 0,
							alt: "",
							src: t.img
						}, null, 8, YB)) : W("", !0),
						V("div", XB, [V("strong", null, k(t.name), 1), V("small", null, k(t.uuid), 1)]),
						V("button", {
							class: "dui-btn dui-btn-ghost dui-btn-sm dui-btn-square",
							type: "button",
							title: `Remove ${t.name}`,
							onClick: (n) => e.onRemoveItem(t.uuid)
						}, [...r[7] ||= [V("i", {
							class: "fa-solid fa-times",
							"aria-hidden": "true"
						}, null, -1)]], 8, ZB)
					]))), 128))])
				])]),
				V("section", QB, [V("div", $B, [V("fieldset", eV, [r[10] ||= V("legend", { class: "dui-fieldset-legend" }, "Effect", -1), V("label", tV, [r[9] ||= V("span", null, "Effect name", -1), V("input", {
					class: "dui-input",
					value: e.effectName,
					type: "text",
					onInput: r[0] ||= (n) => e.onEffectNameInput(t(n))
				}, null, 40, nV)])])])]),
				V("form", {
					class: "dui-card dui-card-border dui-card-sm",
					onSubmit: r[4] ||= Jo(() => {}, ["prevent"])
				}, [V("div", rV, [V("fieldset", iV, [
					r[14] ||= V("legend", { class: "dui-fieldset-legend" }, "Granted Item Lifetime", -1),
					V("label", aV, [V("input", {
						class: "dui-radio",
						name: "grant-lifetime",
						type: "radio",
						value: "linked-to-effect",
						checked: e.lifetime === "linked-to-effect",
						onChange: r[1] ||= (t) => e.onLifetimeChange("linked-to-effect")
					}, null, 40, oV), r[11] ||= V("span", null, [
						V("strong", null, "Linked to this effect"),
						V("br"),
						U(" Granted Items are removed when this effect is deleted. ")
					], -1)]),
					V("label", sV, [V("input", {
						class: "dui-radio",
						name: "grant-lifetime",
						type: "radio",
						value: "detached",
						checked: e.lifetime === "detached",
						onChange: r[2] ||= (t) => e.onLifetimeChange("detached")
					}, null, 40, cV), r[12] ||= V("span", null, [
						V("strong", null, "Detached copies"),
						V("br"),
						U(" Granted Items remain after this effect or source Item is removed. ")
					], -1)]),
					V("label", lV, [V("input", {
						class: "dui-checkbox",
						type: "checkbox",
						checked: e.ownerAction === "delete-after-grant",
						disabled: e.lifetime !== "detached",
						onChange: r[3] ||= (t) => e.onOwnerActionChange(e.ownerAction === "delete-after-grant" ? "keep" : "delete-after-grant")
					}, null, 40, uV), r[13] ||= U(" Remove the source Item after granting. ", -1)])
				])])], 32)
			]),
			_: 1
		}, 8, ["description"]));
	}
});
//#endregion
//#region src/module/wfrp4e/grant/item-documents.ts
function pV(e) {
	let t = e.dataTransfer?.getData("text/plain") ?? "";
	if (!t) return null;
	try {
		return dC(t).type === "Item" ? t : null;
	} catch {
		return null;
	}
}
async function mV(e) {
	let t = dC(e);
	if (!t.uuid) throw Error("Drop an Item with a resolvable UUID.");
	return lC(await fromUuid(t.uuid), "The dropped Item was not found.");
}
function hV(e) {
	let t = {
		name: e.name,
		uuid: e.uuid
	};
	return e.img && (t.img = e.img), t;
}
//#endregion
//#region src/module/apps/grant-builder/GrantBuilderApplication.ts
var gV = "detached", _V = class extends FS {
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
		return fV;
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
		this.#r = e, e !== gV && (this.#i = "keep"), this.render();
	}
	changeOwnerAction(e) {
		this.#i = e, this.render();
	}
	removeItem(e) {
		this.#n = this.#n.filter((t) => t.uuid !== e), this.render();
	}
	async handleDrop(e) {
		try {
			let t = await mV(e);
			if (t.uuid === this.carrierItem.uuid) throw Error("An Item cannot grant itself.");
			if (this.#n.some((e) => e.uuid === t.uuid)) {
				ui.notifications?.warn?.(`"${t.name}" is already in this grant effect.`);
				return;
			}
			this.#n = [...this.#n, hV(t)], this.updateDefaultEffectName(), this.render();
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
			}, n = BB({
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
}, vV = new Set(["talent", "trait"]), yV = /* @__PURE__ */ new WeakSet(), bV = !1, xV = "wfrp4e-customizer-grant-builder-button", SV = [
	"section[data-application-part=\"effects\"].active",
	"section[data-tab=\"effects\"].active",
	".tab[data-tab=\"effects\"].active",
	".tab.effects.active"
].join(","), CV = [
	"section[data-application-part=\"effects\"]",
	"section[data-tab=\"effects\"]",
	".tab[data-tab=\"effects\"]",
	".tab.effects"
].join(",");
function wV() {
	bV || (bV = !0, Hooks.on("renderApplicationV2", (e, t) => {
		if (!(t instanceof HTMLElement)) return;
		let n = OV(e);
		!n || !vV.has(n.type) || (TV(n, t), EV(n, t));
	}));
}
function TV(e, t) {
	yV.has(t) || (yV.add(t), t.addEventListener("dragover", (e) => {
		kV(t, e.target) && (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "copy"));
	}, !0), t.addEventListener("drop", (n) => {
		DV(e, t, n);
	}, !0));
}
function EV(e, t) {
	if (t.querySelector(`.${xV}`)) return;
	let n = jV(t, { includeInactive: !0 });
	if (!n) return;
	let r = document.createElement("div");
	r.classList.add("wfrp4e-customizer-grant-builder-toolbar");
	let i = document.createElement("button");
	i.type = "button", i.classList.add(xV), i.title = "Open the advanced item grant builder", i.innerHTML = "<i class=\"fa-solid fa-sitemap\" aria-hidden=\"true\"></i><span>Grant Builder</span>", i.addEventListener("click", () => {
		new _V(e).render(!0);
	}), r.append(i), n.prepend(r);
}
async function DV(e, t, n) {
	if (!kV(t, n.target)) return;
	let r = pV(n);
	if (r) {
		n.preventDefault(), n.stopPropagation();
		try {
			let t = await mV(r);
			if (t.uuid === e.uuid) throw Error("An Item cannot grant itself.");
			let n = hV(t), i = BB({
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
function OV(e) {
	if (typeof e != "object" || !e) return null;
	let t = "item" in e ? e.item : void 0;
	if (sC(t)) return t;
	let n = "document" in e ? e.document : void 0;
	return sC(n) ? n : null;
}
function kV(e, t) {
	return !(t instanceof Element) || !e.contains(t) ? !1 : !!AV(e);
}
function AV(e) {
	return e.querySelector(SV) || jV(e, { includeInactive: !1 });
}
function jV(e, t) {
	return [...e.querySelectorAll(CV)].find((e) => t.includeInactive || e.offsetParent !== null) ?? null;
}
//#endregion
//#region src/module/api/create-module-api.ts
function MV() {
	return {
		clearDebugShapeProbes: pB,
		estimateNpcXp: JR,
		getDebugShapeProbes: mB,
		inspectPath: hB,
		listNpcAutoAdvanceStrategies: XD,
		async openDaisyExample() {
			await new kB().render(!0);
		},
		async openNpcBuilder() {
			await new TR().render(!0);
		},
		async openSpeciesBuilder() {
			await new _T().render(!0);
		},
		async openWorkbench() {
			await new FB().render(!0);
		},
		registerNpcAutoAdvanceStrategy: YD,
		setDebugShapeProbes: _B
	};
}
//#endregion
//#region src/module/api/register-module-api.ts
function NV() {
	let e = game.modules.get($);
	if (!e) throw Error(`Foundry module registry entry was not found for ${$}.`);
	e.api = MV();
}
//#endregion
//#region src/module/hooks/register-module-hooks.ts
function PV() {
	gB(), Hooks.once("init", () => {
		e(`${$} | Initializing`), LB(), game.system.id === "wfrp4e" && (lz(), ez(), Dz(), wV()), IB(), OR();
	}), Hooks.once("ready", () => {
		if (game.system.id !== "wfrp4e") {
			t(`${$} | Loaded outside ${SS}; skipping module API registration.`);
			return;
		}
		NV(), dF(), kF(), tC(), lT(), e(`${$} | Ready`);
	});
}
//#endregion
//#region src/main.ts
PV();
//#endregion

//# sourceMappingURL=wfrp4e-customizer-apps.mjs.map