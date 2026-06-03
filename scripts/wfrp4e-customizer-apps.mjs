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
}, d = Object.prototype.hasOwnProperty, f = (e, t) => d.call(e, t), p = Array.isArray, m = (e) => C(e) === "[object Map]", h = (e) => C(e) === "[object Set]", g = (e) => C(e) === "[object Date]", _ = (e) => typeof e == "function", v = (e) => typeof e == "string", y = (e) => typeof e == "symbol", b = (e) => typeof e == "object" && !!e, x = (e) => (b(e) || _(e)) && _(e.then) && _(e.catch), S = Object.prototype.toString, C = (e) => S.call(e), w = (e) => C(e).slice(8, -1), ee = (e) => C(e) === "[object Object]", T = (e) => v(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, E = /* @__PURE__ */ n(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), D = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, te = /-\w/g, ne = D((e) => e.replace(te, (e) => e.slice(1).toUpperCase())), re = /\B([A-Z])/g, ie = D((e) => e.replace(re, "-$1").toLowerCase()), ae = D((e) => e.charAt(0).toUpperCase() + e.slice(1)), oe = D((e) => e ? `on${ae(e)}` : ""), O = (e, t) => !Object.is(e, t), se = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, ce = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, le = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, ue = (e) => {
	let t = v(e) ? Number(e) : NaN;
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
function k(e) {
	let t = "";
	if (v(e)) t = e;
	else if (p(e)) for (let n = 0; n < e.length; n++) {
		let r = k(e[n]);
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
var we = (e) => !!(e && e.__v_isRef === !0), A = (e) => v(e) ? e : e == null ? "" : p(e) || b(e) && (e.toString === S || !_(e.toString)) ? we(e) ? A(e.value) : JSON.stringify(e, Te, 2) : String(e), Te = (e, t) => we(t) ? Te(e, t.value) : m(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Ee(t, r) + " =>"] = n, e), {}) } : h(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Ee(e)) } : y(t) ? Ee(t) : b(t) && !p(t) && !ee(t) ? String(t) : t, Ee = (e, t = "") => y(e) ? `Symbol(${e.description ?? t})` : e, De, Oe = class {
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
var j, Me = /* @__PURE__ */ new WeakSet(), Ne = class {
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
		let e = j, t = Ke;
		j = this, Ke = !0;
		try {
			return this.fn();
		} finally {
			Ve(this), j = e, Ke = t, this.flags &= -3;
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
	let t = e.dep, n = j, r = Ke;
	j = e, Ke = !0;
	try {
		Be(e);
		let n = e.fn(e._value);
		(t.version === 0 || O(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		j = n, Ke = r, Ve(e), e.flags &= -3;
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
		let e = j;
		j = void 0;
		try {
			t();
		} finally {
			j = e;
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
		if (!j || !Ke || j === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== j) t = this.activeLink = new Qe(j, this), j.deps ? (t.prevDep = j.depsTail, j.depsTail.nextDep = t, j.depsTail = t) : j.deps = j.depsTail = t, et(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = j.depsTail, t.nextDep = void 0, j.depsTail.nextDep = t, j.depsTail = t, j.deps === t && (j.deps = e);
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
	if (Ke && j) {
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
	let t = /* @__PURE__ */ M(e);
	return t === e ? t : (at(t, "iterate", it), /* @__PURE__ */ Jt(e) ? t : t.map(Zt));
}
function lt(e) {
	return at(e = /* @__PURE__ */ M(e), "iterate", it), e;
}
function ut(e, t) {
	return /* @__PURE__ */ qt(e) ? Qt(/* @__PURE__ */ Kt(e) ? Zt(t) : t) : Zt(t);
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
	return r !== e && !/* @__PURE__ */ Jt(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var pt = Array.prototype;
function mt(e, t, n, r, i, a) {
	let o = lt(e), s = o !== e && !/* @__PURE__ */ Jt(e), c = o[t];
	if (c !== pt[t]) {
		let t = c.apply(e, a);
		return s ? Zt(t) : t;
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
	let i = lt(e), a = i !== e && !/* @__PURE__ */ Jt(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = ut(e, t)), n.call(this, t, ut(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? ut(e, c) : c;
}
function gt(e, t, n) {
	let r = /* @__PURE__ */ M(e);
	at(r, "iterate", it);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Yt(n[0]) ? (n[0] = /* @__PURE__ */ M(n[0]), r[t](...n)) : i;
}
function _t(e, t, n = []) {
	Je(), Re();
	let r = (/* @__PURE__ */ M(e))[t].apply(e, n);
	return ze(), Ye(), r;
}
var vt = /* @__PURE__ */ n("__proto__,__v_isRef,__isVue"), yt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(y));
function bt(e) {
	y(e) || (e = String(e));
	let t = /* @__PURE__ */ M(this);
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
		let o = Reflect.get(e, t, /* @__PURE__ */ N(e) ? e : n);
		if ((y(t) ? yt.has(t) : vt(t)) || (r || at(e, "get", t), i)) return o;
		if (/* @__PURE__ */ N(o)) {
			let e = a && T(t) ? o : o.value;
			return r && b(e) ? /* @__PURE__ */ Wt(e) : e;
		}
		return b(o) ? r ? /* @__PURE__ */ Wt(o) : /* @__PURE__ */ Ht(o) : o;
	}
}, St = class extends xt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = p(e) && T(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ qt(i);
			if (!/* @__PURE__ */ Jt(n) && !/* @__PURE__ */ qt(n) && (i = /* @__PURE__ */ M(i), n = /* @__PURE__ */ M(n)), !a && /* @__PURE__ */ N(i) && !/* @__PURE__ */ N(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : f(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ N(e) ? e : r);
		return e === /* @__PURE__ */ M(r) && (o ? O(n, i) && ot(e, "set", t, n, i) : ot(e, "add", t, n)), s;
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
		let i = this.__v_raw, a = /* @__PURE__ */ M(i), o = m(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, u = i[e](...r), d = n ? Dt : t ? Qt : Zt;
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
			let r = this.__v_raw, i = /* @__PURE__ */ M(r), a = /* @__PURE__ */ M(n);
			e || (O(n, a) && at(i, "get", n), at(i, "get", a));
			let { has: o } = Ot(i), s = t ? Dt : e ? Qt : Zt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && at(/* @__PURE__ */ M(t), "iterate", nt), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ M(n), i = /* @__PURE__ */ M(t);
			return e || (O(t, i) && at(r, "has", t), at(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ M(a), s = t ? Dt : e ? Qt : Zt;
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
			let n = /* @__PURE__ */ M(this), r = Ot(n), i = /* @__PURE__ */ M(e), a = !t && !/* @__PURE__ */ Jt(e) && !/* @__PURE__ */ qt(e) ? i : e;
			return r.has.call(n, a) || O(e, a) && r.has.call(n, e) || O(i, a) && r.has.call(n, i) || (n.add(a), ot(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ Jt(n) && !/* @__PURE__ */ qt(n) && (n = /* @__PURE__ */ M(n));
			let r = /* @__PURE__ */ M(this), { has: i, get: a } = Ot(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ M(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? O(n, s) && ot(r, "set", e, n, s) : ot(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ M(this), { has: n, get: r } = Ot(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ M(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && ot(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ M(this), t = e.size !== 0, n = e.clear();
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
function Vt(e) {
	return e.__v_skip || !Object.isExtensible(e) ? 0 : Bt(w(e));
}
/* @__NO_SIDE_EFFECTS__ */
function Ht(e) {
	return /* @__PURE__ */ qt(e) ? e : Gt(e, !1, wt, Nt, It);
}
/* @__NO_SIDE_EFFECTS__ */
function Ut(e) {
	return Gt(e, !1, Et, Pt, Lt);
}
/* @__NO_SIDE_EFFECTS__ */
function Wt(e) {
	return Gt(e, !0, Tt, Ft, Rt);
}
function Gt(e, t, n, r, i) {
	if (!b(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
	let a = Vt(e);
	if (a === 0) return e;
	let o = i.get(e);
	if (o) return o;
	let s = new Proxy(e, a === 2 ? r : n);
	return i.set(e, s), s;
}
/* @__NO_SIDE_EFFECTS__ */
function Kt(e) {
	return /* @__PURE__ */ qt(e) ? /* @__PURE__ */ Kt(e.__v_raw) : !!(e && e.__v_isReactive);
}
/* @__NO_SIDE_EFFECTS__ */
function qt(e) {
	return !!(e && e.__v_isReadonly);
}
/* @__NO_SIDE_EFFECTS__ */
function Jt(e) {
	return !!(e && e.__v_isShallow);
}
/* @__NO_SIDE_EFFECTS__ */
function Yt(e) {
	return e ? !!e.__v_raw : !1;
}
/* @__NO_SIDE_EFFECTS__ */
function M(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ M(t) : e;
}
function Xt(e) {
	return !f(e, "__v_skip") && Object.isExtensible(e) && ce(e, "__v_skip", !0), e;
}
var Zt = (e) => b(e) ? /* @__PURE__ */ Ht(e) : e, Qt = (e) => b(e) ? /* @__PURE__ */ Wt(e) : e;
/* @__NO_SIDE_EFFECTS__ */
function N(e) {
	return e ? e.__v_isRef === !0 : !1;
}
/* @__NO_SIDE_EFFECTS__ */
function P(e) {
	return $t(e, !1);
}
function $t(e, t) {
	return /* @__PURE__ */ N(e) ? e : new en(e, t);
}
var en = class {
	constructor(e, t) {
		this.dep = new $e(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ M(e), this._value = t ? e : Zt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Jt(e) || /* @__PURE__ */ qt(e);
		e = n ? e : /* @__PURE__ */ M(e), O(e, t) && (this._rawValue = e, this._value = n ? e : Zt(e), this.dep.trigger());
	}
};
function F(e) {
	return /* @__PURE__ */ N(e) ? e.value : e;
}
var tn = {
	get: (e, t, n) => t === "__v_raw" ? e : F(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ N(i) && !/* @__PURE__ */ N(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function nn(e) {
	return /* @__PURE__ */ Kt(e) ? e : new Proxy(e, tn);
}
/* @__NO_SIDE_EFFECTS__ */
function rn(e) {
	let t = p(e) ? Array(e.length) : {};
	for (let n in e) t[n] = cn(e, n);
	return t;
}
var an = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = y(t) ? t : String(t), this._raw = /* @__PURE__ */ M(e);
		let r = !0, i = e;
		if (!p(e) || y(this._key) || !T(this._key)) do
			r = !/* @__PURE__ */ Yt(i) || /* @__PURE__ */ Jt(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = F(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ N(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ N(t)) {
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
/* @__NO_SIDE_EFFECTS__ */
function sn(e, t, n) {
	return /* @__PURE__ */ N(e) ? e : _(e) ? new on(e) : b(e) && arguments.length > 1 ? cn(e, t, n) : /* @__PURE__ */ P(e);
}
function cn(e, t, n) {
	return new an(e, t, n);
}
var ln = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new $e(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ze - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && j !== this) return Le(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Ue(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
/* @__NO_SIDE_EFFECTS__ */
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
	let { immediate: i, deep: o, once: s, scheduler: c, augmentJob: l, call: d } = n, f = (e) => o ? e : /* @__PURE__ */ Jt(e) || o === !1 || o === 0 ? gn(e, 1) : gn(e), m, h, g, v, y = !1, b = !1;
	if (/* @__PURE__ */ N(e) ? (h = () => e.value, y = /* @__PURE__ */ Jt(e)) : /* @__PURE__ */ Kt(e) ? (h = () => f(e), y = !0) : p(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Kt(e) || /* @__PURE__ */ Jt(e)), h = () => e.map((e) => {
		if (/* @__PURE__ */ N(e)) return e.value;
		if (/* @__PURE__ */ Kt(e)) return f(e);
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
			e(...t), S();
		};
	}
	let C = b ? Array(e.length).fill(dn) : dn, w = (e) => {
		if (!(!(m.flags & 1) || !m.dirty && !e)) if (t) {
			let e = m.run();
			if (o || y || (b ? e.some((e, t) => O(e, C[t])) : O(e, C))) {
				g && g();
				let n = pn;
				pn = m;
				try {
					let n = [
						e,
						C === dn ? void 0 : b && C[0] === dn ? [] : C,
						v
					];
					C = e, d ? d(t, 3, n) : t(...n);
				} finally {
					pn = n;
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
	if (n.set(e, t), t--, /* @__PURE__ */ N(e)) gn(e.value, t, n);
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
function Bn(e, t = Ln, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && ca(-1);
		let i = zn(t), a;
		try {
			a = e(...n);
		} finally {
			zn(i), r._d && ca(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Vn(e, t) {
	if (Ln === null) return e;
	let n = Va(Ln), i = e.dirs ||= [];
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
function Hn(e, t, n, r) {
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
function Un(e, t) {
	if (Ta) {
		let n = Ta.provides, r = Ta.parent && Ta.parent.provides;
		r === n && (n = Ta.provides = Object.create(r)), n[e] = t;
	}
}
function Wn(e, t, n = !1) {
	let r = Ea();
	if (r || di) {
		let i = di ? di._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && _(t) ? t.call(r && r.proxy) : t;
	}
}
function Gn() {
	return !!(Ea() || di);
}
var Kn = /* @__PURE__ */ Symbol.for("v-scx"), qn = () => Wn(Kn);
function Jn(e, t, n) {
	return Yn(e, t, n);
}
function Yn(e, t, n = r) {
	let { immediate: i, deep: o, flush: s, once: c } = n, u = l({}, n), d = t && i || !t && s !== "post", f;
	if (Ma) {
		if (s === "sync") {
			let e = qn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = a, e.resume = a, e.pause = a, e;
		}
	}
	let p = Ta;
	u.call = (e, t, n) => vn(e, p, t, n);
	let m = !1;
	s === "post" ? u.scheduler = (e) => {
		Hi(e, p && p.suspense);
	} : s !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : An(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = hn(e, t, u);
	return Ma && (f ? f.push(h) : d && h()), h;
}
function Xn(e, t, n) {
	let r = this.proxy, i = v(e) ? e.includes(".") ? Zn(r, e) : () => r[e] : e.bind(r, r), a;
	_(t) ? a = t : (a = t.handler, n = t);
	let o = ka(this), s = Yn(i, a.bind(r), n);
	return o(), s;
}
function Zn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Qn = /* @__PURE__ */ Symbol("_vte"), $n = (e) => e.__isTeleport, er = /* @__PURE__ */ Symbol("_leaveCb"), tr = /* @__PURE__ */ Symbol("_enterCb");
function nr() {
	let e = {
		isMounted: !1,
		isLeaving: !1,
		isUnmounting: !1,
		leavingVNodes: /* @__PURE__ */ new Map()
	};
	return kr(() => {
		e.isMounted = !0;
	}), Mr(() => {
		e.isUnmounting = !0;
	}), e;
}
var rr = [Function, Array], ir = {
	mode: String,
	appear: Boolean,
	persisted: Boolean,
	onBeforeEnter: rr,
	onEnter: rr,
	onAfterEnter: rr,
	onEnterCancelled: rr,
	onBeforeLeave: rr,
	onLeave: rr,
	onAfterLeave: rr,
	onLeaveCancelled: rr,
	onBeforeAppear: rr,
	onAppear: rr,
	onAfterAppear: rr,
	onAppearCancelled: rr
}, ar = (e) => {
	let t = e.subTree;
	return t.component ? ar(t.component) : t;
}, or = {
	name: "BaseTransition",
	props: ir,
	setup(e, { slots: t }) {
		let n = Ea(), r = nr();
		return () => {
			let i = t.default && mr(t.default(), !0), a = i && i.length ? sr(i) : n.subTree ? G() : void 0;
			if (!a) return;
			let o = /* @__PURE__ */ M(e), { mode: s } = o;
			if (r.isLeaving) return dr(a);
			let c = fr(a);
			if (!c) return dr(a);
			let l = ur(c, o, r, n, (e) => l = e);
			c.type !== na && pr(c, l);
			let u = n.subTree && fr(n.subTree);
			if (u && u.type !== na && !da(u, c) && ar(n).type !== na) {
				let e = ur(u, o, r, n);
				if (pr(u, e), s === "out-in" && c.type !== na) return r.isLeaving = !0, e.afterLeave = () => {
					r.isLeaving = !1, n.job.flags & 8 || n.update(), delete e.afterLeave, u = void 0;
				}, dr(a);
				s === "in-out" && c.type !== na ? e.delayLeave = (e, t, n) => {
					let i = lr(r, u);
					i[String(u.key)] = u, e[er] = () => {
						t(), e[er] = void 0, delete l.delayedLeave, u = void 0;
					}, l.delayedLeave = () => {
						n(), delete l.delayedLeave, u = void 0;
					};
				} : u = void 0;
			} else u &&= void 0;
			return a;
		};
	}
};
function sr(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== na) {
			t = n;
			break;
		}
	}
	return t;
}
var cr = or;
function lr(e, t) {
	let { leavingVNodes: n } = e, r = n.get(t.type);
	return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function ur(e, t, n, r, i) {
	let { appear: a, mode: o, persisted: s = !1, onBeforeEnter: c, onEnter: l, onAfterEnter: u, onEnterCancelled: d, onBeforeLeave: f, onLeave: m, onAfterLeave: h, onLeaveCancelled: g, onBeforeAppear: _, onAppear: v, onAfterAppear: y, onAppearCancelled: b } = t, x = String(e.key), S = lr(n, e), C = (e, t) => {
		e && vn(e, r, 9, t);
	}, w = (e, t) => {
		let n = t[1];
		C(e, t), p(e) ? e.every((e) => e.length <= 1) && n() : e.length <= 1 && n();
	}, ee = {
		mode: o,
		persisted: s,
		beforeEnter(t) {
			let r = c;
			if (!n.isMounted) if (a) r = _ || c;
			else return;
			t[er] && t[er](!0);
			let i = S[x];
			i && da(e, i) && i.el[er] && i.el[er](), C(r, [t]);
		},
		enter(t) {
			if (S[x] === e) return;
			let r = l, i = u, o = d;
			if (!n.isMounted) if (a) r = v || l, i = y || u, o = b || d;
			else return;
			let s = !1;
			t[tr] = (e) => {
				s || (s = !0, C(e ? o : i, [t]), ee.delayedLeave && ee.delayedLeave(), t[tr] = void 0);
			};
			let c = t[tr].bind(null, !1);
			r ? w(r, [t, c]) : c();
		},
		leave(t, r) {
			let i = String(e.key);
			if (t[tr] && t[tr](!0), n.isUnmounting) return r();
			C(f, [t]);
			let a = !1;
			t[er] = (n) => {
				a || (a = !0, r(), C(n ? g : h, [t]), t[er] = void 0, S[i] === e && delete S[i]);
			};
			let o = t[er].bind(null, !1);
			S[i] = e, m ? w(m, [t, o]) : o();
		},
		clone(e) {
			let a = ur(e, t, n, r, i);
			return i && i(a), a;
		}
	};
	return ee;
}
function dr(e) {
	if (xr(e)) return e = ga(e), e.children = null, e;
}
function fr(e) {
	if (!xr(e)) return $n(e.type) && e.children ? sr(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && _(n.default)) return n.default();
	}
}
function pr(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, pr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function mr(e, t = !1, n) {
	let r = [], i = 0;
	for (let a = 0; a < e.length; a++) {
		let o = e[a], s = n == null ? o.key : String(n) + String(o.key == null ? a : o.key);
		o.type === R ? (o.patchFlag & 128 && i++, r = r.concat(mr(o.children, t, s))) : (t || o.type !== na) && r.push(s == null ? o : ga(o, { key: s }));
	}
	if (i > 1) for (let e = 0; e < r.length; e++) r[e].patchFlag = -2;
	return r;
}
/* @__NO_SIDE_EFFECTS__ */
function I(e, t) {
	return _(e) ? /* @__PURE__ */ l({ name: e.name }, t, { setup: e }) : e;
}
function hr(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function gr(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var _r = /* @__PURE__ */ new WeakMap();
function vr(e, t, n, i, a = !1) {
	if (p(e)) {
		e.forEach((e, r) => vr(e, t && (p(t) ? t[r] : t), n, i, a));
		return;
	}
	if (br(i) && !a) {
		i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && vr(e, t, n, i.component.subTree);
		return;
	}
	let s = i.shapeFlag & 4 ? Va(i.component) : i.el, c = a ? null : s, { i: l, r: d } = e, m = t && t.r, h = l.refs === r ? l.refs = {} : l.refs, g = l.setupState, y = /* @__PURE__ */ M(g), b = g === r ? o : (e) => gr(h, e) ? !1 : f(y, e), x = (e, t) => !(t && gr(h, t));
	if (m != null && m !== d) {
		if (yr(t), v(m)) h[m] = null, b(m) && (g[m] = null);
		else if (/* @__PURE__ */ N(m)) {
			let e = t;
			x(m, e.k) && (m.value = null), e.k && (h[e.k] = null);
		}
	}
	if (_(d)) _n(d, l, 12, [c, h]);
	else {
		let t = v(d), r = /* @__PURE__ */ N(d);
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
					i(), _r.delete(e);
				};
				t.id = -1, _r.set(e, t), Hi(t, n);
			} else yr(e), i();
		}
	}
}
function yr(e) {
	let t = _r.get(e);
	t && (t.flags |= 8, _r.delete(e));
}
fe().requestIdleCallback, fe().cancelIdleCallback;
var br = (e) => !!e.type.__asyncLoader, xr = (e) => e.type.__isKeepAlive;
function Sr(e, t) {
	wr(e, "a", t);
}
function Cr(e, t) {
	wr(e, "da", t);
}
function wr(e, t, n = Ta) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (Er(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) xr(e.parent.vnode) && Tr(r, t, n, e), e = e.parent;
	}
}
function Tr(e, t, n, r) {
	let i = Er(t, e, r, !0);
	Nr(() => {
		u(r[t], i);
	}, n);
}
function Er(e, t, n = Ta, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Je();
			let i = ka(n), a = vn(t, n, e, r);
			return i(), Ye(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var Dr = (e) => (t, n = Ta) => {
	(!Ma || e === "sp") && Er(e, (...e) => t(...e), n);
}, Or = Dr("bm"), kr = Dr("m"), Ar = Dr("bu"), jr = Dr("u"), Mr = Dr("bum"), Nr = Dr("um"), Pr = Dr("sp"), Fr = Dr("rtg"), Ir = Dr("rtc");
function Lr(e, t = Ta) {
	Er("ec", e, t);
}
var Rr = /* @__PURE__ */ Symbol.for("v-ndc");
function L(e, t, n, r) {
	let i, a = n && n[r], o = p(e);
	if (o || v(e)) {
		let n = o && /* @__PURE__ */ Kt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ Jt(e), s = /* @__PURE__ */ qt(e), e = lt(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Qt(Zt(e[n])) : Zt(e[n]) : e[n], n, void 0, a && a[n]);
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
function zr(e, t, n = {}, r, i) {
	if (Ln.ce || Ln.parent && br(Ln.parent) && Ln.parent.ce) {
		let e = Object.keys(n).length > 0;
		return t !== "default" && (n.name = t), z(), V(R, null, [U("slot", n, r && r())], e ? -2 : 64);
	}
	let a = e[t];
	a && a._c && (a._d = !1), z();
	let o = a && Br(a(n)), s = n.key || o && o.key, c = V(R, { key: (s && !y(s) ? s : `_${t}`) + (!o && r ? "_fb" : "") }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), a && a._c && (a._d = !0), c;
}
function Br(e) {
	return e.some((e) => ua(e) ? !(e.type === na || e.type === R && !Br(e.children)) : !0) ? e : null;
}
var Vr = (e) => e ? ja(e) ? Va(e) : Vr(e.parent) : null, Hr = /* @__PURE__ */ l(/* @__PURE__ */ Object.create(null), {
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
	$options: (e) => Zr(e),
	$forceUpdate: (e) => e.f ||= () => {
		An(e.update);
	},
	$nextTick: (e) => e.n ||= On.bind(e.proxy),
	$watch: (e) => Xn.bind(e)
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
			else Kr && (s[t] = 0);
		}
		let u = Hr[t], d, p;
		if (u) return t === "$attrs" && at(e.attrs, "get", ""), u(e);
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
function Gr(e) {
	return p(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Kr = !0;
function qr(e) {
	let t = Zr(e), n = e.proxy, r = e.ctx;
	Kr = !1, t.beforeCreate && Yr(t.beforeCreate, e, "bc");
	let { data: i, computed: o, methods: s, watch: c, provide: l, inject: u, created: d, beforeMount: f, mounted: m, beforeUpdate: h, updated: g, activated: v, deactivated: y, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: w, render: ee, renderTracked: T, renderTriggered: E, errorCaptured: D, serverPrefetch: te, expose: ne, inheritAttrs: re, components: ie, directives: ae, filters: oe } = t;
	if (u && Jr(u, r, null), s) for (let e in s) {
		let t = s[e];
		_(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		b(t) && (e.data = /* @__PURE__ */ Ht(t));
	}
	if (Kr = !0, o) for (let e in o) {
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
	if (c) for (let e in c) Xr(c[e], r, n, e);
	if (l) {
		let e = _(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Un(t, e[t]);
		});
	}
	d && Yr(d, e, "c");
	function O(e, t) {
		p(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (O(Or, f), O(kr, m), O(Ar, h), O(jr, g), O(Sr, v), O(Cr, y), O(Lr, D), O(Ir, T), O(Fr, E), O(Mr, S), O(Nr, w), O(Pr, te), p(ne)) if (ne.length) {
		let t = e.exposed ||= {};
		ne.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	ee && e.render === a && (e.render = ee), re != null && (e.inheritAttrs = re), ie && (e.components = ie), ae && (e.directives = ae), te && hr(e);
}
function Jr(e, t, n = a) {
	p(e) && (e = ni(e));
	for (let n in e) {
		let r = e[n], i;
		i = b(r) ? "default" in r ? Wn(r.from || n, r.default, !0) : Wn(r.from || n) : Wn(r), /* @__PURE__ */ N(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Yr(e, t, n) {
	vn(p(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Xr(e, t, n, r) {
	let i = r.includes(".") ? Zn(n, r) : () => n[r];
	if (v(e)) {
		let n = t[e];
		_(n) && Jn(i, n);
	} else if (_(e)) Jn(i, e.bind(n));
	else if (b(e)) if (p(e)) e.forEach((e) => Xr(e, t, n, r));
	else {
		let r = _(e.handler) ? e.handler.bind(n) : t[e.handler];
		_(r) && Jn(i, r, e);
	}
}
function Zr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Qr(c, e, o, !0)), Qr(c, t, o)), b(t) && a.set(t, c), c;
}
function Qr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Qr(e, a, n, !0), i && i.forEach((t) => Qr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = $r[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var $r = {
	data: ei,
	props: ai,
	emits: ai,
	methods: ii,
	computed: ii,
	beforeCreate: ri,
	created: ri,
	beforeMount: ri,
	mounted: ri,
	beforeUpdate: ri,
	updated: ri,
	beforeDestroy: ri,
	beforeUnmount: ri,
	destroyed: ri,
	unmounted: ri,
	activated: ri,
	deactivated: ri,
	errorCaptured: ri,
	serverPrefetch: ri,
	components: ii,
	directives: ii,
	watch: oi,
	provide: ei,
	inject: ti
};
function ei(e, t) {
	return t ? e ? function() {
		return l(_(e) ? e.call(this, this) : e, _(t) ? t.call(this, this) : t);
	} : t : e;
}
function ti(e, t) {
	return ii(ni(e), ni(t));
}
function ni(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function ri(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function ii(e, t) {
	return e ? l(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ai(e, t) {
	return e ? p(e) && p(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : l(/* @__PURE__ */ Object.create(null), Gr(e), Gr(t ?? {})) : t;
}
function oi(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = l(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = ri(e[r], t[r]);
	return n;
}
function si() {
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
var ci = 0;
function li(e, t) {
	return function(n, r = null) {
		_(n) || (n = l({}, n)), r != null && !b(r) && (r = null);
		let i = si(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: ci++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Wa,
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
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, Va(u.component);
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
				let t = di;
				di = c;
				try {
					return e();
				} finally {
					di = t;
				}
			}
		};
		return c;
	};
}
var di = null, fi = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ne(t)}Modifiers`] || e[`${ie(t)}Modifiers`];
function pi(e, t, ...n) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || r, a = n, o = t.startsWith("update:"), s = o && fi(i, t.slice(7));
	s && (s.trim && (a = n.map((e) => v(e) ? e.trim() : e)), s.number && (a = n.map(le)));
	let c, l = i[c = oe(t)] || i[c = oe(ne(t))];
	!l && o && (l = i[c = oe(ie(t))]), l && vn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, vn(u, e, 6, a);
	}
}
var mi = /* @__PURE__ */ new WeakMap();
function hi(e, t, n = !1) {
	let r = n ? mi : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!_(e)) {
		let r = (e) => {
			let n = hi(e, t, !0);
			n && (s = !0, l(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (b(e) && r.set(e, null), null) : (p(a) ? a.forEach((e) => o[e] = null) : l(o, a), b(e) && r.set(e, o), o);
}
function gi(e, t) {
	return !e || !s(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), f(e, t[0].toLowerCase() + t.slice(1)) || f(e, ie(t)) || f(e, t));
}
function _i(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = zn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = _a(u.call(t, e, d, f, m, p, h)), y = s;
		} else {
			let e = t;
			v = _a(e.length > 1 ? e(f, {
				attrs: s,
				slots: o,
				emit: l
			}) : e(f, null)), y = t.props ? s : vi(s);
		}
	} catch (t) {
		ia.length = 0, yn(t, e, 1), v = U(na);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(c) && (y = yi(y, a)), b = ga(b, y, !1, !0));
	}
	return n.dirs && (b = ga(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && pr(b, n.transition), v = b, zn(_), v;
}
var vi = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || s(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, yi = (e, t) => {
	let n = {};
	for (let r in e) (!c(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function bi(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? xi(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (Si(o, r, n) && !gi(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? xi(r, o, l) : !0 : !!o;
	return !1;
}
function xi(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (Si(t, e, a) && !gi(n, a)) return !0;
	}
	return !1;
}
function Si(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && b(r) && b(i) ? !Se(r, i) : r !== i;
}
function Ci({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var wi = {}, Ti = () => Object.create(wi), Ei = (e) => Object.getPrototypeOf(e) === wi;
function Di(e, t, n, r = !1) {
	let i = {}, a = Ti();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), ki(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ Ut(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function Oi(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ M(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (gi(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (f(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = ne(o);
					i[t] = Ai(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		ki(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !f(t, a) && ((r = ie(a)) === a || !f(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Ai(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !f(t, e)) && (delete a[e], l = !0);
	}
	l && ot(e.attrs, "set", "");
}
function ki(e, t, n, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (t) for (let r in t) {
		if (E(r)) continue;
		let l = t[r], u;
		a && f(a, u = ne(r)) ? !o || !o.includes(u) ? n[u] = l : (c ||= {})[u] = l : gi(e.emitsOptions, r) || (!(r in i) || l !== i[r]) && (i[r] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ M(n), i = c || r;
		for (let r = 0; r < o.length; r++) {
			let s = o[r];
			n[s] = Ai(a, t, s, i[s], e, !f(i, s));
		}
	}
	return s;
}
function Ai(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = f(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && _(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = ka(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === ie(n)) && (r = !0));
	}
	return r;
}
var ji = /* @__PURE__ */ new WeakMap();
function Mi(e, t, n = !1) {
	let a = n ? ji : t.propsCache, o = a.get(e);
	if (o) return o;
	let s = e.props, c = {}, u = [], d = !1;
	if (!_(e)) {
		let r = (e) => {
			d = !0;
			let [n, r] = Mi(e, t, !0);
			l(c, n), r && u.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!s && !d) return b(e) && a.set(e, i), i;
	if (p(s)) for (let e = 0; e < s.length; e++) {
		let t = ne(s[e]);
		Ni(t) && (c[t] = r);
	}
	else if (s) for (let e in s) {
		let t = ne(e);
		if (Ni(t)) {
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
function Ni(e) {
	return e[0] !== "$" && !E(e);
}
var Pi = (e) => e === "_" || e === "_ctx" || e === "$stable", Fi = (e) => p(e) ? e.map(_a) : [_a(e)], Ii = (e, t, n) => {
	if (t._n) return t;
	let r = Bn((...e) => Fi(t(...e)), n);
	return r._c = !1, r;
}, Li = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Pi(n)) continue;
		let i = e[n];
		if (_(i)) t[n] = Ii(n, i, r);
		else if (i != null) {
			let e = Fi(i);
			t[n] = () => e;
		}
	}
}, Ri = (e, t) => {
	let n = Fi(t);
	e.slots.default = () => n;
}, zi = (e, t, n) => {
	for (let r in t) (n || !Pi(r)) && (e[r] = t[r]);
}, Bi = (e, t, n) => {
	let r = e.slots = Ti();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (zi(r, t, n), n && ce(r, "_", e, !0)) : Li(t, r);
	} else t && Ri(e, t);
}, Vi = (e, t, n) => {
	let { vnode: i, slots: a } = e, o = !0, s = r;
	if (i.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? o = !1 : zi(a, t, n) : (o = !t.$stable, Li(t, a)), s = t;
	} else t && (Ri(e, t), s = { default: 1 });
	if (o) for (let e in a) !Pi(e) && s[e] == null && delete a[e];
}, Hi = ea;
function Ui(e) {
	return Wi(e);
}
function Wi(e, t) {
	let n = fe();
	n.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = a, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !da(e, t) && (r = ye(e), he(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case ta:
				y(e, t, n, r);
				break;
			case na:
				b(e, t, n, r);
				break;
			case ra:
				e ?? x(t, n, r, o);
				break;
			case R:
				ie(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? ae(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, Se);
		}
		u != null && i ? vr(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && vr(e.ref, null, a, e, !0);
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
				n && n._beginPatch(), te(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, ee = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && D(e.children, d, null, r, i, Gi(e, a), s, u), _ && Hn(e, null, r, "created"), T(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !E(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && xa(f, r, e);
		}
		_ && Hn(e, null, r, "beforeMount");
		let v = qi(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Hi(() => {
			try {
				f && xa(f, r, e), v && g.enter(d), _ && Hn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, T = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || $i(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				T(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, D = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? va(e[l]) : _a(e[l]), t, n, r, i, a, o, s);
	}, te = (e, t, n, i, a, o, s) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || r, h = t.props || r, g;
		if (n && Ki(n, !1), (g = h.onVnodeBeforeUpdate) && xa(g, n, t, e), f && Hn(t, e, n, "beforeUpdate"), n && Ki(n, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? ne(e.dynamicChildren, d, l, n, i, Gi(t, a), o) : s || ue(e, t, l, null, n, i, Gi(t, a), o, !1), u > 0) {
			if (u & 16) re(l, m, h, n, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let r = e[t], i = m[r], o = h[r];
					(o !== i || r === "value") && c(l, r, i, o, a, n);
				}
			}
			u & 1 && e.children !== t.children && p(l, t.children);
		} else !s && d == null && re(l, m, h, n, a);
		((g = h.onVnodeUpdated) || f) && Hi(() => {
			g && xa(g, n, t, e), f && Hn(t, e, n, "updated");
		}, i);
	}, ne = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === R || !da(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
		}
	}, re = (e, t, n, i, a) => {
		if (t !== n) {
			if (t !== r) for (let r in t) !E(r) && !(r in n) && c(e, r, t[r], null, a, i);
			for (let r in n) {
				if (E(r)) continue;
				let o = n[r], s = t[r];
				o !== s && r !== "value" && c(e, r, s, o, a, i);
			}
			"value" in n && c(e, "value", t.value, n.value, a);
		}
	}, ie = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), D(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (ne(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Ji(e, t, !0)) : ue(e, t, n, f, i, a, s, c, l);
	}, ae = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : oe(t, n, r, i, a, o, c) : O(e, t, c);
	}, oe = (e, t, n, r, i, a, o) => {
		let s = e.component = wa(e, r, i);
		if (xr(e) && (s.ctx.renderer = Se), Na(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ce, o), !e.el) {
				let r = s.subTree = U(na);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else ce(s, e, t, n, i, a, o);
	}, O = (e, t, n) => {
		let r = t.component = e.component;
		if (bi(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			le(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, ce = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Xi(e);
					if (n) {
						t && (t.el = c.el, le(e, t, o)), n.asyncDep.then(() => {
							Hi(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Ki(e, !1), t ? (t.el = c.el, le(e, t, o)) : t = c, n && se(n), (d = t.props && t.props.onVnodeBeforeUpdate) && xa(d, s, t, c), Ki(e, !0);
				let f = _i(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), ye(p), e, i, a), t.el = f.el, u === null && Ci(e, f.el), r && Hi(r, i), (d = t.props && t.props.onVnodeUpdated) && Hi(() => xa(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = br(t);
				if (Ki(e, !1), l && se(l), !m && (o = c && c.onVnodeBeforeMount) && xa(o, d, t), Ki(e, !0), s && we) {
					let t = () => {
						e.subTree = _i(e), we(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = _i(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Hi(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Hi(() => xa(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && br(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Hi(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ne(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => An(u), Ki(e, !0), l();
	}, le = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Oi(e, t.props, r, n), Vi(e, t.children, n), Je(), Nn(e), Ye();
	}, ue = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				pe(l, d, n, r, i, a, o, s, c);
				return;
			} else if (f & 256) {
				de(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && ve(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? pe(l, d, n, r, i, a, o, s, c) : ve(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && D(d, n, r, i, a, o, s, c));
	}, de = (e, t, n, r, a, o, s, c, l) => {
		e ||= i, t ||= i;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let r = t[p] = l ? va(t[p]) : _a(t[p]);
			v(e[p], r, n, null, a, o, s, c, l);
		}
		u > d ? ve(e, a, o, !0, !1, f) : D(t, n, r, a, o, s, c, l, f);
	}, pe = (e, t, n, r, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], i = t[u] = l ? va(t[u]) : _a(t[u]);
			if (da(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], i = t[p] = l ? va(t[p]) : _a(t[p]);
			if (da(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, i = e < d ? t[e].el : r;
				for (; u <= p;) v(null, t[u] = l ? va(t[u]) : _a(t[u]), n, i, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) he(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? va(t[u]) : _a(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let r = e[u];
				if (y >= b) {
					he(r, a, o, !0);
					continue;
				}
				let i;
				if (r.key != null) i = g.get(r.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && da(r, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? he(r, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(r, t[i], n, null, a, o, s, c, l), y++);
			}
			let w = x ? Yi(C) : i;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, i = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Qi(f) : r;
				C[u] === 0 ? v(null, i, n, p, a, o, s, c, l) : x && (_ < 0 || u !== w[_] ? me(i, n, p, 2) : _--);
			}
		}
	}, me = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			me(e.component.subTree, t, n, r);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, r);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, Se);
			return;
		}
		if (c === R) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) me(u[e], t, n, r);
			o(e.anchor, t, n);
			return;
		}
		if (c === ra) {
			S(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) if (r === 0) l.beforeEnter(a), o(a, t, n), Hi(() => l.enter(a), i);
		else {
			let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? s(a) : o(a, t, n);
			}, d = () => {
				a._isLeaving && a[er](!0), r(a, () => {
					u(), c && c();
				});
			};
			i ? i(a, u, d) : d();
		}
		else o(a, t, n);
	}, he = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (Je(), vr(s, null, n, e, !0), Ye()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !br(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && xa(_, t, e), u & 6) k(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Hn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Se, r) : l && !l.hasOnce && (a !== R || d > 0 && d & 64) ? ve(l, t, n, !1, !0) : (a === R && d & 384 || !i && u & 16) && ve(c, t, n), r && ge(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Hi(() => {
			_ && xa(_, t, e), h && Hn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, ge = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === R) {
			_e(n, r);
			return;
		}
		if (t === ra) {
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
	}, _e = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, k = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Zi(c), Zi(l), r && se(r), i.stop(), a && (a.flags |= 8, he(o, e, t, n)), s && Hi(s, t), Hi(() => {
			e.isUnmounted = !0;
		}, t);
	}, ve = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) he(e[o], t, n, r, i);
	}, ye = (e) => {
		if (e.shapeFlag & 6) return ye(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Qn];
		return n ? h(n) : t;
	}, be = !1, xe = (e, t, n) => {
		let r;
		e == null ? t._vnode && (he(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, be ||= (be = !0, Nn(r), Pn(), !1);
	}, Se = {
		p: v,
		um: he,
		m: me,
		r: ge,
		mt: oe,
		mc: D,
		pc: ue,
		pbc: ne,
		n: ye,
		o: e
	}, Ce, we;
	return t && ([Ce, we] = t(Se)), {
		render: xe,
		hydrate: Ce,
		createApp: li(xe, Ce)
	};
}
function Gi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ki({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function qi(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ji(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (p(r) && p(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = va(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Ji(t, a)), a.type === ta && (a.patchFlag === -1 && (a = i[e] = va(a)), a.el = t.el), a.type === na && !a.el && (a.el = t.el);
	}
}
function Yi(e) {
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
function Xi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Xi(t);
}
function Zi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Qi(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? Qi(t.subTree) : null;
}
var $i = (e) => e.__isSuspense;
function ea(e, t) {
	t && t.pendingBranch ? p(e) ? t.effects.push(...e) : t.effects.push(e) : Mn(e);
}
var R = /* @__PURE__ */ Symbol.for("v-fgt"), ta = /* @__PURE__ */ Symbol.for("v-txt"), na = /* @__PURE__ */ Symbol.for("v-cmt"), ra = /* @__PURE__ */ Symbol.for("v-stc"), ia = [], aa = null;
function z(e = !1) {
	ia.push(aa = e ? null : []);
}
function oa() {
	ia.pop(), aa = ia[ia.length - 1] || null;
}
var sa = 1;
function ca(e, t = !1) {
	sa += e, e < 0 && aa && t && (aa.hasOnce = !0);
}
function la(e) {
	return e.dynamicChildren = sa > 0 ? aa || i : null, oa(), sa > 0 && aa && aa.push(e), e;
}
function B(e, t, n, r, i, a) {
	return la(H(e, t, n, r, i, a, !0));
}
function V(e, t, n, r, i) {
	return la(U(e, t, n, r, i, !0));
}
function ua(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function da(e, t) {
	return e.type === t.type && e.key === t.key;
}
var fa = ({ key: e }) => e ?? null, pa = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : v(e) || /* @__PURE__ */ N(e) || _(e) ? {
	i: Ln,
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
		key: t && fa(t),
		ref: t && pa(t),
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
	return s ? (ya(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= v(n) ? 8 : 16), sa > 0 && !o && aa && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && aa.push(c), c;
}
var U = ma;
function ma(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === Rr) && (e = na), ua(e)) {
		let r = ga(e, t, !0);
		return n && ya(r, n), sa > 0 && !a && aa && (r.shapeFlag & 6 ? aa[aa.indexOf(e)] = r : aa.push(r)), r.patchFlag = -2, r;
	}
	if (Ha(e) && (e = e.__vccOpts), t) {
		t = ha(t);
		let { class: e, style: n } = t;
		e && !v(e) && (t.class = k(e)), b(n) && (/* @__PURE__ */ Yt(n) && !p(n) && (n = l({}, n)), t.style = pe(n));
	}
	let o = v(e) ? 1 : $i(e) ? 128 : $n(e) ? 64 : b(e) ? 4 : _(e) ? 2 : 0;
	return H(e, t, n, r, i, o, a, !0);
}
function ha(e) {
	return e ? /* @__PURE__ */ Yt(e) || Ei(e) ? l({}, e) : e : null;
}
function ga(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? ba(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && fa(l),
		ref: t && t.ref ? n && a ? p(a) ? a.concat(pa(t)) : [a, pa(t)] : pa(t) : a,
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
		ssContent: e.ssContent && ga(e.ssContent),
		ssFallback: e.ssFallback && ga(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && pr(u, c.clone(u)), u;
}
function W(e = " ", t = 0) {
	return U(ta, null, e, t);
}
function G(e = "", t = !1) {
	return t ? (z(), V(na, null, e)) : U(na, null, e);
}
function _a(e) {
	return e == null || typeof e == "boolean" ? U(na) : p(e) ? U(R, null, e.slice()) : ua(e) ? va(e) : U(ta, null, String(e));
}
function va(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : ga(e);
}
function ya(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (p(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), ya(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !Ei(t) ? t._ctx = Ln : r === 3 && Ln && (Ln.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else _(t) ? (t = {
		default: t,
		_ctx: Ln
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [W(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function ba(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = k([t.class, r.class]));
		else if (e === "style") t.style = pe([t.style, r.style]);
		else if (s(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(p(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !c(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function xa(e, t, n, r = null) {
	vn(e, t, 7, [n, r]);
}
var Sa = si(), Ca = 0;
function wa(e, t, n) {
	let i = e.type, a = (t ? t.appContext : e.appContext) || Sa, o = {
		uid: Ca++,
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
		propsOptions: Mi(i, a),
		emitsOptions: hi(i, a),
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
	return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = pi.bind(null, o), e.ce && e.ce(o), o;
}
var Ta = null, Ea = () => Ta || Ln, Da, Oa;
{
	let e = fe(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Da = t("__VUE_INSTANCE_SETTERS__", (e) => Ta = e), Oa = t("__VUE_SSR_SETTERS__", (e) => Ma = e);
}
var ka = (e) => {
	let t = Ta;
	return Da(e), e.scope.on(), () => {
		e.scope.off(), Da(t);
	};
}, Aa = () => {
	Ta && Ta.scope.off(), Da(null);
};
function ja(e) {
	return e.vnode.shapeFlag & 4;
}
var Ma = !1;
function Na(e, t = !1, n = !1) {
	t && Oa(t);
	let { props: r, children: i } = e.vnode, a = ja(e);
	Di(e, r, a, t), Bi(e, i, n || t);
	let o = a ? Pa(e, t) : void 0;
	return t && Oa(!1), o;
}
function Pa(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Wr);
	let { setup: r } = n;
	if (r) {
		Je();
		let n = e.setupContext = r.length > 1 ? Ba(e) : null, i = ka(e), a = _n(r, e, 0, [e.props, n]), o = x(a);
		if (Ye(), i(), (o || e.sp) && !br(e) && hr(e), o) {
			if (a.then(Aa, Aa), t) return a.then((n) => {
				Fa(e, n, t);
			}).catch((t) => {
				yn(t, e, 0);
			});
			e.asyncDep = a;
		} else Fa(e, a, t);
	} else Ra(e, t);
}
function Fa(e, t, n) {
	_(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : b(t) && (e.setupState = nn(t)), Ra(e, n);
}
var Ia, La;
function Ra(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && Ia && !r.render) {
			let t = r.template || Zr(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r;
				r.render = Ia(t, l(l({
					isCustomElement: n,
					delimiters: a
				}, i), o));
			}
		}
		e.render = r.render || a, La && La(e);
	}
	{
		let t = ka(e);
		Je();
		try {
			qr(e);
		} finally {
			Ye(), t();
		}
	}
}
var za = { get(e, t) {
	return at(e, "get", ""), e[t];
} };
function Ba(e) {
	return {
		attrs: new Proxy(e.attrs, za),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Va(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(nn(Xt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Hr) return Hr[n](e);
		},
		has(e, t) {
			return t in e || t in Hr;
		}
	}) : e.proxy;
}
function Ha(e) {
	return _(e) && "__vccOpts" in e;
}
var K = (e, t) => /* @__PURE__ */ un(e, t, Ma);
function Ua(e, t, n) {
	try {
		ca(-1);
		let r = arguments.length;
		return r === 2 ? b(t) && !p(t) ? ua(t) ? U(e, null, [t]) : U(e, t) : U(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && ua(n) && (n = [n]), U(e, t, n));
	} finally {
		ca(1);
	}
}
var Wa = "3.5.34", Ga = void 0, Ka = typeof window < "u" && window.trustedTypes;
if (Ka) try {
	Ga = /* @__PURE__ */ Ka.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var qa = Ga ? (e) => Ga.createHTML(e) : (e) => e, Ja = "http://www.w3.org/2000/svg", Ya = "http://www.w3.org/1998/Math/MathML", Xa = typeof document < "u" ? document : null, Za = Xa && /* @__PURE__ */ Xa.createElement("template"), Qa = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Xa.createElementNS(Ja, e) : t === "mathml" ? Xa.createElementNS(Ya, e) : n ? Xa.createElement(e, { is: n }) : Xa.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Xa.createTextNode(e),
	createComment: (e) => Xa.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Xa.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			Za.innerHTML = qa(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Za.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, $a = "transition", eo = "animation", to = /* @__PURE__ */ Symbol("_vtc"), no = {
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
}, ro = /* @__PURE__ */ l({}, ir, no), io = /* @__PURE__ */ ((e) => (e.displayName = "Transition", e.props = ro, e))((e, { slots: t }) => Ua(cr, so(e), t)), ao = (e, t = []) => {
	p(e) ? e.forEach((e) => e(...t)) : e && e(...t);
}, oo = (e) => e ? p(e) ? e.some((e) => e.length > 1) : e.length > 1 : !1;
function so(e) {
	let t = {};
	for (let n in e) n in no || (t[n] = e[n]);
	if (e.css === !1) return t;
	let { name: n = "v", type: r, duration: i, enterFromClass: a = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: s = `${n}-enter-to`, appearFromClass: c = a, appearActiveClass: u = o, appearToClass: d = s, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: p = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, h = co(i), g = h && h[0], _ = h && h[1], { onBeforeEnter: v, onEnter: y, onEnterCancelled: b, onLeave: x, onLeaveCancelled: S, onBeforeAppear: C = v, onAppear: w = y, onAppearCancelled: ee = b } = t, T = (e, t, n, r) => {
		e._enterCancelled = r, fo(e, t ? d : s), fo(e, t ? u : o), n && n();
	}, E = (e, t) => {
		e._isLeaving = !1, fo(e, f), fo(e, m), fo(e, p), t && t();
	}, D = (e) => (t, n) => {
		let i = e ? w : y, o = () => T(t, e, n);
		ao(i, [t, o]), po(() => {
			fo(t, e ? c : a), uo(t, e ? d : s), oo(i) || ho(t, r, g, o);
		});
	};
	return l(t, {
		onBeforeEnter(e) {
			ao(v, [e]), uo(e, a), uo(e, o);
		},
		onBeforeAppear(e) {
			ao(C, [e]), uo(e, c), uo(e, u);
		},
		onEnter: D(!1),
		onAppear: D(!0),
		onLeave(e, t) {
			e._isLeaving = !0;
			let n = () => E(e, t);
			uo(e, f), e._enterCancelled ? (uo(e, p), yo(e)) : (yo(e), uo(e, p)), po(() => {
				e._isLeaving && (fo(e, f), uo(e, m), oo(x) || ho(e, r, _, n));
			}), ao(x, [e, n]);
		},
		onEnterCancelled(e) {
			T(e, !1, void 0, !0), ao(b, [e]);
		},
		onAppearCancelled(e) {
			T(e, !0, void 0, !0), ao(ee, [e]);
		},
		onLeaveCancelled(e) {
			E(e), ao(S, [e]);
		}
	});
}
function co(e) {
	if (e == null) return null;
	if (b(e)) return [lo(e.enter), lo(e.leave)];
	{
		let t = lo(e);
		return [t, t];
	}
}
function lo(e) {
	return ue(e);
}
function uo(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e[to] || (e[to] = /* @__PURE__ */ new Set())).add(t);
}
function fo(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
	let n = e[to];
	n && (n.delete(t), n.size || (e[to] = void 0));
}
function po(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
var mo = 0;
function ho(e, t, n, r) {
	let i = e._endId = ++mo, a = () => {
		i === e._endId && r();
	};
	if (n != null) return setTimeout(a, n);
	let { type: o, timeout: s, propCount: c } = go(e, t);
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
function go(e, t) {
	let n = window.getComputedStyle(e), r = (e) => (n[e] || "").split(", "), i = r(`${$a}Delay`), a = r(`${$a}Duration`), o = _o(i, a), s = r(`${eo}Delay`), c = r(`${eo}Duration`), l = _o(s, c), u = null, d = 0, f = 0;
	t === $a ? o > 0 && (u = $a, d = o, f = a.length) : t === eo ? l > 0 && (u = eo, d = l, f = c.length) : (d = Math.max(o, l), u = d > 0 ? o > l ? $a : eo : null, f = u ? u === $a ? a.length : c.length : 0);
	let p = u === $a && /\b(?:transform|all)(?:,|$)/.test(r(`${$a}Property`).toString());
	return {
		type: u,
		timeout: d,
		propCount: f,
		hasTransform: p
	};
}
function _o(e, t) {
	for (; e.length < t.length;) e = e.concat(e);
	return Math.max(...t.map((t, n) => vo(t) + vo(e[n])));
}
function vo(e) {
	return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function yo(e) {
	return (e ? e.ownerDocument : document).body.offsetHeight;
}
function bo(e, t, n) {
	let r = e[to];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var xo = /* @__PURE__ */ Symbol("_vod"), So = /* @__PURE__ */ Symbol("_vsh"), Co = /* @__PURE__ */ Symbol(""), wo = /(?:^|;)\s*display\s*:/;
function To(e, t, n) {
	let r = e.style, i = v(n), a = !1;
	if (n && !i) {
		if (t) if (v(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? Do(r, t, "");
		}
		else for (let e in t) n[e] ?? Do(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Do(r, i, "") : jo(e, i, !v(t) && t ? t[i] : void 0, o) || Do(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Co];
			e && (n += ";" + e), r.cssText = n, a = wo.test(n);
		}
	} else t && e.removeAttribute("style");
	xo in e && (e[xo] = a ? r.display : "", e[So] && (r.display = "none"));
}
var Eo = /\s*!important$/;
function Do(e, t, n) {
	if (p(n)) n.forEach((n) => Do(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = Ao(e, t);
		Eo.test(n) ? e.setProperty(ie(r), n.replace(Eo, ""), "important") : e[r] = n;
	}
}
var Oo = [
	"Webkit",
	"Moz",
	"ms"
], ko = {};
function Ao(e, t) {
	let n = ko[t];
	if (n) return n;
	let r = ne(t);
	if (r !== "filter" && r in e) return ko[t] = r;
	r = ae(r);
	for (let n = 0; n < Oo.length; n++) {
		let i = Oo[n] + r;
		if (i in e) return ko[t] = i;
	}
	return t;
}
function jo(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && v(r) && n === r;
}
var Mo = "http://www.w3.org/1999/xlink";
function No(e, t, n, r, i, a = ye(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Mo, t.slice(6, t.length)) : e.setAttributeNS(Mo, t, n) : n == null || a && !be(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : y(n) ? String(n) : n);
}
function Po(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? qa(n) : n);
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
function Fo(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Io(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Lo = /* @__PURE__ */ Symbol("_vei");
function Ro(e, t, n, r, i = null) {
	let a = e[Lo] || (e[Lo] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Bo(t);
		r ? Fo(e, n, a[t] = Wo(r, i), s) : o && (Io(e, n, o, s), a[t] = void 0);
	}
}
var zo = /(?:Once|Passive|Capture)$/;
function Bo(e) {
	let t;
	if (zo.test(e)) {
		t = {};
		let n;
		for (; n = e.match(zo);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : ie(e.slice(2)), t];
}
var Vo = 0, Ho = /* @__PURE__ */ Promise.resolve(), Uo = () => Vo ||= (Ho.then(() => Vo = 0), Date.now());
function Wo(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		vn(Go(e, n.value), t, 5, [e]);
	};
	return n.value = e, n.attached = Uo(), n;
}
function Go(e, t) {
	if (p(t)) {
		let n = e.stopImmediatePropagation;
		return e.stopImmediatePropagation = () => {
			n.call(e), e._stopped = !0;
		}, t.map((e) => (t) => !t._stopped && e && e(t));
	} else return t;
}
var Ko = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, qo = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? bo(e, r, o) : t === "style" ? To(e, n, r) : s(t) ? c(t) || Ro(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Jo(e, t, r, o)) ? (Po(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && No(e, t, r, o, a, t !== "value")) : e._isVueCE && (Yo(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !v(r))) ? Po(e, ne(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), No(e, t, r, o));
};
function Jo(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Ko(t) && _(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Ko(t) && v(n) ? !1 : t in e;
}
function Yo(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = ne(t);
	return Array.isArray(n) ? n.some((e) => ne(e) === r) : Object.keys(n).some((e) => ne(e) === r);
}
var Xo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return p(t) ? (e) => se(t, e) : t;
};
function Zo(e) {
	e.target.composing = !0;
}
function Qo(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var $o = /* @__PURE__ */ Symbol("_assign");
function es(e, t, n) {
	return t && (e = e.trim()), n && (e = le(e)), e;
}
var ts = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[$o] = Xo(i);
		let a = r || i.props && i.props.type === "number";
		Fo(e, t ? "change" : "input", (t) => {
			t.target.composing || e[$o](es(e.value, n, a));
		}), (n || a) && Fo(e, "change", () => {
			e.value = es(e.value, n, a);
		}), t || (Fo(e, "compositionstart", Zo), Fo(e, "compositionend", Qo), Fo(e, "change", Qo));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[$o] = Xo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? le(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, ns = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = h(t);
		Fo(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? le(is(e)) : is(e));
			e[$o](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, On(() => {
				e._assigning = !1;
			});
		}), e[$o] = Xo(r);
	},
	mounted(e, { value: t }) {
		rs(e, t);
	},
	beforeUpdate(e, t, n) {
		e[$o] = Xo(n);
	},
	updated(e, { value: t }) {
		e._assigning || rs(e, t);
	}
};
function rs(e, t) {
	let n = e.multiple, r = p(t);
	if (!(n && !r && !h(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = is(a);
			if (n) if (r) {
				let e = typeof o;
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = Ce(t, o) > -1;
			} else a.selected = t.has(o);
			else if (Se(is(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function is(e) {
	return "_value" in e ? e._value : e.value;
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
		let r = ie(n.key);
		if (t.some((e) => e === r || cs[e] === r)) return e(n);
	}));
}, us = /* @__PURE__ */ l({ patchProp: qo }, Qa), ds;
function fs() {
	return ds ||= Ui(us);
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
//#region src/view/components/SubView.vue?vue&type=script&setup=true&lang.ts
var gs = { class: "sub-view__header" }, _s = /* @__PURE__ */ I({
	__name: "SubView",
	props: {
		open: { type: Boolean },
		title: {}
	},
	emits: ["close"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ P(null), a = /* @__PURE__ */ P(null), o = null, s = 0;
		Jn(() => n.open, async (e) => {
			if (e) {
				await On(), o = c(a.value), s = o?.scrollTop ?? 0, o && (o.scrollTop = 0), i.value && (i.value.scrollTop = 0);
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
		return (t, n) => (z(), V(io, { name: "sub-view" }, {
			default: Bn(() => [e.open ? (z(), B("section", {
				key: 0,
				ref_key: "rootElement",
				ref: a,
				class: "sub-view",
				role: "dialog",
				"aria-modal": "true"
			}, [H("div", gs, [H("h2", null, A(e.title), 1), H("button", {
				type: "button",
				class: "sub-view__close",
				onClick: n[0] ||= (e) => r("close")
			}, "Close")]), H("div", {
				ref_key: "bodyElement",
				ref: i,
				class: "sub-view__body"
			}, [zr(t.$slots, "default", {}, void 0, !0)], 512)], 512)) : G("", !0)]),
			_: 3
		}));
	}
}), vs = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, ys = /* @__PURE__ */ vs(_s, [["__scopeId", "data-v-2d7058cd"]]), bs = {
	key: 0,
	class: "species-builder__confirm-panel"
}, xs = { class: "species-builder__confirm-actions" }, Ss = /* @__PURE__ */ I({
	__name: "DeleteConfirmationSubView",
	props: { message: {} },
	emits: ["close", "confirm"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (z(), V(ys, {
			open: !!e.message,
			title: "Confirm Deletion",
			onClose: r[2] ||= (e) => n("close")
		}, {
			default: Bn(() => [e.message ? (z(), B("div", bs, [H("p", null, A(e.message), 1), H("div", xs, [H("button", {
				class: "species-builder__danger-action",
				type: "button",
				onClick: r[0] ||= (e) => n("confirm")
			}, " Delete "), H("button", {
				type: "button",
				onClick: r[1] ||= (e) => n("close")
			}, "Cancel")])])) : G("", !0)]),
			_: 1
		}, 8, ["open"]));
	}
});
//#endregion
//#region src/functions/species-builder/linked-grant-records.ts
function Cs(e) {
	if (!e || e.length === 0) return;
	let t = e.map((e) => e.name.trim()).filter((e) => e.length > 0);
	return t.length > 0 ? t : void 0;
}
function ws(e) {
	if (!e || e.length === 0) return;
	let t = e.flatMap((e) => {
		let t = e.choices.map((e) => e.name.trim()).filter((e) => e.length > 0);
		return t.length > 0 ? [t.join(", ")] : [];
	});
	return t.length > 0 ? t : void 0;
}
//#endregion
//#region src/functions/species-builder/replacement-row-records.ts
function Ts(e) {
	if (!e) return;
	let t = e.flatMap((e) => {
		let t = e.rolled.name.trim(), n = e.replacement.name.trim();
		return t && n ? [[t, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function Es(e) {
	if (!e) return;
	let t = e.flatMap((e) => {
		let t = e.rolled.name.trim(), n = e.replacements.map((e) => e.name.trim()).filter((e) => e.length > 0);
		return t && n.length > 0 ? [[t, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
//#endregion
//#region src/functions/species-builder/species-config.ts
function Ds(e) {
	let t = ks();
	for (let n of e.definitions) As(t, n);
	return t;
}
function Os() {
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
function ks() {
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
function As(e, t) {
	e.species[t.key] = t.name, q(e.speciesCharacteristics, t.key, t.characteristics), q(e.speciesSkills, t.key, Ns(t)), q(e.speciesTalents, t.key, Ps(t)), q(e.speciesRandomTalents, t.key, t.randomTalents), q(e.speciesTalentReplacement, t.key, Ms(t)), q(e.speciesTraits, t.key, Fs(t)), q(e.speciesMovement, t.key, t.movement), q(e.speciesFate, t.key, t.fate), q(e.speciesRes, t.key, t.resilience), q(e.speciesExtra, t.key, t.extra), q(e.speciesAge, t.key, t.age), q(e.speciesHeight, t.key, t.height), q(e.speciesCareerReplacements, t.key, Is(t)), t.includeInExtraSpecies && e.extraSpecies.push(t.key);
	for (let n of t.subspecies ?? []) {
		let r = e.subspecies[t.key] ?? {};
		r[n.key] = js(n), e.subspecies[t.key] = r;
	}
}
function js(e) {
	let t = { name: e.name };
	return q(t, "characteristics", e.characteristics), q(t, "skills", Ns(e)), q(t, "talents", Ps(e)), q(t, "speciesTraits", Fs(e)), q(t, "randomTalents", e.randomTalents), q(t, "talentReplacement", Ms(e)), q(t, "movement", e.movement), q(t, "fate", e.fate), q(t, "resilience", e.resilience), q(t, "extra", e.extra), t;
}
function Ms(e) {
	return Ts(e.talentReplacementRows) ?? e.talentReplacements;
}
function Ns(e) {
	return Cs(e.linkedSkills) ?? e.skills;
}
function Ps(e) {
	return ws(e.linkedTalents) ?? e.talents;
}
function Fs(e) {
	return Cs(e.linkedTraits) ?? e.traits;
}
function Is(e) {
	return Es(e.careerReplacementRows) ?? e.careerReplacements;
}
function q(e, t, n) {
	n !== void 0 && (e[t] = n);
}
//#endregion
//#region src/shared/object-readers.ts
function J(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function Y(e, t) {
	let n = e;
	for (let e of t) {
		if (!J(n) || !(e in n)) return;
		n = n[e];
	}
	return n;
}
function X(e, t) {
	let n = Y(e, t);
	return typeof n == "string" ? n.trim() : "";
}
function Ls(e, t) {
	let n = Y(e, t);
	return Array.isArray(n) ? n.filter((e) => typeof e == "string") : [];
}
function Rs(e, t, n = 0) {
	return zs(e, t) ?? n;
}
function zs(e, t) {
	for (let n of t) {
		let t = Number(Y(e, n));
		if (Number.isFinite(t)) return t;
	}
	return null;
}
function Bs(e, t, n = !1) {
	for (let n of t) {
		let t = Y(e, n);
		if (typeof t == "boolean") return t;
	}
	return n;
}
function Vs(e) {
	return Array.isArray(e) ? e.flatMap(Vs) : typeof e == "string" ? e.split(/[\n\r,;]/).map((e) => e.trim()).filter(Boolean) : J(e) ? Object.values(e).flatMap(Vs) : [];
}
function Hs(e, t, n) {
	let r = e;
	for (let e of t.slice(0, -1)) {
		let t = r[e];
		J(t) || (r[e] = {}), r = r[e];
	}
	r[t[t.length - 1] ?? ""] = n;
}
//#endregion
//#region src/types/wfrp4e/characteristics.ts
var Z = {
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
}, Us = {
	[Z.Agility]: "Agility",
	[Z.BallisticSkill]: "Ballistic Skill",
	[Z.Dexterity]: "Dexterity",
	[Z.Fellowship]: "Fellowship",
	[Z.Initiative]: "Initiative",
	[Z.Intelligence]: "Intelligence",
	[Z.Strength]: "Strength",
	[Z.Toughness]: "Toughness",
	[Z.WeaponSkill]: "Weapon Skill",
	[Z.Willpower]: "Willpower"
}, Ws = {
	agility: Z.Agility,
	"ballistic skill": Z.BallisticSkill,
	dexterity: Z.Dexterity,
	fellowship: Z.Fellowship,
	initiative: Z.Initiative,
	intelligence: Z.Intelligence,
	strength: Z.Strength,
	toughness: Z.Toughness,
	"weapon skill": Z.WeaponSkill,
	willpower: Z.Willpower
};
function Gs(e) {
	return e in Us;
}
//#endregion
//#region src/functions/species-builder/config-keys.ts
function Ks(e) {
	return e.trim().toLocaleLowerCase().replaceAll(/[^\da-z]+/g, "-").replaceAll(/^-+|-+$/g, "");
}
//#endregion
//#region src/functions/species-builder/replacement-row-normalization.ts
function qs(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!J(e)) return [];
		let t = Ys(e.rolled, "talent"), n = Ys(e.replacement, "talent");
		return !t.name || !n.name ? [] : [{
			replacement: n,
			rolled: t
		}];
	});
	return t.length > 0 ? t : void 0;
}
function Js(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!J(e)) return [];
		let t = Ys(e.rolled, "career"), n = Array.isArray(e.replacements) ? e.replacements.flatMap((e) => {
			let t = Ys(e, "career");
			return t.name ? [t] : [];
		}) : [];
		return !t.name || n.length === 0 ? [] : [{
			replacements: n,
			rolled: t
		}];
	});
	return t.length > 0 ? t : void 0;
}
function Ys(e, t) {
	if (typeof e == "string") return { name: Qs(e) ?? "" };
	if (!J(e)) return { name: "" };
	let n = Xs(e.item, t), r = Qs(e.name) ?? n?.name ?? "";
	return n ? {
		item: n,
		name: r
	} : { name: r };
}
function Xs(e, t) {
	if (!J(e)) return;
	let n = Qs(e.name), r = Zs(e.type), i = Qs(e.uuid);
	if (!n || r !== t || !i) return;
	let a = {
		name: n,
		type: r,
		uuid: i
	}, o = Qs(e.img);
	return o && (a.img = o), a;
}
function Zs(e) {
	return e === "career" || e === "skill" || e === "talent" || e === "trait" ? e : void 0;
}
function Qs(e) {
	if (typeof e == "string") return e.trim() || void 0;
}
//#endregion
//#region src/functions/species-builder/linked-grant-normalization.ts
function $s(e, t) {
	if (!Array.isArray(e)) return;
	let n = e.flatMap((e) => {
		let n = Ys(e, t);
		return n.name ? [n] : [];
	});
	return n.length > 0 ? n : void 0;
}
function ec(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!J(e) || !Array.isArray(e.choices)) return [];
		let t = e.choices.flatMap((e) => {
			let t = Ys(e, "talent");
			return t.name ? [t] : [];
		});
		return t.length > 0 ? [{ choices: t }] : [];
	});
	return t.length > 0 ? t : void 0;
}
//#endregion
//#region src/functions/species-builder/species-settings-normalization.ts
var tc = Object.values(Z);
function nc(e) {
	return !J(e) || !Array.isArray(e.definitions) ? {
		definitions: [],
		showGeneratedConfigTab: !1
	} : {
		definitions: e.definitions.flatMap(rc),
		showGeneratedConfigTab: e.showGeneratedConfigTab === !0
	};
}
function rc(e) {
	if (!J(e)) return [];
	let t = oc(e.key), n = sc(e.name);
	if (!t || !n) return [];
	let r = {
		includeInExtraSpecies: e.includeInExtraSpecies === !0,
		key: t,
		name: n
	};
	return Q(r, "characteristics", pc(e.characteristics)), Q(r, "skills", lc(e.skills)), Q(r, "linkedSkills", $s(e.linkedSkills, "skill")), Q(r, "talents", lc(e.talents)), Q(r, "linkedTalents", ec(e.linkedTalents)), Q(r, "randomTalents", dc(e.randomTalents)), Q(r, "talentReplacementRows", qs(e.talentReplacementRows)), Q(r, "talentReplacements", uc(e.talentReplacements)), Q(r, "traits", lc(e.traits)), Q(r, "linkedTraits", $s(e.linkedTraits, "trait")), Q(r, "movement", cc(e.movement)), Q(r, "fate", cc(e.fate)), Q(r, "resilience", cc(e.resilience)), Q(r, "extra", cc(e.extra)), Q(r, "age", sc(e.age)), Q(r, "height", mc(e.height)), Q(r, "careerReplacements", fc(e.careerReplacements)), Q(r, "careerReplacementRows", Js(e.careerReplacementRows)), Q(r, "subspecies", ic(e.subspecies)), [r];
}
function ic(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap(ac);
	return t.length > 0 ? t : void 0;
}
function ac(e) {
	if (!J(e)) return [];
	let t = oc(e.key), n = sc(e.name);
	if (!t || !n) return [];
	let r = {
		key: t,
		name: n
	};
	return Q(r, "characteristics", pc(e.characteristics)), Q(r, "skills", lc(e.skills)), Q(r, "linkedSkills", $s(e.linkedSkills, "skill")), Q(r, "talents", lc(e.talents)), Q(r, "linkedTalents", ec(e.linkedTalents)), Q(r, "traits", lc(e.traits)), Q(r, "linkedTraits", $s(e.linkedTraits, "trait")), Q(r, "randomTalents", dc(e.randomTalents)), Q(r, "talentReplacementRows", qs(e.talentReplacementRows)), Q(r, "talentReplacements", uc(e.talentReplacements)), Q(r, "movement", cc(e.movement)), Q(r, "fate", cc(e.fate)), Q(r, "resilience", cc(e.resilience)), Q(r, "extra", cc(e.extra)), [r];
}
function oc(e) {
	return typeof e == "string" ? Ks(e) : "";
}
function sc(e) {
	if (typeof e == "string") return e.trim() || void 0;
}
function cc(e) {
	let t = Number(e);
	return Number.isFinite(t) ? t : void 0;
}
function lc(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		let t = sc(e);
		return t ? [t] : [];
	});
	return t.length > 0 ? t : void 0;
}
function uc(e) {
	if (!J(e)) return;
	let t = Object.entries(e).flatMap(([e, t]) => {
		let n = sc(e), r = sc(t);
		return n && r ? [[n, r]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function dc(e) {
	if (!J(e)) return;
	let t = Object.entries(e).flatMap(([e, t]) => {
		let n = sc(e), r = cc(t);
		return n && r !== void 0 ? [[n, r]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function fc(e) {
	if (!J(e)) return;
	let t = Object.entries(e).flatMap(([e, t]) => {
		let n = sc(e), r = lc(t);
		return n && r ? [[n, r]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function pc(e) {
	if (!J(e)) return;
	let t = tc.flatMap((t) => {
		let n = sc(e[t]);
		return n ? [[t, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function mc(e) {
	if (!J(e)) return;
	let t = {};
	return Q(t, "die", sc(e.die)), Q(t, "feet", cc(e.feet)), Q(t, "inches", cc(e.inches)), Object.keys(t).length > 0 ? t : void 0;
}
function Q(e, t, n) {
	n !== void 0 && (e[t] = n);
}
//#endregion
//#region src/view/apps/species-builder/editor/field-formatters.ts
function hc(e) {
	let t = e.split(/\r?\n/).map((e) => e.trim()).filter((e) => e.length > 0);
	return t.length > 0 ? t : void 0;
}
function gc(e) {
	let t = Sc(e).flatMap(([e, t]) => t ? [[e, t]] : []);
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function _c(e) {
	let t = Sc(e).flatMap(([e, t]) => {
		let n = xc(t);
		return n === void 0 ? [] : [[e, n]];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function vc(e) {
	let t = Sc(e).flatMap(([e, t]) => {
		let n = t.split(",").map((e) => e.trim()).filter((e) => e.length > 0);
		return n.length > 0 ? [[e, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function yc(e) {
	let t = e.trim();
	return t.length > 0 ? t : void 0;
}
function bc(e) {
	return e.length > 0 ? e : void 0;
}
function xc(e) {
	let t = e.trim();
	if (!t) return;
	let n = Number(t);
	return Number.isFinite(n) ? n : void 0;
}
function Sc(e) {
	return e.split(/\r?\n/).flatMap((e) => {
		let t = e.indexOf(":");
		if (t < 0) return [];
		let n = e.slice(0, t).trim(), r = e.slice(t + 1).trim();
		return n ? [[n, r]] : [];
	});
}
//#endregion
//#region src/view/apps/species-builder/editor/utils.ts
function Cc(e, t) {
	return e === "careerReplacements" ? vc(t) : e === "randomTalents" ? _c(t) : gc(t);
}
function wc(e, t) {
	return e === "randomTalents" ? _c(t) : gc(t);
}
function Tc(e, t, n) {
	let r = { ...e };
	return n === void 0 ? delete r[t] : r[t] = n, r;
}
function Ec(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.key.trim();
		e && t.set(e, (t.get(e) ?? 0) + 1);
	}
	return [...t.entries()].flatMap(([e, t]) => t > 1 ? [e] : []);
}
function Dc(e) {
	let t = /* @__PURE__ */ new Set();
	return e.map((e) => {
		let n = Lc(e);
		return n.key = jc(e.key, e.name, "new-species", t), e.subspecies && (n.subspecies = Ac(e.subspecies)), n;
	});
}
function Oc(e) {
	return Ks(e.name) || "new-species";
}
function kc(e) {
	return Ks(e.name) || "new-subspecies";
}
function Ac(e) {
	let t = /* @__PURE__ */ new Set();
	return e.map((e) => ({
		...Lc(e),
		key: jc(e.key, e.name, "new-subspecies", t)
	}));
}
function jc(e, t, n, r) {
	let i = Ks(e);
	if (i) return r.add(i), i;
	let a = Mc(Ks(t) || n, r);
	return r.add(a), a;
}
function Mc(e, t) {
	if (!t.has(e)) return e;
	let n = 2, r = `${e}-${n}`;
	for (; t.has(r);) n += 1, r = `${e}-${n}`;
	return r;
}
function Nc(e) {
	return e.flatMap((e) => {
		let t = Ec(e.subspecies ?? []);
		return t.length > 0 ? [{
			keys: t,
			speciesName: e.name
		}] : [];
	});
}
function Pc(e) {
	return e.flatMap((e) => (e.subspecies ?? []).flatMap((t, n) => t.key.trim() && t.name.trim() ? [] : [{
		index: n,
		speciesName: e.name
	}]));
}
function Fc(e) {
	return JSON.stringify(e);
}
function Ic(e) {
	return JSON.stringify(e, null, 2);
}
function Lc(e) {
	return JSON.parse(JSON.stringify(e));
}
function Rc(e) {
	return e instanceof Error ? e.message : "Unknown Species Builder error.";
}
//#endregion
//#region src/view/apps/species-builder/editor/definition-actions.ts
function zc(e) {
	function t() {
		i({
			includeInExtraSpecies: !0,
			key: "",
			name: "New Species"
		});
	}
	function n() {
		i(Os());
	}
	function r() {
		let t = e.selectedDefinition.value;
		if (!t) return;
		let n = Lc(t);
		n.key = h(`${n.key}-copy`), n.name = `${n.name} Copy`, i(n);
	}
	function i(t) {
		e.definitions.value = [...e.definitions.value, Lc(t)], e.selectedIndex.value = e.definitions.value.length - 1, e.message.value = "";
	}
	function a() {
		e.selectedDefinition.value && (e.definitions.value = e.definitions.value.filter((t, n) => n !== e.selectedIndex.value), e.selectedIndex.value = e.definitions.value.length === 0 ? -1 : Math.min(e.selectedIndex.value, e.definitions.value.length - 1), e.message.value = "");
	}
	function o(t) {
		e.selectedIndex.value = t;
	}
	function s(e, t) {
		m((n) => Tc(n, e, bc(t)));
	}
	function c(e, t) {
		m((n) => ({
			...n,
			[e]: t
		}));
	}
	function l(e, t) {
		m((n) => Tc(n, e, xc(t)));
	}
	function u(e, t) {
		m((n) => {
			let r = n.height ? { ...n.height } : {}, i = e === "die" ? yc(t) : xc(t);
			return i === void 0 ? delete r[e] : r[e] = i, Tc(n, "height", Object.keys(r).length > 0 ? r : void 0);
		});
	}
	function d(e, t) {
		m((n) => {
			let r = n.characteristics ? { ...n.characteristics } : {}, i = yc(t);
			return i ? r[e] = i : delete r[e], Tc(n, "characteristics", Object.keys(r).length > 0 ? r : void 0);
		});
	}
	function f(e, t) {
		m((n) => Tc(n, e, hc(t)));
	}
	function p(e, t) {
		m((n) => Tc(n, e, Cc(e, t)));
	}
	function m(t) {
		let n = e.selectedDefinition.value;
		n && (e.definitions.value = e.definitions.value.map((r, i) => i === e.selectedIndex.value ? t(Lc(n)) : r), e.message.value = "");
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
function Bc(e, t) {
	return t && t.length > 0 ? t.map(Yc) : (e ?? []).map((e) => ({ name: e }));
}
function Vc(e, t) {
	return t && t.length > 0 ? t.map((e) => ({ choices: e.choices.map(Yc) })) : (e ?? []).map((e) => ({ choices: Jc(e).map((e) => ({ name: e })) }));
}
function Hc(e) {
	return e.map((e) => e.name.trim()).filter((e) => e.length > 0);
}
function Uc(e) {
	return e.flatMap((e) => {
		let t = Hc(e.choices);
		return t.length > 0 ? [t.join(", ")] : [];
	});
}
function Wc(e, t, n) {
	return e.map((e, r) => r === t ? { name: n } : Yc(e));
}
function Gc(e, t, n) {
	return e.map((e, r) => r === t ? {
		item: n,
		name: n.name
	} : Yc(e));
}
function Kc(e, t, n, r) {
	return e.map((e, i) => i === t ? { choices: Wc(e.choices, n, r) } : Xc(e));
}
function qc(e, t, n, r) {
	return e.map((e, i) => i === t ? { choices: Gc(e.choices, n, r) } : Xc(e));
}
function Jc(e) {
	let t = e.split(",").map((e) => e.trim()).filter((e) => e.length > 0);
	return t.length > 0 ? t : [e];
}
function Yc(e) {
	return e.item ? {
		item: { ...e.item },
		name: e.name
	} : { name: e.name };
}
function Xc(e) {
	return { choices: e.choices.map(Yc) };
}
//#endregion
//#region src/view/apps/species-builder/editor/linked-grant-actions.ts
var Zc = {
	skills: "skill",
	talents: "talent",
	traits: "trait"
};
function Qc(e) {
	async function t(t, n) {
		let a = await e.resolveDroppedItem(Zc[t], n);
		if (t === "talents") {
			let t = e.selectedDefinition.value?.linkedTalents ?? f();
			Uc(t).includes(a.name) || i([...t, { choices: [{
				item: a,
				name: a.name
			}] }]);
			return;
		}
		let o = d(t);
		Hc(o).includes(a.name) || r(t, [...o, {
			item: a,
			name: a.name
		}]);
	}
	async function n(t, n, r) {
		let i = await e.resolveDroppedItem(Zc[n], r), a = e.selectedDefinition.value?.subspecies?.[t];
		if (!a) return;
		if (n === "talents") {
			let e = a.linkedTalents ?? f(a);
			Uc(e).includes(i.name) || c(t, [...e, { choices: [{
				item: i,
				name: i.name
			}] }]);
			return;
		}
		let o = $c(a, n);
		Hc(o).includes(i.name) || s(t, n, [...o, {
			item: i,
			name: i.name
		}]);
	}
	function r(t, n) {
		e.definitionActions.updateSelectedDefinition((e) => el(e, t, n));
	}
	function i(t) {
		e.definitionActions.updateSelectedDefinition((e) => tl(e, t));
	}
	async function a(t, n, i) {
		let a = await e.resolveDroppedItem(Zc[t], i);
		r(t, Gc(d(t), n, a));
	}
	async function o(t, n, r) {
		let a = await e.resolveDroppedItem("talent", r);
		i(qc(e.selectedDefinition.value?.linkedTalents ?? f(), t, n, a));
	}
	function s(t, n, r) {
		e.subspeciesActions.updateSubspecies(t, (e) => el(e, n, r));
	}
	function c(t, n) {
		e.subspeciesActions.updateSubspecies(t, (e) => tl(e, n));
	}
	async function l(t, n, r, i) {
		let a = e.selectedDefinition.value?.subspecies?.[t];
		if (!a) return;
		let o = await e.resolveDroppedItem(Zc[n], i);
		s(t, n, Gc($c(a, n), r, o));
	}
	async function u(t, n, r, i) {
		let a = e.selectedDefinition.value?.subspecies?.[t];
		if (!a) return;
		let o = await e.resolveDroppedItem("talent", i);
		c(t, qc(a.linkedTalents ?? f(a), n, r, o));
	}
	function d(t) {
		let n = e.selectedDefinition.value;
		return n ? $c(n, t) : [];
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
function $c(e, t) {
	let n = t === "skills" ? e.linkedSkills : e.linkedTraits;
	return n && n.length > 0 ? n : (e[t] ?? []).map((e) => ({ name: e }));
}
function el(e, t, n) {
	let r = t === "skills" ? "linkedSkills" : "linkedTraits", i = Hc(n);
	return Tc(Tc(e, r, n.length > 0 ? n : void 0), t, i.length > 0 ? i : void 0);
}
function tl(e, t) {
	let n = Uc(t);
	return Tc(Tc(e, "linkedTalents", t.length > 0 ? t : void 0), "talents", n.length > 0 ? n : void 0);
}
//#endregion
//#region src/view/apps/species-builder/editor/replacement-rows.ts
function nl() {
	return { name: "" };
}
function rl() {
	return {
		replacement: nl(),
		rolled: nl()
	};
}
function il() {
	return {
		replacements: [nl()],
		rolled: nl()
	};
}
function al(e) {
	return e.talentReplacementRows?.length ? pl(e.talentReplacementRows) : sl(e.talentReplacements);
}
function ol(e) {
	return e.careerReplacementRows?.length ? pl(e.careerReplacementRows) : cl(e.careerReplacements);
}
function sl(e) {
	return Object.entries(e ?? {}).map(([e, t]) => ({
		replacement: { name: t },
		rolled: { name: e }
	}));
}
function cl(e) {
	return Object.entries(e ?? {}).map(([e, t]) => ({
		replacements: t.map((e) => ({ name: e })),
		rolled: { name: e }
	}));
}
function ll(e, t, n, r) {
	return e.map((e, i) => i === t ? {
		...e,
		[n]: fl(r)
	} : e);
}
function ul(e, t, n) {
	return e.map((e, r) => r === t ? {
		...e,
		rolled: fl(n)
	} : e);
}
function dl(e, t, n, r) {
	return e.map((e, i) => {
		if (i !== t) return e;
		let a = e.replacements.map((e, t) => t === n ? fl(r) : e);
		return {
			...e,
			replacements: a
		};
	});
}
function fl(e) {
	return {
		item: e,
		name: e.name
	};
}
function pl(e) {
	return JSON.parse(JSON.stringify(e));
}
//#endregion
//#region src/view/apps/species-builder/editor/replacement-actions.ts
function ml(e) {
	function t(t) {
		e.definitionActions.updateSelectedDefinition((e) => Tc(Tc(e, "talentReplacementRows", t.length > 0 ? t : void 0), "talentReplacements", Ts(t)));
	}
	function n(t) {
		e.definitionActions.updateSelectedDefinition((e) => Tc(Tc(e, "careerReplacementRows", t.length > 0 ? t : void 0), "careerReplacements", Es(t)));
	}
	function r(t, n) {
		e.subspeciesActions.updateSubspecies(t, (e) => Tc(Tc(e, "talentReplacementRows", n.length > 0 ? n : void 0), "talentReplacements", Ts(n)));
	}
	async function i(n, r, i) {
		let a = e.selectedDefinition.value;
		if (!a) return;
		let o = await l("talent", i);
		t(ll(al(a), n, r, o));
	}
	async function a(t, n, i, a) {
		let o = e.selectedDefinition.value?.subspecies?.[t];
		if (!o) return;
		let s = await l("talent", a);
		r(t, ll(al(o), n, i, s));
	}
	async function o(t, r) {
		let i = e.selectedDefinition.value;
		if (!i) return;
		let a = await l("career", r);
		n(ul(ol(i), t, a));
	}
	async function s(t, r, i) {
		let a = e.selectedDefinition.value;
		if (!a) return;
		let o = await l("career", i);
		n(dl(ol(a), t, r, o));
	}
	async function c(t) {
		try {
			await e.bridge.openItemSheet(t);
		} catch (t) {
			e.loadError.value = Rc(t);
		}
	}
	async function l(t, n) {
		try {
			return await e.bridge.resolveItemDrop(n, t);
		} catch (t) {
			throw e.loadError.value = Rc(t), t;
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
function hl(e) {
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
			return Tc(t, "subspecies", n.length > 0 ? n : void 0);
		});
	}
	function r(e, t, n) {
		c(e, (e) => ({
			...e,
			[t]: bc(n) ?? ""
		}));
	}
	function i(e, t, n) {
		c(e, (e) => Tc(e, t, xc(n)));
	}
	function a(e, t, n) {
		c(e, (e) => {
			let r = e.characteristics ? { ...e.characteristics } : {}, i = yc(n);
			return i ? r[t] = i : delete r[t], Tc(e, "characteristics", Object.keys(r).length > 0 ? r : void 0);
		});
	}
	function o(e, t, n) {
		c(e, (e) => Tc(e, t, hc(n)));
	}
	function s(e, t, n) {
		c(e, (e) => Tc(e, t, wc(t, n)));
	}
	function c(e, t) {
		l((n) => {
			let r = n.subspecies ?? [], i = r[e];
			return i ? {
				...n,
				subspecies: r.map((n, r) => r === e ? t(Lc(i)) : n)
			} : n;
		});
	}
	function l(t) {
		let n = e.definitions.value[e.selectedIndex.value];
		n && (e.definitions.value = e.definitions.value.map((r, i) => i === e.selectedIndex.value ? t(Lc(n)) : r), e.message.value = "");
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
function gl(e, t = {}) {
	let n = /* @__PURE__ */ P([]), r = /* @__PURE__ */ P(!1), i = /* @__PURE__ */ P(0), a = /* @__PURE__ */ P(!0), o = /* @__PURE__ */ P(!1), s = /* @__PURE__ */ P(""), c = /* @__PURE__ */ P(""), l = /* @__PURE__ */ P([]), u = /* @__PURE__ */ P(""), d = K(() => n.value[i.value]), f = K(() => Dc(n.value)), p = K(() => nc({
		definitions: f.value,
		showGeneratedConfigTab: r.value
	})), m = K(() => Ic(Ds(p.value))), h = K(() => Ec(f.value)), g = K(() => Nc(f.value)), _ = K(() => f.value.flatMap((e, t) => e.key.trim() && e.name.trim() ? [] : [t])), v = K(() => Pc(f.value)), y = K(() => u.value !== Fc(p.value)), b = K(() => !a.value && !o.value && h.value.length === 0 && _.value.length === 0 && g.value.length === 0 && v.value.length === 0), x = zc({
		definitions: n,
		message: s,
		selectedDefinition: d,
		selectedIndex: i
	}), S = hl({
		definitions: n,
		message: s,
		selectedIndex: i
	}), { resolveDroppedItem: C, ...w } = ml({
		bridge: e,
		definitionActions: x,
		loadError: c,
		selectedDefinition: d,
		subspeciesActions: S
	}), ee = Qc({
		definitionActions: x,
		resolveDroppedItem: C,
		selectedDefinition: d,
		subspeciesActions: S
	});
	async function T() {
		a.value = !0, c.value = "", s.value = "";
		try {
			let [t, a] = await Promise.all([e.loadSettings(), e.loadRandomTalentSources()]);
			n.value = Lc(t.definitions), l.value = a, r.value = t.showGeneratedConfigTab, i.value = n.value.length > 0 ? 0 : -1, u.value = Fc(t), s.value = `Loaded ${t.definitions.length} species definition(s).`;
		} catch (e) {
			c.value = Rc(e);
		} finally {
			a.value = !1;
		}
	}
	async function E() {
		if (b.value) {
			o.value = !0, c.value = "", s.value = "";
			try {
				let a = await e.saveSettings(p.value);
				n.value = Lc(a.definitions), r.value = a.showGeneratedConfigTab, i.value = n.value.length > 0 ? Math.min(i.value, n.value.length - 1) : -1, u.value = Fc(a), s.value = "Saved. Refresh Foundry before using new species in character generation.", t.onSettingsSaved?.();
			} catch (e) {
				c.value = Rc(e);
			} finally {
				o.value = !1;
			}
		}
	}
	function D(e) {
		r.value = e, s.value = "";
	}
	return {
		...x,
		...ee,
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
		loadSettings: T,
		message: s,
		randomTalentSources: l,
		saveSettings: E,
		selectedDefinition: d,
		selectedIndex: i,
		showGeneratedConfigTab: r,
		updateShowGeneratedConfigTab: D
	};
}
//#endregion
//#region src/view/apps/species-builder/AgeHeightFields.vue?vue&type=script&setup=true&lang.ts
var _l = { class: "species-builder__field-grid species-builder__field-grid--four" }, vl = ["disabled", "value"], yl = ["disabled", "value"], bl = ["disabled", "value"], xl = ["disabled", "value"], Sl = /* @__PURE__ */ I({
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
		return (t, i) => (z(), B("div", _l, [
			H("label", null, [i[4] ||= H("span", null, "Age", -1), H("input", {
				disabled: e.isDisabled,
				value: e.definition.age ?? "",
				type: "text",
				onInput: i[0] ||= (e) => n("updateStringField", "age", r(e))
			}, null, 40, vl)]),
			H("label", null, [i[5] ||= H("span", null, "Height Die", -1), H("input", {
				disabled: e.isDisabled,
				value: e.definition.height?.die ?? "",
				type: "text",
				onInput: i[1] ||= (e) => n("updateHeightField", "die", r(e))
			}, null, 40, yl)]),
			H("label", null, [i[6] ||= H("span", null, "Feet", -1), H("input", {
				disabled: e.isDisabled,
				value: e.definition.height?.feet ?? "",
				type: "number",
				onInput: i[2] ||= (e) => n("updateHeightField", "feet", r(e))
			}, null, 40, bl)]),
			H("label", null, [i[7] ||= H("span", null, "Inches", -1), H("input", {
				disabled: e.isDisabled,
				value: e.definition.height?.inches ?? "",
				type: "number",
				onInput: i[3] ||= (e) => n("updateHeightField", "inches", r(e))
			}, null, 40, xl)])
		]));
	}
});
//#endregion
//#region src/view/components/DocumentDrop/drop-payloads.ts
function Cl(e, t) {
	let n = e.trim();
	if (!n) return "";
	if (kl(n)) return n;
	let r = El(n), i = Ol(r, t);
	return i ? Al(r) ? JSON.stringify({
		type: i,
		uuid: r
	}) : JSON.stringify({
		id: r,
		type: i
	}) : "";
}
function wl(e) {
	let t = e.closest("[data-uuid], [data-document-uuid], [data-entry-uuid], [data-document-id], [data-entry-id], [data-pack]");
	if (!t) return "";
	let n = t.dataset.uuid || t.dataset.documentUuid || t.dataset.entryUuid || "";
	if (n) return Tl(n);
	let r = t.dataset.documentId || t.dataset.entryId || "", i = Dl(t);
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
function Tl(e) {
	let t = Ol(e, "auto");
	return t ? JSON.stringify({
		type: t,
		uuid: e
	}) : "";
}
function El(e) {
	return /@UUID\[([^\]]+)]/.exec(e)?.[1]?.trim() ?? e;
}
function Dl(e) {
	let t = e.dataset.documentName || e.dataset.type || e.closest("[data-document-name]")?.dataset.documentName || "";
	return t === "Actor" || t === "Item" ? t : e.classList.contains("actor") ? "Actor" : e.classList.contains("item") ? "Item" : e.closest("#actors") ? "Actor" : e.closest("#items") ? "Item" : "";
}
function Ol(e, t) {
	return /^actor\./i.test(e) || /\.actors(\.|$)/i.test(e) ? "Actor" : /^item\./i.test(e) || /\.items(\.|$)/i.test(e) || t === "auto" ? "Item" : t;
}
function kl(e) {
	if (!e.startsWith("{")) return !1;
	try {
		return typeof JSON.parse(e).type == "string";
	} catch {
		return !1;
	}
}
function Al(e) {
	return /^(actor|item|compendium)\./i.test(e);
}
//#endregion
//#region src/view/components/DocumentDrop.vue?vue&type=script&setup=true&lang.ts
var jl = ["onKeydown"], Ml = { key: 0 }, Nl = { class: "document-drop__actions" }, Pl = /* @__PURE__ */ vs(/* @__PURE__ */ I({
	__name: "DocumentDrop",
	props: {
		description: {},
		title: {},
		variant: {}
	},
	emits: ["dropData"],
	setup(e, { emit: t }) {
		let n = t, r = /* @__PURE__ */ P(!1), i = /* @__PURE__ */ P(!1), a = /* @__PURE__ */ P(!1), o = /* @__PURE__ */ P("auto"), s = /* @__PURE__ */ P("");
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
			let e = Cl(s.value, o.value);
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
			let r = wl(t);
			r && (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), n("dropData", r), d());
		}
		return Mr(() => {
			m();
		}), (t, n) => (z(), B("div", {
			class: k(["document-drop", {
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
			H("strong", null, A(e.title), 1),
			e.description ? (z(), B("span", Ml, A(e.description), 1)) : G("", !0),
			zr(t.$slots, "default", {}, void 0, !0),
			i.value ? (z(), B("form", {
				key: 1,
				class: "document-drop__manual",
				onClick: n[2] ||= ss(() => {}, ["stop"]),
				onSubmit: ss(f, ["prevent"])
			}, [
				H("label", null, [n[6] ||= H("span", null, "Document type", -1), Vn(H("select", { "onUpdate:modelValue": n[0] ||= (e) => o.value = e }, [...n[5] ||= [
					H("option", { value: "auto" }, "Auto", -1),
					H("option", { value: "Item" }, "Item", -1),
					H("option", { value: "Actor" }, "Actor", -1)
				]], 512), [[ns, o.value]])]),
				H("label", null, [n[7] ||= H("span", null, "UUID or drop JSON", -1), Vn(H("input", {
					"onUpdate:modelValue": n[1] ||= (e) => s.value = e,
					placeholder: "Compendium.package.pack.id",
					type: "text"
				}, null, 512), [[ts, s.value]])]),
				H("div", Nl, [
					n[8] ||= H("button", { type: "submit" }, "Use", -1),
					H("button", {
						type: "button",
						onClick: p
					}, A(a.value ? "Waiting..." : "Pick Next Click"), 1),
					H("button", {
						type: "button",
						onClick: d
					}, "Cancel")
				])
			], 32)) : G("", !0)
		], 42, jl));
	}
}), [["__scopeId", "data-v-b6ae471e"]]), Fl = [
	"aria-label",
	"disabled",
	"title"
], Il = ["src"], Ll = {
	key: 1,
	"aria-hidden": "true",
	class: "fa-solid fa-scroll"
}, Rl = /* @__PURE__ */ I({
	__name: "LinkedItemButton",
	props: {
		isDisabled: { type: Boolean },
		value: {}
	},
	emits: ["openItem"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => e.value.item?.uuid ? (z(), B("button", {
			key: 0,
			"aria-label": `Open ${e.value.name}`,
			disabled: e.isDisabled,
			title: `Open ${e.value.name}`,
			class: "species-builder__linked-item-button",
			type: "button",
			onClick: r[0] ||= (t) => n("openItem", e.value.item.uuid)
		}, [e.value.item.img ? (z(), B("img", {
			key: 0,
			alt: "",
			"aria-hidden": "true",
			src: e.value.item.img
		}, null, 8, Il)) : (z(), B("i", Ll)), H("span", null, A(e.value.name), 1)], 8, Fl)) : G("", !0);
	}
}), zl = { class: "species-builder__linked-list-row" }, Bl = [
	"disabled",
	"title",
	"value"
], Vl = ["disabled", "title"], Hl = { class: "species-builder__sr-only" }, Ul = /* @__PURE__ */ I({
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
		function r(e) {
			return e.target instanceof HTMLInputElement ? e.target.value : "";
		}
		return (t, i) => (z(), B("div", zl, [
			e.value.item?.uuid ? (z(), V(Rl, {
				key: 0,
				"is-disabled": e.isDisabled,
				value: e.value,
				onOpenItem: i[0] ||= (e) => n("openItem", e)
			}, null, 8, ["is-disabled", "value"])) : (z(), B("input", {
				key: 1,
				disabled: e.isDisabled,
				title: e.inputTitle,
				value: e.value.name,
				type: "text",
				onInput: i[1] ||= (e) => n("updateName", r(e))
			}, null, 40, Bl)),
			U(Pl, {
				description: e.dropDescription,
				title: e.dropTitle,
				variant: "compact",
				onDropData: i[2] ||= (e) => n("dropData", e)
			}, null, 8, ["description", "title"]),
			H("button", {
				disabled: e.isDisabled,
				title: e.removeTitle,
				class: "species-builder__icon-button species-builder__danger-action",
				type: "button",
				onClick: i[3] ||= (e) => n("remove")
			}, [i[4] ||= H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), H("span", Hl, A(e.removeTitle), 1)], 8, Vl)
		]));
	}
}), Wl = [
	Z.WeaponSkill,
	Z.BallisticSkill,
	Z.Strength,
	Z.Toughness,
	Z.Initiative,
	Z.Agility,
	Z.Dexterity,
	Z.Intelligence,
	Z.Willpower,
	Z.Fellowship
], Gl = [
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
], Kl = [
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
], ql = { class: "species-builder__item-sections" }, Jl = { class: "species-builder__section-heading species-builder__section-heading--compact" }, Yl = { class: "species-builder__inline-actions" }, Xl = [
	"disabled",
	"title",
	"onClick"
], Zl = ["disabled"], Ql = ["disabled"], $l = {
	key: 0,
	class: "species-builder__item-list"
}, eu = { class: "species-builder__choice-card-header" }, tu = { class: "species-builder__inline-actions" }, nu = ["disabled", "onClick"], ru = ["disabled", "onClick"], iu = { class: "species-builder__choice-list" }, au = {
	key: 1,
	class: "species-builder__empty-list"
}, ou = /* @__PURE__ */ I({
	__name: "ArrayFields",
	props: {
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
		let n = e, r = t, i = {
			skills: "Skills granted during character creation. Drop Skill items to link their sheets, or add names manually.",
			talents: "Talents granted during character creation. Multiple choices in one grant become WFRP's comma-separated either/or entry.",
			traits: "Traits granted by this species or subspecies. Drop Trait items to link their sheets, or add names manually."
		};
		function a(e) {
			return Bc(n.values[e], o(e));
		}
		function o(e) {
			return e === "skills" ? n.values.linkedSkills : n.values.linkedTraits;
		}
		function s() {
			return Vc(n.values.talents, n.values.linkedTalents);
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
			y(e, Wc(a(e), t, n));
		}
		function m(e, t) {
			y(e, a(e).filter((e, n) => n !== t));
		}
		function h(e, t, n) {
			b(Kc(s(), e, t, n));
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
		return (t, n) => (z(), B("div", ql, [(z(!0), B(R, null, L(F(Kl), (t) => (z(), B("section", {
			key: t.field,
			class: "species-builder__item-section"
		}, [
			H("div", Jl, [H("div", null, [H("h4", null, A(t.label), 1), H("p", null, A(i[t.field]), 1)]), H("div", Yl, [t.field === "talents" ? (z(), B(R, { key: 1 }, [H("button", {
				disabled: e.isDisabled,
				title: "Add one guaranteed Talent",
				type: "button",
				onClick: d
			}, [...n[3] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), W(" Talent ", -1)]], 8, Zl), H("button", {
				disabled: e.isDisabled,
				title: "Add a Talent choice set. WFRP stores this as one comma-separated Talent entry.",
				type: "button",
				onClick: f
			}, [...n[4] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-list-check"
			}, null, -1), W(" Choice Set ", -1)]], 8, Ql)], 64)) : (z(), B("button", {
				key: 0,
				disabled: e.isDisabled,
				title: `Add a ${t.label.slice(0, -1)} row`,
				type: "button",
				onClick: (e) => u(t.field)
			}, [...n[2] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), W(" Add ", -1)]], 8, Xl))])]),
			U(Pl, {
				description: `Drop a WFRP ${t.label.slice(0, -1)} item to add it to this list.`,
				title: `Drop ${t.label}`,
				variant: "compact",
				onDropData: (e) => r("dropData", t.field, e)
			}, null, 8, [
				"description",
				"title",
				"onDropData"
			]),
			c(t.field) > 0 ? (z(), B("div", $l, [t.field === "talents" ? (z(!0), B(R, { key: 1 }, L(s(), (t, i) => (z(), B("article", {
				key: `talent-${i}`,
				class: "species-builder__choice-card"
			}, [H("div", eu, [H("strong", null, A(t.choices.length > 1 ? "Talent Choice" : "Guaranteed Talent"), 1), H("div", tu, [H("button", {
				disabled: e.isDisabled,
				title: "Add another alternative to this Talent choice",
				type: "button",
				onClick: (e) => g(i)
			}, [...n[5] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), W(" Choice ", -1)]], 8, nu), H("button", {
				disabled: e.isDisabled,
				title: "Remove this Talent grant",
				class: "species-builder__icon-button species-builder__danger-action",
				type: "button",
				onClick: (e) => _(i)
			}, [...n[6] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), H("span", { class: "species-builder__sr-only" }, "Remove Talent grant", -1)]], 8, ru)])]), H("div", iu, [(z(!0), B(R, null, L(t.choices, (a, o) => (z(), V(Ul, {
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
			]))), 128))])]))), 128)) : (z(!0), B(R, { key: 0 }, L(a(t.field), (i, a) => (z(), V(Ul, {
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
			]))), 128))])) : (z(), B("p", au, "No " + A(t.label.toLowerCase()) + " yet.", 1))
		]))), 128))]));
	}
}), su = { class: "species-builder__field-grid species-builder__field-grid--characteristics" }, cu = [
	"disabled",
	"value",
	"onInput"
], lu = /* @__PURE__ */ I({
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
		return (t, i) => (z(), B("div", su, [(z(!0), B(R, null, L(F(Wl), (t) => (z(), B("label", { key: t }, [H("span", null, A(F(Us)[t]), 1), H("input", {
			disabled: e.isDisabled,
			value: e.characteristics?.[t] ?? "",
			type: "text",
			onInput: (e) => n("update", t, r(e))
		}, null, 40, cu)]))), 128))]));
	}
}), uu = { class: "species-builder__linked-item-field" }, du = { class: "species-builder__linked-item-label" }, fu = {
	key: 1,
	class: "species-builder__linked-item-unlinked"
}, pu = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B("div", uu, [
			H("span", du, A(e.label), 1),
			e.value.item?.uuid ? (z(), V(Rl, {
				key: 0,
				"is-disabled": e.isDisabled,
				value: e.value,
				onOpenItem: r[0] ||= (e) => n("openItem", e)
			}, null, 8, ["is-disabled", "value"])) : e.value.name ? (z(), B("div", fu, [H("strong", null, A(e.value.name), 1), r[2] ||= H("span", null, "Stored by name. Drop the matching Item to link its sheet.", -1)])) : G("", !0),
			U(Pl, {
				description: e.description,
				title: e.title,
				variant: "compact",
				onDropData: r[1] ||= (e) => n("dropData", e)
			}, null, 8, ["description", "title"])
		]));
	}
}), mu = { class: "species-builder__item-section" }, hu = { class: "species-builder__section-heading species-builder__section-heading--compact" }, gu = ["disabled"], _u = {
	key: 0,
	class: "species-builder__item-list"
}, vu = { class: "species-builder__choice-card-header" }, yu = { class: "species-builder__inline-actions" }, bu = ["disabled", "onClick"], xu = ["disabled", "onClick"], Su = { class: "species-builder__choice-list" }, Cu = ["disabled", "onClick"], wu = {
	key: 1,
	class: "species-builder__empty-list"
}, Tu = /* @__PURE__ */ I({
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
			return n.rows?.length ? n.rows : cl(n.values);
		}
		function a() {
			r("updateRows", [...i(), il()]);
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
		return (t, n) => (z(), B("section", mu, [H("div", hu, [n[3] ||= H("div", null, [H("h4", null, "Career Replacements"), H("p", null, " Offer one or more replacement Careers when a character rolls a specific Career. This matches WFRP's speciesCareerReplacements config. ")], -1), H("button", {
			disabled: e.isDisabled,
			title: "Add a rolled Career and replacement choices",
			type: "button",
			onClick: a
		}, [...n[2] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-plus"
		}, null, -1), W(" Add ", -1)]], 8, gu)]), i().length > 0 ? (z(), B("div", _u, [(z(!0), B(R, null, L(i(), (t, i) => (z(), B("article", {
			key: `career-replacement-${i}`,
			class: "species-builder__choice-card"
		}, [H("div", vu, [U(pu, {
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
		]), H("div", yu, [H("button", {
			disabled: e.isDisabled,
			title: "Add another replacement Career choice",
			type: "button",
			onClick: (e) => o(i)
		}, [...n[4] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-plus"
		}, null, -1), W(" Choice ", -1)]], 8, bu), H("button", {
			disabled: e.isDisabled,
			title: "Remove this Career replacement rule",
			class: "species-builder__icon-button species-builder__danger-action",
			type: "button",
			onClick: (e) => c(i)
		}, [...n[5] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-trash"
		}, null, -1), H("span", { class: "species-builder__sr-only" }, "Remove Career replacement", -1)]], 8, xu)])]), H("div", Su, [(z(!0), B(R, null, L(t.replacements, (t, a) => (z(), B("div", {
			key: `${i}-${a}`,
			class: "species-builder__list-row"
		}, [U(pu, {
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
		]), H("button", {
			disabled: e.isDisabled,
			title: "Remove this replacement Career choice",
			class: "species-builder__icon-button species-builder__danger-action",
			type: "button",
			onClick: (e) => s(i, a)
		}, [...n[6] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-xmark"
		}, null, -1), H("span", { class: "species-builder__sr-only" }, "Remove replacement Career choice", -1)]], 8, Cu)]))), 128))])]))), 128))])) : (z(), B("p", wu, "No Career replacements."))]));
	}
});
//#endregion
//#region src/view/apps/species-builder/mapped-option-fields/formatters.ts
function Eu(e) {
	return e.flatMap(([e, t]) => e.trim() ? [`${e.trim()}: ${t}`] : []).join("\n");
}
function Du(e) {
	return e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement ? e.target.value : "";
}
//#endregion
//#region src/view/apps/species-builder/mapped-option-fields/RandomTalentRows.vue?vue&type=script&setup=true&lang.ts
var Ou = { class: "species-builder__item-section" }, ku = { class: "species-builder__section-heading species-builder__section-heading--compact" }, Au = ["disabled"], ju = {
	key: 0,
	class: "species-builder__item-list"
}, Mu = [
	"disabled",
	"value",
	"onInput"
], Nu = ["value"], Pu = [
	"disabled",
	"value",
	"onInput"
], Fu = ["disabled", "onClick"], Iu = {
	key: 1,
	class: "species-builder__empty-list"
}, Lu = /* @__PURE__ */ I({
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
			r("update", Eu([...i(), [e, 1]]));
		}
		function o(e, t) {
			r("update", Eu(i().map(([n, r], i) => i === e ? [t, r] : [n, r])));
		}
		function s(e, t) {
			let n = Number(t);
			r("update", Eu(i().map(([t, r], i) => i === e ? [t, Number.isFinite(n) ? n : r] : [t, r])));
		}
		function c(e) {
			return n.sources.some((t) => t.key === e) ? n.sources : [...n.sources, {
				key: e,
				label: `Saved source missing from this world (${e})`
			}];
		}
		function l(e) {
			r("update", Eu(i().filter((t, n) => n !== e)));
		}
		return (t, n) => (z(), B("section", Ou, [H("div", ku, [n[1] ||= H("div", null, [H("h4", null, "Random Talents"), H("p", null, " Choose an available random Talent source and how many Talents are drawn from it. The default source is the standard character creation Talent table. ")], -1), H("button", {
			disabled: e.isDisabled,
			title: "Add a random Talent source and draw count",
			type: "button",
			onClick: a
		}, [...n[0] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-plus"
		}, null, -1), W(" Add ", -1)]], 8, Au)]), i().length > 0 ? (z(), B("div", ju, [(z(!0), B(R, null, L(i(), ([t, r], i) => (z(), B("div", {
			key: `random-${i}`,
			class: "species-builder__map-row species-builder__map-row--number"
		}, [
			H("label", null, [n[2] ||= H("span", null, "Talent source", -1), H("select", {
				disabled: e.isDisabled,
				title: "Random Talent table source available in this world.",
				value: t,
				onInput: (e) => o(i, F(Du)(e))
			}, [(z(!0), B(R, null, L(c(t), (e) => (z(), B("option", {
				key: e.key,
				value: e.key
			}, A(e.label), 9, Nu))), 128))], 40, Mu)]),
			H("label", null, [n[3] ||= H("span", null, "Draws", -1), H("input", {
				disabled: e.isDisabled,
				min: "0",
				title: "How many random Talents this species draws from that table.",
				value: r,
				type: "number",
				onInput: (e) => s(i, F(Du)(e))
			}, null, 40, Pu)]),
			H("button", {
				disabled: e.isDisabled,
				title: "Remove this random Talent source",
				class: "species-builder__icon-button species-builder__danger-action",
				type: "button",
				onClick: (e) => l(i)
			}, [...n[4] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), H("span", { class: "species-builder__sr-only" }, "Remove random Talent source", -1)]], 8, Fu)
		]))), 128))])) : (z(), B("p", Iu, "No random Talent draws."))]));
	}
}), Ru = { class: "species-builder__item-section" }, zu = { class: "species-builder__section-heading species-builder__section-heading--compact" }, Bu = ["disabled"], Vu = {
	key: 0,
	class: "species-builder__item-list"
}, Hu = ["disabled", "onClick"], Uu = {
	key: 1,
	class: "species-builder__empty-list"
}, Wu = /* @__PURE__ */ I({
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
			return n.rows?.length ? n.rows : sl(n.values);
		}
		function a() {
			r("updateRows", [...i(), rl()]);
		}
		function o(e) {
			r("updateRows", i().filter((t, n) => n !== e));
		}
		return (t, n) => (z(), B("section", Ru, [H("div", zu, [n[3] ||= H("div", null, [H("h4", null, "Talent Replacements"), H("p", null, " Let the character replace a rolled Talent with a specific alternative, for example replacing Artistic with Beneath Notice. ")], -1), H("button", {
			disabled: e.isDisabled,
			title: "Add a rolled Talent and replacement Talent",
			type: "button",
			onClick: a
		}, [...n[2] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-plus"
		}, null, -1), W(" Add ", -1)]], 8, Bu)]), i().length > 0 ? (z(), B("div", Vu, [(z(!0), B(R, null, L(i(), (t, i) => (z(), B("div", {
			key: `talent-replacement-${i}`,
			class: "species-builder__map-row species-builder__map-row--pair"
		}, [
			U(pu, {
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
			U(pu, {
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
				class: "species-builder__icon-button species-builder__danger-action",
				type: "button",
				onClick: (e) => o(i)
			}, [...n[4] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), H("span", { class: "species-builder__sr-only" }, "Remove Talent replacement", -1)]], 8, Hu)
		]))), 128))])) : (z(), B("p", Uu, "No Talent replacements."))]));
	}
}), Gu = { class: "species-builder__item-sections" }, Ku = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B("div", Gu, [
			U(Lu, {
				"is-disabled": e.isDisabled,
				sources: e.randomTalentSources,
				values: e.values.randomTalents,
				onUpdate: r[0] ||= (e) => n("update", "randomTalents", e)
			}, null, 8, [
				"is-disabled",
				"sources",
				"values"
			]),
			U(Wu, {
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
			e.includeCareerReplacements ? (z(), V(Tu, {
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
			])) : G("", !0)
		]));
	}
}), qu = { class: "species-builder__section" }, Ju = { class: "species-builder__section-help" }, Yu = /* @__PURE__ */ I({
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
		return (t, s) => (z(), B("section", qu, [
			s[4] ||= H("h3", null, "Random Tables And Replacements", -1),
			H("p", Ju, A(e.help), 1),
			U(Ku, {
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
}), Xu = { class: "species-builder__field-grid species-builder__field-grid--four" }, Zu = [
	"disabled",
	"value",
	"onInput"
], Qu = /* @__PURE__ */ I({
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
		return (t, i) => (z(), B("div", Xu, [(z(!0), B(R, null, L(F(Gl), (t) => (z(), B("label", { key: t.field }, [H("span", null, A(t.label), 1), H("input", {
			disabled: e.isDisabled,
			value: e.values[t.field] ?? "",
			type: "number",
			onInput: (e) => n("update", t.field, r(e))
		}, null, 40, Zu)]))), 128))]));
	}
}), $u = {
	key: 0,
	class: "species-builder__subspecies-editor-panel"
}, ed = { class: "species-builder__section-heading" }, td = ["disabled"], nd = { class: "species-builder__field-grid species-builder__field-grid--two" }, rd = ["disabled", "value"], id = [
	"disabled",
	"placeholder",
	"value"
], ad = { class: "species-builder__section" }, od = { class: "species-builder__section" }, sd = { class: "species-builder__section" }, cd = /* @__PURE__ */ I({
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
		return (t, n) => (z(), V(ys, {
			open: e.isOpen,
			title: e.subspecies?.name || "Subspecies",
			onClose: n[14] ||= (e) => r("close")
		}, {
			default: Bn(() => [e.subspecies ? (z(), B("div", $u, [
				H("div", ed, [n[16] ||= H("h2", null, "Subspecies Details", -1), H("button", {
					disabled: e.isLoading || e.isSaving,
					type: "button",
					onClick: a
				}, [...n[15] ||= [H("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), W(" Delete ", -1)]], 8, td)]),
				H("div", nd, [H("label", null, [n[17] ||= H("span", null, "Name", -1), H("input", {
					disabled: e.isLoading || e.isSaving,
					value: e.subspecies.name,
					type: "text",
					onInput: n[0] ||= (t) => r("updateStringField", e.index, "name", i(t))
				}, null, 40, rd)]), H("label", null, [n[18] ||= H("span", null, "Key", -1), H("input", {
					disabled: e.isLoading || e.isSaving,
					placeholder: F(kc)(e.subspecies),
					value: e.subspecies.key,
					type: "text",
					onInput: n[1] ||= (t) => r("updateStringField", e.index, "key", i(t))
				}, null, 40, id)])]),
				H("section", ad, [
					n[19] ||= H("h3", null, "Characteristics", -1),
					n[20] ||= H("p", { class: "species-builder__section-help" }, " Subspecies characteristic formulas override the parent species characteristics when this subspecies is selected. ", -1),
					U(lu, {
						characteristics: e.subspecies.characteristics,
						"is-disabled": e.isLoading || e.isSaving,
						onUpdate: n[2] ||= (t, n) => r("updateCharacteristic", e.index, t, n)
					}, null, 8, ["characteristics", "is-disabled"])
				]),
				H("section", od, [
					n[21] ||= H("h3", null, "Stats", -1),
					n[22] ||= H("p", { class: "species-builder__section-help" }, " Optional subspecies Movement, Fate, Resilience, and extra points. Leave a value blank to use the parent species value. ", -1),
					U(Qu, {
						"is-disabled": e.isLoading || e.isSaving,
						values: e.subspecies,
						onUpdate: n[3] ||= (t, n) => r("updateNumberField", e.index, t, n)
					}, null, 8, ["is-disabled", "values"])
				]),
				H("section", sd, [
					n[23] ||= H("h3", null, "Skills, Talents, And Traits", -1),
					n[24] ||= H("p", { class: "species-builder__section-help" }, " If a subspecies defines one of these lists, WFRP uses that subspecies list instead of the parent species list for the same field. ", -1),
					U(ou, {
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
				U(Yu, {
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
			])) : G("", !0)]),
			_: 1
		}, 8, ["open", "title"]));
	}
}), ld = { class: "species-builder__section species-builder__section--subspecies" }, ud = { class: "species-builder__section-heading" }, dd = ["disabled"], fd = {
	key: 0,
	class: "species-builder__empty-list"
}, pd = {
	key: 1,
	class: "species-builder__subspecies-list"
}, md = ["disabled", "onClick"], hd = /* @__PURE__ */ I({
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
		return (t, n) => (z(), B("section", ld, [H("div", ud, [n[2] ||= H("h3", null, "Subspecies", -1), H("button", {
			disabled: e.isLoading || e.isSaving,
			type: "button",
			onClick: n[0] ||= (e) => r("addSubspecies")
		}, [...n[1] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-plus"
		}, null, -1), W(" Add ", -1)]], 8, dd)]), i.value.length === 0 ? (z(), B("div", fd, "No subspecies yet.")) : (z(), B("div", pd, [(z(!0), B(R, null, L(i.value, (t, n) => (z(), B("button", {
			key: `${t.key}-${n}`,
			disabled: e.isLoading || e.isSaving,
			type: "button",
			onClick: (e) => r("editSubspecies", n)
		}, [H("strong", null, A(a(t)), 1), H("span", null, A(t.key.trim() || F(kc)(t)), 1)], 8, md))), 128))]))]));
	}
}), gd = { class: "species-builder__section-heading" }, _d = { class: "species-builder__detail-actions" }, vd = ["disabled"], yd = ["disabled"], bd = { class: "species-builder__field-grid species-builder__field-grid--two" }, xd = ["disabled", "value"], Sd = [
	"disabled",
	"placeholder",
	"value"
], Cd = { class: "species-builder__check-row" }, wd = ["checked", "disabled"], Td = { class: "species-builder__section" }, Ed = { class: "species-builder__section" }, Dd = { class: "species-builder__section" }, Od = { class: "species-builder__section" }, kd = /* @__PURE__ */ I({
	__name: "SpeciesBuilderDetailPanel",
	props: {
		definition: {},
		isLoading: { type: Boolean },
		isSaving: { type: Boolean },
		randomTalentSources: {}
	},
	emits: /* @__PURE__ */ "addSubspecies.arrayFieldDrop.careerReplacementChoiceDrop.careerReplacementRolledDrop.delete.deleteSubspecies.duplicate.linkedItemDrop.openItem.subspeciesArrayFieldDrop.subspeciesLinkedItemDrop.subspeciesTalentChoiceDrop.subspeciesTalentReplacementReplacementDrop.subspeciesTalentReplacementRolledDrop.talentReplacementReplacementDrop.talentReplacementRolledDrop.talentChoiceDrop.updateArrayField.updateBooleanField.updateCareerReplacementRows.updateCharacteristic.updateHeightField.updateLinkedItems.updateLinkedTalents.updateNumberField.updateStringField.updateSubspeciesArrayField.updateSubspeciesCharacteristic.updateSubspeciesLinkedItems.updateSubspeciesLinkedTalents.updateSubspeciesNumberField.updateSubspeciesStringField.updateSubspeciesTalentReplacementRows.updateSubspeciesTextMapField.updateTalentReplacementRows.updateTextMapField".split("."),
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ P(-1), a = /* @__PURE__ */ P(null), o = K(() => n.definition.subspecies?.[i.value]);
		Jn(() => n.definition.key, () => {
			i.value = -1;
		}), Jn(() => n.definition.subspecies?.length ?? 0, (e) => {
			i.value >= e && (i.value = -1);
		});
		function s(e) {
			return e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement ? e.target.value : "";
		}
		function c(e) {
			return e.target instanceof HTMLInputElement && e.target.checked;
		}
		async function l() {
			let e = n.definition.subspecies?.length ?? 0;
			r("addSubspecies"), await On(), await u(e);
		}
		async function u(e) {
			i.value = e, await On(), f();
		}
		function d(e) {
			r("deleteSubspecies", e), i.value = -1;
		}
		function f() {
			let e = a.value?.parentElement ?? null;
			for (; e;) {
				if (p(e)) {
					e.scrollTop = 0;
					return;
				}
				e = e.parentElement;
			}
		}
		function p(e) {
			let t = window.getComputedStyle(e).overflowY;
			return e.scrollHeight > e.clientHeight && (t === "auto" || t === "scroll" || t === "overlay");
		}
		return (t, n) => (z(), B("section", {
			ref_key: "detailPanelElement",
			ref: a,
			class: "species-builder__detail-panel"
		}, [
			U(cd, {
				index: i.value,
				"is-loading": e.isLoading,
				"is-open": i.value >= 0,
				"is-saving": e.isSaving,
				"random-talent-sources": e.randomTalentSources,
				subspecies: o.value,
				onClose: n[0] ||= (e) => i.value = -1,
				onDelete: d,
				onArrayFieldDrop: n[1] ||= (e, t, n) => r("subspeciesArrayFieldDrop", e, t, n),
				onLinkedItemDrop: n[2] ||= (e, t, n, i) => r("subspeciesLinkedItemDrop", e, t, n, i),
				onOpenItem: n[3] ||= (e) => r("openItem", e),
				onTalentChoiceDrop: n[4] ||= (e, t, n, i) => r("subspeciesTalentChoiceDrop", e, t, n, i),
				onTalentReplacementReplacementDrop: n[5] ||= (e, t, n) => r("subspeciesTalentReplacementReplacementDrop", e, t, n),
				onTalentReplacementRolledDrop: n[6] ||= (e, t, n) => r("subspeciesTalentReplacementRolledDrop", e, t, n),
				onUpdateArrayField: n[7] ||= (e, t, n) => r("updateSubspeciesArrayField", e, t, n),
				onUpdateCharacteristic: n[8] ||= (e, t, n) => r("updateSubspeciesCharacteristic", e, t, n),
				onUpdateLinkedItems: n[9] ||= (e, t, n) => r("updateSubspeciesLinkedItems", e, t, n),
				onUpdateLinkedTalents: n[10] ||= (e, t) => r("updateSubspeciesLinkedTalents", e, t),
				onUpdateNumberField: n[11] ||= (e, t, n) => r("updateSubspeciesNumberField", e, t, n),
				onUpdateStringField: n[12] ||= (e, t, n) => r("updateSubspeciesStringField", e, t, n),
				onUpdateTalentReplacementRows: n[13] ||= (e, t) => r("updateSubspeciesTalentReplacementRows", e, t),
				onUpdateTextMapField: n[14] ||= (e, t, n) => r("updateSubspeciesTextMapField", e, t, n)
			}, null, 8, [
				"index",
				"is-loading",
				"is-open",
				"is-saving",
				"random-talent-sources",
				"subspecies"
			]),
			H("div", gd, [n[40] ||= H("h2", null, "Details", -1), H("div", _d, [H("button", {
				disabled: e.isLoading || e.isSaving,
				type: "button",
				onClick: n[15] ||= (e) => r("duplicate")
			}, [...n[38] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-copy"
			}, null, -1), W(" Duplicate ", -1)]], 8, vd), H("button", {
				disabled: e.isLoading || e.isSaving,
				type: "button",
				onClick: n[16] ||= (e) => r("delete")
			}, [...n[39] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), W(" Delete ", -1)]], 8, yd)])]),
			H("div", bd, [H("label", null, [n[41] ||= H("span", null, "Name", -1), H("input", {
				disabled: e.isLoading || e.isSaving,
				value: e.definition.name,
				type: "text",
				onInput: n[17] ||= (e) => r("updateStringField", "name", s(e))
			}, null, 40, xd)]), H("label", null, [n[42] ||= H("span", null, "Key", -1), H("input", {
				disabled: e.isLoading || e.isSaving,
				placeholder: F(Oc)(e.definition),
				value: e.definition.key,
				type: "text",
				onInput: n[18] ||= (e) => r("updateStringField", "key", s(e))
			}, null, 40, Sd)])]),
			H("label", Cd, [H("input", {
				checked: e.definition.includeInExtraSpecies,
				disabled: e.isLoading || e.isSaving,
				type: "checkbox",
				onChange: n[19] ||= (e) => r("updateBooleanField", "includeInExtraSpecies", c(e))
			}, null, 40, wd), n[43] ||= H("span", null, "Show in WFRP extra species options", -1)]),
			H("section", Td, [
				n[44] ||= H("h3", null, "Characteristics", -1),
				n[45] ||= H("p", { class: "species-builder__section-help" }, " Starting characteristic formulas used by WFRP character creation. These are usually dice formulas such as 2d10+20. ", -1),
				U(lu, {
					characteristics: e.definition.characteristics,
					"is-disabled": e.isLoading || e.isSaving,
					onUpdate: n[20] ||= (e, t) => r("updateCharacteristic", e, t)
				}, null, 8, ["characteristics", "is-disabled"])
			]),
			H("section", Ed, [
				n[46] ||= H("h3", null, "Stats", -1),
				n[47] ||= H("p", { class: "species-builder__section-help" }, " Core character creation values: Movement, Fate, Resilience, and extra points that may be distributed between Fate and Resilience. ", -1),
				U(Qu, {
					"is-disabled": e.isLoading || e.isSaving,
					values: e.definition,
					onUpdate: n[21] ||= (e, t) => r("updateNumberField", e, t)
				}, null, 8, ["is-disabled", "values"])
			]),
			H("section", Dd, [
				n[48] ||= H("h3", null, "Skills, Talents, And Traits", -1),
				n[49] ||= H("p", { class: "species-builder__section-help" }, " Add grants exactly as WFRP expects them, but as editable rows. Talent choice sets become one WFRP Talent entry with comma-separated alternatives when config is generated. ", -1),
				U(ou, {
					"is-disabled": e.isLoading || e.isSaving,
					values: e.definition,
					onDropData: n[22] ||= (e, t) => r("arrayFieldDrop", e, t),
					onLinkedItemDrop: n[23] ||= (e, t, n) => r("linkedItemDrop", e, t, n),
					onOpenItem: n[24] ||= (e) => r("openItem", e),
					onTalentChoiceDrop: n[25] ||= (e, t, n) => r("talentChoiceDrop", e, t, n),
					onUpdateLinkedItems: n[26] ||= (e, t) => r("updateLinkedItems", e, t),
					onUpdateLinkedTalents: n[27] ||= (e) => r("updateLinkedTalents", e)
				}, null, 8, ["is-disabled", "values"])
			]),
			H("section", Od, [
				n[50] ||= H("h3", null, "Age And Height", -1),
				n[51] ||= H("p", { class: "species-builder__section-help" }, " Formulas used by character creation to roll age and random height. ", -1),
				U(Sl, {
					definition: e.definition,
					"is-disabled": e.isLoading || e.isSaving,
					onUpdateHeightField: n[28] ||= (e, t) => r("updateHeightField", e, t),
					onUpdateStringField: n[29] ||= (e, t) => r("updateStringField", e, t)
				}, null, 8, ["definition", "is-disabled"])
			]),
			U(Yu, {
				help: "Configure random Talent draws, Talent swap offers, and Career replacement choices without writing object-map syntax by hand.",
				"include-career-replacements": "",
				"is-disabled": e.isLoading || e.isSaving,
				"random-talent-sources": e.randomTalentSources,
				values: e.definition,
				onCareerReplacementChoiceDrop: n[30] ||= (e, t, n) => r("careerReplacementChoiceDrop", e, t, n),
				onCareerReplacementRolledDrop: n[31] ||= (e, t) => r("careerReplacementRolledDrop", e, t),
				onOpenItem: n[32] ||= (e) => r("openItem", e),
				onTalentReplacementReplacementDrop: n[33] ||= (e, t) => r("talentReplacementReplacementDrop", e, t),
				onTalentReplacementRolledDrop: n[34] ||= (e, t) => r("talentReplacementRolledDrop", e, t),
				onUpdate: n[35] ||= (e, t) => r("updateTextMapField", e, t),
				onUpdateCareerReplacementRows: n[36] ||= (e) => r("updateCareerReplacementRows", e),
				onUpdateTalentReplacementRows: n[37] ||= (e) => r("updateTalentReplacementRows", e)
			}, null, 8, [
				"is-disabled",
				"random-talent-sources",
				"values"
			]),
			U(hd, {
				definition: e.definition,
				"is-loading": e.isLoading,
				"is-saving": e.isSaving,
				onAddSubspecies: l,
				onEditSubspecies: u
			}, null, 8, [
				"definition",
				"is-loading",
				"is-saving"
			])
		], 512));
	}
}), Ad = { class: "species-builder__header" }, jd = { class: "species-builder__actions" }, Md = {
	"aria-label": "Species Builder sections",
	class: "species-builder__tabs"
}, Nd = ["disabled"], Pd = ["disabled"], Fd = ["disabled"], Id = ["disabled"], Ld = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B("header", Ad, [r[11] ||= H("div", null, [H("p", null, "WFRP4e Customizer"), H("h1", null, "Species Builder")], -1), H("div", jd, [
			H("nav", Md, [
				H("button", {
					class: k({ "is-active": e.activeTab === "edit" }),
					type: "button",
					onClick: r[0] ||= (e) => n("selectTab", "edit")
				}, " Edit ", 2),
				H("button", {
					class: k({ "is-active": e.activeTab === "settings" }),
					type: "button",
					onClick: r[1] ||= (e) => n("selectTab", "settings")
				}, " Settings ", 2),
				e.showGeneratedConfigTab ? (z(), B("button", {
					key: 0,
					class: k({ "is-active": e.activeTab === "wfrp-config" }),
					type: "button",
					onClick: r[2] ||= (e) => n("selectTab", "wfrp-config")
				}, " WFRP Config ", 2)) : G("", !0)
			]),
			H("button", {
				disabled: e.isBusy,
				type: "button",
				onClick: r[3] ||= (e) => n("addBlank")
			}, [...r[7] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), W(" Blank ", -1)]], 8, Nd),
			H("button", {
				disabled: e.isBusy,
				type: "button",
				onClick: r[4] ||= (e) => n("addWolfkin")
			}, [...r[8] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-scroll"
			}, null, -1), W(" Wolfkin ", -1)]], 8, Pd),
			H("button", {
				disabled: e.isBusy,
				type: "button",
				onClick: r[5] ||= (e) => n("reload")
			}, [...r[9] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-rotate-right"
			}, null, -1), W(" Reload ", -1)]], 8, Fd),
			H("button", {
				disabled: !e.canSave,
				class: "species-builder__primary-action",
				type: "button",
				onClick: r[6] ||= (e) => n("save")
			}, [...r[10] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-floppy-disk"
			}, null, -1), W(" Save ", -1)]], 8, Id)
		])]));
	}
}), Rd = { class: "species-builder__settings-panel" }, zd = { class: "species-builder__check-row" }, Bd = ["checked", "disabled"], Vd = /* @__PURE__ */ I({
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
		return (t, i) => (z(), B("section", Rd, [i[2] ||= H("div", { class: "species-builder__section-heading" }, [H("h2", null, "Settings")], -1), H("label", zd, [H("input", {
			checked: e.showGeneratedConfigTab,
			disabled: e.isDisabled,
			type: "checkbox",
			onChange: i[0] ||= (e) => n("updateShowGeneratedConfigTab", r(e))
		}, null, 40, Bd), i[1] ||= H("span", null, "Show WFRP config tab", -1)])]));
	}
}), Hd = { class: "species-builder__preview-panel" }, Ud = ["value"], Wd = /* @__PURE__ */ I({
	__name: "WfrpConfigPanel",
	props: { generatedConfigText: {} },
	setup(e) {
		return (t, n) => (z(), B("section", Hd, [n[0] ||= H("div", { class: "species-builder__section-heading" }, [H("h2", null, "WFRP Config")], -1), H("textarea", {
			value: e.generatedConfigText,
			readonly: "",
			spellcheck: "false"
		}, null, 8, Ud)]));
	}
}), Gd = {
	class: "species-builder__status",
	"aria-live": "polite"
}, Kd = {
	key: 0,
	class: "species-builder__message species-builder__message--error"
}, qd = {
	key: 1,
	class: "species-builder__message species-builder__message--warning"
}, Jd = {
	key: 2,
	class: "species-builder__message species-builder__message--warning"
}, Yd = {
	key: 3,
	class: "species-builder__message species-builder__message--warning"
}, Xd = {
	key: 4,
	class: "species-builder__message species-builder__message--warning"
}, Zd = {
	key: 5,
	class: "species-builder__message"
}, Qd = {
	key: 6,
	class: "species-builder__message"
}, $d = {
	key: 0,
	class: "species-builder__workspace"
}, ef = {
	key: 1,
	class: "species-builder__workspace"
}, tf = {
	key: 2,
	class: "species-builder__workspace species-builder__workspace--editor"
}, nf = { class: "species-builder__list-panel" }, rf = { class: "species-builder__section-heading" }, af = {
	key: 0,
	class: "species-builder__empty-list"
}, of = ["onClick"], sf = {
	key: 1,
	class: "species-builder__detail-panel species-builder__detail-panel--empty"
}, cf = /* @__PURE__ */ I({
	__name: "SpeciesBuilderApp",
	props: {
		bridge: {},
		onSettingsSaved: { type: Function }
	},
	setup(e) {
		let t = e, n = gl(t.bridge, { onSettingsSaved: t.onSettingsSaved }), r = /* @__PURE__ */ P("edit"), i = /* @__PURE__ */ P(null), a = K(() => n.isLoading.value || n.isSaving.value);
		kr(() => {
			n.loadSettings();
		}), Jn(() => n.showGeneratedConfigTab.value, (e) => {
			!e && r.value === "wfrp-config" && (r.value = "edit");
		});
		function o(e) {
			return e.name.trim() || e.key.trim() || "Untitled Species";
		}
		function s(e) {
			return e.key.trim() || Oc(e);
		}
		function c(e) {
			(e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement || e.target instanceof HTMLTextAreaElement) && e.stopPropagation();
		}
		function l() {
			let e = n.selectedDefinition.value;
			e && (i.value = {
				kind: "species",
				message: `Delete species "${o(e)}"?`
			});
		}
		function u(e) {
			let t = n.selectedDefinition.value?.subspecies?.[e];
			t && (i.value = {
				index: e,
				kind: "subspecies",
				message: `Delete subspecies "${t.name.trim() || t.key.trim() || "Untitled Subspecies"}"?`
			});
		}
		function d() {
			let e = i.value;
			e && (e.kind === "species" ? n.deleteSelectedDefinition() : n.deleteSubspecies(e.index), i.value = null);
		}
		return (e, t) => (z(), B("main", {
			class: "species-builder",
			onKeydown: c,
			onKeyup: c
		}, [
			U(Ld, {
				"active-tab": r.value,
				"can-save": F(n).canSave.value,
				"is-busy": a.value,
				"show-generated-config-tab": F(n).showGeneratedConfigTab.value,
				onAddBlank: F(n).addBlankDefinition,
				onAddWolfkin: F(n).addWolfkinExample,
				onReload: F(n).loadSettings,
				onSave: F(n).saveSettings,
				onSelectTab: t[0] ||= (e) => r.value = e
			}, null, 8, [
				"active-tab",
				"can-save",
				"is-busy",
				"show-generated-config-tab",
				"onAddBlank",
				"onAddWolfkin",
				"onReload",
				"onSave"
			]),
			H("section", Gd, [F(n).loadError.value ? (z(), B("p", Kd, A(F(n).loadError.value), 1)) : F(n).duplicateKeys.value.length > 0 ? (z(), B("p", qd, " Duplicate species key: " + A(F(n).duplicateKeys.value.join(", ")), 1)) : F(n).duplicateSubspeciesKeys.value.length > 0 ? (z(), B("p", Jd, " Duplicate subspecies key in " + A(F(n).duplicateSubspeciesKeys.value[0]?.speciesName) + ": " + A(F(n).duplicateSubspeciesKeys.value[0]?.keys.join(", ")), 1)) : F(n).invalidDefinitionIndexes.value.length > 0 ? (z(), B("p", Yd, " Species need both a key and name before saving. ")) : F(n).invalidSubspeciesEntries.value.length > 0 ? (z(), B("p", Xd, " Subspecies need both a key and name before saving. ")) : F(n).message.value ? (z(), B("p", Zd, A(F(n).message.value), 1)) : F(n).hasUnsavedChanges.value ? (z(), B("p", Qd, " Unsaved changes. ")) : G("", !0)]),
			U(Ss, {
				message: i.value?.message,
				onClose: t[1] ||= (e) => i.value = null,
				onConfirm: d
			}, null, 8, ["message"]),
			r.value === "settings" ? (z(), B("section", $d, [U(Vd, {
				"is-disabled": a.value,
				"show-generated-config-tab": F(n).showGeneratedConfigTab.value,
				onUpdateShowGeneratedConfigTab: F(n).updateShowGeneratedConfigTab
			}, null, 8, [
				"is-disabled",
				"show-generated-config-tab",
				"onUpdateShowGeneratedConfigTab"
			])])) : r.value === "wfrp-config" ? (z(), B("section", ef, [U(Wd, { "generated-config-text": F(n).generatedConfigText.value }, null, 8, ["generated-config-text"])])) : (z(), B("section", tf, [H("aside", nf, [
				H("div", rf, [t[6] ||= H("h2", null, "Species", -1), H("span", null, A(F(n).definitions.value.length), 1)]),
				F(n).definitions.value.length === 0 ? (z(), B("div", af, " No species. ")) : G("", !0),
				(z(!0), B(R, null, L(F(n).definitions.value, (e, t) => (z(), B("button", {
					key: `${e.key}-${t}`,
					class: k([{ "species-builder__species-button--active": t === F(n).selectedIndex.value }, "species-builder__species-button"]),
					type: "button",
					onClick: (e) => F(n).selectDefinition(t)
				}, [H("strong", null, A(o(e)), 1), H("span", null, A(s(e)), 1)], 10, of))), 128))
			]), F(n).selectedDefinition.value ? (z(), V(kd, {
				key: 0,
				definition: F(n).selectedDefinition.value,
				"is-loading": F(n).isLoading.value,
				"is-saving": F(n).isSaving.value,
				"random-talent-sources": F(n).randomTalentSources.value,
				onAddSubspecies: F(n).addSubspecies,
				onArrayFieldDrop: F(n).appendArrayFieldDrop,
				onCareerReplacementChoiceDrop: F(n).setCareerReplacementChoiceDrop,
				onCareerReplacementRolledDrop: F(n).setCareerReplacementRolledDrop,
				onDelete: l,
				onDeleteSubspecies: u,
				onDuplicate: F(n).duplicateSelectedDefinition,
				onLinkedItemDrop: F(n).setLinkedItemDrop,
				onOpenItem: F(n).openItemSheet,
				onSubspeciesArrayFieldDrop: F(n).appendSubspeciesArrayFieldDrop,
				onSubspeciesLinkedItemDrop: F(n).setSubspeciesLinkedItemDrop,
				onSubspeciesTalentChoiceDrop: F(n).setSubspeciesTalentChoiceDrop,
				onSubspeciesTalentReplacementReplacementDrop: t[2] ||= (e, t, r) => F(n).setSubspeciesTalentReplacementDrop(e, t, "replacement", r),
				onSubspeciesTalentReplacementRolledDrop: t[3] ||= (e, t, r) => F(n).setSubspeciesTalentReplacementDrop(e, t, "rolled", r),
				onTalentReplacementReplacementDrop: t[4] ||= (e, t) => F(n).setTalentReplacementDrop(e, "replacement", t),
				onTalentReplacementRolledDrop: t[5] ||= (e, t) => F(n).setTalentReplacementDrop(e, "rolled", t),
				onTalentChoiceDrop: F(n).setTalentChoiceDrop,
				onUpdateArrayField: F(n).updateArrayField,
				onUpdateBooleanField: F(n).updateBooleanField,
				onUpdateCareerReplacementRows: F(n).updateCareerReplacementRows,
				onUpdateCharacteristic: F(n).updateCharacteristic,
				onUpdateHeightField: F(n).updateHeightField,
				onUpdateLinkedItems: F(n).updateLinkedItems,
				onUpdateLinkedTalents: F(n).updateLinkedTalents,
				onUpdateNumberField: F(n).updateNumberField,
				onUpdateStringField: F(n).updateStringField,
				onUpdateSubspeciesArrayField: F(n).updateSubspeciesArrayField,
				onUpdateSubspeciesCharacteristic: F(n).updateSubspeciesCharacteristic,
				onUpdateSubspeciesLinkedItems: F(n).updateSubspeciesLinkedItems,
				onUpdateSubspeciesLinkedTalents: F(n).updateSubspeciesLinkedTalents,
				onUpdateSubspeciesNumberField: F(n).updateSubspeciesNumberField,
				onUpdateSubspeciesStringField: F(n).updateSubspeciesStringField,
				onUpdateSubspeciesTalentReplacementRows: F(n).updateSubspeciesTalentReplacementRows,
				onUpdateSubspeciesTextMapField: F(n).updateSubspeciesTextMapField,
				onUpdateTalentReplacementRows: F(n).updateTalentReplacementRows,
				onUpdateTextMapField: F(n).updateTextMapField
			}, null, 8, /* @__PURE__ */ "definition.is-loading.is-saving.random-talent-sources.onAddSubspecies.onArrayFieldDrop.onCareerReplacementChoiceDrop.onCareerReplacementRolledDrop.onDuplicate.onLinkedItemDrop.onOpenItem.onSubspeciesArrayFieldDrop.onSubspeciesLinkedItemDrop.onSubspeciesTalentChoiceDrop.onTalentChoiceDrop.onUpdateArrayField.onUpdateBooleanField.onUpdateCareerReplacementRows.onUpdateCharacteristic.onUpdateHeightField.onUpdateLinkedItems.onUpdateLinkedTalents.onUpdateNumberField.onUpdateStringField.onUpdateSubspeciesArrayField.onUpdateSubspeciesCharacteristic.onUpdateSubspeciesLinkedItems.onUpdateSubspeciesLinkedTalents.onUpdateSubspeciesNumberField.onUpdateSubspeciesStringField.onUpdateSubspeciesTalentReplacementRows.onUpdateSubspeciesTextMapField.onUpdateTalentReplacementRows.onUpdateTextMapField".split("."))) : (z(), B("section", sf, " No species selected. "))]))
		], 32));
	}
}), $ = "wfrp4e-customizer-apps", lf = "wfrp4e", uf = typeof window < "u", df, ff = (e) => df = e, pf = Symbol();
function mf(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var hf;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(hf ||= {});
var gf = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function _f(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function vf(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		Cf(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function yf(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function bf(e) {
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
var xf = typeof navigator == "object" ? navigator : { userAgent: "" }, Sf = /Macintosh/.test(xf.userAgent) && /AppleWebKit/.test(xf.userAgent) && !/Safari/.test(xf.userAgent), Cf = uf ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Sf ? wf : "msSaveOrOpenBlob" in xf ? Tf : Ef : () => {};
function wf(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? bf(r) : yf(r.href) ? vf(e, t, n) : (r.target = "_blank", bf(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		bf(r);
	}, 0));
}
function Tf(e, t = "download", n) {
	if (typeof e == "string") if (yf(e)) vf(e, t, n);
	else {
		let t = document.createElement("a");
		t.href = e, t.target = "_blank", setTimeout(function() {
			bf(t);
		});
	}
	else navigator.msSaveOrOpenBlob(_f(e, n), t);
}
function Ef(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return vf(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(gf.HTMLElement)) || "safari" in gf, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || Sf) && typeof FileReader < "u") {
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
var { assign: Df } = Object;
function Of() {
	let e = ke(!0), t = e.run(() => /* @__PURE__ */ P({})), n = [], r = [], i = Xt({
		install(e) {
			ff(i), i._a = e, e.provide(pf, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var kf = () => {};
function Af(e, t, n, r = kf) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && Ae() && je(i), i;
}
function jf(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var Mf = (e) => e(), Nf = Symbol(), Pf = Symbol();
function Ff(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		mf(i) && mf(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ N(r) && !/* @__PURE__ */ Kt(r) ? e[n] = Ff(i, r) : e[n] = r;
	}
	return e;
}
var If = Symbol();
function Lf(e) {
	return !mf(e) || !Object.prototype.hasOwnProperty.call(e, If);
}
var { assign: Rf } = Object;
function zf(e) {
	return !!(/* @__PURE__ */ N(e) && e.effect);
}
function Bf(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), Rf(/* @__PURE__ */ rn(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Xt(K(() => {
			ff(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = Vf(e, l, t, n, r, !0), c;
}
function Vf(e, t, n = {}, r, i, a) {
	let o, s = Rf({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = r.state.value[e];
	!a && !p && (r.state.value[e] = {});
	let m;
	function h(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: hf.patchFunction,
			storeId: e,
			events: void 0
		}) : (Ff(r.state.value[e], t), n = {
			type: hf.patchObject,
			payload: t,
			storeId: e,
			events: void 0
		});
		let i = m = Symbol();
		On().then(() => {
			m === i && (l = !0);
		}), u = !0, jf(d, n, r.state.value[e]);
	}
	let g = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			Rf(e, t);
		});
	} : kf;
	function _() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let v = (t, n = "") => {
		if (Nf in t) return t[Pf] = n, t;
		let i = function() {
			ff(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			jf(f, {
				args: n,
				name: i[Pf],
				store: y,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : y, n);
			} catch (e) {
				throw jf(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (jf(a, e), e)).catch((e) => (jf(o, e), Promise.reject(e))) : (jf(a, l), l);
		};
		return i[Nf] = !0, i[Pf] = n, i;
	}, y = /* @__PURE__ */ Ht({
		_p: r,
		$id: e,
		$onAction: Af.bind(null, f),
		$patch: h,
		$reset: g,
		$subscribe(t, n = {}) {
			let i = Af(d, t, n.detached, () => a()), a = o.run(() => Jn(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: hf.direct,
					events: void 0
				}, r);
			}, Rf({}, c, n)));
			return i;
		},
		$dispose: _
	});
	r._s.set(e, y);
	let b = (r._a && r._a.runWithContext || Mf)(() => r._e.run(() => (o = ke()).run(() => t({ action: v }))));
	for (let t in b) {
		let n = b[t];
		/* @__PURE__ */ N(n) && !zf(n) || /* @__PURE__ */ Kt(n) ? a || (p && Lf(n) && (/* @__PURE__ */ N(n) ? n.value = p[t] : Ff(n, p[t])), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = v(n, t), s.actions[t] = n);
	}
	return Rf(y, b), Rf(/* @__PURE__ */ M(y), b), Object.defineProperty(y, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			h((t) => {
				Rf(t, e);
			});
		}
	}), r._p.forEach((e) => {
		Rf(y, o.run(() => e({
			store: y,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), p && a && n.hydrate && n.hydrate(y.$state, p), l = !0, u = !0, y;
}
function Hf(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Gn();
		return n ||= o ? Wn(pf, null) : null, n && ff(n), n = df, n._s.has(e) || (i ? Vf(e, t, r, n) : Bf(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
function Uf(e) {
	let t = /* @__PURE__ */ M(e), n = {};
	for (let r in t) {
		let i = t[r];
		i.effect ? n[r] = K({
			get: () => e[r],
			set(t) {
				e[r] = t;
			}
		}) : (/* @__PURE__ */ N(i) || /* @__PURE__ */ Kt(i)) && (n[r] = /* @__PURE__ */ sn(e, r));
	}
	return n;
}
//#endregion
//#region src/state/pinia.ts
var Wf = Of(), Gf = class extends foundry.applications.api.ApplicationV2 {
	#e;
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("wfrp4e-customizer-vue-root", "root"), n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("wfrp4e-customizer-vue-app", "vue-app"), t.replaceChildren(e);
		let r = this.getVueProps() ?? {};
		this.#e = ps(this.getVueComponent(), r), this.#e.use(Wf), this.#e.mount(e);
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
function Kf(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Actor";
}
function qf(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Item";
}
function Jf(e, t = "Expected a Foundry Actor.") {
	if (!Kf(e)) throw Error(t);
	return e;
}
function Yf(e, t = "Expected a Foundry Item.") {
	if (!qf(e)) throw Error(t);
	return e;
}
function Xf(e, t, n = `Expected a Foundry ${t} Item.`) {
	let r = Yf(e, n);
	if (r.type !== t) throw Error(n);
	return r;
}
//#endregion
//#region src/module/foundry/drop-data.ts
function Zf(e) {
	try {
		return JSON.parse(e);
	} catch {
		throw Error("Foundry drop data could not be read.");
	}
}
//#endregion
//#region src/module/apps/species-builder/item-drops.ts
async function Qf(e, t) {
	let n = Zf(e);
	if (n.type !== "Item" || !n.uuid) throw Error(`Drop a Foundry ${t} item here.`);
	let r = Yf(await fromUuid(n.uuid), `Drop a Foundry ${t} item here.`);
	if (r.type !== t) throw Error(`Drop a Foundry ${t} item here.`);
	let i = {
		name: r.name,
		type: t,
		uuid: r.uuid
	};
	return r.img && (i.img = r.img), i;
}
async function $f(e) {
	Yf(await fromUuid(e), "The linked Foundry Item was not found.").sheet?.render(!0);
}
//#endregion
//#region src/module/apps/species-builder/random-talent-sources.ts
var ep = {
	key: "talents",
	label: "Talents - Character Creation"
};
function tp() {
	let e = /* @__PURE__ */ new Map();
	e.set(ep.key, ep);
	for (let t of game.tables?.contents ?? []) {
		let n = t.getFlag("wfrp4e", "key");
		if (typeof n != "string" || !n.trim()) continue;
		let r = np(n, t);
		e.set(n, {
			key: n,
			label: r
		});
	}
	return [...e.values()].sort(rp);
}
function np(e, t) {
	let n = game.wfrp4e?.tables?.findTable?.(e);
	return (J(n) && typeof n.name == "string" ? n.name : t.name).trim() || e;
}
function rp(e, t) {
	return e.key === ep.key ? -1 : t.key === ep.key ? 1 : e.label.localeCompare(t.label);
}
//#endregion
//#region src/functions/species-builder/default-species-builder-settings.ts
function ip() {
	return {
		definitions: [],
		showGeneratedConfigTab: !1
	};
}
//#endregion
//#region src/module/settings/foundry-setting-adapter.ts
function ap(e) {
	return e;
}
function op(e) {
	game.settings.register($, e.key, {
		config: e.config ?? !1,
		default: e.defaultValue,
		name: e.name,
		scope: e.scope ?? "world",
		type: Object
	});
}
function sp(e) {
	return e.normalize(game.settings.get($, e.key));
}
async function cp(e, t) {
	let n = e.normalize(t);
	return await game.settings.set($, e.key, n), n;
}
//#endregion
//#region src/module/apps/species-builder/settings.ts
var lp = ap({
	defaultValue: ip(),
	key: "speciesBuilderSettings",
	name: "Species Builder Settings",
	normalize: nc
});
function up() {
	op(lp);
}
function dp() {
	return sp(lp);
}
async function fp(e) {
	return await cp(lp, e);
}
//#endregion
//#region src/module/apps/species-builder/foundry-bridge.ts
var pp = {
	loadSettings: async () => dp(),
	loadRandomTalentSources: async () => tp(),
	openItemSheet: $f,
	resolveItemDrop: Qf,
	saveSettings: fp
};
//#endregion
//#region src/module/apps/species-builder/reload-confirmation.ts
function mp() {
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
var hp = class extends Gf {
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
		return cf;
	}
	getVueProps() {
		return {
			bridge: pp,
			onSettingsSaved: () => {
				this.#e = !0;
			}
		};
	}
	async _preClose(e) {
		let t = this.#e;
		this.#e = !1, t && await mp() && window.location.reload(), await super._preClose(e);
	}
}, gp = {
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
function _p(e) {
	let t = {
		characteristics: 0,
		skills: 0,
		talents: 0,
		total: 0
	};
	for (let n of e) {
		let e = vp(n);
		n.kind === "characteristic" ? t.characteristics += e : n.kind === "skill" ? t.skills += e : t.talents += e;
	}
	return t.total = t.characteristics + t.skills + t.talents, t;
}
function vp(e) {
	let t = yp(e);
	return e.kind === "talent" ? xp(Math.max(0, Math.floor(e.current)), Math.max(0, Math.floor(e.baseAdvances))) : bp(t, e.kind === "characteristic" ? gp.characteristic : gp.skill);
}
function yp(e) {
	return Math.max(0, Math.floor(e.baseAdvances + e.current));
}
function bp(e, t) {
	let n = Math.max(0, Math.floor(e)), r = 0;
	for (let e = 0; e < n; e += 1) {
		let n = Math.min(Math.floor(e / 5), t.length - 1);
		r += t[n] ?? 0;
	}
	return r;
}
function xp(e, t = 0) {
	let n = Math.max(0, Math.floor(e)), r = Math.max(0, Math.floor(t)), i = 0;
	for (let e = 0; e < n; e += 1) i += (r + e + 1) * 100;
	return i;
}
//#endregion
//#region src/functions/npc-builder/create-default-trait-config.ts
function Sp() {
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
function Cp(e, t) {
	return `${e}:${kp(t)}`;
}
function wp(e) {
	let t = e.level ?? 1;
	return Number.isFinite(t) ? Math.max(1, Math.floor(t)) * 5 : 5;
}
function Tp(e) {
	return e.name;
}
function Ep(e, t) {
	return e === "characteristic" ? t.allowBaseActorCharacteristics : e === "skill" ? t.allowBaseActorSkills : t.allowBaseActorTalents;
}
function Dp(e, t) {
	return {
		...Sp(),
		...e,
		...t
	};
}
function Op(e, t) {
	return kp(e) === kp(t);
}
function kp(e) {
	return e.trim().toLocaleLowerCase();
}
function Ap(e) {
	return Number.isFinite(e) ? Math.max(1, Math.floor(e)) : 1;
}
function jp(e) {
	let t = 0;
	for (let n of e) t += n.count;
	return t;
}
function Mp(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = kp(r);
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
//#endregion
//#region src/functions/npc-builder/skill-specialization.ts
function Np(e, t, n) {
	return `${e}:${Rp(t)}:${n}`;
}
function Pp(e, t) {
	let n = e.trim(), r = t.trim();
	return r ? `${n} (${r})` : n;
}
function Fp(e) {
	let t = /^(?<base>.+?)\s*\((?<specialization>[^)]+)\)\s*$/.exec(e.trim());
	if (!t?.groups) return null;
	let n = t.groups.base?.trim() ?? "", r = t.groups.specialization?.trim() ?? "";
	return !n || !r || Ip(e) ? null : {
		baseName: n,
		originalName: e,
		specialization: r
	};
}
function Ip(e) {
	let t = /^(?<base>.+?)\s*\((?<specialization>[^)]+)\)\s*$/.exec(e.trim());
	if (!t?.groups) return null;
	let n = t.groups.base?.trim() ?? "", r = t.groups.specialization?.trim() ?? "", i = Bp(r);
	return !n || !r || !zp(r, i) ? null : {
		baseName: n,
		options: i,
		originalName: e,
		specialization: r
	};
}
function Lp(e, t) {
	let n = /* @__PURE__ */ new Map();
	return t.map((t) => {
		let r = Rp(t), i = n.get(r) ?? 0;
		return n.set(r, i + 1), {
			occurrence: i,
			originalName: t,
			resolutionKey: Np(e, t, i)
		};
	});
}
function Rp(e) {
	return e.trim().replaceAll(/\s+/g, " ").toLocaleLowerCase();
}
function zp(e, t) {
	return e.trim().toLocaleLowerCase() === "any" || t.length > 1;
}
function Bp(e) {
	return e.split(/\s+or\s+/i).map((e) => e.trim()).filter(Boolean);
}
//#endregion
//#region src/state/npc-builder-store/advancements/source-counts.ts
function Vp(e, t) {
	return t <= 0 ? [] : [{
		count: t,
		kind: "career",
		label: `${e} extra time`
	}];
}
function Hp(e, t) {
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
function Up(e, t, n, r) {
	let i = Gp(Wp(e, r), n);
	return i.value === null ? t : Math.min(t, Math.max(0, i.value - e.baseAdvances));
}
function Wp(e, t) {
	let n = t[kp(e.name)];
	return {
		maximumFormula: e.talentMaximumFormula ?? n?.maximumFormula ?? "",
		maximumKey: e.talentMaximumKey ?? n?.maximumKey ?? ""
	};
}
function Gp(e, t) {
	let n = e.maximumKey.trim().toLocaleLowerCase();
	if (!n) return {
		label: "Unknown",
		value: null
	};
	if (n === "none") return {
		label: "-",
		value: null
	};
	if (n === "custom") return Kp(e.maximumFormula, t);
	let r = Number(n);
	if (Number.isFinite(r)) {
		let e = Math.max(0, Math.floor(r));
		return {
			label: `${e}`,
			value: e
		};
	}
	if (Gs(n)) {
		let e = t[n] ?? 0, r = Math.max(0, Math.floor(e / 10));
		return {
			label: `${Us[n]} Bonus (${r})`,
			value: r
		};
	}
	return {
		label: e.maximumKey || "Unknown",
		value: null
	};
}
function Kp(e, t) {
	let n = e.trim(), r = Number(n);
	if (Number.isFinite(r)) {
		let e = Math.max(0, Math.floor(r));
		return {
			label: `${e}`,
			value: e
		};
	}
	let i = /@characteristics\.([a-z]+)\.bonus/i.exec(n)?.[1]?.toLocaleLowerCase();
	if (i && Gs(i)) {
		let e = t[i] ?? 0, n = Math.max(0, Math.floor(e / 10));
		return {
			label: `${Us[i]} Bonus (${n})`,
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
function qp(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e.careers) {
		let i = Mp(Xp(r, t, e.skillGrantResolutions)), a = wp(r) / 5, o = Math.max(0, Ap(r.quantity) - 1) * 5;
		for (let e of i) {
			let i = Cp(t, e), s = n.get(i);
			if (s) {
				a > s.highestLevel && (s.highestLevel = a, s.highestLevelSource = Tp(r)), o > 0 && s.extraSources.push({
					count: o,
					kind: "career",
					label: `${r.name} extra time`
				});
				continue;
			}
			n.set(i, {
				extraSources: Vp(r.name, o),
				highestLevel: a,
				highestLevelSource: Tp(r),
				name: e
			});
		}
	}
	for (let r of n.values()) Yp(e, {
		careerValue: r.highestLevel * 5 + jp(r.extraSources),
		kind: t,
		name: r.name,
		sources: [{
			count: r.highestLevel * 5,
			kind: "career",
			label: r.highestLevelSource
		}, ...r.extraSources]
	});
}
function Jp(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.careers) {
		let r = Mp(Xp(n, "talent", e.skillGrantResolutions)), i = Math.max(0, Ap(n.quantity) - 1);
		for (let e of r) {
			let r = Cp("talent", e), a = t.get(r);
			if (a) {
				i > 0 && a.extraSources.push({
					count: i,
					kind: "career",
					label: `${n.name} extra time`
				});
				continue;
			}
			t.set(r, {
				extraSources: Vp(n.name, i),
				firstSource: n.name,
				name: e
			});
		}
	}
	for (let n of t.values()) Yp(e, {
		careerValue: 1 + jp(n.extraSources),
		kind: "talent",
		name: n.name,
		sources: [{
			count: 1,
			kind: "career",
			label: n.firstSource
		}, ...n.extraSources]
	}, e.characteristicTotals);
}
function Yp(e, t, n = {}) {
	let r = Cp(t.kind, t.name), i = e.entries.get(r);
	if (i) {
		let r = t.kind === "talent" && i.includedFromBase ? t.sources.slice(1) : t.sources, a = t.kind === "talent" ? Up(i, jp(r), n, e.talentMaximums) : t.careerValue;
		i.careerValue = a, i.includedFromCareer = !0, i.sources = [...i.sources.filter((e) => e.kind === "base"), ...Hp(r, a)];
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
	t.kind === "talent" && (a.careerValue = Up(a, t.careerValue, n, e.talentMaximums), a.current = a.careerValue, a.sources = Hp(t.sources, a.careerValue)), e.entries.set(r, { ...a });
}
function Xp(e, t, n) {
	return t === "characteristic" ? e.grants.characteristics : t === "skill" ? Lp(e.uuid, e.grants.skills).map((e) => n[e.resolutionKey] || e.originalName) : e.grants.talents;
}
//#endregion
//#region src/state/npc-builder-store/advancements/entry-context.ts
function Zp(e, t) {
	let n = {};
	for (let r of e.values()) {
		if (r.kind !== "characteristic") continue;
		let e = Ws[kp(r.name)];
		if (!e) continue;
		let i = t[Cp(r.kind, r.name)] ?? 0, a = Math.max(r.minimumCurrent, Math.floor(r.careerValue + i));
		n[e] = Math.max(0, r.baseValue + a);
	}
	return n;
}
function Qp(e, t, n) {
	return e.kind === "skill" ? $p(e, t, n) : e.kind === "talent" ? em(e, t, n) : e;
}
function $p(e, t, n) {
	let r = tm(e.name, n.skillCharacteristics) ?? nm(e.name, n.baseActorDraftData);
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
function em(e, t, n) {
	let r = Wp(e, n.talentMaximums), i = Gp(r, t);
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
function tm(e, t) {
	return t[kp(e)] ?? null;
}
function nm(e, t) {
	let n = t.advancements.find((t) => t.kind === "skill" && Op(t.name, e));
	return n?.characteristicKey ? {
		characteristicKey: n.characteristicKey,
		characteristicName: n.characteristicName ?? Us[n.characteristicKey],
		skillName: e
	} : null;
}
//#endregion
//#region src/state/npc-builder-store/advancements/index.ts
function rm(e) {
	let { baseActorDraftData: t, careers: n, manualAdvancementDeltas: r, settings: i, skillCharacteristics: a, skillGrantResolutions: o, talentMaximums: s } = e, c = K(() => {
		let e = u(), c = {
			careers: n.value,
			entries: e,
			skillGrantResolutions: o.value,
			talentMaximums: s.value
		};
		qp(c, "characteristic"), qp(c, "skill");
		let l = Zp(e, r.value);
		return Jp({
			...c,
			characteristicTotals: l
		}), [...e.values()].filter((e) => e.includedFromCareer || Ep(e.kind, i.value)).map((e) => {
			let n = Qp(e, l, {
				baseActorDraftData: t.value,
				manualAdvancementDeltas: r.value,
				skillCharacteristics: a.value,
				talentMaximums: s.value
			}), i = Cp(e.kind, e.name), o = r.value[i] ?? 0, c = n.careerValue + o;
			return {
				...n,
				current: Math.max(n.minimumCurrent, Math.floor(c))
			};
		}).sort((e, t) => e.kind === t.kind ? e.name.localeCompare(t.name) : e.kind.localeCompare(t.kind));
	}), l = K(() => _p(c.value));
	function u() {
		let e = /* @__PURE__ */ new Map();
		for (let n of t.value.advancements) {
			let t = Cp(n.kind, n.name), r = {
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
			n.characteristicKey && (r.characteristicKey = n.characteristicKey, r.characteristicName = n.characteristicName ?? Us[n.characteristicKey]), n.kind === "talent" && n.baseAdvances > 0 && r.sources.push({
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
			...Object.fromEntries(e.map((e) => [kp(e.skillName), e]))
		};
	}
	function p(e) {
		s.value = {
			...s.value,
			...Object.fromEntries(e.map((e) => [kp(e.talentName), e]))
		};
	}
	function m(e, t) {
		let n = Cp(e.kind, e.name), i = Number.isFinite(t) ? t : 0;
		r.value[n] = Math.max(e.minimumCurrent, Math.floor(i)) - e.careerValue;
	}
	function h(e, t) {
		let n = Number.isFinite(t) ? t : 0;
		m(e, Math.max(e.minimumTotal, Math.floor(n)) - e.baseValue);
	}
	function g(e) {
		let t = Cp(e.kind, e.name);
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
function im(e) {
	let { actorName: t, baseActors: n, careers: r, clearBaseDraftData: i, customSpells: a, customTraits: o, customTrappings: s, detectedSpells: c, ignoredBaseTraitKeys: l, magicLoreResolutions: u, removeSkillGrantResolutionsForCareer: d, selectedBaseActorUuid: f, selectedPortraitPath: p, settings: m, skillGrantResolutions: h, spellSelectionOverrides: g } = e, _ = K(() => n.value.find((e) => e.uuid === f.value) ?? null), v = K(() => r.value.at(-1) ?? null), y = K(() => {
		let e = v.value?.name, t = m.value.includeSpeciesInName && _.value?.species ? _.value.species : "";
		return e && t ? `${t} ${e}` : e || (_.value ? `${_.value.name} NPC` : "New NPC");
	}), b = K(() => t.value.trim() || y.value), x = K(() => v.value?.img || _.value?.prototypeTokenImg || _.value?.img || ""), S = K(() => p.value || x.value), C = K(() => {
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
			t.quantity = Ap(t.quantity + 1);
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
	function E(e, t) {
		let n = r.value[e];
		!n || e === t || t < 0 || t >= r.value.length || (r.value.splice(e, 1), r.value.splice(t, 0, n));
	}
	function D(e) {
		let [t] = r.value.splice(e, 1);
		t && d(t.uuid);
	}
	function te() {
		t.value = "", r.value = [], o.value = [], s.value = [], a.value = [], c.value = [], l.value = {}, u.value = {}, p.value = "", h.value = {}, g.value = {}, f.value = "", i();
	}
	function ne(e) {
		n.value.some((t) => t.uuid === e.uuid) || n.value.push(e), re(e.uuid);
	}
	function re(e) {
		let t = e.trim();
		f.value !== t && (p.value = ""), f.value = t;
	}
	function ie(e) {
		p.value = e;
	}
	function ae(e, t) {
		let n = r.value[e];
		n && (n.quantity = Ap(t));
	}
	return {
		addCareer: w,
		addCareerIfMissing: ee,
		finalActorName: b,
		finalCareer: v,
		finalPortraitPath: S,
		grantTotals: C,
		moveCareer: T,
		moveCareerToIndex: E,
		removeCareer: D,
		resetDraft: te,
		selectBaseActor: ne,
		selectBaseActorUuid: re,
		selectedBaseActor: _,
		selectPortrait: ie,
		setCareerQuantity: ae,
		suggestedActorName: y
	};
}
//#endregion
//#region src/functions/npc-builder/default-npc-builder-settings.ts
function am() {
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
var om = am(), sm = {
	advancements: [],
	optionalTraits: [],
	traits: [],
	trappings: []
};
function cm(e) {
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
		lowerCareerMode: lm(e.lowerCareerMode) ? e.lowerCareerMode : "prompt",
		outputActorFolderUuid: typeof e.outputActorFolderUuid == "string" ? e.outputActorFolderUuid : "",
		quickTraitFolderUuid: typeof e.quickTraitFolderUuid == "string" ? e.quickTraitFolderUuid : "",
		searchCompendiumPortraitAssets: e.searchCompendiumPortraitAssets ?? !0,
		searchFoundryPortraitAssets: e.searchFoundryPortraitAssets ?? !1,
		searchWebPortraitAssets: e.searchWebPortraitAssets ?? !1
	};
}
function lm(e) {
	return e === "auto-add-all" || e === "never" || e === "prompt";
}
//#endregion
//#region src/state/npc-builder-store/hydration.ts
function um(e) {
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
		l.value = cm(e);
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
var dm = /\(([^)]+)\)/, fm = [
	"beasts",
	"death",
	"fire",
	"heavens",
	"metal",
	"life",
	"light",
	"shadow"
], pm = [
	"daemonology",
	"necromancy",
	"nurgle",
	"slaanesh",
	"tzeentch",
	"undivided"
];
function mm(e, t) {
	let n = e.trim(), r = n.toLocaleLowerCase();
	return r === "petty magic" ? xm({
		kind: "petty-magic",
		rawLore: "Petty Magic",
		source: t,
		sourceName: n
	}) : r.startsWith("arcane magic") ? xm({
		kind: "arcane-magic",
		rawLore: Sm(n),
		source: t,
		sourceName: n
	}) : r.startsWith("spellcaster") ? xm({
		kind: "spellcaster",
		rawLore: Sm(n),
		source: t,
		sourceName: n
	}) : null;
}
function hm(e) {
	return e.trim().replace(/^any\s+/i, "").replace(/^arcane\s+lore\s+of\s+/i, "").replace(/^arcane\s+lore$/i, "").replace(/^lore\s+of\s+/i, "").replaceAll(/\s+/g, " ").toLocaleLowerCase();
}
function gm(e) {
	return `${e.source}:${e.kind}:${e.sourceName}:${e.rawLore}`;
}
function _m(e, t) {
	return {
		...e,
		isAmbiguous: !1,
		normalizedLore: hm(t),
		rawLore: t.trim()
	};
}
function vm(e) {
	let t = hm(e);
	return t === "petty" ? "petty" : fm.includes(t) ? "eight-wind" : pm.includes(t) ? "dark" : "other";
}
function ym(e, t) {
	if (e.kind === "petty-magic") return t.filter((e) => e.category === "petty");
	let n = e.rawLore.trim().toLocaleLowerCase();
	return n.includes("dark") ? t.filter((e) => e.category === "dark") : n.includes("eight winds") ? t.filter((e) => e.category === "eight-wind") : t.filter((e) => e.category !== "petty");
}
function bm(e) {
	let t = e.trim().toLocaleLowerCase();
	return !t || t === "any" || t.includes("any ");
}
function xm(e) {
	let t = e.rawLore.trim();
	return {
		isAmbiguous: bm(t),
		kind: e.kind,
		normalizedLore: hm(t),
		rawLore: t,
		resolutionKey: gm({
			kind: e.kind,
			rawLore: t,
			source: e.source,
			sourceName: e.sourceName
		}),
		source: e.source,
		sourceName: e.sourceName
	};
}
function Sm(e) {
	return dm.exec(e)?.[1]?.trim() ?? "";
}
//#endregion
//#region src/state/npc-builder-store/spells.ts
function Cm(e) {
	let { advancements: t, customSpells: n, detectedSpells: r, magicLoreResolutions: i, settings: a, spellSelectionOverrides: o, traits: s } = e, c = K(() => {
		let e = /* @__PURE__ */ new Map();
		for (let n of t.value) {
			if (n.kind !== "talent" || n.baseAdvances + n.current <= 0) continue;
			let t = mm(n.name, "talent");
			t && e.set(t.resolutionKey, v(t));
		}
		for (let t of s.value) {
			let n = mm(t.name, "trait");
			n && e.set(n.resolutionKey, v(n));
		}
		return [...e.values()];
	}), l = K(() => c.value.length > 0), u = K(() => {
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
	}), d = K(() => u.value.filter((e) => e.selected));
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
		return e.sourceUuid && e.sourceUuid === t.sourceUuid ? !0 : Op(e.name, t.name);
	}
	function v(e) {
		let t = i.value[e.resolutionKey];
		return t ? _m(e, t) : e;
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
function wm(e) {
	let { baseActorDraftData: t, customTraits: n, ignoredBaseTraitKeys: r, quickTraits: i, settings: a, traitConfigOverrides: o } = e, s = K(() => {
		let e = /* @__PURE__ */ new Map();
		if (a.value.allowBaseActorTraits) for (let n of t.value.traits) {
			let t = Tm(n);
			r.value[t] || e.set(t, {
				config: n.config,
				ignored: !1,
				key: t,
				name: n.name,
				source: "base",
				sourceUuid: n.uuid
			});
		}
		for (let t of n.value) Em(e, t.name) || e.set(t.key, { ...t });
		return [...e.values()].map((e) => ({
			...e,
			config: Dp(e.config, o.value[e.key])
		})).sort((e, t) => e.source === t.source ? e.name.localeCompare(t.name) : e.source.localeCompare(t.source));
	}), c = K(() => {
		if (!a.value.allowBaseActorTraits) return s.value;
		let e = [];
		for (let n of t.value.traits) {
			let t = Tm(n);
			r.value[t] && e.push({
				config: Dp(n.config, o.value[t]),
				ignored: !0,
				key: t,
				name: n.name,
				source: "base",
				sourceUuid: n.uuid
			});
		}
		return [...e, ...s.value];
	}), l = K(() => [...t.value.optionalTraits].map((e) => ({
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
		let i = `${e}:${t.uuid || kp(t.name)}`;
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
		s.value.some((t) => Op(t.name, e.name)) || n.value.some((t) => t.key === e.key) || n.value.push(e);
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
		return l.value.find((t) => Op(t.name, e));
	}
	function y(e) {
		return i.value.find((t) => Op(t.name, e));
	}
	function b(e) {
		let n = t.value.traits.find((t) => Op(t.name, e));
		if (!n) return null;
		let i = Tm(n);
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
function Tm(e) {
	return `base:${e.uuid || kp(e.name)}`;
}
function Em(e, t) {
	return [...e.values()].some((e) => Op(e.name, t));
}
//#endregion
//#region src/functions/npc-builder/trapping-resolution.ts
function Dm(e, t = "trapping") {
	return {
		candidates: [],
		searchTerms: jm(e),
		selectedCandidateUuid: "",
		selectedItemType: t,
		selectedName: e.trim(),
		status: "fallback"
	};
}
function Om(e) {
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
function km(e) {
	return {
		candidates: [],
		searchTerms: jm(e),
		selectedCandidateUuid: "",
		selectedItemType: "trapping",
		selectedName: e.trim(),
		status: "unresolved"
	};
}
function Am(e, t) {
	let n = jm(e), r = Nm(n, t), i = r.filter((e) => e.matchKind === "exact");
	return i.length === 1 ? Fm("matched", n, i[0]) : i.length > 1 ? Fm("ambiguous", n, i[0], { candidates: r }) : r.length ? {
		candidates: r,
		searchTerms: n,
		selectedCandidateUuid: "",
		selectedItemType: "trapping",
		selectedName: e.trim(),
		status: "ambiguous"
	} : Dm(e);
}
function jm(e) {
	let t = e.split(/\s+or\s+/i).map((e) => e.trim()).filter(Boolean);
	return t.length ? zm(t) : [e.trim()].filter(Boolean);
}
function Mm(e, t) {
	if (Im(e) === Im(t)) return "exact";
	let n = Lm(e), r = Lm(t);
	if (!n || !r) return null;
	if (n === r || n.includes(r) || r.includes(n)) return "near";
	let i = n.split(" "), a = new Set(r.split(" "));
	return i.every((e) => a.has(e)) ? "near" : null;
}
function Nm(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) for (let e of t) {
		let t = Mm(r, e.name);
		t && n.get(e.uuid)?.matchKind !== "exact" && n.set(e.uuid, {
			itemType: e.itemType,
			matchKind: t,
			name: e.name,
			searchTerm: r,
			sourceLabel: e.sourceLabel,
			uuid: e.uuid
		});
	}
	return [...n.values()].sort(Pm);
}
function Pm(e, t) {
	return e.matchKind === t.matchKind ? e.name.localeCompare(t.name) : e.matchKind === "exact" ? -1 : 1;
}
function Fm(e, t, n, r = {}) {
	return {
		candidates: r.candidates ?? (n ? [n] : []),
		searchTerms: t,
		selectedCandidateUuid: n?.uuid ?? "",
		selectedItemType: n?.itemType ?? "trapping",
		selectedName: n?.name ?? "",
		status: e
	};
}
function Im(e) {
	return e.trim().toLocaleLowerCase().replaceAll(/\s+/g, " ");
}
function Lm(e) {
	return Im(e).replaceAll("&", " and ").replaceAll(/[(),.:;[\]]/g, " ").replaceAll(/\b(a|an|the|some|pair of|pairs of)\b/g, " ").split(/\s+/).map(Rm).filter(Boolean).join(" ");
}
function Rm(e) {
	return e.endsWith("ies") && e.length > 4 ? `${e.slice(0, -3)}y` : e.endsWith("s") && !e.endsWith("ss") && e.length > 3 ? e.slice(0, -1) : e;
}
function zm(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/state/npc-builder-store/trappings.ts
function Bm(e) {
	let { baseActorDraftData: t, careers: n, customTrappings: r, settings: i, trappingOverrides: a, trappingResolutionOverrides: o } = e, s = K(() => {
		let e = /* @__PURE__ */ new Map();
		if (i.value.allowBaseActorTrappings) for (let n of t.value.trappings) {
			let t = `base:${n.uuid || kp(n.name)}`;
			e.set(t, {
				ignored: !1,
				itemType: n.itemType,
				key: t,
				name: n.name,
				quantity: n.quantity,
				resolution: Om({
					itemType: n.itemType,
					name: n.name,
					uuid: n.uuid
				}),
				source: "base",
				sourceUuid: n.uuid
			});
		}
		for (let t of n.value) for (let n of t.grants.trappings) {
			let r = `career:${kp(n)}`, i = e.get(r);
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
				resolution: o.value[r] ?? km(n),
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
				quantity: Ap(t?.quantity ?? e.quantity),
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
			quantity: Ap(t)
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
		let n = Dm(t.name, t.itemType);
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
var Vm = Hf("npc-builder", () => {
	let e = /* @__PURE__ */ P(""), t = /* @__PURE__ */ P([]), n = /* @__PURE__ */ P({}), r = /* @__PURE__ */ P({ ...sm }), i = /* @__PURE__ */ P([]), a = /* @__PURE__ */ P([]), o = /* @__PURE__ */ P([]), s = /* @__PURE__ */ P([]), c = /* @__PURE__ */ P([]), l = /* @__PURE__ */ P([]), u = /* @__PURE__ */ P(""), d = /* @__PURE__ */ P({ ...om }), f = /* @__PURE__ */ P(""), p = /* @__PURE__ */ P({}), m = /* @__PURE__ */ P({}), h = /* @__PURE__ */ P({}), g = /* @__PURE__ */ P([]), _ = /* @__PURE__ */ P([]), v = /* @__PURE__ */ P({}), y = /* @__PURE__ */ P({}), b = /* @__PURE__ */ P({}), x = /* @__PURE__ */ P({}), S = /* @__PURE__ */ P({}), C = /* @__PURE__ */ P({}), w = rm({
		baseActorDraftData: r,
		careers: a,
		manualAdvancementDeltas: n,
		settings: d,
		skillCharacteristics: p,
		skillGrantResolutions: h,
		talentMaximums: m
	}), ee = um({
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
	}), T = im({
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
	}), E = wm({
		baseActorDraftData: r,
		customTraits: o,
		ignoredBaseTraitKeys: v,
		quickTraits: l,
		settings: d,
		traitConfigOverrides: x
	}), D = Bm({
		baseActorDraftData: r,
		careers: a,
		customTrappings: s,
		settings: d,
		trappingOverrides: S,
		trappingResolutionOverrides: C
	}), te = Cm({
		advancements: w.advancements,
		customSpells: _,
		detectedSpells: g,
		magicLoreResolutions: y,
		settings: d,
		spellSelectionOverrides: b,
		traits: E.traits
	});
	return {
		actorName: e,
		actorFolders: t,
		addCareer: T.addCareer,
		addCareerIfMissing: T.addCareerIfMissing,
		addCustomSpell: te.addCustomSpell,
		addCustomTrait: E.addCustomTrait,
		addCustomTrapping: D.addCustomTrapping,
		advancements: w.advancements,
		baseActorDraftData: r,
		baseActors: i,
		buildTraits: E.buildTraits,
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
		hasMagicAccess: te.hasMagicAccess,
		hydrateActorFolders: ee.hydrateActorFolders,
		hydrateBaseActorDraftData: ee.hydrateBaseActorDraftData,
		hydrateBaseActors: ee.hydrateBaseActors,
		hydrateDetectedSpells: te.hydrateDetectedSpells,
		hydrateItemFolders: ee.hydrateItemFolders,
		hydrateQuickTraits: ee.hydrateQuickTraits,
		hydrateSettings: ee.hydrateSettings,
		hydrateSkillCharacteristics: w.hydrateSkillCharacteristics,
		hydrateTalentMaximums: w.hydrateTalentMaximums,
		itemFolders: c,
		magicGrants: te.magicGrants,
		magicLoreResolutions: y,
		moveCareer: T.moveCareer,
		moveCareerToIndex: T.moveCareerToIndex,
		optionalTraits: E.optionalTraits,
		quickTraits: l,
		removeCareer: T.removeCareer,
		removeCustomSpell: te.removeCustomSpell,
		removeCustomTrait: E.removeCustomTrait,
		removeCustomTrapping: D.removeCustomTrapping,
		resetAdvancementCurrent: w.resetAdvancementCurrent,
		resetAllAdvancementCurrents: w.resetAllAdvancementCurrents,
		resetDraft: T.resetDraft,
		selectBaseActor: T.selectBaseActor,
		selectBaseActorUuid: T.selectBaseActorUuid,
		selectedBaseActor: T.selectedBaseActor,
		selectedBaseActorUuid: f,
		selectedPortraitPath: u,
		selectedSpells: te.selectedSpells,
		selectPortrait: T.selectPortrait,
		selectTrappingResolutionCandidate: D.selectTrappingResolutionCandidate,
		setAdvancementCurrent: w.setAdvancementCurrent,
		setAdvancementTotal: w.setAdvancementTotal,
		setBaseTraitIgnored: E.setBaseTraitIgnored,
		setCareerQuantity: T.setCareerQuantity,
		setMagicGrantLoreResolution: te.setMagicGrantLoreResolution,
		setOptionalTraitSelected: E.setOptionalTraitSelected,
		setQuickTraitSelected: E.setQuickTraitSelected,
		setSkillGrantResolution: w.setSkillGrantResolution,
		setSpellSelected: te.setSpellSelected,
		setTraitConfig: E.setTraitConfig,
		setTrappingFallback: D.setTrappingFallback,
		setTrappingIgnored: D.setTrappingIgnored,
		setTrappingQuantity: D.setTrappingQuantity,
		setTrappingResolution: D.setTrappingResolution,
		settings: d,
		spells: te.spells,
		suggestedActorName: T.suggestedActorName,
		traits: E.traits,
		trappings: D.trappings
	};
}), Hm = { class: "npc-builder__subview-stack" }, Um = [
	"checked",
	"disabled",
	"onChange"
], Wm = { class: "npc-builder__subview-actions" }, Gm = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B("div", Hm, [
			H("p", null, A(e.prompt.droppedCareer.name) + " appears to belong to the " + A(e.prompt.droppedCareer.careerGroup) + " career track. The following lower-tier candidates were found. ", 1),
			(z(!0), B(R, null, L(e.candidateGroups, (t) => (z(), B("section", {
				key: t.level,
				class: "npc-builder__candidate-group"
			}, [H("h3", null, "Tier " + A(t.level || "Unknown"), 1), (z(!0), B(R, null, L(t.candidates, (t) => (z(), B("label", {
				key: t.uuid,
				class: k(["npc-builder__candidate-row", { "is-queued": e.isCareerQueued(t.uuid) }])
			}, [H("input", {
				checked: e.isCareerQueued(t.uuid) || e.isLowerCareerSelected(t.uuid),
				disabled: e.isCareerQueued(t.uuid),
				type: "checkbox",
				onChange: (e) => n("lowerCareerSelected", t, e)
			}, null, 40, Um), H("span", null, [H("strong", null, A(t.name), 1), H("small", null, [W(A(t.careerGroup || "Career") + " ", 1), e.isCareerQueued(t.uuid) ? (z(), B(R, { key: 0 }, [W(" already queued ")], 64)) : G("", !0)])])], 2))), 128))]))), 128)),
			H("div", Wm, [H("button", {
				type: "button",
				onClick: r[0] ||= (e) => n("addDroppedOnly")
			}, "Add Dropped Only"), H("button", {
				type: "button",
				onClick: r[1] ||= (e) => n("addSelected")
			}, "Add Selected")])
		]));
	}
}), Km = /* @__PURE__ */ new Map();
function qm(e) {
	let t = e.id.trim();
	if (!t) throw Error("NPC auto-advance strategies must have an id.");
	Km.set(t, {
		...e,
		id: t
	});
}
function Jm() {
	return [...Km.values()].sort((e, t) => e.name.localeCompare(t.name));
}
function Ym(e) {
	return Km.get(e) ?? null;
}
function Xm(e, t) {
	return $m(e, t, {
		kinds: ["skill"],
		respectTalentMaximums: !1
	});
}
function Zm(e, t) {
	return $m($m(e, t, {
		kinds: ["talent"],
		respectTalentMaximums: !0
	}), t, {
		kinds: ["skill"],
		respectTalentMaximums: !1
	});
}
function Qm(e, t) {
	return $m(e, t, {
		kinds: ["characteristic"],
		respectTalentMaximums: !1
	});
}
function $m(e, t, n) {
	let r = Math.max(0, Math.floor(Number.isFinite(t) ? t : 0)), i = ih(e.advancements), a = _p(i).total;
	if (a >= r) return { advancements: i };
	let o = !0;
	for (; o;) {
		o = !1;
		for (let e of i) {
			if (!n.kinds.includes(e.kind)) continue;
			let t = eh(e, n);
			if (!t) continue;
			let i = vp(t) - vp(e);
			i <= 0 || a + i > r || (e.current = t.current, a += i, o = !0);
		}
	}
	return { advancements: i };
}
function eh(e, t) {
	return t.respectTalentMaximums && e.kind === "talent" && !th(e) ? null : {
		...e,
		current: e.current + rh(e.kind)
	};
}
function th(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" ? nh(e) < t : !1;
}
function nh(e) {
	return Math.max(e.minimumTotal, e.baseValue + e.current);
}
function rh(e) {
	return e === "talent" ? 1 : 5;
}
function ih(e) {
	return e.map((e) => ({
		...e,
		sources: e.sources.map((e) => ({ ...e }))
	}));
}
qm({
	description: "Cycles visible Skill rows evenly until no next skill increase fits the target XP.",
	id: "skill-master",
	name: "Skill Master",
	run: Xm
}), qm({
	description: "Raises visible Talent rows evenly up to known maximums, then spends any remaining XP like Skill Master.",
	id: "gifted-and-talented",
	name: "Gifted & Talented",
	run: Zm
}), qm({
	description: "Cycles visible Characteristic rows evenly until no next characteristic increase fits the target XP.",
	id: "all-natural",
	name: "All Natural",
	run: Qm
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderAdvancementsTab/advancement-display.ts
function ah(e) {
	let t = e.current - e.careerValue, n = [...e.sources].sort((e, t) => mh(e.kind) - mh(t.kind)).map((e) => `${e.label} ${hh(e.count)}`);
	return t !== 0 && n.push(`Manual ${hh(t)}`), n.length ? n.join(", ") : e.includedFromBase ? "Base actor" : "-";
}
function oh(e) {
	return Ip(e) !== null;
}
function sh(e) {
	return e.kind === "talent" ? 1 : 5;
}
function ch(e) {
	return Math.max(e.minimumTotal, e.baseValue + e.current);
}
function lh(e) {
	return ch(e);
}
function uh(e) {
	return e.talentMaximumLabel ?? "Unknown";
}
function dh(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" && lh(e) > t;
}
function fh(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" && lh(e) < t;
}
function ph(e) {
	return vp(e);
}
function mh(e) {
	return e === "characteristic" ? 0 : e === "career" ? 1 : 2;
}
function hh(e) {
	return e > 0 ? `+${e}` : `${e}`;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderAdvancementsTab/AdvancementRowsPanel.vue?vue&type=script&setup=true&lang.ts
var gh = { class: "npc-builder__panel" }, _h = { class: "npc-builder__panel-heading" }, vh = {
	key: 0,
	class: "npc-builder__panel-actions"
}, yh = {
	key: 1,
	class: "npc-builder__xp-summary"
}, bh = { class: "npc-builder__table" }, xh = {
	key: 0,
	class: "npc-builder__badge"
}, Sh = { class: "npc-builder__advance-controls" }, Ch = ["disabled", "onClick"], wh = [
	"aria-label",
	"value",
	"onInput"
], Th = ["onClick"], Eh = ["disabled", "onClick"], Dh = /* @__PURE__ */ I({
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
		return (t, i) => (z(), B("section", gh, [
			H("div", _h, [H("span", null, A(e.sectionNumber), 1), H("h2", null, A(e.title), 1)]),
			e.manualAdvanceCount ? (z(), B("div", vh, [H("span", null, A(e.manualAdvanceCount) + " manual edits", 1), H("button", {
				type: "button",
				onClick: i[0] ||= (e) => n("resetAll")
			}, "Reset All Advances")])) : G("", !0),
			e.estimatedNpcXp ? (z(), B("div", yh, [
				H("strong", null, "Estimated NPC XP " + A(e.estimatedNpcXp.total), 1),
				H("span", null, A(e.estimatedNpcXp.characteristics) + " characteristics", 1),
				H("span", null, A(e.estimatedNpcXp.skills) + " skills", 1),
				H("span", null, A(e.estimatedNpcXp.talents) + " talents", 1)
			])) : G("", !0),
			H("div", bh, [i[1] ||= H("div", { class: "npc-builder__table-head" }, [
				H("span", null, "Name"),
				H("span", null, "Base"),
				H("span", null, "Advances"),
				H("span", null, "Total"),
				H("span", null, "XP"),
				H("span", null, "Sources")
			], -1), (z(!0), B(R, null, L(e.entries, (t) => (z(), B("div", {
				key: `${t.kind}:${t.name}`,
				class: k(["npc-builder__advance-row", { "is-edited": t.current !== t.careerValue }])
			}, [
				H("strong", null, [W(A(t.name) + " ", 1), e.showSkillSpecializationBadges && F(oh)(t.name) ? (z(), B("span", xh, " Needs specialization ")) : G("", !0)]),
				H("span", null, A(t.baseValue), 1),
				H("span", null, A(t.current), 1),
				H("div", Sh, [
					H("button", {
						disabled: F(ch)(t) <= t.minimumTotal,
						title: "Decrease by 5",
						type: "button",
						onClick: (e) => n("adjustCurrent", t, -1)
					}, " -5 ", 8, Ch),
					H("input", {
						"aria-label": `Total ${t.name}`,
						value: F(ch)(t),
						min: "0",
						type: "number",
						onInput: (e) => r(t, e)
					}, null, 40, wh),
					H("button", {
						title: "Increase by 5",
						type: "button",
						onClick: (e) => n("adjustCurrent", t, 1)
					}, " +5 ", 8, Th),
					H("button", {
						disabled: t.current === t.careerValue,
						title: "Reset to career value",
						type: "button",
						onClick: (e) => n("resetCurrent", t)
					}, " Reset ", 8, Eh)
				]),
				H("span", null, A(F(ph)(t)), 1),
				H("span", null, A(F(ah)(t)), 1)
			], 2))), 128))])
		]));
	}
}), Oh = { class: "npc-builder__panel" }, kh = { class: "npc-builder__auto-advance" }, Ah = { class: "npc-builder__mini-field" }, jh = ["value"], Mh = { class: "npc-builder__mini-field" }, Nh = ["value"], Ph = ["value"], Fh = ["disabled"], Ih = { key: 0 }, Lh = /* @__PURE__ */ I({
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
		return (t, a) => (z(), B("section", Oh, [a[3] ||= H("div", { class: "npc-builder__panel-heading" }, [H("span", null, "4"), H("h2", null, "Auto Advance")], -1), H("div", kh, [
			H("label", Ah, [a[1] ||= H("span", null, "Target XP", -1), H("input", {
				value: e.targetXp,
				min: "0",
				type: "number",
				onInput: r
			}, null, 40, jh)]),
			H("label", Mh, [a[2] ||= H("span", null, "Strategy", -1), H("select", {
				value: e.selectedAutoAdvanceStrategyId,
				onChange: i
			}, [(z(!0), B(R, null, L(e.autoAdvanceStrategies, (e) => (z(), B("option", {
				key: e.id,
				value: e.id
			}, A(e.name), 9, Ph))), 128))], 40, Nh)]),
			H("button", {
				disabled: !e.canRunAutoAdvance,
				title: "Advance rows as close to the target XP as possible without going over",
				type: "button",
				onClick: a[0] ||= (e) => n("runAutoAdvance")
			}, " Auto Advance ", 8, Fh),
			e.selectedAutoAdvanceStrategy ? (z(), B("span", Ih, A(e.selectedAutoAdvanceStrategy.description), 1)) : G("", !0)
		])]));
	}
}), Rh = { class: "npc-builder__panel" }, zh = { class: "npc-builder__panel-actions" }, Bh = ["disabled"], Vh = { class: "npc-builder__table" }, Hh = { class: "npc-builder__advance-controls" }, Uh = ["disabled", "onClick"], Wh = [
	"aria-label",
	"value",
	"onInput"
], Gh = ["onClick"], Kh = ["disabled", "onClick"], qh = { class: "npc-builder__maximum-cell" }, Jh = {
	key: 0,
	class: "npc-builder__status-pill npc-builder__status-pill--warning"
}, Yh = /* @__PURE__ */ I({
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
		return (t, i) => (z(), B("section", Rh, [
			i[2] ||= H("div", { class: "npc-builder__panel-heading" }, [H("span", null, "3"), H("h2", null, "Talents")], -1),
			H("div", zh, [H("span", null, A(e.maximizableTalentCount) + " below maximum", 1), H("button", {
				disabled: e.maximizableTalentCount === 0,
				title: "Raise talents with known maximums to their maximum ranks",
				type: "button",
				onClick: i[0] ||= (e) => n("maximizeTalents")
			}, " Maximize Talents ", 8, Bh)]),
			H("div", Vh, [i[1] ||= H("div", { class: "npc-builder__table-head npc-builder__table-head--talents" }, [
				H("span", null, "Name"),
				H("span", null, "Ranks"),
				H("span", null, "Maximum"),
				H("span", null, "XP"),
				H("span", null, "Sources")
			], -1), (z(!0), B(R, null, L(e.talents, (e) => (z(), B("div", {
				key: `${e.kind}:${e.name}`,
				class: k(["npc-builder__advance-row npc-builder__advance-row--talent", {
					"is-edited": e.current !== e.careerValue,
					"is-over-maximum": F(dh)(e)
				}])
			}, [
				H("strong", null, A(e.name), 1),
				H("div", Hh, [
					H("button", {
						disabled: F(lh)(e) <= e.minimumTotal,
						title: "Decrease by 1",
						type: "button",
						onClick: (t) => n("adjustCurrent", e, -1)
					}, " -1 ", 8, Uh),
					H("input", {
						"aria-label": `Ranks ${e.name}`,
						value: F(lh)(e),
						min: "0",
						type: "number",
						onInput: (t) => r(e, t)
					}, null, 40, Wh),
					H("button", {
						title: "Increase by 1",
						type: "button",
						onClick: (t) => n("adjustCurrent", e, 1)
					}, " +1 ", 8, Gh),
					H("button", {
						disabled: e.current === e.careerValue,
						title: "Reset to career value",
						type: "button",
						onClick: (t) => n("resetCurrent", e)
					}, " Reset ", 8, Kh)
				]),
				H("span", qh, [W(A(F(uh)(e)) + " ", 1), F(dh)(e) ? (z(), B("span", Jh, " Over max ")) : G("", !0)]),
				H("span", null, A(F(ph)(e)), 1),
				H("span", null, A(F(ah)(e)), 1)
			], 2))), 128))])
		]));
	}
}), Xh = { class: "npc-builder__stack" }, Zh = /* @__PURE__ */ I({
	__name: "NpcBuilderAdvancementsTab",
	setup(e) {
		let t = Vm(), { advancements: n, estimatedNpcXp: r } = Uf(t), i = Jm(), a = /* @__PURE__ */ P("skill-master"), o = /* @__PURE__ */ P(0), s = K(() => n.value.filter((e) => e.kind === "characteristic")), c = K(() => n.value.filter((e) => e.kind === "skill")), l = K(() => n.value.filter((e) => e.kind === "talent")), u = K(() => l.value.filter((e) => fh(e)).length), d = K(() => n.value.filter((e) => e.current !== e.careerValue).length), f = K(() => Ym(a.value) ?? i[0] ?? null), p = K(() => f.value !== null && o.value > r.value.total);
		Jn(() => r.value.total, (e) => {
			o.value < e && (o.value = e);
		}, { immediate: !0 });
		function m(e, n) {
			let r = ch(e) + n * sh(e);
			t.setAdvancementTotal(e, r);
		}
		function h(e) {
			t.resetAdvancementCurrent(e);
		}
		function g() {
			for (let e of l.value) {
				let n = e.talentMaximumValue;
				typeof n == "number" && lh(e) < n && t.setAdvancementTotal(e, n);
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
		return (e, n) => (z(), B("section", Xh, [
			U(Dh, {
				entries: s.value,
				"estimated-npc-xp": F(r),
				"manual-advance-count": d.value,
				"section-number": "1",
				title: "Characteristics",
				onAdjustCurrent: m,
				onResetAll: F(t).resetAllAdvancementCurrents,
				onResetCurrent: h,
				onTotalChange: v
			}, null, 8, [
				"entries",
				"estimated-npc-xp",
				"manual-advance-count",
				"onResetAll"
			]),
			U(Dh, {
				entries: c.value,
				"section-number": "2",
				"show-skill-specialization-badges": "",
				title: "Skills",
				onAdjustCurrent: m,
				onResetCurrent: h,
				onTotalChange: v
			}, null, 8, ["entries"]),
			U(Yh, {
				"maximizable-talent-count": u.value,
				talents: l.value,
				onAdjustCurrent: m,
				onMaximizeTalents: g,
				onResetCurrent: h,
				onTotalChange: v
			}, null, 8, ["maximizable-talent-count", "talents"]),
			U(Lh, {
				"auto-advance-strategies": F(i),
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
function Qh(e) {
	return [
		`Ch ${e.grants.characteristics.length}`,
		`Sk ${e.grants.skills.length}`,
		`Ta ${e.grants.talents.length}`,
		`Tr ${e.grants.trappings.length}`
	].join(" / ");
}
function $h(e) {
	let t = e.slice(0, 3).join(", "), n = e.length - 3;
	return e.length ? n > 0 ? `${t}, +${n}` : t : "-";
}
function eg(e) {
	return e.split(/\s+/).map((e) => e.at(0)).filter(Boolean).slice(0, 2).join("").toLocaleUpperCase();
}
function tg(e) {
	return `${e.label}\n${e.img}`;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/BaseActorPanel.vue?vue&type=script&setup=true&lang.ts
var ng = { class: "npc-builder__panel" }, rg = { class: "npc-builder__field-grid" }, ig = { class: "npc-builder__field" }, ag = ["value"], og = { class: "npc-builder__field" }, sg = ["disabled", "value"], cg = { value: "" }, lg = ["value"], ug = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, dg = {
	key: 1,
	class: "npc-builder__source"
}, fg = { class: "npc-builder__thumbnail" }, pg = ["src"], mg = { key: 1 }, hg = /* @__PURE__ */ I({
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
		return (t, a) => (z(), B("section", ng, [
			a[3] ||= H("div", { class: "npc-builder__panel-heading" }, [H("span", null, "1"), H("h2", null, "Base Actor")], -1),
			H("div", rg, [H("label", ig, [a[1] ||= H("span", null, "Search world actors", -1), H("input", {
				value: e.actorFilter,
				placeholder: "Filter actors",
				type: "search",
				onInput: r
			}, null, 40, ag)]), H("label", og, [a[2] ||= H("span", null, "Base statblock", -1), H("select", {
				disabled: e.isLoadingActors,
				value: e.selectedBaseActorUuid,
				onChange: i
			}, [H("option", cg, A(e.isLoadingActors ? "Loading actors..." : "Choose an actor"), 1), (z(!0), B(R, null, L(e.filteredActors, (e) => (z(), B("option", {
				key: e.uuid,
				value: e.uuid
			}, A(e.name), 9, lg))), 128))], 40, sg)])]),
			U(Pl, {
				class: "npc-builder__drop",
				description: "Use a world Actor as the starting statblock.",
				title: "Drop Actor",
				variant: "compact",
				onDropData: a[0] ||= (e) => n("actorDrop", e)
			}),
			e.errorMessage ? (z(), B("p", ug, A(e.errorMessage), 1)) : G("", !0),
			e.selectedBaseActor ? (z(), B("article", dg, [H("div", fg, [e.selectedBaseActor.img ? (z(), B("img", {
				key: 0,
				src: e.selectedBaseActor.img,
				alt: ""
			}, null, 8, pg)) : (z(), B("span", mg, A(F(eg)(e.selectedBaseActor.name)), 1))]), H("div", null, [H("strong", null, A(e.selectedBaseActor.name), 1), H("span", null, [
				W(A(e.selectedBaseActor.species || "Species not found") + " ", 1),
				e.selectedBaseActor.type ? (z(), B(R, { key: 0 }, [W(" - " + A(e.selectedBaseActor.type), 1)], 64)) : G("", !0),
				e.isLoadingBaseDraft ? (z(), B(R, { key: 1 }, [W("loading...")], 64)) : G("", !0)
			])])])) : G("", !0)
		]));
	}
}), gg = { class: "npc-builder__build-preview" }, _g = { class: "npc-builder__build-preview-heading" }, vg = { class: "npc-builder__preview-grid" }, yg = { key: 0 }, bg = { key: 0 }, xg = { key: 1 }, Sg = { class: "npc-builder__preview-grid-wide" }, Cg = {
	key: 0,
	class: "npc-builder__warnings"
}, wg = { key: 1 }, Tg = /* @__PURE__ */ I({
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
		return (t, n) => (z(), B("section", gg, [
			H("div", _g, [n[0] ||= H("h2", null, "Build Preview", -1), H("span", { class: k(["npc-builder__status-pill", { "npc-builder__status-pill--ready": e.buildPreviewStatus === "Ready" }]) }, A(e.buildPreviewStatus), 3)]),
			H("div", vg, [
				H("div", null, [
					n[1] ||= H("span", null, "Advances", -1),
					H("strong", null, A(e.advancementCount), 1),
					e.editedAdvanceCount ? (z(), B("small", yg, A(e.editedAdvanceCount) + " manually edited ", 1)) : G("", !0)
				]),
				H("div", null, [
					n[2] ||= H("span", null, "Trappings", -1),
					H("strong", null, A(e.visibleTrappingCount), 1),
					e.fallbackTrappingCount ? (z(), B("small", bg, A(e.fallbackTrappingCount) + " blank fallback ", 1)) : G("", !0),
					e.ignoredTrappingCount ? (z(), B("small", xg, A(e.ignoredTrappingCount) + " ignored ", 1)) : G("", !0)
				]),
				H("div", null, [n[3] ||= H("span", null, "Traits", -1), H("strong", null, A(e.traitCount), 1)]),
				H("div", null, [n[4] ||= H("span", null, "Spells", -1), H("strong", null, A(e.selectedSpellCount), 1)]),
				H("div", Sg, [
					n[5] ||= H("span", null, "Estimated NPC XP", -1),
					H("strong", null, A(e.estimatedNpcXp.total), 1),
					H("small", null, A(e.estimatedNpcXp.characteristics) + " char / " + A(e.estimatedNpcXp.skills) + " skill / " + A(e.estimatedNpcXp.talents) + " talent ", 1)
				])
			]),
			e.buildPreviewWarnings.length ? (z(), B("ul", Cg, [(z(!0), B(R, null, L(e.buildPreviewWarnings, (e) => (z(), B("li", { key: e }, A(e), 1))), 128))])) : (z(), B("p", wg, " The draft has a base Actor, queued Career data, resolved trappings, and a portrait ready to apply. "))
		]));
	}
}), Eg = /* @__PURE__ */ I({
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
		return (t, n) => (z(), B("dl", null, [
			H("div", null, [n[0] ||= H("dt", null, "Build name", -1), H("dd", null, A(e.finalActorName), 1)]),
			H("div", null, [n[1] ||= H("dt", null, "Base actor", -1), H("dd", null, A(e.baseActorName), 1)]),
			H("div", null, [n[2] ||= H("dt", null, "Final career", -1), H("dd", null, A(e.finalCareerName), 1)]),
			H("div", null, [n[3] ||= H("dt", null, "Career items", -1), H("dd", null, A(e.careerItemCount), 1)]),
			H("div", null, [n[4] ||= H("dt", null, "Apply", -1), H("dd", null, A(e.advancementCount) + " advance rows, " + A(e.visibleTrappingCount) + " trappings, " + A(e.traitCount) + " traits, " + A(e.selectedSpellCount) + " spells ", 1)]),
			H("div", null, [n[5] ||= H("dt", null, "Extracted grants", -1), H("dd", null, A(e.grantTotals.characteristics) + " characteristics, " + A(e.grantTotals.skills) + " skills, " + A(e.grantTotals.talents) + " talents, " + A(e.grantTotals.trappings) + " trappings ", 1)]),
			H("div", null, [n[6] ||= H("dt", null, "Estimated NPC XP", -1), H("dd", null, A(e.estimatedNpcXpTotal), 1)])
		]));
	}
}), Dg = ["disabled"], Og = ["src"], kg = { key: 1 }, Ag = { key: 2 }, jg = {
	key: 0,
	class: "npc-builder__portrait-path"
}, Mg = { key: 0 }, Ng = ["title"], Pg = {
	key: 1,
	class: "npc-builder__portrait-gallery"
}, Fg = { key: 0 }, Ig = { key: 1 }, Lg = {
	key: 0,
	class: "npc-builder__portrait-progress"
}, Rg = ["value"], zg = { class: "npc-builder__portrait-strip" }, Bg = [
	"aria-label",
	"title",
	"onClick"
], Vg = ["src"], Hg = /* @__PURE__ */ I({
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
			H("button", {
				class: "npc-builder__portrait",
				disabled: !e.portraitCandidates.length,
				title: "Open portrait gallery",
				type: "button",
				onClick: r[0] ||= (e) => n("openGallery")
			}, [e.finalPortraitPath ? (z(), B("img", {
				key: 0,
				src: e.finalPortraitPath,
				alt: ""
			}, null, 8, Og)) : e.finalCareer ? (z(), B("strong", kg, A(F(eg)(e.finalCareer.name)), 1)) : (z(), B("span", Ag, "No portrait selected"))], 8, Dg),
			e.finalPortraitPath ? (z(), B("p", jg, [e.selectedPortraitCandidate ? (z(), B("strong", Mg, A(e.selectedPortraitCandidate.label), 1)) : G("", !0), H("span", { title: e.finalPortraitPath }, A(e.finalPortraitPath), 9, Ng)])) : G("", !0),
			e.portraitCandidates.length || e.isLoadingPortraitCandidates ? (z(), B("section", Pg, [
				H("div", null, [r[2] ||= H("h2", null, "Portrait", -1), e.isLoadingPortraitCandidates ? (z(), B("span", Fg, "Finding assets...")) : (z(), B("span", Ig, A(e.portraitCandidates.length) + " options", 1))]),
				e.isLoadingPortraitCandidates && e.portraitSearchProgress ? (z(), B("div", Lg, [H("progress", {
					value: e.portraitSearchProgressValue,
					max: "100"
				}, null, 8, Rg), H("span", null, A(e.portraitSearchProgressLabel), 1)])) : G("", !0),
				H("div", zg, [(z(!0), B(R, null, L(e.compactPortraitCandidates, (t) => (z(), B("button", {
					key: t.key,
					"aria-label": F(tg)(t),
					class: k({ "is-active": t.key === e.selectedPortraitCandidateKey }),
					title: F(tg)(t),
					type: "button",
					onClick: (e) => n("selectPortrait", t)
				}, [H("img", {
					src: t.img,
					alt: ""
				}, null, 8, Vg)], 10, Bg))), 128)), e.hiddenPortraitCandidateCount > 0 ? (z(), B("button", {
					key: 0,
					class: "npc-builder__portrait-more",
					type: "button",
					onClick: r[1] ||= (e) => n("openGallery")
				}, " +" + A(e.hiddenPortraitCandidateCount), 1)) : G("", !0)])
			])) : G("", !0)
		], 64));
	}
}), Ug = {
	key: 0,
	class: "npc-builder__quick-traits"
}, Wg = ["onClick"], Gg = /* @__PURE__ */ I({
	__name: "TraitButtonGroup",
	props: {
		caption: {},
		title: {},
		traits: {}
	},
	emits: ["toggleTrait"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => e.traits.length ? (z(), B("section", Ug, [H("div", null, [H("h2", null, A(e.title), 1), H("span", null, A(e.caption), 1)]), (z(!0), B(R, null, L(e.traits, (e) => (z(), B("button", {
			key: e.uuid,
			class: k({ "is-active": e.isSelected }),
			type: "button",
			onClick: (t) => n("toggleTrait", e)
		}, A(e.name), 11, Wg))), 128))])) : G("", !0);
	}
}), Kg = { class: "npc-builder__summary" }, qg = { class: "npc-builder__preview" }, Jg = { class: "npc-builder__field" }, Yg = ["placeholder", "value"], Xg = /* @__PURE__ */ I({
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
		return (t, i) => (z(), B("aside", Kg, [H("section", qg, [
			U(Hg, {
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
			H("label", Jg, [i[4] ||= H("span", null, "NPC name", -1), H("input", {
				placeholder: e.suggestedActorName,
				value: e.actorName,
				type: "text",
				onInput: r
			}, null, 40, Yg)]),
			U(Gg, {
				caption: `${e.optionalTraitOptions.length} from base statblock`,
				traits: e.optionalTraitOptions,
				title: "Optional Traits",
				onToggleTrait: i[2] ||= (e) => n("toggleOptionalTrait", e)
			}, null, 8, ["caption", "traits"]),
			U(Gg, {
				caption: `${e.quickTraitOptions.length} configured`,
				traits: e.quickTraitOptions,
				title: "Quick Traits",
				onToggleTrait: i[3] ||= (e) => n("toggleQuickTrait", e)
			}, null, 8, ["caption", "traits"]),
			U(Tg, {
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
			U(Eg, {
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
}), Zg = { class: "npc-builder__panel" }, Qg = {
	key: 0,
	class: "npc-builder__careers"
}, $g = [
	"onDragenter",
	"onDragover",
	"onDrop"
], e_ = ["onDragstart"], t_ = { class: "npc-builder__thumbnail" }, n_ = ["src"], r_ = { key: 1 }, i_ = { class: "npc-builder__career-copy" }, a_ = ["title"], o_ = ["value", "onInput"], s_ = { class: "npc-builder__career-actions" }, c_ = ["disabled", "onClick"], l_ = ["disabled", "onClick"], u_ = ["onClick"], d_ = {
	key: 1,
	class: "npc-builder__empty"
}, f_ = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B("section", Zg, [
			r[3] ||= H("div", { class: "npc-builder__panel-heading" }, [H("span", null, "2"), H("h2", null, "Career Queue")], -1),
			U(Pl, {
				class: "npc-builder__drop npc-builder__drop--career",
				description: "Drop in build order. Drag rows to reorder.",
				title: "Drop Career Items",
				variant: "compact",
				onDropData: r[0] ||= (e) => n("careerDrop", e)
			}),
			e.careers.length ? (z(), B("ol", Qg, [(z(!0), B(R, null, L(e.careers, (t, i) => (z(), B("li", {
				key: t.uuid,
				class: k({
					"is-dragging": e.draggedCareerIndex === i,
					"is-drop-target": e.dragOverCareerIndex === i
				}),
				onDragenter: ss((e) => n("careerDragEnter", i), ["prevent"]),
				onDragover: (e) => n("careerDragOver", i, e),
				onDrop: (e) => n("careerDropOnRow", i, e)
			}, [
				H("span", {
					"aria-label": "Drag to reorder career",
					class: "npc-builder__drag-handle",
					draggable: "true",
					role: "button",
					tabindex: "0",
					title: "Drag to reorder",
					onDragend: r[1] ||= (e) => n("careerDragEnd"),
					onDragstart: (e) => n("careerDragStart", i, e)
				}, " Move ", 40, e_),
				H("div", t_, [t.img ? (z(), B("img", {
					key: 0,
					src: t.img,
					alt: ""
				}, null, 8, n_)) : (z(), B("span", r_, A(F(eg)(t.name)), 1))]),
				H("div", i_, [
					H("strong", null, A(t.name), 1),
					H("span", null, [W(A(t.careerGroup || "Career") + " ", 1), t.level === null ? G("", !0) : (z(), B(R, { key: 0 }, [W(" level " + A(t.level), 1)], 64))]),
					H("small", {
						class: "npc-builder__career-counts",
						title: [
							`Characteristics: ${F($h)(t.grants.characteristics)}`,
							`Skills: ${F($h)(t.grants.skills)}`,
							`Talents: ${F($h)(t.grants.talents)}`,
							`Trappings: ${F($h)(t.grants.trappings)}`
						].join("\n")
					}, A(F(Qh)(t)), 9, a_)
				]),
				H("label", null, [r[2] ||= H("span", null, "Qty", -1), H("input", {
					value: t.quantity,
					min: "1",
					type: "number",
					onInput: (e) => n("careerQuantityInput", i, e)
				}, null, 40, o_)]),
				H("div", s_, [
					H("button", {
						disabled: i === 0,
						title: "Move career earlier",
						type: "button",
						onClick: (e) => n("moveCareer", i, -1)
					}, " Up ", 8, c_),
					H("button", {
						disabled: i === e.careers.length - 1,
						title: "Move career later",
						type: "button",
						onClick: (e) => n("moveCareer", i, 1)
					}, " Down ", 8, l_),
					H("button", {
						type: "button",
						onClick: (e) => n("removeCareer", i)
					}, "Remove", 8, u_)
				])
			], 42, $g))), 128))])) : (z(), B("p", d_, "No careers queued yet."))
		]));
	}
}), p_ = { class: "npc-builder__portrait-gallery-view" }, m_ = { class: "npc-builder__portrait-gallery-summary" }, h_ = { key: 0 }, g_ = { key: 1 }, __ = { class: "npc-builder__portrait-grid" }, v_ = ["title", "onClick"], y_ = { class: "npc-builder__portrait-grid-image" }, b_ = ["src"], x_ = /* @__PURE__ */ I({
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
		return (t, r) => (z(), V(ys, {
			open: e.open,
			title: "Portrait Gallery",
			onClose: r[0] ||= (e) => n("close")
		}, {
			default: Bn(() => [H("div", p_, [H("div", m_, [H("strong", null, A(e.portraitCandidates.length) + " portrait options", 1), e.isLoadingPortraitCandidates ? (z(), B("span", h_, "Finding assets...")) : (z(), B("span", g_, "Click an image to use it for the generated NPC."))]), H("div", __, [(z(!0), B(R, null, L(e.portraitCandidates, (t) => (z(), B("button", {
				key: t.key,
				class: k({ "is-active": t.key === e.selectedPortraitCandidateKey }),
				title: F(tg)(t),
				type: "button",
				onClick: (e) => n("selectPortrait", t)
			}, [H("span", y_, [H("img", {
				src: t.img,
				alt: ""
			}, null, 8, b_)]), H("span", null, A(t.label), 1)], 10, v_))), 128))])])]),
			_: 1
		}, 8, ["open"]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/errors.ts
function S_(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not resolve that Actor drop.";
}
function C_(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish searching for portraits.";
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/useBaseActorSelection.ts
function w_(e, t) {
	let n = Vm(), { baseActors: r, selectedBaseActorUuid: i } = Uf(n), a = /* @__PURE__ */ P(""), o = K(() => {
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
			t.value = S_(e);
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
function T_() {
	let { advancements: e, careers: t, finalPortraitPath: n, selectedBaseActor: r, trappings: i } = Uf(Vm()), a = K(() => {
		let e = 0;
		for (let n of t.value) e += n.quantity;
		return e;
	}), o = K(() => i.value.filter((e) => !e.ignored).length), s = K(() => e.value.filter((e) => e.current !== e.careerValue).length), c = K(() => i.value.filter((e) => !e.ignored && e.resolution.status === "fallback").length), l = K(() => i.value.filter((e) => e.ignored).length), u = K(() => e.value.filter((e) => e.kind === "skill" && Ip(e.name) !== null).length), d = K(() => i.value.filter((e) => !e.ignored && e.resolution.status === "unresolved").length), f = K(() => {
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
function E_() {
	let e = Vm(), { optionalTraits: t, quickTraits: n, traits: r } = Uf(e), i = K(() => new Set(r.value.map((e) => D_(e.name)))), a = K(() => t.value.map(s)), o = K(() => {
		let e = new Set(t.value.map((e) => D_(e.name)));
		return n.value.filter((t) => !e.has(D_(t.name))).map(s);
	});
	function s(e) {
		return {
			...e,
			isSelected: i.value.has(D_(e.name))
		};
	}
	function c(t) {
		let n = i.value.has(D_(t.name));
		e.setQuickTraitSelected(t, !n);
	}
	function l(t) {
		let n = i.value.has(D_(t.name));
		e.setOptionalTraitSelected(t, !n);
	}
	return {
		displayedQuickTraitOptions: o,
		optionalTraitOptions: a,
		toggleOptionalTrait: l,
		toggleQuickTrait: c
	};
}
function D_(e) {
	return e.trim().toLocaleLowerCase();
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/useCareerQueue.ts
function O_() {
	let e = Vm(), t = /* @__PURE__ */ P(null), n = /* @__PURE__ */ P(null);
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
var k_ = new Set([
	"and",
	"any",
	"the",
	"with",
	"without",
	"of",
	"or",
	"npc"
]);
function A_(e) {
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
	}), P_(t);
}
function j_(e, t) {
	let n = F_(e);
	return n ? t.some((e) => F_(e.img) === n) : !1;
}
function M_(e) {
	let t = [];
	for (let n of e.careers) t.push(n.name, n.careerGroup);
	return e.selectedBaseActor && t.push(e.selectedBaseActor.name, e.selectedBaseActor.species), R_(t.flatMap((e) => L_(e)).filter((e) => e.length >= 3 && !k_.has(e)));
}
function N_(e, t) {
	let n = I_(e);
	return n ? t.some((e) => n.includes(e)) : !1;
}
function P_(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.img.trim().toLocaleLowerCase();
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
function F_(e) {
	return e.trim().toLocaleLowerCase();
}
function I_(e) {
	return e.trim().toLocaleLowerCase().replaceAll(/[_-]/g, " ").replaceAll(/[(),.:;[\]]/g, " ").replaceAll(/\s+/g, " ");
}
function L_(e) {
	let t = I_(e);
	return [t, ...t.split(" ")].filter(Boolean);
}
function R_(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/usePortraitCandidates.ts
function z_(e, t) {
	let n = Vm(), { careers: r, finalPortraitPath: i, selectedBaseActor: a, selectedPortraitPath: o, settings: s } = Uf(n), c = /* @__PURE__ */ P([]), l = /* @__PURE__ */ P(!1), u = /* @__PURE__ */ P(!1), d = /* @__PURE__ */ P(null), f = 0, p = K(() => A_({
		careers: r.value,
		selectedBaseActor: a.value
	})), m = K(() => P_([...p.value, ...c.value])), h = K(() => m.value.slice(0, 10)), g = K(() => Math.max(0, m.value.length - h.value.length)), _ = K(() => m.value.find((e) => e.img === i.value)?.key ?? ""), v = K(() => m.value.find((e) => e.img === i.value) ?? null), y = K(() => {
		let e = d.value;
		return e ? e.maxDirectories <= 0 ? e.phase === "ready" ? 100 : 4 : Math.min(100, Math.round(e.directoriesVisited / e.maxDirectories * 100)) : 0;
	}), b = K(() => {
		let e = d.value;
		return e ? e.phase === "ready" ? `${e.candidatesFound} options found` : e.phase === "filesystem" ? e.maxDirectories <= 0 ? `${e.directoriesVisited} directories - ${e.currentLocation}` : `${e.directoriesVisited}/${e.maxDirectories} directories - ${e.currentLocation}` : e.currentLocation : "";
	});
	Jn(() => [
		a.value?.uuid ?? "",
		s.value.searchCompendiumPortraitAssets,
		s.value.searchFoundryPortraitAssets,
		r.value.map((e) => e.uuid).join("|")
	], () => {
		C();
	}, { immediate: !0 }), Jn([
		m,
		o,
		u
	], () => {
		o.value && !u.value && !j_(o.value, m.value) && n.selectPortrait("");
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
			f === n && (t.value = C_(e));
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
var B_ = { class: "npc-builder__layout" }, V_ = { class: "npc-builder__column" }, H_ = /* @__PURE__ */ I({
	__name: "NpcBuilderBuildTab",
	props: {
		bridge: {},
		isLoadingActors: { type: Boolean },
		isLoadingBaseDraft: { type: Boolean }
	},
	emits: ["careerDrop"],
	setup(e, { emit: t }) {
		let n = e, r = t, { actorName: i, advancements: a, careers: o, estimatedNpcXp: s, finalActorName: c, finalCareer: l, finalPortraitPath: u, grantTotals: d, selectedBaseActor: f, selectedSpells: p, suggestedActorName: m, traits: h } = Uf(Vm()), g = /* @__PURE__ */ P(""), { actorFilter: _, filteredActors: v, handleActorDrop: y, selectedBaseActorSelectValue: b } = w_(n.bridge, g), { clearCareerDragState: x, draggedCareerIndex: S, dragOverCareerIndex: C, handleCareerDragOver: w, handleCareerDragStart: ee, handleCareerDrop: T, moveCareer: E, removeCareer: D, setCareerQuantity: te, setDragOverCareerIndex: ne } = O_(), { displayedQuickTraitOptions: re, optionalTraitOptions: ie, toggleOptionalTrait: ae, toggleQuickTrait: oe } = E_(), { buildPreviewStatus: O, buildPreviewWarnings: se, careerItemCount: ce, editedAdvanceCount: le, fallbackTrappingCount: ue, ignoredTrappingCount: de, visibleTrappingCount: fe } = T_(), { compactPortraitCandidates: pe, hiddenPortraitCandidateCount: me, isLoadingPortraitCandidates: he, isPortraitGalleryOpen: ge, portraitCandidates: _e, portraitSearchProgress: k, portraitSearchProgressLabel: ve, portraitSearchProgressValue: ye, selectedPortraitCandidate: be, selectedPortraitCandidateKey: xe, selectPortrait: Se, selectPortraitFromGallery: Ce } = z_(n.bridge, g);
		return (t, n) => (z(), B("section", B_, [
			H("div", V_, [U(hg, {
				"actor-filter": F(_),
				"error-message": g.value,
				"filtered-actors": F(v),
				"is-loading-actors": e.isLoadingActors,
				"is-loading-base-draft": e.isLoadingBaseDraft,
				"selected-base-actor": F(f),
				"selected-base-actor-uuid": F(b),
				onActorDrop: F(y),
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
			]), U(f_, {
				careers: F(o),
				"drag-over-career-index": F(C),
				"dragged-career-index": F(S),
				onCareerDragEnd: F(x),
				onCareerDragEnter: F(ne),
				onCareerDragOver: F(w),
				onCareerDragStart: F(ee),
				onCareerDrop: n[2] ||= (e) => r("careerDrop", e),
				onCareerDropOnRow: F(T),
				onCareerQuantityInput: F(te),
				onMoveCareer: F(E),
				onRemoveCareer: F(D)
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
			U(Xg, {
				"actor-name": F(i),
				"advancement-count": F(a).length,
				"build-preview-status": F(O),
				"build-preview-warnings": F(se),
				"career-item-count": F(ce),
				"compact-portrait-candidates": F(pe),
				"edited-advance-count": F(le),
				"estimated-npc-xp": F(s),
				"fallback-trapping-count": F(ue),
				"final-actor-name": F(c),
				"final-career": F(l),
				"final-portrait-path": F(u),
				"grant-totals": F(d),
				"hidden-portrait-candidate-count": F(me),
				"ignored-trapping-count": F(de),
				"is-loading-portrait-candidates": F(he),
				"optional-trait-options": F(ie),
				"portrait-candidates": F(_e),
				"portrait-search-progress": F(k),
				"portrait-search-progress-label": F(ve),
				"portrait-search-progress-value": F(ye),
				"quick-trait-options": F(re),
				"selected-base-actor": F(f),
				"selected-portrait-candidate": F(be),
				"selected-portrait-candidate-key": F(xe),
				"selected-spell-count": F(p).length,
				"suggested-actor-name": F(m),
				"trait-count": F(h).length,
				"visible-trapping-count": F(fe),
				onActorNameChange: n[3] ||= (e) => i.value = e,
				onOpenPortraitGallery: n[4] ||= (e) => ge.value = !0,
				onSelectPortrait: F(Se),
				onToggleOptionalTrait: F(ae),
				onToggleQuickTrait: F(oe)
			}, null, 8, /* @__PURE__ */ "actor-name.advancement-count.build-preview-status.build-preview-warnings.career-item-count.compact-portrait-candidates.edited-advance-count.estimated-npc-xp.fallback-trapping-count.final-actor-name.final-career.final-portrait-path.grant-totals.hidden-portrait-candidate-count.ignored-trapping-count.is-loading-portrait-candidates.optional-trait-options.portrait-candidates.portrait-search-progress.portrait-search-progress-label.portrait-search-progress-value.quick-trait-options.selected-base-actor.selected-portrait-candidate.selected-portrait-candidate-key.selected-spell-count.suggested-actor-name.trait-count.visible-trapping-count.onSelectPortrait.onToggleOptionalTrait.onToggleQuickTrait".split(".")),
			U(x_, {
				"is-loading-portrait-candidates": F(he),
				open: F(ge),
				"portrait-candidates": F(_e),
				"selected-portrait-candidate-key": F(xe),
				onClose: n[5] ||= (e) => ge.value = !1,
				onSelectPortrait: F(Ce)
			}, null, 8, [
				"is-loading-portrait-candidates",
				"open",
				"portrait-candidates",
				"selected-portrait-candidate-key",
				"onSelectPortrait"
			])
		]));
	}
}), U_ = { class: "npc-builder__folder-setting" }, W_ = { class: "npc-builder__field" }, G_ = ["value"], K_ = { value: "" }, q_ = ["value"], J_ = { class: "npc-builder__field" }, Y_ = ["value"], X_ = ["disabled"], Z_ = /* @__PURE__ */ I({
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
		return (t, a) => (z(), B("section", U_, [
			H("label", W_, [H("span", null, A(e.folderLabel), 1), H("select", {
				value: e.selectedUuid,
				onChange: r
			}, [H("option", K_, A(e.defaultOptionLabel), 1), (z(!0), B(R, null, L(e.folders, (e) => (z(), B("option", {
				key: e.uuid,
				value: e.uuid
			}, A(e.name), 9, q_))), 128))], 40, G_)]),
			H("label", J_, [a[1] ||= H("span", null, "Create or use by name", -1), H("input", {
				value: e.createName,
				placeholder: "Folder name",
				type: "text",
				onInput: i
			}, null, 40, Y_)]),
			H("button", {
				disabled: e.disabled || !e.createName.trim(),
				type: "button",
				onClick: a[0] ||= (e) => n("saveFolderName")
			}, A(e.buttonLabel ?? "Save"), 9, X_)
		]));
	}
}), Q_ = { class: "npc-builder__panel" }, $_ = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B("section", Q_, [
			r[6] ||= H("div", { class: "npc-builder__panel-heading" }, [H("span", null, "1"), H("h2", null, "Actor Sources")], -1),
			U(Z_, {
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
			U(Z_, {
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
}), ev = { class: "npc-builder__panel" }, tv = { class: "npc-builder__check" }, nv = ["checked"], rv = { class: "npc-builder__check" }, iv = ["checked"], av = { class: "npc-builder__check" }, ov = ["checked"], sv = { class: "npc-builder__check" }, cv = ["checked"], lv = { class: "npc-builder__check" }, uv = ["checked"], dv = /* @__PURE__ */ I({
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
		return (t, i) => (z(), B("section", ev, [
			i[10] ||= H("div", { class: "npc-builder__panel-heading" }, [H("span", null, "5"), H("h2", null, "Base Actor Features")], -1),
			H("label", tv, [H("input", {
				checked: e.allowCharacteristics,
				type: "checkbox",
				onChange: i[0] ||= (e) => n("allowCharacteristicsChange", r(e))
			}, null, 40, nv), i[5] ||= H("span", null, "Show base actor characteristics", -1)]),
			H("label", rv, [H("input", {
				checked: e.allowSkills,
				type: "checkbox",
				onChange: i[1] ||= (e) => n("allowSkillsChange", r(e))
			}, null, 40, iv), i[6] ||= H("span", null, "Show base actor skills", -1)]),
			H("label", av, [H("input", {
				checked: e.allowTalents,
				type: "checkbox",
				onChange: i[2] ||= (e) => n("allowTalentsChange", r(e))
			}, null, 40, ov), i[7] ||= H("span", null, "Show base actor talents", -1)]),
			H("label", sv, [H("input", {
				checked: e.allowTrappings,
				type: "checkbox",
				onChange: i[3] ||= (e) => n("allowTrappingsChange", r(e))
			}, null, 40, cv), i[8] ||= H("span", null, "Show base actor trappings", -1)]),
			H("label", lv, [H("input", {
				checked: e.allowTraits,
				type: "checkbox",
				onChange: i[4] ||= (e) => n("allowTraitsChange", r(e))
			}, null, 40, uv), i[9] ||= H("span", null, "Show base actor traits", -1)])
		]));
	}
}), fv = { class: "npc-builder__panel" }, pv = { class: "npc-builder__check" }, mv = ["checked"], hv = /* @__PURE__ */ I({
	__name: "MagicSpellSettings",
	props: { autoSelectGrantedSpells: { type: Boolean } },
	emits: ["autoSelectGrantedSpellsChange"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			let t = e.target;
			n("autoSelectGrantedSpellsChange", !!t?.checked);
		}
		return (t, n) => (z(), B("section", fv, [n[1] ||= H("div", { class: "npc-builder__panel-heading" }, [H("span", null, "6"), H("h2", null, "Magic and Spells")], -1), H("label", pv, [H("input", {
			checked: e.autoSelectGrantedSpells,
			type: "checkbox",
			onChange: r
		}, null, 40, mv), n[0] ||= H("span", null, "Select detected Lore spells by default", -1)])]));
	}
}), gv = { class: "npc-builder__panel" }, _v = { class: "npc-builder__check" }, vv = ["checked"], yv = /* @__PURE__ */ I({
	__name: "NamingSettings",
	props: { includeSpeciesInName: { type: Boolean } },
	emits: ["includeSpeciesInNameChange"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			let t = e.target;
			n("includeSpeciesInNameChange", !!t?.checked);
		}
		return (t, n) => (z(), B("section", gv, [n[1] ||= H("div", { class: "npc-builder__panel-heading" }, [H("span", null, "3"), H("h2", null, "Default Naming")], -1), H("label", _v, [H("input", {
			checked: e.includeSpeciesInName,
			type: "checkbox",
			onChange: r
		}, null, 40, vv), n[0] ||= H("span", null, "Include species in suggested names", -1)])]));
	}
}), bv = { class: "npc-builder__panel" }, xv = { class: "npc-builder__field" }, Sv = ["value"], Cv = { class: "npc-builder__check" }, wv = ["checked"], Tv = ["disabled"], Ev = ["disabled"], Dv = /* @__PURE__ */ I({
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
		return (t, a) => (z(), B("section", bv, [
			a[5] ||= H("div", { class: "npc-builder__panel-heading" }, [H("span", null, "7"), H("h2", null, "Other Settings")], -1),
			H("label", xv, [a[3] ||= H("span", null, "Lower career handling", -1), H("select", {
				value: e.lowerCareerMode,
				onChange: r
			}, [...a[2] ||= [
				H("option", { value: "prompt" }, "Prompt when candidates are found", -1),
				H("option", { value: "auto-add-all" }, "Automatically add all lower-tier matches", -1),
				H("option", { value: "never" }, "Only add dropped careers", -1)
			]], 40, Sv)]),
			H("label", Cv, [H("input", {
				checked: e.askForLinkedSkillSpecializations,
				type: "checkbox",
				onChange: i
			}, null, 40, wv), a[4] ||= H("span", null, "Resolve linked career skill repeats separately", -1)]),
			H("button", {
				disabled: e.isBusy,
				type: "button",
				onClick: a[0] ||= (e) => n("saveSettings")
			}, "Save Settings", 8, Tv),
			H("button", {
				disabled: e.isBusy,
				type: "button",
				onClick: a[1] ||= (e) => n("resetSettings")
			}, " Reset to Defaults ", 8, Ev)
		]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSettingsTab/portrait-search-labels.ts
function Ov(e) {
	return e ? e.digDownActive ? e.digDownDeepFileSearchEnabled ? e.digDownCacheReady ? `Dig Down cache ready with ${e.digDownIndexedFileCount} indexed files.` : "Dig Down is active; its file cache is still building or unavailable." : "Dig Down is active, but its Deep File Search setting is disabled." : "Install and enable Dig Down to search local files for portrait suggestions." : "Checking Dig Down integration.";
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSettingsTab/PortraitSuggestionSettings.vue?vue&type=script&setup=true&lang.ts
var kv = { class: "npc-builder__panel" }, Av = { class: "npc-builder__check" }, jv = ["checked", "disabled"], Mv = { class: "npc-builder__setting-note" }, Nv = { class: "npc-builder__check" }, Pv = ["checked"], Fv = { class: "npc-builder__check" }, Iv = ["checked"], Lv = /* @__PURE__ */ I({
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
		return (t, n) => (z(), B("section", kv, [
			n[3] ||= H("div", { class: "npc-builder__panel-heading" }, [H("span", null, "4"), H("h2", null, "Portrait Suggestions")], -1),
			H("label", Av, [H("input", {
				checked: e.searchFoundryPortraitAssets,
				disabled: !e.canUseDigDownPortraitSearch,
				type: "checkbox",
				onChange: r
			}, null, 40, jv), n[0] ||= H("span", null, "Search Dig Down's file cache for portrait suggestions", -1)]),
			H("p", Mv, A(e.statusLabel), 1),
			H("label", Nv, [H("input", {
				checked: e.searchCompendiumPortraitAssets,
				type: "checkbox",
				onChange: i
			}, null, 40, Pv), n[1] ||= H("span", null, "Search Actor and Item compendiums for portrait suggestions", -1)]),
			H("label", Fv, [H("input", {
				checked: e.searchWebPortraitAssets,
				disabled: "",
				type: "checkbox"
			}, null, 8, Iv), n[2] ||= H("span", null, "Search the web for portrait suggestions (later)", -1)])
		]));
	}
}), Rv = { class: "npc-builder__panel" }, zv = ["disabled"], Bv = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B("section", Rv, [
			r[4] ||= H("div", { class: "npc-builder__panel-heading" }, [H("span", null, "2"), H("h2", null, "Quick Traits")], -1),
			U(Z_, {
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
			H("button", {
				disabled: e.isBusy || !e.quickTraitFolderUuid,
				type: "button",
				onClick: r[3] ||= (e) => n("importRecommendedQuickTraits")
			}, " Import Recommended Quick Traits ", 8, zv)
		]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSettingsTab/settings-payload.ts
function Vv(e) {
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
var Hv = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, Uv = {
	key: 1,
	class: "npc-builder__message"
}, Wv = /* @__PURE__ */ I({
	__name: "SettingsMessages",
	props: {
		errorMessage: {},
		settingsMessage: {}
	},
	setup(e) {
		return (t, n) => e.errorMessage ? (z(), B("p", Hv, A(e.errorMessage), 1)) : e.settingsMessage ? (z(), B("p", Uv, A(e.settingsMessage), 1)) : G("", !0);
	}
}), Gv = { class: "npc-builder__settings" }, Kv = /* @__PURE__ */ I({
	__name: "NpcBuilderSettingsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Vm(), { actorFolders: r, itemFolders: i, settings: a } = Uf(n), o = /* @__PURE__ */ P(""), s = /* @__PURE__ */ P(""), c = /* @__PURE__ */ P(!1), l = /* @__PURE__ */ P(""), u = /* @__PURE__ */ P(null), d = /* @__PURE__ */ P(""), f = /* @__PURE__ */ P(""), p = K(() => u.value?.digDownActive ?? !0), m = K(() => Ov(u.value));
		kr(() => {
			C();
		}), Jn(u, (e) => {
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
				await e.refresh(), e.setFolderUuid(r.uuid), n.hydrateSettings(await t.bridge.saveSettings(D())), f.value = `Using folder "${r.name}".`;
			} catch (e) {
				s.value = E(e);
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
				n.hydrateSettings(await t.bridge.saveSettings(D())), n.hydrateQuickTraits(await t.bridge.importRecommendedQuickTraits(a.value)), f.value = "Recommended quick traits imported.";
			} catch (e) {
				s.value = E(e);
			} finally {
				c.value = !1;
			}
		}
		async function ee() {
			c.value = !0, s.value = "", f.value = "";
			try {
				n.hydrateSettings(await t.bridge.saveSettings(D())), await Promise.all([x(), S()]), f.value = "Settings saved.";
			} catch (e) {
				s.value = E(e);
			} finally {
				c.value = !1;
			}
		}
		async function T() {
			c.value = !0, s.value = "", f.value = "";
			try {
				n.hydrateSettings(await t.bridge.saveSettings(am())), await Promise.all([x(), S()]), f.value = "Settings reset to defaults.";
			} catch (e) {
				s.value = E(e);
			} finally {
				c.value = !1;
			}
		}
		function E(e) {
			return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
		}
		function D() {
			return Vv({
				canUseDigDownPortraitSearch: p.value,
				settings: a.value
			});
		}
		return (e, t) => (z(), B("section", Gv, [
			U(Wv, {
				"error-message": s.value,
				"settings-message": f.value
			}, null, 8, ["error-message", "settings-message"]),
			U($_, {
				"actor-folders": F(r),
				"base-actor-folder-name": o.value,
				"base-actor-folder-uuid": F(a).baseActorFolderUuid,
				"is-busy": c.value,
				"output-actor-folder-name": l.value,
				"output-actor-folder-uuid": F(a).outputActorFolderUuid,
				onBaseActorFolderNameChange: t[0] ||= (e) => o.value = e,
				onBaseActorFolderUuidChange: t[1] ||= (e) => F(a).baseActorFolderUuid = e,
				onOutputActorFolderNameChange: t[2] ||= (e) => l.value = e,
				onOutputActorFolderUuidChange: t[3] ||= (e) => F(a).outputActorFolderUuid = e,
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
			U(Bv, {
				"is-busy": c.value,
				"item-folders": F(i),
				"quick-trait-folder-name": d.value,
				"quick-trait-folder-uuid": F(a).quickTraitFolderUuid,
				onImportRecommendedQuickTraits: w,
				onQuickTraitFolderNameChange: t[4] ||= (e) => d.value = e,
				onQuickTraitFolderUuidChange: t[5] ||= (e) => F(a).quickTraitFolderUuid = e,
				onSaveQuickTraitFolderName: _
			}, null, 8, [
				"is-busy",
				"item-folders",
				"quick-trait-folder-name",
				"quick-trait-folder-uuid"
			]),
			U(yv, {
				"include-species-in-name": F(a).includeSpeciesInName,
				onIncludeSpeciesInNameChange: t[6] ||= (e) => F(a).includeSpeciesInName = e
			}, null, 8, ["include-species-in-name"]),
			U(Lv, {
				"can-use-dig-down-portrait-search": p.value,
				"search-compendium-portrait-assets": F(a).searchCompendiumPortraitAssets,
				"search-foundry-portrait-assets": F(a).searchFoundryPortraitAssets,
				"search-web-portrait-assets": F(a).searchWebPortraitAssets,
				"status-label": m.value,
				onSearchCompendiumPortraitAssetsChange: t[7] ||= (e) => F(a).searchCompendiumPortraitAssets = e,
				onSearchFoundryPortraitAssetsChange: t[8] ||= (e) => F(a).searchFoundryPortraitAssets = e
			}, null, 8, [
				"can-use-dig-down-portrait-search",
				"search-compendium-portrait-assets",
				"search-foundry-portrait-assets",
				"search-web-portrait-assets",
				"status-label"
			]),
			U(dv, {
				"allow-characteristics": F(a).allowBaseActorCharacteristics,
				"allow-skills": F(a).allowBaseActorSkills,
				"allow-talents": F(a).allowBaseActorTalents,
				"allow-traits": F(a).allowBaseActorTraits,
				"allow-trappings": F(a).allowBaseActorTrappings,
				onAllowCharacteristicsChange: t[9] ||= (e) => F(a).allowBaseActorCharacteristics = e,
				onAllowSkillsChange: t[10] ||= (e) => F(a).allowBaseActorSkills = e,
				onAllowTalentsChange: t[11] ||= (e) => F(a).allowBaseActorTalents = e,
				onAllowTraitsChange: t[12] ||= (e) => F(a).allowBaseActorTraits = e,
				onAllowTrappingsChange: t[13] ||= (e) => F(a).allowBaseActorTrappings = e
			}, null, 8, [
				"allow-characteristics",
				"allow-skills",
				"allow-talents",
				"allow-traits",
				"allow-trappings"
			]),
			U(hv, {
				"auto-select-granted-spells": F(a).autoSelectGrantedSpells,
				onAutoSelectGrantedSpellsChange: t[14] ||= (e) => F(a).autoSelectGrantedSpells = e
			}, null, 8, ["auto-select-granted-spells"]),
			U(Dv, {
				"ask-for-linked-skill-specializations": F(a).askForLinkedSkillSpecializations,
				"is-busy": c.value,
				"lower-career-mode": F(a).lowerCareerMode,
				onAskForLinkedSkillSpecializationsChange: t[15] ||= (e) => F(a).askForLinkedSkillSpecializations = e,
				onLowerCareerModeChange: t[16] ||= (e) => F(a).lowerCareerMode = e,
				onResetSettings: T,
				onSaveSettings: ee
			}, null, 8, [
				"ask-for-linked-skill-specializations",
				"is-busy",
				"lower-career-mode"
			])
		]));
	}
}), qv = { class: "npc-builder__subview-stack" }, Jv = { class: "npc-builder__field" }, Yv = ["onUpdate:modelValue"], Xv = ["value"], Zv = { class: "npc-builder__subview-actions" }, Qv = /* @__PURE__ */ I({
	__name: "MagicLoreResolutionPromptContent",
	props: { prompt: {} },
	emits: ["applyLores", "keepUnresolved"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (z(), B("div", qv, [
			r[4] ||= H("p", null, " Choose concrete magic Lores for ambiguous grants before automatic spells are detected. Unresolved grants can still use manually dropped spells. ", -1),
			(z(!0), B(R, null, L(e.prompt.rows, (e) => (z(), B("section", {
				key: e.resolutionKey,
				class: "npc-builder__resolution-row"
			}, [H("div", null, [H("strong", null, A(e.grantLabel), 1), H("small", null, A(e.sourceLabel) + " - " + A(e.rawLore || "Any Lore"), 1)]), H("label", Jv, [r[3] ||= H("span", null, "Lore", -1), Vn(H("select", { "onUpdate:modelValue": (t) => e.selectedLore = t }, [r[2] ||= H("option", { value: "" }, "Leave unresolved", -1), (z(!0), B(R, null, L(e.options, (e) => (z(), B("option", {
				key: e.key,
				value: e.value
			}, A(e.label) + A(e.wind && e.wind !== "None" ? ` (${e.wind})` : ""), 9, Xv))), 128))], 8, Yv), [[ns, e.selectedLore]])])]))), 128)),
			H("div", Zv, [H("button", {
				type: "button",
				onClick: r[0] ||= (e) => n("keepUnresolved")
			}, "Keep Unresolved"), H("button", {
				type: "button",
				onClick: r[1] ||= (e) => n("applyLores")
			}, "Apply Lores")])
		]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSpellsTab/labels.ts
function $v(e) {
	return e.kind === "arcane-magic" ? "Arcane Magic" : e.kind === "petty-magic" ? "Petty Magic" : "Spellcaster";
}
function ey(e) {
	return `${$v(e)} from ${e.sourceName}`;
}
function ty(e) {
	return e.source === "talent" ? "Talent" : "Trait";
}
function ny(e) {
	return e.source === "custom" ? "Dropped" : e.sourceLabel;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSpellsTab/MagicAccessPanel.vue?vue&type=script&setup=true&lang.ts
var ry = { class: "npc-builder__panel" }, iy = {
	key: 0,
	class: "npc-builder__empty"
}, ay = {
	key: 1,
	class: "npc-builder__magic-grants"
}, oy = { key: 0 }, sy = { key: 1 }, cy = {
	key: 2,
	class: "npc-builder__panel-actions"
}, ly = ["disabled"], uy = /* @__PURE__ */ I({
	__name: "MagicAccessPanel",
	props: {
		ambiguousGrantCount: {},
		isLoadingLoreOptions: { type: Boolean },
		magicGrants: {}
	},
	emits: ["resolveLores"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (z(), B("section", ry, [
			r[1] ||= H("div", { class: "npc-builder__panel-heading" }, [H("span", null, "1"), H("h2", null, "Magic Access")], -1),
			e.magicGrants.length ? (z(), B("div", ay, [(z(!0), B(R, null, L(e.magicGrants, (e) => (z(), B("article", { key: `${e.source}:${e.sourceName}:${e.rawLore}` }, [
				H("strong", null, A(F($v)(e)), 1),
				H("span", null, A(F(ty)(e)) + " - " + A(e.sourceName), 1),
				e.isAmbiguous ? (z(), B("small", oy, " Needs Lore resolution before automatic spells can be found. ")) : (z(), B("small", sy, " Lore: " + A(e.rawLore || e.normalizedLore), 1))
			]))), 128))])) : (z(), B("p", iy, " No magic-enabling Talent or Trait is selected. ")),
			e.ambiguousGrantCount ? (z(), B("div", cy, [H("button", {
				disabled: e.isLoadingLoreOptions,
				type: "button",
				onClick: r[0] ||= (e) => n("resolveLores")
			}, A(e.isLoadingLoreOptions ? "Loading Lores..." : "Resolve Lores"), 9, ly)])) : G("", !0)
		]));
	}
}), dy = { class: "npc-builder__panel" }, fy = { class: "npc-builder__panel-actions" }, py = ["disabled"], my = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, hy = {
	key: 1,
	class: "npc-builder__message npc-builder__message--error"
}, gy = {
	key: 2,
	class: "npc-builder__table"
}, _y = ["checked", "onChange"], vy = { class: "npc-builder__spell-name" }, yy = { class: "npc-builder__spell-icon" }, by = ["src"], xy = ["onClick"], Sy = { key: 1 }, Cy = {
	key: 3,
	class: "npc-builder__empty"
}, wy = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B("section", dy, [
			r[3] ||= H("div", { class: "npc-builder__panel-heading" }, [H("span", null, "2"), H("h2", null, "Spells")], -1),
			U(Pl, {
				class: "npc-builder__drop npc-builder__drop--career",
				description: "Add a specific Spell item regardless of detected Lores.",
				title: "Drop Spell Items",
				onDropData: r[0] ||= (e) => n("spellDrop", e)
			}),
			H("div", fy, [H("button", {
				disabled: e.isLoadingSpells || !e.resolvedGrantCount,
				type: "button",
				onClick: r[1] ||= (e) => n("refreshSpells")
			}, A(e.isLoadingSpells ? "Finding spells..." : "Refresh Spells"), 9, py), H("span", null, A(e.selectedSpellCount) + " selected / " + A(e.spells.length) + " found", 1)]),
			e.errorMessage ? (z(), B("p", my, A(e.errorMessage), 1)) : G("", !0),
			e.ambiguousGrantCount ? (z(), B("p", hy, A(e.ambiguousGrantCount) + " magic grant" + A(e.ambiguousGrantCount === 1 ? "" : "s") + " still need Lore resolution. You can still drop specific spells for now. ", 1)) : G("", !0),
			e.spells.length ? (z(), B("div", gy, [r[2] ||= H("div", { class: "npc-builder__table-head npc-builder__table-head--spells" }, [
				H("span", null, "Use"),
				H("span", null, "Spell"),
				H("span", null, "Lore"),
				H("span", null, "Source"),
				H("span")
			], -1), (z(!0), B(R, null, L(e.spells, (e) => (z(), B("article", {
				key: e.key,
				class: "npc-builder__spell-row"
			}, [
				H("input", {
					checked: e.selected,
					type: "checkbox",
					onChange: (t) => n("spellSelectedChange", e, t)
				}, null, 40, _y),
				H("div", vy, [H("span", yy, [e.img ? (z(), B("img", {
					key: 0,
					src: e.img,
					alt: ""
				}, null, 8, by)) : G("", !0)]), H("strong", null, A(e.name), 1)]),
				H("span", null, A(e.loreName || "Unknown"), 1),
				H("span", null, A(F(ny)(e)), 1),
				e.source === "custom" ? (z(), B("button", {
					key: 0,
					type: "button",
					onClick: (t) => n("removeCustomSpell", e.key)
				}, " Remove ", 8, xy)) : (z(), B("span", Sy))
			]))), 128))])) : (z(), B("p", Cy, " No matching spells found yet. Drop specific spells here, or resolve a non-ambiguous magic Lore. "))
		]));
	}
}), Ty = { class: "npc-builder__stack" }, Ey = /* @__PURE__ */ I({
	__name: "NpcBuilderSpellsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Vm(), { magicGrants: r, spells: i, selectedSpells: a } = Uf(n), o = /* @__PURE__ */ P(""), s = /* @__PURE__ */ P(!1), c = /* @__PURE__ */ P(!1), l = /* @__PURE__ */ P([]), u = /* @__PURE__ */ P(null), d = 0, f = K(() => r.value.filter((e) => e.isAmbiguous)), p = K(() => r.value.length - f.value.length);
		kr(() => {
			g(), h();
		}), Jn(() => r.value.map((e) => `${e.kind}:${e.sourceName}:${e.rawLore}`).sort().join("|"), () => {
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
				grantLabel: ey(e),
				options: ym(e, l.value),
				rawLore: e.rawLore,
				resolutionKey: e.resolutionKey,
				selectedLore: "",
				sourceLabel: ty(e)
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
		return (e, t) => (z(), B("section", Ty, [
			U(ys, {
				open: u.value !== null,
				title: "Resolve Magic Lores",
				onClose: y
			}, {
				default: Bn(() => [u.value ? (z(), V(Qv, {
					key: 0,
					prompt: u.value,
					onApplyLores: v,
					onKeepUnresolved: y
				}, null, 8, ["prompt"])) : G("", !0)]),
				_: 1
			}, 8, ["open"]),
			U(uy, {
				"ambiguous-grant-count": f.value.length,
				"is-loading-lore-options": c.value,
				"magic-grants": F(r),
				onResolveLores: _
			}, null, 8, [
				"ambiguous-grant-count",
				"is-loading-lore-options",
				"magic-grants"
			]),
			U(wy, {
				"ambiguous-grant-count": f.value.length,
				"error-message": o.value,
				"is-loading-spells": s.value,
				"resolved-grant-count": p.value,
				"selected-spell-count": F(a).length,
				spells: F(i),
				onRefreshSpells: h,
				onRemoveCustomSpell: F(n).removeCustomSpell,
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
}), Dy = { class: "npc-builder__stack" }, Oy = { class: "npc-builder__panel" }, ky = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, Ay = { class: "npc-builder__table" }, jy = { class: "npc-builder__trait-name" }, My = { key: 0 }, Ny = { key: 1 }, Py = { class: "npc-builder__trait-config" }, Fy = { class: "npc-builder__mini-field" }, Iy = ["value", "onInput"], Ly = {
	key: 0,
	class: "npc-builder__mini-field"
}, Ry = ["value", "onChange"], zy = ["value"], By = {
	key: 1,
	class: "npc-builder__mini-field"
}, Vy = ["value", "onInput"], Hy = ["onClick"], Uy = /* @__PURE__ */ I({
	__name: "NpcBuilderTraitsTab",
	props: {
		bridge: {},
		difficultyOptions: {}
	},
	setup(e) {
		let t = e, n = Vm(), { traits: r } = Uf(n), i = /* @__PURE__ */ P("");
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
		return (t, n) => (z(), B("section", Dy, [H("section", Oy, [
			n[3] ||= H("div", { class: "npc-builder__panel-heading" }, [H("span", null, "1"), H("h2", null, "Traits")], -1),
			U(Pl, {
				class: "npc-builder__drop npc-builder__drop--career",
				description: "Add creature traits or NPC trait items.",
				title: "Drop Trait Items",
				onDropData: c
			}),
			i.value ? (z(), B("p", ky, A(i.value), 1)) : G("", !0),
			H("div", Ay, [n[2] ||= H("div", { class: "npc-builder__table-head npc-builder__table-head--traits" }, [
				H("span", null, "Name"),
				H("span", null, "Source"),
				H("span", null, "Config"),
				H("span")
			], -1), (z(!0), B(R, null, L(F(r), (t) => (z(), B("article", {
				key: t.key,
				class: "npc-builder__trait-row"
			}, [
				H("div", jy, [
					H("strong", null, A(t.name), 1),
					t.config.rollable ? (z(), B("span", My, "Rollable")) : G("", !0),
					t.config.damage ? (z(), B("span", Ny, "Damage")) : G("", !0)
				]),
				H("span", null, A(a(t)), 1),
				H("div", Py, [
					H("label", Fy, [H("span", null, A(t.config.damage ? "Damage" : "Specification"), 1), H("input", {
						value: t.config.specification,
						placeholder: "None",
						type: "text",
						onInput: (e) => s(t, "specification", e)
					}, null, 40, Iy)]),
					t.config.rollable && !t.config.damage ? (z(), B("label", Ly, [n[0] ||= H("span", null, "Difficulty", -1), H("select", {
						value: t.config.defaultDifficulty,
						onChange: (e) => s(t, "defaultDifficulty", e)
					}, [(z(!0), B(R, null, L(e.difficultyOptions, (e) => (z(), B("option", {
						key: e.value,
						value: e.value
					}, A(e.label), 9, zy))), 128))], 40, Ry)])) : G("", !0),
					t.config.damage && t.config.dice ? (z(), B("label", By, [n[1] ||= H("span", null, "Dice", -1), H("input", {
						value: t.config.dice,
						placeholder: "Optional",
						type: "text",
						onInput: (e) => s(t, "dice", e)
					}, null, 40, Vy)])) : G("", !0)
				]),
				H("button", {
					type: "button",
					onClick: (e) => o(t)
				}, "Remove", 8, Hy)
			]))), 128))])
		])]));
	}
}), Wy = "__blank-item__";
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderTrappingsTab/resolution-labels.ts
function Gy(e) {
	return e.source === "base" ? "Base" : e.source === "career" ? "Career" : "Custom";
}
function Ky(e) {
	return e.resolution.status === "matched" ? `Matched ${e.resolution.selectedName}` : e.resolution.status === "fallback" ? `Blank ${e.resolution.selectedName || e.name}` : e.resolution.candidates.length ? "Choose a match" : "Needs resolution";
}
function qy(e) {
	return e.ignored ? "Ignored" : e.resolution.status === "matched" ? "Matched" : e.resolution.status === "fallback" ? "Blank item" : e.resolution.status === "ambiguous" || e.resolution.candidates.length ? "Choose" : "Needs resolution";
}
function Jy(e) {
	let t = "npc-builder__status-pill";
	return e.ignored ? [t, "npc-builder__status-pill--muted"] : e.resolution.status === "matched" ? [t, "npc-builder__status-pill--success"] : e.resolution.status === "fallback" ? [t, "npc-builder__status-pill--fallback"] : e.resolution.status === "ambiguous" || e.resolution.candidates.length ? [t, "npc-builder__status-pill--warning"] : [t, "npc-builder__status-pill--danger"];
}
function Yy(e) {
	return e.ignored ? "" : e.resolution.status === "matched" ? "is-resolution-matched" : e.resolution.status === "fallback" ? "is-resolution-fallback" : e.resolution.status === "ambiguous" || e.resolution.candidates.length ? "is-resolution-choice" : "is-resolution-unresolved";
}
function Xy(e) {
	return e.resolution.status === "fallback" ? Wy : e.resolution.selectedCandidateUuid;
}
function Zy(e) {
	return e.source === "career";
}
function Qy(e) {
	return e.resolution.candidates.length > 0 || Zy(e);
}
function $y(e) {
	return e.resolution.searchTerms.length <= 1 ? "" : `Options: ${e.resolution.searchTerms.join(" / ")}`;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderTrappingsTab/TrappingsTable.vue?vue&type=script&setup=true&lang.ts
var eb = { class: "npc-builder__table" }, tb = ["checked", "onChange"], nb = { class: "npc-builder__trapping-name" }, rb = { key: 0 }, ib = { class: "npc-builder__trapping-resolution" }, ab = ["value", "onChange"], ob = {
	key: 0,
	value: ""
}, sb = ["value"], cb = ["value"], lb = { key: 1 }, ub = ["value", "onInput"], db = ["onClick"], fb = { key: 1 }, pb = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B("div", eb, [r[0] ||= H("div", { class: "npc-builder__table-head npc-builder__table-head--traps" }, [
			H("span", null, "Use"),
			H("span", null, "Name"),
			H("span", null, "Resolution"),
			H("span", null, "Type"),
			H("span", null, "Qty"),
			H("span", null, "Source"),
			H("span")
		], -1), (z(!0), B(R, null, L(e.trappings, (e) => (z(), B("article", {
			key: e.key,
			class: k(["npc-builder__trapping-row", [F(Yy)(e), { "is-ignored": e.ignored }]])
		}, [
			H("input", {
				checked: !e.ignored,
				type: "checkbox",
				onChange: (t) => n("useChange", e.key, t)
			}, null, 40, tb),
			H("div", nb, [H("strong", null, A(e.name), 1), F($y)(e) ? (z(), B("span", rb, A(F($y)(e)), 1)) : G("", !0)]),
			H("div", ib, [H("span", { class: k(F(Jy)(e)) }, A(F(qy)(e)), 3), F(Qy)(e) ? (z(), B("select", {
				key: 0,
				value: F(Xy)(e),
				onChange: (t) => n("resolutionChange", e.key, t)
			}, [
				e.resolution.candidates.length ? (z(), B("option", ob, "Choose match")) : G("", !0),
				(z(!0), B(R, null, L(e.resolution.candidates, (e) => (z(), B("option", {
					key: e.uuid,
					value: e.uuid
				}, A(e.name) + " (" + A(e.sourceLabel) + ") ", 9, sb))), 128)),
				F(Zy)(e) ? (z(), B("option", {
					key: 1,
					value: F(Wy)
				}, "Blank Item", 8, cb)) : G("", !0)
			], 40, ab)) : (z(), B("span", lb, A(F(Ky)(e)), 1))]),
			H("span", null, A(e.resolution.selectedItemType || e.itemType || "trapping"), 1),
			H("input", {
				value: e.quantity,
				min: "1",
				type: "number",
				onInput: (t) => n("quantityInput", e.key, t)
			}, null, 40, ub),
			H("span", null, A(F(Gy)(e)), 1),
			e.source === "custom" ? (z(), B("button", {
				key: 0,
				type: "button",
				onClick: (t) => n("removeCustomTrapping", e.key)
			}, " Remove ", 8, db)) : (z(), B("span", fb))
		], 2))), 128))]));
	}
}), mb = { class: "npc-builder__stack" }, hb = { class: "npc-builder__panel" }, gb = { class: "npc-builder__panel-actions" }, _b = ["disabled"], vb = { key: 0 }, yb = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, bb = /* @__PURE__ */ I({
	__name: "NpcBuilderTrappingsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Vm(), { trappings: r } = Uf(n), i = /* @__PURE__ */ P(""), a = /* @__PURE__ */ P(!1), o = K(() => r.value.filter((e) => !e.ignored && e.resolution.status === "unresolved"));
		kr(() => {
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
		return (e, t) => (z(), B("section", mb, [H("section", hb, [
			t[0] ||= H("div", { class: "npc-builder__panel-heading" }, [H("span", null, "1"), H("h2", null, "Trappings")], -1),
			U(Pl, {
				class: "npc-builder__drop npc-builder__drop--career",
				description: "Add weapons, armour, containers, or any other item.",
				title: "Drop Trapping Items",
				onDropData: d
			}),
			H("div", gb, [H("button", {
				disabled: a.value || !o.value.length,
				type: "button",
				onClick: u
			}, A(a.value ? "Resolving..." : "Resolve Trappings"), 9, _b), o.value.length ? (z(), B("span", vb, A(o.value.length) + " unresolved ", 1)) : G("", !0)]),
			i.value ? (z(), B("p", yb, A(i.value), 1)) : G("", !0),
			U(pb, {
				trappings: F(r),
				onQuantityInput: s,
				onRemoveCustomTrapping: F(n).removeCustomTrapping,
				onResolutionChange: l,
				onUseChange: c
			}, null, 8, ["trappings", "onRemoveCustomTrapping"])
		])]));
	}
}), xb = { class: "npc-builder__subview-stack" }, Sb = { class: "npc-builder__field" }, Cb = ["onUpdate:modelValue"], wb = ["value"], Tb = ["onUpdate:modelValue", "placeholder"], Eb = {
	key: 0,
	class: "npc-builder__suggestions"
}, Db = { key: 0 }, Ob = ["onClick"], kb = {
	key: 0,
	class: "npc-builder__linked-note"
}, Ab = { class: "npc-builder__subview-actions" }, jb = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B("div", xb, [
			r[4] ||= H("p", null, " Some Career skills need a specialization before they become concrete WFRP skills. Blank rows can be left unresolved and edited later. ", -1),
			(z(!0), B(R, null, L(e.prompt.rows, (t) => (z(), B("section", {
				key: t.resolutionKey,
				class: "npc-builder__resolution-row"
			}, [
				H("div", null, [H("strong", null, A(e.getSkillResolutionLabel(t)), 1), H("small", null, A(t.careerLabel), 1)]),
				H("label", Sb, [r[3] ||= H("span", null, "Specialization", -1), t.options.length > 1 ? Vn((z(), B("select", {
					key: 0,
					"onUpdate:modelValue": (e) => t.resolvedSpecialization = e
				}, [r[2] ||= H("option", { value: "" }, "Leave unresolved", -1), (z(!0), B(R, null, L(t.options, (e) => (z(), B("option", {
					key: e,
					value: e
				}, A(e), 9, wb))), 128))], 8, Cb)), [[ns, t.resolvedSpecialization]]) : Vn((z(), B("input", {
					key: 1,
					"onUpdate:modelValue": (e) => t.resolvedSpecialization = e,
					placeholder: t.suggestedSpecializations.length ? "Type or choose below" : t.specialization,
					type: "text"
				}, null, 8, Tb)), [[ts, t.resolvedSpecialization]])]),
				e.usesFreeformSkillSpecialization(t) ? (z(), B("div", Eb, [t.isLoadingSuggestions ? (z(), B("small", Db, "Finding known choices.")) : G("", !0), (z(!0), B(R, null, L(t.suggestedSpecializations, (e) => (z(), B("button", {
					key: `${t.resolutionKey}:${e}`,
					type: "button",
					onClick: (r) => n("chooseSkillSpecialization", t, e)
				}, A(e), 9, Ob))), 128))])) : G("", !0)
			]))), 128)),
			e.prompt.linkedRows.length ? (z(), B("div", kb, A(e.prompt.linkedRows.length) + " linked skill specialization" + A(e.prompt.linkedRows.length === 1 ? "" : "s") + " will reuse earlier choices from this career chain. ", 1)) : G("", !0),
			H("div", Ab, [H("button", {
				type: "button",
				onClick: r[0] ||= (e) => n("addWithoutResolving")
			}, "Add Without Resolving"), H("button", {
				type: "button",
				onClick: r[1] ||= (e) => n("applySpecializations")
			}, "Apply Specializations")])
		]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/errors.ts
function Mb(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderBuild.ts
function Nb(e, t, n, r, i) {
	let a = Vm(), { advancements: o, buildTraits: s, careers: c, finalActorName: l, finalPortraitPath: u, selectedBaseActor: d, selectedSpells: f, settings: p, trappings: m } = Uf(a), h = /* @__PURE__ */ P(!1), g = K(() => !!(d.value && c.value.length && !h.value && !i.value));
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
			r.value = Mb(e), n.value = "";
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
function Pb(e) {
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
function Fb(e) {
	return [{
		career: e,
		mode: "add-or-increment"
	}];
}
function Ib(e) {
	return [...e.candidates.filter((t) => e.selectedUuids.includes(t.uuid)).map((e) => ({
		career: e,
		mode: "add-if-missing"
	})), {
		career: e.droppedCareer,
		mode: "add-or-increment"
	}];
}
function Lb(e) {
	let t = e.candidates.filter((t) => e.selectedUuids.includes(t.uuid)).length;
	return t === 0 ? "" : `Added ${t} lower-tier career candidate${t === 1 ? "" : "s"}.`;
}
function Rb(e, t) {
	return e?.selectedUuids.includes(t) ?? !1;
}
function zb(e, t, n, r) {
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
function Bb(e, t) {
	let n = /* @__PURE__ */ new Map(), r = [], i = [];
	for (let a of e) {
		let e = /* @__PURE__ */ new Map();
		for (let o of Lp(a.career.uuid, a.career.grants.skills)) {
			let s = Ip(o.originalName);
			if (!s) continue;
			let c = Rp(o.originalName), l = n.get(c) ?? [], u = e.get(c) ?? 0, d = t.enableLinkedSkillResolution && l[u] ? l[u] : "";
			if (e.set(c, u + 1), d) {
				r.push({
					linkedFromKey: d,
					resolutionKey: o.resolutionKey
				});
				continue;
			}
			i.push({
				baseName: s.baseName,
				careerLabel: Gb(a.career),
				isLoadingSuggestions: !1,
				occurrence: o.occurrence,
				options: s.options,
				originalName: s.originalName,
				resolvedSpecialization: Kb(s),
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
function Vb(e) {
	return e.resolvedSpecialization.trim() ? Pp(e.baseName, e.resolvedSpecialization) : "";
}
function Hb(e) {
	return e.occurrence > 0 ? `${e.originalName}, choice ${e.occurrence + 1}` : e.originalName;
}
function Ub(e) {
	return e.options.length <= 1 && e.specialization.trim().toLocaleLowerCase() === "any";
}
function Wb(e, t) {
	e.resolvedSpecialization = t;
}
function Gb(e) {
	return e.level === null ? e.name : `${e.name}, tier ${e.level}`;
}
function Kb(e) {
	return e.specialization.trim().toLocaleLowerCase() === "any" ? "" : e.options[0] ?? "";
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/skill-specialization-suggestions.ts
async function qb(e, t) {
	await Promise.all(t.rows.map(async (t) => {
		if (Ub(t)) {
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
function Jb(e, t, n) {
	let r = Vm(), { careers: i, settings: a } = Uf(r), o = /* @__PURE__ */ P(!1), s = /* @__PURE__ */ P(null), c = /* @__PURE__ */ P(null), l = K(() => Pb(s.value));
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
		m(Fb(e), {
			enableLinkedSkillResolution: !1,
			message: ""
		});
	}
	function m(t, n) {
		let r = Bb(t, n);
		if (r.rows.length) {
			c.value = r, qb(e, c.value);
			return;
		}
		y(t, n.message);
	}
	function h() {
		let e = s.value;
		e && (s.value = null, m(Ib(e), {
			enableLinkedSkillResolution: !a.value.askForLinkedSkillSpecializations,
			message: Lb(e)
		}));
	}
	function g() {
		let e = s.value;
		e && (s.value = null, p(e.droppedCareer));
	}
	function _() {
		let e = c.value;
		if (e) {
			for (let t of e.rows) r.setSkillGrantResolution(t.resolutionKey, Vb(t));
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
			n.value = Mb(e);
		}
	}
	function x(e) {
		return i.value.some((t) => t.uuid === e);
	}
	function S(e) {
		return Rb(s.value, e);
	}
	function C(e, t) {
		zb(s.value, e, t, x);
	}
	return {
		chooseSkillSpecialization: Wb,
		confirmLowerCareerPrompt: h,
		confirmSkillResolutionPrompt: _,
		dismissLowerCareerPrompt: g,
		dismissSkillResolutionPrompt: v,
		getSkillResolutionLabel: Hb,
		handleCareerDrop: u,
		isCareerQueued: x,
		isFindingLowerCareers: o,
		isLowerCareerSelected: S,
		lowerCareerCandidateGroups: l,
		pendingLowerCareerPrompt: s,
		pendingSkillResolutionPrompt: c,
		setLowerCareerSelected: C,
		usesFreeformSkillSpecialization: Ub
	};
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderInitialData.ts
function Yb(e, t) {
	let n = Vm(), { selectedBaseActorUuid: r, settings: i } = Uf(n), a = /* @__PURE__ */ P(!1), o = /* @__PURE__ */ P(!1), s = /* @__PURE__ */ P([]);
	kr(async () => {
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
			t.value = Mb(e);
		} finally {
			a.value = !1;
		}
	}), Jn(r, async (r) => {
		if (t.value = "", !r) {
			n.clearBaseDraftData();
			return;
		}
		o.value = !0;
		try {
			let t = await e.loadBaseActorDraftData(r);
			n.hydrateBaseActorDraftData(t);
		} catch (e) {
			t.value = Mb(e), n.clearBaseDraftData();
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
function Xb(e) {
	let t = Vm(), { advancements: n } = Uf(t), r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), a = K(() => {
		let e = /* @__PURE__ */ new Set();
		for (let t of n.value) t.kind === "skill" && !t.characteristicKey && !Ip(t.name) && e.add(t.name);
		return [...e];
	}), o = K(() => {
		let e = /* @__PURE__ */ new Set();
		for (let t of n.value) t.kind === "talent" && !t.talentMaximumKey && e.add(t.name);
		return [...e];
	});
	Jn(a, async (n) => {
		let i = Zb(n, r);
		if (i.length) try {
			let n = await e.listSkillCharacteristics(i);
			t.hydrateSkillCharacteristics(n);
		} catch {}
	}, { immediate: !0 }), Jn(o, async (n) => {
		let r = Zb(n, i);
		if (r.length) try {
			let n = await e.listTalentMaximums(r);
			t.hydrateTalentMaximums(n);
		} catch {}
	}, { immediate: !0 });
}
function Zb(e, t) {
	return e.filter((e) => {
		let n = Rp(e);
		return t.has(n) ? !1 : (t.add(n), !0);
	});
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp.vue?vue&type=script&setup=true&lang.ts
var Qb = { class: "npc-builder" }, $b = { class: "npc-builder__header" }, ex = { class: "npc-builder__header-actions" }, tx = {
	"aria-label": "NPC Builder sections",
	class: "npc-builder__tabs"
}, nx = ["disabled"], rx = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, ix = {
	key: 1,
	class: "npc-builder__message"
}, ax = /* @__PURE__ */ I({
	__name: "NpcBuilderApp",
	props: { bridge: {} },
	setup(e) {
		let t = e, { hasMagicAccess: n, selectedSpells: r } = Uf(Vm()), i = /* @__PURE__ */ P("builder"), a = /* @__PURE__ */ P(""), o = /* @__PURE__ */ P(""), { chooseSkillSpecialization: s, confirmLowerCareerPrompt: c, confirmSkillResolutionPrompt: l, dismissLowerCareerPrompt: u, dismissSkillResolutionPrompt: d, getSkillResolutionLabel: f, handleCareerDrop: p, isCareerQueued: m, isFindingLowerCareers: h, isLowerCareerSelected: g, lowerCareerCandidateGroups: _, pendingLowerCareerPrompt: v, pendingSkillResolutionPrompt: y, setLowerCareerSelected: b, usesFreeformSkillSpecialization: x } = Jb(t.bridge, a, o), { buildNpc: S, canBuild: C } = Nb(t.bridge, i, a, o, h), { isLoadingActors: w, isLoadingBaseDraft: ee, traitDifficultyOptions: T } = Yb(t.bridge, o);
		return Xb(t.bridge), (e, h) => (z(), B("main", Qb, [
			H("header", $b, [h[7] ||= H("div", null, [H("p", null, "WFRP4e Customizer"), H("h1", null, "NPC Builder")], -1), H("div", ex, [H("nav", tx, [
				H("button", {
					class: k({ "is-active": i.value === "builder" }),
					type: "button",
					onClick: h[0] ||= (e) => i.value = "builder"
				}, " Build ", 2),
				H("button", {
					class: k({ "is-active": i.value === "advancements" }),
					type: "button",
					onClick: h[1] ||= (e) => i.value = "advancements"
				}, " Advances ", 2),
				H("button", {
					class: k({ "is-active": i.value === "trappings" }),
					type: "button",
					onClick: h[2] ||= (e) => i.value = "trappings"
				}, " Trappings ", 2),
				H("button", {
					class: k({ "is-active": i.value === "traits" }),
					type: "button",
					onClick: h[3] ||= (e) => i.value = "traits"
				}, " Traits ", 2),
				F(n) || F(r).length ? (z(), B("button", {
					key: 0,
					class: k({ "is-active": i.value === "spells" }),
					type: "button",
					onClick: h[4] ||= (e) => i.value = "spells"
				}, " Spells ", 2)) : G("", !0),
				H("button", {
					class: k({ "is-active": i.value === "settings" }),
					type: "button",
					onClick: h[5] ||= (e) => i.value = "settings"
				}, " Settings ", 2)
			]), H("button", {
				disabled: !F(C),
				type: "button",
				onClick: h[6] ||= (...e) => F(S) && F(S)(...e)
			}, "Build NPC", 8, nx)])]),
			U(ys, {
				open: F(v) !== null,
				title: "Add Lower-Tier Careers?",
				onClose: F(u)
			}, {
				default: Bn(() => [F(v) ? (z(), V(Gm, {
					key: 0,
					"candidate-groups": F(_),
					"is-career-queued": F(m),
					"is-lower-career-selected": F(g),
					prompt: F(v),
					onAddDroppedOnly: F(u),
					onAddSelected: F(c),
					onLowerCareerSelected: F(b)
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
			U(ys, {
				open: F(y) !== null,
				title: "Resolve Skill Specializations",
				onClose: F(d)
			}, {
				default: Bn(() => [F(y) ? (z(), V(jb, {
					key: 0,
					"get-skill-resolution-label": F(f),
					prompt: F(y),
					"uses-freeform-skill-specialization": F(x),
					onAddWithoutResolving: F(d),
					onApplySpecializations: F(l),
					onChooseSkillSpecialization: F(s)
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
			o.value ? (z(), B("p", rx, A(o.value), 1)) : a.value ? (z(), B("p", ix, A(a.value), 1)) : G("", !0),
			i.value === "settings" ? (z(), V(Kv, {
				key: 2,
				bridge: t.bridge
			}, null, 8, ["bridge"])) : i.value === "advancements" ? (z(), V(Zh, { key: 3 })) : i.value === "trappings" ? (z(), V(bb, {
				key: 4,
				bridge: t.bridge
			}, null, 8, ["bridge"])) : i.value === "traits" ? (z(), V(Uy, {
				key: 5,
				bridge: t.bridge,
				"difficulty-options": F(T)
			}, null, 8, ["bridge", "difficulty-options"])) : i.value === "spells" ? (z(), V(Ey, {
				key: 6,
				bridge: t.bridge
			}, null, 8, ["bridge"])) : (z(), V(H_, {
				key: 7,
				bridge: t.bridge,
				"is-loading-actors": F(w),
				"is-loading-base-draft": F(ee),
				onCareerDrop: F(p)
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
//#region src/functions/npc-builder/extract-career-grants.ts
function ox(e) {
	return {
		characteristics: sx(e),
		skills: cx(e),
		talents: ux(e, [["talents", "value"], ["talents"]]),
		trappings: ux(e, [["trappings", "value"], ["trappings"]])
	};
}
function sx(e) {
	let t = ux(e, [["characteristics", "value"], ["characteristics"]]);
	if (t.length) return t.map(lx);
	let n = Y(e, ["characteristics"]);
	if (!J(n)) return [];
	let r = [];
	for (let [e, t] of Object.entries(n)) t && r.push(lx(e));
	return fx(r);
}
function cx(e) {
	return ux(e, [["skills", "value"], ["skills"]], { preserveDuplicates: !0 });
}
function lx(e) {
	let t = e.trim().toLocaleLowerCase();
	if (Gs(t)) return Us[t];
	let n = Ws[t];
	return n ? Us[n] : e.trim();
}
function ux(e, t, n = {}) {
	for (let r of t) {
		let t = Vs(Y(e, r));
		if (t.length) return n.preserveDuplicates ? dx(t) : fx(t);
	}
	return [];
}
function dx(e) {
	return e.map((e) => e.trim()).filter(Boolean);
}
function fx(e) {
	return [...new Set(dx(e))].sort((e, t) => e.localeCompare(t));
}
//#endregion
//#region src/module/wfrp4e/career-index.ts
var px = /* @__PURE__ */ new Map(), mx = "idle", hx = null;
function gx() {
	return hx || (mx = "indexing", px.clear(), hx = vx().then(() => {
		mx = "ready";
	}).catch((e) => {
		mx = "error", t("wfrp4e-customizer-apps | Career indexing failed.", e);
	}), hx);
}
async function _x(e) {
	return mx === "idle" && gx(), !e.careerGroup || e.level === null ? [] : [...px.values()].filter((t) => Cx(t, e)).sort(Tx);
}
async function vx() {
	xx(), await Dx();
	for (let e of game.packs ?? []) {
		if (!Sx(e) || !e.getDocuments) continue;
		let t = await e.getDocuments();
		for (let e of t) qf(e) && e.type === "career" && px.set(e.uuid, Ex(e));
		await Dx();
	}
}
function yx(e) {
	return X(e.system, ["careergroup", "value"]);
}
function bx(e) {
	let t = Y(e.system, ["level", "value"]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
function xx() {
	for (let e of game.items?.contents ?? []) e.type === "career" && px.set(e.uuid, Ex(e));
}
function Sx(e) {
	return e.documentName === "Item";
}
function Cx(e, t) {
	return e.uuid !== t.uuid && e.level !== null && t.level !== null && e.level < t.level && wx(e.careerGroup) === wx(t.careerGroup);
}
function wx(e) {
	return e.trim().toLocaleLowerCase();
}
function Tx(e, t) {
	let n = e.level ?? 0, r = t.level ?? 0;
	return n === r ? e.name.localeCompare(t.name) : n - r;
}
function Ex(e) {
	return {
		careerGroup: yx(e),
		grants: ox(e.system),
		img: e.img ?? "",
		level: bx(e),
		name: e.name,
		uuid: e.uuid
	};
}
function Dx() {
	return new Promise((e) => {
		globalThis.setTimeout(e, 0);
	});
}
//#endregion
//#region src/module/wfrp4e/skill-specializations.ts
var Ox = /* @__PURE__ */ new Map(), kx = /* @__PURE__ */ new Map(), Ax = /* @__PURE__ */ new Map(), jx = "idle", Mx = null;
async function Nx(e) {
	let t = Rp(e);
	return t ? (jx === "idle" && Fx(), Mx && await Mx, [...Ox.get(t) ?? []].sort((e, t) => e.localeCompare(t))) : [];
}
async function Px(e) {
	return jx === "idle" && Fx(), Mx && await Mx, e.flatMap((e) => {
		let t = zx(e);
		return t ? [{
			...t,
			skillName: e
		}] : [];
	});
}
function Fx() {
	return Mx || (jx = "indexing", Ox.clear(), kx.clear(), Ax.clear(), Mx = Ix().then(() => {
		jx = "ready";
	}).catch((e) => {
		jx = "error", t("wfrp4e-customizer-apps | Skill specialization indexing failed.", e);
	}), Mx);
}
async function Ix() {
	Bx(), await Hx();
	for (let e of game.packs ?? []) {
		if (!Vx(e) || !e.getDocuments) continue;
		let t = await e.getDocuments();
		for (let e of t) qf(e) && Lx(e);
		await Hx();
	}
}
function Lx(e) {
	if (e.type !== "skill") return;
	Rx(e);
	let t = Fp(e.name);
	if (!t) return;
	let n = Rp(t.baseName), r = Ox.get(n) ?? /* @__PURE__ */ new Set();
	r.add(t.specialization), Ox.set(n, r);
}
function Rx(e) {
	let t = X(e.system, ["characteristic", "value"]);
	if (!Gs(t)) return;
	let n = {
		characteristicKey: t,
		characteristicName: Us[t],
		skillName: e.name
	}, r = Rp(e.name), i = Rp(Fp(e.name)?.baseName ?? e.name);
	kx.set(r, n), Ax.has(i) || Ax.set(i, n);
}
function zx(e) {
	let t = Rp(e), n = Rp(Fp(e)?.baseName ?? e);
	return kx.get(t) ?? Ax.get(n) ?? null;
}
function Bx() {
	for (let e of game.items?.contents ?? []) Lx(e);
}
function Vx(e) {
	return e.documentName === "Item";
}
function Hx() {
	return new Promise((e) => {
		globalThis.setTimeout(e, 0);
	});
}
//#endregion
//#region src/module/foundry/item-sources.ts
function Ux(e, t) {
	return {
		img: "systems/wfrp4e/icons/blank.png",
		name: e,
		system: {},
		type: t
	};
}
function Wx(e, t, n) {
	let r = e ? e.toObject() : Ux(t, n);
	return delete r._id, r;
}
function Gx(e, t, n) {
	return e.items?.contents.find((e) => e.type === n && Jx(e.name, t)) ?? null;
}
function Kx(e, t, n) {
	return e.items?.contents.find((e) => t && e.uuid === t ? !0 : Jx(e.name, n)) ?? null;
}
function qx(e, t) {
	return game.items?.contents.find((n) => t.includes(n.type) && Jx(n.name, e)) ?? null;
}
function Jx(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/wfrp4e/item-lookup.ts
async function Yx(e, t) {
	return await game.wfrp4e?.utility?.findItem?.(e, t) || qx(e, t);
}
//#endregion
//#region src/module/wfrp4e/talent-maximums.ts
async function Xx(e) {
	let t = [];
	for (let n of Zx(e)) {
		let e = await Yx(n, ["talent"]);
		e && t.push({
			maximumFormula: X(e.system, ["max", "formula"]),
			maximumKey: X(e.system, ["max", "value"]),
			talentName: n
		});
	}
	return t;
}
function Zx(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.trim().toLocaleLowerCase();
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
//#endregion
//#region src/module/apps/npc-builder/settings.ts
var Qx = "npcBuilderSettings", $x = am(), eS = ap({
	defaultValue: $x,
	key: Qx,
	name: "NPC Builder Settings",
	normalize: iS
});
function tS() {
	op(eS);
}
function nS() {
	return sp(eS);
}
async function rS(e) {
	return await cp(eS, e);
}
function iS(e) {
	if (typeof e != "object" || !e) return { ...$x };
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
		lowerCareerMode: aS(t.lowerCareerMode) ? t.lowerCareerMode : "prompt",
		outputActorFolderUuid: typeof t.outputActorFolderUuid == "string" ? t.outputActorFolderUuid : "",
		quickTraitFolderUuid: typeof t.quickTraitFolderUuid == "string" ? t.quickTraitFolderUuid : "",
		searchCompendiumPortraitAssets: t.searchCompendiumPortraitAssets ?? !0,
		searchFoundryPortraitAssets: t.searchFoundryPortraitAssets ?? !1,
		searchWebPortraitAssets: t.searchWebPortraitAssets ?? !1
	};
}
function aS(e) {
	return e === "auto-add-all" || e === "never" || e === "prompt";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/advancements.ts
async function oS(e, t) {
	let n = {}, r = [], i = [];
	for (let a of t) {
		let t = Math.floor(a.current);
		if (t === 0) continue;
		let o = a.baseAdvances + t;
		if (a.kind === "characteristic") {
			fS(n, a, o);
			continue;
		}
		let s = Gx(e, a.name, a.kind);
		if (s) {
			r.push({
				_id: s.id,
				"system.advances.value": o
			});
			continue;
		}
		let c = Wx(await Yx(a.name, [a.kind]), a.name, a.kind);
		c.type = a.kind, Hs(c, [
			"system",
			"advances",
			"value"
		], o), i.push(c);
	}
	Object.keys(n).length && await e.update(n), r.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", r), i.length && await e.createEmbeddedDocuments("Item", i);
}
function sS(e) {
	let t = [];
	for (let [n, r] of Object.entries(Us)) {
		let i = Rs(e.system, [[
			"characteristics",
			n,
			"advances",
			"value"
		], [
			"characteristics",
			n,
			"advances"
		]]), a = Rs(e.system, [
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
function cS(e, t) {
	return e.items?.contents.filter((e) => e.type === t).map((n) => lS(e, n, t)) ?? [];
}
function lS(e, t, n) {
	let r = Rs(t.system, [["advances", "value"], ["advances"]]);
	if (n === "talent") return {
		baseAdvances: r,
		current: r,
		kind: n,
		name: t.name,
		talentMaximumFormula: X(t.system, ["max", "formula"]),
		talentMaximumKey: X(t.system, ["max", "value"])
	};
	let i = uS(t), a = i ? dS(e, i) : 0, o = zs(t.system, [["total", "value"], ["total"]]), s = o !== null && i ? Math.max(0, o - a) : 0, c = Math.max(r, s), l = {
		baseAdvances: c,
		current: i ? a + c : c,
		kind: n,
		name: t.name
	};
	return i && (l.characteristicKey = i, l.characteristicName = Us[i]), l;
}
function uS(e) {
	let t = X(e.system, ["characteristic", "value"]);
	return Gs(t) ? t : void 0;
}
function dS(e, t) {
	return Rs(e.system, [
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
function fS(e, t, n) {
	let r = Ws[t.name.trim().toLocaleLowerCase()];
	r && (e[`system.characteristics.${r}.advances`] = n);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/config.ts
function pS(e, t) {
	Hs(e, [
		"system",
		"specification",
		"value"
	], t.specification), t.rollable && !t.damage && Hs(e, [
		"system",
		"rollable",
		"defaultDifficulty"
	], t.defaultDifficulty), t.damage && t.dice && Hs(e, [
		"system",
		"rollable",
		"dice"
	], t.dice);
}
function mS(e, t) {
	return {
		_id: e,
		"system.specification.value": t.specification,
		...t.rollable && !t.damage ? { "system.rollable.defaultDifficulty": t.defaultDifficulty } : {},
		...t.damage && t.dice ? { "system.rollable.dice": t.dice } : {}
	};
}
function hS(e) {
	return {
		...Sp(),
		attackType: yS(e.system, ["rollable", "attackType"]) || "melee",
		bonusCharacteristic: yS(e.system, ["rollable", "bonusCharacteristic"]),
		damage: Bs(e.system, [["rollable", "damage"]]),
		defaultDifficulty: yS(e.system, ["rollable", "defaultDifficulty"]) || "challenging",
		dice: yS(e.system, ["rollable", "dice"]),
		rollable: Bs(e.system, [["rollable", "value"]]),
		skill: yS(e.system, ["rollable", "skill"]),
		sl: Bs(e.system, [["rollable", "SL"]], !0),
		specification: yS(e.system, ["specification", "value"])
	};
}
function gS(e) {
	return vS(e.system);
}
function _S(e) {
	return vS(e.system);
}
function vS(e) {
	return Bs(e, [["disabled"], ["disabled", "value"]]);
}
function yS(e, t) {
	let n = Y(e, t);
	return typeof n == "string" ? n.trim() : typeof n == "number" ? String(n) : "";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/apply.ts
async function bS(e, t) {
	let n = [], r = [], i = [];
	for (let a of t) {
		let t = a.source === "base" ? Kx(e, a.sourceUuid, a.name) : Gx(e, a.name, "trait");
		if (a.ignored) {
			t && i.push(t.id);
			continue;
		}
		if (t) {
			n.push(mS(t.id, a.config));
			continue;
		}
		let o = Wx(a.sourceUuid ? await xS(a.sourceUuid) : await Yx(a.name, ["trait"]), a.name, "trait");
		o.type = "trait", Hs(o, ["system", "disabled"], !1), pS(o, a.config), r.push(o);
	}
	i.length && e.deleteEmbeddedDocuments && await e.deleteEmbeddedDocuments("Item", i), n.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", n), r.length && await e.createEmbeddedDocuments("Item", r);
}
async function xS(e) {
	let t = await fromUuid(e);
	return qf(t) ? t : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/actor-traits.ts
function SS(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && !gS(e)).map(TS) ?? [];
}
function CS(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && gS(e)).map(TS) ?? [];
}
function wS(e) {
	Array.isArray(e.items) && (e.items = e.items.filter((e) => {
		if (typeof e != "object" || !e) return !0;
		let t = e;
		return t.type !== "trait" || !_S(t);
	}));
}
function TS(e) {
	return {
		config: hS(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/difficulty-options.ts
var ES = [
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
async function DS() {
	let e = Y(game.wfrp4e?.config, ["difficultyLabels"]);
	if (!J(e)) return ES;
	let t = Object.entries(e).filter((e) => {
		let [t, n] = e;
		return !!t.trim() && typeof n == "string";
	}).map(([e, t]) => ({
		label: t,
		value: e
	}));
	return t.length ? t : ES;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/drops.ts
async function OS(e) {
	let t = Zf(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Trait item here.");
	let n = Xf(await fromUuid(t.uuid), "trait", "Drop a Foundry Trait item here.");
	return {
		config: hS(n),
		ignored: !1,
		key: `custom:${n.uuid}`,
		name: n.name,
		source: "custom",
		sourceUuid: n.uuid
	};
}
//#endregion
//#region src/functions/npc-builder/recommended-quick-traits.ts
var kS = [
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
async function AS(e) {
	return LS(await IS(e, "Actor"));
}
async function jS(e) {
	return LS(await IS(e, "Item"));
}
function MS() {
	return game.folders.contents.filter((e) => e.type === "Actor").map(LS).sort((e, t) => e.name.localeCompare(t.name));
}
function NS() {
	return game.folders.contents.filter((e) => e.type === "Item").map(LS).sort((e, t) => e.name.localeCompare(t.name));
}
function PS(e) {
	return e ? game.folders.contents.find((t) => t.uuid === e) ?? null : null;
}
function FS(e) {
	let t = PS(e);
	return t?.type === "Item" ? t : null;
}
async function IS(e, t) {
	let n = e.trim();
	if (!n) throw Error("Enter a folder name first.");
	let r = game.folders.contents.find((e) => e.type === t && RS(e.name, n));
	if (r) return r;
	let i = await Folder.create({
		name: n,
		type: t
	});
	if (!i) throw Error("Foundry did not create the folder.");
	return i;
}
function LS(e) {
	return {
		name: e.name,
		uuid: e.uuid
	};
}
function RS(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/quick-traits.ts
async function zS(e) {
	let t = FS(e.quickTraitFolderUuid);
	if (!t) throw Error("Choose a Quick Traits item folder before importing traits.");
	let n = new Set(HS(e).map((e) => e.name.trim().toLocaleLowerCase()));
	for (let e of kS) {
		if (n.has(e.trim().toLocaleLowerCase())) continue;
		let r = Wx(await Yx(e, ["trait"]), e, "trait");
		r.folder = t.id, r.type = "trait", await Item.create(r);
	}
	return ui.notifications?.info("Imported recommended quick traits."), await BS(e);
}
async function BS(e) {
	return HS(e).map(US).sort((e, t) => e.name.localeCompare(t.name));
}
function VS(e, t) {
	return t.quickTraitFolderUuid ? e.folder?.uuid === t.quickTraitFolderUuid : !1;
}
function HS(e) {
	return game.items?.contents.filter((t) => t.type === "trait" && VS(t, e)) ?? [];
}
function US(e) {
	return {
		config: hS(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/trappings.ts
var WS = [
	"ammunition",
	"armour",
	"container",
	"money",
	"trapping",
	"weapon"
];
async function GS(e, t) {
	let n = [], r = [], i = [];
	for (let a of t) {
		let t = a.source === "base" ? Kx(e, a.sourceUuid, a.name) : null;
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
		let o = await ZS(a), s = a.resolution.selectedItemType || a.itemType || "trapping", c = Wx(o, a.resolution.selectedName || a.name, s);
		c.type = s || c.type || "trapping", Hs(c, [
			"system",
			"quantity",
			"value"
		], a.quantity), r.push(c);
	}
	i.length && e.deleteEmbeddedDocuments && await e.deleteEmbeddedDocuments("Item", i), n.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", n), r.length && await e.createEmbeddedDocuments("Item", r);
}
async function KS(e) {
	return Am(e, await QS());
}
async function qS(e) {
	let t = Zf(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Item here.");
	let n = Yf(await fromUuid(t.uuid), "Drop a Foundry Item here.");
	return {
		ignored: !1,
		itemType: n.type,
		key: `custom:${n.uuid}`,
		name: n.name,
		quantity: YS(n),
		resolution: Om({
			itemType: n.type,
			name: n.name,
			uuid: n.uuid
		}),
		source: "custom",
		sourceUuid: n.uuid
	};
}
function JS(e) {
	let t = XS();
	return e.items?.contents.filter((e) => t.includes(e.type)).map((e) => ({
		itemType: e.type,
		name: e.name,
		quantity: YS(e),
		uuid: e.uuid
	})) ?? [];
}
function YS(e) {
	return Rs(e.system, [["quantity", "value"], ["quantity"]]) || 1;
}
function XS() {
	let e = Ls(game.wfrp4e?.config, ["trappingItems"]);
	return e.length ? e : WS;
}
async function ZS(e) {
	if (e.sourceUuid) {
		let t = await fromUuid(e.sourceUuid);
		return qf(t) ? t : null;
	}
	if (e.resolution.selectedCandidateUuid) {
		let t = await fromUuid(e.resolution.selectedCandidateUuid);
		return qf(t) ? t : null;
	}
	return e.resolution.status === "fallback" ? null : await Yx(e.resolution.selectedName || e.name, XS());
}
async function QS() {
	let e = [], t = XS();
	for (let n of game.items?.contents ?? []) t.includes(n.type) && e.push(nC(n, "World"));
	for (let n of game.packs ?? []) {
		if (!tC(n)) continue;
		let r = await $S(n, t);
		if (r.length) {
			e.push(...r);
			continue;
		}
		if (!n.getDocuments) continue;
		let i = await n.getDocuments();
		for (let r of i) qf(r) && t.includes(r.type) && e.push(nC(r, n.title ?? "Compendium"));
	}
	return e;
}
async function $S(e, t) {
	return e.getIndex ? ((await e.getIndex({ fields: ["name", "type"] })).contents ?? []).filter((n) => !!(n.name && n.type && eC(e, n) && t.includes(n.type))).map((t) => ({
		itemType: t.type ?? "trapping",
		name: t.name ?? "",
		sourceLabel: e.title ?? "Compendium",
		uuid: eC(e, t)
	})) : [];
}
function eC(e, t) {
	return t.uuid ? t.uuid : t._id && e.getUuid ? e.getUuid(t._id) : "";
}
function tC(e) {
	return e.documentName === "Item";
}
function nC(e, t) {
	return {
		itemType: e.type,
		name: e.name,
		sourceLabel: t,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/actors.ts
function rC(e) {
	return game.actors.contents.filter((t) => lC(t, e)).map(oC);
}
async function iC(e) {
	let t = Jf(await fromUuid(e));
	return {
		advancements: [
			...sS(t),
			...cS(t, "skill"),
			...cS(t, "talent")
		],
		optionalTraits: CS(t),
		traits: SS(t),
		trappings: JS(t)
	};
}
async function aC(e) {
	let t = Zf(e);
	if (t.type !== "Actor") throw Error("Drop a Foundry Actor here.");
	let n = null;
	return t.uuid ? n = await fromUuid(t.uuid) : t.id && (n = game.actors.get(t.id)), oC(Jf(n));
}
function oC(e) {
	return {
		img: e.img ?? "",
		name: e.name,
		prototypeTokenImg: cC(e),
		species: sC(e),
		type: e.type,
		uuid: e.uuid
	};
}
function sC(e) {
	return X(e.system, [
		"details",
		"species",
		"value"
	]) || X(e.system, ["details", "species"]) || X(e.system, [
		"details",
		"race",
		"value"
	]) || X(e.system, [
		"details",
		"ancestry",
		"value"
	]);
}
function cC(e) {
	return X(e, [
		"prototypeToken",
		"texture",
		"src"
	]) || X(e.toObject(), [
		"prototypeToken",
		"texture",
		"src"
	]);
}
function lC(e, t) {
	return t.baseActorFolderUuid ? e.folder?.uuid === t.baseActorFolderUuid : !0;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/constants.ts
var uC = "spell", dC = new Set(fm), fC = new Set(pm);
async function pC() {
	return mC().map((e) => ({
		category: vm(e.key),
		key: e.key,
		label: e.name,
		value: e.name,
		wind: e.wind
	})).sort((e, t) => e.category === t.category ? e.label.localeCompare(t.label) : e.category.localeCompare(t.category));
}
function mC() {
	let e = Y(game.wfrp4e?.config, ["magicLores"]), t = Y(game.wfrp4e?.config, ["magicWind"]), n = [];
	if (!J(e)) return [vC()];
	for (let [r, i] of Object.entries(e)) {
		let e = TC(i) || r, a = wC(t, r);
		n.push({
			key: r,
			matchTerms: CC(r, e, a),
			name: e,
			wind: a
		});
	}
	return n.some((e) => e.key === "petty") || n.push(vC()), n;
}
function hC(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) {
		if (r.isAmbiguous) continue;
		if (r.kind === "petty-magic") {
			let e = SC("petty magic", t);
			e && n.set(e.key, e);
			continue;
		}
		let e = SC(r.rawLore, t);
		e && n.set(e.key, e);
	}
	return [...n.values()];
}
function gC(e, t) {
	let n = [..._C(e.system), xC(e.name)].filter(Boolean);
	for (let e of n) {
		let n = bC(e, t);
		if (n) return n;
		let r = SC(e, t);
		if (r) return r;
	}
	return null;
}
function _C(e) {
	return [
		...Vs(Y(e, ["lore", "value"])),
		...Vs(Y(e, ["lore"])),
		...Vs(Y(e, ["magicLore", "value"])),
		...Vs(Y(e, ["magicLore"])),
		...Vs(Y(e, ["category", "value"])),
		...Vs(Y(e, [
			"system",
			"lore",
			"value"
		])),
		...Vs(Y(e, ["system", "lore"])),
		...Vs(Y(e, ["system.lore.value"])),
		...Vs(Y(e, ["system.lore"]))
	];
}
function vC() {
	return {
		key: "petty",
		matchTerms: ["petty", "petty magic"],
		name: "Petty Magic",
		wind: ""
	};
}
function yC(e) {
	let t = e.trim() || "Unknown Lore";
	return {
		key: hm(t) || "unknown",
		matchTerms: [t],
		name: t,
		wind: ""
	};
}
function bC(e, t) {
	let n = hm(e);
	return n === "lore" ? t.find((e) => e.key !== "petty") ?? null : n === "the eight winds" || n === "eight winds" ? t.find((e) => dC.has(e.key)) ?? null : n === "dark lore" ? t.find((e) => fC.has(e.key)) ?? null : null;
}
function xC(e) {
	return /\(([^)]+)\)\s*$/.exec(e)?.[1]?.trim() ?? "";
}
function SC(e, t) {
	let n = hm(e);
	return n ? t.find((e) => e.matchTerms.some((e) => hm(e) === n)) ?? null : null;
}
function CC(e, t, n) {
	let r = /* @__PURE__ */ new Set(), i = hm(e), a = hm(t);
	for (let i of [
		e,
		t,
		n
	]) i.trim() && r.add(i.trim());
	return (i === "petty" || a === "petty") && r.add("Petty Magic"), (i === "shadow" || a === "shadow") && r.add("Shadows"), t && !/^lore of /i.test(t) && r.add(`Lore of ${t}`), [...r];
}
function wC(e, t) {
	return J(e) ? TC(e[t]) : "";
}
function TC(e) {
	return typeof e == "string" ? e.trim() : J(e) ? X(e, ["name"]) || X(e, ["label"]) || X(e, ["value"]) : "";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/debug.ts
var EC = "[WFRP Customizer Apps][Spell Lookup]";
function DC(t, n) {
	if (n) {
		e(`${EC} ${t}`, n);
		return;
	}
	e(`${EC} ${t}`);
}
function OC(e, n) {
	t(`${EC} ${e}`, n);
}
function kC(e) {
	return [
		e.title ?? "",
		e.collection ?? "",
		X(e, ["metadata", "type"]),
		X(e, ["metadata", "documentName"]),
		e.documentName
	].filter(Boolean).join(" | ");
}
function AC(e) {
	return {
		loreTerms: _C(e.system),
		name: e.name,
		sourceLabel: e.sourceLabel,
		uuid: e.uuid
	};
}
function jC(e) {
	return typeof e == "string" ? {
		kind: "uuid-string",
		value: e
	} : J(e) ? {
		documentName: X(e, ["documentName"]),
		hasSystem: J(Y(e, ["system"])),
		loreTerms: _C(Y(e, ["system"])),
		name: X(e, ["name"]),
		type: X(e, ["type"]),
		uuid: X(e, ["uuid"])
	} : { kind: typeof e };
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/spell-input-conversion.ts
function MC(e, t) {
	return {
		img: e.img ?? "",
		name: e.name,
		sourceLabel: t,
		system: e.system,
		uuid: e.uuid
	};
}
function NC(e) {
	return /^item\./i.test(e.uuid) ? "World" : PC(e.uuid, "WFRP Item Lookup");
}
function PC(e, t) {
	let n = /^Compendium\.([^.]+\.[^.]+)\./.exec(e)?.[1];
	return n ? [...game.packs ?? []].find((e) => e.collection === n)?.title ?? n : t;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/compendium-spell-inputs.ts
async function FC(e) {
	if (DC("Compendium index scan start", { pack: kC(e) }), !e.getIndex) return DC("Compendium has no index; loading documents", { pack: kC(e) }), await VC(e);
	let t = LC(await e.getIndex({ fields: [
		"name",
		"type",
		"img",
		"system.lore.value"
	] }));
	if (DC("Compendium index loaded", {
		entries: t.length,
		pack: kC(e),
		samples: t.slice(0, 5).map((t) => ({
			hasLoreTerms: _C(t).length > 0,
			name: t.name,
			type: t.type,
			uuid: HC(e, t)
		}))
	}), !t.length) return DC("Compendium index empty; loading documents", { pack: kC(e) }), await VC(e);
	let n = t.filter(zC);
	DC("Compendium index spell candidates", {
		pack: kC(e),
		spellEntries: n.length
	});
	let r = n.filter((e) => e.name).map((t) => WC(e, t));
	return r.length || !UC(e) ? r : await VC(e);
}
function IC(e) {
	return e.documentName === "Item" || X(e, ["metadata", "type"]) === "Item" || X(e, ["metadata", "documentName"]) === "Item";
}
function LC(e) {
	return Array.isArray(e) ? e.filter(RC) : Array.isArray(e.contents) ? e.contents.filter(RC) : BC(e) ? [...e].flatMap((e) => {
		let t = Array.isArray(e) ? e[1] : e;
		return RC(t) ? [t] : [];
	}) : [];
}
function RC(e) {
	return J(e);
}
function zC(e) {
	return e.type === "spell" ? !0 : !!(e.name && (_C(e).length || xC(e.name)));
}
function BC(e) {
	return J(e) && Symbol.iterator in e;
}
async function VC(e) {
	if (!e.getDocuments) return DC("Compendium has no document loader", { pack: kC(e) }), [];
	DC("Compendium document load start", { pack: kC(e) });
	let t = await e.getDocuments(), n = t.filter((e) => qf(e) && e.type === "spell");
	return DC("Compendium document load complete", {
		documents: t.length,
		pack: kC(e),
		spellDocuments: n.length,
		spellSamples: n.slice(0, 5).map((e) => ({
			loreTerms: _C(e.system),
			name: e.name,
			uuid: e.uuid
		}))
	}), n.map((t) => MC(t, e.title ?? "Compendium"));
}
function HC(e, t) {
	return t.uuid ? t.uuid : t._id && e.getUuid ? e.getUuid(t._id) : "";
}
function UC(e) {
	return e.collection === "wfrp4e-core.items" || e.collection === "wfrp4e-wom.items";
}
function WC(e, t) {
	return {
		img: t.img ?? t.thumb ?? "",
		name: t.name ?? "",
		sourceLabel: e.title ?? "Compendium",
		system: t,
		uuid: HC(e, t)
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/warhammer-spell-inputs.ts
async function GC() {
	let e = qC();
	if (!e) return DC("WFRP helper unavailable"), [];
	try {
		let t = await e.findAllItems(uC, "Loading Spells", !0, ["system.lore.value"]);
		return DC("WFRP helper raw result", {
			count: t.length,
			samples: t.slice(0, 10).map(jC)
		}), (await Promise.all(t.map((e) => KC(e)))).filter((e) => e !== null);
	} catch (e) {
		return OC("WFRP helper lookup failed.", e), [];
	}
}
async function KC(e) {
	if (typeof e == "string") {
		let t = await fromUuid(e);
		return qf(t) && t.type === "spell" ? MC(t, NC(t)) : null;
	}
	if (qf(e)) return e.type === "spell" ? MC(e, NC(e)) : null;
	if (X(e, ["type"]) !== "spell") return null;
	let t = X(e, ["name"]);
	return t ? {
		img: X(e, ["img"]) || X(e, ["thumb"]),
		name: t,
		sourceLabel: PC(X(e, ["uuid"]), "WFRP Item Lookup"),
		system: Y(e, ["system"]),
		uuid: X(e, ["uuid"])
	} : null;
}
function qC() {
	let e = Y(globalThis, [
		"warhammer",
		"utility",
		"findAllItems"
	]);
	return typeof e == "function" ? { findAllItems: e } : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/spell-resolution-inputs.ts
async function JC() {
	let e = [], n = [...game.packs ?? []];
	DC("Candidate lookup start", {
		itemPacks: n.filter(IC).length,
		totalPacks: n.length,
		warhammerUtilityAvailable: !!ZC(),
		worldItems: game.items?.contents.length ?? 0
	});
	let r = await GC();
	DC("WFRP helper lookup complete", {
		utilityInputs: r.length,
		utilitySamples: r.slice(0, 10).map(AC)
	}), e.push(...r), e.push(...YC()), DC("World spell scan complete", { worldSpellCount: e.filter((e) => e.sourceLabel === "World").length });
	for (let r of n) if (IC(r)) try {
		let t = await FC(r);
		e.push(...t), DC("Compendium spell scan complete", {
			inputCount: t.length,
			pack: kC(r),
			samples: t.slice(0, 5).map(AC)
		});
	} catch (e) {
		t(`wfrp4e-customizer-apps | Spell lookup skipped compendium "${r.title ?? r.collection ?? "unknown"}".`, e);
	}
	let i = XC(e);
	return DC("Candidate lookup complete", {
		rawInputCount: e.length,
		uniqueInputCount: i.length
	}), i;
}
function YC() {
	let e = [];
	for (let t of game.items?.contents ?? []) t.type === "spell" && e.push(MC(t, "World"));
	return e;
}
function XC(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.uuid || n.name.trim().toLocaleLowerCase();
		t.has(e) || t.set(e, n);
	}
	return [...t.values()];
}
function ZC() {
	return Y(globalThis, [
		"warhammer",
		"utility",
		"findAllItems"
	]);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/index.ts
async function QC(e, t) {
	let n = [];
	for (let r of t) {
		if (!r.selected || Gx(e, r.name, "spell")) continue;
		let t = Wx(r.sourceUuid ? await tw(r.sourceUuid) : null, r.name, uC);
		t.type = uC, n.push(t);
	}
	n.length && await e.createEmbeddedDocuments("Item", n);
}
async function $C(e) {
	let t = hC(e, mC());
	if (DC("Grant resolution start", {
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
	let n = await JC(), r = /* @__PURE__ */ new Map(), i = [];
	for (let e of n) {
		let n = gC(e, t);
		if (!n) {
			i.length < 20 && i.push({
				loreTerms: _C(e.system),
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
	return DC("Grant resolution complete", {
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
async function ew(e) {
	let t = Zf(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Spell item here.");
	let n = Xf(await fromUuid(t.uuid), uC, "Drop a Foundry Spell item here."), r = gC(MC(n, "Dropped"), [...mC(), vC()]) ?? yC(_C(n.system)[0] ?? "");
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
async function tw(e) {
	let t = await fromUuid(e);
	return qf(t) && t.type === "spell" ? t : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/build-npc.ts
async function nw(e) {
	let t = await aw(e);
	if (!t) throw Error("Foundry did not create the NPC Actor.");
	let n = ow(e), r = e.careers.at(-1), i = _p(e.advancements), a = {
		name: n,
		"prototypeToken.name": n,
		"system.details.gmnotes.value": rw(X(t.system, [
			"details",
			"gmnotes",
			"value"
		]), i)
	}, o = e.portraitPath || r?.img || "";
	return o && (a.img = o, a["prototypeToken.texture.src"] = o), await t.update(a), await oS(t, e.advancements), await bS(t, e.traits), await GS(t, e.trappings), await QC(t, e.spells), t.sheet?.render(!0), ui.notifications?.info(`Created NPC "${n}".`), {
		name: n,
		uuid: t.uuid
	};
}
function rw(e, t) {
	let n = iw(e).trim(), r = [
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
function iw(e) {
	return e.replaceAll(/<section data-wfrp-customizer-npc-xp="true">[\S\s]*?<\/section>/g, "");
}
async function aw(e) {
	let t = Jf(await fromUuid(e.baseActorUuid)).toObject(), n = PS(e.settings.outputActorFolderUuid);
	return delete t._id, delete t.folder, t.type = "npc", wS(t), n && (t.folder = n.id), await Actor.create(t);
}
function ow(e) {
	if (!e.settings.includeSpeciesInName) return e.actorName;
	let t = game.actors.contents.find((t) => t.uuid === e.baseActorUuid), n = t ? sC(t) : "";
	return !n || e.actorName.toLocaleLowerCase().includes(n.toLocaleLowerCase()) ? e.actorName : `${n} ${e.actorName}`;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/careers.ts
async function sw(e) {
	let t = Zf(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a WFRP Career item here.");
	return cw(Xf(await fromUuid(t.uuid), "career", "Drop a WFRP Career item here."));
}
function cw(e) {
	return {
		careerGroup: lw(e),
		grants: ox(e.system),
		img: e.img ?? "",
		level: uw(e),
		name: e.name,
		uuid: e.uuid
	};
}
function lw(e) {
	return X(e.system, ["careergroup", "value"]);
}
function uw(e) {
	let t = Y(e.system, ["level", "value"]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/candidate-utils.ts
function dw(e, t) {
	let n = t.img.trim().toLocaleLowerCase();
	!n || e.seenPaths.has(n) || (e.seenPaths.add(n), e.candidates.push(t));
}
function fw(e, t) {
	let n = t.imagePaths.filter(({ path: e }) => !!e);
	if (yw(t.name, n, e.searchTerms)) for (let r of n) dw(e, {
		img: r.path,
		key: `foundry-asset:${t.sourceKey}:${r.label}`,
		label: `${t.name || gw(r.path)} ${r.label} (${t.sourceLabel})`,
		source: "foundry-asset"
	});
}
function pw(e, t, n) {
	e?.({
		candidatesFound: t.candidates.length,
		currentLocation: n.currentLocation,
		directoriesVisited: t.visitedDirectories,
		maxDirectories: n.maxDirectories,
		phase: n.phase
	});
}
function mw(e) {
	return X(e, [
		"prototypeToken",
		"texture",
		"src"
	]) || X(e.toObject(), [
		"prototypeToken",
		"texture",
		"src"
	]);
}
function hw(e, t) {
	return `${gw(e)} (${t})`;
}
function gw(e) {
	return e.split(/[/\\]/).at(-1) ?? e;
}
function _w(e) {
	return typeof e == "object" && !!e;
}
function vw(e) {
	return _w(e) && Object.values(e).every((e) => Array.isArray(e) && e.every((e) => typeof e == "string"));
}
function yw(e, t, n) {
	return N_(e, n) || t.some(({ path: e }) => N_(e, n));
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/dig-down.ts
var bw = "fuzzy-foundry", xw = .3, Sw = new Set([
	".webp",
	".png",
	".jpg",
	".jpeg",
	".gif"
]);
function Cw(e, t) {
	let n = ww();
	if (pw(t, e, {
		currentLocation: Ew(n),
		maxDirectories: 0,
		phase: "filesystem"
	}), !n.digDownActive || !n.digDownCacheReady) return;
	let r = kw();
	if (!(!r?._fileIndexCache || !r.fs)) {
		for (let t of Dw(r, e.searchTerms)) Ow(e, r, t);
		pw(t, e, {
			currentLocation: "Dig Down file cache search complete",
			maxDirectories: 0,
			phase: "filesystem"
		});
	}
}
function ww() {
	let e = game.modules.get(bw)?.active === !0, t = Tw(), n = kw(), r = Object.values(n?._fileIndexCache ?? {}).reduce((e, t) => e + t.length, 0);
	return {
		digDownActive: e,
		digDownCacheReady: !!(n?._fileIndexCache && n.fs),
		digDownDeepFileSearchEnabled: t,
		digDownIndexedFileCount: r
	};
}
function Tw() {
	try {
		return game.settings.get(bw, "deepFile") === !0;
	} catch {
		return !1;
	}
}
function Ew(e) {
	return e.digDownActive ? e.digDownDeepFileSearchEnabled ? e.digDownCacheReady ? `Dig Down file cache (${e.digDownIndexedFileCount} files)` : "Waiting for Dig Down file cache" : "Dig Down Deep File Search is disabled" : "Dig Down is not active";
}
function Dw(e, t) {
	let n = /* @__PURE__ */ new Set(), r = Object.keys(e._fileIndexCache ?? {});
	for (let i of t) {
		let t = i.toLocaleLowerCase();
		for (let e of r) e.toLocaleLowerCase().includes(t) && n.add(e);
		let a = e.fs?.get(i, [], xw) ?? [];
		for (let [, e] of a) n.add(e);
	}
	return [...n].sort((e, t) => e.toLocaleLowerCase().localeCompare(t.toLocaleLowerCase()));
}
function Ow(e, t, n) {
	let r = t._fileIndexCache?.[n] ?? [];
	for (let t of r) Aw(t) && dw(e, {
		img: t,
		key: `foundry-asset:${t}`,
		label: hw(t, "Dig Down"),
		source: "foundry-asset"
	});
}
function kw() {
	let e = canvas.deepSearchCache;
	if (!_w(e)) return null;
	let t = e._fileIndexCache, n = e.fs, r = {};
	return vw(t) && (r._fileIndexCache = t), _w(n) && typeof n.get == "function" && (r.fs = { get: n.get.bind(n) }), r;
}
function Aw(e) {
	let t = `.${e.split(/[#?]/)[0]?.split(".").pop() ?? ""}`;
	return Sw.has(t.toLocaleLowerCase());
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/documents.ts
function jw(e, t) {
	pw(t, e, {
		currentLocation: "World Actors and Items",
		maxDirectories: 0,
		phase: "world-documents"
	});
	for (let t of game.actors.contents) fw(e, {
		imagePaths: [{
			label: "actor image",
			path: t.img ?? ""
		}, {
			label: "token image",
			path: mw(t)
		}],
		name: t.name,
		sourceLabel: "World Actors",
		sourceKey: t.uuid
	});
	for (let t of game.items?.contents ?? []) fw(e, {
		imagePaths: [{
			label: "item image",
			path: t.img ?? ""
		}],
		name: t.name,
		sourceLabel: "World Items",
		sourceKey: t.uuid
	});
}
async function Mw(e, t) {
	pw(t, e, {
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
		for (let r of n?.contents ?? []) fw(e, {
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
					path: X(r, [
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
async function Nw(e, t) {
	let n = M_(e);
	if (!n.length) return [];
	let r = {
		candidates: [],
		maxDirectoryBudget: 0,
		searchTerms: n,
		seenPaths: /* @__PURE__ */ new Set(),
		visitedDirectories: 0
	};
	return e.includeCompendiumAssets && (jw(r, t), await Mw(r, t)), e.includeFilePickerAssets && Cw(r, t), pw(t, r, {
		currentLocation: "Portrait search complete",
		maxDirectories: r.maxDirectoryBudget,
		phase: "ready"
	}), r.candidates;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/index.ts
var Pw = {
	buildNpc: nw,
	ensureActorFolder: AS,
	ensureItemFolder: jS,
	findLowerCareerCandidates: _x,
	getPortraitSearchAvailability: async () => ww(),
	importRecommendedQuickTraits: zS,
	listActorFolders: async () => MS(),
	listBaseActors: async (e) => rC(e),
	listFoundryPortraitCandidates: Nw,
	listMagicLoreOptions: pC,
	listSpellsForMagicGrants: $C,
	listItemFolders: async () => NS(),
	listQuickTraits: BS,
	listSkillCharacteristics: Px,
	listSkillSpecializations: Nx,
	listTalentMaximums: Xx,
	listTraitDifficultyOptions: DS,
	loadBaseActorDraftData: iC,
	loadSettings: async () => nS(),
	resolveActorDrop: aC,
	resolveCareerDrop: sw,
	resolveSpellDrop: ew,
	resolveTraitDrop: OS,
	resolveTrapping: KS,
	resolveTrappingDrop: qS,
	saveSettings: rS
}, Fw = class extends Gf {
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
		return ax;
	}
	getVueProps() {
		return { bridge: Pw };
	}
}, Iw = "wfrp4e-customizer-open-npc-builder", Lw = "wfrp4e-customizer-open-species-builder";
function Rw() {
	Hooks.on("renderActorDirectory", (e, t) => {
		let n = Uw(t);
		n && zw(n);
	});
}
function zw(e) {
	let n = Hw(e);
	if (!n) {
		t("wfrp4e-customizer-apps | Could not find Actor Directory button container.");
		return;
	}
	Bw(e, n), Vw(e, n);
}
function Bw(e, t) {
	if (e.querySelector(`.${Iw}`)) return;
	let n = document.createElement("button");
	n.classList.add(Iw, "wfrp4e-customizer-actor-directory-button"), n.type = "button", n.innerHTML = "<i class=\"fa-solid fa-user-plus\" inert></i><span>NPC Builder App</span>", n.addEventListener("click", () => {
		new Fw().render(!0);
	}), t.append(n);
}
function Vw(e, t) {
	if (e.querySelector(`.${Lw}`)) return;
	let n = document.createElement("button");
	n.classList.add(Lw, "wfrp4e-customizer-actor-directory-button"), n.type = "button", n.innerHTML = "<i class=\"fa-solid fa-people-group\" inert></i><span>Species Builder</span>", n.addEventListener("click", () => {
		new hp().render(!0);
	}), t.append(n);
}
function Hw(e) {
	return e.querySelector(".directory-header .header-actions") ?? e.querySelector(".directory-header .action-buttons") ?? e.querySelector(".header-actions") ?? e.querySelector(".action-buttons");
}
function Uw(e) {
	return e instanceof HTMLElement ? e : Ww(e) && e[0] instanceof HTMLElement ? e[0] : null;
}
function Ww(e) {
	return typeof e == "object" && !!e && "length" in e;
}
//#endregion
//#region src/module/apps/species-builder/apply-species-config.ts
var Gw = [
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
function Kw() {
	let n = game.wfrp4e?.config;
	if (!J(n)) {
		t(`${$} | WFRP config was unavailable; custom species were not applied.`);
		return;
	}
	let r = dp();
	qw(n, Ds(r)), r.definitions.length > 0 && e(`${$} | Applied ${r.definitions.length} custom species definition(s).`);
}
function qw(e, t) {
	for (let n of Gw) Jw(e, n, t[n]);
	Yw(e, t.extraSpecies), Xw(e, t.subspecies);
}
function Jw(e, t, n) {
	if (Object.keys(n).length === 0) return;
	let r = e[t];
	if (!J(r)) {
		e[t] = { ...n };
		return;
	}
	Object.assign(r, n);
}
function Yw(e, t) {
	if (t.length === 0) return;
	let n = Array.isArray(e.extraSpecies) ? e.extraSpecies : [], r = /* @__PURE__ */ new Set();
	for (let e of n) typeof e == "string" && r.add(e);
	for (let e of t) r.add(e);
	e.extraSpecies = [...r];
}
function Xw(e, t) {
	if (Object.keys(t).length === 0) return;
	let n = J(e.subspecies) ? e.subspecies : {};
	for (let [e, r] of Object.entries(t)) {
		let t = J(n[e]) ? n[e] : {};
		Object.assign(t, r), n[e] = t;
	}
	e.subspecies = n;
}
//#endregion
//#region src/functions/species-builder/characteristic-roll-formulas.ts
var Zw = "2d10";
function Qw(e) {
	let t = e?.split("+")[0]?.trim();
	return t ? eT(t) : Zw;
}
function $w(e, t) {
	return Qw(e) === Qw(t);
}
function eT(e) {
	return e.replaceAll(/\s+/g, "").toLocaleLowerCase();
}
//#endregion
//#region src/module/apps/species-builder/chargen-roll-swap-guard.ts
var tT = Symbol("wfrp4e-customizer-guarded-attributes-stage");
function nT() {
	Hooks.on("wfrp4e:chargen", (e) => {
		rT(e);
	});
}
function rT(n) {
	let r = iT(n);
	if (!r) {
		t(`${$} | Could not inspect WFRP character generation stages.`);
		return;
	}
	let i = aT(r);
	if (!i) {
		t(`${$} | Could not find the WFRP Attributes character generation stage.`);
		return;
	}
	if (oT(i.class)) return;
	let a = sT(i.class);
	typeof r.replaceStage == "function" ? r.replaceStage("attributes", a) : i.class = a, e(`${$} | Guarded WFRP characteristic roll swapping for custom species.`);
}
function iT(e) {
	if (!J(e)) return;
	let t = {}, n = e.replaceStage;
	return typeof n == "function" && (t.replaceStage = (t, r) => {
		n.call(e, t, r);
	}), Array.isArray(e.stages) && (t.stages = e.stages), t;
}
function aT(e) {
	for (let t of e.stages ?? []) if (J(t) && t.key === "attributes") return typeof t.class == "function" ? t : void 0;
}
function oT(e) {
	return !!e[tT];
}
function sT(e) {
	class t extends e {
		static [tT] = !0;
		swap(e, t) {
			let n = cT(this, e), r = cT(this, t);
			if ($w(n, r)) return super.swap(e, t);
			lT(e, n, t, r);
		}
	}
	return t;
}
function cT(e, t) {
	let n = J(e.context) ? e.context : void 0, r = J(n?.characteristics) ? n.characteristics : void 0, i = (J(r?.[t]) ? r[t] : void 0)?.formula;
	return typeof i == "string" ? i : void 0;
}
function lT(e, t, n, r) {
	let i = uT(e), a = uT(n), o = Qw(t), s = Qw(r);
	ui.notifications?.warn?.(`Cannot swap ${i} and ${a}: ${i} uses ${o}, while ${a} uses ${s}.`);
}
function uT(e) {
	let t = game.wfrp4e?.config?.characteristics;
	if (!J(t)) return e;
	let n = t[e];
	return typeof n == "string" ? n : e;
}
//#endregion
//#region src/view/apps/workbench/WorkbenchApp.vue?vue&type=script&setup=true&lang.ts
var dT = { class: "customizer-workbench" }, fT = {
	"aria-label": "Customizer targets",
	class: "customizer-workbench__body"
}, pT = { class: "customizer-workbench__targets" }, mT = /* @__PURE__ */ I({
	__name: "WorkbenchApp",
	setup(e) {
		let t = [
			"Actor sheets",
			"Item sheets",
			"Reusable dialogs"
		];
		return (e, n) => (z(), B("main", dT, [n[1] ||= H("header", { class: "customizer-workbench__header" }, [H("p", null, "WFRP4e"), H("h1", null, "Customizer Workbench")], -1), H("section", fT, [H("div", pT, [(z(), B(R, null, L(t, (e) => H("button", {
			key: e,
			disabled: "",
			type: "button"
		}, A(e), 1)), 64))]), n[0] ||= H("div", { class: "customizer-workbench__empty" }, [H("strong", null, "Vue application shell mounted."), H("span", null, "The first customizer surface can land here.")], -1)])]));
	}
}), hT = class extends Gf {
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
		return mT;
	}
}, gT = `${$}.debugShapeProbes`, _T = "wfrp4eCustomizerShapeProbes", vT = "wfrp4eCustomizerShapePreset";
//#endregion
//#region src/module/debug/shape-inspector/utils.ts
function yT(e, t, n) {
	let r = Number(e);
	return Number.isFinite(r) ? Math.max(0, Math.min(n, Math.floor(r))) : t;
}
function bT(e) {
	return typeof e == "object" && !!e;
}
function xT(e) {
	return typeof e == "string" ? e.trim().toLocaleLowerCase() : "";
}
function ST(e) {
	try {
		return localStorage.getItem(e);
	} catch {
		return null;
	}
}
//#endregion
//#region src/module/debug/shape-inspector/path-resolver.ts
function CT(e) {
	let t = kT(e), n = wT(globalThis, t.root);
	for (let e of t.tokens) {
		if (e.type === "property") {
			n = wT(n, e.key);
			continue;
		}
		if (e.type === "index") {
			n = wT(n, String(e.index));
			continue;
		}
		n = TT(n, e.name, e.args);
	}
	return n;
}
function wT(e, t) {
	if (!(!bT(e) && typeof e != "function")) try {
		return e[t];
	} catch {
		return;
	}
}
function TT(e, t, n) {
	if (t === "at") {
		let t = Number(n[0] ?? 0), r = Number.isFinite(t) ? t : 0;
		return AT(e).at(r);
	}
	if (t === "findByName") {
		let t = xT(n[0] ?? "");
		return AT(e).find((e) => xT(wT(e, "name")) === t);
	}
	if (t === "findByType") {
		let t = xT(n[0] ?? "");
		return AT(e).find((e) => xT(wT(e, "type")) === t);
	}
	if (t === "get") {
		let t = n[0] ?? "";
		if (e instanceof Map) return e.get(t);
		let r = wT(e, "get");
		if (typeof r == "function") return r.call(e, t);
	}
	if (t === "sample") {
		let t = yT(n[0], 3, 60);
		return AT(e).slice(0, t);
	}
	throw Error(`Unsupported path method "${t}".`);
}
function ET(e) {
	return e.trim() ? e.split(",").map((e) => OT(e.trim())).map(String) : [];
}
function DT(e) {
	let t = e.trim();
	return /^-?\d+$/.test(t) ? Number(t) : OT(t);
}
function OT(e) {
	let t = /^["'](?<value>.*)["']$/.exec(e);
	return t?.groups ? t.groups.value ?? "" : e;
}
function kT(e) {
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
				args: ET(e.groups.args ?? ""),
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
				index: DT(e),
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
function AT(e) {
	if (Array.isArray(e)) return e;
	let t = wT(e, "contents");
	return Array.isArray(t) ? t : [];
}
//#endregion
//#region src/module/debug/shape-inspector/presets.ts
var jT = { "npc-builder": [
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
function MT() {
	return window.location.href.includes("wfrp4eCustomizerShapeProbes") || window.location.href.includes("wfrp4eCustomizerShapePreset");
}
function NT(e) {
	let t = {
		hook: e.hook ?? "ready",
		maxDepth: yT(e.maxDepth, 2, 6),
		maxEntries: yT(e.maxEntries, 12, 60),
		path: e.path.trim()
	};
	return e.label && (t.label = e.label), t;
}
function PT() {
	return [...FT(), ...IT()].map(NT);
}
function FT() {
	let e = ST(gT);
	if (!e) return [];
	try {
		let t = JSON.parse(e);
		return Array.isArray(t) ? t.filter(RT).map(NT) : [];
	} catch {
		return [];
	}
}
function IT() {
	let e = [], t = [new URLSearchParams(window.location.search), new URLSearchParams(window.location.hash.replace(/^#/, ""))];
	for (let n of t) {
		let t = n.get(vT), r = n.get(_T);
		t && e.push(...jT[t] ?? []), r && e.push(...LT(r));
	}
	return window.location.href.includes("wfrp4eCustomizerShapePreset=npc-builder") && !e.length && e.push(...jT["npc-builder"] ?? []), e;
}
function LT(e) {
	try {
		let t = JSON.parse(decodeURIComponent(e));
		return Array.isArray(t) ? t.filter(RT) : [];
	} catch (e) {
		return t(`${$} | Could not parse URL shape probes.`, e), [];
	}
}
function RT(e) {
	return typeof e != "object" || !e ? !1 : "path" in e && typeof e.path == "string";
}
//#endregion
//#region src/module/debug/shape-inspector/summary.ts
function zT(e, t) {
	return !bT(e) && typeof e != "function" ? WT(e) : typeof e == "function" ? HT(e) : Array.isArray(e) ? BT(e, t) : e instanceof Map ? VT(e, t) : UT(e, t);
}
function BT(e, t) {
	return {
		length: e.length,
		sample: e.slice(0, t.maxEntries).map((e) => zT(e, KT(t))),
		type: "array"
	};
}
function VT(e, t) {
	return {
		sample: [...e.entries()].slice(0, t.maxEntries).map(([e, n]) => ({
			key: zT(e, KT(t)),
			value: zT(n, KT(t))
		})),
		size: e.size,
		type: "Map"
	};
}
function HT(e) {
	return {
		name: e.name,
		type: "function"
	};
}
function UT(e, t) {
	if (t.seen.has(e)) return { type: "circular" };
	t.seen.add(e);
	let n = GT(e, t.maxEntries), r = wT(e, "constructor"), i = {
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
		let n = wT(e, t);
		typeof n == "string" && (i[t] = n);
	}
	if (t.maxDepth <= 0) return i;
	let a = {};
	for (let r of n) a[r] = zT(wT(e, r), KT(t));
	i.properties = a;
	let o = wT(e, "toObject");
	if (typeof o == "function") try {
		i.source = zT(o.call(e), KT(t));
	} catch (e) {
		i.source = {
			error: e instanceof Error ? e.message : String(e),
			type: "error"
		};
	}
	return i;
}
function WT(e) {
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
function GT(e, t) {
	return Object.keys(e).sort().slice(0, t);
}
function KT(e) {
	return {
		maxDepth: e.maxDepth - 1,
		maxEntries: e.maxEntries,
		seen: e.seen
	};
}
//#endregion
//#region src/module/debug/shape-inspector/index.ts
function qT() {
	localStorage.removeItem(gT), e(`${$} | Cleared debug shape probes.`);
}
function JT() {
	return PT();
}
function YT(e, t = {}) {
	let n = QT(e, t);
	return eE(n), n;
}
function XT() {
	let t = PT();
	for (let e of ["init", "setup"]) {
		let n = t.filter((t) => t.hook === e);
		n.length && Hooks.once(e, () => {
			for (let t of n) $T(t, e);
		});
	}
	Hooks.once("ready", () => {
		let t = PT().filter((e) => (e.hook ?? "ready") === "ready");
		MT() && e(`${$} | Debug shape ready probes discovered: ${t.length}`, window.location.href);
		for (let e of t) $T(e, "ready");
	});
}
function ZT(t) {
	let n = t.map(NT);
	localStorage.setItem(gT, JSON.stringify(n)), e(`${$} | Stored ${n.length} debug shape probe(s). Reload Foundry to run init/setup probes.`);
}
function QT(e, t = {}, n) {
	let r = yT(t.maxDepth, 2, 6), i = yT(t.maxEntries, 12, 60), a = CT(e), o = {
		inspectedAt: (/* @__PURE__ */ new Date()).toISOString(),
		label: t.label || e,
		maxDepth: r,
		maxEntries: i,
		path: e,
		value: zT(a, {
			maxDepth: r,
			maxEntries: i,
			seen: /* @__PURE__ */ new WeakSet()
		})
	};
	return n && (o.hook = n), o;
}
function $T(e, n) {
	try {
		eE(QT(e.path, e, n));
	} catch (n) {
		t(`${$} | Debug shape probe failed for "${e.path}".`, n);
	}
}
function eE(t) {
	e(`${$} | Debug shape probe: ${t.label}`, JSON.stringify(t, null, 2));
}
//#endregion
//#region src/module/create-module-api.ts
function tE() {
	return {
		clearDebugShapeProbes: qT,
		getDebugShapeProbes: JT,
		inspectPath: YT,
		listNpcAutoAdvanceStrategies: Jm,
		openNpcBuilder: async () => {
			await new Fw().render(!0);
		},
		openSpeciesBuilder: async () => {
			await new hp().render(!0);
		},
		openWorkbench: async () => {
			await new hT().render(!0);
		},
		registerNpcAutoAdvanceStrategy: qm,
		setDebugShapeProbes: ZT
	};
}
//#endregion
//#region src/module/register-module-menus.ts
function nE() {
	game.settings.registerMenu($, "workbench", {
		hint: "Open the WFRP4e Customizer Apps workbench.",
		icon: "fa-solid fa-screwdriver-wrench",
		label: "Open Workbench",
		name: "WFRP4e Customizer Apps",
		restricted: !0,
		type: hT
	}), game.settings.registerMenu($, "npc-builder", {
		hint: "Build a WFRP4e NPC from a base Actor and Career items.",
		icon: "fa-solid fa-user-plus",
		label: "Open NPC Builder",
		name: "WFRP4e NPC Builder",
		restricted: !0,
		type: Fw
	}), game.settings.registerMenu($, "species-builder", {
		hint: "Create custom WFRP4e species definitions for character generation.",
		icon: "fa-solid fa-people-group",
		label: "Open Species Builder",
		name: "WFRP4e Species Builder",
		restricted: !0,
		type: hp
	});
}
//#endregion
//#region src/module/register-module-settings.ts
function rE() {
	tS(), up();
}
XT(), Hooks.once("init", () => {
	e(`${$} | Initializing`), rE(), game.system.id === "wfrp4e" && (Kw(), nT()), nE(), Rw();
}), Hooks.once("ready", () => {
	if (game.system.id !== "wfrp4e") {
		t(`${$} | Loaded outside ${lf}; skipping module API registration.`);
		return;
	}
	let n = game.modules.get($);
	if (!n) {
		t(`${$} | Foundry did not expose the module entry.`);
		return;
	}
	n.api = tE(), gx(), Fx(), e(`${$} | Ready`);
});
//#endregion
