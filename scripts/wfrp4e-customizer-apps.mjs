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
}, te = /-\w/g, O = D((e) => e.replace(te, (e) => e.slice(1).toUpperCase())), k = /\B([A-Z])/g, ne = D((e) => e.replace(k, "-$1").toLowerCase()), re = D((e) => e.charAt(0).toUpperCase() + e.slice(1)), ie = D((e) => e ? `on${re(e)}` : ""), A = (e, t) => !Object.is(e, t), ae = (e, ...t) => {
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
			let r = e[n], i = v(r) ? me(r) : de(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	} else if (v(e) || b(e)) return e;
}
var fe = /;(?![^(]*\))/g, pe = /:([^]+)/, j = /\/\*[^]*?\*\//g;
function me(e) {
	let t = {};
	return e.replace(j, "").split(fe).forEach((e) => {
		if (e) {
			let n = e.split(pe);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function M(e) {
	let t = "";
	if (v(e)) t = e;
	else if (p(e)) for (let n = 0; n < e.length; n++) {
		let r = M(e[n]);
		r && (t += r + " ");
	}
	else if (b(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var he = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ge = /* @__PURE__ */ n(he);
he + "";
function _e(e) {
	return !!e || e === "";
}
function ve(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = ye(e[r], t[r]);
	return n;
}
function ye(e, t) {
	if (e === t) return !0;
	let n = g(e), r = g(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = y(e), r = y(t), n || r) return e === t;
	if (n = p(e), r = p(t), n || r) return n && r ? ve(e, t) : !1;
	if (n = b(e), r = b(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !ye(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
function be(e, t) {
	return e.findIndex((e) => ye(e, t));
}
var xe = (e) => !!(e && e.__v_isRef === !0), N = (e) => v(e) ? e : e == null ? "" : p(e) || b(e) && (e.toString === S || !_(e.toString)) ? xe(e) ? N(e.value) : JSON.stringify(e, Se, 2) : String(e), Se = (e, t) => xe(t) ? Se(e, t.value) : m(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Ce(t, r) + " =>"] = n, e), {}) } : h(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Ce(e)) } : y(t) ? Ce(t) : b(t) && !p(t) && !T(t) ? String(t) : t, Ce = (e, t = "") => y(e) ? `Symbol(${e.description ?? t})` : e, P, we = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && P && (P.active ? (this.parent = P, this.index = (P.scopes ||= []).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
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
			let t = P;
			try {
				return P = this, e();
			} finally {
				P = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = P, P = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (P === this) P = this.prevScope;
			else {
				let e = P;
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
function Te(e) {
	return new we(e);
}
function Ee() {
	return P;
}
function De(e, t = !1) {
	P && P.cleanups.push(e);
}
var F, Oe = /* @__PURE__ */ new WeakSet(), ke = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, P && (P.active ? P.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Oe.has(this) && (Oe.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ne(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, Ke(this), Ie(this);
		let e = F, t = He;
		F = this, He = !0;
		try {
			return this.fn();
		} finally {
			Le(this), F = e, He = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Be(e);
			this.deps = this.depsTail = void 0, Ke(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Oe.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Re(this) && this.run();
	}
	get dirty() {
		return Re(this);
	}
}, Ae = 0, je, Me;
function Ne(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Me, Me = e;
		return;
	}
	e.next = je, je = e;
}
function Pe() {
	Ae++;
}
function Fe() {
	if (--Ae > 0) return;
	if (Me) {
		let e = Me;
		for (Me = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; je;) {
		let t = je;
		for (je = void 0; t;) {
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
function Ie(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Le(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Be(r), Ve(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Re(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (ze(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function ze(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === qe) || (e.globalVersion = qe, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Re(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = F, r = He;
	F = e, He = !0;
	try {
		Ie(e);
		let n = e.fn(e._value);
		(t.version === 0 || A(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		F = n, He = r, Le(e), e.flags &= -3;
	}
}
function Be(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Be(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ve(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var He = !0, Ue = [];
function We() {
	Ue.push(He), He = !1;
}
function Ge() {
	let e = Ue.pop();
	He = e === void 0 ? !0 : e;
}
function Ke(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = F;
		F = void 0;
		try {
			t();
		} finally {
			F = e;
		}
	}
}
var qe = 0, Je = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, Ye = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!F || !He || F === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== F) t = this.activeLink = new Je(F, this), F.deps ? (t.prevDep = F.depsTail, F.depsTail.nextDep = t, F.depsTail = t) : F.deps = F.depsTail = t, Xe(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = F.depsTail, t.nextDep = void 0, F.depsTail.nextDep = t, F.depsTail = t, F.deps === t && (F.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, qe++, this.notify(e);
	}
	notify(e) {
		Pe();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Fe();
		}
	}
};
function Xe(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) Xe(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var Ze = /* @__PURE__ */ new WeakMap(), Qe = /* @__PURE__ */ Symbol(""), $e = /* @__PURE__ */ Symbol(""), et = /* @__PURE__ */ Symbol("");
function I(e, t, n) {
	if (He && F) {
		let t = Ze.get(e);
		t || Ze.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new Ye()), r.map = t, r.key = n), r.track();
	}
}
function tt(e, t, n, r, i, a) {
	let o = Ze.get(e);
	if (!o) {
		qe++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Pe(), t === "clear") o.forEach(s);
	else {
		let i = p(e), a = i && E(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === et || !y(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(et)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(Qe)), m(e) && s(o.get($e)));
				break;
			case "delete":
				i || (s(o.get(Qe)), m(e) && s(o.get($e)));
				break;
			case "set":
				m(e) && s(o.get(Qe));
				break;
		}
	}
	Fe();
}
function nt(e, t) {
	let n = Ze.get(e);
	return n && n.get(t);
}
function rt(e) {
	let t = /* @__PURE__ */ L(e);
	return t === e ? t : (I(t, "iterate", et), /* @__PURE__ */ Ut(e) ? t : t.map(Kt));
}
function it(e) {
	return I(e = /* @__PURE__ */ L(e), "iterate", et), e;
}
function at(e, t) {
	return /* @__PURE__ */ Ht(e) ? qt(/* @__PURE__ */ Vt(e) ? Kt(t) : t) : Kt(t);
}
var ot = {
	__proto__: null,
	[Symbol.iterator]() {
		return st(this, Symbol.iterator, (e) => at(this, e));
	},
	concat(...e) {
		return rt(this).concat(...e.map((e) => p(e) ? rt(e) : e));
	},
	entries() {
		return st(this, "entries", (e) => (e[1] = at(this, e[1]), e));
	},
	every(e, t) {
		return lt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return lt(this, "filter", e, t, (e) => e.map((e) => at(this, e)), arguments);
	},
	find(e, t) {
		return lt(this, "find", e, t, (e) => at(this, e), arguments);
	},
	findIndex(e, t) {
		return lt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return lt(this, "findLast", e, t, (e) => at(this, e), arguments);
	},
	findLastIndex(e, t) {
		return lt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return lt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return dt(this, "includes", e);
	},
	indexOf(...e) {
		return dt(this, "indexOf", e);
	},
	join(e) {
		return rt(this).join(e);
	},
	lastIndexOf(...e) {
		return dt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return lt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return ft(this, "pop");
	},
	push(...e) {
		return ft(this, "push", e);
	},
	reduce(e, ...t) {
		return ut(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return ut(this, "reduceRight", e, t);
	},
	shift() {
		return ft(this, "shift");
	},
	some(e, t) {
		return lt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return ft(this, "splice", e);
	},
	toReversed() {
		return rt(this).toReversed();
	},
	toSorted(e) {
		return rt(this).toSorted(e);
	},
	toSpliced(...e) {
		return rt(this).toSpliced(...e);
	},
	unshift(...e) {
		return ft(this, "unshift", e);
	},
	values() {
		return st(this, "values", (e) => at(this, e));
	}
};
function st(e, t, n) {
	let r = it(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ Ut(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var ct = Array.prototype;
function lt(e, t, n, r, i, a) {
	let o = it(e), s = o !== e && !/* @__PURE__ */ Ut(e), c = o[t];
	if (c !== ct[t]) {
		let t = c.apply(e, a);
		return s ? Kt(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, at(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function ut(e, t, n, r) {
	let i = it(e), a = i !== e && !/* @__PURE__ */ Ut(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = at(e, t)), n.call(this, t, at(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? at(e, c) : c;
}
function dt(e, t, n) {
	let r = /* @__PURE__ */ L(e);
	I(r, "iterate", et);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Wt(n[0]) ? (n[0] = /* @__PURE__ */ L(n[0]), r[t](...n)) : i;
}
function ft(e, t, n = []) {
	We(), Pe();
	let r = (/* @__PURE__ */ L(e))[t].apply(e, n);
	return Fe(), Ge(), r;
}
var pt = /* @__PURE__ */ n("__proto__,__v_isRef,__isVue"), mt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(y));
function ht(e) {
	y(e) || (e = String(e));
	let t = /* @__PURE__ */ L(this);
	return I(t, "has", e), t.hasOwnProperty(e);
}
var gt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Pt : Nt : i ? Mt : jt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = p(e);
		if (!r) {
			let e;
			if (a && (e = ot[t])) return e;
			if (t === "hasOwnProperty") return ht;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ R(e) ? e : n);
		if ((y(t) ? mt.has(t) : pt(t)) || (r || I(e, "get", t), i)) return o;
		if (/* @__PURE__ */ R(o)) {
			let e = a && E(t) ? o : o.value;
			return r && b(e) ? /* @__PURE__ */ zt(e) : e;
		}
		return b(o) ? r ? /* @__PURE__ */ zt(o) : /* @__PURE__ */ Lt(o) : o;
	}
}, _t = class extends gt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = p(e) && E(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Ht(i);
			if (!/* @__PURE__ */ Ut(n) && !/* @__PURE__ */ Ht(n) && (i = /* @__PURE__ */ L(i), n = /* @__PURE__ */ L(n)), !a && /* @__PURE__ */ R(i) && !/* @__PURE__ */ R(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : f(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ R(e) ? e : r);
		return e === /* @__PURE__ */ L(r) && (o ? A(n, i) && tt(e, "set", t, n, i) : tt(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = f(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && tt(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!y(t) || !mt.has(t)) && I(e, "has", t), n;
	}
	ownKeys(e) {
		return I(e, "iterate", p(e) ? "length" : Qe), Reflect.ownKeys(e);
	}
}, vt = class extends gt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, yt = /* @__PURE__ */ new _t(), bt = /* @__PURE__ */ new vt(), xt = /* @__PURE__ */ new _t(!0), St = (e) => e, Ct = (e) => Reflect.getPrototypeOf(e);
function wt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ L(i), o = m(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, u = i[e](...r), d = n ? St : t ? qt : Kt;
		return !t && I(a, "iterate", c ? $e : Qe), l(Object.create(u), { next() {
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
function Tt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Et(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ L(r), a = /* @__PURE__ */ L(n);
			e || (A(n, a) && I(i, "get", n), I(i, "get", a));
			let { has: o } = Ct(i), s = t ? St : e ? qt : Kt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && I(/* @__PURE__ */ L(t), "iterate", Qe), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ L(n), i = /* @__PURE__ */ L(t);
			return e || (A(t, i) && I(r, "has", t), I(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ L(a), s = t ? St : e ? qt : Kt;
			return !e && I(o, "iterate", Qe), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return l(n, e ? {
		add: Tt("add"),
		set: Tt("set"),
		delete: Tt("delete"),
		clear: Tt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ L(this), r = Ct(n), i = /* @__PURE__ */ L(e), a = !t && !/* @__PURE__ */ Ut(e) && !/* @__PURE__ */ Ht(e) ? i : e;
			return r.has.call(n, a) || A(e, a) && r.has.call(n, e) || A(i, a) && r.has.call(n, i) || (n.add(a), tt(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ Ut(n) && !/* @__PURE__ */ Ht(n) && (n = /* @__PURE__ */ L(n));
			let r = /* @__PURE__ */ L(this), { has: i, get: a } = Ct(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ L(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? A(n, s) && tt(r, "set", e, n, s) : tt(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ L(this), { has: n, get: r } = Ct(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ L(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && tt(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ L(this), t = e.size !== 0, n = e.clear();
			return t && tt(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = wt(r, e, t);
	}), n;
}
function Dt(e, t) {
	let n = Et(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(f(n, r) && r in t ? n : t, r, i);
}
var Ot = { get: /* @__PURE__ */ Dt(!1, !1) }, kt = { get: /* @__PURE__ */ Dt(!1, !0) }, At = { get: /* @__PURE__ */ Dt(!0, !1) }, jt = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), Nt = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap();
function Ft(e) {
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
function It(e) {
	return e.__v_skip || !Object.isExtensible(e) ? 0 : Ft(w(e));
}
/* @__NO_SIDE_EFFECTS__ */
function Lt(e) {
	return /* @__PURE__ */ Ht(e) ? e : Bt(e, !1, yt, Ot, jt);
}
/* @__NO_SIDE_EFFECTS__ */
function Rt(e) {
	return Bt(e, !1, xt, kt, Mt);
}
/* @__NO_SIDE_EFFECTS__ */
function zt(e) {
	return Bt(e, !0, bt, At, Nt);
}
function Bt(e, t, n, r, i) {
	if (!b(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
	let a = It(e);
	if (a === 0) return e;
	let o = i.get(e);
	if (o) return o;
	let s = new Proxy(e, a === 2 ? r : n);
	return i.set(e, s), s;
}
/* @__NO_SIDE_EFFECTS__ */
function Vt(e) {
	return /* @__PURE__ */ Ht(e) ? /* @__PURE__ */ Vt(e.__v_raw) : !!(e && e.__v_isReactive);
}
/* @__NO_SIDE_EFFECTS__ */
function Ht(e) {
	return !!(e && e.__v_isReadonly);
}
/* @__NO_SIDE_EFFECTS__ */
function Ut(e) {
	return !!(e && e.__v_isShallow);
}
/* @__NO_SIDE_EFFECTS__ */
function Wt(e) {
	return e ? !!e.__v_raw : !1;
}
/* @__NO_SIDE_EFFECTS__ */
function L(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ L(t) : e;
}
function Gt(e) {
	return !f(e, "__v_skip") && Object.isExtensible(e) && oe(e, "__v_skip", !0), e;
}
var Kt = (e) => b(e) ? /* @__PURE__ */ Lt(e) : e, qt = (e) => b(e) ? /* @__PURE__ */ zt(e) : e;
/* @__NO_SIDE_EFFECTS__ */
function R(e) {
	return e ? e.__v_isRef === !0 : !1;
}
/* @__NO_SIDE_EFFECTS__ */
function z(e) {
	return Jt(e, !1);
}
function Jt(e, t) {
	return /* @__PURE__ */ R(e) ? e : new Yt(e, t);
}
var Yt = class {
	constructor(e, t) {
		this.dep = new Ye(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ L(e), this._value = t ? e : Kt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Ut(e) || /* @__PURE__ */ Ht(e);
		e = n ? e : /* @__PURE__ */ L(e), A(e, t) && (this._rawValue = e, this._value = n ? e : Kt(e), this.dep.trigger());
	}
};
function B(e) {
	return /* @__PURE__ */ R(e) ? e.value : e;
}
var Xt = {
	get: (e, t, n) => t === "__v_raw" ? e : B(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ R(i) && !/* @__PURE__ */ R(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function Zt(e) {
	return /* @__PURE__ */ Vt(e) ? e : new Proxy(e, Xt);
}
/* @__NO_SIDE_EFFECTS__ */
function Qt(e) {
	let t = p(e) ? Array(e.length) : {};
	for (let n in e) t[n] = nn(e, n);
	return t;
}
var $t = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = y(t) ? t : String(t), this._raw = /* @__PURE__ */ L(e);
		let r = !0, i = e;
		if (!p(e) || y(this._key) || !E(this._key)) do
			r = !/* @__PURE__ */ Wt(i) || /* @__PURE__ */ Ut(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = B(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ R(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ R(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return nt(this._raw, this._key);
	}
}, en = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
/* @__NO_SIDE_EFFECTS__ */
function tn(e, t, n) {
	return /* @__PURE__ */ R(e) ? e : _(e) ? new en(e) : b(e) && arguments.length > 1 ? nn(e, t, n) : /* @__PURE__ */ z(e);
}
function nn(e, t, n) {
	return new $t(e, t, n);
}
var rn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new Ye(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = qe - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && F !== this) return Ne(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return ze(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
/* @__NO_SIDE_EFFECTS__ */
function an(e, t, n = !1) {
	let r, i;
	return _(e) ? r = e : (r = e.get, i = e.set), new rn(r, i, n);
}
var on = {}, sn = /* @__PURE__ */ new WeakMap(), cn = void 0;
function ln(e, t = !1, n = cn) {
	if (n) {
		let t = sn.get(n);
		t || sn.set(n, t = []), t.push(e);
	}
}
function un(e, t, n = r) {
	let { immediate: i, deep: o, once: s, scheduler: c, augmentJob: l, call: d } = n, f = (e) => o ? e : /* @__PURE__ */ Ut(e) || o === !1 || o === 0 ? dn(e, 1) : dn(e), m, h, g, v, y = !1, b = !1;
	if (/* @__PURE__ */ R(e) ? (h = () => e.value, y = /* @__PURE__ */ Ut(e)) : /* @__PURE__ */ Vt(e) ? (h = () => f(e), y = !0) : p(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Vt(e) || /* @__PURE__ */ Ut(e)), h = () => e.map((e) => {
		if (/* @__PURE__ */ R(e)) return e.value;
		if (/* @__PURE__ */ Vt(e)) return f(e);
		if (_(e)) return d ? d(e, 2) : e();
	})) : h = _(e) ? t ? d ? () => d(e, 2) : e : () => {
		if (g) {
			We();
			try {
				g();
			} finally {
				Ge();
			}
		}
		let t = cn;
		cn = m;
		try {
			return d ? d(e, 3, [v]) : e(v);
		} finally {
			cn = t;
		}
	} : a, t && o) {
		let e = h, t = o === !0 ? Infinity : o;
		h = () => dn(e(), t);
	}
	let x = Ee(), S = () => {
		m.stop(), x && x.active && u(x.effects, m);
	};
	if (s && t) {
		let e = t;
		t = (...t) => {
			e(...t), S();
		};
	}
	let C = b ? Array(e.length).fill(on) : on, w = (e) => {
		if (!(!(m.flags & 1) || !m.dirty && !e)) if (t) {
			let e = m.run();
			if (o || y || (b ? e.some((e, t) => A(e, C[t])) : A(e, C))) {
				g && g();
				let n = cn;
				cn = m;
				try {
					let n = [
						e,
						C === on ? void 0 : b && C[0] === on ? [] : C,
						v
					];
					C = e, d ? d(t, 3, n) : t(...n);
				} finally {
					cn = n;
				}
			}
		} else m.run();
	};
	return l && l(w), m = new ke(h), m.scheduler = c ? () => c(w, !1) : w, v = (e) => ln(e, !1, m), g = m.onStop = () => {
		let e = sn.get(m);
		if (e) {
			if (d) d(e, 4);
			else for (let t of e) t();
			sn.delete(m);
		}
	}, t ? i ? w(!0) : C = m.run() : c ? c(w.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function dn(e, t = Infinity, n) {
	if (t <= 0 || !b(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ R(e)) dn(e.value, t, n);
	else if (p(e)) for (let r = 0; r < e.length; r++) dn(e[r], t, n);
	else if (h(e) || m(e)) e.forEach((e) => {
		dn(e, t, n);
	});
	else if (T(e)) {
		for (let r in e) dn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && dn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function fn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		mn(e, t, n);
	}
}
function pn(e, t, n, r) {
	if (_(e)) {
		let i = fn(e, t, n, r);
		return i && x(i) && i.catch((e) => {
			mn(e, t, n);
		}), i;
	}
	if (p(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(pn(e[a], t, n, r));
		return i;
	}
}
function mn(e, t, n, i = !0) {
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
			We(), fn(o, null, 10, [
				e,
				i,
				a
			]), Ge();
			return;
		}
	}
	hn(e, n, a, i, s);
}
function hn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var gn = [], _n = -1, vn = [], yn = null, bn = 0, xn = /* @__PURE__ */ Promise.resolve(), Sn = null;
function Cn(e) {
	let t = Sn || xn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function wn(e) {
	let t = _n + 1, n = gn.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = gn[r], a = An(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Tn(e) {
	if (!(e.flags & 1)) {
		let t = An(e), n = gn[gn.length - 1];
		!n || !(e.flags & 2) && t >= An(n) ? gn.push(e) : gn.splice(wn(t), 0, e), e.flags |= 1, En();
	}
}
function En() {
	Sn ||= xn.then(jn);
}
function Dn(e) {
	p(e) ? vn.push(...e) : yn && e.id === -1 ? yn.splice(bn + 1, 0, e) : e.flags & 1 || (vn.push(e), e.flags |= 1), En();
}
function On(e, t, n = _n + 1) {
	for (; n < gn.length; n++) {
		let t = gn[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			gn.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
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
		for (_n = 0; _n < gn.length; _n++) {
			let e = gn[_n];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), fn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; _n < gn.length; _n++) {
			let e = gn[_n];
			e && (e.flags &= -2);
		}
		_n = -1, gn.length = 0, kn(e), Sn = null, (gn.length || vn.length) && jn(e);
	}
}
var Mn = null, Nn = null;
function Pn(e) {
	let t = Mn;
	return Mn = e, Nn = e && e.type.__scopeId || null, t;
}
function Fn(e, t = Mn, n) {
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
	if (Mn === null) return e;
	let n = Ra(Mn), i = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [a, o, s, c = r] = t[e];
		a && (_(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && dn(o), i.push({
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
		c && (We(), pn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Ge());
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
	u.call = (e, t, n) => pn(e, p, t, n);
	let m = !1;
	s === "post" ? u.scheduler = (e) => {
		Li(e, p && p.suspense);
	} : s !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : Tn(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = un(e, t, u);
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
			let o = /* @__PURE__ */ L(e), { mode: s } = o;
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
		e && pn(e, r, 9, t);
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
	let s = i.shapeFlag & 4 ? Ra(i.component) : i.el, c = a ? null : s, { i: l, r: d } = e, m = t && t.r, h = l.refs === r ? l.refs = {} : l.refs, g = l.setupState, y = /* @__PURE__ */ L(g), b = g === r ? o : (e) => dr(h, e) ? !1 : f(y, e), x = (e, t) => !(t && dr(h, t));
	if (m != null && m !== d) {
		if (mr(t), v(m)) h[m] = null, b(m) && (g[m] = null);
		else if (/* @__PURE__ */ R(m)) {
			let e = t;
			x(m, e.k) && (m.value = null), e.k && (h[e.k] = null);
		}
	}
	if (_(d)) fn(d, l, 12, [c, h]);
	else {
		let t = v(d), r = /* @__PURE__ */ R(d);
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
			We();
			let i = Ea(n), a = pn(t, n, e, r);
			return i(), Ge(), a;
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
		let n = o && /* @__PURE__ */ Vt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ Ut(e), s = /* @__PURE__ */ Ht(e), e = it(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? qt(Kt(e[n])) : Kt(e[n]) : e[n], n, void 0, a && a[n]);
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
	if (Mn.ce || Mn.parent && hr(Mn.parent) && Mn.parent.ce) {
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
		Tn(e.update);
	},
	$nextTick: (e) => e.n ||= Cn.bind(e.proxy),
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
		if (u) return t === "$attrs" && I(e.attrs, "get", ""), u(e);
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
	let { data: i, computed: o, methods: s, watch: c, provide: l, inject: u, created: d, beforeMount: f, mounted: m, beforeUpdate: h, updated: g, activated: v, deactivated: y, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: w, render: T, renderTracked: E, renderTriggered: ee, errorCaptured: D, serverPrefetch: te, expose: O, inheritAttrs: k, components: ne, directives: re, filters: ie } = t;
	if (u && Ur(u, r, null), s) for (let e in s) {
		let t = s[e];
		_(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		b(t) && (e.data = /* @__PURE__ */ Lt(t));
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
	T && e.render === a && (e.render = T), k != null && (e.inheritAttrs = k), ne && (e.components = ne), re && (e.directives = re), te && ur(e);
}
function Ur(e, t, n = a) {
	p(e) && (e = Zr(e));
	for (let n in e) {
		let r = e[n], i;
		i = b(r) ? "default" in r ? Rn(r.from || n, r.default, !0) : Rn(r.from || n) : Rn(r), /* @__PURE__ */ R(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Wr(e, t, n) {
	pn(p(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
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
				s && (pn(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
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
var ai = null, oi = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${O(t)}Modifiers`] || e[`${ne(t)}Modifiers`];
function si(e, t, ...n) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || r, a = n, o = t.startsWith("update:"), s = o && oi(i, t.slice(7));
	s && (s.trim && (a = n.map((e) => v(e) ? e.trim() : e)), s.number && (a = n.map(se)));
	let c, l = i[c = ie(t)] || i[c = ie(O(t))];
	!l && o && (l = i[c = ie(ne(t))]), l && pn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, pn(u, e, 6, a);
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
	return !e || !s(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), f(e, t[0].toLowerCase() + t.slice(1)) || f(e, ne(t)) || f(e, t));
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
		$i.length = 0, mn(t, e, 1), v = q(Zi);
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
	return n === "style" && b(r) && b(i) ? !ye(r, i) : r !== i;
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
	n ? e.props = r ? i : /* @__PURE__ */ Rt(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function Ci(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ L(i), [c] = e.propsOptions, l = !1;
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
		for (let a in s) (!t || !f(t, a) && ((r = ne(a)) === a || !f(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Ti(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !f(t, e)) && (delete a[e], l = !0);
	}
	l && tt(e.attrs, "set", "");
}
function wi(e, t, n, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (t) for (let r in t) {
		if (ee(r)) continue;
		let l = t[r], u;
		a && f(a, u = O(r)) ? !o || !o.includes(u) ? n[u] = l : (c ||= {})[u] = l : di(e.emitsOptions, r) || (!(r in i) || l !== i[r]) && (i[r] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ L(n), i = c || r;
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
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === ne(n)) && (r = !0));
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
		e && !sa(e, t) && (r = ge(e), pe(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
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
				ne(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? re(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, ye);
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
			if (u & 16) k(l, m, h, n, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let r = e[t], i = m[r], o = h[r];
					(o !== i || r === "value") && c(l, r, i, o, a, n);
				}
			}
			u & 1 && e.children !== t.children && p(l, t.children);
		} else !s && d == null && k(l, m, h, n, a);
		((g = h.onVnodeUpdated) || f) && Li(() => {
			g && va(g, n, t, e), f && In(t, e, n, "updated");
		}, i);
	}, O = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === U || !sa(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
		}
	}, k = (e, t, n, i, a) => {
		if (t !== n) {
			if (t !== r) for (let r in t) !ee(r) && !(r in n) && c(e, r, t[r], null, a, i);
			for (let r in n) {
				if (ee(r)) continue;
				let o = n[r], s = t[r];
				o !== s && r !== "value" && c(e, r, s, o, a, i);
			}
			"value" in n && c(e, "value", t.value, n.value, a);
		}
	}, ne = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), D(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (O(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Ui(e, t, !0)) : ce(e, t, n, f, i, a, s, c, l);
	}, re = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ie(t, n, r, i, a, o, c) : A(e, t, c);
	}, ie = (e, t, n, r, i, a, o) => {
		let s = e.component = xa(e, r, i);
		if (gr(e) && (s.ctx.renderer = ye), Aa(s, !1, o), s.asyncDep) {
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
				e.subTree = f, v(p, f, m(p.el), ge(p), e, i, a), t.el = f.el, u === null && vi(e, f.el), r && Li(r, i), (d = t.props && t.props.onVnodeUpdated) && Li(() => va(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = hr(t);
				if (Vi(e, !1), l && ae(l), !m && (o = c && c.onVnodeBeforeMount) && va(o, d, t), Vi(e, !0), s && xe) {
					let t = () => {
						e.subTree = fi(e), xe(s, e.subTree, e, i, null);
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
		let c = e.effect = new ke(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Tn(u), Vi(e, !0), l();
	}, se = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Ci(e, t.props, r, n), Ii(e, t.children, n), We(), On(e), Ge();
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
		m & 8 ? (u & 16 && he(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? de(l, d, n, r, i, a, o, s, c) : he(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && D(d, n, r, i, a, o, s, c));
	}, le = (e, t, n, r, a, o, s, c, l) => {
		e ||= i, t ||= i;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let r = t[p] = l ? ha(t[p]) : ma(t[p]);
			v(e[p], r, n, null, a, o, s, c, l);
		}
		u > d ? he(e, a, o, !0, !1, f) : D(t, n, r, a, o, s, c, l, f);
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
			c.move(e, t, n, ye);
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
		if (d === -2 && (i = !1), s != null && (We(), pr(s, null, n, e, !0), Ge()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !hr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && va(_, t, e), u & 6) M(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && In(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, ye, r) : l && !l.hasOnce && (a !== U || d > 0 && d & 64) ? he(l, t, n, !1, !0) : (a === U && d & 384 || !i && u & 16) && he(c, t, n), r && j(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Li(() => {
			_ && va(_, t, e), h && In(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, j = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === U) {
			me(n, r);
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
	}, me = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, M = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Ki(c), Ki(l), r && ae(r), i.stop(), a && (a.flags |= 8, pe(o, e, t, n)), s && Li(s, t), Li(() => {
			e.isUnmounted = !0;
		}, t);
	}, he = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) pe(e[o], t, n, r, i);
	}, ge = (e) => {
		if (e.shapeFlag & 6) return ge(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Kn];
		return n ? h(n) : t;
	}, _e = !1, ve = (e, t, n) => {
		let r;
		e == null ? t._vnode && (pe(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, _e ||= (_e = !0, On(r), kn(), !1);
	}, ye = {
		p: v,
		um: pe,
		m: fe,
		r: j,
		mt: ie,
		mc: D,
		pc: ce,
		pbc: O,
		n: ge,
		o: e
	}, be, xe;
	return t && ([be, xe] = t(ye)), {
		render: ve,
		hydrate: be,
		createApp: ii(ve, be)
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
	t && t.pendingBranch ? p(e) ? t.effects.push(...e) : t.effects.push(e) : Dn(e);
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
var ca = ({ key: e }) => e ?? null, la = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : v(e) || /* @__PURE__ */ R(e) || _(e) ? {
	i: Mn,
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
		ctx: Mn
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
		e && !v(e) && (t.class = M(e)), b(n) && (/* @__PURE__ */ Wt(n) && !p(n) && (n = l({}, n)), t.style = de(n));
	}
	let o = v(e) ? 1 : Ji(e) ? 128 : qn(e) ? 64 : b(e) ? 4 : _(e) ? 2 : 0;
	return K(e, t, n, r, i, o, a, !0);
}
function da(e) {
	return e ? /* @__PURE__ */ Wt(e) || xi(e) ? l({}, e) : e : null;
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
		!r && !xi(t) ? t._ctx = Mn : r === 3 && Mn && (Mn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else _(t) ? (t = {
		default: t,
		_ctx: Mn
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [pa(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function _a(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = M([t.class, r.class]));
		else if (e === "style") t.style = de([t.style, r.style]);
		else if (s(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(p(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !c(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function va(e, t, n, r = null) {
	pn(e, t, 7, [n, r]);
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
		scope: new we(!0),
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
var Sa = null, Ca = () => Sa || Mn, wa, Ta;
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
		We();
		let n = e.setupContext = r.length > 1 ? La(e) : null, i = Ea(e), a = fn(r, e, 0, [e.props, n]), o = x(a);
		if (Ge(), i(), (o || e.sp) && !hr(e) && ur(e), o) {
			if (a.then(Da, Da), t) return a.then((n) => {
				Ma(e, n, t);
			}).catch((t) => {
				mn(t, e, 0);
			});
			e.asyncDep = a;
		} else Ma(e, a, t);
	} else Fa(e, t);
}
function Ma(e, t, n) {
	_(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : b(t) && (e.setupState = Zt(t)), Fa(e, n);
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
		We();
		try {
			Hr(e);
		} finally {
			Ge(), t();
		}
	}
}
var Ia = { get(e, t) {
	return I(e, "get", ""), e[t];
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
	return e.exposed ? e.exposeProxy ||= new Proxy(Zt(Gt(e.exposed)), {
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
var Y = (e, t) => /* @__PURE__ */ an(e, t, ka);
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
		Co.test(n) ? e.setProperty(ne(r), n.replace(Co, ""), "important") : e[r] = n;
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
function Ao(e, t, n, r, i, a = ge(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ko, t.slice(6, t.length)) : e.setAttributeNS(ko, t, n) : n == null || a && !_e(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : y(n) ? String(n) : n);
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
		r === "boolean" ? n = _e(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
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
	return [e[2] === ":" ? e.slice(3) : ne(e.slice(2)), t];
}
var Ro = 0, zo = /* @__PURE__ */ Promise.resolve(), Bo = () => Ro ||= (zo.then(() => Ro = 0), Date.now());
function Vo(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		pn(Ho(e, n.value), t, 5, [e]);
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
				let e = be(t, n), a = e !== -1;
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
	if (p(t)) i = be(t, r.props.value) > -1;
	else if (h(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = ye(t, is(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var ts = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = h(t);
		Mo(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? se(rs(e)) : rs(e));
			e[Xo](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, Cn(() => {
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
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = be(t, o) > -1;
			} else a.selected = t.has(o);
			else if (ye(rs(a), t)) {
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
		let r = ne(n.key);
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
	let e = Te(!0), t = e.run(() => /* @__PURE__ */ z({})), n = [], r = [], i = Gt({
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
	return !n && Ee() && De(i), i;
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
		bs(i) && bs(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ R(r) && !/* @__PURE__ */ Vt(r) ? e[n] = Vs(i, r) : e[n] = r;
	}
	return e;
}
var Hs = Symbol();
function Us(e) {
	return !bs(e) || !Object.prototype.hasOwnProperty.call(e, Hs);
}
var { assign: Ws } = Object;
function Gs(e) {
	return !!(/* @__PURE__ */ R(e) && e.effect);
}
function Ks(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), Ws(/* @__PURE__ */ Qt(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Gt(Y(() => {
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
		Cn().then(() => {
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
	}, y = /* @__PURE__ */ Lt({
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
	let b = (r._a && r._a.runWithContext || Rs)(() => r._e.run(() => (o = Te()).run(() => t({ action: v }))));
	for (let t in b) {
		let n = b[t];
		/* @__PURE__ */ R(n) && !Gs(n) || /* @__PURE__ */ Vt(n) ? a || (p && Us(n) && (/* @__PURE__ */ R(n) ? n.value = p[t] : Vs(n, p[t])), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = v(n, t), s.actions[t] = n);
	}
	return Ws(y, b), Ws(/* @__PURE__ */ L(y), b), Object.defineProperty(y, "$state", {
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
	let t = /* @__PURE__ */ L(e), n = {};
	for (let r in t) {
		let i = t[r];
		i.effect ? n[r] = Y({
			get: () => e[r],
			set(t) {
				e[r] = t;
			}
		}) : (/* @__PURE__ */ R(i) || /* @__PURE__ */ Vt(i)) && (n[r] = /* @__PURE__ */ tn(e, r));
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
//#region src/state/npc-builder-store.ts
var jc = Zs(), Mc = {
	advancements: [],
	optionalTraits: [],
	traits: [],
	trappings: []
}, Nc = 5;
function Pc(e, t) {
	return `${e}:${Rc(t)}`;
}
function Fc(e) {
	let t = Number(e.level ?? 1);
	return Number.isFinite(t) ? Math.max(1, Math.floor(t)) * Nc : Nc;
}
function Ic(e) {
	return e.level === null ? `${e.name} level baseline` : `${e.name} level ${e.level} baseline`;
}
function Lc(e, t) {
	return e === "characteristic" ? t.allowBaseActorCharacteristics : e === "skill" ? t.allowBaseActorSkills : t.allowBaseActorTalents;
}
function Rc(e) {
	return e.trim().toLocaleLowerCase();
}
function zc(e) {
	return Number.isFinite(e) ? Math.max(1, Math.floor(e)) : 1;
}
function Bc(e, t) {
	return {
		...Xs(),
		...e,
		...t
	};
}
function Vc(e) {
	return e === "auto-add-all" || e === "never" || e === "prompt";
}
function Hc(e) {
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
		lowerCareerMode: Vc(e.lowerCareerMode) ? e.lowerCareerMode : "prompt",
		outputActorFolderUuid: typeof e.outputActorFolderUuid == "string" ? e.outputActorFolderUuid : "",
		quickTraitFolderUuid: typeof e.quickTraitFolderUuid == "string" ? e.quickTraitFolderUuid : "",
		searchCompendiumPortraitAssets: e.searchCompendiumPortraitAssets ?? !0,
		searchFoundryPortraitAssets: e.searchFoundryPortraitAssets ?? !0,
		searchWebPortraitAssets: e.searchWebPortraitAssets ?? !1
	};
}
var Uc = Js("npc-builder", () => {
	let e = /* @__PURE__ */ z(""), t = /* @__PURE__ */ z([]), n = /* @__PURE__ */ z({}), r = /* @__PURE__ */ z({ ...Mc }), i = /* @__PURE__ */ z([]), a = /* @__PURE__ */ z([]), o = /* @__PURE__ */ z([]), s = /* @__PURE__ */ z([]), c = /* @__PURE__ */ z([]), l = /* @__PURE__ */ z([]), u = /* @__PURE__ */ z(""), d = /* @__PURE__ */ z({ ...jc }), f = /* @__PURE__ */ z(""), p = /* @__PURE__ */ z({}), m = /* @__PURE__ */ z([]), h = /* @__PURE__ */ z([]), g = /* @__PURE__ */ z({}), _ = /* @__PURE__ */ z({}), v = /* @__PURE__ */ z({}), y = /* @__PURE__ */ z({}), b = /* @__PURE__ */ z({}), x = Y(() => i.value.find((e) => e.uuid === f.value) ?? null), S = Y(() => a.value.at(-1) ?? null), C = Y(() => {
		let e = S.value?.name, t = d.value.includeSpeciesInName && x.value?.species ? x.value.species : "";
		return e && t ? `${t} ${e}` : e || (x.value ? `${x.value.name} NPC` : "New NPC");
	}), w = Y(() => e.value.trim() || C.value), T = Y(() => S.value?.img || x.value?.prototypeTokenImg || x.value?.img || ""), E = Y(() => u.value || T.value), ee = Y(() => {
		let e = {
			characteristics: 0,
			skills: 0,
			talents: 0,
			trappings: 0
		};
		for (let t of a.value) e.characteristics += t.grants.characteristics.length * t.quantity, e.skills += t.grants.skills.length * t.quantity, e.talents += t.grants.talents.length * t.quantity, e.trappings += t.grants.trappings.length * t.quantity;
		return e;
	}), D = Y(() => {
		let e = /* @__PURE__ */ new Map();
		for (let t of r.value.advancements) {
			let n = Pc(t.kind, t.name);
			e.set(n, {
				baseAdvances: t.baseAdvances,
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
		return se(e, "characteristic"), se(e, "skill"), se(e, "talent"), [...e.values()].filter((e) => e.includedFromCareer || Lc(e.kind, d.value)).map((e) => {
			let t = Pc(e.kind, e.name), r = n.value[t] ?? e.careerValue;
			return {
				...e,
				current: Math.max(0, Math.floor(r))
			};
		}).sort((e, t) => e.kind === t.kind ? e.name.localeCompare(t.name) : e.kind.localeCompare(t.kind));
	}), te = Y(() => {
		let e = /* @__PURE__ */ new Map();
		if (d.value.allowBaseActorTrappings) for (let t of r.value.trappings) e.set(`base:${t.uuid || Rc(t.name)}`, {
			ignored: !1,
			itemType: t.itemType,
			key: `base:${t.uuid || Rc(t.name)}`,
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
			let r = `career:${Rc(n)}`, i = e.get(r);
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
				resolution: b.value[r] ?? bc(n),
				source: "career",
				sourceUuid: ""
			});
		}
		for (let t of s.value) e.set(t.key, { ...t });
		return [...e.values()].map((e) => {
			let t = y.value[e.key];
			return {
				...e,
				ignored: t?.ignored ?? e.ignored,
				quantity: zc(t?.quantity ?? e.quantity),
				resolution: b.value[e.key] ?? e.resolution
			};
		}).sort((e, t) => e.source === t.source ? e.name.localeCompare(t.name) : e.source.localeCompare(t.source));
	}), O = Y(() => {
		let e = /* @__PURE__ */ new Map();
		if (d.value.allowBaseActorTraits) for (let t of r.value.traits) {
			let n = `base:${t.uuid || Rc(t.name)}`;
			e.set(n, {
				config: t.config,
				ignored: !1,
				key: n,
				name: t.name,
				source: "base",
				sourceUuid: t.uuid
			});
		}
		for (let t of o.value) Ye(e, t.name) || e.set(t.key, { ...t });
		return [...e.values()].map((e) => ({
			...e,
			config: Bc(e.config, v.value[e.key])
		})).sort((e, t) => e.source === t.source ? e.name.localeCompare(t.name) : e.source.localeCompare(t.source));
	}), k = Y(() => {
		let e = /* @__PURE__ */ new Map();
		for (let t of D.value) {
			if (t.kind !== "talent" || t.current <= 0) continue;
			let n = tc(t.name, "talent");
			n && e.set(n.resolutionKey, Je(n));
		}
		for (let t of O.value) {
			let n = tc(t.name, "trait");
			n && e.set(n.resolutionKey, Je(n));
		}
		return [...e.values()];
	}), ne = Y(() => k.value.length > 0), re = Y(() => {
		let e = /* @__PURE__ */ new Map();
		for (let t of m.value) e.set(t.key, {
			...t,
			selected: _.value[t.key] ?? d.value.autoSelectGrantedSpells
		});
		for (let t of h.value) e.set(t.key, {
			...t,
			selected: _.value[t.key] ?? t.selected
		});
		return [...e.values()].sort((e, t) => e.loreName === t.loreName ? e.name.localeCompare(t.name) : e.loreName.localeCompare(t.loreName));
	}), ie = Y(() => re.value.filter((e) => e.selected)), A = Y(() => [...r.value.optionalTraits].map((e) => ({
		config: e.config,
		img: e.img,
		name: e.name,
		uuid: e.uuid
	})).sort((e, t) => e.name.localeCompare(t.name)));
	function ae(e) {
		let t = a.value.find((t) => t.uuid === e.uuid);
		if (t) {
			t.quantity = zc(t.quantity + 1);
			return;
		}
		a.value.push({
			...e,
			quantity: 1
		});
	}
	function oe(e) {
		return a.value.some((t) => t.uuid === e.uuid) ? !1 : (a.value.push({
			...e,
			quantity: 1
		}), !0);
	}
	function se(e, t) {
		if (t === "talent") {
			le(e);
			return;
		}
		ce(e, t);
	}
	function ce(e, t) {
		let n = /* @__PURE__ */ new Map();
		for (let e of a.value) {
			let r = M(we(e, t)), i = Fc(e) / Nc, a = Math.max(0, zc(e.quantity) - 1) * Nc;
			for (let o of r) {
				let r = Pc(t, o), s = n.get(r);
				if (s) {
					i > s.highestLevel && (s.highestLevel = i, s.highestLevelSource = Ic(e)), a > 0 && s.extraSources.push({
						count: a,
						label: `${e.name} extra time`
					});
					continue;
				}
				n.set(r, {
					extraSources: de(e.name, a),
					highestLevel: i,
					highestLevelSource: Ic(e),
					name: o
				});
			}
		}
		for (let r of n.values()) ue(e, {
			careerValue: r.highestLevel * Nc + fe(r.extraSources),
			kind: t,
			name: r.name,
			sources: [{
				count: r.highestLevel * Nc,
				label: r.highestLevelSource
			}, ...r.extraSources]
		});
	}
	function le(e) {
		let t = /* @__PURE__ */ new Map();
		for (let e of a.value) {
			let n = M(we(e, "talent")), r = Math.max(0, zc(e.quantity) - 1);
			for (let i of n) {
				let n = Pc("talent", i), a = t.get(n);
				if (a) {
					r > 0 && a.extraSources.push({
						count: r,
						label: `${e.name} extra time`
					});
					continue;
				}
				t.set(n, {
					extraSources: de(e.name, r),
					firstSource: `${e.name} first instance`,
					name: i
				});
			}
		}
		for (let n of t.values()) ue(e, {
			careerValue: 1 + fe(n.extraSources),
			kind: "talent",
			name: n.name,
			sources: [{
				count: 1,
				label: n.firstSource
			}, ...n.extraSources]
		});
	}
	function ue(e, t) {
		let n = Pc(t.kind, t.name), r = e.get(n);
		if (r) {
			r.careerValue = t.careerValue, r.includedFromCareer = !0, r.sources = t.sources;
			return;
		}
		e.set(n, {
			baseAdvances: 0,
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
	function de(e, t) {
		return t <= 0 ? [] : [{
			count: t,
			label: `${e} extra time`
		}];
	}
	function fe(e) {
		let t = 0;
		for (let n of e) t += n.count;
		return t;
	}
	function pe(e) {
		s.value.some((t) => t.key === e.key) || s.value.push(e);
	}
	function j(e) {
		let t = Ge(e.name), n = We(e.name);
		if (n) {
			Re(n, !0);
			return;
		}
		if (t) {
			Le(t, !0);
			return;
		}
		Be(e);
	}
	function me(e) {
		let t = m.value.find((t) => qe(t, e));
		if (t) {
			_.value[t.key] = !0;
			return;
		}
		h.value.some((t) => t.key === e.key) || h.value.push({
			...e,
			selected: !0
		});
	}
	function M(e) {
		let t = /* @__PURE__ */ new Set(), n = [];
		for (let r of e) {
			let e = Rc(r);
			!e || t.has(e) || (t.add(e), n.push(r));
		}
		return n;
	}
	function he() {
		r.value = {
			advancements: [],
			optionalTraits: [],
			traits: [],
			trappings: []
		}, n.value = {}, v.value = {}, y.value = {}, b.value = {};
	}
	function ge(e) {
		return p.value[e] ?? "";
	}
	function _e(e) {
		r.value = {
			advancements: [...e.advancements],
			optionalTraits: [...e.optionalTraits],
			traits: [...e.traits],
			trappings: [...e.trappings]
		}, n.value = {}, v.value = {}, y.value = {};
	}
	function ve(e) {
		i.value = [...e].sort((e, t) => e.name.localeCompare(t.name)), f.value && !i.value.some((e) => e.uuid === f.value) && (f.value = "", he());
	}
	function ye(e) {
		d.value = Hc(e);
	}
	function be(e) {
		t.value = [...e].sort((e, t) => e.name.localeCompare(t.name)), d.value.baseActorFolderUuid && !t.value.some((e) => e.uuid === d.value.baseActorFolderUuid) && (d.value.baseActorFolderUuid = ""), d.value.outputActorFolderUuid && !t.value.some((e) => e.uuid === d.value.outputActorFolderUuid) && (d.value.outputActorFolderUuid = "");
	}
	function xe(e) {
		c.value = [...e].sort((e, t) => e.name.localeCompare(t.name)), d.value.quickTraitFolderUuid && !c.value.some((e) => e.uuid === d.value.quickTraitFolderUuid) && (d.value.quickTraitFolderUuid = "");
	}
	function N(e) {
		l.value = [...e].sort((e, t) => e.name.localeCompare(t.name));
	}
	function Se(e) {
		m.value = e.map((e) => ({
			...e,
			selected: _.value[e.key] ?? d.value.autoSelectGrantedSpells
		}));
	}
	function Ce(e, t) {
		let n = e + t, r = a.value[e];
		!r || n < 0 || n >= a.value.length || (a.value.splice(e, 1), a.value.splice(n, 0, r));
	}
	function P(e, t) {
		let n = a.value[e];
		!n || e === t || t < 0 || t >= a.value.length || (a.value.splice(e, 1), a.value.splice(t, 0, n));
	}
	function we(e, t) {
		return t === "characteristic" ? e.grants.characteristics : t === "skill" ? mc(e.uuid, e.grants.skills).map((e) => p.value[e.resolutionKey] || e.originalName) : e.grants.talents;
	}
	function Te(e) {
		let [t] = a.value.splice(e, 1);
		t && I(t.uuid);
	}
	function Ee(e) {
		s.value = s.value.filter((t) => t.key !== e), delete y.value[e], delete b.value[e];
	}
	function De(e) {
		o.value = o.value.filter((t) => t.key !== e), delete v.value[e];
	}
	function F(e) {
		h.value = h.value.filter((t) => t.key !== e), delete _.value[e];
	}
	function Oe() {
		e.value = "", a.value = [], o.value = [], s.value = [], h.value = [], m.value = [], g.value = {}, u.value = "", p.value = {}, _.value = {}, f.value = "", he();
	}
	function ke(e) {
		i.value.some((t) => t.uuid === e.uuid) || i.value.push(e), Ae(e.uuid);
	}
	function Ae(e) {
		let t = e.trim();
		f.value !== t && (u.value = ""), f.value = t;
	}
	function je(e) {
		u.value = e;
	}
	function Me(e, t) {
		let r = Pc(e.kind, e.name), i = Number.isFinite(t) ? t : 0;
		n.value[r] = Math.max(0, Math.floor(i));
	}
	function Ne(e) {
		let t = Pc(e.kind, e.name);
		delete n.value[t];
	}
	function Pe() {
		n.value = {};
	}
	function Fe(e, t) {
		let n = a.value[e];
		n && (n.quantity = zc(t));
	}
	function Ie(e, t) {
		let n = t.trim();
		if (!n) {
			delete p.value[e];
			return;
		}
		p.value[e] = n;
	}
	function Le(e, t) {
		ze("quick", e, t);
	}
	function Re(e, t) {
		ze("optional", e, t);
	}
	function ze(e, t, n) {
		let r = `${e}:${t.uuid || Rc(t.name)}`;
		if (!n) {
			De(r);
			return;
		}
		o.value.find((e) => e.key === r) || Be({
			config: t.config,
			ignored: !1,
			key: r,
			name: t.name,
			source: e,
			sourceUuid: t.uuid
		});
	}
	function Be(e) {
		O.value.some((t) => Ke(t.name, e.name)) || o.value.some((t) => t.key === e.key) || o.value.push(e);
	}
	function Ve(e, t) {
		v.value[e] = {
			...v.value[e],
			...t
		};
	}
	function He(e, t) {
		_.value[e] = t;
	}
	function Ue(e, t) {
		let n = t.trim();
		if (!n) {
			delete g.value[e];
			return;
		}
		g.value[e] = n;
	}
	function We(e) {
		return A.value.find((t) => Ke(t.name, e));
	}
	function Ge(e) {
		return l.value.find((t) => Ke(t.name, e));
	}
	function Ke(e, t) {
		return Rc(e) === Rc(t);
	}
	function qe(e, t) {
		return e.sourceUuid && e.sourceUuid === t.sourceUuid ? !0 : Ke(e.name, t.name);
	}
	function Je(e) {
		let t = g.value[e.resolutionKey];
		return t ? ic(e, t) : e;
	}
	function Ye(e, t) {
		return [...e.values()].some((e) => Ke(e.name, t));
	}
	function Xe(e, t) {
		y.value[e] = {
			...y.value[e],
			ignored: t
		};
	}
	function Ze(e, t) {
		y.value[e] = {
			...y.value[e],
			quantity: zc(t)
		};
	}
	function Qe(e, t) {
		let n = te.value.find((t) => t.key === e), r = n?.resolution.candidates.find((e) => e.uuid === t);
		!n || !r || (b.value[e] = {
			...n.resolution,
			selectedCandidateUuid: r.uuid,
			selectedItemType: r.itemType,
			selectedName: r.name,
			status: n.resolution.status === "matched" ? "matched" : "ambiguous"
		});
	}
	function $e(e) {
		let t = te.value.find((t) => t.key === e);
		if (!t) return;
		let n = vc(t.name, t.itemType);
		b.value[e] = {
			...n,
			candidates: t.resolution.candidates,
			searchTerms: t.resolution.searchTerms
		};
	}
	function et(e, t) {
		b.value[e] = t;
	}
	function I(e) {
		let t = `${e}:`;
		for (let e of Object.keys(p.value)) e.startsWith(t) && delete p.value[e];
	}
	return {
		actorName: e,
		actorFolders: t,
		addCareer: ae,
		addCareerIfMissing: oe,
		addCustomSpell: me,
		addCustomTrait: j,
		addCustomTrapping: pe,
		advancements: D,
		baseActorDraftData: r,
		baseActors: i,
		careers: a,
		clearBaseDraftData: he,
		customSpells: h,
		customTraits: o,
		customTrappings: s,
		finalActorName: w,
		finalCareer: S,
		finalPortraitPath: E,
		grantTotals: ee,
		hasMagicAccess: ne,
		getSkillGrantResolution: ge,
		hydrateActorFolders: be,
		hydrateBaseActorDraftData: _e,
		hydrateBaseActors: ve,
		hydrateItemFolders: xe,
		hydrateDetectedSpells: Se,
		hydrateQuickTraits: N,
		hydrateSettings: ye,
		itemFolders: c,
		magicGrants: k,
		magicLoreResolutions: g,
		moveCareer: Ce,
		moveCareerToIndex: P,
		optionalTraits: A,
		quickTraits: l,
		removeCareer: Te,
		removeCustomSpell: F,
		removeCustomTrait: De,
		removeCustomTrapping: Ee,
		resetDraft: Oe,
		resetAdvancementCurrent: Ne,
		resetAllAdvancementCurrents: Pe,
		selectBaseActor: ke,
		selectBaseActorUuid: Ae,
		selectPortrait: je,
		selectTrappingResolutionCandidate: Qe,
		selectedBaseActor: x,
		selectedBaseActorUuid: f,
		selectedPortraitPath: u,
		setAdvancementCurrent: Me,
		setCareerQuantity: Fe,
		setMagicGrantLoreResolution: Ue,
		setTrappingFallback: $e,
		setOptionalTraitSelected: Re,
		setQuickTraitSelected: Le,
		setSkillGrantResolution: Ie,
		setSpellSelected: He,
		setTraitConfig: Ve,
		setTrappingIgnored: Xe,
		setTrappingQuantity: Ze,
		setTrappingResolution: et,
		settings: d,
		selectedSpells: ie,
		suggestedActorName: C,
		spells: re,
		traits: O,
		trappings: te
	};
}), Wc = { class: "sub-view__header" }, Gc = /* @__PURE__ */ lr({
	__name: "SubView",
	props: {
		open: { type: Boolean },
		title: {}
	},
	emits: ["close"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ z(null), a = /* @__PURE__ */ z(null), o = null, s = 0;
		Hn(() => n.open, async (e) => {
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
		return (t, n) => (W(), aa(to, { name: "sub-view" }, {
			default: Fn(() => [e.open ? (W(), G("section", {
				key: 0,
				ref_key: "rootElement",
				ref: a,
				class: "sub-view",
				role: "dialog",
				"aria-modal": "true"
			}, [K("div", Wc, [K("h2", null, N(e.title), 1), K("button", {
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
}), Kc = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, qc = /* @__PURE__ */ Kc(Gc, [["__scopeId", "data-v-2a7b49f7"]]), Jc = { class: "npc-builder__stack" }, Yc = { class: "npc-builder__panel" }, Xc = {
	key: 0,
	class: "npc-builder__panel-actions"
}, Zc = { class: "npc-builder__table" }, Qc = { class: "npc-builder__advance-controls" }, $c = ["disabled", "onClick"], el = [
	"aria-label",
	"value",
	"onInput"
], tl = ["onClick"], nl = ["disabled", "onClick"], rl = { class: "npc-builder__panel" }, il = { class: "npc-builder__table" }, al = {
	key: 0,
	class: "npc-builder__badge"
}, ol = { class: "npc-builder__advance-controls" }, sl = ["disabled", "onClick"], cl = [
	"aria-label",
	"value",
	"onInput"
], ll = ["onClick"], ul = ["disabled", "onClick"], dl = { class: "npc-builder__panel" }, fl = { class: "npc-builder__table" }, pl = { class: "npc-builder__advance-controls" }, ml = ["disabled", "onClick"], hl = [
	"aria-label",
	"value",
	"onInput"
], gl = ["onClick"], _l = ["disabled", "onClick"], vl = /* @__PURE__ */ lr({
	__name: "NpcBuilderAdvancementsTab",
	setup(e) {
		let t = Uc(), { advancements: n } = Ys(t), r = Y(() => n.value.filter((e) => e.kind === "characteristic")), i = Y(() => n.value.filter((e) => e.kind === "skill")), a = Y(() => n.value.filter((e) => e.kind === "talent")), o = Y(() => n.value.filter((e) => e.current !== e.careerValue).length);
		function s(e, n) {
			let r = e.current + n * u(e);
			t.setAdvancementCurrent(e, r);
		}
		function c(e) {
			return e.sources.length ? e.sources.map((e) => `${e.label} +${e.count}`).join(", ") : e.includedFromBase ? "Base actor" : "-";
		}
		function l(e) {
			return pc(e) !== null;
		}
		function u(e) {
			return e.kind === "talent" ? 1 : 5;
		}
		function d(e) {
			t.resetAdvancementCurrent(e);
		}
		function f(e, n) {
			let r = n.target;
			r && t.setAdvancementCurrent(e, Number(r.value));
		}
		return (e, n) => (W(), G("section", Jc, [
			K("section", Yc, [
				n[2] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "1"), K("h2", null, "Characteristics")], -1),
				o.value ? (W(), G("div", Xc, [K("span", null, N(o.value) + " manual edits", 1), K("button", {
					type: "button",
					onClick: n[0] ||= (e) => B(t).resetAllAdvancementCurrents()
				}, " Reset All Advances ")])) : J("", !0),
				K("div", Zc, [n[1] ||= K("div", { class: "npc-builder__table-head" }, [
					K("span", null, "Name"),
					K("span", null, "Base"),
					K("span", null, "Career"),
					K("span", null, "Apply"),
					K("span", null, "Sources")
				], -1), (W(!0), G(U, null, H(r.value, (e) => (W(), G("div", {
					key: `${e.kind}:${e.name}`,
					class: M(["npc-builder__advance-row", { "is-edited": e.current !== e.careerValue }])
				}, [
					K("strong", null, N(e.name), 1),
					K("span", null, N(e.baseValue), 1),
					K("span", null, N(e.careerValue), 1),
					K("div", Qc, [
						K("button", {
							disabled: e.current <= 0,
							title: "Decrease by 5",
							type: "button",
							onClick: (t) => s(e, -1)
						}, " -5 ", 8, $c),
						K("input", {
							"aria-label": `Apply ${e.name} advances`,
							value: e.current,
							min: "0",
							type: "number",
							onInput: (t) => f(e, t)
						}, null, 40, el),
						K("button", {
							title: "Increase by 5",
							type: "button",
							onClick: (t) => s(e, 1)
						}, " +5 ", 8, tl),
						K("button", {
							disabled: e.current === e.careerValue,
							title: "Reset to career value",
							type: "button",
							onClick: (t) => d(e)
						}, " Reset ", 8, nl)
					]),
					K("span", null, N(c(e)), 1)
				], 2))), 128))])
			]),
			K("section", rl, [n[4] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "2"), K("h2", null, "Skills")], -1), K("div", il, [n[3] ||= K("div", { class: "npc-builder__table-head" }, [
				K("span", null, "Name"),
				K("span", null, "Base"),
				K("span", null, "Career"),
				K("span", null, "Apply"),
				K("span", null, "Sources")
			], -1), (W(!0), G(U, null, H(i.value, (e) => (W(), G("div", {
				key: `${e.kind}:${e.name}`,
				class: M(["npc-builder__advance-row", { "is-edited": e.current !== e.careerValue }])
			}, [
				K("strong", null, [pa(N(e.name) + " ", 1), l(e.name) ? (W(), G("span", al, " Needs specialization ")) : J("", !0)]),
				K("span", null, N(e.baseValue), 1),
				K("span", null, N(e.careerValue), 1),
				K("div", ol, [
					K("button", {
						disabled: e.current <= 0,
						title: "Decrease by 5",
						type: "button",
						onClick: (t) => s(e, -1)
					}, " -5 ", 8, sl),
					K("input", {
						"aria-label": `Apply ${e.name} advances`,
						value: e.current,
						min: "0",
						type: "number",
						onInput: (t) => f(e, t)
					}, null, 40, cl),
					K("button", {
						title: "Increase by 5",
						type: "button",
						onClick: (t) => s(e, 1)
					}, " +5 ", 8, ll),
					K("button", {
						disabled: e.current === e.careerValue,
						title: "Reset to career value",
						type: "button",
						onClick: (t) => d(e)
					}, " Reset ", 8, ul)
				]),
				K("span", null, N(c(e)), 1)
			], 2))), 128))])]),
			K("section", dl, [n[6] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "3"), K("h2", null, "Talents")], -1), K("div", fl, [n[5] ||= K("div", { class: "npc-builder__table-head" }, [
				K("span", null, "Name"),
				K("span", null, "Base"),
				K("span", null, "Career"),
				K("span", null, "Apply"),
				K("span", null, "Sources")
			], -1), (W(!0), G(U, null, H(a.value, (e) => (W(), G("div", {
				key: `${e.kind}:${e.name}`,
				class: M(["npc-builder__advance-row", { "is-edited": e.current !== e.careerValue }])
			}, [
				K("strong", null, N(e.name), 1),
				K("span", null, N(e.baseValue), 1),
				K("span", null, N(e.careerValue), 1),
				K("div", pl, [
					K("button", {
						disabled: e.current <= 0,
						title: "Decrease by 1",
						type: "button",
						onClick: (t) => s(e, -1)
					}, " -1 ", 8, ml),
					K("input", {
						"aria-label": `Apply ${e.name} ranks`,
						value: e.current,
						min: "0",
						type: "number",
						onInput: (t) => f(e, t)
					}, null, 40, hl),
					K("button", {
						title: "Increase by 1",
						type: "button",
						onClick: (t) => s(e, 1)
					}, " +1 ", 8, gl),
					K("button", {
						disabled: e.current === e.careerValue,
						title: "Reset to career value",
						type: "button",
						onClick: (t) => d(e)
					}, " Reset ", 8, _l)
				]),
				K("span", null, N(c(e)), 1)
			], 2))), 128))])])
		]));
	}
}), yl = new Set([
	"and",
	"any",
	"the",
	"with",
	"without",
	"of",
	"or",
	"npc"
]);
function bl(e) {
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
	}), Tl(t);
}
function xl(e, t) {
	let n = El(e);
	return n ? t.some((e) => El(e.img) === n) : !1;
}
function Sl(e) {
	let t = [];
	for (let n of e.careers) t.push(n.name, n.careerGroup);
	return e.selectedBaseActor && t.push(e.selectedBaseActor.name, e.selectedBaseActor.species), Al(t.flatMap((e) => kl(e)).filter((e) => e.length >= 3 && !yl.has(e)));
}
function Cl(e, t) {
	return wl(Dl(e), t);
}
function wl(e, t) {
	let n = Ol(e);
	return n ? t.some((e) => n.includes(e)) : !1;
}
function Tl(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.img.trim().toLocaleLowerCase();
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
function El(e) {
	return e.trim().toLocaleLowerCase();
}
function Dl(e) {
	return (e.split(/[\\/]/).at(-1) ?? e).replace(/\.[^.]+$/, "");
}
function Ol(e) {
	return e.trim().toLocaleLowerCase().replace(/[_-]/g, " ").replace(/[()[\],.;:]/g, " ").replace(/\s+/g, " ");
}
function kl(e) {
	let t = Ol(e);
	return [t, ...t.split(" ")].filter(Boolean);
}
function Al(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/view/components/DocumentDrop.vue?vue&type=script&setup=true&lang.ts
var jl = ["onKeydown"], Ml = { key: 0 }, Nl = { class: "document-drop__actions" }, Pl = /* @__PURE__ */ Kc(/* @__PURE__ */ lr({
	__name: "DocumentDrop",
	props: {
		description: {},
		title: {},
		variant: {}
	},
	emits: ["dropData"],
	setup(e, { emit: t }) {
		let n = t, r = /* @__PURE__ */ z(!1), i = /* @__PURE__ */ z(!1), a = /* @__PURE__ */ z(!1), o = /* @__PURE__ */ z("auto"), s = /* @__PURE__ */ z("");
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
			class: M(["document-drop", {
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
			K("strong", null, N(e.title), 1),
			e.description ? (W(), G("span", Ml, N(e.description), 1)) : J("", !0),
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
				K("div", Nl, [
					n[8] ||= K("button", { type: "submit" }, "Use", -1),
					K("button", {
						type: "button",
						onClick: p
					}, N(a.value ? "Waiting..." : "Pick Next Click"), 1),
					K("button", {
						type: "button",
						onClick: d
					}, "Cancel")
				])
			], 32)) : J("", !0)
		], 42, jl));
	}
}), [["__scopeId", "data-v-da8b737a"]]), Fl = { class: "npc-builder__layout" }, Il = { class: "npc-builder__column" }, Ll = { class: "npc-builder__panel" }, Rl = { class: "npc-builder__field-grid" }, zl = { class: "npc-builder__field" }, Bl = { class: "npc-builder__field" }, Vl = ["disabled"], Hl = { value: "" }, Ul = ["value"], Wl = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, Gl = {
	key: 1,
	class: "npc-builder__source"
}, Kl = { class: "npc-builder__thumbnail" }, ql = ["src"], Jl = { key: 1 }, Yl = { class: "npc-builder__panel" }, Xl = {
	key: 0,
	class: "npc-builder__careers"
}, Zl = [
	"onDragenter",
	"onDragover",
	"onDrop"
], Ql = ["onDragstart"], $l = { class: "npc-builder__thumbnail" }, eu = ["src"], tu = { key: 1 }, nu = { class: "npc-builder__career-copy" }, ru = ["title"], iu = ["value", "onInput"], au = { class: "npc-builder__career-actions" }, ou = ["disabled", "onClick"], su = ["disabled", "onClick"], cu = ["onClick"], lu = {
	key: 1,
	class: "npc-builder__empty"
}, uu = { class: "npc-builder__summary" }, du = { class: "npc-builder__preview" }, fu = ["disabled"], pu = ["src"], mu = { key: 1 }, hu = { key: 2 }, gu = {
	key: 0,
	class: "npc-builder__portrait-path"
}, _u = { key: 0 }, vu = ["title"], yu = {
	key: 1,
	class: "npc-builder__portrait-gallery"
}, bu = { key: 0 }, xu = { key: 1 }, Su = {
	key: 0,
	class: "npc-builder__portrait-progress"
}, Cu = ["value"], wu = { class: "npc-builder__portrait-strip" }, Tu = [
	"aria-label",
	"title",
	"onClick"
], Eu = ["src"], Du = { class: "npc-builder__field" }, Ou = ["placeholder"], ku = {
	key: 2,
	class: "npc-builder__quick-traits"
}, Au = ["onClick"], ju = {
	key: 3,
	class: "npc-builder__quick-traits"
}, Mu = ["onClick"], Nu = { class: "npc-builder__build-preview" }, Pu = { class: "npc-builder__build-preview-heading" }, Fu = { class: "npc-builder__preview-grid" }, Iu = { key: 0 }, Lu = { key: 0 }, Ru = { key: 1 }, zu = {
	key: 0,
	class: "npc-builder__warnings"
}, Bu = { key: 1 }, Vu = { class: "npc-builder__portrait-gallery-view" }, Hu = { class: "npc-builder__portrait-gallery-summary" }, Uu = { key: 0 }, Wu = { key: 1 }, Gu = { class: "npc-builder__portrait-grid" }, Ku = ["title", "onClick"], qu = { class: "npc-builder__portrait-grid-image" }, Ju = ["src"], Yu = /* @__PURE__ */ lr({
	__name: "NpcBuilderBuildTab",
	props: {
		bridge: {},
		isLoadingActors: { type: Boolean },
		isLoadingBaseDraft: { type: Boolean }
	},
	emits: ["careerDrop"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Uc(), { actorName: a, advancements: o, baseActors: s, careers: c, finalActorName: l, finalCareer: u, finalPortraitPath: d, grantTotals: f, optionalTraits: p, quickTraits: m, selectedBaseActor: h, selectedBaseActorUuid: g, selectedPortraitPath: _, selectedSpells: v, settings: y, suggestedActorName: b, traits: x, trappings: S } = Ys(i), C = /* @__PURE__ */ z(""), w = /* @__PURE__ */ z([]), T = /* @__PURE__ */ z(null), E = /* @__PURE__ */ z(null), ee = /* @__PURE__ */ z(""), D = /* @__PURE__ */ z(!1), te = /* @__PURE__ */ z(!1), O = /* @__PURE__ */ z(null), k = 0, ne = Y(() => {
			let e = C.value.trim().toLocaleLowerCase();
			return e ? s.value.filter((t) => t.name.toLocaleLowerCase().includes(e)) : s.value;
		}), re = Y({
			get: () => g.value,
			set: (e) => {
				i.selectBaseActorUuid(e);
			}
		}), ie = Y(() => {
			let e = new Set(p.value.map((e) => P(e.name)));
			return m.value.filter((t) => !e.has(P(t.name)));
		}), A = Y(() => {
			let e = 0;
			for (let t of c.value) e += t.quantity;
			return e;
		}), ae = Y(() => S.value.filter((e) => !e.ignored)), oe = Y(() => o.value.filter((e) => e.current !== e.careerValue).length), se = Y(() => ae.value.filter((e) => e.resolution.status === "fallback").length), ce = Y(() => S.value.filter((e) => e.ignored).length), le = Y(() => o.value.filter((e) => e.kind === "skill" && pc(e.name) !== null).length), ue = Y(() => ae.value.filter((e) => e.resolution.status === "unresolved").length), de = Y(() => {
			let e = [];
			return h.value || e.push("Choose a base Actor before building."), c.value.length || e.push("No Careers are queued."), le.value && e.push(`${le.value} skill rows still need a specialization.`), ue.value && e.push(`${ue.value} trappings have no item resolution yet.`), d.value || e.push("No portrait is selected."), e;
		}), fe = Y(() => de.value.length ? "Review" : "Ready"), pe = Y(() => bl({
			careers: c.value,
			selectedBaseActor: h.value
		})), j = Y(() => Tl([...pe.value, ...w.value])), me = Y(() => j.value.slice(0, 10)), he = Y(() => Math.max(0, j.value.length - me.value.length)), ge = Y(() => j.value.find((e) => e.img === d.value)?.key ?? ""), _e = Y(() => j.value.find((e) => e.img === d.value) ?? null), ve = Y(() => {
			let e = O.value;
			return e ? e.maxDirectories <= 0 ? e.phase === "ready" ? 100 : 4 : Math.min(100, Math.round(e.directoriesVisited / e.maxDirectories * 100)) : 0;
		}), ye = Y(() => {
			let e = O.value;
			return e ? e.phase === "ready" ? `${e.candidatesFound} options found` : e.phase === "filesystem" ? e.maxDirectories <= 0 ? `${e.directoriesVisited} directories - ${e.currentLocation}` : `${e.directoriesVisited}/${e.maxDirectories} directories - ${e.currentLocation}` : e.currentLocation : "";
		});
		Hn(() => [
			h.value?.uuid ?? "",
			y.value.searchCompendiumPortraitAssets,
			y.value.searchFoundryPortraitAssets,
			c.value.map((e) => e.uuid).join("|")
		], () => {
			Ie();
		}, { immediate: !0 }), Hn([
			j,
			_,
			te
		], () => {
			_.value && !te.value && !xl(_.value, j.value) && i.selectPortrait("");
		}, { immediate: !0 });
		function be(e) {
			return Se(e);
		}
		function xe(e) {
			return Se(e);
		}
		function Se(e) {
			return x.value.some((t) => Ce(t.name, e.name));
		}
		function Ce(e, t) {
			return P(e) === P(t);
		}
		function P(e) {
			return e.trim().toLocaleLowerCase();
		}
		function we(e, t) {
			let n = t.target;
			n && i.setCareerQuantity(e, Number(n.value));
		}
		function Te(e, t) {
			T.value = e, E.value = e, t.dataTransfer?.setData("text/plain", `npc-builder-career:${e}`), t.dataTransfer && (t.dataTransfer.effectAllowed = "move");
		}
		function Ee(e, t) {
			t.preventDefault(), E.value = e, t.dataTransfer && (t.dataTransfer.dropEffect = "move");
		}
		function De(e, t) {
			t.preventDefault(), T.value !== null && i.moveCareerToIndex(T.value, e), F();
		}
		function F() {
			T.value = null, E.value = null;
		}
		function Oe(e) {
			return [
				`Ch ${e.grants.characteristics.length}`,
				`Sk ${e.grants.skills.length}`,
				`Ta ${e.grants.talents.length}`,
				`Tr ${e.grants.trappings.length}`
			].join(" / ");
		}
		function ke(e) {
			let t = e.slice(0, 3).join(", "), n = e.length - 3;
			return e.length ? n > 0 ? `${t}, +${n}` : t : "-";
		}
		function Ae(e) {
			return e.split(/\s+/).map((e) => e.at(0)).filter(Boolean).slice(0, 2).join("").toLocaleUpperCase();
		}
		function je(e) {
			i.setQuickTraitSelected(e, !be(e));
		}
		function Me(e) {
			i.setOptionalTraitSelected(e, !xe(e));
		}
		function Ne(e) {
			i.selectPortrait(e.img);
		}
		function Pe(e) {
			Ne(e), D.value = !1;
		}
		function Fe(e) {
			return `${e.label}\n${e.img}`;
		}
		async function Ie() {
			let e = k + 1;
			if (k = e, !y.value.searchCompendiumPortraitAssets && !y.value.searchFoundryPortraitAssets) {
				w.value = [], O.value = null;
				return;
			}
			if (!h.value && !c.value.length) {
				w.value = [], O.value = null;
				return;
			}
			te.value = !0, w.value = [], O.value = {
				candidatesFound: 0,
				currentLocation: "Preparing portrait search",
				directoriesVisited: 0,
				maxDirectories: 0,
				phase: "world-documents"
			};
			try {
				let t = await n.bridge.listFoundryPortraitCandidates({
					careers: c.value,
					includeCompendiumAssets: y.value.searchCompendiumPortraitAssets,
					includeFilePickerAssets: y.value.searchFoundryPortraitAssets,
					selectedBaseActor: h.value
				}, (t) => {
					k === e && (O.value = t);
				});
				k === e && (w.value = t);
			} catch (t) {
				k === e && (ee.value = Re(t));
			} finally {
				k === e && (te.value = !1);
			}
		}
		async function Le(e) {
			ee.value = "";
			try {
				i.selectBaseActor(await n.bridge.resolveActorDrop(e));
			} catch (e) {
				ee.value = Re(e);
			}
		}
		function Re(e) {
			return e instanceof Error ? e.message : "The NPC Builder could not resolve that Actor drop.";
		}
		return (t, n) => (W(), G("section", Fl, [
			K("div", Il, [K("section", Ll, [
				n[9] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "1"), K("h2", null, "Base Actor")], -1),
				K("div", Rl, [K("label", zl, [n[7] ||= K("span", null, "Search world actors", -1), V(K("input", {
					"onUpdate:modelValue": n[0] ||= (e) => C.value = e,
					placeholder: "Filter actors",
					type: "search"
				}, null, 512), [[Qo, C.value]])]), K("label", Bl, [n[8] ||= K("span", null, "Base statblock", -1), V(K("select", {
					"onUpdate:modelValue": n[1] ||= (e) => re.value = e,
					disabled: e.isLoadingActors
				}, [K("option", Hl, N(e.isLoadingActors ? "Loading actors..." : "Choose an actor"), 1), (W(!0), G(U, null, H(ne.value, (e) => (W(), G("option", {
					key: e.uuid,
					value: e.uuid
				}, N(e.name), 9, Ul))), 128))], 8, Vl), [[ts, re.value]])])]),
				q(Pl, {
					class: "npc-builder__drop",
					description: "Use a world Actor as the starting statblock.",
					title: "Drop Actor",
					variant: "compact",
					onDropData: Le
				}),
				ee.value ? (W(), G("p", Wl, N(ee.value), 1)) : J("", !0),
				B(h) ? (W(), G("article", Gl, [K("div", Kl, [B(h).img ? (W(), G("img", {
					key: 0,
					src: B(h).img,
					alt: ""
				}, null, 8, ql)) : (W(), G("span", Jl, N(Ae(B(h).name)), 1))]), K("div", null, [K("strong", null, N(B(h).name), 1), K("span", null, [
					pa(N(B(h).species || "Species not found") + " ", 1),
					B(h).type ? (W(), G(U, { key: 0 }, [pa(" - " + N(B(h).type), 1)], 64)) : J("", !0),
					e.isLoadingBaseDraft ? (W(), G(U, { key: 1 }, [pa("loading...")], 64)) : J("", !0)
				])])])) : J("", !0)
			]), K("section", Yl, [
				n[11] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "2"), K("h2", null, "Career Queue")], -1),
				q(Pl, {
					class: "npc-builder__drop npc-builder__drop--career",
					description: "Drop in build order. Drag rows to reorder.",
					title: "Drop Career Items",
					variant: "compact",
					onDropData: n[2] ||= (e) => r("careerDrop", e)
				}),
				B(c).length ? (W(), G("ol", Xl, [(W(!0), G(U, null, H(B(c), (e, t) => (W(), G("li", {
					key: e.uuid,
					class: M({
						"is-dragging": T.value === t,
						"is-drop-target": E.value === t
					}),
					onDragenter: ss((e) => E.value = t, ["prevent"]),
					onDragover: (e) => Ee(t, e),
					onDrop: (e) => De(t, e)
				}, [
					K("span", {
						"aria-label": "Drag to reorder career",
						class: "npc-builder__drag-handle",
						draggable: "true",
						role: "button",
						tabindex: "0",
						title: "Drag to reorder",
						onDragend: F,
						onDragstart: (e) => Te(t, e)
					}, " Move ", 40, Ql),
					K("div", $l, [e.img ? (W(), G("img", {
						key: 0,
						src: e.img,
						alt: ""
					}, null, 8, eu)) : (W(), G("span", tu, N(Ae(e.name)), 1))]),
					K("div", nu, [
						K("strong", null, N(e.name), 1),
						K("span", null, [pa(N(e.careerGroup || "Career") + " ", 1), e.level === null ? J("", !0) : (W(), G(U, { key: 0 }, [pa(" level " + N(e.level), 1)], 64))]),
						K("small", {
							class: "npc-builder__career-counts",
							title: [
								`Characteristics: ${ke(e.grants.characteristics)}`,
								`Skills: ${ke(e.grants.skills)}`,
								`Talents: ${ke(e.grants.talents)}`,
								`Trappings: ${ke(e.grants.trappings)}`
							].join("\n")
						}, N(Oe(e)), 9, ru)
					]),
					K("label", null, [n[10] ||= K("span", null, "Qty", -1), K("input", {
						value: e.quantity,
						min: "1",
						type: "number",
						onInput: (e) => we(t, e)
					}, null, 40, iu)]),
					K("div", au, [
						K("button", {
							disabled: t === 0,
							title: "Move career earlier",
							type: "button",
							onClick: (e) => B(i).moveCareer(t, -1)
						}, " Up ", 8, ou),
						K("button", {
							disabled: t === B(c).length - 1,
							title: "Move career later",
							type: "button",
							onClick: (e) => B(i).moveCareer(t, 1)
						}, " Down ", 8, su),
						K("button", {
							type: "button",
							onClick: (e) => B(i).removeCareer(t)
						}, " Remove ", 8, cu)
					])
				], 42, Zl))), 128))])) : (W(), G("p", lu, "No careers queued yet."))
			])]),
			K("aside", uu, [K("section", du, [
				K("button", {
					class: "npc-builder__portrait",
					disabled: !j.value.length,
					title: "Open portrait gallery",
					type: "button",
					onClick: n[3] ||= (e) => D.value = !0
				}, [B(d) ? (W(), G("img", {
					key: 0,
					src: B(d),
					alt: ""
				}, null, 8, pu)) : B(u) ? (W(), G("strong", mu, N(Ae(B(u).name)), 1)) : (W(), G("span", hu, "No portrait selected"))], 8, fu),
				B(d) ? (W(), G("p", gu, [_e.value ? (W(), G("strong", _u, N(_e.value.label), 1)) : J("", !0), K("span", { title: B(d) }, N(B(d)), 9, vu)])) : J("", !0),
				j.value.length || te.value ? (W(), G("section", yu, [
					K("div", null, [n[12] ||= K("h2", null, "Portrait", -1), te.value ? (W(), G("span", bu, "Finding assets...")) : (W(), G("span", xu, N(j.value.length) + " options", 1))]),
					te.value && O.value ? (W(), G("div", Su, [K("progress", {
						value: ve.value,
						max: "100"
					}, null, 8, Cu), K("span", null, N(ye.value), 1)])) : J("", !0),
					K("div", wu, [(W(!0), G(U, null, H(me.value, (e) => (W(), G("button", {
						key: e.key,
						"aria-label": Fe(e),
						class: M({ "is-active": e.key === ge.value }),
						title: Fe(e),
						type: "button",
						onClick: (t) => Ne(e)
					}, [K("img", {
						src: e.img,
						alt: ""
					}, null, 8, Eu)], 10, Tu))), 128)), he.value > 0 ? (W(), G("button", {
						key: 0,
						class: "npc-builder__portrait-more",
						type: "button",
						onClick: n[4] ||= (e) => D.value = !0
					}, " +" + N(he.value), 1)) : J("", !0)])
				])) : J("", !0),
				K("label", Du, [n[13] ||= K("span", null, "NPC name", -1), V(K("input", {
					"onUpdate:modelValue": n[5] ||= (e) => /* @__PURE__ */ R(a) ? a.value = e : null,
					placeholder: B(b),
					type: "text"
				}, null, 8, Ou), [[Qo, B(a)]])]),
				B(p).length ? (W(), G("section", ku, [K("div", null, [n[14] ||= K("h2", null, "Optional Traits", -1), K("span", null, N(B(p).length) + " from base statblock", 1)]), (W(!0), G(U, null, H(B(p), (e) => (W(), G("button", {
					key: e.uuid,
					class: M({ "is-active": xe(e) }),
					type: "button",
					onClick: (t) => Me(e)
				}, N(e.name), 11, Au))), 128))])) : J("", !0),
				ie.value.length ? (W(), G("section", ju, [K("div", null, [n[15] ||= K("h2", null, "Quick Traits", -1), K("span", null, N(ie.value.length) + " configured", 1)]), (W(!0), G(U, null, H(ie.value, (e) => (W(), G("button", {
					key: e.uuid,
					class: M({ "is-active": be(e) }),
					type: "button",
					onClick: (t) => je(e)
				}, N(e.name), 11, Mu))), 128))])) : J("", !0),
				K("section", Nu, [
					K("div", Pu, [n[16] ||= K("h2", null, "Build Preview", -1), K("span", { class: M(["npc-builder__status-pill", { "npc-builder__status-pill--ready": fe.value === "Ready" }]) }, N(fe.value), 3)]),
					K("div", Fu, [
						K("div", null, [
							n[17] ||= K("span", null, "Advances", -1),
							K("strong", null, N(B(o).length), 1),
							oe.value ? (W(), G("small", Iu, N(oe.value) + " manually edited ", 1)) : J("", !0)
						]),
						K("div", null, [
							n[18] ||= K("span", null, "Trappings", -1),
							K("strong", null, N(ae.value.length), 1),
							se.value ? (W(), G("small", Lu, N(se.value) + " blank fallback ", 1)) : J("", !0),
							ce.value ? (W(), G("small", Ru, N(ce.value) + " ignored ", 1)) : J("", !0)
						]),
						K("div", null, [n[19] ||= K("span", null, "Traits", -1), K("strong", null, N(B(x).length), 1)]),
						K("div", null, [n[20] ||= K("span", null, "Spells", -1), K("strong", null, N(B(v).length), 1)])
					]),
					de.value.length ? (W(), G("ul", zu, [(W(!0), G(U, null, H(de.value, (e) => (W(), G("li", { key: e }, N(e), 1))), 128))])) : (W(), G("p", Bu, " The draft has a base Actor, queued Career data, resolved trappings, and a portrait ready to apply. "))
				]),
				K("dl", null, [
					K("div", null, [n[21] ||= K("dt", null, "Build name", -1), K("dd", null, N(B(l)), 1)]),
					K("div", null, [n[22] ||= K("dt", null, "Base actor", -1), K("dd", null, N(B(h)?.name ?? "Not selected"), 1)]),
					K("div", null, [n[23] ||= K("dt", null, "Final career", -1), K("dd", null, N(B(u)?.name ?? "Not queued"), 1)]),
					K("div", null, [n[24] ||= K("dt", null, "Career items", -1), K("dd", null, N(A.value), 1)]),
					K("div", null, [n[25] ||= K("dt", null, "Apply", -1), K("dd", null, N(B(o).length) + " advance rows, " + N(ae.value.length) + " trappings, " + N(B(x).length) + " traits, " + N(B(v).length) + " spells ", 1)]),
					K("div", null, [n[26] ||= K("dt", null, "Extracted grants", -1), K("dd", null, N(B(f).characteristics) + " characteristics, " + N(B(f).skills) + " skills, " + N(B(f).talents) + " talents, " + N(B(f).trappings) + " trappings ", 1)])
				])
			])]),
			q(qc, {
				open: D.value,
				title: "Portrait Gallery",
				onClose: n[6] ||= (e) => D.value = !1
			}, {
				default: Fn(() => [K("div", Vu, [K("div", Hu, [K("strong", null, N(j.value.length) + " portrait options", 1), te.value ? (W(), G("span", Uu, "Finding assets...")) : (W(), G("span", Wu, "Click an image to use it for the generated NPC."))]), K("div", Gu, [(W(!0), G(U, null, H(j.value, (e) => (W(), G("button", {
					key: e.key,
					class: M({ "is-active": e.key === ge.value }),
					title: Fe(e),
					type: "button",
					onClick: (t) => Pe(e)
				}, [K("span", qu, [K("img", {
					src: e.img,
					alt: ""
				}, null, 8, Ju)]), K("span", null, N(e.label), 1)], 10, Ku))), 128))])])]),
				_: 1
			}, 8, ["open"])
		]));
	}
}), Xu = { class: "npc-builder__settings" }, Zu = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, Qu = {
	key: 1,
	class: "npc-builder__message"
}, $u = { class: "npc-builder__panel" }, ed = { class: "npc-builder__folder-setting" }, td = { class: "npc-builder__field" }, nd = ["value"], rd = { class: "npc-builder__field" }, id = ["disabled"], ad = { class: "npc-builder__folder-setting" }, od = { class: "npc-builder__field" }, sd = ["value"], cd = { class: "npc-builder__field" }, ld = ["disabled"], ud = { class: "npc-builder__panel" }, dd = { class: "npc-builder__folder-setting" }, fd = { class: "npc-builder__field" }, pd = ["value"], md = { class: "npc-builder__field" }, hd = ["disabled"], gd = ["disabled"], _d = { class: "npc-builder__panel" }, vd = { class: "npc-builder__check" }, yd = { class: "npc-builder__panel" }, bd = { class: "npc-builder__check" }, xd = { class: "npc-builder__check" }, Sd = { class: "npc-builder__check" }, Cd = { class: "npc-builder__panel" }, wd = { class: "npc-builder__check" }, Td = { class: "npc-builder__check" }, Ed = { class: "npc-builder__check" }, Dd = { class: "npc-builder__check" }, Od = { class: "npc-builder__check" }, kd = { class: "npc-builder__panel" }, Ad = { class: "npc-builder__check" }, jd = { class: "npc-builder__panel" }, Md = { class: "npc-builder__field" }, Nd = { class: "npc-builder__check" }, Pd = ["disabled"], Fd = ["disabled"], Id = /* @__PURE__ */ lr({
	__name: "NpcBuilderSettingsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Uc(), { actorFolders: r, itemFolders: i, settings: a } = Ys(n), o = /* @__PURE__ */ z(""), s = /* @__PURE__ */ z(""), c = /* @__PURE__ */ z(!1), l = /* @__PURE__ */ z(""), u = /* @__PURE__ */ z(""), d = /* @__PURE__ */ z("");
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
				autoSelectGrantedSpells: a.value.autoSelectGrantedSpells,
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
				n.hydrateSettings(await t.bridge.saveSettings(Zs())), await Promise.all([v(), y()]), d.value = "Settings reset to defaults.";
			} catch (e) {
				s.value = w(e);
			} finally {
				c.value = !1;
			}
		}
		function w(e) {
			return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
		}
		return (e, t) => (W(), G("section", Xu, [
			s.value ? (W(), G("p", Zu, N(s.value), 1)) : d.value ? (W(), G("p", Qu, N(d.value), 1)) : J("", !0),
			K("section", $u, [
				t[24] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "1"), K("h2", null, "Actor Sources")], -1),
				K("section", ed, [
					K("label", td, [t[19] ||= K("span", null, "Base actor folder", -1), V(K("select", { "onUpdate:modelValue": t[0] ||= (e) => B(a).baseActorFolderUuid = e }, [t[18] ||= K("option", { value: "" }, "All world actors", -1), (W(!0), G(U, null, H(B(r), (e) => (W(), G("option", {
						key: e.uuid,
						value: e.uuid
					}, N(e.name), 9, nd))), 128))], 512), [[ts, B(a).baseActorFolderUuid]])]),
					K("label", rd, [t[20] ||= K("span", null, "Create or use by name", -1), V(K("input", {
						"onUpdate:modelValue": t[1] ||= (e) => o.value = e,
						placeholder: "Folder name",
						type: "text"
					}, null, 512), [[Qo, o.value]])]),
					K("button", {
						disabled: c.value || !o.value.trim(),
						type: "button",
						onClick: f
					}, " Save ", 8, id)
				]),
				K("section", ad, [
					K("label", od, [t[22] ||= K("span", null, "Output actor folder", -1), V(K("select", { "onUpdate:modelValue": t[2] ||= (e) => B(a).outputActorFolderUuid = e }, [t[21] ||= K("option", { value: "" }, "Foundry default location", -1), (W(!0), G(U, null, H(B(r), (e) => (W(), G("option", {
						key: e.uuid,
						value: e.uuid
					}, N(e.name), 9, sd))), 128))], 512), [[ts, B(a).outputActorFolderUuid]])]),
					K("label", cd, [t[23] ||= K("span", null, "Create or use by name", -1), V(K("input", {
						"onUpdate:modelValue": t[3] ||= (e) => l.value = e,
						placeholder: "Folder name",
						type: "text"
					}, null, 512), [[Qo, l.value]])]),
					K("button", {
						disabled: c.value || !l.value.trim(),
						type: "button",
						onClick: p
					}, " Save ", 8, ld)
				])
			]),
			K("section", ud, [
				t[28] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "2"), K("h2", null, "Quick Traits")], -1),
				K("section", dd, [
					K("label", fd, [t[26] ||= K("span", null, "Quick traits folder", -1), V(K("select", { "onUpdate:modelValue": t[4] ||= (e) => B(a).quickTraitFolderUuid = e }, [t[25] ||= K("option", { value: "" }, "No quick traits folder", -1), (W(!0), G(U, null, H(B(i), (e) => (W(), G("option", {
						key: e.uuid,
						value: e.uuid
					}, N(e.name), 9, pd))), 128))], 512), [[ts, B(a).quickTraitFolderUuid]])]),
					K("label", md, [t[27] ||= K("span", null, "Create or use by name", -1), V(K("input", {
						"onUpdate:modelValue": t[5] ||= (e) => u.value = e,
						placeholder: "Folder name",
						type: "text"
					}, null, 512), [[Qo, u.value]])]),
					K("button", {
						disabled: c.value || !u.value.trim(),
						type: "button",
						onClick: m
					}, " Save ", 8, hd)
				]),
				K("button", {
					disabled: c.value || !B(a).quickTraitFolderUuid,
					type: "button",
					onClick: x
				}, " Import Recommended Quick Traits ", 8, gd)
			]),
			K("section", _d, [t[30] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "3"), K("h2", null, "Default Naming")], -1), K("label", vd, [V(K("input", {
				"onUpdate:modelValue": t[6] ||= (e) => B(a).includeSpeciesInName = e,
				type: "checkbox"
			}, null, 512), [[$o, B(a).includeSpeciesInName]]), t[29] ||= K("span", null, "Include species in suggested names", -1)])]),
			K("section", yd, [
				t[34] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "4"), K("h2", null, "Portrait Suggestions")], -1),
				K("label", bd, [V(K("input", {
					"onUpdate:modelValue": t[7] ||= (e) => B(a).searchFoundryPortraitAssets = e,
					type: "checkbox"
				}, null, 512), [[$o, B(a).searchFoundryPortraitAssets]]), t[31] ||= K("span", null, "Search the Foundry file picker for portrait suggestions", -1)]),
				K("label", xd, [V(K("input", {
					"onUpdate:modelValue": t[8] ||= (e) => B(a).searchCompendiumPortraitAssets = e,
					type: "checkbox"
				}, null, 512), [[$o, B(a).searchCompendiumPortraitAssets]]), t[32] ||= K("span", null, "Search Actor and Item compendiums for portrait suggestions", -1)]),
				K("label", Sd, [V(K("input", {
					"onUpdate:modelValue": t[9] ||= (e) => B(a).searchWebPortraitAssets = e,
					disabled: "",
					type: "checkbox"
				}, null, 512), [[$o, B(a).searchWebPortraitAssets]]), t[33] ||= K("span", null, "Search the web for portrait suggestions (later)", -1)])
			]),
			K("section", Cd, [
				t[40] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "5"), K("h2", null, "Base Actor Features")], -1),
				K("label", wd, [V(K("input", {
					"onUpdate:modelValue": t[10] ||= (e) => B(a).allowBaseActorCharacteristics = e,
					type: "checkbox"
				}, null, 512), [[$o, B(a).allowBaseActorCharacteristics]]), t[35] ||= K("span", null, "Show base actor characteristics", -1)]),
				K("label", Td, [V(K("input", {
					"onUpdate:modelValue": t[11] ||= (e) => B(a).allowBaseActorSkills = e,
					type: "checkbox"
				}, null, 512), [[$o, B(a).allowBaseActorSkills]]), t[36] ||= K("span", null, "Show base actor skills", -1)]),
				K("label", Ed, [V(K("input", {
					"onUpdate:modelValue": t[12] ||= (e) => B(a).allowBaseActorTalents = e,
					type: "checkbox"
				}, null, 512), [[$o, B(a).allowBaseActorTalents]]), t[37] ||= K("span", null, "Show base actor talents", -1)]),
				K("label", Dd, [V(K("input", {
					"onUpdate:modelValue": t[13] ||= (e) => B(a).allowBaseActorTrappings = e,
					type: "checkbox"
				}, null, 512), [[$o, B(a).allowBaseActorTrappings]]), t[38] ||= K("span", null, "Show base actor trappings", -1)]),
				K("label", Od, [V(K("input", {
					"onUpdate:modelValue": t[14] ||= (e) => B(a).allowBaseActorTraits = e,
					type: "checkbox"
				}, null, 512), [[$o, B(a).allowBaseActorTraits]]), t[39] ||= K("span", null, "Show base actor traits", -1)])
			]),
			K("section", kd, [t[42] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "6"), K("h2", null, "Magic and Spells")], -1), K("label", Ad, [V(K("input", {
				"onUpdate:modelValue": t[15] ||= (e) => B(a).autoSelectGrantedSpells = e,
				type: "checkbox"
			}, null, 512), [[$o, B(a).autoSelectGrantedSpells]]), t[41] ||= K("span", null, "Select detected Lore spells by default", -1)])]),
			K("section", jd, [
				t[46] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "7"), K("h2", null, "Other Settings")], -1),
				K("label", Md, [t[44] ||= K("span", null, "Lower career handling", -1), V(K("select", { "onUpdate:modelValue": t[16] ||= (e) => B(a).lowerCareerMode = e }, [...t[43] ||= [
					K("option", { value: "prompt" }, "Prompt when candidates are found", -1),
					K("option", { value: "auto-add-all" }, " Automatically add all lower-tier matches ", -1),
					K("option", { value: "never" }, "Only add dropped careers", -1)
				]], 512), [[ts, B(a).lowerCareerMode]])]),
				K("label", Nd, [V(K("input", {
					"onUpdate:modelValue": t[17] ||= (e) => B(a).askForLinkedSkillSpecializations = e,
					type: "checkbox"
				}, null, 512), [[$o, B(a).askForLinkedSkillSpecializations]]), t[45] ||= K("span", null, "Resolve linked career skill repeats separately", -1)]),
				K("button", {
					disabled: c.value,
					type: "button",
					onClick: S
				}, " Save Settings ", 8, Pd),
				K("button", {
					disabled: c.value,
					type: "button",
					onClick: C
				}, " Reset to Defaults ", 8, Fd)
			])
		]));
	}
}), Ld = { class: "npc-builder__subview-stack" }, Rd = { class: "npc-builder__field" }, zd = ["onUpdate:modelValue"], Bd = ["value"], Vd = { class: "npc-builder__subview-actions" }, Hd = /* @__PURE__ */ lr({
	__name: "MagicLoreResolutionPromptContent",
	props: { prompt: {} },
	emits: ["applyLores", "keepUnresolved"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (W(), G("div", Ld, [
			r[4] ||= K("p", null, " Choose concrete magic Lores for ambiguous grants before automatic spells are detected. Unresolved grants can still use manually dropped spells. ", -1),
			(W(!0), G(U, null, H(e.prompt.rows, (e) => (W(), G("section", {
				key: e.resolutionKey,
				class: "npc-builder__resolution-row"
			}, [K("div", null, [K("strong", null, N(e.grantLabel), 1), K("small", null, N(e.sourceLabel) + " - " + N(e.rawLore || "Any Lore"), 1)]), K("label", Rd, [r[3] ||= K("span", null, "Lore", -1), V(K("select", { "onUpdate:modelValue": (t) => e.selectedLore = t }, [r[2] ||= K("option", { value: "" }, "Leave unresolved", -1), (W(!0), G(U, null, H(e.options, (e) => (W(), G("option", {
				key: e.key,
				value: e.value
			}, N(e.label) + N(e.wind && e.wind !== "None" ? ` (${e.wind})` : ""), 9, Bd))), 128))], 8, zd), [[ts, e.selectedLore]])])]))), 128)),
			K("div", Vd, [K("button", {
				type: "button",
				onClick: r[0] ||= (e) => n("keepUnresolved")
			}, " Keep Unresolved "), K("button", {
				type: "button",
				onClick: r[1] ||= (e) => n("applyLores")
			}, "Apply Lores")])
		]));
	}
}), Ud = { class: "npc-builder__stack" }, Wd = { class: "npc-builder__panel" }, Gd = {
	key: 0,
	class: "npc-builder__empty"
}, Kd = {
	key: 1,
	class: "npc-builder__magic-grants"
}, qd = { key: 0 }, Jd = { key: 1 }, Yd = {
	key: 2,
	class: "npc-builder__panel-actions"
}, Xd = ["disabled"], Zd = { class: "npc-builder__panel" }, Qd = { class: "npc-builder__panel-actions" }, $d = ["disabled"], ef = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, tf = {
	key: 1,
	class: "npc-builder__message npc-builder__message--error"
}, nf = {
	key: 2,
	class: "npc-builder__table"
}, rf = ["checked", "onChange"], af = { class: "npc-builder__spell-name" }, of = { class: "npc-builder__spell-icon" }, sf = ["src"], cf = ["onClick"], lf = { key: 1 }, uf = {
	key: 3,
	class: "npc-builder__empty"
}, df = /* @__PURE__ */ lr({
	__name: "NpcBuilderSpellsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Uc(), { magicGrants: r, spells: i, selectedSpells: a } = Ys(n), o = /* @__PURE__ */ z(""), s = /* @__PURE__ */ z(!1), c = /* @__PURE__ */ z(!1), l = /* @__PURE__ */ z([]), u = /* @__PURE__ */ z(null), d = 0, f = Y(() => r.value.filter((e) => e.isAmbiguous)), p = Y(() => r.value.length - f.value.length);
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
		return (e, t) => (W(), G("section", Ud, [
			q(qc, {
				open: u.value !== null,
				title: "Resolve Magic Lores",
				onClose: C
			}, {
				default: Fn(() => [u.value ? (W(), aa(Hd, {
					key: 0,
					prompt: u.value,
					onApplyLores: S,
					onKeepUnresolved: C
				}, null, 8, ["prompt"])) : J("", !0)]),
				_: 1
			}, 8, ["open"]),
			K("section", Wd, [
				t[0] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "1"), K("h2", null, "Magic Access")], -1),
				B(r).length ? (W(), G("div", Kd, [(W(!0), G(U, null, H(B(r), (e) => (W(), G("article", { key: `${e.source}:${e.sourceName}:${e.rawLore}` }, [
					K("strong", null, N(m(e)), 1),
					K("span", null, N(h(e)) + " - " + N(e.sourceName), 1),
					e.isAmbiguous ? (W(), G("small", qd, " Needs Lore resolution before automatic spells can be found. ")) : (W(), G("small", Jd, " Lore: " + N(e.rawLore || e.normalizedLore), 1))
				]))), 128))])) : (W(), G("p", Gd, " No magic-enabling Talent or Trait is selected. ")),
				f.value.length ? (W(), G("div", Yd, [K("button", {
					disabled: c.value,
					type: "button",
					onClick: x
				}, N(c.value ? "Loading Lores..." : "Resolve Lores"), 9, Xd)])) : J("", !0)
			]),
			K("section", Zd, [
				t[2] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "2"), K("h2", null, "Spells")], -1),
				q(Pl, {
					class: "npc-builder__drop npc-builder__drop--career",
					description: "Add a specific Spell item regardless of detected Lores.",
					title: "Drop Spell Items",
					onDropData: w
				}),
				K("div", Qd, [K("button", {
					disabled: s.value || !p.value,
					type: "button",
					onClick: y
				}, N(s.value ? "Finding spells..." : "Refresh Spells"), 9, $d), K("span", null, N(B(a).length) + " selected / " + N(B(i).length) + " found ", 1)]),
				o.value ? (W(), G("p", ef, N(o.value), 1)) : J("", !0),
				f.value.length ? (W(), G("p", tf, N(f.value.length) + " magic grant" + N(f.value.length === 1 ? "" : "s") + " still need Lore resolution. You can still drop specific spells for now. ", 1)) : J("", !0),
				B(i).length ? (W(), G("div", nf, [t[1] ||= K("div", { class: "npc-builder__table-head npc-builder__table-head--spells" }, [
					K("span", null, "Use"),
					K("span", null, "Spell"),
					K("span", null, "Lore"),
					K("span", null, "Source"),
					K("span")
				], -1), (W(!0), G(U, null, H(B(i), (e) => (W(), G("article", {
					key: e.key,
					class: "npc-builder__spell-row"
				}, [
					K("input", {
						checked: e.selected,
						type: "checkbox",
						onChange: (t) => v(e, t)
					}, null, 40, rf),
					K("div", af, [K("span", of, [e.img ? (W(), G("img", {
						key: 0,
						src: e.img,
						alt: ""
					}, null, 8, sf)) : J("", !0)]), K("strong", null, N(e.name), 1)]),
					K("span", null, N(e.loreName || "Unknown"), 1),
					K("span", null, N(g(e)), 1),
					e.source === "custom" ? (W(), G("button", {
						key: 0,
						type: "button",
						onClick: (t) => B(n).removeCustomSpell(e.key)
					}, " Remove ", 8, cf)) : (W(), G("span", lf))
				]))), 128))])) : (W(), G("p", uf, " No matching spells found yet. Drop specific spells here, or resolve a non-ambiguous magic Lore. "))
			])
		]));
	}
}), ff = { class: "npc-builder__stack" }, pf = { class: "npc-builder__panel" }, mf = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, hf = { class: "npc-builder__table" }, gf = { class: "npc-builder__trait-name" }, _f = { key: 0 }, vf = { key: 1 }, yf = { class: "npc-builder__trait-config" }, bf = { class: "npc-builder__mini-field" }, xf = ["value", "onInput"], Sf = {
	key: 0,
	class: "npc-builder__mini-field"
}, Cf = ["value", "onChange"], wf = ["value"], Tf = {
	key: 1,
	class: "npc-builder__mini-field"
}, Ef = ["value", "onInput"], Df = ["onClick"], Of = { key: 1 }, kf = /* @__PURE__ */ lr({
	__name: "NpcBuilderTraitsTab",
	props: {
		bridge: {},
		difficultyOptions: {}
	},
	setup(e) {
		let t = e, n = Uc(), { traits: r } = Ys(n), i = /* @__PURE__ */ z("");
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
		return (t, n) => (W(), G("section", ff, [K("section", pf, [
			n[3] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "1"), K("h2", null, "Traits")], -1),
			q(Pl, {
				class: "npc-builder__drop npc-builder__drop--career",
				description: "Add creature traits or NPC trait items.",
				title: "Drop Trait Items",
				onDropData: c
			}),
			i.value ? (W(), G("p", mf, N(i.value), 1)) : J("", !0),
			K("div", hf, [n[2] ||= K("div", { class: "npc-builder__table-head npc-builder__table-head--traits" }, [
				K("span", null, "Name"),
				K("span", null, "Source"),
				K("span", null, "Config"),
				K("span")
			], -1), (W(!0), G(U, null, H(B(r), (t) => (W(), G("article", {
				key: t.key,
				class: "npc-builder__trait-row"
			}, [
				K("div", gf, [
					K("strong", null, N(t.name), 1),
					t.config.rollable ? (W(), G("span", _f, "Rollable")) : J("", !0),
					t.config.damage ? (W(), G("span", vf, "Damage")) : J("", !0)
				]),
				K("span", null, N(a(t)), 1),
				K("div", yf, [
					K("label", bf, [K("span", null, N(t.config.damage ? "Damage" : "Specification"), 1), K("input", {
						value: t.config.specification,
						placeholder: "None",
						type: "text",
						onInput: (e) => s(t, "specification", e)
					}, null, 40, xf)]),
					t.config.rollable && !t.config.damage ? (W(), G("label", Sf, [n[0] ||= K("span", null, "Difficulty", -1), K("select", {
						value: t.config.defaultDifficulty,
						onChange: (e) => s(t, "defaultDifficulty", e)
					}, [(W(!0), G(U, null, H(e.difficultyOptions, (e) => (W(), G("option", {
						key: e.value,
						value: e.value
					}, N(e.label), 9, wf))), 128))], 40, Cf)])) : J("", !0),
					t.config.damage && t.config.dice ? (W(), G("label", Tf, [n[1] ||= K("span", null, "Dice", -1), K("input", {
						value: t.config.dice,
						placeholder: "Optional",
						type: "text",
						onInput: (e) => s(t, "dice", e)
					}, null, 40, Ef)])) : J("", !0)
				]),
				t.source === "base" ? (W(), G("span", Of)) : (W(), G("button", {
					key: 0,
					type: "button",
					onClick: (e) => o(t)
				}, " Remove ", 8, Df))
			]))), 128))])
		])]));
	}
}), Af = { class: "npc-builder__stack" }, jf = { class: "npc-builder__panel" }, Mf = { class: "npc-builder__panel-actions" }, Nf = ["disabled"], Pf = { key: 0 }, Ff = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, If = { class: "npc-builder__table" }, Lf = ["checked", "onChange"], Rf = { class: "npc-builder__trapping-name" }, zf = { key: 0 }, Bf = { class: "npc-builder__trapping-resolution" }, Vf = ["value", "onChange"], Hf = {
	key: 0,
	value: ""
}, Uf = ["value"], Wf = { key: 1 }, Gf = ["value", "onInput"], Kf = ["onClick"], qf = { key: 1 }, Jf = "__blank-item__", Yf = /* @__PURE__ */ lr({
	__name: "NpcBuilderTrappingsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Uc(), { trappings: r } = Ys(n), i = /* @__PURE__ */ z(""), a = /* @__PURE__ */ z(!1), o = Y(() => r.value.filter((e) => !e.ignored && e.resolution.status === "unresolved"));
		wr(() => {
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
			return e.resolution.status === "fallback" ? Jf : e.resolution.selectedCandidateUuid;
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
				if (r.value === Jf) {
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
		return (e, t) => (W(), G("section", Af, [K("section", jf, [
			t[1] ||= K("div", { class: "npc-builder__panel-heading" }, [K("span", null, "1"), K("h2", null, "Trappings")], -1),
			q(Pl, {
				class: "npc-builder__drop npc-builder__drop--career",
				description: "Add weapons, armour, containers, or any other item.",
				title: "Drop Trapping Items",
				onDropData: _
			}),
			K("div", Mf, [K("button", {
				disabled: a.value || !o.value.length,
				type: "button",
				onClick: g
			}, N(a.value ? "Resolving..." : "Resolve Trappings"), 9, Nf), o.value.length ? (W(), G("span", Pf, N(o.value.length) + " unresolved ", 1)) : J("", !0)]),
			i.value ? (W(), G("p", Ff, N(i.value), 1)) : J("", !0),
			K("div", If, [t[0] ||= K("div", { class: "npc-builder__table-head npc-builder__table-head--traps" }, [
				K("span", null, "Use"),
				K("span", null, "Name"),
				K("span", null, "Resolution"),
				K("span", null, "Type"),
				K("span", null, "Qty"),
				K("span", null, "Source"),
				K("span")
			], -1), (W(!0), G(U, null, H(B(r), (e) => (W(), G("article", {
				key: e.key,
				class: M(["npc-builder__trapping-row", { "is-ignored": e.ignored }])
			}, [
				K("input", {
					checked: !e.ignored,
					type: "checkbox",
					onChange: (t) => l(e.key, t)
				}, null, 40, Lf),
				K("div", Rf, [K("strong", null, N(e.name), 1), m(e) ? (W(), G("span", zf, N(m(e)), 1)) : J("", !0)]),
				K("div", Bf, [p(e) ? (W(), G("select", {
					key: 0,
					value: d(e),
					onChange: (t) => h(e.key, t)
				}, [
					e.resolution.candidates.length ? (W(), G("option", Hf, " Choose match ")) : J("", !0),
					(W(!0), G(U, null, H(e.resolution.candidates, (e) => (W(), G("option", {
						key: e.uuid,
						value: e.uuid
					}, N(e.name) + " (" + N(e.sourceLabel) + ") ", 9, Uf))), 128)),
					f(e) ? (W(), G("option", {
						key: 1,
						value: Jf
					}, " Blank Item ")) : J("", !0)
				], 40, Vf)) : (W(), G("span", Wf, N(u(e)), 1))]),
				K("span", null, N(e.resolution.selectedItemType || e.itemType || "trapping"), 1),
				K("input", {
					value: e.quantity,
					min: "1",
					type: "number",
					onInput: (t) => c(e.key, t)
				}, null, 40, Gf),
				K("span", null, N(s(e)), 1),
				e.source === "custom" ? (W(), G("button", {
					key: 0,
					type: "button",
					onClick: (t) => B(n).removeCustomTrapping(e.key)
				}, " Remove ", 8, Kf)) : (W(), G("span", qf))
			], 2))), 128))])
		])]));
	}
}), Xf = { class: "npc-builder__subview-stack" }, Zf = [
	"checked",
	"disabled",
	"onChange"
], Qf = { class: "npc-builder__subview-actions" }, $f = /* @__PURE__ */ lr({
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
		return (t, r) => (W(), G("div", Xf, [
			K("p", null, N(e.prompt.droppedCareer.name) + " appears to belong to the " + N(e.prompt.droppedCareer.careerGroup) + " career track. The following lower-tier candidates were found. ", 1),
			(W(!0), G(U, null, H(e.candidateGroups, (t) => (W(), G("section", {
				key: t.level,
				class: "npc-builder__candidate-group"
			}, [K("h3", null, "Tier " + N(t.level || "Unknown"), 1), (W(!0), G(U, null, H(t.candidates, (t) => (W(), G("label", {
				key: t.uuid,
				class: M(["npc-builder__candidate-row", { "is-queued": e.isCareerQueued(t.uuid) }])
			}, [K("input", {
				checked: e.isCareerQueued(t.uuid) || e.isLowerCareerSelected(t.uuid),
				disabled: e.isCareerQueued(t.uuid),
				type: "checkbox",
				onChange: (e) => n("lowerCareerSelected", t, e)
			}, null, 40, Zf), K("span", null, [K("strong", null, N(t.name), 1), K("small", null, [pa(N(t.careerGroup || "Career") + " ", 1), e.isCareerQueued(t.uuid) ? (W(), G(U, { key: 0 }, [pa(" already queued ")], 64)) : J("", !0)])])], 2))), 128))]))), 128)),
			K("div", Qf, [K("button", {
				type: "button",
				onClick: r[0] ||= (e) => n("addDroppedOnly")
			}, " Add Dropped Only "), K("button", {
				type: "button",
				onClick: r[1] ||= (e) => n("addSelected")
			}, "Add Selected")])
		]));
	}
}), ep = { class: "npc-builder__subview-stack" }, tp = { class: "npc-builder__field" }, np = ["onUpdate:modelValue"], rp = ["value"], ip = ["onUpdate:modelValue", "placeholder"], ap = {
	key: 0,
	class: "npc-builder__suggestions"
}, op = { key: 0 }, sp = ["onClick"], cp = {
	key: 0,
	class: "npc-builder__linked-note"
}, lp = { class: "npc-builder__subview-actions" }, up = /* @__PURE__ */ lr({
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
		return (t, r) => (W(), G("div", ep, [
			r[4] ||= K("p", null, " Some Career skills need a specialization before they become concrete WFRP skills. Blank rows can be left unresolved and edited later. ", -1),
			(W(!0), G(U, null, H(e.prompt.rows, (t) => (W(), G("section", {
				key: t.resolutionKey,
				class: "npc-builder__resolution-row"
			}, [
				K("div", null, [K("strong", null, N(e.getSkillResolutionLabel(t)), 1), K("small", null, N(t.careerLabel), 1)]),
				K("label", tp, [r[3] ||= K("span", null, "Specialization", -1), t.options.length > 1 ? V((W(), G("select", {
					key: 0,
					"onUpdate:modelValue": (e) => t.resolvedSpecialization = e
				}, [r[2] ||= K("option", { value: "" }, "Leave unresolved", -1), (W(!0), G(U, null, H(t.options, (e) => (W(), G("option", {
					key: e,
					value: e
				}, N(e), 9, rp))), 128))], 8, np)), [[ts, t.resolvedSpecialization]]) : V((W(), G("input", {
					key: 1,
					"onUpdate:modelValue": (e) => t.resolvedSpecialization = e,
					placeholder: t.suggestedSpecializations.length ? "Type or choose below" : t.specialization,
					type: "text"
				}, null, 8, ip)), [[Qo, t.resolvedSpecialization]])]),
				e.usesFreeformSkillSpecialization(t) ? (W(), G("div", ap, [t.isLoadingSuggestions ? (W(), G("small", op, "Finding known choices.")) : J("", !0), (W(!0), G(U, null, H(t.suggestedSpecializations, (e) => (W(), G("button", {
					key: `${t.resolutionKey}:${e}`,
					type: "button",
					onClick: (r) => n("chooseSkillSpecialization", t, e)
				}, N(e), 9, sp))), 128))])) : J("", !0)
			]))), 128)),
			e.prompt.linkedRows.length ? (W(), G("div", cp, N(e.prompt.linkedRows.length) + " linked skill specialization" + N(e.prompt.linkedRows.length === 1 ? "" : "s") + " will reuse earlier choices from this career chain. ", 1)) : J("", !0),
			K("div", lp, [K("button", {
				type: "button",
				onClick: r[0] ||= (e) => n("addWithoutResolving")
			}, " Add Without Resolving "), K("button", {
				type: "button",
				onClick: r[1] ||= (e) => n("applySpecializations")
			}, " Apply Specializations ")])
		]));
	}
}), dp = { class: "npc-builder" }, fp = { class: "npc-builder__header" }, pp = { class: "npc-builder__header-actions" }, mp = {
	"aria-label": "NPC Builder sections",
	class: "npc-builder__tabs"
}, hp = ["disabled"], gp = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, _p = {
	key: 1,
	class: "npc-builder__message"
}, vp = /* @__PURE__ */ lr({
	__name: "NpcBuilderApp",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Uc(), { advancements: r, careers: i, finalActorName: a, finalPortraitPath: o, hasMagicAccess: s, selectedSpells: c, selectedBaseActor: l, selectedBaseActorUuid: u, settings: d, traits: f, trappings: p } = Ys(n), m = /* @__PURE__ */ z("builder"), h = /* @__PURE__ */ z(""), g = /* @__PURE__ */ z(""), _ = /* @__PURE__ */ z(!1), v = /* @__PURE__ */ z(!1), y = /* @__PURE__ */ z(!1), b = /* @__PURE__ */ z(!1), x = /* @__PURE__ */ z(null), S = /* @__PURE__ */ z(null), C = /* @__PURE__ */ z([]), w = Y(() => !!(l.value && i.value.length && !_.value && !v.value)), T = Y(() => {
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
				n.hydrateSettings(e), n.hydrateActorFolders(r), n.hydrateItemFolders(i), C.value = a, await Promise.all([te(), O()]);
			} catch (e) {
				g.value = ge(e);
			} finally {
				y.value = !1;
			}
		}), Hn(u, async (e) => {
			if (g.value = "", !e) {
				n.clearBaseDraftData();
				return;
			}
			b.value = !0;
			try {
				n.hydrateBaseActorDraftData(await t.bridge.loadBaseActorDraftData(e));
			} catch (e) {
				g.value = ge(e), n.clearBaseDraftData();
			} finally {
				b.value = !1;
			}
		});
		async function E() {
			if (!l.value || !i.value.length) return;
			_.value = !0, g.value = "", h.value = "Building actor from the selected draft.";
			let e = {
				actorName: a.value,
				advancements: r.value,
				baseActorUuid: l.value.uuid,
				careers: i.value,
				portraitPath: o.value,
				settings: d.value,
				spells: c.value,
				traits: f.value,
				trappings: p.value
			};
			try {
				h.value = `Created ${(await t.bridge.buildNpc(e)).name}.`, n.resetDraft(), m.value = "builder";
			} catch (e) {
				g.value = ge(e), h.value = "";
			} finally {
				_.value = !1;
			}
		}
		async function ee(e) {
			await ie(e, async (e) => {
				await D(await t.bridge.resolveCareerDrop(e));
			});
		}
		async function D(e) {
			if (d.value.lowerCareerMode === "never") {
				k([{
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
				let n = await t.bridge.findLowerCareerCandidates(e), r = n.filter((e) => !fe(e.uuid));
				if (!r.length) {
					k([{
						career: e,
						mode: "add-or-increment"
					}], {
						enableLinkedSkillResolution: !1,
						message: ""
					}), h.value = "";
					return;
				}
				if (d.value.lowerCareerMode === "auto-add-all") {
					k([...r.map((e) => ({
						career: e,
						mode: "add-if-missing"
					})), {
						career: e,
						mode: "add-or-increment"
					}], {
						enableLinkedSkillResolution: !d.value.askForLinkedSkillSpecializations,
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
		async function te() {
			n.hydrateBaseActors(await t.bridge.listBaseActors(d.value));
		}
		async function O() {
			n.hydrateQuickTraits(await t.bridge.listQuickTraits(d.value));
		}
		function k(e, t) {
			let n = ae(e, t);
			if (n.rows.length) {
				S.value = n, se(S.value);
				return;
			}
			ce(e, t.message);
		}
		function ne() {
			let e = x.value;
			if (!e) return;
			let t = e.candidates.filter((t) => e.selectedUuids.includes(t.uuid));
			x.value = null, k([...t.map((e) => ({
				career: e,
				mode: "add-if-missing"
			})), {
				career: e.droppedCareer,
				mode: "add-or-increment"
			}], {
				enableLinkedSkillResolution: !d.value.askForLinkedSkillSpecializations,
				message: t.length > 0 ? `Added ${t.length} lower-tier career candidate${t.length === 1 ? "" : "s"}.` : ""
			});
		}
		function re() {
			let e = x.value;
			e && (x.value = null, k([{
				career: e.droppedCareer,
				mode: "add-or-increment"
			}], {
				enableLinkedSkillResolution: !1,
				message: ""
			}));
		}
		async function ie(e, t) {
			g.value = "";
			try {
				await t(e);
			} catch (e) {
				g.value = ge(e);
			}
		}
		function A() {
			let e = S.value;
			if (e) {
				for (let t of e.rows) {
					let e = t.resolvedSpecialization.trim() ? dc(t.baseName, t.resolvedSpecialization) : "";
					n.setSkillGrantResolution(t.resolutionKey, e);
				}
				for (let t of e.linkedRows) n.setSkillGrantResolution(t.resolutionKey, n.getSkillGrantResolution(t.linkedFromKey));
				S.value = null, ce(e.entries, e.message);
			}
		}
		function ae(e, t) {
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
						careerLabel: le(a.career),
						isLoadingSuggestions: !1,
						occurrence: o.occurrence,
						options: s.options,
						originalName: s.originalName,
						resolvedSpecialization: ue(s),
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
			let e = S.value;
			e && (S.value = null, ce(e.entries, e.message));
		}
		async function se(e) {
			await Promise.all(e.rows.map(async (e) => {
				if (j(e)) {
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
		function ce(e, t) {
			for (let t of e) {
				if (t.mode === "add-if-missing") {
					n.addCareerIfMissing(t.career);
					continue;
				}
				n.addCareer(t.career);
			}
			h.value = t;
		}
		function le(e) {
			return e.level === null ? e.name : `${e.name}, tier ${e.level}`;
		}
		function ue(e) {
			return e.specialization.trim().toLocaleLowerCase() === "any" ? "" : e.options[0] ?? "";
		}
		function de(e) {
			return e.occurrence > 0 ? `${e.originalName}, choice ${e.occurrence + 1}` : e.originalName;
		}
		function fe(e) {
			return i.value.some((t) => t.uuid === e);
		}
		function pe(e) {
			return x.value?.selectedUuids.includes(e) ?? !1;
		}
		function j(e) {
			return e.options.length <= 1 && e.specialization.trim().toLocaleLowerCase() === "any";
		}
		function me(e, t) {
			e.resolvedSpecialization = t;
		}
		function he(e, t) {
			let n = x.value, r = t.target;
			if (!(!n || !r || fe(e.uuid))) {
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
		return (e, n) => (W(), G("main", dp, [
			K("header", fp, [n[6] ||= K("div", null, [K("p", null, "WFRP4e Customizer"), K("h1", null, "NPC Builder")], -1), K("div", pp, [K("nav", mp, [
				K("button", {
					class: M({ "is-active": m.value === "builder" }),
					type: "button",
					onClick: n[0] ||= (e) => m.value = "builder"
				}, " Build ", 2),
				K("button", {
					class: M({ "is-active": m.value === "advancements" }),
					type: "button",
					onClick: n[1] ||= (e) => m.value = "advancements"
				}, " Advances ", 2),
				K("button", {
					class: M({ "is-active": m.value === "trappings" }),
					type: "button",
					onClick: n[2] ||= (e) => m.value = "trappings"
				}, " Trappings ", 2),
				K("button", {
					class: M({ "is-active": m.value === "traits" }),
					type: "button",
					onClick: n[3] ||= (e) => m.value = "traits"
				}, " Traits ", 2),
				B(s) || B(c).length ? (W(), G("button", {
					key: 0,
					class: M({ "is-active": m.value === "spells" }),
					type: "button",
					onClick: n[4] ||= (e) => m.value = "spells"
				}, " Spells ", 2)) : J("", !0),
				K("button", {
					class: M({ "is-active": m.value === "settings" }),
					type: "button",
					onClick: n[5] ||= (e) => m.value = "settings"
				}, " Settings ", 2)
			]), K("button", {
				disabled: !w.value,
				type: "button",
				onClick: E
			}, " Build NPC ", 8, hp)])]),
			q(qc, {
				open: x.value !== null,
				title: "Add Lower-Tier Careers?",
				onClose: re
			}, {
				default: Fn(() => [x.value ? (W(), aa($f, {
					key: 0,
					"candidate-groups": T.value,
					"is-career-queued": fe,
					"is-lower-career-selected": pe,
					prompt: x.value,
					onAddDroppedOnly: re,
					onAddSelected: ne,
					onLowerCareerSelected: he
				}, null, 8, ["candidate-groups", "prompt"])) : J("", !0)]),
				_: 1
			}, 8, ["open"]),
			q(qc, {
				open: S.value !== null,
				title: "Resolve Skill Specializations",
				onClose: oe
			}, {
				default: Fn(() => [S.value ? (W(), aa(up, {
					key: 0,
					"get-skill-resolution-label": de,
					prompt: S.value,
					"uses-freeform-skill-specialization": j,
					onAddWithoutResolving: oe,
					onApplySpecializations: A,
					onChooseSkillSpecialization: me
				}, null, 8, ["prompt"])) : J("", !0)]),
				_: 1
			}, 8, ["open"]),
			g.value ? (W(), G("p", gp, N(g.value), 1)) : h.value ? (W(), G("p", _p, N(h.value), 1)) : J("", !0),
			m.value === "settings" ? (W(), aa(Id, {
				key: 2,
				bridge: t.bridge
			}, null, 8, ["bridge"])) : m.value === "advancements" ? (W(), aa(vl, { key: 3 })) : m.value === "trappings" ? (W(), aa(Yf, {
				key: 4,
				bridge: t.bridge
			}, null, 8, ["bridge"])) : m.value === "traits" ? (W(), aa(kf, {
				key: 5,
				bridge: t.bridge,
				"difficulty-options": C.value
			}, null, 8, ["bridge", "difficulty-options"])) : m.value === "spells" ? (W(), aa(df, {
				key: 6,
				bridge: t.bridge
			}, null, 8, ["bridge"])) : (W(), aa(Yu, {
				key: 7,
				bridge: t.bridge,
				"is-loading-actors": y.value,
				"is-loading-base-draft": b.value,
				onCareerDrop: ee
			}, null, 8, [
				"bridge",
				"is-loading-actors",
				"is-loading-base-draft"
			]))
		]));
	}
}), yp = Ps(), bp = class extends foundry.applications.api.ApplicationV2 {
	#e;
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("wfrp4e-customizer-vue-root", "root"), n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("wfrp4e-customizer-vue-app", "vue-app"), t.replaceChildren(e);
		let r = this.getVueProps() ?? {};
		this.#e = ps(this.getVueComponent(), r), this.#e.use(yp), this.#e.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#e?.unmount(), this.#e = void 0;
	}
}, X = {
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
}, xp = {
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
}, Sp = {
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
function Cp(e) {
	return e in xp;
}
//#endregion
//#region src/shared/object-readers.ts
function wp(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function Z(e, t) {
	let n = e;
	for (let e of t) {
		if (!wp(n) || !(e in n)) return;
		n = n[e];
	}
	return n;
}
function Q(e, t) {
	let n = Z(e, t);
	return typeof n == "string" ? n.trim() : "";
}
function Tp(e, t) {
	let n = Z(e, t);
	return Array.isArray(n) ? n.filter((e) => typeof e == "string") : [];
}
function Ep(e, t, n = 0) {
	for (let n of t) {
		let t = Number(Z(e, n));
		if (Number.isFinite(t)) return t;
	}
	return n;
}
function Dp(e, t, n = !1) {
	for (let n of t) {
		let t = Z(e, n);
		if (typeof t == "boolean") return t;
	}
	return n;
}
function Op(e) {
	return Array.isArray(e) ? e.flatMap(Op) : typeof e == "string" ? e.split(/[,;\n\r]/).map((e) => e.trim()).filter(Boolean) : wp(e) ? Object.values(e).flatMap(Op) : [];
}
function kp(e, t, n) {
	let r = e;
	for (let e of t.slice(0, -1)) {
		let t = r[e];
		wp(t) || (r[e] = {}), r = r[e];
	}
	r[t[t.length - 1] ?? ""] = n;
}
//#endregion
//#region src/functions/npc-builder/extract-career-grants.ts
var Ap = {
	characteristics: [],
	skills: [],
	talents: [],
	trappings: []
};
function jp(e) {
	return {
		characteristics: Mp(e),
		skills: Np(e),
		talents: Fp(e, [["talents", "value"], ["talents"]]),
		trappings: Fp(e, [["trappings", "value"], ["trappings"]])
	};
}
function Mp(e) {
	let t = Fp(e, [["characteristics", "value"], ["characteristics"]]);
	if (t.length) return t.map(Pp);
	let n = Z(e, ["characteristics"]);
	if (!wp(n)) return [];
	let r = [];
	for (let [e, t] of Object.entries(n)) t && r.push(Pp(e));
	return Lp(r);
}
function Np(e) {
	return Fp(e, [["skills", "value"], ["skills"]], { preserveDuplicates: !0 });
}
function Pp(e) {
	let t = e.trim().toLocaleLowerCase();
	if (Cp(t)) return xp[t];
	let n = Sp[t];
	return n ? xp[n] : e.trim();
}
function Fp(e, t, n = {}) {
	for (let r of t) {
		let t = Op(Z(e, r));
		if (t.length) return n.preserveDuplicates ? Ip(t) : Lp(t);
	}
	return [];
}
function Ip(e) {
	return e.map((e) => e.trim()).filter(Boolean);
}
function Lp(e) {
	return [...new Set(Ip(e))].sort((e, t) => e.localeCompare(t));
}
Object.freeze(Ap);
//#endregion
//#region src/module/foundry/document-guards.ts
function Rp(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Actor";
}
function zp(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Item";
}
function Bp(e, t = "Expected a Foundry Actor.") {
	if (!Rp(e)) throw Error(t);
	return e;
}
function Vp(e, t = "Expected a Foundry Item.") {
	if (!zp(e)) throw Error(t);
	return e;
}
function Hp(e, t, n = `Expected a Foundry ${t} Item.`) {
	let r = Vp(e, n);
	if (r.type !== t) throw Error(n);
	return r;
}
//#endregion
//#region src/module/wfrp4e/career-index.ts
var Up = /* @__PURE__ */ new Map(), Wp = "idle", Gp = null;
function Kp() {
	return Gp || (Wp = "indexing", Up.clear(), Gp = Jp().then(() => {
		Wp = "ready";
	}).catch((e) => {
		Wp = "error", e instanceof Error && e.message, console.warn("wfrp4e-customizer-apps | Career indexing failed.", e);
	}), Gp);
}
async function qp(e) {
	return Wp === "idle" && Kp(), !e.careerGroup || e.level === null ? [] : [...Up.values()].filter((t) => $p(t, e)).sort(tm);
}
async function Jp() {
	Zp(), await rm();
	for (let e of game.packs ?? []) {
		if (!Qp(e) || !e.getDocuments) continue;
		let t = await e.getDocuments();
		for (let e of t) zp(e) && e.type === "career" && Up.set(e.uuid, nm(e));
		await rm();
	}
}
function Yp(e) {
	return Q(e.system, ["careergroup", "value"]);
}
function Xp(e) {
	let t = Z(e.system, ["level", "value"]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
function Zp() {
	for (let e of game.items?.contents ?? []) e.type === "career" && Up.set(e.uuid, nm(e));
}
function Qp(e) {
	return e.documentName === "Item";
}
function $p(e, t) {
	return e.uuid !== t.uuid && e.level !== null && t.level !== null && e.level < t.level && em(e.careerGroup) === em(t.careerGroup);
}
function em(e) {
	return e.trim().toLocaleLowerCase();
}
function tm(e, t) {
	let n = e.level ?? 0, r = t.level ?? 0;
	return n === r ? e.name.localeCompare(t.name) : n - r;
}
function nm(e) {
	return {
		careerGroup: Yp(e),
		grants: jp(e.system),
		img: e.img ?? "",
		level: Xp(e),
		name: e.name,
		uuid: e.uuid
	};
}
function rm() {
	return new Promise((e) => {
		globalThis.setTimeout(e, 0);
	});
}
//#endregion
//#region src/module/wfrp4e/skill-specializations.ts
var im = /* @__PURE__ */ new Map(), am = "idle", om = null;
async function sm(e) {
	let t = hc(e);
	return t ? (am === "idle" && cm(), om && await om, [...im.get(t) ?? []].sort((e, t) => e.localeCompare(t))) : [];
}
function cm() {
	return om || (am = "indexing", im.clear(), om = lm().then(() => {
		am = "ready";
	}).catch((e) => {
		am = "error", e instanceof Error && e.message, console.warn("wfrp4e-customizer-apps | Skill specialization indexing failed.", e);
	}), om);
}
async function lm() {
	dm(), await pm();
	for (let e of game.packs ?? []) {
		if (!fm(e) || !e.getDocuments) continue;
		let t = await e.getDocuments();
		for (let e of t) zp(e) && um(e);
		await pm();
	}
}
function um(e) {
	if (e.type !== "skill") return;
	let t = fc(e.name);
	if (!t) return;
	let n = hc(t.baseName), r = im.get(n) ?? /* @__PURE__ */ new Set();
	r.add(t.specialization), im.set(n, r);
}
function dm() {
	for (let e of game.items?.contents ?? []) um(e);
}
function fm(e) {
	return e.documentName === "Item";
}
function pm() {
	return new Promise((e) => {
		globalThis.setTimeout(e, 0);
	});
}
//#endregion
//#region src/module/foundry/item-sources.ts
function mm(e, t) {
	return {
		img: "systems/wfrp4e/icons/blank.png",
		name: e,
		system: {},
		type: t
	};
}
function hm(e, t, n) {
	let r = e ? e.toObject() : mm(t, n);
	return delete r._id, r;
}
function gm(e, t, n) {
	return e.items?.contents.find((e) => e.type === n && ym(e.name, t)) ?? null;
}
function _m(e, t, n) {
	return e.items?.contents.find((e) => t && e.uuid === t ? !0 : ym(e.name, n)) ?? null;
}
function vm(e, t) {
	return game.items?.contents.find((n) => t.includes(n.type) && ym(n.name, e)) ?? null;
}
function ym(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/wfrp4e/item-lookup.ts
async function bm(e, t) {
	return await game.wfrp4e?.utility?.findItem?.(e, t) || vm(e, t);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/advancements.ts
async function xm(e, t) {
	let n = {}, r = [], i = [];
	for (let a of t) {
		let t = Math.max(0, Math.floor(a.current));
		if (t <= 0) continue;
		let o = a.baseAdvances + t;
		if (a.kind === "characteristic") {
			wm(n, a, o);
			continue;
		}
		let s = gm(e, a.name, a.kind);
		if (s) {
			r.push({
				_id: s.id,
				"system.advances.value": o
			});
			continue;
		}
		let c = hm(await bm(a.name, [a.kind]), a.name, a.kind);
		c.type = a.kind, kp(c, [
			"system",
			"advances",
			"value"
		], o), i.push(c);
	}
	Object.keys(n).length && await e.update(n), r.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", r), i.length && await e.createEmbeddedDocuments("Item", i);
}
function Sm(e) {
	let t = [];
	for (let [n, r] of Object.entries(xp)) {
		let i = Ep(e.system, [[
			"characteristics",
			n,
			"advances",
			"value"
		], [
			"characteristics",
			n,
			"advances"
		]]), a = Ep(e.system, [
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
function Cm(e, t) {
	return e.items?.contents.filter((e) => e.type === t).map((e) => ({
		baseAdvances: Ep(e.system, [["advances", "value"], ["advances"]]),
		current: Ep(e.system, [["advances", "value"], ["advances"]]),
		kind: t,
		name: e.name
	})) ?? [];
}
function wm(e, t, n) {
	let r = Sp[t.name.trim().toLocaleLowerCase()];
	r && (e[`system.characteristics.${r}.advances`] = n);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/drop-data.ts
function Tm(e) {
	try {
		return JSON.parse(e);
	} catch {
		throw Error("Foundry drop data could not be read.");
	}
}
//#endregion
//#region src/functions/npc-builder/recommended-quick-traits.ts
var Em = [
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
async function Dm(e) {
	return Pm(await Nm(e, "Actor"));
}
async function Om(e) {
	return Pm(await Nm(e, "Item"));
}
function km() {
	return game.folders.contents.filter((e) => e.type === "Actor").map(Pm).sort((e, t) => e.name.localeCompare(t.name));
}
function Am() {
	return game.folders.contents.filter((e) => e.type === "Item").map(Pm).sort((e, t) => e.name.localeCompare(t.name));
}
function jm(e) {
	return e ? game.folders.contents.find((t) => t.uuid === e) ?? null : null;
}
function Mm(e) {
	let t = jm(e);
	return t?.type === "Item" ? t : null;
}
async function Nm(e, t) {
	let n = e.trim();
	if (!n) throw Error("Enter a folder name first.");
	let r = game.folders.contents.find((e) => e.type === t && Fm(e.name, n));
	if (r) return r;
	let i = await Folder.create({
		name: n,
		type: t
	});
	if (!i) throw Error("Foundry did not create the folder.");
	return i;
}
function Pm(e) {
	return {
		name: e.name,
		uuid: e.uuid
	};
}
function Fm(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits.ts
var Im = [
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
async function Lm(e, t) {
	let n = [], r = [], i = [];
	for (let a of t) {
		let t = a.source === "base" ? _m(e, a.sourceUuid, a.name) : gm(e, a.name, "trait");
		if (a.ignored) {
			t && i.push(t.id);
			continue;
		}
		if (t) {
			n.push(qm(t.id, a.config));
			continue;
		}
		let o = hm(a.sourceUuid ? await Qm(a.sourceUuid) : await bm(a.name, ["trait"]), a.name, "trait");
		o.type = "trait", kp(o, ["system", "disabled"], !1), Km(o, a.config), r.push(o);
	}
	i.length && e.deleteEmbeddedDocuments && await e.deleteEmbeddedDocuments("Item", i), n.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", n), r.length && await e.createEmbeddedDocuments("Item", r);
}
async function Rm(e) {
	let t = Mm(e.quickTraitFolderUuid);
	if (!t) throw Error("Choose a Quick Traits item folder before importing traits.");
	let n = new Set(Zm(e).map((e) => e.name.trim().toLocaleLowerCase()));
	for (let e of Em) {
		if (n.has(e.trim().toLocaleLowerCase())) continue;
		let r = hm(await bm(e, ["trait"]), e, "trait");
		r.folder = t.id, r.type = "trait", await Item.create(r);
	}
	return ui.notifications?.info("Imported recommended quick traits."), zm(e);
}
async function zm(e) {
	return Zm(e).map(eh).sort((e, t) => e.name.localeCompare(t.name));
}
async function Bm() {
	let e = Z(game.wfrp4e?.config, ["difficultyLabels"]);
	if (!wp(e)) return Im;
	let t = Object.entries(e).filter((e) => {
		let [t, n] = e;
		return !!t.trim() && typeof n == "string";
	}).map(([e, t]) => ({
		label: t,
		value: e
	}));
	return t.length ? t : Im;
}
function Vm(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && !Jm(e)).map($m) ?? [];
}
function Hm(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && Jm(e)).map($m) ?? [];
}
function Um(e) {
	Array.isArray(e.items) && (e.items = e.items.filter((e) => {
		if (typeof e != "object" || !e) return !0;
		let t = e;
		return t.type !== "trait" || !Ym(t);
	}));
}
async function Wm(e) {
	let t = Tm(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Trait item here.");
	let n = Hp(await fromUuid(t.uuid), "trait", "Drop a Foundry Trait item here.");
	return {
		config: Gm(n),
		ignored: !1,
		key: `custom:${n.uuid}`,
		name: n.name,
		source: "custom",
		sourceUuid: n.uuid
	};
}
function Gm(e) {
	return {
		...Xs(),
		attackType: th(e.system, ["rollable", "attackType"]) || "melee",
		bonusCharacteristic: th(e.system, ["rollable", "bonusCharacteristic"]),
		damage: Dp(e.system, [["rollable", "damage"]]),
		defaultDifficulty: th(e.system, ["rollable", "defaultDifficulty"]) || "challenging",
		dice: th(e.system, ["rollable", "dice"]),
		rollable: Dp(e.system, [["rollable", "value"]]),
		skill: th(e.system, ["rollable", "skill"]),
		sl: Dp(e.system, [["rollable", "SL"]], !0),
		specification: th(e.system, ["specification", "value"])
	};
}
function Km(e, t) {
	kp(e, [
		"system",
		"specification",
		"value"
	], t.specification), t.rollable && !t.damage && kp(e, [
		"system",
		"rollable",
		"defaultDifficulty"
	], t.defaultDifficulty), t.damage && t.dice && kp(e, [
		"system",
		"rollable",
		"dice"
	], t.dice);
}
function qm(e, t) {
	return {
		_id: e,
		"system.specification.value": t.specification,
		...t.rollable && !t.damage ? { "system.rollable.defaultDifficulty": t.defaultDifficulty } : {},
		...t.damage && t.dice ? { "system.rollable.dice": t.dice } : {}
	};
}
function Jm(e) {
	return Dp(e.system, [["disabled"], ["disabled", "value"]]);
}
function Ym(e) {
	return Dp(e.system, [["disabled"], ["disabled", "value"]]);
}
function Xm(e, t) {
	return t.quickTraitFolderUuid ? e.folder?.uuid === t.quickTraitFolderUuid : !1;
}
function Zm(e) {
	return game.items?.contents.filter((t) => t.type === "trait" && Xm(t, e)) ?? [];
}
async function Qm(e) {
	let t = await fromUuid(e);
	return zp(t) ? t : null;
}
function $m(e) {
	return {
		config: Gm(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
function eh(e) {
	return {
		config: Gm(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
function th(e, t) {
	let n = Z(e, t);
	return typeof n == "string" ? n.trim() : typeof n == "number" ? String(n) : "";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/trappings.ts
var nh = [
	"ammunition",
	"armour",
	"container",
	"money",
	"trapping",
	"weapon"
];
async function rh(e, t) {
	let n = [], r = [], i = [];
	for (let a of t) {
		let t = a.source === "base" ? _m(e, a.sourceUuid, a.name) : null;
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
		let o = await lh(a), s = a.resolution.selectedItemType || a.itemType || "trapping", c = hm(o, a.resolution.selectedName || a.name, s);
		c.type = s || c.type || "trapping", kp(c, [
			"system",
			"quantity",
			"value"
		], a.quantity), r.push(c);
	}
	i.length && e.deleteEmbeddedDocuments && await e.deleteEmbeddedDocuments("Item", i), n.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", n), r.length && await e.createEmbeddedDocuments("Item", r);
}
async function ih(e) {
	return xc(e, await uh());
}
async function ah(e) {
	let t = Tm(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Item here.");
	let n = Vp(await fromUuid(t.uuid), "Drop a Foundry Item here.");
	return {
		ignored: !1,
		itemType: n.type,
		key: `custom:${n.uuid}`,
		name: n.name,
		quantity: sh(n),
		resolution: yc({
			itemType: n.type,
			name: n.name,
			uuid: n.uuid
		}),
		source: "custom",
		sourceUuid: n.uuid
	};
}
function oh(e) {
	let t = ch();
	return e.items?.contents.filter((e) => t.includes(e.type)).map((e) => ({
		itemType: e.type,
		name: e.name,
		quantity: sh(e),
		uuid: e.uuid
	})) ?? [];
}
function sh(e) {
	return Ep(e.system, [["quantity", "value"], ["quantity"]]) || 1;
}
function ch() {
	let e = Tp(game.wfrp4e?.config, ["trappingItems"]);
	return e.length ? e : nh;
}
async function lh(e) {
	if (e.sourceUuid) {
		let t = await fromUuid(e.sourceUuid);
		return zp(t) ? t : null;
	}
	if (e.resolution.selectedCandidateUuid) {
		let t = await fromUuid(e.resolution.selectedCandidateUuid);
		return zp(t) ? t : null;
	}
	return e.resolution.status === "fallback" ? null : bm(e.resolution.selectedName || e.name, ch());
}
async function uh() {
	let e = [], t = ch();
	for (let n of game.items?.contents ?? []) t.includes(n.type) && e.push(mh(n, "World"));
	for (let n of game.packs ?? []) {
		if (!ph(n)) continue;
		let r = await dh(n, t);
		if (r.length) {
			e.push(...r);
			continue;
		}
		if (!n.getDocuments) continue;
		let i = await n.getDocuments();
		for (let r of i) zp(r) && t.includes(r.type) && e.push(mh(r, n.title ?? "Compendium"));
	}
	return e;
}
async function dh(e, t) {
	return e.getIndex ? ((await e.getIndex({ fields: ["name", "type"] })).contents ?? []).filter((n) => !!(n.name && n.type && fh(e, n) && t.includes(n.type))).map((t) => ({
		itemType: t.type ?? "trapping",
		name: t.name ?? "",
		sourceLabel: e.title ?? "Compendium",
		uuid: fh(e, t)
	})) : [];
}
function fh(e, t) {
	return t.uuid ? t.uuid : t._id && e.getUuid ? e.getUuid(t._id) : "";
}
function ph(e) {
	return e.documentName === "Item";
}
function mh(e, t) {
	return {
		itemType: e.type,
		name: e.name,
		sourceLabel: t,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/actors.ts
function hh(e) {
	return game.actors.contents.filter((t) => xh(t, e)).map(vh);
}
async function gh(e) {
	let t = Bp(await fromUuid(e));
	return {
		advancements: [
			...Sm(t),
			...Cm(t, "skill"),
			...Cm(t, "talent")
		],
		optionalTraits: Hm(t),
		traits: Vm(t),
		trappings: oh(t)
	};
}
async function _h(e) {
	let t = Tm(e);
	if (t.type !== "Actor") throw Error("Drop a Foundry Actor here.");
	let n = null;
	return t.uuid ? n = await fromUuid(t.uuid) : t.id && (n = game.actors.get(t.id)), vh(Bp(n));
}
function vh(e) {
	return {
		img: e.img ?? "",
		name: e.name,
		prototypeTokenImg: bh(e),
		species: yh(e),
		type: e.type,
		uuid: e.uuid
	};
}
function yh(e) {
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
function bh(e) {
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
function xh(e, t) {
	return t.baseActorFolderUuid ? e.folder?.uuid === t.baseActorFolderUuid : !0;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic.ts
var Sh = "spell", Ch = new Set($s), wh = new Set(ec), Th = "[WFRP Customizer Apps][Spell Lookup]";
async function Eh(e, t) {
	let n = [];
	for (let r of t) {
		if (!r.selected || gm(e, r.name, Sh)) continue;
		let t = hm(r.sourceUuid ? await lg(r.sourceUuid) : null, r.name, Sh);
		t.type = Sh, n.push(t);
	}
	n.length && await e.createEmbeddedDocuments("Item", n);
}
async function Dh(e) {
	let t = jh(e, Ah());
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
	let n = await Mh(), r = /* @__PURE__ */ new Map(), i = [];
	for (let e of n) {
		let n = Bh(e, t);
		if (!n) {
			i.length < 20 && i.push({
				loreTerms: Hh(e.system),
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
async function Oh(e) {
	let t = Tm(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Spell item here.");
	let n = Hp(await fromUuid(t.uuid), Sh, "Drop a Foundry Spell item here."), r = Bh(eg(n, "Dropped"), [...Ah(), Kh()]) ?? qh(Hh(n.system)[0] ?? "");
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
async function kh() {
	return Ah().map((e) => ({
		category: ac(e.key),
		key: e.key,
		label: e.name,
		value: e.name,
		wind: e.wind
	})).sort((e, t) => e.category === t.category ? e.label.localeCompare(t.label) : e.category.localeCompare(t.category));
}
function Ah() {
	let e = Z(game.wfrp4e?.config, ["magicLores"]), t = Z(game.wfrp4e?.config, ["magicWind"]), n = [];
	if (!wp(e)) return [Kh()];
	for (let [r, i] of Object.entries(e)) {
		let e = Yh(i) || r, a = Jh(t, r);
		n.push({
			key: r,
			matchTerms: Gh(r, e, a),
			name: e,
			wind: a
		});
	}
	return n.some((e) => e.key === "petty") || n.push(Kh()), n;
}
function jh(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) {
		if (r.isAmbiguous) continue;
		if (r.kind === "petty-magic") {
			let e = Wh("petty magic", t);
			e && n.set(e.key, e);
			continue;
		}
		let e = Wh(r.rawLore, t);
		e && n.set(e.key, e);
	}
	return [...n.values()];
}
async function Mh() {
	let e = [], t = [...game.packs ?? []];
	$("Candidate lookup start", {
		itemPacks: t.filter(Qh).length,
		totalPacks: t.length,
		warhammerUtilityAvailable: !!ag(),
		worldItems: game.items?.contents.length ?? 0
	});
	let n = await Nh();
	$("WFRP helper lookup complete", {
		utilityInputs: n.length,
		utilitySamples: n.slice(0, 10).map(sg)
	}), e.push(...n);
	for (let t of game.items?.contents ?? []) t.type === Sh && e.push(eg(t, "World"));
	$("World spell scan complete", { worldSpellCount: e.filter((e) => e.sourceLabel === "World").length });
	for (let n of t) if (Qh(n)) try {
		let t = await Ph(n);
		e.push(...t), $("Compendium spell scan complete", {
			inputCount: t.length,
			pack: og(n),
			samples: t.slice(0, 5).map(sg)
		});
	} catch (e) {
		console.warn(`wfrp4e-customizer-apps | Spell lookup skipped compendium "${n.title ?? n.collection ?? "unknown"}".`, e);
	}
	let r = ig(e);
	return $("Candidate lookup complete", {
		rawInputCount: e.length,
		uniqueInputCount: r.length
	}), r;
}
async function Nh() {
	let e = ag();
	if (!e) return $("WFRP helper unavailable"), [];
	try {
		let t = await e.findAllItems(Sh, "Loading Spells", !0, ["system.lore.value"]);
		return $("WFRP helper raw result", {
			count: t.length,
			samples: t.slice(0, 10).map(cg)
		}), (await Promise.all(t.map((e) => Zh(e)))).filter((e) => !!e);
	} catch (e) {
		return console.warn(`${Th} WFRP helper lookup failed.`, e), [];
	}
}
async function Ph(e) {
	if ($("Compendium index scan start", { pack: og(e) }), !e.getIndex) return $("Compendium has no index; loading documents", { pack: og(e) }), zh(e);
	let t = Fh(await e.getIndex({ fields: [
		"name",
		"type",
		"img",
		"system.lore.value"
	] }));
	if ($("Compendium index loaded", {
		entries: t.length,
		pack: og(e),
		samples: t.slice(0, 5).map((t) => ({
			hasLoreTerms: Hh(t).length > 0,
			name: t.name,
			type: t.type,
			uuid: Xh(e, t)
		}))
	}), !t.length) return $("Compendium index empty; loading documents", { pack: og(e) }), zh(e);
	let n = t.filter(Lh);
	$("Compendium index spell candidates", {
		pack: og(e),
		spellEntries: n.length
	});
	let r = n.filter((e) => e.name).map((t) => rg(e, t));
	return r.length || !$h(e) ? r : zh(e);
}
function Fh(e) {
	return Array.isArray(e) ? e.filter(Ih) : Array.isArray(e.contents) ? e.contents.filter(Ih) : Rh(e) ? [...e].flatMap((e) => {
		let t = Array.isArray(e) ? e[1] : e;
		return Ih(t) ? [t] : [];
	}) : [];
}
function Ih(e) {
	return wp(e);
}
function Lh(e) {
	return e.type === Sh ? !0 : !!(e.name && (Hh(e).length || Uh(e.name)));
}
function Rh(e) {
	return wp(e) && Symbol.iterator in e;
}
async function zh(e) {
	if (!e.getDocuments) return $("Compendium has no document loader", { pack: og(e) }), [];
	$("Compendium document load start", { pack: og(e) });
	let t = await e.getDocuments(), n = t.filter((e) => zp(e) && e.type === Sh);
	return $("Compendium document load complete", {
		documents: t.length,
		pack: og(e),
		spellDocuments: n.length,
		spellSamples: n.slice(0, 5).map((e) => ({
			loreTerms: Hh(e.system),
			name: e.name,
			uuid: e.uuid
		}))
	}), n.map((t) => eg(t, e.title ?? "Compendium"));
}
function Bh(e, t) {
	let n = [...Hh(e.system), Uh(e.name)].filter(Boolean);
	for (let e of n) {
		let n = Vh(e, t);
		if (n) return n;
		let r = Wh(e, t);
		if (r) return r;
	}
	return null;
}
function Vh(e, t) {
	let n = nc(e);
	return n === "lore" ? t.find((e) => e.key !== "petty") ?? null : n === "the eight winds" || n === "eight winds" ? t.find((e) => Ch.has(e.key)) ?? null : n === "dark lore" ? t.find((e) => wh.has(e.key)) ?? null : null;
}
function Hh(e) {
	return [
		...Op(Z(e, ["lore", "value"])),
		...Op(Z(e, ["lore"])),
		...Op(Z(e, ["magicLore", "value"])),
		...Op(Z(e, ["magicLore"])),
		...Op(Z(e, ["category", "value"])),
		...Op(Z(e, [
			"system",
			"lore",
			"value"
		])),
		...Op(Z(e, ["system", "lore"])),
		...Op(Z(e, ["system.lore.value"])),
		...Op(Z(e, ["system.lore"]))
	];
}
function Uh(e) {
	return /\(([^)]+)\)\s*$/.exec(e)?.[1]?.trim() ?? "";
}
function Wh(e, t) {
	let n = nc(e);
	return n ? t.find((e) => e.matchTerms.some((e) => nc(e) === n)) ?? null : null;
}
function Gh(e, t, n) {
	let r = /* @__PURE__ */ new Set(), i = nc(e), a = nc(t);
	for (let i of [
		e,
		t,
		n
	]) i.trim() && r.add(i.trim());
	return (i === "petty" || a === "petty") && r.add("Petty Magic"), (i === "shadow" || a === "shadow") && r.add("Shadows"), t && !/^lore of /i.test(t) && r.add(`Lore of ${t}`), [...r];
}
function Kh() {
	return {
		key: "petty",
		matchTerms: ["petty", "petty magic"],
		name: "Petty Magic",
		wind: ""
	};
}
function qh(e) {
	let t = e.trim() || "Unknown Lore";
	return {
		key: nc(t) || "unknown",
		matchTerms: [t],
		name: t,
		wind: ""
	};
}
function Jh(e, t) {
	return wp(e) ? Yh(e[t]) : "";
}
function Yh(e) {
	return typeof e == "string" ? e.trim() : wp(e) ? Q(e, ["name"]) || Q(e, ["label"]) || Q(e, ["value"]) : "";
}
function Xh(e, t) {
	return t.uuid ? t.uuid : t._id && e.getUuid ? e.getUuid(t._id) : "";
}
async function Zh(e) {
	if (typeof e == "string") {
		let t = await fromUuid(e);
		return zp(t) && t.type === Sh ? eg(t, tg(t)) : null;
	}
	if (zp(e)) return e.type === Sh ? eg(e, tg(e)) : null;
	if (!wp(e) || Q(e, ["type"]) !== Sh) return null;
	let t = Q(e, ["name"]);
	return t ? {
		img: Q(e, ["img"]) || Q(e, ["thumb"]),
		name: t,
		sourceLabel: ng(Q(e, ["uuid"]), "WFRP Item Lookup"),
		system: Z(e, ["system"]),
		uuid: Q(e, ["uuid"])
	} : null;
}
function Qh(e) {
	return e.documentName === "Item" || Q(e, ["metadata", "type"]) === "Item" || Q(e, ["metadata", "documentName"]) === "Item";
}
function $h(e) {
	return e.collection === "wfrp4e-core.items" || e.collection === "wfrp4e-wom.items";
}
function eg(e, t) {
	return {
		img: e.img ?? "",
		name: e.name,
		sourceLabel: t,
		system: e.system,
		uuid: e.uuid
	};
}
function tg(e) {
	return /^Item\./i.test(e.uuid) ? "World" : ng(e.uuid, "WFRP Item Lookup");
}
function ng(e, t) {
	let n = /^Compendium\.([^.]+\.[^.]+)\./.exec(e)?.[1];
	return n ? [...game.packs ?? []].find((e) => e.collection === n)?.title ?? n : t;
}
function rg(e, t) {
	return {
		img: t.img ?? t.thumb ?? "",
		name: t.name ?? "",
		sourceLabel: e.title ?? "Compendium",
		system: t,
		uuid: Xh(e, t)
	};
}
function ig(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.uuid || n.name.trim().toLocaleLowerCase();
		t.has(e) || t.set(e, n);
	}
	return [...t.values()];
}
function ag() {
	let e = Z(globalThis, [
		"warhammer",
		"utility",
		"findAllItems"
	]);
	return typeof e == "function" ? { findAllItems: e } : null;
}
function $(e, t) {
	if (t) {
		console.info(`${Th} ${e}`, t);
		return;
	}
	console.info(`${Th} ${e}`);
}
function og(e) {
	return [
		e.title ?? "",
		e.collection ?? "",
		Q(e, ["metadata", "type"]),
		Q(e, ["metadata", "documentName"]),
		e.documentName
	].filter(Boolean).join(" | ");
}
function sg(e) {
	return {
		loreTerms: Hh(e.system),
		name: e.name,
		sourceLabel: e.sourceLabel,
		uuid: e.uuid
	};
}
function cg(e) {
	return typeof e == "string" ? {
		kind: "uuid-string",
		value: e
	} : wp(e) ? {
		documentName: Q(e, ["documentName"]),
		hasSystem: wp(Z(e, ["system"])),
		loreTerms: Hh(Z(e, ["system"])),
		name: Q(e, ["name"]),
		type: Q(e, ["type"]),
		uuid: Q(e, ["uuid"])
	} : { kind: typeof e };
}
async function lg(e) {
	let t = await fromUuid(e);
	return zp(t) && t.type === Sh ? t : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/build-npc.ts
async function ug(e) {
	let t = await dg(e);
	if (!t) throw Error("Foundry did not create the NPC Actor.");
	let n = fg(e), r = e.careers.at(-1), i = {
		name: n,
		"prototypeToken.name": n
	}, a = e.portraitPath || r?.img || "";
	return a && (i.img = a, i["prototypeToken.texture.src"] = a), await t.update(i), await xm(t, e.advancements), await Lm(t, e.traits), await rh(t, e.trappings), await Eh(t, e.spells), t.sheet?.render(!0), ui.notifications?.info(`Created NPC "${n}".`), {
		name: n,
		uuid: t.uuid
	};
}
async function dg(e) {
	let t = Bp(await fromUuid(e.baseActorUuid)).toObject(), n = jm(e.settings.outputActorFolderUuid);
	return delete t._id, delete t.folder, t.type = "npc", Um(t), n && (t.folder = n.id), Actor.create(t);
}
function fg(e) {
	if (!e.settings.includeSpeciesInName) return e.actorName;
	let t = game.actors.contents.find((t) => t.uuid === e.baseActorUuid), n = t ? yh(t) : "";
	return !n || e.actorName.toLocaleLowerCase().includes(n.toLocaleLowerCase()) ? e.actorName : `${n} ${e.actorName}`;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/careers.ts
async function pg(e) {
	let t = Tm(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a WFRP Career item here.");
	return mg(Hp(await fromUuid(t.uuid), "career", "Drop a WFRP Career item here."));
}
function mg(e) {
	return {
		careerGroup: hg(e),
		grants: jp(e.system),
		img: e.img ?? "",
		level: gg(e),
		name: e.name,
		uuid: e.uuid
	};
}
function hg(e) {
	return Q(e.system, ["careergroup", "value"]);
}
function gg(e) {
	let t = Z(e.system, ["level", "value"]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits.ts
var _g = [
	".webp",
	".png",
	".jpg",
	".jpeg",
	".gif"
];
async function vg(e, t) {
	let n = Sl(e);
	if (!n.length) return [];
	let r = {
		candidates: [],
		maxDirectoryBudget: 0,
		searchTerms: n,
		seenPaths: /* @__PURE__ */ new Set(),
		visitedDirectories: 0
	};
	return e.includeCompendiumAssets && (yg(r, t), await bg(r, t)), e.includeFilePickerAssets && await Sg(r, t), Dg(t, r, {
		currentLocation: "Portrait search complete",
		maxDirectories: r.maxDirectoryBudget,
		phase: "ready"
	}), r.candidates;
}
function yg(e, t) {
	Dg(t, e, {
		currentLocation: "World Actors and Items",
		maxDirectories: 0,
		phase: "world-documents"
	});
	for (let t of game.actors.contents) xg(e, {
		imagePaths: [{
			label: "actor image",
			path: t.img ?? ""
		}, {
			label: "token image",
			path: Ag(t)
		}],
		name: t.name,
		sourceLabel: "World Actors",
		sourceKey: t.uuid
	});
	for (let t of game.items?.contents ?? []) xg(e, {
		imagePaths: [{
			label: "item image",
			path: t.img ?? ""
		}],
		name: t.name,
		sourceLabel: "World Items",
		sourceKey: t.uuid
	});
}
async function bg(e, t) {
	Dg(t, e, {
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
		for (let r of n?.contents ?? []) xg(e, {
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
function xg(e, t) {
	let n = t.imagePaths.filter(({ path: e }) => !!e);
	if (kg(t.name, n, e.searchTerms)) for (let r of n) Og(e, {
		img: r.path,
		key: `foundry-asset:${t.sourceKey}:${r.label}`,
		label: `${t.name || Pg(r.path)} ${r.label} (${t.sourceLabel})`,
		source: "foundry-asset"
	});
}
async function Sg(e, t) {
	let n = Tg();
	e.maxDirectoryBudget = 0;
	for (let r of n) await Cg(e, r, 0, t);
}
async function Cg(e, t, n, r) {
	let i = [t.target];
	for (; i.length;) {
		let a = i.shift() ?? "", o = await Eg(t.source, a, t.bucket), s = o.files ?? [], c = o.dirs ?? [];
		e.visitedDirectories += 1, Dg(r, e, {
			currentLocation: Ng(t, a),
			maxDirectories: n,
			phase: "filesystem"
		}), wg(e, t, s), i.push(...c);
	}
}
function wg(e, t, n) {
	for (let r of n) Cl(r, e.searchTerms) && Og(e, {
		img: r,
		key: `foundry-asset:${r}`,
		label: jg(r, Mg(t)),
		source: "foundry-asset"
	});
}
function Tg() {
	return [{
		source: "data",
		target: ""
	}];
}
async function Eg(e, t, n, r = _g) {
	try {
		let i = { wildcard: !1 };
		return r && (i.extensions = r), n && (i.bucket = n), await foundry.applications.apps.FilePicker.implementation.browse(e, t, i);
	} catch {
		return {};
	}
}
function Dg(e, t, n) {
	e?.({
		candidatesFound: t.candidates.length,
		currentLocation: n.currentLocation,
		directoriesVisited: t.visitedDirectories,
		maxDirectories: n.maxDirectories,
		phase: n.phase
	});
}
function Og(e, t) {
	let n = t.img.trim().toLocaleLowerCase();
	!n || e.seenPaths.has(n) || (e.seenPaths.add(n), e.candidates.push(t));
}
function kg(e, t, n) {
	return wl(e, n) || t.some(({ path: e }) => wl(e, n));
}
function Ag(e) {
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
function jg(e, t) {
	return `${Pg(e)} (${t})`;
}
function Mg(e) {
	return e.bucket ? `${e.source}: ${e.bucket}` : e.source;
}
function Ng(e, t) {
	let n = Mg(e);
	return t ? `${n} / ${t}` : n;
}
function Pg(e) {
	return e.split(/[\\/]/).at(-1) ?? e;
}
//#endregion
//#region src/module/settings/foundry-setting-adapter.ts
function Fg(e) {
	return e;
}
function Ig(t) {
	game.settings.register(e, t.key, {
		config: t.config ?? !1,
		default: t.defaultValue,
		name: t.name,
		scope: t.scope ?? "world",
		type: Object
	});
}
function Lg(t) {
	return t.normalize(game.settings.get(e, t.key));
}
async function Rg(t, n) {
	let r = t.normalize(n);
	return await game.settings.set(e, t.key, r), r;
}
//#endregion
//#region src/module/apps/npc-builder/settings.ts
var zg = "npcBuilderSettings", Bg = Zs(), Vg = Fg({
	defaultValue: Bg,
	key: zg,
	name: "NPC Builder Settings",
	normalize: Gg
});
function Hg() {
	Ig(Vg);
}
function Ug() {
	return Lg(Vg);
}
async function Wg(e) {
	return Rg(Vg, e);
}
function Gg(e) {
	if (typeof e != "object" || !e) return { ...Bg };
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
		lowerCareerMode: Kg(t.lowerCareerMode) ? t.lowerCareerMode : "prompt",
		outputActorFolderUuid: typeof t.outputActorFolderUuid == "string" ? t.outputActorFolderUuid : "",
		quickTraitFolderUuid: typeof t.quickTraitFolderUuid == "string" ? t.quickTraitFolderUuid : "",
		searchCompendiumPortraitAssets: t.searchCompendiumPortraitAssets ?? !0,
		searchFoundryPortraitAssets: t.searchFoundryPortraitAssets ?? !0,
		searchWebPortraitAssets: t.searchWebPortraitAssets ?? !1
	};
}
function Kg(e) {
	return e === "auto-add-all" || e === "never" || e === "prompt";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/index.ts
var qg = {
	buildNpc: ug,
	ensureActorFolder: Dm,
	ensureItemFolder: Om,
	findLowerCareerCandidates: qp,
	importRecommendedQuickTraits: Rm,
	listActorFolders: async () => km(),
	listBaseActors: async (e) => hh(e),
	listFoundryPortraitCandidates: vg,
	listMagicLoreOptions: kh,
	listSpellsForMagicGrants: Dh,
	listItemFolders: async () => Am(),
	listQuickTraits: zm,
	listSkillSpecializations: sm,
	listTraitDifficultyOptions: Bm,
	loadBaseActorDraftData: gh,
	loadSettings: async () => Ug(),
	resolveActorDrop: _h,
	resolveCareerDrop: pg,
	resolveSpellDrop: Oh,
	resolveTraitDrop: Wm,
	resolveTrapping: ih,
	resolveTrappingDrop: ah,
	saveSettings: Wg
}, Jg = class extends bp {
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
		return vp;
	}
	getVueProps() {
		return { bridge: qg };
	}
}, Yg = { class: "customizer-workbench" }, Xg = {
	"aria-label": "Customizer targets",
	class: "customizer-workbench__body"
}, Zg = { class: "customizer-workbench__targets" }, Qg = /* @__PURE__ */ lr({
	__name: "WorkbenchApp",
	setup(e) {
		let t = [
			"Actor sheets",
			"Item sheets",
			"Reusable dialogs"
		];
		return (e, n) => (W(), G("main", Yg, [n[1] ||= K("header", { class: "customizer-workbench__header" }, [K("p", null, "WFRP4e"), K("h1", null, "Customizer Workbench")], -1), K("section", Xg, [K("div", Zg, [(W(), G(U, null, H(t, (e) => K("button", {
			key: e,
			disabled: "",
			type: "button"
		}, N(e), 1)), 64))]), n[0] ||= K("div", { class: "customizer-workbench__empty" }, [K("strong", null, "Vue application shell mounted."), K("span", null, "The first customizer surface can land here.")], -1)])]));
	}
}), $g = class extends bp {
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
		return Qg;
	}
}, e_ = `${e}.debugShapeProbes`, t_ = "wfrp4eCustomizerShapeProbes", n_ = "wfrp4eCustomizerShapePreset", r_ = 2, i_ = 12, a_ = 6, o_ = 60, s_ = { "npc-builder": [
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
function c_() {
	localStorage.removeItem(e_), console.info(`${e} | Cleared debug shape probes.`);
}
function l_() {
	return O_();
}
function u_(e, t = {}) {
	let n = d_(e, t);
	return y_(n), n;
}
function d_(e, t = {}, n) {
	let r = h_(t.maxDepth, r_, a_), i = h_(t.maxEntries, i_, o_), a = P_(e), o = {
		inspectedAt: (/* @__PURE__ */ new Date()).toISOString(),
		label: t.label || e,
		maxDepth: r,
		maxEntries: i,
		path: e,
		value: B_(a, {
			maxDepth: r,
			maxEntries: i,
			seen: /* @__PURE__ */ new WeakSet()
		})
	};
	return n && (o.hook = n), o;
}
function f_() {
	let t = O_();
	for (let e of ["init", "setup"]) {
		let n = t.filter((t) => t.hook === e);
		n.length && Hooks.once(e, () => {
			for (let t of n) __(t, e);
		});
	}
	Hooks.once("ready", () => {
		let t = O_().filter((e) => (e.hook ?? "ready") === "ready");
		j_() && console.info(`${e} | Debug shape ready probes discovered: ${t.length}`, window.location.href);
		for (let e of t) __(e, "ready");
	});
}
function p_(t) {
	let n = t.map(x_);
	localStorage.setItem(e_, JSON.stringify(n)), console.info(`${e} | Stored ${n.length} debug shape probe(s). Reload Foundry to run init/setup probes.`);
}
function m_(e, t, n) {
	if (t === "at") {
		let t = Number(n[0] ?? 0), r = Number.isFinite(t) ? t : 0;
		return H_(e).at(r);
	}
	if (t === "findByName") {
		let t = b_(n[0] ?? "");
		return H_(e).find((e) => b_(E_(e, "name")) === t);
	}
	if (t === "findByType") {
		let t = b_(n[0] ?? "");
		return H_(e).find((e) => b_(E_(e, "type")) === t);
	}
	if (t === "get") {
		let t = n[0] ?? "";
		if (e instanceof Map) return e.get(t);
		let r = E_(e, "get");
		if (typeof r == "function") return r.call(e, t);
	}
	if (t === "sample") {
		let t = h_(n[0], 3, o_);
		return H_(e).slice(0, t);
	}
	throw Error(`Unsupported path method "${t}".`);
}
function h_(e, t, n) {
	let r = Number(e);
	return Number.isFinite(r) ? Math.max(0, Math.min(n, Math.floor(r))) : t;
}
function g_(e, t) {
	return Object.keys(e).sort().slice(0, t);
}
function __(t, n) {
	try {
		y_(d_(t.path, t, n));
	} catch (n) {
		console.warn(`${e} | Debug shape probe failed for "${t.path}".`, n);
	}
}
function v_(e) {
	return typeof e == "object" && !!e;
}
function y_(t) {
	console.info(`${e} | Debug shape probe: ${t.label}`, JSON.stringify(t, null, 2));
}
function b_(e) {
	return typeof e == "string" ? e.trim().toLocaleLowerCase() : "";
}
function x_(e) {
	let t = {
		hook: e.hook ?? "ready",
		maxDepth: h_(e.maxDepth, r_, a_),
		maxEntries: h_(e.maxEntries, i_, o_),
		path: e.path.trim()
	};
	return e.label && (t.label = e.label), t;
}
function S_(e) {
	return e.trim() ? e.split(",").map((e) => w_(e.trim())).map(String) : [];
}
function C_(e) {
	let t = e.trim();
	return /^-?\d+$/.test(t) ? Number(t) : w_(t);
}
function w_(e) {
	let t = e.match(/^['"](?<value>.*)['"]$/);
	return t?.groups ? t.groups.value ?? "" : e;
}
function T_(e) {
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
				args: S_(e.groups.args ?? ""),
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
				index: C_(e),
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
function E_(e, t) {
	if (!(!v_(e) && typeof e != "function")) try {
		return e[t];
	} catch {
		return;
	}
}
function D_() {
	let e = N_(e_);
	if (!e) return [];
	try {
		let t = JSON.parse(e);
		return Array.isArray(t) ? t.filter((e) => typeof e == "object" && !!e && typeof e.path == "string").map(x_) : [];
	} catch {
		return [];
	}
}
function O_() {
	return [...D_(), ...k_()].map(x_);
}
function k_() {
	let e = [], t = [new URLSearchParams(window.location.search), new URLSearchParams(window.location.hash.replace(/^#/, ""))];
	for (let n of t) {
		let t = n.get(n_), r = n.get(t_);
		t && e.push(...s_[t] ?? []), r && e.push(...A_(r));
	}
	return window.location.href.includes(`${n_}=npc-builder`) && !e.length && e.push(...s_["npc-builder"] ?? []), e;
}
function A_(t) {
	try {
		let e = JSON.parse(decodeURIComponent(t));
		return Array.isArray(e) ? e.filter(M_) : [];
	} catch (t) {
		return console.warn(`${e} | Could not parse URL shape probes.`, t), [];
	}
}
function j_() {
	return window.location.href.includes(t_) || window.location.href.includes(n_);
}
function M_(e) {
	return typeof e == "object" && !!e && typeof e.path == "string";
}
function N_(e) {
	try {
		return localStorage.getItem(e);
	} catch {
		return null;
	}
}
function P_(e) {
	let t = T_(e), n = E_(globalThis, t.root);
	for (let e of t.tokens) {
		if (e.type === "property") {
			n = E_(n, e.key);
			continue;
		}
		if (e.type === "index") {
			n = E_(n, String(e.index));
			continue;
		}
		n = m_(n, e.name, e.args);
	}
	return n;
}
function F_(e, t) {
	return {
		length: e.length,
		sample: e.slice(0, t.maxEntries).map((e) => B_(e, V_(t))),
		type: "array"
	};
}
function I_(e, t) {
	return {
		sample: [...e.entries()].slice(0, t.maxEntries).map(([e, n]) => ({
			key: B_(e, V_(t)),
			value: B_(n, V_(t))
		})),
		size: e.size,
		type: "Map"
	};
}
function L_(e) {
	return {
		name: e.name,
		type: "function"
	};
}
function R_(e, t) {
	if (t.seen.has(e)) return { type: "circular" };
	t.seen.add(e);
	let n = g_(e, t.maxEntries), r = {
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
		let n = E_(e, t);
		typeof n == "string" && (r[t] = n);
	}
	if (t.maxDepth <= 0) return r;
	let i = {};
	for (let r of n) i[r] = B_(E_(e, r), V_(t));
	r.properties = i;
	let a = E_(e, "toObject");
	if (typeof a == "function") try {
		r.source = B_(a.call(e), V_(t));
	} catch (e) {
		r.source = {
			error: e instanceof Error ? e.message : String(e),
			type: "error"
		};
	}
	return r;
}
function z_(e) {
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
function B_(e, t) {
	return !v_(e) && typeof e != "function" ? z_(e) : typeof e == "function" ? L_(e) : Array.isArray(e) ? F_(e, t) : e instanceof Map ? I_(e, t) : R_(e, t);
}
function V_(e) {
	return {
		maxDepth: e.maxDepth - 1,
		maxEntries: e.maxEntries,
		seen: e.seen
	};
}
function H_(e) {
	if (Array.isArray(e)) return e;
	let t = E_(e, "contents");
	return Array.isArray(t) ? t : [];
}
//#endregion
//#region src/module/create-module-api.ts
function U_() {
	return {
		clearDebugShapeProbes: c_,
		getDebugShapeProbes: l_,
		inspectPath: u_,
		openNpcBuilder: async () => {
			await new Jg().render(!0);
		},
		openWorkbench: async () => {
			await new $g().render(!0);
		},
		setDebugShapeProbes: p_
	};
}
//#endregion
//#region src/module/register-module-menus.ts
function W_() {
	game.settings.registerMenu(e, "workbench", {
		hint: "Open the WFRP4e Customizer Apps workbench.",
		icon: "fa-solid fa-screwdriver-wrench",
		label: "Open Workbench",
		name: "WFRP4e Customizer Apps",
		restricted: !0,
		type: $g
	}), game.settings.registerMenu(e, "npc-builder", {
		hint: "Build a WFRP4e NPC from a base Actor and Career items.",
		icon: "fa-solid fa-user-plus",
		label: "Open NPC Builder",
		name: "WFRP4e NPC Builder",
		restricted: !0,
		type: Jg
	});
}
//#endregion
//#region src/module/register-module-settings.ts
function G_() {
	Hg();
}
//#endregion
//#region src/module/apps/npc-builder/register-actor-directory-button.ts
var K_ = "wfrp4e-customizer-open-npc-builder";
function q_() {
	Hooks.on("renderActorDirectory", (e, t) => {
		let n = X_(t);
		n && J_(n);
	});
}
function J_(e) {
	if (e.querySelector(`.${K_}`)) return;
	let t = Y_(e);
	if (!t) {
		console.warn("wfrp4e-customizer-apps | Could not find Actor Directory button container.");
		return;
	}
	let n = document.createElement("button");
	n.classList.add(K_), n.type = "button", n.innerHTML = "<i class=\"fa-solid fa-user-plus\" inert></i><span>NPC Builder App</span>", n.addEventListener("click", () => {
		new Jg().render(!0);
	}), t.append(n);
}
function Y_(e) {
	return e.querySelector(".directory-header .header-actions") ?? e.querySelector(".directory-header .action-buttons") ?? e.querySelector(".header-actions") ?? e.querySelector(".action-buttons");
}
function X_(e) {
	return e instanceof HTMLElement ? e : Z_(e) && e[0] instanceof HTMLElement ? e[0] : null;
}
function Z_(e) {
	return typeof e == "object" && !!e && "length" in e;
}
f_(), Hooks.once("init", () => {
	console.info(`${e} | Initializing`), G_(), W_(), q_();
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
	n.api = U_(), Kp(), cm(), console.info(`${e} | Ready`);
});
//#endregion
