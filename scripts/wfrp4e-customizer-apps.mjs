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
function nt(e, t, n) {
	if (Ue && P) {
		let t = Qe.get(e);
		t || Qe.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new Xe()), r.map = t, r.key = n), r.track();
	}
}
function rt(e, t, n, r, i, a) {
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
function it(e, t) {
	let n = Qe.get(e);
	return n && n.get(t);
}
function at(e) {
	let t = /* @__PURE__ */ F(e);
	return t === e ? t : (nt(t, "iterate", tt), /* @__PURE__ */ Gt(e) ? t : t.map(Jt));
}
function ot(e) {
	return nt(e = /* @__PURE__ */ F(e), "iterate", tt), e;
}
function st(e, t) {
	return /* @__PURE__ */ Wt(e) ? Yt(/* @__PURE__ */ Ut(e) ? Jt(t) : t) : Jt(t);
}
var ct = {
	__proto__: null,
	[Symbol.iterator]() {
		return lt(this, Symbol.iterator, (e) => st(this, e));
	},
	concat(...e) {
		return at(this).concat(...e.map((e) => p(e) ? at(e) : e));
	},
	entries() {
		return lt(this, "entries", (e) => (e[1] = st(this, e[1]), e));
	},
	every(e, t) {
		return dt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return dt(this, "filter", e, t, (e) => e.map((e) => st(this, e)), arguments);
	},
	find(e, t) {
		return dt(this, "find", e, t, (e) => st(this, e), arguments);
	},
	findIndex(e, t) {
		return dt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return dt(this, "findLast", e, t, (e) => st(this, e), arguments);
	},
	findLastIndex(e, t) {
		return dt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return dt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return pt(this, "includes", e);
	},
	indexOf(...e) {
		return pt(this, "indexOf", e);
	},
	join(e) {
		return at(this).join(e);
	},
	lastIndexOf(...e) {
		return pt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return dt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return mt(this, "pop");
	},
	push(...e) {
		return mt(this, "push", e);
	},
	reduce(e, ...t) {
		return ft(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return ft(this, "reduceRight", e, t);
	},
	shift() {
		return mt(this, "shift");
	},
	some(e, t) {
		return dt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return mt(this, "splice", e);
	},
	toReversed() {
		return at(this).toReversed();
	},
	toSorted(e) {
		return at(this).toSorted(e);
	},
	toSpliced(...e) {
		return at(this).toSpliced(...e);
	},
	unshift(...e) {
		return mt(this, "unshift", e);
	},
	values() {
		return lt(this, "values", (e) => st(this, e));
	}
};
function lt(e, t, n) {
	let r = ot(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ Gt(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var ut = Array.prototype;
function dt(e, t, n, r, i, a) {
	let o = ot(e), s = o !== e && !/* @__PURE__ */ Gt(e), c = o[t];
	if (c !== ut[t]) {
		let t = c.apply(e, a);
		return s ? Jt(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, st(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function ft(e, t, n, r) {
	let i = ot(e), a = i !== e && !/* @__PURE__ */ Gt(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = st(e, t)), n.call(this, t, st(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? st(e, c) : c;
}
function pt(e, t, n) {
	let r = /* @__PURE__ */ F(e);
	nt(r, "iterate", tt);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Kt(n[0]) ? (n[0] = /* @__PURE__ */ F(n[0]), r[t](...n)) : i;
}
function mt(e, t, n = []) {
	Ge(), Fe();
	let r = (/* @__PURE__ */ F(e))[t].apply(e, n);
	return Ie(), Ke(), r;
}
var ht = /* @__PURE__ */ n("__proto__,__v_isRef,__isVue"), gt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(y));
function _t(e) {
	y(e) || (e = String(e));
	let t = /* @__PURE__ */ F(this);
	return nt(t, "has", e), t.hasOwnProperty(e);
}
var vt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? It : Ft : i ? Pt : Nt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = p(e);
		if (!r) {
			let e;
			if (a && (e = ct[t])) return e;
			if (t === "hasOwnProperty") return _t;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ I(e) ? e : n);
		if ((y(t) ? gt.has(t) : ht(t)) || (r || nt(e, "get", t), i)) return o;
		if (/* @__PURE__ */ I(o)) {
			let e = a && E(t) ? o : o.value;
			return r && b(e) ? /* @__PURE__ */ Vt(e) : e;
		}
		return b(o) ? r ? /* @__PURE__ */ Vt(o) : /* @__PURE__ */ zt(o) : o;
	}
}, yt = class extends vt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = p(e) && E(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Wt(i);
			if (!/* @__PURE__ */ Gt(n) && !/* @__PURE__ */ Wt(n) && (i = /* @__PURE__ */ F(i), n = /* @__PURE__ */ F(n)), !a && /* @__PURE__ */ I(i) && !/* @__PURE__ */ I(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : f(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ I(e) ? e : r);
		return e === /* @__PURE__ */ F(r) && (o ? A(n, i) && rt(e, "set", t, n, i) : rt(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = f(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && rt(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!y(t) || !gt.has(t)) && nt(e, "has", t), n;
	}
	ownKeys(e) {
		return nt(e, "iterate", p(e) ? "length" : $e), Reflect.ownKeys(e);
	}
}, bt = class extends vt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, xt = /* @__PURE__ */ new yt(), St = /* @__PURE__ */ new bt(), Ct = /* @__PURE__ */ new yt(!0), wt = (e) => e, Tt = (e) => Reflect.getPrototypeOf(e);
function Et(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ F(i), o = m(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, u = i[e](...r), d = n ? wt : t ? Yt : Jt;
		return !t && nt(a, "iterate", c ? et : $e), l(Object.create(u), { next() {
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
function Dt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Ot(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ F(r), a = /* @__PURE__ */ F(n);
			e || (A(n, a) && nt(i, "get", n), nt(i, "get", a));
			let { has: o } = Tt(i), s = t ? wt : e ? Yt : Jt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && nt(/* @__PURE__ */ F(t), "iterate", $e), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ F(n), i = /* @__PURE__ */ F(t);
			return e || (A(t, i) && nt(r, "has", t), nt(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ F(a), s = t ? wt : e ? Yt : Jt;
			return !e && nt(o, "iterate", $e), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return l(n, e ? {
		add: Dt("add"),
		set: Dt("set"),
		delete: Dt("delete"),
		clear: Dt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ F(this), r = Tt(n), i = /* @__PURE__ */ F(e), a = !t && !/* @__PURE__ */ Gt(e) && !/* @__PURE__ */ Wt(e) ? i : e;
			return r.has.call(n, a) || A(e, a) && r.has.call(n, e) || A(i, a) && r.has.call(n, i) || (n.add(a), rt(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ Gt(n) && !/* @__PURE__ */ Wt(n) && (n = /* @__PURE__ */ F(n));
			let r = /* @__PURE__ */ F(this), { has: i, get: a } = Tt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ F(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? A(n, s) && rt(r, "set", e, n, s) : rt(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ F(this), { has: n, get: r } = Tt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ F(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && rt(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ F(this), t = e.size !== 0, n = e.clear();
			return t && rt(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Et(r, e, t);
	}), n;
}
function kt(e, t) {
	let n = Ot(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(f(n, r) && r in t ? n : t, r, i);
}
var At = { get: /* @__PURE__ */ kt(!1, !1) }, jt = { get: /* @__PURE__ */ kt(!1, !0) }, Mt = { get: /* @__PURE__ */ kt(!0, !1) }, Nt = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap(), Ft = /* @__PURE__ */ new WeakMap(), It = /* @__PURE__ */ new WeakMap();
function Lt(e) {
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
function Rt(e) {
	return e.__v_skip || !Object.isExtensible(e) ? 0 : Lt(w(e));
}
/* @__NO_SIDE_EFFECTS__ */
function zt(e) {
	return /* @__PURE__ */ Wt(e) ? e : Ht(e, !1, xt, At, Nt);
}
/* @__NO_SIDE_EFFECTS__ */
function Bt(e) {
	return Ht(e, !1, Ct, jt, Pt);
}
/* @__NO_SIDE_EFFECTS__ */
function Vt(e) {
	return Ht(e, !0, St, Mt, Ft);
}
function Ht(e, t, n, r, i) {
	if (!b(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
	let a = Rt(e);
	if (a === 0) return e;
	let o = i.get(e);
	if (o) return o;
	let s = new Proxy(e, a === 2 ? r : n);
	return i.set(e, s), s;
}
/* @__NO_SIDE_EFFECTS__ */
function Ut(e) {
	return /* @__PURE__ */ Wt(e) ? /* @__PURE__ */ Ut(e.__v_raw) : !!(e && e.__v_isReactive);
}
/* @__NO_SIDE_EFFECTS__ */
function Wt(e) {
	return !!(e && e.__v_isReadonly);
}
/* @__NO_SIDE_EFFECTS__ */
function Gt(e) {
	return !!(e && e.__v_isShallow);
}
/* @__NO_SIDE_EFFECTS__ */
function Kt(e) {
	return e ? !!e.__v_raw : !1;
}
/* @__NO_SIDE_EFFECTS__ */
function F(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ F(t) : e;
}
function qt(e) {
	return !f(e, "__v_skip") && Object.isExtensible(e) && oe(e, "__v_skip", !0), e;
}
var Jt = (e) => b(e) ? /* @__PURE__ */ zt(e) : e, Yt = (e) => b(e) ? /* @__PURE__ */ Vt(e) : e;
/* @__NO_SIDE_EFFECTS__ */
function I(e) {
	return e ? e.__v_isRef === !0 : !1;
}
/* @__NO_SIDE_EFFECTS__ */
function L(e) {
	return Xt(e, !1);
}
function Xt(e, t) {
	return /* @__PURE__ */ I(e) ? e : new Zt(e, t);
}
var Zt = class {
	constructor(e, t) {
		this.dep = new Xe(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ F(e), this._value = t ? e : Jt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Gt(e) || /* @__PURE__ */ Wt(e);
		e = n ? e : /* @__PURE__ */ F(e), A(e, t) && (this._rawValue = e, this._value = n ? e : Jt(e), this.dep.trigger());
	}
};
function R(e) {
	return /* @__PURE__ */ I(e) ? e.value : e;
}
var Qt = {
	get: (e, t, n) => t === "__v_raw" ? e : R(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ I(i) && !/* @__PURE__ */ I(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function $t(e) {
	return /* @__PURE__ */ Ut(e) ? e : new Proxy(e, Qt);
}
/* @__NO_SIDE_EFFECTS__ */
function en(e) {
	let t = p(e) ? Array(e.length) : {};
	for (let n in e) t[n] = an(e, n);
	return t;
}
var tn = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = y(t) ? t : String(t), this._raw = /* @__PURE__ */ F(e);
		let r = !0, i = e;
		if (!p(e) || y(this._key) || !E(this._key)) do
			r = !/* @__PURE__ */ Kt(i) || /* @__PURE__ */ Gt(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = R(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ I(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ I(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return it(this._raw, this._key);
	}
}, nn = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
/* @__NO_SIDE_EFFECTS__ */
function rn(e, t, n) {
	return /* @__PURE__ */ I(e) ? e : _(e) ? new nn(e) : b(e) && arguments.length > 1 ? an(e, t, n) : /* @__PURE__ */ L(e);
}
function an(e, t, n) {
	return new tn(e, t, n);
}
var on = class {
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
function sn(e, t, n = !1) {
	let r, i;
	return _(e) ? r = e : (r = e.get, i = e.set), new on(r, i, n);
}
var cn = {}, ln = /* @__PURE__ */ new WeakMap(), un = void 0;
function dn(e, t = !1, n = un) {
	if (n) {
		let t = ln.get(n);
		t || ln.set(n, t = []), t.push(e);
	}
}
function fn(e, t, n = r) {
	let { immediate: i, deep: o, once: s, scheduler: c, augmentJob: l, call: d } = n, f = (e) => o ? e : /* @__PURE__ */ Gt(e) || o === !1 || o === 0 ? pn(e, 1) : pn(e), m, h, g, v, y = !1, b = !1;
	if (/* @__PURE__ */ I(e) ? (h = () => e.value, y = /* @__PURE__ */ Gt(e)) : /* @__PURE__ */ Ut(e) ? (h = () => f(e), y = !0) : p(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Ut(e) || /* @__PURE__ */ Gt(e)), h = () => e.map((e) => {
		if (/* @__PURE__ */ I(e)) return e.value;
		if (/* @__PURE__ */ Ut(e)) return f(e);
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
		let t = un;
		un = m;
		try {
			return d ? d(e, 3, [v]) : e(v);
		} finally {
			un = t;
		}
	} : a, t && o) {
		let e = h, t = o === !0 ? Infinity : o;
		h = () => pn(e(), t);
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
	let C = b ? Array(e.length).fill(cn) : cn, w = (e) => {
		if (!(!(m.flags & 1) || !m.dirty && !e)) if (t) {
			let e = m.run();
			if (o || y || (b ? e.some((e, t) => A(e, C[t])) : A(e, C))) {
				g && g();
				let n = un;
				un = m;
				try {
					let n = [
						e,
						C === cn ? void 0 : b && C[0] === cn ? [] : C,
						v
					];
					C = e, d ? d(t, 3, n) : t(...n);
				} finally {
					un = n;
				}
			}
		} else m.run();
	};
	return l && l(w), m = new Ae(h), m.scheduler = c ? () => c(w, !1) : w, v = (e) => dn(e, !1, m), g = m.onStop = () => {
		let e = ln.get(m);
		if (e) {
			if (d) d(e, 4);
			else for (let t of e) t();
			ln.delete(m);
		}
	}, t ? i ? w(!0) : C = m.run() : c ? c(w.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function pn(e, t = Infinity, n) {
	if (t <= 0 || !b(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ I(e)) pn(e.value, t, n);
	else if (p(e)) for (let r = 0; r < e.length; r++) pn(e[r], t, n);
	else if (h(e) || m(e)) e.forEach((e) => {
		pn(e, t, n);
	});
	else if (T(e)) {
		for (let r in e) pn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && pn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function mn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		gn(e, t, n);
	}
}
function hn(e, t, n, r) {
	if (_(e)) {
		let i = mn(e, t, n, r);
		return i && x(i) && i.catch((e) => {
			gn(e, t, n);
		}), i;
	}
	if (p(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(hn(e[a], t, n, r));
		return i;
	}
}
function gn(e, t, n, i = !0) {
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
			Ge(), mn(o, null, 10, [
				e,
				i,
				a
			]), Ke();
			return;
		}
	}
	_n(e, n, a, i, s);
}
function _n(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var vn = [], yn = -1, bn = [], xn = null, Sn = 0, Cn = /* @__PURE__ */ Promise.resolve(), wn = null;
function Tn(e) {
	let t = wn || Cn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function En(e) {
	let t = yn + 1, n = vn.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = vn[r], a = Mn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Dn(e) {
	if (!(e.flags & 1)) {
		let t = Mn(e), n = vn[vn.length - 1];
		!n || !(e.flags & 2) && t >= Mn(n) ? vn.push(e) : vn.splice(En(t), 0, e), e.flags |= 1, On();
	}
}
function On() {
	wn ||= Cn.then(Nn);
}
function kn(e) {
	p(e) ? bn.push(...e) : xn && e.id === -1 ? xn.splice(Sn + 1, 0, e) : e.flags & 1 || (bn.push(e), e.flags |= 1), On();
}
function An(e, t, n = yn + 1) {
	for (; n < vn.length; n++) {
		let t = vn[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			vn.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
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
		for (yn = 0; yn < vn.length; yn++) {
			let e = vn[yn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), mn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; yn < vn.length; yn++) {
			let e = vn[yn];
			e && (e.flags &= -2);
		}
		yn = -1, vn.length = 0, jn(e), wn = null, (vn.length || bn.length) && Nn(e);
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
		r._d && ia(-1);
		let i = Fn(t), a;
		try {
			a = e(...n);
		} finally {
			Fn(i), r._d && ia(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Ln(e, t) {
	if (z === null) return e;
	let n = za(z), i = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [a, o, s, c = r] = t[e];
		a && (_(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && pn(o), i.push({
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
function Rn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (Ge(), hn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Ke());
	}
}
function zn(e, t) {
	if (Ca) {
		let n = Ca.provides, r = Ca.parent && Ca.parent.provides;
		r === n && (n = Ca.provides = Object.create(r)), n[e] = t;
	}
}
function Bn(e, t, n = !1) {
	let r = wa();
	if (r || oi) {
		let i = oi ? oi._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && _(t) ? t.call(r && r.proxy) : t;
	}
}
function Vn() {
	return !!(wa() || oi);
}
var Hn = /* @__PURE__ */ Symbol.for("v-scx"), Un = () => Bn(Hn);
function Wn(e, t, n) {
	return Gn(e, t, n);
}
function Gn(e, t, n = r) {
	let { immediate: i, deep: o, flush: s, once: c } = n, u = l({}, n), d = t && i || !t && s !== "post", f;
	if (Aa) {
		if (s === "sync") {
			let e = Un();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = a, e.resume = a, e.pause = a, e;
		}
	}
	let p = Ca;
	u.call = (e, t, n) => hn(e, p, t, n);
	let m = !1;
	s === "post" ? u.scheduler = (e) => {
		Ri(e, p && p.suspense);
	} : s !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : Dn(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = fn(e, t, u);
	return Aa && (f ? f.push(h) : d && h()), h;
}
function Kn(e, t, n) {
	let r = this.proxy, i = v(e) ? e.includes(".") ? qn(r, e) : () => r[e] : e.bind(r, r), a;
	_(t) ? a = t : (a = t.handler, n = t);
	let o = Da(this), s = Gn(i, a.bind(r), n);
	return o(), s;
}
function qn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Jn = /* @__PURE__ */ Symbol("_vte"), Yn = (e) => e.__isTeleport, Xn = /* @__PURE__ */ Symbol("_leaveCb"), Zn = /* @__PURE__ */ Symbol("_enterCb");
function Qn() {
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
var $n = [Function, Array], er = {
	mode: String,
	appear: Boolean,
	persisted: Boolean,
	onBeforeEnter: $n,
	onEnter: $n,
	onAfterEnter: $n,
	onEnterCancelled: $n,
	onBeforeLeave: $n,
	onLeave: $n,
	onAfterLeave: $n,
	onLeaveCancelled: $n,
	onBeforeAppear: $n,
	onAppear: $n,
	onAfterAppear: $n,
	onAppearCancelled: $n
}, tr = (e) => {
	let t = e.subTree;
	return t.component ? tr(t.component) : t;
}, nr = {
	name: "BaseTransition",
	props: er,
	setup(e, { slots: t }) {
		let n = wa(), r = Qn();
		return () => {
			let i = t.default && ur(t.default(), !0), a = i && i.length ? rr(i) : n.subTree ? q() : void 0;
			if (!a) return;
			let o = /* @__PURE__ */ F(e), { mode: s } = o;
			if (r.isLeaving) return sr(a);
			let c = cr(a);
			if (!c) return sr(a);
			let l = or(c, o, r, n, (e) => l = e);
			c.type !== Qi && lr(c, l);
			let u = n.subTree && cr(n.subTree);
			if (u && u.type !== Qi && !ca(u, c) && tr(n).type !== Qi) {
				let e = or(u, o, r, n);
				if (lr(u, e), s === "out-in" && c.type !== Qi) return r.isLeaving = !0, e.afterLeave = () => {
					r.isLeaving = !1, n.job.flags & 8 || n.update(), delete e.afterLeave, u = void 0;
				}, sr(a);
				s === "in-out" && c.type !== Qi ? e.delayLeave = (e, t, n) => {
					let i = ar(r, u);
					i[String(u.key)] = u, e[Xn] = () => {
						t(), e[Xn] = void 0, delete l.delayedLeave, u = void 0;
					}, l.delayedLeave = () => {
						n(), delete l.delayedLeave, u = void 0;
					};
				} : u = void 0;
			} else u &&= void 0;
			return a;
		};
	}
};
function rr(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== Qi) {
			t = n;
			break;
		}
	}
	return t;
}
var ir = nr;
function ar(e, t) {
	let { leavingVNodes: n } = e, r = n.get(t.type);
	return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function or(e, t, n, r, i) {
	let { appear: a, mode: o, persisted: s = !1, onBeforeEnter: c, onEnter: l, onAfterEnter: u, onEnterCancelled: d, onBeforeLeave: f, onLeave: m, onAfterLeave: h, onLeaveCancelled: g, onBeforeAppear: _, onAppear: v, onAfterAppear: y, onAppearCancelled: b } = t, x = String(e.key), S = ar(n, e), C = (e, t) => {
		e && hn(e, r, 9, t);
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
			t[Xn] && t[Xn](!0);
			let i = S[x];
			i && ca(e, i) && i.el[Xn] && i.el[Xn](), C(r, [t]);
		},
		enter(t) {
			if (S[x] === e) return;
			let r = l, i = u, o = d;
			if (!n.isMounted) if (a) r = v || l, i = y || u, o = b || d;
			else return;
			let s = !1;
			t[Zn] = (e) => {
				s || (s = !0, C(e ? o : i, [t]), T.delayedLeave && T.delayedLeave(), t[Zn] = void 0);
			};
			let c = t[Zn].bind(null, !1);
			r ? w(r, [t, c]) : c();
		},
		leave(t, r) {
			let i = String(e.key);
			if (t[Zn] && t[Zn](!0), n.isUnmounting) return r();
			C(f, [t]);
			let a = !1;
			t[Xn] = (n) => {
				a || (a = !0, r(), C(n ? g : h, [t]), t[Xn] = void 0, S[i] === e && delete S[i]);
			};
			let o = t[Xn].bind(null, !1);
			S[i] = e, m ? w(m, [t, o]) : o();
		},
		clone(e) {
			let a = or(e, t, n, r, i);
			return i && i(a), a;
		}
	};
	return T;
}
function sr(e) {
	if (_r(e)) return e = pa(e), e.children = null, e;
}
function cr(e) {
	if (!_r(e)) return Yn(e.type) && e.children ? rr(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && _(n.default)) return n.default();
	}
}
function lr(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, lr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ur(e, t = !1, n) {
	let r = [], i = 0;
	for (let a = 0; a < e.length; a++) {
		let o = e[a], s = n == null ? o.key : String(n) + String(o.key == null ? a : o.key);
		o.type === H ? (o.patchFlag & 128 && i++, r = r.concat(ur(o.children, t, s))) : (t || o.type !== Qi) && r.push(s == null ? o : pa(o, { key: s }));
	}
	if (i > 1) for (let e = 0; e < r.length; e++) r[e].patchFlag = -2;
	return r;
}
/* @__NO_SIDE_EFFECTS__ */
function B(e, t) {
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
	let s = i.shapeFlag & 4 ? za(i.component) : i.el, c = a ? null : s, { i: l, r: d } = e, m = t && t.r, h = l.refs === r ? l.refs = {} : l.refs, g = l.setupState, y = /* @__PURE__ */ F(g), b = g === r ? o : (e) => fr(h, e) ? !1 : f(y, e), x = (e, t) => !(t && fr(h, t));
	if (m != null && m !== d) {
		if (hr(t), v(m)) h[m] = null, b(m) && (g[m] = null);
		else if (/* @__PURE__ */ I(m)) {
			let e = t;
			x(m, e.k) && (m.value = null), e.k && (h[e.k] = null);
		}
	}
	if (_(d)) mn(d, l, 12, [c, h]);
	else {
		let t = v(d), r = /* @__PURE__ */ I(d);
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
ue().requestIdleCallback, ue().cancelIdleCallback;
var gr = (e) => !!e.type.__asyncLoader, _r = (e) => e.type.__isKeepAlive;
function vr(e, t) {
	br(e, "a", t);
}
function yr(e, t) {
	br(e, "da", t);
}
function br(e, t, n = Ca) {
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
function Sr(e, t, n = Ca, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Ge();
			let i = Da(n), a = hn(t, n, e, r);
			return i(), Ke(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var Cr = (e) => (t, n = Ca) => {
	(!Aa || e === "sp") && Sr(e, (...e) => t(...e), n);
}, wr = Cr("bm"), Tr = Cr("m"), Er = Cr("bu"), Dr = Cr("u"), Or = Cr("bum"), kr = Cr("um"), Ar = Cr("sp"), jr = Cr("rtg"), Mr = Cr("rtc");
function Nr(e, t = Ca) {
	Sr("ec", e, t);
}
var Pr = /* @__PURE__ */ Symbol.for("v-ndc");
function V(e, t, n, r) {
	let i, a = n && n[r], o = p(e);
	if (o || v(e)) {
		let n = o && /* @__PURE__ */ Ut(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ Gt(e), s = /* @__PURE__ */ Wt(e), e = ot(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Yt(Jt(e[n])) : Jt(e[n]) : e[n], n, void 0, a && a[n]);
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
		return t !== "default" && (n.name = t), U(), oa(H, null, [K("slot", n, r && r())], e ? -2 : 64);
	}
	let a = e[t];
	a && a._c && (a._d = !1), U();
	let o = a && Ir(a(n)), s = n.key || o && o.key, c = oa(H, { key: (s && !y(s) ? s : `_${t}`) + (!o && r ? "_fb" : "") }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), a && a._c && (a._d = !0), c;
}
function Ir(e) {
	return e.some((e) => sa(e) ? !(e.type === Qi || e.type === H && !Ir(e.children)) : !0) ? e : null;
}
var Lr = (e) => e ? ka(e) ? za(e) : Lr(e.parent) : null, Rr = /* @__PURE__ */ l(/* @__PURE__ */ Object.create(null), {
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
	$watch: (e) => Kn.bind(e)
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
		if (u) return t === "$attrs" && nt(e.attrs, "get", ""), u(e);
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
		b(t) && (e.data = /* @__PURE__ */ zt(t));
	}
	if (Hr = !0, o) for (let e in o) {
		let t = o[e], i = J({
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
			zn(t, e[t]);
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
		i = b(r) ? "default" in r ? Bn(r.from || n, r.default, !0) : Bn(r.from || n) : Bn(r), /* @__PURE__ */ I(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Gr(e, t, n) {
	hn(p(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Kr(e, t, n, r) {
	let i = r.includes(".") ? qn(n, r) : () => n[r];
	if (v(e)) {
		let n = t[e];
		_(n) && Wn(i, n);
	} else if (_(e)) Wn(i, e.bind(n));
	else if (b(e)) if (p(e)) e.forEach((e) => Kr(e, t, n, r));
	else {
		let r = _(e.handler) ? e.handler.bind(n) : t[e.handler];
		_(r) && Wn(i, r, e);
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
			version: Ha,
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
					let u = c._ceVNode || K(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, za(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (hn(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
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
	s && (s.trim && (a = n.map((e) => v(e) ? e.trim() : e)), s.number && (a = n.map(se)));
	let c, l = i[c = ie(t)] || i[c = ie(k(t))];
	!l && o && (l = i[c = ie(ne(t))]), l && hn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, hn(u, e, 6, a);
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
			v = ha(u.call(t, e, d, f, m, p, h)), y = s;
		} else {
			let e = t;
			v = ha(e.length > 1 ? e(f, {
				attrs: s,
				slots: o,
				emit: l
			}) : e(f, null)), y = t.props ? s : mi(s);
		}
	} catch (t) {
		ea.length = 0, gn(t, e, 1), v = K(Qi);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(c) && (y = hi(y, a)), b = pa(b, y, !1, !0));
	}
	return n.dirs && (b = pa(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && lr(b, n.transition), v = b, Fn(_), v;
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
	return n === "style" && b(r) && b(i) ? !be(r, i) : r !== i;
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
	n ? e.props = r ? i : /* @__PURE__ */ Bt(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function wi(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ F(i), [c] = e.propsOptions, l = !1;
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
	l && rt(e.attrs, "set", "");
}
function Ti(e, t, n, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (t) for (let r in t) {
		if (D(r)) continue;
		let l = t[r], u;
		a && f(a, u = k(r)) ? !o || !o.includes(u) ? n[u] = l : (c ||= {})[u] = l : fi(e.emitsOptions, r) || (!(r in i) || l !== i[r]) && (i[r] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ F(n), i = c || r;
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
					let o = Da(i);
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
var Ai = (e) => e === "_" || e === "_ctx" || e === "$stable", ji = (e) => p(e) ? e.map(ha) : [ha(e)], Mi = (e, t, n) => {
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
		e ? (Fi(r, t, n), n && oe(r, "_", e, !0)) : Ni(t, r);
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
	let n = ue();
	n.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = a, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !ca(e, t) && (r = _e(e), pe(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case Zi:
				y(e, t, n, r);
				break;
			case Qi:
				b(e, t, n, r);
				break;
			case $i:
				e ?? x(t, n, r, o);
				break;
			case H:
				ne(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? re(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, be);
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
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && O(e.children, d, null, r, i, Vi(e, a), s, u), _ && Rn(e, null, r, "created"), E(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !D(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && ya(f, r, e);
		}
		_ && Rn(e, null, r, "beforeMount");
		let v = Ui(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Ri(() => {
			try {
				f && ya(f, r, e), v && g.enter(d), _ && Rn(e, null, r, "mounted");
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
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? ga(e[l]) : ha(e[l]), t, n, r, i, a, o, s);
	}, ee = (e, t, n, i, a, o, s) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || r, h = t.props || r, g;
		if (n && Hi(n, !1), (g = h.onVnodeBeforeUpdate) && ya(g, n, t, e), f && Rn(t, e, n, "beforeUpdate"), n && Hi(n, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? k(e.dynamicChildren, d, l, n, i, Vi(t, a), o) : s || ce(e, t, l, null, n, i, Vi(t, a), o, !1), u > 0) {
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
			g && ya(g, n, t, e), f && Rn(t, e, n, "updated");
		}, i);
	}, k = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === H || !ca(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
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
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), O(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (k(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Wi(e, t, !0)) : ce(e, t, n, f, i, a, s, c, l);
	}, re = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ie(t, n, r, i, a, o, c) : A(e, t, c);
	}, ie = (e, t, n, r, i, a, o) => {
		let s = e.component = Sa(e, r, i);
		if (_r(e) && (s.ctx.renderer = be), ja(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, oe, o), !e.el) {
				let r = s.subTree = K(Qi);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else oe(s, e, t, n, i, a, o);
	}, A = (e, t, n) => {
		let r = t.component = e.component;
		if (gi(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			se(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, oe = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Ki(e);
					if (n) {
						t && (t.el = c.el, se(e, t, o)), n.asyncDep.then(() => {
							Ri(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Hi(e, !1), t ? (t.el = c.el, se(e, t, o)) : t = c, n && ae(n), (d = t.props && t.props.onVnodeBeforeUpdate) && ya(d, s, t, c), Hi(e, !0);
				let f = pi(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), _e(p), e, i, a), t.el = f.el, u === null && yi(e, f.el), r && Ri(r, i), (d = t.props && t.props.onVnodeUpdated) && Ri(() => ya(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = gr(t);
				if (Hi(e, !1), l && ae(l), !m && (o = c && c.onVnodeBeforeMount) && ya(o, d, t), Hi(e, !0), s && Se) {
					let t = () => {
						e.subTree = pi(e), Se(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = pi(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Ri(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Ri(() => ya(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && gr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Ri(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ae(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Dn(u), Hi(e, !0), l();
	}, se = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, wi(e, t.props, r, n), Li(e, t.children, n), Ge(), An(e), Ke();
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
			let r = t[p] = l ? ga(t[p]) : ha(t[p]);
			v(e[p], r, n, null, a, o, s, c, l);
		}
		u > d ? ge(e, a, o, !0, !1, f) : O(t, n, r, a, o, s, c, l, f);
	}, de = (e, t, n, r, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], i = t[u] = l ? ga(t[u]) : ha(t[u]);
			if (ca(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], i = t[p] = l ? ga(t[p]) : ha(t[p]);
			if (ca(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, i = e < d ? t[e].el : r;
				for (; u <= p;) v(null, t[u] = l ? ga(t[u]) : ha(t[u]), n, i, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) pe(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? ga(t[u]) : ha(t[u]);
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
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && ca(r, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? pe(r, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(r, t[i], n, null, a, o, s, c, l), y++);
			}
			let w = x ? Gi(C) : i;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, i = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Ji(f) : r;
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
		if (c === H) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) fe(u[e], t, n, r);
			o(e.anchor, t, n);
			return;
		}
		if (c === $i) {
			S(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) if (r === 0) l.beforeEnter(a), o(a, t, n), Ri(() => l.enter(a), i);
		else {
			let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? s(a) : o(a, t, n);
			}, d = () => {
				a._isLeaving && a[Xn](!0), r(a, () => {
					u(), c && c();
				});
			};
			i ? i(a, u, d) : d();
		}
		else o(a, t, n);
	}, pe = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (Ge(), mr(s, null, n, e, !0), Ke()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !gr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && ya(_, t, e), u & 6) j(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Rn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, be, r) : l && !l.hasOnce && (a !== H || d > 0 && d & 64) ? ge(l, t, n, !1, !0) : (a === H && d & 384 || !i && u & 16) && ge(c, t, n), r && me(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Ri(() => {
			_ && ya(_, t, e), h && Rn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, me = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === H) {
			he(n, r);
			return;
		}
		if (t === $i) {
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
		qi(c), qi(l), r && ae(r), i.stop(), a && (a.flags |= 8, pe(o, e, t, n)), s && Ri(s, t), Ri(() => {
			e.isUnmounted = !0;
		}, t);
	}, ge = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) pe(e[o], t, n, r, i);
	}, _e = (e) => {
		if (e.shapeFlag & 6) return _e(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Jn];
		return n ? h(n) : t;
	}, ve = !1, ye = (e, t, n) => {
		let r;
		e == null ? t._vnode && (pe(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, ve ||= (ve = !0, An(r), jn(), !1);
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
		createApp: ai(ye, xe)
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
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = ga(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Wi(t, a)), a.type === Zi && (a.patchFlag === -1 && (a = i[e] = ga(a)), a.el = t.el), a.type === Qi && !a.el && (a.el = t.el);
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
	t && t.pendingBranch ? p(e) ? t.effects.push(...e) : t.effects.push(e) : kn(e);
}
var H = /* @__PURE__ */ Symbol.for("v-fgt"), Zi = /* @__PURE__ */ Symbol.for("v-txt"), Qi = /* @__PURE__ */ Symbol.for("v-cmt"), $i = /* @__PURE__ */ Symbol.for("v-stc"), ea = [], ta = null;
function U(e = !1) {
	ea.push(ta = e ? null : []);
}
function na() {
	ea.pop(), ta = ea[ea.length - 1] || null;
}
var ra = 1;
function ia(e, t = !1) {
	ra += e, e < 0 && ta && t && (ta.hasOnce = !0);
}
function aa(e) {
	return e.dynamicChildren = ra > 0 ? ta || i : null, na(), ra > 0 && ta && ta.push(e), e;
}
function W(e, t, n, r, i, a) {
	return aa(G(e, t, n, r, i, a, !0));
}
function oa(e, t, n, r, i) {
	return aa(K(e, t, n, r, i, !0));
}
function sa(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function ca(e, t) {
	return e.type === t.type && e.key === t.key;
}
var la = ({ key: e }) => e ?? null, ua = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : v(e) || /* @__PURE__ */ I(e) || _(e) ? {
	i: z,
	r: e,
	k: t,
	f: !!n
} : e);
function G(e, t = null, n = null, r = 0, i = null, a = e === H ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && la(t),
		ref: t && ua(t),
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
	return s ? (_a(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= v(n) ? 8 : 16), ra > 0 && !o && ta && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && ta.push(c), c;
}
var K = da;
function da(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === Pr) && (e = Qi), sa(e)) {
		let r = pa(e, t, !0);
		return n && _a(r, n), ra > 0 && !a && ta && (r.shapeFlag & 6 ? ta[ta.indexOf(e)] = r : ta.push(r)), r.patchFlag = -2, r;
	}
	if (Ba(e) && (e = e.__vccOpts), t) {
		t = fa(t);
		let { class: e, style: n } = t;
		e && !v(e) && (t.class = j(e)), b(n) && (/* @__PURE__ */ Kt(n) && !p(n) && (n = l({}, n)), t.style = de(n));
	}
	let o = v(e) ? 1 : Yi(e) ? 128 : Yn(e) ? 64 : b(e) ? 4 : _(e) ? 2 : 0;
	return G(e, t, n, r, i, o, a, !0);
}
function fa(e) {
	return e ? /* @__PURE__ */ Kt(e) || Si(e) ? l({}, e) : e : null;
}
function pa(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? va(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && la(l),
		ref: t && t.ref ? n && a ? p(a) ? a.concat(ua(t)) : [a, ua(t)] : ua(t) : a,
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
		ssContent: e.ssContent && pa(e.ssContent),
		ssFallback: e.ssFallback && pa(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && lr(u, c.clone(u)), u;
}
function ma(e = " ", t = 0) {
	return K(Zi, null, e, t);
}
function q(e = "", t = !1) {
	return t ? (U(), oa(Qi, null, e)) : K(Qi, null, e);
}
function ha(e) {
	return e == null || typeof e == "boolean" ? K(Qi) : p(e) ? K(H, null, e.slice()) : sa(e) ? ga(e) : K(Zi, null, String(e));
}
function ga(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : pa(e);
}
function _a(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (p(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), _a(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !Si(t) ? t._ctx = z : r === 3 && z && (z.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else _(t) ? (t = {
		default: t,
		_ctx: z
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [ma(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function va(...e) {
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
function ya(e, t, n, r = null) {
	hn(e, t, 7, [n, r]);
}
var ba = ri(), xa = 0;
function Sa(e, t, n) {
	let i = e.type, a = (t ? t.appContext : e.appContext) || ba, o = {
		uid: xa++,
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
var Ca = null, wa = () => Ca || z, Ta, Ea;
{
	let e = ue(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Ta = t("__VUE_INSTANCE_SETTERS__", (e) => Ca = e), Ea = t("__VUE_SSR_SETTERS__", (e) => Aa = e);
}
var Da = (e) => {
	let t = Ca;
	return Ta(e), e.scope.on(), () => {
		e.scope.off(), Ta(t);
	};
}, Oa = () => {
	Ca && Ca.scope.off(), Ta(null);
};
function ka(e) {
	return e.vnode.shapeFlag & 4;
}
var Aa = !1;
function ja(e, t = !1, n = !1) {
	t && Ea(t);
	let { props: r, children: i } = e.vnode, a = ka(e);
	Ci(e, r, a, t), Ii(e, i, n || t);
	let o = a ? Ma(e, t) : void 0;
	return t && Ea(!1), o;
}
function Ma(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Br);
	let { setup: r } = n;
	if (r) {
		Ge();
		let n = e.setupContext = r.length > 1 ? Ra(e) : null, i = Da(e), a = mn(r, e, 0, [e.props, n]), o = x(a);
		if (Ke(), i(), (o || e.sp) && !gr(e) && dr(e), o) {
			if (a.then(Oa, Oa), t) return a.then((n) => {
				Na(e, n, t);
			}).catch((t) => {
				gn(t, e, 0);
			});
			e.asyncDep = a;
		} else Na(e, a, t);
	} else Ia(e, t);
}
function Na(e, t, n) {
	_(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : b(t) && (e.setupState = $t(t)), Ia(e, n);
}
var Pa, Fa;
function Ia(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && Pa && !r.render) {
			let t = r.template || qr(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r;
				r.render = Pa(t, l(l({
					isCustomElement: n,
					delimiters: a
				}, i), o));
			}
		}
		e.render = r.render || a, Fa && Fa(e);
	}
	{
		let t = Da(e);
		Ge();
		try {
			Ur(e);
		} finally {
			Ke(), t();
		}
	}
}
var La = { get(e, t) {
	return nt(e, "get", ""), e[t];
} };
function Ra(e) {
	return {
		attrs: new Proxy(e.attrs, La),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function za(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy($t(qt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Rr) return Rr[n](e);
		},
		has(e, t) {
			return t in e || t in Rr;
		}
	}) : e.proxy;
}
function Ba(e) {
	return _(e) && "__vccOpts" in e;
}
var J = (e, t) => /* @__PURE__ */ sn(e, t, Aa);
function Va(e, t, n) {
	try {
		ia(-1);
		let r = arguments.length;
		return r === 2 ? b(t) && !p(t) ? sa(t) ? K(e, null, [t]) : K(e, t) : K(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && sa(n) && (n = [n]), K(e, t, n));
	} finally {
		ia(1);
	}
}
var Ha = "3.5.34", Ua = void 0, Wa = typeof window < "u" && window.trustedTypes;
if (Wa) try {
	Ua = /* @__PURE__ */ Wa.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Ga = Ua ? (e) => Ua.createHTML(e) : (e) => e, Ka = "http://www.w3.org/2000/svg", qa = "http://www.w3.org/1998/Math/MathML", Ja = typeof document < "u" ? document : null, Ya = Ja && /* @__PURE__ */ Ja.createElement("template"), Xa = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Ja.createElementNS(Ka, e) : t === "mathml" ? Ja.createElementNS(qa, e) : n ? Ja.createElement(e, { is: n }) : Ja.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Ja.createTextNode(e),
	createComment: (e) => Ja.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Ja.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			Ya.innerHTML = Ga(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Ya.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Za = "transition", Qa = "animation", $a = /* @__PURE__ */ Symbol("_vtc"), eo = {
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
}, to = /* @__PURE__ */ l({}, er, eo), no = /* @__PURE__ */ ((e) => (e.displayName = "Transition", e.props = to, e))((e, { slots: t }) => Va(ir, ao(e), t)), ro = (e, t = []) => {
	p(e) ? e.forEach((e) => e(...t)) : e && e(...t);
}, io = (e) => e ? p(e) ? e.some((e) => e.length > 1) : e.length > 1 : !1;
function ao(e) {
	let t = {};
	for (let n in e) n in eo || (t[n] = e[n]);
	if (e.css === !1) return t;
	let { name: n = "v", type: r, duration: i, enterFromClass: a = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: s = `${n}-enter-to`, appearFromClass: c = a, appearActiveClass: u = o, appearToClass: d = s, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: p = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, h = oo(i), g = h && h[0], _ = h && h[1], { onBeforeEnter: v, onEnter: y, onEnterCancelled: b, onLeave: x, onLeaveCancelled: S, onBeforeAppear: C = v, onAppear: w = y, onAppearCancelled: T = b } = t, E = (e, t, n, r) => {
		e._enterCancelled = r, lo(e, t ? d : s), lo(e, t ? u : o), n && n();
	}, D = (e, t) => {
		e._isLeaving = !1, lo(e, f), lo(e, m), lo(e, p), t && t();
	}, O = (e) => (t, n) => {
		let i = e ? w : y, o = () => E(t, e, n);
		ro(i, [t, o]), uo(() => {
			lo(t, e ? c : a), co(t, e ? d : s), io(i) || po(t, r, g, o);
		});
	};
	return l(t, {
		onBeforeEnter(e) {
			ro(v, [e]), co(e, a), co(e, o);
		},
		onBeforeAppear(e) {
			ro(C, [e]), co(e, c), co(e, u);
		},
		onEnter: O(!1),
		onAppear: O(!0),
		onLeave(e, t) {
			e._isLeaving = !0;
			let n = () => D(e, t);
			co(e, f), e._enterCancelled ? (co(e, p), _o(e)) : (_o(e), co(e, p)), uo(() => {
				e._isLeaving && (lo(e, f), co(e, m), io(x) || po(e, r, _, n));
			}), ro(x, [e, n]);
		},
		onEnterCancelled(e) {
			E(e, !1, void 0, !0), ro(b, [e]);
		},
		onAppearCancelled(e) {
			E(e, !0, void 0, !0), ro(T, [e]);
		},
		onLeaveCancelled(e) {
			D(e), ro(S, [e]);
		}
	});
}
function oo(e) {
	if (e == null) return null;
	if (b(e)) return [so(e.enter), so(e.leave)];
	{
		let t = so(e);
		return [t, t];
	}
}
function so(e) {
	return ce(e);
}
function co(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e[$a] || (e[$a] = /* @__PURE__ */ new Set())).add(t);
}
function lo(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
	let n = e[$a];
	n && (n.delete(t), n.size || (e[$a] = void 0));
}
function uo(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
var fo = 0;
function po(e, t, n, r) {
	let i = e._endId = ++fo, a = () => {
		i === e._endId && r();
	};
	if (n != null) return setTimeout(a, n);
	let { type: o, timeout: s, propCount: c } = mo(e, t);
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
function mo(e, t) {
	let n = window.getComputedStyle(e), r = (e) => (n[e] || "").split(", "), i = r(`${Za}Delay`), a = r(`${Za}Duration`), o = ho(i, a), s = r(`${Qa}Delay`), c = r(`${Qa}Duration`), l = ho(s, c), u = null, d = 0, f = 0;
	t === Za ? o > 0 && (u = Za, d = o, f = a.length) : t === Qa ? l > 0 && (u = Qa, d = l, f = c.length) : (d = Math.max(o, l), u = d > 0 ? o > l ? Za : Qa : null, f = u ? u === Za ? a.length : c.length : 0);
	let p = u === Za && /\b(?:transform|all)(?:,|$)/.test(r(`${Za}Property`).toString());
	return {
		type: u,
		timeout: d,
		propCount: f,
		hasTransform: p
	};
}
function ho(e, t) {
	for (; e.length < t.length;) e = e.concat(e);
	return Math.max(...t.map((t, n) => go(t) + go(e[n])));
}
function go(e) {
	return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function _o(e) {
	return (e ? e.ownerDocument : document).body.offsetHeight;
}
function vo(e, t, n) {
	let r = e[$a];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var yo = /* @__PURE__ */ Symbol("_vod"), bo = /* @__PURE__ */ Symbol("_vsh"), xo = /* @__PURE__ */ Symbol(""), So = /(?:^|;)\s*display\s*:/;
function Co(e, t, n) {
	let r = e.style, i = v(n), a = !1;
	if (n && !i) {
		if (t) if (v(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? To(r, t, "");
		}
		else for (let e in t) n[e] ?? To(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? To(r, i, "") : ko(e, i, !v(t) && t ? t[i] : void 0, o) || To(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[xo];
			e && (n += ";" + e), r.cssText = n, a = So.test(n);
		}
	} else t && e.removeAttribute("style");
	yo in e && (e[yo] = a ? r.display : "", e[bo] && (r.display = "none"));
}
var wo = /\s*!important$/;
function To(e, t, n) {
	if (p(n)) n.forEach((n) => To(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = Oo(e, t);
		wo.test(n) ? e.setProperty(ne(r), n.replace(wo, ""), "important") : e[r] = n;
	}
}
var Eo = [
	"Webkit",
	"Moz",
	"ms"
], Do = {};
function Oo(e, t) {
	let n = Do[t];
	if (n) return n;
	let r = k(t);
	if (r !== "filter" && r in e) return Do[t] = r;
	r = re(r);
	for (let n = 0; n < Eo.length; n++) {
		let i = Eo[n] + r;
		if (i in e) return Do[t] = i;
	}
	return t;
}
function ko(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && v(r) && n === r;
}
var Ao = "http://www.w3.org/1999/xlink";
function jo(e, t, n, r, i, a = _e(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ao, t.slice(6, t.length)) : e.setAttributeNS(Ao, t, n) : n == null || a && !ve(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : y(n) ? String(n) : n);
}
function Mo(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Ga(n) : n);
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
function No(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Po(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Fo = /* @__PURE__ */ Symbol("_vei");
function Io(e, t, n, r, i = null) {
	let a = e[Fo] || (e[Fo] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Ro(t);
		r ? No(e, n, a[t] = Ho(r, i), s) : o && (Po(e, n, o, s), a[t] = void 0);
	}
}
var Lo = /(?:Once|Passive|Capture)$/;
function Ro(e) {
	let t;
	if (Lo.test(e)) {
		t = {};
		let n;
		for (; n = e.match(Lo);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : ne(e.slice(2)), t];
}
var zo = 0, Bo = /* @__PURE__ */ Promise.resolve(), Vo = () => zo ||= (Bo.then(() => zo = 0), Date.now());
function Ho(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		hn(Uo(e, n.value), t, 5, [e]);
	};
	return n.value = e, n.attached = Vo(), n;
}
function Uo(e, t) {
	if (p(t)) {
		let n = e.stopImmediatePropagation;
		return e.stopImmediatePropagation = () => {
			n.call(e), e._stopped = !0;
		}, t.map((e) => (t) => !t._stopped && e && e(t));
	} else return t;
}
var Wo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Go = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? vo(e, r, o) : t === "style" ? Co(e, n, r) : s(t) ? c(t) || Io(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ko(e, t, r, o)) ? (Mo(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && jo(e, t, r, o, a, t !== "value")) : e._isVueCE && (qo(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !v(r))) ? Mo(e, k(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), jo(e, t, r, o));
};
function Ko(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Wo(t) && _(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Wo(t) && v(n) ? !1 : t in e;
}
function qo(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = k(t);
	return Array.isArray(n) ? n.some((e) => k(e) === r) : Object.keys(n).some((e) => k(e) === r);
}
var Jo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return p(t) ? (e) => ae(t, e) : t;
};
function Yo(e) {
	e.target.composing = !0;
}
function Xo(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var Zo = /* @__PURE__ */ Symbol("_assign");
function Qo(e, t, n) {
	return t && (e = e.trim()), n && (e = se(e)), e;
}
var $o = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[Zo] = Jo(i);
		let a = r || i.props && i.props.type === "number";
		No(e, t ? "change" : "input", (t) => {
			t.target.composing || e[Zo](Qo(e.value, n, a));
		}), (n || a) && No(e, "change", () => {
			e.value = Qo(e.value, n, a);
		}), t || (No(e, "compositionstart", Yo), No(e, "compositionend", Xo), No(e, "change", Xo));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[Zo] = Jo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? se(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, es = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = h(t);
		No(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? se(ns(e)) : ns(e));
			e[Zo](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, Tn(() => {
				e._assigning = !1;
			});
		}), e[Zo] = Jo(r);
	},
	mounted(e, { value: t }) {
		ts(e, t);
	},
	beforeUpdate(e, t, n) {
		e[Zo] = Jo(n);
	},
	updated(e, { value: t }) {
		e._assigning || ts(e, t);
	}
};
function ts(e, t) {
	let n = e.multiple, r = p(t);
	if (!(n && !r && !h(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = ns(a);
			if (n) if (r) {
				let e = typeof o;
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = xe(t, o) > -1;
			} else a.selected = t.has(o);
			else if (be(ns(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function ns(e) {
	return "_value" in e ? e._value : e.value;
}
var rs = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], is = {
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
	exact: (e, t) => rs.some((n) => e[`${n}Key`] && !t.includes(n))
}, as = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = is[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, os = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, ss = (e, t) => {
	let n = e._withKeys ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = ne(n.key);
		if (t.some((e) => e === r || os[e] === r)) return e(n);
	}));
}, cs = /* @__PURE__ */ l({ patchProp: Go }, Xa), ls;
function us() {
	return ls ||= zi(cs);
}
var ds = ((...e) => {
	let t = us().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = ps(e);
		if (!r) return;
		let i = t._component;
		!_(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, fs(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function fs(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function ps(e) {
	return v(e) ? document.querySelector(e) : e;
}
//#endregion
//#region node_modules/pinia/dist/pinia.mjs
var ms = typeof window < "u", hs, gs = (e) => hs = e, _s = Symbol();
function vs(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var ys;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(ys ||= {});
var bs = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function xs(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function Ss(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		Ds(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function Cs(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function ws(e) {
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
var Ts = typeof navigator == "object" ? navigator : { userAgent: "" }, Es = /Macintosh/.test(Ts.userAgent) && /AppleWebKit/.test(Ts.userAgent) && !/Safari/.test(Ts.userAgent), Ds = ms ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Es ? Os : "msSaveOrOpenBlob" in Ts ? ks : As : () => {};
function Os(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? ws(r) : Cs(r.href) ? Ss(e, t, n) : (r.target = "_blank", ws(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		ws(r);
	}, 0));
}
function ks(e, t = "download", n) {
	if (typeof e == "string") if (Cs(e)) Ss(e, t, n);
	else {
		let t = document.createElement("a");
		t.href = e, t.target = "_blank", setTimeout(function() {
			ws(t);
		});
	}
	else navigator.msSaveOrOpenBlob(xs(e, n), t);
}
function As(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return Ss(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(bs.HTMLElement)) || "safari" in bs, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || Es) && typeof FileReader < "u") {
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
var { assign: js } = Object;
function Ms() {
	let e = Ee(!0), t = e.run(() => /* @__PURE__ */ L({})), n = [], r = [], i = qt({
		install(e) {
			gs(i), i._a = e, e.provide(_s, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var Ns = () => {};
function Ps(e, t, n, r = Ns) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && De() && Oe(i), i;
}
function Fs(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var Is = (e) => e(), Ls = Symbol(), Rs = Symbol();
function zs(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		vs(i) && vs(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ I(r) && !/* @__PURE__ */ Ut(r) ? e[n] = zs(i, r) : e[n] = r;
	}
	return e;
}
var Bs = Symbol();
function Vs(e) {
	return !vs(e) || !Object.prototype.hasOwnProperty.call(e, Bs);
}
var { assign: Hs } = Object;
function Us(e) {
	return !!(/* @__PURE__ */ I(e) && e.effect);
}
function Ws(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), Hs(/* @__PURE__ */ en(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = qt(J(() => {
			gs(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = Gs(e, l, t, n, r, !0), c;
}
function Gs(e, t, n = {}, r, i, a) {
	let o, s = Hs({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = r.state.value[e];
	!a && !p && (r.state.value[e] = {});
	let m;
	function h(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: ys.patchFunction,
			storeId: e,
			events: void 0
		}) : (zs(r.state.value[e], t), n = {
			type: ys.patchObject,
			payload: t,
			storeId: e,
			events: void 0
		});
		let i = m = Symbol();
		Tn().then(() => {
			m === i && (l = !0);
		}), u = !0, Fs(d, n, r.state.value[e]);
	}
	let g = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			Hs(e, t);
		});
	} : Ns;
	function _() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let v = (t, n = "") => {
		if (Ls in t) return t[Rs] = n, t;
		let i = function() {
			gs(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			Fs(f, {
				args: n,
				name: i[Rs],
				store: y,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : y, n);
			} catch (e) {
				throw Fs(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (Fs(a, e), e)).catch((e) => (Fs(o, e), Promise.reject(e))) : (Fs(a, l), l);
		};
		return i[Ls] = !0, i[Rs] = n, i;
	}, y = /* @__PURE__ */ zt({
		_p: r,
		$id: e,
		$onAction: Ps.bind(null, f),
		$patch: h,
		$reset: g,
		$subscribe(t, n = {}) {
			let i = Ps(d, t, n.detached, () => a()), a = o.run(() => Wn(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: ys.direct,
					events: void 0
				}, r);
			}, Hs({}, c, n)));
			return i;
		},
		$dispose: _
	});
	r._s.set(e, y);
	let b = (r._a && r._a.runWithContext || Is)(() => r._e.run(() => (o = Ee()).run(() => t({ action: v }))));
	for (let t in b) {
		let n = b[t];
		/* @__PURE__ */ I(n) && !Us(n) || /* @__PURE__ */ Ut(n) ? a || (p && Vs(n) && (/* @__PURE__ */ I(n) ? n.value = p[t] : zs(n, p[t])), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = v(n, t), s.actions[t] = n);
	}
	return Hs(y, b), Hs(/* @__PURE__ */ F(y), b), Object.defineProperty(y, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			h((t) => {
				Hs(t, e);
			});
		}
	}), r._p.forEach((e) => {
		Hs(y, o.run(() => e({
			store: y,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), p && a && n.hydrate && n.hydrate(y.$state, p), l = !0, u = !0, y;
}
function Ks(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Vn();
		return n ||= o ? Bn(_s, null) : null, n && gs(n), n = hs, n._s.has(e) || (i ? Gs(e, t, r, n) : Ws(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
function qs(e) {
	let t = /* @__PURE__ */ F(e), n = {};
	for (let r in t) {
		let i = t[r];
		i.effect ? n[r] = J({
			get: () => e[r],
			set(t) {
				e[r] = t;
			}
		}) : (/* @__PURE__ */ I(i) || /* @__PURE__ */ Ut(i)) && (n[r] = /* @__PURE__ */ rn(e, r));
	}
	return n;
}
//#endregion
//#region src/functions/npc-builder/xp-cost.ts
var Js = {
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
function Ys(e) {
	let t = {
		characteristics: 0,
		skills: 0,
		talents: 0,
		total: 0
	};
	for (let n of e) {
		let e = Xs(n);
		n.kind === "characteristic" ? t.characteristics += e : n.kind === "skill" ? t.skills += e : t.talents += e;
	}
	return t.total = t.characteristics + t.skills + t.talents, t;
}
function Xs(e) {
	let t = Zs(e);
	return e.kind === "talent" ? $s(Math.max(0, Math.floor(e.current)), Math.max(0, Math.floor(e.baseAdvances))) : Qs(t, e.kind === "characteristic" ? Js.characteristic : Js.skill);
}
function Zs(e) {
	return Math.max(0, Math.floor(e.baseAdvances + e.current));
}
function Qs(e, t) {
	let n = Math.max(0, Math.floor(e)), r = 0;
	for (let e = 0; e < n; e += 1) {
		let n = Math.min(Math.floor(e / 5), t.length - 1);
		r += t[n] ?? 0;
	}
	return r;
}
function $s(e, t = 0) {
	let n = Math.max(0, Math.floor(e)), r = Math.max(0, Math.floor(t)), i = 0;
	for (let e = 0; e < n; e += 1) i += (r + e + 1) * 100;
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
}, ec = {
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
}, tc = {
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
function nc(e) {
	return e in ec;
}
//#endregion
//#region src/functions/npc-builder/create-default-trait-config.ts
function rc() {
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
function ic(e, t) {
	return `${e}:${uc(t)}`;
}
function ac(e) {
	let t = e.level ?? 1;
	return Number.isFinite(t) ? Math.max(1, Math.floor(t)) * 5 : 5;
}
function oc(e) {
	return e.name;
}
function sc(e, t) {
	return e === "characteristic" ? t.allowBaseActorCharacteristics : e === "skill" ? t.allowBaseActorSkills : t.allowBaseActorTalents;
}
function cc(e, t) {
	return {
		...rc(),
		...e,
		...t
	};
}
function lc(e, t) {
	return uc(e) === uc(t);
}
function uc(e) {
	return e.trim().toLocaleLowerCase();
}
function dc(e) {
	return Number.isFinite(e) ? Math.max(1, Math.floor(e)) : 1;
}
function fc(e) {
	let t = 0;
	for (let n of e) t += n.count;
	return t;
}
function pc(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = uc(r);
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
//#endregion
//#region src/functions/npc-builder/skill-specialization.ts
function mc(e, t, n) {
	return `${e}:${yc(t)}:${n}`;
}
function hc(e, t) {
	let n = e.trim(), r = t.trim();
	return r ? `${n} (${r})` : n;
}
function gc(e) {
	let t = /^(?<base>.+?)\s*\((?<specialization>[^)]+)\)\s*$/.exec(e.trim());
	if (!t?.groups) return null;
	let n = t.groups.base?.trim() ?? "", r = t.groups.specialization?.trim() ?? "";
	return !n || !r || _c(e) ? null : {
		baseName: n,
		originalName: e,
		specialization: r
	};
}
function _c(e) {
	let t = /^(?<base>.+?)\s*\((?<specialization>[^)]+)\)\s*$/.exec(e.trim());
	if (!t?.groups) return null;
	let n = t.groups.base?.trim() ?? "", r = t.groups.specialization?.trim() ?? "", i = xc(r);
	return !n || !r || !bc(r, i) ? null : {
		baseName: n,
		options: i,
		originalName: e,
		specialization: r
	};
}
function vc(e, t) {
	let n = /* @__PURE__ */ new Map();
	return t.map((t) => {
		let r = yc(t), i = n.get(r) ?? 0;
		return n.set(r, i + 1), {
			occurrence: i,
			originalName: t,
			resolutionKey: mc(e, t, i)
		};
	});
}
function yc(e) {
	return e.trim().replaceAll(/\s+/g, " ").toLocaleLowerCase();
}
function bc(e, t) {
	return e.trim().toLocaleLowerCase() === "any" || t.length > 1;
}
function xc(e) {
	return e.split(/\s+or\s+/i).map((e) => e.trim()).filter(Boolean);
}
//#endregion
//#region src/state/npc-builder-store/advancements/source-counts.ts
function Sc(e, t) {
	return t <= 0 ? [] : [{
		count: t,
		kind: "career",
		label: `${e} extra time`
	}];
}
function Cc(e, t) {
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
function wc(e, t, n, r) {
	let i = Ec(Tc(e, r), n);
	return i.value === null ? t : Math.min(t, Math.max(0, i.value - e.baseAdvances));
}
function Tc(e, t) {
	let n = t[uc(e.name)];
	return {
		maximumFormula: e.talentMaximumFormula ?? n?.maximumFormula ?? "",
		maximumKey: e.talentMaximumKey ?? n?.maximumKey ?? ""
	};
}
function Ec(e, t) {
	let n = e.maximumKey.trim().toLocaleLowerCase();
	if (!n) return {
		label: "Unknown",
		value: null
	};
	if (n === "none") return {
		label: "-",
		value: null
	};
	if (n === "custom") return Dc(e.maximumFormula, t);
	let r = Number(n);
	if (Number.isFinite(r)) {
		let e = Math.max(0, Math.floor(r));
		return {
			label: `${e}`,
			value: e
		};
	}
	if (nc(n)) {
		let e = t[n] ?? 0, r = Math.max(0, Math.floor(e / 10));
		return {
			label: `${ec[n]} Bonus (${r})`,
			value: r
		};
	}
	return {
		label: e.maximumKey || "Unknown",
		value: null
	};
}
function Dc(e, t) {
	let n = e.trim(), r = Number(n);
	if (Number.isFinite(r)) {
		let e = Math.max(0, Math.floor(r));
		return {
			label: `${e}`,
			value: e
		};
	}
	let i = /@characteristics\.([a-z]+)\.bonus/i.exec(n)?.[1]?.toLocaleLowerCase();
	if (i && nc(i)) {
		let e = t[i] ?? 0, n = Math.max(0, Math.floor(e / 10));
		return {
			label: `${ec[i]} Bonus (${n})`,
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
function Oc(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e.careers) {
		let i = pc(jc(r, t, e.skillGrantResolutions)), a = ac(r) / 5, o = Math.max(0, dc(r.quantity) - 1) * 5;
		for (let e of i) {
			let i = ic(t, e), s = n.get(i);
			if (s) {
				a > s.highestLevel && (s.highestLevel = a, s.highestLevelSource = oc(r)), o > 0 && s.extraSources.push({
					count: o,
					kind: "career",
					label: `${r.name} extra time`
				});
				continue;
			}
			n.set(i, {
				extraSources: Sc(r.name, o),
				highestLevel: a,
				highestLevelSource: oc(r),
				name: e
			});
		}
	}
	for (let r of n.values()) Ac(e, {
		careerValue: r.highestLevel * 5 + fc(r.extraSources),
		kind: t,
		name: r.name,
		sources: [{
			count: r.highestLevel * 5,
			kind: "career",
			label: r.highestLevelSource
		}, ...r.extraSources]
	});
}
function kc(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.careers) {
		let r = pc(jc(n, "talent", e.skillGrantResolutions)), i = Math.max(0, dc(n.quantity) - 1);
		for (let e of r) {
			let r = ic("talent", e), a = t.get(r);
			if (a) {
				i > 0 && a.extraSources.push({
					count: i,
					kind: "career",
					label: `${n.name} extra time`
				});
				continue;
			}
			t.set(r, {
				extraSources: Sc(n.name, i),
				firstSource: n.name,
				name: e
			});
		}
	}
	for (let n of t.values()) Ac(e, {
		careerValue: 1 + fc(n.extraSources),
		kind: "talent",
		name: n.name,
		sources: [{
			count: 1,
			kind: "career",
			label: n.firstSource
		}, ...n.extraSources]
	}, e.characteristicTotals);
}
function Ac(e, t, n = {}) {
	let r = ic(t.kind, t.name), i = e.entries.get(r);
	if (i) {
		let r = t.kind === "talent" && i.includedFromBase ? t.sources.slice(1) : t.sources, a = t.kind === "talent" ? wc(i, fc(r), n, e.talentMaximums) : t.careerValue;
		i.careerValue = a, i.includedFromCareer = !0, i.sources = [...i.sources.filter((e) => e.kind === "base"), ...Cc(r, a)];
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
	t.kind === "talent" && (a.careerValue = wc(a, t.careerValue, n, e.talentMaximums), a.current = a.careerValue, a.sources = Cc(t.sources, a.careerValue)), e.entries.set(r, { ...a });
}
function jc(e, t, n) {
	return t === "characteristic" ? e.grants.characteristics : t === "skill" ? vc(e.uuid, e.grants.skills).map((e) => n[e.resolutionKey] || e.originalName) : e.grants.talents;
}
//#endregion
//#region src/state/npc-builder-store/advancements/entry-context.ts
function Mc(e, t) {
	let n = {};
	for (let r of e.values()) {
		if (r.kind !== "characteristic") continue;
		let e = tc[uc(r.name)];
		if (!e) continue;
		let i = t[ic(r.kind, r.name)] ?? 0, a = Math.max(r.minimumCurrent, Math.floor(r.careerValue + i));
		n[e] = Math.max(0, r.baseValue + a);
	}
	return n;
}
function Nc(e, t, n) {
	return e.kind === "skill" ? Pc(e, t, n) : e.kind === "talent" ? Fc(e, t, n) : e;
}
function Pc(e, t, n) {
	let r = Ic(e.name, n.skillCharacteristics) ?? Lc(e.name, n.baseActorDraftData);
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
function Fc(e, t, n) {
	let r = Tc(e, n.talentMaximums), i = Ec(r, t);
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
function Ic(e, t) {
	return t[uc(e)] ?? null;
}
function Lc(e, t) {
	let n = t.advancements.find((t) => t.kind === "skill" && lc(t.name, e));
	return n?.characteristicKey ? {
		characteristicKey: n.characteristicKey,
		characteristicName: n.characteristicName ?? ec[n.characteristicKey],
		skillName: e
	} : null;
}
//#endregion
//#region src/state/npc-builder-store/advancements/index.ts
function Rc(e) {
	let { baseActorDraftData: t, careers: n, manualAdvancementDeltas: r, settings: i, skillCharacteristics: a, skillGrantResolutions: o, talentMaximums: s } = e, c = J(() => {
		let e = u(), c = {
			careers: n.value,
			entries: e,
			skillGrantResolutions: o.value,
			talentMaximums: s.value
		};
		Oc(c, "characteristic"), Oc(c, "skill");
		let l = Mc(e, r.value);
		return kc({
			...c,
			characteristicTotals: l
		}), [...e.values()].filter((e) => e.includedFromCareer || sc(e.kind, i.value)).map((e) => {
			let n = Nc(e, l, {
				baseActorDraftData: t.value,
				manualAdvancementDeltas: r.value,
				skillCharacteristics: a.value,
				talentMaximums: s.value
			}), i = ic(e.kind, e.name), o = r.value[i] ?? 0, c = n.careerValue + o;
			return {
				...n,
				current: Math.max(n.minimumCurrent, Math.floor(c))
			};
		}).sort((e, t) => e.kind === t.kind ? e.name.localeCompare(t.name) : e.kind.localeCompare(t.kind));
	}), l = J(() => Ys(c.value));
	function u() {
		let e = /* @__PURE__ */ new Map();
		for (let n of t.value.advancements) {
			let t = ic(n.kind, n.name), r = {
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
			n.characteristicKey && (r.characteristicKey = n.characteristicKey, r.characteristicName = n.characteristicName ?? ec[n.characteristicKey]), n.kind === "talent" && n.baseAdvances > 0 && r.sources.push({
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
			...Object.fromEntries(e.map((e) => [uc(e.skillName), e]))
		};
	}
	function p(e) {
		s.value = {
			...s.value,
			...Object.fromEntries(e.map((e) => [uc(e.talentName), e]))
		};
	}
	function m(e, t) {
		let n = ic(e.kind, e.name), i = Number.isFinite(t) ? t : 0;
		r.value[n] = Math.max(e.minimumCurrent, Math.floor(i)) - e.careerValue;
	}
	function h(e, t) {
		let n = Number.isFinite(t) ? t : 0;
		m(e, Math.max(e.minimumTotal, Math.floor(n)) - e.baseValue);
	}
	function g(e) {
		let t = ic(e.kind, e.name);
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
function zc(e) {
	let { actorName: t, baseActors: n, careers: r, clearBaseDraftData: i, customSpells: a, customTraits: o, customTrappings: s, detectedSpells: c, ignoredBaseTraitKeys: l, magicLoreResolutions: u, removeSkillGrantResolutionsForCareer: d, selectedBaseActorUuid: f, selectedPortraitPath: p, settings: m, skillGrantResolutions: h, spellSelectionOverrides: g } = e, _ = J(() => n.value.find((e) => e.uuid === f.value) ?? null), v = J(() => r.value.at(-1) ?? null), y = J(() => {
		let e = v.value?.name, t = m.value.includeSpeciesInName && _.value?.species ? _.value.species : "";
		return e && t ? `${t} ${e}` : e || (_.value ? `${_.value.name} NPC` : "New NPC");
	}), b = J(() => t.value.trim() || y.value), x = J(() => v.value?.img || _.value?.prototypeTokenImg || _.value?.img || ""), S = J(() => p.value || x.value), C = J(() => {
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
			t.quantity = dc(t.quantity + 1);
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
	function k(e) {
		n.value.some((t) => t.uuid === e.uuid) || n.value.push(e), te(e.uuid);
	}
	function te(e) {
		let t = e.trim();
		f.value !== t && (p.value = ""), f.value = t;
	}
	function ne(e) {
		p.value = e;
	}
	function re(e, t) {
		let n = r.value[e];
		n && (n.quantity = dc(t));
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
		selectBaseActor: k,
		selectBaseActorUuid: te,
		selectedBaseActor: _,
		selectPortrait: ne,
		setCareerQuantity: re,
		suggestedActorName: y
	};
}
//#endregion
//#region src/functions/npc-builder/default-npc-builder-settings.ts
function Bc() {
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
var Vc = Bc(), Hc = {
	advancements: [],
	optionalTraits: [],
	traits: [],
	trappings: []
};
function Uc(e) {
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
		lowerCareerMode: Wc(e.lowerCareerMode) ? e.lowerCareerMode : "prompt",
		outputActorFolderUuid: typeof e.outputActorFolderUuid == "string" ? e.outputActorFolderUuid : "",
		quickTraitFolderUuid: typeof e.quickTraitFolderUuid == "string" ? e.quickTraitFolderUuid : "",
		searchCompendiumPortraitAssets: e.searchCompendiumPortraitAssets ?? !0,
		searchFoundryPortraitAssets: e.searchFoundryPortraitAssets ?? !1,
		searchWebPortraitAssets: e.searchWebPortraitAssets ?? !1
	};
}
function Wc(e) {
	return e === "auto-add-all" || e === "never" || e === "prompt";
}
//#endregion
//#region src/state/npc-builder-store/hydration.ts
function Gc(e) {
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
		l.value = Uc(e);
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
var Kc = /\(([^)]+)\)/, qc = [
	"beasts",
	"death",
	"fire",
	"heavens",
	"metal",
	"life",
	"light",
	"shadow"
], Jc = [
	"daemonology",
	"necromancy",
	"nurgle",
	"slaanesh",
	"tzeentch",
	"undivided"
];
function Yc(e, t) {
	let n = e.trim(), r = n.toLocaleLowerCase();
	return r === "petty magic" ? nl({
		kind: "petty-magic",
		rawLore: "Petty Magic",
		source: t,
		sourceName: n
	}) : r.startsWith("arcane magic") ? nl({
		kind: "arcane-magic",
		rawLore: rl(n),
		source: t,
		sourceName: n
	}) : r.startsWith("spellcaster") ? nl({
		kind: "spellcaster",
		rawLore: rl(n),
		source: t,
		sourceName: n
	}) : null;
}
function Xc(e) {
	return e.trim().replace(/^any\s+/i, "").replace(/^arcane\s+lore\s+of\s+/i, "").replace(/^arcane\s+lore$/i, "").replace(/^lore\s+of\s+/i, "").replaceAll(/\s+/g, " ").toLocaleLowerCase();
}
function Zc(e) {
	return `${e.source}:${e.kind}:${e.sourceName}:${e.rawLore}`;
}
function Qc(e, t) {
	return {
		...e,
		isAmbiguous: !1,
		normalizedLore: Xc(t),
		rawLore: t.trim()
	};
}
function $c(e) {
	let t = Xc(e);
	return t === "petty" ? "petty" : qc.includes(t) ? "eight-wind" : Jc.includes(t) ? "dark" : "other";
}
function el(e, t) {
	if (e.kind === "petty-magic") return t.filter((e) => e.category === "petty");
	let n = e.rawLore.trim().toLocaleLowerCase();
	return n.includes("dark") ? t.filter((e) => e.category === "dark") : n.includes("eight winds") ? t.filter((e) => e.category === "eight-wind") : t.filter((e) => e.category !== "petty");
}
function tl(e) {
	let t = e.trim().toLocaleLowerCase();
	return !t || t === "any" || t.includes("any ");
}
function nl(e) {
	let t = e.rawLore.trim();
	return {
		isAmbiguous: tl(t),
		kind: e.kind,
		normalizedLore: Xc(t),
		rawLore: t,
		resolutionKey: Zc({
			kind: e.kind,
			rawLore: t,
			source: e.source,
			sourceName: e.sourceName
		}),
		source: e.source,
		sourceName: e.sourceName
	};
}
function rl(e) {
	return Kc.exec(e)?.[1]?.trim() ?? "";
}
//#endregion
//#region src/state/npc-builder-store/spells.ts
function il(e) {
	let { advancements: t, customSpells: n, detectedSpells: r, magicLoreResolutions: i, settings: a, spellSelectionOverrides: o, traits: s } = e, c = J(() => {
		let e = /* @__PURE__ */ new Map();
		for (let n of t.value) {
			if (n.kind !== "talent" || n.baseAdvances + n.current <= 0) continue;
			let t = Yc(n.name, "talent");
			t && e.set(t.resolutionKey, v(t));
		}
		for (let t of s.value) {
			let n = Yc(t.name, "trait");
			n && e.set(n.resolutionKey, v(n));
		}
		return [...e.values()];
	}), l = J(() => c.value.length > 0), u = J(() => {
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
	}), d = J(() => u.value.filter((e) => e.selected));
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
		return e.sourceUuid && e.sourceUuid === t.sourceUuid ? !0 : lc(e.name, t.name);
	}
	function v(e) {
		let t = i.value[e.resolutionKey];
		return t ? Qc(e, t) : e;
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
function al(e) {
	let { baseActorDraftData: t, customTraits: n, ignoredBaseTraitKeys: r, quickTraits: i, settings: a, traitConfigOverrides: o } = e, s = J(() => {
		let e = /* @__PURE__ */ new Map();
		if (a.value.allowBaseActorTraits) for (let n of t.value.traits) {
			let t = ol(n);
			r.value[t] || e.set(t, {
				config: n.config,
				ignored: !1,
				key: t,
				name: n.name,
				source: "base",
				sourceUuid: n.uuid
			});
		}
		for (let t of n.value) sl(e, t.name) || e.set(t.key, { ...t });
		return [...e.values()].map((e) => ({
			...e,
			config: cc(e.config, o.value[e.key])
		})).sort((e, t) => e.source === t.source ? e.name.localeCompare(t.name) : e.source.localeCompare(t.source));
	}), c = J(() => {
		if (!a.value.allowBaseActorTraits) return s.value;
		let e = [];
		for (let n of t.value.traits) {
			let t = ol(n);
			r.value[t] && e.push({
				config: cc(n.config, o.value[t]),
				ignored: !0,
				key: t,
				name: n.name,
				source: "base",
				sourceUuid: n.uuid
			});
		}
		return [...e, ...s.value];
	}), l = J(() => [...t.value.optionalTraits].map((e) => ({
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
		let i = `${e}:${t.uuid || uc(t.name)}`;
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
		s.value.some((t) => lc(t.name, e.name)) || n.value.some((t) => t.key === e.key) || n.value.push(e);
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
		return l.value.find((t) => lc(t.name, e));
	}
	function y(e) {
		return i.value.find((t) => lc(t.name, e));
	}
	function b(e) {
		let n = t.value.traits.find((t) => lc(t.name, e));
		if (!n) return null;
		let i = ol(n);
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
function ol(e) {
	return `base:${e.uuid || uc(e.name)}`;
}
function sl(e, t) {
	return [...e.values()].some((e) => lc(e.name, t));
}
//#endregion
//#region src/functions/npc-builder/trapping-resolution.ts
function cl(e, t = "trapping") {
	return {
		candidates: [],
		searchTerms: fl(e),
		selectedCandidateUuid: "",
		selectedItemType: t,
		selectedName: e.trim(),
		status: "fallback"
	};
}
function ll(e) {
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
function ul(e) {
	return {
		candidates: [],
		searchTerms: fl(e),
		selectedCandidateUuid: "",
		selectedItemType: "trapping",
		selectedName: e.trim(),
		status: "unresolved"
	};
}
function dl(e, t) {
	let n = fl(e), r = ml(n, t), i = r.filter((e) => e.matchKind === "exact");
	return i.length === 1 ? gl("matched", n, i[0]) : i.length > 1 ? gl("ambiguous", n, i[0], { candidates: r }) : r.length ? {
		candidates: r,
		searchTerms: n,
		selectedCandidateUuid: "",
		selectedItemType: "trapping",
		selectedName: e.trim(),
		status: "ambiguous"
	} : cl(e);
}
function fl(e) {
	let t = e.split(/\s+or\s+/i).map((e) => e.trim()).filter(Boolean);
	return t.length ? bl(t) : [e.trim()].filter(Boolean);
}
function pl(e, t) {
	if (_l(e) === _l(t)) return "exact";
	let n = vl(e), r = vl(t);
	if (!n || !r) return null;
	if (n === r || n.includes(r) || r.includes(n)) return "near";
	let i = n.split(" "), a = new Set(r.split(" "));
	return i.every((e) => a.has(e)) ? "near" : null;
}
function ml(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) for (let e of t) {
		let t = pl(r, e.name);
		t && n.get(e.uuid)?.matchKind !== "exact" && n.set(e.uuid, {
			itemType: e.itemType,
			matchKind: t,
			name: e.name,
			searchTerm: r,
			sourceLabel: e.sourceLabel,
			uuid: e.uuid
		});
	}
	return [...n.values()].sort(hl);
}
function hl(e, t) {
	return e.matchKind === t.matchKind ? e.name.localeCompare(t.name) : e.matchKind === "exact" ? -1 : 1;
}
function gl(e, t, n, r = {}) {
	return {
		candidates: r.candidates ?? (n ? [n] : []),
		searchTerms: t,
		selectedCandidateUuid: n?.uuid ?? "",
		selectedItemType: n?.itemType ?? "trapping",
		selectedName: n?.name ?? "",
		status: e
	};
}
function _l(e) {
	return e.trim().toLocaleLowerCase().replaceAll(/\s+/g, " ");
}
function vl(e) {
	return _l(e).replaceAll("&", " and ").replaceAll(/[(),.:;[\]]/g, " ").replaceAll(/\b(a|an|the|some|pair of|pairs of)\b/g, " ").split(/\s+/).map(yl).filter(Boolean).join(" ");
}
function yl(e) {
	return e.endsWith("ies") && e.length > 4 ? `${e.slice(0, -3)}y` : e.endsWith("s") && !e.endsWith("ss") && e.length > 3 ? e.slice(0, -1) : e;
}
function bl(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/state/npc-builder-store/trappings.ts
function xl(e) {
	let { baseActorDraftData: t, careers: n, customTrappings: r, settings: i, trappingOverrides: a, trappingResolutionOverrides: o } = e, s = J(() => {
		let e = /* @__PURE__ */ new Map();
		if (i.value.allowBaseActorTrappings) for (let n of t.value.trappings) {
			let t = `base:${n.uuid || uc(n.name)}`;
			e.set(t, {
				ignored: !1,
				itemType: n.itemType,
				key: t,
				name: n.name,
				quantity: n.quantity,
				resolution: ll({
					itemType: n.itemType,
					name: n.name,
					uuid: n.uuid
				}),
				source: "base",
				sourceUuid: n.uuid
			});
		}
		for (let t of n.value) for (let n of t.grants.trappings) {
			let r = `career:${uc(n)}`, i = e.get(r);
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
				resolution: o.value[r] ?? ul(n),
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
				quantity: dc(t?.quantity ?? e.quantity),
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
			quantity: dc(t)
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
		let n = cl(t.name, t.itemType);
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
var Sl = Ks("npc-builder", () => {
	let e = /* @__PURE__ */ L(""), t = /* @__PURE__ */ L([]), n = /* @__PURE__ */ L({}), r = /* @__PURE__ */ L({ ...Hc }), i = /* @__PURE__ */ L([]), a = /* @__PURE__ */ L([]), o = /* @__PURE__ */ L([]), s = /* @__PURE__ */ L([]), c = /* @__PURE__ */ L([]), l = /* @__PURE__ */ L([]), u = /* @__PURE__ */ L(""), d = /* @__PURE__ */ L({ ...Vc }), f = /* @__PURE__ */ L(""), p = /* @__PURE__ */ L({}), m = /* @__PURE__ */ L({}), h = /* @__PURE__ */ L({}), g = /* @__PURE__ */ L([]), _ = /* @__PURE__ */ L([]), v = /* @__PURE__ */ L({}), y = /* @__PURE__ */ L({}), b = /* @__PURE__ */ L({}), x = /* @__PURE__ */ L({}), S = /* @__PURE__ */ L({}), C = /* @__PURE__ */ L({}), w = Rc({
		baseActorDraftData: r,
		careers: a,
		manualAdvancementDeltas: n,
		settings: d,
		skillCharacteristics: p,
		skillGrantResolutions: h,
		talentMaximums: m
	}), T = Gc({
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
	}), E = zc({
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
	}), D = al({
		baseActorDraftData: r,
		customTraits: o,
		ignoredBaseTraitKeys: v,
		quickTraits: l,
		settings: d,
		traitConfigOverrides: x
	}), O = xl({
		baseActorDraftData: r,
		careers: a,
		customTrappings: s,
		settings: d,
		trappingOverrides: S,
		trappingResolutionOverrides: C
	}), ee = il({
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
}), Cl = { class: "sub-view__header" }, wl = /* @__PURE__ */ B({
	__name: "SubView",
	props: {
		open: { type: Boolean },
		title: {}
	},
	emits: ["close"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ L(null), a = /* @__PURE__ */ L(null), o = null, s = 0;
		Wn(() => n.open, async (e) => {
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
		return (t, n) => (U(), oa(no, { name: "sub-view" }, {
			default: In(() => [e.open ? (U(), W("section", {
				key: 0,
				ref_key: "rootElement",
				ref: a,
				class: "sub-view",
				role: "dialog",
				"aria-modal": "true"
			}, [G("div", Cl, [G("h2", null, M(e.title), 1), G("button", {
				type: "button",
				class: "sub-view__close",
				onClick: n[0] ||= (e) => r("close")
			}, "Close")]), G("div", {
				ref_key: "bodyElement",
				ref: i,
				class: "sub-view__body"
			}, [Fr(t.$slots, "default", {}, void 0, !0)], 512)], 512)) : q("", !0)]),
			_: 3
		}));
	}
}), Tl = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, El = /* @__PURE__ */ Tl(wl, [["__scopeId", "data-v-2d7058cd"]]), Dl = { class: "npc-builder__subview-stack" }, Ol = [
	"checked",
	"disabled",
	"onChange"
], kl = { class: "npc-builder__subview-actions" }, Al = /* @__PURE__ */ B({
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
		return (t, r) => (U(), W("div", Dl, [
			G("p", null, M(e.prompt.droppedCareer.name) + " appears to belong to the " + M(e.prompt.droppedCareer.careerGroup) + " career track. The following lower-tier candidates were found. ", 1),
			(U(!0), W(H, null, V(e.candidateGroups, (t) => (U(), W("section", {
				key: t.level,
				class: "npc-builder__candidate-group"
			}, [G("h3", null, "Tier " + M(t.level || "Unknown"), 1), (U(!0), W(H, null, V(t.candidates, (t) => (U(), W("label", {
				key: t.uuid,
				class: j(["npc-builder__candidate-row", { "is-queued": e.isCareerQueued(t.uuid) }])
			}, [G("input", {
				checked: e.isCareerQueued(t.uuid) || e.isLowerCareerSelected(t.uuid),
				disabled: e.isCareerQueued(t.uuid),
				type: "checkbox",
				onChange: (e) => n("lowerCareerSelected", t, e)
			}, null, 40, Ol), G("span", null, [G("strong", null, M(t.name), 1), G("small", null, [ma(M(t.careerGroup || "Career") + " ", 1), e.isCareerQueued(t.uuid) ? (U(), W(H, { key: 0 }, [ma(" already queued ")], 64)) : q("", !0)])])], 2))), 128))]))), 128)),
			G("div", kl, [G("button", {
				type: "button",
				onClick: r[0] ||= (e) => n("addDroppedOnly")
			}, "Add Dropped Only"), G("button", {
				type: "button",
				onClick: r[1] ||= (e) => n("addSelected")
			}, "Add Selected")])
		]));
	}
}), jl = /* @__PURE__ */ new Map();
function Ml(e) {
	let t = e.id.trim();
	if (!t) throw Error("NPC auto-advance strategies must have an id.");
	jl.set(t, {
		...e,
		id: t
	});
}
function Nl() {
	return [...jl.values()].sort((e, t) => e.name.localeCompare(t.name));
}
function Pl(e) {
	return jl.get(e) ?? null;
}
function Fl(e, t) {
	return Rl(e, t, {
		kinds: ["skill"],
		respectTalentMaximums: !1
	});
}
function Il(e, t) {
	return Rl(Rl(e, t, {
		kinds: ["talent"],
		respectTalentMaximums: !0
	}), t, {
		kinds: ["skill"],
		respectTalentMaximums: !1
	});
}
function Ll(e, t) {
	return Rl(e, t, {
		kinds: ["characteristic"],
		respectTalentMaximums: !1
	});
}
function Rl(e, t, n) {
	let r = Math.max(0, Math.floor(Number.isFinite(t) ? t : 0)), i = Ul(e.advancements), a = Ys(i).total;
	if (a >= r) return { advancements: i };
	let o = !0;
	for (; o;) {
		o = !1;
		for (let e of i) {
			if (!n.kinds.includes(e.kind)) continue;
			let t = zl(e, n);
			if (!t) continue;
			let i = Xs(t) - Xs(e);
			i <= 0 || a + i > r || (e.current = t.current, a += i, o = !0);
		}
	}
	return { advancements: i };
}
function zl(e, t) {
	return t.respectTalentMaximums && e.kind === "talent" && !Bl(e) ? null : {
		...e,
		current: e.current + Hl(e.kind)
	};
}
function Bl(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" ? Vl(e) < t : !1;
}
function Vl(e) {
	return Math.max(e.minimumTotal, e.baseValue + e.current);
}
function Hl(e) {
	return e === "talent" ? 1 : 5;
}
function Ul(e) {
	return e.map((e) => ({
		...e,
		sources: e.sources.map((e) => ({ ...e }))
	}));
}
Ml({
	description: "Cycles visible Skill rows evenly until no next skill increase fits the target XP.",
	id: "skill-master",
	name: "Skill Master",
	run: Fl
}), Ml({
	description: "Raises visible Talent rows evenly up to known maximums, then spends any remaining XP like Skill Master.",
	id: "gifted-and-talented",
	name: "Gifted & Talented",
	run: Il
}), Ml({
	description: "Cycles visible Characteristic rows evenly until no next characteristic increase fits the target XP.",
	id: "all-natural",
	name: "All Natural",
	run: Ll
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderAdvancementsTab/advancement-display.ts
function Wl(e) {
	let t = e.current - e.careerValue, n = [...e.sources].sort((e, t) => $l(e.kind) - $l(t.kind)).map((e) => `${e.label} ${eu(e.count)}`);
	return t !== 0 && n.push(`Manual ${eu(t)}`), n.length ? n.join(", ") : e.includedFromBase ? "Base actor" : "-";
}
function Gl(e) {
	return _c(e) !== null;
}
function Kl(e) {
	return e.kind === "talent" ? 1 : 5;
}
function ql(e) {
	return Math.max(e.minimumTotal, e.baseValue + e.current);
}
function Jl(e) {
	return ql(e);
}
function Yl(e) {
	return e.talentMaximumLabel ?? "Unknown";
}
function Xl(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" && Jl(e) > t;
}
function Zl(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" && Jl(e) < t;
}
function Ql(e) {
	return Xs(e);
}
function $l(e) {
	return e === "characteristic" ? 0 : e === "career" ? 1 : 2;
}
function eu(e) {
	return e > 0 ? `+${e}` : `${e}`;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderAdvancementsTab/AdvancementRowsPanel.vue?vue&type=script&setup=true&lang.ts
var tu = { class: "npc-builder__panel" }, nu = { class: "npc-builder__panel-heading" }, ru = {
	key: 0,
	class: "npc-builder__panel-actions"
}, iu = {
	key: 1,
	class: "npc-builder__xp-summary"
}, au = { class: "npc-builder__table" }, ou = {
	key: 0,
	class: "npc-builder__badge"
}, su = { class: "npc-builder__advance-controls" }, cu = ["disabled", "onClick"], lu = [
	"aria-label",
	"value",
	"onInput"
], uu = ["onClick"], du = ["disabled", "onClick"], fu = /* @__PURE__ */ B({
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
		return (t, i) => (U(), W("section", tu, [
			G("div", nu, [G("span", null, M(e.sectionNumber), 1), G("h2", null, M(e.title), 1)]),
			e.manualAdvanceCount ? (U(), W("div", ru, [G("span", null, M(e.manualAdvanceCount) + " manual edits", 1), G("button", {
				type: "button",
				onClick: i[0] ||= (e) => n("resetAll")
			}, "Reset All Advances")])) : q("", !0),
			e.estimatedNpcXp ? (U(), W("div", iu, [
				G("strong", null, "Estimated NPC XP " + M(e.estimatedNpcXp.total), 1),
				G("span", null, M(e.estimatedNpcXp.characteristics) + " characteristics", 1),
				G("span", null, M(e.estimatedNpcXp.skills) + " skills", 1),
				G("span", null, M(e.estimatedNpcXp.talents) + " talents", 1)
			])) : q("", !0),
			G("div", au, [i[1] ||= G("div", { class: "npc-builder__table-head" }, [
				G("span", null, "Name"),
				G("span", null, "Base"),
				G("span", null, "Advances"),
				G("span", null, "Total"),
				G("span", null, "XP"),
				G("span", null, "Sources")
			], -1), (U(!0), W(H, null, V(e.entries, (t) => (U(), W("div", {
				key: `${t.kind}:${t.name}`,
				class: j(["npc-builder__advance-row", { "is-edited": t.current !== t.careerValue }])
			}, [
				G("strong", null, [ma(M(t.name) + " ", 1), e.showSkillSpecializationBadges && R(Gl)(t.name) ? (U(), W("span", ou, " Needs specialization ")) : q("", !0)]),
				G("span", null, M(t.baseValue), 1),
				G("span", null, M(t.current), 1),
				G("div", su, [
					G("button", {
						disabled: R(ql)(t) <= t.minimumTotal,
						title: "Decrease by 5",
						type: "button",
						onClick: (e) => n("adjustCurrent", t, -1)
					}, " -5 ", 8, cu),
					G("input", {
						"aria-label": `Total ${t.name}`,
						value: R(ql)(t),
						min: "0",
						type: "number",
						onInput: (e) => r(t, e)
					}, null, 40, lu),
					G("button", {
						title: "Increase by 5",
						type: "button",
						onClick: (e) => n("adjustCurrent", t, 1)
					}, " +5 ", 8, uu),
					G("button", {
						disabled: t.current === t.careerValue,
						title: "Reset to career value",
						type: "button",
						onClick: (e) => n("resetCurrent", t)
					}, " Reset ", 8, du)
				]),
				G("span", null, M(R(Ql)(t)), 1),
				G("span", null, M(R(Wl)(t)), 1)
			], 2))), 128))])
		]));
	}
}), pu = { class: "npc-builder__panel" }, mu = { class: "npc-builder__auto-advance" }, hu = { class: "npc-builder__mini-field" }, gu = ["value"], _u = { class: "npc-builder__mini-field" }, vu = ["value"], yu = ["value"], bu = ["disabled"], xu = { key: 0 }, Su = /* @__PURE__ */ B({
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
		return (t, a) => (U(), W("section", pu, [a[3] ||= G("div", { class: "npc-builder__panel-heading" }, [G("span", null, "4"), G("h2", null, "Auto Advance")], -1), G("div", mu, [
			G("label", hu, [a[1] ||= G("span", null, "Target XP", -1), G("input", {
				value: e.targetXp,
				min: "0",
				type: "number",
				onInput: r
			}, null, 40, gu)]),
			G("label", _u, [a[2] ||= G("span", null, "Strategy", -1), G("select", {
				value: e.selectedAutoAdvanceStrategyId,
				onChange: i
			}, [(U(!0), W(H, null, V(e.autoAdvanceStrategies, (e) => (U(), W("option", {
				key: e.id,
				value: e.id
			}, M(e.name), 9, yu))), 128))], 40, vu)]),
			G("button", {
				disabled: !e.canRunAutoAdvance,
				title: "Advance rows as close to the target XP as possible without going over",
				type: "button",
				onClick: a[0] ||= (e) => n("runAutoAdvance")
			}, " Auto Advance ", 8, bu),
			e.selectedAutoAdvanceStrategy ? (U(), W("span", xu, M(e.selectedAutoAdvanceStrategy.description), 1)) : q("", !0)
		])]));
	}
}), Cu = { class: "npc-builder__panel" }, wu = { class: "npc-builder__panel-actions" }, Tu = ["disabled"], Eu = { class: "npc-builder__table" }, Du = { class: "npc-builder__advance-controls" }, Ou = ["disabled", "onClick"], ku = [
	"aria-label",
	"value",
	"onInput"
], Au = ["onClick"], ju = ["disabled", "onClick"], Mu = { class: "npc-builder__maximum-cell" }, Nu = {
	key: 0,
	class: "npc-builder__status-pill npc-builder__status-pill--warning"
}, Pu = /* @__PURE__ */ B({
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
		return (t, i) => (U(), W("section", Cu, [
			i[2] ||= G("div", { class: "npc-builder__panel-heading" }, [G("span", null, "3"), G("h2", null, "Talents")], -1),
			G("div", wu, [G("span", null, M(e.maximizableTalentCount) + " below maximum", 1), G("button", {
				disabled: e.maximizableTalentCount === 0,
				title: "Raise talents with known maximums to their maximum ranks",
				type: "button",
				onClick: i[0] ||= (e) => n("maximizeTalents")
			}, " Maximize Talents ", 8, Tu)]),
			G("div", Eu, [i[1] ||= G("div", { class: "npc-builder__table-head npc-builder__table-head--talents" }, [
				G("span", null, "Name"),
				G("span", null, "Ranks"),
				G("span", null, "Maximum"),
				G("span", null, "XP"),
				G("span", null, "Sources")
			], -1), (U(!0), W(H, null, V(e.talents, (e) => (U(), W("div", {
				key: `${e.kind}:${e.name}`,
				class: j(["npc-builder__advance-row npc-builder__advance-row--talent", {
					"is-edited": e.current !== e.careerValue,
					"is-over-maximum": R(Xl)(e)
				}])
			}, [
				G("strong", null, M(e.name), 1),
				G("div", Du, [
					G("button", {
						disabled: R(Jl)(e) <= e.minimumTotal,
						title: "Decrease by 1",
						type: "button",
						onClick: (t) => n("adjustCurrent", e, -1)
					}, " -1 ", 8, Ou),
					G("input", {
						"aria-label": `Ranks ${e.name}`,
						value: R(Jl)(e),
						min: "0",
						type: "number",
						onInput: (t) => r(e, t)
					}, null, 40, ku),
					G("button", {
						title: "Increase by 1",
						type: "button",
						onClick: (t) => n("adjustCurrent", e, 1)
					}, " +1 ", 8, Au),
					G("button", {
						disabled: e.current === e.careerValue,
						title: "Reset to career value",
						type: "button",
						onClick: (t) => n("resetCurrent", e)
					}, " Reset ", 8, ju)
				]),
				G("span", Mu, [ma(M(R(Yl)(e)) + " ", 1), R(Xl)(e) ? (U(), W("span", Nu, " Over max ")) : q("", !0)]),
				G("span", null, M(R(Ql)(e)), 1),
				G("span", null, M(R(Wl)(e)), 1)
			], 2))), 128))])
		]));
	}
}), Fu = { class: "npc-builder__stack" }, Iu = /* @__PURE__ */ B({
	__name: "NpcBuilderAdvancementsTab",
	setup(e) {
		let t = Sl(), { advancements: n, estimatedNpcXp: r } = qs(t), i = Nl(), a = /* @__PURE__ */ L("skill-master"), o = /* @__PURE__ */ L(0), s = J(() => n.value.filter((e) => e.kind === "characteristic")), c = J(() => n.value.filter((e) => e.kind === "skill")), l = J(() => n.value.filter((e) => e.kind === "talent")), u = J(() => l.value.filter((e) => Zl(e)).length), d = J(() => n.value.filter((e) => e.current !== e.careerValue).length), f = J(() => Pl(a.value) ?? i[0] ?? null), p = J(() => f.value !== null && o.value > r.value.total);
		Wn(() => r.value.total, (e) => {
			o.value < e && (o.value = e);
		}, { immediate: !0 });
		function m(e, n) {
			let r = ql(e) + n * Kl(e);
			t.setAdvancementTotal(e, r);
		}
		function h(e) {
			t.resetAdvancementCurrent(e);
		}
		function g() {
			for (let e of l.value) {
				let n = e.talentMaximumValue;
				typeof n == "number" && Jl(e) < n && t.setAdvancementTotal(e, n);
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
		return (e, n) => (U(), W("section", Fu, [
			K(fu, {
				entries: s.value,
				"estimated-npc-xp": R(r),
				"manual-advance-count": d.value,
				"section-number": "1",
				title: "Characteristics",
				onAdjustCurrent: m,
				onResetAll: R(t).resetAllAdvancementCurrents,
				onResetCurrent: h,
				onTotalChange: v
			}, null, 8, [
				"entries",
				"estimated-npc-xp",
				"manual-advance-count",
				"onResetAll"
			]),
			K(fu, {
				entries: c.value,
				"section-number": "2",
				"show-skill-specialization-badges": "",
				title: "Skills",
				onAdjustCurrent: m,
				onResetCurrent: h,
				onTotalChange: v
			}, null, 8, ["entries"]),
			K(Pu, {
				"maximizable-talent-count": u.value,
				talents: l.value,
				onAdjustCurrent: m,
				onMaximizeTalents: g,
				onResetCurrent: h,
				onTotalChange: v
			}, null, 8, ["maximizable-talent-count", "talents"]),
			K(Su, {
				"auto-advance-strategies": R(i),
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
//#region src/view/components/DocumentDrop/drop-payloads.ts
function Lu(e, t) {
	let n = e.trim();
	if (!n) return "";
	if (Uu(n)) return n;
	let r = Bu(n), i = Hu(r, t);
	return i ? Wu(r) ? JSON.stringify({
		type: i,
		uuid: r
	}) : JSON.stringify({
		id: r,
		type: i
	}) : "";
}
function Ru(e) {
	let t = e.closest("[data-uuid], [data-document-uuid], [data-entry-uuid], [data-document-id], [data-entry-id], [data-pack]");
	if (!t) return "";
	let n = t.dataset.uuid || t.dataset.documentUuid || t.dataset.entryUuid || "";
	if (n) return zu(n);
	let r = t.dataset.documentId || t.dataset.entryId || "", i = Vu(t);
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
function zu(e) {
	let t = Hu(e, "auto");
	return t ? JSON.stringify({
		type: t,
		uuid: e
	}) : "";
}
function Bu(e) {
	return /@UUID\[([^\]]+)]/.exec(e)?.[1]?.trim() ?? e;
}
function Vu(e) {
	let t = e.dataset.documentName || e.dataset.type || e.closest("[data-document-name]")?.dataset.documentName || "";
	return t === "Actor" || t === "Item" ? t : e.classList.contains("actor") ? "Actor" : e.classList.contains("item") ? "Item" : e.closest("#actors") ? "Actor" : e.closest("#items") ? "Item" : "";
}
function Hu(e, t) {
	return /^actor\./i.test(e) || /\.actors(\.|$)/i.test(e) ? "Actor" : /^item\./i.test(e) || /\.items(\.|$)/i.test(e) || t === "auto" ? "Item" : t;
}
function Uu(e) {
	if (!e.startsWith("{")) return !1;
	try {
		return typeof JSON.parse(e).type == "string";
	} catch {
		return !1;
	}
}
function Wu(e) {
	return /^(actor|item|compendium)\./i.test(e);
}
//#endregion
//#region src/view/components/DocumentDrop.vue?vue&type=script&setup=true&lang.ts
var Gu = ["onKeydown"], Ku = { key: 0 }, qu = { class: "document-drop__actions" }, Ju = /* @__PURE__ */ Tl(/* @__PURE__ */ B({
	__name: "DocumentDrop",
	props: {
		description: {},
		title: {},
		variant: {}
	},
	emits: ["dropData"],
	setup(e, { emit: t }) {
		let n = t, r = /* @__PURE__ */ L(!1), i = /* @__PURE__ */ L(!1), a = /* @__PURE__ */ L(!1), o = /* @__PURE__ */ L("auto"), s = /* @__PURE__ */ L("");
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
			let e = Lu(s.value, o.value);
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
			let r = Ru(t);
			r && (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), n("dropData", r), d());
		}
		return Or(() => {
			m();
		}), (t, n) => (U(), W("div", {
			class: j(["document-drop", {
				"document-drop--compact": e.variant === "compact",
				"is-hovering": r.value,
				"is-manual-open": i.value
			}]),
			role: "button",
			tabindex: "0",
			onClick: u,
			onDragenter: n[3] ||= as((e) => r.value = !0, ["prevent"]),
			onDragover: n[4] ||= as((e) => r.value = !0, ["prevent"]),
			onDragleave: c,
			onDrop: l,
			onKeydown: [ss(as(u, ["prevent"]), ["enter"]), ss(as(u, ["prevent"]), ["space"])]
		}, [
			G("strong", null, M(e.title), 1),
			e.description ? (U(), W("span", Ku, M(e.description), 1)) : q("", !0),
			Fr(t.$slots, "default", {}, void 0, !0),
			i.value ? (U(), W("form", {
				key: 1,
				class: "document-drop__manual",
				onClick: n[2] ||= as(() => {}, ["stop"]),
				onSubmit: as(f, ["prevent"])
			}, [
				G("label", null, [n[6] ||= G("span", null, "Document type", -1), Ln(G("select", { "onUpdate:modelValue": n[0] ||= (e) => o.value = e }, [...n[5] ||= [
					G("option", { value: "auto" }, "Auto", -1),
					G("option", { value: "Item" }, "Item", -1),
					G("option", { value: "Actor" }, "Actor", -1)
				]], 512), [[es, o.value]])]),
				G("label", null, [n[7] ||= G("span", null, "UUID or drop JSON", -1), Ln(G("input", {
					"onUpdate:modelValue": n[1] ||= (e) => s.value = e,
					placeholder: "Compendium.package.pack.id",
					type: "text"
				}, null, 512), [[$o, s.value]])]),
				G("div", qu, [
					n[8] ||= G("button", { type: "submit" }, "Use", -1),
					G("button", {
						type: "button",
						onClick: p
					}, M(a.value ? "Waiting..." : "Pick Next Click"), 1),
					G("button", {
						type: "button",
						onClick: d
					}, "Cancel")
				])
			], 32)) : q("", !0)
		], 42, Gu));
	}
}), [["__scopeId", "data-v-b6ae471e"]]);
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/labels.ts
function Yu(e) {
	return [
		`Ch ${e.grants.characteristics.length}`,
		`Sk ${e.grants.skills.length}`,
		`Ta ${e.grants.talents.length}`,
		`Tr ${e.grants.trappings.length}`
	].join(" / ");
}
function Xu(e) {
	let t = e.slice(0, 3).join(", "), n = e.length - 3;
	return e.length ? n > 0 ? `${t}, +${n}` : t : "-";
}
function Zu(e) {
	return e.split(/\s+/).map((e) => e.at(0)).filter(Boolean).slice(0, 2).join("").toLocaleUpperCase();
}
function Qu(e) {
	return `${e.label}\n${e.img}`;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/BaseActorPanel.vue?vue&type=script&setup=true&lang.ts
var $u = { class: "npc-builder__panel" }, ed = { class: "npc-builder__field-grid" }, td = { class: "npc-builder__field" }, nd = ["value"], rd = { class: "npc-builder__field" }, id = ["disabled", "value"], ad = { value: "" }, od = ["value"], sd = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, cd = {
	key: 1,
	class: "npc-builder__source"
}, ld = { class: "npc-builder__thumbnail" }, ud = ["src"], dd = { key: 1 }, fd = /* @__PURE__ */ B({
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
		return (t, a) => (U(), W("section", $u, [
			a[3] ||= G("div", { class: "npc-builder__panel-heading" }, [G("span", null, "1"), G("h2", null, "Base Actor")], -1),
			G("div", ed, [G("label", td, [a[1] ||= G("span", null, "Search world actors", -1), G("input", {
				value: e.actorFilter,
				placeholder: "Filter actors",
				type: "search",
				onInput: r
			}, null, 40, nd)]), G("label", rd, [a[2] ||= G("span", null, "Base statblock", -1), G("select", {
				disabled: e.isLoadingActors,
				value: e.selectedBaseActorUuid,
				onChange: i
			}, [G("option", ad, M(e.isLoadingActors ? "Loading actors..." : "Choose an actor"), 1), (U(!0), W(H, null, V(e.filteredActors, (e) => (U(), W("option", {
				key: e.uuid,
				value: e.uuid
			}, M(e.name), 9, od))), 128))], 40, id)])]),
			K(Ju, {
				class: "npc-builder__drop",
				description: "Use a world Actor as the starting statblock.",
				title: "Drop Actor",
				variant: "compact",
				onDropData: a[0] ||= (e) => n("actorDrop", e)
			}),
			e.errorMessage ? (U(), W("p", sd, M(e.errorMessage), 1)) : q("", !0),
			e.selectedBaseActor ? (U(), W("article", cd, [G("div", ld, [e.selectedBaseActor.img ? (U(), W("img", {
				key: 0,
				src: e.selectedBaseActor.img,
				alt: ""
			}, null, 8, ud)) : (U(), W("span", dd, M(R(Zu)(e.selectedBaseActor.name)), 1))]), G("div", null, [G("strong", null, M(e.selectedBaseActor.name), 1), G("span", null, [
				ma(M(e.selectedBaseActor.species || "Species not found") + " ", 1),
				e.selectedBaseActor.type ? (U(), W(H, { key: 0 }, [ma(" - " + M(e.selectedBaseActor.type), 1)], 64)) : q("", !0),
				e.isLoadingBaseDraft ? (U(), W(H, { key: 1 }, [ma("loading...")], 64)) : q("", !0)
			])])])) : q("", !0)
		]));
	}
}), pd = { class: "npc-builder__build-preview" }, md = { class: "npc-builder__build-preview-heading" }, hd = { class: "npc-builder__preview-grid" }, gd = { key: 0 }, _d = { key: 0 }, vd = { key: 1 }, yd = { class: "npc-builder__preview-grid-wide" }, bd = {
	key: 0,
	class: "npc-builder__warnings"
}, xd = { key: 1 }, Sd = /* @__PURE__ */ B({
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
		return (t, n) => (U(), W("section", pd, [
			G("div", md, [n[0] ||= G("h2", null, "Build Preview", -1), G("span", { class: j(["npc-builder__status-pill", { "npc-builder__status-pill--ready": e.buildPreviewStatus === "Ready" }]) }, M(e.buildPreviewStatus), 3)]),
			G("div", hd, [
				G("div", null, [
					n[1] ||= G("span", null, "Advances", -1),
					G("strong", null, M(e.advancementCount), 1),
					e.editedAdvanceCount ? (U(), W("small", gd, M(e.editedAdvanceCount) + " manually edited ", 1)) : q("", !0)
				]),
				G("div", null, [
					n[2] ||= G("span", null, "Trappings", -1),
					G("strong", null, M(e.visibleTrappingCount), 1),
					e.fallbackTrappingCount ? (U(), W("small", _d, M(e.fallbackTrappingCount) + " blank fallback ", 1)) : q("", !0),
					e.ignoredTrappingCount ? (U(), W("small", vd, M(e.ignoredTrappingCount) + " ignored ", 1)) : q("", !0)
				]),
				G("div", null, [n[3] ||= G("span", null, "Traits", -1), G("strong", null, M(e.traitCount), 1)]),
				G("div", null, [n[4] ||= G("span", null, "Spells", -1), G("strong", null, M(e.selectedSpellCount), 1)]),
				G("div", yd, [
					n[5] ||= G("span", null, "Estimated NPC XP", -1),
					G("strong", null, M(e.estimatedNpcXp.total), 1),
					G("small", null, M(e.estimatedNpcXp.characteristics) + " char / " + M(e.estimatedNpcXp.skills) + " skill / " + M(e.estimatedNpcXp.talents) + " talent ", 1)
				])
			]),
			e.buildPreviewWarnings.length ? (U(), W("ul", bd, [(U(!0), W(H, null, V(e.buildPreviewWarnings, (e) => (U(), W("li", { key: e }, M(e), 1))), 128))])) : (U(), W("p", xd, " The draft has a base Actor, queued Career data, resolved trappings, and a portrait ready to apply. "))
		]));
	}
}), Cd = /* @__PURE__ */ B({
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
		return (t, n) => (U(), W("dl", null, [
			G("div", null, [n[0] ||= G("dt", null, "Build name", -1), G("dd", null, M(e.finalActorName), 1)]),
			G("div", null, [n[1] ||= G("dt", null, "Base actor", -1), G("dd", null, M(e.baseActorName), 1)]),
			G("div", null, [n[2] ||= G("dt", null, "Final career", -1), G("dd", null, M(e.finalCareerName), 1)]),
			G("div", null, [n[3] ||= G("dt", null, "Career items", -1), G("dd", null, M(e.careerItemCount), 1)]),
			G("div", null, [n[4] ||= G("dt", null, "Apply", -1), G("dd", null, M(e.advancementCount) + " advance rows, " + M(e.visibleTrappingCount) + " trappings, " + M(e.traitCount) + " traits, " + M(e.selectedSpellCount) + " spells ", 1)]),
			G("div", null, [n[5] ||= G("dt", null, "Extracted grants", -1), G("dd", null, M(e.grantTotals.characteristics) + " characteristics, " + M(e.grantTotals.skills) + " skills, " + M(e.grantTotals.talents) + " talents, " + M(e.grantTotals.trappings) + " trappings ", 1)]),
			G("div", null, [n[6] ||= G("dt", null, "Estimated NPC XP", -1), G("dd", null, M(e.estimatedNpcXpTotal), 1)])
		]));
	}
}), wd = ["disabled"], Td = ["src"], Ed = { key: 1 }, Dd = { key: 2 }, Od = {
	key: 0,
	class: "npc-builder__portrait-path"
}, kd = { key: 0 }, Ad = ["title"], jd = {
	key: 1,
	class: "npc-builder__portrait-gallery"
}, Md = { key: 0 }, Nd = { key: 1 }, Pd = {
	key: 0,
	class: "npc-builder__portrait-progress"
}, Fd = ["value"], Id = { class: "npc-builder__portrait-strip" }, Ld = [
	"aria-label",
	"title",
	"onClick"
], Rd = ["src"], zd = /* @__PURE__ */ B({
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
		return (t, r) => (U(), W(H, null, [
			G("button", {
				class: "npc-builder__portrait",
				disabled: !e.portraitCandidates.length,
				title: "Open portrait gallery",
				type: "button",
				onClick: r[0] ||= (e) => n("openGallery")
			}, [e.finalPortraitPath ? (U(), W("img", {
				key: 0,
				src: e.finalPortraitPath,
				alt: ""
			}, null, 8, Td)) : e.finalCareer ? (U(), W("strong", Ed, M(R(Zu)(e.finalCareer.name)), 1)) : (U(), W("span", Dd, "No portrait selected"))], 8, wd),
			e.finalPortraitPath ? (U(), W("p", Od, [e.selectedPortraitCandidate ? (U(), W("strong", kd, M(e.selectedPortraitCandidate.label), 1)) : q("", !0), G("span", { title: e.finalPortraitPath }, M(e.finalPortraitPath), 9, Ad)])) : q("", !0),
			e.portraitCandidates.length || e.isLoadingPortraitCandidates ? (U(), W("section", jd, [
				G("div", null, [r[2] ||= G("h2", null, "Portrait", -1), e.isLoadingPortraitCandidates ? (U(), W("span", Md, "Finding assets...")) : (U(), W("span", Nd, M(e.portraitCandidates.length) + " options", 1))]),
				e.isLoadingPortraitCandidates && e.portraitSearchProgress ? (U(), W("div", Pd, [G("progress", {
					value: e.portraitSearchProgressValue,
					max: "100"
				}, null, 8, Fd), G("span", null, M(e.portraitSearchProgressLabel), 1)])) : q("", !0),
				G("div", Id, [(U(!0), W(H, null, V(e.compactPortraitCandidates, (t) => (U(), W("button", {
					key: t.key,
					"aria-label": R(Qu)(t),
					class: j({ "is-active": t.key === e.selectedPortraitCandidateKey }),
					title: R(Qu)(t),
					type: "button",
					onClick: (e) => n("selectPortrait", t)
				}, [G("img", {
					src: t.img,
					alt: ""
				}, null, 8, Rd)], 10, Ld))), 128)), e.hiddenPortraitCandidateCount > 0 ? (U(), W("button", {
					key: 0,
					class: "npc-builder__portrait-more",
					type: "button",
					onClick: r[1] ||= (e) => n("openGallery")
				}, " +" + M(e.hiddenPortraitCandidateCount), 1)) : q("", !0)])
			])) : q("", !0)
		], 64));
	}
}), Bd = {
	key: 0,
	class: "npc-builder__quick-traits"
}, Vd = ["onClick"], Hd = /* @__PURE__ */ B({
	__name: "TraitButtonGroup",
	props: {
		caption: {},
		title: {},
		traits: {}
	},
	emits: ["toggleTrait"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => e.traits.length ? (U(), W("section", Bd, [G("div", null, [G("h2", null, M(e.title), 1), G("span", null, M(e.caption), 1)]), (U(!0), W(H, null, V(e.traits, (e) => (U(), W("button", {
			key: e.uuid,
			class: j({ "is-active": e.isSelected }),
			type: "button",
			onClick: (t) => n("toggleTrait", e)
		}, M(e.name), 11, Vd))), 128))])) : q("", !0);
	}
}), Ud = { class: "npc-builder__summary" }, Wd = { class: "npc-builder__preview" }, Gd = { class: "npc-builder__field" }, Kd = ["placeholder", "value"], qd = /* @__PURE__ */ B({
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
		return (t, i) => (U(), W("aside", Ud, [G("section", Wd, [
			K(zd, {
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
			G("label", Gd, [i[4] ||= G("span", null, "NPC name", -1), G("input", {
				placeholder: e.suggestedActorName,
				value: e.actorName,
				type: "text",
				onInput: r
			}, null, 40, Kd)]),
			K(Hd, {
				caption: `${e.optionalTraitOptions.length} from base statblock`,
				traits: e.optionalTraitOptions,
				title: "Optional Traits",
				onToggleTrait: i[2] ||= (e) => n("toggleOptionalTrait", e)
			}, null, 8, ["caption", "traits"]),
			K(Hd, {
				caption: `${e.quickTraitOptions.length} configured`,
				traits: e.quickTraitOptions,
				title: "Quick Traits",
				onToggleTrait: i[3] ||= (e) => n("toggleQuickTrait", e)
			}, null, 8, ["caption", "traits"]),
			K(Sd, {
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
			K(Cd, {
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
}), Jd = { class: "npc-builder__panel" }, Yd = {
	key: 0,
	class: "npc-builder__careers"
}, Xd = [
	"onDragenter",
	"onDragover",
	"onDrop"
], Zd = ["onDragstart"], Qd = { class: "npc-builder__thumbnail" }, $d = ["src"], ef = { key: 1 }, tf = { class: "npc-builder__career-copy" }, nf = ["title"], rf = ["value", "onInput"], af = { class: "npc-builder__career-actions" }, of = ["disabled", "onClick"], sf = ["disabled", "onClick"], cf = ["onClick"], lf = {
	key: 1,
	class: "npc-builder__empty"
}, uf = /* @__PURE__ */ B({
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
		return (t, r) => (U(), W("section", Jd, [
			r[3] ||= G("div", { class: "npc-builder__panel-heading" }, [G("span", null, "2"), G("h2", null, "Career Queue")], -1),
			K(Ju, {
				class: "npc-builder__drop npc-builder__drop--career",
				description: "Drop in build order. Drag rows to reorder.",
				title: "Drop Career Items",
				variant: "compact",
				onDropData: r[0] ||= (e) => n("careerDrop", e)
			}),
			e.careers.length ? (U(), W("ol", Yd, [(U(!0), W(H, null, V(e.careers, (t, i) => (U(), W("li", {
				key: t.uuid,
				class: j({
					"is-dragging": e.draggedCareerIndex === i,
					"is-drop-target": e.dragOverCareerIndex === i
				}),
				onDragenter: as((e) => n("careerDragEnter", i), ["prevent"]),
				onDragover: (e) => n("careerDragOver", i, e),
				onDrop: (e) => n("careerDropOnRow", i, e)
			}, [
				G("span", {
					"aria-label": "Drag to reorder career",
					class: "npc-builder__drag-handle",
					draggable: "true",
					role: "button",
					tabindex: "0",
					title: "Drag to reorder",
					onDragend: r[1] ||= (e) => n("careerDragEnd"),
					onDragstart: (e) => n("careerDragStart", i, e)
				}, " Move ", 40, Zd),
				G("div", Qd, [t.img ? (U(), W("img", {
					key: 0,
					src: t.img,
					alt: ""
				}, null, 8, $d)) : (U(), W("span", ef, M(R(Zu)(t.name)), 1))]),
				G("div", tf, [
					G("strong", null, M(t.name), 1),
					G("span", null, [ma(M(t.careerGroup || "Career") + " ", 1), t.level === null ? q("", !0) : (U(), W(H, { key: 0 }, [ma(" level " + M(t.level), 1)], 64))]),
					G("small", {
						class: "npc-builder__career-counts",
						title: [
							`Characteristics: ${R(Xu)(t.grants.characteristics)}`,
							`Skills: ${R(Xu)(t.grants.skills)}`,
							`Talents: ${R(Xu)(t.grants.talents)}`,
							`Trappings: ${R(Xu)(t.grants.trappings)}`
						].join("\n")
					}, M(R(Yu)(t)), 9, nf)
				]),
				G("label", null, [r[2] ||= G("span", null, "Qty", -1), G("input", {
					value: t.quantity,
					min: "1",
					type: "number",
					onInput: (e) => n("careerQuantityInput", i, e)
				}, null, 40, rf)]),
				G("div", af, [
					G("button", {
						disabled: i === 0,
						title: "Move career earlier",
						type: "button",
						onClick: (e) => n("moveCareer", i, -1)
					}, " Up ", 8, of),
					G("button", {
						disabled: i === e.careers.length - 1,
						title: "Move career later",
						type: "button",
						onClick: (e) => n("moveCareer", i, 1)
					}, " Down ", 8, sf),
					G("button", {
						type: "button",
						onClick: (e) => n("removeCareer", i)
					}, "Remove", 8, cf)
				])
			], 42, Xd))), 128))])) : (U(), W("p", lf, "No careers queued yet."))
		]));
	}
}), df = { class: "npc-builder__portrait-gallery-view" }, ff = { class: "npc-builder__portrait-gallery-summary" }, pf = { key: 0 }, mf = { key: 1 }, hf = { class: "npc-builder__portrait-grid" }, gf = ["title", "onClick"], _f = { class: "npc-builder__portrait-grid-image" }, vf = ["src"], yf = /* @__PURE__ */ B({
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
		return (t, r) => (U(), oa(El, {
			open: e.open,
			title: "Portrait Gallery",
			onClose: r[0] ||= (e) => n("close")
		}, {
			default: In(() => [G("div", df, [G("div", ff, [G("strong", null, M(e.portraitCandidates.length) + " portrait options", 1), e.isLoadingPortraitCandidates ? (U(), W("span", pf, "Finding assets...")) : (U(), W("span", mf, "Click an image to use it for the generated NPC."))]), G("div", hf, [(U(!0), W(H, null, V(e.portraitCandidates, (t) => (U(), W("button", {
				key: t.key,
				class: j({ "is-active": t.key === e.selectedPortraitCandidateKey }),
				title: R(Qu)(t),
				type: "button",
				onClick: (e) => n("selectPortrait", t)
			}, [G("span", _f, [G("img", {
				src: t.img,
				alt: ""
			}, null, 8, vf)]), G("span", null, M(t.label), 1)], 10, gf))), 128))])])]),
			_: 1
		}, 8, ["open"]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/errors.ts
function bf(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not resolve that Actor drop.";
}
function xf(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish searching for portraits.";
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/useBaseActorSelection.ts
function Sf(e, t) {
	let n = Sl(), { baseActors: r, selectedBaseActorUuid: i } = qs(n), a = /* @__PURE__ */ L(""), o = J(() => {
		let e = a.value.trim().toLocaleLowerCase();
		return e ? r.value.filter((t) => t.name.toLocaleLowerCase().includes(e)) : r.value;
	}), s = J({
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
			t.value = bf(e);
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
function Cf() {
	let { advancements: e, careers: t, finalPortraitPath: n, selectedBaseActor: r, trappings: i } = qs(Sl()), a = J(() => {
		let e = 0;
		for (let n of t.value) e += n.quantity;
		return e;
	}), o = J(() => i.value.filter((e) => !e.ignored).length), s = J(() => e.value.filter((e) => e.current !== e.careerValue).length), c = J(() => i.value.filter((e) => !e.ignored && e.resolution.status === "fallback").length), l = J(() => i.value.filter((e) => e.ignored).length), u = J(() => e.value.filter((e) => e.kind === "skill" && _c(e.name) !== null).length), d = J(() => i.value.filter((e) => !e.ignored && e.resolution.status === "unresolved").length), f = J(() => {
		let e = [];
		return r.value || e.push("Choose a base Actor before building."), t.value.length || e.push("No Careers are queued."), u.value && e.push(`${u.value} skill rows still need a specialization.`), d.value && e.push(`${d.value} trappings have no item resolution yet.`), n.value || e.push("No portrait is selected."), e;
	});
	return {
		buildPreviewStatus: J(() => f.value.length ? "Review" : "Ready"),
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
function wf() {
	let e = Sl(), { optionalTraits: t, quickTraits: n, traits: r } = qs(e), i = J(() => new Set(r.value.map((e) => Tf(e.name)))), a = J(() => t.value.map(s)), o = J(() => {
		let e = new Set(t.value.map((e) => Tf(e.name)));
		return n.value.filter((t) => !e.has(Tf(t.name))).map(s);
	});
	function s(e) {
		return {
			...e,
			isSelected: i.value.has(Tf(e.name))
		};
	}
	function c(t) {
		let n = i.value.has(Tf(t.name));
		e.setQuickTraitSelected(t, !n);
	}
	function l(t) {
		let n = i.value.has(Tf(t.name));
		e.setOptionalTraitSelected(t, !n);
	}
	return {
		displayedQuickTraitOptions: o,
		optionalTraitOptions: a,
		toggleOptionalTrait: l,
		toggleQuickTrait: c
	};
}
function Tf(e) {
	return e.trim().toLocaleLowerCase();
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/useCareerQueue.ts
function Ef() {
	let e = Sl(), t = /* @__PURE__ */ L(null), n = /* @__PURE__ */ L(null);
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
var Df = new Set([
	"and",
	"any",
	"the",
	"with",
	"without",
	"of",
	"or",
	"npc"
]);
function Of(e) {
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
	}), Mf(t);
}
function kf(e, t) {
	let n = Nf(e);
	return n ? t.some((e) => Nf(e.img) === n) : !1;
}
function Af(e) {
	let t = [];
	for (let n of e.careers) t.push(n.name, n.careerGroup);
	return e.selectedBaseActor && t.push(e.selectedBaseActor.name, e.selectedBaseActor.species), If(t.flatMap((e) => Ff(e)).filter((e) => e.length >= 3 && !Df.has(e)));
}
function jf(e, t) {
	let n = Pf(e);
	return n ? t.some((e) => n.includes(e)) : !1;
}
function Mf(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.img.trim().toLocaleLowerCase();
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
function Nf(e) {
	return e.trim().toLocaleLowerCase();
}
function Pf(e) {
	return e.trim().toLocaleLowerCase().replaceAll(/[_-]/g, " ").replaceAll(/[(),.:;[\]]/g, " ").replaceAll(/\s+/g, " ");
}
function Ff(e) {
	let t = Pf(e);
	return [t, ...t.split(" ")].filter(Boolean);
}
function If(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/usePortraitCandidates.ts
function Lf(e, t) {
	let n = Sl(), { careers: r, finalPortraitPath: i, selectedBaseActor: a, selectedPortraitPath: o, settings: s } = qs(n), c = /* @__PURE__ */ L([]), l = /* @__PURE__ */ L(!1), u = /* @__PURE__ */ L(!1), d = /* @__PURE__ */ L(null), f = 0, p = J(() => Of({
		careers: r.value,
		selectedBaseActor: a.value
	})), m = J(() => Mf([...p.value, ...c.value])), h = J(() => m.value.slice(0, 10)), g = J(() => Math.max(0, m.value.length - h.value.length)), _ = J(() => m.value.find((e) => e.img === i.value)?.key ?? ""), v = J(() => m.value.find((e) => e.img === i.value) ?? null), y = J(() => {
		let e = d.value;
		return e ? e.maxDirectories <= 0 ? e.phase === "ready" ? 100 : 4 : Math.min(100, Math.round(e.directoriesVisited / e.maxDirectories * 100)) : 0;
	}), b = J(() => {
		let e = d.value;
		return e ? e.phase === "ready" ? `${e.candidatesFound} options found` : e.phase === "filesystem" ? e.maxDirectories <= 0 ? `${e.directoriesVisited} directories - ${e.currentLocation}` : `${e.directoriesVisited}/${e.maxDirectories} directories - ${e.currentLocation}` : e.currentLocation : "";
	});
	Wn(() => [
		a.value?.uuid ?? "",
		s.value.searchCompendiumPortraitAssets,
		s.value.searchFoundryPortraitAssets,
		r.value.map((e) => e.uuid).join("|")
	], () => {
		C();
	}, { immediate: !0 }), Wn([
		m,
		o,
		u
	], () => {
		o.value && !u.value && !kf(o.value, m.value) && n.selectPortrait("");
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
			f === n && (t.value = xf(e));
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
var Rf = { class: "npc-builder__layout" }, zf = { class: "npc-builder__column" }, Bf = /* @__PURE__ */ B({
	__name: "NpcBuilderBuildTab",
	props: {
		bridge: {},
		isLoadingActors: { type: Boolean },
		isLoadingBaseDraft: { type: Boolean }
	},
	emits: ["careerDrop"],
	setup(e, { emit: t }) {
		let n = e, r = t, { actorName: i, advancements: a, careers: o, estimatedNpcXp: s, finalActorName: c, finalCareer: l, finalPortraitPath: u, grantTotals: d, selectedBaseActor: f, selectedSpells: p, suggestedActorName: m, traits: h } = qs(Sl()), g = /* @__PURE__ */ L(""), { actorFilter: _, filteredActors: v, handleActorDrop: y, selectedBaseActorSelectValue: b } = Sf(n.bridge, g), { clearCareerDragState: x, draggedCareerIndex: S, dragOverCareerIndex: C, handleCareerDragOver: w, handleCareerDragStart: T, handleCareerDrop: E, moveCareer: D, removeCareer: O, setCareerQuantity: ee, setDragOverCareerIndex: k } = Ef(), { displayedQuickTraitOptions: te, optionalTraitOptions: ne, toggleOptionalTrait: re, toggleQuickTrait: ie } = wf(), { buildPreviewStatus: A, buildPreviewWarnings: ae, careerItemCount: oe, editedAdvanceCount: se, fallbackTrappingCount: ce, ignoredTrappingCount: le, visibleTrappingCount: ue } = Cf(), { compactPortraitCandidates: de, hiddenPortraitCandidateCount: fe, isLoadingPortraitCandidates: pe, isPortraitGalleryOpen: me, portraitCandidates: he, portraitSearchProgress: j, portraitSearchProgressLabel: ge, portraitSearchProgressValue: _e, selectedPortraitCandidate: ve, selectedPortraitCandidateKey: ye, selectPortrait: be, selectPortraitFromGallery: xe } = Lf(n.bridge, g);
		return (t, n) => (U(), W("section", Rf, [
			G("div", zf, [K(fd, {
				"actor-filter": R(_),
				"error-message": g.value,
				"filtered-actors": R(v),
				"is-loading-actors": e.isLoadingActors,
				"is-loading-base-draft": e.isLoadingBaseDraft,
				"selected-base-actor": R(f),
				"selected-base-actor-uuid": R(b),
				onActorDrop: R(y),
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
			]), K(uf, {
				careers: R(o),
				"drag-over-career-index": R(C),
				"dragged-career-index": R(S),
				onCareerDragEnd: R(x),
				onCareerDragEnter: R(k),
				onCareerDragOver: R(w),
				onCareerDragStart: R(T),
				onCareerDrop: n[2] ||= (e) => r("careerDrop", e),
				onCareerDropOnRow: R(E),
				onCareerQuantityInput: R(ee),
				onMoveCareer: R(D),
				onRemoveCareer: R(O)
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
			K(qd, {
				"actor-name": R(i),
				"advancement-count": R(a).length,
				"build-preview-status": R(A),
				"build-preview-warnings": R(ae),
				"career-item-count": R(oe),
				"compact-portrait-candidates": R(de),
				"edited-advance-count": R(se),
				"estimated-npc-xp": R(s),
				"fallback-trapping-count": R(ce),
				"final-actor-name": R(c),
				"final-career": R(l),
				"final-portrait-path": R(u),
				"grant-totals": R(d),
				"hidden-portrait-candidate-count": R(fe),
				"ignored-trapping-count": R(le),
				"is-loading-portrait-candidates": R(pe),
				"optional-trait-options": R(ne),
				"portrait-candidates": R(he),
				"portrait-search-progress": R(j),
				"portrait-search-progress-label": R(ge),
				"portrait-search-progress-value": R(_e),
				"quick-trait-options": R(te),
				"selected-base-actor": R(f),
				"selected-portrait-candidate": R(ve),
				"selected-portrait-candidate-key": R(ye),
				"selected-spell-count": R(p).length,
				"suggested-actor-name": R(m),
				"trait-count": R(h).length,
				"visible-trapping-count": R(ue),
				onActorNameChange: n[3] ||= (e) => i.value = e,
				onOpenPortraitGallery: n[4] ||= (e) => me.value = !0,
				onSelectPortrait: R(be),
				onToggleOptionalTrait: R(re),
				onToggleQuickTrait: R(ie)
			}, null, 8, /* @__PURE__ */ "actor-name.advancement-count.build-preview-status.build-preview-warnings.career-item-count.compact-portrait-candidates.edited-advance-count.estimated-npc-xp.fallback-trapping-count.final-actor-name.final-career.final-portrait-path.grant-totals.hidden-portrait-candidate-count.ignored-trapping-count.is-loading-portrait-candidates.optional-trait-options.portrait-candidates.portrait-search-progress.portrait-search-progress-label.portrait-search-progress-value.quick-trait-options.selected-base-actor.selected-portrait-candidate.selected-portrait-candidate-key.selected-spell-count.suggested-actor-name.trait-count.visible-trapping-count.onSelectPortrait.onToggleOptionalTrait.onToggleQuickTrait".split(".")),
			K(yf, {
				"is-loading-portrait-candidates": R(pe),
				open: R(me),
				"portrait-candidates": R(he),
				"selected-portrait-candidate-key": R(ye),
				onClose: n[5] ||= (e) => me.value = !1,
				onSelectPortrait: R(xe)
			}, null, 8, [
				"is-loading-portrait-candidates",
				"open",
				"portrait-candidates",
				"selected-portrait-candidate-key",
				"onSelectPortrait"
			])
		]));
	}
}), Vf = { class: "npc-builder__folder-setting" }, Hf = { class: "npc-builder__field" }, Uf = ["value"], Wf = { value: "" }, Gf = ["value"], Kf = { class: "npc-builder__field" }, qf = ["value"], Jf = ["disabled"], Yf = /* @__PURE__ */ B({
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
		return (t, a) => (U(), W("section", Vf, [
			G("label", Hf, [G("span", null, M(e.folderLabel), 1), G("select", {
				value: e.selectedUuid,
				onChange: r
			}, [G("option", Wf, M(e.defaultOptionLabel), 1), (U(!0), W(H, null, V(e.folders, (e) => (U(), W("option", {
				key: e.uuid,
				value: e.uuid
			}, M(e.name), 9, Gf))), 128))], 40, Uf)]),
			G("label", Kf, [a[1] ||= G("span", null, "Create or use by name", -1), G("input", {
				value: e.createName,
				placeholder: "Folder name",
				type: "text",
				onInput: i
			}, null, 40, qf)]),
			G("button", {
				disabled: e.disabled || !e.createName.trim(),
				type: "button",
				onClick: a[0] ||= (e) => n("saveFolderName")
			}, M(e.buttonLabel ?? "Save"), 9, Jf)
		]));
	}
}), Xf = { class: "npc-builder__panel" }, Zf = /* @__PURE__ */ B({
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
		return (t, r) => (U(), W("section", Xf, [
			r[6] ||= G("div", { class: "npc-builder__panel-heading" }, [G("span", null, "1"), G("h2", null, "Actor Sources")], -1),
			K(Yf, {
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
			K(Yf, {
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
}), Qf = { class: "npc-builder__panel" }, $f = { class: "npc-builder__check" }, ep = ["checked"], tp = { class: "npc-builder__check" }, np = ["checked"], rp = { class: "npc-builder__check" }, ip = ["checked"], ap = { class: "npc-builder__check" }, op = ["checked"], sp = { class: "npc-builder__check" }, cp = ["checked"], lp = /* @__PURE__ */ B({
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
		return (t, i) => (U(), W("section", Qf, [
			i[10] ||= G("div", { class: "npc-builder__panel-heading" }, [G("span", null, "5"), G("h2", null, "Base Actor Features")], -1),
			G("label", $f, [G("input", {
				checked: e.allowCharacteristics,
				type: "checkbox",
				onChange: i[0] ||= (e) => n("allowCharacteristicsChange", r(e))
			}, null, 40, ep), i[5] ||= G("span", null, "Show base actor characteristics", -1)]),
			G("label", tp, [G("input", {
				checked: e.allowSkills,
				type: "checkbox",
				onChange: i[1] ||= (e) => n("allowSkillsChange", r(e))
			}, null, 40, np), i[6] ||= G("span", null, "Show base actor skills", -1)]),
			G("label", rp, [G("input", {
				checked: e.allowTalents,
				type: "checkbox",
				onChange: i[2] ||= (e) => n("allowTalentsChange", r(e))
			}, null, 40, ip), i[7] ||= G("span", null, "Show base actor talents", -1)]),
			G("label", ap, [G("input", {
				checked: e.allowTrappings,
				type: "checkbox",
				onChange: i[3] ||= (e) => n("allowTrappingsChange", r(e))
			}, null, 40, op), i[8] ||= G("span", null, "Show base actor trappings", -1)]),
			G("label", sp, [G("input", {
				checked: e.allowTraits,
				type: "checkbox",
				onChange: i[4] ||= (e) => n("allowTraitsChange", r(e))
			}, null, 40, cp), i[9] ||= G("span", null, "Show base actor traits", -1)])
		]));
	}
}), up = { class: "npc-builder__panel" }, dp = { class: "npc-builder__check" }, fp = ["checked"], pp = /* @__PURE__ */ B({
	__name: "MagicSpellSettings",
	props: { autoSelectGrantedSpells: { type: Boolean } },
	emits: ["autoSelectGrantedSpellsChange"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			let t = e.target;
			n("autoSelectGrantedSpellsChange", !!t?.checked);
		}
		return (t, n) => (U(), W("section", up, [n[1] ||= G("div", { class: "npc-builder__panel-heading" }, [G("span", null, "6"), G("h2", null, "Magic and Spells")], -1), G("label", dp, [G("input", {
			checked: e.autoSelectGrantedSpells,
			type: "checkbox",
			onChange: r
		}, null, 40, fp), n[0] ||= G("span", null, "Select detected Lore spells by default", -1)])]));
	}
}), mp = { class: "npc-builder__panel" }, hp = { class: "npc-builder__check" }, gp = ["checked"], _p = /* @__PURE__ */ B({
	__name: "NamingSettings",
	props: { includeSpeciesInName: { type: Boolean } },
	emits: ["includeSpeciesInNameChange"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			let t = e.target;
			n("includeSpeciesInNameChange", !!t?.checked);
		}
		return (t, n) => (U(), W("section", mp, [n[1] ||= G("div", { class: "npc-builder__panel-heading" }, [G("span", null, "3"), G("h2", null, "Default Naming")], -1), G("label", hp, [G("input", {
			checked: e.includeSpeciesInName,
			type: "checkbox",
			onChange: r
		}, null, 40, gp), n[0] ||= G("span", null, "Include species in suggested names", -1)])]));
	}
}), vp = { class: "npc-builder__panel" }, yp = { class: "npc-builder__field" }, bp = ["value"], xp = { class: "npc-builder__check" }, Sp = ["checked"], Cp = ["disabled"], wp = ["disabled"], Tp = /* @__PURE__ */ B({
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
		return (t, a) => (U(), W("section", vp, [
			a[5] ||= G("div", { class: "npc-builder__panel-heading" }, [G("span", null, "7"), G("h2", null, "Other Settings")], -1),
			G("label", yp, [a[3] ||= G("span", null, "Lower career handling", -1), G("select", {
				value: e.lowerCareerMode,
				onChange: r
			}, [...a[2] ||= [
				G("option", { value: "prompt" }, "Prompt when candidates are found", -1),
				G("option", { value: "auto-add-all" }, "Automatically add all lower-tier matches", -1),
				G("option", { value: "never" }, "Only add dropped careers", -1)
			]], 40, bp)]),
			G("label", xp, [G("input", {
				checked: e.askForLinkedSkillSpecializations,
				type: "checkbox",
				onChange: i
			}, null, 40, Sp), a[4] ||= G("span", null, "Resolve linked career skill repeats separately", -1)]),
			G("button", {
				disabled: e.isBusy,
				type: "button",
				onClick: a[0] ||= (e) => n("saveSettings")
			}, "Save Settings", 8, Cp),
			G("button", {
				disabled: e.isBusy,
				type: "button",
				onClick: a[1] ||= (e) => n("resetSettings")
			}, " Reset to Defaults ", 8, wp)
		]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSettingsTab/portrait-search-labels.ts
function Ep(e) {
	return e ? e.digDownActive ? e.digDownDeepFileSearchEnabled ? e.digDownCacheReady ? `Dig Down cache ready with ${e.digDownIndexedFileCount} indexed files.` : "Dig Down is active; its file cache is still building or unavailable." : "Dig Down is active, but its Deep File Search setting is disabled." : "Install and enable Dig Down to search local files for portrait suggestions." : "Checking Dig Down integration.";
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSettingsTab/PortraitSuggestionSettings.vue?vue&type=script&setup=true&lang.ts
var Dp = { class: "npc-builder__panel" }, Op = { class: "npc-builder__check" }, kp = ["checked", "disabled"], Ap = { class: "npc-builder__setting-note" }, jp = { class: "npc-builder__check" }, Mp = ["checked"], Np = { class: "npc-builder__check" }, Pp = ["checked"], Fp = /* @__PURE__ */ B({
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
		return (t, n) => (U(), W("section", Dp, [
			n[3] ||= G("div", { class: "npc-builder__panel-heading" }, [G("span", null, "4"), G("h2", null, "Portrait Suggestions")], -1),
			G("label", Op, [G("input", {
				checked: e.searchFoundryPortraitAssets,
				disabled: !e.canUseDigDownPortraitSearch,
				type: "checkbox",
				onChange: r
			}, null, 40, kp), n[0] ||= G("span", null, "Search Dig Down's file cache for portrait suggestions", -1)]),
			G("p", Ap, M(e.statusLabel), 1),
			G("label", jp, [G("input", {
				checked: e.searchCompendiumPortraitAssets,
				type: "checkbox",
				onChange: i
			}, null, 40, Mp), n[1] ||= G("span", null, "Search Actor and Item compendiums for portrait suggestions", -1)]),
			G("label", Np, [G("input", {
				checked: e.searchWebPortraitAssets,
				disabled: "",
				type: "checkbox"
			}, null, 8, Pp), n[2] ||= G("span", null, "Search the web for portrait suggestions (later)", -1)])
		]));
	}
}), Ip = { class: "npc-builder__panel" }, Lp = ["disabled"], Rp = /* @__PURE__ */ B({
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
		return (t, r) => (U(), W("section", Ip, [
			r[4] ||= G("div", { class: "npc-builder__panel-heading" }, [G("span", null, "2"), G("h2", null, "Quick Traits")], -1),
			K(Yf, {
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
			G("button", {
				disabled: e.isBusy || !e.quickTraitFolderUuid,
				type: "button",
				onClick: r[3] ||= (e) => n("importRecommendedQuickTraits")
			}, " Import Recommended Quick Traits ", 8, Lp)
		]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSettingsTab/settings-payload.ts
function zp(e) {
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
var Bp = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, Vp = {
	key: 1,
	class: "npc-builder__message"
}, Hp = /* @__PURE__ */ B({
	__name: "SettingsMessages",
	props: {
		errorMessage: {},
		settingsMessage: {}
	},
	setup(e) {
		return (t, n) => e.errorMessage ? (U(), W("p", Bp, M(e.errorMessage), 1)) : e.settingsMessage ? (U(), W("p", Vp, M(e.settingsMessage), 1)) : q("", !0);
	}
}), Up = { class: "npc-builder__settings" }, Wp = /* @__PURE__ */ B({
	__name: "NpcBuilderSettingsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Sl(), { actorFolders: r, itemFolders: i, settings: a } = qs(n), o = /* @__PURE__ */ L(""), s = /* @__PURE__ */ L(""), c = /* @__PURE__ */ L(!1), l = /* @__PURE__ */ L(""), u = /* @__PURE__ */ L(null), d = /* @__PURE__ */ L(""), f = /* @__PURE__ */ L(""), p = J(() => u.value?.digDownActive ?? !0), m = J(() => Ep(u.value));
		Tr(() => {
			C();
		}), Wn(u, (e) => {
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
				n.hydrateSettings(await t.bridge.saveSettings(Bc())), await Promise.all([x(), S()]), f.value = "Settings reset to defaults.";
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
			return zp({
				canUseDigDownPortraitSearch: p.value,
				settings: a.value
			});
		}
		return (e, t) => (U(), W("section", Up, [
			K(Hp, {
				"error-message": s.value,
				"settings-message": f.value
			}, null, 8, ["error-message", "settings-message"]),
			K(Zf, {
				"actor-folders": R(r),
				"base-actor-folder-name": o.value,
				"base-actor-folder-uuid": R(a).baseActorFolderUuid,
				"is-busy": c.value,
				"output-actor-folder-name": l.value,
				"output-actor-folder-uuid": R(a).outputActorFolderUuid,
				onBaseActorFolderNameChange: t[0] ||= (e) => o.value = e,
				onBaseActorFolderUuidChange: t[1] ||= (e) => R(a).baseActorFolderUuid = e,
				onOutputActorFolderNameChange: t[2] ||= (e) => l.value = e,
				onOutputActorFolderUuidChange: t[3] ||= (e) => R(a).outputActorFolderUuid = e,
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
			K(Rp, {
				"is-busy": c.value,
				"item-folders": R(i),
				"quick-trait-folder-name": d.value,
				"quick-trait-folder-uuid": R(a).quickTraitFolderUuid,
				onImportRecommendedQuickTraits: w,
				onQuickTraitFolderNameChange: t[4] ||= (e) => d.value = e,
				onQuickTraitFolderUuidChange: t[5] ||= (e) => R(a).quickTraitFolderUuid = e,
				onSaveQuickTraitFolderName: _
			}, null, 8, [
				"is-busy",
				"item-folders",
				"quick-trait-folder-name",
				"quick-trait-folder-uuid"
			]),
			K(_p, {
				"include-species-in-name": R(a).includeSpeciesInName,
				onIncludeSpeciesInNameChange: t[6] ||= (e) => R(a).includeSpeciesInName = e
			}, null, 8, ["include-species-in-name"]),
			K(Fp, {
				"can-use-dig-down-portrait-search": p.value,
				"search-compendium-portrait-assets": R(a).searchCompendiumPortraitAssets,
				"search-foundry-portrait-assets": R(a).searchFoundryPortraitAssets,
				"search-web-portrait-assets": R(a).searchWebPortraitAssets,
				"status-label": m.value,
				onSearchCompendiumPortraitAssetsChange: t[7] ||= (e) => R(a).searchCompendiumPortraitAssets = e,
				onSearchFoundryPortraitAssetsChange: t[8] ||= (e) => R(a).searchFoundryPortraitAssets = e
			}, null, 8, [
				"can-use-dig-down-portrait-search",
				"search-compendium-portrait-assets",
				"search-foundry-portrait-assets",
				"search-web-portrait-assets",
				"status-label"
			]),
			K(lp, {
				"allow-characteristics": R(a).allowBaseActorCharacteristics,
				"allow-skills": R(a).allowBaseActorSkills,
				"allow-talents": R(a).allowBaseActorTalents,
				"allow-traits": R(a).allowBaseActorTraits,
				"allow-trappings": R(a).allowBaseActorTrappings,
				onAllowCharacteristicsChange: t[9] ||= (e) => R(a).allowBaseActorCharacteristics = e,
				onAllowSkillsChange: t[10] ||= (e) => R(a).allowBaseActorSkills = e,
				onAllowTalentsChange: t[11] ||= (e) => R(a).allowBaseActorTalents = e,
				onAllowTraitsChange: t[12] ||= (e) => R(a).allowBaseActorTraits = e,
				onAllowTrappingsChange: t[13] ||= (e) => R(a).allowBaseActorTrappings = e
			}, null, 8, [
				"allow-characteristics",
				"allow-skills",
				"allow-talents",
				"allow-traits",
				"allow-trappings"
			]),
			K(pp, {
				"auto-select-granted-spells": R(a).autoSelectGrantedSpells,
				onAutoSelectGrantedSpellsChange: t[14] ||= (e) => R(a).autoSelectGrantedSpells = e
			}, null, 8, ["auto-select-granted-spells"]),
			K(Tp, {
				"ask-for-linked-skill-specializations": R(a).askForLinkedSkillSpecializations,
				"is-busy": c.value,
				"lower-career-mode": R(a).lowerCareerMode,
				onAskForLinkedSkillSpecializationsChange: t[15] ||= (e) => R(a).askForLinkedSkillSpecializations = e,
				onLowerCareerModeChange: t[16] ||= (e) => R(a).lowerCareerMode = e,
				onResetSettings: E,
				onSaveSettings: T
			}, null, 8, [
				"ask-for-linked-skill-specializations",
				"is-busy",
				"lower-career-mode"
			])
		]));
	}
}), Gp = { class: "npc-builder__subview-stack" }, Kp = { class: "npc-builder__field" }, qp = ["onUpdate:modelValue"], Jp = ["value"], Yp = { class: "npc-builder__subview-actions" }, Xp = /* @__PURE__ */ B({
	__name: "MagicLoreResolutionPromptContent",
	props: { prompt: {} },
	emits: ["applyLores", "keepUnresolved"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (U(), W("div", Gp, [
			r[4] ||= G("p", null, " Choose concrete magic Lores for ambiguous grants before automatic spells are detected. Unresolved grants can still use manually dropped spells. ", -1),
			(U(!0), W(H, null, V(e.prompt.rows, (e) => (U(), W("section", {
				key: e.resolutionKey,
				class: "npc-builder__resolution-row"
			}, [G("div", null, [G("strong", null, M(e.grantLabel), 1), G("small", null, M(e.sourceLabel) + " - " + M(e.rawLore || "Any Lore"), 1)]), G("label", Kp, [r[3] ||= G("span", null, "Lore", -1), Ln(G("select", { "onUpdate:modelValue": (t) => e.selectedLore = t }, [r[2] ||= G("option", { value: "" }, "Leave unresolved", -1), (U(!0), W(H, null, V(e.options, (e) => (U(), W("option", {
				key: e.key,
				value: e.value
			}, M(e.label) + M(e.wind && e.wind !== "None" ? ` (${e.wind})` : ""), 9, Jp))), 128))], 8, qp), [[es, e.selectedLore]])])]))), 128)),
			G("div", Yp, [G("button", {
				type: "button",
				onClick: r[0] ||= (e) => n("keepUnresolved")
			}, "Keep Unresolved"), G("button", {
				type: "button",
				onClick: r[1] ||= (e) => n("applyLores")
			}, "Apply Lores")])
		]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSpellsTab/labels.ts
function Zp(e) {
	return e.kind === "arcane-magic" ? "Arcane Magic" : e.kind === "petty-magic" ? "Petty Magic" : "Spellcaster";
}
function Qp(e) {
	return `${Zp(e)} from ${e.sourceName}`;
}
function $p(e) {
	return e.source === "talent" ? "Talent" : "Trait";
}
function em(e) {
	return e.source === "custom" ? "Dropped" : e.sourceLabel;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSpellsTab/MagicAccessPanel.vue?vue&type=script&setup=true&lang.ts
var tm = { class: "npc-builder__panel" }, nm = {
	key: 0,
	class: "npc-builder__empty"
}, rm = {
	key: 1,
	class: "npc-builder__magic-grants"
}, im = { key: 0 }, am = { key: 1 }, om = {
	key: 2,
	class: "npc-builder__panel-actions"
}, sm = ["disabled"], cm = /* @__PURE__ */ B({
	__name: "MagicAccessPanel",
	props: {
		ambiguousGrantCount: {},
		isLoadingLoreOptions: { type: Boolean },
		magicGrants: {}
	},
	emits: ["resolveLores"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (U(), W("section", tm, [
			r[1] ||= G("div", { class: "npc-builder__panel-heading" }, [G("span", null, "1"), G("h2", null, "Magic Access")], -1),
			e.magicGrants.length ? (U(), W("div", rm, [(U(!0), W(H, null, V(e.magicGrants, (e) => (U(), W("article", { key: `${e.source}:${e.sourceName}:${e.rawLore}` }, [
				G("strong", null, M(R(Zp)(e)), 1),
				G("span", null, M(R($p)(e)) + " - " + M(e.sourceName), 1),
				e.isAmbiguous ? (U(), W("small", im, " Needs Lore resolution before automatic spells can be found. ")) : (U(), W("small", am, " Lore: " + M(e.rawLore || e.normalizedLore), 1))
			]))), 128))])) : (U(), W("p", nm, " No magic-enabling Talent or Trait is selected. ")),
			e.ambiguousGrantCount ? (U(), W("div", om, [G("button", {
				disabled: e.isLoadingLoreOptions,
				type: "button",
				onClick: r[0] ||= (e) => n("resolveLores")
			}, M(e.isLoadingLoreOptions ? "Loading Lores..." : "Resolve Lores"), 9, sm)])) : q("", !0)
		]));
	}
}), lm = { class: "npc-builder__panel" }, um = { class: "npc-builder__panel-actions" }, dm = ["disabled"], fm = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, pm = {
	key: 1,
	class: "npc-builder__message npc-builder__message--error"
}, mm = {
	key: 2,
	class: "npc-builder__table"
}, hm = ["checked", "onChange"], gm = { class: "npc-builder__spell-name" }, _m = { class: "npc-builder__spell-icon" }, vm = ["src"], ym = ["onClick"], bm = { key: 1 }, xm = {
	key: 3,
	class: "npc-builder__empty"
}, Sm = /* @__PURE__ */ B({
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
		return (t, r) => (U(), W("section", lm, [
			r[3] ||= G("div", { class: "npc-builder__panel-heading" }, [G("span", null, "2"), G("h2", null, "Spells")], -1),
			K(Ju, {
				class: "npc-builder__drop npc-builder__drop--career",
				description: "Add a specific Spell item regardless of detected Lores.",
				title: "Drop Spell Items",
				onDropData: r[0] ||= (e) => n("spellDrop", e)
			}),
			G("div", um, [G("button", {
				disabled: e.isLoadingSpells || !e.resolvedGrantCount,
				type: "button",
				onClick: r[1] ||= (e) => n("refreshSpells")
			}, M(e.isLoadingSpells ? "Finding spells..." : "Refresh Spells"), 9, dm), G("span", null, M(e.selectedSpellCount) + " selected / " + M(e.spells.length) + " found", 1)]),
			e.errorMessage ? (U(), W("p", fm, M(e.errorMessage), 1)) : q("", !0),
			e.ambiguousGrantCount ? (U(), W("p", pm, M(e.ambiguousGrantCount) + " magic grant" + M(e.ambiguousGrantCount === 1 ? "" : "s") + " still need Lore resolution. You can still drop specific spells for now. ", 1)) : q("", !0),
			e.spells.length ? (U(), W("div", mm, [r[2] ||= G("div", { class: "npc-builder__table-head npc-builder__table-head--spells" }, [
				G("span", null, "Use"),
				G("span", null, "Spell"),
				G("span", null, "Lore"),
				G("span", null, "Source"),
				G("span")
			], -1), (U(!0), W(H, null, V(e.spells, (e) => (U(), W("article", {
				key: e.key,
				class: "npc-builder__spell-row"
			}, [
				G("input", {
					checked: e.selected,
					type: "checkbox",
					onChange: (t) => n("spellSelectedChange", e, t)
				}, null, 40, hm),
				G("div", gm, [G("span", _m, [e.img ? (U(), W("img", {
					key: 0,
					src: e.img,
					alt: ""
				}, null, 8, vm)) : q("", !0)]), G("strong", null, M(e.name), 1)]),
				G("span", null, M(e.loreName || "Unknown"), 1),
				G("span", null, M(R(em)(e)), 1),
				e.source === "custom" ? (U(), W("button", {
					key: 0,
					type: "button",
					onClick: (t) => n("removeCustomSpell", e.key)
				}, " Remove ", 8, ym)) : (U(), W("span", bm))
			]))), 128))])) : (U(), W("p", xm, " No matching spells found yet. Drop specific spells here, or resolve a non-ambiguous magic Lore. "))
		]));
	}
}), Cm = { class: "npc-builder__stack" }, wm = /* @__PURE__ */ B({
	__name: "NpcBuilderSpellsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Sl(), { magicGrants: r, spells: i, selectedSpells: a } = qs(n), o = /* @__PURE__ */ L(""), s = /* @__PURE__ */ L(!1), c = /* @__PURE__ */ L(!1), l = /* @__PURE__ */ L([]), u = /* @__PURE__ */ L(null), d = 0, f = J(() => r.value.filter((e) => e.isAmbiguous)), p = J(() => r.value.length - f.value.length);
		Tr(() => {
			g(), h();
		}), Wn(() => r.value.map((e) => `${e.kind}:${e.sourceName}:${e.rawLore}`).sort().join("|"), () => {
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
				grantLabel: Qp(e),
				options: el(e, l.value),
				rawLore: e.rawLore,
				resolutionKey: e.resolutionKey,
				selectedLore: "",
				sourceLabel: $p(e)
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
		return (e, t) => (U(), W("section", Cm, [
			K(El, {
				open: u.value !== null,
				title: "Resolve Magic Lores",
				onClose: y
			}, {
				default: In(() => [u.value ? (U(), oa(Xp, {
					key: 0,
					prompt: u.value,
					onApplyLores: v,
					onKeepUnresolved: y
				}, null, 8, ["prompt"])) : q("", !0)]),
				_: 1
			}, 8, ["open"]),
			K(cm, {
				"ambiguous-grant-count": f.value.length,
				"is-loading-lore-options": c.value,
				"magic-grants": R(r),
				onResolveLores: _
			}, null, 8, [
				"ambiguous-grant-count",
				"is-loading-lore-options",
				"magic-grants"
			]),
			K(Sm, {
				"ambiguous-grant-count": f.value.length,
				"error-message": o.value,
				"is-loading-spells": s.value,
				"resolved-grant-count": p.value,
				"selected-spell-count": R(a).length,
				spells: R(i),
				onRefreshSpells: h,
				onRemoveCustomSpell: R(n).removeCustomSpell,
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
}), Tm = { class: "npc-builder__stack" }, Em = { class: "npc-builder__panel" }, Dm = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, Om = { class: "npc-builder__table" }, km = { class: "npc-builder__trait-name" }, Am = { key: 0 }, jm = { key: 1 }, Mm = { class: "npc-builder__trait-config" }, Nm = { class: "npc-builder__mini-field" }, Pm = ["value", "onInput"], Fm = {
	key: 0,
	class: "npc-builder__mini-field"
}, Im = ["value", "onChange"], Lm = ["value"], Rm = {
	key: 1,
	class: "npc-builder__mini-field"
}, zm = ["value", "onInput"], Bm = ["onClick"], Vm = /* @__PURE__ */ B({
	__name: "NpcBuilderTraitsTab",
	props: {
		bridge: {},
		difficultyOptions: {}
	},
	setup(e) {
		let t = e, n = Sl(), { traits: r } = qs(n), i = /* @__PURE__ */ L("");
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
		return (t, n) => (U(), W("section", Tm, [G("section", Em, [
			n[3] ||= G("div", { class: "npc-builder__panel-heading" }, [G("span", null, "1"), G("h2", null, "Traits")], -1),
			K(Ju, {
				class: "npc-builder__drop npc-builder__drop--career",
				description: "Add creature traits or NPC trait items.",
				title: "Drop Trait Items",
				onDropData: c
			}),
			i.value ? (U(), W("p", Dm, M(i.value), 1)) : q("", !0),
			G("div", Om, [n[2] ||= G("div", { class: "npc-builder__table-head npc-builder__table-head--traits" }, [
				G("span", null, "Name"),
				G("span", null, "Source"),
				G("span", null, "Config"),
				G("span")
			], -1), (U(!0), W(H, null, V(R(r), (t) => (U(), W("article", {
				key: t.key,
				class: "npc-builder__trait-row"
			}, [
				G("div", km, [
					G("strong", null, M(t.name), 1),
					t.config.rollable ? (U(), W("span", Am, "Rollable")) : q("", !0),
					t.config.damage ? (U(), W("span", jm, "Damage")) : q("", !0)
				]),
				G("span", null, M(a(t)), 1),
				G("div", Mm, [
					G("label", Nm, [G("span", null, M(t.config.damage ? "Damage" : "Specification"), 1), G("input", {
						value: t.config.specification,
						placeholder: "None",
						type: "text",
						onInput: (e) => s(t, "specification", e)
					}, null, 40, Pm)]),
					t.config.rollable && !t.config.damage ? (U(), W("label", Fm, [n[0] ||= G("span", null, "Difficulty", -1), G("select", {
						value: t.config.defaultDifficulty,
						onChange: (e) => s(t, "defaultDifficulty", e)
					}, [(U(!0), W(H, null, V(e.difficultyOptions, (e) => (U(), W("option", {
						key: e.value,
						value: e.value
					}, M(e.label), 9, Lm))), 128))], 40, Im)])) : q("", !0),
					t.config.damage && t.config.dice ? (U(), W("label", Rm, [n[1] ||= G("span", null, "Dice", -1), G("input", {
						value: t.config.dice,
						placeholder: "Optional",
						type: "text",
						onInput: (e) => s(t, "dice", e)
					}, null, 40, zm)])) : q("", !0)
				]),
				G("button", {
					type: "button",
					onClick: (e) => o(t)
				}, "Remove", 8, Bm)
			]))), 128))])
		])]));
	}
}), Hm = "__blank-item__";
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderTrappingsTab/resolution-labels.ts
function Um(e) {
	return e.source === "base" ? "Base" : e.source === "career" ? "Career" : "Custom";
}
function Wm(e) {
	return e.resolution.status === "matched" ? `Matched ${e.resolution.selectedName}` : e.resolution.status === "fallback" ? `Blank ${e.resolution.selectedName || e.name}` : e.resolution.candidates.length ? "Choose a match" : "Needs resolution";
}
function Gm(e) {
	return e.ignored ? "Ignored" : e.resolution.status === "matched" ? "Matched" : e.resolution.status === "fallback" ? "Blank item" : e.resolution.status === "ambiguous" || e.resolution.candidates.length ? "Choose" : "Needs resolution";
}
function Km(e) {
	let t = "npc-builder__status-pill";
	return e.ignored ? [t, "npc-builder__status-pill--muted"] : e.resolution.status === "matched" ? [t, "npc-builder__status-pill--success"] : e.resolution.status === "fallback" ? [t, "npc-builder__status-pill--fallback"] : e.resolution.status === "ambiguous" || e.resolution.candidates.length ? [t, "npc-builder__status-pill--warning"] : [t, "npc-builder__status-pill--danger"];
}
function qm(e) {
	return e.ignored ? "" : e.resolution.status === "matched" ? "is-resolution-matched" : e.resolution.status === "fallback" ? "is-resolution-fallback" : e.resolution.status === "ambiguous" || e.resolution.candidates.length ? "is-resolution-choice" : "is-resolution-unresolved";
}
function Jm(e) {
	return e.resolution.status === "fallback" ? Hm : e.resolution.selectedCandidateUuid;
}
function Ym(e) {
	return e.source === "career";
}
function Xm(e) {
	return e.resolution.candidates.length > 0 || Ym(e);
}
function Zm(e) {
	return e.resolution.searchTerms.length <= 1 ? "" : `Options: ${e.resolution.searchTerms.join(" / ")}`;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderTrappingsTab/TrappingsTable.vue?vue&type=script&setup=true&lang.ts
var Qm = { class: "npc-builder__table" }, $m = ["checked", "onChange"], eh = { class: "npc-builder__trapping-name" }, th = { key: 0 }, nh = { class: "npc-builder__trapping-resolution" }, rh = ["value", "onChange"], ih = {
	key: 0,
	value: ""
}, ah = ["value"], oh = ["value"], sh = { key: 1 }, ch = ["value", "onInput"], lh = ["onClick"], uh = { key: 1 }, dh = /* @__PURE__ */ B({
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
		return (t, r) => (U(), W("div", Qm, [r[0] ||= G("div", { class: "npc-builder__table-head npc-builder__table-head--traps" }, [
			G("span", null, "Use"),
			G("span", null, "Name"),
			G("span", null, "Resolution"),
			G("span", null, "Type"),
			G("span", null, "Qty"),
			G("span", null, "Source"),
			G("span")
		], -1), (U(!0), W(H, null, V(e.trappings, (e) => (U(), W("article", {
			key: e.key,
			class: j(["npc-builder__trapping-row", [R(qm)(e), { "is-ignored": e.ignored }]])
		}, [
			G("input", {
				checked: !e.ignored,
				type: "checkbox",
				onChange: (t) => n("useChange", e.key, t)
			}, null, 40, $m),
			G("div", eh, [G("strong", null, M(e.name), 1), R(Zm)(e) ? (U(), W("span", th, M(R(Zm)(e)), 1)) : q("", !0)]),
			G("div", nh, [G("span", { class: j(R(Km)(e)) }, M(R(Gm)(e)), 3), R(Xm)(e) ? (U(), W("select", {
				key: 0,
				value: R(Jm)(e),
				onChange: (t) => n("resolutionChange", e.key, t)
			}, [
				e.resolution.candidates.length ? (U(), W("option", ih, "Choose match")) : q("", !0),
				(U(!0), W(H, null, V(e.resolution.candidates, (e) => (U(), W("option", {
					key: e.uuid,
					value: e.uuid
				}, M(e.name) + " (" + M(e.sourceLabel) + ") ", 9, ah))), 128)),
				R(Ym)(e) ? (U(), W("option", {
					key: 1,
					value: R(Hm)
				}, "Blank Item", 8, oh)) : q("", !0)
			], 40, rh)) : (U(), W("span", sh, M(R(Wm)(e)), 1))]),
			G("span", null, M(e.resolution.selectedItemType || e.itemType || "trapping"), 1),
			G("input", {
				value: e.quantity,
				min: "1",
				type: "number",
				onInput: (t) => n("quantityInput", e.key, t)
			}, null, 40, ch),
			G("span", null, M(R(Um)(e)), 1),
			e.source === "custom" ? (U(), W("button", {
				key: 0,
				type: "button",
				onClick: (t) => n("removeCustomTrapping", e.key)
			}, " Remove ", 8, lh)) : (U(), W("span", uh))
		], 2))), 128))]));
	}
}), fh = { class: "npc-builder__stack" }, ph = { class: "npc-builder__panel" }, mh = { class: "npc-builder__panel-actions" }, hh = ["disabled"], gh = { key: 0 }, _h = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, vh = /* @__PURE__ */ B({
	__name: "NpcBuilderTrappingsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Sl(), { trappings: r } = qs(n), i = /* @__PURE__ */ L(""), a = /* @__PURE__ */ L(!1), o = J(() => r.value.filter((e) => !e.ignored && e.resolution.status === "unresolved"));
		Tr(() => {
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
		return (e, t) => (U(), W("section", fh, [G("section", ph, [
			t[0] ||= G("div", { class: "npc-builder__panel-heading" }, [G("span", null, "1"), G("h2", null, "Trappings")], -1),
			K(Ju, {
				class: "npc-builder__drop npc-builder__drop--career",
				description: "Add weapons, armour, containers, or any other item.",
				title: "Drop Trapping Items",
				onDropData: d
			}),
			G("div", mh, [G("button", {
				disabled: a.value || !o.value.length,
				type: "button",
				onClick: u
			}, M(a.value ? "Resolving..." : "Resolve Trappings"), 9, hh), o.value.length ? (U(), W("span", gh, M(o.value.length) + " unresolved ", 1)) : q("", !0)]),
			i.value ? (U(), W("p", _h, M(i.value), 1)) : q("", !0),
			K(dh, {
				trappings: R(r),
				onQuantityInput: s,
				onRemoveCustomTrapping: R(n).removeCustomTrapping,
				onResolutionChange: l,
				onUseChange: c
			}, null, 8, ["trappings", "onRemoveCustomTrapping"])
		])]));
	}
}), yh = { class: "npc-builder__subview-stack" }, bh = { class: "npc-builder__field" }, xh = ["onUpdate:modelValue"], Sh = ["value"], Ch = ["onUpdate:modelValue", "placeholder"], wh = {
	key: 0,
	class: "npc-builder__suggestions"
}, Th = { key: 0 }, Eh = ["onClick"], Dh = {
	key: 0,
	class: "npc-builder__linked-note"
}, Oh = { class: "npc-builder__subview-actions" }, kh = /* @__PURE__ */ B({
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
		return (t, r) => (U(), W("div", yh, [
			r[4] ||= G("p", null, " Some Career skills need a specialization before they become concrete WFRP skills. Blank rows can be left unresolved and edited later. ", -1),
			(U(!0), W(H, null, V(e.prompt.rows, (t) => (U(), W("section", {
				key: t.resolutionKey,
				class: "npc-builder__resolution-row"
			}, [
				G("div", null, [G("strong", null, M(e.getSkillResolutionLabel(t)), 1), G("small", null, M(t.careerLabel), 1)]),
				G("label", bh, [r[3] ||= G("span", null, "Specialization", -1), t.options.length > 1 ? Ln((U(), W("select", {
					key: 0,
					"onUpdate:modelValue": (e) => t.resolvedSpecialization = e
				}, [r[2] ||= G("option", { value: "" }, "Leave unresolved", -1), (U(!0), W(H, null, V(t.options, (e) => (U(), W("option", {
					key: e,
					value: e
				}, M(e), 9, Sh))), 128))], 8, xh)), [[es, t.resolvedSpecialization]]) : Ln((U(), W("input", {
					key: 1,
					"onUpdate:modelValue": (e) => t.resolvedSpecialization = e,
					placeholder: t.suggestedSpecializations.length ? "Type or choose below" : t.specialization,
					type: "text"
				}, null, 8, Ch)), [[$o, t.resolvedSpecialization]])]),
				e.usesFreeformSkillSpecialization(t) ? (U(), W("div", wh, [t.isLoadingSuggestions ? (U(), W("small", Th, "Finding known choices.")) : q("", !0), (U(!0), W(H, null, V(t.suggestedSpecializations, (e) => (U(), W("button", {
					key: `${t.resolutionKey}:${e}`,
					type: "button",
					onClick: (r) => n("chooseSkillSpecialization", t, e)
				}, M(e), 9, Eh))), 128))])) : q("", !0)
			]))), 128)),
			e.prompt.linkedRows.length ? (U(), W("div", Dh, M(e.prompt.linkedRows.length) + " linked skill specialization" + M(e.prompt.linkedRows.length === 1 ? "" : "s") + " will reuse earlier choices from this career chain. ", 1)) : q("", !0),
			G("div", Oh, [G("button", {
				type: "button",
				onClick: r[0] ||= (e) => n("addWithoutResolving")
			}, "Add Without Resolving"), G("button", {
				type: "button",
				onClick: r[1] ||= (e) => n("applySpecializations")
			}, "Apply Specializations")])
		]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/errors.ts
function Ah(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderBuild.ts
function jh(e, t, n, r, i) {
	let a = Sl(), { advancements: o, buildTraits: s, careers: c, finalActorName: l, finalPortraitPath: u, selectedBaseActor: d, selectedSpells: f, settings: p, trappings: m } = qs(a), h = /* @__PURE__ */ L(!1), g = J(() => !!(d.value && c.value.length && !h.value && !i.value));
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
			r.value = Ah(e), n.value = "";
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
function Mh(e) {
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
function Nh(e) {
	return [{
		career: e,
		mode: "add-or-increment"
	}];
}
function Ph(e) {
	return [...e.candidates.filter((t) => e.selectedUuids.includes(t.uuid)).map((e) => ({
		career: e,
		mode: "add-if-missing"
	})), {
		career: e.droppedCareer,
		mode: "add-or-increment"
	}];
}
function Fh(e) {
	let t = e.candidates.filter((t) => e.selectedUuids.includes(t.uuid)).length;
	return t === 0 ? "" : `Added ${t} lower-tier career candidate${t === 1 ? "" : "s"}.`;
}
function Ih(e, t) {
	return e?.selectedUuids.includes(t) ?? !1;
}
function Lh(e, t, n, r) {
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
function Rh(e, t) {
	let n = /* @__PURE__ */ new Map(), r = [], i = [];
	for (let a of e) {
		let e = /* @__PURE__ */ new Map();
		for (let o of vc(a.career.uuid, a.career.grants.skills)) {
			let s = _c(o.originalName);
			if (!s) continue;
			let c = yc(o.originalName), l = n.get(c) ?? [], u = e.get(c) ?? 0, d = t.enableLinkedSkillResolution && l[u] ? l[u] : "";
			if (e.set(c, u + 1), d) {
				r.push({
					linkedFromKey: d,
					resolutionKey: o.resolutionKey
				});
				continue;
			}
			i.push({
				baseName: s.baseName,
				careerLabel: Uh(a.career),
				isLoadingSuggestions: !1,
				occurrence: o.occurrence,
				options: s.options,
				originalName: s.originalName,
				resolvedSpecialization: Wh(s),
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
function zh(e) {
	return e.resolvedSpecialization.trim() ? hc(e.baseName, e.resolvedSpecialization) : "";
}
function Bh(e) {
	return e.occurrence > 0 ? `${e.originalName}, choice ${e.occurrence + 1}` : e.originalName;
}
function Vh(e) {
	return e.options.length <= 1 && e.specialization.trim().toLocaleLowerCase() === "any";
}
function Hh(e, t) {
	e.resolvedSpecialization = t;
}
function Uh(e) {
	return e.level === null ? e.name : `${e.name}, tier ${e.level}`;
}
function Wh(e) {
	return e.specialization.trim().toLocaleLowerCase() === "any" ? "" : e.options[0] ?? "";
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/skill-specialization-suggestions.ts
async function Gh(e, t) {
	await Promise.all(t.rows.map(async (t) => {
		if (Vh(t)) {
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
function Kh(e, t, n) {
	let r = Sl(), { careers: i, settings: a } = qs(r), o = /* @__PURE__ */ L(!1), s = /* @__PURE__ */ L(null), c = /* @__PURE__ */ L(null), l = J(() => Mh(s.value));
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
		m(Nh(e), {
			enableLinkedSkillResolution: !1,
			message: ""
		});
	}
	function m(t, n) {
		let r = Rh(t, n);
		if (r.rows.length) {
			c.value = r, Gh(e, c.value);
			return;
		}
		y(t, n.message);
	}
	function h() {
		let e = s.value;
		e && (s.value = null, m(Ph(e), {
			enableLinkedSkillResolution: !a.value.askForLinkedSkillSpecializations,
			message: Fh(e)
		}));
	}
	function g() {
		let e = s.value;
		e && (s.value = null, p(e.droppedCareer));
	}
	function _() {
		let e = c.value;
		if (e) {
			for (let t of e.rows) r.setSkillGrantResolution(t.resolutionKey, zh(t));
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
			n.value = Ah(e);
		}
	}
	function x(e) {
		return i.value.some((t) => t.uuid === e);
	}
	function S(e) {
		return Ih(s.value, e);
	}
	function C(e, t) {
		Lh(s.value, e, t, x);
	}
	return {
		chooseSkillSpecialization: Hh,
		confirmLowerCareerPrompt: h,
		confirmSkillResolutionPrompt: _,
		dismissLowerCareerPrompt: g,
		dismissSkillResolutionPrompt: v,
		getSkillResolutionLabel: Bh,
		handleCareerDrop: u,
		isCareerQueued: x,
		isFindingLowerCareers: o,
		isLowerCareerSelected: S,
		lowerCareerCandidateGroups: l,
		pendingLowerCareerPrompt: s,
		pendingSkillResolutionPrompt: c,
		setLowerCareerSelected: C,
		usesFreeformSkillSpecialization: Vh
	};
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderInitialData.ts
function qh(e, t) {
	let n = Sl(), { selectedBaseActorUuid: r, settings: i } = qs(n), a = /* @__PURE__ */ L(!1), o = /* @__PURE__ */ L(!1), s = /* @__PURE__ */ L([]);
	Tr(async () => {
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
			t.value = Ah(e);
		} finally {
			a.value = !1;
		}
	}), Wn(r, async (r) => {
		if (t.value = "", !r) {
			n.clearBaseDraftData();
			return;
		}
		o.value = !0;
		try {
			let t = await e.loadBaseActorDraftData(r);
			n.hydrateBaseActorDraftData(t);
		} catch (e) {
			t.value = Ah(e), n.clearBaseDraftData();
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
function Jh(e) {
	let t = Sl(), { advancements: n } = qs(t), r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), a = J(() => {
		let e = /* @__PURE__ */ new Set();
		for (let t of n.value) t.kind === "skill" && !t.characteristicKey && !_c(t.name) && e.add(t.name);
		return [...e];
	}), o = J(() => {
		let e = /* @__PURE__ */ new Set();
		for (let t of n.value) t.kind === "talent" && !t.talentMaximumKey && e.add(t.name);
		return [...e];
	});
	Wn(a, async (n) => {
		let i = Yh(n, r);
		if (i.length) try {
			let n = await e.listSkillCharacteristics(i);
			t.hydrateSkillCharacteristics(n);
		} catch {}
	}, { immediate: !0 }), Wn(o, async (n) => {
		let r = Yh(n, i);
		if (r.length) try {
			let n = await e.listTalentMaximums(r);
			t.hydrateTalentMaximums(n);
		} catch {}
	}, { immediate: !0 });
}
function Yh(e, t) {
	return e.filter((e) => {
		let n = yc(e);
		return t.has(n) ? !1 : (t.add(n), !0);
	});
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp.vue?vue&type=script&setup=true&lang.ts
var Xh = { class: "npc-builder" }, Zh = { class: "npc-builder__header" }, Qh = { class: "npc-builder__header-actions" }, $h = {
	"aria-label": "NPC Builder sections",
	class: "npc-builder__tabs"
}, eg = ["disabled"], tg = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, ng = {
	key: 1,
	class: "npc-builder__message"
}, rg = /* @__PURE__ */ B({
	__name: "NpcBuilderApp",
	props: { bridge: {} },
	setup(e) {
		let t = e, { hasMagicAccess: n, selectedSpells: r } = qs(Sl()), i = /* @__PURE__ */ L("builder"), a = /* @__PURE__ */ L(""), o = /* @__PURE__ */ L(""), { chooseSkillSpecialization: s, confirmLowerCareerPrompt: c, confirmSkillResolutionPrompt: l, dismissLowerCareerPrompt: u, dismissSkillResolutionPrompt: d, getSkillResolutionLabel: f, handleCareerDrop: p, isCareerQueued: m, isFindingLowerCareers: h, isLowerCareerSelected: g, lowerCareerCandidateGroups: _, pendingLowerCareerPrompt: v, pendingSkillResolutionPrompt: y, setLowerCareerSelected: b, usesFreeformSkillSpecialization: x } = Kh(t.bridge, a, o), { buildNpc: S, canBuild: C } = jh(t.bridge, i, a, o, h), { isLoadingActors: w, isLoadingBaseDraft: T, traitDifficultyOptions: E } = qh(t.bridge, o);
		return Jh(t.bridge), (e, h) => (U(), W("main", Xh, [
			G("header", Zh, [h[7] ||= G("div", null, [G("p", null, "WFRP4e Customizer"), G("h1", null, "NPC Builder")], -1), G("div", Qh, [G("nav", $h, [
				G("button", {
					class: j({ "is-active": i.value === "builder" }),
					type: "button",
					onClick: h[0] ||= (e) => i.value = "builder"
				}, " Build ", 2),
				G("button", {
					class: j({ "is-active": i.value === "advancements" }),
					type: "button",
					onClick: h[1] ||= (e) => i.value = "advancements"
				}, " Advances ", 2),
				G("button", {
					class: j({ "is-active": i.value === "trappings" }),
					type: "button",
					onClick: h[2] ||= (e) => i.value = "trappings"
				}, " Trappings ", 2),
				G("button", {
					class: j({ "is-active": i.value === "traits" }),
					type: "button",
					onClick: h[3] ||= (e) => i.value = "traits"
				}, " Traits ", 2),
				R(n) || R(r).length ? (U(), W("button", {
					key: 0,
					class: j({ "is-active": i.value === "spells" }),
					type: "button",
					onClick: h[4] ||= (e) => i.value = "spells"
				}, " Spells ", 2)) : q("", !0),
				G("button", {
					class: j({ "is-active": i.value === "settings" }),
					type: "button",
					onClick: h[5] ||= (e) => i.value = "settings"
				}, " Settings ", 2)
			]), G("button", {
				disabled: !R(C),
				type: "button",
				onClick: h[6] ||= (...e) => R(S) && R(S)(...e)
			}, "Build NPC", 8, eg)])]),
			K(El, {
				open: R(v) !== null,
				title: "Add Lower-Tier Careers?",
				onClose: R(u)
			}, {
				default: In(() => [R(v) ? (U(), oa(Al, {
					key: 0,
					"candidate-groups": R(_),
					"is-career-queued": R(m),
					"is-lower-career-selected": R(g),
					prompt: R(v),
					onAddDroppedOnly: R(u),
					onAddSelected: R(c),
					onLowerCareerSelected: R(b)
				}, null, 8, [
					"candidate-groups",
					"is-career-queued",
					"is-lower-career-selected",
					"prompt",
					"onAddDroppedOnly",
					"onAddSelected",
					"onLowerCareerSelected"
				])) : q("", !0)]),
				_: 1
			}, 8, ["open", "onClose"]),
			K(El, {
				open: R(y) !== null,
				title: "Resolve Skill Specializations",
				onClose: R(d)
			}, {
				default: In(() => [R(y) ? (U(), oa(kh, {
					key: 0,
					"get-skill-resolution-label": R(f),
					prompt: R(y),
					"uses-freeform-skill-specialization": R(x),
					onAddWithoutResolving: R(d),
					onApplySpecializations: R(l),
					onChooseSkillSpecialization: R(s)
				}, null, 8, [
					"get-skill-resolution-label",
					"prompt",
					"uses-freeform-skill-specialization",
					"onAddWithoutResolving",
					"onApplySpecializations",
					"onChooseSkillSpecialization"
				])) : q("", !0)]),
				_: 1
			}, 8, ["open", "onClose"]),
			o.value ? (U(), W("p", tg, M(o.value), 1)) : a.value ? (U(), W("p", ng, M(a.value), 1)) : q("", !0),
			i.value === "settings" ? (U(), oa(Wp, {
				key: 2,
				bridge: t.bridge
			}, null, 8, ["bridge"])) : i.value === "advancements" ? (U(), oa(Iu, { key: 3 })) : i.value === "trappings" ? (U(), oa(vh, {
				key: 4,
				bridge: t.bridge
			}, null, 8, ["bridge"])) : i.value === "traits" ? (U(), oa(Vm, {
				key: 5,
				bridge: t.bridge,
				"difficulty-options": R(E)
			}, null, 8, ["bridge", "difficulty-options"])) : i.value === "spells" ? (U(), oa(wm, {
				key: 6,
				bridge: t.bridge
			}, null, 8, ["bridge"])) : (U(), oa(Bf, {
				key: 7,
				bridge: t.bridge,
				"is-loading-actors": R(w),
				"is-loading-base-draft": R(T),
				onCareerDrop: R(p)
			}, null, 8, [
				"bridge",
				"is-loading-actors",
				"is-loading-base-draft",
				"onCareerDrop"
			]))
		]));
	}
}), X = "wfrp4e-customizer-apps", ig = "wfrp4e", ag = Ms(), og = class extends foundry.applications.api.ApplicationV2 {
	#e;
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("wfrp4e-customizer-vue-root", "root"), n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("wfrp4e-customizer-vue-app", "vue-app"), t.replaceChildren(e);
		let r = this.getVueProps() ?? {};
		this.#e = ds(this.getVueComponent(), r), this.#e.use(ag), this.#e.mount(e);
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
function sg(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function Z(e, t) {
	let n = e;
	for (let e of t) {
		if (!sg(n) || !(e in n)) return;
		n = n[e];
	}
	return n;
}
function Q(e, t) {
	let n = Z(e, t);
	return typeof n == "string" ? n.trim() : "";
}
function cg(e, t) {
	let n = Z(e, t);
	return Array.isArray(n) ? n.filter((e) => typeof e == "string") : [];
}
function lg(e, t, n = 0) {
	return ug(e, t) ?? n;
}
function ug(e, t) {
	for (let n of t) {
		let t = Number(Z(e, n));
		if (Number.isFinite(t)) return t;
	}
	return null;
}
function dg(e, t, n = !1) {
	for (let n of t) {
		let t = Z(e, n);
		if (typeof t == "boolean") return t;
	}
	return n;
}
function fg(e) {
	return Array.isArray(e) ? e.flatMap(fg) : typeof e == "string" ? e.split(/[\n\r,;]/).map((e) => e.trim()).filter(Boolean) : sg(e) ? Object.values(e).flatMap(fg) : [];
}
function pg(e, t, n) {
	let r = e;
	for (let e of t.slice(0, -1)) {
		let t = r[e];
		sg(t) || (r[e] = {}), r = r[e];
	}
	r[t[t.length - 1] ?? ""] = n;
}
//#endregion
//#region src/functions/npc-builder/extract-career-grants.ts
function mg(e) {
	return {
		characteristics: hg(e),
		skills: gg(e),
		talents: vg(e, [["talents", "value"], ["talents"]]),
		trappings: vg(e, [["trappings", "value"], ["trappings"]])
	};
}
function hg(e) {
	let t = vg(e, [["characteristics", "value"], ["characteristics"]]);
	if (t.length) return t.map(_g);
	let n = Z(e, ["characteristics"]);
	if (!sg(n)) return [];
	let r = [];
	for (let [e, t] of Object.entries(n)) t && r.push(_g(e));
	return bg(r);
}
function gg(e) {
	return vg(e, [["skills", "value"], ["skills"]], { preserveDuplicates: !0 });
}
function _g(e) {
	let t = e.trim().toLocaleLowerCase();
	if (nc(t)) return ec[t];
	let n = tc[t];
	return n ? ec[n] : e.trim();
}
function vg(e, t, n = {}) {
	for (let r of t) {
		let t = fg(Z(e, r));
		if (t.length) return n.preserveDuplicates ? yg(t) : bg(t);
	}
	return [];
}
function yg(e) {
	return e.map((e) => e.trim()).filter(Boolean);
}
function bg(e) {
	return [...new Set(yg(e))].sort((e, t) => e.localeCompare(t));
}
//#endregion
//#region src/module/foundry/document-guards.ts
function xg(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Actor";
}
function Sg(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Item";
}
function Cg(e, t = "Expected a Foundry Actor.") {
	if (!xg(e)) throw Error(t);
	return e;
}
function wg(e, t = "Expected a Foundry Item.") {
	if (!Sg(e)) throw Error(t);
	return e;
}
function Tg(e, t, n = `Expected a Foundry ${t} Item.`) {
	let r = wg(e, n);
	if (r.type !== t) throw Error(n);
	return r;
}
//#endregion
//#region src/module/wfrp4e/career-index.ts
var Eg = /* @__PURE__ */ new Map(), Dg = "idle", Og = null;
function kg() {
	return Og || (Dg = "indexing", Eg.clear(), Og = jg().then(() => {
		Dg = "ready";
	}).catch((e) => {
		Dg = "error", t("wfrp4e-customizer-apps | Career indexing failed.", e);
	}), Og);
}
async function Ag(e) {
	return Dg === "idle" && kg(), !e.careerGroup || e.level === null ? [] : [...Eg.values()].filter((t) => Ig(t, e)).sort(Rg);
}
async function jg() {
	Pg(), await Bg();
	for (let e of game.packs ?? []) {
		if (!Fg(e) || !e.getDocuments) continue;
		let t = await e.getDocuments();
		for (let e of t) Sg(e) && e.type === "career" && Eg.set(e.uuid, zg(e));
		await Bg();
	}
}
function Mg(e) {
	return Q(e.system, ["careergroup", "value"]);
}
function Ng(e) {
	let t = Z(e.system, ["level", "value"]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
function Pg() {
	for (let e of game.items?.contents ?? []) e.type === "career" && Eg.set(e.uuid, zg(e));
}
function Fg(e) {
	return e.documentName === "Item";
}
function Ig(e, t) {
	return e.uuid !== t.uuid && e.level !== null && t.level !== null && e.level < t.level && Lg(e.careerGroup) === Lg(t.careerGroup);
}
function Lg(e) {
	return e.trim().toLocaleLowerCase();
}
function Rg(e, t) {
	let n = e.level ?? 0, r = t.level ?? 0;
	return n === r ? e.name.localeCompare(t.name) : n - r;
}
function zg(e) {
	return {
		careerGroup: Mg(e),
		grants: mg(e.system),
		img: e.img ?? "",
		level: Ng(e),
		name: e.name,
		uuid: e.uuid
	};
}
function Bg() {
	return new Promise((e) => {
		globalThis.setTimeout(e, 0);
	});
}
//#endregion
//#region src/module/wfrp4e/skill-specializations.ts
var Vg = /* @__PURE__ */ new Map(), Hg = /* @__PURE__ */ new Map(), Ug = /* @__PURE__ */ new Map(), Wg = "idle", Gg = null;
async function Kg(e) {
	let t = yc(e);
	return t ? (Wg === "idle" && Jg(), Gg && await Gg, [...Vg.get(t) ?? []].sort((e, t) => e.localeCompare(t))) : [];
}
async function qg(e) {
	return Wg === "idle" && Jg(), Gg && await Gg, e.flatMap((e) => {
		let t = Qg(e);
		return t ? [{
			...t,
			skillName: e
		}] : [];
	});
}
function Jg() {
	return Gg || (Wg = "indexing", Vg.clear(), Hg.clear(), Ug.clear(), Gg = Yg().then(() => {
		Wg = "ready";
	}).catch((e) => {
		Wg = "error", t("wfrp4e-customizer-apps | Skill specialization indexing failed.", e);
	}), Gg);
}
async function Yg() {
	$g(), await t_();
	for (let e of game.packs ?? []) {
		if (!e_(e) || !e.getDocuments) continue;
		let t = await e.getDocuments();
		for (let e of t) Sg(e) && Xg(e);
		await t_();
	}
}
function Xg(e) {
	if (e.type !== "skill") return;
	Zg(e);
	let t = gc(e.name);
	if (!t) return;
	let n = yc(t.baseName), r = Vg.get(n) ?? /* @__PURE__ */ new Set();
	r.add(t.specialization), Vg.set(n, r);
}
function Zg(e) {
	let t = Q(e.system, ["characteristic", "value"]);
	if (!nc(t)) return;
	let n = {
		characteristicKey: t,
		characteristicName: ec[t],
		skillName: e.name
	}, r = yc(e.name), i = yc(gc(e.name)?.baseName ?? e.name);
	Hg.set(r, n), Ug.has(i) || Ug.set(i, n);
}
function Qg(e) {
	let t = yc(e), n = yc(gc(e)?.baseName ?? e);
	return Hg.get(t) ?? Ug.get(n) ?? null;
}
function $g() {
	for (let e of game.items?.contents ?? []) Xg(e);
}
function e_(e) {
	return e.documentName === "Item";
}
function t_() {
	return new Promise((e) => {
		globalThis.setTimeout(e, 0);
	});
}
//#endregion
//#region src/module/foundry/item-sources.ts
function n_(e, t) {
	return {
		img: "systems/wfrp4e/icons/blank.png",
		name: e,
		system: {},
		type: t
	};
}
function r_(e, t, n) {
	let r = e ? e.toObject() : n_(t, n);
	return delete r._id, r;
}
function i_(e, t, n) {
	return e.items?.contents.find((e) => e.type === n && s_(e.name, t)) ?? null;
}
function a_(e, t, n) {
	return e.items?.contents.find((e) => t && e.uuid === t ? !0 : s_(e.name, n)) ?? null;
}
function o_(e, t) {
	return game.items?.contents.find((n) => t.includes(n.type) && s_(n.name, e)) ?? null;
}
function s_(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/wfrp4e/item-lookup.ts
async function c_(e, t) {
	return await game.wfrp4e?.utility?.findItem?.(e, t) || o_(e, t);
}
//#endregion
//#region src/module/wfrp4e/talent-maximums.ts
async function l_(e) {
	let t = [];
	for (let n of u_(e)) {
		let e = await c_(n, ["talent"]);
		e && t.push({
			maximumFormula: Q(e.system, ["max", "formula"]),
			maximumKey: Q(e.system, ["max", "value"]),
			talentName: n
		});
	}
	return t;
}
function u_(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.trim().toLocaleLowerCase();
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
//#endregion
//#region src/module/settings/foundry-setting-adapter.ts
function d_(e) {
	return e;
}
function f_(e) {
	game.settings.register(X, e.key, {
		config: e.config ?? !1,
		default: e.defaultValue,
		name: e.name,
		scope: e.scope ?? "world",
		type: Object
	});
}
function p_(e) {
	return e.normalize(game.settings.get(X, e.key));
}
async function m_(e, t) {
	let n = e.normalize(t);
	return await game.settings.set(X, e.key, n), n;
}
//#endregion
//#region src/module/apps/npc-builder/settings.ts
var h_ = "npcBuilderSettings", g_ = Bc(), __ = d_({
	defaultValue: g_,
	key: h_,
	name: "NPC Builder Settings",
	normalize: x_
});
function v_() {
	f_(__);
}
function y_() {
	return p_(__);
}
async function b_(e) {
	return await m_(__, e);
}
function x_(e) {
	if (typeof e != "object" || !e) return { ...g_ };
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
		lowerCareerMode: S_(t.lowerCareerMode) ? t.lowerCareerMode : "prompt",
		outputActorFolderUuid: typeof t.outputActorFolderUuid == "string" ? t.outputActorFolderUuid : "",
		quickTraitFolderUuid: typeof t.quickTraitFolderUuid == "string" ? t.quickTraitFolderUuid : "",
		searchCompendiumPortraitAssets: t.searchCompendiumPortraitAssets ?? !0,
		searchFoundryPortraitAssets: t.searchFoundryPortraitAssets ?? !1,
		searchWebPortraitAssets: t.searchWebPortraitAssets ?? !1
	};
}
function S_(e) {
	return e === "auto-add-all" || e === "never" || e === "prompt";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/advancements.ts
async function C_(e, t) {
	let n = {}, r = [], i = [];
	for (let a of t) {
		let t = Math.floor(a.current);
		if (t === 0) continue;
		let o = a.baseAdvances + t;
		if (a.kind === "characteristic") {
			k_(n, a, o);
			continue;
		}
		let s = i_(e, a.name, a.kind);
		if (s) {
			r.push({
				_id: s.id,
				"system.advances.value": o
			});
			continue;
		}
		let c = r_(await c_(a.name, [a.kind]), a.name, a.kind);
		c.type = a.kind, pg(c, [
			"system",
			"advances",
			"value"
		], o), i.push(c);
	}
	Object.keys(n).length && await e.update(n), r.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", r), i.length && await e.createEmbeddedDocuments("Item", i);
}
function w_(e) {
	let t = [];
	for (let [n, r] of Object.entries(ec)) {
		let i = lg(e.system, [[
			"characteristics",
			n,
			"advances",
			"value"
		], [
			"characteristics",
			n,
			"advances"
		]]), a = lg(e.system, [
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
function T_(e, t) {
	return e.items?.contents.filter((e) => e.type === t).map((n) => E_(e, n, t)) ?? [];
}
function E_(e, t, n) {
	let r = lg(t.system, [["advances", "value"], ["advances"]]);
	if (n === "talent") return {
		baseAdvances: r,
		current: r,
		kind: n,
		name: t.name,
		talentMaximumFormula: Q(t.system, ["max", "formula"]),
		talentMaximumKey: Q(t.system, ["max", "value"])
	};
	let i = D_(t), a = i ? O_(e, i) : 0, o = ug(t.system, [["total", "value"], ["total"]]), s = o !== null && i ? Math.max(0, o - a) : 0, c = Math.max(r, s), l = {
		baseAdvances: c,
		current: i ? a + c : c,
		kind: n,
		name: t.name
	};
	return i && (l.characteristicKey = i, l.characteristicName = ec[i]), l;
}
function D_(e) {
	let t = Q(e.system, ["characteristic", "value"]);
	return nc(t) ? t : void 0;
}
function O_(e, t) {
	return lg(e.system, [
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
function k_(e, t, n) {
	let r = tc[t.name.trim().toLocaleLowerCase()];
	r && (e[`system.characteristics.${r}.advances`] = n);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/drop-data.ts
function A_(e) {
	try {
		return JSON.parse(e);
	} catch {
		throw Error("Foundry drop data could not be read.");
	}
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/config.ts
function j_(e, t) {
	pg(e, [
		"system",
		"specification",
		"value"
	], t.specification), t.rollable && !t.damage && pg(e, [
		"system",
		"rollable",
		"defaultDifficulty"
	], t.defaultDifficulty), t.damage && t.dice && pg(e, [
		"system",
		"rollable",
		"dice"
	], t.dice);
}
function M_(e, t) {
	return {
		_id: e,
		"system.specification.value": t.specification,
		...t.rollable && !t.damage ? { "system.rollable.defaultDifficulty": t.defaultDifficulty } : {},
		...t.damage && t.dice ? { "system.rollable.dice": t.dice } : {}
	};
}
function N_(e) {
	return {
		...rc(),
		attackType: L_(e.system, ["rollable", "attackType"]) || "melee",
		bonusCharacteristic: L_(e.system, ["rollable", "bonusCharacteristic"]),
		damage: dg(e.system, [["rollable", "damage"]]),
		defaultDifficulty: L_(e.system, ["rollable", "defaultDifficulty"]) || "challenging",
		dice: L_(e.system, ["rollable", "dice"]),
		rollable: dg(e.system, [["rollable", "value"]]),
		skill: L_(e.system, ["rollable", "skill"]),
		sl: dg(e.system, [["rollable", "SL"]], !0),
		specification: L_(e.system, ["specification", "value"])
	};
}
function P_(e) {
	return I_(e.system);
}
function F_(e) {
	return I_(e.system);
}
function I_(e) {
	return dg(e, [["disabled"], ["disabled", "value"]]);
}
function L_(e, t) {
	let n = Z(e, t);
	return typeof n == "string" ? n.trim() : typeof n == "number" ? String(n) : "";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/apply.ts
async function R_(e, t) {
	let n = [], r = [], i = [];
	for (let a of t) {
		let t = a.source === "base" ? a_(e, a.sourceUuid, a.name) : i_(e, a.name, "trait");
		if (a.ignored) {
			t && i.push(t.id);
			continue;
		}
		if (t) {
			n.push(M_(t.id, a.config));
			continue;
		}
		let o = r_(a.sourceUuid ? await z_(a.sourceUuid) : await c_(a.name, ["trait"]), a.name, "trait");
		o.type = "trait", pg(o, ["system", "disabled"], !1), j_(o, a.config), r.push(o);
	}
	i.length && e.deleteEmbeddedDocuments && await e.deleteEmbeddedDocuments("Item", i), n.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", n), r.length && await e.createEmbeddedDocuments("Item", r);
}
async function z_(e) {
	let t = await fromUuid(e);
	return Sg(t) ? t : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/actor-traits.ts
function B_(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && !P_(e)).map(U_) ?? [];
}
function V_(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && P_(e)).map(U_) ?? [];
}
function H_(e) {
	Array.isArray(e.items) && (e.items = e.items.filter((e) => {
		if (typeof e != "object" || !e) return !0;
		let t = e;
		return t.type !== "trait" || !F_(t);
	}));
}
function U_(e) {
	return {
		config: N_(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/difficulty-options.ts
var W_ = [
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
async function G_() {
	let e = Z(game.wfrp4e?.config, ["difficultyLabels"]);
	if (!sg(e)) return W_;
	let t = Object.entries(e).filter((e) => {
		let [t, n] = e;
		return !!t.trim() && typeof n == "string";
	}).map(([e, t]) => ({
		label: t,
		value: e
	}));
	return t.length ? t : W_;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/drops.ts
async function K_(e) {
	let t = A_(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Trait item here.");
	let n = Tg(await fromUuid(t.uuid), "trait", "Drop a Foundry Trait item here.");
	return {
		config: N_(n),
		ignored: !1,
		key: `custom:${n.uuid}`,
		name: n.name,
		source: "custom",
		sourceUuid: n.uuid
	};
}
//#endregion
//#region src/functions/npc-builder/recommended-quick-traits.ts
var q_ = [
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
async function J_(e) {
	return tv(await ev(e, "Actor"));
}
async function Y_(e) {
	return tv(await ev(e, "Item"));
}
function X_() {
	return game.folders.contents.filter((e) => e.type === "Actor").map(tv).sort((e, t) => e.name.localeCompare(t.name));
}
function Z_() {
	return game.folders.contents.filter((e) => e.type === "Item").map(tv).sort((e, t) => e.name.localeCompare(t.name));
}
function Q_(e) {
	return e ? game.folders.contents.find((t) => t.uuid === e) ?? null : null;
}
function $_(e) {
	let t = Q_(e);
	return t?.type === "Item" ? t : null;
}
async function ev(e, t) {
	let n = e.trim();
	if (!n) throw Error("Enter a folder name first.");
	let r = game.folders.contents.find((e) => e.type === t && nv(e.name, n));
	if (r) return r;
	let i = await Folder.create({
		name: n,
		type: t
	});
	if (!i) throw Error("Foundry did not create the folder.");
	return i;
}
function tv(e) {
	return {
		name: e.name,
		uuid: e.uuid
	};
}
function nv(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/quick-traits.ts
async function rv(e) {
	let t = $_(e.quickTraitFolderUuid);
	if (!t) throw Error("Choose a Quick Traits item folder before importing traits.");
	let n = new Set(ov(e).map((e) => e.name.trim().toLocaleLowerCase()));
	for (let e of q_) {
		if (n.has(e.trim().toLocaleLowerCase())) continue;
		let r = r_(await c_(e, ["trait"]), e, "trait");
		r.folder = t.id, r.type = "trait", await Item.create(r);
	}
	return ui.notifications?.info("Imported recommended quick traits."), await iv(e);
}
async function iv(e) {
	return ov(e).map(sv).sort((e, t) => e.name.localeCompare(t.name));
}
function av(e, t) {
	return t.quickTraitFolderUuid ? e.folder?.uuid === t.quickTraitFolderUuid : !1;
}
function ov(e) {
	return game.items?.contents.filter((t) => t.type === "trait" && av(t, e)) ?? [];
}
function sv(e) {
	return {
		config: N_(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/trappings.ts
var cv = [
	"ammunition",
	"armour",
	"container",
	"money",
	"trapping",
	"weapon"
];
async function lv(e, t) {
	let n = [], r = [], i = [];
	for (let a of t) {
		let t = a.source === "base" ? a_(e, a.sourceUuid, a.name) : null;
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
		let o = await hv(a), s = a.resolution.selectedItemType || a.itemType || "trapping", c = r_(o, a.resolution.selectedName || a.name, s);
		c.type = s || c.type || "trapping", pg(c, [
			"system",
			"quantity",
			"value"
		], a.quantity), r.push(c);
	}
	i.length && e.deleteEmbeddedDocuments && await e.deleteEmbeddedDocuments("Item", i), n.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", n), r.length && await e.createEmbeddedDocuments("Item", r);
}
async function uv(e) {
	return dl(e, await gv());
}
async function dv(e) {
	let t = A_(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Item here.");
	let n = wg(await fromUuid(t.uuid), "Drop a Foundry Item here.");
	return {
		ignored: !1,
		itemType: n.type,
		key: `custom:${n.uuid}`,
		name: n.name,
		quantity: pv(n),
		resolution: ll({
			itemType: n.type,
			name: n.name,
			uuid: n.uuid
		}),
		source: "custom",
		sourceUuid: n.uuid
	};
}
function fv(e) {
	let t = mv();
	return e.items?.contents.filter((e) => t.includes(e.type)).map((e) => ({
		itemType: e.type,
		name: e.name,
		quantity: pv(e),
		uuid: e.uuid
	})) ?? [];
}
function pv(e) {
	return lg(e.system, [["quantity", "value"], ["quantity"]]) || 1;
}
function mv() {
	let e = cg(game.wfrp4e?.config, ["trappingItems"]);
	return e.length ? e : cv;
}
async function hv(e) {
	if (e.sourceUuid) {
		let t = await fromUuid(e.sourceUuid);
		return Sg(t) ? t : null;
	}
	if (e.resolution.selectedCandidateUuid) {
		let t = await fromUuid(e.resolution.selectedCandidateUuid);
		return Sg(t) ? t : null;
	}
	return e.resolution.status === "fallback" ? null : await c_(e.resolution.selectedName || e.name, mv());
}
async function gv() {
	let e = [], t = mv();
	for (let n of game.items?.contents ?? []) t.includes(n.type) && e.push(bv(n, "World"));
	for (let n of game.packs ?? []) {
		if (!yv(n)) continue;
		let r = await _v(n, t);
		if (r.length) {
			e.push(...r);
			continue;
		}
		if (!n.getDocuments) continue;
		let i = await n.getDocuments();
		for (let r of i) Sg(r) && t.includes(r.type) && e.push(bv(r, n.title ?? "Compendium"));
	}
	return e;
}
async function _v(e, t) {
	return e.getIndex ? ((await e.getIndex({ fields: ["name", "type"] })).contents ?? []).filter((n) => !!(n.name && n.type && vv(e, n) && t.includes(n.type))).map((t) => ({
		itemType: t.type ?? "trapping",
		name: t.name ?? "",
		sourceLabel: e.title ?? "Compendium",
		uuid: vv(e, t)
	})) : [];
}
function vv(e, t) {
	return t.uuid ? t.uuid : t._id && e.getUuid ? e.getUuid(t._id) : "";
}
function yv(e) {
	return e.documentName === "Item";
}
function bv(e, t) {
	return {
		itemType: e.type,
		name: e.name,
		sourceLabel: t,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/actors.ts
function xv(e) {
	return game.actors.contents.filter((t) => Dv(t, e)).map(wv);
}
async function Sv(e) {
	let t = Cg(await fromUuid(e));
	return {
		advancements: [
			...w_(t),
			...T_(t, "skill"),
			...T_(t, "talent")
		],
		optionalTraits: V_(t),
		traits: B_(t),
		trappings: fv(t)
	};
}
async function Cv(e) {
	let t = A_(e);
	if (t.type !== "Actor") throw Error("Drop a Foundry Actor here.");
	let n = null;
	return t.uuid ? n = await fromUuid(t.uuid) : t.id && (n = game.actors.get(t.id)), wv(Cg(n));
}
function wv(e) {
	return {
		img: e.img ?? "",
		name: e.name,
		prototypeTokenImg: Ev(e),
		species: Tv(e),
		type: e.type,
		uuid: e.uuid
	};
}
function Tv(e) {
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
function Ev(e) {
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
function Dv(e, t) {
	return t.baseActorFolderUuid ? e.folder?.uuid === t.baseActorFolderUuid : !0;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/constants.ts
var Ov = "spell", kv = new Set(qc), Av = new Set(Jc);
async function jv() {
	return Mv().map((e) => ({
		category: $c(e.key),
		key: e.key,
		label: e.name,
		value: e.name,
		wind: e.wind
	})).sort((e, t) => e.category === t.category ? e.label.localeCompare(t.label) : e.category.localeCompare(t.category));
}
function Mv() {
	let e = Z(game.wfrp4e?.config, ["magicLores"]), t = Z(game.wfrp4e?.config, ["magicWind"]), n = [];
	if (!sg(e)) return [Iv()];
	for (let [r, i] of Object.entries(e)) {
		let e = Uv(i) || r, a = Hv(t, r);
		n.push({
			key: r,
			matchTerms: Vv(r, e, a),
			name: e,
			wind: a
		});
	}
	return n.some((e) => e.key === "petty") || n.push(Iv()), n;
}
function Nv(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) {
		if (r.isAmbiguous) continue;
		if (r.kind === "petty-magic") {
			let e = Bv("petty magic", t);
			e && n.set(e.key, e);
			continue;
		}
		let e = Bv(r.rawLore, t);
		e && n.set(e.key, e);
	}
	return [...n.values()];
}
function Pv(e, t) {
	let n = [...Fv(e.system), zv(e.name)].filter(Boolean);
	for (let e of n) {
		let n = Rv(e, t);
		if (n) return n;
		let r = Bv(e, t);
		if (r) return r;
	}
	return null;
}
function Fv(e) {
	return [
		...fg(Z(e, ["lore", "value"])),
		...fg(Z(e, ["lore"])),
		...fg(Z(e, ["magicLore", "value"])),
		...fg(Z(e, ["magicLore"])),
		...fg(Z(e, ["category", "value"])),
		...fg(Z(e, [
			"system",
			"lore",
			"value"
		])),
		...fg(Z(e, ["system", "lore"])),
		...fg(Z(e, ["system.lore.value"])),
		...fg(Z(e, ["system.lore"]))
	];
}
function Iv() {
	return {
		key: "petty",
		matchTerms: ["petty", "petty magic"],
		name: "Petty Magic",
		wind: ""
	};
}
function Lv(e) {
	let t = e.trim() || "Unknown Lore";
	return {
		key: Xc(t) || "unknown",
		matchTerms: [t],
		name: t,
		wind: ""
	};
}
function Rv(e, t) {
	let n = Xc(e);
	return n === "lore" ? t.find((e) => e.key !== "petty") ?? null : n === "the eight winds" || n === "eight winds" ? t.find((e) => kv.has(e.key)) ?? null : n === "dark lore" ? t.find((e) => Av.has(e.key)) ?? null : null;
}
function zv(e) {
	return /\(([^)]+)\)\s*$/.exec(e)?.[1]?.trim() ?? "";
}
function Bv(e, t) {
	let n = Xc(e);
	return n ? t.find((e) => e.matchTerms.some((e) => Xc(e) === n)) ?? null : null;
}
function Vv(e, t, n) {
	let r = /* @__PURE__ */ new Set(), i = Xc(e), a = Xc(t);
	for (let i of [
		e,
		t,
		n
	]) i.trim() && r.add(i.trim());
	return (i === "petty" || a === "petty") && r.add("Petty Magic"), (i === "shadow" || a === "shadow") && r.add("Shadows"), t && !/^lore of /i.test(t) && r.add(`Lore of ${t}`), [...r];
}
function Hv(e, t) {
	return sg(e) ? Uv(e[t]) : "";
}
function Uv(e) {
	return typeof e == "string" ? e.trim() : sg(e) ? Q(e, ["name"]) || Q(e, ["label"]) || Q(e, ["value"]) : "";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/debug.ts
var Wv = "[WFRP Customizer Apps][Spell Lookup]";
function $(t, n) {
	if (n) {
		e(`${Wv} ${t}`, n);
		return;
	}
	e(`${Wv} ${t}`);
}
function Gv(e, n) {
	t(`${Wv} ${e}`, n);
}
function Kv(e) {
	return [
		e.title ?? "",
		e.collection ?? "",
		Q(e, ["metadata", "type"]),
		Q(e, ["metadata", "documentName"]),
		e.documentName
	].filter(Boolean).join(" | ");
}
function qv(e) {
	return {
		loreTerms: Fv(e.system),
		name: e.name,
		sourceLabel: e.sourceLabel,
		uuid: e.uuid
	};
}
function Jv(e) {
	return typeof e == "string" ? {
		kind: "uuid-string",
		value: e
	} : sg(e) ? {
		documentName: Q(e, ["documentName"]),
		hasSystem: sg(Z(e, ["system"])),
		loreTerms: Fv(Z(e, ["system"])),
		name: Q(e, ["name"]),
		type: Q(e, ["type"]),
		uuid: Q(e, ["uuid"])
	} : { kind: typeof e };
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/spell-input-conversion.ts
function Yv(e, t) {
	return {
		img: e.img ?? "",
		name: e.name,
		sourceLabel: t,
		system: e.system,
		uuid: e.uuid
	};
}
function Xv(e) {
	return /^item\./i.test(e.uuid) ? "World" : Zv(e.uuid, "WFRP Item Lookup");
}
function Zv(e, t) {
	let n = /^Compendium\.([^.]+\.[^.]+)\./.exec(e)?.[1];
	return n ? [...game.packs ?? []].find((e) => e.collection === n)?.title ?? n : t;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/compendium-spell-inputs.ts
async function Qv(e) {
	if ($("Compendium index scan start", { pack: Kv(e) }), !e.getIndex) return $("Compendium has no index; loading documents", { pack: Kv(e) }), await iy(e);
	let t = ey(await e.getIndex({ fields: [
		"name",
		"type",
		"img",
		"system.lore.value"
	] }));
	if ($("Compendium index loaded", {
		entries: t.length,
		pack: Kv(e),
		samples: t.slice(0, 5).map((t) => ({
			hasLoreTerms: Fv(t).length > 0,
			name: t.name,
			type: t.type,
			uuid: ay(e, t)
		}))
	}), !t.length) return $("Compendium index empty; loading documents", { pack: Kv(e) }), await iy(e);
	let n = t.filter(ny);
	$("Compendium index spell candidates", {
		pack: Kv(e),
		spellEntries: n.length
	});
	let r = n.filter((e) => e.name).map((t) => sy(e, t));
	return r.length || !oy(e) ? r : await iy(e);
}
function $v(e) {
	return e.documentName === "Item" || Q(e, ["metadata", "type"]) === "Item" || Q(e, ["metadata", "documentName"]) === "Item";
}
function ey(e) {
	return Array.isArray(e) ? e.filter(ty) : Array.isArray(e.contents) ? e.contents.filter(ty) : ry(e) ? [...e].flatMap((e) => {
		let t = Array.isArray(e) ? e[1] : e;
		return ty(t) ? [t] : [];
	}) : [];
}
function ty(e) {
	return sg(e);
}
function ny(e) {
	return e.type === "spell" ? !0 : !!(e.name && (Fv(e).length || zv(e.name)));
}
function ry(e) {
	return sg(e) && Symbol.iterator in e;
}
async function iy(e) {
	if (!e.getDocuments) return $("Compendium has no document loader", { pack: Kv(e) }), [];
	$("Compendium document load start", { pack: Kv(e) });
	let t = await e.getDocuments(), n = t.filter((e) => Sg(e) && e.type === "spell");
	return $("Compendium document load complete", {
		documents: t.length,
		pack: Kv(e),
		spellDocuments: n.length,
		spellSamples: n.slice(0, 5).map((e) => ({
			loreTerms: Fv(e.system),
			name: e.name,
			uuid: e.uuid
		}))
	}), n.map((t) => Yv(t, e.title ?? "Compendium"));
}
function ay(e, t) {
	return t.uuid ? t.uuid : t._id && e.getUuid ? e.getUuid(t._id) : "";
}
function oy(e) {
	return e.collection === "wfrp4e-core.items" || e.collection === "wfrp4e-wom.items";
}
function sy(e, t) {
	return {
		img: t.img ?? t.thumb ?? "",
		name: t.name ?? "",
		sourceLabel: e.title ?? "Compendium",
		system: t,
		uuid: ay(e, t)
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/warhammer-spell-inputs.ts
async function cy() {
	let e = uy();
	if (!e) return $("WFRP helper unavailable"), [];
	try {
		let t = await e.findAllItems(Ov, "Loading Spells", !0, ["system.lore.value"]);
		return $("WFRP helper raw result", {
			count: t.length,
			samples: t.slice(0, 10).map(Jv)
		}), (await Promise.all(t.map((e) => ly(e)))).filter((e) => e !== null);
	} catch (e) {
		return Gv("WFRP helper lookup failed.", e), [];
	}
}
async function ly(e) {
	if (typeof e == "string") {
		let t = await fromUuid(e);
		return Sg(t) && t.type === "spell" ? Yv(t, Xv(t)) : null;
	}
	if (Sg(e)) return e.type === "spell" ? Yv(e, Xv(e)) : null;
	if (Q(e, ["type"]) !== "spell") return null;
	let t = Q(e, ["name"]);
	return t ? {
		img: Q(e, ["img"]) || Q(e, ["thumb"]),
		name: t,
		sourceLabel: Zv(Q(e, ["uuid"]), "WFRP Item Lookup"),
		system: Z(e, ["system"]),
		uuid: Q(e, ["uuid"])
	} : null;
}
function uy() {
	let e = Z(globalThis, [
		"warhammer",
		"utility",
		"findAllItems"
	]);
	return typeof e == "function" ? { findAllItems: e } : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/spell-resolution-inputs.ts
async function dy() {
	let e = [], n = [...game.packs ?? []];
	$("Candidate lookup start", {
		itemPacks: n.filter($v).length,
		totalPacks: n.length,
		warhammerUtilityAvailable: !!my(),
		worldItems: game.items?.contents.length ?? 0
	});
	let r = await cy();
	$("WFRP helper lookup complete", {
		utilityInputs: r.length,
		utilitySamples: r.slice(0, 10).map(qv)
	}), e.push(...r), e.push(...fy()), $("World spell scan complete", { worldSpellCount: e.filter((e) => e.sourceLabel === "World").length });
	for (let r of n) if ($v(r)) try {
		let t = await Qv(r);
		e.push(...t), $("Compendium spell scan complete", {
			inputCount: t.length,
			pack: Kv(r),
			samples: t.slice(0, 5).map(qv)
		});
	} catch (e) {
		t(`wfrp4e-customizer-apps | Spell lookup skipped compendium "${r.title ?? r.collection ?? "unknown"}".`, e);
	}
	let i = py(e);
	return $("Candidate lookup complete", {
		rawInputCount: e.length,
		uniqueInputCount: i.length
	}), i;
}
function fy() {
	let e = [];
	for (let t of game.items?.contents ?? []) t.type === "spell" && e.push(Yv(t, "World"));
	return e;
}
function py(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.uuid || n.name.trim().toLocaleLowerCase();
		t.has(e) || t.set(e, n);
	}
	return [...t.values()];
}
function my() {
	return Z(globalThis, [
		"warhammer",
		"utility",
		"findAllItems"
	]);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/index.ts
async function hy(e, t) {
	let n = [];
	for (let r of t) {
		if (!r.selected || i_(e, r.name, "spell")) continue;
		let t = r_(r.sourceUuid ? await vy(r.sourceUuid) : null, r.name, Ov);
		t.type = Ov, n.push(t);
	}
	n.length && await e.createEmbeddedDocuments("Item", n);
}
async function gy(e) {
	let t = Nv(e, Mv());
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
	let n = await dy(), r = /* @__PURE__ */ new Map(), i = [];
	for (let e of n) {
		let n = Pv(e, t);
		if (!n) {
			i.length < 20 && i.push({
				loreTerms: Fv(e.system),
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
async function _y(e) {
	let t = A_(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Spell item here.");
	let n = Tg(await fromUuid(t.uuid), Ov, "Drop a Foundry Spell item here."), r = Pv(Yv(n, "Dropped"), [...Mv(), Iv()]) ?? Lv(Fv(n.system)[0] ?? "");
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
async function vy(e) {
	let t = await fromUuid(e);
	return Sg(t) && t.type === "spell" ? t : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/build-npc.ts
async function yy(e) {
	let t = await Sy(e);
	if (!t) throw Error("Foundry did not create the NPC Actor.");
	let n = Cy(e), r = e.careers.at(-1), i = Ys(e.advancements), a = {
		name: n,
		"prototypeToken.name": n,
		"system.details.gmnotes.value": by(Q(t.system, [
			"details",
			"gmnotes",
			"value"
		]), i)
	}, o = e.portraitPath || r?.img || "";
	return o && (a.img = o, a["prototypeToken.texture.src"] = o), await t.update(a), await C_(t, e.advancements), await R_(t, e.traits), await lv(t, e.trappings), await hy(t, e.spells), t.sheet?.render(!0), ui.notifications?.info(`Created NPC "${n}".`), {
		name: n,
		uuid: t.uuid
	};
}
function by(e, t) {
	let n = xy(e).trim(), r = [
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
function xy(e) {
	return e.replaceAll(/<section data-wfrp-customizer-npc-xp="true">[\S\s]*?<\/section>/g, "");
}
async function Sy(e) {
	let t = Cg(await fromUuid(e.baseActorUuid)).toObject(), n = Q_(e.settings.outputActorFolderUuid);
	return delete t._id, delete t.folder, t.type = "npc", H_(t), n && (t.folder = n.id), await Actor.create(t);
}
function Cy(e) {
	if (!e.settings.includeSpeciesInName) return e.actorName;
	let t = game.actors.contents.find((t) => t.uuid === e.baseActorUuid), n = t ? Tv(t) : "";
	return !n || e.actorName.toLocaleLowerCase().includes(n.toLocaleLowerCase()) ? e.actorName : `${n} ${e.actorName}`;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/careers.ts
async function wy(e) {
	let t = A_(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a WFRP Career item here.");
	return Ty(Tg(await fromUuid(t.uuid), "career", "Drop a WFRP Career item here."));
}
function Ty(e) {
	return {
		careerGroup: Ey(e),
		grants: mg(e.system),
		img: e.img ?? "",
		level: Dy(e),
		name: e.name,
		uuid: e.uuid
	};
}
function Ey(e) {
	return Q(e.system, ["careergroup", "value"]);
}
function Dy(e) {
	let t = Z(e.system, ["level", "value"]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/candidate-utils.ts
function Oy(e, t) {
	let n = t.img.trim().toLocaleLowerCase();
	!n || e.seenPaths.has(n) || (e.seenPaths.add(n), e.candidates.push(t));
}
function ky(e, t) {
	let n = t.imagePaths.filter(({ path: e }) => !!e);
	if (Iy(t.name, n, e.searchTerms)) for (let r of n) Oy(e, {
		img: r.path,
		key: `foundry-asset:${t.sourceKey}:${r.label}`,
		label: `${t.name || Ny(r.path)} ${r.label} (${t.sourceLabel})`,
		source: "foundry-asset"
	});
}
function Ay(e, t, n) {
	e?.({
		candidatesFound: t.candidates.length,
		currentLocation: n.currentLocation,
		directoriesVisited: t.visitedDirectories,
		maxDirectories: n.maxDirectories,
		phase: n.phase
	});
}
function jy(e) {
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
function My(e, t) {
	return `${Ny(e)} (${t})`;
}
function Ny(e) {
	return e.split(/[/\\]/).at(-1) ?? e;
}
function Py(e) {
	return typeof e == "object" && !!e;
}
function Fy(e) {
	return Py(e) && Object.values(e).every((e) => Array.isArray(e) && e.every((e) => typeof e == "string"));
}
function Iy(e, t, n) {
	return jf(e, n) || t.some(({ path: e }) => jf(e, n));
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/dig-down.ts
var Ly = "fuzzy-foundry", Ry = .3, zy = new Set([
	".webp",
	".png",
	".jpg",
	".jpeg",
	".gif"
]);
function By(e, t) {
	let n = Vy();
	if (Ay(t, e, {
		currentLocation: Uy(n),
		maxDirectories: 0,
		phase: "filesystem"
	}), !n.digDownActive || !n.digDownCacheReady) return;
	let r = Ky();
	if (!(!r?._fileIndexCache || !r.fs)) {
		for (let t of Wy(r, e.searchTerms)) Gy(e, r, t);
		Ay(t, e, {
			currentLocation: "Dig Down file cache search complete",
			maxDirectories: 0,
			phase: "filesystem"
		});
	}
}
function Vy() {
	let e = game.modules.get(Ly)?.active === !0, t = Hy(), n = Ky(), r = Object.values(n?._fileIndexCache ?? {}).reduce((e, t) => e + t.length, 0);
	return {
		digDownActive: e,
		digDownCacheReady: !!(n?._fileIndexCache && n.fs),
		digDownDeepFileSearchEnabled: t,
		digDownIndexedFileCount: r
	};
}
function Hy() {
	try {
		return game.settings.get(Ly, "deepFile") === !0;
	} catch {
		return !1;
	}
}
function Uy(e) {
	return e.digDownActive ? e.digDownDeepFileSearchEnabled ? e.digDownCacheReady ? `Dig Down file cache (${e.digDownIndexedFileCount} files)` : "Waiting for Dig Down file cache" : "Dig Down Deep File Search is disabled" : "Dig Down is not active";
}
function Wy(e, t) {
	let n = /* @__PURE__ */ new Set(), r = Object.keys(e._fileIndexCache ?? {});
	for (let i of t) {
		let t = i.toLocaleLowerCase();
		for (let e of r) e.toLocaleLowerCase().includes(t) && n.add(e);
		let a = e.fs?.get(i, [], Ry) ?? [];
		for (let [, e] of a) n.add(e);
	}
	return [...n].sort((e, t) => e.toLocaleLowerCase().localeCompare(t.toLocaleLowerCase()));
}
function Gy(e, t, n) {
	let r = t._fileIndexCache?.[n] ?? [];
	for (let t of r) qy(t) && Oy(e, {
		img: t,
		key: `foundry-asset:${t}`,
		label: My(t, "Dig Down"),
		source: "foundry-asset"
	});
}
function Ky() {
	let e = canvas.deepSearchCache;
	if (!Py(e)) return null;
	let t = e._fileIndexCache, n = e.fs, r = {};
	return Fy(t) && (r._fileIndexCache = t), Py(n) && typeof n.get == "function" && (r.fs = { get: n.get.bind(n) }), r;
}
function qy(e) {
	let t = `.${e.split(/[#?]/)[0]?.split(".").pop() ?? ""}`;
	return zy.has(t.toLocaleLowerCase());
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/documents.ts
function Jy(e, t) {
	Ay(t, e, {
		currentLocation: "World Actors and Items",
		maxDirectories: 0,
		phase: "world-documents"
	});
	for (let t of game.actors.contents) ky(e, {
		imagePaths: [{
			label: "actor image",
			path: t.img ?? ""
		}, {
			label: "token image",
			path: jy(t)
		}],
		name: t.name,
		sourceLabel: "World Actors",
		sourceKey: t.uuid
	});
	for (let t of game.items?.contents ?? []) ky(e, {
		imagePaths: [{
			label: "item image",
			path: t.img ?? ""
		}],
		name: t.name,
		sourceLabel: "World Items",
		sourceKey: t.uuid
	});
}
async function Yy(e, t) {
	Ay(t, e, {
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
		for (let r of n?.contents ?? []) ky(e, {
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
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/index.ts
async function Xy(e, t) {
	let n = Af(e);
	if (!n.length) return [];
	let r = {
		candidates: [],
		maxDirectoryBudget: 0,
		searchTerms: n,
		seenPaths: /* @__PURE__ */ new Set(),
		visitedDirectories: 0
	};
	return e.includeCompendiumAssets && (Jy(r, t), await Yy(r, t)), e.includeFilePickerAssets && By(r, t), Ay(t, r, {
		currentLocation: "Portrait search complete",
		maxDirectories: r.maxDirectoryBudget,
		phase: "ready"
	}), r.candidates;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/index.ts
var Zy = {
	buildNpc: yy,
	ensureActorFolder: J_,
	ensureItemFolder: Y_,
	findLowerCareerCandidates: Ag,
	getPortraitSearchAvailability: async () => Vy(),
	importRecommendedQuickTraits: rv,
	listActorFolders: async () => X_(),
	listBaseActors: async (e) => xv(e),
	listFoundryPortraitCandidates: Xy,
	listMagicLoreOptions: jv,
	listSpellsForMagicGrants: gy,
	listItemFolders: async () => Z_(),
	listQuickTraits: iv,
	listSkillCharacteristics: qg,
	listSkillSpecializations: Kg,
	listTalentMaximums: l_,
	listTraitDifficultyOptions: G_,
	loadBaseActorDraftData: Sv,
	loadSettings: async () => y_(),
	resolveActorDrop: Cv,
	resolveCareerDrop: wy,
	resolveSpellDrop: _y,
	resolveTraitDrop: K_,
	resolveTrapping: uv,
	resolveTrappingDrop: dv,
	saveSettings: b_
}, Qy = class extends og {
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${X}-npc-builder`,
		classes: [X, "wfrp4e-customizer-npc-builder"],
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
		return rg;
	}
	getVueProps() {
		return { bridge: Zy };
	}
}, $y = "wfrp4e-customizer-open-npc-builder";
function eb() {
	Hooks.on("renderActorDirectory", (e, t) => {
		let n = rb(t);
		n && tb(n);
	});
}
function tb(e) {
	if (e.querySelector(`.${$y}`)) return;
	let n = nb(e);
	if (!n) {
		t("wfrp4e-customizer-apps | Could not find Actor Directory button container.");
		return;
	}
	let r = document.createElement("button");
	r.classList.add($y), r.type = "button", r.innerHTML = "<i class=\"fa-solid fa-user-plus\" inert></i><span>NPC Builder App</span>", r.addEventListener("click", () => {
		new Qy().render(!0);
	}), n.append(r);
}
function nb(e) {
	return e.querySelector(".directory-header .header-actions") ?? e.querySelector(".directory-header .action-buttons") ?? e.querySelector(".header-actions") ?? e.querySelector(".action-buttons");
}
function rb(e) {
	return e instanceof HTMLElement ? e : ib(e) && e[0] instanceof HTMLElement ? e[0] : null;
}
function ib(e) {
	return typeof e == "object" && !!e && "length" in e;
}
//#endregion
//#region src/view/apps/workbench/WorkbenchApp.vue?vue&type=script&setup=true&lang.ts
var ab = { class: "customizer-workbench" }, ob = {
	"aria-label": "Customizer targets",
	class: "customizer-workbench__body"
}, sb = { class: "customizer-workbench__targets" }, cb = /* @__PURE__ */ B({
	__name: "WorkbenchApp",
	setup(e) {
		let t = [
			"Actor sheets",
			"Item sheets",
			"Reusable dialogs"
		];
		return (e, n) => (U(), W("main", ab, [n[1] ||= G("header", { class: "customizer-workbench__header" }, [G("p", null, "WFRP4e"), G("h1", null, "Customizer Workbench")], -1), G("section", ob, [G("div", sb, [(U(), W(H, null, V(t, (e) => G("button", {
			key: e,
			disabled: "",
			type: "button"
		}, M(e), 1)), 64))]), n[0] ||= G("div", { class: "customizer-workbench__empty" }, [G("strong", null, "Vue application shell mounted."), G("span", null, "The first customizer surface can land here.")], -1)])]));
	}
}), lb = class extends og {
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${X}-workbench`,
		classes: [X, "wfrp4e-customizer-workbench"],
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
		return cb;
	}
}, ub = `${X}.debugShapeProbes`, db = "wfrp4eCustomizerShapeProbes", fb = "wfrp4eCustomizerShapePreset";
//#endregion
//#region src/module/debug/shape-inspector/utils.ts
function pb(e, t, n) {
	let r = Number(e);
	return Number.isFinite(r) ? Math.max(0, Math.min(n, Math.floor(r))) : t;
}
function mb(e) {
	return typeof e == "object" && !!e;
}
function hb(e) {
	return typeof e == "string" ? e.trim().toLocaleLowerCase() : "";
}
function gb(e) {
	try {
		return localStorage.getItem(e);
	} catch {
		return null;
	}
}
//#endregion
//#region src/module/debug/shape-inspector/path-resolver.ts
function _b(e) {
	let t = Cb(e), n = vb(globalThis, t.root);
	for (let e of t.tokens) {
		if (e.type === "property") {
			n = vb(n, e.key);
			continue;
		}
		if (e.type === "index") {
			n = vb(n, String(e.index));
			continue;
		}
		n = yb(n, e.name, e.args);
	}
	return n;
}
function vb(e, t) {
	if (!(!mb(e) && typeof e != "function")) try {
		return e[t];
	} catch {
		return;
	}
}
function yb(e, t, n) {
	if (t === "at") {
		let t = Number(n[0] ?? 0), r = Number.isFinite(t) ? t : 0;
		return wb(e).at(r);
	}
	if (t === "findByName") {
		let t = hb(n[0] ?? "");
		return wb(e).find((e) => hb(vb(e, "name")) === t);
	}
	if (t === "findByType") {
		let t = hb(n[0] ?? "");
		return wb(e).find((e) => hb(vb(e, "type")) === t);
	}
	if (t === "get") {
		let t = n[0] ?? "";
		if (e instanceof Map) return e.get(t);
		let r = vb(e, "get");
		if (typeof r == "function") return r.call(e, t);
	}
	if (t === "sample") {
		let t = pb(n[0], 3, 60);
		return wb(e).slice(0, t);
	}
	throw Error(`Unsupported path method "${t}".`);
}
function bb(e) {
	return e.trim() ? e.split(",").map((e) => Sb(e.trim())).map(String) : [];
}
function xb(e) {
	let t = e.trim();
	return /^-?\d+$/.test(t) ? Number(t) : Sb(t);
}
function Sb(e) {
	let t = /^["'](?<value>.*)["']$/.exec(e);
	return t?.groups ? t.groups.value ?? "" : e;
}
function Cb(e) {
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
				args: bb(e.groups.args ?? ""),
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
				index: xb(e),
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
function wb(e) {
	if (Array.isArray(e)) return e;
	let t = vb(e, "contents");
	return Array.isArray(t) ? t : [];
}
//#endregion
//#region src/module/debug/shape-inspector/presets.ts
var Tb = { "npc-builder": [
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
function Eb() {
	return window.location.href.includes("wfrp4eCustomizerShapeProbes") || window.location.href.includes("wfrp4eCustomizerShapePreset");
}
function Db(e) {
	let t = {
		hook: e.hook ?? "ready",
		maxDepth: pb(e.maxDepth, 2, 6),
		maxEntries: pb(e.maxEntries, 12, 60),
		path: e.path.trim()
	};
	return e.label && (t.label = e.label), t;
}
function Ob() {
	return [...kb(), ...Ab()].map(Db);
}
function kb() {
	let e = gb(ub);
	if (!e) return [];
	try {
		let t = JSON.parse(e);
		return Array.isArray(t) ? t.filter(Mb).map(Db) : [];
	} catch {
		return [];
	}
}
function Ab() {
	let e = [], t = [new URLSearchParams(window.location.search), new URLSearchParams(window.location.hash.replace(/^#/, ""))];
	for (let n of t) {
		let t = n.get(fb), r = n.get(db);
		t && e.push(...Tb[t] ?? []), r && e.push(...jb(r));
	}
	return window.location.href.includes("wfrp4eCustomizerShapePreset=npc-builder") && !e.length && e.push(...Tb["npc-builder"] ?? []), e;
}
function jb(e) {
	try {
		let t = JSON.parse(decodeURIComponent(e));
		return Array.isArray(t) ? t.filter(Mb) : [];
	} catch (e) {
		return t(`${X} | Could not parse URL shape probes.`, e), [];
	}
}
function Mb(e) {
	return typeof e != "object" || !e ? !1 : "path" in e && typeof e.path == "string";
}
//#endregion
//#region src/module/debug/shape-inspector/summary.ts
function Nb(e, t) {
	return !mb(e) && typeof e != "function" ? Rb(e) : typeof e == "function" ? Ib(e) : Array.isArray(e) ? Pb(e, t) : e instanceof Map ? Fb(e, t) : Lb(e, t);
}
function Pb(e, t) {
	return {
		length: e.length,
		sample: e.slice(0, t.maxEntries).map((e) => Nb(e, Bb(t))),
		type: "array"
	};
}
function Fb(e, t) {
	return {
		sample: [...e.entries()].slice(0, t.maxEntries).map(([e, n]) => ({
			key: Nb(e, Bb(t)),
			value: Nb(n, Bb(t))
		})),
		size: e.size,
		type: "Map"
	};
}
function Ib(e) {
	return {
		name: e.name,
		type: "function"
	};
}
function Lb(e, t) {
	if (t.seen.has(e)) return { type: "circular" };
	t.seen.add(e);
	let n = zb(e, t.maxEntries), r = vb(e, "constructor"), i = {
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
		let n = vb(e, t);
		typeof n == "string" && (i[t] = n);
	}
	if (t.maxDepth <= 0) return i;
	let a = {};
	for (let r of n) a[r] = Nb(vb(e, r), Bb(t));
	i.properties = a;
	let o = vb(e, "toObject");
	if (typeof o == "function") try {
		i.source = Nb(o.call(e), Bb(t));
	} catch (e) {
		i.source = {
			error: e instanceof Error ? e.message : String(e),
			type: "error"
		};
	}
	return i;
}
function Rb(e) {
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
function zb(e, t) {
	return Object.keys(e).sort().slice(0, t);
}
function Bb(e) {
	return {
		maxDepth: e.maxDepth - 1,
		maxEntries: e.maxEntries,
		seen: e.seen
	};
}
//#endregion
//#region src/module/debug/shape-inspector/index.ts
function Vb() {
	localStorage.removeItem(ub), e(`${X} | Cleared debug shape probes.`);
}
function Hb() {
	return Ob();
}
function Ub(e, t = {}) {
	let n = Kb(e, t);
	return Jb(n), n;
}
function Wb() {
	let t = Ob();
	for (let e of ["init", "setup"]) {
		let n = t.filter((t) => t.hook === e);
		n.length && Hooks.once(e, () => {
			for (let t of n) qb(t, e);
		});
	}
	Hooks.once("ready", () => {
		let t = Ob().filter((e) => (e.hook ?? "ready") === "ready");
		Eb() && e(`${X} | Debug shape ready probes discovered: ${t.length}`, window.location.href);
		for (let e of t) qb(e, "ready");
	});
}
function Gb(t) {
	let n = t.map(Db);
	localStorage.setItem(ub, JSON.stringify(n)), e(`${X} | Stored ${n.length} debug shape probe(s). Reload Foundry to run init/setup probes.`);
}
function Kb(e, t = {}, n) {
	let r = pb(t.maxDepth, 2, 6), i = pb(t.maxEntries, 12, 60), a = _b(e), o = {
		inspectedAt: (/* @__PURE__ */ new Date()).toISOString(),
		label: t.label || e,
		maxDepth: r,
		maxEntries: i,
		path: e,
		value: Nb(a, {
			maxDepth: r,
			maxEntries: i,
			seen: /* @__PURE__ */ new WeakSet()
		})
	};
	return n && (o.hook = n), o;
}
function qb(e, n) {
	try {
		Jb(Kb(e.path, e, n));
	} catch (n) {
		t(`${X} | Debug shape probe failed for "${e.path}".`, n);
	}
}
function Jb(t) {
	e(`${X} | Debug shape probe: ${t.label}`, JSON.stringify(t, null, 2));
}
//#endregion
//#region src/module/create-module-api.ts
function Yb() {
	return {
		clearDebugShapeProbes: Vb,
		getDebugShapeProbes: Hb,
		inspectPath: Ub,
		listNpcAutoAdvanceStrategies: Nl,
		openNpcBuilder: async () => {
			await new Qy().render(!0);
		},
		openWorkbench: async () => {
			await new lb().render(!0);
		},
		registerNpcAutoAdvanceStrategy: Ml,
		setDebugShapeProbes: Gb
	};
}
//#endregion
//#region src/module/register-module-menus.ts
function Xb() {
	game.settings.registerMenu(X, "workbench", {
		hint: "Open the WFRP4e Customizer Apps workbench.",
		icon: "fa-solid fa-screwdriver-wrench",
		label: "Open Workbench",
		name: "WFRP4e Customizer Apps",
		restricted: !0,
		type: lb
	}), game.settings.registerMenu(X, "npc-builder", {
		hint: "Build a WFRP4e NPC from a base Actor and Career items.",
		icon: "fa-solid fa-user-plus",
		label: "Open NPC Builder",
		name: "WFRP4e NPC Builder",
		restricted: !0,
		type: Qy
	});
}
//#endregion
//#region src/module/register-module-settings.ts
function Zb() {
	v_();
}
Wb(), Hooks.once("init", () => {
	e(`${X} | Initializing`), Zb(), Xb(), eb();
}), Hooks.once("ready", () => {
	if (game.system.id !== "wfrp4e") {
		t(`${X} | Loaded outside ${ig}; skipping module API registration.`);
		return;
	}
	let n = game.modules.get(X);
	if (!n) {
		t(`${X} | Foundry did not expose the module entry.`);
		return;
	}
	n.api = Yb(), kg(), Jg(), e(`${X} | Ready`);
});
//#endregion
