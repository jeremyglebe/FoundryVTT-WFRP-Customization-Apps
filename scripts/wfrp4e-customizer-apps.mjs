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
}, d = Object.prototype.hasOwnProperty, f = (e, t) => d.call(e, t), p = Array.isArray, m = (e) => C(e) === "[object Map]", h = (e) => C(e) === "[object Set]", g = (e) => C(e) === "[object Date]", _ = (e) => typeof e == "function", v = (e) => typeof e == "string", y = (e) => typeof e == "symbol", b = (e) => typeof e == "object" && !!e, x = (e) => (b(e) || _(e)) && _(e.then) && _(e.catch), S = Object.prototype.toString, C = (e) => S.call(e), ee = (e) => C(e).slice(8, -1), w = (e) => C(e) === "[object Object]", te = (e) => v(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, T = /* @__PURE__ */ n(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), ne = (e) => {
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
var we = (e) => !!(e && e.__v_isRef === !0), k = (e) => v(e) ? e : e == null ? "" : p(e) || b(e) && (e.toString === S || !_(e.toString)) ? we(e) ? k(e.value) : JSON.stringify(e, Te, 2) : String(e), Te = (e, t) => we(t) ? Te(e, t.value) : m(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Ee(t, r) + " =>"] = n, e), {}) } : h(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Ee(e)) } : y(t) ? Ee(t) : b(t) && !p(t) && !w(t) ? String(t) : t, Ee = (e, t = "") => y(e) ? `Symbol(${e.description ?? t})` : e, De, Oe = class {
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
var Me, Ne = /* @__PURE__ */ new WeakSet(), Pe = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, De && (De.active ? De.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Ne.has(this) && (Ne.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Re(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, Ze(this), Ve(this);
		let e = Me, t = qe;
		Me = this, qe = !0;
		try {
			return this.fn();
		} finally {
			He(this), Me = e, qe = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Ge(e);
			this.deps = this.depsTail = void 0, Ze(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Ne.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Ue(this) && this.run();
	}
	get dirty() {
		return Ue(this);
	}
}, Fe = 0, Ie, Le;
function Re(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Le, Le = e;
		return;
	}
	e.next = Ie, Ie = e;
}
function ze() {
	Fe++;
}
function Be() {
	if (--Fe > 0) return;
	if (Le) {
		let e = Le;
		for (Le = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Ie;) {
		let t = Ie;
		for (Ie = void 0; t;) {
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
function Ve(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function He(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Ge(r), Ke(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Ue(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (We(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function We(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Qe) || (e.globalVersion = Qe, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ue(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = Me, r = qe;
	Me = e, qe = !0;
	try {
		Ve(e);
		let n = e.fn(e._value);
		(t.version === 0 || D(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		Me = n, qe = r, He(e), e.flags &= -3;
	}
}
function Ge(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Ge(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ke(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var qe = !0, Je = [];
function Ye() {
	Je.push(qe), qe = !1;
}
function Xe() {
	let e = Je.pop();
	qe = e === void 0 ? !0 : e;
}
function Ze(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = Me;
		Me = void 0;
		try {
			t();
		} finally {
			Me = e;
		}
	}
}
var Qe = 0, $e = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, et = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!Me || !qe || Me === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== Me) t = this.activeLink = new $e(Me, this), Me.deps ? (t.prevDep = Me.depsTail, Me.depsTail.nextDep = t, Me.depsTail = t) : Me.deps = Me.depsTail = t, tt(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = Me.depsTail, t.nextDep = void 0, Me.depsTail.nextDep = t, Me.depsTail = t, Me.deps === t && (Me.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, Qe++, this.notify(e);
	}
	notify(e) {
		ze();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Be();
		}
	}
};
function tt(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) tt(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var nt = /* @__PURE__ */ new WeakMap(), rt = /* @__PURE__ */ Symbol(""), it = /* @__PURE__ */ Symbol(""), at = /* @__PURE__ */ Symbol("");
function ot(e, t, n) {
	if (qe && Me) {
		let t = nt.get(e);
		t || nt.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new et()), r.map = t, r.key = n), r.track();
	}
}
function st(e, t, n, r, i, a) {
	let o = nt.get(e);
	if (!o) {
		Qe++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (ze(), t === "clear") o.forEach(s);
	else {
		let i = p(e), a = i && te(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === at || !y(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(at)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(rt)), m(e) && s(o.get(it)));
				break;
			case "delete":
				i || (s(o.get(rt)), m(e) && s(o.get(it)));
				break;
			case "set":
				m(e) && s(o.get(rt));
				break;
		}
	}
	Be();
}
function ct(e, t) {
	let n = nt.get(e);
	return n && n.get(t);
}
function lt(e) {
	let t = /* @__PURE__ */ A(e);
	return t === e ? t : (ot(t, "iterate", at), /* @__PURE__ */ Jt(e) ? t : t.map(Zt));
}
function ut(e) {
	return ot(e = /* @__PURE__ */ A(e), "iterate", at), e;
}
function dt(e, t) {
	return /* @__PURE__ */ qt(e) ? Qt(/* @__PURE__ */ Kt(e) ? Zt(t) : t) : Zt(t);
}
var ft = {
	__proto__: null,
	[Symbol.iterator]() {
		return pt(this, Symbol.iterator, (e) => dt(this, e));
	},
	concat(...e) {
		return lt(this).concat(...e.map((e) => p(e) ? lt(e) : e));
	},
	entries() {
		return pt(this, "entries", (e) => (e[1] = dt(this, e[1]), e));
	},
	every(e, t) {
		return ht(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return ht(this, "filter", e, t, (e) => e.map((e) => dt(this, e)), arguments);
	},
	find(e, t) {
		return ht(this, "find", e, t, (e) => dt(this, e), arguments);
	},
	findIndex(e, t) {
		return ht(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return ht(this, "findLast", e, t, (e) => dt(this, e), arguments);
	},
	findLastIndex(e, t) {
		return ht(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return ht(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return _t(this, "includes", e);
	},
	indexOf(...e) {
		return _t(this, "indexOf", e);
	},
	join(e) {
		return lt(this).join(e);
	},
	lastIndexOf(...e) {
		return _t(this, "lastIndexOf", e);
	},
	map(e, t) {
		return ht(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return vt(this, "pop");
	},
	push(...e) {
		return vt(this, "push", e);
	},
	reduce(e, ...t) {
		return gt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return gt(this, "reduceRight", e, t);
	},
	shift() {
		return vt(this, "shift");
	},
	some(e, t) {
		return ht(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return vt(this, "splice", e);
	},
	toReversed() {
		return lt(this).toReversed();
	},
	toSorted(e) {
		return lt(this).toSorted(e);
	},
	toSpliced(...e) {
		return lt(this).toSpliced(...e);
	},
	unshift(...e) {
		return vt(this, "unshift", e);
	},
	values() {
		return pt(this, "values", (e) => dt(this, e));
	}
};
function pt(e, t, n) {
	let r = ut(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ Jt(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var mt = Array.prototype;
function ht(e, t, n, r, i, a) {
	let o = ut(e), s = o !== e && !/* @__PURE__ */ Jt(e), c = o[t];
	if (c !== mt[t]) {
		let t = c.apply(e, a);
		return s ? Zt(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, dt(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function gt(e, t, n, r) {
	let i = ut(e), a = i !== e && !/* @__PURE__ */ Jt(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = dt(e, t)), n.call(this, t, dt(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? dt(e, c) : c;
}
function _t(e, t, n) {
	let r = /* @__PURE__ */ A(e);
	ot(r, "iterate", at);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Yt(n[0]) ? (n[0] = /* @__PURE__ */ A(n[0]), r[t](...n)) : i;
}
function vt(e, t, n = []) {
	Ye(), ze();
	let r = (/* @__PURE__ */ A(e))[t].apply(e, n);
	return Be(), Xe(), r;
}
var yt = /* @__PURE__ */ n("__proto__,__v_isRef,__isVue"), bt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(y));
function xt(e) {
	y(e) || (e = String(e));
	let t = /* @__PURE__ */ A(this);
	return ot(t, "has", e), t.hasOwnProperty(e);
}
var St = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Bt : zt : i ? Rt : Lt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = p(e);
		if (!r) {
			let e;
			if (a && (e = ft[t])) return e;
			if (t === "hasOwnProperty") return xt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ $t(e) ? e : n);
		if ((y(t) ? bt.has(t) : yt(t)) || (r || ot(e, "get", t), i)) return o;
		if (/* @__PURE__ */ $t(o)) {
			let e = a && te(t) ? o : o.value;
			return r && b(e) ? /* @__PURE__ */ Wt(e) : e;
		}
		return b(o) ? r ? /* @__PURE__ */ Wt(o) : /* @__PURE__ */ Ht(o) : o;
	}
}, Ct = class extends St {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = p(e) && te(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ qt(i);
			if (!/* @__PURE__ */ Jt(n) && !/* @__PURE__ */ qt(n) && (i = /* @__PURE__ */ A(i), n = /* @__PURE__ */ A(n)), !a && /* @__PURE__ */ $t(i) && !/* @__PURE__ */ $t(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : f(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ $t(e) ? e : r);
		return e === /* @__PURE__ */ A(r) && (o ? D(n, i) && st(e, "set", t, n, i) : st(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = f(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && st(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!y(t) || !bt.has(t)) && ot(e, "has", t), n;
	}
	ownKeys(e) {
		return ot(e, "iterate", p(e) ? "length" : rt), Reflect.ownKeys(e);
	}
}, wt = class extends St {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, Tt = /* @__PURE__ */ new Ct(), Et = /* @__PURE__ */ new wt(), Dt = /* @__PURE__ */ new Ct(!0), Ot = (e) => e, kt = (e) => Reflect.getPrototypeOf(e);
function At(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ A(i), o = m(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, u = i[e](...r), d = n ? Ot : t ? Qt : Zt;
		return !t && ot(a, "iterate", c ? it : rt), l(Object.create(u), { next() {
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
function jt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Mt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ A(r), a = /* @__PURE__ */ A(n);
			e || (D(n, a) && ot(i, "get", n), ot(i, "get", a));
			let { has: o } = kt(i), s = t ? Ot : e ? Qt : Zt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && ot(/* @__PURE__ */ A(t), "iterate", rt), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ A(n), i = /* @__PURE__ */ A(t);
			return e || (D(t, i) && ot(r, "has", t), ot(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ A(a), s = t ? Ot : e ? Qt : Zt;
			return !e && ot(o, "iterate", rt), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return l(n, e ? {
		add: jt("add"),
		set: jt("set"),
		delete: jt("delete"),
		clear: jt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ A(this), r = kt(n), i = /* @__PURE__ */ A(e), a = !t && !/* @__PURE__ */ Jt(e) && !/* @__PURE__ */ qt(e) ? i : e;
			return r.has.call(n, a) || D(e, a) && r.has.call(n, e) || D(i, a) && r.has.call(n, i) || (n.add(a), st(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ Jt(n) && !/* @__PURE__ */ qt(n) && (n = /* @__PURE__ */ A(n));
			let r = /* @__PURE__ */ A(this), { has: i, get: a } = kt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ A(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? D(n, s) && st(r, "set", e, n, s) : st(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ A(this), { has: n, get: r } = kt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ A(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && st(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ A(this), t = e.size !== 0, n = e.clear();
			return t && st(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = At(r, e, t);
	}), n;
}
function Nt(e, t) {
	let n = Mt(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(f(n, r) && r in t ? n : t, r, i);
}
var Pt = { get: /* @__PURE__ */ Nt(!1, !1) }, Ft = { get: /* @__PURE__ */ Nt(!1, !0) }, It = { get: /* @__PURE__ */ Nt(!0, !1) }, Lt = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakMap();
function Vt(e) {
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
function Ht(e) {
	return /* @__PURE__ */ qt(e) ? e : Gt(e, !1, Tt, Pt, Lt);
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
	return Gt(e, !1, Dt, Ft, Rt);
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
	return Gt(e, !0, Et, It, zt);
}
function Gt(e, t, n, r, i) {
	if (!b(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Vt(ee(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
	return /* @__PURE__ */ qt(e) ? /* @__PURE__ */ Kt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function A(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ A(t) : e;
}
function Xt(e) {
	return !f(e, "__v_skip") && Object.isExtensible(e) && le(e, "__v_skip", !0), e;
}
var Zt = (e) => b(e) ? /* @__PURE__ */ Ht(e) : e, Qt = (e) => b(e) ? /* @__PURE__ */ Wt(e) : e;
// @__NO_SIDE_EFFECTS__
function $t(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function j(e) {
	return en(e, !1);
}
function en(e, t) {
	return /* @__PURE__ */ $t(e) ? e : new tn(e, t);
}
var tn = class {
	constructor(e, t) {
		this.dep = new et(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ A(e), this._value = t ? e : Zt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Jt(e) || /* @__PURE__ */ qt(e);
		e = n ? e : /* @__PURE__ */ A(e), D(e, t) && (this._rawValue = e, this._value = n ? e : Zt(e), this.dep.trigger());
	}
};
function M(e) {
	return /* @__PURE__ */ $t(e) ? e.value : e;
}
var nn = {
	get: (e, t, n) => t === "__v_raw" ? e : M(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ $t(i) && !/* @__PURE__ */ $t(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function rn(e) {
	return /* @__PURE__ */ Kt(e) ? e : new Proxy(e, nn);
}
// @__NO_SIDE_EFFECTS__
function an(e) {
	let t = p(e) ? Array(e.length) : {};
	for (let n in e) t[n] = ln(e, n);
	return t;
}
var on = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = y(t) ? t : String(t), this._raw = /* @__PURE__ */ A(e);
		let r = !0, i = e;
		if (!p(e) || y(this._key) || !te(this._key)) do
			r = !/* @__PURE__ */ Yt(i) || /* @__PURE__ */ Jt(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = M(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ $t(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ $t(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return ct(this._raw, this._key);
	}
}, sn = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
// @__NO_SIDE_EFFECTS__
function cn(e, t, n) {
	return /* @__PURE__ */ $t(e) ? e : _(e) ? new sn(e) : b(e) && arguments.length > 1 ? ln(e, t, n) : /* @__PURE__ */ j(e);
}
function ln(e, t, n) {
	return new on(e, t, n);
}
var un = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new et(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Qe - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && Me !== this) return Re(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return We(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function dn(e, t, n = !1) {
	let r, i;
	return _(e) ? r = e : (r = e.get, i = e.set), new un(r, i, n);
}
var fn = {}, pn = /* @__PURE__ */ new WeakMap(), mn = void 0;
function hn(e, t = !1, n = mn) {
	if (n) {
		let t = pn.get(n);
		t || pn.set(n, t = []), t.push(e);
	}
}
function gn(e, t, n = r) {
	let { immediate: i, deep: o, once: s, scheduler: c, augmentJob: l, call: d } = n, f = (e) => o ? e : /* @__PURE__ */ Jt(e) || o === !1 || o === 0 ? _n(e, 1) : _n(e), m, h, g, v, y = !1, b = !1;
	if (/* @__PURE__ */ $t(e) ? (h = () => e.value, y = /* @__PURE__ */ Jt(e)) : /* @__PURE__ */ Kt(e) ? (h = () => f(e), y = !0) : p(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Kt(e) || /* @__PURE__ */ Jt(e)), h = () => e.map((e) => {
		if (/* @__PURE__ */ $t(e)) return e.value;
		if (/* @__PURE__ */ Kt(e)) return f(e);
		if (_(e)) return d ? d(e, 2) : e();
	})) : h = _(e) ? t ? d ? () => d(e, 2) : e : () => {
		if (g) {
			Ye();
			try {
				g();
			} finally {
				Xe();
			}
		}
		let t = mn;
		mn = m;
		try {
			return d ? d(e, 3, [v]) : e(v);
		} finally {
			mn = t;
		}
	} : a, t && o) {
		let e = h, t = o === !0 ? Infinity : o;
		h = () => _n(e(), t);
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
	let C = b ? Array(e.length).fill(fn) : fn, ee = (e) => {
		if (!(!(m.flags & 1) || !m.dirty && !e)) if (t) {
			let n = m.run();
			if (e || o || y || (b ? n.some((e, t) => D(e, C[t])) : D(n, C))) {
				g && g();
				let e = mn;
				mn = m;
				try {
					let e = [
						n,
						C === fn ? void 0 : b && C[0] === fn ? [] : C,
						v
					];
					C = n, d ? d(t, 3, e) : t(...e);
				} finally {
					mn = e;
				}
			}
		} else m.run();
	};
	return l && l(ee), m = new Pe(h), m.scheduler = c ? () => c(ee, !1) : ee, v = (e) => hn(e, !1, m), g = m.onStop = () => {
		let e = pn.get(m);
		if (e) {
			if (d) d(e, 4);
			else for (let t of e) t();
			pn.delete(m);
		}
	}, t ? i ? ee(!0) : C = m.run() : c ? c(ee.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function _n(e, t = Infinity, n) {
	if (t <= 0 || !b(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ $t(e)) _n(e.value, t, n);
	else if (p(e)) for (let r = 0; r < e.length; r++) _n(e[r], t, n);
	else if (h(e) || m(e)) e.forEach((e) => {
		_n(e, t, n);
	});
	else if (w(e)) {
		for (let r in e) _n(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && _n(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function vn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		bn(e, t, n);
	}
}
function yn(e, t, n, r) {
	if (_(e)) {
		let i = vn(e, t, n, r);
		return i && x(i) && i.catch((e) => {
			bn(e, t, n);
		}), i;
	}
	if (p(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(yn(e[a], t, n, r));
		return i;
	}
}
function bn(e, t, n, i = !0) {
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
			Ye(), vn(o, null, 10, [
				e,
				i,
				a
			]), Xe();
			return;
		}
	}
	xn(e, n, a, i, s);
}
function xn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var Sn = [], Cn = -1, wn = [], Tn = null, En = 0, Dn = /* @__PURE__ */ Promise.resolve(), On = null;
function kn(e) {
	let t = On || Dn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function An(e) {
	let t = Cn + 1, n = Sn.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = Sn[r], a = In(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function jn(e) {
	if (!(e.flags & 1)) {
		let t = In(e), n = Sn[Sn.length - 1];
		!n || !(e.flags & 2) && t >= In(n) ? Sn.push(e) : Sn.splice(An(t), 0, e), e.flags |= 1, Mn();
	}
}
function Mn() {
	On ||= Dn.then(Ln);
}
function Nn(e) {
	p(e) ? wn.push(...e) : Tn && e.id === -1 ? Tn.splice(En + 1, 0, e) : e.flags & 1 || (wn.push(e), e.flags |= 1), Mn();
}
function Pn(e, t, n = Cn + 1) {
	for (; n < Sn.length; n++) {
		let t = Sn[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			Sn.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function Fn(e) {
	if (wn.length) {
		let e = [...new Set(wn)].sort((e, t) => In(e) - In(t));
		if (wn.length = 0, Tn) {
			Tn.push(...e);
			return;
		}
		for (Tn = e, En = 0; En < Tn.length; En++) {
			let e = Tn[En];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		Tn = null, En = 0;
	}
}
var In = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Ln(e) {
	try {
		for (Cn = 0; Cn < Sn.length; Cn++) {
			let e = Sn[Cn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), vn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; Cn < Sn.length; Cn++) {
			let e = Sn[Cn];
			e && (e.flags &= -2);
		}
		Cn = -1, Sn.length = 0, Fn(e), On = null, (Sn.length || wn.length) && Ln(e);
	}
}
var Rn = null, zn = null;
function Bn(e) {
	let t = Rn;
	return Rn = e, zn = e && e.type.__scopeId || null, t;
}
function N(e, t = Rn, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && ha(-1);
		let i = Bn(t), a;
		try {
			a = e(...n);
		} finally {
			Bn(i), r._d && ha(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Vn(e, t) {
	if (Rn === null) return e;
	let n = Ya(Rn), i = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [a, o, s, c = r] = t[e];
		a && (_(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && _n(o), i.push({
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
		c && (Ye(), yn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Xe());
	}
}
function Un(e, t) {
	if (Na) {
		let n = Na.provides, r = Na.parent && Na.parent.provides;
		r === n && (n = Na.provides = Object.create(r)), n[e] = t;
	}
}
function Wn(e, t, n = !1) {
	let r = Pa();
	if (r || vi) {
		let i = vi ? vi._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && _(t) ? t.call(r && r.proxy) : t;
	}
}
function Gn() {
	return !!(Pa() || vi);
}
var Kn = /* @__PURE__ */ Symbol.for("v-scx"), qn = () => Wn(Kn);
function Jn(e, t, n) {
	return Yn(e, t, n);
}
function Yn(e, t, n = r) {
	let { immediate: i, deep: o, flush: s, once: c } = n, u = l({}, n), d = t && i || !t && s !== "post", f;
	if (Ba) {
		if (s === "sync") {
			let e = qn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = a, e.resume = a, e.pause = a, e;
		}
	}
	let p = Na;
	u.call = (e, t, n) => yn(e, p, t, n);
	let m = !1;
	s === "post" ? u.scheduler = (e) => {
		Yi(e, p && p.suspense);
	} : s !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : jn(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = gn(e, t, u);
	return Ba && (f ? f.push(h) : d && h()), h;
}
function Xn(e, t, n) {
	let r = this.proxy, i = v(e) ? e.includes(".") ? Zn(r, e) : () => r[e] : e.bind(r, r), a;
	_(t) ? a = t : (a = t.handler, n = t);
	let o = La(this), s = Yn(i, a.bind(r), n);
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
var Qn = /* @__PURE__ */ new WeakMap(), $n = /* @__PURE__ */ Symbol("_vte"), er = (e) => e.__isTeleport, tr = (e) => e && (e.disabled || e.disabled === ""), nr = (e) => e && (e.defer || e.defer === ""), rr = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ir = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ar = (e, t) => {
	let n = e && e.to;
	return v(n) ? t ? t(n) : null : n;
}, or = {
	name: "Teleport",
	__isTeleport: !0,
	process(e, t, n, r, i, a, o, s, c, l) {
		let { mc: u, pc: d, pbc: f, o: { insert: p, querySelector: m, createText: h, createComment: g, parentNode: _ } } = l, v = tr(t.props), { dynamicChildren: y } = t, b = (e, t, n) => {
			e.shapeFlag & 16 && u(e.children, t, n, i, a, o, s, c);
		}, x = (e = t) => {
			let n = tr(e.props), r = e.target = ar(e.props, m), a = dr(r, e, h, p);
			r && (o !== "svg" && rr(r) ? o = "svg" : o !== "mathml" && ir(r) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(r), n || (b(e, r, a), ur(e, !1)));
		}, S = (e) => {
			let t = () => {
				Qn.get(e) === t && (Qn.delete(e), tr(e.props) && (b(e, _(e.el) || n, e.anchor), ur(e, !0)), x(e));
			};
			Qn.set(e, t), Yi(t, a);
		};
		if (e == null) {
			let e = t.el = h(""), i = t.anchor = h("");
			if (p(e, n, r), p(i, n, r), nr(t.props) || a && a.pendingBranch) {
				S(t);
				return;
			}
			v && (b(t, n, i), ur(t, !0)), x();
		} else {
			t.el = e.el;
			let r = t.anchor = e.anchor, u = Qn.get(e);
			if (u) {
				u.flags |= 8, Qn.delete(e), S(t);
				return;
			}
			t.targetStart = e.targetStart;
			let p = t.target = e.target, h = t.targetAnchor = e.targetAnchor, g = tr(e.props), _ = g ? n : p, b = g ? r : h;
			if (o === "svg" || rr(p) ? o = "svg" : (o === "mathml" || ir(p)) && (o = "mathml"), y ? (f(e.dynamicChildren, y, _, i, a, o, s), ta(e, t, !0)) : c || d(e, t, _, b, i, a, o, s, !1), v) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : sr(t, n, r, l, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = t.target = ar(t.props, m);
				e && sr(t, e, null, l, 0);
			} else g && sr(t, p, h, l, 1);
			ur(t, v);
		}
	},
	remove(e, t, n, { um: r, o: { remove: i } }, a) {
		let { shapeFlag: o, children: s, anchor: c, targetStart: l, targetAnchor: u, target: d, props: f } = e, p = a || !tr(f), m = Qn.get(e);
		if (m && (m.flags |= 8, Qn.delete(e)), d && (i(l), i(u)), a && i(c), !m && o & 16) for (let e = 0; e < s.length; e++) {
			let i = s[e];
			r(i, t, n, p, !!i.dynamicChildren);
		}
	},
	move: sr,
	hydrate: cr
};
function sr(e, t, n, { o: { insert: r }, m: i }, a = 2) {
	a === 0 && r(e.targetAnchor, t, n);
	let { el: o, anchor: s, shapeFlag: c, children: l, props: u } = e, d = a === 2;
	if (d && r(o, t, n), !Qn.has(e) && (!d || tr(u)) && c & 16) for (let e = 0; e < l.length; e++) i(l[e], t, n, 2);
	d && r(s, t, n);
}
function cr(e, t, n, r, i, a, { o: { nextSibling: o, parentNode: s, querySelector: c, insert: l, createText: u } }, d) {
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
	let m = t.target = ar(t.props, c), h = tr(t.props);
	if (m) {
		let c = m._lpa || m.firstChild;
		t.shapeFlag & 16 && (h ? (p(e, t), f(m, c), t.targetAnchor || dr(m, t, u, l, s(e) === m ? e : null)) : (t.anchor = o(e), f(m, c), t.targetAnchor || dr(m, t, u, l), d(c && o(c), t, m, n, r, i, a))), ur(t, h);
	} else h && t.shapeFlag & 16 && (p(e, t), t.targetStart = e, t.targetAnchor = o(e));
	return t.anchor && o(t.anchor);
}
var lr = or;
function ur(e, t) {
	let n = e.ctx;
	if (n && n.ut) {
		let r, i;
		for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i;) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
		n.ut();
	}
}
function dr(e, t, n, r, i = null) {
	let a = t.targetStart = n(""), o = t.targetAnchor = n("");
	return a[$n] = o, e && (r(a, e, i), r(o, e, i)), o;
}
var fr = /* @__PURE__ */ Symbol("_leaveCb");
function pr(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, pr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function P(e, t) {
	return _(e) ? /* @__PURE__ */ l({ name: e.name }, t, { setup: e }) : e;
}
function mr() {
	let e = Pa();
	return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
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
	let s = i.shapeFlag & 4 ? Ya(i.component) : i.el, c = a ? null : s, { i: l, r: d } = e, m = t && t.r, h = l.refs === r ? l.refs = {} : l.refs, g = l.setupState, y = /* @__PURE__ */ A(g), b = g === r ? o : (e) => gr(h, e) ? !1 : f(y, e), x = (e, t) => !(t && gr(h, t));
	if (m != null && m !== d) {
		if (yr(t), v(m)) h[m] = null, b(m) && (g[m] = null);
		else if (/* @__PURE__ */ $t(m)) {
			let e = t;
			x(m, e.k) && (m.value = null), e.k && (h[e.k] = null);
		}
	}
	if (_(d)) vn(d, l, 12, [c, h]);
	else {
		let t = v(d), r = /* @__PURE__ */ $t(d);
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
				t.id = -1, _r.set(e, t), Yi(t, n);
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
function wr(e, t, n = Na) {
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
function Er(e, t, n = Na, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Ye();
			let i = La(n), a = yn(t, n, e, r);
			return i(), Xe(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var Dr = (e) => (t, n = Na) => {
	(!Ba || e === "sp") && Er(e, (...e) => t(...e), n);
}, Or = Dr("bm"), kr = Dr("m"), Ar = Dr("bu"), jr = Dr("u"), Mr = Dr("bum"), Nr = Dr("um"), Pr = Dr("sp"), Fr = Dr("rtg"), Ir = Dr("rtc");
function Lr(e, t = Na) {
	Er("ec", e, t);
}
var Rr = "components", zr = /* @__PURE__ */ Symbol.for("v-ndc");
function Br(e) {
	return v(e) ? Vr(Rr, e, !1) || e : e || zr;
}
function Vr(e, t, n = !0, r = !1) {
	let i = Rn || Na;
	if (i) {
		let n = i.type;
		if (e === Rr) {
			let e = Xa(n, !1);
			if (e && (e === t || e === E(t) || e === oe(E(t)))) return n;
		}
		let a = Hr(i[e] || n[e], t) || Hr(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function Hr(e, t) {
	return e && (e[t] || e[E(t)] || e[oe(E(t))]);
}
function F(e, t, n, r) {
	let i, a = n && n[r], o = p(e);
	if (o || v(e)) {
		let n = o && /* @__PURE__ */ Kt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ Jt(e), s = /* @__PURE__ */ qt(e), e = ut(e)), i = Array(e.length);
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
function Ur(e, t, n = {}, r, i) {
	if (Rn.ce || Rn.parent && br(Rn.parent) && Rn.parent.ce) {
		let e = Object.keys(n).length > 0;
		return t !== "default" && (n.name = t), L(), z(I, null, [V("slot", n, r && r())], e ? -2 : 64);
	}
	let a = e[t];
	a && a._c && (a._d = !1), L();
	let o = a && Wr(a(n)), s = n.key || o && o.key, c = z(I, { key: (s && !y(s) ? s : `_${t}`) + (!o && r ? "_fb" : "") }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), a && a._c && (a._d = !0), c;
}
function Wr(e) {
	return e.some((e) => _a(e) ? !(e.type === la || e.type === I && !Wr(e.children)) : !0) ? e : null;
}
function Gr(e, t) {
	let n = {};
	for (let r in e) n[t && /[A-Z]/.test(r) ? `on:${r}` : se(r)] = e[r];
	return n;
}
var Kr = (e) => e ? za(e) ? Ya(e) : Kr(e.parent) : null, qr = /* @__PURE__ */ l(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Kr(e.parent),
	$root: (e) => Kr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => ii(e),
	$forceUpdate: (e) => e.f ||= () => {
		jn(e.update);
	},
	$nextTick: (e) => e.n ||= kn.bind(e.proxy),
	$watch: (e) => Xn.bind(e)
}), Jr = (e, t) => e !== r && !e.__isScriptSetup && f(e, t), Yr = {
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
			else if (Jr(i, t)) return s[t] = 1, i[t];
			else if (a !== r && f(a, t)) return s[t] = 2, a[t];
			else if (f(o, t)) return s[t] = 3, o[t];
			else if (n !== r && f(n, t)) return s[t] = 4, n[t];
			else $r && (s[t] = 0);
		}
		let u = qr[t], d, p;
		if (u) return t === "$attrs" && ot(e.attrs, "get", ""), u(e);
		if ((d = c.__cssModules) && (d = d[t])) return d;
		if (n !== r && f(n, t)) return s[t] = 4, n[t];
		if (p = l.config.globalProperties, f(p, t)) return p[t];
	},
	set({ _: e }, t, n) {
		let { data: i, setupState: a, ctx: o } = e;
		return Jr(a, t) ? (a[t] = n, !0) : i !== r && f(i, t) ? (i[t] = n, !0) : f(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(n[c] || e !== r && c[0] !== "$" && f(e, c) || Jr(t, c) || f(o, c) || f(i, c) || f(qr, c) || f(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? f(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Xr() {
	return Zr("useSlots").slots;
}
function Zr(e) {
	let t = Pa();
	return t.setupContext ||= Ja(t);
}
function Qr(e) {
	return p(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var $r = !0;
function ei(e) {
	let t = ii(e), n = e.proxy, r = e.ctx;
	$r = !1, t.beforeCreate && ni(t.beforeCreate, e, "bc");
	let { data: i, computed: o, methods: s, watch: c, provide: l, inject: u, created: d, beforeMount: f, mounted: m, beforeUpdate: h, updated: g, activated: v, deactivated: y, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: ee, render: w, renderTracked: te, renderTriggered: T, errorCaptured: ne, serverPrefetch: re, expose: E, inheritAttrs: ie, components: ae, directives: oe, filters: se } = t;
	if (u && ti(u, r, null), s) for (let e in s) {
		let t = s[e];
		_(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		b(t) && (e.data = /* @__PURE__ */ Ht(t));
	}
	if ($r = !0, o) for (let e in o) {
		let t = o[e], i = W({
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
	if (c) for (let e in c) ri(c[e], r, n, e);
	if (l) {
		let e = _(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Un(t, e[t]);
		});
	}
	d && ni(d, e, "c");
	function D(e, t) {
		p(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (D(Or, f), D(kr, m), D(Ar, h), D(jr, g), D(Sr, v), D(Cr, y), D(Lr, ne), D(Ir, te), D(Fr, T), D(Mr, S), D(Nr, ee), D(Pr, re), p(E)) if (E.length) {
		let t = e.exposed ||= {};
		E.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	w && e.render === a && (e.render = w), ie != null && (e.inheritAttrs = ie), ae && (e.components = ae), oe && (e.directives = oe), re && hr(e);
}
function ti(e, t, n = a) {
	p(e) && (e = li(e));
	for (let n in e) {
		let r = e[n], i;
		i = b(r) ? "default" in r ? Wn(r.from || n, r.default, !0) : Wn(r.from || n) : Wn(r), /* @__PURE__ */ $t(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function ni(e, t, n) {
	yn(p(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function ri(e, t, n, r) {
	let i = r.includes(".") ? Zn(n, r) : () => n[r];
	if (v(e)) {
		let n = t[e];
		_(n) && Jn(i, n);
	} else if (_(e)) Jn(i, e.bind(n));
	else if (b(e)) if (p(e)) e.forEach((e) => ri(e, t, n, r));
	else {
		let r = _(e.handler) ? e.handler.bind(n) : t[e.handler];
		_(r) && Jn(i, r, e);
	}
}
function ii(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => ai(c, e, o, !0)), ai(c, t, o)), b(t) && a.set(t, c), c;
}
function ai(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && ai(e, a, n, !0), i && i.forEach((t) => ai(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = oi[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var oi = {
	data: si,
	props: pi,
	emits: pi,
	methods: fi,
	computed: fi,
	beforeCreate: di,
	created: di,
	beforeMount: di,
	mounted: di,
	beforeUpdate: di,
	updated: di,
	beforeDestroy: di,
	beforeUnmount: di,
	destroyed: di,
	unmounted: di,
	activated: di,
	deactivated: di,
	errorCaptured: di,
	serverPrefetch: di,
	components: fi,
	directives: fi,
	watch: mi,
	provide: si,
	inject: ci
};
function si(e, t) {
	return t ? e ? function() {
		return l(_(e) ? e.call(this, this) : e, _(t) ? t.call(this, this) : t);
	} : t : e;
}
function ci(e, t) {
	return fi(li(e), li(t));
}
function li(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function di(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function fi(e, t) {
	return e ? l(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function pi(e, t) {
	return e ? p(e) && p(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : l(/* @__PURE__ */ Object.create(null), Qr(e), Qr(t ?? {})) : t;
}
function mi(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = l(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = di(e[r], t[r]);
	return n;
}
function hi() {
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
var gi = 0;
function _i(e, t) {
	return function(n, r = null) {
		_(n) || (n = l({}, n)), r != null && !b(r) && (r = null);
		let i = hi(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: gi++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Qa,
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
					let u = c._ceVNode || V(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, Ya(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (yn(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = vi;
				vi = c;
				try {
					return e();
				} finally {
					vi = t;
				}
			}
		};
		return c;
	};
}
var vi = null, yi = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${E(t)}Modifiers`] || e[`${ae(t)}Modifiers`];
function bi(e, t, ...n) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || r, a = n, o = t.startsWith("update:"), s = o && yi(i, t.slice(7));
	s && (s.trim && (a = n.map((e) => v(e) ? e.trim() : e)), s.number && (a = n.map(ue)));
	let c, l = i[c = se(t)] || i[c = se(E(t))];
	!l && o && (l = i[c = se(ae(t))]), l && yn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, yn(u, e, 6, a);
	}
}
var xi = /* @__PURE__ */ new WeakMap();
function Si(e, t, n = !1) {
	let r = n ? xi : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!_(e)) {
		let r = (e) => {
			let n = Si(e, t, !0);
			n && (s = !0, l(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (b(e) && r.set(e, null), null) : (p(a) ? a.forEach((e) => o[e] = null) : l(o, a), b(e) && r.set(e, o), o);
}
function Ci(e, t) {
	return !e || !s(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), f(e, t[0].toLowerCase() + t.slice(1)) || f(e, ae(t)) || f(e, t));
}
function wi(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Bn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = Ta(u.call(t, e, d, f, m, p, h)), y = s;
		} else {
			let e = t;
			v = Ta(e.length > 1 ? e(f, {
				attrs: s,
				slots: o,
				emit: l
			}) : e(f, null)), y = t.props ? s : Ti(s);
		}
	} catch (t) {
		da.length = 0, bn(t, e, 1), v = V(la);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(c) && (y = Ei(y, a)), b = Ca(b, y, !1, !0));
	}
	return n.dirs && (b = Ca(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && pr(b, n.transition), v = b, Bn(_), v;
}
var Ti = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || s(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, Ei = (e, t) => {
	let n = {};
	for (let r in e) (!c(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function Di(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Oi(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (ki(o, r, n) && !Ci(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? Oi(r, o, l) : !0 : !!o;
	return !1;
}
function Oi(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (ki(t, e, a) && !Ci(n, a)) return !0;
	}
	return !1;
}
function ki(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && b(r) && b(i) ? !Se(r, i) : r !== i;
}
function Ai({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var ji = {}, Mi = () => Object.create(ji), Ni = (e) => Object.getPrototypeOf(e) === ji;
function Pi(e, t, n, r = !1) {
	let i = {}, a = Mi();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), Ii(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ Ut(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function Fi(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ A(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Ci(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (f(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = E(o);
					i[t] = Li(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		Ii(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !f(t, a) && ((r = ae(a)) === a || !f(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Li(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !f(t, e)) && (delete a[e], l = !0);
	}
	l && st(e.attrs, "set", "");
}
function Ii(e, t, n, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (t) for (let r in t) {
		if (T(r)) continue;
		let l = t[r], u;
		a && f(a, u = E(r)) ? !o || !o.includes(u) ? n[u] = l : (c ||= {})[u] = l : Ci(e.emitsOptions, r) || (!(r in i) || l !== i[r]) && (i[r] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ A(n), i = c || r;
		for (let r = 0; r < o.length; r++) {
			let s = o[r];
			n[s] = Li(a, t, s, i[s], e, !f(i, s));
		}
	}
	return s;
}
function Li(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = f(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && _(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = La(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === ae(n)) && (r = !0));
	}
	return r;
}
var Ri = /* @__PURE__ */ new WeakMap();
function zi(e, t, n = !1) {
	let a = n ? Ri : t.propsCache, o = a.get(e);
	if (o) return o;
	let s = e.props, c = {}, u = [], d = !1;
	if (!_(e)) {
		let r = (e) => {
			d = !0;
			let [n, r] = zi(e, t, !0);
			l(c, n), r && u.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!s && !d) return b(e) && a.set(e, i), i;
	if (p(s)) for (let e = 0; e < s.length; e++) {
		let t = E(s[e]);
		Bi(t) && (c[t] = r);
	}
	else if (s) for (let e in s) {
		let t = E(e);
		if (Bi(t)) {
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
function Bi(e) {
	return e[0] !== "$" && !T(e);
}
var Vi = (e) => e === "_" || e === "_ctx" || e === "$stable", Hi = (e) => p(e) ? e.map(Ta) : [Ta(e)], Ui = (e, t, n) => {
	if (t._n) return t;
	let r = N((...e) => Hi(t(...e)), n);
	return r._c = !1, r;
}, Wi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Vi(n)) continue;
		let i = e[n];
		if (_(i)) t[n] = Ui(n, i, r);
		else if (i != null) {
			let e = Hi(i);
			t[n] = () => e;
		}
	}
}, Gi = (e, t) => {
	let n = Hi(t);
	e.slots.default = () => n;
}, Ki = (e, t, n) => {
	for (let r in t) (n || !Vi(r)) && (e[r] = t[r]);
}, qi = (e, t, n) => {
	let r = e.slots = Mi();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Ki(r, t, n), n && le(r, "_", e, !0)) : Wi(t, r);
	} else t && Gi(e, t);
}, Ji = (e, t, n) => {
	let { vnode: i, slots: a } = e, o = !0, s = r;
	if (i.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? o = !1 : Ki(a, t, n) : (o = !t.$stable, Wi(t, a)), s = t;
	} else t && (Gi(e, t), s = { default: 1 });
	if (o) for (let e in a) !Vi(e) && s[e] == null && delete a[e];
}, Yi = sa;
function Xi(e) {
	return Zi(e);
}
function Zi(e, t) {
	let n = fe();
	n.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = a, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !va(e, t) && (r = be(e), ge(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case ca:
				y(e, t, n, r);
				break;
			case la:
				b(e, t, n, r);
				break;
			case ua:
				e ?? x(t, n, r, o);
				break;
			case I:
				ae(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? ee(e, t, n, r, i, a, o, s, c) : d & 6 ? oe(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, Ce);
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
	}, ee = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) w(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), re(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, w = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && ne(e.children, d, null, r, i, Qi(e, a), s, u), _ && Hn(e, null, r, "created"), te(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !T(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && ka(f, r, e);
		}
		_ && Hn(e, null, r, "beforeMount");
		let v = ea(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Yi(() => {
			try {
				f && ka(f, r, e), v && g.enter(d), _ && Hn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, te = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || oa(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				te(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, ne = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? Ea(e[l]) : Ta(e[l]), t, n, r, i, a, o, s);
	}, re = (e, t, n, i, a, o, s) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || r, h = t.props || r, g;
		if (n && $i(n, !1), (g = h.onVnodeBeforeUpdate) && ka(g, n, t, e), f && Hn(t, e, n, "beforeUpdate"), n && $i(n, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? E(e.dynamicChildren, d, l, n, i, Qi(t, a), o) : s || de(e, t, l, null, n, i, Qi(t, a), o, !1), u > 0) {
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
		((g = h.onVnodeUpdated) || f) && Yi(() => {
			g && ka(g, n, t, e), f && Hn(t, e, n, "updated");
		}, i);
	}, E = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === I || !va(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
		}
	}, ie = (e, t, n, i, a) => {
		if (t !== n) {
			if (t !== r) for (let r in t) !T(r) && !(r in n) && c(e, r, t[r], null, a, i);
			for (let r in n) {
				if (T(r)) continue;
				let o = n[r], s = t[r];
				o !== s && r !== "value" && c(e, r, s, o, a, i);
			}
			"value" in n && c(e, "value", t.value, n.value, a);
		}
	}, ae = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), ne(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (E(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && ta(e, t, !0)) : de(e, t, n, f, i, a, s, c, l);
	}, oe = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : se(t, n, r, i, a, o, c) : D(e, t, c);
	}, se = (e, t, n, r, i, a, o) => {
		let s = e.component = Ma(e, r, i);
		if (xr(e) && (s.ctx.renderer = Ce), Va(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, le, o), !e.el) {
				let r = s.subTree = V(la);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else le(s, e, t, n, i, a, o);
	}, D = (e, t, n) => {
		let r = t.component = e.component;
		if (Di(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			ue(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, le = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = ra(e);
					if (n) {
						t && (t.el = c.el, ue(e, t, o)), n.asyncDep.then(() => {
							Yi(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				$i(e, !1), t ? (t.el = c.el, ue(e, t, o)) : t = c, n && ce(n), (d = t.props && t.props.onVnodeBeforeUpdate) && ka(d, s, t, c), $i(e, !0);
				let f = wi(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), be(p), e, i, a), t.el = f.el, u === null && Ai(e, f.el), r && Yi(r, i), (d = t.props && t.props.onVnodeUpdated) && Yi(() => ka(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = br(t);
				if ($i(e, !1), l && ce(l), !m && (o = c && c.onVnodeBeforeMount) && ka(o, d, t), $i(e, !0), s && k) {
					let t = () => {
						e.subTree = wi(e), k(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = wi(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Yi(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Yi(() => ka(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && br(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Yi(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Pe(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => jn(u), $i(e, !0), l();
	}, ue = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Fi(e, t.props, r, n), Ji(e, t.children, n), Ye(), Pn(e), Xe();
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
			let r = t[p] = l ? Ea(t[p]) : Ta(t[p]);
			v(e[p], r, n, null, a, o, s, c, l);
		}
		u > d ? ye(e, a, o, !0, !1, f) : ne(t, n, r, a, o, s, c, l, f);
	}, me = (e, t, n, r, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], i = t[u] = l ? Ea(t[u]) : Ta(t[u]);
			if (va(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], i = t[p] = l ? Ea(t[p]) : Ta(t[p]);
			if (va(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, i = e < d ? t[e].el : r;
				for (; u <= p;) v(null, t[u] = l ? Ea(t[u]) : Ta(t[u]), n, i, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) ge(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? Ea(t[u]) : Ta(t[u]);
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
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && va(r, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? ge(r, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(r, t[i], n, null, a, o, s, c, l), y++);
			}
			let ee = x ? na(C) : i;
			for (_ = ee.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, i = t[e], f = t[e + 1], p = e + 1 < d ? f.el || aa(f) : r;
				C[u] === 0 ? v(null, i, n, p, a, o, s, c, l) : x && (_ < 0 || u !== ee[_] ? he(i, n, p, 2) : _--);
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
		if (c === I) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) he(u[e], t, n, r);
			o(e.anchor, t, n);
			return;
		}
		if (c === ua) {
			S(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) if (r === 0) l.persisted && !a[fr] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), Yi(() => l.enter(a), i));
		else {
			let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? s(a) : o(a, t, n);
			}, d = () => {
				let e = a._isLeaving || !!a[fr];
				a._isLeaving && a[fr](!0), l.persisted && !e ? u() : r(a, () => {
					u(), c && c();
				});
			};
			i ? i(a, u, d) : d();
		}
		else o(a, t, n);
	}, ge = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (Ye(), vr(s, null, n, e, !0), Xe()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !br(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && ka(_, t, e), u & 6) ve(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Hn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Ce, r) : l && !l.hasOnce && (a !== I || d > 0 && d & 64) ? ye(l, t, n, !1, !0) : (a === I && d & 384 || !i && u & 16) && ye(c, t, n), r && _e(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Yi(() => {
			_ && ka(_, t, e), h && Hn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, _e = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === I) {
			O(n, r);
			return;
		}
		if (t === ua) {
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
		ia(c), ia(l), r && ce(r), i.stop(), a && (a.flags |= 8, ge(o, e, t, n)), s && Yi(s, t), Yi(() => {
			e.isUnmounted = !0;
		}, t);
	}, ye = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) ge(e[o], t, n, r, i);
	}, be = (e) => {
		if (e.shapeFlag & 6) return be(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[$n];
		return n ? h(n) : t;
	}, xe = !1, Se = (e, t, n) => {
		let r;
		e == null ? t._vnode && (ge(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, xe ||= (xe = !0, Pn(r), Fn(), !1);
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
		createApp: _i(Se, we)
	};
}
function Qi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function $i({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ea(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ta(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (p(r) && p(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Ea(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && ta(t, a)), a.type === ca && (a.patchFlag === -1 && (a = i[e] = Ea(a)), a.el = t.el), a.type === la && !a.el && (a.el = t.el);
	}
}
function na(e) {
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
function ra(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : ra(t);
}
function ia(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function aa(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? aa(t.subTree) : null;
}
var oa = (e) => e.__isSuspense;
function sa(e, t) {
	t && t.pendingBranch ? p(e) ? t.effects.push(...e) : t.effects.push(e) : Nn(e);
}
var I = /* @__PURE__ */ Symbol.for("v-fgt"), ca = /* @__PURE__ */ Symbol.for("v-txt"), la = /* @__PURE__ */ Symbol.for("v-cmt"), ua = /* @__PURE__ */ Symbol.for("v-stc"), da = [], fa = null;
function L(e = !1) {
	da.push(fa = e ? null : []);
}
function pa() {
	da.pop(), fa = da[da.length - 1] || null;
}
var ma = 1;
function ha(e, t = !1) {
	ma += e, e < 0 && fa && t && (fa.hasOnce = !0);
}
function ga(e) {
	return e.dynamicChildren = ma > 0 ? fa || i : null, pa(), ma > 0 && fa && fa.push(e), e;
}
function R(e, t, n, r, i, a) {
	return ga(B(e, t, n, r, i, a, !0));
}
function z(e, t, n, r, i) {
	return ga(V(e, t, n, r, i, !0));
}
function _a(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function va(e, t) {
	return e.type === t.type && e.key === t.key;
}
var ya = ({ key: e }) => e ?? null, ba = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : v(e) || /* @__PURE__ */ $t(e) || _(e) ? {
	i: Rn,
	r: e,
	k: t,
	f: !!n
} : e);
function B(e, t = null, n = null, r = 0, i = null, a = e === I ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && ya(t),
		ref: t && ba(t),
		scopeId: zn,
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
		ctx: Rn
	};
	return s ? (Da(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= v(n) ? 8 : 16), ma > 0 && !o && fa && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && fa.push(c), c;
}
var V = xa;
function xa(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === zr) && (e = la), _a(e)) {
		let r = Ca(e, t, !0);
		return n && Da(r, n), ma > 0 && !a && fa && (r.shapeFlag & 6 ? fa[fa.indexOf(e)] = r : fa.push(r)), r.patchFlag = -2, r;
	}
	if (Za(e) && (e = e.__vccOpts), t) {
		t = Sa(t);
		let { class: e, style: n } = t;
		e && !v(e) && (t.class = O(e)), b(n) && (/* @__PURE__ */ Yt(n) && !p(n) && (n = l({}, n)), t.style = pe(n));
	}
	let o = v(e) ? 1 : oa(e) ? 128 : er(e) ? 64 : b(e) ? 4 : _(e) ? 2 : 0;
	return B(e, t, n, r, i, o, a, !0);
}
function Sa(e) {
	return e ? /* @__PURE__ */ Yt(e) || Ni(e) ? l({}, e) : e : null;
}
function Ca(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Oa(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && ya(l),
		ref: t && t.ref ? n && a ? p(a) ? a.concat(ba(t)) : [a, ba(t)] : ba(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== I ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Ca(e.ssContent),
		ssFallback: e.ssFallback && Ca(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && pr(u, c.clone(u)), u;
}
function H(e = " ", t = 0) {
	return V(ca, null, e, t);
}
function wa(e, t) {
	let n = V(ua, null, e);
	return n.staticCount = t, n;
}
function U(e = "", t = !1) {
	return t ? (L(), z(la, null, e)) : V(la, null, e);
}
function Ta(e) {
	return e == null || typeof e == "boolean" ? V(la) : p(e) ? V(I, null, e.slice()) : _a(e) ? Ea(e) : V(ca, null, String(e));
}
function Ea(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ca(e);
}
function Da(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (p(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), Da(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !Ni(t) ? t._ctx = Rn : r === 3 && Rn && (Rn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else _(t) ? (t = {
		default: t,
		_ctx: Rn
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [H(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function Oa(...e) {
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
function ka(e, t, n, r = null) {
	yn(e, t, 7, [n, r]);
}
var Aa = hi(), ja = 0;
function Ma(e, t, n) {
	let i = e.type, a = (t ? t.appContext : e.appContext) || Aa, o = {
		uid: ja++,
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
		propsOptions: zi(i, a),
		emitsOptions: Si(i, a),
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
	return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = bi.bind(null, o), e.ce && e.ce(o), o;
}
var Na = null, Pa = () => Na || Rn, Fa, Ia;
{
	let e = fe(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Fa = t("__VUE_INSTANCE_SETTERS__", (e) => Na = e), Ia = t("__VUE_SSR_SETTERS__", (e) => Ba = e);
}
var La = (e) => {
	let t = Na;
	return Fa(e), e.scope.on(), () => {
		e.scope.off(), Fa(t);
	};
}, Ra = () => {
	Na && Na.scope.off(), Fa(null);
};
function za(e) {
	return e.vnode.shapeFlag & 4;
}
var Ba = !1;
function Va(e, t = !1, n = !1) {
	t && Ia(t);
	let { props: r, children: i } = e.vnode, a = za(e);
	Pi(e, r, a, t), qi(e, i, n || t);
	let o = a ? Ha(e, t) : void 0;
	return t && Ia(!1), o;
}
function Ha(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Yr);
	let { setup: r } = n;
	if (r) {
		Ye();
		let n = e.setupContext = r.length > 1 ? Ja(e) : null, i = La(e), a = vn(r, e, 0, [e.props, n]), o = x(a);
		if (Xe(), i(), (o || e.sp) && !br(e) && hr(e), o) {
			if (a.then(Ra, Ra), t) return a.then((n) => {
				Ua(e, n, t);
			}).catch((t) => {
				bn(t, e, 0);
			});
			e.asyncDep = a;
		} else Ua(e, a, t);
	} else Ka(e, t);
}
function Ua(e, t, n) {
	_(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : b(t) && (e.setupState = rn(t)), Ka(e, n);
}
var Wa, Ga;
function Ka(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && Wa && !r.render) {
			let t = r.template || ii(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r;
				r.render = Wa(t, l(l({
					isCustomElement: n,
					delimiters: a
				}, i), o));
			}
		}
		e.render = r.render || a, Ga && Ga(e);
	}
	{
		let t = La(e);
		Ye();
		try {
			ei(e);
		} finally {
			Xe(), t();
		}
	}
}
var qa = { get(e, t) {
	return ot(e, "get", ""), e[t];
} };
function Ja(e) {
	return {
		attrs: new Proxy(e.attrs, qa),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Ya(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(rn(Xt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in qr) return qr[n](e);
		},
		has(e, t) {
			return t in e || t in qr;
		}
	}) : e.proxy;
}
function Xa(e, t = !0) {
	return _(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Za(e) {
	return _(e) && "__vccOpts" in e;
}
var W = (e, t) => /* @__PURE__ */ dn(e, t, Ba), Qa = "3.5.38", $a = void 0, eo = typeof window < "u" && window.trustedTypes;
if (eo) try {
	$a = /* @__PURE__ */ eo.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var to = $a ? (e) => $a.createHTML(e) : (e) => e, no = "http://www.w3.org/2000/svg", ro = "http://www.w3.org/1998/Math/MathML", io = typeof document < "u" ? document : null, ao = io && /* @__PURE__ */ io.createElement("template"), oo = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? io.createElementNS(no, e) : t === "mathml" ? io.createElementNS(ro, e) : n ? io.createElement(e, { is: n }) : io.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => io.createTextNode(e),
	createComment: (e) => io.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => io.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			ao.innerHTML = to(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = ao.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, so = /* @__PURE__ */ Symbol("_vtc");
function co(e, t, n) {
	let r = e[so];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var lo = /* @__PURE__ */ Symbol("_vod"), uo = /* @__PURE__ */ Symbol("_vsh"), fo = /* @__PURE__ */ Symbol(""), po = /(?:^|;)\s*display\s*:/;
function mo(e, t, n) {
	let r = e.style, i = v(n), a = !1;
	if (n && !i) {
		if (t) if (v(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? go(r, t, "");
		}
		else for (let e in t) n[e] ?? go(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? go(r, i, "") : bo(e, i, !v(t) && t ? t[i] : void 0, o) || go(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[fo];
			e && (n += ";" + e), r.cssText = n, a = po.test(n);
		}
	} else t && e.removeAttribute("style");
	lo in e && (e[lo] = a ? r.display : "", e[uo] && (r.display = "none"));
}
var ho = /\s*!important$/;
function go(e, t, n) {
	if (p(n)) n.forEach((n) => go(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = yo(e, t);
		ho.test(n) ? e.setProperty(ae(r), n.replace(ho, ""), "important") : e[r] = n;
	}
}
var _o = [
	"Webkit",
	"Moz",
	"ms"
], vo = {};
function yo(e, t) {
	let n = vo[t];
	if (n) return n;
	let r = E(t);
	if (r !== "filter" && r in e) return vo[t] = r;
	r = oe(r);
	for (let n = 0; n < _o.length; n++) {
		let i = _o[n] + r;
		if (i in e) return vo[t] = i;
	}
	return t;
}
function bo(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && v(r) && n === r;
}
var xo = "http://www.w3.org/1999/xlink";
function So(e, t, n, r, i, a = ye(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(xo, t.slice(6, t.length)) : e.setAttributeNS(xo, t, n) : n == null || a && !be(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : y(n) ? String(n) : n);
}
function Co(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? to(n) : n);
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
function wo(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function To(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Eo = /* @__PURE__ */ Symbol("_vei");
function Do(e, t, n, r, i = null) {
	let a = e[Eo] || (e[Eo] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = ko(t);
		r ? wo(e, n, a[t] = No(r, i), s) : o && (To(e, n, o, s), a[t] = void 0);
	}
}
var Oo = /(?:Once|Passive|Capture)$/;
function ko(e) {
	let t;
	if (Oo.test(e)) {
		t = {};
		let n;
		for (; n = e.match(Oo);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : ae(e.slice(2)), t];
}
var Ao = 0, jo = /* @__PURE__ */ Promise.resolve(), Mo = () => Ao ||= (jo.then(() => Ao = 0), Date.now());
function No(e, t) {
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
				e && yn(e, t, 5, a);
			}
		} else yn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = Mo(), n;
}
var Po = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Fo = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? co(e, r, o) : t === "style" ? mo(e, n, r) : s(t) ? c(t) || Do(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Io(e, t, r, o)) ? (Co(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && So(e, t, r, o, a, t !== "value")) : e._isVueCE && (Lo(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !v(r))) ? Co(e, E(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), So(e, t, r, o));
};
function Io(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Po(t) && _(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Po(t) && v(n) ? !1 : t in e;
}
function Lo(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = E(t);
	return Array.isArray(n) ? n.some((e) => E(e) === r) : Object.keys(n).some((e) => E(e) === r);
}
var Ro = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return p(t) ? (e) => ce(t, e) : t;
};
function zo(e) {
	e.target.composing = !0;
}
function Bo(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var Vo = /* @__PURE__ */ Symbol("_assign");
function Ho(e, t, n) {
	return t && (e = e.trim()), n && (e = ue(e)), e;
}
var Uo = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[Vo] = Ro(i);
		let a = r || i.props && i.props.type === "number";
		wo(e, t ? "change" : "input", (t) => {
			t.target.composing || e[Vo](Ho(e.value, n, a));
		}), (n || a) && wo(e, "change", () => {
			e.value = Ho(e.value, n, a);
		}), t || (wo(e, "compositionstart", zo), wo(e, "compositionend", Bo), wo(e, "change", Bo));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[Vo] = Ro(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? ue(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, Wo = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = h(t);
		wo(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? ue(Ko(e)) : Ko(e));
			e[Vo](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, kn(() => {
				e._assigning = !1;
			});
		}), e[Vo] = Ro(r);
	},
	mounted(e, { value: t }) {
		Go(e, t);
	},
	beforeUpdate(e, t, n) {
		e[Vo] = Ro(n);
	},
	updated(e, { value: t }) {
		e._assigning || Go(e, t);
	}
};
function Go(e, t) {
	let n = e.multiple, r = p(t);
	if (!(n && !r && !h(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = Ko(a);
			if (n) if (r) {
				let e = typeof o;
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = Ce(t, o) > -1;
			} else a.selected = t.has(o);
			else if (Se(Ko(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function Ko(e) {
	return "_value" in e ? e._value : e.value;
}
var qo = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], Jo = {
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
	exact: (e, t) => qo.some((n) => e[`${n}Key`] && !t.includes(n))
}, Yo = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = Jo[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, Xo = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, Zo = (e, t) => {
	let n = e._withKeys ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = ae(n.key);
		if (t.some((e) => e === r || Xo[e] === r)) return e(n);
	}));
}, Qo = /* @__PURE__ */ l({ patchProp: Fo }, oo), $o;
function es() {
	return $o ||= Xi(Qo);
}
var ts = ((...e) => {
	let t = es().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = rs(e);
		if (!r) return;
		let i = t._component;
		!_(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, ns(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function ns(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function rs(e) {
	return v(e) ? document.querySelector(e) : e;
}
//#endregion
//#region src/functions/species-builder/config-keys.ts
function is(e) {
	return e.trim().toLocaleLowerCase().replaceAll(/[^\da-z]+/g, "-").replaceAll(/^-+|-+$/g, "");
}
//#endregion
//#region src/functions/species-builder/editor/field-values.ts
function as(e) {
	let t = e.split(/\r?\n/).map((e) => e.trim()).filter((e) => e.length > 0);
	return t.length > 0 ? t : void 0;
}
function os(e) {
	let t = ms(e).flatMap(([e, t]) => t ? [[e, t]] : []);
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function ss(e) {
	let t = ms(e).flatMap(([e, t]) => {
		let n = ps(t);
		return n === void 0 ? [] : [[e, n]];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function cs(e) {
	let t = ms(e).flatMap(([e, t]) => {
		let n = t.split(",").map((e) => e.trim()).filter((e) => e.length > 0);
		return n.length > 0 ? [[e, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function ls(e) {
	let t = e.trim();
	return t.length > 0 ? t : void 0;
}
function us(e) {
	return e.length > 0 ? e : void 0;
}
function ds(e) {
	let t = ls(e);
	return t ? { formula: t } : void 0;
}
function fs(e) {
	let t = e.map((e) => {
		let t = { name: e.name }, n = ls(e.journalUuid ?? "");
		return n && (t.journalUuid = n), t;
	});
	return t.length > 0 ? { rows: t } : void 0;
}
function ps(e) {
	let t = e.trim();
	if (!t) return;
	let n = Number(t);
	return Number.isFinite(n) ? n : void 0;
}
function ms(e) {
	return e.split(/\r?\n/).flatMap((e) => {
		let t = e.indexOf(":");
		if (t < 0) return [];
		let n = e.slice(0, t).trim(), r = e.slice(t + 1).trim();
		return n ? [[n, r]] : [];
	});
}
//#endregion
//#region src/functions/species-builder/editor/draft.ts
function hs(e, t) {
	return e === "careerReplacements" ? cs(t) : e === "randomTalents" ? ss(t) : os(t);
}
function gs(e, t) {
	return e === "randomTalents" ? ss(t) : os(t);
}
function G(e, t, n) {
	let r = { ...e };
	return n === void 0 ? delete r[t] : r[t] = n, r;
}
function _s(e) {
	let t = /* @__PURE__ */ new Set();
	return e.map((e) => {
		let n = Ts(e);
		return ys(e) ? (n.key = e.key.trim(), e.subspecies && (n.subspecies = vs(e.subspecies, e.runtimeSubspeciesCount)), n) : (n.key = bs(e.key, e.name, "new-species", t), e.subspecies && (n.subspecies = vs(e.subspecies)), n);
	});
}
function vs(e, t = 0) {
	let n = new Set(e.slice(0, t).map(({ key: e }) => e.trim()).filter(Boolean));
	return e.map((e, r) => ({
		...Ts(e),
		key: r < t ? e.key.trim() : bs(e.key, e.name, "new-subspecies", n)
	}));
}
function ys(e) {
	return "origin" in e && e.origin === "runtime";
}
function bs(e, t, n, r) {
	let i = is(e);
	if (i) return r.add(i), i;
	let a = xs(is(t) || n, r);
	return r.add(a), a;
}
function xs(e, t) {
	if (!t.has(e)) return e;
	let n = 2, r = `${e}-${n}`;
	for (; t.has(r);) n += 1, r = `${e}-${n}`;
	return r;
}
function Ss(e) {
	return JSON.stringify(Cs(e));
}
function Cs(e) {
	return Array.isArray(e) ? e.map(Cs) : e && typeof e == "object" ? Object.fromEntries(Object.entries(e).sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [e, Cs(t)])) : e;
}
function ws(e) {
	return JSON.stringify(e, null, 2);
}
function Ts(e) {
	return JSON.parse(JSON.stringify(e));
}
function Es(e) {
	return e instanceof Error ? e.message : "Unknown Species Builder error.";
}
//#endregion
//#region node_modules/pinia/dist/pinia.mjs
var Ds = typeof window < "u", Os, ks = (e) => Os = e, As = Symbol();
function js(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Ms;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Ms ||= {});
var Ns = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Ps(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function Fs(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		Bs(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function Is(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function Ls(e) {
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
var Rs = typeof navigator == "object" ? navigator : { userAgent: "" }, zs = /Macintosh/.test(Rs.userAgent) && /AppleWebKit/.test(Rs.userAgent) && !/Safari/.test(Rs.userAgent), Bs = Ds ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !zs ? Vs : "msSaveOrOpenBlob" in Rs ? Hs : Us : () => {};
function Vs(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? Ls(r) : Is(r.href) ? Fs(e, t, n) : (r.target = "_blank", Ls(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		Ls(r);
	}, 0));
}
function Hs(e, t = "download", n) {
	if (typeof e == "string") if (Is(e)) Fs(e, t, n);
	else {
		let t = document.createElement("a");
		t.href = e, t.target = "_blank", setTimeout(function() {
			Ls(t);
		});
	}
	else navigator.msSaveOrOpenBlob(Ps(e, n), t);
}
function Us(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return Fs(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(Ns.HTMLElement)) || "safari" in Ns, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || zs) && typeof FileReader < "u") {
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
var { assign: Ws } = Object;
function Gs() {
	let e = ke(!0), t = e.run(() => /* @__PURE__ */ j({})), n = [], r = [], i = Xt({
		install(e) {
			ks(i), i._a = e, e.provide(As, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var Ks = () => {};
function qs(e, t, n, r = Ks) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && Ae() && je(i), i;
}
function Js(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var Ys = (e) => e(), Xs = Symbol(), Zs = Symbol();
function Qs(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		js(i) && js(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ $t(r) && !/* @__PURE__ */ Kt(r) ? e[n] = Qs(i, r) : e[n] = r;
	}
	return e;
}
var $s = Symbol();
function ec(e) {
	return !js(e) || !Object.prototype.hasOwnProperty.call(e, $s);
}
var { assign: tc } = Object;
function nc(e) {
	return !!(/* @__PURE__ */ $t(e) && e.effect);
}
function rc(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), tc(/* @__PURE__ */ an(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Xt(W(() => {
			ks(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = ic(e, l, t, n, r, !0), c;
}
function ic(e, t, n = {}, r, i, a) {
	let o, s = tc({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = r.state.value[e];
	!a && !p && (r.state.value[e] = {});
	let m;
	function h(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: Ms.patchFunction,
			storeId: e,
			events: void 0
		}) : (Qs(r.state.value[e], t), n = {
			type: Ms.patchObject,
			payload: t,
			storeId: e,
			events: void 0
		});
		let i = m = Symbol();
		kn().then(() => {
			m === i && (l = !0);
		}), u = !0, Js(d, n, r.state.value[e]);
	}
	let g = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			tc(e, t);
		});
	} : Ks;
	function _() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let v = (t, n = "") => {
		if (Xs in t) return t[Zs] = n, t;
		let i = function() {
			ks(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			Js(f, {
				args: n,
				name: i[Zs],
				store: y,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : y, n);
			} catch (e) {
				throw Js(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (Js(a, e), e)).catch((e) => (Js(o, e), Promise.reject(e))) : (Js(a, l), l);
		};
		return i[Xs] = !0, i[Zs] = n, i;
	}, y = /* @__PURE__ */ Ht({
		_p: r,
		$id: e,
		$onAction: qs.bind(null, f),
		$patch: h,
		$reset: g,
		$subscribe(t, n = {}) {
			let i = qs(d, t, n.detached, () => a()), a = o.run(() => Jn(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: Ms.direct,
					events: void 0
				}, r);
			}, tc({}, c, n)));
			return i;
		},
		$dispose: _
	});
	r._s.set(e, y);
	let b = (r._a && r._a.runWithContext || Ys)(() => r._e.run(() => (o = ke()).run(() => t({ action: v }))));
	for (let t in b) {
		let n = b[t];
		/* @__PURE__ */ $t(n) && !nc(n) || /* @__PURE__ */ Kt(n) ? a || (p && ec(n) && (/* @__PURE__ */ $t(n) ? n.value = p[t] : Qs(n, p[t])), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = v(n, t), s.actions[t] = n);
	}
	return tc(y, b), tc(/* @__PURE__ */ A(y), b), Object.defineProperty(y, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			h((t) => {
				tc(t, e);
			});
		}
	}), r._p.forEach((e) => {
		tc(y, o.run(() => e({
			store: y,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), p && a && n.hydrate && n.hydrate(y.$state, p), l = !0, u = !0, y;
}
function ac(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Gn();
		return n ||= o ? Wn(As, null) : null, n && ks(n), n = Os, n._s.has(e) || (i ? ic(e, t, r, n) : rc(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
function oc(e) {
	let t = /* @__PURE__ */ A(e), n = {};
	for (let r in t) {
		let i = t[r];
		i.effect ? n[r] = W({
			get: () => e[r],
			set(t) {
				e[r] = t;
			}
		}) : (/* @__PURE__ */ $t(i) || /* @__PURE__ */ Kt(i)) && (n[r] = /* @__PURE__ */ cn(e, r));
	}
	return n;
}
//#endregion
//#region src/shared/assign-if-present.ts
function K(e, t, n) {
	n !== void 0 && (e[t] = n);
}
//#endregion
//#region src/functions/species-builder/item-reference-names.ts
function sc(e) {
	return lc(e.name, e.specification);
}
function cc(e) {
	let t = e.name.trim();
	if (!e.item) return t;
	if (!t) return sc(e.item);
	if (!dc(t)) {
		if (e.item.specification) return lc(t, e.item.specification);
		if (dc(e.item.name) && fc(t) === fc(e.item.name)) return e.item.name.trim();
	}
	return t;
}
function lc(e, t) {
	let n = e.trim(), r = t?.trim();
	return !n || !r || uc(n) ? n : `${n} (${r})`;
}
function uc(e) {
	return /\(([^()]*)\)\s*$/.exec(e.trim())?.[1]?.trim() ?? "";
}
function dc(e) {
	return /\([^()]*\)\s*$/.test(e.trim());
}
function fc(e) {
	return e.split("(")[0]?.trim().toLocaleLowerCase() ?? "";
}
//#endregion
//#region src/functions/species-builder/replacement-row-records.ts
function pc(e) {
	if (!e) return;
	let t = e.flatMap((e) => {
		let t = cc(e.rolled), n = cc(e.replacement);
		return t && n ? [[t, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function mc(e) {
	if (!e) return;
	let t = e.flatMap((e) => {
		let t = cc(e.rolled), n = e.replacements.map(cc).filter((e) => e.length > 0);
		return t && n.length > 0 ? [[t, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
//#endregion
//#region src/functions/species-builder/linked-grant-records.ts
function hc(e) {
	if (!e || e.length === 0) return;
	let t = e.map(cc).filter((e) => e.length > 0);
	return t.length > 0 ? t : void 0;
}
function gc(e) {
	if (!e || e.length === 0) return;
	let t = e.flatMap((e) => {
		let t = e.choices.map(cc).filter((e) => e.length > 0);
		return t.length > 0 ? [t.join(", ")] : [];
	});
	return t.length > 0 ? t : void 0;
}
//#endregion
//#region src/functions/species-builder/subspecies-list-fields.ts
function _c(e) {
	return hc(e.linkedSkills) ?? e.skills;
}
function vc(e, t) {
	return Ec(_c(e), t.skillsAdded, t.skillsRemoved);
}
function yc(e, t) {
	return vc(e, t) ?? _c(e) ?? [];
}
function bc(e) {
	return gc(e.linkedTalents) ?? e.talents;
}
function xc(e, t) {
	return Ec(bc(e), t.talentsAdded, t.talentsRemoved);
}
function Sc(e, t) {
	return Tc(hc(e.linkedTraits) ?? e.traits, t);
}
function Cc(e, t, n = {}) {
	let r = n.subspecies ?? n.parent, i = Ec(Sc(e), t.traitsAdded, t.traitsRemoved);
	return i ? Tc(i, r) : n.subspecies ? Tc(Sc(e), n.subspecies) : void 0;
}
function wc(e, t, n = {}) {
	return Cc(e, t, n) ?? Sc(e, n.parent) ?? [];
}
function Tc(e, t) {
	if (!t) return e;
	let n = e ? [...e] : [];
	return n.includes(t) || n.push(t), n;
}
function Ec(e, t, n) {
	if (!t && !n) return;
	let r = new Set(n ?? []), i = (e ?? []).filter((e) => !r.has(e));
	for (let e of t ?? []) i.includes(e) || i.push(e);
	return i;
}
//#endregion
//#region src/functions/species-builder/definition-plans.ts
function Dc(e, t = []) {
	let n = new Map(t.map((e) => [e.key.trim(), e])), r = e.definitions.flatMap((e) => n.has(e.key.trim()) ? [] : [{
		definition: e,
		emitBaseDefinition: !0,
		subspecies: e.subspecies ?? []
	}]), i = (e.runtimeSpeciesExtensions ?? []).flatMap((e) => {
		let t = n.get(e.speciesKey.trim());
		if (!t) return [];
		let r = new Set((t.subspecies ?? []).map((e) => e.key.trim())), i = e.subspecies.filter((e) => !r.has(e.key.trim()));
		return i.length > 0 ? [{
			definition: t,
			emitBaseDefinition: !1,
			subspecies: i
		}] : [];
	});
	return [...r, ...i];
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
}, Oc = {
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
}, kc = {
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
function Ac(e) {
	return e in Oc;
}
//#endregion
//#region src/functions/species-builder/wound-formula/compiler.ts
function jc(e) {
	let t = [], n = /* @__PURE__ */ new Set(), r = e.trim();
	return r = r.replaceAll(/@([A-Za-z][\dA-Za-z]*)/g, (e, t) => {
		let r = Mc(t);
		return n.add(r), r;
	}), r = r.replaceAll(/{([^{}]+)}/g, (e, n) => Nc(t, n, "total")), r = r.replaceAll(/\[([^[\]]+)]/g, (e, n) => Nc(t, n, "bonus")), {
		expression: r,
		references: t,
		usedKeywords: n
	};
}
function Mc(e) {
	if ((/* @__PURE__ */ "ablaze.advantage.age.bleeding.blinded.broken.corruption.deafened.entangled.fate.fatigued.fortune.height.poisoned.rank.resilience.resolve.sb.sbMultiplier.scale.sin.size.status.stunned.tb.tbMultiplier.weight.wpb.wpbMultiplier.xp".split(".")).includes(e)) return e;
	throw Error(`Unknown wound formula keyword: @${e}`);
}
function Nc(e, t, n) {
	let r = Pc(t, n, e), i = e.find((e) => Fc(e, r));
	return i ? i.variableName : (e.push(r), r.variableName);
}
function Pc(e, t, n) {
	let [r, i] = Ic(e), a = Lc(r), o = Vc(Bc(r, i, t), n);
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
	return i && (s.characteristicOverride = Rc(i)), s;
}
function Fc(e, t) {
	return e.characteristicKey === t.characteristicKey && e.characteristicOverride === t.characteristicOverride && e.kind === t.kind && e.name === t.name && e.source === t.source;
}
function Ic(e) {
	let t = e.split("|").map((e) => e.trim());
	if (t.length > 2 || !t[0]) throw Error(`Invalid wound formula attribute reference: ${e}`);
	return [t[0], t[1]];
}
function Lc(e) {
	let t = e.trim().toLocaleLowerCase();
	return Ac(t) ? t : kc[t] ?? zc[t];
}
function Rc(e) {
	let t = Lc(e);
	if (!t) throw Error(`Unknown wound formula characteristic: ${e}`);
	return t;
}
var zc = {
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
function Bc(e, t, n) {
	let [r, ...i] = [e, t].flatMap((e) => e ? e.match(/\d+|[A-Za-z]+/g) ?? [] : []), a = r ? [r.toLocaleLowerCase(), ...i.map((e) => e.charAt(0).toLocaleUpperCase() + e.slice(1))].join("") : "attribute";
	return n === "bonus" ? `${a}Bonus` : a;
}
function Vc(e, t) {
	let n = new Set(t.map((e) => e.variableName));
	if (!n.has(e)) return e;
	let r = 2, i = `${e}${r}`;
	for (; n.has(i);) r += 1, i = `${e}${r}`;
	return i;
}
//#endregion
//#region src/functions/species-builder/wound-formula/script-lines.ts
function Hc(e) {
	let t = [];
	if (Gc(e, [
		"sb",
		"tb",
		"wpb"
	]) && (t.push(...Kc(e, "sb", "preWoundArgs.sb")), t.push(...Kc(e, "tb", "preWoundArgs.tb")), t.push(...Kc(e, "wpb", "preWoundArgs.wpb"))), Gc(e, [
		"sbMultiplier",
		"tbMultiplier",
		"wpbMultiplier"
	]) && (t.push("const multiplier = preWoundArgs.multiplier;"), t.push(...Kc(e, "sbMultiplier", "multiplier.sb")), t.push(...Kc(e, "tbMultiplier", "multiplier.tb")), t.push(...Kc(e, "wpbMultiplier", "multiplier.wpb"))), Gc(e, ["scale", "size"]) && (t.push(...qc()), t.push("const size = actorSizeStep();"), t.push(...Kc(e, "scale", "2 ** size"))), Gc(e, Qc) && (t.push(...Kc(e, "age", "Number(actor.system.details.age.value)")), t.push(...Kc(e, "height", "Number(actor.system.details.height.value)")), t.push(...Kc(e, "weight", "Number(actor.system.details.weight.value)")), t.push(...tl(e))), Gc(e, $c) && (t.push(...Kc(e, "xp", "actor.system.details.experience.total")), t.push(...Kc(e, "fate", "actor.system.status.fate.value")), t.push(...Kc(e, "fortune", "actor.system.status.fortune.value")), t.push(...Kc(e, "resilience", "actor.system.status.resilience.value")), t.push(...Kc(e, "resolve", "actor.system.status.resolve.value")), t.push(...Kc(e, "corruption", "actor.system.status.corruption.value")), t.push(...Kc(e, "sin", "actor.system.status.sin.value")), t.push(...Kc(e, "advantage", "actor.system.status.advantage.value"))), Gc(e, el)) {
		t.push(...nl());
		for (let n of el) t.push(...Kc(e, n, `conditionValue("${n}")`));
	}
	return t.length ? [...t, ""] : [];
}
function Uc(e) {
	let t = e.length > 0, n = e.some((e) => e.source === "skill");
	return [...Jc(t), ...Yc(n)];
}
function Wc(e) {
	return e.map((e) => e.source === "characteristic" ? Xc(e) : Zc(e));
}
function Gc(e, t) {
	return t.some((t) => e.has(t));
}
function Kc(e, t, n) {
	return e.has(t) ? [`const ${t} = ${n};`] : [];
}
function qc() {
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
function Jc(e) {
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
function Yc(e) {
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
function Xc(e) {
	let t = e.kind === "bonus" ? "characteristicBonus" : "characteristicTotal";
	return `const ${e.variableName} = ${t}(${JSON.stringify(e.characteristicKey)});`;
}
function Zc(e) {
	let t = e.kind === "bonus" ? "skillBonus" : "skillTotal", n = e.characteristicOverride ? JSON.stringify(e.characteristicOverride) : "undefined";
	return `const ${e.variableName} = ${t}(${JSON.stringify(e.name)}, ${n});`;
}
var Qc = [
	"age",
	"height",
	"rank",
	"status",
	"weight"
], $c = [
	"advantage",
	"corruption",
	"fate",
	"fortune",
	"resilience",
	"resolve",
	"sin",
	"xp"
], el = [
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
function tl(e) {
	let t = [];
	return e.has("status") && t.push("function statusTierValue() {", "  const statusTiers = { brass: 1, silver: 2, gold: 3 };", "  const tier = actor.system.details.status.tier;", "  return statusTiers[String(tier).toLocaleLowerCase()] || Number(tier);", "}", "const status = statusTierValue();"), t.push(...Kc(e, "rank", "Number(actor.system.details.status.standing)")), t;
}
function nl() {
	return [
		"function conditionValue(key) {",
		"  return actor.hasCondition(key)?.conditionValue || 0;",
		"}"
	];
}
//#endregion
//#region src/functions/species-builder/wound-formula/index.ts
function rl(e) {
	let t = jc(e);
	return [
		...Hc(t.usedKeywords),
		...Uc(t.references),
		...Wc(t.references),
		"",
		`args.wounds = ${t.expression};`
	];
}
//#endregion
//#region src/functions/species-builder/wound-formula-traits.ts
var il = "generatedSpeciesWoundFormulaEffect", al = "generatedSpeciesWoundFormulaTrait";
function ol(e, t = []) {
	return Dc(e, t).flatMap((e) => [...e.emitBaseDefinition ? ml(e.definition) : [], ...hl(e.definition, e.subspecies)]);
}
function sl(e) {
	return `__${e.name.trim()}__`;
}
function cl(e, t) {
	return `__${e.name.trim()} / ${t.name.trim()}__`;
}
function ll({ flagScope: e, spec: t }) {
	return {
		effects: [ul({
			flagScope: e,
			spec: t
		})],
		flags: { [e]: { [al]: {
			speciesKey: t.speciesKey,
			subspeciesKey: t.subspeciesKey ?? ""
		} } },
		img: "icons/svg/aura.svg",
		name: t.name,
		system: { description: { value: pl(t) } },
		type: "trait"
	};
}
function ul({ flagScope: e, spec: t }) {
	return {
		changes: [],
		disabled: !1,
		flags: { [e]: { [il]: {
			speciesKey: t.speciesKey,
			subspeciesKey: t.subspeciesKey ?? ""
		} } },
		img: "icons/svg/aura.svg",
		name: `${t.ownerName} Wound Formula`,
		system: {
			scriptData: [{
				label: `${t.ownerName} Wound Formula Capture`,
				script: dl(),
				trigger: "preWoundCalc"
			}, {
				label: `${t.ownerName} Wound Formula`,
				script: fl(t),
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
function dl() {
	return [
		"// Generated by WFRP4e Customizer Apps.",
		"const storageKey = \"__wfrp4eCustomizerWoundFormulaArgs\";",
		"const sourceId = this.item?.id || this.effect.id;",
		"this.actor[storageKey] ||= {};",
		"this.actor[storageKey][sourceId] = args;"
	].join("\n");
}
function fl(e) {
	return [
		"// Generated by WFRP4e Customizer Apps.",
		"const storageKey = \"__wfrp4eCustomizerWoundFormulaArgs\";",
		"const sourceId = this.item?.id || this.effect.id;",
		"const preWoundArgs = this.actor[storageKey][sourceId];",
		"const actor = this.actor;",
		"",
		...rl(e.formula)
	].join("\n");
}
function pl(e) {
	return ["<p>Generated by WFRP4e Customizer Apps. This Trait applies a custom Species Builder wound formula.</p>", `<p>${gl(e.formula)}</p>`].join("");
}
function ml(e) {
	return e.woundFormula?.formula ? [{
		formula: e.woundFormula.formula,
		name: sl(e),
		ownerName: e.name,
		speciesKey: e.key
	}] : [];
}
function hl(e, t) {
	return t.flatMap((t) => t.woundFormula?.formula ? [{
		formula: t.woundFormula.formula,
		name: cl(e, t),
		ownerName: `${e.name} / ${t.name}`,
		speciesKey: e.key,
		subspeciesKey: t.key
	}] : []);
}
function gl(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
//#endregion
//#region src/functions/species-builder/species-config.ts
function _l(e, t = []) {
	let n = vl();
	for (let r of Dc(e, t)) r.emitBaseDefinition && yl(n, r.definition), bl(n, r.definition, r.subspecies);
	return n;
}
function vl() {
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
function yl(e, t) {
	e.species[t.key] = t.name, K(e.speciesCharacteristics, t.key, t.characteristics), e.speciesSkills[t.key] = _c(t) ?? [], e.speciesTalents[t.key] = bc(t) ?? [], K(e.speciesRandomTalents, t.key, t.randomTalents), K(e.speciesTalentReplacement, t.key, wl(t)), K(e.speciesTraits, t.key, Sc(t, t.woundFormula ? sl(t) : void 0)), K(e.speciesMovement, t.key, t.movement), K(e.speciesFate, t.key, t.fate), K(e.speciesRes, t.key, t.resilience), K(e.speciesExtra, t.key, t.extra), K(e.speciesAge, t.key, t.age), K(e.speciesHeight, t.key, t.height), K(e.speciesCareerReplacements, t.key, Tl(t)), t.includeInExtraSpecies && e.extraSpecies.push(t.key);
}
function bl(e, t, n) {
	for (let r of n) {
		let n = e.subspecies[t.key] ?? {}, i = r.woundFormula ? cl(t, r) : void 0, a = r.careerTable ? Cl(t, r) : void 0;
		n[r.key] = xl(t, r, i, a), e.subspecies[t.key] = n;
	}
}
function xl(e, t, n, r) {
	let i = { name: t.name };
	return K(i, "characteristics", t.characteristics ? {
		...e.characteristics,
		...t.characteristics
	} : void 0), K(i, "skills", vc(e, t)), K(i, "talents", xc(e, t)), K(i, "speciesTraits", Cc(e, t, {
		parent: e.woundFormula ? sl(e) : void 0,
		subspecies: n
	})), K(i, "randomTalents", t.randomTalents), K(i, "talentReplacement", wl(t)), K(i, "movement", t.movement), K(i, "fate", t.fate), K(i, "resilience", t.resilience), K(i, "extra", t.extra), K(i, "careerTable", r), i;
}
function Sl(e) {
	return e.key;
}
function Cl(e, t) {
	return `${e.key}-${t.key}`;
}
function wl(e) {
	return pc(e.talentReplacementRows) ?? e.talentReplacements;
}
function Tl(e) {
	return mc(e.careerReplacementRows) ?? e.careerReplacements;
}
//#endregion
//#region src/functions/species-builder/editing-definitions.ts
function El(e, t, n) {
	let r = e.map(Ol), i = Ml(n), a = /* @__PURE__ */ new Set(), o = t.flatMap((e) => {
		let t = Nl(e.key);
		if (!t || a.has(t)) return [];
		a.add(t);
		let n = Ts(e.subspecies ?? []), r = i.get(t)?.flatMap((e) => Ts(e.subspecies));
		return [{
			...Ts(e),
			origin: "runtime",
			runtimeSubspeciesCount: n.length,
			subspecies: Pl([...n, ...r ?? []])
		}];
	}), s = [...i.entries()].flatMap(([e, t]) => {
		if (a.has(e)) return [];
		let n = t[0];
		return n ? [{
			includeInExtraSpecies: !1,
			key: n.speciesKey,
			name: n.speciesName,
			origin: "runtime",
			runtimeSubspeciesCount: 0,
			runtimeUnavailable: !0,
			subspecies: Pl(t.flatMap((e) => Ts(e.subspecies)))
		}] : [];
	});
	return [
		...r,
		...o,
		...s
	];
}
function Dl(e) {
	let t = [], n = [];
	for (let r of e) {
		if (r.origin === "custom") {
			t.push(jl(r));
			continue;
		}
		let e = Ts((r.subspecies ?? []).slice(r.runtimeSubspeciesCount));
		e.length > 0 && n.push({
			speciesKey: r.key,
			speciesName: r.name,
			subspecies: e
		});
	}
	return {
		definitions: t,
		runtimeSpeciesExtensions: n
	};
}
function Ol(e) {
	return {
		...jl(e),
		origin: "custom",
		runtimeSubspeciesCount: 0
	};
}
function kl(e) {
	return e?.origin === "custom";
}
function Al(e, t) {
	return e !== void 0 && t >= 0 && (e.origin === "custom" || t >= e.runtimeSubspeciesCount);
}
function jl(e) {
	let t = Ts(e);
	return delete t.origin, delete t.runtimeSubspeciesCount, delete t.runtimeUnavailable, t;
}
function Ml(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = Nl(n.speciesKey);
		e && t.set(e, [...t.get(e) ?? [], n]);
	}
	return t;
}
function Nl(e) {
	return e.trim();
}
function Pl(e) {
	return e.length > 0 ? e : void 0;
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
function Fl(e, t) {
	let n = Y(e, t);
	return Array.isArray(n) ? n.filter((e) => typeof e == "string") : [];
}
function Il(e, t, n = 0) {
	return Ll(e, t) ?? n;
}
function Ll(e, t) {
	for (let n of t) {
		let t = Number(Y(e, n));
		if (Number.isFinite(t)) return t;
	}
	return null;
}
function Rl(e, t, n = !1) {
	for (let n of t) {
		let t = Y(e, n);
		if (typeof t == "boolean") return t;
	}
	return n;
}
function zl(e) {
	return Array.isArray(e) ? e.flatMap(zl) : typeof e == "string" ? e.split(/[\n\r,;]/).map((e) => e.trim()).filter(Boolean) : J(e) ? Object.values(e).flatMap(zl) : [];
}
function Bl(e, t, n) {
	let r = e;
	for (let e of t.slice(0, -1)) {
		let t = r[e];
		J(t) || (r[e] = {}), r = r[e];
	}
	r[t[t.length - 1] ?? ""] = n;
}
//#endregion
//#region src/functions/species-builder/career-table-normalization.ts
function Vl(e) {
	if (!J(e)) return;
	let t = Hl(e.rows) ?? Ul(e.careers);
	return t ? { rows: t } : void 0;
}
function Hl(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!J(e)) return [];
		let t = Gl(e.name);
		if (!t) return [];
		let n = { name: t };
		return K(n, "journalUuid", Gl(e.journalUuid)), [n];
	});
	return t.length > 0 ? t : void 0;
}
function Ul(e) {
	return Wl(e)?.map((e) => ({ name: e }));
}
function Wl(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		let t = Gl(e);
		return t ? [t] : [];
	});
	return t.length > 0 ? t : void 0;
}
function Gl(e) {
	if (typeof e == "string") return e.trim() || void 0;
}
//#endregion
//#region src/functions/species-builder/replacement-row-normalization.ts
function Kl(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!J(e)) return [];
		let t = Jl(e.rolled, "talent"), n = Jl(e.replacement, "talent");
		return !t.name || !n.name ? [] : [{
			replacement: n,
			rolled: t
		}];
	});
	return t.length > 0 ? t : void 0;
}
function ql(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!J(e)) return [];
		let t = Jl(e.rolled, "career"), n = Array.isArray(e.replacements) ? e.replacements.flatMap((e) => {
			let t = Jl(e, "career");
			return t.name ? [t] : [];
		}) : [];
		return !t.name || n.length === 0 ? [] : [{
			replacements: n,
			rolled: t
		}];
	});
	return t.length > 0 ? t : void 0;
}
function Jl(e, t) {
	if (typeof e == "string") return { name: Zl(e) ?? "" };
	if (!J(e)) return { name: "" };
	let n = Yl(e.item, t), r = Zl(e.name) ?? n?.name ?? "";
	return n ? {
		item: n,
		name: r
	} : { name: r };
}
function Yl(e, t) {
	if (!J(e)) return;
	let n = Zl(e.name), r = Xl(e.type), i = Zl(e.uuid);
	if (!n || r !== t || !i) return;
	let a = {
		name: n,
		type: r,
		uuid: i
	}, o = Zl(e.specification) ?? Zl(e.specifier);
	o && (a.specification = o);
	let s = Zl(e.img);
	return s && (a.img = s), a;
}
function Xl(e) {
	return e === "career" || e === "skill" || e === "talent" || e === "trait" ? e : void 0;
}
function Zl(e) {
	if (typeof e == "string") return e.trim() || void 0;
}
//#endregion
//#region src/functions/species-builder/linked-grant-normalization.ts
function Ql(e, t) {
	if (!Array.isArray(e)) return;
	let n = e.flatMap((e) => {
		let n = Jl(e, t);
		return n.name ? [n] : [];
	});
	return n.length > 0 ? n : void 0;
}
function $l(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!J(e) || !Array.isArray(e.choices)) return [];
		let t = e.choices.flatMap((e) => {
			let t = Jl(e, "talent");
			return t.name ? [t] : [];
		});
		return t.length > 0 ? [{ choices: t }] : [];
	});
	return t.length > 0 ? t : void 0;
}
//#endregion
//#region src/functions/species-builder/settings-normalization/values.ts
var eu = Object.values(q);
function tu(e) {
	return typeof e == "string" ? is(e) : "";
}
function nu(e) {
	if (typeof e == "string") return e.trim() || void 0;
}
function ru(e) {
	let t = Number(e);
	return Number.isFinite(t) ? t : void 0;
}
function iu(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		let t = nu(e);
		return t ? [t] : [];
	});
	return t.length > 0 ? t : void 0;
}
function au(e) {
	if (!J(e)) return;
	let t = Object.entries(e).flatMap(([e, t]) => {
		let n = nu(e), r = nu(t);
		return n && r ? [[n, r]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function ou(e) {
	if (!J(e)) return;
	let t = Object.entries(e).flatMap(([e, t]) => {
		let n = nu(e), r = ru(t);
		return n && r !== void 0 ? [[n, r]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function su(e) {
	if (!J(e)) return;
	let t = Object.entries(e).flatMap(([e, t]) => {
		let n = nu(e), r = iu(t);
		return n && r ? [[n, r]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function cu(e) {
	if (!J(e)) return;
	let t = eu.flatMap((t) => {
		let n = nu(e[t]);
		return n ? [[t, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function lu(e) {
	if (!J(e)) return;
	let t = {};
	return K(t, "die", nu(e.die)), K(t, "feet", ru(e.feet)), K(t, "inches", ru(e.inches)), Object.keys(t).length > 0 ? t : void 0;
}
function uu(e) {
	if (!J(e)) return;
	let t = nu(e.formula);
	return t ? { formula: t } : void 0;
}
//#endregion
//#region src/functions/species-builder/species-settings-normalization.ts
function du(e) {
	return !J(e) || !Array.isArray(e.definitions) ? {
		autoRegisterSpeciesTable: !1,
		definitions: [],
		runtimeSpeciesExtensions: [],
		showGeneratedConfigTab: !1
	} : {
		autoRegisterSpeciesTable: e.autoRegisterSpeciesTable === !0,
		definitions: e.definitions.flatMap(pu),
		runtimeSpeciesExtensions: fu(e.runtimeSpeciesExtensions),
		showGeneratedConfigTab: e.showGeneratedConfigTab === !0
	};
}
function fu(e) {
	return Array.isArray(e) ? e.flatMap((e) => {
		if (!J(e)) return [];
		let t = nu(e.speciesKey), n = nu(e.speciesName), r = mu(e.subspecies) ?? [];
		return t && n && r.length > 0 ? [{
			speciesKey: t,
			speciesName: n,
			subspecies: r
		}] : [];
	}) : [];
}
function pu(e) {
	return gu(e, (e, t, n) => ({
		includeInExtraSpecies: n.includeInExtraSpecies === !0,
		key: e,
		name: t
	})).map((t) => (_u(t, e), vu(t, e), t));
}
function mu(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap(hu);
	return t.length > 0 ? t : void 0;
}
function hu(e) {
	return gu(e, (e, t, n) => {
		let r = {
			key: e,
			name: t
		};
		return K(r, "skillsAdded", iu(n.skillsAdded)), K(r, "skillsRemoved", iu(n.skillsRemoved)), K(r, "talentsAdded", iu(n.talentsAdded)), K(r, "talentsRemoved", iu(n.talentsRemoved)), K(r, "traitsAdded", iu(n.traitsAdded)), K(r, "traitsRemoved", iu(n.traitsRemoved)), r;
	});
}
function gu(e, t) {
	if (!J(e)) return [];
	let n = tu(e.key), r = nu(e.name);
	if (!n || !r) return [];
	let i = t(n, r, e);
	return K(i, "characteristics", cu(e.characteristics)), K(i, "randomTalents", ou(e.randomTalents)), K(i, "talentReplacementRows", Kl(e.talentReplacementRows)), K(i, "talentReplacements", au(e.talentReplacements)), K(i, "movement", ru(e.movement)), K(i, "fate", ru(e.fate)), K(i, "resilience", ru(e.resilience)), K(i, "extra", ru(e.extra)), K(i, "woundFormula", uu(e.woundFormula)), K(i, "careerTable", Vl(e.careerTable)), [i];
}
function _u(e, t) {
	J(t) && (K(e, "skills", iu(t.skills)), K(e, "linkedSkills", Ql(t.linkedSkills, "skill")), K(e, "talents", iu(t.talents)), K(e, "linkedTalents", $l(t.linkedTalents)), K(e, "traits", iu(t.traits)), K(e, "linkedTraits", Ql(t.linkedTraits, "trait")));
}
function vu(e, t) {
	J(t) && (K(e, "age", nu(t.age)), K(e, "height", lu(t.height)), K(e, "careerReplacements", su(t.careerReplacements)), K(e, "careerReplacementRows", ql(t.careerReplacementRows)), K(e, "subspecies", mu(t.subspecies)));
}
//#endregion
//#region src/functions/species-builder/world-table.ts
var yu = "managedSpeciesTable";
function bu() {
	return {
		isRegistered: !1,
		name: "Species",
		ownership: "new",
		requiresLinkRepair: !1,
		rows: []
	};
}
function xu(e, t) {
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
function Su(e, t) {
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
function Cu(e, t, n) {
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
function wu(e) {
	let t = e.map((e) => Number.isInteger(e.weight) && e.weight > 0 ? e.weight : 0), n = t.reduce((e, t) => e + t, 0), r = 1;
	return t.map((e) => {
		let t = r, i = e > 0 ? t + e - 1 : t;
		return r = i + 1, {
			chance: n > 0 ? e / n : 0,
			range: [t, i]
		};
	});
}
function Tu(e, t, n) {
	let r = n.find((e) => e.label === t.trim());
	if (r) return r.key;
	let i = e.trim();
	return n.some((e) => e.key === i) ? i : "";
}
function Eu(e) {
	let t = /@UUID\[([^\]]+)\]\{([^}]*)\}/u.exec(e), n = t?.[1]?.trim() ?? "", r = t?.[2]?.trim() ?? "";
	return n && r ? {
		label: r,
		uuid: n
	} : void 0;
}
function Du(e) {
	let t = Y(e, ["range"]), n = Array.isArray(t) ? Number(t[0]) : 0, r = Array.isArray(t) ? Number(t[1]) : 0;
	if (Number.isInteger(n) && Number.isInteger(r) && r >= n) return r - n + 1;
	let i = Number(Y(e, ["weight"]));
	return Number.isInteger(i) && i > 0 ? i : 1;
}
function Ou(e) {
	return JSON.stringify(e.rows.map((e) => ({
		name: e.name.trim(),
		speciesKey: e.speciesKey.trim(),
		weight: e.weight
	})));
}
function ku(e, t) {
	let n = wu(e.rows), r = e.rows.reduce((e, t) => e + (Number.isInteger(t.weight) && t.weight > 0 ? t.weight : 0), 0);
	return {
		displayRoll: !0,
		flags: {
			wfrp4e: { key: "species" },
			[t]: { [yu]: !0 }
		},
		formula: `1d${Math.max(r, 1)}`,
		img: "systems/wfrp4e/ui/buttons/d10.webp",
		name: ju(e),
		replacement: !0,
		results: e.rows.map((e, t) => ({
			description: Au(e),
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
function Au(e) {
	let t = e.journalUuid?.trim() ?? "", n = e.name.trim();
	if (!t) throw Error(`Species "${n || e.speciesKey}" does not have a Journal link target.`);
	if (/[{}]/u.test(n)) throw Error(`Species "${n}" cannot be encoded in WFRP's UUID-link label.`);
	return `@UUID[${t}]{${n}}`;
}
function ju(e) {
	let t = e.name.trim() || "Species";
	return e.ownership === "external" && !t.includes("Species Builder") ? `${t} (Species Builder)` : t;
}
//#endregion
//#region src/functions/species-builder/editor/career-table-rows.ts
function Mu(e) {
	return [...e ?? [], { name: "" }];
}
function Nu(e, t) {
	return (e ?? []).filter((e, n) => n !== t);
}
function Pu(e, t, n) {
	return (e ?? []).map((e, r) => r === t ? Lu(e, n) : e);
}
function Fu(e, t, n) {
	let r = { name: n.name };
	return n.careerJournalUuid && (r.journalUuid = n.careerJournalUuid), Pu(e, t, r);
}
function Iu(e, t, n) {
	return Pu(e, t, { journalUuid: n });
}
function Lu(e, t) {
	let n = {
		...e,
		...t
	};
	return n.journalUuid || delete n.journalUuid, n;
}
//#endregion
//#region src/state/species-builder/career-table-drop-actions.ts
function Ru(e) {
	async function t(t, n) {
		let r = e.selectedDefinition.value;
		if (!r) return;
		let i = await e.resolveDroppedItem("career", n);
		e.definitionActions.updateCareerTableRows(Fu(r.careerTable?.rows, t, i));
	}
	async function n(t, n) {
		let r = e.selectedDefinition.value;
		if (!r) return;
		let i = await zu(e, n);
		e.definitionActions.updateCareerTableRows(Iu(r.careerTable?.rows, t, i.uuid));
	}
	async function r(t, n, r) {
		let i = e.selectedDefinition.value?.subspecies?.[t];
		if (!i) return;
		let a = await e.resolveDroppedItem("career", r);
		e.subspeciesActions.updateSubspeciesCareerTableRows(t, Fu(i.careerTable?.rows, n, a));
	}
	async function i(t, n, r) {
		let i = e.selectedDefinition.value?.subspecies?.[t];
		if (!i) return;
		let a = await zu(e, r);
		e.subspeciesActions.updateSubspeciesCareerTableRows(t, Iu(i.careerTable?.rows, n, a.uuid));
	}
	return {
		setCareerTableCareerDrop: t,
		setCareerTableJournalDrop: n,
		setSubspeciesCareerTableCareerDrop: r,
		setSubspeciesCareerTableJournalDrop: i
	};
}
async function zu(e, t) {
	try {
		return await e.bridge.resolveJournalDrop(t);
	} catch (t) {
		throw e.loadError.value = Es(t), t;
	}
}
//#endregion
//#region src/state/species-builder/bridge-access.ts
function Bu() {
	let e;
	function t() {
		if (!e) throw Error("Species Builder has not been connected to its Foundry bridge.");
		return e;
	}
	let n = {
		loadRandomTalentSources: () => t().loadRandomTalentSources(),
		loadRuntimeSpecies: () => t().loadRuntimeSpecies(),
		loadSettings: () => t().loadSettings(),
		loadSpeciesTable: () => t().loadSpeciesTable(),
		loadValidationCatalog: (e) => t().loadValidationCatalog(e),
		openItemSheet: (e) => t().openItemSheet(e),
		resolveItemDrop: (e, n) => t().resolveItemDrop(e, n),
		resolveJournalDrop: (e) => t().resolveJournalDrop(e),
		saveSettings: (e, n) => t().saveSettings(e, n),
		saveSpeciesTable: (e, n) => t().saveSpeciesTable(e, n)
	};
	function r(t) {
		e = t;
	}
	return {
		configure: r,
		configuredBridge: n,
		requireBridge: t
	};
}
//#endregion
//#region src/functions/species-builder/editor/definition-fields.ts
function Vu() {
	return {
		includeInExtraSpecies: !0,
		key: "",
		name: "New Species"
	};
}
function Hu(e, t) {
	let n = Ts(e);
	return n.key = Zu(`${n.key}-copy`, t), n.name = `${n.name} Copy`, n;
}
function Uu(e, t, n) {
	return G(e, t, us(n));
}
function Wu(e, t, n) {
	return G(e, t, ps(n));
}
function Gu(e, t, n) {
	let r = e.height ? { ...e.height } : {}, i = t === "die" ? ls(n) : ps(n);
	return i === void 0 ? delete r[t] : r[t] = i, G(e, "height", Object.keys(r).length > 0 ? r : void 0);
}
function Ku(e, t, n) {
	let r = e.characteristics ? { ...e.characteristics } : {}, i = ls(n);
	return i ? r[t] = i : delete r[t], G(e, "characteristics", Object.keys(r).length > 0 ? r : void 0);
}
function qu(e, t, n) {
	return G(e, t, as(n));
}
function Ju(e, t, n) {
	return G(e, t, hs(t, n));
}
function Yu(e, t) {
	return G(e, "woundFormula", ds(t));
}
function Xu(e, t) {
	return G(e, "careerTable", fs(t));
}
function Zu(e, t) {
	let n = new Set(t.map((e) => e.key));
	if (!n.has(e)) return e;
	let r = 2, i = `${e}-${r}`;
	for (; n.has(i);) r += 1, i = `${e}-${r}`;
	return i;
}
//#endregion
//#region src/state/species-builder/selected-definition.ts
function Qu(e, t, n = {}) {
	let r = e.definitions.value[e.selectedIndex.value];
	!r || !n.allowRuntimeBase && !kl(r) || (e.definitions.value = e.definitions.value.map((n, i) => i === e.selectedIndex.value ? {
		...t(Ts(r)),
		origin: r.origin,
		runtimeSubspeciesCount: r.runtimeSubspeciesCount,
		...r.runtimeUnavailable ? { runtimeUnavailable: !0 } : {}
	} : n), e.message.value = "");
}
//#endregion
//#region src/state/species-builder/definition-actions.ts
function $u(e) {
	function t() {
		r(Vu());
	}
	function n() {
		let t = e.selectedDefinition.value;
		kl(t) && r(Hu(t, e.definitions.value));
	}
	function r(e) {
		i([e]);
	}
	function i(t) {
		if (t.length === 0) return;
		let n = t.map(Ol), r = e.definitions.value.findIndex((e) => e.origin === "runtime"), i = r < 0 ? e.definitions.value.length : r;
		e.definitions.value = [
			...e.definitions.value.slice(0, i),
			...n,
			...e.definitions.value.slice(i)
		], e.selectedIndex.value = i + n.length - 1, e.message.value = "";
	}
	function a() {
		kl(e.selectedDefinition.value) && (e.definitions.value = e.definitions.value.filter((t, n) => n !== e.selectedIndex.value), e.selectedIndex.value = e.definitions.value.length === 0 ? -1 : Math.min(e.selectedIndex.value, e.definitions.value.length - 1), e.message.value = "");
	}
	function o(t) {
		e.selectedIndex.value = t;
	}
	function s(e, t) {
		g((n) => Uu(n, e, t));
	}
	function c(e, t) {
		g((n) => ({
			...n,
			[e]: t
		}));
	}
	function l(e, t) {
		g((n) => Wu(n, e, t));
	}
	function u(e, t) {
		g((n) => Gu(n, e, t));
	}
	function d(e, t) {
		g((n) => Ku(n, e, t));
	}
	function f(e, t) {
		g((n) => qu(n, e, t));
	}
	function p(e, t) {
		g((n) => Ju(n, e, t));
	}
	function m(e) {
		g((t) => Yu(t, e));
	}
	function h(e) {
		g((t) => Xu(t, e));
	}
	function g(t) {
		Qu(e, t);
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
function ed(e) {
	return e === "traits" ? "traits" : "skills";
}
function td(e, t) {
	return t && t.length > 0 ? t.map(gd) : (e ?? []).map((e) => ({ name: e }));
}
function nd(e, t) {
	return t && t.length > 0 ? t.map((e) => ({ choices: e.choices.map(gd) })) : (e ?? []).map((e) => ({ choices: hd(e).map((e) => ({ name: e })) }));
}
function rd(e) {
	return e.map(cc).filter((e) => e.length > 0);
}
function id(e) {
	return e.flatMap((e) => {
		let t = rd(e.choices);
		return t.length > 0 ? [t.join(", ")] : [];
	});
}
function ad(e, t, n) {
	return e.map((e, r) => r === t ? { name: n } : gd(e));
}
function od(e, t, n) {
	return e.map((e, r) => r === t ? {
		item: n,
		name: sc(n)
	} : gd(e));
}
function sd(e, t, n, r) {
	return e.map((e, i) => i === t ? { choices: ad(e.choices, n, r) } : _d(e));
}
function cd(e, t, n, r) {
	return e.map((e, i) => i === t ? { choices: od(e.choices, n, r) } : _d(e));
}
function ld(e, t) {
	let n = t === "skills" ? "New Skill" : "New Trait";
	return [...e.map(gd), { name: n }];
}
function ud(e, t) {
	return e.filter((e, n) => n !== t).map(gd);
}
function dd(e, t) {
	let n = [{ name: "New Talent" }];
	return t === "choice" && n.push({ name: "Alternative Talent" }), [...e.map(_d), { choices: n }];
}
function fd(e, t) {
	return e.map((e, n) => n === t ? { choices: [...e.choices.map(gd), { name: "Alternative Talent" }] } : _d(e));
}
function pd(e, t) {
	return e.filter((e, n) => n !== t).map(_d);
}
function md(e, t, n) {
	let r = e[t];
	return !r || r.choices.length === 1 ? pd(e, t) : e.map((e, r) => r === t ? { choices: e.choices.filter((e, t) => t !== n).map(gd) } : _d(e));
}
function hd(e) {
	let t = e.split(",").map((e) => e.trim()).filter((e) => e.length > 0);
	return t.length > 0 ? t : [e];
}
function gd(e) {
	return e.item ? {
		item: { ...e.item },
		name: e.name
	} : { name: e.name };
}
function _d(e) {
	return { choices: e.choices.map(gd) };
}
//#endregion
//#region src/functions/species-builder/editor/subspecies-fields.ts
function vd(e) {
	return {
		...e,
		subspecies: [...e.subspecies ?? [], {
			key: "",
			name: "New Subspecies"
		}]
	};
}
function yd(e, t) {
	let n = (e.subspecies ?? []).filter((e, n) => n !== t);
	return G(e, "subspecies", n.length > 0 ? n : void 0);
}
function bd(e, t, n) {
	let r = e.subspecies ?? [], i = r[t];
	return i ? {
		...e,
		subspecies: r.map((e, r) => r === t ? n(Ts(i)) : e)
	} : e;
}
function xd(e, t, n) {
	return {
		...e,
		[t]: us(n) ?? ""
	};
}
function Sd(e, t, n) {
	return G(e, t, ps(n));
}
function Cd(e, t, n) {
	let r = e.characteristics ? { ...e.characteristics } : {}, i = ls(n);
	return i ? r[t] = i : delete r[t], G(e, "characteristics", Object.keys(r).length > 0 ? r : void 0);
}
function wd(e, t, n) {
	return G(e, t, as(n));
}
function Td(e, t, n) {
	return G(e, t, gs(t, n));
}
function Ed(e, t) {
	return G(e, "woundFormula", ds(t));
}
function Dd(e, t) {
	return G(e, "careerTable", fs(t));
}
//#endregion
//#region src/functions/species-builder/editor/linked-definition.ts
function Od(e, t) {
	let n = t === "skills" ? e.linkedSkills : e.linkedTraits;
	return td(e[t], n);
}
function kd(e) {
	return nd(e.talents, e.linkedTalents);
}
function Ad(e, t) {
	return Hd(e, t, ld(Od(e, t), t));
}
function jd(e, t, n, r) {
	return Hd(e, t, ad(Od(e, t), n, r));
}
function Md(e, t, n) {
	return Hd(e, t, ud(Od(e, t), n));
}
function Nd(e, t, n, r) {
	return Hd(e, t, od(Od(e, t), n, r));
}
function Pd(e, t) {
	return Ud(e, dd(kd(e), t));
}
function Fd(e, t) {
	return Ud(e, fd(kd(e), t));
}
function Id(e, t, n, r) {
	return Ud(e, sd(kd(e), t, n, r));
}
function Ld(e, t) {
	return Ud(e, pd(kd(e), t));
}
function Rd(e, t, n) {
	return Ud(e, md(kd(e), t, n));
}
function zd(e, t, n, r) {
	return Ud(e, cd(kd(e), t, n, r));
}
function Bd(e, t, n) {
	let r = sc(n);
	if (t === "talents") {
		let t = kd(e);
		return id(t).includes(r) ? e : Ud(e, [...t, { choices: [{
			item: n,
			name: r
		}] }]);
	}
	let i = Od(e, t);
	return rd(i).includes(r) ? e : Hd(e, t, [...i, {
		item: n,
		name: r
	}]);
}
function Vd(e, t, n) {
	let r = sc(n), i = id(kd(e));
	return bd(e, t, (e) => {
		if (Wd(i, r)) {
			let t = Gd((e.talentsAdded ?? []).filter((e) => e !== r)), n = Gd((e.talentsRemoved ?? []).filter((e) => e !== r));
			return G(G(e, "talentsAdded", t), "talentsRemoved", n);
		}
		return (e.talentsAdded ?? []).includes(r) ? e : G(e, "talentsAdded", [...e.talentsAdded ?? [], r]);
	});
}
function Hd(e, t, n) {
	let r = t === "skills" ? "linkedSkills" : "linkedTraits", i = rd(n);
	return G(G(e, r, n.length > 0 ? n : void 0), t, i.length > 0 ? i : void 0);
}
function Ud(e, t) {
	let n = id(t);
	return G(G(e, "linkedTalents", t.length > 0 ? t : void 0), "talents", n.length > 0 ? n : void 0);
}
function Wd(e, t) {
	return e.includes(t) && !/\([^()]*\)/.test(t);
}
function Gd(e) {
	return e.length > 0 ? e : void 0;
}
//#endregion
//#region src/state/species-builder/linked-grant-actions.ts
var Kd = {
	skills: "skill",
	talents: "talent",
	traits: "trait"
};
function qd(e) {
	async function t(t, n) {
		let r = await e.resolveDroppedItem(Kd[t], n);
		p((e) => Bd(e, t, r));
	}
	async function n(t, n, r) {
		let i = await e.resolveDroppedItem(Kd[t], r);
		p((e) => Nd(e, t, n, i));
	}
	async function r(t, n, r) {
		let i = await e.resolveDroppedItem("talent", r);
		p((e) => zd(e, t, n, i));
	}
	async function i(t, n) {
		if (!e.subspeciesActions.canEditSubspecies(t)) return;
		let r = await e.resolveDroppedItem("talent", n);
		e.subspeciesActions.updateDefinitionForSubspecies(t, (e) => Vd(e, t, r));
	}
	function a(e) {
		p((t) => Ad(t, e));
	}
	function o(e, t, n) {
		p((r) => jd(r, e, t, n));
	}
	function s(e, t) {
		p((n) => Md(n, e, t));
	}
	function c(e) {
		p((t) => Pd(t, e));
	}
	function l(e) {
		p((t) => Fd(t, e));
	}
	function u(e, t, n) {
		p((r) => Id(r, e, t, n));
	}
	function d(e) {
		p((t) => Ld(t, e));
	}
	function f(e, t) {
		p((n) => Rd(n, e, t));
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
function Jd() {
	return { name: "" };
}
function Yd() {
	return {
		replacement: Jd(),
		rolled: Jd()
	};
}
function Xd() {
	return {
		replacements: [Jd()],
		rolled: Jd()
	};
}
function Zd(e) {
	return [...e, Yd()];
}
function Qd(e, t) {
	return e.filter((e, n) => n !== t);
}
function $d(e) {
	return [...e, Xd()];
}
function ef(e, t) {
	return e.map((e, n) => n === t ? {
		...e,
		replacements: [...e.replacements, Jd()]
	} : e);
}
function tf(e, t, n) {
	return e.map((e, r) => r === t ? {
		...e,
		replacements: e.replacements.filter((e, t) => t !== n)
	} : e).filter((e) => e.replacements.length > 0);
}
function nf(e, t) {
	return e.filter((e, n) => n !== t);
}
function rf(e) {
	return e.talentReplacementRows?.length ? hf(e.talentReplacementRows) : of(e.talentReplacements);
}
function af(e) {
	return e.careerReplacementRows?.length ? hf(e.careerReplacementRows) : sf(e.careerReplacements);
}
function of(e) {
	return Object.entries(e ?? {}).map(([e, t]) => ({
		replacement: { name: t },
		rolled: { name: e }
	}));
}
function sf(e) {
	return Object.entries(e ?? {}).map(([e, t]) => ({
		replacements: t.map((e) => ({ name: e })),
		rolled: { name: e }
	}));
}
function cf(e, t, n, r) {
	return e.map((e, i) => i === t ? {
		...e,
		[n]: df(r)
	} : e);
}
function lf(e, t, n) {
	return e.map((e, r) => r === t ? {
		...e,
		rolled: df(n)
	} : e);
}
function uf(e, t, n, r) {
	return e.map((e, i) => {
		if (i !== t) return e;
		let a = e.replacements.map((e, t) => t === n ? df(r) : e);
		return {
			...e,
			replacements: a
		};
	});
}
function df(e) {
	return {
		item: e,
		name: sc(e)
	};
}
function ff(e, t) {
	return G(G(e, "talentReplacementRows", t.length > 0 ? t : void 0), "talentReplacements", pc(t));
}
function pf(e, t) {
	return G(G(e, "careerReplacementRows", t.length > 0 ? t : void 0), "careerReplacements", mc(t));
}
function mf(e, t) {
	return G(G(e, "talentReplacementRows", t.length > 0 ? t : void 0), "talentReplacements", pc(t));
}
function hf(e) {
	return JSON.parse(JSON.stringify(e));
}
//#endregion
//#region src/state/species-builder/replacement-actions.ts
function gf(e) {
	function t(t) {
		e.definitionActions.updateSelectedDefinition((e) => ff(e, t));
	}
	function n(t) {
		e.definitionActions.updateSelectedDefinition((e) => pf(e, t));
	}
	function r(t, n) {
		e.subspeciesActions.updateSubspecies(t, (e) => mf(e, n));
	}
	async function i(n, r, i) {
		let a = e.selectedDefinition.value;
		if (!a) return;
		let o = await l("talent", i);
		t(cf(rf(a), n, r, o));
	}
	async function a(t, n, i, a) {
		let o = e.selectedDefinition.value?.subspecies?.[t];
		if (!o) return;
		let s = await l("talent", a);
		r(t, cf(rf(o), n, i, s));
	}
	async function o(t, r) {
		let i = e.selectedDefinition.value;
		if (!i) return;
		let a = await l("career", r);
		n(lf(af(i), t, a));
	}
	async function s(t, r, i) {
		let a = e.selectedDefinition.value;
		if (!a) return;
		let o = await l("career", i);
		n(uf(af(a), t, r, o));
	}
	async function c(t) {
		try {
			await e.bridge.openItemSheet(t);
		} catch (t) {
			e.loadError.value = Es(t);
		}
	}
	async function l(t, n) {
		try {
			return await e.bridge.resolveItemDrop(n, t);
		} catch (t) {
			throw e.loadError.value = Es(t), t;
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
//#region src/functions/species-builder/save-policy.ts
function _f(e) {
	let t = !e.isLoading && !e.isSaving && !e.hasLoadError && e.hasUnsavedChanges;
	return {
		canSave: t,
		requiresUnsafeSaveConfirmation: t && e.validationErrorCount > 0
	};
}
//#endregion
//#region src/state/species-builder/save-state.ts
function vf(e) {
	let t = W(() => e.savedSettingsSnapshot.value !== Ss(e.normalizedSettings.value)), n = W(() => yf(e.normalizedSettings.value)), r = W(() => e.savedDefinitionsSnapshot.value !== n.value), i = W(() => e.autoRegisterSpeciesTable.value && (e.speciesTable.value.ownership !== "managed" || !e.speciesTable.value.isRegistered)), a = W(() => e.savedSpeciesTableSnapshot.value !== e.speciesTableSnapshot.value || i.value || e.speciesTable.value.requiresLinkRepair), o = W(() => t.value || a.value), s = W(() => a.value || t.value && e.autoRegisterSpeciesTable.value), c = W(() => s.value ? e.speciesTableValidationMessages.value : []), l = W(() => e.validationIssues.value.filter((e) => e.severity === "error" && (e.scope !== "species-table" || s.value))), u = W(() => _f({
		hasLoadError: !!e.loadError.value,
		hasUnsavedChanges: o.value,
		isLoading: e.isLoading.value,
		isSaving: e.isSaving.value,
		validationErrorCount: l.value.length + c.value.length
	}));
	return {
		blockingSpeciesTableValidationMessages: c,
		blockingValidationIssues: l,
		canSave: W(() => u.value.canSave),
		definitionsHaveUnsavedChanges: r,
		hasUnsavedChanges: o,
		requiresUnsafeSaveConfirmation: W(() => u.value.requiresUnsafeSaveConfirmation),
		settingsHaveUnsavedChanges: t,
		speciesTableWillSave: s
	};
}
function yf(e) {
	return JSON.stringify({
		definitions: e.definitions,
		runtimeSpeciesExtensions: e.runtimeSpeciesExtensions
	});
}
//#endregion
//#region src/state/species-builder/save-actions.ts
function bf(e) {
	async function t(t = {}) {
		if (!e.canSave.value || e.requiresUnsafeSaveConfirmation.value && !t.allowValidationErrors) return !1;
		e.isSaving.value = !0, e.loadError.value = "", e.saveError.value = "", e.message.value = "";
		let n = e.settingsHaveUnsavedChanges.value, r = e.speciesTableWillSave.value, i = !1, a = [];
		try {
			if (n) {
				let t = e.definitionsHaveUnsavedChanges.value, n = await e.requireBridge().saveSettings(e.normalizedSettings.value, t), r = n.settings;
				e.autoRegisterSpeciesTable.value = r.autoRegisterSpeciesTable, e.definitions.value = El(r.definitions, e.runtimeDefinitions.value, r.runtimeSpeciesExtensions), e.showGeneratedConfigTab.value = r.showGeneratedConfigTab, e.selectedIndex.value = e.definitions.value.length > 0 ? Math.min(e.selectedIndex.value, e.definitions.value.length - 1) : -1, e.savedSettingsSnapshot.value = Ss(e.normalizedSettings.value), e.savedDefinitionsSnapshot.value = yf(e.normalizedSettings.value), i = t, n.syncError && a.push(n.syncError);
			}
			if (r) {
				let t = await e.requireBridge().saveSpeciesTable(e.preparedSpeciesTable.value, e.autoRegisterSpeciesTable.value);
				e.hydrateSpeciesTable(t), e.savedSpeciesTableSnapshot.value = Ou(t.draft), t.registrationError && a.push(t.registrationError);
			}
			return xf(e, a, i, r), i;
		} catch (t) {
			return e.saveError.value = Es(t), i;
		} finally {
			e.isSaving.value = !1;
		}
	}
	return { saveChanges: t };
}
function xf(e, t, n, r) {
	t.length > 0 ? e.saveError.value = t.join(" ") : n ? e.message.value = "Saved. Refresh Foundry before using changed species in character generation." : r ? e.message.value = "Saved the world Species table." : e.message.value = "Saved Species Builder settings.";
}
//#endregion
//#region src/state/species-builder/species-table-actions.ts
function Sf(e) {
	let t = /* @__PURE__ */ j(bu()), n = /* @__PURE__ */ j([]), r = W(() => xu(n.value, e.definitions.value)), i = W(() => Su(t.value, r.value)), a = W(() => Ou(i.value)), o = W(() => wu(i.value.rows)), s = W(() => Cu(i.value, r.value, e.autoRegisterSpeciesTable.value || i.value.ownership !== "new"));
	function c(e) {
		t.value = Ts(e.draft), n.value = Ts(e.runtimeOptions);
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
function Cf(e) {
	function t() {
		p(vd, !0);
	}
	function n(e) {
		f(e) && p((t) => yd(t, e), !0);
	}
	function r(e, t, n) {
		u(e, (e) => xd(e, t, n));
	}
	function i(e, t, n) {
		u(e, (e) => Sd(e, t, n));
	}
	function a(e, t, n) {
		u(e, (e) => Cd(e, t, n));
	}
	function o(e, t, n) {
		u(e, (e) => wd(e, t, n));
	}
	function s(e, t, n) {
		u(e, (e) => Td(e, t, n));
	}
	function c(e, t) {
		u(e, (e) => Ed(e, t));
	}
	function l(e, t) {
		u(e, (e) => Dd(e, t));
	}
	function u(e, t) {
		d(e, (n) => bd(n, e, t));
	}
	function d(e, t) {
		f(e) && p(t, !0);
	}
	function f(t) {
		let n = e.definitions.value[e.selectedIndex.value];
		return n?.subspecies?.[t] !== void 0 && Al(n, t);
	}
	function p(t, n = !1) {
		Qu(e, t, { allowRuntimeBase: n });
	}
	return {
		addSubspecies: t,
		canEditSubspecies: f,
		deleteSubspecies: n,
		updateSubspeciesArrayField: o,
		updateSubspeciesCharacteristic: a,
		updateSubspeciesCareerTableRows: l,
		updateSubspeciesNumberField: i,
		updateSubspeciesStringField: r,
		updateSubspecies: u,
		updateDefinitionForSubspecies: d,
		updateSubspeciesTextMapField: s,
		updateSubspeciesWoundFormula: c
	};
}
//#endregion
//#region src/functions/species-builder/validation/shared.ts
function wf(e) {
	return {
		careerGroups: jf(e.careerGroupNames),
		randomTalentSources: new Map(e.randomTalentSources.map((e) => [e.key.trim(), e])),
		skills: jf(e.itemBaseNames.skill),
		talents: jf(e.itemBaseNames.talent),
		traits: jf(e.itemBaseNames.trait)
	};
}
function Z(e, t, n) {
	return {
		...e,
		code: t,
		message: n,
		severity: "error"
	};
}
function Tf(e) {
	return e.trim().toLocaleLowerCase();
}
function Ef(e) {
	return (e.split("(")[0] ?? "").trim();
}
function Df(e, t) {
	return t.has(Ef(e));
}
function Of(e, t) {
	let n = e.trim();
	if (!n || !/^\d+(?:d\d+)?(?:\s*[+-]\s*\d+(?:d\d+)?)*$/iu.test(n)) return !1;
	let r = [...n.matchAll(/(\d+)d(\d+)/giu)];
	return t && r.length === 0 ? !1 : r.every((e) => Number(e[1]) > 0 && Number(e[2]) > 0);
}
function kf(e) {
	let t = /^(?:(\d+)|(\d*)d(\d+))(?:\s*\+\s*(-?\d+))?$/iu.exec(e.trim());
	return t ? t[1] ? Number.isSafeInteger(Number(t[1])) : (t[2] ? Number(t[2]) : 1) > 0 && Number(t[3]) > 0 : !1;
}
function Af(e) {
	return Number.isInteger(e) && (e ?? -1) >= 0;
}
function jf(e) {
	return new Set(e.map((e) => e.trim()).filter(Boolean));
}
//#endregion
//#region src/functions/species-builder/validation/career-tables.ts
function Mf(e, t) {
	let n = [];
	return e.forEach((e, r) => {
		Nf(e.careerTable, Pf(r), !0, t, n), (e.subspecies ?? []).forEach((e, i) => {
			e.careerTable !== void 0 && Nf(e.careerTable, Ff(r, i), !0, t, n);
		});
	}), n;
}
function Nf(e, t, n, r, i) {
	if (!e || e.rows.length === 0) {
		n && i.push(Z(t, "career-table-required", "Add at least one Career group so character creation can roll a Career."));
		return;
	}
	e.rows.forEach((e, n) => {
		let a = e.name.trim(), o = {
			...t,
			field: "name",
			rowIndex: n
		};
		a ? r.careerGroups.has(a) || i.push(Z(o, "career-table-career-missing", `Career group “${a}” does not match an available WFRP Career group.`)) : i.push(Z(o, "career-table-row-blank", `Career Table row ${n + 1} needs a Career group name.`));
	});
}
function Pf(e) {
	return {
		definitionIndex: e,
		scope: "definition",
		section: "careerTable"
	};
}
function Ff(e, t) {
	return {
		definitionIndex: e,
		scope: "subspecies",
		section: "careerTable",
		subspeciesIndex: t
	};
}
//#endregion
//#region src/functions/species-builder/validation/definitions.ts
var If = Object.keys(Oc), Lf = [
	"movement",
	"fate",
	"resilience",
	"extra"
];
function Rf(e) {
	let t = [];
	return e.forEach((e, n) => {
		let r = Gf(n);
		zf(e.characteristics, r, !0, t), Bf(e, r, !0, t), Vf(e, r, t), Uf(e.woundFormula?.formula, r, t), Wf(e, n, t);
	}), t;
}
function zf(e, t, n, r) {
	for (let i of If) {
		let a = e?.[i]?.trim() ?? "", o = `characteristics.${i}`;
		!a && n ? r.push(Z({
			...t,
			field: o,
			section: "attributes"
		}, "characteristic-required", `${Oc[i]} needs a roll formula.`)) : a && !kf(a) && r.push(Z({
			...t,
			field: o,
			section: "attributes"
		}, "characteristic-formula-invalid", `${Oc[i]} needs a valid WFRP roll formula, such as 0, d10, or 2d10+20.`));
	}
}
function Bf(e, t, n, r) {
	for (let i of Lf) {
		let a = e[i];
		a === void 0 && n ? r.push(Z({
			...t,
			field: i,
			section: "attributes"
		}, "stat-required", `${qf(i)} is required for character creation.`)) : a !== void 0 && !Af(a) && r.push(Z({
			...t,
			field: i,
			section: "attributes"
		}, "stat-invalid", `${qf(i)} must be a non-negative whole number.`));
	}
}
function Vf(e, t, n) {
	let r = e.age?.trim() ?? "";
	r ? Of(r, !1) || n.push(Z({
		...t,
		field: "age"
	}, "age-formula-invalid", "Age must use whole numbers and dice joined by + or -, such as 15+1d10.")) : n.push(Z({
		...t,
		field: "age"
	}, "age-required", "Enter an age roll formula."));
	let i = e.height;
	if (!i) {
		for (let e of [
			"die",
			"feet",
			"inches"
		]) n.push(Z({
			...t,
			field: `height.${e}`
		}, "height-required", `Height ${e} is required for character creation.`));
		return;
	}
	(!i.die?.trim() || !Of(i.die, !0)) && n.push(Z({
		...t,
		field: "height.die"
	}, "height-die-invalid", "Height die must be a valid dice formula, such as 1d10.")), Hf(i.feet, "feet", t, n), Hf(i.inches, "inches", t, n);
}
function Hf(e, t, n, r) {
	Af(e) || r.push(Z({
		...n,
		field: `height.${t}`
	}, `height-${t}-invalid`, `Height ${t} must be a non-negative whole number.`));
}
function Uf(e, t, n) {
	if (e !== void 0) try {
		if (!e.trim() || !Jf(e)) throw Error("The formula is blank or has unmatched brackets.");
		jc(e);
	} catch (e) {
		let r = e instanceof Error ? e.message : "The formula could not be compiled.";
		n.push(Z({
			...t,
			field: "woundFormula",
			section: "wounds"
		}, "wound-formula-invalid", `Wound formula is invalid: ${r}`));
	}
}
function Wf(e, t, n) {
	(e.subspecies ?? []).forEach((r, i) => {
		let a = Kf(t, i);
		r.characteristics && zf({
			...e.characteristics,
			...r.characteristics
		}, a, !0, n), Bf(r, a, !1, n), Uf(r.woundFormula?.formula, a, n);
	});
}
function Gf(e) {
	return {
		definitionIndex: e,
		scope: "definition",
		section: "details"
	};
}
function Kf(e, t) {
	return {
		definitionIndex: e,
		scope: "subspecies",
		section: "subspecies",
		subspeciesIndex: t
	};
}
function qf(e) {
	return e.charAt(0).toLocaleUpperCase() + e.slice(1);
}
function Jf(e) {
	return Yf(e, "{", "}") && Yf(e, "[", "]") && Yf(e, "(", ")");
}
function Yf(e, t, n) {
	let r = 0;
	for (let i of e) if (i === t ? r += 1 : i === n && --r, r < 0) return !1;
	return r === 0;
}
//#endregion
//#region src/functions/species-builder/validation/grant-talents.ts
function Xf(e, t, n, r, i, a) {
	e.forEach((e, o) => {
		if (e.length === 0) {
			a.push(Z({
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
			l ? e.length === 1 && tp(l) ? Qf(l, u, r, i, a) : e.length > 1 && np(l) ? $f(l, u, r, i, a) : Df(l, i.talents) || a.push(Z(u, "grant-unresolved", `Talent “${l}” does not match an available WFRP Talent Item.`)) : a.push(Z(u, "grant-blank", `Talent choice ${c + 1} is blank.`));
		});
	});
}
function Zf(e) {
	return new Set(Object.keys(e ?? { talents: 0 }));
}
function Qf(e, t, n, r, i) {
	let a = Number(e);
	(!Number.isInteger(a) || a < 0) && i.push(Z(t, "talent-random-count-invalid", "A numeric Talent grant must be a non-negative whole number.")), ep("talents", `Numeric Talent grant “${e}”`, t, n, r, i);
}
function $f(e, t, n, r, i) {
	ep(/^random\[(\d)\](?:\[([a-zA-Z-_]+)\])?$/iu.exec(e)?.[2] ?? "talents", `Random Talent choice “${e}”`, t, n, r, i);
}
function ep(e, t, n, r, i, a) {
	if (!r.has(e)) {
		a.push(Z(n, "random-talent-source-unconfigured", `${t} uses table key “${e}”, but that key is not configured in Random Talents.`));
		return;
	}
	let o = i.randomTalentSources.get(e);
	o ? o.readyForCharacterCreation || a.push(Z(n, "random-talent-source-not-ready", `Random Talent table “${o.key}” is not ready: ${o.reason ?? "its results are invalid"}.`)) : a.push(Z(n, "random-talent-source-missing", `${t} uses missing table key “${e}”.`));
}
function tp(e) {
	return /^-?\d+(?:\.\d+)?$/u.test(e);
}
function np(e) {
	return /^random\[\d\](?:\[[a-zA-Z-_]+\])?$/iu.test(e);
}
//#endregion
//#region src/functions/species-builder/validation/grants.ts
function rp(e, t) {
	let n = [];
	return e.forEach((e, r) => {
		ap(op(e.linkedSkills, e.skills), "skills", "Skill", t.skills, lp(r, "skills"), n), Xf(sp(e), "talents", lp(r, "talents"), Zf(e.randomTalents), t, n), ap(op(e.linkedTraits, e.traits), "traits", "Trait", t.traits, lp(r, "traits"), n), (e.subspecies ?? []).forEach((i, a) => ip(e, i, r, a, t, n));
	}), n;
}
function ip(e, t, n, r, i, a) {
	ap(t.skillsAdded ?? [], "skillsAdded", "Skill", i.skills, up(n, r, "skills"), a), Xf((t.talentsAdded ?? []).map(cp), "talentsAdded", up(n, r, "talents"), Zf(t.randomTalents ?? e.randomTalents), i, a), ap(t.traitsAdded ?? [], "traitsAdded", "Trait", i.traits, up(n, r, "traits"), a);
}
function ap(e, t, n, r, i, a) {
	e.forEach((e, o) => {
		let s = e.trim(), c = {
			...i,
			field: t,
			rowIndex: o
		};
		s ? Df(s, r) || a.push(Z(c, "grant-unresolved", `${n} “${s}” does not match an available WFRP ${n} Item.`)) : a.push(Z(c, "grant-blank", `${n} row ${o + 1} is blank.`));
	});
}
function op(e, t) {
	return e?.length ? e.map(cc) : t ?? [];
}
function sp(e) {
	return e.linkedTalents?.length ? e.linkedTalents.map((e) => e.choices.map(cc)) : (e.talents ?? []).map(cp);
}
function cp(e) {
	return e.split(",").map((e) => e.trim());
}
function lp(e, t) {
	return {
		definitionIndex: e,
		scope: "definition",
		section: t
	};
}
function up(e, t, n) {
	return {
		definitionIndex: e,
		scope: "subspecies",
		section: n,
		subspeciesIndex: t
	};
}
//#endregion
//#region src/functions/species-builder/validation/identity.ts
function dp(e, t) {
	let n = [], r = new Set(t.runtimeSpecies.map((e) => Tf(e.name)).filter(Boolean)), i = new Set(t.runtimeSpecies.map((e) => e.key.trim()).filter(Boolean)), a = _p(e.map(vp)), o = gp(e.map((e) => e.name));
	return e.forEach((e, t) => {
		fp(e, t, a, o, i, r, n), pp(e, t, n);
	}), n;
}
function fp(e, t, n, r, i, a, o) {
	let s = mp(t), c = vp(e), l = e.name.trim();
	if (c ? (n.get(c) ?? 0) > 1 ? o.push(Z({
		...s,
		field: "key"
	}, "species-key-duplicate", `Species key “${c}” is used more than once.`)) : i.has(c) && o.push(Z({
		...s,
		field: "key"
	}, "species-key-runtime-collision", `Species key “${c}” is already used by an external WFRP species.`)) : o.push(Z({
		...s,
		field: "key"
	}, "species-key-required", "Enter a species key.")), !l) {
		o.push(Z({
			...s,
			field: "name"
		}, "species-name-required", "Enter a species name."));
		return;
	}
	let u = Tf(l);
	((r.get(u) ?? 0) > 1 || a.has(u)) && o.push(Z({
		...s,
		field: "name"
	}, "species-name-duplicate", `Species name “${l}” must be unique because WFRP identifies table results by name.`)), /[{}]/u.test(l) && o.push(Z({
		...s,
		field: "name"
	}, "species-name-unsafe", "Species names cannot contain { or }; WFRP parses the name from a UUID-link label."));
}
function pp(e, t, n) {
	let r = e.subspecies ?? [], i = _p(r.map((t, n) => yp(e, t.key, n))), a = gp(r.map((e) => e.name));
	r.forEach((r, o) => {
		let s = hp(t, o), c = yp(e, r.key, o), l = r.name.trim();
		c ? (i.get(c) ?? 0) > 1 && n.push(Z({
			...s,
			field: "key"
		}, "subspecies-key-duplicate", `Subspecies key “${c}” is used more than once for this species.`)) : n.push(Z({
			...s,
			field: "key"
		}, "subspecies-key-required", "Enter a subspecies key.")), l ? (a.get(Tf(l)) ?? 0) > 1 && n.push(Z({
			...s,
			field: "name"
		}, "subspecies-name-duplicate", `Subspecies name “${l}” is used more than once for this species.`)) : n.push(Z({
			...s,
			field: "name"
		}, "subspecies-name-required", "Enter a subspecies name."));
	});
}
function mp(e) {
	return {
		definitionIndex: e,
		scope: "definition",
		section: "details"
	};
}
function hp(e, t) {
	return {
		definitionIndex: e,
		scope: "subspecies",
		section: "subspecies",
		subspeciesIndex: t
	};
}
function gp(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = Tf(n);
		e && t.set(e, (t.get(e) ?? 0) + 1);
	}
	return t;
}
function _p(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.trim();
		e && t.set(e, (t.get(e) ?? 0) + 1);
	}
	return t;
}
function vp(e) {
	return bp(e) ? e.key.trim() : is(e.key);
}
function yp(e, t, n) {
	return bp(e) && n < e.runtimeSubspeciesCount ? t.trim() : is(t);
}
function bp(e) {
	return "origin" in e && e.origin === "runtime";
}
//#endregion
//#region src/functions/species-builder/validation/issue-severity.ts
function xp(e, t) {
	let n = new Map(t.runtimeSpecies.map((e) => [e.key.trim(), e]));
	return e.flatMap((e, t) => {
		if (e.origin !== "runtime") return [];
		let r = n.get(e.key.trim());
		if (!r || r.readyForCharacterCreation) return [];
		let i = r.reason ? `: ${r.reason}` : ".";
		return [Z({
			definitionIndex: t,
			scope: "definition",
			section: "details"
		}, "runtime-species-not-ready", `Runtime species “${r.name}” is not ready for character creation${i}`)];
	});
}
function Sp(e, t, n) {
	let r = new Set((n?.rows ?? []).map((e) => e.speciesKey.trim()).filter(Boolean));
	return e.map((e) => {
		if (e.definitionIndex === void 0) return e;
		let n = t[e.definitionIndex], i = !!n?.includeInExtraSpecies || !!(n?.key.trim() && r.has(n.key.trim()));
		return {
			...e,
			severity: i ? "error" : "warning"
		};
	});
}
//#endregion
//#region src/functions/species-builder/validation/random-talents.ts
function Cp(e, t) {
	let n = [];
	return e.forEach((e, r) => {
		Ep(e.randomTalents ?? { talents: 0 }, Op(r), t, n), (e.subspecies ?? []).forEach((i, a) => {
			i.randomTalents !== void 0 && (Ep(i.randomTalents, kp(r, a), t, n), wp(e, i, r, a, n));
		});
	}), n;
}
function wp(e, t, n, r, i) {
	let a = new Set(Object.keys(t.randomTalents ?? {})), o = new Set(t.talentsRemoved ?? []), s = /* @__PURE__ */ new Set();
	for (let t of bc(e) ?? []) if (!o.has(t)) for (let e of Tp(t)) a.has(e) || s.add(e);
	for (let e of s) i.push(Z(kp(n, r), "inherited-random-talent-source-unconfigured", `Inherited Talent grants use table key “${e}”, but this subspecies Random Talents override does not configure it.`));
}
function Tp(e) {
	return /^-?\d+(?:\.\d+)?$/u.test(e.trim()) ? ["talents"] : e.includes(",") ? e.split(",").flatMap((e) => {
		let t = /^random\[(\d)\](?:\[([a-zA-Z-_]+)\])?$/iu.exec(e.trim());
		return t ? [t[2] ?? "talents"] : [];
	}) : [];
}
function Ep(e, t, n, r) {
	Object.entries(e).forEach(([e, i], a) => {
		let o = e.trim();
		o ? Dp(o, a, t, n, r) : r.push(Z({
			...t,
			field: "key",
			rowIndex: a
		}, "random-talent-source-required", `Random Talent row ${a + 1} needs a table key.`)), (!Number.isInteger(i) || i < 0) && r.push(Z({
			...t,
			field: "count",
			rowIndex: a
		}, "random-talent-count-invalid", `Random Talent count for “${o || "row " + (a + 1)}” must be a non-negative whole number.`));
	});
}
function Dp(e, t, n, r, i) {
	let a = r.randomTalentSources.get(e);
	a ? a.readyForCharacterCreation || i.push(Z({
		...n,
		field: "key",
		rowIndex: t
	}, "random-talent-source-not-ready", `Random Talent table “${a.key}” is not ready: ${a.reason ?? "its results are invalid"}.`)) : i.push(Z({
		...n,
		field: "key",
		rowIndex: t
	}, "random-talent-source-missing", `No WFRP RollTable is registered with key “${e}”. WFRP looks it up even when the count is 0.`));
}
function Op(e) {
	return {
		definitionIndex: e,
		scope: "definition",
		section: "randomTalents"
	};
}
function kp(e, t) {
	return {
		definitionIndex: e,
		scope: "subspecies",
		section: "randomTalents",
		subspeciesIndex: t
	};
}
//#endregion
//#region src/functions/species-builder/validation/replacements.ts
function Ap(e, t) {
	let n = [];
	return e.forEach((e, r) => {
		jp(e, Fp(r, "talentReplacement"), t, n), Np(e, Fp(r, "careerReplacement"), t, n), (e.subspecies ?? []).forEach((e, i) => jp(e, Ip(r, i), t, n));
	}), n;
}
function jp(e, t, n, r) {
	let i = rf(e), a = Lp(i.map((e) => cc(e.rolled)));
	i.forEach((e, i) => {
		let o = cc(e.rolled);
		Mp(e.rolled, "rolled", i, t, n, r), Mp(e.replacement, "replacement", i, t, n, r), o && (a.get(Tf(o)) ?? 0) > 1 && r.push(Z({
			...t,
			field: "rolled",
			rowIndex: i
		}, "talent-replacement-duplicate", `Talent “${o}” appears in more than one replacement row; only the last row would be used.`));
	});
}
function Mp(e, t, n, r, i, a) {
	let o = cc(e), s = {
		...r,
		field: t,
		rowIndex: n
	};
	o ? Df(o, i.talents) || a.push(Z(s, "talent-replacement-unresolved", `Talent “${o}” does not match an available WFRP Talent Item.`)) : a.push(Z(s, "talent-replacement-blank", `Talent Replacement row ${n + 1} needs a ${t} Talent.`));
}
function Np(e, t, n, r) {
	let i = af(e), a = Lp(i.map((e) => cc(e.rolled)));
	i.forEach((e, i) => {
		let o = cc(e.rolled);
		Pp(o, "rolled", i, void 0, t, n, r), o && (a.get(Tf(o)) ?? 0) > 1 && r.push(Z({
			...t,
			field: "rolled",
			rowIndex: i
		}, "career-replacement-duplicate", `Career group “${o}” appears in more than one replacement row; only the last row would be used.`)), e.replacements.length === 0 ? Pp("", "replacement", i, 0, t, n, r) : e.replacements.forEach((e, a) => Pp(cc(e), "replacement", i, a, t, n, r));
	});
}
function Pp(e, t, n, r, i, a, o) {
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
	e.trim() ? a.careerGroups.has(e.trim()) || o.push(Z(s, "career-replacement-unresolved", `Career group “${e}” does not match an available WFRP Career group.`)) : o.push(Z(s, "career-replacement-blank", `Career Replacement row ${n + 1} needs a ${t} Career group.`));
}
function Fp(e, t) {
	return {
		definitionIndex: e,
		scope: "definition",
		section: t
	};
}
function Ip(e, t) {
	return {
		definitionIndex: e,
		scope: "subspecies",
		section: "talentReplacement",
		subspeciesIndex: t
	};
}
function Lp(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = Tf(n);
		e && t.set(e, (t.get(e) ?? 0) + 1);
	}
	return t;
}
//#endregion
//#region src/functions/species-builder/validation/runtime-extensions.ts
function Rp(e, t, n) {
	let r = new Set(n.map(Up));
	return e.flatMap((e, n) => e.origin !== "runtime" || e.runtimeUnavailable ? [] : (e.subspecies ?? []).flatMap((i, a) => a < e.runtimeSubspeciesCount ? [] : zp(e, i, t).flatMap((e) => {
		let t = Hp(e, n, a, i.name);
		return r.has(Up(t)) ? [] : [t];
	})));
}
function zp(e, t, n) {
	let r = Bp(e, t), i = [];
	return r.skills === void 0 && i.push(Z({
		definitionIndex: 0,
		scope: "definition",
		section: "skills"
	}, "effective-skills-required", "The effective Skill list is missing. WFRP character creation requires an array, even when it is empty.")), r.talents === void 0 && i.push(Z({
		definitionIndex: 0,
		scope: "definition",
		section: "talents"
	}, "effective-talents-required", "The effective Talent list is missing. WFRP character creation requires an array, even when it is empty.")), [
		...i,
		...Rf([r]),
		...rp([r], n),
		...Cp([r], n),
		...Mf([r], n),
		...Ap([r], n)
	];
}
function Bp(e, t) {
	let n = {
		includeInExtraSpecies: !1,
		key: t.key,
		name: t.name
	};
	return K(n, "age", e.age), K(n, "height", e.height), K(n, "characteristics", t.characteristics ? {
		...e.characteristics,
		...t.characteristics
	} : e.characteristics), K(n, "movement", t.movement ?? e.movement), K(n, "fate", t.fate ?? e.fate), K(n, "resilience", t.resilience ?? e.resilience), K(n, "extra", t.extra ?? e.extra), K(n, "skills", vc(e, t) ?? _c(e)), K(n, "talents", xc(e, t) ?? bc(e)), K(n, "traits", Cc(e, t) ?? Sc(e)), K(n, "randomTalents", t.randomTalents ?? e.randomTalents), K(n, "careerTable", t.careerTable ?? e.careerTable), K(n, "careerReplacements", t.careerReplacements), K(n, "careerReplacementRows", t.careerReplacementRows), Vp(n, e, t), K(n, "woundFormula", t.woundFormula), n;
}
function Vp(e, t, n) {
	let r = n.talentReplacementRows !== void 0 || n.talentReplacements !== void 0;
	K(e, "talentReplacementRows", r ? n.talentReplacementRows : t.talentReplacementRows), K(e, "talentReplacements", r ? n.talentReplacements : t.talentReplacements);
}
function Hp(e, t, n, r) {
	let i = {
		...e,
		definitionIndex: t,
		message: `Effective setup for ${r || "this custom subspecies"}: ${e.message}`,
		scope: "subspecies",
		subspeciesIndex: n
	};
	return [
		"attributes",
		"details",
		"wounds"
	].includes(i.section) || (delete i.choiceIndex, delete i.field, delete i.rowIndex), i;
}
function Up(e) {
	return [
		e.definitionIndex ?? "",
		e.subspeciesIndex ?? "",
		e.section,
		e.code
	].join(":");
}
//#endregion
//#region src/functions/species-builder/validation/species-table.ts
function Wp(e, t, n, r) {
	if (!t) return [];
	let i = [], a = e.autoRegisterSpeciesTable || t.isRegistered;
	if (t.rows.length === 0) return a ? [Z(Yp(), "species-table-empty", "Add at least one species while this table is registered for character creation.")] : [];
	let o = new Map(e.definitions.map((e, t) => [is(e.key), {
		definition: e,
		definitionIndex: t
	}])), s = new Map(n.runtimeSpecies.map((e) => [e.key.trim(), e])), c = Zp(t.rows.map((e) => e.speciesKey)), l = Zp(t.rows.map((e) => e.name));
	return t.rows.forEach((e, t) => {
		let n = e.speciesKey.trim(), a = e.name.trim(), u = Xp(t);
		if (Gp(n, a, c, l, u, i), n) {
			let e = o.get(n);
			e ? Kp(a, e.definition.name.trim(), e.definitionIndex, r, u, i) : qp(a, s.get(n), n, u, i);
		}
		(!Number.isInteger(e.weight) || e.weight < 1) && i.push(Z({
			...u,
			field: "weight"
		}, "species-table-weight-invalid", `Species Table row ${t + 1} needs a whole-number weight of at least 1.`));
	}), i;
}
function Gp(e, t, n, r, i, a) {
	e ? (n.get(Tf(e)) ?? 0) > 1 && a.push(Z({
		...i,
		field: "speciesKey"
	}, "species-table-species-duplicate", `Species key “${e}” appears more than once in the Species Table.`)) : a.push(Z({
		...i,
		field: "speciesKey"
	}, "species-table-species-required", `Species Table row ${(i.rowIndex ?? 0) + 1} must select a species.`));
	let o = Tf(t);
	o && (r.get(o) ?? 0) > 1 && a.push(Z({
		...i,
		field: "speciesKey"
	}, "species-table-name-duplicate", `Species name “${t}” appears more than once in the Species Table.`)), /[{}]/u.test(t) && a.push(Z({
		...i,
		field: "speciesKey"
	}, "species-table-name-unsafe", `Species name “${t}” cannot be encoded in WFRP's UUID-link label.`));
}
function Kp(e, t, n, r, i, a) {
	Jp(e, t, i, a), r.some((e) => e.definitionIndex === n) && a.push(Z({
		...i,
		field: "speciesKey"
	}, "species-table-definition-not-ready", `Custom species “${t || "unnamed species"}” has character-creation errors.`));
}
function qp(e, t, n, r, i) {
	if (!t) {
		i.push(Z({
			...r,
			field: "speciesKey"
		}, "species-table-species-missing", `Species key “${n}” is not registered in the current WFRP world.`));
		return;
	}
	if (Jp(e, t.name, r, i), !t.readyForCharacterCreation) {
		let e = t.reason ? `: ${t.reason}` : ".";
		i.push(Z({
			...r,
			field: "speciesKey"
		}, "species-table-runtime-not-ready", `Runtime species “${t.name}” is not ready for character creation${e}`));
	}
}
function Jp(e, t, n, r) {
	(!e || e !== t) && r.push(Z({
		...n,
		field: "speciesKey"
	}, "species-table-name-mismatch", `WFRP reads the UUID-link label as the species name; this row must use “${t}”.`));
}
function Yp() {
	return {
		scope: "species-table",
		section: "species-table"
	};
}
function Xp(e) {
	return {
		...Yp(),
		rowIndex: e
	};
}
function Zp(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = Tf(n);
		e && t.set(e, (t.get(e) ?? 0) + 1);
	}
	return t;
}
//#endregion
//#region src/functions/species-builder/validation/index.ts
function Qp(e, t, n, r) {
	let i = wf(t), a = r ?? e.definitions, o = [
		...dp(a, t),
		...Rf(a),
		...rp(a, i),
		...Cp(a, i),
		...Mf(a, i),
		...Ap(a, i)
	], s = r ? $p(o, r) : o, c = Sp(r ? [
		...s,
		...Rp(r, i, s),
		...xp(r, t)
	] : s, a, n);
	return [...c, ...Wp(e, n, t, c)];
}
function $p(e, t) {
	let n = t.flatMap((e, t) => e.origin !== "runtime" || !e.runtimeUnavailable || (e.subspecies?.length ?? 0) <= e.runtimeSubspeciesCount ? [] : [Z({
		definitionIndex: t,
		scope: "definition",
		section: "subspecies"
	}, "runtime-parent-unavailable", `Runtime species “${e.name}” is unavailable. Its authored subspecies cannot be generated until the parent returns.`)]), r = e.filter((e) => {
		if (e.definitionIndex === void 0) return !0;
		let n = t[e.definitionIndex];
		return n.origin === "custom" ? !0 : e.scope === "subspecies" && e.subspeciesIndex !== void 0 && e.subspeciesIndex >= n.runtimeSubspeciesCount;
	});
	return [...n, ...r];
}
//#endregion
//#region src/state/species-builder/chargen-validation.ts
function em(e) {
	return { validationIssues: W(() => Qp(e.settings.value, e.catalog.value, e.speciesTable.value, e.editingDefinitions.value)) };
}
function tm() {
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
var nm = ac("species-builder", () => {
	let { configure: e, configuredBridge: t, requireBridge: n } = Bu(), r = /* @__PURE__ */ j([]), i = /* @__PURE__ */ j([]), a = /* @__PURE__ */ j(!1), o = /* @__PURE__ */ j(!1), s = /* @__PURE__ */ j(0), c = /* @__PURE__ */ j(!0), l = /* @__PURE__ */ j(!1), u = /* @__PURE__ */ j(""), d = /* @__PURE__ */ j(""), f = /* @__PURE__ */ j(""), p = /* @__PURE__ */ j([]), m = /* @__PURE__ */ j(tm()), h = /* @__PURE__ */ j(""), g = /* @__PURE__ */ j(""), _ = /* @__PURE__ */ j(""), v = W(() => r.value[s.value]), y = W(() => _s(r.value)), b = W(() => y.value.filter((e) => !e.runtimeUnavailable)), x = W(() => Dl(y.value)), S = W(() => ({
		autoRegisterSpeciesTable: a.value,
		...x.value,
		showGeneratedConfigTab: o.value
	})), C = W(() => du(S.value)), ee = W(() => ws(_l(C.value, i.value))), w = Sf({
		autoRegisterSpeciesTable: a,
		definitions: b,
		message: u
	}), { validationIssues: te } = em({
		catalog: m,
		editingDefinitions: y,
		settings: S,
		speciesTable: w.preparedSpeciesTable
	}), { blockingSpeciesTableValidationMessages: T, blockingValidationIssues: ne, canSave: re, definitionsHaveUnsavedChanges: E, hasUnsavedChanges: ie, requiresUnsafeSaveConfirmation: ae, settingsHaveUnsavedChanges: oe, speciesTableWillSave: se } = vf({
		autoRegisterSpeciesTable: a,
		isLoading: c,
		isSaving: l,
		loadError: d,
		normalizedSettings: C,
		savedDefinitionsSnapshot: g,
		savedSettingsSnapshot: h,
		savedSpeciesTableSnapshot: _,
		speciesTable: w.speciesTable,
		speciesTableSnapshot: w.speciesTableSnapshot,
		speciesTableValidationMessages: w.speciesTableValidationMessages,
		validationIssues: te
	}), { saveChanges: D } = bf({
		autoRegisterSpeciesTable: a,
		canSave: re,
		definitions: r,
		definitionsHaveUnsavedChanges: E,
		hydrateSpeciesTable: w.hydrateSpeciesTable,
		isSaving: l,
		loadError: d,
		message: u,
		normalizedSettings: C,
		preparedSpeciesTable: w.preparedSpeciesTable,
		requireBridge: n,
		requiresUnsafeSaveConfirmation: ae,
		runtimeDefinitions: i,
		savedDefinitionsSnapshot: g,
		savedSettingsSnapshot: h,
		savedSpeciesTableSnapshot: _,
		saveError: f,
		selectedIndex: s,
		settingsHaveUnsavedChanges: oe,
		showGeneratedConfigTab: o,
		speciesTableWillSave: se
	}), ce = $u({
		definitions: r,
		message: u,
		selectedDefinition: v,
		selectedIndex: s
	}), { updateDefinitionForSubspecies: le, ...ue } = Cf({
		definitions: r,
		message: u,
		selectedIndex: s
	}), { resolveDroppedItem: de, ...fe } = gf({
		bridge: t,
		definitionActions: ce,
		loadError: d,
		selectedDefinition: v,
		subspeciesActions: ue
	}), pe = qd({
		definitionActions: ce,
		resolveDroppedItem: de,
		selectedDefinition: v,
		subspeciesActions: {
			canEditSubspecies: ue.canEditSubspecies,
			updateDefinitionForSubspecies: le
		}
	}), me = Ru({
		bridge: t,
		definitionActions: ce,
		loadError: d,
		resolveDroppedItem: de,
		selectedDefinition: v,
		subspeciesActions: ue
	});
	async function he() {
		c.value = !0, d.value = "", f.value = "", u.value = "";
		try {
			let e = await n().loadSettings(), [t, c, l, u] = await Promise.all([
				n().loadRuntimeSpecies(),
				n().loadRandomTalentSources(),
				n().loadSpeciesTable(),
				n().loadValidationCatalog(e.definitions.map(({ key: e }) => e))
			]);
			a.value = e.autoRegisterSpeciesTable, i.value = Ts(t), r.value = El(e.definitions, t, e.runtimeSpeciesExtensions), p.value = c, o.value = e.showGeneratedConfigTab, s.value = r.value.length > 0 ? 0 : -1, w.hydrateSpeciesTable(l), m.value = u, h.value = Ss(C.value), g.value = yf(C.value), _.value = Ou(l.draft);
		} catch (e) {
			d.value = getErrorMessage(e);
		} finally {
			c.value = !1;
		}
	}
	function ge(e) {
		o.value = e, u.value = "";
	}
	function _e(e) {
		a.value = e, u.value = "";
	}
	return {
		...ce,
		...me,
		...pe,
		...fe,
		...w,
		...ue,
		autoRegisterSpeciesTable: a,
		blockingSpeciesTableValidationMessages: T,
		blockingValidationIssues: ne,
		canSave: re,
		configure: e,
		definitions: r,
		generatedConfigText: ee,
		hasUnsavedChanges: ie,
		isLoading: c,
		isSaving: l,
		loadError: d,
		loadSettings: he,
		message: u,
		randomTalentSources: p,
		requiresUnsafeSaveConfirmation: ae,
		saveChanges: D,
		saveError: f,
		selectedDefinition: v,
		selectedIndex: s,
		showGeneratedConfigTab: o,
		updateAutoRegisterSpeciesTable: _e,
		updateShowGeneratedConfigTab: ge,
		validationIssues: te
	};
});
//#endregion
//#region src/state/species-builder/editor.ts
function rm(e, t = {}) {
	let n = nm();
	n.configure(e);
	async function r(e = {}) {
		await n.saveChanges(e) && t.onSettingsSaved?.();
	}
	return {
		...n,
		...oc(n),
		saveChanges: r
	};
}
//#endregion
//#region src/view/apps/species-builder/components/dialog-focus.ts
function im() {
	let e;
	function t() {
		let t = document.activeElement;
		e = t instanceof HTMLElement && t !== document.body ? t : void 0;
	}
	function n() {
		let t = e;
		e = void 0, kn(() => {
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
var am = ["onKeydown"], om = {
	key: 0,
	class: "dui-modal-box"
}, sm = { id: "species-builder-delete-message" }, cm = { class: "dui-modal-action" }, lm = /* @__PURE__ */ P({
	__name: "DeleteConfirmationSubView",
	props: { message: {} },
	emits: ["close", "confirm"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ j(), a = im();
		function o() {
			i.value?.close();
		}
		function s() {
			n.message && r("close"), a.restore();
		}
		return Jn(() => n.message, async (e) => {
			e ? (a.capture(), await kn(), n.message && !i.value?.open && i.value?.showModal()) : i.value?.open && i.value.close();
		}, {
			flush: "post",
			immediate: !0
		}), (t, n) => (L(), R("dialog", {
			ref_key: "dialog",
			ref: i,
			class: "dui-modal",
			"aria-describedby": "species-builder-delete-message",
			"aria-labelledby": "species-builder-delete-title",
			onClose: s,
			onKeydown: Zo(Yo(o, ["stop", "prevent"]), ["esc"]),
			onKeyup: n[1] ||= Zo(Yo(() => {}, ["stop"]), ["esc"])
		}, [e.message ? (L(), R("div", om, [
			n[2] ||= B("h2", { id: "species-builder-delete-title" }, "Confirm Deletion", -1),
			B("p", sm, k(e.message), 1),
			B("div", cm, [B("button", {
				class: "dui-btn dui-btn-error",
				type: "button",
				onClick: n[0] ||= (e) => r("confirm")
			}, "Delete"), B("button", {
				autofocus: "",
				class: "dui-btn",
				type: "button",
				onClick: o
			}, "Cancel")])
		])) : U("", !0), n[3] ||= B("form", {
			class: "dui-modal-backdrop",
			method: "dialog"
		}, [B("button", {
			"aria-label": "Cancel deletion",
			type: "submit"
		}, "Close")], -1)], 40, am));
	}
});
//#endregion
//#region src/view/apps/species-builder/tabs/species/species-key-suggestions.ts
function um(e) {
	return is(e.name) || "new-species";
}
function dm(e) {
	return is(e.name) || "new-subspecies";
}
//#endregion
//#region src/view/apps/species-builder/components/SpeciesBuilderEditorContext.vue?vue&type=script&setup=true&lang.ts
var fm = {
	"aria-label": "Current species and save state",
	class: "dui-footer dui-footer-horizontal app:sticky app:bottom-0 app:z-10 app:items-center app:justify-between app:gap-3 app:bg-base-200 app:px-3 app:py-2"
}, pm = { class: "app:flex app:min-w-0 app:items-center app:gap-2" }, mm = {
	key: 0,
	class: "dui-badge dui-badge-ghost"
}, hm = {
	"aria-atomic": "true",
	"aria-live": "polite",
	role: "status"
}, gm = ["disabled"], _m = /* @__PURE__ */ P({
	__name: "SpeciesBuilderEditorContext",
	props: {
		canSave: { type: Boolean },
		definition: {},
		entityKey: {},
		entityName: {},
		hasUnsavedChanges: { type: Boolean },
		hasValidationErrors: { type: Boolean },
		hasValidationWarnings: { type: Boolean },
		isLoading: { type: Boolean },
		isSaving: { type: Boolean },
		loadError: {}
	},
	emits: ["save"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = W(() => n.entityName?.trim() || n.definition?.name.trim() || n.definition?.key.trim() || (n.definition ? "Untitled Species" : "Species Builder")), a = W(() => n.entityKey?.trim() ? n.entityKey.trim() : n.definition ? n.definition.key.trim() || um(n.definition) : ""), o = W(() => n.isLoading ? {
			label: "Reloading species data...",
			statusClass: "dui-status-info"
		} : n.loadError ? {
			label: "Error: review the message in the editor",
			statusClass: "dui-status-error"
		} : n.isSaving ? {
			label: "Saving changes...",
			statusClass: "dui-status-info"
		} : n.hasValidationErrors && n.hasUnsavedChanges ? {
			label: "Unsaved changes; saving requires confirmation",
			statusClass: "dui-status-error"
		} : n.hasValidationErrors ? {
			label: "Saved; character-creation errors remain",
			statusClass: "dui-status-error"
		} : n.hasValidationWarnings ? {
			label: n.hasUnsavedChanges ? "Unsaved changes; validation warnings remain" : "Saved; inactive-species warnings remain",
			statusClass: "dui-status-warning"
		} : n.hasUnsavedChanges ? {
			label: "Unsaved changes",
			statusClass: "dui-status-warning"
		} : {
			label: "All changes saved",
			statusClass: "dui-status-success"
		});
		return (t, n) => (L(), R("footer", fm, [B("div", pm, [
			B("span", {
				"aria-hidden": "true",
				class: O(["dui-status", o.value.statusClass])
			}, null, 2),
			B("strong", null, k(i.value), 1),
			a.value ? (L(), R("span", mm, k(a.value), 1)) : U("", !0),
			B("span", hm, k(o.value.label), 1)
		]), B("button", {
			class: "dui-btn dui-btn-primary dui-btn-sm",
			disabled: !e.canSave,
			type: "button",
			onClick: n[0] ||= (e) => r("save")
		}, [n[1] ||= B("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-floppy-disk"
		}, null, -1), H(" " + k(e.isSaving ? "Saving..." : "Save Changes"), 1)], 8, gm)]));
	}
}), vm = { class: "dui-navbar-start app:min-w-0 app:flex-1" }, ym = { class: "app:min-w-0" }, bm = {
	"aria-label": "Current location",
	class: "dui-breadcrumbs app:py-0 app:text-sm"
}, xm = { class: "app:m-0 app:p-0" }, Sm = { key: 0 }, Cm = { key: 1 }, wm = { "aria-current": "page" }, Tm = { class: "dui-navbar-end" }, Em = { class: "dui-dropdown-content dui-card dui-card-border app:z-30 app:w-52 app:bg-base-100" }, Dm = { class: "dui-menu dui-menu-sm app:w-full" }, Om = ["disabled"], km = { key: 0 }, Am = ["disabled"], jm = { key: 1 }, Mm = ["disabled"], Nm = /* @__PURE__ */ P({
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
		let n = t, r = /* @__PURE__ */ j(), i = /* @__PURE__ */ j(), a = !1;
		function o(e) {
			l(), n(e);
		}
		function s() {
			l(), n("reload");
		}
		async function c(e) {
			let t = e.currentTarget instanceof HTMLElement ? e.currentTarget.closest(".wfrp4e-customizer-apps-root") : null;
			l(), n("selectSpecies"), await kn(), t?.scrollTo({ top: 0 }), t?.querySelector("#species-builder-species-list-heading")?.focus();
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
		return (t, n) => (L(), R("header", {
			class: "dui-navbar app:sticky app:top-0 app:z-20 app:bg-base-200",
			onKeydown: Zo(u, ["esc"]),
			onKeyup: Zo(d, ["esc"])
		}, [
			B("div", vm, [B("div", ym, [n[2] ||= B("h1", { class: "app:m-0 app:text-xl app:leading-tight" }, "Species Builder", -1), B("nav", bm, [B("ul", xm, [
				e.definitionName ? (L(), R("li", Sm, [B("button", {
					class: "dui-btn dui-btn-link dui-btn-xs",
					type: "button",
					onClick: c
				}, " Species List ")])) : U("", !0),
				e.definitionName ? (L(), R("li", Cm, [B("span", null, k(e.definitionName), 1)])) : U("", !0),
				B("li", null, [B("span", wm, k(e.contextLabel), 1)])
			])])])]),
			B("div", Tm, [B("details", {
				ref_key: "actionsDropdown",
				ref: r,
				class: "dui-dropdown dui-dropdown-end"
			}, [n[6] ||= B("summary", { class: "dui-btn dui-btn-outline dui-btn-sm" }, [B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-ellipsis"
			}), H(" Actions ")], -1), B("div", Em, [B("ul", Dm, [
				B("li", { onClick: l }, [Ur(t.$slots, "actions", { dialogHost: i.value })]),
				B("li", null, [B("button", {
					disabled: e.isBusy,
					type: "button",
					onClick: s
				}, [...n[3] ||= [B("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-rotate-right"
				}, null, -1), H(" Reload ", -1)]], 8, Om)]),
				e.canManageDefinition ? (L(), R("li", km, [B("button", {
					disabled: e.isBusy,
					type: "button",
					onClick: n[0] ||= (e) => o("duplicate")
				}, [...n[4] ||= [B("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-copy"
				}, null, -1), H(" Duplicate ", -1)]], 8, Am)])) : U("", !0),
				e.canManageDefinition ? (L(), R("li", jm, [B("button", {
					class: "app:text-error",
					disabled: e.isBusy,
					type: "button",
					onClick: n[1] ||= (e) => o("delete")
				}, [...n[5] ||= [B("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), H(" Delete ", -1)]], 8, Mm)])) : U("", !0)
			])])], 512)]),
			B("div", {
				ref_key: "portabilityDialogHost",
				ref: i
			}, null, 512)
		], 32));
	}
});
//#endregion
//#region src/view/apps/species-builder/components/validation/validation-presentation.ts
function Pm(e, t) {
	return {
		count: (e?.count ?? 0) + 1,
		severity: e?.severity === "error" || Lm(t) === "error" ? "error" : "warning"
	};
}
function Fm(e) {
	return e.reduce((e, t) => Pm(e, t), void 0);
}
function Im(e) {
	if (!e) return "";
	let t = e.severity === "error" ? "error" : "warning";
	return `${e.count} character-creation ${t}${e.count === 1 ? "" : "s"}`;
}
function Lm(e) {
	return e.severity === "warning" ? "warning" : "error";
}
//#endregion
//#region src/view/apps/species-builder/components/species-builder-navigation.ts
var Rm = {
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
}, zm = {
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
function Bm(e) {
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
function Vm(e, t) {
	return e.kind === "project" ? t.activeTab === e.tab && (e.tab !== "species" || !t.isEditorOpen) : !t.isEditorOpen || t.activeTab !== "species" ? !1 : e.kind === "editor" ? t.activeEditorTab === e.tab : t.activeEditorTab === "tables" && t.activeTableTab === e.tab;
}
function Hm(e, t) {
	return t.isBusy || e.kind !== "project" && !t.hasSelectedDefinition;
}
function Um(e) {
	return e.kind === "project" ? e.tab === "species" || e.tab === "species-table" ? e.tab : void 0 : e.tab;
}
function Wm(e, t) {
	let n = {};
	for (let r of e) {
		if (r.scope === "species-table") {
			Gm(n, "species-table", r);
			continue;
		}
		Gm(n, "species", r), r.definitionIndex === t && Gm(n, r.scope === "subspecies" ? "subspecies" : r.section, r);
	}
	return n;
}
function Gm(e, t, n) {
	e[t] = Pm(e[t], n);
}
function Km(e, t, n, r) {
	return e === "settings" ? {
		description: "Control optional authoring tools and sample definitions.",
		label: "Settings"
	} : e === "species-table" ? {
		description: "Configure the weighted world table WFRP uses to roll a character's species.",
		label: "Species Table"
	} : e === "wfrp-config" ? {
		description: "Review the WFRP config generated from the current draft.",
		label: "WFRP Config"
	} : t ? n === "tables" ? zm[r] : Rm[n] : {
		description: "Choose a species to edit or create a new definition.",
		label: "Custom Species"
	};
}
//#endregion
//#region src/view/apps/species-builder/components/SpeciesBuilderValidationDot.vue?vue&type=script&setup=true&lang.ts
var qm = ["title"], Jm = { class: "app:sr-only" }, Ym = /* @__PURE__ */ P({
	__name: "SpeciesBuilderValidationDot",
	props: { indicator: {} },
	setup(e) {
		return (t, n) => e.indicator ? (L(), R("span", {
			key: 0,
			class: "app:ml-auto app:inline-flex app:items-center",
			title: M(Im)(e.indicator)
		}, [B("span", {
			"aria-hidden": "true",
			class: O(["dui-status dui-status-sm", e.indicator.severity === "error" ? "dui-status-error" : "dui-status-warning"])
		}, null, 2), B("span", Jm, k(M(Im)(e.indicator)), 1)], 8, qm)) : U("", !0);
	}
}), Xm = { class: "app:w-48 app:shrink-0" }, Zm = {
	"aria-label": "Species Builder sections",
	class: "app:sticky app:top-20"
}, Qm = { class: "dui-menu dui-menu-sm app:w-full app:rounded-box app:bg-base-200" }, $m = { class: "dui-menu-title" }, eh = [
	"aria-current",
	"disabled",
	"onClick"
], th = /* @__PURE__ */ P({
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
		let n = e, r = t, i = W(() => Bm(n.showGeneratedConfigTab)), a = W(() => ({
			activeEditorTab: n.activeEditorTab,
			activeTableTab: n.activeTableTab,
			activeTab: n.activeTab,
			hasSelectedDefinition: n.hasSelectedDefinition,
			isBusy: n.isBusy,
			isEditorOpen: n.isEditorOpen
		}));
		async function o(e, t) {
			if (Hm(e, a.value)) return;
			let n = t.currentTarget instanceof HTMLElement ? t.currentTarget.closest(".wfrp4e-customizer-apps-root") : null;
			e.kind === "project" ? r("selectTab", e.tab) : e.kind === "editor" ? r("selectEditorTab", e.tab) : r("selectTableTab", e.tab), await kn(), n?.scrollTo({ top: 0 });
		}
		function s(e) {
			let t = Um(e);
			return t ? n.validationCounts[t] : void 0;
		}
		return (e, t) => (L(), R("aside", Xm, [B("nav", Zm, [B("ul", Qm, [(L(!0), R(I, null, F(i.value, (e) => (L(), R(I, { key: e.key }, [B("li", $m, [B("span", null, k(e.label), 1)]), (L(!0), R(I, null, F(e.entries, (e) => (L(), R("li", { key: `${e.kind}-${e.tab}` }, [B("button", {
			"aria-current": M(Vm)(e, a.value) ? "page" : void 0,
			class: O({ "dui-menu-active": M(Vm)(e, a.value) }),
			disabled: M(Hm)(e, a.value),
			type: "button",
			onClick: (t) => o(e, t)
		}, [
			B("i", {
				"aria-hidden": "true",
				class: O(e.icon)
			}, null, 2),
			B("span", null, k(e.label), 1),
			V(Ym, { indicator: s(e) }, null, 8, ["indicator"])
		], 10, eh)]))), 128))], 64))), 128))])])]));
	}
}), nh = { "aria-live": "polite" }, rh = {
	key: 0,
	role: "alert",
	class: "dui-alert dui-alert-error app:m-0"
}, ih = { class: "app:flex-1" }, ah = {
	key: 2,
	role: "alert",
	class: "dui-alert dui-alert-error app:m-0"
}, oh = {
	key: 3,
	class: "dui-alert dui-alert-info app:m-0"
}, sh = /* @__PURE__ */ P({
	__name: "SpeciesBuilderStatus",
	props: {
		chargenErrorCount: {},
		chargenWarningCount: {},
		loadError: {},
		message: {},
		validationMessage: {}
	},
	emits: ["reviewIssues"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = W(() => n.chargenErrorCount + n.chargenWarningCount);
		return (t, n) => (L(), R("section", nh, [e.loadError ? (L(), R("p", rh, [n[1] ||= B("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-circle-exclamation"
		}, null, -1), B("span", null, k(e.loadError), 1)])) : i.value > 0 ? (L(), R("div", {
			key: 1,
			role: "alert",
			class: O(["dui-alert app:m-0", e.chargenErrorCount > 0 ? "dui-alert-error" : "dui-alert-warning"])
		}, [
			B("i", {
				"aria-hidden": "true",
				class: O(["fa-solid", e.chargenErrorCount > 0 ? "fa-circle-exclamation" : "fa-triangle-exclamation"])
			}, null, 2),
			B("span", ih, [e.chargenErrorCount > 0 ? (L(), R(I, { key: 0 }, [H(k(e.chargenErrorCount) + " character-creation " + k(e.chargenErrorCount === 1 ? "error affects" : "errors affect") + " species that can be rolled or selected. ", 1)], 64)) : U("", !0), e.chargenWarningCount > 0 ? (L(), R(I, { key: 1 }, [H(k(e.chargenWarningCount) + " validation " + k(e.chargenWarningCount === 1 ? "warning applies" : "warnings apply") + " to species that are not currently rollable or selectable. ", 1)], 64)) : U("", !0)]),
			B("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: n[0] ||= (e) => r("reviewIssues")
			}, [H(" Review " + k(i.value === 1 ? "Issue" : "Issues") + " ", 1), n[2] ||= B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-chevron-right"
			}, null, -1)])
		], 2)) : e.validationMessage ? (L(), R("p", ah, [n[3] ||= B("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-circle-exclamation"
		}, null, -1), B("span", null, k(e.validationMessage), 1)])) : e.message ? (L(), R("p", oh, [n[4] ||= B("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-circle-info"
		}, null, -1), B("span", null, k(e.message), 1)])) : U("", !0)]));
	}
}), ch = new Set(Object.values(q));
function lh(e, t) {
	if (!J(e)) return `${t} must be a JSON object.`;
	for (let [n, r] of Object.entries(e)) {
		if (!ch.has(n)) return `${t}.${n} is not a supported WFRP characteristic.`;
		let e = Oh(r, `${t}.${n}`, "string formula");
		if (e) return e;
	}
	return "";
}
function uh(e, t) {
	return Eh(e, t, [
		"die",
		"feet",
		"inches"
	], (e, t) => Th(e, t, [
		["die", Oh],
		["feet", kh],
		["inches", kh]
	], /* @__PURE__ */ new Set()));
}
function dh(e, t) {
	return Eh(e, t, ["formula"], (e, t) => Th(e, t, [["formula", (e, t) => Oh(e, t, "string formula")]], new Set(["formula"])));
}
function fh(e, t) {
	return Eh(e, t, ["rows"], (e, t) => Th(e, t, [["rows", ph]], new Set(["rows"])));
}
function ph(e, t) {
	return Dh(e, t, (e, t) => hh(e, t));
}
function mh(e, t) {
	return Dh(e, t, (e, t) => hh(e, t));
}
function hh(e, t) {
	return Eh(e, t, ["name"], (e, t) => Th(e, t, [["name", Oh]], new Set(["name"])));
}
function gh(e, t) {
	return Dh(e, t, (e, t) => Eh(e, t, ["choices"], (e, t) => Th(e, t, [["choices", (e, t) => yh(e, t, !0)]], new Set(["choices"]))));
}
function _h(e, t) {
	return Dh(e, t, (e, t) => Eh(e, t, ["replacement", "rolled"], (e, t) => Th(e, t, [["replacement", hh], ["rolled", hh]], new Set(["replacement", "rolled"]))));
}
function vh(e, t) {
	return Dh(e, t, (e, t) => Eh(e, t, ["replacements", "rolled"], (e, t) => Th(e, t, [["replacements", (e, t) => yh(e, t, !0)], ["rolled", hh]], new Set(["replacements", "rolled"]))));
}
function yh(e, t, n) {
	return n && Array.isArray(e) && e.length === 0 ? `${t} must contain at least one entry.` : mh(e, t);
}
function bh(e, t) {
	return Dh(e, t, Oh);
}
function xh(e, t) {
	return wh(e, t, Oh);
}
function Sh(e, t) {
	return wh(e, t, kh);
}
function Ch(e, t) {
	return wh(e, t, bh);
}
function wh(e, t, n) {
	if (!J(e)) return `${t} must be a JSON object.`;
	for (let [r, i] of Object.entries(e)) {
		if (!r.trim()) return `${t} must not contain an empty key.`;
		let e = n(i, `${t}[${JSON.stringify(r)}]`);
		if (e) return e;
	}
	return "";
}
function Th(e, t, n, r) {
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
function Eh(e, t, n, r) {
	if (!J(e)) return `${t} must be a JSON object.`;
	let i = Object.keys(e).find((e) => !n.includes(e));
	return i ? `${t}.${i} is not supported by species definition export version 1.` : r(e, t);
}
function Dh(e, t, n) {
	if (!Array.isArray(e)) return `${t} must be an array.`;
	for (let [r, i] of e.entries()) {
		let e = n(i, `${t}[${r}]`);
		if (e) return e;
	}
	return "";
}
function Oh(e, t, n = "non-empty string") {
	return typeof e == "string" && e.trim() ? "" : `${t} must be a ${n}.`;
}
function kh(e, t) {
	return typeof e == "number" && Number.isFinite(e) ? "" : `${t} must be a finite number.`;
}
function Ah(e, t) {
	return typeof e == "boolean" ? "" : `${t} must be a boolean.`;
}
//#endregion
//#region src/functions/species-builder/definition-portability/validation.ts
var jh = [
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
], Mh = [
	...jh,
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
], Nh = [
	...jh,
	"skillsAdded",
	"skillsRemoved",
	"talentsAdded",
	"talentsRemoved",
	"traitsAdded",
	"traitsRemoved"
];
function Ph(e) {
	return Eh(e, "definition", Mh, Fh);
}
function Fh(e, t) {
	return Ih(e, t) || Th(e, t, [
		["includeInExtraSpecies", Ah],
		["age", Oh],
		["height", uh],
		["careerReplacementRows", vh],
		["careerReplacements", Ch],
		["linkedSkills", mh],
		["linkedTalents", gh],
		["linkedTraits", mh],
		["skills", bh],
		["talents", bh],
		["traits", bh],
		["subspecies", Lh]
	], new Set(["includeInExtraSpecies"]));
}
function Ih(e, t) {
	return Th(e, t, [
		["key", Rh],
		["name", Oh],
		["characteristics", lh],
		["randomTalents", Sh],
		["talentReplacementRows", _h],
		["talentReplacements", xh],
		["movement", kh],
		["fate", kh],
		["resilience", kh],
		["extra", kh],
		["woundFormula", dh],
		["careerTable", fh]
	], new Set(["key", "name"]));
}
function Lh(e, t) {
	let n = Dh(e, t, (e, t) => Eh(e, t, Nh, (e, t) => Ih(e, t) || Th(e, t, [
		["skillsAdded", bh],
		["skillsRemoved", bh],
		["talentsAdded", bh],
		["talentsRemoved", bh],
		["traitsAdded", bh],
		["traitsRemoved", bh]
	], /* @__PURE__ */ new Set())));
	if (n || !Array.isArray(e)) return n;
	let r = /* @__PURE__ */ new Set();
	for (let [n, i] of e.entries()) {
		let e = is(i.key);
		if (r.has(e)) return `${t}[${n}].key duplicates normalized subspecies key ${JSON.stringify(e)}.`;
		r.add(e);
	}
	return "";
}
function Rh(e, t) {
	return Oh(e, t) || (is(e) ? "" : `${t} must contain at least one ASCII letter or number.`);
}
//#endregion
//#region src/functions/species-builder/definition-portability/index.ts
var zh = "wfrp4e-customizer-species-definition";
function Bh(e) {
	let t = Hh(e);
	if (!t.ok) throw Error(`Species definition cannot be exported: ${t.error}`);
	let n = {
		definition: Wh(t.definition),
		format: zh,
		version: 1
	};
	return JSON.stringify(n, null, 2);
}
function Vh(e) {
	let t;
	try {
		t = JSON.parse(e);
	} catch (e) {
		return Zh(`Import is not valid JSON: ${e instanceof Error ? e.message : "Unknown JSON error."}`);
	}
	if (!J(t)) return Zh("Import payload must be a JSON object.");
	let n = Object.keys(t).find((e) => ![
		"definition",
		"format",
		"version"
	].includes(e));
	if (n) return Zh(`${n} is not supported by species definition export version 1.`);
	if (t.format !== "wfrp4e-customizer-species-definition") return Zh(`Import payload format must be "${zh}".`);
	if (t.version !== 1) return Zh("Import payload version must be 1.");
	if (!("definition" in t)) return Zh("Import payload must include a definition object.");
	let r = Ph(t.definition);
	if (r) return Zh(r);
	let i = Hh(t.definition);
	return i.ok ? {
		definition: Wh(i.definition),
		ok: !0
	} : i;
}
function Hh(e) {
	let t = Uh(e);
	if (t) return Zh(t);
	let n = du({
		definitions: [e],
		showGeneratedConfigTab: !1
	}).definitions[0];
	return n ? {
		definition: n,
		ok: !0
	} : Zh("definition could not be normalized as a Species Builder definition.");
}
function Uh(e) {
	if (!J(e)) return "definition must be a JSON object.";
	if (typeof e.key != "string" || !e.key.trim()) return "definition.key must be a non-empty string.";
	if (typeof e.name != "string" || !e.name.trim()) return "definition.name must be a non-empty string.";
	if ("includeInExtraSpecies" in e && typeof e.includeInExtraSpecies != "boolean") return "definition.includeInExtraSpecies must be a boolean.";
	if ("subspecies" in e && !Array.isArray(e.subspecies)) return "definition.subspecies must be an array.";
	let t = e.subspecies ?? [];
	for (let [e, n] of t.entries()) {
		if (!J(n)) return `definition.subspecies[${e}] must be a JSON object.`;
		if (typeof n.key != "string" || !n.key.trim()) return `definition.subspecies[${e}].key must be a non-empty string.`;
		if (typeof n.name != "string" || !n.name.trim()) return `definition.subspecies[${e}].name must be a non-empty string.`;
	}
	return "";
}
function Wh(e) {
	let t = {
		...e,
		careerTable: Xh(e.careerTable),
		subspecies: e.subspecies?.map(Gh)
	};
	return e.linkedSkills && (t.linkedSkills = e.linkedSkills.map(Kh), t.skills = hc(t.linkedSkills)), e.linkedTalents && (t.linkedTalents = e.linkedTalents.map(qh), t.talents = gc(t.linkedTalents)), e.linkedTraits && (t.linkedTraits = e.linkedTraits.map(Kh), t.traits = hc(t.linkedTraits)), e.talentReplacementRows && (t.talentReplacementRows = e.talentReplacementRows.map(Jh), t.talentReplacements = pc(t.talentReplacementRows)), e.careerReplacementRows && (t.careerReplacementRows = e.careerReplacementRows.map(Yh), t.careerReplacements = mc(t.careerReplacementRows)), t;
}
function Gh(e) {
	let t = {
		...e,
		careerTable: Xh(e.careerTable)
	};
	return e.talentReplacementRows && (t.talentReplacementRows = e.talentReplacementRows.map(Jh), t.talentReplacements = pc(t.talentReplacementRows)), t;
}
function Kh(e) {
	return { name: cc(e) };
}
function qh(e) {
	return { choices: e.choices.map(Kh) };
}
function Jh(e) {
	return {
		replacement: Kh(e.replacement),
		rolled: Kh(e.rolled)
	};
}
function Yh(e) {
	return {
		replacements: e.replacements.map(Kh),
		rolled: Kh(e.rolled)
	};
}
function Xh(e) {
	return e ? { rows: e.rows.map((e) => ({ name: e.name })) } : void 0;
}
function Zh(e) {
	return {
		error: e,
		ok: !1
	};
}
//#endregion
//#region src/view/apps/species-builder/components/SpeciesDefinitionPortability.vue?vue&type=script&setup=true&lang.ts
var Qh = ["disabled"], $h = ["onKeydown"], eg = { class: "dui-modal-box" }, tg = { id: "species-portability-title" }, ng = {
	key: 0,
	class: "dui-alert dui-alert-info",
	role: "note"
}, rg = {
	key: 1,
	class: "dui-fieldset"
}, ig = {
	key: 0,
	class: "dui-alert dui-alert-warning",
	role: "status"
}, ag = ["disabled", "value"], og = ["disabled"], sg = {
	key: 2,
	class: "dui-divider"
}, cg = { class: "dui-fieldset" }, lg = ["disabled"], ug = ["disabled", "value"], dg = ["disabled"], fg = {
	key: 3,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, pg = {
	key: 4,
	class: "dui-alert dui-alert-info"
}, mg = {
	key: 5,
	class: "dui-alert dui-alert-warning",
	role: "alert"
}, hg = { "aria-live": "polite" }, gg = { class: "dui-modal-action" }, _g = ["disabled"], vg = /* @__PURE__ */ P({
	__name: "SpeciesDefinitionPortability",
	props: {
		definition: {},
		dialogHost: {},
		existingKeys: {},
		isDisabled: { type: Boolean },
		isImportOnly: { type: Boolean }
	},
	emits: ["importDefinition"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ j(), a = im(), o = /* @__PURE__ */ j(""), s = /* @__PURE__ */ j(""), c = /* @__PURE__ */ j(""), l = /* @__PURE__ */ j(), u = W(() => {
			if (!n.definition) return {
				error: "Select a species before exporting.",
				text: ""
			};
			try {
				return {
					error: "",
					text: Bh(n.definition)
				};
			} catch (e) {
				return {
					error: e instanceof Error ? e.message : "The selected species cannot be exported.",
					text: ""
				};
			}
		}), d = W(() => !!l.value && n.existingKeys.includes(is(l.value?.key ?? "")));
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
			let e = Vh(s.value);
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
		return (t, n) => (L(), R(I, null, [B("button", {
			class: "app:w-full app:whitespace-nowrap",
			disabled: e.isDisabled,
			type: "button",
			onClick: f
		}, [B("i", {
			"aria-hidden": "true",
			class: O(e.isImportOnly ? "fa-solid fa-file-import" : "fa-solid fa-arrow-right-arrow-left")
		}, null, 2), H(" " + k(e.isImportOnly ? "Import Species" : "Import / Export"), 1)], 8, Qh), e.dialogHost ? (L(), z(lr, {
			key: 0,
			to: e.dialogHost
		}, [B("dialog", {
			ref_key: "dialog",
			ref: i,
			"aria-labelledby": "species-portability-title",
			class: "dui-modal",
			onClose: m,
			onKeydown: Zo(Yo(p, ["stop", "prevent"]), ["esc"]),
			onKeyup: n[0] ||= Zo(Yo(() => {}, ["stop"]), ["esc"])
		}, [B("section", eg, [
			B("h2", tg, k(e.isImportOnly ? "Import Species Definition" : "Transfer Species Definition"), 1),
			n[7] ||= B("p", null, " Imports are staged here and never replace the current draft. Exported JSON contains only project-owned authoring data and names, without Foundry document links. ", -1),
			e.isImportOnly ? (L(), R("div", ng, [...n[1] ||= [B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-lock"
			}, null, -1), B("span", null, " Installed species cannot be exported because their source package owns the definition. You can still import a separate custom species below. ", -1)]])) : (L(), R("fieldset", rg, [
				n[3] ||= B("legend", { class: "dui-fieldset-legend" }, "Export selected species", -1),
				u.value.error ? (L(), R("p", ig, k(u.value.error), 1)) : (L(), R("textarea", {
					key: 1,
					"aria-label": "Species definition export JSON",
					class: "dui-textarea",
					disabled: e.isDisabled,
					readonly: "",
					rows: "10",
					value: u.value.text
				}, null, 8, ag)),
				B("button", {
					class: "dui-btn",
					disabled: e.isDisabled || !u.value.text,
					type: "button",
					onClick: v
				}, [...n[2] ||= [B("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-copy"
				}, null, -1), H(" Copy Export ", -1)]], 8, og)
			])),
			e.isImportOnly ? U("", !0) : (L(), R("div", sg, "Import")),
			B("fieldset", cg, [
				n[4] ||= B("legend", { class: "dui-fieldset-legend" }, "Choose or paste a species export", -1),
				B("input", {
					accept: "application/json,.json",
					"aria-label": "Choose species definition JSON",
					class: "dui-file-input",
					disabled: e.isDisabled,
					type: "file",
					onChange: _
				}, null, 40, lg),
				B("textarea", {
					"aria-label": "Species definition import JSON",
					class: "dui-textarea",
					disabled: e.isDisabled,
					placeholder: "Paste a Species Builder export here",
					rows: "8",
					value: s.value,
					onInput: h
				}, null, 40, ug),
				B("button", {
					class: "dui-btn",
					disabled: e.isDisabled || !s.value.trim(),
					type: "button",
					onClick: g
				}, " Validate Import ", 8, dg)
			]),
			o.value ? (L(), R("p", fg, [n[5] ||= B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), B("span", null, k(o.value), 1)])) : l.value ? (L(), R("section", pg, [n[6] ||= B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-eye"
			}, null, -1), B("div", null, [
				B("strong", null, k(l.value.name), 1),
				B("p", null, "Key: " + k(l.value.key), 1),
				B("p", null, k(l.value.subspecies?.length ?? 0) + " subspecies", 1)
			])])) : U("", !0),
			d.value ? (L(), R("p", mg, " A species with key " + k(l.value?.key) + " already exists. Change the key in the import JSON and validate it again. ", 1)) : U("", !0),
			B("p", hg, k(c.value), 1),
			B("div", gg, [B("button", {
				class: "dui-btn dui-btn-primary",
				disabled: e.isDisabled || !l.value || d.value,
				type: "button",
				onClick: y
			}, " Add Imported Species ", 8, _g), B("button", {
				class: "dui-btn dui-btn-ghost",
				type: "button",
				onClick: p
			}, "Close")])
		]), n[8] ||= B("form", {
			class: "dui-modal-backdrop",
			method: "dialog"
		}, [B("button", {
			"aria-label": "Close transfer dialog",
			type: "submit"
		}, "Close")], -1)], 40, $h)], 8, ["to"])) : U("", !0)], 64));
	}
}), yg = ["onKeydown"], bg = {
	key: 0,
	class: "dui-modal-box"
}, xg = { class: "dui-modal-action" }, Sg = /* @__PURE__ */ P({
	__name: "UnsafeSaveConfirmationSubView",
	props: { isOpen: { type: Boolean } },
	emits: ["close", "confirm"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ j(), a = im();
		function o() {
			i.value?.close();
		}
		function s() {
			n.isOpen && r("close"), a.restore();
		}
		return Jn(() => n.isOpen, async (e) => {
			e ? (a.capture(), await kn(), n.isOpen && !i.value?.open && i.value?.showModal()) : i.value?.open && i.value.close();
		}, {
			flush: "post",
			immediate: !0
		}), (t, n) => (L(), R("dialog", {
			ref_key: "dialog",
			ref: i,
			class: "dui-modal",
			"aria-describedby": "species-builder-unsafe-save-message",
			"aria-labelledby": "species-builder-unsafe-save-title",
			onClose: s,
			onKeydown: Zo(Yo(o, ["stop", "prevent"]), ["esc"]),
			onKeyup: n[1] ||= Zo(Yo(() => {}, ["stop"]), ["esc"])
		}, [e.isOpen ? (L(), R("section", bg, [
			n[2] ||= B("h2", { id: "species-builder-unsafe-save-title" }, "Save Despite Character-Creation Errors?", -1),
			n[3] ||= B("div", {
				id: "species-builder-unsafe-save-message",
				class: "dui-alert dui-alert-warning app:mt-3",
				role: "alert"
			}, [B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-triangle-exclamation"
			}), B("span", null, " These changes contain errors for species that can be rolled or selected. Saving is unsafe and may cause species selection or character creation to fail. ")], -1),
			B("div", xg, [B("button", {
				class: "dui-btn dui-btn-warning",
				type: "button",
				onClick: n[0] ||= (e) => r("confirm")
			}, " Save Anyway "), B("button", {
				autofocus: "",
				class: "dui-btn",
				type: "button",
				onClick: o
			}, "Cancel")])
		])) : U("", !0), n[4] ||= B("form", {
			class: "dui-modal-backdrop",
			method: "dialog"
		}, [B("button", {
			"aria-label": "Cancel unsafe save",
			type: "submit"
		}, "Close")], -1)], 40, yg));
	}
});
//#endregion
//#region src/view/apps/species-builder/components/unsafe-save.ts
function Cg(e) {
	let t = /* @__PURE__ */ j(!1);
	function n() {
		if (e.requiresUnsafeSaveConfirmation.value) {
			t.value = !0;
			return;
		}
		e.saveChanges();
	}
	function r() {
		t.value = !1, e.saveChanges({ allowValidationErrors: !0 });
	}
	function i() {
		t.value = !1;
	}
	return {
		closeConfirmation: i,
		confirmSave: r,
		isConfirmationOpen: t,
		requestSave: n
	};
}
//#endregion
//#region src/view/apps/species-builder/components/deletion.ts
function wg(e) {
	let t = /* @__PURE__ */ j(null);
	function n() {
		let n = e.selectedDefinition.value;
		n && (t.value = {
			kind: "species",
			message: `Delete species "${Tg(n)}"?`
		});
	}
	function r(n) {
		let r = e.selectedDefinition.value?.subspecies?.[n];
		r && (t.value = {
			index: n,
			kind: "subspecies",
			message: `Delete subspecies "${Tg(r)}"?`
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
function Tg(e) {
	return e.name.trim() || e.key.trim() || "Untitled Species";
}
//#endregion
//#region src/view/apps/species-builder/components/validation/species-builder-validation-summary.ts
var Eg = [
	"careerTable",
	"randomTalents",
	"talentReplacement",
	"careerReplacement"
], Dg = {
	attributes: "Attributes",
	careerReplacement: "Career Replacement",
	careerTable: "Career Table",
	details: "Details",
	randomTalents: "Random Talents",
	skills: "Skills",
	"species-table": "Species Table",
	subspecies: "Subspecies",
	talentReplacement: "Talent Replacement",
	talents: "Talents",
	traits: "Traits",
	wounds: "Wounds"
};
function Og(e) {
	return e.filter((e) => e.code !== "species-table-definition-not-ready" && e.code !== "species-table-runtime-not-ready");
}
function kg(e) {
	return e.scope === "species-table" ? {
		kind: "project",
		tab: "species-table"
	} : e.definitionIndex === void 0 ? {
		kind: "project",
		tab: "species"
	} : e.scope === "subspecies" && e.subspeciesIndex !== void 0 ? {
		definitionIndex: e.definitionIndex,
		kind: "subspecies",
		subspeciesIndex: e.subspeciesIndex,
		subspeciesTab: Fg(e.section),
		tableTab: Lg(e.section) ? e.section : void 0
	} : Lg(e.section) ? {
		definitionIndex: e.definitionIndex,
		editorTab: "tables",
		kind: "definition",
		tableTab: e.section
	} : {
		definitionIndex: e.definitionIndex,
		editorTab: Pg(e.section),
		kind: "definition"
	};
}
function Ag(e, t) {
	return e.map((e, t) => ({
		index: t,
		issue: e
	})).sort((e, t) => Rg(e.issue) - Rg(t.issue) || e.index - t.index).map(({ issue: e }) => ({
		context: Mg(e, t),
		issue: e
	}));
}
function jg(e, t) {
	let n = e?.destination;
	return n?.kind === "subspecies" && n.subspeciesIndex === t ? {
		tab: n.subspeciesTab,
		tableTab: n.tableTab
	} : void 0;
}
function Mg(e, t) {
	if (e.scope === "species-table") return e.rowIndex === void 0 ? "Species Table" : `Species Table · Row ${e.rowIndex + 1}`;
	let n = t[e.definitionIndex ?? -1], r = Ng(n, "Unknown Species");
	if (e.scope !== "subspecies") return `${r} · ${Dg[e.section]}`;
	let i = n?.subspecies?.[e.subspeciesIndex ?? -1];
	return `${r} / ${Ng(i, "Unknown Subspecies")} · ${Ig(e.section)}`;
}
function Ng(e, t) {
	return e?.name.trim() || e?.key.trim() || t;
}
function Pg(e) {
	return e === "subspecies" ? "subspecies" : e === "species-table" || Lg(e) ? "details" : e;
}
function Fg(e) {
	return Lg(e) ? "tables" : e === "skills" || e === "traits" ? "changes" : e === "talents" || e === "wounds" ? e : "details";
}
function Ig(e) {
	return e === "subspecies" || e === "attributes" || e === "details" ? "Details" : e === "skills" || e === "traits" ? "Skills & Traits" : Dg[e];
}
function Lg(e) {
	return Eg.includes(e);
}
function Rg(e) {
	return Lm(e) === "error" ? 0 : 1;
}
//#endregion
//#region src/view/apps/species-builder/components/validation/SpeciesBuilderValidationSummaryDialog.vue?vue&type=script&setup=true&lang.ts
var zg = ["onKeydown"], Bg = { class: "dui-modal-box app:max-w-3xl" }, Vg = { class: "app:flex app:items-start app:justify-between app:gap-4" }, Hg = { class: "app:flex app:flex-wrap app:gap-2" }, Ug = {
	key: 0,
	class: "dui-badge dui-badge-error"
}, Wg = {
	key: 1,
	class: "dui-badge dui-badge-warning"
}, Gg = { class: "dui-list app:max-h-96 app:overflow-y-auto" }, Kg = ["autofocus", "onClick"], qg = {
	key: 0,
	"aria-hidden": "true",
	class: "fa-solid fa-circle-exclamation app:text-error"
}, Jg = {
	key: 1,
	"aria-hidden": "true",
	class: "fa-solid fa-triangle-exclamation app:text-warning"
}, Yg = { class: "app:flex app:min-w-0 app:flex-1 app:flex-col app:items-start" }, Xg = { class: "app:sr-only" }, Zg = /* @__PURE__ */ P({
	__name: "SpeciesBuilderValidationSummaryDialog",
	props: {
		definitions: {},
		isOpen: { type: Boolean },
		issues: {}
	},
	emits: ["close", "selectIssue"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ j(), a = im(), o = /* @__PURE__ */ j(), s = W(() => Ag(n.issues, n.definitions)), c = W(() => n.issues.filter((e) => Lm(e) === "error").length), l = W(() => n.issues.length - c.value);
		function u() {
			i.value?.close();
		}
		function d(e) {
			o.value = e, u();
		}
		function f() {
			let e = o.value;
			o.value = void 0, r("close"), a.restore(), e && r("selectIssue", e);
		}
		return Jn(() => n.isOpen, async (e) => {
			e ? (a.capture(), await kn(), n.isOpen && !i.value?.open && i.value?.showModal()) : i.value?.open && i.value.close();
		}, {
			flush: "post",
			immediate: !0
		}), (e, t) => (L(), R("dialog", {
			ref_key: "dialog",
			ref: i,
			"aria-describedby": "species-builder-validation-description",
			"aria-labelledby": "species-builder-validation-title",
			class: "dui-modal",
			onClose: f,
			onKeydown: Zo(Yo(u, ["stop", "prevent"]), ["esc"]),
			onKeyup: t[0] ||= Zo(Yo(() => {}, ["stop"]), ["esc"])
		}, [B("section", Bg, [
			B("header", Vg, [B("div", null, [B("div", Hg, [c.value > 0 ? (L(), R("span", Ug, k(c.value) + " " + k(c.value === 1 ? "error" : "errors"), 1)) : U("", !0), l.value > 0 ? (L(), R("span", Wg, k(l.value) + " " + k(l.value === 1 ? "warning" : "warnings"), 1)) : U("", !0)]), t[1] ||= B("h2", { id: "species-builder-validation-title" }, "Character-Creation Validation", -1)]), B("button", {
				"aria-label": "Close validation summary",
				class: "dui-btn dui-btn-ghost dui-btn-sm dui-btn-square",
				type: "button",
				onClick: u
			}, [...t[2] ||= [B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-xmark"
			}, null, -1)]])]),
			t[4] ||= B("p", { id: "species-builder-validation-description" }, " Errors affect species that can currently be rolled or selected. Warnings mark inactive draft or reference data. Choose an item to open the most relevant editor section. ", -1),
			B("ul", Gg, [(L(!0), R(I, null, F(s.value, (e, n) => (L(), R("li", {
				key: `${e.issue.code}-${n}`,
				class: "dui-list-row app:p-0"
			}, [B("button", {
				autofocus: n === 0,
				class: O(["dui-btn dui-btn-outline app:h-auto app:w-full app:justify-start app:whitespace-normal app:p-3 app:text-left", M(Lm)(e.issue) === "error" ? "dui-btn-error" : "dui-btn-warning"]),
				type: "button",
				onClick: (t) => d(e.issue)
			}, [
				M(Lm)(e.issue) === "error" ? (L(), R("i", qg)) : (L(), R("i", Jg)),
				B("span", Yg, [
					B("strong", null, k(e.context), 1),
					B("span", Xg, k(M(Lm)(e.issue) === "error" ? "Error:" : "Warning:"), 1),
					B("span", null, k(e.issue.message), 1)
				]),
				t[3] ||= B("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-chevron-right"
				}, null, -1)
			], 10, Kg)]))), 128))]),
			B("div", { class: "dui-modal-action" }, [B("button", {
				class: "dui-btn dui-btn-ghost",
				type: "button",
				onClick: u
			}, "Close")])
		]), t[5] ||= B("form", {
			class: "dui-modal-backdrop",
			method: "dialog"
		}, [B("button", {
			"aria-label": "Close validation summary",
			type: "submit"
		}, "Close")], -1)], 40, zg));
	}
});
//#endregion
//#region src/view/apps/species-builder/components/validation/use-validation-summary.ts
function Qg(e) {
	let t = /* @__PURE__ */ j(!1), n = /* @__PURE__ */ j(), r = W(() => Og(e.issues.value)), i = 0;
	function a() {
		r.value.length > 0 && (t.value = !0);
	}
	function o() {
		t.value = !1;
	}
	async function s(t) {
		let r = kg(t);
		if (o(), n.value = void 0, r.kind === "project") {
			e.selectProjectTab(r.tab);
			return;
		}
		if (e.selectDefinition(r.definitionIndex), r.kind === "definition") {
			r.tableTab ? e.openTableTab(r.tableTab) : e.openEditorTab(r.editorTab);
			return;
		}
		e.openEditorTab("subspecies"), await kn(), n.value = {
			destination: r,
			sequence: ++i
		};
	}
	return {
		close: o,
		isOpen: t,
		navigationRequest: n,
		open: a,
		selectIssue: s,
		summaryIssues: r
	};
}
//#endregion
//#region src/functions/species-builder/example-species/goblins.ts
var $g = {
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
}, e_ = [
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
], t_ = [
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
], n_ = [
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
function r_() {
	return a_();
}
function i_() {
	return a_({ subspecies: [{
		careerTable: { rows: n_ },
		characteristics: {
			...$g,
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
function a_(e = {}) {
	return {
		age: "2d10+8",
		careerTable: { rows: e_ },
		characteristics: $g,
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
		skills: t_,
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
function o_() {
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
var s_ = [
	{
		createDefinition: o_,
		description: "A deliberately extreme species for stress-testing formulas and generated Traits.",
		id: "viltrumite",
		label: "Viltrumite"
	},
	{
		createDefinition: r_,
		description: "A Goblin player species seed using the sample species Journal direction.",
		id: "goblin",
		label: "Goblin"
	},
	{
		createDefinition: i_,
		description: "A Goblin seed with Night Goblin configured as a subspecies.",
		id: "night-goblin",
		label: "Night Goblin"
	}
], c_ = s_.map(({ description: e, id: t, label: n }) => ({
	description: e,
	id: t,
	label: n
}));
function l_() {
	return [o_(), i_()];
}
function u_(e) {
	return s_.find((t) => t.id === e)?.createDefinition();
}
//#endregion
//#region src/view/apps/species-builder/tabs/settings/SpeciesBuilderSettingsPanel.vue?vue&type=script&setup=true&lang.ts
var d_ = { class: "dui-card dui-card-border dui-card-sm" }, f_ = { class: "dui-card-body" }, p_ = { class: "dui-fieldset" }, m_ = { class: "dui-label" }, h_ = ["checked", "disabled"], g_ = { class: "dui-fieldset" }, __ = { class: "dui-fieldset-legend" }, v_ = { class: "dui-badge dui-badge-sm" }, y_ = { class: "dui-label app:w-full app:items-start app:justify-between app:gap-3 app:whitespace-normal" }, b_ = ["checked", "disabled"], x_ = { class: "dui-fieldset" }, S_ = ["disabled", "value"], C_ = ["value"], w_ = { class: "dui-fieldset-label" }, T_ = { class: "dui-join" }, E_ = ["disabled"], D_ = ["disabled"], O_ = /* @__PURE__ */ P({
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
		let n = t, r = e, i = W(() => r.exampleSpeciesOptions.find((e) => e.id === r.selectedExampleSpeciesId));
		function a(e) {
			return e.target instanceof HTMLInputElement && e.target.checked;
		}
		function o(e) {
			return e.target instanceof HTMLSelectElement ? e.target.value : "";
		}
		function s() {
			return r.speciesTable.ownership === "external" ? r.speciesTable.isRegistered ? "External table active" : "External table" : r.speciesTable.ownership === "managed" ? r.speciesTable.isRegistered ? "Registered" : "Not registered" : "No managed table yet";
		}
		return (t, r) => (L(), R("section", d_, [B("div", f_, [
			r[15] ||= B("header", null, [B("h2", { class: "dui-card-title" }, "Species Builder Settings"), B("p", null, "Control optional tools and add sample definitions to the current draft.")], -1),
			B("fieldset", p_, [
				r[6] ||= B("legend", { class: "dui-fieldset-legend" }, "Generated config", -1),
				r[7] ||= B("p", { class: "dui-fieldset-label" }, " Expose the read-only WFRP config generated from the current draft. ", -1),
				B("label", m_, [B("input", {
					class: "dui-checkbox",
					checked: e.showGeneratedConfigTab,
					disabled: e.isDisabled,
					type: "checkbox",
					onChange: r[0] ||= (e) => n("updateShowGeneratedConfigTab", a(e))
				}, null, 40, h_), r[5] ||= B("span", null, "Show WFRP config tab", -1)])
			]),
			B("fieldset", g_, [B("legend", __, [r[8] ||= H(" World Species Table ", -1), B("span", v_, k(s()), 1)]), B("label", y_, [r[9] ||= B("span", null, [B("strong", null, "Register managed table on save"), B("span", { class: "app:block app:text-base-content/70" }, " When enabled, Save Changes points WFRP’s world Species table setting to the Builder-managed table. Turning this off stops future registration; it does not change or delete the table currently selected by WFRP. ")], -1), B("input", {
				class: "dui-toggle dui-toggle-primary app:shrink-0",
				checked: e.autoRegisterSpeciesTable,
				disabled: e.isDisabled,
				type: "checkbox",
				onChange: r[1] ||= (e) => n("updateAutoRegisterSpeciesTable", a(e))
			}, null, 40, b_)])]),
			r[16] ||= B("div", { class: "dui-divider" }, "Sample Definitions", -1),
			B("fieldset", x_, [
				r[12] ||= B("legend", { class: "dui-fieldset-legend" }, "Example Species", -1),
				r[13] ||= B("p", { class: "dui-fieldset-label" }, " Add preconfigured species definitions matching sample species Journal material. ", -1),
				r[14] ||= B("label", {
					class: "dui-label",
					for: "species-builder-example"
				}, "Sample definition", -1),
				B("select", {
					id: "species-builder-example",
					class: "dui-select",
					disabled: e.isDisabled,
					value: e.selectedExampleSpeciesId,
					onChange: r[2] ||= (e) => n("updateSelectedExampleSpeciesId", o(e))
				}, [(L(!0), R(I, null, F(e.exampleSpeciesOptions, (e) => (L(), R("option", {
					key: e.id,
					value: e.id
				}, k(e.label), 9, C_))), 128))], 40, S_),
				B("p", w_, k(i.value?.description), 1),
				B("div", T_, [B("button", {
					class: "dui-btn dui-join-item",
					disabled: e.isDisabled || !e.selectedExampleSpeciesId,
					type: "button",
					onClick: r[3] ||= (t) => n("generateExampleSpecies", e.selectedExampleSpeciesId)
				}, [...r[10] ||= [B("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-scroll"
				}, null, -1), H(" Generate Selected ", -1)]], 8, E_), B("button", {
					class: "dui-btn dui-join-item",
					disabled: e.isDisabled || e.exampleSpeciesOptions.length === 0,
					type: "button",
					onClick: r[4] ||= (e) => n("generateAllExampleSpecies")
				}, [...r[11] ||= [B("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-layer-group"
				}, null, -1), H(" Generate All ", -1)]], 8, D_)])
			])
		])]));
	}
}), k_ = { class: "dui-card-actions" }, A_ = { class: "dui-badge" }, j_ = ["disabled", "title"], M_ = /* @__PURE__ */ P({
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
		return (t, r) => (L(), R("header", null, [
			(L(), z(Br(e.headingLevel), { class: "dui-card-title" }, {
				default: N(() => [H(k(e.title), 1)]),
				_: 1
			})),
			B("p", null, k(e.description), 1),
			B("div", k_, [B("span", A_, k(e.count), 1), B("button", {
				class: "dui-btn dui-btn-sm",
				disabled: e.isDisabled,
				title: e.actionTitle,
				type: "button",
				onClick: r[0] ||= (e) => n("add")
			}, [r[1] ||= B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), H(" " + k(e.actionLabel), 1)], 8, j_)])
		]));
	}
}), N_ = { class: "dui-card dui-card-border dui-card-sm" }, P_ = { class: "dui-card-body" }, F_ = { class: "app:flex app:flex-wrap app:items-center app:gap-2" }, I_ = { class: "dui-badge dui-badge-sm" }, L_ = { class: "app:text-base-content/70" }, R_ = {
	key: 0,
	class: "dui-alert dui-alert-info",
	role: "status"
}, z_ = {
	key: 1,
	class: "dui-alert dui-alert-warning",
	role: "status"
}, B_ = ["role"], V_ = {
	key: 3,
	class: "app:overflow-x-auto"
}, H_ = { class: "dui-table dui-table-sm" }, U_ = { scope: "row" }, W_ = ["for"], G_ = [
	"id",
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onChange"
], K_ = { value: "" }, q_ = ["disabled", "value"], J_ = ["id"], Y_ = ["for"], X_ = [
	"id",
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], Z_ = ["for"], Q_ = [
	"disabled",
	"title",
	"onClick"
], $_ = { class: "app:sr-only" }, ev = {
	key: 4,
	class: "dui-alert dui-alert-info",
	role: "status"
}, tv = /* @__PURE__ */ P({
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
		return (t, n) => (L(), R("section", N_, [B("div", P_, [
			V(M_, {
				"action-label": "Add Species",
				"action-title": "Add a weighted species result",
				count: e.draft.rows.length,
				description: "Weights set each species' share of random character-creation rolls.",
				"is-disabled": e.isDisabled,
				"heading-level": "h2",
				title: "Random Species Table",
				onAdd: n[0] ||= (e) => r("addRow")
			}, null, 8, ["count", "is-disabled"]),
			B("div", F_, [B("span", I_, k(h()), 1), B("span", L_, k(e.draft.name), 1)]),
			e.draft.ownership === "external" ? (L(), R("div", R_, [...n[1] ||= [B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-copy"
			}, null, -1), B("span", null, " This is the current WFRP source table. On Save, table changes create a Species Builder-managed copy and leave the imported source unchanged. ", -1)]])) : U("", !0),
			e.draft.requiresLinkRepair ? (L(), R("div", z_, [...n[2] ||= [B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-link-slash"
			}, null, -1), B("span", null, " One or more results lack WFRP's required UUID-link description. Save to generate or reuse species Journals and repair both the result name and link label. ", -1)]])) : U("", !0),
			f()[0] ? (L(), R("div", {
				key: 2,
				class: O(["dui-alert", p() ? "dui-alert-error" : "dui-alert-info"]),
				role: p() ? "alert" : "status"
			}, [n[3] ||= B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-triangle-exclamation"
			}, null, -1), B("span", null, [H(k(p() ? "Fix before saving:" : "Imported table needs attention:") + " " + k(f()[0]) + " ", 1), f().length > 1 ? (L(), R(I, { key: 0 }, [H(" (" + k(f().length) + " issues total) ", 1)], 64)) : U("", !0)])], 10, B_)) : U("", !0),
			e.draft.rows.length ? (L(), R("div", V_, [B("table", H_, [
				n[5] ||= B("caption", { class: "app:sr-only" }, " Weighted results for the world WFRP Species table ", -1),
				n[6] ||= B("thead", null, [B("tr", null, [
					B("th", { scope: "col" }, "#"),
					B("th", { scope: "col" }, "Species"),
					B("th", { scope: "col" }, "Weight"),
					B("th", { scope: "col" }, "Chance / range"),
					B("th", { scope: "col" }, [B("span", { class: "app:sr-only" }, "Actions")])
				])], -1),
				B("tbody", null, [(L(!0), R(I, null, F(e.draft.rows, (t, d) => (L(), R("tr", {
					key: t.resultId ?? `new-${d}`,
					class: O({ "app:outline app:outline-1 app:outline-error": u(d).length > 0 })
				}, [
					B("th", U_, k(d + 1), 1),
					B("td", null, [
						B("label", {
							class: "app:sr-only",
							for: `species-table-species-${d}`
						}, " Species for row " + k(d + 1), 9, W_),
						B("select", {
							id: `species-table-species-${d}`,
							"aria-describedby": l(t, d) ? `species-table-row-error-${d}` : void 0,
							"aria-invalid": s(t, d) || void 0,
							class: O(["dui-select dui-select-sm app:min-w-48 app:w-full", { "dui-select-error": s(t, d) }]),
							disabled: e.isDisabled,
							value: t.speciesKey,
							onChange: (e) => r("updateRowKey", d, i(e))
						}, [B("option", K_, k(t.name ? `Unrecognized: ${t.name}` : "Choose a species"), 1), (L(!0), R(I, null, F(e.options, (e) => (L(), R("option", {
							key: e.key,
							disabled: o(e.key, d),
							value: e.key
						}, k(e.label), 9, q_))), 128))], 42, G_),
						l(t, d) ? (L(), R("span", {
							key: 0,
							id: `species-table-row-error-${d}`,
							class: "app:mt-1 app:block app:text-xs app:text-error"
						}, k(l(t, d)), 9, J_)) : U("", !0)
					]),
					B("td", null, [B("label", {
						class: "app:sr-only",
						for: `species-table-weight-${d}`
					}, " Weight for row " + k(d + 1), 9, Y_), B("input", {
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
					}, null, 42, X_)]),
					B("td", null, [B("output", { for: `species-table-weight-${d}` }, k(m(e.summaries[d])), 9, Z_)]),
					B("td", null, [B("button", {
						class: "dui-btn dui-btn-error dui-btn-outline dui-btn-sm",
						disabled: e.isDisabled,
						title: `Remove ${t.name || `row ${d + 1}`}`,
						type: "button",
						onClick: (e) => r("removeRow", d)
					}, [n[4] ||= B("i", {
						"aria-hidden": "true",
						class: "fa-solid fa-trash"
					}, null, -1), B("span", $_, "Remove row " + k(d + 1), 1)], 8, Q_)])
				], 2))), 128))])
			])])) : (L(), R("div", ev, [...n[7] ||= [B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), B("span", null, "Add at least one species to create a managed world table.", -1)]]))
		])]));
	}
}), nv = ["aria-current"], rv = { class: "dui-list-col-grow app:flex app:min-w-0 app:flex-col app:gap-1" }, iv = { class: "app:flex app:flex-wrap app:items-center app:gap-2" }, av = { class: "app:flex app:flex-wrap app:items-center app:gap-1" }, ov = {
	key: 0,
	class: "dui-badge dui-badge-ghost dui-badge-sm"
}, sv = {
	key: 1,
	class: "dui-badge dui-badge-ghost dui-badge-sm"
}, cv = ["title"], lv = { class: "app:sr-only" }, uv = ["aria-label", "disabled"], dv = /* @__PURE__ */ P({
	__name: "SpeciesBuilderEntityRow",
	props: {
		actionLabel: { default: "Edit" },
		editIconClass: { default: "fa-solid fa-pen" },
		entryKey: {},
		iconClass: {},
		isDisabled: { type: Boolean },
		isReadOnly: {
			type: Boolean,
			default: !1
		},
		isSelected: {
			type: Boolean,
			default: !1
		},
		meta: { default: "" },
		readOnlyLabel: { default: "Installed" },
		title: {},
		validationIndicator: { default: void 0 }
	},
	emits: ["open"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (L(), R("li", {
			class: O(["dui-list-row", {
				"app:outline app:outline-1 app:outline-error": e.validationIndicator?.severity === "error",
				"app:outline app:outline-1 app:outline-warning": e.validationIndicator?.severity === "warning"
			}]),
			"aria-current": e.isSelected ? "true" : void 0
		}, [
			B("i", {
				"aria-hidden": "true",
				class: O(e.iconClass)
			}, null, 2),
			B("span", rv, [B("span", iv, [B("strong", null, k(e.title), 1), B("span", { class: O(["dui-badge dui-badge-outline dui-badge-sm", {
				"dui-badge-info": e.isSelected,
				"dui-badge-ghost": !e.isSelected
			}]) }, k(e.entryKey), 3)]), B("span", av, [
				e.isReadOnly ? (L(), R("span", ov, [r[1] ||= B("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-lock"
				}, null, -1), H(" " + k(e.readOnlyLabel), 1)])) : U("", !0),
				e.meta ? (L(), R("span", sv, k(e.meta), 1)) : U("", !0),
				e.validationIndicator ? (L(), R("span", {
					key: 2,
					class: O(["dui-badge dui-badge-sm", e.validationIndicator.severity === "error" ? "dui-badge-error" : "dui-badge-warning"]),
					title: M(Im)(e.validationIndicator)
				}, [
					B("span", {
						"aria-hidden": "true",
						class: O(["dui-status dui-status-xs", e.validationIndicator.severity === "error" ? "dui-status-error" : "dui-status-warning"])
					}, null, 2),
					H(" " + k(e.validationIndicator.count) + " ", 1),
					B("span", lv, k(M(Im)(e.validationIndicator)), 1)
				], 10, cv)) : U("", !0)
			])]),
			B("button", {
				"aria-label": `${e.actionLabel}: ${e.title}`,
				class: "dui-btn dui-btn-outline dui-btn-sm",
				disabled: e.isDisabled,
				type: "button",
				onClick: r[0] ||= (e) => n("open")
			}, [B("i", {
				"aria-hidden": "true",
				class: O(e.editIconClass)
			}, null, 2), H(" " + k(e.actionLabel), 1)], 8, uv)
		], 10, nv));
	}
}), fv = { class: "dui-card dui-card-border dui-card-sm" }, pv = { class: "dui-card-body" }, mv = { class: "app:flex app:items-start app:justify-between app:gap-4" }, hv = { class: "dui-card-actions app:items-center" }, gv = ["disabled"], _v = {
	key: 0,
	class: "dui-input app:w-full"
}, vv = {
	key: 1,
	role: "status",
	class: "dui-alert dui-alert-info"
}, yv = {
	key: 2,
	class: "app:flex app:flex-col app:gap-4"
}, bv = { "aria-labelledby": "species-builder-custom-species-heading" }, xv = { class: "app:flex app:items-center app:justify-between app:gap-2" }, Sv = { class: "dui-badge dui-badge-sm" }, Cv = {
	key: 0,
	role: "status",
	class: "dui-alert"
}, wv = {
	key: 1,
	class: "dui-list"
}, Tv = { "aria-labelledby": "species-builder-installed-species-heading" }, Ev = { class: "app:flex app:items-center app:justify-between app:gap-2" }, Dv = { class: "dui-badge dui-badge-ghost dui-badge-sm" }, Ov = {
	key: 0,
	role: "status",
	class: "dui-alert"
}, kv = {
	key: 1,
	class: "dui-list"
}, Av = {
	key: 0,
	"aria-labelledby": "species-builder-unavailable-species-heading"
}, jv = { class: "app:flex app:items-center app:justify-between app:gap-2" }, Mv = { class: "dui-badge dui-badge-warning dui-badge-sm" }, Nv = { class: "dui-list" }, Pv = /* @__PURE__ */ P({
	__name: "SpeciesBuilderOverview",
	props: {
		definitions: {},
		isDisabled: { type: Boolean },
		selectedIndex: {},
		validationIndicators: {}
	},
	emits: ["addSpecies", "editSpecies"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ j(""), a = W(() => i.value.trim().toLocaleLowerCase()), o = W(() => n.definitions.map((e, t) => ({
			definition: e,
			index: t
		})).filter(({ definition: e }) => m(e))), s = W(() => o.value.filter(({ definition: e }) => e.origin === "custom")), c = W(() => o.value.filter(({ definition: e }) => e.origin === "runtime" && !e.runtimeUnavailable)), l = W(() => o.value.filter(({ definition: e }) => e.runtimeUnavailable)), u = W(() => n.definitions.filter((e) => e.origin === "runtime" && !e.runtimeUnavailable).length), d = W(() => n.definitions.filter((e) => e.origin === "custom").length);
		function f(e) {
			return e.name.trim() || e.key.trim() || "Untitled Species";
		}
		function p(e) {
			return e.key.trim() || um(e);
		}
		function m(e) {
			let t = a.value;
			return !t || e.name.toLocaleLowerCase().includes(t) || e.key.toLocaleLowerCase().includes(t);
		}
		return (t, n) => (L(), R("section", fv, [B("div", pv, [
			B("header", mv, [n[3] ||= B("div", null, [B("h2", {
				id: "species-builder-species-list-heading",
				class: "dui-card-title",
				tabindex: "-1"
			}, " Species Catalog "), B("p", { class: "app:m-0" }, " Manage your custom species or inspect species supplied by WFRP and active modules. ")], -1), B("div", hv, [B("button", {
				class: "dui-btn dui-btn-primary",
				disabled: e.isDisabled,
				type: "button",
				onClick: n[0] ||= (e) => r("addSpecies")
			}, [...n[2] ||= [B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), H(" New Species ", -1)]], 8, gv)])]),
			e.definitions.length > 0 ? (L(), R("label", _v, [n[4] ||= B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-magnifying-glass"
			}, null, -1), Vn(B("input", {
				"onUpdate:modelValue": n[1] ||= (e) => i.value = e,
				type: "search",
				placeholder: "Filter by species name or key"
			}, null, 512), [[Uo, i.value]])])) : U("", !0),
			e.definitions.length === 0 ? (L(), R("div", vv, [...n[5] ||= [B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), B("span", null, "No species yet. Add one to begin.", -1)]])) : (L(), R("div", yv, [
				B("section", bv, [B("header", xv, [n[6] ||= B("div", null, [B("h3", {
					id: "species-builder-custom-species-heading",
					class: "dui-card-title"
				}, " Custom Species "), B("p", { class: "app:m-0" }, "Species owned and editable by this world.")], -1), B("span", Sv, k(d.value), 1)]), s.value.length === 0 ? (L(), R("div", Cv, [n[7] ||= B("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-circle-info"
				}, null, -1), B("span", null, k(a.value ? "No custom species match this filter." : "No custom species yet."), 1)])) : (L(), R("ul", wv, [(L(!0), R(I, null, F(s.value, (t) => (L(), z(dv, {
					key: `custom-${t.definition.key}-${t.index}`,
					"action-label": "Edit species",
					"edit-icon-class": "fa-solid fa-pen-to-square",
					"entry-key": p(t.definition),
					"icon-class": "fa-solid fa-users",
					"is-disabled": e.isDisabled,
					"is-selected": t.index === e.selectedIndex,
					title: f(t.definition),
					"validation-indicator": e.validationIndicators[t.index],
					onOpen: (e) => r("editSpecies", t.index)
				}, null, 8, [
					"entry-key",
					"is-disabled",
					"is-selected",
					"title",
					"validation-indicator",
					"onOpen"
				]))), 128))]))]),
				B("section", Tv, [B("header", Ev, [n[8] ||= B("div", null, [B("h3", {
					id: "species-builder-installed-species-heading",
					class: "dui-card-title"
				}, " Installed Species "), B("p", { class: "app:m-0" }, " Read-only reference data. You can add custom subspecies to these entries. ")], -1), B("span", Dv, k(u.value), 1)]), c.value.length === 0 ? (L(), R("div", Ov, [n[9] ||= B("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-circle-info"
				}, null, -1), B("span", null, k(a.value ? "No installed species match this filter." : "No installed species were found."), 1)])) : (L(), R("ul", kv, [(L(!0), R(I, null, F(c.value, (t) => (L(), z(dv, {
					key: `runtime-${t.definition.key}-${t.index}`,
					"action-label": "View setup",
					"edit-icon-class": "fa-solid fa-eye",
					"entry-key": p(t.definition),
					"icon-class": "fa-solid fa-book-open",
					"is-disabled": e.isDisabled,
					"is-read-only": "",
					"is-selected": t.index === e.selectedIndex,
					title: f(t.definition),
					"validation-indicator": e.validationIndicators[t.index],
					onOpen: (e) => r("editSpecies", t.index)
				}, null, 8, [
					"entry-key",
					"is-disabled",
					"is-selected",
					"title",
					"validation-indicator",
					"onOpen"
				]))), 128))]))]),
				l.value.length > 0 ? (L(), R("section", Av, [B("header", jv, [n[10] ||= B("div", null, [B("h3", {
					id: "species-builder-unavailable-species-heading",
					class: "dui-card-title"
				}, " Unavailable Sources "), B("p", { class: "app:m-0" }, " The source package is inactive; custom variants are retained for recovery. ")], -1), B("span", Mv, k(l.value.length), 1)]), B("ul", Nv, [(L(!0), R(I, null, F(l.value, (t) => (L(), z(dv, {
					key: `unavailable-${t.definition.key}-${t.index}`,
					"action-label": "Review variants",
					"edit-icon-class": "fa-solid fa-eye",
					"entry-key": p(t.definition),
					"icon-class": "fa-solid fa-triangle-exclamation",
					"is-disabled": e.isDisabled,
					"is-read-only": "",
					"is-selected": t.index === e.selectedIndex,
					meta: "Custom variants retained",
					"read-only-label": "Source unavailable",
					title: f(t.definition),
					"validation-indicator": e.validationIndicators[t.index],
					onOpen: (e) => r("editSpecies", t.index)
				}, null, 8, [
					"entry-key",
					"is-disabled",
					"is-selected",
					"title",
					"validation-indicator",
					"onOpen"
				]))), 128))])])) : U("", !0)
			]))
		])]));
	}
}), Fv = { class: "dui-card dui-card-border dui-card-sm" }, Iv = { class: "dui-card-body" }, Lv = { class: "dui-mockup-code" }, Rv = { tabindex: "0" }, zv = /* @__PURE__ */ P({
	__name: "WfrpConfigPanel",
	props: { generatedConfigText: {} },
	setup(e) {
		return (t, n) => (L(), R("section", Fv, [B("div", Iv, [
			n[0] ||= B("h2", { class: "dui-card-title" }, "WFRP Config", -1),
			n[1] ||= B("p", null, " Read-only config generated from the current draft. This view grows with the outer application scroll area. ", -1),
			B("div", Lv, [B("pre", Rv, [B("code", null, k(e.generatedConfigText), 1)])])
		])]));
	}
}), Bv = {
	key: 0,
	id: "species-builder-panel-settings",
	"aria-label": "Species Builder settings",
	role: "region"
}, Vv = {
	key: 1,
	id: "species-builder-panel-species-table",
	"aria-label": "Random Species table",
	role: "region"
}, Hv = {
	key: 2,
	id: "species-builder-panel-wfrp-config",
	"aria-label": "Generated WFRP configuration",
	role: "region"
}, Uv = {
	key: 3,
	id: "species-builder-panel-species",
	"aria-label": "Species definitions",
	role: "region"
}, Wv = /* @__PURE__ */ P({
	__name: "SpeciesBuilderProjectPages",
	props: {
		activeTab: {},
		isDisabled: { type: Boolean }
	},
	emits: ["editSpecies"],
	setup(e, { emit: t }) {
		let n = t, r = nm(), i = /* @__PURE__ */ j(c_[0]?.id ?? ""), a = W(() => r.definitions.map((e, t) => Fm(r.validationIssues.filter((e) => e.definitionIndex === t)))), o = W(() => r.validationIssues.filter((e) => e.scope === "species-table"));
		function s() {
			r.addBlankDefinition(), n("editSpecies", r.selectedIndex);
		}
		function c(e) {
			let t = u_(e);
			t && (r.addDefinition(t), n("editSpecies", r.selectedIndex));
		}
		function l() {
			r.addDefinitions(l_()), n("editSpecies", r.selectedIndex);
		}
		return (t, u) => e.activeTab === "settings" ? (L(), R("section", Bv, [V(O_, {
			"auto-register-species-table": M(r).autoRegisterSpeciesTable,
			"example-species-options": M(c_),
			"is-disabled": e.isDisabled,
			"selected-example-species-id": i.value,
			"show-generated-config-tab": M(r).showGeneratedConfigTab,
			"species-table": M(r).speciesTable,
			onGenerateAllExampleSpecies: l,
			onGenerateExampleSpecies: c,
			onUpdateAutoRegisterSpeciesTable: M(r).updateAutoRegisterSpeciesTable,
			onUpdateSelectedExampleSpeciesId: u[0] ||= (e) => i.value = e,
			onUpdateShowGeneratedConfigTab: M(r).updateShowGeneratedConfigTab
		}, null, 8, [
			"auto-register-species-table",
			"example-species-options",
			"is-disabled",
			"selected-example-species-id",
			"show-generated-config-tab",
			"species-table",
			"onUpdateAutoRegisterSpeciesTable",
			"onUpdateShowGeneratedConfigTab"
		])])) : e.activeTab === "species-table" ? (L(), R("section", Vv, [V(tv, {
			draft: M(r).preparedSpeciesTable,
			"is-disabled": e.isDisabled,
			"is-validation-blocking": M(r).blockingValidationIssues.some((e) => e.scope === "species-table"),
			issues: o.value,
			options: M(r).speciesTableOptions,
			summaries: M(r).speciesTableSummaries,
			"validation-messages": M(r).speciesTableValidationMessages,
			onAddRow: M(r).addSpeciesTableRow,
			onRemoveRow: M(r).removeSpeciesTableRow,
			onUpdateRowKey: M(r).updateSpeciesTableRowKey,
			onUpdateRowWeight: M(r).updateSpeciesTableRowWeight
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
		])])) : e.activeTab === "wfrp-config" ? (L(), R("section", Hv, [V(zv, { "generated-config-text": M(r).generatedConfigText }, null, 8, ["generated-config-text"])])) : (L(), R("section", Uv, [V(Pv, {
			definitions: M(r).definitions,
			"is-disabled": e.isDisabled,
			"selected-index": M(r).selectedIndex,
			"validation-indicators": a.value,
			onAddSpecies: s,
			onEditSpecies: u[1] ||= (e) => n("editSpecies", e)
		}, null, 8, [
			"definitions",
			"is-disabled",
			"selected-index",
			"validation-indicators"
		])]));
	}
});
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/editor-page-events.ts
function Gv(e, t) {
	return {
		addSubspecies: e.addSubspecies,
		careerReplacementChoiceDrop: e.setCareerReplacementChoiceDrop,
		careerReplacementRolledDrop: e.setCareerReplacementRolledDrop,
		careerTableCareerDrop: e.setCareerTableCareerDrop,
		careerTableJournalDrop: e.setCareerTableJournalDrop,
		deleteSubspecies: t.requestDeleteSubspecies,
		openItem: e.openItemSheet,
		save: t.requestSave,
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
var Kv = "wfrp4e-customizer-apps.document-drop", qv = { class: "dui-list" }, Jv = [
	"aria-label",
	"disabled",
	"title",
	"onClick"
], Yv = ["src"], Xv = {
	key: 1,
	"aria-hidden": "true",
	class: "fa-solid fa-scroll"
}, Zv = {
	key: 1,
	class: "dui-list-row"
}, Qv = /* @__PURE__ */ P({
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
		return (t, n) => (L(), R("ul", qv, [e.documents.length > 0 ? (L(!0), R(I, { key: 0 }, F(e.documents, (t) => (L(), R("li", {
			key: t.uuid,
			class: "dui-list-row"
		}, [B("button", {
			"aria-label": e.isClickable ? `Use ${t.name}` : void 0,
			class: "dui-btn dui-btn-ghost",
			disabled: !e.isClickable,
			title: e.isClickable ? t.name : void 0,
			type: "button",
			onClick: Yo((e) => r(t), ["stop"])
		}, [t.img ? (L(), R("img", {
			key: 0,
			alt: "",
			"aria-hidden": "true",
			src: t.img
		}, null, 8, Yv)) : (L(), R("i", Xv)), B("span", null, k(t.name), 1)], 8, Jv)]))), 128)) : (L(), R("li", Zv, [n[0] ||= B("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-arrow-down"
		}, null, -1), B("span", null, k(e.emptyLabel), 1)]))]));
	}
}), $v = { class: "dui-card-body dui-fieldset" }, ey = ["for"], ty = ["id", "value"], ny = ["for"], ry = ["id", "value"], iy = { class: "dui-card-actions" }, ay = /* @__PURE__ */ P({
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
		let n = t, r = mr(), i = mr();
		function a(e) {
			let t = e.target instanceof HTMLSelectElement ? e.target.value : "auto";
			(t === "Actor" || t === "auto" || t === "Item" || t === "JournalEntry" || t === "JournalEntryPage") && n("updateDocumentType", t);
		}
		function o(e) {
			n("updateDocumentValue", e.target instanceof HTMLInputElement ? e.target.value : "");
		}
		return (t, s) => (L(), R("form", {
			class: "dui-card dui-card-border dui-card-sm",
			onClick: s[2] ||= Yo(() => {}, ["stop"]),
			onSubmit: s[3] ||= Yo((e) => n("submit"), ["prevent"])
		}, [B("fieldset", $v, [
			s[6] ||= B("legend", { class: "dui-fieldset-legend" }, "Manual document entry", -1),
			B("label", {
				class: "dui-label",
				for: M(r)
			}, "Document type", 8, ey),
			B("select", {
				id: M(r),
				class: "dui-select",
				value: e.documentType,
				onChange: a
			}, [...s[4] ||= [wa("<option value=\"auto\">Auto</option><option value=\"Item\">Item</option><option value=\"Actor\">Actor</option><option value=\"JournalEntry\">Journal Entry</option><option value=\"JournalEntryPage\">Journal Page</option>", 5)]], 40, ty),
			B("label", {
				class: "dui-label",
				for: M(i)
			}, "UUID or drop JSON", 8, ny),
			B("input", {
				id: M(i),
				class: "dui-input",
				value: e.documentValue,
				placeholder: "Compendium.package.pack.id",
				type: "text",
				onInput: o
			}, null, 40, ry),
			B("div", iy, [
				s[5] ||= B("button", {
					class: "dui-btn dui-btn-primary",
					type: "submit"
				}, "Use", -1),
				B("button", {
					class: "dui-btn",
					type: "button",
					onClick: s[0] ||= (e) => n("startPick")
				}, k(e.isPickingDocument ? "Waiting..." : "Pick Next Click"), 1),
				B("button", {
					class: "dui-btn dui-btn-ghost",
					type: "button",
					onClick: s[1] ||= (e) => n("close")
				}, "Cancel")
			])
		])], 32));
	}
}), oy = ["aria-label", "aria-disabled"], sy = { key: 0 }, cy = {
	key: 1,
	class: "dui-alert dui-alert-info",
	role: "status"
}, ly = { key: 2 }, uy = {
	key: 4,
	class: "dui-card-actions"
}, dy = ["disabled"], fy = /* @__PURE__ */ P({
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
		let n = e, r = Wn(Kv);
		if (!r) throw Error("DocumentDrop requires a document drop bridge from its application host.");
		let i = Xr(), a = t, o = /* @__PURE__ */ j(!1), s = /* @__PURE__ */ j(!1), c = /* @__PURE__ */ j(!1), l = /* @__PURE__ */ j("auto"), u = /* @__PURE__ */ j(""), d, f = W(() => !!i.prompt), p = W(() => !!i.default), m = W(() => n.showPrompt && (f.value || n.title.length > 0)), h = W(() => n.showDocuments ? n.documents : []), g = W(() => n.manualEntryTrigger === "button"), _ = W(() => n.variant === "bare" ? [] : [
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
			s.value = !1, te();
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
		function ee() {
			if (n.disabled) return;
			let e = r.createDropData({
				documentType: l.value,
				value: u.value
			});
			e && (a("dropData", e), u.value = "", S());
		}
		function w() {
			n.disabled || d || (c.value = !0, d = r.startDocumentPick(T));
		}
		function te() {
			let e = d;
			d = void 0, c.value = !1, e?.();
		}
		function T(e) {
			a("dropData", e), S();
		}
		return Mr(() => {
			te();
		}), Jn(() => n.disabled, (e) => {
			e && (o.value = !1, S());
		}), (t, n) => (L(), R("div", Oa(t.$attrs, {
			class: _.value,
			"aria-label": e.title,
			"aria-disabled": e.disabled,
			role: "group",
			onDragenter: Yo(y, ["prevent"]),
			onDragover: Yo(y, ["prevent"]),
			onDragleave: v,
			onDrop: b
		}), [B("div", { class: O(e.variant === "bare" ? void 0 : "dui-card-body") }, [
			m.value ? (L(), R("div", {
				key: 0,
				class: O(["dui-alert dui-alert-info", { "dui-alert-outline": !o.value }])
			}, [
				n[3] ||= B("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-arrow-down"
				}, null, -1),
				B("div", null, [Ur(t.$slots, "prompt", {}, () => [B("strong", null, k(e.title), 1), e.description ? (L(), R("p", sy, k(e.description), 1)) : U("", !0)])]),
				B("span", { class: O(["dui-badge", { "dui-badge-info": o.value }]) }, k(o.value ? "Release to add" : "Drop zone"), 3)
			], 2)) : o.value ? (L(), R("div", cy, [n[4] ||= B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-arrow-down"
			}, null, -1), B("span", null, "Release to add " + k(e.title.toLowerCase()) + ".", 1)])) : U("", !0),
			p.value ? (L(), R("div", ly, [Ur(t.$slots, "default")])) : U("", !0),
			e.showDocuments ? (L(), z(Qv, {
				key: 3,
				documents: h.value,
				"empty-label": e.emptyDocumentLabel,
				"is-clickable": e.documentsClickable,
				onDocumentClicked: n[0] ||= (e) => a("documentClicked", e)
			}, null, 8, [
				"documents",
				"empty-label",
				"is-clickable"
			])) : U("", !0),
			g.value ? (L(), R("div", uy, [B("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.disabled,
				type: "button",
				onClick: Yo(C, ["stop"])
			}, k(s.value ? "Close Manual Entry" : "Manual Entry"), 9, dy)])) : U("", !0),
			s.value && !e.disabled ? (L(), z(ay, {
				key: 5,
				"document-type": l.value,
				"document-value": u.value,
				"is-picking-document": c.value,
				onClose: S,
				onStartPick: w,
				onSubmit: ee,
				onUpdateDocumentType: n[1] ||= (e) => l.value = e,
				onUpdateDocumentValue: n[2] ||= (e) => u.value = e
			}, null, 8, [
				"document-type",
				"document-value",
				"is-picking-document"
			])) : U("", !0)
		], 2)], 16, oy));
	}
}), py = [
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
], my = [
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
], hy = [
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
], gy = {
	skills: "Skills granted during character creation. Drop Skill items to link their sheets, or add names manually.",
	talents: "Talents granted during character creation. Multiple choices in one grant become WFRP's comma-separated either/or entry.",
	traits: "Traits granted by this species or subspecies. Drop Trait items to link their sheets, or add names manually."
};
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/validation-presentation.ts
function _y(e) {
	return typeof e == "string" ? [e] : e;
}
function vy(e, t, n, r) {
	return e.filter((e) => _y(t).includes(e.field ?? "") && e.rowIndex === n && e.choiceIndex === r);
}
function yy(e, t) {
	return e.filter((e) => _y(t).includes(e.field ?? ""));
}
function by(e, t) {
	return e.filter((e) => e.rowIndex === t);
}
function xy(e, t, n) {
	return e.filter((e) => _y(t).includes(e.field ?? "") && e.rowIndex === n);
}
function Sy(e, t, n) {
	return e.filter((e) => e.rowIndex === t && e.choiceIndex === n);
}
function Cy(e) {
	return e.filter((e) => e.rowIndex === void 0 && e.field === void 0);
}
function wy(e) {
	return e.filter((e) => e.rowIndex === void 0);
}
function Ty(e) {
	return [...new Set(e.map((e) => e.message))];
}
function Ey(e) {
	return e.some((e) => e.severity !== "warning") ? "error" : e.length > 0 ? "warning" : void 0;
}
function Dy(e) {
	return Ey(e) === "error";
}
function Q(e, t, n) {
	let r = Ey(e);
	return r === "error" ? t : r === "warning" ? n : void 0;
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/components/LinkedItemDropValue.vue?vue&type=script&setup=true&lang.ts
var Oy = [
	"aria-invalid",
	"disabled",
	"title",
	"value"
], ky = {
	key: 3,
	class: "app:grid app:gap-1",
	role: "alert"
}, Ay = /* @__PURE__ */ P({
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
			return Ty(n.issues);
		}
		return (t, n) => (L(), z(fy, {
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
			default: N(() => [!e.value.item?.uuid && e.isEditable ? (L(), R("input", {
				key: 0,
				"aria-invalid": M(Dy)(e.issues) || void 0,
				class: O(["dui-input", M(Q)(e.issues, "dui-input-error", "dui-input-warning")]),
				disabled: e.isDisabled,
				title: e.inputTitle,
				value: e.value.name,
				type: "text",
				onInput: n[0] ||= (e) => r("updateName", i(e))
			}, null, 42, Oy)) : e.value.name ? (L(), R("div", {
				key: 1,
				class: O(["dui-alert", M(Q)(e.issues, "dui-alert-error", "dui-alert-warning") ?? "dui-alert-info"])
			}, [B("strong", null, k(e.value.name), 1), n[3] ||= B("span", null, "Stored by name. Drop the matching Item to link its sheet.", -1)], 2)) : (L(), R("div", {
				key: 2,
				class: O(["dui-alert", M(Q)(e.issues, "dui-alert-error", "dui-alert-warning")])
			}, [...n[4] ||= [B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-arrow-down"
			}, null, -1), B("span", null, "No item selected.", -1)]], 2)), a().length ? (L(), R("div", ky, [(L(!0), R(I, null, F(a(), (t) => (L(), R("p", {
				key: t,
				class: O(["app:m-0 app:text-xs", M(Q)(e.issues, "app:text-error", "app:text-warning")])
			}, k(t), 3))), 128))])) : U("", !0)]),
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
}), jy = ["disabled", "title"], My = /* @__PURE__ */ P({
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
		return (t, r) => (L(), R("li", { class: O(["dui-list-row", M(Q)(e.issues, "app:border app:border-error", "app:border app:border-warning")]) }, [V(Ay, {
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
		]), B("button", {
			disabled: e.isDisabled,
			title: e.removeTitle,
			class: "dui-btn dui-btn-error dui-btn-sm",
			type: "button",
			onClick: r[3] ||= (e) => n("remove")
		}, [...r[4] ||= [B("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-trash"
		}, null, -1), H(" Remove ", -1)]], 8, jy)], 2));
	}
}), Ny = { class: "app:grid app:gap-3" }, Py = { class: "dui-card-body" }, Fy = { class: "app:flex app:items-start app:justify-between app:gap-4" }, Iy = { class: "dui-card-title" }, Ly = { class: "app:m-0" }, Ry = { class: "dui-card-actions app:items-center" }, zy = { class: "dui-badge" }, By = [
	"disabled",
	"title",
	"onClick"
], Vy = {
	key: 1,
	class: "dui-join"
}, Hy = ["disabled"], Uy = ["disabled"], Wy = {
	key: 1,
	class: "dui-list"
}, Gy = {
	key: 2,
	class: "dui-list"
}, Ky = { class: "dui-badge dui-badge-ghost" }, qy = { class: "dui-list-col-grow" }, Jy = { key: 0 }, Yy = { class: "dui-list" }, Xy = { class: "dui-join" }, Zy = ["disabled", "onClick"], Qy = ["disabled", "onClick"], $y = {
	key: 3,
	class: "dui-alert",
	role: "status"
}, eb = /* @__PURE__ */ P({
	__name: "ArrayFields",
	props: {
		fields: {},
		isDisabled: { type: Boolean },
		issues: {},
		values: {}
	},
	setup(e) {
		let t = e, n = nm(), r = W(() => hy.filter((e) => !t.fields || t.fields.includes(e.field)));
		function i(e) {
			return td(t.values[e], a(e));
		}
		function a(e) {
			return e === "skills" ? t.values.linkedSkills : t.values.linkedTraits;
		}
		function o() {
			return nd(t.values.talents, t.values.linkedTalents);
		}
		function s(e) {
			return e === "talents" ? o().length : i(e).length;
		}
		function c(e) {
			return vy(t.issues, e);
		}
		function l(e) {
			return Ty(c(e));
		}
		function u(e, n) {
			return xy(t.issues, e, n);
		}
		function d(e, n) {
			return vy(t.issues, "talents", e, n);
		}
		return (t, a) => (L(), R("div", Ny, [(L(!0), R(I, null, F(r.value, (t) => (L(), R("section", {
			key: t.field,
			class: "dui-card dui-card-border dui-card-sm"
		}, [B("div", Py, [
			B("header", Fy, [B("div", null, [B("h3", Iy, k(t.label), 1), B("p", Ly, k(M(gy)[t.field]), 1)]), B("div", Ry, [B("span", zy, k(s(t.field)), 1), t.field === "talents" ? (L(), R("div", Vy, [B("button", {
				class: "dui-btn dui-btn-sm dui-join-item",
				disabled: e.isDisabled,
				title: "Add one guaranteed Talent",
				type: "button",
				onClick: a[0] ||= (e) => M(n).addTalentGrant("single")
			}, [...a[5] ||= [B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), H(" Talent ", -1)]], 8, Hy), B("button", {
				class: "dui-btn dui-btn-sm dui-join-item",
				disabled: e.isDisabled,
				title: "Add a Talent choice set. WFRP stores this as one comma-separated Talent entry.",
				type: "button",
				onClick: a[1] ||= (e) => M(n).addTalentGrant("choice")
			}, [...a[6] ||= [B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-list-check"
			}, null, -1), H(" Choice Set ", -1)]], 8, Uy)])) : (L(), R("button", {
				key: 0,
				class: "dui-btn dui-btn-sm",
				disabled: e.isDisabled,
				title: `Add a ${t.label.slice(0, -1)} row`,
				type: "button",
				onClick: (e) => M(n).addLinkedItem(M(ed)(t.field))
			}, [...a[4] ||= [B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), H(" Add ", -1)]], 8, By))])]),
			V(fy, {
				description: `Drop a WFRP ${t.label.slice(0, -1)} item to add it to this list.`,
				disabled: e.isDisabled,
				title: `Drop ${t.label}`,
				variant: "compact",
				onDropData: (e) => M(n).appendArrayFieldDrop(t.field, e)
			}, null, 8, [
				"description",
				"disabled",
				"title",
				"onDropData"
			]),
			l(t.field).length ? (L(), R("div", {
				key: 0,
				class: O(["dui-alert", M(Q)(c(t.field), "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [a[7] ||= B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), B("div", null, [(L(!0), R(I, null, F(l(t.field), (e) => (L(), R("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, k(e), 1))), 128))])], 2)) : U("", !0),
			t.field !== "talents" && i(t.field).length > 0 ? (L(), R("ul", Wy, [(L(!0), R(I, null, F(i(t.field), (r, i) => (L(), z(My, {
				key: `${t.field}-${i}`,
				"drop-description": `Drop a WFRP ${t.label.slice(0, -1)} item to link or replace this row.`,
				"drop-title": `Link ${t.label.slice(0, -1)}`,
				"input-title": `${t.label.slice(0, -1)} name used by WFRP item lookup`,
				"is-disabled": e.isDisabled,
				issues: u(t.field, i),
				"remove-title": `Remove ${r.name}`,
				value: r,
				onDropData: (e) => M(n).setLinkedItemDrop(M(ed)(t.field), i, e),
				onOpenItem: a[2] ||= (e) => M(n).openItemSheet(e),
				onRemove: (e) => M(n).removeLinkedItem(M(ed)(t.field), i),
				onUpdateName: (e) => M(n).renameLinkedItem(M(ed)(t.field), i, e)
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
			]))), 128))])) : t.field === "talents" && o().length > 0 ? (L(), R("ul", Gy, [(L(!0), R(I, null, F(o(), (t, r) => (L(), R("li", {
				key: `talent-${r}`,
				class: O(["dui-list-row", M(Q)(u("talents", r), "app:border app:border-error", "app:border app:border-warning")])
			}, [
				B("span", Ky, "Grant " + k(r + 1), 1),
				B("div", qy, [
					B("strong", null, k(t.choices.length > 1 ? "Talent Choice" : "Guaranteed Talent"), 1),
					t.choices.length > 1 ? (L(), R("p", Jy, "Choose one of these alternatives.")) : U("", !0),
					B("ul", Yy, [(L(!0), R(I, null, F(t.choices, (i, o) => (L(), z(My, {
						key: `${r}-${o}`,
						"drop-description": "Drop a WFRP Talent item to link or replace this option.",
						"drop-title": "Link Talent",
						"input-title": t.choices.length > 1 ? "One Talent option offered for this choice set" : "Guaranteed Talent name",
						"is-disabled": e.isDisabled,
						issues: d(r, o),
						"remove-title": `Remove ${i.name}`,
						value: i,
						onDropData: (e) => M(n).setTalentChoiceDrop(r, o, e),
						onOpenItem: a[3] ||= (e) => M(n).openItemSheet(e),
						onRemove: (e) => M(n).removeTalentChoice(r, o),
						onUpdateName: (e) => M(n).renameTalentChoice(r, o, e)
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
				B("div", Xy, [B("button", {
					class: "dui-btn dui-btn-sm dui-join-item",
					disabled: e.isDisabled,
					title: "Add another alternative to this Talent choice",
					type: "button",
					onClick: (e) => M(n).addTalentChoice(r)
				}, [...a[8] ||= [B("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-plus"
				}, null, -1), H(" Choice ", -1)]], 8, Zy), B("button", {
					disabled: e.isDisabled,
					title: "Remove this Talent grant",
					class: "dui-btn dui-btn-error dui-btn-sm dui-join-item",
					type: "button",
					onClick: (e) => M(n).removeTalentGrant(r)
				}, [...a[9] ||= [B("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), H(" Remove ", -1)]], 8, Qy)])
			], 2))), 128))])) : (L(), R("div", $y, [a[10] ||= B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), B("span", null, "No " + k(t.label.toLowerCase()) + " yet.", 1)]))
		])]))), 128))]));
	}
}), tb = { class: "dui-table dui-table-sm" }, nb = { scope: "row" }, rb = ["for"], ib = [
	"id",
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], ab = ["id"], ob = /* @__PURE__ */ P({
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
			return vy(n.issues, `characteristics.${e}`);
		}
		function o(e) {
			return Ty(a(e));
		}
		return (t, n) => (L(), R("table", tb, [n[0] ||= B("thead", null, [B("tr", null, [B("th", { scope: "col" }, "Characteristic"), B("th", { scope: "col" }, "Starting formula")])], -1), B("tbody", null, [(L(!0), R(I, null, F(M(py), (t) => (L(), R("tr", { key: t }, [B("th", nb, [B("label", { for: `species-characteristic-${t}` }, k(M(Oc)[t]), 9, rb)]), B("td", null, [B("input", {
			id: `species-characteristic-${t}`,
			"aria-describedby": a(t).length ? `species-characteristic-${t}-errors` : void 0,
			"aria-invalid": M(Dy)(a(t)) || void 0,
			class: O(["dui-input dui-input-sm", M(Q)(a(t), "dui-input-error", "dui-input-warning")]),
			disabled: e.isDisabled,
			placeholder: "2d10+20",
			value: e.characteristics?.[t] ?? "",
			type: "text",
			onInput: (e) => r("update", t, i(e))
		}, null, 42, ib), o(t).length ? (L(), R("div", {
			key: 0,
			id: `species-characteristic-${t}-errors`
		}, [(L(!0), R(I, null, F(o(t), (e) => (L(), R("p", {
			key: e,
			class: O(["app:m-0 app:text-xs", M(Q)(a(t), "app:text-error", "app:text-warning")])
		}, k(e), 3))), 128))], 8, ab)) : U("", !0)])]))), 128))])]));
	}
}), sb = { class: "dui-table dui-table-sm" }, cb = { scope: "row" }, lb = ["for"], ub = [
	"id",
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], db = ["id"], fb = /* @__PURE__ */ P({
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
			return vy(n.issues, e);
		}
		function o(e) {
			return Ty(a(e));
		}
		return (t, n) => (L(), R("table", sb, [n[0] ||= B("thead", null, [B("tr", null, [B("th", { scope: "col" }, "Stat"), B("th", { scope: "col" }, "Value")])], -1), B("tbody", null, [(L(!0), R(I, null, F(M(my).filter(({ field: t }) => e.fields.includes(t)), (t) => (L(), R("tr", { key: t.field }, [B("th", cb, [B("label", { for: `species-stat-${t.field}` }, k(t.label), 9, lb)]), B("td", null, [B("input", {
			id: `species-stat-${t.field}`,
			"aria-describedby": a(t.field).length ? `species-stat-${t.field}-errors` : void 0,
			"aria-invalid": M(Dy)(a(t.field)) || void 0,
			class: O(["dui-input dui-input-sm", M(Q)(a(t.field), "dui-input-error", "dui-input-warning")]),
			disabled: e.isDisabled,
			value: e.values[t.field] ?? "",
			type: "number",
			onInput: (e) => r("update", t.field, i(e))
		}, null, 42, ub), o(t.field).length ? (L(), R("div", {
			key: 0,
			id: `species-stat-${t.field}-errors`
		}, [(L(!0), R(I, null, F(o(t.field), (e) => (L(), R("p", {
			key: e,
			class: O(["app:m-0 app:text-xs", M(Q)(a(t.field), "app:text-error", "app:text-warning")])
		}, k(e), 3))), 128))], 8, db)) : U("", !0)])]))), 128))])]));
	}
}), pb = { class: "app:grid app:gap-3" }, mb = { class: "dui-card dui-card-border dui-card-sm" }, hb = { class: "dui-card-body" }, gb = { class: "dui-fieldset" }, _b = { class: "dui-card dui-card-border dui-card-sm" }, vb = { class: "dui-card-body" }, yb = { class: "dui-fieldset" }, bb = /* @__PURE__ */ P({
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
		return (t, i) => (L(), R("section", pb, [B("section", mb, [B("div", hb, [B("fieldset", gb, [
			i[2] ||= B("legend", { class: "dui-fieldset-legend" }, "Characteristic Roll Formulas", -1),
			i[3] ||= B("p", { class: "dui-fieldset-label" }, " Starting formulas used by WFRP character creation, usually values such as 2d10+20. ", -1),
			V(ob, {
				characteristics: e.definition.characteristics,
				"is-disabled": e.isDisabled,
				issues: e.issues,
				onUpdate: i[0] ||= (e, t) => r("updateCharacteristic", e, t)
			}, null, 8, [
				"characteristics",
				"is-disabled",
				"issues"
			])
		])])]), B("section", _b, [B("div", vb, [B("fieldset", yb, [
			i[4] ||= B("legend", { class: "dui-fieldset-legend" }, "Movement, Fate And Resilience", -1),
			i[5] ||= B("p", { class: "dui-fieldset-label" }, " Set base Movement plus starting Fate, Resilience, and extra points distributed between them. ", -1),
			V(fb, {
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
}), xb = { class: "app:flex app:flex-wrap app:gap-3" }, Sb = { class: "dui-fieldset app:min-w-56 app:flex-1" }, Cb = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value"
], wb = {
	key: 0,
	id: "species-age-errors"
}, Tb = { class: "dui-fieldset app:min-w-56 app:flex-1" }, Eb = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value"
], Db = {
	key: 0,
	id: "species-height-die-errors"
}, Ob = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value"
], kb = {
	key: 1,
	id: "species-height-feet-errors"
}, Ab = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value"
], jb = {
	key: 2,
	id: "species-height-inches-errors"
}, Mb = /* @__PURE__ */ P({
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
			return vy(n.issues, e);
		}
		function o(e) {
			return Ty(a(e));
		}
		return (t, n) => (L(), R("div", xb, [B("fieldset", Sb, [
			n[4] ||= B("legend", { class: "dui-fieldset-legend" }, "Age", -1),
			n[5] ||= B("p", { class: "dui-fieldset-label" }, "Formula used by character creation to roll age.", -1),
			n[6] ||= B("label", {
				class: "dui-label",
				for: "species-age"
			}, "Age formula", -1),
			B("input", {
				id: "species-age",
				"aria-describedby": a("age").length ? "species-age-errors" : void 0,
				"aria-invalid": M(Dy)(a("age")) || void 0,
				class: O(["dui-input dui-input-sm app:w-full", M(Q)(a("age"), "dui-input-error", "dui-input-warning")]),
				disabled: e.isDisabled,
				placeholder: "2d10+15",
				value: e.definition.age ?? "",
				type: "text",
				onInput: n[0] ||= (e) => r("updateStringField", "age", i(e))
			}, null, 42, Cb),
			o("age").length ? (L(), R("div", wb, [(L(!0), R(I, null, F(o("age"), (e) => (L(), R("p", {
				key: e,
				class: O(["app:m-0 app:text-xs", M(Q)(a("age"), "app:text-error", "app:text-warning")])
			}, k(e), 3))), 128))])) : U("", !0)
		]), B("fieldset", Tb, [
			n[7] ||= B("legend", { class: "dui-fieldset-legend" }, "Height", -1),
			n[8] ||= B("p", { class: "dui-fieldset-label" }, "Formula and base measurements used to roll random height.", -1),
			n[9] ||= B("label", {
				class: "dui-label",
				for: "species-height-die"
			}, "Height die", -1),
			B("input", {
				id: "species-height-die",
				"aria-describedby": a("height.die").length ? "species-height-die-errors" : void 0,
				"aria-invalid": M(Dy)(a("height.die")) || void 0,
				class: O(["dui-input dui-input-sm app:w-full", M(Q)(a("height.die"), "dui-input-error", "dui-input-warning")]),
				disabled: e.isDisabled,
				placeholder: "1d10",
				value: e.definition.height?.die ?? "",
				type: "text",
				onInput: n[1] ||= (e) => r("updateHeightField", "die", i(e))
			}, null, 42, Eb),
			o("height.die").length ? (L(), R("div", Db, [(L(!0), R(I, null, F(o("height.die"), (e) => (L(), R("p", {
				key: e,
				class: O(["app:m-0 app:text-xs", M(Q)(a("height.die"), "app:text-error", "app:text-warning")])
			}, k(e), 3))), 128))])) : U("", !0),
			n[10] ||= B("label", {
				class: "dui-label",
				for: "species-height-feet"
			}, "Base feet", -1),
			B("input", {
				id: "species-height-feet",
				"aria-describedby": a("height.feet").length ? "species-height-feet-errors" : void 0,
				"aria-invalid": M(Dy)(a("height.feet")) || void 0,
				class: O(["dui-input dui-input-sm app:w-full", M(Q)(a("height.feet"), "dui-input-error", "dui-input-warning")]),
				disabled: e.isDisabled,
				value: e.definition.height?.feet ?? "",
				type: "number",
				onInput: n[2] ||= (e) => r("updateHeightField", "feet", i(e))
			}, null, 42, Ob),
			o("height.feet").length ? (L(), R("div", kb, [(L(!0), R(I, null, F(o("height.feet"), (e) => (L(), R("p", {
				key: e,
				class: O(["app:m-0 app:text-xs", M(Q)(a("height.feet"), "app:text-error", "app:text-warning")])
			}, k(e), 3))), 128))])) : U("", !0),
			n[11] ||= B("label", {
				class: "dui-label",
				for: "species-height-inches"
			}, "Base inches", -1),
			B("input", {
				id: "species-height-inches",
				"aria-describedby": a("height.inches").length ? "species-height-inches-errors" : void 0,
				"aria-invalid": M(Dy)(a("height.inches")) || void 0,
				class: O(["dui-input dui-input-sm app:w-full", M(Q)(a("height.inches"), "dui-input-error", "dui-input-warning")]),
				disabled: e.isDisabled,
				value: e.definition.height?.inches ?? "",
				type: "number",
				onInput: n[3] ||= (e) => r("updateHeightField", "inches", i(e))
			}, null, 42, Ab),
			o("height.inches").length ? (L(), R("div", jb, [(L(!0), R(I, null, F(o("height.inches"), (e) => (L(), R("p", {
				key: e,
				class: O(["app:m-0 app:text-xs", M(Q)(a("height.inches"), "app:text-error", "app:text-warning")])
			}, k(e), 3))), 128))])) : U("", !0)
		])]));
	}
}), Nb = { class: "app:grid app:gap-3" }, Pb = { class: "app:flex app:flex-wrap app:gap-3" }, Fb = { class: "dui-card dui-card-border dui-card-sm app:min-w-64 app:flex-1" }, Ib = { class: "dui-card-body" }, Lb = { class: "dui-fieldset" }, Rb = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value"
], zb = {
	key: 0,
	id: "species-name-errors"
}, Bb = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"placeholder",
	"value"
], Vb = {
	key: 1,
	id: "species-key-errors"
}, Hb = { class: "dui-card dui-card-border dui-card-sm app:min-w-64 app:flex-1" }, Ub = { class: "dui-card-body" }, Wb = { class: "dui-fieldset" }, Gb = { class: "dui-label" }, Kb = ["checked", "disabled"], qb = { class: "dui-card dui-card-border dui-card-sm" }, Jb = { class: "dui-card-body" }, Yb = /* @__PURE__ */ P({
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
			return vy(n.issues, e);
		}
		function s(e) {
			return Ty(o(e));
		}
		function c() {
			return Cy(n.issues);
		}
		return (t, n) => (L(), R("section", Nb, [
			c().length ? (L(), R("div", {
				key: 0,
				class: O(["dui-alert", M(Q)(c(), "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [B("i", {
				"aria-hidden": "true",
				class: O(["fa-solid", M(Dy)(c()) ? "fa-circle-exclamation" : "fa-triangle-exclamation"])
			}, null, 2), B("div", null, [(L(!0), R(I, null, F(M(Ty)(c()), (e) => (L(), R("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, k(e), 1))), 128))])], 2)) : U("", !0),
			B("div", Pb, [B("section", Fb, [B("div", Ib, [B("fieldset", Lb, [
				n[5] ||= B("legend", { class: "dui-fieldset-legend" }, "Identity", -1),
				n[6] ||= B("p", { class: "dui-fieldset-label" }, " The name is shown to users. The key identifies this species in generated WFRP config. ", -1),
				n[7] ||= B("label", {
					class: "dui-label",
					for: "species-name"
				}, "Name", -1),
				B("input", {
					id: "species-name",
					"aria-describedby": o("name").length ? "species-name-errors" : void 0,
					"aria-invalid": M(Dy)(o("name")) || void 0,
					class: O(["dui-input dui-input-sm app:w-full", M(Q)(o("name"), "dui-input-error", "dui-input-warning")]),
					disabled: e.isDisabled,
					value: e.definition.name,
					type: "text",
					onInput: n[0] ||= (e) => r("updateStringField", "name", i(e))
				}, null, 42, Rb),
				s("name").length ? (L(), R("div", zb, [(L(!0), R(I, null, F(s("name"), (e) => (L(), R("p", {
					key: e,
					class: O(["app:m-0 app:text-xs", M(Q)(o("name"), "app:text-error", "app:text-warning")])
				}, k(e), 3))), 128))])) : U("", !0),
				n[8] ||= B("label", {
					class: "dui-label",
					for: "species-key"
				}, "Key", -1),
				B("input", {
					id: "species-key",
					"aria-describedby": o("key").length ? "species-key-errors" : void 0,
					"aria-invalid": M(Dy)(o("key")) || void 0,
					class: O(["dui-input dui-input-sm app:w-full", M(Q)(o("key"), "dui-input-error", "dui-input-warning")]),
					disabled: e.isDisabled,
					placeholder: M(um)(e.definition),
					value: e.definition.key,
					type: "text",
					onInput: n[1] ||= (e) => r("updateStringField", "key", i(e))
				}, null, 42, Bb),
				s("key").length ? (L(), R("div", Vb, [(L(!0), R(I, null, F(s("key"), (e) => (L(), R("p", {
					key: e,
					class: O(["app:m-0 app:text-xs", M(Q)(o("key"), "app:text-error", "app:text-warning")])
				}, k(e), 3))), 128))])) : U("", !0)
			])])]), B("section", Hb, [B("div", Ub, [B("fieldset", Wb, [
				n[10] ||= B("legend", { class: "dui-fieldset-legend" }, "WFRP Availability", -1),
				n[11] ||= B("p", { class: "dui-fieldset-label" }, " Choose whether character creation lists this custom species. ", -1),
				B("label", Gb, [B("input", {
					class: "dui-checkbox",
					checked: e.definition.includeInExtraSpecies,
					disabled: e.isDisabled,
					type: "checkbox",
					onChange: n[2] ||= (e) => r("updateBooleanField", "includeInExtraSpecies", a(e))
				}, null, 40, Kb), n[9] ||= B("span", null, "Show in WFRP extra species options", -1)])
			])])])]),
			B("section", qb, [B("div", Jb, [n[12] ||= B("h3", { class: "dui-card-title" }, "Character Creation", -1), V(Mb, {
				definition: e.definition,
				"is-disabled": e.isDisabled,
				issues: e.issues,
				onUpdateHeightField: n[3] ||= (e, t) => r("updateHeightField", e, t),
				onUpdateStringField: n[4] ||= (e, t) => r("updateStringField", e, t)
			}, null, 8, [
				"definition",
				"is-disabled",
				"issues"
			])])])
		]));
	}
}), Xb = { class: "dui-fieldset" }, Zb = { class: "dui-fieldset-legend" }, Qb = /* @__PURE__ */ P({
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
		return (t, r) => (L(), R("fieldset", Xb, [B("legend", Zb, k(e.label), 1), V(Ay, {
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
}), $b = { class: "dui-card dui-card-border dui-card-sm" }, ex = { class: "dui-card-body" }, tx = {
	key: 1,
	class: "dui-list"
}, nx = { class: "dui-badge dui-badge-ghost" }, rx = { class: "dui-list-col-grow" }, ix = { class: "dui-list" }, ax = { class: "dui-badge dui-badge-ghost" }, ox = ["disabled", "onClick"], sx = { class: "dui-join" }, cx = ["disabled", "onClick"], lx = ["disabled", "onClick"], ux = {
	key: 2,
	class: "dui-alert",
	role: "status"
}, dx = /* @__PURE__ */ P({
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
			return n.rows?.length ? n.rows : sf(n.values);
		}
		function a() {
			r("updateRows", $d(i()));
		}
		function o(e) {
			r("updateRows", ef(i(), e));
		}
		function s(e, t) {
			r("updateRows", tf(i(), e, t));
		}
		function c(e) {
			r("updateRows", nf(i(), e));
		}
		function l() {
			return Ty(wy(n.issues));
		}
		return (t, n) => (L(), R("section", $b, [B("div", ex, [
			V(M_, {
				"action-label": "Add Rule",
				"action-title": "Add a rolled Career and replacement choices",
				count: i().length,
				description: "Offer one or more replacement Careers for a rolled Career group.",
				"is-disabled": e.isDisabled,
				title: "Career Replacements",
				onAdd: a
			}, null, 8, ["count", "is-disabled"]),
			l().length ? (L(), R("div", {
				key: 0,
				class: O(["dui-alert", M(Q)(M(wy)(e.issues), "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [n[2] ||= B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), B("div", null, [(L(!0), R(I, null, F(l(), (e) => (L(), R("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, k(e), 1))), 128))])], 2)) : U("", !0),
			i().length > 0 ? (L(), R("ul", tx, [(L(!0), R(I, null, F(i(), (t, i) => (L(), R("li", {
				key: `career-replacement-${i}`,
				class: O(["dui-list-row", M(Q)(M(by)(e.issues, i), "app:border app:border-error", "app:border app:border-warning")])
			}, [
				B("span", nx, "Rule " + k(i + 1), 1),
				B("div", rx, [
					V(Qb, {
						description: "Drop the Career result that should allow replacement choices.",
						"is-disabled": e.isDisabled,
						issues: M(vy)(e.issues, "rolled", i),
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
					n[4] ||= B("strong", null, "Replacement choices", -1),
					B("ul", ix, [(L(!0), R(I, null, F(t.replacements, (t, a) => (L(), R("li", {
						key: `${i}-${a}`,
						class: O(["dui-list-row", M(Q)(M(Sy)(e.issues, i, a), "app:border app:border-error", "app:border app:border-warning")])
					}, [
						B("span", ax, k(a + 1), 1),
						V(Qb, {
							class: "dui-list-col-grow",
							description: "Drop one Career offered instead of the rolled Career.",
							"is-disabled": e.isDisabled,
							issues: M(vy)(e.issues, "replacement", i, a),
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
						B("button", {
							disabled: e.isDisabled,
							title: "Remove this replacement Career choice",
							class: "dui-btn dui-btn-error dui-btn-sm",
							type: "button",
							onClick: (e) => s(i, a)
						}, [...n[3] ||= [B("i", {
							"aria-hidden": "true",
							class: "fa-solid fa-xmark"
						}, null, -1), H(" Remove ", -1)]], 8, ox)
					], 2))), 128))])
				]),
				B("div", sx, [B("button", {
					class: "dui-btn dui-btn-sm dui-join-item",
					disabled: e.isDisabled,
					title: "Add another replacement Career choice",
					type: "button",
					onClick: (e) => o(i)
				}, [...n[5] ||= [B("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-plus"
				}, null, -1), H(" Choice ", -1)]], 8, cx), B("button", {
					disabled: e.isDisabled,
					title: "Remove this Career replacement rule",
					class: "dui-btn dui-btn-error dui-btn-sm dui-join-item",
					type: "button",
					onClick: (e) => c(i)
				}, [...n[6] ||= [B("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), H(" Remove Rule ", -1)]], 8, lx)])
			], 2))), 128))])) : (L(), R("div", ux, [...n[7] ||= [B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), B("span", null, "No Career replacements.", -1)]]))
		])]));
	}
}), fx = { class: "dui-card dui-card-border dui-card-sm" }, px = { class: "dui-card-body" }, mx = {
	key: 1,
	class: "dui-list"
}, hx = { class: "dui-badge dui-badge-ghost" }, gx = { class: "dui-list-col-grow" }, _x = {
	key: 0,
	class: "app:flex app:flex-wrap app:gap-1"
}, vx = {
	key: 0,
	class: "dui-badge dui-badge-outline dui-badge-sm"
}, yx = {
	key: 1,
	class: "dui-badge dui-badge-ghost dui-badge-sm"
}, bx = { class: "dui-fieldset" }, xx = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], Sx = ["id"], Cx = { class: "dui-fieldset" }, wx = [
	"disabled",
	"value",
	"onInput"
], Tx = ["disabled", "onClick"], Ex = {
	key: 2,
	class: "dui-alert",
	role: "status"
}, Dx = /* @__PURE__ */ P({
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
			r("updateRows", Mu(n.rows));
		}
		function o(e) {
			r("updateRows", Nu(n.rows, e));
		}
		function s(e, t) {
			r("updateRows", Pu(n.rows, e, t));
		}
		function c(e) {
			return e.target instanceof HTMLInputElement ? e.target.value : "";
		}
		function l(e) {
			return vy(n.issues, "name", e);
		}
		function u(e) {
			return Ty(l(e));
		}
		function d() {
			return Ty(wy(n.issues));
		}
		return (t, n) => (L(), R("section", fx, [B("div", px, [
			V(M_, {
				"action-label": "Add Career",
				"action-title": "Add a Career table row",
				count: i().length,
				description: "Career group names drive character generation. Journal links provide the result link; blank links use the generated fallback journal.",
				"is-disabled": e.isDisabled,
				title: "Career Table",
				onAdd: a
			}, null, 8, ["count", "is-disabled"]),
			d().length ? (L(), R("div", {
				key: 0,
				class: O(["dui-alert", M(Q)(M(wy)(e.issues), "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [n[0] ||= B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), B("div", null, [(L(!0), R(I, null, F(d(), (e) => (L(), R("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, k(e), 1))), 128))])], 2)) : U("", !0),
			i().length > 0 ? (L(), R("ul", mx, [(L(!0), R(I, null, F(i(), (t, i) => (L(), R("li", {
				key: i,
				class: O(["dui-list-row", M(Q)(M(by)(e.issues, i), "app:border app:border-error", "app:border app:border-warning")])
			}, [
				B("span", hx, k(i + 1), 1),
				B("div", gx, [
					t.sourceRange || t.sourceWeight ? (L(), R("div", _x, [t.sourceRange ? (L(), R("span", vx, " Range " + k(t.sourceRange[0]) + "–" + k(t.sourceRange[1]), 1)) : U("", !0), t.sourceWeight ? (L(), R("span", yx, " Weight " + k(t.sourceWeight), 1)) : U("", !0)])) : U("", !0),
					V(fy, {
						description: "Drop a WFRP Career item.",
						disabled: e.isDisabled,
						"manual-entry-trigger": "none",
						title: "Career",
						variant: "bare",
						onDropData: (e) => r("dropCareer", i, e)
					}, {
						default: N(() => [B("fieldset", bx, [
							n[1] ||= B("legend", { class: "dui-fieldset-legend" }, "Career Group", -1),
							B("input", {
								"aria-describedby": l(i).length ? `career-table-name-${i}-errors` : void 0,
								"aria-invalid": M(Dy)(l(i)) || void 0,
								class: O(["dui-input", M(Q)(l(i), "dui-input-error", "dui-input-warning")]),
								disabled: e.isDisabled,
								value: t.name,
								placeholder: "Pit Fighter",
								type: "text",
								onInput: (e) => s(i, { name: c(e) })
							}, null, 42, xx),
							u(i).length ? (L(), R("div", {
								key: 0,
								id: `career-table-name-${i}-errors`
							}, [(L(!0), R(I, null, F(u(i), (e) => (L(), R("p", {
								key: e,
								class: O(["app:m-0 app:text-xs", M(Q)(l(i), "app:text-error", "app:text-warning")])
							}, k(e), 3))), 128))], 8, Sx)) : U("", !0)
						])]),
						_: 2
					}, 1032, ["disabled", "onDropData"]),
					V(fy, {
						description: "Drop a Journal Entry or Journal Page.",
						disabled: e.isDisabled,
						"manual-entry-trigger": "button",
						title: "Journal Link",
						variant: "bare",
						onDropData: (e) => r("dropJournal", i, e)
					}, {
						default: N(() => [B("fieldset", Cx, [n[2] ||= B("legend", { class: "dui-fieldset-legend" }, "Journal Entry/Page UUID", -1), B("input", {
							class: "dui-input",
							disabled: e.isDisabled,
							value: t.journalUuid ?? "",
							placeholder: "Compendium.package.journals.entry.JournalEntryPage.page",
							type: "text",
							onInput: (e) => s(i, { journalUuid: c(e) })
						}, null, 40, wx)])]),
						_: 2
					}, 1032, ["disabled", "onDropData"])
				]),
				B("button", {
					class: "dui-btn dui-btn-error dui-btn-sm",
					disabled: e.isDisabled,
					type: "button",
					onClick: (e) => o(i)
				}, [...n[3] ||= [B("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), H(" Remove ", -1)]], 8, Tx)
			], 2))), 128))])) : (L(), R("div", Ex, [...n[4] ||= [B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), B("span", null, "No Career rows yet.", -1)]]))
		])]));
	}
});
//#endregion
//#region src/functions/species-builder/editor/random-talents.ts
function Ox(e) {
	return Object.entries(e ?? {});
}
function kx(e, t) {
	let n = t[0]?.key ?? "talents";
	return Px([...e, [n, 1]]);
}
function Ax(e, t, n) {
	return Px(e.map(([e, r], i) => i === t ? [n, r] : [e, r]));
}
function jx(e, t, n) {
	let r = Number(n);
	return Px(e.map(([e, n], i) => i === t && Number.isFinite(r) ? [e, r] : [e, n]));
}
function Mx(e, t) {
	return Px(e.filter((e, n) => n !== t));
}
function Nx(e, t) {
	return e.some((e) => e.key === t) ? e : [...e, {
		key: t,
		label: `Saved source missing from this world (${t})`
	}];
}
function Px(e) {
	return e.flatMap(([e, t]) => e.trim() ? [`${e.trim()}: ${t}`] : []).join("\n");
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/tabs/tables/tabs/random-talents/RandomTalentRows.vue?vue&type=script&setup=true&lang.ts
var Fx = { class: "dui-card dui-card-border dui-card-sm" }, Ix = { class: "dui-card-body" }, Lx = {
	key: 1,
	class: "dui-list"
}, Rx = { class: "dui-badge dui-badge-ghost" }, zx = { class: "dui-list-col-grow" }, Bx = { class: "dui-fieldset" }, Vx = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], Hx = ["value"], Ux = ["id"], Wx = { class: "dui-fieldset" }, Gx = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], Kx = ["id"], qx = ["disabled", "onClick"], Jx = {
	key: 2,
	class: "dui-alert",
	role: "status"
}, Yx = /* @__PURE__ */ P({
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
			return Ox(n.values);
		}
		function a() {
			r("update", kx(i(), n.sources));
		}
		function o(e, t) {
			r("update", Ax(i(), e, t));
		}
		function s(e, t) {
			r("update", jx(i(), e, t));
		}
		function c(e) {
			return Nx(n.sources, e);
		}
		function l(e) {
			r("update", Mx(i(), e));
		}
		function u(e) {
			return e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement ? e.target.value : "";
		}
		function d(e, t) {
			return vy(n.issues, e, t);
		}
		function f(e, t) {
			return Ty(d(e, t));
		}
		function p() {
			return Ty(wy(n.issues));
		}
		return (t, n) => (L(), R("section", Fx, [B("div", Ix, [
			V(M_, {
				"action-label": "Add Source",
				"action-title": "Add a random Talent source and draw count",
				count: i().length,
				description: "Choose an available Talent table and the number of draws from that source.",
				"is-disabled": e.isDisabled,
				title: "Random Talents",
				onAdd: a
			}, null, 8, ["count", "is-disabled"]),
			p().length ? (L(), R("div", {
				key: 0,
				class: O(["dui-alert", M(Q)(M(wy)(e.issues), "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [n[0] ||= B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), B("div", null, [(L(!0), R(I, null, F(p(), (e) => (L(), R("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, k(e), 1))), 128))])], 2)) : U("", !0),
			i().length > 0 ? (L(), R("ul", Lx, [(L(!0), R(I, null, F(i(), ([t, r], i) => (L(), R("li", {
				key: `random-${i}`,
				class: O(["dui-list-row", M(Q)(M(by)(e.issues, i), "app:border app:border-error", "app:border app:border-warning")])
			}, [
				B("span", Rx, k(i + 1), 1),
				B("div", zx, [B("fieldset", Bx, [
					n[1] ||= B("legend", { class: "dui-fieldset-legend" }, "Talent source", -1),
					B("select", {
						"aria-describedby": d("key", i).length ? `random-talents-key-${i}-errors` : void 0,
						"aria-invalid": M(Dy)(d("key", i)) || void 0,
						class: O(["dui-select", M(Q)(d("key", i), "dui-select-error", "dui-select-warning")]),
						disabled: e.isDisabled,
						title: "Random Talent table source available in this world.",
						value: t,
						onInput: (e) => o(i, u(e))
					}, [(L(!0), R(I, null, F(c(t), (e) => (L(), R("option", {
						key: e.key,
						value: e.key
					}, k(e.label), 9, Hx))), 128))], 42, Vx),
					f("key", i).length ? (L(), R("div", {
						key: 0,
						id: `random-talents-key-${i}-errors`
					}, [(L(!0), R(I, null, F(f("key", i), (e) => (L(), R("p", {
						key: e,
						class: O(["app:m-0 app:text-xs", M(Q)(d("key", i), "app:text-error", "app:text-warning")])
					}, k(e), 3))), 128))], 8, Ux)) : U("", !0)
				]), B("fieldset", Wx, [
					n[2] ||= B("legend", { class: "dui-fieldset-legend" }, "Draws", -1),
					B("input", {
						"aria-describedby": d("count", i).length ? `random-talents-count-${i}-errors` : void 0,
						"aria-invalid": M(Dy)(d("count", i)) || void 0,
						class: O(["dui-input", M(Q)(d("count", i), "dui-input-error", "dui-input-warning")]),
						disabled: e.isDisabled,
						min: "0",
						title: "How many random Talents this species draws from that table.",
						value: r,
						type: "number",
						onInput: (e) => s(i, u(e))
					}, null, 42, Gx),
					f("count", i).length ? (L(), R("div", {
						key: 0,
						id: `random-talents-count-${i}-errors`
					}, [(L(!0), R(I, null, F(f("count", i), (e) => (L(), R("p", {
						key: e,
						class: O(["app:m-0 app:text-xs", M(Q)(d("count", i), "app:text-error", "app:text-warning")])
					}, k(e), 3))), 128))], 8, Kx)) : U("", !0)
				])]),
				B("button", {
					disabled: e.isDisabled,
					title: "Remove this random Talent source",
					class: "dui-btn dui-btn-error dui-btn-sm",
					type: "button",
					onClick: (e) => l(i)
				}, [...n[3] ||= [B("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), H(" Remove ", -1)]], 8, qx)
			], 2))), 128))])) : (L(), R("div", Jx, [...n[4] ||= [B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), B("span", null, "No random Talent draws.", -1)]]))
		])]));
	}
}), Xx = { class: "dui-card dui-card-border dui-card-sm" }, Zx = { class: "dui-card-body" }, Qx = {
	key: 1,
	class: "dui-list"
}, $x = { class: "dui-badge dui-badge-ghost" }, eS = { class: "dui-list-col-grow" }, tS = ["disabled", "onClick"], nS = {
	key: 2,
	class: "dui-alert",
	role: "status"
}, rS = /* @__PURE__ */ P({
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
			return n.rows?.length ? n.rows : of(n.values);
		}
		function a() {
			r("updateRows", Zd(i()));
		}
		function o(e) {
			r("updateRows", Qd(i(), e));
		}
		function s() {
			return Ty(wy(n.issues));
		}
		return (t, n) => (L(), R("section", Xx, [B("div", Zx, [
			V(M_, {
				"action-label": "Add Rule",
				"action-title": "Add a rolled Talent and replacement Talent",
				count: i().length,
				description: "Offer a specific alternative when character creation rolls a Talent.",
				"is-disabled": e.isDisabled,
				title: "Talent Replacements",
				onAdd: a
			}, null, 8, ["count", "is-disabled"]),
			s().length ? (L(), R("div", {
				key: 0,
				class: O(["dui-alert", M(Q)(M(wy)(e.issues), "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [n[2] ||= B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), B("div", null, [(L(!0), R(I, null, F(s(), (e) => (L(), R("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, k(e), 1))), 128))])], 2)) : U("", !0),
			i().length > 0 ? (L(), R("ul", Qx, [(L(!0), R(I, null, F(i(), (t, i) => (L(), R("li", {
				key: `talent-replacement-${i}`,
				class: O(["dui-list-row", M(Q)(M(by)(e.issues, i), "app:border app:border-error", "app:border app:border-warning")])
			}, [
				B("span", $x, k(i + 1), 1),
				B("div", eS, [V(Qb, {
					description: "Drop the Talent result that may be replaced.",
					"is-disabled": e.isDisabled,
					issues: M(vy)(e.issues, "rolled", i),
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
				]), V(Qb, {
					description: "Drop the Talent offered instead of the rolled Talent.",
					"is-disabled": e.isDisabled,
					issues: M(vy)(e.issues, "replacement", i),
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
				B("button", {
					disabled: e.isDisabled,
					title: "Remove this Talent replacement",
					class: "dui-btn dui-btn-error dui-btn-sm",
					type: "button",
					onClick: (e) => o(i)
				}, [...n[3] ||= [B("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), H(" Remove ", -1)]], 8, tS)
			], 2))), 128))])) : (L(), R("div", nS, [...n[4] ||= [B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), B("span", null, "No Talent replacements.", -1)]]))
		])]));
	}
}), iS = { class: "dui-card dui-card-border dui-card-sm" }, aS = { class: "dui-card-body" }, oS = { key: 0 }, sS = { class: "app:m-0" }, cS = {
	key: 1,
	class: "app:m-0"
}, lS = {
	key: 2,
	"aria-label": "Table editor",
	class: "dui-tabs dui-tabs-border",
	role: "tablist"
}, uS = [
	"id",
	"aria-controls",
	"aria-selected",
	"disabled",
	"onClick"
], dS = ["title"], fS = { class: "app:sr-only" }, pS = /* @__PURE__ */ P({
	__name: "RandomTablesSection",
	props: {
		activeTab: {},
		help: {},
		includeCareerReplacements: {
			type: Boolean,
			default: !1
		},
		isDisabled: { type: Boolean },
		isNavigationDisabled: {
			type: Boolean,
			default: !1
		},
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
		let n = e, r = t, i = W(() => {
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
		function f(e) {
			let t = Fm(d(e));
			return t ? Im(t) : "";
		}
		function p(e) {
			return d(e).some((e) => e.severity !== "warning");
		}
		return (t, n) => (L(), R("section", iS, [B("div", aS, [
			e.showNavigation ? (L(), R("header", oS, [n[8] ||= B("h3", { class: "dui-card-title" }, "Tables And Replacements", -1), B("p", sS, k(e.help), 1)])) : (L(), R("p", cS, k(e.help), 1)),
			e.showNavigation ? (L(), R("div", lS, [(L(!0), R(I, null, F(i.value, (t) => (L(), R("button", {
				id: `random-table-tab-${t.tab}`,
				key: t.tab,
				"aria-controls": `random-table-panel-${t.tab}`,
				"aria-selected": e.activeTab === t.tab,
				class: O(["dui-tab", { "dui-tab-active": e.activeTab === t.tab }]),
				disabled: e.isNavigationDisabled,
				role: "tab",
				type: "button",
				onClick: (e) => l(t.tab)
			}, [H(k(t.label) + " ", 1), d(t.tab).length > 0 ? (L(), R("span", {
				key: 0,
				class: O(["dui-status dui-status-sm", p(t.tab) ? "dui-status-error" : "dui-status-warning"]),
				title: f(t.tab)
			}, [B("span", fS, k(f(t.tab)), 1)], 10, dS)) : U("", !0)], 10, uS))), 128))])) : U("", !0),
			e.activeTab === "careerTable" ? (L(), z(Dx, {
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
			])) : e.activeTab === "randomTalents" ? (L(), z(Yx, {
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
			])) : e.activeTab === "talentReplacement" ? (L(), z(rS, {
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
			])) : e.includeCareerReplacements ? (L(), z(dx, {
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
			])) : U("", !0)
		])]));
	}
}), mS = { class: "dui-card dui-card-border dui-card-sm" }, hS = { class: "dui-card-body" }, gS = { class: "dui-fieldset" }, _S = { class: "dui-collapse dui-collapse-arrow" }, vS = { class: "dui-collapse-content" }, yS = { "aria-label": "Wound formula keywords" }, bS = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value"
], xS = {
	key: 0,
	id: "species-wound-formula-errors"
}, SS = {
	key: 1,
	class: "dui-alert dui-alert-info"
}, CS = /* @__PURE__ */ P({
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
			return vy(n.issues, "woundFormula");
		}
		function s() {
			return Ty(o());
		}
		return (t, n) => (L(), R("section", mS, [B("div", hS, [B("fieldset", gS, [
			n[3] ||= wa("<legend class=\"dui-fieldset-legend\">Wound Calculation</legend><p class=\"dui-fieldset-label\"> Use <code>{Skill or Characteristic}</code> for a total value, <code>[Skill or Characteristic]</code> for its bonus, and <code>{Skill|Characteristic}</code> or <code>[Skill|Characteristic]</code> to base a skill on another characteristic. You can also use keywords such as <code>@tb</code>, <code>@scale</code>, and <code>@xp</code>. </p>", 2),
			B("details", _S, [n[2] ||= B("summary", { class: "dui-collapse-title" }, "Formula keyword guide", -1), B("div", vS, [n[1] ||= B("p", null, [
				H(" Keywords pull values from the current Actor during Wound calculation. Size uses "),
				B("code", null, "@size"),
				H(" as steps from Average and "),
				B("code", null, "@scale"),
				H(" as powers of two. ")
			], -1), B("div", yS, [(L(), R(I, null, F(i, (e) => B("code", {
				key: e,
				class: "dui-badge"
			}, k(e), 1)), 64))])])]),
			n[4] ||= B("label", {
				class: "dui-label",
				for: "species-wound-formula"
			}, "Formula", -1),
			B("textarea", {
				id: "species-wound-formula",
				"aria-describedby": o().length ? "species-wound-formula-errors" : void 0,
				"aria-invalid": M(Dy)(o()) || void 0,
				class: O(["dui-textarea app:w-full", M(Q)(o(), "dui-textarea-error", "dui-textarea-warning")]),
				disabled: e.isDisabled,
				value: e.formula ?? "",
				placeholder: "@sb * (1 + @sbMultiplier) + @tb * (2 + @tbMultiplier) + @wpb * (1 + @wpbMultiplier)",
				rows: "4",
				onInput: n[0] ||= (e) => r("updateWoundFormula", a(e))
			}, null, 42, bS),
			s().length ? (L(), R("div", xS, [(L(!0), R(I, null, F(s(), (e) => (L(), R("p", {
				key: e,
				class: O(["app:m-0 app:text-xs", M(Q)(o(), "app:text-error", "app:text-warning")])
			}, k(e), 3))), 128))])) : U("", !0),
			e.generatedTraitName ? (L(), R("p", SS, " Generated Trait item: " + k(e.generatedTraitName), 1)) : U("", !0)
		])])]));
	}
}), wS = { class: "dui-card dui-card-border dui-card-sm" }, TS = { class: "dui-card-body" }, ES = { class: "dui-collapse-title" }, DS = { class: "dui-badge" }, OS = { class: "dui-collapse-content" }, kS = { class: "dui-fieldset" }, AS = [
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], jS = { class: "dui-collapse dui-collapse-arrow" }, MS = { class: "dui-collapse-title" }, NS = { class: "dui-badge" }, PS = { class: "dui-collapse-content" }, FS = {
	key: 0,
	class: "dui-list"
}, IS = {
	key: 1,
	class: "dui-alert"
}, LS = { class: "dui-collapse dui-collapse-arrow" }, RS = { class: "dui-collapse-title" }, zS = { class: "dui-badge" }, BS = { class: "dui-collapse-content" }, VS = {
	key: 0,
	class: "dui-list"
}, HS = {
	key: 1,
	class: "dui-alert"
}, US = /* @__PURE__ */ P({
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
		let s = W(() => yc(r.parentDefinition, r.subspecies)), c = W(() => wc(r.parentDefinition, r.subspecies, {
			parent: r.parentDefinition.woundFormula ? sl(r.parentDefinition) : void 0,
			subspecies: r.subspecies.woundFormula ? r.woundFormulaTraitName : void 0
		})), l = W(() => Ty(r.issues));
		function u(e) {
			return yy(r.issues, e);
		}
		return (t, r) => (L(), R("section", wS, [B("div", TS, [
			r[6] ||= B("h3", { class: "dui-card-title" }, "Skill And Trait Changes", -1),
			r[7] ||= B("p", null, " These changes are applied to the parent lists and exported as complete WFRP subspecies lists. Open only the list you need to edit. ", -1),
			l.value.length ? (L(), R("div", {
				key: 0,
				class: O(["dui-alert", M(Q)(e.issues, "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [r[0] ||= B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), B("div", null, [(L(!0), R(I, null, F(l.value, (e) => (L(), R("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, k(e), 1))), 128))])], 2)) : U("", !0),
			(L(), R(I, null, F(n, (t) => B("details", {
				key: t.field,
				class: "dui-collapse dui-collapse-arrow"
			}, [B("summary", ES, [H(k(t.label) + " ", 1), B("span", DS, k(e.subspecies[t.field]?.length ?? 0), 1)]), B("div", OS, [B("fieldset", kS, [r[1] ||= B("legend", { class: "dui-fieldset-legend" }, "One name per line", -1), B("textarea", {
				class: O(["dui-textarea", M(Q)(u(t.field), "dui-textarea-error", "dui-textarea-warning")]),
				"aria-invalid": M(Dy)(u(t.field)) || void 0,
				disabled: e.isDisabled,
				value: o(e.subspecies[t.field]),
				rows: "5",
				onInput: (e) => i("updateArrayField", t.field, a(e))
			}, null, 42, AS)])])])), 64)),
			r[8] ||= B("div", { class: "dui-divider" }, "Compiled Preview", -1),
			r[9] ||= B("div", { class: "dui-alert dui-alert-info" }, [B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-eye"
			}), B("span", null, "Read-only previews show the final inherited lists WFRP will receive.")], -1),
			B("details", jS, [B("summary", MS, [r[2] ||= H(" Compiled Skills ", -1), B("span", NS, k(s.value.length), 1)]), B("div", PS, [s.value.length > 0 ? (L(), R("ul", FS, [(L(!0), R(I, null, F(s.value, (e) => (L(), R("li", {
				key: e,
				class: "dui-list-row"
			}, [r[3] ||= B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-check"
			}, null, -1), B("span", null, k(e), 1)]))), 128))])) : (L(), R("p", IS, "The compiled Skill list is empty."))])]),
			B("details", LS, [B("summary", RS, [r[4] ||= H(" Compiled Traits ", -1), B("span", zS, k(c.value.length), 1)]), B("div", BS, [c.value.length > 0 ? (L(), R("ul", VS, [(L(!0), R(I, null, F(c.value, (e) => (L(), R("li", {
				key: e,
				class: "dui-list-row"
			}, [r[5] ||= B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-check"
			}, null, -1), B("span", null, k(e), 1)]))), 128))])) : (L(), R("p", HS, "The compiled Trait list is empty."))])])
		])]));
	}
}), WS = { class: "dui-card dui-card-border dui-card-sm" }, GS = { class: "dui-card-body" }, KS = { class: "dui-fieldset" }, qS = { class: "dui-table dui-table-sm" }, JS = { scope: "row" }, YS = ["for"], XS = [
	"id",
	"aria-invalid",
	"disabled",
	"value"
], ZS = { scope: "row" }, QS = ["for"], $S = [
	"id",
	"aria-invalid",
	"disabled",
	"placeholder",
	"value"
], eC = { class: "dui-fieldset" }, tC = { class: "dui-fieldset" }, nC = /* @__PURE__ */ P({
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
		let n = e, r = t, i = W(() => Ty(n.issues));
		function a(e) {
			return e.target instanceof HTMLInputElement ? e.target.value : "";
		}
		function o(e) {
			return vy(n.issues, e);
		}
		function s(e) {
			return Ty(o(e));
		}
		return (t, n) => (L(), R("section", WS, [B("div", GS, [
			i.value.length ? (L(), R("div", {
				key: 0,
				class: O(["dui-alert", M(Q)(e.issues, "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [n[4] ||= B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), B("div", null, [(L(!0), R(I, null, F(i.value, (e) => (L(), R("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, k(e), 1))), 128))])], 2)) : U("", !0),
			B("fieldset", KS, [
				n[5] ||= B("legend", { class: "dui-fieldset-legend" }, "Identity", -1),
				n[6] ||= B("p", { class: "dui-fieldset-label" }, " Name this variant and give it a unique key under its parent species. ", -1),
				B("table", qS, [B("tbody", null, [B("tr", null, [B("th", JS, [B("label", { for: `subspecies-${e.index}-name` }, "Name", 8, YS)]), B("td", null, [B("input", {
					id: `subspecies-${e.index}-name`,
					class: O(["dui-input dui-input-sm", M(Q)(o("name"), "dui-input-error", "dui-input-warning")]),
					"aria-invalid": M(Dy)(o("name")) || void 0,
					disabled: e.isDisabled,
					value: e.subspecies.name,
					type: "text",
					onInput: n[0] ||= (e) => r("updateStringField", "name", a(e))
				}, null, 42, XS), (L(!0), R(I, null, F(s("name"), (e) => (L(), R("p", {
					key: e,
					class: O(["app:m-0 app:text-xs", M(Q)(o("name"), "app:text-error", "app:text-warning")])
				}, k(e), 3))), 128))])]), B("tr", null, [B("th", ZS, [B("label", { for: `subspecies-${e.index}-key` }, "Key", 8, QS)]), B("td", null, [B("input", {
					id: `subspecies-${e.index}-key`,
					class: O(["dui-input dui-input-sm", M(Q)(o("key"), "dui-input-error", "dui-input-warning")]),
					"aria-invalid": M(Dy)(o("key")) || void 0,
					disabled: e.isDisabled,
					placeholder: M(dm)(e.subspecies),
					value: e.subspecies.key,
					type: "text",
					onInput: n[1] ||= (e) => r("updateStringField", "key", a(e))
				}, null, 42, $S), (L(!0), R(I, null, F(s("key"), (e) => (L(), R("p", {
					key: e,
					class: O(["app:m-0 app:text-xs", M(Q)(o("key"), "app:text-error", "app:text-warning")])
				}, k(e), 3))), 128))])])])])
			]),
			B("fieldset", eC, [
				n[7] ||= B("legend", { class: "dui-fieldset-legend" }, "Characteristic Overrides", -1),
				n[8] ||= B("p", { class: "dui-fieldset-label" }, " Enter only formulas that replace the parent species characteristic value. ", -1),
				V(ob, {
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
			B("fieldset", tC, [
				n[9] ||= B("legend", { class: "dui-fieldset-legend" }, "Resource Overrides", -1),
				n[10] ||= B("p", { class: "dui-fieldset-label" }, "Leave a value blank to keep the parent species value.", -1),
				V(fb, {
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
}), rC = { class: "app:flex app:flex-wrap app:items-start app:justify-between app:gap-3" }, iC = { class: "app:flex app:flex-col app:gap-1" }, aC = { class: "app:flex app:flex-wrap app:items-center app:gap-2" }, oC = {
	key: 0,
	class: "dui-badge dui-badge-ghost dui-badge-sm"
}, sC = {
	id: "species-builder-subspecies-title",
	class: "app:m-0"
}, cC = { class: "dui-card-actions" }, lC = ["disabled"], uC = {
	key: 0,
	class: "dui-alert dui-alert-info",
	role: "note"
}, dC = /* @__PURE__ */ P({
	__name: "SubspeciesEditorHeader",
	props: {
		isBusy: { type: Boolean },
		isReadOnly: { type: Boolean },
		name: {}
	},
	emits: ["close", "delete"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (L(), R(I, null, [B("header", rC, [B("div", iC, [B("span", aC, [r[3] ||= B("span", { class: "dui-badge dui-badge-ghost" }, "Subspecies", -1), e.isReadOnly ? (L(), R("span", oC, [...r[2] ||= [B("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-lock"
		}, null, -1), H(" Installed ", -1)]])) : U("", !0)]), B("h2", sC, k(e.name), 1)]), B("div", cC, [e.isReadOnly ? U("", !0) : (L(), R("button", {
			key: 0,
			class: "dui-btn dui-btn-error dui-btn-sm",
			disabled: e.isBusy,
			type: "button",
			onClick: r[0] ||= (e) => n("delete")
		}, [...r[4] ||= [B("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-trash"
		}, null, -1), H(" Delete ", -1)]], 8, lC)), B("button", {
			class: "dui-btn dui-btn-sm",
			type: "button",
			onClick: r[1] ||= (e) => n("close")
		}, "Close")])]), e.isReadOnly ? (L(), R("div", uC, [...r[5] ||= [B("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-lock"
		}, null, -1), B("span", null, " This installed subspecies is available for reference. Its controls are locked because the source module owns the data. ", -1)]])) : U("", !0)], 64));
	}
}), fC = [
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
], pC = {
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
function mC(e, t) {
	return e.filter((e) => pC[t].includes(e.section));
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/tabs/subspecies/SubspeciesEditorTabs.vue?vue&type=script&setup=true&lang.ts
var hC = {
	"aria-label": "Edit subspecies section",
	class: "dui-tabs dui-tabs-border",
	role: "tablist"
}, gC = [
	"id",
	"aria-controls",
	"aria-selected",
	"autofocus",
	"disabled",
	"onClick"
], _C = ["title"], vC = { class: "app:sr-only" }, yC = /* @__PURE__ */ P({
	__name: "SubspeciesEditorTabs",
	props: {
		activeTab: {},
		isBusy: { type: Boolean },
		issues: {}
	},
	emits: ["select"],
	setup(e, { emit: t }) {
		let n = e, r = t;
		function i(e) {
			return Fm(mC(n.issues, e));
		}
		return (t, n) => (L(), R("div", hC, [(L(!0), R(I, null, F(M(fC), (t) => (L(), R("button", {
			id: `subspecies-editor-tab-${t.tab}`,
			key: t.tab,
			"aria-controls": `subspecies-editor-panel-${t.tab}`,
			"aria-selected": e.activeTab === t.tab,
			autofocus: t.tab === e.activeTab,
			class: O(["dui-tab", { "dui-tab-active": e.activeTab === t.tab }]),
			disabled: e.isBusy,
			role: "tab",
			type: "button",
			onClick: (e) => r("select", t.tab)
		}, [H(k(t.label) + " ", 1), i(t.tab) ? (L(), R("span", {
			key: 0,
			class: O(["dui-status dui-status-sm", i(t.tab)?.severity === "error" ? "dui-status-error" : "dui-status-warning"]),
			title: M(Im)(i(t.tab))
		}, [B("span", vC, k(M(Im)(i(t.tab))), 1)], 10, _C)) : U("", !0)], 10, gC))), 128))]));
	}
});
//#endregion
//#region src/functions/species-builder/editor/subspecies-talents.ts
function bC(e, t, n) {
	let r = CC(e), i = CC(t), a = CC(n), o = r.filter((e) => !a.includes(e)).map((e) => ({
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
function xC(e, t) {
	return e.source === "added" ? {
		field: "talentsAdded",
		value: wC(t.addedTalents.filter((t) => t !== e.name))
	} : {
		field: "talentsRemoved",
		value: wC([...t.removedTalents, e.name])
	};
}
function SC(e, t) {
	return {
		field: "talentsRemoved",
		value: wC(t.removedTalents.filter((t) => t !== e))
	};
}
function CC(e) {
	let t = [];
	for (let n of e ?? []) {
		let e = n.trim();
		e && !t.includes(e) && t.push(e);
	}
	return t;
}
function wC(e) {
	return CC(e).join("\n");
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/tabs/subspecies/SubspeciesTalentInheritance.vue?vue&type=script&setup=true&lang.ts
var TC = { class: "dui-card dui-card-border dui-card-sm" }, EC = { class: "dui-card-body" }, DC = {
	key: 1,
	class: "dui-list"
}, OC = { class: "dui-list-col-grow" }, kC = { class: "dui-badge" }, AC = [
	"disabled",
	"title",
	"onClick"
], jC = {
	key: 2,
	class: "dui-alert",
	role: "status"
}, MC = { key: 3 }, NC = { class: "dui-card-actions" }, PC = [
	"disabled",
	"title",
	"onClick"
], FC = /* @__PURE__ */ P({
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
		let n = e, r = t, i = W(() => bC(n.parentTalents, n.subspecies.talentsAdded, n.subspecies.talentsRemoved)), a = W(() => Ty(n.issues));
		function o(e) {
			c(xC(e, i.value));
		}
		function s(e) {
			c(SC(e, i.value));
		}
		function c(e) {
			r("updateArrayField", n.index, e.field, e.value);
		}
		function l(e) {
			if (e.source !== "added") return [];
			let t = n.subspecies.talentsAdded?.findIndex((t) => t.trim() === e.name);
			return t === void 0 || t < 0 ? [] : xy(n.issues, "talentsAdded", t);
		}
		function u(e) {
			return Ty(l(e));
		}
		return (t, n) => (L(), R("section", TC, [B("div", EC, [
			n[6] ||= B("h3", { class: "dui-card-title" }, "Talent Inheritance", -1),
			n[7] ||= B("p", null, " Parent Talents are shown here as the subspecies Talent list. Removing an inherited Talent records it as removed; dropping a new Talent records it as added. ", -1),
			a.value.length ? (L(), R("div", {
				key: 0,
				class: O(["dui-alert", M(Q)(e.issues, "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [n[1] ||= B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), B("div", null, [(L(!0), R(I, null, F(a.value, (e) => (L(), R("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, k(e), 1))), 128))])], 2)) : U("", !0),
			V(fy, {
				description: "Drop a WFRP Talent item to add it to this subspecies.",
				disabled: e.isDisabled,
				title: "Drop Added Talent",
				variant: "compact",
				onDropData: n[0] ||= (t) => r("talentDrop", e.index, t)
			}, null, 8, ["disabled"]),
			i.value.activeRows.length > 0 ? (L(), R("ul", DC, [(L(!0), R(I, null, F(i.value.activeRows, (t) => (L(), R("li", {
				key: `${t.source}-${t.name}`,
				class: O(["dui-list-row", M(Q)(l(t), "app:border app:border-error", "app:border app:border-warning")])
			}, [B("div", OC, [
				B("strong", null, k(t.name), 1),
				B("span", kC, k(t.source === "inherited" ? "Inherited" : "Added"), 1),
				(L(!0), R(I, null, F(u(t), (e) => (L(), R("p", {
					key: e,
					class: O(["app:m-0 app:text-xs", M(Q)(l(t), "app:text-error", "app:text-warning")])
				}, k(e), 3))), 128))
			]), B("button", {
				disabled: e.isDisabled,
				class: "dui-btn dui-btn-error dui-btn-sm",
				title: `Remove ${t.name}`,
				type: "button",
				onClick: (e) => o(t)
			}, [...n[2] ||= [B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), H(" Remove ", -1)]], 8, AC)], 2))), 128))])) : (L(), R("div", jC, [...n[3] ||= [B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), B("span", null, "No Talents in the compiled list.", -1)]])),
			i.value.removedParentTalents.length > 0 ? (L(), R("div", MC, [n[5] ||= B("h4", null, "Removed Parent Talents", -1), B("div", NC, [(L(!0), R(I, null, F(i.value.removedParentTalents, (t) => (L(), R("button", {
				key: t,
				class: "dui-btn dui-btn-sm",
				disabled: e.isDisabled,
				title: `Restore ${t}`,
				type: "button",
				onClick: (e) => s(t)
			}, [n[4] ||= B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-rotate-left"
			}, null, -1), H(" " + k(t), 1)], 8, PC))), 128))])])) : U("", !0)
		])]));
	}
}), IC = ["onKeydown"], LC = ["aria-busy"], RC = /* @__PURE__ */ P({
	__name: "SubspeciesEditorSubView",
	props: {
		index: {},
		isLoading: { type: Boolean },
		isOpen: { type: Boolean },
		isReadOnly: { type: Boolean },
		isSaving: { type: Boolean },
		issues: {},
		parentDefinition: {},
		parentTalents: {},
		randomTalentSources: {},
		subspecies: {},
		validationNavigationRequest: {},
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
		let n = e, r = t, i = /* @__PURE__ */ j("details"), a = /* @__PURE__ */ j("careerTable"), o = /* @__PURE__ */ j(-1), s = /* @__PURE__ */ j(), c = im(), l = nm(), u = W(() => n.isLoading || n.isSaving), d = W(() => u.value || n.isReadOnly), f = W(() => l.blockingValidationIssues.length > 0 || l.blockingSpeciesTableValidationMessages.length > 0), p = W(() => l.validationIssues.some((e) => e.severity === "warning"));
		function m(e, t) {
			e !== "careerReplacements" && r("updateTextMapField", n.index, e, t);
		}
		function h(e) {
			return mC(n.issues, e);
		}
		function g() {
			s.value?.close();
		}
		function _() {
			n.isOpen && r("close"), c.restore();
		}
		return Jn(() => n.isOpen, async (e) => {
			if (e) {
				let e = n.validationNavigationRequest, t = e?.sequence === o.value ? void 0 : jg(e, n.index);
				o.value = e?.sequence ?? o.value, i.value = t?.tab ?? "details", a.value = t?.tableTab ?? "careerTable", c.capture(), await kn(), n.isOpen && !s.value?.open && s.value?.showModal();
			} else s.value?.open && s.value.close();
		}, {
			flush: "post",
			immediate: !0
		}), (t, n) => (L(), R("dialog", {
			ref_key: "dialog",
			ref: s,
			class: "dui-modal",
			"aria-labelledby": "species-builder-subspecies-title",
			onClose: _,
			onKeydown: Zo(Yo(g, ["stop", "prevent"]), ["esc"]),
			onKeyup: n[18] ||= Zo(Yo(() => {}, ["stop"]), ["esc"])
		}, [e.subspecies ? (L(), R("div", {
			key: 0,
			class: "dui-modal-box app:max-w-5xl",
			"aria-busy": u.value
		}, [
			V(dC, {
				"is-busy": u.value,
				"is-read-only": e.isReadOnly,
				name: e.subspecies.name || "Untitled",
				onClose: g,
				onDelete: n[0] ||= (t) => r("delete", e.index)
			}, null, 8, [
				"is-busy",
				"is-read-only",
				"name"
			]),
			V(yC, {
				"active-tab": i.value,
				"is-busy": u.value,
				issues: e.issues,
				onSelect: n[1] ||= (e) => i.value = e
			}, null, 8, [
				"active-tab",
				"is-busy",
				"issues"
			]),
			i.value === "details" ? (L(), z(nC, {
				key: 0,
				id: "subspecies-editor-panel-details",
				"aria-label": "Subspecies details",
				"aria-labelledby": "subspecies-editor-tab-details",
				index: e.index,
				"is-disabled": d.value,
				issues: h("details"),
				role: "tabpanel",
				subspecies: e.subspecies,
				onUpdateCharacteristic: n[2] ||= (t, n) => r("updateCharacteristic", e.index, t, n),
				onUpdateNumberField: n[3] ||= (t, n) => r("updateNumberField", e.index, t, n),
				onUpdateStringField: n[4] ||= (t, n) => r("updateStringField", e.index, t, n)
			}, null, 8, [
				"index",
				"is-disabled",
				"issues",
				"subspecies"
			])) : i.value === "talents" ? (L(), z(FC, {
				key: 1,
				id: "subspecies-editor-panel-talents",
				"aria-label": "Subspecies Talents",
				"aria-labelledby": "subspecies-editor-tab-talents",
				index: e.index,
				"is-disabled": d.value,
				issues: h("talents"),
				"parent-talents": e.parentTalents,
				role: "tabpanel",
				subspecies: e.subspecies,
				onTalentDrop: n[5] ||= (e, t) => r("talentDrop", e, t),
				onUpdateArrayField: n[6] ||= (e, t, n) => r("updateArrayField", e, t, n)
			}, null, 8, [
				"index",
				"is-disabled",
				"issues",
				"parent-talents",
				"subspecies"
			])) : i.value === "changes" ? (L(), z(US, {
				key: 2,
				id: "subspecies-editor-panel-changes",
				"aria-label": "Subspecies Skill and Trait changes",
				"aria-labelledby": "subspecies-editor-tab-changes",
				"is-disabled": d.value,
				issues: h("changes"),
				"parent-definition": e.parentDefinition,
				role: "tabpanel",
				subspecies: e.subspecies,
				"wound-formula-trait-name": e.woundFormulaTraitName,
				onUpdateArrayField: n[7] ||= (t, n) => r("updateArrayField", e.index, t, n)
			}, null, 8, [
				"is-disabled",
				"issues",
				"parent-definition",
				"subspecies",
				"wound-formula-trait-name"
			])) : i.value === "wounds" ? (L(), z(CS, {
				key: 3,
				id: "subspecies-editor-panel-wounds",
				"aria-label": "Subspecies wounds",
				"aria-labelledby": "subspecies-editor-tab-wounds",
				formula: e.subspecies.woundFormula?.formula,
				"generated-trait-name": e.woundFormulaTraitName,
				"is-disabled": d.value,
				issues: h("wounds"),
				role: "tabpanel",
				onUpdateWoundFormula: n[8] ||= (t) => r("updateWoundFormula", e.index, t)
			}, null, 8, [
				"formula",
				"generated-trait-name",
				"is-disabled",
				"issues"
			])) : (L(), z(pS, {
				key: 4,
				id: "subspecies-editor-panel-tables",
				"active-tab": a.value,
				"aria-label": "Subspecies tables",
				"aria-labelledby": "subspecies-editor-tab-tables",
				help: "Configure subspecies-specific random Talent draws and Talent replacement offers as rows.",
				"include-career-replacements": e.isReadOnly,
				"is-disabled": d.value,
				"is-navigation-disabled": u.value,
				issues: h("tables"),
				"random-talent-sources": e.randomTalentSources,
				role: "tabpanel",
				"show-navigation": "",
				values: e.subspecies,
				onCareerTableCareerDrop: n[9] ||= (t, n) => r("careerTableCareerDrop", e.index, t, n),
				onCareerTableJournalDrop: n[10] ||= (t, n) => r("careerTableJournalDrop", e.index, t, n),
				onOpenItem: n[11] ||= (e) => r("openItem", e),
				onSelectTab: n[12] ||= (e) => a.value = e,
				onTalentReplacementReplacementDrop: n[13] ||= (t, n) => r("talentReplacementReplacementDrop", e.index, t, n),
				onTalentReplacementRolledDrop: n[14] ||= (t, n) => r("talentReplacementRolledDrop", e.index, t, n),
				onUpdate: m,
				onUpdateCareerTableRows: n[15] ||= (t) => r("updateCareerTableRows", e.index, t),
				onUpdateTalentReplacementRows: n[16] ||= (t) => r("updateTalentReplacementRows", e.index, t)
			}, null, 8, [
				"active-tab",
				"include-career-replacements",
				"is-disabled",
				"is-navigation-disabled",
				"issues",
				"random-talent-sources",
				"values"
			])),
			e.isReadOnly ? U("", !0) : (L(), z(_m, {
				key: 5,
				"can-save": M(l).canSave,
				"entity-key": e.subspecies.key,
				"entity-name": e.subspecies.name || "Untitled Subspecies",
				"has-unsaved-changes": M(l).hasUnsavedChanges,
				"has-validation-errors": f.value,
				"has-validation-warnings": p.value,
				"is-loading": M(l).isLoading,
				"is-saving": M(l).isSaving,
				"load-error": M(l).loadError,
				onSave: n[17] ||= (e) => r("save")
			}, null, 8, [
				"can-save",
				"entity-key",
				"entity-name",
				"has-unsaved-changes",
				"has-validation-errors",
				"has-validation-warnings",
				"is-loading",
				"is-saving",
				"load-error"
			]))
		], 8, LC)) : U("", !0), n[19] ||= B("form", {
			class: "dui-modal-backdrop",
			method: "dialog"
		}, [B("button", {
			"aria-label": "Close subspecies editor",
			type: "submit"
		}, "Close")], -1)], 40, IC));
	}
}), zC = /* @__PURE__ */ P({
	__name: "SpeciesBuilderSubspeciesOverlay",
	props: {
		index: {},
		isLoading: { type: Boolean },
		isOpen: { type: Boolean },
		isReadOnly: { type: Boolean },
		isSaving: { type: Boolean },
		issues: {},
		parentDefinition: {},
		parentTalents: {},
		randomTalentSources: {},
		subspecies: {},
		validationNavigationRequest: {},
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
		return (t, i) => (L(), z(RC, {
			index: e.index,
			"is-loading": e.isLoading,
			"is-open": e.isOpen,
			"is-read-only": e.isReadOnly,
			"is-saving": e.isSaving,
			issues: e.issues,
			"parent-definition": e.parentDefinition,
			"parent-talents": e.parentTalents,
			"random-talent-sources": e.randomTalentSources,
			subspecies: e.subspecies,
			"validation-navigation-request": e.validationNavigationRequest,
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
			"is-read-only",
			"is-saving",
			"issues",
			"parent-definition",
			"parent-talents",
			"random-talent-sources",
			"subspecies",
			"validation-navigation-request",
			"wound-formula-trait-name"
		]));
	}
});
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/tabs/subspecies/subspecies-overlay-events.ts
function BC(e, t) {
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
var VC = { class: "dui-card dui-card-border dui-card-sm" }, HC = { class: "dui-card-body" }, UC = { class: "app:flex app:items-start app:justify-between app:gap-4" }, WC = { class: "dui-card-actions app:items-center" }, GC = ["disabled"], KC = {
	key: 0,
	class: "dui-alert dui-alert-info",
	role: "note"
}, qC = {
	key: 1,
	class: "dui-alert dui-alert-warning",
	role: "alert"
}, JC = {
	key: 2,
	"aria-labelledby": "custom-variants-heading"
}, YC = { class: "app:flex app:items-center app:justify-between app:gap-2" }, XC = { class: "dui-badge dui-badge-sm" }, ZC = {
	key: 0,
	class: "dui-alert",
	role: "status"
}, QC = {
	key: 1,
	class: "dui-list"
}, $C = {
	key: 3,
	"aria-labelledby": "installed-variants-heading"
}, ew = { class: "app:flex app:items-center app:justify-between app:gap-2" }, tw = { class: "dui-badge dui-badge-ghost dui-badge-sm" }, nw = { class: "dui-list" }, rw = {
	key: 4,
	class: "dui-alert",
	role: "status"
}, iw = {
	key: 5,
	class: "dui-list"
}, aw = /* @__PURE__ */ P({
	__name: "SubspeciesSection",
	props: {
		definition: {},
		isLoading: { type: Boolean },
		isSaving: { type: Boolean },
		validationIndicators: {}
	},
	emits: ["addSubspecies", "editSubspecies"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = W(() => n.definition.subspecies ?? []), a = W(() => i.value.slice(0, n.definition.runtimeSubspeciesCount)), o = W(() => i.value.slice(n.definition.runtimeSubspeciesCount)), s = W(() => !n.isLoading && !n.isSaving && !n.definition.runtimeUnavailable);
		function c(e) {
			return e.name.trim() || e.key.trim() || "Untitled Subspecies";
		}
		function l(e) {
			return e.key.trim() || dm(e);
		}
		return (t, n) => (L(), R("section", VC, [B("div", HC, [
			B("header", UC, [n[2] ||= B("div", null, [B("h3", { class: "dui-card-title" }, "Subspecies"), B("p", { class: "app:m-0" }, "Variants inherit this species and store only their changes.")], -1), B("div", WC, [B("button", {
				class: "dui-btn dui-btn-primary dui-btn-sm",
				disabled: !s.value,
				type: "button",
				onClick: n[0] ||= (e) => r("addSubspecies")
			}, [...n[1] ||= [B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), H(" New Subspecies ", -1)]], 8, GC)])]),
			e.definition.origin === "runtime" && !e.definition.runtimeUnavailable ? (L(), R("div", KC, [...n[3] ||= [B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-lock"
			}, null, -1), B("span", null, " Installed variants are read-only. New subspecies are saved by this module without changing the installed parent species. ", -1)]])) : U("", !0),
			e.definition.runtimeUnavailable ? (L(), R("div", qC, [...n[4] ||= [B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-triangle-exclamation"
			}, null, -1), B("span", null, " The installed parent species is currently unavailable. Saved custom variants are being preserved, but new variants cannot be added until the source returns. ", -1)]])) : U("", !0),
			e.definition.origin === "runtime" ? (L(), R("section", JC, [B("header", YC, [n[5] ||= B("div", null, [B("h4", {
				id: "custom-variants-heading",
				class: "dui-card-title"
			}, "Custom Additions"), B("p", { class: "app:m-0" }, "Editable variants owned by this world.")], -1), B("span", XC, k(o.value.length), 1)]), o.value.length === 0 ? (L(), R("div", ZC, [...n[6] ||= [B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), B("span", null, "No custom variants yet. Add one without altering the installed species.", -1)]])) : (L(), R("ul", QC, [(L(!0), R(I, null, F(o.value, (t, n) => (L(), z(dv, {
				key: `custom-${t.key}-${n}`,
				"action-label": "Edit",
				"entry-key": l(t),
				"icon-class": "fa-solid fa-user-plus",
				"is-disabled": e.isLoading || e.isSaving,
				title: c(t),
				"validation-indicator": e.validationIndicators[n + e.definition.runtimeSubspeciesCount],
				onOpen: (t) => r("editSubspecies", n + e.definition.runtimeSubspeciesCount)
			}, null, 8, [
				"entry-key",
				"is-disabled",
				"title",
				"validation-indicator",
				"onOpen"
			]))), 128))]))])) : U("", !0),
			a.value.length > 0 ? (L(), R("section", $C, [B("header", ew, [n[7] ||= B("div", null, [B("h4", {
				id: "installed-variants-heading",
				class: "dui-card-title"
			}, "Installed Variants"), B("p", { class: "app:m-0" }, "Provided by WFRP or an active module.")], -1), B("span", tw, k(a.value.length), 1)]), B("ul", nw, [(L(!0), R(I, null, F(a.value, (t, n) => (L(), z(dv, {
				key: `runtime-${t.key}-${n}`,
				"action-label": "View setup",
				"edit-icon-class": "fa-solid fa-eye",
				"entry-key": l(t),
				"icon-class": "fa-solid fa-book-open",
				"is-disabled": e.isLoading || e.isSaving,
				"is-read-only": "",
				title: c(t),
				"validation-indicator": e.validationIndicators[n],
				onOpen: (e) => r("editSubspecies", n)
			}, null, 8, [
				"entry-key",
				"is-disabled",
				"title",
				"validation-indicator",
				"onOpen"
			]))), 128))])])) : U("", !0),
			e.definition.origin === "custom" && i.value.length === 0 ? (L(), R("div", rw, [...n[8] ||= [B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), B("span", null, "No subspecies yet.", -1)]])) : e.definition.origin === "custom" ? (L(), R("ul", iw, [(L(!0), R(I, null, F(i.value, (t, n) => (L(), z(dv, {
				key: `${t.key}-${n}`,
				"action-label": "Edit",
				"entry-key": l(t),
				"icon-class": "fa-solid fa-user-group",
				"is-disabled": e.isLoading || e.isSaving,
				title: c(t),
				"validation-indicator": e.validationIndicators[n],
				onOpen: (e) => r("editSubspecies", n)
			}, null, 8, [
				"entry-key",
				"is-disabled",
				"title",
				"validation-indicator",
				"onOpen"
			]))), 128))])) : U("", !0)
		])]));
	}
}), ow = /* @__PURE__ */ P({
	__name: "SpeciesBuilderDetailPanel",
	props: {
		activeEditorTab: {},
		activeTableTab: {},
		definition: {},
		isLoading: { type: Boolean },
		isSaving: { type: Boolean },
		issues: {},
		randomTalentSources: {},
		validationNavigationRequest: {}
	},
	emits: /* @__PURE__ */ "addSubspecies.careerTableCareerDrop.careerTableJournalDrop.careerReplacementChoiceDrop.careerReplacementRolledDrop.deleteSubspecies.openItem.save.subspeciesTalentDrop.subspeciesTalentReplacementReplacementDrop.subspeciesTalentReplacementRolledDrop.talentReplacementReplacementDrop.talentReplacementRolledDrop.updateBooleanField.updateCareerReplacementRows.updateCareerTableRows.updateCharacteristic.updateHeightField.updateNumberField.updateStringField.updateWoundFormula.updateSubspeciesArrayField.updateSubspeciesCharacteristic.updateSubspeciesNumberField.updateSubspeciesStringField.updateSubspeciesCareerTableRows.subspeciesCareerTableCareerDrop.subspeciesCareerTableJournalDrop.updateSubspeciesWoundFormula.updateSubspeciesTalentReplacementRows.updateSubspeciesTextMapField.updateTalentReplacementRows.updateTextMapField".split("."),
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ j(-1), a = /* @__PURE__ */ j(null), o = W(() => n.definition.subspecies?.[i.value]), s = W(() => n.definition.origin === "runtime"), c = W(() => n.isLoading || n.isSaving || s.value), l = W(() => n.definition.origin === "runtime" && i.value >= 0 && i.value < n.definition.runtimeSubspeciesCount), u = W(() => id(nd(n.definition.talents, n.definition.linkedTalents))), d = W(() => sl(n.definition)), f = W(() => {
			let e = o.value;
			return e ? cl(n.definition, e) : "";
		}), p = W(() => n.issues.filter((e) => e.scope === "definition")), m = W(() => n.issues.filter((e) => e.scope === "subspecies" && e.subspeciesIndex === i.value)), h = W(() => (n.definition.subspecies ?? []).map((e, t) => Fm(n.issues.filter((e) => e.scope === "subspecies" && e.subspeciesIndex === t)))), g = W(() => n.activeEditorTab === "skills" || n.activeEditorTab === "talents" || n.activeEditorTab === "traits" ? [n.activeEditorTab] : []);
		Jn(() => n.definition.key, () => {
			i.value = -1;
		}), Jn(() => n.definition.subspecies?.length ?? 0, (e) => {
			i.value >= e && (i.value = -1);
		}), Jn(() => n.validationNavigationRequest, async (e) => {
			e?.destination.kind === "subspecies" && await v(e.destination.subspeciesIndex);
		}, { flush: "post" });
		async function _() {
			let e = n.definition.subspecies?.length ?? 0;
			r("addSubspecies"), await kn(), await v(e);
		}
		async function v(e) {
			i.value = e, await kn(), x();
		}
		function y(e) {
			r("deleteSubspecies", e), i.value = -1;
		}
		let b = BC(r, {
			close: () => {
				i.value = -1;
			},
			deleteSubspecies: y
		});
		function x() {
			let e = a.value?.parentElement ?? null;
			for (; e;) {
				if (S(e)) {
					e.scrollTop = 0;
					return;
				}
				e = e.parentElement;
			}
		}
		function S(e) {
			let t = window.getComputedStyle(e).overflowY;
			return e.scrollHeight > e.clientHeight && (t === "auto" || t === "scroll" || t === "overlay");
		}
		return (t, n) => (L(), R("section", {
			ref_key: "detailPanelElement",
			ref: a
		}, [V(zC, Oa({
			index: i.value,
			"is-loading": e.isLoading,
			"is-open": i.value >= 0,
			"is-read-only": l.value,
			"is-saving": e.isSaving,
			issues: m.value,
			"parent-talents": u.value,
			"parent-definition": e.definition,
			"random-talent-sources": e.randomTalentSources,
			subspecies: o.value,
			"validation-navigation-request": e.validationNavigationRequest,
			"wound-formula-trait-name": f.value
		}, Gr(M(b))), null, 16, [
			"index",
			"is-loading",
			"is-open",
			"is-read-only",
			"is-saving",
			"issues",
			"parent-talents",
			"parent-definition",
			"random-talent-sources",
			"subspecies",
			"validation-navigation-request",
			"wound-formula-trait-name"
		]), e.activeEditorTab === "details" ? (L(), z(Yb, {
			key: 0,
			id: "species-editor-panel-details",
			"aria-label": "Species details",
			definition: e.definition,
			"is-disabled": c.value,
			issues: p.value,
			role: "region",
			onUpdateBooleanField: n[0] ||= (e, t) => r("updateBooleanField", e, t),
			onUpdateHeightField: n[1] ||= (e, t) => r("updateHeightField", e, t),
			onUpdateStringField: n[2] ||= (e, t) => r("updateStringField", e, t)
		}, null, 8, [
			"definition",
			"is-disabled",
			"issues"
		])) : e.activeEditorTab === "attributes" ? (L(), z(bb, {
			key: 1,
			id: "species-editor-panel-attributes",
			"aria-label": "Species attributes",
			definition: e.definition,
			"is-disabled": c.value,
			issues: p.value,
			role: "region",
			onUpdateCharacteristic: n[3] ||= (e, t) => r("updateCharacteristic", e, t),
			onUpdateNumberField: n[4] ||= (e, t) => r("updateNumberField", e, t)
		}, null, 8, [
			"definition",
			"is-disabled",
			"issues"
		])) : e.activeEditorTab === "wounds" ? (L(), z(CS, {
			key: 2,
			id: "species-editor-panel-wounds",
			"aria-label": "Species wounds",
			formula: e.definition.woundFormula?.formula,
			"generated-trait-name": d.value,
			"is-disabled": c.value,
			issues: p.value,
			role: "region",
			onUpdateWoundFormula: n[5] ||= (e) => r("updateWoundFormula", e)
		}, null, 8, [
			"formula",
			"generated-trait-name",
			"is-disabled",
			"issues"
		])) : g.value.length > 0 ? (L(), z(eb, {
			key: 3,
			id: `species-editor-panel-${e.activeEditorTab}`,
			"aria-label": `Species ${e.activeEditorTab}`,
			fields: g.value,
			"is-disabled": c.value,
			issues: p.value,
			role: "region",
			values: e.definition
		}, null, 8, [
			"id",
			"aria-label",
			"fields",
			"is-disabled",
			"issues",
			"values"
		])) : e.activeEditorTab === "tables" ? (L(), z(pS, {
			key: 4,
			id: "species-editor-panel-tables",
			"active-tab": e.activeTableTab,
			"aria-label": "Species tables",
			help: "Configure random Talent draws, Talent swap offers, and Career replacement choices without writing object-map syntax by hand.",
			"include-career-replacements": "",
			"is-disabled": c.value,
			issues: p.value,
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
		])) : (L(), z(aw, {
			key: 5,
			id: "species-editor-panel-subspecies",
			"aria-label": "Subspecies",
			definition: e.definition,
			"is-loading": e.isLoading,
			"is-saving": e.isSaving,
			"validation-indicators": h.value,
			role: "region",
			onAddSubspecies: _,
			onEditSubspecies: v
		}, null, 8, [
			"definition",
			"is-loading",
			"is-saving",
			"validation-indicators"
		]))], 512));
	}
}), sw = { class: "app:mb-3 app:flex app:flex-col app:gap-2" }, cw = { class: "app:flex app:flex-wrap app:items-center app:gap-2" }, lw = { class: "dui-card-title" }, uw = { class: "app:m-0" }, dw = {
	key: 0,
	class: "dui-alert dui-alert-info",
	role: "note"
}, fw = {
	key: 1,
	class: "dui-alert dui-alert-warning",
	role: "alert"
}, pw = {
	key: 1,
	role: "status",
	class: "dui-alert dui-alert-warning"
}, mw = /* @__PURE__ */ P({
	__name: "SpeciesBuilderEditorPage",
	props: {
		activeEditorTab: {},
		activeTableTab: {},
		definition: {},
		isLoading: { type: Boolean },
		isSaving: { type: Boolean },
		issues: {},
		randomTalentSources: {},
		validationNavigationRequest: {}
	},
	emits: /* @__PURE__ */ "addSubspecies.careerTableCareerDrop.careerTableJournalDrop.careerReplacementChoiceDrop.careerReplacementRolledDrop.deleteSubspecies.openItem.save.subspeciesTalentDrop.subspeciesTalentReplacementReplacementDrop.subspeciesTalentReplacementRolledDrop.talentReplacementReplacementDrop.talentReplacementRolledDrop.updateBooleanField.updateCareerReplacementRows.updateCareerTableRows.updateCharacteristic.updateHeightField.updateNumberField.updateStringField.updateWoundFormula.updateSubspeciesArrayField.updateSubspeciesCharacteristic.updateSubspeciesNumberField.updateSubspeciesStringField.updateSubspeciesCareerTableRows.subspeciesCareerTableCareerDrop.subspeciesCareerTableJournalDrop.updateSubspeciesWoundFormula.updateSubspeciesTalentReplacementRows.updateSubspeciesTextMapField.updateTalentReplacementRows.updateTextMapField".split("."),
	setup(e, { emit: t }) {
		let n = e, r = t, i = W(() => Km("species", !0, n.activeEditorTab, n.activeTableTab)), a = W(() => n.activeEditorTab !== "subspecies" && n.definition?.origin === "runtime" && !n.definition.runtimeUnavailable), o = W(() => n.activeEditorTab !== "subspecies" && n.definition?.runtimeUnavailable);
		return (t, n) => (L(), R("section", null, [B("header", sw, [
			B("div", cw, [B("h2", lw, k(i.value.label), 1), e.definition?.origin === "runtime" ? (L(), R("span", {
				key: 0,
				class: O(["dui-badge dui-badge-sm", e.definition.runtimeUnavailable ? "dui-badge-warning" : "dui-badge-ghost"])
			}, [B("i", {
				"aria-hidden": "true",
				class: O(e.definition.runtimeUnavailable ? "fa-solid fa-triangle-exclamation" : "fa-solid fa-lock")
			}, null, 2), H(" " + k(e.definition.runtimeUnavailable ? "Unavailable source" : "Installed species"), 1)], 2)) : U("", !0)]),
			B("p", uw, k(i.value.description), 1),
			a.value ? (L(), R("div", dw, [...n[33] ||= [B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), B("span", null, " This species comes from WFRP or an active module, so its setup is read-only. You can inspect every section and add editable custom variants from Subspecies. ", -1)]])) : o.value ? (L(), R("div", fw, [...n[34] ||= [B("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-triangle-exclamation"
			}, null, -1), B("span", null, " This species source is no longer active. Its saved custom variants are preserved until the source returns. ", -1)]])) : U("", !0)
		]), e.definition ? (L(), z(ow, {
			key: 0,
			"active-editor-tab": e.activeEditorTab,
			"active-table-tab": e.activeTableTab,
			definition: e.definition,
			"is-loading": e.isLoading,
			"is-saving": e.isSaving,
			issues: e.issues,
			"random-talent-sources": e.randomTalentSources,
			"validation-navigation-request": e.validationNavigationRequest,
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
			"random-talent-sources",
			"validation-navigation-request"
		])) : (L(), R("section", pw, "No species selected."))]));
	}
}), hw = ["aria-busy"], gw = { class: "app:flex app:flex-1 app:items-start app:gap-3 app:p-3" }, _w = { class: "app:flex app:min-w-0 app:flex-1 app:flex-col app:gap-3" }, vw = /* @__PURE__ */ P({
	__name: "SpeciesBuilderApp",
	props: {
		bridge: {},
		onSettingsSaved: { type: Function }
	},
	setup(e) {
		let t = e, n = rm(t.bridge, { onSettingsSaved: t.onSettingsSaved }), r = /* @__PURE__ */ j("species"), i = /* @__PURE__ */ j(!1), a = /* @__PURE__ */ j("details"), o = /* @__PURE__ */ j("careerTable"), s = Cg(n), c = W(() => n.isLoading.value || n.isSaving.value), l = W(() => i.value && n.selectedDefinition.value?.origin === "custom"), u = W(() => Km(r.value, i.value, a.value, o.value)), d = W(() => i.value ? n.selectedDefinition.value?.name.trim() || n.selectedDefinition.value?.key.trim() || "Untitled Species" : ""), f = W(() => _s(n.definitions.value).map((e) => e.key)), { close: p, isOpen: m, navigationRequest: h, open: g, selectIssue: _, summaryIssues: v } = Qg({
			definitions: n.definitions,
			issues: n.validationIssues,
			openEditorTab: ie,
			openTableTab: ae,
			selectDefinition: n.selectDefinition,
			selectProjectTab: oe
		}), y = W(() => n.blockingValidationIssues.value.length > 0 || n.blockingSpeciesTableValidationMessages.value.length > 0), b = W(() => ({
			errors: v.value.filter((e) => e.severity === "error").length,
			warnings: v.value.filter((e) => e.severity === "warning").length
		})), x = W(() => b.value.warnings > 0), S = W(() => n.validationIssues.value.filter((e) => e.definitionIndex === n.selectedIndex.value)), C = W(() => Wm(n.validationIssues.value, n.selectedIndex.value)), ee = W(() => !!n.loadError.value || !!n.saveError.value || !!n.message.value || n.validationIssues.value.length > 0 || y.value), { confirmPendingDelete: w, pendingDelete: te, requestDeleteDefinition: T, requestDeleteSubspecies: ne } = wg({
			deleteDefinition: n.deleteSelectedDefinition,
			deleteSubspecies: n.deleteSubspecies,
			selectedDefinition: n.selectedDefinition
		});
		kr(() => {
			n.loadSettings();
		}), Jn(() => n.showGeneratedConfigTab.value, (e) => {
			!e && r.value === "wfrp-config" && (r.value = "species");
		}), Jn(() => n.selectedDefinition.value, (e) => {
			e || (i.value = !1);
		});
		function re(e) {
			(e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement || e.target instanceof HTMLTextAreaElement) && e.stopPropagation();
		}
		function E(e, t = "details") {
			n.selectDefinition(e), ie(t);
		}
		function ie(e) {
			r.value = "species", a.value = e, i.value = !0;
		}
		function ae(e) {
			o.value = e, ie("tables");
		}
		function oe(e) {
			r.value = e, i.value = !1;
		}
		function se(e) {
			n.addDefinition(e), ie("details");
		}
		let D = Gv(n, {
			requestDeleteSubspecies: ne,
			requestSave: s.requestSave
		});
		return (e, t) => (L(), R("section", {
			class: "app:flex app:min-h-full app:flex-col",
			"aria-busy": c.value,
			onKeydown: re,
			onKeyup: re
		}, [
			V(Nm, {
				"can-manage-definition": l.value,
				"context-label": u.value.label,
				"definition-name": d.value,
				"is-busy": c.value,
				onDelete: M(T),
				onDuplicate: M(n).duplicateSelectedDefinition,
				onReload: M(n).loadSettings,
				onSelectSpecies: t[0] ||= (e) => oe("species")
			}, {
				actions: N(({ dialogHost: e }) => [V(vg, {
					definition: M(n).selectedDefinition.value?.origin === "custom" ? M(n).selectedDefinition.value : void 0,
					"dialog-host": e,
					"existing-keys": f.value,
					"is-disabled": c.value,
					"is-import-only": M(n).selectedDefinition.value?.origin === "runtime",
					onImportDefinition: se
				}, null, 8, [
					"definition",
					"dialog-host",
					"existing-keys",
					"is-disabled",
					"is-import-only"
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
			V(lm, {
				message: M(te)?.message,
				onClose: t[1] ||= (e) => te.value = null,
				onConfirm: M(w)
			}, null, 8, ["message", "onConfirm"]),
			V(Sg, {
				"is-open": M(s).isConfirmationOpen.value,
				onClose: M(s).closeConfirmation,
				onConfirm: M(s).confirmSave
			}, null, 8, [
				"is-open",
				"onClose",
				"onConfirm"
			]),
			V(Zg, {
				definitions: M(n).definitions.value,
				"is-open": M(m),
				issues: M(v),
				onClose: M(p),
				onSelectIssue: M(_)
			}, null, 8, [
				"definitions",
				"is-open",
				"issues",
				"onClose",
				"onSelectIssue"
			]),
			B("main", gw, [V(th, {
				"active-editor-tab": a.value,
				"active-table-tab": o.value,
				"active-tab": r.value,
				"has-selected-definition": !!M(n).selectedDefinition.value,
				"is-busy": c.value,
				"is-editor-open": i.value,
				"show-generated-config-tab": M(n).showGeneratedConfigTab.value,
				"validation-counts": C.value,
				onSelectEditorTab: ie,
				onSelectTableTab: ae,
				onSelectTab: oe
			}, null, 8, [
				"active-editor-tab",
				"active-table-tab",
				"active-tab",
				"has-selected-definition",
				"is-busy",
				"is-editor-open",
				"show-generated-config-tab",
				"validation-counts"
			]), B("div", _w, [ee.value ? (L(), z(sh, {
				key: 0,
				"chargen-error-count": b.value.errors,
				"chargen-warning-count": b.value.warnings,
				"load-error": M(n).loadError.value || M(n).saveError.value,
				message: M(n).message.value,
				"validation-message": M(n).blockingSpeciesTableValidationMessages.value[0] ?? "",
				onReviewIssues: M(g)
			}, null, 8, [
				"chargen-error-count",
				"chargen-warning-count",
				"load-error",
				"message",
				"validation-message",
				"onReviewIssues"
			])) : U("", !0), i.value ? (L(), z(mw, Oa({
				key: 2,
				id: "species-builder-panel-species",
				"active-editor-tab": a.value,
				"active-table-tab": o.value,
				"aria-label": "Species editor",
				definition: M(n).selectedDefinition.value,
				"is-loading": M(n).isLoading.value,
				"is-saving": M(n).isSaving.value,
				issues: S.value,
				"random-talent-sources": M(n).randomTalentSources.value,
				"validation-navigation-request": M(h),
				role: "region"
			}, Gr(M(D))), null, 16, [
				"active-editor-tab",
				"active-table-tab",
				"definition",
				"is-loading",
				"is-saving",
				"issues",
				"random-talent-sources",
				"validation-navigation-request"
			])) : (L(), z(Wv, {
				key: 1,
				"active-tab": r.value,
				"is-disabled": c.value,
				onEditSpecies: E
			}, null, 8, ["active-tab", "is-disabled"]))])]),
			V(_m, {
				"can-save": M(n).canSave.value,
				definition: i.value ? M(n).selectedDefinition.value : void 0,
				"has-unsaved-changes": M(n).hasUnsavedChanges.value,
				"has-validation-errors": y.value,
				"has-validation-warnings": x.value,
				"is-loading": M(n).isLoading.value,
				"is-saving": M(n).isSaving.value,
				"load-error": M(n).loadError.value || M(n).saveError.value,
				"entity-name": r.value === "species-table" ? "Species Table" : void 0,
				onSave: M(s).requestSave
			}, null, 8, [
				"can-save",
				"definition",
				"has-unsaved-changes",
				"has-validation-errors",
				"has-validation-warnings",
				"is-loading",
				"is-saving",
				"load-error",
				"entity-name",
				"onSave"
			])
		], 40, hw));
	}
}), $ = "wfrp4e-customizer-apps", yw = "wfrp4e", bw = Gs();
//#endregion
//#region src/module/foundry/document-drop.ts
function xw(e) {
	let t = e.value.trim();
	if (!t) return "";
	if (kw(t)) return t;
	let n = Tw(t), r = Dw(n, e.documentType);
	return r ? Aw(n) ? JSON.stringify({
		type: r,
		uuid: n
	}) : JSON.stringify({
		id: n,
		type: r
	}) : "";
}
function Sw(e) {
	let t = !0;
	function n() {
		t && (t = !1, document.removeEventListener("click", r, !0));
	}
	function r(t) {
		let r = t.target;
		if (!(r instanceof Element)) return;
		let i = Cw(r);
		i && (t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), n(), e(i));
	}
	return document.addEventListener("click", r, !0), n;
}
function Cw(e) {
	let t = e.closest("[data-uuid], [data-document-uuid], [data-entry-uuid], [data-document-id], [data-entry-id], [data-pack]");
	if (!t) return "";
	let n = t.dataset.uuid || t.dataset.documentUuid || t.dataset.entryUuid || "";
	if (n) return ww(n);
	let r = t.dataset.documentId || t.dataset.entryId || "", i = Ew(t);
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
function ww(e) {
	let t = Dw(e, "auto");
	return t ? JSON.stringify({
		type: t,
		uuid: e
	}) : "";
}
function Tw(e) {
	return /@UUID\[([^\]]+)]/.exec(e)?.[1]?.trim() ?? e;
}
function Ew(e) {
	let t = e.dataset.documentName || e.dataset.type || e.closest("[data-document-name]")?.dataset.documentName || "";
	return Ow(t) ? t : e.classList.contains("actor") ? "Actor" : e.classList.contains("item") ? "Item" : e.classList.contains("journal") ? "JournalEntry" : e.closest("#actors") ? "Actor" : e.closest("#items") ? "Item" : e.closest("#journal") ? "JournalEntry" : "";
}
function Dw(e, t) {
	return /^actor\./i.test(e) || /\.actors(\.|$)/i.test(e) ? "Actor" : /^item\./i.test(e) || /\.items(\.|$)/i.test(e) ? "Item" : /journalentrypage\./i.test(e) || /\.journalentrypage\./i.test(e) ? "JournalEntryPage" : /^journalentry\./i.test(e) || /\.journals(\.|$)/i.test(e) ? "JournalEntry" : t === "auto" ? "Item" : t;
}
function Ow(e) {
	return e === "Actor" || e === "Item" || e === "JournalEntry" || e === "JournalEntryPage";
}
function kw(e) {
	if (!e.startsWith("{")) return !1;
	try {
		return typeof JSON.parse(e).type == "string";
	} catch {
		return !1;
	}
}
function Aw(e) {
	return /^(actor|item|journalentry|journalentrypage|compendium)\./i.test(e);
}
var jw = {
	createDropData: xw,
	startDocumentPick: Sw
}, Mw = class extends foundry.applications.api.ApplicationV2 {
	#e;
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("wfrp4e-customizer-apps-root"), n.dataset.theme = "wfrp4e-customizer-apps", n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("wfrp4e-customizer-apps-app"), t.replaceChildren(e);
		let r = this.getVueProps() ?? {};
		this.#e = ts(this.getVueComponent(), r), this.#e.use(bw), this.#e.provide(Kv, jw), this.#e.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#e?.unmount(), this.#e = void 0;
	}
}, Nw = "generatedSpeciesCareerTable", Pw = "Compendium.wfrp4e-core.journals.JournalEntry.wczCPcuHT4VQDLpL";
function Fw(e, t = []) {
	return Dc(e, t).flatMap((e) => [...e.emitBaseDefinition ? Lw(e.definition) : [], ...Rw(e.definition, e.subspecies)]);
}
function Iw({ fallbackJournalUuid: e = Pw, flagScope: t, spec: n }) {
	return {
		displayRoll: !0,
		flags: {
			wfrp4e: {
				column: n.column,
				key: "career"
			},
			[t]: { [Nw]: {
				speciesKey: n.speciesKey,
				subspeciesKey: n.subspeciesKey ?? ""
			} }
		},
		formula: `1d${n.rows.length}`,
		img: "systems/wfrp4e/ui/buttons/d10.webp",
		name: n.name,
		replacement: !0,
		results: n.rows.map((t, n) => ({
			description: zw(t, e),
			drawn: !1,
			img: "icons/svg/d20-grey.svg",
			name: t.name,
			range: [n + 1, n + 1],
			type: "text",
			weight: 1
		}))
	};
}
function Lw(e) {
	return e.careerTable?.rows.length ? [{
		column: Sl(e),
		name: `Career - ${e.name}`,
		rows: e.careerTable.rows,
		speciesKey: e.key
	}] : [];
}
function Rw(e, t) {
	return t.flatMap((t) => t.careerTable?.rows.length ? [{
		column: Cl(e, t),
		name: `Career - ${e.name} / ${t.name}`,
		rows: t.careerTable.rows,
		speciesKey: e.key,
		subspeciesKey: t.key
	}] : []);
}
function zw(e, t) {
	return `@UUID[${e.journalUuid?.trim() || t}]{${Bw(e.name)}}`;
}
function Bw(e) {
	return e.replaceAll("{", "").replaceAll("}", "").trim();
}
//#endregion
//#region src/functions/species-builder/default-species-builder-settings.ts
function Vw() {
	return {
		autoRegisterSpeciesTable: !1,
		definitions: [],
		runtimeSpeciesExtensions: [],
		showGeneratedConfigTab: !1
	};
}
//#endregion
//#region src/module/settings/foundry-setting-adapter.ts
function Hw(e) {
	return e;
}
function Uw(e) {
	game.settings.register($, e.key, {
		config: e.config ?? !1,
		default: e.defaultValue,
		name: e.name,
		scope: e.scope ?? "world",
		type: Object
	});
}
function Ww(e) {
	return e.normalize(game.settings.get($, e.key));
}
async function Gw(e, t) {
	let n = e.normalize(t);
	return await game.settings.set($, e.key, n), n;
}
//#endregion
//#region src/module/apps/species-builder/settings.ts
var Kw = Hw({
	defaultValue: Vw(),
	key: "speciesBuilderSettings",
	name: "Species Builder Settings",
	normalize: du
});
function qw() {
	Uw(Kw);
}
function Jw() {
	return Ww(Kw);
}
async function Yw(e) {
	return await Gw(Kw, e);
}
//#endregion
//#region src/module/apps/species-builder/runtime-species/config-snapshot.ts
var Xw = [
	"species",
	"speciesAge",
	"speciesCareerReplacements",
	"speciesCharacteristics",
	"speciesExtra",
	"speciesFate",
	"speciesHeight",
	"speciesMovement",
	"speciesRandomTalents",
	"speciesRes",
	"speciesSkills",
	"speciesTalentReplacement",
	"speciesTalents",
	"speciesTraits",
	"subspecies"
];
function Zw(e) {
	let t = J(e) ? e : {}, n = Object.fromEntries(Xw.map((e) => [e, nT(t[e])]));
	return {
		extraSpecies: iT(t.extraSpecies),
		records: n
	};
}
function Qw(e, t, n) {
	let r = Object.fromEntries(Xw.map((r) => [r, eT(r, e.records[r], t.records[r], n)]));
	return {
		extraSpecies: aT([...e.extraSpecies, ...t.extraSpecies]).filter((t) => !n.has(t) || e.extraSpecies.includes(t)),
		records: r
	};
}
function $w(e, t, n) {
	return e.records[t][n];
}
function eT(e, t, n, r) {
	let i = e === "subspecies" ? tT(t, n) : {
		...t,
		...n
	};
	for (let e of r) Object.hasOwn(t, e) ? i[e] = rT(t[e]) : delete i[e];
	return i;
}
function tT(e, t) {
	let n = new Set([...Object.keys(e), ...Object.keys(t)]);
	return Object.fromEntries([...n].map((n) => {
		let r = J(e[n]) ? e[n] : {}, i = J(t[n]) ? t[n] : {};
		return [n, {
			...r,
			...i
		}];
	}));
}
function nT(e) {
	return J(e) ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, rT(t)])) : {};
}
function rT(e) {
	return Array.isArray(e) ? e.map(rT) : J(e) ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, rT(t)])) : e;
}
function iT(e) {
	return Array.isArray(e) ? e.flatMap((e) => typeof e == "string" && e.trim() ? [e.trim()] : []) : [];
}
function aT(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/module/apps/species-builder/runtime-species/career-table.ts
function oT(e, t, n) {
	let r = cT(e, t, typeof n == "string" ? n.trim() : "");
	for (let e of r) {
		let t = game.wfrp4e?.tables?.findTable?.("career", e);
		if (!t) continue;
		let n = lT(t, e);
		if (n) return sT(n);
	}
}
function sT(e) {
	if (!J(e)) return;
	let t = gT(e.results).flatMap((e) => {
		let t = dT(e);
		return t ? [t] : [];
	});
	return t.length > 0 ? { rows: t } : void 0;
}
function cT(e, t, n) {
	let r = t ? [
		n,
		`${e}-${t}`,
		e
	] : [e];
	return e === "human" && r.push("human-reiklander"), [...new Set(r.filter(Boolean))];
}
function lT(e, t) {
	return !J(e) || !Array.isArray(e.columns) ? e : e.columns.find((e) => uT(e) === t);
}
function uT(e) {
	if (!J(e) || typeof e.getFlag != "function") return "";
	let t = e.getFlag.call(e, "wfrp4e", "column");
	return typeof t == "string" ? t : "";
}
function dT(e) {
	if (!J(e)) return;
	let t = mT(e), n = /@UUID\[([^\]]+)\]\{([^}]+)\}/u.exec(t), r = hT(n?.[2] ?? ""), i = hT(t) || hT(e.name), a = r || i;
	if (!a) return;
	let o = n?.[1]?.trim(), s = fT(e.range), c = pT(e.weight), l = { name: a };
	return o && (l.journalUuid = o), s && (l.sourceRange = s), c !== void 0 && (l.sourceWeight = c), l;
}
function fT(e) {
	if (!Array.isArray(e) || e.length < 2) return;
	let t = Number(e[0]), n = Number(e[1]);
	return Number.isFinite(t) && Number.isFinite(n) ? [t, n] : void 0;
}
function pT(e) {
	let t = Number(e);
	return Number.isFinite(t) && t > 0 ? t : void 0;
}
function mT(e) {
	if (e.type === "document") {
		let t = e.documentUuid, n = e.name;
		return typeof t == "string" && typeof n == "string" ? `@UUID[${t}]{${n}}` : "";
	}
	let t = e.description ?? e.text;
	return typeof t == "string" ? t : "";
}
function hT(e) {
	return typeof e == "string" ? e.replace(/@UUID\[[^\]]+\]\{([^}]+)\}/gu, "$1").replace(/<[^>]*>/gu, "").trim() : "";
}
function gT(e) {
	return Array.isArray(e) ? e : typeof e == "object" && e && Symbol.iterator in e ? [...e] : [];
}
//#endregion
//#region src/module/apps/species-builder/runtime-species/values.ts
var _T = Object.values(q);
function vT(e) {
	if (typeof e == "string") return e.trim() || void 0;
}
function yT(e) {
	return typeof e == "number" && Number.isFinite(e) ? e : void 0;
}
function bT(e) {
	if (Array.isArray(e)) return e.flatMap((e) => {
		let t = vT(e);
		return t ? [t] : [];
	});
}
function xT(e) {
	if (!Array.isArray(e)) return;
	let t, n = [];
	for (let r of e) {
		let e = ST(r);
		if (e !== void 0) {
			t = e;
			continue;
		}
		let i = vT(r);
		i && n.push(i);
	}
	return t === void 0 ? { talents: n } : {
		randomTalentCount: t,
		talents: n
	};
}
function ST(e) {
	if (typeof e == "number") return yT(e);
	if (typeof e != "string" || !e.trim()) return;
	let t = Number(e);
	return Number.isFinite(t) ? t : void 0;
}
function CT(e) {
	if (J(e)) return Object.fromEntries(Object.entries(e).flatMap(([e, t]) => {
		let n = vT(e), r = vT(t);
		return n && r ? [[n, r]] : [];
	}));
}
function wT(e) {
	if (J(e)) return Object.fromEntries(Object.entries(e).flatMap(([e, t]) => {
		let n = vT(e), r = ST(t);
		return n && r !== void 0 ? [[n, r]] : [];
	}));
}
function TT(e) {
	if (J(e)) return Object.fromEntries(Object.entries(e).flatMap(([e, t]) => {
		let n = vT(e), r = bT(t);
		return n && r ? [[n, r]] : [];
	}));
}
function ET(e) {
	if (!J(e)) return;
	let t = _T.flatMap((t) => {
		let n = vT(e[t]);
		return n ? [[t, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : {};
}
function DT(e) {
	if (!J(e)) return;
	let t = {};
	return K(t, "die", vT(e.die)), K(t, "feet", yT(e.feet)), K(t, "inches", yT(e.inches)), Object.keys(t).length > 0 ? t : {};
}
function OT(e, t, n = void 0) {
	if (!e && t === void 0) return;
	let r = { ...e ?? n };
	return t !== void 0 && (r.talents = t), r;
}
function kT(e, t) {
	let n = t.filter((t) => !e.includes(t)), r = e.filter((e) => !t.includes(e)), i = {};
	return K(i, "added", n.length > 0 ? n : void 0), K(i, "removed", r.length > 0 ? r : void 0), i;
}
function AT(e, t) {
	let n = Object.fromEntries(Object.entries(t).filter(([t, n]) => e?.[t] !== n));
	return Object.keys(n).length > 0 ? n : void 0;
}
function jT(e, t) {
	let n = Object.entries(e ?? {}), r = Object.entries(t ?? {});
	return n.length === r.length && n.every(([e, n]) => t?.[e] === n);
}
function MT(e, t, n, r) {
	let i = yT(r);
	i !== void 0 && i !== n && (e[t] = i);
}
//#endregion
//#region src/module/apps/species-builder/runtime-species/definition-adapter.ts
function NT(e, t) {
	let n = new Set(e.extraSpecies);
	return Object.entries(e.records.species).flatMap(([r, i]) => {
		let a = r.trim();
		return a ? [PT(e, a, i, n, t)] : [];
	}).sort(HT);
}
function PT(e, t, n, r, i) {
	let a = {
		includeInExtraSpecies: r.has(t),
		key: t,
		name: vT(n) ?? t
	}, o = xT($w(e, "speciesTalents", t));
	K(a, "characteristics", ET($w(e, "speciesCharacteristics", t))), K(a, "skills", bT($w(e, "speciesSkills", t))), K(a, "talents", o?.talents), K(a, "randomTalents", OT(wT($w(e, "speciesRandomTalents", t)), o?.randomTalentCount)), K(a, "talentReplacements", CT($w(e, "speciesTalentReplacement", t))), K(a, "traits", bT($w(e, "speciesTraits", t))), FT(a, e, t), K(a, "careerTable", i.resolveCareerTable(t, void 0, void 0));
	let s = IT(e, a, i);
	return K(a, "subspecies", s.length > 0 ? s : void 0), a;
}
function FT(e, t, n) {
	K(e, "movement", yT($w(t, "speciesMovement", n))), K(e, "fate", yT($w(t, "speciesFate", n))), K(e, "resilience", yT($w(t, "speciesRes", n))), K(e, "extra", yT($w(t, "speciesExtra", n))), K(e, "age", vT($w(t, "speciesAge", n))), K(e, "height", DT($w(t, "speciesHeight", n))), K(e, "careerReplacements", TT($w(t, "speciesCareerReplacements", n)));
}
function IT(e, t, n) {
	let r = $w(e, "subspecies", t.key);
	return J(r) ? Object.entries(r).flatMap(([r, i]) => r.trim() && J(i) ? [LT(e, t, r.trim(), i, n)] : []).sort(HT) : [];
}
function LT(e, t, n, r, i) {
	let a = {
		key: n,
		name: vT(r.name) ?? n
	}, o = ET(r.characteristics);
	o && K(a, "characteristics", AT(t.characteristics, o)), RT(a, t, r), BT(a, t, r), VT(a, t, r), K(a, "careerReplacements", TT($w(e, "speciesCareerReplacements", `${t.key}-${n}`)));
	let s = CT(r.talentReplacement);
	return jT(t.talentReplacements, s) || K(a, "talentReplacements", s), K(a, "careerTable", i.resolveCareerTable(t.key, n, r.careerTable)), a;
}
function RT(e, t, n) {
	zT(e, "skills", t.skills ?? [], bT(n.skills));
	let r = xT(n.talents);
	zT(e, "talents", t.talents ?? [], r?.talents), zT(e, "traits", t.traits ?? [], bT(n.speciesTraits));
}
function zT(e, t, n, r) {
	if (!r) return;
	let i = kT(n, r);
	K(e, `${t}Added`, i.added), K(e, `${t}Removed`, i.removed);
}
function BT(e, t, n) {
	let r = xT(n.talents), i = OT(wT(n.randomTalents), r?.randomTalentCount, t.randomTalents);
	jT(t.randomTalents, i) || K(e, "randomTalents", i);
}
function VT(e, t, n) {
	MT(e, "movement", t.movement, n.movement), MT(e, "fate", t.fate, n.fate), MT(e, "resilience", t.resilience, n.resilience), MT(e, "extra", t.extra, n.extra);
}
function HT(e, t) {
	return e.name.localeCompare(t.name);
}
//#endregion
//#region src/module/apps/species-builder/runtime-species/index.ts
var UT, WT = [];
function GT() {
	UT = Zw(game.wfrp4e?.config), WT = [];
}
async function KT(e) {
	WT = NT(Qw(UT ?? Zw(void 0), Zw(game.wfrp4e?.config), new Set(e.map((e) => e.trim()).filter(Boolean))), { resolveCareerTable: oT });
}
async function qT() {
	return structuredClone(WT);
}
//#endregion
//#region src/module/apps/species-builder/career-tables.ts
var JT = "WFRP Customizer Generated Career Tables", YT = "WFRP Customizer Career Table Link Fallback";
async function XT(t = Jw()) {
	let n = Fw(t, await qT()), r = await ZT(), i = await eE();
	await QT(r);
	for (let e of n) {
		let t = Iw({
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
async function ZT() {
	let e = game.folders.contents.find((e) => e.type === "RollTable" && e.name === JT);
	if (e) return e;
	let t = await Folder.create({
		name: JT,
		type: "RollTable"
	});
	if (!t) throw Error("Foundry did not create the generated career table folder.");
	return t;
}
async function QT(e) {
	let t = (game.tables?.contents ?? []).filter((t) => t.folder?.id === e.id || $T(t));
	for (let e of t) await e.delete();
}
function $T(e) {
	return J(Y(e.toObject(), [
		"flags",
		$,
		Nw
	]));
}
async function eE() {
	let e = game.journal?.contents.find((e) => e.name === YT);
	if (e) return e.uuid;
	let t = await JournalEntry.create({
		name: YT,
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
function tE(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Actor";
}
function nE(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Item";
}
function rE(e, t = "Expected a Foundry Actor.") {
	if (!tE(e)) throw Error(t);
	return e;
}
function iE(e, t = "Expected a Foundry Item.") {
	if (!nE(e)) throw Error(t);
	return e;
}
function aE(e, t, n = `Expected a Foundry ${t} Item.`) {
	let r = iE(e, n);
	if (r.type !== t) throw Error(n);
	return r;
}
//#endregion
//#region src/module/foundry/drop-data.ts
function oE(e) {
	try {
		return JSON.parse(e);
	} catch {
		throw Error("Foundry drop data could not be read.");
	}
}
//#endregion
//#region src/module/apps/species-builder/item-drops.ts
async function sE(e, t) {
	let n = oE(e);
	if (n.type !== "Item" || !n.uuid) throw Error(`Drop a Foundry ${t} item here.`);
	let r = iE(await fromUuid(n.uuid), `Drop a Foundry ${t} item here.`);
	if (r.type !== t) throw Error(`Drop a Foundry ${t} item here.`);
	let i = {
		name: t === "career" && dE(r) || r.name,
		type: t,
		uuid: r.uuid
	};
	if (t === "career") {
		let e = fE(r);
		e && (i.careerJournalUuid = e);
	}
	let a = uE(r);
	return a && (i.specification = a), r.img && (i.img = r.img), i;
}
async function cE(e) {
	let t = oE(e);
	if (t.type !== "JournalEntry" && t.type !== "JournalEntryPage" || !t.uuid) throw Error("Drop a Foundry Journal Entry or Journal Entry Page here.");
	let n = await fromUuid(t.uuid);
	if (!hE(n)) throw Error("Drop a Foundry Journal Entry or Journal Entry Page here.");
	return {
		name: n.name,
		uuid: n.uuid
	};
}
async function lE(e) {
	iE(await fromUuid(e), "The linked Foundry Item was not found.").sheet?.render(!0);
}
function uE(e) {
	let t = [
		Y(e.system, ["specification", "value"]),
		Y(e, ["specifier"]),
		Y(e.system, ["specifier"]),
		Y(e.system, ["specifier", "value"])
	];
	for (let e of t) {
		if (typeof e == "string" && e.trim()) return e.trim();
		if (typeof e == "number") return String(e);
	}
	return "";
}
function dE(e) {
	let t = Y(e.system, ["careergroup", "value"]);
	return typeof t == "string" ? t.trim() : "";
}
function fE(e) {
	let t = Y(e.system, ["description", "value"]);
	return typeof t == "string" ? /^@UUID\[([^\]]+)]{[^{}]+}$/.exec(pE(t))?.[1]?.trim() ?? "" : "";
}
function pE(e) {
	let t = e.trim();
	t = t.replaceAll(/<(p|div)>(?:\s|&nbsp;|<br\s*\/?>)*<\/\1>/gi, "").trim();
	let n = /^<(p|div)>([\S\s]*)<\/\1>$/i.exec(t);
	return n?.[2] !== void 0 && (t = n[2].trim()), mE(t.replaceAll(/<br\s*\/?>/gi, "").trim());
}
function mE(e) {
	return e.replaceAll("&nbsp;", " ").replaceAll("&amp;", "&").replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", "\"").replaceAll("&#39;", "'").trim();
}
function hE(e) {
	return typeof e == "object" && !!e && "documentName" in e && (e.documentName === "JournalEntry" || e.documentName === "JournalEntryPage") && "name" in e && typeof e.name == "string" && "uuid" in e && typeof e.uuid == "string";
}
//#endregion
//#region src/module/apps/species-builder/random-talent-sources.ts
var gE = {
	key: "talents",
	label: "Talents - Character Creation"
};
function _E() {
	let e = /* @__PURE__ */ new Map();
	e.set(gE.key, gE);
	for (let t of game.tables?.contents ?? []) {
		let n = t.getFlag("wfrp4e", "key");
		if (typeof n != "string" || !n.trim()) continue;
		let r = vE(n, t);
		e.set(n, {
			key: n,
			label: r
		});
	}
	return [...e.values()].sort(yE);
}
function vE(e, t) {
	let n = game.wfrp4e?.tables?.findTable?.(e);
	return (J(n) && typeof n.name == "string" ? n.name : t.name).trim() || e;
}
function yE(e, t) {
	return e.key === gE.key ? -1 : t.key === gE.key ? 1 : e.label.localeCompare(t.label);
}
//#endregion
//#region src/module/apps/species-builder/world-table/journals.ts
var bE = "generatedSpeciesJournal", xE = "WFRP Customizer Species Journals";
async function SE(e) {
	let t = game.journal?.contents ?? [], n = CE(t), r, i = [];
	for (let a of e.rows) {
		let e = wE(a.journalUuid, a.speciesKey, t) || n.get(a.speciesKey)?.uuid;
		if (!e) {
			r ??= await EE();
			let t = await JournalEntry.create({
				flags: { [$]: { [bE]: { speciesKey: a.speciesKey } } },
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
function CE(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = TE(n);
		if (e) {
			if (t.has(e)) throw Error(`Multiple Species Builder Journals exist for "${e}". Remove the duplicate and retry.`);
			t.set(e, n);
		}
	}
	return t;
}
function wE(e, t, n) {
	let r = e?.trim() ?? "";
	if (!r) return "";
	let i = n.find((e) => e.uuid === r);
	if (!i) return r.startsWith("JournalEntry.") && r.split(".").length === 2 ? "" : r;
	let a = TE(i);
	return a && a !== t ? "" : r;
}
function TE(e) {
	let t = e.getFlag($, bE);
	return J(t) ? X(t, ["speciesKey"]).trim() : "";
}
async function EE() {
	let e = game.folders.contents.find((e) => e.type === "JournalEntry" && e.name === xE);
	if (e) return e;
	let t = await Folder.create({
		name: xE,
		type: "JournalEntry"
	});
	if (!t) throw Error("Foundry did not create the generated Species Journal folder.");
	return t;
}
//#endregion
//#region src/module/apps/species-builder/world-table/persistence.ts
var DE = "species", OE = "tableSettings";
async function kE(e) {
	let t = await SE(e), n = ku(t, $);
	return e.ownership === "managed" ? await NE(t, n) : await ME(t, n);
}
async function AE(e) {
	let t = game.settings.get(yw, OE);
	if (!J(t)) throw Error("WFRP table settings are unavailable; the Species table was not registered.");
	await game.settings.set(yw, OE, {
		...t,
		[DE]: e
	});
}
function jE(e) {
	return e.getFlag($, yu) === !0;
}
async function ME(e, t) {
	if (e.ownership === "external") {
		let t = e.tableId ? game.tables?.get(e.tableId) : void 0;
		if (!t || jE(t)) throw Error("The source Species table changed. Reload before saving a managed copy.");
	}
	if ((game.tables?.contents ?? []).some(jE)) throw Error("A managed Species table already exists. Reload before saving.");
	let n = await RollTable.create(t);
	if (!n) throw Error("Foundry did not create the managed Species table.");
	return n;
}
async function NE(e, t) {
	let n = e.tableId ? game.tables?.get(e.tableId) : void 0;
	if (!n || !jE(n)) throw Error("The managed Species table changed. Reload before saving again.");
	let r = Array.isArray(t.results) ? t.results.filter(J) : [];
	return await n.update({
		displayRoll: t.displayRoll,
		[`flags.${$}.${yu}`]: !0,
		[`flags.${yw}.key`]: DE,
		formula: t.formula,
		name: t.name,
		replacement: t.replacement
	}), await PE(n, e.rows, r), n;
}
async function PE(e, t, n) {
	let r = e.toObject(), i = Array.isArray(r.results) ? r.results.filter(J) : [], a = new Set(i.map((e) => X(e, ["_id"]))), o = /* @__PURE__ */ new Set(), s = [], c = [];
	n.forEach((e, n) => {
		let r = FE(t[n], i, a, o);
		r ? (o.add(r), s.push({
			...e,
			_id: r
		})) : c.push(e);
	});
	let l = [...a].filter((e) => e && !o.has(e));
	s.length > 0 && await e.updateEmbeddedDocuments("TableResult", s), c.length > 0 && await e.createEmbeddedDocuments("TableResult", c), l.length > 0 && await e.deleteEmbeddedDocuments("TableResult", l);
}
function FE(e, t, n, r) {
	if (e?.resultId && n.has(e.resultId) && !r.has(e.resultId)) return e.resultId;
	let i = t.find((t) => X(t, [
		"flags",
		"wfrp4e",
		"species"
	]) === e?.speciesKey && !r.has(X(t, ["_id"])));
	return i ? X(i, ["_id"]) : "";
}
//#endregion
//#region src/module/apps/species-builder/world-table/index.ts
var IE = "species", LE = "tableSettings";
function RE() {
	let e = Jw(), t = new Set(e.definitions.map((e) => e.key)), n = BE().filter((e) => !t.has(e.key)), r = xu(n, e.definitions), i = game.tables?.contents ?? [], a = VE(), o = HE(i, i.filter(jE), a);
	return {
		draft: o ? UE(o, r, a[0] === o.id) : KE(),
		runtimeOptions: n
	};
}
async function zE(e, t) {
	let n = await kE(e);
	if (t) try {
		await AE(n.id);
	} catch (e) {
		return {
			...RE(),
			registrationError: e instanceof Error ? e.message : "The Species table could not be registered."
		};
	}
	return RE();
}
function BE() {
	let e = game.wfrp4e?.config?.species;
	return J(e) ? Object.entries(e).flatMap(([e, t]) => {
		let n = typeof t == "string" ? t.trim() : "";
		return e.trim() && n ? [{
			key: e.trim(),
			label: n
		}] : [];
	}) : [];
}
function VE() {
	let e = game.settings.get(yw, LE), t = J(e) ? e[IE] : void 0;
	return typeof t == "string" ? t.split(",").map((e) => e.trim()).filter(Boolean) : [];
}
function HE(e, t, n) {
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
	return e.find((e) => e.getFlag(yw, "key") === IE);
}
function UE(e, t, n) {
	let r = e.toObject(), i = (Array.isArray(r.results) ? r.results : []).flatMap((e) => WE(e, t));
	return i.sort((e, t) => GE(e.source) - GE(t.source)), {
		isRegistered: n,
		name: e.name,
		ownership: jE(e) ? "managed" : "external",
		requiresLinkRepair: i.some((e) => e.requiresLinkRepair),
		rows: i.map(({ row: e }) => e),
		tableId: e.id
	};
}
function WE(e, t) {
	if (!J(e)) return [];
	let n = X(e, ["name"]), r = Eu(X(e, ["description"])), i = X(e, [
		"flags",
		yw,
		"species"
	]), a = r?.label || n, o = Tu(i, a, t), s = X(e, ["_id"]), c = X(e, ["type"]);
	return [{
		requiresLinkRepair: !r || r.label !== n.trim() || c !== "text",
		row: {
			...r ? { journalUuid: r.uuid } : {},
			name: a,
			...s ? { resultId: s } : {},
			speciesKey: o,
			weight: Du(e)
		},
		source: e
	}];
}
function GE(e) {
	let t = Y(e, ["range"]), n = Array.isArray(t) ? Number(t[0]) : 0;
	return Number.isInteger(n) ? n : 0;
}
function KE() {
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
function qE(e, t) {
	return t.uuid ? t.uuid : t._id && e.getUuid ? e.getUuid(t._id) : "";
}
function JE(e) {
	return e.documentName === "Item" || X(e, ["metadata", "type"]) === "Item" || X(e, ["metadata", "documentName"]) === "Item";
}
function YE(e) {
	return e.documentName === "Actor" || X(e, ["metadata", "type"]) === "Actor" || X(e, ["metadata", "documentName"]) === "Actor";
}
function XE(e) {
	return Array.isArray(e) ? e.filter(QE) : J(e) && Array.isArray(e.contents) ? e.contents.filter(QE) : $E(e) ? [...e].flatMap((e) => {
		let t = Array.isArray(e) ? e[1] : e;
		return QE(t) ? [t] : [];
	}) : [];
}
function ZE() {
	return new Promise((e) => {
		globalThis.setTimeout(e, 0);
	});
}
function QE(e) {
	return J(e);
}
function $E(e) {
	return J(e) && Symbol.iterator in e;
}
//#endregion
//#region src/module/apps/species-builder/validation/table-results.ts
function eD(e, t) {
	let n = nD(e);
	if (n.reason) return uD(n.reason);
	let r = n.texts.filter((e) => !t.has(sD(e)));
	return r.length > 0 ? uD(`these result labels do not match Talent Items exactly: ${cD(r).join(", ")}`) : lD();
}
function tD(e, t) {
	let n = nD(e);
	if (n.reason) return uD(n.reason);
	let r = n.texts.filter((e) => !t.has(e));
	return r.length > 0 ? uD(`these result labels do not match tier-1 Career groups exactly: ${cD(r).join(", ")}`) : lD();
}
function nD(e) {
	if (!J(e)) return {
		reason: "the table could not be found",
		texts: []
	};
	if (Array.isArray(e.columns)) return {
		reason: "the table key resolves to multiple columns instead of one RollTable",
		texts: []
	};
	let t = oD(e.results);
	if (t.length === 0) return {
		reason: "the table has no results",
		texts: []
	};
	let n = t.map(iD);
	return n.filter((e) => !e).length > 0 ? {
		reason: "one or more results have no usable WFRP result text",
		texts: n
	} : { texts: n };
}
function rD(e) {
	return /\{(.+?)\}/u.exec(e)?.[1] ?? e;
}
function iD(e) {
	if (!J(e)) return "";
	let t = e.type === "document" ? aD(e) : e.description;
	return typeof t == "string" ? rD(t) : "";
}
function aD(e) {
	let t = e.documentUuid, n = e.name;
	return typeof t == "string" && typeof n == "string" ? `@UUID[${t}]{${n}}` : "";
}
function oD(e) {
	return Array.isArray(e) ? e : J(e) && Symbol.iterator in e ? [...e] : [];
}
function sD(e) {
	return e.split("(")[0]?.trim() ?? "";
}
function cD(e) {
	return [...new Set(e.map((e) => e || "(blank result)"))];
}
function lD() {
	return { readyForCharacterCreation: !0 };
}
function uD(e) {
	return {
		readyForCharacterCreation: !1,
		reason: e
	};
}
//#endregion
//#region src/module/apps/species-builder/validation/career-table.ts
function dD(e, t, n, r) {
	let i = fD(e, t, typeof n == "string" ? n.trim() : "");
	for (let e of i) {
		let t = mD(e);
		if (!t) continue;
		let n = hD(t, e);
		if (n) return pD(e, n, r);
	}
	return pD(i.at(-1) ?? e, void 0, r);
}
function fD(e, t, n) {
	let r = t ? [
		n,
		`${e}-${t}`,
		e
	] : [e];
	return e === "human" && r.push("human-reiklander"), [...new Set(r.filter(Boolean))];
}
function pD(e, t, n) {
	let r = tD(t, n);
	return r.readyForCharacterCreation ? r : {
		readyForCharacterCreation: !1,
		reason: `career table column ${e} is not ready: ${r.reason ?? "invalid table"}`
	};
}
function mD(e) {
	return game.wfrp4e?.tables?.findTable?.("career", e);
}
function hD(e, t) {
	return !J(e) || !Array.isArray(e.columns) ? e : e.columns.find((e) => gD(e) === t);
}
function gD(e) {
	if (!J(e) || typeof e.getFlag != "function") return "";
	let t = e.getFlag.call(e, "wfrp4e", "column");
	return typeof t == "string" ? t : "";
}
//#endregion
//#region src/module/apps/species-builder/validation/runtime-grants.ts
function _D(e, t, n) {
	let r = yD(e.randomTalents, t.randomTalentSources, n);
	bD(e.skills, "skills", t.skills, n), xD(e.talents, r, t, n), bD(e.traits, "traits", t.traits, n), CD(e.talentReplacement, t.talents, n);
}
function vD(e, t, n) {
	if (e) {
		if (!J(e)) {
			n.push("Career replacements are not an object");
			return;
		}
		for (let [r, i] of Object.entries(e)) {
			if (t.has(r) || n.push(`Career replacement source ${kD(r)} does not match exactly`), !Array.isArray(i) || i.length === 0) {
				n.push(`Career replacements for ${kD(r)} must be a non-empty array`);
				continue;
			}
			for (let e of i) (typeof e != "string" || !t.has(e.trim())) && n.push(`Career replacement ${kD(e)} does not match exactly`);
		}
	}
}
function yD(e, t, n) {
	let r = e || { talents: 0 };
	if (!J(r)) return n.push("random Talents configuration is not an object"), /* @__PURE__ */ new Set();
	let i = new Set(Object.keys(r));
	for (let [e, i] of Object.entries(r)) {
		ED(i) || n.push(`random Talent count for ${kD(e)} is not a non-negative whole number`);
		let r = t.get(e);
		r ? r.readyForCharacterCreation || n.push(`random Talent table ${kD(e)} is not ready: ${r.reason ?? "invalid results"}`) : n.push(`random Talent table is missing for ${kD(e)}`);
	}
	return i;
}
function bD(e, t, n, r) {
	if (!Array.isArray(e)) {
		r.push(`${t} must be an array of names`);
		return;
	}
	let i = e.filter((e) => typeof e != "string" || !n.has(DD(e)));
	i.length > 0 && r.push(`${t} do not match available Items exactly: ${OD(i)}`);
}
function xD(e, t, n, r) {
	if (!Array.isArray(e)) {
		r.push("talents must be an array of names or numeric random Talent counts");
		return;
	}
	for (let i of e) {
		if (TD(i)) {
			ED(i) || r.push(`numeric Talent grant ${kD(i)} is not a non-negative whole number`), SD("talents", t, n, r);
			continue;
		}
		if (typeof i != "string") {
			r.push(`Talent grant ${kD(i)} is not a name or numeric count`);
			continue;
		}
		let e = i.includes(",") ? i.split(",") : [i];
		for (let a of e) {
			let e = a.trim(), o = i.includes(",") ? wD(e) : void 0;
			o ? SD(o.key, t, n, r) : n.talents.has(DD(e)) || r.push(`Talent ${kD(e)} does not match an available Item exactly`);
		}
	}
}
function SD(e, t, n, r) {
	if (!t.has(e)) {
		r.push(`Talent grant uses random table ${kD(e)} without configuring that key`);
		return;
	}
	let i = n.randomTalentSources.get(e);
	i ? i.readyForCharacterCreation || r.push(`Talent grant uses unready random table ${kD(e)}`) : r.push(`Talent grant uses missing random table ${kD(e)}`);
}
function CD(e, t, n) {
	if (e) {
		if (!J(e)) {
			n.push("Talent replacements are not an object");
			return;
		}
		for (let [r, i] of Object.entries(e)) t.has(DD(r)) || n.push(`Talent replacement source ${kD(r)} does not match exactly`), (typeof i != "string" || !t.has(DD(i))) && n.push(`Talent replacement ${kD(i)} does not match exactly`);
	}
}
function wD(e) {
	let t = /random\[(\d)\](?:\[?([a-zA-Z-_]+)\])?/iu.exec(e);
	return t ? { key: t[2] ?? "talents" } : void 0;
}
function TD(e) {
	return typeof e == "number" && Number.isFinite(e) || typeof e == "string" && e.trim() !== "" && Number.isFinite(Number(e));
}
function ED(e) {
	return TD(e) && Number.isInteger(Number(e)) && Number(e) >= 0;
}
function DD(e) {
	return e.split("(")[0]?.trim() ?? "";
}
function OD(e) {
	return [...new Set(e.map(kD))].join(", ");
}
function kD(e) {
	return `“${typeof e == "string" ? e.trim() || "(blank)" : String(e)}”`;
}
//#endregion
//#region src/module/apps/species-builder/validation/runtime-species.ts
var AD = Object.values(q), jD = [
	["speciesMovement", "movement"],
	["speciesFate", "fate"],
	["speciesRes", "resilience"],
	["speciesExtra", "extra points"]
];
function MD(e, t, n = []) {
	let r = J(e.species) ? e.species : {}, i = new Set(n.map((e) => e.trim()).filter(Boolean));
	return Object.entries(r).filter(([e]) => !i.has(e)).map(([n, r]) => {
		let i = typeof r == "string" && r.trim() ? r.trim() : n, a = ND(e, n, r, t);
		return a.length > 0 ? {
			key: n,
			name: i,
			readyForCharacterCreation: !1,
			reason: PD(a)
		} : {
			key: n,
			name: i,
			readyForCharacterCreation: !0
		};
	}).sort((e, t) => e.name.localeCompare(t.name));
}
function ND(e, t, n, r) {
	let i = [];
	t.trim() || i.push("species key is missing"), (typeof n != "string" || !n.trim()) && i.push("display name is missing");
	let a = BD(e, t);
	_D(a, r, i);
	let o = GD(e, "speciesCharacteristics", t);
	return ID(o, i), LD(HD(e, t), i), RD(e, t, i), vD(GD(e, "speciesCareerReplacements", t), r.careerGroups, i), zD(r.validateCareerTable(t, void 0, void 0), i), FD(e, t, o, a, r, i), i;
}
function PD(e) {
	let t = e[0] ?? "runtime configuration is incomplete", n = e.length - 1;
	return n > 0 ? `${t} (+${n} more)` : t;
}
function FD(e, t, n, r, i, a) {
	let o = e.subspecies, s = J(o) ? o[t] : void 0;
	if (s) {
		if (!J(s)) {
			a.push("subspecies configuration is not an object");
			return;
		}
		for (let [o, c] of Object.entries(s)) {
			let s = [];
			if (!J(c)) {
				a.push(`subspecies ${o} is not an object`);
				continue;
			}
			(typeof c.name != "string" || !c.name.trim()) && s.push("display name is missing"), ID(c.characteristics || n, s), LD(UD(e, t, c), s), _D(VD(c, r), i, s), vD(GD(e, "speciesCareerReplacements", `${t}-${o}`), i.careerGroups, s), zD(i.validateCareerTable(t, o, c.careerTable), s), a.push(...s.map((e) => `subspecies ${o}: ${e}`));
		}
	}
}
function ID(e, t) {
	if (!J(e)) {
		t.push("characteristic formulas are missing");
		return;
	}
	let n = AD.filter((t) => {
		let n = e[t];
		return typeof n != "string" || !kf(n);
	});
	n.length > 0 && t.push(`characteristic formulas are invalid or missing for ${n.join(", ")}`);
}
function LD(e, t) {
	for (let [n, r] of Object.entries(e)) (!Number.isInteger(r) || Number(r) < 0) && t.push(`${n} is missing or not a non-negative whole number`);
}
function RD(e, t, n) {
	let r = GD(e, "speciesAge", t);
	(typeof r != "string" || !Of(r, !1)) && n.push("age formula is missing or invalid");
	let i = GD(e, "speciesHeight", t);
	(!J(i) || typeof i.die != "string" || !Of(i.die, !0) || !KD(i.feet) || !KD(i.inches)) && n.push("height needs a valid die formula and non-negative whole feet and inches");
}
function zD(e, t) {
	e.readyForCharacterCreation || t.push(e.reason ?? "Career table is not ready");
}
function BD(e, t) {
	return {
		randomTalents: GD(e, "speciesRandomTalents", t),
		skills: GD(e, "speciesSkills", t),
		talentReplacement: GD(e, "speciesTalentReplacement", t) || {},
		talents: GD(e, "speciesTalents", t),
		traits: GD(e, "speciesTraits", t) || []
	};
}
function VD(e, t) {
	return {
		randomTalents: e.randomTalents || t.randomTalents,
		skills: e.skills || t.skills,
		talentReplacement: e.talentReplacement || t.talentReplacement,
		talents: e.talents || t.talents,
		traits: e.speciesTraits || t.traits
	};
}
function HD(e, t) {
	return Object.fromEntries(jD.map(([n, r]) => [r, GD(e, n, t)]));
}
function UD(e, t, n) {
	return Object.fromEntries(jD.map(([r, i]) => [i, n[WD(r)] ?? GD(e, r, t)]));
}
function WD(e) {
	return e === "speciesRes" ? "resilience" : e.replace("species", "").toLowerCase();
}
function GD(e, t, n) {
	let r = e[t];
	return J(r) ? r[n] : void 0;
}
function KD(e) {
	return typeof e == "number" && Number.isInteger(e) && e >= 0;
}
//#endregion
//#region src/module/apps/species-builder/validation/catalog.ts
var qD = [
	"skill",
	"talent",
	"trait"
], JD = [
	"name",
	"type",
	"system.careergroup.value",
	"system.level.value"
];
async function YD(e = []) {
	let t = J(game.wfrp4e?.config) ? game.wfrp4e.config : {}, n = {
		careerGroups: /* @__PURE__ */ new Map(),
		itemNames: {
			skill: /* @__PURE__ */ new Map(),
			talent: /* @__PURE__ */ new Map(),
			trait: /* @__PURE__ */ new Map()
		}
	};
	for (let e of game.items?.contents ?? []) XD(n, e);
	for (let e of ZD()) {
		if (!e.getIndex) continue;
		let t = await e.getIndex({ fields: JD });
		for (let e of XE(t)) XD(n, e);
	}
	let r = QD(t, n.itemNames.talent), i = new Set(n.careerGroups.keys());
	return {
		careerGroupNames: oO(n.careerGroups),
		itemBaseNames: {
			skill: oO(n.itemNames.skill),
			talent: oO(n.itemNames.talent),
			trait: oO(n.itemNames.trait)
		},
		randomTalentSources: r,
		runtimeSpecies: MD(t, {
			careerGroups: i,
			randomTalentSources: new Map(r.map((e) => [e.key, e])),
			skills: new Set(n.itemNames.skill.keys()),
			talents: new Set(n.itemNames.talent.keys()),
			traits: new Set(n.itemNames.trait.keys()),
			validateCareerTable: (e, t, n) => dD(e, t, n, i)
		}, e)
	};
}
function XD(e, t) {
	if (!J(t) || typeof t.type != "string" || typeof t.name != "string") return;
	if (nO(t.type)) {
		iO(e.itemNames[t.type], rO(t.name));
		return;
	}
	let n = Number(Y(t, [
		"system",
		"level",
		"value"
	]));
	if (t.type !== "career" || n !== 1) return;
	let r = Y(t, [
		"system",
		"careergroup",
		"value"
	]);
	typeof r == "string" && iO(e.careerGroups, r);
}
function ZD() {
	let e = game.wfrp4e?.tags?.getPacksWithTag?.([...qD, "career"]);
	return e ? [...new Set(e)].filter(JE) : (game.packs ?? []).filter(JE);
}
function QD(e, t) {
	let n = [];
	for (let r of $D(e)) {
		let e = game.wfrp4e?.tables?.findTable?.(r);
		if (!e) continue;
		let i = eD(e, new Set(t.keys()));
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
function $D(e) {
	let t = new Set(["talents"]);
	for (let e of game.tables?.contents ?? []) aO(t, e.getFlag("wfrp4e", "key"));
	let n = game.settings.get("wfrp4e", "tableSettings");
	J(n) && Object.keys(n).forEach((e) => t.add(e)), eO(e.speciesRandomTalents, t);
	let r = e.subspecies;
	if (J(r)) {
		for (let e of Object.values(r)) if (J(e)) for (let n of Object.values(e)) J(n) && tO(n.randomTalents, t);
	}
	return [...t];
}
function eO(e, t) {
	J(e) && Object.values(e).forEach((e) => tO(e, t));
}
function tO(e, t) {
	J(e) && Object.keys(e).forEach((e) => t.add(e));
}
function nO(e) {
	return qD.some((t) => t === e);
}
function rO(e) {
	return e.split("(", 1)[0]?.trim() ?? "";
}
function iO(e, t) {
	let n = t.trim();
	n && !e.has(n) && e.set(n, n);
}
function aO(e, t) {
	typeof t == "string" && t.trim() && e.add(t.trim());
}
function oO(e) {
	return [...e.values()].sort((e, t) => e.localeCompare(t));
}
//#endregion
//#region src/module/apps/species-builder/wound-formula-traits.ts
var sO = "WFRP Customizer Generated Species Traits";
async function cO(t = Jw()) {
	let n = ol(t, await qT()), r = await lO();
	await uO(r);
	for (let e of n) {
		let t = ll({
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
async function lO() {
	let e = game.folders.contents.find((e) => e.type === "Item" && e.name === sO);
	if (e) return e;
	let t = await Folder.create({
		name: sO,
		type: "Item"
	});
	if (!t) throw Error("Foundry did not create the generated Species Trait folder.");
	return t;
}
async function uO(e) {
	let t = (game.items?.contents ?? []).filter((t) => t.folder?.id === e.id || dO(t));
	for (let e of t) await e.delete();
}
function dO(e) {
	return J(Y(e.toObject(), [
		"flags",
		$,
		al
	]));
}
//#endregion
//#region src/module/apps/species-builder/foundry-bridge.ts
async function fO(e, t) {
	let n = await Yw(e);
	if (!t) return { settings: n };
	let r = (await Promise.allSettled([XT(n), cO(n)])).flatMap((e) => e.status === "rejected" ? [mO(e.reason)] : []);
	return r.length > 0 ? {
		settings: n,
		syncError: r.join(" ")
	} : { settings: n };
}
var pO = {
	loadSettings: async () => Jw(),
	loadRandomTalentSources: async () => _E(),
	loadRuntimeSpecies: qT,
	loadValidationCatalog: YD,
	loadSpeciesTable: async () => RE(),
	openItemSheet: lE,
	resolveItemDrop: sE,
	resolveJournalDrop: cE,
	saveSettings: fO,
	saveSpeciesTable: zE
};
function mO(e) {
	return e instanceof Error ? e.message : "Generated document synchronization failed.";
}
//#endregion
//#region src/module/apps/species-builder/reload-confirmation.ts
function hO() {
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
var gO = class extends Mw {
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
		return vw;
	}
	getVueProps() {
		return {
			bridge: pO,
			onSettingsSaved: () => {
				this.#e = !0;
			}
		};
	}
	async _preClose(e) {
		let t = this.#e;
		this.#e = !1, t && await hO() && window.location.reload(), await super._preClose(e);
	}
};
//#endregion
//#region src/functions/npc-builder/create-default-trait-config.ts
function _O() {
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
function vO(e, t) {
	return `${e}:${wO(t)}`;
}
function yO(e) {
	let t = e.level ?? 1;
	return Number.isFinite(t) ? Math.max(1, Math.floor(t)) * 5 : 5;
}
function bO(e) {
	return e.name;
}
function xO(e, t) {
	return e === "characteristic" ? t.allowBaseActorCharacteristics : e === "skill" ? t.allowBaseActorSkills : t.allowBaseActorTalents;
}
function SO(e, t) {
	return {
		..._O(),
		...e,
		...t
	};
}
function CO(e, t) {
	return wO(e) === wO(t);
}
function wO(e) {
	return e.trim().toLocaleLowerCase();
}
function TO(e) {
	return Number.isFinite(e) ? Math.max(1, Math.floor(e)) : 1;
}
function EO(e) {
	let t = 0;
	for (let n of e) t += n.count;
	return t;
}
function DO(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = wO(r);
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
//#endregion
//#region src/functions/npc-builder/skill-specialization.ts
function OO(e, t, n) {
	return `${e}:${NO(t)}:${n}`;
}
function kO(e, t) {
	let n = e.trim(), r = t.trim();
	return r ? `${n} (${r})` : n;
}
function AO(e) {
	let t = /^(?<base>.+?)\s*\((?<specialization>[^)]+)\)\s*$/.exec(e.trim());
	if (!t?.groups) return null;
	let n = t.groups.base?.trim() ?? "", r = t.groups.specialization?.trim() ?? "";
	return !n || !r || jO(e) ? null : {
		baseName: n,
		originalName: e,
		specialization: r
	};
}
function jO(e) {
	let t = /^(?<base>.+?)\s*\((?<specialization>[^)]+)\)\s*$/.exec(e.trim());
	if (!t?.groups) return null;
	let n = t.groups.base?.trim() ?? "", r = t.groups.specialization?.trim() ?? "", i = FO(r);
	return !n || !r || !PO(r, i) ? null : {
		baseName: n,
		options: i,
		originalName: e,
		specialization: r
	};
}
function MO(e, t) {
	let n = /* @__PURE__ */ new Map();
	return t.map((t) => {
		let r = NO(t), i = n.get(r) ?? 0;
		return n.set(r, i + 1), {
			occurrence: i,
			originalName: t,
			resolutionKey: OO(e, t, i)
		};
	});
}
function NO(e) {
	return e.trim().replaceAll(/\s+/g, " ").toLocaleLowerCase();
}
function PO(e, t) {
	return e.trim().toLocaleLowerCase() === "any" || t.length > 1;
}
function FO(e) {
	return e.split(/\s+or\s+/i).map((e) => e.trim()).filter(Boolean);
}
//#endregion
//#region src/functions/npc-builder/advancements/source-counts.ts
function IO(e, t) {
	return t <= 0 ? [] : [{
		count: t,
		kind: "career",
		label: `${e} extra time`
	}];
}
function LO(e, t) {
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
function RO(e, t, n, r) {
	let i = BO(zO(e, r), n);
	return i.value === null ? t : Math.min(t, Math.max(0, i.value - e.baseAdvances));
}
function zO(e, t) {
	let n = t[wO(e.name)];
	return {
		maximumFormula: e.talentMaximumFormula ?? n?.maximumFormula ?? "",
		maximumKey: e.talentMaximumKey ?? n?.maximumKey ?? ""
	};
}
function BO(e, t) {
	let n = e.maximumKey.trim().toLocaleLowerCase();
	if (!n) return {
		label: "Unknown",
		value: null
	};
	if (n === "none") return {
		label: "-",
		value: null
	};
	if (n === "custom") return VO(e.maximumFormula, t);
	let r = Number(n);
	if (Number.isFinite(r)) {
		let e = Math.max(0, Math.floor(r));
		return {
			label: `${e}`,
			value: e
		};
	}
	if (Ac(n)) {
		let e = t[n] ?? 0, r = Math.max(0, Math.floor(e / 10));
		return {
			label: `${Oc[n]} Bonus (${r})`,
			value: r
		};
	}
	return {
		label: e.maximumKey || "Unknown",
		value: null
	};
}
function VO(e, t) {
	let n = e.trim(), r = Number(n);
	if (Number.isFinite(r)) {
		let e = Math.max(0, Math.floor(r));
		return {
			label: `${e}`,
			value: e
		};
	}
	let i = /@characteristics\.([a-z]+)\.bonus/i.exec(n)?.[1]?.toLocaleLowerCase();
	if (i && Ac(i)) {
		let e = t[i] ?? 0, n = Math.max(0, Math.floor(e / 10));
		return {
			label: `${Oc[i]} Bonus (${n})`,
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
function HO(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e.careers) {
		let i = DO(GO(r, t, e.skillGrantResolutions)), a = yO(r) / 5, o = Math.max(0, TO(r.quantity) - 1) * 5;
		for (let e of i) {
			let i = vO(t, e), s = n.get(i);
			if (s) {
				a > s.highestLevel && (s.highestLevel = a, s.highestLevelSource = bO(r)), o > 0 && s.extraSources.push({
					count: o,
					kind: "career",
					label: `${r.name} extra time`
				});
				continue;
			}
			n.set(i, {
				extraSources: IO(r.name, o),
				highestLevel: a,
				highestLevelSource: bO(r),
				name: e
			});
		}
	}
	for (let r of n.values()) WO(e, {
		careerValue: r.highestLevel * 5 + EO(r.extraSources),
		kind: t,
		name: r.name,
		sources: [{
			count: r.highestLevel * 5,
			kind: "career",
			label: r.highestLevelSource
		}, ...r.extraSources]
	});
}
function UO(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.careers) {
		let r = DO(GO(n, "talent", e.skillGrantResolutions)), i = Math.max(0, TO(n.quantity) - 1);
		for (let e of r) {
			let r = vO("talent", e), a = t.get(r);
			if (a) {
				i > 0 && a.extraSources.push({
					count: i,
					kind: "career",
					label: `${n.name} extra time`
				});
				continue;
			}
			t.set(r, {
				extraSources: IO(n.name, i),
				firstSource: n.name,
				name: e
			});
		}
	}
	for (let n of t.values()) WO(e, {
		careerValue: 1 + EO(n.extraSources),
		kind: "talent",
		name: n.name,
		sources: [{
			count: 1,
			kind: "career",
			label: n.firstSource
		}, ...n.extraSources]
	}, e.characteristicTotals);
}
function WO(e, t, n = {}) {
	let r = vO(t.kind, t.name), i = e.entries.get(r);
	if (i) {
		let r = t.kind === "talent" && i.includedFromBase ? t.sources.slice(1) : t.sources, a = t.kind === "talent" ? RO(i, EO(r), n, e.talentMaximums) : t.careerValue;
		i.careerValue = a, i.includedFromCareer = !0, i.sources = [...i.sources.filter((e) => e.kind === "base"), ...LO(r, a)];
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
	t.kind === "talent" && (a.careerValue = RO(a, t.careerValue, n, e.talentMaximums), a.current = a.careerValue, a.sources = LO(t.sources, a.careerValue)), e.entries.set(r, { ...a });
}
function GO(e, t, n) {
	return t === "characteristic" ? e.grants.characteristics : t === "skill" ? MO(e.uuid, e.grants.skills).map((e) => n[e.resolutionKey] || e.originalName) : e.grants.talents;
}
//#endregion
//#region src/functions/npc-builder/advancements/entry-context.ts
function KO(e, t) {
	let n = {};
	for (let r of e.values()) {
		if (r.kind !== "characteristic") continue;
		let e = kc[wO(r.name)];
		if (!e) continue;
		let i = t[vO(r.kind, r.name)] ?? 0, a = Math.max(r.minimumCurrent, Math.floor(r.careerValue + i));
		n[e] = Math.max(0, r.baseValue + a);
	}
	return n;
}
function qO(e, t, n) {
	return e.kind === "skill" ? JO(e, t, n) : e.kind === "talent" ? YO(e, t, n) : e;
}
function JO(e, t, n) {
	let r = XO(e.name, n.skillCharacteristics) ?? ZO(e.name, n.baseActorDraftData);
	if (!r) return {
		...e,
		minimumCurrent: -e.baseValue,
		minimumTotal: 0
	};
	let i = t[r.characteristicKey] ?? 0, a = Math.max(0, e.baseAdvances), o = Math.floor(e.baseModifier ?? 0), s = [{
		count: i,
		kind: "characteristic",
		label: r.characteristicName
	}];
	return a > 0 && s.push({
		count: a,
		kind: "base",
		label: "Base skill advances"
	}), o !== 0 && s.push({
		count: o,
		kind: "base",
		label: "Stored modifier"
	}), {
		...e,
		baseValue: i + a + o,
		characteristicKey: r.characteristicKey,
		characteristicName: r.characteristicName,
		characteristicValue: i,
		minimumCurrent: -a,
		minimumTotal: i,
		sources: [...s, ...e.sources]
	};
}
function YO(e, t, n) {
	let r = zO(e, n.talentMaximums), i = BO(r, t);
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
function XO(e, t) {
	return t[wO(e)] ?? null;
}
function ZO(e, t) {
	let n = t.advancements.find((t) => t.kind === "skill" && CO(t.name, e));
	return n?.characteristicKey ? {
		characteristicKey: n.characteristicKey,
		characteristicName: n.characteristicName ?? Oc[n.characteristicKey],
		skillName: e
	} : null;
}
//#endregion
//#region src/functions/npc-builder/advancements/derive-advancements.ts
function QO(e) {
	let t = rk(e.baseActorDraftData), n = {
		careers: e.careers,
		entries: t,
		skillGrantResolutions: e.skillGrantResolutions,
		talentMaximums: e.talentMaximums
	};
	HO(n, "characteristic"), HO(n, "skill");
	let r = KO(t, e.manualAdvancementDeltas);
	return UO({
		...n,
		characteristicTotals: r
	}), [...t.values()].filter((t) => t.includedFromCareer || xO(t.kind, e.settings)).map((t) => {
		let n = qO(t, r, e), i = vO(t.kind, t.name), a = e.manualAdvancementDeltas[i] ?? 0, o = n.careerValue + a;
		return {
			...n,
			current: Math.max(n.minimumCurrent, Math.floor(o))
		};
	}).sort(ik);
}
function $O(e, t) {
	let n = Number.isFinite(t) ? t : 0;
	return Math.max(e.minimumCurrent, Math.floor(n)) - e.careerValue;
}
function ek(e, t) {
	let n = Number.isFinite(t) ? t : 0;
	return $O(e, Math.max(e.minimumTotal, Math.floor(n)) - e.baseValue);
}
function tk(e, t) {
	return {
		...e,
		...Object.fromEntries(t.map((e) => [wO(e.skillName), e]))
	};
}
function nk(e, t) {
	return {
		...e,
		...Object.fromEntries(t.map((e) => [wO(e.talentName), e]))
	};
}
function rk(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.advancements) {
		let e = vO(n.kind, n.name), r = {
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
		n.baseModifier !== void 0 && (r.baseModifier = n.baseModifier), n.characteristicKey && (r.characteristicKey = n.characteristicKey, r.characteristicName = n.characteristicName ?? Oc[n.characteristicKey]), n.kind === "talent" && n.baseAdvances > 0 && r.sources.push({
			count: n.baseAdvances,
			kind: "base",
			label: "Base"
		}), n.talentMaximumFormula && (r.talentMaximumFormula = n.talentMaximumFormula), n.talentMaximumKey && (r.talentMaximumKey = n.talentMaximumKey), t.set(e, r);
	}
	return t;
}
function ik(e, t) {
	return e.kind === t.kind ? e.name.localeCompare(t.name) : e.kind.localeCompare(t.kind);
}
//#endregion
//#region src/functions/npc-builder/advancements/advancement-actions.ts
function ak(e) {
	return e.kind === "talent" ? 1 : 5;
}
function ok(e) {
	return Math.max(e.minimumTotal, e.baseValue + e.current);
}
function sk(e, t) {
	return ok(e) + t * ak(e);
}
function ck(e) {
	return ok(e);
}
function lk(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" && ck(e) < t;
}
function uk(e) {
	return e.filter((e) => e.kind === "talent" && lk(e)).map((e) => ({
		kind: e.kind,
		name: e.name,
		total: e.talentMaximumValue
	}));
}
function dk(e, t) {
	let n = new Map(e.map((e) => [pk(e), e])), r = [];
	for (let e of t) {
		let t = n.get(pk(e));
		!t || t.current === e.current || r.push({
			current: e.current,
			kind: t.kind,
			name: t.name
		});
	}
	return r;
}
function fk(e, t) {
	return e.find((e) => e.kind === t.kind && e.name === t.name) ?? null;
}
function pk(e) {
	return `${e.kind}:${e.name}`;
}
//#endregion
//#region src/functions/npc-builder/xp-cost.ts
var mk = {
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
function hk(e) {
	let t = {
		characteristics: {},
		skills: [],
		talents: []
	}, n = {
		characteristics: {},
		skills: [],
		talents: []
	};
	for (let r of e) {
		let e = Tk(r), i = e + r.current;
		if (r.kind === "characteristic") {
			let a = kc[wO(r.name)];
			a && (t.characteristics[a] = e, n.characteristics[a] = i);
		} else r.kind === "skill" ? (t.skills.push({
			name: r.name,
			value: e
		}), n.skills.push({
			name: r.name,
			value: i
		})) : (t.talents.push({
			name: r.name,
			value: e
		}), n.talents.push({
			name: r.name,
			value: i
		}));
	}
	return gk(n, t);
}
function gk(e, t) {
	let n = bk(e, t), r = xk(e.skills, t.skills, mk.skill), i = Sk(e.talents, t.talents);
	return {
		characteristics: n,
		skills: r,
		talents: i,
		total: n + r + i
	};
}
function _k(e) {
	let t = Math.max(0, Math.floor(e.current));
	return e.kind === "talent" ? yk(t) : vk(t, e.kind === "characteristic" ? mk.characteristic : mk.skill);
}
function vk(e, t) {
	let n = Math.max(0, Math.floor(e)), r = 0;
	for (let e = 0; e < n; e += 1) {
		let n = Math.min(Math.floor(e / 5), t.length - 1);
		r += t[n] ?? 0;
	}
	return r;
}
function yk(e, t = 0) {
	let n = Math.max(0, Math.floor(e)), r = Math.max(0, Math.floor(t)), i = 0;
	for (let e = 0; e < n; e += 1) i += (r + e + 1) * 100;
	return i;
}
function bk(e, t) {
	let n = 0;
	for (let r of Object.keys(Oc)) {
		let i = r, a = wk(e.characteristics[i] ?? 0, t.characteristics[i] ?? 0);
		n += vk(a, mk.characteristic);
	}
	return n;
}
function xk(e, t, n) {
	let r = Ck(e), i = Ck(t), a = 0;
	for (let [e, t] of r) {
		let r = wk(t, i.get(e) ?? 0);
		a += vk(r, n);
	}
	return a;
}
function Sk(e, t) {
	let n = Ck(e), r = Ck(t), i = 0;
	for (let [e, t] of n) {
		let n = wk(t, r.get(e) ?? 0);
		i += yk(n);
	}
	return i;
}
function Ck(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = wO(n.name), r = Math.floor(n.value);
		e && t.set(e, (t.get(e) ?? 0) + r);
	}
	return t;
}
function wk(e, t) {
	return Math.max(0, Math.floor(e) - Math.floor(t));
}
function Tk(e) {
	return e.kind === "characteristic" ? Math.floor(e.baseValue) : e.kind === "skill" ? Math.floor(e.baseAdvances + (e.baseModifier ?? 0)) : Math.floor(e.baseAdvances);
}
//#endregion
//#region src/state/npc-builder/advancements/index.ts
function Ek(e) {
	let { baseActorDraftData: t, careers: n, manualAdvancementDeltas: r, settings: i, skillCharacteristics: a, skillGrantResolutions: o, talentMaximums: s } = e, c = W(() => QO({
		baseActorDraftData: t.value,
		careers: n.value,
		manualAdvancementDeltas: r.value,
		settings: i.value,
		skillCharacteristics: a.value,
		skillGrantResolutions: o.value,
		talentMaximums: s.value
	})), l = W(() => hk(c.value)), u = W(() => uk(c.value).length);
	function d(e, t) {
		v(e, sk(e, t));
	}
	function f() {
		for (let e of uk(c.value)) {
			let t = fk(c.value, e);
			t && v(t, e.total);
		}
	}
	function p(e, t) {
		let n = Math.max(0, Math.floor(Number.isFinite(t) ? t : 0)), r = e.run({ advancements: c.value }, n), i = dk(c.value, r.advancements);
		for (let e of i) {
			let t = fk(c.value, e);
			t && _(t, e.current);
		}
	}
	function m(e) {
		return o.value[e] ?? "";
	}
	function h(e) {
		a.value = tk(a.value, e);
	}
	function g(e) {
		s.value = nk(s.value, e);
	}
	function _(e, t) {
		let n = vO(e.kind, e.name);
		r.value[n] = $O(e, t);
	}
	function v(e, t) {
		let n = vO(e.kind, e.name);
		r.value[n] = ek(e, t);
	}
	function y(e) {
		let t = vO(e.kind, e.name);
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
function Dk(e, t) {
	return e.find((e) => e.uuid === t) ?? null;
}
function Ok(e) {
	return e.at(-1) ?? null;
}
function kk(e) {
	let t = e.finalCareer?.name, n = e.settings.includeSpeciesInName && e.selectedBaseActor?.species ? e.selectedBaseActor.species : "";
	return t && n ? `${n} ${t}` : t || (e.selectedBaseActor ? `${e.selectedBaseActor.name} NPC` : "New NPC");
}
function Ak(e, t) {
	return e.trim() || t;
}
function jk(e) {
	return e.finalCareer?.img || e.selectedBaseActor?.prototypeTokenImg || e.selectedBaseActor?.img || "";
}
function Mk(e, t) {
	return e || t;
}
function Nk(e) {
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
function Pk(e) {
	let { actorName: t, baseActors: n, careers: r, clearBaseDraftData: i, customSpells: a, customTraits: o, customTrappings: s, detectedSpells: c, disabledPortraitSearchTerms: l, ignoredBaseTraitKeys: u, magicLoreResolutions: d, removeSkillGrantResolutionsForCareer: f, selectedBaseActorUuid: p, selectedPortraitPath: m, settings: h, skillGrantResolutions: g, spellSelectionOverrides: _ } = e, v = W(() => Dk(n.value, p.value)), y = W(() => Ok(r.value)), b = W(() => kk({
		finalCareer: y.value,
		selectedBaseActor: v.value,
		settings: h.value
	})), x = W(() => Ak(t.value, b.value)), S = W(() => jk({
		finalCareer: y.value,
		selectedBaseActor: v.value
	})), C = W(() => Mk(m.value, S.value)), ee = W(() => Nk(r.value));
	function w(e) {
		let t = r.value.find((t) => t.uuid === e.uuid);
		if (t) {
			t.quantity = TO(t.quantity + 1);
			return;
		}
		r.value.push({
			...e,
			quantity: 1
		});
	}
	function te(e) {
		return r.value.some((t) => t.uuid === e.uuid) ? !1 : (r.value.push({
			...e,
			quantity: 1
		}), !0);
	}
	function T(e, t) {
		let n = e + t, i = r.value[e];
		!i || n < 0 || n >= r.value.length || (r.value.splice(e, 1), r.value.splice(n, 0, i));
	}
	function ne(e, t) {
		let n = r.value[e];
		!n || e === t || t < 0 || t >= r.value.length || (r.value.splice(e, 1), r.value.splice(t, 0, n));
	}
	function re(e) {
		let [t] = r.value.splice(e, 1);
		t && f(t.uuid);
	}
	function E() {
		t.value = "", r.value = [], o.value = [], s.value = [], a.value = [], c.value = [], l.value = [], u.value = {}, d.value = {}, m.value = "", g.value = {}, _.value = {}, p.value = "", i();
	}
	function ie(e) {
		n.value.some((t) => t.uuid === e.uuid) || n.value.push(e), ae(e.uuid);
	}
	function ae(e) {
		let t = e.trim();
		p.value !== t && (m.value = ""), p.value = t;
	}
	function oe(e) {
		m.value = e;
	}
	function se(e, t) {
		let n = r.value[e];
		n && (n.quantity = TO(t));
	}
	return {
		addCareer: w,
		addCareerIfMissing: te,
		finalActorName: x,
		finalCareer: y,
		finalPortraitPath: C,
		grantTotals: ee,
		moveCareer: T,
		moveCareerToIndex: ne,
		removeCareer: re,
		resetDraft: E,
		selectBaseActor: ie,
		selectBaseActorUuid: ae,
		selectedBaseActor: v,
		selectPortrait: oe,
		setCareerQuantity: se,
		suggestedActorName: b
	};
}
//#endregion
//#region src/state/npc-builder/hydration.ts
function Fk(e) {
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
function Ik() {
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
var Lk = Ik(), Rk = {
	advancements: [],
	optionalTraits: [],
	traits: [],
	trappings: []
}, zk = /\(([^)]+)\)/, Bk = [
	"beasts",
	"death",
	"fire",
	"heavens",
	"metal",
	"life",
	"light",
	"shadow"
], Vk = [
	"daemonology",
	"necromancy",
	"nurgle",
	"slaanesh",
	"tzeentch",
	"undivided"
];
function Hk(e, t) {
	let n = e.trim(), r = n.toLocaleLowerCase();
	return r === "petty magic" ? Yk({
		kind: "petty-magic",
		rawLore: "Petty Magic",
		source: t,
		sourceName: n
	}) : r.startsWith("arcane magic") ? Yk({
		kind: "arcane-magic",
		rawLore: Xk(n),
		source: t,
		sourceName: n
	}) : r.startsWith("spellcaster") ? Yk({
		kind: "spellcaster",
		rawLore: Xk(n),
		source: t,
		sourceName: n
	}) : null;
}
function Uk(e) {
	return e.trim().replace(/^any\s+/i, "").replace(/^arcane\s+lore\s+of\s+/i, "").replace(/^arcane\s+lore$/i, "").replace(/^lore\s+of\s+/i, "").replaceAll(/\s+/g, " ").toLocaleLowerCase();
}
function Wk(e) {
	return `${e.source}:${e.kind}:${e.sourceName}:${e.rawLore}`;
}
function Gk(e, t) {
	return {
		...e,
		isAmbiguous: !1,
		normalizedLore: Uk(t),
		rawLore: t.trim()
	};
}
function Kk(e) {
	let t = Uk(e);
	return t === "petty" ? "petty" : Bk.includes(t) ? "eight-wind" : Vk.includes(t) ? "dark" : "other";
}
function qk(e, t) {
	if (e.kind === "petty-magic") return t.filter((e) => e.category === "petty");
	let n = e.rawLore.trim().toLocaleLowerCase();
	return n.includes("dark") ? t.filter((e) => e.category === "dark") : n.includes("eight winds") ? t.filter((e) => e.category === "eight-wind") : t.filter((e) => e.category !== "petty");
}
function Jk(e) {
	let t = e.trim().toLocaleLowerCase();
	return !t || t === "any" || t.includes("any ");
}
function Yk(e) {
	let t = e.rawLore.trim();
	return {
		isAmbiguous: Jk(t),
		kind: e.kind,
		normalizedLore: Uk(t),
		rawLore: t,
		resolutionKey: Wk({
			kind: e.kind,
			rawLore: t,
			source: e.source,
			sourceName: e.sourceName
		}),
		source: e.source,
		sourceName: e.sourceName
	};
}
function Xk(e) {
	return zk.exec(e)?.[1]?.trim() ?? "";
}
//#endregion
//#region src/functions/npc-builder/spells/derive-magic-grants.ts
function Zk(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.advancements) n.kind !== "talent" || n.baseAdvances + n.current <= 0 || Qk(t, Hk(n.name, "talent"), e);
	for (let n of e.traits) Qk(t, Hk(n.name, "trait"), e);
	return [...t.values()];
}
function Qk(e, t, n) {
	if (!t) return;
	let r = n.loreResolutions[t.resolutionKey];
	e.set(t.resolutionKey, r ? Gk(t, r) : t);
}
//#endregion
//#region src/functions/npc-builder/spells/derive-spells.ts
function $k(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.detectedSpells) t.set(n.key, {
		...n,
		selected: e.selectionOverrides[n.key] ?? e.autoSelectDetectedSpells
	});
	for (let n of e.customSpells) t.set(n.key, {
		...n,
		selected: e.selectionOverrides[n.key] ?? n.selected
	});
	return [...t.values()].sort(iA);
}
function eA(e) {
	return e.filter((e) => e.selected);
}
function tA(e) {
	return e.spells.map((t) => ({
		...t,
		selected: e.selectionOverrides[t.key] ?? e.autoSelectDetectedSpells
	}));
}
function nA(e) {
	let t = e.detectedSpells.find((t) => rA(t, e.spell));
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
function rA(e, t) {
	return e.sourceUuid && e.sourceUuid === t.sourceUuid ? !0 : CO(e.name, t.name);
}
function iA(e, t) {
	return e.loreName === t.loreName ? e.name.localeCompare(t.name) : e.loreName.localeCompare(t.loreName);
}
//#endregion
//#region src/state/npc-builder/spells.ts
function aA(e) {
	let { advancements: t, customSpells: n, detectedSpells: r, magicLoreResolutions: i, settings: a, spellSelectionOverrides: o, traits: s } = e, c = W(() => Zk({
		advancements: t.value,
		loreResolutions: i.value,
		traits: s.value
	})), l = W(() => c.value.length > 0), u = W(() => $k({
		autoSelectDetectedSpells: a.value.autoSelectGrantedSpells,
		customSpells: n.value,
		detectedSpells: r.value,
		selectionOverrides: o.value
	})), d = W(() => eA(u.value));
	function f(e) {
		let t = nA({
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
		r.value = tA({
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
function oA(e) {
	let t = /* @__PURE__ */ new Map();
	if (e.allowBaseActorTraits) for (let n of e.baseActorDraftData.traits) {
		let r = uA(n);
		e.ignoredBaseTraitKeys[r] || t.set(r, pA(n, r, !1));
	}
	for (let n of e.customTraits) fA([...t.values()], n.name) || t.set(n.key, { ...n });
	return [...t.values()].map((t) => ({
		...t,
		config: SO(t.config, e.traitConfigOverrides[t.key])
	})).sort(mA);
}
function sA(e) {
	return e.allowBaseActorTraits ? [...e.baseActorDraftData.traits.filter((t) => e.ignoredBaseTraitKeys[uA(t)]).map((t) => {
		let n = uA(t);
		return {
			...pA(t, n, !0),
			config: SO(t.config, e.traitConfigOverrides[n])
		};
	}), ...e.selectedTraits] : e.selectedTraits;
}
function cA(e) {
	return e.optionalTraits.map((e) => ({
		config: e.config,
		img: e.img,
		name: e.name,
		uuid: e.uuid
	})).sort((e, t) => e.name.localeCompare(t.name));
}
function lA(e, t) {
	return {
		config: t.config,
		ignored: !1,
		key: `${e}:${t.uuid || wO(t.name)}`,
		name: t.name,
		source: e,
		sourceUuid: t.uuid
	};
}
function uA(e) {
	return `base:${e.uuid || wO(e.name)}`;
}
function dA(e, t) {
	return e.find((e) => CO(e.name, t));
}
function fA(e, t) {
	return dA(e, t) !== void 0;
}
function pA(e, t, n) {
	return {
		config: e.config,
		ignored: n,
		key: t,
		name: e.name,
		source: "base",
		sourceUuid: e.uuid
	};
}
function mA(e, t) {
	return e.source === t.source ? e.name.localeCompare(t.name) : e.source.localeCompare(t.source);
}
//#endregion
//#region src/state/npc-builder/traits.ts
function hA(e) {
	let { baseActorDraftData: t, customTraits: n, ignoredBaseTraitKeys: r, quickTraits: i, settings: a, traitConfigOverrides: o } = e, s = W(() => oA({
		allowBaseActorTraits: a.value.allowBaseActorTraits,
		baseActorDraftData: t.value,
		customTraits: n.value,
		ignoredBaseTraitKeys: r.value,
		traitConfigOverrides: o.value
	})), c = W(() => sA({
		allowBaseActorTraits: a.value.allowBaseActorTraits,
		baseActorDraftData: t.value,
		ignoredBaseTraitKeys: r.value,
		selectedTraits: s.value,
		traitConfigOverrides: o.value
	})), l = W(() => cA(t.value));
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
		let i = lA(e, t);
		if (!r) {
			d(i.key), x(t.name, !0);
			return;
		}
		x(t.name, !1) || n.value.find((e) => e.key === i.key) || h(i);
	}
	function h(e) {
		fA(s.value, e.name) || n.value.some((t) => t.key === e.key) || n.value.push(e);
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
		return dA(l.value, e);
	}
	function y(e) {
		return dA(i.value, e);
	}
	function b(e) {
		let n = dA(t.value.traits, e);
		if (!n) return null;
		let i = uA(n);
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
function gA(e, t = "trapping") {
	return {
		candidates: [],
		searchTerms: bA(e),
		selectedCandidateUuid: "",
		selectedItemType: t,
		selectedName: e.trim(),
		status: "fallback"
	};
}
function _A(e) {
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
function vA(e) {
	return {
		candidates: [],
		searchTerms: bA(e),
		selectedCandidateUuid: "",
		selectedItemType: "trapping",
		selectedName: e.trim(),
		status: "unresolved"
	};
}
function yA(e, t) {
	let n = bA(e), r = SA(n, t), i = r.filter((e) => e.matchKind === "exact");
	return i.length === 1 ? wA("matched", n, i[0]) : i.length > 1 ? wA("ambiguous", n, i[0], { candidates: r }) : r.length ? {
		candidates: r,
		searchTerms: n,
		selectedCandidateUuid: "",
		selectedItemType: "trapping",
		selectedName: e.trim(),
		status: "ambiguous"
	} : gA(e);
}
function bA(e) {
	let t = e.split(/\s+or\s+/i).map((e) => e.trim()).filter(Boolean);
	return t.length ? OA(t) : [e.trim()].filter(Boolean);
}
function xA(e, t) {
	if (TA(e) === TA(t)) return "exact";
	let n = EA(e), r = EA(t);
	if (!n || !r) return null;
	if (n === r || n.includes(r) || r.includes(n)) return "near";
	let i = n.split(" "), a = new Set(r.split(" "));
	return i.every((e) => a.has(e)) ? "near" : null;
}
function SA(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) for (let e of t) {
		let t = xA(r, e.name);
		t && n.get(e.uuid)?.matchKind !== "exact" && n.set(e.uuid, {
			itemType: e.itemType,
			matchKind: t,
			name: e.name,
			searchTerm: r,
			sourceLabel: e.sourceLabel,
			uuid: e.uuid
		});
	}
	return [...n.values()].sort(CA);
}
function CA(e, t) {
	return e.matchKind === t.matchKind ? e.name.localeCompare(t.name) : e.matchKind === "exact" ? -1 : 1;
}
function wA(e, t, n, r = {}) {
	return {
		candidates: r.candidates ?? (n ? [n] : []),
		searchTerms: t,
		selectedCandidateUuid: n?.uuid ?? "",
		selectedItemType: n?.itemType ?? "trapping",
		selectedName: n?.name ?? "",
		status: e
	};
}
function TA(e) {
	return e.trim().toLocaleLowerCase().replaceAll(/\s+/g, " ");
}
function EA(e) {
	return TA(e).replaceAll("&", " and ").replaceAll(/[(),.:;[\]]/g, " ").replaceAll(/\b(a|an|the|some|pair of|pairs of)\b/g, " ").split(/\s+/).map(DA).filter(Boolean).join(" ");
}
function DA(e) {
	return e.endsWith("ies") && e.length > 4 ? `${e.slice(0, -3)}y` : e.endsWith("s") && !e.endsWith("ss") && e.length > 3 ? e.slice(0, -1) : e;
}
function OA(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/functions/npc-builder/trappings/derive-trappings.ts
function kA(e) {
	let t = /* @__PURE__ */ new Map();
	MA(t, e), NA(t, e);
	for (let n of e.customTrappings) t.set(n.key, { ...n });
	return [...t.values()].map((t) => PA(t, e)).sort(FA);
}
function AA(e, t) {
	let n = e.resolution.candidates.find((e) => e.uuid === t);
	return n ? {
		...e.resolution,
		selectedCandidateUuid: n.uuid,
		selectedItemType: n.itemType,
		selectedName: n.name,
		status: e.resolution.status === "matched" ? "matched" : "ambiguous"
	} : null;
}
function jA(e) {
	return {
		...gA(e.name, e.itemType),
		candidates: e.resolution.candidates,
		searchTerms: e.resolution.searchTerms
	};
}
function MA(e, t) {
	if (t.settings.allowBaseActorTrappings) for (let n of t.baseActorDraftData.trappings) {
		let t = `base:${n.uuid || wO(n.name)}`;
		e.set(t, {
			ignored: !1,
			itemType: n.itemType,
			key: t,
			name: n.name,
			quantity: n.quantity,
			resolution: _A({
				itemType: n.itemType,
				name: n.name,
				uuid: n.uuid
			}),
			source: "base",
			sourceUuid: n.uuid
		});
	}
}
function NA(e, t) {
	for (let n of t.careers) for (let r of n.grants.trappings) {
		let i = `career:${wO(r)}`, a = e.get(i);
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
			resolution: t.trappingResolutionOverrides[i] ?? vA(r),
			source: "career",
			sourceUuid: ""
		});
	}
}
function PA(e, t) {
	let n = t.trappingOverrides[e.key];
	return {
		...e,
		ignored: n?.ignored ?? e.ignored,
		quantity: TO(n?.quantity ?? e.quantity),
		resolution: t.trappingResolutionOverrides[e.key] ?? e.resolution
	};
}
function FA(e, t) {
	return e.source === t.source ? e.name.localeCompare(t.name) : e.source.localeCompare(t.source);
}
//#endregion
//#region src/state/npc-builder/trappings.ts
function IA(e) {
	let { baseActorDraftData: t, careers: n, customTrappings: r, settings: i, trappingOverrides: a, trappingResolutionOverrides: o } = e, s = W(() => kA({
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
			quantity: TO(t)
		};
	}
	function f(e, t) {
		let n = s.value.find((t) => t.key === e), r = n ? AA(n, t) : null;
		r && (o.value[e] = r);
	}
	function p(e) {
		let t = s.value.find((t) => t.key === e);
		t && (o.value[e] = jA(t));
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
var LA = ac("npc-builder", () => {
	let e = /* @__PURE__ */ j(""), t = /* @__PURE__ */ j([]), n = /* @__PURE__ */ j({}), r = /* @__PURE__ */ j({ ...Rk }), i = /* @__PURE__ */ j([]), a = /* @__PURE__ */ j([]), o = /* @__PURE__ */ j([]), s = /* @__PURE__ */ j([]), c = /* @__PURE__ */ j([]), l = /* @__PURE__ */ j([]), u = /* @__PURE__ */ j(""), d = /* @__PURE__ */ j({ ...Lk }), f = /* @__PURE__ */ j(""), p = /* @__PURE__ */ j({}), m = /* @__PURE__ */ j({}), h = /* @__PURE__ */ j({}), g = /* @__PURE__ */ j([]), _ = /* @__PURE__ */ j([]), v = /* @__PURE__ */ j([]), y = /* @__PURE__ */ j({}), b = /* @__PURE__ */ j({}), x = /* @__PURE__ */ j({}), S = /* @__PURE__ */ j({}), C = /* @__PURE__ */ j({}), ee = /* @__PURE__ */ j({}), w = Ek({
		baseActorDraftData: r,
		careers: a,
		manualAdvancementDeltas: n,
		settings: d,
		skillCharacteristics: p,
		skillGrantResolutions: h,
		talentMaximums: m
	}), te = Fk({
		actorFolders: t,
		baseActorDraftData: r,
		baseActors: i,
		ignoredBaseTraitKeys: y,
		itemFolders: c,
		manualAdvancementDeltas: n,
		quickTraits: l,
		selectedBaseActorUuid: f,
		settings: d,
		traitConfigOverrides: S,
		trappingOverrides: C,
		trappingResolutionOverrides: ee
	}), T = Pk({
		actorName: e,
		baseActors: i,
		careers: a,
		clearBaseDraftData: te.clearBaseDraftData,
		customSpells: _,
		customTraits: o,
		customTrappings: s,
		detectedSpells: g,
		disabledPortraitSearchTerms: v,
		ignoredBaseTraitKeys: y,
		magicLoreResolutions: b,
		removeSkillGrantResolutionsForCareer: w.removeSkillGrantResolutionsForCareer,
		selectedBaseActorUuid: f,
		selectedPortraitPath: u,
		settings: d,
		skillGrantResolutions: h,
		spellSelectionOverrides: x
	}), ne = hA({
		baseActorDraftData: r,
		customTraits: o,
		ignoredBaseTraitKeys: y,
		quickTraits: l,
		settings: d,
		traitConfigOverrides: S
	}), re = IA({
		baseActorDraftData: r,
		careers: a,
		customTrappings: s,
		settings: d,
		trappingOverrides: C,
		trappingResolutionOverrides: ee
	}), E = aA({
		advancements: w.advancements,
		customSpells: _,
		detectedSpells: g,
		magicLoreResolutions: b,
		settings: d,
		spellSelectionOverrides: x,
		traits: ne.traits
	});
	function ie(e, t) {
		if (t) {
			v.value = v.value.filter((t) => t !== e);
			return;
		}
		v.value.includes(e) || (v.value = [...v.value, e]);
	}
	function ae() {
		v.value = [];
	}
	function oe(e) {
		let t = new Set(e);
		v.value = v.value.filter((e) => t.has(e));
	}
	return {
		actorName: e,
		actorFolders: t,
		addCareer: T.addCareer,
		addCareerIfMissing: T.addCareerIfMissing,
		addCustomSpell: E.addCustomSpell,
		addCustomTrait: ne.addCustomTrait,
		addCustomTrapping: re.addCustomTrapping,
		adjustAdvancementCurrent: w.adjustAdvancementCurrent,
		advancements: w.advancements,
		applyAutoAdvance: w.applyAutoAdvance,
		baseActorDraftData: r,
		baseActors: i,
		buildTraits: ne.buildTraits,
		careers: a,
		clearBaseDraftData: te.clearBaseDraftData,
		customSpells: _,
		customTraits: o,
		customTrappings: s,
		disabledPortraitSearchTerms: v,
		enableAllPortraitSearchTerms: ae,
		estimatedNpcXp: w.estimatedNpcXp,
		finalActorName: T.finalActorName,
		finalCareer: T.finalCareer,
		finalPortraitPath: T.finalPortraitPath,
		getSkillGrantResolution: w.getSkillGrantResolution,
		grantTotals: T.grantTotals,
		hasMagicAccess: E.hasMagicAccess,
		hydrateActorFolders: te.hydrateActorFolders,
		hydrateBaseActorDraftData: te.hydrateBaseActorDraftData,
		hydrateBaseActors: te.hydrateBaseActors,
		hydrateDetectedSpells: E.hydrateDetectedSpells,
		hydrateItemFolders: te.hydrateItemFolders,
		hydrateQuickTraits: te.hydrateQuickTraits,
		hydrateSettings: te.hydrateSettings,
		hydrateSkillCharacteristics: w.hydrateSkillCharacteristics,
		hydrateTalentMaximums: w.hydrateTalentMaximums,
		itemFolders: c,
		magicGrants: E.magicGrants,
		magicLoreResolutions: b,
		maximizableTalentCount: w.maximizableTalentCount,
		maximizeTalents: w.maximizeTalents,
		moveCareer: T.moveCareer,
		moveCareerToIndex: T.moveCareerToIndex,
		optionalTraits: ne.optionalTraits,
		quickTraits: l,
		removeCareer: T.removeCareer,
		removeCustomSpell: E.removeCustomSpell,
		removeCustomTrait: ne.removeCustomTrait,
		removeCustomTrapping: re.removeCustomTrapping,
		resetAdvancementCurrent: w.resetAdvancementCurrent,
		resetAllAdvancementCurrents: w.resetAllAdvancementCurrents,
		resetDraft: T.resetDraft,
		retainAvailablePortraitSearchTerms: oe,
		selectBaseActor: T.selectBaseActor,
		selectBaseActorUuid: T.selectBaseActorUuid,
		selectedBaseActor: T.selectedBaseActor,
		selectedBaseActorUuid: f,
		selectedPortraitPath: u,
		selectedSpells: E.selectedSpells,
		selectPortrait: T.selectPortrait,
		selectTrappingResolutionCandidate: re.selectTrappingResolutionCandidate,
		setAdvancementCurrent: w.setAdvancementCurrent,
		setAdvancementTotal: w.setAdvancementTotal,
		setBaseTraitIgnored: ne.setBaseTraitIgnored,
		setCareerQuantity: T.setCareerQuantity,
		setMagicGrantLoreResolution: E.setMagicGrantLoreResolution,
		setOptionalTraitSelected: ne.setOptionalTraitSelected,
		setPortraitSearchTermEnabled: ie,
		setQuickTraitSelected: ne.setQuickTraitSelected,
		setSkillGrantResolution: w.setSkillGrantResolution,
		setSpellSelected: E.setSpellSelected,
		setTraitConfig: ne.setTraitConfig,
		setTrappingFallback: re.setTrappingFallback,
		setTrappingIgnored: re.setTrappingIgnored,
		setTrappingQuantity: re.setTrappingQuantity,
		setTrappingResolution: re.setTrappingResolution,
		settings: d,
		spells: E.spells,
		suggestedActorName: T.suggestedActorName,
		traits: ne.traits,
		trappings: re.trappings
	};
}), RA = { class: "dui-fieldset-legend" }, zA = [
	"checked",
	"disabled",
	"onChange"
], BA = { class: "dui-card-actions" }, VA = /* @__PURE__ */ P({
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
		return (t, i) => (L(), R("section", null, [
			B("p", null, k(e.prompt.droppedCareer.name) + " appears to belong to the " + k(e.prompt.droppedCareer.careerGroup) + " career track. The following lower-tier candidates were found. ", 1),
			(L(!0), R(I, null, F(e.candidateGroups, (t) => (L(), R("fieldset", {
				key: t.level,
				class: "dui-fieldset"
			}, [B("legend", RA, "Tier " + k(t.level || "Unknown"), 1), (L(!0), R(I, null, F(t.candidates, (t) => (L(), R("label", {
				key: t.uuid,
				class: "dui-label"
			}, [B("input", {
				class: "dui-checkbox dui-checkbox-sm",
				checked: e.isCareerQueued(t.uuid) || e.isLowerCareerSelected(t.uuid),
				disabled: e.isCareerQueued(t.uuid),
				type: "checkbox",
				onChange: (e) => r(t, e)
			}, null, 40, zA), B("span", null, [B("strong", null, k(t.name), 1), B("small", null, [H(k(t.careerGroup || "Career") + " ", 1), e.isCareerQueued(t.uuid) ? (L(), R(I, { key: 0 }, [H(" already queued ")], 64)) : U("", !0)])])]))), 128))]))), 128)),
			B("div", BA, [B("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: i[0] ||= (e) => n("addDroppedOnly")
			}, " Add Dropped Only "), B("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: i[1] ||= (e) => n("addSelected")
			}, " Add Selected ")])
		]));
	}
}), HA = ["aria-labelledby"], UA = ["id"], WA = { class: "dui-modal-action" }, GA = /* @__PURE__ */ P({
	__name: "NpcBuilderDialog",
	props: {
		closeLabel: { default: "Close" },
		open: { type: Boolean },
		title: {},
		wide: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["close"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ j(null), a = mr();
		return Jn(() => n.open, async (e) => {
			await kn();
			let t = i.value;
			if (e && !t?.open) {
				t?.showModal();
				return;
			}
			!e && t?.open && t.close();
		}, { immediate: !0 }), Mr(() => {
			i.value?.open && i.value.close();
		}), (t, n) => (L(), R("dialog", {
			ref_key: "dialogElement",
			ref: i,
			"aria-labelledby": M(a),
			"aria-modal": "true",
			class: "dui-modal",
			onCancel: n[1] ||= Yo((e) => r("close"), ["prevent"])
		}, [B("section", { class: O(["dui-modal-box", { "app:max-w-5xl": e.wide }]) }, [
			B("h2", {
				id: M(a),
				class: "dui-card-title"
			}, k(e.title), 9, UA),
			Ur(t.$slots, "default"),
			B("div", WA, [B("button", {
				class: "dui-btn",
				type: "button",
				onClick: n[0] ||= (e) => r("close")
			}, k(e.closeLabel), 1)])
		], 2)], 40, HA));
	}
}), KA = /* @__PURE__ */ new Map();
function qA(e) {
	let t = e.id.trim();
	if (!t) throw Error("NPC auto-advance strategies must have an id.");
	KA.set(t, {
		...e,
		id: t
	});
}
function JA() {
	return [...KA.values()].sort((e, t) => e.name.localeCompare(t.name));
}
function YA(e) {
	return KA.get(e) ?? null;
}
function XA(e, t) {
	return $A(e, t, {
		kinds: ["skill"],
		respectTalentMaximums: !1
	});
}
function ZA(e, t) {
	return $A($A(e, t, {
		kinds: ["talent"],
		respectTalentMaximums: !0
	}), t, {
		kinds: ["skill"],
		respectTalentMaximums: !1
	});
}
function QA(e, t) {
	return $A(e, t, {
		kinds: ["characteristic"],
		respectTalentMaximums: !1
	});
}
function $A(e, t, n) {
	let r = Math.max(0, Math.floor(Number.isFinite(t) ? t : 0)), i = nj(e.advancements), a = hk(i).total;
	if (a >= r) return { advancements: i };
	let o = !0;
	for (; o;) {
		o = !1;
		for (let e of i) {
			if (!n.kinds.includes(e.kind)) continue;
			let t = ej(e, n);
			if (!t) continue;
			let i = _k(t) - _k(e);
			i <= 0 || a + i > r || (e.current = t.current, a += i, o = !0);
		}
	}
	return { advancements: i };
}
function ej(e, t) {
	return t.respectTalentMaximums && e.kind === "talent" && !tj(e) ? null : {
		...e,
		current: e.current + ak(e)
	};
}
function tj(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" ? ok(e) < t : !1;
}
function nj(e) {
	return e.map((e) => ({
		...e,
		sources: e.sources.map((e) => ({ ...e }))
	}));
}
qA({
	description: "Cycles visible Skill rows evenly until no next skill increase fits the target XP.",
	id: "skill-master",
	name: "Skill Master",
	run: XA
}), qA({
	description: "Raises visible Talent rows evenly up to known maximums, then spends any remaining XP like Skill Master.",
	id: "gifted-and-talented",
	name: "Gifted & Talented",
	run: ZA
}), qA({
	description: "Cycles visible Characteristic rows evenly until no next characteristic increase fits the target XP.",
	id: "all-natural",
	name: "All Natural",
	run: QA
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderAdvancementsTab/advancement-display.ts
function rj(e) {
	let t = e.current - e.careerValue, n = [...e.sources].sort((e, t) => uj(e.kind) - uj(t.kind)).map((e) => `${e.label} ${dj(e.count)}`);
	return t !== 0 && n.push(`Manual ${dj(t)}`), n.length ? n.join(", ") : e.includedFromBase ? "Base actor" : "-";
}
function ij(e) {
	return jO(e) !== null;
}
function aj(e) {
	return Math.max(e.minimumTotal, e.baseValue + e.current);
}
function oj(e) {
	return aj(e);
}
function sj(e) {
	return e.talentMaximumLabel ?? "Unknown";
}
function cj(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" && oj(e) > t;
}
function lj(e) {
	return _k(e);
}
function uj(e) {
	return e === "characteristic" ? 0 : e === "career" ? 1 : 2;
}
function dj(e) {
	return e > 0 ? `+${e}` : `${e}`;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSection.vue?vue&type=script&setup=true&lang.ts
var fj = { class: "dui-card dui-card-border dui-card-sm" }, pj = { class: "dui-card-body" }, mj = { class: "dui-card-title" }, hj = {
	key: 0,
	class: "dui-badge dui-badge-primary"
}, gj = { key: 0 }, _j = /* @__PURE__ */ P({
	__name: "NpcBuilderSection",
	props: {
		description: { default: "" },
		number: { default: "" },
		title: {}
	},
	setup(e) {
		return (t, n) => (L(), R("section", fj, [B("div", pj, [
			B("h2", mj, [e.number ? (L(), R("span", hj, k(e.number), 1)) : U("", !0), H(" " + k(e.title), 1)]),
			e.description ? (L(), R("p", gj, k(e.description), 1)) : U("", !0),
			Ur(t.$slots, "default")
		])]));
	}
}), vj = {
	key: 0,
	class: "dui-card-actions"
}, yj = {
	key: 1,
	class: "dui-alert dui-alert-info"
}, bj = { class: "dui-list" }, xj = { class: "dui-list-col-grow" }, Sj = {
	key: 0,
	class: "dui-badge dui-badge-info"
}, Cj = {
	key: 1,
	class: "dui-badge dui-badge-warning"
}, wj = { class: "dui-join" }, Tj = ["disabled", "onClick"], Ej = [
	"aria-label",
	"value",
	"onInput"
], Dj = ["onClick"], Oj = ["disabled", "onClick"], kj = {
	key: 2,
	class: "dui-alert"
}, Aj = /* @__PURE__ */ P({
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
		return (t, i) => (L(), z(_j, {
			number: e.sectionNumber,
			title: e.title
		}, {
			default: N(() => [
				e.manualAdvanceCount ? (L(), R("div", vj, [B("span", null, k(e.manualAdvanceCount) + " manual edits", 1), B("button", {
					class: "dui-btn dui-btn-sm",
					type: "button",
					onClick: i[0] ||= (e) => n("resetAll")
				}, " Reset All Advances ")])) : U("", !0),
				e.estimatedNpcXp ? (L(), R("div", yj, [
					B("strong", null, "Estimated NPC XP " + k(e.estimatedNpcXp.total), 1),
					B("span", null, k(e.estimatedNpcXp.characteristics) + " characteristics", 1),
					B("span", null, k(e.estimatedNpcXp.skills) + " skills", 1),
					B("span", null, k(e.estimatedNpcXp.talents) + " talents", 1)
				])) : U("", !0),
				B("ul", bj, [(L(!0), R(I, null, F(e.entries, (t) => (L(), R("li", {
					key: `${t.kind}:${t.name}`,
					class: "dui-list-row"
				}, [B("div", xj, [
					B("strong", null, k(t.name), 1),
					t.current === t.careerValue ? U("", !0) : (L(), R("span", Sj, " Manual edit ")),
					e.showSkillSpecializationBadges && M(ij)(t.name) ? (L(), R("span", Cj, " Needs specialization ")) : U("", !0),
					B("span", null, " Base " + k(t.baseValue) + " · Advances " + k(t.current) + " · XP " + k(M(lj)(t)), 1),
					B("small", null, "Sources: " + k(M(rj)(t)), 1)
				]), B("div", wj, [
					B("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						disabled: M(aj)(t) <= t.minimumTotal,
						title: "Decrease by 5",
						type: "button",
						onClick: (e) => n("adjustCurrent", t, -1)
					}, " -5 ", 8, Tj),
					B("input", {
						class: "dui-join-item dui-input dui-input-sm",
						"aria-label": `Total ${t.name}`,
						value: M(aj)(t),
						min: "0",
						type: "number",
						onInput: (e) => r(t, e)
					}, null, 40, Ej),
					B("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						title: "Increase by 5",
						type: "button",
						onClick: (e) => n("adjustCurrent", t, 1)
					}, " +5 ", 8, Dj),
					B("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						disabled: t.current === t.careerValue,
						title: "Reset to career value",
						type: "button",
						onClick: (e) => n("resetCurrent", t)
					}, " Reset ", 8, Oj)
				])]))), 128))]),
				e.entries.length ? U("", !0) : (L(), R("p", kj, "No " + k(e.title.toLowerCase()) + " to advance yet.", 1))
			]),
			_: 1
		}, 8, ["number", "title"]));
	}
}), jj = { class: "dui-fieldset" }, Mj = ["value"], Nj = { class: "dui-fieldset" }, Pj = ["value"], Fj = ["value"], Ij = { key: 0 }, Lj = { class: "dui-card-actions" }, Rj = ["disabled"], zj = /* @__PURE__ */ P({
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
		return (t, a) => (L(), z(_j, {
			description: "Spend toward a target without exceeding it. Existing manual edits are preserved.",
			number: "4",
			title: "Auto Advance"
		}, {
			default: N(() => [
				B("fieldset", jj, [a[1] ||= B("legend", { class: "dui-fieldset-legend" }, "Target XP", -1), B("input", {
					"aria-label": "Target XP",
					class: "dui-input dui-input-sm",
					value: e.targetXp,
					min: "0",
					type: "number",
					onInput: r
				}, null, 40, Mj)]),
				B("fieldset", Nj, [a[2] ||= B("legend", { class: "dui-fieldset-legend" }, "Strategy", -1), B("select", {
					"aria-label": "Auto advance strategy",
					class: "dui-select dui-select-sm",
					value: e.selectedAutoAdvanceStrategyId,
					onChange: i
				}, [(L(!0), R(I, null, F(e.autoAdvanceStrategies, (e) => (L(), R("option", {
					key: e.id,
					value: e.id
				}, k(e.name), 9, Fj))), 128))], 40, Pj)]),
				e.selectedAutoAdvanceStrategy ? (L(), R("p", Ij, k(e.selectedAutoAdvanceStrategy.description), 1)) : U("", !0),
				B("div", Lj, [B("button", {
					class: "dui-btn dui-btn-primary dui-btn-sm",
					disabled: !e.canRunAutoAdvance,
					title: "Advance rows as close to the target XP as possible without going over",
					type: "button",
					onClick: a[0] ||= (e) => n("runAutoAdvance")
				}, " Auto Advance ", 8, Rj)])
			]),
			_: 1
		}));
	}
}), Bj = { class: "dui-card-actions" }, Vj = ["disabled"], Hj = { class: "dui-list" }, Uj = { class: "dui-list-col-grow" }, Wj = {
	key: 0,
	class: "dui-badge dui-badge-info"
}, Gj = {
	key: 1,
	class: "dui-badge dui-badge-warning"
}, Kj = { class: "dui-join" }, qj = ["disabled", "onClick"], Jj = [
	"aria-label",
	"value",
	"onInput"
], Yj = ["onClick"], Xj = ["disabled", "onClick"], Zj = {
	key: 0,
	class: "dui-alert"
}, Qj = /* @__PURE__ */ P({
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
		return (t, i) => (L(), z(_j, {
			number: "3",
			title: "Talents"
		}, {
			default: N(() => [
				B("div", Bj, [B("span", null, k(e.maximizableTalentCount) + " below maximum", 1), B("button", {
					class: "dui-btn dui-btn-sm",
					disabled: e.maximizableTalentCount === 0,
					title: "Raise talents with known maximums to their maximum ranks",
					type: "button",
					onClick: i[0] ||= (e) => n("maximizeTalents")
				}, " Maximize Talents ", 8, Vj)]),
				B("ul", Hj, [(L(!0), R(I, null, F(e.talents, (e) => (L(), R("li", {
					key: `${e.kind}:${e.name}`,
					class: "dui-list-row"
				}, [B("div", Uj, [
					B("strong", null, k(e.name), 1),
					e.current === e.careerValue ? U("", !0) : (L(), R("span", Wj, " Manual edit ")),
					B("span", null, " Ranks " + k(M(oj)(e)) + " · Maximum " + k(M(sj)(e)) + " · XP " + k(M(lj)(e)), 1),
					B("small", null, "Sources: " + k(M(rj)(e)), 1),
					M(cj)(e) ? (L(), R("span", Gj, " Over maximum ")) : U("", !0)
				]), B("div", Kj, [
					B("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						disabled: M(oj)(e) <= e.minimumTotal,
						title: "Decrease by 1",
						type: "button",
						onClick: (t) => n("adjustCurrent", e, -1)
					}, " -1 ", 8, qj),
					B("input", {
						class: "dui-join-item dui-input dui-input-sm",
						"aria-label": `Ranks ${e.name}`,
						value: M(oj)(e),
						min: "0",
						type: "number",
						onInput: (t) => r(e, t)
					}, null, 40, Jj),
					B("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						title: "Increase by 1",
						type: "button",
						onClick: (t) => n("adjustCurrent", e, 1)
					}, " +1 ", 8, Yj),
					B("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						disabled: e.current === e.careerValue,
						title: "Reset to career value",
						type: "button",
						onClick: (t) => n("resetCurrent", e)
					}, " Reset ", 8, Xj)
				])]))), 128))]),
				e.talents.length ? U("", !0) : (L(), R("p", Zj, "No talents to advance yet."))
			]),
			_: 1
		}));
	}
}), $j = /* @__PURE__ */ P({
	__name: "NpcBuilderAdvancementsTab",
	setup(e) {
		let t = LA(), { advancements: n, estimatedNpcXp: r, maximizableTalentCount: i } = oc(t), a = JA(), o = /* @__PURE__ */ j("skill-master"), s = /* @__PURE__ */ j(0), c = W(() => n.value.filter((e) => e.kind === "characteristic")), l = W(() => n.value.filter((e) => e.kind === "skill")), u = W(() => n.value.filter((e) => e.kind === "talent")), d = W(() => n.value.filter((e) => e.current !== e.careerValue).length), f = W(() => YA(o.value) ?? a[0] ?? null), p = W(() => f.value !== null && s.value > r.value.total);
		Jn(() => r.value.total, (e) => {
			s.value < e && (s.value = e);
		}, { immediate: !0 });
		function m() {
			let e = f.value;
			e && t.applyAutoAdvance(e, s.value);
		}
		return (e, n) => (L(), R("section", null, [
			V(Aj, {
				entries: c.value,
				"estimated-npc-xp": M(r),
				"manual-advance-count": d.value,
				"section-number": "1",
				title: "Characteristics",
				onAdjustCurrent: M(t).adjustAdvancementCurrent,
				onResetAll: M(t).resetAllAdvancementCurrents,
				onResetCurrent: M(t).resetAdvancementCurrent,
				onTotalChange: M(t).setAdvancementTotal
			}, null, 8, [
				"entries",
				"estimated-npc-xp",
				"manual-advance-count",
				"onAdjustCurrent",
				"onResetAll",
				"onResetCurrent",
				"onTotalChange"
			]),
			n[2] ||= B("div", { class: "dui-divider" }, null, -1),
			V(Aj, {
				entries: l.value,
				"section-number": "2",
				"show-skill-specialization-badges": "",
				title: "Skills",
				onAdjustCurrent: M(t).adjustAdvancementCurrent,
				onResetCurrent: M(t).resetAdvancementCurrent,
				onTotalChange: M(t).setAdvancementTotal
			}, null, 8, [
				"entries",
				"onAdjustCurrent",
				"onResetCurrent",
				"onTotalChange"
			]),
			n[3] ||= B("div", { class: "dui-divider" }, null, -1),
			V(Qj, {
				"maximizable-talent-count": M(i),
				talents: u.value,
				onAdjustCurrent: M(t).adjustAdvancementCurrent,
				onMaximizeTalents: M(t).maximizeTalents,
				onResetCurrent: M(t).resetAdvancementCurrent,
				onTotalChange: M(t).setAdvancementTotal
			}, null, 8, [
				"maximizable-talent-count",
				"talents",
				"onAdjustCurrent",
				"onMaximizeTalents",
				"onResetCurrent",
				"onTotalChange"
			]),
			n[4] ||= B("div", { class: "dui-divider" }, null, -1),
			V(zj, {
				"auto-advance-strategies": M(a),
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
function eM(e) {
	return [
		`Ch ${e.grants.characteristics.length}`,
		`Sk ${e.grants.skills.length}`,
		`Ta ${e.grants.talents.length}`,
		`Tr ${e.grants.trappings.length}`
	].join(" / ");
}
function tM(e) {
	let t = e.slice(0, 3).join(", "), n = e.length - 3;
	return e.length ? n > 0 ? `${t}, +${n}` : t : "-";
}
function nM(e) {
	return e.split(/\s+/).map((e) => e.at(0)).filter(Boolean).slice(0, 2).join("").toLocaleUpperCase();
}
function rM(e) {
	return `${e.label}\n${e.img}`;
}
function iM(e) {
	return `Use ${e.label} (${aM(e.source)})`;
}
function aM(e) {
	return {
		"base-actor": "Base Actor",
		"base-token": "Base Token",
		career: "Career",
		"foundry-asset": "Foundry",
		web: "Web"
	}[e];
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/BaseActorPanel.vue?vue&type=script&setup=true&lang.ts
var oM = { class: "dui-fieldset" }, sM = ["value"], cM = { class: "dui-fieldset" }, lM = ["disabled", "value"], uM = { value: "" }, dM = ["value"], fM = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, pM = {
	key: 1,
	class: "dui-alert"
}, mM = {
	key: 0,
	class: "dui-avatar"
}, hM = { class: "app:size-16 app:shrink-0 app:rounded-lg" }, gM = ["src"], _M = {
	key: 1,
	class: "dui-badge"
}, vM = /* @__PURE__ */ P({
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
		return (t, a) => (L(), z(_j, {
			description: "Choose a world Actor as the starting statblock, or drop one below.",
			number: "1",
			title: "Base Actor"
		}, {
			default: N(() => [
				B("fieldset", oM, [a[1] ||= B("legend", { class: "dui-fieldset-legend" }, "Search world actors", -1), B("input", {
					"aria-label": "Search world actors",
					class: "dui-input dui-input-sm",
					value: e.actorFilter,
					placeholder: "Filter actors",
					type: "search",
					onInput: r
				}, null, 40, sM)]),
				B("fieldset", cM, [a[2] ||= B("legend", { class: "dui-fieldset-legend" }, "Base statblock", -1), B("select", {
					"aria-label": "Base statblock",
					class: "dui-select dui-select-sm",
					disabled: e.isLoadingActors,
					value: e.selectedBaseActorUuid,
					onChange: i
				}, [B("option", uM, k(e.isLoadingActors ? "Loading actors..." : "Choose an actor"), 1), (L(!0), R(I, null, F(e.filteredActors, (e) => (L(), R("option", {
					key: e.uuid,
					value: e.uuid
				}, k(e.name), 9, dM))), 128))], 40, lM)]),
				V(fy, {
					description: "Use a world Actor as the starting statblock.",
					title: "Drop Actor",
					variant: "compact",
					onDropData: a[0] ||= (e) => n("actorDrop", e)
				}),
				e.errorMessage ? (L(), R("p", fM, k(e.errorMessage), 1)) : U("", !0),
				e.selectedBaseActor ? (L(), R("article", pM, [e.selectedBaseActor.img ? (L(), R("div", mM, [B("div", hM, [B("img", {
					src: e.selectedBaseActor.img,
					alt: "",
					class: "app:h-full app:w-full app:object-cover",
					height: "64",
					width: "64"
				}, null, 8, gM)])])) : (L(), R("span", _M, k(M(nM)(e.selectedBaseActor.name)), 1)), B("div", null, [B("strong", null, k(e.selectedBaseActor.name), 1), B("span", null, [
					H(k(e.selectedBaseActor.species || "Species not found") + " ", 1),
					e.selectedBaseActor.type ? (L(), R(I, { key: 0 }, [H(" - " + k(e.selectedBaseActor.type), 1)], 64)) : U("", !0),
					e.isLoadingBaseDraft ? (L(), R(I, { key: 1 }, [H(" - loading details...")], 64)) : U("", !0)
				])])])) : U("", !0)
			]),
			_: 1
		}));
	}
}), yM = { class: "dui-card-actions" }, bM = { class: "dui-stats dui-stats-vertical app:w-full" }, xM = { class: "dui-stat" }, SM = { class: "dui-stat-value" }, CM = {
	key: 0,
	class: "dui-stat-desc"
}, wM = { class: "dui-stat" }, TM = { class: "dui-stat-value" }, EM = {
	key: 0,
	class: "dui-stat-desc"
}, DM = {
	key: 1,
	class: "dui-stat-desc"
}, OM = { class: "dui-stat" }, kM = { class: "dui-stat-value" }, AM = { class: "dui-stat" }, jM = { class: "dui-stat-value" }, MM = { class: "dui-stat" }, NM = { class: "dui-stat-value" }, PM = { class: "dui-stat-desc" }, FM = {
	key: 0,
	class: "dui-alert dui-alert-warning",
	role: "alert"
}, IM = { key: 1 }, LM = /* @__PURE__ */ P({
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
		return (t, n) => (L(), z(_j, {
			number: "4",
			title: "Build Preview"
		}, {
			default: N(() => [
				B("div", yM, [B("span", { class: O(["dui-badge", e.buildPreviewStatus === "Ready" ? "dui-badge-success" : "dui-badge-warning"]) }, k(e.buildPreviewStatus), 3)]),
				B("div", bM, [
					B("div", xM, [
						n[0] ||= B("span", { class: "dui-stat-title" }, "Advances", -1),
						B("strong", SM, k(e.advancementCount), 1),
						e.editedAdvanceCount ? (L(), R("small", CM, k(e.editedAdvanceCount) + " manually edited ", 1)) : U("", !0)
					]),
					B("div", wM, [
						n[1] ||= B("span", { class: "dui-stat-title" }, "Trappings", -1),
						B("strong", TM, k(e.visibleTrappingCount), 1),
						e.fallbackTrappingCount ? (L(), R("small", EM, k(e.fallbackTrappingCount) + " blank fallback ", 1)) : U("", !0),
						e.ignoredTrappingCount ? (L(), R("small", DM, k(e.ignoredTrappingCount) + " ignored ", 1)) : U("", !0)
					]),
					B("div", OM, [n[2] ||= B("span", { class: "dui-stat-title" }, "Traits", -1), B("strong", kM, k(e.traitCount), 1)]),
					B("div", AM, [n[3] ||= B("span", { class: "dui-stat-title" }, "Spells", -1), B("strong", jM, k(e.selectedSpellCount), 1)]),
					B("div", MM, [
						n[4] ||= B("span", { class: "dui-stat-title" }, "Estimated NPC XP", -1),
						B("strong", NM, k(e.estimatedNpcXp.total), 1),
						B("small", PM, k(e.estimatedNpcXp.characteristics) + " char / " + k(e.estimatedNpcXp.skills) + " skill / " + k(e.estimatedNpcXp.talents) + " talent ", 1)
					])
				]),
				e.buildPreviewWarnings.length ? (L(), R("div", FM, [B("div", null, [(L(!0), R(I, null, F(e.buildPreviewWarnings, (e) => (L(), R("p", { key: e }, k(e), 1))), 128))])])) : (L(), R("p", IM, " The draft has a base Actor, queued Career data, resolved trappings, and a portrait ready to apply. "))
			]),
			_: 1
		}));
	}
}), RM = { class: "dui-list" }, zM = { class: "dui-list-row" }, BM = { class: "dui-list-row" }, VM = { class: "dui-list-row" }, HM = { class: "dui-list-row" }, UM = { class: "dui-list-row" }, WM = { class: "dui-list-row" }, GM = { class: "dui-list-row" }, KM = /* @__PURE__ */ P({
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
		return (t, n) => (L(), R("dl", RM, [
			B("div", zM, [n[0] ||= B("dt", null, "Build name", -1), B("dd", null, k(e.finalActorName), 1)]),
			B("div", BM, [n[1] ||= B("dt", null, "Base actor", -1), B("dd", null, k(e.baseActorName), 1)]),
			B("div", VM, [n[2] ||= B("dt", null, "Final career", -1), B("dd", null, k(e.finalCareerName), 1)]),
			B("div", HM, [n[3] ||= B("dt", null, "Career items", -1), B("dd", null, k(e.careerItemCount), 1)]),
			B("div", UM, [n[4] ||= B("dt", null, "Apply", -1), B("dd", null, k(e.advancementCount) + " advance rows, " + k(e.visibleTrappingCount) + " trappings, " + k(e.traitCount) + " traits, " + k(e.selectedSpellCount) + " spells ", 1)]),
			B("div", WM, [n[5] ||= B("dt", null, "Extracted grants", -1), B("dd", null, k(e.grantTotals.characteristics) + " characteristics, " + k(e.grantTotals.skills) + " skills, " + k(e.grantTotals.talents) + " talents, " + k(e.grantTotals.trappings) + " trappings ", 1)]),
			B("div", GM, [n[6] ||= B("dt", null, "Estimated NPC XP", -1), B("dd", null, k(e.estimatedNpcXpTotal), 1)])
		]));
	}
}), qM = { class: "app:grid app:gap-3" }, JM = { class: "app:flex app:flex-wrap app:items-start app:gap-3" }, YM = ["aria-label", "disabled"], XM = ["src"], ZM = { key: 1 }, QM = { key: 2 }, $M = { class: "app:flex app:min-w-48 app:flex-1 app:flex-col app:items-start app:gap-2" }, eN = ["title"], tN = {
	key: 1,
	class: "app:text-base-content/70"
}, nN = ["disabled"], rN = {
	key: 0,
	"aria-live": "polite",
	role: "status"
}, iN = ["value"], aN = {
	key: 1,
	class: "dui-fieldset"
}, oN = { class: "dui-fieldset-legend" }, sN = { key: 0 }, cN = { key: 1 }, lN = { class: "app:flex app:flex-wrap app:gap-2" }, uN = [
	"aria-label",
	"aria-pressed",
	"title",
	"onClick"
], dN = ["src"], fN = ["aria-label"], pN = /* @__PURE__ */ P({
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
		return (t, r) => (L(), R("section", qM, [
			B("div", JM, [B("button", {
				"aria-label": e.portraitCandidates.length ? "Open portrait gallery" : "No portraits available",
				class: "dui-btn dui-btn-square app:h-32 app:w-32 app:shrink-0 app:overflow-hidden app:p-1",
				disabled: !e.portraitCandidates.length,
				title: "Open portrait gallery",
				type: "button",
				onClick: r[0] ||= (e) => n("openGallery")
			}, [e.finalPortraitPath ? (L(), R("img", {
				key: 0,
				alt: "",
				class: "app:h-full app:w-full app:rounded-box app:object-cover",
				height: "192",
				src: e.finalPortraitPath,
				width: "192"
			}, null, 8, XM)) : e.finalCareer ? (L(), R("strong", ZM, k(M(nM)(e.finalCareer.name)), 1)) : (L(), R("span", QM, "No portrait"))], 8, YM), B("div", $M, [
				r[3] ||= B("span", { class: "dui-badge dui-badge-outline" }, "Current portrait", -1),
				B("strong", null, k(e.selectedPortraitCandidate?.label ?? "No portrait selected"), 1),
				e.finalPortraitPath ? (L(), R("small", {
					key: 0,
					class: "app:break-all app:text-base-content/70",
					title: e.finalPortraitPath
				}, k(e.finalPortraitPath), 9, eN)) : (L(), R("span", tN, " A Career or base Actor image will be used when available. ")),
				B("button", {
					class: "dui-btn dui-btn-outline dui-btn-sm",
					disabled: !e.portraitCandidates.length,
					type: "button",
					onClick: r[1] ||= (e) => n("openGallery")
				}, " Browse " + k(e.portraitCandidates.length) + " portraits ", 9, nN)
			])]),
			e.isLoadingPortraitCandidates && e.portraitSearchProgress ? (L(), R("div", rN, [B("progress", {
				"aria-label": "Portrait search progress",
				class: "dui-progress dui-progress-info app:w-full",
				value: e.portraitSearchProgressValue,
				max: "100"
			}, null, 8, iN), B("small", null, k(e.portraitSearchProgressLabel), 1)])) : U("", !0),
			e.portraitCandidates.length || e.isLoadingPortraitCandidates ? (L(), R("fieldset", aN, [B("legend", oN, [r[4] ||= B("span", null, "Quick picks", -1), e.isLoadingPortraitCandidates ? (L(), R("span", sN, "Updating...")) : (L(), R("span", cN, k(e.portraitCandidates.length) + " options", 1))]), B("div", lN, [(L(!0), R(I, null, F(e.compactPortraitCandidates, (t) => (L(), R("button", {
				key: t.key,
				"aria-label": M(iM)(t),
				"aria-pressed": t.key === e.selectedPortraitCandidateKey,
				class: O(["dui-btn dui-btn-square app:overflow-hidden app:p-1", { "dui-btn-active dui-btn-outline": t.key === e.selectedPortraitCandidateKey }]),
				title: M(rM)(t),
				type: "button",
				onClick: (e) => n("selectPortrait", t)
			}, [B("img", {
				alt: "",
				class: "app:h-full app:w-full app:rounded-box app:object-cover",
				height: "64",
				loading: "lazy",
				src: t.img,
				width: "64"
			}, null, 8, dN)], 10, uN))), 128)), e.hiddenPortraitCandidateCount > 0 ? (L(), R("button", {
				key: 0,
				"aria-label": `Open ${e.hiddenPortraitCandidateCount} more portrait options`,
				class: "dui-btn dui-btn-square",
				type: "button",
				onClick: r[2] ||= (e) => n("openGallery")
			}, " +" + k(e.hiddenPortraitCandidateCount), 9, fN)) : U("", !0)])])) : U("", !0)
		]));
	}
}), mN = {
	key: 0,
	class: "dui-fieldset"
}, hN = { class: "dui-fieldset-legend" }, gN = { class: "dui-card-actions" }, _N = ["aria-pressed", "onClick"], vN = /* @__PURE__ */ P({
	__name: "TraitButtonGroup",
	props: {
		caption: {},
		title: {},
		traits: {}
	},
	emits: ["toggleTrait"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => e.traits.length ? (L(), R("fieldset", mN, [B("legend", hN, [B("span", null, k(e.title), 1), B("span", null, k(e.caption), 1)]), B("div", gN, [(L(!0), R(I, null, F(e.traits, (e) => (L(), R("button", {
			key: e.uuid,
			"aria-pressed": e.isSelected,
			class: O(["dui-btn dui-btn-sm", { "dui-btn-active": e.isSelected }]),
			type: "button",
			onClick: (t) => n("toggleTrait", e)
		}, k(e.name), 11, _N))), 128))])])) : U("", !0);
	}
}), yN = { class: "app:grid app:gap-3" }, bN = { class: "dui-fieldset" }, xN = ["placeholder", "value"], SN = { class: "dui-collapse dui-collapse-arrow dui-card-border" }, CN = { class: "dui-collapse-content" }, wN = /* @__PURE__ */ P({
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
		return (t, i) => (L(), R("aside", yN, [
			V(_j, {
				description: "Choose the generated Actor's name, portrait, and optional traits.",
				number: "3",
				title: "Identity and Traits"
			}, {
				default: N(() => [
					V(pN, {
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
					B("fieldset", bN, [i[4] ||= B("legend", { class: "dui-fieldset-legend" }, "NPC name", -1), B("input", {
						"aria-label": "NPC name",
						class: "dui-input dui-input-sm",
						placeholder: e.suggestedActorName,
						value: e.actorName,
						type: "text",
						onInput: r
					}, null, 40, xN)]),
					V(vN, {
						caption: `${e.optionalTraitOptions.length} from base statblock`,
						traits: e.optionalTraitOptions,
						title: "Optional Traits",
						onToggleTrait: i[2] ||= (e) => n("toggleOptionalTrait", e)
					}, null, 8, ["caption", "traits"]),
					V(vN, {
						caption: `${e.quickTraitOptions.length} configured`,
						traits: e.quickTraitOptions,
						title: "Quick Traits",
						onToggleTrait: i[3] ||= (e) => n("toggleQuickTrait", e)
					}, null, 8, ["caption", "traits"])
				]),
				_: 1
			}),
			V(LM, {
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
			B("details", SN, [i[5] ||= B("summary", { class: "dui-collapse-title" }, "Complete build details", -1), B("div", CN, [V(KM, {
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
}), TN = {
	key: 0,
	class: "dui-list app:gap-1"
}, EN = [
	"onDragenter",
	"onDragover",
	"onDrop"
], DN = ["onDragstart"], ON = {
	key: 0,
	class: "dui-avatar"
}, kN = { class: "app:size-10 app:rounded-md" }, AN = ["src"], jN = {
	key: 1,
	class: "dui-badge dui-badge-sm"
}, MN = { class: "dui-list-col-grow app:min-w-0" }, NN = { class: "app:flex app:min-w-0 app:flex-wrap app:items-center app:gap-1" }, PN = { class: "app:truncate" }, FN = {
	key: 0,
	class: "dui-badge dui-badge-info dui-badge-xs"
}, IN = {
	key: 1,
	class: "dui-badge dui-badge-info dui-badge-xs"
}, LN = { class: "app:flex app:min-w-0 app:items-center app:gap-2 app:text-xs" }, RN = { class: "app:shrink-0" }, zN = ["title"], BN = { class: "app:flex app:items-center app:justify-end app:gap-1" }, VN = { class: "app:flex app:items-center app:gap-1 app:text-xs" }, HN = ["value", "onInput"], UN = { class: "dui-join" }, WN = ["disabled", "onClick"], GN = ["disabled", "onClick"], KN = ["onClick"], qN = {
	key: 1,
	class: "dui-alert"
}, JN = /* @__PURE__ */ P({
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
		let n = e, r = t;
		function i(e) {
			return n.draggedCareerIndex === null || n.draggedCareerIndex === e || n.dragOverCareerIndex !== e ? null : n.draggedCareerIndex < e ? "after" : "before";
		}
		return (t, n) => (L(), z(_j, {
			description: "Careers are applied in this order. Drag rows or use the buttons to reorder them.",
			number: "2",
			title: "Career Queue"
		}, {
			default: N(() => [V(fy, {
				description: "Drop in build order. Drag rows to reorder.",
				title: "Drop Career Items",
				variant: "compact",
				onDropData: n[0] ||= (e) => r("careerDrop", e)
			}), e.careers.length ? (L(), R("ol", TN, [(L(!0), R(I, null, F(e.careers, (t, a) => (L(), R("li", {
				key: t.uuid,
				class: O(["dui-list-row app:grid-cols-[auto_auto_minmax(0,1fr)_auto] app:items-center app:gap-2 app:rounded-md app:px-2 app:py-2", {
					"app:border-t-2 app:border-dashed app:border-info": i(a) === "before",
					"app:border-b-2 app:border-dashed app:border-info": i(a) === "after",
					"app:opacity-60": e.draggedCareerIndex === a
				}]),
				onDragenter: Yo((e) => r("careerDragEnter", a), ["prevent"]),
				onDragover: (e) => r("careerDragOver", a, e),
				onDrop: (e) => r("careerDropOnRow", a, e)
			}, [
				B("span", {
					"aria-hidden": "true",
					class: O(["dui-badge dui-badge-ghost dui-badge-sm app:cursor-grab", { "app:cursor-grabbing": e.draggedCareerIndex === a }]),
					draggable: "true",
					title: "Drag to reorder",
					onDragend: n[1] ||= (e) => r("careerDragEnd"),
					onDragstart: (e) => r("careerDragStart", a, e)
				}, " Drag ", 42, DN),
				t.img ? (L(), R("div", ON, [B("div", kN, [B("img", {
					src: t.img,
					alt: "",
					class: "app:h-full app:w-full app:object-cover",
					height: "40",
					width: "40"
				}, null, 8, AN)])])) : (L(), R("span", jN, k(M(nM)(t.name)), 1)),
				B("div", MN, [B("div", NN, [B("strong", PN, k(t.name), 1), e.draggedCareerIndex === a ? (L(), R("span", FN, " Dragging ")) : i(a) ? (L(), R("span", IN, " Place " + k(i(a)), 1)) : U("", !0)]), B("div", LN, [B("span", RN, [H(k(t.careerGroup || "Career") + " ", 1), t.level === null ? U("", !0) : (L(), R(I, { key: 0 }, [H(" level " + k(t.level), 1)], 64))]), B("small", {
					class: "dui-badge dui-badge-ghost dui-badge-sm app:min-w-0 app:truncate",
					title: [
						`Characteristics: ${M(tM)(t.grants.characteristics)}`,
						`Skills: ${M(tM)(t.grants.skills)}`,
						`Talents: ${M(tM)(t.grants.talents)}`,
						`Trappings: ${M(tM)(t.grants.trappings)}`
					].join("\n")
				}, k(M(eM)(t)), 9, zN)])]),
				B("div", BN, [B("label", VN, [n[2] ||= H(" Qty ", -1), B("input", {
					class: "dui-input dui-input-xs app:w-14",
					value: t.quantity,
					min: "1",
					type: "number",
					onInput: (e) => r("careerQuantityInput", a, e)
				}, null, 40, HN)]), B("div", UN, [
					B("button", {
						class: "dui-join-item dui-btn dui-btn-xs",
						disabled: a === 0,
						title: "Move career earlier",
						type: "button",
						onClick: (e) => r("moveCareer", a, -1)
					}, " Up ", 8, WN),
					B("button", {
						class: "dui-join-item dui-btn dui-btn-xs",
						disabled: a === e.careers.length - 1,
						title: "Move career later",
						type: "button",
						onClick: (e) => r("moveCareer", a, 1)
					}, " Down ", 8, GN),
					B("button", {
						class: "dui-join-item dui-btn dui-btn-xs",
						type: "button",
						onClick: (e) => r("removeCareer", a)
					}, " Remove ", 8, KN)
				])])
			], 42, EN))), 128))])) : (L(), R("p", qN, "No careers queued yet."))]),
			_: 1
		}));
	}
}), YN = ["aria-busy"], XN = { class: "app:flex app:flex-wrap app:items-start app:justify-between app:gap-2" }, ZN = { class: "dui-badge dui-badge-outline" }, QN = {
	key: 0,
	class: "dui-fieldset"
}, $N = { class: "app:flex app:flex-wrap app:gap-2" }, eP = [
	"aria-label",
	"aria-pressed",
	"onClick"
], tP = {
	key: 1,
	"aria-live": "polite",
	class: "dui-alert dui-alert-info",
	role: "status"
}, nP = { class: "app:flex-1" }, rP = ["value"], iP = {
	key: 2,
	class: "dui-alert dui-alert-warning"
}, aP = {
	key: 3,
	class: "app:max-h-[26rem] app:overflow-y-auto app:pr-1"
}, oP = { class: "dui-list app:m-0 app:grid app:grid-cols-[repeat(auto-fill,minmax(8.5rem,1fr))] app:gap-3 app:p-0" }, sP = [
	"aria-label",
	"aria-pressed",
	"title",
	"onClick"
], cP = ["src"], lP = { class: "app:flex app:flex-wrap app:items-center app:justify-between app:gap-1" }, uP = {
	key: 0,
	class: "dui-badge dui-badge-success dui-badge-sm"
}, dP = { class: "app:text-sm" }, fP = {
	key: 4,
	class: "dui-alert"
}, pP = /* @__PURE__ */ P({
	__name: "PortraitGallery",
	props: {
		activePortraitSearchTerms: {},
		isLoadingPortraitCandidates: { type: Boolean },
		open: { type: Boolean },
		portraitCandidates: {},
		portraitSearchProgressLabel: {},
		portraitSearchProgressValue: {},
		portraitSearchTerms: {},
		selectedPortraitCandidateKey: {}
	},
	emits: [
		"close",
		"enableAllSearchTerms",
		"selectPortrait",
		"toggleSearchTerm"
	],
	setup(e, { emit: t }) {
		let n = e, r = t;
		function i(e) {
			return n.activePortraitSearchTerms.includes(e);
		}
		return (t, n) => (L(), z(GA, {
			"close-label": "Done",
			open: e.open,
			title: "Choose an NPC Portrait",
			wide: "",
			onClose: n[1] ||= (e) => r("close")
		}, {
			default: N(() => [B("section", {
				"aria-busy": e.isLoadingPortraitCandidates,
				class: "app:grid app:gap-3"
			}, [
				B("header", XN, [n[2] ||= B("div", null, [B("p", { class: "app:m-0" }, "Select a portrait to apply it immediately to this draft."), B("small", { class: "app:text-base-content/70" }, " Career and base Actor images remain available regardless of search terms. ")], -1), B("span", ZN, k(e.portraitCandidates.length) + " options ", 1)]),
				e.portraitSearchTerms.length ? (L(), R("fieldset", QN, [
					n[3] ||= B("legend", { class: "dui-fieldset-legend" }, "Match any enabled search term", -1),
					n[4] ||= B("p", { class: "dui-fieldset-label" }, " Turn off broad words that attract the wrong art. Results can remain when they match another enabled term. ", -1),
					B("div", $N, [(L(!0), R(I, null, F(e.portraitSearchTerms, (e) => (L(), R("button", {
						key: e,
						"aria-label": `${i(e) ? "Disable" : "Enable"} search term ${e}`,
						"aria-pressed": i(e),
						class: O(["dui-btn dui-btn-sm", i(e) ? "dui-btn-outline" : "dui-btn-ghost"]),
						type: "button",
						onClick: (t) => r("toggleSearchTerm", e)
					}, [B("span", null, k(e), 1), B("span", { class: O(["dui-badge dui-badge-sm", i(e) ? "dui-badge-success" : "dui-badge-ghost"]) }, k(i(e) ? "On" : "Off"), 3)], 10, eP))), 128)), e.activePortraitSearchTerms.length < e.portraitSearchTerms.length ? (L(), R("button", {
						key: 0,
						class: "dui-btn dui-btn-sm",
						type: "button",
						onClick: n[0] ||= (e) => r("enableAllSearchTerms")
					}, " Enable all ")) : U("", !0)])
				])) : U("", !0),
				e.isLoadingPortraitCandidates ? (L(), R("div", tP, [B("div", nP, [
					n[5] ||= B("strong", null, "Updating portrait results...", -1),
					B("progress", {
						"aria-label": "Portrait search progress",
						class: "dui-progress dui-progress-info app:w-full",
						value: e.portraitSearchProgressValue,
						max: "100"
					}, null, 8, rP),
					B("small", null, k(e.portraitSearchProgressLabel), 1)
				])])) : e.portraitSearchTerms.length && !e.activePortraitSearchTerms.length ? (L(), R("p", iP, " All search terms are off. Only the base Actor and queued Career portraits are shown. ")) : U("", !0),
				e.portraitCandidates.length ? (L(), R("div", aP, [B("ul", oP, [(L(!0), R(I, null, F(e.portraitCandidates, (t) => (L(), R("li", { key: t.key }, [B("button", {
					"aria-label": M(iM)(t),
					"aria-pressed": t.key === e.selectedPortraitCandidateKey,
					class: O(["dui-btn app:h-auto app:min-h-0 app:w-full app:flex-col app:items-stretch app:justify-start app:gap-2 app:overflow-hidden app:whitespace-normal app:p-2 app:text-left", t.key === e.selectedPortraitCandidateKey ? "dui-btn-active dui-btn-outline" : "dui-btn-ghost"]),
					title: M(rM)(t),
					type: "button",
					onClick: (e) => r("selectPortrait", t)
				}, [
					B("img", {
						alt: "",
						class: "app:aspect-square app:w-full app:rounded-box app:bg-base-300 app:object-cover",
						height: "192",
						loading: "lazy",
						src: t.img,
						width: "192"
					}, null, 8, cP),
					B("span", lP, [B("small", null, k(M(aM)(t.source)), 1), t.key === e.selectedPortraitCandidateKey ? (L(), R("span", uP, " Selected ")) : U("", !0)]),
					B("strong", dP, k(t.label), 1)
				], 10, sP)]))), 128))])])) : e.isLoadingPortraitCandidates ? U("", !0) : (L(), R("p", fP, " No portraits are available yet. Choose a base Actor or queue a Career to start the search. "))
			], 8, YN)]),
			_: 1
		}, 8, ["open"]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/errors.ts
function mP(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not resolve that Actor drop.";
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/useBaseActorSelection.ts
function hP(e, t) {
	let n = LA(), { baseActors: r, selectedBaseActorUuid: i } = oc(n), a = /* @__PURE__ */ j(""), o = W(() => {
		let e = a.value.trim().toLocaleLowerCase();
		return e ? r.value.filter((t) => t.name.toLocaleLowerCase().includes(e)) : r.value;
	}), s = W({
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
			t.value = mP(e);
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
function gP() {
	let { advancements: e, careers: t, finalPortraitPath: n, selectedBaseActor: r, trappings: i } = oc(LA()), a = W(() => {
		let e = 0;
		for (let n of t.value) e += n.quantity;
		return e;
	}), o = W(() => i.value.filter((e) => !e.ignored).length), s = W(() => e.value.filter((e) => e.current !== e.careerValue).length), c = W(() => i.value.filter((e) => !e.ignored && e.resolution.status === "fallback").length), l = W(() => i.value.filter((e) => e.ignored).length), u = W(() => e.value.filter((e) => e.kind === "skill" && jO(e.name) !== null).length), d = W(() => i.value.filter((e) => !e.ignored && e.resolution.status === "unresolved").length), f = W(() => {
		let e = [];
		return r.value || e.push("Choose a base Actor before building."), t.value.length || e.push("No Careers are queued."), u.value && e.push(`${u.value} skill rows still need a specialization.`), d.value && e.push(`${d.value} trappings have no item resolution yet.`), n.value || e.push("No portrait is selected."), e;
	});
	return {
		buildPreviewStatus: W(() => f.value.length ? "Review" : "Ready"),
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
function _P() {
	let e = LA(), { optionalTraits: t, quickTraits: n, traits: r } = oc(e), i = W(() => new Set(r.value.map((e) => vP(e.name)))), a = W(() => t.value.map(s)), o = W(() => {
		let e = new Set(t.value.map((e) => vP(e.name)));
		return n.value.filter((t) => !e.has(vP(t.name))).map(s);
	});
	function s(e) {
		return {
			...e,
			isSelected: i.value.has(vP(e.name))
		};
	}
	function c(t) {
		let n = i.value.has(vP(t.name));
		e.setQuickTraitSelected(t, !n);
	}
	function l(t) {
		let n = i.value.has(vP(t.name));
		e.setOptionalTraitSelected(t, !n);
	}
	return {
		displayedQuickTraitOptions: o,
		optionalTraitOptions: a,
		toggleOptionalTrait: l,
		toggleQuickTrait: c
	};
}
function vP(e) {
	return e.trim().toLocaleLowerCase();
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/useCareerQueue.ts
function yP() {
	let e = LA(), t = /* @__PURE__ */ j(null), n = /* @__PURE__ */ j(null);
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
var bP = new Set([
	"and",
	"any",
	"the",
	"with",
	"without",
	"of",
	"or",
	"npc"
]);
function xP(e) {
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
	}), TP(t);
}
function SP(e) {
	let t = [];
	e.selectedBaseActor && t.push(e.selectedBaseActor.species, e.selectedBaseActor.name);
	for (let n of e.careers) t.push(n.name, n.careerGroup);
	return NP(t.flatMap((e) => MP(e)).filter((e) => e.length >= 3 && !bP.has(e)));
}
function CP(e, t) {
	let n = new Set(t);
	return e.filter((e) => !n.has(e));
}
function wP(e, t) {
	let n = jP(e);
	return n ? t.some((e) => n.includes(e)) : !1;
}
function TP(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.img.trim().toLocaleLowerCase();
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
function EP(e) {
	let t = TP([...xP(e), ...e.assetCandidates]);
	return !e.selectedPortraitPath || t.some((t) => AP(t.img) === AP(e.selectedPortraitPath)) ? t : [{
		img: e.selectedPortraitPath,
		key: `selected:${e.selectedPortraitPath}`,
		label: "Selected portrait",
		source: "foundry-asset"
	}, ...t];
}
function DP(e) {
	let t = e.settings.searchCompendiumPortraitAssets || e.settings.searchFoundryPortraitAssets, n = !!e.selectedBaseActor || e.careers.length > 0;
	return t && n && e.searchTerms.length > 0;
}
function OP(e) {
	return e ? e.maxDirectories <= 0 ? e.phase === "ready" ? 100 : 4 : Math.min(100, Math.round(e.directoriesVisited / e.maxDirectories * 100)) : 0;
}
function kP(e) {
	return e ? e.phase === "ready" ? `${e.candidatesFound} options found` : e.phase === "filesystem" ? e.maxDirectories <= 0 ? `${e.directoriesVisited} directories - ${e.currentLocation}` : `${e.directoriesVisited}/${e.maxDirectories} directories - ${e.currentLocation}` : e.currentLocation : "";
}
function AP(e) {
	return e.trim().toLocaleLowerCase();
}
function jP(e) {
	return e.trim().toLocaleLowerCase().replaceAll(/[_-]/g, " ").replaceAll(/[(),.:;[\]]/g, " ").replaceAll(/\s+/g, " ");
}
function MP(e) {
	return jP(e).split(" ").filter(Boolean);
}
function NP(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/state/npc-builder/workflows/portrait-candidates-workflow.ts
function PP(e, t) {
	let n = LA(), { careers: r, disabledPortraitSearchTerms: i, finalPortraitPath: a, selectedBaseActor: o, selectedPortraitPath: s, settings: c } = oc(n), l = /* @__PURE__ */ j([]), u = /* @__PURE__ */ j(!1), d = /* @__PURE__ */ j(null), f = 0, p = W(() => EP({
		assetCandidates: l.value,
		careers: r.value,
		selectedBaseActor: o.value,
		selectedPortraitPath: s.value
	})), m = W(() => SP({
		careers: r.value,
		selectedBaseActor: o.value
	})), h = W(() => CP(m.value, i.value)), g = W(() => p.value.slice(0, 4)), _ = W(() => Math.max(0, p.value.length - g.value.length)), v = W(() => p.value.find((e) => e.img === a.value) ?? null), y = W(() => v.value?.key ?? ""), b = W(() => kP(d.value)), x = W(() => OP(d.value));
	Jn(m, (e) => {
		n.retainAvailablePortraitSearchTerms(e);
	}, { immediate: !0 }), Jn(() => [
		o.value?.uuid ?? "",
		c.value.searchCompendiumPortraitAssets,
		c.value.searchFoundryPortraitAssets,
		r.value.map((e) => e.uuid).join("|"),
		h.value.join("|")
	], (e, t, n) => {
		f += 1;
		let r = setTimeout(() => {
			w();
		}, 150);
		n(() => {
			clearTimeout(r);
		});
	}, { immediate: !0 });
	function S(e) {
		n.selectPortrait(e.img);
	}
	function C(e) {
		n.setPortraitSearchTermEnabled(e, i.value.includes(e));
	}
	function ee() {
		n.enableAllPortraitSearchTerms();
	}
	async function w() {
		let n = f + 1;
		if (f = n, !DP({
			careers: r.value,
			searchTerms: h.value,
			selectedBaseActor: o.value,
			settings: c.value
		})) {
			l.value = [], u.value = !1, d.value = null;
			return;
		}
		u.value = !0, l.value = [], d.value = {
			candidatesFound: 0,
			currentLocation: "Preparing portrait search",
			directoriesVisited: 0,
			maxDirectories: 0,
			phase: "world-documents"
		};
		try {
			let t = await e.listFoundryPortraitCandidates({
				includeCompendiumAssets: c.value.searchCompendiumPortraitAssets,
				includeFilePickerAssets: c.value.searchFoundryPortraitAssets,
				searchTerms: h.value
			}, (e) => {
				f === n && (d.value = e);
			});
			f === n && (l.value = t);
		} catch (e) {
			f === n && (t.value = FP(e));
		} finally {
			f === n && (u.value = !1);
		}
	}
	return {
		activePortraitSearchTerms: h,
		compactPortraitCandidates: g,
		enableAllPortraitSearchTerms: ee,
		hiddenPortraitCandidateCount: _,
		isLoadingPortraitCandidates: u,
		portraitCandidates: p,
		portraitSearchTerms: m,
		portraitSearchProgress: d,
		portraitSearchProgressLabel: b,
		portraitSearchProgressValue: x,
		selectedPortraitCandidate: v,
		selectedPortraitCandidateKey: y,
		selectPortrait: S,
		togglePortraitSearchTerm: C
	};
}
function FP(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish searching for portraits.";
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/usePortraitCandidates.ts
function IP(e, t) {
	let n = PP(e, t), r = /* @__PURE__ */ j(!1);
	function i(e) {
		n.selectPortrait(e);
	}
	return {
		...n,
		isPortraitGalleryOpen: r,
		selectPortraitFromGallery: i
	};
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab.vue?vue&type=script&setup=true&lang.ts
var LP = { class: "app:grid app:gap-3" }, RP = { class: "app:flex app:flex-wrap app:items-start app:gap-3" }, zP = { class: "app:flex app:min-w-72 app:flex-[2_1_34rem] app:flex-col app:gap-3" }, BP = /* @__PURE__ */ P({
	__name: "NpcBuilderBuildTab",
	props: {
		bridge: {},
		isLoadingActors: { type: Boolean },
		isLoadingBaseDraft: { type: Boolean }
	},
	emits: ["careerDrop"],
	setup(e, { emit: t }) {
		let n = e, r = t, { actorName: i, advancements: a, careers: o, estimatedNpcXp: s, finalActorName: c, finalCareer: l, finalPortraitPath: u, grantTotals: d, selectedBaseActor: f, selectedSpells: p, suggestedActorName: m, traits: h } = oc(LA()), g = /* @__PURE__ */ j(""), { actorFilter: _, filteredActors: v, handleActorDrop: y, selectedBaseActorSelectValue: b } = hP(n.bridge, g), { clearCareerDragState: x, draggedCareerIndex: S, dragOverCareerIndex: C, handleCareerDragOver: ee, handleCareerDragStart: w, handleCareerDrop: te, moveCareer: T, removeCareer: ne, setCareerQuantity: re, setDragOverCareerIndex: E } = yP(), { displayedQuickTraitOptions: ie, optionalTraitOptions: ae, toggleOptionalTrait: oe, toggleQuickTrait: se } = _P(), { buildPreviewStatus: D, buildPreviewWarnings: ce, careerItemCount: le, editedAdvanceCount: ue, fallbackTrappingCount: de, ignoredTrappingCount: fe, visibleTrappingCount: pe } = gP(), { activePortraitSearchTerms: me, compactPortraitCandidates: he, enableAllPortraitSearchTerms: ge, hiddenPortraitCandidateCount: _e, isLoadingPortraitCandidates: O, isPortraitGalleryOpen: ve, portraitCandidates: ye, portraitSearchProgress: be, portraitSearchProgressLabel: xe, portraitSearchProgressValue: Se, portraitSearchTerms: Ce, selectedPortraitCandidate: we, selectedPortraitCandidateKey: k, selectPortrait: Te, selectPortraitFromGallery: Ee, togglePortraitSearchTerm: De } = IP(n.bridge, g);
		return (t, n) => (L(), R("section", LP, [B("div", RP, [B("div", zP, [V(vM, {
			"actor-filter": M(_),
			"error-message": g.value,
			"filtered-actors": M(v),
			"is-loading-actors": e.isLoadingActors,
			"is-loading-base-draft": e.isLoadingBaseDraft,
			"selected-base-actor": M(f),
			"selected-base-actor-uuid": M(b),
			onActorDrop: M(y),
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
		]), V(JN, {
			careers: M(o),
			"drag-over-career-index": M(C),
			"dragged-career-index": M(S),
			onCareerDragEnd: M(x),
			onCareerDragEnter: M(E),
			onCareerDragOver: M(ee),
			onCareerDragStart: M(w),
			onCareerDrop: n[2] ||= (e) => r("careerDrop", e),
			onCareerDropOnRow: M(te),
			onCareerQuantityInput: M(re),
			onMoveCareer: M(T),
			onRemoveCareer: M(ne)
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
		])]), V(wN, {
			class: "app:min-w-72 app:flex-[1_1_21rem]",
			"actor-name": M(i),
			"advancement-count": M(a).length,
			"build-preview-status": M(D),
			"build-preview-warnings": M(ce),
			"career-item-count": M(le),
			"compact-portrait-candidates": M(he),
			"edited-advance-count": M(ue),
			"estimated-npc-xp": M(s),
			"fallback-trapping-count": M(de),
			"final-actor-name": M(c),
			"final-career": M(l),
			"final-portrait-path": M(u),
			"grant-totals": M(d),
			"hidden-portrait-candidate-count": M(_e),
			"ignored-trapping-count": M(fe),
			"is-loading-portrait-candidates": M(O),
			"optional-trait-options": M(ae),
			"portrait-candidates": M(ye),
			"portrait-search-progress": M(be),
			"portrait-search-progress-label": M(xe),
			"portrait-search-progress-value": M(Se),
			"quick-trait-options": M(ie),
			"selected-base-actor": M(f),
			"selected-portrait-candidate": M(we),
			"selected-portrait-candidate-key": M(k),
			"selected-spell-count": M(p).length,
			"suggested-actor-name": M(m),
			"trait-count": M(h).length,
			"visible-trapping-count": M(pe),
			onActorNameChange: n[3] ||= (e) => i.value = e,
			onOpenPortraitGallery: n[4] ||= (e) => ve.value = !0,
			onSelectPortrait: M(Te),
			onToggleOptionalTrait: M(oe),
			onToggleQuickTrait: M(se)
		}, null, 8, /* @__PURE__ */ "actor-name.advancement-count.build-preview-status.build-preview-warnings.career-item-count.compact-portrait-candidates.edited-advance-count.estimated-npc-xp.fallback-trapping-count.final-actor-name.final-career.final-portrait-path.grant-totals.hidden-portrait-candidate-count.ignored-trapping-count.is-loading-portrait-candidates.optional-trait-options.portrait-candidates.portrait-search-progress.portrait-search-progress-label.portrait-search-progress-value.quick-trait-options.selected-base-actor.selected-portrait-candidate.selected-portrait-candidate-key.selected-spell-count.suggested-actor-name.trait-count.visible-trapping-count.onSelectPortrait.onToggleOptionalTrait.onToggleQuickTrait".split("."))]), V(pP, {
			"active-portrait-search-terms": M(me),
			"is-loading-portrait-candidates": M(O),
			open: M(ve),
			"portrait-candidates": M(ye),
			"portrait-search-progress-label": M(xe),
			"portrait-search-progress-value": M(Se),
			"portrait-search-terms": M(Ce),
			"selected-portrait-candidate-key": M(k),
			onClose: n[5] ||= (e) => ve.value = !1,
			onEnableAllSearchTerms: M(ge),
			onSelectPortrait: M(Ee),
			onToggleSearchTerm: M(De)
		}, null, 8, [
			"active-portrait-search-terms",
			"is-loading-portrait-candidates",
			"open",
			"portrait-candidates",
			"portrait-search-progress-label",
			"portrait-search-progress-value",
			"portrait-search-terms",
			"selected-portrait-candidate-key",
			"onEnableAllSearchTerms",
			"onSelectPortrait",
			"onToggleSearchTerm"
		])]));
	}
});
//#endregion
//#region src/functions/npc-builder/settings/portrait-search-status.ts
function VP(e) {
	return e ? e.digDownActive ? e.digDownDeepFileSearchEnabled ? e.digDownCacheReady ? `Dig Down cache ready with ${e.digDownIndexedFileCount} indexed files.` : "Dig Down is active; its file cache is still building or unavailable." : "Dig Down is active, but its Deep File Search setting is disabled." : "Install and enable Dig Down to search local files for portrait suggestions." : "Checking Dig Down integration.";
}
//#endregion
//#region src/functions/npc-builder/settings/settings-payload.ts
function HP(e) {
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
function UP(e) {
	let t = LA(), { actorFolders: n, itemFolders: r, settings: i } = oc(t), a = /* @__PURE__ */ j(""), o = /* @__PURE__ */ j(""), s = /* @__PURE__ */ j(!1), c = /* @__PURE__ */ j(""), l = /* @__PURE__ */ j(null), u = /* @__PURE__ */ j(""), d = /* @__PURE__ */ j(""), f = W(() => l.value?.digDownActive ?? !0), p = W(() => VP(l.value));
	Jn(l, (e) => {
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
		await ee(async () => {
			let r = await n.ensureFolder(n.name);
			await n.refresh(), n.setFolderUuid(r.uuid), t.hydrateSettings(await e.saveSettings(te())), d.value = `Using folder "${r.name}".`;
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
		await ee(async () => {
			t.hydrateSettings(await e.saveSettings(te())), t.hydrateQuickTraits(await e.importRecommendedQuickTraits(i.value)), d.value = "Recommended quick traits imported.";
		});
	}
	async function S() {
		await ee(async () => {
			t.hydrateSettings(await e.saveSettings(te())), await w(), d.value = "Settings saved.";
		});
	}
	async function C() {
		await ee(async () => {
			t.hydrateSettings(await e.saveSettings(Ik())), await w(), d.value = "Settings reset to defaults.";
		});
	}
	async function ee(e) {
		s.value = !0, o.value = "", d.value = "";
		try {
			await e();
		} catch (e) {
			o.value = WP(e);
		} finally {
			s.value = !1;
		}
	}
	async function w() {
		let [n, r] = await Promise.all([e.listBaseActors(i.value), e.listQuickTraits(i.value)]);
		t.hydrateBaseActors(n), t.hydrateQuickTraits(r);
	}
	function te() {
		return HP({
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
function WP(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSettingsTab/FolderSetting.vue?vue&type=script&setup=true&lang.ts
var GP = { class: "dui-fieldset" }, KP = { class: "dui-fieldset-legend" }, qP = ["aria-label", "value"], JP = { value: "" }, YP = ["value"], XP = { class: "dui-fieldset" }, ZP = ["aria-label", "value"], QP = { class: "dui-card-actions" }, $P = ["disabled"], eF = /* @__PURE__ */ P({
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
		return (t, a) => (L(), R("section", null, [
			B("fieldset", GP, [B("legend", KP, k(e.folderLabel), 1), B("select", {
				"aria-label": e.folderLabel,
				class: "dui-select dui-select-sm",
				value: e.selectedUuid,
				onChange: r
			}, [B("option", JP, k(e.defaultOptionLabel), 1), (L(!0), R(I, null, F(e.folders, (e) => (L(), R("option", {
				key: e.uuid,
				value: e.uuid
			}, k(e.name), 9, YP))), 128))], 40, qP)]),
			B("fieldset", XP, [a[1] ||= B("legend", { class: "dui-fieldset-legend" }, "Create or use by name", -1), B("input", {
				"aria-label": `Create or use ${e.folderLabel} by name`,
				class: "dui-input dui-input-sm",
				value: e.createName,
				placeholder: "Folder name",
				type: "text",
				onInput: i
			}, null, 40, ZP)]),
			B("div", QP, [B("button", {
				class: "dui-btn dui-btn-sm",
				disabled: e.disabled || !e.createName.trim(),
				type: "button",
				onClick: a[0] ||= (e) => n("saveFolderName")
			}, k(e.buttonLabel ?? "Save Folder"), 9, $P)])
		]));
	}
}), tF = /* @__PURE__ */ P({
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
		return (t, r) => (L(), z(_j, {
			description: "Limit the source picker or choose where generated Actors are stored.",
			number: "1",
			title: "Actor Sources"
		}, {
			default: N(() => [V(eF, {
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
			]), V(eF, {
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
}), nF = { class: "dui-label" }, rF = ["checked"], iF = { class: "dui-label" }, aF = ["checked"], oF = { class: "dui-label" }, sF = ["checked"], cF = { class: "dui-label" }, lF = ["checked"], uF = { class: "dui-label" }, dF = ["checked"], fF = /* @__PURE__ */ P({
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
		return (t, i) => (L(), z(_j, {
			description: "Choose which base-only data is included in the editable draft.",
			number: "5",
			title: "Base Actor Features"
		}, {
			default: N(() => [
				B("label", nF, [B("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowCharacteristics,
					type: "checkbox",
					onChange: i[0] ||= (e) => n("allowCharacteristicsChange", r(e))
				}, null, 40, rF), i[5] ||= B("span", null, "Show base actor characteristics", -1)]),
				B("label", iF, [B("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowSkills,
					type: "checkbox",
					onChange: i[1] ||= (e) => n("allowSkillsChange", r(e))
				}, null, 40, aF), i[6] ||= B("span", null, "Show base actor skills", -1)]),
				B("label", oF, [B("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowTalents,
					type: "checkbox",
					onChange: i[2] ||= (e) => n("allowTalentsChange", r(e))
				}, null, 40, sF), i[7] ||= B("span", null, "Show base actor talents", -1)]),
				B("label", cF, [B("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowTrappings,
					type: "checkbox",
					onChange: i[3] ||= (e) => n("allowTrappingsChange", r(e))
				}, null, 40, lF), i[8] ||= B("span", null, "Show base actor trappings", -1)]),
				B("label", uF, [B("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowTraits,
					type: "checkbox",
					onChange: i[4] ||= (e) => n("allowTraitsChange", r(e))
				}, null, 40, dF), i[9] ||= B("span", null, "Show base actor traits", -1)])
			]),
			_: 1
		}));
	}
}), pF = { class: "dui-label" }, mF = ["checked"], hF = /* @__PURE__ */ P({
	__name: "MagicSpellSettings",
	props: { autoSelectGrantedSpells: { type: Boolean } },
	emits: ["autoSelectGrantedSpellsChange"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			let t = e.target;
			n("autoSelectGrantedSpellsChange", !!t?.checked);
		}
		return (t, n) => (L(), z(_j, {
			number: "6",
			title: "Magic and Spells"
		}, {
			default: N(() => [B("label", pF, [B("input", {
				class: "dui-toggle dui-toggle-sm",
				checked: e.autoSelectGrantedSpells,
				type: "checkbox",
				onChange: r
			}, null, 40, mF), n[0] ||= B("span", null, "Select detected Lore spells by default", -1)])]),
			_: 1
		}));
	}
}), gF = { class: "dui-label" }, _F = ["checked"], vF = /* @__PURE__ */ P({
	__name: "NamingSettings",
	props: { includeSpeciesInName: { type: Boolean } },
	emits: ["includeSpeciesInNameChange"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			let t = e.target;
			n("includeSpeciesInNameChange", !!t?.checked);
		}
		return (t, n) => (L(), z(_j, {
			number: "3",
			title: "Default Naming"
		}, {
			default: N(() => [B("label", gF, [B("input", {
				class: "dui-toggle dui-toggle-sm",
				checked: e.includeSpeciesInName,
				type: "checkbox",
				onChange: r
			}, null, 40, _F), n[0] ||= B("span", null, "Include species in suggested names", -1)])]),
			_: 1
		}));
	}
}), yF = { class: "dui-fieldset" }, bF = ["value"], xF = { class: "dui-label" }, SF = ["checked"], CF = { class: "dui-card-actions" }, wF = ["disabled"], TF = ["disabled"], EF = /* @__PURE__ */ P({
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
		return (t, a) => (L(), z(_j, {
			number: "7",
			title: "Career Choices and Saving"
		}, {
			default: N(() => [
				B("fieldset", yF, [a[3] ||= B("legend", { class: "dui-fieldset-legend" }, "Lower career handling", -1), B("select", {
					"aria-label": "Lower career handling",
					class: "dui-select dui-select-sm",
					value: e.lowerCareerMode,
					onChange: r
				}, [...a[2] ||= [
					B("option", { value: "prompt" }, "Prompt when candidates are found", -1),
					B("option", { value: "auto-add-all" }, "Automatically add all lower-tier matches", -1),
					B("option", { value: "never" }, "Only add dropped careers", -1)
				]], 40, bF)]),
				B("label", xF, [B("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.askForLinkedSkillSpecializations,
					type: "checkbox",
					onChange: i
				}, null, 40, SF), a[4] ||= B("span", null, "Resolve linked career skill repeats separately", -1)]),
				B("div", CF, [B("button", {
					class: "dui-btn dui-btn-primary dui-btn-sm",
					disabled: e.isBusy,
					type: "button",
					onClick: a[0] ||= (e) => n("saveSettings")
				}, " Save Settings ", 8, wF), B("button", {
					class: "dui-btn dui-btn-sm",
					disabled: e.isBusy,
					type: "button",
					onClick: a[1] ||= (e) => n("resetSettings")
				}, " Reset to Defaults ", 8, TF)])
			]),
			_: 1
		}));
	}
}), DF = { class: "dui-label" }, OF = ["checked", "disabled"], kF = {
	"aria-live": "polite",
	class: "dui-alert",
	role: "status"
}, AF = { class: "dui-label" }, jF = ["checked"], MF = { class: "dui-label" }, NF = ["checked"], PF = /* @__PURE__ */ P({
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
		return (t, n) => (L(), z(_j, {
			description: "Choose which local Foundry sources can suggest portraits.",
			number: "4",
			title: "Portrait Suggestions"
		}, {
			default: N(() => [
				B("label", DF, [B("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.searchFoundryPortraitAssets,
					disabled: !e.canUseDigDownPortraitSearch,
					type: "checkbox",
					onChange: r
				}, null, 40, OF), n[0] ||= B("span", null, "Search Dig Down's file cache for portrait suggestions", -1)]),
				B("p", kF, k(e.statusLabel), 1),
				B("label", AF, [B("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.searchCompendiumPortraitAssets,
					type: "checkbox",
					onChange: i
				}, null, 40, jF), n[1] ||= B("span", null, "Search Actor and Item compendiums for portrait suggestions", -1)]),
				B("label", MF, [B("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.searchWebPortraitAssets,
					disabled: "",
					type: "checkbox"
				}, null, 8, NF), n[2] ||= B("span", null, "Search the web for portrait suggestions (later)", -1)])
			]),
			_: 1
		}));
	}
}), FF = { class: "dui-card-actions" }, IF = ["disabled"], LF = /* @__PURE__ */ P({
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
		return (t, r) => (L(), z(_j, {
			description: "Items in this folder become one-click Trait choices on the Build tab.",
			number: "2",
			title: "Quick Traits"
		}, {
			default: N(() => [V(eF, {
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
			]), B("div", FF, [B("button", {
				class: "dui-btn dui-btn-sm",
				disabled: e.isBusy || !e.quickTraitFolderUuid,
				type: "button",
				onClick: r[3] ||= (e) => n("importRecommendedQuickTraits")
			}, " Import Recommended Quick Traits ", 8, IF)])]),
			_: 1
		}));
	}
}), RF = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, zF = {
	key: 1,
	"aria-live": "polite",
	class: "dui-alert dui-alert-info",
	role: "status"
}, BF = /* @__PURE__ */ P({
	__name: "SettingsMessages",
	props: {
		errorMessage: {},
		settingsMessage: {}
	},
	setup(e) {
		return (t, n) => e.errorMessage ? (L(), R("p", RF, k(e.errorMessage), 1)) : e.settingsMessage ? (L(), R("p", zF, k(e.settingsMessage), 1)) : U("", !0);
	}
}), VF = { class: "app:grid app:gap-3" }, HF = { class: "app:grid app:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] app:gap-3" }, UF = /* @__PURE__ */ P({
	__name: "NpcBuilderSettingsTab",
	props: { bridge: {} },
	setup(e) {
		let { actorFolders: t, baseActorFolderName: n, canUseDigDownPortraitSearch: r, errorMessage: i, importRecommendedQuickTraits: a, isBusy: o, itemFolders: s, outputActorFolderName: c, portraitSearchStatusLabel: l, quickTraitFolderName: u, refreshPortraitSearchAvailability: d, resetSettingsToDefaults: f, saveBaseActorFolderName: p, saveOutputActorFolderName: m, saveQuickTraitFolderName: h, saveSettings: g, settings: _, settingsMessage: v } = UP(e.bridge);
		return kr(() => {
			d();
		}), (e, d) => (L(), R("section", VF, [V(BF, {
			"error-message": M(i),
			"settings-message": M(v)
		}, null, 8, ["error-message", "settings-message"]), B("div", HF, [
			V(tF, {
				class: "app:col-span-full",
				"actor-folders": M(t),
				"base-actor-folder-name": M(n),
				"base-actor-folder-uuid": M(_).baseActorFolderUuid,
				"is-busy": M(o),
				"output-actor-folder-name": M(c),
				"output-actor-folder-uuid": M(_).outputActorFolderUuid,
				onBaseActorFolderNameChange: d[0] ||= (e) => n.value = e,
				onBaseActorFolderUuidChange: d[1] ||= (e) => M(_).baseActorFolderUuid = e,
				onOutputActorFolderNameChange: d[2] ||= (e) => c.value = e,
				onOutputActorFolderUuidChange: d[3] ||= (e) => M(_).outputActorFolderUuid = e,
				onSaveBaseActorFolderName: M(p),
				onSaveOutputActorFolderName: M(m)
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
			V(LF, {
				"is-busy": M(o),
				"item-folders": M(s),
				"quick-trait-folder-name": M(u),
				"quick-trait-folder-uuid": M(_).quickTraitFolderUuid,
				onImportRecommendedQuickTraits: M(a),
				onQuickTraitFolderNameChange: d[4] ||= (e) => u.value = e,
				onQuickTraitFolderUuidChange: d[5] ||= (e) => M(_).quickTraitFolderUuid = e,
				onSaveQuickTraitFolderName: M(h)
			}, null, 8, [
				"is-busy",
				"item-folders",
				"quick-trait-folder-name",
				"quick-trait-folder-uuid",
				"onImportRecommendedQuickTraits",
				"onSaveQuickTraitFolderName"
			]),
			V(vF, {
				"include-species-in-name": M(_).includeSpeciesInName,
				onIncludeSpeciesInNameChange: d[6] ||= (e) => M(_).includeSpeciesInName = e
			}, null, 8, ["include-species-in-name"]),
			V(PF, {
				"can-use-dig-down-portrait-search": M(r),
				"search-compendium-portrait-assets": M(_).searchCompendiumPortraitAssets,
				"search-foundry-portrait-assets": M(_).searchFoundryPortraitAssets,
				"search-web-portrait-assets": M(_).searchWebPortraitAssets,
				"status-label": M(l),
				onSearchCompendiumPortraitAssetsChange: d[7] ||= (e) => M(_).searchCompendiumPortraitAssets = e,
				onSearchFoundryPortraitAssetsChange: d[8] ||= (e) => M(_).searchFoundryPortraitAssets = e
			}, null, 8, [
				"can-use-dig-down-portrait-search",
				"search-compendium-portrait-assets",
				"search-foundry-portrait-assets",
				"search-web-portrait-assets",
				"status-label"
			]),
			V(fF, {
				"allow-characteristics": M(_).allowBaseActorCharacteristics,
				"allow-skills": M(_).allowBaseActorSkills,
				"allow-talents": M(_).allowBaseActorTalents,
				"allow-traits": M(_).allowBaseActorTraits,
				"allow-trappings": M(_).allowBaseActorTrappings,
				onAllowCharacteristicsChange: d[9] ||= (e) => M(_).allowBaseActorCharacteristics = e,
				onAllowSkillsChange: d[10] ||= (e) => M(_).allowBaseActorSkills = e,
				onAllowTalentsChange: d[11] ||= (e) => M(_).allowBaseActorTalents = e,
				onAllowTraitsChange: d[12] ||= (e) => M(_).allowBaseActorTraits = e,
				onAllowTrappingsChange: d[13] ||= (e) => M(_).allowBaseActorTrappings = e
			}, null, 8, [
				"allow-characteristics",
				"allow-skills",
				"allow-talents",
				"allow-traits",
				"allow-trappings"
			]),
			V(hF, {
				"auto-select-granted-spells": M(_).autoSelectGrantedSpells,
				onAutoSelectGrantedSpellsChange: d[14] ||= (e) => M(_).autoSelectGrantedSpells = e
			}, null, 8, ["auto-select-granted-spells"]),
			V(EF, {
				class: "app:col-span-full",
				"ask-for-linked-skill-specializations": M(_).askForLinkedSkillSpecializations,
				"is-busy": M(o),
				"lower-career-mode": M(_).lowerCareerMode,
				onAskForLinkedSkillSpecializationsChange: d[15] ||= (e) => M(_).askForLinkedSkillSpecializations = e,
				onLowerCareerModeChange: d[16] ||= (e) => M(_).lowerCareerMode = e,
				onResetSettings: M(f),
				onSaveSettings: M(g)
			}, null, 8, [
				"ask-for-linked-skill-specializations",
				"is-busy",
				"lower-career-mode",
				"onResetSettings",
				"onSaveSettings"
			])
		])]));
	}
});
//#endregion
//#region src/functions/npc-builder/magic-lore-resolution.ts
function WF(e) {
	return e.map((e) => `${e.kind}:${e.sourceName}:${e.rawLore}`).sort().join("|");
}
function GF(e) {
	return e.filter((e) => e.isAmbiguous);
}
function KF(e, t) {
	return { rows: GF(e).map((e) => ({
		grantLabel: JF(e),
		options: qk(e, t),
		rawLore: e.rawLore,
		resolutionKey: e.resolutionKey,
		selectedLore: "",
		sourceLabel: YF(e)
	})) };
}
function qF(e) {
	return e.kind === "arcane-magic" ? "Arcane Magic" : e.kind === "petty-magic" ? "Petty Magic" : "Spellcaster";
}
function JF(e) {
	return `${qF(e)} from ${e.sourceName}`;
}
function YF(e) {
	return e.source === "talent" ? "Talent" : "Trait";
}
//#endregion
//#region src/state/npc-builder/workflows/spells-workflow.ts
function XF(e) {
	let t = LA(), { magicGrants: n, spells: r, selectedSpells: i } = oc(t), a = /* @__PURE__ */ j(""), o = /* @__PURE__ */ j(!1), s = /* @__PURE__ */ j(!1), c = /* @__PURE__ */ j([]), l = /* @__PURE__ */ j(null), u = 0, d = W(() => GF(n.value)), f = W(() => n.value.length - d.value.length);
	Jn(() => WF(n.value), () => {
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
			u === r && (a.value = ZF(e));
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
				a.value = ZF(e);
			} finally {
				o.value = !1;
			}
		}
	}
	async function g() {
		a.value = "", await h(), l.value = KF(n.value, c.value);
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
			a.value = ZF(e);
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
function ZF(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that spell action.";
}
//#endregion
//#region src/view/apps/npc-builder/components/MagicLoreResolutionPromptContent.vue?vue&type=script&setup=true&lang.ts
var QF = { class: "dui-card-body" }, $F = { class: "dui-card-title" }, eI = { class: "dui-fieldset" }, tI = ["onUpdate:modelValue", "aria-label"], nI = ["value"], rI = { class: "dui-card-actions" }, iI = /* @__PURE__ */ P({
	__name: "MagicLoreResolutionPromptContent",
	props: { prompt: {} },
	emits: ["applyLores", "keepUnresolved"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (L(), R("section", null, [
			r[4] ||= B("p", null, " Choose concrete magic Lores for ambiguous grants before automatic spells are detected. Unresolved grants can still use manually dropped spells. ", -1),
			(L(!0), R(I, null, F(e.prompt.rows, (e) => (L(), R("section", {
				key: e.resolutionKey,
				class: "dui-card dui-card-border dui-card-sm"
			}, [B("div", QF, [
				B("h3", $F, k(e.grantLabel), 1),
				B("span", null, k(e.sourceLabel) + " - " + k(e.rawLore || "Any Lore"), 1),
				B("fieldset", eI, [r[3] ||= B("legend", { class: "dui-fieldset-legend" }, "Lore", -1), Vn(B("select", {
					"onUpdate:modelValue": (t) => e.selectedLore = t,
					"aria-label": `Lore for ${e.grantLabel}`,
					class: "dui-select dui-select-sm"
				}, [r[2] ||= B("option", { value: "" }, "Leave unresolved", -1), (L(!0), R(I, null, F(e.options, (e) => (L(), R("option", {
					key: e.key,
					value: e.value
				}, k(e.label) + k(e.wind && e.wind !== "None" ? ` (${e.wind})` : ""), 9, nI))), 128))], 8, tI), [[Wo, e.selectedLore]])])
			])]))), 128)),
			B("div", rI, [B("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: r[0] ||= (e) => n("keepUnresolved")
			}, " Keep Unresolved "), B("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: r[1] ||= (e) => n("applyLores")
			}, " Apply Lores ")])
		]));
	}
}), aI = {
	key: 0,
	class: "dui-alert"
}, oI = {
	key: 1,
	class: "dui-list"
}, sI = { class: "dui-list-col-grow" }, cI = { key: 0 }, lI = { key: 1 }, uI = {
	key: 2,
	class: "dui-card-actions"
}, dI = ["disabled"], fI = /* @__PURE__ */ P({
	__name: "MagicAccessPanel",
	props: {
		ambiguousGrantCount: {},
		isLoadingLoreOptions: { type: Boolean },
		magicGrants: {}
	},
	emits: ["resolveLores"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (L(), z(_j, {
			description: "Magic Talents and Traits determine which spell Lores are available.",
			number: "1",
			title: "Magic Access"
		}, {
			default: N(() => [e.magicGrants.length ? (L(), R("ul", oI, [(L(!0), R(I, null, F(e.magicGrants, (e) => (L(), R("li", {
				key: `${e.source}:${e.sourceName}:${e.rawLore}`,
				class: "dui-list-row"
			}, [B("div", sI, [
				B("strong", null, k(M(qF)(e)), 1),
				B("span", null, k(M(YF)(e)) + " - " + k(e.sourceName), 1),
				e.isAmbiguous ? (L(), R("small", cI, " Needs Lore resolution before automatic spells can be found. ")) : (L(), R("small", lI, " Lore: " + k(e.rawLore || e.normalizedLore), 1))
			])]))), 128))])) : (L(), R("p", aI, " No magic-enabling Talent or Trait is selected. ")), e.ambiguousGrantCount ? (L(), R("div", uI, [B("button", {
				class: "dui-btn dui-btn-sm",
				disabled: e.isLoadingLoreOptions,
				type: "button",
				onClick: r[0] ||= (e) => n("resolveLores")
			}, k(e.isLoadingLoreOptions ? "Loading Lores..." : "Resolve Lores"), 9, dI)])) : U("", !0)]),
			_: 1
		}));
	}
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSpellsTab/labels.ts
function pI(e) {
	return e.source === "custom" ? "Dropped" : e.sourceLabel;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSpellsTab/SpellSelectionPanel.vue?vue&type=script&setup=true&lang.ts
var mI = { class: "dui-card-actions" }, hI = ["disabled"], gI = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, _I = {
	key: 1,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, vI = {
	key: 2,
	class: "dui-list"
}, yI = [
	"aria-label",
	"checked",
	"onChange"
], bI = { class: "dui-list-col-grow" }, xI = {
	key: 0,
	class: "dui-avatar"
}, SI = ["src"], CI = ["onClick"], wI = {
	key: 3,
	class: "dui-alert"
}, TI = /* @__PURE__ */ P({
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
		return (t, r) => (L(), z(_j, {
			description: "Select detected Lore spells or drop specific Spell Items.",
			number: "2",
			title: "Spells"
		}, {
			default: N(() => [
				V(fy, {
					description: "Add a specific Spell item regardless of detected Lores.",
					title: "Drop Spell Items",
					onDropData: r[0] ||= (e) => n("spellDrop", e)
				}),
				B("div", mI, [B("button", {
					class: "dui-btn dui-btn-sm",
					disabled: e.isLoadingSpells || !e.resolvedGrantCount,
					type: "button",
					onClick: r[1] ||= (e) => n("refreshSpells")
				}, k(e.isLoadingSpells ? "Finding spells..." : "Refresh Spells"), 9, hI), B("span", null, k(e.selectedSpellCount) + " selected / " + k(e.spells.length) + " found", 1)]),
				e.errorMessage ? (L(), R("p", gI, k(e.errorMessage), 1)) : U("", !0),
				e.ambiguousGrantCount ? (L(), R("p", _I, k(e.ambiguousGrantCount) + " magic grant" + k(e.ambiguousGrantCount === 1 ? "" : "s") + " still need Lore resolution. You can still drop specific spells for now. ", 1)) : U("", !0),
				e.spells.length ? (L(), R("ul", vI, [(L(!0), R(I, null, F(e.spells, (e) => (L(), R("li", {
					key: e.key,
					class: "dui-list-row"
				}, [
					B("input", {
						"aria-label": `Use ${e.name}`,
						class: "dui-checkbox dui-checkbox-sm",
						checked: e.selected,
						type: "checkbox",
						onChange: (t) => n("spellSelectedChange", e, t)
					}, null, 40, yI),
					B("div", bI, [
						e.img ? (L(), R("div", xI, [B("div", null, [B("img", {
							src: e.img,
							alt: ""
						}, null, 8, SI)])])) : U("", !0),
						B("strong", null, k(e.name), 1),
						B("span", null, k(e.loreName || "Unknown Lore") + " · " + k(M(pI)(e)), 1)
					]),
					e.source === "custom" ? (L(), R("button", {
						key: 0,
						class: "dui-btn dui-btn-sm",
						type: "button",
						onClick: (t) => n("removeCustomSpell", e.key)
					}, " Remove ", 8, CI)) : U("", !0)
				]))), 128))])) : (L(), R("p", wI, " No matching spells found yet. Drop specific spells here, or resolve a non-ambiguous magic Lore. "))
			]),
			_: 1
		}));
	}
}), EI = /* @__PURE__ */ P({
	__name: "NpcBuilderSpellsTab",
	props: { bridge: {} },
	setup(e) {
		let { ambiguousGrants: t, confirmMagicLorePrompt: n, dismissMagicLorePrompt: r, errorMessage: i, handleSpellDrop: a, initialize: o, isLoadingLoreOptions: s, isLoadingSpells: c, loadDetectedSpells: l, magicGrants: u, openMagicLorePrompt: d, pendingMagicLorePrompt: f, removeCustomSpell: p, resolvedGrantCount: m, selectedSpells: h, setSpellSelected: g, spells: _ } = XF(e.bridge);
		kr(() => {
			o();
		});
		function v(e, t) {
			let n = t.target;
			n && g(e.key, n.checked);
		}
		return (e, o) => (L(), R("section", null, [
			V(GA, {
				open: M(f) !== null,
				title: "Resolve Magic Lores",
				onClose: M(r)
			}, {
				default: N(() => [M(f) ? (L(), z(iI, {
					key: 0,
					prompt: M(f),
					onApplyLores: M(n),
					onKeepUnresolved: M(r)
				}, null, 8, [
					"prompt",
					"onApplyLores",
					"onKeepUnresolved"
				])) : U("", !0)]),
				_: 1
			}, 8, ["open", "onClose"]),
			V(fI, {
				"ambiguous-grant-count": M(t).length,
				"is-loading-lore-options": M(s),
				"magic-grants": M(u),
				onResolveLores: M(d)
			}, null, 8, [
				"ambiguous-grant-count",
				"is-loading-lore-options",
				"magic-grants",
				"onResolveLores"
			]),
			o[0] ||= B("div", { class: "dui-divider" }, null, -1),
			V(TI, {
				"ambiguous-grant-count": M(t).length,
				"error-message": M(i),
				"is-loading-spells": M(c),
				"resolved-grant-count": M(m),
				"selected-spell-count": M(h).length,
				spells: M(_),
				onRefreshSpells: M(l),
				onRemoveCustomSpell: M(p),
				onSpellDrop: M(a),
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
}), DI = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, OI = { class: "dui-collapse-title" }, kI = { class: "dui-badge" }, AI = {
	key: 0,
	class: "dui-badge dui-badge-info"
}, jI = {
	key: 1,
	class: "dui-badge dui-badge-warning"
}, MI = { class: "dui-collapse-content" }, NI = { class: "dui-fieldset" }, PI = { class: "dui-fieldset-legend" }, FI = [
	"aria-label",
	"value",
	"onInput"
], II = {
	key: 0,
	class: "dui-fieldset"
}, LI = [
	"aria-label",
	"value",
	"onChange"
], RI = ["value"], zI = {
	key: 1,
	class: "dui-fieldset"
}, BI = [
	"aria-label",
	"value",
	"onInput"
], VI = ["onClick"], HI = {
	key: 1,
	class: "dui-alert"
}, UI = /* @__PURE__ */ P({
	__name: "NpcBuilderTraitsTab",
	props: {
		bridge: {},
		difficultyOptions: {}
	},
	setup(e) {
		let t = e, n = LA(), { traits: r } = oc(n), i = /* @__PURE__ */ j("");
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
		return (t, n) => (L(), z(_j, {
			description: "Open a Trait to review its WFRP configuration before building.",
			title: "Traits"
		}, {
			default: N(() => [
				V(fy, {
					description: "Add creature traits or NPC trait items.",
					title: "Drop Trait Items",
					onDropData: c
				}),
				i.value ? (L(), R("p", DI, k(i.value), 1)) : U("", !0),
				(L(!0), R(I, null, F(M(r), (t) => (L(), R("details", {
					key: t.key,
					class: "dui-collapse dui-collapse-arrow dui-card-border"
				}, [B("summary", OI, [
					B("strong", null, k(t.name), 1),
					B("span", kI, k(a(t)), 1),
					t.config.rollable ? (L(), R("span", AI, "Rollable")) : U("", !0),
					t.config.damage ? (L(), R("span", jI, "Damage")) : U("", !0)
				]), B("div", MI, [
					B("fieldset", NI, [B("legend", PI, k(t.config.damage ? "Damage" : "Specification"), 1), B("input", {
						"aria-label": `${t.config.damage ? "Damage" : "Specification"} for ${t.name}`,
						class: "dui-input dui-input-sm",
						value: t.config.specification,
						placeholder: "None",
						type: "text",
						onInput: (e) => s(t, "specification", e)
					}, null, 40, FI)]),
					t.config.rollable && !t.config.damage ? (L(), R("fieldset", II, [n[0] ||= B("legend", { class: "dui-fieldset-legend" }, "Difficulty", -1), B("select", {
						"aria-label": `Difficulty for ${t.name}`,
						class: "dui-select dui-select-sm",
						value: t.config.defaultDifficulty,
						onChange: (e) => s(t, "defaultDifficulty", e)
					}, [(L(!0), R(I, null, F(e.difficultyOptions, (e) => (L(), R("option", {
						key: e.value,
						value: e.value
					}, k(e.label), 9, RI))), 128))], 40, LI)])) : U("", !0),
					t.config.damage && t.config.dice ? (L(), R("fieldset", zI, [n[1] ||= B("legend", { class: "dui-fieldset-legend" }, "Dice", -1), B("input", {
						"aria-label": `Dice for ${t.name}`,
						class: "dui-input dui-input-sm",
						value: t.config.dice,
						placeholder: "Optional",
						type: "text",
						onInput: (e) => s(t, "dice", e)
					}, null, 40, BI)])) : U("", !0),
					B("button", {
						class: "dui-btn dui-btn-sm",
						type: "button",
						onClick: (e) => o(t)
					}, "Remove", 8, VI)
				])]))), 128)),
				M(r).length ? U("", !0) : (L(), R("p", HI, "No traits are selected yet."))
			]),
			_: 1
		}));
	}
}), WI = "__blank-item__";
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderTrappingsTab/resolution-labels.ts
function GI(e) {
	return e.source === "base" ? "Base" : e.source === "career" ? "Career" : "Custom";
}
function KI(e) {
	return e.resolution.status === "matched" ? `Matched ${e.resolution.selectedName}` : e.resolution.status === "fallback" ? `Blank ${e.resolution.selectedName || e.name}` : e.resolution.candidates.length ? "Choose a match" : "Needs resolution";
}
function qI(e) {
	return e.ignored ? "Ignored" : e.resolution.status === "matched" ? "Matched" : e.resolution.status === "fallback" ? "Blank item" : e.resolution.status === "ambiguous" || e.resolution.candidates.length ? "Choose" : "Needs resolution";
}
function JI(e) {
	let t = "dui-badge";
	return e.ignored ? [t, "dui-badge-ghost"] : e.resolution.status === "matched" ? [t, "dui-badge-success"] : e.resolution.status === "fallback" ? [t, "dui-badge-info"] : e.resolution.status === "ambiguous" || e.resolution.candidates.length ? [t, "dui-badge-warning"] : [t, "dui-badge-error"];
}
function YI(e) {
	return e.resolution.status === "fallback" ? WI : e.resolution.selectedCandidateUuid;
}
function XI(e) {
	return e.source === "career";
}
function ZI(e) {
	return e.resolution.candidates.length > 0 || XI(e);
}
function QI(e) {
	return e.resolution.searchTerms.length <= 1 ? "" : `Options: ${e.resolution.searchTerms.join(" / ")}`;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderTrappingsTab/TrappingsTable.vue?vue&type=script&setup=true&lang.ts
var $I = {
	key: 0,
	class: "dui-list"
}, eL = [
	"aria-label",
	"checked",
	"onChange"
], tL = { class: "dui-list-col-grow" }, nL = { key: 0 }, rL = {
	key: 1,
	class: "dui-fieldset"
}, iL = [
	"aria-label",
	"value",
	"onChange"
], aL = {
	key: 0,
	value: ""
}, oL = ["value"], sL = ["value"], cL = { key: 2 }, lL = { class: "dui-card-actions" }, uL = { class: "dui-fieldset" }, dL = [
	"aria-label",
	"value",
	"onInput"
], fL = ["onClick"], pL = {
	key: 1,
	class: "dui-alert"
}, mL = /* @__PURE__ */ P({
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
		return (t, r) => e.trappings.length ? (L(), R("ul", $I, [(L(!0), R(I, null, F(e.trappings, (e) => (L(), R("li", {
			key: e.key,
			class: "dui-list-row"
		}, [B("input", {
			"aria-label": `Use ${e.name}`,
			class: "dui-checkbox dui-checkbox-sm",
			checked: !e.ignored,
			type: "checkbox",
			onChange: (t) => n("useChange", e.key, t)
		}, null, 40, eL), B("div", tL, [
			B("strong", null, k(e.name), 1),
			B("span", null, k(e.resolution.selectedItemType || e.itemType || "trapping") + " · " + k(M(GI)(e)), 1),
			M(QI)(e) ? (L(), R("span", nL, k(M(QI)(e)), 1)) : U("", !0),
			B("span", { class: O(M(JI)(e)) }, k(M(qI)(e)), 3),
			M(ZI)(e) ? (L(), R("fieldset", rL, [r[0] ||= B("legend", { class: "dui-fieldset-legend" }, "Resolution", -1), B("select", {
				"aria-label": `Resolution for ${e.name}`,
				class: "dui-select dui-select-sm",
				value: M(YI)(e),
				onChange: (t) => n("resolutionChange", e.key, t)
			}, [
				e.resolution.candidates.length ? (L(), R("option", aL, "Choose match")) : U("", !0),
				(L(!0), R(I, null, F(e.resolution.candidates, (e) => (L(), R("option", {
					key: e.uuid,
					value: e.uuid
				}, k(e.name) + " (" + k(e.sourceLabel) + ") ", 9, oL))), 128)),
				M(XI)(e) ? (L(), R("option", {
					key: 1,
					value: M(WI)
				}, " Blank Item ", 8, sL)) : U("", !0)
			], 40, iL)])) : (L(), R("span", cL, k(M(KI)(e)), 1)),
			B("div", lL, [B("fieldset", uL, [r[1] ||= B("legend", { class: "dui-fieldset-legend" }, "Quantity", -1), B("input", {
				"aria-label": `Quantity for ${e.name}`,
				class: "dui-input dui-input-sm",
				value: e.quantity,
				min: "1",
				type: "number",
				onInput: (t) => n("quantityInput", e.key, t)
			}, null, 40, dL)]), e.source === "custom" ? (L(), R("button", {
				key: 0,
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: (t) => n("removeCustomTrapping", e.key)
			}, " Remove ", 8, fL)) : U("", !0)])
		])]))), 128))])) : (L(), R("p", pL, "No trappings are selected yet."));
	}
}), hL = { class: "dui-card-actions" }, gL = ["disabled"], _L = { key: 0 }, vL = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, yL = /* @__PURE__ */ P({
	__name: "NpcBuilderTrappingsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = LA(), { trappings: r } = oc(n), i = /* @__PURE__ */ j(""), a = /* @__PURE__ */ j(!1), o = W(() => r.value.filter((e) => !e.ignored && e.resolution.status === "unresolved"));
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
		return (e, t) => (L(), z(_j, {
			description: "Review the Items that will be embedded in the generated NPC.",
			title: "Trappings"
		}, {
			default: N(() => [
				V(fy, {
					description: "Add weapons, armour, containers, or any other item.",
					title: "Drop Trapping Items",
					onDropData: d
				}),
				B("div", hL, [B("button", {
					class: "dui-btn dui-btn-sm",
					disabled: a.value || !o.value.length,
					type: "button",
					onClick: u
				}, k(a.value ? "Resolving..." : "Resolve Trappings"), 9, gL), o.value.length ? (L(), R("span", _L, k(o.value.length) + " unresolved ", 1)) : U("", !0)]),
				i.value ? (L(), R("p", vL, k(i.value), 1)) : U("", !0),
				V(mL, {
					trappings: M(r),
					onQuantityInput: s,
					onRemoveCustomTrapping: M(n).removeCustomTrapping,
					onResolutionChange: l,
					onUseChange: c
				}, null, 8, ["trappings", "onRemoveCustomTrapping"])
			]),
			_: 1
		}));
	}
});
//#endregion
//#region src/functions/npc-builder/career-workflow/skill-resolution.ts
function bL(e, t) {
	let n = /* @__PURE__ */ new Map(), r = [], i = [];
	for (let a of e) {
		let e = /* @__PURE__ */ new Map();
		for (let o of MO(a.career.uuid, a.career.grants.skills)) {
			let s = jO(o.originalName);
			if (!s) continue;
			let c = NO(o.originalName), l = n.get(c) ?? [], u = e.get(c) ?? 0, d = t.enableLinkedSkillResolution && l[u] ? l[u] : "";
			if (e.set(c, u + 1), d) {
				r.push({
					linkedFromKey: d,
					resolutionKey: o.resolutionKey
				});
				continue;
			}
			i.push({
				alreadyGrantedSpecializations: TL(a.career.grants.skills, s.baseName),
				baseName: s.baseName,
				careerLabel: EL(a.career),
				isLoadingSuggestions: !1,
				occurrence: o.occurrence,
				options: s.options,
				originalName: s.originalName,
				resolvedSpecialization: DL(s),
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
function xL(e) {
	return e.resolvedSpecialization.trim() ? kO(e.baseName, e.resolvedSpecialization) : "";
}
function SL(e) {
	return e.occurrence > 0 ? `${e.originalName}, choice ${e.occurrence + 1}` : e.originalName;
}
function CL(e) {
	return e.options.length <= 1 && e.specialization.trim().toLocaleLowerCase() === "any";
}
function wL(e, t) {
	let n = NO(t);
	return e.alreadyGrantedSpecializations.some((e) => NO(e) === n);
}
function TL(e, t) {
	let n = NO(t), r = /* @__PURE__ */ new Set(), i = [];
	for (let t of e) {
		let e = AO(t);
		if (!e || NO(e.baseName) !== n) continue;
		let a = NO(e.specialization);
		r.has(a) || (r.add(a), i.push(e.specialization));
	}
	return i;
}
function EL(e) {
	return e.level === null ? e.name : `${e.name}, tier ${e.level}`;
}
function DL(e) {
	return e.specialization.trim().toLocaleLowerCase() === "any" ? "" : e.options[0] ?? "";
}
//#endregion
//#region src/view/apps/npc-builder/components/SkillResolutionPromptContent.vue?vue&type=script&setup=true&lang.ts
var OL = { class: "dui-card-body" }, kL = { class: "dui-card-title" }, AL = { class: "dui-badge" }, jL = { class: "dui-fieldset" }, ML = { class: "app:grid app:gap-1" }, NL = ["onUpdate:modelValue", "aria-label"], PL = ["value"], FL = [
	"onUpdate:modelValue",
	"aria-label",
	"placeholder"
], IL = {
	key: 0,
	class: "dui-label app:text-error"
}, LL = {
	key: 0,
	class: "dui-card-actions"
}, RL = { key: 0 }, zL = ["onClick"], BL = {
	key: 0,
	class: "dui-badge dui-badge-error dui-badge-xs"
}, VL = {
	key: 0,
	class: "dui-alert dui-alert-info"
}, HL = { class: "dui-card-actions" }, UL = /* @__PURE__ */ P({
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
		function r(e) {
			return !!e.resolvedSpecialization && wL(e, e.resolvedSpecialization);
		}
		return (t, i) => (L(), R("section", null, [
			i[5] ||= B("p", null, " Some Career skills need a specialization before they become concrete WFRP skills. Blank rows can be left unresolved and edited later. ", -1),
			(L(!0), R(I, null, F(e.prompt.rows, (t) => (L(), R("section", {
				key: t.resolutionKey,
				class: "dui-card dui-card-border dui-card-sm"
			}, [B("div", OL, [
				B("h3", kL, k(e.getSkillResolutionLabel(t)), 1),
				B("span", AL, k(t.careerLabel), 1),
				B("fieldset", jL, [
					i[4] ||= B("legend", { class: "dui-fieldset-legend" }, "Specialization", -1),
					B("label", ML, [i[3] ||= B("span", { class: "dui-label" }, "Choice", -1), t.options.length > 1 ? Vn((L(), R("select", {
						key: 0,
						"onUpdate:modelValue": (e) => t.resolvedSpecialization = e,
						"aria-label": `Specialization for ${e.getSkillResolutionLabel(t)}`,
						class: O(["dui-select dui-select-sm", { "dui-select-error": M(wL)(t, t.resolvedSpecialization) }])
					}, [i[2] ||= B("option", { value: "" }, "Leave unresolved", -1), (L(!0), R(I, null, F(t.options, (e) => (L(), R("option", {
						key: e,
						class: O({ "app:text-error": M(wL)(t, e) }),
						value: e
					}, k(e) + k(M(wL)(t, e) ? " — already granted" : ""), 11, PL))), 128))], 10, NL)), [[Wo, t.resolvedSpecialization]]) : Vn((L(), R("input", {
						key: 1,
						"onUpdate:modelValue": (e) => t.resolvedSpecialization = e,
						"aria-label": `Specialization for ${e.getSkillResolutionLabel(t)}`,
						class: O(["dui-input dui-input-sm", { "dui-input-error": M(wL)(t, t.resolvedSpecialization) }]),
						placeholder: t.suggestedSpecializations.length ? "Type or choose below" : t.specialization,
						type: "text"
					}, null, 10, FL)), [[Uo, t.resolvedSpecialization]])]),
					r(t) ? (L(), R("p", IL, " Already granted by this Career. ")) : U("", !0)
				]),
				e.usesFreeformSkillSpecialization(t) ? (L(), R("div", LL, [t.isLoadingSuggestions ? (L(), R("small", RL, "Finding known choices.")) : U("", !0), (L(!0), R(I, null, F(t.suggestedSpecializations, (e) => (L(), R("button", {
					key: `${t.resolutionKey}:${e}`,
					class: O(["dui-btn dui-btn-sm", { "dui-btn-error dui-btn-outline": M(wL)(t, e) }]),
					type: "button",
					onClick: (r) => n("chooseSkillSpecialization", t, e)
				}, [H(k(e) + " ", 1), M(wL)(t, e) ? (L(), R("span", BL, " Already granted ")) : U("", !0)], 10, zL))), 128))])) : U("", !0)
			])]))), 128)),
			e.prompt.linkedRows.length ? (L(), R("div", VL, k(e.prompt.linkedRows.length) + " linked skill specialization" + k(e.prompt.linkedRows.length === 1 ? "" : "s") + " will reuse earlier choices from this career chain. ", 1)) : U("", !0),
			B("div", HL, [B("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: i[0] ||= (e) => n("addWithoutResolving")
			}, " Add Without Resolving "), B("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: i[1] ||= (e) => n("applySpecializations")
			}, " Apply Specializations ")])
		]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/errors.ts
function WL(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderBuild.ts
function GL(e, t, n, r, i) {
	let a = LA(), { advancements: o, buildTraits: s, careers: c, finalActorName: l, finalPortraitPath: u, selectedBaseActor: d, selectedSpells: f, settings: p, trappings: m } = oc(a), h = /* @__PURE__ */ j(!1), g = W(() => !!(d.value && c.value.length && !h.value && !i.value));
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
			r.value = WL(e), n.value = "";
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
function KL(e) {
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
function qL(e) {
	return [{
		career: e,
		mode: "add-or-increment"
	}];
}
function JL(e) {
	return [...e.candidates.filter((t) => e.selectedUuids.includes(t.uuid)).map((e) => ({
		career: e,
		mode: "add-if-missing"
	})), {
		career: e.droppedCareer,
		mode: "add-or-increment"
	}];
}
function YL(e) {
	let t = e.candidates.filter((t) => e.selectedUuids.includes(t.uuid)).length;
	return t === 0 ? "" : `Added ${t} lower-tier career candidate${t === 1 ? "" : "s"}.`;
}
function XL(e, t) {
	return e?.selectedUuids.includes(t) ?? !1;
}
function ZL(e) {
	let { candidateUuid: t, isAlreadyQueued: n, prompt: r, selected: i } = e;
	return !r || n ? null : i ? [...new Set([...r.selectedUuids, t])] : r.selectedUuids.filter((e) => e !== t);
}
//#endregion
//#region src/state/npc-builder/workflows/skill-suggestions.ts
async function QL(e, t) {
	await Promise.all(t.rows.map(async (t) => {
		if (CL(t)) {
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
function $L(e) {
	let t = LA(), { careers: n, settings: r } = oc(t), i = /* @__PURE__ */ j(""), a = /* @__PURE__ */ j(""), o = /* @__PURE__ */ j(!1), s = /* @__PURE__ */ j(null), c = /* @__PURE__ */ j(null), l = W(() => KL(s.value));
	async function u(t) {
		a.value = "";
		try {
			await d(await e.resolveCareerDrop(t));
		} catch (e) {
			a.value = eR(e);
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
		m(qL(e), {
			enableLinkedSkillResolution: !1,
			message: ""
		});
	}
	function m(t, n) {
		let r = bL(t, n);
		if (r.rows.length) {
			c.value = r, QL(e, c.value);
			return;
		}
		b(t, n.message);
	}
	function h() {
		let e = s.value;
		e && (s.value = null, m(JL(e), {
			enableLinkedSkillResolution: !r.value.askForLinkedSkillSpecializations,
			message: YL(e)
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
			for (let n of e.rows) t.setSkillGrantResolution(n.resolutionKey, xL(n));
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
		return XL(s.value, e);
	}
	function C(e, t) {
		let n = ZL({
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
		getSkillResolutionLabel: SL,
		handleCareerDrop: u,
		isCareerQueued: x,
		isFindingLowerCareers: o,
		isLowerCareerSelected: S,
		lowerCareerCandidateGroups: l,
		pendingLowerCareerPrompt: s,
		pendingSkillResolutionPrompt: c,
		setLowerCareerSelected: C,
		usesFreeformSkillSpecialization: CL
	};
}
function eR(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderCareerDropWorkflow.ts
function tR(e) {
	return $L(e);
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderInitialData.ts
function nR(e, t) {
	let n = LA(), { selectedBaseActorUuid: r, settings: i } = oc(n), a = /* @__PURE__ */ j(!1), o = /* @__PURE__ */ j(!1), s = /* @__PURE__ */ j([]);
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
			t.value = WL(e);
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
			t.value = WL(e), n.clearBaseDraftData();
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
function rR() {
	return {
		inFlightNames: [],
		successfulNames: []
	};
}
function iR(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) n.kind === "skill" && !n.characteristicKey && !jO(n.name) && t.add(n.name);
	return [...t];
}
function aR(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) n.kind === "talent" && !n.talentMaximumKey && t.add(n.name);
	return [...t];
}
function oR(e, t) {
	let n = new Set([...t.inFlightNames, ...t.successfulNames]);
	return e.filter((e) => {
		let t = NO(e);
		return n.has(t) ? !1 : (n.add(t), !0);
	});
}
function sR(e, t) {
	return {
		...e,
		inFlightNames: uR([...e.inFlightNames, ...t])
	};
}
function cR(e, t) {
	let n = new Set(uR(t));
	return {
		inFlightNames: e.inFlightNames.filter((e) => !n.has(e)),
		successfulNames: uR([...e.successfulNames, ...n])
	};
}
function lR(e, t) {
	let n = new Set(uR(t));
	return {
		...e,
		inFlightNames: e.inFlightNames.filter((e) => !n.has(e))
	};
}
function uR(e) {
	return [...new Set([...e].map(NO).filter(Boolean))];
}
//#endregion
//#region src/state/npc-builder/workflows/metadata-lookups-workflow.ts
function dR(e) {
	let t = LA(), { advancements: n } = oc(t), r = /* @__PURE__ */ j(rR()), i = /* @__PURE__ */ j(rR()), a = /* @__PURE__ */ j(""), o = /* @__PURE__ */ j(""), s = W(() => iR(n.value)), c = W(() => aR(n.value)), l = W(() => [a.value, o.value].filter(Boolean).join(" ")), u = W(() => l.value ? "degraded" : r.value.inFlightNames.length + i.value.inFlightNames.length > 0 ? "loading" : "ready");
	Jn(s, (e) => {
		d(e);
	}, { immediate: !0 }), Jn(c, (e) => {
		f(e);
	}, { immediate: !0 });
	async function d(n) {
		if (!n.length) {
			a.value = "";
			return;
		}
		let i = oR(n, r.value);
		if (i.length) {
			r.value = sR(r.value, i), a.value = "";
			try {
				let n = await e.listSkillCharacteristics(i);
				r.value = cR(r.value, i), t.hydrateSkillCharacteristics(n);
			} catch (e) {
				r.value = lR(r.value, i), a.value = fR("skill characteristics", e);
			}
		}
	}
	async function f(n) {
		if (!n.length) {
			o.value = "";
			return;
		}
		let r = oR(n, i.value);
		if (r.length) {
			i.value = sR(i.value, r), o.value = "";
			try {
				let n = await e.listTalentMaximums(r);
				i.value = cR(i.value, r), t.hydrateTalentMaximums(n);
			} catch (e) {
				i.value = lR(i.value, r), o.value = fR("Talent maximums", e);
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
function fR(e, t) {
	return `Could not load ${e}.${t instanceof Error ? ` ${t.message}` : ""}`;
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderMetadataLookups.ts
function pR(e) {
	return dR(e);
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp.vue?vue&type=script&setup=true&lang.ts
var mR = ["aria-labelledby"], hR = { class: "dui-navbar app:sticky app:top-0 app:z-20 app:flex-wrap app:gap-2 app:bg-base-200 app:px-3 app:py-2" }, gR = { class: "dui-navbar-start app:min-w-64 app:flex-1" }, _R = { class: "app:min-w-0" }, vR = ["id"], yR = { class: "app:text-base-content/70" }, bR = { class: "dui-navbar-end app:w-auto app:shrink-0" }, xR = ["disabled"], SR = {
	"aria-label": "NPC Builder sections",
	class: "dui-tabs dui-tabs-box app:w-full app:overflow-x-auto",
	role: "tablist"
}, CR = [
	"id",
	"aria-controls",
	"aria-selected",
	"tabindex",
	"onClick",
	"onKeydown"
], wR = ["id", "aria-labelledby"], TR = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, ER = {
	key: 1,
	"aria-live": "polite",
	class: "dui-alert dui-alert-info",
	role: "status"
}, DR = {
	key: 2,
	"aria-live": "polite",
	class: "dui-alert dui-alert-warning",
	role: "status"
}, OR = /* @__PURE__ */ P({
	__name: "NpcBuilderApp",
	props: { bridge: {} },
	setup(e) {
		let t = e, { finalActorName: n, hasMagicAccess: r, selectedBaseActor: i, selectedSpells: a } = oc(LA()), o = /* @__PURE__ */ j("builder"), s = mr(), c = [
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
		], l = W(() => {
			let e = [...c];
			return (r.value || a.value.length) && e.push({
				id: "spells",
				label: "Spells"
			}), e.push({
				id: "settings",
				label: "Settings"
			}), e;
		});
		function u(e, t) {
			let n = l.value.length - 1, r = null;
			e.key === "ArrowLeft" ? r = t === 0 ? n : t - 1 : e.key === "ArrowRight" ? r = t === n ? 0 : t + 1 : e.key === "Home" ? r = 0 : e.key === "End" && (r = n), r !== null && (e.preventDefault(), o.value = l.value[r]?.id ?? o.value, (e.currentTarget?.parentElement?.querySelectorAll("[role=\"tab\"]")?.[r])?.focus());
		}
		let { buildMessage: d, chooseSkillSpecialization: f, confirmLowerCareerPrompt: p, confirmSkillResolutionPrompt: m, dismissLowerCareerPrompt: h, dismissSkillResolutionPrompt: g, errorMessage: _, getSkillResolutionLabel: v, handleCareerDrop: y, isCareerQueued: b, isFindingLowerCareers: x, isLowerCareerSelected: S, lowerCareerCandidateGroups: C, pendingLowerCareerPrompt: ee, pendingSkillResolutionPrompt: w, setLowerCareerSelected: te, usesFreeformSkillSpecialization: T } = tR(t.bridge), { buildNpc: ne, canBuild: re } = GL(t.bridge, o, d, _, x), { isLoadingActors: E, isLoadingBaseDraft: ie, traitDifficultyOptions: ae } = nR(t.bridge, _), { metadataLookupError: oe, metadataLookupStatus: se, retryMetadataLookups: D } = pR(t.bridge);
		return (e, r) => (L(), R("section", {
			"aria-labelledby": `${M(s)}-heading`,
			class: "app:flex app:min-h-full app:flex-col"
		}, [
			B("header", hR, [
				B("div", gR, [B("div", _R, [
					r[2] ||= B("span", { class: "dui-badge dui-badge-outline" }, "WFRP4e Customizer", -1),
					B("h1", {
						id: `${M(s)}-heading`,
						class: "app:m-0 app:text-xl app:leading-tight"
					}, " NPC Builder ", 8, vR),
					B("small", yR, [M(i) ? (L(), R(I, { key: 0 }, [H(k(M(i).name) + " base · " + k(M(n)), 1)], 64)) : (L(), R(I, { key: 1 }, [H("Choose a base character, then shape the final NPC.")], 64))])
				])]),
				B("div", bR, [B("button", {
					class: "dui-btn dui-btn-primary",
					disabled: !M(re),
					type: "button",
					onClick: r[0] ||= (...e) => M(ne) && M(ne)(...e)
				}, " Build NPC ", 8, xR)]),
				B("nav", SR, [(L(!0), R(I, null, F(l.value, (e, t) => (L(), R("button", {
					id: `${M(s)}-${e.id}-tab`,
					key: e.id,
					"aria-controls": `${M(s)}-panel`,
					"aria-selected": o.value === e.id,
					class: O(["dui-tab", { "dui-tab-active": o.value === e.id }]),
					role: "tab",
					tabindex: o.value === e.id ? 0 : -1,
					type: "button",
					onClick: (t) => o.value = e.id,
					onKeydown: (e) => u(e, t)
				}, k(e.label), 43, CR))), 128))])
			]),
			V(GA, {
				open: M(ee) !== null,
				title: "Add Lower-Tier Careers?",
				onClose: M(h)
			}, {
				default: N(() => [M(ee) ? (L(), z(VA, {
					key: 0,
					"candidate-groups": M(C),
					"is-career-queued": M(b),
					"is-lower-career-selected": M(S),
					prompt: M(ee),
					onAddDroppedOnly: M(h),
					onAddSelected: M(p),
					onLowerCareerSelected: M(te)
				}, null, 8, [
					"candidate-groups",
					"is-career-queued",
					"is-lower-career-selected",
					"prompt",
					"onAddDroppedOnly",
					"onAddSelected",
					"onLowerCareerSelected"
				])) : U("", !0)]),
				_: 1
			}, 8, ["open", "onClose"]),
			V(GA, {
				open: M(w) !== null,
				title: "Resolve Skill Specializations",
				onClose: M(g)
			}, {
				default: N(() => [M(w) ? (L(), z(UL, {
					key: 0,
					"get-skill-resolution-label": M(v),
					prompt: M(w),
					"uses-freeform-skill-specialization": M(T),
					onAddWithoutResolving: M(g),
					onApplySpecializations: M(m),
					onChooseSkillSpecialization: M(f)
				}, null, 8, [
					"get-skill-resolution-label",
					"prompt",
					"uses-freeform-skill-specialization",
					"onAddWithoutResolving",
					"onApplySpecializations",
					"onChooseSkillSpecialization"
				])) : U("", !0)]),
				_: 1
			}, 8, ["open", "onClose"]),
			B("section", {
				id: `${M(s)}-panel`,
				"aria-labelledby": `${M(s)}-${o.value}-tab`,
				class: "app:grid app:flex-1 app:content-start app:gap-3 app:p-3",
				role: "tabpanel"
			}, [
				M(_) ? (L(), R("p", TR, k(M(_)), 1)) : M(d) ? (L(), R("p", ER, k(M(d)), 1)) : U("", !0),
				M(se) === "degraded" ? (L(), R("div", DR, [
					B("span", null, k(M(oe)), 1),
					r[3] ||= B("span", null, "Advancement rows remain editable with reduced metadata.", -1),
					B("button", {
						class: "dui-btn dui-btn-sm",
						type: "button",
						onClick: r[1] ||= (...e) => M(D) && M(D)(...e)
					}, " Retry Metadata ")
				])) : U("", !0),
				o.value === "settings" ? (L(), z(UF, {
					key: 3,
					bridge: t.bridge
				}, null, 8, ["bridge"])) : o.value === "advancements" ? (L(), z($j, { key: 4 })) : o.value === "trappings" ? (L(), z(yL, {
					key: 5,
					bridge: t.bridge
				}, null, 8, ["bridge"])) : o.value === "traits" ? (L(), z(UI, {
					key: 6,
					bridge: t.bridge,
					"difficulty-options": M(ae)
				}, null, 8, ["bridge", "difficulty-options"])) : o.value === "spells" ? (L(), z(EI, {
					key: 7,
					bridge: t.bridge
				}, null, 8, ["bridge"])) : (L(), z(BP, {
					key: 8,
					bridge: t.bridge,
					"is-loading-actors": M(E),
					"is-loading-base-draft": M(ie),
					onCareerDrop: M(y)
				}, null, 8, [
					"bridge",
					"is-loading-actors",
					"is-loading-base-draft",
					"onCareerDrop"
				]))
			], 8, wR)
		], 8, mR));
	}
});
//#endregion
//#region src/functions/npc-builder/extract-career-grants.ts
function kR(e) {
	return {
		characteristics: AR(e),
		skills: jR(e),
		talents: NR(e, [["talents", "value"], ["talents"]]),
		trappings: NR(e, [["trappings", "value"], ["trappings"]])
	};
}
function AR(e) {
	let t = NR(e, [["characteristics", "value"], ["characteristics"]]);
	if (t.length) return t.map(MR);
	let n = Y(e, ["characteristics"]);
	if (!J(n)) return [];
	let r = [];
	for (let [e, t] of Object.entries(n)) t && r.push(MR(e));
	return FR(r);
}
function jR(e) {
	return NR(e, [["skills", "value"], ["skills"]], { preserveDuplicates: !0 });
}
function MR(e) {
	let t = e.trim().toLocaleLowerCase();
	if (Ac(t)) return Oc[t];
	let n = kc[t];
	return n ? Oc[n] : e.trim();
}
function NR(e, t, n = {}) {
	for (let r of t) {
		let t = zl(Y(e, r));
		if (t.length) return n.preserveDuplicates ? PR(t) : FR(t);
	}
	return [];
}
function PR(e) {
	return e.map((e) => e.trim()).filter(Boolean);
}
function FR(e) {
	return [...new Set(PR(e))].sort((e, t) => e.localeCompare(t));
}
//#endregion
//#region src/module/wfrp4e/career-summary.ts
function IR(e) {
	return {
		careerGroup: LR(e),
		grants: kR(e.system),
		img: e.img ?? "",
		level: RR(e),
		name: e.name,
		uuid: e.uuid
	};
}
function LR(e) {
	return X(e.system, ["careergroup", "value"]);
}
function RR(e) {
	let t = Y(e.system, ["level", "value"]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
//#endregion
//#region src/module/wfrp4e/career-index.ts
var zR = [
	"name",
	"type",
	"img",
	"system.careergroup.value",
	"system.characteristics",
	"system.level.value",
	"system.skills",
	"system.talents",
	"system.trappings"
], BR = /* @__PURE__ */ new Map(), VR = "idle", HR = null;
function UR() {
	return HR || (VR = "indexing", BR.clear(), HR = GR().then(() => {
		VR = "ready";
	}).catch((e) => {
		VR = "error", t("wfrp4e-customizer-apps | Career indexing failed.", e);
	}), HR);
}
async function WR(e) {
	return VR === "idle" && UR(), !e.careerGroup || e.level === null ? [] : [...BR.values()].filter((t) => XR(t, e)).sort(QR);
}
async function GR() {
	KR(), await ZE();
	for (let e of game.packs ?? []) {
		if (!JE(e) || !e.getIndex) continue;
		let t = await e.getIndex({ fields: zR });
		for (let n of XE(t)) {
			let t = qR(e, n);
			t && BR.set(t.uuid, t);
		}
		await ZE();
	}
}
function KR() {
	for (let e of game.items?.contents ?? []) e.type === "career" && BR.set(e.uuid, IR(e));
}
function qR(e, t) {
	let n = qE(e, t);
	if (t.type !== "career" || !t.name || !n) return null;
	let r = Y(t, ["system"]);
	return {
		careerGroup: JR(t),
		grants: kR(r),
		img: t.img ?? "",
		level: YR(t),
		name: t.name,
		uuid: n
	};
}
function JR(e) {
	let t = Y(e, [
		"system",
		"careergroup",
		"value"
	]);
	return typeof t == "string" ? t.trim() : "";
}
function YR(e) {
	let t = Y(e, [
		"system",
		"level",
		"value"
	]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
function XR(e, t) {
	return e.uuid !== t.uuid && e.level !== null && t.level !== null && e.level < t.level && ZR(e.careerGroup) === ZR(t.careerGroup);
}
function ZR(e) {
	return e.trim().toLocaleLowerCase();
}
function QR(e, t) {
	let n = e.level ?? 0, r = t.level ?? 0;
	return n === r ? e.name.localeCompare(t.name) : n - r;
}
//#endregion
//#region src/module/wfrp4e/skill-specializations.ts
var $R = [
	"name",
	"type",
	"system.characteristic.value"
], ez = /* @__PURE__ */ new Map(), tz = /* @__PURE__ */ new Map(), nz = /* @__PURE__ */ new Map(), rz = "idle", iz = null;
async function az(e) {
	let t = NO(e);
	return t ? (rz === "idle" && sz(), iz && await iz, [...ez.get(t) ?? []].sort((e, t) => e.localeCompare(t))) : [];
}
async function oz(e) {
	return rz === "idle" && sz(), iz && await iz, e.flatMap((e) => {
		let t = pz(e);
		return t ? [{
			...t,
			skillName: e
		}] : [];
	});
}
function sz() {
	return iz || (rz = "indexing", ez.clear(), tz.clear(), nz.clear(), iz = cz().then(() => {
		rz = "ready";
	}).catch((e) => {
		rz = "error", t("wfrp4e-customizer-apps | Skill specialization indexing failed.", e);
	}), iz);
}
async function cz() {
	mz(), await ZE();
	for (let e of game.packs ?? []) {
		if (!JE(e) || !e.getIndex) continue;
		let t = await e.getIndex({ fields: $R });
		for (let e of XE(t)) uz(e);
		await ZE();
	}
}
function lz(e) {
	if (e.type !== "skill") return;
	dz(e);
	let t = AO(e.name);
	if (!t) return;
	let n = NO(t.baseName), r = ez.get(n) ?? /* @__PURE__ */ new Set();
	r.add(t.specialization), ez.set(n, r);
}
function uz(e) {
	if (e.type !== "skill" || !e.name) return;
	fz(e);
	let t = AO(e.name);
	if (!t) return;
	let n = NO(t.baseName), r = ez.get(n) ?? /* @__PURE__ */ new Set();
	r.add(t.specialization), ez.set(n, r);
}
function dz(e) {
	let t = X(e.system, ["characteristic", "value"]);
	if (!Ac(t)) return;
	let n = {
		characteristicKey: t,
		characteristicName: Oc[t],
		skillName: e.name
	}, r = NO(e.name), i = NO(AO(e.name)?.baseName ?? e.name);
	tz.set(r, n), nz.has(i) || nz.set(i, n);
}
function fz(e) {
	let t = X(e, [
		"system",
		"characteristic",
		"value"
	]);
	if (!Ac(t) || !e.name) return;
	let n = {
		characteristicKey: t,
		characteristicName: Oc[t],
		skillName: e.name
	}, r = NO(e.name), i = NO(AO(e.name)?.baseName ?? e.name);
	tz.set(r, n), nz.has(i) || nz.set(i, n);
}
function pz(e) {
	let t = NO(e), n = NO(AO(e)?.baseName ?? e);
	return tz.get(t) ?? nz.get(n) ?? null;
}
function mz() {
	for (let e of game.items?.contents ?? []) lz(e);
}
//#endregion
//#region src/module/foundry/item-sources.ts
function hz(e, t) {
	return {
		img: "systems/wfrp4e/icons/blank.png",
		name: e,
		system: {},
		type: t
	};
}
function gz(e, t, n) {
	let r = e ? e.toObject() : hz(t, n);
	return delete r._id, r;
}
function _z(e, t, n) {
	return vz(e, t, n)[0] ?? null;
}
function vz(e, t, n) {
	return e.items?.contents.filter((e) => e.type === n && xz(e.name, t)) ?? [];
}
function yz(e, t, n) {
	return e.items?.contents.find((e) => t && e.uuid === t ? !0 : xz(e.name, n)) ?? null;
}
function bz(e, t) {
	return game.items?.contents.find((n) => t.includes(n.type) && xz(n.name, e)) ?? null;
}
function xz(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/wfrp4e/item-lookup.ts
async function Sz(e, t) {
	return await game.wfrp4e?.utility?.findItem?.(e, t) || bz(e, t);
}
//#endregion
//#region src/module/wfrp4e/talent-maximums.ts
async function Cz(e) {
	let t = [];
	for (let n of wz(e)) {
		let e = await Sz(n, ["talent"]);
		e && t.push({
			maximumFormula: X(e.system, ["max", "formula"]),
			maximumKey: X(e.system, ["max", "value"]),
			talentName: n
		});
	}
	return t;
}
function wz(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.trim().toLocaleLowerCase();
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
//#endregion
//#region src/functions/npc-builder/normalize-npc-builder-settings.ts
var Tz = {
	...Ik(),
	allowBaseActorCharacteristics: !0,
	allowBaseActorSkills: !0,
	allowBaseActorTalents: !0
};
function Ez(e) {
	let t = Ik();
	return Oz(e) ? {
		allowBaseActorCharacteristics: kz(e.allowBaseActorCharacteristics, Tz.allowBaseActorCharacteristics),
		allowBaseActorSkills: kz(e.allowBaseActorSkills, Tz.allowBaseActorSkills),
		allowBaseActorTalents: kz(e.allowBaseActorTalents, Tz.allowBaseActorTalents),
		allowBaseActorTraits: kz(e.allowBaseActorTraits, Tz.allowBaseActorTraits),
		allowBaseActorTrappings: kz(e.allowBaseActorTrappings, Tz.allowBaseActorTrappings),
		askForLinkedSkillSpecializations: kz(e.askForLinkedSkillSpecializations, Tz.askForLinkedSkillSpecializations),
		autoSelectGrantedSpells: kz(e.autoSelectGrantedSpells, Tz.autoSelectGrantedSpells),
		baseActorFolderUuid: Az(e.baseActorFolderUuid, Tz.baseActorFolderUuid),
		includeSpeciesInName: kz(e.includeSpeciesInName, Tz.includeSpeciesInName),
		lowerCareerMode: Dz(e.lowerCareerMode) ? e.lowerCareerMode : Tz.lowerCareerMode,
		outputActorFolderUuid: Az(e.outputActorFolderUuid, Tz.outputActorFolderUuid),
		quickTraitFolderUuid: Az(e.quickTraitFolderUuid, Tz.quickTraitFolderUuid),
		searchCompendiumPortraitAssets: kz(e.searchCompendiumPortraitAssets, Tz.searchCompendiumPortraitAssets),
		searchFoundryPortraitAssets: kz(e.searchFoundryPortraitAssets, Tz.searchFoundryPortraitAssets),
		searchWebPortraitAssets: kz(e.searchWebPortraitAssets, Tz.searchWebPortraitAssets)
	} : t;
}
function Dz(e) {
	return e === "auto-add-all" || e === "never" || e === "prompt";
}
function Oz(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function kz(e, t) {
	return typeof e == "boolean" ? e : t;
}
function Az(e, t) {
	return typeof e == "string" ? e : t;
}
//#endregion
//#region src/module/apps/npc-builder/settings.ts
var jz = Hw({
	defaultValue: Ik(),
	key: "npcBuilderSettings",
	name: "NPC Builder Settings",
	normalize: Ez
});
function Mz() {
	Uw(jz);
}
function Nz() {
	return Ww(jz);
}
async function Pz(e) {
	return await Gw(jz, e);
}
//#endregion
//#region src/module/foundry/embedded-items.ts
function Fz() {
	return {
		creates: [],
		deletes: [],
		updates: []
	};
}
async function Iz(e, t) {
	t.deletes.length && e.deleteEmbeddedDocuments && await e.deleteEmbeddedDocuments("Item", t.deletes), t.updates.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", t.updates), t.creates.length && await e.createEmbeddedDocuments("Item", t.creates);
}
//#endregion
//#region src/module/apps/npc-builder/xp-source-values.ts
function Lz(e, t) {
	return Il(e, [[
		"characteristics",
		t,
		"initial",
		"value"
	], [
		"characteristics",
		t,
		"initial"
	]]) + Il(e, [[
		"characteristics",
		t,
		"modifier",
		"value"
	], [
		"characteristics",
		t,
		"modifier"
	]]) + Il(e, [[
		"characteristics",
		t,
		"advances",
		"value"
	], [
		"characteristics",
		t,
		"advances"
	]]);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/advancements.ts
async function Rz(e, t) {
	let n = {}, r = Fz();
	for (let i of t) {
		let t = Math.floor(i.current);
		if (i.kind === "talent") {
			await Gz(e, i, t, r);
			continue;
		}
		if (t === 0) continue;
		let a = i.baseAdvances + t;
		if (i.kind === "characteristic") {
			Wz(n, i, a);
			continue;
		}
		let o = _z(e, i.name, i.kind);
		if (o) {
			r.updates.push({
				_id: o.id,
				"system.advances.value": a
			});
			continue;
		}
		let s = gz(await Sz(i.name, [i.kind]), i.name, i.kind);
		s.type = i.kind, Bl(s, [
			"system",
			"advances",
			"value"
		], a), r.creates.push(s);
	}
	Object.keys(n).length && await e.update(n), await Iz(e, r);
}
function zz(e) {
	let t = e.toObject().system, n = [];
	for (let [e, r] of Object.entries(Oc)) {
		let i = Il(t, [[
			"characteristics",
			e,
			"advances",
			"value"
		], [
			"characteristics",
			e,
			"advances"
		]]), a = Il(t, [[
			"characteristics",
			e,
			"modifier",
			"value"
		], [
			"characteristics",
			e,
			"modifier"
		]]), o = Il(t, [[
			"characteristics",
			e,
			"initial",
			"value"
		], [
			"characteristics",
			e,
			"initial"
		]], 0);
		n.push({
			baseAdvances: i,
			baseModifier: a,
			current: o + a + i,
			kind: "characteristic",
			name: r
		});
	}
	return n;
}
function Bz(e, t) {
	return t === "talent" ? Vz(e) : e.items?.contents.filter((e) => e.type === t).map((n) => Hz(e, n, t)) ?? [];
}
function Vz(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.items?.contents.filter((e) => e.type === "talent") ?? []) {
		let e = n.toObject().system, r = n.name.trim().toLocaleLowerCase(), i = Il(e, [["advances", "value"], ["advances"]]), a = t.get(r);
		if (a) {
			a.baseAdvances += i, a.current += i;
			continue;
		}
		t.set(r, {
			baseAdvances: i,
			current: i,
			kind: "talent",
			name: n.name,
			talentMaximumFormula: X(e, ["max", "formula"]),
			talentMaximumKey: X(e, ["max", "value"])
		});
	}
	return [...t.values()];
}
function Hz(e, t, n) {
	let r = t.toObject().system, i = Il(r, [["advances", "value"], ["advances"]]);
	if (n === "talent") return {
		baseAdvances: i,
		current: i,
		kind: n,
		name: t.name,
		talentMaximumFormula: X(r, ["max", "formula"]),
		talentMaximumKey: X(r, ["max", "value"])
	};
	let a = Il(r, [["modifier", "value"], ["modifier"]]), o = Uz(r), s = {
		baseAdvances: i,
		baseModifier: a,
		current: (o ? Lz(e.toObject().system, o) : 0) + i + a,
		kind: n,
		name: t.name
	};
	return o && (s.characteristicKey = o, s.characteristicName = Oc[o]), s;
}
function Uz(e) {
	let t = X(e, ["characteristic", "value"]);
	return Ac(t) ? t : void 0;
}
function Wz(e, t, n) {
	let r = kc[t.name.trim().toLocaleLowerCase()];
	r && (e[`system.characteristics.${r}.advances`] = n);
}
async function Gz(e, t, n, r) {
	let i = Math.max(0, t.baseAdvances + n), a = vz(e, t.name, "talent"), o = a[0] ?? await Sz(t.name, ["talent"]);
	r.deletes.push(...a.map((e) => e.id));
	for (let e = 0; e < i; e += 1) {
		let e = gz(o, t.name, "talent");
		e.type = "talent", Bl(e, [
			"system",
			"advances",
			"value"
		], 1), r.creates.push(e);
	}
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/config.ts
function Kz(e, t) {
	Bl(e, [
		"system",
		"specification",
		"value"
	], t.specification), t.rollable && !t.damage && Bl(e, [
		"system",
		"rollable",
		"defaultDifficulty"
	], t.defaultDifficulty), t.damage && t.dice && Bl(e, [
		"system",
		"rollable",
		"dice"
	], t.dice);
}
function qz(e, t) {
	return {
		_id: e,
		"system.specification.value": t.specification,
		...t.rollable && !t.damage ? { "system.rollable.defaultDifficulty": t.defaultDifficulty } : {},
		...t.damage && t.dice ? { "system.rollable.dice": t.dice } : {}
	};
}
function Jz(e) {
	return {
		..._O(),
		attackType: Qz(e.system, ["rollable", "attackType"]) || "melee",
		bonusCharacteristic: Qz(e.system, ["rollable", "bonusCharacteristic"]),
		damage: Rl(e.system, [["rollable", "damage"]]),
		defaultDifficulty: Qz(e.system, ["rollable", "defaultDifficulty"]) || "challenging",
		dice: Qz(e.system, ["rollable", "dice"]),
		rollable: Rl(e.system, [["rollable", "value"]]),
		skill: Qz(e.system, ["rollable", "skill"]),
		sl: Rl(e.system, [["rollable", "SL"]], !0),
		specification: Qz(e.system, ["specification", "value"])
	};
}
function Yz(e) {
	return Zz(e.system);
}
function Xz(e) {
	return Zz(e.system);
}
function Zz(e) {
	return Rl(e, [["disabled"], ["disabled", "value"]]);
}
function Qz(e, t) {
	let n = Y(e, t);
	return typeof n == "string" ? n.trim() : typeof n == "number" ? String(n) : "";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/apply.ts
async function $z(e, t) {
	let n = Fz();
	for (let r of t) {
		let t = r.source === "base" ? yz(e, r.sourceUuid, r.name) : _z(e, r.name, "trait");
		if (r.ignored) {
			t && n.deletes.push(t.id);
			continue;
		}
		if (t) {
			n.updates.push(qz(t.id, r.config));
			continue;
		}
		let i = gz(r.sourceUuid ? await eB(r.sourceUuid) : await Sz(r.name, ["trait"]), r.name, "trait");
		i.type = "trait", Bl(i, ["system", "disabled"], !1), Kz(i, r.config), n.creates.push(i);
	}
	await Iz(e, n);
}
async function eB(e) {
	let t = await fromUuid(e);
	return nE(t) ? t : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/actor-traits.ts
function tB(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && !Yz(e)).map(iB) ?? [];
}
function nB(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && Yz(e)).map(iB) ?? [];
}
function rB(e) {
	Array.isArray(e.items) && (e.items = e.items.filter((e) => {
		if (typeof e != "object" || !e) return !0;
		let t = e;
		return t.type !== "trait" || !Xz(t);
	}));
}
function iB(e) {
	return {
		config: Jz(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/difficulty-options.ts
var aB = [
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
async function oB() {
	let e = Y(game.wfrp4e?.config, ["difficultyLabels"]);
	if (!J(e)) return aB;
	let t = Object.entries(e).filter((e) => {
		let [t, n] = e;
		return !!t.trim() && typeof n == "string";
	}).map(([e, t]) => ({
		label: t,
		value: e
	}));
	return t.length ? t : aB;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/drops.ts
async function sB(e) {
	let t = oE(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Trait item here.");
	let n = aE(await fromUuid(t.uuid), "trait", "Drop a Foundry Trait item here.");
	return {
		config: Jz(n),
		ignored: !1,
		key: `custom:${n.uuid}`,
		name: n.name,
		source: "custom",
		sourceUuid: n.uuid
	};
}
//#endregion
//#region src/functions/npc-builder/recommended-quick-traits.ts
var cB = [
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
async function lB(e) {
	return gB(await hB(e, "Actor"));
}
async function uB(e) {
	return gB(await hB(e, "Item"));
}
function dB() {
	return game.folders.contents.filter((e) => e.type === "Actor").map(gB).sort((e, t) => e.name.localeCompare(t.name));
}
function fB() {
	return game.folders.contents.filter((e) => e.type === "Item").map(gB).sort((e, t) => e.name.localeCompare(t.name));
}
function pB(e) {
	return e ? game.folders.contents.find((t) => t.uuid === e) ?? null : null;
}
function mB(e) {
	let t = pB(e);
	return t?.type === "Item" ? t : null;
}
async function hB(e, t) {
	let n = e.trim();
	if (!n) throw Error("Enter a folder name first.");
	let r = game.folders.contents.find((e) => e.type === t && _B(e.name, n));
	if (r) return r;
	let i = await Folder.create({
		name: n,
		type: t
	});
	if (!i) throw Error("Foundry did not create the folder.");
	return i;
}
function gB(e) {
	return {
		name: e.name,
		uuid: e.uuid
	};
}
function _B(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/quick-traits.ts
async function vB(e) {
	let t = mB(e.quickTraitFolderUuid);
	if (!t) throw Error("Choose a Quick Traits item folder before importing traits.");
	let n = new Set(xB(e).map((e) => e.name.trim().toLocaleLowerCase()));
	for (let e of cB) {
		if (n.has(e.trim().toLocaleLowerCase())) continue;
		let r = gz(await Sz(e, ["trait"]), e, "trait");
		r.folder = t.id, r.type = "trait", await Item.create(r);
	}
	return ui.notifications?.info("Imported recommended quick traits."), await yB(e);
}
async function yB(e) {
	return xB(e).map(SB).sort((e, t) => e.name.localeCompare(t.name));
}
function bB(e, t) {
	return t.quickTraitFolderUuid ? e.folder?.uuid === t.quickTraitFolderUuid : !1;
}
function xB(e) {
	return game.items?.contents.filter((t) => t.type === "trait" && bB(t, e)) ?? [];
}
function SB(e) {
	return {
		config: Jz(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/trappings.ts
var CB = [
	"ammunition",
	"armour",
	"container",
	"money",
	"trapping",
	"weapon"
];
async function wB(e, t) {
	let n = Fz();
	for (let r of t) {
		let t = r.source === "base" ? yz(e, r.sourceUuid, r.name) : null;
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
		let i = await AB(r), a = r.resolution.selectedItemType || r.itemType || "trapping", o = gz(i, r.resolution.selectedName || r.name, a);
		o.type = a || o.type || "trapping", Bl(o, [
			"system",
			"quantity",
			"value"
		], r.quantity), n.creates.push(o);
	}
	await Iz(e, n);
}
async function TB(e) {
	return yA(e, await jB());
}
async function EB(e) {
	let t = oE(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Item here.");
	let n = iE(await fromUuid(t.uuid), "Drop a Foundry Item here.");
	return {
		ignored: !1,
		itemType: n.type,
		key: `custom:${n.uuid}`,
		name: n.name,
		quantity: OB(n),
		resolution: _A({
			itemType: n.type,
			name: n.name,
			uuid: n.uuid
		}),
		source: "custom",
		sourceUuid: n.uuid
	};
}
function DB(e) {
	let t = kB();
	return e.items?.contents.filter((e) => t.includes(e.type)).map((e) => ({
		itemType: e.type,
		name: e.name,
		quantity: OB(e),
		uuid: e.uuid
	})) ?? [];
}
function OB(e) {
	return Il(e.system, [["quantity", "value"], ["quantity"]]) || 1;
}
function kB() {
	let e = Fl(game.wfrp4e?.config, ["trappingItems"]);
	return e.length ? e : CB;
}
async function AB(e) {
	if (e.sourceUuid) {
		let t = await fromUuid(e.sourceUuid);
		return nE(t) ? t : null;
	}
	if (e.resolution.selectedCandidateUuid) {
		let t = await fromUuid(e.resolution.selectedCandidateUuid);
		return nE(t) ? t : null;
	}
	return e.resolution.status === "fallback" ? null : await Sz(e.resolution.selectedName || e.name, kB());
}
async function jB() {
	let e = [], t = kB();
	for (let n of game.items?.contents ?? []) t.includes(n.type) && e.push(NB(n, "World"));
	for (let n of game.packs ?? []) {
		if (!JE(n)) continue;
		let r = await MB(n, t);
		if (r.length) {
			e.push(...r);
			continue;
		}
		if (!n.getDocuments) continue;
		let i = await n.getDocuments();
		for (let r of i) nE(r) && t.includes(r.type) && e.push(NB(r, n.title ?? "Compendium"));
	}
	return e;
}
async function MB(e, t) {
	return e.getIndex ? XE(await e.getIndex({ fields: ["name", "type"] })).filter((n) => !!(n.name && n.type && qE(e, n) && t.includes(n.type))).map((t) => ({
		itemType: t.type ?? "trapping",
		name: t.name ?? "",
		sourceLabel: e.title ?? "Compendium",
		uuid: qE(e, t)
	})) : [];
}
function NB(e, t) {
	return {
		itemType: e.type,
		name: e.name,
		sourceLabel: t,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/actors.ts
function PB(e) {
	return game.actors.contents.filter((t) => BB(t, e)).map(LB);
}
async function FB(e) {
	let t = rE(await fromUuid(e));
	return {
		advancements: [
			...zz(t),
			...Bz(t, "skill"),
			...Bz(t, "talent")
		],
		optionalTraits: nB(t),
		traits: tB(t),
		trappings: DB(t)
	};
}
async function IB(e) {
	let t = oE(e);
	if (t.type !== "Actor") throw Error("Drop a Foundry Actor here.");
	let n = null;
	return t.uuid ? n = await fromUuid(t.uuid) : t.id && (n = game.actors.get(t.id)), LB(rE(n));
}
function LB(e) {
	return {
		img: e.img ?? "",
		name: e.name,
		prototypeTokenImg: zB(e),
		species: RB(e),
		type: e.type,
		uuid: e.uuid
	};
}
function RB(e) {
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
function zB(e) {
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
function BB(e, t) {
	return t.baseActorFolderUuid ? e.folder?.uuid === t.baseActorFolderUuid : !0;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/careers.ts
async function VB(e) {
	let t = oE(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a WFRP Career item here.");
	return IR(aE(await fromUuid(t.uuid), "career", "Drop a WFRP Career item here."));
}
async function HB(e) {
	let t = [];
	for (let n of e) {
		let e = aE(await fromUuid(n.uuid), "career", `Career “${n.name}” is no longer available.`);
		for (let r = 0; r < TO(n.quantity); r += 1) {
			let n = e.toObject();
			delete n._id, Bl(n, [
				"system",
				"complete",
				"value"
			], !0), Bl(n, [
				"system",
				"current",
				"value"
			], !1), t.push(n);
		}
	}
	return t;
}
async function UB(e, t) {
	t.length && await e.createEmbeddedDocuments("Item", t);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/constants.ts
var WB = "spell", GB = new Set(Bk), KB = new Set(Vk);
async function qB() {
	return JB().map((e) => ({
		category: Kk(e.key),
		key: e.key,
		label: e.name,
		value: e.name,
		wind: e.wind
	})).sort((e, t) => e.category === t.category ? e.label.localeCompare(t.label) : e.category.localeCompare(t.category));
}
function JB() {
	let e = Y(game.wfrp4e?.config, ["magicLores"]), t = Y(game.wfrp4e?.config, ["magicWind"]), n = [];
	if (!J(e)) return [QB()];
	for (let [r, i] of Object.entries(e)) {
		let e = aV(i) || r, a = iV(t, r);
		n.push({
			key: r,
			matchTerms: rV(r, e, a),
			name: e,
			wind: a
		});
	}
	return n.some((e) => e.key === "petty") || n.push(QB()), n;
}
function YB(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) {
		if (r.isAmbiguous) continue;
		if (r.kind === "petty-magic") {
			let e = nV("petty magic", t);
			e && n.set(e.key, e);
			continue;
		}
		let e = nV(r.rawLore, t);
		e && n.set(e.key, e);
	}
	return [...n.values()];
}
function XB(e, t) {
	let n = [...ZB(e.system), tV(e.name)].filter(Boolean);
	for (let e of n) {
		let n = eV(e, t);
		if (n) return n;
		let r = nV(e, t);
		if (r) return r;
	}
	return null;
}
function ZB(e) {
	return [
		...zl(Y(e, ["lore", "value"])),
		...zl(Y(e, ["lore"])),
		...zl(Y(e, ["magicLore", "value"])),
		...zl(Y(e, ["magicLore"])),
		...zl(Y(e, ["category", "value"])),
		...zl(Y(e, [
			"system",
			"lore",
			"value"
		])),
		...zl(Y(e, ["system", "lore"])),
		...zl(Y(e, ["system.lore.value"])),
		...zl(Y(e, ["system.lore"]))
	];
}
function QB() {
	return {
		key: "petty",
		matchTerms: ["petty", "petty magic"],
		name: "Petty Magic",
		wind: ""
	};
}
function $B(e) {
	let t = e.trim() || "Unknown Lore";
	return {
		key: Uk(t) || "unknown",
		matchTerms: [t],
		name: t,
		wind: ""
	};
}
function eV(e, t) {
	let n = Uk(e);
	return n === "lore" ? t.find((e) => e.key !== "petty") ?? null : n === "the eight winds" || n === "eight winds" ? t.find((e) => GB.has(e.key)) ?? null : n === "dark lore" ? t.find((e) => KB.has(e.key)) ?? null : null;
}
function tV(e) {
	return /\(([^)]+)\)\s*$/.exec(e)?.[1]?.trim() ?? "";
}
function nV(e, t) {
	let n = Uk(e);
	return n ? t.find((e) => e.matchTerms.some((e) => Uk(e) === n)) ?? null : null;
}
function rV(e, t, n) {
	let r = /* @__PURE__ */ new Set(), i = Uk(e), a = Uk(t);
	for (let i of [
		e,
		t,
		n
	]) i.trim() && r.add(i.trim());
	return (i === "petty" || a === "petty") && r.add("Petty Magic"), (i === "shadow" || a === "shadow") && r.add("Shadows"), t && !/^lore of /i.test(t) && r.add(`Lore of ${t}`), [...r];
}
function iV(e, t) {
	return J(e) ? aV(e[t]) : "";
}
function aV(e) {
	return typeof e == "string" ? e.trim() : J(e) ? X(e, ["name"]) || X(e, ["label"]) || X(e, ["value"]) : "";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/debug.ts
var oV = "[WFRP Customizer Apps][Spell Lookup]";
function sV(t, n) {
	if (n) {
		e(`${oV} ${t}`, n);
		return;
	}
	e(`${oV} ${t}`);
}
function cV(e, n) {
	t(`${oV} ${e}`, n);
}
function lV(e) {
	return [
		e.title ?? "",
		e.collection ?? "",
		X(e, ["metadata", "type"]),
		X(e, ["metadata", "documentName"]),
		e.documentName
	].filter(Boolean).join(" | ");
}
function uV(e) {
	return {
		loreTerms: ZB(e.system),
		name: e.name,
		sourceLabel: e.sourceLabel,
		uuid: e.uuid
	};
}
function dV(e) {
	return typeof e == "string" ? {
		kind: "uuid-string",
		value: e
	} : J(e) ? {
		documentName: X(e, ["documentName"]),
		hasSystem: J(Y(e, ["system"])),
		loreTerms: ZB(Y(e, ["system"])),
		name: X(e, ["name"]),
		type: X(e, ["type"]),
		uuid: X(e, ["uuid"])
	} : { kind: typeof e };
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/spell-input-conversion.ts
function fV(e, t) {
	return {
		img: e.img ?? "",
		name: e.name,
		sourceLabel: t,
		system: e.system,
		uuid: e.uuid
	};
}
function pV(e) {
	return /^item\./i.test(e.uuid) ? "World" : mV(e.uuid, "WFRP Item Lookup");
}
function mV(e, t) {
	let n = /^Compendium\.([^.]+\.[^.]+)\./.exec(e)?.[1];
	return n ? [...game.packs ?? []].find((e) => e.collection === n)?.title ?? n : t;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/compendium-spell-inputs.ts
async function hV(e) {
	if (sV("Compendium index scan start", { pack: lV(e) }), !e.getIndex) return sV("Compendium has no index; loading documents", { pack: lV(e) }), await vV(e);
	let t = XE(await e.getIndex({ fields: [
		"name",
		"type",
		"img",
		"system.lore.value"
	] }));
	if (sV("Compendium index loaded", {
		entries: t.length,
		pack: lV(e),
		samples: t.slice(0, 5).map((t) => ({
			hasLoreTerms: ZB(t).length > 0,
			name: t.name,
			type: t.type,
			uuid: qE(e, t)
		}))
	}), !t.length) return sV("Compendium index empty; loading documents", { pack: lV(e) }), await vV(e);
	let n = t.filter(_V);
	sV("Compendium index spell candidates", {
		pack: lV(e),
		spellEntries: n.length
	});
	let r = n.filter((e) => e.name).map((t) => bV(e, t));
	return r.length || !yV(e) ? r : await vV(e);
}
function gV(e) {
	return JE(e);
}
function _V(e) {
	return e.type === "spell" ? !0 : !!(e.name && (ZB(e).length || tV(e.name)));
}
async function vV(e) {
	if (!e.getDocuments) return sV("Compendium has no document loader", { pack: lV(e) }), [];
	sV("Compendium document load start", { pack: lV(e) });
	let t = await e.getDocuments(), n = t.filter((e) => nE(e) && e.type === "spell");
	return sV("Compendium document load complete", {
		documents: t.length,
		pack: lV(e),
		spellDocuments: n.length,
		spellSamples: n.slice(0, 5).map((e) => ({
			loreTerms: ZB(e.system),
			name: e.name,
			uuid: e.uuid
		}))
	}), n.map((t) => fV(t, e.title ?? "Compendium"));
}
function yV(e) {
	return e.collection === "wfrp4e-core.items" || e.collection === "wfrp4e-wom.items";
}
function bV(e, t) {
	return {
		img: t.img ?? t.thumb ?? "",
		name: t.name ?? "",
		sourceLabel: e.title ?? "Compendium",
		system: t,
		uuid: qE(e, t)
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/warhammer-spell-inputs.ts
async function xV() {
	let e = CV();
	if (!e) return sV("WFRP helper unavailable"), [];
	try {
		let t = await e.findAllItems(WB, "Loading Spells", !0, ["system.lore.value"]);
		return sV("WFRP helper raw result", {
			count: t.length,
			samples: t.slice(0, 10).map(dV)
		}), (await Promise.all(t.map((e) => SV(e)))).filter((e) => e !== null);
	} catch (e) {
		return cV("WFRP helper lookup failed.", e), [];
	}
}
async function SV(e) {
	if (typeof e == "string") {
		let t = await fromUuid(e);
		return nE(t) && t.type === "spell" ? fV(t, pV(t)) : null;
	}
	if (nE(e)) return e.type === "spell" ? fV(e, pV(e)) : null;
	if (X(e, ["type"]) !== "spell") return null;
	let t = X(e, ["name"]);
	return t ? {
		img: X(e, ["img"]) || X(e, ["thumb"]),
		name: t,
		sourceLabel: mV(X(e, ["uuid"]), "WFRP Item Lookup"),
		system: Y(e, ["system"]),
		uuid: X(e, ["uuid"])
	} : null;
}
function CV() {
	let e = Y(globalThis, [
		"warhammer",
		"utility",
		"findAllItems"
	]);
	return typeof e == "function" ? { findAllItems: e } : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/spell-resolution-inputs.ts
async function wV() {
	let e = [], n = [...game.packs ?? []];
	sV("Candidate lookup start", {
		itemPacks: n.filter(gV).length,
		totalPacks: n.length,
		warhammerUtilityAvailable: !!DV(),
		worldItems: game.items?.contents.length ?? 0
	});
	let r = await xV();
	sV("WFRP helper lookup complete", {
		utilityInputs: r.length,
		utilitySamples: r.slice(0, 10).map(uV)
	}), e.push(...r), e.push(...TV()), sV("World spell scan complete", { worldSpellCount: e.filter((e) => e.sourceLabel === "World").length });
	for (let r of n) if (gV(r)) try {
		let t = await hV(r);
		e.push(...t), sV("Compendium spell scan complete", {
			inputCount: t.length,
			pack: lV(r),
			samples: t.slice(0, 5).map(uV)
		});
	} catch (e) {
		t(`wfrp4e-customizer-apps | Spell lookup skipped compendium "${r.title ?? r.collection ?? "unknown"}".`, e);
	}
	let i = EV(e);
	return sV("Candidate lookup complete", {
		rawInputCount: e.length,
		uniqueInputCount: i.length
	}), i;
}
function TV() {
	let e = [];
	for (let t of game.items?.contents ?? []) t.type === "spell" && e.push(fV(t, "World"));
	return e;
}
function EV(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.uuid || n.name.trim().toLocaleLowerCase();
		t.has(e) || t.set(e, n);
	}
	return [...t.values()];
}
function DV() {
	return Y(globalThis, [
		"warhammer",
		"utility",
		"findAllItems"
	]);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/index.ts
async function OV(e, t) {
	let n = [];
	for (let r of t) {
		if (!r.selected || _z(e, r.name, "spell")) continue;
		let t = gz(r.sourceUuid ? await jV(r.sourceUuid) : null, r.name, WB);
		t.type = WB, n.push(t);
	}
	n.length && await e.createEmbeddedDocuments("Item", n);
}
async function kV(e) {
	let t = YB(e, JB());
	if (sV("Grant resolution start", {
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
	let n = await wV(), r = /* @__PURE__ */ new Map(), i = [];
	for (let e of n) {
		let n = XB(e, t);
		if (!n) {
			i.length < 20 && i.push({
				loreTerms: ZB(e.system),
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
	return sV("Grant resolution complete", {
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
async function AV(e) {
	let t = oE(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Spell item here.");
	let n = aE(await fromUuid(t.uuid), WB, "Drop a Foundry Spell item here."), r = XB(fV(n, "Dropped"), [...JB(), QB()]) ?? $B(ZB(n.system)[0] ?? "");
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
async function jV(e) {
	let t = await fromUuid(e);
	return nE(t) && t.type === "spell" ? t : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/build-npc.ts
async function MV(e) {
	let t = await HB(e.careers), n = await PV(e);
	if (!n) throw Error("Foundry did not create the NPC Actor.");
	let r = FV(e), i = e.careers.at(-1), a = {
		name: r,
		"prototypeToken.name": r
	}, o = X(n.system, [
		"details",
		"gmnotes",
		"value"
	]), s = NV(o);
	s !== o && (a["system.details.gmnotes.value"] = s);
	let c = e.portraitPath || i?.img || "";
	return c && (a.img = c, a["prototypeToken.texture.src"] = c), await n.update(a), await UB(n, t), await Rz(n, e.advancements), await $z(n, e.traits), await wB(n, e.trappings), await OV(n, e.spells), n.sheet?.render(!0), ui.notifications?.info(`Created NPC "${r}".`), {
		name: r,
		uuid: n.uuid
	};
}
function NV(e) {
	return e.replaceAll(/(?:<hr\s*\/?>)?<section data-wfrp-customizer-npc-xp="true">[\S\s]*?<\/section>/g, "").trim();
}
async function PV(e) {
	let t = rE(await fromUuid(e.baseActorUuid)).toObject(), n = pB(e.settings.outputActorFolderUuid);
	return delete t._id, delete t.folder, t.type = "npc", rB(t), n && (t.folder = n.id), await Actor.create(t);
}
function FV(e) {
	if (!e.settings.includeSpeciesInName) return e.actorName;
	let t = game.actors.contents.find((t) => t.uuid === e.baseActorUuid), n = t ? RB(t) : "";
	return !n || e.actorName.toLocaleLowerCase().includes(n.toLocaleLowerCase()) ? e.actorName : `${n} ${e.actorName}`;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/candidate-utils.ts
function IV(e, t) {
	let n = t.img.trim().toLocaleLowerCase();
	!n || e.seenPaths.has(n) || (e.seenPaths.add(n), e.candidates.push(t));
}
function LV(e, t) {
	let n = t.imagePaths.filter(({ path: e }) => !!e);
	if (WV(t.name, n, e.searchTerms)) for (let r of n) IV(e, {
		img: r.path,
		key: `foundry-asset:${t.sourceKey}:${r.label}`,
		label: `${t.name || VV(r.path)} ${r.label} (${t.sourceLabel})`,
		source: "foundry-asset"
	});
}
function RV(e, t, n) {
	e?.({
		candidatesFound: t.candidates.length,
		currentLocation: n.currentLocation,
		directoriesVisited: t.visitedDirectories,
		maxDirectories: n.maxDirectories,
		phase: n.phase
	});
}
function zV(e) {
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
function BV(e, t) {
	return `${VV(e)} (${t})`;
}
function VV(e) {
	return e.split(/[/\\]/).at(-1) ?? e;
}
function HV(e) {
	return typeof e == "object" && !!e;
}
function UV(e) {
	return HV(e) && Object.values(e).every((e) => Array.isArray(e) && e.every((e) => typeof e == "string"));
}
function WV(e, t, n) {
	return wP(e, n) || t.some(({ path: e }) => wP(e, n));
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/dig-down.ts
var GV = "fuzzy-foundry", KV = .3, qV = new Set([
	".webp",
	".png",
	".jpg",
	".jpeg",
	".gif"
]);
function JV(e, t) {
	let n = YV();
	if (RV(t, e, {
		currentLocation: ZV(n),
		maxDirectories: 0,
		phase: "filesystem"
	}), !n.digDownActive || !n.digDownCacheReady) return;
	let r = eH();
	if (!(!r?._fileIndexCache || !r.fs)) {
		for (let t of QV(r, e.searchTerms)) $V(e, r, t);
		RV(t, e, {
			currentLocation: "Dig Down file cache search complete",
			maxDirectories: 0,
			phase: "filesystem"
		});
	}
}
function YV() {
	let e = game.modules.get(GV)?.active === !0, t = XV(), n = eH(), r = Object.values(n?._fileIndexCache ?? {}).reduce((e, t) => e + t.length, 0);
	return {
		digDownActive: e,
		digDownCacheReady: !!(n?._fileIndexCache && n.fs),
		digDownDeepFileSearchEnabled: t,
		digDownIndexedFileCount: r
	};
}
function XV() {
	try {
		return game.settings.get(GV, "deepFile") === !0;
	} catch {
		return !1;
	}
}
function ZV(e) {
	return e.digDownActive ? e.digDownDeepFileSearchEnabled ? e.digDownCacheReady ? `Dig Down file cache (${e.digDownIndexedFileCount} files)` : "Waiting for Dig Down file cache" : "Dig Down Deep File Search is disabled" : "Dig Down is not active";
}
function QV(e, t) {
	let n = /* @__PURE__ */ new Set(), r = Object.keys(e._fileIndexCache ?? {});
	for (let i of t) {
		let t = i.toLocaleLowerCase();
		for (let e of r) e.toLocaleLowerCase().includes(t) && n.add(e);
		let a = e.fs?.get(i, [], KV) ?? [];
		for (let [, e] of a) n.add(e);
	}
	return [...n].sort((e, t) => e.toLocaleLowerCase().localeCompare(t.toLocaleLowerCase()));
}
function $V(e, t, n) {
	let r = t._fileIndexCache?.[n] ?? [];
	for (let t of r) tH(t) && IV(e, {
		img: t,
		key: `foundry-asset:${t}`,
		label: BV(t, "Dig Down"),
		source: "foundry-asset"
	});
}
function eH() {
	let e = canvas.deepSearchCache;
	if (!HV(e)) return null;
	let t = e._fileIndexCache, n = e.fs, r = {};
	return UV(t) && (r._fileIndexCache = t), HV(n) && typeof n.get == "function" && (r.fs = { get: n.get.bind(n) }), r;
}
function tH(e) {
	let t = `.${e.split(/[#?]/)[0]?.split(".").pop() ?? ""}`;
	return qV.has(t.toLocaleLowerCase());
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/documents.ts
function nH(e, t) {
	RV(t, e, {
		currentLocation: "World Actors and Items",
		maxDirectories: 0,
		phase: "world-documents"
	});
	for (let t of game.actors.contents) LV(e, {
		imagePaths: [{
			label: "actor image",
			path: t.img ?? ""
		}, {
			label: "token image",
			path: zV(t)
		}],
		name: t.name,
		sourceLabel: "World Actors",
		sourceKey: t.uuid
	});
	for (let t of game.items?.contents ?? []) LV(e, {
		imagePaths: [{
			label: "item image",
			path: t.img ?? ""
		}],
		name: t.name,
		sourceLabel: "World Items",
		sourceKey: t.uuid
	});
}
async function rH(e, t) {
	RV(t, e, {
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
		] }).catch(() => void 0), r = n ? XE(n) : [];
		for (let n of r) LV(e, {
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
					path: X(n, [
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
async function iH(e, t) {
	if (!e.searchTerms.length) return [];
	let n = {
		candidates: [],
		maxDirectoryBudget: 0,
		searchTerms: e.searchTerms,
		seenPaths: /* @__PURE__ */ new Set(),
		visitedDirectories: 0
	};
	return e.includeCompendiumAssets && (nH(n, t), await rH(n, t)), e.includeFilePickerAssets && JV(n, t), RV(t, n, {
		currentLocation: "Portrait search complete",
		maxDirectories: n.maxDirectoryBudget,
		phase: "ready"
	}), n.candidates;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/index.ts
var aH = {
	buildNpc: MV,
	ensureActorFolder: lB,
	ensureItemFolder: uB,
	findLowerCareerCandidates: WR,
	getPortraitSearchAvailability: async () => YV(),
	importRecommendedQuickTraits: vB,
	listActorFolders: async () => dB(),
	listBaseActors: async (e) => PB(e),
	listFoundryPortraitCandidates: iH,
	listMagicLoreOptions: qB,
	listSpellsForMagicGrants: kV,
	listItemFolders: async () => fB(),
	listQuickTraits: yB,
	listSkillCharacteristics: oz,
	listSkillSpecializations: az,
	listTalentMaximums: Cz,
	listTraitDifficultyOptions: oB,
	loadBaseActorDraftData: FB,
	loadSettings: async () => Nz(),
	resolveActorDrop: IB,
	resolveCareerDrop: VB,
	resolveSpellDrop: AV,
	resolveTraitDrop: sB,
	resolveTrapping: TB,
	resolveTrappingDrop: EB,
	saveSettings: Pz
}, oH = class extends Mw {
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
		return OR;
	}
	getVueProps() {
		return { bridge: aH };
	}
}, sH = "wfrp4e-customizer-open-npc-builder", cH = "wfrp4e-customizer-open-species-builder";
function lH() {
	Hooks.on("renderActorDirectory", (e, t) => {
		let n = mH(t);
		n && uH(n);
	});
}
function uH(e) {
	let n = pH(e);
	if (!n) {
		t("wfrp4e-customizer-apps | Could not find Actor Directory button container.");
		return;
	}
	dH(e, n), fH(e, n);
}
function dH(e, t) {
	if (e.querySelector(`.${sH}`)) return;
	let n = document.createElement("button");
	n.classList.add(sH, "wfrp4e-customizer-actor-directory-button"), n.type = "button", n.innerHTML = "<i class=\"fa-solid fa-user-plus\" inert></i><span>NPC Builder App</span>", n.addEventListener("click", () => {
		new oH().render(!0);
	}), t.append(n);
}
function fH(e, t) {
	if (e.querySelector(`.${cH}`)) return;
	let n = document.createElement("button");
	n.classList.add(cH, "wfrp4e-customizer-actor-directory-button"), n.type = "button", n.innerHTML = "<i class=\"fa-solid fa-people-group\" inert></i><span>Species Builder</span>", n.addEventListener("click", () => {
		new gO().render(!0);
	}), t.append(n);
}
function pH(e) {
	return e.querySelector(".directory-header .header-actions") ?? e.querySelector(".directory-header .action-buttons") ?? e.querySelector(".header-actions") ?? e.querySelector(".action-buttons");
}
function mH(e) {
	return e instanceof HTMLElement ? e : hH(e) && e[0] instanceof HTMLElement ? e[0] : null;
}
function hH(e) {
	return typeof e == "object" && !!e && "length" in e;
}
//#endregion
//#region src/module/apps/npc-builder/estimated-xp/actor-profile.ts
function gH(e) {
	let t = e.toObject(), n = {};
	for (let e of Object.keys(Oc)) {
		let r = e;
		n[r] = Lz(t.system, r);
	}
	return {
		characteristics: n,
		skills: _H(e, "skill"),
		talents: _H(e, "talent")
	};
}
function _H(e, t) {
	return e.items?.contents.filter((e) => e.type === t).map((e) => ({
		name: e.name,
		value: t === "skill" ? vH(e.toObject().system) : yH(e.toObject().system)
	})) ?? [];
}
function vH(e) {
	return Il(e, [["advances", "value"], ["advances"]]) + Il(e, [["modifier", "value"], ["modifier"]]);
}
function yH(e) {
	return Il(e, [["advances", "value"], ["advances"]]);
}
//#endregion
//#region src/module/apps/npc-builder/estimated-xp/species-actor.ts
var bH = null;
async function xH(e, t, n) {
	let r = game.actors.contents, i = SH(n ? r.filter((e) => e.folder?.uuid === n) : [], e);
	if (i) return {
		actor: i,
		source: i.folder?.name ?? "Configured NPC Base Actors folder"
	};
	let a = SH(r.filter((e) => e.uuid !== t.uuid), e);
	if (a) return {
		actor: a,
		source: "World Actors"
	};
	let o = CH(await TH(), e);
	if (!o) return null;
	let s = await fromUuid(o.uuid);
	if (!DH(s)) throw Error(`The species Actor ${o.uuid} is no longer available.`);
	return {
		actor: s,
		source: o.source
	};
}
function SH(e, t) {
	return wH(e, t, (e) => e.name);
}
function CH(e, t) {
	return wH(e, t, (e) => e.name);
}
function wH(e, t, n) {
	let r = t.trim();
	return e.find((e) => n(e).trim() === r) ?? e.find((e) => wO(n(e)) === wO(t)) ?? null;
}
function TH() {
	return bH ??= EH(), bH;
}
async function EH() {
	let e = [];
	for (let t of game.packs ?? []) {
		if (!YE(t) || !t.getIndex) continue;
		let n = await t.getIndex({ fields: ["name"] });
		for (let r of XE(n)) {
			let n = qE(t, r);
			r.name && n && e.push({
				name: r.name,
				source: t.title ?? t.collection ?? "Actor Compendium",
				uuid: n
			});
		}
	}
	return e;
}
function DH(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Actor";
}
//#endregion
//#region src/module/apps/npc-builder/estimated-xp/estimate.ts
async function OH(e) {
	let t = rE(await fromUuid(e), "Expected an NPC Actor.");
	if (t.type !== "npc") throw Error(`Expected an NPC Actor, but received Actor type “${t.type}”.`);
	return await kH(t);
}
async function kH(e) {
	let t = RB(e);
	if (!t) return { status: "missing-species" };
	let n = await xH(t, e, Nz().baseActorFolderUuid);
	return n ? {
		baselineName: n.actor.name,
		baselineSource: n.source,
		baselineUuid: n.actor.uuid,
		breakdown: gk(gH(e), gH(n.actor)),
		species: t,
		status: "ready"
	} : {
		species: t,
		status: "baseline-not-found"
	};
}
//#endregion
//#region src/module/apps/npc-builder/estimated-xp/sheet.ts
var AH = "[data-wfrp-customizer-npc-xp=\"true\"]", jH = /* @__PURE__ */ new Set(), MH = !1, NH = !1;
function PH() {
	if (!MH) {
		MH = !0, Hooks.on("renderApplicationV2", (e, t) => {
			if (!(t instanceof HTMLElement)) return;
			let n = zH(e);
			n && FH(n, t);
		});
		for (let e of [
			"createActor",
			"updateActor",
			"deleteActor",
			"createItem",
			"updateItem",
			"deleteItem",
			"updateSetting"
		]) Hooks.on(e, BH);
	}
}
function FH(e, t) {
	let n = t.matches("section[data-tab=\"careers\"]") ? t : t.querySelector("section[data-tab=\"careers\"]");
	if (!n) return;
	n.querySelector(AH)?.remove();
	let r = IH(e, t), i = n.querySelector(".sheet-list.careers");
	i ? n.insertBefore(r.container, i) : n.append(r.container), VH(), LH(r), globalThis.setTimeout(() => {
		r.root.isConnected && r.root.contains(r.container) && (VH(), jH.add(r));
	}, 0);
}
function IH(e, t) {
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
async function LH(e) {
	let n = ++e.generation;
	e.output.value = "Calculating…";
	try {
		let t = await kH(e.actor);
		n === e.generation && e.root.contains(e.container) && RH(e, t);
	} catch (r) {
		n === e.generation && e.root.contains(e.container) && (e.output.value = "Unavailable", e.details.textContent = "XP calculation failed; see the console for details."), t("wfrp4e-customizer-apps | NPC XP calculation failed.", r);
	}
}
function RH(e, t) {
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
function zH(e) {
	if (typeof e != "object" || !e) return null;
	let t = "actor" in e ? e.actor : void 0, n = "document" in e ? e.document : void 0, r = tE(t) ? t : tE(n) ? n : null;
	return r?.type === "npc" ? r : null;
}
function BH() {
	NH || (NH = !0, globalThis.setTimeout(() => {
		NH = !1, VH();
		for (let e of jH) LH(e);
	}, 0));
}
function VH() {
	for (let e of jH) (!e.root.isConnected || !e.root.contains(e.container)) && jH.delete(e);
}
//#endregion
//#region src/module/apps/species-builder/apply-species-config.ts
var HH = [
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
function UH() {
	let n = game.wfrp4e?.config;
	if (!J(n)) {
		t(`${$} | WFRP config was unavailable; custom species were not applied.`);
		return;
	}
	let r = Jw(), i = new Set(J(n.species) ? Object.keys(n.species) : []), a = r.definitions.filter((e) => !i.has(e.key.trim()));
	GH(n, _l({
		...r,
		definitions: a
	})), a.length > 0 && e(`${$} | Applied ${a.length} custom species definition(s).`);
}
async function WH() {
	let n = game.wfrp4e?.config;
	if (!J(n)) {
		t(`${$} | WFRP config was unavailable; runtime species extensions were not applied.`);
		return;
	}
	let r = _l({
		...Jw(),
		definitions: []
	}, await qT());
	GH(n, r);
	let i = Object.values(r.subspecies).reduce((e, t) => e + Object.keys(t).length, 0);
	i > 0 && e(`${$} | Applied ${i} custom runtime-parent subspecies definition(s).`);
}
function GH(e, t) {
	for (let n of HH) KH(e, n, t[n]);
	qH(e, t.extraSpecies), JH(e, t.subspecies);
}
function KH(e, t, n) {
	if (Object.keys(n).length === 0) return;
	let r = e[t];
	if (!J(r)) {
		e[t] = { ...n };
		return;
	}
	Object.assign(r, n);
}
function qH(e, t) {
	if (t.length === 0) return;
	let n = Array.isArray(e.extraSpecies) ? e.extraSpecies : [], r = /* @__PURE__ */ new Set();
	for (let e of n) typeof e == "string" && r.add(e);
	for (let e of t) r.add(e);
	e.extraSpecies = [...r];
}
function JH(e, t) {
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
var YH = "2d10";
function XH(e) {
	let t = e?.split("+")[0]?.trim();
	return t ? QH(t) : YH;
}
function ZH(e, t) {
	return XH(e) === XH(t);
}
function QH(e) {
	return e.replaceAll(/\s+/g, "").toLocaleLowerCase();
}
//#endregion
//#region src/module/apps/species-builder/chargen-roll-swap-feedback.ts
var $H = "data-wfrp4e-customizer-roll-swap-feedback", eU = `[${$H}]`;
function tU(e, t) {
	let n = oU(e);
	if (n) {
		n.classList.add("wfrp4e-customizer-apps-root"), n.dataset.theme = "wfrp4e-customizer-apps";
		for (let e of aU(n)) e.addEventListener("dragstart", () => {
			let r = e.dataset.ch;
			r && nU(n, r, t);
		}), e.addEventListener("dragend", () => {
			iU(n);
		}), e.addEventListener("drop", () => {
			iU(n);
		});
	}
}
function nU(e, t, n) {
	iU(e);
	for (let r of aU(e)) {
		let e = r.dataset.ch;
		if (e) {
			if (e === t) {
				rU(r, "Dragging", "dui-badge-warning");
				continue;
			}
			n(t, e) ? rU(r, "Compatible", "dui-badge-success") : rU(r, "Cannot swap", "dui-badge-error");
		}
	}
}
function rU(e, t, n) {
	let r = document.createElement("span");
	r.setAttribute($H, ""), r.classList.add("dui-badge", n), r.textContent = t, e.append(r);
}
function iU(e) {
	for (let t of e.querySelectorAll(eU)) t.remove();
}
function aU(e) {
	return [...e.querySelectorAll(".ch-roll.ch-drag")];
}
function oU(e) {
	if (e instanceof HTMLElement) return e;
	if (!J(e)) return;
	let t = e[0];
	return t instanceof HTMLElement ? t : void 0;
}
//#endregion
//#region src/module/apps/species-builder/chargen-roll-swap-guard.ts
var sU = Symbol("wfrp4e-customizer-guarded-attributes-stage");
function cU() {
	Hooks.on("wfrp4e:chargen", (e) => {
		lU(e);
	});
}
function lU(n) {
	let r = uU(n);
	if (!r) {
		t(`${$} | Could not inspect WFRP character generation stages.`);
		return;
	}
	let i = dU(r);
	if (!i) {
		t(`${$} | Could not find the WFRP Attributes character generation stage.`);
		return;
	}
	if (fU(i.class)) return;
	let a = pU(i.class);
	typeof r.replaceStage == "function" ? r.replaceStage("attributes", a) : i.class = a, e(`${$} | Guarded WFRP characteristic roll swapping for custom species.`);
}
function uU(e) {
	if (!J(e)) return;
	let t = {}, n = e.replaceStage;
	return typeof n == "function" && (t.replaceStage = (t, r) => {
		n.call(e, t, r);
	}), Array.isArray(e.stages) && (t.stages = e.stages), t;
}
function dU(e) {
	for (let t of e.stages ?? []) if (J(t) && t.key === "attributes") return typeof t.class == "function" ? t : void 0;
}
function fU(e) {
	return !!e[sU];
}
function pU(e) {
	class t extends e {
		static [sU] = !0;
		activateListeners(e) {
			let t = super.activateListeners(e);
			return tU(e, (e, t) => ZH(mU(this, e), mU(this, t))), t;
		}
		swap(e, t) {
			let n = mU(this, e), r = mU(this, t);
			if (ZH(n, r)) return super.swap(e, t);
			hU(e, n, t, r);
		}
	}
	return t;
}
function mU(e, t) {
	let n = J(e.context) ? e.context : void 0, r = J(n?.characteristics) ? n.characteristics : void 0, i = (J(r?.[t]) ? r[t] : void 0)?.formula;
	return typeof i == "string" ? i : void 0;
}
function hU(e, t, n, r) {
	let i = gU(e), a = gU(n), o = XH(t), s = XH(r);
	ui.notifications?.warn?.(`Cannot swap ${i} and ${a}: ${i} uses ${o}, while ${a} uses ${s}.`);
}
function gU(e) {
	let t = game.wfrp4e?.config?.characteristics;
	if (!J(t)) return e;
	let n = t[e];
	return typeof n == "string" ? n : e;
}
//#endregion
//#region src/module/debug/shape-inspector/constants.ts
var _U = `${$}.debugShapeProbes`, vU = "wfrp4eCustomizerShapeProbes", yU = "wfrp4eCustomizerShapePreset";
//#endregion
//#region src/module/debug/shape-inspector/utils.ts
function bU(e, t, n) {
	let r = Number(e);
	return Number.isFinite(r) ? Math.max(0, Math.min(n, Math.floor(r))) : t;
}
function xU(e) {
	return typeof e == "object" && !!e;
}
function SU(e) {
	return typeof e == "string" ? e.trim().toLocaleLowerCase() : "";
}
function CU(e) {
	try {
		return localStorage.getItem(e);
	} catch {
		return null;
	}
}
//#endregion
//#region src/module/debug/shape-inspector/path-resolver.ts
function wU(e) {
	let t = AU(e), n = TU(globalThis, t.root);
	for (let e of t.tokens) {
		if (e.type === "property") {
			n = TU(n, e.key);
			continue;
		}
		if (e.type === "index") {
			n = TU(n, String(e.index));
			continue;
		}
		n = EU(n, e.name, e.args);
	}
	return n;
}
function TU(e, t) {
	if (!(!xU(e) && typeof e != "function")) try {
		return e[t];
	} catch {
		return;
	}
}
function EU(e, t, n) {
	if (t === "at") {
		let t = Number(n[0] ?? 0), r = Number.isFinite(t) ? t : 0;
		return jU(e).at(r);
	}
	if (t === "findByName") {
		let t = SU(n[0] ?? "");
		return jU(e).find((e) => SU(TU(e, "name")) === t);
	}
	if (t === "findByType") {
		let t = SU(n[0] ?? "");
		return jU(e).find((e) => SU(TU(e, "type")) === t);
	}
	if (t === "get") {
		let t = n[0] ?? "";
		if (e instanceof Map) return e.get(t);
		let r = TU(e, "get");
		if (typeof r == "function") return r.call(e, t);
	}
	if (t === "sample") {
		let t = bU(n[0], 3, 60);
		return jU(e).slice(0, t);
	}
	throw Error(`Unsupported path method "${t}".`);
}
function DU(e) {
	return e.trim() ? e.split(",").map((e) => kU(e.trim())).map(String) : [];
}
function OU(e) {
	let t = e.trim();
	return /^-?\d+$/.test(t) ? Number(t) : kU(t);
}
function kU(e) {
	let t = /^["'](?<value>.*)["']$/.exec(e);
	return t?.groups ? t.groups.value ?? "" : e;
}
function AU(e) {
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
				args: DU(e.groups.args ?? ""),
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
				index: OU(e),
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
function jU(e) {
	if (Array.isArray(e)) return e;
	let t = TU(e, "contents");
	return Array.isArray(t) ? t : [];
}
//#endregion
//#region src/module/debug/shape-inspector/presets.ts
var MU = { "npc-builder": [
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
function NU() {
	return window.location.href.includes("wfrp4eCustomizerShapeProbes") || window.location.href.includes("wfrp4eCustomizerShapePreset");
}
function PU(e) {
	let t = {
		hook: e.hook ?? "ready",
		maxDepth: bU(e.maxDepth, 2, 6),
		maxEntries: bU(e.maxEntries, 12, 60),
		path: e.path.trim()
	};
	return e.label && (t.label = e.label), t;
}
function FU() {
	return [...IU(), ...LU()].map(PU);
}
function IU() {
	let e = CU(_U);
	if (!e) return [];
	try {
		let t = JSON.parse(e);
		return Array.isArray(t) ? t.filter(zU).map(PU) : [];
	} catch {
		return [];
	}
}
function LU() {
	let e = [], t = [new URLSearchParams(window.location.search), new URLSearchParams(window.location.hash.replace(/^#/, ""))];
	for (let n of t) {
		let t = n.get(yU), r = n.get(vU);
		t && e.push(...MU[t] ?? []), r && e.push(...RU(r));
	}
	return window.location.href.includes("wfrp4eCustomizerShapePreset=npc-builder") && !e.length && e.push(...MU["npc-builder"] ?? []), e;
}
function RU(e) {
	try {
		let t = JSON.parse(decodeURIComponent(e));
		return Array.isArray(t) ? t.filter(zU) : [];
	} catch (e) {
		return t(`${$} | Could not parse URL shape probes.`, e), [];
	}
}
function zU(e) {
	return typeof e != "object" || !e ? !1 : "path" in e && typeof e.path == "string";
}
//#endregion
//#region src/module/debug/shape-inspector/summary.ts
function BU(e, t) {
	return !xU(e) && typeof e != "function" ? GU(e) : typeof e == "function" ? UU(e) : Array.isArray(e) ? VU(e, t) : e instanceof Map ? HU(e, t) : WU(e, t);
}
function VU(e, t) {
	return {
		length: e.length,
		sample: e.slice(0, t.maxEntries).map((e) => BU(e, qU(t))),
		type: "array"
	};
}
function HU(e, t) {
	return {
		sample: [...e.entries()].slice(0, t.maxEntries).map(([e, n]) => ({
			key: BU(e, qU(t)),
			value: BU(n, qU(t))
		})),
		size: e.size,
		type: "Map"
	};
}
function UU(e) {
	return {
		name: e.name,
		type: "function"
	};
}
function WU(e, t) {
	if (t.seen.has(e)) return { type: "circular" };
	t.seen.add(e);
	let n = KU(e, t.maxEntries), r = TU(e, "constructor"), i = {
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
		let n = TU(e, t);
		typeof n == "string" && (i[t] = n);
	}
	if (t.maxDepth <= 0) return i;
	let a = {};
	for (let r of n) a[r] = BU(TU(e, r), qU(t));
	i.properties = a;
	let o = TU(e, "toObject");
	if (typeof o == "function") try {
		i.source = BU(o.call(e), qU(t));
	} catch (e) {
		i.source = {
			error: e instanceof Error ? e.message : String(e),
			type: "error"
		};
	}
	return i;
}
function GU(e) {
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
function KU(e, t) {
	return Object.keys(e).sort().slice(0, t);
}
function qU(e) {
	return {
		maxDepth: e.maxDepth - 1,
		maxEntries: e.maxEntries,
		seen: e.seen
	};
}
//#endregion
//#region src/module/debug/shape-inspector/index.ts
function JU() {
	localStorage.removeItem(_U), e(`${$} | Cleared debug shape probes.`);
}
function YU() {
	return FU();
}
function XU(e, t = {}) {
	let n = $U(e, t);
	return tW(n), n;
}
function ZU() {
	let t = FU();
	for (let e of ["init", "setup"]) {
		let n = t.filter((t) => t.hook === e);
		n.length && Hooks.once(e, () => {
			for (let t of n) eW(t, e);
		});
	}
	Hooks.once("ready", () => {
		let t = FU().filter((e) => (e.hook ?? "ready") === "ready");
		NU() && e(`${$} | Debug shape ready probes discovered: ${t.length}`, window.location.href);
		for (let e of t) eW(e, "ready");
	});
}
function QU(t) {
	let n = t.map(PU);
	localStorage.setItem(_U, JSON.stringify(n)), e(`${$} | Stored ${n.length} debug shape probe(s). Reload Foundry to run init/setup probes.`);
}
function $U(e, t = {}, n) {
	let r = bU(t.maxDepth, 2, 6), i = bU(t.maxEntries, 12, 60), a = wU(e), o = {
		inspectedAt: (/* @__PURE__ */ new Date()).toISOString(),
		label: t.label || e,
		maxDepth: r,
		maxEntries: i,
		path: e,
		value: BU(a, {
			maxDepth: r,
			maxEntries: i,
			seen: /* @__PURE__ */ new WeakSet()
		})
	};
	return n && (o.hook = n), o;
}
function eW(e, n) {
	try {
		tW($U(e.path, e, n));
	} catch (n) {
		t(`${$} | Debug shape probe failed for "${e.path}".`, n);
	}
}
function tW(t) {
	e(`${$} | Debug shape probe: ${t.label}`, JSON.stringify(t, null, 2));
}
//#endregion
//#region src/view/components/ApplicationShell.vue?vue&type=script&setup=true&lang.ts
var nW = ["aria-label"], rW = { class: "dui-card-body" }, iW = { class: "dui-card-title" }, aW = { key: 0 }, oW = {
	key: 0,
	class: "dui-card-actions"
}, sW = /* @__PURE__ */ P({
	__name: "ApplicationShell",
	props: {
		description: {},
		title: {}
	},
	setup(e) {
		return (t, n) => (L(), R("section", {
			"aria-label": e.title,
			class: "dui-card"
		}, [B("div", rW, [
			B("header", null, [
				B("h1", iW, k(e.title), 1),
				e.description ? (L(), R("p", aW, k(e.description), 1)) : U("", !0),
				Ur(t.$slots, "header")
			]),
			Ur(t.$slots, "default"),
			t.$slots.actions ? (L(), R("div", oW, [Ur(t.$slots, "actions")])) : U("", !0)
		])], 8, nW));
	}
}), cW = { class: "dui-list" }, lW = /* @__PURE__ */ P({
	__name: "DaisyExampleApp",
	setup(e) {
		let t = [
			"button",
			"badge",
			"card",
			"alert"
		];
		return (e, n) => (L(), z(sW, {
			description: "A quick visual check of the module's isolated Daisy component theme.",
			title: "Daisy Probe"
		}, {
			header: N(() => [...n[0] ||= [B("span", { class: "dui-badge dui-badge-primary" }, "Scoped", -1), B("span", { class: "dui-badge dui-badge-outline" }, "Foundry-safe", -1)]]),
			actions: N(() => [...n[1] ||= [B("span", { class: "dui-badge dui-badge-success" }, "Ready", -1)]]),
			default: N(() => [n[2] ||= B("div", { class: "dui-alert dui-alert-info" }, [B("span", null, "DaisyUI is available inside this Vue application root.")], -1), B("ul", cW, [(L(), R(I, null, F(t, (e) => B("li", {
				key: e,
				class: "dui-list-row"
			}, k(e), 1)), 64))])]),
			_: 1
		}));
	}
}), uW = class extends Mw {
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
		return lW;
	}
}, dW = { class: "dui-list" }, fW = { class: "dui-list-row" }, pW = { class: "dui-list-row" }, mW = { class: "dui-list-row" }, hW = /* @__PURE__ */ P({
	__name: "WorkbenchApp",
	props: {
		openDaisyProbe: { type: Function },
		openNpcBuilder: { type: Function },
		openSpeciesBuilder: { type: Function }
	},
	setup(e) {
		return (t, n) => (L(), z(sW, {
			description: "Open a focused WFRP4e authoring workflow.",
			title: "Customizer Workbench"
		}, {
			default: N(() => [B("ul", dW, [
				B("li", fW, [n[3] ||= B("div", { class: "dui-list-col-grow" }, [B("strong", null, "NPC Builder"), B("p", null, "Build an NPC from a base Actor, Careers, traits, trappings, and spells.")], -1), B("button", {
					"aria-label": "Open NPC Builder",
					class: "dui-btn dui-btn-primary",
					type: "button",
					onClick: n[0] ||= (...t) => e.openNpcBuilder && e.openNpcBuilder(...t)
				}, " Open ")]),
				B("li", pW, [n[4] ||= B("div", { class: "dui-list-col-grow" }, [B("strong", null, "Species Builder"), B("p", null, "Author custom species and apply them to WFRP character generation.")], -1), B("button", {
					"aria-label": "Open Species Builder",
					class: "dui-btn",
					type: "button",
					onClick: n[1] ||= (...t) => e.openSpeciesBuilder && e.openSpeciesBuilder(...t)
				}, " Open ")]),
				B("li", mW, [n[5] ||= B("div", { class: "dui-list-col-grow" }, [B("strong", null, "DaisyUI Probe"), B("p", null, "Check the module's scoped component theme.")], -1), B("button", {
					"aria-label": "Open DaisyUI Probe",
					class: "dui-btn dui-btn-ghost",
					type: "button",
					onClick: n[2] ||= (...t) => e.openDaisyProbe && e.openDaisyProbe(...t)
				}, " Open ")])
			])]),
			_: 1
		}));
	}
}), gW = class extends Mw {
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
		return hW;
	}
	getVueProps() {
		return {
			openDaisyProbe: () => new uW().render(!0),
			openNpcBuilder: () => new oH().render(!0),
			openSpeciesBuilder: () => new gO().render(!0)
		};
	}
};
//#endregion
//#region src/module/register-module-menus.ts
function _W() {
	game.settings.registerMenu($, "workbench", {
		hint: "Open the WFRP4e Customizer Apps workbench.",
		icon: "fa-solid fa-screwdriver-wrench",
		label: "Open Workbench",
		name: "WFRP4e Customizer Apps",
		restricted: !0,
		type: gW
	}), game.settings.registerMenu($, "npc-builder", {
		hint: "Build a WFRP4e NPC from a base Actor and Career items.",
		icon: "fa-solid fa-user-plus",
		label: "Open NPC Builder",
		name: "WFRP4e NPC Builder",
		restricted: !0,
		type: oH
	}), game.settings.registerMenu($, "species-builder", {
		hint: "Create custom WFRP4e species definitions for character generation.",
		icon: "fa-solid fa-people-group",
		label: "Open Species Builder",
		name: "WFRP4e Species Builder",
		restricted: !0,
		type: gO
	}), game.settings.registerMenu($, "daisy-example", {
		hint: "Open a small isolated DaisyUI component probe.",
		icon: "fa-solid fa-flask",
		label: "Open Daisy Probe",
		name: "WFRP4e Daisy Probe",
		restricted: !0,
		type: uW
	});
}
//#endregion
//#region src/module/register-module-settings.ts
function vW() {
	Mz(), qw();
}
//#endregion
//#region src/functions/item-grants/wfrp-grant-effect.ts
var yW = "generatedGrantItemsEffect", bW = {
	grantMode: "all",
	lifetime: "linked-to-effect",
	ownerAction: "keep"
};
function xW(e) {
	let t = e.recipe ?? bW;
	SW(t);
	let n = e.items.map((e) => e.uuid);
	return {
		changes: [],
		description: wW(e.effectName, e.items, t),
		disabled: !1,
		flags: { [e.flagScope]: {
			[yW]: !0,
			itemUuids: n,
			recipe: t
		} },
		img: e.items[0]?.img ?? "icons/svg/aura.svg",
		name: e.effectName,
		system: {
			scriptData: [{
				label: e.effectName,
				script: CW(n, t),
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
function SW(e) {
	if (e.lifetime === "linked-to-effect" && e.ownerAction === "delete-after-grant") throw Error("Self-removing grant effects must create detached item copies.");
}
function CW(e, t) {
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
function wW(e, t, n) {
	let r = TW(e), i = t.map((e) => `<li>${TW(e.name)}</li>`).join("");
	return `<p><strong>${r}</strong>: grants item copies; ${n.lifetime === "linked-to-effect" ? "granted item copies are removed with this effect" : "granted item copies remain after this effect is removed"}.${n.ownerAction === "delete-after-grant" ? " The source Item removes itself after granting." : ""}</p><ul>${i}</ul>`;
}
function TW(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
//#endregion
//#region src/view/apps/grant-builder/GrantBuilderApp.vue?vue&type=script&setup=true&lang.ts
var EW = { class: "dui-card dui-card-border dui-card-sm" }, DW = { class: "dui-card-body" }, OW = { class: "dui-list" }, kW = {
	key: 0,
	class: "dui-list-row"
}, AW = ["src"], jW = { class: "dui-list-col-grow" }, MW = ["title", "onClick"], NW = { class: "dui-card dui-card-border dui-card-sm" }, PW = { class: "dui-card-body" }, FW = { class: "dui-fieldset" }, IW = { class: "dui-label" }, LW = ["value"], RW = { class: "dui-card-body" }, zW = { class: "dui-fieldset" }, BW = { class: "dui-label" }, VW = ["checked"], HW = { class: "dui-label" }, UW = ["checked"], WW = { class: "dui-label" }, GW = ["checked", "disabled"], KW = ["disabled"], qW = /* @__PURE__ */ P({
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
		return (n, r) => (L(), z(sW, {
			description: `Build an item-granting Active Effect on ${e.carrierName}.`,
			title: "Grant Builder"
		}, {
			actions: N(() => [B("button", {
				class: "dui-btn dui-btn-ghost",
				type: "button",
				onClick: r[5] ||= (...t) => e.onCancel && e.onCancel(...t)
			}, "Cancel"), B("button", {
				class: "dui-btn dui-btn-primary",
				type: "button",
				disabled: e.items.length === 0,
				onClick: r[6] ||= (...t) => e.onCreate && e.onCreate(...t)
			}, " Create Grant Effect ", 8, KW)]),
			default: N(() => [
				B("section", EW, [B("div", DW, [
					r[8] ||= B("h2", { class: "dui-card-title" }, "Granted Items", -1),
					V(fy, {
						description: "World and compendium Items can be added one at a time.",
						"manual-entry-trigger": "button",
						title: "Drop Items Here",
						onDropData: e.onDropData
					}, null, 8, ["onDropData"]),
					B("ul", OW, [e.items.length === 0 ? (L(), R("li", kW, "No granted items configured.")) : (L(!0), R(I, { key: 1 }, F(e.items, (t) => (L(), R("li", {
						key: t.uuid,
						class: "dui-list-row"
					}, [
						t.img ? (L(), R("img", {
							key: 0,
							alt: "",
							src: t.img
						}, null, 8, AW)) : U("", !0),
						B("div", jW, [B("strong", null, k(t.name), 1), B("small", null, k(t.uuid), 1)]),
						B("button", {
							class: "dui-btn dui-btn-ghost dui-btn-sm dui-btn-square",
							type: "button",
							title: `Remove ${t.name}`,
							onClick: (n) => e.onRemoveItem(t.uuid)
						}, [...r[7] ||= [B("i", {
							class: "fa-solid fa-times",
							"aria-hidden": "true"
						}, null, -1)]], 8, MW)
					]))), 128))])
				])]),
				B("section", NW, [B("div", PW, [B("fieldset", FW, [r[10] ||= B("legend", { class: "dui-fieldset-legend" }, "Effect", -1), B("label", IW, [r[9] ||= B("span", null, "Effect name", -1), B("input", {
					class: "dui-input",
					value: e.effectName,
					type: "text",
					onInput: r[0] ||= (n) => e.onEffectNameInput(t(n))
				}, null, 40, LW)])])])]),
				B("form", {
					class: "dui-card dui-card-border dui-card-sm",
					onSubmit: r[4] ||= Yo(() => {}, ["prevent"])
				}, [B("div", RW, [B("fieldset", zW, [
					r[14] ||= B("legend", { class: "dui-fieldset-legend" }, "Granted Item Lifetime", -1),
					B("label", BW, [B("input", {
						class: "dui-radio",
						name: "grant-lifetime",
						type: "radio",
						value: "linked-to-effect",
						checked: e.lifetime === "linked-to-effect",
						onChange: r[1] ||= (t) => e.onLifetimeChange("linked-to-effect")
					}, null, 40, VW), r[11] ||= B("span", null, [
						B("strong", null, "Linked to this effect"),
						B("br"),
						H(" Granted Items are removed when this effect is deleted. ")
					], -1)]),
					B("label", HW, [B("input", {
						class: "dui-radio",
						name: "grant-lifetime",
						type: "radio",
						value: "detached",
						checked: e.lifetime === "detached",
						onChange: r[2] ||= (t) => e.onLifetimeChange("detached")
					}, null, 40, UW), r[12] ||= B("span", null, [
						B("strong", null, "Detached copies"),
						B("br"),
						H(" Granted Items remain after this effect or source Item is removed. ")
					], -1)]),
					B("label", WW, [B("input", {
						class: "dui-checkbox",
						type: "checkbox",
						checked: e.ownerAction === "delete-after-grant",
						disabled: e.lifetime !== "detached",
						onChange: r[3] ||= (t) => e.onOwnerActionChange(e.ownerAction === "delete-after-grant" ? "keep" : "delete-after-grant")
					}, null, 40, GW), r[13] ||= H(" Remove the source Item after granting. ", -1)])
				])])], 32)
			]),
			_: 1
		}, 8, ["description"]));
	}
});
//#endregion
//#region src/module/wfrp4e/grant/item-documents.ts
function JW(e) {
	let t = e.dataTransfer?.getData("text/plain") ?? "";
	if (!t) return null;
	try {
		return oE(t).type === "Item" ? t : null;
	} catch {
		return null;
	}
}
async function YW(e) {
	let t = oE(e);
	if (!t.uuid) throw Error("Drop an Item with a resolvable UUID.");
	return iE(await fromUuid(t.uuid), "The dropped Item was not found.");
}
function XW(e) {
	let t = {
		name: e.name,
		uuid: e.uuid
	};
	return e.img && (t.img = e.img), t;
}
//#endregion
//#region src/module/apps/grant-builder/GrantBuilderApplication.ts
var ZW = "detached", QW = class extends Mw {
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
		return qW;
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
		this.#r = e, e !== ZW && (this.#i = "keep"), this.render();
	}
	changeOwnerAction(e) {
		this.#i = e, this.render();
	}
	removeItem(e) {
		this.#n = this.#n.filter((t) => t.uuid !== e), this.render();
	}
	async handleDrop(e) {
		try {
			let t = await YW(e);
			if (t.uuid === this.carrierItem.uuid) throw Error("An Item cannot grant itself.");
			if (this.#n.some((e) => e.uuid === t.uuid)) {
				ui.notifications?.warn?.(`"${t.name}" is already in this grant effect.`);
				return;
			}
			this.#n = [...this.#n, XW(t)], this.updateDefaultEffectName(), this.render();
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
			}, n = xW({
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
}, $W = new Set(["talent", "trait"]), eG = /* @__PURE__ */ new WeakSet(), tG = !1, nG = "wfrp4e-customizer-grant-builder-button", rG = [
	"section[data-application-part=\"effects\"].active",
	"section[data-tab=\"effects\"].active",
	".tab[data-tab=\"effects\"].active",
	".tab.effects.active"
].join(","), iG = [
	"section[data-application-part=\"effects\"]",
	"section[data-tab=\"effects\"]",
	".tab[data-tab=\"effects\"]",
	".tab.effects"
].join(",");
function aG() {
	tG || (tG = !0, Hooks.on("renderApplicationV2", (e, t) => {
		if (!(t instanceof HTMLElement)) return;
		let n = lG(e);
		!n || !$W.has(n.type) || (oG(n, t), sG(n, t));
	}));
}
function oG(e, t) {
	eG.has(t) || (eG.add(t), t.addEventListener("dragover", (e) => {
		uG(t, e.target) && (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "copy"));
	}, !0), t.addEventListener("drop", (n) => {
		cG(e, t, n);
	}, !0));
}
function sG(e, t) {
	if (t.querySelector(`.${nG}`)) return;
	let n = fG(t, { includeInactive: !0 });
	if (!n) return;
	let r = document.createElement("div");
	r.classList.add("wfrp4e-customizer-grant-builder-toolbar");
	let i = document.createElement("button");
	i.type = "button", i.classList.add(nG), i.title = "Open the advanced item grant builder", i.innerHTML = "<i class=\"fa-solid fa-sitemap\" aria-hidden=\"true\"></i><span>Grant Builder</span>", i.addEventListener("click", () => {
		new QW(e).render(!0);
	}), r.append(i), n.prepend(r);
}
async function cG(e, t, n) {
	if (!uG(t, n.target)) return;
	let r = JW(n);
	if (r) {
		n.preventDefault(), n.stopPropagation();
		try {
			let t = await YW(r);
			if (t.uuid === e.uuid) throw Error("An Item cannot grant itself.");
			let n = XW(t), i = xW({
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
function lG(e) {
	if (typeof e != "object" || !e) return null;
	let t = "item" in e ? e.item : void 0;
	if (nE(t)) return t;
	let n = "document" in e ? e.document : void 0;
	return nE(n) ? n : null;
}
function uG(e, t) {
	return !(t instanceof Element) || !e.contains(t) ? !1 : !!dG(e);
}
function dG(e) {
	return e.querySelector(rG) || fG(e, { includeInactive: !1 });
}
function fG(e, t) {
	return [...e.querySelectorAll(iG)].find((e) => t.includeInactive || e.offsetParent !== null) ?? null;
}
//#endregion
//#region src/module/api/create-module-api.ts
function pG() {
	return {
		clearDebugShapeProbes: JU,
		estimateNpcXp: OH,
		getDebugShapeProbes: YU,
		inspectPath: XU,
		listNpcAutoAdvanceStrategies: JA,
		async openDaisyExample() {
			await new uW().render(!0);
		},
		async openNpcBuilder() {
			await new oH().render(!0);
		},
		async openSpeciesBuilder() {
			await new gO().render(!0);
		},
		async openWorkbench() {
			await new gW().render(!0);
		},
		registerNpcAutoAdvanceStrategy: qA,
		setDebugShapeProbes: QU
	};
}
//#endregion
//#region src/module/api/register-module-api.ts
function mG() {
	let e = game.modules.get($);
	if (!e) throw Error(`Foundry module registry entry was not found for ${$}.`);
	e.api = pG();
}
//#endregion
//#region src/module/hooks/register-module-hooks.ts
function hG() {
	ZU(), Hooks.once("init", () => {
		e(`${$} | Initializing`), vW(), game.system.id === "wfrp4e" && (GT(), UH(), PH(), cU(), aG()), _W(), lH();
	}), Hooks.once("ready", () => {
		if (game.system.id !== "wfrp4e") {
			t(`${$} | Loaded outside ${yw}; skipping module API registration.`);
			return;
		}
		gG();
	});
}
async function gG() {
	await Promise.resolve();
	try {
		await KT(Jw().definitions.map(({ key: e }) => e)), await WH();
	} catch (e) {
		t(`${$} | Runtime species catalog could not be prepared: ${e instanceof Error ? e.message : "Unknown runtime adaptation error."}`);
	}
	mG(), UR(), sz(), XT(), cO(), e(`${$} | Ready`);
}
//#endregion
//#region src/main.ts
hG();
//#endregion

//# sourceMappingURL=wfrp4e-customizer-apps.mjs.map