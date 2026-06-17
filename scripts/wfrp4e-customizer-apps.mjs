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
		r._d && da(-1);
		let i = zn(t), a;
		try {
			a = e(...n);
		} finally {
			zn(i), r._d && da(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Vn(e, t) {
	if (Ln === null) return e;
	let n = Ga(Ln), i = e.dirs ||= [];
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
	if (ka) {
		let n = ka.provides, r = ka.parent && ka.parent.provides;
		r === n && (n = ka.provides = Object.create(r)), n[e] = t;
	}
}
function Wn(e, t, n = !1) {
	let r = Aa();
	if (r || mi) {
		let i = mi ? mi._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && _(t) ? t.call(r && r.proxy) : t;
	}
}
function Gn() {
	return !!(Aa() || mi);
}
var Kn = /* @__PURE__ */ Symbol.for("v-scx"), qn = () => Wn(Kn);
function Jn(e, t, n) {
	return Yn(e, t, n);
}
function Yn(e, t, n = r) {
	let { immediate: i, deep: o, flush: s, once: c } = n, u = l({}, n), d = t && i || !t && s !== "post", f;
	if (Ia) {
		if (s === "sync") {
			let e = qn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = a, e.resume = a, e.pause = a, e;
		}
	}
	let p = ka;
	u.call = (e, t, n) => vn(e, p, t, n);
	let m = !1;
	s === "post" ? u.scheduler = (e) => {
		Gi(e, p && p.suspense);
	} : s !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : An(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = hn(e, t, u);
	return Ia && (f ? f.push(h) : d && h()), h;
}
function Xn(e, t, n) {
	let r = this.proxy, i = v(e) ? e.includes(".") ? Zn(r, e) : () => r[e] : e.bind(r, r), a;
	_(t) ? a = t : (a = t.handler, n = t);
	let o = Na(this), s = Yn(i, a.bind(r), n);
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
		let n = Aa(), r = nr();
		return () => {
			let i = t.default && mr(t.default(), !0), a = i && i.length ? sr(i) : n.subTree ? G() : void 0;
			if (!a) return;
			let o = /* @__PURE__ */ M(e), { mode: s } = o;
			if (r.isLeaving) return dr(a);
			let c = fr(a);
			if (!c) return dr(a);
			let l = ur(c, o, r, n, (e) => l = e);
			c.type !== aa && pr(c, l);
			let u = n.subTree && fr(n.subTree);
			if (u && u.type !== aa && !ma(u, c) && ar(n).type !== aa) {
				let e = ur(u, o, r, n);
				if (pr(u, e), s === "out-in" && c.type !== aa) return r.isLeaving = !0, e.afterLeave = () => {
					r.isLeaving = !1, n.job.flags & 8 || n.update(), delete e.afterLeave, u = void 0;
				}, dr(a);
				s === "in-out" && c.type !== aa ? e.delayLeave = (e, t, n) => {
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
		for (let n of e) if (n.type !== aa) {
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
			i && ma(e, i) && i.el[er] && i.el[er](), C(r, [t]);
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
	if (xr(e)) return e = ya(e), e.children = null, e;
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
		o.type === R ? (o.patchFlag & 128 && i++, r = r.concat(mr(o.children, t, s))) : (t || o.type !== aa) && r.push(s == null ? o : ya(o, { key: s }));
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
	let s = i.shapeFlag & 4 ? Ga(i.component) : i.el, c = a ? null : s, { i: l, r: d } = e, m = t && t.r, h = l.refs === r ? l.refs = {} : l.refs, g = l.setupState, y = /* @__PURE__ */ M(g), b = g === r ? o : (e) => gr(h, e) ? !1 : f(y, e), x = (e, t) => !(t && gr(h, t));
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
				t.id = -1, _r.set(e, t), Gi(t, n);
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
function wr(e, t, n = ka) {
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
function Er(e, t, n = ka, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Je();
			let i = Na(n), a = vn(t, n, e, r);
			return i(), Ye(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var Dr = (e) => (t, n = ka) => {
	(!Ia || e === "sp") && Er(e, (...e) => t(...e), n);
}, Or = Dr("bm"), kr = Dr("m"), Ar = Dr("bu"), jr = Dr("u"), Mr = Dr("bum"), Nr = Dr("um"), Pr = Dr("sp"), Fr = Dr("rtg"), Ir = Dr("rtc");
function Lr(e, t = ka) {
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
	return e.some((e) => pa(e) ? !(e.type === aa || e.type === R && !Br(e.children)) : !0) ? e : null;
}
function Vr(e, t) {
	let n = {};
	for (let r in e) n[t && /[A-Z]/.test(r) ? `on:${r}` : oe(r)] = e[r];
	return n;
}
var Hr = (e) => e ? Fa(e) ? Ga(e) : Hr(e.parent) : null, Ur = /* @__PURE__ */ l(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Hr(e.parent),
	$root: (e) => Hr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => ei(e),
	$forceUpdate: (e) => e.f ||= () => {
		An(e.update);
	},
	$nextTick: (e) => e.n ||= On.bind(e.proxy),
	$watch: (e) => Xn.bind(e)
}), Wr = (e, t) => e !== r && !e.__isScriptSetup && f(e, t), Gr = {
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
			else if (Wr(i, t)) return s[t] = 1, i[t];
			else if (a !== r && f(a, t)) return s[t] = 2, a[t];
			else if (f(o, t)) return s[t] = 3, o[t];
			else if (n !== r && f(n, t)) return s[t] = 4, n[t];
			else Yr && (s[t] = 0);
		}
		let u = Ur[t], d, p;
		if (u) return t === "$attrs" && at(e.attrs, "get", ""), u(e);
		if ((d = c.__cssModules) && (d = d[t])) return d;
		if (n !== r && f(n, t)) return s[t] = 4, n[t];
		if (p = l.config.globalProperties, f(p, t)) return p[t];
	},
	set({ _: e }, t, n) {
		let { data: i, setupState: a, ctx: o } = e;
		return Wr(a, t) ? (a[t] = n, !0) : i !== r && f(i, t) ? (i[t] = n, !0) : f(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(n[c] || e !== r && c[0] !== "$" && f(e, c) || Wr(t, c) || f(o, c) || f(i, c) || f(Ur, c) || f(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? f(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Kr() {
	return qr("useSlots").slots;
}
function qr(e) {
	let t = Aa();
	return t.setupContext ||= Wa(t);
}
function Jr(e) {
	return p(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Yr = !0;
function Xr(e) {
	let t = ei(e), n = e.proxy, r = e.ctx;
	Yr = !1, t.beforeCreate && Qr(t.beforeCreate, e, "bc");
	let { data: i, computed: o, methods: s, watch: c, provide: l, inject: u, created: d, beforeMount: f, mounted: m, beforeUpdate: h, updated: g, activated: v, deactivated: y, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: w, render: ee, renderTracked: T, renderTriggered: E, errorCaptured: D, serverPrefetch: te, expose: ne, inheritAttrs: re, components: ie, directives: ae, filters: oe } = t;
	if (u && Zr(u, r, null), s) for (let e in s) {
		let t = s[e];
		_(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		b(t) && (e.data = /* @__PURE__ */ Ht(t));
	}
	if (Yr = !0, o) for (let e in o) {
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
	if (c) for (let e in c) $r(c[e], r, n, e);
	if (l) {
		let e = _(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Un(t, e[t]);
		});
	}
	d && Qr(d, e, "c");
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
function Zr(e, t, n = a) {
	p(e) && (e = ai(e));
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
function Qr(e, t, n) {
	vn(p(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function $r(e, t, n, r) {
	let i = r.includes(".") ? Zn(n, r) : () => n[r];
	if (v(e)) {
		let n = t[e];
		_(n) && Jn(i, n);
	} else if (_(e)) Jn(i, e.bind(n));
	else if (b(e)) if (p(e)) e.forEach((e) => $r(e, t, n, r));
	else {
		let r = _(e.handler) ? e.handler.bind(n) : t[e.handler];
		_(r) && Jn(i, r, e);
	}
}
function ei(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => ti(c, e, o, !0)), ti(c, t, o)), b(t) && a.set(t, c), c;
}
function ti(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && ti(e, a, n, !0), i && i.forEach((t) => ti(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = ni[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var ni = {
	data: ri,
	props: ci,
	emits: ci,
	methods: si,
	computed: si,
	beforeCreate: oi,
	created: oi,
	beforeMount: oi,
	mounted: oi,
	beforeUpdate: oi,
	updated: oi,
	beforeDestroy: oi,
	beforeUnmount: oi,
	destroyed: oi,
	unmounted: oi,
	activated: oi,
	deactivated: oi,
	errorCaptured: oi,
	serverPrefetch: oi,
	components: si,
	directives: si,
	watch: li,
	provide: ri,
	inject: ii
};
function ri(e, t) {
	return t ? e ? function() {
		return l(_(e) ? e.call(this, this) : e, _(t) ? t.call(this, this) : t);
	} : t : e;
}
function ii(e, t) {
	return si(ai(e), ai(t));
}
function ai(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function oi(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function si(e, t) {
	return e ? l(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ci(e, t) {
	return e ? p(e) && p(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : l(/* @__PURE__ */ Object.create(null), Jr(e), Jr(t ?? {})) : t;
}
function li(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = l(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = oi(e[r], t[r]);
	return n;
}
function di() {
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
var fi = 0;
function pi(e, t) {
	return function(n, r = null) {
		_(n) || (n = l({}, n)), r != null && !b(r) && (r = null);
		let i = di(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: fi++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Ja,
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
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, Ga(u.component);
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
				let t = mi;
				mi = c;
				try {
					return e();
				} finally {
					mi = t;
				}
			}
		};
		return c;
	};
}
var mi = null, hi = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ne(t)}Modifiers`] || e[`${ie(t)}Modifiers`];
function gi(e, t, ...n) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || r, a = n, o = t.startsWith("update:"), s = o && hi(i, t.slice(7));
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
var _i = /* @__PURE__ */ new WeakMap();
function vi(e, t, n = !1) {
	let r = n ? _i : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!_(e)) {
		let r = (e) => {
			let n = vi(e, t, !0);
			n && (s = !0, l(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (b(e) && r.set(e, null), null) : (p(a) ? a.forEach((e) => o[e] = null) : l(o, a), b(e) && r.set(e, o), o);
}
function yi(e, t) {
	return !e || !s(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), f(e, t[0].toLowerCase() + t.slice(1)) || f(e, ie(t)) || f(e, t));
}
function bi(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = zn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = xa(u.call(t, e, d, f, m, p, h)), y = s;
		} else {
			let e = t;
			v = xa(e.length > 1 ? e(f, {
				attrs: s,
				slots: o,
				emit: l
			}) : e(f, null)), y = t.props ? s : xi(s);
		}
	} catch (t) {
		sa.length = 0, yn(t, e, 1), v = U(aa);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(c) && (y = Si(y, a)), b = ya(b, y, !1, !0));
	}
	return n.dirs && (b = ya(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && pr(b, n.transition), v = b, zn(_), v;
}
var xi = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || s(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, Si = (e, t) => {
	let n = {};
	for (let r in e) (!c(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function Ci(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? wi(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (Ti(o, r, n) && !yi(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? wi(r, o, l) : !0 : !!o;
	return !1;
}
function wi(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (Ti(t, e, a) && !yi(n, a)) return !0;
	}
	return !1;
}
function Ti(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && b(r) && b(i) ? !Se(r, i) : r !== i;
}
function Ei({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var Di = {}, Oi = () => Object.create(Di), ki = (e) => Object.getPrototypeOf(e) === Di;
function Ai(e, t, n, r = !1) {
	let i = {}, a = Oi();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), Mi(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ Ut(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function ji(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ M(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (yi(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (f(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = ne(o);
					i[t] = Ni(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		Mi(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !f(t, a) && ((r = ie(a)) === a || !f(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Ni(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !f(t, e)) && (delete a[e], l = !0);
	}
	l && ot(e.attrs, "set", "");
}
function Mi(e, t, n, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (t) for (let r in t) {
		if (E(r)) continue;
		let l = t[r], u;
		a && f(a, u = ne(r)) ? !o || !o.includes(u) ? n[u] = l : (c ||= {})[u] = l : yi(e.emitsOptions, r) || (!(r in i) || l !== i[r]) && (i[r] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ M(n), i = c || r;
		for (let r = 0; r < o.length; r++) {
			let s = o[r];
			n[s] = Ni(a, t, s, i[s], e, !f(i, s));
		}
	}
	return s;
}
function Ni(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = f(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && _(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = Na(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === ie(n)) && (r = !0));
	}
	return r;
}
var Pi = /* @__PURE__ */ new WeakMap();
function Fi(e, t, n = !1) {
	let a = n ? Pi : t.propsCache, o = a.get(e);
	if (o) return o;
	let s = e.props, c = {}, u = [], d = !1;
	if (!_(e)) {
		let r = (e) => {
			d = !0;
			let [n, r] = Fi(e, t, !0);
			l(c, n), r && u.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!s && !d) return b(e) && a.set(e, i), i;
	if (p(s)) for (let e = 0; e < s.length; e++) {
		let t = ne(s[e]);
		Ii(t) && (c[t] = r);
	}
	else if (s) for (let e in s) {
		let t = ne(e);
		if (Ii(t)) {
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
function Ii(e) {
	return e[0] !== "$" && !E(e);
}
var Li = (e) => e === "_" || e === "_ctx" || e === "$stable", Ri = (e) => p(e) ? e.map(xa) : [xa(e)], zi = (e, t, n) => {
	if (t._n) return t;
	let r = Bn((...e) => Ri(t(...e)), n);
	return r._c = !1, r;
}, Bi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Li(n)) continue;
		let i = e[n];
		if (_(i)) t[n] = zi(n, i, r);
		else if (i != null) {
			let e = Ri(i);
			t[n] = () => e;
		}
	}
}, Vi = (e, t) => {
	let n = Ri(t);
	e.slots.default = () => n;
}, Hi = (e, t, n) => {
	for (let r in t) (n || !Li(r)) && (e[r] = t[r]);
}, Ui = (e, t, n) => {
	let r = e.slots = Oi();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Hi(r, t, n), n && ce(r, "_", e, !0)) : Bi(t, r);
	} else t && Vi(e, t);
}, Wi = (e, t, n) => {
	let { vnode: i, slots: a } = e, o = !0, s = r;
	if (i.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? o = !1 : Hi(a, t, n) : (o = !t.$stable, Bi(t, a)), s = t;
	} else t && (Vi(e, t), s = { default: 1 });
	if (o) for (let e in a) !Li(e) && s[e] == null && delete a[e];
}, Gi = ra;
function Ki(e) {
	return qi(e);
}
function qi(e, t) {
	let n = fe();
	n.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = a, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !ma(e, t) && (r = ye(e), he(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case ia:
				y(e, t, n, r);
				break;
			case aa:
				b(e, t, n, r);
				break;
			case oa:
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
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && D(e.children, d, null, r, i, Ji(e, a), s, u), _ && Hn(e, null, r, "created"), T(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !E(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && Ta(f, r, e);
		}
		_ && Hn(e, null, r, "beforeMount");
		let v = Xi(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Gi(() => {
			try {
				f && Ta(f, r, e), v && g.enter(d), _ && Hn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, T = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || na(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				T(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, D = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? Sa(e[l]) : xa(e[l]), t, n, r, i, a, o, s);
	}, te = (e, t, n, i, a, o, s) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || r, h = t.props || r, g;
		if (n && Yi(n, !1), (g = h.onVnodeBeforeUpdate) && Ta(g, n, t, e), f && Hn(t, e, n, "beforeUpdate"), n && Yi(n, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? ne(e.dynamicChildren, d, l, n, i, Ji(t, a), o) : s || ue(e, t, l, null, n, i, Ji(t, a), o, !1), u > 0) {
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
		((g = h.onVnodeUpdated) || f) && Gi(() => {
			g && Ta(g, n, t, e), f && Hn(t, e, n, "updated");
		}, i);
	}, ne = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === R || !ma(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
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
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), D(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (ne(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Zi(e, t, !0)) : ue(e, t, n, f, i, a, s, c, l);
	}, ae = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : oe(t, n, r, i, a, o, c) : O(e, t, c);
	}, oe = (e, t, n, r, i, a, o) => {
		let s = e.component = Oa(e, r, i);
		if (xr(e) && (s.ctx.renderer = Se), La(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ce, o), !e.el) {
				let r = s.subTree = U(aa);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else ce(s, e, t, n, i, a, o);
	}, O = (e, t, n) => {
		let r = t.component = e.component;
		if (Ci(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			le(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, ce = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = $i(e);
					if (n) {
						t && (t.el = c.el, le(e, t, o)), n.asyncDep.then(() => {
							Gi(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Yi(e, !1), t ? (t.el = c.el, le(e, t, o)) : t = c, n && se(n), (d = t.props && t.props.onVnodeBeforeUpdate) && Ta(d, s, t, c), Yi(e, !0);
				let f = bi(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), ye(p), e, i, a), t.el = f.el, u === null && Ei(e, f.el), r && Gi(r, i), (d = t.props && t.props.onVnodeUpdated) && Gi(() => Ta(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = br(t);
				if (Yi(e, !1), l && se(l), !m && (o = c && c.onVnodeBeforeMount) && Ta(o, d, t), Yi(e, !0), s && we) {
					let t = () => {
						e.subTree = bi(e), we(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = bi(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Gi(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Gi(() => Ta(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && br(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Gi(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ne(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => An(u), Yi(e, !0), l();
	}, le = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, ji(e, t.props, r, n), Wi(e, t.children, n), Je(), Nn(e), Ye();
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
			let r = t[p] = l ? Sa(t[p]) : xa(t[p]);
			v(e[p], r, n, null, a, o, s, c, l);
		}
		u > d ? ve(e, a, o, !0, !1, f) : D(t, n, r, a, o, s, c, l, f);
	}, pe = (e, t, n, r, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], i = t[u] = l ? Sa(t[u]) : xa(t[u]);
			if (ma(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], i = t[p] = l ? Sa(t[p]) : xa(t[p]);
			if (ma(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, i = e < d ? t[e].el : r;
				for (; u <= p;) v(null, t[u] = l ? Sa(t[u]) : xa(t[u]), n, i, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) he(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? Sa(t[u]) : xa(t[u]);
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
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && ma(r, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? he(r, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(r, t[i], n, null, a, o, s, c, l), y++);
			}
			let w = x ? Qi(C) : i;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, i = t[e], f = t[e + 1], p = e + 1 < d ? f.el || ta(f) : r;
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
		if (c === oa) {
			S(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) if (r === 0) l.beforeEnter(a), o(a, t, n), Gi(() => l.enter(a), i);
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
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Ta(_, t, e), u & 6) k(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Hn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Se, r) : l && !l.hasOnce && (a !== R || d > 0 && d & 64) ? ve(l, t, n, !1, !0) : (a === R && d & 384 || !i && u & 16) && ve(c, t, n), r && ge(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Gi(() => {
			_ && Ta(_, t, e), h && Hn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, ge = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === R) {
			_e(n, r);
			return;
		}
		if (t === oa) {
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
		ea(c), ea(l), r && se(r), i.stop(), a && (a.flags |= 8, he(o, e, t, n)), s && Gi(s, t), Gi(() => {
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
		createApp: pi(xe, Ce)
	};
}
function Ji({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Yi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Xi(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Zi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (p(r) && p(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Sa(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Zi(t, a)), a.type === ia && (a.patchFlag === -1 && (a = i[e] = Sa(a)), a.el = t.el), a.type === aa && !a.el && (a.el = t.el);
	}
}
function Qi(e) {
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
function $i(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : $i(t);
}
function ea(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function ta(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? ta(t.subTree) : null;
}
var na = (e) => e.__isSuspense;
function ra(e, t) {
	t && t.pendingBranch ? p(e) ? t.effects.push(...e) : t.effects.push(e) : Mn(e);
}
var R = /* @__PURE__ */ Symbol.for("v-fgt"), ia = /* @__PURE__ */ Symbol.for("v-txt"), aa = /* @__PURE__ */ Symbol.for("v-cmt"), oa = /* @__PURE__ */ Symbol.for("v-stc"), sa = [], ca = null;
function z(e = !1) {
	sa.push(ca = e ? null : []);
}
function la() {
	sa.pop(), ca = sa[sa.length - 1] || null;
}
var ua = 1;
function da(e, t = !1) {
	ua += e, e < 0 && ca && t && (ca.hasOnce = !0);
}
function fa(e) {
	return e.dynamicChildren = ua > 0 ? ca || i : null, la(), ua > 0 && ca && ca.push(e), e;
}
function B(e, t, n, r, i, a) {
	return fa(H(e, t, n, r, i, a, !0));
}
function V(e, t, n, r, i) {
	return fa(U(e, t, n, r, i, !0));
}
function pa(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function ma(e, t) {
	return e.type === t.type && e.key === t.key;
}
var ha = ({ key: e }) => e ?? null, ga = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : v(e) || /* @__PURE__ */ N(e) || _(e) ? {
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
		key: t && ha(t),
		ref: t && ga(t),
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
	return s ? (Ca(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= v(n) ? 8 : 16), ua > 0 && !o && ca && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && ca.push(c), c;
}
var U = _a;
function _a(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === Rr) && (e = aa), pa(e)) {
		let r = ya(e, t, !0);
		return n && Ca(r, n), ua > 0 && !a && ca && (r.shapeFlag & 6 ? ca[ca.indexOf(e)] = r : ca.push(r)), r.patchFlag = -2, r;
	}
	if (Ka(e) && (e = e.__vccOpts), t) {
		t = va(t);
		let { class: e, style: n } = t;
		e && !v(e) && (t.class = k(e)), b(n) && (/* @__PURE__ */ Yt(n) && !p(n) && (n = l({}, n)), t.style = pe(n));
	}
	let o = v(e) ? 1 : na(e) ? 128 : $n(e) ? 64 : b(e) ? 4 : _(e) ? 2 : 0;
	return H(e, t, n, r, i, o, a, !0);
}
function va(e) {
	return e ? /* @__PURE__ */ Yt(e) || ki(e) ? l({}, e) : e : null;
}
function ya(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? wa(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && ha(l),
		ref: t && t.ref ? n && a ? p(a) ? a.concat(ga(t)) : [a, ga(t)] : ga(t) : a,
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
		ssContent: e.ssContent && ya(e.ssContent),
		ssFallback: e.ssFallback && ya(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && pr(u, c.clone(u)), u;
}
function W(e = " ", t = 0) {
	return U(ia, null, e, t);
}
function ba(e, t) {
	let n = U(oa, null, e);
	return n.staticCount = t, n;
}
function G(e = "", t = !1) {
	return t ? (z(), V(aa, null, e)) : U(aa, null, e);
}
function xa(e) {
	return e == null || typeof e == "boolean" ? U(aa) : p(e) ? U(R, null, e.slice()) : pa(e) ? Sa(e) : U(ia, null, String(e));
}
function Sa(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : ya(e);
}
function Ca(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (p(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), Ca(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !ki(t) ? t._ctx = Ln : r === 3 && Ln && (Ln.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else _(t) ? (t = {
		default: t,
		_ctx: Ln
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [W(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function wa(...e) {
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
function Ta(e, t, n, r = null) {
	vn(e, t, 7, [n, r]);
}
var Ea = di(), Da = 0;
function Oa(e, t, n) {
	let i = e.type, a = (t ? t.appContext : e.appContext) || Ea, o = {
		uid: Da++,
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
		propsOptions: Fi(i, a),
		emitsOptions: vi(i, a),
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
	return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = gi.bind(null, o), e.ce && e.ce(o), o;
}
var ka = null, Aa = () => ka || Ln, ja, Ma;
{
	let e = fe(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	ja = t("__VUE_INSTANCE_SETTERS__", (e) => ka = e), Ma = t("__VUE_SSR_SETTERS__", (e) => Ia = e);
}
var Na = (e) => {
	let t = ka;
	return ja(e), e.scope.on(), () => {
		e.scope.off(), ja(t);
	};
}, Pa = () => {
	ka && ka.scope.off(), ja(null);
};
function Fa(e) {
	return e.vnode.shapeFlag & 4;
}
var Ia = !1;
function La(e, t = !1, n = !1) {
	t && Ma(t);
	let { props: r, children: i } = e.vnode, a = Fa(e);
	Ai(e, r, a, t), Ui(e, i, n || t);
	let o = a ? Ra(e, t) : void 0;
	return t && Ma(!1), o;
}
function Ra(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Gr);
	let { setup: r } = n;
	if (r) {
		Je();
		let n = e.setupContext = r.length > 1 ? Wa(e) : null, i = Na(e), a = _n(r, e, 0, [e.props, n]), o = x(a);
		if (Ye(), i(), (o || e.sp) && !br(e) && hr(e), o) {
			if (a.then(Pa, Pa), t) return a.then((n) => {
				za(e, n, t);
			}).catch((t) => {
				yn(t, e, 0);
			});
			e.asyncDep = a;
		} else za(e, a, t);
	} else Ha(e, t);
}
function za(e, t, n) {
	_(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : b(t) && (e.setupState = nn(t)), Ha(e, n);
}
var Ba, Va;
function Ha(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && Ba && !r.render) {
			let t = r.template || ei(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r;
				r.render = Ba(t, l(l({
					isCustomElement: n,
					delimiters: a
				}, i), o));
			}
		}
		e.render = r.render || a, Va && Va(e);
	}
	{
		let t = Na(e);
		Je();
		try {
			Xr(e);
		} finally {
			Ye(), t();
		}
	}
}
var Ua = { get(e, t) {
	return at(e, "get", ""), e[t];
} };
function Wa(e) {
	return {
		attrs: new Proxy(e.attrs, Ua),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Ga(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(nn(Xt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Ur) return Ur[n](e);
		},
		has(e, t) {
			return t in e || t in Ur;
		}
	}) : e.proxy;
}
function Ka(e) {
	return _(e) && "__vccOpts" in e;
}
var K = (e, t) => /* @__PURE__ */ un(e, t, Ia);
function qa(e, t, n) {
	try {
		da(-1);
		let r = arguments.length;
		return r === 2 ? b(t) && !p(t) ? pa(t) ? U(e, null, [t]) : U(e, t) : U(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && pa(n) && (n = [n]), U(e, t, n));
	} finally {
		da(1);
	}
}
var Ja = "3.5.34", Ya = void 0, Xa = typeof window < "u" && window.trustedTypes;
if (Xa) try {
	Ya = /* @__PURE__ */ Xa.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Za = Ya ? (e) => Ya.createHTML(e) : (e) => e, Qa = "http://www.w3.org/2000/svg", $a = "http://www.w3.org/1998/Math/MathML", eo = typeof document < "u" ? document : null, to = eo && /* @__PURE__ */ eo.createElement("template"), no = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? eo.createElementNS(Qa, e) : t === "mathml" ? eo.createElementNS($a, e) : n ? eo.createElement(e, { is: n }) : eo.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => eo.createTextNode(e),
	createComment: (e) => eo.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => eo.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			to.innerHTML = Za(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = to.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, ro = "transition", io = "animation", ao = /* @__PURE__ */ Symbol("_vtc"), oo = {
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
}, so = /* @__PURE__ */ l({}, ir, oo), co = /* @__PURE__ */ ((e) => (e.displayName = "Transition", e.props = so, e))((e, { slots: t }) => qa(cr, fo(e), t)), lo = (e, t = []) => {
	p(e) ? e.forEach((e) => e(...t)) : e && e(...t);
}, uo = (e) => e ? p(e) ? e.some((e) => e.length > 1) : e.length > 1 : !1;
function fo(e) {
	let t = {};
	for (let n in e) n in oo || (t[n] = e[n]);
	if (e.css === !1) return t;
	let { name: n = "v", type: r, duration: i, enterFromClass: a = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: s = `${n}-enter-to`, appearFromClass: c = a, appearActiveClass: u = o, appearToClass: d = s, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: p = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, h = po(i), g = h && h[0], _ = h && h[1], { onBeforeEnter: v, onEnter: y, onEnterCancelled: b, onLeave: x, onLeaveCancelled: S, onBeforeAppear: C = v, onAppear: w = y, onAppearCancelled: ee = b } = t, T = (e, t, n, r) => {
		e._enterCancelled = r, go(e, t ? d : s), go(e, t ? u : o), n && n();
	}, E = (e, t) => {
		e._isLeaving = !1, go(e, f), go(e, m), go(e, p), t && t();
	}, D = (e) => (t, n) => {
		let i = e ? w : y, o = () => T(t, e, n);
		lo(i, [t, o]), _o(() => {
			go(t, e ? c : a), ho(t, e ? d : s), uo(i) || yo(t, r, g, o);
		});
	};
	return l(t, {
		onBeforeEnter(e) {
			lo(v, [e]), ho(e, a), ho(e, o);
		},
		onBeforeAppear(e) {
			lo(C, [e]), ho(e, c), ho(e, u);
		},
		onEnter: D(!1),
		onAppear: D(!0),
		onLeave(e, t) {
			e._isLeaving = !0;
			let n = () => E(e, t);
			ho(e, f), e._enterCancelled ? (ho(e, p), Co(e)) : (Co(e), ho(e, p)), _o(() => {
				e._isLeaving && (go(e, f), ho(e, m), uo(x) || yo(e, r, _, n));
			}), lo(x, [e, n]);
		},
		onEnterCancelled(e) {
			T(e, !1, void 0, !0), lo(b, [e]);
		},
		onAppearCancelled(e) {
			T(e, !0, void 0, !0), lo(ee, [e]);
		},
		onLeaveCancelled(e) {
			E(e), lo(S, [e]);
		}
	});
}
function po(e) {
	if (e == null) return null;
	if (b(e)) return [mo(e.enter), mo(e.leave)];
	{
		let t = mo(e);
		return [t, t];
	}
}
function mo(e) {
	return ue(e);
}
function ho(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e[ao] || (e[ao] = /* @__PURE__ */ new Set())).add(t);
}
function go(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
	let n = e[ao];
	n && (n.delete(t), n.size || (e[ao] = void 0));
}
function _o(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
var vo = 0;
function yo(e, t, n, r) {
	let i = e._endId = ++vo, a = () => {
		i === e._endId && r();
	};
	if (n != null) return setTimeout(a, n);
	let { type: o, timeout: s, propCount: c } = bo(e, t);
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
function bo(e, t) {
	let n = window.getComputedStyle(e), r = (e) => (n[e] || "").split(", "), i = r(`${ro}Delay`), a = r(`${ro}Duration`), o = xo(i, a), s = r(`${io}Delay`), c = r(`${io}Duration`), l = xo(s, c), u = null, d = 0, f = 0;
	t === ro ? o > 0 && (u = ro, d = o, f = a.length) : t === io ? l > 0 && (u = io, d = l, f = c.length) : (d = Math.max(o, l), u = d > 0 ? o > l ? ro : io : null, f = u ? u === ro ? a.length : c.length : 0);
	let p = u === ro && /\b(?:transform|all)(?:,|$)/.test(r(`${ro}Property`).toString());
	return {
		type: u,
		timeout: d,
		propCount: f,
		hasTransform: p
	};
}
function xo(e, t) {
	for (; e.length < t.length;) e = e.concat(e);
	return Math.max(...t.map((t, n) => So(t) + So(e[n])));
}
function So(e) {
	return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Co(e) {
	return (e ? e.ownerDocument : document).body.offsetHeight;
}
function wo(e, t, n) {
	let r = e[ao];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var To = /* @__PURE__ */ Symbol("_vod"), Eo = /* @__PURE__ */ Symbol("_vsh"), Do = /* @__PURE__ */ Symbol(""), Oo = /(?:^|;)\s*display\s*:/;
function ko(e, t, n) {
	let r = e.style, i = v(n), a = !1;
	if (n && !i) {
		if (t) if (v(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? jo(r, t, "");
		}
		else for (let e in t) n[e] ?? jo(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? jo(r, i, "") : Fo(e, i, !v(t) && t ? t[i] : void 0, o) || jo(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Do];
			e && (n += ";" + e), r.cssText = n, a = Oo.test(n);
		}
	} else t && e.removeAttribute("style");
	To in e && (e[To] = a ? r.display : "", e[Eo] && (r.display = "none"));
}
var Ao = /\s*!important$/;
function jo(e, t, n) {
	if (p(n)) n.forEach((n) => jo(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = Po(e, t);
		Ao.test(n) ? e.setProperty(ie(r), n.replace(Ao, ""), "important") : e[r] = n;
	}
}
var Mo = [
	"Webkit",
	"Moz",
	"ms"
], No = {};
function Po(e, t) {
	let n = No[t];
	if (n) return n;
	let r = ne(t);
	if (r !== "filter" && r in e) return No[t] = r;
	r = ae(r);
	for (let n = 0; n < Mo.length; n++) {
		let i = Mo[n] + r;
		if (i in e) return No[t] = i;
	}
	return t;
}
function Fo(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && v(r) && n === r;
}
var Io = "http://www.w3.org/1999/xlink";
function Lo(e, t, n, r, i, a = ye(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Io, t.slice(6, t.length)) : e.setAttributeNS(Io, t, n) : n == null || a && !be(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : y(n) ? String(n) : n);
}
function Ro(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Za(n) : n);
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
function zo(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Bo(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Vo = /* @__PURE__ */ Symbol("_vei");
function Ho(e, t, n, r, i = null) {
	let a = e[Vo] || (e[Vo] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Wo(t);
		r ? zo(e, n, a[t] = Jo(r, i), s) : o && (Bo(e, n, o, s), a[t] = void 0);
	}
}
var Uo = /(?:Once|Passive|Capture)$/;
function Wo(e) {
	let t;
	if (Uo.test(e)) {
		t = {};
		let n;
		for (; n = e.match(Uo);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : ie(e.slice(2)), t];
}
var Go = 0, Ko = /* @__PURE__ */ Promise.resolve(), qo = () => Go ||= (Ko.then(() => Go = 0), Date.now());
function Jo(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		vn(Yo(e, n.value), t, 5, [e]);
	};
	return n.value = e, n.attached = qo(), n;
}
function Yo(e, t) {
	if (p(t)) {
		let n = e.stopImmediatePropagation;
		return e.stopImmediatePropagation = () => {
			n.call(e), e._stopped = !0;
		}, t.map((e) => (t) => !t._stopped && e && e(t));
	} else return t;
}
var Xo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Zo = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? wo(e, r, o) : t === "style" ? ko(e, n, r) : s(t) ? c(t) || Ho(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Qo(e, t, r, o)) ? (Ro(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Lo(e, t, r, o, a, t !== "value")) : e._isVueCE && ($o(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !v(r))) ? Ro(e, ne(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Lo(e, t, r, o));
};
function Qo(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Xo(t) && _(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Xo(t) && v(n) ? !1 : t in e;
}
function $o(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = ne(t);
	return Array.isArray(n) ? n.some((e) => ne(e) === r) : Object.keys(n).some((e) => ne(e) === r);
}
var es = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return p(t) ? (e) => se(t, e) : t;
};
function ts(e) {
	e.target.composing = !0;
}
function ns(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var rs = /* @__PURE__ */ Symbol("_assign");
function is(e, t, n) {
	return t && (e = e.trim()), n && (e = le(e)), e;
}
var as = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[rs] = es(i);
		let a = r || i.props && i.props.type === "number";
		zo(e, t ? "change" : "input", (t) => {
			t.target.composing || e[rs](is(e.value, n, a));
		}), (n || a) && zo(e, "change", () => {
			e.value = is(e.value, n, a);
		}), t || (zo(e, "compositionstart", ts), zo(e, "compositionend", ns), zo(e, "change", ns));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[rs] = es(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? le(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, os = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = h(t);
		zo(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? le(cs(e)) : cs(e));
			e[rs](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, On(() => {
				e._assigning = !1;
			});
		}), e[rs] = es(r);
	},
	mounted(e, { value: t }) {
		ss(e, t);
	},
	beforeUpdate(e, t, n) {
		e[rs] = es(n);
	},
	updated(e, { value: t }) {
		e._assigning || ss(e, t);
	}
};
function ss(e, t) {
	let n = e.multiple, r = p(t);
	if (!(n && !r && !h(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = cs(a);
			if (n) if (r) {
				let e = typeof o;
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = Ce(t, o) > -1;
			} else a.selected = t.has(o);
			else if (Se(cs(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function cs(e) {
	return "_value" in e ? e._value : e.value;
}
var ls = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], us = {
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
	exact: (e, t) => ls.some((n) => e[`${n}Key`] && !t.includes(n))
}, ds = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = us[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, fs = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, ps = (e, t) => {
	let n = e._withKeys ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = ie(n.key);
		if (t.some((e) => e === r || fs[e] === r)) return e(n);
	}));
}, ms = /* @__PURE__ */ l({ patchProp: Zo }, no), hs;
function gs() {
	return hs ||= Ki(ms);
}
var _s = ((...e) => {
	let t = gs().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = ys(e);
		if (!r) return;
		let i = t._component;
		!_(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, vs(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function vs(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function ys(e) {
	return v(e) ? document.querySelector(e) : e;
}
//#endregion
//#region src/functions/species-builder/example-species/goblins.ts
var bs = {
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
}, xs = [
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
], Ss = [
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
], Cs = [
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
function ws() {
	return Es();
}
function Ts() {
	return Es({ subspecies: [{
		careerTable: { rows: Cs },
		characteristics: {
			...bs,
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
function Es(e = {}) {
	return {
		age: "2d10+8",
		careerTable: { rows: xs },
		characteristics: bs,
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
		skills: Ss,
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
function Ds() {
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
var Os = [
	{
		createDefinition: Ds,
		description: "A deliberately extreme species for stress-testing formulas and generated Traits.",
		id: "viltrumite",
		label: "Viltrumite"
	},
	{
		createDefinition: ws,
		description: "A Goblin player species seed using the sample species Journal direction.",
		id: "goblin",
		label: "Goblin"
	},
	{
		createDefinition: Ts,
		description: "A Goblin seed with Night Goblin configured as a subspecies.",
		id: "night-goblin",
		label: "Night Goblin"
	}
], ks = Os.map(({ description: e, id: t, label: n }) => ({
	description: e,
	id: t,
	label: n
}));
function As() {
	return [Ds(), Ts()];
}
function js(e) {
	return Os.find((t) => t.id === e)?.createDefinition();
}
//#endregion
//#region src/view/components/SubView.vue?vue&type=script&setup=true&lang.ts
var Ms = { class: "sub-view__header" }, Ns = /* @__PURE__ */ I({
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
		return (t, n) => (z(), V(co, { name: "sub-view" }, {
			default: Bn(() => [e.open ? (z(), B("section", {
				key: 0,
				ref_key: "rootElement",
				ref: a,
				class: "sub-view",
				role: "dialog",
				"aria-modal": "true"
			}, [H("div", Ms, [H("h2", null, A(e.title), 1), H("button", {
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
}), Ps = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Fs = /* @__PURE__ */ Ps(Ns, [["__scopeId", "data-v-2d7058cd"]]), Is = {
	key: 0,
	class: "species-builder__confirm-panel"
}, Ls = { class: "species-builder__confirm-actions" }, Rs = /* @__PURE__ */ I({
	__name: "DeleteConfirmationSubView",
	props: { message: {} },
	emits: ["close", "confirm"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (z(), V(Fs, {
			open: !!e.message,
			title: "Confirm Deletion",
			onClose: r[2] ||= (e) => n("close")
		}, {
			default: Bn(() => [e.message ? (z(), B("div", Is, [H("p", null, A(e.message), 1), H("div", Ls, [H("button", {
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
}), zs = { class: "species-builder__header" }, Bs = { class: "species-builder__actions" }, Vs = {
	"aria-label": "Species Builder sections",
	class: "species-builder__tabs"
}, Hs = ["disabled"], Us = ["disabled"], Ws = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B("header", zs, [r[7] ||= H("div", null, [H("p", null, "WFRP4e Customizer"), H("h1", null, "Species Builder")], -1), H("div", Bs, [
			H("nav", Vs, [
				H("button", {
					class: k({ "is-active": e.activeTab === "species" }),
					type: "button",
					onClick: r[0] ||= (e) => n("selectTab", "species")
				}, " Species ", 2),
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
				onClick: r[3] ||= (e) => n("reload")
			}, [...r[5] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-rotate-right"
			}, null, -1), W(" Reload ", -1)]], 8, Hs),
			H("button", {
				disabled: !e.canSave,
				class: "species-builder__primary-action",
				type: "button",
				onClick: r[4] ||= (e) => n("save")
			}, [...r[6] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-floppy-disk"
			}, null, -1), W(" Save ", -1)]], 8, Us)
		])]));
	}
}), Gs = {
	class: "species-builder__status",
	"aria-live": "polite"
}, Ks = {
	key: 0,
	class: "species-builder__message species-builder__message--error"
}, qs = {
	key: 1,
	class: "species-builder__message species-builder__message--warning"
}, Js = {
	key: 2,
	class: "species-builder__message species-builder__message--warning"
}, Ys = {
	key: 3,
	class: "species-builder__message species-builder__message--warning"
}, Xs = {
	key: 4,
	class: "species-builder__message species-builder__message--warning"
}, Zs = {
	key: 5,
	class: "species-builder__message"
}, Qs = {
	key: 6,
	class: "species-builder__message"
}, $s = /* @__PURE__ */ I({
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
		return (t, n) => (z(), B("section", Gs, [e.loadError ? (z(), B("p", Ks, A(e.loadError), 1)) : e.duplicateKeys.length > 0 ? (z(), B("p", qs, " Duplicate species key: " + A(e.duplicateKeys.join(", ")), 1)) : e.duplicateSubspeciesMessage ? (z(), B("p", Js, A(e.duplicateSubspeciesMessage), 1)) : e.invalidDefinitionCount > 0 ? (z(), B("p", Ys, " Species need both a key and name before saving. ")) : e.invalidSubspeciesCount > 0 ? (z(), B("p", Xs, " Subspecies need both a key and name before saving. ")) : e.message ? (z(), B("p", Zs, A(e.message), 1)) : e.hasUnsavedChanges ? (z(), B("p", Qs, "Unsaved changes.")) : G("", !0)]));
	}
}), ec = { class: "species-builder__settings-panel" }, tc = { class: "species-builder__check-row" }, nc = ["checked", "disabled"], rc = { class: "species-builder__section" }, ic = { class: "species-builder__field-grid" }, ac = ["disabled", "value"], oc = ["value"], sc = { class: "species-builder__section-help" }, cc = { class: "species-builder__inline-actions" }, lc = ["disabled"], uc = ["disabled"], dc = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B("section", ec, [
			r[10] ||= H("div", { class: "species-builder__section-heading" }, [H("h2", null, "Settings")], -1),
			H("label", tc, [H("input", {
				checked: e.showGeneratedConfigTab,
				disabled: e.isDisabled,
				type: "checkbox",
				onChange: r[0] ||= (e) => n("updateShowGeneratedConfigTab", a(e))
			}, null, 40, nc), r[4] ||= H("span", null, "Show WFRP config tab", -1)]),
			H("section", rc, [
				r[8] ||= H("h3", null, "Samples", -1),
				r[9] ||= H("p", { class: "species-builder__section-help" }, " Add preconfigured species definitions matching sample species Journal material. ", -1),
				H("div", ic, [
					H("label", null, [r[5] ||= H("span", null, "Example Species", -1), H("select", {
						disabled: e.isDisabled,
						value: e.selectedExampleSpeciesId,
						onChange: r[1] ||= (e) => n("updateSelectedExampleSpeciesId", o(e))
					}, [(z(!0), B(R, null, L(e.exampleSpeciesOptions, (e) => (z(), B("option", {
						key: e.id,
						value: e.id
					}, A(e.label), 9, oc))), 128))], 40, ac)]),
					H("p", sc, A(i.value?.description), 1),
					H("div", cc, [H("button", {
						disabled: e.isDisabled || !e.selectedExampleSpeciesId,
						type: "button",
						onClick: r[2] ||= (t) => n("generateExampleSpecies", e.selectedExampleSpeciesId)
					}, [...r[6] ||= [H("i", {
						"aria-hidden": "true",
						class: "fa-solid fa-scroll"
					}, null, -1), W(" Generate Selected ", -1)]], 8, lc), H("button", {
						disabled: e.isDisabled || e.exampleSpeciesOptions.length === 0,
						type: "button",
						onClick: r[3] ||= (e) => n("generateAllExampleSpecies")
					}, [...r[7] ||= [H("i", {
						"aria-hidden": "true",
						class: "fa-solid fa-layer-group"
					}, null, -1), W(" Generate All ", -1)]], 8, uc)])
				])
			])
		]));
	}
});
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/editor-page-events.ts
function fc(e, t) {
	return {
		addSubspecies: e.addSubspecies,
		arrayFieldDrop: e.appendArrayFieldDrop,
		careerReplacementChoiceDrop: e.setCareerReplacementChoiceDrop,
		careerReplacementRolledDrop: e.setCareerReplacementRolledDrop,
		careerTableCareerDrop: e.setCareerTableCareerDrop,
		careerTableJournalDrop: e.setCareerTableJournalDrop,
		close: t.close,
		delete: t.requestDeleteSelectedDefinition,
		deleteSubspecies: t.requestDeleteSubspecies,
		duplicate: e.duplicateSelectedDefinition,
		linkedItemDrop: e.setLinkedItemDrop,
		openItem: e.openItemSheet,
		subspeciesTalentDrop: e.appendSubspeciesTalentDrop,
		subspeciesCareerTableCareerDrop: e.setSubspeciesCareerTableCareerDrop,
		subspeciesCareerTableJournalDrop: e.setSubspeciesCareerTableJournalDrop,
		subspeciesTalentReplacementReplacementDrop: (t, n, r) => e.setSubspeciesTalentReplacementDrop(t, n, "replacement", r),
		subspeciesTalentReplacementRolledDrop: (t, n, r) => e.setSubspeciesTalentReplacementDrop(t, n, "rolled", r),
		talentChoiceDrop: e.setTalentChoiceDrop,
		talentReplacementReplacementDrop: (t, n) => e.setTalentReplacementDrop(t, "replacement", n),
		talentReplacementRolledDrop: (t, n) => e.setTalentReplacementDrop(t, "rolled", n),
		updateArrayField: e.updateArrayField,
		updateBooleanField: e.updateBooleanField,
		updateCareerReplacementRows: e.updateCareerReplacementRows,
		updateCareerTableRows: e.updateCareerTableRows,
		updateCharacteristic: e.updateCharacteristic,
		updateHeightField: e.updateHeightField,
		updateLinkedItems: e.updateLinkedItems,
		updateLinkedTalents: e.updateLinkedTalents,
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
//#region src/functions/species-builder/config-keys.ts
function pc(e) {
	return e.trim().toLocaleLowerCase().replaceAll(/[^\da-z]+/g, "-").replaceAll(/^-+|-+$/g, "");
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/species-key-suggestions.ts
function mc(e) {
	return pc(e.name) || "new-species";
}
function hc(e) {
	return pc(e.name) || "new-subspecies";
}
//#endregion
//#region src/types/wfrp4e/characteristics.ts
var q = {
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
}, gc = {
	[q.Agility]: "Agility",
	[q.BallisticSkill]: "Ballistic Skill",
	[q.Dexterity]: "Dexterity",
	[q.Fellowship]: "Fellowship",
	[q.Initiative]: "Initiative",
	[q.Intelligence]: "Intelligence",
	[q.Strength]: "Strength",
	[q.Toughness]: "Toughness",
	[q.WeaponSkill]: "Weapon Skill",
	[q.Willpower]: "Willpower"
}, _c = {
	agility: q.Agility,
	"ballistic skill": q.BallisticSkill,
	dexterity: q.Dexterity,
	fellowship: q.Fellowship,
	initiative: q.Initiative,
	intelligence: q.Intelligence,
	strength: q.Strength,
	toughness: q.Toughness,
	"weapon skill": q.WeaponSkill,
	willpower: q.Willpower
};
function vc(e) {
	return e in gc;
}
//#endregion
//#region src/functions/species-builder/wound-formula/compiler.ts
function yc(e) {
	let t = [], n = /* @__PURE__ */ new Set(), r = e.trim();
	return r = r.replaceAll(/@([A-Za-z][\dA-Za-z]*)/g, (e, t) => {
		let r = bc(t);
		return n.add(r), r;
	}), r = r.replaceAll(/{([^{}]+)}/g, (e, n) => xc(t, n, "total")), r = r.replaceAll(/\[([^[\]]+)]/g, (e, n) => xc(t, n, "bonus")), {
		expression: r,
		references: t,
		usedKeywords: n
	};
}
function bc(e) {
	if ((/* @__PURE__ */ "ablaze.advantage.age.bleeding.blinded.broken.corruption.deafened.entangled.fate.fatigued.fortune.height.poisoned.rank.resilience.resolve.sb.sbMultiplier.scale.sin.size.status.stunned.tb.tbMultiplier.weight.wpb.wpbMultiplier.xp".split(".")).includes(e)) return e;
	throw Error(`Unknown wound formula keyword: @${e}`);
}
function xc(e, t, n) {
	let r = Sc(t, n, e), i = e.find((e) => Cc(e, r));
	return i ? i.variableName : (e.push(r), r.variableName);
}
function Sc(e, t, n) {
	let [r, i] = wc(e), a = Tc(r), o = kc(Oc(r, i, t), n);
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
	return i && (s.characteristicOverride = Ec(i)), s;
}
function Cc(e, t) {
	return e.characteristicKey === t.characteristicKey && e.characteristicOverride === t.characteristicOverride && e.kind === t.kind && e.name === t.name && e.source === t.source;
}
function wc(e) {
	let t = e.split("|").map((e) => e.trim());
	if (t.length > 2 || !t[0]) throw Error(`Invalid wound formula attribute reference: ${e}`);
	return [t[0], t[1]];
}
function Tc(e) {
	let t = e.trim().toLocaleLowerCase();
	return vc(t) ? t : _c[t] ?? Dc[t];
}
function Ec(e) {
	let t = Tc(e);
	if (!t) throw Error(`Unknown wound formula characteristic: ${e}`);
	return t;
}
var Dc = {
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
function Oc(e, t, n) {
	let [r, ...i] = [e, t].flatMap((e) => e ? e.match(/\d+|[A-Za-z]+/g) ?? [] : []), a = r ? [r.toLocaleLowerCase(), ...i.map((e) => e.charAt(0).toLocaleUpperCase() + e.slice(1))].join("") : "attribute";
	return n === "bonus" ? `${a}Bonus` : a;
}
function kc(e, t) {
	let n = new Set(t.map((e) => e.variableName));
	if (!n.has(e)) return e;
	let r = 2, i = `${e}${r}`;
	for (; n.has(i);) r += 1, i = `${e}${r}`;
	return i;
}
//#endregion
//#region src/functions/species-builder/wound-formula/script-lines.ts
function Ac(e) {
	let t = [];
	if (Nc(e, [
		"sb",
		"tb",
		"wpb"
	]) && (t.push(...Pc(e, "sb", "preWoundArgs.sb")), t.push(...Pc(e, "tb", "preWoundArgs.tb")), t.push(...Pc(e, "wpb", "preWoundArgs.wpb"))), Nc(e, [
		"sbMultiplier",
		"tbMultiplier",
		"wpbMultiplier"
	]) && (t.push("const multiplier = preWoundArgs.multiplier;"), t.push(...Pc(e, "sbMultiplier", "multiplier.sb")), t.push(...Pc(e, "tbMultiplier", "multiplier.tb")), t.push(...Pc(e, "wpbMultiplier", "multiplier.wpb"))), Nc(e, ["scale", "size"]) && (t.push(...Fc()), t.push("const size = actorSizeStep();"), t.push(...Pc(e, "scale", "2 ** size"))), Nc(e, Bc) && (t.push(...Pc(e, "age", "Number(actor.system.details.age.value)")), t.push(...Pc(e, "height", "Number(actor.system.details.height.value)")), t.push(...Pc(e, "weight", "Number(actor.system.details.weight.value)")), t.push(...Uc(e))), Nc(e, Vc) && (t.push(...Pc(e, "xp", "actor.system.details.experience.total")), t.push(...Pc(e, "fate", "actor.system.status.fate.value")), t.push(...Pc(e, "fortune", "actor.system.status.fortune.value")), t.push(...Pc(e, "resilience", "actor.system.status.resilience.value")), t.push(...Pc(e, "resolve", "actor.system.status.resolve.value")), t.push(...Pc(e, "corruption", "actor.system.status.corruption.value")), t.push(...Pc(e, "sin", "actor.system.status.sin.value")), t.push(...Pc(e, "advantage", "actor.system.status.advantage.value"))), Nc(e, Hc)) {
		t.push(...Wc());
		for (let n of Hc) t.push(...Pc(e, n, `conditionValue("${n}")`));
	}
	return t.length ? [...t, ""] : [];
}
function jc(e) {
	let t = e.length > 0, n = e.some((e) => e.source === "skill");
	return [...Ic(t), ...Lc(n)];
}
function Mc(e) {
	return e.map((e) => e.source === "characteristic" ? Rc(e) : zc(e));
}
function Nc(e, t) {
	return t.some((t) => e.has(t));
}
function Pc(e, t, n) {
	return e.has(t) ? [`const ${t} = ${n};`] : [];
}
function Fc() {
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
function Ic(e) {
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
function Lc(e) {
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
function Rc(e) {
	let t = e.kind === "bonus" ? "characteristicBonus" : "characteristicTotal";
	return `const ${e.variableName} = ${t}(${JSON.stringify(e.characteristicKey)});`;
}
function zc(e) {
	let t = e.kind === "bonus" ? "skillBonus" : "skillTotal", n = e.characteristicOverride ? JSON.stringify(e.characteristicOverride) : "undefined";
	return `const ${e.variableName} = ${t}(${JSON.stringify(e.name)}, ${n});`;
}
var Bc = [
	"age",
	"height",
	"rank",
	"status",
	"weight"
], Vc = [
	"advantage",
	"corruption",
	"fate",
	"fortune",
	"resilience",
	"resolve",
	"sin",
	"xp"
], Hc = [
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
function Uc(e) {
	let t = [];
	return e.has("status") && t.push("function statusTierValue() {", "  const statusTiers = { brass: 1, silver: 2, gold: 3 };", "  const tier = actor.system.details.status.tier;", "  return statusTiers[String(tier).toLocaleLowerCase()] || Number(tier);", "}", "const status = statusTierValue();"), t.push(...Pc(e, "rank", "Number(actor.system.details.status.standing)")), t;
}
function Wc() {
	return [
		"function conditionValue(key) {",
		"  return actor.hasCondition(key)?.conditionValue || 0;",
		"}"
	];
}
//#endregion
//#region src/functions/species-builder/wound-formula/index.ts
function Gc(e) {
	let t = yc(e);
	return [
		...Ac(t.usedKeywords),
		...jc(t.references),
		...Mc(t.references),
		"",
		`args.wounds = ${t.expression};`
	];
}
//#endregion
//#region src/functions/species-builder/wound-formula-traits.ts
var Kc = "generatedSpeciesWoundFormulaEffect", qc = "generatedSpeciesWoundFormulaTrait";
function Jc(e) {
	return e.definitions.flatMap((e) => [...nl(e), ...rl(e)]);
}
function Yc(e) {
	return `__${e.name.trim()}__`;
}
function Xc(e, t) {
	return `__${e.name.trim()} / ${t.name.trim()}__`;
}
function Zc({ flagScope: e, spec: t }) {
	return {
		effects: [Qc({
			flagScope: e,
			spec: t
		})],
		flags: { [e]: { [qc]: {
			speciesKey: t.speciesKey,
			subspeciesKey: t.subspeciesKey ?? ""
		} } },
		img: "icons/svg/aura.svg",
		name: t.name,
		system: { description: { value: tl(t) } },
		type: "trait"
	};
}
function Qc({ flagScope: e, spec: t }) {
	return {
		changes: [],
		disabled: !1,
		flags: { [e]: { [Kc]: {
			speciesKey: t.speciesKey,
			subspeciesKey: t.subspeciesKey ?? ""
		} } },
		img: "icons/svg/aura.svg",
		name: `${t.ownerName} Wound Formula`,
		system: {
			scriptData: [{
				label: `${t.ownerName} Wound Formula Capture`,
				script: $c(),
				trigger: "preWoundCalc"
			}, {
				label: `${t.ownerName} Wound Formula`,
				script: el(t),
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
function $c() {
	return [
		"// Generated by WFRP4e Customizer Apps.",
		"const storageKey = \"__wfrp4eCustomizerWoundFormulaArgs\";",
		"const sourceId = this.item?.id || this.effect.id;",
		"this.actor[storageKey] ||= {};",
		"this.actor[storageKey][sourceId] = args;"
	].join("\n");
}
function el(e) {
	return [
		"// Generated by WFRP4e Customizer Apps.",
		"const storageKey = \"__wfrp4eCustomizerWoundFormulaArgs\";",
		"const sourceId = this.item?.id || this.effect.id;",
		"const preWoundArgs = this.actor[storageKey][sourceId];",
		"const actor = this.actor;",
		"",
		...Gc(e.formula)
	].join("\n");
}
function tl(e) {
	return ["<p>Generated by WFRP4e Customizer Apps. This Trait applies a custom Species Builder wound formula.</p>", `<p>${il(e.formula)}</p>`].join("");
}
function nl(e) {
	return e.woundFormula?.formula ? [{
		formula: e.woundFormula.formula,
		name: Yc(e),
		ownerName: e.name,
		speciesKey: e.key
	}] : [];
}
function rl(e) {
	return (e.subspecies ?? []).flatMap((t) => t.woundFormula?.formula ? [{
		formula: t.woundFormula.formula,
		name: Xc(e, t),
		ownerName: `${e.name} / ${t.name}`,
		speciesKey: e.key,
		subspeciesKey: t.key
	}] : []);
}
function il(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
//#endregion
//#region src/view/components/DocumentDrop/DocumentList.vue?vue&type=script&setup=true&lang.ts
var al = { class: "document-drop__documents" }, ol = [
	"aria-label",
	"disabled",
	"title",
	"onClick"
], sl = ["src"], cl = {
	key: 1,
	"aria-hidden": "true",
	class: "fa-solid fa-scroll"
}, ll = {
	key: 1,
	class: "document-drop__empty-document"
}, ul = /* @__PURE__ */ Ps(/* @__PURE__ */ I({
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
		return (t, n) => (z(), B("div", al, [e.documents.length > 0 ? (z(!0), B(R, { key: 0 }, L(e.documents, (t) => (z(), B("button", {
			key: t.uuid,
			"aria-label": e.isClickable ? `Use ${t.name}` : void 0,
			class: k(["document-drop__document", { "document-drop__document--clickable": e.isClickable }]),
			disabled: !e.isClickable,
			title: e.isClickable ? t.name : void 0,
			type: "button",
			onClick: ds((e) => r(t), ["stop"])
		}, [t.img ? (z(), B("img", {
			key: 0,
			alt: "",
			"aria-hidden": "true",
			src: t.img
		}, null, 8, sl)) : (z(), B("i", cl)), H("span", null, A(t.name), 1)], 10, ol))), 128)) : (z(), B("div", ll, [n[0] ||= H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-arrow-down"
		}, null, -1), H("span", null, A(e.emptyLabel), 1)]))]));
	}
}), [["__scopeId", "data-v-09103f9c"]]);
//#endregion
//#region src/view/components/DocumentDrop/drop-payloads.ts
function dl(e, t) {
	let n = e.trim();
	if (!n) return "";
	if (_l(n)) return n;
	let r = ml(n), i = gl(r, t);
	return i ? vl(r) ? JSON.stringify({
		type: i,
		uuid: r
	}) : JSON.stringify({
		id: r,
		type: i
	}) : "";
}
function fl(e) {
	let t = e.closest("[data-uuid], [data-document-uuid], [data-entry-uuid], [data-document-id], [data-entry-id], [data-pack]");
	if (!t) return "";
	let n = t.dataset.uuid || t.dataset.documentUuid || t.dataset.entryUuid || "";
	if (n) return pl(n);
	let r = t.dataset.documentId || t.dataset.entryId || "", i = hl(t);
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
function pl(e) {
	let t = gl(e, "auto");
	return t ? JSON.stringify({
		type: t,
		uuid: e
	}) : "";
}
function ml(e) {
	return /@UUID\[([^\]]+)]/.exec(e)?.[1]?.trim() ?? e;
}
function hl(e) {
	let t = e.dataset.documentName || e.dataset.type || e.closest("[data-document-name]")?.dataset.documentName || "";
	return t === "Actor" || t === "Item" || t === "JournalEntry" || t === "JournalEntryPage" ? t : e.classList.contains("actor") ? "Actor" : e.classList.contains("item") ? "Item" : e.classList.contains("journal") ? "JournalEntry" : e.closest("#actors") ? "Actor" : e.closest("#items") ? "Item" : e.closest("#journal") ? "JournalEntry" : "";
}
function gl(e, t) {
	return /^actor\./i.test(e) || /\.actors(\.|$)/i.test(e) ? "Actor" : /^item\./i.test(e) || /\.items(\.|$)/i.test(e) ? "Item" : /journalentrypage\./i.test(e) || /\.journalentrypage\./i.test(e) ? "JournalEntryPage" : /^journalentry\./i.test(e) || /\.journals(\.|$)/i.test(e) ? "JournalEntry" : t === "auto" ? "Item" : t;
}
function _l(e) {
	if (!e.startsWith("{")) return !1;
	try {
		return typeof JSON.parse(e).type == "string";
	} catch {
		return !1;
	}
}
function vl(e) {
	return /^(actor|item|journalentry|journalentrypage|compendium)\./i.test(e);
}
//#endregion
//#region src/view/components/DocumentDrop/ManualEntryForm.vue?vue&type=script&setup=true&lang.ts
var yl = ["value"], bl = ["value"], xl = { class: "document-drop__actions" }, Sl = /* @__PURE__ */ Ps(/* @__PURE__ */ I({
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
			(t === "Actor" || t === "auto" || t === "Item" || t === "JournalEntry" || t === "JournalEntryPage") && n("updateDocumentType", t);
		}
		function i(e) {
			n("updateDocumentValue", e.target instanceof HTMLInputElement ? e.target.value : "");
		}
		return (t, a) => (z(), B("form", {
			class: "document-drop__manual",
			onClick: a[2] ||= ds(() => {}, ["stop"]),
			onSubmit: a[3] ||= ds((e) => n("submit"), ["prevent"])
		}, [
			H("label", null, [a[5] ||= H("span", null, "Document type", -1), H("select", {
				value: e.documentType,
				onChange: r
			}, [...a[4] ||= [ba("<option value=\"auto\" data-v-d6911c7b>Auto</option><option value=\"Item\" data-v-d6911c7b>Item</option><option value=\"Actor\" data-v-d6911c7b>Actor</option><option value=\"JournalEntry\" data-v-d6911c7b>Journal Entry</option><option value=\"JournalEntryPage\" data-v-d6911c7b>Journal Page</option>", 5)]], 40, yl)]),
			H("label", null, [a[6] ||= H("span", null, "UUID or drop JSON", -1), H("input", {
				value: e.documentValue,
				placeholder: "Compendium.package.pack.id",
				type: "text",
				onInput: i
			}, null, 40, bl)]),
			H("div", xl, [
				a[7] ||= H("button", { type: "submit" }, "Use", -1),
				H("button", {
					type: "button",
					onClick: a[0] ||= (e) => n("startPick")
				}, A(e.isPickingDocument ? "Waiting..." : "Pick Next Click"), 1),
				H("button", {
					type: "button",
					onClick: a[1] ||= (e) => n("close")
				}, "Cancel")
			])
		], 32));
	}
}), [["__scopeId", "data-v-d6911c7b"]]), Cl = [
	"aria-label",
	"role",
	"tabindex",
	"onKeydown"
], wl = {
	key: 0,
	class: "document-drop__prompt"
}, Tl = { key: 0 }, El = {
	key: 1,
	class: "document-drop__content"
}, Dl = /* @__PURE__ */ I({
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
		let n = e, r = Kr(), i = t, a = /* @__PURE__ */ P(!1), o = /* @__PURE__ */ P(!1), s = /* @__PURE__ */ P(!1), c = /* @__PURE__ */ P("auto"), l = /* @__PURE__ */ P(""), u = K(() => !!r.prompt), d = K(() => !!r.default), f = K(() => n.showPrompt && (u.value || n.title.length > 0)), p = K(() => n.manualEntryTrigger === "zone"), m = K(() => n.showDocuments ? n.documents : []), h = K(() => n.manualEntryTrigger === "button");
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
			let e = dl(l.value, c.value);
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
			let n = fl(t);
			n && (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), i("dropData", n), y());
		}
		function w() {
			p.value && v();
		}
		return Mr(() => {
			S();
		}), (t, n) => (z(), B("div", wa(t.$attrs, {
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
			onDragenter: n[3] ||= ds((e) => a.value = !0, ["prevent"]),
			onDragover: n[4] ||= ds((e) => a.value = !0, ["prevent"]),
			onDragleave: g,
			onDrop: _,
			onKeydown: [ps(ds(w, ["prevent"]), ["enter"]), ps(ds(w, ["prevent"]), ["space"])]
		}), [
			f.value ? (z(), B("div", wl, [zr(t.$slots, "prompt", {}, () => [H("strong", null, A(e.title), 1), e.description ? (z(), B("span", Tl, A(e.description), 1)) : G("", !0)])])) : G("", !0),
			d.value ? (z(), B("div", El, [zr(t.$slots, "default")])) : G("", !0),
			e.showDocuments ? (z(), V(ul, {
				key: 2,
				documents: m.value,
				"empty-label": e.emptyDocumentLabel,
				"is-clickable": e.documentsClickable,
				onDocumentClicked: n[0] ||= (e) => i("documentClicked", e)
			}, null, 8, [
				"documents",
				"empty-label",
				"is-clickable"
			])) : G("", !0),
			h.value ? (z(), B("button", {
				key: 3,
				class: "document-drop__manual-toggle",
				type: "button",
				onClick: ds(v, ["stop"])
			}, A(o.value ? "Manual Entry Open" : "Manual Entry"), 1)) : G("", !0),
			o.value ? (z(), V(Sl, {
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
			])) : G("", !0)
		], 16, Cl));
	}
}), Ol = [
	q.WeaponSkill,
	q.BallisticSkill,
	q.Strength,
	q.Toughness,
	q.Initiative,
	q.Agility,
	q.Dexterity,
	q.Intelligence,
	q.Willpower,
	q.Fellowship
], kl = [
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
], Al = [
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
];
//#endregion
//#region src/functions/species-builder/item-reference-names.ts
function jl(e) {
	return Nl(e.name, e.specification);
}
function Ml(e) {
	let t = e.name.trim();
	if (!e.item) return t;
	if (!t) return jl(e.item);
	if (!Fl(t)) {
		if (e.item.specification) return Nl(t, e.item.specification);
		if (Fl(e.item.name) && Il(t) === Il(e.item.name)) return e.item.name.trim();
	}
	return t;
}
function Nl(e, t) {
	let n = e.trim(), r = t?.trim();
	return !n || !r || Pl(n) ? n : `${n} (${r})`;
}
function Pl(e) {
	return /\(([^()]*)\)\s*$/.exec(e.trim())?.[1]?.trim() ?? "";
}
function Fl(e) {
	return /\([^()]*\)\s*$/.test(e.trim());
}
function Il(e) {
	return e.split("(")[0]?.trim().toLocaleLowerCase() ?? "";
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/support/linked-grant-rows.ts
function Ll(e, t) {
	return t && t.length > 0 ? t.map(Kl) : (e ?? []).map((e) => ({ name: e }));
}
function Rl(e, t) {
	return t && t.length > 0 ? t.map((e) => ({ choices: e.choices.map(Kl) })) : (e ?? []).map((e) => ({ choices: Gl(e).map((e) => ({ name: e })) }));
}
function zl(e) {
	return e.map(Ml).filter((e) => e.length > 0);
}
function Bl(e) {
	return e.flatMap((e) => {
		let t = zl(e.choices);
		return t.length > 0 ? [t.join(", ")] : [];
	});
}
function Vl(e, t, n) {
	return e.map((e, r) => r === t ? { name: n } : Kl(e));
}
function Hl(e, t, n) {
	return e.map((e, r) => r === t ? {
		item: n,
		name: jl(n)
	} : Kl(e));
}
function Ul(e, t, n, r) {
	return e.map((e, i) => i === t ? { choices: Vl(e.choices, n, r) } : ql(e));
}
function Wl(e, t, n, r) {
	return e.map((e, i) => i === t ? { choices: Hl(e.choices, n, r) } : ql(e));
}
function Gl(e) {
	let t = e.split(",").map((e) => e.trim()).filter((e) => e.length > 0);
	return t.length > 0 ? t : [e];
}
function Kl(e) {
	return e.item ? {
		item: { ...e.item },
		name: e.name
	} : { name: e.name };
}
function ql(e) {
	return { choices: e.choices.map(Kl) };
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/components/array-field-help.ts
var Jl = {
	skills: "Skills granted during character creation. Drop Skill items to link their sheets, or add names manually.",
	talents: "Talents granted during character creation. Multiple choices in one grant become WFRP's comma-separated either/or entry.",
	traits: "Traits granted by this species or subspecies. Drop Trait items to link their sheets, or add names manually."
}, Yl = [
	"disabled",
	"title",
	"value"
], Xl = {
	key: 1,
	class: "species-builder__linked-item-unlinked"
}, Zl = {
	key: 2,
	class: "species-builder__linked-item-empty"
}, Ql = /* @__PURE__ */ I({
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
		return (t, i) => (z(), V(Dl, {
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
			default: Bn(() => [!e.value.item?.uuid && e.isEditable ? (z(), B("input", {
				key: 0,
				disabled: e.isDisabled,
				title: e.inputTitle,
				value: e.value.name,
				type: "text",
				onInput: i[0] ||= (e) => n("updateName", r(e))
			}, null, 40, Yl)) : e.value.name ? (z(), B("div", Xl, [H("strong", null, A(e.value.name), 1), i[3] ||= H("span", null, "Stored by name. Drop the matching Item to link its sheet.", -1)])) : (z(), B("div", Zl, [...i[4] ||= [H("i", {
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
}), $l = { class: "species-builder__linked-list-row" }, eu = ["disabled", "title"], tu = { class: "species-builder__sr-only" }, nu = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B("div", $l, [U(Ql, {
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
			class: "species-builder__icon-button species-builder__danger-action",
			type: "button",
			onClick: r[3] ||= (e) => n("remove")
		}, [r[4] ||= H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-trash"
		}, null, -1), H("span", tu, A(e.removeTitle), 1)], 8, eu)]));
	}
}), ru = { class: "species-builder__item-sections" }, iu = { class: "species-builder__section-heading species-builder__section-heading--compact" }, au = { class: "species-builder__inline-actions" }, ou = [
	"disabled",
	"title",
	"onClick"
], su = ["disabled"], cu = ["disabled"], lu = {
	key: 0,
	class: "species-builder__item-list"
}, uu = { class: "species-builder__choice-card-header" }, du = { class: "species-builder__inline-actions" }, fu = ["disabled", "onClick"], pu = ["disabled", "onClick"], mu = { class: "species-builder__choice-list" }, hu = {
	key: 1,
	class: "species-builder__empty-list"
}, gu = /* @__PURE__ */ I({
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
		let n = e, r = t, i = K(() => Al.filter((e) => !n.fields || n.fields.includes(e.field)));
		function a(e) {
			return Ll(n.values[e], o(e));
		}
		function o(e) {
			return e === "skills" ? n.values.linkedSkills : n.values.linkedTraits;
		}
		function s() {
			return Rl(n.values.talents, n.values.linkedTalents);
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
			y(e, Vl(a(e), t, n));
		}
		function m(e, t) {
			y(e, a(e).filter((e, n) => n !== t));
		}
		function h(e, t, n) {
			b(Ul(s(), e, t, n));
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
		return (t, n) => (z(), B("div", ru, [(z(!0), B(R, null, L(i.value, (t) => (z(), B("section", {
			key: t.field,
			class: "species-builder__item-section"
		}, [
			H("div", iu, [H("div", null, [H("h4", null, A(t.label), 1), H("p", null, A(F(Jl)[t.field]), 1)]), H("div", au, [t.field === "talents" ? (z(), B(R, { key: 1 }, [H("button", {
				disabled: e.isDisabled,
				title: "Add one guaranteed Talent",
				type: "button",
				onClick: d
			}, [...n[3] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), W(" Talent ", -1)]], 8, su), H("button", {
				disabled: e.isDisabled,
				title: "Add a Talent choice set. WFRP stores this as one comma-separated Talent entry.",
				type: "button",
				onClick: f
			}, [...n[4] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-list-check"
			}, null, -1), W(" Choice Set ", -1)]], 8, cu)], 64)) : (z(), B("button", {
				key: 0,
				disabled: e.isDisabled,
				title: `Add a ${t.label.slice(0, -1)} row`,
				type: "button",
				onClick: (e) => u(t.field)
			}, [...n[2] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), W(" Add ", -1)]], 8, ou))])]),
			U(Dl, {
				description: `Drop a WFRP ${t.label.slice(0, -1)} item to add it to this list.`,
				title: `Drop ${t.label}`,
				variant: "compact",
				onDropData: (e) => r("dropData", t.field, e)
			}, null, 8, [
				"description",
				"title",
				"onDropData"
			]),
			c(t.field) > 0 ? (z(), B("div", lu, [t.field === "talents" ? (z(!0), B(R, { key: 1 }, L(s(), (t, i) => (z(), B("article", {
				key: `talent-${i}`,
				class: "species-builder__choice-card"
			}, [H("div", uu, [H("strong", null, A(t.choices.length > 1 ? "Talent Choice" : "Guaranteed Talent"), 1), H("div", du, [H("button", {
				disabled: e.isDisabled,
				title: "Add another alternative to this Talent choice",
				type: "button",
				onClick: (e) => g(i)
			}, [...n[5] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), W(" Choice ", -1)]], 8, fu), H("button", {
				disabled: e.isDisabled,
				title: "Remove this Talent grant",
				class: "species-builder__icon-button species-builder__danger-action",
				type: "button",
				onClick: (e) => _(i)
			}, [...n[6] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), H("span", { class: "species-builder__sr-only" }, "Remove Talent grant", -1)]], 8, pu)])]), H("div", mu, [(z(!0), B(R, null, L(t.choices, (a, o) => (z(), V(nu, {
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
			]))), 128))])]))), 128)) : (z(!0), B(R, { key: 0 }, L(a(t.field), (i, a) => (z(), V(nu, {
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
			]))), 128))])) : (z(), B("p", hu, "No " + A(t.label.toLowerCase()) + " yet.", 1))
		]))), 128))]));
	}
}), _u = { class: "species-builder__field-grid species-builder__field-grid--characteristics" }, vu = [
	"disabled",
	"value",
	"onInput"
], yu = /* @__PURE__ */ I({
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
		return (t, i) => (z(), B("div", _u, [(z(!0), B(R, null, L(F(Ol), (t) => (z(), B("label", { key: t }, [H("span", null, A(F(gc)[t]), 1), H("input", {
			disabled: e.isDisabled,
			value: e.characteristics?.[t] ?? "",
			type: "text",
			onInput: (e) => n("update", t, r(e))
		}, null, 40, vu)]))), 128))]));
	}
}), bu = { class: "species-builder__field-grid species-builder__field-grid--four" }, xu = [
	"disabled",
	"value",
	"onInput"
], Su = /* @__PURE__ */ I({
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
		return (t, i) => (z(), B("div", bu, [(z(!0), B(R, null, L(F(kl), (t) => (z(), B("label", { key: t.field }, [H("span", null, A(t.label), 1), H("input", {
			disabled: e.isDisabled,
			value: e.values[t.field] ?? "",
			type: "number",
			onInput: (e) => n("update", t.field, r(e))
		}, null, 40, xu)]))), 128))]));
	}
}), Cu = { class: "species-builder__editor-page" }, wu = { class: "species-builder__section" }, Tu = { class: "species-builder__section" }, Eu = /* @__PURE__ */ I({
	__name: "SpeciesBuilderAttributesTab",
	props: {
		definition: {},
		isDisabled: { type: Boolean }
	},
	emits: ["updateCharacteristic", "updateNumberField"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (z(), B("section", Cu, [H("section", wu, [
			r[2] ||= H("h3", null, "Characteristics", -1),
			r[3] ||= H("p", { class: "species-builder__section-help" }, " Starting characteristic formulas used by WFRP character creation. These are usually dice formulas such as 2d10+20. ", -1),
			U(yu, {
				characteristics: e.definition.characteristics,
				"is-disabled": e.isDisabled,
				onUpdate: r[0] ||= (e, t) => n("updateCharacteristic", e, t)
			}, null, 8, ["characteristics", "is-disabled"])
		]), H("section", Tu, [
			r[4] ||= H("h3", null, "Stats", -1),
			r[5] ||= H("p", { class: "species-builder__section-help" }, " Core character creation values: Movement, Fate, Resilience, and extra points that may be distributed between Fate and Resilience. ", -1),
			U(Su, {
				"is-disabled": e.isDisabled,
				values: e.definition,
				onUpdate: r[1] ||= (e, t) => n("updateNumberField", e, t)
			}, null, 8, ["is-disabled", "values"])
		])]));
	}
}), Du = { class: "species-builder__field-grid species-builder__field-grid--four" }, Ou = ["disabled", "value"], ku = ["disabled", "value"], Au = ["disabled", "value"], ju = ["disabled", "value"], Mu = /* @__PURE__ */ I({
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
		return (t, i) => (z(), B("div", Du, [
			H("label", null, [i[4] ||= H("span", null, "Age", -1), H("input", {
				disabled: e.isDisabled,
				value: e.definition.age ?? "",
				type: "text",
				onInput: i[0] ||= (e) => n("updateStringField", "age", r(e))
			}, null, 40, Ou)]),
			H("label", null, [i[5] ||= H("span", null, "Height Die", -1), H("input", {
				disabled: e.isDisabled,
				value: e.definition.height?.die ?? "",
				type: "text",
				onInput: i[1] ||= (e) => n("updateHeightField", "die", r(e))
			}, null, 40, ku)]),
			H("label", null, [i[6] ||= H("span", null, "Feet", -1), H("input", {
				disabled: e.isDisabled,
				value: e.definition.height?.feet ?? "",
				type: "number",
				onInput: i[2] ||= (e) => n("updateHeightField", "feet", r(e))
			}, null, 40, Au)]),
			H("label", null, [i[7] ||= H("span", null, "Inches", -1), H("input", {
				disabled: e.isDisabled,
				value: e.definition.height?.inches ?? "",
				type: "number",
				onInput: i[3] ||= (e) => n("updateHeightField", "inches", r(e))
			}, null, 40, ju)])
		]));
	}
}), Nu = { class: "species-builder__editor-page" }, Pu = { class: "species-builder__section" }, Fu = { class: "species-builder__field-grid species-builder__field-grid--two" }, Iu = ["disabled", "value"], Lu = [
	"disabled",
	"placeholder",
	"value"
], Ru = { class: "species-builder__check-row" }, zu = ["checked", "disabled"], Bu = { class: "species-builder__section" }, Vu = /* @__PURE__ */ I({
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
		return (t, a) => (z(), B("section", Nu, [H("section", Pu, [
			a[8] ||= H("h3", null, "Identity", -1),
			a[9] ||= H("p", { class: "species-builder__section-help" }, " The species name is what users see. The key is the WFRP config identifier used when generating species data. ", -1),
			H("div", Fu, [H("label", null, [a[5] ||= H("span", null, "Name", -1), H("input", {
				disabled: e.isDisabled,
				value: e.definition.name,
				type: "text",
				onInput: a[0] ||= (e) => n("updateStringField", "name", r(e))
			}, null, 40, Iu)]), H("label", null, [a[6] ||= H("span", null, "Key", -1), H("input", {
				disabled: e.isDisabled,
				placeholder: F(mc)(e.definition),
				value: e.definition.key,
				type: "text",
				onInput: a[1] ||= (e) => n("updateStringField", "key", r(e))
			}, null, 40, Lu)])]),
			H("label", Ru, [H("input", {
				checked: e.definition.includeInExtraSpecies,
				disabled: e.isDisabled,
				type: "checkbox",
				onChange: a[2] ||= (e) => n("updateBooleanField", "includeInExtraSpecies", i(e))
			}, null, 40, zu), a[7] ||= H("span", null, "Show in WFRP extra species options", -1)])
		]), H("section", Bu, [
			a[10] ||= H("h3", null, "Age And Height", -1),
			a[11] ||= H("p", { class: "species-builder__section-help" }, " Formulas used by character creation to roll age and random height. ", -1),
			U(Mu, {
				definition: e.definition,
				"is-disabled": e.isDisabled,
				onUpdateHeightField: a[3] ||= (e, t) => n("updateHeightField", e, t),
				onUpdateStringField: a[4] ||= (e, t) => n("updateStringField", e, t)
			}, null, 8, ["definition", "is-disabled"])
		])]));
	}
});
//#endregion
//#region src/functions/species-builder/replacement-row-records.ts
function Hu(e) {
	if (!e) return;
	let t = e.flatMap((e) => {
		let t = Ml(e.rolled), n = Ml(e.replacement);
		return t && n ? [[t, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function Uu(e) {
	if (!e) return;
	let t = e.flatMap((e) => {
		let t = Ml(e.rolled), n = e.replacements.map(Ml).filter((e) => e.length > 0);
		return t && n.length > 0 ? [[t, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/support/replacement-rows.ts
function Wu() {
	return { name: "" };
}
function Gu() {
	return {
		replacement: Wu(),
		rolled: Wu()
	};
}
function Ku() {
	return {
		replacements: [Wu()],
		rolled: Wu()
	};
}
function qu(e) {
	return e.talentReplacementRows?.length ? td(e.talentReplacementRows) : Yu(e.talentReplacements);
}
function Ju(e) {
	return e.careerReplacementRows?.length ? td(e.careerReplacementRows) : Xu(e.careerReplacements);
}
function Yu(e) {
	return Object.entries(e ?? {}).map(([e, t]) => ({
		replacement: { name: t },
		rolled: { name: e }
	}));
}
function Xu(e) {
	return Object.entries(e ?? {}).map(([e, t]) => ({
		replacements: t.map((e) => ({ name: e })),
		rolled: { name: e }
	}));
}
function Zu(e, t, n, r) {
	return e.map((e, i) => i === t ? {
		...e,
		[n]: ed(r)
	} : e);
}
function Qu(e, t, n) {
	return e.map((e, r) => r === t ? {
		...e,
		rolled: ed(n)
	} : e);
}
function $u(e, t, n, r) {
	return e.map((e, i) => {
		if (i !== t) return e;
		let a = e.replacements.map((e, t) => t === n ? ed(r) : e);
		return {
			...e,
			replacements: a
		};
	});
}
function ed(e) {
	return {
		item: e,
		name: jl(e)
	};
}
function td(e) {
	return JSON.parse(JSON.stringify(e));
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/tabs/tables/components/LinkedItemDropField.vue?vue&type=script&setup=true&lang.ts
var nd = { class: "species-builder__linked-item-field" }, rd = { class: "species-builder__linked-item-label" }, id = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B("div", nd, [H("span", rd, A(e.label), 1), U(Ql, {
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
}), ad = { class: "species-builder__item-section" }, od = { class: "species-builder__section-heading species-builder__section-heading--compact" }, sd = ["disabled"], cd = {
	key: 0,
	class: "species-builder__item-list"
}, ld = { class: "species-builder__choice-card-header" }, ud = { class: "species-builder__inline-actions" }, dd = ["disabled", "onClick"], fd = ["disabled", "onClick"], pd = { class: "species-builder__choice-list" }, md = ["disabled", "onClick"], hd = {
	key: 1,
	class: "species-builder__empty-list"
}, gd = /* @__PURE__ */ I({
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
			return n.rows?.length ? n.rows : Xu(n.values);
		}
		function a() {
			r("updateRows", [...i(), Ku()]);
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
		return (t, n) => (z(), B("section", ad, [H("div", od, [n[3] ||= H("div", null, [H("h4", null, "Career Replacements"), H("p", null, " Offer one or more replacement Careers when a character rolls a specific Career. This matches WFRP's speciesCareerReplacements config. ")], -1), H("button", {
			disabled: e.isDisabled,
			title: "Add a rolled Career and replacement choices",
			type: "button",
			onClick: a
		}, [...n[2] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-plus"
		}, null, -1), W(" Add ", -1)]], 8, sd)]), i().length > 0 ? (z(), B("div", cd, [(z(!0), B(R, null, L(i(), (t, i) => (z(), B("article", {
			key: `career-replacement-${i}`,
			class: "species-builder__choice-card"
		}, [H("div", ld, [U(id, {
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
		]), H("div", ud, [H("button", {
			disabled: e.isDisabled,
			title: "Add another replacement Career choice",
			type: "button",
			onClick: (e) => o(i)
		}, [...n[4] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-plus"
		}, null, -1), W(" Choice ", -1)]], 8, dd), H("button", {
			disabled: e.isDisabled,
			title: "Remove this Career replacement rule",
			class: "species-builder__icon-button species-builder__danger-action",
			type: "button",
			onClick: (e) => c(i)
		}, [...n[5] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-trash"
		}, null, -1), H("span", { class: "species-builder__sr-only" }, "Remove Career replacement", -1)]], 8, fd)])]), H("div", pd, [(z(!0), B(R, null, L(t.replacements, (t, a) => (z(), B("div", {
			key: `${i}-${a}`,
			class: "species-builder__list-row"
		}, [U(id, {
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
		}, null, -1), H("span", { class: "species-builder__sr-only" }, "Remove replacement Career choice", -1)]], 8, md)]))), 128))])]))), 128))])) : (z(), B("p", hd, "No Career replacements."))]));
	}
}), _d = { class: "species-builder__career-table-editor" }, vd = { class: "species-builder__section-heading species-builder__section-heading--compact" }, yd = ["disabled"], bd = [
	"disabled",
	"value",
	"onInput"
], xd = [
	"disabled",
	"value",
	"onInput"
], Sd = ["disabled", "onClick"], Cd = {
	key: 0,
	class: "species-builder__empty-note"
}, wd = /* @__PURE__ */ I({
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
			r("updateRows", [...i(), { name: "" }]);
		}
		function o(e) {
			r("updateRows", i().filter((t, n) => n !== e));
		}
		function s(e, t) {
			r("updateRows", i().map((n, r) => r === e ? {
				...n,
				...t
			} : n));
		}
		function c(e) {
			return e.target instanceof HTMLInputElement ? e.target.value : "";
		}
		return (t, n) => (z(), B("section", _d, [
			H("div", vd, [n[1] ||= H("h4", null, "Career Table", -1), H("button", {
				disabled: e.isDisabled,
				type: "button",
				onClick: a
			}, [...n[0] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), W(" Add Career ", -1)]], 8, yd)]),
			(z(!0), B(R, null, L(i(), (t, i) => (z(), B("div", {
				key: i,
				class: "species-builder__career-table-row"
			}, [
				U(Dl, {
					description: "Drop a WFRP Career item.",
					"manual-entry-trigger": "none",
					title: "Career",
					variant: "compact",
					onDropData: (e) => r("dropCareer", i, e)
				}, {
					default: Bn(() => [H("label", null, [n[2] ||= H("span", null, "Career Group", -1), H("input", {
						disabled: e.isDisabled,
						value: t.name,
						placeholder: "Pit Fighter",
						type: "text",
						onInput: (e) => s(i, { name: c(e) })
					}, null, 40, bd)])]),
					_: 2
				}, 1032, ["onDropData"]),
				U(Dl, {
					description: "Drop a Journal Entry or Journal Page.",
					"manual-entry-trigger": "button",
					title: "Journal Link",
					variant: "compact",
					onDropData: (e) => r("dropJournal", i, e)
				}, {
					default: Bn(() => [H("label", null, [n[3] ||= H("span", null, "Journal Entry/Page UUID", -1), H("input", {
						disabled: e.isDisabled,
						value: t.journalUuid ?? "",
						placeholder: "Compendium.package.journals.entry.JournalEntryPage.page",
						type: "text",
						onInput: (e) => s(i, { journalUuid: c(e) })
					}, null, 40, xd)])]),
					_: 2
				}, 1032, ["onDropData"]),
				H("button", {
					disabled: e.isDisabled,
					type: "button",
					onClick: (e) => o(i)
				}, [...n[4] ||= [H("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), W(" Remove ", -1)]], 8, Sd)
			]))), 128)),
			i().length === 0 ? (z(), B("p", Cd, "No Career rows yet.")) : G("", !0),
			n[5] ||= H("p", { class: "species-builder__section-help" }, " Career rows use the Career group name for character generation. The journal UUID controls where the required WFRP table link points; blank rows use the module fallback journal. ", -1)
		]));
	}
});
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/tabs/tables/components/formatters.ts
function Td(e) {
	return e.flatMap(([e, t]) => e.trim() ? [`${e.trim()}: ${t}`] : []).join("\n");
}
function Ed(e) {
	return e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement ? e.target.value : "";
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/tabs/tables/tabs/random-talents/RandomTalentRows.vue?vue&type=script&setup=true&lang.ts
var Dd = { class: "species-builder__item-section" }, Od = { class: "species-builder__section-heading species-builder__section-heading--compact" }, kd = ["disabled"], Ad = {
	key: 0,
	class: "species-builder__item-list"
}, jd = [
	"disabled",
	"value",
	"onInput"
], Md = ["value"], Nd = [
	"disabled",
	"value",
	"onInput"
], Pd = ["disabled", "onClick"], Fd = {
	key: 1,
	class: "species-builder__empty-list"
}, Id = /* @__PURE__ */ I({
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
			r("update", Td([...i(), [e, 1]]));
		}
		function o(e, t) {
			r("update", Td(i().map(([n, r], i) => i === e ? [t, r] : [n, r])));
		}
		function s(e, t) {
			let n = Number(t);
			r("update", Td(i().map(([t, r], i) => i === e ? [t, Number.isFinite(n) ? n : r] : [t, r])));
		}
		function c(e) {
			return n.sources.some((t) => t.key === e) ? n.sources : [...n.sources, {
				key: e,
				label: `Saved source missing from this world (${e})`
			}];
		}
		function l(e) {
			r("update", Td(i().filter((t, n) => n !== e)));
		}
		return (t, n) => (z(), B("section", Dd, [H("div", Od, [n[1] ||= H("div", null, [H("h4", null, "Random Talents"), H("p", null, " Choose an available random Talent source and how many Talents are drawn from it. The default source is the standard character creation Talent table. ")], -1), H("button", {
			disabled: e.isDisabled,
			title: "Add a random Talent source and draw count",
			type: "button",
			onClick: a
		}, [...n[0] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-plus"
		}, null, -1), W(" Add ", -1)]], 8, kd)]), i().length > 0 ? (z(), B("div", Ad, [(z(!0), B(R, null, L(i(), ([t, r], i) => (z(), B("div", {
			key: `random-${i}`,
			class: "species-builder__map-row species-builder__map-row--number"
		}, [
			H("label", null, [n[2] ||= H("span", null, "Talent source", -1), H("select", {
				disabled: e.isDisabled,
				title: "Random Talent table source available in this world.",
				value: t,
				onInput: (e) => o(i, F(Ed)(e))
			}, [(z(!0), B(R, null, L(c(t), (e) => (z(), B("option", {
				key: e.key,
				value: e.key
			}, A(e.label), 9, Md))), 128))], 40, jd)]),
			H("label", null, [n[3] ||= H("span", null, "Draws", -1), H("input", {
				disabled: e.isDisabled,
				min: "0",
				title: "How many random Talents this species draws from that table.",
				value: r,
				type: "number",
				onInput: (e) => s(i, F(Ed)(e))
			}, null, 40, Nd)]),
			H("button", {
				disabled: e.isDisabled,
				title: "Remove this random Talent source",
				class: "species-builder__icon-button species-builder__danger-action",
				type: "button",
				onClick: (e) => l(i)
			}, [...n[4] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), H("span", { class: "species-builder__sr-only" }, "Remove random Talent source", -1)]], 8, Pd)
		]))), 128))])) : (z(), B("p", Fd, "No random Talent draws."))]));
	}
}), Ld = { class: "species-builder__item-section" }, Rd = { class: "species-builder__section-heading species-builder__section-heading--compact" }, zd = ["disabled"], Bd = {
	key: 0,
	class: "species-builder__item-list"
}, Vd = ["disabled", "onClick"], Hd = {
	key: 1,
	class: "species-builder__empty-list"
}, Ud = /* @__PURE__ */ I({
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
			return n.rows?.length ? n.rows : Yu(n.values);
		}
		function a() {
			r("updateRows", [...i(), Gu()]);
		}
		function o(e) {
			r("updateRows", i().filter((t, n) => n !== e));
		}
		return (t, n) => (z(), B("section", Ld, [H("div", Rd, [n[3] ||= H("div", null, [H("h4", null, "Talent Replacements"), H("p", null, " Let the character replace a rolled Talent with a specific alternative, for example replacing Artistic with Beneath Notice. ")], -1), H("button", {
			disabled: e.isDisabled,
			title: "Add a rolled Talent and replacement Talent",
			type: "button",
			onClick: a
		}, [...n[2] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-plus"
		}, null, -1), W(" Add ", -1)]], 8, zd)]), i().length > 0 ? (z(), B("div", Bd, [(z(!0), B(R, null, L(i(), (t, i) => (z(), B("div", {
			key: `talent-replacement-${i}`,
			class: "species-builder__map-row species-builder__map-row--pair"
		}, [
			U(id, {
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
			U(id, {
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
			}, null, -1), H("span", { class: "species-builder__sr-only" }, "Remove Talent replacement", -1)]], 8, Vd)
		]))), 128))])) : (z(), B("p", Hd, "No Talent replacements."))]));
	}
}), Wd = { class: "species-builder__section" }, Gd = { class: "species-builder__section-help" }, Kd = {
	"aria-label": "Table editor sections",
	class: "species-builder__tertiary-tabs"
}, qd = ["onClick"], Jd = /* @__PURE__ */ I({
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
		let n = e, r = t, i = /* @__PURE__ */ P("careerTable"), a = K(() => {
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
		Jn(() => n.includeCareerReplacements, (e) => {
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
		return (t, n) => (z(), B("section", Wd, [
			n[8] ||= H("h3", null, "Random Tables And Replacements", -1),
			H("p", Gd, A(e.help), 1),
			H("nav", Kd, [(z(!0), B(R, null, L(a.value, (e) => (z(), B("button", {
				key: e.tab,
				class: k({ "is-active": i.value === e.tab }),
				type: "button",
				onClick: (t) => i.value = e.tab
			}, A(e.label), 11, qd))), 128))]),
			i.value === "careerTable" ? (z(), V(wd, {
				key: 0,
				"is-disabled": e.isDisabled,
				rows: e.values.careerTable?.rows,
				onDropCareer: n[0] ||= (e, t) => r("careerTableCareerDrop", e, t),
				onDropJournal: n[1] ||= (e, t) => r("careerTableJournalDrop", e, t),
				onUpdateRows: n[2] ||= (e) => r("updateCareerTableRows", e)
			}, null, 8, ["is-disabled", "rows"])) : i.value === "randomTalents" ? (z(), V(Id, {
				key: 1,
				"is-disabled": e.isDisabled,
				sources: e.randomTalentSources,
				values: e.values.randomTalents,
				onUpdate: n[3] ||= (e) => r("update", "randomTalents", e)
			}, null, 8, [
				"is-disabled",
				"sources",
				"values"
			])) : i.value === "talentReplacement" ? (z(), V(Ud, {
				key: 2,
				"is-disabled": e.isDisabled,
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
			])) : e.includeCareerReplacements ? (z(), V(gd, {
				key: 3,
				"is-disabled": e.isDisabled,
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
}), Yd = { class: "species-builder__editor-page" }, Xd = { class: "species-builder__section" }, Zd = { class: "species-builder__section-help" }, Qd = {
	key: 0,
	class: "species-builder__keyword-panel"
}, $d = {
	class: "species-builder__keyword-list",
	"aria-label": "Wound formula keywords"
}, ef = ["disabled", "value"], tf = {
	key: 1,
	class: "species-builder__section-help"
}, nf = /* @__PURE__ */ I({
	__name: "SpeciesBuilderWoundsTab",
	props: {
		formula: {},
		generatedTraitName: {},
		isDisabled: { type: Boolean }
	},
	emits: ["updateWoundFormula"],
	setup(e, { emit: t }) {
		let n = t, r = /* @__PURE__ */ P(!1), i = /* @__PURE__ */ "@sb.@tb.@wpb.@sbMultiplier.@tbMultiplier.@wpbMultiplier.@scale.@size.@age.@height.@weight.@status.@rank.@xp.@fate.@fortune.@resilience.@resolve.@corruption.@sin.@advantage.@bleeding.@poisoned.@ablaze.@deafened.@stunned.@entangled.@fatigued.@blinded.@broken".split(".");
		function a(e) {
			return e.target instanceof HTMLTextAreaElement ? e.target.value : "";
		}
		return (t, o) => (z(), B("section", Yd, [H("section", Xd, [
			o[20] ||= H("h3", null, "Wound Calculation", -1),
			H("p", Zd, [
				o[2] ||= W(" Use ", -1),
				o[3] ||= H("code", null, "{Skill or Characteristic}", -1),
				o[4] ||= W(" for a total value, ", -1),
				o[5] ||= H("code", null, "[Skill or Characteristic]", -1),
				o[6] ||= W(" for its bonus, and ", -1),
				o[7] ||= H("code", null, "{Skill|Characteristic}", -1),
				o[8] ||= W(" or ", -1),
				o[9] ||= H("code", null, "[Skill|Characteristic]", -1),
				o[10] ||= W(" to base a skill on another characteristic. You can also use ", -1),
				H("button", {
					class: "species-builder__link-button",
					type: "button",
					onClick: o[0] ||= (e) => r.value = !r.value
				}, " @keywords "),
				o[11] ||= W(" such as ", -1),
				o[12] ||= H("code", null, "@tb", -1),
				o[13] ||= W(", ", -1),
				o[14] ||= H("code", null, "@scale", -1),
				o[15] ||= W(", and ", -1),
				o[16] ||= H("code", null, "@xp", -1),
				o[17] ||= W(". ", -1)
			]),
			r.value ? (z(), B("section", Qd, [o[18] ||= H("p", null, [
				W(" Keywords pull values from the current Actor during Wound calculation. Size uses "),
				H("code", null, "@size"),
				W(" as steps from Average and "),
				H("code", null, "@scale"),
				W(" as powers of two. ")
			], -1), H("div", $d, [(z(), B(R, null, L(i, (e) => H("code", { key: e }, A(e), 1)), 64))])])) : G("", !0),
			H("label", null, [o[19] ||= H("span", null, "Formula", -1), H("textarea", {
				disabled: e.isDisabled,
				value: e.formula ?? "",
				placeholder: "@sb * (1 + @sbMultiplier) + @tb * (2 + @tbMultiplier) + @wpb * (1 + @wpbMultiplier)",
				rows: "4",
				onInput: o[1] ||= (e) => n("updateWoundFormula", a(e))
			}, null, 40, ef)]),
			e.generatedTraitName ? (z(), B("p", tf, " Generated Trait item: " + A(e.generatedTraitName), 1)) : G("", !0)
		])]));
	}
}), rf = { class: "species-builder__section" }, af = {
	key: 0,
	class: "species-builder__item-list"
}, of = [
	"disabled",
	"title",
	"onClick"
], sf = { class: "species-builder__sr-only" }, cf = {
	key: 1,
	class: "species-builder__empty-list"
}, lf = {
	key: 2,
	class: "species-builder__removed-talent-list"
}, uf = { class: "species-builder__inline-actions" }, df = [
	"disabled",
	"title",
	"onClick"
], ff = /* @__PURE__ */ I({
	__name: "SubspeciesTalentInheritance",
	props: {
		index: {},
		isDisabled: { type: Boolean },
		parentTalents: {},
		subspecies: {}
	},
	emits: ["talentDrop", "updateArrayField"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = K(() => m(n.parentTalents)), a = K(() => m(n.subspecies.talentsAdded)), o = K(() => m(n.subspecies.talentsRemoved)), s = K(() => i.value.filter((e) => !o.value.includes(e)).map((e) => ({
			name: e,
			source: "inherited"
		}))), c = K(() => a.value.filter((e) => !s.value.some((t) => t.name === e)).map((e) => ({
			name: e,
			source: "added"
		}))), l = K(() => [...s.value, ...c.value]), u = K(() => i.value.filter((e) => o.value.includes(e)));
		function d(e) {
			if (e.source === "added") {
				p("talentsAdded", a.value.filter((t) => t !== e.name));
				return;
			}
			p("talentsRemoved", [...o.value, e.name]);
		}
		function f(e) {
			p("talentsRemoved", o.value.filter((t) => t !== e));
		}
		function p(e, t) {
			r("updateArrayField", n.index, e, m(t).join("\n"));
		}
		function m(e) {
			let t = [];
			for (let n of e ?? []) {
				let e = n.trim();
				e && !t.includes(e) && t.push(e);
			}
			return t;
		}
		return (t, n) => (z(), B("section", rf, [
			n[4] ||= H("h3", null, "Talent Inheritance", -1),
			n[5] ||= H("p", { class: "species-builder__section-help" }, " Parent Talents are shown here as the subspecies Talent list. Removing an inherited Talent records it as removed; dropping a new Talent records it as added. ", -1),
			U(Dl, {
				description: "Drop a WFRP Talent item to add it to this subspecies.",
				title: "Drop Added Talent",
				variant: "compact",
				onDropData: n[0] ||= (t) => !e.isDisabled && r("talentDrop", e.index, t)
			}),
			l.value.length > 0 ? (z(), B("div", af, [(z(!0), B(R, null, L(l.value, (t) => (z(), B("article", {
				key: `${t.source}-${t.name}`,
				class: "species-builder__subspecies-talent-row"
			}, [H("div", null, [H("strong", null, A(t.name), 1), H("span", null, A(t.source === "inherited" ? "Inherited" : "Added"), 1)]), H("button", {
				disabled: e.isDisabled,
				class: "species-builder__icon-button species-builder__danger-action",
				title: `Remove ${t.name}`,
				type: "button",
				onClick: (e) => d(t)
			}, [n[1] ||= H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), H("span", sf, "Remove " + A(t.name), 1)], 8, of)]))), 128))])) : (z(), B("p", cf, "No Talents in the compiled list.")),
			u.value.length > 0 ? (z(), B("div", lf, [n[3] ||= H("h4", null, "Removed Parent Talents", -1), H("div", uf, [(z(!0), B(R, null, L(u.value, (t) => (z(), B("button", {
				key: t,
				disabled: e.isDisabled,
				title: `Restore ${t}`,
				type: "button",
				onClick: (e) => f(t)
			}, [n[2] ||= H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-rotate-left"
			}, null, -1), W(" " + A(t), 1)], 8, df))), 128))])])) : G("", !0)
		]));
	}
}), pf = {
	key: 0,
	class: "species-builder__subspecies-editor-panel"
}, mf = { class: "species-builder__section-heading" }, hf = ["disabled"], gf = { class: "species-builder__field-grid species-builder__field-grid--two" }, _f = ["disabled", "value"], vf = [
	"disabled",
	"placeholder",
	"value"
], yf = { class: "species-builder__section" }, bf = { class: "species-builder__section" }, xf = { class: "species-builder__section" }, Sf = { class: "species-builder__field-grid species-builder__field-grid--two" }, Cf = [
	"disabled",
	"value",
	"onInput"
], wf = /* @__PURE__ */ I({
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
			return e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement ? e.target.value : "";
		}
		function o() {
			i("delete", r.index), i("close");
		}
		function s(e, t) {
			e !== "careerReplacements" && i("updateTextMapField", r.index, e, t);
		}
		function c(e) {
			return e?.join("\n") ?? "";
		}
		return (t, r) => (z(), V(Fs, {
			open: e.isOpen,
			title: e.subspecies?.name || "Subspecies",
			onClose: r[14] ||= (e) => i("close")
		}, {
			default: Bn(() => [e.subspecies ? (z(), B("div", pf, [
				H("div", mf, [r[16] ||= H("h2", null, "Subspecies Details", -1), H("button", {
					disabled: e.isLoading || e.isSaving,
					type: "button",
					onClick: o
				}, [...r[15] ||= [H("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), W(" Delete ", -1)]], 8, hf)]),
				H("div", gf, [H("label", null, [r[17] ||= H("span", null, "Name", -1), H("input", {
					disabled: e.isLoading || e.isSaving,
					value: e.subspecies.name,
					type: "text",
					onInput: r[0] ||= (t) => i("updateStringField", e.index, "name", a(t))
				}, null, 40, _f)]), H("label", null, [r[18] ||= H("span", null, "Key", -1), H("input", {
					disabled: e.isLoading || e.isSaving,
					placeholder: F(hc)(e.subspecies),
					value: e.subspecies.key,
					type: "text",
					onInput: r[1] ||= (t) => i("updateStringField", e.index, "key", a(t))
				}, null, 40, vf)])]),
				H("section", yf, [
					r[19] ||= H("h3", null, "Characteristics", -1),
					r[20] ||= H("p", { class: "species-builder__section-help" }, " Subspecies characteristic formulas override the parent species characteristics when this subspecies is selected. ", -1),
					U(yu, {
						characteristics: e.subspecies.characteristics,
						"is-disabled": e.isLoading || e.isSaving,
						onUpdate: r[2] ||= (t, n) => i("updateCharacteristic", e.index, t, n)
					}, null, 8, ["characteristics", "is-disabled"])
				]),
				H("section", bf, [
					r[21] ||= H("h3", null, "Stats", -1),
					r[22] ||= H("p", { class: "species-builder__section-help" }, " Optional subspecies Movement, Fate, Resilience, and extra points. Leave a value blank to use the parent species value. ", -1),
					U(Su, {
						"is-disabled": e.isLoading || e.isSaving,
						values: e.subspecies,
						onUpdate: r[3] ||= (t, n) => i("updateNumberField", e.index, t, n)
					}, null, 8, ["is-disabled", "values"])
				]),
				U(nf, {
					formula: e.subspecies.woundFormula?.formula,
					"generated-trait-name": e.woundFormulaTraitName,
					"is-disabled": e.isLoading || e.isSaving,
					onUpdateWoundFormula: r[4] ||= (t) => i("updateWoundFormula", e.index, t)
				}, null, 8, [
					"formula",
					"generated-trait-name",
					"is-disabled"
				]),
				U(ff, {
					index: e.index,
					"is-disabled": e.isLoading || e.isSaving,
					"parent-talents": e.parentTalents,
					subspecies: e.subspecies,
					onTalentDrop: r[5] ||= (e, t) => i("talentDrop", e, t),
					onUpdateArrayField: r[6] ||= (e, t, n) => i("updateArrayField", e, t, n)
				}, null, 8, [
					"index",
					"is-disabled",
					"parent-talents",
					"subspecies"
				]),
				H("section", xf, [
					r[23] ||= H("h3", null, "Skill And Trait Changes", -1),
					r[24] ||= H("p", { class: "species-builder__section-help" }, " These project-owned lists are applied to the parent species list, then exported as a full WFRP subspecies list because WFRP list fields override parent lists. ", -1),
					H("div", Sf, [(z(), B(R, null, L(n, (t) => H("label", { key: t.field }, [H("span", null, A(t.label), 1), H("textarea", {
						disabled: e.isLoading || e.isSaving,
						value: c(e.subspecies[t.field]),
						rows: "4",
						onInput: (n) => i("updateArrayField", e.index, t.field, a(n))
					}, null, 40, Cf)])), 64))])
				]),
				U(Jd, {
					help: "Configure subspecies-specific random Talent draws and Talent replacement offers as rows.",
					"is-disabled": e.isLoading || e.isSaving,
					"random-talent-sources": e.randomTalentSources,
					values: e.subspecies,
					onCareerTableCareerDrop: r[7] ||= (t, n) => i("careerTableCareerDrop", e.index, t, n),
					onCareerTableJournalDrop: r[8] ||= (t, n) => i("careerTableJournalDrop", e.index, t, n),
					onOpenItem: r[9] ||= (e) => i("openItem", e),
					onTalentReplacementReplacementDrop: r[10] ||= (t, n) => i("talentReplacementReplacementDrop", e.index, t, n),
					onTalentReplacementRolledDrop: r[11] ||= (t, n) => i("talentReplacementRolledDrop", e.index, t, n),
					onUpdate: s,
					onUpdateCareerTableRows: r[12] ||= (t) => i("updateCareerTableRows", e.index, t),
					onUpdateTalentReplacementRows: r[13] ||= (t) => i("updateTalentReplacementRows", e.index, t)
				}, null, 8, [
					"is-disabled",
					"random-talent-sources",
					"values"
				])
			])) : G("", !0)]),
			_: 1
		}, 8, ["open", "title"]));
	}
}), Tf = /* @__PURE__ */ I({
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
		return (t, i) => (z(), V(wf, {
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
function Ef(e, t) {
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
//#region src/view/apps/species-builder/tabs/species/components/SpeciesBuilderEntityCard.vue?vue&type=script&setup=true&lang.ts
var Df = ["aria-label", "disabled"], Of = { class: "species-builder__entity-card-icon" }, kf = {
	class: "species-builder__entity-card-status",
	"aria-hidden": "true"
}, Af = { class: "species-builder__entity-card-title" }, jf = { class: "species-builder__entity-card-key" }, Mf = {
	key: 0,
	class: "species-builder__entity-card-meta"
}, Nf = /* @__PURE__ */ I({
	__name: "SpeciesBuilderEntityCard",
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
		return (t, r) => (z(), B("button", {
			"aria-label": `Open ${e.title} editor`,
			class: k(["species-builder__entity-card", {
				"species-builder__entity-card--species": e.isSpecies,
				"is-selected": e.isSelected
			}]),
			disabled: e.isDisabled,
			type: "button",
			onClick: r[0] ||= (e) => n("open")
		}, [
			H("span", Of, [H("i", {
				"aria-hidden": "true",
				class: k(e.iconClass)
			}, null, 2)]),
			H("span", kf, [H("i", { class: k(e.editIconClass) }, null, 2)]),
			H("span", Af, A(e.title), 1),
			H("span", jf, A(e.entryKey), 1),
			e.meta ? (z(), B("span", Mf, A(e.meta), 1)) : G("", !0)
		], 10, Df));
	}
}), Pf = { class: "species-builder__section species-builder__section--subspecies" }, Ff = { class: "species-builder__section-heading" }, If = ["disabled"], Lf = {
	key: 0,
	class: "species-builder__empty-list"
}, Rf = {
	key: 1,
	class: "species-builder__entity-grid species-builder__entity-grid--compact"
}, zf = /* @__PURE__ */ I({
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
			return e.key.trim() || hc(e);
		}
		return (t, n) => (z(), B("section", Pf, [H("div", Ff, [n[2] ||= H("h3", null, "Subspecies", -1), H("button", {
			disabled: e.isLoading || e.isSaving,
			type: "button",
			onClick: n[0] ||= (e) => r("addSubspecies")
		}, [...n[1] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-plus"
		}, null, -1), W(" Add ", -1)]], 8, If)]), i.value.length === 0 ? (z(), B("div", Lf, "No subspecies yet.")) : (z(), B("div", Rf, [(z(!0), B(R, null, L(i.value, (t, n) => (z(), V(Nf, {
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
		]))), 128))]))]));
	}
}), Bf = { class: "species-builder__section-heading" }, Vf = { class: "species-builder__detail-actions" }, Hf = ["disabled"], Uf = ["disabled"], Wf = {
	"aria-label": "Species editor sections",
	class: "species-builder__editor-tabs"
}, Gf = ["onClick"], Kf = {
	key: 3,
	class: "species-builder__editor-page"
}, qf = {
	key: 4,
	class: "species-builder__editor-page"
}, Jf = {
	key: 5,
	class: "species-builder__editor-page"
}, Yf = /* @__PURE__ */ I({
	__name: "SpeciesBuilderDetailPanel",
	props: {
		definition: {},
		initialEditorTab: {},
		isLoading: { type: Boolean },
		isSaving: { type: Boolean },
		randomTalentSources: {}
	},
	emits: /* @__PURE__ */ "addSubspecies.arrayFieldDrop.careerTableCareerDrop.careerTableJournalDrop.careerReplacementChoiceDrop.careerReplacementRolledDrop.delete.deleteSubspecies.duplicate.linkedItemDrop.openItem.subspeciesTalentDrop.subspeciesTalentReplacementReplacementDrop.subspeciesTalentReplacementRolledDrop.talentReplacementReplacementDrop.talentReplacementRolledDrop.talentChoiceDrop.updateArrayField.updateBooleanField.updateCareerReplacementRows.updateCareerTableRows.updateCharacteristic.updateHeightField.updateLinkedItems.updateLinkedTalents.updateNumberField.updateStringField.updateWoundFormula.updateSubspeciesArrayField.updateSubspeciesCharacteristic.updateSubspeciesNumberField.updateSubspeciesStringField.updateSubspeciesCareerTableRows.subspeciesCareerTableCareerDrop.subspeciesCareerTableJournalDrop.updateSubspeciesWoundFormula.updateSubspeciesTalentReplacementRows.updateSubspeciesTextMapField.updateTalentReplacementRows.updateTextMapField".split("."),
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ P(-1), a = /* @__PURE__ */ P(n.initialEditorTab ?? "details"), o = /* @__PURE__ */ P(null), s = K(() => n.definition.subspecies?.[i.value]), c = K(() => Bl(Rl(n.definition.talents, n.definition.linkedTalents))), l = K(() => Yc(n.definition)), u = K(() => {
			let e = s.value;
			return e ? Xc(n.definition, e) : "";
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
		Jn(() => n.definition.key, () => {
			i.value = -1, a.value = n.initialEditorTab ?? "details";
		}), Jn(() => n.initialEditorTab, (e) => {
			e && (a.value = e);
		}), Jn(() => n.definition.subspecies?.length ?? 0, (e) => {
			i.value >= e && (i.value = -1);
		});
		async function p() {
			let e = n.definition.subspecies?.length ?? 0;
			r("addSubspecies"), await On(), await m(e);
		}
		async function m(e) {
			i.value = e, await On(), _();
		}
		function h(e) {
			r("deleteSubspecies", e), i.value = -1;
		}
		let g = Ef(r, {
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
			class: "species-builder__detail-panel"
		}, [
			U(Tf, wa({
				index: i.value,
				"is-loading": e.isLoading,
				"is-open": i.value >= 0,
				"is-saving": e.isSaving,
				"parent-talents": c.value,
				"random-talent-sources": e.randomTalentSources,
				subspecies: s.value,
				"wound-formula-trait-name": u.value
			}, Vr(F(g))), null, 16, [
				"index",
				"is-loading",
				"is-open",
				"is-saving",
				"parent-talents",
				"random-talent-sources",
				"subspecies",
				"wound-formula-trait-name"
			]),
			H("div", Bf, [n[27] ||= H("h2", null, "Species Editor", -1), H("div", Vf, [H("button", {
				disabled: e.isLoading || e.isSaving,
				type: "button",
				onClick: n[0] ||= (e) => r("duplicate")
			}, [...n[25] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-copy"
			}, null, -1), W(" Duplicate ", -1)]], 8, Hf), H("button", {
				disabled: e.isLoading || e.isSaving,
				type: "button",
				onClick: n[1] ||= (e) => r("delete")
			}, [...n[26] ||= [H("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), W(" Delete ", -1)]], 8, Uf)])]),
			H("nav", Wf, [(z(), B(R, null, L(f, (e) => H("button", {
				key: e.tab,
				class: k({ "is-active": a.value === e.tab }),
				type: "button",
				onClick: (t) => a.value = e.tab
			}, A(e.label), 11, Gf)), 64))]),
			a.value === "details" ? (z(), V(Vu, {
				key: 0,
				definition: e.definition,
				"is-disabled": e.isLoading || e.isSaving,
				onUpdateBooleanField: n[2] ||= (e, t) => r("updateBooleanField", e, t),
				onUpdateHeightField: n[3] ||= (e, t) => r("updateHeightField", e, t),
				onUpdateStringField: n[4] ||= (e, t) => r("updateStringField", e, t)
			}, null, 8, ["definition", "is-disabled"])) : a.value === "attributes" ? (z(), V(Eu, {
				key: 1,
				definition: e.definition,
				"is-disabled": e.isLoading || e.isSaving,
				onUpdateCharacteristic: n[5] ||= (e, t) => r("updateCharacteristic", e, t),
				onUpdateNumberField: n[6] ||= (e, t) => r("updateNumberField", e, t)
			}, null, 8, ["definition", "is-disabled"])) : a.value === "wounds" ? (z(), V(nf, {
				key: 2,
				formula: e.definition.woundFormula?.formula,
				"generated-trait-name": l.value,
				"is-disabled": e.isLoading || e.isSaving,
				onUpdateWoundFormula: n[7] ||= (e) => r("updateWoundFormula", e)
			}, null, 8, [
				"formula",
				"generated-trait-name",
				"is-disabled"
			])) : d.value.length > 0 ? (z(), B("section", Kf, [U(gu, {
				fields: d.value,
				"is-disabled": e.isLoading || e.isSaving,
				values: e.definition,
				onDropData: n[8] ||= (e, t) => r("arrayFieldDrop", e, t),
				onLinkedItemDrop: n[9] ||= (e, t, n) => r("linkedItemDrop", e, t, n),
				onOpenItem: n[10] ||= (e) => r("openItem", e),
				onTalentChoiceDrop: n[11] ||= (e, t, n) => r("talentChoiceDrop", e, t, n),
				onUpdateLinkedItems: n[12] ||= (e, t) => r("updateLinkedItems", e, t),
				onUpdateLinkedTalents: n[13] ||= (e) => r("updateLinkedTalents", e)
			}, null, 8, [
				"fields",
				"is-disabled",
				"values"
			])])) : a.value === "tables" ? (z(), B("section", qf, [U(Jd, {
				help: "Configure random Talent draws, Talent swap offers, and Career replacement choices without writing object-map syntax by hand.",
				"include-career-replacements": "",
				"is-disabled": e.isLoading || e.isSaving,
				"random-talent-sources": e.randomTalentSources,
				values: e.definition,
				onCareerTableCareerDrop: n[14] ||= (e, t) => r("careerTableCareerDrop", e, t),
				onCareerTableJournalDrop: n[15] ||= (e, t) => r("careerTableJournalDrop", e, t),
				onCareerReplacementChoiceDrop: n[16] ||= (e, t, n) => r("careerReplacementChoiceDrop", e, t, n),
				onCareerReplacementRolledDrop: n[17] ||= (e, t) => r("careerReplacementRolledDrop", e, t),
				onOpenItem: n[18] ||= (e) => r("openItem", e),
				onTalentReplacementReplacementDrop: n[19] ||= (e, t) => r("talentReplacementReplacementDrop", e, t),
				onTalentReplacementRolledDrop: n[20] ||= (e, t) => r("talentReplacementRolledDrop", e, t),
				onUpdate: n[21] ||= (e, t) => r("updateTextMapField", e, t),
				onUpdateCareerTableRows: n[22] ||= (e) => r("updateCareerTableRows", e),
				onUpdateCareerReplacementRows: n[23] ||= (e) => r("updateCareerReplacementRows", e),
				onUpdateTalentReplacementRows: n[24] ||= (e) => r("updateTalentReplacementRows", e)
			}, null, 8, [
				"is-disabled",
				"random-talent-sources",
				"values"
			])])) : (z(), B("section", Jf, [U(zf, {
				definition: e.definition,
				"is-loading": e.isLoading,
				"is-saving": e.isSaving,
				onAddSubspecies: p,
				onEditSubspecies: m
			}, null, 8, [
				"definition",
				"is-loading",
				"is-saving"
			])]))
		], 512));
	}
}), Xf = { class: "species-builder__workspace species-builder__workspace--stacked-editor" }, Zf = { class: "species-builder__editor-shell" }, Qf = { key: 0 }, $f = { key: 1 }, ep = {
	key: 1,
	class: "species-builder__detail-panel species-builder__detail-panel--empty"
}, tp = /* @__PURE__ */ I({
	__name: "SpeciesBuilderEditorPage",
	props: {
		definition: {},
		initialEditorTab: {},
		isLoading: { type: Boolean },
		isSaving: { type: Boolean },
		randomTalentSources: {}
	},
	emits: /* @__PURE__ */ "addSubspecies.arrayFieldDrop.careerTableCareerDrop.careerTableJournalDrop.careerReplacementChoiceDrop.careerReplacementRolledDrop.delete.deleteSubspecies.duplicate.linkedItemDrop.openItem.subspeciesTalentDrop.subspeciesTalentReplacementReplacementDrop.subspeciesTalentReplacementRolledDrop.talentReplacementReplacementDrop.talentReplacementRolledDrop.talentChoiceDrop.updateArrayField.updateBooleanField.updateCareerReplacementRows.updateCareerTableRows.updateCharacteristic.updateHeightField.updateLinkedItems.updateLinkedTalents.updateNumberField.updateStringField.updateWoundFormula.updateSubspeciesArrayField.updateSubspeciesCharacteristic.updateSubspeciesNumberField.updateSubspeciesStringField.updateSubspeciesCareerTableRows.subspeciesCareerTableCareerDrop.subspeciesCareerTableJournalDrop.updateSubspeciesWoundFormula.updateSubspeciesTalentReplacementRows.updateSubspeciesTextMapField.updateTalentReplacementRows.updateTextMapField.close".split("."),
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			return e.name.trim() || e.key.trim() || "Untitled Species";
		}
		function i(e) {
			return e.key.trim() || mc(e);
		}
		return (t, a) => (z(), B("section", Xf, [H("div", Zf, [H("button", {
			type: "button",
			onClick: a[0] ||= (e) => n("close")
		}, [...a[41] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-arrow-left"
		}, null, -1), W(" Species List ", -1)]]), H("div", null, [e.definition ? (z(), B("strong", Qf, A(r(e.definition)), 1)) : G("", !0), e.definition ? (z(), B("span", $f, A(i(e.definition)), 1)) : G("", !0)])]), e.definition ? (z(), V(Yf, {
			key: 0,
			definition: e.definition,
			"initial-editor-tab": e.initialEditorTab,
			"is-loading": e.isLoading,
			"is-saving": e.isSaving,
			"random-talent-sources": e.randomTalentSources,
			onAddSubspecies: a[1] ||= (e) => n("addSubspecies"),
			onArrayFieldDrop: a[2] ||= (e, t) => n("arrayFieldDrop", e, t),
			onCareerReplacementChoiceDrop: a[3] ||= (e, t, r) => n("careerReplacementChoiceDrop", e, t, r),
			onCareerReplacementRolledDrop: a[4] ||= (e, t) => n("careerReplacementRolledDrop", e, t),
			onCareerTableCareerDrop: a[5] ||= (e, t) => n("careerTableCareerDrop", e, t),
			onCareerTableJournalDrop: a[6] ||= (e, t) => n("careerTableJournalDrop", e, t),
			onDelete: a[7] ||= (e) => n("delete"),
			onDeleteSubspecies: a[8] ||= (e) => n("deleteSubspecies", e),
			onDuplicate: a[9] ||= (e) => n("duplicate"),
			onLinkedItemDrop: a[10] ||= (e, t, r) => n("linkedItemDrop", e, t, r),
			onOpenItem: a[11] ||= (e) => n("openItem", e),
			onSubspeciesTalentDrop: a[12] ||= (e, t) => n("subspeciesTalentDrop", e, t),
			onSubspeciesCareerTableCareerDrop: a[13] ||= (e, t, r) => n("subspeciesCareerTableCareerDrop", e, t, r),
			onSubspeciesCareerTableJournalDrop: a[14] ||= (e, t, r) => n("subspeciesCareerTableJournalDrop", e, t, r),
			onSubspeciesTalentReplacementReplacementDrop: a[15] ||= (e, t, r) => n("subspeciesTalentReplacementReplacementDrop", e, t, r),
			onSubspeciesTalentReplacementRolledDrop: a[16] ||= (e, t, r) => n("subspeciesTalentReplacementRolledDrop", e, t, r),
			onTalentChoiceDrop: a[17] ||= (e, t, r) => n("talentChoiceDrop", e, t, r),
			onTalentReplacementReplacementDrop: a[18] ||= (e, t) => n("talentReplacementReplacementDrop", e, t),
			onTalentReplacementRolledDrop: a[19] ||= (e, t) => n("talentReplacementRolledDrop", e, t),
			onUpdateArrayField: a[20] ||= (e, t) => n("updateArrayField", e, t),
			onUpdateBooleanField: a[21] ||= (e, t) => n("updateBooleanField", e, t),
			onUpdateCareerReplacementRows: a[22] ||= (e) => n("updateCareerReplacementRows", e),
			onUpdateCareerTableRows: a[23] ||= (e) => n("updateCareerTableRows", e),
			onUpdateCharacteristic: a[24] ||= (e, t) => n("updateCharacteristic", e, t),
			onUpdateHeightField: a[25] ||= (e, t) => n("updateHeightField", e, t),
			onUpdateLinkedItems: a[26] ||= (e, t) => n("updateLinkedItems", e, t),
			onUpdateLinkedTalents: a[27] ||= (e) => n("updateLinkedTalents", e),
			onUpdateNumberField: a[28] ||= (e, t) => n("updateNumberField", e, t),
			onUpdateStringField: a[29] ||= (e, t) => n("updateStringField", e, t),
			onUpdateWoundFormula: a[30] ||= (e) => n("updateWoundFormula", e),
			onUpdateSubspeciesArrayField: a[31] ||= (e, t, r) => n("updateSubspeciesArrayField", e, t, r),
			onUpdateSubspeciesCharacteristic: a[32] ||= (e, t, r) => n("updateSubspeciesCharacteristic", e, t, r),
			onUpdateSubspeciesNumberField: a[33] ||= (e, t, r) => n("updateSubspeciesNumberField", e, t, r),
			onUpdateSubspeciesStringField: a[34] ||= (e, t, r) => n("updateSubspeciesStringField", e, t, r),
			onUpdateSubspeciesCareerTableRows: a[35] ||= (e, t) => n("updateSubspeciesCareerTableRows", e, t),
			onUpdateSubspeciesWoundFormula: a[36] ||= (e, t) => n("updateSubspeciesWoundFormula", e, t),
			onUpdateSubspeciesTalentReplacementRows: a[37] ||= (e, t) => n("updateSubspeciesTalentReplacementRows", e, t),
			onUpdateSubspeciesTextMapField: a[38] ||= (e, t, r) => n("updateSubspeciesTextMapField", e, t, r),
			onUpdateTalentReplacementRows: a[39] ||= (e) => n("updateTalentReplacementRows", e),
			onUpdateTextMapField: a[40] ||= (e, t) => n("updateTextMapField", e, t)
		}, null, 8, [
			"definition",
			"initial-editor-tab",
			"is-loading",
			"is-saving",
			"random-talent-sources"
		])) : (z(), B("section", ep, " No species selected. "))]));
	}
});
//#endregion
//#region src/shared/assign-if-present.ts
function J(e, t, n) {
	n !== void 0 && (e[t] = n);
}
//#endregion
//#region src/functions/species-builder/linked-grant-records.ts
function np(e) {
	if (!e || e.length === 0) return;
	let t = e.map(Ml).filter((e) => e.length > 0);
	return t.length > 0 ? t : void 0;
}
function rp(e) {
	if (!e || e.length === 0) return;
	let t = e.flatMap((e) => {
		let t = e.choices.map(Ml).filter((e) => e.length > 0);
		return t.length > 0 ? [t.join(", ")] : [];
	});
	return t.length > 0 ? t : void 0;
}
//#endregion
//#region src/functions/species-builder/subspecies-list-fields.ts
function ip(e) {
	return np(e.linkedSkills) ?? e.skills;
}
function ap(e, t) {
	return dp(ip(e), t.skillsAdded, t.skillsRemoved);
}
function op(e) {
	return rp(e.linkedTalents) ?? e.talents;
}
function sp(e, t) {
	return dp(op(e), t.talentsAdded, t.talentsRemoved);
}
function cp(e, t) {
	return up(np(e.linkedTraits) ?? e.traits, t);
}
function lp(e, t, n) {
	let r = dp(cp(e), t.traitsAdded, t.traitsRemoved);
	return r ? up(r, n) : n ? up(cp(e), n) : void 0;
}
function up(e, t) {
	if (!t) return e;
	let n = e ? [...e] : [];
	return n.includes(t) || n.push(t), n;
}
function dp(e, t, n) {
	if (!t && !n) return;
	let r = new Set(n ?? []), i = (e ?? []).filter((e) => !r.has(e));
	for (let e of t ?? []) i.includes(e) || i.push(e);
	return i;
}
//#endregion
//#region src/functions/species-builder/species-config.ts
function fp(e) {
	let t = pp();
	for (let n of e.definitions) mp(t, n);
	return t;
}
function pp() {
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
function mp(e, t) {
	e.species[t.key] = t.name, J(e.speciesCharacteristics, t.key, t.characteristics), J(e.speciesSkills, t.key, ip(t)), J(e.speciesTalents, t.key, op(t)), J(e.speciesRandomTalents, t.key, t.randomTalents), J(e.speciesTalentReplacement, t.key, vp(t)), J(e.speciesTraits, t.key, cp(t, t.woundFormula ? Yc(t) : void 0)), J(e.speciesMovement, t.key, t.movement), J(e.speciesFate, t.key, t.fate), J(e.speciesRes, t.key, t.resilience), J(e.speciesExtra, t.key, t.extra), J(e.speciesAge, t.key, t.age), J(e.speciesHeight, t.key, t.height), J(e.speciesCareerReplacements, t.key, yp(t)), t.includeInExtraSpecies && e.extraSpecies.push(t.key);
	for (let n of t.subspecies ?? []) {
		let r = e.subspecies[t.key] ?? {}, i = n.woundFormula ? Xc(t, n) : void 0, a = n.careerTable ? _p(t, n) : void 0;
		r[n.key] = hp(t, n, i, a), e.subspecies[t.key] = r;
	}
}
function hp(e, t, n, r) {
	let i = { name: t.name };
	return J(i, "characteristics", t.characteristics), J(i, "skills", ap(e, t)), J(i, "talents", sp(e, t)), J(i, "speciesTraits", lp(e, t, n)), J(i, "randomTalents", t.randomTalents), J(i, "talentReplacement", vp(t)), J(i, "movement", t.movement), J(i, "fate", t.fate), J(i, "resilience", t.resilience), J(i, "extra", t.extra), J(i, "careerTable", r), i;
}
function gp(e) {
	return e.key;
}
function _p(e, t) {
	return `${e.key}-${t.key}`;
}
function vp(e) {
	return Hu(e.talentReplacementRows) ?? e.talentReplacements;
}
function yp(e) {
	return Uu(e.careerReplacementRows) ?? e.careerReplacements;
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
function bp(e, t) {
	let n = X(e, t);
	return Array.isArray(n) ? n.filter((e) => typeof e == "string") : [];
}
function xp(e, t, n = 0) {
	return Sp(e, t) ?? n;
}
function Sp(e, t) {
	for (let n of t) {
		let t = Number(X(e, n));
		if (Number.isFinite(t)) return t;
	}
	return null;
}
function Cp(e, t, n = !1) {
	for (let n of t) {
		let t = X(e, n);
		if (typeof t == "boolean") return t;
	}
	return n;
}
function wp(e) {
	return Array.isArray(e) ? e.flatMap(wp) : typeof e == "string" ? e.split(/[\n\r,;]/).map((e) => e.trim()).filter(Boolean) : Y(e) ? Object.values(e).flatMap(wp) : [];
}
function Tp(e, t, n) {
	let r = e;
	for (let e of t.slice(0, -1)) {
		let t = r[e];
		Y(t) || (r[e] = {}), r = r[e];
	}
	r[t[t.length - 1] ?? ""] = n;
}
//#endregion
//#region src/functions/species-builder/career-table-normalization.ts
function Ep(e) {
	if (!Y(e)) return;
	let t = Dp(e.rows) ?? Op(e.careers);
	return t ? { rows: t } : void 0;
}
function Dp(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!Y(e)) return [];
		let t = Ap(e.name);
		if (!t) return [];
		let n = { name: t };
		return J(n, "journalUuid", Ap(e.journalUuid)), [n];
	});
	return t.length > 0 ? t : void 0;
}
function Op(e) {
	return kp(e)?.map((e) => ({ name: e }));
}
function kp(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		let t = Ap(e);
		return t ? [t] : [];
	});
	return t.length > 0 ? t : void 0;
}
function Ap(e) {
	if (typeof e == "string") return e.trim() || void 0;
}
//#endregion
//#region src/functions/species-builder/replacement-row-normalization.ts
function jp(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!Y(e)) return [];
		let t = Np(e.rolled, "talent"), n = Np(e.replacement, "talent");
		return !t.name || !n.name ? [] : [{
			replacement: n,
			rolled: t
		}];
	});
	return t.length > 0 ? t : void 0;
}
function Mp(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!Y(e)) return [];
		let t = Np(e.rolled, "career"), n = Array.isArray(e.replacements) ? e.replacements.flatMap((e) => {
			let t = Np(e, "career");
			return t.name ? [t] : [];
		}) : [];
		return !t.name || n.length === 0 ? [] : [{
			replacements: n,
			rolled: t
		}];
	});
	return t.length > 0 ? t : void 0;
}
function Np(e, t) {
	if (typeof e == "string") return { name: Ip(e) ?? "" };
	if (!Y(e)) return { name: "" };
	let n = Pp(e.item, t), r = Ip(e.name) ?? n?.name ?? "";
	return n ? {
		item: n,
		name: r
	} : { name: r };
}
function Pp(e, t) {
	if (!Y(e)) return;
	let n = Ip(e.name), r = Fp(e.type), i = Ip(e.uuid);
	if (!n || r !== t || !i) return;
	let a = {
		name: n,
		type: r,
		uuid: i
	}, o = Ip(e.specification) ?? Ip(e.specifier);
	o && (a.specification = o);
	let s = Ip(e.img);
	return s && (a.img = s), a;
}
function Fp(e) {
	return e === "career" || e === "skill" || e === "talent" || e === "trait" ? e : void 0;
}
function Ip(e) {
	if (typeof e == "string") return e.trim() || void 0;
}
//#endregion
//#region src/functions/species-builder/linked-grant-normalization.ts
function Lp(e, t) {
	if (!Array.isArray(e)) return;
	let n = e.flatMap((e) => {
		let n = Np(e, t);
		return n.name ? [n] : [];
	});
	return n.length > 0 ? n : void 0;
}
function Rp(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!Y(e) || !Array.isArray(e.choices)) return [];
		let t = e.choices.flatMap((e) => {
			let t = Np(e, "talent");
			return t.name ? [t] : [];
		});
		return t.length > 0 ? [{ choices: t }] : [];
	});
	return t.length > 0 ? t : void 0;
}
//#endregion
//#region src/functions/species-builder/species-settings-normalization.ts
var zp = Object.values(q);
function Bp(e) {
	return !Y(e) || !Array.isArray(e.definitions) ? {
		definitions: [],
		showGeneratedConfigTab: !1
	} : {
		definitions: e.definitions.flatMap(Vp),
		showGeneratedConfigTab: e.showGeneratedConfigTab === !0
	};
}
function Vp(e) {
	return Wp(e, (e, t, n) => ({
		includeInExtraSpecies: n.includeInExtraSpecies === !0,
		key: e,
		name: t
	})).map((t) => (Gp(t, e), Kp(t, e), t));
}
function Hp(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap(Up);
	return t.length > 0 ? t : void 0;
}
function Up(e) {
	return Wp(e, (e, t, n) => {
		let r = {
			key: e,
			name: t
		};
		return J(r, "skillsAdded", Xp(n.skillsAdded)), J(r, "skillsRemoved", Xp(n.skillsRemoved)), J(r, "talentsAdded", Xp(n.talentsAdded)), J(r, "talentsRemoved", Xp(n.talentsRemoved)), J(r, "traitsAdded", Xp(n.traitsAdded)), J(r, "traitsRemoved", Xp(n.traitsRemoved)), r;
	});
}
function Wp(e, t) {
	if (!Y(e)) return [];
	let n = qp(e.key), r = Jp(e.name);
	if (!n || !r) return [];
	let i = t(n, r, e);
	return J(i, "characteristics", em(e.characteristics)), J(i, "randomTalents", Qp(e.randomTalents)), J(i, "talentReplacementRows", jp(e.talentReplacementRows)), J(i, "talentReplacements", Zp(e.talentReplacements)), J(i, "movement", Yp(e.movement)), J(i, "fate", Yp(e.fate)), J(i, "resilience", Yp(e.resilience)), J(i, "extra", Yp(e.extra)), J(i, "woundFormula", nm(e.woundFormula)), J(i, "careerTable", Ep(e.careerTable)), [i];
}
function Gp(e, t) {
	Y(t) && (J(e, "skills", Xp(t.skills)), J(e, "linkedSkills", Lp(t.linkedSkills, "skill")), J(e, "talents", Xp(t.talents)), J(e, "linkedTalents", Rp(t.linkedTalents)), J(e, "traits", Xp(t.traits)), J(e, "linkedTraits", Lp(t.linkedTraits, "trait")));
}
function Kp(e, t) {
	Y(t) && (J(e, "age", Jp(t.age)), J(e, "height", tm(t.height)), J(e, "careerReplacements", $p(t.careerReplacements)), J(e, "careerReplacementRows", Mp(t.careerReplacementRows)), J(e, "subspecies", Hp(t.subspecies)));
}
function qp(e) {
	return typeof e == "string" ? pc(e) : "";
}
function Jp(e) {
	if (typeof e == "string") return e.trim() || void 0;
}
function Yp(e) {
	let t = Number(e);
	return Number.isFinite(t) ? t : void 0;
}
function Xp(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		let t = Jp(e);
		return t ? [t] : [];
	});
	return t.length > 0 ? t : void 0;
}
function Zp(e) {
	if (!Y(e)) return;
	let t = Object.entries(e).flatMap(([e, t]) => {
		let n = Jp(e), r = Jp(t);
		return n && r ? [[n, r]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function Qp(e) {
	if (!Y(e)) return;
	let t = Object.entries(e).flatMap(([e, t]) => {
		let n = Jp(e), r = Yp(t);
		return n && r !== void 0 ? [[n, r]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function $p(e) {
	if (!Y(e)) return;
	let t = Object.entries(e).flatMap(([e, t]) => {
		let n = Jp(e), r = Xp(t);
		return n && r ? [[n, r]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function em(e) {
	if (!Y(e)) return;
	let t = zp.flatMap((t) => {
		let n = Jp(e[t]);
		return n ? [[t, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function tm(e) {
	if (!Y(e)) return;
	let t = {};
	return J(t, "die", Jp(e.die)), J(t, "feet", Yp(e.feet)), J(t, "inches", Yp(e.inches)), Object.keys(t).length > 0 ? t : void 0;
}
function nm(e) {
	if (!Y(e)) return;
	let t = Jp(e.formula);
	return t ? { formula: t } : void 0;
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/support/field-formatters.ts
function rm(e) {
	let t = e.split(/\r?\n/).map((e) => e.trim()).filter((e) => e.length > 0);
	return t.length > 0 ? t : void 0;
}
function im(e) {
	let t = fm(e).flatMap(([e, t]) => t ? [[e, t]] : []);
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function am(e) {
	let t = fm(e).flatMap(([e, t]) => {
		let n = dm(t);
		return n === void 0 ? [] : [[e, n]];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function om(e) {
	let t = fm(e).flatMap(([e, t]) => {
		let n = t.split(",").map((e) => e.trim()).filter((e) => e.length > 0);
		return n.length > 0 ? [[e, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function sm(e) {
	let t = e.trim();
	return t.length > 0 ? t : void 0;
}
function cm(e) {
	return e.length > 0 ? e : void 0;
}
function lm(e) {
	let t = sm(e);
	return t ? { formula: t } : void 0;
}
function um(e) {
	let t = e.map((e) => {
		let t = { name: e.name }, n = sm(e.journalUuid ?? "");
		return n && (t.journalUuid = n), t;
	});
	return t.length > 0 ? { rows: t } : void 0;
}
function dm(e) {
	let t = e.trim();
	if (!t) return;
	let n = Number(t);
	return Number.isFinite(n) ? n : void 0;
}
function fm(e) {
	return e.split(/\r?\n/).flatMap((e) => {
		let t = e.indexOf(":");
		if (t < 0) return [];
		let n = e.slice(0, t).trim(), r = e.slice(t + 1).trim();
		return n ? [[n, r]] : [];
	});
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/support/utils.ts
function pm(e, t) {
	return e === "careerReplacements" ? om(t) : e === "randomTalents" ? am(t) : im(t);
}
function mm(e, t) {
	return e === "randomTalents" ? am(t) : im(t);
}
function Q(e, t, n) {
	let r = { ...e };
	return n === void 0 ? delete r[t] : r[t] = n, r;
}
function hm(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.key.trim();
		e && t.set(e, (t.get(e) ?? 0) + 1);
	}
	return [...t.entries()].flatMap(([e, t]) => t > 1 ? [e] : []);
}
function gm(e) {
	let t = /* @__PURE__ */ new Set();
	return e.map((e) => {
		let n = wm(e);
		return n.key = vm(e.key, e.name, "new-species", t), e.subspecies && (n.subspecies = _m(e.subspecies)), n;
	});
}
function _m(e) {
	let t = /* @__PURE__ */ new Set();
	return e.map((e) => ({
		...wm(e),
		key: vm(e.key, e.name, "new-subspecies", t)
	}));
}
function vm(e, t, n, r) {
	let i = pc(e);
	if (i) return r.add(i), i;
	let a = ym(pc(t) || n, r);
	return r.add(a), a;
}
function ym(e, t) {
	if (!t.has(e)) return e;
	let n = 2, r = `${e}-${n}`;
	for (; t.has(r);) n += 1, r = `${e}-${n}`;
	return r;
}
function bm(e) {
	return e.flatMap((e) => {
		let t = hm(e.subspecies ?? []);
		return t.length > 0 ? [{
			keys: t,
			speciesName: e.name
		}] : [];
	});
}
function xm(e) {
	return e.flatMap((e) => (e.subspecies ?? []).flatMap((t, n) => t.key.trim() && t.name.trim() ? [] : [{
		index: n,
		speciesName: e.name
	}]));
}
function Sm(e) {
	return JSON.stringify(e);
}
function Cm(e) {
	return JSON.stringify(e, null, 2);
}
function wm(e) {
	return JSON.parse(JSON.stringify(e));
}
function Tm(e) {
	return e instanceof Error ? e.message : "Unknown Species Builder error.";
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/support/career-table-drop-actions.ts
function Em(e) {
	async function t(t, n) {
		let r = e.selectedDefinition.value;
		if (!r) return;
		let i = await e.resolveDroppedItem("career", n);
		e.definitionActions.updateCareerTableRows(Om(r.careerTable?.rows ?? [], t, Am(i)));
	}
	async function n(t, n) {
		let r = e.selectedDefinition.value;
		if (!r) return;
		let i = await jm(e, n);
		e.definitionActions.updateCareerTableRows(Om(r.careerTable?.rows ?? [], t, { journalUuid: i.uuid }));
	}
	async function r(t, n, r) {
		let i = e.selectedDefinition.value?.subspecies?.[t];
		i && Dm(e, t, n, i, await e.resolveDroppedItem("career", r));
	}
	async function i(t, n, r) {
		let i = e.selectedDefinition.value?.subspecies?.[t];
		if (!i) return;
		let a = await jm(e, r);
		e.subspeciesActions.updateSubspeciesCareerTableRows(t, Om(i.careerTable?.rows ?? [], n, { journalUuid: a.uuid }));
	}
	return {
		setCareerTableCareerDrop: t,
		setCareerTableJournalDrop: n,
		setSubspeciesCareerTableCareerDrop: r,
		setSubspeciesCareerTableJournalDrop: i
	};
}
function Dm(e, t, n, r, i) {
	e.subspeciesActions.updateSubspeciesCareerTableRows(t, Om(r.careerTable?.rows ?? [], n, Am(i)));
}
function Om(e, t, n) {
	return e.map((e, r) => r === t ? km(e, n) : e);
}
function km(e, t) {
	let n = {
		...e,
		...t
	};
	return n.journalUuid || delete n.journalUuid, n;
}
function Am(e) {
	let t = { name: e.name };
	return e.careerJournalUuid && (t.journalUuid = e.careerJournalUuid), t;
}
async function jm(e, t) {
	try {
		return await e.bridge.resolveJournalDrop(t);
	} catch (t) {
		throw e.loadError.value = Tm(t), t;
	}
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/support/definition-actions.ts
function Mm(e) {
	function t() {
		r({
			includeInExtraSpecies: !0,
			key: "",
			name: "New Species"
		});
	}
	function n() {
		let t = e.selectedDefinition.value;
		if (!t) return;
		let n = wm(t);
		n.key = _(`${n.key}-copy`), n.name = `${n.name} Copy`, r(n);
	}
	function r(e) {
		i([e]);
	}
	function i(t) {
		t.length !== 0 && (e.definitions.value = [...e.definitions.value, ...t.map((e) => wm(e))], e.selectedIndex.value = e.definitions.value.length - 1, e.message.value = "");
	}
	function a() {
		e.selectedDefinition.value && (e.definitions.value = e.definitions.value.filter((t, n) => n !== e.selectedIndex.value), e.selectedIndex.value = e.definitions.value.length === 0 ? -1 : Math.min(e.selectedIndex.value, e.definitions.value.length - 1), e.message.value = "");
	}
	function o(t) {
		e.selectedIndex.value = t;
	}
	function s(e, t) {
		g((n) => Q(n, e, cm(t)));
	}
	function c(e, t) {
		g((n) => ({
			...n,
			[e]: t
		}));
	}
	function l(e, t) {
		g((n) => Q(n, e, dm(t)));
	}
	function u(e, t) {
		g((n) => {
			let r = n.height ? { ...n.height } : {}, i = e === "die" ? sm(t) : dm(t);
			return i === void 0 ? delete r[e] : r[e] = i, Q(n, "height", Object.keys(r).length > 0 ? r : void 0);
		});
	}
	function d(e, t) {
		g((n) => {
			let r = n.characteristics ? { ...n.characteristics } : {}, i = sm(t);
			return i ? r[e] = i : delete r[e], Q(n, "characteristics", Object.keys(r).length > 0 ? r : void 0);
		});
	}
	function f(e, t) {
		g((n) => Q(n, e, rm(t)));
	}
	function p(e, t) {
		g((n) => Q(n, e, pm(e, t)));
	}
	function m(e) {
		g((t) => Q(t, "woundFormula", lm(e)));
	}
	function h(e) {
		g((t) => Q(t, "careerTable", um(e)));
	}
	function g(t) {
		let n = e.selectedDefinition.value;
		n && (e.definitions.value = e.definitions.value.map((r, i) => i === e.selectedIndex.value ? t(wm(n)) : r), e.message.value = "");
	}
	function _(t) {
		let n = new Set(e.definitions.value.map((e) => e.key));
		if (!n.has(t)) return t;
		let r = 2, i = `${t}-${r}`;
		for (; n.has(i);) r += 1, i = `${t}-${r}`;
		return i;
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
//#region src/view/apps/species-builder/tabs/species/pages/editor/support/linked-grant-actions.ts
var Nm = {
	skills: "skill",
	talents: "talent",
	traits: "trait"
};
function Pm(e) {
	async function t(t, i) {
		let a = await e.resolveDroppedItem(Nm[t], i), o = jl(a);
		if (t === "talents") {
			let t = e.selectedDefinition.value?.linkedTalents ?? c();
			Bl(t).includes(o) || r([...t, { choices: [{
				item: a,
				name: o
			}] }]);
			return;
		}
		let l = s(t);
		zl(l).includes(o) || n(t, [...l, {
			item: a,
			name: o
		}]);
	}
	function n(t, n) {
		e.definitionActions.updateSelectedDefinition((e) => zm(e, t, n));
	}
	function r(t) {
		e.definitionActions.updateSelectedDefinition((e) => Bm(e, t));
	}
	async function i(t, r, i) {
		let a = await e.resolveDroppedItem(Nm[t], i);
		n(t, Hl(s(t), r, a));
	}
	async function a(t, n, i) {
		let a = await e.resolveDroppedItem("talent", i);
		r(Wl(e.selectedDefinition.value?.linkedTalents ?? c(), t, n, a));
	}
	async function o(t, n) {
		let r = e.selectedDefinition.value, i = r?.subspecies?.[t];
		if (!r || !i) return;
		let a = jl(await e.resolveDroppedItem("talent", n));
		if (Fm(Bl(Rl(r.talents, r.linkedTalents)), a)) {
			e.subspeciesActions.updateSubspecies(t, (e) => Q(Q(e, "talentsAdded", Lm((e.talentsAdded ?? []).filter((e) => e !== a))), "talentsRemoved", Lm((e.talentsRemoved ?? []).filter((e) => e !== a))));
			return;
		}
		(i.talentsAdded ?? []).includes(a) || e.subspeciesActions.updateSubspecies(t, (e) => Q(e, "talentsAdded", [...e.talentsAdded ?? [], a]));
	}
	function s(t) {
		let n = e.selectedDefinition.value;
		return n ? Rm(n, t) : [];
	}
	function c(t = e.selectedDefinition.value) {
		return (t?.talents ?? []).map((e) => ({ choices: e.split(",").map((e) => e.trim()).filter((e) => e.length > 0).map((e) => ({ name: e })) }));
	}
	return {
		appendArrayFieldDrop: t,
		appendSubspeciesTalentDrop: o,
		setLinkedItemDrop: i,
		setTalentChoiceDrop: a,
		updateLinkedItems: n,
		updateLinkedTalents: r
	};
}
function Fm(e, t) {
	return e.includes(t) && !Im(t);
}
function Im(e) {
	return /\([^()]*\)/.test(e);
}
function Lm(e) {
	return e.length > 0 ? e : void 0;
}
function Rm(e, t) {
	let n = t === "skills" ? e.linkedSkills : e.linkedTraits;
	return n && n.length > 0 ? n : (e[t] ?? []).map((e) => ({ name: e }));
}
function zm(e, t, n) {
	let r = t === "skills" ? "linkedSkills" : "linkedTraits", i = zl(n);
	return Q(Q(e, r, n.length > 0 ? n : void 0), t, i.length > 0 ? i : void 0);
}
function Bm(e, t) {
	let n = Bl(t);
	return Q(Q(e, "linkedTalents", t.length > 0 ? t : void 0), "talents", n.length > 0 ? n : void 0);
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/support/replacement-actions.ts
function Vm(e) {
	function t(t) {
		e.definitionActions.updateSelectedDefinition((e) => Q(Q(e, "talentReplacementRows", t.length > 0 ? t : void 0), "talentReplacements", Hu(t)));
	}
	function n(t) {
		e.definitionActions.updateSelectedDefinition((e) => Q(Q(e, "careerReplacementRows", t.length > 0 ? t : void 0), "careerReplacements", Uu(t)));
	}
	function r(t, n) {
		e.subspeciesActions.updateSubspecies(t, (e) => Q(Q(e, "talentReplacementRows", n.length > 0 ? n : void 0), "talentReplacements", Hu(n)));
	}
	async function i(n, r, i) {
		let a = e.selectedDefinition.value;
		if (!a) return;
		let o = await l("talent", i);
		t(Zu(qu(a), n, r, o));
	}
	async function a(t, n, i, a) {
		let o = e.selectedDefinition.value?.subspecies?.[t];
		if (!o) return;
		let s = await l("talent", a);
		r(t, Zu(qu(o), n, i, s));
	}
	async function o(t, r) {
		let i = e.selectedDefinition.value;
		if (!i) return;
		let a = await l("career", r);
		n(Qu(Ju(i), t, a));
	}
	async function s(t, r, i) {
		let a = e.selectedDefinition.value;
		if (!a) return;
		let o = await l("career", i);
		n($u(Ju(a), t, r, o));
	}
	async function c(t) {
		try {
			await e.bridge.openItemSheet(t);
		} catch (t) {
			e.loadError.value = Tm(t);
		}
	}
	async function l(t, n) {
		try {
			return await e.bridge.resolveItemDrop(n, t);
		} catch (t) {
			throw e.loadError.value = Tm(t), t;
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
//#region src/view/apps/species-builder/tabs/species/pages/editor/support/subspecies-actions.ts
function Hm(e) {
	function t() {
		d((e) => {
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
		d((t) => {
			let n = (t.subspecies ?? []).filter((t, n) => n !== e);
			return Q(t, "subspecies", n.length > 0 ? n : void 0);
		});
	}
	function r(e, t, n) {
		u(e, (e) => ({
			...e,
			[t]: cm(n) ?? ""
		}));
	}
	function i(e, t, n) {
		u(e, (e) => Q(e, t, dm(n)));
	}
	function a(e, t, n) {
		u(e, (e) => {
			let r = e.characteristics ? { ...e.characteristics } : {}, i = sm(n);
			return i ? r[t] = i : delete r[t], Q(e, "characteristics", Object.keys(r).length > 0 ? r : void 0);
		});
	}
	function o(e, t, n) {
		u(e, (e) => Q(e, t, rm(n)));
	}
	function s(e, t, n) {
		u(e, (e) => Q(e, t, mm(t, n)));
	}
	function c(e, t) {
		u(e, (e) => Q(e, "woundFormula", lm(t)));
	}
	function l(e, t) {
		u(e, (e) => Q(e, "careerTable", um(t)));
	}
	function u(e, t) {
		d((n) => {
			let r = n.subspecies ?? [], i = r[e];
			return i ? {
				...n,
				subspecies: r.map((n, r) => r === e ? t(wm(i)) : n)
			} : n;
		});
	}
	function d(t) {
		let n = e.definitions.value[e.selectedIndex.value];
		n && (e.definitions.value = e.definitions.value.map((r, i) => i === e.selectedIndex.value ? t(wm(n)) : r), e.message.value = "");
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
//#region src/view/apps/species-builder/tabs/species/pages/editor/support/use-editor.ts
function Um(e, t = {}) {
	let n = /* @__PURE__ */ P([]), r = /* @__PURE__ */ P(!1), i = /* @__PURE__ */ P(0), a = /* @__PURE__ */ P(!0), o = /* @__PURE__ */ P(!1), s = /* @__PURE__ */ P(""), c = /* @__PURE__ */ P(""), l = /* @__PURE__ */ P([]), u = /* @__PURE__ */ P(""), d = K(() => n.value[i.value]), f = K(() => gm(n.value)), p = K(() => Bp({
		definitions: f.value,
		showGeneratedConfigTab: r.value
	})), m = K(() => Cm(fp(p.value))), h = K(() => hm(f.value)), g = K(() => bm(f.value)), _ = K(() => f.value.flatMap((e, t) => e.key.trim() && e.name.trim() ? [] : [t])), v = K(() => xm(f.value)), y = K(() => u.value !== Sm(p.value)), b = K(() => !a.value && !o.value && h.value.length === 0 && _.value.length === 0 && g.value.length === 0 && v.value.length === 0), x = Mm({
		definitions: n,
		message: s,
		selectedDefinition: d,
		selectedIndex: i
	}), S = Hm({
		definitions: n,
		message: s,
		selectedIndex: i
	}), { resolveDroppedItem: C, ...w } = Vm({
		bridge: e,
		definitionActions: x,
		loadError: c,
		selectedDefinition: d,
		subspeciesActions: S
	}), ee = Pm({
		definitionActions: x,
		resolveDroppedItem: C,
		selectedDefinition: d,
		subspeciesActions: S
	}), T = Em({
		bridge: e,
		definitionActions: x,
		loadError: c,
		resolveDroppedItem: C,
		selectedDefinition: d,
		subspeciesActions: S
	});
	async function E() {
		a.value = !0, c.value = "", s.value = "";
		try {
			let [t, a] = await Promise.all([e.loadSettings(), e.loadRandomTalentSources()]);
			n.value = wm(t.definitions), l.value = a, r.value = t.showGeneratedConfigTab, i.value = n.value.length > 0 ? 0 : -1, u.value = Sm(t), s.value = `Loaded ${t.definitions.length} species definition(s).`;
		} catch (e) {
			c.value = Tm(e);
		} finally {
			a.value = !1;
		}
	}
	async function D() {
		if (b.value) {
			o.value = !0, c.value = "", s.value = "";
			try {
				let a = await e.saveSettings(p.value);
				n.value = wm(a.definitions), r.value = a.showGeneratedConfigTab, i.value = n.value.length > 0 ? Math.min(i.value, n.value.length - 1) : -1, u.value = Sm(a), s.value = "Saved. Refresh Foundry before using new species in character generation.", t.onSettingsSaved?.();
			} catch (e) {
				c.value = Tm(e);
			} finally {
				o.value = !1;
			}
		}
	}
	function te(e) {
		r.value = e, s.value = "";
	}
	return {
		...x,
		...T,
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
		loadSettings: E,
		message: s,
		randomTalentSources: l,
		saveSettings: D,
		selectedDefinition: d,
		selectedIndex: i,
		showGeneratedConfigTab: r,
		updateShowGeneratedConfigTab: te
	};
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/overview/SpeciesBuilderOverview.vue?vue&type=script&setup=true&lang.ts
var Wm = { class: "species-builder__overview-panel" }, Gm = { class: "species-builder__section-heading species-builder__section-heading--compact" }, Km = { class: "species-builder__section-heading-actions" }, qm = ["disabled"], Jm = {
	key: 0,
	class: "species-builder__overview-empty"
}, Ym = {
	key: 1,
	class: "species-builder__entity-grid"
}, Xm = /* @__PURE__ */ I({
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
			return e.key.trim() || mc(e);
		}
		return (t, a) => (z(), B("section", Wm, [H("div", Gm, [a[2] ||= H("div", null, [H("h2", null, "Species"), H("p", null, "Open a custom species to manage its editor and subspecies.")], -1), H("div", Km, [H("span", null, A(e.definitions.length), 1), H("button", {
			disabled: e.isDisabled,
			type: "button",
			onClick: a[0] ||= (e) => n("addSpecies")
		}, [...a[1] ||= [H("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-plus"
		}, null, -1), W(" Species ", -1)]], 8, qm)])]), e.definitions.length === 0 ? (z(), B("div", Jm, " No species yet. ")) : (z(), B("div", Ym, [(z(!0), B(R, null, L(e.definitions, (t, a) => (z(), V(Nf, {
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
		]))), 128))]))]));
	}
}), Zm = { class: "species-builder__preview-panel" }, Qm = ["value"], $m = /* @__PURE__ */ I({
	__name: "WfrpConfigPanel",
	props: { generatedConfigText: {} },
	setup(e) {
		return (t, n) => (z(), B("section", Zm, [n[0] ||= H("div", { class: "species-builder__section-heading" }, [H("h2", null, "WFRP Config")], -1), H("textarea", {
			value: e.generatedConfigText,
			readonly: "",
			spellcheck: "false"
		}, null, 8, Qm)]));
	}
}), eh = {
	key: 0,
	class: "species-builder__workspace"
}, th = {
	key: 1,
	class: "species-builder__workspace"
}, nh = {
	key: 2,
	class: "species-builder__workspace"
}, rh = /* @__PURE__ */ I({
	__name: "SpeciesBuilderApp",
	props: {
		bridge: {},
		onSettingsSaved: { type: Function }
	},
	setup(e) {
		let t = e, n = Um(t.bridge, { onSettingsSaved: t.onSettingsSaved }), r = /* @__PURE__ */ P("species"), i = /* @__PURE__ */ P(!1), a = /* @__PURE__ */ P("details"), o = /* @__PURE__ */ P(null), s = /* @__PURE__ */ P(ks[0]?.id ?? ""), c = K(() => n.isLoading.value || n.isSaving.value), l = K(() => {
			let e = n.duplicateSubspeciesKeys.value[0];
			return e ? `Duplicate subspecies key in ${e.speciesName}: ${e.keys.join(", ")}` : "";
		});
		kr(() => {
			n.loadSettings();
		}), Jn(() => n.showGeneratedConfigTab.value, (e) => {
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
			let t = js(e);
			t && (n.addDefinition(t), _("details"));
		}
		function h() {
			n.addDefinitions(As()), _("details");
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
		let x = fc(n, {
			close: () => {
				i.value = !1;
			},
			requestDeleteSelectedDefinition: f,
			requestDeleteSubspecies: y
		});
		return (e, t) => (z(), B("main", {
			class: "species-builder",
			onKeydown: d,
			onKeyup: d
		}, [
			U(Ws, {
				"active-tab": r.value,
				"can-save": F(n).canSave.value,
				"is-busy": c.value,
				"show-generated-config-tab": F(n).showGeneratedConfigTab.value,
				onReload: F(n).loadSettings,
				onSave: F(n).saveSettings,
				onSelectTab: v
			}, null, 8, [
				"active-tab",
				"can-save",
				"is-busy",
				"show-generated-config-tab",
				"onReload",
				"onSave"
			]),
			U($s, {
				"duplicate-keys": F(n).duplicateKeys.value,
				"duplicate-subspecies-message": l.value,
				"has-unsaved-changes": F(n).hasUnsavedChanges.value,
				"invalid-definition-count": F(n).invalidDefinitionIndexes.value.length,
				"invalid-subspecies-count": F(n).invalidSubspeciesEntries.value.length,
				"load-error": F(n).loadError.value,
				message: F(n).message.value
			}, null, 8, [
				"duplicate-keys",
				"duplicate-subspecies-message",
				"has-unsaved-changes",
				"invalid-definition-count",
				"invalid-subspecies-count",
				"load-error",
				"message"
			]),
			U(Rs, {
				message: o.value?.message,
				onClose: t[0] ||= (e) => o.value = null,
				onConfirm: b
			}, null, 8, ["message"]),
			r.value === "settings" ? (z(), B("section", eh, [U(dc, {
				"example-species-options": F(ks),
				"is-disabled": c.value,
				"selected-example-species-id": s.value,
				"show-generated-config-tab": F(n).showGeneratedConfigTab.value,
				onGenerateAllExampleSpecies: h,
				onGenerateExampleSpecies: m,
				onUpdateSelectedExampleSpeciesId: t[1] ||= (e) => s.value = e,
				onUpdateShowGeneratedConfigTab: F(n).updateShowGeneratedConfigTab
			}, null, 8, [
				"example-species-options",
				"is-disabled",
				"selected-example-species-id",
				"show-generated-config-tab",
				"onUpdateShowGeneratedConfigTab"
			])])) : r.value === "wfrp-config" ? (z(), B("section", th, [U($m, { "generated-config-text": F(n).generatedConfigText.value }, null, 8, ["generated-config-text"])])) : i.value ? (z(), V(tp, wa({
				key: 3,
				definition: F(n).selectedDefinition.value,
				"initial-editor-tab": a.value,
				"is-loading": F(n).isLoading.value,
				"is-saving": F(n).isSaving.value,
				"random-talent-sources": F(n).randomTalentSources.value
			}, Vr(F(x))), null, 16, [
				"definition",
				"initial-editor-tab",
				"is-loading",
				"is-saving",
				"random-talent-sources"
			])) : (z(), B("section", nh, [U(Xm, {
				definitions: F(n).definitions.value,
				"is-disabled": c.value,
				"selected-index": F(n).selectedIndex.value,
				onAddSpecies: p,
				onEditSpecies: g
			}, null, 8, [
				"definitions",
				"is-disabled",
				"selected-index"
			])]))
		], 32));
	}
}), $ = "wfrp4e-customizer-apps", ih = "wfrp4e", ah = typeof window < "u", oh, sh = (e) => oh = e, ch = Symbol();
function lh(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var uh;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(uh ||= {});
var dh = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function fh(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function ph(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		vh(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function mh(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function hh(e) {
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
var gh = typeof navigator == "object" ? navigator : { userAgent: "" }, _h = /Macintosh/.test(gh.userAgent) && /AppleWebKit/.test(gh.userAgent) && !/Safari/.test(gh.userAgent), vh = ah ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !_h ? yh : "msSaveOrOpenBlob" in gh ? bh : xh : () => {};
function yh(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? hh(r) : mh(r.href) ? ph(e, t, n) : (r.target = "_blank", hh(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		hh(r);
	}, 0));
}
function bh(e, t = "download", n) {
	if (typeof e == "string") if (mh(e)) ph(e, t, n);
	else {
		let t = document.createElement("a");
		t.href = e, t.target = "_blank", setTimeout(function() {
			hh(t);
		});
	}
	else navigator.msSaveOrOpenBlob(fh(e, n), t);
}
function xh(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return ph(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(dh.HTMLElement)) || "safari" in dh, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || _h) && typeof FileReader < "u") {
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
var { assign: Sh } = Object;
function Ch() {
	let e = ke(!0), t = e.run(() => /* @__PURE__ */ P({})), n = [], r = [], i = Xt({
		install(e) {
			sh(i), i._a = e, e.provide(ch, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var wh = () => {};
function Th(e, t, n, r = wh) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && Ae() && je(i), i;
}
function Eh(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var Dh = (e) => e(), Oh = Symbol(), kh = Symbol();
function Ah(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		lh(i) && lh(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ N(r) && !/* @__PURE__ */ Kt(r) ? e[n] = Ah(i, r) : e[n] = r;
	}
	return e;
}
var jh = Symbol();
function Mh(e) {
	return !lh(e) || !Object.prototype.hasOwnProperty.call(e, jh);
}
var { assign: Nh } = Object;
function Ph(e) {
	return !!(/* @__PURE__ */ N(e) && e.effect);
}
function Fh(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), Nh(/* @__PURE__ */ rn(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Xt(K(() => {
			sh(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = Ih(e, l, t, n, r, !0), c;
}
function Ih(e, t, n = {}, r, i, a) {
	let o, s = Nh({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = r.state.value[e];
	!a && !p && (r.state.value[e] = {});
	let m;
	function h(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: uh.patchFunction,
			storeId: e,
			events: void 0
		}) : (Ah(r.state.value[e], t), n = {
			type: uh.patchObject,
			payload: t,
			storeId: e,
			events: void 0
		});
		let i = m = Symbol();
		On().then(() => {
			m === i && (l = !0);
		}), u = !0, Eh(d, n, r.state.value[e]);
	}
	let g = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			Nh(e, t);
		});
	} : wh;
	function _() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let v = (t, n = "") => {
		if (Oh in t) return t[kh] = n, t;
		let i = function() {
			sh(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			Eh(f, {
				args: n,
				name: i[kh],
				store: y,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : y, n);
			} catch (e) {
				throw Eh(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (Eh(a, e), e)).catch((e) => (Eh(o, e), Promise.reject(e))) : (Eh(a, l), l);
		};
		return i[Oh] = !0, i[kh] = n, i;
	}, y = /* @__PURE__ */ Ht({
		_p: r,
		$id: e,
		$onAction: Th.bind(null, f),
		$patch: h,
		$reset: g,
		$subscribe(t, n = {}) {
			let i = Th(d, t, n.detached, () => a()), a = o.run(() => Jn(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: uh.direct,
					events: void 0
				}, r);
			}, Nh({}, c, n)));
			return i;
		},
		$dispose: _
	});
	r._s.set(e, y);
	let b = (r._a && r._a.runWithContext || Dh)(() => r._e.run(() => (o = ke()).run(() => t({ action: v }))));
	for (let t in b) {
		let n = b[t];
		/* @__PURE__ */ N(n) && !Ph(n) || /* @__PURE__ */ Kt(n) ? a || (p && Mh(n) && (/* @__PURE__ */ N(n) ? n.value = p[t] : Ah(n, p[t])), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = v(n, t), s.actions[t] = n);
	}
	return Nh(y, b), Nh(/* @__PURE__ */ M(y), b), Object.defineProperty(y, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			h((t) => {
				Nh(t, e);
			});
		}
	}), r._p.forEach((e) => {
		Nh(y, o.run(() => e({
			store: y,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), p && a && n.hydrate && n.hydrate(y.$state, p), l = !0, u = !0, y;
}
function Lh(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Gn();
		return n ||= o ? Wn(ch, null) : null, n && sh(n), n = oh, n._s.has(e) || (i ? Ih(e, t, r, n) : Fh(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
function Rh(e) {
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
var zh = Ch(), Bh = class extends foundry.applications.api.ApplicationV2 {
	#e;
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("wfrp4e-customizer-vue-root", "root"), n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("wfrp4e-customizer-vue-app", "vue-app"), t.replaceChildren(e);
		let r = this.getVueProps() ?? {};
		this.#e = _s(this.getVueComponent(), r), this.#e.use(zh), this.#e.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#e?.unmount(), this.#e = void 0;
	}
}, Vh = "generatedSpeciesCareerTable", Hh = "Compendium.wfrp4e-core.journals.JournalEntry.wczCPcuHT4VQDLpL";
function Uh(e) {
	return e.definitions.flatMap((e) => [...Gh(e), ...Kh(e)]);
}
function Wh({ fallbackJournalUuid: e = Hh, flagScope: t, spec: n }) {
	return {
		displayRoll: !0,
		flags: {
			wfrp4e: {
				column: n.column,
				key: "career"
			},
			[t]: { [Vh]: {
				speciesKey: n.speciesKey,
				subspeciesKey: n.subspeciesKey ?? ""
			} }
		},
		formula: `1d${n.rows.length}`,
		img: "systems/wfrp4e/ui/buttons/d10.webp",
		name: n.name,
		replacement: !0,
		results: n.rows.map((t, n) => ({
			description: qh(t, e),
			drawn: !1,
			img: "icons/svg/d20-grey.svg",
			name: t.name,
			range: [n + 1, n + 1],
			type: "text",
			weight: 1
		}))
	};
}
function Gh(e) {
	return e.careerTable?.rows.length ? [{
		column: gp(e),
		name: `Career - ${e.name}`,
		rows: e.careerTable.rows,
		speciesKey: e.key
	}] : [];
}
function Kh(e) {
	return (e.subspecies ?? []).flatMap((t) => t.careerTable?.rows.length ? [{
		column: _p(e, t),
		name: `Career - ${e.name} / ${t.name}`,
		rows: t.careerTable.rows,
		speciesKey: e.key,
		subspeciesKey: t.key
	}] : []);
}
function qh(e, t) {
	return `@UUID[${e.journalUuid?.trim() || t}]{${Jh(e.name)}}`;
}
function Jh(e) {
	return e.replaceAll("{", "").replaceAll("}", "").trim();
}
//#endregion
//#region src/functions/species-builder/default-species-builder-settings.ts
function Yh() {
	return {
		definitions: [],
		showGeneratedConfigTab: !1
	};
}
//#endregion
//#region src/module/settings/foundry-setting-adapter.ts
function Xh(e) {
	return e;
}
function Zh(e) {
	game.settings.register($, e.key, {
		config: e.config ?? !1,
		default: e.defaultValue,
		name: e.name,
		scope: e.scope ?? "world",
		type: Object
	});
}
function Qh(e) {
	return e.normalize(game.settings.get($, e.key));
}
async function $h(e, t) {
	let n = e.normalize(t);
	return await game.settings.set($, e.key, n), n;
}
//#endregion
//#region src/module/apps/species-builder/settings.ts
var eg = Xh({
	defaultValue: Yh(),
	key: "speciesBuilderSettings",
	name: "Species Builder Settings",
	normalize: Bp
});
function tg() {
	Zh(eg);
}
function ng() {
	return Qh(eg);
}
async function rg(e) {
	return await $h(eg, e);
}
//#endregion
//#region src/module/apps/species-builder/career-tables.ts
var ig = "WFRP Customizer Generated Career Tables", ag = "WFRP Customizer Career Table Link Fallback";
async function og(t = ng()) {
	let n = Uh(t), r = await sg(), i = await ug();
	await cg(r);
	for (let e of n) {
		let t = Wh({
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
async function sg() {
	let e = game.folders.contents.find((e) => e.type === "RollTable" && e.name === ig);
	if (e) return e;
	let t = await Folder.create({
		name: ig,
		type: "RollTable"
	});
	if (!t) throw Error("Foundry did not create the generated career table folder.");
	return t;
}
async function cg(e) {
	let t = (game.tables?.contents ?? []).filter((t) => t.folder?.id === e.id || lg(t));
	for (let e of t) await e.delete();
}
function lg(e) {
	return Y(X(e.toObject(), [
		"flags",
		$,
		Vh
	]));
}
async function ug() {
	let e = game.journal?.contents.find((e) => e.name === ag);
	if (e) return e.uuid;
	let t = await JournalEntry.create({
		name: ag,
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
function dg(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Actor";
}
function fg(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Item";
}
function pg(e, t = "Expected a Foundry Actor.") {
	if (!dg(e)) throw Error(t);
	return e;
}
function mg(e, t = "Expected a Foundry Item.") {
	if (!fg(e)) throw Error(t);
	return e;
}
function hg(e, t, n = `Expected a Foundry ${t} Item.`) {
	let r = mg(e, n);
	if (r.type !== t) throw Error(n);
	return r;
}
//#endregion
//#region src/module/foundry/drop-data.ts
function gg(e) {
	try {
		return JSON.parse(e);
	} catch {
		throw Error("Foundry drop data could not be read.");
	}
}
//#endregion
//#region src/module/apps/species-builder/item-drops.ts
async function _g(e, t) {
	let n = gg(e);
	if (n.type !== "Item" || !n.uuid) throw Error(`Drop a Foundry ${t} item here.`);
	let r = mg(await fromUuid(n.uuid), `Drop a Foundry ${t} item here.`);
	if (r.type !== t) throw Error(`Drop a Foundry ${t} item here.`);
	let i = {
		name: t === "career" && xg(r) || r.name,
		type: t,
		uuid: r.uuid
	};
	if (t === "career") {
		let e = Sg(r);
		e && (i.careerJournalUuid = e);
	}
	let a = bg(r);
	return a && (i.specification = a), r.img && (i.img = r.img), i;
}
async function vg(e) {
	let t = gg(e);
	if (t.type !== "JournalEntry" && t.type !== "JournalEntryPage" || !t.uuid) throw Error("Drop a Foundry Journal Entry or Journal Entry Page here.");
	let n = await fromUuid(t.uuid);
	if (!Tg(n)) throw Error("Drop a Foundry Journal Entry or Journal Entry Page here.");
	return {
		name: n.name,
		uuid: n.uuid
	};
}
async function yg(e) {
	mg(await fromUuid(e), "The linked Foundry Item was not found.").sheet?.render(!0);
}
function bg(e) {
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
function xg(e) {
	let t = X(e.system, ["careergroup", "value"]);
	return typeof t == "string" ? t.trim() : "";
}
function Sg(e) {
	let t = X(e.system, ["description", "value"]);
	return typeof t == "string" ? /^@UUID\[([^\]]+)]{[^{}]+}$/.exec(Cg(t))?.[1]?.trim() ?? "" : "";
}
function Cg(e) {
	let t = e.trim();
	t = t.replaceAll(/<(p|div)>(?:\s|&nbsp;|<br\s*\/?>)*<\/\1>/gi, "").trim();
	let n = /^<(p|div)>([\S\s]*)<\/\1>$/i.exec(t);
	return n?.[2] !== void 0 && (t = n[2].trim()), wg(t.replaceAll(/<br\s*\/?>/gi, "").trim());
}
function wg(e) {
	return e.replaceAll("&nbsp;", " ").replaceAll("&amp;", "&").replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", "\"").replaceAll("&#39;", "'").trim();
}
function Tg(e) {
	return typeof e == "object" && !!e && "documentName" in e && (e.documentName === "JournalEntry" || e.documentName === "JournalEntryPage") && "name" in e && typeof e.name == "string" && "uuid" in e && typeof e.uuid == "string";
}
//#endregion
//#region src/module/apps/species-builder/random-talent-sources.ts
var Eg = {
	key: "talents",
	label: "Talents - Character Creation"
};
function Dg() {
	let e = /* @__PURE__ */ new Map();
	e.set(Eg.key, Eg);
	for (let t of game.tables?.contents ?? []) {
		let n = t.getFlag("wfrp4e", "key");
		if (typeof n != "string" || !n.trim()) continue;
		let r = Og(n, t);
		e.set(n, {
			key: n,
			label: r
		});
	}
	return [...e.values()].sort(kg);
}
function Og(e, t) {
	let n = game.wfrp4e?.tables?.findTable?.(e);
	return (Y(n) && typeof n.name == "string" ? n.name : t.name).trim() || e;
}
function kg(e, t) {
	return e.key === Eg.key ? -1 : t.key === Eg.key ? 1 : e.label.localeCompare(t.label);
}
//#endregion
//#region src/module/apps/species-builder/wound-formula-traits.ts
var Ag = "WFRP Customizer Generated Species Traits";
async function jg(t = ng()) {
	let n = Jc(t), r = await Mg();
	await Ng(r);
	for (let e of n) {
		let t = Zc({
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
async function Mg() {
	let e = game.folders.contents.find((e) => e.type === "Item" && e.name === Ag);
	if (e) return e;
	let t = await Folder.create({
		name: Ag,
		type: "Item"
	});
	if (!t) throw Error("Foundry did not create the generated Species Trait folder.");
	return t;
}
async function Ng(e) {
	let t = (game.items?.contents ?? []).filter((t) => t.folder?.id === e.id || Pg(t));
	for (let e of t) await e.delete();
}
function Pg(e) {
	return Y(X(e.toObject(), [
		"flags",
		$,
		qc
	]));
}
//#endregion
//#region src/module/apps/species-builder/foundry-bridge.ts
async function Fg(e) {
	let t = await rg(e);
	return await og(t), await jg(t), t;
}
var Ig = {
	loadSettings: async () => ng(),
	loadRandomTalentSources: async () => Dg(),
	openItemSheet: yg,
	resolveItemDrop: _g,
	resolveJournalDrop: vg,
	saveSettings: Fg
};
//#endregion
//#region src/module/apps/species-builder/reload-confirmation.ts
function Lg() {
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
var Rg = class extends Bh {
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
		return rh;
	}
	getVueProps() {
		return {
			bridge: Ig,
			onSettingsSaved: () => {
				this.#e = !0;
			}
		};
	}
	async _preClose(e) {
		let t = this.#e;
		this.#e = !1, t && await Lg() && window.location.reload(), await super._preClose(e);
	}
}, zg = {
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
function Bg(e) {
	let t = {
		characteristics: 0,
		skills: 0,
		talents: 0,
		total: 0
	};
	for (let n of e) {
		let e = Vg(n);
		n.kind === "characteristic" ? t.characteristics += e : n.kind === "skill" ? t.skills += e : t.talents += e;
	}
	return t.total = t.characteristics + t.skills + t.talents, t;
}
function Vg(e) {
	let t = Hg(e);
	return e.kind === "talent" ? Wg(Math.max(0, Math.floor(e.current)), Math.max(0, Math.floor(e.baseAdvances))) : Ug(t, e.kind === "characteristic" ? zg.characteristic : zg.skill);
}
function Hg(e) {
	return Math.max(0, Math.floor(e.baseAdvances + e.current));
}
function Ug(e, t) {
	let n = Math.max(0, Math.floor(e)), r = 0;
	for (let e = 0; e < n; e += 1) {
		let n = Math.min(Math.floor(e / 5), t.length - 1);
		r += t[n] ?? 0;
	}
	return r;
}
function Wg(e, t = 0) {
	let n = Math.max(0, Math.floor(e)), r = Math.max(0, Math.floor(t)), i = 0;
	for (let e = 0; e < n; e += 1) i += (r + e + 1) * 100;
	return i;
}
//#endregion
//#region src/functions/npc-builder/create-default-trait-config.ts
function Gg() {
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
function Kg(e, t) {
	return `${e}:${Qg(t)}`;
}
function qg(e) {
	let t = e.level ?? 1;
	return Number.isFinite(t) ? Math.max(1, Math.floor(t)) * 5 : 5;
}
function Jg(e) {
	return e.name;
}
function Yg(e, t) {
	return e === "characteristic" ? t.allowBaseActorCharacteristics : e === "skill" ? t.allowBaseActorSkills : t.allowBaseActorTalents;
}
function Xg(e, t) {
	return {
		...Gg(),
		...e,
		...t
	};
}
function Zg(e, t) {
	return Qg(e) === Qg(t);
}
function Qg(e) {
	return e.trim().toLocaleLowerCase();
}
function $g(e) {
	return Number.isFinite(e) ? Math.max(1, Math.floor(e)) : 1;
}
function e_(e) {
	let t = 0;
	for (let n of e) t += n.count;
	return t;
}
function t_(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = Qg(r);
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
//#endregion
//#region src/functions/npc-builder/skill-specialization.ts
function n_(e, t, n) {
	return `${e}:${s_(t)}:${n}`;
}
function r_(e, t) {
	let n = e.trim(), r = t.trim();
	return r ? `${n} (${r})` : n;
}
function i_(e) {
	let t = /^(?<base>.+?)\s*\((?<specialization>[^)]+)\)\s*$/.exec(e.trim());
	if (!t?.groups) return null;
	let n = t.groups.base?.trim() ?? "", r = t.groups.specialization?.trim() ?? "";
	return !n || !r || a_(e) ? null : {
		baseName: n,
		originalName: e,
		specialization: r
	};
}
function a_(e) {
	let t = /^(?<base>.+?)\s*\((?<specialization>[^)]+)\)\s*$/.exec(e.trim());
	if (!t?.groups) return null;
	let n = t.groups.base?.trim() ?? "", r = t.groups.specialization?.trim() ?? "", i = l_(r);
	return !n || !r || !c_(r, i) ? null : {
		baseName: n,
		options: i,
		originalName: e,
		specialization: r
	};
}
function o_(e, t) {
	let n = /* @__PURE__ */ new Map();
	return t.map((t) => {
		let r = s_(t), i = n.get(r) ?? 0;
		return n.set(r, i + 1), {
			occurrence: i,
			originalName: t,
			resolutionKey: n_(e, t, i)
		};
	});
}
function s_(e) {
	return e.trim().replaceAll(/\s+/g, " ").toLocaleLowerCase();
}
function c_(e, t) {
	return e.trim().toLocaleLowerCase() === "any" || t.length > 1;
}
function l_(e) {
	return e.split(/\s+or\s+/i).map((e) => e.trim()).filter(Boolean);
}
//#endregion
//#region src/state/npc-builder-store/advancements/source-counts.ts
function u_(e, t) {
	return t <= 0 ? [] : [{
		count: t,
		kind: "career",
		label: `${e} extra time`
	}];
}
function d_(e, t) {
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
function f_(e, t, n, r) {
	let i = m_(p_(e, r), n);
	return i.value === null ? t : Math.min(t, Math.max(0, i.value - e.baseAdvances));
}
function p_(e, t) {
	let n = t[Qg(e.name)];
	return {
		maximumFormula: e.talentMaximumFormula ?? n?.maximumFormula ?? "",
		maximumKey: e.talentMaximumKey ?? n?.maximumKey ?? ""
	};
}
function m_(e, t) {
	let n = e.maximumKey.trim().toLocaleLowerCase();
	if (!n) return {
		label: "Unknown",
		value: null
	};
	if (n === "none") return {
		label: "-",
		value: null
	};
	if (n === "custom") return h_(e.maximumFormula, t);
	let r = Number(n);
	if (Number.isFinite(r)) {
		let e = Math.max(0, Math.floor(r));
		return {
			label: `${e}`,
			value: e
		};
	}
	if (vc(n)) {
		let e = t[n] ?? 0, r = Math.max(0, Math.floor(e / 10));
		return {
			label: `${gc[n]} Bonus (${r})`,
			value: r
		};
	}
	return {
		label: e.maximumKey || "Unknown",
		value: null
	};
}
function h_(e, t) {
	let n = e.trim(), r = Number(n);
	if (Number.isFinite(r)) {
		let e = Math.max(0, Math.floor(r));
		return {
			label: `${e}`,
			value: e
		};
	}
	let i = /@characteristics\.([a-z]+)\.bonus/i.exec(n)?.[1]?.toLocaleLowerCase();
	if (i && vc(i)) {
		let e = t[i] ?? 0, n = Math.max(0, Math.floor(e / 10));
		return {
			label: `${gc[i]} Bonus (${n})`,
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
function g_(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e.careers) {
		let i = t_(y_(r, t, e.skillGrantResolutions)), a = qg(r) / 5, o = Math.max(0, $g(r.quantity) - 1) * 5;
		for (let e of i) {
			let i = Kg(t, e), s = n.get(i);
			if (s) {
				a > s.highestLevel && (s.highestLevel = a, s.highestLevelSource = Jg(r)), o > 0 && s.extraSources.push({
					count: o,
					kind: "career",
					label: `${r.name} extra time`
				});
				continue;
			}
			n.set(i, {
				extraSources: u_(r.name, o),
				highestLevel: a,
				highestLevelSource: Jg(r),
				name: e
			});
		}
	}
	for (let r of n.values()) v_(e, {
		careerValue: r.highestLevel * 5 + e_(r.extraSources),
		kind: t,
		name: r.name,
		sources: [{
			count: r.highestLevel * 5,
			kind: "career",
			label: r.highestLevelSource
		}, ...r.extraSources]
	});
}
function __(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.careers) {
		let r = t_(y_(n, "talent", e.skillGrantResolutions)), i = Math.max(0, $g(n.quantity) - 1);
		for (let e of r) {
			let r = Kg("talent", e), a = t.get(r);
			if (a) {
				i > 0 && a.extraSources.push({
					count: i,
					kind: "career",
					label: `${n.name} extra time`
				});
				continue;
			}
			t.set(r, {
				extraSources: u_(n.name, i),
				firstSource: n.name,
				name: e
			});
		}
	}
	for (let n of t.values()) v_(e, {
		careerValue: 1 + e_(n.extraSources),
		kind: "talent",
		name: n.name,
		sources: [{
			count: 1,
			kind: "career",
			label: n.firstSource
		}, ...n.extraSources]
	}, e.characteristicTotals);
}
function v_(e, t, n = {}) {
	let r = Kg(t.kind, t.name), i = e.entries.get(r);
	if (i) {
		let r = t.kind === "talent" && i.includedFromBase ? t.sources.slice(1) : t.sources, a = t.kind === "talent" ? f_(i, e_(r), n, e.talentMaximums) : t.careerValue;
		i.careerValue = a, i.includedFromCareer = !0, i.sources = [...i.sources.filter((e) => e.kind === "base"), ...d_(r, a)];
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
	t.kind === "talent" && (a.careerValue = f_(a, t.careerValue, n, e.talentMaximums), a.current = a.careerValue, a.sources = d_(t.sources, a.careerValue)), e.entries.set(r, { ...a });
}
function y_(e, t, n) {
	return t === "characteristic" ? e.grants.characteristics : t === "skill" ? o_(e.uuid, e.grants.skills).map((e) => n[e.resolutionKey] || e.originalName) : e.grants.talents;
}
//#endregion
//#region src/state/npc-builder-store/advancements/entry-context.ts
function b_(e, t) {
	let n = {};
	for (let r of e.values()) {
		if (r.kind !== "characteristic") continue;
		let e = _c[Qg(r.name)];
		if (!e) continue;
		let i = t[Kg(r.kind, r.name)] ?? 0, a = Math.max(r.minimumCurrent, Math.floor(r.careerValue + i));
		n[e] = Math.max(0, r.baseValue + a);
	}
	return n;
}
function x_(e, t, n) {
	return e.kind === "skill" ? S_(e, t, n) : e.kind === "talent" ? C_(e, t, n) : e;
}
function S_(e, t, n) {
	let r = w_(e.name, n.skillCharacteristics) ?? T_(e.name, n.baseActorDraftData);
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
function C_(e, t, n) {
	let r = p_(e, n.talentMaximums), i = m_(r, t);
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
function w_(e, t) {
	return t[Qg(e)] ?? null;
}
function T_(e, t) {
	let n = t.advancements.find((t) => t.kind === "skill" && Zg(t.name, e));
	return n?.characteristicKey ? {
		characteristicKey: n.characteristicKey,
		characteristicName: n.characteristicName ?? gc[n.characteristicKey],
		skillName: e
	} : null;
}
//#endregion
//#region src/state/npc-builder-store/advancements/index.ts
function E_(e) {
	let { baseActorDraftData: t, careers: n, manualAdvancementDeltas: r, settings: i, skillCharacteristics: a, skillGrantResolutions: o, talentMaximums: s } = e, c = K(() => {
		let e = u(), c = {
			careers: n.value,
			entries: e,
			skillGrantResolutions: o.value,
			talentMaximums: s.value
		};
		g_(c, "characteristic"), g_(c, "skill");
		let l = b_(e, r.value);
		return __({
			...c,
			characteristicTotals: l
		}), [...e.values()].filter((e) => e.includedFromCareer || Yg(e.kind, i.value)).map((e) => {
			let n = x_(e, l, {
				baseActorDraftData: t.value,
				manualAdvancementDeltas: r.value,
				skillCharacteristics: a.value,
				talentMaximums: s.value
			}), i = Kg(e.kind, e.name), o = r.value[i] ?? 0, c = n.careerValue + o;
			return {
				...n,
				current: Math.max(n.minimumCurrent, Math.floor(c))
			};
		}).sort((e, t) => e.kind === t.kind ? e.name.localeCompare(t.name) : e.kind.localeCompare(t.kind));
	}), l = K(() => Bg(c.value));
	function u() {
		let e = /* @__PURE__ */ new Map();
		for (let n of t.value.advancements) {
			let t = Kg(n.kind, n.name), r = {
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
			n.characteristicKey && (r.characteristicKey = n.characteristicKey, r.characteristicName = n.characteristicName ?? gc[n.characteristicKey]), n.kind === "talent" && n.baseAdvances > 0 && r.sources.push({
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
			...Object.fromEntries(e.map((e) => [Qg(e.skillName), e]))
		};
	}
	function p(e) {
		s.value = {
			...s.value,
			...Object.fromEntries(e.map((e) => [Qg(e.talentName), e]))
		};
	}
	function m(e, t) {
		let n = Kg(e.kind, e.name), i = Number.isFinite(t) ? t : 0;
		r.value[n] = Math.max(e.minimumCurrent, Math.floor(i)) - e.careerValue;
	}
	function h(e, t) {
		let n = Number.isFinite(t) ? t : 0;
		m(e, Math.max(e.minimumTotal, Math.floor(n)) - e.baseValue);
	}
	function g(e) {
		let t = Kg(e.kind, e.name);
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
function D_(e) {
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
			t.quantity = $g(t.quantity + 1);
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
		n && (n.quantity = $g(t));
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
function O_() {
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
var k_ = O_(), A_ = {
	advancements: [],
	optionalTraits: [],
	traits: [],
	trappings: []
};
function j_(e) {
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
		lowerCareerMode: M_(e.lowerCareerMode) ? e.lowerCareerMode : "prompt",
		outputActorFolderUuid: typeof e.outputActorFolderUuid == "string" ? e.outputActorFolderUuid : "",
		quickTraitFolderUuid: typeof e.quickTraitFolderUuid == "string" ? e.quickTraitFolderUuid : "",
		searchCompendiumPortraitAssets: e.searchCompendiumPortraitAssets ?? !0,
		searchFoundryPortraitAssets: e.searchFoundryPortraitAssets ?? !1,
		searchWebPortraitAssets: e.searchWebPortraitAssets ?? !1
	};
}
function M_(e) {
	return e === "auto-add-all" || e === "never" || e === "prompt";
}
//#endregion
//#region src/state/npc-builder-store/hydration.ts
function N_(e) {
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
		l.value = j_(e);
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
var P_ = /\(([^)]+)\)/, F_ = [
	"beasts",
	"death",
	"fire",
	"heavens",
	"metal",
	"life",
	"light",
	"shadow"
], I_ = [
	"daemonology",
	"necromancy",
	"nurgle",
	"slaanesh",
	"tzeentch",
	"undivided"
];
function L_(e, t) {
	let n = e.trim(), r = n.toLocaleLowerCase();
	return r === "petty magic" ? W_({
		kind: "petty-magic",
		rawLore: "Petty Magic",
		source: t,
		sourceName: n
	}) : r.startsWith("arcane magic") ? W_({
		kind: "arcane-magic",
		rawLore: G_(n),
		source: t,
		sourceName: n
	}) : r.startsWith("spellcaster") ? W_({
		kind: "spellcaster",
		rawLore: G_(n),
		source: t,
		sourceName: n
	}) : null;
}
function R_(e) {
	return e.trim().replace(/^any\s+/i, "").replace(/^arcane\s+lore\s+of\s+/i, "").replace(/^arcane\s+lore$/i, "").replace(/^lore\s+of\s+/i, "").replaceAll(/\s+/g, " ").toLocaleLowerCase();
}
function z_(e) {
	return `${e.source}:${e.kind}:${e.sourceName}:${e.rawLore}`;
}
function B_(e, t) {
	return {
		...e,
		isAmbiguous: !1,
		normalizedLore: R_(t),
		rawLore: t.trim()
	};
}
function V_(e) {
	let t = R_(e);
	return t === "petty" ? "petty" : F_.includes(t) ? "eight-wind" : I_.includes(t) ? "dark" : "other";
}
function H_(e, t) {
	if (e.kind === "petty-magic") return t.filter((e) => e.category === "petty");
	let n = e.rawLore.trim().toLocaleLowerCase();
	return n.includes("dark") ? t.filter((e) => e.category === "dark") : n.includes("eight winds") ? t.filter((e) => e.category === "eight-wind") : t.filter((e) => e.category !== "petty");
}
function U_(e) {
	let t = e.trim().toLocaleLowerCase();
	return !t || t === "any" || t.includes("any ");
}
function W_(e) {
	let t = e.rawLore.trim();
	return {
		isAmbiguous: U_(t),
		kind: e.kind,
		normalizedLore: R_(t),
		rawLore: t,
		resolutionKey: z_({
			kind: e.kind,
			rawLore: t,
			source: e.source,
			sourceName: e.sourceName
		}),
		source: e.source,
		sourceName: e.sourceName
	};
}
function G_(e) {
	return P_.exec(e)?.[1]?.trim() ?? "";
}
//#endregion
//#region src/state/npc-builder-store/spells.ts
function K_(e) {
	let { advancements: t, customSpells: n, detectedSpells: r, magicLoreResolutions: i, settings: a, spellSelectionOverrides: o, traits: s } = e, c = K(() => {
		let e = /* @__PURE__ */ new Map();
		for (let n of t.value) {
			if (n.kind !== "talent" || n.baseAdvances + n.current <= 0) continue;
			let t = L_(n.name, "talent");
			t && e.set(t.resolutionKey, v(t));
		}
		for (let t of s.value) {
			let n = L_(t.name, "trait");
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
		return e.sourceUuid && e.sourceUuid === t.sourceUuid ? !0 : Zg(e.name, t.name);
	}
	function v(e) {
		let t = i.value[e.resolutionKey];
		return t ? B_(e, t) : e;
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
function q_(e) {
	let { baseActorDraftData: t, customTraits: n, ignoredBaseTraitKeys: r, quickTraits: i, settings: a, traitConfigOverrides: o } = e, s = K(() => {
		let e = /* @__PURE__ */ new Map();
		if (a.value.allowBaseActorTraits) for (let n of t.value.traits) {
			let t = J_(n);
			r.value[t] || e.set(t, {
				config: n.config,
				ignored: !1,
				key: t,
				name: n.name,
				source: "base",
				sourceUuid: n.uuid
			});
		}
		for (let t of n.value) Y_(e, t.name) || e.set(t.key, { ...t });
		return [...e.values()].map((e) => ({
			...e,
			config: Xg(e.config, o.value[e.key])
		})).sort((e, t) => e.source === t.source ? e.name.localeCompare(t.name) : e.source.localeCompare(t.source));
	}), c = K(() => {
		if (!a.value.allowBaseActorTraits) return s.value;
		let e = [];
		for (let n of t.value.traits) {
			let t = J_(n);
			r.value[t] && e.push({
				config: Xg(n.config, o.value[t]),
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
		let i = `${e}:${t.uuid || Qg(t.name)}`;
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
		s.value.some((t) => Zg(t.name, e.name)) || n.value.some((t) => t.key === e.key) || n.value.push(e);
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
		return l.value.find((t) => Zg(t.name, e));
	}
	function y(e) {
		return i.value.find((t) => Zg(t.name, e));
	}
	function b(e) {
		let n = t.value.traits.find((t) => Zg(t.name, e));
		if (!n) return null;
		let i = J_(n);
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
function J_(e) {
	return `base:${e.uuid || Qg(e.name)}`;
}
function Y_(e, t) {
	return [...e.values()].some((e) => Zg(e.name, t));
}
//#endregion
//#region src/functions/npc-builder/trapping-resolution.ts
function X_(e, t = "trapping") {
	return {
		candidates: [],
		searchTerms: ev(e),
		selectedCandidateUuid: "",
		selectedItemType: t,
		selectedName: e.trim(),
		status: "fallback"
	};
}
function Z_(e) {
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
function Q_(e) {
	return {
		candidates: [],
		searchTerms: ev(e),
		selectedCandidateUuid: "",
		selectedItemType: "trapping",
		selectedName: e.trim(),
		status: "unresolved"
	};
}
function $_(e, t) {
	let n = ev(e), r = nv(n, t), i = r.filter((e) => e.matchKind === "exact");
	return i.length === 1 ? iv("matched", n, i[0]) : i.length > 1 ? iv("ambiguous", n, i[0], { candidates: r }) : r.length ? {
		candidates: r,
		searchTerms: n,
		selectedCandidateUuid: "",
		selectedItemType: "trapping",
		selectedName: e.trim(),
		status: "ambiguous"
	} : X_(e);
}
function ev(e) {
	let t = e.split(/\s+or\s+/i).map((e) => e.trim()).filter(Boolean);
	return t.length ? cv(t) : [e.trim()].filter(Boolean);
}
function tv(e, t) {
	if (av(e) === av(t)) return "exact";
	let n = ov(e), r = ov(t);
	if (!n || !r) return null;
	if (n === r || n.includes(r) || r.includes(n)) return "near";
	let i = n.split(" "), a = new Set(r.split(" "));
	return i.every((e) => a.has(e)) ? "near" : null;
}
function nv(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) for (let e of t) {
		let t = tv(r, e.name);
		t && n.get(e.uuid)?.matchKind !== "exact" && n.set(e.uuid, {
			itemType: e.itemType,
			matchKind: t,
			name: e.name,
			searchTerm: r,
			sourceLabel: e.sourceLabel,
			uuid: e.uuid
		});
	}
	return [...n.values()].sort(rv);
}
function rv(e, t) {
	return e.matchKind === t.matchKind ? e.name.localeCompare(t.name) : e.matchKind === "exact" ? -1 : 1;
}
function iv(e, t, n, r = {}) {
	return {
		candidates: r.candidates ?? (n ? [n] : []),
		searchTerms: t,
		selectedCandidateUuid: n?.uuid ?? "",
		selectedItemType: n?.itemType ?? "trapping",
		selectedName: n?.name ?? "",
		status: e
	};
}
function av(e) {
	return e.trim().toLocaleLowerCase().replaceAll(/\s+/g, " ");
}
function ov(e) {
	return av(e).replaceAll("&", " and ").replaceAll(/[(),.:;[\]]/g, " ").replaceAll(/\b(a|an|the|some|pair of|pairs of)\b/g, " ").split(/\s+/).map(sv).filter(Boolean).join(" ");
}
function sv(e) {
	return e.endsWith("ies") && e.length > 4 ? `${e.slice(0, -3)}y` : e.endsWith("s") && !e.endsWith("ss") && e.length > 3 ? e.slice(0, -1) : e;
}
function cv(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/state/npc-builder-store/trappings.ts
function lv(e) {
	let { baseActorDraftData: t, careers: n, customTrappings: r, settings: i, trappingOverrides: a, trappingResolutionOverrides: o } = e, s = K(() => {
		let e = /* @__PURE__ */ new Map();
		if (i.value.allowBaseActorTrappings) for (let n of t.value.trappings) {
			let t = `base:${n.uuid || Qg(n.name)}`;
			e.set(t, {
				ignored: !1,
				itemType: n.itemType,
				key: t,
				name: n.name,
				quantity: n.quantity,
				resolution: Z_({
					itemType: n.itemType,
					name: n.name,
					uuid: n.uuid
				}),
				source: "base",
				sourceUuid: n.uuid
			});
		}
		for (let t of n.value) for (let n of t.grants.trappings) {
			let r = `career:${Qg(n)}`, i = e.get(r);
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
				resolution: o.value[r] ?? Q_(n),
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
				quantity: $g(t?.quantity ?? e.quantity),
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
			quantity: $g(t)
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
		let n = X_(t.name, t.itemType);
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
var uv = Lh("npc-builder", () => {
	let e = /* @__PURE__ */ P(""), t = /* @__PURE__ */ P([]), n = /* @__PURE__ */ P({}), r = /* @__PURE__ */ P({ ...A_ }), i = /* @__PURE__ */ P([]), a = /* @__PURE__ */ P([]), o = /* @__PURE__ */ P([]), s = /* @__PURE__ */ P([]), c = /* @__PURE__ */ P([]), l = /* @__PURE__ */ P([]), u = /* @__PURE__ */ P(""), d = /* @__PURE__ */ P({ ...k_ }), f = /* @__PURE__ */ P(""), p = /* @__PURE__ */ P({}), m = /* @__PURE__ */ P({}), h = /* @__PURE__ */ P({}), g = /* @__PURE__ */ P([]), _ = /* @__PURE__ */ P([]), v = /* @__PURE__ */ P({}), y = /* @__PURE__ */ P({}), b = /* @__PURE__ */ P({}), x = /* @__PURE__ */ P({}), S = /* @__PURE__ */ P({}), C = /* @__PURE__ */ P({}), w = E_({
		baseActorDraftData: r,
		careers: a,
		manualAdvancementDeltas: n,
		settings: d,
		skillCharacteristics: p,
		skillGrantResolutions: h,
		talentMaximums: m
	}), ee = N_({
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
	}), T = D_({
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
	}), E = q_({
		baseActorDraftData: r,
		customTraits: o,
		ignoredBaseTraitKeys: v,
		quickTraits: l,
		settings: d,
		traitConfigOverrides: x
	}), D = lv({
		baseActorDraftData: r,
		careers: a,
		customTrappings: s,
		settings: d,
		trappingOverrides: S,
		trappingResolutionOverrides: C
	}), te = K_({
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
}), dv = { class: "npc-builder__subview-stack" }, fv = [
	"checked",
	"disabled",
	"onChange"
], pv = { class: "npc-builder__subview-actions" }, mv = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B("div", dv, [
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
			}, null, 40, fv), H("span", null, [H("strong", null, A(t.name), 1), H("small", null, [W(A(t.careerGroup || "Career") + " ", 1), e.isCareerQueued(t.uuid) ? (z(), B(R, { key: 0 }, [W(" already queued ")], 64)) : G("", !0)])])], 2))), 128))]))), 128)),
			H("div", pv, [H("button", {
				type: "button",
				onClick: r[0] ||= (e) => n("addDroppedOnly")
			}, "Add Dropped Only"), H("button", {
				type: "button",
				onClick: r[1] ||= (e) => n("addSelected")
			}, "Add Selected")])
		]));
	}
}), hv = /* @__PURE__ */ new Map();
function gv(e) {
	let t = e.id.trim();
	if (!t) throw Error("NPC auto-advance strategies must have an id.");
	hv.set(t, {
		...e,
		id: t
	});
}
function _v() {
	return [...hv.values()].sort((e, t) => e.name.localeCompare(t.name));
}
function vv(e) {
	return hv.get(e) ?? null;
}
function yv(e, t) {
	return Sv(e, t, {
		kinds: ["skill"],
		respectTalentMaximums: !1
	});
}
function bv(e, t) {
	return Sv(Sv(e, t, {
		kinds: ["talent"],
		respectTalentMaximums: !0
	}), t, {
		kinds: ["skill"],
		respectTalentMaximums: !1
	});
}
function xv(e, t) {
	return Sv(e, t, {
		kinds: ["characteristic"],
		respectTalentMaximums: !1
	});
}
function Sv(e, t, n) {
	let r = Math.max(0, Math.floor(Number.isFinite(t) ? t : 0)), i = Dv(e.advancements), a = Bg(i).total;
	if (a >= r) return { advancements: i };
	let o = !0;
	for (; o;) {
		o = !1;
		for (let e of i) {
			if (!n.kinds.includes(e.kind)) continue;
			let t = Cv(e, n);
			if (!t) continue;
			let i = Vg(t) - Vg(e);
			i <= 0 || a + i > r || (e.current = t.current, a += i, o = !0);
		}
	}
	return { advancements: i };
}
function Cv(e, t) {
	return t.respectTalentMaximums && e.kind === "talent" && !wv(e) ? null : {
		...e,
		current: e.current + Ev(e.kind)
	};
}
function wv(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" ? Tv(e) < t : !1;
}
function Tv(e) {
	return Math.max(e.minimumTotal, e.baseValue + e.current);
}
function Ev(e) {
	return e === "talent" ? 1 : 5;
}
function Dv(e) {
	return e.map((e) => ({
		...e,
		sources: e.sources.map((e) => ({ ...e }))
	}));
}
gv({
	description: "Cycles visible Skill rows evenly until no next skill increase fits the target XP.",
	id: "skill-master",
	name: "Skill Master",
	run: yv
}), gv({
	description: "Raises visible Talent rows evenly up to known maximums, then spends any remaining XP like Skill Master.",
	id: "gifted-and-talented",
	name: "Gifted & Talented",
	run: bv
}), gv({
	description: "Cycles visible Characteristic rows evenly until no next characteristic increase fits the target XP.",
	id: "all-natural",
	name: "All Natural",
	run: xv
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderAdvancementsTab/advancement-display.ts
function Ov(e) {
	let t = e.current - e.careerValue, n = [...e.sources].sort((e, t) => Lv(e.kind) - Lv(t.kind)).map((e) => `${e.label} ${Rv(e.count)}`);
	return t !== 0 && n.push(`Manual ${Rv(t)}`), n.length ? n.join(", ") : e.includedFromBase ? "Base actor" : "-";
}
function kv(e) {
	return a_(e) !== null;
}
function Av(e) {
	return e.kind === "talent" ? 1 : 5;
}
function jv(e) {
	return Math.max(e.minimumTotal, e.baseValue + e.current);
}
function Mv(e) {
	return jv(e);
}
function Nv(e) {
	return e.talentMaximumLabel ?? "Unknown";
}
function Pv(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" && Mv(e) > t;
}
function Fv(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" && Mv(e) < t;
}
function Iv(e) {
	return Vg(e);
}
function Lv(e) {
	return e === "characteristic" ? 0 : e === "career" ? 1 : 2;
}
function Rv(e) {
	return e > 0 ? `+${e}` : `${e}`;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderAdvancementsTab/AdvancementRowsPanel.vue?vue&type=script&setup=true&lang.ts
var zv = { class: "npc-builder__panel" }, Bv = { class: "npc-builder__panel-heading" }, Vv = {
	key: 0,
	class: "npc-builder__panel-actions"
}, Hv = {
	key: 1,
	class: "npc-builder__xp-summary"
}, Uv = { class: "npc-builder__table" }, Wv = {
	key: 0,
	class: "npc-builder__badge"
}, Gv = { class: "npc-builder__advance-controls" }, Kv = ["disabled", "onClick"], qv = [
	"aria-label",
	"value",
	"onInput"
], Jv = ["onClick"], Yv = ["disabled", "onClick"], Xv = /* @__PURE__ */ I({
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
		return (t, i) => (z(), B("section", zv, [
			H("div", Bv, [H("span", null, A(e.sectionNumber), 1), H("h2", null, A(e.title), 1)]),
			e.manualAdvanceCount ? (z(), B("div", Vv, [H("span", null, A(e.manualAdvanceCount) + " manual edits", 1), H("button", {
				type: "button",
				onClick: i[0] ||= (e) => n("resetAll")
			}, "Reset All Advances")])) : G("", !0),
			e.estimatedNpcXp ? (z(), B("div", Hv, [
				H("strong", null, "Estimated NPC XP " + A(e.estimatedNpcXp.total), 1),
				H("span", null, A(e.estimatedNpcXp.characteristics) + " characteristics", 1),
				H("span", null, A(e.estimatedNpcXp.skills) + " skills", 1),
				H("span", null, A(e.estimatedNpcXp.talents) + " talents", 1)
			])) : G("", !0),
			H("div", Uv, [i[1] ||= H("div", { class: "npc-builder__table-head" }, [
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
				H("strong", null, [W(A(t.name) + " ", 1), e.showSkillSpecializationBadges && F(kv)(t.name) ? (z(), B("span", Wv, " Needs specialization ")) : G("", !0)]),
				H("span", null, A(t.baseValue), 1),
				H("span", null, A(t.current), 1),
				H("div", Gv, [
					H("button", {
						disabled: F(jv)(t) <= t.minimumTotal,
						title: "Decrease by 5",
						type: "button",
						onClick: (e) => n("adjustCurrent", t, -1)
					}, " -5 ", 8, Kv),
					H("input", {
						"aria-label": `Total ${t.name}`,
						value: F(jv)(t),
						min: "0",
						type: "number",
						onInput: (e) => r(t, e)
					}, null, 40, qv),
					H("button", {
						title: "Increase by 5",
						type: "button",
						onClick: (e) => n("adjustCurrent", t, 1)
					}, " +5 ", 8, Jv),
					H("button", {
						disabled: t.current === t.careerValue,
						title: "Reset to career value",
						type: "button",
						onClick: (e) => n("resetCurrent", t)
					}, " Reset ", 8, Yv)
				]),
				H("span", null, A(F(Iv)(t)), 1),
				H("span", null, A(F(Ov)(t)), 1)
			], 2))), 128))])
		]));
	}
}), Zv = { class: "npc-builder__panel" }, Qv = { class: "npc-builder__auto-advance" }, $v = { class: "npc-builder__mini-field" }, ey = ["value"], ty = { class: "npc-builder__mini-field" }, ny = ["value"], ry = ["value"], iy = ["disabled"], ay = { key: 0 }, oy = /* @__PURE__ */ I({
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
		return (t, a) => (z(), B("section", Zv, [a[3] ||= H("div", { class: "npc-builder__panel-heading" }, [H("span", null, "4"), H("h2", null, "Auto Advance")], -1), H("div", Qv, [
			H("label", $v, [a[1] ||= H("span", null, "Target XP", -1), H("input", {
				value: e.targetXp,
				min: "0",
				type: "number",
				onInput: r
			}, null, 40, ey)]),
			H("label", ty, [a[2] ||= H("span", null, "Strategy", -1), H("select", {
				value: e.selectedAutoAdvanceStrategyId,
				onChange: i
			}, [(z(!0), B(R, null, L(e.autoAdvanceStrategies, (e) => (z(), B("option", {
				key: e.id,
				value: e.id
			}, A(e.name), 9, ry))), 128))], 40, ny)]),
			H("button", {
				disabled: !e.canRunAutoAdvance,
				title: "Advance rows as close to the target XP as possible without going over",
				type: "button",
				onClick: a[0] ||= (e) => n("runAutoAdvance")
			}, " Auto Advance ", 8, iy),
			e.selectedAutoAdvanceStrategy ? (z(), B("span", ay, A(e.selectedAutoAdvanceStrategy.description), 1)) : G("", !0)
		])]));
	}
}), sy = { class: "npc-builder__panel" }, cy = { class: "npc-builder__panel-actions" }, ly = ["disabled"], uy = { class: "npc-builder__table" }, dy = { class: "npc-builder__advance-controls" }, fy = ["disabled", "onClick"], py = [
	"aria-label",
	"value",
	"onInput"
], my = ["onClick"], hy = ["disabled", "onClick"], gy = { class: "npc-builder__maximum-cell" }, _y = {
	key: 0,
	class: "npc-builder__status-pill npc-builder__status-pill--warning"
}, vy = /* @__PURE__ */ I({
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
		return (t, i) => (z(), B("section", sy, [
			i[2] ||= H("div", { class: "npc-builder__panel-heading" }, [H("span", null, "3"), H("h2", null, "Talents")], -1),
			H("div", cy, [H("span", null, A(e.maximizableTalentCount) + " below maximum", 1), H("button", {
				disabled: e.maximizableTalentCount === 0,
				title: "Raise talents with known maximums to their maximum ranks",
				type: "button",
				onClick: i[0] ||= (e) => n("maximizeTalents")
			}, " Maximize Talents ", 8, ly)]),
			H("div", uy, [i[1] ||= H("div", { class: "npc-builder__table-head npc-builder__table-head--talents" }, [
				H("span", null, "Name"),
				H("span", null, "Ranks"),
				H("span", null, "Maximum"),
				H("span", null, "XP"),
				H("span", null, "Sources")
			], -1), (z(!0), B(R, null, L(e.talents, (e) => (z(), B("div", {
				key: `${e.kind}:${e.name}`,
				class: k(["npc-builder__advance-row npc-builder__advance-row--talent", {
					"is-edited": e.current !== e.careerValue,
					"is-over-maximum": F(Pv)(e)
				}])
			}, [
				H("strong", null, A(e.name), 1),
				H("div", dy, [
					H("button", {
						disabled: F(Mv)(e) <= e.minimumTotal,
						title: "Decrease by 1",
						type: "button",
						onClick: (t) => n("adjustCurrent", e, -1)
					}, " -1 ", 8, fy),
					H("input", {
						"aria-label": `Ranks ${e.name}`,
						value: F(Mv)(e),
						min: "0",
						type: "number",
						onInput: (t) => r(e, t)
					}, null, 40, py),
					H("button", {
						title: "Increase by 1",
						type: "button",
						onClick: (t) => n("adjustCurrent", e, 1)
					}, " +1 ", 8, my),
					H("button", {
						disabled: e.current === e.careerValue,
						title: "Reset to career value",
						type: "button",
						onClick: (t) => n("resetCurrent", e)
					}, " Reset ", 8, hy)
				]),
				H("span", gy, [W(A(F(Nv)(e)) + " ", 1), F(Pv)(e) ? (z(), B("span", _y, " Over max ")) : G("", !0)]),
				H("span", null, A(F(Iv)(e)), 1),
				H("span", null, A(F(Ov)(e)), 1)
			], 2))), 128))])
		]));
	}
}), yy = { class: "npc-builder__stack" }, by = /* @__PURE__ */ I({
	__name: "NpcBuilderAdvancementsTab",
	setup(e) {
		let t = uv(), { advancements: n, estimatedNpcXp: r } = Rh(t), i = _v(), a = /* @__PURE__ */ P("skill-master"), o = /* @__PURE__ */ P(0), s = K(() => n.value.filter((e) => e.kind === "characteristic")), c = K(() => n.value.filter((e) => e.kind === "skill")), l = K(() => n.value.filter((e) => e.kind === "talent")), u = K(() => l.value.filter((e) => Fv(e)).length), d = K(() => n.value.filter((e) => e.current !== e.careerValue).length), f = K(() => vv(a.value) ?? i[0] ?? null), p = K(() => f.value !== null && o.value > r.value.total);
		Jn(() => r.value.total, (e) => {
			o.value < e && (o.value = e);
		}, { immediate: !0 });
		function m(e, n) {
			let r = jv(e) + n * Av(e);
			t.setAdvancementTotal(e, r);
		}
		function h(e) {
			t.resetAdvancementCurrent(e);
		}
		function g() {
			for (let e of l.value) {
				let n = e.talentMaximumValue;
				typeof n == "number" && Mv(e) < n && t.setAdvancementTotal(e, n);
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
		return (e, n) => (z(), B("section", yy, [
			U(Xv, {
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
			U(Xv, {
				entries: c.value,
				"section-number": "2",
				"show-skill-specialization-badges": "",
				title: "Skills",
				onAdjustCurrent: m,
				onResetCurrent: h,
				onTotalChange: v
			}, null, 8, ["entries"]),
			U(vy, {
				"maximizable-talent-count": u.value,
				talents: l.value,
				onAdjustCurrent: m,
				onMaximizeTalents: g,
				onResetCurrent: h,
				onTotalChange: v
			}, null, 8, ["maximizable-talent-count", "talents"]),
			U(oy, {
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
function xy(e) {
	return [
		`Ch ${e.grants.characteristics.length}`,
		`Sk ${e.grants.skills.length}`,
		`Ta ${e.grants.talents.length}`,
		`Tr ${e.grants.trappings.length}`
	].join(" / ");
}
function Sy(e) {
	let t = e.slice(0, 3).join(", "), n = e.length - 3;
	return e.length ? n > 0 ? `${t}, +${n}` : t : "-";
}
function Cy(e) {
	return e.split(/\s+/).map((e) => e.at(0)).filter(Boolean).slice(0, 2).join("").toLocaleUpperCase();
}
function wy(e) {
	return `${e.label}\n${e.img}`;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/BaseActorPanel.vue?vue&type=script&setup=true&lang.ts
var Ty = { class: "npc-builder__panel" }, Ey = { class: "npc-builder__field-grid" }, Dy = { class: "npc-builder__field" }, Oy = ["value"], ky = { class: "npc-builder__field" }, Ay = ["disabled", "value"], jy = { value: "" }, My = ["value"], Ny = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, Py = {
	key: 1,
	class: "npc-builder__source"
}, Fy = { class: "npc-builder__thumbnail" }, Iy = ["src"], Ly = { key: 1 }, Ry = /* @__PURE__ */ I({
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
		return (t, a) => (z(), B("section", Ty, [
			a[3] ||= H("div", { class: "npc-builder__panel-heading" }, [H("span", null, "1"), H("h2", null, "Base Actor")], -1),
			H("div", Ey, [H("label", Dy, [a[1] ||= H("span", null, "Search world actors", -1), H("input", {
				value: e.actorFilter,
				placeholder: "Filter actors",
				type: "search",
				onInput: r
			}, null, 40, Oy)]), H("label", ky, [a[2] ||= H("span", null, "Base statblock", -1), H("select", {
				disabled: e.isLoadingActors,
				value: e.selectedBaseActorUuid,
				onChange: i
			}, [H("option", jy, A(e.isLoadingActors ? "Loading actors..." : "Choose an actor"), 1), (z(!0), B(R, null, L(e.filteredActors, (e) => (z(), B("option", {
				key: e.uuid,
				value: e.uuid
			}, A(e.name), 9, My))), 128))], 40, Ay)])]),
			U(Dl, {
				class: "npc-builder__drop",
				description: "Use a world Actor as the starting statblock.",
				title: "Drop Actor",
				variant: "compact",
				onDropData: a[0] ||= (e) => n("actorDrop", e)
			}),
			e.errorMessage ? (z(), B("p", Ny, A(e.errorMessage), 1)) : G("", !0),
			e.selectedBaseActor ? (z(), B("article", Py, [H("div", Fy, [e.selectedBaseActor.img ? (z(), B("img", {
				key: 0,
				src: e.selectedBaseActor.img,
				alt: ""
			}, null, 8, Iy)) : (z(), B("span", Ly, A(F(Cy)(e.selectedBaseActor.name)), 1))]), H("div", null, [H("strong", null, A(e.selectedBaseActor.name), 1), H("span", null, [
				W(A(e.selectedBaseActor.species || "Species not found") + " ", 1),
				e.selectedBaseActor.type ? (z(), B(R, { key: 0 }, [W(" - " + A(e.selectedBaseActor.type), 1)], 64)) : G("", !0),
				e.isLoadingBaseDraft ? (z(), B(R, { key: 1 }, [W("loading...")], 64)) : G("", !0)
			])])])) : G("", !0)
		]));
	}
}), zy = { class: "npc-builder__build-preview" }, By = { class: "npc-builder__build-preview-heading" }, Vy = { class: "npc-builder__preview-grid" }, Hy = { key: 0 }, Uy = { key: 0 }, Wy = { key: 1 }, Gy = { class: "npc-builder__preview-grid-wide" }, Ky = {
	key: 0,
	class: "npc-builder__warnings"
}, qy = { key: 1 }, Jy = /* @__PURE__ */ I({
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
		return (t, n) => (z(), B("section", zy, [
			H("div", By, [n[0] ||= H("h2", null, "Build Preview", -1), H("span", { class: k(["npc-builder__status-pill", { "npc-builder__status-pill--ready": e.buildPreviewStatus === "Ready" }]) }, A(e.buildPreviewStatus), 3)]),
			H("div", Vy, [
				H("div", null, [
					n[1] ||= H("span", null, "Advances", -1),
					H("strong", null, A(e.advancementCount), 1),
					e.editedAdvanceCount ? (z(), B("small", Hy, A(e.editedAdvanceCount) + " manually edited ", 1)) : G("", !0)
				]),
				H("div", null, [
					n[2] ||= H("span", null, "Trappings", -1),
					H("strong", null, A(e.visibleTrappingCount), 1),
					e.fallbackTrappingCount ? (z(), B("small", Uy, A(e.fallbackTrappingCount) + " blank fallback ", 1)) : G("", !0),
					e.ignoredTrappingCount ? (z(), B("small", Wy, A(e.ignoredTrappingCount) + " ignored ", 1)) : G("", !0)
				]),
				H("div", null, [n[3] ||= H("span", null, "Traits", -1), H("strong", null, A(e.traitCount), 1)]),
				H("div", null, [n[4] ||= H("span", null, "Spells", -1), H("strong", null, A(e.selectedSpellCount), 1)]),
				H("div", Gy, [
					n[5] ||= H("span", null, "Estimated NPC XP", -1),
					H("strong", null, A(e.estimatedNpcXp.total), 1),
					H("small", null, A(e.estimatedNpcXp.characteristics) + " char / " + A(e.estimatedNpcXp.skills) + " skill / " + A(e.estimatedNpcXp.talents) + " talent ", 1)
				])
			]),
			e.buildPreviewWarnings.length ? (z(), B("ul", Ky, [(z(!0), B(R, null, L(e.buildPreviewWarnings, (e) => (z(), B("li", { key: e }, A(e), 1))), 128))])) : (z(), B("p", qy, " The draft has a base Actor, queued Career data, resolved trappings, and a portrait ready to apply. "))
		]));
	}
}), Yy = /* @__PURE__ */ I({
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
}), Xy = ["disabled"], Zy = ["src"], Qy = { key: 1 }, $y = { key: 2 }, eb = {
	key: 0,
	class: "npc-builder__portrait-path"
}, tb = { key: 0 }, nb = ["title"], rb = {
	key: 1,
	class: "npc-builder__portrait-gallery"
}, ib = { key: 0 }, ab = { key: 1 }, ob = {
	key: 0,
	class: "npc-builder__portrait-progress"
}, sb = ["value"], cb = { class: "npc-builder__portrait-strip" }, lb = [
	"aria-label",
	"title",
	"onClick"
], ub = ["src"], db = /* @__PURE__ */ I({
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
			}, null, 8, Zy)) : e.finalCareer ? (z(), B("strong", Qy, A(F(Cy)(e.finalCareer.name)), 1)) : (z(), B("span", $y, "No portrait selected"))], 8, Xy),
			e.finalPortraitPath ? (z(), B("p", eb, [e.selectedPortraitCandidate ? (z(), B("strong", tb, A(e.selectedPortraitCandidate.label), 1)) : G("", !0), H("span", { title: e.finalPortraitPath }, A(e.finalPortraitPath), 9, nb)])) : G("", !0),
			e.portraitCandidates.length || e.isLoadingPortraitCandidates ? (z(), B("section", rb, [
				H("div", null, [r[2] ||= H("h2", null, "Portrait", -1), e.isLoadingPortraitCandidates ? (z(), B("span", ib, "Finding assets...")) : (z(), B("span", ab, A(e.portraitCandidates.length) + " options", 1))]),
				e.isLoadingPortraitCandidates && e.portraitSearchProgress ? (z(), B("div", ob, [H("progress", {
					value: e.portraitSearchProgressValue,
					max: "100"
				}, null, 8, sb), H("span", null, A(e.portraitSearchProgressLabel), 1)])) : G("", !0),
				H("div", cb, [(z(!0), B(R, null, L(e.compactPortraitCandidates, (t) => (z(), B("button", {
					key: t.key,
					"aria-label": F(wy)(t),
					class: k({ "is-active": t.key === e.selectedPortraitCandidateKey }),
					title: F(wy)(t),
					type: "button",
					onClick: (e) => n("selectPortrait", t)
				}, [H("img", {
					src: t.img,
					alt: ""
				}, null, 8, ub)], 10, lb))), 128)), e.hiddenPortraitCandidateCount > 0 ? (z(), B("button", {
					key: 0,
					class: "npc-builder__portrait-more",
					type: "button",
					onClick: r[1] ||= (e) => n("openGallery")
				}, " +" + A(e.hiddenPortraitCandidateCount), 1)) : G("", !0)])
			])) : G("", !0)
		], 64));
	}
}), fb = {
	key: 0,
	class: "npc-builder__quick-traits"
}, pb = ["onClick"], mb = /* @__PURE__ */ I({
	__name: "TraitButtonGroup",
	props: {
		caption: {},
		title: {},
		traits: {}
	},
	emits: ["toggleTrait"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => e.traits.length ? (z(), B("section", fb, [H("div", null, [H("h2", null, A(e.title), 1), H("span", null, A(e.caption), 1)]), (z(!0), B(R, null, L(e.traits, (e) => (z(), B("button", {
			key: e.uuid,
			class: k({ "is-active": e.isSelected }),
			type: "button",
			onClick: (t) => n("toggleTrait", e)
		}, A(e.name), 11, pb))), 128))])) : G("", !0);
	}
}), hb = { class: "npc-builder__summary" }, gb = { class: "npc-builder__preview" }, _b = { class: "npc-builder__field" }, vb = ["placeholder", "value"], yb = /* @__PURE__ */ I({
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
		return (t, i) => (z(), B("aside", hb, [H("section", gb, [
			U(db, {
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
			H("label", _b, [i[4] ||= H("span", null, "NPC name", -1), H("input", {
				placeholder: e.suggestedActorName,
				value: e.actorName,
				type: "text",
				onInput: r
			}, null, 40, vb)]),
			U(mb, {
				caption: `${e.optionalTraitOptions.length} from base statblock`,
				traits: e.optionalTraitOptions,
				title: "Optional Traits",
				onToggleTrait: i[2] ||= (e) => n("toggleOptionalTrait", e)
			}, null, 8, ["caption", "traits"]),
			U(mb, {
				caption: `${e.quickTraitOptions.length} configured`,
				traits: e.quickTraitOptions,
				title: "Quick Traits",
				onToggleTrait: i[3] ||= (e) => n("toggleQuickTrait", e)
			}, null, 8, ["caption", "traits"]),
			U(Jy, {
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
			U(Yy, {
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
}), bb = { class: "npc-builder__panel" }, xb = {
	key: 0,
	class: "npc-builder__careers"
}, Sb = [
	"onDragenter",
	"onDragover",
	"onDrop"
], Cb = ["onDragstart"], wb = { class: "npc-builder__thumbnail" }, Tb = ["src"], Eb = { key: 1 }, Db = { class: "npc-builder__career-copy" }, Ob = ["title"], kb = ["value", "onInput"], Ab = { class: "npc-builder__career-actions" }, jb = ["disabled", "onClick"], Mb = ["disabled", "onClick"], Nb = ["onClick"], Pb = {
	key: 1,
	class: "npc-builder__empty"
}, Fb = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B("section", bb, [
			r[3] ||= H("div", { class: "npc-builder__panel-heading" }, [H("span", null, "2"), H("h2", null, "Career Queue")], -1),
			U(Dl, {
				class: "npc-builder__drop npc-builder__drop--career",
				description: "Drop in build order. Drag rows to reorder.",
				title: "Drop Career Items",
				variant: "compact",
				onDropData: r[0] ||= (e) => n("careerDrop", e)
			}),
			e.careers.length ? (z(), B("ol", xb, [(z(!0), B(R, null, L(e.careers, (t, i) => (z(), B("li", {
				key: t.uuid,
				class: k({
					"is-dragging": e.draggedCareerIndex === i,
					"is-drop-target": e.dragOverCareerIndex === i
				}),
				onDragenter: ds((e) => n("careerDragEnter", i), ["prevent"]),
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
				}, " Move ", 40, Cb),
				H("div", wb, [t.img ? (z(), B("img", {
					key: 0,
					src: t.img,
					alt: ""
				}, null, 8, Tb)) : (z(), B("span", Eb, A(F(Cy)(t.name)), 1))]),
				H("div", Db, [
					H("strong", null, A(t.name), 1),
					H("span", null, [W(A(t.careerGroup || "Career") + " ", 1), t.level === null ? G("", !0) : (z(), B(R, { key: 0 }, [W(" level " + A(t.level), 1)], 64))]),
					H("small", {
						class: "npc-builder__career-counts",
						title: [
							`Characteristics: ${F(Sy)(t.grants.characteristics)}`,
							`Skills: ${F(Sy)(t.grants.skills)}`,
							`Talents: ${F(Sy)(t.grants.talents)}`,
							`Trappings: ${F(Sy)(t.grants.trappings)}`
						].join("\n")
					}, A(F(xy)(t)), 9, Ob)
				]),
				H("label", null, [r[2] ||= H("span", null, "Qty", -1), H("input", {
					value: t.quantity,
					min: "1",
					type: "number",
					onInput: (e) => n("careerQuantityInput", i, e)
				}, null, 40, kb)]),
				H("div", Ab, [
					H("button", {
						disabled: i === 0,
						title: "Move career earlier",
						type: "button",
						onClick: (e) => n("moveCareer", i, -1)
					}, " Up ", 8, jb),
					H("button", {
						disabled: i === e.careers.length - 1,
						title: "Move career later",
						type: "button",
						onClick: (e) => n("moveCareer", i, 1)
					}, " Down ", 8, Mb),
					H("button", {
						type: "button",
						onClick: (e) => n("removeCareer", i)
					}, "Remove", 8, Nb)
				])
			], 42, Sb))), 128))])) : (z(), B("p", Pb, "No careers queued yet."))
		]));
	}
}), Ib = { class: "npc-builder__portrait-gallery-view" }, Lb = { class: "npc-builder__portrait-gallery-summary" }, Rb = { key: 0 }, zb = { key: 1 }, Bb = { class: "npc-builder__portrait-grid" }, Vb = ["title", "onClick"], Hb = { class: "npc-builder__portrait-grid-image" }, Ub = ["src"], Wb = /* @__PURE__ */ I({
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
		return (t, r) => (z(), V(Fs, {
			open: e.open,
			title: "Portrait Gallery",
			onClose: r[0] ||= (e) => n("close")
		}, {
			default: Bn(() => [H("div", Ib, [H("div", Lb, [H("strong", null, A(e.portraitCandidates.length) + " portrait options", 1), e.isLoadingPortraitCandidates ? (z(), B("span", Rb, "Finding assets...")) : (z(), B("span", zb, "Click an image to use it for the generated NPC."))]), H("div", Bb, [(z(!0), B(R, null, L(e.portraitCandidates, (t) => (z(), B("button", {
				key: t.key,
				class: k({ "is-active": t.key === e.selectedPortraitCandidateKey }),
				title: F(wy)(t),
				type: "button",
				onClick: (e) => n("selectPortrait", t)
			}, [H("span", Hb, [H("img", {
				src: t.img,
				alt: ""
			}, null, 8, Ub)]), H("span", null, A(t.label), 1)], 10, Vb))), 128))])])]),
			_: 1
		}, 8, ["open"]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/errors.ts
function Gb(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not resolve that Actor drop.";
}
function Kb(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish searching for portraits.";
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/useBaseActorSelection.ts
function qb(e, t) {
	let n = uv(), { baseActors: r, selectedBaseActorUuid: i } = Rh(n), a = /* @__PURE__ */ P(""), o = K(() => {
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
			t.value = Gb(e);
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
function Jb() {
	let { advancements: e, careers: t, finalPortraitPath: n, selectedBaseActor: r, trappings: i } = Rh(uv()), a = K(() => {
		let e = 0;
		for (let n of t.value) e += n.quantity;
		return e;
	}), o = K(() => i.value.filter((e) => !e.ignored).length), s = K(() => e.value.filter((e) => e.current !== e.careerValue).length), c = K(() => i.value.filter((e) => !e.ignored && e.resolution.status === "fallback").length), l = K(() => i.value.filter((e) => e.ignored).length), u = K(() => e.value.filter((e) => e.kind === "skill" && a_(e.name) !== null).length), d = K(() => i.value.filter((e) => !e.ignored && e.resolution.status === "unresolved").length), f = K(() => {
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
function Yb() {
	let e = uv(), { optionalTraits: t, quickTraits: n, traits: r } = Rh(e), i = K(() => new Set(r.value.map((e) => Xb(e.name)))), a = K(() => t.value.map(s)), o = K(() => {
		let e = new Set(t.value.map((e) => Xb(e.name)));
		return n.value.filter((t) => !e.has(Xb(t.name))).map(s);
	});
	function s(e) {
		return {
			...e,
			isSelected: i.value.has(Xb(e.name))
		};
	}
	function c(t) {
		let n = i.value.has(Xb(t.name));
		e.setQuickTraitSelected(t, !n);
	}
	function l(t) {
		let n = i.value.has(Xb(t.name));
		e.setOptionalTraitSelected(t, !n);
	}
	return {
		displayedQuickTraitOptions: o,
		optionalTraitOptions: a,
		toggleOptionalTrait: l,
		toggleQuickTrait: c
	};
}
function Xb(e) {
	return e.trim().toLocaleLowerCase();
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/useCareerQueue.ts
function Zb() {
	let e = uv(), t = /* @__PURE__ */ P(null), n = /* @__PURE__ */ P(null);
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
var Qb = new Set([
	"and",
	"any",
	"the",
	"with",
	"without",
	"of",
	"or",
	"npc"
]);
function $b(e) {
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
	}), rx(t);
}
function ex(e, t) {
	let n = ix(e);
	return n ? t.some((e) => ix(e.img) === n) : !1;
}
function tx(e) {
	let t = [];
	for (let n of e.careers) t.push(n.name, n.careerGroup);
	return e.selectedBaseActor && t.push(e.selectedBaseActor.name, e.selectedBaseActor.species), sx(t.flatMap((e) => ox(e)).filter((e) => e.length >= 3 && !Qb.has(e)));
}
function nx(e, t) {
	let n = ax(e);
	return n ? t.some((e) => n.includes(e)) : !1;
}
function rx(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.img.trim().toLocaleLowerCase();
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
function ix(e) {
	return e.trim().toLocaleLowerCase();
}
function ax(e) {
	return e.trim().toLocaleLowerCase().replaceAll(/[_-]/g, " ").replaceAll(/[(),.:;[\]]/g, " ").replaceAll(/\s+/g, " ");
}
function ox(e) {
	let t = ax(e);
	return [t, ...t.split(" ")].filter(Boolean);
}
function sx(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/usePortraitCandidates.ts
function cx(e, t) {
	let n = uv(), { careers: r, finalPortraitPath: i, selectedBaseActor: a, selectedPortraitPath: o, settings: s } = Rh(n), c = /* @__PURE__ */ P([]), l = /* @__PURE__ */ P(!1), u = /* @__PURE__ */ P(!1), d = /* @__PURE__ */ P(null), f = 0, p = K(() => $b({
		careers: r.value,
		selectedBaseActor: a.value
	})), m = K(() => rx([...p.value, ...c.value])), h = K(() => m.value.slice(0, 10)), g = K(() => Math.max(0, m.value.length - h.value.length)), _ = K(() => m.value.find((e) => e.img === i.value)?.key ?? ""), v = K(() => m.value.find((e) => e.img === i.value) ?? null), y = K(() => {
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
		o.value && !u.value && !ex(o.value, m.value) && n.selectPortrait("");
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
			f === n && (t.value = Kb(e));
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
var lx = { class: "npc-builder__layout" }, ux = { class: "npc-builder__column" }, dx = /* @__PURE__ */ I({
	__name: "NpcBuilderBuildTab",
	props: {
		bridge: {},
		isLoadingActors: { type: Boolean },
		isLoadingBaseDraft: { type: Boolean }
	},
	emits: ["careerDrop"],
	setup(e, { emit: t }) {
		let n = e, r = t, { actorName: i, advancements: a, careers: o, estimatedNpcXp: s, finalActorName: c, finalCareer: l, finalPortraitPath: u, grantTotals: d, selectedBaseActor: f, selectedSpells: p, suggestedActorName: m, traits: h } = Rh(uv()), g = /* @__PURE__ */ P(""), { actorFilter: _, filteredActors: v, handleActorDrop: y, selectedBaseActorSelectValue: b } = qb(n.bridge, g), { clearCareerDragState: x, draggedCareerIndex: S, dragOverCareerIndex: C, handleCareerDragOver: w, handleCareerDragStart: ee, handleCareerDrop: T, moveCareer: E, removeCareer: D, setCareerQuantity: te, setDragOverCareerIndex: ne } = Zb(), { displayedQuickTraitOptions: re, optionalTraitOptions: ie, toggleOptionalTrait: ae, toggleQuickTrait: oe } = Yb(), { buildPreviewStatus: O, buildPreviewWarnings: se, careerItemCount: ce, editedAdvanceCount: le, fallbackTrappingCount: ue, ignoredTrappingCount: de, visibleTrappingCount: fe } = Jb(), { compactPortraitCandidates: pe, hiddenPortraitCandidateCount: me, isLoadingPortraitCandidates: he, isPortraitGalleryOpen: ge, portraitCandidates: _e, portraitSearchProgress: k, portraitSearchProgressLabel: ve, portraitSearchProgressValue: ye, selectedPortraitCandidate: be, selectedPortraitCandidateKey: xe, selectPortrait: Se, selectPortraitFromGallery: Ce } = cx(n.bridge, g);
		return (t, n) => (z(), B("section", lx, [
			H("div", ux, [U(Ry, {
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
			]), U(Fb, {
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
			U(yb, {
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
			U(Wb, {
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
}), fx = { class: "npc-builder__folder-setting" }, px = { class: "npc-builder__field" }, mx = ["value"], hx = { value: "" }, gx = ["value"], _x = { class: "npc-builder__field" }, vx = ["value"], yx = ["disabled"], bx = /* @__PURE__ */ I({
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
		return (t, a) => (z(), B("section", fx, [
			H("label", px, [H("span", null, A(e.folderLabel), 1), H("select", {
				value: e.selectedUuid,
				onChange: r
			}, [H("option", hx, A(e.defaultOptionLabel), 1), (z(!0), B(R, null, L(e.folders, (e) => (z(), B("option", {
				key: e.uuid,
				value: e.uuid
			}, A(e.name), 9, gx))), 128))], 40, mx)]),
			H("label", _x, [a[1] ||= H("span", null, "Create or use by name", -1), H("input", {
				value: e.createName,
				placeholder: "Folder name",
				type: "text",
				onInput: i
			}, null, 40, vx)]),
			H("button", {
				disabled: e.disabled || !e.createName.trim(),
				type: "button",
				onClick: a[0] ||= (e) => n("saveFolderName")
			}, A(e.buttonLabel ?? "Save"), 9, yx)
		]));
	}
}), xx = { class: "npc-builder__panel" }, Sx = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B("section", xx, [
			r[6] ||= H("div", { class: "npc-builder__panel-heading" }, [H("span", null, "1"), H("h2", null, "Actor Sources")], -1),
			U(bx, {
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
			U(bx, {
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
}), Cx = { class: "npc-builder__panel" }, wx = { class: "npc-builder__check" }, Tx = ["checked"], Ex = { class: "npc-builder__check" }, Dx = ["checked"], Ox = { class: "npc-builder__check" }, kx = ["checked"], Ax = { class: "npc-builder__check" }, jx = ["checked"], Mx = { class: "npc-builder__check" }, Nx = ["checked"], Px = /* @__PURE__ */ I({
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
		return (t, i) => (z(), B("section", Cx, [
			i[10] ||= H("div", { class: "npc-builder__panel-heading" }, [H("span", null, "5"), H("h2", null, "Base Actor Features")], -1),
			H("label", wx, [H("input", {
				checked: e.allowCharacteristics,
				type: "checkbox",
				onChange: i[0] ||= (e) => n("allowCharacteristicsChange", r(e))
			}, null, 40, Tx), i[5] ||= H("span", null, "Show base actor characteristics", -1)]),
			H("label", Ex, [H("input", {
				checked: e.allowSkills,
				type: "checkbox",
				onChange: i[1] ||= (e) => n("allowSkillsChange", r(e))
			}, null, 40, Dx), i[6] ||= H("span", null, "Show base actor skills", -1)]),
			H("label", Ox, [H("input", {
				checked: e.allowTalents,
				type: "checkbox",
				onChange: i[2] ||= (e) => n("allowTalentsChange", r(e))
			}, null, 40, kx), i[7] ||= H("span", null, "Show base actor talents", -1)]),
			H("label", Ax, [H("input", {
				checked: e.allowTrappings,
				type: "checkbox",
				onChange: i[3] ||= (e) => n("allowTrappingsChange", r(e))
			}, null, 40, jx), i[8] ||= H("span", null, "Show base actor trappings", -1)]),
			H("label", Mx, [H("input", {
				checked: e.allowTraits,
				type: "checkbox",
				onChange: i[4] ||= (e) => n("allowTraitsChange", r(e))
			}, null, 40, Nx), i[9] ||= H("span", null, "Show base actor traits", -1)])
		]));
	}
}), Fx = { class: "npc-builder__panel" }, Ix = { class: "npc-builder__check" }, Lx = ["checked"], Rx = /* @__PURE__ */ I({
	__name: "MagicSpellSettings",
	props: { autoSelectGrantedSpells: { type: Boolean } },
	emits: ["autoSelectGrantedSpellsChange"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			let t = e.target;
			n("autoSelectGrantedSpellsChange", !!t?.checked);
		}
		return (t, n) => (z(), B("section", Fx, [n[1] ||= H("div", { class: "npc-builder__panel-heading" }, [H("span", null, "6"), H("h2", null, "Magic and Spells")], -1), H("label", Ix, [H("input", {
			checked: e.autoSelectGrantedSpells,
			type: "checkbox",
			onChange: r
		}, null, 40, Lx), n[0] ||= H("span", null, "Select detected Lore spells by default", -1)])]));
	}
}), zx = { class: "npc-builder__panel" }, Bx = { class: "npc-builder__check" }, Vx = ["checked"], Hx = /* @__PURE__ */ I({
	__name: "NamingSettings",
	props: { includeSpeciesInName: { type: Boolean } },
	emits: ["includeSpeciesInNameChange"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			let t = e.target;
			n("includeSpeciesInNameChange", !!t?.checked);
		}
		return (t, n) => (z(), B("section", zx, [n[1] ||= H("div", { class: "npc-builder__panel-heading" }, [H("span", null, "3"), H("h2", null, "Default Naming")], -1), H("label", Bx, [H("input", {
			checked: e.includeSpeciesInName,
			type: "checkbox",
			onChange: r
		}, null, 40, Vx), n[0] ||= H("span", null, "Include species in suggested names", -1)])]));
	}
}), Ux = { class: "npc-builder__panel" }, Wx = { class: "npc-builder__field" }, Gx = ["value"], Kx = { class: "npc-builder__check" }, qx = ["checked"], Jx = ["disabled"], Yx = ["disabled"], Xx = /* @__PURE__ */ I({
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
		return (t, a) => (z(), B("section", Ux, [
			a[5] ||= H("div", { class: "npc-builder__panel-heading" }, [H("span", null, "7"), H("h2", null, "Other Settings")], -1),
			H("label", Wx, [a[3] ||= H("span", null, "Lower career handling", -1), H("select", {
				value: e.lowerCareerMode,
				onChange: r
			}, [...a[2] ||= [
				H("option", { value: "prompt" }, "Prompt when candidates are found", -1),
				H("option", { value: "auto-add-all" }, "Automatically add all lower-tier matches", -1),
				H("option", { value: "never" }, "Only add dropped careers", -1)
			]], 40, Gx)]),
			H("label", Kx, [H("input", {
				checked: e.askForLinkedSkillSpecializations,
				type: "checkbox",
				onChange: i
			}, null, 40, qx), a[4] ||= H("span", null, "Resolve linked career skill repeats separately", -1)]),
			H("button", {
				disabled: e.isBusy,
				type: "button",
				onClick: a[0] ||= (e) => n("saveSettings")
			}, "Save Settings", 8, Jx),
			H("button", {
				disabled: e.isBusy,
				type: "button",
				onClick: a[1] ||= (e) => n("resetSettings")
			}, " Reset to Defaults ", 8, Yx)
		]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSettingsTab/portrait-search-labels.ts
function Zx(e) {
	return e ? e.digDownActive ? e.digDownDeepFileSearchEnabled ? e.digDownCacheReady ? `Dig Down cache ready with ${e.digDownIndexedFileCount} indexed files.` : "Dig Down is active; its file cache is still building or unavailable." : "Dig Down is active, but its Deep File Search setting is disabled." : "Install and enable Dig Down to search local files for portrait suggestions." : "Checking Dig Down integration.";
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSettingsTab/PortraitSuggestionSettings.vue?vue&type=script&setup=true&lang.ts
var Qx = { class: "npc-builder__panel" }, $x = { class: "npc-builder__check" }, eS = ["checked", "disabled"], tS = { class: "npc-builder__setting-note" }, nS = { class: "npc-builder__check" }, rS = ["checked"], iS = { class: "npc-builder__check" }, aS = ["checked"], oS = /* @__PURE__ */ I({
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
		return (t, n) => (z(), B("section", Qx, [
			n[3] ||= H("div", { class: "npc-builder__panel-heading" }, [H("span", null, "4"), H("h2", null, "Portrait Suggestions")], -1),
			H("label", $x, [H("input", {
				checked: e.searchFoundryPortraitAssets,
				disabled: !e.canUseDigDownPortraitSearch,
				type: "checkbox",
				onChange: r
			}, null, 40, eS), n[0] ||= H("span", null, "Search Dig Down's file cache for portrait suggestions", -1)]),
			H("p", tS, A(e.statusLabel), 1),
			H("label", nS, [H("input", {
				checked: e.searchCompendiumPortraitAssets,
				type: "checkbox",
				onChange: i
			}, null, 40, rS), n[1] ||= H("span", null, "Search Actor and Item compendiums for portrait suggestions", -1)]),
			H("label", iS, [H("input", {
				checked: e.searchWebPortraitAssets,
				disabled: "",
				type: "checkbox"
			}, null, 8, aS), n[2] ||= H("span", null, "Search the web for portrait suggestions (later)", -1)])
		]));
	}
}), sS = { class: "npc-builder__panel" }, cS = ["disabled"], lS = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B("section", sS, [
			r[4] ||= H("div", { class: "npc-builder__panel-heading" }, [H("span", null, "2"), H("h2", null, "Quick Traits")], -1),
			U(bx, {
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
			}, " Import Recommended Quick Traits ", 8, cS)
		]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSettingsTab/settings-payload.ts
function uS(e) {
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
var dS = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, fS = {
	key: 1,
	class: "npc-builder__message"
}, pS = /* @__PURE__ */ I({
	__name: "SettingsMessages",
	props: {
		errorMessage: {},
		settingsMessage: {}
	},
	setup(e) {
		return (t, n) => e.errorMessage ? (z(), B("p", dS, A(e.errorMessage), 1)) : e.settingsMessage ? (z(), B("p", fS, A(e.settingsMessage), 1)) : G("", !0);
	}
}), mS = { class: "npc-builder__settings" }, hS = /* @__PURE__ */ I({
	__name: "NpcBuilderSettingsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = uv(), { actorFolders: r, itemFolders: i, settings: a } = Rh(n), o = /* @__PURE__ */ P(""), s = /* @__PURE__ */ P(""), c = /* @__PURE__ */ P(!1), l = /* @__PURE__ */ P(""), u = /* @__PURE__ */ P(null), d = /* @__PURE__ */ P(""), f = /* @__PURE__ */ P(""), p = K(() => u.value?.digDownActive ?? !0), m = K(() => Zx(u.value));
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
				n.hydrateSettings(await t.bridge.saveSettings(O_())), await Promise.all([x(), S()]), f.value = "Settings reset to defaults.";
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
			return uS({
				canUseDigDownPortraitSearch: p.value,
				settings: a.value
			});
		}
		return (e, t) => (z(), B("section", mS, [
			U(pS, {
				"error-message": s.value,
				"settings-message": f.value
			}, null, 8, ["error-message", "settings-message"]),
			U(Sx, {
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
			U(lS, {
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
			U(Hx, {
				"include-species-in-name": F(a).includeSpeciesInName,
				onIncludeSpeciesInNameChange: t[6] ||= (e) => F(a).includeSpeciesInName = e
			}, null, 8, ["include-species-in-name"]),
			U(oS, {
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
			U(Px, {
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
			U(Rx, {
				"auto-select-granted-spells": F(a).autoSelectGrantedSpells,
				onAutoSelectGrantedSpellsChange: t[14] ||= (e) => F(a).autoSelectGrantedSpells = e
			}, null, 8, ["auto-select-granted-spells"]),
			U(Xx, {
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
}), gS = { class: "npc-builder__subview-stack" }, _S = { class: "npc-builder__field" }, vS = ["onUpdate:modelValue"], yS = ["value"], bS = { class: "npc-builder__subview-actions" }, xS = /* @__PURE__ */ I({
	__name: "MagicLoreResolutionPromptContent",
	props: { prompt: {} },
	emits: ["applyLores", "keepUnresolved"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (z(), B("div", gS, [
			r[4] ||= H("p", null, " Choose concrete magic Lores for ambiguous grants before automatic spells are detected. Unresolved grants can still use manually dropped spells. ", -1),
			(z(!0), B(R, null, L(e.prompt.rows, (e) => (z(), B("section", {
				key: e.resolutionKey,
				class: "npc-builder__resolution-row"
			}, [H("div", null, [H("strong", null, A(e.grantLabel), 1), H("small", null, A(e.sourceLabel) + " - " + A(e.rawLore || "Any Lore"), 1)]), H("label", _S, [r[3] ||= H("span", null, "Lore", -1), Vn(H("select", { "onUpdate:modelValue": (t) => e.selectedLore = t }, [r[2] ||= H("option", { value: "" }, "Leave unresolved", -1), (z(!0), B(R, null, L(e.options, (e) => (z(), B("option", {
				key: e.key,
				value: e.value
			}, A(e.label) + A(e.wind && e.wind !== "None" ? ` (${e.wind})` : ""), 9, yS))), 128))], 8, vS), [[os, e.selectedLore]])])]))), 128)),
			H("div", bS, [H("button", {
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
function SS(e) {
	return e.kind === "arcane-magic" ? "Arcane Magic" : e.kind === "petty-magic" ? "Petty Magic" : "Spellcaster";
}
function CS(e) {
	return `${SS(e)} from ${e.sourceName}`;
}
function wS(e) {
	return e.source === "talent" ? "Talent" : "Trait";
}
function TS(e) {
	return e.source === "custom" ? "Dropped" : e.sourceLabel;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSpellsTab/MagicAccessPanel.vue?vue&type=script&setup=true&lang.ts
var ES = { class: "npc-builder__panel" }, DS = {
	key: 0,
	class: "npc-builder__empty"
}, OS = {
	key: 1,
	class: "npc-builder__magic-grants"
}, kS = { key: 0 }, AS = { key: 1 }, jS = {
	key: 2,
	class: "npc-builder__panel-actions"
}, MS = ["disabled"], NS = /* @__PURE__ */ I({
	__name: "MagicAccessPanel",
	props: {
		ambiguousGrantCount: {},
		isLoadingLoreOptions: { type: Boolean },
		magicGrants: {}
	},
	emits: ["resolveLores"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (z(), B("section", ES, [
			r[1] ||= H("div", { class: "npc-builder__panel-heading" }, [H("span", null, "1"), H("h2", null, "Magic Access")], -1),
			e.magicGrants.length ? (z(), B("div", OS, [(z(!0), B(R, null, L(e.magicGrants, (e) => (z(), B("article", { key: `${e.source}:${e.sourceName}:${e.rawLore}` }, [
				H("strong", null, A(F(SS)(e)), 1),
				H("span", null, A(F(wS)(e)) + " - " + A(e.sourceName), 1),
				e.isAmbiguous ? (z(), B("small", kS, " Needs Lore resolution before automatic spells can be found. ")) : (z(), B("small", AS, " Lore: " + A(e.rawLore || e.normalizedLore), 1))
			]))), 128))])) : (z(), B("p", DS, " No magic-enabling Talent or Trait is selected. ")),
			e.ambiguousGrantCount ? (z(), B("div", jS, [H("button", {
				disabled: e.isLoadingLoreOptions,
				type: "button",
				onClick: r[0] ||= (e) => n("resolveLores")
			}, A(e.isLoadingLoreOptions ? "Loading Lores..." : "Resolve Lores"), 9, MS)])) : G("", !0)
		]));
	}
}), PS = { class: "npc-builder__panel" }, FS = { class: "npc-builder__panel-actions" }, IS = ["disabled"], LS = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, RS = {
	key: 1,
	class: "npc-builder__message npc-builder__message--error"
}, zS = {
	key: 2,
	class: "npc-builder__table"
}, BS = ["checked", "onChange"], VS = { class: "npc-builder__spell-name" }, HS = { class: "npc-builder__spell-icon" }, US = ["src"], WS = ["onClick"], GS = { key: 1 }, KS = {
	key: 3,
	class: "npc-builder__empty"
}, qS = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B("section", PS, [
			r[3] ||= H("div", { class: "npc-builder__panel-heading" }, [H("span", null, "2"), H("h2", null, "Spells")], -1),
			U(Dl, {
				class: "npc-builder__drop npc-builder__drop--career",
				description: "Add a specific Spell item regardless of detected Lores.",
				title: "Drop Spell Items",
				onDropData: r[0] ||= (e) => n("spellDrop", e)
			}),
			H("div", FS, [H("button", {
				disabled: e.isLoadingSpells || !e.resolvedGrantCount,
				type: "button",
				onClick: r[1] ||= (e) => n("refreshSpells")
			}, A(e.isLoadingSpells ? "Finding spells..." : "Refresh Spells"), 9, IS), H("span", null, A(e.selectedSpellCount) + " selected / " + A(e.spells.length) + " found", 1)]),
			e.errorMessage ? (z(), B("p", LS, A(e.errorMessage), 1)) : G("", !0),
			e.ambiguousGrantCount ? (z(), B("p", RS, A(e.ambiguousGrantCount) + " magic grant" + A(e.ambiguousGrantCount === 1 ? "" : "s") + " still need Lore resolution. You can still drop specific spells for now. ", 1)) : G("", !0),
			e.spells.length ? (z(), B("div", zS, [r[2] ||= H("div", { class: "npc-builder__table-head npc-builder__table-head--spells" }, [
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
				}, null, 40, BS),
				H("div", VS, [H("span", HS, [e.img ? (z(), B("img", {
					key: 0,
					src: e.img,
					alt: ""
				}, null, 8, US)) : G("", !0)]), H("strong", null, A(e.name), 1)]),
				H("span", null, A(e.loreName || "Unknown"), 1),
				H("span", null, A(F(TS)(e)), 1),
				e.source === "custom" ? (z(), B("button", {
					key: 0,
					type: "button",
					onClick: (t) => n("removeCustomSpell", e.key)
				}, " Remove ", 8, WS)) : (z(), B("span", GS))
			]))), 128))])) : (z(), B("p", KS, " No matching spells found yet. Drop specific spells here, or resolve a non-ambiguous magic Lore. "))
		]));
	}
}), JS = { class: "npc-builder__stack" }, YS = /* @__PURE__ */ I({
	__name: "NpcBuilderSpellsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = uv(), { magicGrants: r, spells: i, selectedSpells: a } = Rh(n), o = /* @__PURE__ */ P(""), s = /* @__PURE__ */ P(!1), c = /* @__PURE__ */ P(!1), l = /* @__PURE__ */ P([]), u = /* @__PURE__ */ P(null), d = 0, f = K(() => r.value.filter((e) => e.isAmbiguous)), p = K(() => r.value.length - f.value.length);
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
				grantLabel: CS(e),
				options: H_(e, l.value),
				rawLore: e.rawLore,
				resolutionKey: e.resolutionKey,
				selectedLore: "",
				sourceLabel: wS(e)
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
		return (e, t) => (z(), B("section", JS, [
			U(Fs, {
				open: u.value !== null,
				title: "Resolve Magic Lores",
				onClose: y
			}, {
				default: Bn(() => [u.value ? (z(), V(xS, {
					key: 0,
					prompt: u.value,
					onApplyLores: v,
					onKeepUnresolved: y
				}, null, 8, ["prompt"])) : G("", !0)]),
				_: 1
			}, 8, ["open"]),
			U(NS, {
				"ambiguous-grant-count": f.value.length,
				"is-loading-lore-options": c.value,
				"magic-grants": F(r),
				onResolveLores: _
			}, null, 8, [
				"ambiguous-grant-count",
				"is-loading-lore-options",
				"magic-grants"
			]),
			U(qS, {
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
}), XS = { class: "npc-builder__stack" }, ZS = { class: "npc-builder__panel" }, QS = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, $S = { class: "npc-builder__table" }, eC = { class: "npc-builder__trait-name" }, tC = { key: 0 }, nC = { key: 1 }, rC = { class: "npc-builder__trait-config" }, iC = { class: "npc-builder__mini-field" }, aC = ["value", "onInput"], oC = {
	key: 0,
	class: "npc-builder__mini-field"
}, sC = ["value", "onChange"], cC = ["value"], lC = {
	key: 1,
	class: "npc-builder__mini-field"
}, uC = ["value", "onInput"], dC = ["onClick"], fC = /* @__PURE__ */ I({
	__name: "NpcBuilderTraitsTab",
	props: {
		bridge: {},
		difficultyOptions: {}
	},
	setup(e) {
		let t = e, n = uv(), { traits: r } = Rh(n), i = /* @__PURE__ */ P("");
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
		return (t, n) => (z(), B("section", XS, [H("section", ZS, [
			n[3] ||= H("div", { class: "npc-builder__panel-heading" }, [H("span", null, "1"), H("h2", null, "Traits")], -1),
			U(Dl, {
				class: "npc-builder__drop npc-builder__drop--career",
				description: "Add creature traits or NPC trait items.",
				title: "Drop Trait Items",
				onDropData: c
			}),
			i.value ? (z(), B("p", QS, A(i.value), 1)) : G("", !0),
			H("div", $S, [n[2] ||= H("div", { class: "npc-builder__table-head npc-builder__table-head--traits" }, [
				H("span", null, "Name"),
				H("span", null, "Source"),
				H("span", null, "Config"),
				H("span")
			], -1), (z(!0), B(R, null, L(F(r), (t) => (z(), B("article", {
				key: t.key,
				class: "npc-builder__trait-row"
			}, [
				H("div", eC, [
					H("strong", null, A(t.name), 1),
					t.config.rollable ? (z(), B("span", tC, "Rollable")) : G("", !0),
					t.config.damage ? (z(), B("span", nC, "Damage")) : G("", !0)
				]),
				H("span", null, A(a(t)), 1),
				H("div", rC, [
					H("label", iC, [H("span", null, A(t.config.damage ? "Damage" : "Specification"), 1), H("input", {
						value: t.config.specification,
						placeholder: "None",
						type: "text",
						onInput: (e) => s(t, "specification", e)
					}, null, 40, aC)]),
					t.config.rollable && !t.config.damage ? (z(), B("label", oC, [n[0] ||= H("span", null, "Difficulty", -1), H("select", {
						value: t.config.defaultDifficulty,
						onChange: (e) => s(t, "defaultDifficulty", e)
					}, [(z(!0), B(R, null, L(e.difficultyOptions, (e) => (z(), B("option", {
						key: e.value,
						value: e.value
					}, A(e.label), 9, cC))), 128))], 40, sC)])) : G("", !0),
					t.config.damage && t.config.dice ? (z(), B("label", lC, [n[1] ||= H("span", null, "Dice", -1), H("input", {
						value: t.config.dice,
						placeholder: "Optional",
						type: "text",
						onInput: (e) => s(t, "dice", e)
					}, null, 40, uC)])) : G("", !0)
				]),
				H("button", {
					type: "button",
					onClick: (e) => o(t)
				}, "Remove", 8, dC)
			]))), 128))])
		])]));
	}
}), pC = "__blank-item__";
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderTrappingsTab/resolution-labels.ts
function mC(e) {
	return e.source === "base" ? "Base" : e.source === "career" ? "Career" : "Custom";
}
function hC(e) {
	return e.resolution.status === "matched" ? `Matched ${e.resolution.selectedName}` : e.resolution.status === "fallback" ? `Blank ${e.resolution.selectedName || e.name}` : e.resolution.candidates.length ? "Choose a match" : "Needs resolution";
}
function gC(e) {
	return e.ignored ? "Ignored" : e.resolution.status === "matched" ? "Matched" : e.resolution.status === "fallback" ? "Blank item" : e.resolution.status === "ambiguous" || e.resolution.candidates.length ? "Choose" : "Needs resolution";
}
function _C(e) {
	let t = "npc-builder__status-pill";
	return e.ignored ? [t, "npc-builder__status-pill--muted"] : e.resolution.status === "matched" ? [t, "npc-builder__status-pill--success"] : e.resolution.status === "fallback" ? [t, "npc-builder__status-pill--fallback"] : e.resolution.status === "ambiguous" || e.resolution.candidates.length ? [t, "npc-builder__status-pill--warning"] : [t, "npc-builder__status-pill--danger"];
}
function vC(e) {
	return e.ignored ? "" : e.resolution.status === "matched" ? "is-resolution-matched" : e.resolution.status === "fallback" ? "is-resolution-fallback" : e.resolution.status === "ambiguous" || e.resolution.candidates.length ? "is-resolution-choice" : "is-resolution-unresolved";
}
function yC(e) {
	return e.resolution.status === "fallback" ? pC : e.resolution.selectedCandidateUuid;
}
function bC(e) {
	return e.source === "career";
}
function xC(e) {
	return e.resolution.candidates.length > 0 || bC(e);
}
function SC(e) {
	return e.resolution.searchTerms.length <= 1 ? "" : `Options: ${e.resolution.searchTerms.join(" / ")}`;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderTrappingsTab/TrappingsTable.vue?vue&type=script&setup=true&lang.ts
var CC = { class: "npc-builder__table" }, wC = ["checked", "onChange"], TC = { class: "npc-builder__trapping-name" }, EC = { key: 0 }, DC = { class: "npc-builder__trapping-resolution" }, OC = ["value", "onChange"], kC = {
	key: 0,
	value: ""
}, AC = ["value"], jC = ["value"], MC = { key: 1 }, NC = ["value", "onInput"], PC = ["onClick"], FC = { key: 1 }, IC = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B("div", CC, [r[0] ||= H("div", { class: "npc-builder__table-head npc-builder__table-head--traps" }, [
			H("span", null, "Use"),
			H("span", null, "Name"),
			H("span", null, "Resolution"),
			H("span", null, "Type"),
			H("span", null, "Qty"),
			H("span", null, "Source"),
			H("span")
		], -1), (z(!0), B(R, null, L(e.trappings, (e) => (z(), B("article", {
			key: e.key,
			class: k(["npc-builder__trapping-row", [F(vC)(e), { "is-ignored": e.ignored }]])
		}, [
			H("input", {
				checked: !e.ignored,
				type: "checkbox",
				onChange: (t) => n("useChange", e.key, t)
			}, null, 40, wC),
			H("div", TC, [H("strong", null, A(e.name), 1), F(SC)(e) ? (z(), B("span", EC, A(F(SC)(e)), 1)) : G("", !0)]),
			H("div", DC, [H("span", { class: k(F(_C)(e)) }, A(F(gC)(e)), 3), F(xC)(e) ? (z(), B("select", {
				key: 0,
				value: F(yC)(e),
				onChange: (t) => n("resolutionChange", e.key, t)
			}, [
				e.resolution.candidates.length ? (z(), B("option", kC, "Choose match")) : G("", !0),
				(z(!0), B(R, null, L(e.resolution.candidates, (e) => (z(), B("option", {
					key: e.uuid,
					value: e.uuid
				}, A(e.name) + " (" + A(e.sourceLabel) + ") ", 9, AC))), 128)),
				F(bC)(e) ? (z(), B("option", {
					key: 1,
					value: F(pC)
				}, "Blank Item", 8, jC)) : G("", !0)
			], 40, OC)) : (z(), B("span", MC, A(F(hC)(e)), 1))]),
			H("span", null, A(e.resolution.selectedItemType || e.itemType || "trapping"), 1),
			H("input", {
				value: e.quantity,
				min: "1",
				type: "number",
				onInput: (t) => n("quantityInput", e.key, t)
			}, null, 40, NC),
			H("span", null, A(F(mC)(e)), 1),
			e.source === "custom" ? (z(), B("button", {
				key: 0,
				type: "button",
				onClick: (t) => n("removeCustomTrapping", e.key)
			}, " Remove ", 8, PC)) : (z(), B("span", FC))
		], 2))), 128))]));
	}
}), LC = { class: "npc-builder__stack" }, RC = { class: "npc-builder__panel" }, zC = { class: "npc-builder__panel-actions" }, BC = ["disabled"], VC = { key: 0 }, HC = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, UC = /* @__PURE__ */ I({
	__name: "NpcBuilderTrappingsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = uv(), { trappings: r } = Rh(n), i = /* @__PURE__ */ P(""), a = /* @__PURE__ */ P(!1), o = K(() => r.value.filter((e) => !e.ignored && e.resolution.status === "unresolved"));
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
		return (e, t) => (z(), B("section", LC, [H("section", RC, [
			t[0] ||= H("div", { class: "npc-builder__panel-heading" }, [H("span", null, "1"), H("h2", null, "Trappings")], -1),
			U(Dl, {
				class: "npc-builder__drop npc-builder__drop--career",
				description: "Add weapons, armour, containers, or any other item.",
				title: "Drop Trapping Items",
				onDropData: d
			}),
			H("div", zC, [H("button", {
				disabled: a.value || !o.value.length,
				type: "button",
				onClick: u
			}, A(a.value ? "Resolving..." : "Resolve Trappings"), 9, BC), o.value.length ? (z(), B("span", VC, A(o.value.length) + " unresolved ", 1)) : G("", !0)]),
			i.value ? (z(), B("p", HC, A(i.value), 1)) : G("", !0),
			U(IC, {
				trappings: F(r),
				onQuantityInput: s,
				onRemoveCustomTrapping: F(n).removeCustomTrapping,
				onResolutionChange: l,
				onUseChange: c
			}, null, 8, ["trappings", "onRemoveCustomTrapping"])
		])]));
	}
}), WC = { class: "npc-builder__subview-stack" }, GC = { class: "npc-builder__field" }, KC = ["onUpdate:modelValue"], qC = ["value"], JC = ["onUpdate:modelValue", "placeholder"], YC = {
	key: 0,
	class: "npc-builder__suggestions"
}, XC = { key: 0 }, ZC = ["onClick"], QC = {
	key: 0,
	class: "npc-builder__linked-note"
}, $C = { class: "npc-builder__subview-actions" }, ew = /* @__PURE__ */ I({
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
		return (t, r) => (z(), B("div", WC, [
			r[4] ||= H("p", null, " Some Career skills need a specialization before they become concrete WFRP skills. Blank rows can be left unresolved and edited later. ", -1),
			(z(!0), B(R, null, L(e.prompt.rows, (t) => (z(), B("section", {
				key: t.resolutionKey,
				class: "npc-builder__resolution-row"
			}, [
				H("div", null, [H("strong", null, A(e.getSkillResolutionLabel(t)), 1), H("small", null, A(t.careerLabel), 1)]),
				H("label", GC, [r[3] ||= H("span", null, "Specialization", -1), t.options.length > 1 ? Vn((z(), B("select", {
					key: 0,
					"onUpdate:modelValue": (e) => t.resolvedSpecialization = e
				}, [r[2] ||= H("option", { value: "" }, "Leave unresolved", -1), (z(!0), B(R, null, L(t.options, (e) => (z(), B("option", {
					key: e,
					value: e
				}, A(e), 9, qC))), 128))], 8, KC)), [[os, t.resolvedSpecialization]]) : Vn((z(), B("input", {
					key: 1,
					"onUpdate:modelValue": (e) => t.resolvedSpecialization = e,
					placeholder: t.suggestedSpecializations.length ? "Type or choose below" : t.specialization,
					type: "text"
				}, null, 8, JC)), [[as, t.resolvedSpecialization]])]),
				e.usesFreeformSkillSpecialization(t) ? (z(), B("div", YC, [t.isLoadingSuggestions ? (z(), B("small", XC, "Finding known choices.")) : G("", !0), (z(!0), B(R, null, L(t.suggestedSpecializations, (e) => (z(), B("button", {
					key: `${t.resolutionKey}:${e}`,
					type: "button",
					onClick: (r) => n("chooseSkillSpecialization", t, e)
				}, A(e), 9, ZC))), 128))])) : G("", !0)
			]))), 128)),
			e.prompt.linkedRows.length ? (z(), B("div", QC, A(e.prompt.linkedRows.length) + " linked skill specialization" + A(e.prompt.linkedRows.length === 1 ? "" : "s") + " will reuse earlier choices from this career chain. ", 1)) : G("", !0),
			H("div", $C, [H("button", {
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
function tw(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderBuild.ts
function nw(e, t, n, r, i) {
	let a = uv(), { advancements: o, buildTraits: s, careers: c, finalActorName: l, finalPortraitPath: u, selectedBaseActor: d, selectedSpells: f, settings: p, trappings: m } = Rh(a), h = /* @__PURE__ */ P(!1), g = K(() => !!(d.value && c.value.length && !h.value && !i.value));
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
			r.value = tw(e), n.value = "";
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
function rw(e) {
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
function iw(e) {
	return [{
		career: e,
		mode: "add-or-increment"
	}];
}
function aw(e) {
	return [...e.candidates.filter((t) => e.selectedUuids.includes(t.uuid)).map((e) => ({
		career: e,
		mode: "add-if-missing"
	})), {
		career: e.droppedCareer,
		mode: "add-or-increment"
	}];
}
function ow(e) {
	let t = e.candidates.filter((t) => e.selectedUuids.includes(t.uuid)).length;
	return t === 0 ? "" : `Added ${t} lower-tier career candidate${t === 1 ? "" : "s"}.`;
}
function sw(e, t) {
	return e?.selectedUuids.includes(t) ?? !1;
}
function cw(e, t, n, r) {
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
function lw(e, t) {
	let n = /* @__PURE__ */ new Map(), r = [], i = [];
	for (let a of e) {
		let e = /* @__PURE__ */ new Map();
		for (let o of o_(a.career.uuid, a.career.grants.skills)) {
			let s = a_(o.originalName);
			if (!s) continue;
			let c = s_(o.originalName), l = n.get(c) ?? [], u = e.get(c) ?? 0, d = t.enableLinkedSkillResolution && l[u] ? l[u] : "";
			if (e.set(c, u + 1), d) {
				r.push({
					linkedFromKey: d,
					resolutionKey: o.resolutionKey
				});
				continue;
			}
			i.push({
				baseName: s.baseName,
				careerLabel: mw(a.career),
				isLoadingSuggestions: !1,
				occurrence: o.occurrence,
				options: s.options,
				originalName: s.originalName,
				resolvedSpecialization: hw(s),
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
function uw(e) {
	return e.resolvedSpecialization.trim() ? r_(e.baseName, e.resolvedSpecialization) : "";
}
function dw(e) {
	return e.occurrence > 0 ? `${e.originalName}, choice ${e.occurrence + 1}` : e.originalName;
}
function fw(e) {
	return e.options.length <= 1 && e.specialization.trim().toLocaleLowerCase() === "any";
}
function pw(e, t) {
	e.resolvedSpecialization = t;
}
function mw(e) {
	return e.level === null ? e.name : `${e.name}, tier ${e.level}`;
}
function hw(e) {
	return e.specialization.trim().toLocaleLowerCase() === "any" ? "" : e.options[0] ?? "";
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/skill-specialization-suggestions.ts
async function gw(e, t) {
	await Promise.all(t.rows.map(async (t) => {
		if (fw(t)) {
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
function _w(e, t, n) {
	let r = uv(), { careers: i, settings: a } = Rh(r), o = /* @__PURE__ */ P(!1), s = /* @__PURE__ */ P(null), c = /* @__PURE__ */ P(null), l = K(() => rw(s.value));
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
		m(iw(e), {
			enableLinkedSkillResolution: !1,
			message: ""
		});
	}
	function m(t, n) {
		let r = lw(t, n);
		if (r.rows.length) {
			c.value = r, gw(e, c.value);
			return;
		}
		y(t, n.message);
	}
	function h() {
		let e = s.value;
		e && (s.value = null, m(aw(e), {
			enableLinkedSkillResolution: !a.value.askForLinkedSkillSpecializations,
			message: ow(e)
		}));
	}
	function g() {
		let e = s.value;
		e && (s.value = null, p(e.droppedCareer));
	}
	function _() {
		let e = c.value;
		if (e) {
			for (let t of e.rows) r.setSkillGrantResolution(t.resolutionKey, uw(t));
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
			n.value = tw(e);
		}
	}
	function x(e) {
		return i.value.some((t) => t.uuid === e);
	}
	function S(e) {
		return sw(s.value, e);
	}
	function C(e, t) {
		cw(s.value, e, t, x);
	}
	return {
		chooseSkillSpecialization: pw,
		confirmLowerCareerPrompt: h,
		confirmSkillResolutionPrompt: _,
		dismissLowerCareerPrompt: g,
		dismissSkillResolutionPrompt: v,
		getSkillResolutionLabel: dw,
		handleCareerDrop: u,
		isCareerQueued: x,
		isFindingLowerCareers: o,
		isLowerCareerSelected: S,
		lowerCareerCandidateGroups: l,
		pendingLowerCareerPrompt: s,
		pendingSkillResolutionPrompt: c,
		setLowerCareerSelected: C,
		usesFreeformSkillSpecialization: fw
	};
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderInitialData.ts
function vw(e, t) {
	let n = uv(), { selectedBaseActorUuid: r, settings: i } = Rh(n), a = /* @__PURE__ */ P(!1), o = /* @__PURE__ */ P(!1), s = /* @__PURE__ */ P([]);
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
			t.value = tw(e);
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
			t.value = tw(e), n.clearBaseDraftData();
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
function yw(e) {
	let t = uv(), { advancements: n } = Rh(t), r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), a = K(() => {
		let e = /* @__PURE__ */ new Set();
		for (let t of n.value) t.kind === "skill" && !t.characteristicKey && !a_(t.name) && e.add(t.name);
		return [...e];
	}), o = K(() => {
		let e = /* @__PURE__ */ new Set();
		for (let t of n.value) t.kind === "talent" && !t.talentMaximumKey && e.add(t.name);
		return [...e];
	});
	Jn(a, async (n) => {
		let i = bw(n, r);
		if (i.length) try {
			let n = await e.listSkillCharacteristics(i);
			t.hydrateSkillCharacteristics(n);
		} catch {}
	}, { immediate: !0 }), Jn(o, async (n) => {
		let r = bw(n, i);
		if (r.length) try {
			let n = await e.listTalentMaximums(r);
			t.hydrateTalentMaximums(n);
		} catch {}
	}, { immediate: !0 });
}
function bw(e, t) {
	return e.filter((e) => {
		let n = s_(e);
		return t.has(n) ? !1 : (t.add(n), !0);
	});
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp.vue?vue&type=script&setup=true&lang.ts
var xw = { class: "npc-builder" }, Sw = { class: "npc-builder__header" }, Cw = { class: "npc-builder__header-actions" }, ww = {
	"aria-label": "NPC Builder sections",
	class: "npc-builder__tabs"
}, Tw = ["disabled"], Ew = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, Dw = {
	key: 1,
	class: "npc-builder__message"
}, Ow = /* @__PURE__ */ I({
	__name: "NpcBuilderApp",
	props: { bridge: {} },
	setup(e) {
		let t = e, { hasMagicAccess: n, selectedSpells: r } = Rh(uv()), i = /* @__PURE__ */ P("builder"), a = /* @__PURE__ */ P(""), o = /* @__PURE__ */ P(""), { chooseSkillSpecialization: s, confirmLowerCareerPrompt: c, confirmSkillResolutionPrompt: l, dismissLowerCareerPrompt: u, dismissSkillResolutionPrompt: d, getSkillResolutionLabel: f, handleCareerDrop: p, isCareerQueued: m, isFindingLowerCareers: h, isLowerCareerSelected: g, lowerCareerCandidateGroups: _, pendingLowerCareerPrompt: v, pendingSkillResolutionPrompt: y, setLowerCareerSelected: b, usesFreeformSkillSpecialization: x } = _w(t.bridge, a, o), { buildNpc: S, canBuild: C } = nw(t.bridge, i, a, o, h), { isLoadingActors: w, isLoadingBaseDraft: ee, traitDifficultyOptions: T } = vw(t.bridge, o);
		return yw(t.bridge), (e, h) => (z(), B("main", xw, [
			H("header", Sw, [h[7] ||= H("div", null, [H("p", null, "WFRP4e Customizer"), H("h1", null, "NPC Builder")], -1), H("div", Cw, [H("nav", ww, [
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
			}, "Build NPC", 8, Tw)])]),
			U(Fs, {
				open: F(v) !== null,
				title: "Add Lower-Tier Careers?",
				onClose: F(u)
			}, {
				default: Bn(() => [F(v) ? (z(), V(mv, {
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
			U(Fs, {
				open: F(y) !== null,
				title: "Resolve Skill Specializations",
				onClose: F(d)
			}, {
				default: Bn(() => [F(y) ? (z(), V(ew, {
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
			o.value ? (z(), B("p", Ew, A(o.value), 1)) : a.value ? (z(), B("p", Dw, A(a.value), 1)) : G("", !0),
			i.value === "settings" ? (z(), V(hS, {
				key: 2,
				bridge: t.bridge
			}, null, 8, ["bridge"])) : i.value === "advancements" ? (z(), V(by, { key: 3 })) : i.value === "trappings" ? (z(), V(UC, {
				key: 4,
				bridge: t.bridge
			}, null, 8, ["bridge"])) : i.value === "traits" ? (z(), V(fC, {
				key: 5,
				bridge: t.bridge,
				"difficulty-options": F(T)
			}, null, 8, ["bridge", "difficulty-options"])) : i.value === "spells" ? (z(), V(YS, {
				key: 6,
				bridge: t.bridge
			}, null, 8, ["bridge"])) : (z(), V(dx, {
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
function kw(e) {
	return {
		characteristics: Aw(e),
		skills: jw(e),
		talents: Nw(e, [["talents", "value"], ["talents"]]),
		trappings: Nw(e, [["trappings", "value"], ["trappings"]])
	};
}
function Aw(e) {
	let t = Nw(e, [["characteristics", "value"], ["characteristics"]]);
	if (t.length) return t.map(Mw);
	let n = X(e, ["characteristics"]);
	if (!Y(n)) return [];
	let r = [];
	for (let [e, t] of Object.entries(n)) t && r.push(Mw(e));
	return Fw(r);
}
function jw(e) {
	return Nw(e, [["skills", "value"], ["skills"]], { preserveDuplicates: !0 });
}
function Mw(e) {
	let t = e.trim().toLocaleLowerCase();
	if (vc(t)) return gc[t];
	let n = _c[t];
	return n ? gc[n] : e.trim();
}
function Nw(e, t, n = {}) {
	for (let r of t) {
		let t = wp(X(e, r));
		if (t.length) return n.preserveDuplicates ? Pw(t) : Fw(t);
	}
	return [];
}
function Pw(e) {
	return e.map((e) => e.trim()).filter(Boolean);
}
function Fw(e) {
	return [...new Set(Pw(e))].sort((e, t) => e.localeCompare(t));
}
//#endregion
//#region src/module/foundry/compendiums.ts
function Iw(e, t) {
	return t.uuid ? t.uuid : t._id && e.getUuid ? e.getUuid(t._id) : "";
}
function Lw(e) {
	return e.documentName === "Item" || Z(e, ["metadata", "type"]) === "Item" || Z(e, ["metadata", "documentName"]) === "Item";
}
function Rw(e) {
	return Array.isArray(e) ? e.filter(Bw) : Y(e) && Array.isArray(e.contents) ? e.contents.filter(Bw) : Vw(e) ? [...e].flatMap((e) => {
		let t = Array.isArray(e) ? e[1] : e;
		return Bw(t) ? [t] : [];
	}) : [];
}
function zw() {
	return new Promise((e) => {
		globalThis.setTimeout(e, 0);
	});
}
function Bw(e) {
	return Y(e);
}
function Vw(e) {
	return Y(e) && Symbol.iterator in e;
}
//#endregion
//#region src/module/wfrp4e/career-summary.ts
function Hw(e) {
	return {
		careerGroup: Uw(e),
		grants: kw(e.system),
		img: e.img ?? "",
		level: Ww(e),
		name: e.name,
		uuid: e.uuid
	};
}
function Uw(e) {
	return Z(e.system, ["careergroup", "value"]);
}
function Ww(e) {
	let t = X(e.system, ["level", "value"]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
//#endregion
//#region src/module/wfrp4e/career-index.ts
var Gw = [
	"name",
	"type",
	"img",
	"system.careergroup.value",
	"system.characteristics",
	"system.level.value",
	"system.skills",
	"system.talents",
	"system.trappings"
], Kw = /* @__PURE__ */ new Map(), qw = "idle", Jw = null;
function Yw() {
	return Jw || (qw = "indexing", Kw.clear(), Jw = Zw().then(() => {
		qw = "ready";
	}).catch((e) => {
		qw = "error", t("wfrp4e-customizer-apps | Career indexing failed.", e);
	}), Jw);
}
async function Xw(e) {
	return qw === "idle" && Yw(), !e.careerGroup || e.level === null ? [] : [...Kw.values()].filter((t) => nT(t, e)).sort(iT);
}
async function Zw() {
	Qw(), await zw();
	for (let e of game.packs ?? []) {
		if (!Lw(e) || !e.getIndex) continue;
		let t = await e.getIndex({ fields: Gw });
		for (let n of Rw(t)) {
			let t = $w(e, n);
			t && Kw.set(t.uuid, t);
		}
		await zw();
	}
}
function Qw() {
	for (let e of game.items?.contents ?? []) e.type === "career" && Kw.set(e.uuid, Hw(e));
}
function $w(e, t) {
	let n = Iw(e, t);
	if (t.type !== "career" || !t.name || !n) return null;
	let r = X(t, ["system"]);
	return {
		careerGroup: eT(t),
		grants: kw(r),
		img: t.img ?? "",
		level: tT(t),
		name: t.name,
		uuid: n
	};
}
function eT(e) {
	let t = X(e, [
		"system",
		"careergroup",
		"value"
	]);
	return typeof t == "string" ? t.trim() : "";
}
function tT(e) {
	let t = X(e, [
		"system",
		"level",
		"value"
	]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
function nT(e, t) {
	return e.uuid !== t.uuid && e.level !== null && t.level !== null && e.level < t.level && rT(e.careerGroup) === rT(t.careerGroup);
}
function rT(e) {
	return e.trim().toLocaleLowerCase();
}
function iT(e, t) {
	let n = e.level ?? 0, r = t.level ?? 0;
	return n === r ? e.name.localeCompare(t.name) : n - r;
}
//#endregion
//#region src/module/wfrp4e/skill-specializations.ts
var aT = [
	"name",
	"type",
	"system.characteristic.value"
], oT = /* @__PURE__ */ new Map(), sT = /* @__PURE__ */ new Map(), cT = /* @__PURE__ */ new Map(), lT = "idle", uT = null;
async function dT(e) {
	let t = s_(e);
	return t ? (lT === "idle" && pT(), uT && await uT, [...oT.get(t) ?? []].sort((e, t) => e.localeCompare(t))) : [];
}
async function fT(e) {
	return lT === "idle" && pT(), uT && await uT, e.flatMap((e) => {
		let t = yT(e);
		return t ? [{
			...t,
			skillName: e
		}] : [];
	});
}
function pT() {
	return uT || (lT = "indexing", oT.clear(), sT.clear(), cT.clear(), uT = mT().then(() => {
		lT = "ready";
	}).catch((e) => {
		lT = "error", t("wfrp4e-customizer-apps | Skill specialization indexing failed.", e);
	}), uT);
}
async function mT() {
	bT(), await zw();
	for (let e of game.packs ?? []) {
		if (!Lw(e) || !e.getIndex) continue;
		let t = await e.getIndex({ fields: aT });
		for (let e of Rw(t)) gT(e);
		await zw();
	}
}
function hT(e) {
	if (e.type !== "skill") return;
	_T(e);
	let t = i_(e.name);
	if (!t) return;
	let n = s_(t.baseName), r = oT.get(n) ?? /* @__PURE__ */ new Set();
	r.add(t.specialization), oT.set(n, r);
}
function gT(e) {
	if (e.type !== "skill" || !e.name) return;
	vT(e);
	let t = i_(e.name);
	if (!t) return;
	let n = s_(t.baseName), r = oT.get(n) ?? /* @__PURE__ */ new Set();
	r.add(t.specialization), oT.set(n, r);
}
function _T(e) {
	let t = Z(e.system, ["characteristic", "value"]);
	if (!vc(t)) return;
	let n = {
		characteristicKey: t,
		characteristicName: gc[t],
		skillName: e.name
	}, r = s_(e.name), i = s_(i_(e.name)?.baseName ?? e.name);
	sT.set(r, n), cT.has(i) || cT.set(i, n);
}
function vT(e) {
	let t = Z(e, [
		"system",
		"characteristic",
		"value"
	]);
	if (!vc(t) || !e.name) return;
	let n = {
		characteristicKey: t,
		characteristicName: gc[t],
		skillName: e.name
	}, r = s_(e.name), i = s_(i_(e.name)?.baseName ?? e.name);
	sT.set(r, n), cT.has(i) || cT.set(i, n);
}
function yT(e) {
	let t = s_(e), n = s_(i_(e)?.baseName ?? e);
	return sT.get(t) ?? cT.get(n) ?? null;
}
function bT() {
	for (let e of game.items?.contents ?? []) hT(e);
}
//#endregion
//#region src/module/foundry/item-sources.ts
function xT(e, t) {
	return {
		img: "systems/wfrp4e/icons/blank.png",
		name: e,
		system: {},
		type: t
	};
}
function ST(e, t, n) {
	let r = e ? e.toObject() : xT(t, n);
	return delete r._id, r;
}
function CT(e, t, n) {
	return e.items?.contents.find((e) => e.type === n && ET(e.name, t)) ?? null;
}
function wT(e, t, n) {
	return e.items?.contents.find((e) => t && e.uuid === t ? !0 : ET(e.name, n)) ?? null;
}
function TT(e, t) {
	return game.items?.contents.find((n) => t.includes(n.type) && ET(n.name, e)) ?? null;
}
function ET(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/wfrp4e/item-lookup.ts
async function DT(e, t) {
	return await game.wfrp4e?.utility?.findItem?.(e, t) || TT(e, t);
}
//#endregion
//#region src/module/wfrp4e/talent-maximums.ts
async function OT(e) {
	let t = [];
	for (let n of kT(e)) {
		let e = await DT(n, ["talent"]);
		e && t.push({
			maximumFormula: Z(e.system, ["max", "formula"]),
			maximumKey: Z(e.system, ["max", "value"]),
			talentName: n
		});
	}
	return t;
}
function kT(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.trim().toLocaleLowerCase();
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
//#endregion
//#region src/module/apps/npc-builder/settings.ts
var AT = "npcBuilderSettings", jT = O_(), MT = Xh({
	defaultValue: jT,
	key: AT,
	name: "NPC Builder Settings",
	normalize: IT
});
function NT() {
	Zh(MT);
}
function PT() {
	return Qh(MT);
}
async function FT(e) {
	return await $h(MT, e);
}
function IT(e) {
	if (typeof e != "object" || !e) return { ...jT };
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
		lowerCareerMode: LT(t.lowerCareerMode) ? t.lowerCareerMode : "prompt",
		outputActorFolderUuid: typeof t.outputActorFolderUuid == "string" ? t.outputActorFolderUuid : "",
		quickTraitFolderUuid: typeof t.quickTraitFolderUuid == "string" ? t.quickTraitFolderUuid : "",
		searchCompendiumPortraitAssets: t.searchCompendiumPortraitAssets ?? !0,
		searchFoundryPortraitAssets: t.searchFoundryPortraitAssets ?? !1,
		searchWebPortraitAssets: t.searchWebPortraitAssets ?? !1
	};
}
function LT(e) {
	return e === "auto-add-all" || e === "never" || e === "prompt";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/advancements.ts
async function RT(e, t) {
	let n = {}, r = [], i = [];
	for (let a of t) {
		let t = Math.floor(a.current);
		if (t === 0) continue;
		let o = a.baseAdvances + t;
		if (a.kind === "characteristic") {
			WT(n, a, o);
			continue;
		}
		let s = CT(e, a.name, a.kind);
		if (s) {
			r.push({
				_id: s.id,
				"system.advances.value": o
			});
			continue;
		}
		let c = ST(await DT(a.name, [a.kind]), a.name, a.kind);
		c.type = a.kind, Tp(c, [
			"system",
			"advances",
			"value"
		], o), i.push(c);
	}
	Object.keys(n).length && await e.update(n), r.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", r), i.length && await e.createEmbeddedDocuments("Item", i);
}
function zT(e) {
	let t = [];
	for (let [n, r] of Object.entries(gc)) {
		let i = xp(e.system, [[
			"characteristics",
			n,
			"advances",
			"value"
		], [
			"characteristics",
			n,
			"advances"
		]]), a = xp(e.system, [
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
function BT(e, t) {
	return e.items?.contents.filter((e) => e.type === t).map((n) => VT(e, n, t)) ?? [];
}
function VT(e, t, n) {
	let r = xp(t.system, [["advances", "value"], ["advances"]]);
	if (n === "talent") return {
		baseAdvances: r,
		current: r,
		kind: n,
		name: t.name,
		talentMaximumFormula: Z(t.system, ["max", "formula"]),
		talentMaximumKey: Z(t.system, ["max", "value"])
	};
	let i = HT(t), a = i ? UT(e, i) : 0, o = Sp(t.system, [["total", "value"], ["total"]]), s = o !== null && i ? Math.max(0, o - a) : 0, c = Math.max(r, s), l = {
		baseAdvances: c,
		current: i ? a + c : c,
		kind: n,
		name: t.name
	};
	return i && (l.characteristicKey = i, l.characteristicName = gc[i]), l;
}
function HT(e) {
	let t = Z(e.system, ["characteristic", "value"]);
	return vc(t) ? t : void 0;
}
function UT(e, t) {
	return xp(e.system, [
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
function WT(e, t, n) {
	let r = _c[t.name.trim().toLocaleLowerCase()];
	r && (e[`system.characteristics.${r}.advances`] = n);
}
//#endregion
//#region src/module/foundry/embedded-items.ts
function GT() {
	return {
		creates: [],
		deletes: [],
		updates: []
	};
}
async function KT(e, t) {
	t.deletes.length && e.deleteEmbeddedDocuments && await e.deleteEmbeddedDocuments("Item", t.deletes), t.updates.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", t.updates), t.creates.length && await e.createEmbeddedDocuments("Item", t.creates);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/config.ts
function qT(e, t) {
	Tp(e, [
		"system",
		"specification",
		"value"
	], t.specification), t.rollable && !t.damage && Tp(e, [
		"system",
		"rollable",
		"defaultDifficulty"
	], t.defaultDifficulty), t.damage && t.dice && Tp(e, [
		"system",
		"rollable",
		"dice"
	], t.dice);
}
function JT(e, t) {
	return {
		_id: e,
		"system.specification.value": t.specification,
		...t.rollable && !t.damage ? { "system.rollable.defaultDifficulty": t.defaultDifficulty } : {},
		...t.damage && t.dice ? { "system.rollable.dice": t.dice } : {}
	};
}
function YT(e) {
	return {
		...Gg(),
		attackType: $T(e.system, ["rollable", "attackType"]) || "melee",
		bonusCharacteristic: $T(e.system, ["rollable", "bonusCharacteristic"]),
		damage: Cp(e.system, [["rollable", "damage"]]),
		defaultDifficulty: $T(e.system, ["rollable", "defaultDifficulty"]) || "challenging",
		dice: $T(e.system, ["rollable", "dice"]),
		rollable: Cp(e.system, [["rollable", "value"]]),
		skill: $T(e.system, ["rollable", "skill"]),
		sl: Cp(e.system, [["rollable", "SL"]], !0),
		specification: $T(e.system, ["specification", "value"])
	};
}
function XT(e) {
	return QT(e.system);
}
function ZT(e) {
	return QT(e.system);
}
function QT(e) {
	return Cp(e, [["disabled"], ["disabled", "value"]]);
}
function $T(e, t) {
	let n = X(e, t);
	return typeof n == "string" ? n.trim() : typeof n == "number" ? String(n) : "";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/apply.ts
async function eE(e, t) {
	let n = GT();
	for (let r of t) {
		let t = r.source === "base" ? wT(e, r.sourceUuid, r.name) : CT(e, r.name, "trait");
		if (r.ignored) {
			t && n.deletes.push(t.id);
			continue;
		}
		if (t) {
			n.updates.push(JT(t.id, r.config));
			continue;
		}
		let i = ST(r.sourceUuid ? await tE(r.sourceUuid) : await DT(r.name, ["trait"]), r.name, "trait");
		i.type = "trait", Tp(i, ["system", "disabled"], !1), qT(i, r.config), n.creates.push(i);
	}
	await KT(e, n);
}
async function tE(e) {
	let t = await fromUuid(e);
	return fg(t) ? t : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/actor-traits.ts
function nE(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && !XT(e)).map(aE) ?? [];
}
function rE(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && XT(e)).map(aE) ?? [];
}
function iE(e) {
	Array.isArray(e.items) && (e.items = e.items.filter((e) => {
		if (typeof e != "object" || !e) return !0;
		let t = e;
		return t.type !== "trait" || !ZT(t);
	}));
}
function aE(e) {
	return {
		config: YT(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/difficulty-options.ts
var oE = [
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
async function sE() {
	let e = X(game.wfrp4e?.config, ["difficultyLabels"]);
	if (!Y(e)) return oE;
	let t = Object.entries(e).filter((e) => {
		let [t, n] = e;
		return !!t.trim() && typeof n == "string";
	}).map(([e, t]) => ({
		label: t,
		value: e
	}));
	return t.length ? t : oE;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/drops.ts
async function cE(e) {
	let t = gg(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Trait item here.");
	let n = hg(await fromUuid(t.uuid), "trait", "Drop a Foundry Trait item here.");
	return {
		config: YT(n),
		ignored: !1,
		key: `custom:${n.uuid}`,
		name: n.name,
		source: "custom",
		sourceUuid: n.uuid
	};
}
//#endregion
//#region src/functions/npc-builder/recommended-quick-traits.ts
var lE = [
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
async function uE(e) {
	return _E(await gE(e, "Actor"));
}
async function dE(e) {
	return _E(await gE(e, "Item"));
}
function fE() {
	return game.folders.contents.filter((e) => e.type === "Actor").map(_E).sort((e, t) => e.name.localeCompare(t.name));
}
function pE() {
	return game.folders.contents.filter((e) => e.type === "Item").map(_E).sort((e, t) => e.name.localeCompare(t.name));
}
function mE(e) {
	return e ? game.folders.contents.find((t) => t.uuid === e) ?? null : null;
}
function hE(e) {
	let t = mE(e);
	return t?.type === "Item" ? t : null;
}
async function gE(e, t) {
	let n = e.trim();
	if (!n) throw Error("Enter a folder name first.");
	let r = game.folders.contents.find((e) => e.type === t && vE(e.name, n));
	if (r) return r;
	let i = await Folder.create({
		name: n,
		type: t
	});
	if (!i) throw Error("Foundry did not create the folder.");
	return i;
}
function _E(e) {
	return {
		name: e.name,
		uuid: e.uuid
	};
}
function vE(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/quick-traits.ts
async function yE(e) {
	let t = hE(e.quickTraitFolderUuid);
	if (!t) throw Error("Choose a Quick Traits item folder before importing traits.");
	let n = new Set(SE(e).map((e) => e.name.trim().toLocaleLowerCase()));
	for (let e of lE) {
		if (n.has(e.trim().toLocaleLowerCase())) continue;
		let r = ST(await DT(e, ["trait"]), e, "trait");
		r.folder = t.id, r.type = "trait", await Item.create(r);
	}
	return ui.notifications?.info("Imported recommended quick traits."), await bE(e);
}
async function bE(e) {
	return SE(e).map(CE).sort((e, t) => e.name.localeCompare(t.name));
}
function xE(e, t) {
	return t.quickTraitFolderUuid ? e.folder?.uuid === t.quickTraitFolderUuid : !1;
}
function SE(e) {
	return game.items?.contents.filter((t) => t.type === "trait" && xE(t, e)) ?? [];
}
function CE(e) {
	return {
		config: YT(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/trappings.ts
var wE = [
	"ammunition",
	"armour",
	"container",
	"money",
	"trapping",
	"weapon"
];
async function TE(e, t) {
	let n = GT();
	for (let r of t) {
		let t = r.source === "base" ? wT(e, r.sourceUuid, r.name) : null;
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
		let i = await jE(r), a = r.resolution.selectedItemType || r.itemType || "trapping", o = ST(i, r.resolution.selectedName || r.name, a);
		o.type = a || o.type || "trapping", Tp(o, [
			"system",
			"quantity",
			"value"
		], r.quantity), n.creates.push(o);
	}
	await KT(e, n);
}
async function EE(e) {
	return $_(e, await ME());
}
async function DE(e) {
	let t = gg(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Item here.");
	let n = mg(await fromUuid(t.uuid), "Drop a Foundry Item here.");
	return {
		ignored: !1,
		itemType: n.type,
		key: `custom:${n.uuid}`,
		name: n.name,
		quantity: kE(n),
		resolution: Z_({
			itemType: n.type,
			name: n.name,
			uuid: n.uuid
		}),
		source: "custom",
		sourceUuid: n.uuid
	};
}
function OE(e) {
	let t = AE();
	return e.items?.contents.filter((e) => t.includes(e.type)).map((e) => ({
		itemType: e.type,
		name: e.name,
		quantity: kE(e),
		uuid: e.uuid
	})) ?? [];
}
function kE(e) {
	return xp(e.system, [["quantity", "value"], ["quantity"]]) || 1;
}
function AE() {
	let e = bp(game.wfrp4e?.config, ["trappingItems"]);
	return e.length ? e : wE;
}
async function jE(e) {
	if (e.sourceUuid) {
		let t = await fromUuid(e.sourceUuid);
		return fg(t) ? t : null;
	}
	if (e.resolution.selectedCandidateUuid) {
		let t = await fromUuid(e.resolution.selectedCandidateUuid);
		return fg(t) ? t : null;
	}
	return e.resolution.status === "fallback" ? null : await DT(e.resolution.selectedName || e.name, AE());
}
async function ME() {
	let e = [], t = AE();
	for (let n of game.items?.contents ?? []) t.includes(n.type) && e.push(PE(n, "World"));
	for (let n of game.packs ?? []) {
		if (!Lw(n)) continue;
		let r = await NE(n, t);
		if (r.length) {
			e.push(...r);
			continue;
		}
		if (!n.getDocuments) continue;
		let i = await n.getDocuments();
		for (let r of i) fg(r) && t.includes(r.type) && e.push(PE(r, n.title ?? "Compendium"));
	}
	return e;
}
async function NE(e, t) {
	return e.getIndex ? Rw(await e.getIndex({ fields: ["name", "type"] })).filter((n) => !!(n.name && n.type && Iw(e, n) && t.includes(n.type))).map((t) => ({
		itemType: t.type ?? "trapping",
		name: t.name ?? "",
		sourceLabel: e.title ?? "Compendium",
		uuid: Iw(e, t)
	})) : [];
}
function PE(e, t) {
	return {
		itemType: e.type,
		name: e.name,
		sourceLabel: t,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/actors.ts
function FE(e) {
	return game.actors.contents.filter((t) => VE(t, e)).map(RE);
}
async function IE(e) {
	let t = pg(await fromUuid(e));
	return {
		advancements: [
			...zT(t),
			...BT(t, "skill"),
			...BT(t, "talent")
		],
		optionalTraits: rE(t),
		traits: nE(t),
		trappings: OE(t)
	};
}
async function LE(e) {
	let t = gg(e);
	if (t.type !== "Actor") throw Error("Drop a Foundry Actor here.");
	let n = null;
	return t.uuid ? n = await fromUuid(t.uuid) : t.id && (n = game.actors.get(t.id)), RE(pg(n));
}
function RE(e) {
	return {
		img: e.img ?? "",
		name: e.name,
		prototypeTokenImg: BE(e),
		species: zE(e),
		type: e.type,
		uuid: e.uuid
	};
}
function zE(e) {
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
function BE(e) {
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
function VE(e, t) {
	return t.baseActorFolderUuid ? e.folder?.uuid === t.baseActorFolderUuid : !0;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/constants.ts
var HE = "spell", UE = new Set(F_), WE = new Set(I_);
async function GE() {
	return KE().map((e) => ({
		category: V_(e.key),
		key: e.key,
		label: e.name,
		value: e.name,
		wind: e.wind
	})).sort((e, t) => e.category === t.category ? e.label.localeCompare(t.label) : e.category.localeCompare(t.category));
}
function KE() {
	let e = X(game.wfrp4e?.config, ["magicLores"]), t = X(game.wfrp4e?.config, ["magicWind"]), n = [];
	if (!Y(e)) return [XE()];
	for (let [r, i] of Object.entries(e)) {
		let e = rD(i) || r, a = nD(t, r);
		n.push({
			key: r,
			matchTerms: tD(r, e, a),
			name: e,
			wind: a
		});
	}
	return n.some((e) => e.key === "petty") || n.push(XE()), n;
}
function qE(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) {
		if (r.isAmbiguous) continue;
		if (r.kind === "petty-magic") {
			let e = eD("petty magic", t);
			e && n.set(e.key, e);
			continue;
		}
		let e = eD(r.rawLore, t);
		e && n.set(e.key, e);
	}
	return [...n.values()];
}
function JE(e, t) {
	let n = [...YE(e.system), $E(e.name)].filter(Boolean);
	for (let e of n) {
		let n = QE(e, t);
		if (n) return n;
		let r = eD(e, t);
		if (r) return r;
	}
	return null;
}
function YE(e) {
	return [
		...wp(X(e, ["lore", "value"])),
		...wp(X(e, ["lore"])),
		...wp(X(e, ["magicLore", "value"])),
		...wp(X(e, ["magicLore"])),
		...wp(X(e, ["category", "value"])),
		...wp(X(e, [
			"system",
			"lore",
			"value"
		])),
		...wp(X(e, ["system", "lore"])),
		...wp(X(e, ["system.lore.value"])),
		...wp(X(e, ["system.lore"]))
	];
}
function XE() {
	return {
		key: "petty",
		matchTerms: ["petty", "petty magic"],
		name: "Petty Magic",
		wind: ""
	};
}
function ZE(e) {
	let t = e.trim() || "Unknown Lore";
	return {
		key: R_(t) || "unknown",
		matchTerms: [t],
		name: t,
		wind: ""
	};
}
function QE(e, t) {
	let n = R_(e);
	return n === "lore" ? t.find((e) => e.key !== "petty") ?? null : n === "the eight winds" || n === "eight winds" ? t.find((e) => UE.has(e.key)) ?? null : n === "dark lore" ? t.find((e) => WE.has(e.key)) ?? null : null;
}
function $E(e) {
	return /\(([^)]+)\)\s*$/.exec(e)?.[1]?.trim() ?? "";
}
function eD(e, t) {
	let n = R_(e);
	return n ? t.find((e) => e.matchTerms.some((e) => R_(e) === n)) ?? null : null;
}
function tD(e, t, n) {
	let r = /* @__PURE__ */ new Set(), i = R_(e), a = R_(t);
	for (let i of [
		e,
		t,
		n
	]) i.trim() && r.add(i.trim());
	return (i === "petty" || a === "petty") && r.add("Petty Magic"), (i === "shadow" || a === "shadow") && r.add("Shadows"), t && !/^lore of /i.test(t) && r.add(`Lore of ${t}`), [...r];
}
function nD(e, t) {
	return Y(e) ? rD(e[t]) : "";
}
function rD(e) {
	return typeof e == "string" ? e.trim() : Y(e) ? Z(e, ["name"]) || Z(e, ["label"]) || Z(e, ["value"]) : "";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/debug.ts
var iD = "[WFRP Customizer Apps][Spell Lookup]";
function aD(t, n) {
	if (n) {
		e(`${iD} ${t}`, n);
		return;
	}
	e(`${iD} ${t}`);
}
function oD(e, n) {
	t(`${iD} ${e}`, n);
}
function sD(e) {
	return [
		e.title ?? "",
		e.collection ?? "",
		Z(e, ["metadata", "type"]),
		Z(e, ["metadata", "documentName"]),
		e.documentName
	].filter(Boolean).join(" | ");
}
function cD(e) {
	return {
		loreTerms: YE(e.system),
		name: e.name,
		sourceLabel: e.sourceLabel,
		uuid: e.uuid
	};
}
function lD(e) {
	return typeof e == "string" ? {
		kind: "uuid-string",
		value: e
	} : Y(e) ? {
		documentName: Z(e, ["documentName"]),
		hasSystem: Y(X(e, ["system"])),
		loreTerms: YE(X(e, ["system"])),
		name: Z(e, ["name"]),
		type: Z(e, ["type"]),
		uuid: Z(e, ["uuid"])
	} : { kind: typeof e };
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/spell-input-conversion.ts
function uD(e, t) {
	return {
		img: e.img ?? "",
		name: e.name,
		sourceLabel: t,
		system: e.system,
		uuid: e.uuid
	};
}
function dD(e) {
	return /^item\./i.test(e.uuid) ? "World" : fD(e.uuid, "WFRP Item Lookup");
}
function fD(e, t) {
	let n = /^Compendium\.([^.]+\.[^.]+)\./.exec(e)?.[1];
	return n ? [...game.packs ?? []].find((e) => e.collection === n)?.title ?? n : t;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/compendium-spell-inputs.ts
async function pD(e) {
	if (aD("Compendium index scan start", { pack: sD(e) }), !e.getIndex) return aD("Compendium has no index; loading documents", { pack: sD(e) }), await gD(e);
	let t = Rw(await e.getIndex({ fields: [
		"name",
		"type",
		"img",
		"system.lore.value"
	] }));
	if (aD("Compendium index loaded", {
		entries: t.length,
		pack: sD(e),
		samples: t.slice(0, 5).map((t) => ({
			hasLoreTerms: YE(t).length > 0,
			name: t.name,
			type: t.type,
			uuid: Iw(e, t)
		}))
	}), !t.length) return aD("Compendium index empty; loading documents", { pack: sD(e) }), await gD(e);
	let n = t.filter(hD);
	aD("Compendium index spell candidates", {
		pack: sD(e),
		spellEntries: n.length
	});
	let r = n.filter((e) => e.name).map((t) => vD(e, t));
	return r.length || !_D(e) ? r : await gD(e);
}
function mD(e) {
	return Lw(e);
}
function hD(e) {
	return e.type === "spell" ? !0 : !!(e.name && (YE(e).length || $E(e.name)));
}
async function gD(e) {
	if (!e.getDocuments) return aD("Compendium has no document loader", { pack: sD(e) }), [];
	aD("Compendium document load start", { pack: sD(e) });
	let t = await e.getDocuments(), n = t.filter((e) => fg(e) && e.type === "spell");
	return aD("Compendium document load complete", {
		documents: t.length,
		pack: sD(e),
		spellDocuments: n.length,
		spellSamples: n.slice(0, 5).map((e) => ({
			loreTerms: YE(e.system),
			name: e.name,
			uuid: e.uuid
		}))
	}), n.map((t) => uD(t, e.title ?? "Compendium"));
}
function _D(e) {
	return e.collection === "wfrp4e-core.items" || e.collection === "wfrp4e-wom.items";
}
function vD(e, t) {
	return {
		img: t.img ?? t.thumb ?? "",
		name: t.name ?? "",
		sourceLabel: e.title ?? "Compendium",
		system: t,
		uuid: Iw(e, t)
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/warhammer-spell-inputs.ts
async function yD() {
	let e = xD();
	if (!e) return aD("WFRP helper unavailable"), [];
	try {
		let t = await e.findAllItems(HE, "Loading Spells", !0, ["system.lore.value"]);
		return aD("WFRP helper raw result", {
			count: t.length,
			samples: t.slice(0, 10).map(lD)
		}), (await Promise.all(t.map((e) => bD(e)))).filter((e) => e !== null);
	} catch (e) {
		return oD("WFRP helper lookup failed.", e), [];
	}
}
async function bD(e) {
	if (typeof e == "string") {
		let t = await fromUuid(e);
		return fg(t) && t.type === "spell" ? uD(t, dD(t)) : null;
	}
	if (fg(e)) return e.type === "spell" ? uD(e, dD(e)) : null;
	if (Z(e, ["type"]) !== "spell") return null;
	let t = Z(e, ["name"]);
	return t ? {
		img: Z(e, ["img"]) || Z(e, ["thumb"]),
		name: t,
		sourceLabel: fD(Z(e, ["uuid"]), "WFRP Item Lookup"),
		system: X(e, ["system"]),
		uuid: Z(e, ["uuid"])
	} : null;
}
function xD() {
	let e = X(globalThis, [
		"warhammer",
		"utility",
		"findAllItems"
	]);
	return typeof e == "function" ? { findAllItems: e } : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/spell-resolution-inputs.ts
async function SD() {
	let e = [], n = [...game.packs ?? []];
	aD("Candidate lookup start", {
		itemPacks: n.filter(mD).length,
		totalPacks: n.length,
		warhammerUtilityAvailable: !!TD(),
		worldItems: game.items?.contents.length ?? 0
	});
	let r = await yD();
	aD("WFRP helper lookup complete", {
		utilityInputs: r.length,
		utilitySamples: r.slice(0, 10).map(cD)
	}), e.push(...r), e.push(...CD()), aD("World spell scan complete", { worldSpellCount: e.filter((e) => e.sourceLabel === "World").length });
	for (let r of n) if (mD(r)) try {
		let t = await pD(r);
		e.push(...t), aD("Compendium spell scan complete", {
			inputCount: t.length,
			pack: sD(r),
			samples: t.slice(0, 5).map(cD)
		});
	} catch (e) {
		t(`wfrp4e-customizer-apps | Spell lookup skipped compendium "${r.title ?? r.collection ?? "unknown"}".`, e);
	}
	let i = wD(e);
	return aD("Candidate lookup complete", {
		rawInputCount: e.length,
		uniqueInputCount: i.length
	}), i;
}
function CD() {
	let e = [];
	for (let t of game.items?.contents ?? []) t.type === "spell" && e.push(uD(t, "World"));
	return e;
}
function wD(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.uuid || n.name.trim().toLocaleLowerCase();
		t.has(e) || t.set(e, n);
	}
	return [...t.values()];
}
function TD() {
	return X(globalThis, [
		"warhammer",
		"utility",
		"findAllItems"
	]);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/index.ts
async function ED(e, t) {
	let n = [];
	for (let r of t) {
		if (!r.selected || CT(e, r.name, "spell")) continue;
		let t = ST(r.sourceUuid ? await kD(r.sourceUuid) : null, r.name, HE);
		t.type = HE, n.push(t);
	}
	n.length && await e.createEmbeddedDocuments("Item", n);
}
async function DD(e) {
	let t = qE(e, KE());
	if (aD("Grant resolution start", {
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
	let n = await SD(), r = /* @__PURE__ */ new Map(), i = [];
	for (let e of n) {
		let n = JE(e, t);
		if (!n) {
			i.length < 20 && i.push({
				loreTerms: YE(e.system),
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
	return aD("Grant resolution complete", {
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
async function OD(e) {
	let t = gg(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Spell item here.");
	let n = hg(await fromUuid(t.uuid), HE, "Drop a Foundry Spell item here."), r = JE(uD(n, "Dropped"), [...KE(), XE()]) ?? ZE(YE(n.system)[0] ?? "");
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
async function kD(e) {
	let t = await fromUuid(e);
	return fg(t) && t.type === "spell" ? t : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/build-npc.ts
async function AD(e) {
	let t = await ND(e);
	if (!t) throw Error("Foundry did not create the NPC Actor.");
	let n = PD(e), r = e.careers.at(-1), i = Bg(e.advancements), a = {
		name: n,
		"prototypeToken.name": n,
		"system.details.gmnotes.value": jD(Z(t.system, [
			"details",
			"gmnotes",
			"value"
		]), i)
	}, o = e.portraitPath || r?.img || "";
	return o && (a.img = o, a["prototypeToken.texture.src"] = o), await t.update(a), await RT(t, e.advancements), await eE(t, e.traits), await TE(t, e.trappings), await ED(t, e.spells), t.sheet?.render(!0), ui.notifications?.info(`Created NPC "${n}".`), {
		name: n,
		uuid: t.uuid
	};
}
function jD(e, t) {
	let n = MD(e).trim(), r = [
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
function MD(e) {
	return e.replaceAll(/<section data-wfrp-customizer-npc-xp="true">[\S\s]*?<\/section>/g, "");
}
async function ND(e) {
	let t = pg(await fromUuid(e.baseActorUuid)).toObject(), n = mE(e.settings.outputActorFolderUuid);
	return delete t._id, delete t.folder, t.type = "npc", iE(t), n && (t.folder = n.id), await Actor.create(t);
}
function PD(e) {
	if (!e.settings.includeSpeciesInName) return e.actorName;
	let t = game.actors.contents.find((t) => t.uuid === e.baseActorUuid), n = t ? zE(t) : "";
	return !n || e.actorName.toLocaleLowerCase().includes(n.toLocaleLowerCase()) ? e.actorName : `${n} ${e.actorName}`;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/careers.ts
async function FD(e) {
	let t = gg(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a WFRP Career item here.");
	return Hw(hg(await fromUuid(t.uuid), "career", "Drop a WFRP Career item here."));
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/candidate-utils.ts
function ID(e, t) {
	let n = t.img.trim().toLocaleLowerCase();
	!n || e.seenPaths.has(n) || (e.seenPaths.add(n), e.candidates.push(t));
}
function LD(e, t) {
	let n = t.imagePaths.filter(({ path: e }) => !!e);
	if (WD(t.name, n, e.searchTerms)) for (let r of n) ID(e, {
		img: r.path,
		key: `foundry-asset:${t.sourceKey}:${r.label}`,
		label: `${t.name || VD(r.path)} ${r.label} (${t.sourceLabel})`,
		source: "foundry-asset"
	});
}
function RD(e, t, n) {
	e?.({
		candidatesFound: t.candidates.length,
		currentLocation: n.currentLocation,
		directoriesVisited: t.visitedDirectories,
		maxDirectories: n.maxDirectories,
		phase: n.phase
	});
}
function zD(e) {
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
function BD(e, t) {
	return `${VD(e)} (${t})`;
}
function VD(e) {
	return e.split(/[/\\]/).at(-1) ?? e;
}
function HD(e) {
	return typeof e == "object" && !!e;
}
function UD(e) {
	return HD(e) && Object.values(e).every((e) => Array.isArray(e) && e.every((e) => typeof e == "string"));
}
function WD(e, t, n) {
	return nx(e, n) || t.some(({ path: e }) => nx(e, n));
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/dig-down.ts
var GD = "fuzzy-foundry", KD = .3, qD = new Set([
	".webp",
	".png",
	".jpg",
	".jpeg",
	".gif"
]);
function JD(e, t) {
	let n = YD();
	if (RD(t, e, {
		currentLocation: ZD(n),
		maxDirectories: 0,
		phase: "filesystem"
	}), !n.digDownActive || !n.digDownCacheReady) return;
	let r = eO();
	if (!(!r?._fileIndexCache || !r.fs)) {
		for (let t of QD(r, e.searchTerms)) $D(e, r, t);
		RD(t, e, {
			currentLocation: "Dig Down file cache search complete",
			maxDirectories: 0,
			phase: "filesystem"
		});
	}
}
function YD() {
	let e = game.modules.get(GD)?.active === !0, t = XD(), n = eO(), r = Object.values(n?._fileIndexCache ?? {}).reduce((e, t) => e + t.length, 0);
	return {
		digDownActive: e,
		digDownCacheReady: !!(n?._fileIndexCache && n.fs),
		digDownDeepFileSearchEnabled: t,
		digDownIndexedFileCount: r
	};
}
function XD() {
	try {
		return game.settings.get(GD, "deepFile") === !0;
	} catch {
		return !1;
	}
}
function ZD(e) {
	return e.digDownActive ? e.digDownDeepFileSearchEnabled ? e.digDownCacheReady ? `Dig Down file cache (${e.digDownIndexedFileCount} files)` : "Waiting for Dig Down file cache" : "Dig Down Deep File Search is disabled" : "Dig Down is not active";
}
function QD(e, t) {
	let n = /* @__PURE__ */ new Set(), r = Object.keys(e._fileIndexCache ?? {});
	for (let i of t) {
		let t = i.toLocaleLowerCase();
		for (let e of r) e.toLocaleLowerCase().includes(t) && n.add(e);
		let a = e.fs?.get(i, [], KD) ?? [];
		for (let [, e] of a) n.add(e);
	}
	return [...n].sort((e, t) => e.toLocaleLowerCase().localeCompare(t.toLocaleLowerCase()));
}
function $D(e, t, n) {
	let r = t._fileIndexCache?.[n] ?? [];
	for (let t of r) tO(t) && ID(e, {
		img: t,
		key: `foundry-asset:${t}`,
		label: BD(t, "Dig Down"),
		source: "foundry-asset"
	});
}
function eO() {
	let e = canvas.deepSearchCache;
	if (!HD(e)) return null;
	let t = e._fileIndexCache, n = e.fs, r = {};
	return UD(t) && (r._fileIndexCache = t), HD(n) && typeof n.get == "function" && (r.fs = { get: n.get.bind(n) }), r;
}
function tO(e) {
	let t = `.${e.split(/[#?]/)[0]?.split(".").pop() ?? ""}`;
	return qD.has(t.toLocaleLowerCase());
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/documents.ts
function nO(e, t) {
	RD(t, e, {
		currentLocation: "World Actors and Items",
		maxDirectories: 0,
		phase: "world-documents"
	});
	for (let t of game.actors.contents) LD(e, {
		imagePaths: [{
			label: "actor image",
			path: t.img ?? ""
		}, {
			label: "token image",
			path: zD(t)
		}],
		name: t.name,
		sourceLabel: "World Actors",
		sourceKey: t.uuid
	});
	for (let t of game.items?.contents ?? []) LD(e, {
		imagePaths: [{
			label: "item image",
			path: t.img ?? ""
		}],
		name: t.name,
		sourceLabel: "World Items",
		sourceKey: t.uuid
	});
}
async function rO(e, t) {
	RD(t, e, {
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
		] }).catch(() => void 0), r = n ? Rw(n) : [];
		for (let n of r) LD(e, {
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
async function iO(e, t) {
	let n = tx(e);
	if (!n.length) return [];
	let r = {
		candidates: [],
		maxDirectoryBudget: 0,
		searchTerms: n,
		seenPaths: /* @__PURE__ */ new Set(),
		visitedDirectories: 0
	};
	return e.includeCompendiumAssets && (nO(r, t), await rO(r, t)), e.includeFilePickerAssets && JD(r, t), RD(t, r, {
		currentLocation: "Portrait search complete",
		maxDirectories: r.maxDirectoryBudget,
		phase: "ready"
	}), r.candidates;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/index.ts
var aO = {
	buildNpc: AD,
	ensureActorFolder: uE,
	ensureItemFolder: dE,
	findLowerCareerCandidates: Xw,
	getPortraitSearchAvailability: async () => YD(),
	importRecommendedQuickTraits: yE,
	listActorFolders: async () => fE(),
	listBaseActors: async (e) => FE(e),
	listFoundryPortraitCandidates: iO,
	listMagicLoreOptions: GE,
	listSpellsForMagicGrants: DD,
	listItemFolders: async () => pE(),
	listQuickTraits: bE,
	listSkillCharacteristics: fT,
	listSkillSpecializations: dT,
	listTalentMaximums: OT,
	listTraitDifficultyOptions: sE,
	loadBaseActorDraftData: IE,
	loadSettings: async () => PT(),
	resolveActorDrop: LE,
	resolveCareerDrop: FD,
	resolveSpellDrop: OD,
	resolveTraitDrop: cE,
	resolveTrapping: EE,
	resolveTrappingDrop: DE,
	saveSettings: FT
}, oO = class extends Bh {
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
		return Ow;
	}
	getVueProps() {
		return { bridge: aO };
	}
}, sO = "wfrp4e-customizer-open-npc-builder", cO = "wfrp4e-customizer-open-species-builder";
function lO() {
	Hooks.on("renderActorDirectory", (e, t) => {
		let n = mO(t);
		n && uO(n);
	});
}
function uO(e) {
	let n = pO(e);
	if (!n) {
		t("wfrp4e-customizer-apps | Could not find Actor Directory button container.");
		return;
	}
	dO(e, n), fO(e, n);
}
function dO(e, t) {
	if (e.querySelector(`.${sO}`)) return;
	let n = document.createElement("button");
	n.classList.add(sO, "wfrp4e-customizer-actor-directory-button"), n.type = "button", n.innerHTML = "<i class=\"fa-solid fa-user-plus\" inert></i><span>NPC Builder App</span>", n.addEventListener("click", () => {
		new oO().render(!0);
	}), t.append(n);
}
function fO(e, t) {
	if (e.querySelector(`.${cO}`)) return;
	let n = document.createElement("button");
	n.classList.add(cO, "wfrp4e-customizer-actor-directory-button"), n.type = "button", n.innerHTML = "<i class=\"fa-solid fa-people-group\" inert></i><span>Species Builder</span>", n.addEventListener("click", () => {
		new Rg().render(!0);
	}), t.append(n);
}
function pO(e) {
	return e.querySelector(".directory-header .header-actions") ?? e.querySelector(".directory-header .action-buttons") ?? e.querySelector(".header-actions") ?? e.querySelector(".action-buttons");
}
function mO(e) {
	return e instanceof HTMLElement ? e : hO(e) && e[0] instanceof HTMLElement ? e[0] : null;
}
function hO(e) {
	return typeof e == "object" && !!e && "length" in e;
}
//#endregion
//#region src/module/apps/species-builder/apply-species-config.ts
var gO = [
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
function _O() {
	let n = game.wfrp4e?.config;
	if (!Y(n)) {
		t(`${$} | WFRP config was unavailable; custom species were not applied.`);
		return;
	}
	let r = ng();
	vO(n, fp(r)), r.definitions.length > 0 && e(`${$} | Applied ${r.definitions.length} custom species definition(s).`);
}
function vO(e, t) {
	for (let n of gO) yO(e, n, t[n]);
	bO(e, t.extraSpecies), xO(e, t.subspecies);
}
function yO(e, t, n) {
	if (Object.keys(n).length === 0) return;
	let r = e[t];
	if (!Y(r)) {
		e[t] = { ...n };
		return;
	}
	Object.assign(r, n);
}
function bO(e, t) {
	if (t.length === 0) return;
	let n = Array.isArray(e.extraSpecies) ? e.extraSpecies : [], r = /* @__PURE__ */ new Set();
	for (let e of n) typeof e == "string" && r.add(e);
	for (let e of t) r.add(e);
	e.extraSpecies = [...r];
}
function xO(e, t) {
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
var SO = "2d10";
function CO(e) {
	let t = e?.split("+")[0]?.trim();
	return t ? TO(t) : SO;
}
function wO(e, t) {
	return CO(e) === CO(t);
}
function TO(e) {
	return e.replaceAll(/\s+/g, "").toLocaleLowerCase();
}
//#endregion
//#region src/module/apps/species-builder/chargen-roll-swap-guard.ts
var EO = Symbol("wfrp4e-customizer-guarded-attributes-stage"), DO = "wfrp4e-customizer-chargen-roll--compatible", OO = "wfrp4e-customizer-chargen-roll--dragging", kO = "wfrp4e-customizer-chargen-roll--incompatible", AO = [
	DO,
	OO,
	kO
];
function jO() {
	Hooks.on("wfrp4e:chargen", (e) => {
		MO(e);
	});
}
function MO(n) {
	let r = NO(n);
	if (!r) {
		t(`${$} | Could not inspect WFRP character generation stages.`);
		return;
	}
	let i = PO(r);
	if (!i) {
		t(`${$} | Could not find the WFRP Attributes character generation stage.`);
		return;
	}
	if (FO(i.class)) return;
	let a = IO(i.class);
	typeof r.replaceStage == "function" ? r.replaceStage("attributes", a) : i.class = a, e(`${$} | Guarded WFRP characteristic roll swapping for custom species.`);
}
function NO(e) {
	if (!Y(e)) return;
	let t = {}, n = e.replaceStage;
	return typeof n == "function" && (t.replaceStage = (t, r) => {
		n.call(e, t, r);
	}), Array.isArray(e.stages) && (t.stages = e.stages), t;
}
function PO(e) {
	for (let t of e.stages ?? []) if (Y(t) && t.key === "attributes") return typeof t.class == "function" ? t : void 0;
}
function FO(e) {
	return !!e[EO];
}
function IO(e) {
	class t extends e {
		static [EO] = !0;
		activateListeners(e) {
			let t = super.activateListeners(e);
			return LO(this, e), t;
		}
		swap(e, t) {
			let n = HO(this, e), r = HO(this, t);
			if (wO(n, r)) return super.swap(e, t);
			UO(e, n, t, r);
		}
	}
	return t;
}
function LO(e, t) {
	let n = VO(t);
	if (n) for (let t of BO(n)) t.addEventListener("dragstart", () => {
		let r = t.dataset.ch;
		r && RO(e, n, r);
	}), t.addEventListener("dragend", () => {
		zO(n);
	}), t.addEventListener("drop", () => {
		zO(n);
	});
}
function RO(e, t, n) {
	zO(t);
	let r = HO(e, n);
	for (let i of BO(t)) {
		let t = i.dataset.ch;
		if (!t) continue;
		if (t === n) {
			i.classList.add(OO);
			continue;
		}
		let a = wO(r, HO(e, t));
		i.classList.add(a ? DO : kO);
	}
}
function zO(e) {
	for (let t of BO(e)) t.classList.remove(...AO);
}
function BO(e) {
	return [...e.querySelectorAll(".ch-roll.ch-drag")];
}
function VO(e) {
	if (e instanceof HTMLElement) return e;
	if (!Y(e)) return;
	let t = e[0];
	return t instanceof HTMLElement ? t : void 0;
}
function HO(e, t) {
	let n = Y(e.context) ? e.context : void 0, r = Y(n?.characteristics) ? n.characteristics : void 0, i = (Y(r?.[t]) ? r[t] : void 0)?.formula;
	return typeof i == "string" ? i : void 0;
}
function UO(e, t, n, r) {
	let i = WO(e), a = WO(n), o = CO(t), s = CO(r);
	ui.notifications?.warn?.(`Cannot swap ${i} and ${a}: ${i} uses ${o}, while ${a} uses ${s}.`);
}
function WO(e) {
	let t = game.wfrp4e?.config?.characteristics;
	if (!Y(t)) return e;
	let n = t[e];
	return typeof n == "string" ? n : e;
}
//#endregion
//#region src/view/apps/workbench/WorkbenchApp.vue?vue&type=script&setup=true&lang.ts
var GO = { class: "customizer-workbench" }, KO = {
	"aria-label": "Customizer targets",
	class: "customizer-workbench__body"
}, qO = { class: "customizer-workbench__targets" }, JO = /* @__PURE__ */ I({
	__name: "WorkbenchApp",
	setup(e) {
		let t = [
			"Actor sheets",
			"Item sheets",
			"Reusable dialogs"
		];
		return (e, n) => (z(), B("main", GO, [n[1] ||= H("header", { class: "customizer-workbench__header" }, [H("p", null, "WFRP4e"), H("h1", null, "Customizer Workbench")], -1), H("section", KO, [H("div", qO, [(z(), B(R, null, L(t, (e) => H("button", {
			key: e,
			disabled: "",
			type: "button"
		}, A(e), 1)), 64))]), n[0] ||= H("div", { class: "customizer-workbench__empty" }, [H("strong", null, "Vue application shell mounted."), H("span", null, "The first customizer surface can land here.")], -1)])]));
	}
}), YO = class extends Bh {
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
		return JO;
	}
}, XO = `${$}.debugShapeProbes`, ZO = "wfrp4eCustomizerShapeProbes", QO = "wfrp4eCustomizerShapePreset";
//#endregion
//#region src/module/debug/shape-inspector/utils.ts
function $O(e, t, n) {
	let r = Number(e);
	return Number.isFinite(r) ? Math.max(0, Math.min(n, Math.floor(r))) : t;
}
function ek(e) {
	return typeof e == "object" && !!e;
}
function tk(e) {
	return typeof e == "string" ? e.trim().toLocaleLowerCase() : "";
}
function nk(e) {
	try {
		return localStorage.getItem(e);
	} catch {
		return null;
	}
}
//#endregion
//#region src/module/debug/shape-inspector/path-resolver.ts
function rk(e) {
	let t = lk(e), n = ik(globalThis, t.root);
	for (let e of t.tokens) {
		if (e.type === "property") {
			n = ik(n, e.key);
			continue;
		}
		if (e.type === "index") {
			n = ik(n, String(e.index));
			continue;
		}
		n = ak(n, e.name, e.args);
	}
	return n;
}
function ik(e, t) {
	if (!(!ek(e) && typeof e != "function")) try {
		return e[t];
	} catch {
		return;
	}
}
function ak(e, t, n) {
	if (t === "at") {
		let t = Number(n[0] ?? 0), r = Number.isFinite(t) ? t : 0;
		return uk(e).at(r);
	}
	if (t === "findByName") {
		let t = tk(n[0] ?? "");
		return uk(e).find((e) => tk(ik(e, "name")) === t);
	}
	if (t === "findByType") {
		let t = tk(n[0] ?? "");
		return uk(e).find((e) => tk(ik(e, "type")) === t);
	}
	if (t === "get") {
		let t = n[0] ?? "";
		if (e instanceof Map) return e.get(t);
		let r = ik(e, "get");
		if (typeof r == "function") return r.call(e, t);
	}
	if (t === "sample") {
		let t = $O(n[0], 3, 60);
		return uk(e).slice(0, t);
	}
	throw Error(`Unsupported path method "${t}".`);
}
function ok(e) {
	return e.trim() ? e.split(",").map((e) => ck(e.trim())).map(String) : [];
}
function sk(e) {
	let t = e.trim();
	return /^-?\d+$/.test(t) ? Number(t) : ck(t);
}
function ck(e) {
	let t = /^["'](?<value>.*)["']$/.exec(e);
	return t?.groups ? t.groups.value ?? "" : e;
}
function lk(e) {
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
				args: ok(e.groups.args ?? ""),
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
				index: sk(e),
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
function uk(e) {
	if (Array.isArray(e)) return e;
	let t = ik(e, "contents");
	return Array.isArray(t) ? t : [];
}
//#endregion
//#region src/module/debug/shape-inspector/presets.ts
var dk = { "npc-builder": [
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
function fk() {
	return window.location.href.includes("wfrp4eCustomizerShapeProbes") || window.location.href.includes("wfrp4eCustomizerShapePreset");
}
function pk(e) {
	let t = {
		hook: e.hook ?? "ready",
		maxDepth: $O(e.maxDepth, 2, 6),
		maxEntries: $O(e.maxEntries, 12, 60),
		path: e.path.trim()
	};
	return e.label && (t.label = e.label), t;
}
function mk() {
	return [...hk(), ...gk()].map(pk);
}
function hk() {
	let e = nk(XO);
	if (!e) return [];
	try {
		let t = JSON.parse(e);
		return Array.isArray(t) ? t.filter(vk).map(pk) : [];
	} catch {
		return [];
	}
}
function gk() {
	let e = [], t = [new URLSearchParams(window.location.search), new URLSearchParams(window.location.hash.replace(/^#/, ""))];
	for (let n of t) {
		let t = n.get(QO), r = n.get(ZO);
		t && e.push(...dk[t] ?? []), r && e.push(..._k(r));
	}
	return window.location.href.includes("wfrp4eCustomizerShapePreset=npc-builder") && !e.length && e.push(...dk["npc-builder"] ?? []), e;
}
function _k(e) {
	try {
		let t = JSON.parse(decodeURIComponent(e));
		return Array.isArray(t) ? t.filter(vk) : [];
	} catch (e) {
		return t(`${$} | Could not parse URL shape probes.`, e), [];
	}
}
function vk(e) {
	return typeof e != "object" || !e ? !1 : "path" in e && typeof e.path == "string";
}
//#endregion
//#region src/module/debug/shape-inspector/summary.ts
function yk(e, t) {
	return !ek(e) && typeof e != "function" ? wk(e) : typeof e == "function" ? Sk(e) : Array.isArray(e) ? bk(e, t) : e instanceof Map ? xk(e, t) : Ck(e, t);
}
function bk(e, t) {
	return {
		length: e.length,
		sample: e.slice(0, t.maxEntries).map((e) => yk(e, Ek(t))),
		type: "array"
	};
}
function xk(e, t) {
	return {
		sample: [...e.entries()].slice(0, t.maxEntries).map(([e, n]) => ({
			key: yk(e, Ek(t)),
			value: yk(n, Ek(t))
		})),
		size: e.size,
		type: "Map"
	};
}
function Sk(e) {
	return {
		name: e.name,
		type: "function"
	};
}
function Ck(e, t) {
	if (t.seen.has(e)) return { type: "circular" };
	t.seen.add(e);
	let n = Tk(e, t.maxEntries), r = ik(e, "constructor"), i = {
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
		let n = ik(e, t);
		typeof n == "string" && (i[t] = n);
	}
	if (t.maxDepth <= 0) return i;
	let a = {};
	for (let r of n) a[r] = yk(ik(e, r), Ek(t));
	i.properties = a;
	let o = ik(e, "toObject");
	if (typeof o == "function") try {
		i.source = yk(o.call(e), Ek(t));
	} catch (e) {
		i.source = {
			error: e instanceof Error ? e.message : String(e),
			type: "error"
		};
	}
	return i;
}
function wk(e) {
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
function Tk(e, t) {
	return Object.keys(e).sort().slice(0, t);
}
function Ek(e) {
	return {
		maxDepth: e.maxDepth - 1,
		maxEntries: e.maxEntries,
		seen: e.seen
	};
}
//#endregion
//#region src/module/debug/shape-inspector/index.ts
function Dk() {
	localStorage.removeItem(XO), e(`${$} | Cleared debug shape probes.`);
}
function Ok() {
	return mk();
}
function kk(e, t = {}) {
	let n = Mk(e, t);
	return Pk(n), n;
}
function Ak() {
	let t = mk();
	for (let e of ["init", "setup"]) {
		let n = t.filter((t) => t.hook === e);
		n.length && Hooks.once(e, () => {
			for (let t of n) Nk(t, e);
		});
	}
	Hooks.once("ready", () => {
		let t = mk().filter((e) => (e.hook ?? "ready") === "ready");
		fk() && e(`${$} | Debug shape ready probes discovered: ${t.length}`, window.location.href);
		for (let e of t) Nk(e, "ready");
	});
}
function jk(t) {
	let n = t.map(pk);
	localStorage.setItem(XO, JSON.stringify(n)), e(`${$} | Stored ${n.length} debug shape probe(s). Reload Foundry to run init/setup probes.`);
}
function Mk(e, t = {}, n) {
	let r = $O(t.maxDepth, 2, 6), i = $O(t.maxEntries, 12, 60), a = rk(e), o = {
		inspectedAt: (/* @__PURE__ */ new Date()).toISOString(),
		label: t.label || e,
		maxDepth: r,
		maxEntries: i,
		path: e,
		value: yk(a, {
			maxDepth: r,
			maxEntries: i,
			seen: /* @__PURE__ */ new WeakSet()
		})
	};
	return n && (o.hook = n), o;
}
function Nk(e, n) {
	try {
		Pk(Mk(e.path, e, n));
	} catch (n) {
		t(`${$} | Debug shape probe failed for "${e.path}".`, n);
	}
}
function Pk(t) {
	e(`${$} | Debug shape probe: ${t.label}`, JSON.stringify(t, null, 2));
}
//#endregion
//#region src/module/create-module-api.ts
function Fk() {
	return {
		clearDebugShapeProbes: Dk,
		getDebugShapeProbes: Ok,
		inspectPath: kk,
		listNpcAutoAdvanceStrategies: _v,
		openNpcBuilder: async () => {
			await new oO().render(!0);
		},
		openSpeciesBuilder: async () => {
			await new Rg().render(!0);
		},
		openWorkbench: async () => {
			await new YO().render(!0);
		},
		registerNpcAutoAdvanceStrategy: gv,
		setDebugShapeProbes: jk
	};
}
//#endregion
//#region src/module/register-module-menus.ts
function Ik() {
	game.settings.registerMenu($, "workbench", {
		hint: "Open the WFRP4e Customizer Apps workbench.",
		icon: "fa-solid fa-screwdriver-wrench",
		label: "Open Workbench",
		name: "WFRP4e Customizer Apps",
		restricted: !0,
		type: YO
	}), game.settings.registerMenu($, "npc-builder", {
		hint: "Build a WFRP4e NPC from a base Actor and Career items.",
		icon: "fa-solid fa-user-plus",
		label: "Open NPC Builder",
		name: "WFRP4e NPC Builder",
		restricted: !0,
		type: oO
	}), game.settings.registerMenu($, "species-builder", {
		hint: "Create custom WFRP4e species definitions for character generation.",
		icon: "fa-solid fa-people-group",
		label: "Open Species Builder",
		name: "WFRP4e Species Builder",
		restricted: !0,
		type: Rg
	});
}
//#endregion
//#region src/module/register-module-settings.ts
function Lk() {
	NT(), tg();
}
//#endregion
//#region src/functions/item-grants/wfrp-grant-effect.ts
var Rk = "generatedGrantItemsEffect", zk = {
	grantMode: "all",
	lifetime: "linked-to-effect",
	ownerAction: "keep"
};
function Bk(e) {
	let t = e.recipe ?? zk;
	Vk(t);
	let n = e.items.map((e) => e.uuid);
	return {
		changes: [],
		description: Uk(e.effectName, e.items, t),
		disabled: !1,
		flags: { [e.flagScope]: {
			[Rk]: !0,
			itemUuids: n,
			recipe: t
		} },
		img: e.items[0]?.img ?? "icons/svg/aura.svg",
		name: e.effectName,
		system: {
			scriptData: [{
				label: e.effectName,
				script: Hk(n, t),
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
function Vk(e) {
	if (e.lifetime === "linked-to-effect" && e.ownerAction === "delete-after-grant") throw Error("Self-removing grant effects must create detached item copies.");
}
function Hk(e, t) {
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
function Uk(e, t, n) {
	let r = Wk(e), i = t.map((e) => `<li>${Wk(e.name)}</li>`).join("");
	return `<p><strong>${r}</strong>: grants item copies; ${n.lifetime === "linked-to-effect" ? "granted item copies are removed with this effect" : "granted item copies remain after this effect is removed"}.${n.ownerAction === "delete-after-grant" ? " The source Item removes itself after granting." : ""}</p><ul>${i}</ul>`;
}
function Wk(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
//#endregion
//#region src/module/wfrp4e/grant/builder-view.ts
var Gk = "detached";
function Kk(e, t) {
	let n = document.createElement("section");
	return n.classList.add("wfrp4e-customizer-grant-builder__content"), n.append(qk(e), Jk(t), Yk(e, t), $k(e, t), eA(e, t), rA(e, t)), n;
}
function qk(e) {
	let t = document.createElement("header");
	t.classList.add("wfrp4e-customizer-grant-builder__header");
	let n = document.createElement("h2");
	n.textContent = e.carrierName;
	let r = document.createElement("p");
	return r.textContent = "Build an item-granting Active Effect on this WFRP Item.", t.append(n, r), t;
}
function Jk(e) {
	let t = document.createElement("div");
	t.classList.add("wfrp4e-customizer-grant-builder__drop-zone"), t.tabIndex = 0;
	let n = document.createElement("strong");
	n.textContent = "Drop Items Here";
	let r = document.createElement("span");
	return r.textContent = "World and compendium Items can be added one at a time.", t.append(n, r), t.addEventListener("dragover", (e) => {
		e.preventDefault(), t.classList.add("wfrp4e-customizer-grant-builder__drop-zone--active"), e.dataTransfer && (e.dataTransfer.dropEffect = "copy");
	}), t.addEventListener("dragleave", () => {
		t.classList.remove("wfrp4e-customizer-grant-builder__drop-zone--active");
	}), t.addEventListener("drop", e.onDrop), t;
}
function Yk(e, t) {
	let n = document.createElement("ol");
	if (n.classList.add("wfrp4e-customizer-grant-builder__item-list"), e.items.length === 0) {
		let e = document.createElement("li");
		return e.classList.add("wfrp4e-customizer-grant-builder__empty"), e.textContent = "No granted items configured.", n.append(e), n;
	}
	for (let r of e.items) n.append(Xk(r, t));
	return n;
}
function Xk(e, t) {
	let n = document.createElement("li");
	if (n.classList.add("wfrp4e-customizer-grant-builder__item-row"), e.img) {
		let t = document.createElement("img");
		t.alt = "", t.src = e.img, n.append(t);
	}
	return n.append(Zk(e), Qk(e, t)), n;
}
function Zk(e) {
	let t = document.createElement("div");
	t.classList.add("wfrp4e-customizer-grant-builder__item-text");
	let n = document.createElement("strong");
	n.textContent = e.name;
	let r = document.createElement("small");
	return r.textContent = e.uuid, t.append(n, r), t;
}
function Qk(e, t) {
	let n = document.createElement("button");
	return n.type = "button", n.title = `Remove ${e.name}`, n.innerHTML = "<i class=\"fa-solid fa-times\" aria-hidden=\"true\"></i>", n.addEventListener("click", () => {
		t.onRemoveItem(e.uuid);
	}), n;
}
function $k(e, t) {
	let n = document.createElement("label");
	n.classList.add("wfrp4e-customizer-grant-builder__field");
	let r = document.createElement("span");
	r.textContent = "Effect Name";
	let i = document.createElement("input");
	return i.type = "text", i.value = e.effectName, i.addEventListener("input", () => {
		t.onEffectNameInput(i.value);
	}), n.append(r, i), n;
}
function eA(e, t) {
	let n = document.createElement("fieldset");
	n.classList.add("wfrp4e-customizer-grant-builder__field-group");
	let r = document.createElement("legend");
	return r.textContent = "Granted Item Lifetime", n.append(r), n.append(tA(e, t, "linked-to-effect", "Linked to this effect", "Granted Items are removed when this effect is deleted."), tA(e, t, "detached", "Detached copies", "Granted Items remain after this effect or source Item is removed."), nA(e, t)), n;
}
function tA(e, t, n, r, i) {
	let a = document.createElement("label");
	a.classList.add("wfrp4e-customizer-grant-builder__radio");
	let o = document.createElement("input");
	o.type = "radio", o.name = "grant-lifetime", o.value = n, o.checked = e.lifetime === n, o.addEventListener("change", () => {
		t.onLifetimeChange(n);
	});
	let s = document.createElement("span"), c = document.createElement("strong");
	c.textContent = r;
	let l = document.createElement("small");
	return l.textContent = i, s.append(c, l), a.append(o, s), a;
}
function nA(e, t) {
	let n = document.createElement("label");
	n.classList.add("wfrp4e-customizer-grant-builder__checkbox");
	let r = document.createElement("input");
	r.type = "checkbox", r.checked = e.ownerAction === "delete-after-grant", r.disabled = e.lifetime !== Gk, r.addEventListener("change", () => {
		t.onOwnerActionChange(r.checked ? "delete-after-grant" : "keep");
	});
	let i = document.createElement("span");
	return i.textContent = "Remove the source Item after granting.", n.append(r, i), n;
}
function rA(e, t) {
	let n = document.createElement("footer");
	n.classList.add("wfrp4e-customizer-grant-builder__actions");
	let r = document.createElement("button");
	r.type = "button", r.textContent = "Cancel", r.addEventListener("click", t.onCancel);
	let i = document.createElement("button");
	return i.type = "button", i.classList.add("wfrp4e-customizer-grant-builder__primary"), i.disabled = e.items.length === 0, i.textContent = "Create Grant Effect", i.addEventListener("click", t.onCreate), n.append(r, i), n;
}
//#endregion
//#region src/module/wfrp4e/grant/item-documents.ts
function iA(e) {
	let t = e.dataTransfer?.getData("text/plain") ?? "";
	if (!t) return null;
	try {
		return gg(t).type === "Item" ? t : null;
	} catch {
		return null;
	}
}
async function aA(e) {
	let t = gg(e);
	if (!t.uuid) throw Error("Drop an Item with a resolvable UUID.");
	return mg(await fromUuid(t.uuid), "The dropped Item was not found.");
}
function oA(e) {
	let t = {
		name: e.name,
		uuid: e.uuid
	};
	return e.img && (t.img = e.img), t;
}
//#endregion
//#region src/module/wfrp4e/grant/builder-application.ts
var sA = "detached", cA = class extends foundry.applications.api.ApplicationV2 {
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [$, "wfrp4e-customizer-grant-builder"],
		id: `${$}-grant-builder`,
		position: {
			height: 560,
			width: 620
		},
		window: {
			icon: "fa-solid fa-sitemap",
			title: "Advanced Item Grant Builder"
		}
	};
	#e = "Grant Items";
	#t = !1;
	#n = [];
	#r = "linked-to-effect";
	#i = "keep";
	carrierItem;
	constructor(e) {
		super(), this.carrierItem = e;
	}
	async _renderHTML(e, t) {
		return Kk({
			carrierName: this.carrierItem.name,
			effectName: this.#e,
			items: this.#n,
			lifetime: this.#r,
			ownerAction: this.#i
		}, {
			onCancel: () => {
				this.close();
			},
			onCreate: () => {
				this.createGrantEffect();
			},
			onDrop: (e) => {
				this.handleDrop(e);
			},
			onEffectNameInput: (e) => {
				this.#e = e, this.#t = !0;
			},
			onLifetimeChange: (e) => {
				this.#r = e, e !== sA && (this.#i = "keep"), this.render();
			},
			onOwnerActionChange: (e) => {
				this.#i = e, this.render();
			},
			onRemoveItem: (e) => {
				this.#n = this.#n.filter((t) => t.uuid !== e), this.render();
			}
		});
	}
	_replaceHTML(e, t, n) {
		t.classList.add("wfrp4e-customizer-grant-builder-window"), t.replaceChildren(e);
	}
	async handleDrop(e) {
		e.preventDefault(), e.stopPropagation();
		let t = iA(e);
		if (t) try {
			let e = await aA(t);
			if (e.uuid === this.carrierItem.uuid) throw Error("An Item cannot grant itself.");
			if (this.#n.some((t) => t.uuid === e.uuid)) {
				ui.notifications?.warn?.(`"${e.name}" is already in this grant effect.`);
				return;
			}
			this.#n = [...this.#n, oA(e)], this.updateDefaultEffectName(), this.render();
		} catch (e) {
			let t = e instanceof Error ? e.message : "The dropped Item could not be converted.";
			ui.notifications?.warn?.(t);
		}
	}
	updateDefaultEffectName() {
		if (!this.#t) {
			if (this.#n.length === 1) {
				let e = this.#n[0];
				if (!e) return;
				this.#e = `Grant ${e.name}`;
				return;
			}
			this.#e = "Grant Item Package";
		}
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
			}, n = Bk({
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
}, lA = new Set(["talent", "trait"]), uA = /* @__PURE__ */ new WeakSet(), dA = !1, fA = "wfrp4e-customizer-grant-builder-button", pA = [
	"section[data-application-part=\"effects\"].active",
	"section[data-tab=\"effects\"].active",
	".tab[data-tab=\"effects\"].active",
	".tab.effects.active"
].join(","), mA = [
	"section[data-application-part=\"effects\"]",
	"section[data-tab=\"effects\"]",
	".tab[data-tab=\"effects\"]",
	".tab.effects"
].join(",");
function hA() {
	dA || (dA = !0, Hooks.on("renderApplicationV2", (e, t) => {
		if (!(t instanceof HTMLElement)) return;
		let n = yA(e);
		!n || !lA.has(n.type) || (gA(n, t), _A(n, t));
	}));
}
function gA(e, t) {
	uA.has(t) || (uA.add(t), t.addEventListener("dragover", (e) => {
		bA(t, e.target) && (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "copy"));
	}, !0), t.addEventListener("drop", (n) => {
		vA(e, t, n);
	}, !0));
}
function _A(e, t) {
	if (t.querySelector(`.${fA}`)) return;
	let n = SA(t, { includeInactive: !0 });
	if (!n) return;
	let r = document.createElement("div");
	r.classList.add("wfrp4e-customizer-grant-builder-toolbar");
	let i = document.createElement("button");
	i.type = "button", i.classList.add(fA), i.title = "Open the advanced item grant builder", i.innerHTML = "<i class=\"fa-solid fa-sitemap\" aria-hidden=\"true\"></i><span>Grant Builder</span>", i.addEventListener("click", () => {
		new cA(e).render(!0);
	}), r.append(i), n.prepend(r);
}
async function vA(e, t, n) {
	if (!bA(t, n.target)) return;
	let r = iA(n);
	if (r) {
		n.preventDefault(), n.stopPropagation();
		try {
			let t = await aA(r);
			if (t.uuid === e.uuid) throw Error("An Item cannot grant itself.");
			let n = oA(t), i = Bk({
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
function yA(e) {
	if (typeof e != "object" || !e) return null;
	let t = "item" in e ? e.item : void 0;
	if (fg(t)) return t;
	let n = "document" in e ? e.document : void 0;
	return fg(n) ? n : null;
}
function bA(e, t) {
	return !(t instanceof Element) || !e.contains(t) ? !1 : !!xA(e);
}
function xA(e) {
	return e.querySelector(pA) || SA(e, { includeInactive: !1 });
}
function SA(e, t) {
	return [...e.querySelectorAll(mA)].find((e) => t.includeInactive || e.offsetParent !== null) ?? null;
}
Ak(), Hooks.once("init", () => {
	e(`${$} | Initializing`), Lk(), game.system.id === "wfrp4e" && (_O(), jO(), hA()), Ik(), lO();
}), Hooks.once("ready", () => {
	if (game.system.id !== "wfrp4e") {
		t(`${$} | Loaded outside ${ih}; skipping module API registration.`);
		return;
	}
	let n = game.modules.get($);
	if (!n) {
		t(`${$} | Foundry did not expose the module entry.`);
		return;
	}
	n.api = Fk(), Yw(), pT(), og(), jg(), e(`${$} | Ready`);
});
//#endregion
