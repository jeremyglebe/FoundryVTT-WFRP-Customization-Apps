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
}, te = /-\w/g, O = D((e) => e.replace(te, (e) => e.slice(1).toUpperCase())), ne = /\B([A-Z])/g, re = D((e) => e.replace(ne, "-$1").toLowerCase()), ie = D((e) => e.charAt(0).toUpperCase() + e.slice(1)), ae = D((e) => e ? `on${ie(e)}` : ""), k = (e, t) => !Object.is(e, t), oe = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, se = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, ce = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, le = (e) => {
	let t = v(e) ? Number(e) : NaN;
	return isNaN(t) ? e : t;
}, ue, de = () => ue ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function fe(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = v(r) ? ge(r) : fe(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	} else if (v(e) || b(e)) return e;
}
var pe = /;(?![^(]*\))/g, me = /:([^]+)/, he = /\/\*[^]*?\*\//g;
function ge(e) {
	let t = {};
	return e.replace(he, "").split(pe).forEach((e) => {
		if (e) {
			let n = e.split(me);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function A(e) {
	let t = "";
	if (v(e)) t = e;
	else if (p(e)) for (let n = 0; n < e.length; n++) {
		let r = A(e[n]);
		r && (t += r + " ");
	}
	else if (b(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var _e = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ve = /* @__PURE__ */ n(_e);
_e + "";
function ye(e) {
	return !!e || e === "";
}
function be(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = xe(e[r], t[r]);
	return n;
}
function xe(e, t) {
	if (e === t) return !0;
	let n = g(e), r = g(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = y(e), r = y(t), n || r) return e === t;
	if (n = p(e), r = p(t), n || r) return n && r ? be(e, t) : !1;
	if (n = b(e), r = b(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !xe(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
function Se(e, t) {
	return e.findIndex((e) => xe(e, t));
}
var Ce = (e) => !!(e && e.__v_isRef === !0), j = (e) => v(e) ? e : e == null ? "" : p(e) || b(e) && (e.toString === S || !_(e.toString)) ? Ce(e) ? j(e.value) : JSON.stringify(e, we, 2) : String(e), we = (e, t) => Ce(t) ? we(e, t.value) : m(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Te(t, r) + " =>"] = n, e), {}) } : h(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Te(e)) } : y(t) ? Te(t) : b(t) && !p(t) && !T(t) ? String(t) : t, Te = (e, t = "") => y(e) ? `Symbol(${e.description ?? t})` : e, M, Ee = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && M && (M.active ? (this.parent = M, this.index = (M.scopes ||= []).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
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
			let t = M;
			try {
				return M = this, e();
			} finally {
				M = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = M, M = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (M === this) M = this.prevScope;
			else {
				let e = M;
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
function De(e) {
	return new Ee(e);
}
function Oe() {
	return M;
}
function ke(e, t = !1) {
	M && M.cleanups.push(e);
}
var N, Ae = /* @__PURE__ */ new WeakSet(), je = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, M && (M.active ? M.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Ae.has(this) && (Ae.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Fe(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, Je(this), Re(this);
		let e = N, t = We;
		N = this, We = !0;
		try {
			return this.fn();
		} finally {
			ze(this), N = e, We = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) He(e);
			this.deps = this.depsTail = void 0, Je(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Ae.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Be(this) && this.run();
	}
	get dirty() {
		return Be(this);
	}
}, Me = 0, Ne, Pe;
function Fe(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Pe, Pe = e;
		return;
	}
	e.next = Ne, Ne = e;
}
function Ie() {
	Me++;
}
function Le() {
	if (--Me > 0) return;
	if (Pe) {
		let e = Pe;
		for (Pe = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Ne;) {
		let t = Ne;
		for (Ne = void 0; t;) {
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
function Re(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ze(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), He(r), Ue(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Be(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Ve(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Ve(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ye) || (e.globalVersion = Ye, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Be(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = N, r = We;
	N = e, We = !0;
	try {
		Re(e);
		let n = e.fn(e._value);
		(t.version === 0 || k(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		N = n, We = r, ze(e), e.flags &= -3;
	}
}
function He(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) He(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ue(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var We = !0, Ge = [];
function Ke() {
	Ge.push(We), We = !1;
}
function qe() {
	let e = Ge.pop();
	We = e === void 0 ? !0 : e;
}
function Je(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = N;
		N = void 0;
		try {
			t();
		} finally {
			N = e;
		}
	}
}
var Ye = 0, Xe = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, Ze = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!N || !We || N === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== N) t = this.activeLink = new Xe(N, this), N.deps ? (t.prevDep = N.depsTail, N.depsTail.nextDep = t, N.depsTail = t) : N.deps = N.depsTail = t, Qe(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = N.depsTail, t.nextDep = void 0, N.depsTail.nextDep = t, N.depsTail = t, N.deps === t && (N.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, Ye++, this.notify(e);
	}
	notify(e) {
		Ie();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Le();
		}
	}
};
function Qe(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) Qe(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var $e = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ Symbol(""), tt = /* @__PURE__ */ Symbol(""), nt = /* @__PURE__ */ Symbol("");
function P(e, t, n) {
	if (We && N) {
		let t = $e.get(e);
		t || $e.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new Ze()), r.map = t, r.key = n), r.track();
	}
}
function rt(e, t, n, r, i, a) {
	let o = $e.get(e);
	if (!o) {
		Ye++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Ie(), t === "clear") o.forEach(s);
	else {
		let i = p(e), a = i && E(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === nt || !y(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(nt)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(et)), m(e) && s(o.get(tt)));
				break;
			case "delete":
				i || (s(o.get(et)), m(e) && s(o.get(tt)));
				break;
			case "set":
				m(e) && s(o.get(et));
				break;
		}
	}
	Le();
}
function it(e, t) {
	let n = $e.get(e);
	return n && n.get(t);
}
function at(e) {
	let t = /* @__PURE__ */ F(e);
	return t === e ? t : (P(t, "iterate", nt), /* @__PURE__ */ Gt(e) ? t : t.map(Jt));
}
function ot(e) {
	return P(e = /* @__PURE__ */ F(e), "iterate", nt), e;
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
	P(r, "iterate", nt);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Kt(n[0]) ? (n[0] = /* @__PURE__ */ F(n[0]), r[t](...n)) : i;
}
function mt(e, t, n = []) {
	Ke(), Ie();
	let r = (/* @__PURE__ */ F(e))[t].apply(e, n);
	return Le(), qe(), r;
}
var ht = /* @__PURE__ */ n("__proto__,__v_isRef,__isVue"), gt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(y));
function _t(e) {
	y(e) || (e = String(e));
	let t = /* @__PURE__ */ F(this);
	return P(t, "has", e), t.hasOwnProperty(e);
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
		if ((y(t) ? gt.has(t) : ht(t)) || (r || P(e, "get", t), i)) return o;
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
		return e === /* @__PURE__ */ F(r) && (o ? k(n, i) && rt(e, "set", t, n, i) : rt(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = f(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && rt(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!y(t) || !gt.has(t)) && P(e, "has", t), n;
	}
	ownKeys(e) {
		return P(e, "iterate", p(e) ? "length" : et), Reflect.ownKeys(e);
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
		return !t && P(a, "iterate", c ? tt : et), l(Object.create(u), { next() {
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
			e || (k(n, a) && P(i, "get", n), P(i, "get", a));
			let { has: o } = Tt(i), s = t ? wt : e ? Yt : Jt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && P(/* @__PURE__ */ F(t), "iterate", et), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ F(n), i = /* @__PURE__ */ F(t);
			return e || (k(t, i) && P(r, "has", t), P(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ F(a), s = t ? wt : e ? Yt : Jt;
			return !e && P(o, "iterate", et), a.forEach((e, t) => n.call(r, s(e), s(t), i));
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
			return r.has.call(n, a) || k(e, a) && r.has.call(n, e) || k(i, a) && r.has.call(n, i) || (n.add(a), rt(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ Gt(n) && !/* @__PURE__ */ Wt(n) && (n = /* @__PURE__ */ F(n));
			let r = /* @__PURE__ */ F(this), { has: i, get: a } = Tt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ F(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? k(n, s) && rt(r, "set", e, n, s) : rt(r, "add", e, n), this;
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
	return !f(e, "__v_skip") && Object.isExtensible(e) && se(e, "__v_skip", !0), e;
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
		this.dep = new Ze(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ F(e), this._value = t ? e : Jt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Gt(e) || /* @__PURE__ */ Wt(e);
		e = n ? e : /* @__PURE__ */ F(e), k(e, t) && (this._rawValue = e, this._value = n ? e : Jt(e), this.dep.trigger());
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
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new Ze(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ye - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && N !== this) return Fe(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Ve(this), e && (e.version = this.dep.version), this._value;
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
			Ke();
			try {
				g();
			} finally {
				qe();
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
	let x = Oe(), S = () => {
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
			if (o || y || (b ? e.some((e, t) => k(e, C[t])) : k(e, C))) {
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
	return l && l(w), m = new je(h), m.scheduler = c ? () => c(w, !1) : w, v = (e) => dn(e, !1, m), g = m.onStop = () => {
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
			Ke(), mn(o, null, 10, [
				e,
				i,
				a
			]), qe();
			return;
		}
	}
	_n(e, n, a, i, s);
}
function _n(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var z = [], vn = -1, yn = [], bn = null, xn = 0, Sn = /* @__PURE__ */ Promise.resolve(), Cn = null;
function wn(e) {
	let t = Cn || Sn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function Tn(e) {
	let t = vn + 1, n = z.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = z[r], a = jn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function En(e) {
	if (!(e.flags & 1)) {
		let t = jn(e), n = z[z.length - 1];
		!n || !(e.flags & 2) && t >= jn(n) ? z.push(e) : z.splice(Tn(t), 0, e), e.flags |= 1, Dn();
	}
}
function Dn() {
	Cn ||= Sn.then(Mn);
}
function On(e) {
	p(e) ? yn.push(...e) : bn && e.id === -1 ? bn.splice(xn + 1, 0, e) : e.flags & 1 || (yn.push(e), e.flags |= 1), Dn();
}
function kn(e, t, n = vn + 1) {
	for (; n < z.length; n++) {
		let t = z[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			z.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
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
		for (vn = 0; vn < z.length; vn++) {
			let e = z[vn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), mn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; vn < z.length; vn++) {
			let e = z[vn];
			e && (e.flags &= -2);
		}
		vn = -1, z.length = 0, An(e), Cn = null, (z.length || yn.length) && Mn(e);
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
		r._d && ta(-1);
		let i = Pn(t), a;
		try {
			a = e(...n);
		} finally {
			Pn(i), r._d && ta(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function V(e, t) {
	if (B === null) return e;
	let n = Fa(B), i = e.dirs ||= [];
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
function In(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (Ke(), hn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), qe());
	}
}
function Ln(e, t) {
	if (Z) {
		let n = Z.provides, r = Z.parent && Z.parent.provides;
		r === n && (n = Z.provides = Object.create(r)), n[e] = t;
	}
}
function Rn(e, t, n = !1) {
	let r = ba();
	if (r || ii) {
		let i = ii ? ii._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && _(t) ? t.call(r && r.proxy) : t;
	}
}
function zn() {
	return !!(ba() || ii);
}
var Bn = /* @__PURE__ */ Symbol.for("v-scx"), Vn = () => Rn(Bn);
function Hn(e, t, n) {
	return Un(e, t, n);
}
function Un(e, t, n = r) {
	let { immediate: i, deep: o, flush: s, once: c } = n, u = l({}, n), d = t && i || !t && s !== "post", f;
	if (Ea) {
		if (s === "sync") {
			let e = Vn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = a, e.resume = a, e.pause = a, e;
		}
	}
	let p = Z;
	u.call = (e, t, n) => hn(e, p, t, n);
	let m = !1;
	s === "post" ? u.scheduler = (e) => {
		Ii(e, p && p.suspense);
	} : s !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : En(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = fn(e, t, u);
	return Ea && (f ? f.push(h) : d && h()), h;
}
function Wn(e, t, n) {
	let r = this.proxy, i = v(e) ? e.includes(".") ? Gn(r, e) : () => r[e] : e.bind(r, r), a;
	_(t) ? a = t : (a = t.handler, n = t);
	let o = Ca(this), s = Un(i, a.bind(r), n);
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
		let n = ba(), r = Xn();
		return () => {
			let i = t.default && cr(t.default(), !0), a = i && i.length ? tr(i) : n.subTree ? X() : void 0;
			if (!a) return;
			let o = /* @__PURE__ */ F(e), { mode: s } = o;
			if (r.isLeaving) return ar(a);
			let c = or(a);
			if (!c) return ar(a);
			let l = ir(c, o, r, n, (e) => l = e);
			c.type !== G && sr(c, l);
			let u = n.subTree && or(n.subTree);
			if (u && u.type !== G && !aa(u, c) && $n(n).type !== G) {
				let e = ir(u, o, r, n);
				if (sr(u, e), s === "out-in" && c.type !== G) return r.isLeaving = !0, e.afterLeave = () => {
					r.isLeaving = !1, n.job.flags & 8 || n.update(), delete e.afterLeave, u = void 0;
				}, ar(a);
				s === "in-out" && c.type !== G ? e.delayLeave = (e, t, n) => {
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
		for (let n of e) if (n.type !== G) {
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
			t[Jn] && t[Jn](!0);
			let i = S[x];
			i && aa(e, i) && i.el[Jn] && i.el[Jn](), C(r, [t]);
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
	if (gr(e)) return e = ua(e), e.children = null, e;
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
		o.type === W ? (o.patchFlag & 128 && i++, r = r.concat(cr(o.children, t, s))) : (t || o.type !== G) && r.push(s == null ? o : ua(o, { key: s }));
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
	let s = i.shapeFlag & 4 ? Fa(i.component) : i.el, c = a ? null : s, { i: l, r: d } = e, m = t && t.r, h = l.refs === r ? l.refs = {} : l.refs, g = l.setupState, y = /* @__PURE__ */ F(g), b = g === r ? o : (e) => dr(h, e) ? !1 : f(y, e), x = (e, t) => !(t && dr(h, t));
	if (m != null && m !== d) {
		if (mr(t), v(m)) h[m] = null, b(m) && (g[m] = null);
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
					i(), fr.delete(e);
				};
				t.id = -1, fr.set(e, t), Ii(t, n);
			} else mr(e), i();
		}
	}
}
function mr(e) {
	let t = fr.get(e);
	t && (t.flags |= 8, fr.delete(e));
}
de().requestIdleCallback, de().cancelIdleCallback;
var hr = (e) => !!e.type.__asyncLoader, gr = (e) => e.type.__isKeepAlive;
function _r(e, t) {
	yr(e, "a", t);
}
function vr(e, t) {
	yr(e, "da", t);
}
function yr(e, t, n = Z) {
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
function xr(e, t, n = Z, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Ke();
			let i = Ca(n), a = hn(t, n, e, r);
			return i(), qe(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var Sr = (e) => (t, n = Z) => {
	(!Ea || e === "sp") && xr(e, (...e) => t(...e), n);
}, Cr = Sr("bm"), wr = Sr("m"), Tr = Sr("bu"), Er = Sr("u"), Dr = Sr("bum"), Or = Sr("um"), kr = Sr("sp"), Ar = Sr("rtg"), jr = Sr("rtc");
function Mr(e, t = Z) {
	xr("ec", e, t);
}
var Nr = /* @__PURE__ */ Symbol.for("v-ndc");
function H(e, t, n, r) {
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
function Pr(e, t, n = {}, r, i) {
	if (B.ce || B.parent && hr(B.parent) && B.parent.ce) {
		let e = Object.keys(n).length > 0;
		return t !== "default" && (n.name = t), K(), ra(W, null, [Y("slot", n, r && r())], e ? -2 : 64);
	}
	let a = e[t];
	a && a._c && (a._d = !1), K();
	let o = a && Fr(a(n)), s = n.key || o && o.key, c = ra(W, { key: (s && !y(s) ? s : `_${t}`) + (!o && r ? "_fb" : "") }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), a && a._c && (a._d = !0), c;
}
function Fr(e) {
	return e.some((e) => ia(e) ? !(e.type === G || e.type === W && !Fr(e.children)) : !0) ? e : null;
}
var Ir = (e) => e ? Ta(e) ? Fa(e) : Ir(e.parent) : null, Lr = /* @__PURE__ */ l(/* @__PURE__ */ Object.create(null), {
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
		if (u) return t === "$attrs" && P(e.attrs, "get", ""), u(e);
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
	let { data: i, computed: o, methods: s, watch: c, provide: l, inject: u, created: d, beforeMount: f, mounted: m, beforeUpdate: h, updated: g, activated: v, deactivated: y, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: w, render: T, renderTracked: E, renderTriggered: ee, errorCaptured: D, serverPrefetch: te, expose: O, inheritAttrs: ne, components: re, directives: ie, filters: ae } = t;
	if (u && Ur(u, r, null), s) for (let e in s) {
		let t = s[e];
		_(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		b(t) && (e.data = /* @__PURE__ */ zt(t));
	}
	if (Vr = !0, o) for (let e in o) {
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
	if (c) for (let e in c) Gr(c[e], r, n, e);
	if (l) {
		let e = _(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Ln(t, e[t]);
		});
	}
	d && Wr(d, e, "c");
	function k(e, t) {
		p(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (k(Cr, f), k(wr, m), k(Tr, h), k(Er, g), k(_r, v), k(vr, y), k(Mr, D), k(jr, E), k(Ar, ee), k(Dr, S), k(Or, w), k(kr, te), p(O)) if (O.length) {
		let t = e.exposed ||= {};
		O.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	T && e.render === a && (e.render = T), ne != null && (e.inheritAttrs = ne), re && (e.components = re), ie && (e.directives = ie), te && ur(e);
}
function Ur(e, t, n = a) {
	p(e) && (e = Zr(e));
	for (let n in e) {
		let r = e[n], i;
		i = b(r) ? "default" in r ? Rn(r.from || n, r.default, !0) : Rn(r.from || n) : Rn(r), /* @__PURE__ */ I(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Wr(e, t, n) {
	hn(p(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
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
	props: $r,
	emits: $r,
	methods: Qr,
	computed: Qr,
	beforeCreate: U,
	created: U,
	beforeMount: U,
	mounted: U,
	beforeUpdate: U,
	updated: U,
	beforeDestroy: U,
	beforeUnmount: U,
	destroyed: U,
	unmounted: U,
	activated: U,
	deactivated: U,
	errorCaptured: U,
	serverPrefetch: U,
	components: Qr,
	directives: Qr,
	watch: ei,
	provide: Yr,
	inject: Xr
};
function Yr(e, t) {
	return t ? e ? function() {
		return l(_(e) ? e.call(this, this) : e, _(t) ? t.call(this, this) : t);
	} : t : e;
}
function Xr(e, t) {
	return Qr(Zr(e), Zr(t));
}
function Zr(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function U(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Qr(e, t) {
	return e ? l(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function $r(e, t) {
	return e ? p(e) && p(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : l(/* @__PURE__ */ Object.create(null), Br(e), Br(t ?? {})) : t;
}
function ei(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = l(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = U(e[r], t[r]);
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
				s && (hn(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
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
var ii = null, ai = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${O(t)}Modifiers`] || e[`${re(t)}Modifiers`];
function oi(e, t, ...n) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || r, a = n, o = t.startsWith("update:"), s = o && ai(i, t.slice(7));
	s && (s.trim && (a = n.map((e) => v(e) ? e.trim() : e)), s.number && (a = n.map(ce)));
	let c, l = i[c = ae(t)] || i[c = ae(O(t))];
	!l && o && (l = i[c = ae(re(t))]), l && hn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, hn(u, e, 6, a);
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
	return !e || !s(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), f(e, t[0].toLowerCase() + t.slice(1)) || f(e, re(t)) || f(e, t));
}
function di(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Pn(e), v, y;
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
		Zi.length = 0, gn(t, e, 1), v = Y(G);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(c) && (y = pi(y, a)), b = ua(b, y, !1, !0));
	}
	return n.dirs && (b = ua(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && sr(b, n.transition), v = b, Pn(_), v;
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
	return n === "style" && b(r) && b(i) ? !xe(r, i) : r !== i;
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
	n ? e.props = r ? i : /* @__PURE__ */ Bt(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function Si(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ F(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (li(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (f(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = O(o);
					i[t] = wi(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		Ci(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !f(t, a) && ((r = re(a)) === a || !f(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = wi(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !f(t, e)) && (delete a[e], l = !0);
	}
	l && rt(e.attrs, "set", "");
}
function Ci(e, t, n, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (t) for (let r in t) {
		if (ee(r)) continue;
		let l = t[r], u;
		a && f(a, u = O(r)) ? !o || !o.includes(u) ? n[u] = l : (c ||= {})[u] = l : li(e.emitsOptions, r) || (!(r in i) || l !== i[r]) && (i[r] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ F(n), i = c || r;
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
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === re(n)) && (r = !0));
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
		let t = O(s[e]);
		Di(t) && (c[t] = r);
	}
	else if (s) for (let e in s) {
		let t = O(e);
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
	return e[0] !== "$" && !ee(e);
}
var Oi = (e) => e === "_" || e === "_ctx" || e === "$stable", ki = (e) => p(e) ? e.map(fa) : [fa(e)], Ai = (e, t, n) => {
	if (t._n) return t;
	let r = Fn((...e) => ki(t(...e)), n);
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
		e ? (Ni(r, t, n), n && se(r, "_", e, !0)) : ji(t, r);
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
	let n = de();
	n.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = a, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !aa(e, t) && (r = ve(e), me(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
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
				re(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? ie(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, xe);
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
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && D(e.children, d, null, r, i, zi(e, a), s, u), _ && In(e, null, r, "created"), E(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ee(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && ga(f, r, e);
		}
		_ && In(e, null, r, "beforeMount");
		let v = Vi(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Ii(() => {
			try {
				f && ga(f, r, e), v && g.enter(d), _ && In(e, null, r, "mounted");
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
	}, D = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? pa(e[l]) : fa(e[l]), t, n, r, i, a, o, s);
	}, te = (e, t, n, i, a, o, s) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || r, h = t.props || r, g;
		if (n && Bi(n, !1), (g = h.onVnodeBeforeUpdate) && ga(g, n, t, e), f && In(t, e, n, "beforeUpdate"), n && Bi(n, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? O(e.dynamicChildren, d, l, n, i, zi(t, a), o) : s || le(e, t, l, null, n, i, zi(t, a), o, !1), u > 0) {
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
		((g = h.onVnodeUpdated) || f) && Ii(() => {
			g && ga(g, n, t, e), f && In(t, e, n, "updated");
		}, i);
	}, O = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === W || !aa(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
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
	}, re = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), D(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (O(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Hi(e, t, !0)) : le(e, t, n, f, i, a, s, c, l);
	}, ie = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ae(t, n, r, i, a, o, c) : k(e, t, c);
	}, ae = (e, t, n, r, i, a, o) => {
		let s = e.component = ya(e, r, i);
		if (gr(e) && (s.ctx.renderer = xe), Da(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, se, o), !e.el) {
				let r = s.subTree = Y(G);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else se(s, e, t, n, i, a, o);
	}, k = (e, t, n) => {
		let r = t.component = e.component;
		if (mi(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			ce(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, se = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Wi(e);
					if (n) {
						t && (t.el = c.el, ce(e, t, o)), n.asyncDep.then(() => {
							Ii(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Bi(e, !1), t ? (t.el = c.el, ce(e, t, o)) : t = c, n && oe(n), (d = t.props && t.props.onVnodeBeforeUpdate) && ga(d, s, t, c), Bi(e, !0);
				let f = di(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), ve(p), e, i, a), t.el = f.el, u === null && _i(e, f.el), r && Ii(r, i), (d = t.props && t.props.onVnodeUpdated) && Ii(() => ga(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = hr(t);
				if (Bi(e, !1), l && oe(l), !m && (o = c && c.onVnodeBeforeMount) && ga(o, d, t), Bi(e, !0), s && Ce) {
					let t = () => {
						e.subTree = di(e), Ce(s, e.subTree, e, i, null);
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
				(t.shapeFlag & 256 || d && hr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Ii(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new je(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => En(u), Bi(e, !0), l();
	}, ce = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Si(e, t.props, r, n), Fi(e, t.children, n), Ke(), kn(e), qe();
	}, le = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				fe(l, d, n, r, i, a, o, s, c);
				return;
			} else if (f & 256) {
				ue(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && _e(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? fe(l, d, n, r, i, a, o, s, c) : _e(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && D(d, n, r, i, a, o, s, c));
	}, ue = (e, t, n, r, a, o, s, c, l) => {
		e ||= i, t ||= i;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let r = t[p] = l ? pa(t[p]) : fa(t[p]);
			v(e[p], r, n, null, a, o, s, c, l);
		}
		u > d ? _e(e, a, o, !0, !1, f) : D(t, n, r, a, o, s, c, l, f);
	}, fe = (e, t, n, r, a, o, s, c, l) => {
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
		} else if (u > p) for (; u <= f;) me(e[u], a, o, !0), u++;
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
					me(r, a, o, !0);
					continue;
				}
				let i;
				if (r.key != null) i = g.get(r.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && aa(r, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? me(r, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(r, t[i], n, null, a, o, s, c, l), y++);
			}
			let w = x ? Ui(C) : i;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, i = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Ki(f) : r;
				C[u] === 0 ? v(null, i, n, p, a, o, s, c, l) : x && (_ < 0 || u !== w[_] ? pe(i, n, p, 2) : _--);
			}
		}
	}, pe = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			pe(e.component.subTree, t, n, r);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, r);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, xe);
			return;
		}
		if (c === W) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) pe(u[e], t, n, r);
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
				a._isLeaving && a[Jn](!0), r(a, () => {
					u(), c && c();
				});
			};
			i ? i(a, u, d) : d();
		}
		else o(a, t, n);
	}, me = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (Ke(), pr(s, null, n, e, !0), qe()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !hr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && ga(_, t, e), u & 6) A(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && In(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, xe, r) : l && !l.hasOnce && (a !== W || d > 0 && d & 64) ? _e(l, t, n, !1, !0) : (a === W && d & 384 || !i && u & 16) && _e(c, t, n), r && he(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Ii(() => {
			_ && ga(_, t, e), h && In(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, he = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === W) {
			ge(n, r);
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
	}, ge = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, A = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Gi(c), Gi(l), r && oe(r), i.stop(), a && (a.flags |= 8, me(o, e, t, n)), s && Ii(s, t), Ii(() => {
			e.isUnmounted = !0;
		}, t);
	}, _e = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) me(e[o], t, n, r, i);
	}, ve = (e) => {
		if (e.shapeFlag & 6) return ve(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Kn];
		return n ? h(n) : t;
	}, ye = !1, be = (e, t, n) => {
		let r;
		e == null ? t._vnode && (me(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, ye ||= (ye = !0, kn(r), An(), !1);
	}, xe = {
		p: v,
		um: me,
		m: pe,
		r: he,
		mt: ae,
		mc: D,
		pc: le,
		pbc: O,
		n: ve,
		o: e
	}, Se, Ce;
	return t && ([Se, Ce] = t(xe)), {
		render: be,
		hydrate: Se,
		createApp: ri(be, Se)
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
	t && t.pendingBranch ? p(e) ? t.effects.push(...e) : t.effects.push(e) : On(e);
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
var oa = ({ key: e }) => e ?? null, sa = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : v(e) || /* @__PURE__ */ I(e) || _(e) ? {
	i: B,
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
	return s ? (ma(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= v(n) ? 8 : 16), ea > 0 && !o && Qi && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Qi.push(c), c;
}
var Y = ca;
function ca(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === Nr) && (e = G), ia(e)) {
		let r = ua(e, t, !0);
		return n && ma(r, n), ea > 0 && !a && Qi && (r.shapeFlag & 6 ? Qi[Qi.indexOf(e)] = r : Qi.push(r)), r.patchFlag = -2, r;
	}
	if (Ia(e) && (e = e.__vccOpts), t) {
		t = la(t);
		let { class: e, style: n } = t;
		e && !v(e) && (t.class = A(e)), b(n) && (/* @__PURE__ */ Kt(n) && !p(n) && (n = l({}, n)), t.style = fe(n));
	}
	let o = v(e) ? 1 : qi(e) ? 128 : qn(e) ? 64 : b(e) ? 4 : _(e) ? 2 : 0;
	return J(e, t, n, r, i, o, a, !0);
}
function la(e) {
	return e ? /* @__PURE__ */ Kt(e) || bi(e) ? l({}, e) : e : null;
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
	return c && r && sr(u, c.clone(u)), u;
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
		!r && !bi(t) ? t._ctx = B : r === 3 && B && (B.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else _(t) ? (t = {
		default: t,
		_ctx: B
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [da(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function ha(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = A([t.class, r.class]));
		else if (e === "style") t.style = fe([t.style, r.style]);
		else if (s(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(p(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !c(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function ga(e, t, n, r = null) {
	hn(e, t, 7, [n, r]);
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
		scope: new Ee(!0),
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
var Z = null, ba = () => Z || B, xa, Sa;
{
	let e = de(), t = (t, n) => {
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
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, zr);
	let { setup: r } = n;
	if (r) {
		Ke();
		let n = e.setupContext = r.length > 1 ? Pa(e) : null, i = Ca(e), a = mn(r, e, 0, [e.props, n]), o = x(a);
		if (qe(), i(), (o || e.sp) && !hr(e) && ur(e), o) {
			if (a.then(wa, wa), t) return a.then((n) => {
				ka(e, n, t);
			}).catch((t) => {
				gn(t, e, 0);
			});
			e.asyncDep = a;
		} else ka(e, a, t);
	} else Ma(e, t);
}
function ka(e, t, n) {
	_(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : b(t) && (e.setupState = $t(t)), Ma(e, n);
}
var Aa, ja;
function Ma(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && Aa && !r.render) {
			let t = r.template || Kr(e).template;
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
		Ke();
		try {
			Hr(e);
		} finally {
			qe(), t();
		}
	}
}
var Na = { get(e, t) {
	return P(e, "get", ""), e[t];
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
	return e.exposed ? e.exposeProxy ||= new Proxy($t(qt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Lr) return Lr[n](e);
		},
		has(e, t) {
			return t in e || t in Lr;
		}
	}) : e.proxy;
}
function Ia(e) {
	return _(e) && "__vccOpts" in e;
}
var Q = (e, t) => /* @__PURE__ */ sn(e, t, Ea);
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
}, Za = /* @__PURE__ */ l({}, Qn, Xa), Qa = /* @__PURE__ */ ((e) => (e.displayName = "Transition", e.props = Za, e))((e, { slots: t }) => La(nr, to(e), t)), $a = (e, t = []) => {
	p(e) ? e.forEach((e) => e(...t)) : e && e(...t);
}, eo = (e) => e ? p(e) ? e.some((e) => e.length > 1) : e.length > 1 : !1;
function to(e) {
	let t = {};
	for (let n in e) n in Xa || (t[n] = e[n]);
	if (e.css === !1) return t;
	let { name: n = "v", type: r, duration: i, enterFromClass: a = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: s = `${n}-enter-to`, appearFromClass: c = a, appearActiveClass: u = o, appearToClass: d = s, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: p = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, h = no(i), g = h && h[0], _ = h && h[1], { onBeforeEnter: v, onEnter: y, onEnterCancelled: b, onLeave: x, onLeaveCancelled: S, onBeforeAppear: C = v, onAppear: w = y, onAppearCancelled: T = b } = t, E = (e, t, n, r) => {
		e._enterCancelled = r, ao(e, t ? d : s), ao(e, t ? u : o), n && n();
	}, ee = (e, t) => {
		e._isLeaving = !1, ao(e, f), ao(e, m), ao(e, p), t && t();
	}, D = (e) => (t, n) => {
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
		onEnter: D(!1),
		onAppear: D(!0),
		onLeave(e, t) {
			e._isLeaving = !0;
			let n = () => ee(e, t);
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
			ee(e), $a(S, [e]);
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
	return le(e);
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
		bo.test(n) ? e.setProperty(re(r), n.replace(bo, ""), "important") : e[r] = n;
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
	let r = O(t);
	if (r !== "filter" && r in e) return Co[t] = r;
	r = ie(r);
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
function Do(e, t, n, r, i, a = ve(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Eo, t.slice(6, t.length)) : e.setAttributeNS(Eo, t, n) : n == null || a && !ye(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : y(n) ? String(n) : n);
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
		r === "boolean" ? n = ye(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
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
	return [e[2] === ":" ? e.slice(3) : re(e.slice(2)), t];
}
var Fo = 0, Io = /* @__PURE__ */ Promise.resolve(), Lo = () => Fo ||= (Io.then(() => Fo = 0), Date.now());
function Ro(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		hn(zo(e, n.value), t, 5, [e]);
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
	t === "class" ? mo(e, r, o) : t === "style" ? yo(e, n, r) : s(t) ? c(t) || Mo(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ho(e, t, r, o)) ? (Oo(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Do(e, t, r, o, a, t !== "value")) : e._isVueCE && (Uo(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !v(r))) ? Oo(e, O(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Do(e, t, r, o));
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
	let r = O(t);
	return Array.isArray(n) ? n.some((e) => O(e) === r) : Object.keys(n).some((e) => O(e) === r);
}
var Wo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return p(t) ? (e) => oe(t, e) : t;
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
	return t && (e = e.trim()), n && (e = ce(e)), e;
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
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? ce(e.value) : e.value, c = t ?? "";
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
				let e = Se(t, n), a = e !== -1;
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
	if (p(t)) i = Se(t, r.props.value) > -1;
	else if (h(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = xe(t, ts(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var Qo = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = h(t);
		ko(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? ce(es(e)) : es(e));
			e[qo](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, wn(() => {
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
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = Se(t, o) > -1;
			} else a.selected = t.has(o);
			else if (xe(es(a), t)) {
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
	let e = De(!0), t = e.run(() => /* @__PURE__ */ L({})), n = [], r = [], i = qt({
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
	return !n && Oe() && ke(i), i;
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
		hs(i) && hs(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ I(r) && !/* @__PURE__ */ Ut(r) ? e[n] = Is(i, r) : e[n] = r;
	}
	return e;
}
var Ls = Symbol();
function Rs(e) {
	return !hs(e) || !Object.prototype.hasOwnProperty.call(e, Ls);
}
var { assign: zs } = Object;
function Bs(e) {
	return !!(/* @__PURE__ */ I(e) && e.effect);
}
function Vs(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), zs(/* @__PURE__ */ en(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = qt(Q(() => {
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
		wn().then(() => {
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
	}, y = /* @__PURE__ */ zt({
		_p: r,
		$id: e,
		$onAction: js.bind(null, f),
		$patch: h,
		$reset: g,
		$subscribe(t, n = {}) {
			let i = js(d, t, n.detached, () => a()), a = o.run(() => Hn(() => r.state.value[e], (r) => {
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
	let b = (r._a && r._a.runWithContext || Ns)(() => r._e.run(() => (o = De()).run(() => t({ action: v }))));
	for (let t in b) {
		let n = b[t];
		/* @__PURE__ */ I(n) && !Bs(n) || /* @__PURE__ */ Ut(n) ? a || (p && Rs(n) && (/* @__PURE__ */ I(n) ? n.value = p[t] : Is(n, p[t])), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = v(n, t), s.actions[t] = n);
	}
	return zs(y, b), zs(/* @__PURE__ */ F(y), b), Object.defineProperty(y, "$state", {
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
		let o = zn();
		return n ||= o ? Rn(ms, null) : null, n && ps(n), n = fs, n._s.has(e) || (i ? Hs(e, t, r, n) : Vs(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
function Ws(e) {
	let t = /* @__PURE__ */ F(e), n = {};
	for (let r in t) {
		let i = t[r];
		i.effect ? n[r] = Q({
			get: () => e[r],
			set(t) {
				e[r] = t;
			}
		}) : (/* @__PURE__ */ I(i) || /* @__PURE__ */ Ut(i)) && (n[r] = /* @__PURE__ */ rn(e, r));
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
	quickTraitFolderUuid: "",
	searchFoundryPortraitAssets: !0,
	searchWebPortraitAssets: !1
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
		quickTraitFolderUuid: typeof e.quickTraitFolderUuid == "string" ? e.quickTraitFolderUuid : "",
		searchFoundryPortraitAssets: e.searchFoundryPortraitAssets ?? !0,
		searchWebPortraitAssets: e.searchWebPortraitAssets ?? !1
	};
}
var Tc = Us("npc-builder", () => {
	let e = /* @__PURE__ */ L(""), t = /* @__PURE__ */ L([]), n = /* @__PURE__ */ L({}), r = /* @__PURE__ */ L({ ...mc }), i = /* @__PURE__ */ L([]), a = /* @__PURE__ */ L([]), o = /* @__PURE__ */ L([]), s = /* @__PURE__ */ L([]), c = /* @__PURE__ */ L([]), l = /* @__PURE__ */ L([]), u = /* @__PURE__ */ L(""), d = /* @__PURE__ */ L({ ...pc }), f = /* @__PURE__ */ L(""), p = /* @__PURE__ */ L({}), m = /* @__PURE__ */ L({}), h = /* @__PURE__ */ L({}), g = /* @__PURE__ */ L({}), _ = Q(() => i.value.find((e) => e.uuid === f.value) ?? null), v = Q(() => a.value.at(-1) ?? null), y = Q(() => {
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
			if (!yc(t.kind, d.value)) continue;
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
		return O(e, "characteristic"), O(e, "skill"), O(e, "talent"), [...e.values()].map((e) => {
			let t = gc(e.kind, e.name), r = n.value[t] ?? e.careerValue;
			return {
				...e,
				current: Math.max(0, Math.floor(r))
			};
		}).sort((e, t) => e.kind === t.kind ? e.name.localeCompare(t.name) : e.kind.localeCompare(t.kind));
	}), T = Q(() => {
		let e = /* @__PURE__ */ new Map();
		if (d.value.allowBaseActorTrappings) for (let t of r.value.trappings) e.set(`base:${t.uuid || bc(t.name)}`, {
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
				resolution: g.value[r] ?? nc(n),
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
				quantity: xc(t?.quantity ?? e.quantity),
				resolution: g.value[e.key] ?? e.resolution
			};
		}).sort((e, t) => e.source === t.source ? e.name.localeCompare(t.name) : e.source.localeCompare(t.source));
	}), E = Q(() => {
		let e = /* @__PURE__ */ new Map();
		if (d.value.allowBaseActorTraits) for (let t of r.value.traits) {
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
		for (let t of o.value) Ne(e, t.name) || e.set(t.key, { ...t });
		return [...e.values()].map((e) => ({
			...e,
			config: Sc(e.config, m.value[e.key])
		})).sort((e, t) => e.source === t.source ? e.name.localeCompare(t.name) : e.source.localeCompare(t.source));
	}), ee = Q(() => [...r.value.optionalTraits].map((e) => ({
		config: e.config,
		img: e.img,
		name: e.name,
		uuid: e.uuid
	})).sort((e, t) => e.name.localeCompare(t.name)));
	function D(e) {
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
	function O(e, t) {
		if (t === "talent") {
			re(e);
			return;
		}
		ne(e, t);
	}
	function ne(e, t) {
		let n = /* @__PURE__ */ new Map();
		for (let e of a.value) {
			let r = ce(_e(e, t)), i = _c(e) / hc, a = Math.max(0, xc(e.quantity) - 1) * hc;
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
					extraSources: ae(e.name, a),
					highestLevel: i,
					highestLevelSource: vc(e),
					name: o
				});
			}
		}
		for (let r of n.values()) ie(e, {
			careerValue: r.highestLevel * hc + k(r.extraSources),
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
			let n = ce(_e(e, "talent")), r = Math.max(0, xc(e.quantity) - 1);
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
					extraSources: ae(e.name, r),
					firstSource: `${e.name} first instance`,
					name: i
				});
			}
		}
		for (let n of t.values()) ie(e, {
			careerValue: 1 + k(n.extraSources),
			kind: "talent",
			name: n.name,
			sources: [{
				count: 1,
				label: n.firstSource
			}, ...n.extraSources]
		});
	}
	function ie(e, t) {
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
	function ae(e, t) {
		return t <= 0 ? [] : [{
			count: t,
			label: `${e} extra time`
		}];
	}
	function k(e) {
		let t = 0;
		for (let n of e) t += n.count;
		return t;
	}
	function oe(e) {
		s.value.some((t) => t.key === e.key) || s.value.push(e);
	}
	function se(e) {
		let t = je(e.name), n = Ae(e.name);
		if (n) {
			De(n, !0);
			return;
		}
		if (t) {
			Ee(t, !0);
			return;
		}
		ke(e);
	}
	function ce(e) {
		let t = /* @__PURE__ */ new Set(), n = [];
		for (let r of e) {
			let e = bc(r);
			!e || t.has(e) || (t.add(e), n.push(r));
		}
		return n;
	}
	function le() {
		r.value = {
			advancements: [],
			optionalTraits: [],
			traits: [],
			trappings: []
		}, n.value = {}, m.value = {}, h.value = {}, g.value = {};
	}
	function ue(e) {
		return p.value[e] ?? "";
	}
	function de(e) {
		r.value = {
			advancements: [...e.advancements],
			optionalTraits: [...e.optionalTraits],
			traits: [...e.traits],
			trappings: [...e.trappings]
		}, n.value = {}, m.value = {}, h.value = {};
	}
	function fe(e) {
		i.value = [...e].sort((e, t) => e.name.localeCompare(t.name)), f.value && !i.value.some((e) => e.uuid === f.value) && (f.value = "", le());
	}
	function pe(e) {
		d.value = wc(e);
	}
	function me(e) {
		t.value = [...e].sort((e, t) => e.name.localeCompare(t.name)), d.value.baseActorFolderUuid && !t.value.some((e) => e.uuid === d.value.baseActorFolderUuid) && (d.value.baseActorFolderUuid = ""), d.value.outputActorFolderUuid && !t.value.some((e) => e.uuid === d.value.outputActorFolderUuid) && (d.value.outputActorFolderUuid = "");
	}
	function he(e) {
		c.value = [...e].sort((e, t) => e.name.localeCompare(t.name)), d.value.quickTraitFolderUuid && !c.value.some((e) => e.uuid === d.value.quickTraitFolderUuid) && (d.value.quickTraitFolderUuid = "");
	}
	function ge(e) {
		l.value = [...e].sort((e, t) => e.name.localeCompare(t.name));
	}
	function A(e, t) {
		let n = e + t, r = a.value[e];
		!r || n < 0 || n >= a.value.length || (a.value.splice(e, 1), a.value.splice(n, 0, r));
	}
	function _e(e, t) {
		return t === "characteristic" ? e.grants.characteristics : t === "skill" ? Xs(e.uuid, e.grants.skills).map((e) => p.value[e.resolutionKey] || e.originalName) : e.grants.talents;
	}
	function ve(e) {
		let [t] = a.value.splice(e, 1);
		t && ze(t.uuid);
	}
	function ye(e) {
		s.value = s.value.filter((t) => t.key !== e), delete h.value[e], delete g.value[e];
	}
	function be(e) {
		o.value = o.value.filter((t) => t.key !== e), delete m.value[e];
	}
	function xe() {
		e.value = "", a.value = [], o.value = [], s.value = [], u.value = "", p.value = {}, f.value = "", le();
	}
	function Se(e) {
		i.value.some((t) => t.uuid === e.uuid) || i.value.push(e), Ce(e.uuid);
	}
	function Ce(e) {
		let t = e.trim();
		f.value !== t && (u.value = ""), f.value = t;
	}
	function j(e) {
		u.value = e;
	}
	function we(e, t) {
		let r = gc(e.kind, e.name), i = Number.isFinite(t) ? t : 0;
		n.value[r] = Math.max(0, Math.floor(i));
	}
	function Te(e, t) {
		let n = a.value[e];
		n && (n.quantity = xc(t));
	}
	function M(e, t) {
		let n = t.trim();
		if (!n) {
			delete p.value[e];
			return;
		}
		p.value[e] = n;
	}
	function Ee(e, t) {
		Oe("quick", e, t);
	}
	function De(e, t) {
		Oe("optional", e, t);
	}
	function Oe(e, t, n) {
		let r = `${e}:${t.uuid || bc(t.name)}`;
		if (!n) {
			be(r);
			return;
		}
		o.value.find((e) => e.key === r) || ke({
			config: t.config,
			ignored: !1,
			key: r,
			name: t.name,
			source: e,
			sourceUuid: t.uuid
		});
	}
	function ke(e) {
		E.value.some((t) => Me(t.name, e.name)) || o.value.some((t) => t.key === e.key) || o.value.push(e);
	}
	function N(e, t) {
		m.value[e] = {
			...m.value[e],
			...t
		};
	}
	function Ae(e) {
		return ee.value.find((t) => Me(t.name, e));
	}
	function je(e) {
		return l.value.find((t) => Me(t.name, e));
	}
	function Me(e, t) {
		return bc(e) === bc(t);
	}
	function Ne(e, t) {
		return [...e.values()].some((e) => Me(e.name, t));
	}
	function Pe(e, t) {
		h.value[e] = {
			...h.value[e],
			ignored: t
		};
	}
	function Fe(e, t) {
		h.value[e] = {
			...h.value[e],
			quantity: xc(t)
		};
	}
	function Ie(e, t) {
		let n = T.value.find((t) => t.key === e), r = n?.resolution.candidates.find((e) => e.uuid === t);
		!n || !r || (g.value[e] = {
			...n.resolution,
			selectedCandidateUuid: r.uuid,
			selectedItemType: r.itemType,
			selectedName: r.name,
			status: n.resolution.status === "matched" ? "matched" : "ambiguous"
		});
	}
	function Le(e) {
		let t = T.value.find((t) => t.key === e);
		if (!t) return;
		let n = ec(t.name, t.itemType);
		g.value[e] = {
			...n,
			candidates: t.resolution.candidates,
			searchTerms: t.resolution.searchTerms
		};
	}
	function Re(e, t) {
		g.value[e] = t;
	}
	function ze(e) {
		let t = `${e}:`;
		for (let e of Object.keys(p.value)) e.startsWith(t) && delete p.value[e];
	}
	return {
		actorName: e,
		actorFolders: t,
		addCareer: D,
		addCareerIfMissing: te,
		addCustomTrait: se,
		addCustomTrapping: oe,
		advancements: w,
		baseActorDraftData: r,
		baseActors: i,
		careers: a,
		clearBaseDraftData: le,
		customTraits: o,
		customTrappings: s,
		finalActorName: b,
		finalCareer: v,
		finalPortraitPath: S,
		grantTotals: C,
		getSkillGrantResolution: ue,
		hydrateActorFolders: me,
		hydrateBaseActorDraftData: de,
		hydrateBaseActors: fe,
		hydrateItemFolders: he,
		hydrateQuickTraits: ge,
		hydrateSettings: pe,
		itemFolders: c,
		moveCareer: A,
		optionalTraits: ee,
		quickTraits: l,
		removeCareer: ve,
		removeCustomTrait: be,
		removeCustomTrapping: ye,
		resetDraft: xe,
		selectBaseActor: Se,
		selectBaseActorUuid: Ce,
		selectPortrait: j,
		selectTrappingResolutionCandidate: Ie,
		selectedBaseActor: _,
		selectedBaseActorUuid: f,
		selectedPortraitPath: u,
		setAdvancementCurrent: we,
		setCareerQuantity: Te,
		setTrappingFallback: Le,
		setOptionalTraitSelected: De,
		setQuickTraitSelected: Ee,
		setSkillGrantResolution: M,
		setTraitConfig: N,
		setTrappingIgnored: Pe,
		setTrappingQuantity: Fe,
		setTrappingResolution: Re,
		settings: d,
		suggestedActorName: y,
		traits: E,
		trappings: T
	};
}), Ec = { class: "sub-view__header" }, Dc = /* @__PURE__ */ lr({
	__name: "SubView",
	props: {
		open: { type: Boolean },
		title: {}
	},
	emits: ["close"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ L(null), a = /* @__PURE__ */ L(null), o = null, s = 0;
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
		return (t, n) => (K(), ra(Qa, { name: "sub-view" }, {
			default: Fn(() => [e.open ? (K(), q("section", {
				key: 0,
				ref_key: "rootElement",
				ref: a,
				class: "sub-view",
				role: "dialog",
				"aria-modal": "true"
			}, [J("div", Ec, [J("h2", null, j(e.title), 1), J("button", {
				type: "button",
				class: "sub-view__close",
				onClick: n[0] ||= (e) => r("close")
			}, " Close ")]), J("div", {
				ref_key: "bodyElement",
				ref: i,
				class: "sub-view__body"
			}, [Pr(t.$slots, "default", {}, void 0, !0)], 512)], 512)) : X("", !0)]),
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
}, Lc = ["value", "onInput"], Rc = { class: "npc-builder__panel" }, zc = { class: "npc-builder__table" }, Bc = ["value", "onInput"], Vc = /* @__PURE__ */ lr({
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
			], -1), (K(!0), q(W, null, H(r.value, (e) => (K(), q("label", {
				key: `${e.kind}:${e.name}`,
				class: "npc-builder__advance-row"
			}, [
				J("strong", null, j(e.name), 1),
				J("span", null, j(e.baseValue), 1),
				J("span", null, j(e.careerValue), 1),
				J("input", {
					value: e.current,
					min: "0",
					type: "number",
					onInput: (t) => c(e, t)
				}, null, 40, Nc),
				J("span", null, j(o(e)), 1)
			]))), 128))])]),
			J("section", Pc, [t[3] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "2"), J("h2", null, "Skills")], -1), J("div", Fc, [t[2] ||= J("div", { class: "npc-builder__table-head" }, [
				J("span", null, "Name"),
				J("span", null, "Base"),
				J("span", null, "Career"),
				J("span", null, "Apply"),
				J("span", null, "Sources")
			], -1), (K(!0), q(W, null, H(i.value, (e) => (K(), q("label", {
				key: `${e.kind}:${e.name}`,
				class: "npc-builder__advance-row"
			}, [
				J("strong", null, [da(j(e.name) + " ", 1), s(e.name) ? (K(), q("span", Ic, " Needs specialization ")) : X("", !0)]),
				J("span", null, j(e.baseValue), 1),
				J("span", null, j(e.careerValue), 1),
				J("input", {
					value: e.current,
					min: "0",
					type: "number",
					onInput: (t) => c(e, t)
				}, null, 40, Lc),
				J("span", null, j(o(e)), 1)
			]))), 128))])]),
			J("section", Rc, [t[5] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "3"), J("h2", null, "Talents")], -1), J("div", zc, [t[4] ||= J("div", { class: "npc-builder__table-head" }, [
				J("span", null, "Name"),
				J("span", null, "Base"),
				J("span", null, "Career"),
				J("span", null, "Apply"),
				J("span", null, "Sources")
			], -1), (K(!0), q(W, null, H(a.value, (e) => (K(), q("label", {
				key: `${e.kind}:${e.name}`,
				class: "npc-builder__advance-row"
			}, [
				J("strong", null, j(e.name), 1),
				J("span", null, j(e.baseValue), 1),
				J("span", null, j(e.careerValue), 1),
				J("input", {
					value: e.current,
					min: "0",
					type: "number",
					onInput: (t) => c(e, t)
				}, null, 40, Bc),
				J("span", null, j(o(e)), 1)
			]))), 128))])])
		]));
	}
}), Hc = new Set([
	"and",
	"any",
	"the",
	"with",
	"without",
	"of",
	"or",
	"npc"
]);
function Uc(e) {
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
	}), Jc(t);
}
function Wc(e, t) {
	let n = Yc(e);
	return n ? t.some((e) => Yc(e.img) === n) : !1;
}
function Gc(e) {
	let t = [];
	for (let n of e.careers) t.push(n.name, n.careerGroup);
	return e.selectedBaseActor && t.push(e.selectedBaseActor.name, e.selectedBaseActor.species), $c(t.flatMap((e) => Qc(e)).filter((e) => e.length >= 3 && !Hc.has(e)));
}
function Kc(e, t) {
	return qc(e, t);
}
function qc(e, t) {
	let n = Zc(Xc(e)), r = Zc(e);
	return !n && !r ? !1 : t.some((e) => n.includes(e) || r.includes(e));
}
function Jc(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.img.trim().toLocaleLowerCase();
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
function Yc(e) {
	return e.trim().toLocaleLowerCase();
}
function Xc(e) {
	return (e.split(/[\\/]/).at(-1) ?? e).replace(/\.[^.]+$/, "");
}
function Zc(e) {
	return e.trim().toLocaleLowerCase().replace(/[_-]/g, " ").replace(/[()[\],.;:]/g, " ").replace(/\s+/g, " ");
}
function Qc(e) {
	let t = Zc(e);
	return [t, ...t.split(" ")].filter(Boolean);
}
function $c(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/view/components/DocumentDrop.vue?vue&type=script&setup=true&lang.ts
var el = { key: 0 }, tl = /* @__PURE__ */ Oc(/* @__PURE__ */ lr({
	__name: "DocumentDrop",
	props: {
		description: {},
		title: {},
		variant: {}
	},
	emits: ["dropData"],
	setup(e, { emit: t }) {
		let n = t, r = /* @__PURE__ */ L(!1);
		function i(e) {
			let t = e.currentTarget, n = e.relatedTarget;
			t instanceof Node && n instanceof Node && t.contains(n) || (r.value = !1);
		}
		function a(e) {
			e.preventDefault(), r.value = !1, n("dropData", e.dataTransfer?.getData("text/plain") ?? "");
		}
		return (t, n) => (K(), q("div", {
			class: A(["document-drop", {
				"document-drop--compact": e.variant === "compact",
				"is-hovering": r.value
			}]),
			onDragenter: n[0] ||= is((e) => r.value = !0, ["prevent"]),
			onDragover: n[1] ||= is((e) => r.value = !0, ["prevent"]),
			onDragleave: i,
			onDrop: a
		}, [
			J("strong", null, j(e.title), 1),
			e.description ? (K(), q("span", el, j(e.description), 1)) : X("", !0),
			Pr(t.$slots, "default", {}, void 0, !0)
		], 34));
	}
}), [["__scopeId", "data-v-22723a4a"]]), nl = { class: "npc-builder__layout" }, rl = { class: "npc-builder__column" }, il = { class: "npc-builder__panel" }, al = { class: "npc-builder__field" }, ol = { class: "npc-builder__field" }, sl = ["disabled"], cl = { value: "" }, ll = ["value"], ul = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, dl = {
	key: 1,
	class: "npc-builder__source"
}, fl = { class: "npc-builder__thumbnail" }, pl = ["src"], ml = { key: 1 }, hl = { class: "npc-builder__panel" }, gl = {
	key: 0,
	class: "npc-builder__careers"
}, _l = { class: "npc-builder__thumbnail" }, vl = ["src"], yl = { key: 1 }, bl = { class: "npc-builder__career-copy" }, xl = { class: "npc-builder__grant-list" }, Sl = ["value", "onInput"], Cl = { class: "npc-builder__career-actions" }, wl = ["disabled", "onClick"], Tl = ["disabled", "onClick"], El = ["onClick"], Dl = {
	key: 1,
	class: "npc-builder__empty"
}, Ol = { class: "npc-builder__summary" }, kl = { class: "npc-builder__preview" }, Al = { class: "npc-builder__portrait" }, jl = ["src"], Ml = { key: 1 }, Nl = { key: 2 }, Pl = {
	key: 0,
	class: "npc-builder__portrait-gallery"
}, Fl = { key: 0 }, Il = { key: 1 }, Ll = { class: "npc-builder__portrait-strip" }, Rl = ["title", "onClick"], zl = ["src"], Bl = { class: "npc-builder__field" }, Vl = ["placeholder"], Hl = {
	key: 1,
	class: "npc-builder__quick-traits"
}, Ul = ["onClick"], Wl = {
	key: 2,
	class: "npc-builder__quick-traits"
}, Gl = ["onClick"], Kl = /* @__PURE__ */ lr({
	__name: "NpcBuilderBuildTab",
	props: {
		bridge: {},
		isLoadingActors: { type: Boolean },
		isLoadingBaseDraft: { type: Boolean }
	},
	emits: ["careerDrop"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Tc(), { actorName: a, advancements: o, baseActors: s, careers: c, finalActorName: l, finalCareer: u, finalPortraitPath: d, grantTotals: f, optionalTraits: p, quickTraits: m, selectedBaseActor: h, selectedBaseActorUuid: g, selectedPortraitPath: _, settings: v, suggestedActorName: y, traits: b, trappings: x } = Ws(i), S = /* @__PURE__ */ L(""), C = /* @__PURE__ */ L([]), w = /* @__PURE__ */ L(""), T = /* @__PURE__ */ L(!1), E = 0, ee = Q(() => {
			let e = S.value.trim().toLocaleLowerCase();
			return e ? s.value.filter((t) => t.name.toLocaleLowerCase().includes(e)) : s.value;
		}), D = Q({
			get: () => g.value,
			set: (e) => {
				i.selectBaseActorUuid(e);
			}
		}), te = Q(() => {
			let e = new Set(p.value.map((e) => le(e.name)));
			return m.value.filter((t) => !e.has(le(t.name)));
		}), O = Q(() => {
			let e = 0;
			for (let t of c.value) e += t.quantity;
			return e;
		}), ne = Q(() => x.value.filter((e) => !e.ignored)), re = Q(() => Uc({
			careers: c.value,
			selectedBaseActor: h.value
		})), ie = Q(() => Jc([...re.value, ...C.value])), ae = Q(() => ie.value.find((e) => e.img === d.value)?.key ?? "");
		Hn(() => [
			h.value?.uuid ?? "",
			v.value.searchFoundryPortraitAssets,
			c.value.map((e) => e.uuid).join("|")
		], () => {
			ge();
		}, { immediate: !0 }), Hn([
			ie,
			_,
			T
		], () => {
			_.value && !T.value && !Wc(_.value, ie.value) && i.selectPortrait("");
		}, { immediate: !0 });
		function k(e) {
			return se(e);
		}
		function oe(e) {
			return se(e);
		}
		function se(e) {
			return b.value.some((t) => ce(t.name, e.name));
		}
		function ce(e, t) {
			return le(e) === le(t);
		}
		function le(e) {
			return e.trim().toLocaleLowerCase();
		}
		function ue(e, t) {
			let n = t.target;
			n && i.setCareerQuantity(e, Number(n.value));
		}
		function de(e) {
			let t = e.slice(0, 3).join(", "), n = e.length - 3;
			return e.length ? n > 0 ? `${t}, +${n}` : t : "-";
		}
		function fe(e) {
			return e.split(/\s+/).map((e) => e.at(0)).filter(Boolean).slice(0, 2).join("").toLocaleUpperCase();
		}
		function pe(e) {
			i.setQuickTraitSelected(e, !k(e));
		}
		function me(e) {
			i.setOptionalTraitSelected(e, !oe(e));
		}
		function he(e) {
			i.selectPortrait(e.img);
		}
		async function ge() {
			let e = E + 1;
			if (E = e, !v.value.searchFoundryPortraitAssets) {
				C.value = [];
				return;
			}
			if (!h.value && !c.value.length) {
				C.value = [];
				return;
			}
			T.value = !0, C.value = [];
			try {
				let t = await n.bridge.listFoundryPortraitCandidates({
					careers: c.value,
					selectedBaseActor: h.value
				});
				E === e && (C.value = t);
			} catch (t) {
				E === e && (w.value = ve(t));
			} finally {
				E === e && (T.value = !1);
			}
		}
		async function _e(e) {
			w.value = "";
			try {
				i.selectBaseActor(await n.bridge.resolveActorDrop(e));
			} catch (e) {
				w.value = ve(e);
			}
		}
		function ve(e) {
			return e instanceof Error ? e.message : "The NPC Builder could not resolve that Actor drop.";
		}
		return (t, n) => (K(), q("section", nl, [J("div", rl, [J("section", il, [
			n[6] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "1"), J("h2", null, "Base Actor")], -1),
			J("label", al, [n[4] ||= J("span", null, "Search world actors", -1), V(J("input", {
				"onUpdate:modelValue": n[0] ||= (e) => S.value = e,
				placeholder: "Filter actors",
				type: "search"
			}, null, 512), [[Yo, S.value]])]),
			J("label", ol, [n[5] ||= J("span", null, "Base statblock", -1), V(J("select", {
				"onUpdate:modelValue": n[1] ||= (e) => D.value = e,
				disabled: e.isLoadingActors
			}, [J("option", cl, j(e.isLoadingActors ? "Loading actors..." : "Choose an actor"), 1), (K(!0), q(W, null, H(ee.value, (e) => (K(), q("option", {
				key: e.uuid,
				value: e.uuid
			}, j(e.name), 9, ll))), 128))], 8, sl), [[Qo, D.value]])]),
			Y(tl, {
				class: "npc-builder__drop",
				description: "Use any world Actor as the starting statblock.",
				title: "Drop Actor",
				onDropData: _e
			}),
			w.value ? (K(), q("p", ul, j(w.value), 1)) : X("", !0),
			R(h) ? (K(), q("article", dl, [J("div", fl, [R(h).img ? (K(), q("img", {
				key: 0,
				src: R(h).img,
				alt: ""
			}, null, 8, pl)) : (K(), q("span", ml, j(fe(R(h).name)), 1))]), J("div", null, [J("strong", null, j(R(h).name), 1), J("span", null, [
				da(j(R(h).species || "Species not found") + " ", 1),
				R(h).type ? (K(), q(W, { key: 0 }, [da(" - " + j(R(h).type), 1)], 64)) : X("", !0),
				e.isLoadingBaseDraft ? (K(), q(W, { key: 1 }, [da("loading...")], 64)) : X("", !0)
			])])])) : X("", !0)
		]), J("section", hl, [
			n[12] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "2"), J("h2", null, "Career Queue")], -1),
			Y(tl, {
				class: "npc-builder__drop npc-builder__drop--career",
				description: "The last queued career drives the preview image.",
				title: "Drop Career Items",
				onDropData: n[2] ||= (e) => r("careerDrop", e)
			}),
			R(c).length ? (K(), q("ol", gl, [(K(!0), q(W, null, H(R(c), (e, t) => (K(), q("li", { key: e.uuid }, [
				J("div", _l, [e.img ? (K(), q("img", {
					key: 0,
					src: e.img,
					alt: ""
				}, null, 8, vl)) : (K(), q("span", yl, j(fe(e.name)), 1))]),
				J("div", bl, [
					J("strong", null, j(e.name), 1),
					J("span", null, [da(j(e.careerGroup || "Career") + " ", 1), e.level === null ? X("", !0) : (K(), q(W, { key: 0 }, [da(" level " + j(e.level), 1)], 64))]),
					J("dl", xl, [
						J("div", null, [n[7] ||= J("dt", null, "Characteristics", -1), J("dd", null, j(de(e.grants.characteristics)), 1)]),
						J("div", null, [n[8] ||= J("dt", null, "Skills", -1), J("dd", null, j(de(e.grants.skills)), 1)]),
						J("div", null, [n[9] ||= J("dt", null, "Talents", -1), J("dd", null, j(de(e.grants.talents)), 1)]),
						J("div", null, [n[10] ||= J("dt", null, "Trappings", -1), J("dd", null, j(de(e.grants.trappings)), 1)])
					])
				]),
				J("label", null, [n[11] ||= J("span", null, "Qty", -1), J("input", {
					value: e.quantity,
					min: "1",
					type: "number",
					onInput: (e) => ue(t, e)
				}, null, 40, Sl)]),
				J("div", Cl, [
					J("button", {
						disabled: t === 0,
						title: "Move career earlier",
						type: "button",
						onClick: (e) => R(i).moveCareer(t, -1)
					}, " Up ", 8, wl),
					J("button", {
						disabled: t === R(c).length - 1,
						title: "Move career later",
						type: "button",
						onClick: (e) => R(i).moveCareer(t, 1)
					}, " Down ", 8, Tl),
					J("button", {
						type: "button",
						onClick: (e) => R(i).removeCareer(t)
					}, " Remove ", 8, El)
				])
			]))), 128))])) : (K(), q("p", Dl, "No careers queued yet."))
		])]), J("aside", Ol, [J("section", kl, [
			J("div", Al, [R(d) ? (K(), q("img", {
				key: 0,
				src: R(d),
				alt: ""
			}, null, 8, jl)) : R(u) ? (K(), q("strong", Ml, j(fe(R(u).name)), 1)) : (K(), q("span", Nl, "No portrait selected"))]),
			ie.value.length || T.value ? (K(), q("section", Pl, [J("div", null, [n[13] ||= J("h2", null, "Portrait", -1), T.value ? (K(), q("span", Fl, "Finding assets...")) : (K(), q("span", Il, j(ie.value.length) + " options", 1))]), J("div", Ll, [(K(!0), q(W, null, H(ie.value, (e) => (K(), q("button", {
				key: e.key,
				class: A({ "is-active": e.key === ae.value }),
				title: e.label,
				type: "button",
				onClick: (t) => he(e)
			}, [J("img", {
				src: e.img,
				alt: ""
			}, null, 8, zl)], 10, Rl))), 128))])])) : X("", !0),
			J("label", Bl, [n[14] ||= J("span", null, "NPC name", -1), V(J("input", {
				"onUpdate:modelValue": n[3] ||= (e) => /* @__PURE__ */ I(a) ? a.value = e : null,
				placeholder: R(y),
				type: "text"
			}, null, 8, Vl), [[Yo, R(a)]])]),
			R(p).length ? (K(), q("section", Hl, [J("div", null, [n[15] ||= J("h2", null, "Optional Traits", -1), J("span", null, j(R(p).length) + " from base statblock", 1)]), (K(!0), q(W, null, H(R(p), (e) => (K(), q("button", {
				key: e.uuid,
				class: A({ "is-active": oe(e) }),
				type: "button",
				onClick: (t) => me(e)
			}, j(e.name), 11, Ul))), 128))])) : X("", !0),
			te.value.length ? (K(), q("section", Wl, [J("div", null, [n[16] ||= J("h2", null, "Quick Traits", -1), J("span", null, j(te.value.length) + " configured", 1)]), (K(!0), q(W, null, H(te.value, (e) => (K(), q("button", {
				key: e.uuid,
				class: A({ "is-active": k(e) }),
				type: "button",
				onClick: (t) => pe(e)
			}, j(e.name), 11, Gl))), 128))])) : X("", !0),
			J("dl", null, [
				J("div", null, [n[17] ||= J("dt", null, "Build name", -1), J("dd", null, j(R(l)), 1)]),
				J("div", null, [n[18] ||= J("dt", null, "Base actor", -1), J("dd", null, j(R(h)?.name ?? "Not selected"), 1)]),
				J("div", null, [n[19] ||= J("dt", null, "Final career", -1), J("dd", null, j(R(u)?.name ?? "Not queued"), 1)]),
				J("div", null, [n[20] ||= J("dt", null, "Career items", -1), J("dd", null, j(O.value), 1)]),
				J("div", null, [n[21] ||= J("dt", null, "Apply", -1), J("dd", null, j(R(o).length) + " advance rows, " + j(ne.value.length) + " trappings, " + j(R(b).length) + " traits ", 1)]),
				J("div", null, [n[22] ||= J("dt", null, "Extracted grants", -1), J("dd", null, j(R(f).characteristics) + " characteristics, " + j(R(f).skills) + " skills, " + j(R(f).talents) + " talents, " + j(R(f).trappings) + " trappings ", 1)])
			])
		])])]));
	}
}), ql = { class: "npc-builder__settings" }, Jl = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, Yl = {
	key: 1,
	class: "npc-builder__message"
}, Xl = { class: "npc-builder__panel" }, Zl = { class: "npc-builder__folder-setting" }, Ql = { class: "npc-builder__field" }, $l = ["value"], eu = { class: "npc-builder__field" }, tu = ["disabled"], nu = { class: "npc-builder__folder-setting" }, ru = { class: "npc-builder__field" }, iu = ["value"], au = { class: "npc-builder__field" }, ou = ["disabled"], su = { class: "npc-builder__panel" }, cu = { class: "npc-builder__folder-setting" }, lu = { class: "npc-builder__field" }, uu = ["value"], du = { class: "npc-builder__field" }, fu = ["disabled"], pu = ["disabled"], mu = { class: "npc-builder__panel" }, hu = { class: "npc-builder__check" }, gu = { class: "npc-builder__panel" }, _u = { class: "npc-builder__check" }, vu = { class: "npc-builder__check" }, yu = { class: "npc-builder__panel" }, bu = { class: "npc-builder__check" }, xu = { class: "npc-builder__check" }, Su = { class: "npc-builder__check" }, Cu = { class: "npc-builder__check" }, wu = { class: "npc-builder__check" }, Tu = { class: "npc-builder__panel" }, Eu = { class: "npc-builder__field" }, Du = { class: "npc-builder__check" }, Ou = ["disabled"], ku = /* @__PURE__ */ lr({
	__name: "NpcBuilderSettingsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Tc(), { actorFolders: r, itemFolders: i, settings: a } = Ws(n), o = /* @__PURE__ */ L(""), s = /* @__PURE__ */ L(""), c = /* @__PURE__ */ L(!1), l = /* @__PURE__ */ L(""), u = /* @__PURE__ */ L(""), d = /* @__PURE__ */ L("");
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
				quickTraitFolderUuid: a.value.quickTraitFolderUuid,
				searchFoundryPortraitAssets: a.value.searchFoundryPortraitAssets,
				searchWebPortraitAssets: a.value.searchWebPortraitAssets
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
		return (e, t) => (K(), q("section", ql, [
			s.value ? (K(), q("p", Jl, j(s.value), 1)) : d.value ? (K(), q("p", Yl, j(d.value), 1)) : X("", !0),
			J("section", Xl, [
				t[22] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "1"), J("h2", null, "Actor Sources")], -1),
				J("section", Zl, [
					J("label", Ql, [t[17] ||= J("span", null, "Base actor folder", -1), V(J("select", { "onUpdate:modelValue": t[0] ||= (e) => R(a).baseActorFolderUuid = e }, [t[16] ||= J("option", { value: "" }, "All world actors", -1), (K(!0), q(W, null, H(R(r), (e) => (K(), q("option", {
						key: e.uuid,
						value: e.uuid
					}, j(e.name), 9, $l))), 128))], 512), [[Qo, R(a).baseActorFolderUuid]])]),
					J("label", eu, [t[18] ||= J("span", null, "Create or use by name", -1), V(J("input", {
						"onUpdate:modelValue": t[1] ||= (e) => o.value = e,
						placeholder: "Folder name",
						type: "text"
					}, null, 512), [[Yo, o.value]])]),
					J("button", {
						disabled: c.value || !o.value.trim(),
						type: "button",
						onClick: f
					}, " Save ", 8, tu)
				]),
				J("section", nu, [
					J("label", ru, [t[20] ||= J("span", null, "Output actor folder", -1), V(J("select", { "onUpdate:modelValue": t[2] ||= (e) => R(a).outputActorFolderUuid = e }, [t[19] ||= J("option", { value: "" }, "Foundry default location", -1), (K(!0), q(W, null, H(R(r), (e) => (K(), q("option", {
						key: e.uuid,
						value: e.uuid
					}, j(e.name), 9, iu))), 128))], 512), [[Qo, R(a).outputActorFolderUuid]])]),
					J("label", au, [t[21] ||= J("span", null, "Create or use by name", -1), V(J("input", {
						"onUpdate:modelValue": t[3] ||= (e) => l.value = e,
						placeholder: "Folder name",
						type: "text"
					}, null, 512), [[Yo, l.value]])]),
					J("button", {
						disabled: c.value || !l.value.trim(),
						type: "button",
						onClick: p
					}, " Save ", 8, ou)
				])
			]),
			J("section", su, [
				t[26] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "2"), J("h2", null, "Quick Traits")], -1),
				J("section", cu, [
					J("label", lu, [t[24] ||= J("span", null, "Quick traits folder", -1), V(J("select", { "onUpdate:modelValue": t[4] ||= (e) => R(a).quickTraitFolderUuid = e }, [t[23] ||= J("option", { value: "" }, "No quick traits folder", -1), (K(!0), q(W, null, H(R(i), (e) => (K(), q("option", {
						key: e.uuid,
						value: e.uuid
					}, j(e.name), 9, uu))), 128))], 512), [[Qo, R(a).quickTraitFolderUuid]])]),
					J("label", du, [t[25] ||= J("span", null, "Create or use by name", -1), V(J("input", {
						"onUpdate:modelValue": t[5] ||= (e) => u.value = e,
						placeholder: "Folder name",
						type: "text"
					}, null, 512), [[Yo, u.value]])]),
					J("button", {
						disabled: c.value || !u.value.trim(),
						type: "button",
						onClick: m
					}, " Save ", 8, fu)
				]),
				J("button", {
					disabled: c.value || !R(a).quickTraitFolderUuid,
					type: "button",
					onClick: x
				}, " Import Recommended Quick Traits ", 8, pu)
			]),
			J("section", mu, [t[28] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "3"), J("h2", null, "Default Naming")], -1), J("label", hu, [V(J("input", {
				"onUpdate:modelValue": t[6] ||= (e) => R(a).includeSpeciesInName = e,
				type: "checkbox"
			}, null, 512), [[Xo, R(a).includeSpeciesInName]]), t[27] ||= J("span", null, "Include species in suggested names", -1)])]),
			J("section", gu, [
				t[31] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "4"), J("h2", null, "Portrait Suggestions")], -1),
				J("label", _u, [V(J("input", {
					"onUpdate:modelValue": t[7] ||= (e) => R(a).searchFoundryPortraitAssets = e,
					type: "checkbox"
				}, null, 512), [[Xo, R(a).searchFoundryPortraitAssets]]), t[29] ||= J("span", null, "Search Foundry assets for portrait suggestions", -1)]),
				J("label", vu, [V(J("input", {
					"onUpdate:modelValue": t[8] ||= (e) => R(a).searchWebPortraitAssets = e,
					disabled: "",
					type: "checkbox"
				}, null, 512), [[Xo, R(a).searchWebPortraitAssets]]), t[30] ||= J("span", null, "Search the web for portrait suggestions (later)", -1)])
			]),
			J("section", yu, [
				t[37] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "5"), J("h2", null, "Base Actor Features")], -1),
				J("label", bu, [V(J("input", {
					"onUpdate:modelValue": t[9] ||= (e) => R(a).allowBaseActorCharacteristics = e,
					type: "checkbox"
				}, null, 512), [[Xo, R(a).allowBaseActorCharacteristics]]), t[32] ||= J("span", null, "Show base actor characteristics", -1)]),
				J("label", xu, [V(J("input", {
					"onUpdate:modelValue": t[10] ||= (e) => R(a).allowBaseActorSkills = e,
					type: "checkbox"
				}, null, 512), [[Xo, R(a).allowBaseActorSkills]]), t[33] ||= J("span", null, "Show base actor skills", -1)]),
				J("label", Su, [V(J("input", {
					"onUpdate:modelValue": t[11] ||= (e) => R(a).allowBaseActorTalents = e,
					type: "checkbox"
				}, null, 512), [[Xo, R(a).allowBaseActorTalents]]), t[34] ||= J("span", null, "Show base actor talents", -1)]),
				J("label", Cu, [V(J("input", {
					"onUpdate:modelValue": t[12] ||= (e) => R(a).allowBaseActorTrappings = e,
					type: "checkbox"
				}, null, 512), [[Xo, R(a).allowBaseActorTrappings]]), t[35] ||= J("span", null, "Show base actor trappings", -1)]),
				J("label", wu, [V(J("input", {
					"onUpdate:modelValue": t[13] ||= (e) => R(a).allowBaseActorTraits = e,
					type: "checkbox"
				}, null, 512), [[Xo, R(a).allowBaseActorTraits]]), t[36] ||= J("span", null, "Show base actor traits", -1)])
			]),
			J("section", Tu, [
				t[41] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "6"), J("h2", null, "Other Settings")], -1),
				J("label", Eu, [t[39] ||= J("span", null, "Lower career handling", -1), V(J("select", { "onUpdate:modelValue": t[14] ||= (e) => R(a).lowerCareerMode = e }, [...t[38] ||= [
					J("option", { value: "prompt" }, "Prompt when candidates are found", -1),
					J("option", { value: "auto-add-all" }, " Automatically add all lower-tier matches ", -1),
					J("option", { value: "never" }, "Only add dropped careers", -1)
				]], 512), [[Qo, R(a).lowerCareerMode]])]),
				J("label", Du, [V(J("input", {
					"onUpdate:modelValue": t[15] ||= (e) => R(a).askForLinkedSkillSpecializations = e,
					type: "checkbox"
				}, null, 512), [[Xo, R(a).askForLinkedSkillSpecializations]]), t[40] ||= J("span", null, "Resolve linked career skill repeats separately", -1)]),
				J("button", {
					disabled: c.value,
					type: "button",
					onClick: S
				}, " Save Settings ", 8, Ou)
			])
		]));
	}
}), Au = { class: "npc-builder__stack" }, ju = { class: "npc-builder__panel" }, Mu = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, Nu = { class: "npc-builder__table" }, Pu = { class: "npc-builder__trait-name" }, Fu = { key: 0 }, Iu = { key: 1 }, Lu = { class: "npc-builder__trait-config" }, Ru = { class: "npc-builder__mini-field" }, zu = ["value", "onInput"], Bu = {
	key: 0,
	class: "npc-builder__mini-field"
}, Vu = ["value", "onChange"], Hu = ["value"], Uu = {
	key: 1,
	class: "npc-builder__mini-field"
}, Wu = ["value", "onInput"], Gu = ["onClick"], Ku = { key: 1 }, qu = /* @__PURE__ */ lr({
	__name: "NpcBuilderTraitsTab",
	props: {
		bridge: {},
		difficultyOptions: {}
	},
	setup(e) {
		let t = e, n = Tc(), { traits: r } = Ws(n), i = /* @__PURE__ */ L("");
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
		return (t, n) => (K(), q("section", Au, [J("section", ju, [
			n[3] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "1"), J("h2", null, "Traits")], -1),
			Y(tl, {
				class: "npc-builder__drop npc-builder__drop--career",
				description: "Add creature traits or NPC trait items.",
				title: "Drop Trait Items",
				onDropData: c
			}),
			i.value ? (K(), q("p", Mu, j(i.value), 1)) : X("", !0),
			J("div", Nu, [n[2] ||= J("div", { class: "npc-builder__table-head npc-builder__table-head--traits" }, [
				J("span", null, "Name"),
				J("span", null, "Source"),
				J("span", null, "Config"),
				J("span")
			], -1), (K(!0), q(W, null, H(R(r), (t) => (K(), q("article", {
				key: t.key,
				class: "npc-builder__trait-row"
			}, [
				J("div", Pu, [
					J("strong", null, j(t.name), 1),
					t.config.rollable ? (K(), q("span", Fu, "Rollable")) : X("", !0),
					t.config.damage ? (K(), q("span", Iu, "Damage")) : X("", !0)
				]),
				J("span", null, j(a(t)), 1),
				J("div", Lu, [
					J("label", Ru, [J("span", null, j(t.config.damage ? "Damage" : "Specification"), 1), J("input", {
						value: t.config.specification,
						placeholder: "None",
						type: "text",
						onInput: (e) => s(t, "specification", e)
					}, null, 40, zu)]),
					t.config.rollable && !t.config.damage ? (K(), q("label", Bu, [n[0] ||= J("span", null, "Difficulty", -1), J("select", {
						value: t.config.defaultDifficulty,
						onChange: (e) => s(t, "defaultDifficulty", e)
					}, [(K(!0), q(W, null, H(e.difficultyOptions, (e) => (K(), q("option", {
						key: e.value,
						value: e.value
					}, j(e.label), 9, Hu))), 128))], 40, Vu)])) : X("", !0),
					t.config.damage && t.config.dice ? (K(), q("label", Uu, [n[1] ||= J("span", null, "Dice", -1), J("input", {
						value: t.config.dice,
						placeholder: "Optional",
						type: "text",
						onInput: (e) => s(t, "dice", e)
					}, null, 40, Wu)])) : X("", !0)
				]),
				t.source === "base" ? (K(), q("span", Ku)) : (K(), q("button", {
					key: 0,
					type: "button",
					onClick: (e) => o(t)
				}, " Remove ", 8, Gu))
			]))), 128))])
		])]));
	}
}), Ju = { class: "npc-builder__stack" }, Yu = { class: "npc-builder__panel" }, Xu = { class: "npc-builder__panel-actions" }, Zu = ["disabled"], Qu = { key: 0 }, $u = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, ed = { class: "npc-builder__table" }, td = ["checked", "onChange"], nd = { class: "npc-builder__trapping-name" }, rd = { key: 0 }, id = { class: "npc-builder__trapping-resolution" }, ad = ["value", "onChange"], od = {
	key: 0,
	value: ""
}, sd = ["value"], cd = { key: 1 }, ld = ["value", "onInput"], ud = ["onClick"], dd = { key: 1 }, fd = "__blank-item__", pd = /* @__PURE__ */ lr({
	__name: "NpcBuilderTrappingsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Tc(), { trappings: r } = Ws(n), i = /* @__PURE__ */ L(""), a = /* @__PURE__ */ L(!1), o = Q(() => r.value.filter((e) => !e.ignored && e.resolution.status === "unresolved"));
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
			return e.resolution.status === "fallback" ? fd : e.resolution.selectedCandidateUuid;
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
				if (r.value === fd) {
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
		return (e, t) => (K(), q("section", Ju, [J("section", Yu, [
			t[1] ||= J("div", { class: "npc-builder__panel-heading" }, [J("span", null, "1"), J("h2", null, "Trappings")], -1),
			Y(tl, {
				class: "npc-builder__drop npc-builder__drop--career",
				description: "Add weapons, armour, containers, or any other item.",
				title: "Drop Trapping Items",
				onDropData: _
			}),
			J("div", Xu, [J("button", {
				disabled: a.value || !o.value.length,
				type: "button",
				onClick: g
			}, j(a.value ? "Resolving..." : "Resolve Trappings"), 9, Zu), o.value.length ? (K(), q("span", Qu, j(o.value.length) + " unresolved ", 1)) : X("", !0)]),
			i.value ? (K(), q("p", $u, j(i.value), 1)) : X("", !0),
			J("div", ed, [t[0] ||= J("div", { class: "npc-builder__table-head npc-builder__table-head--traps" }, [
				J("span", null, "Use"),
				J("span", null, "Name"),
				J("span", null, "Resolution"),
				J("span", null, "Type"),
				J("span", null, "Qty"),
				J("span", null, "Source"),
				J("span")
			], -1), (K(!0), q(W, null, H(R(r), (e) => (K(), q("article", {
				key: e.key,
				class: A(["npc-builder__trapping-row", { "is-ignored": e.ignored }])
			}, [
				J("input", {
					checked: !e.ignored,
					type: "checkbox",
					onChange: (t) => l(e.key, t)
				}, null, 40, td),
				J("div", nd, [J("strong", null, j(e.name), 1), m(e) ? (K(), q("span", rd, j(m(e)), 1)) : X("", !0)]),
				J("div", id, [p(e) ? (K(), q("select", {
					key: 0,
					value: d(e),
					onChange: (t) => h(e.key, t)
				}, [
					e.resolution.candidates.length ? (K(), q("option", od, " Choose match ")) : X("", !0),
					(K(!0), q(W, null, H(e.resolution.candidates, (e) => (K(), q("option", {
						key: e.uuid,
						value: e.uuid
					}, j(e.name) + " (" + j(e.sourceLabel) + ") ", 9, sd))), 128)),
					f(e) ? (K(), q("option", {
						key: 1,
						value: fd
					}, " Blank Item ")) : X("", !0)
				], 40, ad)) : (K(), q("span", cd, j(u(e)), 1))]),
				J("span", null, j(e.resolution.selectedItemType || e.itemType || "trapping"), 1),
				J("input", {
					value: e.quantity,
					min: "1",
					type: "number",
					onInput: (t) => c(e.key, t)
				}, null, 40, ld),
				J("span", null, j(s(e)), 1),
				e.source === "custom" ? (K(), q("button", {
					key: 0,
					type: "button",
					onClick: (t) => R(n).removeCustomTrapping(e.key)
				}, " Remove ", 8, ud)) : (K(), q("span", dd))
			], 2))), 128))])
		])]));
	}
}), md = { class: "npc-builder__subview-stack" }, hd = [
	"checked",
	"disabled",
	"onChange"
], gd = { class: "npc-builder__subview-actions" }, _d = /* @__PURE__ */ lr({
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
		return (t, r) => (K(), q("div", md, [
			J("p", null, j(e.prompt.droppedCareer.name) + " appears to belong to the " + j(e.prompt.droppedCareer.careerGroup) + " career track. The following lower-tier candidates were found. ", 1),
			(K(!0), q(W, null, H(e.candidateGroups, (t) => (K(), q("section", {
				key: t.level,
				class: "npc-builder__candidate-group"
			}, [J("h3", null, "Tier " + j(t.level || "Unknown"), 1), (K(!0), q(W, null, H(t.candidates, (t) => (K(), q("label", {
				key: t.uuid,
				class: A(["npc-builder__candidate-row", { "is-queued": e.isCareerQueued(t.uuid) }])
			}, [J("input", {
				checked: e.isCareerQueued(t.uuid) || e.isLowerCareerSelected(t.uuid),
				disabled: e.isCareerQueued(t.uuid),
				type: "checkbox",
				onChange: (e) => n("lowerCareerSelected", t, e)
			}, null, 40, hd), J("span", null, [J("strong", null, j(t.name), 1), J("small", null, [da(j(t.careerGroup || "Career") + " ", 1), e.isCareerQueued(t.uuid) ? (K(), q(W, { key: 0 }, [da(" already queued ")], 64)) : X("", !0)])])], 2))), 128))]))), 128)),
			J("div", gd, [J("button", {
				type: "button",
				onClick: r[0] ||= (e) => n("addDroppedOnly")
			}, " Add Dropped Only "), J("button", {
				type: "button",
				onClick: r[1] ||= (e) => n("addSelected")
			}, "Add Selected")])
		]));
	}
}), vd = { class: "npc-builder__subview-stack" }, yd = { class: "npc-builder__field" }, bd = ["onUpdate:modelValue"], xd = ["value"], Sd = ["onUpdate:modelValue", "placeholder"], Cd = {
	key: 0,
	class: "npc-builder__suggestions"
}, wd = { key: 0 }, Td = ["onClick"], Ed = {
	key: 0,
	class: "npc-builder__linked-note"
}, Dd = { class: "npc-builder__subview-actions" }, Od = /* @__PURE__ */ lr({
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
		return (t, r) => (K(), q("div", vd, [
			r[4] ||= J("p", null, " Some Career skills need a specialization before they become concrete WFRP skills. Blank rows can be left unresolved and edited later. ", -1),
			(K(!0), q(W, null, H(e.prompt.rows, (t) => (K(), q("section", {
				key: t.resolutionKey,
				class: "npc-builder__resolution-row"
			}, [
				J("div", null, [J("strong", null, j(e.getSkillResolutionLabel(t)), 1), J("small", null, j(t.careerLabel), 1)]),
				J("label", yd, [r[3] ||= J("span", null, "Specialization", -1), t.options.length > 1 ? V((K(), q("select", {
					key: 0,
					"onUpdate:modelValue": (e) => t.resolvedSpecialization = e
				}, [r[2] ||= J("option", { value: "" }, "Leave unresolved", -1), (K(!0), q(W, null, H(t.options, (e) => (K(), q("option", {
					key: e,
					value: e
				}, j(e), 9, xd))), 128))], 8, bd)), [[Qo, t.resolvedSpecialization]]) : V((K(), q("input", {
					key: 1,
					"onUpdate:modelValue": (e) => t.resolvedSpecialization = e,
					placeholder: t.suggestedSpecializations.length ? "Type or choose below" : t.specialization,
					type: "text"
				}, null, 8, Sd)), [[Yo, t.resolvedSpecialization]])]),
				e.usesFreeformSkillSpecialization(t) ? (K(), q("div", Cd, [t.isLoadingSuggestions ? (K(), q("small", wd, "Finding known choices.")) : X("", !0), (K(!0), q(W, null, H(t.suggestedSpecializations, (e) => (K(), q("button", {
					key: `${t.resolutionKey}:${e}`,
					type: "button",
					onClick: (r) => n("chooseSkillSpecialization", t, e)
				}, j(e), 9, Td))), 128))])) : X("", !0)
			]))), 128)),
			e.prompt.linkedRows.length ? (K(), q("div", Ed, j(e.prompt.linkedRows.length) + " linked skill specialization" + j(e.prompt.linkedRows.length === 1 ? "" : "s") + " will reuse earlier choices from this career chain. ", 1)) : X("", !0),
			J("div", Dd, [J("button", {
				type: "button",
				onClick: r[0] ||= (e) => n("addWithoutResolving")
			}, " Add Without Resolving "), J("button", {
				type: "button",
				onClick: r[1] ||= (e) => n("applySpecializations")
			}, " Apply Specializations ")])
		]));
	}
}), kd = { class: "npc-builder" }, Ad = { class: "npc-builder__header" }, jd = { class: "npc-builder__header-actions" }, Md = {
	"aria-label": "NPC Builder sections",
	class: "npc-builder__tabs"
}, Nd = ["disabled"], Pd = {
	key: 0,
	class: "npc-builder__message npc-builder__message--error"
}, Fd = {
	key: 1,
	class: "npc-builder__message"
}, Id = /* @__PURE__ */ lr({
	__name: "NpcBuilderApp",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = Tc(), { advancements: r, careers: i, finalActorName: a, finalPortraitPath: o, selectedBaseActor: s, selectedBaseActorUuid: c, settings: l, traits: u, trappings: d } = Ws(n), f = /* @__PURE__ */ L("builder"), p = /* @__PURE__ */ L(""), m = /* @__PURE__ */ L(""), h = /* @__PURE__ */ L(!1), g = /* @__PURE__ */ L(!1), _ = /* @__PURE__ */ L(!1), v = /* @__PURE__ */ L(!1), y = /* @__PURE__ */ L(null), b = /* @__PURE__ */ L(null), x = /* @__PURE__ */ L([]), S = Q(() => !!(s.value && i.value.length && !h.value && !g.value)), C = Q(() => {
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
		wr(async () => {
			_.value = !0;
			try {
				let [e, r, i, a] = await Promise.all([
					t.bridge.loadSettings(),
					t.bridge.listActorFolders(),
					t.bridge.listItemFolders(),
					t.bridge.listTraitDifficultyOptions()
				]);
				n.hydrateSettings(e), n.hydrateActorFolders(r), n.hydrateItemFolders(i), x.value = a, await Promise.all([ee(), D()]);
			} catch (e) {
				m.value = ge(e);
			} finally {
				_.value = !1;
			}
		}), Hn(c, async (e) => {
			if (m.value = "", !e) {
				n.clearBaseDraftData();
				return;
			}
			v.value = !0;
			try {
				n.hydrateBaseActorDraftData(await t.bridge.loadBaseActorDraftData(e));
			} catch (e) {
				m.value = ge(e), n.clearBaseDraftData();
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
				m.value = ge(e), p.value = "";
			} finally {
				h.value = !1;
			}
		}
		async function T(e) {
			await re(e, async (e) => {
				await E(await t.bridge.resolveCareerDrop(e));
			});
		}
		async function E(e) {
			if (l.value.lowerCareerMode === "never") {
				te([{
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
				let n = await t.bridge.findLowerCareerCandidates(e), r = n.filter((e) => !de(e.uuid));
				if (!r.length) {
					te([{
						career: e,
						mode: "add-or-increment"
					}], {
						enableLinkedSkillResolution: !1,
						message: ""
					}), p.value = "";
					return;
				}
				if (l.value.lowerCareerMode === "auto-add-all") {
					te([...r.map((e) => ({
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
		async function ee() {
			n.hydrateBaseActors(await t.bridge.listBaseActors(l.value));
		}
		async function D() {
			n.hydrateQuickTraits(await t.bridge.listQuickTraits(l.value));
		}
		function te(e, t) {
			let n = ae(e, t);
			if (n.rows.length) {
				b.value = n, oe(b.value);
				return;
			}
			se(e, t.message);
		}
		function O() {
			let e = y.value;
			if (!e) return;
			let t = e.candidates.filter((t) => e.selectedUuids.includes(t.uuid));
			y.value = null, te([...t.map((e) => ({
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
		function ne() {
			let e = y.value;
			e && (y.value = null, te([{
				career: e.droppedCareer,
				mode: "add-or-increment"
			}], {
				enableLinkedSkillResolution: !1,
				message: ""
			}));
		}
		async function re(e, t) {
			m.value = "";
			try {
				await t(e);
			} catch (e) {
				m.value = ge(e);
			}
		}
		function ie() {
			let e = b.value;
			if (e) {
				for (let t of e.rows) {
					let e = t.resolvedSpecialization.trim() ? qs(t.baseName, t.resolvedSpecialization) : "";
					n.setSkillGrantResolution(t.resolutionKey, e);
				}
				for (let t of e.linkedRows) n.setSkillGrantResolution(t.resolutionKey, n.getSkillGrantResolution(t.linkedFromKey));
				b.value = null, se(e.entries, e.message);
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
		function k() {
			let e = b.value;
			e && (b.value = null, se(e.entries, e.message));
		}
		async function oe(e) {
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
			p.value = t;
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
			return y.value?.selectedUuids.includes(e) ?? !1;
		}
		function pe(e) {
			return e.options.length <= 1 && e.specialization.trim().toLocaleLowerCase() === "any";
		}
		function me(e, t) {
			e.resolvedSpecialization = t;
		}
		function he(e, t) {
			let n = y.value, r = t.target;
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
		return (e, n) => (K(), q("main", kd, [
			J("header", Ad, [n[5] ||= J("div", null, [J("p", null, "WFRP4e Customizer"), J("h1", null, "NPC Builder")], -1), J("div", jd, [J("nav", Md, [
				J("button", {
					class: A({ "is-active": f.value === "builder" }),
					type: "button",
					onClick: n[0] ||= (e) => f.value = "builder"
				}, " Build ", 2),
				J("button", {
					class: A({ "is-active": f.value === "advancements" }),
					type: "button",
					onClick: n[1] ||= (e) => f.value = "advancements"
				}, " Advances ", 2),
				J("button", {
					class: A({ "is-active": f.value === "trappings" }),
					type: "button",
					onClick: n[2] ||= (e) => f.value = "trappings"
				}, " Trappings ", 2),
				J("button", {
					class: A({ "is-active": f.value === "traits" }),
					type: "button",
					onClick: n[3] ||= (e) => f.value = "traits"
				}, " Traits ", 2),
				J("button", {
					class: A({ "is-active": f.value === "settings" }),
					type: "button",
					onClick: n[4] ||= (e) => f.value = "settings"
				}, " Settings ", 2)
			]), J("button", {
				disabled: !S.value,
				type: "button",
				onClick: w
			}, " Build NPC ", 8, Nd)])]),
			Y(kc, {
				open: y.value !== null,
				title: "Add Lower-Tier Careers?",
				onClose: ne
			}, {
				default: Fn(() => [y.value ? (K(), ra(_d, {
					key: 0,
					"candidate-groups": C.value,
					"is-career-queued": de,
					"is-lower-career-selected": fe,
					prompt: y.value,
					onAddDroppedOnly: ne,
					onAddSelected: O,
					onLowerCareerSelected: he
				}, null, 8, ["candidate-groups", "prompt"])) : X("", !0)]),
				_: 1
			}, 8, ["open"]),
			Y(kc, {
				open: b.value !== null,
				title: "Resolve Skill Specializations",
				onClose: k
			}, {
				default: Fn(() => [b.value ? (K(), ra(Od, {
					key: 0,
					"get-skill-resolution-label": ue,
					prompt: b.value,
					"uses-freeform-skill-specialization": pe,
					onAddWithoutResolving: k,
					onApplySpecializations: ie,
					onChooseSkillSpecialization: me
				}, null, 8, ["prompt"])) : X("", !0)]),
				_: 1
			}, 8, ["open"]),
			m.value ? (K(), q("p", Pd, j(m.value), 1)) : p.value ? (K(), q("p", Fd, j(p.value), 1)) : X("", !0),
			f.value === "settings" ? (K(), ra(ku, {
				key: 2,
				bridge: t.bridge
			}, null, 8, ["bridge"])) : f.value === "advancements" ? (K(), ra(Vc, { key: 3 })) : f.value === "trappings" ? (K(), ra(pd, {
				key: 4,
				bridge: t.bridge
			}, null, 8, ["bridge"])) : f.value === "traits" ? (K(), ra(qu, {
				key: 5,
				bridge: t.bridge,
				"difficulty-options": x.value
			}, null, 8, ["bridge", "difficulty-options"])) : (K(), ra(Kl, {
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
}), Ld = ks(), Rd = class extends foundry.applications.api.ApplicationV2 {
	#e;
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("wfrp4e-customizer-vue-root", "root"), n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("wfrp4e-customizer-vue-app", "vue-app"), t.replaceChildren(e);
		let r = this.getVueProps() ?? {};
		this.#e = cs(this.getVueComponent(), r), this.#e.use(Ld), this.#e.mount(e);
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
}, zd = {
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
}, Bd = {
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
function Vd(e) {
	return e in zd;
}
//#endregion
//#region src/shared/object-readers.ts
function Hd(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function Ud(e, t) {
	let n = e;
	for (let e of t) {
		if (!Hd(n) || !(e in n)) return;
		n = n[e];
	}
	return n;
}
function Wd(e, t) {
	let n = Ud(e, t);
	return typeof n == "string" ? n.trim() : "";
}
function Gd(e, t) {
	let n = Ud(e, t);
	return Array.isArray(n) ? n.filter((e) => typeof e == "string") : [];
}
function Kd(e, t, n = 0) {
	for (let n of t) {
		let t = Number(Ud(e, n));
		if (Number.isFinite(t)) return t;
	}
	return n;
}
function qd(e, t, n = !1) {
	for (let n of t) {
		let t = Ud(e, n);
		if (typeof t == "boolean") return t;
	}
	return n;
}
function Jd(e) {
	return Array.isArray(e) ? e.flatMap(Jd) : typeof e == "string" ? e.split(/[,;\n\r]/).map((e) => e.trim()).filter(Boolean) : Hd(e) ? Object.values(e).flatMap(Jd) : [];
}
function Yd(e, t, n) {
	let r = e;
	for (let e of t.slice(0, -1)) {
		let t = r[e];
		Hd(t) || (r[e] = {}), r = r[e];
	}
	r[t[t.length - 1] ?? ""] = n;
}
//#endregion
//#region src/functions/npc-builder/extract-career-grants.ts
var Xd = {
	characteristics: [],
	skills: [],
	talents: [],
	trappings: []
};
function Zd(e) {
	return {
		characteristics: Qd(e),
		skills: $d(e),
		talents: tf(e, [["talents", "value"], ["talents"]]),
		trappings: tf(e, [["trappings", "value"], ["trappings"]])
	};
}
function Qd(e) {
	let t = tf(e, [["characteristics", "value"], ["characteristics"]]);
	if (t.length) return t.map(ef);
	let n = Ud(e, ["characteristics"]);
	if (!Hd(n)) return [];
	let r = [];
	for (let [e, t] of Object.entries(n)) t && r.push(ef(e));
	return rf(r);
}
function $d(e) {
	return tf(e, [["skills", "value"], ["skills"]], { preserveDuplicates: !0 });
}
function ef(e) {
	let t = e.trim().toLocaleLowerCase();
	if (Vd(t)) return zd[t];
	let n = Bd[t];
	return n ? zd[n] : e.trim();
}
function tf(e, t, n = {}) {
	for (let r of t) {
		let t = Jd(Ud(e, r));
		if (t.length) return n.preserveDuplicates ? nf(t) : rf(t);
	}
	return [];
}
function nf(e) {
	return e.map((e) => e.trim()).filter(Boolean);
}
function rf(e) {
	return [...new Set(nf(e))].sort((e, t) => e.localeCompare(t));
}
Object.freeze(Xd);
//#endregion
//#region src/functions/npc-builder/recommended-quick-traits.ts
var af = [
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
function of(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Actor";
}
function sf(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Item";
}
function cf(e, t = "Expected a Foundry Actor.") {
	if (!of(e)) throw Error(t);
	return e;
}
function lf(e, t = "Expected a Foundry Item.") {
	if (!sf(e)) throw Error(t);
	return e;
}
function uf(e, t, n = `Expected a Foundry ${t} Item.`) {
	let r = lf(e, n);
	if (r.type !== t) throw Error(n);
	return r;
}
//#endregion
//#region src/module/foundry/item-sources.ts
function df(e, t) {
	return {
		img: "systems/wfrp4e/icons/blank.png",
		name: e,
		system: {},
		type: t
	};
}
function ff(e, t, n) {
	let r = e ? e.toObject() : df(t, n);
	return delete r._id, r;
}
function pf(e, t, n) {
	return e.items?.contents.find((e) => e.type === n && gf(e.name, t)) ?? null;
}
function mf(e, t, n) {
	return e.items?.contents.find((e) => t && e.uuid === t ? !0 : gf(e.name, n)) ?? null;
}
function hf(e, t) {
	return game.items?.contents.find((n) => t.includes(n.type) && gf(n.name, e)) ?? null;
}
function gf(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/wfrp4e/item-lookup.ts
async function _f(e, t) {
	return await game.wfrp4e?.utility?.findItem?.(e, t) || hf(e, t);
}
//#endregion
//#region src/module/wfrp4e/career-index.ts
var vf = /* @__PURE__ */ new Map(), yf = "idle", bf = null;
function xf() {
	return bf || (yf = "indexing", vf.clear(), bf = Cf().then(() => {
		yf = "ready";
	}).catch((e) => {
		yf = "error", e instanceof Error && e.message, console.warn("wfrp4e-customizer-apps | Career indexing failed.", e);
	}), bf);
}
async function Sf(e) {
	return yf === "idle" && xf(), !e.careerGroup || e.level === null ? [] : [...vf.values()].filter((t) => Of(t, e)).sort(Af);
}
async function Cf() {
	Ef(), await Mf();
	for (let e of game.packs ?? []) {
		if (!Df(e) || !e.getDocuments) continue;
		let t = await e.getDocuments();
		for (let e of t) sf(e) && e.type === "career" && vf.set(e.uuid, jf(e));
		await Mf();
	}
}
function wf(e) {
	return Wd(e.system, ["careergroup", "value"]);
}
function Tf(e) {
	let t = Ud(e.system, ["level", "value"]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
function Ef() {
	for (let e of game.items?.contents ?? []) e.type === "career" && vf.set(e.uuid, jf(e));
}
function Df(e) {
	return e.documentName === "Item";
}
function Of(e, t) {
	return e.uuid !== t.uuid && e.level !== null && t.level !== null && e.level < t.level && kf(e.careerGroup) === kf(t.careerGroup);
}
function kf(e) {
	return e.trim().toLocaleLowerCase();
}
function Af(e, t) {
	let n = e.level ?? 0, r = t.level ?? 0;
	return n === r ? e.name.localeCompare(t.name) : n - r;
}
function jf(e) {
	return {
		careerGroup: wf(e),
		grants: Zd(e.system),
		img: e.img ?? "",
		level: Tf(e),
		name: e.name,
		uuid: e.uuid
	};
}
function Mf() {
	return new Promise((e) => {
		globalThis.setTimeout(e, 0);
	});
}
//#endregion
//#region src/module/wfrp4e/skill-specializations.ts
var Nf = /* @__PURE__ */ new Map(), Pf = "idle", Ff = null;
async function If(e) {
	let t = Zs(e);
	return t ? (Pf === "idle" && Lf(), Ff && await Ff, [...Nf.get(t) ?? []].sort((e, t) => e.localeCompare(t))) : [];
}
function Lf() {
	return Ff || (Pf = "indexing", Nf.clear(), Ff = Rf().then(() => {
		Pf = "ready";
	}).catch((e) => {
		Pf = "error", e instanceof Error && e.message, console.warn("wfrp4e-customizer-apps | Skill specialization indexing failed.", e);
	}), Ff);
}
async function Rf() {
	Bf(), await Hf();
	for (let e of game.packs ?? []) {
		if (!Vf(e) || !e.getDocuments) continue;
		let t = await e.getDocuments();
		for (let e of t) sf(e) && zf(e);
		await Hf();
	}
}
function zf(e) {
	if (e.type !== "skill") return;
	let t = Js(e.name);
	if (!t) return;
	let n = Zs(t.baseName), r = Nf.get(n) ?? /* @__PURE__ */ new Set();
	r.add(t.specialization), Nf.set(n, r);
}
function Bf() {
	for (let e of game.items?.contents ?? []) zf(e);
}
function Vf(e) {
	return e.documentName === "Item";
}
function Hf() {
	return new Promise((e) => {
		globalThis.setTimeout(e, 0);
	});
}
//#endregion
//#region src/module/settings/foundry-setting-adapter.ts
function Uf(e) {
	return e;
}
function Wf(t) {
	game.settings.register(e, t.key, {
		config: t.config ?? !1,
		default: t.defaultValue,
		name: t.name,
		scope: t.scope ?? "world",
		type: Object
	});
}
function Gf(t) {
	return t.normalize(game.settings.get(e, t.key));
}
async function Kf(t, n) {
	let r = t.normalize(n);
	return await game.settings.set(e, t.key, r), r;
}
//#endregion
//#region src/module/apps/npc-builder/settings.ts
var qf = "npcBuilderSettings", Jf = {
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
	quickTraitFolderUuid: "",
	searchFoundryPortraitAssets: !0,
	searchWebPortraitAssets: !1
}, Yf = Uf({
	defaultValue: Jf,
	key: qf,
	name: "NPC Builder Settings",
	normalize: $f
});
function Xf() {
	Wf(Yf);
}
function Zf() {
	return Gf(Yf);
}
async function Qf(e) {
	return Kf(Yf, e);
}
function $f(e) {
	if (typeof e != "object" || !e) return { ...Jf };
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
		lowerCareerMode: ep(t.lowerCareerMode) ? t.lowerCareerMode : "prompt",
		outputActorFolderUuid: typeof t.outputActorFolderUuid == "string" ? t.outputActorFolderUuid : "",
		quickTraitFolderUuid: typeof t.quickTraitFolderUuid == "string" ? t.quickTraitFolderUuid : "",
		searchFoundryPortraitAssets: t.searchFoundryPortraitAssets ?? !0,
		searchWebPortraitAssets: t.searchWebPortraitAssets ?? !1
	};
}
function ep(e) {
	return e === "auto-add-all" || e === "never" || e === "prompt";
}
//#endregion
//#region src/module/apps/npc-builder/bridge.ts
var tp = [
	"ammunition",
	"armour",
	"container",
	"money",
	"trapping",
	"weapon"
], np = [
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
], rp = [
	"webp",
	"png",
	"jpg",
	"jpeg",
	"gif"
], ip = 700, ap = 60, op = 36;
async function sp(e) {
	let t = await cp(e);
	if (!t) throw Error("Foundry did not create the NPC Actor.");
	let n = Cp(e), r = e.careers.at(-1), i = {
		name: n,
		"prototypeToken.name": n
	}, a = e.portraitPath || r?.img || "";
	return a && (i.img = a, i["prototypeToken.texture.src"] = a), await t.update(i), await dp(t, e.advancements), await mp(t, e.traits), await pp(t, e.trappings), t.sheet?.render(!0), ui.notifications?.info(`Created NPC "${n}".`), {
		name: n,
		uuid: t.uuid
	};
}
async function cp(e) {
	let t = cf(await fromUuid(e.baseActorUuid)).toObject(), n = Dp(e.settings.outputActorFolderUuid);
	return delete t._id, delete t.folder, t.type = "npc", lp(t), n && (t.folder = n.id), Actor.create(t);
}
function lp(e) {
	Array.isArray(e.items) && (e.items = e.items.filter((e) => {
		if (typeof e != "object" || !e) return !0;
		let t = e;
		return t.type !== "trait" || !up(t);
	}));
}
function up(e) {
	return qd(e.system, [["disabled"], ["disabled", "value"]]);
}
async function dp(e, t) {
	let n = {}, r = [], i = [];
	for (let a of t) {
		let t = Math.max(0, Math.floor(a.current));
		if (t <= 0) continue;
		let o = a.baseValue + t;
		if (a.kind === "characteristic") {
			fp(n, a, o);
			continue;
		}
		let s = yp(e, a.name, a.kind);
		if (s) {
			r.push({
				_id: s.id,
				"system.advances.value": o
			});
			continue;
		}
		let c = ff(await _f(a.name, [a.kind]), a.name, a.kind);
		c.type = a.kind, Yd(c, [
			"system",
			"advances",
			"value"
		], o), i.push(c);
	}
	Object.keys(n).length && await e.update(n), r.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", r), i.length && await e.createEmbeddedDocuments("Item", i);
}
function fp(e, t, n) {
	let r = Bd[t.name.trim().toLocaleLowerCase()];
	r && (e[`system.characteristics.${r}.advances`] = n);
}
async function pp(e, t) {
	let n = [], r = [], i = [];
	for (let a of t) {
		let t = a.source === "base" ? mf(e, a.sourceUuid, a.name) : null;
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
		let o = await _p(a), s = a.resolution.selectedItemType || a.itemType || "trapping", c = ff(o, a.resolution.selectedName || a.name, s);
		c.type = s || c.type || "trapping", Yd(c, [
			"system",
			"quantity",
			"value"
		], a.quantity), r.push(c);
	}
	i.length && e.deleteEmbeddedDocuments && await e.deleteEmbeddedDocuments("Item", i), n.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", n), r.length && await e.createEmbeddedDocuments("Item", r);
}
async function mp(e, t) {
	let n = [], r = [], i = [];
	for (let a of t) {
		let t = a.source === "base" ? mf(e, a.sourceUuid, a.name) : yp(e, a.name, "trait");
		if (a.ignored) {
			t && i.push(t.id);
			continue;
		}
		if (t) {
			n.push(gp(t.id, a.config));
			continue;
		}
		let o = ff(a.sourceUuid ? await vp(a.sourceUuid) : await _f(a.name, ["trait"]), a.name, "trait");
		o.type = "trait", Yd(o, ["system", "disabled"], !1), hp(o, a.config), r.push(o);
	}
	i.length && e.deleteEmbeddedDocuments && await e.deleteEmbeddedDocuments("Item", i), n.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", n), r.length && await e.createEmbeddedDocuments("Item", r);
}
function hp(e, t) {
	Yd(e, [
		"system",
		"specification",
		"value"
	], t.specification), t.rollable && !t.damage && Yd(e, [
		"system",
		"rollable",
		"defaultDifficulty"
	], t.defaultDifficulty), t.damage && t.dice && Yd(e, [
		"system",
		"rollable",
		"dice"
	], t.dice);
}
function gp(e, t) {
	return {
		_id: e,
		"system.specification.value": t.specification,
		...t.rollable && !t.damage ? { "system.rollable.defaultDifficulty": t.defaultDifficulty } : {},
		...t.damage && t.dice ? { "system.rollable.dice": t.dice } : {}
	};
}
async function _p(e) {
	if (e.sourceUuid) {
		let t = await fromUuid(e.sourceUuid);
		return sf(t) ? t : null;
	}
	if (e.resolution.selectedCandidateUuid) {
		let t = await fromUuid(e.resolution.selectedCandidateUuid);
		return sf(t) ? t : null;
	}
	return e.resolution.status === "fallback" ? null : _f(e.resolution.selectedName || e.name, kp());
}
async function vp(e) {
	let t = await fromUuid(e);
	return sf(t) ? t : null;
}
function yp(e, t, n) {
	return pf(e, t, n === "characteristic" ? "" : n);
}
async function bp(e) {
	return bm(await Sp(e, "Actor"));
}
async function xp(e) {
	return bm(await Sp(e, "Item"));
}
async function Sp(e, t) {
	let n = e.trim();
	if (!n) throw Error("Enter a folder name first.");
	let r = game.folders.contents.find((e) => e.type === t && Wp(e.name, n));
	if (r) return r;
	let i = await Folder.create({
		name: n,
		type: t
	});
	if (!i) throw Error("Foundry did not create the folder.");
	return i;
}
function Cp(e) {
	if (!e.settings.includeSpeciesInName) return e.actorName;
	let t = game.actors.contents.find((t) => t.uuid === e.baseActorUuid), n = t ? wp(t) : "";
	return !n || e.actorName.toLocaleLowerCase().includes(n.toLocaleLowerCase()) ? e.actorName : `${n} ${e.actorName}`;
}
function wp(e) {
	return Wd(e.system, [
		"details",
		"species",
		"value"
	]) || Wd(e.system, ["details", "species"]) || Wd(e.system, [
		"details",
		"race",
		"value"
	]) || Wd(e.system, [
		"details",
		"ancestry",
		"value"
	]);
}
function Tp(e) {
	return Wd(e.system, ["careergroup", "value"]);
}
function Ep(e) {
	let t = Ud(e.system, ["level", "value"]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
function Dp(e) {
	return e ? game.folders.contents.find((t) => t.uuid === e) ?? null : null;
}
function Op(e) {
	let t = Dp(e);
	return t?.type === "Item" ? t : null;
}
function kp() {
	let e = Gd(game.wfrp4e?.config, ["trappingItems"]);
	return e.length ? e : tp;
}
async function Ap() {
	let e = Ud(game.wfrp4e?.config, ["difficultyLabels"]);
	if (!Hd(e)) return np;
	let t = Object.entries(e).filter((e) => {
		let [t, n] = e;
		return !!t.trim() && typeof n == "string";
	}).map(([e, t]) => ({
		label: t,
		value: e
	}));
	return t.length ? t : np;
}
async function jp(e) {
	let t = Gc(e);
	if (!t.length) return [];
	let n = [], r = /* @__PURE__ */ new Set(), i = 0;
	Mp(n, r, t), await Np(n, r, t);
	for (let e of await Fp()) {
		let a = [e.target], o = 0;
		for (; a.length && i < ip && o < ap && n.length < op;) {
			let s = a.shift() ?? "", c = await zp(e.source, s, e.bucket);
			i += 1, o += 1;
			for (let i of c.files ?? []) if (Kc(i, t) && (Bp(n, r, {
				img: i,
				key: `foundry-asset:${i}`,
				label: Vp(i, Hp(e)),
				source: "foundry-asset"
			}), n.length >= op)) break;
			for (let e of c.dirs ?? []) a.push(e);
		}
	}
	return n;
}
function Mp(e, t, n) {
	for (let r of game.actors.contents) {
		if (e.length >= op) return;
		Pp(e, t, n, {
			imagePaths: [{
				label: "actor image",
				path: r.img ?? ""
			}, {
				label: "token image",
				path: _m(r)
			}],
			name: r.name,
			sourceLabel: "World Actors",
			sourceKey: r.uuid
		});
	}
	for (let r of game.items?.contents ?? []) {
		if (e.length >= op) return;
		Pp(e, t, n, {
			imagePaths: [{
				label: "item image",
				path: r.img ?? ""
			}],
			name: r.name,
			sourceLabel: "World Items",
			sourceKey: r.uuid
		});
	}
}
async function Np(e, t, n) {
	for (let r of game.packs ?? []) {
		if (e.length >= op) return;
		if (r.documentName !== "Actor" && r.documentName !== "Item") continue;
		let i = await r.getIndex?.({ fields: [
			"name",
			"img",
			"thumb",
			"prototypeToken.texture.src"
		] }).catch(() => void 0);
		for (let a of i?.contents ?? []) {
			let i = a.name ?? "";
			Pp(e, t, n, {
				imagePaths: [
					{
						label: `${r.documentName.toLocaleLowerCase()} image`,
						path: a.img ?? ""
					},
					{
						label: "thumbnail",
						path: a.thumb ?? ""
					},
					{
						label: "token image",
						path: Wd(a, [
							"prototypeToken",
							"texture",
							"src"
						])
					}
				],
				name: i,
				sourceLabel: r.title ?? "Compendium",
				sourceKey: `${r.collection ?? r.title ?? "pack"}:${a._id ?? i}`
			});
		}
	}
}
function Pp(e, t, n, r) {
	let i = r.imagePaths.filter(({ path: e }) => !!e);
	if (!(!qc(r.name, n) && !i.some(({ path: e }) => qc(e, n)))) {
		for (let n of i) if (Bp(e, t, {
			img: n.path,
			key: `foundry-asset:${r.sourceKey}:${n.label}`,
			label: `${r.name || Up(n.path)} ${n.label} (${r.sourceLabel})`,
			source: "foundry-asset"
		}), e.length >= op) return;
	}
}
async function Fp() {
	let e = [], t = game.system.id, n = Array.from(game.modules.entries()).sort(([e, t], [n, r]) => {
		let i = qd(t, [["active"]]);
		return i === qd(r, [["active"]]) ? e.localeCompare(n) : i ? -1 : 1;
	}).map(([e]) => e);
	for (let t of Lp()) Ip(e, t);
	Ip(e, "data", `systems/${t}`), Ip(e, "data", `systems/${t}/tokens`), Ip(e, "data", `systems/${t}/icons`);
	for (let t of await Rp("systems")) Ip(e, "data", t);
	for (let t of n) Ip(e, "data", `modules/${t}`);
	for (let t of await Rp("modules")) Ip(e, "data", t);
	return Ip(e, "data", "tokens"), Ip(e, "data", "assets"), Ip(e, "data", "worlds"), e;
}
function Ip(e, t, n) {
	let r = typeof t == "string" ? {
		source: t,
		target: n ?? ""
	} : t;
	e.some((e) => e.bucket === r.bucket && e.source === r.source && e.target === r.target) || e.push(r);
}
function Lp() {
	let e = new foundry.applications.apps.FilePicker.implementation({ type: "image" }).sources;
	if (!Hd(e)) return [];
	let t = [];
	for (let [n, r] of Object.entries(e)) {
		if (r == null) {
			t.push({
				source: n,
				target: ""
			});
			continue;
		}
		if (!Hd(r)) continue;
		let e = Wd(r, ["target"]), i = Gd(r, ["buckets"]);
		if (i.length) {
			for (let r of i) t.push({
				bucket: r,
				source: n,
				target: e
			});
			continue;
		}
		let a = Wd(r, ["bucket"]);
		t.push(a ? {
			bucket: a,
			source: n,
			target: e
		} : {
			source: n,
			target: e
		});
	}
	return t;
}
async function Rp(e) {
	return (await zp("data", e)).dirs ?? [];
}
async function zp(e, t, n) {
	try {
		let r = {
			extensions: rp,
			wildcard: !1
		};
		return n && (r.bucket = n), await foundry.applications.apps.FilePicker.implementation.browse(e, t, r);
	} catch {
		return {};
	}
}
function Bp(e, t, n) {
	let r = n.img.trim().toLocaleLowerCase();
	!r || t.has(r) || (t.add(r), e.push(n));
}
function Vp(e, t) {
	return `${Up(e)} (${t})`;
}
function Hp(e) {
	return e.bucket ? `${e.source}: ${e.bucket}` : e.source;
}
function Up(e) {
	return e.split(/[\\/]/).at(-1) ?? e;
}
function Wp(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
async function Gp(e) {
	return rc(e, await Kp());
}
async function Kp() {
	let e = [], t = kp();
	for (let n of game.items?.contents ?? []) t.includes(n.type) && e.push(Sm(n, "World"));
	for (let n of game.packs ?? []) {
		if (!Yp(n)) continue;
		let r = await qp(n, t);
		if (r.length) {
			e.push(...r);
			continue;
		}
		if (!n.getDocuments) continue;
		let i = await n.getDocuments();
		for (let r of i) sf(r) && t.includes(r.type) && e.push(Sm(r, n.title ?? "Compendium"));
	}
	return e;
}
async function qp(e, t) {
	return e.getIndex ? ((await e.getIndex({ fields: ["name", "type"] })).contents ?? []).filter((n) => !!(n.name && n.type && Jp(e, n) && t.includes(n.type))).map((t) => ({
		itemType: t.type ?? "trapping",
		name: t.name ?? "",
		sourceLabel: e.title ?? "Compendium",
		uuid: Jp(e, t)
	})) : [];
}
function Jp(e, t) {
	return t.uuid ? t.uuid : t._id && e.getUuid ? e.getUuid(t._id) : "";
}
function Yp(e) {
	return e.documentName === "Item";
}
async function Xp(e) {
	let t = Op(e.quickTraitFolderUuid);
	if (!t) throw Error("Choose a Quick Traits item folder before importing traits.");
	let n = new Set($p(e).map((e) => e.name.trim().toLocaleLowerCase()));
	for (let e of af) {
		if (n.has(e.trim().toLocaleLowerCase())) continue;
		let r = ff(await _f(e, ["trait"]), e, "trait");
		r.folder = t.id, r.type = "trait", await Item.create(r);
	}
	return ui.notifications?.info("Imported recommended quick traits."), em(e);
}
function Zp(e, t) {
	return t.baseActorFolderUuid ? e.folder?.uuid === t.baseActorFolderUuid : !0;
}
function Qp(e, t) {
	return t.quickTraitFolderUuid ? e.folder?.uuid === t.quickTraitFolderUuid : !1;
}
function $p(e) {
	return game.items?.contents.filter((t) => t.type === "trait" && Qp(t, e)) ?? [];
}
async function em(e) {
	return $p(e).map(xm).sort((e, t) => e.name.localeCompare(t.name));
}
async function tm(e) {
	let t = cf(await fromUuid(e));
	return {
		advancements: [
			...sm(t),
			...cm(t, "skill"),
			...cm(t, "talent")
		],
		optionalTraits: am(t),
		traits: im(t),
		trappings: rm(t)
	};
}
function nm(e) {
	try {
		return JSON.parse(e);
	} catch {
		throw Error("Foundry drop data could not be read.");
	}
}
function rm(e) {
	let t = kp();
	return e.items?.contents.filter((e) => t.includes(e.type)).map((e) => ({
		itemType: e.type,
		name: e.name,
		quantity: lm(e),
		uuid: e.uuid
	})) ?? [];
}
function im(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && !om(e)).map(vm) ?? [];
}
function am(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && om(e)).map(vm) ?? [];
}
function om(e) {
	return qd(e.system, [["disabled"], ["disabled", "value"]]);
}
function sm(e) {
	let t = [];
	for (let [n, r] of Object.entries(zd)) {
		let i = Kd(e.system, [[
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
function cm(e, t) {
	return e.items?.contents.filter((e) => e.type === t).map((e) => ({
		current: Kd(e.system, [["advances", "value"], ["advances"]]),
		kind: t,
		name: e.name
	})) ?? [];
}
function lm(e) {
	return Kd(e.system, [["quantity", "value"], ["quantity"]]) || 1;
}
function um(e) {
	return {
		...Gs(),
		attackType: dm(e.system, ["rollable", "attackType"]) || "melee",
		bonusCharacteristic: dm(e.system, ["rollable", "bonusCharacteristic"]),
		damage: qd(e.system, [["rollable", "damage"]]),
		defaultDifficulty: dm(e.system, ["rollable", "defaultDifficulty"]) || "challenging",
		dice: dm(e.system, ["rollable", "dice"]),
		rollable: qd(e.system, [["rollable", "value"]]),
		skill: dm(e.system, ["rollable", "skill"]),
		sl: qd(e.system, [["rollable", "SL"]], !0),
		specification: dm(e.system, ["specification", "value"])
	};
}
function dm(e, t) {
	let n = Ud(e, t);
	return typeof n == "string" ? n.trim() : typeof n == "number" ? String(n) : "";
}
async function fm(e) {
	let t = nm(e);
	if (t.type !== "Actor") throw Error("Drop a Foundry Actor here.");
	let n = null;
	return t.uuid ? n = await fromUuid(t.uuid) : t.id && (n = game.actors.get(t.id)), gm(cf(n));
}
async function pm(e) {
	let t = nm(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a WFRP Career item here.");
	return ym(uf(await fromUuid(t.uuid), "career", "Drop a WFRP Career item here."));
}
async function mm(e) {
	let t = nm(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Item here.");
	let n = lf(await fromUuid(t.uuid), "Drop a Foundry Item here.");
	return {
		ignored: !1,
		itemType: n.type,
		key: `custom:${n.uuid}`,
		name: n.name,
		quantity: lm(n),
		resolution: tc({
			itemType: n.type,
			name: n.name,
			uuid: n.uuid
		}),
		source: "custom",
		sourceUuid: n.uuid
	};
}
async function hm(e) {
	let t = nm(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Trait item here.");
	let n = uf(await fromUuid(t.uuid), "trait", "Drop a Foundry Trait item here.");
	return {
		config: um(n),
		ignored: !1,
		key: `custom:${n.uuid}`,
		name: n.name,
		source: "custom",
		sourceUuid: n.uuid
	};
}
function gm(e) {
	return {
		img: e.img ?? "",
		name: e.name,
		prototypeTokenImg: _m(e),
		species: wp(e),
		type: e.type,
		uuid: e.uuid
	};
}
function _m(e) {
	return Wd(e, [
		"prototypeToken",
		"texture",
		"src"
	]) || Wd(e.toObject(), [
		"prototypeToken",
		"texture",
		"src"
	]);
}
function vm(e) {
	return {
		config: um(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
function ym(e) {
	return {
		careerGroup: Tp(e),
		grants: Zd(e.system),
		img: e.img ?? "",
		level: Ep(e),
		name: e.name,
		uuid: e.uuid
	};
}
function bm(e) {
	return {
		name: e.name,
		uuid: e.uuid
	};
}
function xm(e) {
	return {
		config: um(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
function Sm(e, t) {
	return {
		itemType: e.type,
		name: e.name,
		sourceLabel: t,
		uuid: e.uuid
	};
}
var Cm = {
	buildNpc: sp,
	ensureActorFolder: bp,
	ensureItemFolder: xp,
	findLowerCareerCandidates: Sf,
	importRecommendedQuickTraits: Xp,
	listFoundryPortraitCandidates: jp,
	listSkillSpecializations: If,
	listActorFolders: async () => game.folders.contents.filter((e) => e.type === "Actor").map(bm).sort((e, t) => e.name.localeCompare(t.name)),
	listItemFolders: async () => game.folders.contents.filter((e) => e.type === "Item").map(bm).sort((e, t) => e.name.localeCompare(t.name)),
	listBaseActors: async (e) => game.actors.contents.filter((t) => Zp(t, e)).map(gm),
	listQuickTraits: em,
	listTraitDifficultyOptions: Ap,
	loadBaseActorDraftData: tm,
	loadSettings: async () => Zf(),
	resolveActorDrop: fm,
	resolveCareerDrop: pm,
	resolveTrapping: Gp,
	resolveTraitDrop: hm,
	resolveTrappingDrop: mm,
	saveSettings: Qf
}, wm = class extends Rd {
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
		return Id;
	}
	getVueProps() {
		return { bridge: Cm };
	}
}, Tm = { class: "customizer-workbench" }, Em = {
	"aria-label": "Customizer targets",
	class: "customizer-workbench__body"
}, Dm = { class: "customizer-workbench__targets" }, Om = /* @__PURE__ */ lr({
	__name: "WorkbenchApp",
	setup(e) {
		let t = [
			"Actor sheets",
			"Item sheets",
			"Reusable dialogs"
		];
		return (e, n) => (K(), q("main", Tm, [n[1] ||= J("header", { class: "customizer-workbench__header" }, [J("p", null, "WFRP4e"), J("h1", null, "Customizer Workbench")], -1), J("section", Em, [J("div", Dm, [(K(), q(W, null, H(t, (e) => J("button", {
			key: e,
			disabled: "",
			type: "button"
		}, j(e), 1)), 64))]), n[0] ||= J("div", { class: "customizer-workbench__empty" }, [J("strong", null, "Vue application shell mounted."), J("span", null, "The first customizer surface can land here.")], -1)])]));
	}
}), km = class extends Rd {
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
		return Om;
	}
}, Am = `${e}.debugShapeProbes`, jm = "wfrp4eCustomizerShapeProbes", Mm = "wfrp4eCustomizerShapePreset", Nm = 2, Pm = 12, Fm = 6, Im = 60, Lm = { "npc-builder": [
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
function Rm() {
	localStorage.removeItem(Am), console.info(`${e} | Cleared debug shape probes.`);
}
function zm() {
	return ih();
}
function Bm(e, t = {}) {
	let n = Vm(e, t);
	return Ym(n), n;
}
function Vm(e, t = {}, n) {
	let r = Gm(t.maxDepth, Nm, Fm), i = Gm(t.maxEntries, Pm, Im), a = uh(e), o = {
		inspectedAt: (/* @__PURE__ */ new Date()).toISOString(),
		label: t.label || e,
		maxDepth: r,
		maxEntries: i,
		path: e,
		value: gh(a, {
			maxDepth: r,
			maxEntries: i,
			seen: /* @__PURE__ */ new WeakSet()
		})
	};
	return n && (o.hook = n), o;
}
function Hm() {
	let t = ih();
	for (let e of ["init", "setup"]) {
		let n = t.filter((t) => t.hook === e);
		n.length && Hooks.once(e, () => {
			for (let t of n) qm(t, e);
		});
	}
	Hooks.once("ready", () => {
		let t = ih().filter((e) => (e.hook ?? "ready") === "ready");
		sh() && console.info(`${e} | Debug shape ready probes discovered: ${t.length}`, window.location.href);
		for (let e of t) qm(e, "ready");
	});
}
function Um(t) {
	let n = t.map(Zm);
	localStorage.setItem(Am, JSON.stringify(n)), console.info(`${e} | Stored ${n.length} debug shape probe(s). Reload Foundry to run init/setup probes.`);
}
function Wm(e, t, n) {
	if (t === "at") {
		let t = Number(n[0] ?? 0), r = Number.isFinite(t) ? t : 0;
		return vh(e).at(r);
	}
	if (t === "findByName") {
		let t = Xm(n[0] ?? "");
		return vh(e).find((e) => Xm(nh(e, "name")) === t);
	}
	if (t === "findByType") {
		let t = Xm(n[0] ?? "");
		return vh(e).find((e) => Xm(nh(e, "type")) === t);
	}
	if (t === "get") {
		let t = n[0] ?? "";
		if (e instanceof Map) return e.get(t);
		let r = nh(e, "get");
		if (typeof r == "function") return r.call(e, t);
	}
	if (t === "sample") {
		let t = Gm(n[0], 3, Im);
		return vh(e).slice(0, t);
	}
	throw Error(`Unsupported path method "${t}".`);
}
function Gm(e, t, n) {
	let r = Number(e);
	return Number.isFinite(r) ? Math.max(0, Math.min(n, Math.floor(r))) : t;
}
function Km(e, t) {
	return Object.keys(e).sort().slice(0, t);
}
function qm(t, n) {
	try {
		Ym(Vm(t.path, t, n));
	} catch (n) {
		console.warn(`${e} | Debug shape probe failed for "${t.path}".`, n);
	}
}
function Jm(e) {
	return typeof e == "object" && !!e;
}
function Ym(t) {
	console.info(`${e} | Debug shape probe: ${t.label}`, JSON.stringify(t, null, 2));
}
function Xm(e) {
	return typeof e == "string" ? e.trim().toLocaleLowerCase() : "";
}
function Zm(e) {
	let t = {
		hook: e.hook ?? "ready",
		maxDepth: Gm(e.maxDepth, Nm, Fm),
		maxEntries: Gm(e.maxEntries, Pm, Im),
		path: e.path.trim()
	};
	return e.label && (t.label = e.label), t;
}
function Qm(e) {
	return e.trim() ? e.split(",").map((e) => eh(e.trim())).map(String) : [];
}
function $m(e) {
	let t = e.trim();
	return /^-?\d+$/.test(t) ? Number(t) : eh(t);
}
function eh(e) {
	let t = e.match(/^['"](?<value>.*)['"]$/);
	return t?.groups ? t.groups.value ?? "" : e;
}
function th(e) {
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
				args: Qm(e.groups.args ?? ""),
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
				index: $m(e),
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
function nh(e, t) {
	if (!(!Jm(e) && typeof e != "function")) try {
		return e[t];
	} catch {
		return;
	}
}
function rh() {
	let e = lh(Am);
	if (!e) return [];
	try {
		let t = JSON.parse(e);
		return Array.isArray(t) ? t.filter((e) => typeof e == "object" && !!e && typeof e.path == "string").map(Zm) : [];
	} catch {
		return [];
	}
}
function ih() {
	return [...rh(), ...ah()].map(Zm);
}
function ah() {
	let e = [], t = [new URLSearchParams(window.location.search), new URLSearchParams(window.location.hash.replace(/^#/, ""))];
	for (let n of t) {
		let t = n.get(Mm), r = n.get(jm);
		t && e.push(...Lm[t] ?? []), r && e.push(...oh(r));
	}
	return window.location.href.includes(`${Mm}=npc-builder`) && !e.length && e.push(...Lm["npc-builder"] ?? []), e;
}
function oh(t) {
	try {
		let e = JSON.parse(decodeURIComponent(t));
		return Array.isArray(e) ? e.filter(ch) : [];
	} catch (t) {
		return console.warn(`${e} | Could not parse URL shape probes.`, t), [];
	}
}
function sh() {
	return window.location.href.includes(jm) || window.location.href.includes(Mm);
}
function ch(e) {
	return typeof e == "object" && !!e && typeof e.path == "string";
}
function lh(e) {
	try {
		return localStorage.getItem(e);
	} catch {
		return null;
	}
}
function uh(e) {
	let t = th(e), n = nh(globalThis, t.root);
	for (let e of t.tokens) {
		if (e.type === "property") {
			n = nh(n, e.key);
			continue;
		}
		if (e.type === "index") {
			n = nh(n, String(e.index));
			continue;
		}
		n = Wm(n, e.name, e.args);
	}
	return n;
}
function dh(e, t) {
	return {
		length: e.length,
		sample: e.slice(0, t.maxEntries).map((e) => gh(e, _h(t))),
		type: "array"
	};
}
function fh(e, t) {
	return {
		sample: [...e.entries()].slice(0, t.maxEntries).map(([e, n]) => ({
			key: gh(e, _h(t)),
			value: gh(n, _h(t))
		})),
		size: e.size,
		type: "Map"
	};
}
function ph(e) {
	return {
		name: e.name,
		type: "function"
	};
}
function mh(e, t) {
	if (t.seen.has(e)) return { type: "circular" };
	t.seen.add(e);
	let n = Km(e, t.maxEntries), r = {
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
		let n = nh(e, t);
		typeof n == "string" && (r[t] = n);
	}
	if (t.maxDepth <= 0) return r;
	let i = {};
	for (let r of n) i[r] = gh(nh(e, r), _h(t));
	r.properties = i;
	let a = nh(e, "toObject");
	if (typeof a == "function") try {
		r.source = gh(a.call(e), _h(t));
	} catch (e) {
		r.source = {
			error: e instanceof Error ? e.message : String(e),
			type: "error"
		};
	}
	return r;
}
function hh(e) {
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
function gh(e, t) {
	return !Jm(e) && typeof e != "function" ? hh(e) : typeof e == "function" ? ph(e) : Array.isArray(e) ? dh(e, t) : e instanceof Map ? fh(e, t) : mh(e, t);
}
function _h(e) {
	return {
		maxDepth: e.maxDepth - 1,
		maxEntries: e.maxEntries,
		seen: e.seen
	};
}
function vh(e) {
	if (Array.isArray(e)) return e;
	let t = nh(e, "contents");
	return Array.isArray(t) ? t : [];
}
//#endregion
//#region src/module/create-module-api.ts
function yh() {
	return {
		clearDebugShapeProbes: Rm,
		getDebugShapeProbes: zm,
		inspectPath: Bm,
		openNpcBuilder: async () => {
			await new wm().render(!0);
		},
		openWorkbench: async () => {
			await new km().render(!0);
		},
		setDebugShapeProbes: Um
	};
}
//#endregion
//#region src/module/register-module-menus.ts
function bh() {
	game.settings.registerMenu(e, "workbench", {
		hint: "Open the WFRP4e Customizer Apps workbench.",
		icon: "fa-solid fa-screwdriver-wrench",
		label: "Open Workbench",
		name: "WFRP4e Customizer Apps",
		restricted: !0,
		type: km
	}), game.settings.registerMenu(e, "npc-builder", {
		hint: "Build a WFRP4e NPC from a base Actor and Career items.",
		icon: "fa-solid fa-user-plus",
		label: "Open NPC Builder",
		name: "WFRP4e NPC Builder",
		restricted: !0,
		type: wm
	});
}
//#endregion
//#region src/module/register-module-settings.ts
function xh() {
	Xf();
}
//#endregion
//#region src/module/apps/npc-builder/register-actor-directory-button.ts
var Sh = "wfrp4e-customizer-open-npc-builder";
function Ch() {
	Hooks.on("renderActorDirectory", (e, t) => {
		let n = Eh(t);
		n && wh(n);
	});
}
function wh(e) {
	if (e.querySelector(`.${Sh}`)) return;
	let t = Th(e);
	if (!t) {
		console.warn("wfrp4e-customizer-apps | Could not find Actor Directory button container.");
		return;
	}
	let n = document.createElement("button");
	n.classList.add(Sh), n.type = "button", n.innerHTML = "<i class=\"fa-solid fa-user-plus\" inert></i><span>NPC Builder App</span>", n.addEventListener("click", () => {
		new wm().render(!0);
	}), t.append(n);
}
function Th(e) {
	return e.querySelector(".directory-header .header-actions") ?? e.querySelector(".directory-header .action-buttons") ?? e.querySelector(".header-actions") ?? e.querySelector(".action-buttons");
}
function Eh(e) {
	return e instanceof HTMLElement ? e : Dh(e) && e[0] instanceof HTMLElement ? e[0] : null;
}
function Dh(e) {
	return typeof e == "object" && !!e && "length" in e;
}
Hm(), Hooks.once("init", () => {
	console.info(`${e} | Initializing`), xh(), bh(), Ch();
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
	n.api = yh(), xf(), Lf(), console.info(`${e} | Ready`);
});
//#endregion
