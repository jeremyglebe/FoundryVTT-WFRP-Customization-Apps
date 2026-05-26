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
}, d = Object.prototype.hasOwnProperty, f = (e, t) => d.call(e, t), p = Array.isArray, m = (e) => C(e) === "[object Map]", h = (e) => C(e) === "[object Set]", g = (e) => C(e) === "[object Date]", _ = (e) => typeof e == "function", v = (e) => typeof e == "string", y = (e) => typeof e == "symbol", b = (e) => typeof e == "object" && !!e, x = (e) => (b(e) || _(e)) && _(e.then) && _(e.catch), S = Object.prototype.toString, C = (e) => S.call(e), w = (e) => C(e).slice(8, -1), ee = (e) => C(e) === "[object Object]", te = (e) => v(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ne = /* @__PURE__ */ n(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), T = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, re = /-\w/g, E = T((e) => e.replace(re, (e) => e.slice(1).toUpperCase())), ie = /\B([A-Z])/g, D = T((e) => e.replace(ie, "-$1").toLowerCase()), ae = T((e) => e.charAt(0).toUpperCase() + e.slice(1)), oe = T((e) => e ? `on${ae(e)}` : ""), O = (e, t) => !Object.is(e, t), se = (e, ...t) => {
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
var we = (e) => !!(e && e.__v_isRef === !0), A = (e) => v(e) ? e : e == null ? "" : p(e) || b(e) && (e.toString === S || !_(e.toString)) ? we(e) ? A(e.value) : JSON.stringify(e, Te, 2) : String(e), Te = (e, t) => we(t) ? Te(e, t.value) : m(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Ee(t, r) + " =>"] = n, e), {}) } : h(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Ee(e)) } : y(t) ? Ee(t) : b(t) && !p(t) && !ee(t) ? String(t) : t, Ee = (e, t = "") => y(e) ? `Symbol(${e.description ?? t})` : e, j, De = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && j && (j.active ? (this.parent = j, this.index = (j.scopes ||= []).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
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
			let t = j;
			try {
				return j = this, e();
			} finally {
				j = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = j, j = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (j === this) j = this.prevScope;
			else {
				let e = j;
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
	return j;
}
function Ae(e, t = !1) {
	j && j.cleanups.push(e);
}
var M, je = /* @__PURE__ */ new WeakSet(), Me = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, j && (j.active ? j.effects.push(this) : this.flags &= -2);
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
		(t.version === 0 || O(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
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
function N(e, t, n) {
	if (Ge && M) {
		let t = et.get(e);
		t || et.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new Qe()), r.map = t, r.key = n), r.track();
	}
}
function it(e, t, n, r, i, a) {
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
		let i = p(e), a = i && te(n);
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
function at(e, t) {
	let n = et.get(e);
	return n && n.get(t);
}
function ot(e) {
	let t = /* @__PURE__ */ P(e);
	return t === e ? t : (N(t, "iterate", rt), /* @__PURE__ */ Kt(e) ? t : t.map(Yt));
}
function st(e) {
	return N(e = /* @__PURE__ */ P(e), "iterate", rt), e;
}
function ct(e, t) {
	return /* @__PURE__ */ Gt(e) ? Xt(/* @__PURE__ */ Wt(e) ? Yt(t) : t) : Yt(t);
}
var lt = {
	__proto__: null,
	[Symbol.iterator]() {
		return ut(this, Symbol.iterator, (e) => ct(this, e));
	},
	concat(...e) {
		return ot(this).concat(...e.map((e) => p(e) ? ot(e) : e));
	},
	entries() {
		return ut(this, "entries", (e) => (e[1] = ct(this, e[1]), e));
	},
	every(e, t) {
		return ft(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return ft(this, "filter", e, t, (e) => e.map((e) => ct(this, e)), arguments);
	},
	find(e, t) {
		return ft(this, "find", e, t, (e) => ct(this, e), arguments);
	},
	findIndex(e, t) {
		return ft(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return ft(this, "findLast", e, t, (e) => ct(this, e), arguments);
	},
	findLastIndex(e, t) {
		return ft(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return ft(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return mt(this, "includes", e);
	},
	indexOf(...e) {
		return mt(this, "indexOf", e);
	},
	join(e) {
		return ot(this).join(e);
	},
	lastIndexOf(...e) {
		return mt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return ft(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return ht(this, "pop");
	},
	push(...e) {
		return ht(this, "push", e);
	},
	reduce(e, ...t) {
		return pt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return pt(this, "reduceRight", e, t);
	},
	shift() {
		return ht(this, "shift");
	},
	some(e, t) {
		return ft(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return ht(this, "splice", e);
	},
	toReversed() {
		return ot(this).toReversed();
	},
	toSorted(e) {
		return ot(this).toSorted(e);
	},
	toSpliced(...e) {
		return ot(this).toSpliced(...e);
	},
	unshift(...e) {
		return ht(this, "unshift", e);
	},
	values() {
		return ut(this, "values", (e) => ct(this, e));
	}
};
function ut(e, t, n) {
	let r = st(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ Kt(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var dt = Array.prototype;
function ft(e, t, n, r, i, a) {
	let o = st(e), s = o !== e && !/* @__PURE__ */ Kt(e), c = o[t];
	if (c !== dt[t]) {
		let t = c.apply(e, a);
		return s ? Yt(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, ct(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function pt(e, t, n, r) {
	let i = st(e), a = i !== e && !/* @__PURE__ */ Kt(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = ct(e, t)), n.call(this, t, ct(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? ct(e, c) : c;
}
function mt(e, t, n) {
	let r = /* @__PURE__ */ P(e);
	N(r, "iterate", rt);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ qt(n[0]) ? (n[0] = /* @__PURE__ */ P(n[0]), r[t](...n)) : i;
}
function ht(e, t, n = []) {
	qe(), Le();
	let r = (/* @__PURE__ */ P(e))[t].apply(e, n);
	return Re(), Je(), r;
}
var gt = /* @__PURE__ */ n("__proto__,__v_isRef,__isVue"), _t = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(y));
function vt(e) {
	y(e) || (e = String(e));
	let t = /* @__PURE__ */ P(this);
	return N(t, "has", e), t.hasOwnProperty(e);
}
var yt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Lt : It : i ? Ft : Pt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = p(e);
		if (!r) {
			let e;
			if (a && (e = lt[t])) return e;
			if (t === "hasOwnProperty") return vt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ F(e) ? e : n);
		if ((y(t) ? _t.has(t) : gt(t)) || (r || N(e, "get", t), i)) return o;
		if (/* @__PURE__ */ F(o)) {
			let e = a && te(t) ? o : o.value;
			return r && b(e) ? /* @__PURE__ */ Ht(e) : e;
		}
		return b(o) ? r ? /* @__PURE__ */ Ht(o) : /* @__PURE__ */ Bt(o) : o;
	}
}, bt = class extends yt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = p(e) && te(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Gt(i);
			if (!/* @__PURE__ */ Kt(n) && !/* @__PURE__ */ Gt(n) && (i = /* @__PURE__ */ P(i), n = /* @__PURE__ */ P(n)), !a && /* @__PURE__ */ F(i) && !/* @__PURE__ */ F(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : f(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ F(e) ? e : r);
		return e === /* @__PURE__ */ P(r) && (o ? O(n, i) && it(e, "set", t, n, i) : it(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = f(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && it(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!y(t) || !_t.has(t)) && N(e, "has", t), n;
	}
	ownKeys(e) {
		return N(e, "iterate", p(e) ? "length" : tt), Reflect.ownKeys(e);
	}
}, xt = class extends yt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, St = /* @__PURE__ */ new bt(), Ct = /* @__PURE__ */ new xt(), wt = /* @__PURE__ */ new bt(!0), Tt = (e) => e, Et = (e) => Reflect.getPrototypeOf(e);
function Dt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ P(i), o = m(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, u = i[e](...r), d = n ? Tt : t ? Xt : Yt;
		return !t && N(a, "iterate", c ? nt : tt), l(Object.create(u), { next() {
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
function Ot(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function kt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ P(r), a = /* @__PURE__ */ P(n);
			e || (O(n, a) && N(i, "get", n), N(i, "get", a));
			let { has: o } = Et(i), s = t ? Tt : e ? Xt : Yt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && N(/* @__PURE__ */ P(t), "iterate", tt), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ P(n), i = /* @__PURE__ */ P(t);
			return e || (O(t, i) && N(r, "has", t), N(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ P(a), s = t ? Tt : e ? Xt : Yt;
			return !e && N(o, "iterate", tt), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return l(n, e ? {
		add: Ot("add"),
		set: Ot("set"),
		delete: Ot("delete"),
		clear: Ot("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ P(this), r = Et(n), i = /* @__PURE__ */ P(e), a = !t && !/* @__PURE__ */ Kt(e) && !/* @__PURE__ */ Gt(e) ? i : e;
			return r.has.call(n, a) || O(e, a) && r.has.call(n, e) || O(i, a) && r.has.call(n, i) || (n.add(a), it(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ Kt(n) && !/* @__PURE__ */ Gt(n) && (n = /* @__PURE__ */ P(n));
			let r = /* @__PURE__ */ P(this), { has: i, get: a } = Et(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ P(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? O(n, s) && it(r, "set", e, n, s) : it(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ P(this), { has: n, get: r } = Et(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ P(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && it(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ P(this), t = e.size !== 0, n = e.clear();
			return t && it(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Dt(r, e, t);
	}), n;
}
function At(e, t) {
	let n = kt(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(f(n, r) && r in t ? n : t, r, i);
}
var jt = { get: /* @__PURE__ */ At(!1, !1) }, Mt = { get: /* @__PURE__ */ At(!1, !0) }, Nt = { get: /* @__PURE__ */ At(!0, !1) }, Pt = /* @__PURE__ */ new WeakMap(), Ft = /* @__PURE__ */ new WeakMap(), It = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ new WeakMap();
function Rt(e) {
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
function zt(e) {
	return e.__v_skip || !Object.isExtensible(e) ? 0 : Rt(w(e));
}
/* @__NO_SIDE_EFFECTS__ */
function Bt(e) {
	return /* @__PURE__ */ Gt(e) ? e : Ut(e, !1, St, jt, Pt);
}
/* @__NO_SIDE_EFFECTS__ */
function Vt(e) {
	return Ut(e, !1, wt, Mt, Ft);
}
/* @__NO_SIDE_EFFECTS__ */
function Ht(e) {
	return Ut(e, !0, Ct, Nt, It);
}
function Ut(e, t, n, r, i) {
	if (!b(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
	let a = zt(e);
	if (a === 0) return e;
	let o = i.get(e);
	if (o) return o;
	let s = new Proxy(e, a === 2 ? r : n);
	return i.set(e, s), s;
}
/* @__NO_SIDE_EFFECTS__ */
function Wt(e) {
	return /* @__PURE__ */ Gt(e) ? /* @__PURE__ */ Wt(e.__v_raw) : !!(e && e.__v_isReactive);
}
/* @__NO_SIDE_EFFECTS__ */
function Gt(e) {
	return !!(e && e.__v_isReadonly);
}
/* @__NO_SIDE_EFFECTS__ */
function Kt(e) {
	return !!(e && e.__v_isShallow);
}
/* @__NO_SIDE_EFFECTS__ */
function qt(e) {
	return e ? !!e.__v_raw : !1;
}
/* @__NO_SIDE_EFFECTS__ */
function P(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ P(t) : e;
}
function Jt(e) {
	return !f(e, "__v_skip") && Object.isExtensible(e) && ce(e, "__v_skip", !0), e;
}
var Yt = (e) => b(e) ? /* @__PURE__ */ Bt(e) : e, Xt = (e) => b(e) ? /* @__PURE__ */ Ht(e) : e;
/* @__NO_SIDE_EFFECTS__ */
function F(e) {
	return e ? e.__v_isRef === !0 : !1;
}
/* @__NO_SIDE_EFFECTS__ */
function I(e) {
	return Zt(e, !1);
}
function Zt(e, t) {
	return /* @__PURE__ */ F(e) ? e : new Qt(e, t);
}
var Qt = class {
	constructor(e, t) {
		this.dep = new Qe(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ P(e), this._value = t ? e : Yt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Kt(e) || /* @__PURE__ */ Gt(e);
		e = n ? e : /* @__PURE__ */ P(e), O(e, t) && (this._rawValue = e, this._value = n ? e : Yt(e), this.dep.trigger());
	}
};
function L(e) {
	return /* @__PURE__ */ F(e) ? e.value : e;
}
var $t = {
	get: (e, t, n) => t === "__v_raw" ? e : L(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ F(i) && !/* @__PURE__ */ F(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function en(e) {
	return /* @__PURE__ */ Wt(e) ? e : new Proxy(e, $t);
}
/* @__NO_SIDE_EFFECTS__ */
function tn(e) {
	let t = p(e) ? Array(e.length) : {};
	for (let n in e) t[n] = on(e, n);
	return t;
}
var nn = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = y(t) ? t : String(t), this._raw = /* @__PURE__ */ P(e);
		let r = !0, i = e;
		if (!p(e) || y(this._key) || !te(this._key)) do
			r = !/* @__PURE__ */ qt(i) || /* @__PURE__ */ Kt(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = L(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ F(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ F(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return at(this._raw, this._key);
	}
}, rn = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
/* @__NO_SIDE_EFFECTS__ */
function an(e, t, n) {
	return /* @__PURE__ */ F(e) ? e : _(e) ? new rn(e) : b(e) && arguments.length > 1 ? on(e, t, n) : /* @__PURE__ */ I(e);
}
function on(e, t, n) {
	return new nn(e, t, n);
}
var sn = class {
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
function cn(e, t, n = !1) {
	let r, i;
	return _(e) ? r = e : (r = e.get, i = e.set), new sn(r, i, n);
}
var ln = {}, un = /* @__PURE__ */ new WeakMap(), dn = void 0;
function fn(e, t = !1, n = dn) {
	if (n) {
		let t = un.get(n);
		t || un.set(n, t = []), t.push(e);
	}
}
function pn(e, t, n = r) {
	let { immediate: i, deep: o, once: s, scheduler: c, augmentJob: l, call: d } = n, f = (e) => o ? e : /* @__PURE__ */ Kt(e) || o === !1 || o === 0 ? mn(e, 1) : mn(e), m, h, g, v, y = !1, b = !1;
	if (/* @__PURE__ */ F(e) ? (h = () => e.value, y = /* @__PURE__ */ Kt(e)) : /* @__PURE__ */ Wt(e) ? (h = () => f(e), y = !0) : p(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Wt(e) || /* @__PURE__ */ Kt(e)), h = () => e.map((e) => {
		if (/* @__PURE__ */ F(e)) return e.value;
		if (/* @__PURE__ */ Wt(e)) return f(e);
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
		let t = dn;
		dn = m;
		try {
			return d ? d(e, 3, [v]) : e(v);
		} finally {
			dn = t;
		}
	} : a, t && o) {
		let e = h, t = o === !0 ? Infinity : o;
		h = () => mn(e(), t);
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
	let C = b ? Array(e.length).fill(ln) : ln, w = (e) => {
		if (!(!(m.flags & 1) || !m.dirty && !e)) if (t) {
			let e = m.run();
			if (o || y || (b ? e.some((e, t) => O(e, C[t])) : O(e, C))) {
				g && g();
				let n = dn;
				dn = m;
				try {
					let n = [
						e,
						C === ln ? void 0 : b && C[0] === ln ? [] : C,
						v
					];
					C = e, d ? d(t, 3, n) : t(...n);
				} finally {
					dn = n;
				}
			}
		} else m.run();
	};
	return l && l(w), m = new Me(h), m.scheduler = c ? () => c(w, !1) : w, v = (e) => fn(e, !1, m), g = m.onStop = () => {
		let e = un.get(m);
		if (e) {
			if (d) d(e, 4);
			else for (let t of e) t();
			un.delete(m);
		}
	}, t ? i ? w(!0) : C = m.run() : c ? c(w.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function mn(e, t = Infinity, n) {
	if (t <= 0 || !b(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ F(e)) mn(e.value, t, n);
	else if (p(e)) for (let r = 0; r < e.length; r++) mn(e[r], t, n);
	else if (h(e) || m(e)) e.forEach((e) => {
		mn(e, t, n);
	});
	else if (ee(e)) {
		for (let r in e) mn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && mn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function hn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		_n(e, t, n);
	}
}
function gn(e, t, n, r) {
	if (_(e)) {
		let i = hn(e, t, n, r);
		return i && x(i) && i.catch((e) => {
			_n(e, t, n);
		}), i;
	}
	if (p(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(gn(e[a], t, n, r));
		return i;
	}
}
function _n(e, t, n, i = !0) {
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
			qe(), hn(o, null, 10, [
				e,
				i,
				a
			]), Je();
			return;
		}
	}
	vn(e, n, a, i, s);
}
function vn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var R = [], yn = -1, bn = [], xn = null, Sn = 0, Cn = /* @__PURE__ */ Promise.resolve(), wn = null;
function Tn(e) {
	let t = wn || Cn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function En(e) {
	let t = yn + 1, n = R.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = R[r], a = Mn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Dn(e) {
	if (!(e.flags & 1)) {
		let t = Mn(e), n = R[R.length - 1];
		!n || !(e.flags & 2) && t >= Mn(n) ? R.push(e) : R.splice(En(t), 0, e), e.flags |= 1, On();
	}
}
function On() {
	wn ||= Cn.then(Nn);
}
function kn(e) {
	p(e) ? bn.push(...e) : xn && e.id === -1 ? xn.splice(Sn + 1, 0, e) : e.flags & 1 || (bn.push(e), e.flags |= 1), On();
}
function An(e, t, n = yn + 1) {
	for (; n < R.length; n++) {
		let t = R[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			R.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function jn(e) {
	if (bn.length) {
		let e = [...new Set(bn)].sort((e, t) => Mn(e) - Mn(t));
		if (bn.length = 0, xn) {
			xn.push(...e);
			return;
		}
		for (xn = e, Sn = 0; Sn < xn.length; Sn++) {
			let e = xn[Sn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		xn = null, Sn = 0;
	}
}
var Mn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Nn(e) {
	try {
		for (yn = 0; yn < R.length; yn++) {
			let e = R[yn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), hn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; yn < R.length; yn++) {
			let e = R[yn];
			e && (e.flags &= -2);
		}
		yn = -1, R.length = 0, jn(e), wn = null, (R.length || bn.length) && Nn(e);
	}
}
var z = null, Pn = null;
function Fn(e) {
	let t = z;
	return z = e, Pn = e && e.type.__scopeId || null, t;
}
function In(e, t = z, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && ta(-1);
		let i = Fn(t), a;
		try {
			a = e(...n);
		} finally {
			Fn(i), r._d && ta(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function B(e, t) {
	if (z === null) return e;
	let n = Fa(z), i = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [a, o, s, c = r] = t[e];
		a && (_(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && mn(o), i.push({
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
		c && (qe(), gn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Je());
	}
}
function Rn(e, t) {
	if (Z) {
		let n = Z.provides, r = Z.parent && Z.parent.provides;
		r === n && (n = Z.provides = Object.create(r)), n[e] = t;
	}
}
function zn(e, t, n = !1) {
	let r = ba();
	if (r || ai) {
		let i = ai ? ai._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && _(t) ? t.call(r && r.proxy) : t;
	}
}
function Bn() {
	return !!(ba() || ai);
}
var Vn = /* @__PURE__ */ Symbol.for("v-scx"), Hn = () => zn(Vn);
function Un(e, t, n) {
	return Wn(e, t, n);
}
function Wn(e, t, n = r) {
	let { immediate: i, deep: o, flush: s, once: c } = n, u = l({}, n), d = t && i || !t && s !== "post", f;
	if (Ea) {
		if (s === "sync") {
			let e = Hn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = a, e.resume = a, e.pause = a, e;
		}
	}
	let p = Z;
	u.call = (e, t, n) => gn(e, p, t, n);
	let m = !1;
	s === "post" ? u.scheduler = (e) => {
		U(e, p && p.suspense);
	} : s !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : Dn(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = pn(e, t, u);
	return Ea && (f ? f.push(h) : d && h()), h;
}
function Gn(e, t, n) {
	let r = this.proxy, i = v(e) ? e.includes(".") ? Kn(r, e) : () => r[e] : e.bind(r, r), a;
	_(t) ? a = t : (a = t.handler, n = t);
	let o = Ca(this), s = Wn(i, a.bind(r), n);
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
		let n = ba(), r = Zn();
		return () => {
			let i = t.default && lr(t.default(), !0), a = i && i.length ? nr(i) : n.subTree ? X() : void 0;
			if (!a) return;
			let o = /* @__PURE__ */ P(e), { mode: s } = o;
			if (r.isLeaving) return or(a);
			let c = sr(a);
			if (!c) return or(a);
			let l = ar(c, o, r, n, (e) => l = e);
			c.type !== G && cr(c, l);
			let u = n.subTree && sr(n.subTree);
			if (u && u.type !== G && !aa(u, c) && er(n).type !== G) {
				let e = ar(u, o, r, n);
				if (cr(u, e), s === "out-in" && c.type !== G) return r.isLeaving = !0, e.afterLeave = () => {
					r.isLeaving = !1, n.job.flags & 8 || n.update(), delete e.afterLeave, u = void 0;
				}, or(a);
				s === "in-out" && c.type !== G ? e.delayLeave = (e, t, n) => {
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
		for (let n of e) if (n.type !== G) {
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
		e && gn(e, r, 9, t);
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
			t[Yn] && t[Yn](!0);
			let i = S[x];
			i && aa(e, i) && i.el[Yn] && i.el[Yn](), C(r, [t]);
		},
		enter(t) {
			if (S[x] === e) return;
			let r = l, i = u, o = d;
			if (!n.isMounted) if (a) r = v || l, i = y || u, o = b || d;
			else return;
			let s = !1;
			t[Xn] = (e) => {
				s || (s = !0, C(e ? o : i, [t]), ee.delayedLeave && ee.delayedLeave(), t[Xn] = void 0);
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
	return ee;
}
function or(e) {
	if (_r(e)) return e = ua(e), e.children = null, e;
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
		o.type === W ? (o.patchFlag & 128 && i++, r = r.concat(lr(o.children, t, s))) : (t || o.type !== G) && r.push(s == null ? o : ua(o, { key: s }));
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
	let s = i.shapeFlag & 4 ? Fa(i.component) : i.el, c = a ? null : s, { i: l, r: d } = e, m = t && t.r, h = l.refs === r ? l.refs = {} : l.refs, g = l.setupState, y = /* @__PURE__ */ P(g), b = g === r ? o : (e) => fr(h, e) ? !1 : f(y, e), x = (e, t) => !(t && fr(h, t));
	if (m != null && m !== d) {
		if (hr(t), v(m)) h[m] = null, b(m) && (g[m] = null);
		else if (/* @__PURE__ */ F(m)) {
			let e = t;
			x(m, e.k) && (m.value = null), e.k && (h[e.k] = null);
		}
	}
	if (_(d)) hn(d, l, 12, [c, h]);
	else {
		let t = v(d), r = /* @__PURE__ */ F(d);
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
				t.id = -1, pr.set(e, t), U(t, n);
			} else hr(e), i();
		}
	}
}
function hr(e) {
	let t = pr.get(e);
	t && (t.flags |= 8, pr.delete(e));
}
fe().requestIdleCallback, fe().cancelIdleCallback;
var gr = (e) => !!e.type.__asyncLoader, _r = (e) => e.type.__isKeepAlive;
function vr(e, t) {
	br(e, "a", t);
}
function yr(e, t) {
	br(e, "da", t);
}
function br(e, t, n = Z) {
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
function Sr(e, t, n = Z, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			qe();
			let i = Ca(n), a = gn(t, n, e, r);
			return i(), Je(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var Cr = (e) => (t, n = Z) => {
	(!Ea || e === "sp") && Sr(e, (...e) => t(...e), n);
}, wr = Cr("bm"), Tr = Cr("m"), Er = Cr("bu"), Dr = Cr("u"), Or = Cr("bum"), kr = Cr("um"), Ar = Cr("sp"), jr = Cr("rtg"), Mr = Cr("rtc");
function Nr(e, t = Z) {
	Sr("ec", e, t);
}
var Pr = /* @__PURE__ */ Symbol.for("v-ndc");
function V(e, t, n, r) {
	let i, a = n && n[r], o = p(e);
	if (o || v(e)) {
		let n = o && /* @__PURE__ */ Wt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ Kt(e), s = /* @__PURE__ */ Gt(e), e = st(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Xt(Yt(e[n])) : Yt(e[n]) : e[n], n, void 0, a && a[n]);
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
	if (z.ce || z.parent && gr(z.parent) && z.parent.ce) {
		let e = Object.keys(n).length > 0;
		return t !== "default" && (n.name = t), K(), ra(W, null, [Y("slot", n, r && r())], e ? -2 : 64);
	}
	let a = e[t];
	a && a._c && (a._d = !1), K();
	let o = a && Ir(a(n)), s = n.key || o && o.key, c = ra(W, { key: (s && !y(s) ? s : `_${t}`) + (!o && r ? "_fb" : "") }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), a && a._c && (a._d = !0), c;
}
function Ir(e) {
	return e.some((e) => ia(e) ? !(e.type === G || e.type === W && !Ir(e.children)) : !0) ? e : null;
}
var Lr = (e) => e ? Ta(e) ? Fa(e) : Lr(e.parent) : null, Rr = /* @__PURE__ */ l(/* @__PURE__ */ Object.create(null), {
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
		Dn(e.update);
	},
	$nextTick: (e) => e.n ||= Tn.bind(e.proxy),
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
		if (u) return t === "$attrs" && N(e.attrs, "get", ""), u(e);
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
	let { data: i, computed: o, methods: s, watch: c, provide: l, inject: u, created: d, beforeMount: f, mounted: m, beforeUpdate: h, updated: g, activated: v, deactivated: y, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: w, render: ee, renderTracked: te, renderTriggered: ne, errorCaptured: T, serverPrefetch: re, expose: E, inheritAttrs: ie, components: D, directives: ae, filters: oe } = t;
	if (u && Wr(u, r, null), s) for (let e in s) {
		let t = s[e];
		_(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		b(t) && (e.data = /* @__PURE__ */ Bt(t));
	}
	if (Hr = !0, o) for (let e in o) {
		let t = o[e], i = Q({
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
	function O(e, t) {
		p(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (O(wr, f), O(Tr, m), O(Er, h), O(Dr, g), O(vr, v), O(yr, y), O(Nr, T), O(Mr, te), O(jr, ne), O(Or, S), O(kr, w), O(Ar, re), p(E)) if (E.length) {
		let t = e.exposed ||= {};
		E.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	ee && e.render === a && (e.render = ee), ie != null && (e.inheritAttrs = ie), D && (e.components = D), ae && (e.directives = ae), re && dr(e);
}
function Wr(e, t, n = a) {
	p(e) && (e = Qr(e));
	for (let n in e) {
		let r = e[n], i;
		i = b(r) ? "default" in r ? zn(r.from || n, r.default, !0) : zn(r.from || n) : zn(r), /* @__PURE__ */ F(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Gr(e, t, n) {
	gn(p(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
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
	props: ei,
	emits: ei,
	methods: $r,
	computed: $r,
	beforeCreate: H,
	created: H,
	beforeMount: H,
	mounted: H,
	beforeUpdate: H,
	updated: H,
	beforeDestroy: H,
	beforeUnmount: H,
	destroyed: H,
	unmounted: H,
	activated: H,
	deactivated: H,
	errorCaptured: H,
	serverPrefetch: H,
	components: $r,
	directives: $r,
	watch: ti,
	provide: Xr,
	inject: Zr
};
function Xr(e, t) {
	return t ? e ? function() {
		return l(_(e) ? e.call(this, this) : e, _(t) ? t.call(this, this) : t);
	} : t : e;
}
function Zr(e, t) {
	return $r(Qr(e), Qr(t));
}
function Qr(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function H(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function $r(e, t) {
	return e ? l(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ei(e, t) {
	return e ? p(e) && p(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : l(/* @__PURE__ */ Object.create(null), Vr(e), Vr(t ?? {})) : t;
}
function ti(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = l(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = H(e[r], t[r]);
	return n;
}
function ni() {
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
var ri = 0;
function ii(e, t) {
	return function(n, r = null) {
		_(n) || (n = l({}, n)), r != null && !b(r) && (r = null);
		let i = ni(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: ri++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Ra,
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
					let u = c._ceVNode || Y(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, Fa(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (gn(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = ai;
				ai = c;
				try {
					return e();
				} finally {
					ai = t;
				}
			}
		};
		return c;
	};
}
var ai = null, oi = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${E(t)}Modifiers`] || e[`${D(t)}Modifiers`];
function si(e, t, ...n) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || r, a = n, o = t.startsWith("update:"), s = o && oi(i, t.slice(7));
	s && (s.trim && (a = n.map((e) => v(e) ? e.trim() : e)), s.number && (a = n.map(le)));
	let c, l = i[c = oe(t)] || i[c = oe(E(t))];
	!l && o && (l = i[c = oe(D(t))]), l && gn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, gn(u, e, 6, a);
	}
}
var ci = /* @__PURE__ */ new WeakMap();
function li(e, t, n = !1) {
	let r = n ? ci : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!_(e)) {
		let r = (e) => {
			let n = li(e, t, !0);
			n && (s = !0, l(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (b(e) && r.set(e, null), null) : (p(a) ? a.forEach((e) => o[e] = null) : l(o, a), b(e) && r.set(e, o), o);
}
function di(e, t) {
	return !e || !s(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), f(e, t[0].toLowerCase() + t.slice(1)) || f(e, D(t)) || f(e, t));
}
function fi(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Fn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = fa(u.call(t, e, d, f, m, p, h)), y = s;
		} else {
			let e = t;
			v = fa(e.length > 1 ? e(f, {
				attrs: s,
				slots: o,
				emit: l
			}) : e(f, null)), y = t.props ? s : pi(s);
		}
	} catch (t) {
		Zi.length = 0, _n(t, e, 1), v = Y(G);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(c) && (y = mi(y, a)), b = ua(b, y, !1, !0));
	}
	return n.dirs && (b = ua(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && cr(b, n.transition), v = b, Fn(_), v;
}
var pi = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || s(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, mi = (e, t) => {
	let n = {};
	for (let r in e) (!c(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function hi(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? gi(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (_i(o, r, n) && !di(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? gi(r, o, l) : !0 : !!o;
	return !1;
}
function gi(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (_i(t, e, a) && !di(n, a)) return !0;
	}
	return !1;
}
function _i(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && b(r) && b(i) ? !Se(r, i) : r !== i;
}
function vi({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var yi = {}, bi = () => Object.create(yi), xi = (e) => Object.getPrototypeOf(e) === yi;
function Si(e, t, n, r = !1) {
	let i = {}, a = bi();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), wi(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ Vt(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function Ci(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ P(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (di(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (f(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = E(o);
					i[t] = Ti(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		wi(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !f(t, a) && ((r = D(a)) === a || !f(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Ti(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !f(t, e)) && (delete a[e], l = !0);
	}
	l && it(e.attrs, "set", "");
}
function wi(e, t, n, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (t) for (let r in t) {
		if (ne(r)) continue;
		let l = t[r], u;
		a && f(a, u = E(r)) ? !o || !o.includes(u) ? n[u] = l : (c ||= {})[u] = l : di(e.emitsOptions, r) || (!(r in i) || l !== i[r]) && (i[r] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ P(n), i = c || r;
		for (let r = 0; r < o.length; r++) {
			let s = o[r];
			n[s] = Ti(a, t, s, i[s], e, !f(i, s));
		}
	}
	return s;
}
function Ti(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = f(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && _(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = Ca(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === D(n)) && (r = !0));
	}
	return r;
}
var Ei = /* @__PURE__ */ new WeakMap();
function Di(e, t, n = !1) {
	let a = n ? Ei : t.propsCache, o = a.get(e);
	if (o) return o;
	let s = e.props, c = {}, u = [], d = !1;
	if (!_(e)) {
		let r = (e) => {
			d = !0;
			let [n, r] = Di(e, t, !0);
			l(c, n), r && u.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!s && !d) return b(e) && a.set(e, i), i;
	if (p(s)) for (let e = 0; e < s.length; e++) {
		let t = E(s[e]);
		Oi(t) && (c[t] = r);
	}
	else if (s) for (let e in s) {
		let t = E(e);
		if (Oi(t)) {
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
function Oi(e) {
	return e[0] !== "$" && !ne(e);
}
var ki = (e) => e === "_" || e === "_ctx" || e === "$stable", Ai = (e) => p(e) ? e.map(fa) : [fa(e)], ji = (e, t, n) => {
	if (t._n) return t;
	let r = In((...e) => Ai(t(...e)), n);
	return r._c = !1, r;
}, Mi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (ki(n)) continue;
		let i = e[n];
		if (_(i)) t[n] = ji(n, i, r);
		else if (i != null) {
			let e = Ai(i);
			t[n] = () => e;
		}
	}
}, Ni = (e, t) => {
	let n = Ai(t);
	e.slots.default = () => n;
}, Pi = (e, t, n) => {
	for (let r in t) (n || !ki(r)) && (e[r] = t[r]);
}, Fi = (e, t, n) => {
	let r = e.slots = bi();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Pi(r, t, n), n && ce(r, "_", e, !0)) : Mi(t, r);
	} else t && Ni(e, t);
}, Ii = (e, t, n) => {
	let { vnode: i, slots: a } = e, o = !0, s = r;
	if (i.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? o = !1 : Pi(a, t, n) : (o = !t.$stable, Mi(t, a)), s = t;
	} else t && (Ni(e, t), s = { default: 1 });
	if (o) for (let e in a) !ki(e) && s[e] == null && delete a[e];
}, U = Ji;
function Li(e) {
	return Ri(e);
}
function Ri(e, t) {
	let n = fe();
	n.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = a, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !aa(e, t) && (r = ye(e), he(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case Yi:
				y(e, t, n, r);
				break;
			case G:
				b(e, t, n, r);
				break;
			case Xi:
				e ?? x(t, n, r, o);
				break;
			case W:
				D(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? ae(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, Se);
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
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && T(e.children, d, null, r, i, zi(e, a), s, u), _ && Ln(e, null, r, "created"), te(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ne(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && ga(f, r, e);
		}
		_ && Ln(e, null, r, "beforeMount");
		let v = Vi(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && U(() => {
			try {
				f && ga(f, r, e), v && g.enter(d), _ && Ln(e, null, r, "mounted");
			} finally {}
		}, i);
	}, te = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || qi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				te(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, T = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? pa(e[l]) : fa(e[l]), t, n, r, i, a, o, s);
	}, re = (e, t, n, i, a, o, s) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || r, h = t.props || r, g;
		if (n && Bi(n, !1), (g = h.onVnodeBeforeUpdate) && ga(g, n, t, e), f && Ln(t, e, n, "beforeUpdate"), n && Bi(n, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? E(e.dynamicChildren, d, l, n, i, zi(t, a), o) : s || ue(e, t, l, null, n, i, zi(t, a), o, !1), u > 0) {
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
		((g = h.onVnodeUpdated) || f) && U(() => {
			g && ga(g, n, t, e), f && Ln(t, e, n, "updated");
		}, i);
	}, E = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === W || !aa(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
		}
	}, ie = (e, t, n, i, a) => {
		if (t !== n) {
			if (t !== r) for (let r in t) !ne(r) && !(r in n) && c(e, r, t[r], null, a, i);
			for (let r in n) {
				if (ne(r)) continue;
				let o = n[r], s = t[r];
				o !== s && r !== "value" && c(e, r, s, o, a, i);
			}
			"value" in n && c(e, "value", t.value, n.value, a);
		}
	}, D = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), T(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (E(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Hi(e, t, !0)) : ue(e, t, n, f, i, a, s, c, l);
	}, ae = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : oe(t, n, r, i, a, o, c) : O(e, t, c);
	}, oe = (e, t, n, r, i, a, o) => {
		let s = e.component = ya(e, r, i);
		if (_r(e) && (s.ctx.renderer = Se), Da(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ce, o), !e.el) {
				let r = s.subTree = Y(G);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else ce(s, e, t, n, i, a, o);
	}, O = (e, t, n) => {
		let r = t.component = e.component;
		if (hi(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			le(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, ce = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Wi(e);
					if (n) {
						t && (t.el = c.el, le(e, t, o)), n.asyncDep.then(() => {
							U(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Bi(e, !1), t ? (t.el = c.el, le(e, t, o)) : t = c, n && se(n), (d = t.props && t.props.onVnodeBeforeUpdate) && ga(d, s, t, c), Bi(e, !0);
				let f = fi(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), ye(p), e, i, a), t.el = f.el, u === null && vi(e, f.el), r && U(r, i), (d = t.props && t.props.onVnodeUpdated) && U(() => ga(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = gr(t);
				if (Bi(e, !1), l && se(l), !m && (o = c && c.onVnodeBeforeMount) && ga(o, d, t), Bi(e, !0), s && we) {
					let t = () => {
						e.subTree = fi(e), we(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = fi(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && U(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					U(() => ga(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && gr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && U(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Me(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Dn(u), Bi(e, !0), l();
	}, le = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Ci(e, t.props, r, n), Ii(e, t.children, n), qe(), An(e), Je();
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
		m & 8 ? (u & 16 && ve(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? pe(l, d, n, r, i, a, o, s, c) : ve(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && T(d, n, r, i, a, o, s, c));
	}, de = (e, t, n, r, a, o, s, c, l) => {
		e ||= i, t ||= i;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let r = t[p] = l ? pa(t[p]) : fa(t[p]);
			v(e[p], r, n, null, a, o, s, c, l);
		}
		u > d ? ve(e, a, o, !0, !1, f) : T(t, n, r, a, o, s, c, l, f);
	}, pe = (e, t, n, r, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], i = t[u] = l ? pa(t[u]) : fa(t[u]);
			if (aa(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], i = t[p] = l ? pa(t[p]) : fa(t[p]);
			if (aa(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, i = e < d ? t[e].el : r;
				for (; u <= p;) v(null, t[u] = l ? pa(t[u]) : fa(t[u]), n, i, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) he(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? pa(t[u]) : fa(t[u]);
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
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && aa(r, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? he(r, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(r, t[i], n, null, a, o, s, c, l), y++);
			}
			let w = x ? Ui(C) : i;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, i = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Ki(f) : r;
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
		if (c === W) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) me(u[e], t, n, r);
			o(e.anchor, t, n);
			return;
		}
		if (c === Xi) {
			S(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) if (r === 0) l.beforeEnter(a), o(a, t, n), U(() => l.enter(a), i);
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
	}, he = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (qe(), mr(s, null, n, e, !0), Je()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !gr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && ga(_, t, e), u & 6) k(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Ln(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Se, r) : l && !l.hasOnce && (a !== W || d > 0 && d & 64) ? ve(l, t, n, !1, !0) : (a === W && d & 384 || !i && u & 16) && ve(c, t, n), r && ge(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && U(() => {
			_ && ga(_, t, e), h && Ln(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, ge = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === W) {
			_e(n, r);
			return;
		}
		if (t === Xi) {
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
		Gi(c), Gi(l), r && se(r), i.stop(), a && (a.flags |= 8, he(o, e, t, n)), s && U(s, t), U(() => {
			e.isUnmounted = !0;
		}, t);
	}, ve = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) he(e[o], t, n, r, i);
	}, ye = (e) => {
		if (e.shapeFlag & 6) return ye(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[qn];
		return n ? h(n) : t;
	}, be = !1, xe = (e, t, n) => {
		let r;
		e == null ? t._vnode && (he(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, be ||= (be = !0, An(r), jn(), !1);
	}, Se = {
		p: v,
		um: he,
		m: me,
		r: ge,
		mt: oe,
		mc: T,
		pc: ue,
		pbc: E,
		n: ye,
		o: e
	}, Ce, we;
	return t && ([Ce, we] = t(Se)), {
		render: xe,
		hydrate: Ce,
		createApp: ii(xe, Ce)
	};
}
function zi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Bi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Vi(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Hi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (p(r) && p(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = pa(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Hi(t, a)), a.type === Yi && (a.patchFlag === -1 && (a = i[e] = pa(a)), a.el = t.el), a.type === G && !a.el && (a.el = t.el);
	}
}
function Ui(e) {
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
function Wi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Wi(t);
}
function Gi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Ki(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? Ki(t.subTree) : null;
}
var qi = (e) => e.__isSuspense;
function Ji(e, t) {
	t && t.pendingBranch ? p(e) ? t.effects.push(...e) : t.effects.push(e) : kn(e);
}
var W = /* @__PURE__ */ Symbol.for("v-fgt"), Yi = /* @__PURE__ */ Symbol.for("v-txt"), G = /* @__PURE__ */ Symbol.for("v-cmt"), Xi = /* @__PURE__ */ Symbol.for("v-stc"), Zi = [], Qi = null;
function K(e = !1) {
	Zi.push(Qi = e ? null : []);
}
function $i() {
	Zi.pop(), Qi = Zi[Zi.length - 1] || null;
}
var ea = 1;
function ta(e, t = !1) {
	ea += e, e < 0 && Qi && t && (Qi.hasOnce = !0);
}
function na(e) {
	return e.dynamicChildren = ea > 0 ? Qi || i : null, $i(), ea > 0 && Qi && Qi.push(e), e;
}
function q(e, t, n, r, i, a) {
	return na(J(e, t, n, r, i, a, !0));
}
function ra(e, t, n, r, i) {
	return na(Y(e, t, n, r, i, !0));
}
function ia(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function aa(e, t) {
	return e.type === t.type && e.key === t.key;
}
var oa = ({ key: e }) => e ?? null, sa = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : v(e) || /* @__PURE__ */ F(e) || _(e) ? {
	i: z,
	r: e,
	k: t,
	f: !!n
} : e);
function J(e, t = null, n = null, r = 0, i = null, a = e === W ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && oa(t),
		ref: t && sa(t),
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
		ctx: z
	};
	return s ? (ma(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= v(n) ? 8 : 16), ea > 0 && !o && Qi && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Qi.push(c), c;
}
var Y = ca;
function ca(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === Pr) && (e = G), ia(e)) {
		let r = ua(e, t, !0);
		return n && ma(r, n), ea > 0 && !a && Qi && (r.shapeFlag & 6 ? Qi[Qi.indexOf(e)] = r : Qi.push(r)), r.patchFlag = -2, r;
	}
	if (Ia(e) && (e = e.__vccOpts), t) {
		t = la(t);
		let { class: e, style: n } = t;
		e && !v(e) && (t.class = k(e)), b(n) && (/* @__PURE__ */ qt(n) && !p(n) && (n = l({}, n)), t.style = pe(n));
	}
	let o = v(e) ? 1 : qi(e) ? 128 : Jn(e) ? 64 : b(e) ? 4 : _(e) ? 2 : 0;
	return J(e, t, n, r, i, o, a, !0);
}
function la(e) {
	return e ? /* @__PURE__ */ qt(e) || xi(e) ? l({}, e) : e : null;
}
function ua(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? ha(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && oa(l),
		ref: t && t.ref ? n && a ? p(a) ? a.concat(sa(t)) : [a, sa(t)] : sa(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== W ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && ua(e.ssContent),
		ssFallback: e.ssFallback && ua(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && cr(u, c.clone(u)), u;
}
function da(e = " ", t = 0) {
	return Y(Yi, null, e, t);
}
function X(e = "", t = !1) {
	return t ? (K(), ra(G, null, e)) : Y(G, null, e);
}
function fa(e) {
	return e == null || typeof e == "boolean" ? Y(G) : p(e) ? Y(W, null, e.slice()) : ia(e) ? pa(e) : Y(Yi, null, String(e));
}
function pa(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : ua(e);
}
function ma(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (p(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), ma(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !xi(t) ? t._ctx = z : r === 3 && z && (z.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else _(t) ? (t = {
		default: t,
		_ctx: z
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [da(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function ha(...e) {
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
function ga(e, t, n, r = null) {
	gn(e, t, 7, [n, r]);
}
var _a = ni(), va = 0;
function ya(e, t, n) {
	let i = e.type, a = (t ? t.appContext : e.appContext) || _a, o = {
		uid: va++,
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
		propsOptions: Di(i, a),
		emitsOptions: li(i, a),
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
	return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = si.bind(null, o), e.ce && e.ce(o), o;
}
var Z = null, ba = () => Z || z, xa, Sa;
{
	let e = fe(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	xa = t("__VUE_INSTANCE_SETTERS__", (e) => Z = e), Sa = t("__VUE_SSR_SETTERS__", (e) => Ea = e);
}
var Ca = (e) => {
	let t = Z;
	return xa(e), e.scope.on(), () => {
		e.scope.off(), xa(t);
	};
}, wa = () => {
	Z && Z.scope.off(), xa(null);
};
function Ta(e) {
	return e.vnode.shapeFlag & 4;
}
var Ea = !1;
function Da(e, t = !1, n = !1) {
	t && Sa(t);
	let { props: r, children: i } = e.vnode, a = Ta(e);
	Si(e, r, a, t), Fi(e, i, n || t);
	let o = a ? Oa(e, t) : void 0;
	return t && Sa(!1), o;
}
function Oa(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Br);
	let { setup: r } = n;
	if (r) {
		qe();
		let n = e.setupContext = r.length > 1 ? Pa(e) : null, i = Ca(e), a = hn(r, e, 0, [e.props, n]), o = x(a);
		if (Je(), i(), (o || e.sp) && !gr(e) && dr(e), o) {
			if (a.then(wa, wa), t) return a.then((n) => {
				ka(e, n, t);
			}).catch((t) => {
				_n(t, e, 0);
			});
			e.asyncDep = a;
		} else ka(e, a, t);
	} else Ma(e, t);
}
function ka(e, t, n) {
	_(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : b(t) && (e.setupState = en(t)), Ma(e, n);
}
var Aa, ja;
function Ma(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && Aa && !r.render) {
			let t = r.template || qr(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r;
				r.render = Aa(t, l(l({
					isCustomElement: n,
					delimiters: a
				}, i), o));
			}
		}
		e.render = r.render || a, ja && ja(e);
	}
	{
		let t = Ca(e);
		qe();
		try {
			Ur(e);
		} finally {
			Je(), t();
		}
	}
}
var Na = { get(e, t) {
	return N(e, "get", ""), e[t];
} };
function Pa(e) {
	return {
		attrs: new Proxy(e.attrs, Na),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Fa(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(en(Jt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Rr) return Rr[n](e);
		},
		has(e, t) {
			return t in e || t in Rr;
		}
	}) : e.proxy;
}
function Ia(e) {
	return _(e) && "__vccOpts" in e;
}
var Q = (e, t) => /* @__PURE__ */ cn(e, t, Ea);
function La(e, t, n) {
	try {
		ta(-1);
		let r = arguments.length;
		return r === 2 ? b(t) && !p(t) ? ia(t) ? Y(e, null, [t]) : Y(e, t) : Y(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && ia(n) && (n = [n]), Y(e, t, n));
	} finally {
		ta(1);
	}
}
var Ra = "3.5.34", za = void 0, Ba = typeof window < "u" && window.trustedTypes;
if (Ba) try {
	za = /* @__PURE__ */ Ba.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Va = za ? (e) => za.createHTML(e) : (e) => e, Ha = "http://www.w3.org/2000/svg", Ua = "http://www.w3.org/1998/Math/MathML", Wa = typeof document < "u" ? document : null, Ga = Wa && /* @__PURE__ */ Wa.createElement("template"), Ka = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Wa.createElementNS(Ha, e) : t === "mathml" ? Wa.createElementNS(Ua, e) : n ? Wa.createElement(e, { is: n }) : Wa.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Wa.createTextNode(e),
	createComment: (e) => Wa.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Wa.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			Ga.innerHTML = Va(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Ga.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, qa = "transition", Ja = "animation", Ya = /* @__PURE__ */ Symbol("_vtc"), Xa = {
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
}, Za = /* @__PURE__ */ l({}, $n, Xa), Qa = /* @__PURE__ */ ((e) => (e.displayName = "Transition", e.props = Za, e))((e, { slots: t }) => La(rr, to(e), t)), $a = (e, t = []) => {
	p(e) ? e.forEach((e) => e(...t)) : e && e(...t);
}, eo = (e) => e ? p(e) ? e.some((e) => e.length > 1) : e.length > 1 : !1;
function to(e) {
	let t = {};
	for (let n in e) n in Xa || (t[n] = e[n]);
	if (e.css === !1) return t;
	let { name: n = "v", type: r, duration: i, enterFromClass: a = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: s = `${n}-enter-to`, appearFromClass: c = a, appearActiveClass: u = o, appearToClass: d = s, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: p = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, h = no(i), g = h && h[0], _ = h && h[1], { onBeforeEnter: v, onEnter: y, onEnterCancelled: b, onLeave: x, onLeaveCancelled: S, onBeforeAppear: C = v, onAppear: w = y, onAppearCancelled: ee = b } = t, te = (e, t, n, r) => {
		e._enterCancelled = r, ao(e, t ? d : s), ao(e, t ? u : o), n && n();
	}, ne = (e, t) => {
		e._isLeaving = !1, ao(e, f), ao(e, m), ao(e, p), t && t();
	}, T = (e) => (t, n) => {
		let i = e ? w : y, o = () => te(t, e, n);
		$a(i, [t, o]), oo(() => {
			ao(t, e ? c : a), io(t, e ? d : s), eo(i) || co(t, r, g, o);
		});
	};
	return l(t, {
		onBeforeEnter(e) {
			$a(v, [e]), io(e, a), io(e, o);
		},
		onBeforeAppear(e) {
			$a(C, [e]), io(e, c), io(e, u);
		},
		onEnter: T(!1),
		onAppear: T(!0),
		onLeave(e, t) {
			e._isLeaving = !0;
			let n = () => ne(e, t);
			io(e, f), e._enterCancelled ? (io(e, p), po(e)) : (po(e), io(e, p)), oo(() => {
				e._isLeaving && (ao(e, f), io(e, m), eo(x) || co(e, r, _, n));
			}), $a(x, [e, n]);
		},
		onEnterCancelled(e) {
			te(e, !1, void 0, !0), $a(b, [e]);
		},
		onAppearCancelled(e) {
			te(e, !0, void 0, !0), $a(ee, [e]);
		},
		onLeaveCancelled(e) {
			ne(e), $a(S, [e]);
		}
	});
}
function no(e) {
	if (e == null) return null;
	if (b(e)) return [ro(e.enter), ro(e.leave)];
	{
		let t = ro(e);
		return [t, t];
	}
}
function ro(e) {
	return ue(e);
}
function io(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e[Ya] || (e[Ya] = /* @__PURE__ */ new Set())).add(t);
}
function ao(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
	let n = e[Ya];
	n && (n.delete(t), n.size || (e[Ya] = void 0));
}
function oo(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
var so = 0;
function co(e, t, n, r) {
	let i = e._endId = ++so, a = () => {
		i === e._endId && r();
	};
	if (n != null) return setTimeout(a, n);
	let { type: o, timeout: s, propCount: c } = lo(e, t);
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
function lo(e, t) {
	let n = window.getComputedStyle(e), r = (e) => (n[e] || "").split(", "), i = r(`${qa}Delay`), a = r(`${qa}Duration`), o = uo(i, a), s = r(`${Ja}Delay`), c = r(`${Ja}Duration`), l = uo(s, c), u = null, d = 0, f = 0;
	t === qa ? o > 0 && (u = qa, d = o, f = a.length) : t === Ja ? l > 0 && (u = Ja, d = l, f = c.length) : (d = Math.max(o, l), u = d > 0 ? o > l ? qa : Ja : null, f = u ? u === qa ? a.length : c.length : 0);
	let p = u === qa && /\b(?:transform|all)(?:,|$)/.test(r(`${qa}Property`).toString());
	return {
		type: u,
		timeout: d,
		propCount: f,
		hasTransform: p
	};
}
function uo(e, t) {
	for (; e.length < t.length;) e = e.concat(e);
	return Math.max(...t.map((t, n) => fo(t) + fo(e[n])));
}
function fo(e) {
	return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function po(e) {
	return (e ? e.ownerDocument : document).body.offsetHeight;
}
function mo(e, t, n) {
	let r = e[Ya];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var ho = /* @__PURE__ */ Symbol("_vod"), go = /* @__PURE__ */ Symbol("_vsh"), _o = /* @__PURE__ */ Symbol(""), vo = /(?:^|;)\s*display\s*:/;
function yo(e, t, n) {
	let r = e.style, i = v(n), a = !1;
	if (n && !i) {
		if (t) if (v(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? xo(r, t, "");
		}
		else for (let e in t) n[e] ?? xo(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? xo(r, i, "") : To(e, i, !v(t) && t ? t[i] : void 0, o) || xo(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[_o];
			e && (n += ";" + e), r.cssText = n, a = vo.test(n);
		}
	} else t && e.removeAttribute("style");
	ho in e && (e[ho] = a ? r.display : "", e[go] && (r.display = "none"));
}
var bo = /\s*!important$/;
function xo(e, t, n) {
	if (p(n)) n.forEach((n) => xo(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = wo(e, t);
		bo.test(n) ? e.setProperty(D(r), n.replace(bo, ""), "important") : e[r] = n;
	}
}
var So = [
	"Webkit",
	"Moz",
	"ms"
], Co = {};
function wo(e, t) {
	let n = Co[t];
	if (n) return n;
	let r = E(t);
	if (r !== "filter" && r in e) return Co[t] = r;
	r = ae(r);
	for (let n = 0; n < So.length; n++) {
		let i = So[n] + r;
		if (i in e) return Co[t] = i;
	}
	return t;
}
function To(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && v(r) && n === r;
}
var Eo = "http://www.w3.org/1999/xlink";
function Do(e, t, n, r, i, a = ye(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Eo, t.slice(6, t.length)) : e.setAttributeNS(Eo, t, n) : n == null || a && !be(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : y(n) ? String(n) : n);
}
function Oo(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Va(n) : n);
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
function ko(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Ao(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var jo = /* @__PURE__ */ Symbol("_vei");
function Mo(e, t, n, r, i = null) {
	let a = e[jo] || (e[jo] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Po(t);
		r ? ko(e, n, a[t] = Ro(r, i), s) : o && (Ao(e, n, o, s), a[t] = void 0);
	}
}
var No = /(?:Once|Passive|Capture)$/;
function Po(e) {
	let t;
	if (No.test(e)) {
		t = {};
		let n;
		for (; n = e.match(No);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : D(e.slice(2)), t];
}
var Fo = 0, Io = /* @__PURE__ */ Promise.resolve(), Lo = () => Fo ||= (Io.then(() => Fo = 0), Date.now());
function Ro(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		gn(zo(e, n.value), t, 5, [e]);
	};
	return n.value = e, n.attached = Lo(), n;
}
function zo(e, t) {
	if (p(t)) {
		let n = e.stopImmediatePropagation;
		return e.stopImmediatePropagation = () => {
			n.call(e), e._stopped = !0;
		}, t.map((e) => (t) => !t._stopped && e && e(t));
	} else return t;
}
var Bo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Vo = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? mo(e, r, o) : t === "style" ? yo(e, n, r) : s(t) ? c(t) || Mo(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ho(e, t, r, o)) ? (Oo(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Do(e, t, r, o, a, t !== "value")) : e._isVueCE && (Uo(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !v(r))) ? Oo(e, E(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Do(e, t, r, o));
};
function Ho(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Bo(t) && _(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Bo(t) && v(n) ? !1 : t in e;
}
function Uo(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = E(t);
	return Array.isArray(n) ? n.some((e) => E(e) === r) : Object.keys(n).some((e) => E(e) === r);
}
var Wo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return p(t) ? (e) => se(t, e) : t;
};
function Go(e) {
	e.target.composing = !0;
}
function Ko(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var qo = /* @__PURE__ */ Symbol("_assign");
function Jo(e, t, n) {
	return t && (e = e.trim()), n && (e = le(e)), e;
}
var Yo = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[qo] = Wo(i);
		let a = r || i.props && i.props.type === "number";
		ko(e, t ? "change" : "input", (t) => {
			t.target.composing || e[qo](Jo(e.value, n, a));
		}), (n || a) && ko(e, "change", () => {
			e.value = Jo(e.value, n, a);
		}), t || (ko(e, "compositionstart", Go), ko(e, "compositionend", Ko), ko(e, "change", Ko));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[qo] = Wo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? le(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, Xo = {
	deep: !0,
	created(e, t, n) {
		e[qo] = Wo(n), ko(e, "change", () => {
			let t = e._modelValue, n = es(e), r = e.checked, i = e[qo];
			if (p(t)) {
				let e = Ce(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (h(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(ts(e, r));
		});
	},
	mounted: Zo,
	beforeUpdate(e, t, n) {
		e[qo] = Wo(n), Zo(e, t, n);
	}
};
function Zo(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (p(t)) i = Ce(t, r.props.value) > -1;
	else if (h(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = Se(t, ts(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var Qo = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = h(t);
		ko(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? le(es(e)) : es(e));
			e[qo](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, Tn(() => {
				e._assigning = !1;
			});
		}), e[qo] = Wo(r);
	},
	mounted(e, { value: t }) {
		$o(e, t);
	},
	beforeUpdate(e, t, n) {
		e[qo] = Wo(n);
	},
	updated(e, { value: t }) {
		e._assigning || $o(e, t);
	}
};
function $o(e, t) {
	let n = e.multiple, r = p(t);
	if (!(n && !r && !h(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = es(a);
			if (n) if (r) {
				let e = typeof o;
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = Ce(t, o) > -1;
			} else a.selected = t.has(o);
			else if (Se(es(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function es(e) {
	return "_value" in e ? e._value : e.value;
}
function ts(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var ns = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], rs = {
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
	exact: (e, t) => ns.some((n) => e[`${n}Key`] && !t.includes(n))
}, is = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = rs[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, as = /* @__PURE__ */ l({ patchProp: Vo }, Ka), os;
function ss() {
	return os ||= Li(as);
}
var cs = ((...e) => {
	let t = ss().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = us(e);
		if (!r) return;
		let i = t._component;
		!_(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, ls(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function ls(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function us(e) {
	return v(e) ? document.querySelector(e) : e;
}
//#endregion
//#region node_modules/pinia/dist/pinia.mjs
var ds = typeof window < "u", fs, ps = (e) => fs = e, ms = Symbol();
function hs(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var gs;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(gs ||= {});
var _s = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function vs(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function ys(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		ws(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function bs(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function xs(e) {
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
var Ss = typeof navigator == "object" ? navigator : { userAgent: "" }, Cs = /Macintosh/.test(Ss.userAgent) && /AppleWebKit/.test(Ss.userAgent) && !/Safari/.test(Ss.userAgent), ws = ds ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Cs ? Ts : "msSaveOrOpenBlob" in Ss ? Es : Ds : () => {};
function Ts(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? xs(r) : bs(r.href) ? ys(e, t, n) : (r.target = "_blank", xs(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		xs(r);
	}, 0));
}
function Es(e, t = "download", n) {
	if (typeof e == "string") if (bs(e)) ys(e, t, n);
	else {
		let t = document.createElement("a");
		t.href = e, t.target = "_blank", setTimeout(function() {
			xs(t);
		});
	}
	else navigator.msSaveOrOpenBlob(vs(e, n), t);
}
function Ds(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return ys(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(_s.HTMLElement)) || "safari" in _s, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || Cs) && typeof FileReader < "u") {
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
var { assign: Os } = Object;
function ks() {
	let e = Oe(!0), t = e.run(() => /* @__PURE__ */ I({})), n = [], r = [], i = Jt({
		install(e) {
			ps(i), i._a = e, e.provide(ms, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var As = () => {};
function js(e, t, n, r = As) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && ke() && Ae(i), i;
}
function Ms(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var Ns = (e) => e(), Ps = Symbol(), Fs = Symbol();
function Is(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		hs(i) && hs(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ F(r) && !/* @__PURE__ */ Wt(r) ? e[n] = Is(i, r) : e[n] = r;
	}
	return e;
}
var Ls = Symbol();
function Rs(e) {
	return !hs(e) || !Object.prototype.hasOwnProperty.call(e, Ls);
}
var { assign: zs } = Object;
function Bs(e) {
	return !!(/* @__PURE__ */ F(e) && e.effect);
}
function Vs(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), zs(/* @__PURE__ */ tn(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Jt(Q(() => {
			ps(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = Hs(e, l, t, n, r, !0), c;
}
function Hs(e, t, n = {}, r, i, a) {
	let o, s = zs({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = r.state.value[e];
	!a && !p && (r.state.value[e] = {});
	let m;
	function h(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: gs.patchFunction,
			storeId: e,
			events: void 0
		}) : (Is(r.state.value[e], t), n = {
			type: gs.patchObject,
			payload: t,
			storeId: e,
			events: void 0
		});
		let i = m = Symbol();
		Tn().then(() => {
			m === i && (l = !0);
		}), u = !0, Ms(d, n, r.state.value[e]);
	}
	let g = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			zs(e, t);
		});
	} : As;
	function _() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let v = (t, n = "") => {
		if (Ps in t) return t[Fs] = n, t;
		let i = function() {
			ps(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			Ms(f, {
				args: n,
				name: i[Fs],
				store: y,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : y, n);
			} catch (e) {
				throw Ms(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (Ms(a, e), e)).catch((e) => (Ms(o, e), Promise.reject(e))) : (Ms(a, l), l);
		};
		return i[Ps] = !0, i[Fs] = n, i;
	}, y = /* @__PURE__ */ Bt({
		_p: r,
		$id: e,
		$onAction: js.bind(null, f),
		$patch: h,
		$reset: g,
		$subscribe(t, n = {}) {
			let i = js(d, t, n.detached, () => a()), a = o.run(() => Un(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: gs.direct,
					events: void 0
				}, r);
			}, zs({}, c, n)));
			return i;
		},
		$dispose: _
	});
	r._s.set(e, y);
	let b = (r._a && r._a.runWithContext || Ns)(() => r._e.run(() => (o = Oe()).run(() => t({ action: v }))));
	for (let t in b) {
		let n = b[t];
		/* @__PURE__ */ F(n) && !Bs(n) || /* @__PURE__ */ Wt(n) ? a || (p && Rs(n) && (/* @__PURE__ */ F(n) ? n.value = p[t] : Is(n, p[t])), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = v(n, t), s.actions[t] = n);
	}
	return zs(y, b), zs(/* @__PURE__ */ P(y), b), Object.defineProperty(y, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			h((t) => {
				zs(t, e);
			});
		}
	}), r._p.forEach((e) => {
		zs(y, o.run(() => e({
			store: y,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), p && a && n.hydrate && n.hydrate(y.$state, p), l = !0, u = !0, y;
}
function Us(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Bn();
		return n ||= o ? zn(ms, null) : null, n && ps(n), n = fs, n._s.has(e) || (i ? Hs(e, t, r, n) : Vs(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
function Ws(e) {
	let t = /* @__PURE__ */ P(e), n = {};
	for (let r in t) {
		let i = t[r];
		i.effect ? n[r] = Q({
			get: () => e[r],
			set(t) {
				e[r] = t;
			}
		}) : (/* @__PURE__ */ F(i) || /* @__PURE__ */ Wt(i)) && (n[r] = /* @__PURE__ */ an(e, r));
	}
	return n;
}
//#endregion
//#region src/functions/npc-builder/create-default-trait-config.ts
function Gs() {
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
//#region src/functions/npc-builder/skill-specialization.ts
function Ks(e, t, n) {
	return `${e}:${Zs(t)}:${n}`;
}
function qs(e, t) {
	let n = e.trim(), r = t.trim();
	return r ? `${n} (${r})` : n;
}
function Js(e) {
	let t = /^(?<base>.+?)\s*\((?<specialization>[^)]+)\)\s*$/.exec(e.trim());
	if (!t?.groups) return null;
	let n = t.groups.base?.trim() ?? "", r = t.groups.specialization?.trim() ?? "";
	return !n || !r || Ys(e) ? null : {
		baseName: n,
		originalName: e,
		specialization: r
	};
}
function Ys(e) {
	let t = /^(?<base>.+?)\s*\((?<specialization>[^)]+)\)\s*$/.exec(e.trim());
	if (!t?.groups) return null;
	let n = t.groups.base?.trim() ?? "", r = t.groups.specialization?.trim() ?? "", i = $s(r);
	return !n || !r || !Qs(r, i) ? null : {
		baseName: n,
		options: i,
		originalName: e,
		specialization: r
	};
}
function Xs(e, t) {
	let n = /* @__PURE__ */ new Map();
	return t.map((t) => {
		let r = Zs(t), i = n.get(r) ?? 0;
		return n.set(r, i + 1), {
			occurrence: i,
			originalName: t,
			resolutionKey: Ks(e, t, i)
		};
	});
}
function Zs(e) {
	return e.trim().replace(/\s+/g, " ").toLocaleLowerCase();
}
function Qs(e, t) {
	return e.trim().toLocaleLowerCase() === "any" || t.length > 1;
}
function $s(e) {
	return e.split(/\s+or\s+/i).map((e) => e.trim()).filter(Boolean);
}
//#endregion
//#region src/functions/npc-builder/trapping-resolution.ts
function ec(e, t = "trapping") {
	return {
		candidates: [],
		searchTerms: ic(e),
		selectedCandidateUuid: "",
		selectedItemType: t,
		selectedName: e.trim(),
		status: "fallback"
	};
}
function tc(e) {
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
function nc(e) {
	return {
		candidates: [],
		searchTerms: ic(e),
		selectedCandidateUuid: "",
		selectedItemType: "trapping",
		selectedName: e.trim(),
		status: "unresolved"
	};
}
function rc(e, t) {
	let n = ic(e), r = oc(n, t), i = r.filter((e) => e.matchKind === "exact");
	return i.length === 1 ? cc("matched", n, i[0]) : i.length > 1 ? cc("ambiguous", n, i[0], { candidates: r }) : r.length ? {
		candidates: r,
		searchTerms: n,
		selectedCandidateUuid: "",
		selectedItemType: "trapping",
		selectedName: e.trim(),
		status: "ambiguous"
	} : ec(e);
}
function ic(e) {
	let t = e.split(/\s+or\s+/i).map((e) => e.trim()).filter(Boolean);
	return t.length ? fc(t) : [e.trim()].filter(Boolean);
}
function ac(e, t) {
	if (lc(e) === lc(t)) return "exact";
	let n = uc(e), r = uc(t);
	if (!n || !r) return null;
	if (n === r || n.includes(r) || r.includes(n)) return "near";
	let i = n.split(" "), a = r.split(" ");
	return i.every((e) => a.includes(e)) ? "near" : null;
}
function oc(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) for (let e of t) {
		let t = ac(r, e.name);
		t && n.get(e.uuid)?.matchKind !== "exact" && n.set(e.uuid, {
			itemType: e.itemType,
			matchKind: t,
			name: e.name,
			searchTerm: r,
			sourceLabel: e.sourceLabel,
			uuid: e.uuid
		});
	}
	return [...n.values()].sort(sc);
}
function sc(e, t) {
	return e.matchKind === t.matchKind ? e.name.localeCompare(t.name) : e.matchKind === "exact" ? -1 : 1;
}
function cc(e, t, n, r = {}) {
	return {
		candidates: r.candidates ?? (n ? [n] : []),
		searchTerms: t,
		selectedCandidateUuid: n?.uuid ?? "",
		selectedItemType: n?.itemType ?? "trapping",
		selectedName: n?.name ?? "",
		status: e
	};
}
function lc(e) {
	return e.trim().toLocaleLowerCase().replace(/\s+/g, " ");
}
function uc(e) {
	return lc(e).replace(/&/g, " and ").replace(/[()[\],.;:]/g, " ").replace(/\b(a|an|the|some|pair of|pairs of)\b/g, " ").split(/\s+/).map(dc).filter(Boolean).join(" ");
}
function dc(e) {
	return e.endsWith("ies") && e.length > 4 ? `${e.slice(0, -3)}y` : e.endsWith("s") && !e.endsWith("ss") && e.length > 3 ? e.slice(0, -1) : e;
}
function fc(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/state/npc-builder-store.ts
var pc = {
	allowBaseActorCharacteristics: !0,
	allowBaseActorSkills: !0,
	allowBaseActorTalents: !0,
	allowBaseActorTraits: !0,
	allowBaseActorTrappings: !0,
	askForLinkedSkillSpecializations: !1,
	baseActorFolderUuid: "",
	includeSpeciesInName: !1,
	lowerCareerMode: "prompt",
	outputActorFolderUuid: "",
	quickTraitFolderUuid: ""
}, mc = {
	advancements: [],
	optionalTraits: [],
	traits: [],
	trappings: []
}, hc = 5;
function gc(e, t) {
	return `${e}:${bc(t)}`;
}
function _c(e) {
	let t = Number(e.level ?? 1);
	return Number.isFinite(t) ? Math.max(1, Math.floor(t)) * hc : hc;
}
function vc(e) {
	return e.level === null ? `${e.name} level baseline` : `${e.name} level ${e.level} baseline`;
}
function yc(e, t) {
	return e === "characteristic" ? t.allowBaseActorCharacteristics : e === "skill" ? t.allowBaseActorSkills : t.allowBaseActorTalents;
}
function bc(e) {
	return e.trim().toLocaleLowerCase();
}
function xc(e) {
	return Number.isFinite(e) ? Math.max(1, Math.floor(e)) : 1;
}
function Sc(e, t) {
	return {
		...Gs(),
		...e,
		...t
	};
}
function Cc(e) {
	return e === "auto-add-all" || e === "never" || e === "prompt";
}
function wc(e) {
	return {
		allowBaseActorCharacteristics: e.allowBaseActorCharacteristics ?? !0,
		allowBaseActorSkills: e.allowBaseActorSkills ?? !0,
		allowBaseActorTalents: e.allowBaseActorTalents ?? !0,
		allowBaseActorTraits: e.allowBaseActorTraits ?? !0,
		allowBaseActorTrappings: e.allowBaseActorTrappings ?? !0,
		askForLinkedSkillSpecializations: e.askForLinkedSkillSpecializations ?? !1,
		baseActorFolderUuid: typeof e.baseActorFolderUuid == "string" ? e.baseActorFolderUuid : "",
		includeSpeciesInName: e.includeSpeciesInName ?? !1,
		lowerCareerMode: Cc(e.lowerCareerMode) ? e.lowerCareerMode : "prompt",
		outputActorFolderUuid: typeof e.outputActorFolderUuid == "string" ? e.outputActorFolderUuid : "",
		quickTraitFolderUuid: typeof e.quickTraitFolderUuid == "string" ? e.quickTraitFolderUuid : ""
	};
}
var Tc = Us("npc-builder", () => {
	let e = /* @__PURE__ */ I(""), t = /* @__PURE__ */ I([]), n = /* @__PURE__ */ I({}), r = /* @__PURE__ */ I({ ...mc }), i = /* @__PURE__ */ I([]), a = /* @__PURE__ */ I([]), o = /* @__PURE__ */ I([]), s = /* @__PURE__ */ I([]), c = /* @__PURE__ */ I([]), l = /* @__PURE__ */ I([]), u = /* @__PURE__ */ I({ ...pc }), d = /* @__PURE__ */ I(""), f = /* @__PURE__ */ I({}), p = /* @__PURE__ */ I({}), m = /* @__PURE__ */ I({}), h = /* @__PURE__ */ I({}), g = Q(() => i.value.find((e) => e.uuid === d.value) ?? null), _ = Q(() => a.value.at(-1) ?? null), v = Q(() => {
		let e = _.value?.name, t = u.value.includeSpeciesInName && g.value?.species ? g.value.species : "";
		return e && t ? `${t} ${e}` : e || (g.value ? `${g.value.name} NPC` : "New NPC");
	}), y = Q(() => e.value.trim() || v.value), b = Q(() => {
		let e = {
			characteristics: 0,
			skills: 0,
			talents: 0,
			trappings: 0
		};
		for (let t of a.value) e.characteristics += t.grants.characteristics.length * t.quantity, e.skills += t.grants.skills.length * t.quantity, e.talents += t.grants.talents.length * t.quantity, e.trappings += t.grants.trappings.length * t.quantity;
		return e;
	}), x = Q(() => {
		let e = /* @__PURE__ */ new Map();
		for (let t of r.value.advancements) {
			if (!yc(t.kind, u.value)) continue;
			let n = gc(t.kind, t.name);
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
		return ne(e, "characteristic"), ne(e, "skill"), ne(e, "talent"), [...e.values()].map((e) => {
			let t = gc(e.kind, e.name), r = n.value[t] ?? e.careerValue;
			return {
				...e,
				current: Math.max(0, Math.floor(r))
			};
		}).sort((e, t) => e.kind === t.kind ? e.name.localeCompare(t.name) : e.kind.localeCompare(t.kind));
	}), S = Q(() => {
		let e = /* @__PURE__ */ new Map();
		if (u.value.allowBaseActorTrappings) for (let t of r.value.trappings) e.set(`base:${t.uuid || bc(t.name)}`, {
			ignored: !1,
			itemType: t.itemType,
			key: `base:${t.uuid || bc(t.name)}`,
			name: t.name,
			quantity: t.quantity,
			resolution: tc({
				itemType: t.itemType,
				name: t.name,
				uuid: t.uuid
			}),
			source: "base",
			sourceUuid: t.uuid
		});
		for (let t of a.value) for (let n of t.grants.trappings) {
			let r = `career:${bc(n)}`, i = e.get(r);
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
				resolution: h.value[r] ?? nc(n),
				source: "career",
				sourceUuid: ""
			});
		}
		for (let t of s.value) e.set(t.key, { ...t });
		return [...e.values()].map((e) => {
			let t = m.value[e.key];
			return {
				...e,
				ignored: t?.ignored ?? e.ignored,
				quantity: xc(t?.quantity ?? e.quantity),
				resolution: h.value[e.key] ?? e.resolution
			};
		}).sort((e, t) => e.source === t.source ? e.name.localeCompare(t.name) : e.source.localeCompare(t.source));
	}), C = Q(() => {
		let e = /* @__PURE__ */ new Map();
		if (u.value.allowBaseActorTraits) for (let t of r.value.traits) {
			let n = `base:${t.uuid || bc(t.name)}`;
			e.set(n, {
				config: t.config,
				ignored: !1,
				key: n,
				name: t.name,
				source: "base",
				sourceUuid: t.uuid
			});
		}
		for (let t of o.value) Ae(e, t.name) || e.set(t.key, { ...t });
		return [...e.values()].map((e) => ({
			...e,
			config: Sc(e.config, p.value[e.key])
		})).sort((e, t) => e.source === t.source ? e.name.localeCompare(t.name) : e.source.localeCompare(t.source));
	}), w = Q(() => [...r.value.optionalTraits].map((e) => ({
		config: e.config,
		img: e.img,
		name: e.name,
		uuid: e.uuid
	})).sort((e, t) => e.name.localeCompare(t.name)));
	function ee(e) {
		let t = a.value.find((t) => t.uuid === e.uuid);
		if (t) {
			t.quantity = xc(t.quantity + 1);
			return;
		}
		a.value.push({
			...e,
			quantity: 1
		});
	}
	function te(e) {
		return a.value.some((t) => t.uuid === e.uuid) ? !1 : (a.value.push({
			...e,
			quantity: 1
		}), !0);
	}
	function ne(e, t) {
		if (t === "talent") {
			re(e);
			return;
		}
		T(e, t);
	}
	function T(e, t) {
		let n = /* @__PURE__ */ new Map();
		for (let e of a.value) {
			let r = O(ge(e, t)), i = _c(e) / hc, a = Math.max(0, xc(e.quantity) - 1) * hc;
			for (let o of r) {
				let r = gc(t, o), s = n.get(r);
				if (s) {
					i > s.highestLevel && (s.highestLevel = i, s.highestLevelSource = vc(e)), a > 0 && s.extraSources.push({
						count: a,
						label: `${e.name} extra time`
					});
					continue;
				}
				n.set(r, {
					extraSources: ie(e.name, a),
					highestLevel: i,
					highestLevelSource: vc(e),
					name: o
				});
			}
		}
		for (let r of n.values()) E(e, {
			careerValue: r.highestLevel * hc + D(r.extraSources),
			kind: t,
			name: r.name,
			sources: [{
				count: r.highestLevel * hc,
				label: r.highestLevelSource
			}, ...r.extraSources]
		});
	}
	function re(e) {
		let t = /* @__PURE__ */ new Map();
		for (let e of a.value) {
			let n = O(ge(e, "talent")), r = Math.max(0, xc(e.quantity) - 1);
			for (let i of n) {
				let n = gc("talent", i), a = t.get(n);
				if (a) {
					r > 0 && a.extraSources.push({
						count: r,
						label: `${e.name} extra time`
					});
					continue;
				}
				t.set(n, {
					extraSources: ie(e.name, r),
					firstSource: `${e.name} first instance`,
					name: i
				});
			}
		}
		for (let n of t.values()) E(e, {
			careerValue: 1 + D(n.extraSources),
			kind: "talent",
			name: n.name,
			sources: [{
				count: 1,
				label: n.firstSource
			}, ...n.extraSources]
		});
	}
	function E(e, t) {
		let n = gc(t.kind, t.name), r = e.get(n);
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
	function ie(e, t) {
		return t <= 0 ? [] : [{
			count: t,
			label: `${e} extra time`
		}];
	}
	function D(e) {
		let t = 0;
		for (let n of e) t += n.count;
		return t;
	}
	function ae(e) {
		s.value.some((t) => t.key === e.key) || s.value.push(e);
	}
	function oe(e) {
		let t = Oe(e.name), n = De(e.name);
		if (n) {
			A(n, !0);
			return;
		}
		if (t) {
			we(t, !0);
			return;
		}
		Ee(e);
	}
	function O(e) {
		let t = /* @__PURE__ */ new Set(), n = [];
		for (let r of e) {
			let e = bc(r);
			!e || t.has(e) || (t.add(e), n.push(r));
		}
		return n;
	}
	function se() {
		r.value = {
			advancements: [],
			optionalTraits: [],
			traits: [],
			trappings: []
		}, n.value = {}, p.value = {}, m.value = {}, h.value = {};
	}
	function ce(e) {
		return f.value[e] ?? "";
	}
	function le(e) {
		r.value = {
			advancements: [...e.advancements],
			optionalTraits: [...e.optionalTraits],
			traits: [...e.traits],
			trappings: [...e.trappings]
		}, n.value = {}, p.value = {}, m.value = {};
	}
	function ue(e) {
		i.value = [...e].sort((e, t) => e.name.localeCompare(t.name)), d.value && !i.value.some((e) => e.uuid === d.value) && (d.value = "", se());
	}
	function de(e) {
		u.value = wc(e);
	}
	function fe(e) {
		t.value = [...e].sort((e, t) => e.name.localeCompare(t.name)), u.value.baseActorFolderUuid && !t.value.some((e) => e.uuid === u.value.baseActorFolderUuid) && (u.value.baseActorFolderUuid = ""), u.value.outputActorFolderUuid && !t.value.some((e) => e.uuid === u.value.outputActorFolderUuid) && (u.value.outputActorFolderUuid = "");
	}
	function pe(e) {
		c.value = [...e].sort((e, t) => e.name.localeCompare(t.name)), u.value.quickTraitFolderUuid && !c.value.some((e) => e.uuid === u.value.quickTraitFolderUuid) && (u.value.quickTraitFolderUuid = "");
	}
	function me(e) {
		l.value = [...e].sort((e, t) => e.name.localeCompare(t.name));
	}
	function he(e, t) {
		let n = e + t, r = a.value[e];
		!r || n < 0 || n >= a.value.length || (a.value.splice(e, 1), a.value.splice(n, 0, r));
	}
	function ge(e, t) {
		return t === "characteristic" ? e.grants.characteristics : t === "skill" ? Xs(e.uuid, e.grants.skills).map((e) => f.value[e.resolutionKey] || e.originalName) : e.grants.talents;
	}
	function _e(e) {
		let [t] = a.value.splice(e, 1);
		t && Fe(t.uuid);
	}
	function k(e) {
		s.value = s.value.filter((t) => t.key !== e), delete m.value[e], delete h.value[e];
	}
	function ve(e) {
		o.value = o.value.filter((t) => t.key !== e), delete p.value[e];
	}
	function ye() {
		e.value = "", a.value = [], o.value = [], s.value = [], f.value = {}, d.value = "", se();
	}
	function be(e) {
		i.value.some((t) => t.uuid === e.uuid) || i.value.push(e), d.value = e.uuid;
	}
	function xe(e, t) {
		let r = gc(e.kind, e.name), i = Number.isFinite(t) ? t : 0;
		n.value[r] = Math.max(0, Math.floor(i));
	}
	function Se(e, t) {
		let n = a.value[e];
		n && (n.quantity = xc(t));
	}
	function Ce(e, t) {
		let n = t.trim();
		if (!n) {
			delete f.value[e];
			return;
		}
		f.value[e] = n;
	}
	function we(e, t) {
		Te("quick", e, t);
	}
	function A(e, t) {
		Te("optional", e, t);
	}
	function Te(e, t, n) {
		let r = `${e}:${t.uuid || bc(t.name)}`;
		if (!n) {
			ve(r);
			return;
		}
		o.value.find((e) => e.key === r) || Ee({
			config: t.config,
			ignored: !1,
			key: r,
			name: t.name,
			source: e,
			sourceUuid: t.uuid
		});
	}
	function Ee(e) {
		C.value.some((t) => ke(t.name, e.name)) || o.value.some((t) => t.key === e.key) || o.value.push(e);
	}
	function j(e, t) {
		p.value[e] = {
			...p.value[e],
			...t
		};
	}
	function De(e) {
		return w.value.find((t) => ke(t.name, e));
	}
	function Oe(e) {
		return l.value.find((t) => ke(t.name, e));
	}
	function ke(e, t) {
		return bc(e) === bc(t);
	}
	function Ae(e, t) {
		return [...e.values()].some((e) => ke(e.name, t));
	}
	function M(e, t) {
		m.value[e] = {
			...m.value[e],
			ignored: t
		};
	}
	function je(e, t) {
		m.value[e] = {
			...m.value[e],
			quantity: xc(t)
		};
	}
	function Me(e, t) {
		let n = S.value.find((t) => t.key === e), r = n?.resolution.candidates.find((e) => e.uuid === t);
		!n || !r || (h.value[e] = {
			...n.resolution,
			selectedCandidateUuid: r.uuid,
			selectedItemType: r.itemType,
			selectedName: r.name,
			status: n.resolution.status === "matched" ? "matched" : "ambiguous"
		});
	}
	function Ne(e) {
		let t = S.value.find((t) => t.key === e);
		if (!t) return;
		let n = ec(t.name, t.itemType);
		h.value[e] = {
			...n,
			candidates: t.resolution.candidates,
			searchTerms: t.resolution.searchTerms
		};
	}
	function Pe(e, t) {
		h.value[e] = t;
	}
	function Fe(e) {
		let t = `${e}:`;
		for (let e of Object.keys(f.value)) e.startsWith(t) && delete f.value[e];
	}
	return {
		actorName: e,
		actorFolders: t,
		addCareer: ee,
		addCareerIfMissing: te,
		addCustomTrait: oe,
		addCustomTrapping: ae,
		advancements: x,
		baseActorDraftData: r,
		baseActors: i,
		careers: a,
		clearBaseDraftData: se,
		customTraits: o,
		customTrappings: s,
		finalActorName: y,
		finalCareer: _,
		grantTotals: b,
		getSkillGrantResolution: ce,
		hydrateActorFolders: fe,
		hydrateBaseActorDraftData: le,
		hydrateBaseActors: ue,
		hydrateItemFolders: pe,
		hydrateQuickTraits: me,
		hydrateSettings: de,
		itemFolders: c,
		moveCareer: he,
		optionalTraits: w,
		quickTraits: l,
		removeCareer: _e,
		removeCustomTrait: ve,
		removeCustomTrapping: k,
		resetDraft: ye,
		selectBaseActor: be,
		selectTrappingResolutionCandidate: Me,
		selectedBaseActor: g,
		selectedBaseActorUuid: d,
		setAdvancementCurrent: xe,
		setCareerQuantity: Se,
		setTrappingFallback: Ne,
		setOptionalTraitSelected: A,
		setQuickTraitSelected: we,
		setSkillGrantResolution: Ce,
		setTraitConfig: j,
		setTrappingIgnored: M,
		setTrappingQuantity: je,
		setTrappingResolution: Pe,
		settings: u,
		suggestedActorName: v,
		traits: C,
		trappings: S
	};
}), Ec = { class: "sub-view__header" }, Dc = /* @__PURE__ */ ur({
	__name: "SubView",
	props: {
		open: { type: Boolean },
		title: {}
	},
	emits: ["close"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ I(null), a = /* @__PURE__ */ I(null), o = null, s = 0;
		Un(() => n.open, async (e) => {
			if (e) {
				await Tn(), o = c(a.value), s = o?.scrollTop ?? 0, o && (o.scrollTop = 0), i.value && (i.value.scrollTop = 0);
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
		return (t, n) => (K(), ra(Qa, { name: "sub-view" }, {
			default: In(() => [e.open ? (K(), q("section", {
				key: 0,
				ref_key: "rootElement",
				ref: a,
				class: "sub-view",
				role: "dialog",
				"aria-modal": "true"
			}, [J("div", Ec, [J("h2", null, A(e.title), 1), J("button", {
				type: "button",
				class: "sub-view__close",
				onClick: n[0] ||= (e) => r("close")
			}, " Close ")]), J("div", {
				ref_key: "bodyElement",
				ref: i,
				class: "sub-view__body"
			}, [Fr(t.$slots, "default", {}, void 0, !0)], 512)], 512)) : X("", !0)]),
			_: 3
		}));
	}
}), Oc = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, kc = /* @__PURE__ */ Oc(Dc, [["__scopeId", "data-v-2a7b49f7"]]), Ac = { class: "npc-builder__stack" }, jc = { class: "npc-builder__panel" }, Mc = { class: "npc-builder__table" }, Nc = ["value", "onInput"], Pc = { class: "npc-builder__panel" }, Fc = { class: "npc-builder__table" }, Ic = {
	key: 0,
	class: "npc-builder__badge"
}, Lc = ["value", "onInput"], Rc = { class: "npc-builder__panel" }, zc = { class: "npc-builder__table" }, Bc = ["value", "onInput"], Vc = /* @__PURE__ */ ur({
	__name: "NpcBuilderAdvancementsTab",
	setup(e) {
		let t = Tc(), { advancements: n } = Ws(t), r = Q(() => n.value.filter((e) => e.kind === "characteristic")), i = Q(() => n.value.filter((e) => e.kind === "skill")), a = Q(() => n.value.filter((e) => e.kind === "talent"));
		function o(e) {
			return e.sources.length ? e.sources.map((e) => `${e.label} +${e.count}`).join(", ") : e.includedFromBase ? "Base actor" : "-";
		}
		function s(e) {
			return Ys(e) !== null;
		}
		function c(e, n) {
			let r = n.target;
			r && t.setAdvancementCurrent(e, Number(r.value));
		}
		return (e, t) => (K(), q("section", Ac, [
			J("section", jc, [t[1] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "1"), J("h2", null, "Characteristics")], -1), J("div", Mc, [t[0] ||= J("div", { class: "npc-builder__table-head" }, [
				J("span", null, "Name"),
				J("span", null, "Base"),
				J("span", null, "Career"),
				J("span", null, "Apply"),
				J("span", null, "Sources")
			], -1), (K(!0), q(W, null, V(r.value, (e) => (K(), q("label", {
				key: `${e.kind}:${e.name}`,
				class: "npc-builder__advance-row"
			}, [
				J("strong", null, A(e.name), 1),
				J("span", null, A(e.baseValue), 1),
				J("span", null, A(e.careerValue), 1),
				J("input", {
					value: e.current,
					min: "0",
					type: "number",
					onInput: (t) => c(e, t)
				}, null, 40, Nc),
				J("span", null, A(o(e)), 1)
			]))), 128))])]),
			J("section", Pc, [t[3] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "2"), J("h2", null, "Skills")], -1), J("div", Fc, [t[2] ||= J("div", { class: "npc-builder__table-head" }, [
				J("span", null, "Name"),
				J("span", null, "Base"),
				J("span", null, "Career"),
				J("span", null, "Apply"),
				J("span", null, "Sources")
			], -1), (K(!0), q(W, null, V(i.value, (e) => (K(), q("label", {
				key: `${e.kind}:${e.name}`,
				class: "npc-builder__advance-row"
			}, [
				J("strong", null, [da(A(e.name) + " ", 1), s(e.name) ? (K(), q("span", Ic, " Needs specialization ")) : X("", !0)]),
				J("span", null, A(e.baseValue), 1),
				J("span", null, A(e.careerValue), 1),
				J("input", {
					value: e.current,
					min: "0",
					type: "number",
					onInput: (t) => c(e, t)
				}, null, 40, Lc),
				J("span", null, A(o(e)), 1)
			]))), 128))])]),
			J("section", Rc, [t[5] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "3"), J("h2", null, "Talents")], -1), J("div", zc, [t[4] ||= J("div", { class: "npc-builder__table-head" }, [
				J("span", null, "Name"),
				J("span", null, "Base"),
				J("span", null, "Career"),
				J("span", null, "Apply"),
				J("span", null, "Sources")
			], -1), (K(!0), q(W, null, V(a.value, (e) => (K(), q("label", {
				key: `${e.kind}:${e.name}`,
				class: "npc-builder__advance-row"
			}, [
				J("strong", null, A(e.name), 1),
				J("span", null, A(e.baseValue), 1),
				J("span", null, A(e.careerValue), 1),
				J("input", {
					value: e.current,
					min: "0",
					type: "number",
					onInput: (t) => c(e, t)
				}, null, 40, Bc),
				J("span", null, A(o(e)), 1)
			]))), 128))])])
		]));
	}
}), Hc = { key: 0 }, Uc = /* @__PURE__ */ Oc(/* @__PURE__ */ ur({
	__name: "DocumentDrop",
	props: {
		description: {},
		title: {},
		variant: {}
	},
	emits: ["dropData"],
	setup(e, { emit: t }) {
		let n = t, r = /* @__PURE__ */ I(!1);
		function i(e) {
			let t = e.currentTarget, n = e.relatedTarget;
			t instanceof Node && n instanceof Node && t.contains(n) || (r.value = !1);
		}
		function a(e) {
			e.preventDefault(), r.value = !1, n("dropData", e.dataTransfer?.getData("text/plain") ?? "");
		}
		return (t, n) => (K(), q("div", {
			class: k(["document-drop", {
				"document-drop--compact": e.variant === "compact",
				"is-hovering": r.value
			}]),
			onDragenter: n[0] ||= is((e) => r.value = !0, ["prevent"]),
			onDragover: n[1] ||= is((e) => r.value = !0, ["prevent"]),
			onDragleave: i,
			onDrop: a
		}, [
			J("strong", null, A(e.title), 1),
			e.description ? (K(), q("span", Hc, A(e.description), 1)) : X("", !0),
			Fr(t.$slots, "default", {}, void 0, !0)
		], 34));
	}
}), [["__scopeId", "data-v-22723a4a"]]), Wc = { class: "npc-builder__layout" }, Gc = { class: "npc-builder__column" }, Kc = { class: "npc-builder__panel" }, qc = { class: "npc-builder__field" }, Jc = { class: "npc-builder__field" }, Yc = ["disabled"], Xc = { value: "" }, Zc = ["value"], Qc = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, $c = {
	key: 1,
	class: "npc-builder__source"
}, el = { class: "npc-builder__thumbnail" }, tl = ["src"], nl = { key: 1 }, rl = { class: "npc-builder__panel" }, il = {
	key: 0,
	class: "npc-builder__careers"
}, al = { class: "npc-builder__thumbnail" }, ol = ["src"], sl = { key: 1 }, cl = { class: "npc-builder__career-copy" }, ll = { class: "npc-builder__grant-list" }, ul = ["value", "onInput"], dl = { class: "npc-builder__career-actions" }, fl = ["disabled", "onClick"], pl = ["disabled", "onClick"], ml = ["onClick"], hl = {
	key: 1,
	class: "npc-builder__empty"
}, gl = { class: "npc-builder__summary" }, _l = { class: "npc-builder__preview" }, vl = { class: "npc-builder__portrait" }, yl = ["src"], bl = { key: 1 }, xl = { key: 2 }, Sl = { class: "npc-builder__field" }, Cl = ["placeholder"], wl = {
	key: 0,
	class: "npc-builder__quick-traits"
}, Tl = ["onClick"], El = {
	key: 1,
	class: "npc-builder__quick-traits"
}, Dl = ["onClick"], Ol = /* @__PURE__ */ ur({
	__name: "NpcBuilderBuildTab",
	props: {
		bridge: {},
		isLoadingActors: { type: Boolean },
		isLoadingBaseDraft: { type: Boolean }
	},
	emits: ["careerDrop"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Tc(), { actorName: a, advancements: o, baseActors: s, careers: c, finalActorName: l, finalCareer: u, grantTotals: d, optionalTraits: f, quickTraits: p, selectedBaseActor: m, selectedBaseActorUuid: h, suggestedActorName: g, traits: _, trappings: v } = Ws(i), y = /* @__PURE__ */ I(""), b = /* @__PURE__ */ I(""), x = Q(() => {
			let e = y.value.trim().toLocaleLowerCase();
			return e ? s.value.filter((t) => t.name.toLocaleLowerCase().includes(e)) : s.value;
		}), S = Q(() => {
			let e = new Set(f.value.map((e) => re(e.name)));
			return p.value.filter((t) => !e.has(re(t.name)));
		}), C = Q(() => {
			let e = 0;
			for (let t of c.value) e += t.quantity;
			return e;
		}), w = Q(() => v.value.filter((e) => !e.ignored));
		function ee(e) {
			return ne(e);
		}
		function te(e) {
			return ne(e);
		}
		function ne(e) {
			return _.value.some((t) => T(t.name, e.name));
		}
		function T(e, t) {
			return re(e) === re(t);
		}
		function re(e) {
			return e.trim().toLocaleLowerCase();
		}
		function E(e, t) {
			let n = t.target;
			n && i.setCareerQuantity(e, Number(n.value));
		}
		function ie(e) {
			let t = e.slice(0, 3).join(", "), n = e.length - 3;
			return e.length ? n > 0 ? `${t}, +${n}` : t : "-";
		}
		function D(e) {
			return e.split(/\s+/).map((e) => e.at(0)).filter(Boolean).slice(0, 2).join("").toLocaleUpperCase();
		}
		function ae(e) {
			i.setQuickTraitSelected(e, !ee(e));
		}
		function oe(e) {
			i.setOptionalTraitSelected(e, !te(e));
		}
		async function O(e) {
			b.value = "";
			try {
				i.selectBaseActor(await n.bridge.resolveActorDrop(e));
			} catch (e) {
				b.value = se(e);
			}
		}
		function se(e) {
			return e instanceof Error ? e.message : "The NPC Builder could not resolve that Actor drop.";
		}
		return (t, n) => (K(), q("section", Wc, [J("div", Gc, [J("section", Kc, [
			n[6] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "1"), J("h2", null, "Base Actor")], -1),
			J("label", qc, [n[4] ||= J("span", null, "Search world actors", -1), B(J("input", {
				"onUpdate:modelValue": n[0] ||= (e) => y.value = e,
				placeholder: "Filter actors",
				type: "search"
			}, null, 512), [[Yo, y.value]])]),
			J("label", Jc, [n[5] ||= J("span", null, "Base statblock", -1), B(J("select", {
				"onUpdate:modelValue": n[1] ||= (e) => /* @__PURE__ */ F(h) ? h.value = e : null,
				disabled: e.isLoadingActors
			}, [J("option", Xc, A(e.isLoadingActors ? "Loading actors..." : "Choose an actor"), 1), (K(!0), q(W, null, V(x.value, (e) => (K(), q("option", {
				key: e.uuid,
				value: e.uuid
			}, A(e.name), 9, Zc))), 128))], 8, Yc), [[Qo, L(h)]])]),
			Y(Uc, {
				class: "npc-builder__drop",
				description: "Use any world Actor as the starting statblock.",
				title: "Drop Actor",
				onDropData: O
			}),
			b.value ? (K(), q("p", Qc, A(b.value), 1)) : X("", !0),
			L(m) ? (K(), q("article", $c, [J("div", el, [L(m).img ? (K(), q("img", {
				key: 0,
				src: L(m).img,
				alt: ""
			}, null, 8, tl)) : (K(), q("span", nl, A(D(L(m).name)), 1))]), J("div", null, [J("strong", null, A(L(m).name), 1), J("span", null, [
				da(A(L(m).species || "Species not found") + " ", 1),
				L(m).type ? (K(), q(W, { key: 0 }, [da(" - " + A(L(m).type), 1)], 64)) : X("", !0),
				e.isLoadingBaseDraft ? (K(), q(W, { key: 1 }, [da("loading...")], 64)) : X("", !0)
			])])])) : X("", !0)
		]), J("section", rl, [
			n[12] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "2"), J("h2", null, "Career Queue")], -1),
			Y(Uc, {
				class: "npc-builder__drop npc-builder__drop--career",
				description: "The last queued career drives the preview image.",
				title: "Drop Career Items",
				onDropData: n[2] ||= (e) => r("careerDrop", e)
			}),
			L(c).length ? (K(), q("ol", il, [(K(!0), q(W, null, V(L(c), (e, t) => (K(), q("li", { key: e.uuid }, [
				J("div", al, [e.img ? (K(), q("img", {
					key: 0,
					src: e.img,
					alt: ""
				}, null, 8, ol)) : (K(), q("span", sl, A(D(e.name)), 1))]),
				J("div", cl, [
					J("strong", null, A(e.name), 1),
					J("span", null, [da(A(e.careerGroup || "Career") + " ", 1), e.level === null ? X("", !0) : (K(), q(W, { key: 0 }, [da(" level " + A(e.level), 1)], 64))]),
					J("dl", ll, [
						J("div", null, [n[7] ||= J("dt", null, "Characteristics", -1), J("dd", null, A(ie(e.grants.characteristics)), 1)]),
						J("div", null, [n[8] ||= J("dt", null, "Skills", -1), J("dd", null, A(ie(e.grants.skills)), 1)]),
						J("div", null, [n[9] ||= J("dt", null, "Talents", -1), J("dd", null, A(ie(e.grants.talents)), 1)]),
						J("div", null, [n[10] ||= J("dt", null, "Trappings", -1), J("dd", null, A(ie(e.grants.trappings)), 1)])
					])
				]),
				J("label", null, [n[11] ||= J("span", null, "Qty", -1), J("input", {
					value: e.quantity,
					min: "1",
					type: "number",
					onInput: (e) => E(t, e)
				}, null, 40, ul)]),
				J("div", dl, [
					J("button", {
						disabled: t === 0,
						title: "Move career earlier",
						type: "button",
						onClick: (e) => L(i).moveCareer(t, -1)
					}, " Up ", 8, fl),
					J("button", {
						disabled: t === L(c).length - 1,
						title: "Move career later",
						type: "button",
						onClick: (e) => L(i).moveCareer(t, 1)
					}, " Down ", 8, pl),
					J("button", {
						type: "button",
						onClick: (e) => L(i).removeCareer(t)
					}, " Remove ", 8, ml)
				])
			]))), 128))])) : (K(), q("p", hl, "No careers queued yet."))
		])]), J("aside", gl, [J("section", _l, [
			J("div", vl, [L(u)?.img ? (K(), q("img", {
				key: 0,
				src: L(u).img,
				alt: ""
			}, null, 8, yl)) : L(u) ? (K(), q("strong", bl, A(D(L(u).name)), 1)) : (K(), q("span", xl, "No career portrait"))]),
			J("label", Sl, [n[13] ||= J("span", null, "NPC name", -1), B(J("input", {
				"onUpdate:modelValue": n[3] ||= (e) => /* @__PURE__ */ F(a) ? a.value = e : null,
				placeholder: L(g),
				type: "text"
			}, null, 8, Cl), [[Yo, L(a)]])]),
			L(f).length ? (K(), q("section", wl, [J("div", null, [n[14] ||= J("h2", null, "Optional Traits", -1), J("span", null, A(L(f).length) + " from base statblock", 1)]), (K(!0), q(W, null, V(L(f), (e) => (K(), q("button", {
				key: e.uuid,
				class: k({ "is-active": te(e) }),
				type: "button",
				onClick: (t) => oe(e)
			}, A(e.name), 11, Tl))), 128))])) : X("", !0),
			S.value.length ? (K(), q("section", El, [J("div", null, [n[15] ||= J("h2", null, "Quick Traits", -1), J("span", null, A(S.value.length) + " configured", 1)]), (K(!0), q(W, null, V(S.value, (e) => (K(), q("button", {
				key: e.uuid,
				class: k({ "is-active": ee(e) }),
				type: "button",
				onClick: (t) => ae(e)
			}, A(e.name), 11, Dl))), 128))])) : X("", !0),
			J("dl", null, [
				J("div", null, [n[16] ||= J("dt", null, "Build name", -1), J("dd", null, A(L(l)), 1)]),
				J("div", null, [n[17] ||= J("dt", null, "Base actor", -1), J("dd", null, A(L(m)?.name ?? "Not selected"), 1)]),
				J("div", null, [n[18] ||= J("dt", null, "Final career", -1), J("dd", null, A(L(u)?.name ?? "Not queued"), 1)]),
				J("div", null, [n[19] ||= J("dt", null, "Career items", -1), J("dd", null, A(C.value), 1)]),
				J("div", null, [n[20] ||= J("dt", null, "Apply", -1), J("dd", null, A(L(o).length) + " advance rows, " + A(w.value.length) + " trappings, " + A(L(_).length) + " traits ", 1)]),
				J("div", null, [n[21] ||= J("dt", null, "Extracted grants", -1), J("dd", null, A(L(d).characteristics) + " characteristics, " + A(L(d).skills) + " skills, " + A(L(d).talents) + " talents, " + A(L(d).trappings) + " trappings ", 1)])
			])
		])])]));
	}
}), kl = { class: "npc-builder__settings" }, Al = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, jl = {
	key: 1,
	class: "npc-builder__message"
}, Ml = { class: "npc-builder__panel" }, Nl = { class: "npc-builder__folder-setting" }, Pl = { class: "npc-builder__field" }, Fl = ["value"], Il = { class: "npc-builder__field" }, Ll = ["disabled"], Rl = { class: "npc-builder__folder-setting" }, zl = { class: "npc-builder__field" }, Bl = ["value"], Vl = { class: "npc-builder__field" }, Hl = ["disabled"], Ul = { class: "npc-builder__panel" }, Wl = { class: "npc-builder__folder-setting" }, Gl = { class: "npc-builder__field" }, Kl = ["value"], ql = { class: "npc-builder__field" }, Jl = ["disabled"], Yl = ["disabled"], Xl = { class: "npc-builder__panel" }, Zl = { class: "npc-builder__check" }, Ql = { class: "npc-builder__panel" }, $l = { class: "npc-builder__check" }, eu = { class: "npc-builder__check" }, tu = { class: "npc-builder__check" }, nu = { class: "npc-builder__check" }, ru = { class: "npc-builder__check" }, iu = { class: "npc-builder__panel" }, au = { class: "npc-builder__field" }, ou = { class: "npc-builder__check" }, su = ["disabled"], cu = /* @__PURE__ */ ur({
	__name: "NpcBuilderSettingsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Tc(), { actorFolders: r, itemFolders: i, settings: a } = Ws(n), o = /* @__PURE__ */ I(""), s = /* @__PURE__ */ I(""), c = /* @__PURE__ */ I(!1), l = /* @__PURE__ */ I(""), u = /* @__PURE__ */ I(""), d = /* @__PURE__ */ I("");
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
				s.value = C(e);
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
				baseActorFolderUuid: a.value.baseActorFolderUuid,
				includeSpeciesInName: a.value.includeSpeciesInName,
				lowerCareerMode: a.value.lowerCareerMode,
				outputActorFolderUuid: a.value.outputActorFolderUuid,
				quickTraitFolderUuid: a.value.quickTraitFolderUuid
			};
		}
		async function x() {
			c.value = !0, s.value = "", d.value = "";
			try {
				n.hydrateSettings(await t.bridge.saveSettings(b())), n.hydrateQuickTraits(await t.bridge.importRecommendedQuickTraits(a.value)), d.value = "Recommended quick traits imported.";
			} catch (e) {
				s.value = C(e);
			} finally {
				c.value = !1;
			}
		}
		async function S() {
			c.value = !0, s.value = "", d.value = "";
			try {
				n.hydrateSettings(await t.bridge.saveSettings(b())), await Promise.all([v(), y()]), d.value = "Settings saved.";
			} catch (e) {
				s.value = C(e);
			} finally {
				c.value = !1;
			}
		}
		function C(e) {
			return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
		}
		return (e, t) => (K(), q("section", kl, [
			s.value ? (K(), q("p", Al, A(s.value), 1)) : d.value ? (K(), q("p", jl, A(d.value), 1)) : X("", !0),
			J("section", Ml, [
				t[20] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "1"), J("h2", null, "Actor Sources")], -1),
				J("section", Nl, [
					J("label", Pl, [t[15] ||= J("span", null, "Base actor folder", -1), B(J("select", { "onUpdate:modelValue": t[0] ||= (e) => L(a).baseActorFolderUuid = e }, [t[14] ||= J("option", { value: "" }, "All world actors", -1), (K(!0), q(W, null, V(L(r), (e) => (K(), q("option", {
						key: e.uuid,
						value: e.uuid
					}, A(e.name), 9, Fl))), 128))], 512), [[Qo, L(a).baseActorFolderUuid]])]),
					J("label", Il, [t[16] ||= J("span", null, "Create or use by name", -1), B(J("input", {
						"onUpdate:modelValue": t[1] ||= (e) => o.value = e,
						placeholder: "Folder name",
						type: "text"
					}, null, 512), [[Yo, o.value]])]),
					J("button", {
						disabled: c.value || !o.value.trim(),
						type: "button",
						onClick: f
					}, " Save ", 8, Ll)
				]),
				J("section", Rl, [
					J("label", zl, [t[18] ||= J("span", null, "Output actor folder", -1), B(J("select", { "onUpdate:modelValue": t[2] ||= (e) => L(a).outputActorFolderUuid = e }, [t[17] ||= J("option", { value: "" }, "Foundry default location", -1), (K(!0), q(W, null, V(L(r), (e) => (K(), q("option", {
						key: e.uuid,
						value: e.uuid
					}, A(e.name), 9, Bl))), 128))], 512), [[Qo, L(a).outputActorFolderUuid]])]),
					J("label", Vl, [t[19] ||= J("span", null, "Create or use by name", -1), B(J("input", {
						"onUpdate:modelValue": t[3] ||= (e) => l.value = e,
						placeholder: "Folder name",
						type: "text"
					}, null, 512), [[Yo, l.value]])]),
					J("button", {
						disabled: c.value || !l.value.trim(),
						type: "button",
						onClick: p
					}, " Save ", 8, Hl)
				])
			]),
			J("section", Ul, [
				t[24] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "2"), J("h2", null, "Quick Traits")], -1),
				J("section", Wl, [
					J("label", Gl, [t[22] ||= J("span", null, "Quick traits folder", -1), B(J("select", { "onUpdate:modelValue": t[4] ||= (e) => L(a).quickTraitFolderUuid = e }, [t[21] ||= J("option", { value: "" }, "No quick traits folder", -1), (K(!0), q(W, null, V(L(i), (e) => (K(), q("option", {
						key: e.uuid,
						value: e.uuid
					}, A(e.name), 9, Kl))), 128))], 512), [[Qo, L(a).quickTraitFolderUuid]])]),
					J("label", ql, [t[23] ||= J("span", null, "Create or use by name", -1), B(J("input", {
						"onUpdate:modelValue": t[5] ||= (e) => u.value = e,
						placeholder: "Folder name",
						type: "text"
					}, null, 512), [[Yo, u.value]])]),
					J("button", {
						disabled: c.value || !u.value.trim(),
						type: "button",
						onClick: m
					}, " Save ", 8, Jl)
				]),
				J("button", {
					disabled: c.value || !L(a).quickTraitFolderUuid,
					type: "button",
					onClick: x
				}, " Import Recommended Quick Traits ", 8, Yl)
			]),
			J("section", Xl, [t[26] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "3"), J("h2", null, "Default Naming")], -1), J("label", Zl, [B(J("input", {
				"onUpdate:modelValue": t[6] ||= (e) => L(a).includeSpeciesInName = e,
				type: "checkbox"
			}, null, 512), [[Xo, L(a).includeSpeciesInName]]), t[25] ||= J("span", null, "Include species in suggested names", -1)])]),
			J("section", Ql, [
				t[32] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "4"), J("h2", null, "Base Actor Features")], -1),
				J("label", $l, [B(J("input", {
					"onUpdate:modelValue": t[7] ||= (e) => L(a).allowBaseActorCharacteristics = e,
					type: "checkbox"
				}, null, 512), [[Xo, L(a).allowBaseActorCharacteristics]]), t[27] ||= J("span", null, "Show base actor characteristics", -1)]),
				J("label", eu, [B(J("input", {
					"onUpdate:modelValue": t[8] ||= (e) => L(a).allowBaseActorSkills = e,
					type: "checkbox"
				}, null, 512), [[Xo, L(a).allowBaseActorSkills]]), t[28] ||= J("span", null, "Show base actor skills", -1)]),
				J("label", tu, [B(J("input", {
					"onUpdate:modelValue": t[9] ||= (e) => L(a).allowBaseActorTalents = e,
					type: "checkbox"
				}, null, 512), [[Xo, L(a).allowBaseActorTalents]]), t[29] ||= J("span", null, "Show base actor talents", -1)]),
				J("label", nu, [B(J("input", {
					"onUpdate:modelValue": t[10] ||= (e) => L(a).allowBaseActorTrappings = e,
					type: "checkbox"
				}, null, 512), [[Xo, L(a).allowBaseActorTrappings]]), t[30] ||= J("span", null, "Show base actor trappings", -1)]),
				J("label", ru, [B(J("input", {
					"onUpdate:modelValue": t[11] ||= (e) => L(a).allowBaseActorTraits = e,
					type: "checkbox"
				}, null, 512), [[Xo, L(a).allowBaseActorTraits]]), t[31] ||= J("span", null, "Show base actor traits", -1)])
			]),
			J("section", iu, [
				t[36] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "5"), J("h2", null, "Other Settings")], -1),
				J("label", au, [t[34] ||= J("span", null, "Lower career handling", -1), B(J("select", { "onUpdate:modelValue": t[12] ||= (e) => L(a).lowerCareerMode = e }, [...t[33] ||= [
					J("option", { value: "prompt" }, "Prompt when candidates are found", -1),
					J("option", { value: "auto-add-all" }, " Automatically add all lower-tier matches ", -1),
					J("option", { value: "never" }, "Only add dropped careers", -1)
				]], 512), [[Qo, L(a).lowerCareerMode]])]),
				J("label", ou, [B(J("input", {
					"onUpdate:modelValue": t[13] ||= (e) => L(a).askForLinkedSkillSpecializations = e,
					type: "checkbox"
				}, null, 512), [[Xo, L(a).askForLinkedSkillSpecializations]]), t[35] ||= J("span", null, "Resolve linked career skill repeats separately", -1)]),
				J("button", {
					disabled: c.value,
					type: "button",
					onClick: S
				}, " Save Settings ", 8, su)
			])
		]));
	}
}), lu = { class: "npc-builder__stack" }, uu = { class: "npc-builder__panel" }, du = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, fu = { class: "npc-builder__table" }, pu = { class: "npc-builder__trait-name" }, mu = { key: 0 }, hu = { key: 1 }, gu = { class: "npc-builder__trait-config" }, _u = { class: "npc-builder__mini-field" }, vu = ["value", "onInput"], yu = {
	key: 0,
	class: "npc-builder__mini-field"
}, bu = ["value", "onChange"], xu = ["value"], Su = {
	key: 1,
	class: "npc-builder__mini-field"
}, Cu = ["value", "onInput"], wu = ["onClick"], Tu = { key: 1 }, Eu = /* @__PURE__ */ ur({
	__name: "NpcBuilderTraitsTab",
	props: {
		bridge: {},
		difficultyOptions: {}
	},
	setup(e) {
		let t = e, n = Tc(), { traits: r } = Ws(n), i = /* @__PURE__ */ I("");
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
		return (t, n) => (K(), q("section", lu, [J("section", uu, [
			n[3] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "1"), J("h2", null, "Traits")], -1),
			Y(Uc, {
				class: "npc-builder__drop npc-builder__drop--career",
				description: "Add creature traits or NPC trait items.",
				title: "Drop Trait Items",
				onDropData: c
			}),
			i.value ? (K(), q("p", du, A(i.value), 1)) : X("", !0),
			J("div", fu, [n[2] ||= J("div", { class: "npc-builder__table-head npc-builder__table-head--traits" }, [
				J("span", null, "Name"),
				J("span", null, "Source"),
				J("span", null, "Config"),
				J("span")
			], -1), (K(!0), q(W, null, V(L(r), (t) => (K(), q("article", {
				key: t.key,
				class: "npc-builder__trait-row"
			}, [
				J("div", pu, [
					J("strong", null, A(t.name), 1),
					t.config.rollable ? (K(), q("span", mu, "Rollable")) : X("", !0),
					t.config.damage ? (K(), q("span", hu, "Damage")) : X("", !0)
				]),
				J("span", null, A(a(t)), 1),
				J("div", gu, [
					J("label", _u, [J("span", null, A(t.config.damage ? "Damage" : "Specification"), 1), J("input", {
						value: t.config.specification,
						placeholder: "None",
						type: "text",
						onInput: (e) => s(t, "specification", e)
					}, null, 40, vu)]),
					t.config.rollable && !t.config.damage ? (K(), q("label", yu, [n[0] ||= J("span", null, "Difficulty", -1), J("select", {
						value: t.config.defaultDifficulty,
						onChange: (e) => s(t, "defaultDifficulty", e)
					}, [(K(!0), q(W, null, V(e.difficultyOptions, (e) => (K(), q("option", {
						key: e.value,
						value: e.value
					}, A(e.label), 9, xu))), 128))], 40, bu)])) : X("", !0),
					t.config.damage && t.config.dice ? (K(), q("label", Su, [n[1] ||= J("span", null, "Dice", -1), J("input", {
						value: t.config.dice,
						placeholder: "Optional",
						type: "text",
						onInput: (e) => s(t, "dice", e)
					}, null, 40, Cu)])) : X("", !0)
				]),
				t.source === "base" ? (K(), q("span", Tu)) : (K(), q("button", {
					key: 0,
					type: "button",
					onClick: (e) => o(t)
				}, " Remove ", 8, wu))
			]))), 128))])
		])]));
	}
}), Du = { class: "npc-builder__stack" }, Ou = { class: "npc-builder__panel" }, ku = { class: "npc-builder__panel-actions" }, Au = ["disabled"], ju = { key: 0 }, Mu = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, Nu = { class: "npc-builder__table" }, Pu = ["checked", "onChange"], Fu = { class: "npc-builder__trapping-name" }, Iu = { key: 0 }, Lu = { class: "npc-builder__trapping-resolution" }, Ru = ["value", "onChange"], zu = {
	key: 0,
	value: ""
}, Bu = ["value"], Vu = { key: 1 }, Hu = ["value", "onInput"], Uu = ["onClick"], Wu = { key: 1 }, Gu = "__blank-item__", Ku = /* @__PURE__ */ ur({
	__name: "NpcBuilderTrappingsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Tc(), { trappings: r } = Ws(n), i = /* @__PURE__ */ I(""), a = /* @__PURE__ */ I(!1), o = Q(() => r.value.filter((e) => !e.ignored && e.resolution.status === "unresolved"));
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
			return e.resolution.status === "fallback" ? Gu : e.resolution.selectedCandidateUuid;
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
				if (r.value === Gu) {
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
		return (e, t) => (K(), q("section", Du, [J("section", Ou, [
			t[1] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "1"), J("h2", null, "Trappings")], -1),
			Y(Uc, {
				class: "npc-builder__drop npc-builder__drop--career",
				description: "Add weapons, armour, containers, or any other item.",
				title: "Drop Trapping Items",
				onDropData: _
			}),
			J("div", ku, [J("button", {
				disabled: a.value || !o.value.length,
				type: "button",
				onClick: g
			}, A(a.value ? "Resolving..." : "Resolve Trappings"), 9, Au), o.value.length ? (K(), q("span", ju, A(o.value.length) + " unresolved ", 1)) : X("", !0)]),
			i.value ? (K(), q("p", Mu, A(i.value), 1)) : X("", !0),
			J("div", Nu, [t[0] ||= J("div", { class: "npc-builder__table-head npc-builder__table-head--traps" }, [
				J("span", null, "Use"),
				J("span", null, "Name"),
				J("span", null, "Resolution"),
				J("span", null, "Type"),
				J("span", null, "Qty"),
				J("span", null, "Source"),
				J("span")
			], -1), (K(!0), q(W, null, V(L(r), (e) => (K(), q("article", {
				key: e.key,
				class: k(["npc-builder__trapping-row", { "is-ignored": e.ignored }])
			}, [
				J("input", {
					checked: !e.ignored,
					type: "checkbox",
					onChange: (t) => l(e.key, t)
				}, null, 40, Pu),
				J("div", Fu, [J("strong", null, A(e.name), 1), m(e) ? (K(), q("span", Iu, A(m(e)), 1)) : X("", !0)]),
				J("div", Lu, [p(e) ? (K(), q("select", {
					key: 0,
					value: d(e),
					onChange: (t) => h(e.key, t)
				}, [
					e.resolution.candidates.length ? (K(), q("option", zu, " Choose match ")) : X("", !0),
					(K(!0), q(W, null, V(e.resolution.candidates, (e) => (K(), q("option", {
						key: e.uuid,
						value: e.uuid
					}, A(e.name) + " (" + A(e.sourceLabel) + ") ", 9, Bu))), 128)),
					f(e) ? (K(), q("option", {
						key: 1,
						value: Gu
					}, " Blank Item ")) : X("", !0)
				], 40, Ru)) : (K(), q("span", Vu, A(u(e)), 1))]),
				J("span", null, A(e.resolution.selectedItemType || e.itemType || "trapping"), 1),
				J("input", {
					value: e.quantity,
					min: "1",
					type: "number",
					onInput: (t) => c(e.key, t)
				}, null, 40, Hu),
				J("span", null, A(s(e)), 1),
				e.source === "custom" ? (K(), q("button", {
					key: 0,
					type: "button",
					onClick: (t) => L(n).removeCustomTrapping(e.key)
				}, " Remove ", 8, Uu)) : (K(), q("span", Wu))
			], 2))), 128))])
		])]));
	}
}), qu = { class: "npc-builder__subview-stack" }, Ju = [
	"checked",
	"disabled",
	"onChange"
], Yu = { class: "npc-builder__subview-actions" }, Xu = /* @__PURE__ */ ur({
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
		return (t, r) => (K(), q("div", qu, [
			J("p", null, A(e.prompt.droppedCareer.name) + " appears to belong to the " + A(e.prompt.droppedCareer.careerGroup) + " career track. The following lower-tier candidates were found. ", 1),
			(K(!0), q(W, null, V(e.candidateGroups, (t) => (K(), q("section", {
				key: t.level,
				class: "npc-builder__candidate-group"
			}, [J("h3", null, "Tier " + A(t.level || "Unknown"), 1), (K(!0), q(W, null, V(t.candidates, (t) => (K(), q("label", {
				key: t.uuid,
				class: k(["npc-builder__candidate-row", { "is-queued": e.isCareerQueued(t.uuid) }])
			}, [J("input", {
				checked: e.isCareerQueued(t.uuid) || e.isLowerCareerSelected(t.uuid),
				disabled: e.isCareerQueued(t.uuid),
				type: "checkbox",
				onChange: (e) => n("lowerCareerSelected", t, e)
			}, null, 40, Ju), J("span", null, [J("strong", null, A(t.name), 1), J("small", null, [da(A(t.careerGroup || "Career") + " ", 1), e.isCareerQueued(t.uuid) ? (K(), q(W, { key: 0 }, [da(" already queued ")], 64)) : X("", !0)])])], 2))), 128))]))), 128)),
			J("div", Yu, [J("button", {
				type: "button",
				onClick: r[0] ||= (e) => n("addDroppedOnly")
			}, " Add Dropped Only "), J("button", {
				type: "button",
				onClick: r[1] ||= (e) => n("addSelected")
			}, "Add Selected")])
		]));
	}
}), Zu = { class: "npc-builder__subview-stack" }, Qu = { class: "npc-builder__field" }, $u = ["onUpdate:modelValue"], ed = ["value"], td = ["onUpdate:modelValue", "placeholder"], nd = {
	key: 0,
	class: "npc-builder__suggestions"
}, rd = { key: 0 }, id = ["onClick"], ad = {
	key: 0,
	class: "npc-builder__linked-note"
}, od = { class: "npc-builder__subview-actions" }, sd = /* @__PURE__ */ ur({
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
		return (t, r) => (K(), q("div", Zu, [
			r[4] ||= J("p", null, " Some Career skills need a specialization before they become concrete WFRP skills. Blank rows can be left unresolved and edited later. ", -1),
			(K(!0), q(W, null, V(e.prompt.rows, (t) => (K(), q("section", {
				key: t.resolutionKey,
				class: "npc-builder__resolution-row"
			}, [
				J("div", null, [J("strong", null, A(e.getSkillResolutionLabel(t)), 1), J("small", null, A(t.careerLabel), 1)]),
				J("label", Qu, [r[3] ||= J("span", null, "Specialization", -1), t.options.length > 1 ? B((K(), q("select", {
					key: 0,
					"onUpdate:modelValue": (e) => t.resolvedSpecialization = e
				}, [r[2] ||= J("option", { value: "" }, "Leave unresolved", -1), (K(!0), q(W, null, V(t.options, (e) => (K(), q("option", {
					key: e,
					value: e
				}, A(e), 9, ed))), 128))], 8, $u)), [[Qo, t.resolvedSpecialization]]) : B((K(), q("input", {
					key: 1,
					"onUpdate:modelValue": (e) => t.resolvedSpecialization = e,
					placeholder: t.suggestedSpecializations.length ? "Type or choose below" : t.specialization,
					type: "text"
				}, null, 8, td)), [[Yo, t.resolvedSpecialization]])]),
				e.usesFreeformSkillSpecialization(t) ? (K(), q("div", nd, [t.isLoadingSuggestions ? (K(), q("small", rd, "Finding known choices.")) : X("", !0), (K(!0), q(W, null, V(t.suggestedSpecializations, (e) => (K(), q("button", {
					key: `${t.resolutionKey}:${e}`,
					type: "button",
					onClick: (r) => n("chooseSkillSpecialization", t, e)
				}, A(e), 9, id))), 128))])) : X("", !0)
			]))), 128)),
			e.prompt.linkedRows.length ? (K(), q("div", ad, A(e.prompt.linkedRows.length) + " linked skill specialization" + A(e.prompt.linkedRows.length === 1 ? "" : "s") + " will reuse earlier choices from this career chain. ", 1)) : X("", !0),
			J("div", od, [J("button", {
				type: "button",
				onClick: r[0] ||= (e) => n("addWithoutResolving")
			}, " Add Without Resolving "), J("button", {
				type: "button",
				onClick: r[1] ||= (e) => n("applySpecializations")
			}, " Apply Specializations ")])
		]));
	}
}), cd = { class: "npc-builder" }, ld = { class: "npc-builder__header" }, ud = { class: "npc-builder__header-actions" }, dd = {
	"aria-label": "NPC Builder sections",
	class: "npc-builder__tabs"
}, fd = ["disabled"], pd = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, md = {
	key: 1,
	class: "npc-builder__message"
}, hd = /* @__PURE__ */ ur({
	__name: "NpcBuilderApp",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Tc(), { advancements: r, careers: i, finalActorName: a, selectedBaseActor: o, selectedBaseActorUuid: s, settings: c, traits: l, trappings: u } = Ws(n), d = /* @__PURE__ */ I("builder"), f = /* @__PURE__ */ I(""), p = /* @__PURE__ */ I(""), m = /* @__PURE__ */ I(!1), h = /* @__PURE__ */ I(!1), g = /* @__PURE__ */ I(!1), _ = /* @__PURE__ */ I(!1), v = /* @__PURE__ */ I(null), y = /* @__PURE__ */ I(null), b = /* @__PURE__ */ I([]), x = Q(() => !!(o.value && i.value.length && !m.value && !h.value)), S = Q(() => {
			let e = v.value;
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
			g.value = !0;
			try {
				let [e, r, i, a] = await Promise.all([
					t.bridge.loadSettings(),
					t.bridge.listActorFolders(),
					t.bridge.listItemFolders(),
					t.bridge.listTraitDifficultyOptions()
				]);
				n.hydrateSettings(e), n.hydrateActorFolders(r), n.hydrateItemFolders(i), b.value = a, await Promise.all([te(), ne()]);
			} catch (e) {
				p.value = ge(e);
			} finally {
				g.value = !1;
			}
		}), Un(s, async (e) => {
			if (p.value = "", !e) {
				n.clearBaseDraftData();
				return;
			}
			_.value = !0;
			try {
				n.hydrateBaseActorDraftData(await t.bridge.loadBaseActorDraftData(e));
			} catch (e) {
				p.value = ge(e), n.clearBaseDraftData();
			} finally {
				_.value = !1;
			}
		});
		async function C() {
			if (!o.value || !i.value.length) return;
			m.value = !0, p.value = "", f.value = "Building actor from the selected draft.";
			let e = {
				actorName: a.value,
				advancements: r.value,
				baseActorUuid: o.value.uuid,
				careers: i.value,
				settings: c.value,
				traits: l.value,
				trappings: u.value
			};
			try {
				f.value = `Created ${(await t.bridge.buildNpc(e)).name}.`, n.resetDraft(), d.value = "builder";
			} catch (e) {
				p.value = ge(e), f.value = "";
			} finally {
				m.value = !1;
			}
		}
		async function w(e) {
			await ie(e, async (e) => {
				await ee(await t.bridge.resolveCareerDrop(e));
			});
		}
		async function ee(e) {
			if (c.value.lowerCareerMode === "never") {
				T([{
					career: e,
					mode: "add-or-increment"
				}], {
					enableLinkedSkillResolution: !1,
					message: ""
				});
				return;
			}
			h.value = !0, f.value = "Checking for lower-tier career candidates.";
			try {
				let n = await t.bridge.findLowerCareerCandidates(e), r = n.filter((e) => !de(e.uuid));
				if (!r.length) {
					T([{
						career: e,
						mode: "add-or-increment"
					}], {
						enableLinkedSkillResolution: !1,
						message: ""
					}), f.value = "";
					return;
				}
				if (c.value.lowerCareerMode === "auto-add-all") {
					T([...r.map((e) => ({
						career: e,
						mode: "add-if-missing"
					})), {
						career: e,
						mode: "add-or-increment"
					}], {
						enableLinkedSkillResolution: !c.value.askForLinkedSkillSpecializations,
						message: `Added ${r.length} lower-tier career candidate${r.length === 1 ? "" : "s"}.`
					});
					return;
				}
				v.value = {
					candidates: n,
					droppedCareer: e,
					selectedUuids: r.map((e) => e.uuid)
				}, f.value = "";
			} finally {
				h.value = !1;
			}
		}
		async function te() {
			n.hydrateBaseActors(await t.bridge.listBaseActors(c.value));
		}
		async function ne() {
			n.hydrateQuickTraits(await t.bridge.listQuickTraits(c.value));
		}
		function T(e, t) {
			let n = ae(e, t);
			if (n.rows.length) {
				y.value = n, O(y.value);
				return;
			}
			se(e, t.message);
		}
		function re() {
			let e = v.value;
			if (!e) return;
			let t = e.candidates.filter((t) => e.selectedUuids.includes(t.uuid));
			v.value = null, T([...t.map((e) => ({
				career: e,
				mode: "add-if-missing"
			})), {
				career: e.droppedCareer,
				mode: "add-or-increment"
			}], {
				enableLinkedSkillResolution: !c.value.askForLinkedSkillSpecializations,
				message: t.length > 0 ? `Added ${t.length} lower-tier career candidate${t.length === 1 ? "" : "s"}.` : ""
			});
		}
		function E() {
			let e = v.value;
			e && (v.value = null, T([{
				career: e.droppedCareer,
				mode: "add-or-increment"
			}], {
				enableLinkedSkillResolution: !1,
				message: ""
			}));
		}
		async function ie(e, t) {
			p.value = "";
			try {
				await t(e);
			} catch (e) {
				p.value = ge(e);
			}
		}
		function D() {
			let e = y.value;
			if (e) {
				for (let t of e.rows) {
					let e = t.resolvedSpecialization.trim() ? qs(t.baseName, t.resolvedSpecialization) : "";
					n.setSkillGrantResolution(t.resolutionKey, e);
				}
				for (let t of e.linkedRows) n.setSkillGrantResolution(t.resolutionKey, n.getSkillGrantResolution(t.linkedFromKey));
				y.value = null, se(e.entries, e.message);
			}
		}
		function ae(e, t) {
			let n = /* @__PURE__ */ new Map(), r = [], i = [];
			for (let a of e) {
				let e = /* @__PURE__ */ new Map();
				for (let o of Xs(a.career.uuid, a.career.grants.skills)) {
					let s = Ys(o.originalName);
					if (!s) continue;
					let c = Zs(o.originalName), l = n.get(c) ?? [], u = e.get(c) ?? 0, d = t.enableLinkedSkillResolution && l[u] ? l[u] : "";
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
		function oe() {
			let e = y.value;
			e && (y.value = null, se(e.entries, e.message));
		}
		async function O(e) {
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
			f.value = t;
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
			return v.value?.selectedUuids.includes(e) ?? !1;
		}
		function pe(e) {
			return e.options.length <= 1 && e.specialization.trim().toLocaleLowerCase() === "any";
		}
		function me(e, t) {
			e.resolvedSpecialization = t;
		}
		function he(e, t) {
			let n = v.value, r = t.target;
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
		return (e, n) => (K(), q("main", cd, [
			J("header", ld, [n[5] ||= J("div", null, [J("p", null, "WFRP4e Customizer"), J("h1", null, "NPC Builder")], -1), J("div", ud, [J("nav", dd, [
				J("button", {
					class: k({ "is-active": d.value === "builder" }),
					type: "button",
					onClick: n[0] ||= (e) => d.value = "builder"
				}, " Build ", 2),
				J("button", {
					class: k({ "is-active": d.value === "advancements" }),
					type: "button",
					onClick: n[1] ||= (e) => d.value = "advancements"
				}, " Advances ", 2),
				J("button", {
					class: k({ "is-active": d.value === "trappings" }),
					type: "button",
					onClick: n[2] ||= (e) => d.value = "trappings"
				}, " Trappings ", 2),
				J("button", {
					class: k({ "is-active": d.value === "traits" }),
					type: "button",
					onClick: n[3] ||= (e) => d.value = "traits"
				}, " Traits ", 2),
				J("button", {
					class: k({ "is-active": d.value === "settings" }),
					type: "button",
					onClick: n[4] ||= (e) => d.value = "settings"
				}, " Settings ", 2)
			]), J("button", {
				disabled: !x.value,
				type: "button",
				onClick: C
			}, " Build NPC ", 8, fd)])]),
			Y(kc, {
				open: v.value !== null,
				title: "Add Lower-Tier Careers?",
				onClose: E
			}, {
				default: In(() => [v.value ? (K(), ra(Xu, {
					key: 0,
					"candidate-groups": S.value,
					"is-career-queued": de,
					"is-lower-career-selected": fe,
					prompt: v.value,
					onAddDroppedOnly: E,
					onAddSelected: re,
					onLowerCareerSelected: he
				}, null, 8, ["candidate-groups", "prompt"])) : X("", !0)]),
				_: 1
			}, 8, ["open"]),
			Y(kc, {
				open: y.value !== null,
				title: "Resolve Skill Specializations",
				onClose: oe
			}, {
				default: In(() => [y.value ? (K(), ra(sd, {
					key: 0,
					"get-skill-resolution-label": ue,
					prompt: y.value,
					"uses-freeform-skill-specialization": pe,
					onAddWithoutResolving: oe,
					onApplySpecializations: D,
					onChooseSkillSpecialization: me
				}, null, 8, ["prompt"])) : X("", !0)]),
				_: 1
			}, 8, ["open"]),
			p.value ? (K(), q("p", pd, A(p.value), 1)) : f.value ? (K(), q("p", md, A(f.value), 1)) : X("", !0),
			d.value === "settings" ? (K(), ra(cu, {
				key: 2,
				bridge: t.bridge
			}, null, 8, ["bridge"])) : d.value === "advancements" ? (K(), ra(Vc, { key: 3 })) : d.value === "trappings" ? (K(), ra(Ku, {
				key: 4,
				bridge: t.bridge
			}, null, 8, ["bridge"])) : d.value === "traits" ? (K(), ra(Eu, {
				key: 5,
				bridge: t.bridge,
				"difficulty-options": b.value
			}, null, 8, ["bridge", "difficulty-options"])) : (K(), ra(Ol, {
				key: 6,
				bridge: t.bridge,
				"is-loading-actors": g.value,
				"is-loading-base-draft": _.value,
				onCareerDrop: w
			}, null, 8, [
				"bridge",
				"is-loading-actors",
				"is-loading-base-draft"
			]))
		]));
	}
}), gd = ks(), _d = class extends foundry.applications.api.ApplicationV2 {
	#e;
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("wfrp4e-customizer-vue-root", "root"), n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("wfrp4e-customizer-vue-app", "vue-app"), t.replaceChildren(e);
		let r = this.getVueProps() ?? {};
		this.#e = cs(this.getVueComponent(), r), this.#e.use(gd), this.#e.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#e?.unmount(), this.#e = void 0;
	}
}, $ = {
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
}, vd = {
	[$.Agility]: "Agility",
	[$.BallisticSkill]: "Ballistic Skill",
	[$.Dexterity]: "Dexterity",
	[$.Fellowship]: "Fellowship",
	[$.Initiative]: "Initiative",
	[$.Intelligence]: "Intelligence",
	[$.Strength]: "Strength",
	[$.Toughness]: "Toughness",
	[$.WeaponSkill]: "Weapon Skill",
	[$.Willpower]: "Willpower"
}, yd = {
	agility: $.Agility,
	"ballistic skill": $.BallisticSkill,
	dexterity: $.Dexterity,
	fellowship: $.Fellowship,
	initiative: $.Initiative,
	intelligence: $.Intelligence,
	strength: $.Strength,
	toughness: $.Toughness,
	"weapon skill": $.WeaponSkill,
	willpower: $.Willpower
};
function bd(e) {
	return e in vd;
}
//#endregion
//#region src/shared/object-readers.ts
function xd(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function Sd(e, t) {
	let n = e;
	for (let e of t) {
		if (!xd(n) || !(e in n)) return;
		n = n[e];
	}
	return n;
}
function Cd(e, t) {
	let n = Sd(e, t);
	return typeof n == "string" ? n.trim() : "";
}
function wd(e, t) {
	let n = Sd(e, t);
	return Array.isArray(n) ? n.filter((e) => typeof e == "string") : [];
}
function Td(e, t, n = 0) {
	for (let n of t) {
		let t = Number(Sd(e, n));
		if (Number.isFinite(t)) return t;
	}
	return n;
}
function Ed(e, t, n = !1) {
	for (let n of t) {
		let t = Sd(e, n);
		if (typeof t == "boolean") return t;
	}
	return n;
}
function Dd(e) {
	return Array.isArray(e) ? e.flatMap(Dd) : typeof e == "string" ? e.split(/[,;\n\r]/).map((e) => e.trim()).filter(Boolean) : xd(e) ? Object.values(e).flatMap(Dd) : [];
}
function Od(e, t, n) {
	let r = e;
	for (let e of t.slice(0, -1)) {
		let t = r[e];
		xd(t) || (r[e] = {}), r = r[e];
	}
	r[t[t.length - 1] ?? ""] = n;
}
//#endregion
//#region src/functions/npc-builder/extract-career-grants.ts
var kd = {
	characteristics: [],
	skills: [],
	talents: [],
	trappings: []
};
function Ad(e) {
	return {
		characteristics: jd(e),
		skills: Md(e),
		talents: Pd(e, [["talents", "value"], ["talents"]]),
		trappings: Pd(e, [["trappings", "value"], ["trappings"]])
	};
}
function jd(e) {
	let t = Pd(e, [["characteristics", "value"], ["characteristics"]]);
	if (t.length) return t.map(Nd);
	let n = Sd(e, ["characteristics"]);
	if (!xd(n)) return [];
	let r = [];
	for (let [e, t] of Object.entries(n)) t && r.push(Nd(e));
	return Id(r);
}
function Md(e) {
	return Pd(e, [["skills", "value"], ["skills"]], { preserveDuplicates: !0 });
}
function Nd(e) {
	let t = e.trim().toLocaleLowerCase();
	if (bd(t)) return vd[t];
	let n = yd[t];
	return n ? vd[n] : e.trim();
}
function Pd(e, t, n = {}) {
	for (let r of t) {
		let t = Dd(Sd(e, r));
		if (t.length) return n.preserveDuplicates ? Fd(t) : Id(t);
	}
	return [];
}
function Fd(e) {
	return e.map((e) => e.trim()).filter(Boolean);
}
function Id(e) {
	return [...new Set(Fd(e))].sort((e, t) => e.localeCompare(t));
}
Object.freeze(kd);
//#endregion
//#region src/functions/npc-builder/recommended-quick-traits.ts
var Ld = [
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
//#region src/module/foundry/document-guards.ts
function Rd(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Actor";
}
function zd(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Item";
}
function Bd(e, t = "Expected a Foundry Actor.") {
	if (!Rd(e)) throw Error(t);
	return e;
}
function Vd(e, t = "Expected a Foundry Item.") {
	if (!zd(e)) throw Error(t);
	return e;
}
function Hd(e, t, n = `Expected a Foundry ${t} Item.`) {
	let r = Vd(e, n);
	if (r.type !== t) throw Error(n);
	return r;
}
//#endregion
//#region src/module/foundry/item-sources.ts
function Ud(e, t) {
	return {
		img: "systems/wfrp4e/icons/blank.png",
		name: e,
		system: {},
		type: t
	};
}
function Wd(e, t, n) {
	let r = e ? e.toObject() : Ud(t, n);
	return delete r._id, r;
}
function Gd(e, t, n) {
	return e.items?.contents.find((e) => e.type === n && Jd(e.name, t)) ?? null;
}
function Kd(e, t, n) {
	return e.items?.contents.find((e) => t && e.uuid === t ? !0 : Jd(e.name, n)) ?? null;
}
function qd(e, t) {
	return game.items?.contents.find((n) => t.includes(n.type) && Jd(n.name, e)) ?? null;
}
function Jd(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/wfrp4e/item-lookup.ts
async function Yd(e, t) {
	return await game.wfrp4e?.utility?.findItem?.(e, t) || qd(e, t);
}
//#endregion
//#region src/module/wfrp4e/career-index.ts
var Xd = /* @__PURE__ */ new Map(), Zd = "idle", Qd = null;
function $d() {
	return Qd || (Zd = "indexing", Xd.clear(), Qd = tf().then(() => {
		Zd = "ready";
	}).catch((e) => {
		Zd = "error", e instanceof Error && e.message, console.warn("wfrp4e-customizer-apps | Career indexing failed.", e);
	}), Qd);
}
async function ef(e) {
	return Zd === "idle" && $d(), !e.careerGroup || e.level === null ? [] : [...Xd.values()].filter((t) => sf(t, e)).sort(lf);
}
async function tf() {
	af(), await df();
	for (let e of game.packs ?? []) {
		if (!of(e) || !e.getDocuments) continue;
		let t = await e.getDocuments();
		for (let e of t) zd(e) && e.type === "career" && Xd.set(e.uuid, uf(e));
		await df();
	}
}
function nf(e) {
	return Cd(e.system, ["careergroup", "value"]);
}
function rf(e) {
	let t = Sd(e.system, ["level", "value"]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
function af() {
	for (let e of game.items?.contents ?? []) e.type === "career" && Xd.set(e.uuid, uf(e));
}
function of(e) {
	return e.documentName === "Item";
}
function sf(e, t) {
	return e.uuid !== t.uuid && e.level !== null && t.level !== null && e.level < t.level && cf(e.careerGroup) === cf(t.careerGroup);
}
function cf(e) {
	return e.trim().toLocaleLowerCase();
}
function lf(e, t) {
	let n = e.level ?? 0, r = t.level ?? 0;
	return n === r ? e.name.localeCompare(t.name) : n - r;
}
function uf(e) {
	return {
		careerGroup: nf(e),
		grants: Ad(e.system),
		img: e.img ?? "",
		level: rf(e),
		name: e.name,
		uuid: e.uuid
	};
}
function df() {
	return new Promise((e) => {
		globalThis.setTimeout(e, 0);
	});
}
//#endregion
//#region src/module/wfrp4e/skill-specializations.ts
var ff = /* @__PURE__ */ new Map(), pf = "idle", mf = null;
async function hf(e) {
	let t = Zs(e);
	return t ? (pf === "idle" && gf(), mf && await mf, [...ff.get(t) ?? []].sort((e, t) => e.localeCompare(t))) : [];
}
function gf() {
	return mf || (pf = "indexing", ff.clear(), mf = _f().then(() => {
		pf = "ready";
	}).catch((e) => {
		pf = "error", e instanceof Error && e.message, console.warn("wfrp4e-customizer-apps | Skill specialization indexing failed.", e);
	}), mf);
}
async function _f() {
	yf(), await xf();
	for (let e of game.packs ?? []) {
		if (!bf(e) || !e.getDocuments) continue;
		let t = await e.getDocuments();
		for (let e of t) zd(e) && vf(e);
		await xf();
	}
}
function vf(e) {
	if (e.type !== "skill") return;
	let t = Js(e.name);
	if (!t) return;
	let n = Zs(t.baseName), r = ff.get(n) ?? /* @__PURE__ */ new Set();
	r.add(t.specialization), ff.set(n, r);
}
function yf() {
	for (let e of game.items?.contents ?? []) vf(e);
}
function bf(e) {
	return e.documentName === "Item";
}
function xf() {
	return new Promise((e) => {
		globalThis.setTimeout(e, 0);
	});
}
//#endregion
//#region src/module/settings/foundry-setting-adapter.ts
function Sf(e) {
	return e;
}
function Cf(t) {
	game.settings.register(e, t.key, {
		config: t.config ?? !1,
		default: t.defaultValue,
		name: t.name,
		scope: t.scope ?? "world",
		type: Object
	});
}
function wf(t) {
	return t.normalize(game.settings.get(e, t.key));
}
async function Tf(t, n) {
	let r = t.normalize(n);
	return await game.settings.set(e, t.key, r), r;
}
//#endregion
//#region src/module/apps/npc-builder/settings.ts
var Ef = "npcBuilderSettings", Df = {
	allowBaseActorCharacteristics: !0,
	allowBaseActorSkills: !0,
	allowBaseActorTalents: !0,
	allowBaseActorTraits: !0,
	allowBaseActorTrappings: !0,
	askForLinkedSkillSpecializations: !1,
	baseActorFolderUuid: "",
	includeSpeciesInName: !1,
	lowerCareerMode: "prompt",
	outputActorFolderUuid: "",
	quickTraitFolderUuid: ""
}, Of = Sf({
	defaultValue: Df,
	key: Ef,
	name: "NPC Builder Settings",
	normalize: Mf
});
function kf() {
	Cf(Of);
}
function Af() {
	return wf(Of);
}
async function jf(e) {
	return Tf(Of, e);
}
function Mf(e) {
	if (typeof e != "object" || !e) return { ...Df };
	let t = e;
	return {
		allowBaseActorCharacteristics: t.allowBaseActorCharacteristics ?? !0,
		allowBaseActorSkills: t.allowBaseActorSkills ?? !0,
		allowBaseActorTalents: t.allowBaseActorTalents ?? !0,
		allowBaseActorTraits: t.allowBaseActorTraits ?? !0,
		allowBaseActorTrappings: t.allowBaseActorTrappings ?? !0,
		askForLinkedSkillSpecializations: t.askForLinkedSkillSpecializations ?? !1,
		baseActorFolderUuid: typeof t.baseActorFolderUuid == "string" ? t.baseActorFolderUuid : "",
		includeSpeciesInName: t.includeSpeciesInName ?? !1,
		lowerCareerMode: Nf(t.lowerCareerMode) ? t.lowerCareerMode : "prompt",
		outputActorFolderUuid: typeof t.outputActorFolderUuid == "string" ? t.outputActorFolderUuid : "",
		quickTraitFolderUuid: typeof t.quickTraitFolderUuid == "string" ? t.quickTraitFolderUuid : ""
	};
}
function Nf(e) {
	return e === "auto-add-all" || e === "never" || e === "prompt";
}
//#endregion
//#region src/module/apps/npc-builder/bridge.ts
var Pf = [
	"ammunition",
	"armour",
	"container",
	"money",
	"trapping",
	"weapon"
], Ff = [
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
async function If(e) {
	let t = await Lf(e);
	if (!t) throw Error("Foundry did not create the NPC Actor.");
	let n = Qf(e), r = e.careers.at(-1), i = {
		name: n,
		"prototypeToken.name": n
	};
	return r?.img && (i.img = r.img, i["prototypeToken.texture.src"] = r.img), await t.update(i), await Bf(t, e.advancements), await Uf(t, e.traits), await Hf(t, e.trappings), t.sheet?.render(!0), ui.notifications?.info(`Created NPC "${n}".`), {
		name: n,
		uuid: t.uuid
	};
}
async function Lf(e) {
	let t = Bd(await fromUuid(e.baseActorUuid)).toObject(), n = np(e.settings.outputActorFolderUuid);
	return delete t._id, delete t.folder, t.type = "npc", Rf(t), n && (t.folder = n.id), Actor.create(t);
}
function Rf(e) {
	Array.isArray(e.items) && (e.items = e.items.filter((e) => {
		if (typeof e != "object" || !e) return !0;
		let t = e;
		return t.type !== "trait" || !zf(t);
	}));
}
function zf(e) {
	return Ed(e.system, [["disabled"], ["disabled", "value"]]);
}
async function Bf(e, t) {
	let n = {}, r = [], i = [];
	for (let a of t) {
		let t = Math.max(0, Math.floor(a.current));
		if (t <= 0) continue;
		let o = a.baseValue + t;
		if (a.kind === "characteristic") {
			Vf(n, a, o);
			continue;
		}
		let s = Jf(e, a.name, a.kind);
		if (s) {
			r.push({
				_id: s.id,
				"system.advances.value": o
			});
			continue;
		}
		let c = Wd(await Yd(a.name, [a.kind]), a.name, a.kind);
		c.type = a.kind, Od(c, [
			"system",
			"advances",
			"value"
		], o), i.push(c);
	}
	Object.keys(n).length && await e.update(n), r.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", r), i.length && await e.createEmbeddedDocuments("Item", i);
}
function Vf(e, t, n) {
	let r = yd[t.name.trim().toLocaleLowerCase()];
	r && (e[`system.characteristics.${r}.advances`] = n);
}
async function Hf(e, t) {
	let n = [], r = [], i = [];
	for (let a of t) {
		let t = a.source === "base" ? Kd(e, a.sourceUuid, a.name) : null;
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
		let o = await Kf(a), s = a.resolution.selectedItemType || a.itemType || "trapping", c = Wd(o, a.resolution.selectedName || a.name, s);
		c.type = s || c.type || "trapping", Od(c, [
			"system",
			"quantity",
			"value"
		], a.quantity), r.push(c);
	}
	i.length && e.deleteEmbeddedDocuments && await e.deleteEmbeddedDocuments("Item", i), n.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", n), r.length && await e.createEmbeddedDocuments("Item", r);
}
async function Uf(e, t) {
	let n = [], r = [], i = [];
	for (let a of t) {
		let t = a.source === "base" ? Kd(e, a.sourceUuid, a.name) : Jf(e, a.name, "trait");
		if (a.ignored) {
			t && i.push(t.id);
			continue;
		}
		if (t) {
			n.push(Gf(t.id, a.config));
			continue;
		}
		let o = Wd(a.sourceUuid ? await qf(a.sourceUuid) : await Yd(a.name, ["trait"]), a.name, "trait");
		o.type = "trait", Od(o, ["system", "disabled"], !1), Wf(o, a.config), r.push(o);
	}
	i.length && e.deleteEmbeddedDocuments && await e.deleteEmbeddedDocuments("Item", i), n.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", n), r.length && await e.createEmbeddedDocuments("Item", r);
}
function Wf(e, t) {
	Od(e, [
		"system",
		"specification",
		"value"
	], t.specification), t.rollable && !t.damage && Od(e, [
		"system",
		"rollable",
		"defaultDifficulty"
	], t.defaultDifficulty), t.damage && t.dice && Od(e, [
		"system",
		"rollable",
		"dice"
	], t.dice);
}
function Gf(e, t) {
	return {
		_id: e,
		"system.specification.value": t.specification,
		...t.rollable && !t.damage ? { "system.rollable.defaultDifficulty": t.defaultDifficulty } : {},
		...t.damage && t.dice ? { "system.rollable.dice": t.dice } : {}
	};
}
async function Kf(e) {
	if (e.sourceUuid) {
		let t = await fromUuid(e.sourceUuid);
		return zd(t) ? t : null;
	}
	if (e.resolution.selectedCandidateUuid) {
		let t = await fromUuid(e.resolution.selectedCandidateUuid);
		return zd(t) ? t : null;
	}
	return e.resolution.status === "fallback" ? null : Yd(e.resolution.selectedName || e.name, ip());
}
async function qf(e) {
	let t = await fromUuid(e);
	return zd(t) ? t : null;
}
function Jf(e, t, n) {
	return Gd(e, t, n === "characteristic" ? "" : n);
}
async function Yf(e) {
	return Fp(await Zf(e, "Actor"));
}
async function Xf(e) {
	return Fp(await Zf(e, "Item"));
}
async function Zf(e, t) {
	let n = e.trim();
	if (!n) throw Error("Enter a folder name first.");
	let r = game.folders.contents.find((e) => e.type === t && op(e.name, n));
	if (r) return r;
	let i = await Folder.create({
		name: n,
		type: t
	});
	if (!i) throw Error("Foundry did not create the folder.");
	return i;
}
function Qf(e) {
	if (!e.settings.includeSpeciesInName) return e.actorName;
	let t = game.actors.contents.find((t) => t.uuid === e.baseActorUuid), n = t ? $f(t) : "";
	return !n || e.actorName.toLocaleLowerCase().includes(n.toLocaleLowerCase()) ? e.actorName : `${n} ${e.actorName}`;
}
function $f(e) {
	return Cd(e.system, [
		"details",
		"species",
		"value"
	]) || Cd(e.system, ["details", "species"]) || Cd(e.system, [
		"details",
		"race",
		"value"
	]) || Cd(e.system, [
		"details",
		"ancestry",
		"value"
	]);
}
function ep(e) {
	return Cd(e.system, ["careergroup", "value"]);
}
function tp(e) {
	let t = Sd(e.system, ["level", "value"]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
function np(e) {
	return e ? game.folders.contents.find((t) => t.uuid === e) ?? null : null;
}
function rp(e) {
	let t = np(e);
	return t?.type === "Item" ? t : null;
}
function ip() {
	let e = wd(game.wfrp4e?.config, ["trappingItems"]);
	return e.length ? e : Pf;
}
async function ap() {
	let e = Sd(game.wfrp4e?.config, ["difficultyLabels"]);
	if (!xd(e)) return Ff;
	let t = Object.entries(e).filter((e) => {
		let [t, n] = e;
		return !!t.trim() && typeof n == "string";
	}).map(([e, t]) => ({
		label: t,
		value: e
	}));
	return t.length ? t : Ff;
}
function op(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
async function sp(e) {
	return rc(e, await cp());
}
async function cp() {
	let e = [], t = ip();
	for (let n of game.items?.contents ?? []) t.includes(n.type) && e.push(Lp(n, "World"));
	for (let n of game.packs ?? []) {
		if (!dp(n)) continue;
		let r = await lp(n, t);
		if (r.length) {
			e.push(...r);
			continue;
		}
		if (!n.getDocuments) continue;
		let i = await n.getDocuments();
		for (let r of i) zd(r) && t.includes(r.type) && e.push(Lp(r, n.title ?? "Compendium"));
	}
	return e;
}
async function lp(e, t) {
	return e.getIndex ? ((await e.getIndex({ fields: ["name", "type"] })).contents ?? []).filter((n) => !!(n.name && n.type && up(e, n) && t.includes(n.type))).map((t) => ({
		itemType: t.type ?? "trapping",
		name: t.name ?? "",
		sourceLabel: e.title ?? "Compendium",
		uuid: up(e, t)
	})) : [];
}
function up(e, t) {
	return t.uuid ? t.uuid : t._id && e.getUuid ? e.getUuid(t._id) : "";
}
function dp(e) {
	return e.documentName === "Item";
}
async function fp(e) {
	let t = rp(e.quickTraitFolderUuid);
	if (!t) throw Error("Choose a Quick Traits item folder before importing traits.");
	let n = new Set(hp(e).map((e) => e.name.trim().toLocaleLowerCase()));
	for (let e of Ld) {
		if (n.has(e.trim().toLocaleLowerCase())) continue;
		let r = Wd(await Yd(e, ["trait"]), e, "trait");
		r.folder = t.id, r.type = "trait", await Item.create(r);
	}
	return ui.notifications?.info("Imported recommended quick traits."), gp(e);
}
function pp(e, t) {
	return t.baseActorFolderUuid ? e.folder?.uuid === t.baseActorFolderUuid : !0;
}
function mp(e, t) {
	return t.quickTraitFolderUuid ? e.folder?.uuid === t.quickTraitFolderUuid : !1;
}
function hp(e) {
	return game.items?.contents.filter((t) => t.type === "trait" && mp(t, e)) ?? [];
}
async function gp(e) {
	return hp(e).map(Ip).sort((e, t) => e.name.localeCompare(t.name));
}
async function _p(e) {
	let t = Bd(await fromUuid(e));
	return {
		advancements: [
			...Cp(t),
			...wp(t, "skill"),
			...wp(t, "talent")
		],
		optionalTraits: xp(t),
		traits: bp(t),
		trappings: yp(t)
	};
}
function vp(e) {
	try {
		return JSON.parse(e);
	} catch {
		throw Error("Foundry drop data could not be read.");
	}
}
function yp(e) {
	let t = ip();
	return e.items?.contents.filter((e) => t.includes(e.type)).map((e) => ({
		itemType: e.type,
		name: e.name,
		quantity: Tp(e),
		uuid: e.uuid
	})) ?? [];
}
function bp(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && !Sp(e)).map(Np) ?? [];
}
function xp(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && Sp(e)).map(Np) ?? [];
}
function Sp(e) {
	return Ed(e.system, [["disabled"], ["disabled", "value"]]);
}
function Cp(e) {
	let t = [];
	for (let [n, r] of Object.entries(vd)) {
		let i = Td(e.system, [[
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
function wp(e, t) {
	return e.items?.contents.filter((e) => e.type === t).map((e) => ({
		current: Td(e.system, [["advances", "value"], ["advances"]]),
		kind: t,
		name: e.name
	})) ?? [];
}
function Tp(e) {
	return Td(e.system, [["quantity", "value"], ["quantity"]]) || 1;
}
function Ep(e) {
	return {
		...Gs(),
		attackType: Dp(e.system, ["rollable", "attackType"]) || "melee",
		bonusCharacteristic: Dp(e.system, ["rollable", "bonusCharacteristic"]),
		damage: Ed(e.system, [["rollable", "damage"]]),
		defaultDifficulty: Dp(e.system, ["rollable", "defaultDifficulty"]) || "challenging",
		dice: Dp(e.system, ["rollable", "dice"]),
		rollable: Ed(e.system, [["rollable", "value"]]),
		skill: Dp(e.system, ["rollable", "skill"]),
		sl: Ed(e.system, [["rollable", "SL"]], !0),
		specification: Dp(e.system, ["specification", "value"])
	};
}
function Dp(e, t) {
	let n = Sd(e, t);
	return typeof n == "string" ? n.trim() : typeof n == "number" ? String(n) : "";
}
async function Op(e) {
	let t = vp(e);
	if (t.type !== "Actor") throw Error("Drop a Foundry Actor here.");
	let n = null;
	return t.uuid ? n = await fromUuid(t.uuid) : t.id && (n = game.actors.get(t.id)), Mp(Bd(n));
}
async function kp(e) {
	let t = vp(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a WFRP Career item here.");
	return Pp(Hd(await fromUuid(t.uuid), "career", "Drop a WFRP Career item here."));
}
async function Ap(e) {
	let t = vp(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Item here.");
	let n = Vd(await fromUuid(t.uuid), "Drop a Foundry Item here.");
	return {
		ignored: !1,
		itemType: n.type,
		key: `custom:${n.uuid}`,
		name: n.name,
		quantity: Tp(n),
		resolution: tc({
			itemType: n.type,
			name: n.name,
			uuid: n.uuid
		}),
		source: "custom",
		sourceUuid: n.uuid
	};
}
async function jp(e) {
	let t = vp(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Trait item here.");
	let n = Hd(await fromUuid(t.uuid), "trait", "Drop a Foundry Trait item here.");
	return {
		config: Ep(n),
		ignored: !1,
		key: `custom:${n.uuid}`,
		name: n.name,
		source: "custom",
		sourceUuid: n.uuid
	};
}
function Mp(e) {
	return {
		img: e.img ?? "",
		name: e.name,
		species: $f(e),
		type: e.type,
		uuid: e.uuid
	};
}
function Np(e) {
	return {
		config: Ep(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
function Pp(e) {
	return {
		careerGroup: ep(e),
		grants: Ad(e.system),
		img: e.img ?? "",
		level: tp(e),
		name: e.name,
		uuid: e.uuid
	};
}
function Fp(e) {
	return {
		name: e.name,
		uuid: e.uuid
	};
}
function Ip(e) {
	return {
		config: Ep(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
function Lp(e, t) {
	return {
		itemType: e.type,
		name: e.name,
		sourceLabel: t,
		uuid: e.uuid
	};
}
var Rp = {
	buildNpc: If,
	ensureActorFolder: Yf,
	ensureItemFolder: Xf,
	findLowerCareerCandidates: ef,
	importRecommendedQuickTraits: fp,
	listSkillSpecializations: hf,
	listActorFolders: async () => game.folders.contents.filter((e) => e.type === "Actor").map(Fp).sort((e, t) => e.name.localeCompare(t.name)),
	listItemFolders: async () => game.folders.contents.filter((e) => e.type === "Item").map(Fp).sort((e, t) => e.name.localeCompare(t.name)),
	listBaseActors: async (e) => game.actors.contents.filter((t) => pp(t, e)).map(Mp),
	listQuickTraits: gp,
	listTraitDifficultyOptions: ap,
	loadBaseActorDraftData: _p,
	loadSettings: async () => Af(),
	resolveActorDrop: Op,
	resolveCareerDrop: kp,
	resolveTrapping: sp,
	resolveTraitDrop: jp,
	resolveTrappingDrop: Ap,
	saveSettings: jf
}, zp = class extends _d {
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
		return hd;
	}
	getVueProps() {
		return { bridge: Rp };
	}
}, Bp = { class: "customizer-workbench" }, Vp = {
	"aria-label": "Customizer targets",
	class: "customizer-workbench__body"
}, Hp = { class: "customizer-workbench__targets" }, Up = /* @__PURE__ */ ur({
	__name: "WorkbenchApp",
	setup(e) {
		let t = [
			"Actor sheets",
			"Item sheets",
			"Reusable dialogs"
		];
		return (e, n) => (K(), q("main", Bp, [n[1] ||= J("header", { class: "customizer-workbench__header" }, [J("p", null, "WFRP4e"), J("h1", null, "Customizer Workbench")], -1), J("section", Vp, [J("div", Hp, [(K(), q(W, null, V(t, (e) => J("button", {
			key: e,
			disabled: "",
			type: "button"
		}, A(e), 1)), 64))]), n[0] ||= J("div", { class: "customizer-workbench__empty" }, [J("strong", null, "Vue application shell mounted."), J("span", null, "The first customizer surface can land here.")], -1)])]));
	}
}), Wp = class extends _d {
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
		return Up;
	}
}, Gp = `${e}.debugShapeProbes`, Kp = "wfrp4eCustomizerShapeProbes", qp = "wfrp4eCustomizerShapePreset", Jp = 2, Yp = 12, Xp = 6, Zp = 60, Qp = { "npc-builder": [
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
function $p() {
	localStorage.removeItem(Gp), console.info(`${e} | Cleared debug shape probes.`);
}
function em() {
	return ym();
}
function tm(e, t = {}) {
	let n = nm(e, t);
	return um(n), n;
}
function nm(e, t = {}, n) {
	let r = om(t.maxDepth, Jp, Xp), i = om(t.maxEntries, Yp, Zp), a = Tm(e), o = {
		inspectedAt: (/* @__PURE__ */ new Date()).toISOString(),
		label: t.label || e,
		maxDepth: r,
		maxEntries: i,
		path: e,
		value: jm(a, {
			maxDepth: r,
			maxEntries: i,
			seen: /* @__PURE__ */ new WeakSet()
		})
	};
	return n && (o.hook = n), o;
}
function rm() {
	let t = ym();
	for (let e of ["init", "setup"]) {
		let n = t.filter((t) => t.hook === e);
		n.length && Hooks.once(e, () => {
			for (let t of n) cm(t, e);
		});
	}
	Hooks.once("ready", () => {
		let t = ym().filter((e) => (e.hook ?? "ready") === "ready");
		Sm() && console.info(`${e} | Debug shape ready probes discovered: ${t.length}`, window.location.href);
		for (let e of t) cm(e, "ready");
	});
}
function im(t) {
	let n = t.map(fm);
	localStorage.setItem(Gp, JSON.stringify(n)), console.info(`${e} | Stored ${n.length} debug shape probe(s). Reload Foundry to run init/setup probes.`);
}
function am(e, t, n) {
	if (t === "at") {
		let t = Number(n[0] ?? 0), r = Number.isFinite(t) ? t : 0;
		return Nm(e).at(r);
	}
	if (t === "findByName") {
		let t = dm(n[0] ?? "");
		return Nm(e).find((e) => dm(_m(e, "name")) === t);
	}
	if (t === "findByType") {
		let t = dm(n[0] ?? "");
		return Nm(e).find((e) => dm(_m(e, "type")) === t);
	}
	if (t === "get") {
		let t = n[0] ?? "";
		if (e instanceof Map) return e.get(t);
		let r = _m(e, "get");
		if (typeof r == "function") return r.call(e, t);
	}
	if (t === "sample") {
		let t = om(n[0], 3, Zp);
		return Nm(e).slice(0, t);
	}
	throw Error(`Unsupported path method "${t}".`);
}
function om(e, t, n) {
	let r = Number(e);
	return Number.isFinite(r) ? Math.max(0, Math.min(n, Math.floor(r))) : t;
}
function sm(e, t) {
	return Object.keys(e).sort().slice(0, t);
}
function cm(t, n) {
	try {
		um(nm(t.path, t, n));
	} catch (n) {
		console.warn(`${e} | Debug shape probe failed for "${t.path}".`, n);
	}
}
function lm(e) {
	return typeof e == "object" && !!e;
}
function um(t) {
	console.info(`${e} | Debug shape probe: ${t.label}`, JSON.stringify(t, null, 2));
}
function dm(e) {
	return typeof e == "string" ? e.trim().toLocaleLowerCase() : "";
}
function fm(e) {
	let t = {
		hook: e.hook ?? "ready",
		maxDepth: om(e.maxDepth, Jp, Xp),
		maxEntries: om(e.maxEntries, Yp, Zp),
		path: e.path.trim()
	};
	return e.label && (t.label = e.label), t;
}
function pm(e) {
	return e.trim() ? e.split(",").map((e) => hm(e.trim())).map(String) : [];
}
function mm(e) {
	let t = e.trim();
	return /^-?\d+$/.test(t) ? Number(t) : hm(t);
}
function hm(e) {
	let t = e.match(/^['"](?<value>.*)['"]$/);
	return t?.groups ? t.groups.value ?? "" : e;
}
function gm(e) {
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
				args: pm(e.groups.args ?? ""),
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
				index: mm(e),
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
function _m(e, t) {
	if (!(!lm(e) && typeof e != "function")) try {
		return e[t];
	} catch {
		return;
	}
}
function vm() {
	let e = wm(Gp);
	if (!e) return [];
	try {
		let t = JSON.parse(e);
		return Array.isArray(t) ? t.filter((e) => typeof e == "object" && !!e && typeof e.path == "string").map(fm) : [];
	} catch {
		return [];
	}
}
function ym() {
	return [...vm(), ...bm()].map(fm);
}
function bm() {
	let e = [], t = [new URLSearchParams(window.location.search), new URLSearchParams(window.location.hash.replace(/^#/, ""))];
	for (let n of t) {
		let t = n.get(qp), r = n.get(Kp);
		t && e.push(...Qp[t] ?? []), r && e.push(...xm(r));
	}
	return window.location.href.includes(`${qp}=npc-builder`) && !e.length && e.push(...Qp["npc-builder"] ?? []), e;
}
function xm(t) {
	try {
		let e = JSON.parse(decodeURIComponent(t));
		return Array.isArray(e) ? e.filter(Cm) : [];
	} catch (t) {
		return console.warn(`${e} | Could not parse URL shape probes.`, t), [];
	}
}
function Sm() {
	return window.location.href.includes(Kp) || window.location.href.includes(qp);
}
function Cm(e) {
	return typeof e == "object" && !!e && typeof e.path == "string";
}
function wm(e) {
	try {
		return localStorage.getItem(e);
	} catch {
		return null;
	}
}
function Tm(e) {
	let t = gm(e), n = _m(globalThis, t.root);
	for (let e of t.tokens) {
		if (e.type === "property") {
			n = _m(n, e.key);
			continue;
		}
		if (e.type === "index") {
			n = _m(n, String(e.index));
			continue;
		}
		n = am(n, e.name, e.args);
	}
	return n;
}
function Em(e, t) {
	return {
		length: e.length,
		sample: e.slice(0, t.maxEntries).map((e) => jm(e, Mm(t))),
		type: "array"
	};
}
function Dm(e, t) {
	return {
		sample: [...e.entries()].slice(0, t.maxEntries).map(([e, n]) => ({
			key: jm(e, Mm(t)),
			value: jm(n, Mm(t))
		})),
		size: e.size,
		type: "Map"
	};
}
function Om(e) {
	return {
		name: e.name,
		type: "function"
	};
}
function km(e, t) {
	if (t.seen.has(e)) return { type: "circular" };
	t.seen.add(e);
	let n = sm(e, t.maxEntries), r = {
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
		let n = _m(e, t);
		typeof n == "string" && (r[t] = n);
	}
	if (t.maxDepth <= 0) return r;
	let i = {};
	for (let r of n) i[r] = jm(_m(e, r), Mm(t));
	r.properties = i;
	let a = _m(e, "toObject");
	if (typeof a == "function") try {
		r.source = jm(a.call(e), Mm(t));
	} catch (e) {
		r.source = {
			error: e instanceof Error ? e.message : String(e),
			type: "error"
		};
	}
	return r;
}
function Am(e) {
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
function jm(e, t) {
	return !lm(e) && typeof e != "function" ? Am(e) : typeof e == "function" ? Om(e) : Array.isArray(e) ? Em(e, t) : e instanceof Map ? Dm(e, t) : km(e, t);
}
function Mm(e) {
	return {
		maxDepth: e.maxDepth - 1,
		maxEntries: e.maxEntries,
		seen: e.seen
	};
}
function Nm(e) {
	if (Array.isArray(e)) return e;
	let t = _m(e, "contents");
	return Array.isArray(t) ? t : [];
}
//#endregion
//#region src/module/create-module-api.ts
function Pm() {
	return {
		clearDebugShapeProbes: $p,
		getDebugShapeProbes: em,
		inspectPath: tm,
		openNpcBuilder: async () => {
			await new zp().render(!0);
		},
		openWorkbench: async () => {
			await new Wp().render(!0);
		},
		setDebugShapeProbes: im
	};
}
//#endregion
//#region src/module/register-module-menus.ts
function Fm() {
	game.settings.registerMenu(e, "workbench", {
		hint: "Open the WFRP4e Customizer Apps workbench.",
		icon: "fa-solid fa-screwdriver-wrench",
		label: "Open Workbench",
		name: "WFRP4e Customizer Apps",
		restricted: !0,
		type: Wp
	}), game.settings.registerMenu(e, "npc-builder", {
		hint: "Build a WFRP4e NPC from a base Actor and Career items.",
		icon: "fa-solid fa-user-plus",
		label: "Open NPC Builder",
		name: "WFRP4e NPC Builder",
		restricted: !0,
		type: zp
	});
}
//#endregion
//#region src/module/register-module-settings.ts
function Im() {
	kf();
}
//#endregion
//#region src/module/apps/npc-builder/register-actor-directory-button.ts
var Lm = "wfrp4e-customizer-open-npc-builder";
function Rm() {
	Hooks.on("renderActorDirectory", (e, t) => {
		let n = Vm(t);
		n && zm(n);
	});
}
function zm(e) {
	if (e.querySelector(`.${Lm}`)) return;
	let t = Bm(e);
	if (!t) {
		console.warn("wfrp4e-customizer-apps | Could not find Actor Directory button container.");
		return;
	}
	let n = document.createElement("button");
	n.classList.add(Lm), n.type = "button", n.innerHTML = "<i class=\"fa-solid fa-user-plus\" inert></i><span>NPC Builder App</span>", n.addEventListener("click", () => {
		new zp().render(!0);
	}), t.append(n);
}
function Bm(e) {
	return e.querySelector(".directory-header .header-actions") ?? e.querySelector(".directory-header .action-buttons") ?? e.querySelector(".header-actions") ?? e.querySelector(".action-buttons");
}
function Vm(e) {
	return e instanceof HTMLElement ? e : Hm(e) && e[0] instanceof HTMLElement ? e[0] : null;
}
function Hm(e) {
	return typeof e == "object" && !!e && "length" in e;
}
rm(), Hooks.once("init", () => {
	console.info(`${e} | Initializing`), Im(), Fm(), Rm();
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
	n.api = Pm(), $d(), gf(), console.info(`${e} | Ready`);
});
//#endregion
