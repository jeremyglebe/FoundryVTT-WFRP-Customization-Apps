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
}, ee = /-\w/g, k = O((e) => e.replace(ee, (e) => e.slice(1).toUpperCase())), te = /\B([A-Z])/g, ne = O((e) => e.replace(te, "-$1").toLowerCase()), re = O((e) => e.charAt(0).toUpperCase() + e.slice(1)), ie = O((e) => e ? `on${re(e)}` : ""), A = (e, t) => !Object.is(e, t), ae = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, oe = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, se = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, ce = (e) => {
	let t = v(e) ? Number(e) : NaN;
	return isNaN(t) ? e : t;
}, le, ue = () => le ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function de(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = v(r) ? he(r) : de(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	} else if (v(e) || b(e)) return e;
}
var fe = /;(?![^(]*\))/g, pe = /:([^]+)/, me = /\/\*[^]*?\*\//g;
function he(e) {
	let t = {};
	return e.replace(me, "").split(fe).forEach((e) => {
		if (e) {
			let n = e.split(pe);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function j(e) {
	let t = "";
	if (v(e)) t = e;
	else if (p(e)) for (let n = 0; n < e.length; n++) {
		let r = j(e[n]);
		r && (t += r + " ");
	}
	else if (b(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var ge = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", _e = /* @__PURE__ */ n(ge);
ge + "";
function ve(e) {
	return !!e || e === "";
}
function ye(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = be(e[r], t[r]);
	return n;
}
function be(e, t) {
	if (e === t) return !0;
	let n = g(e), r = g(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = y(e), r = y(t), n || r) return e === t;
	if (n = p(e), r = p(t), n || r) return n && r ? ye(e, t) : !1;
	if (n = b(e), r = b(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !be(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
function xe(e, t) {
	return e.findIndex((e) => be(e, t));
}
var Se = (e) => !!(e && e.__v_isRef === !0), M = (e) => v(e) ? e : e == null ? "" : p(e) || b(e) && (e.toString === S || !_(e.toString)) ? Se(e) ? M(e.value) : JSON.stringify(e, Ce, 2) : String(e), Ce = (e, t) => Se(t) ? Ce(e, t.value) : m(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[we(t, r) + " =>"] = n, e), {}) } : h(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => we(e)) } : y(t) ? we(t) : b(t) && !p(t) && !T(t) ? String(t) : t, we = (e, t = "") => y(e) ? `Symbol(${e.description ?? t})` : e, N, Te = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && N && (N.active ? (this.parent = N, this.index = (N.scopes ||= []).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
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
			let t = N;
			try {
				return N = this, e();
			} finally {
				N = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = N, N = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (N === this) N = this.prevScope;
			else {
				let e = N;
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
function Ee(e) {
	return new Te(e);
}
function De() {
	return N;
}
function Oe(e, t = !1) {
	N && N.cleanups.push(e);
}
var P, ke = /* @__PURE__ */ new WeakSet(), Ae = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, N && (N.active ? N.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, ke.has(this) && (ke.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Pe(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, qe(this), Le(this);
		let e = P, t = Ue;
		P = this, Ue = !0;
		try {
			return this.fn();
		} finally {
			Re(this), P = e, Ue = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Ve(e);
			this.deps = this.depsTail = void 0, qe(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? ke.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		ze(this) && this.run();
	}
	get dirty() {
		return ze(this);
	}
}, je = 0, Me, Ne;
function Pe(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Ne, Ne = e;
		return;
	}
	e.next = Me, Me = e;
}
function Fe() {
	je++;
}
function Ie() {
	if (--je > 0) return;
	if (Ne) {
		let e = Ne;
		for (Ne = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Me;) {
		let t = Me;
		for (Me = void 0; t;) {
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
function Le(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Re(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Ve(r), He(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function ze(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Be(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Be(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Je) || (e.globalVersion = Je, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ze(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = P, r = Ue;
	P = e, Ue = !0;
	try {
		Le(e);
		let n = e.fn(e._value);
		(t.version === 0 || A(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		P = n, Ue = r, Re(e), e.flags &= -3;
	}
}
function Ve(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Ve(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function He(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var Ue = !0, We = [];
function Ge() {
	We.push(Ue), Ue = !1;
}
function Ke() {
	let e = We.pop();
	Ue = e === void 0 ? !0 : e;
}
function qe(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = P;
		P = void 0;
		try {
			t();
		} finally {
			P = e;
		}
	}
}
var Je = 0, Ye = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, Xe = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!P || !Ue || P === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== P) t = this.activeLink = new Ye(P, this), P.deps ? (t.prevDep = P.depsTail, P.depsTail.nextDep = t, P.depsTail = t) : P.deps = P.depsTail = t, Ze(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = P.depsTail, t.nextDep = void 0, P.depsTail.nextDep = t, P.depsTail = t, P.deps === t && (P.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, Je++, this.notify(e);
	}
	notify(e) {
		Fe();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Ie();
		}
	}
};
function Ze(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) Ze(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var Qe = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ Symbol(""), et = /* @__PURE__ */ Symbol(""), tt = /* @__PURE__ */ Symbol("");
function F(e, t, n) {
	if (Ue && P) {
		let t = Qe.get(e);
		t || Qe.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new Xe()), r.map = t, r.key = n), r.track();
	}
}
function nt(e, t, n, r, i, a) {
	let o = Qe.get(e);
	if (!o) {
		Je++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Fe(), t === "clear") o.forEach(s);
	else {
		let i = p(e), a = i && E(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === tt || !y(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(tt)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get($e)), m(e) && s(o.get(et)));
				break;
			case "delete":
				i || (s(o.get($e)), m(e) && s(o.get(et)));
				break;
			case "set":
				m(e) && s(o.get($e));
				break;
		}
	}
	Ie();
}
function rt(e, t) {
	let n = Qe.get(e);
	return n && n.get(t);
}
function it(e) {
	let t = /* @__PURE__ */ I(e);
	return t === e ? t : (F(t, "iterate", tt), /* @__PURE__ */ Wt(e) ? t : t.map(qt));
}
function at(e) {
	return F(e = /* @__PURE__ */ I(e), "iterate", tt), e;
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
	F(r, "iterate", tt);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Gt(n[0]) ? (n[0] = /* @__PURE__ */ I(n[0]), r[t](...n)) : i;
}
function pt(e, t, n = []) {
	Ge(), Fe();
	let r = (/* @__PURE__ */ I(e))[t].apply(e, n);
	return Ie(), Ke(), r;
}
var mt = /* @__PURE__ */ n("__proto__,__v_isRef,__isVue"), ht = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(y));
function gt(e) {
	y(e) || (e = String(e));
	let t = /* @__PURE__ */ I(this);
	return F(t, "has", e), t.hasOwnProperty(e);
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
		if ((y(t) ? ht.has(t) : mt(t)) || (r || F(e, "get", t), i)) return o;
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
		return (!y(t) || !ht.has(t)) && F(e, "has", t), n;
	}
	ownKeys(e) {
		return F(e, "iterate", p(e) ? "length" : $e), Reflect.ownKeys(e);
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
		return !t && F(a, "iterate", c ? et : $e), l(Object.create(u), { next() {
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
			e || (A(n, a) && F(i, "get", n), F(i, "get", a));
			let { has: o } = wt(i), s = t ? Ct : e ? Jt : qt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && F(/* @__PURE__ */ I(t), "iterate", $e), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ I(n), i = /* @__PURE__ */ I(t);
			return e || (A(t, i) && F(r, "has", t), F(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ I(a), s = t ? Ct : e ? Jt : qt;
			return !e && F(o, "iterate", $e), a.forEach((e, t) => n.call(r, s(e), s(t), i));
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
	return !f(e, "__v_skip") && Object.isExtensible(e) && oe(e, "__v_skip", !0), e;
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
		this.dep = new Xe(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ I(e), this._value = t ? e : qt(e), this.__v_isShallow = t;
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
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new Xe(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Je - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && P !== this) return Pe(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Be(this), e && (e.version = this.dep.version), this._value;
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
			Ge();
			try {
				g();
			} finally {
				Ke();
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
	let x = De(), S = () => {
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
	return l && l(w), m = new Ae(h), m.scheduler = c ? () => c(w, !1) : w, v = (e) => un(e, !1, m), g = m.onStop = () => {
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
			Ge(), pn(o, null, 10, [
				e,
				i,
				a
			]), Ke();
			return;
		}
	}
	gn(e, n, a, i, s);
}
function gn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var B = [], _n = -1, vn = [], yn = null, bn = 0, xn = /* @__PURE__ */ Promise.resolve(), Sn = null;
function Cn(e) {
	let t = Sn || xn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function wn(e) {
	let t = _n + 1, n = B.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = B[r], a = An(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Tn(e) {
	if (!(e.flags & 1)) {
		let t = An(e), n = B[B.length - 1];
		!n || !(e.flags & 2) && t >= An(n) ? B.push(e) : B.splice(wn(t), 0, e), e.flags |= 1, En();
	}
}
function En() {
	Sn ||= xn.then(jn);
}
function Dn(e) {
	p(e) ? vn.push(...e) : yn && e.id === -1 ? yn.splice(bn + 1, 0, e) : e.flags & 1 || (vn.push(e), e.flags |= 1), En();
}
function On(e, t, n = _n + 1) {
	for (; n < B.length; n++) {
		let t = B[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			B.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function kn(e) {
	if (vn.length) {
		let e = [...new Set(vn)].sort((e, t) => An(e) - An(t));
		if (vn.length = 0, yn) {
			yn.push(...e);
			return;
		}
		for (yn = e, bn = 0; bn < yn.length; bn++) {
			let e = yn[bn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		yn = null, bn = 0;
	}
}
var An = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function jn(e) {
	try {
		for (_n = 0; _n < B.length; _n++) {
			let e = B[_n];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), pn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; _n < B.length; _n++) {
			let e = B[_n];
			e && (e.flags &= -2);
		}
		_n = -1, B.length = 0, kn(e), Sn = null, (B.length || vn.length) && jn(e);
	}
}
var V = null, Mn = null;
function Nn(e) {
	let t = V;
	return V = e, Mn = e && e.type.__scopeId || null, t;
}
function Pn(e, t = V, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && ta(-1);
		let i = Nn(t), a;
		try {
			a = e(...n);
		} finally {
			Nn(i), r._d && ta(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function H(e, t) {
	if (V === null) return e;
	let n = Fa(V), i = e.dirs ||= [];
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
function Fn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (Ge(), mn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Ke());
	}
}
function In(e, t) {
	if (Z) {
		let n = Z.provides, r = Z.parent && Z.parent.provides;
		r === n && (n = Z.provides = Object.create(r)), n[e] = t;
	}
}
function Ln(e, t, n = !1) {
	let r = ba();
	if (r || ii) {
		let i = ii ? ii._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && _(t) ? t.call(r && r.proxy) : t;
	}
}
function Rn() {
	return !!(ba() || ii);
}
var zn = /* @__PURE__ */ Symbol.for("v-scx"), Bn = () => Ln(zn);
function Vn(e, t, n) {
	return Hn(e, t, n);
}
function Hn(e, t, n = r) {
	let { immediate: i, deep: o, flush: s, once: c } = n, u = l({}, n), d = t && i || !t && s !== "post", f;
	if (Ea) {
		if (s === "sync") {
			let e = Bn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = a, e.resume = a, e.pause = a, e;
		}
	}
	let p = Z;
	u.call = (e, t, n) => mn(e, p, t, n);
	let m = !1;
	s === "post" ? u.scheduler = (e) => {
		Ii(e, p && p.suspense);
	} : s !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : Tn(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = dn(e, t, u);
	return Ea && (f ? f.push(h) : d && h()), h;
}
function Un(e, t, n) {
	let r = this.proxy, i = v(e) ? e.includes(".") ? Wn(r, e) : () => r[e] : e.bind(r, r), a;
	_(t) ? a = t : (a = t.handler, n = t);
	let o = Ca(this), s = Hn(i, a.bind(r), n);
	return o(), s;
}
function Wn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Gn = /* @__PURE__ */ Symbol("_vte"), Kn = (e) => e.__isTeleport, qn = /* @__PURE__ */ Symbol("_leaveCb"), Jn = /* @__PURE__ */ Symbol("_enterCb");
function Yn() {
	let e = {
		isMounted: !1,
		isLeaving: !1,
		isUnmounting: !1,
		leavingVNodes: /* @__PURE__ */ new Map()
	};
	return Cr(() => {
		e.isMounted = !0;
	}), Er(() => {
		e.isUnmounting = !0;
	}), e;
}
var Xn = [Function, Array], Zn = {
	mode: String,
	appear: Boolean,
	persisted: Boolean,
	onBeforeEnter: Xn,
	onEnter: Xn,
	onAfterEnter: Xn,
	onEnterCancelled: Xn,
	onBeforeLeave: Xn,
	onLeave: Xn,
	onAfterLeave: Xn,
	onLeaveCancelled: Xn,
	onBeforeAppear: Xn,
	onAppear: Xn,
	onAfterAppear: Xn,
	onAppearCancelled: Xn
}, Qn = (e) => {
	let t = e.subTree;
	return t.component ? Qn(t.component) : t;
}, $n = {
	name: "BaseTransition",
	props: Zn,
	setup(e, { slots: t }) {
		let n = ba(), r = Yn();
		return () => {
			let i = t.default && sr(t.default(), !0), a = i && i.length ? er(i) : n.subTree ? X() : void 0;
			if (!a) return;
			let o = /* @__PURE__ */ I(e), { mode: s } = o;
			if (r.isLeaving) return ir(a);
			let c = ar(a);
			if (!c) return ir(a);
			let l = rr(c, o, r, n, (e) => l = e);
			c.type !== G && or(c, l);
			let u = n.subTree && ar(n.subTree);
			if (u && u.type !== G && !aa(u, c) && Qn(n).type !== G) {
				let e = rr(u, o, r, n);
				if (or(u, e), s === "out-in" && c.type !== G) return r.isLeaving = !0, e.afterLeave = () => {
					r.isLeaving = !1, n.job.flags & 8 || n.update(), delete e.afterLeave, u = void 0;
				}, ir(a);
				s === "in-out" && c.type !== G ? e.delayLeave = (e, t, n) => {
					let i = nr(r, u);
					i[String(u.key)] = u, e[qn] = () => {
						t(), e[qn] = void 0, delete l.delayedLeave, u = void 0;
					}, l.delayedLeave = () => {
						n(), delete l.delayedLeave, u = void 0;
					};
				} : u = void 0;
			} else u &&= void 0;
			return a;
		};
	}
};
function er(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== G) {
			t = n;
			break;
		}
	}
	return t;
}
var tr = $n;
function nr(e, t) {
	let { leavingVNodes: n } = e, r = n.get(t.type);
	return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function rr(e, t, n, r, i) {
	let { appear: a, mode: o, persisted: s = !1, onBeforeEnter: c, onEnter: l, onAfterEnter: u, onEnterCancelled: d, onBeforeLeave: f, onLeave: m, onAfterLeave: h, onLeaveCancelled: g, onBeforeAppear: _, onAppear: v, onAfterAppear: y, onAppearCancelled: b } = t, x = String(e.key), S = nr(n, e), C = (e, t) => {
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
			t[qn] && t[qn](!0);
			let i = S[x];
			i && aa(e, i) && i.el[qn] && i.el[qn](), C(r, [t]);
		},
		enter(t) {
			if (S[x] === e) return;
			let r = l, i = u, o = d;
			if (!n.isMounted) if (a) r = v || l, i = y || u, o = b || d;
			else return;
			let s = !1;
			t[Jn] = (e) => {
				s || (s = !0, C(e ? o : i, [t]), T.delayedLeave && T.delayedLeave(), t[Jn] = void 0);
			};
			let c = t[Jn].bind(null, !1);
			r ? w(r, [t, c]) : c();
		},
		leave(t, r) {
			let i = String(e.key);
			if (t[Jn] && t[Jn](!0), n.isUnmounting) return r();
			C(f, [t]);
			let a = !1;
			t[qn] = (n) => {
				a || (a = !0, r(), C(n ? g : h, [t]), t[qn] = void 0, S[i] === e && delete S[i]);
			};
			let o = t[qn].bind(null, !1);
			S[i] = e, m ? w(m, [t, o]) : o();
		},
		clone(e) {
			let a = rr(e, t, n, r, i);
			return i && i(a), a;
		}
	};
	return T;
}
function ir(e) {
	if (hr(e)) return e = ua(e), e.children = null, e;
}
function ar(e) {
	if (!hr(e)) return Kn(e.type) && e.children ? er(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && _(n.default)) return n.default();
	}
}
function or(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, or(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function sr(e, t = !1, n) {
	let r = [], i = 0;
	for (let a = 0; a < e.length; a++) {
		let o = e[a], s = n == null ? o.key : String(n) + String(o.key == null ? a : o.key);
		o.type === W ? (o.patchFlag & 128 && i++, r = r.concat(sr(o.children, t, s))) : (t || o.type !== G) && r.push(s == null ? o : ua(o, { key: s }));
	}
	if (i > 1) for (let e = 0; e < r.length; e++) r[e].patchFlag = -2;
	return r;
}
/* @__NO_SIDE_EFFECTS__ */
function cr(e, t) {
	return _(e) ? /* @__PURE__ */ l({ name: e.name }, t, { setup: e }) : e;
}
function lr(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function ur(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var dr = /* @__PURE__ */ new WeakMap();
function fr(e, t, n, i, a = !1) {
	if (p(e)) {
		e.forEach((e, r) => fr(e, t && (p(t) ? t[r] : t), n, i, a));
		return;
	}
	if (mr(i) && !a) {
		i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && fr(e, t, n, i.component.subTree);
		return;
	}
	let s = i.shapeFlag & 4 ? Fa(i.component) : i.el, c = a ? null : s, { i: l, r: d } = e, m = t && t.r, h = l.refs === r ? l.refs = {} : l.refs, g = l.setupState, y = /* @__PURE__ */ I(g), b = g === r ? o : (e) => ur(h, e) ? !1 : f(y, e), x = (e, t) => !(t && ur(h, t));
	if (m != null && m !== d) {
		if (pr(t), v(m)) h[m] = null, b(m) && (g[m] = null);
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
					i(), dr.delete(e);
				};
				t.id = -1, dr.set(e, t), Ii(t, n);
			} else pr(e), i();
		}
	}
}
function pr(e) {
	let t = dr.get(e);
	t && (t.flags |= 8, dr.delete(e));
}
ue().requestIdleCallback, ue().cancelIdleCallback;
var mr = (e) => !!e.type.__asyncLoader, hr = (e) => e.type.__isKeepAlive;
function gr(e, t) {
	vr(e, "a", t);
}
function _r(e, t) {
	vr(e, "da", t);
}
function vr(e, t, n = Z) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (br(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) hr(e.parent.vnode) && yr(r, t, n, e), e = e.parent;
	}
}
function yr(e, t, n, r) {
	let i = br(t, e, r, !0);
	Dr(() => {
		u(r[t], i);
	}, n);
}
function br(e, t, n = Z, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Ge();
			let i = Ca(n), a = mn(t, n, e, r);
			return i(), Ke(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var xr = (e) => (t, n = Z) => {
	(!Ea || e === "sp") && br(e, (...e) => t(...e), n);
}, Sr = xr("bm"), Cr = xr("m"), wr = xr("bu"), Tr = xr("u"), Er = xr("bum"), Dr = xr("um"), Or = xr("sp"), kr = xr("rtg"), Ar = xr("rtc");
function jr(e, t = Z) {
	br("ec", e, t);
}
var Mr = /* @__PURE__ */ Symbol.for("v-ndc");
function U(e, t, n, r) {
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
function Nr(e, t, n = {}, r, i) {
	if (V.ce || V.parent && mr(V.parent) && V.parent.ce) {
		let e = Object.keys(n).length > 0;
		return t !== "default" && (n.name = t), K(), ra(W, null, [Y("slot", n, r && r())], e ? -2 : 64);
	}
	let a = e[t];
	a && a._c && (a._d = !1), K();
	let o = a && Pr(a(n)), s = n.key || o && o.key, c = ra(W, { key: (s && !y(s) ? s : `_${t}`) + (!o && r ? "_fb" : "") }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), a && a._c && (a._d = !0), c;
}
function Pr(e) {
	return e.some((e) => ia(e) ? !(e.type === G || e.type === W && !Pr(e.children)) : !0) ? e : null;
}
var Fr = (e) => e ? Ta(e) ? Fa(e) : Fr(e.parent) : null, Ir = /* @__PURE__ */ l(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Fr(e.parent),
	$root: (e) => Fr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Gr(e),
	$forceUpdate: (e) => e.f ||= () => {
		Tn(e.update);
	},
	$nextTick: (e) => e.n ||= Cn.bind(e.proxy),
	$watch: (e) => Un.bind(e)
}), Lr = (e, t) => e !== r && !e.__isScriptSetup && f(e, t), Rr = {
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
			else if (Lr(i, t)) return s[t] = 1, i[t];
			else if (a !== r && f(a, t)) return s[t] = 2, a[t];
			else if (f(o, t)) return s[t] = 3, o[t];
			else if (n !== r && f(n, t)) return s[t] = 4, n[t];
			else Br && (s[t] = 0);
		}
		let u = Ir[t], d, p;
		if (u) return t === "$attrs" && F(e.attrs, "get", ""), u(e);
		if ((d = c.__cssModules) && (d = d[t])) return d;
		if (n !== r && f(n, t)) return s[t] = 4, n[t];
		if (p = l.config.globalProperties, f(p, t)) return p[t];
	},
	set({ _: e }, t, n) {
		let { data: i, setupState: a, ctx: o } = e;
		return Lr(a, t) ? (a[t] = n, !0) : i !== r && f(i, t) ? (i[t] = n, !0) : f(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(n[c] || e !== r && c[0] !== "$" && f(e, c) || Lr(t, c) || f(o, c) || f(i, c) || f(Ir, c) || f(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? f(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function zr(e) {
	return p(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Br = !0;
function Vr(e) {
	let t = Gr(e), n = e.proxy, r = e.ctx;
	Br = !1, t.beforeCreate && Ur(t.beforeCreate, e, "bc");
	let { data: i, computed: o, methods: s, watch: c, provide: l, inject: u, created: d, beforeMount: f, mounted: m, beforeUpdate: h, updated: g, activated: v, deactivated: y, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: w, render: T, renderTracked: E, renderTriggered: D, errorCaptured: O, serverPrefetch: ee, expose: k, inheritAttrs: te, components: ne, directives: re, filters: ie } = t;
	if (u && Hr(u, r, null), s) for (let e in s) {
		let t = s[e];
		_(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		b(t) && (e.data = /* @__PURE__ */ Rt(t));
	}
	if (Br = !0, o) for (let e in o) {
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
	if (c) for (let e in c) Wr(c[e], r, n, e);
	if (l) {
		let e = _(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			In(t, e[t]);
		});
	}
	d && Ur(d, e, "c");
	function A(e, t) {
		p(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (A(Sr, f), A(Cr, m), A(wr, h), A(Tr, g), A(gr, v), A(_r, y), A(jr, O), A(Ar, E), A(kr, D), A(Er, S), A(Dr, w), A(Or, ee), p(k)) if (k.length) {
		let t = e.exposed ||= {};
		k.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	T && e.render === a && (e.render = T), te != null && (e.inheritAttrs = te), ne && (e.components = ne), re && (e.directives = re), ee && lr(e);
}
function Hr(e, t, n = a) {
	p(e) && (e = Xr(e));
	for (let n in e) {
		let r = e[n], i;
		i = b(r) ? "default" in r ? Ln(r.from || n, r.default, !0) : Ln(r.from || n) : Ln(r), /* @__PURE__ */ L(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Ur(e, t, n) {
	mn(p(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Wr(e, t, n, r) {
	let i = r.includes(".") ? Wn(n, r) : () => n[r];
	if (v(e)) {
		let n = t[e];
		_(n) && Vn(i, n);
	} else if (_(e)) Vn(i, e.bind(n));
	else if (b(e)) if (p(e)) e.forEach((e) => Wr(e, t, n, r));
	else {
		let r = _(e.handler) ? e.handler.bind(n) : t[e.handler];
		_(r) && Vn(i, r, e);
	}
}
function Gr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Kr(c, e, o, !0)), Kr(c, t, o)), b(t) && a.set(t, c), c;
}
function Kr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Kr(e, a, n, !0), i && i.forEach((t) => Kr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = qr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var qr = {
	data: Jr,
	props: $r,
	emits: $r,
	methods: Qr,
	computed: Qr,
	beforeCreate: Zr,
	created: Zr,
	beforeMount: Zr,
	mounted: Zr,
	beforeUpdate: Zr,
	updated: Zr,
	beforeDestroy: Zr,
	beforeUnmount: Zr,
	destroyed: Zr,
	unmounted: Zr,
	activated: Zr,
	deactivated: Zr,
	errorCaptured: Zr,
	serverPrefetch: Zr,
	components: Qr,
	directives: Qr,
	watch: ei,
	provide: Jr,
	inject: Yr
};
function Jr(e, t) {
	return t ? e ? function() {
		return l(_(e) ? e.call(this, this) : e, _(t) ? t.call(this, this) : t);
	} : t : e;
}
function Yr(e, t) {
	return Qr(Xr(e), Xr(t));
}
function Xr(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function Zr(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Qr(e, t) {
	return e ? l(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function $r(e, t) {
	return e ? p(e) && p(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : l(/* @__PURE__ */ Object.create(null), zr(e), zr(t ?? {})) : t;
}
function ei(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = l(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = Zr(e[r], t[r]);
	return n;
}
function ti() {
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
var ni = 0;
function ri(e, t) {
	return function(n, r = null) {
		_(n) || (n = l({}, n)), r != null && !b(r) && (r = null);
		let i = ti(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: ni++,
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
				s && (mn(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = ii;
				ii = c;
				try {
					return e();
				} finally {
					ii = t;
				}
			}
		};
		return c;
	};
}
var ii = null, ai = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${k(t)}Modifiers`] || e[`${ne(t)}Modifiers`];
function oi(e, t, ...n) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || r, a = n, o = t.startsWith("update:"), s = o && ai(i, t.slice(7));
	s && (s.trim && (a = n.map((e) => v(e) ? e.trim() : e)), s.number && (a = n.map(se)));
	let c, l = i[c = ie(t)] || i[c = ie(k(t))];
	!l && o && (l = i[c = ie(ne(t))]), l && mn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, mn(u, e, 6, a);
	}
}
var si = /* @__PURE__ */ new WeakMap();
function ci(e, t, n = !1) {
	let r = n ? si : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!_(e)) {
		let r = (e) => {
			let n = ci(e, t, !0);
			n && (s = !0, l(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (b(e) && r.set(e, null), null) : (p(a) ? a.forEach((e) => o[e] = null) : l(o, a), b(e) && r.set(e, o), o);
}
function li(e, t) {
	return !e || !s(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), f(e, t[0].toLowerCase() + t.slice(1)) || f(e, ne(t)) || f(e, t));
}
function di(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Nn(e), v, y;
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
			}) : e(f, null)), y = t.props ? s : fi(s);
		}
	} catch (t) {
		Zi.length = 0, hn(t, e, 1), v = Y(G);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(c) && (y = pi(y, a)), b = ua(b, y, !1, !0));
	}
	return n.dirs && (b = ua(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && or(b, n.transition), v = b, Nn(_), v;
}
var fi = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || s(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, pi = (e, t) => {
	let n = {};
	for (let r in e) (!c(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function mi(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? hi(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (gi(o, r, n) && !li(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? hi(r, o, l) : !0 : !!o;
	return !1;
}
function hi(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (gi(t, e, a) && !li(n, a)) return !0;
	}
	return !1;
}
function gi(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && b(r) && b(i) ? !be(r, i) : r !== i;
}
function _i({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var vi = {}, yi = () => Object.create(vi), bi = (e) => Object.getPrototypeOf(e) === vi;
function xi(e, t, n, r = !1) {
	let i = {}, a = yi();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), Ci(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ zt(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function Si(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ I(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (li(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (f(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = k(o);
					i[t] = wi(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		Ci(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !f(t, a) && ((r = ne(a)) === a || !f(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = wi(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !f(t, e)) && (delete a[e], l = !0);
	}
	l && nt(e.attrs, "set", "");
}
function Ci(e, t, n, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (t) for (let r in t) {
		if (D(r)) continue;
		let l = t[r], u;
		a && f(a, u = k(r)) ? !o || !o.includes(u) ? n[u] = l : (c ||= {})[u] = l : li(e.emitsOptions, r) || (!(r in i) || l !== i[r]) && (i[r] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ I(n), i = c || r;
		for (let r = 0; r < o.length; r++) {
			let s = o[r];
			n[s] = wi(a, t, s, i[s], e, !f(i, s));
		}
	}
	return s;
}
function wi(e, t, n, r, i, a) {
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
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === ne(n)) && (r = !0));
	}
	return r;
}
var Ti = /* @__PURE__ */ new WeakMap();
function Ei(e, t, n = !1) {
	let a = n ? Ti : t.propsCache, o = a.get(e);
	if (o) return o;
	let s = e.props, c = {}, u = [], d = !1;
	if (!_(e)) {
		let r = (e) => {
			d = !0;
			let [n, r] = Ei(e, t, !0);
			l(c, n), r && u.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!s && !d) return b(e) && a.set(e, i), i;
	if (p(s)) for (let e = 0; e < s.length; e++) {
		let t = k(s[e]);
		Di(t) && (c[t] = r);
	}
	else if (s) for (let e in s) {
		let t = k(e);
		if (Di(t)) {
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
function Di(e) {
	return e[0] !== "$" && !D(e);
}
var Oi = (e) => e === "_" || e === "_ctx" || e === "$stable", ki = (e) => p(e) ? e.map(fa) : [fa(e)], Ai = (e, t, n) => {
	if (t._n) return t;
	let r = Pn((...e) => ki(t(...e)), n);
	return r._c = !1, r;
}, ji = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Oi(n)) continue;
		let i = e[n];
		if (_(i)) t[n] = Ai(n, i, r);
		else if (i != null) {
			let e = ki(i);
			t[n] = () => e;
		}
	}
}, Mi = (e, t) => {
	let n = ki(t);
	e.slots.default = () => n;
}, Ni = (e, t, n) => {
	for (let r in t) (n || !Oi(r)) && (e[r] = t[r]);
}, Pi = (e, t, n) => {
	let r = e.slots = yi();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Ni(r, t, n), n && oe(r, "_", e, !0)) : ji(t, r);
	} else t && Mi(e, t);
}, Fi = (e, t, n) => {
	let { vnode: i, slots: a } = e, o = !0, s = r;
	if (i.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? o = !1 : Ni(a, t, n) : (o = !t.$stable, ji(t, a)), s = t;
	} else t && (Mi(e, t), s = { default: 1 });
	if (o) for (let e in a) !Oi(e) && s[e] == null && delete a[e];
}, Ii = Ji;
function Li(e) {
	return Ri(e);
}
function Ri(e, t) {
	let n = ue();
	n.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = a, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !aa(e, t) && (r = _e(e), pe(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
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
				ne(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? re(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, be);
		}
		u != null && i ? fr(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && fr(e.ref, null, a, e, !0);
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
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && O(e.children, d, null, r, i, zi(e, a), s, u), _ && Fn(e, null, r, "created"), E(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !D(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && ga(f, r, e);
		}
		_ && Fn(e, null, r, "beforeMount");
		let v = Vi(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Ii(() => {
			try {
				f && ga(f, r, e), v && g.enter(d), _ && Fn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, E = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || qi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				E(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, O = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? pa(e[l]) : fa(e[l]), t, n, r, i, a, o, s);
	}, ee = (e, t, n, i, a, o, s) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || r, h = t.props || r, g;
		if (n && Bi(n, !1), (g = h.onVnodeBeforeUpdate) && ga(g, n, t, e), f && Fn(t, e, n, "beforeUpdate"), n && Bi(n, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? k(e.dynamicChildren, d, l, n, i, zi(t, a), o) : s || ce(e, t, l, null, n, i, zi(t, a), o, !1), u > 0) {
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
		((g = h.onVnodeUpdated) || f) && Ii(() => {
			g && ga(g, n, t, e), f && Fn(t, e, n, "updated");
		}, i);
	}, k = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === W || !aa(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
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
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), O(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (k(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Hi(e, t, !0)) : ce(e, t, n, f, i, a, s, c, l);
	}, re = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ie(t, n, r, i, a, o, c) : A(e, t, c);
	}, ie = (e, t, n, r, i, a, o) => {
		let s = e.component = ya(e, r, i);
		if (hr(e) && (s.ctx.renderer = be), Da(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, oe, o), !e.el) {
				let r = s.subTree = Y(G);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else oe(s, e, t, n, i, a, o);
	}, A = (e, t, n) => {
		let r = t.component = e.component;
		if (mi(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			se(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, oe = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Wi(e);
					if (n) {
						t && (t.el = c.el, se(e, t, o)), n.asyncDep.then(() => {
							Ii(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Bi(e, !1), t ? (t.el = c.el, se(e, t, o)) : t = c, n && ae(n), (d = t.props && t.props.onVnodeBeforeUpdate) && ga(d, s, t, c), Bi(e, !0);
				let f = di(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), _e(p), e, i, a), t.el = f.el, u === null && _i(e, f.el), r && Ii(r, i), (d = t.props && t.props.onVnodeUpdated) && Ii(() => ga(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = mr(t);
				if (Bi(e, !1), l && ae(l), !m && (o = c && c.onVnodeBeforeMount) && ga(o, d, t), Bi(e, !0), s && Se) {
					let t = () => {
						e.subTree = di(e), Se(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = di(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Ii(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Ii(() => ga(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && mr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Ii(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ae(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Tn(u), Bi(e, !0), l();
	}, se = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Si(e, t.props, r, n), Fi(e, t.children, n), Ge(), On(e), Ke();
	}, ce = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				de(l, d, n, r, i, a, o, s, c);
				return;
			} else if (f & 256) {
				le(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && ge(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? de(l, d, n, r, i, a, o, s, c) : ge(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && O(d, n, r, i, a, o, s, c));
	}, le = (e, t, n, r, a, o, s, c, l) => {
		e ||= i, t ||= i;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let r = t[p] = l ? pa(t[p]) : fa(t[p]);
			v(e[p], r, n, null, a, o, s, c, l);
		}
		u > d ? ge(e, a, o, !0, !1, f) : O(t, n, r, a, o, s, c, l, f);
	}, de = (e, t, n, r, a, o, s, c, l) => {
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
		} else if (u > p) for (; u <= f;) pe(e[u], a, o, !0), u++;
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
					pe(r, a, o, !0);
					continue;
				}
				let i;
				if (r.key != null) i = g.get(r.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && aa(r, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? pe(r, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(r, t[i], n, null, a, o, s, c, l), y++);
			}
			let w = x ? Ui(C) : i;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, i = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Ki(f) : r;
				C[u] === 0 ? v(null, i, n, p, a, o, s, c, l) : x && (_ < 0 || u !== w[_] ? fe(i, n, p, 2) : _--);
			}
		}
	}, fe = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			fe(e.component.subTree, t, n, r);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, r);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, be);
			return;
		}
		if (c === W) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) fe(u[e], t, n, r);
			o(e.anchor, t, n);
			return;
		}
		if (c === Xi) {
			S(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) if (r === 0) l.beforeEnter(a), o(a, t, n), Ii(() => l.enter(a), i);
		else {
			let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? s(a) : o(a, t, n);
			}, d = () => {
				a._isLeaving && a[qn](!0), r(a, () => {
					u(), c && c();
				});
			};
			i ? i(a, u, d) : d();
		}
		else o(a, t, n);
	}, pe = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (Ge(), fr(s, null, n, e, !0), Ke()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !mr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && ga(_, t, e), u & 6) j(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Fn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, be, r) : l && !l.hasOnce && (a !== W || d > 0 && d & 64) ? ge(l, t, n, !1, !0) : (a === W && d & 384 || !i && u & 16) && ge(c, t, n), r && me(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Ii(() => {
			_ && ga(_, t, e), h && Fn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, me = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === W) {
			he(n, r);
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
	}, he = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, j = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Gi(c), Gi(l), r && ae(r), i.stop(), a && (a.flags |= 8, pe(o, e, t, n)), s && Ii(s, t), Ii(() => {
			e.isUnmounted = !0;
		}, t);
	}, ge = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) pe(e[o], t, n, r, i);
	}, _e = (e) => {
		if (e.shapeFlag & 6) return _e(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Gn];
		return n ? h(n) : t;
	}, ve = !1, ye = (e, t, n) => {
		let r;
		e == null ? t._vnode && (pe(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, ve ||= (ve = !0, On(r), kn(), !1);
	}, be = {
		p: v,
		um: pe,
		m: fe,
		r: me,
		mt: ie,
		mc: O,
		pc: ce,
		pbc: k,
		n: _e,
		o: e
	}, xe, Se;
	return t && ([xe, Se] = t(be)), {
		render: ye,
		hydrate: xe,
		createApp: ri(ye, xe)
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
	t && t.pendingBranch ? p(e) ? t.effects.push(...e) : t.effects.push(e) : Dn(e);
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
var oa = ({ key: e }) => e ?? null, sa = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : v(e) || /* @__PURE__ */ L(e) || _(e) ? {
	i: V,
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
		scopeId: Mn,
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
		ctx: V
	};
	return s ? (ma(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= v(n) ? 8 : 16), ea > 0 && !o && Qi && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Qi.push(c), c;
}
var Y = ca;
function ca(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === Mr) && (e = G), ia(e)) {
		let r = ua(e, t, !0);
		return n && ma(r, n), ea > 0 && !a && Qi && (r.shapeFlag & 6 ? Qi[Qi.indexOf(e)] = r : Qi.push(r)), r.patchFlag = -2, r;
	}
	if (Ia(e) && (e = e.__vccOpts), t) {
		t = la(t);
		let { class: e, style: n } = t;
		e && !v(e) && (t.class = j(e)), b(n) && (/* @__PURE__ */ Gt(n) && !p(n) && (n = l({}, n)), t.style = de(n));
	}
	let o = v(e) ? 1 : qi(e) ? 128 : Kn(e) ? 64 : b(e) ? 4 : _(e) ? 2 : 0;
	return J(e, t, n, r, i, o, a, !0);
}
function la(e) {
	return e ? /* @__PURE__ */ Gt(e) || bi(e) ? l({}, e) : e : null;
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
	return c && r && or(u, c.clone(u)), u;
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
		!r && !bi(t) ? t._ctx = V : r === 3 && V && (V.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else _(t) ? (t = {
		default: t,
		_ctx: V
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [da(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function ha(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = j([t.class, r.class]));
		else if (e === "style") t.style = de([t.style, r.style]);
		else if (s(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(p(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !c(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function ga(e, t, n, r = null) {
	mn(e, t, 7, [n, r]);
}
var _a = ti(), va = 0;
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
		scope: new Te(!0),
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
		propsOptions: Ei(i, a),
		emitsOptions: ci(i, a),
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
	return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = oi.bind(null, o), e.ce && e.ce(o), o;
}
var Z = null, ba = () => Z || V, xa, Sa;
{
	let e = ue(), t = (t, n) => {
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
	xi(e, r, a, t), Pi(e, i, n || t);
	let o = a ? Oa(e, t) : void 0;
	return t && Sa(!1), o;
}
function Oa(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Rr);
	let { setup: r } = n;
	if (r) {
		Ge();
		let n = e.setupContext = r.length > 1 ? Pa(e) : null, i = Ca(e), a = pn(r, e, 0, [e.props, n]), o = x(a);
		if (Ke(), i(), (o || e.sp) && !mr(e) && lr(e), o) {
			if (a.then(wa, wa), t) return a.then((n) => {
				ka(e, n, t);
			}).catch((t) => {
				hn(t, e, 0);
			});
			e.asyncDep = a;
		} else ka(e, a, t);
	} else Ma(e, t);
}
function ka(e, t, n) {
	_(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : b(t) && (e.setupState = Qt(t)), Ma(e, n);
}
var Aa, ja;
function Ma(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && Aa && !r.render) {
			let t = r.template || Gr(e).template;
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
		Ge();
		try {
			Vr(e);
		} finally {
			Ke(), t();
		}
	}
}
var Na = { get(e, t) {
	return F(e, "get", ""), e[t];
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
	return e.exposed ? e.exposeProxy ||= new Proxy(Qt(Kt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Ir) return Ir[n](e);
		},
		has(e, t) {
			return t in e || t in Ir;
		}
	}) : e.proxy;
}
function Ia(e) {
	return _(e) && "__vccOpts" in e;
}
var Q = (e, t) => /* @__PURE__ */ on(e, t, Ea);
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
}, Za = /* @__PURE__ */ l({}, Zn, Xa), Qa = /* @__PURE__ */ ((e) => (e.displayName = "Transition", e.props = Za, e))((e, { slots: t }) => La(tr, to(e), t)), $a = (e, t = []) => {
	p(e) ? e.forEach((e) => e(...t)) : e && e(...t);
}, eo = (e) => e ? p(e) ? e.some((e) => e.length > 1) : e.length > 1 : !1;
function to(e) {
	let t = {};
	for (let n in e) n in Xa || (t[n] = e[n]);
	if (e.css === !1) return t;
	let { name: n = "v", type: r, duration: i, enterFromClass: a = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: s = `${n}-enter-to`, appearFromClass: c = a, appearActiveClass: u = o, appearToClass: d = s, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: p = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, h = no(i), g = h && h[0], _ = h && h[1], { onBeforeEnter: v, onEnter: y, onEnterCancelled: b, onLeave: x, onLeaveCancelled: S, onBeforeAppear: C = v, onAppear: w = y, onAppearCancelled: T = b } = t, E = (e, t, n, r) => {
		e._enterCancelled = r, ao(e, t ? d : s), ao(e, t ? u : o), n && n();
	}, D = (e, t) => {
		e._isLeaving = !1, ao(e, f), ao(e, m), ao(e, p), t && t();
	}, O = (e) => (t, n) => {
		let i = e ? w : y, o = () => E(t, e, n);
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
		onEnter: O(!1),
		onAppear: O(!0),
		onLeave(e, t) {
			e._isLeaving = !0;
			let n = () => D(e, t);
			io(e, f), e._enterCancelled ? (io(e, p), po(e)) : (po(e), io(e, p)), oo(() => {
				e._isLeaving && (ao(e, f), io(e, m), eo(x) || co(e, r, _, n));
			}), $a(x, [e, n]);
		},
		onEnterCancelled(e) {
			E(e, !1, void 0, !0), $a(b, [e]);
		},
		onAppearCancelled(e) {
			E(e, !0, void 0, !0), $a(T, [e]);
		},
		onLeaveCancelled(e) {
			D(e), $a(S, [e]);
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
	return ce(e);
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
		bo.test(n) ? e.setProperty(ne(r), n.replace(bo, ""), "important") : e[r] = n;
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
	let r = k(t);
	if (r !== "filter" && r in e) return Co[t] = r;
	r = re(r);
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
function Do(e, t, n, r, i, a = _e(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Eo, t.slice(6, t.length)) : e.setAttributeNS(Eo, t, n) : n == null || a && !ve(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : y(n) ? String(n) : n);
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
		r === "boolean" ? n = ve(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
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
	return [e[2] === ":" ? e.slice(3) : ne(e.slice(2)), t];
}
var Fo = 0, Io = /* @__PURE__ */ Promise.resolve(), Lo = () => Fo ||= (Io.then(() => Fo = 0), Date.now());
function Ro(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		mn(zo(e, n.value), t, 5, [e]);
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
	t === "class" ? mo(e, r, o) : t === "style" ? yo(e, n, r) : s(t) ? c(t) || Mo(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ho(e, t, r, o)) ? (Oo(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Do(e, t, r, o, a, t !== "value")) : e._isVueCE && (Uo(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !v(r))) ? Oo(e, k(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Do(e, t, r, o));
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
	let r = k(t);
	return Array.isArray(n) ? n.some((e) => k(e) === r) : Object.keys(n).some((e) => k(e) === r);
}
var Wo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return p(t) ? (e) => ae(t, e) : t;
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
	return t && (e = e.trim()), n && (e = se(e)), e;
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
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? se(e.value) : e.value, c = t ?? "";
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
				let e = xe(t, n), a = e !== -1;
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
	if (p(t)) i = xe(t, r.props.value) > -1;
	else if (h(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = be(t, ts(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var Qo = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = h(t);
		ko(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? se(es(e)) : es(e));
			e[qo](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, Cn(() => {
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
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = xe(t, o) > -1;
			} else a.selected = t.has(o);
			else if (be(es(a), t)) {
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
	let e = Ee(!0), t = e.run(() => /* @__PURE__ */ R({})), n = [], r = [], i = Kt({
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
	return !n && De() && Oe(i), i;
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
		hs(i) && hs(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ L(r) && !/* @__PURE__ */ Ht(r) ? e[n] = Is(i, r) : e[n] = r;
	}
	return e;
}
var Ls = Symbol();
function Rs(e) {
	return !hs(e) || !Object.prototype.hasOwnProperty.call(e, Ls);
}
var { assign: zs } = Object;
function Bs(e) {
	return !!(/* @__PURE__ */ L(e) && e.effect);
}
function Vs(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), zs(/* @__PURE__ */ $t(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Kt(Q(() => {
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
		Cn().then(() => {
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
	}, y = /* @__PURE__ */ Rt({
		_p: r,
		$id: e,
		$onAction: js.bind(null, f),
		$patch: h,
		$reset: g,
		$subscribe(t, n = {}) {
			let i = js(d, t, n.detached, () => a()), a = o.run(() => Vn(() => r.state.value[e], (r) => {
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
	let b = (r._a && r._a.runWithContext || Ns)(() => r._e.run(() => (o = Ee()).run(() => t({ action: v }))));
	for (let t in b) {
		let n = b[t];
		/* @__PURE__ */ L(n) && !Bs(n) || /* @__PURE__ */ Ht(n) ? a || (p && Rs(n) && (/* @__PURE__ */ L(n) ? n.value = p[t] : Is(n, p[t])), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = v(n, t), s.actions[t] = n);
	}
	return zs(y, b), zs(/* @__PURE__ */ I(y), b), Object.defineProperty(y, "$state", {
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
		let o = Rn();
		return n ||= o ? Ln(ms, null) : null, n && ps(n), n = fs, n._s.has(e) || (i ? Hs(e, t, r, n) : Vs(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
function Ws(e) {
	let t = /* @__PURE__ */ I(e), n = {};
	for (let r in t) {
		let i = t[r];
		i.effect ? n[r] = Q({
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
//#region src/functions/npc-builder/default-npc-builder-settings.ts
function Ks() {
	return {
		allowBaseActorCharacteristics: !1,
		allowBaseActorSkills: !1,
		allowBaseActorTalents: !1,
		allowBaseActorTraits: !0,
		allowBaseActorTrappings: !0,
		askForLinkedSkillSpecializations: !1,
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
//#region src/functions/npc-builder/skill-specialization.ts
function qs(e, t, n) {
	return `${e}:${Qs(t)}:${n}`;
}
function Js(e, t) {
	let n = e.trim(), r = t.trim();
	return r ? `${n} (${r})` : n;
}
function Ys(e) {
	let t = /^(?<base>.+?)\s*\((?<specialization>[^)]+)\)\s*$/.exec(e.trim());
	if (!t?.groups) return null;
	let n = t.groups.base?.trim() ?? "", r = t.groups.specialization?.trim() ?? "";
	return !n || !r || Xs(e) ? null : {
		baseName: n,
		originalName: e,
		specialization: r
	};
}
function Xs(e) {
	let t = /^(?<base>.+?)\s*\((?<specialization>[^)]+)\)\s*$/.exec(e.trim());
	if (!t?.groups) return null;
	let n = t.groups.base?.trim() ?? "", r = t.groups.specialization?.trim() ?? "", i = ec(r);
	return !n || !r || !$s(r, i) ? null : {
		baseName: n,
		options: i,
		originalName: e,
		specialization: r
	};
}
function Zs(e, t) {
	let n = /* @__PURE__ */ new Map();
	return t.map((t) => {
		let r = Qs(t), i = n.get(r) ?? 0;
		return n.set(r, i + 1), {
			occurrence: i,
			originalName: t,
			resolutionKey: qs(e, t, i)
		};
	});
}
function Qs(e) {
	return e.trim().replace(/\s+/g, " ").toLocaleLowerCase();
}
function $s(e, t) {
	return e.trim().toLocaleLowerCase() === "any" || t.length > 1;
}
function ec(e) {
	return e.split(/\s+or\s+/i).map((e) => e.trim()).filter(Boolean);
}
//#endregion
//#region src/functions/npc-builder/trapping-resolution.ts
function tc(e, t = "trapping") {
	return {
		candidates: [],
		searchTerms: ac(e),
		selectedCandidateUuid: "",
		selectedItemType: t,
		selectedName: e.trim(),
		status: "fallback"
	};
}
function nc(e) {
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
function rc(e) {
	return {
		candidates: [],
		searchTerms: ac(e),
		selectedCandidateUuid: "",
		selectedItemType: "trapping",
		selectedName: e.trim(),
		status: "unresolved"
	};
}
function ic(e, t) {
	let n = ac(e), r = sc(n, t), i = r.filter((e) => e.matchKind === "exact");
	return i.length === 1 ? lc("matched", n, i[0]) : i.length > 1 ? lc("ambiguous", n, i[0], { candidates: r }) : r.length ? {
		candidates: r,
		searchTerms: n,
		selectedCandidateUuid: "",
		selectedItemType: "trapping",
		selectedName: e.trim(),
		status: "ambiguous"
	} : tc(e);
}
function ac(e) {
	let t = e.split(/\s+or\s+/i).map((e) => e.trim()).filter(Boolean);
	return t.length ? pc(t) : [e.trim()].filter(Boolean);
}
function oc(e, t) {
	if (uc(e) === uc(t)) return "exact";
	let n = dc(e), r = dc(t);
	if (!n || !r) return null;
	if (n === r || n.includes(r) || r.includes(n)) return "near";
	let i = n.split(" "), a = r.split(" ");
	return i.every((e) => a.includes(e)) ? "near" : null;
}
function sc(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) for (let e of t) {
		let t = oc(r, e.name);
		t && n.get(e.uuid)?.matchKind !== "exact" && n.set(e.uuid, {
			itemType: e.itemType,
			matchKind: t,
			name: e.name,
			searchTerm: r,
			sourceLabel: e.sourceLabel,
			uuid: e.uuid
		});
	}
	return [...n.values()].sort(cc);
}
function cc(e, t) {
	return e.matchKind === t.matchKind ? e.name.localeCompare(t.name) : e.matchKind === "exact" ? -1 : 1;
}
function lc(e, t, n, r = {}) {
	return {
		candidates: r.candidates ?? (n ? [n] : []),
		searchTerms: t,
		selectedCandidateUuid: n?.uuid ?? "",
		selectedItemType: n?.itemType ?? "trapping",
		selectedName: n?.name ?? "",
		status: e
	};
}
function uc(e) {
	return e.trim().toLocaleLowerCase().replace(/\s+/g, " ");
}
function dc(e) {
	return uc(e).replace(/&/g, " and ").replace(/[()[\],.;:]/g, " ").replace(/\b(a|an|the|some|pair of|pairs of)\b/g, " ").split(/\s+/).map(fc).filter(Boolean).join(" ");
}
function fc(e) {
	return e.endsWith("ies") && e.length > 4 ? `${e.slice(0, -3)}y` : e.endsWith("s") && !e.endsWith("ss") && e.length > 3 ? e.slice(0, -1) : e;
}
function pc(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/state/npc-builder-store.ts
var mc = Ks(), hc = {
	advancements: [],
	optionalTraits: [],
	traits: [],
	trappings: []
}, gc = 5;
function _c(e, t) {
	return `${e}:${xc(t)}`;
}
function vc(e) {
	let t = Number(e.level ?? 1);
	return Number.isFinite(t) ? Math.max(1, Math.floor(t)) * gc : gc;
}
function yc(e) {
	return e.level === null ? `${e.name} level baseline` : `${e.name} level ${e.level} baseline`;
}
function bc(e, t) {
	return e === "characteristic" ? t.allowBaseActorCharacteristics : e === "skill" ? t.allowBaseActorSkills : t.allowBaseActorTalents;
}
function xc(e) {
	return e.trim().toLocaleLowerCase();
}
function Sc(e) {
	return Number.isFinite(e) ? Math.max(1, Math.floor(e)) : 1;
}
function Cc(e, t) {
	return {
		...Gs(),
		...e,
		...t
	};
}
function wc(e) {
	return e === "auto-add-all" || e === "never" || e === "prompt";
}
function Tc(e) {
	return {
		allowBaseActorCharacteristics: e.allowBaseActorCharacteristics ?? !0,
		allowBaseActorSkills: e.allowBaseActorSkills ?? !0,
		allowBaseActorTalents: e.allowBaseActorTalents ?? !0,
		allowBaseActorTraits: e.allowBaseActorTraits ?? !0,
		allowBaseActorTrappings: e.allowBaseActorTrappings ?? !0,
		askForLinkedSkillSpecializations: e.askForLinkedSkillSpecializations ?? !1,
		baseActorFolderUuid: typeof e.baseActorFolderUuid == "string" ? e.baseActorFolderUuid : "",
		includeSpeciesInName: e.includeSpeciesInName ?? !1,
		lowerCareerMode: wc(e.lowerCareerMode) ? e.lowerCareerMode : "prompt",
		outputActorFolderUuid: typeof e.outputActorFolderUuid == "string" ? e.outputActorFolderUuid : "",
		quickTraitFolderUuid: typeof e.quickTraitFolderUuid == "string" ? e.quickTraitFolderUuid : "",
		searchCompendiumPortraitAssets: e.searchCompendiumPortraitAssets ?? !0,
		searchFoundryPortraitAssets: e.searchFoundryPortraitAssets ?? !0,
		searchWebPortraitAssets: e.searchWebPortraitAssets ?? !1
	};
}
var Ec = Us("npc-builder", () => {
	let e = /* @__PURE__ */ R(""), t = /* @__PURE__ */ R([]), n = /* @__PURE__ */ R({}), r = /* @__PURE__ */ R({ ...hc }), i = /* @__PURE__ */ R([]), a = /* @__PURE__ */ R([]), o = /* @__PURE__ */ R([]), s = /* @__PURE__ */ R([]), c = /* @__PURE__ */ R([]), l = /* @__PURE__ */ R([]), u = /* @__PURE__ */ R(""), d = /* @__PURE__ */ R({ ...mc }), f = /* @__PURE__ */ R(""), p = /* @__PURE__ */ R({}), m = /* @__PURE__ */ R({}), h = /* @__PURE__ */ R({}), g = /* @__PURE__ */ R({}), _ = Q(() => i.value.find((e) => e.uuid === f.value) ?? null), v = Q(() => a.value.at(-1) ?? null), y = Q(() => {
		let e = v.value?.name, t = d.value.includeSpeciesInName && _.value?.species ? _.value.species : "";
		return e && t ? `${t} ${e}` : e || (_.value ? `${_.value.name} NPC` : "New NPC");
	}), b = Q(() => e.value.trim() || y.value), x = Q(() => v.value?.img || _.value?.prototypeTokenImg || _.value?.img || ""), S = Q(() => u.value || x.value), C = Q(() => {
		let e = {
			characteristics: 0,
			skills: 0,
			talents: 0,
			trappings: 0
		};
		for (let t of a.value) e.characteristics += t.grants.characteristics.length * t.quantity, e.skills += t.grants.skills.length * t.quantity, e.talents += t.grants.talents.length * t.quantity, e.trappings += t.grants.trappings.length * t.quantity;
		return e;
	}), w = Q(() => {
		let e = /* @__PURE__ */ new Map();
		for (let t of r.value.advancements) {
			if (!bc(t.kind, d.value)) continue;
			let n = _c(t.kind, t.name);
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
		return k(e, "characteristic"), k(e, "skill"), k(e, "talent"), [...e.values()].map((e) => {
			let t = _c(e.kind, e.name), r = n.value[t] ?? e.careerValue;
			return {
				...e,
				current: Math.max(0, Math.floor(r))
			};
		}).sort((e, t) => e.kind === t.kind ? e.name.localeCompare(t.name) : e.kind.localeCompare(t.kind));
	}), T = Q(() => {
		let e = /* @__PURE__ */ new Map();
		if (d.value.allowBaseActorTrappings) for (let t of r.value.trappings) e.set(`base:${t.uuid || xc(t.name)}`, {
			ignored: !1,
			itemType: t.itemType,
			key: `base:${t.uuid || xc(t.name)}`,
			name: t.name,
			quantity: t.quantity,
			resolution: nc({
				itemType: t.itemType,
				name: t.name,
				uuid: t.uuid
			}),
			source: "base",
			sourceUuid: t.uuid
		});
		for (let t of a.value) for (let n of t.grants.trappings) {
			let r = `career:${xc(n)}`, i = e.get(r);
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
				resolution: g.value[r] ?? rc(n),
				source: "career",
				sourceUuid: ""
			});
		}
		for (let t of s.value) e.set(t.key, { ...t });
		return [...e.values()].map((e) => {
			let t = h.value[e.key];
			return {
				...e,
				ignored: t?.ignored ?? e.ignored,
				quantity: Sc(t?.quantity ?? e.quantity),
				resolution: g.value[e.key] ?? e.resolution
			};
		}).sort((e, t) => e.source === t.source ? e.name.localeCompare(t.name) : e.source.localeCompare(t.source));
	}), E = Q(() => {
		let e = /* @__PURE__ */ new Map();
		if (d.value.allowBaseActorTraits) for (let t of r.value.traits) {
			let n = `base:${t.uuid || xc(t.name)}`;
			e.set(n, {
				config: t.config,
				ignored: !1,
				key: n,
				name: t.name,
				source: "base",
				sourceUuid: t.uuid
			});
		}
		for (let t of o.value) Me(e, t.name) || e.set(t.key, { ...t });
		return [...e.values()].map((e) => ({
			...e,
			config: Cc(e.config, m.value[e.key])
		})).sort((e, t) => e.source === t.source ? e.name.localeCompare(t.name) : e.source.localeCompare(t.source));
	}), D = Q(() => [...r.value.optionalTraits].map((e) => ({
		config: e.config,
		img: e.img,
		name: e.name,
		uuid: e.uuid
	})).sort((e, t) => e.name.localeCompare(t.name)));
	function O(e) {
		let t = a.value.find((t) => t.uuid === e.uuid);
		if (t) {
			t.quantity = Sc(t.quantity + 1);
			return;
		}
		a.value.push({
			...e,
			quantity: 1
		});
	}
	function ee(e) {
		return a.value.some((t) => t.uuid === e.uuid) ? !1 : (a.value.push({
			...e,
			quantity: 1
		}), !0);
	}
	function k(e, t) {
		if (t === "talent") {
			ne(e);
			return;
		}
		te(e, t);
	}
	function te(e, t) {
		let n = /* @__PURE__ */ new Map();
		for (let e of a.value) {
			let r = se(ge(e, t)), i = vc(e) / gc, a = Math.max(0, Sc(e.quantity) - 1) * gc;
			for (let o of r) {
				let r = _c(t, o), s = n.get(r);
				if (s) {
					i > s.highestLevel && (s.highestLevel = i, s.highestLevelSource = yc(e)), a > 0 && s.extraSources.push({
						count: a,
						label: `${e.name} extra time`
					});
					continue;
				}
				n.set(r, {
					extraSources: ie(e.name, a),
					highestLevel: i,
					highestLevelSource: yc(e),
					name: o
				});
			}
		}
		for (let r of n.values()) re(e, {
			careerValue: r.highestLevel * gc + A(r.extraSources),
			kind: t,
			name: r.name,
			sources: [{
				count: r.highestLevel * gc,
				label: r.highestLevelSource
			}, ...r.extraSources]
		});
	}
	function ne(e) {
		let t = /* @__PURE__ */ new Map();
		for (let e of a.value) {
			let n = se(ge(e, "talent")), r = Math.max(0, Sc(e.quantity) - 1);
			for (let i of n) {
				let n = _c("talent", i), a = t.get(n);
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
		for (let n of t.values()) re(e, {
			careerValue: 1 + A(n.extraSources),
			kind: "talent",
			name: n.name,
			sources: [{
				count: 1,
				label: n.firstSource
			}, ...n.extraSources]
		});
	}
	function re(e, t) {
		let n = _c(t.kind, t.name), r = e.get(n);
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
	function A(e) {
		let t = 0;
		for (let n of e) t += n.count;
		return t;
	}
	function ae(e) {
		s.value.some((t) => t.key === e.key) || s.value.push(e);
	}
	function oe(e) {
		let t = Ae(e.name), n = ke(e.name);
		if (n) {
			Ee(n, !0);
			return;
		}
		if (t) {
			Te(t, !0);
			return;
		}
		Oe(e);
	}
	function se(e) {
		let t = /* @__PURE__ */ new Set(), n = [];
		for (let r of e) {
			let e = xc(r);
			!e || t.has(e) || (t.add(e), n.push(r));
		}
		return n;
	}
	function ce() {
		r.value = {
			advancements: [],
			optionalTraits: [],
			traits: [],
			trappings: []
		}, n.value = {}, m.value = {}, h.value = {}, g.value = {};
	}
	function le(e) {
		return p.value[e] ?? "";
	}
	function ue(e) {
		r.value = {
			advancements: [...e.advancements],
			optionalTraits: [...e.optionalTraits],
			traits: [...e.traits],
			trappings: [...e.trappings]
		}, n.value = {}, m.value = {}, h.value = {};
	}
	function de(e) {
		i.value = [...e].sort((e, t) => e.name.localeCompare(t.name)), f.value && !i.value.some((e) => e.uuid === f.value) && (f.value = "", ce());
	}
	function fe(e) {
		d.value = Tc(e);
	}
	function pe(e) {
		t.value = [...e].sort((e, t) => e.name.localeCompare(t.name)), d.value.baseActorFolderUuid && !t.value.some((e) => e.uuid === d.value.baseActorFolderUuid) && (d.value.baseActorFolderUuid = ""), d.value.outputActorFolderUuid && !t.value.some((e) => e.uuid === d.value.outputActorFolderUuid) && (d.value.outputActorFolderUuid = "");
	}
	function me(e) {
		c.value = [...e].sort((e, t) => e.name.localeCompare(t.name)), d.value.quickTraitFolderUuid && !c.value.some((e) => e.uuid === d.value.quickTraitFolderUuid) && (d.value.quickTraitFolderUuid = "");
	}
	function he(e) {
		l.value = [...e].sort((e, t) => e.name.localeCompare(t.name));
	}
	function j(e, t) {
		let n = e + t, r = a.value[e];
		!r || n < 0 || n >= a.value.length || (a.value.splice(e, 1), a.value.splice(n, 0, r));
	}
	function ge(e, t) {
		return t === "characteristic" ? e.grants.characteristics : t === "skill" ? Zs(e.uuid, e.grants.skills).map((e) => p.value[e.resolutionKey] || e.originalName) : e.grants.talents;
	}
	function _e(e) {
		let [t] = a.value.splice(e, 1);
		t && Re(t.uuid);
	}
	function ve(e) {
		s.value = s.value.filter((t) => t.key !== e), delete h.value[e], delete g.value[e];
	}
	function ye(e) {
		o.value = o.value.filter((t) => t.key !== e), delete m.value[e];
	}
	function be() {
		e.value = "", a.value = [], o.value = [], s.value = [], u.value = "", p.value = {}, f.value = "", ce();
	}
	function xe(e) {
		i.value.some((t) => t.uuid === e.uuid) || i.value.push(e), Se(e.uuid);
	}
	function Se(e) {
		let t = e.trim();
		f.value !== t && (u.value = ""), f.value = t;
	}
	function M(e) {
		u.value = e;
	}
	function Ce(e, t) {
		let r = _c(e.kind, e.name), i = Number.isFinite(t) ? t : 0;
		n.value[r] = Math.max(0, Math.floor(i));
	}
	function we(e, t) {
		let n = a.value[e];
		n && (n.quantity = Sc(t));
	}
	function N(e, t) {
		let n = t.trim();
		if (!n) {
			delete p.value[e];
			return;
		}
		p.value[e] = n;
	}
	function Te(e, t) {
		De("quick", e, t);
	}
	function Ee(e, t) {
		De("optional", e, t);
	}
	function De(e, t, n) {
		let r = `${e}:${t.uuid || xc(t.name)}`;
		if (!n) {
			ye(r);
			return;
		}
		o.value.find((e) => e.key === r) || Oe({
			config: t.config,
			ignored: !1,
			key: r,
			name: t.name,
			source: e,
			sourceUuid: t.uuid
		});
	}
	function Oe(e) {
		E.value.some((t) => je(t.name, e.name)) || o.value.some((t) => t.key === e.key) || o.value.push(e);
	}
	function P(e, t) {
		m.value[e] = {
			...m.value[e],
			...t
		};
	}
	function ke(e) {
		return D.value.find((t) => je(t.name, e));
	}
	function Ae(e) {
		return l.value.find((t) => je(t.name, e));
	}
	function je(e, t) {
		return xc(e) === xc(t);
	}
	function Me(e, t) {
		return [...e.values()].some((e) => je(e.name, t));
	}
	function Ne(e, t) {
		h.value[e] = {
			...h.value[e],
			ignored: t
		};
	}
	function Pe(e, t) {
		h.value[e] = {
			...h.value[e],
			quantity: Sc(t)
		};
	}
	function Fe(e, t) {
		let n = T.value.find((t) => t.key === e), r = n?.resolution.candidates.find((e) => e.uuid === t);
		!n || !r || (g.value[e] = {
			...n.resolution,
			selectedCandidateUuid: r.uuid,
			selectedItemType: r.itemType,
			selectedName: r.name,
			status: n.resolution.status === "matched" ? "matched" : "ambiguous"
		});
	}
	function Ie(e) {
		let t = T.value.find((t) => t.key === e);
		if (!t) return;
		let n = tc(t.name, t.itemType);
		g.value[e] = {
			...n,
			candidates: t.resolution.candidates,
			searchTerms: t.resolution.searchTerms
		};
	}
	function Le(e, t) {
		g.value[e] = t;
	}
	function Re(e) {
		let t = `${e}:`;
		for (let e of Object.keys(p.value)) e.startsWith(t) && delete p.value[e];
	}
	return {
		actorName: e,
		actorFolders: t,
		addCareer: O,
		addCareerIfMissing: ee,
		addCustomTrait: oe,
		addCustomTrapping: ae,
		advancements: w,
		baseActorDraftData: r,
		baseActors: i,
		careers: a,
		clearBaseDraftData: ce,
		customTraits: o,
		customTrappings: s,
		finalActorName: b,
		finalCareer: v,
		finalPortraitPath: S,
		grantTotals: C,
		getSkillGrantResolution: le,
		hydrateActorFolders: pe,
		hydrateBaseActorDraftData: ue,
		hydrateBaseActors: de,
		hydrateItemFolders: me,
		hydrateQuickTraits: he,
		hydrateSettings: fe,
		itemFolders: c,
		moveCareer: j,
		optionalTraits: D,
		quickTraits: l,
		removeCareer: _e,
		removeCustomTrait: ye,
		removeCustomTrapping: ve,
		resetDraft: be,
		selectBaseActor: xe,
		selectBaseActorUuid: Se,
		selectPortrait: M,
		selectTrappingResolutionCandidate: Fe,
		selectedBaseActor: _,
		selectedBaseActorUuid: f,
		selectedPortraitPath: u,
		setAdvancementCurrent: Ce,
		setCareerQuantity: we,
		setTrappingFallback: Ie,
		setOptionalTraitSelected: Ee,
		setQuickTraitSelected: Te,
		setSkillGrantResolution: N,
		setTraitConfig: P,
		setTrappingIgnored: Ne,
		setTrappingQuantity: Pe,
		setTrappingResolution: Le,
		settings: d,
		suggestedActorName: y,
		traits: E,
		trappings: T
	};
}), Dc = { class: "sub-view__header" }, Oc = /* @__PURE__ */ cr({
	__name: "SubView",
	props: {
		open: { type: Boolean },
		title: {}
	},
	emits: ["close"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ R(null), a = /* @__PURE__ */ R(null), o = null, s = 0;
		Vn(() => n.open, async (e) => {
			if (e) {
				await Cn(), o = c(a.value), s = o?.scrollTop ?? 0, o && (o.scrollTop = 0), i.value && (i.value.scrollTop = 0);
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
			default: Pn(() => [e.open ? (K(), q("section", {
				key: 0,
				ref_key: "rootElement",
				ref: a,
				class: "sub-view",
				role: "dialog",
				"aria-modal": "true"
			}, [J("div", Dc, [J("h2", null, M(e.title), 1), J("button", {
				type: "button",
				class: "sub-view__close",
				onClick: n[0] ||= (e) => r("close")
			}, " Close ")]), J("div", {
				ref_key: "bodyElement",
				ref: i,
				class: "sub-view__body"
			}, [Nr(t.$slots, "default", {}, void 0, !0)], 512)], 512)) : X("", !0)]),
			_: 3
		}));
	}
}), kc = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Ac = /* @__PURE__ */ kc(Oc, [["__scopeId", "data-v-2a7b49f7"]]), jc = { class: "npc-builder__stack" }, Mc = { class: "npc-builder__panel" }, Nc = { class: "npc-builder__table" }, Pc = ["value", "onInput"], Fc = { class: "npc-builder__panel" }, Ic = { class: "npc-builder__table" }, Lc = {
	key: 0,
	class: "npc-builder__badge"
}, Rc = ["value", "onInput"], zc = { class: "npc-builder__panel" }, Bc = { class: "npc-builder__table" }, Vc = ["value", "onInput"], Hc = /* @__PURE__ */ cr({
	__name: "NpcBuilderAdvancementsTab",
	setup(e) {
		let t = Ec(), { advancements: n } = Ws(t), r = Q(() => n.value.filter((e) => e.kind === "characteristic")), i = Q(() => n.value.filter((e) => e.kind === "skill")), a = Q(() => n.value.filter((e) => e.kind === "talent"));
		function o(e) {
			return e.sources.length ? e.sources.map((e) => `${e.label} +${e.count}`).join(", ") : e.includedFromBase ? "Base actor" : "-";
		}
		function s(e) {
			return Xs(e) !== null;
		}
		function c(e, n) {
			let r = n.target;
			r && t.setAdvancementCurrent(e, Number(r.value));
		}
		return (e, t) => (K(), q("section", jc, [
			J("section", Mc, [t[1] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "1"), J("h2", null, "Characteristics")], -1), J("div", Nc, [t[0] ||= J("div", { class: "npc-builder__table-head" }, [
				J("span", null, "Name"),
				J("span", null, "Base"),
				J("span", null, "Career"),
				J("span", null, "Apply"),
				J("span", null, "Sources")
			], -1), (K(!0), q(W, null, U(r.value, (e) => (K(), q("label", {
				key: `${e.kind}:${e.name}`,
				class: "npc-builder__advance-row"
			}, [
				J("strong", null, M(e.name), 1),
				J("span", null, M(e.baseValue), 1),
				J("span", null, M(e.careerValue), 1),
				J("input", {
					value: e.current,
					min: "0",
					type: "number",
					onInput: (t) => c(e, t)
				}, null, 40, Pc),
				J("span", null, M(o(e)), 1)
			]))), 128))])]),
			J("section", Fc, [t[3] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "2"), J("h2", null, "Skills")], -1), J("div", Ic, [t[2] ||= J("div", { class: "npc-builder__table-head" }, [
				J("span", null, "Name"),
				J("span", null, "Base"),
				J("span", null, "Career"),
				J("span", null, "Apply"),
				J("span", null, "Sources")
			], -1), (K(!0), q(W, null, U(i.value, (e) => (K(), q("label", {
				key: `${e.kind}:${e.name}`,
				class: "npc-builder__advance-row"
			}, [
				J("strong", null, [da(M(e.name) + " ", 1), s(e.name) ? (K(), q("span", Lc, " Needs specialization ")) : X("", !0)]),
				J("span", null, M(e.baseValue), 1),
				J("span", null, M(e.careerValue), 1),
				J("input", {
					value: e.current,
					min: "0",
					type: "number",
					onInput: (t) => c(e, t)
				}, null, 40, Rc),
				J("span", null, M(o(e)), 1)
			]))), 128))])]),
			J("section", zc, [t[5] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "3"), J("h2", null, "Talents")], -1), J("div", Bc, [t[4] ||= J("div", { class: "npc-builder__table-head" }, [
				J("span", null, "Name"),
				J("span", null, "Base"),
				J("span", null, "Career"),
				J("span", null, "Apply"),
				J("span", null, "Sources")
			], -1), (K(!0), q(W, null, U(a.value, (e) => (K(), q("label", {
				key: `${e.kind}:${e.name}`,
				class: "npc-builder__advance-row"
			}, [
				J("strong", null, M(e.name), 1),
				J("span", null, M(e.baseValue), 1),
				J("span", null, M(e.careerValue), 1),
				J("input", {
					value: e.current,
					min: "0",
					type: "number",
					onInput: (t) => c(e, t)
				}, null, 40, Vc),
				J("span", null, M(o(e)), 1)
			]))), 128))])])
		]));
	}
}), Uc = new Set([
	"and",
	"any",
	"the",
	"with",
	"without",
	"of",
	"or",
	"npc"
]);
function Wc(e) {
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
	}), Yc(t);
}
function Gc(e, t) {
	let n = Xc(e);
	return n ? t.some((e) => Xc(e.img) === n) : !1;
}
function Kc(e) {
	let t = [];
	for (let n of e.careers) t.push(n.name, n.careerGroup);
	return e.selectedBaseActor && t.push(e.selectedBaseActor.name, e.selectedBaseActor.species), el(t.flatMap((e) => $c(e)).filter((e) => e.length >= 3 && !Uc.has(e)));
}
function qc(e, t) {
	return Jc(Zc(e), t);
}
function Jc(e, t) {
	let n = Qc(e);
	return n ? t.some((e) => n.includes(e)) : !1;
}
function Yc(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.img.trim().toLocaleLowerCase();
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
function Xc(e) {
	return e.trim().toLocaleLowerCase();
}
function Zc(e) {
	return (e.split(/[\\/]/).at(-1) ?? e).replace(/\.[^.]+$/, "");
}
function Qc(e) {
	return e.trim().toLocaleLowerCase().replace(/[_-]/g, " ").replace(/[()[\],.;:]/g, " ").replace(/\s+/g, " ");
}
function $c(e) {
	let t = Qc(e);
	return [t, ...t.split(" ")].filter(Boolean);
}
function el(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/view/components/DocumentDrop.vue?vue&type=script&setup=true&lang.ts
var tl = { key: 0 }, nl = /* @__PURE__ */ kc(/* @__PURE__ */ cr({
	__name: "DocumentDrop",
	props: {
		description: {},
		title: {},
		variant: {}
	},
	emits: ["dropData"],
	setup(e, { emit: t }) {
		let n = t, r = /* @__PURE__ */ R(!1);
		function i(e) {
			let t = e.currentTarget, n = e.relatedTarget;
			t instanceof Node && n instanceof Node && t.contains(n) || (r.value = !1);
		}
		function a(e) {
			e.preventDefault(), r.value = !1, n("dropData", e.dataTransfer?.getData("text/plain") ?? "");
		}
		return (t, n) => (K(), q("div", {
			class: j(["document-drop", {
				"document-drop--compact": e.variant === "compact",
				"is-hovering": r.value
			}]),
			onDragenter: n[0] ||= is((e) => r.value = !0, ["prevent"]),
			onDragover: n[1] ||= is((e) => r.value = !0, ["prevent"]),
			onDragleave: i,
			onDrop: a
		}, [
			J("strong", null, M(e.title), 1),
			e.description ? (K(), q("span", tl, M(e.description), 1)) : X("", !0),
			Nr(t.$slots, "default", {}, void 0, !0)
		], 34));
	}
}), [["__scopeId", "data-v-22723a4a"]]), rl = { class: "npc-builder__layout" }, il = { class: "npc-builder__column" }, al = { class: "npc-builder__panel" }, ol = { class: "npc-builder__field" }, sl = { class: "npc-builder__field" }, cl = ["disabled"], ll = { value: "" }, ul = ["value"], dl = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, fl = {
	key: 1,
	class: "npc-builder__source"
}, pl = { class: "npc-builder__thumbnail" }, ml = ["src"], hl = { key: 1 }, gl = { class: "npc-builder__panel" }, _l = {
	key: 0,
	class: "npc-builder__careers"
}, vl = { class: "npc-builder__thumbnail" }, yl = ["src"], bl = { key: 1 }, xl = { class: "npc-builder__career-copy" }, Sl = { class: "npc-builder__grant-list" }, Cl = ["value", "onInput"], wl = { class: "npc-builder__career-actions" }, Tl = ["disabled", "onClick"], El = ["disabled", "onClick"], Dl = ["onClick"], Ol = {
	key: 1,
	class: "npc-builder__empty"
}, kl = { class: "npc-builder__summary" }, Al = { class: "npc-builder__preview" }, jl = ["disabled"], Ml = ["src"], Nl = { key: 1 }, Pl = { key: 2 }, Fl = {
	key: 0,
	class: "npc-builder__portrait-path"
}, Il = { key: 0 }, Ll = ["title"], Rl = {
	key: 1,
	class: "npc-builder__portrait-gallery"
}, zl = { key: 0 }, Bl = { key: 1 }, Vl = {
	key: 0,
	class: "npc-builder__portrait-progress"
}, Hl = ["value"], Ul = { class: "npc-builder__portrait-strip" }, Wl = [
	"aria-label",
	"title",
	"onClick"
], Gl = ["src"], Kl = { class: "npc-builder__field" }, ql = ["placeholder"], Jl = {
	key: 2,
	class: "npc-builder__quick-traits"
}, Yl = ["onClick"], Xl = {
	key: 3,
	class: "npc-builder__quick-traits"
}, Zl = ["onClick"], Ql = { class: "npc-builder__portrait-gallery-view" }, $l = { class: "npc-builder__portrait-gallery-summary" }, eu = { key: 0 }, tu = { key: 1 }, nu = { class: "npc-builder__portrait-grid" }, ru = ["title", "onClick"], iu = { class: "npc-builder__portrait-grid-image" }, au = ["src"], ou = /* @__PURE__ */ cr({
	__name: "NpcBuilderBuildTab",
	props: {
		bridge: {},
		isLoadingActors: { type: Boolean },
		isLoadingBaseDraft: { type: Boolean }
	},
	emits: ["careerDrop"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Ec(), { actorName: a, advancements: o, baseActors: s, careers: c, finalActorName: l, finalCareer: u, finalPortraitPath: d, grantTotals: f, optionalTraits: p, quickTraits: m, selectedBaseActor: h, selectedBaseActorUuid: g, selectedPortraitPath: _, settings: v, suggestedActorName: y, traits: b, trappings: x } = Ws(i), S = /* @__PURE__ */ R(""), C = /* @__PURE__ */ R([]), w = /* @__PURE__ */ R(""), T = /* @__PURE__ */ R(!1), E = /* @__PURE__ */ R(!1), D = /* @__PURE__ */ R(null), O = 0, ee = Q(() => {
			let e = S.value.trim().toLocaleLowerCase();
			return e ? s.value.filter((t) => t.name.toLocaleLowerCase().includes(e)) : s.value;
		}), k = Q({
			get: () => g.value,
			set: (e) => {
				i.selectBaseActorUuid(e);
			}
		}), te = Q(() => {
			let e = new Set(p.value.map((e) => he(e.name)));
			return m.value.filter((t) => !e.has(he(t.name)));
		}), ne = Q(() => {
			let e = 0;
			for (let t of c.value) e += t.quantity;
			return e;
		}), re = Q(() => x.value.filter((e) => !e.ignored)), ie = Q(() => Wc({
			careers: c.value,
			selectedBaseActor: h.value
		})), A = Q(() => Yc([...ie.value, ...C.value])), ae = Q(() => A.value.slice(0, 10)), oe = Q(() => Math.max(0, A.value.length - ae.value.length)), se = Q(() => A.value.find((e) => e.img === d.value)?.key ?? ""), ce = Q(() => A.value.find((e) => e.img === d.value) ?? null), le = Q(() => {
			let e = D.value;
			return e ? e.maxDirectories <= 0 ? e.phase === "ready" ? 100 : 4 : Math.min(100, Math.round(e.directoriesVisited / e.maxDirectories * 100)) : 0;
		}), ue = Q(() => {
			let e = D.value;
			return e ? e.phase === "ready" ? `${e.candidatesFound} options found` : e.phase === "filesystem" ? e.maxDirectories <= 0 ? `${e.directoriesVisited} directories - ${e.currentLocation}` : `${e.directoriesVisited}/${e.maxDirectories} directories - ${e.currentLocation}` : e.currentLocation : "";
		});
		Vn(() => [
			h.value?.uuid ?? "",
			v.value.searchCompendiumPortraitAssets,
			v.value.searchFoundryPortraitAssets,
			c.value.map((e) => e.uuid).join("|")
		], () => {
			we();
		}, { immediate: !0 }), Vn([
			A,
			_,
			E
		], () => {
			_.value && !E.value && !Gc(_.value, A.value) && i.selectPortrait("");
		}, { immediate: !0 });
		function de(e) {
			return pe(e);
		}
		function fe(e) {
			return pe(e);
		}
		function pe(e) {
			return b.value.some((t) => me(t.name, e.name));
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
			xe(e), T.value = !1;
		}
		function Ce(e) {
			return `${e.label}\n${e.img}`;
		}
		async function we() {
			let e = O + 1;
			if (O = e, !v.value.searchCompendiumPortraitAssets && !v.value.searchFoundryPortraitAssets) {
				C.value = [], D.value = null;
				return;
			}
			if (!h.value && !c.value.length) {
				C.value = [], D.value = null;
				return;
			}
			E.value = !0, C.value = [], D.value = {
				candidatesFound: 0,
				currentLocation: "Preparing portrait search",
				directoriesVisited: 0,
				maxDirectories: 0,
				phase: "world-documents"
			};
			try {
				let t = await n.bridge.listFoundryPortraitCandidates({
					careers: c.value,
					includeCompendiumAssets: v.value.searchCompendiumPortraitAssets,
					includeFilePickerAssets: v.value.searchFoundryPortraitAssets,
					selectedBaseActor: h.value
				}, (t) => {
					O === e && (D.value = t);
				});
				O === e && (C.value = t);
			} catch (t) {
				O === e && (w.value = Te(t));
			} finally {
				O === e && (E.value = !1);
			}
		}
		async function N(e) {
			w.value = "";
			try {
				i.selectBaseActor(await n.bridge.resolveActorDrop(e));
			} catch (e) {
				w.value = Te(e);
			}
		}
		function Te(e) {
			return e instanceof Error ? e.message : "The NPC Builder could not resolve that Actor drop.";
		}
		return (t, n) => (K(), q("section", rl, [
			J("div", il, [J("section", al, [
				n[9] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "1"), J("h2", null, "Base Actor")], -1),
				J("label", ol, [n[7] ||= J("span", null, "Search world actors", -1), H(J("input", {
					"onUpdate:modelValue": n[0] ||= (e) => S.value = e,
					placeholder: "Filter actors",
					type: "search"
				}, null, 512), [[Yo, S.value]])]),
				J("label", sl, [n[8] ||= J("span", null, "Base statblock", -1), H(J("select", {
					"onUpdate:modelValue": n[1] ||= (e) => k.value = e,
					disabled: e.isLoadingActors
				}, [J("option", ll, M(e.isLoadingActors ? "Loading actors..." : "Choose an actor"), 1), (K(!0), q(W, null, U(ee.value, (e) => (K(), q("option", {
					key: e.uuid,
					value: e.uuid
				}, M(e.name), 9, ul))), 128))], 8, cl), [[Qo, k.value]])]),
				Y(nl, {
					class: "npc-builder__drop",
					description: "Use any world Actor as the starting statblock.",
					title: "Drop Actor",
					onDropData: N
				}),
				w.value ? (K(), q("p", dl, M(w.value), 1)) : X("", !0),
				z(h) ? (K(), q("article", fl, [J("div", pl, [z(h).img ? (K(), q("img", {
					key: 0,
					src: z(h).img,
					alt: ""
				}, null, 8, ml)) : (K(), q("span", hl, M(ve(z(h).name)), 1))]), J("div", null, [J("strong", null, M(z(h).name), 1), J("span", null, [
					da(M(z(h).species || "Species not found") + " ", 1),
					z(h).type ? (K(), q(W, { key: 0 }, [da(" - " + M(z(h).type), 1)], 64)) : X("", !0),
					e.isLoadingBaseDraft ? (K(), q(W, { key: 1 }, [da("loading...")], 64)) : X("", !0)
				])])])) : X("", !0)
			]), J("section", gl, [
				n[15] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "2"), J("h2", null, "Career Queue")], -1),
				Y(nl, {
					class: "npc-builder__drop npc-builder__drop--career",
					description: "The last queued career drives the preview image.",
					title: "Drop Career Items",
					onDropData: n[2] ||= (e) => r("careerDrop", e)
				}),
				z(c).length ? (K(), q("ol", _l, [(K(!0), q(W, null, U(z(c), (e, t) => (K(), q("li", { key: e.uuid }, [
					J("div", vl, [e.img ? (K(), q("img", {
						key: 0,
						src: e.img,
						alt: ""
					}, null, 8, yl)) : (K(), q("span", bl, M(ve(e.name)), 1))]),
					J("div", xl, [
						J("strong", null, M(e.name), 1),
						J("span", null, [da(M(e.careerGroup || "Career") + " ", 1), e.level === null ? X("", !0) : (K(), q(W, { key: 0 }, [da(" level " + M(e.level), 1)], 64))]),
						J("dl", Sl, [
							J("div", null, [n[10] ||= J("dt", null, "Characteristics", -1), J("dd", null, M(_e(e.grants.characteristics)), 1)]),
							J("div", null, [n[11] ||= J("dt", null, "Skills", -1), J("dd", null, M(_e(e.grants.skills)), 1)]),
							J("div", null, [n[12] ||= J("dt", null, "Talents", -1), J("dd", null, M(_e(e.grants.talents)), 1)]),
							J("div", null, [n[13] ||= J("dt", null, "Trappings", -1), J("dd", null, M(_e(e.grants.trappings)), 1)])
						])
					]),
					J("label", null, [n[14] ||= J("span", null, "Qty", -1), J("input", {
						value: e.quantity,
						min: "1",
						type: "number",
						onInput: (e) => ge(t, e)
					}, null, 40, Cl)]),
					J("div", wl, [
						J("button", {
							disabled: t === 0,
							title: "Move career earlier",
							type: "button",
							onClick: (e) => z(i).moveCareer(t, -1)
						}, " Up ", 8, Tl),
						J("button", {
							disabled: t === z(c).length - 1,
							title: "Move career later",
							type: "button",
							onClick: (e) => z(i).moveCareer(t, 1)
						}, " Down ", 8, El),
						J("button", {
							type: "button",
							onClick: (e) => z(i).removeCareer(t)
						}, " Remove ", 8, Dl)
					])
				]))), 128))])) : (K(), q("p", Ol, "No careers queued yet."))
			])]),
			J("aside", kl, [J("section", Al, [
				J("button", {
					class: "npc-builder__portrait",
					disabled: !A.value.length,
					title: "Open portrait gallery",
					type: "button",
					onClick: n[3] ||= (e) => T.value = !0
				}, [z(d) ? (K(), q("img", {
					key: 0,
					src: z(d),
					alt: ""
				}, null, 8, Ml)) : z(u) ? (K(), q("strong", Nl, M(ve(z(u).name)), 1)) : (K(), q("span", Pl, "No portrait selected"))], 8, jl),
				z(d) ? (K(), q("p", Fl, [ce.value ? (K(), q("strong", Il, M(ce.value.label), 1)) : X("", !0), J("span", { title: z(d) }, M(z(d)), 9, Ll)])) : X("", !0),
				A.value.length || E.value ? (K(), q("section", Rl, [
					J("div", null, [n[16] ||= J("h2", null, "Portrait", -1), E.value ? (K(), q("span", zl, "Finding assets...")) : (K(), q("span", Bl, M(A.value.length) + " options", 1))]),
					E.value && D.value ? (K(), q("div", Vl, [J("progress", {
						value: le.value,
						max: "100"
					}, null, 8, Hl), J("span", null, M(ue.value), 1)])) : X("", !0),
					J("div", Ul, [(K(!0), q(W, null, U(ae.value, (e) => (K(), q("button", {
						key: e.key,
						"aria-label": Ce(e),
						class: j({ "is-active": e.key === se.value }),
						title: Ce(e),
						type: "button",
						onClick: (t) => xe(e)
					}, [J("img", {
						src: e.img,
						alt: ""
					}, null, 8, Gl)], 10, Wl))), 128)), oe.value > 0 ? (K(), q("button", {
						key: 0,
						class: "npc-builder__portrait-more",
						type: "button",
						onClick: n[4] ||= (e) => T.value = !0
					}, " +" + M(oe.value), 1)) : X("", !0)])
				])) : X("", !0),
				J("label", Kl, [n[17] ||= J("span", null, "NPC name", -1), H(J("input", {
					"onUpdate:modelValue": n[5] ||= (e) => /* @__PURE__ */ L(a) ? a.value = e : null,
					placeholder: z(y),
					type: "text"
				}, null, 8, ql), [[Yo, z(a)]])]),
				z(p).length ? (K(), q("section", Jl, [J("div", null, [n[18] ||= J("h2", null, "Optional Traits", -1), J("span", null, M(z(p).length) + " from base statblock", 1)]), (K(!0), q(W, null, U(z(p), (e) => (K(), q("button", {
					key: e.uuid,
					class: j({ "is-active": fe(e) }),
					type: "button",
					onClick: (t) => be(e)
				}, M(e.name), 11, Yl))), 128))])) : X("", !0),
				te.value.length ? (K(), q("section", Xl, [J("div", null, [n[19] ||= J("h2", null, "Quick Traits", -1), J("span", null, M(te.value.length) + " configured", 1)]), (K(!0), q(W, null, U(te.value, (e) => (K(), q("button", {
					key: e.uuid,
					class: j({ "is-active": de(e) }),
					type: "button",
					onClick: (t) => ye(e)
				}, M(e.name), 11, Zl))), 128))])) : X("", !0),
				J("dl", null, [
					J("div", null, [n[20] ||= J("dt", null, "Build name", -1), J("dd", null, M(z(l)), 1)]),
					J("div", null, [n[21] ||= J("dt", null, "Base actor", -1), J("dd", null, M(z(h)?.name ?? "Not selected"), 1)]),
					J("div", null, [n[22] ||= J("dt", null, "Final career", -1), J("dd", null, M(z(u)?.name ?? "Not queued"), 1)]),
					J("div", null, [n[23] ||= J("dt", null, "Career items", -1), J("dd", null, M(ne.value), 1)]),
					J("div", null, [n[24] ||= J("dt", null, "Apply", -1), J("dd", null, M(z(o).length) + " advance rows, " + M(re.value.length) + " trappings, " + M(z(b).length) + " traits ", 1)]),
					J("div", null, [n[25] ||= J("dt", null, "Extracted grants", -1), J("dd", null, M(z(f).characteristics) + " characteristics, " + M(z(f).skills) + " skills, " + M(z(f).talents) + " talents, " + M(z(f).trappings) + " trappings ", 1)])
				])
			])]),
			Y(Ac, {
				open: T.value,
				title: "Portrait Gallery",
				onClose: n[6] ||= (e) => T.value = !1
			}, {
				default: Pn(() => [J("div", Ql, [J("div", $l, [J("strong", null, M(A.value.length) + " portrait options", 1), E.value ? (K(), q("span", eu, "Finding assets...")) : (K(), q("span", tu, "Click an image to use it for the generated NPC."))]), J("div", nu, [(K(!0), q(W, null, U(A.value, (e) => (K(), q("button", {
					key: e.key,
					class: j({ "is-active": e.key === se.value }),
					title: Ce(e),
					type: "button",
					onClick: (t) => Se(e)
				}, [J("span", iu, [J("img", {
					src: e.img,
					alt: ""
				}, null, 8, au)]), J("span", null, M(e.label), 1)], 10, ru))), 128))])])]),
				_: 1
			}, 8, ["open"])
		]));
	}
}), su = { class: "npc-builder__settings" }, cu = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, lu = {
	key: 1,
	class: "npc-builder__message"
}, uu = { class: "npc-builder__panel" }, du = { class: "npc-builder__folder-setting" }, fu = { class: "npc-builder__field" }, pu = ["value"], mu = { class: "npc-builder__field" }, hu = ["disabled"], gu = { class: "npc-builder__folder-setting" }, _u = { class: "npc-builder__field" }, vu = ["value"], yu = { class: "npc-builder__field" }, bu = ["disabled"], xu = { class: "npc-builder__panel" }, Su = { class: "npc-builder__folder-setting" }, Cu = { class: "npc-builder__field" }, wu = ["value"], Tu = { class: "npc-builder__field" }, Eu = ["disabled"], Du = ["disabled"], Ou = { class: "npc-builder__panel" }, ku = { class: "npc-builder__check" }, Au = { class: "npc-builder__panel" }, ju = { class: "npc-builder__check" }, Mu = { class: "npc-builder__check" }, Nu = { class: "npc-builder__check" }, Pu = { class: "npc-builder__panel" }, Fu = { class: "npc-builder__check" }, Iu = { class: "npc-builder__check" }, Lu = { class: "npc-builder__check" }, Ru = { class: "npc-builder__check" }, zu = { class: "npc-builder__check" }, Bu = { class: "npc-builder__panel" }, Vu = { class: "npc-builder__field" }, Hu = { class: "npc-builder__check" }, Uu = ["disabled"], Wu = ["disabled"], Gu = /* @__PURE__ */ cr({
	__name: "NpcBuilderSettingsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Ec(), { actorFolders: r, itemFolders: i, settings: a } = Ws(n), o = /* @__PURE__ */ R(""), s = /* @__PURE__ */ R(""), c = /* @__PURE__ */ R(!1), l = /* @__PURE__ */ R(""), u = /* @__PURE__ */ R(""), d = /* @__PURE__ */ R("");
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
				n.hydrateSettings(await t.bridge.saveSettings(Ks())), await Promise.all([v(), y()]), d.value = "Settings reset to defaults.";
			} catch (e) {
				s.value = w(e);
			} finally {
				c.value = !1;
			}
		}
		function w(e) {
			return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
		}
		return (e, t) => (K(), q("section", su, [
			s.value ? (K(), q("p", cu, M(s.value), 1)) : d.value ? (K(), q("p", lu, M(d.value), 1)) : X("", !0),
			J("section", uu, [
				t[23] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "1"), J("h2", null, "Actor Sources")], -1),
				J("section", du, [
					J("label", fu, [t[18] ||= J("span", null, "Base actor folder", -1), H(J("select", { "onUpdate:modelValue": t[0] ||= (e) => z(a).baseActorFolderUuid = e }, [t[17] ||= J("option", { value: "" }, "All world actors", -1), (K(!0), q(W, null, U(z(r), (e) => (K(), q("option", {
						key: e.uuid,
						value: e.uuid
					}, M(e.name), 9, pu))), 128))], 512), [[Qo, z(a).baseActorFolderUuid]])]),
					J("label", mu, [t[19] ||= J("span", null, "Create or use by name", -1), H(J("input", {
						"onUpdate:modelValue": t[1] ||= (e) => o.value = e,
						placeholder: "Folder name",
						type: "text"
					}, null, 512), [[Yo, o.value]])]),
					J("button", {
						disabled: c.value || !o.value.trim(),
						type: "button",
						onClick: f
					}, " Save ", 8, hu)
				]),
				J("section", gu, [
					J("label", _u, [t[21] ||= J("span", null, "Output actor folder", -1), H(J("select", { "onUpdate:modelValue": t[2] ||= (e) => z(a).outputActorFolderUuid = e }, [t[20] ||= J("option", { value: "" }, "Foundry default location", -1), (K(!0), q(W, null, U(z(r), (e) => (K(), q("option", {
						key: e.uuid,
						value: e.uuid
					}, M(e.name), 9, vu))), 128))], 512), [[Qo, z(a).outputActorFolderUuid]])]),
					J("label", yu, [t[22] ||= J("span", null, "Create or use by name", -1), H(J("input", {
						"onUpdate:modelValue": t[3] ||= (e) => l.value = e,
						placeholder: "Folder name",
						type: "text"
					}, null, 512), [[Yo, l.value]])]),
					J("button", {
						disabled: c.value || !l.value.trim(),
						type: "button",
						onClick: p
					}, " Save ", 8, bu)
				])
			]),
			J("section", xu, [
				t[27] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "2"), J("h2", null, "Quick Traits")], -1),
				J("section", Su, [
					J("label", Cu, [t[25] ||= J("span", null, "Quick traits folder", -1), H(J("select", { "onUpdate:modelValue": t[4] ||= (e) => z(a).quickTraitFolderUuid = e }, [t[24] ||= J("option", { value: "" }, "No quick traits folder", -1), (K(!0), q(W, null, U(z(i), (e) => (K(), q("option", {
						key: e.uuid,
						value: e.uuid
					}, M(e.name), 9, wu))), 128))], 512), [[Qo, z(a).quickTraitFolderUuid]])]),
					J("label", Tu, [t[26] ||= J("span", null, "Create or use by name", -1), H(J("input", {
						"onUpdate:modelValue": t[5] ||= (e) => u.value = e,
						placeholder: "Folder name",
						type: "text"
					}, null, 512), [[Yo, u.value]])]),
					J("button", {
						disabled: c.value || !u.value.trim(),
						type: "button",
						onClick: m
					}, " Save ", 8, Eu)
				]),
				J("button", {
					disabled: c.value || !z(a).quickTraitFolderUuid,
					type: "button",
					onClick: x
				}, " Import Recommended Quick Traits ", 8, Du)
			]),
			J("section", Ou, [t[29] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "3"), J("h2", null, "Default Naming")], -1), J("label", ku, [H(J("input", {
				"onUpdate:modelValue": t[6] ||= (e) => z(a).includeSpeciesInName = e,
				type: "checkbox"
			}, null, 512), [[Xo, z(a).includeSpeciesInName]]), t[28] ||= J("span", null, "Include species in suggested names", -1)])]),
			J("section", Au, [
				t[33] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "4"), J("h2", null, "Portrait Suggestions")], -1),
				J("label", ju, [H(J("input", {
					"onUpdate:modelValue": t[7] ||= (e) => z(a).searchFoundryPortraitAssets = e,
					type: "checkbox"
				}, null, 512), [[Xo, z(a).searchFoundryPortraitAssets]]), t[30] ||= J("span", null, "Search the Foundry file picker for portrait suggestions", -1)]),
				J("label", Mu, [H(J("input", {
					"onUpdate:modelValue": t[8] ||= (e) => z(a).searchCompendiumPortraitAssets = e,
					type: "checkbox"
				}, null, 512), [[Xo, z(a).searchCompendiumPortraitAssets]]), t[31] ||= J("span", null, "Search Actor and Item compendiums for portrait suggestions", -1)]),
				J("label", Nu, [H(J("input", {
					"onUpdate:modelValue": t[9] ||= (e) => z(a).searchWebPortraitAssets = e,
					disabled: "",
					type: "checkbox"
				}, null, 512), [[Xo, z(a).searchWebPortraitAssets]]), t[32] ||= J("span", null, "Search the web for portrait suggestions (later)", -1)])
			]),
			J("section", Pu, [
				t[39] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "5"), J("h2", null, "Base Actor Features")], -1),
				J("label", Fu, [H(J("input", {
					"onUpdate:modelValue": t[10] ||= (e) => z(a).allowBaseActorCharacteristics = e,
					type: "checkbox"
				}, null, 512), [[Xo, z(a).allowBaseActorCharacteristics]]), t[34] ||= J("span", null, "Show base actor characteristics", -1)]),
				J("label", Iu, [H(J("input", {
					"onUpdate:modelValue": t[11] ||= (e) => z(a).allowBaseActorSkills = e,
					type: "checkbox"
				}, null, 512), [[Xo, z(a).allowBaseActorSkills]]), t[35] ||= J("span", null, "Show base actor skills", -1)]),
				J("label", Lu, [H(J("input", {
					"onUpdate:modelValue": t[12] ||= (e) => z(a).allowBaseActorTalents = e,
					type: "checkbox"
				}, null, 512), [[Xo, z(a).allowBaseActorTalents]]), t[36] ||= J("span", null, "Show base actor talents", -1)]),
				J("label", Ru, [H(J("input", {
					"onUpdate:modelValue": t[13] ||= (e) => z(a).allowBaseActorTrappings = e,
					type: "checkbox"
				}, null, 512), [[Xo, z(a).allowBaseActorTrappings]]), t[37] ||= J("span", null, "Show base actor trappings", -1)]),
				J("label", zu, [H(J("input", {
					"onUpdate:modelValue": t[14] ||= (e) => z(a).allowBaseActorTraits = e,
					type: "checkbox"
				}, null, 512), [[Xo, z(a).allowBaseActorTraits]]), t[38] ||= J("span", null, "Show base actor traits", -1)])
			]),
			J("section", Bu, [
				t[43] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "6"), J("h2", null, "Other Settings")], -1),
				J("label", Vu, [t[41] ||= J("span", null, "Lower career handling", -1), H(J("select", { "onUpdate:modelValue": t[15] ||= (e) => z(a).lowerCareerMode = e }, [...t[40] ||= [
					J("option", { value: "prompt" }, "Prompt when candidates are found", -1),
					J("option", { value: "auto-add-all" }, " Automatically add all lower-tier matches ", -1),
					J("option", { value: "never" }, "Only add dropped careers", -1)
				]], 512), [[Qo, z(a).lowerCareerMode]])]),
				J("label", Hu, [H(J("input", {
					"onUpdate:modelValue": t[16] ||= (e) => z(a).askForLinkedSkillSpecializations = e,
					type: "checkbox"
				}, null, 512), [[Xo, z(a).askForLinkedSkillSpecializations]]), t[42] ||= J("span", null, "Resolve linked career skill repeats separately", -1)]),
				J("button", {
					disabled: c.value,
					type: "button",
					onClick: S
				}, " Save Settings ", 8, Uu),
				J("button", {
					disabled: c.value,
					type: "button",
					onClick: C
				}, " Reset to Defaults ", 8, Wu)
			])
		]));
	}
}), Ku = { class: "npc-builder__stack" }, qu = { class: "npc-builder__panel" }, Ju = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, Yu = { class: "npc-builder__table" }, Xu = { class: "npc-builder__trait-name" }, Zu = { key: 0 }, Qu = { key: 1 }, $u = { class: "npc-builder__trait-config" }, ed = { class: "npc-builder__mini-field" }, td = ["value", "onInput"], nd = {
	key: 0,
	class: "npc-builder__mini-field"
}, rd = ["value", "onChange"], id = ["value"], ad = {
	key: 1,
	class: "npc-builder__mini-field"
}, od = ["value", "onInput"], sd = ["onClick"], cd = { key: 1 }, ld = /* @__PURE__ */ cr({
	__name: "NpcBuilderTraitsTab",
	props: {
		bridge: {},
		difficultyOptions: {}
	},
	setup(e) {
		let t = e, n = Ec(), { traits: r } = Ws(n), i = /* @__PURE__ */ R("");
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
		return (t, n) => (K(), q("section", Ku, [J("section", qu, [
			n[3] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "1"), J("h2", null, "Traits")], -1),
			Y(nl, {
				class: "npc-builder__drop npc-builder__drop--career",
				description: "Add creature traits or NPC trait items.",
				title: "Drop Trait Items",
				onDropData: c
			}),
			i.value ? (K(), q("p", Ju, M(i.value), 1)) : X("", !0),
			J("div", Yu, [n[2] ||= J("div", { class: "npc-builder__table-head npc-builder__table-head--traits" }, [
				J("span", null, "Name"),
				J("span", null, "Source"),
				J("span", null, "Config"),
				J("span")
			], -1), (K(!0), q(W, null, U(z(r), (t) => (K(), q("article", {
				key: t.key,
				class: "npc-builder__trait-row"
			}, [
				J("div", Xu, [
					J("strong", null, M(t.name), 1),
					t.config.rollable ? (K(), q("span", Zu, "Rollable")) : X("", !0),
					t.config.damage ? (K(), q("span", Qu, "Damage")) : X("", !0)
				]),
				J("span", null, M(a(t)), 1),
				J("div", $u, [
					J("label", ed, [J("span", null, M(t.config.damage ? "Damage" : "Specification"), 1), J("input", {
						value: t.config.specification,
						placeholder: "None",
						type: "text",
						onInput: (e) => s(t, "specification", e)
					}, null, 40, td)]),
					t.config.rollable && !t.config.damage ? (K(), q("label", nd, [n[0] ||= J("span", null, "Difficulty", -1), J("select", {
						value: t.config.defaultDifficulty,
						onChange: (e) => s(t, "defaultDifficulty", e)
					}, [(K(!0), q(W, null, U(e.difficultyOptions, (e) => (K(), q("option", {
						key: e.value,
						value: e.value
					}, M(e.label), 9, id))), 128))], 40, rd)])) : X("", !0),
					t.config.damage && t.config.dice ? (K(), q("label", ad, [n[1] ||= J("span", null, "Dice", -1), J("input", {
						value: t.config.dice,
						placeholder: "Optional",
						type: "text",
						onInput: (e) => s(t, "dice", e)
					}, null, 40, od)])) : X("", !0)
				]),
				t.source === "base" ? (K(), q("span", cd)) : (K(), q("button", {
					key: 0,
					type: "button",
					onClick: (e) => o(t)
				}, " Remove ", 8, sd))
			]))), 128))])
		])]));
	}
}), ud = { class: "npc-builder__stack" }, dd = { class: "npc-builder__panel" }, fd = { class: "npc-builder__panel-actions" }, pd = ["disabled"], md = { key: 0 }, hd = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, gd = { class: "npc-builder__table" }, _d = ["checked", "onChange"], vd = { class: "npc-builder__trapping-name" }, yd = { key: 0 }, bd = { class: "npc-builder__trapping-resolution" }, xd = ["value", "onChange"], Sd = {
	key: 0,
	value: ""
}, Cd = ["value"], wd = { key: 1 }, Td = ["value", "onInput"], Ed = ["onClick"], Dd = { key: 1 }, Od = "__blank-item__", kd = /* @__PURE__ */ cr({
	__name: "NpcBuilderTrappingsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Ec(), { trappings: r } = Ws(n), i = /* @__PURE__ */ R(""), a = /* @__PURE__ */ R(!1), o = Q(() => r.value.filter((e) => !e.ignored && e.resolution.status === "unresolved"));
		Cr(() => {
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
			return e.resolution.status === "fallback" ? Od : e.resolution.selectedCandidateUuid;
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
				if (r.value === Od) {
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
		return (e, t) => (K(), q("section", ud, [J("section", dd, [
			t[1] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "1"), J("h2", null, "Trappings")], -1),
			Y(nl, {
				class: "npc-builder__drop npc-builder__drop--career",
				description: "Add weapons, armour, containers, or any other item.",
				title: "Drop Trapping Items",
				onDropData: _
			}),
			J("div", fd, [J("button", {
				disabled: a.value || !o.value.length,
				type: "button",
				onClick: g
			}, M(a.value ? "Resolving..." : "Resolve Trappings"), 9, pd), o.value.length ? (K(), q("span", md, M(o.value.length) + " unresolved ", 1)) : X("", !0)]),
			i.value ? (K(), q("p", hd, M(i.value), 1)) : X("", !0),
			J("div", gd, [t[0] ||= J("div", { class: "npc-builder__table-head npc-builder__table-head--traps" }, [
				J("span", null, "Use"),
				J("span", null, "Name"),
				J("span", null, "Resolution"),
				J("span", null, "Type"),
				J("span", null, "Qty"),
				J("span", null, "Source"),
				J("span")
			], -1), (K(!0), q(W, null, U(z(r), (e) => (K(), q("article", {
				key: e.key,
				class: j(["npc-builder__trapping-row", { "is-ignored": e.ignored }])
			}, [
				J("input", {
					checked: !e.ignored,
					type: "checkbox",
					onChange: (t) => l(e.key, t)
				}, null, 40, _d),
				J("div", vd, [J("strong", null, M(e.name), 1), m(e) ? (K(), q("span", yd, M(m(e)), 1)) : X("", !0)]),
				J("div", bd, [p(e) ? (K(), q("select", {
					key: 0,
					value: d(e),
					onChange: (t) => h(e.key, t)
				}, [
					e.resolution.candidates.length ? (K(), q("option", Sd, " Choose match ")) : X("", !0),
					(K(!0), q(W, null, U(e.resolution.candidates, (e) => (K(), q("option", {
						key: e.uuid,
						value: e.uuid
					}, M(e.name) + " (" + M(e.sourceLabel) + ") ", 9, Cd))), 128)),
					f(e) ? (K(), q("option", {
						key: 1,
						value: Od
					}, " Blank Item ")) : X("", !0)
				], 40, xd)) : (K(), q("span", wd, M(u(e)), 1))]),
				J("span", null, M(e.resolution.selectedItemType || e.itemType || "trapping"), 1),
				J("input", {
					value: e.quantity,
					min: "1",
					type: "number",
					onInput: (t) => c(e.key, t)
				}, null, 40, Td),
				J("span", null, M(s(e)), 1),
				e.source === "custom" ? (K(), q("button", {
					key: 0,
					type: "button",
					onClick: (t) => z(n).removeCustomTrapping(e.key)
				}, " Remove ", 8, Ed)) : (K(), q("span", Dd))
			], 2))), 128))])
		])]));
	}
}), Ad = { class: "npc-builder__subview-stack" }, jd = [
	"checked",
	"disabled",
	"onChange"
], Md = { class: "npc-builder__subview-actions" }, Nd = /* @__PURE__ */ cr({
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
		return (t, r) => (K(), q("div", Ad, [
			J("p", null, M(e.prompt.droppedCareer.name) + " appears to belong to the " + M(e.prompt.droppedCareer.careerGroup) + " career track. The following lower-tier candidates were found. ", 1),
			(K(!0), q(W, null, U(e.candidateGroups, (t) => (K(), q("section", {
				key: t.level,
				class: "npc-builder__candidate-group"
			}, [J("h3", null, "Tier " + M(t.level || "Unknown"), 1), (K(!0), q(W, null, U(t.candidates, (t) => (K(), q("label", {
				key: t.uuid,
				class: j(["npc-builder__candidate-row", { "is-queued": e.isCareerQueued(t.uuid) }])
			}, [J("input", {
				checked: e.isCareerQueued(t.uuid) || e.isLowerCareerSelected(t.uuid),
				disabled: e.isCareerQueued(t.uuid),
				type: "checkbox",
				onChange: (e) => n("lowerCareerSelected", t, e)
			}, null, 40, jd), J("span", null, [J("strong", null, M(t.name), 1), J("small", null, [da(M(t.careerGroup || "Career") + " ", 1), e.isCareerQueued(t.uuid) ? (K(), q(W, { key: 0 }, [da(" already queued ")], 64)) : X("", !0)])])], 2))), 128))]))), 128)),
			J("div", Md, [J("button", {
				type: "button",
				onClick: r[0] ||= (e) => n("addDroppedOnly")
			}, " Add Dropped Only "), J("button", {
				type: "button",
				onClick: r[1] ||= (e) => n("addSelected")
			}, "Add Selected")])
		]));
	}
}), Pd = { class: "npc-builder__subview-stack" }, Fd = { class: "npc-builder__field" }, Id = ["onUpdate:modelValue"], Ld = ["value"], Rd = ["onUpdate:modelValue", "placeholder"], zd = {
	key: 0,
	class: "npc-builder__suggestions"
}, Bd = { key: 0 }, Vd = ["onClick"], Hd = {
	key: 0,
	class: "npc-builder__linked-note"
}, Ud = { class: "npc-builder__subview-actions" }, Wd = /* @__PURE__ */ cr({
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
		return (t, r) => (K(), q("div", Pd, [
			r[4] ||= J("p", null, " Some Career skills need a specialization before they become concrete WFRP skills. Blank rows can be left unresolved and edited later. ", -1),
			(K(!0), q(W, null, U(e.prompt.rows, (t) => (K(), q("section", {
				key: t.resolutionKey,
				class: "npc-builder__resolution-row"
			}, [
				J("div", null, [J("strong", null, M(e.getSkillResolutionLabel(t)), 1), J("small", null, M(t.careerLabel), 1)]),
				J("label", Fd, [r[3] ||= J("span", null, "Specialization", -1), t.options.length > 1 ? H((K(), q("select", {
					key: 0,
					"onUpdate:modelValue": (e) => t.resolvedSpecialization = e
				}, [r[2] ||= J("option", { value: "" }, "Leave unresolved", -1), (K(!0), q(W, null, U(t.options, (e) => (K(), q("option", {
					key: e,
					value: e
				}, M(e), 9, Ld))), 128))], 8, Id)), [[Qo, t.resolvedSpecialization]]) : H((K(), q("input", {
					key: 1,
					"onUpdate:modelValue": (e) => t.resolvedSpecialization = e,
					placeholder: t.suggestedSpecializations.length ? "Type or choose below" : t.specialization,
					type: "text"
				}, null, 8, Rd)), [[Yo, t.resolvedSpecialization]])]),
				e.usesFreeformSkillSpecialization(t) ? (K(), q("div", zd, [t.isLoadingSuggestions ? (K(), q("small", Bd, "Finding known choices.")) : X("", !0), (K(!0), q(W, null, U(t.suggestedSpecializations, (e) => (K(), q("button", {
					key: `${t.resolutionKey}:${e}`,
					type: "button",
					onClick: (r) => n("chooseSkillSpecialization", t, e)
				}, M(e), 9, Vd))), 128))])) : X("", !0)
			]))), 128)),
			e.prompt.linkedRows.length ? (K(), q("div", Hd, M(e.prompt.linkedRows.length) + " linked skill specialization" + M(e.prompt.linkedRows.length === 1 ? "" : "s") + " will reuse earlier choices from this career chain. ", 1)) : X("", !0),
			J("div", Ud, [J("button", {
				type: "button",
				onClick: r[0] ||= (e) => n("addWithoutResolving")
			}, " Add Without Resolving "), J("button", {
				type: "button",
				onClick: r[1] ||= (e) => n("applySpecializations")
			}, " Apply Specializations ")])
		]));
	}
}), Gd = { class: "npc-builder" }, Kd = { class: "npc-builder__header" }, qd = { class: "npc-builder__header-actions" }, Jd = {
	"aria-label": "NPC Builder sections",
	class: "npc-builder__tabs"
}, Yd = ["disabled"], Xd = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, Zd = {
	key: 1,
	class: "npc-builder__message"
}, Qd = /* @__PURE__ */ cr({
	__name: "NpcBuilderApp",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Ec(), { advancements: r, careers: i, finalActorName: a, finalPortraitPath: o, selectedBaseActor: s, selectedBaseActorUuid: c, settings: l, traits: u, trappings: d } = Ws(n), f = /* @__PURE__ */ R("builder"), p = /* @__PURE__ */ R(""), m = /* @__PURE__ */ R(""), h = /* @__PURE__ */ R(!1), g = /* @__PURE__ */ R(!1), _ = /* @__PURE__ */ R(!1), v = /* @__PURE__ */ R(!1), y = /* @__PURE__ */ R(null), b = /* @__PURE__ */ R(null), x = /* @__PURE__ */ R([]), S = Q(() => !!(s.value && i.value.length && !h.value && !g.value)), C = Q(() => {
			let e = y.value;
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
		Cr(async () => {
			_.value = !0;
			try {
				let [e, r, i, a] = await Promise.all([
					t.bridge.loadSettings(),
					t.bridge.listActorFolders(),
					t.bridge.listItemFolders(),
					t.bridge.listTraitDifficultyOptions()
				]);
				n.hydrateSettings(e), n.hydrateActorFolders(r), n.hydrateItemFolders(i), x.value = a, await Promise.all([D(), O()]);
			} catch (e) {
				m.value = he(e);
			} finally {
				_.value = !1;
			}
		}), Vn(c, async (e) => {
			if (m.value = "", !e) {
				n.clearBaseDraftData();
				return;
			}
			v.value = !0;
			try {
				n.hydrateBaseActorDraftData(await t.bridge.loadBaseActorDraftData(e));
			} catch (e) {
				m.value = he(e), n.clearBaseDraftData();
			} finally {
				v.value = !1;
			}
		});
		async function w() {
			if (!s.value || !i.value.length) return;
			h.value = !0, m.value = "", p.value = "Building actor from the selected draft.";
			let e = {
				actorName: a.value,
				advancements: r.value,
				baseActorUuid: s.value.uuid,
				careers: i.value,
				portraitPath: o.value,
				settings: l.value,
				traits: u.value,
				trappings: d.value
			};
			try {
				p.value = `Created ${(await t.bridge.buildNpc(e)).name}.`, n.resetDraft(), f.value = "builder";
			} catch (e) {
				m.value = he(e), p.value = "";
			} finally {
				h.value = !1;
			}
		}
		async function T(e) {
			await ne(e, async (e) => {
				await E(await t.bridge.resolveCareerDrop(e));
			});
		}
		async function E(e) {
			if (l.value.lowerCareerMode === "never") {
				ee([{
					career: e,
					mode: "add-or-increment"
				}], {
					enableLinkedSkillResolution: !1,
					message: ""
				});
				return;
			}
			g.value = !0, p.value = "Checking for lower-tier career candidates.";
			try {
				let n = await t.bridge.findLowerCareerCandidates(e), r = n.filter((e) => !ue(e.uuid));
				if (!r.length) {
					ee([{
						career: e,
						mode: "add-or-increment"
					}], {
						enableLinkedSkillResolution: !1,
						message: ""
					}), p.value = "";
					return;
				}
				if (l.value.lowerCareerMode === "auto-add-all") {
					ee([...r.map((e) => ({
						career: e,
						mode: "add-if-missing"
					})), {
						career: e,
						mode: "add-or-increment"
					}], {
						enableLinkedSkillResolution: !l.value.askForLinkedSkillSpecializations,
						message: `Added ${r.length} lower-tier career candidate${r.length === 1 ? "" : "s"}.`
					});
					return;
				}
				y.value = {
					candidates: n,
					droppedCareer: e,
					selectedUuids: r.map((e) => e.uuid)
				}, p.value = "";
			} finally {
				g.value = !1;
			}
		}
		async function D() {
			n.hydrateBaseActors(await t.bridge.listBaseActors(l.value));
		}
		async function O() {
			n.hydrateQuickTraits(await t.bridge.listQuickTraits(l.value));
		}
		function ee(e, t) {
			let n = ie(e, t);
			if (n.rows.length) {
				b.value = n, ae(b.value);
				return;
			}
			oe(e, t.message);
		}
		function k() {
			let e = y.value;
			if (!e) return;
			let t = e.candidates.filter((t) => e.selectedUuids.includes(t.uuid));
			y.value = null, ee([...t.map((e) => ({
				career: e,
				mode: "add-if-missing"
			})), {
				career: e.droppedCareer,
				mode: "add-or-increment"
			}], {
				enableLinkedSkillResolution: !l.value.askForLinkedSkillSpecializations,
				message: t.length > 0 ? `Added ${t.length} lower-tier career candidate${t.length === 1 ? "" : "s"}.` : ""
			});
		}
		function te() {
			let e = y.value;
			e && (y.value = null, ee([{
				career: e.droppedCareer,
				mode: "add-or-increment"
			}], {
				enableLinkedSkillResolution: !1,
				message: ""
			}));
		}
		async function ne(e, t) {
			m.value = "";
			try {
				await t(e);
			} catch (e) {
				m.value = he(e);
			}
		}
		function re() {
			let e = b.value;
			if (e) {
				for (let t of e.rows) {
					let e = t.resolvedSpecialization.trim() ? Js(t.baseName, t.resolvedSpecialization) : "";
					n.setSkillGrantResolution(t.resolutionKey, e);
				}
				for (let t of e.linkedRows) n.setSkillGrantResolution(t.resolutionKey, n.getSkillGrantResolution(t.linkedFromKey));
				b.value = null, oe(e.entries, e.message);
			}
		}
		function ie(e, t) {
			let n = /* @__PURE__ */ new Map(), r = [], i = [];
			for (let a of e) {
				let e = /* @__PURE__ */ new Map();
				for (let o of Zs(a.career.uuid, a.career.grants.skills)) {
					let s = Xs(o.originalName);
					if (!s) continue;
					let c = Qs(o.originalName), l = n.get(c) ?? [], u = e.get(c) ?? 0, d = t.enableLinkedSkillResolution && l[u] ? l[u] : "";
					if (e.set(c, u + 1), d) {
						r.push({
							linkedFromKey: d,
							resolutionKey: o.resolutionKey
						});
						continue;
					}
					i.push({
						baseName: s.baseName,
						careerLabel: se(a.career),
						isLoadingSuggestions: !1,
						occurrence: o.occurrence,
						options: s.options,
						originalName: s.originalName,
						resolvedSpecialization: ce(s),
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
		function A() {
			let e = b.value;
			e && (b.value = null, oe(e.entries, e.message));
		}
		async function ae(e) {
			await Promise.all(e.rows.map(async (e) => {
				if (fe(e)) {
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
		function oe(e, t) {
			for (let t of e) {
				if (t.mode === "add-if-missing") {
					n.addCareerIfMissing(t.career);
					continue;
				}
				n.addCareer(t.career);
			}
			p.value = t;
		}
		function se(e) {
			return e.level === null ? e.name : `${e.name}, tier ${e.level}`;
		}
		function ce(e) {
			return e.specialization.trim().toLocaleLowerCase() === "any" ? "" : e.options[0] ?? "";
		}
		function le(e) {
			return e.occurrence > 0 ? `${e.originalName}, choice ${e.occurrence + 1}` : e.originalName;
		}
		function ue(e) {
			return i.value.some((t) => t.uuid === e);
		}
		function de(e) {
			return y.value?.selectedUuids.includes(e) ?? !1;
		}
		function fe(e) {
			return e.options.length <= 1 && e.specialization.trim().toLocaleLowerCase() === "any";
		}
		function pe(e, t) {
			e.resolvedSpecialization = t;
		}
		function me(e, t) {
			let n = y.value, r = t.target;
			if (!(!n || !r || ue(e.uuid))) {
				if (r.checked) {
					n.selectedUuids = [...new Set([...n.selectedUuids, e.uuid])];
					return;
				}
				n.selectedUuids = n.selectedUuids.filter((t) => t !== e.uuid);
			}
		}
		function he(e) {
			return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
		}
		return (e, n) => (K(), q("main", Gd, [
			J("header", Kd, [n[5] ||= J("div", null, [J("p", null, "WFRP4e Customizer"), J("h1", null, "NPC Builder")], -1), J("div", qd, [J("nav", Jd, [
				J("button", {
					class: j({ "is-active": f.value === "builder" }),
					type: "button",
					onClick: n[0] ||= (e) => f.value = "builder"
				}, " Build ", 2),
				J("button", {
					class: j({ "is-active": f.value === "advancements" }),
					type: "button",
					onClick: n[1] ||= (e) => f.value = "advancements"
				}, " Advances ", 2),
				J("button", {
					class: j({ "is-active": f.value === "trappings" }),
					type: "button",
					onClick: n[2] ||= (e) => f.value = "trappings"
				}, " Trappings ", 2),
				J("button", {
					class: j({ "is-active": f.value === "traits" }),
					type: "button",
					onClick: n[3] ||= (e) => f.value = "traits"
				}, " Traits ", 2),
				J("button", {
					class: j({ "is-active": f.value === "settings" }),
					type: "button",
					onClick: n[4] ||= (e) => f.value = "settings"
				}, " Settings ", 2)
			]), J("button", {
				disabled: !S.value,
				type: "button",
				onClick: w
			}, " Build NPC ", 8, Yd)])]),
			Y(Ac, {
				open: y.value !== null,
				title: "Add Lower-Tier Careers?",
				onClose: te
			}, {
				default: Pn(() => [y.value ? (K(), ra(Nd, {
					key: 0,
					"candidate-groups": C.value,
					"is-career-queued": ue,
					"is-lower-career-selected": de,
					prompt: y.value,
					onAddDroppedOnly: te,
					onAddSelected: k,
					onLowerCareerSelected: me
				}, null, 8, ["candidate-groups", "prompt"])) : X("", !0)]),
				_: 1
			}, 8, ["open"]),
			Y(Ac, {
				open: b.value !== null,
				title: "Resolve Skill Specializations",
				onClose: A
			}, {
				default: Pn(() => [b.value ? (K(), ra(Wd, {
					key: 0,
					"get-skill-resolution-label": le,
					prompt: b.value,
					"uses-freeform-skill-specialization": fe,
					onAddWithoutResolving: A,
					onApplySpecializations: re,
					onChooseSkillSpecialization: pe
				}, null, 8, ["prompt"])) : X("", !0)]),
				_: 1
			}, 8, ["open"]),
			m.value ? (K(), q("p", Xd, M(m.value), 1)) : p.value ? (K(), q("p", Zd, M(p.value), 1)) : X("", !0),
			f.value === "settings" ? (K(), ra(Gu, {
				key: 2,
				bridge: t.bridge
			}, null, 8, ["bridge"])) : f.value === "advancements" ? (K(), ra(Hc, { key: 3 })) : f.value === "trappings" ? (K(), ra(kd, {
				key: 4,
				bridge: t.bridge
			}, null, 8, ["bridge"])) : f.value === "traits" ? (K(), ra(ld, {
				key: 5,
				bridge: t.bridge,
				"difficulty-options": x.value
			}, null, 8, ["bridge", "difficulty-options"])) : (K(), ra(ou, {
				key: 6,
				bridge: t.bridge,
				"is-loading-actors": _.value,
				"is-loading-base-draft": v.value,
				onCareerDrop: T
			}, null, 8, [
				"bridge",
				"is-loading-actors",
				"is-loading-base-draft"
			]))
		]));
	}
}), $d = ks(), ef = class extends foundry.applications.api.ApplicationV2 {
	#e;
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("wfrp4e-customizer-vue-root", "root"), n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("wfrp4e-customizer-vue-app", "vue-app"), t.replaceChildren(e);
		let r = this.getVueProps() ?? {};
		this.#e = cs(this.getVueComponent(), r), this.#e.use($d), this.#e.mount(e);
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
}, tf = {
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
}, nf = {
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
function rf(e) {
	return e in tf;
}
//#endregion
//#region src/shared/object-readers.ts
function af(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function of(e, t) {
	let n = e;
	for (let e of t) {
		if (!af(n) || !(e in n)) return;
		n = n[e];
	}
	return n;
}
function sf(e, t) {
	let n = of(e, t);
	return typeof n == "string" ? n.trim() : "";
}
function cf(e, t) {
	let n = of(e, t);
	return Array.isArray(n) ? n.filter((e) => typeof e == "string") : [];
}
function lf(e, t, n = 0) {
	for (let n of t) {
		let t = Number(of(e, n));
		if (Number.isFinite(t)) return t;
	}
	return n;
}
function uf(e, t, n = !1) {
	for (let n of t) {
		let t = of(e, n);
		if (typeof t == "boolean") return t;
	}
	return n;
}
function df(e) {
	return Array.isArray(e) ? e.flatMap(df) : typeof e == "string" ? e.split(/[,;\n\r]/).map((e) => e.trim()).filter(Boolean) : af(e) ? Object.values(e).flatMap(df) : [];
}
function ff(e, t, n) {
	let r = e;
	for (let e of t.slice(0, -1)) {
		let t = r[e];
		af(t) || (r[e] = {}), r = r[e];
	}
	r[t[t.length - 1] ?? ""] = n;
}
//#endregion
//#region src/functions/npc-builder/extract-career-grants.ts
var pf = {
	characteristics: [],
	skills: [],
	talents: [],
	trappings: []
};
function mf(e) {
	return {
		characteristics: hf(e),
		skills: gf(e),
		talents: vf(e, [["talents", "value"], ["talents"]]),
		trappings: vf(e, [["trappings", "value"], ["trappings"]])
	};
}
function hf(e) {
	let t = vf(e, [["characteristics", "value"], ["characteristics"]]);
	if (t.length) return t.map(_f);
	let n = of(e, ["characteristics"]);
	if (!af(n)) return [];
	let r = [];
	for (let [e, t] of Object.entries(n)) t && r.push(_f(e));
	return bf(r);
}
function gf(e) {
	return vf(e, [["skills", "value"], ["skills"]], { preserveDuplicates: !0 });
}
function _f(e) {
	let t = e.trim().toLocaleLowerCase();
	if (rf(t)) return tf[t];
	let n = nf[t];
	return n ? tf[n] : e.trim();
}
function vf(e, t, n = {}) {
	for (let r of t) {
		let t = df(of(e, r));
		if (t.length) return n.preserveDuplicates ? yf(t) : bf(t);
	}
	return [];
}
function yf(e) {
	return e.map((e) => e.trim()).filter(Boolean);
}
function bf(e) {
	return [...new Set(yf(e))].sort((e, t) => e.localeCompare(t));
}
Object.freeze(pf);
//#endregion
//#region src/module/foundry/document-guards.ts
function xf(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Actor";
}
function Sf(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Item";
}
function Cf(e, t = "Expected a Foundry Actor.") {
	if (!xf(e)) throw Error(t);
	return e;
}
function wf(e, t = "Expected a Foundry Item.") {
	if (!Sf(e)) throw Error(t);
	return e;
}
function Tf(e, t, n = `Expected a Foundry ${t} Item.`) {
	let r = wf(e, n);
	if (r.type !== t) throw Error(n);
	return r;
}
//#endregion
//#region src/module/wfrp4e/career-index.ts
var Ef = /* @__PURE__ */ new Map(), Df = "idle", Of = null;
function kf() {
	return Of || (Df = "indexing", Ef.clear(), Of = jf().then(() => {
		Df = "ready";
	}).catch((e) => {
		Df = "error", e instanceof Error && e.message, console.warn("wfrp4e-customizer-apps | Career indexing failed.", e);
	}), Of);
}
async function Af(e) {
	return Df === "idle" && kf(), !e.careerGroup || e.level === null ? [] : [...Ef.values()].filter((t) => If(t, e)).sort(Rf);
}
async function jf() {
	Pf(), await Bf();
	for (let e of game.packs ?? []) {
		if (!Ff(e) || !e.getDocuments) continue;
		let t = await e.getDocuments();
		for (let e of t) Sf(e) && e.type === "career" && Ef.set(e.uuid, zf(e));
		await Bf();
	}
}
function Mf(e) {
	return sf(e.system, ["careergroup", "value"]);
}
function Nf(e) {
	let t = of(e.system, ["level", "value"]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
function Pf() {
	for (let e of game.items?.contents ?? []) e.type === "career" && Ef.set(e.uuid, zf(e));
}
function Ff(e) {
	return e.documentName === "Item";
}
function If(e, t) {
	return e.uuid !== t.uuid && e.level !== null && t.level !== null && e.level < t.level && Lf(e.careerGroup) === Lf(t.careerGroup);
}
function Lf(e) {
	return e.trim().toLocaleLowerCase();
}
function Rf(e, t) {
	let n = e.level ?? 0, r = t.level ?? 0;
	return n === r ? e.name.localeCompare(t.name) : n - r;
}
function zf(e) {
	return {
		careerGroup: Mf(e),
		grants: mf(e.system),
		img: e.img ?? "",
		level: Nf(e),
		name: e.name,
		uuid: e.uuid
	};
}
function Bf() {
	return new Promise((e) => {
		globalThis.setTimeout(e, 0);
	});
}
//#endregion
//#region src/module/wfrp4e/skill-specializations.ts
var Vf = /* @__PURE__ */ new Map(), Hf = "idle", Uf = null;
async function Wf(e) {
	let t = Qs(e);
	return t ? (Hf === "idle" && Gf(), Uf && await Uf, [...Vf.get(t) ?? []].sort((e, t) => e.localeCompare(t))) : [];
}
function Gf() {
	return Uf || (Hf = "indexing", Vf.clear(), Uf = Kf().then(() => {
		Hf = "ready";
	}).catch((e) => {
		Hf = "error", e instanceof Error && e.message, console.warn("wfrp4e-customizer-apps | Skill specialization indexing failed.", e);
	}), Uf);
}
async function Kf() {
	Jf(), await Xf();
	for (let e of game.packs ?? []) {
		if (!Yf(e) || !e.getDocuments) continue;
		let t = await e.getDocuments();
		for (let e of t) Sf(e) && qf(e);
		await Xf();
	}
}
function qf(e) {
	if (e.type !== "skill") return;
	let t = Ys(e.name);
	if (!t) return;
	let n = Qs(t.baseName), r = Vf.get(n) ?? /* @__PURE__ */ new Set();
	r.add(t.specialization), Vf.set(n, r);
}
function Jf() {
	for (let e of game.items?.contents ?? []) qf(e);
}
function Yf(e) {
	return e.documentName === "Item";
}
function Xf() {
	return new Promise((e) => {
		globalThis.setTimeout(e, 0);
	});
}
//#endregion
//#region src/module/foundry/item-sources.ts
function Zf(e, t) {
	return {
		img: "systems/wfrp4e/icons/blank.png",
		name: e,
		system: {},
		type: t
	};
}
function Qf(e, t, n) {
	let r = e ? e.toObject() : Zf(t, n);
	return delete r._id, r;
}
function $f(e, t, n) {
	return e.items?.contents.find((e) => e.type === n && np(e.name, t)) ?? null;
}
function ep(e, t, n) {
	return e.items?.contents.find((e) => t && e.uuid === t ? !0 : np(e.name, n)) ?? null;
}
function tp(e, t) {
	return game.items?.contents.find((n) => t.includes(n.type) && np(n.name, e)) ?? null;
}
function np(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/wfrp4e/item-lookup.ts
async function rp(e, t) {
	return await game.wfrp4e?.utility?.findItem?.(e, t) || tp(e, t);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/advancements.ts
async function ip(e, t) {
	let n = {}, r = [], i = [];
	for (let a of t) {
		let t = Math.max(0, Math.floor(a.current));
		if (t <= 0) continue;
		let o = a.baseValue + t;
		if (a.kind === "characteristic") {
			sp(n, a, o);
			continue;
		}
		let s = $f(e, a.name, a.kind);
		if (s) {
			r.push({
				_id: s.id,
				"system.advances.value": o
			});
			continue;
		}
		let c = Qf(await rp(a.name, [a.kind]), a.name, a.kind);
		c.type = a.kind, ff(c, [
			"system",
			"advances",
			"value"
		], o), i.push(c);
	}
	Object.keys(n).length && await e.update(n), r.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", r), i.length && await e.createEmbeddedDocuments("Item", i);
}
function ap(e) {
	let t = [];
	for (let [n, r] of Object.entries(tf)) {
		let i = lf(e.system, [[
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
function op(e, t) {
	return e.items?.contents.filter((e) => e.type === t).map((e) => ({
		current: lf(e.system, [["advances", "value"], ["advances"]]),
		kind: t,
		name: e.name
	})) ?? [];
}
function sp(e, t, n) {
	let r = nf[t.name.trim().toLocaleLowerCase()];
	r && (e[`system.characteristics.${r}.advances`] = n);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/drop-data.ts
function cp(e) {
	try {
		return JSON.parse(e);
	} catch {
		throw Error("Foundry drop data could not be read.");
	}
}
//#endregion
//#region src/functions/npc-builder/recommended-quick-traits.ts
var lp = [
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
async function up(e) {
	return _p(await gp(e, "Actor"));
}
async function dp(e) {
	return _p(await gp(e, "Item"));
}
function fp() {
	return game.folders.contents.filter((e) => e.type === "Actor").map(_p).sort((e, t) => e.name.localeCompare(t.name));
}
function pp() {
	return game.folders.contents.filter((e) => e.type === "Item").map(_p).sort((e, t) => e.name.localeCompare(t.name));
}
function mp(e) {
	return e ? game.folders.contents.find((t) => t.uuid === e) ?? null : null;
}
function hp(e) {
	let t = mp(e);
	return t?.type === "Item" ? t : null;
}
async function gp(e, t) {
	let n = e.trim();
	if (!n) throw Error("Enter a folder name first.");
	let r = game.folders.contents.find((e) => e.type === t && vp(e.name, n));
	if (r) return r;
	let i = await Folder.create({
		name: n,
		type: t
	});
	if (!i) throw Error("Foundry did not create the folder.");
	return i;
}
function _p(e) {
	return {
		name: e.name,
		uuid: e.uuid
	};
}
function vp(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits.ts
var yp = [
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
async function bp(e, t) {
	let n = [], r = [], i = [];
	for (let a of t) {
		let t = a.source === "base" ? ep(e, a.sourceUuid, a.name) : $f(e, a.name, "trait");
		if (a.ignored) {
			t && i.push(t.id);
			continue;
		}
		if (t) {
			n.push(Ap(t.id, a.config));
			continue;
		}
		let o = Qf(a.sourceUuid ? await Fp(a.sourceUuid) : await rp(a.name, ["trait"]), a.name, "trait");
		o.type = "trait", ff(o, ["system", "disabled"], !1), kp(o, a.config), r.push(o);
	}
	i.length && e.deleteEmbeddedDocuments && await e.deleteEmbeddedDocuments("Item", i), n.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", n), r.length && await e.createEmbeddedDocuments("Item", r);
}
async function xp(e) {
	let t = hp(e.quickTraitFolderUuid);
	if (!t) throw Error("Choose a Quick Traits item folder before importing traits.");
	let n = new Set(Pp(e).map((e) => e.name.trim().toLocaleLowerCase()));
	for (let e of lp) {
		if (n.has(e.trim().toLocaleLowerCase())) continue;
		let r = Qf(await rp(e, ["trait"]), e, "trait");
		r.folder = t.id, r.type = "trait", await Item.create(r);
	}
	return ui.notifications?.info("Imported recommended quick traits."), Sp(e);
}
async function Sp(e) {
	return Pp(e).map(Lp).sort((e, t) => e.name.localeCompare(t.name));
}
async function Cp() {
	let e = of(game.wfrp4e?.config, ["difficultyLabels"]);
	if (!af(e)) return yp;
	let t = Object.entries(e).filter((e) => {
		let [t, n] = e;
		return !!t.trim() && typeof n == "string";
	}).map(([e, t]) => ({
		label: t,
		value: e
	}));
	return t.length ? t : yp;
}
function wp(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && !jp(e)).map(Ip) ?? [];
}
function Tp(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && jp(e)).map(Ip) ?? [];
}
function Ep(e) {
	Array.isArray(e.items) && (e.items = e.items.filter((e) => {
		if (typeof e != "object" || !e) return !0;
		let t = e;
		return t.type !== "trait" || !Mp(t);
	}));
}
async function Dp(e) {
	let t = cp(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Trait item here.");
	let n = Tf(await fromUuid(t.uuid), "trait", "Drop a Foundry Trait item here.");
	return {
		config: Op(n),
		ignored: !1,
		key: `custom:${n.uuid}`,
		name: n.name,
		source: "custom",
		sourceUuid: n.uuid
	};
}
function Op(e) {
	return {
		...Gs(),
		attackType: Rp(e.system, ["rollable", "attackType"]) || "melee",
		bonusCharacteristic: Rp(e.system, ["rollable", "bonusCharacteristic"]),
		damage: uf(e.system, [["rollable", "damage"]]),
		defaultDifficulty: Rp(e.system, ["rollable", "defaultDifficulty"]) || "challenging",
		dice: Rp(e.system, ["rollable", "dice"]),
		rollable: uf(e.system, [["rollable", "value"]]),
		skill: Rp(e.system, ["rollable", "skill"]),
		sl: uf(e.system, [["rollable", "SL"]], !0),
		specification: Rp(e.system, ["specification", "value"])
	};
}
function kp(e, t) {
	ff(e, [
		"system",
		"specification",
		"value"
	], t.specification), t.rollable && !t.damage && ff(e, [
		"system",
		"rollable",
		"defaultDifficulty"
	], t.defaultDifficulty), t.damage && t.dice && ff(e, [
		"system",
		"rollable",
		"dice"
	], t.dice);
}
function Ap(e, t) {
	return {
		_id: e,
		"system.specification.value": t.specification,
		...t.rollable && !t.damage ? { "system.rollable.defaultDifficulty": t.defaultDifficulty } : {},
		...t.damage && t.dice ? { "system.rollable.dice": t.dice } : {}
	};
}
function jp(e) {
	return uf(e.system, [["disabled"], ["disabled", "value"]]);
}
function Mp(e) {
	return uf(e.system, [["disabled"], ["disabled", "value"]]);
}
function Np(e, t) {
	return t.quickTraitFolderUuid ? e.folder?.uuid === t.quickTraitFolderUuid : !1;
}
function Pp(e) {
	return game.items?.contents.filter((t) => t.type === "trait" && Np(t, e)) ?? [];
}
async function Fp(e) {
	let t = await fromUuid(e);
	return Sf(t) ? t : null;
}
function Ip(e) {
	return {
		config: Op(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
function Lp(e) {
	return {
		config: Op(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
function Rp(e, t) {
	let n = of(e, t);
	return typeof n == "string" ? n.trim() : typeof n == "number" ? String(n) : "";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/trappings.ts
var zp = [
	"ammunition",
	"armour",
	"container",
	"money",
	"trapping",
	"weapon"
];
async function Bp(e, t) {
	let n = [], r = [], i = [];
	for (let a of t) {
		let t = a.source === "base" ? ep(e, a.sourceUuid, a.name) : null;
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
		let o = await Kp(a), s = a.resolution.selectedItemType || a.itemType || "trapping", c = Qf(o, a.resolution.selectedName || a.name, s);
		c.type = s || c.type || "trapping", ff(c, [
			"system",
			"quantity",
			"value"
		], a.quantity), r.push(c);
	}
	i.length && e.deleteEmbeddedDocuments && await e.deleteEmbeddedDocuments("Item", i), n.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", n), r.length && await e.createEmbeddedDocuments("Item", r);
}
async function Vp(e) {
	return ic(e, await qp());
}
async function Hp(e) {
	let t = cp(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Item here.");
	let n = wf(await fromUuid(t.uuid), "Drop a Foundry Item here.");
	return {
		ignored: !1,
		itemType: n.type,
		key: `custom:${n.uuid}`,
		name: n.name,
		quantity: Wp(n),
		resolution: nc({
			itemType: n.type,
			name: n.name,
			uuid: n.uuid
		}),
		source: "custom",
		sourceUuid: n.uuid
	};
}
function Up(e) {
	let t = Gp();
	return e.items?.contents.filter((e) => t.includes(e.type)).map((e) => ({
		itemType: e.type,
		name: e.name,
		quantity: Wp(e),
		uuid: e.uuid
	})) ?? [];
}
function Wp(e) {
	return lf(e.system, [["quantity", "value"], ["quantity"]]) || 1;
}
function Gp() {
	let e = cf(game.wfrp4e?.config, ["trappingItems"]);
	return e.length ? e : zp;
}
async function Kp(e) {
	if (e.sourceUuid) {
		let t = await fromUuid(e.sourceUuid);
		return Sf(t) ? t : null;
	}
	if (e.resolution.selectedCandidateUuid) {
		let t = await fromUuid(e.resolution.selectedCandidateUuid);
		return Sf(t) ? t : null;
	}
	return e.resolution.status === "fallback" ? null : rp(e.resolution.selectedName || e.name, Gp());
}
async function qp() {
	let e = [], t = Gp();
	for (let n of game.items?.contents ?? []) t.includes(n.type) && e.push(Zp(n, "World"));
	for (let n of game.packs ?? []) {
		if (!Xp(n)) continue;
		let r = await Jp(n, t);
		if (r.length) {
			e.push(...r);
			continue;
		}
		if (!n.getDocuments) continue;
		let i = await n.getDocuments();
		for (let r of i) Sf(r) && t.includes(r.type) && e.push(Zp(r, n.title ?? "Compendium"));
	}
	return e;
}
async function Jp(e, t) {
	return e.getIndex ? ((await e.getIndex({ fields: ["name", "type"] })).contents ?? []).filter((n) => !!(n.name && n.type && Yp(e, n) && t.includes(n.type))).map((t) => ({
		itemType: t.type ?? "trapping",
		name: t.name ?? "",
		sourceLabel: e.title ?? "Compendium",
		uuid: Yp(e, t)
	})) : [];
}
function Yp(e, t) {
	return t.uuid ? t.uuid : t._id && e.getUuid ? e.getUuid(t._id) : "";
}
function Xp(e) {
	return e.documentName === "Item";
}
function Zp(e, t) {
	return {
		itemType: e.type,
		name: e.name,
		sourceLabel: t,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/actors.ts
function Qp(e) {
	return game.actors.contents.filter((t) => im(t, e)).map(tm);
}
async function $p(e) {
	let t = Cf(await fromUuid(e));
	return {
		advancements: [
			...ap(t),
			...op(t, "skill"),
			...op(t, "talent")
		],
		optionalTraits: Tp(t),
		traits: wp(t),
		trappings: Up(t)
	};
}
async function em(e) {
	let t = cp(e);
	if (t.type !== "Actor") throw Error("Drop a Foundry Actor here.");
	let n = null;
	return t.uuid ? n = await fromUuid(t.uuid) : t.id && (n = game.actors.get(t.id)), tm(Cf(n));
}
function tm(e) {
	return {
		img: e.img ?? "",
		name: e.name,
		prototypeTokenImg: rm(e),
		species: nm(e),
		type: e.type,
		uuid: e.uuid
	};
}
function nm(e) {
	return sf(e.system, [
		"details",
		"species",
		"value"
	]) || sf(e.system, ["details", "species"]) || sf(e.system, [
		"details",
		"race",
		"value"
	]) || sf(e.system, [
		"details",
		"ancestry",
		"value"
	]);
}
function rm(e) {
	return sf(e, [
		"prototypeToken",
		"texture",
		"src"
	]) || sf(e.toObject(), [
		"prototypeToken",
		"texture",
		"src"
	]);
}
function im(e, t) {
	return t.baseActorFolderUuid ? e.folder?.uuid === t.baseActorFolderUuid : !0;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/build-npc.ts
async function am(e) {
	let t = await om(e);
	if (!t) throw Error("Foundry did not create the NPC Actor.");
	let n = sm(e), r = e.careers.at(-1), i = {
		name: n,
		"prototypeToken.name": n
	}, a = e.portraitPath || r?.img || "";
	return a && (i.img = a, i["prototypeToken.texture.src"] = a), await t.update(i), await ip(t, e.advancements), await bp(t, e.traits), await Bp(t, e.trappings), t.sheet?.render(!0), ui.notifications?.info(`Created NPC "${n}".`), {
		name: n,
		uuid: t.uuid
	};
}
async function om(e) {
	let t = Cf(await fromUuid(e.baseActorUuid)).toObject(), n = mp(e.settings.outputActorFolderUuid);
	return delete t._id, delete t.folder, t.type = "npc", Ep(t), n && (t.folder = n.id), Actor.create(t);
}
function sm(e) {
	if (!e.settings.includeSpeciesInName) return e.actorName;
	let t = game.actors.contents.find((t) => t.uuid === e.baseActorUuid), n = t ? nm(t) : "";
	return !n || e.actorName.toLocaleLowerCase().includes(n.toLocaleLowerCase()) ? e.actorName : `${n} ${e.actorName}`;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/careers.ts
async function cm(e) {
	let t = cp(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a WFRP Career item here.");
	return lm(Tf(await fromUuid(t.uuid), "career", "Drop a WFRP Career item here."));
}
function lm(e) {
	return {
		careerGroup: um(e),
		grants: mf(e.system),
		img: e.img ?? "",
		level: dm(e),
		name: e.name,
		uuid: e.uuid
	};
}
function um(e) {
	return sf(e.system, ["careergroup", "value"]);
}
function dm(e) {
	let t = of(e.system, ["level", "value"]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits.ts
var fm = [
	".webp",
	".png",
	".jpg",
	".jpeg",
	".gif"
];
async function pm(e, t) {
	let n = Kc(e);
	if (!n.length) return [];
	let r = {
		candidates: [],
		maxDirectoryBudget: 0,
		searchTerms: n,
		seenPaths: /* @__PURE__ */ new Set(),
		visitedDirectories: 0
	};
	return e.includeCompendiumAssets && (mm(r, t), await hm(r, t)), e.includeFilePickerAssets && await _m(r, t), Sm(t, r, {
		currentLocation: "Portrait search complete",
		maxDirectories: r.maxDirectoryBudget,
		phase: "ready"
	}), r.candidates;
}
function mm(e, t) {
	Sm(t, e, {
		currentLocation: "World Actors and Items",
		maxDirectories: 0,
		phase: "world-documents"
	});
	for (let t of game.actors.contents) gm(e, {
		imagePaths: [{
			label: "actor image",
			path: t.img ?? ""
		}, {
			label: "token image",
			path: Tm(t)
		}],
		name: t.name,
		sourceLabel: "World Actors",
		sourceKey: t.uuid
	});
	for (let t of game.items?.contents ?? []) gm(e, {
		imagePaths: [{
			label: "item image",
			path: t.img ?? ""
		}],
		name: t.name,
		sourceLabel: "World Items",
		sourceKey: t.uuid
	});
}
async function hm(e, t) {
	Sm(t, e, {
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
		for (let r of n?.contents ?? []) gm(e, {
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
					path: sf(r, [
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
function gm(e, t) {
	let n = t.imagePaths.filter(({ path: e }) => !!e);
	if (wm(t.name, n, e.searchTerms)) for (let r of n) Cm(e, {
		img: r.path,
		key: `foundry-asset:${t.sourceKey}:${r.label}`,
		label: `${t.name || km(r.path)} ${r.label} (${t.sourceLabel})`,
		source: "foundry-asset"
	});
}
async function _m(e, t) {
	let n = bm();
	e.maxDirectoryBudget = 0;
	for (let r of n) await vm(e, r, 0, t);
}
async function vm(e, t, n, r) {
	let i = [t.target];
	for (; i.length;) {
		let a = i.shift() ?? "", o = await xm(t.source, a, t.bucket), s = o.files ?? [], c = o.dirs ?? [];
		e.visitedDirectories += 1, Sm(r, e, {
			currentLocation: Om(t, a),
			maxDirectories: n,
			phase: "filesystem"
		}), ym(e, t, s), i.push(...c);
	}
}
function ym(e, t, n) {
	for (let r of n) qc(r, e.searchTerms) && Cm(e, {
		img: r,
		key: `foundry-asset:${r}`,
		label: Em(r, Dm(t)),
		source: "foundry-asset"
	});
}
function bm() {
	return [{
		source: "data",
		target: ""
	}];
}
async function xm(e, t, n, r = fm) {
	try {
		let i = { wildcard: !1 };
		return r && (i.extensions = r), n && (i.bucket = n), await foundry.applications.apps.FilePicker.implementation.browse(e, t, i);
	} catch {
		return {};
	}
}
function Sm(e, t, n) {
	e?.({
		candidatesFound: t.candidates.length,
		currentLocation: n.currentLocation,
		directoriesVisited: t.visitedDirectories,
		maxDirectories: n.maxDirectories,
		phase: n.phase
	});
}
function Cm(e, t) {
	let n = t.img.trim().toLocaleLowerCase();
	!n || e.seenPaths.has(n) || (e.seenPaths.add(n), e.candidates.push(t));
}
function wm(e, t, n) {
	return Jc(e, n) || t.some(({ path: e }) => Jc(e, n));
}
function Tm(e) {
	return sf(e, [
		"prototypeToken",
		"texture",
		"src"
	]) || sf(e.toObject(), [
		"prototypeToken",
		"texture",
		"src"
	]);
}
function Em(e, t) {
	return `${km(e)} (${t})`;
}
function Dm(e) {
	return e.bucket ? `${e.source}: ${e.bucket}` : e.source;
}
function Om(e, t) {
	let n = Dm(e);
	return t ? `${n} / ${t}` : n;
}
function km(e) {
	return e.split(/[\\/]/).at(-1) ?? e;
}
//#endregion
//#region src/module/settings/foundry-setting-adapter.ts
function Am(e) {
	return e;
}
function jm(t) {
	game.settings.register(e, t.key, {
		config: t.config ?? !1,
		default: t.defaultValue,
		name: t.name,
		scope: t.scope ?? "world",
		type: Object
	});
}
function Mm(t) {
	return t.normalize(game.settings.get(e, t.key));
}
async function Nm(t, n) {
	let r = t.normalize(n);
	return await game.settings.set(e, t.key, r), r;
}
//#endregion
//#region src/module/apps/npc-builder/settings.ts
var Pm = "npcBuilderSettings", Fm = Ks(), Im = Am({
	defaultValue: Fm,
	key: Pm,
	name: "NPC Builder Settings",
	normalize: Bm
});
function Lm() {
	jm(Im);
}
function Rm() {
	return Mm(Im);
}
async function zm(e) {
	return Nm(Im, e);
}
function Bm(e) {
	if (typeof e != "object" || !e) return { ...Fm };
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
		lowerCareerMode: Vm(t.lowerCareerMode) ? t.lowerCareerMode : "prompt",
		outputActorFolderUuid: typeof t.outputActorFolderUuid == "string" ? t.outputActorFolderUuid : "",
		quickTraitFolderUuid: typeof t.quickTraitFolderUuid == "string" ? t.quickTraitFolderUuid : "",
		searchCompendiumPortraitAssets: t.searchCompendiumPortraitAssets ?? !0,
		searchFoundryPortraitAssets: t.searchFoundryPortraitAssets ?? !0,
		searchWebPortraitAssets: t.searchWebPortraitAssets ?? !1
	};
}
function Vm(e) {
	return e === "auto-add-all" || e === "never" || e === "prompt";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/index.ts
var Hm = {
	buildNpc: am,
	ensureActorFolder: up,
	ensureItemFolder: dp,
	findLowerCareerCandidates: Af,
	importRecommendedQuickTraits: xp,
	listActorFolders: async () => fp(),
	listBaseActors: async (e) => Qp(e),
	listFoundryPortraitCandidates: pm,
	listItemFolders: async () => pp(),
	listQuickTraits: Sp,
	listSkillSpecializations: Wf,
	listTraitDifficultyOptions: Cp,
	loadBaseActorDraftData: $p,
	loadSettings: async () => Rm(),
	resolveActorDrop: em,
	resolveCareerDrop: cm,
	resolveTraitDrop: Dp,
	resolveTrapping: Vp,
	resolveTrappingDrop: Hp,
	saveSettings: zm
}, Um = class extends ef {
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
		return Qd;
	}
	getVueProps() {
		return { bridge: Hm };
	}
}, Wm = { class: "customizer-workbench" }, Gm = {
	"aria-label": "Customizer targets",
	class: "customizer-workbench__body"
}, Km = { class: "customizer-workbench__targets" }, qm = /* @__PURE__ */ cr({
	__name: "WorkbenchApp",
	setup(e) {
		let t = [
			"Actor sheets",
			"Item sheets",
			"Reusable dialogs"
		];
		return (e, n) => (K(), q("main", Wm, [n[1] ||= J("header", { class: "customizer-workbench__header" }, [J("p", null, "WFRP4e"), J("h1", null, "Customizer Workbench")], -1), J("section", Gm, [J("div", Km, [(K(), q(W, null, U(t, (e) => J("button", {
			key: e,
			disabled: "",
			type: "button"
		}, M(e), 1)), 64))]), n[0] ||= J("div", { class: "customizer-workbench__empty" }, [J("strong", null, "Vue application shell mounted."), J("span", null, "The first customizer surface can land here.")], -1)])]));
	}
}), Jm = class extends ef {
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
		return qm;
	}
}, Ym = `${e}.debugShapeProbes`, Xm = "wfrp4eCustomizerShapeProbes", Zm = "wfrp4eCustomizerShapePreset", Qm = 2, $m = 12, eh = 6, th = 60, nh = { "npc-builder": [
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
function rh() {
	localStorage.removeItem(Ym), console.info(`${e} | Cleared debug shape probes.`);
}
function ih() {
	return Ch();
}
function ah(e, t = {}) {
	let n = oh(e, t);
	return mh(n), n;
}
function oh(e, t = {}, n) {
	let r = uh(t.maxDepth, Qm, eh), i = uh(t.maxEntries, $m, th), a = kh(e), o = {
		inspectedAt: (/* @__PURE__ */ new Date()).toISOString(),
		label: t.label || e,
		maxDepth: r,
		maxEntries: i,
		path: e,
		value: Fh(a, {
			maxDepth: r,
			maxEntries: i,
			seen: /* @__PURE__ */ new WeakSet()
		})
	};
	return n && (o.hook = n), o;
}
function sh() {
	let t = Ch();
	for (let e of ["init", "setup"]) {
		let n = t.filter((t) => t.hook === e);
		n.length && Hooks.once(e, () => {
			for (let t of n) fh(t, e);
		});
	}
	Hooks.once("ready", () => {
		let t = Ch().filter((e) => (e.hook ?? "ready") === "ready");
		Eh() && console.info(`${e} | Debug shape ready probes discovered: ${t.length}`, window.location.href);
		for (let e of t) fh(e, "ready");
	});
}
function ch(t) {
	let n = t.map(gh);
	localStorage.setItem(Ym, JSON.stringify(n)), console.info(`${e} | Stored ${n.length} debug shape probe(s). Reload Foundry to run init/setup probes.`);
}
function lh(e, t, n) {
	if (t === "at") {
		let t = Number(n[0] ?? 0), r = Number.isFinite(t) ? t : 0;
		return Lh(e).at(r);
	}
	if (t === "findByName") {
		let t = hh(n[0] ?? "");
		return Lh(e).find((e) => hh(xh(e, "name")) === t);
	}
	if (t === "findByType") {
		let t = hh(n[0] ?? "");
		return Lh(e).find((e) => hh(xh(e, "type")) === t);
	}
	if (t === "get") {
		let t = n[0] ?? "";
		if (e instanceof Map) return e.get(t);
		let r = xh(e, "get");
		if (typeof r == "function") return r.call(e, t);
	}
	if (t === "sample") {
		let t = uh(n[0], 3, th);
		return Lh(e).slice(0, t);
	}
	throw Error(`Unsupported path method "${t}".`);
}
function uh(e, t, n) {
	let r = Number(e);
	return Number.isFinite(r) ? Math.max(0, Math.min(n, Math.floor(r))) : t;
}
function dh(e, t) {
	return Object.keys(e).sort().slice(0, t);
}
function fh(t, n) {
	try {
		mh(oh(t.path, t, n));
	} catch (n) {
		console.warn(`${e} | Debug shape probe failed for "${t.path}".`, n);
	}
}
function ph(e) {
	return typeof e == "object" && !!e;
}
function mh(t) {
	console.info(`${e} | Debug shape probe: ${t.label}`, JSON.stringify(t, null, 2));
}
function hh(e) {
	return typeof e == "string" ? e.trim().toLocaleLowerCase() : "";
}
function gh(e) {
	let t = {
		hook: e.hook ?? "ready",
		maxDepth: uh(e.maxDepth, Qm, eh),
		maxEntries: uh(e.maxEntries, $m, th),
		path: e.path.trim()
	};
	return e.label && (t.label = e.label), t;
}
function _h(e) {
	return e.trim() ? e.split(",").map((e) => yh(e.trim())).map(String) : [];
}
function vh(e) {
	let t = e.trim();
	return /^-?\d+$/.test(t) ? Number(t) : yh(t);
}
function yh(e) {
	let t = e.match(/^['"](?<value>.*)['"]$/);
	return t?.groups ? t.groups.value ?? "" : e;
}
function bh(e) {
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
				args: _h(e.groups.args ?? ""),
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
				index: vh(e),
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
function xh(e, t) {
	if (!(!ph(e) && typeof e != "function")) try {
		return e[t];
	} catch {
		return;
	}
}
function Sh() {
	let e = Oh(Ym);
	if (!e) return [];
	try {
		let t = JSON.parse(e);
		return Array.isArray(t) ? t.filter((e) => typeof e == "object" && !!e && typeof e.path == "string").map(gh) : [];
	} catch {
		return [];
	}
}
function Ch() {
	return [...Sh(), ...wh()].map(gh);
}
function wh() {
	let e = [], t = [new URLSearchParams(window.location.search), new URLSearchParams(window.location.hash.replace(/^#/, ""))];
	for (let n of t) {
		let t = n.get(Zm), r = n.get(Xm);
		t && e.push(...nh[t] ?? []), r && e.push(...Th(r));
	}
	return window.location.href.includes(`${Zm}=npc-builder`) && !e.length && e.push(...nh["npc-builder"] ?? []), e;
}
function Th(t) {
	try {
		let e = JSON.parse(decodeURIComponent(t));
		return Array.isArray(e) ? e.filter(Dh) : [];
	} catch (t) {
		return console.warn(`${e} | Could not parse URL shape probes.`, t), [];
	}
}
function Eh() {
	return window.location.href.includes(Xm) || window.location.href.includes(Zm);
}
function Dh(e) {
	return typeof e == "object" && !!e && typeof e.path == "string";
}
function Oh(e) {
	try {
		return localStorage.getItem(e);
	} catch {
		return null;
	}
}
function kh(e) {
	let t = bh(e), n = xh(globalThis, t.root);
	for (let e of t.tokens) {
		if (e.type === "property") {
			n = xh(n, e.key);
			continue;
		}
		if (e.type === "index") {
			n = xh(n, String(e.index));
			continue;
		}
		n = lh(n, e.name, e.args);
	}
	return n;
}
function Ah(e, t) {
	return {
		length: e.length,
		sample: e.slice(0, t.maxEntries).map((e) => Fh(e, Ih(t))),
		type: "array"
	};
}
function jh(e, t) {
	return {
		sample: [...e.entries()].slice(0, t.maxEntries).map(([e, n]) => ({
			key: Fh(e, Ih(t)),
			value: Fh(n, Ih(t))
		})),
		size: e.size,
		type: "Map"
	};
}
function Mh(e) {
	return {
		name: e.name,
		type: "function"
	};
}
function Nh(e, t) {
	if (t.seen.has(e)) return { type: "circular" };
	t.seen.add(e);
	let n = dh(e, t.maxEntries), r = {
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
		let n = xh(e, t);
		typeof n == "string" && (r[t] = n);
	}
	if (t.maxDepth <= 0) return r;
	let i = {};
	for (let r of n) i[r] = Fh(xh(e, r), Ih(t));
	r.properties = i;
	let a = xh(e, "toObject");
	if (typeof a == "function") try {
		r.source = Fh(a.call(e), Ih(t));
	} catch (e) {
		r.source = {
			error: e instanceof Error ? e.message : String(e),
			type: "error"
		};
	}
	return r;
}
function Ph(e) {
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
function Fh(e, t) {
	return !ph(e) && typeof e != "function" ? Ph(e) : typeof e == "function" ? Mh(e) : Array.isArray(e) ? Ah(e, t) : e instanceof Map ? jh(e, t) : Nh(e, t);
}
function Ih(e) {
	return {
		maxDepth: e.maxDepth - 1,
		maxEntries: e.maxEntries,
		seen: e.seen
	};
}
function Lh(e) {
	if (Array.isArray(e)) return e;
	let t = xh(e, "contents");
	return Array.isArray(t) ? t : [];
}
//#endregion
//#region src/module/create-module-api.ts
function Rh() {
	return {
		clearDebugShapeProbes: rh,
		getDebugShapeProbes: ih,
		inspectPath: ah,
		openNpcBuilder: async () => {
			await new Um().render(!0);
		},
		openWorkbench: async () => {
			await new Jm().render(!0);
		},
		setDebugShapeProbes: ch
	};
}
//#endregion
//#region src/module/register-module-menus.ts
function zh() {
	game.settings.registerMenu(e, "workbench", {
		hint: "Open the WFRP4e Customizer Apps workbench.",
		icon: "fa-solid fa-screwdriver-wrench",
		label: "Open Workbench",
		name: "WFRP4e Customizer Apps",
		restricted: !0,
		type: Jm
	}), game.settings.registerMenu(e, "npc-builder", {
		hint: "Build a WFRP4e NPC from a base Actor and Career items.",
		icon: "fa-solid fa-user-plus",
		label: "Open NPC Builder",
		name: "WFRP4e NPC Builder",
		restricted: !0,
		type: Um
	});
}
//#endregion
//#region src/module/register-module-settings.ts
function Bh() {
	Lm();
}
//#endregion
//#region src/module/apps/npc-builder/register-actor-directory-button.ts
var Vh = "wfrp4e-customizer-open-npc-builder";
function Hh() {
	Hooks.on("renderActorDirectory", (e, t) => {
		let n = Gh(t);
		n && Uh(n);
	});
}
function Uh(e) {
	if (e.querySelector(`.${Vh}`)) return;
	let t = Wh(e);
	if (!t) {
		console.warn("wfrp4e-customizer-apps | Could not find Actor Directory button container.");
		return;
	}
	let n = document.createElement("button");
	n.classList.add(Vh), n.type = "button", n.innerHTML = "<i class=\"fa-solid fa-user-plus\" inert></i><span>NPC Builder App</span>", n.addEventListener("click", () => {
		new Um().render(!0);
	}), t.append(n);
}
function Wh(e) {
	return e.querySelector(".directory-header .header-actions") ?? e.querySelector(".directory-header .action-buttons") ?? e.querySelector(".header-actions") ?? e.querySelector(".action-buttons");
}
function Gh(e) {
	return e instanceof HTMLElement ? e : Kh(e) && e[0] instanceof HTMLElement ? e[0] : null;
}
function Kh(e) {
	return typeof e == "object" && !!e && "length" in e;
}
sh(), Hooks.once("init", () => {
	console.info(`${e} | Initializing`), Bh(), zh(), Hh();
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
	n.api = Rh(), kf(), Gf(), console.info(`${e} | Ready`);
});
//#endregion
