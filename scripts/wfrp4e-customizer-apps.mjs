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
}, d = Object.prototype.hasOwnProperty, f = (e, t) => d.call(e, t), p = Array.isArray, m = (e) => C(e) === "[object Map]", h = (e) => C(e) === "[object Set]", g = (e) => C(e) === "[object Date]", _ = (e) => typeof e == "function", v = (e) => typeof e == "string", y = (e) => typeof e == "symbol", b = (e) => typeof e == "object" && !!e, x = (e) => (b(e) || _(e)) && _(e.then) && _(e.catch), S = Object.prototype.toString, C = (e) => S.call(e), w = (e) => C(e).slice(8, -1), T = (e) => C(e) === "[object Object]", E = (e) => v(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ee = /* @__PURE__ */ n(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), D = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, te = /-\w/g, O = D((e) => e.replace(te, (e) => e.slice(1).toUpperCase())), ne = /\B([A-Z])/g, k = D((e) => e.replace(ne, "-$1").toLowerCase()), re = D((e) => e.charAt(0).toUpperCase() + e.slice(1)), ie = D((e) => e ? `on${re(e)}` : ""), A = (e, t) => !Object.is(e, t), ae = (e, ...t) => {
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
var B = null, Nn = null;
function Pn(e) {
	let t = B;
	return B = e, Nn = e && e.type.__scopeId || null, t;
}
function Fn(e, t = B, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && ra(-1);
		let i = Pn(t), a;
		try {
			a = e(...n);
		} finally {
			Pn(i), r._d && ra(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function V(e, t) {
	if (B === null) return e;
	let n = Ra(B), i = e.dirs ||= [];
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
function In(e, t, n, r) {
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
function Ln(e, t) {
	if (Sa) {
		let n = Sa.provides, r = Sa.parent && Sa.parent.provides;
		r === n && (n = Sa.provides = Object.create(r)), n[e] = t;
	}
}
function Rn(e, t, n = !1) {
	let r = Ca();
	if (r || ai) {
		let i = ai ? ai._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && _(t) ? t.call(r && r.proxy) : t;
	}
}
function zn() {
	return !!(Ca() || ai);
}
var Bn = /* @__PURE__ */ Symbol.for("v-scx"), Vn = () => Rn(Bn);
function Hn(e, t, n) {
	return Un(e, t, n);
}
function Un(e, t, n = r) {
	let { immediate: i, deep: o, flush: s, once: c } = n, u = l({}, n), d = t && i || !t && s !== "post", f;
	if (ka) {
		if (s === "sync") {
			let e = Vn();
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
		Li(e, p && p.suspense);
	} : s !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : En(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = dn(e, t, u);
	return ka && (f ? f.push(h) : d && h()), h;
}
function Wn(e, t, n) {
	let r = this.proxy, i = v(e) ? e.includes(".") ? Gn(r, e) : () => r[e] : e.bind(r, r), a;
	_(t) ? a = t : (a = t.handler, n = t);
	let o = Ea(this), s = Un(i, a.bind(r), n);
	return o(), s;
}
function Gn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Kn = /* @__PURE__ */ Symbol("_vte"), qn = (e) => e.__isTeleport, Jn = /* @__PURE__ */ Symbol("_leaveCb"), Yn = /* @__PURE__ */ Symbol("_enterCb");
function Xn() {
	let e = {
		isMounted: !1,
		isLeaving: !1,
		isUnmounting: !1,
		leavingVNodes: /* @__PURE__ */ new Map()
	};
	return wr(() => {
		e.isMounted = !0;
	}), Dr(() => {
		e.isUnmounting = !0;
	}), e;
}
var Zn = [Function, Array], Qn = {
	mode: String,
	appear: Boolean,
	persisted: Boolean,
	onBeforeEnter: Zn,
	onEnter: Zn,
	onAfterEnter: Zn,
	onEnterCancelled: Zn,
	onBeforeLeave: Zn,
	onLeave: Zn,
	onAfterLeave: Zn,
	onLeaveCancelled: Zn,
	onBeforeAppear: Zn,
	onAppear: Zn,
	onAfterAppear: Zn,
	onAppearCancelled: Zn
}, $n = (e) => {
	let t = e.subTree;
	return t.component ? $n(t.component) : t;
}, er = {
	name: "BaseTransition",
	props: Qn,
	setup(e, { slots: t }) {
		let n = Ca(), r = Xn();
		return () => {
			let i = t.default && cr(t.default(), !0), a = i && i.length ? tr(i) : n.subTree ? J() : void 0;
			if (!a) return;
			let o = /* @__PURE__ */ I(e), { mode: s } = o;
			if (r.isLeaving) return ar(a);
			let c = or(a);
			if (!c) return ar(a);
			let l = ir(c, o, r, n, (e) => l = e);
			c.type !== Zi && sr(c, l);
			let u = n.subTree && or(n.subTree);
			if (u && u.type !== Zi && !sa(u, c) && $n(n).type !== Zi) {
				let e = ir(u, o, r, n);
				if (sr(u, e), s === "out-in" && c.type !== Zi) return r.isLeaving = !0, e.afterLeave = () => {
					r.isLeaving = !1, n.job.flags & 8 || n.update(), delete e.afterLeave, u = void 0;
				}, ar(a);
				s === "in-out" && c.type !== Zi ? e.delayLeave = (e, t, n) => {
					let i = rr(r, u);
					i[String(u.key)] = u, e[Jn] = () => {
						t(), e[Jn] = void 0, delete l.delayedLeave, u = void 0;
					}, l.delayedLeave = () => {
						n(), delete l.delayedLeave, u = void 0;
					};
				} : u = void 0;
			} else u &&= void 0;
			return a;
		};
	}
};
function tr(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== Zi) {
			t = n;
			break;
		}
	}
	return t;
}
var nr = er;
function rr(e, t) {
	let { leavingVNodes: n } = e, r = n.get(t.type);
	return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function ir(e, t, n, r, i) {
	let { appear: a, mode: o, persisted: s = !1, onBeforeEnter: c, onEnter: l, onAfterEnter: u, onEnterCancelled: d, onBeforeLeave: f, onLeave: m, onAfterLeave: h, onLeaveCancelled: g, onBeforeAppear: _, onAppear: v, onAfterAppear: y, onAppearCancelled: b } = t, x = String(e.key), S = rr(n, e), C = (e, t) => {
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
			t[Jn] && t[Jn](!0);
			let i = S[x];
			i && sa(e, i) && i.el[Jn] && i.el[Jn](), C(r, [t]);
		},
		enter(t) {
			if (S[x] === e) return;
			let r = l, i = u, o = d;
			if (!n.isMounted) if (a) r = v || l, i = y || u, o = b || d;
			else return;
			let s = !1;
			t[Yn] = (e) => {
				s || (s = !0, C(e ? o : i, [t]), T.delayedLeave && T.delayedLeave(), t[Yn] = void 0);
			};
			let c = t[Yn].bind(null, !1);
			r ? w(r, [t, c]) : c();
		},
		leave(t, r) {
			let i = String(e.key);
			if (t[Yn] && t[Yn](!0), n.isUnmounting) return r();
			C(f, [t]);
			let a = !1;
			t[Jn] = (n) => {
				a || (a = !0, r(), C(n ? g : h, [t]), t[Jn] = void 0, S[i] === e && delete S[i]);
			};
			let o = t[Jn].bind(null, !1);
			S[i] = e, m ? w(m, [t, o]) : o();
		},
		clone(e) {
			let a = ir(e, t, n, r, i);
			return i && i(a), a;
		}
	};
	return T;
}
function ar(e) {
	if (gr(e)) return e = fa(e), e.children = null, e;
}
function or(e) {
	if (!gr(e)) return qn(e.type) && e.children ? tr(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && _(n.default)) return n.default();
	}
}
function sr(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, sr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function cr(e, t = !1, n) {
	let r = [], i = 0;
	for (let a = 0; a < e.length; a++) {
		let o = e[a], s = n == null ? o.key : String(n) + String(o.key == null ? a : o.key);
		o.type === U ? (o.patchFlag & 128 && i++, r = r.concat(cr(o.children, t, s))) : (t || o.type !== Zi) && r.push(s == null ? o : fa(o, { key: s }));
	}
	if (i > 1) for (let e = 0; e < r.length; e++) r[e].patchFlag = -2;
	return r;
}
/* @__NO_SIDE_EFFECTS__ */
function lr(e, t) {
	return _(e) ? /* @__PURE__ */ l({ name: e.name }, t, { setup: e }) : e;
}
function ur(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function dr(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var fr = /* @__PURE__ */ new WeakMap();
function pr(e, t, n, i, a = !1) {
	if (p(e)) {
		e.forEach((e, r) => pr(e, t && (p(t) ? t[r] : t), n, i, a));
		return;
	}
	if (hr(i) && !a) {
		i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && pr(e, t, n, i.component.subTree);
		return;
	}
	let s = i.shapeFlag & 4 ? Ra(i.component) : i.el, c = a ? null : s, { i: l, r: d } = e, m = t && t.r, h = l.refs === r ? l.refs = {} : l.refs, g = l.setupState, y = /* @__PURE__ */ I(g), b = g === r ? o : (e) => dr(h, e) ? !1 : f(y, e), x = (e, t) => !(t && dr(h, t));
	if (m != null && m !== d) {
		if (mr(t), v(m)) h[m] = null, b(m) && (g[m] = null);
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
					i(), fr.delete(e);
				};
				t.id = -1, fr.set(e, t), Li(t, n);
			} else mr(e), i();
		}
	}
}
function mr(e) {
	let t = fr.get(e);
	t && (t.flags |= 8, fr.delete(e));
}
ue().requestIdleCallback, ue().cancelIdleCallback;
var hr = (e) => !!e.type.__asyncLoader, gr = (e) => e.type.__isKeepAlive;
function _r(e, t) {
	yr(e, "a", t);
}
function vr(e, t) {
	yr(e, "da", t);
}
function yr(e, t, n = Sa) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (xr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) gr(e.parent.vnode) && br(r, t, n, e), e = e.parent;
	}
}
function br(e, t, n, r) {
	let i = xr(t, e, r, !0);
	Or(() => {
		u(r[t], i);
	}, n);
}
function xr(e, t, n = Sa, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Ge();
			let i = Ea(n), a = mn(t, n, e, r);
			return i(), Ke(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var Sr = (e) => (t, n = Sa) => {
	(!ka || e === "sp") && xr(e, (...e) => t(...e), n);
}, Cr = Sr("bm"), wr = Sr("m"), Tr = Sr("bu"), Er = Sr("u"), Dr = Sr("bum"), Or = Sr("um"), kr = Sr("sp"), Ar = Sr("rtg"), jr = Sr("rtc");
function Mr(e, t = Sa) {
	xr("ec", e, t);
}
var Nr = /* @__PURE__ */ Symbol.for("v-ndc");
function H(e, t, n, r) {
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
function Pr(e, t, n = {}, r, i) {
	if (B.ce || B.parent && hr(B.parent) && B.parent.ce) {
		let e = Object.keys(n).length > 0;
		return t !== "default" && (n.name = t), W(), aa(U, null, [q("slot", n, r && r())], e ? -2 : 64);
	}
	let a = e[t];
	a && a._c && (a._d = !1), W();
	let o = a && Fr(a(n)), s = n.key || o && o.key, c = aa(U, { key: (s && !y(s) ? s : `_${t}`) + (!o && r ? "_fb" : "") }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), a && a._c && (a._d = !0), c;
}
function Fr(e) {
	return e.some((e) => oa(e) ? !(e.type === Zi || e.type === U && !Fr(e.children)) : !0) ? e : null;
}
var Ir = (e) => e ? Oa(e) ? Ra(e) : Ir(e.parent) : null, Lr = /* @__PURE__ */ l(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Ir(e.parent),
	$root: (e) => Ir(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Kr(e),
	$forceUpdate: (e) => e.f ||= () => {
		En(e.update);
	},
	$nextTick: (e) => e.n ||= wn.bind(e.proxy),
	$watch: (e) => Wn.bind(e)
}), Rr = (e, t) => e !== r && !e.__isScriptSetup && f(e, t), zr = {
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
			else if (Rr(i, t)) return s[t] = 1, i[t];
			else if (a !== r && f(a, t)) return s[t] = 2, a[t];
			else if (f(o, t)) return s[t] = 3, o[t];
			else if (n !== r && f(n, t)) return s[t] = 4, n[t];
			else Vr && (s[t] = 0);
		}
		let u = Lr[t], d, p;
		if (u) return t === "$attrs" && F(e.attrs, "get", ""), u(e);
		if ((d = c.__cssModules) && (d = d[t])) return d;
		if (n !== r && f(n, t)) return s[t] = 4, n[t];
		if (p = l.config.globalProperties, f(p, t)) return p[t];
	},
	set({ _: e }, t, n) {
		let { data: i, setupState: a, ctx: o } = e;
		return Rr(a, t) ? (a[t] = n, !0) : i !== r && f(i, t) ? (i[t] = n, !0) : f(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(n[c] || e !== r && c[0] !== "$" && f(e, c) || Rr(t, c) || f(o, c) || f(i, c) || f(Lr, c) || f(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? f(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Br(e) {
	return p(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Vr = !0;
function Hr(e) {
	let t = Kr(e), n = e.proxy, r = e.ctx;
	Vr = !1, t.beforeCreate && Wr(t.beforeCreate, e, "bc");
	let { data: i, computed: o, methods: s, watch: c, provide: l, inject: u, created: d, beforeMount: f, mounted: m, beforeUpdate: h, updated: g, activated: v, deactivated: y, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: w, render: T, renderTracked: E, renderTriggered: ee, errorCaptured: D, serverPrefetch: te, expose: O, inheritAttrs: ne, components: k, directives: re, filters: ie } = t;
	if (u && Ur(u, r, null), s) for (let e in s) {
		let t = s[e];
		_(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		b(t) && (e.data = /* @__PURE__ */ Rt(t));
	}
	if (Vr = !0, o) for (let e in o) {
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
	if (c) for (let e in c) Gr(c[e], r, n, e);
	if (l) {
		let e = _(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Ln(t, e[t]);
		});
	}
	d && Wr(d, e, "c");
	function A(e, t) {
		p(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (A(Cr, f), A(wr, m), A(Tr, h), A(Er, g), A(_r, v), A(vr, y), A(Mr, D), A(jr, E), A(Ar, ee), A(Dr, S), A(Or, w), A(kr, te), p(O)) if (O.length) {
		let t = e.exposed ||= {};
		O.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	T && e.render === a && (e.render = T), ne != null && (e.inheritAttrs = ne), k && (e.components = k), re && (e.directives = re), te && ur(e);
}
function Ur(e, t, n = a) {
	p(e) && (e = Zr(e));
	for (let n in e) {
		let r = e[n], i;
		i = b(r) ? "default" in r ? Rn(r.from || n, r.default, !0) : Rn(r.from || n) : Rn(r), /* @__PURE__ */ L(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Wr(e, t, n) {
	mn(p(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Gr(e, t, n, r) {
	let i = r.includes(".") ? Gn(n, r) : () => n[r];
	if (v(e)) {
		let n = t[e];
		_(n) && Hn(i, n);
	} else if (_(e)) Hn(i, e.bind(n));
	else if (b(e)) if (p(e)) e.forEach((e) => Gr(e, t, n, r));
	else {
		let r = _(e.handler) ? e.handler.bind(n) : t[e.handler];
		_(r) && Hn(i, r, e);
	}
}
function Kr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => qr(c, e, o, !0)), qr(c, t, o)), b(t) && a.set(t, c), c;
}
function qr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && qr(e, a, n, !0), i && i.forEach((t) => qr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Jr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Jr = {
	data: Yr,
	props: ei,
	emits: ei,
	methods: $r,
	computed: $r,
	beforeCreate: Qr,
	created: Qr,
	beforeMount: Qr,
	mounted: Qr,
	beforeUpdate: Qr,
	updated: Qr,
	beforeDestroy: Qr,
	beforeUnmount: Qr,
	destroyed: Qr,
	unmounted: Qr,
	activated: Qr,
	deactivated: Qr,
	errorCaptured: Qr,
	serverPrefetch: Qr,
	components: $r,
	directives: $r,
	watch: ti,
	provide: Yr,
	inject: Xr
};
function Yr(e, t) {
	return t ? e ? function() {
		return l(_(e) ? e.call(this, this) : e, _(t) ? t.call(this, this) : t);
	} : t : e;
}
function Xr(e, t) {
	return $r(Zr(e), Zr(t));
}
function Zr(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function Qr(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function $r(e, t) {
	return e ? l(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ei(e, t) {
	return e ? p(e) && p(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : l(/* @__PURE__ */ Object.create(null), Br(e), Br(t ?? {})) : t;
}
function ti(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = l(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = Qr(e[r], t[r]);
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
var ai = null, oi = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${O(t)}Modifiers`] || e[`${k(t)}Modifiers`];
function si(e, t, ...n) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || r, a = n, o = t.startsWith("update:"), s = o && oi(i, t.slice(7));
	s && (s.trim && (a = n.map((e) => v(e) ? e.trim() : e)), s.number && (a = n.map(se)));
	let c, l = i[c = ie(t)] || i[c = ie(O(t))];
	!l && o && (l = i[c = ie(k(t))]), l && mn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, mn(u, e, 6, a);
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
	return !e || !s(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), f(e, t[0].toLowerCase() + t.slice(1)) || f(e, k(t)) || f(e, t));
}
function fi(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Pn(e), v, y;
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
			}) : e(f, null)), y = t.props ? s : pi(s);
		}
	} catch (t) {
		$i.length = 0, hn(t, e, 1), v = q(Zi);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(c) && (y = mi(y, a)), b = fa(b, y, !1, !0));
	}
	return n.dirs && (b = fa(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && sr(b, n.transition), v = b, Pn(_), v;
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
	return n === "style" && b(r) && b(i) ? !be(r, i) : r !== i;
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
	n ? e.props = r ? i : /* @__PURE__ */ zt(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function Ci(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ I(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (di(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (f(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = O(o);
					i[t] = Ti(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		wi(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !f(t, a) && ((r = k(a)) === a || !f(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Ti(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !f(t, e)) && (delete a[e], l = !0);
	}
	l && nt(e.attrs, "set", "");
}
function wi(e, t, n, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (t) for (let r in t) {
		if (ee(r)) continue;
		let l = t[r], u;
		a && f(a, u = O(r)) ? !o || !o.includes(u) ? n[u] = l : (c ||= {})[u] = l : di(e.emitsOptions, r) || (!(r in i) || l !== i[r]) && (i[r] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ I(n), i = c || r;
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
					let o = Ea(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === k(n)) && (r = !0));
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
		let t = O(s[e]);
		Oi(t) && (c[t] = r);
	}
	else if (s) for (let e in s) {
		let t = O(e);
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
	return e[0] !== "$" && !ee(e);
}
var ki = (e) => e === "_" || e === "_ctx" || e === "$stable", Ai = (e) => p(e) ? e.map(ma) : [ma(e)], ji = (e, t, n) => {
	if (t._n) return t;
	let r = Fn((...e) => Ai(t(...e)), n);
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
		e ? (Pi(r, t, n), n && oe(r, "_", e, !0)) : Mi(t, r);
	} else t && Ni(e, t);
}, Ii = (e, t, n) => {
	let { vnode: i, slots: a } = e, o = !0, s = r;
	if (i.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? o = !1 : Pi(a, t, n) : (o = !t.$stable, Mi(t, a)), s = t;
	} else t && (Ni(e, t), s = { default: 1 });
	if (o) for (let e in a) !ki(e) && s[e] == null && delete a[e];
}, Li = Yi;
function Ri(e) {
	return zi(e);
}
function zi(e, t) {
	let n = ue();
	n.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = a, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !sa(e, t) && (r = _e(e), pe(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case Xi:
				y(e, t, n, r);
				break;
			case Zi:
				b(e, t, n, r);
				break;
			case Qi:
				e ?? x(t, n, r, o);
				break;
			case U:
				k(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? re(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, be);
		}
		u != null && i ? pr(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && pr(e.ref, null, a, e, !0);
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
				n && n._beginPatch(), te(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, T = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && D(e.children, d, null, r, i, Bi(e, a), s, u), _ && In(e, null, r, "created"), E(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ee(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && va(f, r, e);
		}
		_ && In(e, null, r, "beforeMount");
		let v = Hi(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Li(() => {
			try {
				f && va(f, r, e), v && g.enter(d), _ && In(e, null, r, "mounted");
			} finally {}
		}, i);
	}, E = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Ji(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				E(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, D = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? ha(e[l]) : ma(e[l]), t, n, r, i, a, o, s);
	}, te = (e, t, n, i, a, o, s) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || r, h = t.props || r, g;
		if (n && Vi(n, !1), (g = h.onVnodeBeforeUpdate) && va(g, n, t, e), f && In(t, e, n, "beforeUpdate"), n && Vi(n, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? O(e.dynamicChildren, d, l, n, i, Bi(t, a), o) : s || ce(e, t, l, null, n, i, Bi(t, a), o, !1), u > 0) {
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
		((g = h.onVnodeUpdated) || f) && Li(() => {
			g && va(g, n, t, e), f && In(t, e, n, "updated");
		}, i);
	}, O = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === U || !sa(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
		}
	}, ne = (e, t, n, i, a) => {
		if (t !== n) {
			if (t !== r) for (let r in t) !ee(r) && !(r in n) && c(e, r, t[r], null, a, i);
			for (let r in n) {
				if (ee(r)) continue;
				let o = n[r], s = t[r];
				o !== s && r !== "value" && c(e, r, s, o, a, i);
			}
			"value" in n && c(e, "value", t.value, n.value, a);
		}
	}, k = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), D(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (O(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Ui(e, t, !0)) : ce(e, t, n, f, i, a, s, c, l);
	}, re = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ie(t, n, r, i, a, o, c) : A(e, t, c);
	}, ie = (e, t, n, r, i, a, o) => {
		let s = e.component = xa(e, r, i);
		if (gr(e) && (s.ctx.renderer = be), Aa(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, oe, o), !e.el) {
				let r = s.subTree = q(Zi);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else oe(s, e, t, n, i, a, o);
	}, A = (e, t, n) => {
		let r = t.component = e.component;
		if (hi(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			se(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, oe = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Gi(e);
					if (n) {
						t && (t.el = c.el, se(e, t, o)), n.asyncDep.then(() => {
							Li(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Vi(e, !1), t ? (t.el = c.el, se(e, t, o)) : t = c, n && ae(n), (d = t.props && t.props.onVnodeBeforeUpdate) && va(d, s, t, c), Vi(e, !0);
				let f = fi(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), _e(p), e, i, a), t.el = f.el, u === null && vi(e, f.el), r && Li(r, i), (d = t.props && t.props.onVnodeUpdated) && Li(() => va(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = hr(t);
				if (Vi(e, !1), l && ae(l), !m && (o = c && c.onVnodeBeforeMount) && va(o, d, t), Vi(e, !0), s && Se) {
					let t = () => {
						e.subTree = fi(e), Se(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = fi(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Li(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Li(() => va(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && hr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Li(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ae(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => En(u), Vi(e, !0), l();
	}, se = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Ci(e, t.props, r, n), Ii(e, t.children, n), Ge(), kn(e), Ke();
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
		m & 8 ? (u & 16 && ge(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? de(l, d, n, r, i, a, o, s, c) : ge(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && D(d, n, r, i, a, o, s, c));
	}, le = (e, t, n, r, a, o, s, c, l) => {
		e ||= i, t ||= i;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let r = t[p] = l ? ha(t[p]) : ma(t[p]);
			v(e[p], r, n, null, a, o, s, c, l);
		}
		u > d ? ge(e, a, o, !0, !1, f) : D(t, n, r, a, o, s, c, l, f);
	}, de = (e, t, n, r, a, o, s, c, l) => {
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
		} else if (u > p) for (; u <= f;) pe(e[u], a, o, !0), u++;
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
					pe(r, a, o, !0);
					continue;
				}
				let i;
				if (r.key != null) i = g.get(r.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && sa(r, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? pe(r, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(r, t[i], n, null, a, o, s, c, l), y++);
			}
			let w = x ? Wi(C) : i;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, i = t[e], f = t[e + 1], p = e + 1 < d ? f.el || qi(f) : r;
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
		if (c === U) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) fe(u[e], t, n, r);
			o(e.anchor, t, n);
			return;
		}
		if (c === Qi) {
			S(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) if (r === 0) l.beforeEnter(a), o(a, t, n), Li(() => l.enter(a), i);
		else {
			let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? s(a) : o(a, t, n);
			}, d = () => {
				a._isLeaving && a[Jn](!0), r(a, () => {
					u(), c && c();
				});
			};
			i ? i(a, u, d) : d();
		}
		else o(a, t, n);
	}, pe = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (Ge(), pr(s, null, n, e, !0), Ke()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !hr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && va(_, t, e), u & 6) j(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && In(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, be, r) : l && !l.hasOnce && (a !== U || d > 0 && d & 64) ? ge(l, t, n, !1, !0) : (a === U && d & 384 || !i && u & 16) && ge(c, t, n), r && me(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Li(() => {
			_ && va(_, t, e), h && In(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, me = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === U) {
			he(n, r);
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
	}, he = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, j = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Ki(c), Ki(l), r && ae(r), i.stop(), a && (a.flags |= 8, pe(o, e, t, n)), s && Li(s, t), Li(() => {
			e.isUnmounted = !0;
		}, t);
	}, ge = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) pe(e[o], t, n, r, i);
	}, _e = (e) => {
		if (e.shapeFlag & 6) return _e(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Kn];
		return n ? h(n) : t;
	}, ve = !1, ye = (e, t, n) => {
		let r;
		e == null ? t._vnode && (pe(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, ve ||= (ve = !0, kn(r), An(), !1);
	}, be = {
		p: v,
		um: pe,
		m: fe,
		r: me,
		mt: ie,
		mc: D,
		pc: ce,
		pbc: O,
		n: _e,
		o: e
	}, xe, Se;
	return t && ([xe, Se] = t(be)), {
		render: ye,
		hydrate: xe,
		createApp: ii(ye, xe)
	};
}
function Bi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Vi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Hi(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ui(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (p(r) && p(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = ha(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Ui(t, a)), a.type === Xi && (a.patchFlag === -1 && (a = i[e] = ha(a)), a.el = t.el), a.type === Zi && !a.el && (a.el = t.el);
	}
}
function Wi(e) {
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
function Gi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Gi(t);
}
function Ki(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function qi(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? qi(t.subTree) : null;
}
var Ji = (e) => e.__isSuspense;
function Yi(e, t) {
	t && t.pendingBranch ? p(e) ? t.effects.push(...e) : t.effects.push(e) : On(e);
}
var U = /* @__PURE__ */ Symbol.for("v-fgt"), Xi = /* @__PURE__ */ Symbol.for("v-txt"), Zi = /* @__PURE__ */ Symbol.for("v-cmt"), Qi = /* @__PURE__ */ Symbol.for("v-stc"), $i = [], ea = null;
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
	i: B,
	r: e,
	k: t,
	f: !!n
} : e);
function K(e, t = null, n = null, r = 0, i = null, a = e === U ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && ca(t),
		ref: t && la(t),
		scopeId: Nn,
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
		ctx: B
	};
	return s ? (ga(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= v(n) ? 8 : 16), na > 0 && !o && ea && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && ea.push(c), c;
}
var q = ua;
function ua(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === Nr) && (e = Zi), oa(e)) {
		let r = fa(e, t, !0);
		return n && ga(r, n), na > 0 && !a && ea && (r.shapeFlag & 6 ? ea[ea.indexOf(e)] = r : ea.push(r)), r.patchFlag = -2, r;
	}
	if (za(e) && (e = e.__vccOpts), t) {
		t = da(t);
		let { class: e, style: n } = t;
		e && !v(e) && (t.class = j(e)), b(n) && (/* @__PURE__ */ Gt(n) && !p(n) && (n = l({}, n)), t.style = de(n));
	}
	let o = v(e) ? 1 : Ji(e) ? 128 : qn(e) ? 64 : b(e) ? 4 : _(e) ? 2 : 0;
	return K(e, t, n, r, i, o, a, !0);
}
function da(e) {
	return e ? /* @__PURE__ */ Gt(e) || xi(e) ? l({}, e) : e : null;
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
		patchFlag: t && e.type !== U ? o === -1 ? 16 : o | 16 : o,
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
	return c && r && sr(u, c.clone(u)), u;
}
function pa(e = " ", t = 0) {
	return q(Xi, null, e, t);
}
function J(e = "", t = !1) {
	return t ? (W(), aa(Zi, null, e)) : q(Zi, null, e);
}
function ma(e) {
	return e == null || typeof e == "boolean" ? q(Zi) : p(e) ? q(U, null, e.slice()) : oa(e) ? ha(e) : q(Xi, null, String(e));
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
		!r && !xi(t) ? t._ctx = B : r === 3 && B && (B.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else _(t) ? (t = {
		default: t,
		_ctx: B
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [pa(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function _a(...e) {
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
function va(e, t, n, r = null) {
	mn(e, t, 7, [n, r]);
}
var ya = ni(), ba = 0;
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
var Sa = null, Ca = () => Sa || B, wa, Ta;
{
	let e = ue(), t = (t, n) => {
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
	Si(e, r, a, t), Fi(e, i, n || t);
	let o = a ? ja(e, t) : void 0;
	return t && Ta(!1), o;
}
function ja(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, zr);
	let { setup: r } = n;
	if (r) {
		Ge();
		let n = e.setupContext = r.length > 1 ? La(e) : null, i = Ea(e), a = pn(r, e, 0, [e.props, n]), o = x(a);
		if (Ke(), i(), (o || e.sp) && !hr(e) && ur(e), o) {
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
			let t = r.template || Kr(e).template;
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
		Ge();
		try {
			Hr(e);
		} finally {
			Ke(), t();
		}
	}
}
var Ia = { get(e, t) {
	return F(e, "get", ""), e[t];
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
			if (n in Lr) return Lr[n](e);
		},
		has(e, t) {
			return t in e || t in Lr;
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
}, eo = /* @__PURE__ */ l({}, Qn, $a), to = /* @__PURE__ */ ((e) => (e.displayName = "Transition", e.props = eo, e))((e, { slots: t }) => Ba(nr, io(e), t)), no = (e, t = []) => {
	p(e) ? e.forEach((e) => e(...t)) : e && e(...t);
}, ro = (e) => e ? p(e) ? e.some((e) => e.length > 1) : e.length > 1 : !1;
function io(e) {
	let t = {};
	for (let n in e) n in $a || (t[n] = e[n]);
	if (e.css === !1) return t;
	let { name: n = "v", type: r, duration: i, enterFromClass: a = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: s = `${n}-enter-to`, appearFromClass: c = a, appearActiveClass: u = o, appearToClass: d = s, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: p = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, h = ao(i), g = h && h[0], _ = h && h[1], { onBeforeEnter: v, onEnter: y, onEnterCancelled: b, onLeave: x, onLeaveCancelled: S, onBeforeAppear: C = v, onAppear: w = y, onAppearCancelled: T = b } = t, E = (e, t, n, r) => {
		e._enterCancelled = r, co(e, t ? d : s), co(e, t ? u : o), n && n();
	}, ee = (e, t) => {
		e._isLeaving = !1, co(e, f), co(e, m), co(e, p), t && t();
	}, D = (e) => (t, n) => {
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
		onEnter: D(!1),
		onAppear: D(!0),
		onLeave(e, t) {
			e._isLeaving = !0;
			let n = () => ee(e, t);
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
			ee(e), no(S, [e]);
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
	return ce(e);
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
		Co.test(n) ? e.setProperty(k(r), n.replace(Co, ""), "important") : e[r] = n;
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
	let r = O(t);
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
function Ao(e, t, n, r, i, a = _e(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ko, t.slice(6, t.length)) : e.setAttributeNS(ko, t, n) : n == null || a && !ve(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : y(n) ? String(n) : n);
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
		r === "boolean" ? n = ve(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
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
	return [e[2] === ":" ? e.slice(3) : k(e.slice(2)), t];
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
	t === "class" ? _o(e, r, o) : t === "style" ? So(e, n, r) : s(t) ? c(t) || Fo(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Go(e, t, r, o)) ? (jo(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ao(e, t, r, o, a, t !== "value")) : e._isVueCE && (Ko(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !v(r))) ? jo(e, O(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ao(e, t, r, o));
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
	let r = O(t);
	return Array.isArray(n) ? n.some((e) => O(e) === r) : Object.keys(n).some((e) => O(e) === r);
}
var qo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return p(t) ? (e) => ae(t, e) : t;
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
	return t && (e = e.trim()), n && (e = se(e)), e;
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
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? se(e.value) : e.value, c = t ?? "";
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
				let e = xe(t, n), a = e !== -1;
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
	if (p(t)) i = xe(t, r.props.value) > -1;
	else if (h(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = be(t, is(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var ts = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = h(t);
		Mo(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? se(rs(e)) : rs(e));
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
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = xe(t, o) > -1;
			} else a.selected = t.has(o);
			else if (be(rs(a), t)) {
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
		let r = k(n.key);
		if (t.some((e) => e === r || cs[e] === r)) return e(n);
	}));
}, us = /* @__PURE__ */ l({ patchProp: Wo }, Ya), ds;
function fs() {
	return ds ||= Ri(us);
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
	let e = Ee(!0), t = e.run(() => /* @__PURE__ */ R({})), n = [], r = [], i = Kt({
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
	return !n && De() && Oe(i), i;
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
			let i = Is(d, t, n.detached, () => a()), a = o.run(() => Hn(() => r.state.value[e], (r) => {
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
	let b = (r._a && r._a.runWithContext || Rs)(() => r._e.run(() => (o = Ee()).run(() => t({ action: v }))));
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
		let o = zn();
		return n ||= o ? Rn(ys, null) : null, n && vs(n), n = _s, n._s.has(e) || (i ? qs(e, t, r, n) : Ks(e, r, n)), n._s.get(e);
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
//#region src/functions/npc-builder/xp-cost.ts
var jc = {
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
function Mc(e) {
	let t = {
		characteristics: 0,
		skills: 0,
		talents: 0,
		total: 0
	};
	for (let n of e) {
		let e = Nc(n);
		n.kind === "characteristic" ? t.characteristics += e : n.kind === "skill" ? t.skills += e : t.talents += e;
	}
	return t.total = t.characteristics + t.skills + t.talents, t;
}
function Nc(e) {
	let t = Pc(e);
	return e.kind === "talent" ? Ic(Math.max(0, Math.floor(e.current)), Math.max(0, Math.floor(e.baseAdvances))) : Fc(t, e.kind === "characteristic" ? jc.characteristic : jc.skill);
}
function Pc(e) {
	return Math.max(0, Math.floor(e.baseAdvances + e.current));
}
function Fc(e, t) {
	let n = Math.max(0, Math.floor(e)), r = 0;
	for (let e = 0; e < n; e += 1) {
		let n = Math.min(Math.floor(e / 5), t.length - 1);
		r += t[n] ?? 0;
	}
	return r;
}
function Ic(e, t = 0) {
	let n = Math.max(0, Math.floor(e)), r = Math.max(0, Math.floor(t)), i = 0;
	for (let e = 0; e < n; e += 1) i += (r + e + 1) * 100;
	return i;
}
//#endregion
//#region src/types/wfrp4e/characteristics.ts
var X = {
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
}, Lc = {
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
}, Rc = {
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
function zc(e) {
	return e in Lc;
}
//#endregion
//#region src/state/npc-builder-store.ts
var Bc = Zs(), Vc = {
	advancements: [],
	optionalTraits: [],
	traits: [],
	trappings: []
}, Hc = 5;
function Uc(e, t) {
	return `${e}:${qc(t)}`;
}
function Wc(e) {
	let t = Number(e.level ?? 1);
	return Number.isFinite(t) ? Math.max(1, Math.floor(t)) * Hc : Hc;
}
function Gc(e) {
	return e.name;
}
function Kc(e, t) {
	return e === "characteristic" ? t.allowBaseActorCharacteristics : e === "skill" ? t.allowBaseActorSkills : t.allowBaseActorTalents;
}
function qc(e) {
	return e.trim().toLocaleLowerCase();
}
function Jc(e) {
	return Number.isFinite(e) ? Math.max(1, Math.floor(e)) : 1;
}
function Yc(e, t) {
	return {
		...Xs(),
		...e,
		...t
	};
}
function Xc(e) {
	return e === "auto-add-all" || e === "never" || e === "prompt";
}
function Zc(e) {
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
		lowerCareerMode: Xc(e.lowerCareerMode) ? e.lowerCareerMode : "prompt",
		outputActorFolderUuid: typeof e.outputActorFolderUuid == "string" ? e.outputActorFolderUuid : "",
		quickTraitFolderUuid: typeof e.quickTraitFolderUuid == "string" ? e.quickTraitFolderUuid : "",
		searchCompendiumPortraitAssets: e.searchCompendiumPortraitAssets ?? !0,
		searchFoundryPortraitAssets: e.searchFoundryPortraitAssets ?? !1,
		searchWebPortraitAssets: e.searchWebPortraitAssets ?? !1
	};
}
var Qc = Js("npc-builder", () => {
	let e = /* @__PURE__ */ R(""), t = /* @__PURE__ */ R([]), n = /* @__PURE__ */ R({}), r = /* @__PURE__ */ R({ ...Vc }), i = /* @__PURE__ */ R([]), a = /* @__PURE__ */ R([]), o = /* @__PURE__ */ R([]), s = /* @__PURE__ */ R([]), c = /* @__PURE__ */ R([]), l = /* @__PURE__ */ R([]), u = /* @__PURE__ */ R(""), d = /* @__PURE__ */ R({ ...Bc }), f = /* @__PURE__ */ R(""), p = /* @__PURE__ */ R({}), m = /* @__PURE__ */ R({}), h = /* @__PURE__ */ R({}), g = /* @__PURE__ */ R([]), _ = /* @__PURE__ */ R([]), v = /* @__PURE__ */ R({}), y = /* @__PURE__ */ R({}), b = /* @__PURE__ */ R({}), x = /* @__PURE__ */ R({}), S = /* @__PURE__ */ R({}), C = /* @__PURE__ */ R({}), w = Y(() => i.value.find((e) => e.uuid === f.value) ?? null), T = Y(() => a.value.at(-1) ?? null), E = Y(() => {
		let e = T.value?.name, t = d.value.includeSpeciesInName && w.value?.species ? w.value.species : "";
		return e && t ? `${t} ${e}` : e || (w.value ? `${w.value.name} NPC` : "New NPC");
	}), ee = Y(() => e.value.trim() || E.value), D = Y(() => T.value?.img || w.value?.prototypeTokenImg || w.value?.img || ""), te = Y(() => u.value || D.value), O = Y(() => {
		let e = {
			characteristics: 0,
			skills: 0,
			talents: 0,
			trappings: 0
		};
		for (let t of a.value) e.characteristics += t.grants.characteristics.length * t.quantity, e.skills += t.grants.skills.length * t.quantity, e.talents += t.grants.talents.length * t.quantity, e.trappings += t.grants.trappings.length * t.quantity;
		return e;
	}), ne = Y(() => {
		let e = /* @__PURE__ */ new Map();
		for (let t of r.value.advancements) {
			let n = Uc(t.kind, t.name), r = {
				baseAdvances: t.baseAdvances,
				baseValue: t.current,
				careerValue: 0,
				current: 0,
				includedFromBase: !0,
				includedFromCareer: !1,
				kind: t.kind,
				minimumCurrent: -t.current,
				minimumTotal: 0,
				name: t.name,
				sources: []
			};
			t.characteristicKey && (r.characteristicKey = t.characteristicKey, r.characteristicName = t.characteristicName ?? Lc[t.characteristicKey]), t.kind === "talent" && t.baseAdvances > 0 && r.sources.push({
				count: t.baseAdvances,
				kind: "base",
				label: "Base"
			}), t.talentMaximumFormula && (r.talentMaximumFormula = t.talentMaximumFormula), t.talentMaximumKey && (r.talentMaximumKey = t.talentMaximumKey), e.set(n, r);
		}
		fe(e, "characteristic"), fe(e, "skill");
		let t = he(e);
		return pe(e, t), [...e.values()].filter((e) => e.includedFromCareer || Kc(e.kind, d.value)).map((e) => {
			let r = e.kind === "skill" ? j(e, t) : e.kind === "talent" ? ge(e, t) : e, i = Uc(e.kind, e.name), a = n.value[i] ?? 0, o = r.careerValue + a;
			return {
				...r,
				current: Math.max(r.minimumCurrent, Math.floor(o))
			};
		}).sort((e, t) => e.kind === t.kind ? e.name.localeCompare(t.name) : e.kind.localeCompare(t.kind));
	}), k = Y(() => Mc(ne.value)), re = Y(() => {
		let e = /* @__PURE__ */ new Map();
		if (d.value.allowBaseActorTrappings) for (let t of r.value.trappings) e.set(`base:${t.uuid || qc(t.name)}`, {
			ignored: !1,
			itemType: t.itemType,
			key: `base:${t.uuid || qc(t.name)}`,
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
			let r = `career:${qc(n)}`, i = e.get(r);
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
				resolution: C.value[r] ?? bc(n),
				source: "career",
				sourceUuid: ""
			});
		}
		for (let t of s.value) e.set(t.key, { ...t });
		return [...e.values()].map((e) => {
			let t = S.value[e.key];
			return {
				...e,
				ignored: t?.ignored ?? e.ignored,
				quantity: Jc(t?.quantity ?? e.quantity),
				resolution: C.value[e.key] ?? e.resolution
			};
		}).sort((e, t) => e.source === t.source ? e.name.localeCompare(t.name) : e.source.localeCompare(t.source));
	}), ie = Y(() => {
		let e = /* @__PURE__ */ new Map();
		if (d.value.allowBaseActorTraits) for (let t of r.value.traits) {
			let n = pt(t);
			v.value[n] || e.set(n, {
				config: t.config,
				ignored: !1,
				key: n,
				name: t.name,
				source: "base",
				sourceUuid: t.uuid
			});
		}
		for (let t of o.value) _t(e, t.name) || e.set(t.key, { ...t });
		return [...e.values()].map((e) => ({
			...e,
			config: Yc(e.config, x.value[e.key])
		})).sort((e, t) => e.source === t.source ? e.name.localeCompare(t.name) : e.source.localeCompare(t.source));
	}), A = Y(() => {
		if (!d.value.allowBaseActorTraits) return ie.value;
		let e = [];
		for (let t of r.value.traits) {
			let n = pt(t);
			v.value[n] && e.push({
				config: Yc(t.config, x.value[n]),
				ignored: !0,
				key: n,
				name: t.name,
				source: "base",
				sourceUuid: t.uuid
			});
		}
		return [...e, ...ie.value];
	}), ae = Y(() => {
		let e = /* @__PURE__ */ new Map();
		for (let t of ne.value) {
			if (t.kind !== "talent" || t.baseAdvances + t.current <= 0) continue;
			let n = tc(t.name, "talent");
			n && e.set(n.resolutionKey, gt(n));
		}
		for (let t of ie.value) {
			let n = tc(t.name, "trait");
			n && e.set(n.resolutionKey, gt(n));
		}
		return [...e.values()];
	}), oe = Y(() => ae.value.length > 0), se = Y(() => {
		let e = /* @__PURE__ */ new Map();
		for (let t of g.value) e.set(t.key, {
			...t,
			selected: b.value[t.key] ?? d.value.autoSelectGrantedSpells
		});
		for (let t of _.value) e.set(t.key, {
			...t,
			selected: b.value[t.key] ?? t.selected
		});
		return [...e.values()].sort((e, t) => e.loreName === t.loreName ? e.name.localeCompare(t.name) : e.loreName.localeCompare(t.loreName));
	}), ce = Y(() => se.value.filter((e) => e.selected)), le = Y(() => [...r.value.optionalTraits].map((e) => ({
		config: e.config,
		img: e.img,
		name: e.name,
		uuid: e.uuid
	})).sort((e, t) => e.name.localeCompare(t.name)));
	function ue(e) {
		let t = a.value.find((t) => t.uuid === e.uuid);
		if (t) {
			t.quantity = Jc(t.quantity + 1);
			return;
		}
		a.value.push({
			...e,
			quantity: 1
		});
	}
	function de(e) {
		return a.value.some((t) => t.uuid === e.uuid) ? !1 : (a.value.push({
			...e,
			quantity: 1
		}), !0);
	}
	function fe(e, t) {
		let n = /* @__PURE__ */ new Map();
		for (let e of a.value) {
			let r = Oe(Ve(e, t)), i = Wc(e) / Hc, a = Math.max(0, Jc(e.quantity) - 1) * Hc;
			for (let o of r) {
				let r = Uc(t, o), s = n.get(r);
				if (s) {
					i > s.highestLevel && (s.highestLevel = i, s.highestLevelSource = Gc(e)), a > 0 && s.extraSources.push({
						count: a,
						kind: "career",
						label: `${e.name} extra time`
					});
					continue;
				}
				n.set(r, {
					extraSources: we(e.name, a),
					highestLevel: i,
					highestLevelSource: Gc(e),
					name: o
				});
			}
		}
		for (let r of n.values()) me(e, {
			careerValue: r.highestLevel * Hc + N(r.extraSources),
			kind: t,
			name: r.name,
			sources: [{
				count: r.highestLevel * Hc,
				kind: "career",
				label: r.highestLevelSource
			}, ...r.extraSources]
		});
	}
	function pe(e, t) {
		let n = /* @__PURE__ */ new Map();
		for (let e of a.value) {
			let t = Oe(Ve(e, "talent")), r = Math.max(0, Jc(e.quantity) - 1);
			for (let i of t) {
				let t = Uc("talent", i), a = n.get(t);
				if (a) {
					r > 0 && a.extraSources.push({
						count: r,
						kind: "career",
						label: `${e.name} extra time`
					});
					continue;
				}
				n.set(t, {
					extraSources: we(e.name, r),
					firstSource: e.name,
					name: i
				});
			}
		}
		for (let r of n.values()) me(e, {
			careerValue: 1 + N(r.extraSources),
			kind: "talent",
			name: r.name,
			sources: [{
				count: 1,
				kind: "career",
				label: r.firstSource
			}, ...r.extraSources]
		}, t);
	}
	function me(e, t, n = {}) {
		let r = Uc(t.kind, t.name), i = e.get(r);
		if (i) {
			let e = t.kind === "talent" && i.includedFromBase ? t.sources.slice(1) : t.sources, r = t.kind === "talent" ? _e(i, N(e), n) : t.careerValue;
			i.careerValue = r, i.includedFromCareer = !0, i.sources = [...i.sources.filter((e) => e.kind === "base"), ...Se(e, r)];
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
		if (t.kind === "talent") {
			let e = ye(t.name);
			e?.maximumFormula && (a.talentMaximumFormula = e.maximumFormula), e?.maximumKey && (a.talentMaximumKey = e.maximumKey), a.careerValue = _e(a, t.careerValue, n), a.current = a.careerValue, a.sources = Se(t.sources, a.careerValue);
		}
		e.set(r, { ...a });
	}
	function he(e) {
		let t = {};
		for (let r of e.values()) {
			if (r.kind !== "characteristic") continue;
			let e = Rc[qc(r.name)];
			if (!e) continue;
			let i = n.value[Uc(r.kind, r.name)] ?? 0, a = Math.max(r.minimumCurrent, Math.floor(r.careerValue + i));
			t[e] = Math.max(0, r.baseValue + a);
		}
		return t;
	}
	function j(e, t) {
		let n = M(e.name) ?? Ce(e.name);
		if (!n) return {
			...e,
			minimumCurrent: -e.baseValue,
			minimumTotal: 0
		};
		let r = t[n.characteristicKey] ?? 0, i = Math.max(0, e.baseAdvances), a = [{
			count: r,
			kind: "characteristic",
			label: n.characteristicName
		}];
		return i > 0 && a.push({
			count: i,
			kind: "base",
			label: "Base skill advances"
		}), {
			...e,
			baseValue: r + i,
			characteristicKey: n.characteristicKey,
			characteristicName: n.characteristicName,
			characteristicValue: r,
			minimumCurrent: -i,
			minimumTotal: r,
			sources: [...a, ...e.sources]
		};
	}
	function ge(e, t) {
		let n = ve(e), r = be(n, t);
		return {
			...e,
			minimumCurrent: -e.baseAdvances,
			minimumTotal: 0,
			talentMaximumFormula: n.maximumFormula,
			talentMaximumKey: n.maximumKey,
			talentMaximumLabel: r.label,
			talentMaximumValue: r.value
		};
	}
	function _e(e, t, n) {
		let r = be(ve(e), n);
		return r.value === null ? t : Math.min(t, Math.max(0, r.value - e.baseAdvances));
	}
	function ve(e) {
		let t = ye(e.name);
		return {
			maximumFormula: e.talentMaximumFormula ?? t?.maximumFormula ?? "",
			maximumKey: e.talentMaximumKey ?? t?.maximumKey ?? ""
		};
	}
	function ye(e) {
		return m.value[qc(e)] ?? null;
	}
	function be(e, t) {
		let n = e.maximumKey.trim().toLocaleLowerCase();
		if (!n) return {
			label: "Unknown",
			value: null
		};
		if (n === "none") return {
			label: "-",
			value: null
		};
		if (n === "custom") return xe(e.maximumFormula, t);
		let r = Number(n);
		if (Number.isFinite(r)) {
			let e = Math.max(0, Math.floor(r));
			return {
				label: `${e}`,
				value: e
			};
		}
		if (zc(n)) {
			let e = t[n] ?? 0, r = Math.max(0, Math.floor(e / 10));
			return {
				label: `${Lc[n]} Bonus (${r})`,
				value: r
			};
		}
		return {
			label: e.maximumKey || "Unknown",
			value: null
		};
	}
	function xe(e, t) {
		let n = e.trim(), r = Number(n);
		if (Number.isFinite(r)) {
			let e = Math.max(0, Math.floor(r));
			return {
				label: `${e}`,
				value: e
			};
		}
		let i = n.match(/@characteristics\.([a-z]+)\.bonus/i)?.[1]?.toLocaleLowerCase();
		if (i && zc(i)) {
			let e = t[i] ?? 0, n = Math.max(0, Math.floor(e / 10));
			return {
				label: `${Lc[i]} Bonus (${n})`,
				value: n
			};
		}
		return {
			label: n || "Custom",
			value: null
		};
	}
	function Se(e, t) {
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
	function M(e) {
		return p.value[qc(e)] ?? null;
	}
	function Ce(e) {
		let t = r.value.advancements.find((t) => t.kind === "skill" && mt(t.name, e));
		return t?.characteristicKey ? {
			characteristicKey: t.characteristicKey,
			characteristicName: t.characteristicName ?? Lc[t.characteristicKey],
			skillName: e
		} : null;
	}
	function we(e, t) {
		return t <= 0 ? [] : [{
			count: t,
			kind: "career",
			label: `${e} extra time`
		}];
	}
	function N(e) {
		let t = 0;
		for (let n of e) t += n.count;
		return t;
	}
	function Te(e) {
		s.value.some((t) => t.key === e.key) || s.value.push(e);
	}
	function Ee(e) {
		let t = ut(e.name), n = lt(e.name);
		if (n) {
			nt(n, !0);
			return;
		}
		if (t) {
			F(t, !0);
			return;
		}
		it(e);
	}
	function De(e) {
		let t = g.value.find((t) => ht(t, e));
		if (t) {
			b.value[t.key] = !0;
			return;
		}
		_.value.some((t) => t.key === e.key) || _.value.push({
			...e,
			selected: !0
		});
	}
	function Oe(e) {
		let t = /* @__PURE__ */ new Set(), n = [];
		for (let r of e) {
			let e = qc(r);
			!e || t.has(e) || (t.add(e), n.push(r));
		}
		return n;
	}
	function P() {
		r.value = {
			advancements: [],
			optionalTraits: [],
			traits: [],
			trappings: []
		}, n.value = {}, v.value = {}, x.value = {}, S.value = {}, C.value = {};
	}
	function ke(e) {
		return h.value[e] ?? "";
	}
	function Ae(e) {
		r.value = {
			advancements: [...e.advancements],
			optionalTraits: [...e.optionalTraits],
			traits: [...e.traits],
			trappings: [...e.trappings]
		}, n.value = {}, v.value = {}, x.value = {}, S.value = {};
	}
	function je(e) {
		i.value = [...e].sort((e, t) => e.name.localeCompare(t.name)), f.value && !i.value.some((e) => e.uuid === f.value) && (f.value = "", P());
	}
	function Me(e) {
		d.value = Zc(e);
	}
	function Ne(e) {
		t.value = [...e].sort((e, t) => e.name.localeCompare(t.name)), d.value.baseActorFolderUuid && !t.value.some((e) => e.uuid === d.value.baseActorFolderUuid) && (d.value.baseActorFolderUuid = ""), d.value.outputActorFolderUuid && !t.value.some((e) => e.uuid === d.value.outputActorFolderUuid) && (d.value.outputActorFolderUuid = "");
	}
	function Pe(e) {
		c.value = [...e].sort((e, t) => e.name.localeCompare(t.name)), d.value.quickTraitFolderUuid && !c.value.some((e) => e.uuid === d.value.quickTraitFolderUuid) && (d.value.quickTraitFolderUuid = "");
	}
	function Fe(e) {
		l.value = [...e].sort((e, t) => e.name.localeCompare(t.name));
	}
	function Ie(e) {
		p.value = {
			...p.value,
			...Object.fromEntries(e.map((e) => [qc(e.skillName), e]))
		};
	}
	function Le(e) {
		m.value = {
			...m.value,
			...Object.fromEntries(e.map((e) => [qc(e.talentName), e]))
		};
	}
	function Re(e) {
		g.value = e.map((e) => ({
			...e,
			selected: b.value[e.key] ?? d.value.autoSelectGrantedSpells
		}));
	}
	function ze(e, t) {
		let n = e + t, r = a.value[e];
		!r || n < 0 || n >= a.value.length || (a.value.splice(e, 1), a.value.splice(n, 0, r));
	}
	function Be(e, t) {
		let n = a.value[e];
		!n || e === t || t < 0 || t >= a.value.length || (a.value.splice(e, 1), a.value.splice(t, 0, n));
	}
	function Ve(e, t) {
		return t === "characteristic" ? e.grants.characteristics : t === "skill" ? mc(e.uuid, e.grants.skills).map((e) => h.value[e.resolutionKey] || e.originalName) : e.grants.talents;
	}
	function He(e) {
		let [t] = a.value.splice(e, 1);
		t && Ct(t.uuid);
	}
	function Ue(e) {
		s.value = s.value.filter((t) => t.key !== e), delete S.value[e], delete C.value[e];
	}
	function We(e) {
		o.value = o.value.filter((t) => t.key !== e), delete x.value[e];
	}
	function Ge(e) {
		_.value = _.value.filter((t) => t.key !== e), delete b.value[e];
	}
	function Ke() {
		e.value = "", a.value = [], o.value = [], s.value = [], _.value = [], g.value = [], v.value = {}, y.value = {}, u.value = "", h.value = {}, b.value = {}, f.value = "", P();
	}
	function qe(e) {
		i.value.some((t) => t.uuid === e.uuid) || i.value.push(e), Je(e.uuid);
	}
	function Je(e) {
		let t = e.trim();
		f.value !== t && (u.value = ""), f.value = t;
	}
	function Ye(e) {
		u.value = e;
	}
	function Xe(e, t) {
		let r = Uc(e.kind, e.name), i = Number.isFinite(t) ? t : 0;
		n.value[r] = Math.max(e.minimumCurrent, Math.floor(i)) - e.careerValue;
	}
	function Ze(e, t) {
		let n = Number.isFinite(t) ? t : 0;
		Xe(e, Math.max(e.minimumTotal, Math.floor(n)) - e.baseValue);
	}
	function Qe(e) {
		let t = Uc(e.kind, e.name);
		delete n.value[t];
	}
	function $e() {
		n.value = {};
	}
	function et(e, t) {
		let n = a.value[e];
		n && (n.quantity = Jc(t));
	}
	function tt(e, t) {
		let n = t.trim();
		if (!n) {
			delete h.value[e];
			return;
		}
		h.value[e] = n;
	}
	function F(e, t) {
		rt("quick", e, t);
	}
	function nt(e, t) {
		rt("optional", e, t);
	}
	function rt(e, t, n) {
		let r = `${e}:${t.uuid || qc(t.name)}`;
		if (!n) {
			We(r), ft(t.name, !0);
			return;
		}
		ft(t.name, !1) || o.value.find((e) => e.key === r) || it({
			config: t.config,
			ignored: !1,
			key: r,
			name: t.name,
			source: e,
			sourceUuid: t.uuid
		});
	}
	function it(e) {
		ie.value.some((t) => mt(t.name, e.name)) || o.value.some((t) => t.key === e.key) || o.value.push(e);
	}
	function at(e, t) {
		x.value[e] = {
			...x.value[e],
			...t
		};
	}
	function ot(e, t) {
		if (e.startsWith("base:")) {
			if (!t) {
				delete v.value[e];
				return;
			}
			v.value[e] = !0;
		}
	}
	function st(e, t) {
		b.value[e] = t;
	}
	function ct(e, t) {
		let n = t.trim();
		if (!n) {
			delete y.value[e];
			return;
		}
		y.value[e] = n;
	}
	function lt(e) {
		return le.value.find((t) => mt(t.name, e));
	}
	function ut(e) {
		return l.value.find((t) => mt(t.name, e));
	}
	function dt(e) {
		let t = r.value.traits.find((t) => mt(t.name, e));
		if (!t) return null;
		let n = pt(t);
		return {
			ignored: !!v.value[n],
			key: n
		};
	}
	function ft(e, t) {
		let n = dt(e);
		return n ? (ot(n.key, t), !0) : !1;
	}
	function pt(e) {
		return `base:${e.uuid || qc(e.name)}`;
	}
	function mt(e, t) {
		return qc(e) === qc(t);
	}
	function ht(e, t) {
		return e.sourceUuid && e.sourceUuid === t.sourceUuid ? !0 : mt(e.name, t.name);
	}
	function gt(e) {
		let t = y.value[e.resolutionKey];
		return t ? ic(e, t) : e;
	}
	function _t(e, t) {
		return [...e.values()].some((e) => mt(e.name, t));
	}
	function vt(e, t) {
		S.value[e] = {
			...S.value[e],
			ignored: t
		};
	}
	function yt(e, t) {
		S.value[e] = {
			...S.value[e],
			quantity: Jc(t)
		};
	}
	function bt(e, t) {
		let n = re.value.find((t) => t.key === e), r = n?.resolution.candidates.find((e) => e.uuid === t);
		!n || !r || (C.value[e] = {
			...n.resolution,
			selectedCandidateUuid: r.uuid,
			selectedItemType: r.itemType,
			selectedName: r.name,
			status: n.resolution.status === "matched" ? "matched" : "ambiguous"
		});
	}
	function xt(e) {
		let t = re.value.find((t) => t.key === e);
		if (!t) return;
		let n = vc(t.name, t.itemType);
		C.value[e] = {
			...n,
			candidates: t.resolution.candidates,
			searchTerms: t.resolution.searchTerms
		};
	}
	function St(e, t) {
		C.value[e] = t;
	}
	function Ct(e) {
		let t = `${e}:`;
		for (let e of Object.keys(h.value)) e.startsWith(t) && delete h.value[e];
	}
	return {
		actorName: e,
		actorFolders: t,
		addCareer: ue,
		addCareerIfMissing: de,
		addCustomSpell: De,
		addCustomTrait: Ee,
		addCustomTrapping: Te,
		advancements: ne,
		baseActorDraftData: r,
		baseActors: i,
		buildTraits: A,
		careers: a,
		clearBaseDraftData: P,
		customSpells: _,
		customTraits: o,
		customTrappings: s,
		estimatedNpcXp: k,
		finalActorName: ee,
		finalCareer: T,
		finalPortraitPath: te,
		grantTotals: O,
		hasMagicAccess: oe,
		getSkillGrantResolution: ke,
		hydrateActorFolders: Ne,
		hydrateBaseActorDraftData: Ae,
		hydrateBaseActors: je,
		hydrateItemFolders: Pe,
		hydrateDetectedSpells: Re,
		hydrateQuickTraits: Fe,
		hydrateSettings: Me,
		hydrateSkillCharacteristics: Ie,
		hydrateTalentMaximums: Le,
		itemFolders: c,
		magicGrants: ae,
		magicLoreResolutions: y,
		moveCareer: ze,
		moveCareerToIndex: Be,
		optionalTraits: le,
		quickTraits: l,
		removeCareer: He,
		removeCustomSpell: Ge,
		removeCustomTrait: We,
		removeCustomTrapping: Ue,
		resetDraft: Ke,
		resetAdvancementCurrent: Qe,
		resetAllAdvancementCurrents: $e,
		selectBaseActor: qe,
		selectBaseActorUuid: Je,
		selectPortrait: Ye,
		selectTrappingResolutionCandidate: bt,
		selectedBaseActor: w,
		selectedBaseActorUuid: f,
		selectedPortraitPath: u,
		setAdvancementCurrent: Xe,
		setAdvancementTotal: Ze,
		setBaseTraitIgnored: ot,
		setCareerQuantity: et,
		setMagicGrantLoreResolution: ct,
		setTrappingFallback: xt,
		setOptionalTraitSelected: nt,
		setQuickTraitSelected: F,
		setSkillGrantResolution: tt,
		setSpellSelected: st,
		setTraitConfig: at,
		setTrappingIgnored: vt,
		setTrappingQuantity: yt,
		setTrappingResolution: St,
		settings: d,
		selectedSpells: ce,
		suggestedActorName: E,
		spells: se,
		traits: ie,
		trappings: re
	};
}), $c = { class: "sub-view__header" }, el = /* @__PURE__ */ lr({
	__name: "SubView",
	props: {
		open: { type: Boolean },
		title: {}
	},
	emits: ["close"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ R(null), a = /* @__PURE__ */ R(null), o = null, s = 0;
		Hn(() => n.open, async (e) => {
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
			default: Fn(() => [e.open ? (W(), G("section", {
				key: 0,
				ref_key: "rootElement",
				ref: a,
				class: "sub-view",
				role: "dialog",
				"aria-modal": "true"
			}, [K("div", $c, [K("h2", null, M(e.title), 1), K("button", {
				type: "button",
				class: "sub-view__close",
				onClick: n[0] ||= (e) => r("close")
			}, " Close ")]), K("div", {
				ref_key: "bodyElement",
				ref: i,
				class: "sub-view__body"
			}, [Pr(t.$slots, "default", {}, void 0, !0)], 512)], 512)) : J("", !0)]),
			_: 3
		}));
	}
}), tl = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, nl = /* @__PURE__ */ tl(el, [["__scopeId", "data-v-2a7b49f7"]]), rl = { class: "npc-builder__stack" }, il = { class: "npc-builder__panel" }, al = {
	key: 0,
	class: "npc-builder__panel-actions"
}, ol = { class: "npc-builder__xp-summary" }, sl = { class: "npc-builder__table" }, cl = { class: "npc-builder__advance-controls" }, ll = ["disabled", "onClick"], ul = [
	"aria-label",
	"value",
	"onInput"
], dl = ["onClick"], fl = ["disabled", "onClick"], pl = { class: "npc-builder__panel" }, ml = { class: "npc-builder__table" }, hl = {
	key: 0,
	class: "npc-builder__badge"
}, gl = { class: "npc-builder__advance-controls" }, _l = ["disabled", "onClick"], vl = [
	"aria-label",
	"value",
	"onInput"
], yl = ["onClick"], bl = ["disabled", "onClick"], xl = { class: "npc-builder__panel" }, Sl = { class: "npc-builder__table" }, Cl = { class: "npc-builder__advance-controls" }, wl = ["disabled", "onClick"], Tl = [
	"aria-label",
	"value",
	"onInput"
], El = ["onClick"], Dl = ["disabled", "onClick"], Ol = { class: "npc-builder__maximum-cell" }, kl = {
	key: 0,
	class: "npc-builder__status-pill npc-builder__status-pill--warning"
}, Al = /* @__PURE__ */ lr({
	__name: "NpcBuilderAdvancementsTab",
	setup(e) {
		let t = Qc(), { advancements: n, estimatedNpcXp: r } = Ys(t), i = Y(() => n.value.filter((e) => e.kind === "characteristic")), a = Y(() => n.value.filter((e) => e.kind === "skill")), o = Y(() => n.value.filter((e) => e.kind === "talent")), s = Y(() => n.value.filter((e) => e.current !== e.careerValue).length);
		function c(e, n) {
			let r = p(e) + n * f(e);
			t.setAdvancementTotal(e, r);
		}
		function l(e) {
			let t = e.current - e.careerValue, n = [...e.sources].sort((e, t) => u(e.kind) - u(t.kind)).map((e) => `${e.label} ${v(e.count)}`);
			return t !== 0 && n.push(`Manual ${v(t)}`), n.length ? n.join(", ") : e.includedFromBase ? "Base actor" : "-";
		}
		function u(e) {
			return e === "characteristic" ? 0 : e === "career" ? 1 : 2;
		}
		function d(e) {
			return pc(e) !== null;
		}
		function f(e) {
			return e.kind === "talent" ? 1 : 5;
		}
		function p(e) {
			return Math.max(e.minimumTotal, e.baseValue + e.current);
		}
		function m(e) {
			return p(e);
		}
		function h(e) {
			return e.talentMaximumLabel ?? "Unknown";
		}
		function g(e) {
			let t = e.talentMaximumValue;
			return typeof t == "number" && m(e) > t;
		}
		function _(e) {
			return Nc(e);
		}
		function v(e) {
			return e > 0 ? `+${e}` : `${e}`;
		}
		function y(e) {
			t.resetAdvancementCurrent(e);
		}
		function b(e, n) {
			let r = n.target;
			r && t.setAdvancementTotal(e, Number(r.value));
		}
		return (e, n) => (W(), G("section", rl, [
			K("section", il, [
				n[2] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "1"), K("h2", null, "Characteristics")], -1),
				s.value ? (W(), G("div", al, [K("span", null, M(s.value) + " manual edits", 1), K("button", {
					type: "button",
					onClick: n[0] ||= (e) => z(t).resetAllAdvancementCurrents()
				}, " Reset All Advances ")])) : J("", !0),
				K("div", ol, [
					K("strong", null, "Estimated NPC XP " + M(z(r).total), 1),
					K("span", null, M(z(r).characteristics) + " characteristics", 1),
					K("span", null, M(z(r).skills) + " skills", 1),
					K("span", null, M(z(r).talents) + " talents", 1)
				]),
				K("div", sl, [n[1] ||= K("div", { class: "npc-builder__table-head" }, [
					K("span", null, "Name"),
					K("span", null, "Base"),
					K("span", null, "Advances"),
					K("span", null, "Total"),
					K("span", null, "XP"),
					K("span", null, "Sources")
				], -1), (W(!0), G(U, null, H(i.value, (e) => (W(), G("div", {
					key: `${e.kind}:${e.name}`,
					class: j(["npc-builder__advance-row", { "is-edited": e.current !== e.careerValue }])
				}, [
					K("strong", null, M(e.name), 1),
					K("span", null, M(e.baseValue), 1),
					K("span", null, M(e.current), 1),
					K("div", cl, [
						K("button", {
							disabled: p(e) <= e.minimumTotal,
							title: "Decrease by 5",
							type: "button",
							onClick: (t) => c(e, -1)
						}, " -5 ", 8, ll),
						K("input", {
							"aria-label": `Total ${e.name}`,
							value: p(e),
							min: "0",
							type: "number",
							onInput: (t) => b(e, t)
						}, null, 40, ul),
						K("button", {
							title: "Increase by 5",
							type: "button",
							onClick: (t) => c(e, 1)
						}, " +5 ", 8, dl),
						K("button", {
							disabled: e.current === e.careerValue,
							title: "Reset to career value",
							type: "button",
							onClick: (t) => y(e)
						}, " Reset ", 8, fl)
					]),
					K("span", null, M(_(e)), 1),
					K("span", null, M(l(e)), 1)
				], 2))), 128))])
			]),
			K("section", pl, [n[4] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "2"), K("h2", null, "Skills")], -1), K("div", ml, [n[3] ||= K("div", { class: "npc-builder__table-head" }, [
				K("span", null, "Name"),
				K("span", null, "Base"),
				K("span", null, "Advances"),
				K("span", null, "Total"),
				K("span", null, "XP"),
				K("span", null, "Sources")
			], -1), (W(!0), G(U, null, H(a.value, (e) => (W(), G("div", {
				key: `${e.kind}:${e.name}`,
				class: j(["npc-builder__advance-row", { "is-edited": e.current !== e.careerValue }])
			}, [
				K("strong", null, [pa(M(e.name) + " ", 1), d(e.name) ? (W(), G("span", hl, " Needs specialization ")) : J("", !0)]),
				K("span", null, M(e.baseValue), 1),
				K("span", null, M(e.current), 1),
				K("div", gl, [
					K("button", {
						disabled: p(e) <= e.minimumTotal,
						title: "Decrease by 5",
						type: "button",
						onClick: (t) => c(e, -1)
					}, " -5 ", 8, _l),
					K("input", {
						"aria-label": `Total ${e.name}`,
						value: p(e),
						min: "0",
						type: "number",
						onInput: (t) => b(e, t)
					}, null, 40, vl),
					K("button", {
						title: "Increase by 5",
						type: "button",
						onClick: (t) => c(e, 1)
					}, " +5 ", 8, yl),
					K("button", {
						disabled: e.current === e.careerValue,
						title: "Reset to career value",
						type: "button",
						onClick: (t) => y(e)
					}, " Reset ", 8, bl)
				]),
				K("span", null, M(_(e)), 1),
				K("span", null, M(l(e)), 1)
			], 2))), 128))])]),
			K("section", xl, [n[6] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "3"), K("h2", null, "Talents")], -1), K("div", Sl, [n[5] ||= K("div", { class: "npc-builder__table-head npc-builder__table-head--talents" }, [
				K("span", null, "Name"),
				K("span", null, "Ranks"),
				K("span", null, "Maximum"),
				K("span", null, "XP"),
				K("span", null, "Sources")
			], -1), (W(!0), G(U, null, H(o.value, (e) => (W(), G("div", {
				key: `${e.kind}:${e.name}`,
				class: j(["npc-builder__advance-row npc-builder__advance-row--talent", {
					"is-edited": e.current !== e.careerValue,
					"is-over-maximum": g(e)
				}])
			}, [
				K("strong", null, M(e.name), 1),
				K("div", Cl, [
					K("button", {
						disabled: m(e) <= e.minimumTotal,
						title: "Decrease by 1",
						type: "button",
						onClick: (t) => c(e, -1)
					}, " -1 ", 8, wl),
					K("input", {
						"aria-label": `Ranks ${e.name}`,
						value: m(e),
						min: "0",
						type: "number",
						onInput: (t) => b(e, t)
					}, null, 40, Tl),
					K("button", {
						title: "Increase by 1",
						type: "button",
						onClick: (t) => c(e, 1)
					}, " +1 ", 8, El),
					K("button", {
						disabled: e.current === e.careerValue,
						title: "Reset to career value",
						type: "button",
						onClick: (t) => y(e)
					}, " Reset ", 8, Dl)
				]),
				K("span", Ol, [pa(M(h(e)) + " ", 1), g(e) ? (W(), G("span", kl, " Over max ")) : J("", !0)]),
				K("span", null, M(_(e)), 1),
				K("span", null, M(l(e)), 1)
			], 2))), 128))])])
		]));
	}
}), jl = new Set([
	"and",
	"any",
	"the",
	"with",
	"without",
	"of",
	"or",
	"npc"
]);
function Ml(e) {
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
	}), Il(t);
}
function Nl(e, t) {
	let n = Ll(e);
	return n ? t.some((e) => Ll(e.img) === n) : !1;
}
function Pl(e) {
	let t = [];
	for (let n of e.careers) t.push(n.name, n.careerGroup);
	return e.selectedBaseActor && t.push(e.selectedBaseActor.name, e.selectedBaseActor.species), Bl(t.flatMap((e) => zl(e)).filter((e) => e.length >= 3 && !jl.has(e)));
}
function Fl(e, t) {
	let n = Rl(e);
	return n ? t.some((e) => n.includes(e)) : !1;
}
function Il(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.img.trim().toLocaleLowerCase();
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
function Ll(e) {
	return e.trim().toLocaleLowerCase();
}
function Rl(e) {
	return e.trim().toLocaleLowerCase().replace(/[_-]/g, " ").replace(/[()[\],.;:]/g, " ").replace(/\s+/g, " ");
}
function zl(e) {
	let t = Rl(e);
	return [t, ...t.split(" ")].filter(Boolean);
}
function Bl(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/view/components/DocumentDrop.vue?vue&type=script&setup=true&lang.ts
var Vl = ["onKeydown"], Hl = { key: 0 }, Ul = { class: "document-drop__actions" }, Wl = /* @__PURE__ */ tl(/* @__PURE__ */ lr({
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
			let t = e.closest("[data-uuid], [data-document-uuid], [data-entry-uuid], [data-document-id], [data-entry-id], [data-pack]");
			if (!t) return "";
			let n = t.dataset.uuid || t.dataset.documentUuid || t.dataset.entryUuid || "";
			if (n) return v(n);
			let r = t.dataset.documentId || t.dataset.entryId || "", i = b(t);
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
			return t === "Actor" || t === "Item" ? t : e.classList.contains("actor") ? "Actor" : e.classList.contains("item") ? "Item" : e.closest("#actors") ? "Actor" : e.closest("#items") ? "Item" : "";
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
		return Dr(() => {
			m();
		}), (t, n) => (W(), G("div", {
			class: j(["document-drop", {
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
			K("strong", null, M(e.title), 1),
			e.description ? (W(), G("span", Hl, M(e.description), 1)) : J("", !0),
			Pr(t.$slots, "default", {}, void 0, !0),
			i.value ? (W(), G("form", {
				key: 1,
				class: "document-drop__manual",
				onClick: n[2] ||= ss(() => {}, ["stop"]),
				onSubmit: ss(f, ["prevent"])
			}, [
				K("label", null, [n[6] ||= K("span", null, "Document type", -1), V(K("select", { "onUpdate:modelValue": n[0] ||= (e) => o.value = e }, [...n[5] ||= [
					K("option", { value: "auto" }, "Auto", -1),
					K("option", { value: "Item" }, "Item", -1),
					K("option", { value: "Actor" }, "Actor", -1)
				]], 512), [[ts, o.value]])]),
				K("label", null, [n[7] ||= K("span", null, "UUID or drop JSON", -1), V(K("input", {
					"onUpdate:modelValue": n[1] ||= (e) => s.value = e,
					placeholder: "Compendium.package.pack.id",
					type: "text"
				}, null, 512), [[Qo, s.value]])]),
				K("div", Ul, [
					n[8] ||= K("button", { type: "submit" }, "Use", -1),
					K("button", {
						type: "button",
						onClick: p
					}, M(a.value ? "Waiting..." : "Pick Next Click"), 1),
					K("button", {
						type: "button",
						onClick: d
					}, "Cancel")
				])
			], 32)) : J("", !0)
		], 42, Vl));
	}
}), [["__scopeId", "data-v-da8b737a"]]), Gl = { class: "npc-builder__layout" }, Kl = { class: "npc-builder__column" }, ql = { class: "npc-builder__panel" }, Jl = { class: "npc-builder__field-grid" }, Yl = { class: "npc-builder__field" }, Xl = { class: "npc-builder__field" }, Zl = ["disabled"], Ql = { value: "" }, $l = ["value"], eu = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, tu = {
	key: 1,
	class: "npc-builder__source"
}, nu = { class: "npc-builder__thumbnail" }, ru = ["src"], iu = { key: 1 }, au = { class: "npc-builder__panel" }, ou = {
	key: 0,
	class: "npc-builder__careers"
}, su = [
	"onDragenter",
	"onDragover",
	"onDrop"
], cu = ["onDragstart"], lu = { class: "npc-builder__thumbnail" }, uu = ["src"], du = { key: 1 }, fu = { class: "npc-builder__career-copy" }, pu = ["title"], mu = ["value", "onInput"], hu = { class: "npc-builder__career-actions" }, gu = ["disabled", "onClick"], _u = ["disabled", "onClick"], vu = ["onClick"], yu = {
	key: 1,
	class: "npc-builder__empty"
}, bu = { class: "npc-builder__summary" }, xu = { class: "npc-builder__preview" }, Su = ["disabled"], Cu = ["src"], wu = { key: 1 }, Tu = { key: 2 }, Eu = {
	key: 0,
	class: "npc-builder__portrait-path"
}, Du = { key: 0 }, Ou = ["title"], ku = {
	key: 1,
	class: "npc-builder__portrait-gallery"
}, Au = { key: 0 }, ju = { key: 1 }, Mu = {
	key: 0,
	class: "npc-builder__portrait-progress"
}, Nu = ["value"], Pu = { class: "npc-builder__portrait-strip" }, Fu = [
	"aria-label",
	"title",
	"onClick"
], Iu = ["src"], Lu = { class: "npc-builder__field" }, Ru = ["placeholder"], zu = {
	key: 2,
	class: "npc-builder__quick-traits"
}, Bu = ["onClick"], Vu = {
	key: 3,
	class: "npc-builder__quick-traits"
}, Hu = ["onClick"], Uu = { class: "npc-builder__build-preview" }, Wu = { class: "npc-builder__build-preview-heading" }, Gu = { class: "npc-builder__preview-grid" }, Ku = { key: 0 }, qu = { key: 0 }, Ju = { key: 1 }, Yu = { class: "npc-builder__preview-grid-wide" }, Xu = {
	key: 0,
	class: "npc-builder__warnings"
}, Zu = { key: 1 }, Qu = { class: "npc-builder__portrait-gallery-view" }, $u = { class: "npc-builder__portrait-gallery-summary" }, ed = { key: 0 }, td = { key: 1 }, nd = { class: "npc-builder__portrait-grid" }, rd = ["title", "onClick"], id = { class: "npc-builder__portrait-grid-image" }, ad = ["src"], od = /* @__PURE__ */ lr({
	__name: "NpcBuilderBuildTab",
	props: {
		bridge: {},
		isLoadingActors: { type: Boolean },
		isLoadingBaseDraft: { type: Boolean }
	},
	emits: ["careerDrop"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Qc(), { actorName: a, advancements: o, baseActors: s, careers: c, estimatedNpcXp: l, finalActorName: u, finalCareer: d, finalPortraitPath: f, grantTotals: p, optionalTraits: m, quickTraits: h, selectedBaseActor: g, selectedBaseActorUuid: _, selectedPortraitPath: v, selectedSpells: y, settings: b, suggestedActorName: x, traits: S, trappings: C } = Ys(i), w = /* @__PURE__ */ R(""), T = /* @__PURE__ */ R([]), E = /* @__PURE__ */ R(null), ee = /* @__PURE__ */ R(null), D = /* @__PURE__ */ R(""), te = /* @__PURE__ */ R(!1), O = /* @__PURE__ */ R(!1), ne = /* @__PURE__ */ R(null), k = 0, re = Y(() => {
			let e = w.value.trim().toLocaleLowerCase();
			return e ? s.value.filter((t) => t.name.toLocaleLowerCase().includes(e)) : s.value;
		}), ie = Y({
			get: () => _.value,
			set: (e) => {
				i.selectBaseActorUuid(e);
			}
		}), A = Y(() => {
			let e = new Set(m.value.map((e) => Te(e.name)));
			return h.value.filter((t) => !e.has(Te(t.name)));
		}), ae = Y(() => {
			let e = 0;
			for (let t of c.value) e += t.quantity;
			return e;
		}), oe = Y(() => C.value.filter((e) => !e.ignored)), se = Y(() => o.value.filter((e) => e.current !== e.careerValue).length), ce = Y(() => oe.value.filter((e) => e.resolution.status === "fallback").length), le = Y(() => C.value.filter((e) => e.ignored).length), ue = Y(() => o.value.filter((e) => e.kind === "skill" && pc(e.name) !== null).length), de = Y(() => oe.value.filter((e) => e.resolution.status === "unresolved").length), fe = Y(() => {
			let e = [];
			return g.value || e.push("Choose a base Actor before building."), c.value.length || e.push("No Careers are queued."), ue.value && e.push(`${ue.value} skill rows still need a specialization.`), de.value && e.push(`${de.value} trappings have no item resolution yet.`), f.value || e.push("No portrait is selected."), e;
		}), pe = Y(() => fe.value.length ? "Review" : "Ready"), me = Y(() => Ml({
			careers: c.value,
			selectedBaseActor: g.value
		})), he = Y(() => Il([...me.value, ...T.value])), ge = Y(() => he.value.slice(0, 10)), _e = Y(() => Math.max(0, he.value.length - ge.value.length)), ve = Y(() => he.value.find((e) => e.img === f.value)?.key ?? ""), ye = Y(() => he.value.find((e) => e.img === f.value) ?? null), be = Y(() => {
			let e = ne.value;
			return e ? e.maxDirectories <= 0 ? e.phase === "ready" ? 100 : 4 : Math.min(100, Math.round(e.directoriesVisited / e.maxDirectories * 100)) : 0;
		}), xe = Y(() => {
			let e = ne.value;
			return e ? e.phase === "ready" ? `${e.candidatesFound} options found` : e.phase === "filesystem" ? e.maxDirectories <= 0 ? `${e.directoriesVisited} directories - ${e.currentLocation}` : `${e.directoriesVisited}/${e.maxDirectories} directories - ${e.currentLocation}` : e.currentLocation : "";
		});
		Hn(() => [
			g.value?.uuid ?? "",
			b.value.searchCompendiumPortraitAssets,
			b.value.searchFoundryPortraitAssets,
			c.value.map((e) => e.uuid).join("|")
		], () => {
			Re();
		}, { immediate: !0 }), Hn([
			he,
			v,
			O
		], () => {
			v.value && !O.value && !Nl(v.value, he.value) && i.selectPortrait("");
		}, { immediate: !0 });
		function Se(e) {
			return we(e);
		}
		function Ce(e) {
			return we(e);
		}
		function we(e) {
			return S.value.some((t) => N(t.name, e.name));
		}
		function N(e, t) {
			return Te(e) === Te(t);
		}
		function Te(e) {
			return e.trim().toLocaleLowerCase();
		}
		function Ee(e, t) {
			let n = t.target;
			n && i.setCareerQuantity(e, Number(n.value));
		}
		function De(e, t) {
			E.value = e, ee.value = e, t.dataTransfer?.setData("text/plain", `npc-builder-career:${e}`), t.dataTransfer && (t.dataTransfer.effectAllowed = "move");
		}
		function Oe(e, t) {
			t.preventDefault(), ee.value = e, t.dataTransfer && (t.dataTransfer.dropEffect = "move");
		}
		function P(e, t) {
			t.preventDefault(), E.value !== null && i.moveCareerToIndex(E.value, e), ke();
		}
		function ke() {
			E.value = null, ee.value = null;
		}
		function Ae(e) {
			return [
				`Ch ${e.grants.characteristics.length}`,
				`Sk ${e.grants.skills.length}`,
				`Ta ${e.grants.talents.length}`,
				`Tr ${e.grants.trappings.length}`
			].join(" / ");
		}
		function je(e) {
			let t = e.slice(0, 3).join(", "), n = e.length - 3;
			return e.length ? n > 0 ? `${t}, +${n}` : t : "-";
		}
		function Me(e) {
			return e.split(/\s+/).map((e) => e.at(0)).filter(Boolean).slice(0, 2).join("").toLocaleUpperCase();
		}
		function Ne(e) {
			i.setQuickTraitSelected(e, !Se(e));
		}
		function Pe(e) {
			i.setOptionalTraitSelected(e, !Ce(e));
		}
		function Fe(e) {
			i.selectPortrait(e.img);
		}
		function Ie(e) {
			Fe(e), te.value = !1;
		}
		function Le(e) {
			return `${e.label}\n${e.img}`;
		}
		async function Re() {
			let e = k + 1;
			if (k = e, !b.value.searchCompendiumPortraitAssets && !b.value.searchFoundryPortraitAssets) {
				T.value = [], ne.value = null;
				return;
			}
			if (!g.value && !c.value.length) {
				T.value = [], ne.value = null;
				return;
			}
			O.value = !0, T.value = [], ne.value = {
				candidatesFound: 0,
				currentLocation: "Preparing portrait search",
				directoriesVisited: 0,
				maxDirectories: 0,
				phase: "world-documents"
			};
			try {
				let t = await n.bridge.listFoundryPortraitCandidates({
					careers: c.value,
					includeCompendiumAssets: b.value.searchCompendiumPortraitAssets,
					includeFilePickerAssets: b.value.searchFoundryPortraitAssets,
					selectedBaseActor: g.value
				}, (t) => {
					k === e && (ne.value = t);
				});
				k === e && (T.value = t);
			} catch (t) {
				k === e && (D.value = Be(t));
			} finally {
				k === e && (O.value = !1);
			}
		}
		async function ze(e) {
			D.value = "";
			try {
				i.selectBaseActor(await n.bridge.resolveActorDrop(e));
			} catch (e) {
				D.value = Be(e);
			}
		}
		function Be(e) {
			return e instanceof Error ? e.message : "The NPC Builder could not resolve that Actor drop.";
		}
		return (t, n) => (W(), G("section", Gl, [
			K("div", Kl, [K("section", ql, [
				n[9] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "1"), K("h2", null, "Base Actor")], -1),
				K("div", Jl, [K("label", Yl, [n[7] ||= K("span", null, "Search world actors", -1), V(K("input", {
					"onUpdate:modelValue": n[0] ||= (e) => w.value = e,
					placeholder: "Filter actors",
					type: "search"
				}, null, 512), [[Qo, w.value]])]), K("label", Xl, [n[8] ||= K("span", null, "Base statblock", -1), V(K("select", {
					"onUpdate:modelValue": n[1] ||= (e) => ie.value = e,
					disabled: e.isLoadingActors
				}, [K("option", Ql, M(e.isLoadingActors ? "Loading actors..." : "Choose an actor"), 1), (W(!0), G(U, null, H(re.value, (e) => (W(), G("option", {
					key: e.uuid,
					value: e.uuid
				}, M(e.name), 9, $l))), 128))], 8, Zl), [[ts, ie.value]])])]),
				q(Wl, {
					class: "npc-builder__drop",
					description: "Use a world Actor as the starting statblock.",
					title: "Drop Actor",
					variant: "compact",
					onDropData: ze
				}),
				D.value ? (W(), G("p", eu, M(D.value), 1)) : J("", !0),
				z(g) ? (W(), G("article", tu, [K("div", nu, [z(g).img ? (W(), G("img", {
					key: 0,
					src: z(g).img,
					alt: ""
				}, null, 8, ru)) : (W(), G("span", iu, M(Me(z(g).name)), 1))]), K("div", null, [K("strong", null, M(z(g).name), 1), K("span", null, [
					pa(M(z(g).species || "Species not found") + " ", 1),
					z(g).type ? (W(), G(U, { key: 0 }, [pa(" - " + M(z(g).type), 1)], 64)) : J("", !0),
					e.isLoadingBaseDraft ? (W(), G(U, { key: 1 }, [pa("loading...")], 64)) : J("", !0)
				])])])) : J("", !0)
			]), K("section", au, [
				n[11] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "2"), K("h2", null, "Career Queue")], -1),
				q(Wl, {
					class: "npc-builder__drop npc-builder__drop--career",
					description: "Drop in build order. Drag rows to reorder.",
					title: "Drop Career Items",
					variant: "compact",
					onDropData: n[2] ||= (e) => r("careerDrop", e)
				}),
				z(c).length ? (W(), G("ol", ou, [(W(!0), G(U, null, H(z(c), (e, t) => (W(), G("li", {
					key: e.uuid,
					class: j({
						"is-dragging": E.value === t,
						"is-drop-target": ee.value === t
					}),
					onDragenter: ss((e) => ee.value = t, ["prevent"]),
					onDragover: (e) => Oe(t, e),
					onDrop: (e) => P(t, e)
				}, [
					K("span", {
						"aria-label": "Drag to reorder career",
						class: "npc-builder__drag-handle",
						draggable: "true",
						role: "button",
						tabindex: "0",
						title: "Drag to reorder",
						onDragend: ke,
						onDragstart: (e) => De(t, e)
					}, " Move ", 40, cu),
					K("div", lu, [e.img ? (W(), G("img", {
						key: 0,
						src: e.img,
						alt: ""
					}, null, 8, uu)) : (W(), G("span", du, M(Me(e.name)), 1))]),
					K("div", fu, [
						K("strong", null, M(e.name), 1),
						K("span", null, [pa(M(e.careerGroup || "Career") + " ", 1), e.level === null ? J("", !0) : (W(), G(U, { key: 0 }, [pa(" level " + M(e.level), 1)], 64))]),
						K("small", {
							class: "npc-builder__career-counts",
							title: [
								`Characteristics: ${je(e.grants.characteristics)}`,
								`Skills: ${je(e.grants.skills)}`,
								`Talents: ${je(e.grants.talents)}`,
								`Trappings: ${je(e.grants.trappings)}`
							].join("\n")
						}, M(Ae(e)), 9, pu)
					]),
					K("label", null, [n[10] ||= K("span", null, "Qty", -1), K("input", {
						value: e.quantity,
						min: "1",
						type: "number",
						onInput: (e) => Ee(t, e)
					}, null, 40, mu)]),
					K("div", hu, [
						K("button", {
							disabled: t === 0,
							title: "Move career earlier",
							type: "button",
							onClick: (e) => z(i).moveCareer(t, -1)
						}, " Up ", 8, gu),
						K("button", {
							disabled: t === z(c).length - 1,
							title: "Move career later",
							type: "button",
							onClick: (e) => z(i).moveCareer(t, 1)
						}, " Down ", 8, _u),
						K("button", {
							type: "button",
							onClick: (e) => z(i).removeCareer(t)
						}, " Remove ", 8, vu)
					])
				], 42, su))), 128))])) : (W(), G("p", yu, "No careers queued yet."))
			])]),
			K("aside", bu, [K("section", xu, [
				K("button", {
					class: "npc-builder__portrait",
					disabled: !he.value.length,
					title: "Open portrait gallery",
					type: "button",
					onClick: n[3] ||= (e) => te.value = !0
				}, [z(f) ? (W(), G("img", {
					key: 0,
					src: z(f),
					alt: ""
				}, null, 8, Cu)) : z(d) ? (W(), G("strong", wu, M(Me(z(d).name)), 1)) : (W(), G("span", Tu, "No portrait selected"))], 8, Su),
				z(f) ? (W(), G("p", Eu, [ye.value ? (W(), G("strong", Du, M(ye.value.label), 1)) : J("", !0), K("span", { title: z(f) }, M(z(f)), 9, Ou)])) : J("", !0),
				he.value.length || O.value ? (W(), G("section", ku, [
					K("div", null, [n[12] ||= K("h2", null, "Portrait", -1), O.value ? (W(), G("span", Au, "Finding assets...")) : (W(), G("span", ju, M(he.value.length) + " options", 1))]),
					O.value && ne.value ? (W(), G("div", Mu, [K("progress", {
						value: be.value,
						max: "100"
					}, null, 8, Nu), K("span", null, M(xe.value), 1)])) : J("", !0),
					K("div", Pu, [(W(!0), G(U, null, H(ge.value, (e) => (W(), G("button", {
						key: e.key,
						"aria-label": Le(e),
						class: j({ "is-active": e.key === ve.value }),
						title: Le(e),
						type: "button",
						onClick: (t) => Fe(e)
					}, [K("img", {
						src: e.img,
						alt: ""
					}, null, 8, Iu)], 10, Fu))), 128)), _e.value > 0 ? (W(), G("button", {
						key: 0,
						class: "npc-builder__portrait-more",
						type: "button",
						onClick: n[4] ||= (e) => te.value = !0
					}, " +" + M(_e.value), 1)) : J("", !0)])
				])) : J("", !0),
				K("label", Lu, [n[13] ||= K("span", null, "NPC name", -1), V(K("input", {
					"onUpdate:modelValue": n[5] ||= (e) => /* @__PURE__ */ L(a) ? a.value = e : null,
					placeholder: z(x),
					type: "text"
				}, null, 8, Ru), [[Qo, z(a)]])]),
				z(m).length ? (W(), G("section", zu, [K("div", null, [n[14] ||= K("h2", null, "Optional Traits", -1), K("span", null, M(z(m).length) + " from base statblock", 1)]), (W(!0), G(U, null, H(z(m), (e) => (W(), G("button", {
					key: e.uuid,
					class: j({ "is-active": Ce(e) }),
					type: "button",
					onClick: (t) => Pe(e)
				}, M(e.name), 11, Bu))), 128))])) : J("", !0),
				A.value.length ? (W(), G("section", Vu, [K("div", null, [n[15] ||= K("h2", null, "Quick Traits", -1), K("span", null, M(A.value.length) + " configured", 1)]), (W(!0), G(U, null, H(A.value, (e) => (W(), G("button", {
					key: e.uuid,
					class: j({ "is-active": Se(e) }),
					type: "button",
					onClick: (t) => Ne(e)
				}, M(e.name), 11, Hu))), 128))])) : J("", !0),
				K("section", Uu, [
					K("div", Wu, [n[16] ||= K("h2", null, "Build Preview", -1), K("span", { class: j(["npc-builder__status-pill", { "npc-builder__status-pill--ready": pe.value === "Ready" }]) }, M(pe.value), 3)]),
					K("div", Gu, [
						K("div", null, [
							n[17] ||= K("span", null, "Advances", -1),
							K("strong", null, M(z(o).length), 1),
							se.value ? (W(), G("small", Ku, M(se.value) + " manually edited ", 1)) : J("", !0)
						]),
						K("div", null, [
							n[18] ||= K("span", null, "Trappings", -1),
							K("strong", null, M(oe.value.length), 1),
							ce.value ? (W(), G("small", qu, M(ce.value) + " blank fallback ", 1)) : J("", !0),
							le.value ? (W(), G("small", Ju, M(le.value) + " ignored ", 1)) : J("", !0)
						]),
						K("div", null, [n[19] ||= K("span", null, "Traits", -1), K("strong", null, M(z(S).length), 1)]),
						K("div", null, [n[20] ||= K("span", null, "Spells", -1), K("strong", null, M(z(y).length), 1)]),
						K("div", Yu, [
							n[21] ||= K("span", null, "Estimated NPC XP", -1),
							K("strong", null, M(z(l).total), 1),
							K("small", null, M(z(l).characteristics) + " char / " + M(z(l).skills) + " skill / " + M(z(l).talents) + " talent ", 1)
						])
					]),
					fe.value.length ? (W(), G("ul", Xu, [(W(!0), G(U, null, H(fe.value, (e) => (W(), G("li", { key: e }, M(e), 1))), 128))])) : (W(), G("p", Zu, " The draft has a base Actor, queued Career data, resolved trappings, and a portrait ready to apply. "))
				]),
				K("dl", null, [
					K("div", null, [n[22] ||= K("dt", null, "Build name", -1), K("dd", null, M(z(u)), 1)]),
					K("div", null, [n[23] ||= K("dt", null, "Base actor", -1), K("dd", null, M(z(g)?.name ?? "Not selected"), 1)]),
					K("div", null, [n[24] ||= K("dt", null, "Final career", -1), K("dd", null, M(z(d)?.name ?? "Not queued"), 1)]),
					K("div", null, [n[25] ||= K("dt", null, "Career items", -1), K("dd", null, M(ae.value), 1)]),
					K("div", null, [n[26] ||= K("dt", null, "Apply", -1), K("dd", null, M(z(o).length) + " advance rows, " + M(oe.value.length) + " trappings, " + M(z(S).length) + " traits, " + M(z(y).length) + " spells ", 1)]),
					K("div", null, [n[27] ||= K("dt", null, "Extracted grants", -1), K("dd", null, M(z(p).characteristics) + " characteristics, " + M(z(p).skills) + " skills, " + M(z(p).talents) + " talents, " + M(z(p).trappings) + " trappings ", 1)]),
					K("div", null, [n[28] ||= K("dt", null, "Estimated NPC XP", -1), K("dd", null, M(z(l).total), 1)])
				])
			])]),
			q(nl, {
				open: te.value,
				title: "Portrait Gallery",
				onClose: n[6] ||= (e) => te.value = !1
			}, {
				default: Fn(() => [K("div", Qu, [K("div", $u, [K("strong", null, M(he.value.length) + " portrait options", 1), O.value ? (W(), G("span", ed, "Finding assets...")) : (W(), G("span", td, "Click an image to use it for the generated NPC."))]), K("div", nd, [(W(!0), G(U, null, H(he.value, (e) => (W(), G("button", {
					key: e.key,
					class: j({ "is-active": e.key === ve.value }),
					title: Le(e),
					type: "button",
					onClick: (t) => Ie(e)
				}, [K("span", id, [K("img", {
					src: e.img,
					alt: ""
				}, null, 8, ad)]), K("span", null, M(e.label), 1)], 10, rd))), 128))])])]),
				_: 1
			}, 8, ["open"])
		]));
	}
}), sd = { class: "npc-builder__settings" }, cd = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, ld = {
	key: 1,
	class: "npc-builder__message"
}, ud = { class: "npc-builder__panel" }, dd = { class: "npc-builder__folder-setting" }, fd = { class: "npc-builder__field" }, pd = ["value"], md = { class: "npc-builder__field" }, hd = ["disabled"], gd = { class: "npc-builder__folder-setting" }, _d = { class: "npc-builder__field" }, vd = ["value"], yd = { class: "npc-builder__field" }, bd = ["disabled"], xd = { class: "npc-builder__panel" }, Sd = { class: "npc-builder__folder-setting" }, Cd = { class: "npc-builder__field" }, wd = ["value"], Td = { class: "npc-builder__field" }, Ed = ["disabled"], Dd = ["disabled"], Od = { class: "npc-builder__panel" }, kd = { class: "npc-builder__check" }, Ad = { class: "npc-builder__panel" }, jd = { class: "npc-builder__check" }, Md = ["disabled"], Nd = { class: "npc-builder__setting-note" }, Pd = { class: "npc-builder__check" }, Fd = { class: "npc-builder__check" }, Id = { class: "npc-builder__panel" }, Ld = { class: "npc-builder__check" }, Rd = { class: "npc-builder__check" }, zd = { class: "npc-builder__check" }, Bd = { class: "npc-builder__check" }, Vd = { class: "npc-builder__check" }, Hd = { class: "npc-builder__panel" }, Ud = { class: "npc-builder__check" }, Wd = { class: "npc-builder__panel" }, Gd = { class: "npc-builder__field" }, Kd = { class: "npc-builder__check" }, qd = ["disabled"], Jd = ["disabled"], Yd = /* @__PURE__ */ lr({
	__name: "NpcBuilderSettingsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Qc(), { actorFolders: r, itemFolders: i, settings: a } = Ys(n), o = /* @__PURE__ */ R(""), s = /* @__PURE__ */ R(""), c = /* @__PURE__ */ R(!1), l = /* @__PURE__ */ R(""), u = /* @__PURE__ */ R(null), d = /* @__PURE__ */ R(""), f = /* @__PURE__ */ R(""), p = Y(() => u.value?.digDownActive ?? !0), m = Y(() => {
			let e = u.value;
			return e ? e.digDownActive ? e.digDownDeepFileSearchEnabled ? e.digDownCacheReady ? `Dig Down cache ready with ${e.digDownIndexedFileCount} indexed files.` : "Dig Down is active; its file cache is still building or unavailable." : "Dig Down is active, but its Deep File Search setting is disabled." : "Install and enable Dig Down to search local files for portrait suggestions." : "Checking Dig Down integration.";
		});
		wr(() => {
			w();
		}), Hn(u, (e) => {
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
				await e.refresh(), e.setFolderUuid(r.uuid), n.hydrateSettings(await t.bridge.saveSettings(C())), f.value = `Using folder "${r.name}".`;
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
		function C() {
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
				searchFoundryPortraitAssets: p.value && a.value.searchFoundryPortraitAssets,
				searchWebPortraitAssets: a.value.searchWebPortraitAssets
			};
		}
		async function w() {
			u.value = await t.bridge.getPortraitSearchAvailability();
		}
		async function T() {
			c.value = !0, s.value = "", f.value = "";
			try {
				n.hydrateSettings(await t.bridge.saveSettings(C())), n.hydrateQuickTraits(await t.bridge.importRecommendedQuickTraits(a.value)), f.value = "Recommended quick traits imported.";
			} catch (e) {
				s.value = D(e);
			} finally {
				c.value = !1;
			}
		}
		async function E() {
			c.value = !0, s.value = "", f.value = "";
			try {
				n.hydrateSettings(await t.bridge.saveSettings(C())), await Promise.all([x(), S()]), f.value = "Settings saved.";
			} catch (e) {
				s.value = D(e);
			} finally {
				c.value = !1;
			}
		}
		async function ee() {
			c.value = !0, s.value = "", f.value = "";
			try {
				n.hydrateSettings(await t.bridge.saveSettings(Zs())), await Promise.all([x(), S()]), f.value = "Settings reset to defaults.";
			} catch (e) {
				s.value = D(e);
			} finally {
				c.value = !1;
			}
		}
		function D(e) {
			return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
		}
		return (e, t) => (W(), G("section", sd, [
			s.value ? (W(), G("p", cd, M(s.value), 1)) : f.value ? (W(), G("p", ld, M(f.value), 1)) : J("", !0),
			K("section", ud, [
				t[24] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "1"), K("h2", null, "Actor Sources")], -1),
				K("section", dd, [
					K("label", fd, [t[19] ||= K("span", null, "Base actor folder", -1), V(K("select", { "onUpdate:modelValue": t[0] ||= (e) => z(a).baseActorFolderUuid = e }, [t[18] ||= K("option", { value: "" }, "All world actors", -1), (W(!0), G(U, null, H(z(r), (e) => (W(), G("option", {
						key: e.uuid,
						value: e.uuid
					}, M(e.name), 9, pd))), 128))], 512), [[ts, z(a).baseActorFolderUuid]])]),
					K("label", md, [t[20] ||= K("span", null, "Create or use by name", -1), V(K("input", {
						"onUpdate:modelValue": t[1] ||= (e) => o.value = e,
						placeholder: "Folder name",
						type: "text"
					}, null, 512), [[Qo, o.value]])]),
					K("button", {
						disabled: c.value || !o.value.trim(),
						type: "button",
						onClick: h
					}, " Save ", 8, hd)
				]),
				K("section", gd, [
					K("label", _d, [t[22] ||= K("span", null, "Output actor folder", -1), V(K("select", { "onUpdate:modelValue": t[2] ||= (e) => z(a).outputActorFolderUuid = e }, [t[21] ||= K("option", { value: "" }, "Foundry default location", -1), (W(!0), G(U, null, H(z(r), (e) => (W(), G("option", {
						key: e.uuid,
						value: e.uuid
					}, M(e.name), 9, vd))), 128))], 512), [[ts, z(a).outputActorFolderUuid]])]),
					K("label", yd, [t[23] ||= K("span", null, "Create or use by name", -1), V(K("input", {
						"onUpdate:modelValue": t[3] ||= (e) => l.value = e,
						placeholder: "Folder name",
						type: "text"
					}, null, 512), [[Qo, l.value]])]),
					K("button", {
						disabled: c.value || !l.value.trim(),
						type: "button",
						onClick: g
					}, " Save ", 8, bd)
				])
			]),
			K("section", xd, [
				t[28] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "2"), K("h2", null, "Quick Traits")], -1),
				K("section", Sd, [
					K("label", Cd, [t[26] ||= K("span", null, "Quick traits folder", -1), V(K("select", { "onUpdate:modelValue": t[4] ||= (e) => z(a).quickTraitFolderUuid = e }, [t[25] ||= K("option", { value: "" }, "No quick traits folder", -1), (W(!0), G(U, null, H(z(i), (e) => (W(), G("option", {
						key: e.uuid,
						value: e.uuid
					}, M(e.name), 9, wd))), 128))], 512), [[ts, z(a).quickTraitFolderUuid]])]),
					K("label", Td, [t[27] ||= K("span", null, "Create or use by name", -1), V(K("input", {
						"onUpdate:modelValue": t[5] ||= (e) => d.value = e,
						placeholder: "Folder name",
						type: "text"
					}, null, 512), [[Qo, d.value]])]),
					K("button", {
						disabled: c.value || !d.value.trim(),
						type: "button",
						onClick: _
					}, " Save ", 8, Ed)
				]),
				K("button", {
					disabled: c.value || !z(a).quickTraitFolderUuid,
					type: "button",
					onClick: T
				}, " Import Recommended Quick Traits ", 8, Dd)
			]),
			K("section", Od, [t[30] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "3"), K("h2", null, "Default Naming")], -1), K("label", kd, [V(K("input", {
				"onUpdate:modelValue": t[6] ||= (e) => z(a).includeSpeciesInName = e,
				type: "checkbox"
			}, null, 512), [[$o, z(a).includeSpeciesInName]]), t[29] ||= K("span", null, "Include species in suggested names", -1)])]),
			K("section", Ad, [
				t[34] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "4"), K("h2", null, "Portrait Suggestions")], -1),
				K("label", jd, [V(K("input", {
					"onUpdate:modelValue": t[7] ||= (e) => z(a).searchFoundryPortraitAssets = e,
					disabled: !p.value,
					type: "checkbox"
				}, null, 8, Md), [[$o, z(a).searchFoundryPortraitAssets]]), t[31] ||= K("span", null, "Search Dig Down's file cache for portrait suggestions", -1)]),
				K("p", Nd, M(m.value), 1),
				K("label", Pd, [V(K("input", {
					"onUpdate:modelValue": t[8] ||= (e) => z(a).searchCompendiumPortraitAssets = e,
					type: "checkbox"
				}, null, 512), [[$o, z(a).searchCompendiumPortraitAssets]]), t[32] ||= K("span", null, "Search Actor and Item compendiums for portrait suggestions", -1)]),
				K("label", Fd, [V(K("input", {
					"onUpdate:modelValue": t[9] ||= (e) => z(a).searchWebPortraitAssets = e,
					disabled: "",
					type: "checkbox"
				}, null, 512), [[$o, z(a).searchWebPortraitAssets]]), t[33] ||= K("span", null, "Search the web for portrait suggestions (later)", -1)])
			]),
			K("section", Id, [
				t[40] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "5"), K("h2", null, "Base Actor Features")], -1),
				K("label", Ld, [V(K("input", {
					"onUpdate:modelValue": t[10] ||= (e) => z(a).allowBaseActorCharacteristics = e,
					type: "checkbox"
				}, null, 512), [[$o, z(a).allowBaseActorCharacteristics]]), t[35] ||= K("span", null, "Show base actor characteristics", -1)]),
				K("label", Rd, [V(K("input", {
					"onUpdate:modelValue": t[11] ||= (e) => z(a).allowBaseActorSkills = e,
					type: "checkbox"
				}, null, 512), [[$o, z(a).allowBaseActorSkills]]), t[36] ||= K("span", null, "Show base actor skills", -1)]),
				K("label", zd, [V(K("input", {
					"onUpdate:modelValue": t[12] ||= (e) => z(a).allowBaseActorTalents = e,
					type: "checkbox"
				}, null, 512), [[$o, z(a).allowBaseActorTalents]]), t[37] ||= K("span", null, "Show base actor talents", -1)]),
				K("label", Bd, [V(K("input", {
					"onUpdate:modelValue": t[13] ||= (e) => z(a).allowBaseActorTrappings = e,
					type: "checkbox"
				}, null, 512), [[$o, z(a).allowBaseActorTrappings]]), t[38] ||= K("span", null, "Show base actor trappings", -1)]),
				K("label", Vd, [V(K("input", {
					"onUpdate:modelValue": t[14] ||= (e) => z(a).allowBaseActorTraits = e,
					type: "checkbox"
				}, null, 512), [[$o, z(a).allowBaseActorTraits]]), t[39] ||= K("span", null, "Show base actor traits", -1)])
			]),
			K("section", Hd, [t[42] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "6"), K("h2", null, "Magic and Spells")], -1), K("label", Ud, [V(K("input", {
				"onUpdate:modelValue": t[15] ||= (e) => z(a).autoSelectGrantedSpells = e,
				type: "checkbox"
			}, null, 512), [[$o, z(a).autoSelectGrantedSpells]]), t[41] ||= K("span", null, "Select detected Lore spells by default", -1)])]),
			K("section", Wd, [
				t[46] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "7"), K("h2", null, "Other Settings")], -1),
				K("label", Gd, [t[44] ||= K("span", null, "Lower career handling", -1), V(K("select", { "onUpdate:modelValue": t[16] ||= (e) => z(a).lowerCareerMode = e }, [...t[43] ||= [
					K("option", { value: "prompt" }, "Prompt when candidates are found", -1),
					K("option", { value: "auto-add-all" }, " Automatically add all lower-tier matches ", -1),
					K("option", { value: "never" }, "Only add dropped careers", -1)
				]], 512), [[ts, z(a).lowerCareerMode]])]),
				K("label", Kd, [V(K("input", {
					"onUpdate:modelValue": t[17] ||= (e) => z(a).askForLinkedSkillSpecializations = e,
					type: "checkbox"
				}, null, 512), [[$o, z(a).askForLinkedSkillSpecializations]]), t[45] ||= K("span", null, "Resolve linked career skill repeats separately", -1)]),
				K("button", {
					disabled: c.value,
					type: "button",
					onClick: E
				}, " Save Settings ", 8, qd),
				K("button", {
					disabled: c.value,
					type: "button",
					onClick: ee
				}, " Reset to Defaults ", 8, Jd)
			])
		]));
	}
}), Xd = { class: "npc-builder__subview-stack" }, Zd = { class: "npc-builder__field" }, Qd = ["onUpdate:modelValue"], $d = ["value"], ef = { class: "npc-builder__subview-actions" }, tf = /* @__PURE__ */ lr({
	__name: "MagicLoreResolutionPromptContent",
	props: { prompt: {} },
	emits: ["applyLores", "keepUnresolved"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (W(), G("div", Xd, [
			r[4] ||= K("p", null, " Choose concrete magic Lores for ambiguous grants before automatic spells are detected. Unresolved grants can still use manually dropped spells. ", -1),
			(W(!0), G(U, null, H(e.prompt.rows, (e) => (W(), G("section", {
				key: e.resolutionKey,
				class: "npc-builder__resolution-row"
			}, [K("div", null, [K("strong", null, M(e.grantLabel), 1), K("small", null, M(e.sourceLabel) + " - " + M(e.rawLore || "Any Lore"), 1)]), K("label", Zd, [r[3] ||= K("span", null, "Lore", -1), V(K("select", { "onUpdate:modelValue": (t) => e.selectedLore = t }, [r[2] ||= K("option", { value: "" }, "Leave unresolved", -1), (W(!0), G(U, null, H(e.options, (e) => (W(), G("option", {
				key: e.key,
				value: e.value
			}, M(e.label) + M(e.wind && e.wind !== "None" ? ` (${e.wind})` : ""), 9, $d))), 128))], 8, Qd), [[ts, e.selectedLore]])])]))), 128)),
			K("div", ef, [K("button", {
				type: "button",
				onClick: r[0] ||= (e) => n("keepUnresolved")
			}, " Keep Unresolved "), K("button", {
				type: "button",
				onClick: r[1] ||= (e) => n("applyLores")
			}, "Apply Lores")])
		]));
	}
}), nf = { class: "npc-builder__stack" }, rf = { class: "npc-builder__panel" }, af = {
	key: 0,
	class: "npc-builder__empty"
}, of = {
	key: 1,
	class: "npc-builder__magic-grants"
}, sf = { key: 0 }, cf = { key: 1 }, lf = {
	key: 2,
	class: "npc-builder__panel-actions"
}, uf = ["disabled"], df = { class: "npc-builder__panel" }, ff = { class: "npc-builder__panel-actions" }, pf = ["disabled"], mf = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, hf = {
	key: 1,
	class: "npc-builder__message npc-builder__message--error"
}, gf = {
	key: 2,
	class: "npc-builder__table"
}, _f = ["checked", "onChange"], vf = { class: "npc-builder__spell-name" }, yf = { class: "npc-builder__spell-icon" }, bf = ["src"], xf = ["onClick"], Sf = { key: 1 }, Cf = {
	key: 3,
	class: "npc-builder__empty"
}, wf = /* @__PURE__ */ lr({
	__name: "NpcBuilderSpellsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Qc(), { magicGrants: r, spells: i, selectedSpells: a } = Ys(n), o = /* @__PURE__ */ R(""), s = /* @__PURE__ */ R(!1), c = /* @__PURE__ */ R(!1), l = /* @__PURE__ */ R([]), u = /* @__PURE__ */ R(null), d = 0, f = Y(() => r.value.filter((e) => e.isAmbiguous)), p = Y(() => r.value.length - f.value.length);
		wr(() => {
			b(), y();
		}), Hn(() => r.value.map((e) => `${e.kind}:${e.sourceName}:${e.rawLore}`).sort().join("|"), () => {
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
		return (e, t) => (W(), G("section", nf, [
			q(nl, {
				open: u.value !== null,
				title: "Resolve Magic Lores",
				onClose: C
			}, {
				default: Fn(() => [u.value ? (W(), aa(tf, {
					key: 0,
					prompt: u.value,
					onApplyLores: S,
					onKeepUnresolved: C
				}, null, 8, ["prompt"])) : J("", !0)]),
				_: 1
			}, 8, ["open"]),
			K("section", rf, [
				t[0] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "1"), K("h2", null, "Magic Access")], -1),
				z(r).length ? (W(), G("div", of, [(W(!0), G(U, null, H(z(r), (e) => (W(), G("article", { key: `${e.source}:${e.sourceName}:${e.rawLore}` }, [
					K("strong", null, M(m(e)), 1),
					K("span", null, M(h(e)) + " - " + M(e.sourceName), 1),
					e.isAmbiguous ? (W(), G("small", sf, " Needs Lore resolution before automatic spells can be found. ")) : (W(), G("small", cf, " Lore: " + M(e.rawLore || e.normalizedLore), 1))
				]))), 128))])) : (W(), G("p", af, " No magic-enabling Talent or Trait is selected. ")),
				f.value.length ? (W(), G("div", lf, [K("button", {
					disabled: c.value,
					type: "button",
					onClick: x
				}, M(c.value ? "Loading Lores..." : "Resolve Lores"), 9, uf)])) : J("", !0)
			]),
			K("section", df, [
				t[2] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "2"), K("h2", null, "Spells")], -1),
				q(Wl, {
					class: "npc-builder__drop npc-builder__drop--career",
					description: "Add a specific Spell item regardless of detected Lores.",
					title: "Drop Spell Items",
					onDropData: w
				}),
				K("div", ff, [K("button", {
					disabled: s.value || !p.value,
					type: "button",
					onClick: y
				}, M(s.value ? "Finding spells..." : "Refresh Spells"), 9, pf), K("span", null, M(z(a).length) + " selected / " + M(z(i).length) + " found ", 1)]),
				o.value ? (W(), G("p", mf, M(o.value), 1)) : J("", !0),
				f.value.length ? (W(), G("p", hf, M(f.value.length) + " magic grant" + M(f.value.length === 1 ? "" : "s") + " still need Lore resolution. You can still drop specific spells for now. ", 1)) : J("", !0),
				z(i).length ? (W(), G("div", gf, [t[1] ||= K("div", { class: "npc-builder__table-head npc-builder__table-head--spells" }, [
					K("span", null, "Use"),
					K("span", null, "Spell"),
					K("span", null, "Lore"),
					K("span", null, "Source"),
					K("span")
				], -1), (W(!0), G(U, null, H(z(i), (e) => (W(), G("article", {
					key: e.key,
					class: "npc-builder__spell-row"
				}, [
					K("input", {
						checked: e.selected,
						type: "checkbox",
						onChange: (t) => v(e, t)
					}, null, 40, _f),
					K("div", vf, [K("span", yf, [e.img ? (W(), G("img", {
						key: 0,
						src: e.img,
						alt: ""
					}, null, 8, bf)) : J("", !0)]), K("strong", null, M(e.name), 1)]),
					K("span", null, M(e.loreName || "Unknown"), 1),
					K("span", null, M(g(e)), 1),
					e.source === "custom" ? (W(), G("button", {
						key: 0,
						type: "button",
						onClick: (t) => z(n).removeCustomSpell(e.key)
					}, " Remove ", 8, xf)) : (W(), G("span", Sf))
				]))), 128))])) : (W(), G("p", Cf, " No matching spells found yet. Drop specific spells here, or resolve a non-ambiguous magic Lore. "))
			])
		]));
	}
}), Tf = { class: "npc-builder__stack" }, Ef = { class: "npc-builder__panel" }, Df = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, Of = { class: "npc-builder__table" }, kf = { class: "npc-builder__trait-name" }, Af = { key: 0 }, jf = { key: 1 }, Mf = { class: "npc-builder__trait-config" }, Nf = { class: "npc-builder__mini-field" }, Pf = ["value", "onInput"], Ff = {
	key: 0,
	class: "npc-builder__mini-field"
}, If = ["value", "onChange"], Lf = ["value"], Rf = {
	key: 1,
	class: "npc-builder__mini-field"
}, zf = ["value", "onInput"], Bf = ["onClick"], Vf = /* @__PURE__ */ lr({
	__name: "NpcBuilderTraitsTab",
	props: {
		bridge: {},
		difficultyOptions: {}
	},
	setup(e) {
		let t = e, n = Qc(), { traits: r } = Ys(n), i = /* @__PURE__ */ R("");
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
		return (t, n) => (W(), G("section", Tf, [K("section", Ef, [
			n[3] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "1"), K("h2", null, "Traits")], -1),
			q(Wl, {
				class: "npc-builder__drop npc-builder__drop--career",
				description: "Add creature traits or NPC trait items.",
				title: "Drop Trait Items",
				onDropData: c
			}),
			i.value ? (W(), G("p", Df, M(i.value), 1)) : J("", !0),
			K("div", Of, [n[2] ||= K("div", { class: "npc-builder__table-head npc-builder__table-head--traits" }, [
				K("span", null, "Name"),
				K("span", null, "Source"),
				K("span", null, "Config"),
				K("span")
			], -1), (W(!0), G(U, null, H(z(r), (t) => (W(), G("article", {
				key: t.key,
				class: "npc-builder__trait-row"
			}, [
				K("div", kf, [
					K("strong", null, M(t.name), 1),
					t.config.rollable ? (W(), G("span", Af, "Rollable")) : J("", !0),
					t.config.damage ? (W(), G("span", jf, "Damage")) : J("", !0)
				]),
				K("span", null, M(a(t)), 1),
				K("div", Mf, [
					K("label", Nf, [K("span", null, M(t.config.damage ? "Damage" : "Specification"), 1), K("input", {
						value: t.config.specification,
						placeholder: "None",
						type: "text",
						onInput: (e) => s(t, "specification", e)
					}, null, 40, Pf)]),
					t.config.rollable && !t.config.damage ? (W(), G("label", Ff, [n[0] ||= K("span", null, "Difficulty", -1), K("select", {
						value: t.config.defaultDifficulty,
						onChange: (e) => s(t, "defaultDifficulty", e)
					}, [(W(!0), G(U, null, H(e.difficultyOptions, (e) => (W(), G("option", {
						key: e.value,
						value: e.value
					}, M(e.label), 9, Lf))), 128))], 40, If)])) : J("", !0),
					t.config.damage && t.config.dice ? (W(), G("label", Rf, [n[1] ||= K("span", null, "Dice", -1), K("input", {
						value: t.config.dice,
						placeholder: "Optional",
						type: "text",
						onInput: (e) => s(t, "dice", e)
					}, null, 40, zf)])) : J("", !0)
				]),
				K("button", {
					type: "button",
					onClick: (e) => o(t)
				}, "Remove", 8, Bf)
			]))), 128))])
		])]));
	}
}), Hf = { class: "npc-builder__stack" }, Uf = { class: "npc-builder__panel" }, Wf = { class: "npc-builder__panel-actions" }, Gf = ["disabled"], Kf = { key: 0 }, qf = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, Jf = { class: "npc-builder__table" }, Yf = ["checked", "onChange"], Xf = { class: "npc-builder__trapping-name" }, Zf = { key: 0 }, Qf = { class: "npc-builder__trapping-resolution" }, $f = ["value", "onChange"], ep = {
	key: 0,
	value: ""
}, tp = ["value"], np = { key: 1 }, rp = ["value", "onInput"], ip = ["onClick"], ap = { key: 1 }, op = "__blank-item__", sp = /* @__PURE__ */ lr({
	__name: "NpcBuilderTrappingsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Qc(), { trappings: r } = Ys(n), i = /* @__PURE__ */ R(""), a = /* @__PURE__ */ R(!1), o = Y(() => r.value.filter((e) => !e.ignored && e.resolution.status === "unresolved"));
		wr(() => {
			y();
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
			return e.ignored ? "Ignored" : e.resolution.status === "matched" ? "Matched" : e.resolution.status === "fallback" ? "Blank item" : e.resolution.status === "ambiguous" || e.resolution.candidates.length ? "Choose" : "Needs resolution";
		}
		function f(e) {
			let t = "npc-builder__status-pill";
			return e.ignored ? [t, "npc-builder__status-pill--muted"] : e.resolution.status === "matched" ? [t, "npc-builder__status-pill--success"] : e.resolution.status === "fallback" ? [t, "npc-builder__status-pill--fallback"] : e.resolution.status === "ambiguous" || e.resolution.candidates.length ? [t, "npc-builder__status-pill--warning"] : [t, "npc-builder__status-pill--danger"];
		}
		function p(e) {
			return e.ignored ? "" : e.resolution.status === "matched" ? "is-resolution-matched" : e.resolution.status === "fallback" ? "is-resolution-fallback" : e.resolution.status === "ambiguous" || e.resolution.candidates.length ? "is-resolution-choice" : "is-resolution-unresolved";
		}
		function m(e) {
			return e.resolution.status === "fallback" ? op : e.resolution.selectedCandidateUuid;
		}
		function h(e) {
			return e.source === "career";
		}
		function g(e) {
			return e.resolution.candidates.length > 0 || h(e);
		}
		function _(e) {
			return e.resolution.searchTerms.length <= 1 ? "" : `Options: ${e.resolution.searchTerms.join(" / ")}`;
		}
		function v(e, t) {
			let r = t.target;
			if (r?.value) {
				if (r.value === op) {
					n.setTrappingFallback(e);
					return;
				}
				n.selectTrappingResolutionCandidate(e, r.value);
			}
		}
		async function y() {
			if (o.value.length) {
				a.value = !0, i.value = "";
				try {
					for (let e of o.value) n.setTrappingResolution(e.key, await t.bridge.resolveTrapping(e.name));
				} catch (e) {
					i.value = x(e);
				} finally {
					a.value = !1;
				}
			}
		}
		async function b(e) {
			i.value = "";
			try {
				n.addCustomTrapping(await t.bridge.resolveTrappingDrop(e));
			} catch (e) {
				i.value = x(e);
			}
		}
		function x(e) {
			return e instanceof Error ? e.message : "The NPC Builder could not resolve that Trapping drop.";
		}
		return (e, t) => (W(), G("section", Hf, [K("section", Uf, [
			t[1] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "1"), K("h2", null, "Trappings")], -1),
			q(Wl, {
				class: "npc-builder__drop npc-builder__drop--career",
				description: "Add weapons, armour, containers, or any other item.",
				title: "Drop Trapping Items",
				onDropData: b
			}),
			K("div", Wf, [K("button", {
				disabled: a.value || !o.value.length,
				type: "button",
				onClick: y
			}, M(a.value ? "Resolving..." : "Resolve Trappings"), 9, Gf), o.value.length ? (W(), G("span", Kf, M(o.value.length) + " unresolved ", 1)) : J("", !0)]),
			i.value ? (W(), G("p", qf, M(i.value), 1)) : J("", !0),
			K("div", Jf, [t[0] ||= K("div", { class: "npc-builder__table-head npc-builder__table-head--traps" }, [
				K("span", null, "Use"),
				K("span", null, "Name"),
				K("span", null, "Resolution"),
				K("span", null, "Type"),
				K("span", null, "Qty"),
				K("span", null, "Source"),
				K("span")
			], -1), (W(!0), G(U, null, H(z(r), (e) => (W(), G("article", {
				key: e.key,
				class: j(["npc-builder__trapping-row", [p(e), { "is-ignored": e.ignored }]])
			}, [
				K("input", {
					checked: !e.ignored,
					type: "checkbox",
					onChange: (t) => l(e.key, t)
				}, null, 40, Yf),
				K("div", Xf, [K("strong", null, M(e.name), 1), _(e) ? (W(), G("span", Zf, M(_(e)), 1)) : J("", !0)]),
				K("div", Qf, [K("span", { class: j(f(e)) }, M(d(e)), 3), g(e) ? (W(), G("select", {
					key: 0,
					value: m(e),
					onChange: (t) => v(e.key, t)
				}, [
					e.resolution.candidates.length ? (W(), G("option", ep, " Choose match ")) : J("", !0),
					(W(!0), G(U, null, H(e.resolution.candidates, (e) => (W(), G("option", {
						key: e.uuid,
						value: e.uuid
					}, M(e.name) + " (" + M(e.sourceLabel) + ") ", 9, tp))), 128)),
					h(e) ? (W(), G("option", {
						key: 1,
						value: op
					}, " Blank Item ")) : J("", !0)
				], 40, $f)) : (W(), G("span", np, M(u(e)), 1))]),
				K("span", null, M(e.resolution.selectedItemType || e.itemType || "trapping"), 1),
				K("input", {
					value: e.quantity,
					min: "1",
					type: "number",
					onInput: (t) => c(e.key, t)
				}, null, 40, rp),
				K("span", null, M(s(e)), 1),
				e.source === "custom" ? (W(), G("button", {
					key: 0,
					type: "button",
					onClick: (t) => z(n).removeCustomTrapping(e.key)
				}, " Remove ", 8, ip)) : (W(), G("span", ap))
			], 2))), 128))])
		])]));
	}
}), cp = { class: "npc-builder__subview-stack" }, lp = [
	"checked",
	"disabled",
	"onChange"
], up = { class: "npc-builder__subview-actions" }, dp = /* @__PURE__ */ lr({
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
		return (t, r) => (W(), G("div", cp, [
			K("p", null, M(e.prompt.droppedCareer.name) + " appears to belong to the " + M(e.prompt.droppedCareer.careerGroup) + " career track. The following lower-tier candidates were found. ", 1),
			(W(!0), G(U, null, H(e.candidateGroups, (t) => (W(), G("section", {
				key: t.level,
				class: "npc-builder__candidate-group"
			}, [K("h3", null, "Tier " + M(t.level || "Unknown"), 1), (W(!0), G(U, null, H(t.candidates, (t) => (W(), G("label", {
				key: t.uuid,
				class: j(["npc-builder__candidate-row", { "is-queued": e.isCareerQueued(t.uuid) }])
			}, [K("input", {
				checked: e.isCareerQueued(t.uuid) || e.isLowerCareerSelected(t.uuid),
				disabled: e.isCareerQueued(t.uuid),
				type: "checkbox",
				onChange: (e) => n("lowerCareerSelected", t, e)
			}, null, 40, lp), K("span", null, [K("strong", null, M(t.name), 1), K("small", null, [pa(M(t.careerGroup || "Career") + " ", 1), e.isCareerQueued(t.uuid) ? (W(), G(U, { key: 0 }, [pa(" already queued ")], 64)) : J("", !0)])])], 2))), 128))]))), 128)),
			K("div", up, [K("button", {
				type: "button",
				onClick: r[0] ||= (e) => n("addDroppedOnly")
			}, " Add Dropped Only "), K("button", {
				type: "button",
				onClick: r[1] ||= (e) => n("addSelected")
			}, "Add Selected")])
		]));
	}
}), fp = { class: "npc-builder__subview-stack" }, pp = { class: "npc-builder__field" }, mp = ["onUpdate:modelValue"], hp = ["value"], gp = ["onUpdate:modelValue", "placeholder"], _p = {
	key: 0,
	class: "npc-builder__suggestions"
}, vp = { key: 0 }, yp = ["onClick"], bp = {
	key: 0,
	class: "npc-builder__linked-note"
}, xp = { class: "npc-builder__subview-actions" }, Sp = /* @__PURE__ */ lr({
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
		return (t, r) => (W(), G("div", fp, [
			r[4] ||= K("p", null, " Some Career skills need a specialization before they become concrete WFRP skills. Blank rows can be left unresolved and edited later. ", -1),
			(W(!0), G(U, null, H(e.prompt.rows, (t) => (W(), G("section", {
				key: t.resolutionKey,
				class: "npc-builder__resolution-row"
			}, [
				K("div", null, [K("strong", null, M(e.getSkillResolutionLabel(t)), 1), K("small", null, M(t.careerLabel), 1)]),
				K("label", pp, [r[3] ||= K("span", null, "Specialization", -1), t.options.length > 1 ? V((W(), G("select", {
					key: 0,
					"onUpdate:modelValue": (e) => t.resolvedSpecialization = e
				}, [r[2] ||= K("option", { value: "" }, "Leave unresolved", -1), (W(!0), G(U, null, H(t.options, (e) => (W(), G("option", {
					key: e,
					value: e
				}, M(e), 9, hp))), 128))], 8, mp)), [[ts, t.resolvedSpecialization]]) : V((W(), G("input", {
					key: 1,
					"onUpdate:modelValue": (e) => t.resolvedSpecialization = e,
					placeholder: t.suggestedSpecializations.length ? "Type or choose below" : t.specialization,
					type: "text"
				}, null, 8, gp)), [[Qo, t.resolvedSpecialization]])]),
				e.usesFreeformSkillSpecialization(t) ? (W(), G("div", _p, [t.isLoadingSuggestions ? (W(), G("small", vp, "Finding known choices.")) : J("", !0), (W(!0), G(U, null, H(t.suggestedSpecializations, (e) => (W(), G("button", {
					key: `${t.resolutionKey}:${e}`,
					type: "button",
					onClick: (r) => n("chooseSkillSpecialization", t, e)
				}, M(e), 9, yp))), 128))])) : J("", !0)
			]))), 128)),
			e.prompt.linkedRows.length ? (W(), G("div", bp, M(e.prompt.linkedRows.length) + " linked skill specialization" + M(e.prompt.linkedRows.length === 1 ? "" : "s") + " will reuse earlier choices from this career chain. ", 1)) : J("", !0),
			K("div", xp, [K("button", {
				type: "button",
				onClick: r[0] ||= (e) => n("addWithoutResolving")
			}, " Add Without Resolving "), K("button", {
				type: "button",
				onClick: r[1] ||= (e) => n("applySpecializations")
			}, " Apply Specializations ")])
		]));
	}
}), Cp = { class: "npc-builder" }, wp = { class: "npc-builder__header" }, Tp = { class: "npc-builder__header-actions" }, Ep = {
	"aria-label": "NPC Builder sections",
	class: "npc-builder__tabs"
}, Dp = ["disabled"], Op = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, kp = {
	key: 1,
	class: "npc-builder__message"
}, Ap = /* @__PURE__ */ lr({
	__name: "NpcBuilderApp",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Qc(), { advancements: r, buildTraits: i, careers: a, finalActorName: o, finalPortraitPath: s, hasMagicAccess: c, selectedSpells: l, selectedBaseActor: u, selectedBaseActorUuid: d, settings: f, trappings: p } = Ys(n), m = /* @__PURE__ */ R("builder"), h = /* @__PURE__ */ R(""), g = /* @__PURE__ */ R(""), _ = /* @__PURE__ */ R(!1), v = /* @__PURE__ */ R(!1), y = /* @__PURE__ */ R(!1), b = /* @__PURE__ */ R(!1), x = /* @__PURE__ */ R(null), S = /* @__PURE__ */ R(null), C = /* @__PURE__ */ R([]), w = /* @__PURE__ */ new Set(), T = /* @__PURE__ */ new Set(), E = Y(() => !!(u.value && a.value.length && !_.value && !v.value)), ee = Y(() => {
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
		}), D = Y(() => {
			let e = /* @__PURE__ */ new Set();
			for (let t of r.value) t.kind === "skill" && !t.characteristicKey && !pc(t.name) && e.add(t.name);
			return [...e];
		}), te = Y(() => {
			let e = /* @__PURE__ */ new Set();
			for (let t of r.value) t.kind === "talent" && !t.talentMaximumKey && e.add(t.name);
			return [...e];
		});
		wr(async () => {
			y.value = !0;
			try {
				let [e, r, i, a] = await Promise.all([
					t.bridge.loadSettings(),
					t.bridge.listActorFolders(),
					t.bridge.listItemFolders(),
					t.bridge.listTraitDifficultyOptions()
				]);
				n.hydrateSettings(e), n.hydrateActorFolders(r), n.hydrateItemFolders(i), C.value = a, await Promise.all([re(), ie()]);
			} catch (e) {
				g.value = xe(e);
			} finally {
				y.value = !1;
			}
		}), Hn(d, async (e) => {
			if (g.value = "", !e) {
				n.clearBaseDraftData();
				return;
			}
			b.value = !0;
			try {
				n.hydrateBaseActorDraftData(await t.bridge.loadBaseActorDraftData(e));
			} catch (e) {
				g.value = xe(e), n.clearBaseDraftData();
			} finally {
				b.value = !1;
			}
		}), Hn(D, async (e) => {
			let r = e.filter((e) => {
				let t = hc(e);
				return w.has(t) ? !1 : (w.add(t), !0);
			});
			if (r.length) try {
				let e = await t.bridge.listSkillCharacteristics(r);
				n.hydrateSkillCharacteristics(e);
			} catch {}
		}, { immediate: !0 }), Hn(te, async (e) => {
			let r = e.filter((e) => {
				let t = hc(e);
				return T.has(t) ? !1 : (T.add(t), !0);
			});
			if (r.length) try {
				let e = await t.bridge.listTalentMaximums(r);
				n.hydrateTalentMaximums(e);
			} catch {}
		}, { immediate: !0 });
		async function O() {
			if (!u.value || !a.value.length) return;
			_.value = !0, g.value = "", h.value = "Building actor from the selected draft.";
			let e = {
				actorName: o.value,
				advancements: r.value,
				baseActorUuid: u.value.uuid,
				careers: a.value,
				portraitPath: s.value,
				settings: f.value,
				spells: l.value,
				traits: i.value,
				trappings: p.value
			};
			try {
				h.value = `Created ${(await t.bridge.buildNpc(e)).name}.`, n.resetDraft(), m.value = "builder";
			} catch (e) {
				g.value = xe(e), h.value = "";
			} finally {
				_.value = !1;
			}
		}
		async function ne(e) {
			await se(e, async (e) => {
				await k(await t.bridge.resolveCareerDrop(e));
			});
		}
		async function k(e) {
			if (f.value.lowerCareerMode === "never") {
				A([{
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
				let n = await t.bridge.findLowerCareerCandidates(e), r = n.filter((e) => !ge(e.uuid));
				if (!r.length) {
					A([{
						career: e,
						mode: "add-or-increment"
					}], {
						enableLinkedSkillResolution: !1,
						message: ""
					}), h.value = "";
					return;
				}
				if (f.value.lowerCareerMode === "auto-add-all") {
					A([...r.map((e) => ({
						career: e,
						mode: "add-if-missing"
					})), {
						career: e,
						mode: "add-or-increment"
					}], {
						enableLinkedSkillResolution: !f.value.askForLinkedSkillSpecializations,
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
		async function re() {
			n.hydrateBaseActors(await t.bridge.listBaseActors(f.value));
		}
		async function ie() {
			n.hydrateQuickTraits(await t.bridge.listQuickTraits(f.value));
		}
		function A(e, t) {
			let n = le(e, t);
			if (n.rows.length) {
				S.value = n, de(S.value);
				return;
			}
			fe(e, t.message);
		}
		function ae() {
			let e = x.value;
			if (!e) return;
			let t = e.candidates.filter((t) => e.selectedUuids.includes(t.uuid));
			x.value = null, A([...t.map((e) => ({
				career: e,
				mode: "add-if-missing"
			})), {
				career: e.droppedCareer,
				mode: "add-or-increment"
			}], {
				enableLinkedSkillResolution: !f.value.askForLinkedSkillSpecializations,
				message: t.length > 0 ? `Added ${t.length} lower-tier career candidate${t.length === 1 ? "" : "s"}.` : ""
			});
		}
		function oe() {
			let e = x.value;
			e && (x.value = null, A([{
				career: e.droppedCareer,
				mode: "add-or-increment"
			}], {
				enableLinkedSkillResolution: !1,
				message: ""
			}));
		}
		async function se(e, t) {
			g.value = "";
			try {
				await t(e);
			} catch (e) {
				g.value = xe(e);
			}
		}
		function ce() {
			let e = S.value;
			if (e) {
				for (let t of e.rows) {
					let e = t.resolvedSpecialization.trim() ? dc(t.baseName, t.resolvedSpecialization) : "";
					n.setSkillGrantResolution(t.resolutionKey, e);
				}
				for (let t of e.linkedRows) n.setSkillGrantResolution(t.resolutionKey, n.getSkillGrantResolution(t.linkedFromKey));
				S.value = null, fe(e.entries, e.message);
			}
		}
		function le(e, t) {
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
						careerLabel: pe(a.career),
						isLoadingSuggestions: !1,
						occurrence: o.occurrence,
						options: s.options,
						originalName: s.originalName,
						resolvedSpecialization: me(s),
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
		function ue() {
			let e = S.value;
			e && (S.value = null, fe(e.entries, e.message));
		}
		async function de(e) {
			await Promise.all(e.rows.map(async (e) => {
				if (ve(e)) {
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
		function fe(e, t) {
			for (let t of e) {
				if (t.mode === "add-if-missing") {
					n.addCareerIfMissing(t.career);
					continue;
				}
				n.addCareer(t.career);
			}
			h.value = t;
		}
		function pe(e) {
			return e.level === null ? e.name : `${e.name}, tier ${e.level}`;
		}
		function me(e) {
			return e.specialization.trim().toLocaleLowerCase() === "any" ? "" : e.options[0] ?? "";
		}
		function he(e) {
			return e.occurrence > 0 ? `${e.originalName}, choice ${e.occurrence + 1}` : e.originalName;
		}
		function ge(e) {
			return a.value.some((t) => t.uuid === e);
		}
		function _e(e) {
			return x.value?.selectedUuids.includes(e) ?? !1;
		}
		function ve(e) {
			return e.options.length <= 1 && e.specialization.trim().toLocaleLowerCase() === "any";
		}
		function ye(e, t) {
			e.resolvedSpecialization = t;
		}
		function be(e, t) {
			let n = x.value, r = t.target;
			if (!(!n || !r || ge(e.uuid))) {
				if (r.checked) {
					n.selectedUuids = [...new Set([...n.selectedUuids, e.uuid])];
					return;
				}
				n.selectedUuids = n.selectedUuids.filter((t) => t !== e.uuid);
			}
		}
		function xe(e) {
			return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
		}
		return (e, n) => (W(), G("main", Cp, [
			K("header", wp, [n[6] ||= K("div", null, [K("p", null, "WFRP4e Customizer"), K("h1", null, "NPC Builder")], -1), K("div", Tp, [K("nav", Ep, [
				K("button", {
					class: j({ "is-active": m.value === "builder" }),
					type: "button",
					onClick: n[0] ||= (e) => m.value = "builder"
				}, " Build ", 2),
				K("button", {
					class: j({ "is-active": m.value === "advancements" }),
					type: "button",
					onClick: n[1] ||= (e) => m.value = "advancements"
				}, " Advances ", 2),
				K("button", {
					class: j({ "is-active": m.value === "trappings" }),
					type: "button",
					onClick: n[2] ||= (e) => m.value = "trappings"
				}, " Trappings ", 2),
				K("button", {
					class: j({ "is-active": m.value === "traits" }),
					type: "button",
					onClick: n[3] ||= (e) => m.value = "traits"
				}, " Traits ", 2),
				z(c) || z(l).length ? (W(), G("button", {
					key: 0,
					class: j({ "is-active": m.value === "spells" }),
					type: "button",
					onClick: n[4] ||= (e) => m.value = "spells"
				}, " Spells ", 2)) : J("", !0),
				K("button", {
					class: j({ "is-active": m.value === "settings" }),
					type: "button",
					onClick: n[5] ||= (e) => m.value = "settings"
				}, " Settings ", 2)
			]), K("button", {
				disabled: !E.value,
				type: "button",
				onClick: O
			}, " Build NPC ", 8, Dp)])]),
			q(nl, {
				open: x.value !== null,
				title: "Add Lower-Tier Careers?",
				onClose: oe
			}, {
				default: Fn(() => [x.value ? (W(), aa(dp, {
					key: 0,
					"candidate-groups": ee.value,
					"is-career-queued": ge,
					"is-lower-career-selected": _e,
					prompt: x.value,
					onAddDroppedOnly: oe,
					onAddSelected: ae,
					onLowerCareerSelected: be
				}, null, 8, ["candidate-groups", "prompt"])) : J("", !0)]),
				_: 1
			}, 8, ["open"]),
			q(nl, {
				open: S.value !== null,
				title: "Resolve Skill Specializations",
				onClose: ue
			}, {
				default: Fn(() => [S.value ? (W(), aa(Sp, {
					key: 0,
					"get-skill-resolution-label": he,
					prompt: S.value,
					"uses-freeform-skill-specialization": ve,
					onAddWithoutResolving: ue,
					onApplySpecializations: ce,
					onChooseSkillSpecialization: ye
				}, null, 8, ["prompt"])) : J("", !0)]),
				_: 1
			}, 8, ["open"]),
			g.value ? (W(), G("p", Op, M(g.value), 1)) : h.value ? (W(), G("p", kp, M(h.value), 1)) : J("", !0),
			m.value === "settings" ? (W(), aa(Yd, {
				key: 2,
				bridge: t.bridge
			}, null, 8, ["bridge"])) : m.value === "advancements" ? (W(), aa(Al, { key: 3 })) : m.value === "trappings" ? (W(), aa(sp, {
				key: 4,
				bridge: t.bridge
			}, null, 8, ["bridge"])) : m.value === "traits" ? (W(), aa(Vf, {
				key: 5,
				bridge: t.bridge,
				"difficulty-options": C.value
			}, null, 8, ["bridge", "difficulty-options"])) : m.value === "spells" ? (W(), aa(wf, {
				key: 6,
				bridge: t.bridge
			}, null, 8, ["bridge"])) : (W(), aa(od, {
				key: 7,
				bridge: t.bridge,
				"is-loading-actors": y.value,
				"is-loading-base-draft": b.value,
				onCareerDrop: ne
			}, null, 8, [
				"bridge",
				"is-loading-actors",
				"is-loading-base-draft"
			]))
		]));
	}
}), jp = Ps(), Mp = class extends foundry.applications.api.ApplicationV2 {
	#e;
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("wfrp4e-customizer-vue-root", "root"), n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("wfrp4e-customizer-vue-app", "vue-app"), t.replaceChildren(e);
		let r = this.getVueProps() ?? {};
		this.#e = ps(this.getVueComponent(), r), this.#e.use(jp), this.#e.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#e?.unmount(), this.#e = void 0;
	}
};
//#endregion
//#region src/shared/object-readers.ts
function Np(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function Z(e, t) {
	let n = e;
	for (let e of t) {
		if (!Np(n) || !(e in n)) return;
		n = n[e];
	}
	return n;
}
function Q(e, t) {
	let n = Z(e, t);
	return typeof n == "string" ? n.trim() : "";
}
function Pp(e, t) {
	let n = Z(e, t);
	return Array.isArray(n) ? n.filter((e) => typeof e == "string") : [];
}
function Fp(e, t, n = 0) {
	return Ip(e, t) ?? n;
}
function Ip(e, t) {
	for (let n of t) {
		let t = Number(Z(e, n));
		if (Number.isFinite(t)) return t;
	}
	return null;
}
function Lp(e, t, n = !1) {
	for (let n of t) {
		let t = Z(e, n);
		if (typeof t == "boolean") return t;
	}
	return n;
}
function Rp(e) {
	return Array.isArray(e) ? e.flatMap(Rp) : typeof e == "string" ? e.split(/[,;\n\r]/).map((e) => e.trim()).filter(Boolean) : Np(e) ? Object.values(e).flatMap(Rp) : [];
}
function zp(e, t, n) {
	let r = e;
	for (let e of t.slice(0, -1)) {
		let t = r[e];
		Np(t) || (r[e] = {}), r = r[e];
	}
	r[t[t.length - 1] ?? ""] = n;
}
//#endregion
//#region src/functions/npc-builder/extract-career-grants.ts
var Bp = {
	characteristics: [],
	skills: [],
	talents: [],
	trappings: []
};
function Vp(e) {
	return {
		characteristics: Hp(e),
		skills: Up(e),
		talents: Gp(e, [["talents", "value"], ["talents"]]),
		trappings: Gp(e, [["trappings", "value"], ["trappings"]])
	};
}
function Hp(e) {
	let t = Gp(e, [["characteristics", "value"], ["characteristics"]]);
	if (t.length) return t.map(Wp);
	let n = Z(e, ["characteristics"]);
	if (!Np(n)) return [];
	let r = [];
	for (let [e, t] of Object.entries(n)) t && r.push(Wp(e));
	return qp(r);
}
function Up(e) {
	return Gp(e, [["skills", "value"], ["skills"]], { preserveDuplicates: !0 });
}
function Wp(e) {
	let t = e.trim().toLocaleLowerCase();
	if (zc(t)) return Lc[t];
	let n = Rc[t];
	return n ? Lc[n] : e.trim();
}
function Gp(e, t, n = {}) {
	for (let r of t) {
		let t = Rp(Z(e, r));
		if (t.length) return n.preserveDuplicates ? Kp(t) : qp(t);
	}
	return [];
}
function Kp(e) {
	return e.map((e) => e.trim()).filter(Boolean);
}
function qp(e) {
	return [...new Set(Kp(e))].sort((e, t) => e.localeCompare(t));
}
Object.freeze(Bp);
//#endregion
//#region src/module/foundry/document-guards.ts
function Jp(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Actor";
}
function Yp(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Item";
}
function Xp(e, t = "Expected a Foundry Actor.") {
	if (!Jp(e)) throw Error(t);
	return e;
}
function Zp(e, t = "Expected a Foundry Item.") {
	if (!Yp(e)) throw Error(t);
	return e;
}
function Qp(e, t, n = `Expected a Foundry ${t} Item.`) {
	let r = Zp(e, n);
	if (r.type !== t) throw Error(n);
	return r;
}
//#endregion
//#region src/module/wfrp4e/career-index.ts
var $p = /* @__PURE__ */ new Map(), em = "idle", tm = null;
function nm() {
	return tm || (em = "indexing", $p.clear(), tm = im().then(() => {
		em = "ready";
	}).catch((e) => {
		em = "error", e instanceof Error && e.message, console.warn("wfrp4e-customizer-apps | Career indexing failed.", e);
	}), tm);
}
async function rm(e) {
	return em === "idle" && nm(), !e.careerGroup || e.level === null ? [] : [...$p.values()].filter((t) => lm(t, e)).sort(dm);
}
async function im() {
	sm(), await pm();
	for (let e of game.packs ?? []) {
		if (!cm(e) || !e.getDocuments) continue;
		let t = await e.getDocuments();
		for (let e of t) Yp(e) && e.type === "career" && $p.set(e.uuid, fm(e));
		await pm();
	}
}
function am(e) {
	return Q(e.system, ["careergroup", "value"]);
}
function om(e) {
	let t = Z(e.system, ["level", "value"]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
function sm() {
	for (let e of game.items?.contents ?? []) e.type === "career" && $p.set(e.uuid, fm(e));
}
function cm(e) {
	return e.documentName === "Item";
}
function lm(e, t) {
	return e.uuid !== t.uuid && e.level !== null && t.level !== null && e.level < t.level && um(e.careerGroup) === um(t.careerGroup);
}
function um(e) {
	return e.trim().toLocaleLowerCase();
}
function dm(e, t) {
	let n = e.level ?? 0, r = t.level ?? 0;
	return n === r ? e.name.localeCompare(t.name) : n - r;
}
function fm(e) {
	return {
		careerGroup: am(e),
		grants: Vp(e.system),
		img: e.img ?? "",
		level: om(e),
		name: e.name,
		uuid: e.uuid
	};
}
function pm() {
	return new Promise((e) => {
		globalThis.setTimeout(e, 0);
	});
}
//#endregion
//#region src/module/wfrp4e/skill-specializations.ts
var mm = /* @__PURE__ */ new Map(), hm = /* @__PURE__ */ new Map(), gm = /* @__PURE__ */ new Map(), _m = "idle", vm = null;
async function ym(e) {
	let t = hc(e);
	return t ? (_m === "idle" && xm(), vm && await vm, [...mm.get(t) ?? []].sort((e, t) => e.localeCompare(t))) : [];
}
async function bm(e) {
	return _m === "idle" && xm(), vm && await vm, e.flatMap((e) => {
		let t = Tm(e);
		return t ? [{
			...t,
			skillName: e
		}] : [];
	});
}
function xm() {
	return vm || (_m = "indexing", mm.clear(), hm.clear(), gm.clear(), vm = Sm().then(() => {
		_m = "ready";
	}).catch((e) => {
		_m = "error", e instanceof Error && e.message, console.warn("wfrp4e-customizer-apps | Skill specialization indexing failed.", e);
	}), vm);
}
async function Sm() {
	Em(), await Om();
	for (let e of game.packs ?? []) {
		if (!Dm(e) || !e.getDocuments) continue;
		let t = await e.getDocuments();
		for (let e of t) Yp(e) && Cm(e);
		await Om();
	}
}
function Cm(e) {
	if (e.type !== "skill") return;
	wm(e);
	let t = fc(e.name);
	if (!t) return;
	let n = hc(t.baseName), r = mm.get(n) ?? /* @__PURE__ */ new Set();
	r.add(t.specialization), mm.set(n, r);
}
function wm(e) {
	let t = Q(e.system, ["characteristic", "value"]);
	if (!zc(t)) return;
	let n = {
		characteristicKey: t,
		characteristicName: Lc[t],
		skillName: e.name
	}, r = hc(e.name), i = hc(fc(e.name)?.baseName ?? e.name);
	hm.set(r, n), gm.has(i) || gm.set(i, n);
}
function Tm(e) {
	let t = hc(e), n = hc(fc(e)?.baseName ?? e);
	return hm.get(t) ?? gm.get(n) ?? null;
}
function Em() {
	for (let e of game.items?.contents ?? []) Cm(e);
}
function Dm(e) {
	return e.documentName === "Item";
}
function Om() {
	return new Promise((e) => {
		globalThis.setTimeout(e, 0);
	});
}
//#endregion
//#region src/module/foundry/item-sources.ts
function km(e, t) {
	return {
		img: "systems/wfrp4e/icons/blank.png",
		name: e,
		system: {},
		type: t
	};
}
function Am(e, t, n) {
	let r = e ? e.toObject() : km(t, n);
	return delete r._id, r;
}
function jm(e, t, n) {
	return e.items?.contents.find((e) => e.type === n && Pm(e.name, t)) ?? null;
}
function Mm(e, t, n) {
	return e.items?.contents.find((e) => t && e.uuid === t ? !0 : Pm(e.name, n)) ?? null;
}
function Nm(e, t) {
	return game.items?.contents.find((n) => t.includes(n.type) && Pm(n.name, e)) ?? null;
}
function Pm(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/wfrp4e/item-lookup.ts
async function Fm(e, t) {
	return await game.wfrp4e?.utility?.findItem?.(e, t) || Nm(e, t);
}
//#endregion
//#region src/module/wfrp4e/talent-maximums.ts
async function Im(e) {
	let t = [];
	for (let n of Lm(e)) {
		let e = await Fm(n, ["talent"]);
		e && t.push({
			maximumFormula: Q(e.system, ["max", "formula"]),
			maximumKey: Q(e.system, ["max", "value"]),
			talentName: n
		});
	}
	return t;
}
function Lm(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.trim().toLocaleLowerCase();
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/advancements.ts
async function Rm(e, t) {
	let n = {}, r = [], i = [];
	for (let a of t) {
		let t = Math.floor(a.current);
		if (t === 0) continue;
		let o = a.baseAdvances + t;
		if (a.kind === "characteristic") {
			Wm(n, a, o);
			continue;
		}
		let s = jm(e, a.name, a.kind);
		if (s) {
			r.push({
				_id: s.id,
				"system.advances.value": o
			});
			continue;
		}
		let c = Am(await Fm(a.name, [a.kind]), a.name, a.kind);
		c.type = a.kind, zp(c, [
			"system",
			"advances",
			"value"
		], o), i.push(c);
	}
	Object.keys(n).length && await e.update(n), r.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", r), i.length && await e.createEmbeddedDocuments("Item", i);
}
function zm(e) {
	let t = [];
	for (let [n, r] of Object.entries(Lc)) {
		let i = Fp(e.system, [[
			"characteristics",
			n,
			"advances",
			"value"
		], [
			"characteristics",
			n,
			"advances"
		]]), a = Fp(e.system, [
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
function Bm(e, t) {
	return e.items?.contents.filter((e) => e.type === t).map((n) => Vm(e, n, t)) ?? [];
}
function Vm(e, t, n) {
	let r = Fp(t.system, [["advances", "value"], ["advances"]]);
	if (n === "talent") return {
		baseAdvances: r,
		current: r,
		kind: n,
		name: t.name,
		talentMaximumFormula: Q(t.system, ["max", "formula"]),
		talentMaximumKey: Q(t.system, ["max", "value"])
	};
	let i = Hm(t), a = i ? Um(e, i) : 0, o = Ip(t.system, [["total", "value"], ["total"]]), s = o !== null && i ? Math.max(0, o - a) : 0, c = Math.max(r, s), l = {
		baseAdvances: c,
		current: i ? a + c : c,
		kind: n,
		name: t.name
	};
	return i && (l.characteristicKey = i, l.characteristicName = Lc[i]), l;
}
function Hm(e) {
	let t = Q(e.system, ["characteristic", "value"]);
	return zc(t) ? t : void 0;
}
function Um(e, t) {
	return Fp(e.system, [
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
function Wm(e, t, n) {
	let r = Rc[t.name.trim().toLocaleLowerCase()];
	r && (e[`system.characteristics.${r}.advances`] = n);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/drop-data.ts
function Gm(e) {
	try {
		return JSON.parse(e);
	} catch {
		throw Error("Foundry drop data could not be read.");
	}
}
//#endregion
//#region src/functions/npc-builder/recommended-quick-traits.ts
var Km = [
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
async function qm(e) {
	return eh(await $m(e, "Actor"));
}
async function Jm(e) {
	return eh(await $m(e, "Item"));
}
function Ym() {
	return game.folders.contents.filter((e) => e.type === "Actor").map(eh).sort((e, t) => e.name.localeCompare(t.name));
}
function Xm() {
	return game.folders.contents.filter((e) => e.type === "Item").map(eh).sort((e, t) => e.name.localeCompare(t.name));
}
function Zm(e) {
	return e ? game.folders.contents.find((t) => t.uuid === e) ?? null : null;
}
function Qm(e) {
	let t = Zm(e);
	return t?.type === "Item" ? t : null;
}
async function $m(e, t) {
	let n = e.trim();
	if (!n) throw Error("Enter a folder name first.");
	let r = game.folders.contents.find((e) => e.type === t && th(e.name, n));
	if (r) return r;
	let i = await Folder.create({
		name: n,
		type: t
	});
	if (!i) throw Error("Foundry did not create the folder.");
	return i;
}
function eh(e) {
	return {
		name: e.name,
		uuid: e.uuid
	};
}
function th(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits.ts
var nh = [
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
async function rh(e, t) {
	let n = [], r = [], i = [];
	for (let a of t) {
		let t = a.source === "base" ? Mm(e, a.sourceUuid, a.name) : jm(e, a.name, "trait");
		if (a.ignored) {
			t && i.push(t.id);
			continue;
		}
		if (t) {
			n.push(ph(t.id, a.config));
			continue;
		}
		let o = Am(a.sourceUuid ? await vh(a.sourceUuid) : await Fm(a.name, ["trait"]), a.name, "trait");
		o.type = "trait", zp(o, ["system", "disabled"], !1), fh(o, a.config), r.push(o);
	}
	i.length && e.deleteEmbeddedDocuments && await e.deleteEmbeddedDocuments("Item", i), n.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", n), r.length && await e.createEmbeddedDocuments("Item", r);
}
async function ih(e) {
	let t = Qm(e.quickTraitFolderUuid);
	if (!t) throw Error("Choose a Quick Traits item folder before importing traits.");
	let n = new Set(_h(e).map((e) => e.name.trim().toLocaleLowerCase()));
	for (let e of Km) {
		if (n.has(e.trim().toLocaleLowerCase())) continue;
		let r = Am(await Fm(e, ["trait"]), e, "trait");
		r.folder = t.id, r.type = "trait", await Item.create(r);
	}
	return ui.notifications?.info("Imported recommended quick traits."), ah(e);
}
async function ah(e) {
	return _h(e).map(bh).sort((e, t) => e.name.localeCompare(t.name));
}
async function oh() {
	let e = Z(game.wfrp4e?.config, ["difficultyLabels"]);
	if (!Np(e)) return nh;
	let t = Object.entries(e).filter((e) => {
		let [t, n] = e;
		return !!t.trim() && typeof n == "string";
	}).map(([e, t]) => ({
		label: t,
		value: e
	}));
	return t.length ? t : nh;
}
function sh(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && !mh(e)).map(yh) ?? [];
}
function ch(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && mh(e)).map(yh) ?? [];
}
function lh(e) {
	Array.isArray(e.items) && (e.items = e.items.filter((e) => {
		if (typeof e != "object" || !e) return !0;
		let t = e;
		return t.type !== "trait" || !hh(t);
	}));
}
async function uh(e) {
	let t = Gm(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Trait item here.");
	let n = Qp(await fromUuid(t.uuid), "trait", "Drop a Foundry Trait item here.");
	return {
		config: dh(n),
		ignored: !1,
		key: `custom:${n.uuid}`,
		name: n.name,
		source: "custom",
		sourceUuid: n.uuid
	};
}
function dh(e) {
	return {
		...Xs(),
		attackType: xh(e.system, ["rollable", "attackType"]) || "melee",
		bonusCharacteristic: xh(e.system, ["rollable", "bonusCharacteristic"]),
		damage: Lp(e.system, [["rollable", "damage"]]),
		defaultDifficulty: xh(e.system, ["rollable", "defaultDifficulty"]) || "challenging",
		dice: xh(e.system, ["rollable", "dice"]),
		rollable: Lp(e.system, [["rollable", "value"]]),
		skill: xh(e.system, ["rollable", "skill"]),
		sl: Lp(e.system, [["rollable", "SL"]], !0),
		specification: xh(e.system, ["specification", "value"])
	};
}
function fh(e, t) {
	zp(e, [
		"system",
		"specification",
		"value"
	], t.specification), t.rollable && !t.damage && zp(e, [
		"system",
		"rollable",
		"defaultDifficulty"
	], t.defaultDifficulty), t.damage && t.dice && zp(e, [
		"system",
		"rollable",
		"dice"
	], t.dice);
}
function ph(e, t) {
	return {
		_id: e,
		"system.specification.value": t.specification,
		...t.rollable && !t.damage ? { "system.rollable.defaultDifficulty": t.defaultDifficulty } : {},
		...t.damage && t.dice ? { "system.rollable.dice": t.dice } : {}
	};
}
function mh(e) {
	return Lp(e.system, [["disabled"], ["disabled", "value"]]);
}
function hh(e) {
	return Lp(e.system, [["disabled"], ["disabled", "value"]]);
}
function gh(e, t) {
	return t.quickTraitFolderUuid ? e.folder?.uuid === t.quickTraitFolderUuid : !1;
}
function _h(e) {
	return game.items?.contents.filter((t) => t.type === "trait" && gh(t, e)) ?? [];
}
async function vh(e) {
	let t = await fromUuid(e);
	return Yp(t) ? t : null;
}
function yh(e) {
	return {
		config: dh(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
function bh(e) {
	return {
		config: dh(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
function xh(e, t) {
	let n = Z(e, t);
	return typeof n == "string" ? n.trim() : typeof n == "number" ? String(n) : "";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/trappings.ts
var Sh = [
	"ammunition",
	"armour",
	"container",
	"money",
	"trapping",
	"weapon"
];
async function Ch(e, t) {
	let n = [], r = [], i = [];
	for (let a of t) {
		let t = a.source === "base" ? Mm(e, a.sourceUuid, a.name) : null;
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
		let o = await kh(a), s = a.resolution.selectedItemType || a.itemType || "trapping", c = Am(o, a.resolution.selectedName || a.name, s);
		c.type = s || c.type || "trapping", zp(c, [
			"system",
			"quantity",
			"value"
		], a.quantity), r.push(c);
	}
	i.length && e.deleteEmbeddedDocuments && await e.deleteEmbeddedDocuments("Item", i), n.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", n), r.length && await e.createEmbeddedDocuments("Item", r);
}
async function wh(e) {
	return xc(e, await Ah());
}
async function Th(e) {
	let t = Gm(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Item here.");
	let n = Zp(await fromUuid(t.uuid), "Drop a Foundry Item here.");
	return {
		ignored: !1,
		itemType: n.type,
		key: `custom:${n.uuid}`,
		name: n.name,
		quantity: Dh(n),
		resolution: yc({
			itemType: n.type,
			name: n.name,
			uuid: n.uuid
		}),
		source: "custom",
		sourceUuid: n.uuid
	};
}
function Eh(e) {
	let t = Oh();
	return e.items?.contents.filter((e) => t.includes(e.type)).map((e) => ({
		itemType: e.type,
		name: e.name,
		quantity: Dh(e),
		uuid: e.uuid
	})) ?? [];
}
function Dh(e) {
	return Fp(e.system, [["quantity", "value"], ["quantity"]]) || 1;
}
function Oh() {
	let e = Pp(game.wfrp4e?.config, ["trappingItems"]);
	return e.length ? e : Sh;
}
async function kh(e) {
	if (e.sourceUuid) {
		let t = await fromUuid(e.sourceUuid);
		return Yp(t) ? t : null;
	}
	if (e.resolution.selectedCandidateUuid) {
		let t = await fromUuid(e.resolution.selectedCandidateUuid);
		return Yp(t) ? t : null;
	}
	return e.resolution.status === "fallback" ? null : Fm(e.resolution.selectedName || e.name, Oh());
}
async function Ah() {
	let e = [], t = Oh();
	for (let n of game.items?.contents ?? []) t.includes(n.type) && e.push(Ph(n, "World"));
	for (let n of game.packs ?? []) {
		if (!Nh(n)) continue;
		let r = await jh(n, t);
		if (r.length) {
			e.push(...r);
			continue;
		}
		if (!n.getDocuments) continue;
		let i = await n.getDocuments();
		for (let r of i) Yp(r) && t.includes(r.type) && e.push(Ph(r, n.title ?? "Compendium"));
	}
	return e;
}
async function jh(e, t) {
	return e.getIndex ? ((await e.getIndex({ fields: ["name", "type"] })).contents ?? []).filter((n) => !!(n.name && n.type && Mh(e, n) && t.includes(n.type))).map((t) => ({
		itemType: t.type ?? "trapping",
		name: t.name ?? "",
		sourceLabel: e.title ?? "Compendium",
		uuid: Mh(e, t)
	})) : [];
}
function Mh(e, t) {
	return t.uuid ? t.uuid : t._id && e.getUuid ? e.getUuid(t._id) : "";
}
function Nh(e) {
	return e.documentName === "Item";
}
function Ph(e, t) {
	return {
		itemType: e.type,
		name: e.name,
		sourceLabel: t,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/actors.ts
function Fh(e) {
	return game.actors.contents.filter((t) => Vh(t, e)).map(Rh);
}
async function Ih(e) {
	let t = Xp(await fromUuid(e));
	return {
		advancements: [
			...zm(t),
			...Bm(t, "skill"),
			...Bm(t, "talent")
		],
		optionalTraits: ch(t),
		traits: sh(t),
		trappings: Eh(t)
	};
}
async function Lh(e) {
	let t = Gm(e);
	if (t.type !== "Actor") throw Error("Drop a Foundry Actor here.");
	let n = null;
	return t.uuid ? n = await fromUuid(t.uuid) : t.id && (n = game.actors.get(t.id)), Rh(Xp(n));
}
function Rh(e) {
	return {
		img: e.img ?? "",
		name: e.name,
		prototypeTokenImg: Bh(e),
		species: zh(e),
		type: e.type,
		uuid: e.uuid
	};
}
function zh(e) {
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
function Bh(e) {
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
function Vh(e, t) {
	return t.baseActorFolderUuid ? e.folder?.uuid === t.baseActorFolderUuid : !0;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic.ts
var Hh = "spell", Uh = new Set($s), Wh = new Set(ec), Gh = "[WFRP Customizer Apps][Spell Lookup]";
async function Kh(e, t) {
	let n = [];
	for (let r of t) {
		if (!r.selected || jm(e, r.name, Hh)) continue;
		let t = Am(r.sourceUuid ? await kg(r.sourceUuid) : null, r.name, Hh);
		t.type = Hh, n.push(t);
	}
	n.length && await e.createEmbeddedDocuments("Item", n);
}
async function qh(e) {
	let t = Zh(e, Xh());
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
	let n = await Qh(), r = /* @__PURE__ */ new Map(), i = [];
	for (let e of n) {
		let n = og(e, t);
		if (!n) {
			i.length < 20 && i.push({
				loreTerms: cg(e.system),
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
async function Jh(e) {
	let t = Gm(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Spell item here.");
	let n = Qp(await fromUuid(t.uuid), Hh, "Drop a Foundry Spell item here."), r = og(bg(n, "Dropped"), [...Xh(), fg()]) ?? pg(cg(n.system)[0] ?? "");
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
async function Yh() {
	return Xh().map((e) => ({
		category: ac(e.key),
		key: e.key,
		label: e.name,
		value: e.name,
		wind: e.wind
	})).sort((e, t) => e.category === t.category ? e.label.localeCompare(t.label) : e.category.localeCompare(t.category));
}
function Xh() {
	let e = Z(game.wfrp4e?.config, ["magicLores"]), t = Z(game.wfrp4e?.config, ["magicWind"]), n = [];
	if (!Np(e)) return [fg()];
	for (let [r, i] of Object.entries(e)) {
		let e = hg(i) || r, a = mg(t, r);
		n.push({
			key: r,
			matchTerms: dg(r, e, a),
			name: e,
			wind: a
		});
	}
	return n.some((e) => e.key === "petty") || n.push(fg()), n;
}
function Zh(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) {
		if (r.isAmbiguous) continue;
		if (r.kind === "petty-magic") {
			let e = ug("petty magic", t);
			e && n.set(e.key, e);
			continue;
		}
		let e = ug(r.rawLore, t);
		e && n.set(e.key, e);
	}
	return [...n.values()];
}
async function Qh() {
	let e = [], t = [...game.packs ?? []];
	$("Candidate lookup start", {
		itemPacks: t.filter(vg).length,
		totalPacks: t.length,
		warhammerUtilityAvailable: !!Tg(),
		worldItems: game.items?.contents.length ?? 0
	});
	let n = await $h();
	$("WFRP helper lookup complete", {
		utilityInputs: n.length,
		utilitySamples: n.slice(0, 10).map(Dg)
	}), e.push(...n);
	for (let t of game.items?.contents ?? []) t.type === Hh && e.push(bg(t, "World"));
	$("World spell scan complete", { worldSpellCount: e.filter((e) => e.sourceLabel === "World").length });
	for (let n of t) if (vg(n)) try {
		let t = await eg(n);
		e.push(...t), $("Compendium spell scan complete", {
			inputCount: t.length,
			pack: Eg(n),
			samples: t.slice(0, 5).map(Dg)
		});
	} catch (e) {
		console.warn(`wfrp4e-customizer-apps | Spell lookup skipped compendium "${n.title ?? n.collection ?? "unknown"}".`, e);
	}
	let r = wg(e);
	return $("Candidate lookup complete", {
		rawInputCount: e.length,
		uniqueInputCount: r.length
	}), r;
}
async function $h() {
	let e = Tg();
	if (!e) return $("WFRP helper unavailable"), [];
	try {
		let t = await e.findAllItems(Hh, "Loading Spells", !0, ["system.lore.value"]);
		return $("WFRP helper raw result", {
			count: t.length,
			samples: t.slice(0, 10).map(Og)
		}), (await Promise.all(t.map((e) => _g(e)))).filter((e) => !!e);
	} catch (e) {
		return console.warn(`${Gh} WFRP helper lookup failed.`, e), [];
	}
}
async function eg(e) {
	if ($("Compendium index scan start", { pack: Eg(e) }), !e.getIndex) return $("Compendium has no index; loading documents", { pack: Eg(e) }), ag(e);
	let t = tg(await e.getIndex({ fields: [
		"name",
		"type",
		"img",
		"system.lore.value"
	] }));
	if ($("Compendium index loaded", {
		entries: t.length,
		pack: Eg(e),
		samples: t.slice(0, 5).map((t) => ({
			hasLoreTerms: cg(t).length > 0,
			name: t.name,
			type: t.type,
			uuid: gg(e, t)
		}))
	}), !t.length) return $("Compendium index empty; loading documents", { pack: Eg(e) }), ag(e);
	let n = t.filter(rg);
	$("Compendium index spell candidates", {
		pack: Eg(e),
		spellEntries: n.length
	});
	let r = n.filter((e) => e.name).map((t) => Cg(e, t));
	return r.length || !yg(e) ? r : ag(e);
}
function tg(e) {
	return Array.isArray(e) ? e.filter(ng) : Array.isArray(e.contents) ? e.contents.filter(ng) : ig(e) ? [...e].flatMap((e) => {
		let t = Array.isArray(e) ? e[1] : e;
		return ng(t) ? [t] : [];
	}) : [];
}
function ng(e) {
	return Np(e);
}
function rg(e) {
	return e.type === Hh ? !0 : !!(e.name && (cg(e).length || lg(e.name)));
}
function ig(e) {
	return Np(e) && Symbol.iterator in e;
}
async function ag(e) {
	if (!e.getDocuments) return $("Compendium has no document loader", { pack: Eg(e) }), [];
	$("Compendium document load start", { pack: Eg(e) });
	let t = await e.getDocuments(), n = t.filter((e) => Yp(e) && e.type === Hh);
	return $("Compendium document load complete", {
		documents: t.length,
		pack: Eg(e),
		spellDocuments: n.length,
		spellSamples: n.slice(0, 5).map((e) => ({
			loreTerms: cg(e.system),
			name: e.name,
			uuid: e.uuid
		}))
	}), n.map((t) => bg(t, e.title ?? "Compendium"));
}
function og(e, t) {
	let n = [...cg(e.system), lg(e.name)].filter(Boolean);
	for (let e of n) {
		let n = sg(e, t);
		if (n) return n;
		let r = ug(e, t);
		if (r) return r;
	}
	return null;
}
function sg(e, t) {
	let n = nc(e);
	return n === "lore" ? t.find((e) => e.key !== "petty") ?? null : n === "the eight winds" || n === "eight winds" ? t.find((e) => Uh.has(e.key)) ?? null : n === "dark lore" ? t.find((e) => Wh.has(e.key)) ?? null : null;
}
function cg(e) {
	return [
		...Rp(Z(e, ["lore", "value"])),
		...Rp(Z(e, ["lore"])),
		...Rp(Z(e, ["magicLore", "value"])),
		...Rp(Z(e, ["magicLore"])),
		...Rp(Z(e, ["category", "value"])),
		...Rp(Z(e, [
			"system",
			"lore",
			"value"
		])),
		...Rp(Z(e, ["system", "lore"])),
		...Rp(Z(e, ["system.lore.value"])),
		...Rp(Z(e, ["system.lore"]))
	];
}
function lg(e) {
	return /\(([^)]+)\)\s*$/.exec(e)?.[1]?.trim() ?? "";
}
function ug(e, t) {
	let n = nc(e);
	return n ? t.find((e) => e.matchTerms.some((e) => nc(e) === n)) ?? null : null;
}
function dg(e, t, n) {
	let r = /* @__PURE__ */ new Set(), i = nc(e), a = nc(t);
	for (let i of [
		e,
		t,
		n
	]) i.trim() && r.add(i.trim());
	return (i === "petty" || a === "petty") && r.add("Petty Magic"), (i === "shadow" || a === "shadow") && r.add("Shadows"), t && !/^lore of /i.test(t) && r.add(`Lore of ${t}`), [...r];
}
function fg() {
	return {
		key: "petty",
		matchTerms: ["petty", "petty magic"],
		name: "Petty Magic",
		wind: ""
	};
}
function pg(e) {
	let t = e.trim() || "Unknown Lore";
	return {
		key: nc(t) || "unknown",
		matchTerms: [t],
		name: t,
		wind: ""
	};
}
function mg(e, t) {
	return Np(e) ? hg(e[t]) : "";
}
function hg(e) {
	return typeof e == "string" ? e.trim() : Np(e) ? Q(e, ["name"]) || Q(e, ["label"]) || Q(e, ["value"]) : "";
}
function gg(e, t) {
	return t.uuid ? t.uuid : t._id && e.getUuid ? e.getUuid(t._id) : "";
}
async function _g(e) {
	if (typeof e == "string") {
		let t = await fromUuid(e);
		return Yp(t) && t.type === Hh ? bg(t, xg(t)) : null;
	}
	if (Yp(e)) return e.type === Hh ? bg(e, xg(e)) : null;
	if (!Np(e) || Q(e, ["type"]) !== Hh) return null;
	let t = Q(e, ["name"]);
	return t ? {
		img: Q(e, ["img"]) || Q(e, ["thumb"]),
		name: t,
		sourceLabel: Sg(Q(e, ["uuid"]), "WFRP Item Lookup"),
		system: Z(e, ["system"]),
		uuid: Q(e, ["uuid"])
	} : null;
}
function vg(e) {
	return e.documentName === "Item" || Q(e, ["metadata", "type"]) === "Item" || Q(e, ["metadata", "documentName"]) === "Item";
}
function yg(e) {
	return e.collection === "wfrp4e-core.items" || e.collection === "wfrp4e-wom.items";
}
function bg(e, t) {
	return {
		img: e.img ?? "",
		name: e.name,
		sourceLabel: t,
		system: e.system,
		uuid: e.uuid
	};
}
function xg(e) {
	return /^Item\./i.test(e.uuid) ? "World" : Sg(e.uuid, "WFRP Item Lookup");
}
function Sg(e, t) {
	let n = /^Compendium\.([^.]+\.[^.]+)\./.exec(e)?.[1];
	return n ? [...game.packs ?? []].find((e) => e.collection === n)?.title ?? n : t;
}
function Cg(e, t) {
	return {
		img: t.img ?? t.thumb ?? "",
		name: t.name ?? "",
		sourceLabel: e.title ?? "Compendium",
		system: t,
		uuid: gg(e, t)
	};
}
function wg(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.uuid || n.name.trim().toLocaleLowerCase();
		t.has(e) || t.set(e, n);
	}
	return [...t.values()];
}
function Tg() {
	let e = Z(globalThis, [
		"warhammer",
		"utility",
		"findAllItems"
	]);
	return typeof e == "function" ? { findAllItems: e } : null;
}
function $(e, t) {
	if (t) {
		console.info(`${Gh} ${e}`, t);
		return;
	}
	console.info(`${Gh} ${e}`);
}
function Eg(e) {
	return [
		e.title ?? "",
		e.collection ?? "",
		Q(e, ["metadata", "type"]),
		Q(e, ["metadata", "documentName"]),
		e.documentName
	].filter(Boolean).join(" | ");
}
function Dg(e) {
	return {
		loreTerms: cg(e.system),
		name: e.name,
		sourceLabel: e.sourceLabel,
		uuid: e.uuid
	};
}
function Og(e) {
	return typeof e == "string" ? {
		kind: "uuid-string",
		value: e
	} : Np(e) ? {
		documentName: Q(e, ["documentName"]),
		hasSystem: Np(Z(e, ["system"])),
		loreTerms: cg(Z(e, ["system"])),
		name: Q(e, ["name"]),
		type: Q(e, ["type"]),
		uuid: Q(e, ["uuid"])
	} : { kind: typeof e };
}
async function kg(e) {
	let t = await fromUuid(e);
	return Yp(t) && t.type === Hh ? t : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/build-npc.ts
async function Ag(e) {
	let t = await Ng(e);
	if (!t) throw Error("Foundry did not create the NPC Actor.");
	let n = Pg(e), r = e.careers.at(-1), i = Mc(e.advancements), a = {
		name: n,
		"prototypeToken.name": n,
		"system.details.gmnotes.value": jg(Q(t.system, [
			"details",
			"gmnotes",
			"value"
		]), i)
	}, o = e.portraitPath || r?.img || "";
	return o && (a.img = o, a["prototypeToken.texture.src"] = o), await t.update(a), await Rm(t, e.advancements), await rh(t, e.traits), await Ch(t, e.trappings), await Kh(t, e.spells), t.sheet?.render(!0), ui.notifications?.info(`Created NPC "${n}".`), {
		name: n,
		uuid: t.uuid
	};
}
function jg(e, t) {
	let n = Mg(e).trim(), r = [
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
function Mg(e) {
	return e.replace(/<section data-wfrp-customizer-npc-xp="true">[\s\S]*?<\/section>/g, "");
}
async function Ng(e) {
	let t = Xp(await fromUuid(e.baseActorUuid)).toObject(), n = Zm(e.settings.outputActorFolderUuid);
	return delete t._id, delete t.folder, t.type = "npc", lh(t), n && (t.folder = n.id), Actor.create(t);
}
function Pg(e) {
	if (!e.settings.includeSpeciesInName) return e.actorName;
	let t = game.actors.contents.find((t) => t.uuid === e.baseActorUuid), n = t ? zh(t) : "";
	return !n || e.actorName.toLocaleLowerCase().includes(n.toLocaleLowerCase()) ? e.actorName : `${n} ${e.actorName}`;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/careers.ts
async function Fg(e) {
	let t = Gm(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a WFRP Career item here.");
	return Ig(Qp(await fromUuid(t.uuid), "career", "Drop a WFRP Career item here."));
}
function Ig(e) {
	return {
		careerGroup: Lg(e),
		grants: Vp(e.system),
		img: e.img ?? "",
		level: Rg(e),
		name: e.name,
		uuid: e.uuid
	};
}
function Lg(e) {
	return Q(e.system, ["careergroup", "value"]);
}
function Rg(e) {
	let t = Z(e.system, ["level", "value"]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits.ts
var zg = "fuzzy-foundry", Bg = .3, Vg = [
	".webp",
	".png",
	".jpg",
	".jpeg",
	".gif"
];
async function Hg(e, t) {
	let n = Pl(e);
	if (!n.length) return [];
	let r = {
		candidates: [],
		maxDirectoryBudget: 0,
		searchTerms: n,
		seenPaths: /* @__PURE__ */ new Set(),
		visitedDirectories: 0
	};
	return e.includeCompendiumAssets && (Gg(r, t), await Kg(r, t)), e.includeFilePickerAssets && Jg(r, t), e_(t, r, {
		currentLocation: "Portrait search complete",
		maxDirectories: r.maxDirectoryBudget,
		phase: "ready"
	}), r.candidates;
}
function Ug() {
	let e = game.modules.get(zg)?.active === !0, t = Wg(), n = Qg(), r = Object.values(n?._fileIndexCache ?? {}).reduce((e, t) => e + t.length, 0);
	return {
		digDownActive: e,
		digDownCacheReady: !!(n?._fileIndexCache && n.fs),
		digDownDeepFileSearchEnabled: t,
		digDownIndexedFileCount: r
	};
}
function Wg() {
	try {
		return game.settings.get(zg, "deepFile") === !0;
	} catch {
		return !1;
	}
}
function Gg(e, t) {
	e_(t, e, {
		currentLocation: "World Actors and Items",
		maxDirectories: 0,
		phase: "world-documents"
	});
	for (let t of game.actors.contents) qg(e, {
		imagePaths: [{
			label: "actor image",
			path: t.img ?? ""
		}, {
			label: "token image",
			path: r_(t)
		}],
		name: t.name,
		sourceLabel: "World Actors",
		sourceKey: t.uuid
	});
	for (let t of game.items?.contents ?? []) qg(e, {
		imagePaths: [{
			label: "item image",
			path: t.img ?? ""
		}],
		name: t.name,
		sourceLabel: "World Items",
		sourceKey: t.uuid
	});
}
async function Kg(e, t) {
	e_(t, e, {
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
		for (let r of n?.contents ?? []) qg(e, {
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
function qg(e, t) {
	let n = t.imagePaths.filter(({ path: e }) => !!e);
	if (n_(t.name, n, e.searchTerms)) for (let r of n) t_(e, {
		img: r.path,
		key: `foundry-asset:${t.sourceKey}:${r.label}`,
		label: `${t.name || a_(r.path)} ${r.label} (${t.sourceLabel})`,
		source: "foundry-asset"
	});
}
function Jg(e, t) {
	let n = Ug();
	if (e_(t, e, {
		currentLocation: Yg(n),
		maxDirectories: 0,
		phase: "filesystem"
	}), !n.digDownActive || !n.digDownCacheReady) return;
	let r = Qg();
	if (!(!r?._fileIndexCache || !r.fs)) {
		for (let t of Xg(r, e.searchTerms)) Zg(e, r, t);
		e_(t, e, {
			currentLocation: "Dig Down file cache search complete",
			maxDirectories: 0,
			phase: "filesystem"
		});
	}
}
function Yg(e) {
	return e.digDownActive ? e.digDownDeepFileSearchEnabled ? e.digDownCacheReady ? `Dig Down file cache (${e.digDownIndexedFileCount} files)` : "Waiting for Dig Down file cache" : "Dig Down Deep File Search is disabled" : "Dig Down is not active";
}
function Xg(e, t) {
	let n = /* @__PURE__ */ new Set(), r = Object.keys(e._fileIndexCache ?? {});
	for (let i of t) {
		let t = i.toLocaleLowerCase();
		for (let e of r) e.toLocaleLowerCase().includes(t) && n.add(e);
		let a = e.fs?.get(i, [], Bg) ?? [];
		for (let [, e] of a) n.add(e);
	}
	return [...n].sort((e, t) => e.toLocaleLowerCase().localeCompare(t.toLocaleLowerCase()));
}
function Zg(e, t, n) {
	let r = t._fileIndexCache?.[n] ?? [];
	for (let t of r) $g(t) && t_(e, {
		img: t,
		key: `foundry-asset:${t}`,
		label: i_(t, "Dig Down"),
		source: "foundry-asset"
	});
}
function Qg() {
	let e = canvas.deepSearchCache;
	if (!o_(e)) return null;
	let t = e._fileIndexCache, n = e.fs, r = {};
	return s_(t) && (r._fileIndexCache = t), o_(n) && typeof n.get == "function" && (r.fs = { get: n.get.bind(n) }), r;
}
function $g(e) {
	let t = `.${e.split(/[?#]/)[0]?.split(".").pop() ?? ""}`;
	return Vg.includes(t.toLocaleLowerCase());
}
function e_(e, t, n) {
	e?.({
		candidatesFound: t.candidates.length,
		currentLocation: n.currentLocation,
		directoriesVisited: t.visitedDirectories,
		maxDirectories: n.maxDirectories,
		phase: n.phase
	});
}
function t_(e, t) {
	let n = t.img.trim().toLocaleLowerCase();
	!n || e.seenPaths.has(n) || (e.seenPaths.add(n), e.candidates.push(t));
}
function n_(e, t, n) {
	return Fl(e, n) || t.some(({ path: e }) => Fl(e, n));
}
function r_(e) {
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
function i_(e, t) {
	return `${a_(e)} (${t})`;
}
function a_(e) {
	return e.split(/[\\/]/).at(-1) ?? e;
}
function o_(e) {
	return typeof e == "object" && !!e;
}
function s_(e) {
	return o_(e) && Object.values(e).every((e) => Array.isArray(e) && e.every((e) => typeof e == "string"));
}
//#endregion
//#region src/module/settings/foundry-setting-adapter.ts
function c_(e) {
	return e;
}
function l_(t) {
	game.settings.register(e, t.key, {
		config: t.config ?? !1,
		default: t.defaultValue,
		name: t.name,
		scope: t.scope ?? "world",
		type: Object
	});
}
function u_(t) {
	return t.normalize(game.settings.get(e, t.key));
}
async function d_(t, n) {
	let r = t.normalize(n);
	return await game.settings.set(e, t.key, r), r;
}
//#endregion
//#region src/module/apps/npc-builder/settings.ts
var f_ = "npcBuilderSettings", p_ = Zs(), m_ = c_({
	defaultValue: p_,
	key: f_,
	name: "NPC Builder Settings",
	normalize: v_
});
function h_() {
	l_(m_);
}
function g_() {
	return u_(m_);
}
async function __(e) {
	return d_(m_, e);
}
function v_(e) {
	if (typeof e != "object" || !e) return { ...p_ };
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
		lowerCareerMode: y_(t.lowerCareerMode) ? t.lowerCareerMode : "prompt",
		outputActorFolderUuid: typeof t.outputActorFolderUuid == "string" ? t.outputActorFolderUuid : "",
		quickTraitFolderUuid: typeof t.quickTraitFolderUuid == "string" ? t.quickTraitFolderUuid : "",
		searchCompendiumPortraitAssets: t.searchCompendiumPortraitAssets ?? !0,
		searchFoundryPortraitAssets: t.searchFoundryPortraitAssets ?? !1,
		searchWebPortraitAssets: t.searchWebPortraitAssets ?? !1
	};
}
function y_(e) {
	return e === "auto-add-all" || e === "never" || e === "prompt";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/index.ts
var b_ = {
	buildNpc: Ag,
	ensureActorFolder: qm,
	ensureItemFolder: Jm,
	findLowerCareerCandidates: rm,
	getPortraitSearchAvailability: async () => Ug(),
	importRecommendedQuickTraits: ih,
	listActorFolders: async () => Ym(),
	listBaseActors: async (e) => Fh(e),
	listFoundryPortraitCandidates: Hg,
	listMagicLoreOptions: Yh,
	listSpellsForMagicGrants: qh,
	listItemFolders: async () => Xm(),
	listQuickTraits: ah,
	listSkillCharacteristics: bm,
	listSkillSpecializations: ym,
	listTalentMaximums: Im,
	listTraitDifficultyOptions: oh,
	loadBaseActorDraftData: Ih,
	loadSettings: async () => g_(),
	resolveActorDrop: Lh,
	resolveCareerDrop: Fg,
	resolveSpellDrop: Jh,
	resolveTraitDrop: uh,
	resolveTrapping: wh,
	resolveTrappingDrop: Th,
	saveSettings: __
}, x_ = class extends Mp {
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
		return Ap;
	}
	getVueProps() {
		return { bridge: b_ };
	}
}, S_ = { class: "customizer-workbench" }, C_ = {
	"aria-label": "Customizer targets",
	class: "customizer-workbench__body"
}, w_ = { class: "customizer-workbench__targets" }, T_ = /* @__PURE__ */ lr({
	__name: "WorkbenchApp",
	setup(e) {
		let t = [
			"Actor sheets",
			"Item sheets",
			"Reusable dialogs"
		];
		return (e, n) => (W(), G("main", S_, [n[1] ||= K("header", { class: "customizer-workbench__header" }, [K("p", null, "WFRP4e"), K("h1", null, "Customizer Workbench")], -1), K("section", C_, [K("div", w_, [(W(), G(U, null, H(t, (e) => K("button", {
			key: e,
			disabled: "",
			type: "button"
		}, M(e), 1)), 64))]), n[0] ||= K("div", { class: "customizer-workbench__empty" }, [K("strong", null, "Vue application shell mounted."), K("span", null, "The first customizer surface can land here.")], -1)])]));
	}
}), E_ = class extends Mp {
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
		return T_;
	}
}, D_ = `${e}.debugShapeProbes`, O_ = "wfrp4eCustomizerShapeProbes", k_ = "wfrp4eCustomizerShapePreset", A_ = 2, j_ = 12, M_ = 6, N_ = 60, P_ = { "npc-builder": [
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
function F_() {
	localStorage.removeItem(D_), console.info(`${e} | Cleared debug shape probes.`);
}
function I_() {
	return tv();
}
function L_(e, t = {}) {
	let n = R_(e, t);
	return K_(n), n;
}
function R_(e, t = {}, n) {
	let r = H_(t.maxDepth, A_, M_), i = H_(t.maxEntries, j_, N_), a = sv(e), o = {
		inspectedAt: (/* @__PURE__ */ new Date()).toISOString(),
		label: t.label || e,
		maxDepth: r,
		maxEntries: i,
		path: e,
		value: pv(a, {
			maxDepth: r,
			maxEntries: i,
			seen: /* @__PURE__ */ new WeakSet()
		})
	};
	return n && (o.hook = n), o;
}
function z_() {
	let t = tv();
	for (let e of ["init", "setup"]) {
		let n = t.filter((t) => t.hook === e);
		n.length && Hooks.once(e, () => {
			for (let t of n) W_(t, e);
		});
	}
	Hooks.once("ready", () => {
		let t = tv().filter((e) => (e.hook ?? "ready") === "ready");
		iv() && console.info(`${e} | Debug shape ready probes discovered: ${t.length}`, window.location.href);
		for (let e of t) W_(e, "ready");
	});
}
function B_(t) {
	let n = t.map(J_);
	localStorage.setItem(D_, JSON.stringify(n)), console.info(`${e} | Stored ${n.length} debug shape probe(s). Reload Foundry to run init/setup probes.`);
}
function V_(e, t, n) {
	if (t === "at") {
		let t = Number(n[0] ?? 0), r = Number.isFinite(t) ? t : 0;
		return hv(e).at(r);
	}
	if (t === "findByName") {
		let t = q_(n[0] ?? "");
		return hv(e).find((e) => q_($_(e, "name")) === t);
	}
	if (t === "findByType") {
		let t = q_(n[0] ?? "");
		return hv(e).find((e) => q_($_(e, "type")) === t);
	}
	if (t === "get") {
		let t = n[0] ?? "";
		if (e instanceof Map) return e.get(t);
		let r = $_(e, "get");
		if (typeof r == "function") return r.call(e, t);
	}
	if (t === "sample") {
		let t = H_(n[0], 3, N_);
		return hv(e).slice(0, t);
	}
	throw Error(`Unsupported path method "${t}".`);
}
function H_(e, t, n) {
	let r = Number(e);
	return Number.isFinite(r) ? Math.max(0, Math.min(n, Math.floor(r))) : t;
}
function U_(e, t) {
	return Object.keys(e).sort().slice(0, t);
}
function W_(t, n) {
	try {
		K_(R_(t.path, t, n));
	} catch (n) {
		console.warn(`${e} | Debug shape probe failed for "${t.path}".`, n);
	}
}
function G_(e) {
	return typeof e == "object" && !!e;
}
function K_(t) {
	console.info(`${e} | Debug shape probe: ${t.label}`, JSON.stringify(t, null, 2));
}
function q_(e) {
	return typeof e == "string" ? e.trim().toLocaleLowerCase() : "";
}
function J_(e) {
	let t = {
		hook: e.hook ?? "ready",
		maxDepth: H_(e.maxDepth, A_, M_),
		maxEntries: H_(e.maxEntries, j_, N_),
		path: e.path.trim()
	};
	return e.label && (t.label = e.label), t;
}
function Y_(e) {
	return e.trim() ? e.split(",").map((e) => Z_(e.trim())).map(String) : [];
}
function X_(e) {
	let t = e.trim();
	return /^-?\d+$/.test(t) ? Number(t) : Z_(t);
}
function Z_(e) {
	let t = e.match(/^['"](?<value>.*)['"]$/);
	return t?.groups ? t.groups.value ?? "" : e;
}
function Q_(e) {
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
				args: Y_(e.groups.args ?? ""),
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
				index: X_(e),
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
function $_(e, t) {
	if (!(!G_(e) && typeof e != "function")) try {
		return e[t];
	} catch {
		return;
	}
}
function ev() {
	let e = ov(D_);
	if (!e) return [];
	try {
		let t = JSON.parse(e);
		return Array.isArray(t) ? t.filter((e) => typeof e == "object" && !!e && typeof e.path == "string").map(J_) : [];
	} catch {
		return [];
	}
}
function tv() {
	return [...ev(), ...nv()].map(J_);
}
function nv() {
	let e = [], t = [new URLSearchParams(window.location.search), new URLSearchParams(window.location.hash.replace(/^#/, ""))];
	for (let n of t) {
		let t = n.get(k_), r = n.get(O_);
		t && e.push(...P_[t] ?? []), r && e.push(...rv(r));
	}
	return window.location.href.includes(`${k_}=npc-builder`) && !e.length && e.push(...P_["npc-builder"] ?? []), e;
}
function rv(t) {
	try {
		let e = JSON.parse(decodeURIComponent(t));
		return Array.isArray(e) ? e.filter(av) : [];
	} catch (t) {
		return console.warn(`${e} | Could not parse URL shape probes.`, t), [];
	}
}
function iv() {
	return window.location.href.includes(O_) || window.location.href.includes(k_);
}
function av(e) {
	return typeof e == "object" && !!e && typeof e.path == "string";
}
function ov(e) {
	try {
		return localStorage.getItem(e);
	} catch {
		return null;
	}
}
function sv(e) {
	let t = Q_(e), n = $_(globalThis, t.root);
	for (let e of t.tokens) {
		if (e.type === "property") {
			n = $_(n, e.key);
			continue;
		}
		if (e.type === "index") {
			n = $_(n, String(e.index));
			continue;
		}
		n = V_(n, e.name, e.args);
	}
	return n;
}
function cv(e, t) {
	return {
		length: e.length,
		sample: e.slice(0, t.maxEntries).map((e) => pv(e, mv(t))),
		type: "array"
	};
}
function lv(e, t) {
	return {
		sample: [...e.entries()].slice(0, t.maxEntries).map(([e, n]) => ({
			key: pv(e, mv(t)),
			value: pv(n, mv(t))
		})),
		size: e.size,
		type: "Map"
	};
}
function uv(e) {
	return {
		name: e.name,
		type: "function"
	};
}
function dv(e, t) {
	if (t.seen.has(e)) return { type: "circular" };
	t.seen.add(e);
	let n = U_(e, t.maxEntries), r = {
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
		let n = $_(e, t);
		typeof n == "string" && (r[t] = n);
	}
	if (t.maxDepth <= 0) return r;
	let i = {};
	for (let r of n) i[r] = pv($_(e, r), mv(t));
	r.properties = i;
	let a = $_(e, "toObject");
	if (typeof a == "function") try {
		r.source = pv(a.call(e), mv(t));
	} catch (e) {
		r.source = {
			error: e instanceof Error ? e.message : String(e),
			type: "error"
		};
	}
	return r;
}
function fv(e) {
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
function pv(e, t) {
	return !G_(e) && typeof e != "function" ? fv(e) : typeof e == "function" ? uv(e) : Array.isArray(e) ? cv(e, t) : e instanceof Map ? lv(e, t) : dv(e, t);
}
function mv(e) {
	return {
		maxDepth: e.maxDepth - 1,
		maxEntries: e.maxEntries,
		seen: e.seen
	};
}
function hv(e) {
	if (Array.isArray(e)) return e;
	let t = $_(e, "contents");
	return Array.isArray(t) ? t : [];
}
//#endregion
//#region src/module/create-module-api.ts
function gv() {
	return {
		clearDebugShapeProbes: F_,
		getDebugShapeProbes: I_,
		inspectPath: L_,
		openNpcBuilder: async () => {
			await new x_().render(!0);
		},
		openWorkbench: async () => {
			await new E_().render(!0);
		},
		setDebugShapeProbes: B_
	};
}
//#endregion
//#region src/module/register-module-menus.ts
function _v() {
	game.settings.registerMenu(e, "workbench", {
		hint: "Open the WFRP4e Customizer Apps workbench.",
		icon: "fa-solid fa-screwdriver-wrench",
		label: "Open Workbench",
		name: "WFRP4e Customizer Apps",
		restricted: !0,
		type: E_
	}), game.settings.registerMenu(e, "npc-builder", {
		hint: "Build a WFRP4e NPC from a base Actor and Career items.",
		icon: "fa-solid fa-user-plus",
		label: "Open NPC Builder",
		name: "WFRP4e NPC Builder",
		restricted: !0,
		type: x_
	});
}
//#endregion
//#region src/module/register-module-settings.ts
function vv() {
	h_();
}
//#endregion
//#region src/module/apps/npc-builder/register-actor-directory-button.ts
var yv = "wfrp4e-customizer-open-npc-builder";
function bv() {
	Hooks.on("renderActorDirectory", (e, t) => {
		let n = Cv(t);
		n && xv(n);
	});
}
function xv(e) {
	if (e.querySelector(`.${yv}`)) return;
	let t = Sv(e);
	if (!t) {
		console.warn("wfrp4e-customizer-apps | Could not find Actor Directory button container.");
		return;
	}
	let n = document.createElement("button");
	n.classList.add(yv), n.type = "button", n.innerHTML = "<i class=\"fa-solid fa-user-plus\" inert></i><span>NPC Builder App</span>", n.addEventListener("click", () => {
		new x_().render(!0);
	}), t.append(n);
}
function Sv(e) {
	return e.querySelector(".directory-header .header-actions") ?? e.querySelector(".directory-header .action-buttons") ?? e.querySelector(".header-actions") ?? e.querySelector(".action-buttons");
}
function Cv(e) {
	return e instanceof HTMLElement ? e : wv(e) && e[0] instanceof HTMLElement ? e[0] : null;
}
function wv(e) {
	return typeof e == "object" && !!e && "length" in e;
}
z_(), Hooks.once("init", () => {
	console.info(`${e} | Initializing`), vv(), _v(), bv();
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
	n.api = gv(), nm(), xm(), console.info(`${e} | Ready`);
});
//#endregion
