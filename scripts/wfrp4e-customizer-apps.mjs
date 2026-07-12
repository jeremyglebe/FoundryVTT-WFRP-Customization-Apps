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
}, d = Object.prototype.hasOwnProperty, f = (e, t) => d.call(e, t), p = Array.isArray, m = (e) => C(e) === "[object Map]", h = (e) => C(e) === "[object Set]", g = (e) => C(e) === "[object Date]", _ = (e) => typeof e == "function", v = (e) => typeof e == "string", y = (e) => typeof e == "symbol", b = (e) => typeof e == "object" && !!e, x = (e) => (b(e) || _(e)) && _(e.then) && _(e.catch), S = Object.prototype.toString, C = (e) => S.call(e), w = (e) => C(e).slice(8, -1), T = (e) => C(e) === "[object Object]", E = (e) => v(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ee = /* @__PURE__ */ n(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), te = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, ne = /-\w/g, re = te((e) => e.replace(ne, (e) => e.slice(1).toUpperCase())), ie = /\B([A-Z])/g, ae = te((e) => e.replace(ie, "-$1").toLowerCase()), oe = te((e) => e.charAt(0).toUpperCase() + e.slice(1)), se = te((e) => e ? `on${oe(e)}` : ""), D = (e, t) => !Object.is(e, t), ce = (e, ...t) => {
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
var we = (e) => !!(e && e.__v_isRef === !0), k = (e) => v(e) ? e : e == null ? "" : p(e) || b(e) && (e.toString === S || !_(e.toString)) ? we(e) ? k(e.value) : JSON.stringify(e, Te, 2) : String(e), Te = (e, t) => we(t) ? Te(e, t.value) : m(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Ee(t, r) + " =>"] = n, e), {}) } : h(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Ee(e)) } : y(t) ? Ee(t) : b(t) && !p(t) && !T(t) ? String(t) : t, Ee = (e, t = "") => y(e) ? `Symbol(${e.description ?? t})` : e, De, Oe = class {
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
		let i = p(e), a = i && E(n);
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
			let e = a && E(t) ? o : o.value;
			return r && b(e) ? /* @__PURE__ */ Ut(e) : e;
		}
		return b(o) ? r ? /* @__PURE__ */ Ut(o) : /* @__PURE__ */ Vt(o) : o;
	}
}, St = class extends xt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = p(e) && E(t);
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
		if (!p(e) || y(this._key) || !E(this._key)) do
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
		r._d && Zi(-1);
		let i = Rn(t), a;
		try {
			a = e(...n);
		} finally {
			Rn(i), r._d && Zi(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function zn(e, t) {
	if (In === null) return e;
	let n = ja(In), i = e.dirs ||= [];
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
	if (ha) {
		let n = ha.provides, r = ha.parent && ha.parent.provides;
		r === n && (n = ha.provides = Object.create(r)), n[e] = t;
	}
}
function Hn(e, t, n = !1) {
	let r = ga();
	if (r || $r) {
		let i = $r ? $r._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && _(t) ? t.call(r && r.proxy) : t;
	}
}
function Un() {
	return !!(ga() || $r);
}
var Wn = /* @__PURE__ */ Symbol.for("v-scx"), Gn = () => Hn(Wn);
function Kn(e, t, n) {
	return qn(e, t, n);
}
function qn(e, t, n = r) {
	let { immediate: i, deep: o, flush: s, once: c } = n, u = l({}, n), d = t && i || !t && s !== "post", f;
	if (Sa) {
		if (s === "sync") {
			let e = Gn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = a, e.resume = a, e.pause = a, e;
		}
	}
	let p = ha;
	u.call = (e, t, n) => _n(e, p, t, n);
	let m = !1;
	s === "post" ? u.scheduler = (e) => {
		ji(e, p && p.suspense);
	} : s !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : kn(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = mn(e, t, u);
	return Sa && (f ? f.push(h) : d && h()), h;
}
function Jn(e, t, n) {
	let r = this.proxy, i = v(e) ? e.includes(".") ? Yn(r, e) : () => r[e] : e.bind(r, r), a;
	_(t) ? a = t : (a = t.handler, n = t);
	let o = ya(this), s = qn(i, a.bind(r), n);
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
var Xn = /* @__PURE__ */ Symbol("_vte"), Zn = (e) => e.__isTeleport, Qn = /* @__PURE__ */ Symbol("_leaveCb");
function $n(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, $n(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function I(e, t) {
	return _(e) ? /* @__PURE__ */ l({ name: e.name }, t, { setup: e }) : e;
}
function er() {
	let e = ga();
	return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function tr(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function nr(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var rr = /* @__PURE__ */ new WeakMap();
function ir(e, t, n, i, a = !1) {
	if (p(e)) {
		e.forEach((e, r) => ir(e, t && (p(t) ? t[r] : t), n, i, a));
		return;
	}
	if (or(i) && !a) {
		i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && ir(e, t, n, i.component.subTree);
		return;
	}
	let s = i.shapeFlag & 4 ? ja(i.component) : i.el, c = a ? null : s, { i: l, r: d } = e, m = t && t.r, h = l.refs === r ? l.refs = {} : l.refs, g = l.setupState, y = /* @__PURE__ */ j(g), b = g === r ? o : (e) => nr(h, e) ? !1 : f(y, e), x = (e, t) => !(t && nr(h, t));
	if (m != null && m !== d) {
		if (ar(t), v(m)) h[m] = null, b(m) && (g[m] = null);
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
					i(), rr.delete(e);
				};
				t.id = -1, rr.set(e, t), ji(t, n);
			} else ar(e), i();
		}
	}
}
function ar(e) {
	let t = rr.get(e);
	t && (t.flags |= 8, rr.delete(e));
}
fe().requestIdleCallback, fe().cancelIdleCallback;
var or = (e) => !!e.type.__asyncLoader, sr = (e) => e.type.__isKeepAlive;
function cr(e, t) {
	ur(e, "a", t);
}
function lr(e, t) {
	ur(e, "da", t);
}
function ur(e, t, n = ha) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (fr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) sr(e.parent.vnode) && dr(r, t, n, e), e = e.parent;
	}
}
function dr(e, t, n, r) {
	let i = fr(t, e, r, !0);
	yr(() => {
		u(r[t], i);
	}, n);
}
function fr(e, t, n = ha, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Je();
			let i = ya(n), a = _n(t, n, e, r);
			return i(), Ye(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var pr = (e) => (t, n = ha) => {
	(!Sa || e === "sp") && fr(e, (...e) => t(...e), n);
}, mr = pr("bm"), hr = pr("m"), gr = pr("bu"), _r = pr("u"), vr = pr("bum"), yr = pr("um"), br = pr("sp"), xr = pr("rtg"), Sr = pr("rtc");
function Cr(e, t = ha) {
	fr("ec", e, t);
}
var wr = /* @__PURE__ */ Symbol.for("v-ndc");
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
function Tr(e, t, n = {}, r, i) {
	if (In.ce || In.parent && or(In.parent) && In.parent.ce) {
		let e = Object.keys(n).length > 0;
		return t !== "default" && (n.name = t), z(), V(R, null, [U("slot", n, r && r())], e ? -2 : 64);
	}
	let a = e[t];
	a && a._c && (a._d = !1), z();
	let o = a && Er(a(n)), s = n.key || o && o.key, c = V(R, { key: (s && !y(s) ? s : `_${t}`) + (!o && r ? "_fb" : "") }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), a && a._c && (a._d = !0), c;
}
function Er(e) {
	return e.some((e) => $i(e) ? !(e.type === Gi || e.type === R && !Er(e.children)) : !0) ? e : null;
}
function Dr(e, t) {
	let n = {};
	for (let r in e) n[t && /[A-Z]/.test(r) ? `on:${r}` : se(r)] = e[r];
	return n;
}
var Or = (e) => e ? xa(e) ? ja(e) : Or(e.parent) : null, kr = /* @__PURE__ */ l(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Or(e.parent),
	$root: (e) => Or(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Br(e),
	$forceUpdate: (e) => e.f ||= () => {
		kn(e.update);
	},
	$nextTick: (e) => e.n ||= Dn.bind(e.proxy),
	$watch: (e) => Jn.bind(e)
}), Ar = (e, t) => e !== r && !e.__isScriptSetup && f(e, t), jr = {
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
			else if (Ar(i, t)) return s[t] = 1, i[t];
			else if (a !== r && f(a, t)) return s[t] = 2, a[t];
			else if (f(o, t)) return s[t] = 3, o[t];
			else if (n !== r && f(n, t)) return s[t] = 4, n[t];
			else Fr && (s[t] = 0);
		}
		let u = kr[t], d, p;
		if (u) return t === "$attrs" && at(e.attrs, "get", ""), u(e);
		if ((d = c.__cssModules) && (d = d[t])) return d;
		if (n !== r && f(n, t)) return s[t] = 4, n[t];
		if (p = l.config.globalProperties, f(p, t)) return p[t];
	},
	set({ _: e }, t, n) {
		let { data: i, setupState: a, ctx: o } = e;
		return Ar(a, t) ? (a[t] = n, !0) : i !== r && f(i, t) ? (i[t] = n, !0) : f(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(n[c] || e !== r && c[0] !== "$" && f(e, c) || Ar(t, c) || f(o, c) || f(i, c) || f(kr, c) || f(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? f(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Mr() {
	return Nr("useSlots").slots;
}
function Nr(e) {
	let t = ga();
	return t.setupContext ||= Aa(t);
}
function Pr(e) {
	return p(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Fr = !0;
function Ir(e) {
	let t = Br(e), n = e.proxy, r = e.ctx;
	Fr = !1, t.beforeCreate && Rr(t.beforeCreate, e, "bc");
	let { data: i, computed: o, methods: s, watch: c, provide: l, inject: u, created: d, beforeMount: f, mounted: m, beforeUpdate: h, updated: g, activated: v, deactivated: y, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: w, render: T, renderTracked: E, renderTriggered: ee, errorCaptured: te, serverPrefetch: ne, expose: re, inheritAttrs: ie, components: ae, directives: oe, filters: se } = t;
	if (u && Lr(u, r, null), s) for (let e in s) {
		let t = s[e];
		_(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		b(t) && (e.data = /* @__PURE__ */ Vt(t));
	}
	if (Fr = !0, o) for (let e in o) {
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
	if (c) for (let e in c) zr(c[e], r, n, e);
	if (l) {
		let e = _(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Vn(t, e[t]);
		});
	}
	d && Rr(d, e, "c");
	function D(e, t) {
		p(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (D(mr, f), D(hr, m), D(gr, h), D(_r, g), D(cr, v), D(lr, y), D(Cr, te), D(Sr, E), D(xr, ee), D(vr, S), D(yr, w), D(br, ne), p(re)) if (re.length) {
		let t = e.exposed ||= {};
		re.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	T && e.render === a && (e.render = T), ie != null && (e.inheritAttrs = ie), ae && (e.components = ae), oe && (e.directives = oe), ne && tr(e);
}
function Lr(e, t, n = a) {
	p(e) && (e = Gr(e));
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
function Rr(e, t, n) {
	_n(p(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function zr(e, t, n, r) {
	let i = r.includes(".") ? Yn(n, r) : () => n[r];
	if (v(e)) {
		let n = t[e];
		_(n) && Kn(i, n);
	} else if (_(e)) Kn(i, e.bind(n));
	else if (b(e)) if (p(e)) e.forEach((e) => zr(e, t, n, r));
	else {
		let r = _(e.handler) ? e.handler.bind(n) : t[e.handler];
		_(r) && Kn(i, r, e);
	}
}
function Br(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Vr(c, e, o, !0)), Vr(c, t, o)), b(t) && a.set(t, c), c;
}
function Vr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Vr(e, a, n, !0), i && i.forEach((t) => Vr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Hr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Hr = {
	data: Ur,
	props: Jr,
	emits: Jr,
	methods: qr,
	computed: qr,
	beforeCreate: Kr,
	created: Kr,
	beforeMount: Kr,
	mounted: Kr,
	beforeUpdate: Kr,
	updated: Kr,
	beforeDestroy: Kr,
	beforeUnmount: Kr,
	destroyed: Kr,
	unmounted: Kr,
	activated: Kr,
	deactivated: Kr,
	errorCaptured: Kr,
	serverPrefetch: Kr,
	components: qr,
	directives: qr,
	watch: Yr,
	provide: Ur,
	inject: Wr
};
function Ur(e, t) {
	return t ? e ? function() {
		return l(_(e) ? e.call(this, this) : e, _(t) ? t.call(this, this) : t);
	} : t : e;
}
function Wr(e, t) {
	return qr(Gr(e), Gr(t));
}
function Gr(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function Kr(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function qr(e, t) {
	return e ? l(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Jr(e, t) {
	return e ? p(e) && p(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : l(/* @__PURE__ */ Object.create(null), Pr(e), Pr(t ?? {})) : t;
}
function Yr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = l(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = Kr(e[r], t[r]);
	return n;
}
function Xr() {
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
var Zr = 0;
function Qr(e, t) {
	return function(n, r = null) {
		_(n) || (n = l({}, n)), r != null && !b(r) && (r = null);
		let i = Xr(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: Zr++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Na,
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
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, ja(u.component);
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
				let t = $r;
				$r = c;
				try {
					return e();
				} finally {
					$r = t;
				}
			}
		};
		return c;
	};
}
var $r = null, ei = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${re(t)}Modifiers`] || e[`${ae(t)}Modifiers`];
function ti(e, t, ...n) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || r, a = n, o = t.startsWith("update:"), s = o && ei(i, t.slice(7));
	s && (s.trim && (a = n.map((e) => v(e) ? e.trim() : e)), s.number && (a = n.map(ue)));
	let c, l = i[c = se(t)] || i[c = se(re(t))];
	!l && o && (l = i[c = se(ae(t))]), l && _n(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, _n(u, e, 6, a);
	}
}
var ni = /* @__PURE__ */ new WeakMap();
function ri(e, t, n = !1) {
	let r = n ? ni : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!_(e)) {
		let r = (e) => {
			let n = ri(e, t, !0);
			n && (s = !0, l(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (b(e) && r.set(e, null), null) : (p(a) ? a.forEach((e) => o[e] = null) : l(o, a), b(e) && r.set(e, o), o);
}
function ii(e, t) {
	return !e || !s(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), f(e, t[0].toLowerCase() + t.slice(1)) || f(e, ae(t)) || f(e, t));
}
function ai(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Rn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = sa(u.call(t, e, d, f, m, p, h)), y = s;
		} else {
			let e = t;
			v = sa(e.length > 1 ? e(f, {
				attrs: s,
				slots: o,
				emit: l
			}) : e(f, null)), y = t.props ? s : oi(s);
		}
	} catch (t) {
		qi.length = 0, vn(t, e, 1), v = U(Gi);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(c) && (y = si(y, a)), b = aa(b, y, !1, !0));
	}
	return n.dirs && (b = aa(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && $n(b, n.transition), v = b, Rn(_), v;
}
var oi = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || s(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, si = (e, t) => {
	let n = {};
	for (let r in e) (!c(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function ci(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? li(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (di(o, r, n) && !ii(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? li(r, o, l) : !0 : !!o;
	return !1;
}
function li(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (di(t, e, a) && !ii(n, a)) return !0;
	}
	return !1;
}
function di(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && b(r) && b(i) ? !Se(r, i) : r !== i;
}
function fi({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var pi = {}, mi = () => Object.create(pi), hi = (e) => Object.getPrototypeOf(e) === pi;
function gi(e, t, n, r = !1) {
	let i = {}, a = mi();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), vi(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ Ht(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function _i(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ j(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (ii(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (f(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = re(o);
					i[t] = yi(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		vi(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !f(t, a) && ((r = ae(a)) === a || !f(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = yi(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !f(t, e)) && (delete a[e], l = !0);
	}
	l && ot(e.attrs, "set", "");
}
function vi(e, t, n, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (t) for (let r in t) {
		if (ee(r)) continue;
		let l = t[r], u;
		a && f(a, u = re(r)) ? !o || !o.includes(u) ? n[u] = l : (c ||= {})[u] = l : ii(e.emitsOptions, r) || (!(r in i) || l !== i[r]) && (i[r] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ j(n), i = c || r;
		for (let r = 0; r < o.length; r++) {
			let s = o[r];
			n[s] = yi(a, t, s, i[s], e, !f(i, s));
		}
	}
	return s;
}
function yi(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = f(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && _(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = ya(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === ae(n)) && (r = !0));
	}
	return r;
}
var bi = /* @__PURE__ */ new WeakMap();
function xi(e, t, n = !1) {
	let a = n ? bi : t.propsCache, o = a.get(e);
	if (o) return o;
	let s = e.props, c = {}, u = [], d = !1;
	if (!_(e)) {
		let r = (e) => {
			d = !0;
			let [n, r] = xi(e, t, !0);
			l(c, n), r && u.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!s && !d) return b(e) && a.set(e, i), i;
	if (p(s)) for (let e = 0; e < s.length; e++) {
		let t = re(s[e]);
		Si(t) && (c[t] = r);
	}
	else if (s) for (let e in s) {
		let t = re(e);
		if (Si(t)) {
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
function Si(e) {
	return e[0] !== "$" && !ee(e);
}
var Ci = (e) => e === "_" || e === "_ctx" || e === "$stable", wi = (e) => p(e) ? e.map(sa) : [sa(e)], Ti = (e, t, n) => {
	if (t._n) return t;
	let r = F((...e) => wi(t(...e)), n);
	return r._c = !1, r;
}, Ei = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Ci(n)) continue;
		let i = e[n];
		if (_(i)) t[n] = Ti(n, i, r);
		else if (i != null) {
			let e = wi(i);
			t[n] = () => e;
		}
	}
}, Di = (e, t) => {
	let n = wi(t);
	e.slots.default = () => n;
}, Oi = (e, t, n) => {
	for (let r in t) (n || !Ci(r)) && (e[r] = t[r]);
}, ki = (e, t, n) => {
	let r = e.slots = mi();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Oi(r, t, n), n && le(r, "_", e, !0)) : Ei(t, r);
	} else t && Di(e, t);
}, Ai = (e, t, n) => {
	let { vnode: i, slots: a } = e, o = !0, s = r;
	if (i.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? o = !1 : Oi(a, t, n) : (o = !t.$stable, Ei(t, a)), s = t;
	} else t && (Di(e, t), s = { default: 1 });
	if (o) for (let e in a) !Ci(e) && s[e] == null && delete a[e];
}, ji = Ui;
function Mi(e) {
	return Ni(e);
}
function Ni(e, t) {
	let n = fe();
	n.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = a, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !ea(e, t) && (r = be(e), ge(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case Wi:
				y(e, t, n, r);
				break;
			case Gi:
				b(e, t, n, r);
				break;
			case Ki:
				e ?? x(t, n, r, o);
				break;
			case R:
				ae(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? oe(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, Ce);
		}
		u != null && i ? ir(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && ir(e.ref, null, a, e, !0);
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
				n && n._beginPatch(), ne(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, T = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && te(e.children, d, null, r, i, Pi(e, a), s, u), _ && Bn(e, null, r, "created"), E(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ee(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && da(f, r, e);
		}
		_ && Bn(e, null, r, "beforeMount");
		let v = Ii(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && ji(() => {
			try {
				f && da(f, r, e), v && g.enter(d), _ && Bn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, E = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Hi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				E(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, te = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? ca(e[l]) : sa(e[l]), t, n, r, i, a, o, s);
	}, ne = (e, t, n, i, a, o, s) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || r, h = t.props || r, g;
		if (n && Fi(n, !1), (g = h.onVnodeBeforeUpdate) && da(g, n, t, e), f && Bn(t, e, n, "beforeUpdate"), n && Fi(n, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? re(e.dynamicChildren, d, l, n, i, Pi(t, a), o) : s || de(e, t, l, null, n, i, Pi(t, a), o, !1), u > 0) {
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
		((g = h.onVnodeUpdated) || f) && ji(() => {
			g && da(g, n, t, e), f && Bn(t, e, n, "updated");
		}, i);
	}, re = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === R || !ea(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
		}
	}, ie = (e, t, n, i, a) => {
		if (t !== n) {
			if (t !== r) for (let r in t) !ee(r) && !(r in n) && c(e, r, t[r], null, a, i);
			for (let r in n) {
				if (ee(r)) continue;
				let o = n[r], s = t[r];
				o !== s && r !== "value" && c(e, r, s, o, a, i);
			}
			"value" in n && c(e, "value", t.value, n.value, a);
		}
	}, ae = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), te(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (re(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Li(e, t, !0)) : de(e, t, n, f, i, a, s, c, l);
	}, oe = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : se(t, n, r, i, a, o, c) : D(e, t, c);
	}, se = (e, t, n, r, i, a, o) => {
		let s = e.component = ma(e, r, i);
		if (sr(e) && (s.ctx.renderer = Ce), Ca(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, le, o), !e.el) {
				let r = s.subTree = U(Gi);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else le(s, e, t, n, i, a, o);
	}, D = (e, t, n) => {
		let r = t.component = e.component;
		if (ci(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			ue(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, le = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = zi(e);
					if (n) {
						t && (t.el = c.el, ue(e, t, o)), n.asyncDep.then(() => {
							ji(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Fi(e, !1), t ? (t.el = c.el, ue(e, t, o)) : t = c, n && ce(n), (d = t.props && t.props.onVnodeBeforeUpdate) && da(d, s, t, c), Fi(e, !0);
				let f = ai(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), be(p), e, i, a), t.el = f.el, u === null && fi(e, f.el), r && ji(r, i), (d = t.props && t.props.onVnodeUpdated) && ji(() => da(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = or(t);
				if (Fi(e, !1), l && ce(l), !m && (o = c && c.onVnodeBeforeMount) && da(o, d, t), Fi(e, !0), s && k) {
					let t = () => {
						e.subTree = ai(e), k(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = ai(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && ji(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					ji(() => da(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && or(d.vnode) && d.vnode.shapeFlag & 256) && e.a && ji(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ne(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => kn(u), Fi(e, !0), l();
	}, ue = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, _i(e, t.props, r, n), Ai(e, t.children, n), Je(), Mn(e), Ye();
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
		m & 8 ? (u & 16 && ye(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? me(l, d, n, r, i, a, o, s, c) : ye(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && te(d, n, r, i, a, o, s, c));
	}, pe = (e, t, n, r, a, o, s, c, l) => {
		e ||= i, t ||= i;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let r = t[p] = l ? ca(t[p]) : sa(t[p]);
			v(e[p], r, n, null, a, o, s, c, l);
		}
		u > d ? ye(e, a, o, !0, !1, f) : te(t, n, r, a, o, s, c, l, f);
	}, me = (e, t, n, r, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], i = t[u] = l ? ca(t[u]) : sa(t[u]);
			if (ea(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], i = t[p] = l ? ca(t[p]) : sa(t[p]);
			if (ea(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, i = e < d ? t[e].el : r;
				for (; u <= p;) v(null, t[u] = l ? ca(t[u]) : sa(t[u]), n, i, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) ge(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? ca(t[u]) : sa(t[u]);
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
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && ea(r, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? ge(r, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(r, t[i], n, null, a, o, s, c, l), y++);
			}
			let w = x ? Ri(C) : i;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, i = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Vi(f) : r;
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
		if (c === Ki) {
			S(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) if (r === 0) l.persisted && !a[Qn] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), ji(() => l.enter(a), i));
		else {
			let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? s(a) : o(a, t, n);
			}, d = () => {
				let e = a._isLeaving || !!a[Qn];
				a._isLeaving && a[Qn](!0), l.persisted && !e ? u() : r(a, () => {
					u(), c && c();
				});
			};
			i ? i(a, u, d) : d();
		}
		else o(a, t, n);
	}, ge = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (Je(), ir(s, null, n, e, !0), Ye()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !or(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && da(_, t, e), u & 6) ve(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Bn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Ce, r) : l && !l.hasOnce && (a !== R || d > 0 && d & 64) ? ye(l, t, n, !1, !0) : (a === R && d & 384 || !i && u & 16) && ye(c, t, n), r && _e(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && ji(() => {
			_ && da(_, t, e), h && Bn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, _e = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === R) {
			O(n, r);
			return;
		}
		if (t === Ki) {
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
		Bi(c), Bi(l), r && ce(r), i.stop(), a && (a.flags |= 8, ge(o, e, t, n)), s && ji(s, t), ji(() => {
			e.isUnmounted = !0;
		}, t);
	}, ye = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) ge(e[o], t, n, r, i);
	}, be = (e) => {
		if (e.shapeFlag & 6) return be(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Xn];
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
		mc: te,
		pc: de,
		pbc: re,
		n: be,
		o: e
	}, we, k;
	return t && ([we, k] = t(Ce)), {
		render: Se,
		hydrate: we,
		createApp: Qr(Se, we)
	};
}
function Pi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Fi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ii(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Li(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (p(r) && p(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = ca(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Li(t, a)), a.type === Wi && (a.patchFlag === -1 && (a = i[e] = ca(a)), a.el = t.el), a.type === Gi && !a.el && (a.el = t.el);
	}
}
function Ri(e) {
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
function zi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : zi(t);
}
function Bi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Vi(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? Vi(t.subTree) : null;
}
var Hi = (e) => e.__isSuspense;
function Ui(e, t) {
	t && t.pendingBranch ? p(e) ? t.effects.push(...e) : t.effects.push(e) : jn(e);
}
var R = /* @__PURE__ */ Symbol.for("v-fgt"), Wi = /* @__PURE__ */ Symbol.for("v-txt"), Gi = /* @__PURE__ */ Symbol.for("v-cmt"), Ki = /* @__PURE__ */ Symbol.for("v-stc"), qi = [], Ji = null;
function z(e = !1) {
	qi.push(Ji = e ? null : []);
}
function Yi() {
	qi.pop(), Ji = qi[qi.length - 1] || null;
}
var Xi = 1;
function Zi(e, t = !1) {
	Xi += e, e < 0 && Ji && t && (Ji.hasOnce = !0);
}
function Qi(e) {
	return e.dynamicChildren = Xi > 0 ? Ji || i : null, Yi(), Xi > 0 && Ji && Ji.push(e), e;
}
function B(e, t, n, r, i, a) {
	return Qi(H(e, t, n, r, i, a, !0));
}
function V(e, t, n, r, i) {
	return Qi(U(e, t, n, r, i, !0));
}
function $i(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function ea(e, t) {
	return e.type === t.type && e.key === t.key;
}
var ta = ({ key: e }) => e ?? null, na = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : v(e) || /* @__PURE__ */ M(e) || _(e) ? {
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
		key: t && ta(t),
		ref: t && na(t),
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
	return s ? (la(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= v(n) ? 8 : 16), Xi > 0 && !o && Ji && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Ji.push(c), c;
}
var U = ra;
function ra(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === wr) && (e = Gi), $i(e)) {
		let r = aa(e, t, !0);
		return n && la(r, n), Xi > 0 && !a && Ji && (r.shapeFlag & 6 ? Ji[Ji.indexOf(e)] = r : Ji.push(r)), r.patchFlag = -2, r;
	}
	if (Ma(e) && (e = e.__vccOpts), t) {
		t = ia(t);
		let { class: e, style: n } = t;
		e && !v(e) && (t.class = O(e)), b(n) && (/* @__PURE__ */ Jt(n) && !p(n) && (n = l({}, n)), t.style = pe(n));
	}
	let o = v(e) ? 1 : Hi(e) ? 128 : Zn(e) ? 64 : b(e) ? 4 : _(e) ? 2 : 0;
	return H(e, t, n, r, i, o, a, !0);
}
function ia(e) {
	return e ? /* @__PURE__ */ Jt(e) || hi(e) ? l({}, e) : e : null;
}
function aa(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? ua(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && ta(l),
		ref: t && t.ref ? n && a ? p(a) ? a.concat(na(t)) : [a, na(t)] : na(t) : a,
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
		ssContent: e.ssContent && aa(e.ssContent),
		ssFallback: e.ssFallback && aa(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && $n(u, c.clone(u)), u;
}
function W(e = " ", t = 0) {
	return U(Wi, null, e, t);
}
function oa(e, t) {
	let n = U(Ki, null, e);
	return n.staticCount = t, n;
}
function G(e = "", t = !1) {
	return t ? (z(), V(Gi, null, e)) : U(Gi, null, e);
}
function sa(e) {
	return e == null || typeof e == "boolean" ? U(Gi) : p(e) ? U(R, null, e.slice()) : $i(e) ? ca(e) : U(Wi, null, String(e));
}
function ca(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : aa(e);
}
function la(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (p(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), la(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !hi(t) ? t._ctx = In : r === 3 && In && (In.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else _(t) ? (t = {
		default: t,
		_ctx: In
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [W(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function ua(...e) {
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
function da(e, t, n, r = null) {
	_n(e, t, 7, [n, r]);
}
var fa = Xr(), pa = 0;
function ma(e, t, n) {
	let i = e.type, a = (t ? t.appContext : e.appContext) || fa, o = {
		uid: pa++,
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
		propsOptions: xi(i, a),
		emitsOptions: ri(i, a),
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
	return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = ti.bind(null, o), e.ce && e.ce(o), o;
}
var ha = null, ga = () => ha || In, _a, va;
{
	let e = fe(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	_a = t("__VUE_INSTANCE_SETTERS__", (e) => ha = e), va = t("__VUE_SSR_SETTERS__", (e) => Sa = e);
}
var ya = (e) => {
	let t = ha;
	return _a(e), e.scope.on(), () => {
		e.scope.off(), _a(t);
	};
}, ba = () => {
	ha && ha.scope.off(), _a(null);
};
function xa(e) {
	return e.vnode.shapeFlag & 4;
}
var Sa = !1;
function Ca(e, t = !1, n = !1) {
	t && va(t);
	let { props: r, children: i } = e.vnode, a = xa(e);
	gi(e, r, a, t), ki(e, i, n || t);
	let o = a ? wa(e, t) : void 0;
	return t && va(!1), o;
}
function wa(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, jr);
	let { setup: r } = n;
	if (r) {
		Je();
		let n = e.setupContext = r.length > 1 ? Aa(e) : null, i = ya(e), a = gn(r, e, 0, [e.props, n]), o = x(a);
		if (Ye(), i(), (o || e.sp) && !or(e) && tr(e), o) {
			if (a.then(ba, ba), t) return a.then((n) => {
				Ta(e, n, t);
			}).catch((t) => {
				vn(t, e, 0);
			});
			e.asyncDep = a;
		} else Ta(e, a, t);
	} else Oa(e, t);
}
function Ta(e, t, n) {
	_(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : b(t) && (e.setupState = tn(t)), Oa(e, n);
}
var Ea, Da;
function Oa(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && Ea && !r.render) {
			let t = r.template || Br(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r;
				r.render = Ea(t, l(l({
					isCustomElement: n,
					delimiters: a
				}, i), o));
			}
		}
		e.render = r.render || a, Da && Da(e);
	}
	{
		let t = ya(e);
		Je();
		try {
			Ir(e);
		} finally {
			Ye(), t();
		}
	}
}
var ka = { get(e, t) {
	return at(e, "get", ""), e[t];
} };
function Aa(e) {
	return {
		attrs: new Proxy(e.attrs, ka),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function ja(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(tn(Yt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in kr) return kr[n](e);
		},
		has(e, t) {
			return t in e || t in kr;
		}
	}) : e.proxy;
}
function Ma(e) {
	return _(e) && "__vccOpts" in e;
}
var K = (e, t) => /* @__PURE__ */ ln(e, t, Sa), Na = "3.5.38", Pa = void 0, Fa = typeof window < "u" && window.trustedTypes;
if (Fa) try {
	Pa = /* @__PURE__ */ Fa.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Ia = Pa ? (e) => Pa.createHTML(e) : (e) => e, La = "http://www.w3.org/2000/svg", Ra = "http://www.w3.org/1998/Math/MathML", za = typeof document < "u" ? document : null, Ba = za && /* @__PURE__ */ za.createElement("template"), Va = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? za.createElementNS(La, e) : t === "mathml" ? za.createElementNS(Ra, e) : n ? za.createElement(e, { is: n }) : za.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => za.createTextNode(e),
	createComment: (e) => za.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => za.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			Ba.innerHTML = Ia(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Ba.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Ha = /* @__PURE__ */ Symbol("_vtc");
function Ua(e, t, n) {
	let r = e[Ha];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Wa = /* @__PURE__ */ Symbol("_vod"), Ga = /* @__PURE__ */ Symbol("_vsh"), Ka = /* @__PURE__ */ Symbol(""), qa = /(?:^|;)\s*display\s*:/;
function Ja(e, t, n) {
	let r = e.style, i = v(n), a = !1;
	if (n && !i) {
		if (t) if (v(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? Xa(r, t, "");
		}
		else for (let e in t) n[e] ?? Xa(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Xa(r, i, "") : eo(e, i, !v(t) && t ? t[i] : void 0, o) || Xa(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Ka];
			e && (n += ";" + e), r.cssText = n, a = qa.test(n);
		}
	} else t && e.removeAttribute("style");
	Wa in e && (e[Wa] = a ? r.display : "", e[Ga] && (r.display = "none"));
}
var Ya = /\s*!important$/;
function Xa(e, t, n) {
	if (p(n)) n.forEach((n) => Xa(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = $a(e, t);
		Ya.test(n) ? e.setProperty(ae(r), n.replace(Ya, ""), "important") : e[r] = n;
	}
}
var Za = [
	"Webkit",
	"Moz",
	"ms"
], Qa = {};
function $a(e, t) {
	let n = Qa[t];
	if (n) return n;
	let r = re(t);
	if (r !== "filter" && r in e) return Qa[t] = r;
	r = oe(r);
	for (let n = 0; n < Za.length; n++) {
		let i = Za[n] + r;
		if (i in e) return Qa[t] = i;
	}
	return t;
}
function eo(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && v(r) && n === r;
}
var to = "http://www.w3.org/1999/xlink";
function no(e, t, n, r, i, a = ye(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(to, t.slice(6, t.length)) : e.setAttributeNS(to, t, n) : n == null || a && !be(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : y(n) ? String(n) : n);
}
function ro(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Ia(n) : n);
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
function io(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function ao(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var oo = /* @__PURE__ */ Symbol("_vei");
function so(e, t, n, r, i = null) {
	let a = e[oo] || (e[oo] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = lo(t);
		r ? io(e, n, a[t] = mo(r, i), s) : o && (ao(e, n, o, s), a[t] = void 0);
	}
}
var co = /(?:Once|Passive|Capture)$/;
function lo(e) {
	let t;
	if (co.test(e)) {
		t = {};
		let n;
		for (; n = e.match(co);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : ae(e.slice(2)), t];
}
var uo = 0, fo = /* @__PURE__ */ Promise.resolve(), po = () => uo ||= (fo.then(() => uo = 0), Date.now());
function mo(e, t) {
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
	return n.value = e, n.attached = po(), n;
}
var ho = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, go = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? Ua(e, r, o) : t === "style" ? Ja(e, n, r) : s(t) ? c(t) || so(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : _o(e, t, r, o)) ? (ro(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && no(e, t, r, o, a, t !== "value")) : e._isVueCE && (vo(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !v(r))) ? ro(e, re(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), no(e, t, r, o));
};
function _o(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && ho(t) && _(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return ho(t) && v(n) ? !1 : t in e;
}
function vo(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = re(t);
	return Array.isArray(n) ? n.some((e) => re(e) === r) : Object.keys(n).some((e) => re(e) === r);
}
var yo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return p(t) ? (e) => ce(t, e) : t;
};
function bo(e) {
	e.target.composing = !0;
}
function xo(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var So = /* @__PURE__ */ Symbol("_assign");
function Co(e, t, n) {
	return t && (e = e.trim()), n && (e = ue(e)), e;
}
var wo = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[So] = yo(i);
		let a = r || i.props && i.props.type === "number";
		io(e, t ? "change" : "input", (t) => {
			t.target.composing || e[So](Co(e.value, n, a));
		}), (n || a) && io(e, "change", () => {
			e.value = Co(e.value, n, a);
		}), t || (io(e, "compositionstart", bo), io(e, "compositionend", xo), io(e, "change", xo));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[So] = yo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? ue(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, To = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = h(t);
		io(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? ue(Do(e)) : Do(e));
			e[So](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, Dn(() => {
				e._assigning = !1;
			});
		}), e[So] = yo(r);
	},
	mounted(e, { value: t }) {
		Eo(e, t);
	},
	beforeUpdate(e, t, n) {
		e[So] = yo(n);
	},
	updated(e, { value: t }) {
		e._assigning || Eo(e, t);
	}
};
function Eo(e, t) {
	let n = e.multiple, r = p(t);
	if (!(n && !r && !h(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = Do(a);
			if (n) if (r) {
				let e = typeof o;
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = Ce(t, o) > -1;
			} else a.selected = t.has(o);
			else if (Se(Do(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function Do(e) {
	return "_value" in e ? e._value : e.value;
}
var Oo = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], ko = {
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
	exact: (e, t) => Oo.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ao = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = ko[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, jo = /* @__PURE__ */ l({ patchProp: go }, Va), Mo;
function No() {
	return Mo ||= Mi(jo);
}
var Po = ((...e) => {
	let t = No().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = Io(e);
		if (!r) return;
		let i = t._component;
		!_(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, Fo(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function Fo(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Io(e) {
	return v(e) ? document.querySelector(e) : e;
}
//#endregion
//#region src/functions/species-builder/example-species/goblins.ts
var Lo = {
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
}, Ro = [
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
], zo = [
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
], Bo = [
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
function Vo() {
	return Uo();
}
function Ho() {
	return Uo({ subspecies: [{
		careerTable: { rows: Bo },
		characteristics: {
			...Lo,
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
function Uo(e = {}) {
	return {
		age: "2d10+8",
		careerTable: { rows: Ro },
		characteristics: Lo,
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
		skills: zo,
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
function Wo() {
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
var Go = [
	{
		createDefinition: Wo,
		description: "A deliberately extreme species for stress-testing formulas and generated Traits.",
		id: "viltrumite",
		label: "Viltrumite"
	},
	{
		createDefinition: Vo,
		description: "A Goblin player species seed using the sample species Journal direction.",
		id: "goblin",
		label: "Goblin"
	},
	{
		createDefinition: Ho,
		description: "A Goblin seed with Night Goblin configured as a subspecies.",
		id: "night-goblin",
		label: "Night Goblin"
	}
], Ko = Go.map(({ description: e, id: t, label: n }) => ({
	description: e,
	id: t,
	label: n
}));
function qo() {
	return [Wo(), Ho()];
}
function Jo(e) {
	return Go.find((t) => t.id === e)?.createDefinition();
}
//#endregion
//#region node_modules/pinia/dist/pinia.mjs
var Yo = typeof window < "u", Xo, Zo = (e) => Xo = e, Qo = Symbol();
function $o(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var es;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(es ||= {});
var ts = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function ns(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function rs(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		cs(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function is(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function as(e) {
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
var os = typeof navigator == "object" ? navigator : { userAgent: "" }, ss = /Macintosh/.test(os.userAgent) && /AppleWebKit/.test(os.userAgent) && !/Safari/.test(os.userAgent), cs = Yo ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !ss ? ls : "msSaveOrOpenBlob" in os ? us : ds : () => {};
function ls(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? as(r) : is(r.href) ? rs(e, t, n) : (r.target = "_blank", as(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		as(r);
	}, 0));
}
function us(e, t = "download", n) {
	if (typeof e == "string") if (is(e)) rs(e, t, n);
	else {
		let t = document.createElement("a");
		t.href = e, t.target = "_blank", setTimeout(function() {
			as(t);
		});
	}
	else navigator.msSaveOrOpenBlob(ns(e, n), t);
}
function ds(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return rs(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(ts.HTMLElement)) || "safari" in ts, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || ss) && typeof FileReader < "u") {
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
var { assign: fs } = Object;
function ps() {
	let e = ke(!0), t = e.run(() => /* @__PURE__ */ N({})), n = [], r = [], i = Yt({
		install(e) {
			Zo(i), i._a = e, e.provide(Qo, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var ms = () => {};
function hs(e, t, n, r = ms) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && Ae() && je(i), i;
}
function gs(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var _s = (e) => e(), vs = Symbol(), ys = Symbol();
function bs(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		$o(i) && $o(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ M(r) && !/* @__PURE__ */ Gt(r) ? e[n] = bs(i, r) : e[n] = r;
	}
	return e;
}
var xs = Symbol();
function Ss(e) {
	return !$o(e) || !Object.prototype.hasOwnProperty.call(e, xs);
}
var { assign: Cs } = Object;
function ws(e) {
	return !!(/* @__PURE__ */ M(e) && e.effect);
}
function Ts(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), Cs(/* @__PURE__ */ nn(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Yt(K(() => {
			Zo(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = Es(e, l, t, n, r, !0), c;
}
function Es(e, t, n = {}, r, i, a) {
	let o, s = Cs({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = r.state.value[e];
	!a && !p && (r.state.value[e] = {});
	let m;
	function h(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: es.patchFunction,
			storeId: e,
			events: void 0
		}) : (bs(r.state.value[e], t), n = {
			type: es.patchObject,
			payload: t,
			storeId: e,
			events: void 0
		});
		let i = m = Symbol();
		Dn().then(() => {
			m === i && (l = !0);
		}), u = !0, gs(d, n, r.state.value[e]);
	}
	let g = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			Cs(e, t);
		});
	} : ms;
	function _() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let v = (t, n = "") => {
		if (vs in t) return t[ys] = n, t;
		let i = function() {
			Zo(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			gs(f, {
				args: n,
				name: i[ys],
				store: y,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : y, n);
			} catch (e) {
				throw gs(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (gs(a, e), e)).catch((e) => (gs(o, e), Promise.reject(e))) : (gs(a, l), l);
		};
		return i[vs] = !0, i[ys] = n, i;
	}, y = /* @__PURE__ */ Vt({
		_p: r,
		$id: e,
		$onAction: hs.bind(null, f),
		$patch: h,
		$reset: g,
		$subscribe(t, n = {}) {
			let i = hs(d, t, n.detached, () => a()), a = o.run(() => Kn(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: es.direct,
					events: void 0
				}, r);
			}, Cs({}, c, n)));
			return i;
		},
		$dispose: _
	});
	r._s.set(e, y);
	let b = (r._a && r._a.runWithContext || _s)(() => r._e.run(() => (o = ke()).run(() => t({ action: v }))));
	for (let t in b) {
		let n = b[t];
		/* @__PURE__ */ M(n) && !ws(n) || /* @__PURE__ */ Gt(n) ? a || (p && Ss(n) && (/* @__PURE__ */ M(n) ? n.value = p[t] : bs(n, p[t])), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = v(n, t), s.actions[t] = n);
	}
	return Cs(y, b), Cs(/* @__PURE__ */ j(y), b), Object.defineProperty(y, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			h((t) => {
				Cs(t, e);
			});
		}
	}), r._p.forEach((e) => {
		Cs(y, o.run(() => e({
			store: y,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), p && a && n.hydrate && n.hydrate(y.$state, p), l = !0, u = !0, y;
}
function Ds(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Un();
		return n ||= o ? Hn(Qo, null) : null, n && Zo(n), n = Xo, n._s.has(e) || (i ? Es(e, t, r, n) : Ts(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
function Os(e) {
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
function q(e, t, n) {
	n !== void 0 && (e[t] = n);
}
//#endregion
//#region src/functions/species-builder/item-reference-names.ts
function ks(e) {
	return js(e.name, e.specification);
}
function As(e) {
	let t = e.name.trim();
	if (!e.item) return t;
	if (!t) return ks(e.item);
	if (!Ns(t)) {
		if (e.item.specification) return js(t, e.item.specification);
		if (Ns(e.item.name) && Ps(t) === Ps(e.item.name)) return e.item.name.trim();
	}
	return t;
}
function js(e, t) {
	let n = e.trim(), r = t?.trim();
	return !n || !r || Ms(n) ? n : `${n} (${r})`;
}
function Ms(e) {
	return /\(([^()]*)\)\s*$/.exec(e.trim())?.[1]?.trim() ?? "";
}
function Ns(e) {
	return /\([^()]*\)\s*$/.test(e.trim());
}
function Ps(e) {
	return e.split("(")[0]?.trim().toLocaleLowerCase() ?? "";
}
//#endregion
//#region src/functions/species-builder/replacement-row-records.ts
function Fs(e) {
	if (!e) return;
	let t = e.flatMap((e) => {
		let t = As(e.rolled), n = As(e.replacement);
		return t && n ? [[t, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function Is(e) {
	if (!e) return;
	let t = e.flatMap((e) => {
		let t = As(e.rolled), n = e.replacements.map(As).filter((e) => e.length > 0);
		return t && n.length > 0 ? [[t, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
//#endregion
//#region src/functions/species-builder/linked-grant-records.ts
function Ls(e) {
	if (!e || e.length === 0) return;
	let t = e.map(As).filter((e) => e.length > 0);
	return t.length > 0 ? t : void 0;
}
function Rs(e) {
	if (!e || e.length === 0) return;
	let t = e.flatMap((e) => {
		let t = e.choices.map(As).filter((e) => e.length > 0);
		return t.length > 0 ? [t.join(", ")] : [];
	});
	return t.length > 0 ? t : void 0;
}
//#endregion
//#region src/functions/species-builder/subspecies-list-fields.ts
function zs(e) {
	return Ls(e.linkedSkills) ?? e.skills;
}
function Bs(e, t) {
	return Ks(zs(e), t.skillsAdded, t.skillsRemoved);
}
function Vs(e) {
	return Rs(e.linkedTalents) ?? e.talents;
}
function Hs(e, t) {
	return Ks(Vs(e), t.talentsAdded, t.talentsRemoved);
}
function Us(e, t) {
	return Gs(Ls(e.linkedTraits) ?? e.traits, t);
}
function Ws(e, t, n) {
	let r = Ks(Us(e), t.traitsAdded, t.traitsRemoved);
	return r ? Gs(r, n) : n ? Gs(Us(e), n) : void 0;
}
function Gs(e, t) {
	if (!t) return e;
	let n = e ? [...e] : [];
	return n.includes(t) || n.push(t), n;
}
function Ks(e, t, n) {
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
}, qs = {
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
}, Js = {
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
function Ys(e) {
	return e in qs;
}
//#endregion
//#region src/functions/species-builder/wound-formula/compiler.ts
function Xs(e) {
	let t = [], n = /* @__PURE__ */ new Set(), r = e.trim();
	return r = r.replaceAll(/@([A-Za-z][\dA-Za-z]*)/g, (e, t) => {
		let r = Zs(t);
		return n.add(r), r;
	}), r = r.replaceAll(/{([^{}]+)}/g, (e, n) => Qs(t, n, "total")), r = r.replaceAll(/\[([^[\]]+)]/g, (e, n) => Qs(t, n, "bonus")), {
		expression: r,
		references: t,
		usedKeywords: n
	};
}
function Zs(e) {
	if ((/* @__PURE__ */ "ablaze.advantage.age.bleeding.blinded.broken.corruption.deafened.entangled.fate.fatigued.fortune.height.poisoned.rank.resilience.resolve.sb.sbMultiplier.scale.sin.size.status.stunned.tb.tbMultiplier.weight.wpb.wpbMultiplier.xp".split(".")).includes(e)) return e;
	throw Error(`Unknown wound formula keyword: @${e}`);
}
function Qs(e, t, n) {
	let r = $s(t, n, e), i = e.find((e) => ec(e, r));
	return i ? i.variableName : (e.push(r), r.variableName);
}
function $s(e, t, n) {
	let [r, i] = tc(e), a = nc(r), o = oc(ac(r, i, t), n);
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
	return i && (s.characteristicOverride = rc(i)), s;
}
function ec(e, t) {
	return e.characteristicKey === t.characteristicKey && e.characteristicOverride === t.characteristicOverride && e.kind === t.kind && e.name === t.name && e.source === t.source;
}
function tc(e) {
	let t = e.split("|").map((e) => e.trim());
	if (t.length > 2 || !t[0]) throw Error(`Invalid wound formula attribute reference: ${e}`);
	return [t[0], t[1]];
}
function nc(e) {
	let t = e.trim().toLocaleLowerCase();
	return Ys(t) ? t : Js[t] ?? ic[t];
}
function rc(e) {
	let t = nc(e);
	if (!t) throw Error(`Unknown wound formula characteristic: ${e}`);
	return t;
}
var ic = {
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
function ac(e, t, n) {
	let [r, ...i] = [e, t].flatMap((e) => e ? e.match(/\d+|[A-Za-z]+/g) ?? [] : []), a = r ? [r.toLocaleLowerCase(), ...i.map((e) => e.charAt(0).toLocaleUpperCase() + e.slice(1))].join("") : "attribute";
	return n === "bonus" ? `${a}Bonus` : a;
}
function oc(e, t) {
	let n = new Set(t.map((e) => e.variableName));
	if (!n.has(e)) return e;
	let r = 2, i = `${e}${r}`;
	for (; n.has(i);) r += 1, i = `${e}${r}`;
	return i;
}
//#endregion
//#region src/functions/species-builder/wound-formula/script-lines.ts
function sc(e) {
	let t = [];
	if (uc(e, [
		"sb",
		"tb",
		"wpb"
	]) && (t.push(...dc(e, "sb", "preWoundArgs.sb")), t.push(...dc(e, "tb", "preWoundArgs.tb")), t.push(...dc(e, "wpb", "preWoundArgs.wpb"))), uc(e, [
		"sbMultiplier",
		"tbMultiplier",
		"wpbMultiplier"
	]) && (t.push("const multiplier = preWoundArgs.multiplier;"), t.push(...dc(e, "sbMultiplier", "multiplier.sb")), t.push(...dc(e, "tbMultiplier", "multiplier.tb")), t.push(...dc(e, "wpbMultiplier", "multiplier.wpb"))), uc(e, ["scale", "size"]) && (t.push(...fc()), t.push("const size = actorSizeStep();"), t.push(...dc(e, "scale", "2 ** size"))), uc(e, _c) && (t.push(...dc(e, "age", "Number(actor.system.details.age.value)")), t.push(...dc(e, "height", "Number(actor.system.details.height.value)")), t.push(...dc(e, "weight", "Number(actor.system.details.weight.value)")), t.push(...bc(e))), uc(e, vc) && (t.push(...dc(e, "xp", "actor.system.details.experience.total")), t.push(...dc(e, "fate", "actor.system.status.fate.value")), t.push(...dc(e, "fortune", "actor.system.status.fortune.value")), t.push(...dc(e, "resilience", "actor.system.status.resilience.value")), t.push(...dc(e, "resolve", "actor.system.status.resolve.value")), t.push(...dc(e, "corruption", "actor.system.status.corruption.value")), t.push(...dc(e, "sin", "actor.system.status.sin.value")), t.push(...dc(e, "advantage", "actor.system.status.advantage.value"))), uc(e, yc)) {
		t.push(...xc());
		for (let n of yc) t.push(...dc(e, n, `conditionValue("${n}")`));
	}
	return t.length ? [...t, ""] : [];
}
function cc(e) {
	let t = e.length > 0, n = e.some((e) => e.source === "skill");
	return [...pc(t), ...mc(n)];
}
function lc(e) {
	return e.map((e) => e.source === "characteristic" ? hc(e) : gc(e));
}
function uc(e, t) {
	return t.some((t) => e.has(t));
}
function dc(e, t, n) {
	return e.has(t) ? [`const ${t} = ${n};`] : [];
}
function fc() {
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
function pc(e) {
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
function mc(e) {
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
function hc(e) {
	let t = e.kind === "bonus" ? "characteristicBonus" : "characteristicTotal";
	return `const ${e.variableName} = ${t}(${JSON.stringify(e.characteristicKey)});`;
}
function gc(e) {
	let t = e.kind === "bonus" ? "skillBonus" : "skillTotal", n = e.characteristicOverride ? JSON.stringify(e.characteristicOverride) : "undefined";
	return `const ${e.variableName} = ${t}(${JSON.stringify(e.name)}, ${n});`;
}
var _c = [
	"age",
	"height",
	"rank",
	"status",
	"weight"
], vc = [
	"advantage",
	"corruption",
	"fate",
	"fortune",
	"resilience",
	"resolve",
	"sin",
	"xp"
], yc = [
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
function bc(e) {
	let t = [];
	return e.has("status") && t.push("function statusTierValue() {", "  const statusTiers = { brass: 1, silver: 2, gold: 3 };", "  const tier = actor.system.details.status.tier;", "  return statusTiers[String(tier).toLocaleLowerCase()] || Number(tier);", "}", "const status = statusTierValue();"), t.push(...dc(e, "rank", "Number(actor.system.details.status.standing)")), t;
}
function xc() {
	return [
		"function conditionValue(key) {",
		"  return actor.hasCondition(key)?.conditionValue || 0;",
		"}"
	];
}
//#endregion
//#region src/functions/species-builder/wound-formula/index.ts
function Sc(e) {
	let t = Xs(e);
	return [
		...sc(t.usedKeywords),
		...cc(t.references),
		...lc(t.references),
		"",
		`args.wounds = ${t.expression};`
	];
}
//#endregion
//#region src/functions/species-builder/wound-formula-traits.ts
var Cc = "generatedSpeciesWoundFormulaEffect", wc = "generatedSpeciesWoundFormulaTrait";
function Tc(e) {
	return e.definitions.flatMap((e) => [...Nc(e), ...Pc(e)]);
}
function Ec(e) {
	return `__${e.name.trim()}__`;
}
function Dc(e, t) {
	return `__${e.name.trim()} / ${t.name.trim()}__`;
}
function Oc({ flagScope: e, spec: t }) {
	return {
		effects: [kc({
			flagScope: e,
			spec: t
		})],
		flags: { [e]: { [wc]: {
			speciesKey: t.speciesKey,
			subspeciesKey: t.subspeciesKey ?? ""
		} } },
		img: "icons/svg/aura.svg",
		name: t.name,
		system: { description: { value: Mc(t) } },
		type: "trait"
	};
}
function kc({ flagScope: e, spec: t }) {
	return {
		changes: [],
		disabled: !1,
		flags: { [e]: { [Cc]: {
			speciesKey: t.speciesKey,
			subspeciesKey: t.subspeciesKey ?? ""
		} } },
		img: "icons/svg/aura.svg",
		name: `${t.ownerName} Wound Formula`,
		system: {
			scriptData: [{
				label: `${t.ownerName} Wound Formula Capture`,
				script: Ac(),
				trigger: "preWoundCalc"
			}, {
				label: `${t.ownerName} Wound Formula`,
				script: jc(t),
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
function Ac() {
	return [
		"// Generated by WFRP4e Customizer Apps.",
		"const storageKey = \"__wfrp4eCustomizerWoundFormulaArgs\";",
		"const sourceId = this.item?.id || this.effect.id;",
		"this.actor[storageKey] ||= {};",
		"this.actor[storageKey][sourceId] = args;"
	].join("\n");
}
function jc(e) {
	return [
		"// Generated by WFRP4e Customizer Apps.",
		"const storageKey = \"__wfrp4eCustomizerWoundFormulaArgs\";",
		"const sourceId = this.item?.id || this.effect.id;",
		"const preWoundArgs = this.actor[storageKey][sourceId];",
		"const actor = this.actor;",
		"",
		...Sc(e.formula)
	].join("\n");
}
function Mc(e) {
	return ["<p>Generated by WFRP4e Customizer Apps. This Trait applies a custom Species Builder wound formula.</p>", `<p>${Fc(e.formula)}</p>`].join("");
}
function Nc(e) {
	return e.woundFormula?.formula ? [{
		formula: e.woundFormula.formula,
		name: Ec(e),
		ownerName: e.name,
		speciesKey: e.key
	}] : [];
}
function Pc(e) {
	return (e.subspecies ?? []).flatMap((t) => t.woundFormula?.formula ? [{
		formula: t.woundFormula.formula,
		name: Dc(e, t),
		ownerName: `${e.name} / ${t.name}`,
		speciesKey: e.key,
		subspeciesKey: t.key
	}] : []);
}
function Fc(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
//#endregion
//#region src/functions/species-builder/species-config.ts
function Ic(e) {
	let t = Lc();
	for (let n of e.definitions) Rc(t, n);
	return t;
}
function Lc() {
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
function Rc(e, t) {
	e.species[t.key] = t.name, q(e.speciesCharacteristics, t.key, t.characteristics), q(e.speciesSkills, t.key, zs(t)), q(e.speciesTalents, t.key, Vs(t)), q(e.speciesRandomTalents, t.key, t.randomTalents), q(e.speciesTalentReplacement, t.key, Hc(t)), q(e.speciesTraits, t.key, Us(t, t.woundFormula ? Ec(t) : void 0)), q(e.speciesMovement, t.key, t.movement), q(e.speciesFate, t.key, t.fate), q(e.speciesRes, t.key, t.resilience), q(e.speciesExtra, t.key, t.extra), q(e.speciesAge, t.key, t.age), q(e.speciesHeight, t.key, t.height), q(e.speciesCareerReplacements, t.key, Uc(t)), t.includeInExtraSpecies && e.extraSpecies.push(t.key);
	for (let n of t.subspecies ?? []) {
		let r = e.subspecies[t.key] ?? {}, i = n.woundFormula ? Dc(t, n) : void 0, a = n.careerTable ? Vc(t, n) : void 0;
		r[n.key] = zc(t, n, i, a), e.subspecies[t.key] = r;
	}
}
function zc(e, t, n, r) {
	let i = { name: t.name };
	return q(i, "characteristics", t.characteristics), q(i, "skills", Bs(e, t)), q(i, "talents", Hs(e, t)), q(i, "speciesTraits", Ws(e, t, n)), q(i, "randomTalents", t.randomTalents), q(i, "talentReplacement", Hc(t)), q(i, "movement", t.movement), q(i, "fate", t.fate), q(i, "resilience", t.resilience), q(i, "extra", t.extra), q(i, "careerTable", r), i;
}
function Bc(e) {
	return e.key;
}
function Vc(e, t) {
	return `${e.key}-${t.key}`;
}
function Hc(e) {
	return Fs(e.talentReplacementRows) ?? e.talentReplacements;
}
function Uc(e) {
	return Is(e.careerReplacementRows) ?? e.careerReplacements;
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
function Wc(e, t) {
	let n = X(e, t);
	return Array.isArray(n) ? n.filter((e) => typeof e == "string") : [];
}
function Gc(e, t, n = 0) {
	return Kc(e, t) ?? n;
}
function Kc(e, t) {
	for (let n of t) {
		let t = Number(X(e, n));
		if (Number.isFinite(t)) return t;
	}
	return null;
}
function qc(e, t, n = !1) {
	for (let n of t) {
		let t = X(e, n);
		if (typeof t == "boolean") return t;
	}
	return n;
}
function Jc(e) {
	return Array.isArray(e) ? e.flatMap(Jc) : typeof e == "string" ? e.split(/[\n\r,;]/).map((e) => e.trim()).filter(Boolean) : Y(e) ? Object.values(e).flatMap(Jc) : [];
}
function Yc(e, t, n) {
	let r = e;
	for (let e of t.slice(0, -1)) {
		let t = r[e];
		Y(t) || (r[e] = {}), r = r[e];
	}
	r[t[t.length - 1] ?? ""] = n;
}
//#endregion
//#region src/functions/species-builder/career-table-normalization.ts
function Xc(e) {
	if (!Y(e)) return;
	let t = Zc(e.rows) ?? Qc(e.careers);
	return t ? { rows: t } : void 0;
}
function Zc(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!Y(e)) return [];
		let t = el(e.name);
		if (!t) return [];
		let n = { name: t };
		return q(n, "journalUuid", el(e.journalUuid)), [n];
	});
	return t.length > 0 ? t : void 0;
}
function Qc(e) {
	return $c(e)?.map((e) => ({ name: e }));
}
function $c(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		let t = el(e);
		return t ? [t] : [];
	});
	return t.length > 0 ? t : void 0;
}
function el(e) {
	if (typeof e == "string") return e.trim() || void 0;
}
//#endregion
//#region src/functions/species-builder/config-keys.ts
function tl(e) {
	return e.trim().toLocaleLowerCase().replaceAll(/[^\da-z]+/g, "-").replaceAll(/^-+|-+$/g, "");
}
//#endregion
//#region src/functions/species-builder/replacement-row-normalization.ts
function nl(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!Y(e)) return [];
		let t = il(e.rolled, "talent"), n = il(e.replacement, "talent");
		return !t.name || !n.name ? [] : [{
			replacement: n,
			rolled: t
		}];
	});
	return t.length > 0 ? t : void 0;
}
function rl(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!Y(e)) return [];
		let t = il(e.rolled, "career"), n = Array.isArray(e.replacements) ? e.replacements.flatMap((e) => {
			let t = il(e, "career");
			return t.name ? [t] : [];
		}) : [];
		return !t.name || n.length === 0 ? [] : [{
			replacements: n,
			rolled: t
		}];
	});
	return t.length > 0 ? t : void 0;
}
function il(e, t) {
	if (typeof e == "string") return { name: sl(e) ?? "" };
	if (!Y(e)) return { name: "" };
	let n = al(e.item, t), r = sl(e.name) ?? n?.name ?? "";
	return n ? {
		item: n,
		name: r
	} : { name: r };
}
function al(e, t) {
	if (!Y(e)) return;
	let n = sl(e.name), r = ol(e.type), i = sl(e.uuid);
	if (!n || r !== t || !i) return;
	let a = {
		name: n,
		type: r,
		uuid: i
	}, o = sl(e.specification) ?? sl(e.specifier);
	o && (a.specification = o);
	let s = sl(e.img);
	return s && (a.img = s), a;
}
function ol(e) {
	return e === "career" || e === "skill" || e === "talent" || e === "trait" ? e : void 0;
}
function sl(e) {
	if (typeof e == "string") return e.trim() || void 0;
}
//#endregion
//#region src/functions/species-builder/linked-grant-normalization.ts
function cl(e, t) {
	if (!Array.isArray(e)) return;
	let n = e.flatMap((e) => {
		let n = il(e, t);
		return n.name ? [n] : [];
	});
	return n.length > 0 ? n : void 0;
}
function ll(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!Y(e) || !Array.isArray(e.choices)) return [];
		let t = e.choices.flatMap((e) => {
			let t = il(e, "talent");
			return t.name ? [t] : [];
		});
		return t.length > 0 ? [{ choices: t }] : [];
	});
	return t.length > 0 ? t : void 0;
}
//#endregion
//#region src/functions/species-builder/species-settings-normalization.ts
var ul = Object.values(J);
function dl(e) {
	return !Y(e) || !Array.isArray(e.definitions) ? {
		definitions: [],
		showGeneratedConfigTab: !1
	} : {
		definitions: e.definitions.flatMap(fl),
		showGeneratedConfigTab: e.showGeneratedConfigTab === !0
	};
}
function fl(e) {
	return hl(e, (e, t, n) => ({
		includeInExtraSpecies: n.includeInExtraSpecies === !0,
		key: e,
		name: t
	})).map((t) => (gl(t, e), _l(t, e), t));
}
function pl(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap(ml);
	return t.length > 0 ? t : void 0;
}
function ml(e) {
	return hl(e, (e, t, n) => {
		let r = {
			key: e,
			name: t
		};
		return q(r, "skillsAdded", xl(n.skillsAdded)), q(r, "skillsRemoved", xl(n.skillsRemoved)), q(r, "talentsAdded", xl(n.talentsAdded)), q(r, "talentsRemoved", xl(n.talentsRemoved)), q(r, "traitsAdded", xl(n.traitsAdded)), q(r, "traitsRemoved", xl(n.traitsRemoved)), r;
	});
}
function hl(e, t) {
	if (!Y(e)) return [];
	let n = vl(e.key), r = yl(e.name);
	if (!n || !r) return [];
	let i = t(n, r, e);
	return q(i, "characteristics", Tl(e.characteristics)), q(i, "randomTalents", Cl(e.randomTalents)), q(i, "talentReplacementRows", nl(e.talentReplacementRows)), q(i, "talentReplacements", Sl(e.talentReplacements)), q(i, "movement", bl(e.movement)), q(i, "fate", bl(e.fate)), q(i, "resilience", bl(e.resilience)), q(i, "extra", bl(e.extra)), q(i, "woundFormula", Dl(e.woundFormula)), q(i, "careerTable", Xc(e.careerTable)), [i];
}
function gl(e, t) {
	Y(t) && (q(e, "skills", xl(t.skills)), q(e, "linkedSkills", cl(t.linkedSkills, "skill")), q(e, "talents", xl(t.talents)), q(e, "linkedTalents", ll(t.linkedTalents)), q(e, "traits", xl(t.traits)), q(e, "linkedTraits", cl(t.linkedTraits, "trait")));
}
function _l(e, t) {
	Y(t) && (q(e, "age", yl(t.age)), q(e, "height", El(t.height)), q(e, "careerReplacements", wl(t.careerReplacements)), q(e, "careerReplacementRows", rl(t.careerReplacementRows)), q(e, "subspecies", pl(t.subspecies)));
}
function vl(e) {
	return typeof e == "string" ? tl(e) : "";
}
function yl(e) {
	if (typeof e == "string") return e.trim() || void 0;
}
function bl(e) {
	let t = Number(e);
	return Number.isFinite(t) ? t : void 0;
}
function xl(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		let t = yl(e);
		return t ? [t] : [];
	});
	return t.length > 0 ? t : void 0;
}
function Sl(e) {
	if (!Y(e)) return;
	let t = Object.entries(e).flatMap(([e, t]) => {
		let n = yl(e), r = yl(t);
		return n && r ? [[n, r]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function Cl(e) {
	if (!Y(e)) return;
	let t = Object.entries(e).flatMap(([e, t]) => {
		let n = yl(e), r = bl(t);
		return n && r !== void 0 ? [[n, r]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function wl(e) {
	if (!Y(e)) return;
	let t = Object.entries(e).flatMap(([e, t]) => {
		let n = yl(e), r = xl(t);
		return n && r ? [[n, r]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function Tl(e) {
	if (!Y(e)) return;
	let t = ul.flatMap((t) => {
		let n = yl(e[t]);
		return n ? [[t, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function El(e) {
	if (!Y(e)) return;
	let t = {};
	return q(t, "die", yl(e.die)), q(t, "feet", bl(e.feet)), q(t, "inches", bl(e.inches)), Object.keys(t).length > 0 ? t : void 0;
}
function Dl(e) {
	if (!Y(e)) return;
	let t = yl(e.formula);
	return t ? { formula: t } : void 0;
}
//#endregion
//#region src/functions/species-builder/editor/field-values.ts
function Ol(e) {
	let t = e.split(/\r?\n/).map((e) => e.trim()).filter((e) => e.length > 0);
	return t.length > 0 ? t : void 0;
}
function kl(e) {
	let t = Ll(e).flatMap(([e, t]) => t ? [[e, t]] : []);
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function Al(e) {
	let t = Ll(e).flatMap(([e, t]) => {
		let n = Il(t);
		return n === void 0 ? [] : [[e, n]];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function jl(e) {
	let t = Ll(e).flatMap(([e, t]) => {
		let n = t.split(",").map((e) => e.trim()).filter((e) => e.length > 0);
		return n.length > 0 ? [[e, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function Ml(e) {
	let t = e.trim();
	return t.length > 0 ? t : void 0;
}
function Nl(e) {
	return e.length > 0 ? e : void 0;
}
function Pl(e) {
	let t = Ml(e);
	return t ? { formula: t } : void 0;
}
function Fl(e) {
	let t = e.map((e) => {
		let t = { name: e.name }, n = Ml(e.journalUuid ?? "");
		return n && (t.journalUuid = n), t;
	});
	return t.length > 0 ? { rows: t } : void 0;
}
function Il(e) {
	let t = e.trim();
	if (!t) return;
	let n = Number(t);
	return Number.isFinite(n) ? n : void 0;
}
function Ll(e) {
	return e.split(/\r?\n/).flatMap((e) => {
		let t = e.indexOf(":");
		if (t < 0) return [];
		let n = e.slice(0, t).trim(), r = e.slice(t + 1).trim();
		return n ? [[n, r]] : [];
	});
}
//#endregion
//#region src/functions/species-builder/editor/draft.ts
function Rl(e, t) {
	return e === "careerReplacements" ? jl(t) : e === "randomTalents" ? Al(t) : kl(t);
}
function zl(e, t) {
	return e === "randomTalents" ? Al(t) : kl(t);
}
function Q(e, t, n) {
	let r = { ...e };
	return n === void 0 ? delete r[t] : r[t] = n, r;
}
function Bl(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.key.trim();
		e && t.set(e, (t.get(e) ?? 0) + 1);
	}
	return [...t.entries()].flatMap(([e, t]) => t > 1 ? [e] : []);
}
function Vl(e) {
	let t = /* @__PURE__ */ new Set();
	return e.map((e) => {
		let n = Yl(e);
		return n.key = Ul(e.key, e.name, "new-species", t), e.subspecies && (n.subspecies = Hl(e.subspecies)), n;
	});
}
function Hl(e) {
	let t = /* @__PURE__ */ new Set();
	return e.map((e) => ({
		...Yl(e),
		key: Ul(e.key, e.name, "new-subspecies", t)
	}));
}
function Ul(e, t, n, r) {
	let i = tl(e);
	if (i) return r.add(i), i;
	let a = Wl(tl(t) || n, r);
	return r.add(a), a;
}
function Wl(e, t) {
	if (!t.has(e)) return e;
	let n = 2, r = `${e}-${n}`;
	for (; t.has(r);) n += 1, r = `${e}-${n}`;
	return r;
}
function Gl(e) {
	return e.flatMap((e) => {
		let t = Bl(e.subspecies ?? []);
		return t.length > 0 ? [{
			keys: t,
			speciesName: e.name
		}] : [];
	});
}
function Kl(e) {
	return e.flatMap((e) => (e.subspecies ?? []).flatMap((t, n) => t.key.trim() && t.name.trim() ? [] : [{
		index: n,
		speciesName: e.name
	}]));
}
function ql(e) {
	return JSON.stringify(e);
}
function Jl(e) {
	return JSON.stringify(e, null, 2);
}
function Yl(e) {
	return JSON.parse(JSON.stringify(e));
}
function Xl(e) {
	return e instanceof Error ? e.message : "Unknown Species Builder error.";
}
//#endregion
//#region src/functions/species-builder/editor/career-table-rows.ts
function Zl(e) {
	return [...e ?? [], { name: "" }];
}
function Ql(e, t) {
	return (e ?? []).filter((e, n) => n !== t);
}
function $l(e, t, n) {
	return (e ?? []).map((e, r) => r === t ? nu(e, n) : e);
}
function eu(e, t, n) {
	let r = { name: n.name };
	return n.careerJournalUuid && (r.journalUuid = n.careerJournalUuid), $l(e, t, r);
}
function tu(e, t, n) {
	return $l(e, t, { journalUuid: n });
}
function nu(e, t) {
	let n = {
		...e,
		...t
	};
	return n.journalUuid || delete n.journalUuid, n;
}
//#endregion
//#region src/state/species-builder/career-table-drop-actions.ts
function ru(e) {
	async function t(t, n) {
		let r = e.selectedDefinition.value;
		if (!r) return;
		let i = await e.resolveDroppedItem("career", n);
		e.definitionActions.updateCareerTableRows(eu(r.careerTable?.rows, t, i));
	}
	async function n(t, n) {
		let r = e.selectedDefinition.value;
		if (!r) return;
		let i = await iu(e, n);
		e.definitionActions.updateCareerTableRows(tu(r.careerTable?.rows, t, i.uuid));
	}
	async function r(t, n, r) {
		let i = e.selectedDefinition.value?.subspecies?.[t];
		if (!i) return;
		let a = await e.resolveDroppedItem("career", r);
		e.subspeciesActions.updateSubspeciesCareerTableRows(t, eu(i.careerTable?.rows, n, a));
	}
	async function i(t, n, r) {
		let i = e.selectedDefinition.value?.subspecies?.[t];
		if (!i) return;
		let a = await iu(e, r);
		e.subspeciesActions.updateSubspeciesCareerTableRows(t, tu(i.careerTable?.rows, n, a.uuid));
	}
	return {
		setCareerTableCareerDrop: t,
		setCareerTableJournalDrop: n,
		setSubspeciesCareerTableCareerDrop: r,
		setSubspeciesCareerTableJournalDrop: i
	};
}
async function iu(e, t) {
	try {
		return await e.bridge.resolveJournalDrop(t);
	} catch (t) {
		throw e.loadError.value = Xl(t), t;
	}
}
//#endregion
//#region src/functions/species-builder/editor/definition-fields.ts
function au() {
	return {
		includeInExtraSpecies: !0,
		key: "",
		name: "New Species"
	};
}
function ou(e, t) {
	let n = Yl(e);
	return n.key = gu(`${n.key}-copy`, t), n.name = `${n.name} Copy`, n;
}
function su(e, t) {
	return [...e, ...t.map(Yl)];
}
function cu(e, t, n) {
	return Q(e, t, Nl(n));
}
function lu(e, t, n) {
	return Q(e, t, Il(n));
}
function uu(e, t, n) {
	let r = e.height ? { ...e.height } : {}, i = t === "die" ? Ml(n) : Il(n);
	return i === void 0 ? delete r[t] : r[t] = i, Q(e, "height", Object.keys(r).length > 0 ? r : void 0);
}
function du(e, t, n) {
	let r = e.characteristics ? { ...e.characteristics } : {}, i = Ml(n);
	return i ? r[t] = i : delete r[t], Q(e, "characteristics", Object.keys(r).length > 0 ? r : void 0);
}
function fu(e, t, n) {
	return Q(e, t, Ol(n));
}
function pu(e, t, n) {
	return Q(e, t, Rl(t, n));
}
function mu(e, t) {
	return Q(e, "woundFormula", Pl(t));
}
function hu(e, t) {
	return Q(e, "careerTable", Fl(t));
}
function gu(e, t) {
	let n = new Set(t.map((e) => e.key));
	if (!n.has(e)) return e;
	let r = 2, i = `${e}-${r}`;
	for (; n.has(i);) r += 1, i = `${e}-${r}`;
	return i;
}
//#endregion
//#region src/state/species-builder/selected-definition.ts
function _u(e, t) {
	let n = e.definitions.value[e.selectedIndex.value];
	n && (e.definitions.value = e.definitions.value.map((r, i) => i === e.selectedIndex.value ? t(Yl(n)) : r), e.message.value = "");
}
//#endregion
//#region src/state/species-builder/definition-actions.ts
function vu(e) {
	function t() {
		r(au());
	}
	function n() {
		let t = e.selectedDefinition.value;
		t && r(ou(t, e.definitions.value));
	}
	function r(e) {
		i([e]);
	}
	function i(t) {
		t.length !== 0 && (e.definitions.value = su(e.definitions.value, t), e.selectedIndex.value = e.definitions.value.length - 1, e.message.value = "");
	}
	function a() {
		e.selectedDefinition.value && (e.definitions.value = e.definitions.value.filter((t, n) => n !== e.selectedIndex.value), e.selectedIndex.value = e.definitions.value.length === 0 ? -1 : Math.min(e.selectedIndex.value, e.definitions.value.length - 1), e.message.value = "");
	}
	function o(t) {
		e.selectedIndex.value = t;
	}
	function s(e, t) {
		g((n) => cu(n, e, t));
	}
	function c(e, t) {
		g((n) => ({
			...n,
			[e]: t
		}));
	}
	function l(e, t) {
		g((n) => lu(n, e, t));
	}
	function u(e, t) {
		g((n) => uu(n, e, t));
	}
	function d(e, t) {
		g((n) => du(n, e, t));
	}
	function f(e, t) {
		g((n) => fu(n, e, t));
	}
	function p(e, t) {
		g((n) => pu(n, e, t));
	}
	function m(e) {
		g((t) => mu(t, e));
	}
	function h(e) {
		g((t) => hu(t, e));
	}
	function g(t) {
		_u(e, t);
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
function yu(e) {
	return e === "traits" ? "traits" : "skills";
}
function bu(e, t) {
	return t && t.length > 0 ? t.map(Fu) : (e ?? []).map((e) => ({ name: e }));
}
function xu(e, t) {
	return t && t.length > 0 ? t.map((e) => ({ choices: e.choices.map(Fu) })) : (e ?? []).map((e) => ({ choices: Pu(e).map((e) => ({ name: e })) }));
}
function Su(e) {
	return e.map(As).filter((e) => e.length > 0);
}
function Cu(e) {
	return e.flatMap((e) => {
		let t = Su(e.choices);
		return t.length > 0 ? [t.join(", ")] : [];
	});
}
function wu(e, t, n) {
	return e.map((e, r) => r === t ? { name: n } : Fu(e));
}
function Tu(e, t, n) {
	return e.map((e, r) => r === t ? {
		item: n,
		name: ks(n)
	} : Fu(e));
}
function Eu(e, t, n, r) {
	return e.map((e, i) => i === t ? { choices: wu(e.choices, n, r) } : Iu(e));
}
function Du(e, t, n, r) {
	return e.map((e, i) => i === t ? { choices: Tu(e.choices, n, r) } : Iu(e));
}
function Ou(e, t) {
	let n = t === "skills" ? "New Skill" : "New Trait";
	return [...e.map(Fu), { name: n }];
}
function ku(e, t) {
	return e.filter((e, n) => n !== t).map(Fu);
}
function Au(e, t) {
	let n = [{ name: "New Talent" }];
	return t === "choice" && n.push({ name: "Alternative Talent" }), [...e.map(Iu), { choices: n }];
}
function ju(e, t) {
	return e.map((e, n) => n === t ? { choices: [...e.choices.map(Fu), { name: "Alternative Talent" }] } : Iu(e));
}
function Mu(e, t) {
	return e.filter((e, n) => n !== t).map(Iu);
}
function Nu(e, t, n) {
	let r = e[t];
	return !r || r.choices.length === 1 ? Mu(e, t) : e.map((e, r) => r === t ? { choices: e.choices.filter((e, t) => t !== n).map(Fu) } : Iu(e));
}
function Pu(e) {
	let t = e.split(",").map((e) => e.trim()).filter((e) => e.length > 0);
	return t.length > 0 ? t : [e];
}
function Fu(e) {
	return e.item ? {
		item: { ...e.item },
		name: e.name
	} : { name: e.name };
}
function Iu(e) {
	return { choices: e.choices.map(Fu) };
}
//#endregion
//#region src/functions/species-builder/editor/subspecies-fields.ts
function Lu(e) {
	return {
		...e,
		subspecies: [...e.subspecies ?? [], {
			key: "",
			name: "New Subspecies"
		}]
	};
}
function Ru(e, t) {
	let n = (e.subspecies ?? []).filter((e, n) => n !== t);
	return Q(e, "subspecies", n.length > 0 ? n : void 0);
}
function zu(e, t, n) {
	let r = e.subspecies ?? [], i = r[t];
	return i ? {
		...e,
		subspecies: r.map((e, r) => r === t ? n(Yl(i)) : e)
	} : e;
}
function Bu(e, t, n) {
	return {
		...e,
		[t]: Nl(n) ?? ""
	};
}
function Vu(e, t, n) {
	return Q(e, t, Il(n));
}
function Hu(e, t, n) {
	let r = e.characteristics ? { ...e.characteristics } : {}, i = Ml(n);
	return i ? r[t] = i : delete r[t], Q(e, "characteristics", Object.keys(r).length > 0 ? r : void 0);
}
function Uu(e, t, n) {
	return Q(e, t, Ol(n));
}
function Wu(e, t, n) {
	return Q(e, t, zl(t, n));
}
function Gu(e, t) {
	return Q(e, "woundFormula", Pl(t));
}
function Ku(e, t) {
	return Q(e, "careerTable", Fl(t));
}
//#endregion
//#region src/functions/species-builder/editor/linked-definition.ts
function qu(e, t) {
	let n = t === "skills" ? e.linkedSkills : e.linkedTraits;
	return bu(e[t], n);
}
function Ju(e) {
	return xu(e.talents, e.linkedTalents);
}
function Yu(e, t) {
	return sd(e, t, Ou(qu(e, t), t));
}
function Xu(e, t, n, r) {
	return sd(e, t, wu(qu(e, t), n, r));
}
function Zu(e, t, n) {
	return sd(e, t, ku(qu(e, t), n));
}
function Qu(e, t, n, r) {
	return sd(e, t, Tu(qu(e, t), n, r));
}
function $u(e, t) {
	return cd(e, Au(Ju(e), t));
}
function ed(e, t) {
	return cd(e, ju(Ju(e), t));
}
function td(e, t, n, r) {
	return cd(e, Eu(Ju(e), t, n, r));
}
function nd(e, t) {
	return cd(e, Mu(Ju(e), t));
}
function rd(e, t, n) {
	return cd(e, Nu(Ju(e), t, n));
}
function id(e, t, n, r) {
	return cd(e, Du(Ju(e), t, n, r));
}
function ad(e, t, n) {
	let r = ks(n);
	if (t === "talents") {
		let t = Ju(e);
		return Cu(t).includes(r) ? e : cd(e, [...t, { choices: [{
			item: n,
			name: r
		}] }]);
	}
	let i = qu(e, t);
	return Su(i).includes(r) ? e : sd(e, t, [...i, {
		item: n,
		name: r
	}]);
}
function od(e, t, n) {
	let r = ks(n), i = Cu(Ju(e));
	return zu(e, t, (e) => {
		if (ld(i, r)) {
			let t = ud((e.talentsAdded ?? []).filter((e) => e !== r)), n = ud((e.talentsRemoved ?? []).filter((e) => e !== r));
			return Q(Q(e, "talentsAdded", t), "talentsRemoved", n);
		}
		return (e.talentsAdded ?? []).includes(r) ? e : Q(e, "talentsAdded", [...e.talentsAdded ?? [], r]);
	});
}
function sd(e, t, n) {
	let r = t === "skills" ? "linkedSkills" : "linkedTraits", i = Su(n);
	return Q(Q(e, r, n.length > 0 ? n : void 0), t, i.length > 0 ? i : void 0);
}
function cd(e, t) {
	let n = Cu(t);
	return Q(Q(e, "linkedTalents", t.length > 0 ? t : void 0), "talents", n.length > 0 ? n : void 0);
}
function ld(e, t) {
	return e.includes(t) && !/\([^()]*\)/.test(t);
}
function ud(e) {
	return e.length > 0 ? e : void 0;
}
//#endregion
//#region src/state/species-builder/linked-grant-actions.ts
var dd = {
	skills: "skill",
	talents: "talent",
	traits: "trait"
};
function fd(e) {
	async function t(t, n) {
		let r = await e.resolveDroppedItem(dd[t], n);
		p((e) => ad(e, t, r));
	}
	async function n(t, n, r) {
		let i = await e.resolveDroppedItem(dd[t], r);
		p((e) => Qu(e, t, n, i));
	}
	async function r(t, n, r) {
		let i = await e.resolveDroppedItem("talent", r);
		p((e) => id(e, t, n, i));
	}
	async function i(t, n) {
		if (!e.selectedDefinition.value?.subspecies?.[t]) return;
		let r = await e.resolveDroppedItem("talent", n);
		p((e) => od(e, t, r));
	}
	function a(e) {
		p((t) => Yu(t, e));
	}
	function o(e, t, n) {
		p((r) => Xu(r, e, t, n));
	}
	function s(e, t) {
		p((n) => Zu(n, e, t));
	}
	function c(e) {
		p((t) => $u(t, e));
	}
	function l(e) {
		p((t) => ed(t, e));
	}
	function u(e, t, n) {
		p((r) => td(r, e, t, n));
	}
	function d(e) {
		p((t) => nd(t, e));
	}
	function f(e, t) {
		p((n) => rd(n, e, t));
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
function pd() {
	return { name: "" };
}
function md() {
	return {
		replacement: pd(),
		rolled: pd()
	};
}
function hd() {
	return {
		replacements: [pd()],
		rolled: pd()
	};
}
function gd(e) {
	return [...e, md()];
}
function _d(e, t) {
	return e.filter((e, n) => n !== t);
}
function vd(e) {
	return [...e, hd()];
}
function yd(e, t) {
	return e.map((e, n) => n === t ? {
		...e,
		replacements: [...e.replacements, pd()]
	} : e);
}
function bd(e, t, n) {
	return e.map((e, r) => r === t ? {
		...e,
		replacements: e.replacements.filter((e, t) => t !== n)
	} : e).filter((e) => e.replacements.length > 0);
}
function xd(e, t) {
	return e.filter((e, n) => n !== t);
}
function Sd(e) {
	return e.talentReplacementRows?.length ? Nd(e.talentReplacementRows) : wd(e.talentReplacements);
}
function Cd(e) {
	return e.careerReplacementRows?.length ? Nd(e.careerReplacementRows) : Td(e.careerReplacements);
}
function wd(e) {
	return Object.entries(e ?? {}).map(([e, t]) => ({
		replacement: { name: t },
		rolled: { name: e }
	}));
}
function Td(e) {
	return Object.entries(e ?? {}).map(([e, t]) => ({
		replacements: t.map((e) => ({ name: e })),
		rolled: { name: e }
	}));
}
function Ed(e, t, n, r) {
	return e.map((e, i) => i === t ? {
		...e,
		[n]: kd(r)
	} : e);
}
function Dd(e, t, n) {
	return e.map((e, r) => r === t ? {
		...e,
		rolled: kd(n)
	} : e);
}
function Od(e, t, n, r) {
	return e.map((e, i) => {
		if (i !== t) return e;
		let a = e.replacements.map((e, t) => t === n ? kd(r) : e);
		return {
			...e,
			replacements: a
		};
	});
}
function kd(e) {
	return {
		item: e,
		name: ks(e)
	};
}
function Ad(e, t) {
	return Q(Q(e, "talentReplacementRows", t.length > 0 ? t : void 0), "talentReplacements", Fs(t));
}
function jd(e, t) {
	return Q(Q(e, "careerReplacementRows", t.length > 0 ? t : void 0), "careerReplacements", Is(t));
}
function Md(e, t) {
	return Q(Q(e, "talentReplacementRows", t.length > 0 ? t : void 0), "talentReplacements", Fs(t));
}
function Nd(e) {
	return JSON.parse(JSON.stringify(e));
}
//#endregion
//#region src/state/species-builder/replacement-actions.ts
function Pd(e) {
	function t(t) {
		e.definitionActions.updateSelectedDefinition((e) => Ad(e, t));
	}
	function n(t) {
		e.definitionActions.updateSelectedDefinition((e) => jd(e, t));
	}
	function r(t, n) {
		e.subspeciesActions.updateSubspecies(t, (e) => Md(e, n));
	}
	async function i(n, r, i) {
		let a = e.selectedDefinition.value;
		if (!a) return;
		let o = await l("talent", i);
		t(Ed(Sd(a), n, r, o));
	}
	async function a(t, n, i, a) {
		let o = e.selectedDefinition.value?.subspecies?.[t];
		if (!o) return;
		let s = await l("talent", a);
		r(t, Ed(Sd(o), n, i, s));
	}
	async function o(t, r) {
		let i = e.selectedDefinition.value;
		if (!i) return;
		let a = await l("career", r);
		n(Dd(Cd(i), t, a));
	}
	async function s(t, r, i) {
		let a = e.selectedDefinition.value;
		if (!a) return;
		let o = await l("career", i);
		n(Od(Cd(a), t, r, o));
	}
	async function c(t) {
		try {
			await e.bridge.openItemSheet(t);
		} catch (t) {
			e.loadError.value = Xl(t);
		}
	}
	async function l(t, n) {
		try {
			return await e.bridge.resolveItemDrop(n, t);
		} catch (t) {
			throw e.loadError.value = Xl(t), t;
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
//#region src/state/species-builder/subspecies-actions.ts
function Fd(e) {
	function t() {
		d(Lu);
	}
	function n(e) {
		d((t) => Ru(t, e));
	}
	function r(e, t, n) {
		u(e, (e) => Bu(e, t, n));
	}
	function i(e, t, n) {
		u(e, (e) => Vu(e, t, n));
	}
	function a(e, t, n) {
		u(e, (e) => Hu(e, t, n));
	}
	function o(e, t, n) {
		u(e, (e) => Uu(e, t, n));
	}
	function s(e, t, n) {
		u(e, (e) => Wu(e, t, n));
	}
	function c(e, t) {
		u(e, (e) => Gu(e, t));
	}
	function l(e, t) {
		u(e, (e) => Ku(e, t));
	}
	function u(e, t) {
		d((n) => zu(n, e, t));
	}
	function d(t) {
		_u(e, t);
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
var Id = Ds("species-builder", () => {
	let e, t = {
		loadRandomTalentSources: () => ie().loadRandomTalentSources(),
		loadSettings: () => ie().loadSettings(),
		openItemSheet: (e) => ie().openItemSheet(e),
		resolveItemDrop: (e, t) => ie().resolveItemDrop(e, t),
		resolveJournalDrop: (e) => ie().resolveJournalDrop(e),
		saveSettings: (e) => ie().saveSettings(e)
	}, n = /* @__PURE__ */ N([]), r = /* @__PURE__ */ N(!1), i = /* @__PURE__ */ N(0), a = /* @__PURE__ */ N(!0), o = /* @__PURE__ */ N(!1), s = /* @__PURE__ */ N(""), c = /* @__PURE__ */ N(""), l = /* @__PURE__ */ N([]), u = /* @__PURE__ */ N(""), d = K(() => n.value[i.value]), f = K(() => Vl(n.value)), p = K(() => dl({
		definitions: f.value,
		showGeneratedConfigTab: r.value
	})), m = K(() => Jl(Ic(p.value))), h = K(() => Bl(f.value)), g = K(() => Gl(f.value)), _ = K(() => f.value.flatMap((e, t) => e.key.trim() && e.name.trim() ? [] : [t])), v = K(() => Kl(f.value)), y = K(() => u.value !== ql(p.value)), b = K(() => !a.value && !o.value && h.value.length === 0 && _.value.length === 0 && g.value.length === 0 && v.value.length === 0), x = vu({
		definitions: n,
		message: s,
		selectedDefinition: d,
		selectedIndex: i
	}), S = Fd({
		definitions: n,
		message: s,
		selectedIndex: i
	}), { resolveDroppedItem: C, ...w } = Pd({
		bridge: t,
		definitionActions: x,
		loadError: c,
		selectedDefinition: d,
		subspeciesActions: S
	}), T = fd({
		definitionActions: x,
		resolveDroppedItem: C,
		selectedDefinition: d
	}), E = ru({
		bridge: t,
		definitionActions: x,
		loadError: c,
		resolveDroppedItem: C,
		selectedDefinition: d,
		subspeciesActions: S
	});
	async function ee() {
		a.value = !0, c.value = "", s.value = "";
		try {
			let [e, t] = await Promise.all([ie().loadSettings(), ie().loadRandomTalentSources()]);
			n.value = Yl(e.definitions), l.value = t, r.value = e.showGeneratedConfigTab, i.value = n.value.length > 0 ? 0 : -1, u.value = ql(e), s.value = `Loaded ${e.definitions.length} species definition(s).`;
		} catch (e) {
			c.value = Xl(e);
		} finally {
			a.value = !1;
		}
	}
	async function te() {
		if (!b.value) return !1;
		o.value = !0, c.value = "", s.value = "";
		try {
			let e = await ie().saveSettings(p.value);
			return n.value = Yl(e.definitions), r.value = e.showGeneratedConfigTab, i.value = n.value.length > 0 ? Math.min(i.value, n.value.length - 1) : -1, u.value = ql(e), s.value = "Saved. Refresh Foundry before using new species in character generation.", !0;
		} catch (e) {
			return c.value = Xl(e), !1;
		} finally {
			o.value = !1;
		}
	}
	function ne(e) {
		r.value = e, s.value = "";
	}
	function re(t) {
		e = t;
	}
	function ie() {
		if (!e) throw Error("Species Builder has not been connected to its Foundry bridge.");
		return e;
	}
	return {
		...x,
		...E,
		...T,
		...w,
		...S,
		canSave: b,
		configure: re,
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
		loadSettings: ee,
		message: s,
		randomTalentSources: l,
		saveSettings: te,
		selectedDefinition: d,
		selectedIndex: i,
		showGeneratedConfigTab: r,
		updateShowGeneratedConfigTab: ne
	};
});
function Ld(e, t = {}) {
	let n = Id();
	n.configure(e);
	async function r() {
		await n.saveSettings() && t.onSettingsSaved?.();
	}
	return {
		...n,
		...Os(n),
		saveSettings: r
	};
}
//#endregion
//#region src/view/apps/species-builder/components/DeleteConfirmationSubView.vue?vue&type=script&setup=true&lang.ts
var Rd = {
	key: 0,
	class: "dui-modal dui-modal-open",
	role: "dialog",
	"aria-modal": "true",
	"aria-labelledby": "species-builder-delete-title"
}, zd = { class: "dui-modal-box" }, Bd = { class: "dui-modal-action" }, Vd = /* @__PURE__ */ I({
	__name: "DeleteConfirmationSubView",
	props: { message: {} },
	emits: ["close", "confirm"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => e.message ? (z(), B("div", Rd, [H("div", zd, [
			r[3] ||= H("h2", { id: "species-builder-delete-title" }, "Confirm Deletion", -1),
			H("p", null, k(e.message), 1),
			H("div", Bd, [H("button", {
				class: "dui-btn dui-btn-error",
				type: "button",
				onClick: r[0] ||= (e) => n("confirm")
			}, "Delete"), H("button", {
				class: "dui-btn",
				type: "button",
				onClick: r[1] ||= (e) => n("close")
			}, "Cancel")])
		]), H("button", {
			class: "dui-modal-backdrop",
			type: "button",
			onClick: r[2] ||= (e) => n("close")
		}, "Close")])) : G("", !0);
	}
}), Hd = { class: "dui-card dui-card-border dui-card-sm" }, Ud = { class: "dui-card-body" }, Wd = { class: "dui-navbar" }, Gd = { class: "dui-navbar-end" }, Kd = { class: "dui-join" }, qd = ["disabled"], Jd = ["disabled"], Yd = {
	"aria-label": "Species Builder sections",
	class: "dui-tabs dui-tabs-border",
	role: "tablist"
}, Xd = ["aria-selected"], Zd = ["aria-selected"], Qd = ["aria-selected"], $d = /* @__PURE__ */ I({
	__name: "SpeciesBuilderHeader",
	props: {
		activeTab: {},
		canSave: { type: Boolean },
		isBusy: { type: Boolean },
		showGeneratedConfigTab: { type: Boolean }
	},
	emits: [
		"reload",
		"save",
		"selectTab"
	],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (z(), B("header", Hd, [H("div", Ud, [H("div", Wd, [r[7] ||= H("div", { class: "dui-navbar-start" }, [H("div", null, [H("span", { class: "dui-badge dui-badge-ghost" }, "WFRP4e Customizer"), H("h1", { class: "dui-card-title" }, "Species Builder")])], -1), H("div", Gd, [H("div", Kd, [H("button", {
			class: "dui-btn dui-btn-ghost dui-join-item",
			disabled: e.isBusy,
			type: "button",
			onClick: r[0] ||= (e) => n("reload")
		}, [...r[5] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-rotate-right"
		}, null, -1), W(" Reload ", -1)]], 8, qd), H("button", {
			disabled: !e.canSave,
			class: "dui-btn dui-btn-primary dui-join-item",
			type: "button",
			onClick: r[1] ||= (e) => n("save")
		}, [...r[6] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-floppy-disk"
		}, null, -1), W(" Save ", -1)]], 8, Jd)])])]), H("div", Yd, [
			H("button", {
				id: "species-builder-tab-species",
				"aria-selected": e.activeTab === "species",
				"aria-controls": "species-builder-panel-species",
				class: O(["dui-tab", { "dui-tab-active": e.activeTab === "species" }]),
				role: "tab",
				type: "button",
				onClick: r[2] ||= (e) => n("selectTab", "species")
			}, " Species ", 10, Xd),
			H("button", {
				id: "species-builder-tab-settings",
				"aria-selected": e.activeTab === "settings",
				"aria-controls": "species-builder-panel-settings",
				class: O(["dui-tab", { "dui-tab-active": e.activeTab === "settings" }]),
				role: "tab",
				type: "button",
				onClick: r[3] ||= (e) => n("selectTab", "settings")
			}, " Settings ", 10, Zd),
			e.showGeneratedConfigTab ? (z(), B("button", {
				key: 0,
				id: "species-builder-tab-wfrp-config",
				"aria-selected": e.activeTab === "wfrp-config",
				"aria-controls": "species-builder-panel-wfrp-config",
				class: O(["dui-tab", { "dui-tab-active": e.activeTab === "wfrp-config" }]),
				role: "tab",
				type: "button",
				onClick: r[4] ||= (e) => n("selectTab", "wfrp-config")
			}, " WFRP Config ", 10, Qd)) : G("", !0)
		])])]));
	}
}), ef = { "aria-live": "polite" }, tf = {
	key: 0,
	role: "alert",
	class: "dui-alert dui-alert-error"
}, nf = {
	key: 1,
	role: "alert",
	class: "dui-alert dui-alert-warning"
}, rf = {
	key: 2,
	role: "alert",
	class: "dui-alert dui-alert-warning"
}, af = {
	key: 3,
	role: "alert",
	class: "dui-alert dui-alert-warning"
}, of = {
	key: 4,
	role: "alert",
	class: "dui-alert dui-alert-warning"
}, sf = {
	key: 5,
	class: "dui-alert dui-alert-info"
}, cf = {
	key: 6,
	class: "dui-alert dui-alert-warning"
}, lf = /* @__PURE__ */ I({
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
		return (t, n) => (z(), B("section", ef, [e.loadError ? (z(), B("p", tf, [n[0] ||= H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-circle-exclamation"
		}, null, -1), H("span", null, k(e.loadError), 1)])) : e.duplicateKeys.length > 0 ? (z(), B("p", nf, [n[1] ||= H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-triangle-exclamation"
		}, null, -1), H("span", null, "Duplicate species key: " + k(e.duplicateKeys.join(", ")), 1)])) : e.duplicateSubspeciesMessage ? (z(), B("p", rf, [n[2] ||= H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-triangle-exclamation"
		}, null, -1), H("span", null, k(e.duplicateSubspeciesMessage), 1)])) : e.invalidDefinitionCount > 0 ? (z(), B("p", af, [...n[3] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-triangle-exclamation"
		}, null, -1), H("span", null, "Species need both a key and name before saving.", -1)]])) : e.invalidSubspeciesCount > 0 ? (z(), B("p", of, [...n[4] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-triangle-exclamation"
		}, null, -1), H("span", null, "Subspecies need both a key and name before saving.", -1)]])) : e.message ? (z(), B("p", sf, [n[5] ||= H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-circle-info"
		}, null, -1), H("span", null, k(e.message), 1)])) : e.hasUnsavedChanges ? (z(), B("p", cf, [...n[6] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-pen"
		}, null, -1), H("span", null, "Unsaved changes.", -1)]])) : G("", !0)]));
	}
}), uf = { class: "dui-card dui-card-border" }, df = { class: "dui-card-body" }, ff = { class: "dui-fieldset" }, pf = { class: "dui-label" }, mf = ["checked", "disabled"], hf = { class: "dui-fieldset" }, gf = ["disabled", "value"], _f = ["value"], vf = { class: "dui-label" }, yf = { class: "dui-join" }, bf = ["disabled"], xf = ["disabled"], Sf = /* @__PURE__ */ I({
	__name: "SpeciesBuilderSettingsPanel",
	props: {
		exampleSpeciesOptions: {},
		isDisabled: { type: Boolean },
		selectedExampleSpeciesId: {},
		showGeneratedConfigTab: { type: Boolean }
	},
	emits: [
		"generateAllExampleSpecies",
		"generateExampleSpecies",
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
		return (t, r) => (z(), B("section", uf, [H("div", df, [
			r[12] ||= H("header", { class: "dui-navbar" }, [H("div", { class: "dui-navbar-start" }, [H("div", null, [H("h2", { class: "dui-card-title" }, "Species Builder Settings"), H("p", null, "Control optional tools and add sample definitions to the current draft.")])])], -1),
			H("fieldset", ff, [
				r[5] ||= H("legend", { class: "dui-fieldset-legend" }, "Generated config", -1),
				r[6] ||= H("p", { class: "dui-label" }, "Expose the read-only WFRP config generated from the current draft.", -1),
				H("label", pf, [H("input", {
					class: "dui-checkbox",
					checked: e.showGeneratedConfigTab,
					disabled: e.isDisabled,
					type: "checkbox",
					onChange: r[0] ||= (e) => n("updateShowGeneratedConfigTab", a(e))
				}, null, 40, mf), r[4] ||= H("span", null, "Show WFRP config tab", -1)])
			]),
			r[13] ||= H("div", { class: "dui-divider" }, "Sample Definitions", -1),
			H("fieldset", hf, [
				r[9] ||= H("legend", { class: "dui-fieldset-legend" }, "Example Species", -1),
				r[10] ||= H("p", { class: "dui-label" }, " Add preconfigured species definitions matching sample species Journal material. ", -1),
				r[11] ||= H("label", {
					class: "dui-label",
					for: "species-builder-example"
				}, "Sample definition", -1),
				H("select", {
					id: "species-builder-example",
					class: "dui-select",
					disabled: e.isDisabled,
					value: e.selectedExampleSpeciesId,
					onChange: r[1] ||= (e) => n("updateSelectedExampleSpeciesId", o(e))
				}, [(z(!0), B(R, null, L(e.exampleSpeciesOptions, (e) => (z(), B("option", {
					key: e.id,
					value: e.id
				}, k(e.label), 9, _f))), 128))], 40, gf),
				H("p", vf, k(i.value?.description), 1),
				H("div", yf, [H("button", {
					class: "dui-btn dui-join-item",
					disabled: e.isDisabled || !e.selectedExampleSpeciesId,
					type: "button",
					onClick: r[2] ||= (t) => n("generateExampleSpecies", e.selectedExampleSpeciesId)
				}, [...r[7] ||= [H("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-scroll"
				}, null, -1), W(" Generate Selected ", -1)]], 8, bf), H("button", {
					class: "dui-btn dui-join-item",
					disabled: e.isDisabled || e.exampleSpeciesOptions.length === 0,
					type: "button",
					onClick: r[3] ||= (e) => n("generateAllExampleSpecies")
				}, [...r[8] ||= [H("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-layer-group"
				}, null, -1), W(" Generate All ", -1)]], 8, xf)])
			])
		])]));
	}
});
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/editor-page-events.ts
function Cf(e, t) {
	return {
		addSubspecies: e.addSubspecies,
		careerReplacementChoiceDrop: e.setCareerReplacementChoiceDrop,
		careerReplacementRolledDrop: e.setCareerReplacementRolledDrop,
		careerTableCareerDrop: e.setCareerTableCareerDrop,
		careerTableJournalDrop: e.setCareerTableJournalDrop,
		close: t.close,
		delete: t.requestDeleteSelectedDefinition,
		deleteSubspecies: t.requestDeleteSubspecies,
		duplicate: e.duplicateSelectedDefinition,
		openItem: e.openItemSheet,
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
//#region src/view/apps/species-builder/tabs/species/species-key-suggestions.ts
function wf(e) {
	return tl(e.name) || "new-species";
}
function Tf(e) {
	return tl(e.name) || "new-subspecies";
}
//#endregion
//#region src/types/foundry/document-drop.ts
var Ef = "wfrp4e-customizer-apps.document-drop", Df = { class: "dui-list" }, Of = [
	"aria-label",
	"disabled",
	"title",
	"onClick"
], kf = ["src"], Af = {
	key: 1,
	"aria-hidden": "true",
	class: "fa-solid fa-scroll"
}, jf = {
	key: 1,
	class: "dui-list-row"
}, Mf = /* @__PURE__ */ I({
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
		return (t, n) => (z(), B("ul", Df, [e.documents.length > 0 ? (z(!0), B(R, { key: 0 }, L(e.documents, (t) => (z(), B("li", {
			key: t.uuid,
			class: "dui-list-row"
		}, [H("button", {
			"aria-label": e.isClickable ? `Use ${t.name}` : void 0,
			class: "dui-btn dui-btn-ghost",
			disabled: !e.isClickable,
			title: e.isClickable ? t.name : void 0,
			type: "button",
			onClick: Ao((e) => r(t), ["stop"])
		}, [t.img ? (z(), B("img", {
			key: 0,
			alt: "",
			"aria-hidden": "true",
			src: t.img
		}, null, 8, kf)) : (z(), B("i", Af)), H("span", null, k(t.name), 1)], 8, Of)]))), 128)) : (z(), B("li", jf, [n[0] ||= H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-arrow-down"
		}, null, -1), H("span", null, k(e.emptyLabel), 1)]))]));
	}
}), Nf = { class: "dui-card-body dui-fieldset" }, Pf = ["for"], Ff = ["id", "value"], If = ["for"], Lf = ["id", "value"], Rf = { class: "dui-card-actions" }, zf = /* @__PURE__ */ I({
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
		let n = t, r = er(), i = er();
		function a(e) {
			let t = e.target instanceof HTMLSelectElement ? e.target.value : "auto";
			(t === "Actor" || t === "auto" || t === "Item" || t === "JournalEntry" || t === "JournalEntryPage") && n("updateDocumentType", t);
		}
		function o(e) {
			n("updateDocumentValue", e.target instanceof HTMLInputElement ? e.target.value : "");
		}
		return (t, s) => (z(), B("form", {
			class: "dui-card dui-card-border dui-card-sm",
			onClick: s[2] ||= Ao(() => {}, ["stop"]),
			onSubmit: s[3] ||= Ao((e) => n("submit"), ["prevent"])
		}, [H("fieldset", Nf, [
			s[6] ||= H("legend", { class: "dui-fieldset-legend" }, "Manual document entry", -1),
			H("label", {
				class: "dui-label",
				for: P(r)
			}, "Document type", 8, Pf),
			H("select", {
				id: P(r),
				class: "dui-select",
				value: e.documentType,
				onChange: a
			}, [...s[4] ||= [oa("<option value=\"auto\">Auto</option><option value=\"Item\">Item</option><option value=\"Actor\">Actor</option><option value=\"JournalEntry\">Journal Entry</option><option value=\"JournalEntryPage\">Journal Page</option>", 5)]], 40, Ff),
			H("label", {
				class: "dui-label",
				for: P(i)
			}, "UUID or drop JSON", 8, If),
			H("input", {
				id: P(i),
				class: "dui-input",
				value: e.documentValue,
				placeholder: "Compendium.package.pack.id",
				type: "text",
				onInput: o
			}, null, 40, Lf),
			H("div", Rf, [
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
}), Bf = ["aria-label"], Vf = { key: 0 }, Hf = { key: 0 }, Uf = { key: 1 }, Wf = {
	key: 3,
	class: "dui-card-actions"
}, Gf = /* @__PURE__ */ I({
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
		let n = e, r = Hn(Ef);
		if (!r) throw Error("DocumentDrop requires a document drop bridge from its application host.");
		let i = Mr(), a = t, o = /* @__PURE__ */ N(!1), s = /* @__PURE__ */ N(!1), c = /* @__PURE__ */ N(!1), l = /* @__PURE__ */ N("auto"), u = /* @__PURE__ */ N(""), d, f = K(() => !!i.prompt), p = K(() => !!i.default), m = K(() => n.showPrompt && (f.value || n.title.length > 0)), h = K(() => n.showDocuments ? n.documents : []), g = K(() => n.manualEntryTrigger === "button"), _ = K(() => n.variant === "bare" ? [] : [
			"dui-card",
			n.variant === "compact" ? "dui-card-xs" : "dui-card-sm",
			o.value ? "dui-card-border" : "dui-card-dash"
		]);
		function v(e) {
			let t = e.currentTarget, n = e.relatedTarget;
			t instanceof Node && n instanceof Node && t.contains(n) || (o.value = !1);
		}
		function y(e) {
			e.preventDefault(), o.value = !1, a("dropData", e.dataTransfer?.getData("text/plain") ?? "");
		}
		function b() {
			n.manualEntryTrigger !== "none" && (s.value = !0);
		}
		function x() {
			s.value = !1, T();
		}
		function S() {
			if (s.value) {
				x();
				return;
			}
			b();
		}
		function C() {
			let e = r.createDropData({
				documentType: l.value,
				value: u.value
			});
			e && (a("dropData", e), u.value = "", x());
		}
		function w() {
			d ||= (c.value = !0, r.startDocumentPick(E));
		}
		function T() {
			let e = d;
			d = void 0, c.value = !1, e?.();
		}
		function E(e) {
			a("dropData", e), x();
		}
		return vr(() => {
			T();
		}), (t, n) => (z(), B("div", ua(t.$attrs, {
			class: _.value,
			"aria-label": e.title,
			role: "group",
			onDragenter: n[3] ||= Ao((e) => o.value = !0, ["prevent"]),
			onDragover: n[4] ||= Ao((e) => o.value = !0, ["prevent"]),
			onDragleave: v,
			onDrop: y
		}), [H("div", { class: O(e.variant === "bare" ? void 0 : "dui-card-body") }, [
			m.value ? (z(), B("div", Vf, [Tr(t.$slots, "prompt", {}, () => [H("strong", null, k(e.title), 1), e.description ? (z(), B("p", Hf, k(e.description), 1)) : G("", !0)])])) : G("", !0),
			p.value ? (z(), B("div", Uf, [Tr(t.$slots, "default")])) : G("", !0),
			e.showDocuments ? (z(), V(Mf, {
				key: 2,
				documents: h.value,
				"empty-label": e.emptyDocumentLabel,
				"is-clickable": e.documentsClickable,
				onDocumentClicked: n[0] ||= (e) => a("documentClicked", e)
			}, null, 8, [
				"documents",
				"empty-label",
				"is-clickable"
			])) : G("", !0),
			g.value ? (z(), B("div", Wf, [H("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				type: "button",
				onClick: Ao(S, ["stop"])
			}, k(s.value ? "Close Manual Entry" : "Manual Entry"), 1)])) : G("", !0),
			s.value ? (z(), V(zf, {
				key: 4,
				"document-type": l.value,
				"document-value": u.value,
				"is-picking-document": c.value,
				onClose: x,
				onStartPick: w,
				onSubmit: C,
				onUpdateDocumentType: n[1] ||= (e) => l.value = e,
				onUpdateDocumentValue: n[2] ||= (e) => u.value = e
			}, null, 8, [
				"document-type",
				"document-value",
				"is-picking-document"
			])) : G("", !0)
		], 2)], 16, Bf));
	}
}), Kf = [
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
], qf = [
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
], Jf = [
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
], Yf = {
	skills: "Skills granted during character creation. Drop Skill items to link their sheets, or add names manually.",
	talents: "Talents granted during character creation. Multiple choices in one grant become WFRP's comma-separated either/or entry.",
	traits: "Traits granted by this species or subspecies. Drop Trait items to link their sheets, or add names manually."
}, Xf = [
	"disabled",
	"title",
	"value"
], Zf = {
	key: 1,
	class: "dui-alert dui-alert-info"
}, Qf = {
	key: 2,
	class: "dui-alert"
}, $f = /* @__PURE__ */ I({
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
		return (t, i) => (z(), V(Gf, {
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
			default: F(() => [!e.value.item?.uuid && e.isEditable ? (z(), B("input", {
				key: 0,
				class: "dui-input",
				disabled: e.isDisabled,
				title: e.inputTitle,
				value: e.value.name,
				type: "text",
				onInput: i[0] ||= (e) => n("updateName", r(e))
			}, null, 40, Xf)) : e.value.name ? (z(), B("div", Zf, [H("strong", null, k(e.value.name), 1), i[3] ||= H("span", null, "Stored by name. Drop the matching Item to link its sheet.", -1)])) : (z(), B("div", Qf, [...i[4] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-arrow-down"
			}, null, -1), H("span", null, "No item selected.", -1)]]))]),
			_: 1
		}, 8, [
			"description",
			"documents",
			"documents-clickable",
			"show-documents",
			"title"
		]));
	}
}), ep = { class: "dui-list-row" }, tp = ["disabled", "title"], np = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B("li", ep, [U($f, {
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
		}, null, -1), W(" Remove ", -1)]], 8, tp)]));
	}
}), rp = { class: "dui-card-body" }, ip = { class: "dui-navbar" }, ap = { class: "dui-navbar-start" }, op = { class: "dui-card-title" }, sp = { class: "dui-navbar-end" }, cp = { class: "dui-badge" }, lp = [
	"disabled",
	"title",
	"onClick"
], up = {
	key: 1,
	class: "dui-join"
}, dp = ["disabled"], fp = ["disabled"], pp = {
	key: 0,
	class: "dui-list"
}, mp = { key: 1 }, hp = { class: "dui-card-body" }, gp = { class: "dui-navbar" }, _p = { class: "dui-navbar-start" }, vp = { class: "dui-card-title" }, yp = { class: "dui-navbar-end" }, bp = { class: "dui-join" }, xp = ["disabled", "onClick"], Sp = ["disabled", "onClick"], Cp = { class: "dui-list" }, wp = {
	key: 2,
	class: "dui-alert",
	role: "status"
}, Tp = /* @__PURE__ */ I({
	__name: "ArrayFields",
	props: {
		fields: {},
		isDisabled: { type: Boolean },
		values: {}
	},
	setup(e) {
		let t = e, n = Id(), r = K(() => Jf.filter((e) => !t.fields || t.fields.includes(e.field)));
		function i(e) {
			return bu(t.values[e], a(e));
		}
		function a(e) {
			return e === "skills" ? t.values.linkedSkills : t.values.linkedTraits;
		}
		function o() {
			return xu(t.values.talents, t.values.linkedTalents);
		}
		function s(e) {
			return e === "talents" ? o().length : i(e).length;
		}
		return (t, a) => (z(), B("div", null, [(z(!0), B(R, null, L(r.value, (t) => (z(), B("section", {
			key: t.field,
			class: "dui-card dui-card-border dui-card-sm"
		}, [H("div", rp, [
			H("header", ip, [H("div", ap, [H("div", null, [H("h4", op, k(t.label), 1), H("p", null, k(P(Yf)[t.field]), 1)])]), H("div", sp, [H("span", cp, k(s(t.field)), 1), t.field === "talents" ? (z(), B("div", up, [H("button", {
				class: "dui-btn dui-btn-sm dui-join-item",
				disabled: e.isDisabled,
				title: "Add one guaranteed Talent",
				type: "button",
				onClick: a[0] ||= (e) => P(n).addTalentGrant("single")
			}, [...a[5] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), W(" Talent ", -1)]], 8, dp), H("button", {
				class: "dui-btn dui-btn-sm dui-join-item",
				disabled: e.isDisabled,
				title: "Add a Talent choice set. WFRP stores this as one comma-separated Talent entry.",
				type: "button",
				onClick: a[1] ||= (e) => P(n).addTalentGrant("choice")
			}, [...a[6] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-list-check"
			}, null, -1), W(" Choice Set ", -1)]], 8, fp)])) : (z(), B("button", {
				key: 0,
				class: "dui-btn dui-btn-sm",
				disabled: e.isDisabled,
				title: `Add a ${t.label.slice(0, -1)} row`,
				type: "button",
				onClick: (e) => P(n).addLinkedItem(P(yu)(t.field))
			}, [...a[4] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), W(" Add ", -1)]], 8, lp))])]),
			U(Gf, {
				description: `Drop a WFRP ${t.label.slice(0, -1)} item to add it to this list.`,
				title: `Drop ${t.label}`,
				variant: "compact",
				onDropData: (e) => P(n).appendArrayFieldDrop(t.field, e)
			}, null, 8, [
				"description",
				"title",
				"onDropData"
			]),
			t.field !== "talents" && i(t.field).length > 0 ? (z(), B("ul", pp, [(z(!0), B(R, null, L(i(t.field), (r, i) => (z(), V(np, {
				key: `${t.field}-${i}`,
				"drop-description": `Drop a WFRP ${t.label.slice(0, -1)} item to link or replace this row.`,
				"drop-title": `Link ${t.label.slice(0, -1)}`,
				"input-title": `${t.label.slice(0, -1)} name used by WFRP item lookup`,
				"is-disabled": e.isDisabled,
				"remove-title": `Remove ${r.name}`,
				value: r,
				onDropData: (e) => P(n).setLinkedItemDrop(P(yu)(t.field), i, e),
				onOpenItem: a[2] ||= (e) => P(n).openItemSheet(e),
				onRemove: (e) => P(n).removeLinkedItem(P(yu)(t.field), i),
				onUpdateName: (e) => P(n).renameLinkedItem(P(yu)(t.field), i, e)
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
			]))), 128))])) : t.field === "talents" && o().length > 0 ? (z(), B("div", mp, [(z(!0), B(R, null, L(o(), (t, r) => (z(), B("article", {
				key: `talent-${r}`,
				class: "dui-card dui-card-border dui-card-sm"
			}, [H("div", hp, [H("header", gp, [H("div", _p, [H("strong", vp, k(t.choices.length > 1 ? "Talent Choice" : "Guaranteed Talent"), 1)]), H("div", yp, [H("div", bp, [H("button", {
				class: "dui-btn dui-btn-sm dui-join-item",
				disabled: e.isDisabled,
				title: "Add another alternative to this Talent choice",
				type: "button",
				onClick: (e) => P(n).addTalentChoice(r)
			}, [...a[7] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), W(" Choice ", -1)]], 8, xp), H("button", {
				disabled: e.isDisabled,
				title: "Remove this Talent grant",
				class: "dui-btn dui-btn-error dui-btn-sm dui-join-item",
				type: "button",
				onClick: (e) => P(n).removeTalentGrant(r)
			}, [...a[8] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), W(" Remove ", -1)]], 8, Sp)])])]), H("ul", Cp, [(z(!0), B(R, null, L(t.choices, (i, o) => (z(), V(np, {
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
			]))), 128))])])]))), 128))])) : (z(), B("div", wp, [a[9] ||= H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), H("span", null, "No " + k(t.label.toLowerCase()) + " yet.", 1)]))
		])]))), 128))]));
	}
}), Ep = { class: "dui-navbar" }, Dp = { class: "dui-navbar-start" }, Op = { class: "dui-card-title" }, kp = { class: "dui-navbar-end" }, Ap = { class: "dui-join" }, jp = ["disabled"], Mp = ["disabled"], Np = {
	"aria-label": "Species editor sections",
	class: "dui-tabs dui-tabs-border",
	role: "tablist"
}, Pp = [
	"id",
	"aria-controls",
	"aria-selected",
	"onClick"
], Fp = /* @__PURE__ */ I({
	__name: "SpeciesBuilderEditorNavigation",
	props: {
		activeTab: {},
		isDisabled: { type: Boolean },
		tabs: {}
	},
	emits: [
		"delete",
		"duplicate",
		"selectTab"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = K(() => n.tabs.find((e) => e.tab === n.activeTab)?.label ?? "Details");
		return (t, n) => (z(), B(R, null, [H("header", Ep, [H("div", Dp, [H("div", null, [n[2] ||= H("span", { class: "dui-badge dui-badge-ghost" }, "Editor Section", -1), H("h3", Op, k(i.value), 1)])]), H("div", kp, [H("div", Ap, [H("button", {
			class: "dui-btn dui-btn-ghost dui-join-item",
			disabled: e.isDisabled,
			type: "button",
			onClick: n[0] ||= (e) => r("duplicate")
		}, [...n[3] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-copy"
		}, null, -1), W(" Duplicate ", -1)]], 8, jp), H("button", {
			class: "dui-btn dui-btn-error dui-join-item",
			disabled: e.isDisabled,
			type: "button",
			onClick: n[1] ||= (e) => r("delete")
		}, [...n[4] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-trash"
		}, null, -1), W(" Delete ", -1)]], 8, Mp)])])]), H("div", Np, [(z(!0), B(R, null, L(e.tabs, (t) => (z(), B("button", {
			id: `species-editor-tab-${t.tab}`,
			key: t.tab,
			"aria-controls": `species-editor-panel-${t.tab}`,
			"aria-selected": e.activeTab === t.tab,
			class: O(["dui-tab", { "dui-tab-active": e.activeTab === t.tab }]),
			role: "tab",
			type: "button",
			onClick: (e) => r("selectTab", t.tab)
		}, k(t.label), 11, Pp))), 128))])], 64));
	}
}), Ip = { class: "dui-table dui-table-sm" }, Lp = { scope: "row" }, Rp = ["for"], zp = [
	"id",
	"disabled",
	"value",
	"onInput"
], Bp = /* @__PURE__ */ I({
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
		return (t, i) => (z(), B("table", Ip, [i[0] ||= H("thead", null, [H("tr", null, [H("th", { scope: "col" }, "Characteristic"), H("th", { scope: "col" }, "Starting formula")])], -1), H("tbody", null, [(z(!0), B(R, null, L(P(Kf), (t) => (z(), B("tr", { key: t }, [H("th", Lp, [H("label", { for: `species-characteristic-${t}` }, k(P(qs)[t]), 9, Rp)]), H("td", null, [H("input", {
			id: `species-characteristic-${t}`,
			class: "dui-input dui-input-sm",
			disabled: e.isDisabled,
			placeholder: "2d10+20",
			value: e.characteristics?.[t] ?? "",
			type: "text",
			onInput: (e) => n("update", t, r(e))
		}, null, 40, zp)])]))), 128))])]));
	}
}), Vp = { class: "dui-table dui-table-sm" }, Hp = { scope: "row" }, Up = ["for"], Wp = [
	"id",
	"disabled",
	"value",
	"onInput"
], Gp = /* @__PURE__ */ I({
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
		return (t, i) => (z(), B("table", Vp, [i[0] ||= H("thead", null, [H("tr", null, [H("th", { scope: "col" }, "Stat"), H("th", { scope: "col" }, "Value")])], -1), H("tbody", null, [(z(!0), B(R, null, L(P(qf), (t) => (z(), B("tr", { key: t.field }, [H("th", Hp, [H("label", { for: `species-stat-${t.field}` }, k(t.label), 9, Up)]), H("td", null, [H("input", {
			id: `species-stat-${t.field}`,
			class: "dui-input dui-input-sm",
			disabled: e.isDisabled,
			value: e.values[t.field] ?? "",
			type: "number",
			onInput: (e) => n("update", t.field, r(e))
		}, null, 40, Wp)])]))), 128))])]));
	}
}), Kp = { class: "dui-card dui-card-border dui-card-sm" }, qp = { class: "dui-card-body" }, Jp = { class: "dui-fieldset" }, Yp = { class: "dui-fieldset" }, Xp = /* @__PURE__ */ I({
	__name: "SpeciesBuilderAttributesTab",
	props: {
		definition: {},
		isDisabled: { type: Boolean }
	},
	emits: ["updateCharacteristic", "updateNumberField"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (z(), B("section", Kp, [H("div", qp, [
			H("fieldset", Jp, [
				r[2] ||= H("legend", { class: "dui-fieldset-legend" }, "Characteristics", -1),
				r[3] ||= H("p", { class: "dui-label" }, " Starting formulas used by WFRP character creation, usually values such as 2d10+20. ", -1),
				U(Bp, {
					characteristics: e.definition.characteristics,
					"is-disabled": e.isDisabled,
					onUpdate: r[0] ||= (e, t) => n("updateCharacteristic", e, t)
				}, null, 8, ["characteristics", "is-disabled"])
			]),
			r[6] ||= H("div", { class: "dui-divider" }, "Resources And Movement", -1),
			H("fieldset", Yp, [
				r[4] ||= H("legend", { class: "dui-fieldset-legend" }, "Stats", -1),
				r[5] ||= H("p", { class: "dui-label" }, " Movement, Fate, Resilience, and extra points distributed between Fate and Resilience. ", -1),
				U(Gp, {
					"is-disabled": e.isDisabled,
					values: e.definition,
					onUpdate: r[1] ||= (e, t) => n("updateNumberField", e, t)
				}, null, 8, ["is-disabled", "values"])
			])
		])]));
	}
}), Zp = { class: "dui-fieldset" }, Qp = { class: "dui-table dui-table-sm" }, $p = ["disabled", "value"], em = ["disabled", "value"], tm = ["disabled", "value"], nm = ["disabled", "value"], rm = /* @__PURE__ */ I({
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
		return (t, i) => (z(), B("fieldset", Zp, [
			i[9] ||= H("legend", { class: "dui-fieldset-legend" }, "Age And Height", -1),
			i[10] ||= H("p", { class: "dui-label" }, "Formulas used by character creation to roll age and random height.", -1),
			H("table", Qp, [i[8] ||= H("thead", null, [H("tr", null, [H("th", { scope: "col" }, "Field"), H("th", { scope: "col" }, "Value")])], -1), H("tbody", null, [
				H("tr", null, [i[4] ||= H("th", { scope: "row" }, [H("label", { for: "species-age" }, "Age")], -1), H("td", null, [H("input", {
					id: "species-age",
					class: "dui-input dui-input-sm",
					disabled: e.isDisabled,
					placeholder: "2d10+15",
					value: e.definition.age ?? "",
					type: "text",
					onInput: i[0] ||= (e) => n("updateStringField", "age", r(e))
				}, null, 40, $p)])]),
				H("tr", null, [i[5] ||= H("th", { scope: "row" }, [H("label", { for: "species-height-die" }, "Height die")], -1), H("td", null, [H("input", {
					id: "species-height-die",
					class: "dui-input dui-input-sm",
					disabled: e.isDisabled,
					placeholder: "1d10",
					value: e.definition.height?.die ?? "",
					type: "text",
					onInput: i[1] ||= (e) => n("updateHeightField", "die", r(e))
				}, null, 40, em)])]),
				H("tr", null, [i[6] ||= H("th", { scope: "row" }, [H("label", { for: "species-height-feet" }, "Base feet")], -1), H("td", null, [H("input", {
					id: "species-height-feet",
					class: "dui-input dui-input-sm",
					disabled: e.isDisabled,
					value: e.definition.height?.feet ?? "",
					type: "number",
					onInput: i[2] ||= (e) => n("updateHeightField", "feet", r(e))
				}, null, 40, tm)])]),
				H("tr", null, [i[7] ||= H("th", { scope: "row" }, [H("label", { for: "species-height-inches" }, "Base inches")], -1), H("td", null, [H("input", {
					id: "species-height-inches",
					class: "dui-input dui-input-sm",
					disabled: e.isDisabled,
					value: e.definition.height?.inches ?? "",
					type: "number",
					onInput: i[3] ||= (e) => n("updateHeightField", "inches", r(e))
				}, null, 40, nm)])])
			])])
		]));
	}
}), im = { class: "dui-card dui-card-border dui-card-sm" }, am = { class: "dui-card-body" }, om = { class: "dui-fieldset" }, sm = { class: "dui-table dui-table-sm" }, cm = ["disabled", "value"], lm = [
	"disabled",
	"placeholder",
	"value"
], um = { class: "dui-label" }, dm = ["checked", "disabled"], fm = /* @__PURE__ */ I({
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
		return (t, a) => (z(), B("section", im, [H("div", am, [
			H("fieldset", om, [
				a[9] ||= H("legend", { class: "dui-fieldset-legend" }, "Identity", -1),
				a[10] ||= H("p", { class: "dui-label" }, " The name is shown to users. The key identifies this species in generated WFRP config. ", -1),
				H("table", sm, [H("tbody", null, [
					H("tr", null, [a[5] ||= H("th", { scope: "row" }, [H("label", { for: "species-name" }, "Name")], -1), H("td", null, [H("input", {
						id: "species-name",
						class: "dui-input dui-input-sm",
						disabled: e.isDisabled,
						value: e.definition.name,
						type: "text",
						onInput: a[0] ||= (e) => n("updateStringField", "name", r(e))
					}, null, 40, cm)])]),
					H("tr", null, [a[6] ||= H("th", { scope: "row" }, [H("label", { for: "species-key" }, "Key")], -1), H("td", null, [H("input", {
						id: "species-key",
						class: "dui-input dui-input-sm",
						disabled: e.isDisabled,
						placeholder: P(wf)(e.definition),
						value: e.definition.key,
						type: "text",
						onInput: a[1] ||= (e) => n("updateStringField", "key", r(e))
					}, null, 40, lm)])]),
					H("tr", null, [a[8] ||= H("th", { scope: "row" }, "Availability", -1), H("td", null, [H("label", um, [H("input", {
						class: "dui-checkbox",
						checked: e.definition.includeInExtraSpecies,
						disabled: e.isDisabled,
						type: "checkbox",
						onChange: a[2] ||= (e) => n("updateBooleanField", "includeInExtraSpecies", i(e))
					}, null, 40, dm), a[7] ||= H("span", null, "Show in WFRP extra species options", -1)])])])
				])])
			]),
			a[11] ||= H("div", { class: "dui-divider" }, "Character Creation", -1),
			U(rm, {
				definition: e.definition,
				"is-disabled": e.isDisabled,
				onUpdateHeightField: a[3] ||= (e, t) => n("updateHeightField", e, t),
				onUpdateStringField: a[4] ||= (e, t) => n("updateStringField", e, t)
			}, null, 8, ["definition", "is-disabled"])
		])]));
	}
}), pm = { class: "dui-fieldset" }, mm = { class: "dui-fieldset-legend" }, hm = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B("fieldset", pm, [H("legend", mm, k(e.label), 1), U($f, {
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
}), gm = { class: "dui-navbar" }, _m = { class: "dui-navbar-start" }, vm = { class: "dui-card-title" }, ym = { class: "dui-navbar-end" }, bm = { class: "dui-badge" }, xm = ["disabled", "title"], Sm = /* @__PURE__ */ I({
	__name: "TableEditorHeader",
	props: {
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
		return (t, r) => (z(), B("header", gm, [H("div", _m, [H("div", null, [H("h4", vm, k(e.title), 1), H("p", null, k(e.description), 1)])]), H("div", ym, [H("span", bm, k(e.count), 1), H("button", {
			class: "dui-btn dui-btn-sm",
			disabled: e.isDisabled,
			title: e.actionTitle,
			type: "button",
			onClick: r[0] ||= (e) => n("add")
		}, [r[1] ||= H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-plus"
		}, null, -1), W(" " + k(e.actionLabel), 1)], 8, xm)])]));
	}
}), Cm = { class: "dui-card dui-card-border dui-card-sm" }, wm = { class: "dui-card-body" }, Tm = { key: 0 }, Em = { class: "dui-card-body" }, Dm = { class: "dui-navbar" }, Om = { class: "dui-navbar-start" }, km = { class: "dui-badge dui-badge-ghost" }, Am = { class: "dui-navbar-end" }, jm = { class: "dui-join" }, Mm = ["disabled", "onClick"], Nm = ["disabled", "onClick"], Pm = { class: "dui-list" }, Fm = { class: "dui-badge dui-badge-ghost" }, Im = ["disabled", "onClick"], Lm = {
	key: 1,
	class: "dui-alert",
	role: "status"
}, Rm = /* @__PURE__ */ I({
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
			return n.rows?.length ? n.rows : Td(n.values);
		}
		function a() {
			r("updateRows", vd(i()));
		}
		function o(e) {
			r("updateRows", yd(i(), e));
		}
		function s(e, t) {
			r("updateRows", bd(i(), e, t));
		}
		function c(e) {
			r("updateRows", xd(i(), e));
		}
		return (t, n) => (z(), B("section", Cm, [H("div", wm, [U(Sm, {
			"action-label": "Add Rule",
			"action-title": "Add a rolled Career and replacement choices",
			count: i().length,
			description: "Offer one or more replacement Careers for a rolled Career group.",
			"is-disabled": e.isDisabled,
			title: "Career Replacements",
			onAdd: a
		}, null, 8, ["count", "is-disabled"]), i().length > 0 ? (z(), B("div", Tm, [(z(!0), B(R, null, L(i(), (t, i) => (z(), B("article", {
			key: `career-replacement-${i}`,
			class: "dui-card dui-card-border dui-card-sm"
		}, [H("div", Em, [
			H("header", Dm, [H("div", Om, [H("span", km, "Rule " + k(i + 1), 1)]), H("div", Am, [H("div", jm, [H("button", {
				class: "dui-btn dui-btn-sm dui-join-item",
				disabled: e.isDisabled,
				title: "Add another replacement Career choice",
				type: "button",
				onClick: (e) => o(i)
			}, [...n[2] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), W(" Choice ", -1)]], 8, Mm), H("button", {
				disabled: e.isDisabled,
				title: "Remove this Career replacement rule",
				class: "dui-btn dui-btn-error dui-btn-sm dui-join-item",
				type: "button",
				onClick: (e) => c(i)
			}, [...n[3] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), W(" Remove Rule ", -1)]], 8, Nm)])])]),
			U(hm, {
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
			H("ul", Pm, [(z(!0), B(R, null, L(t.replacements, (t, a) => (z(), B("li", {
				key: `${i}-${a}`,
				class: "dui-list-row"
			}, [
				H("span", Fm, k(a + 1), 1),
				U(hm, {
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
				}, [...n[4] ||= [H("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-xmark"
				}, null, -1), W(" Remove ", -1)]], 8, Im)
			]))), 128))])
		])]))), 128))])) : (z(), B("div", Lm, [...n[5] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-circle-info"
		}, null, -1), H("span", null, "No Career replacements.", -1)]]))])]));
	}
}), zm = { class: "dui-card dui-card-border dui-card-sm" }, Bm = { class: "dui-card-body" }, Vm = {
	key: 0,
	class: "dui-list"
}, Hm = { class: "dui-badge dui-badge-ghost" }, Um = { class: "dui-fieldset" }, Wm = [
	"disabled",
	"value",
	"onInput"
], Gm = { class: "dui-fieldset" }, Km = [
	"disabled",
	"value",
	"onInput"
], qm = ["disabled", "onClick"], Jm = {
	key: 1,
	class: "dui-alert",
	role: "status"
}, Ym = /* @__PURE__ */ I({
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
			r("updateRows", Zl(n.rows));
		}
		function o(e) {
			r("updateRows", Ql(n.rows, e));
		}
		function s(e, t) {
			r("updateRows", $l(n.rows, e, t));
		}
		function c(e) {
			return e.target instanceof HTMLInputElement ? e.target.value : "";
		}
		return (t, n) => (z(), B("section", zm, [H("div", Bm, [U(Sm, {
			"action-label": "Add Career",
			"action-title": "Add a Career table row",
			count: i().length,
			description: "Career group names drive character generation. Journal links provide the result link; blank links use the generated fallback journal.",
			"is-disabled": e.isDisabled,
			title: "Career Table",
			onAdd: a
		}, null, 8, ["count", "is-disabled"]), i().length > 0 ? (z(), B("ul", Vm, [(z(!0), B(R, null, L(i(), (t, i) => (z(), B("li", {
			key: i,
			class: "dui-list-row"
		}, [
			H("span", Hm, k(i + 1), 1),
			U(Gf, {
				description: "Drop a WFRP Career item.",
				"manual-entry-trigger": "none",
				title: "Career",
				variant: "compact",
				onDropData: (e) => r("dropCareer", i, e)
			}, {
				default: F(() => [H("fieldset", Um, [n[0] ||= H("legend", { class: "dui-fieldset-legend" }, "Career Group", -1), H("input", {
					class: "dui-input",
					disabled: e.isDisabled,
					value: t.name,
					placeholder: "Pit Fighter",
					type: "text",
					onInput: (e) => s(i, { name: c(e) })
				}, null, 40, Wm)])]),
				_: 2
			}, 1032, ["onDropData"]),
			U(Gf, {
				description: "Drop a Journal Entry or Journal Page.",
				"manual-entry-trigger": "button",
				title: "Journal Link",
				variant: "compact",
				onDropData: (e) => r("dropJournal", i, e)
			}, {
				default: F(() => [H("fieldset", Gm, [n[1] ||= H("legend", { class: "dui-fieldset-legend" }, "Journal Entry/Page UUID", -1), H("input", {
					class: "dui-input",
					disabled: e.isDisabled,
					value: t.journalUuid ?? "",
					placeholder: "Compendium.package.journals.entry.JournalEntryPage.page",
					type: "text",
					onInput: (e) => s(i, { journalUuid: c(e) })
				}, null, 40, Km)])]),
				_: 2
			}, 1032, ["onDropData"]),
			H("button", {
				class: "dui-btn dui-btn-error dui-btn-sm",
				disabled: e.isDisabled,
				type: "button",
				onClick: (e) => o(i)
			}, [...n[2] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), W(" Remove ", -1)]], 8, qm)
		]))), 128))])) : (z(), B("div", Jm, [...n[3] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-circle-info"
		}, null, -1), H("span", null, "No Career rows yet.", -1)]]))])]));
	}
});
//#endregion
//#region src/functions/species-builder/editor/random-talents.ts
function Xm(e) {
	return Object.entries(e ?? {});
}
function Zm(e, t) {
	let n = t[0]?.key ?? "talents";
	return nh([...e, [n, 1]]);
}
function Qm(e, t, n) {
	return nh(e.map(([e, r], i) => i === t ? [n, r] : [e, r]));
}
function $m(e, t, n) {
	let r = Number(n);
	return nh(e.map(([e, n], i) => i === t && Number.isFinite(r) ? [e, r] : [e, n]));
}
function eh(e, t) {
	return nh(e.filter((e, n) => n !== t));
}
function th(e, t) {
	return e.some((e) => e.key === t) ? e : [...e, {
		key: t,
		label: `Saved source missing from this world (${t})`
	}];
}
function nh(e) {
	return e.flatMap(([e, t]) => e.trim() ? [`${e.trim()}: ${t}`] : []).join("\n");
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/tabs/tables/tabs/random-talents/RandomTalentRows.vue?vue&type=script&setup=true&lang.ts
var rh = { class: "dui-card dui-card-border dui-card-sm" }, ih = { class: "dui-card-body" }, ah = {
	key: 0,
	class: "dui-list"
}, oh = { class: "dui-badge dui-badge-ghost" }, sh = { class: "dui-fieldset" }, ch = [
	"disabled",
	"value",
	"onInput"
], lh = ["value"], uh = { class: "dui-fieldset" }, dh = [
	"disabled",
	"value",
	"onInput"
], fh = ["disabled", "onClick"], ph = {
	key: 1,
	class: "dui-alert",
	role: "status"
}, mh = /* @__PURE__ */ I({
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
			return Xm(n.values);
		}
		function a() {
			r("update", Zm(i(), n.sources));
		}
		function o(e, t) {
			r("update", Qm(i(), e, t));
		}
		function s(e, t) {
			r("update", $m(i(), e, t));
		}
		function c(e) {
			return th(n.sources, e);
		}
		function l(e) {
			r("update", eh(i(), e));
		}
		function u(e) {
			return e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement ? e.target.value : "";
		}
		return (t, n) => (z(), B("section", rh, [H("div", ih, [U(Sm, {
			"action-label": "Add Source",
			"action-title": "Add a random Talent source and draw count",
			count: i().length,
			description: "Choose an available Talent table and the number of draws from that source.",
			"is-disabled": e.isDisabled,
			title: "Random Talents",
			onAdd: a
		}, null, 8, ["count", "is-disabled"]), i().length > 0 ? (z(), B("ul", ah, [(z(!0), B(R, null, L(i(), ([t, r], i) => (z(), B("li", {
			key: `random-${i}`,
			class: "dui-list-row"
		}, [
			H("span", oh, k(i + 1), 1),
			H("fieldset", sh, [n[0] ||= H("legend", { class: "dui-fieldset-legend" }, "Talent source", -1), H("select", {
				class: "dui-select",
				disabled: e.isDisabled,
				title: "Random Talent table source available in this world.",
				value: t,
				onInput: (e) => o(i, u(e))
			}, [(z(!0), B(R, null, L(c(t), (e) => (z(), B("option", {
				key: e.key,
				value: e.key
			}, k(e.label), 9, lh))), 128))], 40, ch)]),
			H("fieldset", uh, [n[1] ||= H("legend", { class: "dui-fieldset-legend" }, "Draws", -1), H("input", {
				class: "dui-input",
				disabled: e.isDisabled,
				min: "0",
				title: "How many random Talents this species draws from that table.",
				value: r,
				type: "number",
				onInput: (e) => s(i, u(e))
			}, null, 40, dh)]),
			H("button", {
				disabled: e.isDisabled,
				title: "Remove this random Talent source",
				class: "dui-btn dui-btn-error dui-btn-sm",
				type: "button",
				onClick: (e) => l(i)
			}, [...n[2] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), W(" Remove ", -1)]], 8, fh)
		]))), 128))])) : (z(), B("div", ph, [...n[3] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-circle-info"
		}, null, -1), H("span", null, "No random Talent draws.", -1)]]))])]));
	}
}), hh = { class: "dui-card dui-card-border dui-card-sm" }, gh = { class: "dui-card-body" }, _h = {
	key: 0,
	class: "dui-list"
}, vh = { class: "dui-badge dui-badge-ghost" }, yh = ["disabled", "onClick"], bh = {
	key: 1,
	class: "dui-alert",
	role: "status"
}, xh = /* @__PURE__ */ I({
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
			return n.rows?.length ? n.rows : wd(n.values);
		}
		function a() {
			r("updateRows", gd(i()));
		}
		function o(e) {
			r("updateRows", _d(i(), e));
		}
		return (t, n) => (z(), B("section", hh, [H("div", gh, [U(Sm, {
			"action-label": "Add Rule",
			"action-title": "Add a rolled Talent and replacement Talent",
			count: i().length,
			description: "Offer a specific alternative when character creation rolls a Talent.",
			"is-disabled": e.isDisabled,
			title: "Talent Replacements",
			onAdd: a
		}, null, 8, ["count", "is-disabled"]), i().length > 0 ? (z(), B("ul", _h, [(z(!0), B(R, null, L(i(), (t, i) => (z(), B("li", {
			key: `talent-replacement-${i}`,
			class: "dui-list-row"
		}, [
			H("span", vh, k(i + 1), 1),
			U(hm, {
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
			U(hm, {
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
			H("button", {
				disabled: e.isDisabled,
				title: "Remove this Talent replacement",
				class: "dui-btn dui-btn-error dui-btn-sm",
				type: "button",
				onClick: (e) => o(i)
			}, [...n[2] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), W(" Remove ", -1)]], 8, yh)
		]))), 128))])) : (z(), B("div", bh, [...n[3] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-circle-info"
		}, null, -1), H("span", null, "No Talent replacements.", -1)]]))])]));
	}
}), Sh = {
	"aria-label": "Table editor sections",
	class: "dui-tabs dui-tabs-border",
	role: "tablist"
}, Ch = [
	"id",
	"aria-controls",
	"aria-selected",
	"onClick"
], wh = /* @__PURE__ */ I({
	__name: "RandomTablesSection",
	props: {
		help: {},
		includeCareerReplacements: { type: Boolean },
		isDisabled: { type: Boolean },
		randomTalentSources: {},
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
		"updateTalentReplacementRows"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ N("careerTable"), a = K(() => {
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
		Kn(() => n.includeCareerReplacements, (e) => {
			!e && i.value === "careerReplacement" && (i.value = "careerTable");
		});
		function o(e, t, n) {
			r("careerReplacementChoiceDrop", e, t, n);
		}
		function s(e, t) {
			r("careerReplacementRolledDrop", e, t);
		}
		function c(e, t) {
			r("talentReplacementReplacementDrop", e, t);
		}
		function l(e, t) {
			r("talentReplacementRolledDrop", e, t);
		}
		return (t, n) => (z(), B("section", null, [
			n[8] ||= H("h4", null, "Tables And Replacements", -1),
			H("p", null, k(e.help), 1),
			H("div", Sh, [(z(!0), B(R, null, L(a.value, (e) => (z(), B("button", {
				id: `random-table-tab-${e.tab}`,
				key: e.tab,
				"aria-controls": `random-table-panel-${e.tab}`,
				"aria-selected": i.value === e.tab,
				class: O(["dui-tab", { "dui-tab-active": i.value === e.tab }]),
				role: "tab",
				type: "button",
				onClick: (t) => i.value = e.tab
			}, k(e.label), 11, Ch))), 128))]),
			i.value === "careerTable" ? (z(), V(Ym, {
				key: 0,
				id: "random-table-panel-careerTable",
				"aria-labelledby": "random-table-tab-careerTable",
				"is-disabled": e.isDisabled,
				role: "tabpanel",
				rows: e.values.careerTable?.rows,
				onDropCareer: n[0] ||= (e, t) => r("careerTableCareerDrop", e, t),
				onDropJournal: n[1] ||= (e, t) => r("careerTableJournalDrop", e, t),
				onUpdateRows: n[2] ||= (e) => r("updateCareerTableRows", e)
			}, null, 8, ["is-disabled", "rows"])) : i.value === "randomTalents" ? (z(), V(mh, {
				key: 1,
				id: "random-table-panel-randomTalents",
				"aria-labelledby": "random-table-tab-randomTalents",
				"is-disabled": e.isDisabled,
				role: "tabpanel",
				sources: e.randomTalentSources,
				values: e.values.randomTalents,
				onUpdate: n[3] ||= (e) => r("update", "randomTalents", e)
			}, null, 8, [
				"is-disabled",
				"sources",
				"values"
			])) : i.value === "talentReplacement" ? (z(), V(xh, {
				key: 2,
				id: "random-table-panel-talentReplacement",
				"aria-labelledby": "random-table-tab-talentReplacement",
				"is-disabled": e.isDisabled,
				role: "tabpanel",
				rows: e.values.talentReplacementRows,
				values: e.values.talentReplacements,
				onDropReplacement: c,
				onDropRolled: l,
				onOpenItem: n[4] ||= (e) => r("openItem", e),
				onUpdateRows: n[5] ||= (e) => r("updateTalentReplacementRows", e)
			}, null, 8, [
				"is-disabled",
				"rows",
				"values"
			])) : e.includeCareerReplacements ? (z(), V(Rm, {
				key: 3,
				id: "random-table-panel-careerReplacement",
				"aria-labelledby": "random-table-tab-careerReplacement",
				"is-disabled": e.isDisabled,
				role: "tabpanel",
				rows: e.values.careerReplacementRows,
				values: e.values.careerReplacements,
				onDropReplacement: o,
				onDropRolled: s,
				onOpenItem: n[6] ||= (e) => r("openItem", e),
				onUpdateRows: n[7] ||= (e) => r("updateCareerReplacementRows", e)
			}, null, 8, [
				"is-disabled",
				"rows",
				"values"
			])) : G("", !0)
		]));
	}
}), Th = { class: "dui-card dui-card-border dui-card-sm" }, Eh = { class: "dui-card-body" }, Dh = { class: "dui-fieldset" }, Oh = { class: "dui-collapse dui-collapse-arrow" }, kh = { class: "dui-collapse-content" }, Ah = { "aria-label": "Wound formula keywords" }, jh = { class: "dui-fieldset" }, Mh = ["disabled", "value"], Nh = {
	key: 0,
	class: "dui-alert dui-alert-info"
}, Ph = /* @__PURE__ */ I({
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
		return (t, a) => (z(), B("section", Th, [H("div", Eh, [H("fieldset", Dh, [
			a[4] ||= oa("<legend class=\"dui-fieldset-legend\">Wound Calculation</legend><p class=\"dui-label\"> Use <code>{Skill or Characteristic}</code> for a total value, <code>[Skill or Characteristic]</code> for its bonus, and <code>{Skill|Characteristic}</code> or <code>[Skill|Characteristic]</code> to base a skill on another characteristic. You can also use keywords such as <code>@tb</code>, <code>@scale</code>, and <code>@xp</code>. </p>", 2),
			H("details", Oh, [a[2] ||= H("summary", { class: "dui-collapse-title" }, "Formula keyword guide", -1), H("div", kh, [a[1] ||= H("p", null, [
				W(" Keywords pull values from the current Actor during Wound calculation. Size uses "),
				H("code", null, "@size"),
				W(" as steps from Average and "),
				H("code", null, "@scale"),
				W(" as powers of two. ")
			], -1), H("div", Ah, [(z(), B(R, null, L(r, (e) => H("code", {
				key: e,
				class: "dui-badge"
			}, k(e), 1)), 64))])])]),
			H("fieldset", jh, [a[3] ||= H("legend", { class: "dui-fieldset-legend" }, "Formula", -1), H("textarea", {
				class: "dui-textarea",
				disabled: e.isDisabled,
				value: e.formula ?? "",
				placeholder: "@sb * (1 + @sbMultiplier) + @tb * (2 + @tbMultiplier) + @wpb * (1 + @wpbMultiplier)",
				rows: "4",
				onInput: a[0] ||= (e) => n("updateWoundFormula", i(e))
			}, null, 40, Mh)]),
			e.generatedTraitName ? (z(), B("p", Nh, " Generated Trait item: " + k(e.generatedTraitName), 1)) : G("", !0)
		])])]));
	}
}), Fh = { class: "dui-card dui-card-border dui-card-sm" }, Ih = { class: "dui-card-body" }, Lh = { class: "dui-collapse-title" }, Rh = { class: "dui-badge" }, zh = { class: "dui-collapse-content" }, Bh = { class: "dui-fieldset" }, Vh = [
	"disabled",
	"value",
	"onInput"
], Hh = /* @__PURE__ */ I({
	__name: "SubspeciesChangesTab",
	props: {
		isDisabled: { type: Boolean },
		subspecies: {}
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
		], r = t;
		function i(e) {
			return e.target instanceof HTMLTextAreaElement ? e.target.value : "";
		}
		function a(e) {
			return e?.join("\n") ?? "";
		}
		return (t, o) => (z(), B("section", Fh, [H("div", Ih, [
			o[1] ||= H("h3", { class: "dui-card-title" }, "Skill And Trait Changes", -1),
			o[2] ||= H("p", null, " These changes are applied to the parent lists and exported as complete WFRP subspecies lists. Open only the list you need to edit. ", -1),
			(z(), B(R, null, L(n, (t) => H("details", {
				key: t.field,
				class: "dui-collapse dui-collapse-arrow"
			}, [H("summary", Lh, [W(k(t.label) + " ", 1), H("span", Rh, k(e.subspecies[t.field]?.length ?? 0), 1)]), H("div", zh, [H("fieldset", Bh, [o[0] ||= H("legend", { class: "dui-fieldset-legend" }, "One name per line", -1), H("textarea", {
				class: "dui-textarea",
				disabled: e.isDisabled,
				value: a(e.subspecies[t.field]),
				rows: "5",
				onInput: (e) => r("updateArrayField", t.field, i(e))
			}, null, 40, Vh)])])])), 64))
		])]));
	}
}), Uh = { class: "dui-card dui-card-border dui-card-sm" }, Wh = { class: "dui-card-body" }, Gh = { class: "dui-fieldset" }, Kh = { class: "dui-table dui-table-sm" }, qh = { scope: "row" }, Jh = ["for"], Yh = [
	"id",
	"disabled",
	"value"
], Xh = { scope: "row" }, Zh = ["for"], Qh = [
	"id",
	"disabled",
	"placeholder",
	"value"
], $h = { class: "dui-fieldset" }, eg = { class: "dui-fieldset" }, tg = /* @__PURE__ */ I({
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
		return (t, i) => (z(), B("section", Uh, [H("div", Wh, [
			H("fieldset", Gh, [
				i[4] ||= H("legend", { class: "dui-fieldset-legend" }, "Identity", -1),
				i[5] ||= H("p", { class: "dui-label" }, " Name this variant and give it a unique key under its parent species. ", -1),
				H("table", Kh, [H("tbody", null, [H("tr", null, [H("th", qh, [H("label", { for: `subspecies-${e.index}-name` }, "Name", 8, Jh)]), H("td", null, [H("input", {
					id: `subspecies-${e.index}-name`,
					class: "dui-input dui-input-sm",
					disabled: e.isDisabled,
					value: e.subspecies.name,
					type: "text",
					onInput: i[0] ||= (e) => n("updateStringField", "name", r(e))
				}, null, 40, Yh)])]), H("tr", null, [H("th", Xh, [H("label", { for: `subspecies-${e.index}-key` }, "Key", 8, Zh)]), H("td", null, [H("input", {
					id: `subspecies-${e.index}-key`,
					class: "dui-input dui-input-sm",
					disabled: e.isDisabled,
					placeholder: P(Tf)(e.subspecies),
					value: e.subspecies.key,
					type: "text",
					onInput: i[1] ||= (e) => n("updateStringField", "key", r(e))
				}, null, 40, Qh)])])])])
			]),
			i[10] ||= H("div", { class: "dui-divider" }, "Characteristic Overrides", -1),
			H("fieldset", $h, [
				i[6] ||= H("legend", { class: "dui-fieldset-legend" }, "Characteristics", -1),
				i[7] ||= H("p", { class: "dui-label" }, " Enter only formulas that replace the parent species characteristic value. ", -1),
				U(Bp, {
					characteristics: e.subspecies.characteristics,
					"is-disabled": e.isDisabled,
					onUpdate: i[2] ||= (e, t) => n("updateCharacteristic", e, t)
				}, null, 8, ["characteristics", "is-disabled"])
			]),
			i[11] ||= H("div", { class: "dui-divider" }, "Resource Overrides", -1),
			H("fieldset", eg, [
				i[8] ||= H("legend", { class: "dui-fieldset-legend" }, "Stats", -1),
				i[9] ||= H("p", { class: "dui-label" }, "Leave a value blank to keep the parent species value.", -1),
				U(Gp, {
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
function ng(e, t, n) {
	let r = ag(e), i = ag(t), a = ag(n), o = r.filter((e) => !a.includes(e)).map((e) => ({
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
function rg(e, t) {
	return e.source === "added" ? {
		field: "talentsAdded",
		value: og(t.addedTalents.filter((t) => t !== e.name))
	} : {
		field: "talentsRemoved",
		value: og([...t.removedTalents, e.name])
	};
}
function ig(e, t) {
	return {
		field: "talentsRemoved",
		value: og(t.removedTalents.filter((t) => t !== e))
	};
}
function ag(e) {
	let t = [];
	for (let n of e ?? []) {
		let e = n.trim();
		e && !t.includes(e) && t.push(e);
	}
	return t;
}
function og(e) {
	return ag(e).join("\n");
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/tabs/subspecies/SubspeciesTalentInheritance.vue?vue&type=script&setup=true&lang.ts
var sg = { class: "dui-card dui-card-border dui-card-sm" }, cg = { class: "dui-card-body" }, lg = {
	key: 0,
	class: "dui-list"
}, ug = { class: "dui-list-col-grow" }, dg = { class: "dui-badge" }, fg = [
	"disabled",
	"title",
	"onClick"
], pg = {
	key: 1,
	class: "dui-alert",
	role: "status"
}, mg = { key: 2 }, hg = { class: "dui-card-actions" }, gg = [
	"disabled",
	"title",
	"onClick"
], _g = /* @__PURE__ */ I({
	__name: "SubspeciesTalentInheritance",
	props: {
		index: {},
		isDisabled: { type: Boolean },
		parentTalents: {},
		subspecies: {}
	},
	emits: ["talentDrop", "updateArrayField"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = K(() => ng(n.parentTalents, n.subspecies.talentsAdded, n.subspecies.talentsRemoved));
		function a(e) {
			s(rg(e, i.value));
		}
		function o(e) {
			s(ig(e, i.value));
		}
		function s(e) {
			r("updateArrayField", n.index, e.field, e.value);
		}
		return (t, n) => (z(), B("section", sg, [H("div", cg, [
			n[5] ||= H("h3", { class: "dui-card-title" }, "Talent Inheritance", -1),
			n[6] ||= H("p", null, " Parent Talents are shown here as the subspecies Talent list. Removing an inherited Talent records it as removed; dropping a new Talent records it as added. ", -1),
			U(Gf, {
				description: "Drop a WFRP Talent item to add it to this subspecies.",
				title: "Drop Added Talent",
				variant: "compact",
				onDropData: n[0] ||= (t) => !e.isDisabled && r("talentDrop", e.index, t)
			}),
			i.value.activeRows.length > 0 ? (z(), B("ul", lg, [(z(!0), B(R, null, L(i.value.activeRows, (t) => (z(), B("li", {
				key: `${t.source}-${t.name}`,
				class: "dui-list-row"
			}, [H("div", ug, [H("strong", null, k(t.name), 1), H("span", dg, k(t.source === "inherited" ? "Inherited" : "Added"), 1)]), H("button", {
				disabled: e.isDisabled,
				class: "dui-btn dui-btn-error dui-btn-sm",
				title: `Remove ${t.name}`,
				type: "button",
				onClick: (e) => a(t)
			}, [...n[1] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), W(" Remove ", -1)]], 8, fg)]))), 128))])) : (z(), B("div", pg, [...n[2] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), H("span", null, "No Talents in the compiled list.", -1)]])),
			i.value.removedParentTalents.length > 0 ? (z(), B("div", mg, [n[4] ||= H("h4", null, "Removed Parent Talents", -1), H("div", hg, [(z(!0), B(R, null, L(i.value.removedParentTalents, (t) => (z(), B("button", {
				key: t,
				class: "dui-btn dui-btn-sm",
				disabled: e.isDisabled,
				title: `Restore ${t}`,
				type: "button",
				onClick: (e) => o(t)
			}, [n[3] ||= H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-rotate-left"
			}, null, -1), W(" " + k(t), 1)], 8, gg))), 128))])])) : G("", !0)
		])]));
	}
}), vg = {
	key: 0,
	class: "dui-modal dui-modal-open",
	role: "dialog",
	"aria-modal": "true",
	"aria-labelledby": "species-builder-subspecies-title"
}, yg = ["aria-busy"], bg = { class: "dui-navbar" }, xg = { class: "dui-navbar-start" }, Sg = { id: "species-builder-subspecies-title" }, Cg = { class: "dui-navbar-end" }, wg = { class: "dui-join" }, Tg = ["disabled"], Eg = {
	"aria-label": "Subspecies editor sections",
	class: "dui-tabs dui-tabs-border",
	role: "tablist"
}, Dg = [
	"id",
	"aria-controls",
	"aria-selected",
	"onClick"
], Og = /* @__PURE__ */ I({
	__name: "SubspeciesEditorSubView",
	props: {
		index: {},
		isLoading: { type: Boolean },
		isOpen: { type: Boolean },
		isSaving: { type: Boolean },
		parentTalents: {},
		randomTalentSources: {},
		subspecies: {},
		woundFormulaTraitName: {}
	},
	emits: [
		"close",
		"delete",
		"openItem",
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
		], r = e, i = t, a = /* @__PURE__ */ N("details"), o = K(() => r.isLoading || r.isSaving);
		function s() {
			i("delete", r.index);
		}
		function c(e, t) {
			e !== "careerReplacements" && i("updateTextMapField", r.index, e, t);
		}
		return Kn(() => r.isOpen, (e) => {
			e && (a.value = "details");
		}), (t, r) => e.isOpen ? (z(), B("div", vg, [e.subspecies ? (z(), B("div", {
			key: 0,
			class: "dui-modal-box",
			"aria-busy": o.value
		}, [
			H("header", bg, [H("div", xg, [H("div", null, [r[16] ||= H("span", { class: "dui-badge dui-badge-ghost" }, "Subspecies", -1), H("h2", Sg, k(e.subspecies.name || "Untitled"), 1)])]), H("div", Cg, [H("div", wg, [H("button", {
				class: "dui-btn dui-btn-error dui-btn-sm dui-join-item",
				disabled: o.value,
				type: "button",
				onClick: s
			}, [...r[17] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), W(" Delete ", -1)]], 8, Tg), H("button", {
				class: "dui-btn dui-btn-sm dui-join-item",
				type: "button",
				onClick: r[0] ||= (e) => i("close")
			}, " Close ")])])]),
			H("div", Eg, [(z(), B(R, null, L(n, (e) => H("button", {
				id: `subspecies-editor-tab-${e.tab}`,
				key: e.tab,
				"aria-controls": `subspecies-editor-panel-${e.tab}`,
				"aria-selected": a.value === e.tab,
				class: O(["dui-tab", { "dui-tab-active": a.value === e.tab }]),
				role: "tab",
				type: "button",
				onClick: (t) => a.value = e.tab
			}, k(e.label), 11, Dg)), 64))]),
			a.value === "details" ? (z(), V(tg, {
				key: 0,
				id: "subspecies-editor-panel-details",
				"aria-labelledby": "subspecies-editor-tab-details",
				index: e.index,
				"is-disabled": o.value,
				role: "tabpanel",
				subspecies: e.subspecies,
				onUpdateCharacteristic: r[1] ||= (t, n) => i("updateCharacteristic", e.index, t, n),
				onUpdateNumberField: r[2] ||= (t, n) => i("updateNumberField", e.index, t, n),
				onUpdateStringField: r[3] ||= (t, n) => i("updateStringField", e.index, t, n)
			}, null, 8, [
				"index",
				"is-disabled",
				"subspecies"
			])) : a.value === "talents" ? (z(), V(_g, {
				key: 1,
				id: "subspecies-editor-panel-talents",
				"aria-labelledby": "subspecies-editor-tab-talents",
				index: e.index,
				"is-disabled": o.value,
				"parent-talents": e.parentTalents,
				role: "tabpanel",
				subspecies: e.subspecies,
				onTalentDrop: r[4] ||= (e, t) => i("talentDrop", e, t),
				onUpdateArrayField: r[5] ||= (e, t, n) => i("updateArrayField", e, t, n)
			}, null, 8, [
				"index",
				"is-disabled",
				"parent-talents",
				"subspecies"
			])) : a.value === "changes" ? (z(), V(Hh, {
				key: 2,
				id: "subspecies-editor-panel-changes",
				"aria-labelledby": "subspecies-editor-tab-changes",
				"is-disabled": o.value,
				role: "tabpanel",
				subspecies: e.subspecies,
				onUpdateArrayField: r[6] ||= (t, n) => i("updateArrayField", e.index, t, n)
			}, null, 8, ["is-disabled", "subspecies"])) : a.value === "wounds" ? (z(), V(Ph, {
				key: 3,
				id: "subspecies-editor-panel-wounds",
				"aria-labelledby": "subspecies-editor-tab-wounds",
				formula: e.subspecies.woundFormula?.formula,
				"generated-trait-name": e.woundFormulaTraitName,
				"is-disabled": o.value,
				role: "tabpanel",
				onUpdateWoundFormula: r[7] ||= (t) => i("updateWoundFormula", e.index, t)
			}, null, 8, [
				"formula",
				"generated-trait-name",
				"is-disabled"
			])) : (z(), V(wh, {
				key: 4,
				id: "subspecies-editor-panel-tables",
				"aria-labelledby": "subspecies-editor-tab-tables",
				help: "Configure subspecies-specific random Talent draws and Talent replacement offers as rows.",
				"is-disabled": o.value,
				"random-talent-sources": e.randomTalentSources,
				role: "tabpanel",
				values: e.subspecies,
				onCareerTableCareerDrop: r[8] ||= (t, n) => i("careerTableCareerDrop", e.index, t, n),
				onCareerTableJournalDrop: r[9] ||= (t, n) => i("careerTableJournalDrop", e.index, t, n),
				onOpenItem: r[10] ||= (e) => i("openItem", e),
				onTalentReplacementReplacementDrop: r[11] ||= (t, n) => i("talentReplacementReplacementDrop", e.index, t, n),
				onTalentReplacementRolledDrop: r[12] ||= (t, n) => i("talentReplacementRolledDrop", e.index, t, n),
				onUpdate: c,
				onUpdateCareerTableRows: r[13] ||= (t) => i("updateCareerTableRows", e.index, t),
				onUpdateTalentReplacementRows: r[14] ||= (t) => i("updateTalentReplacementRows", e.index, t)
			}, null, 8, [
				"is-disabled",
				"random-talent-sources",
				"values"
			]))
		], 8, yg)) : G("", !0), H("button", {
			class: "dui-modal-backdrop",
			type: "button",
			onClick: r[15] ||= (e) => i("close")
		}, "Close")])) : G("", !0);
	}
}), kg = /* @__PURE__ */ I({
	__name: "SpeciesBuilderSubspeciesOverlay",
	props: {
		index: {},
		isLoading: { type: Boolean },
		isOpen: { type: Boolean },
		isSaving: { type: Boolean },
		parentTalents: {},
		randomTalentSources: {},
		subspecies: {},
		woundFormulaTraitName: {}
	},
	emits: [
		"close",
		"deleteSubspecies",
		"openItem",
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
		return (t, i) => (z(), V(Og, {
			index: e.index,
			"is-loading": e.isLoading,
			"is-open": e.isOpen,
			"is-saving": e.isSaving,
			"parent-talents": e.parentTalents,
			"random-talent-sources": e.randomTalentSources,
			subspecies: e.subspecies,
			"wound-formula-trait-name": e.woundFormulaTraitName,
			onClose: i[0] ||= (e) => n("close"),
			onDelete: r,
			onOpenItem: i[1] ||= (e) => n("openItem", e),
			onCareerTableCareerDrop: i[2] ||= (e, t, r) => n("subspeciesCareerTableCareerDrop", e, t, r),
			onCareerTableJournalDrop: i[3] ||= (e, t, r) => n("subspeciesCareerTableJournalDrop", e, t, r),
			onTalentDrop: i[4] ||= (e, t) => n("subspeciesTalentDrop", e, t),
			onTalentReplacementReplacementDrop: i[5] ||= (e, t, r) => n("subspeciesTalentReplacementReplacementDrop", e, t, r),
			onTalentReplacementRolledDrop: i[6] ||= (e, t, r) => n("subspeciesTalentReplacementRolledDrop", e, t, r),
			onUpdateArrayField: i[7] ||= (e, t, r) => n("updateSubspeciesArrayField", e, t, r),
			onUpdateCharacteristic: i[8] ||= (e, t, r) => n("updateSubspeciesCharacteristic", e, t, r),
			onUpdateNumberField: i[9] ||= (e, t, r) => n("updateSubspeciesNumberField", e, t, r),
			onUpdateStringField: i[10] ||= (e, t, r) => n("updateSubspeciesStringField", e, t, r),
			onUpdateCareerTableRows: i[11] ||= (e, t) => n("updateSubspeciesCareerTableRows", e, t),
			onUpdateWoundFormula: i[12] ||= (e, t) => n("updateSubspeciesWoundFormula", e, t),
			onUpdateTalentReplacementRows: i[13] ||= (e, t) => n("updateSubspeciesTalentReplacementRows", e, t),
			onUpdateTextMapField: i[14] ||= (e, t, r) => n("updateSubspeciesTextMapField", e, t, r)
		}, null, 8, [
			"index",
			"is-loading",
			"is-open",
			"is-saving",
			"parent-talents",
			"random-talent-sources",
			"subspecies",
			"wound-formula-trait-name"
		]));
	}
});
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/tabs/subspecies/subspecies-overlay-events.ts
function Ag(e, t) {
	return {
		close: t.close,
		deleteSubspecies: t.deleteSubspecies,
		openItem: (t) => {
			e("openItem", t);
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
//#region src/view/apps/species-builder/tabs/species/components/SpeciesBuilderEntityRow.vue?vue&type=script&setup=true&lang.ts
var jg = ["aria-current"], Mg = { class: "dui-list-col-grow" }, Ng = {
	key: 0,
	class: "dui-badge dui-badge-ghost"
}, Pg = ["aria-label", "disabled"], Fg = /* @__PURE__ */ I({
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
			H("span", Mg, [H("strong", null, k(e.title), 1), H("span", null, [H("span", { class: O(["dui-badge", { "dui-badge-info": e.isSelected }]) }, k(e.entryKey), 3), e.meta ? (z(), B("span", Ng, k(e.meta), 1)) : G("", !0)])]),
			H("button", {
				"aria-label": `Open ${e.title} editor`,
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.isDisabled,
				type: "button",
				onClick: r[0] ||= (e) => n("open")
			}, [H("i", {
				"aria-hidden": "true",
				class: O(e.editIconClass)
			}, null, 2), W(" " + k(e.isSpecies ? "Edit species" : "Edit"), 1)], 8, Pg)
		], 8, jg));
	}
}), Ig = { class: "dui-card dui-card-border dui-card-sm" }, Lg = { class: "dui-card-body" }, Rg = { class: "dui-navbar" }, zg = { class: "dui-navbar-end" }, Bg = { class: "dui-badge" }, Vg = ["disabled"], Hg = {
	key: 0,
	class: "dui-alert",
	role: "status"
}, Ug = {
	key: 1,
	class: "dui-list"
}, Wg = /* @__PURE__ */ I({
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
			return e.key.trim() || Tf(e);
		}
		return (t, n) => (z(), B("section", Ig, [H("div", Lg, [H("header", Rg, [n[2] ||= H("div", { class: "dui-navbar-start" }, [H("div", null, [H("h3", { class: "dui-card-title" }, "Subspecies"), H("p", null, "Variants inherit this species and store only their changes.")])], -1), H("div", zg, [H("span", Bg, k(i.value.length), 1), H("button", {
			class: "dui-btn dui-btn-sm",
			disabled: e.isLoading || e.isSaving,
			type: "button",
			onClick: n[0] ||= (e) => r("addSubspecies")
		}, [...n[1] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-plus"
		}, null, -1), W(" New Subspecies ", -1)]], 8, Vg)])]), i.value.length === 0 ? (z(), B("div", Hg, [...n[3] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-circle-info"
		}, null, -1), H("span", null, "No subspecies yet.", -1)]])) : (z(), B("ul", Ug, [(z(!0), B(R, null, L(i.value, (t, n) => (z(), V(Fg, {
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
}), Gg = { class: "dui-card-body" }, Kg = /* @__PURE__ */ I({
	__name: "SpeciesBuilderDetailPanel",
	props: {
		definition: {},
		initialEditorTab: {},
		isLoading: { type: Boolean },
		isSaving: { type: Boolean },
		randomTalentSources: {}
	},
	emits: /* @__PURE__ */ "addSubspecies.careerTableCareerDrop.careerTableJournalDrop.careerReplacementChoiceDrop.careerReplacementRolledDrop.delete.deleteSubspecies.duplicate.openItem.subspeciesTalentDrop.subspeciesTalentReplacementReplacementDrop.subspeciesTalentReplacementRolledDrop.talentReplacementReplacementDrop.talentReplacementRolledDrop.updateBooleanField.updateCareerReplacementRows.updateCareerTableRows.updateCharacteristic.updateHeightField.updateNumberField.updateStringField.updateWoundFormula.updateSubspeciesArrayField.updateSubspeciesCharacteristic.updateSubspeciesNumberField.updateSubspeciesStringField.updateSubspeciesCareerTableRows.subspeciesCareerTableCareerDrop.subspeciesCareerTableJournalDrop.updateSubspeciesWoundFormula.updateSubspeciesTalentReplacementRows.updateSubspeciesTextMapField.updateTalentReplacementRows.updateTextMapField".split("."),
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ N(-1), a = /* @__PURE__ */ N(n.initialEditorTab ?? "details"), o = /* @__PURE__ */ N(null), s = K(() => n.definition.subspecies?.[i.value]), c = K(() => Cu(xu(n.definition.talents, n.definition.linkedTalents))), l = K(() => Ec(n.definition)), u = K(() => {
			let e = s.value;
			return e ? Dc(n.definition, e) : "";
		}), d = K(() => a.value === "skills" || a.value === "talents" || a.value === "traits" ? [a.value] : []), f = [
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
				label: "Wounds",
				tab: "wounds"
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
		Kn(() => n.definition.key, () => {
			i.value = -1, a.value = n.initialEditorTab ?? "details";
		}), Kn(() => n.initialEditorTab, (e) => {
			e && (a.value = e);
		}), Kn(() => n.definition.subspecies?.length ?? 0, (e) => {
			i.value >= e && (i.value = -1);
		});
		async function p() {
			let e = n.definition.subspecies?.length ?? 0;
			r("addSubspecies"), await Dn(), await m(e);
		}
		async function m(e) {
			i.value = e, await Dn(), _();
		}
		function h(e) {
			r("deleteSubspecies", e), i.value = -1;
		}
		let g = Ag(r, {
			close: () => {
				i.value = -1;
			},
			deleteSubspecies: h
		});
		function _() {
			let e = o.value?.parentElement ?? null;
			for (; e;) {
				if (v(e)) {
					e.scrollTop = 0;
					return;
				}
				e = e.parentElement;
			}
		}
		function v(e) {
			let t = window.getComputedStyle(e).overflowY;
			return e.scrollHeight > e.clientHeight && (t === "auto" || t === "scroll" || t === "overlay");
		}
		return (t, n) => (z(), B("section", {
			ref_key: "detailPanelElement",
			ref: o,
			class: "dui-card dui-card-border"
		}, [U(kg, ua({
			index: i.value,
			"is-loading": e.isLoading,
			"is-open": i.value >= 0,
			"is-saving": e.isSaving,
			"parent-talents": c.value,
			"random-talent-sources": e.randomTalentSources,
			subspecies: s.value,
			"wound-formula-trait-name": u.value
		}, Dr(P(g))), null, 16, [
			"index",
			"is-loading",
			"is-open",
			"is-saving",
			"parent-talents",
			"random-talent-sources",
			"subspecies",
			"wound-formula-trait-name"
		]), H("div", Gg, [U(Fp, {
			"active-tab": a.value,
			"is-disabled": e.isLoading || e.isSaving,
			tabs: f,
			onDelete: n[0] ||= (e) => r("delete"),
			onDuplicate: n[1] ||= (e) => r("duplicate"),
			onSelectTab: n[2] ||= (e) => a.value = e
		}, null, 8, ["active-tab", "is-disabled"]), a.value === "details" ? (z(), V(fm, {
			key: 0,
			id: "species-editor-panel-details",
			"aria-labelledby": "species-editor-tab-details",
			definition: e.definition,
			"is-disabled": e.isLoading || e.isSaving,
			role: "tabpanel",
			onUpdateBooleanField: n[3] ||= (e, t) => r("updateBooleanField", e, t),
			onUpdateHeightField: n[4] ||= (e, t) => r("updateHeightField", e, t),
			onUpdateStringField: n[5] ||= (e, t) => r("updateStringField", e, t)
		}, null, 8, ["definition", "is-disabled"])) : a.value === "attributes" ? (z(), V(Xp, {
			key: 1,
			id: "species-editor-panel-attributes",
			"aria-labelledby": "species-editor-tab-attributes",
			definition: e.definition,
			"is-disabled": e.isLoading || e.isSaving,
			role: "tabpanel",
			onUpdateCharacteristic: n[6] ||= (e, t) => r("updateCharacteristic", e, t),
			onUpdateNumberField: n[7] ||= (e, t) => r("updateNumberField", e, t)
		}, null, 8, ["definition", "is-disabled"])) : a.value === "wounds" ? (z(), V(Ph, {
			key: 2,
			id: "species-editor-panel-wounds",
			"aria-labelledby": "species-editor-tab-wounds",
			formula: e.definition.woundFormula?.formula,
			"generated-trait-name": l.value,
			"is-disabled": e.isLoading || e.isSaving,
			role: "tabpanel",
			onUpdateWoundFormula: n[8] ||= (e) => r("updateWoundFormula", e)
		}, null, 8, [
			"formula",
			"generated-trait-name",
			"is-disabled"
		])) : d.value.length > 0 ? (z(), V(Tp, {
			key: 3,
			id: `species-editor-panel-${a.value}`,
			"aria-labelledby": `species-editor-tab-${a.value}`,
			fields: d.value,
			"is-disabled": e.isLoading || e.isSaving,
			role: "tabpanel",
			values: e.definition
		}, null, 8, [
			"id",
			"aria-labelledby",
			"fields",
			"is-disabled",
			"values"
		])) : a.value === "tables" ? (z(), V(wh, {
			key: 4,
			id: "species-editor-panel-tables",
			"aria-labelledby": "species-editor-tab-tables",
			help: "Configure random Talent draws, Talent swap offers, and Career replacement choices without writing object-map syntax by hand.",
			"include-career-replacements": "",
			"is-disabled": e.isLoading || e.isSaving,
			"random-talent-sources": e.randomTalentSources,
			role: "tabpanel",
			values: e.definition,
			onCareerTableCareerDrop: n[9] ||= (e, t) => r("careerTableCareerDrop", e, t),
			onCareerTableJournalDrop: n[10] ||= (e, t) => r("careerTableJournalDrop", e, t),
			onCareerReplacementChoiceDrop: n[11] ||= (e, t, n) => r("careerReplacementChoiceDrop", e, t, n),
			onCareerReplacementRolledDrop: n[12] ||= (e, t) => r("careerReplacementRolledDrop", e, t),
			onOpenItem: n[13] ||= (e) => r("openItem", e),
			onTalentReplacementReplacementDrop: n[14] ||= (e, t) => r("talentReplacementReplacementDrop", e, t),
			onTalentReplacementRolledDrop: n[15] ||= (e, t) => r("talentReplacementRolledDrop", e, t),
			onUpdate: n[16] ||= (e, t) => r("updateTextMapField", e, t),
			onUpdateCareerTableRows: n[17] ||= (e) => r("updateCareerTableRows", e),
			onUpdateCareerReplacementRows: n[18] ||= (e) => r("updateCareerReplacementRows", e),
			onUpdateTalentReplacementRows: n[19] ||= (e) => r("updateTalentReplacementRows", e)
		}, null, 8, [
			"is-disabled",
			"random-talent-sources",
			"values"
		])) : (z(), V(Wg, {
			key: 5,
			id: "species-editor-panel-subspecies",
			"aria-labelledby": "species-editor-tab-subspecies",
			definition: e.definition,
			"is-loading": e.isLoading,
			"is-saving": e.isSaving,
			role: "tabpanel",
			onAddSubspecies: p,
			onEditSubspecies: m
		}, null, 8, [
			"definition",
			"is-loading",
			"is-saving"
		]))])], 512));
	}
}), qg = {
	"aria-label": "Species editor navigation",
	class: "dui-navbar"
}, Jg = { class: "dui-navbar-start" }, Yg = {
	key: 0,
	class: "dui-navbar-center"
}, Xg = {
	key: 1,
	class: "dui-navbar-end"
}, Zg = { class: "dui-badge dui-badge-ghost" }, Qg = {
	key: 1,
	role: "status",
	class: "dui-alert dui-alert-warning"
}, $g = /* @__PURE__ */ I({
	__name: "SpeciesBuilderEditorPage",
	props: {
		definition: {},
		initialEditorTab: {},
		isLoading: { type: Boolean },
		isSaving: { type: Boolean },
		randomTalentSources: {}
	},
	emits: /* @__PURE__ */ "addSubspecies.careerTableCareerDrop.careerTableJournalDrop.careerReplacementChoiceDrop.careerReplacementRolledDrop.delete.deleteSubspecies.duplicate.openItem.subspeciesTalentDrop.subspeciesTalentReplacementReplacementDrop.subspeciesTalentReplacementRolledDrop.talentReplacementReplacementDrop.talentReplacementRolledDrop.updateBooleanField.updateCareerReplacementRows.updateCareerTableRows.updateCharacteristic.updateHeightField.updateNumberField.updateStringField.updateWoundFormula.updateSubspeciesArrayField.updateSubspeciesCharacteristic.updateSubspeciesNumberField.updateSubspeciesStringField.updateSubspeciesCareerTableRows.subspeciesCareerTableCareerDrop.subspeciesCareerTableJournalDrop.updateSubspeciesWoundFormula.updateSubspeciesTalentReplacementRows.updateSubspeciesTextMapField.updateTalentReplacementRows.updateTextMapField.close".split("."),
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			return e.name.trim() || e.key.trim() || "Untitled Species";
		}
		function i(e) {
			return e.key.trim() || wf(e);
		}
		return (t, a) => (z(), B("section", null, [H("nav", qg, [
			H("div", Jg, [H("button", {
				class: "dui-btn dui-btn-ghost",
				type: "button",
				onClick: a[0] ||= (e) => n("close")
			}, [...a[35] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-arrow-left"
			}, null, -1), W(" Species List ", -1)]])]),
			e.definition ? (z(), B("div", Yg, [H("h2", null, k(r(e.definition)), 1)])) : G("", !0),
			e.definition ? (z(), B("div", Xg, [H("span", Zg, k(i(e.definition)), 1)])) : G("", !0)
		]), e.definition ? (z(), V(Kg, {
			key: 0,
			definition: e.definition,
			"initial-editor-tab": e.initialEditorTab,
			"is-loading": e.isLoading,
			"is-saving": e.isSaving,
			"random-talent-sources": e.randomTalentSources,
			onAddSubspecies: a[1] ||= (e) => n("addSubspecies"),
			onCareerReplacementChoiceDrop: a[2] ||= (e, t, r) => n("careerReplacementChoiceDrop", e, t, r),
			onCareerReplacementRolledDrop: a[3] ||= (e, t) => n("careerReplacementRolledDrop", e, t),
			onCareerTableCareerDrop: a[4] ||= (e, t) => n("careerTableCareerDrop", e, t),
			onCareerTableJournalDrop: a[5] ||= (e, t) => n("careerTableJournalDrop", e, t),
			onDelete: a[6] ||= (e) => n("delete"),
			onDeleteSubspecies: a[7] ||= (e) => n("deleteSubspecies", e),
			onDuplicate: a[8] ||= (e) => n("duplicate"),
			onOpenItem: a[9] ||= (e) => n("openItem", e),
			onSubspeciesTalentDrop: a[10] ||= (e, t) => n("subspeciesTalentDrop", e, t),
			onSubspeciesCareerTableCareerDrop: a[11] ||= (e, t, r) => n("subspeciesCareerTableCareerDrop", e, t, r),
			onSubspeciesCareerTableJournalDrop: a[12] ||= (e, t, r) => n("subspeciesCareerTableJournalDrop", e, t, r),
			onSubspeciesTalentReplacementReplacementDrop: a[13] ||= (e, t, r) => n("subspeciesTalentReplacementReplacementDrop", e, t, r),
			onSubspeciesTalentReplacementRolledDrop: a[14] ||= (e, t, r) => n("subspeciesTalentReplacementRolledDrop", e, t, r),
			onTalentReplacementReplacementDrop: a[15] ||= (e, t) => n("talentReplacementReplacementDrop", e, t),
			onTalentReplacementRolledDrop: a[16] ||= (e, t) => n("talentReplacementRolledDrop", e, t),
			onUpdateBooleanField: a[17] ||= (e, t) => n("updateBooleanField", e, t),
			onUpdateCareerReplacementRows: a[18] ||= (e) => n("updateCareerReplacementRows", e),
			onUpdateCareerTableRows: a[19] ||= (e) => n("updateCareerTableRows", e),
			onUpdateCharacteristic: a[20] ||= (e, t) => n("updateCharacteristic", e, t),
			onUpdateHeightField: a[21] ||= (e, t) => n("updateHeightField", e, t),
			onUpdateNumberField: a[22] ||= (e, t) => n("updateNumberField", e, t),
			onUpdateStringField: a[23] ||= (e, t) => n("updateStringField", e, t),
			onUpdateWoundFormula: a[24] ||= (e) => n("updateWoundFormula", e),
			onUpdateSubspeciesArrayField: a[25] ||= (e, t, r) => n("updateSubspeciesArrayField", e, t, r),
			onUpdateSubspeciesCharacteristic: a[26] ||= (e, t, r) => n("updateSubspeciesCharacteristic", e, t, r),
			onUpdateSubspeciesNumberField: a[27] ||= (e, t, r) => n("updateSubspeciesNumberField", e, t, r),
			onUpdateSubspeciesStringField: a[28] ||= (e, t, r) => n("updateSubspeciesStringField", e, t, r),
			onUpdateSubspeciesCareerTableRows: a[29] ||= (e, t) => n("updateSubspeciesCareerTableRows", e, t),
			onUpdateSubspeciesWoundFormula: a[30] ||= (e, t) => n("updateSubspeciesWoundFormula", e, t),
			onUpdateSubspeciesTalentReplacementRows: a[31] ||= (e, t) => n("updateSubspeciesTalentReplacementRows", e, t),
			onUpdateSubspeciesTextMapField: a[32] ||= (e, t, r) => n("updateSubspeciesTextMapField", e, t, r),
			onUpdateTalentReplacementRows: a[33] ||= (e) => n("updateTalentReplacementRows", e),
			onUpdateTextMapField: a[34] ||= (e, t) => n("updateTextMapField", e, t)
		}, null, 8, [
			"definition",
			"initial-editor-tab",
			"is-loading",
			"is-saving",
			"random-talent-sources"
		])) : (z(), B("section", Qg, "No species selected."))]));
	}
}), e_ = { class: "dui-card dui-card-border" }, t_ = { class: "dui-card-body" }, n_ = { class: "dui-navbar" }, r_ = { class: "dui-navbar-end" }, i_ = { class: "dui-badge" }, a_ = ["disabled"], o_ = {
	key: 0,
	role: "status",
	class: "dui-alert dui-alert-info"
}, s_ = {
	key: 1,
	class: "dui-list"
}, c_ = /* @__PURE__ */ I({
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
			return e.key.trim() || wf(e);
		}
		return (t, a) => (z(), B("section", e_, [H("div", t_, [H("header", n_, [a[2] ||= H("div", { class: "dui-navbar-start" }, [H("div", null, [H("h2", { class: "dui-card-title" }, "Custom Species"), H("p", null, "Open a species to manage its details, grants, tables, and subspecies.")])], -1), H("div", r_, [H("span", i_, k(e.definitions.length), 1), H("button", {
			class: "dui-btn",
			disabled: e.isDisabled,
			type: "button",
			onClick: a[0] ||= (e) => n("addSpecies")
		}, [...a[1] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-plus"
		}, null, -1), W(" New Species ", -1)]], 8, a_)])]), e.definitions.length === 0 ? (z(), B("div", o_, [...a[3] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-circle-info"
		}, null, -1), H("span", null, "No species yet. Add one to begin.", -1)]])) : (z(), B("ul", s_, [(z(!0), B(R, null, L(e.definitions, (t, a) => (z(), V(Fg, {
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
}), l_ = { class: "dui-card dui-card-border" }, u_ = { class: "dui-card-body" }, d_ = { class: "dui-mockup-code" }, f_ = { tabindex: "0" }, p_ = /* @__PURE__ */ I({
	__name: "WfrpConfigPanel",
	props: { generatedConfigText: {} },
	setup(e) {
		return (t, n) => (z(), B("section", l_, [H("div", u_, [
			n[0] ||= H("h2", { class: "dui-card-title" }, "WFRP Config", -1),
			n[1] ||= H("p", null, " Read-only config generated from the current draft. This view grows with the outer application scroll area. ", -1),
			H("div", d_, [H("pre", f_, [H("code", null, k(e.generatedConfigText), 1)])])
		])]));
	}
}), m_ = ["aria-busy"], h_ = {
	key: 0,
	id: "species-builder-panel-settings",
	"aria-labelledby": "species-builder-tab-settings",
	role: "tabpanel"
}, g_ = {
	key: 1,
	id: "species-builder-panel-wfrp-config",
	"aria-labelledby": "species-builder-tab-wfrp-config",
	role: "tabpanel"
}, __ = {
	key: 2,
	id: "species-builder-panel-species",
	"aria-labelledby": "species-builder-tab-species",
	role: "tabpanel"
}, v_ = /* @__PURE__ */ I({
	__name: "SpeciesBuilderApp",
	props: {
		bridge: {},
		onSettingsSaved: { type: Function }
	},
	setup(e) {
		let t = e, n = Ld(t.bridge, { onSettingsSaved: t.onSettingsSaved }), r = /* @__PURE__ */ N("species"), i = /* @__PURE__ */ N(!1), a = /* @__PURE__ */ N("details"), o = /* @__PURE__ */ N(null), s = /* @__PURE__ */ N(Ko[0]?.id ?? ""), c = K(() => n.isLoading.value || n.isSaving.value), l = K(() => {
			let e = n.duplicateSubspeciesKeys.value[0];
			return e ? `Duplicate subspecies key in ${e.speciesName}: ${e.keys.join(", ")}` : "";
		});
		hr(() => {
			n.loadSettings();
		}), Kn(() => n.showGeneratedConfigTab.value, (e) => {
			!e && r.value === "wfrp-config" && (r.value = "species");
		});
		function u(e) {
			return e.name.trim() || e.key.trim() || "Untitled Species";
		}
		function d(e) {
			(e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement || e.target instanceof HTMLTextAreaElement) && e.stopPropagation();
		}
		function f() {
			let e = n.selectedDefinition.value;
			e && (o.value = {
				kind: "species",
				message: `Delete species "${u(e)}"?`
			});
		}
		function p() {
			n.addBlankDefinition(), _("details");
		}
		function m(e) {
			let t = Jo(e);
			t && (n.addDefinition(t), _("details"));
		}
		function h() {
			n.addDefinitions(qo()), _("details");
		}
		function g(e, t = "details") {
			n.selectDefinition(e), _(t);
		}
		function _(e) {
			r.value = "species", a.value = e, i.value = !0;
		}
		function v(e) {
			r.value = e, e === "species" && (i.value = !1);
		}
		function y(e) {
			let t = n.selectedDefinition.value?.subspecies?.[e];
			t && (o.value = {
				index: e,
				kind: "subspecies",
				message: `Delete subspecies "${t.name.trim() || t.key.trim() || "Untitled Subspecies"}"?`
			});
		}
		function b() {
			let e = o.value;
			e && (e.kind === "species" ? n.deleteSelectedDefinition() : n.deleteSubspecies(e.index), o.value = null);
		}
		let x = Cf(n, {
			close: () => {
				i.value = !1;
			},
			requestDeleteSelectedDefinition: f,
			requestDeleteSubspecies: y
		});
		return (e, t) => (z(), B("section", {
			"aria-busy": c.value,
			onKeydown: d,
			onKeyup: d
		}, [
			U($d, {
				"active-tab": r.value,
				"can-save": P(n).canSave.value,
				"is-busy": c.value,
				"show-generated-config-tab": P(n).showGeneratedConfigTab.value,
				onReload: P(n).loadSettings,
				onSave: P(n).saveSettings,
				onSelectTab: v
			}, null, 8, [
				"active-tab",
				"can-save",
				"is-busy",
				"show-generated-config-tab",
				"onReload",
				"onSave"
			]),
			U(lf, {
				"duplicate-keys": P(n).duplicateKeys.value,
				"duplicate-subspecies-message": l.value,
				"has-unsaved-changes": P(n).hasUnsavedChanges.value,
				"invalid-definition-count": P(n).invalidDefinitionIndexes.value.length,
				"invalid-subspecies-count": P(n).invalidSubspeciesEntries.value.length,
				"load-error": P(n).loadError.value,
				message: P(n).message.value
			}, null, 8, [
				"duplicate-keys",
				"duplicate-subspecies-message",
				"has-unsaved-changes",
				"invalid-definition-count",
				"invalid-subspecies-count",
				"load-error",
				"message"
			]),
			U(Vd, {
				message: o.value?.message,
				onClose: t[0] ||= (e) => o.value = null,
				onConfirm: b
			}, null, 8, ["message"]),
			r.value === "settings" ? (z(), B("section", h_, [U(Sf, {
				"example-species-options": P(Ko),
				"is-disabled": c.value,
				"selected-example-species-id": s.value,
				"show-generated-config-tab": P(n).showGeneratedConfigTab.value,
				onGenerateAllExampleSpecies: h,
				onGenerateExampleSpecies: m,
				onUpdateSelectedExampleSpeciesId: t[1] ||= (e) => s.value = e,
				onUpdateShowGeneratedConfigTab: P(n).updateShowGeneratedConfigTab
			}, null, 8, [
				"example-species-options",
				"is-disabled",
				"selected-example-species-id",
				"show-generated-config-tab",
				"onUpdateShowGeneratedConfigTab"
			])])) : r.value === "wfrp-config" ? (z(), B("section", g_, [U(p_, { "generated-config-text": P(n).generatedConfigText.value }, null, 8, ["generated-config-text"])])) : i.value ? (z(), V($g, ua({
				key: 3,
				id: "species-builder-panel-species",
				"aria-labelledby": "species-builder-tab-species",
				definition: P(n).selectedDefinition.value,
				"initial-editor-tab": a.value,
				"is-loading": P(n).isLoading.value,
				"is-saving": P(n).isSaving.value,
				"random-talent-sources": P(n).randomTalentSources.value,
				role: "tabpanel"
			}, Dr(P(x))), null, 16, [
				"definition",
				"initial-editor-tab",
				"is-loading",
				"is-saving",
				"random-talent-sources"
			])) : (z(), B("section", __, [U(c_, {
				definitions: P(n).definitions.value,
				"is-disabled": c.value,
				"selected-index": P(n).selectedIndex.value,
				onAddSpecies: p,
				onEditSpecies: g
			}, null, 8, [
				"definitions",
				"is-disabled",
				"selected-index"
			])]))
		], 40, m_));
	}
}), $ = "wfrp4e-customizer-apps", y_ = "wfrp4e", b_ = ps();
//#endregion
//#region src/module/foundry/document-drop.ts
function x_(e) {
	let t = e.value.trim();
	if (!t) return "";
	if (k_(t)) return t;
	let n = T_(t), r = D_(n, e.documentType);
	return r ? A_(n) ? JSON.stringify({
		type: r,
		uuid: n
	}) : JSON.stringify({
		id: n,
		type: r
	}) : "";
}
function S_(e) {
	let t = !0;
	function n() {
		t && (t = !1, document.removeEventListener("click", r, !0));
	}
	function r(t) {
		let r = t.target;
		if (!(r instanceof Element)) return;
		let i = C_(r);
		i && (t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), n(), e(i));
	}
	return document.addEventListener("click", r, !0), n;
}
function C_(e) {
	let t = e.closest("[data-uuid], [data-document-uuid], [data-entry-uuid], [data-document-id], [data-entry-id], [data-pack]");
	if (!t) return "";
	let n = t.dataset.uuid || t.dataset.documentUuid || t.dataset.entryUuid || "";
	if (n) return w_(n);
	let r = t.dataset.documentId || t.dataset.entryId || "", i = E_(t);
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
function w_(e) {
	let t = D_(e, "auto");
	return t ? JSON.stringify({
		type: t,
		uuid: e
	}) : "";
}
function T_(e) {
	return /@UUID\[([^\]]+)]/.exec(e)?.[1]?.trim() ?? e;
}
function E_(e) {
	let t = e.dataset.documentName || e.dataset.type || e.closest("[data-document-name]")?.dataset.documentName || "";
	return O_(t) ? t : e.classList.contains("actor") ? "Actor" : e.classList.contains("item") ? "Item" : e.classList.contains("journal") ? "JournalEntry" : e.closest("#actors") ? "Actor" : e.closest("#items") ? "Item" : e.closest("#journal") ? "JournalEntry" : "";
}
function D_(e, t) {
	return /^actor\./i.test(e) || /\.actors(\.|$)/i.test(e) ? "Actor" : /^item\./i.test(e) || /\.items(\.|$)/i.test(e) ? "Item" : /journalentrypage\./i.test(e) || /\.journalentrypage\./i.test(e) ? "JournalEntryPage" : /^journalentry\./i.test(e) || /\.journals(\.|$)/i.test(e) ? "JournalEntry" : t === "auto" ? "Item" : t;
}
function O_(e) {
	return e === "Actor" || e === "Item" || e === "JournalEntry" || e === "JournalEntryPage";
}
function k_(e) {
	if (!e.startsWith("{")) return !1;
	try {
		return typeof JSON.parse(e).type == "string";
	} catch {
		return !1;
	}
}
function A_(e) {
	return /^(actor|item|journalentry|journalentrypage|compendium)\./i.test(e);
}
var j_ = {
	createDropData: x_,
	startDocumentPick: S_
}, M_ = class extends foundry.applications.api.ApplicationV2 {
	#e;
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("wfrp4e-customizer-apps-root"), n.dataset.theme = "wfrp4e-customizer-apps", n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("wfrp4e-customizer-apps-app"), t.replaceChildren(e);
		let r = this.getVueProps() ?? {};
		this.#e = Po(this.getVueComponent(), r), this.#e.use(b_), this.#e.provide(Ef, j_), this.#e.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#e?.unmount(), this.#e = void 0;
	}
}, N_ = "generatedSpeciesCareerTable", P_ = "Compendium.wfrp4e-core.journals.JournalEntry.wczCPcuHT4VQDLpL";
function F_(e) {
	return e.definitions.flatMap((e) => [...L_(e), ...R_(e)]);
}
function I_({ fallbackJournalUuid: e = P_, flagScope: t, spec: n }) {
	return {
		displayRoll: !0,
		flags: {
			wfrp4e: {
				column: n.column,
				key: "career"
			},
			[t]: { [N_]: {
				speciesKey: n.speciesKey,
				subspeciesKey: n.subspeciesKey ?? ""
			} }
		},
		formula: `1d${n.rows.length}`,
		img: "systems/wfrp4e/ui/buttons/d10.webp",
		name: n.name,
		replacement: !0,
		results: n.rows.map((t, n) => ({
			description: z_(t, e),
			drawn: !1,
			img: "icons/svg/d20-grey.svg",
			name: t.name,
			range: [n + 1, n + 1],
			type: "text",
			weight: 1
		}))
	};
}
function L_(e) {
	return e.careerTable?.rows.length ? [{
		column: Bc(e),
		name: `Career - ${e.name}`,
		rows: e.careerTable.rows,
		speciesKey: e.key
	}] : [];
}
function R_(e) {
	return (e.subspecies ?? []).flatMap((t) => t.careerTable?.rows.length ? [{
		column: Vc(e, t),
		name: `Career - ${e.name} / ${t.name}`,
		rows: t.careerTable.rows,
		speciesKey: e.key,
		subspeciesKey: t.key
	}] : []);
}
function z_(e, t) {
	return `@UUID[${e.journalUuid?.trim() || t}]{${B_(e.name)}}`;
}
function B_(e) {
	return e.replaceAll("{", "").replaceAll("}", "").trim();
}
//#endregion
//#region src/functions/species-builder/default-species-builder-settings.ts
function V_() {
	return {
		definitions: [],
		showGeneratedConfigTab: !1
	};
}
//#endregion
//#region src/module/settings/foundry-setting-adapter.ts
function H_(e) {
	return e;
}
function U_(e) {
	game.settings.register($, e.key, {
		config: e.config ?? !1,
		default: e.defaultValue,
		name: e.name,
		scope: e.scope ?? "world",
		type: Object
	});
}
function W_(e) {
	return e.normalize(game.settings.get($, e.key));
}
async function G_(e, t) {
	let n = e.normalize(t);
	return await game.settings.set($, e.key, n), n;
}
//#endregion
//#region src/module/apps/species-builder/settings.ts
var K_ = H_({
	defaultValue: V_(),
	key: "speciesBuilderSettings",
	name: "Species Builder Settings",
	normalize: dl
});
function q_() {
	U_(K_);
}
function J_() {
	return W_(K_);
}
async function Y_(e) {
	return await G_(K_, e);
}
//#endregion
//#region src/module/apps/species-builder/career-tables.ts
var X_ = "WFRP Customizer Generated Career Tables", Z_ = "WFRP Customizer Career Table Link Fallback";
async function Q_(t = J_()) {
	let n = F_(t), r = await $_(), i = await nv();
	await ev(r);
	for (let e of n) {
		let t = I_({
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
async function $_() {
	let e = game.folders.contents.find((e) => e.type === "RollTable" && e.name === X_);
	if (e) return e;
	let t = await Folder.create({
		name: X_,
		type: "RollTable"
	});
	if (!t) throw Error("Foundry did not create the generated career table folder.");
	return t;
}
async function ev(e) {
	let t = (game.tables?.contents ?? []).filter((t) => t.folder?.id === e.id || tv(t));
	for (let e of t) await e.delete();
}
function tv(e) {
	return Y(X(e.toObject(), [
		"flags",
		$,
		N_
	]));
}
async function nv() {
	let e = game.journal?.contents.find((e) => e.name === Z_);
	if (e) return e.uuid;
	let t = await JournalEntry.create({
		name: Z_,
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
function rv(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Actor";
}
function iv(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Item";
}
function av(e, t = "Expected a Foundry Actor.") {
	if (!rv(e)) throw Error(t);
	return e;
}
function ov(e, t = "Expected a Foundry Item.") {
	if (!iv(e)) throw Error(t);
	return e;
}
function sv(e, t, n = `Expected a Foundry ${t} Item.`) {
	let r = ov(e, n);
	if (r.type !== t) throw Error(n);
	return r;
}
//#endregion
//#region src/module/foundry/drop-data.ts
function cv(e) {
	try {
		return JSON.parse(e);
	} catch {
		throw Error("Foundry drop data could not be read.");
	}
}
//#endregion
//#region src/module/apps/species-builder/item-drops.ts
async function lv(e, t) {
	let n = cv(e);
	if (n.type !== "Item" || !n.uuid) throw Error(`Drop a Foundry ${t} item here.`);
	let r = ov(await fromUuid(n.uuid), `Drop a Foundry ${t} item here.`);
	if (r.type !== t) throw Error(`Drop a Foundry ${t} item here.`);
	let i = {
		name: t === "career" && pv(r) || r.name,
		type: t,
		uuid: r.uuid
	};
	if (t === "career") {
		let e = mv(r);
		e && (i.careerJournalUuid = e);
	}
	let a = fv(r);
	return a && (i.specification = a), r.img && (i.img = r.img), i;
}
async function uv(e) {
	let t = cv(e);
	if (t.type !== "JournalEntry" && t.type !== "JournalEntryPage" || !t.uuid) throw Error("Drop a Foundry Journal Entry or Journal Entry Page here.");
	let n = await fromUuid(t.uuid);
	if (!_v(n)) throw Error("Drop a Foundry Journal Entry or Journal Entry Page here.");
	return {
		name: n.name,
		uuid: n.uuid
	};
}
async function dv(e) {
	ov(await fromUuid(e), "The linked Foundry Item was not found.").sheet?.render(!0);
}
function fv(e) {
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
function pv(e) {
	let t = X(e.system, ["careergroup", "value"]);
	return typeof t == "string" ? t.trim() : "";
}
function mv(e) {
	let t = X(e.system, ["description", "value"]);
	return typeof t == "string" ? /^@UUID\[([^\]]+)]{[^{}]+}$/.exec(hv(t))?.[1]?.trim() ?? "" : "";
}
function hv(e) {
	let t = e.trim();
	t = t.replaceAll(/<(p|div)>(?:\s|&nbsp;|<br\s*\/?>)*<\/\1>/gi, "").trim();
	let n = /^<(p|div)>([\S\s]*)<\/\1>$/i.exec(t);
	return n?.[2] !== void 0 && (t = n[2].trim()), gv(t.replaceAll(/<br\s*\/?>/gi, "").trim());
}
function gv(e) {
	return e.replaceAll("&nbsp;", " ").replaceAll("&amp;", "&").replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", "\"").replaceAll("&#39;", "'").trim();
}
function _v(e) {
	return typeof e == "object" && !!e && "documentName" in e && (e.documentName === "JournalEntry" || e.documentName === "JournalEntryPage") && "name" in e && typeof e.name == "string" && "uuid" in e && typeof e.uuid == "string";
}
//#endregion
//#region src/module/apps/species-builder/random-talent-sources.ts
var vv = {
	key: "talents",
	label: "Talents - Character Creation"
};
function yv() {
	let e = /* @__PURE__ */ new Map();
	e.set(vv.key, vv);
	for (let t of game.tables?.contents ?? []) {
		let n = t.getFlag("wfrp4e", "key");
		if (typeof n != "string" || !n.trim()) continue;
		let r = bv(n, t);
		e.set(n, {
			key: n,
			label: r
		});
	}
	return [...e.values()].sort(xv);
}
function bv(e, t) {
	let n = game.wfrp4e?.tables?.findTable?.(e);
	return (Y(n) && typeof n.name == "string" ? n.name : t.name).trim() || e;
}
function xv(e, t) {
	return e.key === vv.key ? -1 : t.key === vv.key ? 1 : e.label.localeCompare(t.label);
}
//#endregion
//#region src/module/apps/species-builder/wound-formula-traits.ts
var Sv = "WFRP Customizer Generated Species Traits";
async function Cv(t = J_()) {
	let n = Tc(t), r = await wv();
	await Tv(r);
	for (let e of n) {
		let t = Oc({
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
async function wv() {
	let e = game.folders.contents.find((e) => e.type === "Item" && e.name === Sv);
	if (e) return e;
	let t = await Folder.create({
		name: Sv,
		type: "Item"
	});
	if (!t) throw Error("Foundry did not create the generated Species Trait folder.");
	return t;
}
async function Tv(e) {
	let t = (game.items?.contents ?? []).filter((t) => t.folder?.id === e.id || Ev(t));
	for (let e of t) await e.delete();
}
function Ev(e) {
	return Y(X(e.toObject(), [
		"flags",
		$,
		wc
	]));
}
//#endregion
//#region src/module/apps/species-builder/foundry-bridge.ts
async function Dv(e) {
	let t = await Y_(e);
	return await Q_(t), await Cv(t), t;
}
var Ov = {
	loadSettings: async () => J_(),
	loadRandomTalentSources: async () => yv(),
	openItemSheet: dv,
	resolveItemDrop: lv,
	resolveJournalDrop: uv,
	saveSettings: Dv
};
//#endregion
//#region src/module/apps/species-builder/reload-confirmation.ts
function kv() {
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
var Av = class extends M_ {
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
		return v_;
	}
	getVueProps() {
		return {
			bridge: Ov,
			onSettingsSaved: () => {
				this.#e = !0;
			}
		};
	}
	async _preClose(e) {
		let t = this.#e;
		this.#e = !1, t && await kv() && window.location.reload(), await super._preClose(e);
	}
};
//#endregion
//#region src/functions/npc-builder/create-default-trait-config.ts
function jv() {
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
function Mv(e, t) {
	return `${e}:${Rv(t)}`;
}
function Nv(e) {
	let t = e.level ?? 1;
	return Number.isFinite(t) ? Math.max(1, Math.floor(t)) * 5 : 5;
}
function Pv(e) {
	return e.name;
}
function Fv(e, t) {
	return e === "characteristic" ? t.allowBaseActorCharacteristics : e === "skill" ? t.allowBaseActorSkills : t.allowBaseActorTalents;
}
function Iv(e, t) {
	return {
		...jv(),
		...e,
		...t
	};
}
function Lv(e, t) {
	return Rv(e) === Rv(t);
}
function Rv(e) {
	return e.trim().toLocaleLowerCase();
}
function zv(e) {
	return Number.isFinite(e) ? Math.max(1, Math.floor(e)) : 1;
}
function Bv(e) {
	let t = 0;
	for (let n of e) t += n.count;
	return t;
}
function Vv(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = Rv(r);
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
//#endregion
//#region src/functions/npc-builder/skill-specialization.ts
function Hv(e, t, n) {
	return `${e}:${qv(t)}:${n}`;
}
function Uv(e, t) {
	let n = e.trim(), r = t.trim();
	return r ? `${n} (${r})` : n;
}
function Wv(e) {
	let t = /^(?<base>.+?)\s*\((?<specialization>[^)]+)\)\s*$/.exec(e.trim());
	if (!t?.groups) return null;
	let n = t.groups.base?.trim() ?? "", r = t.groups.specialization?.trim() ?? "";
	return !n || !r || Gv(e) ? null : {
		baseName: n,
		originalName: e,
		specialization: r
	};
}
function Gv(e) {
	let t = /^(?<base>.+?)\s*\((?<specialization>[^)]+)\)\s*$/.exec(e.trim());
	if (!t?.groups) return null;
	let n = t.groups.base?.trim() ?? "", r = t.groups.specialization?.trim() ?? "", i = Yv(r);
	return !n || !r || !Jv(r, i) ? null : {
		baseName: n,
		options: i,
		originalName: e,
		specialization: r
	};
}
function Kv(e, t) {
	let n = /* @__PURE__ */ new Map();
	return t.map((t) => {
		let r = qv(t), i = n.get(r) ?? 0;
		return n.set(r, i + 1), {
			occurrence: i,
			originalName: t,
			resolutionKey: Hv(e, t, i)
		};
	});
}
function qv(e) {
	return e.trim().replaceAll(/\s+/g, " ").toLocaleLowerCase();
}
function Jv(e, t) {
	return e.trim().toLocaleLowerCase() === "any" || t.length > 1;
}
function Yv(e) {
	return e.split(/\s+or\s+/i).map((e) => e.trim()).filter(Boolean);
}
//#endregion
//#region src/functions/npc-builder/advancements/source-counts.ts
function Xv(e, t) {
	return t <= 0 ? [] : [{
		count: t,
		kind: "career",
		label: `${e} extra time`
	}];
}
function Zv(e, t) {
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
function Qv(e, t, n, r) {
	let i = ey($v(e, r), n);
	return i.value === null ? t : Math.min(t, Math.max(0, i.value - e.baseAdvances));
}
function $v(e, t) {
	let n = t[Rv(e.name)];
	return {
		maximumFormula: e.talentMaximumFormula ?? n?.maximumFormula ?? "",
		maximumKey: e.talentMaximumKey ?? n?.maximumKey ?? ""
	};
}
function ey(e, t) {
	let n = e.maximumKey.trim().toLocaleLowerCase();
	if (!n) return {
		label: "Unknown",
		value: null
	};
	if (n === "none") return {
		label: "-",
		value: null
	};
	if (n === "custom") return ty(e.maximumFormula, t);
	let r = Number(n);
	if (Number.isFinite(r)) {
		let e = Math.max(0, Math.floor(r));
		return {
			label: `${e}`,
			value: e
		};
	}
	if (Ys(n)) {
		let e = t[n] ?? 0, r = Math.max(0, Math.floor(e / 10));
		return {
			label: `${qs[n]} Bonus (${r})`,
			value: r
		};
	}
	return {
		label: e.maximumKey || "Unknown",
		value: null
	};
}
function ty(e, t) {
	let n = e.trim(), r = Number(n);
	if (Number.isFinite(r)) {
		let e = Math.max(0, Math.floor(r));
		return {
			label: `${e}`,
			value: e
		};
	}
	let i = /@characteristics\.([a-z]+)\.bonus/i.exec(n)?.[1]?.toLocaleLowerCase();
	if (i && Ys(i)) {
		let e = t[i] ?? 0, n = Math.max(0, Math.floor(e / 10));
		return {
			label: `${qs[i]} Bonus (${n})`,
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
function ny(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e.careers) {
		let i = Vv(ay(r, t, e.skillGrantResolutions)), a = Nv(r) / 5, o = Math.max(0, zv(r.quantity) - 1) * 5;
		for (let e of i) {
			let i = Mv(t, e), s = n.get(i);
			if (s) {
				a > s.highestLevel && (s.highestLevel = a, s.highestLevelSource = Pv(r)), o > 0 && s.extraSources.push({
					count: o,
					kind: "career",
					label: `${r.name} extra time`
				});
				continue;
			}
			n.set(i, {
				extraSources: Xv(r.name, o),
				highestLevel: a,
				highestLevelSource: Pv(r),
				name: e
			});
		}
	}
	for (let r of n.values()) iy(e, {
		careerValue: r.highestLevel * 5 + Bv(r.extraSources),
		kind: t,
		name: r.name,
		sources: [{
			count: r.highestLevel * 5,
			kind: "career",
			label: r.highestLevelSource
		}, ...r.extraSources]
	});
}
function ry(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.careers) {
		let r = Vv(ay(n, "talent", e.skillGrantResolutions)), i = Math.max(0, zv(n.quantity) - 1);
		for (let e of r) {
			let r = Mv("talent", e), a = t.get(r);
			if (a) {
				i > 0 && a.extraSources.push({
					count: i,
					kind: "career",
					label: `${n.name} extra time`
				});
				continue;
			}
			t.set(r, {
				extraSources: Xv(n.name, i),
				firstSource: n.name,
				name: e
			});
		}
	}
	for (let n of t.values()) iy(e, {
		careerValue: 1 + Bv(n.extraSources),
		kind: "talent",
		name: n.name,
		sources: [{
			count: 1,
			kind: "career",
			label: n.firstSource
		}, ...n.extraSources]
	}, e.characteristicTotals);
}
function iy(e, t, n = {}) {
	let r = Mv(t.kind, t.name), i = e.entries.get(r);
	if (i) {
		let r = t.kind === "talent" && i.includedFromBase ? t.sources.slice(1) : t.sources, a = t.kind === "talent" ? Qv(i, Bv(r), n, e.talentMaximums) : t.careerValue;
		i.careerValue = a, i.includedFromCareer = !0, i.sources = [...i.sources.filter((e) => e.kind === "base"), ...Zv(r, a)];
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
	t.kind === "talent" && (a.careerValue = Qv(a, t.careerValue, n, e.talentMaximums), a.current = a.careerValue, a.sources = Zv(t.sources, a.careerValue)), e.entries.set(r, { ...a });
}
function ay(e, t, n) {
	return t === "characteristic" ? e.grants.characteristics : t === "skill" ? Kv(e.uuid, e.grants.skills).map((e) => n[e.resolutionKey] || e.originalName) : e.grants.talents;
}
//#endregion
//#region src/functions/npc-builder/advancements/entry-context.ts
function oy(e, t) {
	let n = {};
	for (let r of e.values()) {
		if (r.kind !== "characteristic") continue;
		let e = Js[Rv(r.name)];
		if (!e) continue;
		let i = t[Mv(r.kind, r.name)] ?? 0, a = Math.max(r.minimumCurrent, Math.floor(r.careerValue + i));
		n[e] = Math.max(0, r.baseValue + a);
	}
	return n;
}
function sy(e, t, n) {
	return e.kind === "skill" ? cy(e, t, n) : e.kind === "talent" ? ly(e, t, n) : e;
}
function cy(e, t, n) {
	let r = uy(e.name, n.skillCharacteristics) ?? dy(e.name, n.baseActorDraftData);
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
function ly(e, t, n) {
	let r = $v(e, n.talentMaximums), i = ey(r, t);
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
function uy(e, t) {
	return t[Rv(e)] ?? null;
}
function dy(e, t) {
	let n = t.advancements.find((t) => t.kind === "skill" && Lv(t.name, e));
	return n?.characteristicKey ? {
		characteristicKey: n.characteristicKey,
		characteristicName: n.characteristicName ?? qs[n.characteristicKey],
		skillName: e
	} : null;
}
//#endregion
//#region src/functions/npc-builder/advancements/derive-advancements.ts
function fy(e) {
	let t = _y(e.baseActorDraftData), n = {
		careers: e.careers,
		entries: t,
		skillGrantResolutions: e.skillGrantResolutions,
		talentMaximums: e.talentMaximums
	};
	ny(n, "characteristic"), ny(n, "skill");
	let r = oy(t, e.manualAdvancementDeltas);
	return ry({
		...n,
		characteristicTotals: r
	}), [...t.values()].filter((t) => t.includedFromCareer || Fv(t.kind, e.settings)).map((t) => {
		let n = sy(t, r, e), i = Mv(t.kind, t.name), a = e.manualAdvancementDeltas[i] ?? 0, o = n.careerValue + a;
		return {
			...n,
			current: Math.max(n.minimumCurrent, Math.floor(o))
		};
	}).sort(vy);
}
function py(e, t) {
	let n = Number.isFinite(t) ? t : 0;
	return Math.max(e.minimumCurrent, Math.floor(n)) - e.careerValue;
}
function my(e, t) {
	let n = Number.isFinite(t) ? t : 0;
	return py(e, Math.max(e.minimumTotal, Math.floor(n)) - e.baseValue);
}
function hy(e, t) {
	return {
		...e,
		...Object.fromEntries(t.map((e) => [Rv(e.skillName), e]))
	};
}
function gy(e, t) {
	return {
		...e,
		...Object.fromEntries(t.map((e) => [Rv(e.talentName), e]))
	};
}
function _y(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.advancements) {
		let e = Mv(n.kind, n.name), r = {
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
		n.characteristicKey && (r.characteristicKey = n.characteristicKey, r.characteristicName = n.characteristicName ?? qs[n.characteristicKey]), n.kind === "talent" && n.baseAdvances > 0 && r.sources.push({
			count: n.baseAdvances,
			kind: "base",
			label: "Base"
		}), n.talentMaximumFormula && (r.talentMaximumFormula = n.talentMaximumFormula), n.talentMaximumKey && (r.talentMaximumKey = n.talentMaximumKey), t.set(e, r);
	}
	return t;
}
function vy(e, t) {
	return e.kind === t.kind ? e.name.localeCompare(t.name) : e.kind.localeCompare(t.kind);
}
//#endregion
//#region src/functions/npc-builder/advancements/advancement-actions.ts
function yy(e) {
	return e.kind === "talent" ? 1 : 5;
}
function by(e) {
	return Math.max(e.minimumTotal, e.baseValue + e.current);
}
function xy(e, t) {
	return by(e) + t * yy(e);
}
function Sy(e) {
	return by(e);
}
function Cy(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" && Sy(e) < t;
}
function wy(e) {
	return e.filter((e) => e.kind === "talent" && Cy(e)).map((e) => ({
		kind: e.kind,
		name: e.name,
		total: e.talentMaximumValue
	}));
}
function Ty(e, t) {
	let n = new Map(e.map((e) => [Dy(e), e])), r = [];
	for (let e of t) {
		let t = n.get(Dy(e));
		!t || t.current === e.current || r.push({
			current: e.current,
			kind: t.kind,
			name: t.name
		});
	}
	return r;
}
function Ey(e, t) {
	return e.find((e) => e.kind === t.kind && e.name === t.name) ?? null;
}
function Dy(e) {
	return `${e.kind}:${e.name}`;
}
//#endregion
//#region src/functions/npc-builder/xp-cost.ts
var Oy = {
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
function ky(e) {
	let t = {
		characteristics: 0,
		skills: 0,
		talents: 0,
		total: 0
	};
	for (let n of e) {
		let e = Ay(n);
		n.kind === "characteristic" ? t.characteristics += e : n.kind === "skill" ? t.skills += e : t.talents += e;
	}
	return t.total = t.characteristics + t.skills + t.talents, t;
}
function Ay(e) {
	let t = jy(e);
	return e.kind === "talent" ? Ny(Math.max(0, Math.floor(e.current)), Math.max(0, Math.floor(e.baseAdvances))) : My(t, e.kind === "characteristic" ? Oy.characteristic : Oy.skill);
}
function jy(e) {
	return Math.max(0, Math.floor(e.baseAdvances + e.current));
}
function My(e, t) {
	let n = Math.max(0, Math.floor(e)), r = 0;
	for (let e = 0; e < n; e += 1) {
		let n = Math.min(Math.floor(e / 5), t.length - 1);
		r += t[n] ?? 0;
	}
	return r;
}
function Ny(e, t = 0) {
	let n = Math.max(0, Math.floor(e)), r = Math.max(0, Math.floor(t)), i = 0;
	for (let e = 0; e < n; e += 1) i += (r + e + 1) * 100;
	return i;
}
//#endregion
//#region src/state/npc-builder/advancements/index.ts
function Py(e) {
	let { baseActorDraftData: t, careers: n, manualAdvancementDeltas: r, settings: i, skillCharacteristics: a, skillGrantResolutions: o, talentMaximums: s } = e, c = K(() => fy({
		baseActorDraftData: t.value,
		careers: n.value,
		manualAdvancementDeltas: r.value,
		settings: i.value,
		skillCharacteristics: a.value,
		skillGrantResolutions: o.value,
		talentMaximums: s.value
	})), l = K(() => ky(c.value)), u = K(() => wy(c.value).length);
	function d(e, t) {
		v(e, xy(e, t));
	}
	function f() {
		for (let e of wy(c.value)) {
			let t = Ey(c.value, e);
			t && v(t, e.total);
		}
	}
	function p(e, t) {
		let n = Math.max(0, Math.floor(Number.isFinite(t) ? t : 0)), r = e.run({ advancements: c.value }, n), i = Ty(c.value, r.advancements);
		for (let e of i) {
			let t = Ey(c.value, e);
			t && _(t, e.current);
		}
	}
	function m(e) {
		return o.value[e] ?? "";
	}
	function h(e) {
		a.value = hy(a.value, e);
	}
	function g(e) {
		s.value = gy(s.value, e);
	}
	function _(e, t) {
		let n = Mv(e.kind, e.name);
		r.value[n] = py(e, t);
	}
	function v(e, t) {
		let n = Mv(e.kind, e.name);
		r.value[n] = my(e, t);
	}
	function y(e) {
		let t = Mv(e.kind, e.name);
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
function Fy(e, t) {
	return e.find((e) => e.uuid === t) ?? null;
}
function Iy(e) {
	return e.at(-1) ?? null;
}
function Ly(e) {
	let t = e.finalCareer?.name, n = e.settings.includeSpeciesInName && e.selectedBaseActor?.species ? e.selectedBaseActor.species : "";
	return t && n ? `${n} ${t}` : t || (e.selectedBaseActor ? `${e.selectedBaseActor.name} NPC` : "New NPC");
}
function Ry(e, t) {
	return e.trim() || t;
}
function zy(e) {
	return e.finalCareer?.img || e.selectedBaseActor?.prototypeTokenImg || e.selectedBaseActor?.img || "";
}
function By(e, t) {
	return e || t;
}
function Vy(e) {
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
function Hy(e) {
	let { actorName: t, baseActors: n, careers: r, clearBaseDraftData: i, customSpells: a, customTraits: o, customTrappings: s, detectedSpells: c, ignoredBaseTraitKeys: l, magicLoreResolutions: u, removeSkillGrantResolutionsForCareer: d, selectedBaseActorUuid: f, selectedPortraitPath: p, settings: m, skillGrantResolutions: h, spellSelectionOverrides: g } = e, _ = K(() => Fy(n.value, f.value)), v = K(() => Iy(r.value)), y = K(() => Ly({
		finalCareer: v.value,
		selectedBaseActor: _.value,
		settings: m.value
	})), b = K(() => Ry(t.value, y.value)), x = K(() => zy({
		finalCareer: v.value,
		selectedBaseActor: _.value
	})), S = K(() => By(p.value, x.value)), C = K(() => Vy(r.value));
	function w(e) {
		let t = r.value.find((t) => t.uuid === e.uuid);
		if (t) {
			t.quantity = zv(t.quantity + 1);
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
	function ee(e, t) {
		let n = r.value[e];
		!n || e === t || t < 0 || t >= r.value.length || (r.value.splice(e, 1), r.value.splice(t, 0, n));
	}
	function te(e) {
		let [t] = r.value.splice(e, 1);
		t && d(t.uuid);
	}
	function ne() {
		t.value = "", r.value = [], o.value = [], s.value = [], a.value = [], c.value = [], l.value = {}, u.value = {}, p.value = "", h.value = {}, g.value = {}, f.value = "", i();
	}
	function re(e) {
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
		n && (n.quantity = zv(t));
	}
	return {
		addCareer: w,
		addCareerIfMissing: T,
		finalActorName: b,
		finalCareer: v,
		finalPortraitPath: S,
		grantTotals: C,
		moveCareer: E,
		moveCareerToIndex: ee,
		removeCareer: te,
		resetDraft: ne,
		selectBaseActor: re,
		selectBaseActorUuid: ie,
		selectedBaseActor: _,
		selectPortrait: ae,
		setCareerQuantity: oe,
		suggestedActorName: y
	};
}
//#endregion
//#region src/state/npc-builder/hydration.ts
function Uy(e) {
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
function Wy() {
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
var Gy = Wy(), Ky = {
	advancements: [],
	optionalTraits: [],
	traits: [],
	trappings: []
}, qy = /\(([^)]+)\)/, Jy = [
	"beasts",
	"death",
	"fire",
	"heavens",
	"metal",
	"life",
	"light",
	"shadow"
], Yy = [
	"daemonology",
	"necromancy",
	"nurgle",
	"slaanesh",
	"tzeentch",
	"undivided"
];
function Xy(e, t) {
	let n = e.trim(), r = n.toLocaleLowerCase();
	return r === "petty magic" ? rb({
		kind: "petty-magic",
		rawLore: "Petty Magic",
		source: t,
		sourceName: n
	}) : r.startsWith("arcane magic") ? rb({
		kind: "arcane-magic",
		rawLore: ib(n),
		source: t,
		sourceName: n
	}) : r.startsWith("spellcaster") ? rb({
		kind: "spellcaster",
		rawLore: ib(n),
		source: t,
		sourceName: n
	}) : null;
}
function Zy(e) {
	return e.trim().replace(/^any\s+/i, "").replace(/^arcane\s+lore\s+of\s+/i, "").replace(/^arcane\s+lore$/i, "").replace(/^lore\s+of\s+/i, "").replaceAll(/\s+/g, " ").toLocaleLowerCase();
}
function Qy(e) {
	return `${e.source}:${e.kind}:${e.sourceName}:${e.rawLore}`;
}
function $y(e, t) {
	return {
		...e,
		isAmbiguous: !1,
		normalizedLore: Zy(t),
		rawLore: t.trim()
	};
}
function eb(e) {
	let t = Zy(e);
	return t === "petty" ? "petty" : Jy.includes(t) ? "eight-wind" : Yy.includes(t) ? "dark" : "other";
}
function tb(e, t) {
	if (e.kind === "petty-magic") return t.filter((e) => e.category === "petty");
	let n = e.rawLore.trim().toLocaleLowerCase();
	return n.includes("dark") ? t.filter((e) => e.category === "dark") : n.includes("eight winds") ? t.filter((e) => e.category === "eight-wind") : t.filter((e) => e.category !== "petty");
}
function nb(e) {
	let t = e.trim().toLocaleLowerCase();
	return !t || t === "any" || t.includes("any ");
}
function rb(e) {
	let t = e.rawLore.trim();
	return {
		isAmbiguous: nb(t),
		kind: e.kind,
		normalizedLore: Zy(t),
		rawLore: t,
		resolutionKey: Qy({
			kind: e.kind,
			rawLore: t,
			source: e.source,
			sourceName: e.sourceName
		}),
		source: e.source,
		sourceName: e.sourceName
	};
}
function ib(e) {
	return qy.exec(e)?.[1]?.trim() ?? "";
}
//#endregion
//#region src/functions/npc-builder/spells/derive-magic-grants.ts
function ab(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.advancements) n.kind !== "talent" || n.baseAdvances + n.current <= 0 || ob(t, Xy(n.name, "talent"), e);
	for (let n of e.traits) ob(t, Xy(n.name, "trait"), e);
	return [...t.values()];
}
function ob(e, t, n) {
	if (!t) return;
	let r = n.loreResolutions[t.resolutionKey];
	e.set(t.resolutionKey, r ? $y(t, r) : t);
}
//#endregion
//#region src/functions/npc-builder/spells/derive-spells.ts
function sb(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.detectedSpells) t.set(n.key, {
		...n,
		selected: e.selectionOverrides[n.key] ?? e.autoSelectDetectedSpells
	});
	for (let n of e.customSpells) t.set(n.key, {
		...n,
		selected: e.selectionOverrides[n.key] ?? n.selected
	});
	return [...t.values()].sort(fb);
}
function cb(e) {
	return e.filter((e) => e.selected);
}
function lb(e) {
	return e.spells.map((t) => ({
		...t,
		selected: e.selectionOverrides[t.key] ?? e.autoSelectDetectedSpells
	}));
}
function ub(e) {
	let t = e.detectedSpells.find((t) => db(t, e.spell));
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
function db(e, t) {
	return e.sourceUuid && e.sourceUuid === t.sourceUuid ? !0 : Lv(e.name, t.name);
}
function fb(e, t) {
	return e.loreName === t.loreName ? e.name.localeCompare(t.name) : e.loreName.localeCompare(t.loreName);
}
//#endregion
//#region src/state/npc-builder/spells.ts
function pb(e) {
	let { advancements: t, customSpells: n, detectedSpells: r, magicLoreResolutions: i, settings: a, spellSelectionOverrides: o, traits: s } = e, c = K(() => ab({
		advancements: t.value,
		loreResolutions: i.value,
		traits: s.value
	})), l = K(() => c.value.length > 0), u = K(() => sb({
		autoSelectDetectedSpells: a.value.autoSelectGrantedSpells,
		customSpells: n.value,
		detectedSpells: r.value,
		selectionOverrides: o.value
	})), d = K(() => cb(u.value));
	function f(e) {
		let t = ub({
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
		r.value = lb({
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
function mb(e) {
	let t = /* @__PURE__ */ new Map();
	if (e.allowBaseActorTraits) for (let n of e.baseActorDraftData.traits) {
		let r = vb(n);
		e.ignoredBaseTraitKeys[r] || t.set(r, xb(n, r, !1));
	}
	for (let n of e.customTraits) bb([...t.values()], n.name) || t.set(n.key, { ...n });
	return [...t.values()].map((t) => ({
		...t,
		config: Iv(t.config, e.traitConfigOverrides[t.key])
	})).sort(Sb);
}
function hb(e) {
	return e.allowBaseActorTraits ? [...e.baseActorDraftData.traits.filter((t) => e.ignoredBaseTraitKeys[vb(t)]).map((t) => {
		let n = vb(t);
		return {
			...xb(t, n, !0),
			config: Iv(t.config, e.traitConfigOverrides[n])
		};
	}), ...e.selectedTraits] : e.selectedTraits;
}
function gb(e) {
	return e.optionalTraits.map((e) => ({
		config: e.config,
		img: e.img,
		name: e.name,
		uuid: e.uuid
	})).sort((e, t) => e.name.localeCompare(t.name));
}
function _b(e, t) {
	return {
		config: t.config,
		ignored: !1,
		key: `${e}:${t.uuid || Rv(t.name)}`,
		name: t.name,
		source: e,
		sourceUuid: t.uuid
	};
}
function vb(e) {
	return `base:${e.uuid || Rv(e.name)}`;
}
function yb(e, t) {
	return e.find((e) => Lv(e.name, t));
}
function bb(e, t) {
	return yb(e, t) !== void 0;
}
function xb(e, t, n) {
	return {
		config: e.config,
		ignored: n,
		key: t,
		name: e.name,
		source: "base",
		sourceUuid: e.uuid
	};
}
function Sb(e, t) {
	return e.source === t.source ? e.name.localeCompare(t.name) : e.source.localeCompare(t.source);
}
//#endregion
//#region src/state/npc-builder/traits.ts
function Cb(e) {
	let { baseActorDraftData: t, customTraits: n, ignoredBaseTraitKeys: r, quickTraits: i, settings: a, traitConfigOverrides: o } = e, s = K(() => mb({
		allowBaseActorTraits: a.value.allowBaseActorTraits,
		baseActorDraftData: t.value,
		customTraits: n.value,
		ignoredBaseTraitKeys: r.value,
		traitConfigOverrides: o.value
	})), c = K(() => hb({
		allowBaseActorTraits: a.value.allowBaseActorTraits,
		baseActorDraftData: t.value,
		ignoredBaseTraitKeys: r.value,
		selectedTraits: s.value,
		traitConfigOverrides: o.value
	})), l = K(() => gb(t.value));
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
		let i = _b(e, t);
		if (!r) {
			d(i.key), x(t.name, !0);
			return;
		}
		x(t.name, !1) || n.value.find((e) => e.key === i.key) || h(i);
	}
	function h(e) {
		bb(s.value, e.name) || n.value.some((t) => t.key === e.key) || n.value.push(e);
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
		return yb(l.value, e);
	}
	function y(e) {
		return yb(i.value, e);
	}
	function b(e) {
		let n = yb(t.value.traits, e);
		if (!n) return null;
		let i = vb(n);
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
function wb(e, t = "trapping") {
	return {
		candidates: [],
		searchTerms: Ob(e),
		selectedCandidateUuid: "",
		selectedItemType: t,
		selectedName: e.trim(),
		status: "fallback"
	};
}
function Tb(e) {
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
function Eb(e) {
	return {
		candidates: [],
		searchTerms: Ob(e),
		selectedCandidateUuid: "",
		selectedItemType: "trapping",
		selectedName: e.trim(),
		status: "unresolved"
	};
}
function Db(e, t) {
	let n = Ob(e), r = Ab(n, t), i = r.filter((e) => e.matchKind === "exact");
	return i.length === 1 ? Mb("matched", n, i[0]) : i.length > 1 ? Mb("ambiguous", n, i[0], { candidates: r }) : r.length ? {
		candidates: r,
		searchTerms: n,
		selectedCandidateUuid: "",
		selectedItemType: "trapping",
		selectedName: e.trim(),
		status: "ambiguous"
	} : wb(e);
}
function Ob(e) {
	let t = e.split(/\s+or\s+/i).map((e) => e.trim()).filter(Boolean);
	return t.length ? Ib(t) : [e.trim()].filter(Boolean);
}
function kb(e, t) {
	if (Nb(e) === Nb(t)) return "exact";
	let n = Pb(e), r = Pb(t);
	if (!n || !r) return null;
	if (n === r || n.includes(r) || r.includes(n)) return "near";
	let i = n.split(" "), a = new Set(r.split(" "));
	return i.every((e) => a.has(e)) ? "near" : null;
}
function Ab(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) for (let e of t) {
		let t = kb(r, e.name);
		t && n.get(e.uuid)?.matchKind !== "exact" && n.set(e.uuid, {
			itemType: e.itemType,
			matchKind: t,
			name: e.name,
			searchTerm: r,
			sourceLabel: e.sourceLabel,
			uuid: e.uuid
		});
	}
	return [...n.values()].sort(jb);
}
function jb(e, t) {
	return e.matchKind === t.matchKind ? e.name.localeCompare(t.name) : e.matchKind === "exact" ? -1 : 1;
}
function Mb(e, t, n, r = {}) {
	return {
		candidates: r.candidates ?? (n ? [n] : []),
		searchTerms: t,
		selectedCandidateUuid: n?.uuid ?? "",
		selectedItemType: n?.itemType ?? "trapping",
		selectedName: n?.name ?? "",
		status: e
	};
}
function Nb(e) {
	return e.trim().toLocaleLowerCase().replaceAll(/\s+/g, " ");
}
function Pb(e) {
	return Nb(e).replaceAll("&", " and ").replaceAll(/[(),.:;[\]]/g, " ").replaceAll(/\b(a|an|the|some|pair of|pairs of)\b/g, " ").split(/\s+/).map(Fb).filter(Boolean).join(" ");
}
function Fb(e) {
	return e.endsWith("ies") && e.length > 4 ? `${e.slice(0, -3)}y` : e.endsWith("s") && !e.endsWith("ss") && e.length > 3 ? e.slice(0, -1) : e;
}
function Ib(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/functions/npc-builder/trappings/derive-trappings.ts
function Lb(e) {
	let t = /* @__PURE__ */ new Map();
	Bb(t, e), Vb(t, e);
	for (let n of e.customTrappings) t.set(n.key, { ...n });
	return [...t.values()].map((t) => Hb(t, e)).sort(Ub);
}
function Rb(e, t) {
	let n = e.resolution.candidates.find((e) => e.uuid === t);
	return n ? {
		...e.resolution,
		selectedCandidateUuid: n.uuid,
		selectedItemType: n.itemType,
		selectedName: n.name,
		status: e.resolution.status === "matched" ? "matched" : "ambiguous"
	} : null;
}
function zb(e) {
	return {
		...wb(e.name, e.itemType),
		candidates: e.resolution.candidates,
		searchTerms: e.resolution.searchTerms
	};
}
function Bb(e, t) {
	if (t.settings.allowBaseActorTrappings) for (let n of t.baseActorDraftData.trappings) {
		let t = `base:${n.uuid || Rv(n.name)}`;
		e.set(t, {
			ignored: !1,
			itemType: n.itemType,
			key: t,
			name: n.name,
			quantity: n.quantity,
			resolution: Tb({
				itemType: n.itemType,
				name: n.name,
				uuid: n.uuid
			}),
			source: "base",
			sourceUuid: n.uuid
		});
	}
}
function Vb(e, t) {
	for (let n of t.careers) for (let r of n.grants.trappings) {
		let i = `career:${Rv(r)}`, a = e.get(i);
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
			resolution: t.trappingResolutionOverrides[i] ?? Eb(r),
			source: "career",
			sourceUuid: ""
		});
	}
}
function Hb(e, t) {
	let n = t.trappingOverrides[e.key];
	return {
		...e,
		ignored: n?.ignored ?? e.ignored,
		quantity: zv(n?.quantity ?? e.quantity),
		resolution: t.trappingResolutionOverrides[e.key] ?? e.resolution
	};
}
function Ub(e, t) {
	return e.source === t.source ? e.name.localeCompare(t.name) : e.source.localeCompare(t.source);
}
//#endregion
//#region src/state/npc-builder/trappings.ts
function Wb(e) {
	let { baseActorDraftData: t, careers: n, customTrappings: r, settings: i, trappingOverrides: a, trappingResolutionOverrides: o } = e, s = K(() => Lb({
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
			quantity: zv(t)
		};
	}
	function f(e, t) {
		let n = s.value.find((t) => t.key === e), r = n ? Rb(n, t) : null;
		r && (o.value[e] = r);
	}
	function p(e) {
		let t = s.value.find((t) => t.key === e);
		t && (o.value[e] = zb(t));
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
var Gb = Ds("npc-builder", () => {
	let e = /* @__PURE__ */ N(""), t = /* @__PURE__ */ N([]), n = /* @__PURE__ */ N({}), r = /* @__PURE__ */ N({ ...Ky }), i = /* @__PURE__ */ N([]), a = /* @__PURE__ */ N([]), o = /* @__PURE__ */ N([]), s = /* @__PURE__ */ N([]), c = /* @__PURE__ */ N([]), l = /* @__PURE__ */ N([]), u = /* @__PURE__ */ N(""), d = /* @__PURE__ */ N({ ...Gy }), f = /* @__PURE__ */ N(""), p = /* @__PURE__ */ N({}), m = /* @__PURE__ */ N({}), h = /* @__PURE__ */ N({}), g = /* @__PURE__ */ N([]), _ = /* @__PURE__ */ N([]), v = /* @__PURE__ */ N({}), y = /* @__PURE__ */ N({}), b = /* @__PURE__ */ N({}), x = /* @__PURE__ */ N({}), S = /* @__PURE__ */ N({}), C = /* @__PURE__ */ N({}), w = Py({
		baseActorDraftData: r,
		careers: a,
		manualAdvancementDeltas: n,
		settings: d,
		skillCharacteristics: p,
		skillGrantResolutions: h,
		talentMaximums: m
	}), T = Uy({
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
	}), E = Hy({
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
	}), ee = Cb({
		baseActorDraftData: r,
		customTraits: o,
		ignoredBaseTraitKeys: v,
		quickTraits: l,
		settings: d,
		traitConfigOverrides: x
	}), te = Wb({
		baseActorDraftData: r,
		careers: a,
		customTrappings: s,
		settings: d,
		trappingOverrides: S,
		trappingResolutionOverrides: C
	}), ne = pb({
		advancements: w.advancements,
		customSpells: _,
		detectedSpells: g,
		magicLoreResolutions: y,
		settings: d,
		spellSelectionOverrides: b,
		traits: ee.traits
	});
	return {
		actorName: e,
		actorFolders: t,
		addCareer: E.addCareer,
		addCareerIfMissing: E.addCareerIfMissing,
		addCustomSpell: ne.addCustomSpell,
		addCustomTrait: ee.addCustomTrait,
		addCustomTrapping: te.addCustomTrapping,
		adjustAdvancementCurrent: w.adjustAdvancementCurrent,
		advancements: w.advancements,
		applyAutoAdvance: w.applyAutoAdvance,
		baseActorDraftData: r,
		baseActors: i,
		buildTraits: ee.buildTraits,
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
		hasMagicAccess: ne.hasMagicAccess,
		hydrateActorFolders: T.hydrateActorFolders,
		hydrateBaseActorDraftData: T.hydrateBaseActorDraftData,
		hydrateBaseActors: T.hydrateBaseActors,
		hydrateDetectedSpells: ne.hydrateDetectedSpells,
		hydrateItemFolders: T.hydrateItemFolders,
		hydrateQuickTraits: T.hydrateQuickTraits,
		hydrateSettings: T.hydrateSettings,
		hydrateSkillCharacteristics: w.hydrateSkillCharacteristics,
		hydrateTalentMaximums: w.hydrateTalentMaximums,
		itemFolders: c,
		magicGrants: ne.magicGrants,
		magicLoreResolutions: y,
		maximizableTalentCount: w.maximizableTalentCount,
		maximizeTalents: w.maximizeTalents,
		moveCareer: E.moveCareer,
		moveCareerToIndex: E.moveCareerToIndex,
		optionalTraits: ee.optionalTraits,
		quickTraits: l,
		removeCareer: E.removeCareer,
		removeCustomSpell: ne.removeCustomSpell,
		removeCustomTrait: ee.removeCustomTrait,
		removeCustomTrapping: te.removeCustomTrapping,
		resetAdvancementCurrent: w.resetAdvancementCurrent,
		resetAllAdvancementCurrents: w.resetAllAdvancementCurrents,
		resetDraft: E.resetDraft,
		selectBaseActor: E.selectBaseActor,
		selectBaseActorUuid: E.selectBaseActorUuid,
		selectedBaseActor: E.selectedBaseActor,
		selectedBaseActorUuid: f,
		selectedPortraitPath: u,
		selectedSpells: ne.selectedSpells,
		selectPortrait: E.selectPortrait,
		selectTrappingResolutionCandidate: te.selectTrappingResolutionCandidate,
		setAdvancementCurrent: w.setAdvancementCurrent,
		setAdvancementTotal: w.setAdvancementTotal,
		setBaseTraitIgnored: ee.setBaseTraitIgnored,
		setCareerQuantity: E.setCareerQuantity,
		setMagicGrantLoreResolution: ne.setMagicGrantLoreResolution,
		setOptionalTraitSelected: ee.setOptionalTraitSelected,
		setQuickTraitSelected: ee.setQuickTraitSelected,
		setSkillGrantResolution: w.setSkillGrantResolution,
		setSpellSelected: ne.setSpellSelected,
		setTraitConfig: ee.setTraitConfig,
		setTrappingFallback: te.setTrappingFallback,
		setTrappingIgnored: te.setTrappingIgnored,
		setTrappingQuantity: te.setTrappingQuantity,
		setTrappingResolution: te.setTrappingResolution,
		settings: d,
		spells: ne.spells,
		suggestedActorName: E.suggestedActorName,
		traits: ee.traits,
		trappings: te.trappings
	};
}), Kb = { class: "dui-fieldset-legend" }, qb = [
	"checked",
	"disabled",
	"onChange"
], Jb = { class: "dui-card-actions" }, Yb = /* @__PURE__ */ I({
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
			}, [H("legend", Kb, "Tier " + k(t.level || "Unknown"), 1), (z(!0), B(R, null, L(t.candidates, (t) => (z(), B("label", {
				key: t.uuid,
				class: "dui-label"
			}, [H("input", {
				class: "dui-checkbox dui-checkbox-sm",
				checked: e.isCareerQueued(t.uuid) || e.isLowerCareerSelected(t.uuid),
				disabled: e.isCareerQueued(t.uuid),
				type: "checkbox",
				onChange: (e) => r(t, e)
			}, null, 40, qb), H("span", null, [H("strong", null, k(t.name), 1), H("small", null, [W(k(t.careerGroup || "Career") + " ", 1), e.isCareerQueued(t.uuid) ? (z(), B(R, { key: 0 }, [W(" already queued ")], 64)) : G("", !0)])])]))), 128))]))), 128)),
			H("div", Jb, [H("button", {
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
}), Xb = ["aria-labelledby"], Zb = { class: "dui-modal-box" }, Qb = ["id"], $b = { class: "dui-modal-action" }, ex = /* @__PURE__ */ I({
	__name: "NpcBuilderDialog",
	props: {
		open: { type: Boolean },
		title: {}
	},
	emits: ["close"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ N(null), a = er();
		return Kn(() => n.open, async (e) => {
			await Dn();
			let t = i.value;
			if (e && !t?.open) {
				t?.showModal();
				return;
			}
			!e && t?.open && t.close();
		}, { immediate: !0 }), vr(() => {
			i.value?.open && i.value.close();
		}), (t, n) => (z(), B("dialog", {
			ref_key: "dialogElement",
			ref: i,
			"aria-labelledby": P(a),
			"aria-modal": "true",
			class: "dui-modal",
			onCancel: n[1] ||= Ao((e) => r("close"), ["prevent"])
		}, [H("section", Zb, [
			H("h2", {
				id: P(a),
				class: "dui-card-title"
			}, k(e.title), 9, Qb),
			Tr(t.$slots, "default"),
			H("div", $b, [H("button", {
				class: "dui-btn",
				type: "button",
				onClick: n[0] ||= (e) => r("close")
			}, "Close")])
		])], 40, Xb));
	}
}), tx = /* @__PURE__ */ new Map();
function nx(e) {
	let t = e.id.trim();
	if (!t) throw Error("NPC auto-advance strategies must have an id.");
	tx.set(t, {
		...e,
		id: t
	});
}
function rx() {
	return [...tx.values()].sort((e, t) => e.name.localeCompare(t.name));
}
function ix(e) {
	return tx.get(e) ?? null;
}
function ax(e, t) {
	return cx(e, t, {
		kinds: ["skill"],
		respectTalentMaximums: !1
	});
}
function ox(e, t) {
	return cx(cx(e, t, {
		kinds: ["talent"],
		respectTalentMaximums: !0
	}), t, {
		kinds: ["skill"],
		respectTalentMaximums: !1
	});
}
function sx(e, t) {
	return cx(e, t, {
		kinds: ["characteristic"],
		respectTalentMaximums: !1
	});
}
function cx(e, t, n) {
	let r = Math.max(0, Math.floor(Number.isFinite(t) ? t : 0)), i = dx(e.advancements), a = ky(i).total;
	if (a >= r) return { advancements: i };
	let o = !0;
	for (; o;) {
		o = !1;
		for (let e of i) {
			if (!n.kinds.includes(e.kind)) continue;
			let t = lx(e, n);
			if (!t) continue;
			let i = Ay(t) - Ay(e);
			i <= 0 || a + i > r || (e.current = t.current, a += i, o = !0);
		}
	}
	return { advancements: i };
}
function lx(e, t) {
	return t.respectTalentMaximums && e.kind === "talent" && !ux(e) ? null : {
		...e,
		current: e.current + yy(e)
	};
}
function ux(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" ? by(e) < t : !1;
}
function dx(e) {
	return e.map((e) => ({
		...e,
		sources: e.sources.map((e) => ({ ...e }))
	}));
}
nx({
	description: "Cycles visible Skill rows evenly until no next skill increase fits the target XP.",
	id: "skill-master",
	name: "Skill Master",
	run: ax
}), nx({
	description: "Raises visible Talent rows evenly up to known maximums, then spends any remaining XP like Skill Master.",
	id: "gifted-and-talented",
	name: "Gifted & Talented",
	run: ox
}), nx({
	description: "Cycles visible Characteristic rows evenly until no next characteristic increase fits the target XP.",
	id: "all-natural",
	name: "All Natural",
	run: sx
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderAdvancementsTab/advancement-display.ts
function fx(e) {
	let t = e.current - e.careerValue, n = [...e.sources].sort((e, t) => yx(e.kind) - yx(t.kind)).map((e) => `${e.label} ${bx(e.count)}`);
	return t !== 0 && n.push(`Manual ${bx(t)}`), n.length ? n.join(", ") : e.includedFromBase ? "Base actor" : "-";
}
function px(e) {
	return Gv(e) !== null;
}
function mx(e) {
	return Math.max(e.minimumTotal, e.baseValue + e.current);
}
function hx(e) {
	return mx(e);
}
function gx(e) {
	return e.talentMaximumLabel ?? "Unknown";
}
function _x(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" && hx(e) > t;
}
function vx(e) {
	return Ay(e);
}
function yx(e) {
	return e === "characteristic" ? 0 : e === "career" ? 1 : 2;
}
function bx(e) {
	return e > 0 ? `+${e}` : `${e}`;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSection.vue?vue&type=script&setup=true&lang.ts
var xx = { class: "dui-card dui-card-border dui-card-sm" }, Sx = { class: "dui-card-body" }, Cx = { class: "dui-card-title" }, wx = {
	key: 0,
	class: "dui-badge dui-badge-primary"
}, Tx = { key: 0 }, Ex = /* @__PURE__ */ I({
	__name: "NpcBuilderSection",
	props: {
		description: { default: "" },
		number: { default: "" },
		title: {}
	},
	setup(e) {
		return (t, n) => (z(), B("section", xx, [H("div", Sx, [
			H("h2", Cx, [e.number ? (z(), B("span", wx, k(e.number), 1)) : G("", !0), W(" " + k(e.title), 1)]),
			e.description ? (z(), B("p", Tx, k(e.description), 1)) : G("", !0),
			Tr(t.$slots, "default")
		])]));
	}
}), Dx = {
	key: 0,
	class: "dui-card-actions"
}, Ox = {
	key: 1,
	class: "dui-alert dui-alert-info"
}, kx = { class: "dui-list" }, Ax = { class: "dui-list-col-grow" }, jx = {
	key: 0,
	class: "dui-badge dui-badge-info"
}, Mx = {
	key: 1,
	class: "dui-badge dui-badge-warning"
}, Nx = { class: "dui-join" }, Px = ["disabled", "onClick"], Fx = [
	"aria-label",
	"value",
	"onInput"
], Ix = ["onClick"], Lx = ["disabled", "onClick"], Rx = {
	key: 2,
	class: "dui-alert"
}, zx = /* @__PURE__ */ I({
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
		return (t, i) => (z(), V(Ex, {
			number: e.sectionNumber,
			title: e.title
		}, {
			default: F(() => [
				e.manualAdvanceCount ? (z(), B("div", Dx, [H("span", null, k(e.manualAdvanceCount) + " manual edits", 1), H("button", {
					class: "dui-btn dui-btn-sm",
					type: "button",
					onClick: i[0] ||= (e) => n("resetAll")
				}, " Reset All Advances ")])) : G("", !0),
				e.estimatedNpcXp ? (z(), B("div", Ox, [
					H("strong", null, "Estimated NPC XP " + k(e.estimatedNpcXp.total), 1),
					H("span", null, k(e.estimatedNpcXp.characteristics) + " characteristics", 1),
					H("span", null, k(e.estimatedNpcXp.skills) + " skills", 1),
					H("span", null, k(e.estimatedNpcXp.talents) + " talents", 1)
				])) : G("", !0),
				H("ul", kx, [(z(!0), B(R, null, L(e.entries, (t) => (z(), B("li", {
					key: `${t.kind}:${t.name}`,
					class: "dui-list-row"
				}, [H("div", Ax, [
					H("strong", null, k(t.name), 1),
					t.current === t.careerValue ? G("", !0) : (z(), B("span", jx, " Manual edit ")),
					e.showSkillSpecializationBadges && P(px)(t.name) ? (z(), B("span", Mx, " Needs specialization ")) : G("", !0),
					H("span", null, " Base " + k(t.baseValue) + " · Advances " + k(t.current) + " · XP " + k(P(vx)(t)), 1),
					H("small", null, "Sources: " + k(P(fx)(t)), 1)
				]), H("div", Nx, [
					H("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						disabled: P(mx)(t) <= t.minimumTotal,
						title: "Decrease by 5",
						type: "button",
						onClick: (e) => n("adjustCurrent", t, -1)
					}, " -5 ", 8, Px),
					H("input", {
						class: "dui-join-item dui-input dui-input-sm",
						"aria-label": `Total ${t.name}`,
						value: P(mx)(t),
						min: "0",
						type: "number",
						onInput: (e) => r(t, e)
					}, null, 40, Fx),
					H("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						title: "Increase by 5",
						type: "button",
						onClick: (e) => n("adjustCurrent", t, 1)
					}, " +5 ", 8, Ix),
					H("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						disabled: t.current === t.careerValue,
						title: "Reset to career value",
						type: "button",
						onClick: (e) => n("resetCurrent", t)
					}, " Reset ", 8, Lx)
				])]))), 128))]),
				e.entries.length ? G("", !0) : (z(), B("p", Rx, "No " + k(e.title.toLowerCase()) + " to advance yet.", 1))
			]),
			_: 1
		}, 8, ["number", "title"]));
	}
}), Bx = { class: "dui-fieldset" }, Vx = ["value"], Hx = { class: "dui-fieldset" }, Ux = ["value"], Wx = ["value"], Gx = { key: 0 }, Kx = { class: "dui-card-actions" }, qx = ["disabled"], Jx = /* @__PURE__ */ I({
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
		return (t, a) => (z(), V(Ex, {
			description: "Spend toward a target without exceeding it. Existing manual edits are preserved.",
			number: "4",
			title: "Auto Advance"
		}, {
			default: F(() => [
				H("fieldset", Bx, [a[1] ||= H("legend", { class: "dui-fieldset-legend" }, "Target XP", -1), H("input", {
					"aria-label": "Target XP",
					class: "dui-input dui-input-sm",
					value: e.targetXp,
					min: "0",
					type: "number",
					onInput: r
				}, null, 40, Vx)]),
				H("fieldset", Hx, [a[2] ||= H("legend", { class: "dui-fieldset-legend" }, "Strategy", -1), H("select", {
					"aria-label": "Auto advance strategy",
					class: "dui-select dui-select-sm",
					value: e.selectedAutoAdvanceStrategyId,
					onChange: i
				}, [(z(!0), B(R, null, L(e.autoAdvanceStrategies, (e) => (z(), B("option", {
					key: e.id,
					value: e.id
				}, k(e.name), 9, Wx))), 128))], 40, Ux)]),
				e.selectedAutoAdvanceStrategy ? (z(), B("p", Gx, k(e.selectedAutoAdvanceStrategy.description), 1)) : G("", !0),
				H("div", Kx, [H("button", {
					class: "dui-btn dui-btn-primary dui-btn-sm",
					disabled: !e.canRunAutoAdvance,
					title: "Advance rows as close to the target XP as possible without going over",
					type: "button",
					onClick: a[0] ||= (e) => n("runAutoAdvance")
				}, " Auto Advance ", 8, qx)])
			]),
			_: 1
		}));
	}
}), Yx = { class: "dui-card-actions" }, Xx = ["disabled"], Zx = { class: "dui-list" }, Qx = { class: "dui-list-col-grow" }, $x = {
	key: 0,
	class: "dui-badge dui-badge-info"
}, eS = {
	key: 1,
	class: "dui-badge dui-badge-warning"
}, tS = { class: "dui-join" }, nS = ["disabled", "onClick"], rS = [
	"aria-label",
	"value",
	"onInput"
], iS = ["onClick"], aS = ["disabled", "onClick"], oS = {
	key: 0,
	class: "dui-alert"
}, sS = /* @__PURE__ */ I({
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
		return (t, i) => (z(), V(Ex, {
			number: "3",
			title: "Talents"
		}, {
			default: F(() => [
				H("div", Yx, [H("span", null, k(e.maximizableTalentCount) + " below maximum", 1), H("button", {
					class: "dui-btn dui-btn-sm",
					disabled: e.maximizableTalentCount === 0,
					title: "Raise talents with known maximums to their maximum ranks",
					type: "button",
					onClick: i[0] ||= (e) => n("maximizeTalents")
				}, " Maximize Talents ", 8, Xx)]),
				H("ul", Zx, [(z(!0), B(R, null, L(e.talents, (e) => (z(), B("li", {
					key: `${e.kind}:${e.name}`,
					class: "dui-list-row"
				}, [H("div", Qx, [
					H("strong", null, k(e.name), 1),
					e.current === e.careerValue ? G("", !0) : (z(), B("span", $x, " Manual edit ")),
					H("span", null, " Ranks " + k(P(hx)(e)) + " · Maximum " + k(P(gx)(e)) + " · XP " + k(P(vx)(e)), 1),
					H("small", null, "Sources: " + k(P(fx)(e)), 1),
					P(_x)(e) ? (z(), B("span", eS, " Over maximum ")) : G("", !0)
				]), H("div", tS, [
					H("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						disabled: P(hx)(e) <= e.minimumTotal,
						title: "Decrease by 1",
						type: "button",
						onClick: (t) => n("adjustCurrent", e, -1)
					}, " -1 ", 8, nS),
					H("input", {
						class: "dui-join-item dui-input dui-input-sm",
						"aria-label": `Ranks ${e.name}`,
						value: P(hx)(e),
						min: "0",
						type: "number",
						onInput: (t) => r(e, t)
					}, null, 40, rS),
					H("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						title: "Increase by 1",
						type: "button",
						onClick: (t) => n("adjustCurrent", e, 1)
					}, " +1 ", 8, iS),
					H("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						disabled: e.current === e.careerValue,
						title: "Reset to career value",
						type: "button",
						onClick: (t) => n("resetCurrent", e)
					}, " Reset ", 8, aS)
				])]))), 128))]),
				e.talents.length ? G("", !0) : (z(), B("p", oS, "No talents to advance yet."))
			]),
			_: 1
		}));
	}
}), cS = /* @__PURE__ */ I({
	__name: "NpcBuilderAdvancementsTab",
	setup(e) {
		let t = Gb(), { advancements: n, estimatedNpcXp: r, maximizableTalentCount: i } = Os(t), a = rx(), o = /* @__PURE__ */ N("skill-master"), s = /* @__PURE__ */ N(0), c = K(() => n.value.filter((e) => e.kind === "characteristic")), l = K(() => n.value.filter((e) => e.kind === "skill")), u = K(() => n.value.filter((e) => e.kind === "talent")), d = K(() => n.value.filter((e) => e.current !== e.careerValue).length), f = K(() => ix(o.value) ?? a[0] ?? null), p = K(() => f.value !== null && s.value > r.value.total);
		Kn(() => r.value.total, (e) => {
			s.value < e && (s.value = e);
		}, { immediate: !0 });
		function m() {
			let e = f.value;
			e && t.applyAutoAdvance(e, s.value);
		}
		return (e, n) => (z(), B("section", null, [
			U(zx, {
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
			U(zx, {
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
			U(sS, {
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
			U(Jx, {
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
function lS(e) {
	return [
		`Ch ${e.grants.characteristics.length}`,
		`Sk ${e.grants.skills.length}`,
		`Ta ${e.grants.talents.length}`,
		`Tr ${e.grants.trappings.length}`
	].join(" / ");
}
function uS(e) {
	let t = e.slice(0, 3).join(", "), n = e.length - 3;
	return e.length ? n > 0 ? `${t}, +${n}` : t : "-";
}
function dS(e) {
	return e.split(/\s+/).map((e) => e.at(0)).filter(Boolean).slice(0, 2).join("").toLocaleUpperCase();
}
function fS(e) {
	return `${e.label}\n${e.img}`;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/BaseActorPanel.vue?vue&type=script&setup=true&lang.ts
var pS = { class: "dui-fieldset" }, mS = ["value"], hS = { class: "dui-fieldset" }, gS = ["disabled", "value"], _S = { value: "" }, vS = ["value"], yS = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, bS = {
	key: 1,
	class: "dui-alert"
}, xS = {
	key: 0,
	class: "dui-avatar"
}, SS = ["src"], CS = {
	key: 1,
	class: "dui-badge"
}, wS = /* @__PURE__ */ I({
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
		return (t, a) => (z(), V(Ex, {
			description: "Choose a world Actor as the starting statblock, or drop one below.",
			number: "1",
			title: "Base Actor"
		}, {
			default: F(() => [
				H("fieldset", pS, [a[1] ||= H("legend", { class: "dui-fieldset-legend" }, "Search world actors", -1), H("input", {
					"aria-label": "Search world actors",
					class: "dui-input dui-input-sm",
					value: e.actorFilter,
					placeholder: "Filter actors",
					type: "search",
					onInput: r
				}, null, 40, mS)]),
				H("fieldset", hS, [a[2] ||= H("legend", { class: "dui-fieldset-legend" }, "Base statblock", -1), H("select", {
					"aria-label": "Base statblock",
					class: "dui-select dui-select-sm",
					disabled: e.isLoadingActors,
					value: e.selectedBaseActorUuid,
					onChange: i
				}, [H("option", _S, k(e.isLoadingActors ? "Loading actors..." : "Choose an actor"), 1), (z(!0), B(R, null, L(e.filteredActors, (e) => (z(), B("option", {
					key: e.uuid,
					value: e.uuid
				}, k(e.name), 9, vS))), 128))], 40, gS)]),
				U(Gf, {
					description: "Use a world Actor as the starting statblock.",
					title: "Drop Actor",
					variant: "compact",
					onDropData: a[0] ||= (e) => n("actorDrop", e)
				}),
				e.errorMessage ? (z(), B("p", yS, k(e.errorMessage), 1)) : G("", !0),
				e.selectedBaseActor ? (z(), B("article", bS, [e.selectedBaseActor.img ? (z(), B("div", xS, [H("div", null, [H("img", {
					src: e.selectedBaseActor.img,
					alt: ""
				}, null, 8, SS)])])) : (z(), B("span", CS, k(P(dS)(e.selectedBaseActor.name)), 1)), H("div", null, [H("strong", null, k(e.selectedBaseActor.name), 1), H("span", null, [
					W(k(e.selectedBaseActor.species || "Species not found") + " ", 1),
					e.selectedBaseActor.type ? (z(), B(R, { key: 0 }, [W(" - " + k(e.selectedBaseActor.type), 1)], 64)) : G("", !0),
					e.isLoadingBaseDraft ? (z(), B(R, { key: 1 }, [W(" - loading details...")], 64)) : G("", !0)
				])])])) : G("", !0)
			]),
			_: 1
		}));
	}
}), TS = { class: "dui-card-actions" }, ES = { class: "dui-stats" }, DS = { class: "dui-stat" }, OS = { class: "dui-stat-value" }, kS = {
	key: 0,
	class: "dui-stat-desc"
}, AS = { class: "dui-stat" }, jS = { class: "dui-stat-value" }, MS = {
	key: 0,
	class: "dui-stat-desc"
}, NS = {
	key: 1,
	class: "dui-stat-desc"
}, PS = { class: "dui-stat" }, FS = { class: "dui-stat-value" }, IS = { class: "dui-stat" }, LS = { class: "dui-stat-value" }, RS = { class: "dui-stat" }, zS = { class: "dui-stat-value" }, BS = { class: "dui-stat-desc" }, VS = {
	key: 0,
	class: "dui-alert dui-alert-warning",
	role: "alert"
}, HS = { key: 1 }, US = /* @__PURE__ */ I({
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
		return (t, n) => (z(), V(Ex, {
			number: "4",
			title: "Build Preview"
		}, {
			default: F(() => [
				H("div", TS, [H("span", { class: O(["dui-badge", e.buildPreviewStatus === "Ready" ? "dui-badge-success" : "dui-badge-warning"]) }, k(e.buildPreviewStatus), 3)]),
				H("div", ES, [
					H("div", DS, [
						n[0] ||= H("span", { class: "dui-stat-title" }, "Advances", -1),
						H("strong", OS, k(e.advancementCount), 1),
						e.editedAdvanceCount ? (z(), B("small", kS, k(e.editedAdvanceCount) + " manually edited ", 1)) : G("", !0)
					]),
					H("div", AS, [
						n[1] ||= H("span", { class: "dui-stat-title" }, "Trappings", -1),
						H("strong", jS, k(e.visibleTrappingCount), 1),
						e.fallbackTrappingCount ? (z(), B("small", MS, k(e.fallbackTrappingCount) + " blank fallback ", 1)) : G("", !0),
						e.ignoredTrappingCount ? (z(), B("small", NS, k(e.ignoredTrappingCount) + " ignored ", 1)) : G("", !0)
					]),
					H("div", PS, [n[2] ||= H("span", { class: "dui-stat-title" }, "Traits", -1), H("strong", FS, k(e.traitCount), 1)]),
					H("div", IS, [n[3] ||= H("span", { class: "dui-stat-title" }, "Spells", -1), H("strong", LS, k(e.selectedSpellCount), 1)]),
					H("div", RS, [
						n[4] ||= H("span", { class: "dui-stat-title" }, "Estimated NPC XP", -1),
						H("strong", zS, k(e.estimatedNpcXp.total), 1),
						H("small", BS, k(e.estimatedNpcXp.characteristics) + " char / " + k(e.estimatedNpcXp.skills) + " skill / " + k(e.estimatedNpcXp.talents) + " talent ", 1)
					])
				]),
				e.buildPreviewWarnings.length ? (z(), B("div", VS, [H("div", null, [(z(!0), B(R, null, L(e.buildPreviewWarnings, (e) => (z(), B("p", { key: e }, k(e), 1))), 128))])])) : (z(), B("p", HS, " The draft has a base Actor, queued Career data, resolved trappings, and a portrait ready to apply. "))
			]),
			_: 1
		}));
	}
}), WS = { class: "dui-list" }, GS = { class: "dui-list-row" }, KS = { class: "dui-list-row" }, qS = { class: "dui-list-row" }, JS = { class: "dui-list-row" }, YS = { class: "dui-list-row" }, XS = { class: "dui-list-row" }, ZS = { class: "dui-list-row" }, QS = /* @__PURE__ */ I({
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
		return (t, n) => (z(), B("dl", WS, [
			H("div", GS, [n[0] ||= H("dt", null, "Build name", -1), H("dd", null, k(e.finalActorName), 1)]),
			H("div", KS, [n[1] ||= H("dt", null, "Base actor", -1), H("dd", null, k(e.baseActorName), 1)]),
			H("div", qS, [n[2] ||= H("dt", null, "Final career", -1), H("dd", null, k(e.finalCareerName), 1)]),
			H("div", JS, [n[3] ||= H("dt", null, "Career items", -1), H("dd", null, k(e.careerItemCount), 1)]),
			H("div", YS, [n[4] ||= H("dt", null, "Apply", -1), H("dd", null, k(e.advancementCount) + " advance rows, " + k(e.visibleTrappingCount) + " trappings, " + k(e.traitCount) + " traits, " + k(e.selectedSpellCount) + " spells ", 1)]),
			H("div", XS, [n[5] ||= H("dt", null, "Extracted grants", -1), H("dd", null, k(e.grantTotals.characteristics) + " characteristics, " + k(e.grantTotals.skills) + " skills, " + k(e.grantTotals.talents) + " talents, " + k(e.grantTotals.trappings) + " trappings ", 1)]),
			H("div", ZS, [n[6] ||= H("dt", null, "Estimated NPC XP", -1), H("dd", null, k(e.estimatedNpcXpTotal), 1)])
		]));
	}
}), $S = { class: "dui-avatar" }, eC = ["aria-label", "disabled"], tC = ["src"], nC = { key: 1 }, rC = { key: 2 }, iC = {
	key: 0,
	"aria-live": "polite",
	class: "dui-alert",
	role: "status"
}, aC = { key: 0 }, oC = ["title"], sC = {
	key: 1,
	class: "dui-fieldset"
}, cC = { class: "dui-fieldset-legend" }, lC = { key: 0 }, uC = { key: 1 }, dC = { key: 0 }, fC = ["value"], pC = { class: "dui-carousel" }, mC = [
	"aria-label",
	"aria-pressed",
	"title",
	"onClick"
], hC = ["src"], gC = ["aria-label"], _C = /* @__PURE__ */ I({
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
			H("div", $S, [H("button", {
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
			}, null, 8, tC)) : e.finalCareer ? (z(), B("strong", nC, k(P(dS)(e.finalCareer.name)), 1)) : (z(), B("span", rC, "No portrait selected"))], 10, eC)]),
			e.finalPortraitPath ? (z(), B("p", iC, [e.selectedPortraitCandidate ? (z(), B("strong", aC, k(e.selectedPortraitCandidate.label), 1)) : G("", !0), H("span", { title: e.finalPortraitPath }, k(e.finalPortraitPath), 9, oC)])) : G("", !0),
			e.portraitCandidates.length || e.isLoadingPortraitCandidates ? (z(), B("fieldset", sC, [
				H("legend", cC, [r[2] ||= H("span", null, "Portrait options", -1), e.isLoadingPortraitCandidates ? (z(), B("span", lC, "Finding assets...")) : (z(), B("span", uC, k(e.portraitCandidates.length) + " options", 1))]),
				e.isLoadingPortraitCandidates && e.portraitSearchProgress ? (z(), B("div", dC, [H("progress", {
					"aria-label": "Portrait search progress",
					class: "dui-progress",
					value: e.portraitSearchProgressValue,
					max: "100"
				}, null, 8, fC), H("span", null, k(e.portraitSearchProgressLabel), 1)])) : G("", !0),
				H("div", pC, [(z(!0), B(R, null, L(e.compactPortraitCandidates, (t) => (z(), B("div", {
					key: t.key,
					class: "dui-carousel-item dui-avatar"
				}, [H("button", {
					"aria-label": P(fS)(t),
					"aria-pressed": t.key === e.selectedPortraitCandidateKey,
					class: O(["dui-btn dui-btn-square", { "dui-btn-active": t.key === e.selectedPortraitCandidateKey }]),
					title: P(fS)(t),
					type: "button",
					onClick: (e) => n("selectPortrait", t)
				}, [H("img", {
					src: t.img,
					alt: ""
				}, null, 8, hC)], 10, mC)]))), 128)), e.hiddenPortraitCandidateCount > 0 ? (z(), B("button", {
					key: 0,
					"aria-label": `Open ${e.hiddenPortraitCandidateCount} more portrait options`,
					class: "dui-carousel-item dui-btn dui-btn-square",
					type: "button",
					onClick: r[1] ||= (e) => n("openGallery")
				}, " +" + k(e.hiddenPortraitCandidateCount), 9, gC)) : G("", !0)])
			])) : G("", !0)
		], 64));
	}
}), vC = {
	key: 0,
	class: "dui-fieldset"
}, yC = { class: "dui-fieldset-legend" }, bC = { class: "dui-card-actions" }, xC = ["aria-pressed", "onClick"], SC = /* @__PURE__ */ I({
	__name: "TraitButtonGroup",
	props: {
		caption: {},
		title: {},
		traits: {}
	},
	emits: ["toggleTrait"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => e.traits.length ? (z(), B("fieldset", vC, [H("legend", yC, [H("span", null, k(e.title), 1), H("span", null, k(e.caption), 1)]), H("div", bC, [(z(!0), B(R, null, L(e.traits, (e) => (z(), B("button", {
			key: e.uuid,
			"aria-pressed": e.isSelected,
			class: O(["dui-btn dui-btn-sm", { "dui-btn-active": e.isSelected }]),
			type: "button",
			onClick: (t) => n("toggleTrait", e)
		}, k(e.name), 11, xC))), 128))])])) : G("", !0);
	}
}), CC = { class: "dui-fieldset" }, wC = ["placeholder", "value"], TC = { class: "dui-collapse dui-collapse-arrow dui-card-border" }, EC = { class: "dui-collapse-content" }, DC = /* @__PURE__ */ I({
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
			U(Ex, {
				description: "Choose the generated Actor's name, portrait, and optional traits.",
				number: "3",
				title: "Identity and Traits"
			}, {
				default: F(() => [
					U(_C, {
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
					H("fieldset", CC, [i[4] ||= H("legend", { class: "dui-fieldset-legend" }, "NPC name", -1), H("input", {
						"aria-label": "NPC name",
						class: "dui-input dui-input-sm",
						placeholder: e.suggestedActorName,
						value: e.actorName,
						type: "text",
						onInput: r
					}, null, 40, wC)]),
					U(SC, {
						caption: `${e.optionalTraitOptions.length} from base statblock`,
						traits: e.optionalTraitOptions,
						title: "Optional Traits",
						onToggleTrait: i[2] ||= (e) => n("toggleOptionalTrait", e)
					}, null, 8, ["caption", "traits"]),
					U(SC, {
						caption: `${e.quickTraitOptions.length} configured`,
						traits: e.quickTraitOptions,
						title: "Quick Traits",
						onToggleTrait: i[3] ||= (e) => n("toggleQuickTrait", e)
					}, null, 8, ["caption", "traits"])
				]),
				_: 1
			}),
			i[6] ||= H("div", { class: "dui-divider" }, null, -1),
			U(US, {
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
			H("details", TC, [i[5] ||= H("summary", { class: "dui-collapse-title" }, "Complete build details", -1), H("div", EC, [U(QS, {
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
}), OC = {
	key: 0,
	class: "dui-list"
}, kC = [
	"onDragenter",
	"onDragover",
	"onDrop"
], AC = ["onDragstart"], jC = {
	key: 0,
	class: "dui-avatar"
}, MC = ["src"], NC = {
	key: 1,
	class: "dui-badge"
}, PC = { class: "dui-list-col-grow" }, FC = {
	key: 0,
	class: "dui-badge dui-badge-info"
}, IC = {
	key: 1,
	class: "dui-badge dui-badge-info"
}, LC = ["title"], RC = { class: "dui-card-actions" }, zC = { class: "dui-fieldset" }, BC = [
	"aria-label",
	"value",
	"onInput"
], VC = { class: "dui-join" }, HC = ["disabled", "onClick"], UC = ["disabled", "onClick"], WC = ["onClick"], GC = {
	key: 1,
	class: "dui-alert"
}, KC = /* @__PURE__ */ I({
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
		return (t, r) => (z(), V(Ex, {
			description: "Careers are applied in this order. Drag rows or use the buttons to reorder them.",
			number: "2",
			title: "Career Queue"
		}, {
			default: F(() => [U(Gf, {
				description: "Drop in build order. Drag rows to reorder.",
				title: "Drop Career Items",
				variant: "compact",
				onDropData: r[0] ||= (e) => n("careerDrop", e)
			}), e.careers.length ? (z(), B("ol", OC, [(z(!0), B(R, null, L(e.careers, (t, i) => (z(), B("li", {
				key: t.uuid,
				class: "dui-list-row",
				onDragenter: Ao((e) => n("careerDragEnter", i), ["prevent"]),
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
				}, " Drag ", 40, AC),
				t.img ? (z(), B("div", jC, [H("div", null, [H("img", {
					src: t.img,
					alt: ""
				}, null, 8, MC)])])) : (z(), B("span", NC, k(P(dS)(t.name)), 1)),
				H("div", PC, [
					H("strong", null, k(t.name), 1),
					e.draggedCareerIndex === i ? (z(), B("span", FC, " Dragging ")) : e.dragOverCareerIndex === i ? (z(), B("span", IC, " Drop here ")) : G("", !0),
					H("span", null, [W(k(t.careerGroup || "Career") + " ", 1), t.level === null ? G("", !0) : (z(), B(R, { key: 0 }, [W(" level " + k(t.level), 1)], 64))]),
					H("small", {
						class: "dui-badge dui-badge-ghost",
						title: [
							`Characteristics: ${P(uS)(t.grants.characteristics)}`,
							`Skills: ${P(uS)(t.grants.skills)}`,
							`Talents: ${P(uS)(t.grants.talents)}`,
							`Trappings: ${P(uS)(t.grants.trappings)}`
						].join("\n")
					}, k(P(lS)(t)), 9, LC),
					H("div", RC, [H("fieldset", zC, [r[2] ||= H("legend", { class: "dui-fieldset-legend" }, "Quantity", -1), H("input", {
						"aria-label": `Quantity for ${t.name}`,
						class: "dui-input dui-input-sm",
						value: t.quantity,
						min: "1",
						type: "number",
						onInput: (e) => n("careerQuantityInput", i, e)
					}, null, 40, BC)]), H("div", VC, [
						H("button", {
							class: "dui-join-item dui-btn dui-btn-sm",
							disabled: i === 0,
							title: "Move career earlier",
							type: "button",
							onClick: (e) => n("moveCareer", i, -1)
						}, " Up ", 8, HC),
						H("button", {
							class: "dui-join-item dui-btn dui-btn-sm",
							disabled: i === e.careers.length - 1,
							title: "Move career later",
							type: "button",
							onClick: (e) => n("moveCareer", i, 1)
						}, " Down ", 8, UC),
						H("button", {
							class: "dui-join-item dui-btn dui-btn-sm",
							type: "button",
							onClick: (e) => n("removeCareer", i)
						}, " Remove ", 8, WC)
					])])
				])
			], 40, kC))), 128))])) : (z(), B("p", GC, "No careers queued yet."))]),
			_: 1
		}));
	}
}), qC = {
	class: "dui-alert dui-alert-info",
	role: "status"
}, JC = { key: 0 }, YC = { key: 1 }, XC = { class: "dui-carousel" }, ZC = { class: "dui-avatar" }, QC = [
	"aria-label",
	"aria-pressed",
	"title",
	"onClick"
], $C = ["src"], ew = { class: "dui-badge" }, tw = /* @__PURE__ */ I({
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
		return (t, r) => (z(), V(ex, {
			open: e.open,
			title: "Portrait Gallery",
			onClose: r[0] ||= (e) => n("close")
		}, {
			default: F(() => [H("section", null, [H("div", qC, [H("strong", null, k(e.portraitCandidates.length) + " portrait options", 1), e.isLoadingPortraitCandidates ? (z(), B("span", JC, "Finding assets...")) : (z(), B("span", YC, "Click an image to use it for the generated NPC."))]), H("div", XC, [(z(!0), B(R, null, L(e.portraitCandidates, (t) => (z(), B("div", {
				key: t.key,
				class: "dui-carousel-item"
			}, [H("div", ZC, [H("button", {
				"aria-label": P(fS)(t),
				"aria-pressed": t.key === e.selectedPortraitCandidateKey,
				class: O(["dui-btn dui-btn-xl dui-btn-square", { "dui-btn-active": t.key === e.selectedPortraitCandidateKey }]),
				title: P(fS)(t),
				type: "button",
				onClick: (e) => n("selectPortrait", t)
			}, [H("img", {
				src: t.img,
				alt: ""
			}, null, 8, $C)], 10, QC)]), H("span", ew, k(t.label), 1)]))), 128))])])]),
			_: 1
		}, 8, ["open"]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/errors.ts
function nw(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not resolve that Actor drop.";
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/useBaseActorSelection.ts
function rw(e, t) {
	let n = Gb(), { baseActors: r, selectedBaseActorUuid: i } = Os(n), a = /* @__PURE__ */ N(""), o = K(() => {
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
			t.value = nw(e);
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
function iw() {
	let { advancements: e, careers: t, finalPortraitPath: n, selectedBaseActor: r, trappings: i } = Os(Gb()), a = K(() => {
		let e = 0;
		for (let n of t.value) e += n.quantity;
		return e;
	}), o = K(() => i.value.filter((e) => !e.ignored).length), s = K(() => e.value.filter((e) => e.current !== e.careerValue).length), c = K(() => i.value.filter((e) => !e.ignored && e.resolution.status === "fallback").length), l = K(() => i.value.filter((e) => e.ignored).length), u = K(() => e.value.filter((e) => e.kind === "skill" && Gv(e.name) !== null).length), d = K(() => i.value.filter((e) => !e.ignored && e.resolution.status === "unresolved").length), f = K(() => {
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
function aw() {
	let e = Gb(), { optionalTraits: t, quickTraits: n, traits: r } = Os(e), i = K(() => new Set(r.value.map((e) => ow(e.name)))), a = K(() => t.value.map(s)), o = K(() => {
		let e = new Set(t.value.map((e) => ow(e.name)));
		return n.value.filter((t) => !e.has(ow(t.name))).map(s);
	});
	function s(e) {
		return {
			...e,
			isSelected: i.value.has(ow(e.name))
		};
	}
	function c(t) {
		let n = i.value.has(ow(t.name));
		e.setQuickTraitSelected(t, !n);
	}
	function l(t) {
		let n = i.value.has(ow(t.name));
		e.setOptionalTraitSelected(t, !n);
	}
	return {
		displayedQuickTraitOptions: o,
		optionalTraitOptions: a,
		toggleOptionalTrait: l,
		toggleQuickTrait: c
	};
}
function ow(e) {
	return e.trim().toLocaleLowerCase();
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/useCareerQueue.ts
function sw() {
	let e = Gb(), t = /* @__PURE__ */ N(null), n = /* @__PURE__ */ N(null);
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
var cw = new Set([
	"and",
	"any",
	"the",
	"with",
	"without",
	"of",
	"or",
	"npc"
]);
function lw(e) {
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
	}), pw(t);
}
function uw(e, t) {
	let n = vw(e);
	return n ? t.some((e) => vw(e.img) === n) : !1;
}
function dw(e) {
	let t = [];
	for (let n of e.careers) t.push(n.name, n.careerGroup);
	return e.selectedBaseActor && t.push(e.selectedBaseActor.name, e.selectedBaseActor.species), xw(t.flatMap((e) => bw(e)).filter((e) => e.length >= 3 && !cw.has(e)));
}
function fw(e, t) {
	let n = yw(e);
	return n ? t.some((e) => n.includes(e)) : !1;
}
function pw(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.img.trim().toLocaleLowerCase();
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
function mw(e) {
	return pw([...lw(e), ...e.assetCandidates]);
}
function hw(e) {
	let t = e.settings.searchCompendiumPortraitAssets || e.settings.searchFoundryPortraitAssets, n = !!e.selectedBaseActor || e.careers.length > 0;
	return t && n;
}
function gw(e) {
	return e ? e.maxDirectories <= 0 ? e.phase === "ready" ? 100 : 4 : Math.min(100, Math.round(e.directoriesVisited / e.maxDirectories * 100)) : 0;
}
function _w(e) {
	return e ? e.phase === "ready" ? `${e.candidatesFound} options found` : e.phase === "filesystem" ? e.maxDirectories <= 0 ? `${e.directoriesVisited} directories - ${e.currentLocation}` : `${e.directoriesVisited}/${e.maxDirectories} directories - ${e.currentLocation}` : e.currentLocation : "";
}
function vw(e) {
	return e.trim().toLocaleLowerCase();
}
function yw(e) {
	return e.trim().toLocaleLowerCase().replaceAll(/[_-]/g, " ").replaceAll(/[(),.:;[\]]/g, " ").replaceAll(/\s+/g, " ");
}
function bw(e) {
	let t = yw(e);
	return [t, ...t.split(" ")].filter(Boolean);
}
function xw(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/state/npc-builder/workflows/portrait-candidates-workflow.ts
function Sw(e, t) {
	let n = Gb(), { careers: r, finalPortraitPath: i, selectedBaseActor: a, selectedPortraitPath: o, settings: s } = Os(n), c = /* @__PURE__ */ N([]), l = /* @__PURE__ */ N(!1), u = /* @__PURE__ */ N(null), d = 0, f = K(() => mw({
		assetCandidates: c.value,
		careers: r.value,
		selectedBaseActor: a.value
	})), p = K(() => f.value.slice(0, 10)), m = K(() => Math.max(0, f.value.length - p.value.length)), h = K(() => f.value.find((e) => e.img === i.value) ?? null), g = K(() => h.value?.key ?? ""), _ = K(() => _w(u.value)), v = K(() => gw(u.value));
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
		o.value && !l.value && !uw(o.value, f.value) && n.selectPortrait("");
	}, { immediate: !0 });
	function y(e) {
		n.selectPortrait(e.img);
	}
	async function b() {
		let n = d + 1;
		if (d = n, !hw({
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
			d === n && (t.value = Cw(e));
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
function Cw(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish searching for portraits.";
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/usePortraitCandidates.ts
function ww(e, t) {
	let n = Sw(e, t), r = /* @__PURE__ */ N(!1);
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
var Tw = /* @__PURE__ */ I({
	__name: "NpcBuilderBuildTab",
	props: {
		bridge: {},
		isLoadingActors: { type: Boolean },
		isLoadingBaseDraft: { type: Boolean }
	},
	emits: ["careerDrop"],
	setup(e, { emit: t }) {
		let n = e, r = t, { actorName: i, advancements: a, careers: o, estimatedNpcXp: s, finalActorName: c, finalCareer: l, finalPortraitPath: u, grantTotals: d, selectedBaseActor: f, selectedSpells: p, suggestedActorName: m, traits: h } = Os(Gb()), g = /* @__PURE__ */ N(""), { actorFilter: _, filteredActors: v, handleActorDrop: y, selectedBaseActorSelectValue: b } = rw(n.bridge, g), { clearCareerDragState: x, draggedCareerIndex: S, dragOverCareerIndex: C, handleCareerDragOver: w, handleCareerDragStart: T, handleCareerDrop: E, moveCareer: ee, removeCareer: te, setCareerQuantity: ne, setDragOverCareerIndex: re } = sw(), { displayedQuickTraitOptions: ie, optionalTraitOptions: ae, toggleOptionalTrait: oe, toggleQuickTrait: se } = aw(), { buildPreviewStatus: D, buildPreviewWarnings: ce, careerItemCount: le, editedAdvanceCount: ue, fallbackTrappingCount: de, ignoredTrappingCount: fe, visibleTrappingCount: pe } = iw(), { compactPortraitCandidates: me, hiddenPortraitCandidateCount: he, isLoadingPortraitCandidates: ge, isPortraitGalleryOpen: _e, portraitCandidates: O, portraitSearchProgress: ve, portraitSearchProgressLabel: ye, portraitSearchProgressValue: be, selectedPortraitCandidate: xe, selectedPortraitCandidateKey: Se, selectPortrait: Ce, selectPortraitFromGallery: we } = ww(n.bridge, g);
		return (t, n) => (z(), B("section", null, [
			U(wS, {
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
			U(KC, {
				careers: P(o),
				"drag-over-career-index": P(C),
				"dragged-career-index": P(S),
				onCareerDragEnd: P(x),
				onCareerDragEnter: P(re),
				onCareerDragOver: P(w),
				onCareerDragStart: P(T),
				onCareerDrop: n[2] ||= (e) => r("careerDrop", e),
				onCareerDropOnRow: P(E),
				onCareerQuantityInput: P(ne),
				onMoveCareer: P(ee),
				onRemoveCareer: P(te)
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
			U(DC, {
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
			U(tw, {
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
function Ew(e) {
	return e ? e.digDownActive ? e.digDownDeepFileSearchEnabled ? e.digDownCacheReady ? `Dig Down cache ready with ${e.digDownIndexedFileCount} indexed files.` : "Dig Down is active; its file cache is still building or unavailable." : "Dig Down is active, but its Deep File Search setting is disabled." : "Install and enable Dig Down to search local files for portrait suggestions." : "Checking Dig Down integration.";
}
//#endregion
//#region src/functions/npc-builder/settings/settings-payload.ts
function Dw(e) {
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
function Ow(e) {
	let t = Gb(), { actorFolders: n, itemFolders: r, settings: i } = Os(t), a = /* @__PURE__ */ N(""), o = /* @__PURE__ */ N(""), s = /* @__PURE__ */ N(!1), c = /* @__PURE__ */ N(""), l = /* @__PURE__ */ N(null), u = /* @__PURE__ */ N(""), d = /* @__PURE__ */ N(""), f = K(() => l.value?.digDownActive ?? !0), p = K(() => Ew(l.value));
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
			await n.refresh(), n.setFolderUuid(r.uuid), t.hydrateSettings(await e.saveSettings(E())), d.value = `Using folder "${r.name}".`;
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
			t.hydrateSettings(await e.saveSettings(E())), t.hydrateQuickTraits(await e.importRecommendedQuickTraits(i.value)), d.value = "Recommended quick traits imported.";
		});
	}
	async function S() {
		await w(async () => {
			t.hydrateSettings(await e.saveSettings(E())), await T(), d.value = "Settings saved.";
		});
	}
	async function C() {
		await w(async () => {
			t.hydrateSettings(await e.saveSettings(Wy())), await T(), d.value = "Settings reset to defaults.";
		});
	}
	async function w(e) {
		s.value = !0, o.value = "", d.value = "";
		try {
			await e();
		} catch (e) {
			o.value = kw(e);
		} finally {
			s.value = !1;
		}
	}
	async function T() {
		let [n, r] = await Promise.all([e.listBaseActors(i.value), e.listQuickTraits(i.value)]);
		t.hydrateBaseActors(n), t.hydrateQuickTraits(r);
	}
	function E() {
		return Dw({
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
function kw(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSettingsTab/FolderSetting.vue?vue&type=script&setup=true&lang.ts
var Aw = { class: "dui-fieldset" }, jw = { class: "dui-fieldset-legend" }, Mw = ["aria-label", "value"], Nw = { value: "" }, Pw = ["value"], Fw = { class: "dui-fieldset" }, Iw = ["aria-label", "value"], Lw = { class: "dui-card-actions" }, Rw = ["disabled"], zw = /* @__PURE__ */ I({
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
			H("fieldset", Aw, [H("legend", jw, k(e.folderLabel), 1), H("select", {
				"aria-label": e.folderLabel,
				class: "dui-select dui-select-sm",
				value: e.selectedUuid,
				onChange: r
			}, [H("option", Nw, k(e.defaultOptionLabel), 1), (z(!0), B(R, null, L(e.folders, (e) => (z(), B("option", {
				key: e.uuid,
				value: e.uuid
			}, k(e.name), 9, Pw))), 128))], 40, Mw)]),
			H("fieldset", Fw, [a[1] ||= H("legend", { class: "dui-fieldset-legend" }, "Create or use by name", -1), H("input", {
				"aria-label": `Create or use ${e.folderLabel} by name`,
				class: "dui-input dui-input-sm",
				value: e.createName,
				placeholder: "Folder name",
				type: "text",
				onInput: i
			}, null, 40, Iw)]),
			H("div", Lw, [H("button", {
				class: "dui-btn dui-btn-sm",
				disabled: e.disabled || !e.createName.trim(),
				type: "button",
				onClick: a[0] ||= (e) => n("saveFolderName")
			}, k(e.buttonLabel ?? "Save Folder"), 9, Rw)])
		]));
	}
}), Bw = /* @__PURE__ */ I({
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
		return (t, r) => (z(), V(Ex, {
			description: "Limit the source picker or choose where generated Actors are stored.",
			number: "1",
			title: "Actor Sources"
		}, {
			default: F(() => [U(zw, {
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
			]), U(zw, {
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
}), Vw = { class: "dui-label" }, Hw = ["checked"], Uw = { class: "dui-label" }, Ww = ["checked"], Gw = { class: "dui-label" }, Kw = ["checked"], qw = { class: "dui-label" }, Jw = ["checked"], Yw = { class: "dui-label" }, Xw = ["checked"], Zw = /* @__PURE__ */ I({
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
		return (t, i) => (z(), V(Ex, {
			description: "Choose which base-only data is included in the editable draft.",
			number: "5",
			title: "Base Actor Features"
		}, {
			default: F(() => [
				H("label", Vw, [H("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowCharacteristics,
					type: "checkbox",
					onChange: i[0] ||= (e) => n("allowCharacteristicsChange", r(e))
				}, null, 40, Hw), i[5] ||= H("span", null, "Show base actor characteristics", -1)]),
				H("label", Uw, [H("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowSkills,
					type: "checkbox",
					onChange: i[1] ||= (e) => n("allowSkillsChange", r(e))
				}, null, 40, Ww), i[6] ||= H("span", null, "Show base actor skills", -1)]),
				H("label", Gw, [H("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowTalents,
					type: "checkbox",
					onChange: i[2] ||= (e) => n("allowTalentsChange", r(e))
				}, null, 40, Kw), i[7] ||= H("span", null, "Show base actor talents", -1)]),
				H("label", qw, [H("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowTrappings,
					type: "checkbox",
					onChange: i[3] ||= (e) => n("allowTrappingsChange", r(e))
				}, null, 40, Jw), i[8] ||= H("span", null, "Show base actor trappings", -1)]),
				H("label", Yw, [H("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowTraits,
					type: "checkbox",
					onChange: i[4] ||= (e) => n("allowTraitsChange", r(e))
				}, null, 40, Xw), i[9] ||= H("span", null, "Show base actor traits", -1)])
			]),
			_: 1
		}));
	}
}), Qw = { class: "dui-label" }, $w = ["checked"], eT = /* @__PURE__ */ I({
	__name: "MagicSpellSettings",
	props: { autoSelectGrantedSpells: { type: Boolean } },
	emits: ["autoSelectGrantedSpellsChange"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			let t = e.target;
			n("autoSelectGrantedSpellsChange", !!t?.checked);
		}
		return (t, n) => (z(), V(Ex, {
			number: "6",
			title: "Magic and Spells"
		}, {
			default: F(() => [H("label", Qw, [H("input", {
				class: "dui-toggle dui-toggle-sm",
				checked: e.autoSelectGrantedSpells,
				type: "checkbox",
				onChange: r
			}, null, 40, $w), n[0] ||= H("span", null, "Select detected Lore spells by default", -1)])]),
			_: 1
		}));
	}
}), tT = { class: "dui-label" }, nT = ["checked"], rT = /* @__PURE__ */ I({
	__name: "NamingSettings",
	props: { includeSpeciesInName: { type: Boolean } },
	emits: ["includeSpeciesInNameChange"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			let t = e.target;
			n("includeSpeciesInNameChange", !!t?.checked);
		}
		return (t, n) => (z(), V(Ex, {
			number: "3",
			title: "Default Naming"
		}, {
			default: F(() => [H("label", tT, [H("input", {
				class: "dui-toggle dui-toggle-sm",
				checked: e.includeSpeciesInName,
				type: "checkbox",
				onChange: r
			}, null, 40, nT), n[0] ||= H("span", null, "Include species in suggested names", -1)])]),
			_: 1
		}));
	}
}), iT = { class: "dui-fieldset" }, aT = ["value"], oT = { class: "dui-label" }, sT = ["checked"], cT = { class: "dui-card-actions" }, lT = ["disabled"], uT = ["disabled"], dT = /* @__PURE__ */ I({
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
		return (t, a) => (z(), V(Ex, {
			number: "7",
			title: "Career Choices and Saving"
		}, {
			default: F(() => [
				H("fieldset", iT, [a[3] ||= H("legend", { class: "dui-fieldset-legend" }, "Lower career handling", -1), H("select", {
					"aria-label": "Lower career handling",
					class: "dui-select dui-select-sm",
					value: e.lowerCareerMode,
					onChange: r
				}, [...a[2] ||= [
					H("option", { value: "prompt" }, "Prompt when candidates are found", -1),
					H("option", { value: "auto-add-all" }, "Automatically add all lower-tier matches", -1),
					H("option", { value: "never" }, "Only add dropped careers", -1)
				]], 40, aT)]),
				H("label", oT, [H("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.askForLinkedSkillSpecializations,
					type: "checkbox",
					onChange: i
				}, null, 40, sT), a[4] ||= H("span", null, "Resolve linked career skill repeats separately", -1)]),
				H("div", cT, [H("button", {
					class: "dui-btn dui-btn-primary dui-btn-sm",
					disabled: e.isBusy,
					type: "button",
					onClick: a[0] ||= (e) => n("saveSettings")
				}, " Save Settings ", 8, lT), H("button", {
					class: "dui-btn dui-btn-sm",
					disabled: e.isBusy,
					type: "button",
					onClick: a[1] ||= (e) => n("resetSettings")
				}, " Reset to Defaults ", 8, uT)])
			]),
			_: 1
		}));
	}
}), fT = { class: "dui-label" }, pT = ["checked", "disabled"], mT = {
	"aria-live": "polite",
	class: "dui-alert",
	role: "status"
}, hT = { class: "dui-label" }, gT = ["checked"], _T = { class: "dui-label" }, vT = ["checked"], yT = /* @__PURE__ */ I({
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
		return (t, n) => (z(), V(Ex, {
			description: "Choose which local Foundry sources can suggest portraits.",
			number: "4",
			title: "Portrait Suggestions"
		}, {
			default: F(() => [
				H("label", fT, [H("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.searchFoundryPortraitAssets,
					disabled: !e.canUseDigDownPortraitSearch,
					type: "checkbox",
					onChange: r
				}, null, 40, pT), n[0] ||= H("span", null, "Search Dig Down's file cache for portrait suggestions", -1)]),
				H("p", mT, k(e.statusLabel), 1),
				H("label", hT, [H("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.searchCompendiumPortraitAssets,
					type: "checkbox",
					onChange: i
				}, null, 40, gT), n[1] ||= H("span", null, "Search Actor and Item compendiums for portrait suggestions", -1)]),
				H("label", _T, [H("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.searchWebPortraitAssets,
					disabled: "",
					type: "checkbox"
				}, null, 8, vT), n[2] ||= H("span", null, "Search the web for portrait suggestions (later)", -1)])
			]),
			_: 1
		}));
	}
}), bT = { class: "dui-card-actions" }, xT = ["disabled"], ST = /* @__PURE__ */ I({
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
		return (t, r) => (z(), V(Ex, {
			description: "Items in this folder become one-click Trait choices on the Build tab.",
			number: "2",
			title: "Quick Traits"
		}, {
			default: F(() => [U(zw, {
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
			]), H("div", bT, [H("button", {
				class: "dui-btn dui-btn-sm",
				disabled: e.isBusy || !e.quickTraitFolderUuid,
				type: "button",
				onClick: r[3] ||= (e) => n("importRecommendedQuickTraits")
			}, " Import Recommended Quick Traits ", 8, xT)])]),
			_: 1
		}));
	}
}), CT = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, wT = {
	key: 1,
	"aria-live": "polite",
	class: "dui-alert dui-alert-info",
	role: "status"
}, TT = /* @__PURE__ */ I({
	__name: "SettingsMessages",
	props: {
		errorMessage: {},
		settingsMessage: {}
	},
	setup(e) {
		return (t, n) => e.errorMessage ? (z(), B("p", CT, k(e.errorMessage), 1)) : e.settingsMessage ? (z(), B("p", wT, k(e.settingsMessage), 1)) : G("", !0);
	}
}), ET = /* @__PURE__ */ I({
	__name: "NpcBuilderSettingsTab",
	props: { bridge: {} },
	setup(e) {
		let { actorFolders: t, baseActorFolderName: n, canUseDigDownPortraitSearch: r, errorMessage: i, importRecommendedQuickTraits: a, isBusy: o, itemFolders: s, outputActorFolderName: c, portraitSearchStatusLabel: l, quickTraitFolderName: u, refreshPortraitSearchAvailability: d, resetSettingsToDefaults: f, saveBaseActorFolderName: p, saveOutputActorFolderName: m, saveQuickTraitFolderName: h, saveSettings: g, settings: _, settingsMessage: v } = Ow(e.bridge);
		return hr(() => {
			d();
		}), (e, d) => (z(), B("section", null, [
			U(TT, {
				"error-message": P(i),
				"settings-message": P(v)
			}, null, 8, ["error-message", "settings-message"]),
			U(Bw, {
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
			U(ST, {
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
			U(rT, {
				"include-species-in-name": P(_).includeSpeciesInName,
				onIncludeSpeciesInNameChange: d[6] ||= (e) => P(_).includeSpeciesInName = e
			}, null, 8, ["include-species-in-name"]),
			d[19] ||= H("div", { class: "dui-divider" }, null, -1),
			U(yT, {
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
			U(Zw, {
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
			U(eT, {
				"auto-select-granted-spells": P(_).autoSelectGrantedSpells,
				onAutoSelectGrantedSpellsChange: d[14] ||= (e) => P(_).autoSelectGrantedSpells = e
			}, null, 8, ["auto-select-granted-spells"]),
			d[22] ||= H("div", { class: "dui-divider" }, null, -1),
			U(dT, {
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
function DT(e) {
	return e.map((e) => `${e.kind}:${e.sourceName}:${e.rawLore}`).sort().join("|");
}
function OT(e) {
	return e.filter((e) => e.isAmbiguous);
}
function kT(e, t) {
	return { rows: OT(e).map((e) => ({
		grantLabel: jT(e),
		options: tb(e, t),
		rawLore: e.rawLore,
		resolutionKey: e.resolutionKey,
		selectedLore: "",
		sourceLabel: MT(e)
	})) };
}
function AT(e) {
	return e.kind === "arcane-magic" ? "Arcane Magic" : e.kind === "petty-magic" ? "Petty Magic" : "Spellcaster";
}
function jT(e) {
	return `${AT(e)} from ${e.sourceName}`;
}
function MT(e) {
	return e.source === "talent" ? "Talent" : "Trait";
}
//#endregion
//#region src/state/npc-builder/workflows/spells-workflow.ts
function NT(e) {
	let t = Gb(), { magicGrants: n, spells: r, selectedSpells: i } = Os(t), a = /* @__PURE__ */ N(""), o = /* @__PURE__ */ N(!1), s = /* @__PURE__ */ N(!1), c = /* @__PURE__ */ N([]), l = /* @__PURE__ */ N(null), u = 0, d = K(() => OT(n.value)), f = K(() => n.value.length - d.value.length);
	Kn(() => DT(n.value), () => {
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
			u === r && (a.value = PT(e));
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
				a.value = PT(e);
			} finally {
				o.value = !1;
			}
		}
	}
	async function g() {
		a.value = "", await h(), l.value = kT(n.value, c.value);
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
			a.value = PT(e);
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
function PT(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that spell action.";
}
//#endregion
//#region src/view/apps/npc-builder/components/MagicLoreResolutionPromptContent.vue?vue&type=script&setup=true&lang.ts
var FT = { class: "dui-card-body" }, IT = { class: "dui-card-title" }, LT = { class: "dui-fieldset" }, RT = ["onUpdate:modelValue", "aria-label"], zT = ["value"], BT = { class: "dui-card-actions" }, VT = /* @__PURE__ */ I({
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
			}, [H("div", FT, [
				H("h3", IT, k(e.grantLabel), 1),
				H("span", null, k(e.sourceLabel) + " - " + k(e.rawLore || "Any Lore"), 1),
				H("fieldset", LT, [r[3] ||= H("legend", { class: "dui-fieldset-legend" }, "Lore", -1), zn(H("select", {
					"onUpdate:modelValue": (t) => e.selectedLore = t,
					"aria-label": `Lore for ${e.grantLabel}`,
					class: "dui-select dui-select-sm"
				}, [r[2] ||= H("option", { value: "" }, "Leave unresolved", -1), (z(!0), B(R, null, L(e.options, (e) => (z(), B("option", {
					key: e.key,
					value: e.value
				}, k(e.label) + k(e.wind && e.wind !== "None" ? ` (${e.wind})` : ""), 9, zT))), 128))], 8, RT), [[To, e.selectedLore]])])
			])]))), 128)),
			H("div", BT, [H("button", {
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
}), HT = {
	key: 0,
	class: "dui-alert"
}, UT = {
	key: 1,
	class: "dui-list"
}, WT = { class: "dui-list-col-grow" }, GT = { key: 0 }, KT = { key: 1 }, qT = {
	key: 2,
	class: "dui-card-actions"
}, JT = ["disabled"], YT = /* @__PURE__ */ I({
	__name: "MagicAccessPanel",
	props: {
		ambiguousGrantCount: {},
		isLoadingLoreOptions: { type: Boolean },
		magicGrants: {}
	},
	emits: ["resolveLores"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (z(), V(Ex, {
			description: "Magic Talents and Traits determine which spell Lores are available.",
			number: "1",
			title: "Magic Access"
		}, {
			default: F(() => [e.magicGrants.length ? (z(), B("ul", UT, [(z(!0), B(R, null, L(e.magicGrants, (e) => (z(), B("li", {
				key: `${e.source}:${e.sourceName}:${e.rawLore}`,
				class: "dui-list-row"
			}, [H("div", WT, [
				H("strong", null, k(P(AT)(e)), 1),
				H("span", null, k(P(MT)(e)) + " - " + k(e.sourceName), 1),
				e.isAmbiguous ? (z(), B("small", GT, " Needs Lore resolution before automatic spells can be found. ")) : (z(), B("small", KT, " Lore: " + k(e.rawLore || e.normalizedLore), 1))
			])]))), 128))])) : (z(), B("p", HT, " No magic-enabling Talent or Trait is selected. ")), e.ambiguousGrantCount ? (z(), B("div", qT, [H("button", {
				class: "dui-btn dui-btn-sm",
				disabled: e.isLoadingLoreOptions,
				type: "button",
				onClick: r[0] ||= (e) => n("resolveLores")
			}, k(e.isLoadingLoreOptions ? "Loading Lores..." : "Resolve Lores"), 9, JT)])) : G("", !0)]),
			_: 1
		}));
	}
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSpellsTab/labels.ts
function XT(e) {
	return e.source === "custom" ? "Dropped" : e.sourceLabel;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSpellsTab/SpellSelectionPanel.vue?vue&type=script&setup=true&lang.ts
var ZT = { class: "dui-card-actions" }, QT = ["disabled"], $T = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, eE = {
	key: 1,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, tE = {
	key: 2,
	class: "dui-list"
}, nE = [
	"aria-label",
	"checked",
	"onChange"
], rE = { class: "dui-list-col-grow" }, iE = {
	key: 0,
	class: "dui-avatar"
}, aE = ["src"], oE = ["onClick"], sE = {
	key: 3,
	class: "dui-alert"
}, cE = /* @__PURE__ */ I({
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
		return (t, r) => (z(), V(Ex, {
			description: "Select detected Lore spells or drop specific Spell Items.",
			number: "2",
			title: "Spells"
		}, {
			default: F(() => [
				U(Gf, {
					description: "Add a specific Spell item regardless of detected Lores.",
					title: "Drop Spell Items",
					onDropData: r[0] ||= (e) => n("spellDrop", e)
				}),
				H("div", ZT, [H("button", {
					class: "dui-btn dui-btn-sm",
					disabled: e.isLoadingSpells || !e.resolvedGrantCount,
					type: "button",
					onClick: r[1] ||= (e) => n("refreshSpells")
				}, k(e.isLoadingSpells ? "Finding spells..." : "Refresh Spells"), 9, QT), H("span", null, k(e.selectedSpellCount) + " selected / " + k(e.spells.length) + " found", 1)]),
				e.errorMessage ? (z(), B("p", $T, k(e.errorMessage), 1)) : G("", !0),
				e.ambiguousGrantCount ? (z(), B("p", eE, k(e.ambiguousGrantCount) + " magic grant" + k(e.ambiguousGrantCount === 1 ? "" : "s") + " still need Lore resolution. You can still drop specific spells for now. ", 1)) : G("", !0),
				e.spells.length ? (z(), B("ul", tE, [(z(!0), B(R, null, L(e.spells, (e) => (z(), B("li", {
					key: e.key,
					class: "dui-list-row"
				}, [
					H("input", {
						"aria-label": `Use ${e.name}`,
						class: "dui-checkbox dui-checkbox-sm",
						checked: e.selected,
						type: "checkbox",
						onChange: (t) => n("spellSelectedChange", e, t)
					}, null, 40, nE),
					H("div", rE, [
						e.img ? (z(), B("div", iE, [H("div", null, [H("img", {
							src: e.img,
							alt: ""
						}, null, 8, aE)])])) : G("", !0),
						H("strong", null, k(e.name), 1),
						H("span", null, k(e.loreName || "Unknown Lore") + " · " + k(P(XT)(e)), 1)
					]),
					e.source === "custom" ? (z(), B("button", {
						key: 0,
						class: "dui-btn dui-btn-sm",
						type: "button",
						onClick: (t) => n("removeCustomSpell", e.key)
					}, " Remove ", 8, oE)) : G("", !0)
				]))), 128))])) : (z(), B("p", sE, " No matching spells found yet. Drop specific spells here, or resolve a non-ambiguous magic Lore. "))
			]),
			_: 1
		}));
	}
}), lE = /* @__PURE__ */ I({
	__name: "NpcBuilderSpellsTab",
	props: { bridge: {} },
	setup(e) {
		let { ambiguousGrants: t, confirmMagicLorePrompt: n, dismissMagicLorePrompt: r, errorMessage: i, handleSpellDrop: a, initialize: o, isLoadingLoreOptions: s, isLoadingSpells: c, loadDetectedSpells: l, magicGrants: u, openMagicLorePrompt: d, pendingMagicLorePrompt: f, removeCustomSpell: p, resolvedGrantCount: m, selectedSpells: h, setSpellSelected: g, spells: _ } = NT(e.bridge);
		hr(() => {
			o();
		});
		function v(e, t) {
			let n = t.target;
			n && g(e.key, n.checked);
		}
		return (e, o) => (z(), B("section", null, [
			U(ex, {
				open: P(f) !== null,
				title: "Resolve Magic Lores",
				onClose: P(r)
			}, {
				default: F(() => [P(f) ? (z(), V(VT, {
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
			U(YT, {
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
			U(cE, {
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
}), uE = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, dE = { class: "dui-collapse-title" }, fE = { class: "dui-badge" }, pE = {
	key: 0,
	class: "dui-badge dui-badge-info"
}, mE = {
	key: 1,
	class: "dui-badge dui-badge-warning"
}, hE = { class: "dui-collapse-content" }, gE = { class: "dui-fieldset" }, _E = { class: "dui-fieldset-legend" }, vE = [
	"aria-label",
	"value",
	"onInput"
], yE = {
	key: 0,
	class: "dui-fieldset"
}, bE = [
	"aria-label",
	"value",
	"onChange"
], xE = ["value"], SE = {
	key: 1,
	class: "dui-fieldset"
}, CE = [
	"aria-label",
	"value",
	"onInput"
], wE = ["onClick"], TE = {
	key: 1,
	class: "dui-alert"
}, EE = /* @__PURE__ */ I({
	__name: "NpcBuilderTraitsTab",
	props: {
		bridge: {},
		difficultyOptions: {}
	},
	setup(e) {
		let t = e, n = Gb(), { traits: r } = Os(n), i = /* @__PURE__ */ N("");
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
		return (t, n) => (z(), V(Ex, {
			description: "Open a Trait to review its WFRP configuration before building.",
			title: "Traits"
		}, {
			default: F(() => [
				U(Gf, {
					description: "Add creature traits or NPC trait items.",
					title: "Drop Trait Items",
					onDropData: c
				}),
				i.value ? (z(), B("p", uE, k(i.value), 1)) : G("", !0),
				(z(!0), B(R, null, L(P(r), (t) => (z(), B("details", {
					key: t.key,
					class: "dui-collapse dui-collapse-arrow dui-card-border"
				}, [H("summary", dE, [
					H("strong", null, k(t.name), 1),
					H("span", fE, k(a(t)), 1),
					t.config.rollable ? (z(), B("span", pE, "Rollable")) : G("", !0),
					t.config.damage ? (z(), B("span", mE, "Damage")) : G("", !0)
				]), H("div", hE, [
					H("fieldset", gE, [H("legend", _E, k(t.config.damage ? "Damage" : "Specification"), 1), H("input", {
						"aria-label": `${t.config.damage ? "Damage" : "Specification"} for ${t.name}`,
						class: "dui-input dui-input-sm",
						value: t.config.specification,
						placeholder: "None",
						type: "text",
						onInput: (e) => s(t, "specification", e)
					}, null, 40, vE)]),
					t.config.rollable && !t.config.damage ? (z(), B("fieldset", yE, [n[0] ||= H("legend", { class: "dui-fieldset-legend" }, "Difficulty", -1), H("select", {
						"aria-label": `Difficulty for ${t.name}`,
						class: "dui-select dui-select-sm",
						value: t.config.defaultDifficulty,
						onChange: (e) => s(t, "defaultDifficulty", e)
					}, [(z(!0), B(R, null, L(e.difficultyOptions, (e) => (z(), B("option", {
						key: e.value,
						value: e.value
					}, k(e.label), 9, xE))), 128))], 40, bE)])) : G("", !0),
					t.config.damage && t.config.dice ? (z(), B("fieldset", SE, [n[1] ||= H("legend", { class: "dui-fieldset-legend" }, "Dice", -1), H("input", {
						"aria-label": `Dice for ${t.name}`,
						class: "dui-input dui-input-sm",
						value: t.config.dice,
						placeholder: "Optional",
						type: "text",
						onInput: (e) => s(t, "dice", e)
					}, null, 40, CE)])) : G("", !0),
					H("button", {
						class: "dui-btn dui-btn-sm",
						type: "button",
						onClick: (e) => o(t)
					}, "Remove", 8, wE)
				])]))), 128)),
				P(r).length ? G("", !0) : (z(), B("p", TE, "No traits are selected yet."))
			]),
			_: 1
		}));
	}
}), DE = "__blank-item__";
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderTrappingsTab/resolution-labels.ts
function OE(e) {
	return e.source === "base" ? "Base" : e.source === "career" ? "Career" : "Custom";
}
function kE(e) {
	return e.resolution.status === "matched" ? `Matched ${e.resolution.selectedName}` : e.resolution.status === "fallback" ? `Blank ${e.resolution.selectedName || e.name}` : e.resolution.candidates.length ? "Choose a match" : "Needs resolution";
}
function AE(e) {
	return e.ignored ? "Ignored" : e.resolution.status === "matched" ? "Matched" : e.resolution.status === "fallback" ? "Blank item" : e.resolution.status === "ambiguous" || e.resolution.candidates.length ? "Choose" : "Needs resolution";
}
function jE(e) {
	let t = "dui-badge";
	return e.ignored ? [t, "dui-badge-ghost"] : e.resolution.status === "matched" ? [t, "dui-badge-success"] : e.resolution.status === "fallback" ? [t, "dui-badge-info"] : e.resolution.status === "ambiguous" || e.resolution.candidates.length ? [t, "dui-badge-warning"] : [t, "dui-badge-error"];
}
function ME(e) {
	return e.resolution.status === "fallback" ? DE : e.resolution.selectedCandidateUuid;
}
function NE(e) {
	return e.source === "career";
}
function PE(e) {
	return e.resolution.candidates.length > 0 || NE(e);
}
function FE(e) {
	return e.resolution.searchTerms.length <= 1 ? "" : `Options: ${e.resolution.searchTerms.join(" / ")}`;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderTrappingsTab/TrappingsTable.vue?vue&type=script&setup=true&lang.ts
var IE = {
	key: 0,
	class: "dui-list"
}, LE = [
	"aria-label",
	"checked",
	"onChange"
], RE = { class: "dui-list-col-grow" }, zE = { key: 0 }, BE = {
	key: 1,
	class: "dui-fieldset"
}, VE = [
	"aria-label",
	"value",
	"onChange"
], HE = {
	key: 0,
	value: ""
}, UE = ["value"], WE = ["value"], GE = { key: 2 }, KE = { class: "dui-card-actions" }, qE = { class: "dui-fieldset" }, JE = [
	"aria-label",
	"value",
	"onInput"
], YE = ["onClick"], XE = {
	key: 1,
	class: "dui-alert"
}, ZE = /* @__PURE__ */ I({
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
		return (t, r) => e.trappings.length ? (z(), B("ul", IE, [(z(!0), B(R, null, L(e.trappings, (e) => (z(), B("li", {
			key: e.key,
			class: "dui-list-row"
		}, [H("input", {
			"aria-label": `Use ${e.name}`,
			class: "dui-checkbox dui-checkbox-sm",
			checked: !e.ignored,
			type: "checkbox",
			onChange: (t) => n("useChange", e.key, t)
		}, null, 40, LE), H("div", RE, [
			H("strong", null, k(e.name), 1),
			H("span", null, k(e.resolution.selectedItemType || e.itemType || "trapping") + " · " + k(P(OE)(e)), 1),
			P(FE)(e) ? (z(), B("span", zE, k(P(FE)(e)), 1)) : G("", !0),
			H("span", { class: O(P(jE)(e)) }, k(P(AE)(e)), 3),
			P(PE)(e) ? (z(), B("fieldset", BE, [r[0] ||= H("legend", { class: "dui-fieldset-legend" }, "Resolution", -1), H("select", {
				"aria-label": `Resolution for ${e.name}`,
				class: "dui-select dui-select-sm",
				value: P(ME)(e),
				onChange: (t) => n("resolutionChange", e.key, t)
			}, [
				e.resolution.candidates.length ? (z(), B("option", HE, "Choose match")) : G("", !0),
				(z(!0), B(R, null, L(e.resolution.candidates, (e) => (z(), B("option", {
					key: e.uuid,
					value: e.uuid
				}, k(e.name) + " (" + k(e.sourceLabel) + ") ", 9, UE))), 128)),
				P(NE)(e) ? (z(), B("option", {
					key: 1,
					value: P(DE)
				}, " Blank Item ", 8, WE)) : G("", !0)
			], 40, VE)])) : (z(), B("span", GE, k(P(kE)(e)), 1)),
			H("div", KE, [H("fieldset", qE, [r[1] ||= H("legend", { class: "dui-fieldset-legend" }, "Quantity", -1), H("input", {
				"aria-label": `Quantity for ${e.name}`,
				class: "dui-input dui-input-sm",
				value: e.quantity,
				min: "1",
				type: "number",
				onInput: (t) => n("quantityInput", e.key, t)
			}, null, 40, JE)]), e.source === "custom" ? (z(), B("button", {
				key: 0,
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: (t) => n("removeCustomTrapping", e.key)
			}, " Remove ", 8, YE)) : G("", !0)])
		])]))), 128))])) : (z(), B("p", XE, "No trappings are selected yet."));
	}
}), QE = { class: "dui-card-actions" }, $E = ["disabled"], eD = { key: 0 }, tD = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, nD = /* @__PURE__ */ I({
	__name: "NpcBuilderTrappingsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Gb(), { trappings: r } = Os(n), i = /* @__PURE__ */ N(""), a = /* @__PURE__ */ N(!1), o = K(() => r.value.filter((e) => !e.ignored && e.resolution.status === "unresolved"));
		hr(() => {
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
		return (e, t) => (z(), V(Ex, {
			description: "Review the Items that will be embedded in the generated NPC.",
			title: "Trappings"
		}, {
			default: F(() => [
				U(Gf, {
					description: "Add weapons, armour, containers, or any other item.",
					title: "Drop Trapping Items",
					onDropData: d
				}),
				H("div", QE, [H("button", {
					class: "dui-btn dui-btn-sm",
					disabled: a.value || !o.value.length,
					type: "button",
					onClick: u
				}, k(a.value ? "Resolving..." : "Resolve Trappings"), 9, $E), o.value.length ? (z(), B("span", eD, k(o.value.length) + " unresolved ", 1)) : G("", !0)]),
				i.value ? (z(), B("p", tD, k(i.value), 1)) : G("", !0),
				U(ZE, {
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
}), rD = { class: "dui-card-body" }, iD = { class: "dui-card-title" }, aD = { class: "dui-badge" }, oD = { class: "dui-fieldset" }, sD = ["onUpdate:modelValue", "aria-label"], cD = ["value"], lD = [
	"onUpdate:modelValue",
	"aria-label",
	"placeholder"
], uD = {
	key: 0,
	class: "dui-card-actions"
}, dD = { key: 0 }, fD = ["onClick"], pD = {
	key: 0,
	class: "dui-alert dui-alert-info"
}, mD = { class: "dui-card-actions" }, hD = /* @__PURE__ */ I({
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
			}, [H("div", rD, [
				H("h3", iD, k(e.getSkillResolutionLabel(t)), 1),
				H("span", aD, k(t.careerLabel), 1),
				H("fieldset", oD, [r[3] ||= H("legend", { class: "dui-fieldset-legend" }, "Specialization", -1), t.options.length > 1 ? zn((z(), B("select", {
					key: 0,
					"onUpdate:modelValue": (e) => t.resolvedSpecialization = e,
					"aria-label": `Specialization for ${e.getSkillResolutionLabel(t)}`,
					class: "dui-select dui-select-sm"
				}, [r[2] ||= H("option", { value: "" }, "Leave unresolved", -1), (z(!0), B(R, null, L(t.options, (e) => (z(), B("option", {
					key: e,
					value: e
				}, k(e), 9, cD))), 128))], 8, sD)), [[To, t.resolvedSpecialization]]) : zn((z(), B("input", {
					key: 1,
					"onUpdate:modelValue": (e) => t.resolvedSpecialization = e,
					"aria-label": `Specialization for ${e.getSkillResolutionLabel(t)}`,
					class: "dui-input dui-input-sm",
					placeholder: t.suggestedSpecializations.length ? "Type or choose below" : t.specialization,
					type: "text"
				}, null, 8, lD)), [[wo, t.resolvedSpecialization]])]),
				e.usesFreeformSkillSpecialization(t) ? (z(), B("div", uD, [t.isLoadingSuggestions ? (z(), B("small", dD, "Finding known choices.")) : G("", !0), (z(!0), B(R, null, L(t.suggestedSpecializations, (e) => (z(), B("button", {
					key: `${t.resolutionKey}:${e}`,
					class: "dui-btn dui-btn-sm",
					type: "button",
					onClick: (r) => n("chooseSkillSpecialization", t, e)
				}, k(e), 9, fD))), 128))])) : G("", !0)
			])]))), 128)),
			e.prompt.linkedRows.length ? (z(), B("div", pD, k(e.prompt.linkedRows.length) + " linked skill specialization" + k(e.prompt.linkedRows.length === 1 ? "" : "s") + " will reuse earlier choices from this career chain. ", 1)) : G("", !0),
			H("div", mD, [H("button", {
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
function gD(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderBuild.ts
function _D(e, t, n, r, i) {
	let a = Gb(), { advancements: o, buildTraits: s, careers: c, finalActorName: l, finalPortraitPath: u, selectedBaseActor: d, selectedSpells: f, settings: p, trappings: m } = Os(a), h = /* @__PURE__ */ N(!1), g = K(() => !!(d.value && c.value.length && !h.value && !i.value));
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
			r.value = gD(e), n.value = "";
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
function vD(e) {
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
function yD(e) {
	return [{
		career: e,
		mode: "add-or-increment"
	}];
}
function bD(e) {
	return [...e.candidates.filter((t) => e.selectedUuids.includes(t.uuid)).map((e) => ({
		career: e,
		mode: "add-if-missing"
	})), {
		career: e.droppedCareer,
		mode: "add-or-increment"
	}];
}
function xD(e) {
	let t = e.candidates.filter((t) => e.selectedUuids.includes(t.uuid)).length;
	return t === 0 ? "" : `Added ${t} lower-tier career candidate${t === 1 ? "" : "s"}.`;
}
function SD(e, t) {
	return e?.selectedUuids.includes(t) ?? !1;
}
function CD(e) {
	let { candidateUuid: t, isAlreadyQueued: n, prompt: r, selected: i } = e;
	return !r || n ? null : i ? [...new Set([...r.selectedUuids, t])] : r.selectedUuids.filter((e) => e !== t);
}
//#endregion
//#region src/functions/npc-builder/career-workflow/skill-resolution.ts
function wD(e, t) {
	let n = /* @__PURE__ */ new Map(), r = [], i = [];
	for (let a of e) {
		let e = /* @__PURE__ */ new Map();
		for (let o of Kv(a.career.uuid, a.career.grants.skills)) {
			let s = Gv(o.originalName);
			if (!s) continue;
			let c = qv(o.originalName), l = n.get(c) ?? [], u = e.get(c) ?? 0, d = t.enableLinkedSkillResolution && l[u] ? l[u] : "";
			if (e.set(c, u + 1), d) {
				r.push({
					linkedFromKey: d,
					resolutionKey: o.resolutionKey
				});
				continue;
			}
			i.push({
				baseName: s.baseName,
				careerLabel: OD(a.career),
				isLoadingSuggestions: !1,
				occurrence: o.occurrence,
				options: s.options,
				originalName: s.originalName,
				resolvedSpecialization: kD(s),
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
function TD(e) {
	return e.resolvedSpecialization.trim() ? Uv(e.baseName, e.resolvedSpecialization) : "";
}
function ED(e) {
	return e.occurrence > 0 ? `${e.originalName}, choice ${e.occurrence + 1}` : e.originalName;
}
function DD(e) {
	return e.options.length <= 1 && e.specialization.trim().toLocaleLowerCase() === "any";
}
function OD(e) {
	return e.level === null ? e.name : `${e.name}, tier ${e.level}`;
}
function kD(e) {
	return e.specialization.trim().toLocaleLowerCase() === "any" ? "" : e.options[0] ?? "";
}
//#endregion
//#region src/state/npc-builder/workflows/skill-suggestions.ts
async function AD(e, t) {
	await Promise.all(t.rows.map(async (t) => {
		if (DD(t)) {
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
function jD(e) {
	let t = Gb(), { careers: n, settings: r } = Os(t), i = /* @__PURE__ */ N(""), a = /* @__PURE__ */ N(""), o = /* @__PURE__ */ N(!1), s = /* @__PURE__ */ N(null), c = /* @__PURE__ */ N(null), l = K(() => vD(s.value));
	async function u(t) {
		a.value = "";
		try {
			await d(await e.resolveCareerDrop(t));
		} catch (e) {
			a.value = MD(e);
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
		m(yD(e), {
			enableLinkedSkillResolution: !1,
			message: ""
		});
	}
	function m(t, n) {
		let r = wD(t, n);
		if (r.rows.length) {
			c.value = r, AD(e, c.value);
			return;
		}
		b(t, n.message);
	}
	function h() {
		let e = s.value;
		e && (s.value = null, m(bD(e), {
			enableLinkedSkillResolution: !r.value.askForLinkedSkillSpecializations,
			message: xD(e)
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
			for (let n of e.rows) t.setSkillGrantResolution(n.resolutionKey, TD(n));
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
		return SD(s.value, e);
	}
	function C(e, t) {
		let n = CD({
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
		getSkillResolutionLabel: ED,
		handleCareerDrop: u,
		isCareerQueued: x,
		isFindingLowerCareers: o,
		isLowerCareerSelected: S,
		lowerCareerCandidateGroups: l,
		pendingLowerCareerPrompt: s,
		pendingSkillResolutionPrompt: c,
		setLowerCareerSelected: C,
		usesFreeformSkillSpecialization: DD
	};
}
function MD(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderCareerDropWorkflow.ts
function ND(e) {
	return jD(e);
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderInitialData.ts
function PD(e, t) {
	let n = Gb(), { selectedBaseActorUuid: r, settings: i } = Os(n), a = /* @__PURE__ */ N(!1), o = /* @__PURE__ */ N(!1), s = /* @__PURE__ */ N([]);
	hr(async () => {
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
			t.value = gD(e);
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
			t.value = gD(e), n.clearBaseDraftData();
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
function FD() {
	return {
		inFlightNames: [],
		successfulNames: []
	};
}
function ID(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) n.kind === "skill" && !n.characteristicKey && !Gv(n.name) && t.add(n.name);
	return [...t];
}
function LD(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) n.kind === "talent" && !n.talentMaximumKey && t.add(n.name);
	return [...t];
}
function RD(e, t) {
	let n = new Set([...t.inFlightNames, ...t.successfulNames]);
	return e.filter((e) => {
		let t = qv(e);
		return n.has(t) ? !1 : (n.add(t), !0);
	});
}
function zD(e, t) {
	return {
		...e,
		inFlightNames: HD([...e.inFlightNames, ...t])
	};
}
function BD(e, t) {
	let n = new Set(HD(t));
	return {
		inFlightNames: e.inFlightNames.filter((e) => !n.has(e)),
		successfulNames: HD([...e.successfulNames, ...n])
	};
}
function VD(e, t) {
	let n = new Set(HD(t));
	return {
		...e,
		inFlightNames: e.inFlightNames.filter((e) => !n.has(e))
	};
}
function HD(e) {
	return [...new Set([...e].map(qv).filter(Boolean))];
}
//#endregion
//#region src/state/npc-builder/workflows/metadata-lookups-workflow.ts
function UD(e) {
	let t = Gb(), { advancements: n } = Os(t), r = /* @__PURE__ */ N(FD()), i = /* @__PURE__ */ N(FD()), a = /* @__PURE__ */ N(""), o = /* @__PURE__ */ N(""), s = K(() => ID(n.value)), c = K(() => LD(n.value)), l = K(() => [a.value, o.value].filter(Boolean).join(" ")), u = K(() => l.value ? "degraded" : r.value.inFlightNames.length + i.value.inFlightNames.length > 0 ? "loading" : "ready");
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
		let i = RD(n, r.value);
		if (i.length) {
			r.value = zD(r.value, i), a.value = "";
			try {
				let n = await e.listSkillCharacteristics(i);
				r.value = BD(r.value, i), t.hydrateSkillCharacteristics(n);
			} catch (e) {
				r.value = VD(r.value, i), a.value = WD("skill characteristics", e);
			}
		}
	}
	async function f(n) {
		if (!n.length) {
			o.value = "";
			return;
		}
		let r = RD(n, i.value);
		if (r.length) {
			i.value = zD(i.value, r), o.value = "";
			try {
				let n = await e.listTalentMaximums(r);
				i.value = BD(i.value, r), t.hydrateTalentMaximums(n);
			} catch (e) {
				i.value = VD(i.value, r), o.value = WD("Talent maximums", e);
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
function WD(e, t) {
	return `Could not load ${e}.${t instanceof Error ? ` ${t.message}` : ""}`;
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderMetadataLookups.ts
function GD(e) {
	return UD(e);
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp.vue?vue&type=script&setup=true&lang.ts
var KD = ["aria-labelledby"], qD = { class: "dui-card-body" }, JD = ["id"], YD = { class: "dui-card-actions" }, XD = {
	"aria-label": "NPC Builder sections",
	class: "dui-tabs dui-tabs-border",
	role: "tablist"
}, ZD = [
	"id",
	"aria-controls",
	"aria-selected",
	"onClick"
], QD = ["disabled"], $D = ["id", "aria-labelledby"], eO = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, tO = {
	key: 1,
	"aria-live": "polite",
	class: "dui-alert dui-alert-info",
	role: "status"
}, nO = {
	key: 2,
	"aria-live": "polite",
	class: "dui-alert dui-alert-warning",
	role: "status"
}, rO = /* @__PURE__ */ I({
	__name: "NpcBuilderApp",
	props: { bridge: {} },
	setup(e) {
		let t = e, { hasMagicAccess: n, selectedSpells: r } = Os(Gb()), i = /* @__PURE__ */ N("builder"), a = er(), o = [
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
		}), { buildMessage: c, chooseSkillSpecialization: l, confirmLowerCareerPrompt: u, confirmSkillResolutionPrompt: d, dismissLowerCareerPrompt: f, dismissSkillResolutionPrompt: p, errorMessage: m, getSkillResolutionLabel: h, handleCareerDrop: g, isCareerQueued: _, isFindingLowerCareers: v, isLowerCareerSelected: y, lowerCareerCandidateGroups: b, pendingLowerCareerPrompt: x, pendingSkillResolutionPrompt: S, setLowerCareerSelected: C, usesFreeformSkillSpecialization: w } = ND(t.bridge), { buildNpc: T, canBuild: E } = _D(t.bridge, i, c, m, v), { isLoadingActors: ee, isLoadingBaseDraft: te, traitDifficultyOptions: ne } = PD(t.bridge, m), { metadataLookupError: re, metadataLookupStatus: ie, retryMetadataLookups: ae } = GD(t.bridge);
		return (e, n) => (z(), B("section", {
			"aria-labelledby": `${P(a)}-heading`,
			class: "dui-card dui-card-border dui-card-sm"
		}, [
			H("header", qD, [H("div", null, [n[2] ||= H("span", { class: "dui-badge dui-badge-outline" }, "WFRP4e Customizer", -1), H("h1", {
				id: `${P(a)}-heading`,
				class: "dui-card-title"
			}, "NPC Builder", 8, JD)]), H("div", YD, [H("nav", XD, [(z(!0), B(R, null, L(s.value, (e) => (z(), B("button", {
				id: `${P(a)}-${e.id}-tab`,
				key: e.id,
				"aria-controls": `${P(a)}-panel`,
				"aria-selected": i.value === e.id,
				class: O(["dui-tab", { "dui-tab-active": i.value === e.id }]),
				role: "tab",
				type: "button",
				onClick: (t) => i.value = e.id
			}, k(e.label), 11, ZD))), 128))]), H("button", {
				class: "dui-btn dui-btn-primary",
				disabled: !P(E),
				type: "button",
				onClick: n[0] ||= (...e) => P(T) && P(T)(...e)
			}, " Build NPC ", 8, QD)])]),
			U(ex, {
				open: P(x) !== null,
				title: "Add Lower-Tier Careers?",
				onClose: P(f)
			}, {
				default: F(() => [P(x) ? (z(), V(Yb, {
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
			U(ex, {
				open: P(S) !== null,
				title: "Resolve Skill Specializations",
				onClose: P(p)
			}, {
				default: F(() => [P(S) ? (z(), V(hD, {
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
				P(m) ? (z(), B("p", eO, k(P(m)), 1)) : P(c) ? (z(), B("p", tO, k(P(c)), 1)) : G("", !0),
				P(ie) === "degraded" ? (z(), B("div", nO, [
					H("span", null, k(P(re)), 1),
					n[3] ||= H("span", null, "Advancement rows remain editable with reduced metadata.", -1),
					H("button", {
						class: "dui-btn dui-btn-sm",
						type: "button",
						onClick: n[1] ||= (...e) => P(ae) && P(ae)(...e)
					}, " Retry Metadata ")
				])) : G("", !0),
				i.value === "settings" ? (z(), V(ET, {
					key: 3,
					bridge: t.bridge
				}, null, 8, ["bridge"])) : i.value === "advancements" ? (z(), V(cS, { key: 4 })) : i.value === "trappings" ? (z(), V(nD, {
					key: 5,
					bridge: t.bridge
				}, null, 8, ["bridge"])) : i.value === "traits" ? (z(), V(EE, {
					key: 6,
					bridge: t.bridge,
					"difficulty-options": P(ne)
				}, null, 8, ["bridge", "difficulty-options"])) : i.value === "spells" ? (z(), V(lE, {
					key: 7,
					bridge: t.bridge
				}, null, 8, ["bridge"])) : (z(), V(Tw, {
					key: 8,
					bridge: t.bridge,
					"is-loading-actors": P(ee),
					"is-loading-base-draft": P(te),
					onCareerDrop: P(g)
				}, null, 8, [
					"bridge",
					"is-loading-actors",
					"is-loading-base-draft",
					"onCareerDrop"
				]))
			], 8, $D)
		], 8, KD));
	}
});
//#endregion
//#region src/functions/npc-builder/extract-career-grants.ts
function iO(e) {
	return {
		characteristics: aO(e),
		skills: oO(e),
		talents: cO(e, [["talents", "value"], ["talents"]]),
		trappings: cO(e, [["trappings", "value"], ["trappings"]])
	};
}
function aO(e) {
	let t = cO(e, [["characteristics", "value"], ["characteristics"]]);
	if (t.length) return t.map(sO);
	let n = X(e, ["characteristics"]);
	if (!Y(n)) return [];
	let r = [];
	for (let [e, t] of Object.entries(n)) t && r.push(sO(e));
	return uO(r);
}
function oO(e) {
	return cO(e, [["skills", "value"], ["skills"]], { preserveDuplicates: !0 });
}
function sO(e) {
	let t = e.trim().toLocaleLowerCase();
	if (Ys(t)) return qs[t];
	let n = Js[t];
	return n ? qs[n] : e.trim();
}
function cO(e, t, n = {}) {
	for (let r of t) {
		let t = Jc(X(e, r));
		if (t.length) return n.preserveDuplicates ? lO(t) : uO(t);
	}
	return [];
}
function lO(e) {
	return e.map((e) => e.trim()).filter(Boolean);
}
function uO(e) {
	return [...new Set(lO(e))].sort((e, t) => e.localeCompare(t));
}
//#endregion
//#region src/module/foundry/compendiums.ts
function dO(e, t) {
	return t.uuid ? t.uuid : t._id && e.getUuid ? e.getUuid(t._id) : "";
}
function fO(e) {
	return e.documentName === "Item" || Z(e, ["metadata", "type"]) === "Item" || Z(e, ["metadata", "documentName"]) === "Item";
}
function pO(e) {
	return Array.isArray(e) ? e.filter(hO) : Y(e) && Array.isArray(e.contents) ? e.contents.filter(hO) : gO(e) ? [...e].flatMap((e) => {
		let t = Array.isArray(e) ? e[1] : e;
		return hO(t) ? [t] : [];
	}) : [];
}
function mO() {
	return new Promise((e) => {
		globalThis.setTimeout(e, 0);
	});
}
function hO(e) {
	return Y(e);
}
function gO(e) {
	return Y(e) && Symbol.iterator in e;
}
//#endregion
//#region src/module/wfrp4e/career-summary.ts
function _O(e) {
	return {
		careerGroup: vO(e),
		grants: iO(e.system),
		img: e.img ?? "",
		level: yO(e),
		name: e.name,
		uuid: e.uuid
	};
}
function vO(e) {
	return Z(e.system, ["careergroup", "value"]);
}
function yO(e) {
	let t = X(e.system, ["level", "value"]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
//#endregion
//#region src/module/wfrp4e/career-index.ts
var bO = [
	"name",
	"type",
	"img",
	"system.careergroup.value",
	"system.characteristics",
	"system.level.value",
	"system.skills",
	"system.talents",
	"system.trappings"
], xO = /* @__PURE__ */ new Map(), SO = "idle", CO = null;
function wO() {
	return CO || (SO = "indexing", xO.clear(), CO = EO().then(() => {
		SO = "ready";
	}).catch((e) => {
		SO = "error", t("wfrp4e-customizer-apps | Career indexing failed.", e);
	}), CO);
}
async function TO(e) {
	return SO === "idle" && wO(), !e.careerGroup || e.level === null ? [] : [...xO.values()].filter((t) => jO(t, e)).sort(NO);
}
async function EO() {
	DO(), await mO();
	for (let e of game.packs ?? []) {
		if (!fO(e) || !e.getIndex) continue;
		let t = await e.getIndex({ fields: bO });
		for (let n of pO(t)) {
			let t = OO(e, n);
			t && xO.set(t.uuid, t);
		}
		await mO();
	}
}
function DO() {
	for (let e of game.items?.contents ?? []) e.type === "career" && xO.set(e.uuid, _O(e));
}
function OO(e, t) {
	let n = dO(e, t);
	if (t.type !== "career" || !t.name || !n) return null;
	let r = X(t, ["system"]);
	return {
		careerGroup: kO(t),
		grants: iO(r),
		img: t.img ?? "",
		level: AO(t),
		name: t.name,
		uuid: n
	};
}
function kO(e) {
	let t = X(e, [
		"system",
		"careergroup",
		"value"
	]);
	return typeof t == "string" ? t.trim() : "";
}
function AO(e) {
	let t = X(e, [
		"system",
		"level",
		"value"
	]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
function jO(e, t) {
	return e.uuid !== t.uuid && e.level !== null && t.level !== null && e.level < t.level && MO(e.careerGroup) === MO(t.careerGroup);
}
function MO(e) {
	return e.trim().toLocaleLowerCase();
}
function NO(e, t) {
	let n = e.level ?? 0, r = t.level ?? 0;
	return n === r ? e.name.localeCompare(t.name) : n - r;
}
//#endregion
//#region src/module/wfrp4e/skill-specializations.ts
var PO = [
	"name",
	"type",
	"system.characteristic.value"
], FO = /* @__PURE__ */ new Map(), IO = /* @__PURE__ */ new Map(), LO = /* @__PURE__ */ new Map(), RO = "idle", zO = null;
async function BO(e) {
	let t = qv(e);
	return t ? (RO === "idle" && HO(), zO && await zO, [...FO.get(t) ?? []].sort((e, t) => e.localeCompare(t))) : [];
}
async function VO(e) {
	return RO === "idle" && HO(), zO && await zO, e.flatMap((e) => {
		let t = JO(e);
		return t ? [{
			...t,
			skillName: e
		}] : [];
	});
}
function HO() {
	return zO || (RO = "indexing", FO.clear(), IO.clear(), LO.clear(), zO = UO().then(() => {
		RO = "ready";
	}).catch((e) => {
		RO = "error", t("wfrp4e-customizer-apps | Skill specialization indexing failed.", e);
	}), zO);
}
async function UO() {
	YO(), await mO();
	for (let e of game.packs ?? []) {
		if (!fO(e) || !e.getIndex) continue;
		let t = await e.getIndex({ fields: PO });
		for (let e of pO(t)) GO(e);
		await mO();
	}
}
function WO(e) {
	if (e.type !== "skill") return;
	KO(e);
	let t = Wv(e.name);
	if (!t) return;
	let n = qv(t.baseName), r = FO.get(n) ?? /* @__PURE__ */ new Set();
	r.add(t.specialization), FO.set(n, r);
}
function GO(e) {
	if (e.type !== "skill" || !e.name) return;
	qO(e);
	let t = Wv(e.name);
	if (!t) return;
	let n = qv(t.baseName), r = FO.get(n) ?? /* @__PURE__ */ new Set();
	r.add(t.specialization), FO.set(n, r);
}
function KO(e) {
	let t = Z(e.system, ["characteristic", "value"]);
	if (!Ys(t)) return;
	let n = {
		characteristicKey: t,
		characteristicName: qs[t],
		skillName: e.name
	}, r = qv(e.name), i = qv(Wv(e.name)?.baseName ?? e.name);
	IO.set(r, n), LO.has(i) || LO.set(i, n);
}
function qO(e) {
	let t = Z(e, [
		"system",
		"characteristic",
		"value"
	]);
	if (!Ys(t) || !e.name) return;
	let n = {
		characteristicKey: t,
		characteristicName: qs[t],
		skillName: e.name
	}, r = qv(e.name), i = qv(Wv(e.name)?.baseName ?? e.name);
	IO.set(r, n), LO.has(i) || LO.set(i, n);
}
function JO(e) {
	let t = qv(e), n = qv(Wv(e)?.baseName ?? e);
	return IO.get(t) ?? LO.get(n) ?? null;
}
function YO() {
	for (let e of game.items?.contents ?? []) WO(e);
}
//#endregion
//#region src/module/foundry/item-sources.ts
function XO(e, t) {
	return {
		img: "systems/wfrp4e/icons/blank.png",
		name: e,
		system: {},
		type: t
	};
}
function ZO(e, t, n) {
	let r = e ? e.toObject() : XO(t, n);
	return delete r._id, r;
}
function QO(e, t, n) {
	return e.items?.contents.find((e) => e.type === n && tk(e.name, t)) ?? null;
}
function $O(e, t, n) {
	return e.items?.contents.find((e) => t && e.uuid === t ? !0 : tk(e.name, n)) ?? null;
}
function ek(e, t) {
	return game.items?.contents.find((n) => t.includes(n.type) && tk(n.name, e)) ?? null;
}
function tk(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/wfrp4e/item-lookup.ts
async function nk(e, t) {
	return await game.wfrp4e?.utility?.findItem?.(e, t) || ek(e, t);
}
//#endregion
//#region src/module/wfrp4e/talent-maximums.ts
async function rk(e) {
	let t = [];
	for (let n of ik(e)) {
		let e = await nk(n, ["talent"]);
		e && t.push({
			maximumFormula: Z(e.system, ["max", "formula"]),
			maximumKey: Z(e.system, ["max", "value"]),
			talentName: n
		});
	}
	return t;
}
function ik(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.trim().toLocaleLowerCase();
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
//#endregion
//#region src/functions/npc-builder/normalize-npc-builder-settings.ts
var ak = {
	...Wy(),
	allowBaseActorCharacteristics: !0,
	allowBaseActorSkills: !0,
	allowBaseActorTalents: !0
};
function ok(e) {
	let t = Wy();
	return ck(e) ? {
		allowBaseActorCharacteristics: lk(e.allowBaseActorCharacteristics, ak.allowBaseActorCharacteristics),
		allowBaseActorSkills: lk(e.allowBaseActorSkills, ak.allowBaseActorSkills),
		allowBaseActorTalents: lk(e.allowBaseActorTalents, ak.allowBaseActorTalents),
		allowBaseActorTraits: lk(e.allowBaseActorTraits, ak.allowBaseActorTraits),
		allowBaseActorTrappings: lk(e.allowBaseActorTrappings, ak.allowBaseActorTrappings),
		askForLinkedSkillSpecializations: lk(e.askForLinkedSkillSpecializations, ak.askForLinkedSkillSpecializations),
		autoSelectGrantedSpells: lk(e.autoSelectGrantedSpells, ak.autoSelectGrantedSpells),
		baseActorFolderUuid: uk(e.baseActorFolderUuid, ak.baseActorFolderUuid),
		includeSpeciesInName: lk(e.includeSpeciesInName, ak.includeSpeciesInName),
		lowerCareerMode: sk(e.lowerCareerMode) ? e.lowerCareerMode : ak.lowerCareerMode,
		outputActorFolderUuid: uk(e.outputActorFolderUuid, ak.outputActorFolderUuid),
		quickTraitFolderUuid: uk(e.quickTraitFolderUuid, ak.quickTraitFolderUuid),
		searchCompendiumPortraitAssets: lk(e.searchCompendiumPortraitAssets, ak.searchCompendiumPortraitAssets),
		searchFoundryPortraitAssets: lk(e.searchFoundryPortraitAssets, ak.searchFoundryPortraitAssets),
		searchWebPortraitAssets: lk(e.searchWebPortraitAssets, ak.searchWebPortraitAssets)
	} : t;
}
function sk(e) {
	return e === "auto-add-all" || e === "never" || e === "prompt";
}
function ck(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function lk(e, t) {
	return typeof e == "boolean" ? e : t;
}
function uk(e, t) {
	return typeof e == "string" ? e : t;
}
//#endregion
//#region src/module/apps/npc-builder/settings.ts
var dk = H_({
	defaultValue: Wy(),
	key: "npcBuilderSettings",
	name: "NPC Builder Settings",
	normalize: ok
});
function fk() {
	U_(dk);
}
function pk() {
	return W_(dk);
}
async function mk(e) {
	return await G_(dk, e);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/advancements.ts
async function hk(e, t) {
	let n = {}, r = [], i = [];
	for (let a of t) {
		let t = Math.floor(a.current);
		if (t === 0) continue;
		let o = a.baseAdvances + t;
		if (a.kind === "characteristic") {
			xk(n, a, o);
			continue;
		}
		let s = QO(e, a.name, a.kind);
		if (s) {
			r.push({
				_id: s.id,
				"system.advances.value": o
			});
			continue;
		}
		let c = ZO(await nk(a.name, [a.kind]), a.name, a.kind);
		c.type = a.kind, Yc(c, [
			"system",
			"advances",
			"value"
		], o), i.push(c);
	}
	Object.keys(n).length && await e.update(n), r.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", r), i.length && await e.createEmbeddedDocuments("Item", i);
}
function gk(e) {
	let t = [];
	for (let [n, r] of Object.entries(qs)) {
		let i = Gc(e.system, [[
			"characteristics",
			n,
			"advances",
			"value"
		], [
			"characteristics",
			n,
			"advances"
		]]), a = Gc(e.system, [
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
function _k(e, t) {
	return e.items?.contents.filter((e) => e.type === t).map((n) => vk(e, n, t)) ?? [];
}
function vk(e, t, n) {
	let r = Gc(t.system, [["advances", "value"], ["advances"]]);
	if (n === "talent") return {
		baseAdvances: r,
		current: r,
		kind: n,
		name: t.name,
		talentMaximumFormula: Z(t.system, ["max", "formula"]),
		talentMaximumKey: Z(t.system, ["max", "value"])
	};
	let i = yk(t), a = i ? bk(e, i) : 0, o = Kc(t.system, [["total", "value"], ["total"]]), s = o !== null && i ? Math.max(0, o - a) : 0, c = Math.max(r, s), l = {
		baseAdvances: c,
		current: i ? a + c : c,
		kind: n,
		name: t.name
	};
	return i && (l.characteristicKey = i, l.characteristicName = qs[i]), l;
}
function yk(e) {
	let t = Z(e.system, ["characteristic", "value"]);
	return Ys(t) ? t : void 0;
}
function bk(e, t) {
	return Gc(e.system, [
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
function xk(e, t, n) {
	let r = Js[t.name.trim().toLocaleLowerCase()];
	r && (e[`system.characteristics.${r}.advances`] = n);
}
//#endregion
//#region src/module/foundry/embedded-items.ts
function Sk() {
	return {
		creates: [],
		deletes: [],
		updates: []
	};
}
async function Ck(e, t) {
	t.deletes.length && e.deleteEmbeddedDocuments && await e.deleteEmbeddedDocuments("Item", t.deletes), t.updates.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", t.updates), t.creates.length && await e.createEmbeddedDocuments("Item", t.creates);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/config.ts
function wk(e, t) {
	Yc(e, [
		"system",
		"specification",
		"value"
	], t.specification), t.rollable && !t.damage && Yc(e, [
		"system",
		"rollable",
		"defaultDifficulty"
	], t.defaultDifficulty), t.damage && t.dice && Yc(e, [
		"system",
		"rollable",
		"dice"
	], t.dice);
}
function Tk(e, t) {
	return {
		_id: e,
		"system.specification.value": t.specification,
		...t.rollable && !t.damage ? { "system.rollable.defaultDifficulty": t.defaultDifficulty } : {},
		...t.damage && t.dice ? { "system.rollable.dice": t.dice } : {}
	};
}
function Ek(e) {
	return {
		...jv(),
		attackType: Ak(e.system, ["rollable", "attackType"]) || "melee",
		bonusCharacteristic: Ak(e.system, ["rollable", "bonusCharacteristic"]),
		damage: qc(e.system, [["rollable", "damage"]]),
		defaultDifficulty: Ak(e.system, ["rollable", "defaultDifficulty"]) || "challenging",
		dice: Ak(e.system, ["rollable", "dice"]),
		rollable: qc(e.system, [["rollable", "value"]]),
		skill: Ak(e.system, ["rollable", "skill"]),
		sl: qc(e.system, [["rollable", "SL"]], !0),
		specification: Ak(e.system, ["specification", "value"])
	};
}
function Dk(e) {
	return kk(e.system);
}
function Ok(e) {
	return kk(e.system);
}
function kk(e) {
	return qc(e, [["disabled"], ["disabled", "value"]]);
}
function Ak(e, t) {
	let n = X(e, t);
	return typeof n == "string" ? n.trim() : typeof n == "number" ? String(n) : "";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/apply.ts
async function jk(e, t) {
	let n = Sk();
	for (let r of t) {
		let t = r.source === "base" ? $O(e, r.sourceUuid, r.name) : QO(e, r.name, "trait");
		if (r.ignored) {
			t && n.deletes.push(t.id);
			continue;
		}
		if (t) {
			n.updates.push(Tk(t.id, r.config));
			continue;
		}
		let i = ZO(r.sourceUuid ? await Mk(r.sourceUuid) : await nk(r.name, ["trait"]), r.name, "trait");
		i.type = "trait", Yc(i, ["system", "disabled"], !1), wk(i, r.config), n.creates.push(i);
	}
	await Ck(e, n);
}
async function Mk(e) {
	let t = await fromUuid(e);
	return iv(t) ? t : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/actor-traits.ts
function Nk(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && !Dk(e)).map(Ik) ?? [];
}
function Pk(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && Dk(e)).map(Ik) ?? [];
}
function Fk(e) {
	Array.isArray(e.items) && (e.items = e.items.filter((e) => {
		if (typeof e != "object" || !e) return !0;
		let t = e;
		return t.type !== "trait" || !Ok(t);
	}));
}
function Ik(e) {
	return {
		config: Ek(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/difficulty-options.ts
var Lk = [
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
async function Rk() {
	let e = X(game.wfrp4e?.config, ["difficultyLabels"]);
	if (!Y(e)) return Lk;
	let t = Object.entries(e).filter((e) => {
		let [t, n] = e;
		return !!t.trim() && typeof n == "string";
	}).map(([e, t]) => ({
		label: t,
		value: e
	}));
	return t.length ? t : Lk;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/drops.ts
async function zk(e) {
	let t = cv(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Trait item here.");
	let n = sv(await fromUuid(t.uuid), "trait", "Drop a Foundry Trait item here.");
	return {
		config: Ek(n),
		ignored: !1,
		key: `custom:${n.uuid}`,
		name: n.name,
		source: "custom",
		sourceUuid: n.uuid
	};
}
//#endregion
//#region src/functions/npc-builder/recommended-quick-traits.ts
var Bk = [
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
async function Vk(e) {
	return Jk(await qk(e, "Actor"));
}
async function Hk(e) {
	return Jk(await qk(e, "Item"));
}
function Uk() {
	return game.folders.contents.filter((e) => e.type === "Actor").map(Jk).sort((e, t) => e.name.localeCompare(t.name));
}
function Wk() {
	return game.folders.contents.filter((e) => e.type === "Item").map(Jk).sort((e, t) => e.name.localeCompare(t.name));
}
function Gk(e) {
	return e ? game.folders.contents.find((t) => t.uuid === e) ?? null : null;
}
function Kk(e) {
	let t = Gk(e);
	return t?.type === "Item" ? t : null;
}
async function qk(e, t) {
	let n = e.trim();
	if (!n) throw Error("Enter a folder name first.");
	let r = game.folders.contents.find((e) => e.type === t && Yk(e.name, n));
	if (r) return r;
	let i = await Folder.create({
		name: n,
		type: t
	});
	if (!i) throw Error("Foundry did not create the folder.");
	return i;
}
function Jk(e) {
	return {
		name: e.name,
		uuid: e.uuid
	};
}
function Yk(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/quick-traits.ts
async function Xk(e) {
	let t = Kk(e.quickTraitFolderUuid);
	if (!t) throw Error("Choose a Quick Traits item folder before importing traits.");
	let n = new Set($k(e).map((e) => e.name.trim().toLocaleLowerCase()));
	for (let e of Bk) {
		if (n.has(e.trim().toLocaleLowerCase())) continue;
		let r = ZO(await nk(e, ["trait"]), e, "trait");
		r.folder = t.id, r.type = "trait", await Item.create(r);
	}
	return ui.notifications?.info("Imported recommended quick traits."), await Zk(e);
}
async function Zk(e) {
	return $k(e).map(eA).sort((e, t) => e.name.localeCompare(t.name));
}
function Qk(e, t) {
	return t.quickTraitFolderUuid ? e.folder?.uuid === t.quickTraitFolderUuid : !1;
}
function $k(e) {
	return game.items?.contents.filter((t) => t.type === "trait" && Qk(t, e)) ?? [];
}
function eA(e) {
	return {
		config: Ek(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/trappings.ts
var tA = [
	"ammunition",
	"armour",
	"container",
	"money",
	"trapping",
	"weapon"
];
async function nA(e, t) {
	let n = Sk();
	for (let r of t) {
		let t = r.source === "base" ? $O(e, r.sourceUuid, r.name) : null;
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
		let i = await cA(r), a = r.resolution.selectedItemType || r.itemType || "trapping", o = ZO(i, r.resolution.selectedName || r.name, a);
		o.type = a || o.type || "trapping", Yc(o, [
			"system",
			"quantity",
			"value"
		], r.quantity), n.creates.push(o);
	}
	await Ck(e, n);
}
async function rA(e) {
	return Db(e, await lA());
}
async function iA(e) {
	let t = cv(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Item here.");
	let n = ov(await fromUuid(t.uuid), "Drop a Foundry Item here.");
	return {
		ignored: !1,
		itemType: n.type,
		key: `custom:${n.uuid}`,
		name: n.name,
		quantity: oA(n),
		resolution: Tb({
			itemType: n.type,
			name: n.name,
			uuid: n.uuid
		}),
		source: "custom",
		sourceUuid: n.uuid
	};
}
function aA(e) {
	let t = sA();
	return e.items?.contents.filter((e) => t.includes(e.type)).map((e) => ({
		itemType: e.type,
		name: e.name,
		quantity: oA(e),
		uuid: e.uuid
	})) ?? [];
}
function oA(e) {
	return Gc(e.system, [["quantity", "value"], ["quantity"]]) || 1;
}
function sA() {
	let e = Wc(game.wfrp4e?.config, ["trappingItems"]);
	return e.length ? e : tA;
}
async function cA(e) {
	if (e.sourceUuid) {
		let t = await fromUuid(e.sourceUuid);
		return iv(t) ? t : null;
	}
	if (e.resolution.selectedCandidateUuid) {
		let t = await fromUuid(e.resolution.selectedCandidateUuid);
		return iv(t) ? t : null;
	}
	return e.resolution.status === "fallback" ? null : await nk(e.resolution.selectedName || e.name, sA());
}
async function lA() {
	let e = [], t = sA();
	for (let n of game.items?.contents ?? []) t.includes(n.type) && e.push(dA(n, "World"));
	for (let n of game.packs ?? []) {
		if (!fO(n)) continue;
		let r = await uA(n, t);
		if (r.length) {
			e.push(...r);
			continue;
		}
		if (!n.getDocuments) continue;
		let i = await n.getDocuments();
		for (let r of i) iv(r) && t.includes(r.type) && e.push(dA(r, n.title ?? "Compendium"));
	}
	return e;
}
async function uA(e, t) {
	return e.getIndex ? pO(await e.getIndex({ fields: ["name", "type"] })).filter((n) => !!(n.name && n.type && dO(e, n) && t.includes(n.type))).map((t) => ({
		itemType: t.type ?? "trapping",
		name: t.name ?? "",
		sourceLabel: e.title ?? "Compendium",
		uuid: dO(e, t)
	})) : [];
}
function dA(e, t) {
	return {
		itemType: e.type,
		name: e.name,
		sourceLabel: t,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/actors.ts
function fA(e) {
	return game.actors.contents.filter((t) => vA(t, e)).map(hA);
}
async function pA(e) {
	let t = av(await fromUuid(e));
	return {
		advancements: [
			...gk(t),
			..._k(t, "skill"),
			..._k(t, "talent")
		],
		optionalTraits: Pk(t),
		traits: Nk(t),
		trappings: aA(t)
	};
}
async function mA(e) {
	let t = cv(e);
	if (t.type !== "Actor") throw Error("Drop a Foundry Actor here.");
	let n = null;
	return t.uuid ? n = await fromUuid(t.uuid) : t.id && (n = game.actors.get(t.id)), hA(av(n));
}
function hA(e) {
	return {
		img: e.img ?? "",
		name: e.name,
		prototypeTokenImg: _A(e),
		species: gA(e),
		type: e.type,
		uuid: e.uuid
	};
}
function gA(e) {
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
function _A(e) {
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
function vA(e, t) {
	return t.baseActorFolderUuid ? e.folder?.uuid === t.baseActorFolderUuid : !0;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/constants.ts
var yA = "spell", bA = new Set(Jy), xA = new Set(Yy);
async function SA() {
	return CA().map((e) => ({
		category: eb(e.key),
		key: e.key,
		label: e.name,
		value: e.name,
		wind: e.wind
	})).sort((e, t) => e.category === t.category ? e.label.localeCompare(t.label) : e.category.localeCompare(t.category));
}
function CA() {
	let e = X(game.wfrp4e?.config, ["magicLores"]), t = X(game.wfrp4e?.config, ["magicWind"]), n = [];
	if (!Y(e)) return [DA()];
	for (let [r, i] of Object.entries(e)) {
		let e = PA(i) || r, a = NA(t, r);
		n.push({
			key: r,
			matchTerms: MA(r, e, a),
			name: e,
			wind: a
		});
	}
	return n.some((e) => e.key === "petty") || n.push(DA()), n;
}
function wA(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) {
		if (r.isAmbiguous) continue;
		if (r.kind === "petty-magic") {
			let e = jA("petty magic", t);
			e && n.set(e.key, e);
			continue;
		}
		let e = jA(r.rawLore, t);
		e && n.set(e.key, e);
	}
	return [...n.values()];
}
function TA(e, t) {
	let n = [...EA(e.system), AA(e.name)].filter(Boolean);
	for (let e of n) {
		let n = kA(e, t);
		if (n) return n;
		let r = jA(e, t);
		if (r) return r;
	}
	return null;
}
function EA(e) {
	return [
		...Jc(X(e, ["lore", "value"])),
		...Jc(X(e, ["lore"])),
		...Jc(X(e, ["magicLore", "value"])),
		...Jc(X(e, ["magicLore"])),
		...Jc(X(e, ["category", "value"])),
		...Jc(X(e, [
			"system",
			"lore",
			"value"
		])),
		...Jc(X(e, ["system", "lore"])),
		...Jc(X(e, ["system.lore.value"])),
		...Jc(X(e, ["system.lore"]))
	];
}
function DA() {
	return {
		key: "petty",
		matchTerms: ["petty", "petty magic"],
		name: "Petty Magic",
		wind: ""
	};
}
function OA(e) {
	let t = e.trim() || "Unknown Lore";
	return {
		key: Zy(t) || "unknown",
		matchTerms: [t],
		name: t,
		wind: ""
	};
}
function kA(e, t) {
	let n = Zy(e);
	return n === "lore" ? t.find((e) => e.key !== "petty") ?? null : n === "the eight winds" || n === "eight winds" ? t.find((e) => bA.has(e.key)) ?? null : n === "dark lore" ? t.find((e) => xA.has(e.key)) ?? null : null;
}
function AA(e) {
	return /\(([^)]+)\)\s*$/.exec(e)?.[1]?.trim() ?? "";
}
function jA(e, t) {
	let n = Zy(e);
	return n ? t.find((e) => e.matchTerms.some((e) => Zy(e) === n)) ?? null : null;
}
function MA(e, t, n) {
	let r = /* @__PURE__ */ new Set(), i = Zy(e), a = Zy(t);
	for (let i of [
		e,
		t,
		n
	]) i.trim() && r.add(i.trim());
	return (i === "petty" || a === "petty") && r.add("Petty Magic"), (i === "shadow" || a === "shadow") && r.add("Shadows"), t && !/^lore of /i.test(t) && r.add(`Lore of ${t}`), [...r];
}
function NA(e, t) {
	return Y(e) ? PA(e[t]) : "";
}
function PA(e) {
	return typeof e == "string" ? e.trim() : Y(e) ? Z(e, ["name"]) || Z(e, ["label"]) || Z(e, ["value"]) : "";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/debug.ts
var FA = "[WFRP Customizer Apps][Spell Lookup]";
function IA(t, n) {
	if (n) {
		e(`${FA} ${t}`, n);
		return;
	}
	e(`${FA} ${t}`);
}
function LA(e, n) {
	t(`${FA} ${e}`, n);
}
function RA(e) {
	return [
		e.title ?? "",
		e.collection ?? "",
		Z(e, ["metadata", "type"]),
		Z(e, ["metadata", "documentName"]),
		e.documentName
	].filter(Boolean).join(" | ");
}
function zA(e) {
	return {
		loreTerms: EA(e.system),
		name: e.name,
		sourceLabel: e.sourceLabel,
		uuid: e.uuid
	};
}
function BA(e) {
	return typeof e == "string" ? {
		kind: "uuid-string",
		value: e
	} : Y(e) ? {
		documentName: Z(e, ["documentName"]),
		hasSystem: Y(X(e, ["system"])),
		loreTerms: EA(X(e, ["system"])),
		name: Z(e, ["name"]),
		type: Z(e, ["type"]),
		uuid: Z(e, ["uuid"])
	} : { kind: typeof e };
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/spell-input-conversion.ts
function VA(e, t) {
	return {
		img: e.img ?? "",
		name: e.name,
		sourceLabel: t,
		system: e.system,
		uuid: e.uuid
	};
}
function HA(e) {
	return /^item\./i.test(e.uuid) ? "World" : UA(e.uuid, "WFRP Item Lookup");
}
function UA(e, t) {
	let n = /^Compendium\.([^.]+\.[^.]+)\./.exec(e)?.[1];
	return n ? [...game.packs ?? []].find((e) => e.collection === n)?.title ?? n : t;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/compendium-spell-inputs.ts
async function WA(e) {
	if (IA("Compendium index scan start", { pack: RA(e) }), !e.getIndex) return IA("Compendium has no index; loading documents", { pack: RA(e) }), await qA(e);
	let t = pO(await e.getIndex({ fields: [
		"name",
		"type",
		"img",
		"system.lore.value"
	] }));
	if (IA("Compendium index loaded", {
		entries: t.length,
		pack: RA(e),
		samples: t.slice(0, 5).map((t) => ({
			hasLoreTerms: EA(t).length > 0,
			name: t.name,
			type: t.type,
			uuid: dO(e, t)
		}))
	}), !t.length) return IA("Compendium index empty; loading documents", { pack: RA(e) }), await qA(e);
	let n = t.filter(KA);
	IA("Compendium index spell candidates", {
		pack: RA(e),
		spellEntries: n.length
	});
	let r = n.filter((e) => e.name).map((t) => YA(e, t));
	return r.length || !JA(e) ? r : await qA(e);
}
function GA(e) {
	return fO(e);
}
function KA(e) {
	return e.type === "spell" ? !0 : !!(e.name && (EA(e).length || AA(e.name)));
}
async function qA(e) {
	if (!e.getDocuments) return IA("Compendium has no document loader", { pack: RA(e) }), [];
	IA("Compendium document load start", { pack: RA(e) });
	let t = await e.getDocuments(), n = t.filter((e) => iv(e) && e.type === "spell");
	return IA("Compendium document load complete", {
		documents: t.length,
		pack: RA(e),
		spellDocuments: n.length,
		spellSamples: n.slice(0, 5).map((e) => ({
			loreTerms: EA(e.system),
			name: e.name,
			uuid: e.uuid
		}))
	}), n.map((t) => VA(t, e.title ?? "Compendium"));
}
function JA(e) {
	return e.collection === "wfrp4e-core.items" || e.collection === "wfrp4e-wom.items";
}
function YA(e, t) {
	return {
		img: t.img ?? t.thumb ?? "",
		name: t.name ?? "",
		sourceLabel: e.title ?? "Compendium",
		system: t,
		uuid: dO(e, t)
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/warhammer-spell-inputs.ts
async function XA() {
	let e = QA();
	if (!e) return IA("WFRP helper unavailable"), [];
	try {
		let t = await e.findAllItems(yA, "Loading Spells", !0, ["system.lore.value"]);
		return IA("WFRP helper raw result", {
			count: t.length,
			samples: t.slice(0, 10).map(BA)
		}), (await Promise.all(t.map((e) => ZA(e)))).filter((e) => e !== null);
	} catch (e) {
		return LA("WFRP helper lookup failed.", e), [];
	}
}
async function ZA(e) {
	if (typeof e == "string") {
		let t = await fromUuid(e);
		return iv(t) && t.type === "spell" ? VA(t, HA(t)) : null;
	}
	if (iv(e)) return e.type === "spell" ? VA(e, HA(e)) : null;
	if (Z(e, ["type"]) !== "spell") return null;
	let t = Z(e, ["name"]);
	return t ? {
		img: Z(e, ["img"]) || Z(e, ["thumb"]),
		name: t,
		sourceLabel: UA(Z(e, ["uuid"]), "WFRP Item Lookup"),
		system: X(e, ["system"]),
		uuid: Z(e, ["uuid"])
	} : null;
}
function QA() {
	let e = X(globalThis, [
		"warhammer",
		"utility",
		"findAllItems"
	]);
	return typeof e == "function" ? { findAllItems: e } : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/spell-resolution-inputs.ts
async function $A() {
	let e = [], n = [...game.packs ?? []];
	IA("Candidate lookup start", {
		itemPacks: n.filter(GA).length,
		totalPacks: n.length,
		warhammerUtilityAvailable: !!nj(),
		worldItems: game.items?.contents.length ?? 0
	});
	let r = await XA();
	IA("WFRP helper lookup complete", {
		utilityInputs: r.length,
		utilitySamples: r.slice(0, 10).map(zA)
	}), e.push(...r), e.push(...ej()), IA("World spell scan complete", { worldSpellCount: e.filter((e) => e.sourceLabel === "World").length });
	for (let r of n) if (GA(r)) try {
		let t = await WA(r);
		e.push(...t), IA("Compendium spell scan complete", {
			inputCount: t.length,
			pack: RA(r),
			samples: t.slice(0, 5).map(zA)
		});
	} catch (e) {
		t(`wfrp4e-customizer-apps | Spell lookup skipped compendium "${r.title ?? r.collection ?? "unknown"}".`, e);
	}
	let i = tj(e);
	return IA("Candidate lookup complete", {
		rawInputCount: e.length,
		uniqueInputCount: i.length
	}), i;
}
function ej() {
	let e = [];
	for (let t of game.items?.contents ?? []) t.type === "spell" && e.push(VA(t, "World"));
	return e;
}
function tj(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.uuid || n.name.trim().toLocaleLowerCase();
		t.has(e) || t.set(e, n);
	}
	return [...t.values()];
}
function nj() {
	return X(globalThis, [
		"warhammer",
		"utility",
		"findAllItems"
	]);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/index.ts
async function rj(e, t) {
	let n = [];
	for (let r of t) {
		if (!r.selected || QO(e, r.name, "spell")) continue;
		let t = ZO(r.sourceUuid ? await oj(r.sourceUuid) : null, r.name, yA);
		t.type = yA, n.push(t);
	}
	n.length && await e.createEmbeddedDocuments("Item", n);
}
async function ij(e) {
	let t = wA(e, CA());
	if (IA("Grant resolution start", {
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
	let n = await $A(), r = /* @__PURE__ */ new Map(), i = [];
	for (let e of n) {
		let n = TA(e, t);
		if (!n) {
			i.length < 20 && i.push({
				loreTerms: EA(e.system),
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
	return IA("Grant resolution complete", {
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
async function aj(e) {
	let t = cv(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Spell item here.");
	let n = sv(await fromUuid(t.uuid), yA, "Drop a Foundry Spell item here."), r = TA(VA(n, "Dropped"), [...CA(), DA()]) ?? OA(EA(n.system)[0] ?? "");
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
async function oj(e) {
	let t = await fromUuid(e);
	return iv(t) && t.type === "spell" ? t : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/build-npc.ts
async function sj(e) {
	let t = await uj(e);
	if (!t) throw Error("Foundry did not create the NPC Actor.");
	let n = dj(e), r = e.careers.at(-1), i = ky(e.advancements), a = {
		name: n,
		"prototypeToken.name": n,
		"system.details.gmnotes.value": cj(Z(t.system, [
			"details",
			"gmnotes",
			"value"
		]), i)
	}, o = e.portraitPath || r?.img || "";
	return o && (a.img = o, a["prototypeToken.texture.src"] = o), await t.update(a), await hk(t, e.advancements), await jk(t, e.traits), await nA(t, e.trappings), await rj(t, e.spells), t.sheet?.render(!0), ui.notifications?.info(`Created NPC "${n}".`), {
		name: n,
		uuid: t.uuid
	};
}
function cj(e, t) {
	let n = lj(e).trim(), r = [
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
function lj(e) {
	return e.replaceAll(/<section data-wfrp-customizer-npc-xp="true">[\S\s]*?<\/section>/g, "");
}
async function uj(e) {
	let t = av(await fromUuid(e.baseActorUuid)).toObject(), n = Gk(e.settings.outputActorFolderUuid);
	return delete t._id, delete t.folder, t.type = "npc", Fk(t), n && (t.folder = n.id), await Actor.create(t);
}
function dj(e) {
	if (!e.settings.includeSpeciesInName) return e.actorName;
	let t = game.actors.contents.find((t) => t.uuid === e.baseActorUuid), n = t ? gA(t) : "";
	return !n || e.actorName.toLocaleLowerCase().includes(n.toLocaleLowerCase()) ? e.actorName : `${n} ${e.actorName}`;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/careers.ts
async function fj(e) {
	let t = cv(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a WFRP Career item here.");
	return _O(sv(await fromUuid(t.uuid), "career", "Drop a WFRP Career item here."));
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/candidate-utils.ts
function pj(e, t) {
	let n = t.img.trim().toLocaleLowerCase();
	!n || e.seenPaths.has(n) || (e.seenPaths.add(n), e.candidates.push(t));
}
function mj(e, t) {
	let n = t.imagePaths.filter(({ path: e }) => !!e);
	if (xj(t.name, n, e.searchTerms)) for (let r of n) pj(e, {
		img: r.path,
		key: `foundry-asset:${t.sourceKey}:${r.label}`,
		label: `${t.name || vj(r.path)} ${r.label} (${t.sourceLabel})`,
		source: "foundry-asset"
	});
}
function hj(e, t, n) {
	e?.({
		candidatesFound: t.candidates.length,
		currentLocation: n.currentLocation,
		directoriesVisited: t.visitedDirectories,
		maxDirectories: n.maxDirectories,
		phase: n.phase
	});
}
function gj(e) {
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
function _j(e, t) {
	return `${vj(e)} (${t})`;
}
function vj(e) {
	return e.split(/[/\\]/).at(-1) ?? e;
}
function yj(e) {
	return typeof e == "object" && !!e;
}
function bj(e) {
	return yj(e) && Object.values(e).every((e) => Array.isArray(e) && e.every((e) => typeof e == "string"));
}
function xj(e, t, n) {
	return fw(e, n) || t.some(({ path: e }) => fw(e, n));
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/dig-down.ts
var Sj = "fuzzy-foundry", Cj = .3, wj = new Set([
	".webp",
	".png",
	".jpg",
	".jpeg",
	".gif"
]);
function Tj(e, t) {
	let n = Ej();
	if (hj(t, e, {
		currentLocation: Oj(n),
		maxDirectories: 0,
		phase: "filesystem"
	}), !n.digDownActive || !n.digDownCacheReady) return;
	let r = jj();
	if (!(!r?._fileIndexCache || !r.fs)) {
		for (let t of kj(r, e.searchTerms)) Aj(e, r, t);
		hj(t, e, {
			currentLocation: "Dig Down file cache search complete",
			maxDirectories: 0,
			phase: "filesystem"
		});
	}
}
function Ej() {
	let e = game.modules.get(Sj)?.active === !0, t = Dj(), n = jj(), r = Object.values(n?._fileIndexCache ?? {}).reduce((e, t) => e + t.length, 0);
	return {
		digDownActive: e,
		digDownCacheReady: !!(n?._fileIndexCache && n.fs),
		digDownDeepFileSearchEnabled: t,
		digDownIndexedFileCount: r
	};
}
function Dj() {
	try {
		return game.settings.get(Sj, "deepFile") === !0;
	} catch {
		return !1;
	}
}
function Oj(e) {
	return e.digDownActive ? e.digDownDeepFileSearchEnabled ? e.digDownCacheReady ? `Dig Down file cache (${e.digDownIndexedFileCount} files)` : "Waiting for Dig Down file cache" : "Dig Down Deep File Search is disabled" : "Dig Down is not active";
}
function kj(e, t) {
	let n = /* @__PURE__ */ new Set(), r = Object.keys(e._fileIndexCache ?? {});
	for (let i of t) {
		let t = i.toLocaleLowerCase();
		for (let e of r) e.toLocaleLowerCase().includes(t) && n.add(e);
		let a = e.fs?.get(i, [], Cj) ?? [];
		for (let [, e] of a) n.add(e);
	}
	return [...n].sort((e, t) => e.toLocaleLowerCase().localeCompare(t.toLocaleLowerCase()));
}
function Aj(e, t, n) {
	let r = t._fileIndexCache?.[n] ?? [];
	for (let t of r) Mj(t) && pj(e, {
		img: t,
		key: `foundry-asset:${t}`,
		label: _j(t, "Dig Down"),
		source: "foundry-asset"
	});
}
function jj() {
	let e = canvas.deepSearchCache;
	if (!yj(e)) return null;
	let t = e._fileIndexCache, n = e.fs, r = {};
	return bj(t) && (r._fileIndexCache = t), yj(n) && typeof n.get == "function" && (r.fs = { get: n.get.bind(n) }), r;
}
function Mj(e) {
	let t = `.${e.split(/[#?]/)[0]?.split(".").pop() ?? ""}`;
	return wj.has(t.toLocaleLowerCase());
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/documents.ts
function Nj(e, t) {
	hj(t, e, {
		currentLocation: "World Actors and Items",
		maxDirectories: 0,
		phase: "world-documents"
	});
	for (let t of game.actors.contents) mj(e, {
		imagePaths: [{
			label: "actor image",
			path: t.img ?? ""
		}, {
			label: "token image",
			path: gj(t)
		}],
		name: t.name,
		sourceLabel: "World Actors",
		sourceKey: t.uuid
	});
	for (let t of game.items?.contents ?? []) mj(e, {
		imagePaths: [{
			label: "item image",
			path: t.img ?? ""
		}],
		name: t.name,
		sourceLabel: "World Items",
		sourceKey: t.uuid
	});
}
async function Pj(e, t) {
	hj(t, e, {
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
		] }).catch(() => void 0), r = n ? pO(n) : [];
		for (let n of r) mj(e, {
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
async function Fj(e, t) {
	let n = dw(e);
	if (!n.length) return [];
	let r = {
		candidates: [],
		maxDirectoryBudget: 0,
		searchTerms: n,
		seenPaths: /* @__PURE__ */ new Set(),
		visitedDirectories: 0
	};
	return e.includeCompendiumAssets && (Nj(r, t), await Pj(r, t)), e.includeFilePickerAssets && Tj(r, t), hj(t, r, {
		currentLocation: "Portrait search complete",
		maxDirectories: r.maxDirectoryBudget,
		phase: "ready"
	}), r.candidates;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/index.ts
var Ij = {
	buildNpc: sj,
	ensureActorFolder: Vk,
	ensureItemFolder: Hk,
	findLowerCareerCandidates: TO,
	getPortraitSearchAvailability: async () => Ej(),
	importRecommendedQuickTraits: Xk,
	listActorFolders: async () => Uk(),
	listBaseActors: async (e) => fA(e),
	listFoundryPortraitCandidates: Fj,
	listMagicLoreOptions: SA,
	listSpellsForMagicGrants: ij,
	listItemFolders: async () => Wk(),
	listQuickTraits: Zk,
	listSkillCharacteristics: VO,
	listSkillSpecializations: BO,
	listTalentMaximums: rk,
	listTraitDifficultyOptions: Rk,
	loadBaseActorDraftData: pA,
	loadSettings: async () => pk(),
	resolveActorDrop: mA,
	resolveCareerDrop: fj,
	resolveSpellDrop: aj,
	resolveTraitDrop: zk,
	resolveTrapping: rA,
	resolveTrappingDrop: iA,
	saveSettings: mk
}, Lj = class extends M_ {
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
		return rO;
	}
	getVueProps() {
		return { bridge: Ij };
	}
}, Rj = "wfrp4e-customizer-open-npc-builder", zj = "wfrp4e-customizer-open-species-builder";
function Bj() {
	Hooks.on("renderActorDirectory", (e, t) => {
		let n = Gj(t);
		n && Vj(n);
	});
}
function Vj(e) {
	let n = Wj(e);
	if (!n) {
		t("wfrp4e-customizer-apps | Could not find Actor Directory button container.");
		return;
	}
	Hj(e, n), Uj(e, n);
}
function Hj(e, t) {
	if (e.querySelector(`.${Rj}`)) return;
	let n = document.createElement("button");
	n.classList.add(Rj, "wfrp4e-customizer-actor-directory-button"), n.type = "button", n.innerHTML = "<i class=\"fa-solid fa-user-plus\" inert></i><span>NPC Builder App</span>", n.addEventListener("click", () => {
		new Lj().render(!0);
	}), t.append(n);
}
function Uj(e, t) {
	if (e.querySelector(`.${zj}`)) return;
	let n = document.createElement("button");
	n.classList.add(zj, "wfrp4e-customizer-actor-directory-button"), n.type = "button", n.innerHTML = "<i class=\"fa-solid fa-people-group\" inert></i><span>Species Builder</span>", n.addEventListener("click", () => {
		new Av().render(!0);
	}), t.append(n);
}
function Wj(e) {
	return e.querySelector(".directory-header .header-actions") ?? e.querySelector(".directory-header .action-buttons") ?? e.querySelector(".header-actions") ?? e.querySelector(".action-buttons");
}
function Gj(e) {
	return e instanceof HTMLElement ? e : Kj(e) && e[0] instanceof HTMLElement ? e[0] : null;
}
function Kj(e) {
	return typeof e == "object" && !!e && "length" in e;
}
//#endregion
//#region src/module/apps/species-builder/apply-species-config.ts
var qj = [
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
function Jj() {
	let n = game.wfrp4e?.config;
	if (!Y(n)) {
		t(`${$} | WFRP config was unavailable; custom species were not applied.`);
		return;
	}
	let r = J_();
	Yj(n, Ic(r)), r.definitions.length > 0 && e(`${$} | Applied ${r.definitions.length} custom species definition(s).`);
}
function Yj(e, t) {
	for (let n of qj) Xj(e, n, t[n]);
	Zj(e, t.extraSpecies), Qj(e, t.subspecies);
}
function Xj(e, t, n) {
	if (Object.keys(n).length === 0) return;
	let r = e[t];
	if (!Y(r)) {
		e[t] = { ...n };
		return;
	}
	Object.assign(r, n);
}
function Zj(e, t) {
	if (t.length === 0) return;
	let n = Array.isArray(e.extraSpecies) ? e.extraSpecies : [], r = /* @__PURE__ */ new Set();
	for (let e of n) typeof e == "string" && r.add(e);
	for (let e of t) r.add(e);
	e.extraSpecies = [...r];
}
function Qj(e, t) {
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
var $j = "2d10";
function eM(e) {
	let t = e?.split("+")[0]?.trim();
	return t ? nM(t) : $j;
}
function tM(e, t) {
	return eM(e) === eM(t);
}
function nM(e) {
	return e.replaceAll(/\s+/g, "").toLocaleLowerCase();
}
//#endregion
//#region src/module/apps/species-builder/chargen-roll-swap-feedback.ts
var rM = "data-wfrp4e-customizer-roll-swap-feedback", iM = `[${rM}]`;
function aM(e, t) {
	let n = uM(e);
	if (n) {
		n.classList.add("wfrp4e-customizer-apps-root"), n.dataset.theme = "wfrp4e-customizer-apps";
		for (let e of lM(n)) e.addEventListener("dragstart", () => {
			let r = e.dataset.ch;
			r && oM(n, r, t);
		}), e.addEventListener("dragend", () => {
			cM(n);
		}), e.addEventListener("drop", () => {
			cM(n);
		});
	}
}
function oM(e, t, n) {
	cM(e);
	for (let r of lM(e)) {
		let e = r.dataset.ch;
		if (e) {
			if (e === t) {
				sM(r, "Dragging", "dui-badge-warning");
				continue;
			}
			n(t, e) ? sM(r, "Compatible", "dui-badge-success") : sM(r, "Cannot swap", "dui-badge-error");
		}
	}
}
function sM(e, t, n) {
	let r = document.createElement("span");
	r.setAttribute(rM, ""), r.classList.add("dui-badge", n), r.textContent = t, e.append(r);
}
function cM(e) {
	for (let t of e.querySelectorAll(iM)) t.remove();
}
function lM(e) {
	return [...e.querySelectorAll(".ch-roll.ch-drag")];
}
function uM(e) {
	if (e instanceof HTMLElement) return e;
	if (!Y(e)) return;
	let t = e[0];
	return t instanceof HTMLElement ? t : void 0;
}
//#endregion
//#region src/module/apps/species-builder/chargen-roll-swap-guard.ts
var dM = Symbol("wfrp4e-customizer-guarded-attributes-stage");
function fM() {
	Hooks.on("wfrp4e:chargen", (e) => {
		pM(e);
	});
}
function pM(n) {
	let r = mM(n);
	if (!r) {
		t(`${$} | Could not inspect WFRP character generation stages.`);
		return;
	}
	let i = hM(r);
	if (!i) {
		t(`${$} | Could not find the WFRP Attributes character generation stage.`);
		return;
	}
	if (gM(i.class)) return;
	let a = _M(i.class);
	typeof r.replaceStage == "function" ? r.replaceStage("attributes", a) : i.class = a, e(`${$} | Guarded WFRP characteristic roll swapping for custom species.`);
}
function mM(e) {
	if (!Y(e)) return;
	let t = {}, n = e.replaceStage;
	return typeof n == "function" && (t.replaceStage = (t, r) => {
		n.call(e, t, r);
	}), Array.isArray(e.stages) && (t.stages = e.stages), t;
}
function hM(e) {
	for (let t of e.stages ?? []) if (Y(t) && t.key === "attributes") return typeof t.class == "function" ? t : void 0;
}
function gM(e) {
	return !!e[dM];
}
function _M(e) {
	class t extends e {
		static [dM] = !0;
		activateListeners(e) {
			let t = super.activateListeners(e);
			return aM(e, (e, t) => tM(vM(this, e), vM(this, t))), t;
		}
		swap(e, t) {
			let n = vM(this, e), r = vM(this, t);
			if (tM(n, r)) return super.swap(e, t);
			yM(e, n, t, r);
		}
	}
	return t;
}
function vM(e, t) {
	let n = Y(e.context) ? e.context : void 0, r = Y(n?.characteristics) ? n.characteristics : void 0, i = (Y(r?.[t]) ? r[t] : void 0)?.formula;
	return typeof i == "string" ? i : void 0;
}
function yM(e, t, n, r) {
	let i = bM(e), a = bM(n), o = eM(t), s = eM(r);
	ui.notifications?.warn?.(`Cannot swap ${i} and ${a}: ${i} uses ${o}, while ${a} uses ${s}.`);
}
function bM(e) {
	let t = game.wfrp4e?.config?.characteristics;
	if (!Y(t)) return e;
	let n = t[e];
	return typeof n == "string" ? n : e;
}
//#endregion
//#region src/module/debug/shape-inspector/constants.ts
var xM = `${$}.debugShapeProbes`, SM = "wfrp4eCustomizerShapeProbes", CM = "wfrp4eCustomizerShapePreset";
//#endregion
//#region src/module/debug/shape-inspector/utils.ts
function wM(e, t, n) {
	let r = Number(e);
	return Number.isFinite(r) ? Math.max(0, Math.min(n, Math.floor(r))) : t;
}
function TM(e) {
	return typeof e == "object" && !!e;
}
function EM(e) {
	return typeof e == "string" ? e.trim().toLocaleLowerCase() : "";
}
function DM(e) {
	try {
		return localStorage.getItem(e);
	} catch {
		return null;
	}
}
//#endregion
//#region src/module/debug/shape-inspector/path-resolver.ts
function OM(e) {
	let t = PM(e), n = kM(globalThis, t.root);
	for (let e of t.tokens) {
		if (e.type === "property") {
			n = kM(n, e.key);
			continue;
		}
		if (e.type === "index") {
			n = kM(n, String(e.index));
			continue;
		}
		n = AM(n, e.name, e.args);
	}
	return n;
}
function kM(e, t) {
	if (!(!TM(e) && typeof e != "function")) try {
		return e[t];
	} catch {
		return;
	}
}
function AM(e, t, n) {
	if (t === "at") {
		let t = Number(n[0] ?? 0), r = Number.isFinite(t) ? t : 0;
		return FM(e).at(r);
	}
	if (t === "findByName") {
		let t = EM(n[0] ?? "");
		return FM(e).find((e) => EM(kM(e, "name")) === t);
	}
	if (t === "findByType") {
		let t = EM(n[0] ?? "");
		return FM(e).find((e) => EM(kM(e, "type")) === t);
	}
	if (t === "get") {
		let t = n[0] ?? "";
		if (e instanceof Map) return e.get(t);
		let r = kM(e, "get");
		if (typeof r == "function") return r.call(e, t);
	}
	if (t === "sample") {
		let t = wM(n[0], 3, 60);
		return FM(e).slice(0, t);
	}
	throw Error(`Unsupported path method "${t}".`);
}
function jM(e) {
	return e.trim() ? e.split(",").map((e) => NM(e.trim())).map(String) : [];
}
function MM(e) {
	let t = e.trim();
	return /^-?\d+$/.test(t) ? Number(t) : NM(t);
}
function NM(e) {
	let t = /^["'](?<value>.*)["']$/.exec(e);
	return t?.groups ? t.groups.value ?? "" : e;
}
function PM(e) {
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
				args: jM(e.groups.args ?? ""),
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
				index: MM(e),
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
function FM(e) {
	if (Array.isArray(e)) return e;
	let t = kM(e, "contents");
	return Array.isArray(t) ? t : [];
}
//#endregion
//#region src/module/debug/shape-inspector/presets.ts
var IM = { "npc-builder": [
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
function LM() {
	return window.location.href.includes("wfrp4eCustomizerShapeProbes") || window.location.href.includes("wfrp4eCustomizerShapePreset");
}
function RM(e) {
	let t = {
		hook: e.hook ?? "ready",
		maxDepth: wM(e.maxDepth, 2, 6),
		maxEntries: wM(e.maxEntries, 12, 60),
		path: e.path.trim()
	};
	return e.label && (t.label = e.label), t;
}
function zM() {
	return [...BM(), ...VM()].map(RM);
}
function BM() {
	let e = DM(xM);
	if (!e) return [];
	try {
		let t = JSON.parse(e);
		return Array.isArray(t) ? t.filter(UM).map(RM) : [];
	} catch {
		return [];
	}
}
function VM() {
	let e = [], t = [new URLSearchParams(window.location.search), new URLSearchParams(window.location.hash.replace(/^#/, ""))];
	for (let n of t) {
		let t = n.get(CM), r = n.get(SM);
		t && e.push(...IM[t] ?? []), r && e.push(...HM(r));
	}
	return window.location.href.includes("wfrp4eCustomizerShapePreset=npc-builder") && !e.length && e.push(...IM["npc-builder"] ?? []), e;
}
function HM(e) {
	try {
		let t = JSON.parse(decodeURIComponent(e));
		return Array.isArray(t) ? t.filter(UM) : [];
	} catch (e) {
		return t(`${$} | Could not parse URL shape probes.`, e), [];
	}
}
function UM(e) {
	return typeof e != "object" || !e ? !1 : "path" in e && typeof e.path == "string";
}
//#endregion
//#region src/module/debug/shape-inspector/summary.ts
function WM(e, t) {
	return !TM(e) && typeof e != "function" ? YM(e) : typeof e == "function" ? qM(e) : Array.isArray(e) ? GM(e, t) : e instanceof Map ? KM(e, t) : JM(e, t);
}
function GM(e, t) {
	return {
		length: e.length,
		sample: e.slice(0, t.maxEntries).map((e) => WM(e, ZM(t))),
		type: "array"
	};
}
function KM(e, t) {
	return {
		sample: [...e.entries()].slice(0, t.maxEntries).map(([e, n]) => ({
			key: WM(e, ZM(t)),
			value: WM(n, ZM(t))
		})),
		size: e.size,
		type: "Map"
	};
}
function qM(e) {
	return {
		name: e.name,
		type: "function"
	};
}
function JM(e, t) {
	if (t.seen.has(e)) return { type: "circular" };
	t.seen.add(e);
	let n = XM(e, t.maxEntries), r = kM(e, "constructor"), i = {
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
		let n = kM(e, t);
		typeof n == "string" && (i[t] = n);
	}
	if (t.maxDepth <= 0) return i;
	let a = {};
	for (let r of n) a[r] = WM(kM(e, r), ZM(t));
	i.properties = a;
	let o = kM(e, "toObject");
	if (typeof o == "function") try {
		i.source = WM(o.call(e), ZM(t));
	} catch (e) {
		i.source = {
			error: e instanceof Error ? e.message : String(e),
			type: "error"
		};
	}
	return i;
}
function YM(e) {
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
function XM(e, t) {
	return Object.keys(e).sort().slice(0, t);
}
function ZM(e) {
	return {
		maxDepth: e.maxDepth - 1,
		maxEntries: e.maxEntries,
		seen: e.seen
	};
}
//#endregion
//#region src/module/debug/shape-inspector/index.ts
function QM() {
	localStorage.removeItem(xM), e(`${$} | Cleared debug shape probes.`);
}
function $M() {
	return zM();
}
function eN(e, t = {}) {
	let n = rN(e, t);
	return aN(n), n;
}
function tN() {
	let t = zM();
	for (let e of ["init", "setup"]) {
		let n = t.filter((t) => t.hook === e);
		n.length && Hooks.once(e, () => {
			for (let t of n) iN(t, e);
		});
	}
	Hooks.once("ready", () => {
		let t = zM().filter((e) => (e.hook ?? "ready") === "ready");
		LM() && e(`${$} | Debug shape ready probes discovered: ${t.length}`, window.location.href);
		for (let e of t) iN(e, "ready");
	});
}
function nN(t) {
	let n = t.map(RM);
	localStorage.setItem(xM, JSON.stringify(n)), e(`${$} | Stored ${n.length} debug shape probe(s). Reload Foundry to run init/setup probes.`);
}
function rN(e, t = {}, n) {
	let r = wM(t.maxDepth, 2, 6), i = wM(t.maxEntries, 12, 60), a = OM(e), o = {
		inspectedAt: (/* @__PURE__ */ new Date()).toISOString(),
		label: t.label || e,
		maxDepth: r,
		maxEntries: i,
		path: e,
		value: WM(a, {
			maxDepth: r,
			maxEntries: i,
			seen: /* @__PURE__ */ new WeakSet()
		})
	};
	return n && (o.hook = n), o;
}
function iN(e, n) {
	try {
		aN(rN(e.path, e, n));
	} catch (n) {
		t(`${$} | Debug shape probe failed for "${e.path}".`, n);
	}
}
function aN(t) {
	e(`${$} | Debug shape probe: ${t.label}`, JSON.stringify(t, null, 2));
}
//#endregion
//#region src/view/components/ApplicationShell.vue?vue&type=script&setup=true&lang.ts
var oN = ["aria-label"], sN = { class: "dui-card-body" }, cN = { class: "dui-card-title" }, lN = { key: 0 }, uN = {
	key: 0,
	class: "dui-card-actions"
}, dN = /* @__PURE__ */ I({
	__name: "ApplicationShell",
	props: {
		description: {},
		title: {}
	},
	setup(e) {
		return (t, n) => (z(), B("section", {
			"aria-label": e.title,
			class: "dui-card"
		}, [H("div", sN, [
			H("header", null, [
				H("h1", cN, k(e.title), 1),
				e.description ? (z(), B("p", lN, k(e.description), 1)) : G("", !0),
				Tr(t.$slots, "header")
			]),
			Tr(t.$slots, "default"),
			t.$slots.actions ? (z(), B("div", uN, [Tr(t.$slots, "actions")])) : G("", !0)
		])], 8, oN));
	}
}), fN = { class: "dui-list" }, pN = /* @__PURE__ */ I({
	__name: "DaisyExampleApp",
	setup(e) {
		let t = [
			"button",
			"badge",
			"card",
			"alert"
		];
		return (e, n) => (z(), V(dN, {
			description: "A quick visual check of the module's isolated Daisy component theme.",
			title: "Daisy Probe"
		}, {
			header: F(() => [...n[0] ||= [H("span", { class: "dui-badge dui-badge-primary" }, "Scoped", -1), H("span", { class: "dui-badge dui-badge-outline" }, "Foundry-safe", -1)]]),
			actions: F(() => [...n[1] ||= [H("span", { class: "dui-badge dui-badge-success" }, "Ready", -1)]]),
			default: F(() => [n[2] ||= H("div", { class: "dui-alert dui-alert-info" }, [H("span", null, "DaisyUI is available inside this Vue application root.")], -1), H("ul", fN, [(z(), B(R, null, L(t, (e) => H("li", {
				key: e,
				class: "dui-list-row"
			}, k(e), 1)), 64))])]),
			_: 1
		}));
	}
}), mN = class extends M_ {
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
		return pN;
	}
}, hN = { class: "dui-list" }, gN = { class: "dui-list-row" }, _N = { class: "dui-list-row" }, vN = { class: "dui-list-row" }, yN = /* @__PURE__ */ I({
	__name: "WorkbenchApp",
	props: {
		openDaisyProbe: { type: Function },
		openNpcBuilder: { type: Function },
		openSpeciesBuilder: { type: Function }
	},
	setup(e) {
		return (t, n) => (z(), V(dN, {
			description: "Open a focused WFRP4e authoring workflow.",
			title: "Customizer Workbench"
		}, {
			default: F(() => [H("ul", hN, [
				H("li", gN, [n[3] ||= H("div", { class: "dui-list-col-grow" }, [H("strong", null, "NPC Builder"), H("p", null, "Build an NPC from a base Actor, Careers, traits, trappings, and spells.")], -1), H("button", {
					"aria-label": "Open NPC Builder",
					class: "dui-btn dui-btn-primary",
					type: "button",
					onClick: n[0] ||= (...t) => e.openNpcBuilder && e.openNpcBuilder(...t)
				}, " Open ")]),
				H("li", _N, [n[4] ||= H("div", { class: "dui-list-col-grow" }, [H("strong", null, "Species Builder"), H("p", null, "Author custom species and apply them to WFRP character generation.")], -1), H("button", {
					"aria-label": "Open Species Builder",
					class: "dui-btn",
					type: "button",
					onClick: n[1] ||= (...t) => e.openSpeciesBuilder && e.openSpeciesBuilder(...t)
				}, " Open ")]),
				H("li", vN, [n[5] ||= H("div", { class: "dui-list-col-grow" }, [H("strong", null, "DaisyUI Probe"), H("p", null, "Check the module's scoped component theme.")], -1), H("button", {
					"aria-label": "Open DaisyUI Probe",
					class: "dui-btn dui-btn-ghost",
					type: "button",
					onClick: n[2] ||= (...t) => e.openDaisyProbe && e.openDaisyProbe(...t)
				}, " Open ")])
			])]),
			_: 1
		}));
	}
}), bN = class extends M_ {
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
		return yN;
	}
	getVueProps() {
		return {
			openDaisyProbe: () => new mN().render(!0),
			openNpcBuilder: () => new Lj().render(!0),
			openSpeciesBuilder: () => new Av().render(!0)
		};
	}
};
//#endregion
//#region src/module/register-module-menus.ts
function xN() {
	game.settings.registerMenu($, "workbench", {
		hint: "Open the WFRP4e Customizer Apps workbench.",
		icon: "fa-solid fa-screwdriver-wrench",
		label: "Open Workbench",
		name: "WFRP4e Customizer Apps",
		restricted: !0,
		type: bN
	}), game.settings.registerMenu($, "npc-builder", {
		hint: "Build a WFRP4e NPC from a base Actor and Career items.",
		icon: "fa-solid fa-user-plus",
		label: "Open NPC Builder",
		name: "WFRP4e NPC Builder",
		restricted: !0,
		type: Lj
	}), game.settings.registerMenu($, "species-builder", {
		hint: "Create custom WFRP4e species definitions for character generation.",
		icon: "fa-solid fa-people-group",
		label: "Open Species Builder",
		name: "WFRP4e Species Builder",
		restricted: !0,
		type: Av
	}), game.settings.registerMenu($, "daisy-example", {
		hint: "Open a small isolated DaisyUI component probe.",
		icon: "fa-solid fa-flask",
		label: "Open Daisy Probe",
		name: "WFRP4e Daisy Probe",
		restricted: !0,
		type: mN
	});
}
//#endregion
//#region src/module/register-module-settings.ts
function SN() {
	fk(), q_();
}
//#endregion
//#region src/functions/item-grants/wfrp-grant-effect.ts
var CN = "generatedGrantItemsEffect", wN = {
	grantMode: "all",
	lifetime: "linked-to-effect",
	ownerAction: "keep"
};
function TN(e) {
	let t = e.recipe ?? wN;
	EN(t);
	let n = e.items.map((e) => e.uuid);
	return {
		changes: [],
		description: ON(e.effectName, e.items, t),
		disabled: !1,
		flags: { [e.flagScope]: {
			[CN]: !0,
			itemUuids: n,
			recipe: t
		} },
		img: e.items[0]?.img ?? "icons/svg/aura.svg",
		name: e.effectName,
		system: {
			scriptData: [{
				label: e.effectName,
				script: DN(n, t),
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
function EN(e) {
	if (e.lifetime === "linked-to-effect" && e.ownerAction === "delete-after-grant") throw Error("Self-removing grant effects must create detached item copies.");
}
function DN(e, t) {
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
function ON(e, t, n) {
	let r = kN(e), i = t.map((e) => `<li>${kN(e.name)}</li>`).join("");
	return `<p><strong>${r}</strong>: grants item copies; ${n.lifetime === "linked-to-effect" ? "granted item copies are removed with this effect" : "granted item copies remain after this effect is removed"}.${n.ownerAction === "delete-after-grant" ? " The source Item removes itself after granting." : ""}</p><ul>${i}</ul>`;
}
function kN(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
//#endregion
//#region src/view/apps/grant-builder/GrantBuilderApp.vue?vue&type=script&setup=true&lang.ts
var AN = { class: "dui-card dui-card-border dui-card-sm" }, jN = { class: "dui-card-body" }, MN = { class: "dui-list" }, NN = {
	key: 0,
	class: "dui-list-row"
}, PN = ["src"], FN = { class: "dui-list-col-grow" }, IN = ["title", "onClick"], LN = { class: "dui-card dui-card-border dui-card-sm" }, RN = { class: "dui-card-body" }, zN = { class: "dui-fieldset" }, BN = { class: "dui-label" }, VN = ["value"], HN = { class: "dui-card-body" }, UN = { class: "dui-fieldset" }, WN = { class: "dui-label" }, GN = ["checked"], KN = { class: "dui-label" }, qN = ["checked"], JN = { class: "dui-label" }, YN = ["checked", "disabled"], XN = ["disabled"], ZN = /* @__PURE__ */ I({
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
		return (n, r) => (z(), V(dN, {
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
			}, " Create Grant Effect ", 8, XN)]),
			default: F(() => [
				H("section", AN, [H("div", jN, [
					r[8] ||= H("h2", { class: "dui-card-title" }, "Granted Items", -1),
					U(Gf, {
						description: "World and compendium Items can be added one at a time.",
						"manual-entry-trigger": "button",
						title: "Drop Items Here",
						onDropData: e.onDropData
					}, null, 8, ["onDropData"]),
					H("ul", MN, [e.items.length === 0 ? (z(), B("li", NN, "No granted items configured.")) : (z(!0), B(R, { key: 1 }, L(e.items, (t) => (z(), B("li", {
						key: t.uuid,
						class: "dui-list-row"
					}, [
						t.img ? (z(), B("img", {
							key: 0,
							alt: "",
							src: t.img
						}, null, 8, PN)) : G("", !0),
						H("div", FN, [H("strong", null, k(t.name), 1), H("small", null, k(t.uuid), 1)]),
						H("button", {
							class: "dui-btn dui-btn-ghost dui-btn-sm dui-btn-square",
							type: "button",
							title: `Remove ${t.name}`,
							onClick: (n) => e.onRemoveItem(t.uuid)
						}, [...r[7] ||= [H("i", {
							class: "fa-solid fa-times",
							"aria-hidden": "true"
						}, null, -1)]], 8, IN)
					]))), 128))])
				])]),
				H("section", LN, [H("div", RN, [H("fieldset", zN, [r[10] ||= H("legend", { class: "dui-fieldset-legend" }, "Effect", -1), H("label", BN, [r[9] ||= H("span", null, "Effect name", -1), H("input", {
					class: "dui-input",
					value: e.effectName,
					type: "text",
					onInput: r[0] ||= (n) => e.onEffectNameInput(t(n))
				}, null, 40, VN)])])])]),
				H("form", {
					class: "dui-card dui-card-border dui-card-sm",
					onSubmit: r[4] ||= Ao(() => {}, ["prevent"])
				}, [H("div", HN, [H("fieldset", UN, [
					r[14] ||= H("legend", { class: "dui-fieldset-legend" }, "Granted Item Lifetime", -1),
					H("label", WN, [H("input", {
						class: "dui-radio",
						name: "grant-lifetime",
						type: "radio",
						value: "linked-to-effect",
						checked: e.lifetime === "linked-to-effect",
						onChange: r[1] ||= (t) => e.onLifetimeChange("linked-to-effect")
					}, null, 40, GN), r[11] ||= H("span", null, [
						H("strong", null, "Linked to this effect"),
						H("br"),
						W(" Granted Items are removed when this effect is deleted. ")
					], -1)]),
					H("label", KN, [H("input", {
						class: "dui-radio",
						name: "grant-lifetime",
						type: "radio",
						value: "detached",
						checked: e.lifetime === "detached",
						onChange: r[2] ||= (t) => e.onLifetimeChange("detached")
					}, null, 40, qN), r[12] ||= H("span", null, [
						H("strong", null, "Detached copies"),
						H("br"),
						W(" Granted Items remain after this effect or source Item is removed. ")
					], -1)]),
					H("label", JN, [H("input", {
						class: "dui-checkbox",
						type: "checkbox",
						checked: e.ownerAction === "delete-after-grant",
						disabled: e.lifetime !== "detached",
						onChange: r[3] ||= (t) => e.onOwnerActionChange(e.ownerAction === "delete-after-grant" ? "keep" : "delete-after-grant")
					}, null, 40, YN), r[13] ||= W(" Remove the source Item after granting. ", -1)])
				])])], 32)
			]),
			_: 1
		}, 8, ["description"]));
	}
});
//#endregion
//#region src/module/wfrp4e/grant/item-documents.ts
function QN(e) {
	let t = e.dataTransfer?.getData("text/plain") ?? "";
	if (!t) return null;
	try {
		return cv(t).type === "Item" ? t : null;
	} catch {
		return null;
	}
}
async function $N(e) {
	let t = cv(e);
	if (!t.uuid) throw Error("Drop an Item with a resolvable UUID.");
	return ov(await fromUuid(t.uuid), "The dropped Item was not found.");
}
function eP(e) {
	let t = {
		name: e.name,
		uuid: e.uuid
	};
	return e.img && (t.img = e.img), t;
}
//#endregion
//#region src/module/apps/grant-builder/GrantBuilderApplication.ts
var tP = "detached", nP = class extends M_ {
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
		return ZN;
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
		this.#r = e, e !== tP && (this.#i = "keep"), this.render();
	}
	changeOwnerAction(e) {
		this.#i = e, this.render();
	}
	removeItem(e) {
		this.#n = this.#n.filter((t) => t.uuid !== e), this.render();
	}
	async handleDrop(e) {
		try {
			let t = await $N(e);
			if (t.uuid === this.carrierItem.uuid) throw Error("An Item cannot grant itself.");
			if (this.#n.some((e) => e.uuid === t.uuid)) {
				ui.notifications?.warn?.(`"${t.name}" is already in this grant effect.`);
				return;
			}
			this.#n = [...this.#n, eP(t)], this.updateDefaultEffectName(), this.render();
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
			}, n = TN({
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
}, rP = new Set(["talent", "trait"]), iP = /* @__PURE__ */ new WeakSet(), aP = !1, oP = "wfrp4e-customizer-grant-builder-button", sP = [
	"section[data-application-part=\"effects\"].active",
	"section[data-tab=\"effects\"].active",
	".tab[data-tab=\"effects\"].active",
	".tab.effects.active"
].join(","), cP = [
	"section[data-application-part=\"effects\"]",
	"section[data-tab=\"effects\"]",
	".tab[data-tab=\"effects\"]",
	".tab.effects"
].join(",");
function lP() {
	aP || (aP = !0, Hooks.on("renderApplicationV2", (e, t) => {
		if (!(t instanceof HTMLElement)) return;
		let n = pP(e);
		!n || !rP.has(n.type) || (uP(n, t), dP(n, t));
	}));
}
function uP(e, t) {
	iP.has(t) || (iP.add(t), t.addEventListener("dragover", (e) => {
		mP(t, e.target) && (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "copy"));
	}, !0), t.addEventListener("drop", (n) => {
		fP(e, t, n);
	}, !0));
}
function dP(e, t) {
	if (t.querySelector(`.${oP}`)) return;
	let n = gP(t, { includeInactive: !0 });
	if (!n) return;
	let r = document.createElement("div");
	r.classList.add("wfrp4e-customizer-grant-builder-toolbar");
	let i = document.createElement("button");
	i.type = "button", i.classList.add(oP), i.title = "Open the advanced item grant builder", i.innerHTML = "<i class=\"fa-solid fa-sitemap\" aria-hidden=\"true\"></i><span>Grant Builder</span>", i.addEventListener("click", () => {
		new nP(e).render(!0);
	}), r.append(i), n.prepend(r);
}
async function fP(e, t, n) {
	if (!mP(t, n.target)) return;
	let r = QN(n);
	if (r) {
		n.preventDefault(), n.stopPropagation();
		try {
			let t = await $N(r);
			if (t.uuid === e.uuid) throw Error("An Item cannot grant itself.");
			let n = eP(t), i = TN({
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
function pP(e) {
	if (typeof e != "object" || !e) return null;
	let t = "item" in e ? e.item : void 0;
	if (iv(t)) return t;
	let n = "document" in e ? e.document : void 0;
	return iv(n) ? n : null;
}
function mP(e, t) {
	return !(t instanceof Element) || !e.contains(t) ? !1 : !!hP(e);
}
function hP(e) {
	return e.querySelector(sP) || gP(e, { includeInactive: !1 });
}
function gP(e, t) {
	return [...e.querySelectorAll(cP)].find((e) => t.includeInactive || e.offsetParent !== null) ?? null;
}
//#endregion
//#region src/module/api/create-module-api.ts
function _P() {
	return {
		clearDebugShapeProbes: QM,
		getDebugShapeProbes: $M,
		inspectPath: eN,
		listNpcAutoAdvanceStrategies: rx,
		async openDaisyExample() {
			await new mN().render(!0);
		},
		async openNpcBuilder() {
			await new Lj().render(!0);
		},
		async openSpeciesBuilder() {
			await new Av().render(!0);
		},
		async openWorkbench() {
			await new bN().render(!0);
		},
		registerNpcAutoAdvanceStrategy: nx,
		setDebugShapeProbes: nN
	};
}
//#endregion
//#region src/module/api/register-module-api.ts
function vP() {
	let e = game.modules.get($);
	if (!e) throw Error(`Foundry module registry entry was not found for ${$}.`);
	e.api = _P();
}
//#endregion
//#region src/module/hooks/register-module-hooks.ts
function yP() {
	tN(), Hooks.once("init", () => {
		e(`${$} | Initializing`), SN(), game.system.id === "wfrp4e" && (Jj(), fM(), lP()), xN(), Bj();
	}), Hooks.once("ready", () => {
		if (game.system.id !== "wfrp4e") {
			t(`${$} | Loaded outside ${y_}; skipping module API registration.`);
			return;
		}
		vP(), wO(), HO(), Q_(), Cv(), e(`${$} | Ready`);
	});
}
//#endregion
//#region src/main.ts
yP();
//#endregion

//# sourceMappingURL=wfrp4e-customizer-apps.mjs.map